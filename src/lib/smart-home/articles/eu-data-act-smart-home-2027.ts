import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-en.png',
    title: 'The EU Data Act and Your Smart Home (2027)',
    seoTitle: 'EU Data Act: Smart Home Guide (2027)',
    // Verified 2026-07-16 against the European Commission's own Data Act pages
    // (digital-strategy.ec.europa.eu/en/policies/data-act and .../en/factpages/data-act-explained).
    // Legal basis: the data-access-and-portability obligation this article describes is Chapter II
    // of Regulation (EU) 2023/2854 (Articles 3-5 — obligation to make data available by design and
    // default, user access right, right to share with third parties), NOT Article 33 (which covers
    // interoperability requirements for data spaces and data-sharing services — a different, narrower
    // provision unrelated to the individual device-owner right described here).
    intro:
      'The EU Data Act (Regulation (EU) 2023/2854) creates data-access and portability rights for users of connected devices under Chapter II, separate from GDPR\'s personal-data-processing rules — it addresses whether you can get your device\'s generated data out and share it with a different service, not how your personal data is processed. Its main obligations have applied since September 12, 2025, and it explicitly covers consumer smart-home devices as "connected products." This article explains the distinction from GDPR and what to watch for as an EU smart home owner.',
    metaDescription:
      "The EU Data Act's implications for smart home devices in the EU: data portability rights (in force since Sept 12, 2025), distinct from GDPR.",
    twitterDescription:
      "The EU Data Act and smart home devices: data portability rights, and how this differs from GDPR's personal-data rules.",
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'EU-based smart home owners and buyers wanting to understand new device-data regulation',
    primaryTerm: 'eu data act smart home',
    targetKeywords: [
      'eu data act smart home',
      'data act connected devices',
      'eu data act vs gdpr',
      'smart home data portability eu',
      'connected device data rights eu',
    ],
    leadAnswerBlock:
      "**The EU Data Act (Chapter II, Articles 3-5) gives users of connected devices rights to access the data their device generates and to have it shared with third parties of their choosing — a data-portability and access right, distinct from GDPR's rules on how personal data is processed.** Its main obligations have applied since September 12, 2025, and smart-home devices are explicitly in scope.",
    quickAnswerTop: {
      en: {
        question: 'What does the EU Data Act mean for my smart home devices?',
        answer:
          "The EU Data Act has given you the right, since September 12, 2025, to access the data your connected devices generate and direct it to a different service provider — for example, sharing your smart thermostat's usage data with a competing energy-management app instead of only the manufacturer's own service. This is separate from GDPR, which governs how personal data is processed rather than data portability between services. Smart-home devices are explicitly named as in-scope \"connected products\" under the regulation.",
        bullets: [
          "Data Act = data access/portability rights for connected-device data",
          'GDPR = separate regulation governing personal-data processing — the two address different questions',
          'In force since September 12, 2025; smart-home devices are explicitly in scope',
          'Relevant mainly if you want to move data between services (e.g., energy monitoring) rather than stay with one manufacturer\'s app',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Data Act vs GDPR', anchor: 'data-act-vs-gdpr' },
      { label: 'What This Could Mean for Smart Home Data', anchor: 'what-it-means' },
      { label: 'What to Check Before Relying on This', anchor: 'what-to-check' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The EU Data Act creates data-access and portability rights for connected-device data, distinct from GDPR\'s personal-data-processing rules.' },
      { type: 'plain-terms', content: 'GDPR is about protecting your personal information and how companies use it. The Data Act is a different, newer EU rule about whether you can get the data your smart devices produce and hand it to a different company or app instead of being stuck with only the manufacturer\'s own service.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The EU Data Act addresses data access/portability for connected devices — a different question from GDPR\'s personal-data-processing rules',
          "It's aimed at letting you direct your device's generated data to a third-party service, not just the manufacturer's own app",
          'Main obligations have applied since September 12, 2025; smart-home devices are explicitly named as in-scope "connected products" alongside connected cars and health monitors',
          "This article is a general orientation, not legal advice — for a specific compliance question, consult the EU's official Data Act resources or a qualified advisor",
          "See the GDPR-focused smart home guide already on this site for personal-data-processing questions",
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'Data Act vs GDPR',
        content:
          "**GDPR governs how personal data is processed, stored, and protected; the Data Act governs access to and portability of the data a connected device generates — the two regulations address related but distinct questions.**",
        items: [
          "GDPR question: is my personal data (name, voice recordings, camera footage) being processed lawfully, and can I access/delete it?",
          "Data Act question: can I get the raw data my device generates (e.g., a thermostat's usage logs) and direct it to a different service, not just the manufacturer's own app?",
          'A device can be fully GDPR-compliant while still limiting data portability under the older rules the Data Act is meant to address — the two obligations are additive, not substitutes for each other.',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'What This Could Mean for Smart Home Data',
        content:
          '**For a local-first smart home owner, the practical relevance is mainly around devices that still rely on a manufacturer cloud service — Data Act-style portability rights could make it easier to redirect that data locally or to a third-party service instead.**',
        items: [
          'If you already run a local-first setup (Home Assistant, local storage, no cloud dependency), you may see less direct benefit since your data already stays local rather than needing a portability right to extract it from a manufacturer.',
          'The more relevant case is hybrid devices that still report some data to a manufacturer cloud service even in a mostly-local setup — portability rights are about that data specifically.',
          'The obligation has been legally in force since September 12, 2025, but this article does not track manufacturer-by-manufacturer compliance — check a specific device\'s current documentation rather than assuming broad industry-wide changes have already rolled out just because the deadline has passed.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'What to Check Before Relying on This',
        content:
          "**This article is a general orientation to the Data Act's relevance to smart homes — for a specific compliance question or legal determination, check the EU's official current guidance rather than relying on this summary alone.**",
        items: [
          'Main obligations have applied since September 12, 2025 (per the European Commission\'s own Data Act pages) — this is already in force, not a future deadline. One related sub-deadline is still pending: full removal of cloud/data-processing-service switching charges by January 12, 2027.',
          'Smart-home devices are explicitly named as an in-scope "connected product" category by the European Commission\'s own guidance, alongside connected cars, health monitoring devices, and industrial equipment — check a specific device\'s own documentation for how its manufacturer has implemented the obligation, since the Commission\'s guidance confirms scope, not per-device compliance.',
          "If you're a manufacturer or run a business handling smart home data, this article is not a substitute for qualified legal advice specific to your situation.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is the EU Data Act the same as GDPR?', a: 'No — GDPR governs personal-data processing; the Data Act governs data access and portability for connected devices. They are separate regulations addressing different questions.' },
          { q: 'Does the Data Act apply outside the EU?', a: 'It is EU regulation, so its direct legal requirements target companies operating in or serving the EU market, not a global mandate. If you buy or use a connected device within the EU market, the obligation applies regardless of where the manufacturer is headquartered.' },
          { q: 'Does this mean I can force my smart thermostat manufacturer to share my data with a competitor?', a: 'Yes, in principle — since September 12, 2025, EU data holders must let users share device-generated data with a third party of their choosing (either directly or by asking the manufacturer to send it), with an exception for Digital Markets Act "gatekeeper" companies as recipients. Whether a specific manufacturer has actually implemented this smoothly for a specific device is a separate question from whether the legal right exists — check that device\'s current documentation.' },
          { q: 'Does a local-first smart home need to worry about the Data Act?', a: 'Less directly — if your setup already keeps data local via Home Assistant rather than a manufacturer cloud service, portability rights matter less since there\'s no cloud silo to extract data from in the first place.' },
          { q: 'Where can I find the official current text of the Data Act?', a: 'Check the European Union\'s official legislative publications directly — this article is a general orientation, not a legal reference.' },
          { q: 'Does this affect the private-smart-home-GDPR guide already on this site?', a: 'No — that guide covers GDPR compliance (personal data processing) specifically. This article covers a separate, newer regulation about data portability.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Building a GDPR-Friendly Private Smart Home (EU)](/smart-home/private-smart-home-gdpr) — the related but distinct personal-data regulation',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the broader privacy context',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the local-first alternative to cloud data dependency',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'The EU Data Act and Your Smart Home (2027)',
      description: "The EU Data Act's implications for smart home devices in the EU: data portability rights, distinct from GDPR.",
      url: 'https://www.promptquorum.com/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'EU Data Act' }, { '@type': 'Thing', name: 'Data portability' }, { '@type': 'Thing', name: 'Smart home regulation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is the EU Data Act the same as GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'No — GDPR governs personal-data processing; the Data Act governs data access and portability for connected devices.' } },
        { '@type': 'Question', name: 'Does a local-first smart home need to worry about the Data Act?', acceptedAnswer: { '@type': 'Answer', text: 'Less directly — if your setup already keeps data local via Home Assistant, portability rights matter less since there\'s no cloud silo to extract data from.' } },
        { '@type': 'Question', name: 'Where can I find the official current text of the Data Act?', acceptedAnswer: { '@type': 'Answer', text: 'Check the European Union\'s official legislative publications directly.' } },
        { '@type': 'Question', name: 'Does this affect the private-smart-home-GDPR guide already on this site?', acceptedAnswer: { '@type': 'Answer', text: 'No — that guide covers GDPR compliance specifically. This article covers a separate, newer regulation about data portability.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-de.png',
    title: 'Der EU Data Act und dein Smart Home (2027)',
    seoTitle: 'EU Data Act: Smart-Home-Leitfaden (2027)',
    intro:
      'Der EU Data Act (Verordnung (EU) 2023/2854) schafft in Kapitel II Datenzugangs- und Portabilitätsrechte für Nutzer vernetzter Geräte, getrennt von den Regeln der DSGVO zur Verarbeitung personenbezogener Daten — er regelt, ob du die von deinem Gerät erzeugten Daten herausbekommen und mit einem anderen Dienst teilen kannst, nicht wie deine personenbezogenen Daten verarbeitet werden. Seine Hauptpflichten gelten seit dem 12. September 2025 und er erfasst ausdrücklich Smart-Home-Geräte für Verbraucher als „vernetzte Produkte". Dieser Artikel erklärt den Unterschied zur DSGVO und worauf du als EU-Smart-Home-Besitzer achten solltest.',
    metaDescription:
      'Die Auswirkungen des EU Data Act auf Smart-Home-Geräte in der EU: Datenportabilitätsrechte (in Kraft seit 12. September 2025), getrennt von der DSGVO.',
    twitterDescription:
      'Der EU Data Act und Smart-Home-Geräte: Datenportabilitätsrechte, und wie sich das von den Regeln der DSGVO zu personenbezogenen Daten unterscheidet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer und -Käufer in der EU, die die neue Geräte-Daten-Regulierung verstehen wollen',
    primaryTerm: 'eu data act smart home',
    targetKeywords: [
      'eu data act smart home',
      'data act vernetzte geraete',
      'eu data act vs dsgvo',
      'smart home datenportabilitaet eu',
      'vernetztes geraet datenrechte eu',
    ],
    leadAnswerBlock:
      '**Der EU Data Act (Kapitel II, Artikel 3-5) gibt Nutzern vernetzter Geräte das Recht, auf die von ihrem Gerät erzeugten Daten zuzugreifen und sie mit Dritten ihrer Wahl teilen zu lassen — ein Datenportabilitäts- und Zugangsrecht, getrennt von den Regeln der DSGVO zur Verarbeitung personenbezogener Daten.** Seine Hauptpflichten gelten seit dem 12. September 2025, und Smart-Home-Geräte fallen ausdrücklich in den Anwendungsbereich.',
    quickAnswerTop: {
      de: {
        question: 'Was bedeutet der EU Data Act für meine Smart-Home-Geräte?',
        answer:
          'Der EU Data Act gibt dir seit dem 12. September 2025 das Recht, auf die von deinen vernetzten Geräten erzeugten Daten zuzugreifen und sie an einen anderen Dienstanbieter weiterzuleiten — zum Beispiel die Nutzungsdaten deines smarten Thermostats mit einer konkurrierenden Energiemanagement-App zu teilen, statt nur mit dem eigenen Dienst des Herstellers. Das ist getrennt von der DSGVO, die regelt, wie personenbezogene Daten verarbeitet werden, statt Datenportabilität zwischen Diensten. Smart-Home-Geräte werden in der Verordnung ausdrücklich als erfasste „vernetzte Produkte" genannt.',
        bullets: [
          'Data Act = Datenzugangs-/Portabilitätsrechte für Daten vernetzter Geräte',
          'DSGVO = separate Verordnung zur Verarbeitung personenbezogener Daten — beide behandeln unterschiedliche Fragen',
          'In Kraft seit dem 12. September 2025; Smart-Home-Geräte fallen ausdrücklich in den Anwendungsbereich',
          'Relevant vor allem, wenn du Daten zwischen Diensten verschieben willst (z. B. Energieüberwachung), statt bei der App eines Herstellers zu bleiben',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Data Act vs. DSGVO', anchor: 'data-act-vs-gdpr' },
      { label: 'Was das für Smart-Home-Daten bedeuten könnte', anchor: 'what-it-means' },
      { label: 'Was vor dem Verlassen darauf zu prüfen ist', anchor: 'what-to-check' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Der EU Data Act schafft Datenzugangs- und Portabilitätsrechte für Daten vernetzter Geräte, getrennt von den Regeln der DSGVO zur Verarbeitung personenbezogener Daten.' },
      { type: 'plain-terms', content: 'Die DSGVO schützt deine persönlichen Informationen und regelt, wie Unternehmen sie nutzen. Der Data Act ist eine andere, neuere EU-Regel dazu, ob du die von deinen Smart-Geräten erzeugten Daten bekommen und an ein anderes Unternehmen oder eine andere App weitergeben kannst, statt nur auf den eigenen Dienst des Herstellers angewiesen zu sein.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Der EU Data Act behandelt Datenzugang/-portabilität für vernetzte Geräte — eine andere Frage als die Regeln der DSGVO zur Verarbeitung personenbezogener Daten',
          'Er zielt darauf ab, dich die von deinem Gerät erzeugten Daten an einen Drittanbieter weiterleiten zu lassen, nicht nur an die eigene App des Herstellers',
          'Die Hauptpflichten gelten seit dem 12. September 2025; Smart-Home-Geräte werden ausdrücklich als erfasste „vernetzte Produkte" neben vernetzten Autos und Gesundheitsmonitoren genannt',
          'Dieser Artikel ist eine allgemeine Orientierung, keine Rechtsberatung — für eine konkrete Compliance-Frage konsultiere die offiziellen Data-Act-Ressourcen der EU oder einen qualifizierten Berater',
          'Siehe den DSGVO-fokussierten Smart-Home-Leitfaden auf dieser Website für Fragen zur Verarbeitung personenbezogener Daten',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'Data Act vs. DSGVO',
        content:
          '**Die DSGVO regelt, wie personenbezogene Daten verarbeitet, gespeichert und geschützt werden; der Data Act regelt den Zugang zu und die Portabilität der von einem vernetzten Gerät erzeugten Daten — beide Verordnungen behandeln verwandte, aber unterschiedliche Fragen.**',
        items: [
          'DSGVO-Frage: Werden meine personenbezogenen Daten (Name, Sprachaufnahmen, Kameraaufnahmen) rechtmäßig verarbeitet, und kann ich darauf zugreifen/sie löschen?',
          'Data-Act-Frage: Kann ich die von meinem Gerät erzeugten Rohdaten (z. B. die Nutzungsprotokolle eines Thermostats) bekommen und an einen anderen Dienst weiterleiten, nicht nur an die eigene App des Herstellers?',
          'Ein Gerät kann vollständig DSGVO-konform sein und trotzdem die Datenportabilität nach den älteren Regeln einschränken, die der Data Act adressieren soll — beide Pflichten sind additiv, kein Ersatz füreinander.',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Was das für Smart-Home-Daten bedeuten könnte',
        content:
          '**Für einen lokal-first orientierten Smart-Home-Besitzer liegt die praktische Relevanz vor allem bei Geräten, die noch auf einen Cloud-Dienst des Herstellers angewiesen sind — Portabilitätsrechte im Stil des Data Act könnten es leichter machen, diese Daten stattdessen lokal oder an einen Drittanbieter umzuleiten.**',
        items: [
          'Wenn du bereits ein lokal-first-Setup betreibst (Home Assistant, lokaler Speicher, keine Cloud-Abhängigkeit), profitierst du möglicherweise weniger direkt, da deine Daten bereits lokal bleiben, statt ein Portabilitätsrecht zu brauchen, um sie von einem Hersteller zu extrahieren.',
          'Relevanter ist der Fall hybrider Geräte, die auch in einem größtenteils lokalen Setup noch einige Daten an einen Cloud-Dienst des Herstellers melden — Portabilitätsrechte betreffen speziell diese Daten.',
          'Die Pflicht gilt rechtlich seit dem 12. September 2025, aber dieser Artikel verfolgt nicht die Compliance einzelner Hersteller — prüfe die aktuelle Dokumentation eines konkreten Geräts, statt anzunehmen, dass branchenweite Änderungen bereits umgesetzt sind, nur weil die Frist verstrichen ist.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Was vor dem Verlassen darauf zu prüfen ist',
        content:
          '**Dieser Artikel ist eine allgemeine Orientierung zur Relevanz des Data Act für Smart Homes — für eine konkrete Compliance-Frage oder rechtliche Einschätzung prüfe die aktuelle offizielle Anleitung der EU, statt dich allein auf diese Zusammenfassung zu verlassen.**',
        items: [
          'Die Hauptpflichten gelten seit dem 12. September 2025 (laut den eigenen Data-Act-Seiten der Europäischen Kommission) — das ist bereits in Kraft, keine zukünftige Frist. Eine verwandte Teilfrist steht noch aus: die vollständige Abschaffung von Wechselgebühren für Cloud-/Datenverarbeitungsdienste bis zum 12. Januar 2027.',
          'Smart-Home-Geräte werden von der eigenen Anleitung der Europäischen Kommission ausdrücklich als erfasste Kategorie „vernetztes Produkt" genannt, neben vernetzten Autos, Gesundheitsüberwachungsgeräten und Industrieausrüstung — prüfe die eigene Dokumentation eines konkreten Geräts dazu, wie sein Hersteller die Pflicht umgesetzt hat, da die Anleitung der Kommission den Anwendungsbereich bestätigt, nicht die Compliance pro Gerät.',
          'Wenn du Hersteller bist oder ein Unternehmen betreibst, das Smart-Home-Daten verarbeitet, ist dieser Artikel kein Ersatz für qualifizierte, auf deine Situation zugeschnittene Rechtsberatung.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist der EU Data Act dasselbe wie die DSGVO?', a: 'Nein — die DSGVO regelt die Verarbeitung personenbezogener Daten; der Data Act regelt Datenzugang und -portabilität für vernetzte Geräte. Es sind separate Verordnungen, die unterschiedliche Fragen behandeln.' },
          { q: 'Gilt der Data Act außerhalb der EU?', a: 'Es ist EU-Recht, daher richten sich seine direkten rechtlichen Anforderungen an Unternehmen, die in der EU tätig sind oder den EU-Markt bedienen, nicht an ein globales Mandat. Wenn du ein vernetztes Gerät innerhalb des EU-Marktes kaufst oder nutzt, gilt die Pflicht unabhängig davon, wo der Hersteller seinen Sitz hat.' },
          { q: 'Bedeutet das, ich kann meinen smarten-Thermostat-Hersteller zwingen, meine Daten mit einem Wettbewerber zu teilen?', a: 'Ja, grundsätzlich — seit dem 12. September 2025 müssen EU-Dateninhaber Nutzern erlauben, vom Gerät erzeugte Daten mit einem Dritten ihrer Wahl zu teilen (entweder direkt oder indem sie den Hersteller bitten, sie zu senden), mit einer Ausnahme für „Gatekeeper"-Unternehmen nach dem Digital Markets Act als Empfänger. Ob ein konkreter Hersteller das für ein bestimmtes Gerät tatsächlich reibungslos umgesetzt hat, ist eine andere Frage als die, ob das gesetzliche Recht existiert — prüfe die aktuelle Dokumentation dieses Geräts.' },
          { q: 'Muss sich ein lokal-first Smart Home um den Data Act sorgen?', a: 'Weniger direkt — wenn dein Setup Daten bereits über Home Assistant lokal hält statt über einen Cloud-Dienst des Herstellers, zählen Portabilitätsrechte weniger, da es von vornherein kein Cloud-Silo gibt, aus dem Daten extrahiert werden müssten.' },
          { q: 'Wo finde ich den aktuellen offiziellen Text des Data Act?', a: 'Prüfe direkt die offiziellen Gesetzgebungsveröffentlichungen der Europäischen Union — dieser Artikel ist eine allgemeine Orientierung, kein rechtlicher Nachweis.' },
          { q: 'Betrifft das den bereits auf dieser Website vorhandenen DSGVO-Leitfaden für private Smart Homes?', a: 'Nein — jener Leitfaden behandelt speziell DSGVO-Compliance (Verarbeitung personenbezogener Daten). Dieser Artikel behandelt eine separate, neuere Verordnung zur Datenportabilität.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Ein DSGVO-freundliches privates Smart Home aufbauen (EU)](/de/smart-home/private-smart-home-gdpr) — die verwandte, aber getrennte Regulierung personenbezogener Daten',
          '[Datenschutzrisiken im Smart Home](/de/smart-home/smart-home-privacy-risks) — der breitere Datenschutzkontext',
          '[Warum ein lokales Smart Home die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud) — die lokal-first-Alternative zur Cloud-Datenabhängigkeit',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Der EU Data Act und dein Smart Home (2027)',
      description: 'Die Auswirkungen des EU Data Act auf Smart-Home-Geräte in der EU: Datenportabilitätsrechte, getrennt von der DSGVO.',
      url: 'https://www.promptquorum.com/de/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'EU Data Act' }, { '@type': 'Thing', name: 'Datenportabilität' }, { '@type': 'Thing', name: 'Smart-Home-Regulierung' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist der EU Data Act dasselbe wie die DSGVO?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — die DSGVO regelt die Verarbeitung personenbezogener Daten; der Data Act regelt Datenzugang und -portabilität für vernetzte Geräte.' } },
        { '@type': 'Question', name: 'Muss sich ein lokal-first Smart Home um den Data Act sorgen?', acceptedAnswer: { '@type': 'Answer', text: 'Weniger direkt — wenn dein Setup Daten bereits über Home Assistant lokal hält, zählen Portabilitätsrechte weniger, da es kein Cloud-Silo gibt, aus dem Daten extrahiert werden müssten.' } },
        { '@type': 'Question', name: 'Wo finde ich den aktuellen offiziellen Text des Data Act?', acceptedAnswer: { '@type': 'Answer', text: 'Prüfe direkt die offiziellen Gesetzgebungsveröffentlichungen der Europäischen Union.' } },
        { '@type': 'Question', name: 'Betrifft das den bereits auf dieser Website vorhandenen DSGVO-Leitfaden für private Smart Homes?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — jener Leitfaden behandelt speziell DSGVO-Compliance. Dieser Artikel behandelt eine separate, neuere Verordnung zur Datenportabilität.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-fr.png',
    title: "Le règlement européen sur les données (Data Act) et votre maison connectée (2027)",
    seoTitle: 'EU Data Act : guide maison connectée (2027)',
    intro:
      "Le règlement européen sur les données (Data Act, règlement (UE) 2023/2854) crée des droits d'accès aux données et de portabilité pour les utilisateurs d'appareils connectés au chapitre II, distincts des règles du RGPD sur le traitement des données personnelles — il traite de la question de savoir si vous pouvez récupérer les données générées par votre appareil et les partager avec un autre service, pas de la façon dont vos données personnelles sont traitées. Ses principales obligations s'appliquent depuis le 12 septembre 2025, et il couvre explicitement les appareils de maison connectée grand public en tant que « produits connectés ». Cet article explique la distinction avec le RGPD et ce à quoi il faut prêter attention en tant que propriétaire de maison connectée dans l'UE.",
    metaDescription:
      "Les implications du règlement européen sur les données pour les appareils de maison connectée dans l'UE : droits de portabilité des données (en vigueur depuis le 12 septembre 2025), distincts du RGPD.",
    twitterDescription:
      "Le Data Act de l'UE et les appareils de maison connectée : droits de portabilité des données, et en quoi cela diffère des règles du RGPD sur les données personnelles.",
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    audience: "Propriétaires et acheteurs de maison connectée basés dans l'UE souhaitant comprendre la nouvelle réglementation sur les données des appareils",
    primaryTerm: 'eu data act maison connectee',
    targetKeywords: [
      'eu data act maison connectee',
      'data act appareils connectes',
      'eu data act vs rgpd',
      'portabilite donnees maison connectee eu',
      'droits donnees appareil connecte eu',
    ],
    leadAnswerBlock:
      "**Le règlement européen sur les données (chapitre II, articles 3-5) donne aux utilisateurs d'appareils connectés le droit d'accéder aux données que leur appareil génère et de les faire partager avec des tiers de leur choix — un droit de portabilité et d'accès aux données, distinct des règles du RGPD sur la façon dont les données personnelles sont traitées.** Ses principales obligations s'appliquent depuis le 12 septembre 2025, et les appareils de maison connectée entrent explicitement dans son champ d'application.",
    quickAnswerTop: {
      fr: {
        question: 'Que signifie le Data Act de l\'UE pour mes appareils de maison connectée ?',
        answer:
          "Le Data Act de l'UE vous donne le droit, depuis le 12 septembre 2025, d'accéder aux données générées par vos appareils connectés et de les diriger vers un autre fournisseur de services — par exemple, partager les données d'utilisation de votre thermostat connecté avec une application concurrente de gestion de l'énergie plutôt qu'uniquement avec le service propre du fabricant. Ceci est distinct du RGPD, qui régit la façon dont les données personnelles sont traitées plutôt que la portabilité des données entre services. Les appareils de maison connectée sont explicitement nommés comme des « produits connectés » entrant dans le champ d'application du règlement.",
        bullets: [
          "Data Act = droits d'accès/portabilité des données pour les données des appareils connectés",
          "RGPD = réglementation distincte régissant le traitement des données personnelles — les deux traitent de questions différentes",
          'En vigueur depuis le 12 septembre 2025 ; les appareils de maison connectée entrent explicitement dans le champ d\'application',
          "Pertinent principalement si vous souhaitez déplacer des données entre services (par ex. surveillance énergétique) plutôt que de rester avec l'application d'un seul fabricant",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Data Act contre RGPD', anchor: 'data-act-vs-gdpr' },
      { label: 'Ce que cela pourrait signifier pour les données de la maison connectée', anchor: 'what-it-means' },
      { label: 'Ce qu\'il faut vérifier avant de s\'y fier', anchor: 'what-to-check' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Le Data Act de l'UE crée des droits d'accès et de portabilité pour les données des appareils connectés, distincts des règles du RGPD sur le traitement des données personnelles." },
      { type: 'plain-terms', content: "Le RGPD protège vos informations personnelles et régit la façon dont les entreprises les utilisent. Le Data Act est une règle européenne différente et plus récente qui détermine si vous pouvez récupérer les données que produisent vos appareils connectés et les transmettre à une entreprise ou une application différente, au lieu d'être limité au seul service propre du fabricant." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Le Data Act de l'UE traite de l'accès aux données et de leur portabilité pour les appareils connectés — une question différente des règles du RGPD sur le traitement des données personnelles",
          "Il vise à vous permettre de diriger les données générées par votre appareil vers un service tiers, pas seulement vers l'application propre du fabricant",
          'Les principales obligations s\'appliquent depuis le 12 septembre 2025 ; les appareils de maison connectée sont explicitement nommés comme « produits connectés » entrant dans le champ d\'application, aux côtés des voitures connectées et des moniteurs de santé',
          "Cet article est une orientation générale, pas un conseil juridique — pour une question de conformité spécifique, consultez les ressources officielles de l'UE sur le Data Act ou un conseiller qualifié",
          'Voir le guide axé sur le RGPD pour la maison connectée déjà présent sur ce site pour les questions de traitement des données personnelles',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'Data Act contre RGPD',
        content:
          "**Le RGPD régit la façon dont les données personnelles sont traitées, stockées et protégées ; le Data Act régit l'accès et la portabilité des données qu'un appareil connecté génère — les deux réglementations traitent de questions apparentées mais distinctes.**",
        items: [
          'Question RGPD : mes données personnelles (nom, enregistrements vocaux, images de caméra) sont-elles traitées légalement, et puis-je y accéder/les supprimer ?',
          "Question Data Act : puis-je récupérer les données brutes que mon appareil génère (par ex. les journaux d'utilisation d'un thermostat) et les diriger vers un service différent, pas seulement l'application propre du fabricant ?",
          "Un appareil peut être totalement conforme au RGPD tout en limitant encore la portabilité des données selon les anciennes règles que le Data Act est censé traiter — les deux obligations s'ajoutent, elles ne se substituent pas l'une à l'autre.",
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Ce que cela pourrait signifier pour les données de la maison connectée',
        content:
          "**Pour un propriétaire de maison connectée axé sur le local, la pertinence pratique concerne principalement les appareils qui dépendent encore d'un service cloud du fabricant — les droits de portabilité de type Data Act pourraient faciliter la redirection de ces données localement ou vers un service tiers à la place.**",
        items: [
          "Si vous utilisez déjà une configuration axée sur le local (Home Assistant, stockage local, aucune dépendance au cloud), vous constaterez peut-être un bénéfice moins direct puisque vos données restent déjà locales plutôt que d'avoir besoin d'un droit de portabilité pour les extraire d'un fabricant.",
          "Le cas le plus pertinent concerne les appareils hybrides qui rapportent encore certaines données à un service cloud du fabricant même dans une configuration majoritairement locale — les droits de portabilité concernent spécifiquement ces données.",
          "L'obligation est légalement en vigueur depuis le 12 septembre 2025, mais cet article ne suit pas la conformité fabricant par fabricant — vérifiez la documentation actuelle d'un appareil spécifique plutôt que de supposer que des changements généralisés à l'échelle de l'industrie ont déjà été déployés simplement parce que l'échéance est passée.",
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: "Ce qu'il faut vérifier avant de s'y fier",
        content:
          "**Cet article est une orientation générale sur la pertinence du Data Act pour les maisons connectées — pour une question de conformité spécifique ou une détermination juridique, vérifiez les directives officielles actuelles de l'UE plutôt que de vous fier uniquement à ce résumé.**",
        items: [
          "Les principales obligations s'appliquent depuis le 12 septembre 2025 (selon les propres pages du Data Act de la Commission européenne) — c'est déjà en vigueur, pas une échéance future. Une sous-échéance connexe reste en attente : la suppression complète des frais de changement de service cloud/de traitement des données d'ici le 12 janvier 2027.",
          "Les appareils de maison connectée sont explicitement nommés comme une catégorie de « produit connecté » entrant dans le champ d'application par les propres directives de la Commission européenne, aux côtés des voitures connectées, des appareils de surveillance de la santé et des équipements industriels — vérifiez la propre documentation d'un appareil spécifique pour savoir comment son fabricant a mis en œuvre l'obligation, car les directives de la Commission confirment le champ d'application, pas la conformité par appareil.",
          "Si vous êtes fabricant ou dirigez une entreprise gérant des données de maison connectée, cet article ne remplace pas un conseil juridique qualifié spécifique à votre situation.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: "Le Data Act de l'UE est-il la même chose que le RGPD ?", a: "Non — le RGPD régit le traitement des données personnelles ; le Data Act régit l'accès et la portabilité des données pour les appareils connectés. Ce sont des réglementations distinctes traitant de questions différentes." },
          { q: "Le Data Act s'applique-t-il en dehors de l'UE ?", a: "C'est une réglementation de l'UE, donc ses exigences légales directes ciblent les entreprises opérant dans l'UE ou desservant le marché de l'UE, pas un mandat mondial. Si vous achetez ou utilisez un appareil connecté au sein du marché de l'UE, l'obligation s'applique quel que soit le siège du fabricant." },
          { q: 'Cela signifie-t-il que je peux forcer le fabricant de mon thermostat connecté à partager mes données avec un concurrent ?', a: "Oui, en principe — depuis le 12 septembre 2025, les détenteurs de données de l'UE doivent permettre aux utilisateurs de partager les données générées par l'appareil avec un tiers de leur choix (soit directement, soit en demandant au fabricant de les envoyer), avec une exception pour les entreprises « contrôleurs d'accès » au titre du Digital Markets Act en tant que destinataires. Que ce soit effectivement mis en œuvre sans accroc par un fabricant spécifique pour un appareil donné est une question distincte de l'existence du droit légal — vérifiez la documentation actuelle de cet appareil." },
          { q: "Une maison connectée axée sur le local doit-elle se soucier du Data Act ?", a: "Moins directement — si votre configuration garde déjà les données locales via Home Assistant plutôt que via un service cloud du fabricant, les droits de portabilité comptent moins puisqu'il n'y a pas de silo cloud d'où extraire des données en premier lieu." },
          { q: 'Où puis-je trouver le texte officiel actuel du Data Act ?', a: "Vérifiez directement les publications législatives officielles de l'Union européenne — cet article est une orientation générale, pas une référence juridique." },
          { q: "Cela affecte-t-il le guide RGPD pour maison connectée privée déjà présent sur ce site ?", a: "Non — ce guide couvre spécifiquement la conformité RGPD (traitement des données personnelles). Cet article couvre une réglementation distincte et plus récente sur la portabilité des données." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Construire une maison connectée privée conforme au RGPD (UE)](/fr/smart-home/private-smart-home-gdpr) — la réglementation sur les données personnelles apparentée mais distincte',
          '[Risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks) — le contexte de confidentialité plus large',
          '[Pourquoi une maison connectée locale surpasse le cloud](/fr/smart-home/why-local-smart-home-beats-cloud) — l\'alternative locale à la dépendance aux données cloud',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: "Le règlement européen sur les données (Data Act) et votre maison connectée (2027)",
      description: "Les implications du règlement européen sur les données pour les appareils de maison connectée dans l'UE : droits de portabilité des données, distincts du RGPD.",
      url: 'https://www.promptquorum.com/fr/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: "Règlement européen sur les données" }, { '@type': 'Thing', name: 'Portabilité des données' }, { '@type': 'Thing', name: 'Réglementation de la maison connectée' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: "Le Data Act de l'UE est-il la même chose que le RGPD ?", acceptedAnswer: { '@type': 'Answer', text: "Non — le RGPD régit le traitement des données personnelles ; le Data Act régit l'accès et la portabilité des données pour les appareils connectés." } },
        { '@type': 'Question', name: 'Une maison connectée axée sur le local doit-elle se soucier du Data Act ?', acceptedAnswer: { '@type': 'Answer', text: "Moins directement — si votre configuration garde déjà les données locales via Home Assistant, les droits de portabilité comptent moins puisqu'il n'y a pas de silo cloud d'où extraire des données." } },
        { '@type': 'Question', name: 'Où puis-je trouver le texte officiel actuel du Data Act ?', acceptedAnswer: { '@type': 'Answer', text: "Vérifiez directement les publications législatives officielles de l'Union européenne." } },
        { '@type': 'Question', name: "Cela affecte-t-il le guide RGPD pour maison connectée privée déjà présent sur ce site ?", acceptedAnswer: { '@type': 'Answer', text: "Non — ce guide couvre spécifiquement la conformité RGPD. Cet article couvre une réglementation distincte et plus récente sur la portabilité des données." } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-ja.png',
    title: 'EUデータ法とあなたのスマートホーム（2027年）',
    seoTitle: 'EUデータ法：スマートホームガイド（2027年）',
    intro:
      'EUデータ法（規則(EU) 2023/2854）は第II章の下で、GDPRの個人データ処理ルールとは別に、接続機器の利用者にデータアクセスおよび移植性の権利を創設します — これは、あなたの個人データがどのように処理されるかではなく、あなたの機器が生成したデータを取り出して別のサービスと共有できるかどうかを扱うものです。その主な義務は2026年9月12日から適用されており、消費者向けスマートホーム機器を「接続製品」として明示的に対象としています。この記事はGDPRとの違いと、EUのスマートホーム所有者として何に注意すべきかを説明します。',
    metaDescription:
      'EUデータ法がEU内のスマートホーム機器に与える影響：データ移植性の権利（2025年9月12日から施行）、GDPRとは別のもの。',
    twitterDescription:
      'EUデータ法とスマートホーム機器：データ移植性の権利、そしてこれがGDPRの個人データルールとどう異なるか。',
    readTime: '読了時間6分',
    educationalLevel: 'Intermediate',
    audience: '新しい機器データ規制を理解したいEU在住のスマートホーム所有者・購入者',
    primaryTerm: 'eu データ法 スマートホーム',
    targetKeywords: [
      'eu データ法 スマートホーム',
      'データ法 接続機器',
      'eu データ法 vs gdpr',
      'スマートホーム データ移植性 eu',
      '接続機器 データ権利 eu',
    ],
    leadAnswerBlock:
      '**EUデータ法（第II章、第3〜5条）は、接続機器の利用者に、機器が生成するデータへのアクセス権と、選んだ第三者と共有させる権利を与えます — これは、個人データがどのように処理されるかに関するGDPRのルールとは異なる、データ移植性・アクセス権です。** その主な義務は2025年9月12日から適用されており、スマートホーム機器は明示的に対象範囲に含まれます。',
    quickAnswerTop: {
      ja: {
        question: 'EUデータ法は私のスマートホーム機器にとって何を意味しますか？',
        answer:
          'EUデータ法により、2025年9月12日から、あなたの接続機器が生成するデータにアクセスし、それを別のサービスプロバイダーに送る権利が与えられています — 例えば、スマートサーモスタットの使用データを、メーカー自身のサービスだけでなく競合するエネルギー管理アプリと共有することです。これはGDPRとは別のもので、GDPRはサービス間のデータ移植性ではなく、個人データがどのように処理されるかを規定しています。スマートホーム機器は、規制の下で明示的に対象範囲内の「接続製品」として名指しされています。',
        bullets: [
          'データ法＝接続機器データのアクセス/移植性の権利',
          'GDPR＝個人データ処理を規定する別の規制 — 両者は異なる問題を扱う',
          '2025年9月12日から施行；スマートホーム機器は明示的に対象範囲内',
          '主に、1つのメーカーのアプリにとどまるのではなく、サービス間でデータを移動したい場合（例：エネルギー監視）に関連する',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'データ法とGDPRの違い', anchor: 'data-act-vs-gdpr' },
      { label: 'スマートホームデータにとって何を意味しうるか', anchor: 'what-it-means' },
      { label: '依拠する前に確認すべきこと', anchor: 'what-to-check' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'EUデータ法は、GDPRの個人データ処理ルールとは別に、接続機器データのアクセスおよび移植性の権利を創設します。' },
      { type: 'plain-terms', content: 'GDPRはあなたの個人情報を保護し、企業がそれをどう使うかを規定するものです。データ法は、あなたのスマート機器が生成するデータを取得して、メーカー自身のサービスだけに縛られるのではなく、別の企業やアプリに渡せるかどうかについての、新しい別のEU規則です。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'EUデータ法は接続機器のデータアクセス/移植性を扱います — GDPRの個人データ処理ルールとは異なる問題です',
          'メーカー自身のアプリだけでなく、機器が生成したデータを第三者サービスに送れるようにすることを目的としています',
          '主な義務は2025年9月12日から適用されています；スマートホーム機器は、コネクテッドカーや健康モニターと並んで、明示的に対象範囲内の「接続製品」として名指しされています',
          'この記事は一般的な概要であり法的助言ではありません — 具体的なコンプライアンスの質問については、EUの公式データ法リソースまたは資格のあるアドバイザーに相談してください',
          '個人データ処理に関する質問については、このサイトにあるGDPR重視のスマートホームガイドを参照してください',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'データ法とGDPRの違い',
        content:
          '**GDPRは個人データがどのように処理、保存、保護されるかを規定します。データ法は、接続機器が生成するデータへのアクセスと移植性を規定します — 両規制は関連しつつも異なる問題を扱っています。**',
        items: [
          'GDPRの問い：私の個人データ（氏名、音声録音、カメラ映像）は適法に処理されているか、それにアクセス／削除できるか？',
          'データ法の問い：私の機器が生成する生データ（例えばサーモスタットの使用ログ）を取得し、メーカー自身のアプリだけでなく別のサービスに送ることができるか？',
          '機器は完全にGDPR準拠でありながら、データ法が対処しようとしている旧来のルールの下でデータ移植性を制限している場合があります — 2つの義務は補完的なものであり、互いの代替ではありません。',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'スマートホームデータにとって何を意味しうるか',
        content:
          '**ローカルファーストのスマートホーム所有者にとって、実際的な関連性は主に、依然としてメーカーのクラウドサービスに依存している機器に関するものです — データ法方式の移植性の権利は、そのデータをローカルまたは第三者のサービスに代わりにリダイレクトしやすくする可能性があります。**',
        items: [
          'すでにローカルファーストの構成（Home Assistant、ローカルストレージ、クラウド依存なし）を運用している場合、データはすでにローカルに留まっているため、メーカーからそれを取り出すための移植性の権利が必要ないという点で、直接的な恩恵は少ないかもしれません。',
          'より関連性が高いのは、ほとんどローカルな構成であっても、依然として一部のデータをメーカーのクラウドサービスに報告するハイブリッド機器のケースです — 移植性の権利は特にそのデータに関するものです。',
          'この義務は2025年9月12日から法的に施行されていますが、この記事はメーカーごとのコンプライアンスを追跡していません — 期限が過ぎたからといって業界全体の変更がすでに展開されていると想定するのではなく、特定の機器の現在のドキュメントを確認してください。',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '依拠する前に確認すべきこと',
        content:
          '**この記事は、データ法がスマートホームに与える関連性についての一般的な概要です — 具体的なコンプライアンスの質問や法的判断については、この要約だけに頼らず、EUの現行の公式ガイダンスを確認してください。**',
        items: [
          '主な義務は2025年9月12日から適用されています（欧州委員会自身のデータ法ページによる）— これはすでに施行されているものであり、将来の期限ではありません。関連する1つの副次的な期限がまだ残っています：クラウド／データ処理サービスの切り替え料金の完全撤廃が2027年1月12日までに予定されています。',
          'スマートホーム機器は、コネクテッドカー、健康監視機器、産業機器と並んで、欧州委員会自身のガイダンスによって明示的に対象範囲内の「接続製品」カテゴリーとして名指しされています — 委員会のガイダンスは対象範囲を確認するものであり、機器ごとのコンプライアンスを確認するものではないため、そのメーカーが義務をどのように実装したかについては、特定の機器自体のドキュメントを確認してください。',
          'あなたがメーカーであるか、スマートホームデータを扱うビジネスを運営している場合、この記事はあなたの状況に特化した資格のある法的助言の代わりにはなりません。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'EUデータ法はGDPRと同じものですか？', a: 'いいえ — GDPRは個人データ処理を規定し、データ法は接続機器のデータアクセスと移植性を規定します。それらは異なる問題を扱う別々の規制です。' },
          { q: 'データ法はEU域外にも適用されますか？', a: 'これはEUの規制であるため、その直接的な法的要件はEU市場で活動する、またはEU市場に提供する企業を対象としており、グローバルな義務ではありません。EU市場内で接続機器を購入または使用する場合、メーカーの本社がどこにあるかに関わらず、この義務が適用されます。' },
          { q: 'これは、スマートサーモスタットのメーカーに私のデータを競合他社と共有させることを強制できるという意味ですか？', a: 'はい、原則として — 2025年9月12日以降、EUのデータ保有者は、利用者が選んだ第三者と機器生成データを共有できるようにしなければなりません（直接、またはメーカーに送信を依頼する形で）。ただし、Digital Markets Actの「ゲートキーパー」企業を受領者とする場合は例外があります。特定のメーカーが特定の機器についてこれを実際にスムーズに実装しているかどうかは、法的権利が存在するかどうかとは別の問題です — その機器の現在のドキュメントを確認してください。' },
          { q: 'ローカルファーストのスマートホームはデータ法を心配する必要がありますか？', a: 'より間接的です — あなたの構成がすでにメーカーのクラウドサービスではなくHome Assistant経由でデータをローカルに保持している場合、そもそもデータを取り出すべきクラウドサイロがないため、移植性の権利はあまり重要ではありません。' },
          { q: 'データ法の現行の公式テキストはどこで見つけられますか？', a: '欧州連合の公式立法出版物を直接確認してください — この記事は一般的な概要であり、法的な参照資料ではありません。' },
          { q: 'これはこのサイトにすでにある個人向けスマートホームGDPRガイドに影響しますか？', a: 'いいえ — そのガイドは特にGDPRコンプライアンス（個人データ処理）を扱っています。この記事はデータ移植性に関する別の、より新しい規制を扱っています。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[GDPRに配慮したプライベートスマートホームの構築（EU）](/ja/smart-home/private-smart-home-gdpr) — 関連するが別個の個人データ規制',
          '[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks) — より広いプライバシーの文脈',
          '[ローカルスマートホームがクラウドに勝る理由](/ja/smart-home/why-local-smart-home-beats-cloud) — クラウドデータ依存に対するローカルファーストの代替案',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'EUデータ法とあなたのスマートホーム（2027年）',
      description: 'EUデータ法がEU内のスマートホーム機器に与える影響：データ移植性の権利、GDPRとは別のもの。',
      url: 'https://www.promptquorum.com/ja/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'EUデータ法' }, { '@type': 'Thing', name: 'データ移植性' }, { '@type': 'Thing', name: 'スマートホーム規制' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'EUデータ法はGDPRと同じものですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — GDPRは個人データ処理を規定し、データ法は接続機器のデータアクセスと移植性を規定します。' } },
        { '@type': 'Question', name: 'ローカルファーストのスマートホームはデータ法を心配する必要がありますか？', acceptedAnswer: { '@type': 'Answer', text: 'より間接的です — 構成がすでにHome Assistant経由でデータをローカルに保持している場合、取り出すべきクラウドサイロがないため、移植性の権利はあまり重要ではありません。' } },
        { '@type': 'Question', name: 'データ法の現行の公式テキストはどこで見つけられますか？', acceptedAnswer: { '@type': 'Answer', text: '欧州連合の公式立法出版物を直接確認してください。' } },
        { '@type': 'Question', name: 'これはこのサイトにすでにある個人向けスマートホームGDPRガイドに影響しますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — そのガイドは特にGDPRコンプライアンスを扱っています。この記事はデータ移植性に関する別の、より新しい規制を扱っています。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-zh.png',
    title: '欧盟《数据法案》与你的智能家居（2027年）',
    seoTitle: '欧盟数据法案：智能家居指南（2027年）',
    intro:
      '欧盟《数据法案》（(EU) 2023/2854号法规）第二章为联网设备用户创设了数据访问权和可携权，与GDPR关于个人数据处理的规则不同——它解决的是你能否取出设备生成的数据并与其他服务共享，而不是你的个人数据如何被处理。其主要义务自2025年9月12日起适用，并明确将消费类智能家居设备纳入"联网产品"范畴。本文解释它与GDPR的区别，以及作为欧盟智能家居用户应留意的事项。',
    metaDescription:
      '欧盟《数据法案》对欧盟境内智能家居设备的影响：数据可携权（自2025年9月12日起生效），与GDPR不同。',
    twitterDescription:
      '欧盟《数据法案》与智能家居设备：数据可携权，以及这与GDPR个人数据规则有何不同。',
    readTime: '阅读需6分钟',
    educationalLevel: 'Intermediate',
    audience: '希望了解新设备数据法规的欧盟智能家居用户和买家',
    primaryTerm: 'eu 数据法案 智能家居',
    targetKeywords: [
      'eu 数据法案 智能家居',
      '数据法案 联网设备',
      'eu 数据法案 vs gdpr',
      '智能家居数据可携性 eu',
      '联网设备数据权利 eu',
    ],
    leadAnswerBlock:
      '**欧盟《数据法案》（第二章，第3-5条）赋予联网设备用户访问其设备生成数据的权利，并可将其共享给自己选择的第三方——这是一项数据可携权和访问权，不同于GDPR关于个人数据如何被处理的规则。**其主要义务自2025年9月12日起适用，智能家居设备被明确纳入适用范围。',
    quickAnswerTop: {
      zh: {
        question: '欧盟《数据法案》对我的智能家居设备意味着什么？',
        answer:
          '自2025年9月12日起，欧盟《数据法案》赋予你访问联网设备生成数据并将其导向其他服务提供商的权利——例如，将智能温控器的使用数据与竞争性能源管理应用共享，而不仅限于制造商自家的服务。这与GDPR不同，GDPR规范的是个人数据如何被处理，而非服务之间的数据可携性。智能家居设备在该法规下被明确列为适用范围内的"联网产品"。',
        bullets: [
          '数据法案＝联网设备数据的访问/可携权',
          'GDPR＝规范个人数据处理的独立法规——二者处理的是不同的问题',
          '自2025年9月12日起生效；智能家居设备被明确纳入适用范围',
          '主要与你希望在服务之间转移数据（例如能源监测）而非停留在单一制造商应用内的场景相关',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '数据法案与GDPR的区别', anchor: 'data-act-vs-gdpr' },
      { label: '这对智能家居数据可能意味着什么', anchor: 'what-it-means' },
      { label: '依赖本文之前应核实的事项', anchor: 'what-to-check' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '欧盟《数据法案》为联网设备数据创设了访问权和可携权，与GDPR关于个人数据处理的规则不同。' },
      { type: 'plain-terms', content: 'GDPR关乎保护你的个人信息以及企业如何使用它。数据法案是一项不同的、更新的欧盟规则，涉及你是否能够取出智能设备生成的数据，并将其交给另一家公司或应用，而不是只能依赖制造商自家的服务。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '欧盟《数据法案》涉及联网设备的数据访问/可携性——这与GDPR关于个人数据处理的规则是不同的问题',
          '其目的是让你能够将设备生成的数据导向第三方服务，而不仅仅是制造商自家的应用',
          '主要义务自2025年9月12日起适用；智能家居设备与联网汽车和健康监测设备一起被明确列为适用范围内的"联网产品"',
          '本文只是一般性介绍，不构成法律建议——如有具体合规问题，请咨询欧盟官方数据法案资源或合格顾问',
          '有关个人数据处理问题，请参见本站已有的以GDPR为重点的智能家居指南',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: '数据法案与GDPR的区别',
        content:
          '**GDPR规范个人数据如何被处理、存储和保护；数据法案规范联网设备生成数据的访问权和可携性——这两项法规处理的是相关但不同的问题。**',
        items: [
          'GDPR问题：我的个人数据（姓名、语音录音、摄像头画面）是否被合法处理，我能否访问/删除它？',
          '数据法案问题：我能否取出设备生成的原始数据（例如温控器的使用日志），并将其导向另一项服务，而不仅仅是制造商自家的应用？',
          '一台设备可以完全符合GDPR，同时仍然在数据法案旨在解决的旧规则下限制数据可携性——这两项义务是叠加的，而不是相互替代的。',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '这对智能家居数据可能意味着什么',
        content:
          '**对于本地优先的智能家居用户而言，实际相关性主要在于那些仍依赖制造商云服务的设备——数据法案式的可携权可能会让将这些数据改为导向本地或第三方服务变得更容易。**',
        items: [
          '如果你已经在运行本地优先的配置（Home Assistant、本地存储、不依赖云端），你可能看到的直接好处较少，因为你的数据已经保留在本地，而不需要可携权才能从制造商那里提取出来。',
          '更相关的情形是混合型设备，即使在大部分本地化的配置中，仍会向制造商云服务报告部分数据——可携权正是针对这部分数据。',
          '该义务自2025年9月12日起已具有法律效力，但本文并未逐一追踪各制造商的合规情况——请查阅具体设备的当前文档，而不要仅因截止日期已过就假定行业范围内的变化已经全面落地。',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '依赖本文之前应核实的事项',
        content:
          '**本文是关于数据法案与智能家居相关性的一般性介绍——如需具体合规问题或法律判断，请查阅欧盟当前的官方指导，而不要仅依赖本摘要。**',
        items: [
          '主要义务自2025年9月12日起适用（根据欧盟委员会自己的数据法案页面）——这已经生效，而非未来的截止日期。有一个相关的子截止日期仍待落实：到2027年1月12日前，需完全取消云端/数据处理服务的转换费用。',
          '智能家居设备被欧盟委员会自己的指导明确列为适用范围内的"联网产品"类别，与联网汽车、健康监测设备和工业设备并列——由于委员会的指导确认的是适用范围，而非逐设备的合规情况，请查阅具体设备自身的文档，了解其制造商如何落实该义务。',
          '如果你是制造商，或经营处理智能家居数据的企业，本文不能替代针对你具体情况的合格法律建议。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '欧盟《数据法案》和GDPR是一回事吗？', a: '不是——GDPR规范个人数据处理；数据法案规范联网设备的数据访问和可携性。它们是处理不同问题的独立法规。' },
          { q: '数据法案适用于欧盟以外吗？', a: '这是欧盟法规，因此其直接法律要求针对的是在欧盟运营或服务于欧盟市场的公司，而非全球性强制要求。如果你在欧盟市场内购买或使用联网设备，无论制造商总部设在哪里，该义务都适用。' },
          { q: '这是否意味着我可以强制我的智能温控器制造商与竞争对手共享我的数据？', a: '原则上是的——自2025年9月12日起，欧盟数据持有者必须允许用户将设备生成的数据与自己选择的第三方共享（无论是直接共享，还是要求制造商发送），但接收方为《数字市场法案》"守门人"企业的情况除外。特定制造商是否已就特定设备顺利落实这一点，与该法律权利是否存在是两个不同的问题——请查阅该设备的当前文档。' },
          { q: '本地优先的智能家居需要担心数据法案吗？', a: '影响较为间接——如果你的配置已经通过Home Assistant将数据保留在本地，而非通过制造商的云服务，那么可携权的重要性就会降低，因为一开始就没有需要从中提取数据的云端孤岛。' },
          { q: '我在哪里可以找到数据法案现行的官方文本？', a: '请直接查阅欧盟的官方立法出版物——本文只是一般性介绍，而非法律参考资料。' },
          { q: '这会影响本站已有的私人智能家居GDPR指南吗？', a: '不会——那份指南专门涵盖GDPR合规（个人数据处理）。本文涵盖的是另一项关于数据可携性的、更新的法规。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[打造符合GDPR的私人智能家居（欧盟）](/zh/smart-home/private-smart-home-gdpr) — 相关但独立的个人数据法规',
          '[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks) — 更广泛的隐私背景',
          '[为什么本地智能家居胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud) — 摆脱云端数据依赖的本地优先替代方案',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '欧盟《数据法案》与你的智能家居（2027年）',
      description: '欧盟《数据法案》对欧盟境内智能家居设备的影响：数据可携权，与GDPR不同。',
      url: 'https://www.promptquorum.com/zh/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '欧盟数据法案' }, { '@type': 'Thing', name: '数据可携性' }, { '@type': 'Thing', name: '智能家居法规' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '欧盟《数据法案》和GDPR是一回事吗？', acceptedAnswer: { '@type': 'Answer', text: '不是——GDPR规范个人数据处理；数据法案规范联网设备的数据访问和可携性。' } },
        { '@type': 'Question', name: '本地优先的智能家居需要担心数据法案吗？', acceptedAnswer: { '@type': 'Answer', text: '影响较为间接——如果配置已经通过Home Assistant将数据保留在本地，可携权的重要性就会降低，因为没有需要提取数据的云端孤岛。' } },
        { '@type': 'Question', name: '我在哪里可以找到数据法案现行的官方文本？', acceptedAnswer: { '@type': 'Answer', text: '请直接查阅欧盟的官方立法出版物。' } },
        { '@type': 'Question', name: '这会影响本站已有的私人智能家居GDPR指南吗？', acceptedAnswer: { '@type': 'Answer', text: '不会——那份指南专门涵盖GDPR合规。本文涵盖的是另一项关于数据可携性的、更新的法规。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-es.png',
    title: 'La Ley de Datos de la UE y tu hogar inteligente (2027)',
    seoTitle: 'Ley de Datos de la UE: guía para el hogar inteligente (2027)',
    intro:
      'La Ley de Datos de la UE (Reglamento (UE) 2023/2854) crea derechos de acceso y portabilidad de datos para usuarios de dispositivos conectados bajo el Capítulo II, separados de las reglas del RGPD sobre el procesamiento de datos personales — aborda si puedes obtener los datos generados por tu dispositivo y compartirlos con un servicio diferente, no cómo se procesan tus datos personales. Sus principales obligaciones se aplican desde el 12 de septiembre de 2025, y cubre explícitamente los dispositivos de hogar inteligente de consumo como "productos conectados". Este artículo explica la distinción con el RGPD y qué vigilar como propietario de un hogar inteligente en la UE.',
    metaDescription:
      'Las implicaciones de la Ley de Datos de la UE para los dispositivos de hogar inteligente en la UE: derechos de portabilidad de datos (en vigor desde el 12 de septiembre de 2025), distintos del RGPD.',
    twitterDescription:
      'La Ley de Datos de la UE y los dispositivos de hogar inteligente: derechos de portabilidad de datos, y en qué se diferencia de las reglas del RGPD sobre datos personales.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios y compradores de hogar inteligente en la UE que quieren entender la nueva regulación de datos de dispositivos',
    primaryTerm: 'ley de datos ue hogar inteligente',
    targetKeywords: [
      'ley de datos ue hogar inteligente',
      'ley de datos dispositivos conectados',
      'ley de datos ue vs rgpd',
      'portabilidad de datos hogar inteligente ue',
      'derechos de datos dispositivo conectado ue',
    ],
    leadAnswerBlock:
      '**La Ley de Datos de la UE (Capítulo II, Artículos 3-5) otorga a los usuarios de dispositivos conectados el derecho a acceder a los datos que su dispositivo genera y a que se compartan con terceros de su elección — un derecho de portabilidad y acceso a datos, distinto de las reglas del RGPD sobre cómo se procesan los datos personales.** Sus principales obligaciones se aplican desde el 12 de septiembre de 2025, y los dispositivos de hogar inteligente están explícitamente dentro del alcance.',
    quickAnswerTop: {
      es: {
        question: '¿Qué significa la Ley de Datos de la UE para mis dispositivos de hogar inteligente?',
        answer:
          'La Ley de Datos de la UE te ha dado el derecho, desde el 12 de septiembre de 2025, a acceder a los datos que generan tus dispositivos conectados y dirigirlos a un proveedor de servicios diferente — por ejemplo, compartir los datos de uso de tu termostato inteligente con una aplicación de gestión energética competidora en lugar de solo con el servicio propio del fabricante. Esto es distinto del RGPD, que rige cómo se procesan los datos personales en lugar de la portabilidad de datos entre servicios. Los dispositivos de hogar inteligente están explícitamente nombrados como "productos conectados" dentro del alcance del reglamento.',
        bullets: [
          'Ley de Datos = derechos de acceso/portabilidad para datos de dispositivos conectados',
          'RGPD = reglamento separado que rige el procesamiento de datos personales — ambos abordan cuestiones diferentes',
          'En vigor desde el 12 de septiembre de 2025; los dispositivos de hogar inteligente están explícitamente dentro del alcance',
          'Relevante principalmente si quieres mover datos entre servicios (por ejemplo, monitoreo energético) en lugar de quedarte con la aplicación de un solo fabricante',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Ley de Datos vs RGPD', anchor: 'data-act-vs-gdpr' },
      { label: 'Qué podría significar esto para los datos del hogar inteligente', anchor: 'what-it-means' },
      { label: 'Qué verificar antes de confiar en esto', anchor: 'what-to-check' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'La Ley de Datos de la UE crea derechos de acceso y portabilidad de datos para dispositivos conectados, distintos de las reglas del RGPD sobre el procesamiento de datos personales.' },
      { type: 'plain-terms', content: 'El RGPD protege tu información personal y regula cómo la usan las empresas. La Ley de Datos es una regla de la UE diferente y más reciente sobre si puedes obtener los datos que producen tus dispositivos inteligentes y entregarlos a una empresa o aplicación diferente, en lugar de quedarte limitado solo al servicio propio del fabricante.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'La Ley de Datos de la UE aborda el acceso/portabilidad de datos para dispositivos conectados — una cuestión diferente de las reglas del RGPD sobre el procesamiento de datos personales',
          'Está dirigida a permitirte enviar los datos generados por tu dispositivo a un servicio de terceros, no solo a la aplicación propia del fabricante',
          'Las principales obligaciones se aplican desde el 12 de septiembre de 2025; los dispositivos de hogar inteligente están explícitamente nombrados como "productos conectados" dentro del alcance, junto con coches conectados y monitores de salud',
          'Este artículo es una orientación general, no un consejo legal — para una cuestión de cumplimiento específica, consulta los recursos oficiales de la Ley de Datos de la UE o a un asesor calificado',
          'Consulta la guía centrada en el RGPD para el hogar inteligente ya presente en este sitio para cuestiones de procesamiento de datos personales',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'Ley de Datos vs RGPD',
        content:
          '**El RGPD rige cómo se procesan, almacenan y protegen los datos personales; la Ley de Datos rige el acceso y la portabilidad de los datos que genera un dispositivo conectado — ambos reglamentos abordan cuestiones relacionadas pero distintas.**',
        items: [
          '¿Se procesan mis datos personales (nombre, grabaciones de voz, imágenes de cámara) legalmente, y puedo acceder a ellos/eliminarlos? — pregunta del RGPD.',
          '¿Puedo obtener los datos brutos que genera mi dispositivo (por ejemplo, los registros de uso de un termostato) y dirigirlos a un servicio diferente, no solo a la aplicación propia del fabricante? — pregunta de la Ley de Datos.',
          'Un dispositivo puede cumplir totalmente con el RGPD mientras aún limita la portabilidad de datos bajo las reglas más antiguas que la Ley de Datos pretende abordar — las dos obligaciones son aditivas, no sustitutas entre sí.',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Qué podría significar esto para los datos del hogar inteligente',
        content:
          '**Para un propietario de hogar inteligente centrado en lo local, la relevancia práctica está principalmente en torno a dispositivos que aún dependen de un servicio en la nube del fabricante — los derechos de portabilidad al estilo de la Ley de Datos podrían facilitar redirigir esos datos localmente o a un servicio de terceros en su lugar.**',
        items: [
          'Si ya tienes una configuración centrada en lo local (Home Assistant, almacenamiento local, sin dependencia de la nube), podrías ver un beneficio menos directo ya que tus datos ya permanecen locales en lugar de necesitar un derecho de portabilidad para extraerlos de un fabricante.',
          'El caso más relevante son los dispositivos híbridos que aún reportan algunos datos a un servicio en la nube del fabricante incluso en una configuración mayormente local — los derechos de portabilidad tratan específicamente sobre esos datos.',
          'La obligación ha estado legalmente en vigor desde el 12 de septiembre de 2025, pero este artículo no rastrea el cumplimiento fabricante por fabricante — verifica la documentación actual de un dispositivo específico en lugar de asumir que ya se han implementado cambios amplios en toda la industria solo porque el plazo ha pasado.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Qué verificar antes de confiar en esto',
        content:
          '**Este artículo es una orientación general sobre la relevancia de la Ley de Datos para los hogares inteligentes — para una cuestión de cumplimiento específica o una determinación legal, verifica la guía oficial actual de la UE en lugar de confiar únicamente en este resumen.**',
        items: [
          'Las principales obligaciones se aplican desde el 12 de septiembre de 2025 (según las propias páginas de la Ley de Datos de la Comisión Europea) — esto ya está en vigor, no es un plazo futuro. Un subplazo relacionado sigue pendiente: la eliminación completa de los cargos de cambio de servicios de nube/procesamiento de datos para el 12 de enero de 2027.',
          'Los dispositivos de hogar inteligente están explícitamente nombrados como una categoría de "producto conectado" dentro del alcance por la propia guía de la Comisión Europea, junto con coches conectados, dispositivos de monitoreo de salud y equipos industriales — verifica la propia documentación de un dispositivo específico para ver cómo su fabricante ha implementado la obligación, ya que la guía de la Comisión confirma el alcance, no el cumplimiento por dispositivo.',
          'Si eres fabricante o diriges un negocio que maneja datos de hogar inteligente, este artículo no sustituye un consejo legal calificado específico para tu situación.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es la Ley de Datos de la UE lo mismo que el RGPD?', a: 'No — el RGPD rige el procesamiento de datos personales; la Ley de Datos rige el acceso y la portabilidad de datos para dispositivos conectados. Son reglamentos separados que abordan cuestiones diferentes.' },
          { q: '¿Se aplica la Ley de Datos fuera de la UE?', a: 'Es un reglamento de la UE, por lo que sus requisitos legales directos se dirigen a empresas que operan en o sirven al mercado de la UE, no a un mandato global. Si compras o usas un dispositivo conectado dentro del mercado de la UE, la obligación se aplica independientemente de dónde tenga su sede el fabricante.' },
          { q: '¿Significa esto que puedo obligar al fabricante de mi termostato inteligente a compartir mis datos con un competidor?', a: 'Sí, en principio — desde el 12 de septiembre de 2025, los titulares de datos de la UE deben permitir que los usuarios compartan datos generados por el dispositivo con un tercero de su elección (ya sea directamente o pidiendo al fabricante que los envíe), con una excepción para las empresas "guardianas de acceso" del Digital Markets Act como destinatarias. Si un fabricante específico ha implementado esto realmente sin problemas para un dispositivo específico es una cuestión separada de si el derecho legal existe — verifica la documentación actual de ese dispositivo.' },
          { q: '¿Necesita un hogar inteligente centrado en lo local preocuparse por la Ley de Datos?', a: 'Menos directamente — si tu configuración ya mantiene los datos locales a través de Home Assistant en lugar de un servicio en la nube del fabricante, los derechos de portabilidad importan menos ya que no hay un silo en la nube del que extraer datos en primer lugar.' },
          { q: '¿Dónde puedo encontrar el texto oficial actual de la Ley de Datos?', a: 'Verifica directamente las publicaciones legislativas oficiales de la Unión Europea — este artículo es una orientación general, no una referencia legal.' },
          { q: '¿Afecta esto a la guía de RGPD para hogar inteligente privado ya presente en este sitio?', a: 'No — esa guía cubre específicamente el cumplimiento del RGPD (procesamiento de datos personales). Este artículo cubre un reglamento separado y más reciente sobre portabilidad de datos.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Construir un hogar inteligente privado compatible con el RGPD (UE)](/es/smart-home/private-smart-home-gdpr) — el reglamento de datos personales relacionado pero distinto',
          '[Riesgos de privacidad del hogar inteligente](/es/smart-home/smart-home-privacy-risks) — el contexto de privacidad más amplio',
          '[Por qué un hogar inteligente local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud) — la alternativa local a la dependencia de datos en la nube',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'La Ley de Datos de la UE y tu hogar inteligente (2027)',
      description: 'Las implicaciones de la Ley de Datos de la UE para los dispositivos de hogar inteligente en la UE: derechos de portabilidad de datos, distintos del RGPD.',
      url: 'https://www.promptquorum.com/es/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Ley de Datos de la UE' }, { '@type': 'Thing', name: 'Portabilidad de datos' }, { '@type': 'Thing', name: 'Regulación del hogar inteligente' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Es la Ley de Datos de la UE lo mismo que el RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'No — el RGPD rige el procesamiento de datos personales; la Ley de Datos rige el acceso y la portabilidad de datos para dispositivos conectados.' } },
        { '@type': 'Question', name: '¿Necesita un hogar inteligente centrado en lo local preocuparse por la Ley de Datos?', acceptedAnswer: { '@type': 'Answer', text: 'Menos directamente — si tu configuración ya mantiene los datos locales a través de Home Assistant, los derechos de portabilidad importan menos ya que no hay un silo en la nube del que extraer datos.' } },
        { '@type': 'Question', name: '¿Dónde puedo encontrar el texto oficial actual de la Ley de Datos?', acceptedAnswer: { '@type': 'Answer', text: 'Verifica directamente las publicaciones legislativas oficiales de la Unión Europea.' } },
        { '@type': 'Question', name: '¿Afecta esto a la guía de RGPD para hogar inteligente privado ya presente en este sitio?', acceptedAnswer: { '@type': 'Answer', text: 'No — esa guía cubre específicamente el cumplimiento del RGPD. Este artículo cubre un reglamento separado y más reciente sobre portabilidad de datos.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-pt.png',
    title: 'A Lei de Dados da UE e sua casa inteligente (2027)',
    seoTitle: 'Lei de Dados da UE: guia para casa inteligente (2027)',
    intro:
      'A Lei de Dados da UE (Regulamento (UE) 2023/2854) cria direitos de acesso e portabilidade de dados para usuários de dispositivos conectados sob o Capítulo II, separados das regras do RGPD sobre o processamento de dados pessoais — ela trata de saber se você pode obter os dados gerados pelo seu dispositivo e compartilhá-los com um serviço diferente, não como seus dados pessoais são processados. Suas principais obrigações se aplicam desde 12 de setembro de 2025, e ela cobre explicitamente dispositivos de casa inteligente de consumo como "produtos conectados". Este artigo explica a distinção em relação ao RGPD e o que observar como proprietário de casa inteligente na UE.',
    metaDescription:
      'As implicações da Lei de Dados da UE para dispositivos de casa inteligente na UE: direitos de portabilidade de dados (em vigor desde 12 de setembro de 2025), distintos do RGPD.',
    twitterDescription:
      'A Lei de Dados da UE e dispositivos de casa inteligente: direitos de portabilidade de dados, e como isso difere das regras do RGPD sobre dados pessoais.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos e compradores de casa inteligente na UE que querem entender a nova regulamentação de dados de dispositivos',
    primaryTerm: 'lei de dados ue casa inteligente',
    targetKeywords: [
      'lei de dados ue casa inteligente',
      'lei de dados dispositivos conectados',
      'lei de dados ue vs rgpd',
      'portabilidade de dados casa inteligente ue',
      'direitos de dados dispositivo conectado ue',
    ],
    leadAnswerBlock:
      '**A Lei de Dados da UE (Capítulo II, Artigos 3-5) dá aos usuários de dispositivos conectados o direito de acessar os dados que seu dispositivo gera e de tê-los compartilhados com terceiros de sua escolha — um direito de portabilidade e acesso a dados, distinto das regras do RGPD sobre como os dados pessoais são processados.** Suas principais obrigações se aplicam desde 12 de setembro de 2025, e dispositivos de casa inteligente estão explicitamente dentro do escopo.',
    quickAnswerTop: {
      pt: {
        question: 'O que a Lei de Dados da UE significa para meus dispositivos de casa inteligente?',
        answer:
          'A Lei de Dados da UE deu a você o direito, desde 12 de setembro de 2025, de acessar os dados que seus dispositivos conectados geram e direcioná-los para um provedor de serviços diferente — por exemplo, compartilhar os dados de uso do seu termostato inteligente com um aplicativo concorrente de gestão de energia em vez de apenas com o serviço próprio do fabricante. Isso é separado do RGPD, que rege como os dados pessoais são processados, em vez da portabilidade de dados entre serviços. Dispositivos de casa inteligente são explicitamente nomeados como "produtos conectados" dentro do escopo do regulamento.',
        bullets: [
          'Lei de Dados = direitos de acesso/portabilidade para dados de dispositivos conectados',
          'RGPD = regulamento separado que rege o processamento de dados pessoais — os dois tratam de questões diferentes',
          'Em vigor desde 12 de setembro de 2025; dispositivos de casa inteligente estão explicitamente dentro do escopo',
          'Relevante principalmente se você quiser mover dados entre serviços (por exemplo, monitoramento de energia) em vez de ficar com o aplicativo de um único fabricante',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Lei de Dados vs RGPD', anchor: 'data-act-vs-gdpr' },
      { label: 'O que isso poderia significar para os dados da casa inteligente', anchor: 'what-it-means' },
      { label: 'O que verificar antes de confiar nisso', anchor: 'what-to-check' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A Lei de Dados da UE cria direitos de acesso e portabilidade de dados para dispositivos conectados, distintos das regras do RGPD sobre o processamento de dados pessoais.' },
      { type: 'plain-terms', content: 'O RGPD protege suas informações pessoais e rege como as empresas as usam. A Lei de Dados é uma regra da UE diferente e mais recente sobre se você pode obter os dados que seus dispositivos inteligentes produzem e entregá-los a uma empresa ou aplicativo diferente, em vez de ficar preso apenas ao serviço próprio do fabricante.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'A Lei de Dados da UE trata do acesso/portabilidade de dados para dispositivos conectados — uma questão diferente das regras do RGPD sobre o processamento de dados pessoais',
          'Ela visa permitir que você direcione os dados gerados pelo seu dispositivo para um serviço terceirizado, não apenas para o aplicativo próprio do fabricante',
          'As principais obrigações se aplicam desde 12 de setembro de 2025; dispositivos de casa inteligente são explicitamente nomeados como "produtos conectados" dentro do escopo, ao lado de carros conectados e monitores de saúde',
          'Este artigo é uma orientação geral, não aconselhamento jurídico — para uma questão de conformidade específica, consulte os recursos oficiais da Lei de Dados da UE ou um consultor qualificado',
          'Veja o guia focado em RGPD para casa inteligente já presente neste site para questões de processamento de dados pessoais',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'Lei de Dados vs RGPD',
        content:
          '**O RGPD rege como os dados pessoais são processados, armazenados e protegidos; a Lei de Dados rege o acesso e a portabilidade dos dados que um dispositivo conectado gera — os dois regulamentos tratam de questões relacionadas, mas distintas.**',
        items: [
          'Pergunta do RGPD: meus dados pessoais (nome, gravações de voz, imagens de câmera) estão sendo processados legalmente, e posso acessá-los/excluí-los?',
          'Pergunta da Lei de Dados: posso obter os dados brutos que meu dispositivo gera (por exemplo, os registros de uso de um termostato) e direcioná-los para um serviço diferente, não apenas o aplicativo próprio do fabricante?',
          'Um dispositivo pode estar totalmente em conformidade com o RGPD enquanto ainda limita a portabilidade de dados sob as regras mais antigas que a Lei de Dados pretende abordar — as duas obrigações são aditivas, não substitutas uma da outra.',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'O que isso poderia significar para os dados da casa inteligente',
        content:
          '**Para um dono de casa inteligente com abordagem local-first, a relevância prática está principalmente em torno de dispositivos que ainda dependem de um serviço em nuvem do fabricante — direitos de portabilidade no estilo da Lei de Dados poderiam facilitar redirecionar esses dados localmente ou para um serviço terceirizado.**',
        items: [
          'Se você já usa uma configuração local-first (Home Assistant, armazenamento local, sem dependência de nuvem), pode ver um benefício menos direto, já que seus dados já permanecem locais em vez de precisar de um direito de portabilidade para extraí-los de um fabricante.',
          'O caso mais relevante são dispositivos híbridos que ainda reportam alguns dados para um serviço em nuvem do fabricante mesmo em uma configuração majoritariamente local — direitos de portabilidade tratam especificamente desses dados.',
          'A obrigação está legalmente em vigor desde 12 de setembro de 2025, mas este artigo não rastreia a conformidade fabricante por fabricante — verifique a documentação atual de um dispositivo específico em vez de presumir que mudanças amplas em toda a indústria já foram implementadas apenas porque o prazo passou.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'O que verificar antes de confiar nisso',
        content:
          '**Este artigo é uma orientação geral sobre a relevância da Lei de Dados para casas inteligentes — para uma questão de conformidade específica ou determinação jurídica, verifique a orientação oficial atual da UE em vez de confiar apenas neste resumo.**',
        items: [
          'As principais obrigações se aplicam desde 12 de setembro de 2025 (segundo as próprias páginas da Lei de Dados da Comissão Europeia) — isso já está em vigor, não é um prazo futuro. Um subprazo relacionado ainda está pendente: a remoção completa das taxas de troca de serviços de nuvem/processamento de dados até 12 de janeiro de 2027.',
          'Dispositivos de casa inteligente são explicitamente nomeados como uma categoria de "produto conectado" dentro do escopo pela própria orientação da Comissão Europeia, ao lado de carros conectados, dispositivos de monitoramento de saúde e equipamentos industriais — verifique a documentação própria de um dispositivo específico para saber como seu fabricante implementou a obrigação, já que a orientação da Comissão confirma o escopo, não a conformidade por dispositivo.',
          'Se você é fabricante ou administra um negócio que lida com dados de casa inteligente, este artigo não substitui aconselhamento jurídico qualificado específico para sua situação.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'A Lei de Dados da UE é a mesma coisa que o RGPD?', a: 'Não — o RGPD rege o processamento de dados pessoais; a Lei de Dados rege o acesso e a portabilidade de dados para dispositivos conectados. São regulamentos separados que tratam de questões diferentes.' },
          { q: 'A Lei de Dados se aplica fora da UE?', a: 'É um regulamento da UE, então seus requisitos legais diretos visam empresas que operam na UE ou atendem ao mercado da UE, não um mandato global. Se você compra ou usa um dispositivo conectado dentro do mercado da UE, a obrigação se aplica independentemente de onde o fabricante tem sede.' },
          { q: 'Isso significa que posso forçar o fabricante do meu termostato inteligente a compartilhar meus dados com um concorrente?', a: 'Sim, em princípio — desde 12 de setembro de 2025, os detentores de dados da UE devem permitir que os usuários compartilhem dados gerados pelo dispositivo com um terceiro de sua escolha (diretamente ou pedindo ao fabricante para enviá-los), com uma exceção para empresas "gatekeeper" do Digital Markets Act como destinatárias. Se um fabricante específico implementou isso de fato sem problemas para um dispositivo específico é uma questão separada da existência do direito legal — verifique a documentação atual daquele dispositivo.' },
          { q: 'Uma casa inteligente local-first precisa se preocupar com a Lei de Dados?', a: 'Menos diretamente — se sua configuração já mantém os dados locais via Home Assistant em vez de um serviço em nuvem do fabricante, os direitos de portabilidade importam menos, já que não há um silo em nuvem do qual extrair dados em primeiro lugar.' },
          { q: 'Onde posso encontrar o texto oficial atual da Lei de Dados?', a: 'Verifique diretamente as publicações legislativas oficiais da União Europeia — este artigo é uma orientação geral, não uma referência jurídica.' },
          { q: 'Isso afeta o guia de RGPD para casa inteligente privada já presente neste site?', a: 'Não — aquele guia cobre especificamente a conformidade com o RGPD (processamento de dados pessoais). Este artigo cobre um regulamento separado e mais recente sobre portabilidade de dados.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Construindo uma casa inteligente privada compatível com o RGPD (UE)](/pt/smart-home/private-smart-home-gdpr) — o regulamento de dados pessoais relacionado, mas distinto',
          '[Riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks) — o contexto de privacidade mais amplo',
          '[Por que uma casa inteligente local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud) — a alternativa local-first à dependência de dados em nuvem',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'A Lei de Dados da UE e sua casa inteligente (2027)',
      description: 'As implicações da Lei de Dados da UE para dispositivos de casa inteligente na UE: direitos de portabilidade de dados, distintos do RGPD.',
      url: 'https://www.promptquorum.com/pt/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Lei de Dados da UE' }, { '@type': 'Thing', name: 'Portabilidade de dados' }, { '@type': 'Thing', name: 'Regulamentação da casa inteligente' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'A Lei de Dados da UE é a mesma coisa que o RGPD?', acceptedAnswer: { '@type': 'Answer', text: 'Não — o RGPD rege o processamento de dados pessoais; a Lei de Dados rege o acesso e a portabilidade de dados para dispositivos conectados.' } },
        { '@type': 'Question', name: 'Uma casa inteligente local-first precisa se preocupar com a Lei de Dados?', acceptedAnswer: { '@type': 'Answer', text: 'Menos diretamente — se a configuração já mantém os dados locais via Home Assistant, os direitos de portabilidade importam menos, já que não há um silo em nuvem do qual extrair dados.' } },
        { '@type': 'Question', name: 'Onde posso encontrar o texto oficial atual da Lei de Dados?', acceptedAnswer: { '@type': 'Answer', text: 'Verifique diretamente as publicações legislativas oficiais da União Europeia.' } },
        { '@type': 'Question', name: 'Isso afeta o guia de RGPD para casa inteligente privada já presente neste site?', acceptedAnswer: { '@type': 'Answer', text: 'Não — aquele guia cobre especificamente a conformidade com o RGPD. Este artigo cobre um regulamento separado e mais recente sobre portabilidade de dados.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-ar.png',
    title: 'قانون البيانات الأوروبي ومنزلك الذكي (⁨2027⁩)',
    seoTitle: 'قانون البيانات الأوروبي: دليل المنزل الذكي (⁨2027⁩)',
    intro:
      'ينشئ قانون البيانات الأوروبي (اللائحة (الاتحاد الأوروبي) 2023/2854) بموجب الفصل الثاني حقوق الوصول إلى البيانات وقابليتها للنقل لمستخدمي الأجهزة المتصلة، بمعزل عن قواعد GDPR المتعلقة بمعالجة البيانات الشخصية — فهو يعالج ما إذا كان بإمكانك الحصول على البيانات التي يولّدها جهازك ومشاركتها مع خدمة مختلفة، وليس كيفية معالجة بياناتك الشخصية. تُطبَّق التزاماته الرئيسية منذ 12 سبتمبر 2025، ويغطي بوضوح أجهزة المنزل الذكي الاستهلاكية باعتبارها "منتجات متصلة". يوضح هذا المقال الفرق عن GDPR وما الذي يجب الانتباه إليه كمالك منزل ذكي في الاتحاد الأوروبي.',
    metaDescription:
      'آثار قانون البيانات الأوروبي على أجهزة المنزل الذكي في الاتحاد الأوروبي: حقوق قابلية نقل البيانات (سارية منذ 12 سبتمبر 2025)، منفصلة عن GDPR.',
    twitterDescription:
      'قانون البيانات الأوروبي وأجهزة المنزل الذكي: حقوق قابلية نقل البيانات، وكيف يختلف ذلك عن قواعد GDPR الخاصة بالبيانات الشخصية.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب ومشترو المنازل الذكية في الاتحاد الأوروبي الراغبون في فهم لائحة بيانات الأجهزة الجديدة',
    primaryTerm: 'eu data act smart home',
    targetKeywords: [
      'قانون البيانات الأوروبي المنزل الذكي',
      'قانون البيانات الأجهزة المتصلة',
      'قانون البيانات الأوروبي مقابل gdpr',
      'قابلية نقل بيانات المنزل الذكي الاتحاد الأوروبي',
      'حقوق بيانات الجهاز المتصل الاتحاد الأوروبي',
    ],
    leadAnswerBlock:
      '**يمنح قانون البيانات الأوروبي (الفصل الثاني، المواد 3-5) مستخدمي الأجهزة المتصلة الحق في الوصول إلى البيانات التي يولّدها جهازهم ومشاركتها مع أطراف ثالثة من اختيارهم — وهو حق في قابلية نقل البيانات والوصول إليها، يختلف عن قواعد GDPR المتعلقة بكيفية معالجة البيانات الشخصية.** تُطبَّق التزاماته الرئيسية منذ 12 سبتمبر 2025، وتقع أجهزة المنزل الذكي صراحة ضمن نطاقه.',
    quickAnswerTop: {
      ar: {
        question: 'ماذا يعني قانون البيانات الأوروبي بالنسبة لأجهزة منزلي الذكي؟',
        answer:
          'منحك قانون البيانات الأوروبي، منذ 12 سبتمبر 2025، الحق في الوصول إلى البيانات التي تولّدها أجهزتك المتصلة وتوجيهها إلى مزود خدمة مختلف — على سبيل المثال، مشاركة بيانات استخدام منظم الحرارة الذكي لديك مع تطبيق إدارة طاقة منافس بدلًا من خدمة الشركة المصنّعة الخاصة فقط. هذا منفصل عن GDPR، الذي ينظّم كيفية معالجة البيانات الشخصية بدلًا من قابلية نقل البيانات بين الخدمات. تُذكر أجهزة المنزل الذكي صراحة باعتبارها "منتجات متصلة" ضمن نطاق اللائحة.',
        bullets: [
          'قانون البيانات = حقوق الوصول/قابلية النقل لبيانات الأجهزة المتصلة',
          'GDPR = لائحة منفصلة تنظّم معالجة البيانات الشخصية — يعالج كل منهما مسألة مختلفة',
          'ساري المفعول منذ 12 سبتمبر 2025؛ تقع أجهزة المنزل الذكي صراحة ضمن النطاق',
          'مهم بشكل أساسي إذا كنت تريد نقل البيانات بين الخدمات (مثل مراقبة الطاقة) بدلًا من البقاء مع تطبيق شركة مصنّعة واحدة',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'قانون البيانات مقابل GDPR', anchor: 'data-act-vs-gdpr' },
      { label: 'ما الذي قد يعنيه هذا لبيانات المنزل الذكي', anchor: 'what-it-means' },
      { label: 'ما يجب التحقق منه قبل الاعتماد على هذا', anchor: 'what-to-check' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ينشئ قانون البيانات الأوروبي حقوق الوصول إلى البيانات وقابليتها للنقل لبيانات الأجهزة المتصلة، بمعزل عن قواعد GDPR المتعلقة بمعالجة البيانات الشخصية.' },
      { type: 'plain-terms', content: 'يتعلق GDPR بحماية معلوماتك الشخصية وكيفية استخدام الشركات لها. قانون البيانات هو قاعدة أوروبية مختلفة وأحدث تتعلق بما إذا كان بإمكانك الحصول على البيانات التي تنتجها أجهزتك الذكية وتسليمها لشركة أو تطبيق مختلف، بدلًا من أن تكون مقيدًا بخدمة الشركة المصنّعة الخاصة فقط.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'يعالج قانون البيانات الأوروبي الوصول إلى البيانات/قابلية نقلها للأجهزة المتصلة — وهي مسألة مختلفة عن قواعد GDPR المتعلقة بمعالجة البيانات الشخصية',
          'يهدف إلى السماح لك بتوجيه البيانات التي يولّدها جهازك إلى خدمة طرف ثالث، وليس فقط تطبيق الشركة المصنّعة الخاص',
          'تُطبَّق الالتزامات الرئيسية منذ 12 سبتمبر 2025؛ تُذكر أجهزة المنزل الذكي صراحة باعتبارها "منتجات متصلة" ضمن النطاق، إلى جانب السيارات المتصلة وأجهزة مراقبة الصحة',
          'هذا المقال هو توجيه عام، وليس استشارة قانونية — لسؤال امتثال محدد، راجع موارد قانون البيانات الرسمية للاتحاد الأوروبي أو مستشارًا مؤهلاً',
          'راجع دليل المنزل الذكي الذي يركز على GDPR والموجود بالفعل على هذا الموقع لأسئلة معالجة البيانات الشخصية',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: 'قانون البيانات مقابل GDPR',
        content:
          '**ينظّم GDPR كيفية معالجة البيانات الشخصية وتخزينها وحمايتها؛ ينظّم قانون البيانات الوصول إلى البيانات التي يولّدها جهاز متصل وقابليتها للنقل — تعالج اللائحتان مسألتين مرتبطتين لكن مختلفتين.**',
        items: [
          'سؤال GDPR: هل تتم معالجة بياناتي الشخصية (الاسم، التسجيلات الصوتية، لقطات الكاميرا) بشكل قانوني، وهل يمكنني الوصول إليها/حذفها؟',
          'سؤال قانون البيانات: هل يمكنني الحصول على البيانات الخام التي يولّدها جهازي (مثل سجلات استخدام منظم الحرارة) وتوجيهها إلى خدمة مختلفة، وليس فقط تطبيق الشركة المصنّعة الخاص؟',
          'يمكن أن يكون الجهاز متوافقًا تمامًا مع GDPR بينما لا يزال يحد من قابلية نقل البيانات بموجب القواعد القديمة التي يهدف قانون البيانات إلى معالجتها — الالتزامان إضافيان، وليسا بديلين لبعضهما البعض.',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'ما الذي قد يعنيه هذا لبيانات المنزل الذكي',
        content:
          '**بالنسبة لمالك المنزل الذكي الذي يركز على المحلي، تتمحور الأهمية العملية بشكل أساسي حول الأجهزة التي لا تزال تعتمد على خدمة سحابية للشركة المصنّعة — يمكن أن تجعل حقوق قابلية النقل على غرار قانون البيانات من الأسهل إعادة توجيه تلك البيانات محليًا أو إلى خدمة طرف ثالث بدلًا من ذلك.**',
        items: [
          'إذا كنت تدير بالفعل إعدادًا محليًا أولاً (Home Assistant، تخزين محلي، لا اعتماد على السحابة)، فقد ترى فائدة أقل مباشرة لأن بياناتك تبقى بالفعل محلية بدلًا من الحاجة إلى حق قابلية النقل لاستخراجها من الشركة المصنّعة.',
          'الحالة الأكثر صلة هي الأجهزة الهجينة التي لا تزال تُبلغ عن بعض البيانات إلى خدمة سحابية للشركة المصنّعة حتى في إعداد محلي في الغالب — تتعلق حقوق قابلية النقل بتلك البيانات تحديدًا.',
          'أصبح الالتزام ساري المفعول قانونيًا منذ 12 سبتمبر 2025، لكن هذا المقال لا يتتبع الامتثال لكل شركة مصنّعة على حدة — تحقق من الوثائق الحالية لجهاز محدد بدلًا من افتراض أن التغييرات الواسعة على مستوى الصناعة قد طُبقت بالفعل لمجرد انقضاء الموعد النهائي.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'ما يجب التحقق منه قبل الاعتماد على هذا',
        content:
          '**هذا المقال هو توجيه عام حول صلة قانون البيانات بالمنازل الذكية — لسؤال امتثال محدد أو تحديد قانوني، تحقق من الإرشادات الرسمية الحالية للاتحاد الأوروبي بدلًا من الاعتماد على هذا الملخص وحده.**',
        items: [
          'تُطبَّق الالتزامات الرئيسية منذ 12 سبتمبر 2025 (وفقًا لصفحات قانون البيانات الخاصة بالمفوضية الأوروبية نفسها) — هذا ساري المفعول بالفعل، وليس موعدًا نهائيًا مستقبليًا. لا يزال هناك موعد نهائي فرعي ذو صلة معلقًا: الإزالة الكاملة لرسوم التبديل بين خدمات السحابة/معالجة البيانات بحلول 12 يناير 2027.',
          'تُذكر أجهزة المنزل الذكي صراحة كفئة "منتج متصل" ضمن النطاق من قِبل إرشادات المفوضية الأوروبية نفسها، إلى جانب السيارات المتصلة وأجهزة مراقبة الصحة والمعدات الصناعية — تحقق من وثائق جهاز محدد لمعرفة كيفية تنفيذ الشركة المصنّعة للالتزام، لأن إرشادات المفوضية تؤكد النطاق، وليس الامتثال لكل جهاز على حدة.',
          'إذا كنت شركة مصنّعة أو تدير عملاً يتعامل مع بيانات المنزل الذكي، فإن هذا المقال ليس بديلاً عن استشارة قانونية مؤهلة خاصة بحالتك.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل قانون البيانات الأوروبي هو نفسه GDPR؟', a: 'لا — ينظّم GDPR معالجة البيانات الشخصية؛ ينظّم قانون البيانات الوصول إلى البيانات وقابليتها للنقل للأجهزة المتصلة. إنهما لائحتان منفصلتان تعالجان مسائل مختلفة.' },
          { q: 'هل ينطبق قانون البيانات خارج الاتحاد الأوروبي؟', a: 'إنه لائحة تابعة للاتحاد الأوروبي، لذا تستهدف متطلباته القانونية المباشرة الشركات العاملة في سوق الاتحاد الأوروبي أو التي تخدمه، وليس تفويضًا عالميًا. إذا اشتريت أو استخدمت جهازًا متصلاً داخل سوق الاتحاد الأوروبي، ينطبق الالتزام بغض النظر عن مكان مقر الشركة المصنّعة.' },
          { q: 'هل يعني هذا أنه يمكنني إجبار الشركة المصنّعة لمنظم الحرارة الذكي الخاص بي على مشاركة بياناتي مع منافس؟', a: 'نعم، من حيث المبدأ — منذ 12 سبتمبر 2025، يجب على حاملي البيانات في الاتحاد الأوروبي السماح للمستخدمين بمشاركة البيانات التي يولّدها الجهاز مع طرف ثالث من اختيارهم (إما مباشرة أو بطلب من الشركة المصنّعة إرسالها)، مع استثناء لشركات "حراس البوابة" بموجب قانون الأسواق الرقمية كمستلمين. أما ما إذا كانت شركة مصنّعة محددة قد نفذت هذا فعليًا بسلاسة لجهاز محدد، فهذا سؤال منفصل عن وجود الحق القانوني — تحقق من الوثائق الحالية لذلك الجهاز.' },
          { q: 'هل يحتاج المنزل الذكي الذي يركز على المحلي إلى القلق بشأن قانون البيانات؟', a: 'بشكل أقل مباشرة — إذا كان إعدادك يحتفظ بالفعل بالبيانات محليًا عبر Home Assistant بدلًا من خدمة سحابية للشركة المصنّعة، فإن حقوق قابلية النقل تهم بشكل أقل لأنه لا يوجد صومعة سحابية لاستخراج البيانات منها في المقام الأول.' },
          { q: 'أين يمكنني العثور على النص الرسمي الحالي لقانون البيانات؟', a: 'تحقق مباشرة من المنشورات التشريعية الرسمية للاتحاد الأوروبي — هذا المقال هو توجيه عام، وليس مرجعًا قانونيًا.' },
          { q: 'هل يؤثر هذا على دليل GDPR للمنزل الذكي الخاص الموجود بالفعل على هذا الموقع؟', a: 'لا — يغطي ذلك الدليل تحديدًا الامتثال لـ GDPR (معالجة البيانات الشخصية). يغطي هذا المقال لائحة منفصلة وأحدث بشأن قابلية نقل البيانات.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[بناء منزل ذكي خاص متوافق مع GDPR (الاتحاد الأوروبي)](/ar/smart-home/private-smart-home-gdpr) — لائحة البيانات الشخصية ذات الصلة لكن المنفصلة',
          '[مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks) — السياق الأوسع للخصوصية',
          '[لماذا يتفوق المنزل الذكي المحلي على السحابة](/ar/smart-home/why-local-smart-home-beats-cloud) — البديل المحلي أولاً للاعتماد على بيانات السحابة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'قانون البيانات الأوروبي ومنزلك الذكي (⁨2027⁩)',
      description: 'آثار قانون البيانات الأوروبي على أجهزة المنزل الذكي في الاتحاد الأوروبي: حقوق قابلية نقل البيانات، منفصلة عن GDPR.',
      url: 'https://www.promptquorum.com/ar/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'قانون البيانات الأوروبي' }, { '@type': 'Thing', name: 'قابلية نقل البيانات' }, { '@type': 'Thing', name: 'لوائح المنزل الذكي' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل قانون البيانات الأوروبي هو نفسه GDPR؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — ينظّم GDPR معالجة البيانات الشخصية؛ ينظّم قانون البيانات الوصول إلى البيانات وقابليتها للنقل للأجهزة المتصلة.' } },
        { '@type': 'Question', name: 'هل يحتاج المنزل الذكي الذي يركز على المحلي إلى القلق بشأن قانون البيانات؟', acceptedAnswer: { '@type': 'Answer', text: 'بشكل أقل مباشرة — إذا كان الإعداد يحتفظ بالفعل بالبيانات محليًا عبر Home Assistant، فإن حقوق قابلية النقل تهم بشكل أقل لعدم وجود صومعة سحابية لاستخراج البيانات منها.' } },
        { '@type': 'Question', name: 'أين يمكنني العثور على النص الرسمي الحالي لقانون البيانات؟', acceptedAnswer: { '@type': 'Answer', text: 'تحقق مباشرة من المنشورات التشريعية الرسمية للاتحاد الأوروبي.' } },
        { '@type': 'Question', name: 'هل يؤثر هذا على دليل GDPR للمنزل الذكي الخاص الموجود بالفعل على هذا الموقع؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — يغطي ذلك الدليل تحديدًا الامتثال لـ GDPR. يغطي هذا المقال لائحة منفصلة وأحدث بشأن قابلية نقل البيانات.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/eu-data-act-smart-home-2027-overview-hero-ko.png',
    title: 'EU 데이터법과 당신의 스마트홈 (2027년)',
    seoTitle: 'EU 데이터법: 스마트홈 가이드 (2027년)',
    intro:
      'EU 데이터법(규정 (EU) 2023/2854)은 제2장에서 연결된 기기 사용자에게 GDPR의 개인정보 처리 규칙과는 별개로 데이터 접근 및 이동권을 창설합니다 — 이는 개인정보가 어떻게 처리되는지가 아니라, 기기가 생성한 데이터를 꺼내 다른 서비스와 공유할 수 있는지를 다룹니다. 주요 의무는 2025년 9월 12일부터 적용되며, 소비자용 스마트홈 기기를 "연결 제품"으로 명시적으로 포함합니다. 이 글은 GDPR과의 차이점과 EU 스마트홈 소유자로서 주의할 점을 설명합니다.',
    metaDescription:
      'EU 데이터법이 EU 내 스마트홈 기기에 미치는 영향: 데이터 이동권(2025년 9월 12일부터 시행), GDPR과는 별개.',
    twitterDescription:
      'EU 데이터법과 스마트홈 기기: 데이터 이동권, 그리고 이것이 GDPR의 개인정보 규칙과 어떻게 다른지.',
    readTime: '6분 소요',
    educationalLevel: 'Intermediate',
    audience: '새로운 기기 데이터 규정을 이해하려는 EU 기반 스마트홈 소유자 및 구매자',
    primaryTerm: 'eu 데이터법 스마트홈',
    targetKeywords: [
      'eu 데이터법 스마트홈',
      '데이터법 연결 기기',
      'eu 데이터법 vs gdpr',
      '스마트홈 데이터 이동성 eu',
      '연결 기기 데이터 권리 eu',
    ],
    leadAnswerBlock:
      '**EU 데이터법(제2장, 제3~5조)은 연결된 기기 사용자에게 기기가 생성하는 데이터에 접근하고 이를 자신이 선택한 제3자와 공유할 수 있는 권리를 부여합니다 — 이는 개인정보가 어떻게 처리되는지에 관한 GDPR의 규칙과는 별개인 데이터 이동성 및 접근 권리입니다.** 주요 의무는 2025년 9월 12일부터 적용되며, 스마트홈 기기는 명시적으로 적용 범위에 포함됩니다.',
    quickAnswerTop: {
      ko: {
        question: 'EU 데이터법은 제 스마트홈 기기에 어떤 의미가 있나요?',
        answer:
          'EU 데이터법은 2025년 9월 12일부터, 연결된 기기가 생성하는 데이터에 접근하고 이를 다른 서비스 제공업체로 보낼 권리를 부여했습니다 — 예를 들어, 스마트 온도조절기의 사용 데이터를 제조사 자체 서비스만이 아니라 경쟁하는 에너지 관리 앱과 공유하는 것입니다. 이는 서비스 간 데이터 이동성이 아니라 개인정보가 어떻게 처리되는지를 규율하는 GDPR과는 별개입니다. 스마트홈 기기는 규정상 적용 범위에 포함되는 "연결 제품"으로 명시적으로 지정되어 있습니다.',
        bullets: [
          '데이터법 = 연결 기기 데이터에 대한 접근/이동권',
          'GDPR = 개인정보 처리를 규율하는 별개의 규정 — 둘은 서로 다른 문제를 다룸',
          '2025년 9월 12일부터 시행; 스마트홈 기기는 명시적으로 적용 범위에 포함',
          '단일 제조사 앱에 머무르기보다 서비스 간 데이터를 이동하고 싶을 때(예: 에너지 모니터링) 주로 관련됨',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '데이터법과 GDPR의 차이', anchor: 'data-act-vs-gdpr' },
      { label: '스마트홈 데이터에 이것이 의미할 수 있는 것', anchor: 'what-it-means' },
      { label: '이 글에 의존하기 전에 확인할 것', anchor: 'what-to-check' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'EU 데이터법은 연결 기기 데이터에 대한 접근 및 이동권을 창설하며, 이는 개인정보 처리에 관한 GDPR의 규칙과는 별개입니다.' },
      { type: 'plain-terms', content: 'GDPR은 여러분의 개인정보를 보호하고 기업이 이를 어떻게 사용하는지를 규율하는 것입니다. 데이터법은 여러분의 스마트 기기가 생성하는 데이터를 가져와서 제조사 자체 서비스에만 국한되지 않고 다른 회사나 앱에 넘길 수 있는지에 관한, 다르고 더 새로운 EU 규칙입니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'EU 데이터법은 연결 기기에 대한 데이터 접근/이동성을 다룹니다 — 이는 개인정보 처리에 관한 GDPR의 규칙과는 다른 문제입니다',
          '제조사 자체 앱뿐 아니라 기기가 생성한 데이터를 제3자 서비스로 보낼 수 있게 하는 것을 목표로 합니다',
          '주요 의무는 2025년 9월 12일부터 적용됩니다; 스마트홈 기기는 커넥티드 카 및 건강 모니터와 함께 적용 범위에 포함되는 "연결 제품"으로 명시적으로 지정되어 있습니다',
          '이 글은 일반적인 안내이며 법률 자문이 아닙니다 — 구체적인 준수 문제는 EU의 공식 데이터법 자료나 자격을 갖춘 자문가에게 문의하세요',
          '개인정보 처리 관련 질문은 이 사이트에 이미 있는 GDPR 중심 스마트홈 가이드를 참고하세요',
        ],
      },
      dataActVsGdpr: {
        id: 'data-act-vs-gdpr',
        title: '데이터법과 GDPR의 차이',
        content:
          '**GDPR은 개인정보가 어떻게 처리, 저장, 보호되는지를 규율합니다; 데이터법은 연결 기기가 생성하는 데이터에 대한 접근과 이동성을 규율합니다 — 두 규정은 서로 관련은 있지만 별개의 문제를 다룹니다.**',
        items: [
          'GDPR 질문: 제 개인정보(이름, 음성 녹음, 카메라 영상)가 합법적으로 처리되고 있으며, 제가 그것에 접근하거나 삭제할 수 있나요?',
          '데이터법 질문: 제 기기가 생성하는 원시 데이터(예: 온도조절기의 사용 로그)를 가져와서 제조사 자체 앱뿐 아니라 다른 서비스로 보낼 수 있나요?',
          '기기는 완전히 GDPR을 준수하면서도, 데이터법이 다루고자 하는 이전 규칙 아래에서는 여전히 데이터 이동성을 제한할 수 있습니다 — 두 의무는 상호 대체가 아니라 추가적인 것입니다.',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '스마트홈 데이터에 이것이 의미할 수 있는 것',
        content:
          '**로컬 우선 스마트홈 소유자에게 실질적인 관련성은 주로 여전히 제조사 클라우드 서비스에 의존하는 기기에 있습니다 — 데이터법 방식의 이동권은 해당 데이터를 대신 로컬이나 제3자 서비스로 리디렉션하기 더 쉽게 만들 수 있습니다.**',
        items: [
          '이미 로컬 우선 구성(Home Assistant, 로컬 저장소, 클라우드 의존 없음)을 운영하고 있다면, 데이터가 이미 로컬에 유지되므로 제조사로부터 데이터를 추출하기 위한 이동권이 필요하지 않아 직접적인 혜택이 적을 수 있습니다.',
          '더 관련성이 높은 경우는 대부분 로컬 구성이더라도 여전히 일부 데이터를 제조사 클라우드 서비스에 보고하는 하이브리드 기기입니다 — 이동권은 구체적으로 그 데이터에 관한 것입니다.',
          '이 의무는 2025년 9월 12일부터 법적으로 시행되고 있지만, 이 글은 제조사별 준수 상황을 추적하지 않습니다 — 마감일이 지났다고 해서 업계 전반의 광범위한 변화가 이미 이루어졌다고 가정하지 말고 특정 기기의 현재 문서를 확인하세요.',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '이 글에 의존하기 전에 확인할 것',
        content:
          '**이 글은 데이터법이 스마트홈과 관련된 방식에 대한 일반적인 안내입니다 — 구체적인 준수 문제나 법적 판단이 필요하다면 이 요약에만 의존하지 말고 EU의 현재 공식 안내를 확인하세요.**',
        items: [
          '주요 의무는 2025년 9월 12일부터 적용됩니다(유럽위원회 자체 데이터법 페이지 기준) — 이는 이미 시행 중이며, 미래의 마감일이 아닙니다. 관련된 한 가지 하위 마감일이 아직 남아 있습니다: 2027년 1월 12일까지 클라우드/데이터 처리 서비스 전환 수수료의 완전한 폐지입니다.',
          '스마트홈 기기는 유럽위원회 자체 안내에 의해 커넥티드 카, 건강 모니터링 기기, 산업 장비와 함께 적용 범위에 포함되는 "연결 제품" 범주로 명시적으로 지정되어 있습니다 — 위원회의 안내는 적용 범위를 확인하는 것이지 기기별 준수 여부를 확인하는 것이 아니므로, 제조사가 의무를 어떻게 이행했는지는 특정 기기 자체의 문서를 확인하세요.',
          '제조사이거나 스마트홈 데이터를 다루는 비즈니스를 운영하고 있다면, 이 글은 여러분의 상황에 특화된 자격을 갖춘 법률 자문을 대체하지 않습니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'EU 데이터법은 GDPR과 같은 것인가요?', a: '아니요 — GDPR은 개인정보 처리를 규율하고, 데이터법은 연결 기기에 대한 데이터 접근과 이동성을 규율합니다. 이들은 서로 다른 문제를 다루는 별개의 규정입니다.' },
          { q: '데이터법은 EU 밖에도 적용되나요?', a: '이는 EU 규정이므로 직접적인 법적 요구사항은 전 세계적 의무가 아니라 EU에서 운영되거나 EU 시장에 서비스를 제공하는 기업을 대상으로 합니다. EU 시장 내에서 연결 기기를 구매하거나 사용하는 경우, 제조사의 본사가 어디에 있든 이 의무가 적용됩니다.' },
          { q: '이것은 제 스마트 온도조절기 제조사가 제 데이터를 경쟁사와 공유하도록 강제할 수 있다는 뜻인가요?', a: '원칙적으로 그렇습니다 — 2025년 9월 12일부터 EU 데이터 보유자는 사용자가 기기 생성 데이터를 자신이 선택한 제3자와 공유할 수 있도록 해야 합니다(직접 또는 제조사에 전송을 요청하는 방식으로). 단, 디지털시장법상 "게이트키퍼" 기업을 수신자로 하는 경우는 예외입니다. 특정 제조사가 특정 기기에 대해 실제로 이를 원활하게 구현했는지는 법적 권리가 존재하는지 여부와는 별개의 문제입니다 — 해당 기기의 현재 문서를 확인하세요.' },
          { q: '로컬 우선 스마트홈은 데이터법을 걱정해야 하나요?', a: '덜 직접적입니다 — 구성이 이미 제조사 클라우드 서비스가 아니라 Home Assistant를 통해 데이터를 로컬에 유지하고 있다면, 애초에 데이터를 추출할 클라우드 사일로가 없으므로 이동권이 덜 중요합니다.' },
          { q: '데이터법의 현재 공식 텍스트는 어디서 찾을 수 있나요?', a: '유럽연합의 공식 입법 간행물을 직접 확인하세요 — 이 글은 일반적인 안내이며 법적 참고자료가 아닙니다.' },
          { q: '이것이 이 사이트에 이미 있는 개인 스마트홈 GDPR 가이드에 영향을 미치나요?', a: '아니요 — 그 가이드는 특별히 GDPR 준수(개인정보 처리)를 다룹니다. 이 글은 데이터 이동성에 관한 별개의, 더 새로운 규정을 다룹니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[GDPR 친화적인 개인 스마트홈 구축하기(EU)](/ko/smart-home/private-smart-home-gdpr) — 관련되어 있지만 별개인 개인정보 규정',
          '[스마트홈 개인정보 위험](/ko/smart-home/smart-home-privacy-risks) — 더 넓은 개인정보 보호 맥락',
          '[로컬 스마트홈이 클라우드를 이기는 이유](/ko/smart-home/why-local-smart-home-beats-cloud) — 클라우드 데이터 의존에 대한 로컬 우선 대안',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'EU 데이터법과 당신의 스마트홈 (2027년)',
      description: 'EU 데이터법이 EU 내 스마트홈 기기에 미치는 영향: 데이터 이동권, GDPR과는 별개.',
      url: 'https://www.promptquorum.com/ko/smart-home/eu-data-act-smart-home-2027',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'EU 데이터법' }, { '@type': 'Thing', name: '데이터 이동성' }, { '@type': 'Thing', name: '스마트홈 규정' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'EU 데이터법은 GDPR과 같은 것인가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — GDPR은 개인정보 처리를 규율하고, 데이터법은 연결 기기에 대한 데이터 접근과 이동성을 규율합니다.' } },
        { '@type': 'Question', name: '로컬 우선 스마트홈은 데이터법을 걱정해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '덜 직접적입니다 — 구성이 이미 Home Assistant를 통해 데이터를 로컬에 유지하고 있다면, 데이터를 추출할 클라우드 사일로가 없으므로 이동권이 덜 중요합니다.' } },
        { '@type': 'Question', name: '데이터법의 현재 공식 텍스트는 어디서 찾을 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '유럽연합의 공식 입법 간행물을 직접 확인하세요.' } },
        { '@type': 'Question', name: '이것이 이 사이트에 이미 있는 개인 스마트홈 GDPR 가이드에 영향을 미치나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 그 가이드는 특별히 GDPR 준수를 다룹니다. 이 글은 데이터 이동성에 관한 별개의, 더 새로운 규정을 다룹니다.' } },
      ],
    },
  },
}
