import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'What Is a Smart Home? A 2026 Beginner\'s Guide',
    seoTitle: 'What Is a Smart Home? Complete 2026 Beginner\'s Guide',
    intro:
      'A smart home is a set of connected devices you monitor, automate, and control by app or voice. This beginner\'s guide explains the core idea, the device categories, how hubs tie devices together, the cloud-versus-local choice that defines privacy in 2026, the major ecosystems, and where to go next if you want a private setup.',
    metaDescription:
      'A smart home is connected devices you control by app or voice. The 2026 beginner\'s guide: categories, hubs, the cloud-vs-local choice, and major ecosystems.',
    twitterDescription:
      'What is a smart home? Connected devices you automate and control by app or voice. The 2026 beginner\'s guide to categories, hubs, and cloud vs local.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Newcomers planning their first smart home',
    primaryTerm: 'smart home',
    targetKeywords: [
      'what is a smart home',
      'smart home explained',
      'smart home basics',
      'smart home for beginners',
      'cloud vs local smart home',
    ],
    leadAnswerBlock:
      '**A smart home is a collection of internet- or hub-connected devices — lights, thermostats, locks, cameras, sensors — that you can monitor, automate, and control from an app or by voice.** The biggest 2026 decision is cloud versus local control, because it determines your privacy and reliability.',
    quickAnswerTop: {
      en: {
        question: 'What is a smart home?',
        answer:
          'A smart home is a home where connected devices can be controlled and automated through an app, a hub, or voice commands. Devices span lighting, climate, security, entertainment, and sensors. Whether they run through a manufacturer cloud or locally on a hub determines how private and reliable the system is.',
        bullets: [
          'Connected devices controlled by app, hub, or voice',
          'Categories: lighting, climate, security, entertainment, sensors',
          'A hub ties devices together and runs automations',
          'Cloud vs local control is the key 2026 choice',
          'Major ecosystems: Alexa, Google Home, Apple Home, Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Core Idea', anchor: 'core-idea' },
      { label: 'The Device Categories', anchor: 'categories' },
      { label: 'Hubs and How Devices Talk', anchor: 'hubs' },
      { label: 'Cloud vs Local', anchor: 'cloud-vs-local' },
      { label: 'The Major Ecosystems', anchor: 'ecosystems' },
      { label: 'Where to Go Next', anchor: 'next' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A smart home is connected devices — lights, thermostats, locks, cameras, sensors — that you monitor, automate, and control by app or voice.' },
      { type: 'plain-terms', content: 'A smart home just means everyday devices that can talk to each other and to you. You can turn the lights off from your phone, have the heating drop when you leave, or ask a speaker to lock the door. The big choice is whether all of that runs through a company\'s cloud or stays on a hub in your home.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'A smart home is connected devices controlled by app, hub, or voice',
          'The five common categories are lighting, climate, security, entertainment, and sensors',
          'A hub coordinates devices and runs automations so they work together',
          'Cloud control routes commands through a vendor server; local control keeps them at home',
          'Local control means more privacy and offline reliability — the key 2026 distinction',
          'The four major ecosystems are Amazon Alexa, Google Home, Apple Home, and Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: 'The Core Idea',
        content:
          '**A smart home turns ordinary devices into ones you can monitor, automate, and control remotely or by voice.** Automation — devices acting on their own based on triggers — is what separates a smart home from a collection of remote-controlled gadgets.',
        items: [
          '**Monitor:** see device state (is the door locked, is it warm) from anywhere.',
          '**Automate:** set rules ("turn the porch light on at sunset") so devices act without you.',
          '**Control:** use an app or a voice assistant to operate devices directly.',
        ],
      },
      categories: {
        id: 'categories',
        title: 'The Five Smart Home Device Categories',
        content:
          '**Most smart home devices fall into five categories: lighting, climate, security, entertainment, and sensors.** Many devices come in both cloud-only and local-capable versions.',
        columns: ['Category', 'Example devices', 'Cloud or local'],
        rows: [
          { 'Category': 'Lighting', 'Example devices': 'Smart bulbs, switches, plugs', 'Cloud or local': 'Both (Zigbee/Matter are local)' },
          { 'Category': 'Climate', 'Example devices': 'Thermostats, smart radiator valves', 'Cloud or local': 'Both' },
          { 'Category': 'Security', 'Example devices': 'Cameras, smart locks, doorbells', 'Cloud or local': 'Often cloud; local options exist' },
          { 'Category': 'Entertainment', 'Example devices': 'Speakers, TVs, streaming devices', 'Cloud or local': 'Mostly cloud' },
          { 'Category': 'Sensors', 'Example devices': 'Motion, door/window, temperature', 'Cloud or local': 'Both (Zigbee/Z-Wave are local)' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: 'What Is a Smart Home Hub?',
        content:
          '**A hub is the coordinator that lets devices talk to each other and run automations, often bridging different wireless protocols.** Some ecosystems use a dedicated hub; others use a speaker or your phone.',
        items: [
          'A hub bridges protocols like Zigbee and Z-Wave to your network — see [smart home protocols explained](/smart-home/smart-home-protocols-explained).',
          'Local hubs (like Home Assistant) run automations without the internet.',
          'Cloud ecosystems may not need a separate hub but depend on their servers.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Cloud vs Local: The 2026 Dividing Line',
        content:
          '**Cloud control sends your commands to a vendor server; local control keeps them inside your home.** This is the choice that determines privacy, offline reliability, and whether a vendor can change or discontinue your devices.',
        items: [
          '**Cloud:** easy setup, but data leaves your home and features can stop if the service does.',
          '**Local:** more setup, but private, offline-capable, and not dependent on a vendor cloud — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          '**Why beginners should care:** the choice is hard to reverse later, so it is worth deciding early.',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: 'The Major Ecosystems',
        content:
          '**The four major ecosystems are Amazon Alexa, Google Home, Apple Home, and Home Assistant — they differ most on privacy and local control.** Home Assistant is the local/private champion; Alexa and Google are cloud-first.',
        items: [
          '**Amazon Alexa:** wide device support, cloud-first, voice-led.',
          '**Google Home:** broad support and strong voice, cloud-first.',
          '**Apple Home:** more privacy-focused, with some local control via a home hub.',
          '**Home Assistant:** open-source, local-first, the most private — compared in [ecosystems compared](/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      next: {
        id: 'next',
        title: 'Where to Go Next',
        content:
          '**If privacy matters, start down the local-first path; if you just want convenience, a cloud ecosystem is the quickest start.** Either way, begin with one room.',
        items: [
          'New and want a step-by-step path? See [smart home for beginners: where to start](/smart-home/smart-home-for-beginners-where-to-start).',
          'Care about privacy? See [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Do I need a hub for a smart home?', a: 'Not always. Wi-Fi devices and cloud ecosystems can work without a dedicated hub, but a hub is needed for local protocols like Zigbee and Z-Wave and for running automations locally. A local hub like Home Assistant also keeps your system working offline.' },
          { q: 'Is a smart home secure?', a: 'It can be, but security depends on the devices and setup. Cloud devices expose data to vendor servers; local setups keep data at home. Use strong passwords, keep firmware updated, and prefer local-capable devices for sensitive areas like cameras.' },
          { q: 'Cloud or local — which is better for beginners?', a: 'Cloud ecosystems are easier to start with; local setups take more effort but offer privacy and offline reliability. If privacy matters to you, starting local-first avoids a harder migration later.' },
          { q: 'What is the cheapest way to start a smart home?', a: 'Begin with one room and a few inexpensive local-capable devices (a couple of smart bulbs or plugs and a sensor) plus a hub. Expanding gradually avoids overspending and lets you learn before committing to an ecosystem.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the private, no-cloud path',
          '[The History of Smart Home Technology](/smart-home/history-of-smart-home-technology) — how we got here',
          '[Smart Home for Beginners: Where to Start](/smart-home/smart-home-for-beginners-where-to-start) — your first steps',
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — pick a platform',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'What Is a Smart Home? A 2026 Beginner\'s Guide',
      description: 'A smart home is connected devices you control by app or voice. The 2026 beginner\'s guide: categories, hubs, the cloud-vs-local choice, and major ecosystems.',
      url: 'https://www.promptquorum.com/smart-home/what-is-a-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home' }, { '@type': 'Thing', name: 'Home automation' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a hub for a smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. Wi-Fi and cloud ecosystems can work without one, but a hub is needed for local protocols like Zigbee and Z-Wave and for running automations locally.' } },
        { '@type': 'Question', name: 'Is a smart home secure?', acceptedAnswer: { '@type': 'Answer', text: 'It can be, depending on devices and setup. Cloud devices expose data to vendor servers; local setups keep data at home. Use strong passwords, update firmware, and prefer local-capable devices for cameras.' } },
        { '@type': 'Question', name: 'Cloud or local — which is better for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud is easier to start; local takes more effort but offers privacy and offline reliability. If privacy matters, starting local-first avoids a harder migration later.' } },
        { '@type': 'Question', name: 'What is the cheapest way to start a smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Begin with one room and a few inexpensive local-capable devices plus a hub, then expand gradually.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Was ist ein Smart Home? Ein Einsteiger-Leitfaden für 2026',
    seoTitle: 'Was ist ein Smart Home? Einsteiger-Leitfaden 2026',
    intro:
      'Ein Smart Home ist eine Reihe vernetzter Geräte, die Sie per App oder Stimme überwachen, automatisieren und steuern. Dieser Einsteiger-Leitfaden erklärt die Grundidee, die Gerätekategorien, wie Hubs Geräte verbinden, die Cloud-gegen-lokal-Entscheidung, die 2026 über den Datenschutz bestimmt, die großen Ökosysteme und wohin Sie als Nächstes gehen, wenn Sie eine private Lösung wollen.',
    metaDescription:
      'Ein Smart Home sind vernetzte Geräte, die Sie per App oder Stimme steuern. Der Einsteiger-Leitfaden 2026: Kategorien, Hubs, Cloud gegen lokal und Ökosysteme.',
    twitterDescription:
      'Was ist ein Smart Home? Vernetzte Geräte, die Sie per App oder Stimme automatisieren und steuern. Der Einsteiger-Leitfaden 2026 zu Kategorien, Hubs und Cloud gegen lokal.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Einsteiger, die ihr erstes Smart Home planen',
    primaryTerm: 'smart home',
    targetKeywords: [
      'was ist ein smart home',
      'smart home erklärt',
      'smart home grundlagen',
      'smart home für einsteiger',
      'cloud gegen lokal smart home',
    ],
    leadAnswerBlock:
      '**Ein Smart Home ist eine Sammlung über Internet oder Hub vernetzter Geräte – Lampen, Thermostate, Schlösser, Kameras, Sensoren –, die Sie per App oder Stimme überwachen, automatisieren und steuern können.** Die wichtigste Entscheidung 2026 ist Cloud gegen lokale Steuerung, denn sie bestimmt Ihren Datenschutz und Ihre Zuverlässigkeit.',
    quickAnswerTop: {
      de: {
        question: 'Was ist ein Smart Home?',
        answer:
          'Ein Smart Home ist ein Zuhause, in dem vernetzte Geräte über eine App, einen Hub oder Sprachbefehle gesteuert und automatisiert werden. Die Geräte reichen von Beleuchtung über Klima und Sicherheit bis zu Unterhaltung und Sensoren. Ob sie über eine Hersteller-Cloud oder lokal auf einem Hub laufen, bestimmt, wie privat und zuverlässig das System ist.',
        bullets: [
          'Vernetzte Geräte, gesteuert per App, Hub oder Stimme',
          'Kategorien: Beleuchtung, Klima, Sicherheit, Unterhaltung, Sensoren',
          'Ein Hub verbindet Geräte und führt Automatisierungen aus',
          'Cloud gegen lokale Steuerung ist die zentrale Entscheidung 2026',
          'Große Ökosysteme: Alexa, Google Home, Apple Home, Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Die Grundidee', anchor: 'core-idea' },
      { label: 'Die Gerätekategorien', anchor: 'categories' },
      { label: 'Hubs und wie Geräte sprechen', anchor: 'hubs' },
      { label: 'Cloud gegen lokal', anchor: 'cloud-vs-local' },
      { label: 'Die großen Ökosysteme', anchor: 'ecosystems' },
      { label: 'Wohin als Nächstes', anchor: 'next' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein Smart Home sind vernetzte Geräte – Lampen, Thermostate, Schlösser, Kameras, Sensoren –, die Sie per App oder Stimme überwachen, automatisieren und steuern.' },
      { type: 'plain-terms', content: 'Ein Smart Home bedeutet einfach Alltagsgeräte, die miteinander und mit Ihnen kommunizieren können. Sie schalten das Licht per Handy aus, lassen die Heizung beim Verlassen herunterfahren oder bitten einen Lautsprecher, die Tür zu verriegeln. Die große Frage ist, ob all das über die Cloud eines Unternehmens läuft oder auf einem Hub bei Ihnen zu Hause bleibt.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Ein Smart Home sind vernetzte Geräte, gesteuert per App, Hub oder Stimme',
          'Die fünf üblichen Kategorien sind Beleuchtung, Klima, Sicherheit, Unterhaltung und Sensoren',
          'Ein Hub koordiniert Geräte und führt Automatisierungen aus, damit sie zusammenarbeiten',
          'Cloud-Steuerung leitet Befehle über einen Hersteller-Server; lokale Steuerung hält sie zu Hause',
          'Lokale Steuerung bedeutet mehr Datenschutz und Offline-Zuverlässigkeit – die zentrale Unterscheidung 2026',
          'Die vier großen Ökosysteme sind Amazon Alexa, Google Home, Apple Home und Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: 'Die Grundidee',
        content:
          '**Ein Smart Home macht aus gewöhnlichen Geräten solche, die Sie überwachen, automatisieren und aus der Ferne oder per Stimme steuern können.** Automatisierung – Geräte handeln aufgrund von Auslösern von selbst – unterscheidet ein Smart Home von einer Sammlung ferngesteuerter Geräte.',
        items: [
          '**Überwachen:** den Gerätezustand (ist die Tür verriegelt, ist es warm) von überall sehen.',
          '**Automatisieren:** Regeln festlegen („Schalte das Außenlicht bei Sonnenuntergang ein"), damit Geräte ohne Sie handeln.',
          '**Steuern:** eine App oder einen Sprachassistenten nutzen, um Geräte direkt zu bedienen.',
        ],
      },
      categories: {
        id: 'categories',
        title: 'Die fünf Smart-Home-Gerätekategorien',
        content:
          '**Die meisten Smart-Home-Geräte fallen in fünf Kategorien: Beleuchtung, Klima, Sicherheit, Unterhaltung und Sensoren.** Viele Geräte gibt es sowohl in reinen Cloud- als auch in lokal-fähigen Varianten.',
        columns: ['Kategorie', 'Beispielgeräte', 'Cloud oder lokal'],
        rows: [
          { 'Kategorie': 'Beleuchtung', 'Beispielgeräte': 'Smarte Leuchtmittel, Schalter, Steckdosen', 'Cloud oder lokal': 'Beides (Zigbee/Matter sind lokal)' },
          { 'Kategorie': 'Klima', 'Beispielgeräte': 'Thermostate, smarte Heizkörperventile', 'Cloud oder lokal': 'Beides' },
          { 'Kategorie': 'Sicherheit', 'Beispielgeräte': 'Kameras, smarte Schlösser, Türklingeln', 'Cloud oder lokal': 'Oft Cloud; lokale Optionen vorhanden' },
          { 'Kategorie': 'Unterhaltung', 'Beispielgeräte': 'Lautsprecher, Fernseher, Streaming-Geräte', 'Cloud oder lokal': 'Meist Cloud' },
          { 'Kategorie': 'Sensoren', 'Beispielgeräte': 'Bewegung, Tür/Fenster, Temperatur', 'Cloud oder lokal': 'Beides (Zigbee/Z-Wave sind lokal)' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: 'Was ist ein Smart-Home-Hub?',
        content:
          '**Ein Hub ist der Koordinator, der Geräte miteinander sprechen lässt und Automatisierungen ausführt, oft als Brücke zwischen verschiedenen Funkprotokollen.** Manche Ökosysteme nutzen einen dedizierten Hub, andere einen Lautsprecher oder Ihr Handy.',
        items: [
          'Ein Hub überbrückt Protokolle wie Zigbee und Z-Wave zu Ihrem Netzwerk – siehe [Smart-Home-Protokolle erklärt](/de/smart-home/smart-home-protocols-explained).',
          'Lokale Hubs (wie Home Assistant) führen Automatisierungen ohne Internet aus.',
          'Cloud-Ökosysteme brauchen vielleicht keinen separaten Hub, hängen aber von ihren Servern ab.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Cloud gegen lokal: Die Trennlinie 2026',
        content:
          '**Cloud-Steuerung sendet Ihre Befehle an einen Hersteller-Server; lokale Steuerung hält sie in Ihrem Zuhause.** Diese Wahl bestimmt Datenschutz, Offline-Zuverlässigkeit und ob ein Hersteller Ihre Geräte ändern oder einstellen kann.',
        items: [
          '**Cloud:** einfache Einrichtung, aber Daten verlassen Ihr Zuhause und Funktionen können enden, wenn der Dienst endet.',
          '**Lokal:** mehr Einrichtung, aber privat, offline-fähig und unabhängig von einer Hersteller-Cloud – siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
          '**Warum Einsteiger das interessieren sollte:** Die Wahl ist später schwer rückgängig zu machen, daher lohnt sich eine frühe Entscheidung.',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: 'Die großen Ökosysteme',
        content:
          '**Die vier großen Ökosysteme sind Amazon Alexa, Google Home, Apple Home und Home Assistant – sie unterscheiden sich am stärksten bei Datenschutz und lokaler Steuerung.** Home Assistant ist der lokale/private Champion; Alexa und Google sind Cloud-zuerst.',
        items: [
          '**Amazon Alexa:** breite Geräteunterstützung, Cloud-zuerst, sprachgeführt.',
          '**Google Home:** breite Unterstützung und starke Sprachsteuerung, Cloud-zuerst.',
          '**Apple Home:** stärker datenschutzorientiert, mit etwas lokaler Steuerung über einen Home-Hub.',
          '**Home Assistant:** Open Source, lokal-zuerst, am privatesten – verglichen in [Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      next: {
        id: 'next',
        title: 'Wohin als Nächstes',
        content:
          '**Wenn Datenschutz zählt, schlagen Sie den Local-First-Weg ein; wenn Sie nur Komfort wollen, ist ein Cloud-Ökosystem der schnellste Start.** So oder so: Beginnen Sie mit einem Raum.',
        items: [
          'Neu und ein Schritt-für-Schritt-Weg gewünscht? Siehe [Smart Home für Einsteiger: Wo Sie starten](/de/smart-home/smart-home-for-beginners-where-to-start).',
          'Datenschutz wichtig? Siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Brauche ich einen Hub für ein Smart Home?', a: 'Nicht immer. WLAN-Geräte und Cloud-Ökosysteme funktionieren ohne dedizierten Hub, aber ein Hub ist für lokale Protokolle wie Zigbee und Z-Wave und für lokal ausgeführte Automatisierungen nötig. Ein lokaler Hub wie Home Assistant hält Ihr System zudem offline am Laufen.' },
          { q: 'Ist ein Smart Home sicher?', a: 'Es kann sicher sein, aber die Sicherheit hängt von den Geräten und der Einrichtung ab. Cloud-Geräte legen Daten auf Hersteller-Servern offen; lokale Lösungen halten Daten zu Hause. Nutzen Sie starke Passwörter, halten Sie die Firmware aktuell und bevorzugen Sie für sensible Bereiche wie Kameras lokal-fähige Geräte.' },
          { q: 'Cloud oder lokal – was ist für Einsteiger besser?', a: 'Cloud-Ökosysteme sind einfacher zu starten; lokale Lösungen erfordern mehr Aufwand, bieten aber Datenschutz und Offline-Zuverlässigkeit. Wenn Datenschutz für Sie zählt, vermeidet ein Local-First-Start eine spätere, aufwendigere Migration.' },
          { q: 'Was ist der günstigste Weg, ein Smart Home zu starten?', a: 'Beginnen Sie mit einem Raum und ein paar günstigen lokal-fähigen Geräten (ein paar smarte Leuchtmittel oder Steckdosen und ein Sensor) plus einem Hub. Schrittweises Erweitern vermeidet Überausgaben und lässt Sie lernen, bevor Sie sich auf ein Ökosystem festlegen.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – der private, cloudfreie Weg',
          '[Die Geschichte der Smart-Home-Technik](/de/smart-home/history-of-smart-home-technology) – wie wir hierher kamen',
          '[Smart Home für Einsteiger: Wo Sie starten](/de/smart-home/smart-home-for-beginners-where-to-start) – Ihre ersten Schritte',
          '[Smart-Home-Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared) – wählen Sie eine Plattform',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Was ist ein Smart Home? Ein Einsteiger-Leitfaden für 2026',
      description: 'Ein Smart Home sind vernetzte Geräte, die Sie per App oder Stimme steuern. Der Einsteiger-Leitfaden 2026: Kategorien, Hubs, Cloud gegen lokal und Ökosysteme.',
      url: 'https://www.promptquorum.com/de/smart-home/what-is-a-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart Home' }, { '@type': 'Thing', name: 'Heimautomatisierung' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich einen Hub für ein Smart Home?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht immer. WLAN- und Cloud-Ökosysteme funktionieren ohne, aber ein Hub ist für lokale Protokolle wie Zigbee und Z-Wave und für lokal ausgeführte Automatisierungen nötig.' } },
        { '@type': 'Question', name: 'Ist ein Smart Home sicher?', acceptedAnswer: { '@type': 'Answer', text: 'Es kann sicher sein, je nach Geräten und Einrichtung. Cloud-Geräte legen Daten auf Hersteller-Servern offen; lokale Lösungen halten Daten zu Hause. Nutzen Sie starke Passwörter, aktualisieren Sie die Firmware und bevorzugen Sie für Kameras lokal-fähige Geräte.' } },
        { '@type': 'Question', name: 'Cloud oder lokal – was ist für Einsteiger besser?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud ist einfacher zu starten; lokal erfordert mehr Aufwand, bietet aber Datenschutz und Offline-Zuverlässigkeit. Wenn Datenschutz zählt, vermeidet ein Local-First-Start eine spätere Migration.' } },
        { '@type': 'Question', name: 'Was ist der günstigste Weg, ein Smart Home zu starten?', acceptedAnswer: { '@type': 'Answer', text: 'Beginnen Sie mit einem Raum und ein paar günstigen lokal-fähigen Geräten plus einem Hub, dann schrittweise erweitern.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: '¿Qué Es un Smart Home? Guía para Principiantes 2026',
    seoTitle: '¿Qué Es un Smart Home? Guía para Principiantes 2026',
    intro:
      'Un smart home es un conjunto de dispositivos conectados que monitoreas, automatizas y controlas por app o por voz. Esta guía para principiantes explica la idea central, las categorías de dispositivos, cómo los hubs unen los dispositivos, la decisión nube-frente-a-local que define la privacidad en 2026, los grandes ecosistemas y a dónde ir después si quieres una opción privada.',
    metaDescription:
      'Un smart home son dispositivos conectados que controlas por app o voz. Guía 2026: categorías, hubs, la elección nube-vs-local y los grandes ecosistemas.',
    twitterDescription:
      '¿Qué es un smart home? Dispositivos conectados que automatizas y controlas por app o por voz. La guía para principiantes 2026 sobre categorías, hubs y nube vs local.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Recién llegados que planifican su primer smart home',
    primaryTerm: 'smart home',
    targetKeywords: [
      'qué es un smart home',
      'smart home explicado',
      'fundamentos del smart home',
      'smart home para principiantes',
      'nube vs local smart home',
    ],
    leadAnswerBlock:
      '**Un smart home es un conjunto de dispositivos conectados por internet o por hub —luces, termostatos, cerraduras, cámaras, sensores— que puedes monitorear, automatizar y controlar desde una app o por voz.** La mayor decisión en 2026 es nube frente a control local, porque determina tu privacidad y tu fiabilidad.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es un smart home?',
        answer:
          'Un smart home es una vivienda donde dispositivos conectados se controlan y automatizan a través de una app, un hub o comandos de voz. Los dispositivos abarcan iluminación, clima, seguridad, entretenimiento y sensores. Que funcionen mediante la nube de un fabricante o localmente en un hub determina lo privado y fiable que es el sistema.',
        bullets: [
          'Dispositivos conectados controlados por app, hub o voz',
          'Categorías: iluminación, clima, seguridad, entretenimiento, sensores',
          'Un hub une los dispositivos y ejecuta automatizaciones',
          'Nube frente a control local es la decisión clave en 2026',
          'Grandes ecosistemas: Alexa, Google Home, Apple Home, Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'La idea central', anchor: 'core-idea' },
      { label: 'Las categorías de dispositivos', anchor: 'categories' },
      { label: 'Los hubs y cómo hablan los dispositivos', anchor: 'hubs' },
      { label: 'Nube frente a local', anchor: 'cloud-vs-local' },
      { label: 'Los grandes ecosistemas', anchor: 'ecosystems' },
      { label: 'A dónde ir después', anchor: 'next' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un smart home son dispositivos conectados —luces, termostatos, cerraduras, cámaras, sensores— que monitoreas, automatizas y controlas por app o por voz.' },
      { type: 'plain-terms', content: 'Un smart home simplemente significa dispositivos cotidianos que pueden hablar entre sí y contigo. Puedes apagar las luces desde el móvil, hacer que la calefacción baje cuando sales, o pedirle a un altavoz que cierre la puerta. La gran decisión es si todo eso pasa por la nube de una empresa o se queda en un hub en tu casa.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Un smart home son dispositivos conectados controlados por app, hub o voz',
          'Las cinco categorías comunes son iluminación, clima, seguridad, entretenimiento y sensores',
          'Un hub coordina los dispositivos y ejecuta automatizaciones para que trabajen juntos',
          'El control en la nube enruta los comandos por un servidor del fabricante; el local los mantiene en casa',
          'El control local significa más privacidad y fiabilidad sin conexión: la distinción clave en 2026',
          'Los cuatro grandes ecosistemas son Amazon Alexa, Google Home, Apple Home y Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: 'La idea central',
        content:
          '**Un smart home convierte dispositivos corrientes en otros que puedes monitorear, automatizar y controlar en remoto o por voz.** La automatización —que los dispositivos actúen solos según disparadores— es lo que separa a un smart home de una colección de aparatos con mando a distancia.',
        items: [
          '**Monitorear:** ver el estado del dispositivo (si la puerta está cerrada, si hace calor) desde cualquier sitio.',
          '**Automatizar:** definir reglas ("enciende la luz del porche al atardecer") para que los dispositivos actúen sin ti.',
          '**Controlar:** usar una app o un asistente de voz para operar los dispositivos directamente.',
        ],
      },
      categories: {
        id: 'categories',
        title: 'Las cinco categorías de dispositivos del smart home',
        content:
          '**La mayoría de los dispositivos del smart home caen en cinco categorías: iluminación, clima, seguridad, entretenimiento y sensores.** Muchos dispositivos vienen en versiones tanto solo-nube como con capacidad local.',
        columns: ['Categoría', 'Dispositivos de ejemplo', 'Nube o local'],
        rows: [
          { 'Categoría': 'Iluminación', 'Dispositivos de ejemplo': 'Bombillas inteligentes, interruptores, enchufes', 'Nube o local': 'Ambos (Zigbee/Matter son locales)' },
          { 'Categoría': 'Clima', 'Dispositivos de ejemplo': 'Termostatos, válvulas inteligentes de radiador', 'Nube o local': 'Ambos' },
          { 'Categoría': 'Seguridad', 'Dispositivos de ejemplo': 'Cámaras, cerraduras inteligentes, timbres', 'Nube o local': 'A menudo nube; existen opciones locales' },
          { 'Categoría': 'Entretenimiento', 'Dispositivos de ejemplo': 'Altavoces, televisores, dispositivos de streaming', 'Nube o local': 'Mayormente nube' },
          { 'Categoría': 'Sensores', 'Dispositivos de ejemplo': 'Movimiento, puerta/ventana, temperatura', 'Nube o local': 'Ambos (Zigbee/Z-Wave son locales)' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: '¿Qué es un hub de smart home?',
        content:
          '**Un hub es el coordinador que permite que los dispositivos hablen entre sí y ejecuten automatizaciones, a menudo haciendo de puente entre distintos protocolos inalámbricos.** Algunos ecosistemas usan un hub dedicado; otros usan un altavoz o tu móvil.',
        items: [
          'Un hub conecta protocolos como Zigbee y Z-Wave a tu red: consulta [protocolos del smart home explicados](/es/smart-home/smart-home-protocols-explained).',
          'Los hubs locales (como Home Assistant) ejecutan automatizaciones sin internet.',
          'Los ecosistemas en la nube quizá no necesiten un hub aparte, pero dependen de sus servidores.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Nube frente a local: la línea divisoria de 2026',
        content:
          '**El control en la nube envía tus comandos a un servidor del fabricante; el control local los mantiene dentro de tu casa.** Esta elección determina la privacidad, la fiabilidad sin conexión y si un fabricante puede cambiar o discontinuar tus dispositivos.',
        items: [
          '**Nube:** configuración fácil, pero los datos salen de tu casa y las funciones pueden detenerse si el servicio se detiene.',
          '**Local:** más configuración, pero privado, capaz de funcionar sin conexión e independiente de la nube de un fabricante: consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
          '**Por qué debería importar a los principiantes:** la elección es difícil de revertir después, así que conviene decidir pronto.',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: 'Los grandes ecosistemas',
        content:
          '**Los cuatro grandes ecosistemas son Amazon Alexa, Google Home, Apple Home y Home Assistant: se diferencian sobre todo en privacidad y control local.** Home Assistant es el campeón local/privado; Alexa y Google son nube-primero.',
        items: [
          '**Amazon Alexa:** amplia compatibilidad de dispositivos, nube-primero, guiado por voz.',
          '**Google Home:** amplia compatibilidad y voz potente, nube-primero.',
          '**Apple Home:** más orientado a la privacidad, con algo de control local mediante un home hub.',
          '**Home Assistant:** de código abierto, local-primero, el más privado: comparado en [ecosistemas comparados](/es/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      next: {
        id: 'next',
        title: 'A dónde ir después',
        content:
          '**Si la privacidad importa, toma el camino local-first; si solo quieres comodidad, un ecosistema en la nube es el arranque más rápido.** En cualquier caso, empieza por una habitación.',
        items: [
          '¿Nuevo y quieres un camino paso a paso? Consulta [smart home para principiantes: por dónde empezar](/es/smart-home/smart-home-for-beginners-where-to-start).',
          '¿Te importa la privacidad? Consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito un hub para un smart home?', a: 'No siempre. Los dispositivos Wi-Fi y los ecosistemas en la nube funcionan sin un hub dedicado, pero hace falta un hub para protocolos locales como Zigbee y Z-Wave y para ejecutar automatizaciones localmente. Un hub local como Home Assistant también mantiene tu sistema funcionando sin conexión.' },
          { q: '¿Es seguro un smart home?', a: 'Puede serlo, pero la seguridad depende de los dispositivos y la configuración. Los dispositivos en la nube exponen datos en servidores del fabricante; las configuraciones locales mantienen los datos en casa. Usa contraseñas fuertes, mantén el firmware actualizado y prefiere dispositivos con capacidad local para zonas sensibles como las cámaras.' },
          { q: '¿Nube o local para principiantes?', a: 'Los ecosistemas en la nube son más fáciles de empezar; las configuraciones locales requieren más esfuerzo pero ofrecen privacidad y fiabilidad sin conexión. Si te importa la privacidad, empezar local-first evita una migración más difícil después.' },
          { q: '¿Cuál es la forma más barata de empezar un smart home?', a: 'Empieza con una habitación y unos pocos dispositivos con capacidad local y económicos (un par de bombillas o enchufes inteligentes y un sensor) más un hub. Ampliar poco a poco evita gastar de más y te deja aprender antes de comprometerte con un ecosistema.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el camino privado y sin nube',
          '[La historia de la tecnología del smart home](/es/smart-home/history-of-smart-home-technology) — cómo llegamos aquí',
          '[Smart home para principiantes: por dónde empezar](/es/smart-home/smart-home-for-beginners-where-to-start) — tus primeros pasos',
          '[Ecosistemas de smart home comparados](/es/smart-home/smart-home-ecosystems-compared) — elige una plataforma',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '¿Qué Es un Smart Home? Guía para Principiantes 2026',
      description: 'Un smart home son dispositivos conectados que controlas por app o voz. Guía 2026: categorías, hubs, la elección nube-vs-local y los grandes ecosistemas.',
      url: 'https://www.promptquorum.com/es/smart-home/what-is-a-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home' }, { '@type': 'Thing', name: 'Domótica' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito un hub para un smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No siempre. Los dispositivos Wi-Fi y los ecosistemas en la nube funcionan sin uno, pero hace falta un hub para protocolos locales como Zigbee y Z-Wave y para ejecutar automatizaciones localmente.' } },
        { '@type': 'Question', name: '¿Es seguro un smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Puede serlo, según los dispositivos y la configuración. Los dispositivos en la nube exponen datos en servidores del fabricante; las configuraciones locales mantienen los datos en casa. Usa contraseñas fuertes, actualiza el firmware y prefiere dispositivos locales para cámaras.' } },
        { '@type': 'Question', name: '¿Nube o local para principiantes?', acceptedAnswer: { '@type': 'Answer', text: 'La nube es más fácil de empezar; lo local requiere más esfuerzo pero ofrece privacidad y fiabilidad sin conexión. Si te importa la privacidad, empezar local-first evita una migración más difícil después.' } },
        { '@type': 'Question', name: '¿Cuál es la forma más barata de empezar un smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Empieza con una habitación y unos pocos dispositivos económicos con capacidad local más un hub, y amplía poco a poco.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Qu\'est-ce qu\'une Maison Connectée ? Guide Débutant 2026',
    seoTitle: 'Qu\'est-ce qu\'une Maison Connectée ? Guide Débutant 2026',
    intro:
      'Une maison connectée est un ensemble d\'appareils reliés que vous surveillez, automatisez et commandez par application ou à la voix. Ce guide débutant explique l\'idée de base, les catégories d\'appareils, comment les hubs relient les appareils, le choix cloud-contre-local qui définit la confidentialité en 2026, les grands écosystèmes et où aller ensuite si vous voulez une option privée.',
    metaDescription:
      'Une maison connectée, ce sont des appareils reliés commandés par app ou à la voix. Guide 2026 : catégories, hubs, cloud contre local et écosystèmes.',
    twitterDescription:
      'Qu\'est-ce qu\'une maison connectée ? Des appareils reliés que vous automatisez et commandez par application ou à la voix. Le guide débutant 2026 : catégories, hubs, cloud vs local.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Novices préparant leur première maison connectée',
    primaryTerm: 'smart home',
    targetKeywords: [
      'qu\'est-ce qu\'une maison connectée',
      'maison connectée expliquée',
      'bases de la maison connectée',
      'maison connectée pour débutants',
      'cloud contre local maison connectée',
    ],
    leadAnswerBlock:
      '**Une maison connectée est un ensemble d\'appareils reliés par internet ou par hub — lumières, thermostats, serrures, caméras, capteurs — que vous pouvez surveiller, automatiser et commander depuis une application ou à la voix.** Le plus grand choix en 2026 est cloud contre contrôle local, car il détermine votre confidentialité et votre fiabilité.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce qu\'une maison connectée ?',
        answer:
          'Une maison connectée est un logement où des appareils reliés sont commandés et automatisés via une application, un hub ou des commandes vocales. Les appareils couvrent l\'éclairage, le climat, la sécurité, le divertissement et les capteurs. Qu\'ils fonctionnent via le cloud d\'un fabricant ou localement sur un hub détermine à quel point le système est privé et fiable.',
        bullets: [
          'Des appareils reliés commandés par application, hub ou voix',
          'Catégories : éclairage, climat, sécurité, divertissement, capteurs',
          'Un hub relie les appareils et exécute les automatisations',
          'Cloud contre contrôle local est le choix clé en 2026',
          'Grands écosystèmes : Alexa, Google Home, Apple Home, Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'L\'idée de base', anchor: 'core-idea' },
      { label: 'Les catégories d\'appareils', anchor: 'categories' },
      { label: 'Les hubs et comment les appareils dialoguent', anchor: 'hubs' },
      { label: 'Cloud contre local', anchor: 'cloud-vs-local' },
      { label: 'Les grands écosystèmes', anchor: 'ecosystems' },
      { label: 'Où aller ensuite', anchor: 'next' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Une maison connectée, ce sont des appareils reliés — lumières, thermostats, serrures, caméras, capteurs — que vous surveillez, automatisez et commandez par application ou à la voix.' },
      { type: 'plain-terms', content: 'Une maison connectée signifie simplement des appareils du quotidien capables de dialoguer entre eux et avec vous. Vous éteignez les lumières depuis votre téléphone, faites baisser le chauffage en partant, ou demandez à une enceinte de verrouiller la porte. La grande question est de savoir si tout cela passe par le cloud d\'une entreprise ou reste sur un hub chez vous.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Une maison connectée, ce sont des appareils reliés commandés par application, hub ou voix',
          'Les cinq catégories courantes sont l\'éclairage, le climat, la sécurité, le divertissement et les capteurs',
          'Un hub coordonne les appareils et exécute les automatisations pour qu\'ils fonctionnent ensemble',
          'Le contrôle cloud fait passer les commandes par un serveur du fabricant ; le local les garde à la maison',
          'Le contrôle local signifie plus de confidentialité et de fiabilité hors ligne — la distinction clé en 2026',
          'Les quatre grands écosystèmes sont Amazon Alexa, Google Home, Apple Home et Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: 'L\'idée de base',
        content:
          '**Une maison connectée transforme des appareils ordinaires en appareils que vous pouvez surveiller, automatiser et commander à distance ou à la voix.** L\'automatisation — des appareils qui agissent seuls selon des déclencheurs — est ce qui distingue une maison connectée d\'une collection d\'appareils télécommandés.',
        items: [
          '**Surveiller :** voir l\'état d\'un appareil (la porte est-elle verrouillée, fait-il chaud) de n\'importe où.',
          '**Automatiser :** définir des règles (« allume la lumière du porche au coucher du soleil ») pour que les appareils agissent sans vous.',
          '**Commander :** utiliser une application ou un assistant vocal pour piloter les appareils directement.',
        ],
      },
      categories: {
        id: 'categories',
        title: 'Les cinq catégories d\'appareils de la maison connectée',
        content:
          '**La plupart des appareils de la maison connectée relèvent de cinq catégories : éclairage, climat, sécurité, divertissement et capteurs.** Beaucoup d\'appareils existent en versions tout-cloud et à capacité locale.',
        columns: ['Catégorie', 'Appareils d\'exemple', 'Cloud ou local'],
        rows: [
          { 'Catégorie': 'Éclairage', 'Appareils d\'exemple': 'Ampoules connectées, interrupteurs, prises', 'Cloud ou local': 'Les deux (Zigbee/Matter sont locaux)' },
          { 'Catégorie': 'Climat', 'Appareils d\'exemple': 'Thermostats, vannes de radiateur connectées', 'Cloud ou local': 'Les deux' },
          { 'Catégorie': 'Sécurité', 'Appareils d\'exemple': 'Caméras, serrures connectées, sonnettes', 'Cloud ou local': 'Souvent cloud ; options locales existantes' },
          { 'Catégorie': 'Divertissement', 'Appareils d\'exemple': 'Enceintes, téléviseurs, appareils de streaming', 'Cloud ou local': 'Majoritairement cloud' },
          { 'Catégorie': 'Capteurs', 'Appareils d\'exemple': 'Mouvement, porte/fenêtre, température', 'Cloud ou local': 'Les deux (Zigbee/Z-Wave sont locaux)' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: 'Qu\'est-ce qu\'un hub de maison connectée ?',
        content:
          '**Un hub est le coordinateur qui permet aux appareils de dialoguer entre eux et d\'exécuter des automatisations, souvent en faisant le pont entre différents protocoles sans fil.** Certains écosystèmes utilisent un hub dédié ; d\'autres une enceinte ou votre téléphone.',
        items: [
          'Un hub relie des protocoles comme Zigbee et Z-Wave à votre réseau — voir [les protocoles de la maison connectée expliqués](/fr/smart-home/smart-home-protocols-explained).',
          'Les hubs locaux (comme Home Assistant) exécutent les automatisations sans internet.',
          'Les écosystèmes cloud n\'ont peut-être pas besoin d\'un hub séparé, mais dépendent de leurs serveurs.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Cloud contre local : la ligne de partage de 2026',
        content:
          '**Le contrôle cloud envoie vos commandes à un serveur du fabricant ; le contrôle local les garde dans votre maison.** Ce choix détermine la confidentialité, la fiabilité hors ligne et la possibilité pour un fabricant de modifier ou d\'arrêter vos appareils.',
        items: [
          '**Cloud :** configuration facile, mais les données quittent votre maison et des fonctions peuvent s\'arrêter si le service s\'arrête.',
          '**Local :** plus de configuration, mais privé, capable de fonctionner hors ligne et indépendant du cloud d\'un fabricant — voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
          '**Pourquoi cela devrait intéresser les débutants :** le choix est difficile à inverser plus tard, il vaut donc la peine de décider tôt.',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: 'Les grands écosystèmes',
        content:
          '**Les quatre grands écosystèmes sont Amazon Alexa, Google Home, Apple Home et Home Assistant — ils diffèrent surtout par la confidentialité et le contrôle local.** Home Assistant est le champion local/privé ; Alexa et Google sont cloud d\'abord.',
        items: [
          '**Amazon Alexa :** large prise en charge des appareils, cloud d\'abord, piloté par la voix.',
          '**Google Home :** large prise en charge et voix puissante, cloud d\'abord.',
          '**Apple Home :** plus axé sur la confidentialité, avec un peu de contrôle local via un home hub.',
          '**Home Assistant :** open source, local d\'abord, le plus privé — comparé dans [écosystèmes comparés](/fr/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      next: {
        id: 'next',
        title: 'Où aller ensuite',
        content:
          '**Si la confidentialité compte, empruntez la voie local-first ; si vous voulez juste de la commodité, un écosystème cloud est le démarrage le plus rapide.** Dans les deux cas, commencez par une pièce.',
        items: [
          'Débutant et vous voulez un parcours pas à pas ? Voir [maison connectée pour débutants : par où commencer](/fr/smart-home/smart-home-for-beginners-where-to-start).',
          'La confidentialité vous importe ? Voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Ai-je besoin d\'un hub pour une maison connectée ?', a: 'Pas toujours. Les appareils Wi-Fi et les écosystèmes cloud fonctionnent sans hub dédié, mais un hub est nécessaire pour les protocoles locaux comme Zigbee et Z-Wave et pour exécuter les automatisations localement. Un hub local comme Home Assistant garde aussi votre système opérationnel hors ligne.' },
          { q: 'Une maison connectée est-elle sûre ?', a: 'Elle peut l\'être, mais la sécurité dépend des appareils et de la configuration. Les appareils cloud exposent des données sur les serveurs du fabricant ; les configurations locales gardent les données à la maison. Utilisez des mots de passe forts, maintenez le firmware à jour et privilégiez les appareils à capacité locale pour les zones sensibles comme les caméras.' },
          { q: 'Cloud ou local pour les débutants ?', a: 'Les écosystèmes cloud sont plus faciles à démarrer ; les configurations locales demandent plus d\'effort mais offrent confidentialité et fiabilité hors ligne. Si la confidentialité vous importe, démarrer en local-first évite une migration plus difficile plus tard.' },
          { q: 'Quelle est la façon la moins chère de démarrer une maison connectée ?', a: 'Commencez par une pièce et quelques appareils à capacité locale peu coûteux (deux ou trois ampoules ou prises connectées et un capteur) plus un hub. Étendre progressivement évite de trop dépenser et vous laisse apprendre avant de vous engager dans un écosystème.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — la voie privée et sans cloud',
          '[L\'histoire de la technologie de la maison connectée](/fr/smart-home/history-of-smart-home-technology) — comment nous en sommes arrivés là',
          '[Maison connectée pour débutants : par où commencer](/fr/smart-home/smart-home-for-beginners-where-to-start) — vos premiers pas',
          '[Écosystèmes de maison connectée comparés](/fr/smart-home/smart-home-ecosystems-compared) — choisissez une plateforme',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qu\'est-ce qu\'une Maison Connectée ? Guide Débutant 2026',
      description: 'Une maison connectée, ce sont des appareils reliés commandés par app ou à la voix. Guide 2026 : catégories, hubs, cloud contre local et écosystèmes.',
      url: 'https://www.promptquorum.com/fr/smart-home/what-is-a-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Maison connectée' }, { '@type': 'Thing', name: 'Domotique' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Ai-je besoin d\'un hub pour une maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'Pas toujours. Les appareils Wi-Fi et les écosystèmes cloud fonctionnent sans, mais un hub est nécessaire pour les protocoles locaux comme Zigbee et Z-Wave et pour exécuter les automatisations localement.' } },
        { '@type': 'Question', name: 'Une maison connectée est-elle sûre ?', acceptedAnswer: { '@type': 'Answer', text: 'Elle peut l\'être, selon les appareils et la configuration. Les appareils cloud exposent des données sur les serveurs du fabricant ; les configurations locales gardent les données à la maison. Utilisez des mots de passe forts, mettez à jour le firmware et privilégiez les appareils locaux pour les caméras.' } },
        { '@type': 'Question', name: 'Cloud ou local pour les débutants ?', acceptedAnswer: { '@type': 'Answer', text: 'Le cloud est plus facile à démarrer ; le local demande plus d\'effort mais offre confidentialité et fiabilité hors ligne. Si la confidentialité compte, démarrer en local-first évite une migration plus difficile.' } },
        { '@type': 'Question', name: 'Quelle est la façon la moins chère de démarrer une maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'Commencez par une pièce et quelques appareils à capacité locale peu coûteux plus un hub, puis étendez progressivement.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'スマートホームとは？2026年版 初心者ガイド',
    seoTitle: 'スマートホームとは？アプリ・音声制御から始める2026年版初心者ガイド',
    intro:
      'スマートホームとは、アプリや音声で監視・自動化・制御できる接続機器の集まりです。本初心者ガイドでは、基本的な考え方、機器のカテゴリー、ハブが機器をどうつなぐか、2026年のプライバシーを左右するクラウド対ローカルの選択、主要なエコシステム、そしてプライベートな選択肢を求める場合の次の一歩を説明します。',
    metaDescription:
      'スマートホームとはアプリや音声で操作できる接続機器の集まりです。2026年版ガイドでは照明から防犯まで5カテゴリー、ハブの仕組み、クラウド対ローカル制御の違い、主要4エコシステムをわかりやすく解説します。',
    twitterDescription:
      'スマートホームとは？アプリや音声で自動化・制御する接続機器。2026年版初心者ガイドでカテゴリー、ハブ、クラウド対ローカルを解説。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    audience: '初めてのスマートホームを計画する初心者',
    primaryTerm: 'smart home',
    targetKeywords: [
      'スマートホームとは',
      'スマートホーム 解説',
      'スマートホーム 基礎',
      'スマートホーム 初心者',
      'クラウド対ローカル スマートホーム',
    ],
    leadAnswerBlock:
      '**スマートホームとは、インターネットまたはハブで接続された機器——照明、サーモスタット、ロック、カメラ、センサー——の集まりで、アプリや音声で監視・自動化・制御できます。** 2026年の最大の選択はクラウド対ローカル制御です。これがプライバシーと信頼性を左右します。',
    quickAnswerTop: {
      ja: {
        question: 'スマートホームとは何ですか？',
        answer:
          'スマートホームとは、接続された機器をアプリ・ハブ・音声コマンドで制御し自動化する住まいです。機器は照明、空調、セキュリティ、エンターテインメント、センサーに及びます。それらがメーカーのクラウド経由で動くか、ハブ上でローカルに動くかが、システムの私的性と信頼性を決めます。',
        bullets: [
          'アプリ・ハブ・音声で制御される接続機器',
          'カテゴリー：照明、空調、セキュリティ、エンタメ、センサー',
          'ハブが機器をつなぎ、自動化を実行する',
          'クラウド対ローカル制御が2026年の鍵となる選択',
          '主要エコシステム：Alexa、Google Home、Apple Home、Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '基本の考え方', anchor: 'core-idea' },
      { label: '機器のカテゴリー', anchor: 'categories' },
      { label: 'ハブと機器の通信', anchor: 'hubs' },
      { label: 'クラウド対ローカル', anchor: 'cloud-vs-local' },
      { label: '主要なエコシステム', anchor: 'ecosystems' },
      { label: '次の一歩', anchor: 'next' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'スマートホームとは、接続機器——照明、サーモスタット、ロック、カメラ、センサー——をアプリや音声で監視・自動化・制御するものです。' },
      { type: 'plain-terms', content: 'スマートホームとは要するに、互いに、そしてあなたと通信できる日常機器のことです。スマホで照明を消し、外出時に暖房を下げ、スピーカーにドアの施錠を頼めます。大きな問いは、それらすべてが企業のクラウドを経由するのか、家のハブにとどまるのかです。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'スマートホームとは、アプリ・ハブ・音声で制御される接続機器',
          '一般的な5カテゴリーは照明、空調、セキュリティ、エンターテインメント、センサー',
          'ハブが機器を調整し、連携して動くよう自動化を実行する',
          'クラウド制御は命令をメーカーのサーバー経由にする；ローカル制御は家にとどめる',
          'ローカル制御はより高いプライバシーとオフラインの信頼性を意味する——2026年の鍵となる区別',
          '主要4エコシステムは Amazon Alexa、Google Home、Apple Home、Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: '基本の考え方',
        content:
          '**スマートホームは、普通の機器を、遠隔または音声で監視・自動化・制御できるものに変えます。** 自動化——機器が引き金に応じて自ら動くこと——こそが、スマートホームを単なる遠隔操作機器の集まりと分けるものです。',
        items: [
          '**監視：** 機器の状態（ドアは施錠されているか、暖かいか）をどこからでも確認する。',
          '**自動化：** ルールを設定し（「日没にポーチの照明をつける」）、機器をあなたなしで動かす。',
          '**制御：** アプリや音声アシスタントで機器を直接操作する。',
        ],
      },
      categories: {
        id: 'categories',
        title: 'スマートホーム機器の5カテゴリー',
        content:
          '**ほとんどのスマートホーム機器は5つのカテゴリーに収まります：照明、空調、セキュリティ、エンターテインメント、センサー。** 多くの機器にはクラウド専用版とローカル対応版の両方があります。',
        columns: ['カテゴリー', '機器の例', 'クラウドかローカルか'],
        rows: [
          { 'カテゴリー': '照明', '機器の例': 'スマート電球、スイッチ、プラグ', 'クラウドかローカルか': '両方（Zigbee/Matter はローカル）' },
          { 'カテゴリー': '空調', '機器の例': 'サーモスタット、スマートラジエーターバルブ', 'クラウドかローカルか': '両方' },
          { 'カテゴリー': 'セキュリティ', '機器の例': 'カメラ、スマートロック、ドアベル', 'クラウドかローカルか': '多くはクラウド；ローカルの選択肢あり' },
          { 'カテゴリー': 'エンターテインメント', '機器の例': 'スピーカー、テレビ、ストリーミング機器', 'クラウドかローカルか': 'ほぼクラウド' },
          { 'カテゴリー': 'センサー', '機器の例': '人感、ドア/窓、温度', 'クラウドかローカルか': '両方（Zigbee/Z-Wave はローカル）' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: 'スマートホームハブとは？',
        content:
          '**ハブとは、機器同士を通信させ自動化を実行する調整役で、異なる無線プロトコルを橋渡しすることも多いです。** 専用ハブを使うエコシステムもあれば、スピーカーやスマホを使うものもあります。',
        items: [
          'ハブは Zigbee や Z-Wave のようなプロトコルをあなたのネットワークへ橋渡しします——[スマートホームのプロトコル解説](/ja/smart-home/smart-home-protocols-explained)を参照。',
          'ローカルハブ（Home Assistant など）はインターネットなしで自動化を実行します。',
          'クラウドエコシステムは別途ハブを必要としないかもしれませんが、そのサーバーに依存します。',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'クラウド対ローカル：2026年の分かれ目',
        content:
          '**クラウド制御は命令をメーカーのサーバーへ送り、ローカル制御はそれを家の中にとどめます。** この選択がプライバシー、オフラインの信頼性、そしてメーカーがあなたの機器を変更・終了できるかどうかを決めます。',
        items: [
          '**クラウド：** 設定は簡単ですが、データが家を出て、サービス終了で機能が止まる可能性があります。',
          '**ローカル：** 設定は多いですが、私的でオフライン対応、メーカーのクラウドに依存しません——[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
          '**なぜ初心者が気にすべきか：** この選択は後から覆しにくいため、早めに決める価値があります。',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: '主要なエコシステム',
        content:
          '**主要4エコシステムは Amazon Alexa、Google Home、Apple Home、Home Assistant で、最も大きく異なるのはプライバシーとローカル制御です。** Home Assistant はローカル/私的の王者；Alexa と Google はクラウド優先です。',
        items: [
          '**Amazon Alexa：** 最も広い機器対応、クラウド優先、音声主導。',
          '**Google Home：** 広い対応と強力な音声、クラウド優先。',
          '**Apple Home：** よりプライバシー重視で、ホームハブ経由のローカル制御もあり。',
          '**Home Assistant：** オープンソース、ローカル優先、最も私的——[エコシステム比較](/ja/smart-home/smart-home-ecosystems-compared)で比較。',
        ],
      },
      next: {
        id: 'next',
        title: '次の一歩',
        content:
          '**プライバシーが重要ならローカルファーストの道へ；利便性だけが目的ならクラウドエコシステムが最速の出発点です。** いずれにせよ、一部屋から始めましょう。',
        items: [
          '初めてで手順が欲しい方は[スマートホーム初心者：どこから始めるか](/ja/smart-home/smart-home-for-beginners-where-to-start)を参照。',
          'プライバシーが気になる方は[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'スマートホームにハブは必要ですか？', a: '常にではありません。Wi-Fi 機器やクラウドエコシステムは専用ハブなしで動きますが、Zigbee や Z-Wave のようなローカルプロトコルや、ローカルでの自動化実行にはハブが必要です。Home Assistant のようなローカルハブはシステムをオフラインでも動かし続けます。' },
          { q: 'スマートホームは安全ですか？', a: '安全にできますが、安全性は機器と設定次第です。クラウド機器はメーカーのサーバーにデータをさらし、ローカル構成はデータを家に保ちます。強いパスワードを使い、ファームウェアを最新に保ち、カメラなど機微な領域にはローカル対応機器を優先してください。' },
          { q: '初心者はクラウドとローカルのどちらが良いですか？', a: 'クラウドエコシステムは始めやすく、ローカル構成は手間が増えますがプライバシーとオフラインの信頼性をもたらします。プライバシーが重要なら、ローカルファーストで始めると後の難しい移行を避けられます。' },
          { q: 'スマートホームを最も安く始める方法は？', a: '一部屋と、安価なローカル対応機器（スマート電球やプラグ数個とセンサー）にハブを加えて始めましょう。少しずつ拡張すれば使いすぎを避けられ、エコシステムを決める前に学べます。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 私的でクラウド不要の道',
          '[スマートホーム技術の歴史](/ja/smart-home/history-of-smart-home-technology) — ここに至るまで',
          '[スマートホーム初心者：どこから始めるか](/ja/smart-home/smart-home-for-beginners-where-to-start) — 最初の一歩',
          '[スマートホームのエコシステム比較](/ja/smart-home/smart-home-ecosystems-compared) — プラットフォームを選ぶ',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホームとは？2026年版 初心者ガイド',
      description: 'スマートホームとはアプリや音声で操作できる接続機器の集まりです。2026年版ガイドでは照明から防犯まで5カテゴリー、ハブの仕組み、クラウド対ローカル制御の違い、主要4エコシステムをわかりやすく解説します。',
      url: 'https://www.promptquorum.com/ja/smart-home/what-is-a-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'スマートホーム' }, { '@type': 'Thing', name: 'ホームオートメーション' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'スマートホームにハブは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '常にではありません。Wi-Fi 機器やクラウドエコシステムは専用ハブなしで動きますが、Zigbee や Z-Wave のローカルプロトコルやローカル自動化にはハブが必要です。' } },
        { '@type': 'Question', name: 'スマートホームは安全ですか？', acceptedAnswer: { '@type': 'Answer', text: '安全にできますが、機器と設定次第です。クラウド機器はメーカーのサーバーにデータをさらし、ローカル構成はデータを家に保ちます。強いパスワードとファームウェア更新、カメラはローカル対応機器を優先してください。' } },
        { '@type': 'Question', name: '初心者はクラウドとローカルのどちらが良いですか？', acceptedAnswer: { '@type': 'Answer', text: 'クラウドは始めやすく、ローカルは手間が増えますがプライバシーとオフラインの信頼性をもたらします。プライバシーが重要ならローカルファーストで始めると後の移行を避けられます。' } },
        { '@type': 'Question', name: 'スマートホームを最も安く始める方法は？', acceptedAnswer: { '@type': 'Answer', text: '一部屋と安価なローカル対応機器にハブを加えて始め、少しずつ拡張しましょう。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'O Que É uma Casa Inteligente? Guia para Iniciantes 2026',
    seoTitle: 'O Que É uma Casa Inteligente? Guia Iniciantes 2026',
    intro:
      'Uma casa inteligente é um conjunto de dispositivos conectados que você monitora, automatiza e controla por aplicativo ou voz. Este guia para iniciantes explica a ideia central, as categorias de dispositivos, como os hubs unem os dispositivos, a decisão nuvem-versus-local que define a privacidade em 2026, os grandes ecossistemas e para onde ir depois se você quer uma opção privada.',
    metaDescription:
      'Uma casa inteligente são dispositivos conectados que você controla por aplicativo ou voz. Guia 2026: categorias, hubs, a decisão nuvem-vs-local e ecossistemas.',
    twitterDescription:
      'O que é uma casa inteligente? Dispositivos conectados que você automatiza e controla por aplicativo ou voz. O guia para iniciantes 2026: categorias, hubs e nuvem vs local.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Iniciantes planejando sua primeira casa inteligente',
    primaryTerm: 'smart home',
    targetKeywords: [
      'o que é uma casa inteligente',
      'casa inteligente explicada',
      'fundamentos da casa inteligente',
      'casa inteligente para iniciantes',
      'nuvem vs local casa inteligente',
    ],
    leadAnswerBlock:
      '**Uma casa inteligente é um conjunto de dispositivos conectados por internet ou hub — luzes, termostatos, fechaduras, câmeras, sensores — que você pode monitorar, automatizar e controlar por aplicativo ou voz.** A maior decisão em 2026 é nuvem versus controle local, porque ela determina sua privacidade e sua confiabilidade.',
    quickAnswerTop: {
      pt: {
        question: 'O que é uma casa inteligente?',
        answer:
          'Uma casa inteligente é uma residência em que dispositivos conectados são controlados e automatizados por meio de um aplicativo, um hub ou comandos de voz. Os dispositivos abrangem iluminação, climatização, segurança, entretenimento e sensores. Se eles funcionam pela nuvem de um fabricante ou localmente em um hub determina o quanto o sistema é privado e confiável.',
        bullets: [
          'Dispositivos conectados controlados por aplicativo, hub ou voz',
          'Categorias: iluminação, climatização, segurança, entretenimento, sensores',
          'Um hub une os dispositivos e executa automações',
          'Nuvem versus controle local é a decisão-chave em 2026',
          'Grandes ecossistemas: Alexa, Google Home, Apple Home, Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'A ideia central', anchor: 'core-idea' },
      { label: 'As categorias de dispositivos', anchor: 'categories' },
      { label: 'Os hubs e como os dispositivos se comunicam', anchor: 'hubs' },
      { label: 'Nuvem versus local', anchor: 'cloud-vs-local' },
      { label: 'Os grandes ecossistemas', anchor: 'ecosystems' },
      { label: 'Para onde ir depois', anchor: 'next' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Uma casa inteligente são dispositivos conectados — luzes, termostatos, fechaduras, câmeras, sensores — que você monitora, automatiza e controla por aplicativo ou voz.' },
      { type: 'plain-terms', content: 'Uma casa inteligente simplesmente significa dispositivos do dia a dia que conseguem conversar entre si e com você. Você apaga as luzes pelo celular, faz o aquecimento abaixar quando sai, ou pede a uma caixa de som para trancar a porta. A grande questão é se tudo isso passa pela nuvem de uma empresa ou fica em um hub na sua casa.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Uma casa inteligente são dispositivos conectados controlados por aplicativo, hub ou voz',
          'As cinco categorias comuns são iluminação, climatização, segurança, entretenimento e sensores',
          'Um hub coordena os dispositivos e executa automações para que trabalhem juntos',
          'O controle na nuvem roteia os comandos por um servidor do fabricante; o local os mantém em casa',
          'O controle local significa mais privacidade e confiabilidade offline — a distinção-chave em 2026',
          'Os quatro grandes ecossistemas são Amazon Alexa, Google Home, Apple Home e Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: 'A ideia central',
        content:
          '**Uma casa inteligente transforma dispositivos comuns em outros que você pode monitorar, automatizar e controlar remotamente ou por voz.** A automação — dispositivos agindo sozinhos com base em gatilhos — é o que separa uma casa inteligente de uma coleção de aparelhos com controle remoto.',
        items: [
          '**Monitorar:** ver o estado do dispositivo (a porta está trancada, está quente) de qualquer lugar.',
          '**Automatizar:** definir regras ("acenda a luz da varanda ao pôr do sol") para que os dispositivos ajam sem você.',
          '**Controlar:** usar um aplicativo ou um assistente de voz para operar os dispositivos diretamente.',
        ],
      },
      categories: {
        id: 'categories',
        title: 'As cinco categorias de dispositivos da casa inteligente',
        content:
          '**A maioria dos dispositivos da casa inteligente se enquadra em cinco categorias: iluminação, climatização, segurança, entretenimento e sensores.** Muitos dispositivos vêm em versões tanto só-nuvem quanto com capacidade local.',
        columns: ['Categoria', 'Dispositivos de exemplo', 'Nuvem ou local'],
        rows: [
          { 'Categoria': 'Iluminação', 'Dispositivos de exemplo': 'Lâmpadas inteligentes, interruptores, tomadas', 'Nuvem ou local': 'Ambos (Zigbee/Matter são locais)' },
          { 'Categoria': 'Climatização', 'Dispositivos de exemplo': 'Termostatos, válvulas inteligentes de radiador', 'Nuvem ou local': 'Ambos' },
          { 'Categoria': 'Segurança', 'Dispositivos de exemplo': 'Câmeras, fechaduras inteligentes, campainhas', 'Nuvem ou local': 'Muitas vezes nuvem; há opções locais' },
          { 'Categoria': 'Entretenimento', 'Dispositivos de exemplo': 'Caixas de som, TVs, dispositivos de streaming', 'Nuvem ou local': 'Majoritariamente nuvem' },
          { 'Categoria': 'Sensores', 'Dispositivos de exemplo': 'Movimento, porta/janela, temperatura', 'Nuvem ou local': 'Ambos (Zigbee/Z-Wave são locais)' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: 'O que é um hub de casa inteligente?',
        content:
          '**Um hub é o coordenador que permite que os dispositivos conversem entre si e executem automações, muitas vezes fazendo a ponte entre diferentes protocolos sem fio.** Alguns ecossistemas usam um hub dedicado; outros usam uma caixa de som ou o seu celular.',
        items: [
          'Um hub conecta protocolos como Zigbee e Z-Wave à sua rede — veja [protocolos da casa inteligente explicados](/pt/smart-home/smart-home-protocols-explained).',
          'Hubs locais (como o Home Assistant) executam automações sem internet.',
          'Ecossistemas na nuvem talvez não precisem de um hub separado, mas dependem dos servidores deles.',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: 'Nuvem versus local: a linha divisória de 2026',
        content:
          '**O controle na nuvem envia seus comandos a um servidor do fabricante; o controle local os mantém dentro de casa.** Essa escolha determina a privacidade, a confiabilidade offline e se um fabricante pode alterar ou descontinuar seus dispositivos.',
        items: [
          '**Nuvem:** configuração fácil, mas os dados saem de casa e as funções podem parar se o serviço parar.',
          '**Local:** mais configuração, mas privado, capaz de funcionar offline e independente da nuvem de um fabricante — veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
          '**Por que iniciantes deveriam se importar:** a escolha é difícil de reverter depois, então vale decidir cedo.',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: 'Os grandes ecossistemas',
        content:
          '**Os quatro grandes ecossistemas são Amazon Alexa, Google Home, Apple Home e Home Assistant — eles diferem mais em privacidade e controle local.** O Home Assistant é o campeão local/privado; Alexa e Google são nuvem em primeiro lugar.',
        items: [
          '**Amazon Alexa:** o mais amplo suporte a dispositivos, nuvem em primeiro lugar, guiado por voz.',
          '**Google Home:** amplo suporte e voz forte, nuvem em primeiro lugar.',
          '**Apple Home:** mais voltado à privacidade, com algum controle local via um home hub.',
          '**Home Assistant:** de código aberto, local em primeiro lugar, o mais privado — comparado em [ecossistemas comparados](/pt/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      next: {
        id: 'next',
        title: 'Para onde ir depois',
        content:
          '**Se a privacidade importa, siga o caminho local-first; se você só quer comodidade, um ecossistema na nuvem é o começo mais rápido.** De qualquer forma, comece por um cômodo.',
        items: [
          'Novo e quer um caminho passo a passo? Veja [casa inteligente para iniciantes: por onde começar](/pt/smart-home/smart-home-for-beginners-where-to-start).',
          'Importa-se com a privacidade? Veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de um hub para uma casa inteligente?', a: 'Nem sempre. Dispositivos Wi-Fi e ecossistemas na nuvem funcionam sem um hub dedicado, mas um hub é necessário para protocolos locais como Zigbee e Z-Wave e para executar automações localmente. Um hub local como o Home Assistant também mantém seu sistema funcionando offline.' },
          { q: 'Uma casa inteligente é segura?', a: 'Pode ser, mas a segurança depende dos dispositivos e da configuração. Dispositivos na nuvem expõem dados em servidores do fabricante; configurações locais mantêm os dados em casa. Use senhas fortes, mantenha o firmware atualizado e prefira dispositivos com capacidade local para áreas sensíveis como câmeras.' },
          { q: 'Nuvem ou local para iniciantes?', a: 'Ecossistemas na nuvem são mais fáceis de começar; configurações locais exigem mais esforço, mas oferecem privacidade e confiabilidade offline. Se a privacidade importa, começar local-first evita uma migração mais difícil depois.' },
          { q: 'Qual a forma mais barata de começar uma casa inteligente?', a: 'Comece com um cômodo e alguns dispositivos com capacidade local e baratos (algumas lâmpadas ou tomadas inteligentes e um sensor) mais um hub. Expandir aos poucos evita gastar demais e deixa você aprender antes de se comprometer com um ecossistema.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o caminho privado e sem nuvem',
          '[A história da tecnologia de casa inteligente](/pt/smart-home/history-of-smart-home-technology) — como chegamos aqui',
          '[Casa inteligente para iniciantes: por onde começar](/pt/smart-home/smart-home-for-beginners-where-to-start) — seus primeiros passos',
          '[Ecossistemas de casa inteligente comparados](/pt/smart-home/smart-home-ecosystems-compared) — escolha uma plataforma',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'O Que É uma Casa Inteligente? Guia para Iniciantes 2026',
      description: 'Uma casa inteligente são dispositivos conectados que você controla por aplicativo ou voz. Guia 2026: categorias, hubs, a decisão nuvem-vs-local e ecossistemas.',
      url: 'https://www.promptquorum.com/pt/smart-home/what-is-a-smart-home',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Casa inteligente' }, { '@type': 'Thing', name: 'Automação residencial' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de um hub para uma casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'Nem sempre. Dispositivos Wi-Fi e ecossistemas na nuvem funcionam sem um, mas um hub é necessário para protocolos locais como Zigbee e Z-Wave e para executar automações localmente.' } },
        { '@type': 'Question', name: 'Uma casa inteligente é segura?', acceptedAnswer: { '@type': 'Answer', text: 'Pode ser, conforme os dispositivos e a configuração. Dispositivos na nuvem expõem dados em servidores do fabricante; configurações locais mantêm os dados em casa. Use senhas fortes, atualize o firmware e prefira dispositivos locais para câmeras.' } },
        { '@type': 'Question', name: 'Nuvem ou local para iniciantes?', acceptedAnswer: { '@type': 'Answer', text: 'A nuvem é mais fácil de começar; o local exige mais esforço mas oferece privacidade e confiabilidade offline. Se a privacidade importa, começar local-first evita uma migração mais difícil.' } },
        { '@type': 'Question', name: 'Qual a forma mais barata de começar uma casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'Comece com um cômodo e alguns dispositivos baratos com capacidade local mais um hub, e expanda aos poucos.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: '什么是智能家居？2026新手指南',
    seoTitle: '什么是智能家居？应用与语音控制、生态系统与云端本地对比 2026新手指南',
    intro:
      '智能家居是一组联网设备，你可以通过应用或语音来监控、自动化和控制它们。本新手指南讲解核心理念、设备类别、中枢如何连接设备、在2026年决定隐私的云端对本地之选、主要生态系统，以及如果你想要更私密的方案下一步去哪里。',
    metaDescription:
      '智能家居是指通过应用或语音控制的联网设备集合，涵盖照明、温控、安防等五大类别。本2026新手指南解析中枢作用、云端对本地控制的关键区别以及四大主流生态系统。',
    twitterDescription:
      '什么是智能家居？你用应用或语音自动化与控制的联网设备。2026新手指南讲解类别、中枢与云端对本地。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    audience: '规划第一套智能家居的新手',
    primaryTerm: 'smart home',
    targetKeywords: [
      '什么是智能家居',
      '智能家居 解释',
      '智能家居 基础',
      '智能家居 新手',
      '云端对本地 智能家居',
    ],
    leadAnswerBlock:
      '**智能家居是一组通过互联网或中枢联网的设备——灯具、温控器、门锁、摄像头、传感器——你可以通过应用或语音来监控、自动化和控制它们。** 2026年最大的抉择是云端对本地控制，因为它决定了你的隐私与可靠性。',
    quickAnswerTop: {
      zh: {
        question: '什么是智能家居？',
        answer:
          '智能家居是指联网设备通过应用、中枢或语音命令被控制和自动化的住宅。设备涵盖照明、温控、安防、娱乐和传感器。它们是经由厂商云端运行，还是在中枢上本地运行，决定了系统的私密性与可靠性。',
        bullets: [
          '由应用、中枢或语音控制的联网设备',
          '类别：照明、温控、安防、娱乐、传感器',
          '中枢连接设备并执行自动化',
          '云端对本地控制是2026年的关键抉择',
          '主要生态：Alexa、Google Home、Apple Home、Home Assistant',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '核心理念', anchor: 'core-idea' },
      { label: '设备类别', anchor: 'categories' },
      { label: '中枢与设备如何通信', anchor: 'hubs' },
      { label: '云端对本地', anchor: 'cloud-vs-local' },
      { label: '主要生态系统', anchor: 'ecosystems' },
      { label: '下一步去哪里', anchor: 'next' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '智能家居是联网设备——灯具、温控器、门锁、摄像头、传感器——你用应用或语音来监控、自动化和控制。' },
      { type: 'plain-terms', content: '智能家居其实就是能彼此通信、也能与你通信的日常设备。你可以用手机关灯、出门时让暖气调低，或让音箱锁门。最大的问题是这一切是经过某家公司的云端，还是留在你家中的中枢上。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '智能家居是由应用、中枢或语音控制的联网设备',
          '五个常见类别是照明、温控、安防、娱乐和传感器',
          '中枢协调设备并执行自动化，使其协同工作',
          '云端控制把命令经由厂商服务器；本地控制将其留在家中',
          '本地控制意味着更高的隐私和离线可靠性——2026年的关键区别',
          '四大生态系统是 Amazon Alexa、Google Home、Apple Home 和 Home Assistant',
        ],
      },
      coreIdea: {
        id: 'core-idea',
        title: '核心理念',
        content:
          '**智能家居把普通设备变成可以远程或语音监控、自动化和控制的设备。** 自动化——设备根据触发条件自行动作——正是把智能家居与一堆遥控设备区分开来的关键。',
        items: [
          '**监控：** 随处查看设备状态（门是否锁好、是否温暖）。',
          '**自动化：** 设定规则（“日落时打开门廊灯”），让设备无需你便自行动作。',
          '**控制：** 用应用或语音助手直接操作设备。',
        ],
      },
      categories: {
        id: 'categories',
        title: '智能家居设备的五大类别',
        content:
          '**大多数智能家居设备归入五类：照明、温控、安防、娱乐和传感器。** 许多设备同时有仅云端版和支持本地版。',
        columns: ['类别', '示例设备', '云端还是本地'],
        rows: [
          { '类别': '照明', '示例设备': '智能灯泡、开关、插座', '云端还是本地': '两者（Zigbee/Matter 为本地）' },
          { '类别': '温控', '示例设备': '温控器、智能暖气阀', '云端还是本地': '两者' },
          { '类别': '安防', '示例设备': '摄像头、智能门锁、门铃', '云端还是本地': '常为云端；存在本地选项' },
          { '类别': '娱乐', '示例设备': '音箱、电视、流媒体设备', '云端还是本地': '多为云端' },
          { '类别': '传感器', '示例设备': '人体、门窗、温度', '云端还是本地': '两者（Zigbee/Z-Wave 为本地）' },
        ],
      },
      hubs: {
        id: 'hubs',
        title: '什么是智能家居中枢？',
        content:
          '**中枢是让设备彼此通信并执行自动化的协调者，常常在不同无线协议之间充当桥梁。** 有些生态系统使用专用中枢，有些则用音箱或你的手机。',
        items: [
          '中枢把 Zigbee、Z-Wave 等协议桥接到你的网络——参见[智能家居协议详解](/zh/smart-home/smart-home-protocols-explained)。',
          '本地中枢（如 Home Assistant）在无网络时也能执行自动化。',
          '云端生态或许不需要单独的中枢，但要依赖其服务器。',
        ],
      },
      cloudVsLocal: {
        id: 'cloud-vs-local',
        title: '云端对本地：2026年的分界线',
        content:
          '**云端控制把你的命令发到厂商服务器；本地控制将其留在你家中。** 这一选择决定了隐私、离线可靠性，以及厂商能否更改或停用你的设备。',
        items: [
          '**云端：** 设置简单，但数据离开你家，服务停止时功能可能终止。',
          '**本地：** 设置更多，但私密、可离线、不依赖厂商云端——参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
          '**为何新手应当在意：** 这一选择日后难以逆转，因此值得尽早决定。',
        ],
      },
      ecosystems: {
        id: 'ecosystems',
        title: '主要生态系统',
        content:
          '**四大生态系统是 Amazon Alexa、Google Home、Apple Home 和 Home Assistant——它们最大的差异在于隐私和本地控制。** Home Assistant 是本地/私密的冠军；Alexa 和 Google 以云端为先。',
        items: [
          '**Amazon Alexa：** 设备支持最广，云端为先，语音主导。',
          '**Google Home：** 支持广泛、语音强大，云端为先。',
          '**Apple Home：** 更注重隐私，借助 home hub 提供一些本地控制。',
          '**Home Assistant：** 开源、本地为先、最为私密——在[生态系统对比](/zh/smart-home/smart-home-ecosystems-compared)中比较。',
        ],
      },
      next: {
        id: 'next',
        title: '下一步去哪里',
        content:
          '**如果你看重隐私，走本地优先之路；如果只想要便利，云端生态是最快的起点。** 无论哪种，从一个房间开始。',
        items: [
          '新手并想要分步路径？参见[智能家居新手：从何处开始](/zh/smart-home/smart-home-for-beginners-where-to-start)。',
          '在意隐私？参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '智能家居需要中枢吗？', a: '不总是。Wi-Fi 设备和云端生态无需专用中枢即可工作，但 Zigbee、Z-Wave 等本地协议以及本地执行的自动化需要中枢。像 Home Assistant 这样的本地中枢还能让你的系统在离线时继续运行。' },
          { q: '智能家居安全吗？', a: '可以安全，但安全性取决于设备和配置。云端设备把数据暴露在厂商服务器上；本地配置把数据留在家中。请使用强密码、保持固件更新，并为摄像头等敏感区域优先选择支持本地的设备。' },
          { q: '新手该选云端还是本地？', a: '云端生态更易上手；本地配置需要更多投入，但提供隐私和离线可靠性。如果你看重隐私，从本地优先起步能避免日后更困难的迁移。' },
          { q: '开始智能家居最便宜的方式是什么？', a: '从一个房间和几件便宜的、支持本地的设备（几只智能灯泡或插座加一个传感器）以及一个中枢开始。逐步扩展可避免超支，并让你在确定生态之前先行学习。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 私密、无云端的路径',
          '[智能家居技术的历史](/zh/smart-home/history-of-smart-home-technology) — 我们如何走到今天',
          '[智能家居新手：从何处开始](/zh/smart-home/smart-home-for-beginners-where-to-start) — 你的第一步',
          '[智能家居生态系统对比](/zh/smart-home/smart-home-ecosystems-compared) — 选择一个平台',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '什么是智能家居？2026新手指南',
      description: '智能家居是指通过应用或语音控制的联网设备集合，涵盖照明、温控、安防等五大类别。本2026新手指南解析中枢作用、云端对本地控制的关键区别以及四大主流生态系统。',
      url: 'https://www.promptquorum.com/zh/smart-home/what-is-a-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '智能家居' }, { '@type': 'Thing', name: '家庭自动化' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '智能家居需要中枢吗？', acceptedAnswer: { '@type': 'Answer', text: '不总是。Wi-Fi 设备和云端生态无需专用中枢即可工作，但 Zigbee、Z-Wave 等本地协议以及本地自动化需要中枢。' } },
        { '@type': 'Question', name: '智能家居安全吗？', acceptedAnswer: { '@type': 'Answer', text: '可以安全，取决于设备和配置。云端设备把数据暴露在厂商服务器上；本地配置把数据留在家中。请使用强密码、更新固件，并为摄像头优先选择支持本地的设备。' } },
        { '@type': 'Question', name: '新手该选云端还是本地？', acceptedAnswer: { '@type': 'Answer', text: '云端更易上手；本地需要更多投入但提供隐私和离线可靠性。如果看重隐私，从本地优先起步能避免日后更困难的迁移。' } },
        { '@type': 'Question', name: '开始智能家居最便宜的方式是什么？', acceptedAnswer: { '@type': 'Answer', text: '从一个房间和几件便宜的支持本地的设备加一个中枢开始，逐步扩展。' } },
      ],
    },
  },
}
