import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-en.webp',
    // Verified 2026-07-16: battery capacity figures below are cited directly from manufacturer
    // datasheets (Tesla's Energy Library, Enphase's own spec sheet) as anchor examples of what
    // capacity ranges exist today — capacity (kWh) is a stable spec, unlike price. No price or
    // "hours of backup" figure is asserted, following the same standard the balcony-solar
    // cluster's own battery guide already applies (its own tableNote explicitly omits prices as
    // Section-301-tariff-sensitive and tells readers to verify at time of purchase). This article
    // stays informational — no affiliateLinks — per sourcing-pass scope.
    title: 'Turning Your Home Into an Energy Microgrid (2027)',
    seoTitle: 'Home Energy Microgrid Setup (2027)',
    intro:
      'A home energy "microgrid" in the consumer sense means solar generation plus battery storage plus local automation that can keep essential circuits running during a grid outage — not a true islanded utility-scale microgrid, which is a different, commercial-scale engineering problem. This guide scopes what\'s realistically achievable with home battery + inverter + Home Assistant automation, and where to go for the hardware specifics.',
    metaDescription:
      'Home energy microgrid setup in 2027: solar, battery, and local automation for outage backup — scoped to what home hardware actually supports.',
    twitterDescription:
      'What a "home microgrid" actually means: solar + battery + local automation for outage backup, not utility-scale islanding.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners considering battery backup for outage independence',
    primaryTerm: 'home energy microgrid',
    targetKeywords: [
      'home energy microgrid setup',
      'whole home battery backup automation',
      'home battery outage backup',
      'solar battery backup automation',
      'islanded home power system',
    ],
    leadAnswerBlock:
      '**A consumer "home microgrid" is solar generation plus battery storage plus an automatic transfer setup that keeps chosen circuits running during a grid outage — it is not the same as a utility-scale microgrid, which involves multi-building grid islanding and generation coordination that home hardware does not do.** Scope your expectations to essential-circuit backup, not whole-home independence, unless your battery capacity and inverter are sized for that specifically.',
    quickAnswerTop: {
      en: {
        question: 'Can I turn my home into an energy microgrid?',
        answer:
          'In the consumer-hardware sense, yes — solar panels, a home battery, and a compatible inverter with automatic transfer switching can keep chosen circuits (refrigerator, some lighting, internet) running during a grid outage. This is fundamentally different from a true utility-scale microgrid, which involves islanding multiple buildings from the grid with coordinated generation — home hardware provides backup power for your own circuits, not grid independence in that broader sense. Current home battery products span a wide capacity range — Enphase\'s IQ Battery 5P is rated at 5.0 kWh usable, and Tesla\'s Powerwall 3 at 13.5 kWh usable (scalable higher with expansion packs) — so match your essential-circuit load against a specific product\'s datasheet, not a generic assumption, before sizing a system.',
        bullets: [
          'Consumer "microgrid" = solar + battery + automatic transfer switching for backup power',
          'This is essential-circuit backup, not true utility-scale grid islanding',
          'Battery capacity varies widely by product — e.g., Enphase IQ Battery 5P: 5.0 kWh usable; Tesla Powerwall 3: 13.5 kWh usable, scalable higher — check a specific product\'s datasheet against your essential-circuit load',
          'Home Assistant can automate which circuits get priority when running on battery',
          'Scope the project to your actual outage-backup needs, not a whole-home-independence assumption',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What "Home Microgrid" Actually Means', anchor: 'what-it-means' },
      { label: 'Sizing a Backup System', anchor: 'sizing' },
      { label: 'Automating Circuit Priority', anchor: 'automating-priority' },
      { label: 'What This Doesn\'t Do', anchor: 'limits' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A consumer "home microgrid" is solar plus battery plus automatic transfer switching for essential-circuit backup during a grid outage — not utility-scale grid islanding.' },
      { type: 'plain-terms', content: 'People sometimes use "microgrid" to describe a home with solar panels and a battery that can keep the lights and fridge on when the power goes out. That\'s a real and useful setup, but it\'s different from what a "microgrid" means to a utility company — a coordinated power system serving multiple buildings independently of the main grid. This article covers the home version: backup power for your own circuits, sized and automated with Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          '"Home microgrid" here means solar + battery + automatic transfer switching for outage backup — not utility-scale grid islanding',
          'Battery capacity varies significantly by product — e.g., Enphase IQ Battery 5P (5.0 kWh usable) vs. Tesla Powerwall 3 (13.5 kWh usable, expandable) — check a specific datasheet, not a generic figure, against your essential-circuit load',
          'Essential circuits (refrigerator, some lighting, networking/router) are the realistic backup scope for most home battery sizes',
          'Home Assistant can automate load-shedding priority when running on battery, extending backup duration',
          'This is the most speculative of the Energy & Solar articles — scope claims conservatively and avoid implying whole-home independence is typical',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'What "Home Microgrid" Actually Means',
        content:
          '**In the consumer/smart-home context, "microgrid" describes solar generation plus battery storage plus a transfer mechanism that isolates chosen circuits from the grid during an outage — not the utility-industry meaning of a coordinated, multi-building islanded power system.**',
        items: [
          'A true utility microgrid coordinates generation and demand across multiple buildings or a neighborhood, with dedicated control systems — this is commercial/utility engineering, not something home hardware does.',
          'The home version is narrower: your solar + battery + inverter automatically disconnects from the grid during an outage and powers the circuits you\'ve wired to the backup system.',
          'Use "microgrid" loosely here to mean "my home can run on its own power for a while," not a claim of grid-independent, multi-building coordination.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'Sizing a Backup System',
        content:
          '**Battery capacity, not solar panel count, is usually the limiting factor for how long and how much you can back up during an outage — size around your actual essential-load wattage, not your whole home\'s peak draw.**',
        items: [
          'List your essential circuits (refrigerator, some lighting, networking equipment, and medical equipment if applicable) and their approximate combined wattage — this is your backup target, not your whole home\'s panel capacity.',
          'Battery capacity spans a wide range by product: Enphase\'s IQ Battery 5P is rated at 5.0 kWh usable (per Enphase\'s own datasheet), while Tesla\'s Powerwall 3 is rated at 13.5 kWh usable and scales to 94.5 kWh with additional expansion packs (per Tesla\'s Energy Library datasheet) — this illustrates the range, not a recommendation of one over the other. Pricing is deliberately not quoted here: the balcony-solar cluster\'s own battery buyer\'s guide omits prices for the same reason (tariff-sensitive, changes significantly) and directs readers to check current manufacturer or retailer pages at time of purchase — the same standard applies here.',
          'An inverter with automatic transfer-switch capability is required to isolate backup circuits from the grid safely during an outage — this is different from a grid-tied-only inverter, which shuts off during an outage for safety and provides no backup power at all.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: 'Automating Circuit Priority',
        content:
          '**Home Assistant can shed lower-priority loads automatically when running on battery, stretching a limited battery\'s runtime during an outage — this uses the same automation patterns as the load-shifting examples in the local energy management overview.**',
        items: [
          'An automation triggered by "on battery power" state (available once your inverter/battery integration exposes that status — see the Matter inverter integration guide) can turn off non-essential smart plugs automatically.',
          'Prioritize by importance: keep the refrigerator and networking equipment on battery power, and shed anything discretionary (non-essential lighting, entertainment devices) first.',
          'This extends backup runtime without requiring a larger, more expensive battery — automation substitutes for capacity to a meaningful degree.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'What This Doesn\'t Do',
        content:
          '**A home battery backup setup does not make your home independent of the grid long-term, does not coordinate with neighbors\' systems, and typically cannot power whole-home heating/cooling loads for extended outages.**',
        items: [
          "Most home battery systems are sized for hours to roughly a day of essential-circuit backup, not indefinite off-grid operation — actual runtime depends entirely on your specific battery's capacity (which spans a wide range across products, from roughly 5 kWh usable in a single unit up to 13.5 kWh and beyond with expansion packs, per manufacturer datasheets) against your actual essential-circuit wattage, not a generic multi-day whole-home assumption.",
          'This setup does not connect to or coordinate with a neighbor\'s system — each home\'s backup is independent, unlike a true utility microgrid.',
          'High-draw loads like central air conditioning or electric heating are usually excluded from the backed-up circuit list unless the battery and inverter are specifically sized for them — check your installer\'s sizing recommendation rather than assuming.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is a home microgrid the same as being off-grid?', a: 'No. A home battery backup setup still connects to the grid normally and only isolates during an outage or on-demand — it\'s backup power, not permanent off-grid operation.' },
          { q: 'How long can a home battery back up my house?', a: 'This depends entirely on battery capacity versus your essential-circuit load, and capacity varies widely by product — Enphase\'s IQ Battery 5P is rated at 5.0 kWh usable, Tesla\'s Powerwall 3 at 13.5 kWh usable (scalable higher with expansion packs), per each manufacturer\'s own datasheet. Consult an installer\'s sizing calculation for your specific circuits rather than assuming a fixed duration.' },
          { q: 'Do I need solar panels for battery backup to work?', a: 'No — a battery can be charged from the grid and used purely for outage backup without solar, though pairing with solar lets the battery recharge during a multi-day outage if there\'s daylight.' },
          { q: 'Can Home Assistant control which circuits stay on during an outage?', a: 'Home Assistant can automate which smart-plug-controlled loads shed first once your inverter/battery integration reports "on battery" status, but which circuits are physically wired to the backup panel is an electrical decision made during installation, not something software changes after the fact.' },
          { q: 'Is this legal to install myself?', a: 'Backup power systems that tie into your home\'s electrical panel typically require a licensed electrician and, in many regions, utility notification or permitting — this is not a DIY smart-plug-level project.' },
          { q: 'Does a home microgrid coordinate with my neighbors?', a: 'No — this is one of the key differences from a true utility microgrid. A home battery backup setup is entirely independent of any neighboring system.' },
          { q: 'What\'s the difference between a grid-tied and a hybrid inverter for this?', a: 'A grid-tied-only inverter shuts off during a grid outage for safety and provides no backup power. A hybrid inverter with battery and transfer-switch support can isolate backup circuits and continue powering them — you need the latter for outage backup.' },
          { q: 'Should I size for whole-home backup or just essentials?', a: 'For most home battery budgets, essential-circuit backup (refrigerator, some lighting, networking) is the realistic and cost-effective target — whole-home backup requires substantially more battery capacity and a larger inverter, which is a different sizing conversation with an installer.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the overview this article extends',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — exposing battery/inverter state to Home Assistant',
          '[Best Balcony Solar Home Battery (US)](/balcony-solar/best-balcony-solar-home-battery-us-2026) — cross-cluster: current battery hardware and pricing',
          '[Do You Need a Battery for Balcony Solar?](/balcony-solar/do-you-need-a-battery-balcony-solar) — cross-cluster: battery sizing fundamentals',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Turning Your Home Into an Energy Microgrid (2027)',
      description: 'Home energy microgrid setup in 2027: solar, battery, and local automation for outage backup — scoped to what home hardware actually supports.',
      url: 'https://www.promptquorum.com/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home battery backup' }, { '@type': 'Thing', name: 'Solar microgrid' }, { '@type': 'Thing', name: 'Outage automation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is a home microgrid the same as being off-grid?', acceptedAnswer: { '@type': 'Answer', text: 'No. A home battery backup setup still connects to the grid normally and only isolates during an outage — it\'s backup power, not permanent off-grid operation.' } },
        { '@type': 'Question', name: 'Do I need solar panels for battery backup to work?', acceptedAnswer: { '@type': 'Answer', text: 'No — a battery can be charged from the grid and used purely for outage backup without solar.' } },
        { '@type': 'Question', name: 'Is this legal to install myself?', acceptedAnswer: { '@type': 'Answer', text: 'Backup power systems that tie into your home\'s electrical panel typically require a licensed electrician and utility notification or permitting in many regions.' } },
        { '@type': 'Question', name: 'Does a home microgrid coordinate with my neighbors?', acceptedAnswer: { '@type': 'Answer', text: 'No — a home battery backup setup is entirely independent of any neighboring system, unlike a true utility microgrid.' } },
        { '@type': 'Question', name: 'Should I size for whole-home backup or just essentials?', acceptedAnswer: { '@type': 'Answer', text: 'For most home battery budgets, essential-circuit backup is the realistic and cost-effective target; whole-home backup requires substantially more capacity.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-de.webp',
    title: 'Ihr Zuhause zum Energie-Microgrid machen (2027)',
    seoTitle: 'Heimisches Energie-Microgrid einrichten (2027)',
    intro:
      'Ein häusliches Energie-„Microgrid" bedeutet im Verbrauchersinn Solarerzeugung plus Batteriespeicher plus lokale Automatisierung, die wesentliche Stromkreise während eines Netzausfalls am Laufen hält — kein echtes, inselbetriebenes Microgrid im Versorgungsmaßstab, was ein anderes, kommerzielles Ingenieursproblem ist. Dieser Leitfaden umreißt, was mit Heimbatterie + Wechselrichter + Home-Assistant-Automatisierung realistisch erreichbar ist, und wohin Sie für die Hardware-Details gehen sollten.',
    metaDescription:
      'Häusliches Energie-Microgrid-Setup 2027: Solar, Batterie und lokale Automatisierung für Notstromversorgung — begrenzt auf das, was Heimhardware tatsächlich leistet.',
    twitterDescription:
      'Was ein „häusliches Microgrid" wirklich bedeutet: Solar + Batterie + lokale Automatisierung für Notstromversorgung, keine Insel-Bildung im Versorgungsmaßstab.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer, die Batteriesicherung für Ausfallunabhängigkeit erwägen',
    primaryTerm: 'haus energie microgrid',
    targetKeywords: [
      'heimisches energie microgrid setup',
      'ganzes haus batteriesicherung automatisierung',
      'hausbatterie notstrom',
      'solar batterie notstrom automatisierung',
      'inselbetrieb heimstromsystem',
    ],
    leadAnswerBlock:
      '**Ein häusliches „Microgrid" im Verbrauchersinn ist Solarerzeugung plus Batteriespeicher plus ein automatisches Umschaltsystem, das ausgewählte Stromkreise während eines Netzausfalls am Laufen hält — das ist nicht dasselbe wie ein Microgrid im Versorgungsmaßstab, das Insel-Bildung über mehrere Gebäude und koordinierte Erzeugung umfasst, was Heimhardware nicht leistet.** Begrenzen Sie Ihre Erwartungen auf die Sicherung wesentlicher Stromkreise, nicht auf Unabhängigkeit für das ganze Haus, es sei denn, Ihre Batteriekapazität und Ihr Wechselrichter sind speziell dafür dimensioniert.',
    quickAnswerTop: {
      de: {
        question: 'Kann ich mein Zuhause in ein Energie-Microgrid verwandeln?',
        answer:
          'Im Sinne von Verbraucherhardware, ja — Solarpanels, eine Hausbatterie und ein kompatibler Wechselrichter mit automatischer Umschaltung können ausgewählte Stromkreise (Kühlschrank, etwas Beleuchtung, Internet) während eines Netzausfalls am Laufen halten. Das unterscheidet sich grundlegend von einem echten Microgrid im Versorgungsmaßstab, das die Insel-Bildung mehrerer Gebäude vom Netz mit koordinierter Erzeugung umfasst — Heimhardware liefert Notstrom für Ihre eigenen Stromkreise, keine Netzunabhängigkeit in diesem breiteren Sinne. Aktuelle Hausbatterieprodukte decken eine breite Kapazitätsspanne ab — Enphases IQ Battery 5P ist mit 5,0 kWh nutzbar spezifiziert, und Teslas Powerwall 3 mit 13,5 kWh nutzbar (mit Erweiterungspaketen höher skalierbar) —, gleichen Sie also Ihre wesentliche Stromkreislast mit dem Datenblatt eines konkreten Produkts ab, nicht mit einer allgemeinen Annahme, bevor Sie ein System dimensionieren.',
        bullets: [
          'Verbraucher-„Microgrid" = Solar + Batterie + automatische Umschaltung für Notstrom',
          'Dies ist Sicherung wesentlicher Stromkreise, keine echte Insel-Bildung im Versorgungsmaßstab',
          'Batteriekapazität variiert stark je nach Produkt — z. B. Enphase IQ Battery 5P: 5,0 kWh nutzbar; Tesla Powerwall 3: 13,5 kWh nutzbar, höher skalierbar — prüfen Sie das Datenblatt eines konkreten Produkts gegen Ihre wesentliche Stromkreislast',
          'Home Assistant kann automatisieren, welche Stromkreise beim Batteriebetrieb priorisiert werden',
          'Begrenzen Sie das Projekt auf Ihren tatsächlichen Notstrombedarf, nicht auf eine Annahme der Unabhängigkeit des ganzen Hauses',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was „häusliches Microgrid" wirklich bedeutet', anchor: 'what-it-means' },
      { label: 'Ein Sicherungssystem dimensionieren', anchor: 'sizing' },
      { label: 'Stromkreispriorität automatisieren', anchor: 'automating-priority' },
      { label: 'Was dies nicht leistet', anchor: 'limits' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein häusliches „Microgrid" im Verbrauchersinn ist Solar plus Batterie plus automatische Umschaltung zur Sicherung wesentlicher Stromkreise während eines Netzausfalls — keine Insel-Bildung im Versorgungsmaßstab.' },
      { type: 'plain-terms', content: 'Manche Leute nutzen „Microgrid", um ein Zuhause mit Solarpanels und einer Batterie zu beschreiben, das Licht und Kühlschrank am Laufen halten kann, wenn der Strom ausfällt. Das ist ein reales und nützliches Setup, unterscheidet sich aber von dem, was „Microgrid" für ein Versorgungsunternehmen bedeutet — ein koordiniertes Stromsystem, das mehrere Gebäude unabhängig vom Hauptnetz versorgt. Dieser Artikel behandelt die Heimversion: Notstrom für Ihre eigenen Stromkreise, dimensioniert und automatisiert mit Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          '„Häusliches Microgrid" bedeutet hier Solar + Batterie + automatische Umschaltung für Notstrom — keine Insel-Bildung im Versorgungsmaßstab',
          'Batteriekapazität variiert erheblich je nach Produkt — z. B. Enphase IQ Battery 5P (5,0 kWh nutzbar) vs. Tesla Powerwall 3 (13,5 kWh nutzbar, erweiterbar) — prüfen Sie ein konkretes Datenblatt, keine allgemeine Zahl, gegen Ihre wesentliche Stromkreislast',
          'Wesentliche Stromkreise (Kühlschrank, etwas Beleuchtung, Netzwerk/Router) sind der realistische Sicherungsumfang für die meisten Hausbatteriegrößen',
          'Home Assistant kann die Lastabwurf-Priorität im Batteriebetrieb automatisieren und die Sicherungsdauer verlängern',
          'Dies ist der spekulativste der Energie-&-Solar-Artikel — begrenzen Sie Behauptungen konservativ und vermeiden Sie den Eindruck, Unabhängigkeit für das ganze Haus sei typisch',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Was „häusliches Microgrid" wirklich bedeutet',
        content:
          '**Im Verbraucher-/Smart-Home-Kontext beschreibt „Microgrid" Solarerzeugung plus Batteriespeicher plus einen Umschaltmechanismus, der ausgewählte Stromkreise während eines Ausfalls vom Netz isoliert — nicht die versorgungswirtschaftliche Bedeutung eines koordinierten, gebäudeübergreifenden Insel-Stromsystems.**',
        items: [
          'Ein echtes Versorgungs-Microgrid koordiniert Erzeugung und Nachfrage über mehrere Gebäude oder eine Nachbarschaft hinweg, mit dedizierten Steuerungssystemen — das ist kommerzielles/versorgungswirtschaftliches Ingenieurwesen, nichts, was Heimhardware leistet.',
          'Die Heimversion ist enger gefasst: Ihr Solar + Batterie + Wechselrichter trennt sich während eines Ausfalls automatisch vom Netz und versorgt die Stromkreise, die Sie an das Sicherungssystem angeschlossen haben.',
          'Verwenden Sie „Microgrid" hier locker im Sinne von „mein Zuhause kann eine Weile mit eigenem Strom laufen", nicht als Behauptung netzunabhängiger, gebäudeübergreifender Koordination.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'Ein Sicherungssystem dimensionieren',
        content:
          '**Batteriekapazität, nicht die Anzahl der Solarpanels, ist meist der begrenzende Faktor dafür, wie lange und wie viel Sie während eines Ausfalls sichern können — dimensionieren Sie nach Ihrer tatsächlichen wesentlichen Lastleistung, nicht nach dem Spitzenbezug Ihres gesamten Hauses.**',
        items: [
          'Listen Sie Ihre wesentlichen Stromkreise auf (Kühlschrank, etwas Beleuchtung, Netzwerkausrüstung und gegebenenfalls medizinische Geräte) sowie deren ungefähre kombinierte Wattzahl — das ist Ihr Sicherungsziel, nicht die Kapazität Ihres gesamten Hausanschlusses.',
          'Die Batteriekapazität deckt eine breite Spanne je nach Produkt ab: Enphases IQ Battery 5P ist mit 5,0 kWh nutzbar spezifiziert (laut Enphases eigenem Datenblatt), während Teslas Powerwall 3 mit 13,5 kWh nutzbar spezifiziert ist und mit zusätzlichen Erweiterungspaketen auf 94,5 kWh skaliert (laut Teslas Energy-Library-Datenblatt) — dies veranschaulicht die Spanne, keine Empfehlung des einen über das andere. Preise werden hier bewusst nicht genannt: Der eigene Batterie-Kaufratgeber des Balkonsolar-Clusters lässt Preise aus demselben Grund weg (tarifempfindlich, ändert sich erheblich) und verweist Leser darauf, aktuelle Hersteller- oder Händlerseiten zum Kaufzeitpunkt zu prüfen — derselbe Maßstab gilt hier.',
          'Ein Wechselrichter mit automatischer Umschaltfähigkeit ist erforderlich, um Sicherungsstromkreise während eines Ausfalls sicher vom Netz zu isolieren — dies unterscheidet sich von einem reinen netzgekoppelten Wechselrichter, der sich während eines Ausfalls aus Sicherheitsgründen abschaltet und überhaupt keinen Notstrom liefert.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: 'Stromkreispriorität automatisieren',
        content:
          '**Home Assistant kann Lasten niedrigerer Priorität automatisch abwerfen, wenn im Batteriebetrieb gelaufen wird, und so die Laufzeit einer begrenzten Batterie während eines Ausfalls strecken — dies nutzt dieselben Automatisierungsmuster wie die Lastverschiebungsbeispiele im Überblick zum lokalen Energiemanagement.**',
        items: [
          'Eine Automatisierung, ausgelöst durch den Status „im Batteriebetrieb" (verfügbar, sobald Ihre Wechselrichter-/Batterieintegration diesen Status offenlegt — siehe den Matter-Wechselrichter-Integrationsleitfaden), kann nicht-wesentliche Smart Plugs automatisch abschalten.',
          'Priorisieren Sie nach Wichtigkeit: Halten Sie Kühlschrank und Netzwerkausrüstung am Batteriestrom, und werfen Sie alles Diskretionäre (nicht-wesentliche Beleuchtung, Unterhaltungsgeräte) zuerst ab.',
          'Dies verlängert die Sicherungslaufzeit, ohne eine größere, teurere Batterie zu erfordern — Automatisierung ersetzt Kapazität in erheblichem Maße.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Was dies nicht leistet',
        content:
          '**Ein häusliches Batteriesicherungs-Setup macht Ihr Zuhause nicht langfristig unabhängig vom Netz, koordiniert sich nicht mit den Systemen der Nachbarn und kann typischerweise keine Heiz-/Kühllasten für das ganze Haus über längere Ausfälle hinweg versorgen.**',
        items: [
          'Die meisten Hausbatteriesysteme sind für Stunden bis etwa einen Tag Sicherung wesentlicher Stromkreise dimensioniert, nicht für unbegrenzten Inselbetrieb — die tatsächliche Laufzeit hängt vollständig von der Kapazität Ihrer konkreten Batterie ab (die je nach Produkt eine breite Spanne abdeckt, von etwa 5 kWh nutzbar in einer einzelnen Einheit bis zu 13,5 kWh und darüber hinaus mit Erweiterungspaketen, laut Herstellerdatenblättern) im Verhältnis zu Ihrer tatsächlichen wesentlichen Stromkreisleistung, nicht einer allgemeinen Annahme mehrtägiger Versorgung des ganzen Hauses.',
          'Dieses Setup verbindet sich nicht mit dem System eines Nachbarn und koordiniert sich nicht damit — die Sicherung jedes Hauses ist unabhängig, anders als bei einem echten Versorgungs-Microgrid.',
          'Lasten mit hohem Verbrauch wie zentrale Klimaanlagen oder Elektroheizungen sind normalerweise von der Liste der gesicherten Stromkreise ausgeschlossen, sofern Batterie und Wechselrichter nicht speziell dafür dimensioniert sind — prüfen Sie die Dimensionierungsempfehlung Ihres Installateurs, statt es anzunehmen.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist ein häusliches Microgrid dasselbe wie netzunabhängig zu sein?', a: 'Nein. Ein häusliches Batteriesicherungs-Setup bleibt normal mit dem Netz verbunden und isoliert sich nur während eines Ausfalls oder bei Bedarf — es ist Notstrom, kein dauerhafter Inselbetrieb.' },
          { q: 'Wie lange kann eine Hausbatterie mein Haus sichern?', a: 'Das hängt vollständig von der Batteriekapazität im Verhältnis zu Ihrer wesentlichen Stromkreislast ab, und die Kapazität variiert je nach Produkt stark — Enphases IQ Battery 5P ist mit 5,0 kWh nutzbar spezifiziert, Teslas Powerwall 3 mit 13,5 kWh nutzbar (mit Erweiterungspaketen höher skalierbar), laut dem jeweiligen Herstellerdatenblatt. Konsultieren Sie die Dimensionierungsberechnung eines Installateurs für Ihre konkreten Stromkreise, statt eine feste Dauer anzunehmen.' },
          { q: 'Brauche ich Solarpanels, damit die Batteriesicherung funktioniert?', a: 'Nein — eine Batterie kann vom Netz geladen und rein zur Ausfallsicherung ohne Solar genutzt werden, obwohl die Kombination mit Solar der Batterie erlaubt, sich während eines mehrtägigen Ausfalls bei Tageslicht wieder aufzuladen.' },
          { q: 'Kann Home Assistant steuern, welche Stromkreise während eines Ausfalls eingeschaltet bleiben?', a: 'Home Assistant kann automatisieren, welche über Smart Plugs gesteuerten Lasten zuerst abgeworfen werden, sobald Ihre Wechselrichter-/Batterieintegration den Status „im Batteriebetrieb" meldet, aber welche Stromkreise physisch an das Sicherungspanel angeschlossen sind, ist eine elektrische Entscheidung, die bei der Installation getroffen wird, nicht etwas, das Software im Nachhinein ändert.' },
          { q: 'Ist es legal, das selbst zu installieren?', a: 'Notstromsysteme, die an den Sicherungskasten Ihres Hauses angeschlossen werden, erfordern typischerweise eine Elektrofachkraft und in vielen Regionen eine Benachrichtigung des Versorgers oder eine Genehmigung — das ist kein DIY-Projekt auf Smart-Plug-Niveau.' },
          { q: 'Koordiniert sich ein häusliches Microgrid mit meinen Nachbarn?', a: 'Nein — das ist einer der Hauptunterschiede zu einem echten Versorgungs-Microgrid. Ein häusliches Batteriesicherungs-Setup ist vollständig unabhängig von jedem Nachbarsystem.' },
          { q: 'Was ist der Unterschied zwischen einem netzgekoppelten und einem Hybrid-Wechselrichter dafür?', a: 'Ein rein netzgekoppelter Wechselrichter schaltet sich während eines Netzausfalls aus Sicherheitsgründen ab und liefert keinen Notstrom. Ein Hybrid-Wechselrichter mit Batterie- und Umschaltunterstützung kann Sicherungsstromkreise isolieren und weiter versorgen — Sie brauchen Letzteren für Notstromversorgung.' },
          { q: 'Sollte ich für die Sicherung des ganzen Hauses oder nur für Wesentliches dimensionieren?', a: 'Für die meisten Hausbatteriebudgets ist die Sicherung wesentlicher Stromkreise (Kühlschrank, etwas Beleuchtung, Netzwerk) das realistische und kosteneffektive Ziel — die Sicherung des ganzen Hauses erfordert wesentlich mehr Batteriekapazität und einen größeren Wechselrichter, was ein anderes Dimensionierungsgespräch mit einem Installateur ist.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Themen',
        items: [
          '[Lokales Energiemanagement im Smart Home](/de/smart-home/local-smart-home-energy-management-2027) — der Überblick, den dieser Artikel erweitert',
          '[Matter-Integration für Solarwechselrichter und Wärmepumpen](/de/smart-home/matter-solar-inverter-heat-pump-integration) — Batterie-/Wechselrichterstatus an Home Assistant offenlegen',
          '[Beste Balkonsolar-Hausbatterie (USA)](/de/balcony-solar/best-balcony-solar-home-battery-us-2026) — clusterübergreifend: aktuelle Batteriehardware und Preise',
          '[Brauchen Sie eine Batterie für Balkonsolar?](/de/balcony-solar/do-you-need-a-battery-balcony-solar) — clusterübergreifend: Grundlagen der Batteriedimensionierung',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ihr Zuhause zum Energie-Microgrid machen (2027)',
      description: 'Häusliches Energie-Microgrid-Setup 2027: Solar, Batterie und lokale Automatisierung für Notstromversorgung — begrenzt auf das, was Heimhardware tatsächlich leistet.',
      url: 'https://www.promptquorum.com/de/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Hausbatteriesicherung' }, { '@type': 'Thing', name: 'Solar-Microgrid' }, { '@type': 'Thing', name: 'Ausfall-Automatisierung' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist ein häusliches Microgrid dasselbe wie netzunabhängig zu sein?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Ein häusliches Batteriesicherungs-Setup bleibt normal mit dem Netz verbunden und isoliert sich nur während eines Ausfalls — es ist Notstrom, kein dauerhafter Inselbetrieb.' } },
        { '@type': 'Question', name: 'Brauche ich Solarpanels, damit die Batteriesicherung funktioniert?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — eine Batterie kann vom Netz geladen und rein zur Ausfallsicherung ohne Solar genutzt werden.' } },
        { '@type': 'Question', name: 'Ist es legal, das selbst zu installieren?', acceptedAnswer: { '@type': 'Answer', text: 'Notstromsysteme, die an den Sicherungskasten Ihres Hauses angeschlossen werden, erfordern typischerweise eine Elektrofachkraft und in vielen Regionen eine Genehmigung.' } },
        { '@type': 'Question', name: 'Koordiniert sich ein häusliches Microgrid mit meinen Nachbarn?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — ein häusliches Batteriesicherungs-Setup ist vollständig unabhängig von jedem Nachbarsystem, anders als ein echtes Versorgungs-Microgrid.' } },
        { '@type': 'Question', name: 'Sollte ich für die Sicherung des ganzen Hauses oder nur für Wesentliches dimensionieren?', acceptedAnswer: { '@type': 'Answer', text: 'Für die meisten Hausbatteriebudgets ist die Sicherung wesentlicher Stromkreise das realistische und kosteneffektive Ziel; die Sicherung des ganzen Hauses erfordert wesentlich mehr Kapazität.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-fr.webp',
    title: 'Transformer votre maison en microgrid énergétique (2027)',
    seoTitle: 'Configuration d\'un microgrid énergétique domestique (2027)',
    intro:
      'Un « microgrid » énergétique domestique, au sens grand public, signifie production solaire plus stockage par batterie plus automatisation locale capable de maintenir en fonctionnement les circuits essentiels pendant une coupure réseau — pas un véritable microgrid en îlotage à l\'échelle d\'un service public, qui est un problème d\'ingénierie commerciale différent. Ce guide délimite ce qui est réalistement atteignable avec batterie domestique + onduleur + automatisation Home Assistant, et où aller pour les détails matériels.',
    metaDescription:
      'Configuration d\'un microgrid énergétique domestique en 2027 : solaire, batterie et automatisation locale pour la sauvegarde en cas de coupure — délimité à ce que le matériel domestique supporte réellement.',
    twitterDescription:
      'Ce que signifie réellement un « microgrid domestique » : solaire + batterie + automatisation locale pour la sauvegarde en cas de coupure, pas un îlotage à l\'échelle d\'un service public.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de maison connectée envisageant une sauvegarde par batterie pour l\'indépendance en cas de coupure',
    primaryTerm: 'microgrid energetique domestique',
    targetKeywords: [
      'configuration microgrid energetique domestique',
      'automatisation sauvegarde batterie maison entiere',
      'sauvegarde batterie domestique coupure',
      'automatisation sauvegarde solaire batterie',
      'systeme electrique domestique en ilotage',
    ],
    leadAnswerBlock:
      '**Un « microgrid domestique » grand public est de la production solaire plus du stockage par batterie plus un système de transfert automatique qui maintient en fonctionnement les circuits choisis pendant une coupure réseau — ce n\'est pas la même chose qu\'un microgrid à l\'échelle d\'un service public, qui implique un îlotage multi-bâtiments et une coordination de production que le matériel domestique ne fait pas.** Limitez vos attentes à la sauvegarde des circuits essentiels, pas à l\'indépendance de toute la maison, sauf si votre capacité de batterie et votre onduleur sont spécifiquement dimensionnés pour cela.',
    quickAnswerTop: {
      fr: {
        question: 'Puis-je transformer ma maison en microgrid énergétique ?',
        answer:
          'Au sens du matériel grand public, oui — des panneaux solaires, une batterie domestique, et un onduleur compatible avec commutation de transfert automatique peuvent maintenir en fonctionnement des circuits choisis (réfrigérateur, un peu d\'éclairage, internet) pendant une coupure réseau. Ceci diffère fondamentalement d\'un véritable microgrid à l\'échelle d\'un service public, qui implique l\'îlotage de plusieurs bâtiments du réseau avec une production coordonnée — le matériel domestique fournit une alimentation de secours pour vos propres circuits, pas une indépendance réseau dans ce sens plus large. Les produits de batterie domestique actuels couvrent une large gamme de capacités — l\'IQ Battery 5P d\'Enphase est évaluée à 5,0 kWh utilisables, et la Powerwall 3 de Tesla à 13,5 kWh utilisables (extensible avec des packs d\'extension) — faites donc correspondre votre charge de circuits essentiels à la fiche technique d\'un produit précis, pas à une hypothèse générique, avant de dimensionner un système.',
        bullets: [
          '« Microgrid » grand public = solaire + batterie + commutation de transfert automatique pour alimentation de secours',
          'C\'est de la sauvegarde de circuits essentiels, pas un véritable îlotage réseau à l\'échelle d\'un service public',
          'La capacité de batterie varie fortement selon le produit — par ex. Enphase IQ Battery 5P : 5,0 kWh utilisables ; Tesla Powerwall 3 : 13,5 kWh utilisables, extensible — vérifiez la fiche technique d\'un produit précis par rapport à votre charge de circuits essentiels',
          'Home Assistant peut automatiser quels circuits sont prioritaires en fonctionnement sur batterie',
          'Délimitez le projet à vos besoins réels de sauvegarde en cas de coupure, pas à une hypothèse d\'indépendance de toute la maison',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Ce que « microgrid domestique » signifie réellement', anchor: 'what-it-means' },
      { label: 'Dimensionner un système de sauvegarde', anchor: 'sizing' },
      { label: 'Automatiser la priorité des circuits', anchor: 'automating-priority' },
      { label: 'Ce que cela ne fait pas', anchor: 'limits' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un « microgrid domestique » grand public est du solaire plus une batterie plus une commutation de transfert automatique pour la sauvegarde des circuits essentiels pendant une coupure réseau — pas un îlotage réseau à l\'échelle d\'un service public.' },
      { type: 'plain-terms', content: 'Certaines personnes utilisent « microgrid » pour décrire une maison avec des panneaux solaires et une batterie capable de garder les lumières et le réfrigérateur allumés en cas de coupure de courant. C\'est une installation réelle et utile, mais différente de ce que « microgrid » signifie pour un service public — un système électrique coordonné desservant plusieurs bâtiments indépendamment du réseau principal. Cet article couvre la version domestique : alimentation de secours pour vos propres circuits, dimensionnée et automatisée avec Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          '« Microgrid domestique » signifie ici solaire + batterie + commutation de transfert automatique pour la sauvegarde en cas de coupure — pas un îlotage réseau à l\'échelle d\'un service public',
          'La capacité de batterie varie considérablement selon le produit — par ex. Enphase IQ Battery 5P (5,0 kWh utilisables) vs Tesla Powerwall 3 (13,5 kWh utilisables, extensible) — vérifiez une fiche technique précise, pas un chiffre générique, par rapport à votre charge de circuits essentiels',
          'Les circuits essentiels (réfrigérateur, un peu d\'éclairage, réseau/routeur) constituent la portée de sauvegarde réaliste pour la plupart des tailles de batterie domestique',
          'Home Assistant peut automatiser la priorité de délestage en fonctionnement sur batterie, prolongeant la durée de sauvegarde',
          'C\'est le plus spéculatif des articles Énergie & Solaire — délimitez les affirmations avec prudence et évitez de laisser entendre que l\'indépendance de toute la maison est typique',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Ce que « microgrid domestique » signifie réellement',
        content:
          '**Dans le contexte grand public/maison connectée, « microgrid » décrit de la production solaire plus du stockage par batterie plus un mécanisme de transfert qui isole les circuits choisis du réseau pendant une coupure — pas le sens du secteur des services publics d\'un système électrique en îlotage, coordonné, multi-bâtiments.**',
        items: [
          'Un véritable microgrid de service public coordonne production et demande sur plusieurs bâtiments ou un quartier, avec des systèmes de contrôle dédiés — c\'est de l\'ingénierie commerciale/de service public, pas quelque chose que fait le matériel domestique.',
          'La version domestique est plus étroite : votre solaire + batterie + onduleur se déconnecte automatiquement du réseau pendant une coupure et alimente les circuits que vous avez câblés au système de secours.',
          'Utilisez « microgrid » ici de manière informelle pour signifier « ma maison peut fonctionner sur sa propre énergie pendant un moment », pas une affirmation de coordination multi-bâtiments indépendante du réseau.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'Dimensionner un système de sauvegarde',
        content:
          '**La capacité de la batterie, pas le nombre de panneaux solaires, est généralement le facteur limitant pour la durée et l\'ampleur de la sauvegarde possible pendant une coupure — dimensionnez selon la puissance réelle de votre charge essentielle, pas la consommation de pointe de toute votre maison.**',
        items: [
          'Listez vos circuits essentiels (réfrigérateur, un peu d\'éclairage, équipement réseau, et équipement médical si applicable) et leur puissance combinée approximative — c\'est votre cible de sauvegarde, pas la capacité du tableau électrique de toute votre maison.',
          'La capacité de batterie couvre une large gamme selon le produit : l\'IQ Battery 5P d\'Enphase est évaluée à 5,0 kWh utilisables (selon la fiche technique propre d\'Enphase), tandis que la Powerwall 3 de Tesla est évaluée à 13,5 kWh utilisables et s\'étend jusqu\'à 94,5 kWh avec des packs d\'extension supplémentaires (selon la fiche technique de la Tesla Energy Library) — ceci illustre la gamme, pas une recommandation de l\'une par rapport à l\'autre. Les prix ne sont délibérément pas cités ici : le propre guide d\'achat de batteries du cluster solaire de balcon omet les prix pour la même raison (sensibles aux tarifs douaniers, changent significativement) et oriente les lecteurs à vérifier les pages actuelles du fabricant ou du revendeur au moment de l\'achat — la même norme s\'applique ici.',
          'Un onduleur avec capacité de commutation de transfert automatique est requis pour isoler en toute sécurité les circuits de sauvegarde du réseau pendant une coupure — cela diffère d\'un onduleur uniquement raccordé au réseau, qui s\'arrête pendant une coupure pour des raisons de sécurité et ne fournit aucune alimentation de secours.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: 'Automatiser la priorité des circuits',
        content:
          '**Home Assistant peut délester automatiquement les charges de priorité inférieure en fonctionnement sur batterie, prolongeant l\'autonomie d\'une batterie limitée pendant une coupure — cela utilise les mêmes schémas d\'automatisation que les exemples de décalage de charge dans la synthèse sur la gestion locale de l\'énergie.**',
        items: [
          'Une automatisation déclenchée par l\'état « sur batterie » (disponible une fois que votre intégration onduleur/batterie expose ce statut — voir le guide d\'intégration Matter onduleur) peut éteindre automatiquement les prises connectées non essentielles.',
          'Priorisez par importance : gardez le réfrigérateur et l\'équipement réseau sur batterie, et délestez d\'abord tout ce qui est discrétionnaire (éclairage non essentiel, appareils de divertissement).',
          'Cela prolonge l\'autonomie de sauvegarde sans nécessiter une batterie plus grande et plus chère — l\'automatisation substitue la capacité dans une mesure significative.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Ce que cela ne fait pas',
        content:
          '**Une installation de sauvegarde par batterie domestique ne rend pas votre maison indépendante du réseau à long terme, ne se coordonne pas avec les systèmes des voisins, et ne peut généralement pas alimenter les charges de chauffage/climatisation de toute la maison pour des coupures prolongées.**',
        items: [
          'La plupart des systèmes de batterie domestique sont dimensionnés pour des heures à environ une journée de sauvegarde des circuits essentiels, pas un fonctionnement hors réseau indéfini — l\'autonomie réelle dépend entièrement de la capacité de votre batterie spécifique (qui couvre une large gamme selon les produits, d\'environ 5 kWh utilisables dans une seule unité jusqu\'à 13,5 kWh et au-delà avec des packs d\'extension, selon les fiches techniques des fabricants) par rapport à la puissance réelle de vos circuits essentiels, pas une hypothèse générique de sauvegarde de toute la maison sur plusieurs jours.',
          'Cette installation ne se connecte pas et ne se coordonne pas avec le système d\'un voisin — la sauvegarde de chaque maison est indépendante, contrairement à un véritable microgrid de service public.',
          'Les charges à forte consommation comme la climatisation centrale ou le chauffage électrique sont généralement exclues de la liste des circuits sauvegardés sauf si la batterie et l\'onduleur sont spécifiquement dimensionnés pour elles — vérifiez la recommandation de dimensionnement de votre installateur plutôt que de le supposer.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Un microgrid domestique est-il la même chose qu\'être hors réseau ?', a: 'Non. Une installation de sauvegarde par batterie domestique reste connectée au réseau normalement et s\'isole seulement pendant une coupure ou à la demande — c\'est de l\'alimentation de secours, pas un fonctionnement hors réseau permanent.' },
          { q: 'Combien de temps une batterie domestique peut-elle sauvegarder ma maison ?', a: 'Cela dépend entièrement de la capacité de la batterie par rapport à votre charge de circuits essentiels, et la capacité varie fortement selon le produit — l\'IQ Battery 5P d\'Enphase est évaluée à 5,0 kWh utilisables, la Powerwall 3 de Tesla à 13,5 kWh utilisables (extensible avec des packs d\'extension), selon la fiche technique propre de chaque fabricant. Consultez le calcul de dimensionnement d\'un installateur pour vos circuits spécifiques plutôt que de supposer une durée fixe.' },
          { q: 'Ai-je besoin de panneaux solaires pour que la sauvegarde par batterie fonctionne ?', a: 'Non — une batterie peut être chargée depuis le réseau et utilisée purement pour la sauvegarde en cas de coupure sans solaire, bien que l\'association avec le solaire permette à la batterie de se recharger pendant une coupure de plusieurs jours s\'il y a de la lumière du jour.' },
          { q: 'Home Assistant peut-il contrôler quels circuits restent allumés pendant une coupure ?', a: 'Home Assistant peut automatiser quelles charges contrôlées par prise connectée sont délestées en premier une fois que votre intégration onduleur/batterie signale le statut « sur batterie », mais quels circuits sont physiquement câblés au tableau de sauvegarde est une décision électrique prise lors de l\'installation, pas quelque chose que le logiciel change après coup.' },
          { q: 'Est-ce légal de l\'installer moi-même ?', a: 'Les systèmes d\'alimentation de secours qui se connectent au tableau électrique de votre maison nécessitent généralement un électricien agréé et, dans de nombreuses régions, une notification ou un permis du fournisseur d\'électricité — ce n\'est pas un projet DIY au niveau d\'une prise connectée.' },
          { q: 'Un microgrid domestique se coordonne-t-il avec mes voisins ?', a: 'Non — c\'est l\'une des différences clés par rapport à un véritable microgrid de service public. Une installation de sauvegarde par batterie domestique est entièrement indépendante de tout système voisin.' },
          { q: 'Quelle est la différence entre un onduleur raccordé au réseau et un onduleur hybride pour cela ?', a: 'Un onduleur uniquement raccordé au réseau s\'arrête pendant une coupure réseau pour des raisons de sécurité et ne fournit aucune alimentation de secours. Un onduleur hybride avec support batterie et commutation de transfert peut isoler les circuits de sauvegarde et continuer à les alimenter — vous avez besoin de ce dernier pour la sauvegarde en cas de coupure.' },
          { q: 'Dois-je dimensionner pour une sauvegarde de toute la maison ou juste l\'essentiel ?', a: 'Pour la plupart des budgets de batterie domestique, la sauvegarde des circuits essentiels (réfrigérateur, un peu d\'éclairage, réseau) est la cible réaliste et rentable — la sauvegarde de toute la maison nécessite une capacité de batterie substantiellement plus importante et un onduleur plus grand, ce qui est une conversation de dimensionnement différente avec un installateur.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Gestion locale de l\'énergie dans la maison connectée](/fr/smart-home/local-smart-home-energy-management-2027) — la synthèse que cet article prolonge',
          '[Intégration Matter pour onduleurs solaires et pompes à chaleur](/fr/smart-home/matter-solar-inverter-heat-pump-integration) — exposer l\'état batterie/onduleur à Home Assistant',
          '[Meilleure batterie domestique solaire de balcon (États-Unis)](/fr/balcony-solar/best-balcony-solar-home-battery-us-2026) — inter-cluster : matériel de batterie actuel et prix',
          '[Avez-vous besoin d\'une batterie pour le solaire de balcon ?](/fr/balcony-solar/do-you-need-a-battery-balcony-solar) — inter-cluster : fondamentaux du dimensionnement de batterie',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Transformer votre maison en microgrid énergétique (2027)',
      description: 'Configuration d\'un microgrid énergétique domestique en 2027 : solaire, batterie et automatisation locale pour la sauvegarde en cas de coupure — délimité à ce que le matériel domestique supporte réellement.',
      url: 'https://www.promptquorum.com/fr/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Sauvegarde par batterie domestique' }, { '@type': 'Thing', name: 'Microgrid solaire' }, { '@type': 'Thing', name: 'Automatisation de coupure' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Un microgrid domestique est-il la même chose qu\'être hors réseau ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Une installation de sauvegarde par batterie domestique reste connectée au réseau normalement et s\'isole seulement pendant une coupure — c\'est de l\'alimentation de secours, pas un fonctionnement hors réseau permanent.' } },
        { '@type': 'Question', name: 'Ai-je besoin de panneaux solaires pour que la sauvegarde par batterie fonctionne ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — une batterie peut être chargée depuis le réseau et utilisée purement pour la sauvegarde en cas de coupure sans solaire.' } },
        { '@type': 'Question', name: 'Est-ce légal de l\'installer moi-même ?', acceptedAnswer: { '@type': 'Answer', text: 'Les systèmes d\'alimentation de secours qui se connectent au tableau électrique nécessitent généralement un électricien agréé et une notification ou un permis dans de nombreuses régions.' } },
        { '@type': 'Question', name: 'Un microgrid domestique se coordonne-t-il avec mes voisins ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — une installation de sauvegarde par batterie domestique est entièrement indépendante de tout système voisin, contrairement à un véritable microgrid de service public.' } },
        { '@type': 'Question', name: 'Dois-je dimensionner pour une sauvegarde de toute la maison ou juste l\'essentiel ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour la plupart des budgets, la sauvegarde des circuits essentiels est la cible réaliste et rentable ; la sauvegarde de toute la maison nécessite substantiellement plus de capacité.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-ja.webp',
    title: '家をエネルギーマイクログリッドに変える（2027年）',
    seoTitle: '家庭用エネルギーマイクログリッド構築（2027年）',
    intro:
      '家庭用エネルギー「マイクログリッド」とは、消費者的な意味では、太陽光発電に蓄電池、そして停電時に重要な回路を稼働させ続けるローカル自動化を組み合わせたものを指します — 商業規模の別の工学的課題である、真に系統から切り離された電力会社規模のマイクログリッドとは異なります。本ガイドでは、家庭用バッテリー＋インバーター＋Home Assistant自動化で現実的に達成可能なことの範囲を示し、ハードウェアの詳細についてはどこを参照すべきかを説明します。',
    metaDescription:
      '2027年の家庭用エネルギーマイクログリッド構築：停電時のバックアップのための太陽光、バッテリー、ローカル自動化 — 家庭用ハードウェアが実際にサポートする範囲に限定。',
    twitterDescription:
      '「家庭用マイクログリッド」が実際に意味するもの：停電時バックアップのための太陽光＋バッテリー＋ローカル自動化であり、電力会社規模の系統分離ではない。',
    readTime: '7分で読めます',
    educationalLevel: 'Intermediate',
    audience: '停電時の独立性のためにバッテリーバックアップを検討しているスマートホーム所有者',
    primaryTerm: '家庭 エネルギー マイクログリッド',
    targetKeywords: [
      '家庭用エネルギーマイクログリッド構築',
      '全宅バッテリーバックアップ自動化',
      '家庭用バッテリー停電バックアップ',
      '太陽光バッテリーバックアップ自動化',
      '系統分離 家庭用電力システム',
    ],
    leadAnswerBlock:
      '**消費者向けの「家庭用マイクログリッド」とは、太陽光発電とバッテリー蓄電に加え、停電時に選択した回路を稼働させ続ける自動切替システムを組み合わせたものです — これは、複数の建物にまたがる系統分離と発電の協調を伴う電力会社規模のマイクログリッドとは異なり、家庭用ハードウェアではそれを行いません。** バッテリー容量とインバーターがそのために特別に設計されていない限り、期待は重要回路のバックアップに留め、家全体の独立性を期待しないでください。',
    quickAnswerTop: {
      ja: {
        question: '自宅をエネルギーマイクログリッドに変えることはできますか？',
        answer:
          '消費者向けハードウェアの意味では、はい — 太陽光パネル、家庭用バッテリー、自動切替対応の互換インバーターがあれば、停電時に選んだ回路（冷蔵庫、一部の照明、インターネット）を稼働させ続けられます。これは、複数の建物を系統から切り離し発電を協調させる真の電力会社規模のマイクログリッドとは根本的に異なります — 家庭用ハードウェアは自分の回路のためのバックアップ電力を提供するのであり、その広い意味での系統独立性ではありません。現行の家庭用バッテリー製品は容量の幅が広く — Enphase社のIQ Battery 5Pは実使用容量5.0kWh、Tesla社のPowerwall 3は実使用容量13.5kWh（拡張パックでさらに増設可能）と定格されています — システムの規模を決める前に、一般的な想定ではなく特定製品のデータシートと重要回路の負荷を照らし合わせてください。',
        bullets: [
          '消費者向け「マイクログリッド」＝停電時バックアップ電力のための太陽光＋バッテリー＋自動切替',
          'これは重要回路のバックアップであり、真の電力会社規模の系統分離ではない',
          'バッテリー容量は製品によって大きく異なる — 例：Enphase IQ Battery 5P：実使用容量5.0kWh；Tesla Powerwall 3：実使用容量13.5kWh、さらに増設可能 — 一般論ではなく特定製品のデータシートを重要回路の負荷と照合すること',
          'Home Assistantはバッテリー運転時にどの回路を優先するか自動化できる',
          'プロジェクトの範囲は実際の停電バックアップのニーズに限定し、家全体の独立性という想定にしない',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: '「家庭用マイクログリッド」が実際に意味するもの', anchor: 'what-it-means' },
      { label: 'バックアップシステムの規模決定', anchor: 'sizing' },
      { label: '回路優先順位の自動化', anchor: 'automating-priority' },
      { label: 'これができないこと', anchor: 'limits' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '消費者向けの「家庭用マイクログリッド」とは、停電時に重要回路をバックアップするための太陽光＋バッテリー＋自動切替であり、電力会社規模の系統分離ではありません。' },
      { type: 'plain-terms', content: '「マイクログリッド」という言葉を、停電時に照明と冷蔵庫を稼働させ続けられる太陽光パネルとバッテリーを備えた家を表すために使う人もいます。これは実際に役立つ構成ですが、電力会社にとっての「マイクログリッド」の意味 — 主要な系統から独立して複数の建物に電力を供給する協調型電力システム — とは異なります。本記事では家庭版、すなわちHome Assistantで規模を決め自動化した、自分の回路のためのバックアップ電力を扱います。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'ここでの「家庭用マイクログリッド」とは、停電バックアップのための太陽光＋バッテリー＋自動切替を意味し、電力会社規模の系統分離ではない',
          'バッテリー容量は製品によって大きく異なる — 例：Enphase IQ Battery 5P（実使用容量5.0kWh）対Tesla Powerwall 3（実使用容量13.5kWh、拡張可能）— 一般的な数字ではなく特定のデータシートを重要回路の負荷と照合すること',
          '重要回路（冷蔵庫、一部の照明、ネットワーク機器/ルーター）が、ほとんどの家庭用バッテリー容量にとって現実的なバックアップ範囲',
          'Home Assistantはバッテリー運転時の負荷遮断の優先順位を自動化し、バックアップ時間を延長できる',
          'これはエネルギー＆ソーラー記事の中で最も推測的な内容であり、主張は控えめにとどめ、家全体の独立性が一般的であるかのような示唆は避けること',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '「家庭用マイクログリッド」が実際に意味するもの',
        content:
          '**消費者/スマートホームの文脈では、「マイクログリッド」とは、太陽光発電に蓄電池、そして停電時に選択した回路を系統から切り離す切替機構を組み合わせたものを指します — 協調的で複数建物にまたがる系統分離電力システムという電力業界的な意味ではありません。**',
        items: [
          '真の電力会社マイクログリッドは、専用の制御システムを用いて複数の建物や近隣地域全体で発電と需要を協調させます — これは商業/電力会社の工学であり、家庭用ハードウェアが行うものではありません。',
          '家庭版はより限定的です：太陽光＋バッテリー＋インバーターが停電時に系統から自動的に切り離され、バックアップシステムに配線した回路に電力を供給します。',
          'ここでの「マイクログリッド」は、「しばらくの間、自宅は自前の電力で運転できる」という緩い意味で使ってください。系統から独立した複数建物の協調という主張ではありません。',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'バックアップシステムの規模決定',
        content:
          '**停電時にどれだけの期間・量をバックアップできるかを制限する要因は、通常、太陽光パネルの枚数ではなくバッテリー容量です — 家全体のピーク負荷ではなく、実際の重要負荷のワット数に合わせて規模を決めてください。**',
        items: [
          '重要回路（冷蔵庫、一部の照明、ネットワーク機器、該当する場合は医療機器）とそのおおよその合計ワット数を一覧にしてください — これがバックアップの目標であり、家全体の分電盤容量ではありません。',
          'バッテリー容量は製品によって幅広い範囲があります：Enphase社のIQ Battery 5Pは実使用容量5.0kWh（Enphase自身のデータシートによる）、Tesla社のPowerwall 3は実使用容量13.5kWhで、追加の拡張パックにより94.5kWhまで拡張できます（Teslaのエナジー・ライブラリーのデータシートによる）— これはどちらかを推奨するものではなく、その幅を示すものです。価格はここではあえて記載していません：バルコニーソーラー・クラスターの独自のバッテリー購入ガイドも同じ理由（関税に敏感で大きく変動する）で価格を省略しており、購入時点で現在のメーカーまたは小売店のページを確認するよう読者に案内しています — 同じ基準がここにも適用されます。',
          '停電時にバックアップ回路を系統から安全に切り離すには、自動切替機能を備えたインバーターが必要です — これは、安全のため停電時にシャットダウンし、バックアップ電力を一切提供しない、系統連系専用インバーターとは異なります。',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: '回路優先順位の自動化',
        content:
          '**Home Assistantは、バッテリー運転時に優先度の低い負荷を自動的に遮断でき、停電時の限られたバッテリーの稼働時間を延ばせます — これは、ローカルエネルギー管理の概要にある負荷シフトの例と同じ自動化パターンを使用します。**',
        items: [
          '「バッテリー電源使用中」状態（インバーター/バッテリー連携がそのステータスを公開すれば利用可能 — Matterインバーター連携ガイドを参照）によってトリガーされる自動化は、非必須のスマートプラグを自動的にオフにできます。',
          '重要度で優先順位をつけてください：冷蔵庫とネットワーク機器はバッテリー電源のままにし、任意のもの（非必須の照明、娯楽機器）を最初に遮断します。',
          'これにより、より大きく高価なバッテリーを必要とせずにバックアップの稼働時間を延ばせます — 自動化は容量をかなりの程度まで代替します。',
        ],
      },
      limits: {
        id: 'limits',
        title: 'これができないこと',
        content:
          '**家庭用バッテリーバックアップ構成は、長期的に家を系統から独立させるものではなく、近隣の系統と協調するものでもなく、長時間の停電に対して通常は全宅の暖房/冷房負荷を賄えません。**',
        items: [
          'ほとんどの家庭用バッテリーシステムは、無期限のオフグリッド運転ではなく、数時間からおおよそ1日程度の重要回路バックアップ向けに設計されています — 実際の稼働時間は、あなたの実際の重要回路のワット数に対する、お使いのバッテリーの容量（製品によって幅広く、単一ユニットで実使用容量約5kWhから、拡張パックにより13.5kWh以上まで、メーカーのデータシートによる）に完全に依存し、一般的な複数日にわたる全宅想定によるものではありません。',
          'この構成は近隣の系統に接続したり協調したりしません — 真の電力会社マイクログリッドとは異なり、各家庭のバックアップは独立しています。',
          'セントラル空調や電気暖房のような高負荷は、バッテリーとインバーターが特別にそれ用に設計されていない限り、通常バックアップ対象の回路リストから除外されます — 想定するのではなく、施工業者の規模決定の推奨を確認してください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '家庭用マイクログリッドはオフグリッドと同じことですか？', a: 'いいえ。家庭用バッテリーバックアップ構成は通常どおり系統に接続されたままで、停電時またはオンデマンドでのみ切り離されます — これはバックアップ電力であり、恒久的なオフグリッド運転ではありません。' },
          { q: '家庭用バッテリーは自宅をどれくらいの時間バックアップできますか？', a: 'これは完全にバッテリー容量と重要回路の負荷次第であり、容量は製品によって大きく異なります — Enphase社のIQ Battery 5Pは実使用容量5.0kWh、Tesla社のPowerwall 3は実使用容量13.5kWh（拡張パックでさらに増設可能）と、各メーカー自身のデータシートで定格されています。固定の時間を想定するのではなく、あなたの特定の回路について施工業者の規模計算を確認してください。' },
          { q: 'バッテリーバックアップが機能するには太陽光パネルが必要ですか？', a: 'いいえ — バッテリーは系統から充電でき、太陽光なしで純粋に停電バックアップ用に使用できますが、太陽光と組み合わせることで、日中に複数日の停電中にバッテリーを再充電できます。' },
          { q: '停電時にどの回路をオンのままにするかHome Assistantで制御できますか？', a: 'インバーター/バッテリー連携が「バッテリー電源使用中」ステータスを報告すれば、Home Assistantはどのスマートプラグ制御負荷を最初に遮断するか自動化できますが、どの回路が物理的にバックアップパネルに配線されているかは設置時に決定される電気的な決定であり、後からソフトウェアが変更するものではありません。' },
          { q: 'これは自分で設置しても合法ですか？', a: '自宅の分電盤に接続するバックアップ電源システムは通常、有資格の電気工事士を必要とし、多くの地域で電力会社への通知や許可が必要です — これはスマートプラグレベルのDIYプロジェクトではありません。' },
          { q: '家庭用マイクログリッドは近隣と協調しますか？', a: 'いいえ — これは真の電力会社マイクログリッドとの主要な違いの一つです。家庭用バッテリーバックアップ構成は、近隣のどのシステムからも完全に独立しています。' },
          { q: 'これに関して系統連系型インバーターとハイブリッドインバーターの違いは何ですか？', a: '系統連系専用インバーターは、安全のため停電時にシャットダウンし、バックアップ電力を一切提供しません。バッテリーと切替対応をサポートするハイブリッドインバーターは、バックアップ回路を切り離して電力供給を続けることができます — 停電バックアップには後者が必要です。' },
          { q: '全宅バックアップと必要最小限のどちらを想定して規模を決めるべきですか？', a: 'ほとんどの家庭用バッテリー予算では、重要回路のバックアップ（冷蔵庫、一部の照明、ネットワーク）が現実的で費用対効果の高い目標です — 全宅バックアップにはかなり大きなバッテリー容量とより大きなインバーターが必要で、これは施工業者との別の規模決定の相談事項になります。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルなスマートホームのエネルギー管理](/ja/smart-home/local-smart-home-energy-management-2027) — 本記事が拡張する概要記事',
          '[太陽光インバーターとヒートポンプのMatter連携](/ja/smart-home/matter-solar-inverter-heat-pump-integration) — バッテリー/インバーターの状態をHome Assistantに公開する',
          '[ベストなバルコニーソーラー用家庭用バッテリー（米国）](/ja/balcony-solar/best-balcony-solar-home-battery-us-2026) — クラスター横断：現行のバッテリーハードウェアと価格',
          '[バルコニーソーラーにバッテリーは必要か？](/ja/balcony-solar/do-you-need-a-battery-balcony-solar) — クラスター横断：バッテリー規模決定の基礎',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '家をエネルギーマイクログリッドに変える（2027年）',
      description: '2027年の家庭用エネルギーマイクログリッド構築：停電時のバックアップのための太陽光、バッテリー、ローカル自動化 — 家庭用ハードウェアが実際にサポートする範囲に限定。',
      url: 'https://www.promptquorum.com/ja/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '家庭用バッテリーバックアップ' }, { '@type': 'Thing', name: '太陽光マイクログリッド' }, { '@type': 'Thing', name: '停電自動化' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '家庭用マイクログリッドはオフグリッドと同じことですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。家庭用バッテリーバックアップ構成は通常どおり系統に接続されたままで、停電時のみ切り離されます — これはバックアップ電力であり、恒久的なオフグリッド運転ではありません。' } },
        { '@type': 'Question', name: 'バッテリーバックアップが機能するには太陽光パネルが必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — バッテリーは系統から充電でき、太陽光なしで純粋に停電バックアップ用に使用できます。' } },
        { '@type': 'Question', name: 'これは自分で設置しても合法ですか？', acceptedAnswer: { '@type': 'Answer', text: '自宅の分電盤に接続するバックアップ電源システムは通常、有資格の電気工事士と多くの地域で許可を必要とします。' } },
        { '@type': 'Question', name: '家庭用マイクログリッドは近隣と協調しますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — 家庭用バッテリーバックアップ構成は、真の電力会社マイクログリッドとは異なり、近隣のどのシステムからも完全に独立しています。' } },
        { '@type': 'Question', name: '全宅バックアップと必要最小限のどちらを想定して規模を決めるべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'ほとんどの予算では、重要回路のバックアップが現実的で費用対効果の高い目標です。全宅バックアップにはかなり大きな容量が必要です。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-zh.webp',
    title: '把你家变成能源微电网（2027年）',
    seoTitle: '家庭能源微电网搭建（2027年）',
    intro:
      '就消费级意义而言，家庭"微电网"指的是太阳能发电加上电池储能，再加上能在电网停电期间让关键回路持续运行的本地自动化——这不是真正的、脱离电网独立运行的公用事业级微电网，后者是另一种商业规模的工程问题。本指南界定了通过家用电池＋逆变器＋Home Assistant自动化在现实中能实现什么，以及要了解具体硬件信息该去哪里查阅。',
    metaDescription:
      '2027年家庭能源微电网搭建：为停电备用提供太阳能、电池和本地自动化——限定在家用硬件真正能支持的范围内。',
    twitterDescription:
      '"家庭微电网"到底意味着什么：为停电备用而设的太阳能＋电池＋本地自动化，而不是公用事业规模的孤岛运行。',
    readTime: '阅读需7分钟',
    educationalLevel: 'Intermediate',
    audience: '正在考虑用电池备用来实现断电独立性的智能家居用户',
    primaryTerm: '家庭能源微电网',
    targetKeywords: [
      '家庭能源微电网搭建',
      '全屋电池备用自动化',
      '家用电池断电备用',
      '太阳能电池备用自动化',
      '孤岛运行家庭电力系统',
    ],
    leadAnswerBlock:
      '**消费级的"家庭微电网"是太阳能发电加上电池储能，再加上一套能在电网停电期间让选定回路持续运行的自动切换系统——这与公用事业级微电网不同，后者涉及跨多栋建筑的孤岛运行和发电协调，家用硬件做不到这些。** 除非你的电池容量和逆变器是专门为此设计的，否则应把预期限定在关键回路备用上，而不是整个房屋的独立供电。',
    quickAnswerTop: {
      zh: {
        question: '我能把家变成一个能源微电网吗？',
        answer:
          '就消费级硬件而言，可以——太阳能板、家用电池，以及一台支持自动切换的兼容逆变器，能在电网停电期间让选定的回路（冰箱、部分照明、网络）持续运行。这与真正的公用事业级微电网有本质区别，后者涉及让多栋建筑脱离电网并协调发电——家用硬件为你自己的回路提供备用电力，而不是那种更广泛意义上的电网独立性。目前的家用电池产品容量跨度很大——Enphase的IQ Battery 5P额定可用容量为5.0 kWh，特斯拉Powerwall 3的额定可用容量为13.5 kWh（可通过扩展包进一步提升）——因此在确定系统规模前，请将你的关键回路负荷与具体产品的数据表对照，而不是凭一般性假设。',
        bullets: [
          '消费级"微电网" = 太阳能 + 电池 + 自动切换，用于提供备用电力',
          '这是关键回路的备用，不是真正的公用事业级电网孤岛运行',
          '电池容量因产品而异，差异很大——例如Enphase IQ Battery 5P：额定可用容量5.0 kWh；特斯拉Powerwall 3：额定可用容量13.5 kWh，可进一步扩展——在确定系统规模前，请对照具体产品的数据表与你的关键回路负荷',
          'Home Assistant可以自动化设置在电池供电时哪些回路优先',
          '把项目范围限定在你实际的停电备用需求上，而不是假设整个房屋要实现独立供电',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '"家庭微电网"到底意味着什么', anchor: 'what-it-means' },
      { label: '为备用系统确定规模', anchor: 'sizing' },
      { label: '自动化回路优先级', anchor: 'automating-priority' },
      { label: '这做不到什么', anchor: 'limits' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '消费级的"家庭微电网"是太阳能加电池加自动切换，用于在电网停电期间为关键回路提供备用电力——不是公用事业规模的电网孤岛运行。' },
      { type: 'plain-terms', content: '有些人用"微电网"来形容一套配有太阳能板和电池、能在停电时让灯和冰箱继续运转的家庭系统。这确实是一种实用的配置，但与电力公司所说的"微电网"含义不同——后者是一套协调运行的电力系统，独立于主电网为多栋建筑供电。本文讲的是家庭版本：为你自己的回路提供备用电力，用Home Assistant来确定规模并实现自动化。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '这里的"家庭微电网"指的是太阳能＋电池＋自动切换，用于停电备用——不是公用事业规模的电网孤岛运行',
          '电池容量因产品而异，差异很大——例如Enphase IQ Battery 5P（额定可用容量5.0 kWh）对比特斯拉Powerwall 3（额定可用容量13.5 kWh，可扩展）——请对照具体的数据表而非笼统数字，结合你的关键回路负荷',
          '对大多数家用电池容量而言，关键回路（冰箱、部分照明、网络设备/路由器）是现实可行的备用范围',
          'Home Assistant可以在电池供电时自动化负荷削减的优先级，从而延长备用时长',
          '这是"能源与太阳能"系列中最具推测性的一篇——请保守地限定说法，避免暗示整屋独立供电是常见做法',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '"家庭微电网"到底意味着什么',
        content:
          '**在消费/智能家居语境中，"微电网"描述的是太阳能发电加电池储能，再加一套在停电期间把选定回路与电网隔离的切换机制——而不是电力行业所说的、跨多栋建筑协调运行的孤岛电力系统。**',
        items: [
          '真正的公用事业微电网通过专用控制系统，在多栋建筑或一个社区范围内协调发电与需求——这是商业/公用事业级的工程，不是家用硬件能做到的。',
          '家庭版本要窄得多：你的太阳能＋电池＋逆变器会在停电期间自动与电网断开，并为你接入备用系统的回路供电。',
          '这里"微电网"是一种宽泛的说法，意思是"我家能靠自己的电力运行一段时间"，而不是声称实现了跨多栋建筑、脱离电网的协调运行。',
        ],
      },
      sizing: {
        id: 'sizing',
        title: '为备用系统确定规模',
        content:
          '**电池容量，而非太阳能板数量，通常才是决定停电期间能备用多久、多少用电量的限制因素——请按你实际关键负荷的瓦数来确定规模，而不是按全屋的峰值用电量。**',
        items: [
          '列出你的关键回路（冰箱、部分照明、网络设备，如适用还有医疗设备）及其大致的合计瓦数——这才是你的备用目标，而不是全屋配电箱的容量。',
          '电池容量因产品而异，跨度很大：根据Enphase自己的数据表，其IQ Battery 5P额定可用容量为5.0 kWh；而根据特斯拉Energy Library的数据表，Powerwall 3额定可用容量为13.5 kWh，并可通过额外的扩展包扩容至94.5 kWh——这说明的是容量范围，而不是推荐其中某一款胜过另一款。这里刻意不给出价格：阳台光伏专题自己的电池购买指南出于同样的原因（对关税敏感、变动较大）也省略了价格，并引导读者在购买时查阅当前的厂商或零售商页面——这里也适用同样的标准。',
          '需要一台具备自动切换功能的逆变器，才能在停电期间安全地把备用回路与电网隔离——这不同于纯并网型逆变器，后者出于安全考虑会在停电时关闭，完全不提供备用电力。',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: '自动化回路优先级',
        content:
          '**Home Assistant可以在电池供电时自动削减优先级较低的负荷，从而在停电期间拉长有限电池的续航时间——这使用的自动化模式，与本地能源管理概览中的负荷转移示例相同。**',
        items: [
          '由"电池供电中"状态触发的自动化（一旦你的逆变器/电池集成公开该状态即可使用——参见Matter逆变器集成指南）可以自动关闭非必要的智能插座。',
          '按重要性排优先级：让冰箱和网络设备保持电池供电，先削减可有可无的负荷（非必要照明、娱乐设备）。',
          '这样可以在不需要更大、更贵电池的情况下延长备用续航时间——自动化在相当程度上替代了容量。',
        ],
      },
      limits: {
        id: 'limits',
        title: '这做不到什么',
        content:
          '**家用电池备用系统不会让你的家长期脱离电网独立运行，不会与邻居的系统协调运行，通常也无法在长时间停电期间支撑全屋的供暖/制冷负荷。**',
        items: [
          '大多数家用电池系统的设计容量是数小时到大约一天的关键回路备用，而不是无限期的离网运行——实际续航时间完全取决于你所用电池的具体容量（因产品而异，跨度很大，单台设备的额定可用容量从约5 kWh到加装扩展包后的13.5 kWh及以上不等，具体以厂商数据表为准）相对于你实际关键回路瓦数的比例，而不是笼统地假设能支撑全屋多日用电。',
          '这套系统不会连接或协调邻居的系统——每户的备用都是独立的，这与真正的公用事业微电网不同。',
          '中央空调或电暖气等高耗电负荷通常会被排除在备用回路清单之外，除非电池和逆变器专门为此确定了规模——请查阅你的安装人员给出的规模建议，而不要自行假设。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '家庭微电网和完全离网是一回事吗？', a: '不是。家用电池备用系统仍然正常连接电网，只在停电或按需时才隔离——这是备用电力，不是永久的离网运行。' },
          { q: '家用电池能为我家提供多长时间的备用电力？', a: '这完全取决于电池容量相对于你关键回路负荷的比例，而容量因产品而异、差异很大——根据各厂商自己的数据表，Enphase的IQ Battery 5P额定可用容量为5.0 kWh，特斯拉Powerwall 3为13.5 kWh（可通过扩展包进一步提升）。请让安装人员针对你的具体回路进行规模计算，而不要假设一个固定时长。' },
          { q: '电池备用要起作用，需要太阳能板吗？', a: '不需要——电池可以从电网充电，仅用于停电备用而无需太阳能，不过配合太阳能可以让电池在有日照的多日停电期间重新充电。' },
          { q: 'Home Assistant能控制停电期间哪些回路保持通电吗？', a: '一旦你的逆变器/电池集成上报"电池供电中"状态，Home Assistant就能自动化决定哪些由智能插座控制的负荷先被削减，但哪些回路实际接到备用配电盘上，是安装时做出的电气决定，不是事后靠软件能改变的。' },
          { q: '我自己安装这个合法吗？', a: '接入你家配电盘的备用电源系统通常需要持证电工操作，在许多地区还需要向电力公司报备或申请许可——这不是智能插座级别的DIY项目。' },
          { q: '家庭微电网会和我的邻居协调运行吗？', a: '不会——这是与真正的公用事业微电网的一个关键区别。家用电池备用系统与任何邻居的系统完全独立。' },
          { q: '并网型逆变器和混合型逆变器在这方面有什么区别？', a: '纯并网型逆变器会在电网停电时出于安全考虑关闭，不提供任何备用电力。支持电池和切换功能的混合型逆变器可以隔离备用回路并持续为其供电——你需要后者才能实现停电备用。' },
          { q: '我应该按全屋备用还是仅关键负荷来确定规模？', a: '对大多数家用电池预算而言，关键回路备用（冰箱、部分照明、网络）是现实且具成本效益的目标——全屋备用需要大得多的电池容量和更大的逆变器，这是需要与安装人员另行讨论的规模问题。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[本地智能家居能源管理](/zh/smart-home/local-smart-home-energy-management-2027) — 本文所延伸的概览',
          '[太阳能逆变器与热泵的Matter集成](/zh/smart-home/matter-solar-inverter-heat-pump-integration) — 向Home Assistant公开电池/逆变器状态',
          '[美国阳台光伏家用电池推荐](/zh/balcony-solar/best-balcony-solar-home-battery-us-2026) — 跨专题：现行电池硬件与价格',
          '[阳台光伏需要电池吗？](/zh/balcony-solar/do-you-need-a-battery-balcony-solar) — 跨专题：电池选型基础',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '把你家变成能源微电网（2027年）',
      description: '2027年家庭能源微电网搭建：为停电备用提供太阳能、电池和本地自动化——限定在家用硬件真正能支持的范围内。',
      url: 'https://www.promptquorum.com/zh/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '家用电池备用' }, { '@type': 'Thing', name: '太阳能微电网' }, { '@type': 'Thing', name: '停电自动化' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '家庭微电网和完全离网是一回事吗？', acceptedAnswer: { '@type': 'Answer', text: '不是。家用电池备用系统仍然正常连接电网，只在停电时才隔离——这是备用电力，不是永久的离网运行。' } },
        { '@type': 'Question', name: '电池备用要起作用，需要太阳能板吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要——电池可以从电网充电，仅用于停电备用而无需太阳能。' } },
        { '@type': 'Question', name: '我自己安装这个合法吗？', acceptedAnswer: { '@type': 'Answer', text: '接入配电盘的备用电源系统通常需要持证电工操作，在许多地区还需要申请许可。' } },
        { '@type': 'Question', name: '家庭微电网会和我的邻居协调运行吗？', acceptedAnswer: { '@type': 'Answer', text: '不会——家用电池备用系统与任何邻居的系统完全独立，这与真正的公用事业微电网不同。' } },
        { '@type': 'Question', name: '我应该按全屋备用还是仅关键负荷来确定规模？', acceptedAnswer: { '@type': 'Answer', text: '对大多数预算而言，关键回路备用是现实且具成本效益的目标；全屋备用需要大得多的容量。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-es.webp',
    title: 'Convertir tu hogar en una microrred de energía (2027)',
    seoTitle: 'Configuración de microrred energética doméstica (2027)',
    intro:
      'Una "microrred" energética doméstica, en el sentido del consumidor, significa generación solar más almacenamiento por batería más automatización local que puede mantener funcionando circuitos esenciales durante un corte de red — no una verdadera microrred aislada a escala de servicio público, que es un problema de ingeniería comercial diferente. Esta guía delimita lo que es realistamente alcanzable con batería doméstica + inversor + automatización de Home Assistant, y adónde ir para los detalles de hardware.',
    metaDescription:
      'Configuración de microrred energética doméstica en 2027: solar, batería y automatización local para respaldo en cortes — delimitado a lo que el hardware doméstico realmente soporta.',
    twitterDescription:
      'Lo que realmente significa una "microrred doméstica": solar + batería + automatización local para respaldo en cortes, no aislamiento a escala de servicio público.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de hogar inteligente considerando respaldo por batería para independencia en cortes',
    primaryTerm: 'microrred energetica domestica',
    targetKeywords: [
      'configuracion microrred energetica domestica',
      'automatizacion respaldo bateria toda la casa',
      'respaldo bateria domestica corte',
      'automatizacion respaldo bateria solar',
      'sistema electrico domestico aislado',
    ],
    leadAnswerBlock:
      '**Una "microrred doméstica" de consumidor es generación solar más almacenamiento por batería más una configuración de transferencia automática que mantiene funcionando los circuitos elegidos durante un corte de red — no es lo mismo que una microrred a escala de servicio público, que implica aislamiento de red multi-edificio y coordinación de generación que el hardware doméstico no hace.** Delimita tus expectativas al respaldo de circuitos esenciales, no a la independencia de toda la casa, a menos que tu capacidad de batería y tu inversor estén dimensionados específicamente para eso.',
    quickAnswerTop: {
      es: {
        question: '¿Puedo convertir mi hogar en una microrred de energía?',
        answer:
          'En el sentido del hardware de consumo, sí — paneles solares, una batería doméstica, y un inversor compatible con conmutación de transferencia automática pueden mantener funcionando circuitos elegidos (refrigerador, algo de iluminación, internet) durante un corte de red. Esto es fundamentalmente diferente de una verdadera microrred a escala de servicio público, que implica aislar múltiples edificios de la red con generación coordinada — el hardware doméstico proporciona energía de respaldo para tus propios circuitos, no independencia de red en ese sentido más amplio. Los productos de batería doméstica actuales cubren una amplia gama de capacidades — el IQ Battery 5P de Enphase está clasificado en 5.0 kWh utilizables, y el Powerwall 3 de Tesla en 13.5 kWh utilizables (escalable más con paquetes de expansión) — así que compara tu carga de circuitos esenciales con la ficha técnica de un producto específico, no con una suposición genérica, antes de dimensionar un sistema.',
        bullets: [
          '"Microrred" de consumidor = solar + batería + conmutación de transferencia automática para energía de respaldo',
          'Esto es respaldo de circuitos esenciales, no un verdadero aislamiento de red a escala de servicio público',
          'La capacidad de batería varía ampliamente según el producto — por ej., Enphase IQ Battery 5P: 5.0 kWh utilizables; Tesla Powerwall 3: 13.5 kWh utilizables, escalable más — verifica la ficha técnica de un producto específico contra tu carga de circuitos esenciales',
          'Home Assistant puede automatizar qué circuitos tienen prioridad al funcionar con batería',
          'Delimita el proyecto a tus necesidades reales de respaldo en cortes, no a una suposición de independencia de toda la casa',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué significa realmente "microrred doméstica"', anchor: 'what-it-means' },
      { label: 'Dimensionar un sistema de respaldo', anchor: 'sizing' },
      { label: 'Automatizar la prioridad de circuitos', anchor: 'automating-priority' },
      { label: 'Lo que esto no hace', anchor: 'limits' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Una "microrred doméstica" de consumidor es solar más batería más conmutación de transferencia automática para respaldo de circuitos esenciales durante un corte de red — no aislamiento de red a escala de servicio público.' },
      { type: 'plain-terms', content: 'Algunas personas usan "microrred" para describir un hogar con paneles solares y una batería que puede mantener las luces y el refrigerador encendidos cuando se va la luz. Esa es una configuración real y útil, pero es diferente de lo que "microrred" significa para una compañía eléctrica — un sistema eléctrico coordinado que sirve a múltiples edificios independientemente de la red principal. Este artículo cubre la versión doméstica: energía de respaldo para tus propios circuitos, dimensionada y automatizada con Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          '"Microrred doméstica" aquí significa solar + batería + conmutación de transferencia automática para respaldo en cortes — no aislamiento de red a escala de servicio público',
          'La capacidad de batería varía significativamente según el producto — por ej., Enphase IQ Battery 5P (5.0 kWh utilizables) vs. Tesla Powerwall 3 (13.5 kWh utilizables, expandible) — verifica una ficha técnica específica, no una cifra genérica, contra tu carga de circuitos esenciales',
          'Los circuitos esenciales (refrigerador, algo de iluminación, redes/router) son el alcance de respaldo realista para la mayoría de los tamaños de batería doméstica',
          'Home Assistant puede automatizar la prioridad de desconexión de carga al funcionar con batería, extendiendo la duración del respaldo',
          'Este es el más especulativo de los artículos de Energía y Solar — delimita las afirmaciones con cautela y evita insinuar que la independencia de toda la casa es típica',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Qué significa realmente "microrred doméstica"',
        content:
          '**En el contexto de consumidor/hogar inteligente, "microrred" describe generación solar más almacenamiento por batería más un mecanismo de transferencia que aísla los circuitos elegidos de la red durante un corte — no el significado de la industria de servicios públicos de un sistema eléctrico coordinado, aislado, multi-edificio.**',
        items: [
          'Una verdadera microrred de servicio público coordina generación y demanda a través de múltiples edificios o un vecindario, con sistemas de control dedicados — esto es ingeniería comercial/de servicio público, no algo que hace el hardware doméstico.',
          'La versión doméstica es más estrecha: tu solar + batería + inversor se desconecta automáticamente de la red durante un corte y alimenta los circuitos que has cableado al sistema de respaldo.',
          'Usa "microrred" aquí de manera informal para significar "mi hogar puede funcionar con su propia energía por un tiempo", no una afirmación de coordinación multi-edificio independiente de la red.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'Dimensionar un sistema de respaldo',
        content:
          '**La capacidad de la batería, no el número de paneles solares, suele ser el factor limitante para cuánto tiempo y cuánto puedes respaldar durante un corte — dimensiona según la potencia real de tu carga esencial, no el consumo pico de toda tu casa.**',
        items: [
          'Enumera tus circuitos esenciales (refrigerador, algo de iluminación, equipo de red, y equipo médico si aplica) y su vataje combinado aproximado — este es tu objetivo de respaldo, no la capacidad del panel de toda tu casa.',
          'La capacidad de batería cubre una amplia gama según el producto: el IQ Battery 5P de Enphase está clasificado en 5.0 kWh utilizables (según la propia ficha técnica de Enphase), mientras que el Powerwall 3 de Tesla está clasificado en 13.5 kWh utilizables y escala a 94.5 kWh con paquetes de expansión adicionales (según la ficha técnica de la Energy Library de Tesla) — esto ilustra el rango, no una recomendación de uno sobre otro. Los precios deliberadamente no se citan aquí: la propia guía de compra de baterías del clúster de solar de balcón omite precios por la misma razón (sensibles a aranceles, cambian significativamente) y dirige a los lectores a verificar las páginas actuales del fabricante o minorista en el momento de la compra — el mismo estándar aplica aquí.',
          'Se requiere un inversor con capacidad de conmutación de transferencia automática para aislar de forma segura los circuitos de respaldo de la red durante un corte — esto difiere de un inversor solo conectado a la red, que se apaga durante un corte por seguridad y no proporciona ninguna energía de respaldo.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: 'Automatizar la prioridad de circuitos',
        content:
          '**Home Assistant puede desconectar automáticamente cargas de menor prioridad al funcionar con batería, estirando la autonomía de una batería limitada durante un corte — esto usa los mismos patrones de automatización que los ejemplos de desplazamiento de carga en el resumen de gestión local de energía.**',
        items: [
          'Una automatización activada por el estado "con energía de batería" (disponible una vez que tu integración de inversor/batería expone ese estado — ver la guía de integración Matter de inversor) puede apagar automáticamente los enchufes inteligentes no esenciales.',
          'Prioriza por importancia: mantén el refrigerador y el equipo de red con energía de batería, y desconecta primero cualquier cosa discrecional (iluminación no esencial, dispositivos de entretenimiento).',
          'Esto extiende la autonomía de respaldo sin requerir una batería más grande y costosa — la automatización sustituye la capacidad en un grado significativo.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'Lo que esto no hace',
        content:
          '**Una instalación de respaldo por batería doméstica no hace que tu hogar sea independiente de la red a largo plazo, no se coordina con los sistemas de los vecinos, y típicamente no puede alimentar cargas de calefacción/refrigeración de toda la casa durante cortes prolongados.**',
        items: [
          'La mayoría de los sistemas de batería doméstica están dimensionados para horas a aproximadamente un día de respaldo de circuitos esenciales, no operación indefinida fuera de red — la autonomía real depende enteramente de la capacidad de tu batería específica (que cubre una amplia gama entre productos, desde aproximadamente 5 kWh utilizables en una sola unidad hasta 13.5 kWh y más con paquetes de expansión, según las fichas técnicas del fabricante) frente al vataje real de tu circuito esencial, no una suposición genérica de toda la casa durante varios días.',
          'Esta configuración no se conecta ni se coordina con el sistema de un vecino — el respaldo de cada hogar es independiente, a diferencia de una verdadera microrred de servicio público.',
          'Las cargas de alto consumo como el aire acondicionado central o la calefacción eléctrica generalmente se excluyen de la lista de circuitos respaldados a menos que la batería y el inversor estén específicamente dimensionados para ellas — verifica la recomendación de dimensionamiento de tu instalador en lugar de suponerlo.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Una microrred doméstica es lo mismo que estar fuera de la red?', a: 'No. Una instalación de respaldo por batería doméstica sigue conectada a la red normalmente y solo se aísla durante un corte o bajo demanda — es energía de respaldo, no operación permanente fuera de la red.' },
          { q: '¿Cuánto tiempo puede una batería doméstica respaldar mi casa?', a: 'Esto depende enteramente de la capacidad de la batería frente a tu carga de circuitos esenciales, y la capacidad varía ampliamente según el producto — el IQ Battery 5P de Enphase está clasificado en 5.0 kWh utilizables, el Powerwall 3 de Tesla en 13.5 kWh utilizables (escalable más con paquetes de expansión), según la propia ficha técnica de cada fabricante. Consulta el cálculo de dimensionamiento de un instalador para tus circuitos específicos en lugar de suponer una duración fija.' },
          { q: '¿Necesito paneles solares para que funcione el respaldo por batería?', a: 'No — una batería puede cargarse desde la red y usarse puramente para respaldo en cortes sin solar, aunque combinarla con solar permite que la batería se recargue durante un corte de varios días si hay luz diurna.' },
          { q: '¿Puede Home Assistant controlar qué circuitos permanecen encendidos durante un corte?', a: 'Home Assistant puede automatizar qué cargas controladas por enchufe inteligente se desconectan primero una vez que tu integración de inversor/batería reporta el estado "con energía de batería", pero qué circuitos están físicamente cableados al panel de respaldo es una decisión eléctrica tomada durante la instalación, no algo que el software cambie después.' },
          { q: '¿Es legal instalarlo yo mismo?', a: 'Los sistemas de energía de respaldo que se conectan al panel eléctrico de tu hogar típicamente requieren un electricista certificado y, en muchas regiones, notificación o permiso de la compañía eléctrica — esto no es un proyecto de bricolaje al nivel de un enchufe inteligente.' },
          { q: '¿Una microrred doméstica se coordina con mis vecinos?', a: 'No — esta es una de las diferencias clave respecto a una verdadera microrred de servicio público. Una instalación de respaldo por batería doméstica es completamente independiente de cualquier sistema vecino.' },
          { q: '¿Cuál es la diferencia entre un inversor conectado a la red y uno híbrido para esto?', a: 'Un inversor solo conectado a la red se apaga durante un corte de red por seguridad y no proporciona energía de respaldo. Un inversor híbrido con soporte de batería y conmutación de transferencia puede aislar los circuitos de respaldo y seguir alimentándolos — necesitas el segundo para respaldo en cortes.' },
          { q: '¿Debo dimensionar para respaldo de toda la casa o solo lo esencial?', a: 'Para la mayoría de los presupuestos de batería doméstica, el respaldo de circuitos esenciales (refrigerador, algo de iluminación, redes) es el objetivo realista y rentable — el respaldo de toda la casa requiere sustancialmente más capacidad de batería y un inversor más grande, lo cual es una conversación de dimensionamiento diferente con un instalador.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Gestión local de energía en el hogar inteligente](/es/smart-home/local-smart-home-energy-management-2027) — el resumen que este artículo extiende',
          '[Integración Matter para inversores solares y bombas de calor](/es/smart-home/matter-solar-inverter-heat-pump-integration) — exponer el estado de batería/inversor a Home Assistant',
          '[Mejor batería doméstica solar de balcón (EE. UU.)](/es/balcony-solar/best-balcony-solar-home-battery-us-2026) — entre clústers: hardware de batería actual y precios',
          '[¿Necesitas una batería para el solar de balcón?](/es/balcony-solar/do-you-need-a-battery-balcony-solar) — entre clústers: fundamentos del dimensionamiento de batería',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Convertir tu hogar en una microrred de energía (2027)',
      description: 'Configuración de microrred energética doméstica en 2027: solar, batería y automatización local para respaldo en cortes — delimitado a lo que el hardware doméstico realmente soporta.',
      url: 'https://www.promptquorum.com/es/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Respaldo por batería doméstica' }, { '@type': 'Thing', name: 'Microrred solar' }, { '@type': 'Thing', name: 'Automatización de cortes' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Una microrred doméstica es lo mismo que estar fuera de la red?', acceptedAnswer: { '@type': 'Answer', text: 'No. Una instalación de respaldo por batería doméstica sigue conectada a la red normalmente y solo se aísla durante un corte — es energía de respaldo, no operación permanente fuera de la red.' } },
        { '@type': 'Question', name: '¿Necesito paneles solares para que funcione el respaldo por batería?', acceptedAnswer: { '@type': 'Answer', text: 'No — una batería puede cargarse desde la red y usarse puramente para respaldo en cortes sin solar.' } },
        { '@type': 'Question', name: '¿Es legal instalarlo yo mismo?', acceptedAnswer: { '@type': 'Answer', text: 'Los sistemas de energía de respaldo que se conectan al panel eléctrico típicamente requieren un electricista certificado y permiso en muchas regiones.' } },
        { '@type': 'Question', name: '¿Una microrred doméstica se coordina con mis vecinos?', acceptedAnswer: { '@type': 'Answer', text: 'No — una instalación de respaldo por batería doméstica es completamente independiente de cualquier sistema vecino, a diferencia de una verdadera microrred de servicio público.' } },
        { '@type': 'Question', name: '¿Debo dimensionar para respaldo de toda la casa o solo lo esencial?', acceptedAnswer: { '@type': 'Answer', text: 'Para la mayoría de los presupuestos, el respaldo de circuitos esenciales es el objetivo realista y rentable; el respaldo de toda la casa requiere sustancialmente más capacidad.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-pt.webp',
    title: 'Transformando sua casa em uma microrrede de energia (2027)',
    seoTitle: 'Configuração de microrrede energética doméstica (2027)',
    intro:
      'Uma "microrrede" de energia doméstica, no sentido do consumidor, significa geração solar mais armazenamento por bateria mais automação local que pode manter circuitos essenciais funcionando durante uma queda de rede — não uma verdadeira microrrede em ilha na escala de concessionária, que é um problema de engenharia comercial diferente. Este guia delimita o que é realisticamente alcançável com bateria doméstica + inversor + automação do Home Assistant, e onde ir para os detalhes de hardware.',
    metaDescription:
      'Configuração de microrrede energética doméstica em 2027: solar, bateria e automação local para backup em quedas — delimitado ao que o hardware doméstico realmente suporta.',
    twitterDescription:
      'O que uma "microrrede doméstica" realmente significa: solar + bateria + automação local para backup em quedas, não ilhamento na escala de concessionária.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa inteligente considerando backup de bateria para independência em quedas',
    primaryTerm: 'microrrede energetica domestica',
    targetKeywords: [
      'configuracao microrrede energetica domestica',
      'automacao backup bateria casa toda',
      'backup bateria domestica queda',
      'automacao backup bateria solar',
      'sistema eletrico domestico em ilha',
    ],
    leadAnswerBlock:
      '**Uma "microrrede doméstica" de consumidor é geração solar mais armazenamento por bateria mais uma configuração de transferência automática que mantém os circuitos escolhidos funcionando durante uma queda de rede — não é o mesmo que uma microrrede na escala de concessionária, que envolve ilhamento de rede multi-prédio e coordenação de geração que o hardware doméstico não faz.** Delimite suas expectativas ao backup de circuitos essenciais, não à independência da casa toda, a menos que sua capacidade de bateria e inversor sejam dimensionados especificamente para isso.',
    quickAnswerTop: {
      pt: {
        question: 'Posso transformar minha casa em uma microrrede de energia?',
        answer:
          'No sentido do hardware de consumo, sim — painéis solares, uma bateria doméstica, e um inversor compatível com comutação de transferência automática podem manter circuitos escolhidos (geladeira, alguma iluminação, internet) funcionando durante uma queda de rede. Isso é fundamentalmente diferente de uma verdadeira microrrede na escala de concessionária, que envolve ilhar múltiplos prédios da rede com geração coordenada — o hardware doméstico fornece energia de backup para seus próprios circuitos, não independência de rede nesse sentido mais amplo. Os produtos de bateria doméstica atuais cobrem uma ampla faixa de capacidade — a IQ Battery 5P da Enphase é classificada em 5,0 kWh utilizáveis, e a Powerwall 3 da Tesla em 13,5 kWh utilizáveis (escalável ainda mais com pacotes de expansão) — então combine sua carga de circuitos essenciais com a ficha técnica de um produto específico, não com uma suposição genérica, antes de dimensionar um sistema.',
        bullets: [
          '"Microrrede" de consumidor = solar + bateria + comutação de transferência automática para energia de backup',
          'Isso é backup de circuitos essenciais, não um verdadeiro ilhamento de rede na escala de concessionária',
          'A capacidade da bateria varia amplamente por produto — ex.: Enphase IQ Battery 5P: 5,0 kWh utilizáveis; Tesla Powerwall 3: 13,5 kWh utilizáveis, escalável ainda mais — verifique a ficha técnica de um produto específico contra sua carga de circuitos essenciais',
          'O Home Assistant pode automatizar quais circuitos têm prioridade ao funcionar com bateria',
          'Delimite o projeto às suas necessidades reais de backup em quedas, não a uma suposição de independência da casa toda',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que "microrrede doméstica" realmente significa', anchor: 'what-it-means' },
      { label: 'Dimensionando um sistema de backup', anchor: 'sizing' },
      { label: 'Automatizando a prioridade de circuitos', anchor: 'automating-priority' },
      { label: 'O que isso não faz', anchor: 'limits' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Uma "microrrede doméstica" de consumidor é solar mais bateria mais comutação de transferência automática para backup de circuitos essenciais durante uma queda de rede — não ilhamento de rede na escala de concessionária.' },
      { type: 'plain-terms', content: 'Algumas pessoas usam "microrrede" para descrever uma casa com painéis solares e uma bateria que pode manter as luzes e a geladeira ligadas quando a energia acaba. Essa é uma configuração real e útil, mas é diferente do que "microrrede" significa para uma concessionária — um sistema elétrico coordenado atendendo múltiplos prédios independentemente da rede principal. Este artigo cobre a versão doméstica: energia de backup para seus próprios circuitos, dimensionada e automatizada com Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          '"Microrrede doméstica" aqui significa solar + bateria + comutação de transferência automática para backup em quedas — não ilhamento de rede na escala de concessionária',
          'A capacidade da bateria varia significativamente por produto — ex.: Enphase IQ Battery 5P (5,0 kWh utilizáveis) vs. Tesla Powerwall 3 (13,5 kWh utilizáveis, expansível) — verifique uma ficha técnica específica, não um número genérico, contra sua carga de circuitos essenciais',
          'Circuitos essenciais (geladeira, alguma iluminação, rede/roteador) são o escopo de backup realista para a maioria dos tamanhos de bateria doméstica',
          'O Home Assistant pode automatizar a prioridade de corte de carga ao funcionar com bateria, estendendo a duração do backup',
          'Este é o mais especulativo dos artigos de Energia e Solar — delimite as afirmações com cautela e evite insinuar que a independência da casa toda é típica',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'O que "microrrede doméstica" realmente significa',
        content:
          '**No contexto de consumidor/casa inteligente, "microrrede" descreve geração solar mais armazenamento por bateria mais um mecanismo de transferência que isola os circuitos escolhidos da rede durante uma queda — não o significado do setor de concessionárias de um sistema elétrico coordenado, em ilha, multi-prédio.**',
        items: [
          'Uma verdadeira microrrede de concessionária coordena geração e demanda em múltiplos prédios ou uma vizinhança, com sistemas de controle dedicados — isso é engenharia comercial/de concessionária, não algo que o hardware doméstico faz.',
          'A versão doméstica é mais estreita: seu solar + bateria + inversor se desconecta automaticamente da rede durante uma queda e alimenta os circuitos que você cabeou ao sistema de backup.',
          'Use "microrrede" aqui de forma informal para significar "minha casa pode funcionar com sua própria energia por um tempo", não uma afirmação de coordenação multi-prédio independente de rede.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'Dimensionando um sistema de backup',
        content:
          '**A capacidade da bateria, não o número de painéis solares, costuma ser o fator limitante para quanto tempo e quanto você pode fazer backup durante uma queda — dimensione pela potência real da sua carga essencial, não pelo consumo de pico de toda a sua casa.**',
        items: [
          'Liste seus circuitos essenciais (geladeira, alguma iluminação, equipamento de rede, e equipamento médico se aplicável) e sua wattagem combinada aproximada — este é seu alvo de backup, não a capacidade do quadro de toda a sua casa.',
          'A capacidade da bateria cobre uma ampla faixa por produto: a IQ Battery 5P da Enphase é classificada em 5,0 kWh utilizáveis (segundo a própria ficha técnica da Enphase), enquanto a Powerwall 3 da Tesla é classificada em 13,5 kWh utilizáveis e escala para 94,5 kWh com pacotes de expansão adicionais (segundo a ficha técnica da Energy Library da Tesla) — isso ilustra a faixa, não uma recomendação de uma sobre a outra. Os preços deliberadamente não são citados aqui: o próprio guia de compra de baterias do cluster de energia solar de varanda omite preços pelo mesmo motivo (sensíveis a tarifas, mudam significativamente) e direciona os leitores a verificar as páginas atuais do fabricante ou varejista no momento da compra — o mesmo padrão se aplica aqui.',
          'Um inversor com capacidade de comutação de transferência automática é necessário para isolar com segurança os circuitos de backup da rede durante uma queda — isso difere de um inversor apenas conectado à rede, que desliga durante uma queda por segurança e não fornece nenhuma energia de backup.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: 'Automatizando a prioridade de circuitos',
        content:
          '**O Home Assistant pode cortar cargas de prioridade mais baixa automaticamente ao funcionar com bateria, esticando a autonomia de uma bateria limitada durante uma queda — isso usa os mesmos padrões de automação dos exemplos de deslocamento de carga na visão geral de gestão local de energia.**',
        items: [
          'Uma automação acionada pelo estado "com energia de bateria" (disponível assim que sua integração de inversor/bateria expõe esse status — veja o guia de integração Matter de inversor) pode desligar automaticamente tomadas inteligentes não essenciais.',
          'Priorize por importância: mantenha a geladeira e o equipamento de rede com energia de bateria, e corte primeiro qualquer coisa discricionária (iluminação não essencial, dispositivos de entretenimento).',
          'Isso estende a autonomia de backup sem exigir uma bateria maior e mais cara — a automação substitui a capacidade em um grau significativo.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'O que isso não faz',
        content:
          '**Uma instalação de backup por bateria doméstica não torna sua casa independente da rede a longo prazo, não se coordena com os sistemas dos vizinhos, e tipicamente não consegue alimentar cargas de aquecimento/refrigeração de toda a casa durante quedas prolongadas.**',
        items: [
          'A maioria dos sistemas de bateria doméstica é dimensionada para horas a cerca de um dia de backup de circuitos essenciais, não operação indefinida fora da rede — a autonomia real depende inteiramente da capacidade da sua bateria específica (que cobre uma ampla faixa entre produtos, de cerca de 5 kWh utilizáveis em uma única unidade até 13,5 kWh e além com pacotes de expansão, segundo fichas técnicas do fabricante) em relação à wattagem real do seu circuito essencial, não uma suposição genérica de vários dias para a casa toda.',
          'Esta configuração não se conecta nem se coordena com o sistema de um vizinho — o backup de cada casa é independente, diferente de uma verdadeira microrrede de concessionária.',
          'Cargas de alto consumo como ar-condicionado central ou aquecimento elétrico geralmente são excluídas da lista de circuitos com backup, a menos que a bateria e o inversor sejam especificamente dimensionados para elas — verifique a recomendação de dimensionamento do seu instalador em vez de supor.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Uma microrrede doméstica é o mesmo que estar fora da rede?', a: 'Não. Uma instalação de backup por bateria doméstica continua conectada à rede normalmente e só se isola durante uma queda ou sob demanda — é energia de backup, não operação permanente fora da rede.' },
          { q: 'Por quanto tempo uma bateria doméstica pode fazer backup da minha casa?', a: 'Isso depende inteiramente da capacidade da bateria versus sua carga de circuitos essenciais, e a capacidade varia amplamente por produto — a IQ Battery 5P da Enphase é classificada em 5,0 kWh utilizáveis, a Powerwall 3 da Tesla em 13,5 kWh utilizáveis (escalável ainda mais com pacotes de expansão), segundo a própria ficha técnica de cada fabricante. Consulte o cálculo de dimensionamento de um instalador para seus circuitos específicos em vez de supor uma duração fixa.' },
          { q: 'Preciso de painéis solares para o backup por bateria funcionar?', a: 'Não — uma bateria pode ser carregada da rede e usada puramente para backup em quedas sem solar, embora combinar com solar permita que a bateria recarregue durante uma queda de vários dias se houver luz do dia.' },
          { q: 'O Home Assistant pode controlar quais circuitos permanecem ligados durante uma queda?', a: 'O Home Assistant pode automatizar quais cargas controladas por tomada inteligente são cortadas primeiro assim que sua integração de inversor/bateria reporta o status "com energia de bateria", mas quais circuitos estão fisicamente cabeados ao painel de backup é uma decisão elétrica tomada durante a instalação, não algo que o software muda depois.' },
          { q: 'É legal instalar isso eu mesmo?', a: 'Sistemas de energia de backup que se conectam ao quadro elétrico da sua casa tipicamente exigem um eletricista licenciado e, em muitas regiões, notificação ou licença da concessionária — isso não é um projeto DIY no nível de uma tomada inteligente.' },
          { q: 'Uma microrrede doméstica se coordena com meus vizinhos?', a: 'Não — essa é uma das principais diferenças em relação a uma verdadeira microrrede de concessionária. Uma instalação de backup por bateria doméstica é totalmente independente de qualquer sistema vizinho.' },
          { q: 'Qual a diferença entre um inversor conectado à rede e um híbrido para isso?', a: 'Um inversor apenas conectado à rede desliga durante uma queda de rede por segurança e não fornece energia de backup. Um inversor híbrido com suporte a bateria e comutação de transferência pode isolar os circuitos de backup e continuar alimentando-os — você precisa do segundo para backup em quedas.' },
          { q: 'Devo dimensionar para backup da casa toda ou só o essencial?', a: 'Para a maioria dos orçamentos de bateria doméstica, o backup de circuitos essenciais (geladeira, alguma iluminação, rede) é o alvo realista e econômico — o backup da casa toda exige capacidade de bateria substancialmente maior e um inversor maior, o que é uma conversa de dimensionamento diferente com um instalador.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Gestão local de energia na casa inteligente](/pt/smart-home/local-smart-home-energy-management-2027) — a visão geral que este artigo estende',
          '[Integração Matter para inversores solares e bombas de calor](/pt/smart-home/matter-solar-inverter-heat-pump-integration) — expondo o estado de bateria/inversor ao Home Assistant',
          '[Melhor bateria doméstica de energia solar de varanda (EUA)](/pt/balcony-solar/best-balcony-solar-home-battery-us-2026) — entre clusters: hardware de bateria atual e preços',
          '[Você precisa de uma bateria para energia solar de varanda?](/pt/balcony-solar/do-you-need-a-battery-balcony-solar) — entre clusters: fundamentos de dimensionamento de bateria',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Transformando sua casa em uma microrrede de energia (2027)',
      description: 'Configuração de microrrede energética doméstica em 2027: solar, bateria e automação local para backup em quedas — delimitado ao que o hardware doméstico realmente suporta.',
      url: 'https://www.promptquorum.com/pt/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Backup por bateria doméstica' }, { '@type': 'Thing', name: 'Microrrede solar' }, { '@type': 'Thing', name: 'Automação de queda de energia' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Uma microrrede doméstica é o mesmo que estar fora da rede?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Uma instalação de backup por bateria doméstica continua conectada à rede normalmente e só se isola durante uma queda — é energia de backup, não operação permanente fora da rede.' } },
        { '@type': 'Question', name: 'Preciso de painéis solares para o backup por bateria funcionar?', acceptedAnswer: { '@type': 'Answer', text: 'Não — uma bateria pode ser carregada da rede e usada puramente para backup em quedas sem solar.' } },
        { '@type': 'Question', name: 'É legal instalar isso eu mesmo?', acceptedAnswer: { '@type': 'Answer', text: 'Sistemas de energia de backup que se conectam ao quadro elétrico tipicamente exigem um eletricista licenciado e licença em muitas regiões.' } },
        { '@type': 'Question', name: 'Uma microrrede doméstica se coordena com meus vizinhos?', acceptedAnswer: { '@type': 'Answer', text: 'Não — uma instalação de backup por bateria doméstica é totalmente independente de qualquer sistema vizinho, diferente de uma verdadeira microrrede de concessionária.' } },
        { '@type': 'Question', name: 'Devo dimensionar para backup da casa toda ou só o essencial?', acceptedAnswer: { '@type': 'Answer', text: 'Para a maioria dos orçamentos, o backup de circuitos essenciais é o alvo realista e econômico; o backup da casa toda exige capacidade substancialmente maior.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-ar.webp',
    title: 'تحويل منزلك إلى شبكة طاقة صغيرة (⁨2027⁩)',
    seoTitle: 'إعداد شبكة طاقة منزلية صغيرة (⁨2027⁩)',
    intro:
      'تعني "الشبكة الصغيرة" للطاقة المنزلية بالمعنى الاستهلاكي توليدًا شمسيًا مع تخزين بطارية مع أتمتة محلية يمكنها إبقاء الدوائر الأساسية تعمل أثناء انقطاع الشبكة — وليست شبكة صغيرة معزولة حقيقية بحجم المرافق العامة، وهي مسألة هندسية تجارية مختلفة. يحدد هذا الدليل ما هو قابل للتحقيق واقعيًا باستخدام بطارية منزلية + عاكس + أتمتة Home Assistant، وإلى أين تذهب لمعرفة تفاصيل الأجهزة.',
    metaDescription:
      'إعداد شبكة طاقة منزلية صغيرة في 2027: طاقة شمسية وبطارية وأتمتة محلية للنسخ الاحتياطي عند الانقطاع — محدد بما تدعمه أجهزة المنزل فعليًا.',
    twitterDescription:
      'ما تعنيه "الشبكة الصغيرة المنزلية" فعليًا: طاقة شمسية + بطارية + أتمتة محلية للنسخ الاحتياطي عند الانقطاع، وليس عزلًا بحجم المرافق العامة.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب المنازل الذكية الذين يفكرون في نسخ احتياطي بالبطارية من أجل الاستقلالية عند الانقطاع',
    primaryTerm: 'home energy microgrid',
    targetKeywords: [
      'إعداد شبكة طاقة منزلية صغيرة',
      'أتمتة نسخ احتياطي بطارية للمنزل بالكامل',
      'نسخ احتياطي بطارية منزلية عند الانقطاع',
      'أتمتة نسخ احتياطي طاقة شمسية بطارية',
      'نظام طاقة منزلي معزول',
    ],
    leadAnswerBlock:
      '**"الشبكة الصغيرة المنزلية" الاستهلاكية هي توليد شمسي مع تخزين بطارية مع إعداد نقل تلقائي يبقي الدوائر المختارة تعمل أثناء انقطاع الشبكة — وهي ليست نفسها الشبكة الصغيرة بحجم المرافق العامة، التي تتضمن عزل الشبكة عبر مبانٍ متعددة وتنسيق التوليد، وهو ما لا تقوم به أجهزة المنزل.** حدّد توقعاتك إلى النسخ الاحتياطي للدوائر الأساسية، وليس استقلالية المنزل بالكامل، ما لم تكن سعة بطاريتك وعاكسك مصممتين خصيصًا لذلك.',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني تحويل منزلي إلى شبكة طاقة صغيرة؟',
        answer:
          'بمعنى أجهزة المستهلك، نعم — يمكن للألواح الشمسية والبطارية المنزلية وعاكس متوافق مع التبديل التلقائي إبقاء الدوائر المختارة (الثلاجة، بعض الإضاءة، الإنترنت) تعمل أثناء انقطاع الشبكة. يختلف هذا جوهريًا عن شبكة صغيرة حقيقية بحجم المرافق العامة، والتي تتضمن عزل مبانٍ متعددة عن الشبكة بتوليد منسّق — توفر أجهزة المنزل طاقة احتياطية لدوائرك الخاصة، وليس استقلالية عن الشبكة بذلك المعنى الأوسع. تغطي منتجات البطاريات المنزلية الحالية نطاقًا واسعًا من السعات — بطارية IQ Battery 5P من Enphase مصنّفة بسعة قابلة للاستخدام قدرها 5.0 كيلوواط ساعة، وبطارية Powerwall 3 من Tesla بسعة قابلة للاستخدام قدرها 13.5 كيلوواط ساعة (قابلة للتوسع أكثر مع حزم التوسعة) — لذا طابق حمل دوائرك الأساسية مع ورقة بيانات منتج محدد، لا مع افتراض عام، قبل تحديد حجم النظام.',
        bullets: [
          '"الشبكة الصغيرة" الاستهلاكية = طاقة شمسية + بطارية + تبديل نقل تلقائي لطاقة احتياطية',
          'هذا نسخ احتياطي للدوائر الأساسية، وليس عزلًا حقيقيًا للشبكة بحجم المرافق العامة',
          'تتفاوت سعة البطارية بشكل كبير حسب المنتج — مثل: Enphase IQ Battery 5P: 5.0 كيلوواط ساعة قابلة للاستخدام؛ Tesla Powerwall 3: 13.5 كيلوواط ساعة قابلة للاستخدام، وقابلة للتوسع أكثر — تحقق من ورقة بيانات منتج محدد مقابل حمل دوائرك الأساسية',
          'يمكن لـ Home Assistant أتمتة الدوائر التي تحظى بالأولوية عند التشغيل على البطارية',
          'حدّد نطاق المشروع وفق احتياجاتك الفعلية للنسخ الاحتياطي عند الانقطاع، وليس افتراض استقلالية المنزل بالكامل',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما تعنيه "الشبكة الصغيرة المنزلية" فعليًا', anchor: 'what-it-means' },
      { label: 'تحديد حجم نظام النسخ الاحتياطي', anchor: 'sizing' },
      { label: 'أتمتة أولوية الدوائر', anchor: 'automating-priority' },
      { label: 'ما لا يفعله هذا', anchor: 'limits' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '"الشبكة الصغيرة المنزلية" الاستهلاكية هي طاقة شمسية زائد بطارية زائد تبديل نقل تلقائي للنسخ الاحتياطي للدوائر الأساسية أثناء انقطاع الشبكة — وليست عزلًا للشبكة بحجم المرافق العامة.' },
      { type: 'plain-terms', content: 'يستخدم بعض الناس كلمة "شبكة صغيرة" لوصف منزل به ألواح شمسية وبطارية يمكنها إبقاء الأضواء والثلاجة تعمل عند انقطاع التيار. هذا إعداد حقيقي ومفيد، لكنه يختلف عمّا تعنيه "الشبكة الصغيرة" لشركة مرافق — نظام كهربائي منسّق يخدم مبانٍ متعددة بشكل مستقل عن الشبكة الرئيسية. يتناول هذا المقال النسخة المنزلية: طاقة احتياطية لدوائرك الخاصة، محددة الحجم وممكننة بـ Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'تعني "الشبكة الصغيرة المنزلية" هنا طاقة شمسية + بطارية + تبديل نقل تلقائي للنسخ الاحتياطي عند الانقطاع — وليس عزلًا للشبكة بحجم المرافق العامة',
          'تتفاوت سعة البطارية بشكل كبير حسب المنتج — مثل Enphase IQ Battery 5P (5.0 كيلوواط ساعة قابلة للاستخدام) مقابل Tesla Powerwall 3 (13.5 كيلوواط ساعة قابلة للاستخدام، قابلة للتوسع) — تحقق من ورقة بيانات محددة، لا من رقم عام، مقابل حمل دوائرك الأساسية',
          'الدوائر الأساسية (الثلاجة، بعض الإضاءة، معدات الشبكة/الراوتر) هي النطاق الواقعي للنسخ الاحتياطي لمعظم أحجام البطاريات المنزلية',
          'يمكن لـ Home Assistant أتمتة أولوية تخفيف الحمل عند التشغيل على البطارية، مما يطيل مدة النسخ الاحتياطي',
          'هذا هو الأكثر تكهنًا من بين مقالات الطاقة والشمسية — حدد الادعاءات بحذر وتجنّب الإيحاء بأن استقلالية المنزل بالكامل أمر معتاد',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'ما تعنيه "الشبكة الصغيرة المنزلية" فعليًا',
        content:
          '**في سياق المستهلك/المنزل الذكي، تصف "الشبكة الصغيرة" توليدًا شمسيًا مع تخزين بطارية مع آلية نقل تعزل الدوائر المختارة عن الشبكة أثناء الانقطاع — وليس المعنى الخاص بصناعة المرافق العامة لنظام كهربائي منسّق ومعزول ومتعدد المباني.**',
        items: [
          'تنسّق شبكة صغيرة حقيقية تابعة لمرفق عام التوليد والطلب عبر مبانٍ متعددة أو حي كامل، بأنظمة تحكم مخصصة — هذه هندسة تجارية/خاصة بالمرافق العامة، وليست شيئًا تقوم به أجهزة المنزل.',
          'النسخة المنزلية أضيق نطاقًا: تنفصل طاقتك الشمسية + البطارية + العاكس تلقائيًا عن الشبكة أثناء الانقطاع وتغذي الدوائر التي وصّلتها بنظام النسخ الاحتياطي.',
          'استخدم "الشبكة الصغيرة" هنا بشكل فضفاض لتعني "يمكن لمنزلي العمل بطاقته الخاصة لفترة"، وليس ادعاءً بتنسيق مستقل عن الشبكة عبر مبانٍ متعددة.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: 'تحديد حجم نظام النسخ الاحتياطي',
        content:
          '**عادةً ما تكون سعة البطارية، وليس عدد الألواح الشمسية، هي العامل المحدد لمدة ومقدار ما يمكنك دعمه احتياطيًا أثناء الانقطاع — حدّد الحجم وفق واط حملك الأساسي الفعلي، لا وفق أقصى استهلاك لمنزلك بالكامل.**',
        items: [
          'اذكر دوائرك الأساسية (الثلاجة، بعض الإضاءة، معدات الشبكة، والمعدات الطبية إن وُجدت) وواطها التقريبي المجمّع — هذا هو هدف نسخك الاحتياطي، وليس سعة لوحة منزلك بالكامل.',
          'تغطي سعة البطارية نطاقًا واسعًا حسب المنتج: بطارية IQ Battery 5P من Enphase مصنّفة بسعة قابلة للاستخدام قدرها 5.0 كيلوواط ساعة (وفقًا لورقة بيانات Enphase نفسها)، بينما بطارية Powerwall 3 من Tesla مصنّفة بسعة قابلة للاستخدام قدرها 13.5 كيلوواط ساعة وتتوسع إلى 94.5 كيلوواط ساعة مع حزم توسعة إضافية (وفقًا لورقة بيانات مكتبة الطاقة من Tesla) — هذا يوضح النطاق، وليس توصية بأحدهما على الآخر. لا تُذكر الأسعار عمدًا هنا: يحذف دليل شراء البطاريات الخاص بمجموعة الطاقة الشمسية للشرفة الأسعار للسبب نفسه (حساسة للتعرفة الجمركية، تتغير بشكل كبير) ويوجّه القراء للتحقق من صفحات الشركة المصنّعة أو تاجر التجزئة الحالية وقت الشراء — ينطبق المعيار نفسه هنا.',
          'يلزم عاكس بقدرة تبديل نقل تلقائي لعزل دوائر النسخ الاحتياطي بأمان عن الشبكة أثناء الانقطاع — يختلف هذا عن عاكس متصل بالشبكة فقط، والذي يُغلق أثناء الانقطاع لأسباب أمنية ولا يوفر أي طاقة احتياطية على الإطلاق.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: 'أتمتة أولوية الدوائر',
        content:
          '**يمكن لـ Home Assistant تخفيف الأحمال ذات الأولوية الأدنى تلقائيًا عند التشغيل على البطارية، مما يمدّ مدة تشغيل بطارية محدودة أثناء الانقطاع — يستخدم هذا أنماط الأتمتة نفسها المستخدمة في أمثلة تحويل الحمل في نظرة عامة إدارة الطاقة المحلية.**',
        items: [
          'يمكن لأتمتة يُطلقها حالة "على طاقة البطارية" (متاحة بمجرد أن يكشف دمج العاكس/البطارية لديك عن تلك الحالة — راجع دليل دمج العاكس بمعيار Matter) إيقاف تشغيل المقابس الذكية غير الأساسية تلقائيًا.',
          'رتّب الأولويات حسب الأهمية: أبقِ الثلاجة ومعدات الشبكة على طاقة البطارية، وخفف أي شيء اختياري (الإضاءة غير الأساسية، أجهزة الترفيه) أولًا.',
          'يمدّ هذا مدة تشغيل النسخ الاحتياطي دون الحاجة إلى بطارية أكبر وأغلى ثمنًا — تحل الأتمتة محل السعة إلى حد كبير.',
        ],
      },
      limits: {
        id: 'limits',
        title: 'ما لا يفعله هذا',
        content:
          '**لا يجعل إعداد النسخ الاحتياطي بالبطارية المنزلية منزلك مستقلًا عن الشبكة على المدى الطويل، ولا ينسّق مع أنظمة الجيران، وعادةً لا يستطيع تشغيل أحمال التدفئة/التبريد للمنزل بالكامل خلال انقطاعات طويلة.**',
        items: [
          'معظم أنظمة البطاريات المنزلية مصممة لساعات إلى نحو يوم واحد من النسخ الاحتياطي للدوائر الأساسية، وليس للتشغيل غير المحدود خارج الشبكة — تعتمد مدة التشغيل الفعلية كليًا على سعة بطاريتك المحددة (والتي تغطي نطاقًا واسعًا عبر المنتجات، من نحو 5 كيلوواط ساعة قابلة للاستخدام في وحدة واحدة إلى 13.5 كيلوواط ساعة وما فوق مع حزم التوسعة، وفقًا لأوراق بيانات الشركات المصنّعة) مقابل واط دوائرك الأساسية الفعلي، وليس افتراضًا عامًا لعدة أيام للمنزل بالكامل.',
          'لا يتصل هذا الإعداد أو ينسّق مع نظام أحد الجيران — النسخ الاحتياطي لكل منزل مستقل، على عكس شبكة صغيرة حقيقية تابعة لمرفق عام.',
          'عادةً ما تُستبعد الأحمال عالية الاستهلاك مثل التكييف المركزي أو التدفئة الكهربائية من قائمة الدوائر المدعومة احتياطيًا ما لم تكن البطارية والعاكس مصممتين خصيصًا لها — تحقق من توصية التحجيم لدى مثبِّتك بدلًا من الافتراض.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل الشبكة الصغيرة المنزلية هي نفسها الانفصال عن الشبكة؟', a: 'لا. يظل إعداد النسخ الاحتياطي بالبطارية المنزلية متصلًا بالشبكة بشكل طبيعي ولا يُعزل إلا أثناء الانقطاع أو عند الطلب — إنها طاقة احتياطية، وليست تشغيلًا دائمًا خارج الشبكة.' },
          { q: 'كم من الوقت يمكن لبطارية منزلية أن تدعم منزلي احتياطيًا؟', a: 'يعتمد هذا كليًا على سعة البطارية مقابل حمل دوائرك الأساسية، وتتفاوت السعة بشكل كبير حسب المنتج — بطارية IQ Battery 5P من Enphase مصنّفة بسعة قابلة للاستخدام قدرها 5.0 كيلوواط ساعة، وبطارية Powerwall 3 من Tesla بسعة قابلة للاستخدام قدرها 13.5 كيلوواط ساعة (قابلة للتوسع أكثر مع حزم التوسعة)، وفقًا لورقة بيانات كل شركة مصنّعة. استشر حساب التحجيم لدى مثبِّت للدوائر المحددة لديك بدلًا من افتراض مدة ثابتة.' },
          { q: 'هل أحتاج ألواحًا شمسية حتى يعمل النسخ الاحتياطي بالبطارية؟', a: 'لا — يمكن شحن البطارية من الشبكة واستخدامها فقط للنسخ الاحتياطي عند الانقطاع دون طاقة شمسية، رغم أن اقترانها بالطاقة الشمسية يتيح للبطارية إعادة الشحن أثناء انقطاع يستمر لعدة أيام إذا توفر ضوء النهار.' },
          { q: 'هل يمكن لـ Home Assistant التحكم في الدوائر التي تبقى قيد التشغيل أثناء الانقطاع؟', a: 'يمكن لـ Home Assistant أتمتة أي أحمال يتحكم فيها مقبس ذكي يتم تخفيفها أولًا بمجرد أن يبلّغ دمج العاكس/البطارية لديك عن حالة "على طاقة البطارية"، لكن أي الدوائر موصولة فعليًا بلوحة النسخ الاحتياطي هو قرار كهربائي يُتخذ أثناء التركيب، وليس شيئًا يغيّره البرنامج لاحقًا.' },
          { q: 'هل تركيب هذا بنفسي أمر قانوني؟', a: 'تتطلب أنظمة الطاقة الاحتياطية التي تتصل بلوحة الكهرباء في منزلك عادةً كهربائيًا مرخصًا، وفي العديد من المناطق، إخطار شركة المرافق أو الحصول على تصريح — هذا ليس مشروع "افعلها بنفسك" على مستوى المقبس الذكي.' },
          { q: 'هل تنسّق الشبكة الصغيرة المنزلية مع جيراني؟', a: 'لا — هذا أحد الفروق الرئيسية عن شبكة صغيرة حقيقية تابعة لمرفق عام. إعداد النسخ الاحتياطي بالبطارية المنزلية مستقل تمامًا عن أي نظام مجاور.' },
          { q: 'ما الفرق بين عاكس متصل بالشبكة وعاكس هجين لهذا الغرض؟', a: 'يُغلق العاكس المتصل بالشبكة فقط أثناء انقطاع الشبكة لأسباب أمنية ولا يوفر أي طاقة احتياطية. يمكن لعاكس هجين يدعم البطارية والتبديل عزل دوائر النسخ الاحتياطي ومواصلة تغذيتها — تحتاج إلى الأخير للنسخ الاحتياطي عند الانقطاع.' },
          { q: 'هل يجب أن أحدد الحجم للنسخ الاحتياطي للمنزل بالكامل أم للأساسيات فقط؟', a: 'بالنسبة لمعظم ميزانيات البطاريات المنزلية، يُعد النسخ الاحتياطي للدوائر الأساسية (الثلاجة، بعض الإضاءة، الشبكة) الهدف الواقعي والفعّال من حيث التكلفة — يتطلب النسخ الاحتياطي للمنزل بالكامل سعة بطارية أكبر بكثير وعاكسًا أكبر، وهذا حديث تحجيم مختلف مع المثبِّت.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[إدارة الطاقة المحلية في المنزل الذكي](/ar/smart-home/local-smart-home-energy-management-2027) — النظرة العامة التي يمتد منها هذا المقال',
          '[دمج Matter للعاكسات الشمسية ومضخات الحرارة](/ar/smart-home/matter-solar-inverter-heat-pump-integration) — كشف حالة البطارية/العاكس لـ Home Assistant',
          '[أفضل بطارية منزلية للطاقة الشمسية للشرفة (الولايات المتحدة)](/ar/balcony-solar/best-balcony-solar-home-battery-us-2026) — عبر المجموعات: أجهزة البطارية الحالية والأسعار',
          '[هل تحتاج بطارية للطاقة الشمسية للشرفة؟](/ar/balcony-solar/do-you-need-a-battery-balcony-solar) — عبر المجموعات: أساسيات تحديد حجم البطارية',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تحويل منزلك إلى شبكة طاقة صغيرة (⁨2027⁩)',
      description: 'إعداد شبكة طاقة منزلية صغيرة في 2027: طاقة شمسية وبطارية وأتمتة محلية للنسخ الاحتياطي عند الانقطاع — محدد بما تدعمه أجهزة المنزل فعليًا.',
      url: 'https://www.promptquorum.com/ar/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'النسخ الاحتياطي بالبطارية المنزلية' }, { '@type': 'Thing', name: 'الشبكة الصغيرة الشمسية' }, { '@type': 'Thing', name: 'أتمتة الانقطاع' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل الشبكة الصغيرة المنزلية هي نفسها الانفصال عن الشبكة؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. يظل إعداد النسخ الاحتياطي بالبطارية المنزلية متصلًا بالشبكة بشكل طبيعي ولا يُعزل إلا أثناء الانقطاع — إنها طاقة احتياطية، وليست تشغيلًا دائمًا خارج الشبكة.' } },
        { '@type': 'Question', name: 'هل أحتاج ألواحًا شمسية حتى يعمل النسخ الاحتياطي بالبطارية؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — يمكن شحن البطارية من الشبكة واستخدامها فقط للنسخ الاحتياطي عند الانقطاع دون طاقة شمسية.' } },
        { '@type': 'Question', name: 'هل تركيب هذا بنفسي أمر قانوني؟', acceptedAnswer: { '@type': 'Answer', text: 'تتطلب أنظمة الطاقة الاحتياطية المتصلة بلوحة الكهرباء عادةً كهربائيًا مرخصًا وتصريحًا في العديد من المناطق.' } },
        { '@type': 'Question', name: 'هل تنسّق الشبكة الصغيرة المنزلية مع جيراني؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — إعداد النسخ الاحتياطي بالبطارية المنزلية مستقل تمامًا عن أي نظام مجاور، على عكس شبكة صغيرة حقيقية تابعة لمرفق عام.' } },
        { '@type': 'Question', name: 'هل يجب أن أحدد الحجم للنسخ الاحتياطي للمنزل بالكامل أم للأساسيات فقط؟', acceptedAnswer: { '@type': 'Answer', text: 'بالنسبة لمعظم الميزانيات، يُعد النسخ الاحتياطي للدوائر الأساسية الهدف الواقعي والفعّال من حيث التكلفة؛ يتطلب النسخ الاحتياطي للمنزل بالكامل سعة أكبر بكثير.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-as-energy-microgrid-2027-overview-hero-ko.webp',
    title: '집을 에너지 마이크로그리드로 만들기 (2027년)',
    seoTitle: '가정용 에너지 마이크로그리드 구축 (2027년)',
    intro:
      '소비자 관점에서 가정용 에너지 "마이크로그리드"란 태양광 발전에 배터리 저장, 그리고 정전 시 필수 회로를 계속 작동시킬 수 있는 로컬 자동화를 결합한 것을 의미합니다 — 이는 상업 규모의 다른 공학적 과제인 진정한 계통 분리형 전력회사급 마이크로그리드와는 다릅니다. 이 가이드는 가정용 배터리 + 인버터 + Home Assistant 자동화로 현실적으로 달성할 수 있는 것의 범위를 정하고, 하드웨어 세부 사항은 어디서 확인해야 하는지 안내합니다.',
    metaDescription:
      '2027년 가정용 에너지 마이크로그리드 구축: 정전 시 백업을 위한 태양광, 배터리, 로컬 자동화 — 가정용 하드웨어가 실제로 지원하는 범위로 한정.',
    twitterDescription:
      '"가정용 마이크로그리드"가 실제로 의미하는 것: 정전 백업을 위한 태양광 + 배터리 + 로컬 자동화이지, 전력회사급 계통 분리가 아님.',
    readTime: '7분 소요',
    educationalLevel: 'Intermediate',
    audience: '정전 시 독립성을 위해 배터리 백업을 고려 중인 스마트홈 소유자',
    primaryTerm: '가정 에너지 마이크로그리드',
    targetKeywords: [
      '가정용 에너지 마이크로그리드 구축',
      '전체 가정 배터리 백업 자동화',
      '가정용 배터리 정전 백업',
      '태양광 배터리 백업 자동화',
      '계통 분리 가정용 전력 시스템',
    ],
    leadAnswerBlock:
      '**소비자용 "가정용 마이크로그리드"는 태양광 발전에 배터리 저장, 그리고 정전 시 선택한 회로를 계속 작동시키는 자동 전환 설정을 결합한 것입니다 — 이는 여러 건물에 걸친 계통 분리와 발전 조정을 포함하는 전력회사급 마이크로그리드와는 다르며, 가정용 하드웨어는 그런 일을 하지 않습니다.** 배터리 용량과 인버터가 특별히 그것을 위해 설계된 것이 아니라면, 기대치를 필수 회로 백업으로 한정하고 전체 가정 독립을 기대하지 마세요.',
    quickAnswerTop: {
      ko: {
        question: '내 집을 에너지 마이크로그리드로 만들 수 있나요?',
        answer:
          '소비자용 하드웨어 측면에서는 가능합니다 — 태양광 패널, 가정용 배터리, 자동 전환 스위칭을 지원하는 호환 인버터가 있으면 정전 시 선택한 회로(냉장고, 일부 조명, 인터넷)를 계속 작동시킬 수 있습니다. 이는 여러 건물을 계통에서 분리하고 발전을 조정하는 진정한 전력회사급 마이크로그리드와는 근본적으로 다릅니다 — 가정용 하드웨어는 그 더 넓은 의미의 계통 독립성이 아니라 자신의 회로를 위한 백업 전력을 제공합니다. 현재 가정용 배터리 제품은 용량 범위가 넓습니다 — Enphase의 IQ Battery 5P는 실사용 용량 5.0kWh로 정격되어 있고, Tesla의 Powerwall 3는 실사용 용량 13.5kWh로 정격되어 있습니다(확장 팩으로 더 늘릴 수 있음) — 그러니 시스템 규모를 정하기 전에 일반적인 가정이 아니라 특정 제품의 데이터시트에 맞춰 필수 회로 부하를 맞춰보세요.',
        bullets: [
          '소비자용 "마이크로그리드" = 백업 전력을 위한 태양광 + 배터리 + 자동 전환 스위칭',
          '이는 필수 회로 백업이지, 진정한 전력회사급 계통 분리가 아님',
          '배터리 용량은 제품에 따라 크게 다름 — 예: Enphase IQ Battery 5P: 실사용 용량 5.0kWh; Tesla Powerwall 3: 실사용 용량 13.5kWh, 더 확장 가능 — 일반적인 수치가 아니라 특정 제품의 데이터시트를 필수 회로 부하와 대조할 것',
          'Home Assistant는 배터리로 작동할 때 어떤 회로가 우선순위를 갖는지 자동화할 수 있음',
          '프로젝트 범위를 실제 정전 백업 필요성으로 한정하고, 전체 가정 독립이라는 가정을 두지 말 것',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '"가정용 마이크로그리드"가 실제로 의미하는 것', anchor: 'what-it-means' },
      { label: '백업 시스템 규모 정하기', anchor: 'sizing' },
      { label: '회로 우선순위 자동화하기', anchor: 'automating-priority' },
      { label: '이것이 할 수 없는 것', anchor: 'limits' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '소비자용 "가정용 마이크로그리드"는 정전 시 필수 회로 백업을 위한 태양광 더하기 배터리 더하기 자동 전환 스위칭이지, 전력회사급 계통 분리가 아닙니다.' },
      { type: 'plain-terms', content: '어떤 사람들은 "마이크로그리드"라는 말을 정전 시 조명과 냉장고를 계속 켜둘 수 있는 태양광 패널과 배터리를 갖춘 집을 설명하는 데 사용합니다. 이는 실제로 유용한 구성이지만, 전력회사에게 "마이크로그리드"가 의미하는 것 — 주 계통과 독립적으로 여러 건물에 전력을 공급하는 조정된 전력 시스템 — 과는 다릅니다. 이 글은 가정용 버전, 즉 Home Assistant로 규모를 정하고 자동화한, 자신의 회로를 위한 백업 전력을 다룹니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '여기서 "가정용 마이크로그리드"란 정전 백업을 위한 태양광 + 배터리 + 자동 전환 스위칭을 의미하며, 전력회사급 계통 분리가 아님',
          '배터리 용량은 제품에 따라 상당히 다름 — 예: Enphase IQ Battery 5P(실사용 용량 5.0kWh) 대 Tesla Powerwall 3(실사용 용량 13.5kWh, 확장 가능) — 일반적인 수치가 아니라 특정 데이터시트를 필수 회로 부하와 대조할 것',
          '필수 회로(냉장고, 일부 조명, 네트워킹/라우터)가 대부분의 가정용 배터리 크기에 대해 현실적인 백업 범위임',
          'Home Assistant는 배터리로 작동할 때 부하 차단 우선순위를 자동화해 백업 지속 시간을 늘릴 수 있음',
          '이는 에너지 & 태양광 시리즈 중 가장 추측성이 강한 글입니다 — 주장을 보수적으로 한정하고 전체 가정 독립이 일반적이라는 암시를 피할 것',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '"가정용 마이크로그리드"가 실제로 의미하는 것',
        content:
          '**소비자/스마트홈 맥락에서 "마이크로그리드"는 정전 시 선택한 회로를 계통에서 분리하는 전환 메커니즘과 결합된 태양광 발전과 배터리 저장을 설명합니다 — 조정되고 여러 건물에 걸친 계통 분리 전력 시스템이라는 전력 업계의 의미가 아닙니다.**',
        items: [
          '진정한 전력회사 마이크로그리드는 전용 제어 시스템으로 여러 건물이나 동네 전체에 걸쳐 발전과 수요를 조정합니다 — 이는 상업/전력회사 공학이며, 가정용 하드웨어가 하는 일이 아닙니다.',
          '가정용 버전은 더 좁습니다: 태양광 + 배터리 + 인버터가 정전 시 자동으로 계통에서 분리되고, 백업 시스템에 배선한 회로에 전력을 공급합니다.',
          '여기서 "마이크로그리드"는 "우리 집이 한동안 자체 전력으로 운영될 수 있다"는 느슨한 의미로 사용하는 것이지, 계통에서 독립된 여러 건물 간 조정을 주장하는 것이 아닙니다.',
        ],
      },
      sizing: {
        id: 'sizing',
        title: '백업 시스템 규모 정하기',
        content:
          '**태양광 패널 개수가 아니라 배터리 용량이 보통 정전 시 얼마나 오래, 얼마나 많이 백업할 수 있는지를 결정하는 제한 요소입니다 — 전체 가정의 최대 전력 소비량이 아니라 실제 필수 부하의 와트수를 기준으로 규모를 정하세요.**',
        items: [
          '필수 회로(냉장고, 일부 조명, 네트워킹 장비, 해당하는 경우 의료 장비)와 그 대략적인 합산 와트수를 나열하세요 — 이것이 백업 목표이지, 전체 가정 분전반 용량이 아닙니다.',
          '배터리 용량은 제품별로 넓은 범위를 보입니다: Enphase의 IQ Battery 5P는 실사용 용량 5.0kWh로 정격되어 있고(Enphase 자체 데이터시트 기준), Tesla의 Powerwall 3는 실사용 용량 13.5kWh로 정격되어 있으며 추가 확장 팩으로 94.5kWh까지 확장됩니다(Tesla의 Energy Library 데이터시트 기준) — 이는 어느 한쪽을 추천하는 것이 아니라 그 범위를 보여주는 것입니다. 가격은 여기서 의도적으로 인용하지 않습니다: 발코니 태양광 클러스터 자체의 배터리 구매 가이드도 같은 이유(관세에 민감하고 크게 변동함)로 가격을 생략하고, 독자들에게 구매 시점에 현재의 제조사나 소매업체 페이지를 확인하도록 안내합니다 — 같은 기준이 여기에도 적용됩니다.',
          '정전 시 백업 회로를 계통에서 안전하게 분리하려면 자동 전환 스위치 기능을 갖춘 인버터가 필요합니다 — 이는 안전을 위해 정전 시 꺼지고 백업 전력을 전혀 제공하지 않는 계통 연계 전용 인버터와는 다릅니다.',
        ],
      },
      automatingPriority: {
        id: 'automating-priority',
        title: '회로 우선순위 자동화하기',
        content:
          '**Home Assistant는 배터리로 작동할 때 우선순위가 낮은 부하를 자동으로 차단해 정전 시 제한된 배터리의 가동 시간을 늘릴 수 있습니다 — 이는 로컬 에너지 관리 개요의 부하 이동 예시와 동일한 자동화 패턴을 사용합니다.**',
        items: [
          '"배터리 전원 사용 중" 상태에 의해 트리거되는 자동화(인버터/배터리 연동이 그 상태를 노출하면 사용 가능 — Matter 인버터 연동 가이드 참고)는 비필수 스마트 플러그를 자동으로 끌 수 있습니다.',
          '중요도에 따라 우선순위를 매기세요: 냉장고와 네트워킹 장비는 배터리 전원에 유지하고, 재량적인 것(비필수 조명, 엔터테인먼트 기기)을 먼저 차단하세요.',
          '이는 더 크고 비싼 배터리 없이도 백업 가동 시간을 늘려줍니다 — 자동화가 상당한 정도로 용량을 대체합니다.',
        ],
      },
      limits: {
        id: 'limits',
        title: '이것이 할 수 없는 것',
        content:
          '**가정용 배터리 백업 설정은 장기적으로 집을 계통에서 독립시키지 않고, 이웃의 시스템과 조정되지 않으며, 일반적으로 장시간 정전 동안 전체 가정의 냉난방 부하를 감당할 수 없습니다.**',
        items: [
          '대부분의 가정용 배터리 시스템은 무기한 오프그리드 운영이 아니라 몇 시간에서 대략 하루 정도의 필수 회로 백업에 맞게 설계되어 있습니다 — 실제 가동 시간은 전적으로 특정 배터리의 용량(제조사 데이터시트에 따라 단일 유닛에서 실사용 용량 약 5kWh부터 확장 팩으로 13.5kWh 이상까지 제품별로 범위가 넓음)이 실제 필수 회로 와트수 대비 어느 정도인지에 달려 있으며, 며칠에 걸친 전체 가정용이라는 일반적인 가정이 아닙니다.',
          '이 설정은 이웃의 시스템에 연결되거나 조정되지 않습니다 — 진정한 전력회사 마이크로그리드와 달리 각 가정의 백업은 독립적입니다.',
          '중앙 냉방이나 전기 난방 같은 고부하 부하는 배터리와 인버터가 특별히 그것을 위해 설계되지 않는 한 일반적으로 백업 회로 목록에서 제외됩니다 — 가정하지 말고 설치업체의 규모 권장 사항을 확인하세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '가정용 마이크로그리드는 오프그리드와 같은 것인가요?', a: '아닙니다. 가정용 배터리 백업 설정은 평소에는 계통에 정상적으로 연결되어 있으며 정전 시나 필요시에만 분리됩니다 — 이는 백업 전력이지, 영구적인 오프그리드 운영이 아닙니다.' },
          { q: '가정용 배터리는 우리 집을 얼마나 오래 백업할 수 있나요?', a: '이는 전적으로 배터리 용량 대 필수 회로 부하에 달려 있으며, 용량은 제품에 따라 크게 다릅니다 — 각 제조사 자체 데이터시트에 따르면 Enphase의 IQ Battery 5P는 실사용 용량 5.0kWh, Tesla의 Powerwall 3는 실사용 용량 13.5kWh(확장 팩으로 더 확장 가능)로 정격되어 있습니다. 고정된 지속 시간을 가정하지 말고 특정 회로에 대한 설치업체의 규모 계산을 확인하세요.' },
          { q: '배터리 백업이 작동하려면 태양광 패널이 필요한가요?', a: '아니요 — 배터리는 계통에서 충전되어 태양광 없이 순전히 정전 백업용으로 사용할 수 있지만, 태양광과 결합하면 며칠에 걸친 정전 시 낮 동안 배터리를 재충전할 수 있습니다.' },
          { q: 'Home Assistant가 정전 시 어떤 회로가 켜져 있을지 제어할 수 있나요?', a: '인버터/배터리 연동이 "배터리 전원 사용 중" 상태를 보고하면 Home Assistant는 어떤 스마트 플러그 제어 부하가 먼저 차단될지 자동화할 수 있지만, 어떤 회로가 물리적으로 백업 패널에 배선되어 있는지는 설치 중에 내리는 전기적 결정이지 나중에 소프트웨어가 바꿀 수 있는 것이 아닙니다.' },
          { q: '이것을 직접 설치해도 합법인가요?', a: '집의 배전반에 연결되는 백업 전원 시스템은 일반적으로 유자격 전기 기술자가 필요하며, 많은 지역에서 전력회사 통지나 허가가 필요합니다 — 이는 스마트 플러그 수준의 DIY 프로젝트가 아닙니다.' },
          { q: '가정용 마이크로그리드가 이웃과 조정되나요?', a: '아니요 — 이는 진정한 전력회사 마이크로그리드와의 주요 차이점 중 하나입니다. 가정용 배터리 백업 설정은 어떤 이웃 시스템으로부터도 완전히 독립적입니다.' },
          { q: '계통 연계형과 하이브리드 인버터의 차이는 무엇인가요?', a: '계통 연계 전용 인버터는 안전을 위해 정전 시 꺼지며 백업 전력을 전혀 제공하지 않습니다. 배터리와 전환 스위치를 지원하는 하이브리드 인버터는 백업 회로를 분리하고 계속 전력을 공급할 수 있습니다 — 정전 백업에는 후자가 필요합니다.' },
          { q: '전체 가정 백업으로 규모를 정해야 하나요, 아니면 필수 항목만으로 해야 하나요?', a: '대부분의 가정용 배터리 예산에서는 필수 회로 백업(냉장고, 일부 조명, 네트워킹)이 현실적이고 비용 효율적인 목표입니다 — 전체 가정 백업은 상당히 더 많은 배터리 용량과 더 큰 인버터가 필요하며, 이는 설치업체와 별도로 논의해야 할 규모 결정 사항입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 스마트홈 에너지 관리](/ko/smart-home/local-smart-home-energy-management-2027) — 이 글이 확장하는 개요',
          '[태양광 인버터와 히트펌프를 위한 Matter 연동](/ko/smart-home/matter-solar-inverter-heat-pump-integration) — 배터리/인버터 상태를 Home Assistant에 노출하기',
          '[최고의 발코니 태양광 가정용 배터리(미국)](/ko/balcony-solar/best-balcony-solar-home-battery-us-2026) — 클러스터 간: 현재 배터리 하드웨어와 가격',
          '[발코니 태양광에 배터리가 필요한가요?](/ko/balcony-solar/do-you-need-a-battery-balcony-solar) — 클러스터 간: 배터리 규모 결정 기초',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '집을 에너지 마이크로그리드로 만들기 (2027년)',
      description: '2027년 가정용 에너지 마이크로그리드 구축: 정전 시 백업을 위한 태양광, 배터리, 로컬 자동화 — 가정용 하드웨어가 실제로 지원하는 범위로 한정.',
      url: 'https://www.promptquorum.com/ko/smart-home/home-as-energy-microgrid-2027',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '가정용 배터리 백업' }, { '@type': 'Thing', name: '태양광 마이크로그리드' }, { '@type': 'Thing', name: '정전 자동화' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '가정용 마이크로그리드는 오프그리드와 같은 것인가요?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 가정용 배터리 백업 설정은 평소에는 계통에 정상적으로 연결되어 있으며 정전 시에만 분리됩니다 — 이는 백업 전력이지, 영구적인 오프그리드 운영이 아닙니다.' } },
        { '@type': 'Question', name: '배터리 백업이 작동하려면 태양광 패널이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 배터리는 계통에서 충전되어 태양광 없이 순전히 정전 백업용으로 사용할 수 있습니다.' } },
        { '@type': 'Question', name: '이것을 직접 설치해도 합법인가요?', acceptedAnswer: { '@type': 'Answer', text: '배전반에 연결되는 백업 전원 시스템은 일반적으로 유자격 전기 기술자와 많은 지역에서 허가가 필요합니다.' } },
        { '@type': 'Question', name: '가정용 마이크로그리드가 이웃과 조정되나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 가정용 배터리 백업 설정은 진정한 전력회사 마이크로그리드와 달리 어떤 이웃 시스템으로부터도 완전히 독립적입니다.' } },
        { '@type': 'Question', name: '전체 가정 백업으로 규모를 정해야 하나요, 아니면 필수 항목만으로 해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '대부분의 예산에서는 필수 회로 백업이 현�적이고 비용 효율적인 목표입니다; 전체 가정 백업은 상당히 더 많은 용량이 필요합니다.' } },
      ],
    },
  },
}
