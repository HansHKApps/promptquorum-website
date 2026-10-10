// Oscilla Review: Free On-Device AI Chat for iPhone
// Slug: oscilla-review
// Companion to: locally-ai-review, private-llm-review, enclave-ai-review-2026, pocketpal-ai-review

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-en.webp',
    title: 'Oscilla Review: Free On-Device AI Chat for iPhone',
    seoTitle: 'Oscilla Review: Free On-Device AI Chat for iPhone',
    intro:
      'Oscilla is a free iPhone app that downloads open AI models and runs them on the phone itself, with voice conversations, built-in memory, optional web search, and file and image analysis. This review covers what the App Store listing and developer site document, what they leave out, and how Oscilla compares to other iOS local-AI apps.',
    metaDescription:
      'Oscilla review: free iPhone app that runs 40+ open models (Gemma 4, Qwen 3, Granite) on-device with voice, memory and image input. Requirements, privacy label, limits, and alternatives.',
    twitterDescription:
      'Oscilla review: a free iOS app running open models on-device. Models, iOS 26 requirement, privacy label, closed-source status, and how it compares to Locally AI and Private LLM.',
    audience:
      'iPhone owners on iOS 26 who want a free app that runs open models offline, with voice and memory — covers models, requirements, privacy, limits, and how Oscilla compares to other iOS local-AI apps.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Oscilla review',
    targetKeywords: [
      'oscilla review',
      'oscilla local ai',
      'oscilla ai iphone',
      'run llm on iphone offline',
      'on-device ai app ios',
      'private ai iphone app',
      'gemma 4 iphone app',
      'free local ai app iphone',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscilla is a free, closed-source iPhone app that runs downloadable open models entirely on the device, with real-time voice, built-in memory, web search, and file and image analysis.** Its App Store listing names models such as Gemma 4, Qwen 3, Granite 4.1, SmolLM3, MiniCPM-V 4.6 and Ministral 3, requires iOS 26.0 or later, and carries Apple\'s "Data Not Collected" privacy label. This review covers version 1.2026.05 and is based on the public listing and website, not hands-on device testing.',
    quickAnswerTop: {
      en: {
        question: 'Is Oscilla worth installing on an iPhone?',
        answer:
          'Yes, if you run iOS 26 and want a free way to try many open models offline, including vision and voice. Skip it if you need open source, a Mac or Android version, or a published inference engine: none of those is documented. Locally AI and Private LLM are the closest iOS alternatives.',
        bullets: [
          'Free on the App Store, with no in-app purchases shown on the listing.',
          'Runs 40+ open models on-device; the listing names Gemma 4, Qwen 3 and MiniCPM-V 4.6.',
          'Voice conversations, built-in memory, web search, and file and image analysis.',
          'Needs iOS 26.0 or later; the compatibility panel lists iPhone only.',
          'Closed source; the privacy label says the developer collects no data.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'Get Oscilla', anchor: 'get-it' },
      { label: 'Oscilla at a Glance', anchor: 'at-a-glance' },
      { label: 'What Oscilla Is', anchor: 'what-is-oscilla' },
      { label: 'How to Get Started', anchor: 'how-to-get-started' },
      { label: 'Features and Models', anchor: 'features' },
      { label: 'Device Requirements', anchor: 'requirements' },
      { label: 'Privacy and Data', anchor: 'privacy' },
      { label: 'Trade-Offs: Benefits vs. Limitations', anchor: 'tradeoffs' },
      { label: 'Oscilla vs. Alternatives', anchor: 'vs-alternatives' },
      { label: 'Who Should Use Oscilla', anchor: 'who-should-use' },
      { label: 'Who Should Not Use Oscilla', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Oscilla, from Martechia LLC, is a free iPhone app that runs open AI models fully on-device with voice, memory, web search and image analysis, and its listing says the developer collects no data.',
          },
          {
            type: 'plain-terms',
            text: 'Think of it as a model library on your phone: you pick an open model, download it once, and chat with it without a cloud server, but you cannot inspect the code behind it.',
          },
        ],
        items: [
          'Version reviewed: 1.2026.05, as shown on the [App Store listing](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356), last updated May 21.',
          'Price: free, with no in-app purchases shown on the listing.',
          'Models: 40+ downloadable open models, from 350M to 8B parameters in the examples the listing names.',
          'Platform: iPhone with iOS 26.0 or later; Mac and iPad are mentioned in the description but not in the compatibility panel.',
          'Openness: closed source, and the developer site is a "coming soon" page for a V2 release at the time of review.',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'Get Oscilla',
        content: [
          '**Oscilla is distributed through the Apple App Store only.** The download is 46.7 MB; models are downloaded separately inside the app.',
          'This review is a companion to PromptQuorum\'s [Local LLM Software Directory](/directory), which lists Oscilla alongside other on-device and local AI tools.',
        ],
        columns: ['Channel', 'Get It'],
        rows: [
          {
            'Channel': 'Apple App Store (iPhone)',
            'Get It': '[Oscilla - Local AI on the App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            'Channel': 'Developer website',
            'Get It': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: 'The listing\'s description says the app runs on "iPhone, iPad, and Mac", but its compatibility panel lists iPhone only. Check your device on the App Store page before installing.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla at a Glance',
        columns: ['Attribute', 'Oscilla'],
        rows: [
          { 'Attribute': 'Platform', 'Oscilla': 'iPhone (iOS 26.0+)' },
          { 'Attribute': 'Price', 'Oscilla': 'Free' },
          { 'Attribute': 'License', 'Oscilla': 'Closed source' },
          { 'Attribute': 'Runs fully offline', 'Oscilla': 'Yes, per the listing: "entirely on your iPhone"' },
          { 'Attribute': 'In-app model downloads', 'Oscilla': 'Yes, 40+ models' },
          { 'Attribute': 'Import your own models', 'Oscilla': 'Not stated' },
          { 'Attribute': 'Image input', 'Oscilla': 'Yes, file and image analysis (e.g. MiniCPM-V 4.6)' },
          { 'Attribute': 'Voice input / output', 'Oscilla': 'Yes, real-time voice conversations' },
        ],
        note: 'Attributes follow the mobile-chat comparison used in the Local LLM Software Directory. "Not stated" means the listing and website do not mention the feature, not that it was tested and found missing.',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'What Oscilla Is',
        content: [
          '**Oscilla is a chat app with its own on-device model runtime, not a front end for a server.** The listing describes it as "local AI for Apple devices" and says it runs models "entirely" on the device with no cloud dependency.',
          'It is published by Matthew David Fusco under Martechia LLC (doing business as Oscilla). The inference runtime is not named in any public source, so this review does not state whether it uses MLX, llama.cpp or Core ML.',
          'This review draws on the App Store listing and oscilla.ai. It does not include hands-on testing, so speed, battery use and answer quality are not rated here.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'How to Get Started',
        content: [
          '**Setup is an App Store install followed by a model download.** The listing does not describe the first-run flow, so the steps below follow what it documents.',
        ],
        numberedItems: [
          {
            title: 'Check your iOS version',
            whyItMatters: 'The listing requires iOS 26.0 or later, so older iPhones that cannot update will not install it.',
          },
          {
            title: 'Install Oscilla',
            whyItMatters: 'Get it from the [App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356); the app itself is under 50 MB.',
          },
          {
            title: 'Download a model',
            whyItMatters: 'Pick a small model first, since the listing names models from 350M to 8B parameters and a bigger model needs more free storage and memory.',
          },
          {
            title: 'Start chatting',
            whyItMatters: 'Type, talk with the voice mode, or attach a file or image; memory and web search are built into the app.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Features and Models',
        content: [
          '**Oscilla\'s pitch is breadth: many models plus voice, memory and search in one free app.** Everything below comes from the App Store listing and developer site.',
        ],
        items: [
          '**40+ models.** Recent updates add Nvidia Nemotron Mini 4B, IBM Granite 4.1 (3B and 8B), LFM 2.5 (350M, 1.2B Instruct, 450M VL) and OpenBMB MiniCPM-V 4.6; the listing also names Gemma 4, Qwen 3, SmolLM3 and Ministral 3.',
          '**Real-time voice.** Spoken conversations run locally, per the listing.',
          '**Built-in memory.** The app keeps context about you across chats; the listing does not say where that memory is stored beyond "on your device".',
          '**Web search.** Listed as a feature; the listing does not say how a search request is made, so assume it needs a network connection.',
          '**File and image analysis.** Attach documents or photos; vision-capable models such as MiniCPM-V 4.6 handle images.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Device Requirements',
        content: [
          '**Oscilla requires iOS 26.0 or later and is listed for iPhone.** The App Store gives no RAM figure, so the practical limit is how large a model your iPhone can hold in memory.',
          'Expect small models (350M to 4B parameters) to run on most supported iPhones and the 8B-class models to need a recent, higher-memory device. This is a general rule for on-device models, not a figure from the listing.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacy and Data',
        content: [
          '**The App Store privacy label reads "The developer does not collect any data from this app."** The listing and website describe the app as private by design, with conversations staying on the device.',
          'Because the app is closed source and this review did not inspect network traffic, the claim cannot be independently audited here. The web search feature implies at least some network use when it is active; the listing does not detail it. Apple notes that privacy labels are self-reported by the developer.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Trade-Offs: Benefits vs. Limitations',
        columns: ['Benefit', 'What it means in real use', 'Limitation / caveat'],
        rows: [
          {
            'Benefit': 'Free with a wide model list',
            'What it means in real use': 'You can try Gemma, Qwen, Granite and vision models without paying.',
            'Limitation / caveat': 'Pricing beyond today\'s free listing is not documented, and the V2 site page gives no pricing.',
          },
          {
            'Benefit': 'Voice, memory and search built in',
            'What it means in real use': 'One app covers spoken chat and persistent context without extra setup.',
            'Limitation / caveat': 'The listing does not explain how memory is stored or how web search is performed.',
          },
          {
            'Benefit': 'Runs offline',
            'What it means in real use': 'Chats stay on the phone once a model is downloaded.',
            'Limitation / caveat': 'Model size is capped by iPhone memory; large models will be slow or unavailable.',
          },
          {
            'Benefit': 'Small app download',
            'What it means in real use': 'The app is 46.7 MB, with models fetched as you need them.',
            'Limitation / caveat': 'Each model is a separate multi-gigabyte download for the larger ones.',
          },
          {
            'Benefit': 'Privacy label with no data collected',
            'What it means in real use': 'Apple\'s label lists no data collected by the developer.',
            'Limitation / caveat': 'Closed source and self-reported; no engine, licence or audit is published.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla vs. Alternatives',
        columns: ['App', 'Platforms', 'Price and license', 'Model flexibility', 'Key difference'],
        rows: [
          {
            'App': 'Oscilla',
            'Platforms': 'iPhone',
            'Price and license': 'Free, closed source',
            'Model flexibility': '40+ downloadable open models',
            'Key difference': 'Voice, memory and search in one free app; engine not disclosed',
          },
          {
            'App': '[Locally AI](/power-local-llm/locally-ai-review)',
            'Platforms': 'iOS, Mac',
            'Price and license': 'Freemium, closed source',
            'Model flexibility': 'Open models downloaded in-app',
            'Key difference': 'Also runs on Mac and names MLX as its runtime; includes voice and image input',
          },
          {
            'App': '[Private LLM](/power-local-llm/private-llm-review)',
            'Platforms': 'iOS, Mac',
            'Price and license': 'Paid, closed source',
            'Model flexibility': 'Models downloaded in-app',
            'Key difference': 'Paid app that also runs on Mac, with no voice mode listed in the directory',
          },
          {
            'App': '[Enclave AI](/power-local-llm/enclave-ai-review-2026)',
            'Platforms': 'iOS',
            'Price and license': 'Paid, closed source',
            'Model flexibility': 'Models downloaded in-app',
            'Key difference': 'iOS-only paid app with voice; no vision input listed in the directory',
          },
          {
            'App': '[PocketPal AI](/power-local-llm/pocketpal-ai-review)',
            'Platforms': 'iPhone, Android',
            'Price and license': 'Free, MIT',
            'Model flexibility': 'GGUF models you download',
            'Key difference': 'Open source, on Android too, and can import your own GGUF models',
          },
        ],
        note: 'Platform, price, and feature details for third-party apps change frequently. Verify current specifics on each app\'s own listing before deciding.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Who Should Use Oscilla',
        items: [
          '**iPhone users on iOS 26 who want to try many open models for free.** The catalogue is wide and the app is free.',
          '**People who want voice and memory in a local app.** Both are built in rather than add-ons.',
          '**Privacy-minded users comfortable with a closed-source app.** The privacy label lists no data collected, though it cannot be audited here.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Who Should Not Use Oscilla',
        items: [
          '**Anyone who needs open source.** The code is not public; try [PocketPal AI](/power-local-llm/pocketpal-ai-review) instead.',
          '**Users who cannot run iOS 26.** The listing requires iOS 26.0 or later.',
          '**Mac, iPad or Android users.** Only iPhone is confirmed in the compatibility panel; [Locally AI](/power-local-llm/locally-ai-review) also runs on Mac.',
          '**People who need to import their own models.** The listing does not mention it.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is Oscilla free?',
            a: 'The App Store listing shows it as free with no in-app purchases. Future pricing is not documented.',
          },
          {
            q: 'Who makes Oscilla?',
            a: 'Matthew David Fusco, publishing under Martechia LLC, which does business as Oscilla.',
          },
          {
            q: 'Does Oscilla work on iPad or Mac?',
            a: 'The description says it runs on iPhone, iPad and Mac, but the compatibility panel lists iPhone only. Confirm on the App Store with your device.',
          },
          {
            q: 'Which models does Oscilla offer?',
            a: 'The listing names Gemma 4, Qwen 3, SmolLM3, Ministral 3, Granite 4.1, LFM 2.5, Nemotron Mini 4B and MiniCPM-V 4.6, among 40+ in total.',
          },
          {
            q: 'What does the Oscilla website show?',
            a: 'At the time of review, [oscilla.ai](https://www.oscilla.ai) is a "coming soon" page for Oscilla V2 dated September 11, 2026, with no feature or pricing detail.',
          },
          {
            q: 'Is Oscilla open source?',
            a: 'No public repository or licence was found, so this review treats it as closed source.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Oscilla packs a wide model list, voice, memory and image input into a small free iPhone app, which makes it an easy app to try if your phone runs iOS 26.',
          'The catch is transparency. The runtime is unnamed, the code is closed, the website is a placeholder, and some details such as iPad and Mac support are inconsistent between the description and the compatibility panel. That is fine for casual experimenting and a poor basis for anything sensitive.',
          'Install it to see how its models feel on your phone. If you want open source or a disclosed engine, start with [PocketPal AI](/power-local-llm/pocketpal-ai-review) or [Locally AI](/power-local-llm/locally-ai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Oscilla - Local AI on the App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — version, price, size, requirements, models and privacy label.',
          '[oscilla.ai](https://www.oscilla.ai) — developer website, currently a V2 "coming soon" page.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Locally AI Review](/power-local-llm/locally-ai-review) — a freemium on-device app for iOS and Mac.',
          '[Private LLM Review](/power-local-llm/private-llm-review) — a paid on-device model app for iOS and Mac.',
          '[Enclave AI Review](/power-local-llm/enclave-ai-review-2026) — a paid iOS on-device assistant with voice.',
          '[PocketPal AI Review](/power-local-llm/pocketpal-ai-review) — the free, open-source GGUF chat client.',
          '[The Complete Local LLM Software Directory](/directory) — a broader directory of local-LLM tools across platforms.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-de.webp',
    title: 'Oscilla-Rezension: Kostenloser On-Device-KI-Chat für das iPhone',
    seoTitle: 'Oscilla-Rezension: Kostenloser KI-Chat fürs iPhone',
    intro:
      'Oscilla ist eine kostenlose iPhone-App, die offene KI-Modelle herunterlädt und direkt auf dem Smartphone ausführt, mit Sprachunterhaltungen, integriertem Gedächtnis, optionaler Websuche sowie Datei- und Bildanalyse. Diese Rezension beschreibt, was der App-Store-Eintrag und die Entwickler-Website dokumentieren, was sie auslassen und wie Oscilla im Vergleich zu anderen lokalen KI-Apps für iOS abschneidet.',
    metaDescription:
      'Oscilla-Rezension: kostenlose iPhone-App, die über 40 offene Modelle (Gemma 4, Qwen 3, Granite) auf dem Gerät ausführt, mit Sprache, Gedächtnis und Bildeingabe. Anforderungen, Datenschutzangaben, Grenzen und Alternativen.',
    twitterDescription:
      'Oscilla-Rezension: eine kostenlose iOS-App, die offene Modelle auf dem Gerät ausführt. Modelle, iOS-26-Voraussetzung, Datenschutzangaben, Closed-Source-Status und Vergleich mit Locally AI und Private LLM.',
    audience:
      'iPhone-Besitzer mit iOS 26, die eine kostenlose App suchen, die offene Modelle offline mit Sprache und Gedächtnis ausführt — behandelt Modelle, Anforderungen, Datenschutz, Grenzen und den Vergleich von Oscilla mit anderen lokalen KI-Apps für iOS.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Oscilla Rezension',
    targetKeywords: [
      'oscilla test',
      'oscilla lokale ki',
      'oscilla ki iphone',
      'llm offline auf dem iphone nutzen',
      'on-device ki app ios',
      'private ki app iphone',
      'gemma 4 iphone app',
      'kostenlose lokale ki app iphone',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscilla ist eine kostenlose, nicht quelloffene iPhone-App, die herunterladbare offene Modelle vollständig auf dem Gerät ausführt, mit Echtzeit-Sprache, integriertem Gedächtnis, Websuche sowie Datei- und Bildanalyse.** Der App-Store-Eintrag nennt Modelle wie Gemma 4, Qwen 3, Granite 4.1, SmolLM3, MiniCPM-V 4.6 und Ministral 3, setzt iOS 26.0 oder neuer voraus und trägt Apples Datenschutzangabe „Keine Daten erhoben". Diese Rezension behandelt Version 1.2026.05 und beruht auf dem öffentlichen Eintrag und der Website, nicht auf praktischen Tests auf einem Gerät.',
    quickAnswerTop: {
      de: {
        question: 'Lohnt sich die Installation von Oscilla auf dem iPhone?',
        answer:
          'Ja, wenn Sie iOS 26 nutzen und viele offene Modelle kostenlos offline ausprobieren möchten, auch mit Bildverständnis und Sprache. Verzichten Sie darauf, wenn Sie Open Source, eine Mac- oder Android-Version oder eine dokumentierte Inferenz-Engine brauchen: Nichts davon ist dokumentiert. Locally AI und Private LLM sind die nächsten iOS-Alternativen.',
        bullets: [
          'Kostenlos im App Store, im Eintrag sind keine In-App-Käufe angezeigt.',
          'Führt über 40 offene Modelle auf dem Gerät aus; der Eintrag nennt Gemma 4, Qwen 3 und MiniCPM-V 4.6.',
          'Sprachunterhaltungen, integriertes Gedächtnis, Websuche sowie Datei- und Bildanalyse.',
          'Benötigt iOS 26.0 oder neuer; das Kompatibilitätsfeld listet nur das iPhone.',
          'Nicht quelloffen; laut Datenschutzangabe erhebt der Entwickler keine Daten.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Oscilla herunterladen', anchor: 'get-it' },
      { label: 'Oscilla im Überblick', anchor: 'at-a-glance' },
      { label: 'Was Oscilla ist', anchor: 'what-is-oscilla' },
      { label: 'Erste Schritte', anchor: 'how-to-get-started' },
      { label: 'Funktionen und Modelle', anchor: 'features' },
      { label: 'Geräteanforderungen', anchor: 'requirements' },
      { label: 'Datenschutz und Daten', anchor: 'privacy' },
      { label: 'Abwägungen: Vorteile vs. Einschränkungen', anchor: 'tradeoffs' },
      { label: 'Oscilla vs. Alternativen', anchor: 'vs-alternatives' },
      { label: 'Wer Oscilla nutzen sollte', anchor: 'who-should-use' },
      { label: 'Wer Oscilla nicht nutzen sollte', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Oscilla von Martechia LLC ist eine kostenlose iPhone-App, die offene KI-Modelle vollständig auf dem Gerät ausführt, mit Sprache, Gedächtnis, Websuche und Bildanalyse; laut Eintrag erhebt der Entwickler keine Daten.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie es sich als Modellbibliothek auf Ihrem Smartphone vor: Sie wählen ein offenes Modell, laden es einmal herunter und chatten ohne Cloud-Server damit, können den Code dahinter aber nicht einsehen.',
          },
        ],
        items: [
          'Getestete Version: 1.2026.05, wie im [App-Store-Eintrag](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) angezeigt, zuletzt aktualisiert am 21. Mai.',
          'Preis: kostenlos, im Eintrag sind keine In-App-Käufe angezeigt.',
          'Modelle: über 40 herunterladbare offene Modelle, in den im Eintrag genannten Beispielen von 350 Mio. bis 8 Mrd. Parametern.',
          'Plattform: iPhone mit iOS 26.0 oder neuer; Mac und iPad werden in der Beschreibung erwähnt, nicht aber im Kompatibilitätsfeld.',
          'Offenheit: nicht quelloffen, und die Entwickler-Website ist zum Zeitpunkt der Rezension eine „Coming soon"-Seite für eine V2.',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'Oscilla herunterladen',
        content: [
          '**Oscilla wird nur über den Apple App Store vertrieben.** Der Download umfasst 46,7 MB; Modelle werden separat in der App heruntergeladen.',
          'Diese Rezension ist ein Begleitartikel zum [Verzeichnis lokaler LLM-Software](/de/directory) von PromptQuorum, das Oscilla neben anderen On-Device- und lokalen KI-Tools listet.',
        ],
        columns: ['Kanal', 'Download'],
        rows: [
          {
            'Kanal': 'Apple App Store (iPhone)',
            'Download': '[Oscilla - Local AI im App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            'Kanal': 'Website des Entwicklers',
            'Download': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: 'Die Beschreibung im Eintrag sagt, die App laufe auf „iPhone, iPad und Mac", das Kompatibilitätsfeld listet jedoch nur das iPhone. Prüfen Sie Ihr Gerät auf der App-Store-Seite, bevor Sie installieren.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla im Überblick',
        columns: ['Merkmal', 'Oscilla'],
        rows: [
          { 'Merkmal': 'Plattform', 'Oscilla': 'iPhone (iOS 26.0+)' },
          { 'Merkmal': 'Preis', 'Oscilla': 'Kostenlos' },
          { 'Merkmal': 'Lizenz', 'Oscilla': 'Closed Source' },
          { 'Merkmal': 'Läuft vollständig offline', 'Oscilla': 'Ja, laut Eintrag: „entirely on your iPhone"' },
          { 'Merkmal': 'Modell-Downloads in der App', 'Oscilla': 'Ja, über 40 Modelle' },
          { 'Merkmal': 'Eigene Modelle importieren', 'Oscilla': 'Nicht angegeben' },
          { 'Merkmal': 'Bildeingabe', 'Oscilla': 'Ja, Datei- und Bildanalyse (z. B. MiniCPM-V 4.6)' },
          { 'Merkmal': 'Spracheingabe / -ausgabe', 'Oscilla': 'Ja, Sprachunterhaltungen in Echtzeit' },
        ],
        note: 'Die Merkmale folgen dem Vergleichsschema für mobile Chat-Apps im Verzeichnis lokaler LLM-Software. "Nicht angegeben" bedeutet, dass Eintrag und Website die Funktion nicht erwähnen, nicht dass sie getestet und als fehlend befunden wurde.',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'Was Oscilla ist',
        content: [
          '**Oscilla ist eine Chat-App mit eigener On-Device-Modell-Laufzeit, kein Frontend für einen Server.** Der Eintrag beschreibt sie als „local AI for Apple devices" und sagt, sie führe Modelle „entirely" auf dem Gerät aus, ohne Cloud-Abhängigkeit.',
          'Veröffentlicht wird sie von Matthew David Fusco unter Martechia LLC (handelnd als Oscilla). Die Inferenz-Laufzeit wird in keiner öffentlichen Quelle genannt, daher macht diese Rezension keine Angabe dazu, ob MLX, llama.cpp oder Core ML zum Einsatz kommt.',
          'Diese Rezension stützt sich auf den App-Store-Eintrag und oscilla.ai. Praktische Tests auf einem Gerät sind nicht enthalten, daher werden Geschwindigkeit, Akkuverbrauch und Antwortqualität hier nicht bewertet.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Erste Schritte',
        content: [
          '**Die Einrichtung besteht aus einer Installation über den App Store und anschließend einem Modell-Download.** Der Eintrag beschreibt den ersten Start nicht, daher folgen die Schritte unten dem, was dokumentiert ist.',
        ],
        numberedItems: [
          {
            title: 'iOS-Version prüfen',
            whyItMatters: 'Der Eintrag setzt iOS 26.0 oder neuer voraus, ältere iPhones, die sich nicht aktualisieren lassen, können die App daher nicht installieren.',
          },
          {
            title: 'Oscilla installieren',
            whyItMatters: 'Laden Sie die App im [App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) herunter; die App selbst ist kleiner als 50 MB.',
          },
          {
            title: 'Ein Modell herunterladen',
            whyItMatters: 'Wählen Sie zuerst ein kleines Modell, denn der Eintrag nennt Modelle von 350 Mio. bis 8 Mrd. Parametern, und ein größeres Modell braucht mehr freien Speicher und Arbeitsspeicher.',
          },
          {
            title: 'Mit dem Chatten beginnen',
            whyItMatters: 'Tippen Sie, sprechen Sie im Sprachmodus oder hängen Sie eine Datei oder ein Bild an; Gedächtnis und Websuche sind in die App integriert.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funktionen und Modelle',
        content: [
          '**Oscillas Stärke ist die Bandbreite: viele Modelle sowie Sprache, Gedächtnis und Suche in einer kostenlosen App.** Alles Folgende stammt aus dem App-Store-Eintrag und der Entwickler-Website.',
        ],
        items: [
          '**Über 40 Modelle.** Neuere Updates ergänzen Nvidia Nemotron Mini 4B, IBM Granite 4.1 (3B und 8B), LFM 2.5 (350M, 1.2B Instruct, 450M VL) und OpenBMB MiniCPM-V 4.6; der Eintrag nennt außerdem Gemma 4, Qwen 3, SmolLM3 und Ministral 3.',
          '**Sprache in Echtzeit.** Gesprochene Unterhaltungen laufen laut Eintrag lokal.',
          '**Integriertes Gedächtnis.** Die App behält Kontext über Sie über mehrere Chats hinweg; wo dieses Gedächtnis gespeichert wird, nennt der Eintrag über „on your device" hinaus nicht.',
          '**Websuche.** Als Funktion gelistet; der Eintrag sagt nicht, wie eine Suchanfrage erfolgt, rechnen Sie daher mit einer erforderlichen Netzwerkverbindung.',
          '**Datei- und Bildanalyse.** Hängen Sie Dokumente oder Fotos an; bildfähige Modelle wie MiniCPM-V 4.6 verarbeiten Bilder.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Geräteanforderungen',
        content: [
          '**Oscilla setzt iOS 26.0 oder neuer voraus und ist für das iPhone gelistet.** Der App Store nennt keinen RAM-Wert, die praktische Grenze ist daher, wie groß ein Modell sein darf, das Ihr iPhone im Arbeitsspeicher halten kann.',
          'Rechnen Sie damit, dass kleine Modelle (350 Mio. bis 4 Mrd. Parameter) auf den meisten unterstützten iPhones laufen, während Modelle der 8-Mrd.-Klasse ein aktuelles Gerät mit mehr Arbeitsspeicher brauchen. Das ist eine allgemeine Faustregel für On-Device-Modelle, kein Wert aus dem Eintrag.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Datenschutz und Daten',
        content: [
          '**Die Datenschutzangabe im App Store lautet „The developer does not collect any data from this app."** Eintrag und Website beschreiben die App als datenschutzfreundlich konzipiert, die Unterhaltungen bleiben auf dem Gerät.',
          'Da die App nicht quelloffen ist und diese Rezension den Netzwerkverkehr nicht untersucht hat, lässt sich die Angabe hier nicht unabhängig prüfen. Die Websuche setzt zumindest bei Aktivierung eine gewisse Netzwerknutzung voraus; der Eintrag erläutert das nicht. Apple weist darauf hin, dass Datenschutzangaben vom Entwickler selbst gemeldet werden.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Abwägungen: Vorteile vs. Einschränkungen',
        columns: ['Vorteil', 'Bedeutung im Alltag', 'Einschränkung / Hinweis'],
        rows: [
          {
            'Vorteil': 'Kostenlos mit großer Modellauswahl',
            'Bedeutung im Alltag': 'Sie können Gemma, Qwen, Granite und Bildmodelle ausprobieren, ohne zu bezahlen.',
            'Einschränkung / Hinweis': 'Preise über den heutigen kostenlosen Eintrag hinaus sind nicht dokumentiert, und die V2-Seite nennt keine Preise.',
          },
          {
            'Vorteil': 'Sprache, Gedächtnis und Suche integriert',
            'Bedeutung im Alltag': 'Eine App deckt gesprochene Chats und dauerhaften Kontext ohne zusätzliche Einrichtung ab.',
            'Einschränkung / Hinweis': 'Der Eintrag erklärt nicht, wie das Gedächtnis gespeichert wird oder wie die Websuche funktioniert.',
          },
          {
            'Vorteil': 'Läuft offline',
            'Bedeutung im Alltag': 'Chats bleiben auf dem Smartphone, sobald ein Modell heruntergeladen ist.',
            'Einschränkung / Hinweis': 'Die Modellgröße wird durch den iPhone-Speicher begrenzt; große Modelle sind langsam oder nicht verfügbar.',
          },
          {
            'Vorteil': 'Kleiner App-Download',
            'Bedeutung im Alltag': 'Die App umfasst 46,7 MB, Modelle werden nach Bedarf nachgeladen.',
            'Einschränkung / Hinweis': 'Jedes Modell ist ein eigener Download, bei den größeren mehrere Gigabyte.',
          },
          {
            'Vorteil': 'Datenschutzangabe ohne erhobene Daten',
            'Bedeutung im Alltag': 'Apples Angabe führt keine vom Entwickler erhobenen Daten auf.',
            'Einschränkung / Hinweis': 'Nicht quelloffen und selbst gemeldet; weder Engine noch Lizenz noch Audit sind veröffentlicht.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla vs. Alternativen',
        columns: ['App', 'Plattformen', 'Preis und Lizenz', 'Modellauswahl', 'Wichtigster Unterschied'],
        rows: [
          {
            'App': 'Oscilla',
            'Plattformen': 'iPhone',
            'Preis und Lizenz': 'Kostenlos, Closed Source',
            'Modellauswahl': 'Über 40 herunterladbare offene Modelle',
            'Wichtigster Unterschied': 'Sprache, Gedächtnis und Suche in einer kostenlosen App; Engine nicht offengelegt',
          },
          {
            'App': '[Locally AI](/de/power-local-llm/locally-ai-review)',
            'Plattformen': 'iOS, Mac',
            'Preis und Lizenz': 'Freemium, Closed Source',
            'Modellauswahl': 'Offene Modelle, in der App heruntergeladen',
            'Wichtigster Unterschied': 'Läuft auch auf dem Mac und nennt MLX als Laufzeit; mit Sprach- und Bildeingabe',
          },
          {
            'App': '[Private LLM](/de/power-local-llm/private-llm-review)',
            'Plattformen': 'iOS, Mac',
            'Preis und Lizenz': 'Kostenpflichtig, Closed Source',
            'Modellauswahl': 'Modelle, in der App heruntergeladen',
            'Wichtigster Unterschied': 'Kostenpflichtige App, die auch auf dem Mac läuft, im Verzeichnis ohne Sprachmodus gelistet',
          },
          {
            'App': '[Enclave AI](/de/power-local-llm/enclave-ai-review-2026)',
            'Plattformen': 'iOS',
            'Preis und Lizenz': 'Kostenpflichtig, Closed Source',
            'Modellauswahl': 'Modelle, in der App heruntergeladen',
            'Wichtigster Unterschied': 'Kostenpflichtige App nur für iOS mit Sprache; im Verzeichnis ohne Bildeingabe gelistet',
          },
          {
            'App': '[PocketPal AI](/de/power-local-llm/pocketpal-ai-review)',
            'Plattformen': 'iPhone, Android',
            'Preis und Lizenz': 'Kostenlos, MIT',
            'Modellauswahl': 'GGUF-Modelle, die Sie herunterladen',
            'Wichtigster Unterschied': 'Quelloffen, auch für Android und mit Import eigener GGUF-Modelle',
          },
        ],
        note: 'Angaben zu Plattformen, Preisen und Funktionen von Apps Dritter ändern sich häufig. Prüfen Sie die aktuellen Details im jeweiligen App-Eintrag, bevor Sie sich entscheiden.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Wer Oscilla nutzen sollte',
        items: [
          '**iPhone-Nutzer mit iOS 26, die viele offene Modelle kostenlos ausprobieren möchten.** Das Angebot ist breit und die App kostenlos.',
          '**Menschen, die Sprache und Gedächtnis in einer lokalen App wollen.** Beides ist integriert statt nachgerüstet.',
          '**Datenschutzbewusste Nutzer, die mit einer nicht quelloffenen App zurechtkommen.** Die Datenschutzangabe listet keine erhobenen Daten, lässt sich hier aber nicht prüfen.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Wer Oscilla nicht nutzen sollte',
        items: [
          '**Alle, die Open Source brauchen.** Der Code ist nicht öffentlich; probieren Sie stattdessen [PocketPal AI](/de/power-local-llm/pocketpal-ai-review).',
          '**Nutzer, die iOS 26 nicht ausführen können.** Der Eintrag setzt iOS 26.0 oder neuer voraus.',
          '**Nutzer von Mac, iPad oder Android.** Im Kompatibilitätsfeld ist nur das iPhone bestätigt; [Locally AI](/de/power-local-llm/locally-ai-review) läuft auch auf dem Mac.',
          '**Menschen, die eigene Modelle importieren müssen.** Der Eintrag erwähnt das nicht.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist Oscilla kostenlos?',
            a: 'Der App-Store-Eintrag zeigt sie als kostenlos und ohne In-App-Käufe. Künftige Preise sind nicht dokumentiert.',
          },
          {
            q: 'Wer entwickelt Oscilla?',
            a: 'Matthew David Fusco, der unter Martechia LLC veröffentlicht, die als Oscilla firmiert.',
          },
          {
            q: 'Läuft Oscilla auf dem iPad oder dem Mac?',
            a: 'Die Beschreibung sagt, sie laufe auf iPhone, iPad und Mac, das Kompatibilitätsfeld listet aber nur das iPhone. Prüfen Sie dies im App Store mit Ihrem Gerät.',
          },
          {
            q: 'Welche Modelle bietet Oscilla?',
            a: 'Der Eintrag nennt Gemma 4, Qwen 3, SmolLM3, Ministral 3, Granite 4.1, LFM 2.5, Nemotron Mini 4B und MiniCPM-V 4.6, insgesamt über 40.',
          },
          {
            q: 'Was zeigt die Oscilla-Website?',
            a: 'Zum Zeitpunkt der Rezension ist [oscilla.ai](https://www.oscilla.ai) eine „Coming soon"-Seite für Oscilla V2 mit dem Datum 11. September 2026, ohne Angaben zu Funktionen oder Preisen.',
          },
          {
            q: 'Ist Oscilla quelloffen?',
            a: 'Es wurde weder ein öffentliches Repository noch eine Lizenz gefunden, daher behandelt diese Rezension die App als Closed Source.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content: [
          'Oscilla bündelt eine große Modellauswahl, Sprache, Gedächtnis und Bildeingabe in einer kleinen, kostenlosen iPhone-App und lässt sich daher leicht ausprobieren, sofern Ihr Smartphone iOS 26 ausführt.',
          'Der Haken ist die Transparenz. Die Laufzeit bleibt ungenannt, der Code ist geschlossen, die Website ist ein Platzhalter, und einige Angaben wie die Unterstützung von iPad und Mac widersprechen sich zwischen Beschreibung und Kompatibilitätsfeld. Für gelegentliches Experimentieren ist das in Ordnung, für alles Sensible eine schlechte Grundlage.',
          'Installieren Sie die App, um zu sehen, wie sich ihre Modelle auf Ihrem Smartphone anfühlen. Wenn Sie Open Source oder eine offengelegte Engine wollen, beginnen Sie mit [PocketPal AI](/de/power-local-llm/pocketpal-ai-review) oder [Locally AI](/de/power-local-llm/locally-ai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Oscilla - Local AI im App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — Version, Preis, Größe, Anforderungen, Modelle und Datenschutzangabe.',
          '[oscilla.ai](https://www.oscilla.ai) — Website des Entwicklers, derzeit eine „Coming soon"-Seite für V2.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Locally-AI-Rezension](/de/power-local-llm/locally-ai-review) — eine Freemium-On-Device-App für iOS und Mac.',
          '[Private-LLM-Rezension](/de/power-local-llm/private-llm-review) — eine kostenpflichtige On-Device-Modell-App für iOS und Mac.',
          '[Enclave-AI-Rezension](/de/power-local-llm/enclave-ai-review-2026) — ein kostenpflichtiger iOS-On-Device-Assistent mit Sprache.',
          '[PocketPal-AI-Rezension](/de/power-local-llm/pocketpal-ai-review) — der kostenlose, quelloffene GGUF-Chat-Client.',
          '[Das vollständige Verzeichnis lokaler LLM-Software](/de/directory) — ein breiteres Verzeichnis lokaler LLM-Tools über alle Plattformen hinweg.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-fr.webp',
    title: 'Avis Oscilla: chat IA gratuit sur l\'appareil pour iPhone',
    seoTitle: 'Avis Oscilla: chat IA gratuit sur l\'appareil pour iPhone',
    intro:
      'Oscilla est une application iPhone gratuite qui télécharge des modèles d\'IA ouverts et les exécute sur le téléphone lui-même, avec conversations vocales, mémoire intégrée, recherche web facultative et analyse de fichiers et d\'images. Cet avis couvre ce que documentent la fiche App Store et le site du développeur, ce qu\'ils passent sous silence, et la comparaison d\'Oscilla avec d\'autres applications d\'IA locale pour iOS.',
    metaDescription:
      'Avis Oscilla : application iPhone gratuite qui exécute plus de 40 modèles ouverts (Gemma 4, Qwen 3, Granite) sur l\'appareil, avec voix, mémoire et image. Configuration requise, confidentialité, limites et alternatives.',
    twitterDescription:
      'Avis Oscilla : une application iOS gratuite qui exécute des modèles ouverts sur l\'appareil. Modèles, prérequis iOS 26, déclaration de confidentialité, code fermé et comparaison avec Locally AI et Private LLM.',
    audience:
      'Propriétaires d\'iPhone sous iOS 26 qui veulent une application gratuite exécutant des modèles ouverts hors ligne, avec voix et mémoire — couvre les modèles, la configuration requise, la confidentialité, les limites et la comparaison d\'Oscilla avec d\'autres applications d\'IA locale pour iOS.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'avis Oscilla',
    targetKeywords: [
      'avis oscilla',
      'oscilla ia locale',
      'oscilla ia iphone',
      'faire tourner un llm sur iphone hors ligne',
      'application ia sur l\'appareil ios',
      'application ia privée iphone',
      'application gemma 4 iphone',
      'application ia locale gratuite iphone',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscilla est une application iPhone gratuite et à code source fermé qui exécute des modèles ouverts téléchargeables entièrement sur l\'appareil, avec voix en temps réel, mémoire intégrée, recherche web et analyse de fichiers et d\'images.** Sa fiche App Store cite des modèles comme Gemma 4, Qwen 3, Granite 4.1, SmolLM3, MiniCPM-V 4.6 et Ministral 3, exige iOS 26.0 ou ultérieur et affiche l\'étiquette de confidentialité « Données non collectées » d\'Apple. Cet avis porte sur la version 1.2026.05 et s\'appuie sur la fiche publique et le site web, pas sur des tests pratiques sur un appareil.',
    quickAnswerTop: {
      fr: {
        question: 'Oscilla vaut-elle d\'être installée sur un iPhone ?',
        answer:
          'Oui, si vous êtes sous iOS 26 et cherchez un moyen gratuit d\'essayer de nombreux modèles ouverts hors ligne, y compris la vision et la voix. Passez votre chemin si vous avez besoin d\'open source, d\'une version Mac ou Android, ou d\'un moteur d\'inférence publié : rien de tout cela n\'est documenté. Locally AI et Private LLM sont les alternatives iOS les plus proches.',
        bullets: [
          'Gratuite sur l\'App Store, sans achat intégré indiqué sur la fiche.',
          'Exécute plus de 40 modèles ouverts sur l\'appareil ; la fiche cite Gemma 4, Qwen 3 et MiniCPM-V 4.6.',
          'Conversations vocales, mémoire intégrée, recherche web, et analyse de fichiers et d\'images.',
          'Nécessite iOS 26.0 ou ultérieur ; le panneau de compatibilité ne liste que l\'iPhone.',
          'Code source fermé ; l\'étiquette de confidentialité indique que le développeur ne collecte aucune donnée.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Obtenir Oscilla', anchor: 'get-it' },
      { label: 'Oscilla en bref', anchor: 'at-a-glance' },
      { label: 'Ce qu\'est Oscilla', anchor: 'what-is-oscilla' },
      { label: 'Comment commencer', anchor: 'how-to-get-started' },
      { label: 'Fonctionnalités et modèles', anchor: 'features' },
      { label: 'Configuration requise', anchor: 'requirements' },
      { label: 'Confidentialité et données', anchor: 'privacy' },
      { label: 'Compromis : avantages vs. limites', anchor: 'tradeoffs' },
      { label: 'Oscilla vs. alternatives', anchor: 'vs-alternatives' },
      { label: 'Qui devrait utiliser Oscilla', anchor: 'who-should-use' },
      { label: 'Qui ne devrait pas utiliser Oscilla', anchor: 'who-should-not-use' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Oscilla, de Martechia LLC, est une application iPhone gratuite qui exécute des modèles d\'IA ouverts entièrement sur l\'appareil, avec voix, mémoire, recherche web et analyse d\'images ; sa fiche indique que le développeur ne collecte aucune donnée.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez-la comme une bibliothèque de modèles dans votre téléphone : vous choisissez un modèle ouvert, vous le téléchargez une fois, puis vous discutez avec lui sans serveur cloud, mais vous ne pouvez pas inspecter le code qui le fait tourner.',
          },
        ],
        items: [
          'Version testée : 1.2026.05, telle qu\'affichée sur la [fiche App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356), dernière mise à jour le 21 mai.',
          'Prix : gratuite, sans achat intégré indiqué sur la fiche.',
          'Modèles : plus de 40 modèles ouverts téléchargeables, de 350M à 8B de paramètres dans les exemples cités par la fiche.',
          'Plateforme : iPhone sous iOS 26.0 ou ultérieur ; le Mac et l\'iPad sont mentionnés dans la description mais pas dans le panneau de compatibilité.',
          'Ouverture : code source fermé, et le site du développeur est une page « bientôt disponible » pour une version V2 au moment de l\'avis.',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'Obtenir Oscilla',
        content: [
          '**Oscilla n\'est distribuée que par l\'Apple App Store.** Le téléchargement pèse 46.7 Mo ; les modèles se téléchargent séparément dans l\'application.',
          'Cet avis est un complément au [répertoire des logiciels LLM locaux](/fr/directory) de PromptQuorum, qui recense Oscilla aux côtés d\'autres outils d\'IA locale et embarquée.',
        ],
        columns: ['Canal', 'Obtenir'],
        rows: [
          {
            'Canal': 'Apple App Store (iPhone)',
            'Obtenir': '[Oscilla - Local AI sur l\'App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            'Canal': 'Site du développeur',
            'Obtenir': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: 'La description de la fiche indique que l\'application fonctionne sur « iPhone, iPad et Mac », mais son panneau de compatibilité ne liste que l\'iPhone. Vérifiez votre appareil sur la page App Store avant d\'installer.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla en bref',
        columns: ['Attribut', 'Oscilla'],
        rows: [
          { 'Attribut': 'Plateforme', 'Oscilla': 'iPhone (iOS 26.0+)' },
          { 'Attribut': 'Prix', 'Oscilla': 'Gratuit' },
          { 'Attribut': 'Licence', 'Oscilla': 'Code source fermé' },
          { 'Attribut': 'Fonctionne hors ligne', 'Oscilla': 'Oui, selon la fiche : « entièrement sur votre iPhone »' },
          { 'Attribut': 'Téléchargement de modèles', 'Oscilla': 'Oui, plus de 40 modèles' },
          { 'Attribut': 'Import de vos modèles', 'Oscilla': 'Non précisé' },
          { 'Attribut': 'Entrée d\'image', 'Oscilla': 'Oui, fichiers et images (ex. MiniCPM-V 4.6)' },
          { 'Attribut': 'Entrée / sortie vocale', 'Oscilla': 'Oui, conversations vocales en temps réel' },
        ],
        note: 'Les attributs suivent la comparaison des applications de chat mobiles utilisée dans le répertoire des logiciels LLM locaux. « Non précisé » signifie que la fiche et le site web ne mentionnent pas la fonctionnalité, et non qu\'elle a été testée et jugée absente.',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'Ce qu\'est Oscilla',
        content: [
          '**Oscilla est une application de chat dotée de son propre environnement d\'exécution de modèles sur l\'appareil, pas une interface pour un serveur.** La fiche la décrit comme « de l\'IA locale pour les appareils Apple » et indique qu\'elle exécute les modèles « entièrement » sur l\'appareil, sans dépendance au cloud.',
          'Elle est publiée par Matthew David Fusco sous Martechia LLC (exerçant sous le nom Oscilla). Le moteur d\'inférence n\'est nommé dans aucune source publique ; cet avis n\'indique donc pas s\'il s\'agit de MLX, de llama.cpp ou de Core ML.',
          'Cet avis s\'appuie sur la fiche App Store et sur oscilla.ai. Il n\'inclut pas de tests pratiques ; la vitesse, la consommation de batterie et la qualité des réponses ne sont donc pas évaluées ici.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Comment commencer',
        content: [
          '**La mise en route consiste à installer l\'application depuis l\'App Store, puis à télécharger un modèle.** La fiche ne décrit pas le premier lancement ; les étapes ci-dessous suivent donc ce qu\'elle documente.',
        ],
        numberedItems: [
          {
            title: 'Vérifier votre version d\'iOS',
            whyItMatters: 'La fiche exige iOS 26.0 ou ultérieur ; les iPhone plus anciens qui ne peuvent pas être mis à jour ne pourront donc pas l\'installer.',
          },
          {
            title: 'Installer Oscilla',
            whyItMatters: 'Obtenez-la sur l\'[App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) ; l\'application elle-même pèse moins de 50 Mo.',
          },
          {
            title: 'Télécharger un modèle',
            whyItMatters: 'Choisissez d\'abord un petit modèle : la fiche cite des modèles de 350M à 8B de paramètres, et un modèle plus gros demande davantage de stockage libre et de mémoire.',
          },
          {
            title: 'Commencer à discuter',
            whyItMatters: 'Écrivez, parlez avec le mode vocal, ou joignez un fichier ou une image ; la mémoire et la recherche web sont intégrées à l\'application.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Fonctionnalités et modèles',
        content: [
          '**L\'argument d\'Oscilla, c\'est l\'étendue : de nombreux modèles, plus la voix, la mémoire et la recherche, dans une seule application gratuite.** Tout ce qui suit provient de la fiche App Store et du site du développeur.',
        ],
        items: [
          '**Plus de 40 modèles.** Les mises à jour récentes ajoutent Nvidia Nemotron Mini 4B, IBM Granite 4.1 (3B et 8B), LFM 2.5 (350M, 1.2B Instruct, 450M VL) et OpenBMB MiniCPM-V 4.6 ; la fiche cite aussi Gemma 4, Qwen 3, SmolLM3 et Ministral 3.',
          '**Voix en temps réel.** Les conversations orales s\'exécutent en local, selon la fiche.',
          '**Mémoire intégrée.** L\'application conserve le contexte vous concernant d\'une conversation à l\'autre ; la fiche ne précise pas où cette mémoire est stockée, hormis « sur votre appareil ».',
          '**Recherche web.** Indiquée comme fonctionnalité ; la fiche ne précise pas comment une requête de recherche est effectuée, supposez donc qu\'une connexion réseau est nécessaire.',
          '**Analyse de fichiers et d\'images.** Joignez des documents ou des photos ; les modèles dotés de vision, comme MiniCPM-V 4.6, traitent les images.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Configuration requise',
        content: [
          '**Oscilla exige iOS 26.0 ou ultérieur et est listée pour l\'iPhone.** L\'App Store ne donne aucune valeur de RAM ; la limite pratique est donc la taille du modèle que votre iPhone peut contenir en mémoire.',
          'Attendez-vous à ce que les petits modèles (de 350M à 4B de paramètres) tournent sur la plupart des iPhone compatibles, et que les modèles de classe 8B demandent un appareil récent disposant de plus de mémoire. C\'est une règle générale pour les modèles sur l\'appareil, pas un chiffre issu de la fiche.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Confidentialité et données',
        content: [
          '**L\'étiquette de confidentialité de l\'App Store indique : « Le développeur ne collecte aucune donnée dans le cadre de cette app. »** La fiche et le site web présentent l\'application comme privée par conception, les conversations restant sur l\'appareil.',
          'L\'application étant à code source fermé et cet avis n\'ayant pas inspecté le trafic réseau, cette affirmation ne peut pas être auditée de façon indépendante ici. La fonction de recherche web suppose au moins un certain usage du réseau lorsqu\'elle est active ; la fiche ne le détaille pas. Apple précise que les étiquettes de confidentialité sont déclarées par le développeur lui-même.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compromis : avantages vs. limites',
        columns: ['Avantage', 'Ce que cela signifie en usage réel', 'Limite / réserve'],
        rows: [
          {
            'Avantage': 'Gratuite, avec un large choix de modèles',
            'Ce que cela signifie en usage réel': 'Vous pouvez essayer Gemma, Qwen, Granite et des modèles de vision sans payer.',
            'Limite / réserve': 'La tarification au-delà de la fiche gratuite actuelle n\'est pas documentée, et la page du site V2 n\'indique aucun prix.',
          },
          {
            'Avantage': 'Voix, mémoire et recherche intégrées',
            'Ce que cela signifie en usage réel': 'Une seule application couvre le chat vocal et le contexte persistant, sans configuration supplémentaire.',
            'Limite / réserve': 'La fiche n\'explique ni comment la mémoire est stockée, ni comment la recherche web est effectuée.',
          },
          {
            'Avantage': 'Fonctionne hors ligne',
            'Ce que cela signifie en usage réel': 'Les conversations restent sur le téléphone une fois un modèle téléchargé.',
            'Limite / réserve': 'La taille des modèles est limitée par la mémoire de l\'iPhone ; les gros modèles seront lents ou indisponibles.',
          },
          {
            'Avantage': 'Petit téléchargement de l\'application',
            'Ce que cela signifie en usage réel': 'L\'application pèse 46.7 Mo, les modèles étant récupérés au fur et à mesure de vos besoins.',
            'Limite / réserve': 'Chaque modèle est un téléchargement séparé de plusieurs gigaoctets pour les plus gros.',
          },
          {
            'Avantage': 'Étiquette de confidentialité sans collecte de données',
            'Ce que cela signifie en usage réel': 'L\'étiquette d\'Apple n\'indique aucune donnée collectée par le développeur.',
            'Limite / réserve': 'Code source fermé et déclaration par le développeur ; ni moteur, ni licence, ni audit n\'est publié.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla vs. alternatives',
        columns: ['Application', 'Plateformes', 'Prix et licence', 'Flexibilité des modèles', 'Différence clé'],
        rows: [
          {
            'Application': 'Oscilla',
            'Plateformes': 'iPhone',
            'Prix et licence': 'Gratuit, code source fermé',
            'Flexibilité des modèles': 'Plus de 40 modèles ouverts téléchargeables',
            'Différence clé': 'Voix, mémoire et recherche dans une seule application gratuite ; moteur non divulgué',
          },
          {
            'Application': '[Locally AI](/fr/power-local-llm/locally-ai-review)',
            'Plateformes': 'iOS, Mac',
            'Prix et licence': 'Freemium, code source fermé',
            'Flexibilité des modèles': 'Modèles ouverts téléchargés dans l\'application',
            'Différence clé': 'Fonctionne aussi sur Mac et nomme MLX comme moteur ; inclut la voix et l\'entrée d\'image',
          },
          {
            'Application': '[Private LLM](/fr/power-local-llm/private-llm-review)',
            'Plateformes': 'iOS, Mac',
            'Prix et licence': 'Payant, code source fermé',
            'Flexibilité des modèles': 'Modèles téléchargés dans l\'application',
            'Différence clé': 'Application payante qui fonctionne aussi sur Mac, sans mode vocal indiqué dans le répertoire',
          },
          {
            'Application': '[Enclave AI](/fr/power-local-llm/enclave-ai-review-2026)',
            'Plateformes': 'iOS',
            'Prix et licence': 'Payant, code source fermé',
            'Flexibilité des modèles': 'Modèles téléchargés dans l\'application',
            'Différence clé': 'Application payante exclusivement iOS, avec voix ; pas d\'entrée vision indiquée dans le répertoire',
          },
          {
            'Application': '[PocketPal AI](/fr/power-local-llm/pocketpal-ai-review)',
            'Plateformes': 'iPhone, Android',
            'Prix et licence': 'Gratuit, MIT',
            'Flexibilité des modèles': 'Modèles GGUF que vous téléchargez',
            'Différence clé': 'Open source, aussi sur Android, et permet d\'importer vos propres modèles GGUF',
          },
        ],
        note: 'Les détails de plateforme, de prix et de fonctionnalités des applications tierces changent fréquemment. Vérifiez les spécificités actuelles sur la fiche de chaque application avant de décider.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Qui devrait utiliser Oscilla',
        items: [
          '**Les utilisateurs d\'iPhone sous iOS 26 qui veulent essayer gratuitement de nombreux modèles ouverts.** Le catalogue est vaste et l\'application est gratuite.',
          '**Ceux qui veulent la voix et la mémoire dans une application locale.** Les deux sont intégrées plutôt qu\'ajoutées après coup.',
          '**Les utilisateurs soucieux de leur vie privée et à l\'aise avec une application à code source fermé.** L\'étiquette de confidentialité n\'indique aucune donnée collectée, même si elle ne peut pas être auditée ici.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Qui ne devrait pas utiliser Oscilla',
        items: [
          '**Toute personne qui a besoin d\'open source.** Le code n\'est pas public ; essayez plutôt [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review).',
          '**Les utilisateurs qui ne peuvent pas passer à iOS 26.** La fiche exige iOS 26.0 ou ultérieur.',
          '**Les utilisateurs de Mac, d\'iPad ou d\'Android.** Seul l\'iPhone est confirmé dans le panneau de compatibilité ; [Locally AI](/fr/power-local-llm/locally-ai-review) fonctionne aussi sur Mac.',
          '**Les personnes qui doivent importer leurs propres modèles.** La fiche n\'en fait pas mention.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Oscilla est-elle gratuite ?',
            a: 'La fiche App Store l\'indique comme gratuite, sans achat intégré. La tarification future n\'est pas documentée.',
          },
          {
            q: 'Qui développe Oscilla ?',
            a: 'Matthew David Fusco, qui publie sous Martechia LLC, société exerçant sous le nom Oscilla.',
          },
          {
            q: 'Oscilla fonctionne-t-elle sur iPad ou sur Mac ?',
            a: 'La description indique qu\'elle fonctionne sur iPhone, iPad et Mac, mais le panneau de compatibilité ne liste que l\'iPhone. Vérifiez sur l\'App Store avec votre appareil.',
          },
          {
            q: 'Quels modèles Oscilla propose-t-elle ?',
            a: 'La fiche cite Gemma 4, Qwen 3, SmolLM3, Ministral 3, Granite 4.1, LFM 2.5, Nemotron Mini 4B et MiniCPM-V 4.6, parmi plus de 40 au total.',
          },
          {
            q: 'Que montre le site web d\'Oscilla ?',
            a: 'Au moment de l\'avis, [oscilla.ai](https://www.oscilla.ai) est une page « bientôt disponible » pour Oscilla V2 datée du 11 septembre 2026, sans détail sur les fonctionnalités ni sur les prix.',
          },
          {
            q: 'Oscilla est-elle open source ?',
            a: 'Aucun dépôt public ni licence n\'a été trouvé ; cet avis la considère donc comme à code source fermé.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content: [
          'Oscilla réunit une large liste de modèles, la voix, la mémoire et l\'entrée d\'image dans une petite application iPhone gratuite, ce qui en fait une application facile à essayer si votre téléphone est sous iOS 26.',
          'Le bémol, c\'est la transparence. Le moteur n\'est pas nommé, le code est fermé, le site web est une page provisoire, et certains détails, comme la prise en charge de l\'iPad et du Mac, diffèrent entre la description et le panneau de compatibilité. C\'est acceptable pour expérimenter à l\'occasion, mais une mauvaise base pour tout usage sensible.',
          'Installez-la pour voir ce que donnent ses modèles sur votre téléphone. Si vous voulez de l\'open source ou un moteur divulgué, commencez par [PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) ou [Locally AI](/fr/power-local-llm/locally-ai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Oscilla - Local AI sur l\'App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — version, prix, taille, configuration requise, modèles et étiquette de confidentialité.',
          '[oscilla.ai](https://www.oscilla.ai) — site du développeur, actuellement une page V2 « bientôt disponible ».',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis Locally AI](/fr/power-local-llm/locally-ai-review) — une application freemium sur l\'appareil pour iOS et Mac.',
          '[Avis Private LLM](/fr/power-local-llm/private-llm-review) — une application payante de modèles sur l\'appareil pour iOS et Mac.',
          '[Avis Enclave AI](/fr/power-local-llm/enclave-ai-review-2026) — un assistant payant sur l\'appareil pour iOS, avec voix.',
          '[Avis PocketPal AI](/fr/power-local-llm/pocketpal-ai-review) — le client de chat GGUF gratuit et open source.',
          '[Le répertoire complet des logiciels LLM locaux](/fr/directory) — un répertoire plus large d\'outils LLM locaux multiplateformes.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-ja.webp',
    title: 'Oscillaレビュー:iPhone向け無料オンデバイスAIチャット',
    seoTitle: 'Oscillaレビュー:iPhone向け無料オンデバイスAIチャット',
    intro:
      'Oscillaは、オープンなAIモデルをダウンロードしてiPhone上だけで実行する無料アプリです。音声会話、内蔵メモリ、任意のWeb検索、ファイルと画像の分析を備えています。本レビューでは、App Storeの掲載情報と開発者サイトに記載されている内容、記載されていない点、そしてOscillaが他のiOS向けローカルAIアプリとどう違うかを扱います。',
    metaDescription:
      'Oscillaレビュー:Gemma 4、Qwen 3、Graniteなど40以上のオープンモデルを端末上で実行する無料のiPhoneアプリ。音声・メモリ・画像入力、要件、プライバシー表示、制約、代替アプリを解説。',
    twitterDescription:
      'Oscillaレビュー:オープンモデルを端末上で動かす無料のiOSアプリ。対応モデル、iOS 26の要件、プライバシー表示、クローズドソースである点、Locally AIやPrivate LLMとの比較を解説。',
    audience:
      'iOS 26のiPhoneで、音声とメモリを備え、オープンモデルをオフラインで動かせる無料アプリを求める人向け——対応モデル、要件、プライバシー、制約、他のiOS向けローカルAIアプリとの比較を扱う。',
    readTime: '7分で読めます',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Oscillaレビュー',
    targetKeywords: [
      'oscilla レビュー',
      'oscilla ローカルai',
      'oscilla ai iphone',
      'iphone オフライン llm 実行',
      'オンデバイスai アプリ ios',
      'プライバシー重視 ai iphone アプリ',
      'gemma 4 iphone アプリ',
      '無料 ローカルai アプリ iphone',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscillaは、ダウンロードしたオープンモデルを完全に端末上で実行する無料のクローズドソースiPhoneアプリで、リアルタイム音声、内蔵メモリ、Web検索、ファイルと画像の分析を備えています。** App Storeの掲載情報にはGemma 4、Qwen 3、Granite 4.1、SmolLM3、MiniCPM-V 4.6、Ministral 3などのモデルが挙げられており、iOS 26.0以降が必要で、Appleのプライバシー表示は「データ収集なし」です。本レビューはバージョン1.2026.05が対象で、公開されている掲載情報とWebサイトに基づいており、端末での実機テストは含みません。',
    quickAnswerTop: {
      ja: {
        question: 'OscillaはiPhoneにインストールする価値がありますか?',
        answer:
          'はい、iOS 26を使っていて、ビジョンや音声を含む多くのオープンモデルをオフラインで無料で試したいならおすすめです。オープンソースであること、MacやAndroid版があること、推論エンジンが公開されていることを求める場合は見送ってください。これらはいずれもドキュメントに記載がありません。最も近いiOS向けの代替アプリはLocally AIとPrivate LLMです。',
        bullets: [
          'App Storeで無料。掲載情報にアプリ内課金の表示はない。',
          '40以上のオープンモデルを端末上で実行。掲載情報にはGemma 4、Qwen 3、MiniCPM-V 4.6が挙げられている。',
          '音声会話、内蔵メモリ、Web検索、ファイルと画像の分析に対応。',
          'iOS 26.0以降が必要。対応状況の欄に記載があるのはiPhoneのみ。',
          'クローズドソース。プライバシー表示では、開発者はデータを収集しないとされている。',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: 'Oscillaを入手する', anchor: 'get-it' },
      { label: 'Oscillaの概要', anchor: 'at-a-glance' },
      { label: 'Oscillaとは', anchor: 'what-is-oscilla' },
      { label: '始め方', anchor: 'how-to-get-started' },
      { label: '機能と対応モデル', anchor: 'features' },
      { label: '必要な端末要件', anchor: 'requirements' },
      { label: 'プライバシーとデータ', anchor: 'privacy' },
      { label: 'トレードオフ:メリットと制約', anchor: 'tradeoffs' },
      { label: 'Oscilla 対 代替アプリ', anchor: 'vs-alternatives' },
      { label: 'Oscillaを使うべき人', anchor: 'who-should-use' },
      { label: 'Oscillaを使うべきでない人', anchor: 'who-should-not-use' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '総評', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Martechia LLCが提供するOscillaは、オープンなAIモデルを完全に端末上で実行し、音声、メモリ、Web検索、画像分析を備えた無料のiPhoneアプリで、掲載情報では開発者はデータを収集しないとされている。',
          },
          {
            type: 'plain-terms',
            text: 'スマートフォンの中にあるモデルライブラリと考えてください。オープンモデルを選んで一度ダウンロードすれば、クラウドのサーバーなしで会話できますが、その裏側のコードを確認することはできません。',
          },
        ],
        items: [
          'レビュー対象のバージョン:1.2026.05。[App Storeの掲載情報](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)によると、最終更新は5月21日。',
          '価格:無料。掲載情報にアプリ内課金の表示はない。',
          'モデル:ダウンロード可能なオープンモデルが40以上。掲載情報が挙げる例では、350Mから8Bパラメータまで。',
          'プラットフォーム:iOS 26.0以降のiPhone。説明文にはMacとiPadへの言及があるが、対応状況の欄にはない。',
          'オープン性:クローズドソース。開発者サイトは、レビュー時点ではV2リリースの「近日公開」ページ。',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'Oscillaを入手する',
        content: [
          '**OscillaはApple App Storeでのみ配布されています。** ダウンロードサイズは46.7 MBで、モデルはアプリ内で別途ダウンロードします。',
          '本レビューは、PromptQuorumの[ローカルLLMソフトウェアディレクトリ](/ja/directory)を補完するものです。このディレクトリはOscillaを他のオンデバイスAIやローカルAIツールと並べて掲載しています。',
        ],
        columns: ['入手経路', '入手方法'],
        rows: [
          {
            '入手経路': 'Apple App Store(iPhone)',
            '入手方法': '[App StoreのOscilla - Local AI](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            '入手経路': '開発者のWebサイト',
            '入手方法': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: '掲載情報の説明文には「iPhone、iPad、Macで動作」とありますが、対応状況の欄に記載があるのはiPhoneのみです。インストール前に、App Storeのページでお使いの端末を確認してください。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscillaの概要',
        columns: ['項目', 'Oscilla'],
        rows: [
          { '項目': 'プラットフォーム', 'Oscilla': 'iPhone(iOS 26.0以降)' },
          { '項目': '価格', 'Oscilla': '無料' },
          { '項目': 'ライセンス', 'Oscilla': 'クローズドソース' },
          { '項目': '完全オフラインで動作', 'Oscilla': '掲載情報では可:「iPhone上で完全に」' },
          { '項目': 'アプリ内モデルダウンロード', 'Oscilla': '可、40以上のモデル' },
          { '項目': '独自モデルのインポート', 'Oscilla': '記載なし' },
          { '項目': '画像入力', 'Oscilla': '可、ファイルと画像の分析(例:MiniCPM-V 4.6)' },
          { '項目': '音声入力/出力', 'Oscilla': '可、リアルタイム音声会話' },
        ],
        note: '各項目は、ローカルLLMソフトウェアディレクトリで使われているモバイルチャットの比較基準に沿っています。「記載なし」は、掲載情報とWebサイトにその機能への言及がないという意味であり、テストして存在しないと確認したという意味ではありません。',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'Oscillaとは',
        content: [
          '**Oscillaは、サーバーのフロントエンドではなく、独自のオンデバイスのモデル実行環境を備えたチャットアプリです。** 掲載情報はこれを「Appleデバイス向けのローカルAI」と説明し、クラウドに依存せず、モデルを端末上で「完全に」実行するとしています。',
          'Martechia LLC(Oscillaの名称で事業を展開)のもと、Matthew David Fusco氏が公開しています。推論ランタイムはどの公開情報にも明記されていないため、本レビューではMLX、llama.cpp、Core MLのいずれを使っているかは述べません。',
          '本レビューはApp Storeの掲載情報とoscilla.aiに基づいています。端末での実機テストは含まれていないため、速度、バッテリー消費、回答品質は評価していません。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '始め方',
        content: [
          '**セットアップは、App Storeからのインストールに続けてモデルをダウンロードする流れです。** 掲載情報には初回起動時の流れが説明されていないため、以下の手順は記載されている内容に沿っています。',
        ],
        numberedItems: [
          {
            title: 'iOSのバージョンを確認する',
            whyItMatters: '掲載情報ではiOS 26.0以降が必要なため、アップデートできない古いiPhoneにはインストールできません。',
          },
          {
            title: 'Oscillaをインストールする',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)から入手します。アプリ本体は50 MB未満です。',
          },
          {
            title: 'モデルをダウンロードする',
            whyItMatters: 'まずは小さなモデルを選んでください。掲載情報には350Mから8Bパラメータまでのモデルが挙げられており、大きなモデルほど空きストレージとメモリが必要です。',
          },
          {
            title: 'チャットを始める',
            whyItMatters: '文字を入力するか、音声モードで話すか、ファイルや画像を添付します。メモリとWeb検索はアプリに組み込まれています。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '機能と対応モデル',
        content: [
          '**Oscillaの強みは幅広さです。多数のモデルに加え、音声、メモリ、検索がひとつの無料アプリにまとまっています。** 以下はすべて、App Storeの掲載情報と開発者サイトに基づいています。',
        ],
        items: [
          '**40以上のモデル。** 最近のアップデートで、Nvidia Nemotron Mini 4B、IBM Granite 4.1(3Bと8B)、LFM 2.5(350M、1.2B Instruct、450M VL)、OpenBMB MiniCPM-V 4.6が追加された。掲載情報にはGemma 4、Qwen 3、SmolLM3、Ministral 3も挙げられている。',
          '**リアルタイム音声。** 掲載情報によれば、音声での会話は端末上で実行される。',
          '**内蔵メモリ。** アプリはチャットをまたいで、あなたに関するコンテキストを保持する。掲載情報には「端末上」という以上に、メモリの保存場所の記載はない。',
          '**Web検索。** 機能として記載されている。検索リクエストの方法は掲載情報に記載がないため、ネットワーク接続が必要だと考えておくこと。',
          '**ファイルと画像の分析。** 文書や写真を添付できる。画像の処理は、MiniCPM-V 4.6のようなビジョン対応モデルが担当する。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '必要な端末要件',
        content: [
          '**OscillaにはiOS 26.0以降が必要で、iPhone向けとして掲載されています。** App StoreにはRAMの数値の記載がないため、実際の限界は、お使いのiPhoneがメモリ上に保持できるモデルの大きさで決まります。',
          '小型モデル(350Mから4Bパラメータ)は、対応するほとんどのiPhoneで動くと考えられますが、8Bクラスのモデルには、メモリの大きい最近の端末が必要になるでしょう。これはオンデバイスモデルに関する一般的な目安であり、掲載情報の数値ではありません。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'プライバシーとデータ',
        content: [
          '**App Storeのプライバシー表示には「デベロッパはこのAppからデータを収集しません」と記されています。** 掲載情報とWebサイトは、アプリを設計段階からプライベートなものとし、会話は端末上にとどまると説明しています。',
          'アプリはクローズドソースであり、本レビューではネットワーク通信を検査していないため、この主張をここで独自に監査することはできません。Web検索機能は、有効なときに少なくとも一部でネットワークを使うことを示唆していますが、掲載情報に詳細はありません。Appleは、プライバシー表示は開発者による自己申告であると注記しています。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'トレードオフ:メリットと制約',
        columns: ['メリット', '実際の利用での意味', '制約・注意点'],
        rows: [
          {
            'メリット': '無料で、幅広いモデルが揃う',
            '実際の利用での意味': 'Gemma、Qwen、Graniteやビジョンモデルを、料金を払わずに試せる。',
            '制約・注意点': '現在の無料の掲載以降の料金体系は記載がなく、V2のサイトページにも料金の記載はない。',
          },
          {
            'メリット': '音声、メモリ、検索を内蔵',
            '実際の利用での意味': '1つのアプリで、追加の設定なしに音声チャットと継続的なコンテキストを扱える。',
            '制約・注意点': 'メモリがどう保存されるか、Web検索がどう行われるかは、掲載情報に説明がない。',
          },
          {
            'メリット': 'オフラインで動作',
            '実際の利用での意味': 'モデルをダウンロードしたあとは、チャットは端末上にとどまる。',
            '制約・注意点': 'モデルの大きさはiPhoneのメモリで上限が決まり、大きなモデルは遅いか、使えない。',
          },
          {
            'メリット': 'アプリのダウンロードが小さい',
            '実際の利用での意味': 'アプリは46.7 MBで、モデルは必要に応じて取得する。',
            '制約・注意点': '大きなモデルは、それぞれが数ギガバイトの別々のダウンロードになる。',
          },
          {
            'メリット': 'データ収集なしのプライバシー表示',
            '実際の利用での意味': 'Appleの表示では、開発者によるデータ収集はないとされている。',
            '制約・注意点': 'クローズドソースで自己申告。エンジン、ライセンス、監査結果は公開されていない。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla 対 代替アプリ',
        columns: ['アプリ', 'プラットフォーム', '価格とライセンス', 'モデルの柔軟性', '主な違い'],
        rows: [
          {
            'アプリ': 'Oscilla',
            'プラットフォーム': 'iPhone',
            '価格とライセンス': '無料、クローズドソース',
            'モデルの柔軟性': 'ダウンロード可能な40以上のオープンモデル',
            '主な違い': '音声、メモリ、検索をひとつの無料アプリに搭載。エンジンは非公開',
          },
          {
            'アプリ': '[Locally AI](/ja/power-local-llm/locally-ai-review)',
            'プラットフォーム': 'iOS、Mac',
            '価格とライセンス': 'フリーミアム、クローズドソース',
            'モデルの柔軟性': 'アプリ内でダウンロードするオープンモデル',
            '主な違い': 'Macでも動作し、実行環境にMLXを挙げている。音声と画像の入力に対応',
          },
          {
            'アプリ': '[Private LLM](/ja/power-local-llm/private-llm-review)',
            'プラットフォーム': 'iOS、Mac',
            '価格とライセンス': '有料、クローズドソース',
            'モデルの柔軟性': 'アプリ内でダウンロードするモデル',
            '主な違い': 'Macでも動作する有料アプリで、ディレクトリ上では音声モードの記載なし',
          },
          {
            'アプリ': '[Enclave AI](/ja/power-local-llm/enclave-ai-review-2026)',
            'プラットフォーム': 'iOS',
            '価格とライセンス': '有料、クローズドソース',
            'モデルの柔軟性': 'アプリ内でダウンロードするモデル',
            '主な違い': '音声に対応するiOS専用の有料アプリで、ディレクトリ上では画像入力の記載なし',
          },
          {
            'アプリ': '[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)',
            'プラットフォーム': 'iPhone、Android',
            '価格とライセンス': '無料、MIT',
            'モデルの柔軟性': 'ユーザーが自分でダウンロードするGGUFモデル',
            '主な違い': 'オープンソースでAndroidにも対応し、自分のGGUFモデルをインポートできる',
          },
        ],
        note: 'サードパーティアプリのプラットフォーム、価格、機能の詳細は頻繁に変更されます。決定前に各アプリ自体の掲載情報で現在の詳細を確認してください。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Oscillaを使うべき人',
        items: [
          '**iOS 26のiPhoneで、多くのオープンモデルを無料で試したい人。** モデルの種類が豊富で、アプリは無料です。',
          '**ローカルアプリで音声とメモリを使いたい人。** どちらも追加機能ではなく、最初から組み込まれています。',
          '**クローズドソースのアプリでも構わないプライバシー重視のユーザー。** プライバシー表示ではデータ収集なしとされていますが、ここで監査することはできません。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Oscillaを使うべきでない人',
        items: [
          '**オープンソースが必須の人。** コードは公開されていません。代わりに[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)を試してください。',
          '**iOS 26を実行できない人。** 掲載情報ではiOS 26.0以降が必要です。',
          '**Mac、iPad、Androidのユーザー。** 対応状況の欄で確認できるのはiPhoneだけです。[Locally AI](/ja/power-local-llm/locally-ai-review)はMacでも動作します。',
          '**独自のモデルをインポートしたい人。** 掲載情報にその記載はありません。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Oscillaは無料ですか?',
            a: 'App Storeの掲載情報では、アプリ内課金のない無料アプリとなっています。今後の料金は記載がありません。',
          },
          {
            q: 'Oscillaを開発しているのは誰ですか?',
            a: 'Martechia LLCの名義で公開しているMatthew David Fusco氏です。Martechia LLCはOscillaの名称で事業を行っています。',
          },
          {
            q: 'OscillaはiPadやMacで動作しますか?',
            a: '説明文にはiPhone、iPad、Macで動作するとありますが、対応状況の欄に記載があるのはiPhoneのみです。App Storeでお使いの端末を確認してください。',
          },
          {
            q: 'Oscillaにはどのモデルがありますか?',
            a: '掲載情報には、合計40以上のうち、Gemma 4、Qwen 3、SmolLM3、Ministral 3、Granite 4.1、LFM 2.5、Nemotron Mini 4B、MiniCPM-V 4.6が挙げられています。',
          },
          {
            q: 'OscillaのWebサイトには何が載っていますか?',
            a: 'レビュー時点で、[oscilla.ai](https://www.oscilla.ai)は2026年9月11日付のOscilla V2の「近日公開」ページで、機能や料金の詳細はありません。',
          },
          {
            q: 'Oscillaはオープンソースですか?',
            a: '公開リポジトリもライセンスも見つからなかったため、本レビューではクローズドソースとして扱っています。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '総評',
        content: [
          'Oscillaは、幅広いモデル、音声、メモリ、画像入力を小さな無料のiPhoneアプリにまとめており、iOS 26が動く端末なら気軽に試せるアプリです。',
          '問題は透明性です。ランタイムは非公開で、コードはクローズド、Webサイトはプレースホルダーのままで、iPadやMacへの対応など、説明文と対応状況の欄とで食い違う部分もあります。気軽に試す分には問題ありませんが、機密性の高い用途の判断材料には向きません。',
          'まずはインストールして、お使いのスマートフォンでモデルの使い心地を確かめてください。オープンソースや公開されたエンジンを求める場合は、[PocketPal AI](/ja/power-local-llm/pocketpal-ai-review)か[Locally AI](/ja/power-local-llm/locally-ai-review)から始めてください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[App StoreのOscilla - Local AI](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — バージョン、価格、サイズ、要件、モデル、プライバシー表示。',
          '[oscilla.ai](https://www.oscilla.ai) — 開発者のWebサイト。現在はV2の「近日公開」ページ。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Locally AIレビュー](/ja/power-local-llm/locally-ai-review) — iOSとMac向けのフリーミアムのオンデバイスアプリ。',
          '[Private LLMレビュー](/ja/power-local-llm/private-llm-review) — iOSとMac向けの有料のオンデバイスモデルアプリ。',
          '[Enclave AIレビュー](/ja/power-local-llm/enclave-ai-review-2026) — 音声に対応する、iOS向けの有料オンデバイスアシスタント。',
          '[PocketPal AIレビュー](/ja/power-local-llm/pocketpal-ai-review) — 無料のオープンソースGGUFチャットクライアント。',
          '[完全なローカルLLMソフトウェアディレクトリ](/ja/directory) — プラットフォームを横断するローカルLLMツールのより広範なディレクトリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-zh.webp',
    title: 'Oscilla评测：适用于iPhone的免费设备端AI聊天应用',
    seoTitle: 'Oscilla评测：iPhone免费设备端AI聊天应用',
    intro:
      'Oscilla是一款免费的iPhone应用，可下载开源AI模型并直接在手机上运行，支持语音对话、内置记忆、可选的网页搜索，以及文件和图像分析。本评测介绍App Store页面和开发者网站所记载的内容、没有提及的内容，以及Oscilla与其他iOS本地AI应用的对比。',
    metaDescription:
      'Oscilla评测：免费iPhone应用，可在设备端运行40多个开源模型（Gemma 4、Qwen 3、Granite），支持语音、记忆和图像输入。设备要求、隐私标签、局限与替代方案。',
    twitterDescription:
      'Oscilla评测：在设备端运行开源模型的免费iOS应用。模型、iOS 26要求、隐私标签、闭源情况，以及与Locally AI和Private LLM的对比。',
    audience:
      '使用iOS 26的iPhone用户，想要一款免费、可离线运行开源模型并支持语音和记忆的应用——涵盖模型、设备要求、隐私、局限，以及Oscilla与其他iOS本地AI应用的对比。',
    readTime: '7分钟阅读',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Oscilla评测',
    targetKeywords: [
      'Oscilla评测',
      'Oscilla本地AI',
      'Oscilla iPhone AI应用',
      'iPhone离线运行大模型',
      'iOS设备端AI应用',
      'iPhone隐私AI应用',
      'Gemma 4 iPhone应用',
      'iPhone免费本地AI应用',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscilla是一款免费、闭源的iPhone应用，可将下载的开源模型完全在设备上运行，支持实时语音、内置记忆、网页搜索，以及文件和图像分析。** 其App Store页面列出了Gemma 4、Qwen 3、Granite 4.1、SmolLM3、MiniCPM-V 4.6和Ministral 3等模型，要求iOS 26.0或更高版本，并带有Apple的“未收集数据”隐私标签。本评测对应版本1.2026.05，依据公开的应用页面和网站撰写，并未在真机上实际测试。',
    quickAnswerTop: {
      zh: {
        question: '在iPhone上安装Oscilla值得吗？',
        answer:
          '如果您使用iOS 26，并想免费离线体验多种开源模型（包括视觉和语音），那么值得。如果您需要开源、Mac或Android版本，或是公开的推理引擎，则可以跳过：这些在文档中均未提及。Locally AI和Private LLM是最接近的iOS替代方案。',
        bullets: [
          'App Store免费下载，页面上未显示应用内购买。',
          '在设备端运行40多个开源模型；页面列出了Gemma 4、Qwen 3和MiniCPM-V 4.6。',
          '支持语音对话、内置记忆、网页搜索，以及文件和图像分析。',
          '需要iOS 26.0或更高版本；兼容性面板仅列出iPhone。',
          '闭源；隐私标签显示开发者不收集任何数据。',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '获取Oscilla', anchor: 'get-it' },
      { label: 'Oscilla概览', anchor: 'at-a-glance' },
      { label: 'Oscilla是什么', anchor: 'what-is-oscilla' },
      { label: '如何开始使用', anchor: 'how-to-get-started' },
      { label: '功能与模型', anchor: 'features' },
      { label: '设备要求', anchor: 'requirements' },
      { label: '隐私与数据', anchor: 'privacy' },
      { label: '权衡：优点与局限', anchor: 'tradeoffs' },
      { label: 'Oscilla与替代方案对比', anchor: 'vs-alternatives' },
      { label: '谁适合使用Oscilla', anchor: 'who-should-use' },
      { label: '谁不适合使用Oscilla', anchor: 'who-should-not-use' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: '要点速览',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Oscilla由Martechia LLC推出，是一款免费的iPhone应用，可完全在设备端运行开源AI模型，支持语音、记忆、网页搜索和图像分析，其应用页面称开发者不收集任何数据。',
          },
          {
            type: 'plain-terms',
            text: '可以把它看作装在手机里的模型库：选一个开源模型，下载一次，之后无需云端服务器即可与它对话，但您无法查看它背后的代码。',
          },
        ],
        items: [
          '评测版本：1.2026.05，见[App Store页面](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)，最近更新于5月21日。',
          '价格：免费，页面上未显示应用内购买。',
          '模型：40多个可下载的开源模型；页面列举的示例参数规模从350M到8B。',
          '平台：iPhone，需要iOS 26.0或更高版本；描述中提到了Mac和iPad，但兼容性面板中没有。',
          '开放性：闭源，评测时开发者网站是一个V2版本的“即将推出”页面。',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: '获取Oscilla',
        content: [
          '**Oscilla仅通过Apple App Store发布。** 应用大小为46.7 MB；模型需在应用内另行下载。',
          '本评测是PromptQuorum[本地LLM软件目录](/zh/directory)的配套文章，该目录将Oscilla与其他设备端和本地AI工具一并列出。',
        ],
        columns: ['渠道', '获取方式'],
        rows: [
          {
            '渠道': 'Apple App Store（iPhone）',
            '获取方式': '[App Store上的Oscilla - Local AI](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            '渠道': '开发者网站',
            '获取方式': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: '应用页面的描述称该应用可在“iPhone、iPad和Mac”上运行，但其兼容性面板仅列出iPhone。安装前请在App Store页面上确认您的设备。',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla概览',
        columns: ['属性', 'Oscilla'],
        rows: [
          { '属性': '平台', 'Oscilla': 'iPhone（iOS 26.0+）' },
          { '属性': '价格', 'Oscilla': '免费' },
          { '属性': '许可证', 'Oscilla': '闭源' },
          { '属性': '完全离线运行', 'Oscilla': '是，据页面所述：“entirely on your iPhone”' },
          { '属性': '应用内下载模型', 'Oscilla': '是，40多个模型' },
          { '属性': '导入自己的模型', 'Oscilla': '未说明' },
          { '属性': '图像输入', 'Oscilla': '是，文件和图像分析（如MiniCPM-V 4.6）' },
          { '属性': '语音输入/输出', 'Oscilla': '是，实时语音对话' },
        ],
        note: '各属性沿用本地LLM软件目录中使用的移动端聊天对比项。“未说明”表示应用页面和网站均未提及该功能，并不表示经过测试后发现它缺失。',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'Oscilla是什么',
        content: [
          '**Oscilla是一款自带设备端模型运行时的聊天应用，而不是服务器的前端。** 应用页面将其描述为“local AI for Apple devices”（面向Apple设备的本地AI），并称它“entirely”（完全）在设备上运行模型，不依赖云端。',
          '它由Matthew David Fusco以Martechia LLC（经营名称Oscilla）的名义发布。任何公开来源都没有说明其推理运行时，因此本评测不断言它使用的是MLX、llama.cpp还是Core ML。',
          '本评测依据App Store页面和oscilla.ai撰写，不包含实际测试，因此这里不对速度、耗电和回答质量进行评价。',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '如何开始使用',
        content: [
          '**设置过程就是先从App Store安装，再下载模型。** 应用页面没有描述首次运行的流程，因此以下步骤依据页面中记载的内容整理。',
        ],
        numberedItems: [
          {
            title: '确认iOS版本',
            whyItMatters: '应用页面要求iOS 26.0或更高版本，因此无法升级到该版本的旧款iPhone无法安装。',
          },
          {
            title: '安装Oscilla',
            whyItMatters: '可从[App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)获取；应用本身不到50 MB。',
          },
          {
            title: '下载模型',
            whyItMatters: '建议先选小模型：页面列出的模型参数规模从350M到8B不等，模型越大，需要的可用存储空间和内存就越多。',
          },
          {
            title: '开始聊天',
            whyItMatters: '可以打字、使用语音模式交谈，或附加文件和图像；记忆和网页搜索已内置在应用中。',
          },
        ],
      },
      features: {
        id: 'features',
        title: '功能与模型',
        content: [
          '**Oscilla的卖点是丰富：在一款免费应用里集成多种模型，以及语音、记忆和搜索。** 以下内容均来自App Store页面和开发者网站。',
        ],
        items: [
          '**40多个模型。** 近期更新新增了Nvidia Nemotron Mini 4B、IBM Granite 4.1（3B和8B）、LFM 2.5（350M、1.2B Instruct、450M VL）以及OpenBMB MiniCPM-V 4.6；页面还列出了Gemma 4、Qwen 3、SmolLM3和Ministral 3。',
          '**实时语音。** 据页面所述，语音对话在本地运行。',
          '**内置记忆。** 应用会在多次聊天之间保留与您有关的上下文；除“on your device”（在您的设备上）之外，页面没有说明这些记忆存储在哪里。',
          '**网页搜索。** 页面将其列为一项功能，但没有说明搜索请求如何发出，因此请假定它需要网络连接。',
          '**文件和图像分析。** 可附加文档或照片；MiniCPM-V 4.6等具备视觉能力的模型负责处理图像。',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '设备要求',
        content: [
          '**Oscilla需要iOS 26.0或更高版本，并列为适用于iPhone。** App Store没有给出内存数据，因此实际限制取决于您的iPhone能在内存中容纳多大的模型。',
          '预计在大多数受支持的iPhone上可以运行小模型（350M到4B参数），而8B级别的模型则需要较新、内存更大的设备。这是设备端模型的一般规律，并非应用页面给出的数据。',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '隐私与数据',
        content: [
          '**App Store隐私标签写明“The developer does not collect any data from this app.”**（开发者不会从此应用收集任何数据。）应用页面和网站都称该应用在设计上注重隐私，对话保留在设备上。',
          '由于该应用是闭源的，且本评测没有检查网络流量，这一说法在此无法独立审计。网页搜索功能启用时至少会产生一些网络使用，应用页面没有详述。Apple指出，隐私标签由开发者自行申报。',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '权衡：优点与局限',
        columns: ['优点', '实际使用中的意义', '局限/注意事项'],
        rows: [
          {
            '优点': '免费且模型列表丰富',
            '实际使用中的意义': '无需付费即可体验Gemma、Qwen、Granite和视觉模型。',
            '局限/注意事项': '目前免费页面之外的定价没有记载，V2网站页面也没有给出价格。',
          },
          {
            '优点': '内置语音、记忆和搜索',
            '实际使用中的意义': '一款应用即可涵盖语音聊天和持久上下文，无需额外设置。',
            '局限/注意事项': '应用页面没有说明记忆如何存储，也没有说明网页搜索如何执行。',
          },
          {
            '优点': '可离线运行',
            '实际使用中的意义': '模型下载完成后，聊天内容保留在手机上。',
            '局限/注意事项': '模型大小受iPhone内存限制；大模型会很慢或无法使用。',
          },
          {
            '优点': '应用下载体积小',
            '实际使用中的意义': '应用只有46.7 MB，模型按需另行获取。',
            '局限/注意事项': '较大的模型每个都是数GB的单独下载。',
          },
          {
            '优点': '隐私标签显示不收集数据',
            '实际使用中的意义': 'Apple的标签显示开发者不收集任何数据。',
            '局限/注意事项': '闭源且由开发者自行申报；没有公布引擎、许可证或审计结果。',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla与替代方案对比',
        columns: ['应用', '平台', '价格与许可证', '模型灵活性', '主要区别'],
        rows: [
          {
            '应用': 'Oscilla',
            '平台': 'iPhone',
            '价格与许可证': '免费，闭源',
            '模型灵活性': '40多个可下载的开源模型',
            '主要区别': '一款免费应用集成语音、记忆和搜索；引擎未公开',
          },
          {
            '应用': '[Locally AI](/zh/power-local-llm/locally-ai-review)',
            '平台': 'iOS、Mac',
            '价格与许可证': '免费增值，闭源',
            '模型灵活性': '在应用内下载开源模型',
            '主要区别': '也可在Mac上运行，并注明使用MLX作为运行时；支持语音和图像输入',
          },
          {
            '应用': '[Private LLM](/zh/power-local-llm/private-llm-review)',
            '平台': 'iOS、Mac',
            '价格与许可证': '付费，闭源',
            '模型灵活性': '在应用内下载模型',
            '主要区别': '同样支持Mac的付费应用，目录中未列出语音模式',
          },
          {
            '应用': '[Enclave AI](/zh/power-local-llm/enclave-ai-review-2026)',
            '平台': 'iOS',
            '价格与许可证': '付费，闭源',
            '模型灵活性': '在应用内下载模型',
            '主要区别': '仅限iOS的付费应用，支持语音；目录中未列出视觉输入',
          },
          {
            '应用': '[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)',
            '平台': 'iPhone、Android',
            '价格与许可证': '免费，MIT',
            '模型灵活性': '需自行下载的GGUF模型',
            '主要区别': '开源，也支持Android，并且可以导入自己的GGUF模型',
          },
        ],
        note: '第三方应用的平台、价格和功能细节经常变化。做决定前，请在各应用自己的页面上核实最新信息。',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: '谁适合使用Oscilla',
        items: [
          '**使用iOS 26、想免费体验多种开源模型的iPhone用户。** 模型目录丰富，而且应用免费。',
          '**希望在本地应用中使用语音和记忆的用户。** 两者都是内置功能，而不是附加组件。',
          '**注重隐私、能接受闭源应用的用户。** 隐私标签显示不收集数据，但在这里无法审计。',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: '谁不适合使用Oscilla',
        items: [
          '**需要开源的用户。** 代码并未公开；可改试[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)。',
          '**无法运行iOS 26的用户。** 应用页面要求iOS 26.0或更高版本。',
          '**Mac、iPad或Android用户。** 兼容性面板中仅确认了iPhone；[Locally AI](/zh/power-local-llm/locally-ai-review)也可在Mac上运行。',
          '**需要导入自己模型的用户。** 应用页面没有提到这一点。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Oscilla免费吗？',
            a: 'App Store页面显示它免费，且没有应用内购买。未来的定价没有记载。',
          },
          {
            q: 'Oscilla是谁开发的？',
            a: 'Matthew David Fusco，以Martechia LLC的名义发布，该公司的经营名称为Oscilla。',
          },
          {
            q: 'Oscilla能在iPad或Mac上使用吗？',
            a: '描述称它可在iPhone、iPad和Mac上运行，但兼容性面板仅列出iPhone。请在App Store上用您的设备确认。',
          },
          {
            q: 'Oscilla提供哪些模型？',
            a: '应用页面列出了Gemma 4、Qwen 3、SmolLM3、Ministral 3、Granite 4.1、LFM 2.5、Nemotron Mini 4B和MiniCPM-V 4.6等，总计40多个。',
          },
          {
            q: 'Oscilla的网站上有什么内容？',
            a: '评测时，[oscilla.ai](https://www.oscilla.ai)是一个标注日期为2026年9月11日的Oscilla V2“即将推出”页面，没有功能或价格详情。',
          },
          {
            q: 'Oscilla是开源的吗？',
            a: '没有找到公开的代码仓库或许可证，因此本评测将其视为闭源。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content: [
          'Oscilla把丰富的模型列表、语音、记忆和图像输入打包进一款小巧的免费iPhone应用，如果您的手机运行iOS 26，这是一款容易上手尝试的应用。',
          '它的问题在于透明度：运行时没有公开名称，代码闭源，网站只是占位页面，而且iPad和Mac支持等部分细节在描述与兼容性面板之间并不一致。用于随意体验没有问题，但不适合作为处理敏感内容的依据。',
          '可以安装后看看这些模型在您的手机上表现如何。如果您想要开源或公开引擎的方案，请先从[PocketPal AI](/zh/power-local-llm/pocketpal-ai-review)或[Locally AI](/zh/power-local-llm/locally-ai-review)开始。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[App Store上的Oscilla - Local AI](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — 版本、价格、大小、要求、模型和隐私标签。',
          '[oscilla.ai](https://www.oscilla.ai) — 开发者网站，目前是V2“即将推出”页面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Locally AI评测](/zh/power-local-llm/locally-ai-review) — 适用于iOS和Mac的免费增值设备端应用。',
          '[Private LLM评测](/zh/power-local-llm/private-llm-review) — 适用于iOS和Mac的付费设备端模型应用。',
          '[Enclave AI评测](/zh/power-local-llm/enclave-ai-review-2026) — 支持语音的付费iOS设备端助手。',
          '[PocketPal AI评测](/zh/power-local-llm/pocketpal-ai-review) — 免费、开源的GGUF聊天客户端。',
          '[完整本地LLM软件目录](/zh/directory) — 涵盖多平台本地LLM工具的更全面目录。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-es.webp',
    title: 'Reseña de Oscilla: chat de IA gratis en el dispositivo para iPhone',
    seoTitle: 'Reseña de Oscilla: chat de IA gratis en el iPhone',
    intro:
      'Oscilla es una app gratuita para iPhone que descarga modelos de IA abiertos y los ejecuta en el propio teléfono, con conversaciones por voz, memoria integrada, búsqueda web opcional y análisis de archivos e imágenes. Esta reseña explica qué documentan la ficha de la App Store y el sitio del desarrollador, qué omiten y cómo se compara Oscilla con otras apps de IA local para iOS.',
    metaDescription:
      'Reseña de Oscilla: app gratuita para iPhone que ejecuta más de 40 modelos abiertos (Gemma 4, Qwen 3, Granite) en el dispositivo, con voz, memoria e imágenes. Requisitos, privacidad, límites y alternativas.',
    twitterDescription:
      'Reseña de Oscilla: una app gratuita de iOS que ejecuta modelos abiertos en el dispositivo. Modelos, requisito de iOS 26, etiqueta de privacidad, código cerrado y comparación con Locally AI y Private LLM.',
    audience:
      'Propietarios de un iPhone con iOS 26 que quieren una app gratuita para ejecutar modelos abiertos sin conexión, con voz y memoria — cubre modelos, requisitos, privacidad, límites y cómo se compara Oscilla con otras apps de IA local para iOS.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'reseña de Oscilla',
    targetKeywords: [
      'reseña oscilla',
      'oscilla ia local',
      'oscilla ia iphone',
      'ejecutar llm en iphone sin conexión',
      'app de ia en el dispositivo ios',
      'app de ia privada para iphone',
      'app gemma 4 iphone',
      'app de ia local gratis iphone',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscilla es una app gratuita y de código cerrado para iPhone que ejecuta modelos abiertos descargables íntegramente en el dispositivo, con voz en tiempo real, memoria integrada, búsqueda web y análisis de archivos e imágenes.** Su ficha de la App Store cita modelos como Gemma 4, Qwen 3, Granite 4.1, SmolLM3, MiniCPM-V 4.6 y Ministral 3, requiere iOS 26.0 o posterior y lleva la etiqueta de privacidad «Data Not Collected» (datos no recopilados) de Apple. Esta reseña cubre la versión 1.2026.05 y se basa en la ficha pública y el sitio web, no en pruebas prácticas en un dispositivo.',
    quickAnswerTop: {
      es: {
        question: '¿Vale la pena instalar Oscilla en un iPhone?',
        answer:
          'Sí, si tienes iOS 26 y quieres una forma gratuita de probar muchos modelos abiertos sin conexión, con visión y voz incluidas. Descártala si necesitas código abierto, una versión para Mac o Android, o un motor de inferencia publicado: nada de eso está documentado. Locally AI y Private LLM son las alternativas más cercanas en iOS.',
        bullets: [
          'Gratis en la App Store, sin compras dentro de la app en la ficha.',
          'Ejecuta más de 40 modelos abiertos en el dispositivo; la ficha cita Gemma 4, Qwen 3 y MiniCPM-V 4.6.',
          'Conversaciones por voz, memoria integrada, búsqueda web y análisis de archivos e imágenes.',
          'Requiere iOS 26.0 o posterior; el panel de compatibilidad indica solo iPhone.',
          'Código cerrado; la etiqueta de privacidad dice que el desarrollador no recopila datos.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Cómo conseguir Oscilla', anchor: 'get-it' },
      { label: 'Oscilla de un vistazo', anchor: 'at-a-glance' },
      { label: 'Qué es Oscilla', anchor: 'what-is-oscilla' },
      { label: 'Cómo empezar', anchor: 'how-to-get-started' },
      { label: 'Funciones y modelos', anchor: 'features' },
      { label: 'Requisitos del dispositivo', anchor: 'requirements' },
      { label: 'Privacidad y datos', anchor: 'privacy' },
      { label: 'Compensaciones: ventajas frente a limitaciones', anchor: 'tradeoffs' },
      { label: 'Oscilla frente a alternativas', anchor: 'vs-alternatives' },
      { label: 'Quién debería usar Oscilla', anchor: 'who-should-use' },
      { label: 'Quién no debería usar Oscilla', anchor: 'who-should-not-use' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Oscilla, de Martechia LLC, es una app gratuita para iPhone que ejecuta modelos de IA abiertos íntegramente en el dispositivo, con voz, memoria, búsqueda web y análisis de imágenes, y su ficha indica que el desarrollador no recopila datos.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en ella como una biblioteca de modelos en tu teléfono: eliges un modelo abierto, lo descargas una vez y chateas con él sin servidor en la nube, pero no puedes inspeccionar el código que hay detrás.',
          },
        ],
        items: [
          'Versión reseñada: 1.2026.05, según la [ficha de la App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356), actualizada por última vez el 21 de mayo.',
          'Precio: gratis, sin compras dentro de la app indicadas en la ficha.',
          'Modelos: más de 40 modelos abiertos descargables, de 350M a 8B de parámetros en los ejemplos que cita la ficha.',
          'Plataforma: iPhone con iOS 26.0 o posterior; Mac e iPad se mencionan en la descripción, pero no en el panel de compatibilidad.',
          'Apertura: código cerrado, y el sitio del desarrollador es una página «coming soon» (próximamente) para una versión V2 en el momento de la reseña.',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'Cómo conseguir Oscilla',
        content: [
          '**Oscilla se distribuye únicamente a través de la App Store de Apple.** La descarga ocupa 46.7 MB; los modelos se descargan por separado dentro de la app.',
          'Esta reseña complementa el [directorio de software LLM local](/es/directory) de PromptQuorum, que incluye Oscilla junto a otras herramientas de IA local y en el dispositivo.',
        ],
        columns: ['Canal', 'Cómo conseguirla'],
        rows: [
          {
            'Canal': 'App Store de Apple (iPhone)',
            'Cómo conseguirla': '[Oscilla - Local AI en la App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            'Canal': 'Sitio web del desarrollador',
            'Cómo conseguirla': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: 'La descripción de la ficha dice que la app funciona en «iPhone, iPad y Mac», pero su panel de compatibilidad indica solo iPhone. Comprueba tu dispositivo en la página de la App Store antes de instalar.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla de un vistazo',
        columns: ['Atributo', 'Oscilla'],
        rows: [
          { 'Atributo': 'Plataforma', 'Oscilla': 'iPhone (iOS 26.0+)' },
          { 'Atributo': 'Precio', 'Oscilla': 'Gratis' },
          { 'Atributo': 'Licencia', 'Oscilla': 'Código cerrado' },
          { 'Atributo': 'Funciona totalmente offline', 'Oscilla': 'Sí, según la ficha: «entirely on your iPhone»' },
          { 'Atributo': 'Descarga de modelos en la app', 'Oscilla': 'Sí, más de 40 modelos' },
          { 'Atributo': 'Importar modelos propios', 'Oscilla': 'No indicado' },
          { 'Atributo': 'Entrada de imagen', 'Oscilla': 'Sí, archivos e imágenes (p. ej. MiniCPM-V 4.6)' },
          { 'Atributo': 'Entrada / salida de voz', 'Oscilla': 'Sí, conversaciones por voz en tiempo real' },
        ],
        note: 'Los atributos siguen la comparación de chats móviles usada en el directorio de software LLM local. «No indicado» significa que la ficha y el sitio web no mencionan la función, no que se haya probado y comprobado que falta.',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'Qué es Oscilla',
        content: [
          '**Oscilla es una app de chat con su propio entorno de ejecución de modelos en el dispositivo, no una interfaz para un servidor.** La ficha la describe como «local AI for Apple devices» (IA local para dispositivos Apple) y dice que ejecuta los modelos «entirely» (íntegramente) en el dispositivo, sin depender de la nube.',
          'La publica Matthew David Fusco bajo Martechia LLC (que opera como Oscilla). El motor de inferencia no se nombra en ninguna fuente pública, así que esta reseña no indica si usa MLX, llama.cpp o Core ML.',
          'Esta reseña se basa en la ficha de la App Store y en oscilla.ai. No incluye pruebas prácticas, por lo que aquí no se valoran la velocidad, el consumo de batería ni la calidad de las respuestas.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Cómo empezar',
        content: [
          '**La configuración es una instalación desde la App Store seguida de la descarga de un modelo.** La ficha no describe el flujo del primer arranque, así que los pasos siguientes se basan en lo que documenta.',
        ],
        numberedItems: [
          {
            title: 'Comprueba tu versión de iOS',
            whyItMatters: 'La ficha exige iOS 26.0 o posterior, así que los iPhone antiguos que no puedan actualizarse no la instalarán.',
          },
          {
            title: 'Instala Oscilla',
            whyItMatters: 'Consíguela en la [App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356); la app en sí ocupa menos de 50 MB.',
          },
          {
            title: 'Descarga un modelo',
            whyItMatters: 'Empieza con un modelo pequeño, ya que la ficha cita modelos de 350M a 8B de parámetros y uno más grande necesita más almacenamiento libre y memoria.',
          },
          {
            title: 'Empieza a chatear',
            whyItMatters: 'Escribe, habla con el modo de voz o adjunta un archivo o una imagen; la memoria y la búsqueda web vienen integradas en la app.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Funciones y modelos',
        content: [
          '**El atractivo de Oscilla es su amplitud: muchos modelos, más voz, memoria y búsqueda en una sola app gratuita.** Todo lo que sigue procede de la ficha de la App Store y del sitio del desarrollador.',
        ],
        items: [
          '**Más de 40 modelos.** Las actualizaciones recientes añaden Nvidia Nemotron Mini 4B, IBM Granite 4.1 (3B y 8B), LFM 2.5 (350M, 1.2B Instruct, 450M VL) y OpenBMB MiniCPM-V 4.6; la ficha también cita Gemma 4, Qwen 3, SmolLM3 y Ministral 3.',
          '**Voz en tiempo real.** Las conversaciones habladas se ejecutan en local, según la ficha.',
          '**Memoria integrada.** La app guarda contexto sobre ti entre chats; la ficha no indica dónde se almacena esa memoria más allá de «on your device» (en tu dispositivo).',
          '**Búsqueda web.** Aparece como función; la ficha no explica cómo se hace una consulta de búsqueda, así que da por hecho que necesita conexión a la red.',
          '**Análisis de archivos e imágenes.** Adjunta documentos o fotos; los modelos con visión, como MiniCPM-V 4.6, se encargan de las imágenes.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos del dispositivo',
        content: [
          '**Oscilla requiere iOS 26.0 o posterior y figura para iPhone.** La App Store no da ninguna cifra de RAM, así que el límite práctico es el tamaño de modelo que tu iPhone pueda mantener en memoria.',
          'Es de esperar que los modelos pequeños (de 350M a 4B de parámetros) funcionen en la mayoría de los iPhone compatibles y que los de clase 8B necesiten un dispositivo reciente y con más memoria. Es una regla general para modelos en el dispositivo, no una cifra de la ficha.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidad y datos',
        content: [
          '**La etiqueta de privacidad de la App Store dice «The developer does not collect any data from this app» (el desarrollador no recopila ningún dato de esta app).** La ficha y el sitio web describen la app como privada por diseño, con las conversaciones en el dispositivo.',
          'Como la app es de código cerrado y esta reseña no inspeccionó el tráfico de red, la afirmación no puede auditarse de forma independiente aquí. La función de búsqueda web implica al menos algo de uso de red cuando está activa; la ficha no da detalles. Apple señala que las etiquetas de privacidad las declara el propio desarrollador.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Compensaciones: ventajas frente a limitaciones',
        columns: ['Ventaja', 'Qué significa en el uso real', 'Limitación / advertencia'],
        rows: [
          {
            'Ventaja': 'Gratis y con una amplia lista de modelos',
            'Qué significa en el uso real': 'Puedes probar Gemma, Qwen, Granite y modelos con visión sin pagar.',
            'Limitación / advertencia': 'No se documenta el precio más allá de la ficha gratuita actual, y la página del sitio de la V2 no da ningún precio.',
          },
          {
            'Ventaja': 'Voz, memoria y búsqueda integradas',
            'Qué significa en el uso real': 'Una sola app cubre el chat hablado y el contexto persistente sin configuración adicional.',
            'Limitación / advertencia': 'La ficha no explica cómo se almacena la memoria ni cómo se realiza la búsqueda web.',
          },
          {
            'Ventaja': 'Funciona sin conexión',
            'Qué significa en el uso real': 'Los chats se quedan en el teléfono una vez descargado un modelo.',
            'Limitación / advertencia': 'El tamaño del modelo está limitado por la memoria del iPhone; los modelos grandes serán lentos o no estarán disponibles.',
          },
          {
            'Ventaja': 'Descarga pequeña de la app',
            'Qué significa en el uso real': 'La app ocupa 46.7 MB, y los modelos se descargan a medida que los necesitas.',
            'Limitación / advertencia': 'Cada modelo es una descarga aparte, de varios gigabytes en los más grandes.',
          },
          {
            'Ventaja': 'Etiqueta de privacidad sin datos recopilados',
            'Qué significa en el uso real': 'La etiqueta de Apple no indica ningún dato recopilado por el desarrollador.',
            'Limitación / advertencia': 'Código cerrado y autodeclarada; no se publica ningún motor, licencia ni auditoría.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla frente a alternativas',
        columns: ['App', 'Plataformas', 'Precio y licencia', 'Flexibilidad de modelos', 'Diferencia clave'],
        rows: [
          {
            'App': 'Oscilla',
            'Plataformas': 'iPhone',
            'Precio y licencia': 'Gratis, código cerrado',
            'Flexibilidad de modelos': 'Más de 40 modelos abiertos descargables',
            'Diferencia clave': 'Voz, memoria y búsqueda en una sola app gratuita; motor no revelado',
          },
          {
            'App': '[Locally AI](/es/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Precio y licencia': 'Freemium, código cerrado',
            'Flexibilidad de modelos': 'Modelos abiertos descargados dentro de la app',
            'Diferencia clave': 'También funciona en Mac y nombra MLX como su motor; incluye voz y entrada de imagen',
          },
          {
            'App': '[Private LLM](/es/power-local-llm/private-llm-review)',
            'Plataformas': 'iOS, Mac',
            'Precio y licencia': 'De pago, código cerrado',
            'Flexibilidad de modelos': 'Modelos descargados dentro de la app',
            'Diferencia clave': 'App de pago que también funciona en Mac, sin modo de voz en el directorio',
          },
          {
            'App': '[Enclave AI](/es/power-local-llm/enclave-ai-review-2026)',
            'Plataformas': 'iOS',
            'Precio y licencia': 'De pago, código cerrado',
            'Flexibilidad de modelos': 'Modelos descargados dentro de la app',
            'Diferencia clave': 'App de pago solo para iOS, con voz; sin entrada de visión en el directorio',
          },
          {
            'App': '[PocketPal AI](/es/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone, Android',
            'Precio y licencia': 'Gratis, MIT',
            'Flexibilidad de modelos': 'Modelos GGUF que tú descargas',
            'Diferencia clave': 'Código abierto, también en Android, y permite importar tus propios modelos GGUF',
          },
        ],
        note: 'Los detalles de plataforma, precio y funciones de apps de terceros cambian con frecuencia. Verifica los detalles actuales en la ficha propia de cada app antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quién debería usar Oscilla',
        items: [
          '**Usuarios de iPhone con iOS 26 que quieren probar muchos modelos abiertos gratis.** El catálogo es amplio y la app es gratuita.',
          '**Personas que quieren voz y memoria en una app local.** Ambas vienen integradas, no como extras.',
          '**Usuarios atentos a la privacidad que se sienten cómodos con una app de código cerrado.** La etiqueta de privacidad no indica datos recopilados, aunque aquí no puede auditarse.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quién no debería usar Oscilla',
        items: [
          '**Cualquiera que necesite código abierto.** El código no es público; prueba mejor [PocketPal AI](/es/power-local-llm/pocketpal-ai-review).',
          '**Usuarios que no pueden usar iOS 26.** La ficha exige iOS 26.0 o posterior.',
          '**Usuarios de Mac, iPad o Android.** En el panel de compatibilidad solo se confirma el iPhone; [Locally AI](/es/power-local-llm/locally-ai-review) también funciona en Mac.',
          '**Personas que necesitan importar sus propios modelos.** La ficha no lo menciona.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es gratis Oscilla?',
            a: 'La ficha de la App Store la muestra como gratuita y sin compras dentro de la app. El precio futuro no está documentado.',
          },
          {
            q: '¿Quién desarrolla Oscilla?',
            a: 'Matthew David Fusco, que publica bajo Martechia LLC, la cual opera como Oscilla.',
          },
          {
            q: '¿Funciona Oscilla en iPad o Mac?',
            a: 'La descripción dice que funciona en iPhone, iPad y Mac, pero el panel de compatibilidad indica solo iPhone. Confírmalo en la App Store con tu dispositivo.',
          },
          {
            q: '¿Qué modelos ofrece Oscilla?',
            a: 'La ficha cita Gemma 4, Qwen 3, SmolLM3, Ministral 3, Granite 4.1, LFM 2.5, Nemotron Mini 4B y MiniCPM-V 4.6, entre más de 40 en total.',
          },
          {
            q: '¿Qué muestra el sitio web de Oscilla?',
            a: 'En el momento de la reseña, [oscilla.ai](https://www.oscilla.ai) es una página «coming soon» (próximamente) de Oscilla V2 con fecha del 11 de septiembre de 2026, sin detalles de funciones ni de precio.',
          },
          {
            q: '¿Es Oscilla de código abierto?',
            a: 'No se encontró ningún repositorio público ni licencia, así que esta reseña la trata como de código cerrado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content: [
          'Oscilla reúne una amplia lista de modelos, voz, memoria y entrada de imagen en una pequeña app gratuita para iPhone, lo que la hace fácil de probar si tu teléfono tiene iOS 26.',
          'El inconveniente es la transparencia. El motor no se nombra, el código es cerrado, el sitio web es un marcador de posición y algunos detalles, como la compatibilidad con iPad y Mac, no coinciden entre la descripción y el panel de compatibilidad. Eso está bien para experimentar sin compromiso y es una mala base para cualquier cosa delicada.',
          'Instálala para ver cómo se comportan sus modelos en tu teléfono. Si quieres código abierto o un motor revelado, empieza con [PocketPal AI](/es/power-local-llm/pocketpal-ai-review) o [Locally AI](/es/power-local-llm/locally-ai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Oscilla - Local AI en la App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — versión, precio, tamaño, requisitos, modelos y etiqueta de privacidad.',
          '[oscilla.ai](https://www.oscilla.ai) — sitio web del desarrollador, actualmente una página «coming soon» de la V2.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Reseña de Locally AI](/es/power-local-llm/locally-ai-review) — una app freemium en el dispositivo para iOS y Mac.',
          '[Reseña de Private LLM](/es/power-local-llm/private-llm-review) — una app de pago de modelos en el dispositivo para iOS y Mac.',
          '[Reseña de Enclave AI](/es/power-local-llm/enclave-ai-review-2026) — un asistente de pago en el dispositivo para iOS, con voz.',
          '[Reseña de PocketPal AI](/es/power-local-llm/pocketpal-ai-review) — el cliente de chat GGUF gratuito y de código abierto.',
          '[El directorio completo de software LLM local](/es/directory) — un directorio más amplio de herramientas LLM locales en todas las plataformas.',
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-pt.webp',
    title: 'Análise do Oscilla: chat de IA gratuito no dispositivo para iPhone',
    seoTitle: 'Análise do Oscilla: chat de IA gratuito no iPhone',
    intro:
      'O Oscilla é um aplicativo gratuito para iPhone que baixa modelos de IA abertos e os executa no próprio celular, com conversas por voz, memória integrada, busca na web opcional e análise de arquivos e imagens. Esta análise cobre o que a ficha da App Store e o site do desenvolvedor documentam, o que deixam de fora e como o Oscilla se compara a outros aplicativos de IA local para iOS.',
    metaDescription:
      'Análise do Oscilla: aplicativo gratuito para iPhone que executa mais de 40 modelos abertos (Gemma 4, Qwen 3, Granite) no dispositivo, com voz, memória e imagens. Requisitos, privacidade, limites e alternativas.',
    twitterDescription:
      'Análise do Oscilla: um app iOS gratuito que executa modelos abertos no dispositivo. Modelos, exigência do iOS 26, selo de privacidade, código fechado e comparação com Locally AI e Private LLM.',
    audience:
      'Usuários de iPhone com iOS 26 que querem um aplicativo gratuito para executar modelos abertos offline, com voz e memória — aborda modelos, requisitos, privacidade, limites e como o Oscilla se compara a outros aplicativos de IA local para iOS.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'análise do Oscilla',
    targetKeywords: [
      'análise oscilla',
      'oscilla ia local',
      'oscilla ai iphone',
      'rodar llm no iphone offline',
      'aplicativo de ia no dispositivo ios',
      'aplicativo de ia privada para iphone',
      'gemma 4 no iphone',
      'aplicativo gratuito de ia local para iphone',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**O Oscilla é um aplicativo gratuito e de código fechado para iPhone que executa modelos abertos baixáveis inteiramente no dispositivo, com voz em tempo real, memória integrada, busca na web e análise de arquivos e imagens.** A ficha dele na App Store cita modelos como Gemma 4, Qwen 3, Granite 4.1, SmolLM3, MiniCPM-V 4.6 e Ministral 3, exige iOS 26.0 ou posterior e exibe o selo de privacidade "Dados não coletados" da Apple. Esta análise cobre a versão 1.2026.05 e se baseia na ficha pública e no site, não em testes práticos no aparelho.',
    quickAnswerTop: {
      pt: {
        question: 'Vale a pena instalar o Oscilla no iPhone?',
        answer:
          'Sim, se você usa o iOS 26 e quer uma forma gratuita de testar vários modelos abertos offline, incluindo visão e voz. Não vale a pena se você precisa de código aberto, de uma versão para Mac ou Android ou de um motor de inferência divulgado: nada disso está documentado. Locally AI e Private LLM são as alternativas mais próximas no iOS.',
        bullets: [
          'Gratuito na App Store, sem compras no aplicativo exibidas na ficha.',
          'Executa mais de 40 modelos abertos no dispositivo; a ficha cita Gemma 4, Qwen 3 e MiniCPM-V 4.6.',
          'Conversas por voz, memória integrada, busca na web e análise de arquivos e imagens.',
          'Exige iOS 26.0 ou posterior; o painel de compatibilidade lista apenas iPhone.',
          'Código fechado; o selo de privacidade diz que o desenvolvedor não coleta dados.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'Resposta rápida', anchor: 'quick-answer' },
      { label: 'Como obter o Oscilla', anchor: 'get-it' },
      { label: 'Oscilla em resumo', anchor: 'at-a-glance' },
      { label: 'O que é o Oscilla', anchor: 'what-is-oscilla' },
      { label: 'Como começar', anchor: 'how-to-get-started' },
      { label: 'Recursos e modelos', anchor: 'features' },
      { label: 'Requisitos do aparelho', anchor: 'requirements' },
      { label: 'Privacidade e dados', anchor: 'privacy' },
      { label: 'Prós e contras: benefícios vs. limitações', anchor: 'tradeoffs' },
      { label: 'Oscilla vs. alternativas', anchor: 'vs-alternatives' },
      { label: 'Quem deveria usar o Oscilla', anchor: 'who-should-use' },
      { label: 'Quem não deveria usar o Oscilla', anchor: 'who-should-not-use' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leituras relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Oscilla, da Martechia LLC, é um aplicativo gratuito para iPhone que executa modelos de IA abertos totalmente no dispositivo, com voz, memória, busca na web e análise de imagens, e a ficha dele diz que o desenvolvedor não coleta dados.',
          },
          {
            type: 'plain-terms',
            text: 'Pense nele como uma biblioteca de modelos no seu celular: você escolhe um modelo aberto, baixa uma vez e conversa com ele sem servidor na nuvem, mas não consegue inspecionar o código por trás.',
          },
        ],
        items: [
          'Versão analisada: 1.2026.05, conforme a [ficha da App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356), atualizada pela última vez em 21 de maio.',
          'Preço: gratuito, sem compras no aplicativo exibidas na ficha.',
          'Modelos: mais de 40 modelos abertos baixáveis, de 350M a 8B de parâmetros nos exemplos citados pela ficha.',
          'Plataforma: iPhone com iOS 26.0 ou posterior; Mac e iPad são mencionados na descrição, mas não no painel de compatibilidade.',
          'Abertura: código fechado, e o site do desenvolvedor é uma página de "em breve" para uma versão V2 no momento da análise.',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'Como obter o Oscilla',
        content: [
          '**O Oscilla é distribuído somente pela Apple App Store.** O download tem 46,7 MB; os modelos são baixados separadamente dentro do aplicativo.',
          'Esta análise complementa o [diretório de software de LLM local](/pt/directory) da PromptQuorum, que lista o Oscilla ao lado de outras ferramentas de IA local e no dispositivo.',
        ],
        columns: ['Canal', 'Como obter'],
        rows: [
          {
            'Canal': 'Apple App Store (iPhone)',
            'Como obter': '[Oscilla - Local AI na App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            'Canal': 'Site do desenvolvedor',
            'Como obter': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: 'A descrição da ficha diz que o aplicativo roda em "iPhone, iPad e Mac", mas o painel de compatibilidade lista apenas iPhone. Confira o seu aparelho na página da App Store antes de instalar.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla em resumo',
        columns: ['Atributo', 'Oscilla'],
        rows: [
          { 'Atributo': 'Plataforma', 'Oscilla': 'iPhone (iOS 26.0+)' },
          { 'Atributo': 'Preço', 'Oscilla': 'Gratuito' },
          { 'Atributo': 'Licença', 'Oscilla': 'Código fechado' },
          { 'Atributo': 'Funciona totalmente offline', 'Oscilla': 'Sim, segundo a ficha: "inteiramente no seu iPhone"' },
          { 'Atributo': 'Download de modelos no app', 'Oscilla': 'Sim, mais de 40 modelos' },
          { 'Atributo': 'Importar seus próprios modelos', 'Oscilla': 'Não informado' },
          { 'Atributo': 'Entrada de imagem', 'Oscilla': 'Sim, análise de arquivos e imagens (ex.: MiniCPM-V 4.6)' },
          { 'Atributo': 'Entrada / saída de voz', 'Oscilla': 'Sim, conversas por voz em tempo real' },
        ],
        note: 'Os atributos seguem a comparação de chat para celular usada no Diretório de Software de LLM Local. "Não informado" significa que a ficha e o site não mencionam o recurso, não que ele foi testado e considerado ausente.',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'O que é o Oscilla',
        content: [
          '**O Oscilla é um aplicativo de chat com seu próprio ambiente de execução de modelos no dispositivo, não uma interface para um servidor.** A ficha o descreve como "IA local para dispositivos Apple" e diz que ele executa os modelos "inteiramente" no aparelho, sem dependência da nuvem.',
          'Ele é publicado por Matthew David Fusco, pela Martechia LLC (que opera como Oscilla). O ambiente de inferência não é citado em nenhuma fonte pública, então esta análise não afirma se ele usa MLX, llama.cpp ou Core ML.',
          'Esta análise se baseia na ficha da App Store e no oscilla.ai. Ela não inclui testes práticos, por isso velocidade, consumo de bateria e qualidade das respostas não são avaliados aqui.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'Como começar',
        content: [
          '**A configuração é uma instalação pela App Store seguida do download de um modelo.** A ficha não descreve o fluxo da primeira execução, então os passos abaixo seguem o que ela documenta.',
        ],
        numberedItems: [
          {
            title: 'Verifique a versão do iOS',
            whyItMatters: 'A ficha exige iOS 26.0 ou posterior, então iPhones mais antigos que não podem ser atualizados não conseguem instalá-lo.',
          },
          {
            title: 'Instale o Oscilla',
            whyItMatters: 'Baixe-o na [App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356); o aplicativo em si tem menos de 50 MB.',
          },
          {
            title: 'Baixe um modelo',
            whyItMatters: 'Comece por um modelo pequeno, já que a ficha cita modelos de 350M a 8B de parâmetros e um modelo maior exige mais armazenamento livre e memória.',
          },
          {
            title: 'Comece a conversar',
            whyItMatters: 'Digite, fale pelo modo de voz ou anexe um arquivo ou imagem; a memória e a busca na web já vêm no aplicativo.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'Recursos e modelos',
        content: [
          '**O ponto forte do Oscilla é a variedade: muitos modelos mais voz, memória e busca em um único aplicativo gratuito.** Tudo abaixo vem da ficha da App Store e do site do desenvolvedor.',
        ],
        items: [
          '**Mais de 40 modelos.** As atualizações recentes acrescentam Nvidia Nemotron Mini 4B, IBM Granite 4.1 (3B e 8B), LFM 2.5 (350M, 1.2B Instruct, 450M VL) e OpenBMB MiniCPM-V 4.6; a ficha também cita Gemma 4, Qwen 3, SmolLM3 e Ministral 3.',
          '**Voz em tempo real.** As conversas faladas rodam localmente, segundo a ficha.',
          '**Memória integrada.** O aplicativo guarda contexto sobre você entre as conversas; a ficha não diz onde essa memória fica armazenada além de "no seu dispositivo".',
          '**Busca na web.** Listada como recurso; a ficha não diz como a busca é feita, então presuma que ela precisa de conexão com a internet.',
          '**Análise de arquivos e imagens.** Anexe documentos ou fotos; modelos com visão, como o MiniCPM-V 4.6, processam imagens.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'Requisitos do aparelho',
        content: [
          '**O Oscilla exige iOS 26.0 ou posterior e está listado para iPhone.** A App Store não informa a quantidade de RAM, então o limite prático é o tamanho do modelo que o seu iPhone consegue manter na memória.',
          'Espere que modelos pequenos (de 350M a 4B de parâmetros) rodem na maioria dos iPhones compatíveis e que os modelos da classe de 8B exijam um aparelho recente, com mais memória. Essa é uma regra geral para modelos no dispositivo, não um número da ficha.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Privacidade e dados',
        content: [
          '**O selo de privacidade da App Store diz: "O desenvolvedor não coleta nenhum dado deste aplicativo."** A ficha e o site descrevem o aplicativo como privado por projeto, com as conversas permanecendo no aparelho.',
          'Como o aplicativo é de código fechado e esta análise não inspecionou o tráfego de rede, a afirmação não pode ser auditada de forma independente aqui. O recurso de busca na web implica algum uso de rede quando está ativo; a ficha não detalha isso. A Apple observa que os selos de privacidade são informados pelo próprio desenvolvedor.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'Prós e contras: benefícios vs. limitações',
        columns: ['Benefício', 'O que significa no uso real', 'Limitação / ressalva'],
        rows: [
          {
            'Benefício': 'Gratuito, com uma lista ampla de modelos',
            'O que significa no uso real': 'Você pode testar Gemma, Qwen, Granite e modelos com visão sem pagar.',
            'Limitação / ressalva': 'O preço além da ficha gratuita atual não está documentado, e a página do site da V2 não informa preços.',
          },
          {
            'Benefício': 'Voz, memória e busca integradas',
            'O que significa no uso real': 'Um único aplicativo cobre conversa falada e contexto persistente, sem configuração extra.',
            'Limitação / ressalva': 'A ficha não explica como a memória é armazenada nem como a busca na web é feita.',
          },
          {
            'Benefício': 'Funciona offline',
            'O que significa no uso real': 'As conversas ficam no celular depois que um modelo é baixado.',
            'Limitação / ressalva': 'O tamanho do modelo é limitado pela memória do iPhone; modelos grandes ficam lentos ou indisponíveis.',
          },
          {
            'Benefício': 'Download pequeno do aplicativo',
            'O que significa no uso real': 'O aplicativo tem 46,7 MB, e os modelos são baixados conforme você precisa.',
            'Limitação / ressalva': 'Cada modelo é um download separado, de vários gigabytes nos maiores.',
          },
          {
            'Benefício': 'Selo de privacidade sem coleta de dados',
            'O que significa no uso real': 'O selo da Apple não lista nenhum dado coletado pelo desenvolvedor.',
            'Limitação / ressalva': 'Código fechado e informado pelo próprio desenvolvedor; não há motor, licença nem auditoria publicados.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla vs. alternativas',
        columns: ['Aplicativo', 'Plataformas', 'Preço e licença', 'Flexibilidade de modelos', 'Diferença-chave'],
        rows: [
          {
            'Aplicativo': 'Oscilla',
            'Plataformas': 'iPhone',
            'Preço e licença': 'Gratuito, código fechado',
            'Flexibilidade de modelos': 'Mais de 40 modelos abertos baixáveis',
            'Diferença-chave': 'Voz, memória e busca em um aplicativo gratuito; motor não divulgado',
          },
          {
            'Aplicativo': '[Locally AI](/pt/power-local-llm/locally-ai-review)',
            'Plataformas': 'iOS, Mac',
            'Preço e licença': 'Freemium, código fechado',
            'Flexibilidade de modelos': 'Modelos abertos baixados no app',
            'Diferença-chave': 'Também roda no Mac e cita o MLX como ambiente de execução; inclui voz e entrada de imagem',
          },
          {
            'Aplicativo': '[Private LLM](/pt/power-local-llm/private-llm-review)',
            'Plataformas': 'iOS, Mac',
            'Preço e licença': 'Pago, código fechado',
            'Flexibilidade de modelos': 'Modelos baixados no app',
            'Diferença-chave': 'Aplicativo pago que também roda no Mac, sem modo de voz listado no diretório',
          },
          {
            'Aplicativo': '[Enclave AI](/pt/power-local-llm/enclave-ai-review-2026)',
            'Plataformas': 'iOS',
            'Preço e licença': 'Pago, código fechado',
            'Flexibilidade de modelos': 'Modelos baixados no app',
            'Diferença-chave': 'Aplicativo pago só para iOS, com voz; sem entrada de visão listada no diretório',
          },
          {
            'Aplicativo': '[PocketPal AI](/pt/power-local-llm/pocketpal-ai-review)',
            'Plataformas': 'iPhone, Android',
            'Preço e licença': 'Gratuito, MIT',
            'Flexibilidade de modelos': 'Modelos GGUF que você mesmo baixa',
            'Diferença-chave': 'Código aberto, também no Android, e permite importar seus próprios modelos GGUF',
          },
        ],
        note: 'Os detalhes de plataforma, preço e recursos de aplicativos de terceiros mudam com frequência. Verifique os detalhes atuais na ficha de cada aplicativo antes de decidir.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Quem deveria usar o Oscilla',
        items: [
          '**Usuários de iPhone com iOS 26 que querem testar vários modelos abertos de graça.** O catálogo é amplo e o aplicativo é gratuito.',
          '**Pessoas que querem voz e memória em um aplicativo local.** Os dois recursos já vêm integrados, não como complementos.',
          '**Usuários atentos à privacidade que aceitam um aplicativo de código fechado.** O selo de privacidade não lista nenhum dado coletado, embora ele não possa ser auditado aqui.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Quem não deveria usar o Oscilla',
        items: [
          '**Quem precisa de código aberto.** O código não é público; experimente o [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review).',
          '**Usuários que não conseguem rodar o iOS 26.** A ficha exige iOS 26.0 ou posterior.',
          '**Usuários de Mac, iPad ou Android.** Só o iPhone está confirmado no painel de compatibilidade; o [Locally AI](/pt/power-local-llm/locally-ai-review) também roda no Mac.',
          '**Pessoas que precisam importar seus próprios modelos.** A ficha não menciona esse recurso.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O Oscilla é gratuito?',
            a: 'A ficha da App Store o mostra como gratuito, sem compras no aplicativo. O preço futuro não está documentado.',
          },
          {
            q: 'Quem faz o Oscilla?',
            a: 'Matthew David Fusco, que publica pela Martechia LLC, empresa que opera como Oscilla.',
          },
          {
            q: 'O Oscilla funciona no iPad ou no Mac?',
            a: 'A descrição diz que ele roda em iPhone, iPad e Mac, mas o painel de compatibilidade lista apenas iPhone. Confirme na App Store com o seu aparelho.',
          },
          {
            q: 'Quais modelos o Oscilla oferece?',
            a: 'A ficha cita Gemma 4, Qwen 3, SmolLM3, Ministral 3, Granite 4.1, LFM 2.5, Nemotron Mini 4B e MiniCPM-V 4.6, entre mais de 40 no total.',
          },
          {
            q: 'O que o site do Oscilla mostra?',
            a: 'No momento da análise, o [oscilla.ai](https://www.oscilla.ai) é uma página de "em breve" do Oscilla V2, com data de 11 de setembro de 2026, sem detalhes de recursos nem de preço.',
          },
          {
            q: 'O Oscilla é de código aberto?',
            a: 'Não foi encontrado nenhum repositório público nem licença, então esta análise o trata como de código fechado.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content: [
          'O Oscilla reúne uma lista ampla de modelos, voz, memória e entrada de imagem em um pequeno aplicativo gratuito para iPhone, o que o torna fácil de testar se o seu celular roda o iOS 26.',
          'O porém é a transparência. O ambiente de execução não é citado, o código é fechado, o site é um espaço reservado e alguns detalhes, como o suporte a iPad e Mac, são inconsistentes entre a descrição e o painel de compatibilidade. Isso é aceitável para experimentar sem compromisso e uma base ruim para qualquer coisa sensível.',
          'Instale-o para ver como os modelos se comportam no seu celular. Se você quer código aberto ou um motor divulgado, comece pelo [PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) ou pelo [Locally AI](/pt/power-local-llm/locally-ai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Oscilla - Local AI na App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — versão, preço, tamanho, requisitos, modelos e selo de privacidade.',
          '[oscilla.ai](https://www.oscilla.ai) — site do desenvolvedor, atualmente uma página de "em breve" da V2.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Análise do Locally AI](/pt/power-local-llm/locally-ai-review) — um aplicativo freemium no dispositivo para iOS e Mac.',
          '[Análise do Private LLM](/pt/power-local-llm/private-llm-review) — um aplicativo pago de modelos no dispositivo para iOS e Mac.',
          '[Análise do Enclave AI](/pt/power-local-llm/enclave-ai-review-2026) — um assistente pago no dispositivo para iOS, com voz.',
          '[Análise do PocketPal AI](/pt/power-local-llm/pocketpal-ai-review) — o cliente de chat GGUF gratuito e de código aberto.',
          '[O diretório completo de software de LLM local](/pt/directory) — um diretório mais amplo de ferramentas de LLM local em várias plataformas.',
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-ar.webp',
    title: 'مراجعة Oscilla: دردشة ذكاء اصطناعي مجانية على الجهاز لآيفون',
    seoTitle: 'مراجعة Oscilla: دردشة ذكاء اصطناعي مجانية على الجهاز لآيفون',
    intro:
      'Oscilla تطبيق مجاني لآيفون ينزّل نماذج ذكاء اصطناعي مفتوحة ويشغّلها على الهاتف نفسه، مع محادثات صوتية وذاكرة مدمجة وبحث اختياري على الويب وتحليل للملفات والصور. تتناول هذه المراجعة ما توثّقه صفحة التطبيق على App Store وموقع المطوّر، وما تغفله، ومقارنة Oscilla بتطبيقات الذكاء الاصطناعي المحلي الأخرى على iOS.',
    metaDescription:
      'مراجعة Oscilla: تطبيق آيفون مجاني يشغّل أكثر من 40 نموذجًا مفتوحًا (Gemma 4 وQwen 3 وGranite) على الجهاز مع الصوت والذاكرة وإدخال الصور. المتطلبات وتسمية الخصوصية والقيود والبدائل.',
    twitterDescription:
      'مراجعة Oscilla: تطبيق iOS مجاني يشغّل نماذج مفتوحة على الجهاز. النماذج ومتطلب iOS 26 وتسمية الخصوصية وكونه مغلق المصدر ومقارنته بـ Locally AI وPrivate LLM.',
    audience:
      'مالكو آيفون بنظام iOS 26 الذين يريدون تطبيقًا مجانيًا يشغّل نماذج مفتوحة دون إنترنت مع الصوت والذاكرة — يغطي النماذج والمتطلبات والخصوصية والقيود ومقارنة Oscilla بتطبيقات الذكاء الاصطناعي المحلي الأخرى على iOS.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'مراجعة Oscilla',
    targetKeywords: [
      'مراجعة oscilla',
      'oscilla ذكاء اصطناعي محلي',
      'تطبيق oscilla للآيفون',
      'تشغيل نموذج لغوي على الآيفون دون إنترنت',
      'تطبيق ذكاء اصطناعي على الجهاز iOS',
      'تطبيق ذكاء اصطناعي خاص للآيفون',
      'تطبيق gemma 4 للآيفون',
      'تطبيق ذكاء اصطناعي محلي مجاني للآيفون',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscilla تطبيق آيفون مجاني ومغلق المصدر يشغّل نماذج مفتوحة قابلة للتنزيل بالكامل على الجهاز، مع محادثة صوتية فورية وذاكرة مدمجة وبحث على الويب وتحليل للملفات والصور.** تذكر صفحته على App Store نماذج مثل Gemma 4 وQwen 3 وGranite 4.1 وSmolLM3 وMiniCPM-V 4.6 وMinistral 3، وتشترط iOS 26.0 أو أحدث، وتحمل تسمية الخصوصية من Apple "Data Not Collected" (لا تُجمع بيانات). تغطي هذه المراجعة الإصدار 1.2026.05 وتستند إلى الصفحة العلنية والموقع الإلكتروني، لا إلى اختبار عملي على جهاز.',
    quickAnswerTop: {
      ar: {
        question: 'هل يستحق Oscilla التثبيت على آيفون؟',
        answer:
          'نعم، إذا كنت تستخدم iOS 26 وتريد طريقة مجانية لتجربة نماذج مفتوحة كثيرة دون إنترنت، بما فيها الرؤية والصوت. تجاوزه إذا كنت تحتاج إلى مصدر مفتوح أو إصدار لماك أو أندرويد أو محرك استدلال معلن: لا شيء من ذلك موثّق. أقرب البدائل على iOS هما Locally AI وPrivate LLM.',
        bullets: [
          'مجاني على App Store، ولا مشتريات داخل التطبيق ظاهرة في الصفحة.',
          'يشغّل أكثر من 40 نموذجًا مفتوحًا على الجهاز؛ وتذكر الصفحة Gemma 4 وQwen 3 وMiniCPM-V 4.6.',
          'محادثات صوتية، وذاكرة مدمجة، وبحث على الويب، وتحليل للملفات والصور.',
          'يتطلب iOS 26.0 أو أحدث؛ وتدرج لوحة التوافق الآيفون فقط.',
          'مغلق المصدر؛ وتقول تسمية الخصوصية إن المطوّر لا يجمع أي بيانات.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: 'إجابة سريعة', anchor: 'quick-answer' },
      { label: 'كيفية الحصول على Oscilla', anchor: 'get-it' },
      { label: 'Oscilla في لمحة', anchor: 'at-a-glance' },
      { label: 'ما هو Oscilla', anchor: 'what-is-oscilla' },
      { label: 'كيفية البدء', anchor: 'how-to-get-started' },
      { label: 'الميزات والنماذج', anchor: 'features' },
      { label: 'متطلبات الجهاز', anchor: 'requirements' },
      { label: 'الخصوصية والبيانات', anchor: 'privacy' },
      { label: 'المفاضلات: المزايا مقابل القيود', anchor: 'tradeoffs' },
      { label: 'Oscilla مقابل البدائل', anchor: 'vs-alternatives' },
      { label: 'من يجب أن يستخدم Oscilla', anchor: 'who-should-use' },
      { label: 'من لا يجب أن يستخدم Oscilla', anchor: 'who-should-not-use' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الحكم النهائي', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'الخلاصة',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Oscilla، من شركة Martechia LLC، تطبيق آيفون مجاني يشغّل نماذج ذكاء اصطناعي مفتوحة بالكامل على الجهاز مع الصوت والذاكرة والبحث على الويب وتحليل الصور، وتقول صفحته إن المطوّر لا يجمع أي بيانات.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّله مكتبة نماذج على هاتفك: تختار نموذجًا مفتوحًا وتنزّله مرة واحدة وتدردش معه دون خادم سحابي، لكنك لا تستطيع فحص الشيفرة التي تقف وراءه.',
          },
        ],
        items: [
          'الإصدار المراجَع: 1.2026.05 كما يظهر في [صفحة التطبيق على App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)، وآخر تحديث له في 21 مايو.',
          'السعر: مجاني، ولا مشتريات داخل التطبيق ظاهرة في الصفحة.',
          'النماذج: أكثر من 40 نموذجًا مفتوحًا قابلًا للتنزيل، من 350M إلى 8B معامل في الأمثلة التي تذكرها الصفحة.',
          'المنصة: آيفون بنظام iOS 26.0 أو أحدث؛ ويُذكر ماك وآيباد في الوصف لكن ليس في لوحة التوافق.',
          'الانفتاح: مغلق المصدر، وموقع المطوّر صفحة "قريبًا" لإصدار V2 وقت المراجعة.',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'كيفية الحصول على Oscilla',
        content: [
          '**يُوزَّع Oscilla عبر متجر Apple App Store فقط.** حجم التنزيل 46.7 MB؛ وتُنزَّل النماذج بصورة منفصلة داخل التطبيق.',
          'تكمّل هذه المراجعة [دليل برمجيات LLM المحلية](/ar/directory) من PromptQuorum، الذي يدرج Oscilla إلى جانب أدوات ذكاء اصطناعي أخرى تعمل على الجهاز وأدوات محلية.',
        ],
        columns: ['القناة', 'كيفية الحصول عليه'],
        rows: [
          {
            'القناة': 'Apple App Store (آيفون)',
            'كيفية الحصول عليه': '[Oscilla - Local AI على App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            'القناة': 'موقع المطوّر',
            'كيفية الحصول عليه': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: 'يقول وصف الصفحة إن التطبيق يعمل على "iPhone وiPad وMac"، لكن لوحة التوافق تدرج الآيفون فقط. تحقق من جهازك في صفحة App Store قبل التثبيت.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla في لمحة',
        columns: ['الخاصية', 'Oscilla'],
        rows: [
          { 'الخاصية': 'المنصة', 'Oscilla': 'آيفون (iOS 26.0+)' },
          { 'الخاصية': 'السعر', 'Oscilla': 'مجاني' },
          { 'الخاصية': 'الترخيص', 'Oscilla': 'مغلق المصدر' },
          { 'الخاصية': 'يعمل دون إنترنت بالكامل', 'Oscilla': 'نعم، بحسب الصفحة: "entirely on your iPhone"' },
          { 'الخاصية': 'تنزيل النماذج داخل التطبيق', 'Oscilla': 'نعم، أكثر من 40 نموذجًا' },
          { 'الخاصية': 'استيراد نماذجك الخاصة', 'Oscilla': 'غير مذكور' },
          { 'الخاصية': 'إدخال الصور', 'Oscilla': 'نعم، تحليل الملفات والصور (مثل MiniCPM-V 4.6)' },
          { 'الخاصية': 'إدخال/إخراج صوتي', 'Oscilla': 'نعم، محادثات صوتية فورية' },
        ],
        note: 'تتبع الخصائص مقارنة تطبيقات الدردشة على الجوال المعتمدة في دليل برمجيات LLM المحلية. تعني «غير مذكور» أن الصفحة والموقع لا يذكران الميزة، لا أنها اختُبرت وتبيّن غيابها.',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'ما هو Oscilla',
        content: [
          '**Oscilla تطبيق دردشة بمحرك نماذج خاص به يعمل على الجهاز، وليس واجهة أمامية لخادم.** تصفه الصفحة بأنه "local AI for Apple devices" (ذكاء اصطناعي محلي لأجهزة Apple)، وتقول إنه يشغّل النماذج "entirely" (بالكامل) على الجهاز دون أي اعتماد على السحابة.',
          'ينشره Matthew David Fusco تحت شركة Martechia LLC (التي تعمل باسم Oscilla). ولا يُذكر محرك الاستدلال في أي مصدر علني، لذا لا تحدد هذه المراجعة هل يستخدم MLX أو llama.cpp أو Core ML.',
          'تعتمد هذه المراجعة على صفحة التطبيق على App Store وموقع oscilla.ai. ولا تتضمن اختبارًا عمليًا، لذا لا تُقيَّم هنا السرعة ولا استهلاك البطارية ولا جودة الإجابات.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: 'كيفية البدء',
        content: [
          '**الإعداد عبارة عن تثبيت من App Store يعقبه تنزيل نموذج.** لا تصف الصفحة تدفق التشغيل الأول، لذا تتبع الخطوات أدناه ما توثّقه.',
        ],
        numberedItems: [
          {
            title: 'تحقق من إصدار iOS',
            whyItMatters: 'تشترط الصفحة iOS 26.0 أو أحدث، لذا لن تثبّته الآيفونات الأقدم التي لا يمكن تحديثها.',
          },
          {
            title: 'ثبّت Oscilla',
            whyItMatters: 'احصل عليه من [App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)؛ وحجم التطبيق نفسه أقل من 50 MB.',
          },
          {
            title: 'نزّل نموذجًا',
            whyItMatters: 'ابدأ بنموذج صغير، فالصفحة تذكر نماذج من 350M إلى 8B معامل، ويحتاج النموذج الأكبر إلى مساحة تخزين وذاكرة أكثر.',
          },
          {
            title: 'ابدأ الدردشة',
            whyItMatters: 'اكتب أو تحدّث بالوضع الصوتي أو أرفق ملفًا أو صورة؛ والذاكرة والبحث على الويب مدمجان في التطبيق.',
          },
        ],
      },
      features: {
        id: 'features',
        title: 'الميزات والنماذج',
        content: [
          '**ميزة Oscilla الأساسية هي الاتساع: نماذج كثيرة مع الصوت والذاكرة والبحث في تطبيق مجاني واحد.** كل ما يلي مأخوذ من صفحة App Store وموقع المطوّر.',
        ],
        items: [
          '**أكثر من 40 نموذجًا.** تضيف التحديثات الأخيرة Nvidia Nemotron Mini 4B وIBM Granite 4.1 (بحجمي 3B و8B) وLFM 2.5 (350M وInstruct 1.2B وVL 450M) وOpenBMB MiniCPM-V 4.6؛ وتذكر الصفحة أيضًا Gemma 4 وQwen 3 وSmolLM3 وMinistral 3.',
          '**صوت فوري.** تعمل المحادثات المنطوقة محليًا بحسب الصفحة.',
          '**ذاكرة مدمجة.** يحتفظ التطبيق بسياق عنك عبر المحادثات؛ ولا تحدد الصفحة مكان تخزين هذه الذاكرة بخلاف عبارة "on your device" (على جهازك).',
          '**البحث على الويب.** مدرج ضمن الميزات؛ ولا تبيّن الصفحة كيف يُنفَّذ طلب البحث، فافترض أنه يحتاج إلى اتصال بالشبكة.',
          '**تحليل الملفات والصور.** أرفق مستندات أو صورًا؛ وتتعامل النماذج القادرة على الرؤية مثل MiniCPM-V 4.6 مع الصور.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: 'متطلبات الجهاز',
        content: [
          '**يتطلب Oscilla نظام iOS 26.0 أو أحدث، وهو مدرج للآيفون.** لا يعطي App Store رقمًا للذاكرة العشوائية، لذا فالحد العملي هو حجم النموذج الذي يستطيع آيفونك إبقاءه في الذاكرة.',
          'توقّع أن تعمل النماذج الصغيرة (من 350M إلى 4B معامل) على معظم الآيفونات المدعومة، وأن تحتاج النماذج من فئة 8B إلى جهاز حديث بذاكرة أكبر. هذه قاعدة عامة للنماذج على الجهاز، وليست رقمًا من الصفحة.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'الخصوصية والبيانات',
        content: [
          '**تقول تسمية الخصوصية في App Store: "The developer does not collect any data from this app" (المطوّر لا يجمع أي بيانات من هذا التطبيق).** وتصف الصفحة والموقع التطبيق بأنه خاص بالتصميم، مع بقاء المحادثات على الجهاز.',
          'ولأن التطبيق مغلق المصدر ولم تفحص هذه المراجعة حركة الشبكة، فلا يمكن التحقق من هذا الادعاء بصورة مستقلة هنا. وتوحي ميزة البحث على الويب باستخدام للشبكة على الأقل عند تفعيلها؛ ولا تفصّل الصفحة ذلك. وتنبّه Apple إلى أن تسميات الخصوصية يقدّمها المطوّر بنفسه.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: 'المفاضلات: المزايا مقابل القيود',
        columns: ['الميزة', 'ما تعنيه في الاستخدام الفعلي', 'القيد / الملاحظة'],
        rows: [
          {
            'الميزة': 'مجاني مع قائمة نماذج واسعة',
            'ما تعنيه في الاستخدام الفعلي': 'يمكنك تجربة نماذج Gemma وQwen وGranite ونماذج الرؤية دون دفع.',
            'القيد / الملاحظة': 'لا يوثَّق السعر بعد صفحة اليوم المجانية، ولا تذكر صفحة V2 على الموقع أي أسعار.',
          },
          {
            'الميزة': 'الصوت والذاكرة والبحث مدمجة',
            'ما تعنيه في الاستخدام الفعلي': 'تطبيق واحد يغطي المحادثة المنطوقة والسياق الدائم دون إعداد إضافي.',
            'القيد / الملاحظة': 'لا تشرح الصفحة كيف تُخزَّن الذاكرة ولا كيف يُنفَّذ البحث على الويب.',
          },
          {
            'الميزة': 'يعمل دون إنترنت',
            'ما تعنيه في الاستخدام الفعلي': 'تبقى المحادثات على الهاتف بعد تنزيل النموذج.',
            'القيد / الملاحظة': 'يحدّ حجمَ النموذج ذاكرةُ الآيفون؛ وستكون النماذج الكبيرة بطيئة أو غير متاحة.',
          },
          {
            'الميزة': 'تنزيل صغير للتطبيق',
            'ما تعنيه في الاستخدام الفعلي': 'حجم التطبيق 46.7 MB، وتُجلب النماذج عند الحاجة.',
            'القيد / الملاحظة': 'كل نموذج تنزيل منفصل بحجم عدة غيغابايت للنماذج الأكبر.',
          },
          {
            'الميزة': 'تسمية خصوصية دون جمع بيانات',
            'ما تعنيه في الاستخدام الفعلي': 'تدرج تسمية Apple أن المطوّر لا يجمع أي بيانات.',
            'القيد / الملاحظة': 'مغلق المصدر ومُقرّ به ذاتيًا؛ ولا يُنشر محرك ولا ترخيص ولا تدقيق.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla مقابل البدائل',
        columns: ['التطبيق', 'المنصات', 'السعر والترخيص', 'مرونة النماذج', 'الفرق الرئيسي'],
        rows: [
          {
            'التطبيق': 'Oscilla',
            'المنصات': 'آيفون',
            'السعر والترخيص': 'مجاني، مغلق المصدر',
            'مرونة النماذج': 'أكثر من 40 نموذجًا مفتوحًا قابلًا للتنزيل',
            'الفرق الرئيسي': 'الصوت والذاكرة والبحث في تطبيق مجاني واحد؛ والمحرك غير معلن',
          },
          {
            'التطبيق': '[Locally AI](/ar/power-local-llm/locally-ai-review)',
            'المنصات': 'iOS، ماك',
            'السعر والترخيص': 'مجاني مع ميزات مدفوعة، مغلق المصدر',
            'مرونة النماذج': 'نماذج مفتوحة تُنزَّل داخل التطبيق',
            'الفرق الرئيسي': 'يعمل أيضًا على ماك ويذكر MLX محركًا له؛ ويشمل الصوت وإدخال الصور',
          },
          {
            'التطبيق': '[Private LLM](/ar/power-local-llm/private-llm-review)',
            'المنصات': 'iOS، ماك',
            'السعر والترخيص': 'مدفوع، مغلق المصدر',
            'مرونة النماذج': 'نماذج تُنزَّل داخل التطبيق',
            'الفرق الرئيسي': 'تطبيق مدفوع يعمل أيضًا على ماك، ولا يدرج الدليل وضعًا صوتيًا له',
          },
          {
            'التطبيق': '[Enclave AI](/ar/power-local-llm/enclave-ai-review-2026)',
            'المنصات': 'iOS',
            'السعر والترخيص': 'مدفوع، مغلق المصدر',
            'مرونة النماذج': 'نماذج تُنزَّل داخل التطبيق',
            'الفرق الرئيسي': 'تطبيق مدفوع لـ iOS فقط مع الصوت؛ ولا يدرج الدليل إدخال صور له',
          },
          {
            'التطبيق': '[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review)',
            'المنصات': 'آيفون، أندرويد',
            'السعر والترخيص': 'مجاني، MIT',
            'مرونة النماذج': 'نماذج GGUF تنزّلها بنفسك',
            'الفرق الرئيسي': 'مفتوح المصدر ويعمل على أندرويد أيضًا، ويمكنه استيراد نماذج GGUF الخاصة بك',
          },
        ],
        note: 'تتغير تفاصيل المنصة والسعر والميزات للتطبيقات الخارجية بشكل متكرر. تحقق من التفاصيل الحالية على صفحة كل تطبيق قبل اتخاذ القرار.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'من يجب أن يستخدم Oscilla',
        items: [
          '**مستخدمو آيفون بنظام iOS 26 الذين يريدون تجربة نماذج مفتوحة كثيرة مجانًا.** الكتالوج واسع والتطبيق مجاني.',
          '**من يريدون الصوت والذاكرة في تطبيق محلي.** كلاهما مدمج وليس إضافة.',
          '**المهتمون بالخصوصية ولا يمانعون تطبيقًا مغلق المصدر.** تدرج تسمية الخصوصية أنه لا تُجمع بيانات، وإن تعذّر التدقيق في ذلك هنا.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'من لا يجب أن يستخدم Oscilla',
        items: [
          '**كل من يحتاج إلى مصدر مفتوح.** الشيفرة غير متاحة للعموم؛ جرّب بدلًا منه [PocketPal AI](/ar/power-local-llm/pocketpal-ai-review).',
          '**المستخدمون الذين لا يستطيعون تشغيل iOS 26.** تشترط الصفحة iOS 26.0 أو أحدث.',
          '**مستخدمو ماك أو آيباد أو أندرويد.** لوحة التوافق تؤكد الآيفون فقط؛ ويعمل [Locally AI](/ar/power-local-llm/locally-ai-review) على ماك أيضًا.',
          '**من يحتاجون إلى استيراد نماذجهم الخاصة.** لا تذكر الصفحة ذلك.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل Oscilla مجاني؟',
            a: 'تعرضه صفحة App Store مجانيًا دون مشتريات داخل التطبيق. ولا يوثَّق السعر مستقبلًا.',
          },
          {
            q: 'من يطوّر Oscilla؟',
            a: 'Matthew David Fusco، وينشره تحت شركة Martechia LLC التي تعمل باسم Oscilla.',
          },
          {
            q: 'هل يعمل Oscilla على آيباد أو ماك؟',
            a: 'يقول الوصف إنه يعمل على آيفون وآيباد وماك، لكن لوحة التوافق تدرج الآيفون فقط. تأكد من ذلك على App Store بجهازك.',
          },
          {
            q: 'ما النماذج التي يوفّرها Oscilla؟',
            a: 'تذكر الصفحة Gemma 4 وQwen 3 وSmolLM3 وMinistral 3 وGranite 4.1 وLFM 2.5 وNemotron Mini 4B وMiniCPM-V 4.6، ضمن أكثر من 40 نموذجًا في المجموع.',
          },
          {
            q: 'ماذا يعرض موقع Oscilla؟',
            a: 'وقت المراجعة، [oscilla.ai](https://www.oscilla.ai) صفحة "قريبًا" لإصدار Oscilla V2 بتاريخ 11 سبتمبر 2026، دون تفاصيل عن الميزات أو الأسعار.',
          },
          {
            q: 'هل Oscilla مفتوح المصدر؟',
            a: 'لم يُعثر على مستودع علني ولا ترخيص، لذا تعامله هذه المراجعة على أنه مغلق المصدر.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم النهائي',
        content: [
          'يجمع Oscilla قائمة نماذج واسعة والصوت والذاكرة وإدخال الصور في تطبيق آيفون صغير ومجاني، مما يجعله تطبيقًا سهل التجربة إن كان هاتفك يعمل بنظام iOS 26.',
          'المأخذ هو الشفافية. المحرك بلا اسم، والشيفرة مغلقة، والموقع الإلكتروني صفحة مؤقتة، وبعض التفاصيل مثل دعم آيباد وماك متضاربة بين الوصف ولوحة التوافق. وهذا مقبول للتجريب العابر، لكنه أساس ضعيف لأي استخدام حساس.',
          'ثبّته لترى كيف تبدو نماذجه على هاتفك. وإذا أردت مصدرًا مفتوحًا أو محركًا معلنًا، فابدأ بـ[PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) أو [Locally AI](/ar/power-local-llm/locally-ai-review).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Oscilla - Local AI على App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — الإصدار والسعر والحجم والمتطلبات والنماذج وتسمية الخصوصية.',
          '[oscilla.ai](https://www.oscilla.ai) — موقع المطوّر، وهو حاليًا صفحة "قريبًا" لإصدار V2.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة Locally AI](/ar/power-local-llm/locally-ai-review) — تطبيق يعمل على الجهاز لنظامي iOS وماك، مجاني مع ميزات مدفوعة.',
          '[مراجعة Private LLM](/ar/power-local-llm/private-llm-review) — تطبيق نماذج مدفوع يعمل على الجهاز لنظامي iOS وماك.',
          '[مراجعة Enclave AI](/ar/power-local-llm/enclave-ai-review-2026) — مساعد مدفوع يعمل على الجهاز لنظام iOS مع الصوت.',
          '[مراجعة PocketPal AI](/ar/power-local-llm/pocketpal-ai-review) — عميل دردشة GGUF المجاني ومفتوح المصدر.',
          '[الدليل الكامل لبرمجيات LLM المحلية](/ar/directory) — دليل أوسع لأدوات LLM المحلية عبر المنصات.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-10-04',
    dateModified: '2026-10-04',
    next_refresh_due: '2027-04-04',
    theme: 'Mobile & Edge LLMs',
    heroImage: '/images/oscilla-review-hero-ko.webp',
    title: 'Oscilla 리뷰: 아이폰용 무료 온디바이스 AI 채팅',
    seoTitle: 'Oscilla 리뷰: 아이폰용 무료 온디바이스 AI 채팅',
    intro:
      'Oscilla는 오픈 AI 모델을 내려받아 휴대전화에서 직접 실행하는 무료 아이폰 앱으로, 음성 대화, 내장 메모리, 선택적 웹 검색, 파일 및 이미지 분석 기능을 갖추고 있습니다. 이 리뷰는 App Store 목록과 개발자 사이트에 나와 있는 내용, 빠져 있는 내용, 그리고 Oscilla가 다른 iOS 로컬 AI 앱과 어떻게 다른지를 다룹니다.',
    metaDescription:
      'Oscilla 리뷰: 40개 이상의 오픈 모델(Gemma 4, Qwen 3, Granite)을 음성, 메모리, 이미지 입력과 함께 기기 내에서 실행하는 무료 아이폰 앱. 요구 사항, 개인정보 보호 라벨, 한계, 대안.',
    twitterDescription:
      'Oscilla 리뷰: 오픈 모델을 기기 내에서 실행하는 무료 iOS 앱. 모델, iOS 26 요구 사항, 개인정보 보호 라벨, 비공개 소스 여부, 그리고 Locally AI 및 Private LLM과의 비교.',
    audience:
      '음성과 메모리를 갖추고 오픈 모델을 오프라인으로 실행하는 무료 앱을 원하는 iOS 26 아이폰 사용자 대상 — 모델, 요구 사항, 개인정보 보호, 한계, 그리고 Oscilla와 다른 iOS 로컬 AI 앱의 비교를 다룹니다.',
    readTime: '7분 소요',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: false,
    primaryTerm: 'Oscilla 리뷰',
    targetKeywords: [
      'oscilla 리뷰',
      'oscilla 로컬 ai',
      'oscilla ai 아이폰',
      '아이폰 오프라인 llm 실행',
      'ios 온디바이스 ai 앱',
      '아이폰 프라이빗 ai 앱',
      'gemma 4 아이폰 앱',
      '아이폰 무료 로컬 ai 앱',
    ],
    current_hardware_mentioned: ['iPhone', 'iOS 26'],
    leadAnswerBlock:
      '**Oscilla는 내려받은 오픈 모델을 전적으로 기기 내에서 실행하는 무료 비공개 소스 아이폰 앱으로, 실시간 음성, 내장 메모리, 웹 검색, 파일 및 이미지 분석을 제공합니다.** App Store 목록에는 Gemma 4, Qwen 3, Granite 4.1, SmolLM3, MiniCPM-V 4.6, Ministral 3 같은 모델이 나와 있고, iOS 26.0 이상이 필요하며, Apple의 "데이터 수집 없음" 개인정보 보호 라벨이 표시되어 있습니다. 이 리뷰는 버전 1.2026.05를 다루며, 기기에서 직접 테스트한 결과가 아니라 공개 목록과 웹사이트에 근거합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Oscilla를 아이폰에 설치할 가치가 있나요?',
        answer:
          '네, iOS 26을 사용하고 비전과 음성을 포함한 다양한 오픈 모델을 오프라인에서 무료로 써 보고 싶다면 그렇습니다. 오픈소스, Mac 또는 안드로이드 버전, 공개된 추론 엔진이 필요하다면 건너뛰세요. 이 중 어느 것도 문서에 나와 있지 않습니다. 가장 가까운 iOS 대안은 Locally AI와 Private LLM입니다.',
        bullets: [
          'App Store에서 무료이며, 목록에 앱 내 구매는 표시되어 있지 않음.',
          '40개 이상의 오픈 모델을 기기 내에서 실행; 목록에는 Gemma 4, Qwen 3, MiniCPM-V 4.6이 명시되어 있음.',
          '음성 대화, 내장 메모리, 웹 검색, 파일 및 이미지 분석.',
          'iOS 26.0 이상 필요; 호환성 패널에는 아이폰만 표시됨.',
          '비공개 소스; 개인정보 보호 라벨에는 개발자가 데이터를 수집하지 않는다고 표시됨.',
        ],
        updatedDate: '2026-10-04',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: 'Oscilla 받기', anchor: 'get-it' },
      { label: 'Oscilla 한눈에 보기', anchor: 'at-a-glance' },
      { label: 'Oscilla란 무엇인가', anchor: 'what-is-oscilla' },
      { label: '시작하는 방법', anchor: 'how-to-get-started' },
      { label: '기능과 모델', anchor: 'features' },
      { label: '기기 요구 사항', anchor: 'requirements' },
      { label: '개인정보 보호 및 데이터', anchor: 'privacy' },
      { label: '장단점: 이점과 한계', anchor: 'tradeoffs' },
      { label: 'Oscilla 대 대안 앱', anchor: 'vs-alternatives' },
      { label: 'Oscilla를 사용해야 하는 사람', anchor: 'who-should-use' },
      { label: 'Oscilla를 사용하지 말아야 하는 사람', anchor: 'who-should-not-use' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '총평', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Martechia LLC가 만든 Oscilla는 오픈 AI 모델을 음성, 메모리, 웹 검색, 이미지 분석과 함께 전적으로 기기 내에서 실행하는 무료 아이폰 앱이며, 목록에는 개발자가 데이터를 수집하지 않는다고 나와 있습니다.',
          },
          {
            type: 'plain-terms',
            text: '휴대전화 안의 모델 라이브러리라고 생각하면 됩니다. 오픈 모델을 골라 한 번 내려받으면 클라우드 서버 없이 대화할 수 있지만, 그 뒤에 있는 코드는 확인할 수 없습니다.',
          },
        ],
        items: [
          '검토한 버전: 1.2026.05, [App Store 목록](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)에 표시된 버전이며 5월 21일에 마지막으로 업데이트되었습니다.',
          '가격: 무료이며 목록에 앱 내 구매는 표시되어 있지 않음.',
          '모델: 내려받을 수 있는 오픈 모델 40개 이상이며, 목록에 명시된 예시는 350M부터 8B 파라미터까지입니다.',
          '플랫폼: iOS 26.0 이상의 아이폰; 설명에는 Mac과 iPad가 언급되지만 호환성 패널에는 없습니다.',
          '개방성: 비공개 소스이며, 검토 시점에 개발자 사이트는 V2 출시를 알리는 "곧 공개" 페이지였습니다.',
        ],
      },
      getItOscilla: {
        id: 'get-it',
        title: 'Oscilla 받기',
        content: [
          '**Oscilla는 Apple App Store로만 배포됩니다.** 앱 용량은 46.7 MB이며, 모델은 앱 안에서 별도로 내려받습니다.',
          '이 리뷰는 Oscilla를 다른 온디바이스 및 로컬 AI 도구와 함께 소개하는 PromptQuorum의 [로컬 LLM 소프트웨어 디렉터리](/ko/directory)와 짝을 이루는 콘텐츠입니다.',
        ],
        columns: ['경로', '받는 방법'],
        rows: [
          {
            '경로': 'Apple App Store(아이폰)',
            '받는 방법': '[App Store의 Oscilla - Local AI](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)',
          },
          {
            '경로': '개발자 웹사이트',
            '받는 방법': '[oscilla.ai](https://www.oscilla.ai)',
          },
        ],
        note: '목록의 설명에는 앱이 "iPhone, iPad, and Mac"에서 실행된다고 되어 있지만, 호환성 패널에는 아이폰만 표시됩니다. 설치하기 전에 App Store 페이지에서 사용 중인 기기를 확인하세요.',
      },
      atAGlance: {
        id: 'at-a-glance',
        title: 'Oscilla 한눈에 보기',
        columns: ['항목', 'Oscilla'],
        rows: [
          { '항목': '플랫폼', 'Oscilla': '아이폰(iOS 26.0 이상)' },
          { '항목': '가격', 'Oscilla': '무료' },
          { '항목': '라이선스', 'Oscilla': '비공개 소스' },
          { '항목': '완전 오프라인 실행', 'Oscilla': '예, 목록 기준: "entirely on your iPhone"' },
          { '항목': '앱 내 모델 다운로드', 'Oscilla': '예, 40개 이상의 모델' },
          { '항목': '직접 모델 가져오기', 'Oscilla': '명시 없음' },
          { '항목': '이미지 입력', 'Oscilla': '예, 파일 및 이미지 분석(예: MiniCPM-V 4.6)' },
          { '항목': '음성 입력/출력', 'Oscilla': '예, 실시간 음성 대화' },
        ],
        note: '항목은 로컬 LLM 소프트웨어 디렉터리에서 사용하는 모바일 채팅 비교 기준을 따릅니다. "명시 없음"은 목록과 웹사이트에 해당 기능이 언급되지 않았다는 뜻이며, 테스트해서 없는 것을 확인했다는 뜻이 아닙니다.',
      },
      whatIsOscilla: {
        id: 'what-is-oscilla',
        title: 'Oscilla란 무엇인가',
        content: [
          '**Oscilla는 서버의 프런트엔드가 아니라 자체 온디바이스 모델 런타임을 갖춘 채팅 앱입니다.** 목록은 이 앱을 "local AI for Apple devices"로 소개하며, 클라우드 의존 없이 모델을 기기에서 "entirely" 실행한다고 설명합니다.',
          'Martechia LLC(Oscilla라는 상호로 영업) 아래 Matthew David Fusco가 배포합니다. 추론 런타임은 어떤 공개 자료에도 명시되어 있지 않으므로, 이 리뷰는 MLX, llama.cpp, Core ML 중 무엇을 사용하는지 밝히지 않습니다.',
          '이 리뷰는 App Store 목록과 oscilla.ai에 근거합니다. 기기에서 직접 테스트한 내용은 포함하지 않으므로 속도, 배터리 사용량, 답변 품질은 평가하지 않았습니다.',
        ],
      },
      howToGetStarted: {
        id: 'how-to-get-started',
        title: '시작하는 방법',
        content: [
          '**설정은 App Store 설치 후 모델을 내려받는 것으로 끝납니다.** 목록은 첫 실행 과정을 설명하지 않으므로, 아래 단계는 목록에 문서화된 내용을 따릅니다.',
        ],
        numberedItems: [
          {
            title: 'iOS 버전 확인하기',
            whyItMatters: '목록에서 iOS 26.0 이상을 요구하므로, 업데이트할 수 없는 구형 아이폰에는 설치되지 않습니다.',
          },
          {
            title: 'Oscilla 설치하기',
            whyItMatters: '[App Store](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356)에서 받으세요. 앱 자체는 50 MB 미만입니다.',
          },
          {
            title: '모델 내려받기',
            whyItMatters: '목록에는 350M부터 8B 파라미터까지의 모델이 나와 있고 더 큰 모델일수록 여유 저장 공간과 메모리가 더 필요하므로, 먼저 작은 모델을 고르세요.',
          },
          {
            title: '채팅 시작하기',
            whyItMatters: '글을 입력하거나, 음성 모드로 말하거나, 파일이나 이미지를 첨부하세요. 메모리와 웹 검색은 앱에 내장되어 있습니다.',
          },
        ],
      },
      features: {
        id: 'features',
        title: '기능과 모델',
        content: [
          '**Oscilla의 강점은 폭넓음입니다. 다양한 모델과 음성, 메모리, 검색을 무료 앱 하나에 담았습니다.** 아래 내용은 모두 App Store 목록과 개발자 사이트에서 가져온 것입니다.',
        ],
        items: [
          '**40개 이상의 모델.** 최근 업데이트로 Nvidia Nemotron Mini 4B, IBM Granite 4.1(3B 및 8B), LFM 2.5(350M, 1.2B Instruct, 450M VL), OpenBMB MiniCPM-V 4.6이 추가되었으며, 목록에는 Gemma 4, Qwen 3, SmolLM3, Ministral 3도 명시되어 있습니다.',
          '**실시간 음성.** 목록에 따르면 음성 대화는 기기 내에서 실행됩니다.',
          '**내장 메모리.** 앱이 여러 채팅에 걸쳐 사용자에 대한 맥락을 유지합니다. 목록에는 "on your device" 외에 그 메모리가 어디에 저장되는지는 나와 있지 않습니다.',
          '**웹 검색.** 기능으로 표시되어 있으나 검색 요청이 어떻게 이루어지는지는 목록에 나와 있지 않으므로 네트워크 연결이 필요하다고 보는 것이 좋습니다.',
          '**파일 및 이미지 분석.** 문서나 사진을 첨부할 수 있으며, MiniCPM-V 4.6 같은 비전 지원 모델이 이미지를 처리합니다.',
        ],
      },
      requirements: {
        id: 'requirements',
        title: '기기 요구 사항',
        content: [
          '**Oscilla에는 iOS 26.0 이상이 필요하며 아이폰용으로 등록되어 있습니다.** App Store에는 RAM 수치가 나와 있지 않으므로, 실질적인 한계는 아이폰이 메모리에 올릴 수 있는 모델의 크기입니다.',
          '소형 모델(350M~4B 파라미터)은 지원되는 대부분의 아이폰에서 실행되고, 8B급 모델은 최신 고메모리 기기가 필요할 것으로 예상됩니다. 이는 온디바이스 모델에 대한 일반적인 경험칙이며 목록에 나온 수치가 아닙니다.',
        ],
      },
      privacy: {
        id: 'privacy',
        title: '개인정보 보호 및 데이터',
        content: [
          '**App Store 개인정보 보호 라벨에는 "The developer does not collect any data from this app."이라고 표시되어 있습니다.** 목록과 웹사이트는 앱이 설계 단계부터 프라이빗하며 대화가 기기에 남는다고 설명합니다.',
          '앱이 비공개 소스이고 이 리뷰에서 네트워크 트래픽을 검사하지 않았으므로, 이 주장은 여기서 독립적으로 감사할 수 없습니다. 웹 검색 기능은 활성화될 때 적어도 일부 네트워크 사용이 있음을 시사하지만, 목록에는 자세한 내용이 없습니다. Apple은 개인정보 보호 라벨이 개발자가 직접 신고한 내용이라고 밝히고 있습니다.',
        ],
      },
      tradeOffs: {
        id: 'tradeoffs',
        itemHeadings: true,
        title: '장단점: 이점과 한계',
        columns: ['이점', '실제 사용에서의 의미', '한계 / 유의 사항'],
        rows: [
          {
            '이점': '무료이면서 폭넓은 모델 목록',
            '실제 사용에서의 의미': '비용 없이 Gemma, Qwen, Granite, 비전 모델을 써 볼 수 있습니다.',
            '한계 / 유의 사항': '현재의 무료 목록 이후 가격은 문서에 없으며, V2 사이트 페이지에도 가격 정보가 없습니다.',
          },
          {
            '이점': '음성, 메모리, 검색 내장',
            '실제 사용에서의 의미': '별도 설정 없이 앱 하나로 음성 채팅과 지속적인 맥락을 모두 사용할 수 있습니다.',
            '한계 / 유의 사항': '목록에는 메모리가 어떻게 저장되는지, 웹 검색이 어떻게 수행되는지 설명되어 있지 않습니다.',
          },
          {
            '이점': '오프라인 실행',
            '실제 사용에서의 의미': '모델을 내려받고 나면 채팅이 휴대전화 안에만 남습니다.',
            '한계 / 유의 사항': '모델 크기는 아이폰 메모리에 의해 제한되며, 대형 모델은 느리거나 사용할 수 없습니다.',
          },
          {
            '이점': '작은 앱 용량',
            '실제 사용에서의 의미': '앱은 46.7 MB이고 모델은 필요할 때 내려받습니다.',
            '한계 / 유의 사항': '큰 모델은 각각 수 GB 단위의 별도 다운로드입니다.',
          },
          {
            '이점': '데이터 수집 없음 개인정보 보호 라벨',
            '실제 사용에서의 의미': 'Apple 라벨에는 개발자가 수집하는 데이터가 없다고 표시되어 있습니다.',
            '한계 / 유의 사항': '비공개 소스이며 자체 신고 방식이고, 엔진, 라이선스, 감사 결과는 공개되어 있지 않습니다.',
          },
        ],
      },
      vsAlternatives: {
        id: 'vs-alternatives',
        itemHeadings: true,
        title: 'Oscilla 대 대안 앱',
        columns: ['앱', '플랫폼', '가격 및 라이선스', '모델 유연성', '핵심 차이점'],
        rows: [
          {
            '앱': 'Oscilla',
            '플랫폼': '아이폰',
            '가격 및 라이선스': '무료, 비공개 소스',
            '모델 유연성': '내려받을 수 있는 오픈 모델 40개 이상',
            '핵심 차이점': '음성, 메모리, 검색을 갖춘 무료 앱 하나; 엔진은 공개되지 않음',
          },
          {
            '앱': '[Locally AI](/ko/power-local-llm/locally-ai-review)',
            '플랫폼': 'iOS, Mac',
            '가격 및 라이선스': '프리미엄, 비공개 소스',
            '모델 유연성': '앱 내에서 내려받는 오픈 모델',
            '핵심 차이점': 'Mac에서도 실행되며 MLX를 런타임으로 명시하고, 음성 및 이미지 입력을 지원',
          },
          {
            '앱': '[Private LLM](/ko/power-local-llm/private-llm-review)',
            '플랫폼': 'iOS, Mac',
            '가격 및 라이선스': '유료, 비공개 소스',
            '모델 유연성': '앱 내에서 내려받는 모델',
            '핵심 차이점': 'Mac에서도 실행되는 유료 앱이며, 디렉터리에는 음성 모드가 표시되어 있지 않음',
          },
          {
            '앱': '[Enclave AI](/ko/power-local-llm/enclave-ai-review-2026)',
            '플랫폼': 'iOS',
            '가격 및 라이선스': '유료, 비공개 소스',
            '모델 유연성': '앱 내에서 내려받는 모델',
            '핵심 차이점': '음성을 지원하는 iOS 전용 유료 앱이며, 디렉터리에는 비전 입력이 표시되어 있지 않음',
          },
          {
            '앱': '[PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)',
            '플랫폼': '아이폰, 안드로이드',
            '가격 및 라이선스': '무료, MIT',
            '모델 유연성': '직접 내려받는 GGUF 모델',
            '핵심 차이점': '오픈소스이며 안드로이드에서도 쓸 수 있고, 직접 GGUF 모델을 가져올 수 있음',
          },
        ],
        note: '타사 앱의 플랫폼, 가격, 기능 세부 사항은 자주 변경됩니다. 결정하기 전에 각 앱 자체의 목록에서 현재 세부 정보를 확인하세요.',
      },
      whoShouldUse: {
        id: 'who-should-use',
        title: 'Oscilla를 사용해야 하는 사람',
        items: [
          '**다양한 오픈 모델을 무료로 써 보고 싶은 iOS 26 아이폰 사용자.** 모델 목록이 넓고 앱은 무료입니다.',
          '**로컬 앱에서 음성과 메모리를 원하는 사용자.** 둘 다 부가 기능이 아니라 기본으로 내장되어 있습니다.',
          '**비공개 소스 앱을 받아들일 수 있는 개인정보 보호 중시 사용자.** 개인정보 보호 라벨에는 수집되는 데이터가 없다고 나와 있지만, 여기서는 감사할 수 없습니다.',
        ],
      },
      whoShouldNotUse: {
        id: 'who-should-not-use',
        title: 'Oscilla를 사용하지 말아야 하는 사람',
        items: [
          '**오픈소스가 필요한 사용자.** 코드가 공개되어 있지 않습니다. 대신 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)를 사용해 보세요.',
          '**iOS 26을 실행할 수 없는 사용자.** 목록에서 iOS 26.0 이상을 요구합니다.',
          '**Mac, iPad, 안드로이드 사용자.** 호환성 패널에서 확인되는 것은 아이폰뿐이며, [Locally AI](/ko/power-local-llm/locally-ai-review)는 Mac에서도 실행됩니다.',
          '**직접 모델을 가져와야 하는 사용자.** 목록에 그런 기능은 언급되어 있지 않습니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Oscilla는 무료인가요?',
            a: 'App Store 목록에는 앱 내 구매 없이 무료로 표시되어 있습니다. 향후 가격은 문서에 나와 있지 않습니다.',
          },
          {
            q: 'Oscilla는 누가 만드나요?',
            a: 'Oscilla라는 상호로 영업하는 Martechia LLC 아래에서 배포하는 Matthew David Fusco입니다.',
          },
          {
            q: 'Oscilla는 iPad나 Mac에서도 작동하나요?',
            a: '설명에는 iPhone, iPad, Mac에서 실행된다고 되어 있지만 호환성 패널에는 아이폰만 표시됩니다. App Store에서 사용 중인 기기로 확인하세요.',
          },
          {
            q: 'Oscilla는 어떤 모델을 제공하나요?',
            a: '목록에는 전체 40개 이상 중 Gemma 4, Qwen 3, SmolLM3, Ministral 3, Granite 4.1, LFM 2.5, Nemotron Mini 4B, MiniCPM-V 4.6이 명시되어 있습니다.',
          },
          {
            q: 'Oscilla 웹사이트에는 무엇이 있나요?',
            a: '검토 시점에 [oscilla.ai](https://www.oscilla.ai)는 2026년 9월 11일자 Oscilla V2 "곧 공개" 페이지이며, 기능이나 가격에 대한 세부 정보는 없습니다.',
          },
          {
            q: 'Oscilla는 오픈소스인가요?',
            a: '공개 저장소나 라이선스를 찾지 못했으므로, 이 리뷰는 비공개 소스로 간주합니다.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평',
        content: [
          'Oscilla는 폭넓은 모델 목록, 음성, 메모리, 이미지 입력을 작은 무료 아이폰 앱 하나에 담았습니다. 휴대전화가 iOS 26을 실행한다면 부담 없이 써 볼 수 있는 앱입니다.',
          '문제는 투명성입니다. 런타임은 밝혀지지 않았고, 코드는 비공개이고, 웹사이트는 임시 페이지이며, iPad와 Mac 지원 같은 일부 세부 사항은 설명과 호환성 패널 사이에 일관성이 없습니다. 가볍게 실험하기에는 충분하지만 민감한 용도의 근거로 삼기에는 부족합니다.',
          '설치해서 모델이 휴대전화에서 어떻게 동작하는지 확인해 보세요. 오픈소스나 공개된 엔진을 원한다면 [PocketPal AI](/ko/power-local-llm/pocketpal-ai-review)나 [Locally AI](/ko/power-local-llm/locally-ai-review)부터 시작하세요.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[App Store의 Oscilla - Local AI](https://apps.apple.com/us/app/oscilla-local-ai/id6759628356) — 버전, 가격, 용량, 요구 사항, 모델, 개인정보 보호 라벨.',
          '[oscilla.ai](https://www.oscilla.ai) — 개발자 웹사이트이며 현재는 V2 "곧 공개" 페이지.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Locally AI 리뷰](/ko/power-local-llm/locally-ai-review) — iOS와 Mac용 프리미엄 온디바이스 앱.',
          '[Private LLM 리뷰](/ko/power-local-llm/private-llm-review) — iOS와 Mac용 유료 온디바이스 모델 앱.',
          '[Enclave AI 리뷰](/ko/power-local-llm/enclave-ai-review-2026) — 음성을 지원하는 유료 iOS 온디바이스 어시스턴트.',
          '[PocketPal AI 리뷰](/ko/power-local-llm/pocketpal-ai-review) — 무료 오픈소스 GGUF 채팅 클라이언트.',
          '[완전한 로컬 LLM 소프트웨어 디렉터리](/ko/directory) — 플랫폼 전반의 로컬 LLM 도구에 대한 더 광범위한 디렉터리.',
        ],
      },
    },
  },
}
