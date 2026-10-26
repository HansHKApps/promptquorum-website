// Pajdo Review: Apple Health Companion That Answers on the iPhone
// Slug: pajdo-review
// Companion to: castmates-review (same developer), lyonesse-review (same developer), nekoni-review, on-device-ai-translator-review,
// memoryai-review, best-local-llm-apps-iphone-2026
// Sources: App Store listing (US/DE/ES/FR/JP/BR storefronts) and iTunes lookup record, the product website (get-pajdo.app), its press page and
// its privacy policy, all checked 2026-10-26 — no hands-on testing. Storefront prices (Pro monthly / yearly / lifetime): US $7.99/$39.99/$69.99,
// DE/ES/FR €8,99/€44,99/€79,99, JP ¥1,300/¥6,000/¥11,000, BR R$ 49,90/R$ 249,90/R$ 499,90, KR ₩12,000/₩66,000/₩110,000 (plan labels read from each storefront page).
// Developer: Josip Markovic confirmed by email on 2026-10-26 that he also develops Castmates and Lyonesse; the App Store seller name is identical on all three
// and the Pajdo and Lyonesse listings carry the copyright line "Markovic Software". No maker quote about this review exists, so no "From the Maker" section.

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
    heroImage: '/images/pajdo-review-hero-en.webp',
    title: 'Pajdo Review: Apple Health Companion That Answers on the iPhone',
    seoTitle: 'Pajdo Review: Apple Health Companion on the iPhone',
    intro:
      'Pajdo: Health & Fitness Buddy is an iPhone, iPad and Apple Watch app that reads Apple Health data and answers questions about it with Apple Intelligence on the device. It is listed under the seller name Josip Markovic, the same developer as [Castmates](/power-local-llm/castmates-review) and [Lyonesse](/power-local-llm/lyonesse-review), and was first released on 13 October 2026. This review reflects its App Store listing, website and privacy policy as checked on 26 October 2026.',
    metaDescription:
      'Pajdo review: free iPhone and Apple Watch app that explains Apple Health data and answers questions with on-device Apple Intelligence. Pricing and privacy.',
    twitterDescription:
      'Pajdo review: a free, closed-source Apple Health companion for iPhone and Apple Watch that says its AI answers run on the device. Pricing, privacy and what the sources do not confirm.',
    audience:
      'iPhone and Apple Watch owners who want their Apple Health data explained by an on-device AI, and who need to know what it costs, what leaves the phone and what the sources do not confirm.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Pajdo review',
    targetKeywords: [
      'pajdo app review',
      'apple health ai companion iphone',
      'on-device ai health app',
      'apple intelligence health questions',
      'apple watch sleep hrv app',
      'private health app no account',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo (version 1.3.3 as of 26 October 2026) is a free iPhone, iPad and Apple Watch app that turns Apple Health data into one of eight moods and, per its website, answers your questions about that data with Apple Intelligence on the device.** The free plan includes 5 questions a week; the Pro plan lifts that limit and adds workout planning and a doctor-visit report. The app is closed source and requires iOS 26 or later, so the on-device claim rests on the developer\'s word.',
    quickAnswerTop: {
      en: {
        question: 'Does Pajdo really keep your health data on the iPhone?',
        answer:
          'Per its website and privacy policy, yes: health data, the calculations and the question answering stay on the device, with no account. Only optional usage statistics and purchase status leave it. Nobody outside the developer can verify this in code, because the app is closed source.',
        bullets: [
          'Free on the [App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) for iPhone, iPad and Apple Watch, iOS or iPadOS 26.0 or later.',
          'Reads sleep, HRV, resting heart rate, breathing rate, wrist temperature, steps and workouts from Apple Health.',
          'Compares each number with your own usual range, not with population averages.',
          'Questions are answered by Apple Intelligence; without it the app falls back to prewritten replies.',
          'A wellness companion, not a medical device: it describes measurements and does not diagnose.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'What Is Pajdo?', anchor: 'what-is-pajdo' },
      { label: 'Get It', anchor: 'get-it' },
      { label: 'Pricing', anchor: 'pricing' },
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
            text: 'Pajdo is a closed-source Apple Health companion for iPhone and Apple Watch that says its question answering runs on the device through Apple Intelligence, with no account and a free tier.',
          },
          {
            type: 'plain-terms',
            text: 'You allow access to Apple Health, and the app shows how your sleep, heart and activity compare with your own usual range, then lets you ask questions about the numbers.',
          },
        ],
        items: [
          'Developer: Markovic Software, a sole-proprietor business in Croatia, which also makes Castmates and Lyonesse; no public source code.',
          'Maintenance: first release on 13 October 2026 and version 1.3.3 on 25 October 2026, so no stale-project warning applies.',
          'Track record: the App Store shows no ratings yet, so there is almost no public feedback.',
          'Requirements: iOS or iPadOS 26.0 or later; an Apple Watch is optional but adds sleep and heart data.',
          'Languages: the app follows the iPhone language and lists 17, including eight of this site\'s nine languages (not Arabic).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This review is based on the App Store listing, the developer\'s website, press page and privacy policy, checked on 26 October 2026. PromptQuorum has not installed, tested or benchmarked the app. Pajdo is a wellness app and this review is not medical advice.',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'What Is Pajdo?',
        content: [
          '**Pajdo is a wellness app built around a small green mascot that wears your Apple Health data as a mood.** The website lists eight moods, such as Steady, Tired, Running warm and Couch mode, each opening the chart behind it. The name is Croatian for "buddy".',
          'The developer behind Pajdo is Josip Markovic, who confirmed to PromptQuorum on 26 October 2026 that he also makes [Castmates](/power-local-llm/castmates-review), an offline roleplay app, and [Lyonesse](/power-local-llm/lyonesse-review), an on-device transcription app. The App Store shows the same seller name on all three apps, and the privacy policy names the operator as Markovic Software, obrt za usluge.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Get It',
        content: [
          '**Pajdo is installed from the App Store; no Android build, desktop build or source code is offered.** The links below are the ones the listing and the developer\'s site use.',
        ],
        columns: ['Platform', 'Where to get it'],
        rows: [
          { 'Platform': 'iPhone, iPad, Apple Watch', 'Where to get it': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) (iOS or iPadOS 26.0 or later, 91.8 MB)' },
          { 'Platform': 'Website', 'Where to get it': '[get-pajdo.app](https://get-pajdo.app)' },
          { 'Platform': 'Privacy policy', 'Where to get it': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/) (updated 25 October 2026)' },
          { 'Platform': 'Consumer health data', 'Where to get it': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data) (section)' },
          { 'Platform': 'Press kit', 'Where to get it': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: 'Version reviewed: 1.3.3, released on 25 October 2026 per the App Store listing; the first release was on 13 October 2026. The AI answers need a device that supports Apple Intelligence; on other devices the website says Pajdo uses prewritten replies.',
      },
      pricing: {
        id: 'pricing',
        title: 'Pricing',
        content: [
          '**Pajdo is free to download, and Pajdo Pro is sold as a monthly or yearly subscription or as a one-time lifetime purchase.** The listing says there is no free trial because the free version has no time limit. The prices below are from the US App Store as of 26 October 2026 and differ by storefront.',
        ],
        columns: ['Plan', 'What it includes', 'US price'],
        rows: [
          { 'Plan': 'Free', 'What it includes': 'All 8 moods, 30 days of trends, 5 questions a week', 'US price': '$0' },
          { 'Plan': 'Pro monthly', 'What it includes': 'Unlimited questions, full history, workout plans', 'US price': '$7.99/month' },
          { 'Plan': 'Pro yearly', 'What it includes': 'Same as monthly', 'US price': '$39.99/year' },
          { 'Plan': 'Pro lifetime', 'What it includes': 'Same as monthly, bought once', 'US price': '$69.99' },
        ],
        note: 'The German, Spanish and French stores show €8,99, €44,99 and €79,99; the Japanese store ¥1,300, ¥6,000 and ¥11,000; the Brazilian store R$ 49,90, R$ 249,90 and R$ 499,90; the Korean store ₩12,000, ₩66,000 and ₩110,000. Subscriptions renew until you cancel in your Apple Account.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'How to Get Started',
        content: [
          '**Setup follows the order described on the website and listing; PromptQuorum has not run these steps.**',
        ],
        numberedItems: [
          {
            title: 'Check your device',
            whyItMatters: 'Pajdo needs iOS or iPadOS 26.0 or later. For AI answers the iPhone must support Apple Intelligence; otherwise you get prewritten replies.',
          },
          {
            title: 'Install the app and allow Apple Health access',
            whyItMatters: 'The app reads only the Apple Health categories you permit, and the website says no account or sign-up is needed.',
          },
          {
            title: 'Wear the Apple Watch, if you have one',
            whyItMatters: 'The watch is optional, but sleep and heart data come from it. Pajdo compares your numbers with your own last 28 days, or 60 days for HRV.',
          },
          {
            title: 'Tap a mood to see the chart',
            whyItMatters: 'Each mood opens the data behind it, so you can check the finding yourself.',
          },
          {
            title: 'Ask a question',
            whyItMatters: 'The free plan allows 5 questions a week about your sleep, heart or workouts; Pro removes the limit.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Features Confirmed by the Sources',
        content: [
          '**Every item below comes from the App Store listing, the website or the privacy policy.**',
        ],
        items: [
          '**Moods and charts.** Eight moods summarize your data; each is tappable and shows the underlying chart.',
          '**Questions about your numbers.** You ask in plain words and get your own figures back; the website says plain code does the math and Apple Intelligence phrases the answer.',
          '**Daily briefing and weekly recap.** A short briefing is written on the device each morning, and notifications are limited to about two a day.',
          '**Logging.** Mood, energy, symptoms and mindful minutes can be logged from the iPhone, Apple Watch or a widget; mood, symptoms and mindful minutes can be written back to Apple Health.',
          '**Pro tools.** Workout plans that adapt to sleep and HRV and can be sent to the Apple Watch, race plans from 5K to marathon, 10-day experiments such as a caffeine curfew, correlations, a self-tagging journal and a PDF trends report for doctor visits.',
          '**Latest update (1.3.3).** The release notes add 1, 3 and 5 minute breathing breaks, easing a race plan for a few days and a sleep-rating prompt.',
          '**Cycle log.** An optional cycle log and calendar exist, and the listing says Pajdo never makes predictions from it.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Network Use',
        content: [
          '**The privacy policy, updated on 25 October 2026, says health data never leaves the phone and that none of your data goes "to us, to analytics, to iCloud or to an AI service in the cloud".** It adds that health data and what Pajdo learns are kept out of iCloud and device backups, so a new phone starts fresh, and that the iPhone and Apple Watch exchange data in encrypted form.',
          'What does leave the phone is limited. Usage analytics go to Mixpanel, stored in the EU, only if you consent and without health values or journal text. RevenueCat receives purchase status and an anonymous ID, Apple handles payments, and Vercel hosts the website. Analytics are kept for two years, and "Delete all data" in the settings removes what is on the device.',
          'The policy points to Croatia\'s data protection authority AZOP as a possible regulator and has a consumer health data section that cites Washington state. It does not say that the AI is Apple Intelligence by name; the website does.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The app is closed source, so none of these claims can be checked in code, and PromptQuorum has not audited network traffic. Anyone handling sensitive health data should verify the behavior on their own device.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use It',
        items: [
          '**Apple Watch owners who want their sleep and HRV explained.** The charts sit behind every finding.',
          '**People who prefer health data kept on the phone.** The developer says nothing is uploaded, with the caveats in the privacy section.',
          '**Runners who want recovery-based plans.** The race plans and workout suggestions are Pro features.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'What We Could Not Verify',
        items: [
          '**Hands-on quality.** PromptQuorum did not run the app, so the accuracy of the moods, the quality of the answers and battery use are not assessed.',
          '**The on-device AI claim.** The website names Apple Intelligence, the policy only says the AI runs on the device, and no model details are given; none of it can be checked in code.',
          '**Source code and license.** The app is closed source and no public repository was found.',
          '**Traffic.** PromptQuorum has not audited network traffic, so the analytics described in the policy are not independently verified.',
          '**Track record.** The app is two weeks old, has no App Store ratings yet and gives no support commitment.',
          '**Medical use.** The developer states it is not a medical device and never diagnoses; talk to a doctor about persistent changes.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competitors and Alternatives',
        content: [
          'The directory lists no other Apple Health app. These are the closest iPhone entries in the same personal-assistant category; none of them reads health data.',
        ],
        columns: ['App', 'Platforms', 'Price / license', 'Key difference'],
        rows: [
          { 'App': '[Nekoni](/power-local-llm/nekoni-review)', 'Platforms': 'macOS, Linux, iOS, web', 'Price / license': 'Free / MIT', 'Key difference': 'Open-source personal agent on your own computer, chatted with from an iPhone' },
          { 'App': '[On-Device AI Translator](/power-local-llm/on-device-ai-translator-review)', 'Platforms': 'iOS', 'Price / license': 'Free + in-app purchase / closed source', 'Key difference': 'Closed-source iPhone app that runs translation models on the device' },
          { 'App': '[MemoryAI](/power-local-llm/memoryai-review)', 'Platforms': 'iOS, Android', 'Price / license': 'Free / closed source', 'Key difference': 'Offline chat with editable memory, not tied to health data' },
        ],
        note: 'Competitor details change often; confirm each app\'s current price, license and platforms on its own listing.',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need an Apple Watch?',
            a: 'No. The website calls the watch optional; it adds sleep and heart data and enables the watch app, complications and workout plans sent to the wrist.',
          },
          {
            q: 'Does Pajdo work without Apple Intelligence?',
            a: 'Partly. Per the website, without Apple Intelligence the app uses prewritten replies instead of generated answers; the moods and charts are calculated by plain code.',
          },
          {
            q: 'Which languages does it support?',
            a: 'The website and listing name 17 languages, including English, German, French, Spanish, Portuguese, Japanese, Korean and Chinese; the app follows the language set on the iPhone. Arabic is not among them.',
          },
          {
            q: 'Is Pajdo a medical app?',
            a: 'No. The developer calls it a wellness companion that describes your measurements and never diagnoses, and the listing rates it 12+.',
          },
          {
            q: 'Is it from the same developer as Castmates and Lyonesse?',
            a: 'Yes, per the developer\'s email to PromptQuorum on 26 October 2026 and the identical App Store seller name. The website itself does not mention the other apps.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Pajdo is a free Apple Health companion that says its question answering runs on the iPhone through Apple Intelligence, with eight moods, charts behind every finding and Pro tools for workout planning. Against that, it is closed source, two weeks old, unrated, requires iOS 26, and the on-device claim cannot be checked. It suits Apple Watch owners who want their numbers explained and accept a young, closed app; readers who want open code can compare [Nekoni](/power-local-llm/nekoni-review), and readers looking for the same developer\'s other work can read the [Lyonesse review](/power-local-llm/lyonesse-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Pajdo on the App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — price, version, requirements, age rating and in-app purchases, checked 26 October 2026.',
          '[Pajdo website](https://get-pajdo.app) — features, plans, AI and privacy claims and languages, checked 26 October 2026.',
          '[Pajdo privacy policy](https://get-pajdo.app/privacy/) — operator, data handling, analytics and retention, updated 25 October 2026.',
          '[Pajdo press page](https://get-pajdo.app/press/) — developer location and press kit.',
          'Developer email to PromptQuorum, 26 October 2026 — confirms the same developer as Castmates and Lyonesse; not independently verified.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Lyonesse Review](/power-local-llm/lyonesse-review) — the same developer\'s on-device transcription and document chat app.',
          '[Castmates Review](/power-local-llm/castmates-review) — the same developer\'s offline AI character chat app.',
          '[MemoryAI Review](/power-local-llm/memoryai-review) — a free offline chat app with editable memory.',
          '[Best Local LLM Apps for iPhone in 2026](/power-local-llm/best-local-llm-apps-iphone-2026) — the broader iPhone roundup.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Pajdo Review: Apple Health Companion That Answers on the iPhone',
      description:
        'Pajdo review: a free, closed-source iPhone and Apple Watch app that explains Apple Health data and says its AI answers run on the device with Apple Intelligence. Pricing, privacy and what the sources do not confirm.',
      url: 'https://www.promptquorum.com/power-local-llm/pajdo-review',
      inLanguage: 'en',
      datePublished: '2026-10-26',
      dateModified: '2026-10-26',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Beginner',
      proficiencyLevel: 'Beginner',
      audience: { '@type': 'Audience', audienceType: 'iPhone and Apple Watch owners evaluating an on-device Apple Health companion' },
      about: [
        { '@type': 'Thing', name: 'Pajdo' },
        { '@type': 'Thing', name: 'On-device AI' },
        { '@type': 'Thing', name: 'Apple Intelligence' },
        { '@type': 'Thing', name: 'Apple Health' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.promptquorum.com/power-local-llm/pajdo-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Pajdo Review', item: 'https://www.promptquorum.com/power-local-llm/pajdo-review' },
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
    heroImage: '/images/pajdo-review-hero-de.webp',
    title: 'Pajdo-Rezension: Apple-Health-Begleiter, der auf dem iPhone antwortet',
    seoTitle: 'Pajdo-Rezension: Apple-Health-Begleiter auf dem iPhone',
    intro:
      'Pajdo: Health & Fitness Buddy ist eine App für iPhone, iPad und Apple Watch, die Apple-Health-Daten liest und Fragen dazu mit Apple Intelligence auf dem Gerät beantwortet. Sie wird unter dem Verkäufernamen Josip Markovic geführt, demselben Entwickler wie [Castmates](/de/power-local-llm/castmates-review) und [Lyonesse](/de/power-local-llm/lyonesse-review), und erschien erstmals am 13. Oktober 2026. Diese Rezension gibt den App-Store-Eintrag, die Website und die Datenschutzerklärung wieder, wie am 26. Oktober 2026 geprüft.',
    metaDescription:
      'Pajdo-Rezension: kostenlose App für iPhone und Apple Watch, die Apple-Health-Daten erklärt und Fragen auf dem Gerät beantwortet. Preise und Datenschutz.',
    twitterDescription:
      'Pajdo-Rezension: ein kostenloser, nicht quelloffener Apple-Health-Begleiter für iPhone und Apple Watch, dessen KI-Antworten laut Entwickler auf dem Gerät laufen. Preise, Datenschutz und was die Quellen nicht bestätigen.',
    audience:
      'iPhone- und Apple-Watch-Nutzer, die ihre Apple-Health-Daten von einer KI auf dem Gerät erklären lassen möchten und wissen müssen, was die App kostet, was das Telefon verlässt und was die Quellen nicht bestätigen.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Pajdo Rezension',
    targetKeywords: [
      'pajdo app test',
      'apple health ki begleiter iphone',
      'ki gesundheits-app auf dem gerät',
      'apple intelligence gesundheitsfragen',
      'apple watch schlaf hrv app',
      'private gesundheits-app ohne konto',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo (Version 1.3.3, Stand 26. Oktober 2026) ist eine kostenlose App für iPhone, iPad und Apple Watch, die Apple-Health-Daten in eine von acht Stimmungen übersetzt und laut Website Fragen dazu mit Apple Intelligence auf dem Gerät beantwortet.** Der kostenlose Tarif enthält 5 Fragen pro Woche; der Tarif Pro hebt dieses Limit auf und ergänzt Trainingsplanung und einen Bericht für Arztbesuche. Die App ist nicht quelloffen und erfordert iOS 26 oder neuer, die Aussage zur Ausführung auf dem Gerät beruht daher auf dem Wort des Entwicklers.',
    quickAnswerTop: {
      de: {
        question: 'Bleiben Ihre Gesundheitsdaten bei Pajdo wirklich auf dem iPhone?',
        answer:
          'Laut Website und Datenschutzerklärung ja: Gesundheitsdaten, Berechnungen und die Beantwortung von Fragen bleiben auf dem Gerät, ohne Konto. Nur optionale Nutzungsstatistiken und der Kaufstatus verlassen es. Außerhalb des Entwicklers kann das niemand im Code prüfen, weil die App nicht quelloffen ist.',
        bullets: [
          'Kostenlos im [App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) für iPhone, iPad und Apple Watch, ab iOS bzw. iPadOS 26.0.',
          'Liest Schlaf, HRV, Ruheherzfrequenz, Atemfrequenz, Handgelenktemperatur, Schritte und Workouts aus Apple Health.',
          'Vergleicht jeden Wert mit Ihrem eigenen üblichen Bereich, nicht mit Bevölkerungsdurchschnitten.',
          'Fragen beantwortet Apple Intelligence; ohne sie greift die App auf vorgefertigte Antworten zurück.',
          'Ein Wellness-Begleiter, kein Medizinprodukt: Er beschreibt Messwerte und stellt keine Diagnosen.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Was ist Pajdo?', anchor: 'what-is-pajdo' },
      { label: 'Bezugsquelle', anchor: 'get-it' },
      { label: 'Preise', anchor: 'pricing' },
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
            text: 'Pajdo ist ein nicht quelloffener Apple-Health-Begleiter für iPhone und Apple Watch, dessen Fragenbeantwortung laut Entwickler über Apple Intelligence auf dem Gerät läuft, ohne Konto und mit kostenloser Stufe.',
          },
          {
            type: 'plain-terms',
            text: 'Sie erlauben den Zugriff auf Apple Health, und die App zeigt, wie Ihr Schlaf, Ihr Herz und Ihre Aktivität im Vergleich zu Ihrem eigenen üblichen Bereich aussehen; danach können Sie Fragen zu den Werten stellen.',
          },
        ],
        items: [
          'Entwickler: Markovic Software, ein Einzelunternehmen in Kroatien, das auch Castmates und Lyonesse herstellt; kein öffentlicher Quellcode.',
          'Pflege: Die erste Veröffentlichung erfolgte am 13. Oktober 2026, Version 1.3.3 folgte am 25. Oktober 2026, daher gilt keine Warnung vor einem veralteten Projekt.',
          'Erfahrungswerte: Der App Store zeigt noch keine Bewertungen, es gibt also kaum öffentliche Rückmeldungen.',
          'Anforderungen: iOS bzw. iPadOS 26.0 oder neuer; eine Apple Watch ist optional, liefert aber Schlaf- und Herzdaten.',
          'Sprachen: Die App folgt der iPhone-Sprache und nennt 17, darunter acht der neun Sprachen dieser Website (ohne Arabisch).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Rezension stützt sich auf den App-Store-Eintrag sowie Website, Presseseite und Datenschutzerklärung des Entwicklers, geprüft am 26. Oktober 2026. PromptQuorum hat die App weder installiert noch getestet oder gemessen. Pajdo ist eine Wellness-App, und diese Rezension ist keine medizinische Beratung.',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'Was ist Pajdo?',
        content: [
          '**Pajdo ist eine Wellness-App rund um ein kleines grünes Maskottchen, das Ihre Apple-Health-Daten als Stimmung trägt.** Die Website nennt acht Stimmungen, etwa Steady, Tired, Running warm und Couch mode, die jeweils das zugehörige Diagramm öffnen. Der Name ist kroatisch für „Kumpel“.',
          'Der Entwickler hinter Pajdo ist Josip Markovic, der PromptQuorum am 26. Oktober 2026 bestätigt hat, dass er auch [Castmates](/de/power-local-llm/castmates-review), eine Offline-Rollenspiel-App, und [Lyonesse](/de/power-local-llm/lyonesse-review), eine Transkriptions-App auf dem Gerät, entwickelt. Der App Store zeigt bei allen drei Apps denselben Verkäufernamen, und die Datenschutzerklärung nennt als Betreiber Markovic Software, obrt za usluge.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Bezugsquelle',
        content: [
          '**Pajdo wird über den App Store installiert; ein Android-Build, ein Desktop-Build oder Quellcode werden nicht angeboten.** Die folgenden Links sind die, die Eintrag und Entwickler-Website verwenden.',
        ],
        columns: ['Plattform', 'Bezugsquelle'],
        rows: [
          { 'Plattform': 'iPhone, iPad, Apple Watch', 'Bezugsquelle': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) (ab iOS bzw. iPadOS 26.0, 91,8 MB)' },
          { 'Plattform': 'Website', 'Bezugsquelle': '[get-pajdo.app](https://get-pajdo.app)' },
          { 'Plattform': 'Datenschutzerklärung', 'Bezugsquelle': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/) (Stand 25. Oktober 2026)' },
          { 'Plattform': 'Verbrauchergesundheitsdaten', 'Bezugsquelle': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data) (Abschnitt)' },
          { 'Plattform': 'Pressekit', 'Bezugsquelle': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: 'Geprüfte Version: 1.3.3, laut App-Store-Eintrag am 25. Oktober 2026 veröffentlicht; die erste Veröffentlichung war am 13. Oktober 2026. Die KI-Antworten erfordern ein Gerät, das Apple Intelligence unterstützt; auf anderen Geräten nutzt Pajdo laut Website vorgefertigte Antworten.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preise',
        content: [
          '**Pajdo ist kostenlos ladbar, und Pajdo Pro wird als Monats- oder Jahresabo oder als einmaliger Lifetime-Kauf verkauft.** Laut Eintrag gibt es keine kostenlose Testphase, weil die kostenlose Version zeitlich nicht begrenzt ist. Die Preise stammen aus dem deutschen App Store (Stand 26. Oktober 2026) und unterscheiden sich je nach Storefront.',
        ],
        columns: ['Tarif', 'Enthalten', 'Preis (DE-Store)'],
        rows: [
          { 'Tarif': 'Kostenlos', 'Enthalten': 'Alle 8 Stimmungen, 30 Tage Trends, 5 Fragen pro Woche', 'Preis (DE-Store)': '0 €' },
          { 'Tarif': 'Pro monatlich', 'Enthalten': 'Unbegrenzt Fragen, voller Verlauf, Trainingspläne', 'Preis (DE-Store)': '8,99 €/Monat' },
          { 'Tarif': 'Pro jährlich', 'Enthalten': 'Wie monatlich', 'Preis (DE-Store)': '44,99 €/Jahr' },
          { 'Tarif': 'Pro Lifetime', 'Enthalten': 'Wie monatlich, einmalig gekauft', 'Preis (DE-Store)': '79,99 €' },
        ],
        note: 'Der US-Store zeigt 7,99 $, 39,99 $ und 69,99 $; der japanische Store 1.300 ¥, 6.000 ¥ und 11.000 ¥; der brasilianische Store R$ 49,90, R$ 249,90 und R$ 499,90; der koreanische Store 12.000 ₩, 66.000 ₩ und 110.000 ₩. Abos verlängern sich, bis Sie in Ihrem Apple-Account kündigen.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'So gelingt der Einstieg',
        content: [
          '**Die Einrichtung folgt der auf Website und Eintrag beschriebenen Reihenfolge; PromptQuorum hat diese Schritte nicht ausgeführt.**',
        ],
        numberedItems: [
          {
            title: 'Gerät prüfen',
            whyItMatters: 'Pajdo erfordert iOS bzw. iPadOS 26.0 oder neuer. Für KI-Antworten muss das iPhone Apple Intelligence unterstützen; andernfalls erhalten Sie vorgefertigte Antworten.',
          },
          {
            title: 'App installieren und Apple-Health-Zugriff erlauben',
            whyItMatters: 'Die App liest nur die Apple-Health-Kategorien, die Sie freigeben, und laut Website sind weder Konto noch Registrierung nötig.',
          },
          {
            title: 'Apple Watch tragen, falls vorhanden',
            whyItMatters: 'Die Uhr ist optional, doch Schlaf- und Herzdaten stammen von ihr. Pajdo vergleicht Ihre Werte mit Ihren eigenen letzten 28 Tagen, bei HRV mit 60 Tagen.',
          },
          {
            title: 'Auf eine Stimmung tippen, um das Diagramm zu sehen',
            whyItMatters: 'Jede Stimmung öffnet die Daten dahinter, sodass Sie die Aussage selbst prüfen können.',
          },
          {
            title: 'Eine Frage stellen',
            whyItMatters: 'Die kostenlose Stufe erlaubt 5 Fragen pro Woche zu Schlaf, Herz oder Workouts; Pro hebt das Limit auf.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Von den Quellen bestätigte Funktionen',
        content: [
          '**Jeder der folgenden Punkte stammt aus dem App-Store-Eintrag, der Website oder der Datenschutzerklärung.**',
        ],
        items: [
          '**Stimmungen und Diagramme.** Acht Stimmungen fassen Ihre Daten zusammen; jede lässt sich antippen und zeigt das zugrunde liegende Diagramm.',
          '**Fragen zu Ihren Werten.** Sie fragen in einfachen Worten und erhalten Ihre eigenen Zahlen zurück; laut Website rechnet gewöhnlicher Code, und Apple Intelligence formuliert die Antwort.',
          '**Tagesbriefing und Wochenrückblick.** Ein kurzes Briefing wird jeden Morgen auf dem Gerät verfasst, und Benachrichtigungen sind auf etwa zwei pro Tag begrenzt.',
          '**Protokollieren.** Stimmung, Energie, Symptome und achtsame Minuten lassen sich per iPhone, Apple Watch oder Widget erfassen; Stimmung, Symptome und achtsame Minuten können zurück nach Apple Health geschrieben werden.',
          '**Pro-Werkzeuge.** Trainingspläne, die sich an Schlaf und HRV anpassen und an die Apple Watch gesendet werden können, Wettkampfpläne von 5 km bis Marathon, 10-Tage-Experimente wie eine Koffein-Sperrzeit, Korrelationen, ein sich selbst verschlagwortendes Tagebuch und ein PDF-Trendbericht für Arztbesuche.',
          '**Neuestes Update (1.3.3).** Die Release Notes ergänzen Atempausen von 1, 3 und 5 Minuten, das Abschwächen eines Wettkampfplans für einige Tage und eine Aufforderung zur Schlafbewertung.',
          '**Zyklusprotokoll.** Ein optionales Zyklusprotokoll samt Kalender ist vorhanden, und laut Eintrag erstellt Pajdo daraus nie Prognosen.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Netzwerknutzung',
        content: [
          '**Die Datenschutzerklärung (Stand 25. Oktober 2026) sagt, Gesundheitsdaten verließen das Telefon nie und keine Ihrer Daten gingen „an uns, an Analysedienste, an iCloud oder an einen KI-Dienst in der Cloud“.** Sie ergänzt, Gesundheitsdaten und das, was Pajdo lernt, blieben außerhalb von iCloud und Geräte-Backups, sodass ein neues Telefon bei null beginnt, und iPhone und Apple Watch tauschten Daten verschlüsselt aus.',
          'Was das Telefon verlässt, ist begrenzt. Nutzungsanalysen gehen nur mit Ihrer Einwilligung an Mixpanel, gespeichert in der EU, und ohne Gesundheitswerte oder Tagebuchtext. RevenueCat erhält den Kaufstatus und eine anonyme ID, Apple wickelt Zahlungen ab, und Vercel hostet die Website. Analysedaten werden zwei Jahre aufbewahrt, und „Delete all data“ in den Einstellungen entfernt, was auf dem Gerät liegt.',
          'Die Erklärung verweist auf die kroatische Datenschutzbehörde AZOP als mögliche Aufsichtsbehörde und enthält einen Abschnitt zu Verbrauchergesundheitsdaten, der den US-Bundesstaat Washington nennt. Dass die KI Apple Intelligence ist, sagt sie nicht namentlich; die Website tut es.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die App ist nicht quelloffen, daher lassen sich diese Angaben nicht im Code prüfen, und PromptQuorum hat den Netzwerkverkehr nicht geprüft. Wer sensible Gesundheitsdaten verarbeitet, sollte das Verhalten auf dem eigenen Gerät prüfen.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Für wen sich die App eignet',
        items: [
          '**Apple-Watch-Besitzer, die ihren Schlaf und ihre HRV erklärt haben möchten.** Hinter jeder Aussage steht ein Diagramm.',
          '**Menschen, die Gesundheitsdaten lieber auf dem Telefon behalten.** Laut Entwickler wird nichts hochgeladen, mit den Einschränkungen im Datenschutzabschnitt.',
          '**Läufer, die erholungsbasierte Pläne wünschen.** Die Wettkampfpläne und Trainingsvorschläge sind Pro-Funktionen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Was wir nicht überprüfen konnten',
        items: [
          '**Qualität im Praxistest.** PromptQuorum hat die App nicht ausgeführt; die Treffsicherheit der Stimmungen, die Qualität der Antworten und der Akkuverbrauch sind nicht bewertet.',
          '**Die Aussage zur KI auf dem Gerät.** Die Website nennt Apple Intelligence, die Erklärung sagt nur, die KI laufe auf dem Gerät, und Modelldetails fehlen; nichts davon lässt sich im Code prüfen.',
          '**Quellcode und Lizenz.** Die App ist nicht quelloffen, ein öffentliches Repository wurde nicht gefunden.',
          '**Datenverkehr.** PromptQuorum hat den Netzwerkverkehr nicht geprüft; die in der Erklärung beschriebenen Analysen sind daher nicht unabhängig verifiziert.',
          '**Erfahrungswerte.** Die App ist zwei Wochen alt, hat noch keine App-Store-Bewertungen und macht keine Support-Zusage.',
          '**Medizinische Nutzung.** Der Entwickler erklärt, sie sei kein Medizinprodukt und stelle nie Diagnosen; sprechen Sie dauerhafte Veränderungen mit einer Ärztin oder einem Arzt an.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Wettbewerber und Alternativen',
        content: [
          'Das Verzeichnis führt keine weitere Apple-Health-App. Die folgenden Einträge sind die nächstliegenden iPhone-Angebote derselben Kategorie persönlicher Assistenten; keiner davon liest Gesundheitsdaten.',
        ],
        columns: ['App', 'Plattformen', 'Preis / Lizenz', 'Hauptunterschied'],
        rows: [
          { 'App': '[Nekoni](/de/power-local-llm/nekoni-review)', 'Plattformen': 'macOS, Linux, iOS, Web', 'Preis / Lizenz': 'Kostenlos / MIT', 'Hauptunterschied': 'Quelloffener persönlicher Agent auf dem eigenen Computer, mit dem Sie vom iPhone aus chatten' },
          { 'App': '[On-Device AI Translator](/de/power-local-llm/on-device-ai-translator-review)', 'Plattformen': 'iOS', 'Preis / Lizenz': 'Kostenlos + In-App-Kauf / nicht quelloffen', 'Hauptunterschied': 'Nicht quelloffene iPhone-App, die Übersetzungsmodelle auf dem Gerät ausführt' },
          { 'App': '[MemoryAI](/de/power-local-llm/memoryai-review)', 'Plattformen': 'iOS, Android', 'Preis / Lizenz': 'Kostenlos / nicht quelloffen', 'Hauptunterschied': 'Offline-Chat mit editierbarem Gedächtnis, nicht an Gesundheitsdaten gebunden' },
        ],
        note: 'Details der Wettbewerber ändern sich oft; prüfen Sie Preis, Lizenz und Plattformen im jeweiligen Eintrag.',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich eine Apple Watch?',
            a: 'Nein. Die Website nennt die Uhr optional; sie liefert zusätzlich Schlaf- und Herzdaten und ermöglicht die Watch-App, Komplikationen und an das Handgelenk gesendete Trainingspläne.',
          },
          {
            q: 'Funktioniert Pajdo ohne Apple Intelligence?',
            a: 'Teilweise. Laut Website nutzt die App ohne Apple Intelligence vorgefertigte Antworten statt generierter; die Stimmungen und Diagramme berechnet gewöhnlicher Code.',
          },
          {
            q: 'Welche Sprachen werden unterstützt?',
            a: 'Website und Eintrag nennen 17 Sprachen, darunter Englisch, Deutsch, Französisch, Spanisch, Portugiesisch, Japanisch, Koreanisch und Chinesisch; die App folgt der auf dem iPhone eingestellten Sprache. Arabisch gehört nicht dazu.',
          },
          {
            q: 'Ist Pajdo eine medizinische App?',
            a: 'Nein. Der Entwickler nennt sie einen Wellness-Begleiter, der Ihre Messwerte beschreibt und nie diagnostiziert, und der Eintrag stuft sie ab 12 ein.',
          },
          {
            q: 'Stammt sie vom selben Entwickler wie Castmates und Lyonesse?',
            a: 'Ja, laut der E-Mail des Entwicklers an PromptQuorum vom 26. Oktober 2026 und dem identischen Verkäufernamen im App Store. Die Website selbst erwähnt die anderen Apps nicht.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Pajdo ist ein kostenloser Apple-Health-Begleiter, der laut Entwickler Fragen über Apple Intelligence auf dem iPhone beantwortet, mit acht Stimmungen, Diagrammen hinter jeder Aussage und Pro-Werkzeugen für die Trainingsplanung. Dagegen steht: Die App ist nicht quelloffen, zwei Wochen alt, noch unbewertet, erfordert iOS 26, und die Aussage zur Ausführung auf dem Gerät lässt sich nicht prüfen. Sie eignet sich für Apple-Watch-Besitzer, die ihre Werte erklärt haben möchten und eine junge, geschlossene App akzeptieren; wer offenen Code möchte, kann [Nekoni](/de/power-local-llm/nekoni-review) vergleichen, und wer die übrigen Apps desselben Entwicklers sucht, findet sie in der [Lyonesse-Rezension](/de/power-local-llm/lyonesse-review).',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Pajdo im App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — Preis, Version, Anforderungen, Altersfreigabe und In-App-Käufe, geprüft am 26. Oktober 2026.',
          '[Pajdo-Website](https://get-pajdo.app) — Funktionen, Tarife, Angaben zu KI und Datenschutz sowie Sprachen, geprüft am 26. Oktober 2026.',
          '[Pajdo-Datenschutzerklärung](https://get-pajdo.app/privacy/) — Betreiber, Datenverarbeitung, Analysen und Aufbewahrung, Stand 25. Oktober 2026.',
          '[Pajdo-Presseseite](https://get-pajdo.app/press/) — Standort des Entwicklers und Pressekit.',
          'E-Mail des Entwicklers an PromptQuorum, 26. Oktober 2026 — bestätigt denselben Entwickler wie bei Castmates und Lyonesse; nicht unabhängig verifiziert.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lyonesse-Rezension](/de/power-local-llm/lyonesse-review) — die Transkriptions- und Dokumenten-Chat-App auf dem Gerät vom selben Entwickler.',
          '[Castmates-Rezension](/de/power-local-llm/castmates-review) — die Offline-KI-Charakterchat-App vom selben Entwickler.',
          '[MemoryAI-Rezension](/de/power-local-llm/memoryai-review) — eine kostenlose Offline-Chat-App mit editierbarem Gedächtnis.',
          '[Die besten lokalen LLM-Apps für iPhone 2026](/de/power-local-llm/best-local-llm-apps-iphone-2026) — die breitere Übersicht für das iPhone.',
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
    heroImage: '/images/pajdo-review-hero-es.webp',
    title: 'Reseña de Pajdo: compañero de Apple Health que responde en el iPhone',
    seoTitle: 'Reseña de Pajdo: compañero de Apple Health en el iPhone',
    intro:
      'Pajdo: Health & Fitness Buddy es una app para iPhone, iPad y Apple Watch que lee los datos de Apple Health y responde preguntas sobre ellos con Apple Intelligence en el dispositivo. Figura con el nombre de vendedor Josip Markovic, el mismo desarrollador de [Castmates](/es/power-local-llm/castmates-review) y [Lyonesse](/es/power-local-llm/lyonesse-review), y se lanzó por primera vez el 13 de octubre de 2026. Esta reseña refleja su ficha del App Store, su sitio web y su política de privacidad tal como se comprobaron el 26 de octubre de 2026.',
    metaDescription:
      'Reseña de Pajdo: app gratis para iPhone y Apple Watch que explica los datos de Apple Health y responde con Apple Intelligence en el dispositivo.',
    twitterDescription:
      'Reseña de Pajdo: un compañero de Apple Health gratuito y de código cerrado para iPhone y Apple Watch que dice ejecutar sus respuestas de IA en el dispositivo. Precios, privacidad y lo que las fuentes no confirman.',
    audience:
      'Personas con iPhone y Apple Watch que quieren que una IA en el dispositivo les explique sus datos de Apple Health y necesitan saber cuánto cuesta, qué sale del teléfono y qué no confirman las fuentes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Pajdo',
    targetKeywords: [
      'reseña pajdo app',
      'compañero ia apple health iphone',
      'app de salud con ia en el dispositivo',
      'preguntas de salud con apple intelligence',
      'app de sueño y hrv para apple watch',
      'app de salud privada sin cuenta',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo (versión 1.3.3 a 26 de octubre de 2026) es una app gratuita para iPhone, iPad y Apple Watch que convierte los datos de Apple Health en uno de ocho estados de ánimo y, según su sitio web, responde tus preguntas sobre esos datos con Apple Intelligence en el dispositivo.** El plan gratuito incluye 5 preguntas por semana; el plan Pro elimina ese límite y añade planificación de entrenamientos y un informe para la consulta médica. La app es de código cerrado y requiere iOS 26 o posterior, así que la afirmación sobre el funcionamiento en el dispositivo se apoya en la palabra del desarrollador.',
    quickAnswerTop: {
      es: {
        question: '¿Pajdo mantiene de verdad tus datos de salud en el iPhone?',
        answer:
          'Según su sitio web y su política de privacidad, sí: los datos de salud, los cálculos y las respuestas a las preguntas se quedan en el dispositivo, sin cuenta. Solo salen las estadísticas de uso opcionales y el estado de la compra. Nadie ajeno al desarrollador puede comprobarlo en el código, porque la app es de código cerrado.',
        bullets: [
          'Gratis en el [App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) para iPhone, iPad y Apple Watch, con iOS o iPadOS 26.0 o posterior.',
          'Lee de Apple Health el sueño, la HRV, la frecuencia cardíaca en reposo, la frecuencia respiratoria, la temperatura de la muñeca, los pasos y los entrenamientos.',
          'Compara cada cifra con tu propio rango habitual, no con promedios de la población.',
          'Las preguntas las responde Apple Intelligence; sin ella, la app recurre a respuestas predefinidas.',
          'Es un compañero de bienestar, no un producto sanitario: describe mediciones y no diagnostica.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: '¿Qué es Pajdo?', anchor: 'what-is-pajdo' },
      { label: 'Dónde conseguirla', anchor: 'get-it' },
      { label: 'Precios', anchor: 'pricing' },
      { label: 'Cómo empezar', anchor: 'getting-started' },
      { label: 'Funciones confirmadas por las fuentes', anchor: 'key-features' },
      { label: 'Privacidad y uso de red', anchor: 'privacy' },
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
            text: 'Pajdo es un compañero de Apple Health de código cerrado para iPhone y Apple Watch que dice ejecutar las respuestas a tus preguntas en el dispositivo mediante Apple Intelligence, sin cuenta y con un nivel gratuito.',
          },
          {
            type: 'plain-terms',
            text: 'Das acceso a Apple Health y la app muestra cómo se comparan tu sueño, tu corazón y tu actividad con tu propio rango habitual; después puedes hacer preguntas sobre las cifras.',
          },
        ],
        items: [
          'Desarrollador: Markovic Software, un negocio de autónomo en Croacia, que también hace Castmates y Lyonesse; sin código fuente público.',
          'Mantenimiento: primer lanzamiento el 13 de octubre de 2026 y versión 1.3.3 el 25 de octubre de 2026, así que no se aplica ninguna advertencia de proyecto abandonado.',
          'Historial: el App Store todavía no muestra valoraciones, así que casi no hay opiniones públicas.',
          'Requisitos: iOS o iPadOS 26.0 o posterior; un Apple Watch es opcional, pero aporta datos de sueño y de corazón.',
          'Idiomas: la app sigue el idioma del iPhone y enumera 17, entre ellos ocho de los nueve idiomas de este sitio (no el árabe).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta reseña se basa en la ficha del App Store, el sitio web, la página de prensa y la política de privacidad del desarrollador, comprobados el 26 de octubre de 2026. PromptQuorum no ha instalado, probado ni medido la app. Pajdo es una app de bienestar y esta reseña no es asesoramiento médico.',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: '¿Qué es Pajdo?',
        content: [
          '**Pajdo es una app de bienestar construida en torno a una pequeña mascota verde que lleva tus datos de Apple Health puestos como un estado de ánimo.** El sitio web enumera ocho estados, como Steady, Tired, Running warm y Couch mode, y cada uno abre el gráfico que hay detrás. El nombre significa «colega» en croata.',
          'El desarrollador de Pajdo es Josip Markovic, que confirmó a PromptQuorum el 26 de octubre de 2026 que también hace [Castmates](/es/power-local-llm/castmates-review), una app de rol sin conexión, y [Lyonesse](/es/power-local-llm/lyonesse-review), una app de transcripción en el dispositivo. El App Store muestra el mismo nombre de vendedor en las tres apps, y la política de privacidad nombra al operador como Markovic Software, obrt za usluge.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Dónde conseguirla',
        content: [
          '**Pajdo se instala desde el App Store; no se ofrece versión para Android, para escritorio ni código fuente.** Los enlaces de abajo son los que usan la ficha y el sitio del desarrollador.',
        ],
        columns: ['Plataforma', 'Dónde conseguirla'],
        rows: [
          { 'Plataforma': 'iPhone, iPad, Apple Watch', 'Dónde conseguirla': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) (iOS o iPadOS 26.0 o posterior, 91.8 MB)' },
          { 'Plataforma': 'Sitio web', 'Dónde conseguirla': '[get-pajdo.app](https://get-pajdo.app)' },
          { 'Plataforma': 'Política de privacidad', 'Dónde conseguirla': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/) (actualizada el 25 de octubre de 2026)' },
          { 'Plataforma': 'Datos de salud del consumidor', 'Dónde conseguirla': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data) (sección)' },
          { 'Plataforma': 'Kit de prensa', 'Dónde conseguirla': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: 'Versión revisada: 1.3.3, publicada el 25 de octubre de 2026 según la ficha del App Store; el primer lanzamiento fue el 13 de octubre de 2026. Las respuestas de IA requieren un dispositivo compatible con Apple Intelligence; en otros dispositivos, según el sitio web, Pajdo usa respuestas predefinidas.',
      },
      pricing: {
        id: 'pricing',
        title: 'Precios',
        content: [
          '**Pajdo se descarga gratis, y Pajdo Pro se vende como suscripción mensual o anual o como compra única de por vida.** La ficha dice que no hay prueba gratuita porque la versión gratuita no tiene límite de tiempo. Los precios de abajo son del App Store de España a 26 de octubre de 2026 y varían según la tienda.',
        ],
        columns: ['Plan', 'Qué incluye', 'Precio (tienda ES)'],
        rows: [
          { 'Plan': 'Gratis', 'Qué incluye': 'Los 8 estados, 30 días de tendencias, 5 preguntas por semana', 'Precio (tienda ES)': '0 €' },
          { 'Plan': 'Pro mensual', 'Qué incluye': 'Preguntas ilimitadas, historial completo, planes de entrenamiento', 'Precio (tienda ES)': '8,99 €/mes' },
          { 'Plan': 'Pro anual', 'Qué incluye': 'Igual que el mensual', 'Precio (tienda ES)': '44,99 €/año' },
          { 'Plan': 'Pro de por vida', 'Qué incluye': 'Igual que el mensual, pago único', 'Precio (tienda ES)': '79,99 €' },
        ],
        note: 'La tienda de EE. UU. muestra 7,99 $, 39,99 $ y 69,99 $; las de Alemania y Francia, los mismos importes en euros que la de España; la de Japón, ¥1,300, ¥6,000 y ¥11,000; la de Brasil, R$ 49,90, R$ 249,90 y R$ 499,90; la de Corea, ₩12,000, ₩66,000 y ₩110,000. Las suscripciones se renuevan hasta que las canceles en tu cuenta de Apple.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración sigue el orden descrito en el sitio web y la ficha; PromptQuorum no ha ejecutado estos pasos.**',
        ],
        numberedItems: [
          {
            title: 'Comprueba tu dispositivo',
            whyItMatters: 'Pajdo necesita iOS o iPadOS 26.0 o posterior. Para las respuestas de IA, el iPhone debe ser compatible con Apple Intelligence; de lo contrario, obtienes respuestas predefinidas.',
          },
          {
            title: 'Instala la app y permite el acceso a Apple Health',
            whyItMatters: 'La app lee solo las categorías de Apple Health que permites y, según el sitio web, no hace falta cuenta ni registro.',
          },
          {
            title: 'Usa el Apple Watch, si tienes uno',
            whyItMatters: 'El reloj es opcional, pero los datos de sueño y de corazón vienen de él. Pajdo compara tus cifras con tus propios últimos 28 días, o 60 días en el caso de la HRV.',
          },
          {
            title: 'Toca un estado de ánimo para ver el gráfico',
            whyItMatters: 'Cada estado abre los datos que hay detrás, para que puedas comprobar el hallazgo tú mismo.',
          },
          {
            title: 'Haz una pregunta',
            whyItMatters: 'El plan gratuito permite 5 preguntas por semana sobre tu sueño, tu corazón o tus entrenamientos; Pro elimina el límite.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Funciones confirmadas por las fuentes',
        content: [
          '**Cada punto de abajo procede de la ficha del App Store, del sitio web o de la política de privacidad.**',
        ],
        items: [
          '**Estados de ánimo y gráficos.** Ocho estados resumen tus datos; cada uno se puede tocar y muestra el gráfico subyacente.',
          '**Preguntas sobre tus cifras.** Preguntas con tus propias palabras y recibes tus propias cifras; según el sitio web, el cálculo lo hace código simple y Apple Intelligence redacta la respuesta.',
          '**Resumen diario y repaso semanal.** Cada mañana se redacta un resumen breve en el dispositivo, y las notificaciones se limitan a unas dos al día.',
          '**Registros.** El ánimo, la energía, los síntomas y los minutos de atención plena se pueden registrar desde el iPhone, el Apple Watch o un widget; el ánimo, los síntomas y los minutos de atención plena pueden escribirse de vuelta en Apple Health.',
          '**Herramientas Pro.** Planes de entrenamiento que se adaptan al sueño y a la HRV y se pueden enviar al Apple Watch, planes de carrera de 5K a maratón, experimentos de 10 días como un toque de queda de cafeína, correlaciones, un diario que se etiqueta solo y un informe de tendencias en PDF para las consultas médicas.',
          '**Última actualización (1.3.3).** Las notas de la versión añaden pausas de respiración de 1, 3 y 5 minutos, la posibilidad de suavizar un plan de carrera durante unos días y un aviso para valorar el sueño.',
          '**Registro del ciclo.** Existe un registro y calendario del ciclo opcional, y la ficha dice que Pajdo nunca hace predicciones a partir de él.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y uso de red',
        content: [
          '**La política de privacidad, actualizada el 25 de octubre de 2026, dice que los datos de salud nunca salen del teléfono y que ninguno de tus datos va «a nosotros, a analítica, a iCloud ni a un servicio de IA en la nube».** Añade que los datos de salud y lo que Pajdo aprende se mantienen fuera de iCloud y de las copias de seguridad del dispositivo, de modo que un teléfono nuevo empieza de cero, y que el iPhone y el Apple Watch intercambian datos cifrados.',
          'Lo que sí sale del teléfono es limitado. La analítica de uso va a Mixpanel, almacenada en la UE, solo si das tu consentimiento y sin valores de salud ni texto del diario. RevenueCat recibe el estado de la compra y un ID anónimo, Apple gestiona los pagos y Vercel aloja el sitio web. La analítica se conserva dos años, y «Delete all data» en los ajustes borra lo que hay en el dispositivo.',
          'La política señala a la autoridad croata de protección de datos AZOP como posible regulador y tiene una sección de datos de salud del consumidor que cita el estado de Washington. No dice por su nombre que la IA sea Apple Intelligence; el sitio web sí.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La app es de código cerrado, así que ninguna de estas afirmaciones puede comprobarse en el código, y PromptQuorum no ha auditado el tráfico de red. Quien maneje datos de salud sensibles debería verificar el comportamiento en su propio dispositivo.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quién es',
        items: [
          '**Personas con Apple Watch que quieren que les expliquen su sueño y su HRV.** Detrás de cada hallazgo hay un gráfico.',
          '**Quienes prefieren que los datos de salud se queden en el teléfono.** El desarrollador dice que no se sube nada, con las salvedades de la sección de privacidad.',
          '**Corredores que quieren planes basados en la recuperación.** Los planes de carrera y las sugerencias de entrenamiento son funciones Pro.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Lo que no pudimos verificar',
        items: [
          '**Calidad en el uso real.** PromptQuorum no ejecutó la app, así que no se evalúan la precisión de los estados de ánimo, la calidad de las respuestas ni el uso de batería.',
          '**La afirmación sobre la IA en el dispositivo.** El sitio web nombra Apple Intelligence, la política solo dice que la IA se ejecuta en el dispositivo y no se dan detalles del modelo; nada de esto puede comprobarse en el código.',
          '**Código fuente y licencia.** La app es de código cerrado y no se encontró ningún repositorio público.',
          '**Tráfico.** PromptQuorum no ha auditado el tráfico de red, por lo que la analítica descrita en la política no está verificada de forma independiente.',
          '**Historial.** La app tiene dos semanas, todavía no tiene valoraciones en el App Store y no da ningún compromiso de soporte.',
          '**Uso médico.** El desarrollador afirma que no es un producto sanitario y que nunca diagnostica; habla con un médico si los cambios persisten.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Competidores y alternativas',
        content: [
          'El directorio no incluye ninguna otra app de Apple Health. Estas son las entradas de iPhone más cercanas de la misma categoría de asistentes personales; ninguna lee datos de salud.',
        ],
        columns: ['App', 'Plataformas', 'Precio / licencia', 'Diferencia clave'],
        rows: [
          { 'App': '[Nekoni](/es/power-local-llm/nekoni-review)', 'Plataformas': 'macOS, Linux, iOS, web', 'Precio / licencia': 'Gratis / MIT', 'Diferencia clave': 'Agente personal de código abierto en tu propio ordenador, al que chateas desde un iPhone' },
          { 'App': '[On-Device AI Translator](/es/power-local-llm/on-device-ai-translator-review)', 'Plataformas': 'iOS', 'Precio / licencia': 'Gratis + compra en la app / código cerrado', 'Diferencia clave': 'App de iPhone de código cerrado que ejecuta modelos de traducción en el dispositivo' },
          { 'App': '[MemoryAI](/es/power-local-llm/memoryai-review)', 'Plataformas': 'iOS, Android', 'Precio / licencia': 'Gratis / código cerrado', 'Diferencia clave': 'Chat sin conexión con memoria editable, sin relación con datos de salud' },
        ],
        note: 'Los detalles de los competidores cambian a menudo; confirma el precio, la licencia y las plataformas actuales en la ficha de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Necesito un Apple Watch?',
            a: 'No. El sitio web lo llama opcional; aporta datos de sueño y de corazón y habilita la app del reloj, las complicaciones y los planes de entrenamiento enviados a la muñeca.',
          },
          {
            q: '¿Pajdo funciona sin Apple Intelligence?',
            a: 'En parte. Según el sitio web, sin Apple Intelligence la app usa respuestas predefinidas en lugar de respuestas generadas; los estados de ánimo y los gráficos los calcula código simple.',
          },
          {
            q: '¿Qué idiomas admite?',
            a: 'El sitio web y la ficha nombran 17 idiomas, entre ellos inglés, alemán, francés, español, portugués, japonés, coreano y chino; la app sigue el idioma configurado en el iPhone. El árabe no está entre ellos.',
          },
          {
            q: '¿Pajdo es una app médica?',
            a: 'No. El desarrollador la describe como un compañero de bienestar que describe tus mediciones y nunca diagnostica, y la ficha la clasifica para mayores de 12.',
          },
          {
            q: '¿Es del mismo desarrollador que Castmates y Lyonesse?',
            a: 'Sí, según el correo del desarrollador a PromptQuorum del 26 de octubre de 2026 y el mismo nombre de vendedor en el App Store. El propio sitio web no menciona las otras apps.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Pajdo es un compañero de Apple Health gratuito que dice ejecutar las respuestas a tus preguntas en el iPhone mediante Apple Intelligence, con ocho estados de ánimo, gráficos detrás de cada hallazgo y herramientas Pro para planificar entrenamientos. En contra: es de código cerrado, tiene dos semanas, no tiene valoraciones, requiere iOS 26 y la afirmación sobre el funcionamiento en el dispositivo no puede comprobarse. Encaja con quienes tienen Apple Watch y quieren que les expliquen sus cifras y aceptan una app joven y cerrada; quien quiera código abierto puede comparar [Nekoni](/es/power-local-llm/nekoni-review), y quien busque el resto del trabajo del mismo desarrollador puede leer la [reseña de Lyonesse](/es/power-local-llm/lyonesse-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Pajdo en el App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — precio, versión, requisitos, clasificación por edad y compras dentro de la app, comprobados el 26 de octubre de 2026.',
          '[Sitio web de Pajdo](https://get-pajdo.app) — funciones, planes, afirmaciones sobre IA y privacidad e idiomas, comprobados el 26 de octubre de 2026.',
          '[Política de privacidad de Pajdo](https://get-pajdo.app/privacy/) — operador, tratamiento de datos, analítica y conservación, actualizada el 25 de octubre de 2026.',
          '[Página de prensa de Pajdo](https://get-pajdo.app/press/) — ubicación del desarrollador y kit de prensa.',
          'Correo del desarrollador a PromptQuorum, 26 de octubre de 2026 — confirma que es el mismo desarrollador que Castmates y Lyonesse; no verificado de forma independiente.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Lyonesse](/es/power-local-llm/lyonesse-review) — la app de transcripción en el dispositivo y chat de documentos del mismo desarrollador.',
          '[Reseña de Castmates](/es/power-local-llm/castmates-review) — la app de chat de personajes con IA sin conexión del mismo desarrollador.',
          '[Reseña de MemoryAI](/es/power-local-llm/memoryai-review) — una app de chat sin conexión gratuita con memoria editable.',
          '[Las mejores apps de LLM local para iPhone en 2026](/es/power-local-llm/best-local-llm-apps-iphone-2026) — el resumen más amplio para iPhone.',
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
    heroImage: '/images/pajdo-review-hero-fr.webp',
    title: 'Test de Pajdo : compagnon Apple Health qui répond sur l\'iPhone',
    seoTitle: 'Test de Pajdo : compagnon Apple Health sur l\'iPhone',
    intro:
      'Pajdo: Health & Fitness Buddy est une application pour iPhone, iPad et Apple Watch qui lit les données d\'Apple Health et répond aux questions à leur sujet avec Apple Intelligence, sur l\'appareil. Elle est publiée sous le nom de vendeur Josip Markovic, le même développeur que [Castmates](/fr/power-local-llm/castmates-review) et [Lyonesse](/fr/power-local-llm/lyonesse-review), et est sortie pour la première fois le 13 octobre 2026. Ce test reflète sa fiche App Store, son site web et sa politique de confidentialité tels que vérifiés le 26 octobre 2026.',
    metaDescription:
      'Test de Pajdo : appli gratuite pour iPhone et Apple Watch qui explique les données Apple Health et répond sur l\'appareil. Prix et vie privée.',
    twitterDescription:
      'Test de Pajdo : un compagnon Apple Health gratuit et propriétaire pour iPhone et Apple Watch, dont les réponses IA s\'exécutent sur l\'appareil selon le développeur. Prix, vie privée et points que les sources ne confirment pas.',
    audience:
      'Propriétaires d\'iPhone et d\'Apple Watch qui veulent que leurs données Apple Health soient expliquées par une IA sur l\'appareil, et qui veulent savoir ce que l\'appli coûte, ce qui quitte le téléphone et ce que les sources ne confirment pas.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'test Pajdo',
    targetKeywords: [
      'test pajdo appli',
      'compagnon ia apple health iphone',
      'appli santé ia sur l\'appareil',
      'questions santé apple intelligence',
      'appli sommeil hrv apple watch',
      'appli santé privée sans compte',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo (version 1.3.3 au 26 octobre 2026) est une application gratuite pour iPhone, iPad et Apple Watch qui transforme les données d\'Apple Health en l\'une de huit humeurs et, selon son site, répond à vos questions à leur sujet avec Apple Intelligence, sur l\'appareil.** L\'offre gratuite comprend 5 questions par semaine ; l\'offre Pro lève cette limite et ajoute la planification d\'entraînements et un rapport pour les consultations médicales. L\'appli est propriétaire et exige iOS 26 ou plus récent : l\'affirmation d\'un fonctionnement sur l\'appareil repose donc sur la parole du développeur.',
    quickAnswerTop: {
      fr: {
        question: 'Pajdo garde-t-elle vraiment vos données de santé sur l\'iPhone ?',
        answer:
          'D\'après son site et sa politique de confidentialité, oui : les données de santé, les calculs et les réponses aux questions restent sur l\'appareil, sans compte. Seules des statistiques d\'usage facultatives et l\'état des achats le quittent. Personne en dehors du développeur ne peut le vérifier dans le code, car l\'appli est propriétaire.',
        bullets: [
          'Gratuite sur l\'[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) pour iPhone, iPad et Apple Watch, iOS ou iPadOS 26.0 ou plus récent.',
          'Lit le sommeil, la HRV, la fréquence cardiaque au repos, la fréquence respiratoire, la température au poignet, les pas et les séances d\'entraînement depuis Apple Health.',
          'Compare chaque valeur à votre propre plage habituelle, pas à des moyennes de population.',
          'Les questions reçoivent une réponse d\'Apple Intelligence ; sans elle, l\'appli retombe sur des réponses préécrites.',
          'Un compagnon de bien-être, pas un dispositif médical : il décrit des mesures et ne pose aucun diagnostic.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Qu\'est-ce que Pajdo ?', anchor: 'what-is-pajdo' },
      { label: 'Où la télécharger', anchor: 'get-it' },
      { label: 'Tarifs', anchor: 'pricing' },
      { label: 'Pour bien démarrer', anchor: 'getting-started' },
      { label: 'Fonctions confirmées par les sources', anchor: 'key-features' },
      { label: 'Vie privée et usage du réseau', anchor: 'privacy' },
      { label: 'À qui s\'adresse-t-elle', anchor: 'who-should-use' },
      { label: 'Ce que nous n\'avons pas pu vérifier', anchor: 'who-should-not-use' },
      { label: 'Concurrents et alternatives', anchor: 'vs-alternatives' },
      { label: 'Questions fréquentes', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures associées', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Points clés',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pajdo est un compagnon Apple Health propriétaire pour iPhone et Apple Watch qui dit répondre aux questions sur l\'appareil grâce à Apple Intelligence, sans compte et avec un niveau gratuit.',
          },
          {
            type: 'plain-terms',
            text: 'Vous autorisez l\'accès à Apple Health, et l\'appli montre comment votre sommeil, votre cœur et votre activité se situent par rapport à votre propre plage habituelle, puis vous laisse poser des questions sur les chiffres.',
          },
        ],
        items: [
          'Développeur : Markovic Software, une entreprise individuelle en Croatie, qui réalise aussi Castmates et Lyonesse ; pas de code source public.',
          'Maintenance : première version le 13 octobre 2026 et version 1.3.3 le 25 octobre 2026, donc aucun avertissement de projet abandonné ne s\'applique.',
          'Retours : l\'App Store n\'affiche pas encore de notes, il n\'y a donc presque aucun avis public.',
          'Prérequis : iOS ou iPadOS 26.0 ou plus récent ; une Apple Watch est facultative mais ajoute les données de sommeil et de cœur.',
          'Langues : l\'appli suit la langue de l\'iPhone et en annonce 17, dont huit des neuf langues de ce site (pas l\'arabe).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce test s\'appuie sur la fiche App Store, le site du développeur, sa page presse et sa politique de confidentialité, vérifiés le 26 octobre 2026. PromptQuorum n\'a ni installé, ni testé, ni mesuré l\'appli. Pajdo est une appli de bien-être et ce test ne constitue pas un avis médical.',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'Qu\'est-ce que Pajdo ?',
        content: [
          '**Pajdo est une appli de bien-être construite autour d\'une petite mascotte verte qui porte vos données Apple Health comme une humeur.** Le site liste huit humeurs, comme Steady, Tired, Running warm et Couch mode, chacune ouvrant le graphique qui la justifie. Le nom signifie « copain » en croate.',
          'Le développeur de Pajdo est Josip Markovic, qui a confirmé à PromptQuorum le 26 octobre 2026 qu\'il réalise aussi [Castmates](/fr/power-local-llm/castmates-review), une appli de jeu de rôle hors ligne, et [Lyonesse](/fr/power-local-llm/lyonesse-review), une appli de transcription sur l\'appareil. L\'App Store affiche le même nom de vendeur pour les trois applis, et la politique de confidentialité désigne l\'exploitant comme Markovic Software, obrt za usluge.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Où la télécharger',
        content: [
          '**Pajdo s\'installe depuis l\'App Store ; aucune version Android, aucune version bureau ni code source n\'est proposé.** Les liens ci-dessous sont ceux qu\'utilisent la fiche et le site du développeur.',
        ],
        columns: ['Plateforme', 'Où la télécharger'],
        rows: [
          { 'Plateforme': 'iPhone, iPad, Apple Watch', 'Où la télécharger': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) (iOS ou iPadOS 26.0 ou plus récent, 91,8 Mo)' },
          { 'Plateforme': 'Site web', 'Où la télécharger': '[get-pajdo.app](https://get-pajdo.app)' },
          { 'Plateforme': 'Politique de confidentialité', 'Où la télécharger': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/) (mise à jour le 25 octobre 2026)' },
          { 'Plateforme': 'Données de santé grand public', 'Où la télécharger': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data) (section)' },
          { 'Plateforme': 'Kit presse', 'Où la télécharger': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: 'Version examinée : 1.3.3, publiée le 25 octobre 2026 d\'après la fiche App Store ; la première version date du 13 octobre 2026. Les réponses IA exigent un appareil compatible avec Apple Intelligence ; sur les autres, le site indique que Pajdo utilise des réponses préécrites.',
      },
      pricing: {
        id: 'pricing',
        title: 'Tarifs',
        content: [
          '**Pajdo se télécharge gratuitement, et Pajdo Pro se vend en abonnement mensuel ou annuel, ou en achat unique à vie.** La fiche indique qu\'il n\'y a pas d\'essai gratuit, car la version gratuite n\'a pas de limite de durée. Les prix ci-dessous viennent de l\'App Store français au 26 octobre 2026 et varient selon la boutique.',
        ],
        columns: ['Offre', 'Contenu', 'Prix (boutique FR)'],
        rows: [
          { 'Offre': 'Gratuit', 'Contenu': 'Les 8 humeurs, 30 jours de tendances, 5 questions par semaine', 'Prix (boutique FR)': '0 €' },
          { 'Offre': 'Pro mensuel', 'Contenu': 'Questions illimitées, historique complet, plans d\'entraînement', 'Prix (boutique FR)': '8,99 €/mois' },
          { 'Offre': 'Pro annuel', 'Contenu': 'Comme le mensuel', 'Prix (boutique FR)': '44,99 €/an' },
          { 'Offre': 'Pro à vie', 'Contenu': 'Comme le mensuel, achat unique', 'Prix (boutique FR)': '79,99 €' },
        ],
        note: 'La boutique américaine affiche 7,99 $, 39,99 $ et 69,99 $ ; la boutique japonaise 1 300 ¥, 6 000 ¥ et 11 000 ¥ ; la boutique brésilienne R$ 49,90, R$ 249,90 et R$ 499,90 ; la boutique coréenne 12 000 ₩, 66 000 ₩ et 110 000 ₩. Les abonnements se renouvellent jusqu\'à résiliation dans votre compte Apple.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Pour bien démarrer',
        content: [
          '**La mise en route suit l\'ordre décrit sur le site et la fiche ; PromptQuorum n\'a pas exécuté ces étapes.**',
        ],
        numberedItems: [
          {
            title: 'Vérifier votre appareil',
            whyItMatters: 'Pajdo exige iOS ou iPadOS 26.0 ou plus récent. Pour les réponses IA, l\'iPhone doit être compatible avec Apple Intelligence ; sinon vous obtenez des réponses préécrites.',
          },
          {
            title: 'Installer l\'appli et autoriser l\'accès à Apple Health',
            whyItMatters: 'L\'appli ne lit que les catégories d\'Apple Health que vous autorisez, et le site indique qu\'aucun compte ni inscription n\'est nécessaire.',
          },
          {
            title: 'Porter l\'Apple Watch, si vous en avez une',
            whyItMatters: 'La montre est facultative, mais les données de sommeil et de cœur viennent d\'elle. Pajdo compare vos valeurs à vos propres 28 derniers jours, ou 60 jours pour la HRV.',
          },
          {
            title: 'Toucher une humeur pour voir le graphique',
            whyItMatters: 'Chaque humeur ouvre les données qui la justifient, ce qui vous permet de vérifier la conclusion vous-même.',
          },
          {
            title: 'Poser une question',
            whyItMatters: 'L\'offre gratuite autorise 5 questions par semaine sur votre sommeil, votre cœur ou vos entraînements ; Pro supprime la limite.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Fonctions confirmées par les sources',
        content: [
          '**Chaque point ci-dessous vient de la fiche App Store, du site ou de la politique de confidentialité.**',
        ],
        items: [
          '**Humeurs et graphiques.** Huit humeurs résument vos données ; chacune est cliquable et affiche le graphique sous-jacent.',
          '**Questions sur vos chiffres.** Vous demandez en langage courant et recevez vos propres chiffres ; selon le site, du code ordinaire fait les calculs et Apple Intelligence formule la réponse.',
          '**Point du jour et bilan hebdomadaire.** Un court point est rédigé sur l\'appareil chaque matin, et les notifications sont limitées à environ deux par jour.',
          '**Suivi.** L\'humeur, l\'énergie, les symptômes et les minutes de pleine conscience se saisissent depuis l\'iPhone, l\'Apple Watch ou un widget ; l\'humeur, les symptômes et les minutes de pleine conscience peuvent être réécrits dans Apple Health.',
          '**Outils Pro.** Des plans d\'entraînement qui s\'adaptent au sommeil et à la HRV et peuvent être envoyés à l\'Apple Watch, des plans de course du 5 km au marathon, des expériences de 10 jours comme un couvre-feu de la caféine, des corrélations, un journal qui s\'étiquette seul et un rapport PDF de tendances pour les consultations médicales.',
          '**Dernière mise à jour (1.3.3).** Les notes de version ajoutent des pauses respiration de 1, 3 et 5 minutes, l\'allègement d\'un plan de course pendant quelques jours et une invitation à noter son sommeil.',
          '**Suivi du cycle.** Un suivi du cycle et un calendrier facultatifs existent, et la fiche indique que Pajdo n\'en tire jamais de prédictions.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Vie privée et usage du réseau',
        content: [
          '**La politique de confidentialité, mise à jour le 25 octobre 2026, dit que les données de santé ne quittent jamais le téléphone et qu\'aucune de vos données ne va « chez nous, chez un service d\'analyse, dans iCloud ni vers un service d\'IA dans le cloud ».** Elle ajoute que les données de santé et ce que Pajdo apprend restent hors d\'iCloud et des sauvegardes de l\'appareil, si bien qu\'un nouveau téléphone repart de zéro, et que l\'iPhone et l\'Apple Watch échangent des données chiffrées.',
          'Ce qui quitte le téléphone est limité. Les analyses d\'usage vont à Mixpanel, stockées dans l\'UE, uniquement avec votre consentement et sans valeurs de santé ni texte du journal. RevenueCat reçoit l\'état des achats et un identifiant anonyme, Apple gère les paiements et Vercel héberge le site. Les analyses sont conservées deux ans, et « Delete all data » dans les réglages efface ce qui se trouve sur l\'appareil.',
          'La politique renvoie à l\'autorité croate de protection des données AZOP comme régulateur possible et comporte une section sur les données de santé grand public qui cite l\'État de Washington. Elle ne dit pas que l\'IA est Apple Intelligence ; le site, lui, le dit.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'L\'appli est propriétaire, ces affirmations ne peuvent donc pas être vérifiées dans le code, et PromptQuorum n\'a pas audité le trafic réseau. Quiconque traite des données de santé sensibles devrait vérifier le comportement sur son propre appareil.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'À qui s\'adresse-t-elle',
        items: [
          '**Les propriétaires d\'Apple Watch qui veulent comprendre leur sommeil et leur HRV.** Un graphique se cache derrière chaque conclusion.',
          '**Ceux qui préfèrent garder leurs données de santé sur le téléphone.** Le développeur dit que rien n\'est envoyé, avec les réserves de la section sur la vie privée.',
          '**Les coureurs qui veulent des plans fondés sur la récupération.** Les plans de course et les suggestions d\'entraînement sont des fonctions Pro.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Ce que nous n\'avons pas pu vérifier',
        items: [
          '**Qualité en conditions réelles.** PromptQuorum n\'a pas exécuté l\'appli ; la justesse des humeurs, la qualité des réponses et la consommation de batterie ne sont pas évaluées.',
          '**L\'affirmation d\'une IA sur l\'appareil.** Le site nomme Apple Intelligence, la politique dit seulement que l\'IA s\'exécute sur l\'appareil, et aucun détail de modèle n\'est donné ; rien de cela ne peut être vérifié dans le code.',
          '**Code source et licence.** L\'appli est propriétaire et aucun dépôt public n\'a été trouvé.',
          '**Trafic.** PromptQuorum n\'a pas audité le trafic réseau ; les analyses décrites dans la politique ne sont donc pas vérifiées de manière indépendante.',
          '**Antécédents.** L\'appli a deux semaines, n\'a pas encore de notes sur l\'App Store et ne prend aucun engagement de support.',
          '**Usage médical.** Le développeur déclare qu\'elle n\'est pas un dispositif médical et ne pose jamais de diagnostic ; parlez à un médecin de tout changement persistant.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concurrents et alternatives',
        content: [
          'Le répertoire ne liste aucune autre appli Apple Health. Voici les fiches iPhone les plus proches dans la même catégorie d\'assistants personnels ; aucune ne lit de données de santé.',
        ],
        columns: ['Appli', 'Plateformes', 'Prix / licence', 'Différence clé'],
        rows: [
          { 'Appli': '[Nekoni](/fr/power-local-llm/nekoni-review)', 'Plateformes': 'macOS, Linux, iOS, web', 'Prix / licence': 'Gratuit / MIT', 'Différence clé': 'Agent personnel open source sur votre propre ordinateur, avec lequel vous discutez depuis un iPhone' },
          { 'Appli': '[On-Device AI Translator](/fr/power-local-llm/on-device-ai-translator-review)', 'Plateformes': 'iOS', 'Prix / licence': 'Gratuit + achat intégré / propriétaire', 'Différence clé': 'Appli iPhone propriétaire qui exécute des modèles de traduction sur l\'appareil' },
          { 'Appli': '[MemoryAI](/fr/power-local-llm/memoryai-review)', 'Plateformes': 'iOS, Android', 'Prix / licence': 'Gratuit / propriétaire', 'Différence clé': 'Chat hors ligne avec mémoire modifiable, sans lien avec les données de santé' },
        ],
        note: 'Les détails des concurrents changent souvent ; vérifiez le prix, la licence et les plateformes actuels sur la fiche de chaque appli.',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Ai-je besoin d\'une Apple Watch ?',
            a: 'Non. Le site qualifie la montre de facultative ; elle ajoute les données de sommeil et de cœur et active l\'appli montre, les complications et les plans d\'entraînement envoyés au poignet.',
          },
          {
            q: 'Pajdo fonctionne-t-elle sans Apple Intelligence ?',
            a: 'En partie. Selon le site, sans Apple Intelligence l\'appli utilise des réponses préécrites au lieu de réponses générées ; les humeurs et les graphiques sont calculés par du code ordinaire.',
          },
          {
            q: 'Quelles langues sont prises en charge ?',
            a: 'Le site et la fiche citent 17 langues, dont l\'anglais, l\'allemand, le français, l\'espagnol, le portugais, le japonais, le coréen et le chinois ; l\'appli suit la langue réglée sur l\'iPhone. L\'arabe n\'en fait pas partie.',
          },
          {
            q: 'Pajdo est-elle une appli médicale ?',
            a: 'Non. Le développeur la présente comme un compagnon de bien-être qui décrit vos mesures et ne pose jamais de diagnostic, et la fiche la classe 12+.',
          },
          {
            q: 'Vient-elle du même développeur que Castmates et Lyonesse ?',
            a: 'Oui, d\'après l\'e-mail du développeur à PromptQuorum du 26 octobre 2026 et le nom de vendeur identique sur l\'App Store. Le site lui-même ne mentionne pas les autres applis.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Pajdo est un compagnon Apple Health gratuit qui dit répondre aux questions sur l\'iPhone grâce à Apple Intelligence, avec huit humeurs, des graphiques derrière chaque conclusion et des outils Pro pour planifier ses entraînements. En face : l\'appli est propriétaire, vieille de deux semaines, sans note, exige iOS 26, et l\'affirmation d\'un fonctionnement sur l\'appareil ne peut pas être vérifiée. Elle convient aux propriétaires d\'Apple Watch qui veulent comprendre leurs chiffres et acceptent une appli jeune et fermée ; ceux qui veulent du code ouvert peuvent comparer [Nekoni](/fr/power-local-llm/nekoni-review), et ceux qui cherchent les autres réalisations du même développeur peuvent lire le [test de Lyonesse](/fr/power-local-llm/lyonesse-review).',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Pajdo sur l\'App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — prix, version, prérequis, classification d\'âge et achats intégrés, vérifiés le 26 octobre 2026.',
          '[Site web de Pajdo](https://get-pajdo.app) — fonctions, offres, affirmations sur l\'IA et la vie privée, et langues, vérifiés le 26 octobre 2026.',
          '[Politique de confidentialité de Pajdo](https://get-pajdo.app/privacy/) — exploitant, traitement des données, analyses et conservation, mise à jour le 25 octobre 2026.',
          '[Page presse de Pajdo](https://get-pajdo.app/press/) — localisation du développeur et kit presse.',
          'E-mail du développeur à PromptQuorum, 26 octobre 2026 — confirme que le développeur est le même que celui de Castmates et Lyonesse ; non vérifié de manière indépendante.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures associées',
        items: [
          '[Test de Lyonesse](/fr/power-local-llm/lyonesse-review) — l\'appli de transcription et de chat de documents sur l\'appareil du même développeur.',
          '[Test de Castmates](/fr/power-local-llm/castmates-review) — l\'appli de chat de personnages IA hors ligne du même développeur.',
          '[Test de MemoryAI](/fr/power-local-llm/memoryai-review) — une appli de chat hors ligne gratuite avec mémoire modifiable.',
          '[Les meilleures applis de LLM local pour iPhone en 2026](/fr/power-local-llm/best-local-llm-apps-iphone-2026) — le panorama plus large pour iPhone.',
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
    heroImage: '/images/pajdo-review-hero-ja.webp',
    title: 'Pajdoレビュー：iPhone上で答えるApple Healthコンパニオン',
    seoTitle: 'Pajdoレビュー：iPhone上で動くApple Healthアプリ',
    intro:
      'Pajdo: Health & Fitness Buddyは、Apple Healthのデータを読み取り、端末上のApple Intelligenceでそのデータに関する質問に答える、iPhone・iPad・Apple Watch向けのアプリです。App Storeでは販売元名Josip Markovicで掲載されており、[Castmates](/ja/power-local-llm/castmates-review)や[Lyonesse](/ja/power-local-llm/lyonesse-review)と同じ開発者です。初回リリースは2026年10月13日です。本レビューは、2026年10月26日に確認したApp Storeの掲載情報、公式サイト、プライバシーポリシーに基づいています。',
    metaDescription:
      'Pajdoレビュー：Apple Healthのデータを解説し、端末上のApple Intelligenceで質問に答える無料のiPhone・Apple Watchアプリ。料金とプライバシーを整理します。',
    twitterDescription:
      'Pajdoレビュー：AIの回答は端末上で動くと説明する、無料のクローズドソースのApple Healthコンパニオン（iPhone・Apple Watch向け）。料金、プライバシー、情報源が確認していない点。',
    audience:
      'Apple Healthのデータを端末上のAIに解説してほしいiPhoneとApple Watchのユーザーで、料金、端末から出ていくデータ、情報源が確認していない点を知りたい方。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Pajdo レビュー',
    targetKeywords: [
      'pajdo アプリ レビュー',
      'apple health ai コンパニオン iphone',
      'オンデバイス ai ヘルスケア アプリ',
      'apple intelligence 健康 質問',
      'apple watch 睡眠 hrv アプリ',
      'アカウント不要 ヘルスケア アプリ',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo（2026年10月26日時点のバージョン1.3.3）は、Apple Healthのデータを8つのムードに変え、公式サイトによると、そのデータに関する質問に端末上のApple Intelligenceで答える、無料のiPhone・iPad・Apple Watch向けアプリです。** 無料プランには週5回の質問が含まれます。Proプランでこの上限が外れ、ワークアウト計画と診察用レポートが加わります。アプリはクローズドソースでiOS 26以降が必要なため、端末上で動作するという主張は開発者の説明に依拠しています。',
    quickAnswerTop: {
      ja: {
        question: 'Pajdoは本当に健康データをiPhoneの中にとどめますか？',
        answer:
          '公式サイトとプライバシーポリシーによれば、そのとおりです。健康データ、計算、質問への回答は端末上にとどまり、アカウントは不要です。端末の外に出るのは、任意の利用統計と購入状況だけです。アプリはクローズドソースのため、開発者以外にはコードでこれを確認できません。',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058)でiPhone・iPad・Apple Watch向けに無料、iOS／iPadOS 26.0以降。',
          'Apple Healthから、睡眠、HRV、安静時心拍数、呼吸数、手首の皮膚温、歩数、ワークアウトを読み取ります。',
          '各数値は、母集団の平均ではなく、あなた自身のふだんの範囲と比べます。',
          '質問にはApple Intelligenceが答えます。使えない場合は、あらかじめ用意された返答に切り替わります。',
          '健康を気づかうためのコンパニオンで、医療機器ではありません。測定値を説明するだけで、診断はしません。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Pajdoとは', anchor: 'what-is-pajdo' },
      { label: '入手方法', anchor: 'get-it' },
      { label: '料金', anchor: 'pricing' },
      { label: 'はじめ方', anchor: 'getting-started' },
      { label: '情報源で確認できた機能', anchor: 'key-features' },
      { label: 'プライバシーとネットワーク利用', anchor: 'privacy' },
      { label: '向いている人', anchor: 'who-should-use' },
      { label: '確認できなかったこと', anchor: 'who-should-not-use' },
      { label: '競合と代替', anchor: 'vs-alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '情報源', anchor: 'sources' },
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
            text: 'Pajdoは、iPhoneとApple Watch向けのクローズドソースのApple Healthコンパニオンで、質問への回答はApple Intelligenceによって端末上で動作すると説明しており、アカウント不要で無料枠があります。',
          },
          {
            type: 'plain-terms',
            text: 'Apple Healthへのアクセスを許可すると、睡眠、心拍、活動量があなた自身のふだんの範囲と比べてどうかが表示され、その数値について質問できます。',
          },
        ],
        items: [
          '開発者：クロアチアの個人事業者Markovic Softwareで、CastmatesとLyonesseも手がけています。ソースコードは公開されていません。',
          '保守状況：初回リリースは2026年10月13日で、2026年10月25日にバージョン1.3.3が続いたため、放置プロジェクトの警告は該当しません。',
          '利用実績：App Storeにはまだ評価がなく、公開されたフィードバックはほとんどありません。',
          '要件：iOS／iPadOS 26.0以降。Apple Watchは必須ではありませんが、睡眠と心拍のデータが加わります。',
          '言語：アプリはiPhoneの言語に従い、17言語に対応します。当サイトの9言語のうち8言語が含まれます（アラビア語は含まれません）。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本レビューは、2026年10月26日に確認したApp Storeの掲載情報、開発者の公式サイト、プレスページ、プライバシーポリシーに基づいています。PromptQuorumはアプリをインストールしておらず、テストも計測もしていません。Pajdoは健康を気づかうためのアプリであり、本レビューは医療上の助言ではありません。',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'Pajdoとは',
        content: [
          '**Pajdoは、小さな緑のマスコットを軸にしたウェルネスアプリで、マスコットがApple Healthのデータをムードとして身にまといます。** 公式サイトには、Steady（安定）、Tired（疲れ）、Running warm（体温高め）、Couch mode（ソファモード）など8つのムードが挙げられ、それぞれタップすると根拠のグラフが開きます。名前はクロアチア語で「相棒」を意味します。',
          'Pajdoの開発者はJosip Markovic氏で、2026年10月26日にPromptQuorumへ、オフラインのロールプレイアプリ[Castmates](/ja/power-local-llm/castmates-review)と、端末上の文字起こしアプリ[Lyonesse](/ja/power-local-llm/lyonesse-review)も手がけていると確認しました。App Storeでは3つのアプリに同じ販売元名が表示され、プライバシーポリシーは運営者をMarkovic Software, obrt za usluge（個人事業者）としています。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '入手方法',
        content: [
          '**PajdoはApp Storeからインストールします。Android版、デスクトップ版、ソースコードは提供されていません。** 以下のリンクは、掲載情報と開発者サイトが使っているものです。',
        ],
        columns: ['プラットフォーム', '入手先'],
        rows: [
          { 'プラットフォーム': 'iPhone・iPad・Apple Watch', '入手先': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058)（iOS／iPadOS 26.0以降、91.8 MB）' },
          { 'プラットフォーム': '公式サイト', '入手先': '[get-pajdo.app](https://get-pajdo.app)' },
          { 'プラットフォーム': 'プライバシーポリシー', '入手先': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/)（2026年10月25日更新）' },
          { 'プラットフォーム': '消費者健康データ', '入手先': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data)（該当の節）' },
          { 'プラットフォーム': 'プレスキット', '入手先': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: '確認したバージョン：1.3.3。App Storeの掲載情報では2026年10月25日にリリースされており、初回リリースは2026年10月13日です。AIによる回答にはApple Intelligenceに対応した端末が必要で、それ以外の端末では、公式サイトによればPajdoはあらかじめ用意された返答を使います。',
      },
      pricing: {
        id: 'pricing',
        title: '料金',
        content: [
          '**Pajdoは無料でダウンロードでき、Pajdo Proは月額・年額のサブスクリプションか、買い切りの永久版として販売されています。** 掲載情報によれば、無料版に期限がないため無料トライアルはありません。以下の価格は2026年10月26日時点の日本のApp Storeのもので、ストアによって異なります。',
        ],
        columns: ['プラン', '内容', '価格（日本ストア）'],
        rows: [
          { 'プラン': '無料', '内容': 'ムード8種すべて、30日分のトレンド、週5回の質問', '価格（日本ストア）': '¥0' },
          { 'プラン': 'Pro 月額', '内容': '質問無制限、全履歴、ワークアウト計画', '価格（日本ストア）': '¥1,300/月' },
          { 'プラン': 'Pro 年額', '内容': '月額と同じ', '価格（日本ストア）': '¥6,000/年' },
          { 'プラン': 'Pro 買い切り', '内容': '月額と同じ、一度の購入', '価格（日本ストア）': '¥11,000' },
        ],
        note: '米国ストアでは$7.99、$39.99、$69.99です。ドイツ、スペイン、フランスのストアでは€8,99、€44,99、€79,99、ブラジルのストアではR$ 49,90、R$ 249,90、R$ 499,90、韓国のストアでは₩12,000、₩66,000、₩110,000です。サブスクリプションは、Appleアカウントで解約するまで更新されます。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'はじめ方',
        content: [
          '**手順は公式サイトと掲載情報に書かれた順序に従っています。PromptQuorumはこれらの手順を実行していません。**',
        ],
        numberedItems: [
          {
            title: '端末を確認する',
            whyItMatters: 'PajdoにはiOS／iPadOS 26.0以降が必要です。AIによる回答を使うには、iPhoneがApple Intelligenceに対応している必要があり、そうでない場合はあらかじめ用意された返答になります。',
          },
          {
            title: 'アプリをインストールし、Apple Healthへのアクセスを許可する',
            whyItMatters: 'アプリは、許可したApple Healthのカテゴリだけを読み取ります。公式サイトによれば、アカウントやサインアップは不要です。',
          },
          {
            title: 'お持ちならApple Watchを着ける',
            whyItMatters: 'Apple Watchは必須ではありませんが、睡眠と心拍のデータはそこから得られます。Pajdoは、あなたの数値を直近28日間（HRVは60日間）の自分自身の範囲と比べます。',
          },
          {
            title: 'ムードをタップしてグラフを見る',
            whyItMatters: '各ムードは根拠となるデータを開くので、結果を自分で確かめられます。',
          },
          {
            title: '質問する',
            whyItMatters: '無料プランでは、睡眠、心拍、ワークアウトについて週5回まで質問できます。Proでは上限がなくなります。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '情報源で確認できた機能',
        content: [
          '**以下の項目はすべて、App Storeの掲載情報、公式サイト、またはプライバシーポリシーに基づいています。**',
        ],
        items: [
          '**ムードとグラフ。** 8つのムードでデータを要約します。それぞれタップでき、根拠のグラフが表示されます。',
          '**数値についての質問。** ふつうの言葉で質問すると、あなた自身の数値が返ってきます。公式サイトによれば、計算はふつうのコードが行い、Apple Intelligenceが答えの文章を作ります。',
          '**毎日のブリーフィングと週次のまとめ。** 短いブリーフィングが毎朝、端末上で作られ、通知は1日あたり2件程度に抑えられます。',
          '**記録。** ムード、元気度、症状、マインドフルネス時間を、iPhone、Apple Watch、ウィジェットから記録できます。ムード、症状、マインドフルネス時間はApple Healthに書き戻すこともできます。',
          '**Proの機能。** 睡眠とHRVに合わせて調整され、Apple Watchに送れるワークアウト計画、5Kからマラソンまでのレース計画、カフェイン制限のような10日間の実験、相関、自動でタグ付けされるジャーナル、診察用のPDFトレンドレポートがあります。',
          '**最新の更新（1.3.3）。** リリースノートでは、1分・3分・5分の呼吸休憩、数日間レース計画を軽くする機能、睡眠の評価を促す表示が加わりました。',
          '**周期記録。** 任意の周期記録とカレンダーがあり、掲載情報によれば、Pajdoはそこから予測を行うことはありません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとネットワーク利用',
        content: [
          '**2026年10月25日更新のプライバシーポリシーは、健康データが端末の外に出ることはなく、あなたのデータは「当社にも、分析にも、iCloudにも、クラウド上のAIサービスにも」送られないと述べています。** さらに、健康データとPajdoが学習した内容はiCloudやデバイスのバックアップに含まれず、新しいiPhoneでは最初からやり直しになること、iPhoneとApple Watchは暗号化された形でデータをやり取りすることも記されています。',
          '端末の外に出るものは限られています。利用分析は、同意した場合にのみ、健康の数値やジャーナルの文章を含まない形でMixpanel（EUで保管）に送られます。RevenueCatは購入状況と匿名のIDを受け取り、決済はApple、公式サイトのホスティングはVercelが担います。分析データの保持期間は2年で、設定の「Delete all data」で端末上のデータが削除されます。',
          'ポリシーは、クロアチアのデータ保護当局AZOPを規制当局の可能性として挙げ、ワシントン州を引用した消費者健康データの節を設けています。AIがApple Intelligenceであることはポリシーには名指しで書かれておらず、公式サイトに書かれています。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アプリはクローズドソースのため、これらの主張をコードで確認することはできず、PromptQuorumはネットワーク通信を監査していません。機微な健康データを扱う場合は、ご自身の端末で動作を確認してください。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '向いている人',
        items: [
          '**睡眠やHRVの解説がほしいApple Watchユーザー。** すべての結果の裏にグラフがあります。',
          '**健康データを端末内にとどめたい人。** 開発者は何もアップロードされないと述べています。ただしプライバシーの節の注意点があります。',
          '**回復状況に基づく計画がほしいランナー。** レース計画とワークアウトの提案はProの機能です。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '確認できなかったこと',
        items: [
          '**実際の使用感。** PromptQuorumはアプリを実行していないため、ムードの正確さ、回答の質、バッテリー消費は評価していません。',
          '**端末上のAIという主張。** 公式サイトはApple Intelligenceと名指しし、ポリシーはAIが端末上で動くとだけ述べ、モデルの詳細は示されていません。いずれもコードでは確認できません。',
          '**ソースコードとライセンス。** アプリはクローズドソースで、公開リポジトリは見つかりませんでした。',
          '**通信。** ネットワーク通信は監査していないため、ポリシーに記載された分析は独立して検証されていません。',
          '**実績。** アプリは公開から2週間で、App Storeの評価はまだなく、サポートの約束もありません。',
          '**医療での利用。** 開発者は、医療機器ではなく診断も行わないと述べています。続く変化があれば医師に相談してください。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '競合と代替',
        content: [
          'ディレクトリには、ほかにApple Healthアプリはありません。以下は同じパーソナルアシスタントのカテゴリで最も近いiPhone向けの項目ですが、いずれも健康データは読み取りません。',
        ],
        columns: ['アプリ', '対応環境', '価格／ライセンス', '主な違い'],
        rows: [
          { 'アプリ': '[Nekoni](/ja/power-local-llm/nekoni-review)', '対応環境': 'macOS、Linux、iOS、Web', '価格／ライセンス': '無料／MIT', '主な違い': '自分のコンピューター上で動くオープンソースのパーソナルエージェント。iPhoneからチャットする' },
          { 'アプリ': '[On-Device AI Translator](/ja/power-local-llm/on-device-ai-translator-review)', '対応環境': 'iOS', '価格／ライセンス': '無料＋アプリ内課金／クローズドソース', '主な違い': '翻訳モデルを端末上で動かすクローズドソースのiPhoneアプリ' },
          { 'アプリ': '[MemoryAI](/ja/power-local-llm/memoryai-review)', '対応環境': 'iOS、Android', '価格／ライセンス': '無料／クローズドソース', '主な違い': '編集可能なメモリを備えたオフラインチャット。健康データとは無関係' },
        ],
        note: '競合の詳細は頻繁に変わります。各アプリの最新の価格、ライセンス、対応環境は、それぞれの掲載情報で確認してください。',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Apple Watchは必要ですか？',
            a: 'いいえ。公式サイトはApple Watchを必須ではないとしています。Apple Watchがあると、睡眠と心拍のデータが加わり、Watchアプリ、コンプリケーション、手首に送るワークアウト計画も使えます。',
          },
          {
            q: 'Apple Intelligenceなしでも使えますか？',
            a: '一部は使えます。公式サイトによれば、Apple Intelligenceがない場合、アプリは生成された回答の代わりにあらかじめ用意された返答を使います。ムードとグラフはふつうのコードで計算されます。',
          },
          {
            q: '対応言語は何ですか？',
            a: '公式サイトと掲載情報には17言語が挙げられ、英語、ドイツ語、フランス語、スペイン語、ポルトガル語、日本語、韓国語、中国語が含まれます。アプリはiPhoneに設定した言語に従います。アラビア語は含まれていません。',
          },
          {
            q: 'Pajdoは医療アプリですか？',
            a: 'いいえ。開発者はウェルネスのコンパニオンと呼び、測定値を説明するだけで診断はしないと述べています。掲載情報の年齢区分は12+です。',
          },
          {
            q: 'CastmatesやLyonesseと同じ開発者ですか？',
            a: 'はい。2026年10月26日の開発者からPromptQuorumへのメールと、App Storeの同一の販売元名によります。公式サイト自体は、ほかのアプリに触れていません。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Pajdoは、質問への回答がApple IntelligenceによってiPhone上で動くと説明する無料のApple Healthコンパニオンで、8つのムード、すべての結果の裏にあるグラフ、ワークアウト計画のためのPro機能を備えています。一方で、クローズドソースで、公開から2週間、評価もなく、iOS 26が必要で、端末上で動作するという主張は確認できません。自分の数値を説明してほしく、新しくてクローズドなアプリを受け入れられるApple Watchユーザーに向いています。オープンなコードを求める方は[Nekoni](/ja/power-local-llm/nekoni-review)と比べられます。同じ開発者の別のアプリは[Lyonesseレビュー](/ja/power-local-llm/lyonesse-review)で読めます。',
      },
      sources: {
        id: 'sources',
        title: '情報源',
        items: [
          '[App StoreのPajdo](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — 価格、バージョン、要件、年齢区分、アプリ内課金。2026年10月26日確認。',
          '[Pajdo公式サイト](https://get-pajdo.app) — 機能、プラン、AIとプライバシーに関する主張、対応言語。2026年10月26日確認。',
          '[Pajdoプライバシーポリシー](https://get-pajdo.app/privacy/) — 運営者、データの扱い、分析、保持期間。2026年10月25日更新。',
          '[Pajdoプレスページ](https://get-pajdo.app/press/) — 開発者の所在地とプレスキット。',
          '開発者からPromptQuorumへのメール（2026年10月26日）— CastmatesおよびLyonesseと同じ開発者であることの確認。独立した検証はしていません。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Lyonesseレビュー](/ja/power-local-llm/lyonesse-review) — 同じ開発者による、端末上の文字起こしとドキュメントチャットのアプリ。',
          '[Castmatesレビュー](/ja/power-local-llm/castmates-review) — 同じ開発者による、オフラインのAIキャラクターチャットアプリ。',
          '[MemoryAIレビュー](/ja/power-local-llm/memoryai-review) — 編集可能なメモリを備えた無料のオフラインチャットアプリ。',
          '[2026年のiPhone向けローカルLLMアプリ ベスト](/ja/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone向けのより広い比較。',
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
    heroImage: '/images/pajdo-review-hero-pt.webp',
    title: 'Análise do Pajdo: companheiro do Apple Health que responde no iPhone',
    seoTitle: 'Análise do Pajdo: companheiro do Apple Health no iPhone',
    intro:
      'O Pajdo: Health & Fitness Buddy é um app para iPhone, iPad e Apple Watch que lê os dados do Apple Health e responde a perguntas sobre eles com a Apple Intelligence no aparelho. Está listado com o nome de vendedor Josip Markovic, o mesmo desenvolvedor do [Castmates](/pt/power-local-llm/castmates-review) e do [Lyonesse](/pt/power-local-llm/lyonesse-review), e foi lançado pela primeira vez em 13 de outubro de 2026. Esta análise reflete a página da App Store, o site e a política de privacidade conforme verificados em 26 de outubro de 2026.',
    metaDescription:
      'Análise do Pajdo: app grátis para iPhone e Apple Watch que explica os dados do Apple Health e responde com a Apple Intelligence no aparelho.',
    twitterDescription:
      'Análise do Pajdo: um companheiro do Apple Health gratuito e de código fechado para iPhone e Apple Watch que diz executar as respostas de IA no aparelho. Preços, privacidade e o que as fontes não confirmam.',
    audience:
      'Donos de iPhone e Apple Watch que querem ter os dados do Apple Health explicados por uma IA no aparelho e precisam saber quanto custa, o que sai do celular e o que as fontes não confirmam.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Pajdo',
    targetKeywords: [
      'análise pajdo app',
      'companheiro ia apple health iphone',
      'app de saúde com ia no aparelho',
      'perguntas de saúde com apple intelligence',
      'app de sono e hrv para apple watch',
      'app de saúde privado sem conta',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**O Pajdo (versão 1.3.3 em 26 de outubro de 2026) é um app gratuito para iPhone, iPad e Apple Watch que transforma os dados do Apple Health em um de oito humores e, segundo o site, responde às suas perguntas sobre esses dados com a Apple Intelligence no aparelho.** O plano gratuito inclui 5 perguntas por semana; o plano Pro remove esse limite e acrescenta planejamento de treinos e um relatório para a consulta médica. O app é de código fechado e exige iOS 26 ou posterior, então a afirmação sobre o funcionamento no aparelho se apoia na palavra do desenvolvedor.',
    quickAnswerTop: {
      pt: {
        question: 'O Pajdo mantém mesmo seus dados de saúde no iPhone?',
        answer:
          'Segundo o site e a política de privacidade, sim: os dados de saúde, os cálculos e as respostas às perguntas ficam no aparelho, sem conta. Só saem as estatísticas de uso opcionais e o status da compra. Ninguém fora do desenvolvedor consegue verificar isso no código, porque o app é de código fechado.',
        bullets: [
          'Gratuito na [App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) para iPhone, iPad e Apple Watch, com iOS ou iPadOS 26.0 ou posterior.',
          'Lê do Apple Health o sono, a HRV, a frequência cardíaca em repouso, a frequência respiratória, a temperatura do pulso, os passos e os treinos.',
          'Compara cada número com a sua própria faixa habitual, não com médias da população.',
          'As perguntas são respondidas pela Apple Intelligence; sem ela, o app recorre a respostas predefinidas.',
          'É um companheiro de bem-estar, não um dispositivo médico: descreve medições e não faz diagnósticos.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'O que é o Pajdo?', anchor: 'what-is-pajdo' },
      { label: 'Onde baixar', anchor: 'get-it' },
      { label: 'Preços', anchor: 'pricing' },
      { label: 'Como começar', anchor: 'getting-started' },
      { label: 'Recursos confirmados pelas fontes', anchor: 'key-features' },
      { label: 'Privacidade e uso de rede', anchor: 'privacy' },
      { label: 'Para quem é', anchor: 'who-should-use' },
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
            text: 'O Pajdo é um companheiro do Apple Health de código fechado para iPhone e Apple Watch que diz executar as respostas às suas perguntas no aparelho por meio da Apple Intelligence, sem conta e com um nível gratuito.',
          },
          {
            type: 'plain-terms',
            text: 'Você libera o acesso ao Apple Health e o app mostra como seu sono, seu coração e sua atividade se comparam com a sua própria faixa habitual; depois você pode fazer perguntas sobre os números.',
          },
        ],
        items: [
          'Desenvolvedor: a Markovic Software, um negócio de profissional autônomo na Croácia, que também faz o Castmates e o Lyonesse; sem código-fonte público.',
          'Manutenção: primeiro lançamento em 13 de outubro de 2026 e versão 1.3.3 em 25 de outubro de 2026, então nenhum aviso de projeto abandonado se aplica.',
          'Histórico: a App Store ainda não mostra avaliações, então quase não há opiniões públicas.',
          'Requisitos: iOS ou iPadOS 26.0 ou posterior; um Apple Watch é opcional, mas acrescenta dados de sono e de coração.',
          'Idiomas: o app segue o idioma do iPhone e lista 17, incluindo oito dos nove idiomas deste site (não o árabe).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esta análise se baseia na página da App Store, no site, na página de imprensa e na política de privacidade do desenvolvedor, verificados em 26 de outubro de 2026. A PromptQuorum não instalou, testou nem mediu o app. O Pajdo é um app de bem-estar e esta análise não é aconselhamento médico.',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'O que é o Pajdo?',
        content: [
          '**O Pajdo é um app de bem-estar construído em torno de um pequeno mascote verde que veste seus dados do Apple Health como um humor.** O site lista oito humores, como Steady, Tired, Running warm e Couch mode, e cada um abre o gráfico por trás dele. O nome significa "parceiro" em croata.',
          'O desenvolvedor por trás do Pajdo é Josip Markovic, que confirmou à PromptQuorum em 26 de outubro de 2026 que também faz o [Castmates](/pt/power-local-llm/castmates-review), um app de roleplay offline, e o [Lyonesse](/pt/power-local-llm/lyonesse-review), um app de transcrição no aparelho. A App Store mostra o mesmo nome de vendedor nos três apps, e a política de privacidade nomeia o operador como Markovic Software, obrt za usluge.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'Onde baixar',
        content: [
          '**O Pajdo é instalado pela App Store; não há versão para Android, para desktop nem código-fonte.** Os links abaixo são os que a página e o site do desenvolvedor usam.',
        ],
        columns: ['Plataforma', 'Onde baixar'],
        rows: [
          { 'Plataforma': 'iPhone, iPad, Apple Watch', 'Onde baixar': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) (iOS ou iPadOS 26.0 ou posterior, 91.8 MB)' },
          { 'Plataforma': 'Site', 'Onde baixar': '[get-pajdo.app](https://get-pajdo.app)' },
          { 'Plataforma': 'Política de privacidade', 'Onde baixar': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/) (atualizada em 25 de outubro de 2026)' },
          { 'Plataforma': 'Dados de saúde do consumidor', 'Onde baixar': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data) (seção)' },
          { 'Plataforma': 'Kit de imprensa', 'Onde baixar': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: 'Versão analisada: 1.3.3, lançada em 25 de outubro de 2026 segundo a página da App Store; o primeiro lançamento foi em 13 de outubro de 2026. As respostas de IA exigem um aparelho compatível com a Apple Intelligence; em outros aparelhos, segundo o site, o Pajdo usa respostas predefinidas.',
      },
      pricing: {
        id: 'pricing',
        title: 'Preços',
        content: [
          '**O Pajdo é gratuito para baixar, e o Pajdo Pro é vendido como assinatura mensal ou anual ou como compra única vitalícia.** A página diz que não há teste gratuito porque a versão gratuita não tem limite de tempo. Os preços abaixo são da App Store do Brasil em 26 de outubro de 2026 e variam conforme a loja.',
        ],
        columns: ['Plano', 'O que inclui', 'Preço (loja BR)'],
        rows: [
          { 'Plano': 'Grátis', 'O que inclui': 'Os 8 humores, 30 dias de tendências, 5 perguntas por semana', 'Preço (loja BR)': 'R$ 0' },
          { 'Plano': 'Pro mensal', 'O que inclui': 'Perguntas ilimitadas, histórico completo, planos de treino', 'Preço (loja BR)': 'R$ 49,90/mês' },
          { 'Plano': 'Pro anual', 'O que inclui': 'Igual ao mensal', 'Preço (loja BR)': 'R$ 249,90/ano' },
          { 'Plano': 'Pro vitalício', 'O que inclui': 'Igual ao mensal, compra única', 'Preço (loja BR)': 'R$ 499,90' },
        ],
        note: 'A loja dos EUA mostra US$ 7,99, US$ 39,99 e US$ 69,99; as da Alemanha, da Espanha e da França, € 8,99, € 44,99 e € 79,99; a do Japão, ¥1,300, ¥6,000 e ¥11,000; a da Coreia, ₩12,000, ₩66,000 e ₩110,000. As assinaturas renovam até você cancelar na sua conta Apple.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'Como começar',
        content: [
          '**A configuração segue a ordem descrita no site e na página; a PromptQuorum não executou esses passos.**',
        ],
        numberedItems: [
          {
            title: 'Confira seu aparelho',
            whyItMatters: 'O Pajdo exige iOS ou iPadOS 26.0 ou posterior. Para as respostas de IA, o iPhone precisa ser compatível com a Apple Intelligence; caso contrário, você recebe respostas predefinidas.',
          },
          {
            title: 'Instale o app e permita o acesso ao Apple Health',
            whyItMatters: 'O app lê apenas as categorias do Apple Health que você permitir e, segundo o site, não é preciso conta nem cadastro.',
          },
          {
            title: 'Use o Apple Watch, se tiver um',
            whyItMatters: 'O relógio é opcional, mas os dados de sono e de coração vêm dele. O Pajdo compara seus números com os seus próprios últimos 28 dias, ou 60 dias no caso da HRV.',
          },
          {
            title: 'Toque em um humor para ver o gráfico',
            whyItMatters: 'Cada humor abre os dados por trás dele, para você conferir a conclusão por conta própria.',
          },
          {
            title: 'Faça uma pergunta',
            whyItMatters: 'O plano gratuito permite 5 perguntas por semana sobre seu sono, seu coração ou seus treinos; o Pro remove o limite.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'Recursos confirmados pelas fontes',
        content: [
          '**Cada item abaixo vem da página da App Store, do site ou da política de privacidade.**',
        ],
        items: [
          '**Humores e gráficos.** Oito humores resumem seus dados; cada um pode ser tocado e mostra o gráfico por trás.',
          '**Perguntas sobre seus números.** Você pergunta com suas próprias palavras e recebe seus próprios números de volta; segundo o site, código simples faz a conta e a Apple Intelligence redige a resposta.',
          '**Resumo diário e retrospectiva semanal.** Um resumo curto é escrito no aparelho a cada manhã, e as notificações se limitam a cerca de duas por dia.',
          '**Registros.** Humor, energia, sintomas e minutos de atenção plena podem ser registrados pelo iPhone, pelo Apple Watch ou por um widget; humor, sintomas e minutos de atenção plena podem ser gravados de volta no Apple Health.',
          '**Ferramentas Pro.** Planos de treino que se adaptam ao sono e à HRV e podem ser enviados ao Apple Watch, planos de corrida de 5K a maratona, experimentos de 10 dias como um toque de recolher da cafeína, correlações, um diário que se etiqueta sozinho e um relatório de tendências em PDF para consultas médicas.',
          '**Última atualização (1.3.3).** As notas da versão acrescentam pausas de respiração de 1, 3 e 5 minutos, a possibilidade de aliviar um plano de corrida por alguns dias e um lembrete para avaliar o sono.',
          '**Registro do ciclo.** Existe um registro e calendário de ciclo opcional, e a página diz que o Pajdo nunca faz previsões a partir dele.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e uso de rede',
        content: [
          '**A política de privacidade, atualizada em 25 de outubro de 2026, diz que os dados de saúde nunca saem do celular e que nenhum dos seus dados vai "para nós, para análises, para o iCloud ou para um serviço de IA na nuvem".** Acrescenta que os dados de saúde e o que o Pajdo aprende ficam fora do iCloud e dos backups do aparelho, de modo que um celular novo começa do zero, e que o iPhone e o Apple Watch trocam dados de forma criptografada.',
          'O que sai do celular é limitado. A análise de uso vai para o Mixpanel, armazenada na UE, apenas se você consentir e sem valores de saúde nem texto do diário. A RevenueCat recebe o status da compra e um ID anônimo, a Apple processa os pagamentos e a Vercel hospeda o site. As análises são mantidas por dois anos, e "Delete all data" nos ajustes remove o que está no aparelho.',
          'A política aponta a autoridade croata de proteção de dados AZOP como possível reguladora e tem uma seção sobre dados de saúde do consumidor que cita o estado de Washington. Ela não diz pelo nome que a IA é a Apple Intelligence; o site diz.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'O app é de código fechado, então nenhuma dessas afirmações pode ser verificada no código, e a PromptQuorum não auditou o tráfego de rede. Quem lida com dados de saúde sensíveis deve verificar o comportamento no próprio aparelho.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Para quem é',
        items: [
          '**Donos de Apple Watch que querem o sono e a HRV explicados.** Os gráficos ficam por trás de cada conclusão.',
          '**Quem prefere manter os dados de saúde no celular.** O desenvolvedor diz que nada é enviado, com as ressalvas da seção de privacidade.',
          '**Corredores que querem planos baseados na recuperação.** Os planos de corrida e as sugestões de treino são recursos Pro.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'O que não conseguimos verificar',
        items: [
          '**Qualidade no uso real.** A PromptQuorum não executou o app, então a precisão dos humores, a qualidade das respostas e o uso de bateria não são avaliados.',
          '**A afirmação sobre a IA no aparelho.** O site nomeia a Apple Intelligence, a política só diz que a IA roda no aparelho e nenhum detalhe do modelo é dado; nada disso pode ser verificado no código.',
          '**Código-fonte e licença.** O app é de código fechado e nenhum repositório público foi encontrado.',
          '**Tráfego.** A PromptQuorum não auditou o tráfego de rede, então as análises descritas na política não foram verificadas de forma independente.',
          '**Histórico.** O app tem duas semanas, ainda não tem avaliações na App Store e não oferece nenhum compromisso de suporte.',
          '**Uso médico.** O desenvolvedor afirma que não é um dispositivo médico e que nunca faz diagnósticos; fale com um médico sobre mudanças persistentes.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Concorrentes e alternativas',
        content: [
          'O diretório não lista nenhum outro app do Apple Health. Estas são as entradas de iPhone mais próximas da mesma categoria de assistentes pessoais; nenhuma lê dados de saúde.',
        ],
        columns: ['App', 'Plataformas', 'Preço / licença', 'Diferença principal'],
        rows: [
          { 'App': '[Nekoni](/pt/power-local-llm/nekoni-review)', 'Plataformas': 'macOS, Linux, iOS, web', 'Preço / licença': 'Grátis / MIT', 'Diferença principal': 'Agente pessoal de código aberto no seu próprio computador, com chat a partir de um iPhone' },
          { 'App': '[On-Device AI Translator](/pt/power-local-llm/on-device-ai-translator-review)', 'Plataformas': 'iOS', 'Preço / licença': 'Grátis + compra no app / código fechado', 'Diferença principal': 'App de iPhone de código fechado que executa modelos de tradução no aparelho' },
          { 'App': '[MemoryAI](/pt/power-local-llm/memoryai-review)', 'Plataformas': 'iOS, Android', 'Preço / licença': 'Grátis / código fechado', 'Diferença principal': 'Chat offline com memória editável, sem ligação com dados de saúde' },
        ],
        note: 'Os detalhes dos concorrentes mudam com frequência; confirme preço, licença e plataformas atuais na página de cada app.',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Preciso de um Apple Watch?',
            a: 'Não. O site o chama de opcional; ele acrescenta dados de sono e de coração e habilita o app do relógio, as complicações e os planos de treino enviados ao pulso.',
          },
          {
            q: 'O Pajdo funciona sem a Apple Intelligence?',
            a: 'Em parte. Segundo o site, sem a Apple Intelligence o app usa respostas predefinidas em vez de respostas geradas; os humores e os gráficos são calculados por código simples.',
          },
          {
            q: 'Quais idiomas ele suporta?',
            a: 'O site e a página nomeiam 17 idiomas, entre eles inglês, alemão, francês, espanhol, português, japonês, coreano e chinês; o app segue o idioma definido no iPhone. O árabe não está entre eles.',
          },
          {
            q: 'O Pajdo é um app médico?',
            a: 'Não. O desenvolvedor o descreve como um companheiro de bem-estar que descreve suas medições e nunca faz diagnósticos, e a página o classifica como 12+.',
          },
          {
            q: 'É do mesmo desenvolvedor do Castmates e do Lyonesse?',
            a: 'Sim, segundo o e-mail do desenvolvedor à PromptQuorum em 26 de outubro de 2026 e o mesmo nome de vendedor na App Store. O próprio site não menciona os outros apps.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Pajdo é um companheiro do Apple Health gratuito que diz executar as respostas às suas perguntas no iPhone por meio da Apple Intelligence, com oito humores, gráficos por trás de cada conclusão e ferramentas Pro para planejar treinos. Em contrapartida, é de código fechado, tem duas semanas, não tem avaliações, exige iOS 26 e a afirmação sobre o funcionamento no aparelho não pode ser verificada. Serve para donos de Apple Watch que querem os números explicados e aceitam um app jovem e fechado; quem quer código aberto pode comparar o [Nekoni](/pt/power-local-llm/nekoni-review), e quem procura o outro trabalho do mesmo desenvolvedor pode ler a [análise do Lyonesse](/pt/power-local-llm/lyonesse-review).',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Pajdo na App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — preço, versão, requisitos, classificação etária e compras no app, verificados em 26 de outubro de 2026.',
          '[Site do Pajdo](https://get-pajdo.app) — recursos, planos, afirmações sobre IA e privacidade e idiomas, verificados em 26 de outubro de 2026.',
          '[Política de privacidade do Pajdo](https://get-pajdo.app/privacy/) — operador, tratamento de dados, análises e retenção, atualizada em 25 de outubro de 2026.',
          '[Página de imprensa do Pajdo](https://get-pajdo.app/press/) — localização do desenvolvedor e kit de imprensa.',
          'E-mail do desenvolvedor à PromptQuorum, 26 de outubro de 2026 — confirma que é o mesmo desenvolvedor do Castmates e do Lyonesse; não verificado de forma independente.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Lyonesse](/pt/power-local-llm/lyonesse-review) — o app de transcrição no aparelho e chat de documentos do mesmo desenvolvedor.',
          '[Análise do Castmates](/pt/power-local-llm/castmates-review) — o app de chat de personagens com IA offline do mesmo desenvolvedor.',
          '[Análise do MemoryAI](/pt/power-local-llm/memoryai-review) — um app de chat offline gratuito com memória editável.',
          '[Os melhores apps de LLM local para iPhone em 2026](/pt/power-local-llm/best-local-llm-apps-iphone-2026) — o panorama mais amplo para iPhone.',
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
    heroImage: '/images/pajdo-review-hero-ar.webp',
    title: 'مراجعة Pajdo: رفيق Apple Health يجيب عن أسئلتك على iPhone',
    seoTitle: 'مراجعة Pajdo: رفيق لبيانات Apple Health على iPhone',
    intro:
      'Pajdo: Health & Fitness Buddy تطبيق لأجهزة iPhone وiPad وApple Watch يقرأ بيانات Apple Health ويجيب عن الأسئلة المتعلقة بها باستخدام Apple Intelligence على الجهاز. وهو مدرج في App Store باسم البائع Josip Markovic، أي المطوّر نفسه الذي يقف وراء [Castmates](/ar/power-local-llm/castmates-review) و[Lyonesse](/ar/power-local-llm/lyonesse-review)، وصدر لأول مرة في 13 أكتوبر 2026. تعكس هذه المراجعة صفحة App Store والموقع وسياسة الخصوصية كما جرى التحقق منها في 26 أكتوبر 2026.',
    metaDescription:
      'مراجعة Pajdo: تطبيق مجاني لأجهزة iPhone وApple Watch يشرح بيانات Apple Health ويجيب عن الأسئلة باستخدام Apple Intelligence على الجهاز. الأسعار والخصوصية.',
    twitterDescription:
      'مراجعة Pajdo: رفيق مجاني ومغلق المصدر لبيانات Apple Health على iPhone وApple Watch، يقول مطوّره إن إجابات الذكاء الاصطناعي تعمل على الجهاز. الأسعار والخصوصية وما لا تؤكده المصادر.',
    audience:
      'مستخدمو iPhone وApple Watch الذين يريدون أن يشرح لهم ذكاء اصطناعي على الجهاز بيانات Apple Health، ويحتاجون إلى معرفة تكلفته وما يغادر الهاتف وما لا تؤكده المصادر.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Pajdo',
    targetKeywords: [
      'مراجعة تطبيق pajdo',
      'رفيق ذكاء اصطناعي لتطبيق apple health على iphone',
      'تطبيق صحي بالذكاء الاصطناعي على الجهاز',
      'أسئلة صحية مع apple intelligence',
      'تطبيق apple watch للنوم وتقلب معدل ضربات القلب',
      'تطبيق صحي خاص دون حساب',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo (الإصدار 1.3.3 حتى 26 أكتوبر 2026) تطبيق مجاني لأجهزة iPhone وiPad وApple Watch يحوّل بيانات Apple Health إلى واحد من ثماني حالات مزاجية، ويجيب، وفق موقعه، عن أسئلتك حول تلك البيانات باستخدام Apple Intelligence على الجهاز.** تتضمن الخطة المجانية 5 أسئلة أسبوعيًا؛ وتزيل خطة Pro هذا الحد وتضيف تخطيط التمارين وتقريرًا لزيارة الطبيب. التطبيق مغلق المصدر ويتطلب iOS 26 أو أحدث، لذا يبقى ادعاء التشغيل على الجهاز قائمًا على كلام المطوّر.',
    quickAnswerTop: {
      ar: {
        question: 'هل يُبقي Pajdo بياناتك الصحية فعلًا على iPhone؟',
        answer:
          'وفق موقعه وسياسة الخصوصية، نعم: تبقى البيانات الصحية والحسابات والإجابة عن الأسئلة على الجهاز، دون حساب. ولا يغادره سوى إحصاءات الاستخدام الاختيارية وحالة الشراء. ولا يستطيع أحد خارج المطوّر التحقق من ذلك في الشفرة، لأن التطبيق مغلق المصدر.',
        bullets: [
          'مجاني على [App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) لأجهزة iPhone وiPad وApple Watch بنظام iOS أو iPadOS 26.0 أو أحدث.',
          'يقرأ من Apple Health النوم وتقلب معدل ضربات القلب (HRV) ومعدل ضربات القلب أثناء الراحة ومعدل التنفس ودرجة حرارة المعصم والخطوات والتمارين.',
          'يقارن كل رقم بنطاقك المعتاد أنت، لا بمتوسطات السكان.',
          'تجيب Apple Intelligence عن الأسئلة؛ وبدونها يعود التطبيق إلى ردود مكتوبة مسبقًا.',
          'رفيق للعافية وليس جهازًا طبيًا: يصف القياسات ولا يشخّص.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'ما هو Pajdo؟', anchor: 'what-is-pajdo' },
      { label: 'كيف تحصل عليه', anchor: 'get-it' },
      { label: 'الأسعار', anchor: 'pricing' },
      { label: 'كيف تبدأ', anchor: 'getting-started' },
      { label: 'ميزات أكدتها المصادر', anchor: 'key-features' },
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
            text: 'Pajdo رفيق مغلق المصدر لبيانات Apple Health على iPhone وApple Watch، يقول المطوّر إن الإجابة عن الأسئلة فيه تعمل على الجهاز عبر Apple Intelligence، دون حساب وبفئة مجانية.',
          },
          {
            type: 'plain-terms',
            text: 'تمنح التطبيق إذن الوصول إلى Apple Health، فيعرض كيف يقارن نومك وقلبك ونشاطك بنطاقك المعتاد، ثم يتيح لك طرح أسئلة عن الأرقام.',
          },
        ],
        items: [
          'المطوّر: Markovic Software، منشأة فردية في كرواتيا، وهي نفسها التي تصنع Castmates وLyonesse؛ ولا توجد شفرة مصدرية عامة.',
          'الصيانة: صدر أول إصدار في 13 أكتوبر 2026 وتبعه الإصدار 1.3.3 في 25 أكتوبر 2026، فلا ينطبق تحذير المشروع المهجور.',
          'السجل: لا يعرض App Store أي تقييمات بعد، فالآراء العامة تكاد تنعدم.',
          'المتطلبات: iOS أو iPadOS 26.0 أو أحدث؛ وساعة Apple Watch اختيارية لكنها تضيف بيانات النوم والقلب.',
          'اللغات: يتبع التطبيق لغة iPhone ويذكر 17 لغة، من بينها ثماني لغات من لغات هذا الموقع التسع (ليس من بينها العربية).',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تستند هذه المراجعة إلى صفحة App Store وموقع المطوّر وصفحة الصحافة وسياسة الخصوصية، وقد جرى التحقق منها في 26 أكتوبر 2026. لم تثبّت PromptQuorum التطبيق ولم تختبره ولم تقِس أداءه. Pajdo تطبيق للعافية وهذه المراجعة ليست نصيحة طبية.',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'ما هو Pajdo؟',
        content: [
          '**Pajdo تطبيق للعافية يدور حول تميمة خضراء صغيرة ترتدي بيانات Apple Health على هيئة حالة مزاجية.** يسرد الموقع ثماني حالات مثل Steady وTired وRunning warm وCouch mode، تفتح كل منها الرسم البياني الذي يقف خلفها. والاسم كرواتي ومعناه "صديق".',
          'المطوّر وراء Pajdo هو Josip Markovic، وقد أكد لـ PromptQuorum في 26 أكتوبر 2026 أنه يصنع أيضًا [Castmates](/ar/power-local-llm/castmates-review)، وهو تطبيق للعب الأدوار دون إنترنت، و[Lyonesse](/ar/power-local-llm/lyonesse-review)، وهو تطبيق للتفريغ الصوتي على الجهاز. ويعرض App Store اسم البائع نفسه على التطبيقات الثلاثة، وتسمّي سياسة الخصوصية الجهة المشغّلة Markovic Software, obrt za usluge.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: 'كيف تحصل عليه',
        content: [
          '**يُثبَّت Pajdo من App Store؛ ولا يُقدَّم إصدار لـ Android ولا إصدار لسطح المكتب ولا شفرة مصدرية.** الروابط أدناه هي التي تستخدمها الصفحة وموقع المطوّر.',
        ],
        columns: ['المنصة', 'كيف تحصل عليه'],
        rows: [
          { 'المنصة': 'iPhone وiPad وApple Watch', 'كيف تحصل عليه': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) (iOS أو iPadOS 26.0 أو أحدث، 91.8 MB)' },
          { 'المنصة': 'الموقع', 'كيف تحصل عليه': '[get-pajdo.app](https://get-pajdo.app)' },
          { 'المنصة': 'سياسة الخصوصية', 'كيف تحصل عليه': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/) (محدّثة في 25 أكتوبر 2026)' },
          { 'المنصة': 'بيانات الصحة الاستهلاكية', 'كيف تحصل عليه': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data) (قسم)' },
          { 'المنصة': 'حزمة الصحافة', 'كيف تحصل عليه': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: 'الإصدار الذي جرت مراجعته: 1.3.3، صدر في 25 أكتوبر 2026 وفق صفحة App Store؛ وكان أول إصدار في 13 أكتوبر 2026. تحتاج إجابات الذكاء الاصطناعي إلى جهاز يدعم Apple Intelligence؛ وعلى الأجهزة الأخرى يقول الموقع إن Pajdo يستخدم ردودًا مكتوبة مسبقًا.',
      },
      pricing: {
        id: 'pricing',
        title: 'الأسعار',
        content: [
          '**تنزيل Pajdo مجاني، وتُباع Pajdo Pro باشتراك شهري أو سنوي أو بشراء لمرة واحدة مدى الحياة.** تقول الصفحة إنه لا توجد فترة تجريبية مجانية لأن النسخة المجانية بلا حد زمني. الأسعار أدناه من App Store الأمريكي حتى 26 أكتوبر 2026 وتختلف بحسب المتجر.',
        ],
        columns: ['الخطة', 'ما تشمله', 'السعر (المتجر الأمريكي)'],
        rows: [
          { 'الخطة': 'مجاني', 'ما تشمله': 'الحالات الثماني، اتجاهات 30 يومًا، 5 أسئلة أسبوعيًا', 'السعر (المتجر الأمريكي)': '$0' },
          { 'الخطة': 'Pro شهري', 'ما تشمله': 'أسئلة غير محدودة، السجل الكامل، خطط التمارين', 'السعر (المتجر الأمريكي)': '$7.99/شهر' },
          { 'الخطة': 'Pro سنوي', 'ما تشمله': 'مثل الشهري', 'السعر (المتجر الأمريكي)': '$39.99/سنة' },
          { 'الخطة': 'Pro مدى الحياة', 'ما تشمله': 'مثل الشهري، شراء لمرة واحدة', 'السعر (المتجر الأمريكي)': '$69.99' },
        ],
        note: 'تعرض متاجر ألمانيا وإسبانيا وفرنسا €8,99 و€44,99 و€79,99، والمتجر الياباني ¥1,300 و¥6,000 و¥11,000، والمتجر البرازيلي R$ 49,90 وR$ 249,90 وR$ 499,90، والمتجر الكوري ₩12,000 و₩66,000 و₩110,000. تتجدد الاشتراكات حتى تلغيها في حسابك على Apple.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: 'كيف تبدأ',
        content: [
          '**يتبع الإعداد الترتيب الموصوف في الموقع والصفحة؛ ولم تنفّذ PromptQuorum هذه الخطوات.**',
        ],
        numberedItems: [
          {
            title: 'تحقق من جهازك',
            whyItMatters: 'يحتاج Pajdo إلى iOS أو iPadOS 26.0 أو أحدث. ولإجابات الذكاء الاصطناعي يجب أن يدعم iPhone ميزة Apple Intelligence؛ وإلا فستحصل على ردود مكتوبة مسبقًا.',
          },
          {
            title: 'ثبّت التطبيق وامنحه إذن الوصول إلى Apple Health',
            whyItMatters: 'لا يقرأ التطبيق سوى فئات Apple Health التي تسمح بها، ويقول الموقع إنه لا حاجة إلى حساب أو تسجيل.',
          },
          {
            title: 'ارتدِ ساعة Apple Watch إن كانت لديك',
            whyItMatters: 'الساعة اختيارية، لكن بيانات النوم والقلب تأتي منها. يقارن Pajdo أرقامك بآخر 28 يومًا لديك، أو 60 يومًا لتقلب معدل ضربات القلب (HRV).',
          },
          {
            title: 'اضغط على حالة مزاجية لترى الرسم البياني',
            whyItMatters: 'تفتح كل حالة البيانات التي تقف خلفها، فتتحقق بنفسك من النتيجة.',
          },
          {
            title: 'اطرح سؤالًا',
            whyItMatters: 'تتيح الخطة المجانية 5 أسئلة أسبوعيًا عن نومك أو قلبك أو تمارينك؛ وتزيل Pro هذا الحد.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: 'ميزات أكدتها المصادر',
        content: [
          '**كل بند أدناه مأخوذ من صفحة App Store أو الموقع أو سياسة الخصوصية.**',
        ],
        items: [
          '**الحالات المزاجية والرسوم البيانية.** تلخّص ثماني حالات بياناتك؛ وكل حالة قابلة للضغط وتعرض الرسم البياني الكامن خلفها.',
          '**أسئلة عن أرقامك.** تسأل بكلمات عادية فتحصل على أرقامك أنت؛ ويقول الموقع إن شفرة عادية تجري الحسابات وإن Apple Intelligence تصوغ الإجابة.',
          '**الموجز اليومي والملخص الأسبوعي.** يُكتب موجز قصير على الجهاز كل صباح، وتقتصر الإشعارات على نحو اثنين يوميًا.',
          '**التسجيل.** يمكن تسجيل المزاج والطاقة والأعراض ودقائق التأمل الذهني من iPhone أو Apple Watch أو أداة على الشاشة؛ ويمكن كتابة المزاج والأعراض ودقائق التأمل الذهني إلى Apple Health.',
          '**أدوات Pro.** خطط تمارين تتكيف مع النوم وتقلب معدل ضربات القلب (HRV) ويمكن إرسالها إلى Apple Watch، وخطط سباقات من 5K إلى الماراثون، وتجارب مدتها 10 أيام مثل حظر الكافيين المسائي، وارتباطات، ودفتر يوميات يضع وسومه بنفسه، وتقرير PDF بالاتجاهات لزيارات الطبيب.',
          '**آخر تحديث (1.3.3).** تضيف ملاحظات الإصدار فترات استراحة للتنفس مدتها 1 و3 و5 دقائق، وتخفيف خطة السباق لبضعة أيام، ومطالبة بتقييم النوم.',
          '**سجل الدورة.** يتوفر سجل وتقويم اختياريان للدورة، وتقول الصفحة إن Pajdo لا يضع أي توقعات اعتمادًا عليهما.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية واستخدام الشبكة',
        content: [
          '**تقول سياسة الخصوصية، المحدّثة في 25 أكتوبر 2026، إن البيانات الصحية لا تغادر الهاتف أبدًا وإن أيًّا من بياناتك لا يذهب "إلى الشركة ولا إلى التحليلات ولا إلى iCloud ولا إلى خدمة ذكاء اصطناعي سحابية".** وتضيف أن البيانات الصحية وما يتعلمه Pajdo تبقى خارج iCloud والنسخ الاحتياطية للجهاز، فيبدأ الهاتف الجديد من الصفر، وأن iPhone وApple Watch يتبادلان البيانات بصيغة مشفّرة.',
          'وما يغادر الهاتف محدود. تذهب تحليلات الاستخدام إلى Mixpanel، وتُخزَّن في الاتحاد الأوروبي، ولا يحدث ذلك إلا بموافقتك ودون قيم صحية أو نص دفتر اليوميات. ويتلقى RevenueCat حالة الشراء ومعرّفًا مجهولًا، وتتولى Apple الدفع، وتستضيف Vercel الموقع. تُحفظ التحليلات سنتين، ويزيل خيار "Delete all data" في الإعدادات ما هو موجود على الجهاز.',
          'تشير السياسة إلى هيئة حماية البيانات الكرواتية AZOP بوصفها جهة تنظيمية محتملة، وفيها قسم عن بيانات الصحة الاستهلاكية يستشهد بولاية واشنطن. ولا تذكر السياسة أن الذكاء الاصطناعي هو Apple Intelligence بالاسم؛ أما الموقع فيذكر ذلك.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'التطبيق مغلق المصدر، لذا لا يمكن التحقق من هذه الادعاءات في الشفرة، ولم تدقّق PromptQuorum حركة الشبكة. على من يتعامل مع بيانات صحية حساسة أن يتحقق من السلوك على جهازه.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'لمن يناسب',
        items: [
          '**مالكو Apple Watch الذين يريدون شرحًا لنومهم وتقلب معدل ضربات القلب (HRV).** تقف الرسوم البيانية خلف كل نتيجة.',
          '**من يفضّلون إبقاء بياناتهم الصحية على الهاتف.** يقول المطوّر إن شيئًا لا يُرفع، مع التحفظات الواردة في قسم الخصوصية.',
          '**العدّاؤون الذين يريدون خططًا قائمة على التعافي.** خطط السباقات واقتراحات التمارين من ميزات Pro.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'ما لم نتمكن من التحقق منه',
        items: [
          '**الجودة عمليًا.** لم تشغّل PromptQuorum التطبيق، لذا لم تُقيَّم دقة الحالات المزاجية ولا جودة الإجابات ولا استهلاك البطارية.',
          '**ادعاء الذكاء الاصطناعي على الجهاز.** يذكر الموقع Apple Intelligence، وتقول السياسة فقط إن الذكاء الاصطناعي يعمل على الجهاز، ولا تُعطى تفاصيل عن النموذج؛ ولا يمكن التحقق من أي من ذلك في الشفرة.',
          '**الشفرة المصدرية والترخيص.** التطبيق مغلق المصدر ولم يُعثر على مستودع عام.',
          '**الحركة على الشبكة.** لم تدقّق PromptQuorum حركة الشبكة، لذا فالتحليلات الواردة في السياسة غير موثّقة بشكل مستقل.',
          '**السجل.** عمر التطبيق أسبوعان، ولا تقييمات له في App Store بعد، ولا يقدّم أي التزام بالدعم.',
          '**الاستخدام الطبي.** يذكر المطوّر أنه ليس جهازًا طبيًا ولا يشخّص أبدًا؛ استشر طبيبًا بشأن أي تغيرات مستمرة.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'المنافسون والبدائل',
        content: [
          'لا يسرد الدليل أي تطبيق آخر لـ Apple Health. هذه أقرب مدخلات iPhone في فئة المساعدين الشخصيين نفسها؛ ولا يقرأ أي منها بيانات صحية.',
        ],
        columns: ['التطبيق', 'المنصات', 'السعر / الترخيص', 'الفرق الرئيسي'],
        rows: [
          { 'التطبيق': '[Nekoni](/ar/power-local-llm/nekoni-review)', 'المنصات': 'macOS وLinux وiOS وويب', 'السعر / الترخيص': 'مجاني / MIT', 'الفرق الرئيسي': 'وكيل شخصي مفتوح المصدر على حاسوبك تدردش معه من iPhone' },
          { 'التطبيق': '[On-Device AI Translator](/ar/power-local-llm/on-device-ai-translator-review)', 'المنصات': 'iOS', 'السعر / الترخيص': 'مجاني + شراء داخل التطبيق / مغلق المصدر', 'الفرق الرئيسي': 'تطبيق iPhone مغلق المصدر يشغّل نماذج الترجمة على الجهاز' },
          { 'التطبيق': '[MemoryAI](/ar/power-local-llm/memoryai-review)', 'المنصات': 'iOS وAndroid', 'السعر / الترخيص': 'مجاني / مغلق المصدر', 'الفرق الرئيسي': 'دردشة دون إنترنت بذاكرة قابلة للتعديل، وغير مرتبطة بالبيانات الصحية' },
        ],
        note: 'تتغير تفاصيل المنافسين كثيرًا؛ تحقق من السعر والترخيص والمنصات الحالية في صفحة كل تطبيق.',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى Apple Watch؟',
            a: 'لا. يصف الموقع الساعة بأنها اختيارية؛ فهي تضيف بيانات النوم والقلب وتتيح تطبيق الساعة والمؤشرات المصغّرة وخطط التمارين المرسلة إلى المعصم.',
          },
          {
            q: 'هل يعمل Pajdo دون Apple Intelligence؟',
            a: 'جزئيًا. بحسب الموقع، يستخدم التطبيق دون Apple Intelligence ردودًا مكتوبة مسبقًا بدل الإجابات المولَّدة؛ أما الحالات المزاجية والرسوم البيانية فتحسبها شفرة عادية.',
          },
          {
            q: 'ما اللغات التي يدعمها؟',
            a: 'يذكر الموقع والصفحة 17 لغة، منها الإنجليزية والألمانية والفرنسية والإسبانية والبرتغالية واليابانية والكورية والصينية؛ ويتبع التطبيق اللغة المضبوطة على iPhone. والعربية ليست من بينها.',
          },
          {
            q: 'هل Pajdo تطبيق طبي؟',
            a: 'لا. يصفه المطوّر برفيق للعافية يصف قياساتك ولا يشخّص أبدًا، وتصنّفه الصفحة 12+.',
          },
          {
            q: 'هل هو من المطوّر نفسه الذي صنع Castmates وLyonesse؟',
            a: 'نعم، بحسب رسالة المطوّر إلى PromptQuorum في 26 أكتوبر 2026 واسم البائع المتطابق في App Store. ولا يذكر الموقع نفسه التطبيقين الآخرين.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'Pajdo رفيق مجاني لبيانات Apple Health يقول إن الإجابة عن الأسئلة فيه تعمل على iPhone عبر Apple Intelligence، مع ثماني حالات مزاجية ورسوم بيانية خلف كل نتيجة وأدوات Pro لتخطيط التمارين. في المقابل هو مغلق المصدر، وعمره أسبوعان، وبلا تقييمات، ويتطلب iOS 26، ولا يمكن التحقق من ادعاء التشغيل على الجهاز. يناسب مالكي Apple Watch الذين يريدون شرح أرقامهم ويقبلون تطبيقًا حديثًا ومغلقًا؛ ومن يريد شفرة مفتوحة يمكنه مقارنة [Nekoni](/ar/power-local-llm/nekoni-review)، ومن يبحث عن أعمال المطوّر نفسه الأخرى يمكنه قراءة [مراجعة Lyonesse](/ar/power-local-llm/lyonesse-review).',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Pajdo على App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — السعر والإصدار والمتطلبات والتصنيف العمري وعمليات الشراء داخل التطبيق، جرى التحقق منها في 26 أكتوبر 2026.',
          '[موقع Pajdo](https://get-pajdo.app) — الميزات والخطط وادعاءات الذكاء الاصطناعي والخصوصية واللغات، جرى التحقق منها في 26 أكتوبر 2026.',
          '[سياسة خصوصية Pajdo](https://get-pajdo.app/privacy/) — الجهة المشغّلة ومعالجة البيانات والتحليلات والاحتفاظ بالبيانات، محدّثة في 25 أكتوبر 2026.',
          '[صفحة الصحافة في Pajdo](https://get-pajdo.app/press/) — موقع المطوّر وحزمة الصحافة.',
          'رسالة بريد إلكتروني من المطوّر إلى PromptQuorum، 26 أكتوبر 2026 — تؤكد أنه المطوّر نفسه الذي صنع Castmates وLyonesse؛ لم يجرِ التحقق منها بصورة مستقلة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Lyonesse](/ar/power-local-llm/lyonesse-review) — تطبيق التفريغ الصوتي والدردشة مع المستندات على الجهاز من المطوّر نفسه.',
          '[مراجعة Castmates](/ar/power-local-llm/castmates-review) — تطبيق دردشة الشخصيات بالذكاء الاصطناعي دون إنترنت من المطوّر نفسه.',
          '[مراجعة MemoryAI](/ar/power-local-llm/memoryai-review) — تطبيق دردشة مجاني دون إنترنت بذاكرة قابلة للتعديل.',
          '[أفضل تطبيقات LLM المحلية لـ iPhone في 2026](/ar/power-local-llm/best-local-llm-apps-iphone-2026) — النظرة الأوسع على iPhone.',
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
    heroImage: '/images/pajdo-review-hero-zh.webp',
    title: 'Pajdo 评测：在 iPhone 上回答问题的 Apple Health 助手',
    seoTitle: 'Pajdo 评测：iPhone 上的 Apple Health 助手',
    intro:
      'Pajdo: Health & Fitness Buddy 是一款适用于 iPhone、iPad 和 Apple Watch 的应用，它读取 Apple Health 数据，并用设备上的 Apple Intelligence 回答与这些数据有关的问题。它在 App Store 中以卖家名称 Josip Markovic 上架，与 [Castmates](/zh/power-local-llm/castmates-review) 和 [Lyonesse](/zh/power-local-llm/lyonesse-review) 出自同一位开发者，于 2026 年 10 月 13 日首次发布。本评测基于 2026 年 10 月 26 日核对的 App Store 页面、官网和隐私政策。',
    metaDescription:
      'Pajdo 评测：免费的 iPhone 和 Apple Watch 应用，解读 Apple Health 数据，并用设备上的 Apple Intelligence 回答问题。价格与隐私。',
    twitterDescription:
      'Pajdo 评测：一款免费、闭源的 iPhone 和 Apple Watch 版 Apple Health 助手，称其 AI 回答在设备上运行。价格、隐私以及来源未能证实的内容。',
    audience:
      '想让设备上的 AI 解读 Apple Health 数据的 iPhone 和 Apple Watch 用户，需要了解它的价格、哪些数据会离开手机，以及来源未能证实的内容。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Pajdo 评测',
    targetKeywords: [
      'pajdo 应用评测',
      'apple health ai 助手 iphone',
      '本地 ai 健康应用',
      'apple intelligence 健康问答',
      'apple watch 睡眠 hrv 应用',
      '无需账号 健康应用',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo（截至 2026 年 10 月 26 日为 1.3.3 版）是一款免费的 iPhone、iPad 和 Apple Watch 应用，它把 Apple Health 数据变成八种心情之一，并且据官网称，用设备上的 Apple Intelligence 回答你关于这些数据的问题。** 免费方案每周包含 5 次提问；Pro 方案取消该限制，并增加运动计划和就诊报告。该应用闭源，且需要 iOS 26 或更高版本，因此“在设备上运行”的说法来自开发者自述。',
    quickAnswerTop: {
      zh: {
        question: 'Pajdo 真的把健康数据留在 iPhone 上吗？',
        answer:
          '据官网和隐私政策，是的：健康数据、计算和问题回答都留在设备上，无需账号。离开设备的只有可选的使用统计和购买状态。由于该应用闭源，开发者之外的人无法在代码中验证这一点。',
        bullets: [
          '在 [App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) 免费提供，支持 iPhone、iPad 和 Apple Watch，需 iOS 或 iPadOS 26.0 或更高版本。',
          '从 Apple Health 读取睡眠、HRV、静息心率、呼吸频率、腕部温度、步数和锻炼记录。',
          '把每项数据与你自己的日常范围比较，而不是与人群平均值比较。',
          '问题由 Apple Intelligence 回答；没有它时，应用会退回到预先写好的回复。',
          '这是健康陪伴类应用，不是医疗器械：它描述测量结果，不做诊断。',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '快速回答', anchor: 'quick-answer' },
      { label: 'Pajdo 是什么？', anchor: 'what-is-pajdo' },
      { label: '获取方式', anchor: 'get-it' },
      { label: '价格', anchor: 'pricing' },
      { label: '上手步骤', anchor: 'getting-started' },
      { label: '来源确认的功能', anchor: 'key-features' },
      { label: '隐私与网络使用', anchor: 'privacy' },
      { label: '适合谁用', anchor: 'who-should-use' },
      { label: '我们未能核实的内容', anchor: 'who-should-not-use' },
      { label: '竞品与替代', anchor: 'vs-alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pajdo 是一款面向 iPhone 和 Apple Watch 的闭源 Apple Health 助手，称其问题回答通过 Apple Intelligence 在设备上运行，无需账号，并提供免费版。',
          },
          {
            type: 'plain-terms',
            text: '你允许访问 Apple Health 后，应用会显示你的睡眠、心脏和活动数据与你自己的日常范围相比如何，并让你就这些数字提问。',
          },
        ],
        items: [
          '开发者：位于克罗地亚的个体经营者 Markovic Software，同时也是 Castmates 和 Lyonesse 的开发者；没有公开源代码。',
          '维护情况：首个版本发布于 2026 年 10 月 13 日，1.3.3 版随后于 2026 年 10 月 25 日发布，因此不适用“项目停更”警告。',
          '使用记录：App Store 上暂时没有评分，几乎没有公开反馈。',
          '要求：iOS 或 iPadOS 26.0 及以上；Apple Watch 为可选，但会增加睡眠和心脏数据。',
          '语言：应用跟随 iPhone 的语言，列出 17 种，涵盖本站九种语言中的八种（不含阿拉伯语）。',
        ],
        callouts: [
          {
            type: 'note',
            text: '本评测基于 2026 年 10 月 26 日核对的 App Store 页面、开发者官网、新闻页面和隐私政策。PromptQuorum 没有安装、测试或评测该应用。Pajdo 是健康陪伴类应用，本评测不构成医疗建议。',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'Pajdo 是什么？',
        content: [
          '**Pajdo 是一款围绕绿色小吉祥物打造的健康应用，吉祥物会把你的 Apple Health 数据“穿”成一种心情。** 官网列出八种心情，例如 Steady（平稳）、Tired（疲惫）、Running warm（体温偏高）和 Couch mode（沙发模式），每一种都能打开背后的图表。名字在克罗地亚语中意为“伙伴”。',
          'Pajdo 的开发者是 Josip Markovic，他在 2026 年 10 月 26 日向 PromptQuorum 确认，自己也开发了离线角色扮演应用 [Castmates](/zh/power-local-llm/castmates-review) 和设备端转写应用 [Lyonesse](/zh/power-local-llm/lyonesse-review)。App Store 中三款应用显示相同的卖家名称，隐私政策则把运营方写为 Markovic Software, obrt za usluge（个体经营者）。',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '获取方式',
        content: [
          '**Pajdo 通过 App Store 安装，不提供 Android 版、桌面版或源代码。** 下面的链接就是商店页面和开发者官网所用的链接。',
        ],
        columns: ['平台', '获取方式'],
        rows: [
          { '平台': 'iPhone、iPad、Apple Watch', '获取方式': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058)（iOS 或 iPadOS 26.0 及以上，91.8 MB）' },
          { '平台': '官网', '获取方式': '[get-pajdo.app](https://get-pajdo.app)' },
          { '平台': '隐私政策', '获取方式': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/)（2026 年 10 月 25 日更新）' },
          { '平台': '消费者健康数据', '获取方式': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data)（相关章节）' },
          { '平台': '新闻素材包', '获取方式': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: '评测版本：1.3.3，App Store 页面显示发布于 2026 年 10 月 25 日；首个版本发布于 2026 年 10 月 13 日。AI 回答需要支持 Apple Intelligence 的设备；在其他设备上，官网称 Pajdo 会使用预先写好的回复。',
      },
      pricing: {
        id: 'pricing',
        title: '价格',
        content: [
          '**Pajdo 可免费下载，Pajdo Pro 以月度或年度订阅，或一次性买断的方式销售。** 商店页面称不提供免费试用，因为免费版没有时间限制。以下为 2026 年 10 月 26 日美国 App Store 的价格，各地区商店价格不同。',
        ],
        columns: ['方案', '包含内容', '美国商店价格'],
        rows: [
          { '方案': '免费', '包含内容': '全部 8 种心情、30 天趋势、每周 5 次提问', '美国商店价格': '$0' },
          { '方案': 'Pro 月度', '包含内容': '不限提问、完整历史、运动计划', '美国商店价格': '$7.99/月' },
          { '方案': 'Pro 年度', '包含内容': '同月度', '美国商店价格': '$39.99/年' },
          { '方案': 'Pro 买断', '包含内容': '同月度，一次性购买', '美国商店价格': '$69.99' },
        ],
        note: '德国、西班牙和法国的商店显示 €8,99、€44,99 和 €79,99，日本商店显示 ¥1,300、¥6,000 和 ¥11,000，巴西商店显示 R$ 49,90、R$ 249,90 和 R$ 499,90，韩国商店显示 ₩12,000、₩66,000 和 ₩110,000。订阅会持续续费，直到你在 Apple 账户中取消。',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '上手步骤',
        content: [
          '**设置顺序遵循官网和商店页面的描述；PromptQuorum 没有执行过这些步骤。**',
        ],
        numberedItems: [
          {
            title: '检查你的设备',
            whyItMatters: 'Pajdo 需要 iOS 或 iPadOS 26.0 或更高版本。要使用 AI 回答，iPhone 必须支持 Apple Intelligence，否则只会得到预先写好的回复。',
          },
          {
            title: '安装应用并允许访问 Apple Health',
            whyItMatters: '应用只读取你允许的 Apple Health 类别，官网称无需账号或注册。',
          },
          {
            title: '如果有 Apple Watch，请佩戴',
            whyItMatters: 'Apple Watch 是可选的，但睡眠和心脏数据来自它。Pajdo 会把你的数据与你自己最近 28 天的范围比较，HRV 则为 60 天。',
          },
          {
            title: '点按一种心情查看图表',
            whyItMatters: '每种心情都会打开背后的数据，你可以自己核对结论。',
          },
          {
            title: '提问',
            whyItMatters: '免费方案每周允许就睡眠、心脏或锻炼提问 5 次；Pro 取消该限制。',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '来源确认的功能',
        content: [
          '**以下每一项都来自 App Store 页面、官网或隐私政策。**',
        ],
        items: [
          '**心情与图表。** 八种心情概括你的数据；每一种都可点按，并显示背后的图表。',
          '**就你的数据提问。** 你用日常用语提问，得到的是你自己的数字；官网称计算由普通代码完成，由 Apple Intelligence 来组织回答的措辞。',
          '**每日简报与每周回顾。** 每天早上会在设备上生成一份简短简报，通知限制在每天大约两条。',
          '**记录。** 可从 iPhone、Apple Watch 或小组件记录心情、精力、症状和正念分钟数；心情、症状和正念分钟数也可以写回 Apple Health。',
          '**Pro 工具。** 根据睡眠和 HRV 调整、可发送到 Apple Watch 的运动计划，从 5K 到马拉松的比赛计划，例如咖啡因禁令这样的 10 天实验，相关性分析，自动打标签的日志，以及用于就诊的 PDF 趋势报告。',
          '**最新更新（1.3.3）。** 更新说明新增了 1、3 和 5 分钟的呼吸休息，可在几天内放宽比赛计划，以及睡眠评分提示。',
          '**周期记录。** 提供可选的周期记录和日历，商店页面称 Pajdo 不会据此做任何预测。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与网络使用',
        content: [
          '**2026 年 10 月 25 日更新的隐私政策称，健康数据从不离开手机，你的任何数据都不会发送“给我们、给分析服务、给 iCloud，或给云端的 AI 服务”。** 政策还称，健康数据和 Pajdo 学到的内容不会进入 iCloud 和设备备份，因此换新手机后会从头开始，iPhone 与 Apple Watch 之间以加密形式交换数据。',
          '离开手机的内容有限。使用分析仅在你同意后发送到 Mixpanel（存储在欧盟），且不含健康数值或日志文字。RevenueCat 接收购买状态和一个匿名 ID，Apple 处理付款，Vercel 托管官网。分析数据保留两年，设置中的“Delete all data”会删除设备上的数据。',
          '政策提到克罗地亚数据保护机构 AZOP 可能是监管机构，并设有一个引用华盛顿州的消费者健康数据章节。政策没有点名说 AI 是 Apple Intelligence；官网则有说明。',
        ],
        callouts: [
          {
            type: 'note',
            text: '该应用闭源，因此这些说法无法在代码中核实，PromptQuorum 也没有审计网络流量。处理敏感健康数据的用户应在自己的设备上验证其行为。',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '适合谁用',
        items: [
          '**想了解自己睡眠和 HRV 的 Apple Watch 用户。** 每项结论背后都有图表。',
          '**希望健康数据留在手机上的人。** 开发者称不会上传任何内容，但需注意隐私部分的说明。',
          '**想要基于恢复情况制定计划的跑者。** 比赛计划和运动建议属于 Pro 功能。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '我们未能核实的内容',
        items: [
          '**实际使用表现。** PromptQuorum 没有运行该应用，因此没有评估心情判断的准确性、回答质量和耗电。',
          '**设备端 AI 的说法。** 官网点名了 Apple Intelligence，政策只说 AI 在设备上运行，也没有给出模型细节；这些都无法在代码中核实。',
          '**源代码与许可证。** 该应用闭源，也没有找到公开仓库。',
          '**流量。** PromptQuorum 没有审计网络流量，因此政策中所述的分析未经独立核实。',
          '**使用记录。** 该应用上架两周，App Store 上还没有评分，也没有任何支持承诺。',
          '**医疗用途。** 开发者称它不是医疗器械，也从不做诊断；如有持续的变化，请咨询医生。',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '竞品与替代',
        content: [
          '目录中没有其他 Apple Health 应用。以下是同一个个人助理类别中最接近的 iPhone 条目，它们都不读取健康数据。',
        ],
        columns: ['应用', '平台', '价格 / 许可证', '主要区别'],
        rows: [
          { '应用': '[Nekoni](/zh/power-local-llm/nekoni-review)', '平台': 'macOS、Linux、iOS、网页', '价格 / 许可证': '免费 / MIT', '主要区别': '运行在你自己电脑上的开源个人智能体，可用 iPhone 与其聊天' },
          { '应用': '[On-Device AI Translator](/zh/power-local-llm/on-device-ai-translator-review)', '平台': 'iOS', '价格 / 许可证': '免费 + 应用内购买 / 闭源', '主要区别': '在设备上运行翻译模型的闭源 iPhone 应用' },
          { '应用': '[MemoryAI](/zh/power-local-llm/memoryai-review)', '平台': 'iOS、Android', '价格 / 许可证': '免费 / 闭源', '主要区别': '带可编辑记忆的离线聊天，与健康数据无关' },
        ],
        note: '竞品信息变化很快；请在各应用自己的商店页面确认当前价格、许可证和平台。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '需要 Apple Watch 吗？',
            a: '不需要。官网称 Apple Watch 为可选；有了它会增加睡眠和心脏数据，并可使用手表应用、表盘组件，以及发送到手腕的运动计划。',
          },
          {
            q: '没有 Apple Intelligence 能用吗？',
            a: '部分可用。据官网，没有 Apple Intelligence 时，应用会用预先写好的回复代替生成的回答；心情和图表由普通代码计算。',
          },
          {
            q: '支持哪些语言？',
            a: '官网和商店页面列出 17 种语言，包括英语、德语、法语、西班牙语、葡萄牙语、日语、韩语和中文；应用跟随 iPhone 上设置的语言。其中不包括阿拉伯语。',
          },
          {
            q: 'Pajdo 是医疗应用吗？',
            a: '不是。开发者称它是健康陪伴类应用，只描述你的测量结果，从不做诊断，商店页面的年龄分级为 12+。',
          },
          {
            q: '它与 Castmates 和 Lyonesse 出自同一位开发者吗？',
            a: '是的，依据是开发者 2026 年 10 月 26 日发给 PromptQuorum 的邮件，以及完全相同的 App Store 卖家名称。官网本身没有提到其他应用。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          'Pajdo 是一款免费的 Apple Health 助手，称其问题回答通过 Apple Intelligence 在 iPhone 上运行，有八种心情、每项结论背后的图表，以及用于运动计划的 Pro 工具。但另一方面，它闭源、上架两周、尚无评分、需要 iOS 26，且设备端运行的说法无法核实。它适合想让别人解读自己数据、并能接受一款较新且封闭应用的 Apple Watch 用户；想要开放代码的读者可以对比 [Nekoni](/zh/power-local-llm/nekoni-review)，想了解同一位开发者其他作品的读者可以阅读 [Lyonesse 评测](/zh/power-local-llm/lyonesse-review)。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store 上的 Pajdo](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — 价格、版本、系统要求、年龄分级和应用内购买，2026 年 10 月 26 日核对。',
          '[Pajdo 官网](https://get-pajdo.app) — 功能、方案、AI 与隐私说法以及语言，2026 年 10 月 26 日核对。',
          '[Pajdo 隐私政策](https://get-pajdo.app/privacy/) — 运营方、数据处理、分析和保留期限，2026 年 10 月 25 日更新。',
          '[Pajdo 新闻页面](https://get-pajdo.app/press/) — 开发者所在地和新闻素材包。',
          '开发者致 PromptQuorum 的邮件，2026 年 10 月 26 日 — 确认与 Castmates 和 Lyonesse 出自同一位开发者；未经独立验证。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Lyonesse 评测](/zh/power-local-llm/lyonesse-review) — 同一位开发者的设备端转写与文档对话应用。',
          '[Castmates 评测](/zh/power-local-llm/castmates-review) — 同一位开发者的离线 AI 角色聊天应用。',
          '[MemoryAI 评测](/zh/power-local-llm/memoryai-review) — 带可编辑记忆的免费离线聊天应用。',
          '[2026 年 iPhone 本地大模型应用推荐](/zh/power-local-llm/best-local-llm-apps-iphone-2026) — 更广泛的 iPhone 应用盘点。',
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
    heroImage: '/images/pajdo-review-hero-ko.webp',
    title: 'Pajdo 리뷰: iPhone에서 답하는 Apple Health 도우미',
    seoTitle: 'Pajdo 리뷰: iPhone용 Apple Health 도우미 앱',
    intro:
      'Pajdo: Health & Fitness Buddy는 Apple Health 데이터를 읽고 기기 내 Apple Intelligence로 질문에 답하는 iPhone, iPad, Apple Watch용 앱입니다. App Store에는 판매자명 Josip Markovic으로 등록되어 있으며, [Castmates](/ko/power-local-llm/castmates-review)와 [Lyonesse](/ko/power-local-llm/lyonesse-review)를 만든 개발자와 같습니다. 2026년 10월 13일에 처음 출시되었습니다. 이 리뷰는 2026년 10월 26일에 확인한 App Store 페이지, 웹사이트, 개인정보 처리방침을 반영합니다.',
    metaDescription:
      'Pajdo 리뷰: Apple Health 데이터를 설명하고 기기 내 Apple Intelligence로 질문에 답하는 무료 iPhone·Apple Watch 앱. 가격과 개인정보.',
    twitterDescription:
      'Pajdo 리뷰: AI 답변이 기기에서 실행된다고 밝히는 무료 비공개 소스 Apple Health 도우미(iPhone, Apple Watch). 가격, 개인정보, 출처가 확인하지 못한 내용.',
    audience:
      'Apple Health 데이터를 기기 내 AI가 설명해 주기를 원하는 iPhone·Apple Watch 사용자로서, 비용과 기기 밖으로 나가는 데이터, 출처가 확인하지 못한 내용을 알아야 하는 분.',
    readTime: '8분 읽기',
    educationalLevel: 'Beginner',
    affiliateDisclosure: false,
    primaryTerm: 'Pajdo 리뷰',
    targetKeywords: [
      'pajdo 앱 리뷰',
      'iphone apple health ai 도우미',
      '온디바이스 ai 건강 앱',
      'apple intelligence 건강 질문',
      'apple watch 수면 hrv 앱',
      '계정 없는 비공개 건강 앱',
    ],
    current_hardware_mentioned: ['iPhone', 'iPad', 'Apple Watch'],
    leadAnswerBlock:
      '**Pajdo(2026년 10월 26일 기준 버전 1.3.3)는 Apple Health 데이터를 여덟 가지 기분 중 하나로 보여 주고, 웹사이트에 따르면 그 데이터에 관한 질문에 기기 내 Apple Intelligence로 답하는 무료 iPhone, iPad, Apple Watch 앱입니다.** 무료 플랜에는 주 5회 질문이 포함되며, Pro 플랜은 이 한도를 없애고 운동 계획과 진료용 리포트를 더합니다. 이 앱은 비공개 소스이며 iOS 26 이상이 필요하므로, 기기에서 실행된다는 주장은 개발자의 설명에 의존합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Pajdo는 정말 건강 데이터를 iPhone에만 보관합니까?',
        answer:
          '웹사이트와 개인정보 처리방침에 따르면 그렇습니다. 건강 데이터, 계산, 질문 응답이 계정 없이 기기에 머물고, 선택적 사용 통계와 구매 상태만 기기 밖으로 나갑니다. 앱이 비공개 소스이므로 개발자 외에는 코드로 이를 검증할 수 없습니다.',
        bullets: [
          '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058)에서 iPhone, iPad, Apple Watch용으로 무료 제공되며 iOS 또는 iPadOS 26.0 이상이 필요합니다.',
          'Apple Health에서 수면, HRV, 안정 시 심박수, 호흡수, 손목 온도, 걸음 수, 운동을 읽습니다.',
          '각 수치를 인구 평균이 아니라 본인의 평소 범위와 비교합니다.',
          '질문에는 Apple Intelligence가 답하며, 없으면 앱은 미리 작성된 답변으로 돌아갑니다.',
          '의료기기가 아니라 웰니스 도우미이며, 측정값을 설명할 뿐 진단하지 않습니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Pajdo란?', anchor: 'what-is-pajdo' },
      { label: '받는 방법', anchor: 'get-it' },
      { label: '가격', anchor: 'pricing' },
      { label: '시작하기', anchor: 'getting-started' },
      { label: '출처로 확인된 기능', anchor: 'key-features' },
      { label: '개인정보와 네트워크 사용', anchor: 'privacy' },
      { label: '추천 대상', anchor: 'who-should-use' },
      { label: '확인하지 못한 내용', anchor: 'who-should-not-use' },
      { label: '경쟁 앱과 대안', anchor: 'vs-alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 글', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pajdo는 iPhone과 Apple Watch용 비공개 소스 Apple Health 도우미로, 개발자는 질문 응답이 Apple Intelligence를 통해 기기에서 실행되며 계정이 필요 없고 무료 플랜이 있다고 밝힙니다.',
          },
          {
            type: 'plain-terms',
            text: 'Apple Health 접근을 허용하면 앱이 수면, 심장, 활동이 본인의 평소 범위와 어떻게 다른지 보여 주고, 수치에 관해 질문할 수 있게 해 줍니다.',
          },
        ],
        items: [
          '개발자: 크로아티아의 개인사업자 Markovic Software로, Castmates와 Lyonesse도 만들었으며 공개 소스 코드는 없습니다.',
          '유지 관리: 첫 릴리스는 2026년 10월 13일이었고 2026년 10월 25일에 버전 1.3.3이 이어졌으므로 방치된 프로젝트 경고는 해당되지 않습니다.',
          '이용 실적: App Store에 아직 평점이 없어 공개된 의견이 거의 없습니다.',
          '요구 사항: iOS 또는 iPadOS 26.0 이상이며, Apple Watch는 선택 사항이지만 수면과 심장 데이터를 더해 줍니다.',
          '언어: 앱은 iPhone 언어를 따르며 17개 언어를 제공하는데, 이 사이트의 9개 언어 중 8개가 포함됩니다(아랍어는 제외).',
        ],
        callouts: [
          {
            type: 'note',
            text: '이 리뷰는 2026년 10월 26일에 확인한 App Store 페이지, 개발자 웹사이트, 보도 자료 페이지, 개인정보 처리방침에 근거합니다. PromptQuorum은 앱을 설치하거나 테스트하거나 벤치마크하지 않았습니다. Pajdo는 웰니스 앱이며 이 리뷰는 의학적 조언이 아닙니다.',
          },
        ],
      },
      overview: {
        id: 'what-is-pajdo',
        title: 'Pajdo란?',
        content: [
          '**Pajdo는 Apple Health 데이터를 기분으로 입고 나타나는 작은 초록색 마스코트를 중심으로 만든 웰니스 앱입니다.** 웹사이트에는 Steady, Tired, Running warm, Couch mode 등 여덟 가지 기분이 나와 있으며, 각 기분은 그 뒤에 있는 차트를 엽니다. 이름은 크로아티아어로 "친구"를 뜻합니다.',
          'Pajdo의 개발자는 Josip Markovic이며, 2026년 10월 26일 PromptQuorum에 오프라인 롤플레이 앱 [Castmates](/ko/power-local-llm/castmates-review)와 기기 내 음성 받아쓰기 앱 [Lyonesse](/ko/power-local-llm/lyonesse-review)도 만든다고 확인했습니다. App Store는 세 앱 모두에 같은 판매자명을 표시하며, 개인정보 처리방침은 운영 주체를 Markovic Software, obrt za usluge로 밝히고 있습니다.',
        ],
      },
      getIt: {
        id: 'get-it',
        title: '받는 방법',
        content: [
          '**Pajdo는 App Store에서 설치하며 Android 빌드, 데스크톱 빌드, 소스 코드는 제공되지 않습니다.** 아래 링크는 페이지와 개발자 사이트가 사용하는 것입니다.',
        ],
        columns: ['플랫폼', '받는 곳'],
        rows: [
          { '플랫폼': 'iPhone·iPad·Apple Watch', '받는 곳': '[App Store](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) (iOS 또는 iPadOS 26.0 이상, 91.8 MB)' },
          { '플랫폼': '웹사이트', '받는 곳': '[get-pajdo.app](https://get-pajdo.app)' },
          { '플랫폼': '개인정보 처리방침', '받는 곳': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/) (2026년 10월 25일 업데이트)' },
          { '플랫폼': '소비자 건강 데이터', '받는 곳': '[get-pajdo.app/privacy](https://get-pajdo.app/privacy/#consumer-health-data) (섹션)' },
          { '플랫폼': '보도 자료 키트', '받는 곳': '[get-pajdo.app/press](https://get-pajdo.app/press/)' },
        ],
        note: '확인한 버전: 1.3.3으로, App Store 페이지에 따르면 2026년 10월 25일에 출시되었으며 첫 릴리스는 2026년 10월 13일이었습니다. AI 답변에는 Apple Intelligence를 지원하는 기기가 필요하며, 그렇지 않은 기기에서는 웹사이트에 따르면 Pajdo가 미리 작성된 답변을 사용합니다.',
      },
      pricing: {
        id: 'pricing',
        title: '가격',
        content: [
          '**Pajdo는 무료로 내려받을 수 있으며 Pajdo Pro는 월간·연간 구독 또는 한 번 결제하는 평생 구매로 판매됩니다.** 페이지에는 무료 버전에 기간 제한이 없으므로 무료 체험은 없다고 나와 있습니다. 아래 가격은 한국 App Store 기준(2026년 10월 26일)이며 스토어마다 다릅니다. 구독은 Apple 계정에서 해지할 때까지 갱신됩니다.',
        ],
        columns: ['플랜', '포함 내용', '가격(한국 스토어)'],
        rows: [
          { '플랜': '무료', '포함 내용': '기분 8종 전체, 30일 추세, 주 5회 질문', '가격(한국 스토어)': '₩0' },
          { '플랜': 'Pro 월간', '포함 내용': '질문 무제한, 전체 기록, 운동 계획', '가격(한국 스토어)': '₩12,000/월' },
          { '플랜': 'Pro 연간', '포함 내용': '월간과 동일', '가격(한국 스토어)': '₩66,000/년' },
          { '플랜': 'Pro 평생', '포함 내용': '월간과 동일, 한 번 구매', '가격(한국 스토어)': '₩110,000' },
        ],
        note: '미국 스토어는 $7.99, $39.99, $69.99를, 독일, 스페인, 프랑스 스토어는 €8,99, €44,99, €79,99를, 일본 스토어는 ¥1,300, ¥6,000, ¥11,000을, 브라질 스토어는 R$ 49,90, R$ 249,90, R$ 499,90을 표시합니다.',
      },
      gettingStarted: {
        id: 'getting-started',
        title: '시작하기',
        content: [
          '**설정 순서는 웹사이트와 페이지에 설명된 순서를 따릅니다. PromptQuorum은 이 단계를 실행해 보지 않았습니다.**',
        ],
        numberedItems: [
          {
            title: '기기 확인',
            whyItMatters: 'Pajdo에는 iOS 또는 iPadOS 26.0 이상이 필요합니다. AI 답변을 받으려면 iPhone이 Apple Intelligence를 지원해야 하며, 그렇지 않으면 미리 작성된 답변이 표시됩니다.',
          },
          {
            title: '앱 설치 후 Apple Health 접근 허용',
            whyItMatters: '앱은 허용한 Apple Health 항목만 읽으며, 웹사이트에 따르면 계정이나 가입이 필요 없습니다.',
          },
          {
            title: 'Apple Watch가 있다면 착용',
            whyItMatters: '워치는 선택 사항이지만 수면과 심장 데이터는 워치에서 옵니다. Pajdo는 수치를 본인의 최근 28일(HRV는 60일)과 비교합니다.',
          },
          {
            title: '기분을 탭해 차트 확인',
            whyItMatters: '각 기분은 그 뒤에 있는 데이터를 열어 주므로 결과를 직접 확인할 수 있습니다.',
          },
          {
            title: '질문하기',
            whyItMatters: '무료 플랜에서는 수면, 심장, 운동에 관해 주 5회 질문할 수 있으며, Pro는 한도를 없앱니다.',
          },
        ],
      },
      features: {
        id: 'key-features',
        title: '출처로 확인된 기능',
        content: [
          '**아래 항목은 모두 App Store 페이지, 웹사이트 또는 개인정보 처리방침에서 나온 것입니다.**',
        ],
        items: [
          '**기분과 차트.** 여덟 가지 기분이 데이터를 요약하며, 각 기분은 탭할 수 있고 그 바탕이 되는 차트를 보여 줍니다.',
          '**수치에 관한 질문.** 평소 말투로 물으면 본인의 수치가 돌아옵니다. 웹사이트에 따르면 계산은 일반 코드가 하고 Apple Intelligence가 답변을 표현합니다.',
          '**일일 브리핑과 주간 요약.** 매일 아침 기기에서 짧은 브리핑이 작성되며, 알림은 하루 약 두 번으로 제한됩니다.',
          '**기록.** 기분, 에너지, 증상, 마음챙김 시간을 iPhone, Apple Watch 또는 위젯에서 기록할 수 있으며, 기분, 증상, 마음챙김 시간은 Apple Health에 되쓸 수 있습니다.',
          '**Pro 도구.** 수면과 HRV에 맞춰 조정되어 Apple Watch로 보낼 수 있는 운동 계획, 5K부터 마라톤까지의 레이스 계획, 카페인 제한 같은 10일 실험, 상관관계, 스스로 태그를 붙이는 일지, 진료용 PDF 추세 리포트를 제공합니다.',
          '**최신 업데이트(1.3.3).** 릴리스 노트에서 1분, 3분, 5분 호흡 휴식, 며칠간 레이스 계획 완화, 수면 평가 안내가 추가되었습니다.',
          '**주기 기록.** 선택 사항인 주기 기록과 달력이 있으며, 페이지에 따르면 Pajdo는 이를 바탕으로 예측하지 않습니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보와 네트워크 사용',
        content: [
          '**2026년 10월 25일에 업데이트된 개인정보 처리방침은 건강 데이터가 휴대폰을 떠나지 않으며, 어떤 데이터도 "당사, 분석 서비스, iCloud, 클라우드 AI 서비스로" 전송되지 않는다고 밝힙니다.** 또한 건강 데이터와 Pajdo가 학습한 내용은 iCloud와 기기 백업에서 제외되므로 새 휴대폰에서는 처음부터 시작하며, iPhone과 Apple Watch는 암호화된 형태로 데이터를 주고받는다고 덧붙입니다.',
          '기기 밖으로 나가는 것은 제한적입니다. 사용 분석은 동의한 경우에만 EU에 저장되는 Mixpanel로 전송되며 건강 수치나 일지 텍스트는 포함되지 않습니다. RevenueCat은 구매 상태와 익명 ID를 받고, 결제는 Apple이 처리하며, 웹사이트는 Vercel이 호스팅합니다. 분석 데이터는 2년간 보관되고, 설정의 "Delete all data"는 기기에 있는 데이터를 삭제합니다.',
          '방침은 크로아티아 개인정보 보호 당국 AZOP를 잠재적 규제 기관으로 언급하며, 워싱턴주를 인용하는 소비자 건강 데이터 섹션이 있습니다. 방침은 AI가 Apple Intelligence라고 이름을 밝히지 않으며, 이는 웹사이트가 밝힙니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '앱이 비공개 소스이므로 이러한 주장은 코드로 확인할 수 없으며, PromptQuorum은 네트워크 트래픽을 점검하지 않았습니다. 민감한 건강 데이터를 다루는 분은 본인 기기에서 동작을 직접 확인하십시오.',
          },
        ],
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '추천 대상',
        items: [
          '**수면과 HRV에 대한 설명을 원하는 Apple Watch 사용자.** 모든 결과 뒤에 차트가 있습니다.',
          '**건강 데이터를 휴대폰에 두고 싶은 분.** 개발자는 아무것도 업로드되지 않는다고 하며, 단서는 개인정보 섹션에 있습니다.',
          '**회복 기반 계획을 원하는 러너.** 레이스 계획과 운동 제안은 Pro 기능입니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '확인하지 못한 내용',
        items: [
          '**실사용 품질.** PromptQuorum은 앱을 실행해 보지 않았으므로 기분의 정확도, 답변 품질, 배터리 사용량은 평가하지 않았습니다.',
          '**기기 내 AI 주장.** 웹사이트는 Apple Intelligence를 언급하고 방침은 AI가 기기에서 실행된다고만 하며 모델 세부 정보는 없습니다. 어느 것도 코드로 확인할 수 없습니다.',
          '**소스 코드와 라이선스.** 앱은 비공개 소스이며 공개 저장소를 찾지 못했습니다.',
          '**트래픽.** PromptQuorum은 네트워크 트래픽을 점검하지 않았으므로 방침에 설명된 분석은 독립적으로 검증되지 않았습니다.',
          '**이용 실적.** 앱은 출시 2주째이고 App Store 평점이 아직 없으며 지원에 대한 약속도 제시하지 않습니다.',
          '**의료 용도.** 개발자는 의료기기가 아니며 진단하지 않는다고 밝힙니다. 지속적인 변화는 의사와 상담하십시오.',
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: '경쟁 앱과 대안',
        content: [
          '디렉터리에는 다른 Apple Health 앱이 없습니다. 다음은 같은 개인 비서 카테고리에서 가장 가까운 iPhone 항목이며, 어느 것도 건강 데이터를 읽지 않습니다.',
        ],
        columns: ['앱', '플랫폼', '가격 / 라이선스', '주요 차이'],
        rows: [
          { '앱': '[Nekoni](/ko/power-local-llm/nekoni-review)', '플랫폼': 'macOS, Linux, iOS, 웹', '가격 / 라이선스': '무료 / MIT', '주요 차이': '내 컴퓨터에서 실행되는 오픈 소스 개인 에이전트를 iPhone에서 채팅으로 사용' },
          { '앱': '[On-Device AI Translator](/ko/power-local-llm/on-device-ai-translator-review)', '플랫폼': 'iOS', '가격 / 라이선스': '무료 + 앱 내 구입 / 비공개 소스', '주요 차이': '번역 모델을 기기에서 실행하는 비공개 소스 iPhone 앱' },
          { '앱': '[MemoryAI](/ko/power-local-llm/memoryai-review)', '플랫폼': 'iOS, Android', '가격 / 라이선스': '무료 / 비공개 소스', '주요 차이': '수정 가능한 메모리를 갖춘 오프라인 채팅, 건강 데이터와는 무관' },
        ],
        note: '경쟁 앱의 세부 정보는 자주 바뀝니다. 각 앱의 현재 가격, 라이선스, 플랫폼은 해당 앱의 페이지에서 확인하십시오.',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Apple Watch가 필요합니까?',
            a: '아니요. 웹사이트는 워치를 선택 사항이라고 설명하며, 워치는 수면과 심장 데이터를 더하고 워치 앱, 컴플리케이션, 손목으로 보내는 운동 계획을 가능하게 합니다.',
          },
          {
            q: 'Apple Intelligence 없이도 Pajdo가 작동합니까?',
            a: '일부만 작동합니다. 웹사이트에 따르면 Apple Intelligence가 없으면 생성된 답변 대신 미리 작성된 답변을 사용하며, 기분과 차트는 일반 코드가 계산합니다.',
          },
          {
            q: '어떤 언어를 지원합니까?',
            a: '웹사이트와 페이지에는 영어, 독일어, 프랑스어, 스페인어, 포르투갈어, 일본어, 한국어, 중국어를 포함한 17개 언어가 나와 있으며, 앱은 iPhone에 설정된 언어를 따릅니다. 아랍어는 포함되어 있지 않습니다.',
          },
          {
            q: 'Pajdo는 의료 앱입니까?',
            a: '아니요. 개발자는 측정값을 설명할 뿐 진단하지 않는 웰니스 도우미라고 설명하며, 페이지는 12+로 분류합니다.',
          },
          {
            q: 'Castmates, Lyonesse와 같은 개발자의 앱입니까?',
            a: '네. 2026년 10월 26일 개발자가 PromptQuorum에 보낸 이메일과 동일한 App Store 판매자명에 따릅니다. 웹사이트 자체는 다른 앱을 언급하지 않습니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Pajdo는 질문 응답이 Apple Intelligence를 통해 iPhone에서 실행된다고 밝히는 무료 Apple Health 도우미로, 기분 8종, 모든 결과 뒤의 차트, 운동 계획용 Pro 도구를 제공합니다. 반면 비공개 소스이고, 출시 2주째이며, 평점이 없고, iOS 26이 필요하며, 기기 내 실행 주장은 확인할 수 없습니다. 수치를 설명받고 싶고 새롭고 비공개인 앱을 받아들일 수 있는 Apple Watch 사용자에게 적합합니다. 오픈 소스 코드를 원하는 분은 [Nekoni](/ko/power-local-llm/nekoni-review)를 비교해 볼 수 있고, 같은 개발자의 다른 앱이 궁금한 분은 [Lyonesse 리뷰](/ko/power-local-llm/lyonesse-review)를 읽어 보십시오.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Pajdo](https://apps.apple.com/us/app/pajdo-health-fitness-buddy/id6811650058) — 가격, 버전, 요구 사항, 연령 등급, 앱 내 구입. 2026년 10월 26일 확인.',
          '[Pajdo 웹사이트](https://get-pajdo.app) — 기능, 플랜, AI 및 개인정보 주장, 언어. 2026년 10월 26일 확인.',
          '[Pajdo 개인정보 처리방침](https://get-pajdo.app/privacy/) — 운영 주체, 데이터 처리, 분석, 보관 기간. 2026년 10월 25일 업데이트.',
          '[Pajdo 보도 자료 페이지](https://get-pajdo.app/press/) — 개발자 소재지와 보도 자료 키트.',
          '개발자가 PromptQuorum에 보낸 이메일, 2026년 10월 26일 — Castmates, Lyonesse와 같은 개발자임을 확인. 독립적으로 검증되지 않음.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Lyonesse 리뷰](/ko/power-local-llm/lyonesse-review) — 같은 개발자의 기기 내 음성 받아쓰기 및 문서 채팅 앱.',
          '[Castmates 리뷰](/ko/power-local-llm/castmates-review) — 같은 개발자의 오프라인 AI 캐릭터 채팅 앱.',
          '[MemoryAI 리뷰](/ko/power-local-llm/memoryai-review) — 수정 가능한 메모리를 갖춘 무료 오프라인 채팅 앱.',
          '[2026년 iPhone용 로컬 LLM 앱 추천](/ko/power-local-llm/best-local-llm-apps-iphone-2026) — iPhone용 더 넓은 비교.',
        ],
      },
    },
  },
}
