// Caelum Review: Free Offline AI Chat for Android
// Slug: caelum-review
// Companion to: private-mind-review, pocketpal-ai-review, memoryai-review, google-ai-edge-gallery-review,
// best-local-llm-apps-android-2026
// Sources: Google Play listing (read 2026-10-19), the developer's website and privacy page as captured by the Internet
// Archive on 2026-05-10 (the domain caelum-app.me returns NXDOMAIN on 2026-10-19), and the developer's public GitHub
// profile — no hands-on use in the review itself (a separate hands-on test, caelum-hands-on-test, was added 2026-10-21). The request came from the site owner, not from the developer: no maker comment exists.
// Last upstream update 2025-08-14 => stale warning at the top (owner rule 2026-10-16), 9 locales.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-en.webp',
    title: 'Caelum Review: Free Offline AI Chat App for Android',
    seoTitle: 'Caelum Review: Free Offline AI Chat App for Android',
    intro:
      'Caelum is a free chat and document assistant for Android from Nolan Picard, an independent developer in France. According to its Google Play listing it runs its AI on the phone, needs no account and can optionally search the web through Brave. This review reflects the store listing and an archived copy of the developer\'s website and privacy policy, as checked on 19 October 2026.',
    metaDescription:
      'Caelum review: free, closed-source Android chat app that says its AI runs offline, with document questions and optional Brave web search. Limits and risks.',
    twitterDescription:
      'Caelum review: a free Android chat and document app that says its AI runs offline. What the Google Play listing and privacy policy claim, what is unverified, and why it may be unmaintained.',
    audience:
      'Android users who want a free chat app that works without an account, and who need to know what the sources confirm, what they do not, and whether the project is still maintained.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Caelum review',
    targetKeywords: [
      'caelum app review',
      'caelum local ai assistant',
      'offline ai chat app android',
      'private ai assistant android no account',
      'on-device document questions android',
      'com.reactnativeai',
      'caelum vs pocketpal',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Warning: Caelum has had no update since 14 August 2025 (version 1.3.1), so it may be unmaintained — check that it works on your device before relying on it.** **Caelum is a free, closed-source Android app that says it runs its AI offline, answers questions about your documents and can optionally search the web through Brave.**',
    quickAnswerTop: {
      en: {
        question: 'Is Caelum really offline and free?',
        answer:
          'According to its listing and privacy policy, yes: the install is free, no account is needed, and chat and document questions run on the phone. Neither claim was tested, and the optional web search sends your query to Brave.',
        bullets: [
          'Free on [Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai), for Android 7.0 or later.',
          'Document questions, including PDFs and images with text, since version 1.3.1.',
          'Light and dark mode and a tablet-friendly layout.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Caelum?', anchor: 'what-is-caelum' },
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
            text: 'Caelum is a closed-source Android app that, according to its developer, runs an AI assistant on the phone without an account and answers questions about documents you import.',
          },
          {
            type: 'plain-terms',
            text: 'You install it from Google Play and chat with it; imported documents are read on the phone, and web search is a separate optional feature that sends only your query to Brave. The developer does not name the model it uses.',
          },
        ],
        items: [
          'Developer: Nolan Picard, an independent developer in France, who published the first release on 10 July 2025 and calls version 1.3.1 the "10th official release".',
          'Reach: Google Play shows 10K+ downloads and a 4.1 average from 271 ratings, so the app has a modest public track record.',
          'Platform: Android 7.0 or later through Google Play only; no iPhone, desktop or web build was found.',
          'Website: the developer\'s domain no longer resolves, so the product page and privacy policy were read from Internet Archive captures.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the Google Play listing, an archived copy of the developer\'s website and privacy policy, and the developer\'s public GitHub profile, checked on 19 October 2026. This review itself involved no hands-on use or benchmarking; a separate first-hand test is linked below.',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'What Is Caelum?',
        content: [
          '**Caelum is an Android chat assistant that, according to its Google Play listing, runs "advanced on-device AI" instead of calling a cloud service.** The listing describes three parts: a private chat, a document reader in which you import files and ask questions about them, and an optional web search through Brave whose results are temporary. The listing is titled "Caelum - Local AI assistant"; the developer\'s site called it "Caelum - Local AI for Android".',
          'The listing names its developer as Nolan Picard, based in France; the app is published only on Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Caelum is installed from Google Play like any other Android app; no sideloading, terminal or account is involved.** The developer\'s website, which the listing links, no longer resolves, so the privacy policy is linked below as an archived copy.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          {
            'Platform': 'Android',
            'Where to get it': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) (free install, Android 7.0 or later)',
          },
          {
            'Platform': 'Website',
            'Where to get it': '[caelum-app.me](https://caelum-app.me/) (no DNS record on 19 October 2026; archived copy from 10 May 2026 available)',
          },
          {
            'Platform': 'Privacy policy',
            'Where to get it': '[Archived copy](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) (captured 10 May 2026; policy text dated June 2025)',
          },
        ],
        note: 'Version reviewed: 1.3.1, shown on Google Play as last updated on 14 August 2025; the listing gives 10 July 2025 as the first release. The 1.3.1 notes list better web search, support for images with text and PDFs, better document handling, message deletion, bug fixes and Ukrainian language support.',
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the Google Play description, the 1.3.1 release notes or the archived website.**',
        ],
        items: [
          '**Chat.** Natural conversation with the on-device AI, light and dark themes, a layout that adapts to tablets and, since 1.3.1, deletion of individual messages.',
          '**Document reader.** You import documents, ask questions and get answers; the listing says the files are processed on the phone. The 1.3.1 notes add support for images that contain text and for PDFs.',
          '**Optional web search.** Searches current information through Brave Search; the listing says results are temporary and no history is stored.',
          '**Languages.** Version 1.3.1 added Ukrainian; the sources do not list the other languages the interface or the AI supports.',
        ],
        note: 'The store description and the archived website agree on these points. The installed build is the final authority.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**According to the privacy policy, conversations stay on the device, documents are processed locally and not transmitted, and no account is created.** The policy lists what is not collected: name, email, phone number, location, a unique device identifier, advertising-tracking data, browsing history, financial and health data. It also says there is no central server and that external traffic uses HTTPS.',
          'The one declared outflow is the optional web search, which sends your search query to Brave Search. The Google Play Data safety section says "No data collected" and also that the app may share app activity with third parties, which matches the policy\'s own wording that search history in the app is collected and shared with Brave. Declared permissions include network access, keeping the device awake, reading and writing shared storage, Wi-Fi state, downloading files without notification and the Google Play licence check.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic. Anyone handling confidential documents should verify behavior on their own device first.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Android users who want a free chat and document app without an account.** Install is free and needs no sign-up.',
          '**Readers comparing offline Android chat apps.** The sources show what this one claims.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on performance.** This review itself does not assess speed, battery use or answer quality. The separate hands-on test (one phone, one session) covers the first run, photo input, web search and a logic prompt, but did not time answers or test offline use.',
          '**The model.** The listing says "advanced on-device AI" and the sources name no model, size, source or runtime, so it is unknown what the app actually runs.',
          '**Offline behavior.** Whether the AI is bundled or downloaded on first run, and whether the app works in airplane mode, is untested; the listing says no internet is needed after installation.',
          '**Hardware needs.** No RAM or storage requirement is stated; the only stated floor is Android 7.0.',
          '**License and source code.** The app is closed source; the developer\'s public GitHub profile holds no Caelum repository.',
          '**In-app purchases.** The install is free and the description names no purchases, yet the listing\'s content-rating labels mention in-app purchases.',
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
            'App': '[MemoryAI](/power-local-llm/memoryai-review)',
            'Platforms': 'iOS, Android',
            'Price / license': 'Free / closed source',
            'Key difference': 'Closed-source offline chat with document Q&A, editable memory and voice',
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
            q: 'Is Caelum the same as "React Native AI"?',
            a: 'The Google Play package is com.reactnativeai, but the product is called Caelum, and none of the sources describe it as anything other than the Caelum app.',
          },
          {
            q: 'Does Caelum work on iPhone or desktop?',
            a: 'No such build was found. The archived website called it local AI for Android and linked only Google Play.',
          },
          {
            q: 'Can I still reach the developer?',
            a: 'The domain caelum-app.me returned no DNS record on 19 October 2026 when checked with two public resolvers. The Google Play listing still shows a developer page and a support email address.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Caelum is a free Android chat and document app with a clear privacy pitch and no account, but that pitch is untested and the project appears unmaintained: it is closed source, names no model and has a website that no longer resolves. The missing updates described in the warning at the top weigh most. It suits readers who want to try a free assistant and accept those risks; anyone who needs a maintained app should compare [Private Mind](/power-local-llm/private-mind-review) or [PocketPal AI](/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Caelum on Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) — description, version, release notes, download count, ratings, Data safety section and permissions, checked 19 October 2026.',
          '[Caelum website, archived capture](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — the developer\'s product page as of 10 May 2026.',
          '[Caelum privacy policy, archived capture](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — data handling, web search and permissions; policy text dated June 2025.',
          '[nolanpcrd on GitHub](https://github.com/nolanpcrd) — the developer\'s public profile, checked 19 October 2026; it lists no Caelum repository.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Caelum Hands-on Test](/power-local-llm/caelum-hands-on-test) — a first-hand test on a OnePlus 8 Pro: it read a parcel slip from a photo, but one news answer was false and a hard logic prompt was rated poorly; every statement is labelled by how it is known.',
          '[Private Mind Review](/power-local-llm/private-mind-review) — a free, MIT-licensed offline chat app for iPhone and Android.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — a free, open-source on-device chat client for iOS and Android.',
          '[MemoryAI Review](/power-local-llm/memoryai-review) — a free offline chat app with editable memory for iPhone and Android.',
          '[Google AI Edge Gallery Review](/power-local-llm/google-ai-edge-gallery-review) — Google\'s open-source on-device AI app.',
          '[Best Local LLM Apps for Android in 2026](/power-local-llm/best-local-llm-apps-android-2026) — the broader Android roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Caelum Review: Free Offline AI Chat App for Android',
      description:
        'Caelum review: a free, closed-source Android chat and document app that says its AI runs offline. What the Google Play listing and privacy policy claim, what is unverified, and why it may be unmaintained.',
      url: 'https://www.promptquorum.com/power-local-llm/caelum-review',
      inLanguage: 'en',
      datePublished: '2026-10-19',
      dateModified: '2026-10-21',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'Android users evaluating a free offline AI chat app' },
      about: [
        { '@type': 'Thing', name: 'Caelum' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Android' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/caelum-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Caelum Review', item: 'https://www.promptquorum.com/power-local-llm/caelum-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-de.webp',
    title: 'Caelum-Rezension: Kostenlose Offline-KI-Chat-App für Android',
    seoTitle: 'Caelum-Rezension: Kostenlose Offline-KI-Chat-App Android',
    intro:
      'Caelum ist ein kostenloser Chat- und Dokumentassistent für Android von Nolan Picard, einem unabhängigen Entwickler in Frankreich. Laut Google-Play-Eintrag führt die App ihre KI auf dem Telefon aus, braucht kein Konto und kann optional über Brave im Web suchen. Diese Rezension gibt den Store-Eintrag sowie eine archivierte Kopie der Website und der Datenschutzerklärung des Entwicklers wieder, wie am 19. Oktober 2026 geprüft.',
    metaDescription:
      'Caelum-Rezension: kostenlose, nicht quelloffene Android-Chat-App, deren KI laut Entwickler offline läuft, mit Dokumentenfragen, optionaler Brave-Suche.',
    twitterDescription:
      'Caelum-Rezension: eine kostenlose Android-Chat- und Dokument-App, deren KI laut Entwickler offline läuft. Was der Google-Play-Eintrag und die Datenschutzerklärung behaupten, was ungeprüft ist und warum sie möglicherweise nicht mehr gepflegt wird.',
    audience:
      'Android-Nutzer, die eine kostenlose Chat-App ohne Konto suchen und wissen müssen, was die Quellen bestätigen, was nicht und ob das Projekt noch gepflegt wird.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Caelum Rezension',
    targetKeywords: [
      'caelum app test',
      'caelum lokaler ki-assistent',
      'offline ki chat app android',
      'private ki assistent android ohne konto',
      'dokumentenfragen auf dem gerät android',
      'com.reactnativeai',
      'caelum vs pocketpal',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Warnung: Caelum wurde seit dem 14. August 2025 (Version 1.3.1) nicht aktualisiert und wird möglicherweise nicht mehr gepflegt — prüfen Sie vor dem Einsatz, ob die App auf Ihrem Gerät funktioniert.** **Caelum ist eine kostenlose, nicht quelloffene Android-App, die ihre KI laut eigener Angabe offline ausführt, Fragen zu Ihren Dokumenten beantwortet und optional über Brave im Web suchen kann.**',
    quickAnswerTop: {
      de: {
        question: 'Läuft Caelum wirklich offline und kostenlos?',
        answer:
          'Laut Eintrag und Datenschutzerklärung ja: Die Installation ist kostenlos, ein Konto ist nicht nötig, und Chat sowie Dokumentenfragen laufen auf dem Telefon. Beide Angaben wurden nicht getestet, und die optionale Websuche sendet Ihre Suchanfrage an Brave.',
        bullets: [
          'Kostenlos bei [Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai), für Android 7.0 oder neuer.',
          'Fragen zu Dokumenten, seit Version 1.3.1 auch zu PDFs und Bildern mit Text.',
          'Heller und dunkler Modus sowie ein tablettgerechtes Layout.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Caelum?', anchor: 'what-is-caelum' },
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
            text: 'Caelum ist eine nicht quelloffene Android-App, die laut Entwickler einen KI-Assistenten ohne Konto auf dem Telefon ausführt und Fragen zu importierten Dokumenten beantwortet.',
          },
          {
            type: 'plain-terms',
            text: 'Sie installieren die App über Google Play und chatten mit ihr; importierte Dokumente werden auf dem Telefon gelesen, und die Websuche ist eine separate optionale Funktion, die nur Ihre Suchanfrage an Brave sendet. Der Entwickler nennt das verwendete Modell nicht.',
          },
        ],
        items: [
          'Entwickler: Nolan Picard, ein unabhängiger Entwickler in Frankreich, der die erste Version am 10. Juli 2025 veröffentlichte und Version 1.3.1 als „10. offizielle Veröffentlichung“ bezeichnet.',
          'Reichweite: Google Play zeigt 10K+ Downloads und eine durchschnittliche Bewertung von 4,1 bei 271 Bewertungen; die App hat also eine überschaubare öffentliche Erfolgsbilanz.',
          'Plattform: Android 7.0 oder neuer, nur über Google Play; ein Build für iPhone, Desktop oder Web wurde nicht gefunden.',
          'Website: Die Domain des Entwicklers löst nicht mehr auf, daher wurden Produktseite und Datenschutzerklärung aus Aufnahmen des Internet Archive gelesen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den Google-Play-Eintrag, eine archivierte Kopie der Website und der Datenschutzerklärung des Entwicklers sowie sein öffentliches GitHub-Profil, geprüft am 19. Oktober 2026. Für diese Rezension selbst wurde die App weder ausprobiert noch einem Benchmark unterzogen; ein separater Praxistest ist weiter unten verlinkt.',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'Was ist Caelum?',
        content: [
          '**Caelum ist ein Chat-Assistent für Android, der laut Google-Play-Eintrag „fortschrittliche KI auf dem Gerät“ ausführt, statt einen Cloud-Dienst aufzurufen.** Der Eintrag beschreibt drei Bausteine: einen privaten Chat, einen Dokumentleser, in den Sie Dateien importieren und Fragen dazu stellen, und eine optionale Websuche über Brave, deren Ergebnisse nur temporär sind. Der Eintrag heißt „Caelum - Local AI assistant“; die Website des Entwicklers nannte die App „Caelum - Local AI for Android“.',
          'Als Entwickler nennt der Eintrag Nolan Picard mit Sitz in Frankreich; die App wird ausschließlich über Google Play veröffentlicht.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Caelum wird wie jede andere Android-App über Google Play installiert; Sideloading, Terminal oder Konto sind nicht nötig.** Die im Eintrag verlinkte Website des Entwicklers löst nicht mehr auf, daher ist die Datenschutzerklärung unten als archivierte Kopie verlinkt.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          {
            'Plattform': 'Android',
            'Bezugsquelle': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) (kostenlose Installation, Android 7.0 oder neuer)',
          },
          {
            'Plattform': 'Website',
            'Bezugsquelle': '[caelum-app.me](https://caelum-app.me/) (am 19. Oktober 2026 kein DNS-Eintrag; archivierte Kopie vom 10. Mai 2026 verfügbar)',
          },
          {
            'Plattform': 'Datenschutzerklärung',
            'Bezugsquelle': '[Archivierte Kopie](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) (aufgenommen am 10. Mai 2026; Text der Erklärung datiert Juni 2025)',
          },
        ],
        note: 'Geprüfte Version: 1.3.1, bei Google Play zuletzt aktualisiert am 14. August 2025; als erste Veröffentlichung nennt der Eintrag den 10. Juli 2025. Die Hinweise zu 1.3.1 nennen eine bessere Websuche, Unterstützung für Bilder mit Text und PDFs, eine bessere Dokumentverarbeitung, das Löschen von Nachrichten, Fehlerbehebungen und Unterstützung für Ukrainisch.',
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder Punkt unten stammt aus der Beschreibung bei Google Play, den Hinweisen zu Version 1.3.1 oder der archivierten Website.**',
        ],
        items: [
          '**Chat.** Natürliche Unterhaltung mit der KI auf dem Gerät, heller und dunkler Modus, ein Layout, das sich an Tablets anpasst, und seit 1.3.1 das Löschen einzelner Nachrichten.',
          '**Dokumentleser.** Sie importieren Dokumente, stellen Fragen und erhalten Antworten; laut Eintrag werden die Dateien auf dem Telefon verarbeitet. Die Hinweise zu 1.3.1 ergänzen Unterstützung für Bilder mit Text und für PDFs.',
          '**Optionale Websuche.** Sucht über Brave Search nach aktuellen Informationen; laut Eintrag sind die Ergebnisse temporär und es wird kein Verlauf gespeichert.',
          '**Sprachen.** Version 1.3.1 ergänzte Ukrainisch; welche weiteren Sprachen die Oberfläche oder die KI unterstützt, nennen die Quellen nicht.',
        ],
        note: 'Store-Beschreibung und archivierte Website stimmen in diesen Punkten überein. Maßgeblich ist letztlich die installierte Version.',
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Laut Datenschutzerklärung bleiben Unterhaltungen auf dem Gerät, Dokumente werden lokal verarbeitet und nicht übertragen, und es wird kein Konto angelegt.** Die Erklärung führt auf, was nicht erhoben wird: Name, E-Mail-Adresse, Telefonnummer, Standort, eine eindeutige Gerätekennung, Daten zum Werbe-Tracking, Browserverlauf sowie Finanz- und Gesundheitsdaten. Außerdem sagt sie, dass es keinen zentralen Server gibt und der externe Datenverkehr über HTTPS läuft.',
          'Der einzige angegebene Datenabfluss ist die optionale Websuche, die Ihre Suchanfrage an Brave Search sendet. Der Abschnitt „Datensicherheit“ (Data safety) bei Google Play sagt „Keine Daten erhoben“ und zugleich, dass die App App-Aktivitäten an Dritte weitergeben kann, was zur eigenen Formulierung der Erklärung passt, dass der Suchverlauf in der App erhoben und an Brave weitergegeben wird. Zu den deklarierten Berechtigungen zählen Netzwerkzugriff, das Wachhalten des Geräts, Lesen und Schreiben im gemeinsamen Speicher, der WLAN-Status, das Herunterladen von Dateien ohne Benachrichtigung und die Lizenzprüfung von Google Play.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lässt sich keine dieser Angaben im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht geprüft. Wer vertrauliche Dokumente verarbeitet, sollte das Verhalten zuerst auf dem eigenen Gerät überprüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Android-Nutzer, die eine kostenlose Chat- und Dokument-App ohne Konto wünschen.** Die Installation ist kostenlos und braucht keine Anmeldung.',
          '**Leser, die Offline-Chat-Apps für Android vergleichen.** Die Quellen zeigen, was diese App für sich beansprucht.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Praktische Leistung.** Diese Rezension bewertet Geschwindigkeit, Akkuverbrauch und Antwortqualität selbst nicht. Der separate Praxistest (ein Telefon, eine Sitzung) deckt den ersten Start, Fotoeingabe, Websuche und eine Logikaufgabe ab, hat aber weder Antwortzeiten gemessen noch die Offline-Nutzung getestet.',
          '**Das Modell.** Der Eintrag spricht von „fortschrittlicher KI auf dem Gerät“, und die Quellen nennen weder Modell noch Größe, Herkunft oder Laufzeitumgebung; was die App tatsächlich ausführt, ist unbekannt.',
          '**Offline-Verhalten.** Ob die KI mitgeliefert oder beim ersten Start heruntergeladen wird und ob die App im Flugmodus funktioniert, wurde nicht getestet; laut Eintrag ist nach der Installation keine Internetverbindung nötig.',
          '**Hardware-Anforderungen.** Eine Anforderung an RAM oder Speicher wird nicht genannt; die einzige angegebene Untergrenze ist Android 7.0.',
          '**Lizenz und Quellcode.** Die App ist nicht quelloffen; das öffentliche GitHub-Profil des Entwicklers enthält kein Caelum-Repository.',
          '**In-App-Käufe.** Die Installation ist kostenlos und die Beschreibung nennt keine Käufe, doch die Altersfreigabe-Hinweise des Eintrags erwähnen In-App-Käufe.',
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
            'App': '[MemoryAI](/de/power-local-llm/memoryai-review)',
            'Plattformen': 'iOS, Android',
            'Preis / Lizenz': 'Kostenlos / nicht quelloffen',
            'Wesentlicher Unterschied': 'Nicht quelloffener Offline-Chat mit Dokumenten-Q&A, editierbarem Gedächtnis und Sprache',
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
            q: 'Ist Caelum dasselbe wie „React Native AI“?',
            a: 'Das Google-Play-Paket lautet com.reactnativeai, das Produkt heißt aber Caelum, und keine der Quellen beschreibt es als etwas anderes als die App Caelum.',
          },
          {
            q: 'Läuft Caelum auf dem iPhone oder auf dem Desktop?',
            a: 'Ein solcher Build wurde nicht gefunden. Die archivierte Website nannte die App lokale KI für Android und verlinkte nur Google Play.',
          },
          {
            q: 'Kann ich den Entwickler noch erreichen?',
            a: 'Für die Domain caelum-app.me lag am 19. Oktober 2026 bei der Prüfung mit zwei öffentlichen Resolvern kein DNS-Eintrag vor. Der Google-Play-Eintrag zeigt weiterhin eine Entwicklerseite und eine Support-E-Mail-Adresse.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Caelum ist eine kostenlose Android-Chat- und Dokument-App mit klarem Datenschutzversprechen und ohne Konto, doch dieses Versprechen ist ungetestet, und das Projekt wirkt nicht mehr gepflegt: Die App ist nicht quelloffen, nennt kein Modell, und ihre Website löst nicht mehr auf. Am schwersten wiegen die fehlenden Updates, die die Warnung am Anfang beschreibt. Sie eignet sich für Leser, die einen kostenlosen Assistenten ausprobieren und diese Risiken akzeptieren; wer eine gepflegte App braucht, sollte [Private Mind](/de/power-local-llm/private-mind-review) oder [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) vergleichen.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Caelum bei Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) — Beschreibung, Version, Versionshinweise, Download-Anzahl, Bewertungen, Abschnitt „Datensicherheit“ und Berechtigungen, geprüft am 19. Oktober 2026.',
          '[Caelum-Website, archivierte Aufnahme](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — die Produktseite des Entwicklers, Stand 10. Mai 2026.',
          '[Caelum-Datenschutzerklärung, archivierte Aufnahme](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — Datenverarbeitung, Websuche und Berechtigungen; Text der Erklärung datiert Juni 2025.',
          '[nolanpcrd bei GitHub](https://github.com/nolanpcrd) — das öffentliche Profil des Entwicklers, geprüft am 19. Oktober 2026; es führt kein Caelum-Repository auf.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Caelum Praxistest](/de/power-local-llm/caelum-hands-on-test) — ein Praxistest auf einem OnePlus 8 Pro: Die App las einen Paketschein per Foto, gab aber eine falsche Nachrichtenantwort und schnitt bei einer schweren Logikaufgabe schlecht ab; jede Aussage ist danach gekennzeichnet, woher sie stammt.',
          '[Private-Mind-Rezension](/de/power-local-llm/private-mind-review) — eine kostenlose, MIT-lizenzierte Offline-Chat-App für iPhone und Android.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — ein kostenloser, quelloffener On-Device-Chat-Client für iOS und Android.',
          '[MemoryAI-Rezension](/de/power-local-llm/memoryai-review) — eine kostenlose Offline-Chat-App mit editierbarem Gedächtnis für iPhone und Android.',
          '[Google-AI-Edge-Gallery-Rezension](/de/power-local-llm/google-ai-edge-gallery-review) — Googles quelloffene On-Device-KI-App.',
          '[Die besten lokalen LLM-Apps für Android 2026](/de/power-local-llm/best-local-llm-apps-android-2026) — der breitere Android-Überblick.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-es.webp',
    title: 'Análisis de Caelum: app de chat de IA offline y gratis para Android',
    seoTitle: 'Análisis de Caelum: app de chat de IA offline gratis',
    intro:
      'Caelum es un asistente gratuito de chat y documentos para Android de Nolan Picard, un desarrollador independiente de Francia. Según su ficha de Google Play, ejecuta su IA en el teléfono, no necesita cuenta y, de forma opcional, puede buscar en la web a través de Brave. Este análisis refleja la ficha de la tienda y una copia archivada del sitio web y de la política de privacidad del desarrollador, consultados el 19 de octubre de 2026.',
    metaDescription:
      'Análisis de Caelum: app gratuita de código cerrado para Android que dice ejecutar su IA offline, con documentos y búsqueda opcional en Brave. Riesgos.',
    twitterDescription:
      'Análisis de Caelum: una app gratuita de chat y documentos para Android que dice ejecutar su IA sin conexión. Lo que afirman la ficha de Google Play y la política de privacidad, lo que no está verificado y por qué podría estar sin mantenimiento.',
    audience:
      'Usuarios de Android que quieren una app de chat gratuita que funcione sin cuenta y que necesitan saber qué confirman las fuentes, qué no confirman y si el proyecto sigue mantenido.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análisis de Caelum',
    targetKeywords: [
      'opiniones app caelum',
      'caelum asistente de ia local',
      'app de chat de ia offline android',
      'asistente de ia privado android sin cuenta',
      'preguntas sobre documentos en el dispositivo android',
      'com.reactnativeai',
      'caelum vs pocketpal',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Advertencia: Caelum no recibe actualizaciones desde el 14 de agosto de 2025 (versión 1.3.1), por lo que podría estar sin mantenimiento; comprueba que funciona en tu dispositivo antes de depender de ella.** **Caelum es una app gratuita y de código cerrado para Android que dice ejecutar su IA sin conexión, responde preguntas sobre tus documentos y, de forma opcional, puede buscar en la web a través de Brave.**',
    quickAnswerTop: {
      es: {
        question: '¿Caelum es realmente offline y gratuita?',
        answer:
          'Según su ficha y su política de privacidad, sí: la instalación es gratuita, no hace falta cuenta y el chat y las preguntas sobre documentos se ejecutan en el teléfono. Ninguna de las dos afirmaciones se probó, y la búsqueda web opcional envía tu consulta a Brave.',
        bullets: [
          'Gratis en [Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai), para Android 7.0 o posterior.',
          'Preguntas sobre documentos, incluidos PDF e imágenes con texto, desde la versión 1.3.1.',
          'Modo claro y oscuro y un diseño adaptado a tabletas.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Caelum?', anchor: 'what-is-caelum' },
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
            text: 'Caelum es una app de código cerrado para Android que, según su desarrollador, ejecuta un asistente de IA en el teléfono sin cuenta y responde preguntas sobre los documentos que importas.',
          },
          {
            type: 'plain-terms',
            text: 'La instalas desde Google Play y chateas con ella; los documentos importados se leen en el teléfono, y la búsqueda web es una función opcional aparte que solo envía tu consulta a Brave. El desarrollador no indica qué modelo usa.',
          },
        ],
        items: [
          'Desarrollador: Nolan Picard, un desarrollador independiente de Francia, que publicó la primera versión el 10 de julio de 2025 y llama a la versión 1.3.1 la «10th official release».',
          'Alcance: Google Play muestra más de 10 mil descargas y una valoración media de 4.1 con 271 valoraciones, por lo que la app tiene un historial público modesto.',
          'Plataforma: Android 7.0 o posterior solo a través de Google Play; no se encontró ninguna versión para iPhone, escritorio ni web.',
          'Sitio web: el dominio del desarrollador ya no se resuelve, por lo que la página del producto y la política de privacidad se leyeron en capturas del Internet Archive.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Este análisis se basa en la ficha de Google Play, una copia archivada del sitio web y de la política de privacidad del desarrollador y su perfil público de GitHub, consultados el 19 de octubre de 2026. Este análisis en sí no se basa en el uso ni en pruebas comparativas de la app; más abajo se enlaza una prueba práctica aparte.',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: '¿Qué es Caelum?',
        content: [
          '**Caelum es un asistente de chat para Android que, según su ficha de Google Play, ejecuta una «advanced on-device AI» en lugar de llamar a un servicio en la nube.** La ficha describe tres partes: un chat privado, un lector de documentos en el que importas archivos y haces preguntas sobre ellos, y una búsqueda web opcional a través de Brave cuyos resultados son temporales. La ficha se titula «Caelum - Local AI assistant»; el sitio del desarrollador la llamaba «Caelum - Local AI for Android».',
          'La ficha nombra como desarrollador a Nolan Picard, con sede en Francia; la app se publica solo en Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Cómo obtenerla',
        content: [
          '**Caelum se instala desde Google Play como cualquier otra app de Android; no hay instalación manual, terminal ni cuenta.** El sitio web del desarrollador, que enlaza la ficha, ya no se resuelve, así que la política de privacidad se enlaza más abajo como copia archivada.',
        ],
        columns: ['Plataforma', 'Dónde obtenerla'],
        rows: [
          {
            'Plataforma': 'Android',
            'Dónde obtenerla': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) (instalación gratuita, Android 7.0 o posterior)',
          },
          {
            'Plataforma': 'Sitio web',
            'Dónde obtenerla': '[caelum-app.me](https://caelum-app.me/) (sin registro DNS el 19 de octubre de 2026; hay una copia archivada del 10 de mayo de 2026)',
          },
          {
            'Plataforma': 'Política de privacidad',
            'Dónde obtenerla': '[Copia archivada](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) (capturada el 10 de mayo de 2026; texto de la política fechado en junio de 2025)',
          },
        ],
        note: 'Versión analizada: 1.3.1, que Google Play muestra como actualizada por última vez el 14 de agosto de 2025; la ficha indica el 10 de julio de 2025 como primera versión. Las notas de la 1.3.1 enumeran una mejor búsqueda web, compatibilidad con imágenes con texto y PDF, un mejor manejo de documentos, borrado de mensajes, corrección de errores y compatibilidad con el idioma ucraniano.',
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada elemento siguiente procede de la descripción de Google Play, de las notas de la versión 1.3.1 o del sitio web archivado.**',
        ],
        items: [
          '**Chat.** Conversación natural con la IA del dispositivo, temas claro y oscuro, un diseño que se adapta a las tabletas y, desde la 1.3.1, borrado de mensajes individuales.',
          '**Lector de documentos.** Importas documentos, haces preguntas y recibes respuestas; la ficha dice que los archivos se procesan en el teléfono. Las notas de la 1.3.1 añaden compatibilidad con imágenes que contienen texto y con PDF.',
          '**Búsqueda web opcional.** Busca información actual a través de Brave Search; la ficha dice que los resultados son temporales y que no se guarda ningún historial.',
          '**Idiomas.** La versión 1.3.1 añadió el ucraniano; las fuentes no indican qué otros idiomas admiten la interfaz o la IA.',
        ],
        note: 'La descripción de la tienda y el sitio web archivado coinciden en estos puntos. La compilación instalada es la que tiene la última palabra.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de la red',
        content: [
          '**Según la política de privacidad, las conversaciones se quedan en el dispositivo, los documentos se procesan en local y no se transmiten, y no se crea ninguna cuenta.** La política enumera lo que no se recopila: nombre, correo electrónico, número de teléfono, ubicación, un identificador único del dispositivo, datos de seguimiento publicitario, historial de navegación y datos financieros y de salud. También dice que no hay servidor central y que el tráfico externo usa HTTPS.',
          'La única salida de datos declarada es la búsqueda web opcional, que envía tu consulta de búsqueda a Brave Search. La sección Seguridad de los datos de Google Play dice «No data collected» y también que la app puede compartir actividad de la app con terceros, lo que coincide con la propia redacción de la política, según la cual el historial de búsqueda en la app se recopila y se comparte con Brave. Los permisos declarados incluyen acceso a la red, mantener el dispositivo activo, leer y escribir en el almacenamiento compartido, el estado del Wi-Fi, descargar archivos sin notificación y la comprobación de licencia de Google Play.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, por lo que ninguna de estas afirmaciones se puede comprobar en el código, y PromptQuorum no ha auditado el tráfico de red. Quien maneje documentos confidenciales debería verificar el comportamiento en su propio dispositivo primero.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Usuarios de Android que quieren una app gratuita de chat y documentos sin cuenta.** La instalación es gratuita y no requiere registro.',
          '**Lectores que comparan apps de chat offline para Android.** Las fuentes muestran lo que esta app afirma.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Rendimiento en la práctica.** Este análisis en sí no evalúa la velocidad, el consumo de batería ni la calidad de las respuestas. La prueba práctica aparte (un teléfono, una sesión) cubre el primer arranque, la entrada de fotos, la búsqueda web y un prompt de lógica, pero no cronometró las respuestas ni probó el uso sin conexión.',
          '**El modelo.** La ficha dice «advanced on-device AI» y las fuentes no nombran ningún modelo, tamaño, origen ni motor de ejecución, por lo que se desconoce qué ejecuta realmente la app.',
          '**Comportamiento offline.** No se probó si la IA viene incluida o se descarga en la primera ejecución, ni si la app funciona en modo avión; la ficha dice que no hace falta internet tras la instalación.',
          '**Requisitos de hardware.** No se indica ningún requisito de RAM ni de almacenamiento; el único mínimo indicado es Android 7.0.',
          '**Licencia y código fuente.** La app es de código cerrado; el perfil público de GitHub del desarrollador no contiene ningún repositorio de Caelum.',
          '**Compras dentro de la app.** La instalación es gratuita y la descripción no menciona compras, pero las etiquetas de clasificación de contenido de la ficha mencionan compras dentro de la app.',
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
            'Diferencia clave': 'Chat offline de código abierto con preguntas sobre documentos en el dispositivo y pruebas comparativas',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / MIT',
            'Diferencia clave': 'Cliente de chat en el dispositivo de código abierto con su propia biblioteca de modelos',
          },
          {
            'App': '[MemoryAI](/es/power-local-llm/memoryai-review)',
            'Plataformas': 'iOS, Android',
            'Precio / licencia': 'Gratis / código cerrado',
            'Diferencia clave': 'Chat offline de código cerrado con preguntas sobre documentos, memoria editable y voz',
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
            q: '¿Caelum es lo mismo que «React Native AI»?',
            a: 'El paquete de Google Play es com.reactnativeai, pero el producto se llama Caelum, y ninguna de las fuentes lo describe como otra cosa que la app Caelum.',
          },
          {
            q: '¿Caelum funciona en iPhone o en el escritorio?',
            a: 'No se encontró ninguna versión así. El sitio web archivado la presentaba como IA local para Android y solo enlazaba Google Play.',
          },
          {
            q: '¿Todavía se puede contactar con el desarrollador?',
            a: 'El dominio caelum-app.me no devolvió ningún registro DNS el 19 de octubre de 2026 al consultarlo con dos resolvedores públicos. La ficha de Google Play sigue mostrando una página de desarrollador y una dirección de correo de soporte.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Caelum es una app gratuita de chat y documentos para Android con una propuesta de privacidad clara y sin cuenta, pero esa propuesta no está probada y el proyecto parece sin mantenimiento: es de código cerrado, no nombra ningún modelo y su sitio web ya no se resuelve. Lo que más pesa son las actualizaciones que faltan, descritas en la advertencia del principio. Encaja con quien quiera probar un asistente gratuito y acepte esos riesgos; quien necesite una app con mantenimiento debería comparar [Private Mind](/es/power-local-llm/private-mind-review) o [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Caelum en Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) — descripción, versión, notas de la versión, número de descargas, valoraciones, sección Seguridad de los datos y permisos, consultado el 19 de octubre de 2026.',
          '[Sitio web de Caelum, captura archivada](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — la página del producto del desarrollador a fecha del 10 de mayo de 2026.',
          '[Política de privacidad de Caelum, captura archivada](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — tratamiento de datos, búsqueda web y permisos; texto de la política fechado en junio de 2025.',
          '[nolanpcrd en GitHub](https://github.com/nolanpcrd) — el perfil público del desarrollador, consultado el 19 de octubre de 2026; no enumera ningún repositorio de Caelum.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Prueba práctica de Caelum](/es/power-local-llm/caelum-hands-on-test) — una prueba en un OnePlus 8 Pro: la app leyó la etiqueta de envío de un paquete en una foto, pero una respuesta de actualidad fue falsa y un prompt de lógica difícil se valoró mal; cada afirmación indica cómo se sabe.',
          '[Análisis de Private Mind](/es/power-local-llm/private-mind-review) — una app de chat offline gratuita y con licencia MIT para iPhone y Android.',
          '[Análisis de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — un cliente de chat en el dispositivo gratuito y de código abierto para iOS y Android.',
          '[Análisis de MemoryAI](/es/power-local-llm/memoryai-review) — una app de chat offline gratuita con memoria editable para iPhone y Android.',
          '[Análisis de Google AI Edge Gallery](/es/power-local-llm/google-ai-edge-gallery-review) — la app de IA en el dispositivo de código abierto de Google.',
          '[Las mejores apps de LLM locales para Android en 2026](/es/power-local-llm/best-local-llm-apps-android-2026) — el resumen más amplio para Android.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-fr.webp',
    title: 'Avis Caelum : appli de chat IA gratuite hors ligne pour Android',
    seoTitle: 'Avis Caelum : chat IA gratuit hors ligne pour Android',
    intro:
      'Caelum est un assistant gratuit de chat et de documents pour Android, créé par Nolan Picard, développeur indépendant en France. Selon sa fiche Google Play, il exécute son IA sur le téléphone, ne demande aucun compte et peut, en option, effectuer des recherches sur le web via Brave. Cet avis reflète la fiche de la boutique et une copie archivée du site et de la politique de confidentialité du développeur, consultés le 19 octobre 2026.',
    metaDescription:
      'Avis Caelum : appli Android gratuite, à code fermé, dont l\'IA serait hors ligne, avec questions sur documents et recherche Brave facultative. Limites.',
    twitterDescription:
      'Avis Caelum : une appli Android gratuite de chat et de documents dont l\'IA serait hors ligne. Ce que disent la fiche Google Play et la politique de confidentialité, ce qui n\'est pas vérifié, et pourquoi elle n\'est peut-être plus maintenue.',
    audience:
      'Utilisateurs d\'Android qui veulent une application de chat gratuite fonctionnant sans compte, et qui ont besoin de savoir ce que les sources confirment, ce qu\'elles ne confirment pas et si le projet est encore maintenu.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'avis Caelum',
    targetKeywords: [
      'avis application caelum',
      'caelum assistant ia local',
      'application chat ia hors ligne android',
      'assistant ia privé android sans compte',
      'questions sur documents sur l\'appareil android',
      'com.reactnativeai',
      'caelum vs pocketpal',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Avertissement : Caelum n\'a reçu aucune mise à jour depuis le 14 août 2025 (version 1.3.1) et n\'est peut-être plus maintenue — vérifiez qu\'elle fonctionne sur votre appareil avant de vous y fier.** **Caelum est une application Android gratuite, à code source fermé, qui affirme exécuter son IA hors ligne, répondre à des questions sur vos documents et pouvoir, en option, effectuer des recherches sur le web via Brave.**',
    quickAnswerTop: {
      fr: {
        question: 'Caelum fonctionne-t-elle vraiment hors ligne et gratuitement ?',
        answer:
          'Selon sa fiche et sa politique de confidentialité, oui : l\'installation est gratuite, aucun compte n\'est nécessaire, et le chat comme les questions sur documents s\'exécutent sur le téléphone. Aucune de ces affirmations n\'a été testée, et la recherche web facultative envoie votre requête à Brave.',
        bullets: [
          'Gratuite sur [Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai), pour Android 7.0 ou version ultérieure.',
          'Questions sur documents, y compris les PDF et les images contenant du texte, depuis la version 1.3.1.',
          'Mode clair et mode sombre, et affichage adapté aux tablettes.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Caelum ?', anchor: 'what-is-caelum' },
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
            text: 'Caelum est une application Android à code source fermé qui, selon son développeur, exécute un assistant IA sur le téléphone sans compte et répond à des questions sur les documents que vous importez.',
          },
          {
            type: 'plain-terms',
            text: 'Vous l\'installez depuis Google Play et discutez avec elle ; les documents importés sont lus sur le téléphone, et la recherche web est une fonction facultative distincte qui n\'envoie que votre requête à Brave. Le développeur ne nomme pas le modèle utilisé.',
          },
        ],
        items: [
          'Développeur : Nolan Picard, développeur indépendant en France, qui a publié la première version le 10 juillet 2025 et qualifie la version 1.3.1 de « 10th official release ».',
          'Audience : Google Play affiche plus de 10 000 téléchargements et une note moyenne de 4.1 sur 271 évaluations ; l\'application a donc un historique public modeste.',
          'Plateforme : Android 7.0 ou version ultérieure, uniquement via Google Play ; aucune version pour iPhone, ordinateur ou web n\'a été trouvée.',
          'Site web : le domaine du développeur ne répond plus, la page produit et la politique de confidentialité ont donc été lues à partir de captures de l\'Internet Archive.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cet avis se fonde sur la fiche Google Play, une copie archivée du site et de la politique de confidentialité du développeur, ainsi que son profil GitHub public, consultés le 19 octobre 2026. Cet avis lui-même ne repose sur aucune utilisation ni évaluation de l\'application ; un test pratique distinct est lié plus bas.',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'Qu\'est-ce que Caelum ?',
        content: [
          '**Caelum est un assistant de chat pour Android qui, selon sa fiche Google Play, exécute une « IA avancée sur l\'appareil » au lieu d\'appeler un service cloud.** La fiche décrit trois volets : un chat privé, un lecteur de documents dans lequel vous importez des fichiers pour poser des questions à leur sujet, et une recherche web facultative via Brave dont les résultats sont temporaires. La fiche s\'intitule « Caelum - Local AI assistant » ; le site du développeur l\'appelait « Caelum - Local AI for Android ».',
          'La fiche désigne comme développeur Nolan Picard, installé en France ; l\'application n\'est publiée que sur Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Caelum s\'installe depuis Google Play comme n\'importe quelle autre application Android ; ni installation manuelle, ni terminal, ni compte ne sont nécessaires.** Le site web du développeur, que la fiche référence, ne répond plus : la politique de confidentialité est donc liée ci-dessous sous forme de copie archivée.',
        ],
        columns: ['Plateforme', 'Où la trouver'],
        rows: [
          {
            'Plateforme': 'Android',
            'Où la trouver': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) (installation gratuite, Android 7.0 ou version ultérieure)',
          },
          {
            'Plateforme': 'Site web',
            'Où la trouver': '[caelum-app.me](https://caelum-app.me/) (aucun enregistrement DNS le 19 octobre 2026 ; copie archivée du 10 mai 2026 disponible)',
          },
          {
            'Plateforme': 'Politique de confidentialité',
            'Où la trouver': '[Copie archivée](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) (capturée le 10 mai 2026 ; texte de la politique daté de juin 2025)',
          },
        ],
        note: 'Version examinée : 1.3.1, indiquée sur Google Play comme mise à jour le 14 août 2025 ; la fiche donne le 10 juillet 2025 comme date de la première version. Les notes de la version 1.3.1 mentionnent une meilleure recherche web, la prise en charge des images contenant du texte et des PDF, une meilleure gestion des documents, la suppression de messages, des corrections de bugs et la prise en charge de l\'ukrainien.',
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque élément ci-dessous provient de la description Google Play, des notes de la version 1.3.1 ou du site archivé.**',
        ],
        items: [
          '**Chat.** Conversation naturelle avec l\'IA sur l\'appareil, thèmes clair et sombre, affichage qui s\'adapte aux tablettes et, depuis la version 1.3.1, suppression de messages individuels.',
          '**Lecteur de documents.** Vous importez des documents, posez des questions et obtenez des réponses ; la fiche indique que les fichiers sont traités sur le téléphone. Les notes de la version 1.3.1 ajoutent la prise en charge des images contenant du texte et des PDF.',
          '**Recherche web facultative.** Elle recherche des informations récentes via Brave Search ; la fiche indique que les résultats sont temporaires et qu\'aucun historique n\'est conservé.',
          '**Langues.** La version 1.3.1 a ajouté l\'ukrainien ; les sources ne détaillent pas les autres langues prises en charge par l\'interface ou par l\'IA.',
        ],
        note: 'La description de la boutique et le site archivé concordent sur ces points. La build installée fait foi.',
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et usage du réseau',
        content: [
          '**Selon la politique de confidentialité, les conversations restent sur l\'appareil, les documents sont traités localement sans être transmis, et aucun compte n\'est créé.** La politique énumère ce qui n\'est pas collecté : nom, e-mail, numéro de téléphone, localisation, identifiant unique de l\'appareil, données de suivi publicitaire, historique de navigation, données financières et de santé. Elle précise aussi qu\'il n\'y a aucun serveur central et que le trafic externe passe par HTTPS.',
          'Le seul flux sortant déclaré est la recherche web facultative, qui envoie votre requête de recherche à Brave Search. La section Sécurité des données de Google Play indique « Aucune donnée collectée » et précise aussi que l\'application peut partager l\'activité dans l\'application avec des tiers, ce qui correspond à la formulation de la politique elle-même, selon laquelle l\'historique de recherche dans l\'application est collecté et partagé avec Brave. Les autorisations déclarées comprennent l\'accès au réseau, le maintien de l\'appareil éveillé, la lecture et l\'écriture dans le stockage partagé, l\'état du Wi-Fi, le téléchargement de fichiers sans notification et la vérification de licence Google Play.',
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
          '**Les utilisateurs d\'Android qui veulent une application gratuite de chat et de documents sans compte.** L\'installation est gratuite et ne demande aucune inscription.',
          '**Les lecteurs qui comparent des applications de chat Android hors ligne.** Les sources montrent ce qu\'affirme celle-ci.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Performances en pratique.** Cet avis n\'évalue lui-même ni la vitesse, ni la consommation de batterie, ni la qualité des réponses. Le test pratique distinct (un téléphone, une séance) couvre le premier lancement, l\'entrée photo, la recherche web et une consigne de logique, mais n\'a ni chronométré les réponses ni testé l\'usage hors ligne.',
          '**Le modèle.** La fiche parle d\'« IA avancée sur l\'appareil » et les sources ne nomment ni modèle, ni taille, ni origine, ni moteur d\'exécution : on ignore donc ce que l\'application exécute réellement.',
          '**Fonctionnement hors ligne.** On ne sait pas si l\'IA est intégrée ou téléchargée au premier lancement, ni si l\'application fonctionne en mode avion, car cela n\'a pas été testé ; la fiche indique qu\'aucune connexion internet n\'est nécessaire après l\'installation.',
          '**Besoins matériels.** Aucune exigence de RAM ou de stockage n\'est indiquée ; le seul minimum mentionné est Android 7.0.',
          '**Licence et code source.** L\'application est à code source fermé ; le profil GitHub public du développeur ne contient aucun dépôt Caelum.',
          '**Achats intégrés.** L\'installation est gratuite et la description ne mentionne aucun achat, mais les libellés de classification de contenu de la fiche évoquent des achats intégrés.',
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
            'Application': '[MemoryAI](/fr/power-local-llm/memoryai-review)',
            'Plateformes': 'iOS, Android',
            'Prix / licence': 'Gratuite / code source fermé',
            'Différence clé': 'Chat hors ligne à code source fermé avec Q&R sur documents, mémoire modifiable et voix',
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
            q: 'Caelum est-elle la même chose que « React Native AI » ?',
            a: 'Le paquet Google Play est com.reactnativeai, mais le produit s\'appelle Caelum, et aucune source ne le décrit autrement que comme l\'application Caelum.',
          },
          {
            q: 'Caelum fonctionne-t-elle sur iPhone ou sur ordinateur ?',
            a: 'Aucune version de ce type n\'a été trouvée. Le site archivé la présentait comme une IA locale pour Android et ne renvoyait qu\'à Google Play.',
          },
          {
            q: 'Puis-je encore joindre le développeur ?',
            a: 'Le domaine caelum-app.me n\'avait aucun enregistrement DNS le 19 octobre 2026, vérifié avec deux résolveurs publics. La fiche Google Play affiche toujours une page de développeur et une adresse e-mail d\'assistance.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Caelum est une application Android gratuite de chat et de documents, avec un argumentaire de confidentialité clair et sans compte, mais cet argumentaire n\'a pas été testé et le projet semble ne plus être maintenu : elle est à code source fermé, ne nomme aucun modèle et son site web ne répond plus. L\'absence de mises à jour décrite dans l\'avertissement en tête de page pèse le plus. Elle convient aux lecteurs qui veulent essayer un assistant gratuit en acceptant ces risques ; ceux qui ont besoin d\'une application maintenue devraient comparer [Private Mind](/fr/power-local-llm/private-mind-review) ou [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Caelum sur Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) — description, version, notes de version, nombre de téléchargements, évaluations, section Sécurité des données et autorisations, consultés le 19 octobre 2026.',
          '[Site web de Caelum, capture archivée](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — la page produit du développeur au 10 mai 2026.',
          '[Politique de confidentialité de Caelum, capture archivée](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — traitement des données, recherche web et autorisations ; texte de la politique daté de juin 2025.',
          '[nolanpcrd sur GitHub](https://github.com/nolanpcrd) — le profil public du développeur, consulté le 19 octobre 2026 ; il ne répertorie aucun dépôt Caelum.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Test pratique de Caelum](/fr/power-local-llm/caelum-hands-on-test) — un test sur un OnePlus 8 Pro : l\'application a lu un bordereau de colis sur une photo, mais une réponse d\'actualité était fausse et une consigne de logique difficile a été mal notée ; chaque affirmation est étiquetée selon son origine.',
          '[Avis Private Mind](/fr/power-local-llm/private-mind-review) — une application de chat hors ligne gratuite, sous licence MIT, pour iPhone et Android.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — un client de chat open source gratuit sur l\'appareil pour iOS et Android.',
          '[Avis MemoryAI](/fr/power-local-llm/memoryai-review) — une application de chat hors ligne gratuite, avec mémoire modifiable, pour iPhone et Android.',
          '[Avis Google AI Edge Gallery](/fr/power-local-llm/google-ai-edge-gallery-review) — l\'application d\'IA open source sur l\'appareil de Google.',
          '[Les meilleures applications de LLM local pour Android en 2026](/fr/power-local-llm/best-local-llm-apps-android-2026) — le comparatif Android plus large.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-ja.webp',
    title: 'Caelumレビュー:Android向けの無料オフラインAIチャットアプリ',
    seoTitle: 'Caelumレビュー:Android向け無料オフラインAIチャット',
    intro:
      'Caelumは、フランスの個人開発者Nolan Picardが提供する、Android向けの無料のチャット・ドキュメントアシスタントです。Google Playの掲載情報によれば、AIは端末上で動作し、アカウントは不要で、必要に応じてBraveでウェブ検索もできます。本レビューは、2026年10月19日に確認したストアの掲載情報と、開発者のウェブサイトおよびプライバシーポリシーのアーカイブに基づいています。',
    metaDescription:
      'Caelumレビュー:AIがオフラインで動くとされる、無料でソース非公開のAndroidチャットアプリ。ドキュメントへの質問とBraveのウェブ検索、制約とリスクを解説します。',
    twitterDescription:
      'Caelumレビュー:AIがオフラインで動くとされる、無料のAndroid向けチャット・ドキュメントアプリ。Google Playの掲載情報とプライバシーポリシーの主張、未検証の点、メンテナンスが終了している可能性について解説します。',
    audience:
      'アカウント不要で使える無料のチャットアプリを探しているAndroidユーザーで、情報源が何を確認していて何を確認していないのか、プロジェクトが今も保守されているのかを知りたい方向け。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Caelum レビュー',
    targetKeywords: [
      'caelum アプリ レビュー',
      'caelum ローカル ai アシスタント',
      'オフライン aiチャット アプリ android',
      'アカウント不要 プライベート ai アシスタント android',
      '端末内 ドキュメント 質問 android',
      'com.reactnativeai',
      'caelum pocketpal 比較',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**警告：Caelumは2025年8月14日(バージョン1.3.1)以降更新されておらず、メンテナンスが終了している可能性があります。利用前にお使いの端末で動作するか確認してください。** **Caelumは、AIがオフラインで動作するとされる、無料でソース非公開のAndroidアプリです。ドキュメントについての質問に答え、必要に応じてBraveでウェブ検索もできます。**',
    quickAnswerTop: {
      ja: {
        question: 'Caelumは本当にオフラインで動き、無料で使えますか?',
        answer:
          '掲載情報とプライバシーポリシーによれば、その通りです。インストールは無料で、アカウントは不要、チャットとドキュメントへの質問は端末上で動作します。ただし、どちらの主張も検証していません。また、オプションのウェブ検索では、入力した検索クエリがBraveに送信されます。',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai)で無料。Android 7.0以降が対象。',
          'バージョン1.3.1以降、PDFや文字を含む画像を含め、ドキュメントについて質問できる。',
          'ライトモードとダークモード、タブレット向けのレイアウトに対応。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Caelumとは?', anchor: 'what-is-caelum' },
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
            text: 'Caelumは、ソース非公開のAndroidアプリで、開発者によれば、アカウントなしでAIアシスタントを端末上で動かし、取り込んだドキュメントについての質問に答える。',
          },
          {
            type: 'plain-terms',
            text: 'Google Playからインストールしてチャットします。取り込んだドキュメントは端末上で読み込まれ、ウェブ検索は別のオプション機能で、送信されるのは検索クエリだけで、送信先はBraveです。使用しているモデルは、開発者から明かされていません。',
          },
        ],
        items: [
          '開発元:フランスの個人開発者Nolan Picard。最初のリリースは2025年7月10日で、バージョン1.3.1を「10th official release」(10回目の正式リリース)と呼んでいる。',
          '利用実績:Google Playのダウンロード数は10K+、271件の評価で平均4.1のため、公開されている実績は控えめ。',
          'プラットフォーム:Google Play経由のAndroid 7.0以降のみ。iPhone版、デスクトップ版、ウェブ版は見つからなかった。',
          'ウェブサイト:開発者のドメインは名前解決できなくなっているため、製品ページとプライバシーポリシーはInternet Archiveのアーカイブから読んだ。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月19日に確認したGoogle Playの掲載情報、開発者のウェブサイトとプライバシーポリシーのアーカイブ、開発者の公開GitHubプロフィールに基づいています。本レビュー自体は、アプリの実機使用やベンチマークに基づいていません。別途行った実機テストを下にリンクしています。',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'Caelumとは?',
        content: [
          '**Caelumは、Google Playの掲載情報によれば、クラウドサービスを呼び出す代わりに「advanced on-device AI」(高度な端末内AI)を動かす、Android向けのチャットアシスタントです。** 掲載情報では3つの機能が説明されています。プライベートチャット、ファイルを取り込んで内容について質問できるドキュメントリーダー、そして結果が一時的なものにとどまる、Braveによるオプションのウェブ検索です。掲載タイトルは「Caelum - Local AI assistant」で、開発者のサイトでは「Caelum - Local AI for Android」と呼ばれていました。',
          '掲載情報は開発者をフランス在住のNolan Picardとしており、アプリはGoogle Playでのみ公開されています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**Caelumは、ほかのAndroidアプリと同じようにGoogle Playからインストールします。サイドロード、ターミナル、アカウントは必要ありません。** 掲載情報がリンクしている開発者のウェブサイトはすでに名前解決できないため、プライバシーポリシーはアーカイブ版のリンクを以下に示します。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          {
            'プラットフォーム': 'Android',
            '入手先': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai)(無料でインストール、Android 7.0以降)',
          },
          {
            'プラットフォーム': 'ウェブサイト',
            '入手先': '[caelum-app.me](https://caelum-app.me/)(2026年10月19日時点でDNSレコードなし。2026年5月10日のアーカイブ版あり)',
          },
          {
            'プラットフォーム': 'プライバシーポリシー',
            '入手先': '[アーカイブ版](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html)(2026年5月10日に取得。ポリシー本文は2025年6月付)',
          },
        ],
        note: '確認したバージョン:1.3.1。Google Playでは最終更新日が2025年8月14日と表示されており、掲載情報では最初のリリースは2025年7月10日とされています。1.3.1のリリースノートには、ウェブ検索の改善、文字を含む画像とPDFへの対応、ドキュメント処理の改善、メッセージの削除、不具合の修正、ウクライナ語への対応が挙げられています。',
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できる機能',
        content: [
          '**以下の項目はすべて、Google Playの説明文、1.3.1のリリースノート、またはアーカイブされたウェブサイトに基づいています。**',
        ],
        items: [
          '**チャット。** 端末上のAIとの自然な会話、ライトテーマとダークテーマ、タブレットに合わせて調整されるレイアウト、そして1.3.1以降は個別メッセージの削除に対応。',
          '**ドキュメントリーダー。** ドキュメントを取り込んで質問すると回答が得られます。掲載情報によれば、ファイルは端末上で処理されます。1.3.1のリリースノートでは、文字を含む画像とPDFへの対応が加わりました。',
          '**オプションのウェブ検索。** Brave Searchで最新情報を検索します。掲載情報によれば、結果は一時的で、履歴は保存されません。',
          '**対応言語。** バージョン1.3.1でウクライナ語が加わりました。インターフェイスやAIが対応するそのほかの言語は、情報源には記載がありません。',
        ],
        note: 'ストアの説明文とアーカイブされたウェブサイトは、これらの点で一致しています。最終的な判断基準は、インストールしたビルドです。',
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**プライバシーポリシーによれば、会話は端末上にとどまり、ドキュメントはローカルで処理されて送信されず、アカウントも作成されません。** ポリシーには、収集しない情報として、氏名、メールアドレス、電話番号、位置情報、固有のデバイス識別子、広告トラッキングデータ、閲覧履歴、金融データ、健康データが挙げられています。また、中央サーバーはなく、外部との通信にはHTTPSが使われるとも記されています。',
          '外部に出ると明記されているのは、オプションのウェブ検索だけで、検索クエリがBrave Searchに送信されます。Google PlayのData safetyセクションには「No data collected」(収集されるデータなし)とありますが、アプリのアクティビティが第三者と共有される可能性があるとも書かれています。これは、アプリ内の検索履歴が収集されBraveと共有されるというポリシー自身の記述と一致します。宣言されている権限には、ネットワークアクセス、端末のスリープ防止、共有ストレージの読み書き、Wi-Fiの状態、通知なしのファイルダウンロード、Google Playのライセンス確認が含まれます。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アプリはソース非公開のため、これらの主張をコードで確認することはできず、PromptQuorumはネットワーク通信の監査も行っていません。機密性の高いドキュメントを扱う方は、先にご自身の端末で動作を確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**アカウント不要で使える、無料のチャット・ドキュメントアプリを求めるAndroidユーザー。** インストールは無料で、サインアップも必要ありません。',
          '**Android向けのオフラインチャットアプリを比較している方。** 情報源から、このアプリが何を主張しているかがわかります。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかった点',
        items: [
          '**実機での性能。** 本レビュー自体は、速度、バッテリー消費、回答の質を評価していません。別途行った実機テスト（スマートフォン1台、1回のセッション）では、初回起動、写真入力、ウェブ検索、論理問題を試しましたが、回答時間の計測とオフライン動作の確認は行っていません。',
          '**モデル。** 掲載情報には「advanced on-device AI」とあるだけで、情報源にはモデル名、サイズ、入手元、ランタイムのいずれも記載がないため、アプリが実際に何を動かしているのかは不明です。',
          '**オフラインでの動作。** AIがアプリに同梱されているのか初回起動時にダウンロードされるのか、機内モードで動作するのかは未検証です。掲載情報には、インストール後はインターネットが不要と書かれています。',
          '**必要なハードウェア。** RAMやストレージの要件は示されておらず、確認できる最低条件はAndroid 7.0だけです。',
          '**ライセンスとソースコード。** アプリはソース非公開で、開発者の公開GitHubプロフィールにCaelumのリポジトリはありません。',
          '**アプリ内課金。** インストールは無料で、説明文に課金の記載はありませんが、掲載情報のコンテンツレーティングのラベルにはアプリ内課金への言及があります。',
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
            'アプリ': '[MemoryAI](/ja/power-local-llm/memoryai-review)',
            'プラットフォーム': 'iOS、Android',
            '価格 / ライセンス': '無料 / ソース非公開',
            '主な違い': 'ドキュメントQ&A、編集可能なメモリ、音声を備えた、ソース非公開のオフラインチャット',
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
            q: 'Caelumは「React Native AI」と同じものですか?',
            a: 'Google Playのパッケージ名はcom.reactnativeaiですが、製品名はCaelumであり、どの情報源もCaelumアプリ以外のものとしては説明していません。',
          },
          {
            q: 'CaelumはiPhoneやデスクトップで使えますか?',
            a: 'そのようなビルドは見つかりませんでした。アーカイブされたウェブサイトはAndroid向けのローカルAIとして紹介しており、リンクもGoogle Playだけでした。',
          },
          {
            q: '今でも開発者に連絡できますか?',
            a: 'ドメインcaelum-app.meは、2026年10月19日に2つの公開リゾルバーで確認したところ、DNSレコードが返されませんでした。Google Playの掲載情報には、今も開発者ページとサポート用のメールアドレスが表示されています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Caelumは、プライバシーを明確に打ち出し、アカウントも不要な、無料のAndroid向けチャット・ドキュメントアプリです。ただし、その主張は未検証で、プロジェクトはメンテナンスされていないように見えます。ソースは非公開で、モデルは明かされておらず、ウェブサイトも名前解決できません。最も重いのは、冒頭の警告に書いたとおり更新が止まっていることです。無料のアシスタントを試してみたく、これらのリスクを受け入れられる方に向いています。メンテナンスされているアプリが必要な方は、[Private Mind](/ja/power-local-llm/private-mind-review)や[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)と比較してみてください。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Google PlayのCaelum](https://play.google.com/store/apps/details?id=com.reactnativeai) — 説明文、バージョン、リリースノート、ダウンロード数、評価、Data safetyセクションと権限。2026年10月19日に確認。',
          '[Caelumのウェブサイト(アーカイブ)](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — 2026年5月10日時点の開発者の製品ページ。',
          '[Caelumのプライバシーポリシー(アーカイブ)](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — データの扱い、ウェブ検索、権限。ポリシー本文は2025年6月付。',
          '[GitHubのnolanpcrd](https://github.com/nolanpcrd) — 開発者の公開プロフィール。2026年10月19日に確認。Caelumのリポジトリは見当たらない。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Caelumの実機テスト](/ja/power-local-llm/caelum-hands-on-test)——OnePlus 8 Proで行ったテスト。写真から荷物の伝票を読み取れた一方、ニュースへの回答は誤りで、難しい論理問題の評価は低いものでした。各記述に根拠のラベルを付けています。',
          '[Private Mindレビュー](/ja/power-local-llm/private-mind-review) — iPhoneとAndroid向けの、無料でMITライセンスのオフラインチャットアプリ。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — iOSとAndroid向けの、無料でオープンソースの端末内チャットクライアント。',
          '[MemoryAIレビュー](/ja/power-local-llm/memoryai-review) — iPhoneとAndroid向けの、編集可能なメモリを備えた無料のオフラインチャットアプリ。',
          '[Google AI Edge Galleryレビュー](/ja/power-local-llm/google-ai-edge-gallery-review) — Googleのオープンソースの端末内AIアプリ。',
          '[Android向けベストローカルLLMアプリ2026年版](/ja/power-local-llm/best-local-llm-apps-android-2026) — Android向けアプリを幅広く紹介するまとめ記事。',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-pt.webp',
    title: 'Análise do Caelum: app gratuito de chat de IA offline para Android',
    seoTitle: 'Análise do Caelum: chat de IA offline grátis para Android',
    intro:
      'O Caelum é um assistente gratuito de chat e documentos para Android, de Nolan Picard, desenvolvedor independente na França. Segundo a ficha dele no Google Play, a IA roda no celular, não exige conta e pode, opcionalmente, pesquisar na web pelo Brave. Esta análise reflete a ficha da loja e uma cópia arquivada do site e da política de privacidade do desenvolvedor, consultados em 19 de outubro de 2026.',
    metaDescription:
      'Análise do Caelum: app Android grátis e de código fechado que diz rodar a IA offline, com perguntas sobre documentos e busca opcional no Brave. Riscos.',
    twitterDescription:
      'Análise do Caelum: um app Android gratuito de chat e documentos que diz rodar a IA offline. O que a ficha do Google Play e a política de privacidade afirmam, o que não foi verificado e por que ele pode estar sem manutenção.',
    audience:
      'Usuários de Android que querem um app de chat gratuito que funcione sem conta e que precisam saber o que as fontes confirmam, o que não confirmam e se o projeto ainda tem manutenção.',
    readTime: '6 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Caelum',
    targetKeywords: [
      'caelum app análise',
      'caelum assistente de ia local',
      'app de chat de ia offline android',
      'assistente de ia privado android sem conta',
      'perguntas sobre documentos no dispositivo android',
      'com.reactnativeai',
      'caelum vs pocketpal',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**Aviso: o Caelum não recebe atualização desde 14 de agosto de 2025 (versão 1.3.1) e pode estar sem manutenção — confirme se funciona no seu dispositivo antes de depender dele.** **O Caelum é um app Android gratuito e de código fechado que diz rodar a IA offline, responde a perguntas sobre os seus documentos e pode, opcionalmente, pesquisar na web pelo Brave.**',
    quickAnswerTop: {
      pt: {
        question: 'O Caelum é mesmo offline e gratuito?',
        answer:
          'Segundo a ficha e a política de privacidade, sim: a instalação é gratuita, não é preciso conta, e o chat e as perguntas sobre documentos rodam no celular. Nenhuma das duas afirmações foi testada, e a busca opcional na web envia a sua consulta ao Brave.',
        bullets: [
          'Gratuito no [Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai), para Android 7.0 ou posterior.',
          'Perguntas sobre documentos, incluindo PDFs e imagens com texto, desde a versão 1.3.1.',
          'Modo claro e escuro e layout adaptado a tablets.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Caelum?', anchor: 'what-is-caelum' },
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
            text: 'O Caelum é um app Android de código fechado que, segundo o desenvolvedor, roda um assistente de IA no celular, sem conta, e responde a perguntas sobre os documentos que você importa.',
          },
          {
            type: 'plain-terms',
            text: 'Você instala o app pelo Google Play e conversa com ele; os documentos importados são lidos no celular, e a busca na web é um recurso opcional à parte, que envia apenas a sua consulta ao Brave. O desenvolvedor não informa qual modelo o app usa.',
          },
        ],
        items: [
          'Desenvolvedor: Nolan Picard, desenvolvedor independente na França, que publicou a primeira versão em 10 de julho de 2025 e chama a versão 1.3.1 de "10ª versão oficial".',
          'Alcance: o Google Play mostra mais de 10 mil downloads e nota média de 4.1 em 271 avaliações, então o app tem um histórico público modesto.',
          'Plataforma: Android 7.0 ou posterior, somente pelo Google Play; não encontramos versão para iPhone, desktop ou web.',
          'Site: o domínio do desenvolvedor não resolve mais, então a página do produto e a política de privacidade foram lidas em capturas do Internet Archive.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na ficha do Google Play, em uma cópia arquivada do site e da política de privacidade do desenvolvedor e no perfil público dele no GitHub, consultados em 19 de outubro de 2026. Esta análise em si não se baseia em uso nem em benchmarks do app; um teste prático separado está linkado mais abaixo.',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'O que é o Caelum?',
        content: [
          '**O Caelum é um assistente de chat para Android que, segundo a ficha dele no Google Play, roda uma "IA avançada no dispositivo" em vez de chamar um serviço na nuvem.** A ficha descreve três partes: um chat privado, um leitor de documentos em que você importa arquivos e faz perguntas sobre eles, e uma busca opcional na web pelo Brave, cujos resultados são temporários. A ficha tem o título "Caelum - Local AI assistant"; o site do desenvolvedor o chamava de "Caelum - Local AI for Android".',
          'A ficha indica como desenvolvedor Nolan Picard, sediado na França; o app é publicado somente no Google Play.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Como obter',
        content: [
          '**O Caelum é instalado pelo Google Play como qualquer outro app Android; não há instalação manual de arquivo, terminal nem conta.** O site do desenvolvedor, que a ficha referencia, não resolve mais, então a política de privacidade está linkada abaixo como cópia arquivada.',
        ],
        columns: ['Plataforma', 'Onde obter'],
        rows: [
          {
            'Plataforma': 'Android',
            'Onde obter': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) (instalação gratuita, Android 7.0 ou posterior)',
          },
          {
            'Plataforma': 'Site',
            'Onde obter': '[caelum-app.me](https://caelum-app.me/) (sem registro DNS em 19 de outubro de 2026; há cópia arquivada de 10 de maio de 2026)',
          },
          {
            'Plataforma': 'Política de privacidade',
            'Onde obter': '[Cópia arquivada](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) (capturada em 10 de maio de 2026; texto da política datado de junho de 2025)',
          },
        ],
        note: 'Versão analisada: 1.3.1, que o Google Play mostra como atualizada pela última vez em 14 de agosto de 2025; a ficha indica 10 de julho de 2025 como a primeira versão. As notas da 1.3.1 listam busca na web melhorada, suporte a imagens com texto e a PDFs, melhor tratamento de documentos, exclusão de mensagens, correções de bugs e suporte ao idioma ucraniano.',
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Todos os itens abaixo vêm da descrição do Google Play, das notas da versão 1.3.1 ou do site arquivado.**',
        ],
        items: [
          '**Chat.** Conversa natural com a IA no dispositivo, temas claro e escuro, um layout que se adapta a tablets e, desde a 1.3.1, exclusão de mensagens individuais.',
          '**Leitor de documentos.** Você importa documentos, faz perguntas e recebe respostas; a ficha diz que os arquivos são processados no celular. As notas da 1.3.1 acrescentam suporte a imagens que contêm texto e a PDFs.',
          '**Busca opcional na web.** Pesquisa informações atuais pelo Brave Search; a ficha diz que os resultados são temporários e que nenhum histórico é armazenado.',
          '**Idiomas.** A versão 1.3.1 acrescentou o ucraniano; as fontes não listam os demais idiomas compatíveis com a interface ou com a IA.',
        ],
        note: 'A descrição da loja e o site arquivado concordam nesses pontos. A versão instalada é a palavra final.',
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso da rede',
        content: [
          '**Segundo a política de privacidade, as conversas ficam no dispositivo, os documentos são processados localmente e não são transmitidos, e nenhuma conta é criada.** A política lista o que não é coletado: nome, e-mail, número de telefone, localização, identificador exclusivo do dispositivo, dados de rastreamento publicitário, histórico de navegação e dados financeiros e de saúde. Ela também diz que não há servidor central e que o tráfego externo usa HTTPS.',
          'O único envio de dados declarado é a busca opcional na web, que manda a sua consulta ao Brave Search. A seção Segurança dos dados do Google Play diz "Nenhum dado coletado" e também que o app pode compartilhar a atividade no app com terceiros, o que condiz com a própria redação da política, segundo a qual o histórico de pesquisa no app é coletado e compartilhado com o Brave. As permissões declaradas incluem acesso à rede, manter o dispositivo ativo, ler e gravar no armazenamento compartilhado, estado do Wi-Fi, baixar arquivos sem notificação e a verificação de licença do Google Play.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser conferida no código, e a PromptQuorum não auditou o tráfego de rede. Quem lida com documentos confidenciais deve verificar o comportamento no próprio aparelho antes.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é indicado',
        items: [
          '**Usuários de Android que querem um app gratuito de chat e documentos, sem conta.** A instalação é gratuita e não exige cadastro.',
          '**Leitores que comparam apps de chat offline para Android.** As fontes mostram o que este app afirma.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Desempenho na prática.** Esta análise em si não avalia velocidade, consumo de bateria nem qualidade das respostas. O teste prático separado (um celular, uma sessão) cobre a primeira execução, a entrada de fotos, a busca na web e um prompt de lógica, mas não cronometrou as respostas nem testou o uso offline.',
          '**O modelo.** A ficha diz "IA avançada no dispositivo" e as fontes não informam modelo, tamanho, origem nem runtime, então não se sabe o que o app realmente executa.',
          '**Comportamento offline.** Não foi testado se a IA vem embutida ou é baixada na primeira execução, nem se o app funciona no modo avião; a ficha diz que não é preciso internet após a instalação.',
          '**Requisitos de hardware.** Nenhum requisito de RAM ou de armazenamento é informado; o único mínimo declarado é o Android 7.0.',
          '**Licença e código-fonte.** O app é de código fechado; o perfil público do desenvolvedor no GitHub não tem nenhum repositório do Caelum.',
          '**Compras no app.** A instalação é gratuita e a descrição não cita compras, mas os rótulos de classificação de conteúdo da ficha mencionam compras no app.',
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
            'Diferença principal': 'Chat offline de código aberto, com perguntas e respostas sobre documentos no dispositivo e benchmarks',
          },
          {
            'App': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / MIT',
            'Diferença principal': 'Cliente de chat de código aberto no dispositivo, com biblioteca própria de modelos',
          },
          {
            'App': '[MemoryAI](/pt/power-local-llm/memoryai-review)',
            'Plataformas': 'iOS, Android',
            'Preço / licença': 'Grátis / código fechado',
            'Diferença principal': 'Chat offline de código fechado, com perguntas e respostas sobre documentos, memória editável e voz',
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
            q: 'O Caelum é o mesmo que "React Native AI"?',
            a: 'O pacote do Google Play é com.reactnativeai, mas o produto se chama Caelum, e nenhuma das fontes o descreve como algo diferente do app Caelum.',
          },
          {
            q: 'O Caelum funciona no iPhone ou no desktop?',
            a: 'Não encontramos nenhuma versão assim. O site arquivado o descrevia como IA local para Android e linkava apenas o Google Play.',
          },
          {
            q: 'Ainda é possível falar com o desenvolvedor?',
            a: 'O domínio caelum-app.me não retornou registro DNS em 19 de outubro de 2026, em consulta a dois resolvedores públicos. A ficha do Google Play ainda mostra uma página do desenvolvedor e um e-mail de suporte.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Caelum é um app Android gratuito de chat e documentos, com uma proposta clara de privacidade e sem conta, mas essa proposta não foi testada e o projeto parece estar sem manutenção: é de código fechado, não informa o modelo e tem um site que não resolve mais. As atualizações que faltam, descritas no aviso no topo, são o que mais pesa. Ele serve para quem quer experimentar um assistente gratuito e aceita esses riscos; quem precisa de um app com manutenção deve comparar o [Private Mind](/pt/power-local-llm/private-mind-review) ou o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Caelum no Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) — descrição, versão, notas da versão, número de downloads, avaliações, seção Segurança dos dados e permissões, consultados em 19 de outubro de 2026.',
          '[Site do Caelum, captura arquivada](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — a página do produto do desenvolvedor em 10 de maio de 2026.',
          '[Política de privacidade do Caelum, captura arquivada](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — tratamento de dados, busca na web e permissões; texto da política datado de junho de 2025.',
          '[nolanpcrd no GitHub](https://github.com/nolanpcrd) — o perfil público do desenvolvedor, consultado em 19 de outubro de 2026; ele não lista nenhum repositório do Caelum.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Teste prático do Caelum](/pt/power-local-llm/caelum-hands-on-test) — um teste em um OnePlus 8 Pro: o app leu a etiqueta de uma encomenda em uma foto, mas uma resposta sobre notícias foi falsa e um prompt de lógica difícil foi mal avaliado; cada afirmação indica como se sabe.',
          '[Análise do Private Mind](/pt/power-local-llm/private-mind-review) — um app de chat offline gratuito, com licença MIT, para iPhone e Android.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — um cliente de chat gratuito e de código aberto no dispositivo, para iOS e Android.',
          '[Análise do MemoryAI](/pt/power-local-llm/memoryai-review) — um app de chat offline gratuito, com memória editável, para iPhone e Android.',
          '[Análise do Google AI Edge Gallery](/pt/power-local-llm/google-ai-edge-gallery-review) — o app de IA no dispositivo, de código aberto, do Google.',
          '[Melhores apps de LLM local para Android em 2026](/pt/power-local-llm/best-local-llm-apps-android-2026) — o panorama mais amplo para Android.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-ar.webp',
    title: 'مراجعة Caelum: تطبيق دردشة ذكاء اصطناعي مجاني دون اتصال لـ Android',
    seoTitle: 'مراجعة Caelum: دردشة ذكاء اصطناعي مجانية دون اتصال',
    intro:
      'Caelum مساعد مجاني للدردشة والمستندات على Android من نولان بيكار، وهو مطوّر مستقل في فرنسا. وبحسب صفحته على Google Play، يشغّل الذكاء الاصطناعي على الهاتف، ولا يتطلب حساباً، ويمكنه البحث في الويب اختيارياً عبر Brave. تعكس هذه المراجعة صفحة المتجر ونسخة مؤرشفة من موقع المطوّر وسياسة الخصوصية، كما جرى التحقق منها في 19 أكتوبر 2026.',
    metaDescription:
      'مراجعة Caelum: تطبيق دردشة مجاني ومغلق المصدر على Android يقول مطوّره إنه يعمل دون اتصال، مع أسئلة عن المستندات وبحث عبر Brave. القيود والمخاطر.',
    twitterDescription:
      'مراجعة Caelum: تطبيق دردشة ومستندات مجاني على Android يقول مطوّره إن ذكاءه الاصطناعي يعمل دون اتصال. ما تدّعيه صفحة Google Play وسياسة الخصوصية، وما لم يُتحقق منه، ولماذا قد يكون التطبيق غير مدعوم.',
    audience:
      'مستخدمو Android الذين يريدون تطبيق دردشة مجانياً يعمل دون حساب، ويحتاجون إلى معرفة ما تؤكده المصادر وما لا تؤكده، وهل ما زال المشروع قيد الصيانة.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Caelum',
    targetKeywords: [
      'مراجعة تطبيق caelum',
      'caelum مساعد ذكاء اصطناعي محلي',
      'تطبيق دردشة ذكاء اصطناعي دون اتصال android',
      'مساعد ذكاء اصطناعي خاص android دون حساب',
      'أسئلة عن المستندات على الجهاز android',
      'com.reactnativeai',
      'caelum مقابل pocketpal',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**تحذير: لم يتلقَّ Caelum أي تحديث منذ 14 أغسطس 2025 (الإصدار 1.3.1)، وقد يكون غير مدعوم — تأكد من عمله على جهازك قبل الاعتماد عليه.** **Caelum تطبيق مجاني مغلق المصدر لنظام Android يقول إن ذكاءه الاصطناعي يعمل دون اتصال، ويجيب عن أسئلة تخص مستنداتك، ويمكنه البحث في الويب اختيارياً عبر Brave.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Caelum فعلاً دون اتصال وبلا مقابل؟',
        answer:
          'بحسب صفحته وسياسة الخصوصية، نعم: التثبيت مجاني، ولا يلزم حساب، وتعمل الدردشة والأسئلة عن المستندات على الهاتف. لم يُختبر أي من الادعاءين، والبحث الاختياري في الويب يرسل استعلامك إلى Brave.',
        bullets: [
          'مجاني على [Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai)، لنظام Android 7.0 أو أحدث.',
          'أسئلة عن المستندات، بما فيها ملفات PDF والصور التي تحتوي نصاً، منذ الإصدار 1.3.1.',
          'وضع فاتح وداكن وتصميم يلائم الأجهزة اللوحية.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Caelum؟', anchor: 'what-is-caelum' },
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
            text: 'Caelum تطبيق مغلق المصدر لنظام Android يشغّل، بحسب مطوّره، مساعداً بالذكاء الاصطناعي على الهاتف دون حساب، ويجيب عن أسئلة تخص المستندات التي تستوردها.',
          },
          {
            type: 'plain-terms',
            text: 'تثبّته من Google Play وتدردش معه؛ وتُقرأ المستندات المستوردة على الهاتف، أما البحث في الويب فميزة اختيارية منفصلة ترسل استعلامك وحده إلى Brave. ولا يذكر المطوّر اسم النموذج الذي يستخدمه.',
          },
        ],
        items: [
          'المطوّر: نولان بيكار، مطوّر مستقل في فرنسا، نشر أول إصدار في 10 يوليو 2025 ويصف الإصدار 1.3.1 بأنه «الإصدار الرسمي العاشر».',
          'الانتشار: تُظهر Google Play أكثر من 10K تنزيل ومتوسط تقييم 4.1 من 271 تقييماً، لذا فسجلّ التطبيق العام متواضع.',
          'المنصة: Android 7.0 أو أحدث عبر Google Play فقط؛ ولم نعثر على نسخة لـ iPhone أو سطح المكتب أو الويب.',
          'الموقع: نطاق المطوّر لم يعد يعمل، لذا قُرئت صفحة المنتج وسياسة الخصوصية من نسخ Internet Archive.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة Google Play ونسخة مؤرشفة من موقع المطوّر وسياسة الخصوصية وملفه العام على GitHub، وقد جرى التحقق منها في 19 أكتوبر 2026. لا تستند هذه المراجعة نفسها إلى استخدام فعلي للتطبيق أو اختبارات أداء؛ ويوجد اختبار عملي منفصل مرتبط أدناه.',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'ما هو Caelum؟',
        content: [
          '**Caelum مساعد دردشة لنظام Android يشغّل، بحسب صفحته على Google Play، «ذكاءً اصطناعياً متقدماً على الجهاز» بدلاً من الاتصال بخدمة سحابية.** تصف الصفحة ثلاثة أجزاء: دردشة خاصة، وقارئ مستندات تستورد فيه ملفاتك وتسأل عنها، وبحثاً اختيارياً في الويب عبر Brave نتائجه مؤقتة. عنوان الصفحة «Caelum - Local AI assistant»، بينما سمّاه موقع المطوّر «Caelum - Local AI for Android».',
          'تذكر الصفحة أن المطوّر هو نولان بيكار ومقرّه فرنسا؛ والتطبيق منشور على Google Play فقط.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Caelum من Google Play مثل أي تطبيق Android آخر؛ دون تثبيت جانبي أو طرفية أو حساب.** موقع المطوّر الذي تربطه الصفحة لم يعد يعمل، لذا ترد سياسة الخصوصية أدناه بوصفها نسخة مؤرشفة.',
        ],
        columns: ['المنصة', 'مكان الحصول عليه'],
        rows: [
          {
            'المنصة': 'Android',
            'مكان الحصول عليه': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) (تثبيت مجاني، Android 7.0 أو أحدث)',
          },
          {
            'المنصة': 'الموقع',
            'مكان الحصول عليه': '[caelum-app.me](https://caelum-app.me/) (لا سجل DNS في 19 أكتوبر 2026؛ تتوفر نسخة مؤرشفة من 10 مايو 2026)',
          },
          {
            'المنصة': 'سياسة الخصوصية',
            'مكان الحصول عليه': '[نسخة مؤرشفة](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) (التقطت في 10 مايو 2026؛ نص السياسة مؤرخ في يونيو 2025)',
          },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.3.1، وتعرضه Google Play بآخر تحديث في 14 أغسطس 2025؛ وتذكر الصفحة 10 يوليو 2025 تاريخاً لأول إصدار. وتشمل ملاحظات 1.3.1 تحسين البحث في الويب، ودعم الصور التي تحتوي نصاً وملفات PDF، وتحسين التعامل مع المستندات، وحذف الرسائل، وإصلاح أخطاء، ودعم اللغة الأوكرانية.',
      },
      features: {
        id: 'key-features',
        title: 'الميزات التي تؤكدها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من وصف Google Play أو ملاحظات الإصدار 1.3.1 أو الموقع المؤرشف.**',
        ],
        items: [
          '**الدردشة.** محادثة طبيعية مع الذكاء الاصطناعي على الجهاز، ومظهران فاتح وداكن، وتصميم يتكيف مع الأجهزة اللوحية، وحذف الرسائل المنفردة منذ 1.3.1.',
          '**قارئ المستندات.** تستورد المستندات وتطرح الأسئلة وتتلقى الإجابات؛ وتقول الصفحة إن الملفات تُعالج على الهاتف. وتضيف ملاحظات 1.3.1 دعم الصور التي تحتوي نصاً وملفات PDF.',
          '**بحث اختياري في الويب.** يبحث عن معلومات حديثة عبر Brave Search؛ وتقول الصفحة إن النتائج مؤقتة ولا يُخزَّن أي سجل.',
          '**اللغات.** أضاف الإصدار 1.3.1 الأوكرانية؛ ولا تذكر المصادر اللغات الأخرى التي تدعمها الواجهة أو الذكاء الاصطناعي.',
        ],
        note: 'يتفق وصف المتجر والموقع المؤرشف على هذه النقاط. والنسخة المثبّتة هي المرجع الأخير.',
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**بحسب سياسة الخصوصية، تبقى المحادثات على الجهاز، وتُعالج المستندات محلياً ولا تُرسل، ولا يُنشأ أي حساب.** وتسرد السياسة ما لا يُجمع: الاسم والبريد الإلكتروني ورقم الهاتف والموقع ومعرّفاً فريداً للجهاز وبيانات تتبّع الإعلانات وسجل التصفح والبيانات المالية والصحية. وتقول أيضاً إنه لا يوجد خادم مركزي، وإن حركة المرور الخارجية تستخدم HTTPS.',
          'التدفق الخارجي الوحيد المعلن هو البحث الاختياري في الويب، الذي يرسل استعلام البحث إلى Brave Search. ويذكر قسم Data safety في Google Play عبارة «No data collected» ويذكر أيضاً أن التطبيق قد يشارك نشاط التطبيق مع أطراف ثالثة، وهو ما يتوافق مع صياغة السياسة نفسها بأن سجل البحث في التطبيق يُجمع ويُشارك مع Brave. وتشمل الأذونات المعلنة الوصول إلى الشبكة، وإبقاء الجهاز مستيقظاً، وقراءة التخزين المشترك والكتابة فيه، وحالة Wi-Fi، وتنزيل الملفات دون إشعار، والتحقق من ترخيص Google Play.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من أي من هذه الادعاءات في الكود، ولم تدقق PromptQuorum حركة الشبكة. وينبغي لمن يتعامل مع مستندات سرية أن يتحقق من السلوك على جهازه أولاً.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مستخدمو Android الذين يريدون تطبيق دردشة ومستندات مجانياً دون حساب.** التثبيت مجاني ولا يتطلب تسجيلاً.',
          '**من يقارن بين تطبيقات الدردشة دون اتصال على Android.** تبيّن المصادر ما يدّعيه هذا التطبيق.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الأداء العملي.** لا تقيّم هذه المراجعة نفسها السرعة واستهلاك البطارية وجودة الإجابات. أما الاختبار العملي المنفصل (هاتف واحد وجلسة واحدة) فيشمل التشغيل الأول وإدخال الصور والبحث على الويب ومسألة منطقية، لكنه لم يقِس زمن الإجابات ولم يختبر الاستخدام دون اتصال.',
          '**النموذج.** تقول الصفحة «ذكاء اصطناعي متقدم على الجهاز» ولا تسمّي المصادر نموذجاً أو حجماً أو مصدراً أو بيئة تشغيل، لذا لا يُعرف ما الذي يشغّله التطبيق فعلاً.',
          '**العمل دون اتصال.** لم يُختبر هل النموذج مضمَّن في التطبيق أم يُنزَّل عند أول تشغيل، وهل يعمل التطبيق في وضع الطيران؛ وتقول الصفحة إنه لا حاجة إلى الإنترنت بعد التثبيت.',
          '**متطلبات العتاد.** لا يُذكر أي حد أدنى للذاكرة أو التخزين؛ والحد الوحيد المذكور هو Android 7.0.',
          '**الترخيص والكود المصدري.** التطبيق مغلق المصدر؛ ولا يضم ملف المطوّر العام على GitHub أي مستودع لـ Caelum.',
          '**المشتريات داخل التطبيق.** التثبيت مجاني ولا يذكر الوصف أي مشتريات، لكن تصنيفات المحتوى في الصفحة تشير إلى مشتريات داخل التطبيق.',
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
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'دردشة مفتوحة المصدر دون اتصال مع أسئلة وأجوبة عن المستندات على الجهاز واختبارات أداء',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / MIT',
            'الفرق الرئيسي': 'عميل دردشة مفتوح المصدر على الجهاز مع مكتبة نماذج خاصة به',
          },
          {
            'التطبيق': '[MemoryAI](/ar/power-local-llm/memoryai-review)',
            'المنصات': 'iOS وAndroid',
            'السعر / الترخيص': 'مجاني / مغلق المصدر',
            'الفرق الرئيسي': 'دردشة مغلقة المصدر دون اتصال مع أسئلة عن المستندات وذاكرة قابلة للتعديل وصوت',
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
            q: 'هل Caelum هو نفسه «React Native AI»؟',
            a: 'حزمة Google Play هي com.reactnativeai، لكن اسم المنتج Caelum، ولا يصفه أي من المصادر بغير أنه تطبيق Caelum.',
          },
          {
            q: 'هل يعمل Caelum على iPhone أو سطح المكتب؟',
            a: 'لم نعثر على نسخة كهذه. وصف الموقع المؤرشف التطبيق بأنه ذكاء اصطناعي محلي لنظام Android ولم يربط إلا Google Play.',
          },
          {
            q: 'هل ما زال بالإمكان الوصول إلى المطوّر؟',
            a: 'لم يُرجع النطاق caelum-app.me أي سجل DNS في 19 أكتوبر 2026 عند الفحص بخادمي أسماء عامّين. وما زالت صفحة Google Play تعرض صفحة للمطوّر وعنوان بريد إلكتروني للدعم.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Caelum تطبيق دردشة ومستندات مجاني على Android بطرح واضح في الخصوصية ودون حساب، لكن هذا الطرح غير مختبر ويبدو أن المشروع غير مدعوم: فهو مغلق المصدر، ولا يسمّي نموذجاً، وموقعه لم يعد يعمل. ويبقى انقطاع التحديثات الموضح في التحذير أعلاه أثقل هذه النقاط. يناسب من يريد تجربة مساعد مجاني ويقبل هذه المخاطر؛ أما من يحتاج إلى تطبيق مدعوم فعليه مقارنة [Private Mind](/ar/power-local-llm/private-mind-review) أو [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Caelum على Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) — الوصف والإصدار وملاحظات الإصدار وعدد التنزيلات والتقييمات وقسم Data safety والأذونات، جرى التحقق منها في 19 أكتوبر 2026.',
          '[موقع Caelum، نسخة مؤرشفة](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — صفحة منتج المطوّر كما كانت في 10 مايو 2026.',
          '[سياسة خصوصية Caelum، نسخة مؤرشفة](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — التعامل مع البيانات والبحث في الويب والأذونات؛ نص السياسة مؤرخ في يونيو 2025.',
          '[nolanpcrd على GitHub](https://github.com/nolanpcrd) — الملف العام للمطوّر، جرى التحقق منه في 19 أكتوبر 2026؛ ولا يعرض أي مستودع لـ Caelum.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[اختبار Caelum العملي](/ar/power-local-llm/caelum-hands-on-test) — اختبار على هاتف OnePlus 8 Pro: قرأ التطبيق بيانات شحنة من صورة، لكن إجابة إخبارية واحدة كانت خاطئة وحصلت مسألة منطقية صعبة على تقييم ضعيف، مع وسم كل عبارة بمصدر معرفتها.',
          '[مراجعة Private Mind](/ar/power-local-llm/private-mind-review) — تطبيق دردشة مجاني دون اتصال بترخيص MIT لـ iPhone وAndroid.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة مجاني مفتوح المصدر على الجهاز لنظامي iOS وAndroid.',
          '[مراجعة MemoryAI](/ar/power-local-llm/memoryai-review) — تطبيق دردشة مجاني دون اتصال مع ذاكرة قابلة للتعديل لـ iPhone وAndroid.',
          '[مراجعة Google AI Edge Gallery](/ar/power-local-llm/google-ai-edge-gallery-review) — تطبيق الذكاء الاصطناعي المفتوح المصدر على الجهاز من Google.',
          '[أفضل تطبيقات النماذج اللغوية المحلية لنظام Android في 2026](/ar/power-local-llm/best-local-llm-apps-android-2026) — الملخص الأوسع لتطبيقات Android.',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-zh.webp',
    title: 'Caelum 评测：适用于 Android 的免费离线 AI 聊天应用',
    seoTitle: 'Caelum 评测：Android 免费离线 AI 聊天应用',
    intro:
      'Caelum 是一款适用于 Android 的免费聊天与文档助手，由法国独立开发者 Nolan Picard 开发。根据其 Google Play 页面，它在手机上运行 AI，无需账号，并可选择通过 Brave 搜索网页。本评测反映其应用商店页面，以及开发者网站和隐私政策的存档副本在 2026 年 10 月 19 日的情况。',
    metaDescription:
      'Caelum 评测：免费闭源的 Android 聊天应用，称其 AI 离线运行，支持文档问答和 Brave 联网搜索。内容基于存档页面，未经实测，并说明局限与风险。',
    twitterDescription:
      'Caelum 评测：一款称其 AI 离线运行的免费 Android 聊天与文档应用。Google Play 页面和隐私政策的说法、未经核实的部分，以及它为何可能已无人维护。',
    audience:
      '希望使用无需账号的免费聊天应用的 Android 用户，并且需要了解哪些内容已被来源确认、哪些没有，以及该项目是否仍在维护。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Caelum 评测',
    targetKeywords: [
      'caelum 应用评测',
      'caelum 本地 ai 助手',
      '安卓 离线 ai 聊天应用',
      '无需账号 安卓 私密 ai 助手',
      '安卓 设备端 文档问答',
      'com.reactnativeai',
      'caelum 与 pocketpal 对比',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**警告：Caelum 自 2025 年 8 月 14 日（版本 1.3.1）以来未再更新，可能已无人维护——使用前请先确认它能在你的设备上正常运行。** **Caelum 是一款免费、闭源的 Android 应用，称其 AI 离线运行，可回答有关你文档的问题，并可选择通过 Brave 搜索网页。**',
    quickAnswerTop: {
      zh: {
        question: 'Caelum 真的能离线运行并且免费吗？',
        answer:
          '根据其页面和隐私政策，确实如此：安装免费，无需账号，聊天和文档问答均在手机上运行。这两点均未经测试，而且可选的网页搜索会把你的查询发送给 Brave。',
        bullets: [
          '可在 [Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) 免费获取，需要 Android 7.0 或更高版本。',
          '自 1.3.1 版本起支持文档问答，包括 PDF 和含文字的图片。',
          '支持浅色和深色模式，以及适配平板的布局。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速解答', anchor: 'quick-answer' },
      { label: 'Caelum 是什么？', anchor: 'what-is-caelum' },
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
            text: 'Caelum 是一款闭源的 Android 应用，据其开发者称，它在手机上运行 AI 助手，无需账号，并可回答有关你导入文档的问题。',
          },
          {
            type: 'plain-terms',
            text: '你从 Google Play 安装后即可与它聊天；导入的文档在手机上读取，网页搜索则是另一项可选功能，只把你的查询发送给 Brave。开发者没有说明它使用的是哪个模型。',
          },
        ],
        items: [
          '开发者：Nolan Picard，法国独立开发者，于 2025 年 7 月 10 日发布首个版本，并称 1.3.1 版为“第 10 个正式版本”。',
          '影响范围：Google Play 显示下载量 10K+，271 个评分的平均分为 4.1，因此该应用的公开口碑记录有限。',
          '平台：仅通过 Google Play 提供，需要 Android 7.0 或更高版本；未发现 iPhone、桌面或网页版本。',
          '网站：开发者的域名已无法解析，因此产品页面和隐私政策是从 Internet Archive 的存档中读取的。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 Google Play 页面、开发者网站和隐私政策的存档副本，以及开发者公开的 GitHub 主页，核实日期为 2026 年 10 月 19 日。本评测本身并非基于实际使用或基准测试；另有一篇实测文章，链接见下方。',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'Caelum 是什么？',
        content: [
          '**Caelum 是一款 Android 聊天助手，根据其 Google Play 页面，它运行的是“先进的设备端 AI”，而不是调用云服务。** 页面描述了三个部分：私密聊天、可导入文件并就其提问的文档阅读器，以及通过 Brave 进行、结果为临时性质的可选网页搜索。该页面的标题是“Caelum - Local AI assistant”；开发者网站则称之为“Caelum - Local AI for Android”。',
          '页面注明开发者为 Nolan Picard，常驻法国；该应用仅在 Google Play 上架。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Caelum 与其他 Android 应用一样从 Google Play 安装，无需旁加载、终端或账号。** 页面所链接的开发者网站已无法解析，因此下方的隐私政策以存档副本的形式给出链接。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          {
            '平台': 'Android',
            '获取方式': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai)（免费安装，需要 Android 7.0 或更高版本）',
          },
          {
            '平台': '网站',
            '获取方式': '[caelum-app.me](https://caelum-app.me/)（2026 年 10 月 19 日无 DNS 记录；有 2026 年 5 月 10 日的存档副本）',
          },
          {
            '平台': '隐私政策',
            '获取方式': '[存档副本](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html)（2026 年 5 月 10 日抓取；政策文本日期为 2025 年 6 月）',
          },
        ],
        note: '所评测版本：1.3.1，Google Play 显示其最后更新于 2025 年 8 月 14 日；页面给出的首次发布日期为 2025 年 7 月 10 日。1.3.1 版的更新说明列出了更好的网页搜索、对含文字图片和 PDF 的支持、更好的文档处理、消息删除、错误修复以及乌克兰语支持。',
      },
      features: {
        id: 'key-features',
        title: '来源已确认的功能',
        content: [
          '**以下每一项均来自 Google Play 描述、1.3.1 版更新说明或存档网站。**',
        ],
        items: [
          '**聊天。** 与设备端 AI 自然对话，支持浅色和深色主题、适配平板的布局，并且自 1.3.1 版起可删除单条消息。',
          '**文档阅读器。** 你导入文档、提出问题并获得回答；页面称文件在手机上处理。1.3.1 版的更新说明新增了对含文字图片和 PDF 的支持。',
          '**可选的网页搜索。** 通过 Brave Search 搜索最新信息；页面称结果是临时的，不保存任何历史记录。',
          '**语言。** 1.3.1 版新增了乌克兰语；来源没有列出界面或 AI 支持的其他语言。',
        ],
        note: '应用商店描述与存档网站在这些方面一致。最终以已安装的版本为准。',
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**根据隐私政策，对话保存在设备上，文档在本地处理且不会传输，也不会创建账号。** 政策列出了不会收集的内容：姓名、电子邮件、电话号码、位置、唯一设备标识符、广告跟踪数据、浏览历史、财务和健康数据。政策还称没有中央服务器，对外流量使用 HTTPS。',
          '唯一声明的外发数据是可选的网页搜索，它会把你的搜索查询发送给 Brave Search。Google Play 的数据安全（Data safety）部分写明“未收集数据”，同时也写明应用可能与第三方共享应用活动，这与政策自身的说法一致：应用内的搜索历史会被收集并与 Brave 共享。声明的权限包括网络访问、保持设备唤醒、读写共享存储、Wi-Fi 状态、无通知下载文件以及 Google Play 许可证检查。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用为闭源，因此这些说法均无法通过代码核查，PromptQuorum 也未审计其网络流量。处理机密文档的人应先在自己的设备上核实其行为。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合哪些人使用',
        items: [
          '**想要一款无需账号的免费聊天和文档应用的 Android 用户。** 安装免费，无需注册。',
          '**正在比较离线 Android 聊天应用的读者。** 这些来源展示了这款应用自己的说法。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们无法核实的内容',
        items: [
          '**实际使用表现。** 本评测本身不评估速度、耗电和回答质量。另有的实测（一部手机、一次测试）涵盖首次运行、照片输入、网页搜索和一道逻辑题，但没有给回答计时，也没有测试离线使用。',
          '**模型。** 页面只写“先进的设备端 AI”，来源没有说明任何模型、大小、出处或运行时，因此不清楚该应用实际运行的是什么。',
          '**离线行为。** AI 是内置的还是首次运行时下载的，以及应用能否在飞行模式下工作，均未经测试；页面称安装后无需联网。',
          '**硬件需求。** 未说明内存或存储要求；唯一注明的下限是 Android 7.0。',
          '**许可证与源代码。** 该应用为闭源；开发者公开的 GitHub 主页中没有 Caelum 代码仓库。',
          '**应用内购买。** 安装免费，描述中也没有提到任何购买项目，但页面的内容分级标签提到了应用内购买。',
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
            '主要区别': '开源离线聊天，支持设备端文档问答和基准测试',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / MIT',
            '主要区别': '开源的设备端聊天客户端，自带模型库',
          },
          {
            '应用': '[MemoryAI](/zh/power-local-llm/memoryai-review)',
            '平台': 'iOS、Android',
            '价格 / 许可证': '免费 / 闭源',
            '主要区别': '闭源离线聊天，支持文档问答、可编辑记忆和语音',
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
            q: 'Caelum 就是“React Native AI”吗？',
            a: 'Google Play 的包名是 com.reactnativeai，但产品名为 Caelum，所有来源都只把它描述为 Caelum 应用。',
          },
          {
            q: 'Caelum 能在 iPhone 或桌面上使用吗？',
            a: '未发现这样的版本。存档网站称其为适用于 Android 的本地 AI，并且只链接到 Google Play。',
          },
          {
            q: '我还能联系到开发者吗？',
            a: '2026 年 10 月 19 日使用两个公共解析器检查时，域名 caelum-app.me 没有返回 DNS 记录。Google Play 页面仍显示开发者页面和支持邮箱地址。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Caelum 是一款免费的 Android 聊天和文档应用，隐私卖点明确且无需账号，但这一卖点未经测试，而且项目看起来已无人维护：它是闭源的，没有说明所用模型，网站也已无法解析。最值得重视的是顶部警告中所说的更新缺失。它适合愿意尝试免费助手并接受这些风险的读者；需要一款仍在维护的应用的读者，应比较 [Private Mind](/zh/power-local-llm/private-mind-review) 或 [PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Google Play 上的 Caelum](https://play.google.com/store/apps/details?id=com.reactnativeai) — 描述、版本、更新说明、下载量、评分、数据安全部分和权限，核实于 2026 年 10 月 19 日。',
          '[Caelum 网站，存档抓取](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — 开发者在 2026 年 5 月 10 日的产品页面。',
          '[Caelum 隐私政策，存档抓取](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — 数据处理、网页搜索和权限；政策文本日期为 2025 年 6 月。',
          '[GitHub 上的 nolanpcrd](https://github.com/nolanpcrd) — 开发者的公开主页，核实于 2026 年 10 月 19 日；其中没有列出 Caelum 代码仓库。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Caelum实测](/zh/power-local-llm/caelum-hands-on-test)——在 OnePlus 8 Pro 上进行的测试：能从照片中读出包裹面单，但一条新闻回答有误，高难度逻辑题得分很低，每条陈述都标明了依据。',
          '[Private Mind 评测](/zh/power-local-llm/private-mind-review) — 一款适用于 iPhone 和 Android 的免费、MIT 许可的离线聊天应用。',
          '[PocketPal AI 评测](/zh/power-local-llm/pocketpal-ai-review) — 一款适用于 iOS 和 Android 的免费、开源设备端聊天客户端。',
          '[MemoryAI 评测](/zh/power-local-llm/memoryai-review) — 一款适用于 iPhone 和 Android、带可编辑记忆的免费离线聊天应用。',
          '[Google AI Edge Gallery 评测](/zh/power-local-llm/google-ai-edge-gallery-review) — Google 的开源设备端 AI 应用。',
          '[2026 年最佳 Android 本地 LLM 应用](/zh/power-local-llm/best-local-llm-apps-android-2026) — 更全面的 Android 应用汇总。',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-19',
    dateModified: '2026-10-21',
    next_refresh_due: '2027-04-19',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/caelum-review-hero-ko.webp',
    title: 'Caelum 리뷰: Android용 무료 오프라인 AI 채팅 앱',
    seoTitle: 'Caelum 리뷰: Android용 무료 오프라인 AI 앱',
    intro:
      'Caelum은 프랑스의 독립 개발자 Nolan Picard가 만든 Android용 무료 채팅·문서 도우미 앱입니다. Google Play 게재 정보에 따르면 AI를 휴대폰에서 실행하고, 계정이 필요 없으며, 선택 사항으로 Brave를 통해 웹을 검색할 수 있습니다. 이 리뷰는 2026년 10월 19일에 확인한 스토어 게재 정보와 개발자 웹사이트 및 개인정보 처리방침의 보관 사본을 반영합니다.',
    metaDescription:
      'Caelum 리뷰: AI가 오프라인으로 실행된다는 무료 비공개 소스 Android 채팅 앱. 문서 질문, Brave 웹 검색, 한계와 위험.',
    twitterDescription:
      'Caelum 리뷰: AI가 오프라인으로 실행된다는 무료 Android 채팅·문서 앱. Google Play 게재 정보와 개인정보 처리방침의 주장, 확인되지 않은 사항, 유지보수가 중단되었을 수 있는 이유를 다룹니다.',
    audience:
      '계정 없이 쓸 수 있는 무료 채팅 앱을 찾는 Android 이용자로, 출처가 무엇을 확인해 주고 무엇을 확인해 주지 않는지, 프로젝트가 아직 유지보수되고 있는지 알아야 하는 분들.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Caelum 리뷰',
    targetKeywords: [
      'caelum 앱 리뷰',
      'caelum 로컬 ai 어시스턴트',
      '오프라인 ai 채팅 앱 안드로이드',
      '계정 없는 비공개 ai 어시스턴트 안드로이드',
      '온디바이스 문서 질문 안드로이드',
      'com.reactnativeai',
      'caelum pocketpal 비교',
    ],
    current_models_mentioned: [],
    current_hardware_mentioned: ['Android'],
    leadAnswerBlock:
      '**경고: Caelum은 2025년 8월 14일(버전 1.3.1) 이후 업데이트가 없어 유지보수가 중단되었을 수 있습니다. 사용 전에 기기에서 정상 작동하는지 확인하십시오.** **Caelum은 AI를 오프라인으로 실행하고, 내 문서에 대한 질문에 답하며, 선택 사항으로 Brave를 통해 웹을 검색한다고 밝히는 무료 비공개 소스 Android 앱입니다.**',
    quickAnswerTop: {
      ko: {
        question: 'Caelum은 정말 오프라인으로 실행되며 무료입니까?',
        answer:
          '게재 정보와 개인정보 처리방침에 따르면 그렇습니다. 설치는 무료이고, 계정이 필요 없으며, 채팅과 문서 질문은 휴대폰에서 실행됩니다. 두 주장 모두 테스트하지 않았으며, 선택 사항인 웹 검색은 검색어를 Brave로 보냅니다.',
        bullets: [
          '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai)에서 무료, Android 7.0 이상.',
          '버전 1.3.1부터 PDF와 텍스트가 담긴 이미지를 포함한 문서 질문 지원.',
          '라이트·다크 모드와 태블릿에 맞는 레이아웃.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Caelum이란 무엇인가?', anchor: 'what-is-caelum' },
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
            text: 'Caelum은 개발자에 따르면 계정 없이 휴대폰에서 AI 어시스턴트를 실행하고 가져온 문서에 대한 질문에 답하는 비공개 소스 Android 앱입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Google Play에서 설치해 채팅하며, 가져온 문서는 휴대폰에서 읽습니다. 웹 검색은 별도의 선택 기능이며 검색어만 Brave로 보냅니다. 개발자는 사용하는 모델의 이름을 밝히지 않습니다.',
          },
        ],
        items: [
          '개발자: 프랑스의 개인 개발자 Nolan Picard이며, 2025년 7월 10일에 첫 버전을 배포했고 버전 1.3.1을 "10번째 공식 릴리스"라고 부릅니다.',
          '도달 범위: Google Play에는 다운로드 10K+, 271개 평점의 평균 4.1이 표시되어 있어, 공개된 이력이 많지 않은 앱입니다.',
          '플랫폼: Google Play를 통한 Android 7.0 이상만 지원하며, iPhone, 데스크톱, 웹 빌드는 찾지 못했습니다.',
          '웹사이트: 개발자의 도메인이 더 이상 연결되지 않아, 제품 페이지와 개인정보 처리방침은 Internet Archive 보관 사본으로 읽었습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 Google Play 게재 정보, 개발자 웹사이트와 개인정보 처리방침의 보관 사본, 개발자의 공개 GitHub 프로필을 2026년 10월 19일에 확인한 내용을 근거로 합니다. 이 리뷰 자체는 앱을 직접 사용하거나 벤치마크한 내용에 근거하지 않으며, 별도의 직접 테스트는 아래에 링크되어 있습니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-caelum',
        title: 'Caelum이란 무엇인가?',
        content: [
          '**Caelum은 Google Play 게재 정보에 따르면 클라우드 서비스를 호출하는 대신 "고급 온디바이스 AI"를 실행하는 Android 채팅 어시스턴트입니다.** 게재 정보는 세 부분을 설명합니다. 비공개 채팅, 파일을 가져와 그에 대해 질문하는 문서 리더, 그리고 결과가 임시로만 유지되는 Brave 기반 선택형 웹 검색입니다. 게재 제목은 "Caelum - Local AI assistant"이고, 개발자 사이트에서는 "Caelum - Local AI for Android"라고 불렀습니다.',
          '게재 정보는 개발자를 프랑스에 기반을 둔 Nolan Picard로 명시하며, 앱은 Google Play에서만 배포됩니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '어디서 받나요?',
        content: [
          '**Caelum은 다른 Android 앱처럼 Google Play에서 설치하며, 사이드로드, 터미널, 계정이 필요 없습니다.** 게재 정보가 링크하는 개발자 웹사이트는 더 이상 연결되지 않으므로, 개인정보 처리방침은 아래에 보관 사본으로 링크합니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          {
            '플랫폼': 'Android',
            '받는 곳': '[Google Play](https://play.google.com/store/apps/details?id=com.reactnativeai) (무료 설치, Android 7.0 이상)',
          },
          {
            '플랫폼': '웹사이트',
            '받는 곳': '[caelum-app.me](https://caelum-app.me/) (2026년 10월 19일 기준 DNS 레코드 없음, 2026년 5월 10일 보관 사본 있음)',
          },
          {
            '플랫폼': '개인정보 처리방침',
            '받는 곳': '[보관 사본](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) (2026년 5월 10일 수집, 처리방침 본문 날짜는 2025년 6월)',
          },
        ],
        note: '확인한 버전은 1.3.1이며 Google Play에는 마지막 업데이트가 2025년 8월 14일로 표시되어 있고, 게재 정보는 첫 릴리스를 2025년 7월 10일로 적고 있습니다. 1.3.1 릴리스 노트에는 웹 검색 개선, 텍스트가 담긴 이미지와 PDF 지원, 문서 처리 개선, 메시지 삭제, 버그 수정, 우크라이나어 지원이 나와 있습니다.',
      },
      features: {
        id: 'key-features',
        title: '출처로 확인되는 기능',
        content: [
          '**아래 항목은 모두 Google Play 설명, 1.3.1 릴리스 노트 또는 보관된 웹사이트에서 가져온 것입니다.**',
        ],
        items: [
          '**채팅.** 온디바이스 AI와 나누는 자연스러운 대화, 라이트·다크 테마, 태블릿에 맞춰지는 레이아웃, 그리고 1.3.1부터 개별 메시지 삭제.',
          '**문서 리더.** 문서를 가져와 질문하고 답을 받습니다. 게재 정보에 따르면 파일은 휴대폰에서 처리됩니다. 1.3.1 노트에는 텍스트가 담긴 이미지와 PDF 지원이 추가되었다고 나와 있습니다.',
          '**선택형 웹 검색.** Brave Search로 최신 정보를 검색합니다. 게재 정보에 따르면 결과는 임시로만 유지되고 기록은 저장되지 않습니다.',
          '**언어.** 버전 1.3.1에서 우크라이나어가 추가되었으며, 인터페이스나 AI가 지원하는 다른 언어는 출처에 나와 있지 않습니다.',
        ],
        note: '스토어 설명과 보관된 웹사이트는 이 점들에서 일치합니다. 최종 기준은 설치된 빌드입니다.',
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**개인정보 처리방침에 따르면 대화는 기기에 머물고, 문서는 로컬에서 처리되어 전송되지 않으며, 계정은 만들어지지 않습니다.** 처리방침은 수집하지 않는 항목을 나열합니다. 이름, 이메일, 전화번호, 위치, 고유 기기 식별자, 광고 추적 데이터, 인터넷 사용 기록, 금융 및 건강 데이터입니다. 또한 중앙 서버가 없으며 외부 트래픽은 HTTPS를 사용한다고 밝힙니다.',
          '유일하게 밝혀진 외부 전송은 검색어를 Brave Search로 보내는 선택형 웹 검색입니다. Google Play 데이터 보안 항목에는 "수집된 데이터 없음"이라고 되어 있으면서 앱이 앱 활동을 제3자와 공유할 수 있다고도 표시되어 있는데, 이는 앱 내 검색 기록이 수집되어 Brave와 공유된다는 처리방침 자체의 표현과 일치합니다. 선언된 권한에는 네트워크 접근, 기기 절전 방지, 공유 저장소 읽기·쓰기, Wi-Fi 상태, 알림 없는 파일 내려받기, Google Play 라이선스 확인이 포함됩니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 앱은 소스 코드가 공개되어 있지 않아 위 주장은 어느 것도 코드에서 확인할 수 없으며, PromptQuorum은 네트워크 트래픽을 감사하지 않았습니다. 기밀 문서를 다루는 분은 먼저 본인 기기에서 동작을 직접 확인해야 합니다.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '이런 분께 적합합니다',
        items: [
          '**계정 없이 쓸 수 있는 무료 채팅·문서 앱을 원하는 Android 이용자.** 설치는 무료이며 가입이 필요 없습니다.',
          '**오프라인 Android 채팅 앱을 비교하는 분.** 출처를 보면 이 앱이 무엇을 주장하는지 알 수 있습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 사항',
        items: [
          '**실제 사용 성능.** 이 리뷰 자체는 속도, 배터리 사용량, 답변 품질을 평가하지 않습니다. 별도의 직접 테스트(휴대폰 한 대, 한 번의 세션)에서는 첫 실행, 사진 입력, 웹 검색, 논리 문제를 다뤘지만 응답 시간을 측정하거나 오프라인 사용을 테스트하지는 않았습니다.',
          '**모델.** 게재 정보에는 "고급 온디바이스 AI"라고만 되어 있고 출처에 모델, 크기, 출처, 런타임이 나와 있지 않아, 앱이 실제로 무엇을 실행하는지 알 수 없습니다.',
          '**오프라인 동작.** AI가 앱에 포함되어 있는지 처음 실행할 때 내려받는지, 비행기 모드에서 앱이 작동하는지는 테스트하지 않았습니다. 게재 정보에는 설치 후 인터넷이 필요 없다고 되어 있습니다.',
          '**하드웨어 요구 사항.** RAM이나 저장 공간 요구 사항은 나와 있지 않으며, 명시된 최소 조건은 Android 7.0뿐입니다.',
          '**라이선스와 소스 코드.** 앱은 소스 코드가 공개되어 있지 않으며, 개발자의 공개 GitHub 프로필에는 Caelum 저장소가 없습니다.',
          '**앱 내 구입.** 설치는 무료이고 설명에는 구입 항목이 없지만, 게재 정보의 콘텐츠 등급 라벨에는 앱 내 구입이 언급되어 있습니다.',
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
            '앱': '[MemoryAI](/ko/power-local-llm/memoryai-review)',
            '플랫폼': 'iOS, Android',
            '가격 / 라이선스': '무료 / 비공개 소스',
            '핵심 차이': '문서 Q&A, 편집 가능한 메모리, 음성을 갖춘 비공개 소스 오프라인 채팅',
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
            q: 'Caelum은 "React Native AI"와 같은 앱인가요?',
            a: 'Google Play 패키지 이름은 com.reactnativeai이지만 제품 이름은 Caelum이며, 어떤 출처도 이 앱을 Caelum 앱 외의 다른 것으로 설명하지 않습니다.',
          },
          {
            q: 'Caelum은 iPhone이나 데스크톱에서도 작동하나요?',
            a: '그런 빌드는 찾지 못했습니다. 보관된 웹사이트는 이 앱을 Android용 로컬 AI라고 소개했고 Google Play 링크만 제공했습니다.',
          },
          {
            q: '개발자에게 아직 연락할 수 있나요?',
            a: '2026년 10월 19일에 공개 리졸버 두 곳으로 확인했을 때 caelum-app.me 도메인에는 DNS 레코드가 없었습니다. Google Play 게재 정보에는 여전히 개발자 페이지와 지원 이메일 주소가 표시되어 있습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Caelum은 개인정보 보호를 분명히 내세우고 계정이 필요 없는 무료 Android 채팅·문서 앱이지만, 그 주장은 테스트되지 않았고 프로젝트는 유지보수되지 않는 것으로 보입니다. 소스 코드가 공개되어 있지 않고, 모델 이름을 밝히지 않으며, 웹사이트도 더 이상 연결되지 않습니다. 맨 위 경고에서 설명한 업데이트 부재가 가장 무겁게 작용합니다. 무료 어시스턴트를 써 보고 이런 위험을 감수할 수 있는 분께 맞으며, 유지보수되는 앱이 필요한 분은 [Private Mind](/ko/power-local-llm/private-mind-review)나 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 비교해 보시기 바랍니다.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Google Play의 Caelum](https://play.google.com/store/apps/details?id=com.reactnativeai) — 설명, 버전, 릴리스 노트, 다운로드 수, 평점, 데이터 보안 항목, 권한. 2026년 10월 19일 확인.',
          '[Caelum 웹사이트, 보관 수집본](https://web.archive.org/web/20260510120543/https://caelum-app.me/) — 2026년 5월 10일 기준 개발자의 제품 페이지.',
          '[Caelum 개인정보 처리방침, 보관 수집본](https://web.archive.org/web/20260510120111/http://caelum-app.me/rgpd.html) — 데이터 처리, 웹 검색, 권한. 처리방침 본문 날짜는 2025년 6월.',
          '[GitHub의 nolanpcrd](https://github.com/nolanpcrd) — 2026년 10월 19일에 확인한 개발자의 공개 프로필로, Caelum 저장소는 없습니다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Caelum 직접 테스트](/ko/power-local-llm/caelum-hands-on-test) — OnePlus 8 Pro에서 진행한 테스트로, 사진 속 택배 송장은 읽어 냈지만 뉴스 질문에는 틀린 답을 했고 어려운 논리 문제는 낮게 평가되었으며 모든 서술에 근거 라벨을 붙였습니다.',
          '[Private Mind 리뷰](/ko/power-local-llm/private-mind-review) — iPhone·Android용 무료 MIT 라이선스 오프라인 채팅 앱.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — iOS·Android용 무료 오픈 소스 온디바이스 채팅 클라이언트.',
          '[MemoryAI 리뷰](/ko/power-local-llm/memoryai-review) — iPhone·Android용 편집 가능한 메모리를 갖춘 무료 오프라인 채팅 앱.',
          '[Google AI Edge Gallery 리뷰](/ko/power-local-llm/google-ai-edge-gallery-review) — Google의 오픈 소스 온디바이스 AI 앱.',
          '[2026년 Android용 최고의 로컬 LLM 앱](/ko/power-local-llm/best-local-llm-apps-android-2026) — Android 앱 전반을 다룬 종합 정리.',
        ],
      },
    },
  },
}
