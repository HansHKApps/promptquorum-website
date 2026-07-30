import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-en.png',
    title: 'Sensor Fusion in the Smart Home (2027)',
    seoTitle: 'Sensor Fusion in the Smart Home (2027)',
    intro:
      'Sensor fusion means combining multiple sensor types — motion, radar, contact, camera, audio — into a single automation decision, rather than triggering off any one sensor alone, which reduces both false positives and false negatives. This article explains the pattern, using radar-plus-motion occupancy detection as the running example, and how to build it in Home Assistant.',
    metaDescription:
      'Sensor fusion in the smart home: combining multiple sensor types into one automation decision to reduce false positives and false negatives.',
    twitterDescription:
      'Why combining multiple sensor types (radar, motion, contact) into one decision beats relying on any single sensor for home automation accuracy.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users building automations that need to reduce false triggers',
    primaryTerm: 'sensor fusion home automation',
    targetKeywords: [
      'sensor fusion home automation',
      'combine sensors smart home accuracy',
      'reduce false positives home assistant',
      'multi sensor automation logic',
      'radar and motion sensor combination',
    ],
    leadAnswerBlock:
      '**Sensor fusion combines readings from multiple sensor types — for example, requiring both radar and motion sensor agreement before an automation treats a room as "occupied" — to reduce false positives and false negatives that any single sensor produces on its own.** This is a Home Assistant automation-logic pattern, not a specific product.',
    quickAnswerTop: {
      en: {
        question: 'How does combining multiple sensors improve home automation accuracy?',
        answer:
          'Any single sensor type has failure modes — a PIR motion sensor misses a stationary person, a radar sensor can occasionally register a false positive from an appliance\'s vibration, a contact sensor only knows a door\'s open/closed state, not who opened it. Sensor fusion means writing automation logic that requires agreement between two or more sensor types before acting on a decision, which cancels out each sensor\'s individual weak points. This is built with standard Home Assistant automation conditions, not special hardware.',
        bullets: [
          'Each sensor type has its own failure modes when used alone',
          'Requiring agreement between 2+ sensor types before acting reduces false positives/negatives',
          'Built with standard Home Assistant automation conditions — template sensors or multi-condition triggers',
          'Common example: radar + motion for occupancy, or contact + camera for security events',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why One Sensor Isn\'t Enough', anchor: 'why-one-sensor-fails' },
      { label: 'Building a Fusion Automation', anchor: 'building-fusion' },
      { label: 'Common Fusion Patterns', anchor: 'common-patterns' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Sensor fusion combines multiple sensor types (radar, motion, contact, camera) into one automation decision using standard Home Assistant conditions, reducing the false positives/negatives any single sensor produces alone.' },
      { type: 'plain-terms', content: 'One sensor can be wrong in its own particular way — a motion sensor misses someone sitting still, a door sensor doesn\'t know who opened the door. Sensor fusion just means writing an automation that checks more than one sensor and only acts when they agree, the way you might trust a decision more if two witnesses agree on it rather than just one.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Every sensor type has its own failure mode when used alone — sensor fusion cancels these out by requiring agreement',
          'Built with standard Home Assistant automation conditions (multi-condition triggers or template sensors), not special hardware',
          'Common pattern: radar + PIR motion for occupancy, contact + camera for security events',
          'The trade-off is added automation complexity and slightly more setup time for meaningfully fewer false triggers',
          'See the radar presence sensing guide for the specific sensor type most commonly fused with motion detection',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: 'Why One Sensor Isn\'t Enough',
        content:
          '**Every sensor type has a specific blind spot: PIR motion sensors miss stationary occupants, radar can occasionally false-positive on appliance vibration, contact sensors don\'t identify who triggered them, and cameras raise privacy considerations cameras-free sensors avoid.**',
        items: [
          'A PIR-only occupancy automation will turn off lights on someone sitting still, which is the most commonly cited smart-home automation annoyance.',
          'A radar-only automation can occasionally register a false positive from a fan, HVAC vibration, or a pet, depending on sensitivity settings.',
          'Relying on any single sensor means inheriting that sensor\'s specific failure mode across every automation built on it.',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: 'Building a Fusion Automation',
        content:
          '**In Home Assistant, sensor fusion is typically built as a template binary sensor that combines two or more source sensors\' states with AND/OR logic, which downstream automations then treat as a single, more reliable trigger.**',
        items: [
          'A basic occupancy-fusion template sensor might report "occupied" only when either the radar sensor is active, or the PIR sensor triggered within the last few minutes — covering both instant detection and the stationary-occupant case.',
          'For security automations, combining a contact sensor (door opened) with a camera-based person-detection event (see the local AI security camera guide) before triggering a notification reduces false alarms from, for example, a door opening with no one visible.',
          'Keep the fusion logic in one template sensor rather than duplicating the multi-condition logic across several separate automations — this makes it easier to tune later.',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: 'Common Fusion Patterns',
        content:
          '**The most common fusion patterns are occupancy (radar + motion), security (contact + camera detection), and environmental (multiple temperature/humidity sensors averaged to smooth out a single sensor\'s placement bias).**',
        items: [
          'Occupancy: radar sensor for stationary detection, PIR for instant motion response, combined so lighting automations react quickly and don\'t time out on someone sitting still.',
          'Security: door/window contact sensors combined with camera-based person detection, so a notification only fires when both a physical entry event and visual confirmation align.',
          'Environmental: averaging multiple temperature sensors in a room to reduce the impact of one sensor being placed in a draft or near a heat source, giving climate automations a more representative reading.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need special hardware for sensor fusion?', a: 'No — it\'s an automation-logic pattern built with standard Home Assistant template sensors and multi-condition triggers, combining whatever sensors you already have.' },
          { q: 'What\'s the simplest sensor fusion example to start with?', a: 'Combining a radar presence sensor with a PIR motion sensor for occupancy detection is a common starting point — it directly addresses PIR\'s "stops detecting a stationary person" limitation.' },
          { q: 'Does sensor fusion add noticeable automation complexity?', a: 'Some — you\'re writing a template sensor with combined logic instead of pointing an automation at one sensor directly. This is a manageable trade-off for meaningfully fewer false triggers on automations that matter (like security notifications).' },
          { q: 'Can I fuse a local LLM\'s reasoning with sensor data?', a: 'Yes — once fused sensor data is exposed as a standard Home Assistant entity, an LLM automation (see the AI automations guide) can reason over it the same way it would any other sensor, potentially adding further context-aware logic on top.' },
          { q: 'Is this the same as a home digital twin?', a: 'Related but narrower — sensor fusion combines a few sensors for one specific automation decision. A digital twin (see that guide) is a broader, ongoing model of the whole home\'s state that many automations could draw from.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Radar Presence Sensing: Room Occupancy Without a Camera](/smart-home/radar-presence-sensing-no-camera) — the sensor most commonly fused with motion detection',
          '[Home Digital Twin Explained](/smart-home/home-digital-twin-explained) — the broader whole-home state model',
          '[Smarter Home Automations with a Local LLM](/smart-home/ai-automations-local-llm) — reasoning over fused sensor data',
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — the camera side of security-focused fusion',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Sensor Fusion in the Smart Home (2027)',
      description: 'Sensor fusion in the smart home: combining multiple sensor types into one automation decision to reduce false positives and false negatives.',
      url: 'https://www.promptquorum.com/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Sensor fusion' }, { '@type': 'Thing', name: 'Home automation reliability' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need special hardware for sensor fusion?', acceptedAnswer: { '@type': 'Answer', text: 'No — it\'s an automation-logic pattern built with standard Home Assistant template sensors and multi-condition triggers.' } },
        { '@type': 'Question', name: 'What\'s the simplest sensor fusion example to start with?', acceptedAnswer: { '@type': 'Answer', text: 'Combining a radar presence sensor with a PIR motion sensor for occupancy detection.' } },
        { '@type': 'Question', name: 'Is this the same as a home digital twin?', acceptedAnswer: { '@type': 'Answer', text: 'Related but narrower — sensor fusion combines a few sensors for one automation decision; a digital twin is a broader ongoing whole-home state model.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-de.png',
    title: 'Sensorfusion im Smart Home (2027)',
    seoTitle: 'Sensorfusion im Smart Home (2027)',
    intro:
      'Sensorfusion bedeutet, mehrere Sensortypen — Bewegung, Radar, Kontakt, Kamera, Audio — zu einer einzigen Automatisierungsentscheidung zu kombinieren, statt sich auf einen einzelnen Sensor zu verlassen, was sowohl False Positives als auch False Negatives reduziert. Dieser Artikel erklärt das Muster anhand von Radar-plus-Bewegungs-Anwesenheitserkennung als durchgängigem Beispiel und zeigt, wie man es in Home Assistant umsetzt.',
    metaDescription:
      'Sensorfusion im Smart Home: mehrere Sensortypen zu einer Automatisierungsentscheidung kombinieren, um False Positives und False Negatives zu reduzieren.',
    twitterDescription:
      'Warum die Kombination mehrerer Sensortypen (Radar, Bewegung, Kontakt) zu einer Entscheidung zuverlässiger ist als sich auf einen einzelnen Sensor für die Genauigkeit der Hausautomation zu verlassen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die Automatisierungen bauen, die Fehlauslösungen reduzieren müssen',
    primaryTerm: 'sensorfusion hausautomation',
    targetKeywords: [
      'sensorfusion hausautomation',
      'sensoren kombinieren smart home genauigkeit',
      'falsch positive reduzieren home assistant',
      'multi sensor automatisierungslogik',
      'radar und bewegungssensor kombination',
    ],
    leadAnswerBlock:
      '**Sensorfusion kombiniert Messwerte mehrerer Sensortypen — zum Beispiel, dass sowohl Radar- als auch Bewegungssensor übereinstimmen müssen, bevor eine Automatisierung einen Raum als „belegt" behandelt — um False Positives und False Negatives zu reduzieren, die ein einzelner Sensor allein erzeugt.** Dies ist ein Home-Assistant-Automatisierungslogik-Muster, kein spezifisches Produkt.',
    quickAnswerTop: {
      de: {
        question: 'Wie verbessert die Kombination mehrerer Sensoren die Genauigkeit der Hausautomation?',
        answer:
          'Jeder einzelne Sensortyp hat eigene Fehlerquellen — ein PIR-Bewegungssensor übersieht eine still sitzende Person, ein Radarsensor kann gelegentlich durch die Vibration eines Geräts einen False Positive registrieren, ein Kontaktsensor kennt nur den Öffnen/Geschlossen-Zustand einer Tür, nicht wer sie geöffnet hat. Sensorfusion bedeutet, Automatisierungslogik zu schreiben, die eine Übereinstimmung zwischen zwei oder mehr Sensortypen erfordert, bevor gehandelt wird — das hebt die jeweiligen Schwachstellen der einzelnen Sensoren gegenseitig auf. Das wird mit Standard-Home-Assistant-Automatisierungsbedingungen umgesetzt, keiner speziellen Hardware.',
        bullets: [
          'Jeder Sensortyp hat eigene Fehlerquellen, wenn er allein verwendet wird',
          'Eine Übereinstimmung zwischen 2+ Sensortypen vor dem Handeln zu verlangen, reduziert False Positives/Negatives',
          'Umgesetzt mit Standard-Home-Assistant-Automatisierungsbedingungen — Template-Sensoren oder Multi-Condition-Trigger',
          'Häufiges Beispiel: Radar + Bewegung für Anwesenheit, oder Kontakt + Kamera für Sicherheitsereignisse',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Warum ein Sensor nicht ausreicht', anchor: 'why-one-sensor-fails' },
      { label: 'Eine Fusions-Automatisierung erstellen', anchor: 'building-fusion' },
      { label: 'Häufige Fusionsmuster', anchor: 'common-patterns' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Sensorfusion kombiniert mehrere Sensortypen (Radar, Bewegung, Kontakt, Kamera) mit Standard-Home-Assistant-Bedingungen zu einer Automatisierungsentscheidung und reduziert so die False Positives/Negatives, die ein einzelner Sensor allein erzeugt.' },
      { type: 'plain-terms', content: 'Ein einzelner Sensor kann auf seine eigene, spezielle Art falsch liegen — ein Bewegungssensor übersieht jemanden, der still sitzt, ein Türsensor weiß nicht, wer die Tür geöffnet hat. Sensorfusion bedeutet einfach, eine Automatisierung zu schreiben, die mehr als einen Sensor prüft und nur dann handelt, wenn sie übereinstimmen — ähnlich wie man einer Entscheidung mehr vertraut, wenn zwei Zeugen übereinstimmen statt nur einer.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Jeder Sensortyp hat allein verwendet seine eigene Fehlerquelle — Sensorfusion hebt diese auf, indem sie Übereinstimmung verlangt',
          'Umgesetzt mit Standard-Home-Assistant-Automatisierungsbedingungen (Multi-Condition-Trigger oder Template-Sensoren), keine spezielle Hardware',
          'Häufiges Muster: Radar + PIR-Bewegung für Anwesenheit, Kontakt + Kamera für Sicherheitsereignisse',
          'Der Trade-off ist zusätzliche Automatisierungskomplexität und etwas mehr Einrichtungszeit für spürbar weniger Fehlauslösungen',
          'Siehe den Leitfaden zur Radar-Anwesenheitserkennung für den Sensortyp, der am häufigsten mit Bewegungserkennung fusioniert wird',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: 'Warum ein Sensor nicht ausreicht',
        content:
          '**Jeder Sensortyp hat einen spezifischen blinden Fleck: PIR-Bewegungssensoren übersehen still sitzende Personen, Radar kann gelegentlich bei Gerätevibrationen einen False Positive erzeugen, Kontaktsensoren identifizieren nicht, wer sie ausgelöst hat, und Kameras werfen Datenschutzfragen auf, die kamerafreie Sensoren vermeiden.**',
        items: [
          'Eine reine PIR-Anwesenheitsautomatisierung schaltet das Licht bei jemandem aus, der still sitzt — das ist die am häufigsten genannte Störung bei Smart-Home-Automatisierungen.',
          'Eine reine Radar-Automatisierung kann je nach Empfindlichkeitseinstellung gelegentlich einen False Positive durch einen Ventilator, HVAC-Vibrationen oder ein Haustier registrieren.',
          'Sich auf einen einzelnen Sensor zu verlassen bedeutet, dessen spezifische Fehlerquelle in jeder darauf aufgebauten Automatisierung zu übernehmen.',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: 'Eine Fusions-Automatisierung erstellen',
        content:
          '**In Home Assistant wird Sensorfusion typischerweise als Template-Binärsensor umgesetzt, der die Zustände von zwei oder mehr Quellsensoren mit UND/ODER-Logik kombiniert, den nachgelagerte Automatisierungen dann als einen einzigen, zuverlässigeren Trigger behandeln.**',
        items: [
          'Ein einfacher Anwesenheits-Fusions-Template-Sensor könnte „belegt" nur melden, wenn entweder der Radarsensor aktiv ist oder der PIR-Sensor innerhalb der letzten paar Minuten ausgelöst hat — das deckt sowohl sofortige Erkennung als auch den Fall einer still sitzenden Person ab.',
          'Für Sicherheitsautomatisierungen reduziert die Kombination eines Kontaktsensors (Tür geöffnet) mit einem kamerabasierten Personenerkennungsereignis (siehe den Leitfaden zu lokalen KI-Sicherheitskameras) vor dem Auslösen einer Benachrichtigung Fehlalarme — etwa wenn eine Tür geöffnet wird, aber niemand zu sehen ist.',
          'Halte die Fusionslogik in einem Template-Sensor, statt die Multi-Condition-Logik über mehrere separate Automatisierungen zu duplizieren — das erleichtert spätere Anpassungen.',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: 'Häufige Fusionsmuster',
        content:
          '**Die häufigsten Fusionsmuster sind Anwesenheit (Radar + Bewegung), Sicherheit (Kontakt + Kameraerkennung) und Umgebungsdaten (mehrere Temperatur-/Feuchtigkeitssensoren gemittelt, um die Platzierungsverzerrung eines einzelnen Sensors auszugleichen).**',
        items: [
          'Anwesenheit: Radarsensor für die Erkennung stillsitzender Personen, PIR für sofortige Bewegungsreaktion, kombiniert, damit Lichtautomatisierungen schnell reagieren und nicht bei einer still sitzenden Person abschalten.',
          'Sicherheit: Tür-/Fensterkontaktsensoren kombiniert mit kamerabasierter Personenerkennung, sodass eine Benachrichtigung nur ausgelöst wird, wenn sowohl ein physisches Eintrittsereignis als auch eine visuelle Bestätigung übereinstimmen.',
          'Umgebung: Mittelung mehrerer Temperatursensoren in einem Raum, um den Einfluss eines Sensors zu reduzieren, der in einem Luftzug oder in der Nähe einer Wärmequelle platziert ist — das liefert Klimaautomatisierungen eine repräsentativere Messung.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Brauche ich spezielle Hardware für Sensorfusion?', a: 'Nein — es ist ein Automatisierungslogik-Muster, das mit Standard-Home-Assistant-Template-Sensoren und Multi-Condition-Triggern umgesetzt wird und die Sensoren kombiniert, die du bereits besitzt.' },
          { q: 'Was ist das einfachste Sensorfusions-Beispiel zum Einstieg?', a: 'Die Kombination eines Radar-Anwesenheitssensors mit einem PIR-Bewegungssensor für die Anwesenheitserkennung ist ein häufiger Einstiegspunkt — sie adressiert direkt die Einschränkung von PIR, „hört auf, eine still sitzende Person zu erkennen".' },
          { q: 'Erhöht Sensorfusion die Automatisierungskomplexität spürbar?', a: 'Etwas — du schreibst einen Template-Sensor mit kombinierter Logik, statt eine Automatisierung direkt auf einen Sensor zu richten. Das ist ein überschaubarer Trade-off für spürbar weniger Fehlauslösungen bei Automatisierungen, die wichtig sind (wie Sicherheitsbenachrichtigungen).' },
          { q: 'Kann ich die Logik eines lokalen LLM mit Sensordaten fusionieren?', a: 'Ja — sobald fusionierte Sensordaten als Standard-Home-Assistant-Entität verfügbar sind, kann eine LLM-Automatisierung (siehe den Leitfaden zu KI-Automatisierungen) genauso darüber schlussfolgern wie über jeden anderen Sensor und potenziell weitere kontextbewusste Logik hinzufügen.' },
          { q: 'Ist das dasselbe wie ein digitaler Zwilling des Zuhauses?', a: 'Verwandt, aber enger gefasst — Sensorfusion kombiniert wenige Sensoren für eine spezifische Automatisierungsentscheidung. Ein digitaler Zwilling (siehe diesen Leitfaden) ist ein breiteres, fortlaufendes Modell des gesamten Zustands des Hauses, aus dem viele Automatisierungen schöpfen könnten.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Radar-Anwesenheitserkennung: Raumbelegung ohne Kamera](/de/smart-home/radar-presence-sensing-no-camera) — der Sensor, der am häufigsten mit Bewegungserkennung fusioniert wird',
          '[Digitaler Zwilling des Zuhauses erklärt](/de/smart-home/home-digital-twin-explained) — das breitere Modell des gesamten Hauszustands',
          '[Intelligentere Hausautomationen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm) — Schlussfolgern über fusionierte Sensordaten',
          '[Lokale KI-Sicherheitskameras mit Frigate](/de/smart-home/local-ai-security-camera) — die Kameraseite der sicherheitsfokussierten Fusion',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Sensorfusion im Smart Home (2027)',
      description: 'Sensorfusion im Smart Home: mehrere Sensortypen zu einer Automatisierungsentscheidung kombinieren, um False Positives und False Negatives zu reduzieren.',
      url: 'https://www.promptquorum.com/de/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Sensorfusion' }, { '@type': 'Thing', name: 'Zuverlässigkeit der Hausautomation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich spezielle Hardware für Sensorfusion?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — es ist ein Automatisierungslogik-Muster, das mit Standard-Home-Assistant-Template-Sensoren und Multi-Condition-Triggern umgesetzt wird.' } },
        { '@type': 'Question', name: 'Was ist das einfachste Sensorfusions-Beispiel zum Einstieg?', acceptedAnswer: { '@type': 'Answer', text: 'Die Kombination eines Radar-Anwesenheitssensors mit einem PIR-Bewegungssensor für die Anwesenheitserkennung.' } },
        { '@type': 'Question', name: 'Ist das dasselbe wie ein digitaler Zwilling des Zuhauses?', acceptedAnswer: { '@type': 'Answer', text: 'Verwandt, aber enger gefasst — Sensorfusion kombiniert wenige Sensoren für eine Automatisierungsentscheidung; ein digitaler Zwilling ist ein breiteres, fortlaufendes Modell des gesamten Hauszustands.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-fr.png',
    title: 'Fusion de capteurs dans la maison connectée (2027)',
    seoTitle: 'Fusion de capteurs dans la maison connectée (2027)',
    intro:
      "La fusion de capteurs consiste à combiner plusieurs types de capteurs — mouvement, radar, contact, caméra, audio — en une seule décision d'automatisation, plutôt que de se déclencher sur un seul capteur, ce qui réduit à la fois les faux positifs et les faux négatifs. Cet article explique ce modèle, en prenant la détection d'occupation radar-plus-mouvement comme exemple filé, et comment le construire dans Home Assistant.",
    metaDescription:
      "Fusion de capteurs dans la maison connectée : combiner plusieurs types de capteurs en une seule décision d'automatisation pour réduire les faux positifs et les faux négatifs.",
    twitterDescription:
      "Pourquoi combiner plusieurs types de capteurs (radar, mouvement, contact) en une seule décision surpasse le fait de se fier à un seul capteur pour la précision de l'automatisation domestique.",
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    audience: "Utilisateurs de Home Assistant construisant des automatisations qui doivent réduire les déclenchements erronés",
    primaryTerm: 'fusion de capteurs automatisation domestique',
    targetKeywords: [
      'fusion de capteurs automatisation domestique',
      'combiner capteurs precision maison connectee',
      'reduire faux positifs home assistant',
      'logique automatisation multi capteurs',
      'combinaison capteur radar et mouvement',
    ],
    leadAnswerBlock:
      "**La fusion de capteurs combine les relevés de plusieurs types de capteurs — par exemple, exiger l'accord du radar et du capteur de mouvement avant qu'une automatisation ne considère une pièce comme « occupée » — pour réduire les faux positifs et les faux négatifs qu'un seul capteur produit à lui seul.** Il s'agit d'un modèle de logique d'automatisation Home Assistant, pas d'un produit spécifique.",
    quickAnswerTop: {
      fr: {
        question: 'Comment la combinaison de plusieurs capteurs améliore-t-elle la précision de l\'automatisation domestique ?',
        answer:
          "Chaque type de capteur pris isolément a ses propres modes de défaillance — un capteur de mouvement PIR manque une personne immobile, un capteur radar peut occasionnellement enregistrer un faux positif à cause de la vibration d'un appareil, un capteur de contact ne connaît que l'état ouvert/fermé d'une porte, pas qui l'a ouverte. La fusion de capteurs consiste à écrire une logique d'automatisation qui exige l'accord entre deux types de capteurs ou plus avant d'agir, ce qui annule les points faibles propres à chaque capteur. Cela se construit avec des conditions d'automatisation Home Assistant standard, pas de matériel spécial.",
        bullets: [
          "Chaque type de capteur a ses propres modes de défaillance lorsqu'il est utilisé seul",
          "Exiger l'accord entre 2 types de capteurs ou plus avant d'agir réduit les faux positifs/négatifs",
          'Construit avec des conditions d\'automatisation Home Assistant standard — capteurs modèles ou déclencheurs multi-conditions',
          'Exemple courant : radar + mouvement pour l\'occupation, ou contact + caméra pour les événements de sécurité',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: "Pourquoi un seul capteur ne suffit pas", anchor: 'why-one-sensor-fails' },
      { label: 'Construire une automatisation de fusion', anchor: 'building-fusion' },
      { label: 'Modèles de fusion courants', anchor: 'common-patterns' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "La fusion de capteurs combine plusieurs types de capteurs (radar, mouvement, contact, caméra) en une seule décision d'automatisation à l'aide de conditions Home Assistant standard, réduisant les faux positifs/négatifs qu'un seul capteur produit à lui seul." },
      { type: 'plain-terms', content: "Un capteur seul peut se tromper à sa manière particulière — un capteur de mouvement manque quelqu'un assis immobile, un capteur de porte ne sait pas qui a ouvert la porte. La fusion de capteurs consiste simplement à écrire une automatisation qui vérifie plus d'un capteur et n'agit que lorsqu'ils sont d'accord, un peu comme on ferait davantage confiance à une décision si deux témoins étaient d'accord plutôt qu'un seul." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Chaque type de capteur a son propre mode de défaillance lorsqu'il est utilisé seul — la fusion de capteurs les annule en exigeant un accord",
          "Construit avec des conditions d'automatisation Home Assistant standard (déclencheurs multi-conditions ou capteurs modèles), pas de matériel spécial",
          "Modèle courant : radar + mouvement PIR pour l'occupation, contact + caméra pour les événements de sécurité",
          "Le compromis est une complexité d'automatisation accrue et un peu plus de temps de configuration pour nettement moins de déclenchements erronés",
          "Voir le guide de détection de présence radar pour le type de capteur le plus souvent fusionné avec la détection de mouvement",
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: "Pourquoi un seul capteur ne suffit pas",
        content:
          "**Chaque type de capteur a un angle mort spécifique : les capteurs de mouvement PIR manquent les occupants immobiles, le radar peut occasionnellement donner un faux positif à cause de vibrations d'appareils, les capteurs de contact n'identifient pas qui les a déclenchés, et les caméras soulèvent des considérations de confidentialité que les capteurs sans caméra évitent.**",
        items: [
          "Une automatisation d'occupation basée uniquement sur le PIR éteindra les lumières sur quelqu'un assis immobile, ce qui est l'agacement d'automatisation domotique le plus souvent cité.",
          "Une automatisation basée uniquement sur le radar peut occasionnellement enregistrer un faux positif à cause d'un ventilateur, de vibrations HVAC, ou d'un animal domestique, selon les réglages de sensibilité.",
          "Se fier à un seul capteur signifie hériter du mode de défaillance spécifique de ce capteur dans chaque automatisation construite dessus.",
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: "Construire une automatisation de fusion",
        content:
          "**Dans Home Assistant, la fusion de capteurs se construit généralement comme un capteur binaire modèle qui combine les états de deux capteurs sources ou plus avec une logique ET/OU, que les automatisations en aval traitent ensuite comme un seul déclencheur, plus fiable.**",
        items: [
          "Un capteur modèle de fusion d'occupation basique pourrait signaler « occupé » uniquement lorsque le capteur radar est actif, ou que le capteur PIR s'est déclenché au cours des dernières minutes — couvrant à la fois la détection instantanée et le cas de l'occupant immobile.",
          "Pour les automatisations de sécurité, combiner un capteur de contact (porte ouverte) avec un événement de détection de personne basé sur caméra (voir le guide des caméras de sécurité IA locales) avant de déclencher une notification réduit les fausses alertes provenant, par exemple, d'une porte qui s'ouvre sans personne visible.",
          "Gardez la logique de fusion dans un seul capteur modèle plutôt que de dupliquer la logique multi-conditions sur plusieurs automatisations séparées — cela facilite les ajustements ultérieurs.",
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: "Modèles de fusion courants",
        content:
          "**Les modèles de fusion les plus courants sont l'occupation (radar + mouvement), la sécurité (contact + détection caméra), et l'environnemental (plusieurs capteurs de température/humidité moyennés pour lisser le biais de placement d'un seul capteur).**",
        items: [
          "Occupation : capteur radar pour la détection d'immobilité, PIR pour la réponse instantanée au mouvement, combinés pour que les automatisations d'éclairage réagissent rapidement et ne s'arrêtent pas sur quelqu'un assis immobile.",
          "Sécurité : capteurs de contact porte/fenêtre combinés avec détection de personne basée caméra, pour qu'une notification ne se déclenche que lorsqu'un événement d'entrée physique et une confirmation visuelle concordent.",
          "Environnemental : moyenner plusieurs capteurs de température dans une pièce pour réduire l'impact d'un capteur placé dans un courant d'air ou près d'une source de chaleur, donnant aux automatisations climatiques une lecture plus représentative.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: "Ai-je besoin de matériel spécial pour la fusion de capteurs ?", a: "Non — c'est un modèle de logique d'automatisation construit avec des capteurs modèles Home Assistant standard et des déclencheurs multi-conditions, combinant les capteurs que vous possédez déjà." },
          { q: "Quel est l'exemple de fusion de capteurs le plus simple pour commencer ?", a: "Combiner un capteur de présence radar avec un capteur de mouvement PIR pour la détection d'occupation est un point de départ courant — cela répond directement à la limitation du PIR qui « cesse de détecter une personne immobile »." },
          { q: "La fusion de capteurs ajoute-t-elle une complexité d'automatisation notable ?", a: "Un peu — vous écrivez un capteur modèle avec une logique combinée au lieu de pointer une automatisation directement vers un seul capteur. C'est un compromis gérable pour nettement moins de déclenchements erronés sur les automatisations importantes (comme les notifications de sécurité)." },
          { q: "Puis-je fusionner le raisonnement d'un LLM local avec des données de capteurs ?", a: "Oui — une fois que les données de capteurs fusionnées sont exposées comme une entité Home Assistant standard, une automatisation LLM (voir le guide des automatisations IA) peut raisonner dessus de la même manière que sur tout autre capteur, en ajoutant potentiellement une logique contextuelle supplémentaire." },
          { q: "Est-ce la même chose qu'un jumeau numérique domestique ?", a: "Lié mais plus étroit — la fusion de capteurs combine quelques capteurs pour une décision d'automatisation spécifique. Un jumeau numérique (voir ce guide) est un modèle plus large et continu de l'état de toute la maison dont de nombreuses automatisations pourraient tirer parti." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          "[Détection de présence radar : occupation de pièce sans caméra](/fr/smart-home/radar-presence-sensing-no-camera) — le capteur le plus souvent fusionné avec la détection de mouvement",
          "[Jumeau numérique domestique expliqué](/fr/smart-home/home-digital-twin-explained) — le modèle plus large de l'état de toute la maison",
          '[Automatisations domestiques plus intelligentes avec un LLM local](/fr/smart-home/ai-automations-local-llm) — raisonner sur des données de capteurs fusionnées',
          '[Caméras de sécurité IA locales avec Frigate](/fr/smart-home/local-ai-security-camera) — le côté caméra de la fusion axée sécurité',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Fusion de capteurs dans la maison connectée (2027)',
      description: "Fusion de capteurs dans la maison connectée : combiner plusieurs types de capteurs en une seule décision d'automatisation pour réduire les faux positifs et les faux négatifs.",
      url: 'https://www.promptquorum.com/fr/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Fusion de capteurs' }, { '@type': 'Thing', name: "Fiabilité de l'automatisation domestique" }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: "Ai-je besoin de matériel spécial pour la fusion de capteurs ?", acceptedAnswer: { '@type': 'Answer', text: "Non — c'est un modèle de logique d'automatisation construit avec des capteurs modèles Home Assistant standard et des déclencheurs multi-conditions." } },
        { '@type': 'Question', name: "Quel est l'exemple de fusion de capteurs le plus simple pour commencer ?", acceptedAnswer: { '@type': 'Answer', text: "Combiner un capteur de présence radar avec un capteur de mouvement PIR pour la détection d'occupation." } },
        { '@type': 'Question', name: "Est-ce la même chose qu'un jumeau numérique domestique ?", acceptedAnswer: { '@type': 'Answer', text: "Lié mais plus étroit — la fusion de capteurs combine quelques capteurs pour une décision d'automatisation ; un jumeau numérique est un modèle plus large et continu de l'état de toute la maison." } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-ja.png',
    title: 'スマートホームにおけるセンサーフュージョン（2027年）',
    seoTitle: 'スマートホームにおけるセンサーフュージョン（2027年）',
    intro:
      'センサーフュージョンとは、モーション、レーダー、接点、カメラ、音声など複数のセンサータイプを組み合わせて1つの自動化判断を下すことを意味します。単一のセンサーだけをトリガーにするのではなく、複数を組み合わせることで誤検知(false positive)と検知漏れ(false negative)の両方を減らせます。この記事では、レーダーとモーションを組み合わせた在室検知を具体例として、このパターンをHome Assistantでどう構築するかを解説します。',
    metaDescription:
      'スマートホームにおけるセンサーフュージョン:複数のセンサータイプを1つの自動化判断に組み合わせ、誤検知と検知漏れを減らす方法。',
    twitterDescription:
      '複数のセンサータイプ(レーダー、モーション、接点)を1つの判断に組み合わせることが、なぜ単一センサーに頼るよりもホームオートメーションの精度を高めるのか。',
    readTime: '読了時間6分',
    educationalLevel: 'Intermediate',
    audience: '誤検知を減らす自動化を構築したいHome Assistantユーザー',
    primaryTerm: 'センサーフュージョン ホームオートメーション',
    targetKeywords: [
      'センサーフュージョン ホームオートメーション',
      'センサー 組み合わせ スマートホーム 精度',
      '誤検知 削減 home assistant',
      'マルチセンサー 自動化ロジック',
      'レーダー モーションセンサー 組み合わせ',
    ],
    leadAnswerBlock:
      '**センサーフュージョンとは、複数のセンサータイプからの情報を組み合わせること——たとえば、自動化が部屋を「在室」と判断する前にレーダーとモーションセンサーの両方の一致を要求すること——により、単一のセンサーだけでは避けられない誤検知と検知漏れを減らす手法です。** これはHome Assistantの自動化ロジックのパターンであり、特定の製品ではありません。',
    quickAnswerTop: {
      ja: {
        question: '複数のセンサーを組み合わせるとホームオートメーションの精度はどう向上しますか?',
        answer:
          '単一のセンサータイプにはそれぞれ固有の失敗パターンがあります——PIRモーションセンサーはじっとしている人を検知し損ね、レーダーセンサーは家電の振動から時折誤検知を起こすことがあり、接点センサーはドアの開閉状態しか分からず誰が開けたかは分かりません。センサーフュージョンとは、判断を実行する前に2つ以上のセンサータイプの一致を要求する自動化ロジックを書くことを意味し、それぞれのセンサーが持つ個別の弱点を打ち消し合います。これは特別なハードウェアではなく、標準的なHome Assistantの自動化条件で構築されます。',
        bullets: [
          '各センサータイプには、単独で使用した場合に固有の失敗パターンがある',
          '2つ以上のセンサータイプの一致を要求してから動作させることで、誤検知・検知漏れを減らせる',
          '標準的なHome Assistantの自動化条件——テンプレートセンサーやマルチ条件トリガー——で構築される',
          '一般的な例:在室検知にはレーダー+モーション、セキュリティイベントには接点+カメラ',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: '単一センサーでは不十分な理由', anchor: 'why-one-sensor-fails' },
      { label: 'フュージョン自動化の構築', anchor: 'building-fusion' },
      { label: '一般的なフュージョンパターン', anchor: 'common-patterns' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'センサーフュージョンは、複数のセンサータイプ(レーダー、モーション、接点、カメラ)を標準的なHome Assistantの条件を使って1つの自動化判断に組み合わせ、単一センサーだけでは生じる誤検知・検知漏れを減らします。' },
      { type: 'plain-terms', content: '1つのセンサーには、そのセンサー特有の間違え方があります——モーションセンサーはじっと座っている人を見逃し、ドアセンサーは誰がドアを開けたかを知りません。センサーフュージョンとは単に、複数のセンサーを確認し、それらが一致したときだけ動作する自動化を書くことです。1人の証言よりも2人の証人が一致した方が信用できるのと同じ考え方です。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          '各センサータイプには単独使用時に固有の失敗パターンがある——センサーフュージョンは一致を要求することでこれらを打ち消す',
          '特別なハードウェアではなく、標準的なHome Assistantの自動化条件(マルチ条件トリガーやテンプレートセンサー)で構築される',
          '一般的なパターン:在室検知にはレーダー+PIRモーション、セキュリティイベントには接点+カメラ',
          'トレードオフは自動化の複雑さがやや増し、設定に多少時間がかかることだが、その分誤動作を大きく減らせる',
          'モーション検知と最もよく組み合わされる具体的なセンサータイプについては、レーダー在室検知ガイドを参照',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: '単一センサーでは不十分な理由',
        content:
          '**すべてのセンサータイプには固有の死角があります。PIRモーションセンサーはじっとしている人を見逃し、レーダーは家電の振動でまれに誤検知を起こすことがあり、接点センサーは誰がトリガーしたかを識別できず、カメラはカメラなしのセンサーには存在しないプライバシー上の懸念を生みます。**',
        items: [
          'PIRのみの在室自動化は、じっと座っている人がいると照明を消してしまいます——これはスマートホーム自動化で最もよく挙げられる不満です。',
          'レーダーのみの自動化は、感度設定によっては扇風機やHVACの振動、ペットなどから時折誤検知を起こすことがあります。',
          '単一のセンサーに頼るということは、そのセンサーに固有の失敗パターンを、それを土台にしたすべての自動化に引き継ぐことを意味します。',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: 'フュージョン自動化の構築',
        content:
          '**Home Assistantでは、センサーフュージョンは通常、2つ以上の元センサーの状態をAND/ORロジックで組み合わせたテンプレートバイナリセンサーとして構築され、下流の自動化はそれを1つのより信頼できるトリガーとして扱います。**',
        items: [
          '基本的な在室フュージョンのテンプレートセンサーは、レーダーセンサーがアクティブであるか、またはPIRセンサーが直近数分以内にトリガーされた場合にのみ「在室」を報告するように設計できます——これにより即時検知とじっとしている人がいるケースの両方をカバーできます。',
          'セキュリティ自動化では、接点センサー(ドアが開いた)とカメラベースの人物検知イベント(ローカルAIセキュリティカメラガイドを参照)を組み合わせてから通知をトリガーすることで、たとえば人が写っていないのにドアが開いた場合などの誤報を減らせます。',
          'フュージョンロジックは、複数の個別自動化にマルチ条件ロジックを重複させるのではなく、1つのテンプレートセンサーにまとめておくことで、後からの調整がしやすくなります。',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: '一般的なフュージョンパターン',
        content:
          '**最も一般的なフュージョンパターンは、在室検知(レーダー+モーション)、セキュリティ(接点+カメラ検知)、環境(複数の温湿度センサーを平均化して単一センサーの設置場所による偏りを平滑化する)の3つです。**',
        items: [
          '在室検知:じっとしている状態の検知にはレーダーセンサー、即時のモーション反応にはPIRを使い、両者を組み合わせることで照明自動化が素早く反応し、じっと座っている人でタイムアウトしないようにします。',
          'セキュリティ:ドア・窓の接点センサーとカメラベースの人物検知を組み合わせ、物理的な開閉イベントと視覚的な確認の両方が一致したときにのみ通知を発火させます。',
          '環境:部屋内の複数の温度センサーを平均化することで、1つのセンサーがすきま風や熱源の近くに設置されている影響を減らし、空調自動化により代表的な値を与えます。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'センサーフュージョンには特別なハードウェアが必要ですか?', a: 'いいえ——これは標準的なHome Assistantのテンプレートセンサーとマルチ条件トリガーで構築される自動化ロジックのパターンであり、すでに持っているセンサーを組み合わせるだけです。' },
          { q: '最も簡単なセンサーフュージョンの例は何ですか?', a: 'レーダー在室センサーとPIRモーションセンサーを組み合わせて在室検知を行うのが一般的な出発点です——これはPIRの「じっとしている人の検知を止めてしまう」という弱点に直接対処します。' },
          { q: 'センサーフュージョンは自動化の複雑さを目に見えて増やしますか?', a: '多少は増えます——自動化を1つのセンサーに直接向けるのではなく、組み合わせたロジックを持つテンプレートセンサーを書くことになります。ただしこれは、セキュリティ通知のような重要な自動化での誤動作を大きく減らせるという点で、十分に見合うトレードオフです。' },
          { q: 'ローカルLLMの推論とセンサーデータを融合できますか?', a: 'はい——融合されたセンサーデータが標準的なHome Assistantエンティティとして公開されれば、LLM自動化(AI自動化ガイドを参照)は他のセンサーと同じようにそれを推論に利用でき、さらに文脈を考慮したロジックを追加できる可能性があります。' },
          { q: 'これはホームデジタルツインと同じものですか?', a: '関連はしていますが、より狭い概念です——センサーフュージョンは1つの具体的な自動化判断のためにいくつかのセンサーを組み合わせます。デジタルツイン(該当ガイドを参照)は、多くの自動化が利用できる、家全体の状態に関するより広範で継続的なモデルです。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[レーダー在室検知:カメラなしで部屋の在室状況を把握する](/ja/smart-home/radar-presence-sensing-no-camera) — モーション検知と最もよく組み合わされるセンサー',
          '[ホームデジタルツインを解説](/ja/smart-home/home-digital-twin-explained) — より広範な家全体の状態モデル',
          '[ローカルLLMでより賢いホームオートメーションを実現](/ja/smart-home/ai-automations-local-llm) — 融合されたセンサーデータを使った推論',
          '[Frigateを使ったローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera) — セキュリティ重視のフュージョンにおけるカメラ側',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホームにおけるセンサーフュージョン(2027年)',
      description: 'スマートホームにおけるセンサーフュージョン:複数のセンサータイプを1つの自動化判断に組み合わせ、誤検知と検知漏れを減らす方法。',
      url: 'https://www.promptquorum.com/ja/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'センサーフュージョン' }, { '@type': 'Thing', name: 'ホームオートメーションの信頼性' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'センサーフュージョンには特別なハードウェアが必要ですか?', acceptedAnswer: { '@type': 'Answer', text: 'いいえ——標準的なHome Assistantのテンプレートセンサーとマルチ条件トリガーで構築される自動化ロジックのパターンです。' } },
        { '@type': 'Question', name: '最も簡単なセンサーフュージョンの例は何ですか?', acceptedAnswer: { '@type': 'Answer', text: 'レーダー在室センサーとPIRモーションセンサーを組み合わせて在室検知を行う方法です。' } },
        { '@type': 'Question', name: 'これはホームデジタルツインと同じものですか?', acceptedAnswer: { '@type': 'Answer', text: '関連はしていますが、より狭い概念です——センサーフュージョンは1つの自動化判断のために少数のセンサーを組み合わせます。デジタルツインは家全体の状態に関する、より広範で継続的なモデルです。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-zh.png',
    title: '智能家居中的传感器融合(2027年)',
    seoTitle: '智能家居中的传感器融合(2027年)',
    intro:
      '传感器融合是指将多种传感器类型——运动、雷达、接触、摄像头、音频——组合成一个自动化判断,而不是仅依赖单一传感器触发,从而同时减少误报和漏报。本文以雷达加运动的在室检测为例讲解这种模式,并说明如何在Home Assistant中构建它。',
    metaDescription:
      '智能家居中的传感器融合:将多种传感器类型组合成一个自动化判断,以减少误报和漏报。',
    twitterDescription:
      '为什么将多种传感器类型(雷达、运动、接触)组合成一个判断,比依赖任何单一传感器更能提高家庭自动化的准确性。',
    readTime: '阅读需6分钟',
    educationalLevel: 'Intermediate',
    audience: '希望构建能减少误触发的自动化的Home Assistant用户',
    primaryTerm: '传感器融合 家庭自动化',
    targetKeywords: [
      '传感器融合 家庭自动化',
      '组合传感器 智能家居 准确性',
      '减少误报 home assistant',
      '多传感器 自动化逻辑',
      '雷达和运动传感器组合',
    ],
    leadAnswerBlock:
      '**传感器融合是指组合多种传感器类型的读数——例如,要求雷达和运动传感器同时确认后,自动化才判定房间为"有人"——从而减少单一传感器自身产生的误报和漏报。**这是一种Home Assistant自动化逻辑模式,而不是特定产品。',
    quickAnswerTop: {
      zh: {
        question: '组合多个传感器如何提升家庭自动化的准确性?',
        answer:
          '每种单一传感器类型都有其失效模式——PIR运动传感器会漏检静止不动的人,雷达传感器偶尔会因家电振动而误报,接触传感器只知道门的开关状态,而不知道是谁开的门。传感器融合是指编写自动化逻辑,要求两种或更多传感器类型达成一致后才执行判断,从而相互抵消各传感器自身的弱点。这是用标准的Home Assistant自动化条件构建的,不需要特殊硬件。',
        bullets: [
          '每种传感器类型单独使用时都有各自的失效模式',
          '要求2种以上传感器类型达成一致后再执行,可减少误报/漏报',
          '用标准的Home Assistant自动化条件构建——模板传感器或多条件触发器',
          '常见示例:在室检测用雷达+运动,安全事件用接触+摄像头',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '为什么单一传感器不够', anchor: 'why-one-sensor-fails' },
      { label: '构建融合自动化', anchor: 'building-fusion' },
      { label: '常见融合模式', anchor: 'common-patterns' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '传感器融合利用标准的Home Assistant条件,将多种传感器类型(雷达、运动、接触、摄像头)组合成一个自动化判断,从而减少单一传感器自身产生的误报和漏报。' },
      { type: 'plain-terms', content: '单个传感器会以其特有的方式出错——运动传感器会漏掉静坐不动的人,门传感器不知道是谁开的门。传感器融合就是编写一个会检查多个传感器、只有在它们一致时才执行动作的自动化,就像两个证人的说法一致时你会更相信这个判断,而不是只听一个人说。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '每种传感器类型单独使用时都有其失效模式——传感器融合通过要求一致来抵消这些问题',
          '用标准的Home Assistant自动化条件(多条件触发器或模板传感器)构建,不需要特殊硬件',
          '常见模式:在室检测用雷达+PIR运动,安全事件用接触+摄像头',
          '代价是自动化复杂度略有增加、设置时间稍长,但换来的是误触发的显著减少',
          '关于最常与运动检测组合使用的具体传感器类型,请参阅雷达在室检测指南',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: '为什么单一传感器不够',
        content:
          '**每种传感器类型都有特定的盲区:PIR运动传感器会漏检静止不动的人,雷达偶尔会因家电振动而误报,接触传感器无法识别是谁触发的,而摄像头会带来无摄像头传感器所没有的隐私顾虑。**',
        items: [
          '仅使用PIR的在室自动化会在有人静坐不动时关灯,这是智能家居自动化中最常被提及的烦恼。',
          '仅使用雷达的自动化偶尔会因风扇、HVAC振动或宠物而误报,具体取决于灵敏度设置。',
          '依赖单一传感器意味着,基于它构建的每一个自动化都会继承该传感器特有的失效模式。',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: '构建融合自动化',
        content:
          '**在Home Assistant中,传感器融合通常构建为一个模板二元传感器,用AND/OR逻辑组合两个或更多源传感器的状态,下游自动化则将其视为一个更可靠的单一触发条件。**',
        items: [
          '一个基础的在室融合模板传感器可以设置为:只有当雷达传感器处于激活状态,或PIR传感器在最近几分钟内触发过时,才报告"有人"——这样既能覆盖即时检测,也能覆盖静止不动的情况。',
          '在安全自动化中,将接触传感器(门被打开)与基于摄像头的人物检测事件(参见本地AI安全摄像头指南)组合后再触发通知,可以减少例如门开了但没人出现这类误报。',
          '将融合逻辑保留在一个模板传感器中,而不是在多个独立自动化中重复多条件逻辑,这样后续调整会更方便。',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: '常见融合模式',
        content:
          '**最常见的融合模式是在室检测(雷达+运动)、安全(接触+摄像头检测)以及环境(对多个温湿度传感器取平均值,以平滑单个传感器安装位置带来的偏差)。**',
        items: [
          '在室检测:雷达传感器用于静止状态检测,PIR用于即时运动响应,二者组合可使照明自动化快速反应,且不会因有人静坐不动而超时关闭。',
          '安全:门窗接触传感器与基于摄像头的人物检测组合,只有当物理开启事件和视觉确认同时一致时才发送通知。',
          '环境:对房间内多个温度传感器取平均值,可以减少某个传感器因安装在通风口或热源附近而带来的偏差,为空调自动化提供更具代表性的读数。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '传感器融合需要特殊硬件吗?', a: '不需要——这是一种自动化逻辑模式,用标准的Home Assistant模板传感器和多条件触发器构建,组合你已经拥有的任何传感器即可。' },
          { q: '最简单的传感器融合示例是什么?', a: '将雷达在室传感器与PIR运动传感器组合用于在室检测,是常见的入门方式——它直接解决了PIR"会停止检测静止不动的人"这一局限。' },
          { q: '传感器融合会明显增加自动化的复杂度吗?', a: '会有一些——你需要编写一个带有组合逻辑的模板传感器,而不是让自动化直接指向单一传感器。对于像安全通知这类重要的自动化来说,这是一个换来显著减少误触发的可控代价。' },
          { q: '可以将本地LLM的推理与传感器数据融合吗?', a: '可以——一旦融合后的传感器数据以标准的Home Assistant实体形式暴露出来,LLM自动化(参见AI自动化指南)就可以像处理其他任何传感器一样对其进行推理,并有可能在此基础上添加更多具备上下文感知能力的逻辑。' },
          { q: '这和家庭数字孪生是一回事吗?', a: '相关但范围更窄——传感器融合是为某一个具体的自动化判断组合少数几个传感器。数字孪生(参见该指南)则是对整个家庭状态更广泛、持续更新的模型,许多自动化都可以从中取用数据。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[雷达在室检测:无需摄像头也能感知房间是否有人](/zh/smart-home/radar-presence-sensing-no-camera) — 最常与运动检测组合使用的传感器',
          '[家庭数字孪生详解](/zh/smart-home/home-digital-twin-explained) — 更广泛的全屋状态模型',
          '[用本地LLM打造更智能的家庭自动化](/zh/smart-home/ai-automations-local-llm) — 对融合后的传感器数据进行推理',
          '[基于Frigate的本地AI安全摄像头](/zh/smart-home/local-ai-security-camera) — 安全导向融合中的摄像头部分',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居中的传感器融合(2027年)',
      description: '智能家居中的传感器融合:将多种传感器类型组合成一个自动化判断,以减少误报和漏报。',
      url: 'https://www.promptquorum.com/zh/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '传感器融合' }, { '@type': 'Thing', name: '家庭自动化可靠性' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '传感器融合需要特殊硬件吗?', acceptedAnswer: { '@type': 'Answer', text: '不需要——这是一种用标准的Home Assistant模板传感器和多条件触发器构建的自动化逻辑模式。' } },
        { '@type': 'Question', name: '最简单的传感器融合示例是什么?', acceptedAnswer: { '@type': 'Answer', text: '将雷达在室传感器与PIR运动传感器组合用于在室检测。' } },
        { '@type': 'Question', name: '这和家庭数字孪生是一回事吗?', acceptedAnswer: { '@type': 'Answer', text: '相关但范围更窄——传感器融合是为某一个自动化判断组合少数几个传感器;数字孪生则是对整个家庭状态更广泛、持续更新的模型。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-es.png',
    title: 'Fusión de sensores en el hogar inteligente (2027)',
    seoTitle: 'Fusión de sensores en el hogar inteligente (2027)',
    intro:
      'La fusión de sensores consiste en combinar varios tipos de sensor — movimiento, radar, contacto, cámara, audio — en una sola decisión de automatización, en lugar de activarse con un único sensor, lo que reduce tanto los falsos positivos como los falsos negativos. Este artículo explica el patrón, usando la detección de ocupación por radar más movimiento como ejemplo guía, y cómo construirlo en Home Assistant.',
    metaDescription:
      'Fusión de sensores en el hogar inteligente: combinar varios tipos de sensor en una sola decisión de automatización para reducir falsos positivos y falsos negativos.',
    twitterDescription:
      'Por qué combinar varios tipos de sensor (radar, movimiento, contacto) en una sola decisión supera a depender de un único sensor para la precisión de la automatización del hogar.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que crean automatizaciones que necesitan reducir los falsos disparos',
    primaryTerm: 'fusion de sensores automatizacion del hogar',
    targetKeywords: [
      'fusion de sensores automatizacion del hogar',
      'combinar sensores precision hogar inteligente',
      'reducir falsos positivos home assistant',
      'logica de automatizacion multisensor',
      'combinacion sensor radar y movimiento',
    ],
    leadAnswerBlock:
      '**La fusión de sensores combina lecturas de varios tipos de sensor — por ejemplo, exigir que tanto el radar como el sensor de movimiento coincidan antes de que una automatización trate una habitación como "ocupada" — para reducir los falsos positivos y falsos negativos que produce cualquier sensor por sí solo.** Este es un patrón de lógica de automatización de Home Assistant, no un producto específico.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo mejora la precisión de la automatización del hogar al combinar varios sensores?',
        answer:
          'Cualquier tipo de sensor individual tiene sus propios modos de fallo — un sensor de movimiento PIR no detecta a una persona inmóvil, un sensor de radar puede registrar ocasionalmente un falso positivo por la vibración de un electrodoméstico, un sensor de contacto solo conoce el estado abierto/cerrado de una puerta, no quién la abrió. La fusión de sensores consiste en escribir lógica de automatización que exige la coincidencia entre dos o más tipos de sensor antes de actuar, lo que anula los puntos débiles individuales de cada sensor. Esto se construye con condiciones de automatización estándar de Home Assistant, no con hardware especial.',
        bullets: [
          'Cada tipo de sensor tiene sus propios modos de fallo cuando se usa solo',
          'Exigir coincidencia entre 2 o más tipos de sensor antes de actuar reduce los falsos positivos/negativos',
          'Se construye con condiciones de automatización estándar de Home Assistant — sensores de plantilla o disparadores multicondición',
          'Ejemplo común: radar + movimiento para ocupación, o contacto + cámara para eventos de seguridad',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Por qué un solo sensor no es suficiente', anchor: 'why-one-sensor-fails' },
      { label: 'Construir una automatización de fusión', anchor: 'building-fusion' },
      { label: 'Patrones de fusión comunes', anchor: 'common-patterns' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'La fusión de sensores combina varios tipos de sensor (radar, movimiento, contacto, cámara) en una sola decisión de automatización usando condiciones estándar de Home Assistant, reduciendo los falsos positivos/negativos que produce cualquier sensor por sí solo.' },
      { type: 'plain-terms', content: 'Un solo sensor puede equivocarse a su propia manera particular — un sensor de movimiento no detecta a alguien sentado sin moverse, un sensor de puerta no sabe quién la abrió. La fusión de sensores solo significa escribir una automatización que revise más de un sensor y actúe únicamente cuando coincidan, de forma similar a como confiarías más en una decisión si dos testigos coinciden en ella en lugar de solo uno.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Cada tipo de sensor tiene su propio modo de fallo cuando se usa solo — la fusión de sensores lo anula al exigir coincidencia',
          'Se construye con condiciones de automatización estándar de Home Assistant (disparadores multicondición o sensores de plantilla), no con hardware especial',
          'Patrón común: radar + movimiento PIR para ocupación, contacto + cámara para eventos de seguridad',
          'La contrapartida es más complejidad de automatización y algo más de tiempo de configuración a cambio de menos falsos disparos de forma significativa',
          'Consulta la guía de detección de presencia por radar para conocer el tipo de sensor que se fusiona con más frecuencia con la detección de movimiento',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: 'Por qué un solo sensor no es suficiente',
        content:
          '**Cada tipo de sensor tiene un punto ciego específico: los sensores de movimiento PIR no detectan a los ocupantes inmóviles, el radar puede dar ocasionalmente un falso positivo por la vibración de un electrodoméstico, los sensores de contacto no identifican quién los activó, y las cámaras plantean consideraciones de privacidad que los sensores sin cámara evitan.**',
        items: [
          'Una automatización de ocupación basada solo en PIR apagará las luces de alguien sentado sin moverse, la queja de automatización del hogar inteligente más citada.',
          'Una automatización basada solo en radar puede registrar ocasionalmente un falso positivo por un ventilador, la vibración del HVAC o una mascota, dependiendo de la configuración de sensibilidad.',
          'Depender de un único sensor significa heredar el modo de fallo específico de ese sensor en cada automatización construida sobre él.',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: 'Construir una automatización de fusión',
        content:
          '**En Home Assistant, la fusión de sensores se construye típicamente como un sensor binario de plantilla que combina los estados de dos o más sensores de origen con lógica AND/OR, que las automatizaciones posteriores tratan como un único disparador más fiable.**',
        items: [
          'Un sensor de plantilla básico de fusión de ocupación podría informar "ocupado" solo cuando el sensor de radar está activo, o cuando el sensor PIR se activó en los últimos minutos, cubriendo tanto la detección instantánea como el caso de ocupante inmóvil.',
          'Para automatizaciones de seguridad, combinar un sensor de contacto (puerta abierta) con un evento de detección de personas basado en cámara (consulta la guía de cámaras de seguridad con IA local) antes de disparar una notificación reduce las falsas alarmas provocadas, por ejemplo, por una puerta que se abre sin que nadie sea visible.',
          'Mantén la lógica de fusión en un único sensor de plantilla en lugar de duplicar la lógica multicondición en varias automatizaciones separadas — esto facilita ajustarla más adelante.',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: 'Patrones de fusión comunes',
        content:
          '**Los patrones de fusión más comunes son ocupación (radar + movimiento), seguridad (contacto + detección por cámara) y ambiental (varios sensores de temperatura/humedad promediados para suavizar el sesgo de ubicación de un solo sensor).**',
        items: [
          'Ocupación: sensor de radar para detección de personas inmóviles, PIR para respuesta instantánea al movimiento, combinados para que las automatizaciones de iluminación reaccionen rápido y no se apaguen con alguien sentado sin moverse.',
          'Seguridad: sensores de contacto de puertas/ventanas combinados con detección de personas por cámara, de modo que una notificación solo se dispare cuando coincidan un evento físico de entrada y una confirmación visual.',
          'Ambiental: promediar varios sensores de temperatura en una habitación para reducir el impacto de que uno esté colocado en una corriente de aire o cerca de una fuente de calor, dando a las automatizaciones climáticas una lectura más representativa.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito hardware especial para la fusión de sensores?', a: 'No — es un patrón de lógica de automatización construido con sensores de plantilla y disparadores multicondición estándar de Home Assistant, combinando los sensores que ya tienes.' },
          { q: '¿Cuál es el ejemplo más sencillo de fusión de sensores para empezar?', a: 'Combinar un sensor de presencia por radar con un sensor de movimiento PIR para la detección de ocupación es un punto de partida común — aborda directamente la limitación del PIR de "deja de detectar a una persona inmóvil".' },
          { q: '¿La fusión de sensores añade una complejidad de automatización notable?', a: 'Algo — estás escribiendo un sensor de plantilla con lógica combinada en lugar de apuntar una automatización directamente a un sensor. Es una contrapartida manejable a cambio de menos falsos disparos de forma significativa en automatizaciones que importan (como las notificaciones de seguridad).' },
          { q: '¿Puedo fusionar el razonamiento de un LLM local con datos de sensores?', a: 'Sí — una vez que los datos de sensores fusionados se exponen como una entidad estándar de Home Assistant, una automatización con LLM (consulta la guía de automatizaciones con IA) puede razonar sobre ellos igual que sobre cualquier otro sensor, añadiendo potencialmente más lógica consciente del contexto.' },
          { q: '¿Es esto lo mismo que un gemelo digital del hogar?', a: 'Está relacionado pero es más limitado — la fusión de sensores combina unos pocos sensores para una decisión de automatización específica. Un gemelo digital (consulta esa guía) es un modelo más amplio y continuo del estado de toda la casa del que muchas automatizaciones podrían nutrirse.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Detección de presencia por radar: ocupación de la habitación sin cámara](/es/smart-home/radar-presence-sensing-no-camera) — el sensor que se fusiona con más frecuencia con la detección de movimiento',
          '[El gemelo digital del hogar explicado](/es/smart-home/home-digital-twin-explained) — el modelo más amplio del estado de toda la casa',
          '[Automatizaciones del hogar más inteligentes con un LLM local](/es/smart-home/ai-automations-local-llm) — razonar sobre datos de sensores fusionados',
          '[Cámaras de seguridad con IA local con Frigate](/es/smart-home/local-ai-security-camera) — el lado de cámara de la fusión enfocada en seguridad',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Fusión de sensores en el hogar inteligente (2027)',
      description: 'Fusión de sensores en el hogar inteligente: combinar varios tipos de sensor en una sola decisión de automatización para reducir falsos positivos y falsos negativos.',
      url: 'https://www.promptquorum.com/es/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Fusión de sensores' }, { '@type': 'Thing', name: 'Fiabilidad de la automatización del hogar' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito hardware especial para la fusión de sensores?', acceptedAnswer: { '@type': 'Answer', text: 'No — es un patrón de lógica de automatización construido con sensores de plantilla y disparadores multicondición estándar de Home Assistant.' } },
        { '@type': 'Question', name: '¿Cuál es el ejemplo más sencillo de fusión de sensores para empezar?', acceptedAnswer: { '@type': 'Answer', text: 'Combinar un sensor de presencia por radar con un sensor de movimiento PIR para la detección de ocupación.' } },
        { '@type': 'Question', name: '¿Es esto lo mismo que un gemelo digital del hogar?', acceptedAnswer: { '@type': 'Answer', text: 'Está relacionado pero es más limitado — la fusión de sensores combina unos pocos sensores para una decisión de automatización; un gemelo digital es un modelo más amplio y continuo del estado de toda la casa.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-pt.png',
    title: 'Fusão de sensores na casa inteligente (2027)',
    seoTitle: 'Fusão de sensores na casa inteligente (2027)',
    intro:
      'Fusão de sensores significa combinar vários tipos de sensor — movimento, radar, contato, câmera, áudio — em uma única decisão de automação, em vez de disparar com base em apenas um sensor, o que reduz tanto os falsos positivos quanto os falsos negativos. Este artigo explica o padrão, usando a detecção de ocupação por radar mais movimento como exemplo condutor, e como construí-lo no Home Assistant.',
    metaDescription:
      'Fusão de sensores na casa inteligente: combinar vários tipos de sensor em uma única decisão de automação para reduzir falsos positivos e falsos negativos.',
    twitterDescription:
      'Por que combinar vários tipos de sensor (radar, movimento, contato) em uma única decisão supera depender de um único sensor para a precisão da automação residencial.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant que criam automações e precisam reduzir disparos falsos',
    primaryTerm: 'fusão de sensores automação residencial',
    targetKeywords: [
      'fusão de sensores automação residencial',
      'combinar sensores precisão casa inteligente',
      'reduzir falsos positivos home assistant',
      'lógica de automação multi-sensor',
      'combinação de sensor radar e movimento',
    ],
    leadAnswerBlock:
      '**A fusão de sensores combina leituras de vários tipos de sensor — por exemplo, exigir que tanto o radar quanto o sensor de movimento concordem antes que uma automação trate um cômodo como "ocupado" — para reduzir os falsos positivos e falsos negativos que qualquer sensor isolado produz por conta própria.** Este é um padrão de lógica de automação do Home Assistant, não um produto específico.',
    quickAnswerTop: {
      pt: {
        question: 'Como a combinação de vários sensores melhora a precisão da automação residencial?',
        answer:
          'Cada tipo de sensor tem seus próprios modos de falha: um sensor de movimento PIR não detecta uma pessoa parada, um sensor de radar pode ocasionalmente registrar um falso positivo pela vibração de um eletrodoméstico, um sensor de contato só sabe o estado aberto/fechado de uma porta, não quem a abriu. Fusão de sensores significa escrever uma lógica de automação que exige concordância entre dois ou mais tipos de sensor antes de agir sobre uma decisão, o que anula os pontos fracos individuais de cada sensor. Isso é construído com condições de automação padrão do Home Assistant, não com hardware especial.',
        bullets: [
          'Cada tipo de sensor tem seus próprios modos de falha quando usado sozinho',
          'Exigir concordância entre 2 ou mais tipos de sensor antes de agir reduz falsos positivos/negativos',
          'Construído com condições de automação padrão do Home Assistant — sensores de template ou gatilhos multicondição',
          'Exemplo comum: radar + movimento para ocupação, ou contato + câmera para eventos de segurança',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Por que um único sensor não é suficiente', anchor: 'why-one-sensor-fails' },
      { label: 'Construindo uma automação de fusão', anchor: 'building-fusion' },
      { label: 'Padrões comuns de fusão', anchor: 'common-patterns' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A fusão de sensores combina vários tipos de sensor (radar, movimento, contato, câmera) em uma única decisão de automação usando condições padrão do Home Assistant, reduzindo os falsos positivos/negativos que qualquer sensor isolado produz por conta própria.' },
      { type: 'plain-terms', content: 'Um único sensor pode errar de sua própria maneira particular — um sensor de movimento não percebe alguém sentado parado, um sensor de porta não sabe quem abriu a porta. Fusão de sensores só significa escrever uma automação que verifica mais de um sensor e só age quando eles concordam, da mesma forma que você confiaria mais em uma decisão se duas testemunhas concordassem sobre ela em vez de apenas uma.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Cada tipo de sensor tem seu próprio modo de falha quando usado sozinho — a fusão de sensores anula isso exigindo concordância',
          'Construída com condições de automação padrão do Home Assistant (gatilhos multicondição ou sensores de template), não hardware especial',
          'Padrão comum: radar + movimento PIR para ocupação, contato + câmera para eventos de segurança',
          'A contrapartida é mais complexidade de automação e um pouco mais de tempo de configuração em troca de bem menos disparos falsos',
          'Veja o guia de detecção de presença por radar para o tipo de sensor mais comumente fundido com detecção de movimento',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: 'Por que um único sensor não é suficiente',
        content:
          '**Cada tipo de sensor tem um ponto cego específico: sensores de movimento PIR não percebem ocupantes parados, o radar pode ocasionalmente dar falso positivo pela vibração de um eletrodoméstico, sensores de contato não identificam quem os acionou, e câmeras levantam considerações de privacidade que sensores sem câmera evitam.**',
        items: [
          'Uma automação de ocupação baseada apenas em PIR vai apagar as luzes de alguém sentado parado, a reclamação de automação residencial mais citada.',
          'Uma automação baseada apenas em radar pode ocasionalmente registrar um falso positivo por causa de um ventilador, vibração do HVAC ou um animal de estimação, dependendo das configurações de sensibilidade.',
          'Depender de um único sensor significa herdar o modo de falha específico daquele sensor em toda automação construída sobre ele.',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: 'Construindo uma automação de fusão',
        content:
          '**No Home Assistant, a fusão de sensores é tipicamente construída como um sensor binário de template que combina os estados de dois ou mais sensores de origem com lógica AND/OR, que as automações posteriores tratam como um único gatilho, mais confiável.**',
        items: [
          'Um sensor de template básico de fusão de ocupação pode reportar "ocupado" apenas quando o sensor de radar está ativo, ou quando o sensor PIR foi acionado nos últimos minutos — cobrindo tanto a detecção instantânea quanto o caso do ocupante parado.',
          'Para automações de segurança, combinar um sensor de contato (porta aberta) com um evento de detecção de pessoas baseado em câmera (veja o guia de câmeras de segurança com IA local) antes de disparar uma notificação reduz alarmes falsos causados, por exemplo, por uma porta que abre sem ninguém visível.',
          'Mantenha a lógica de fusão em um único sensor de template em vez de duplicar a lógica multicondição em várias automações separadas — isso facilita ajustá-la depois.',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: 'Padrões comuns de fusão',
        content:
          '**Os padrões de fusão mais comuns são ocupação (radar + movimento), segurança (contato + detecção por câmera) e ambiental (vários sensores de temperatura/umidade em média para suavizar o viés de posicionamento de um único sensor).**',
        items: [
          'Ocupação: sensor de radar para detecção de pessoa parada, PIR para resposta instantânea ao movimento, combinados para que as automações de iluminação reajam rapidamente e não expirem com alguém sentado parado.',
          'Segurança: sensores de contato de porta/janela combinados com detecção de pessoas por câmera, de modo que uma notificação só dispara quando um evento físico de entrada e uma confirmação visual coincidem.',
          'Ambiental: fazer a média de vários sensores de temperatura em um cômodo para reduzir o impacto de um sensor posicionado em uma corrente de ar ou perto de uma fonte de calor, dando às automações de climatização uma leitura mais representativa.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de hardware especial para fusão de sensores?', a: 'Não — é um padrão de lógica de automação construído com sensores de template e gatilhos multicondição padrão do Home Assistant, combinando os sensores que você já tem.' },
          { q: 'Qual é o exemplo mais simples de fusão de sensores para começar?', a: 'Combinar um sensor de presença por radar com um sensor de movimento PIR para detecção de ocupação é um ponto de partida comum — resolve diretamente a limitação do PIR de "para de detectar uma pessoa parada".' },
          { q: 'A fusão de sensores adiciona complexidade perceptível à automação?', a: 'Alguma — você está escrevendo um sensor de template com lógica combinada em vez de apontar uma automação diretamente para um sensor. É uma contrapartida administrável em troca de bem menos disparos falsos em automações que importam (como notificações de segurança).' },
          { q: 'Posso fundir o raciocínio de um LLM local com dados de sensores?', a: 'Sim — uma vez que os dados de sensores fundidos são expostos como uma entidade padrão do Home Assistant, uma automação com LLM (veja o guia de automações com IA) pode raciocinar sobre eles da mesma forma que faria com qualquer outro sensor, potencialmente adicionando lógica com mais contexto.' },
          { q: 'Isso é a mesma coisa que um gêmeo digital da casa?', a: 'Relacionado, mas mais restrito — a fusão de sensores combina alguns sensores para uma decisão de automação específica. Um gêmeo digital (veja esse guia) é um modelo mais amplo e contínuo do estado de toda a casa do qual várias automações podem se beneficiar.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Detecção de presença por radar: ocupação do cômodo sem câmera](/pt/smart-home/radar-presence-sensing-no-camera) — o sensor mais comumente fundido com a detecção de movimento',
          '[Gêmeo digital da casa explicado](/pt/smart-home/home-digital-twin-explained) — o modelo mais amplo do estado de toda a casa',
          '[Automações residenciais mais inteligentes com um LLM local](/pt/smart-home/ai-automations-local-llm) — raciocinando sobre dados de sensores fundidos',
          '[Câmeras de segurança com IA local com Frigate](/pt/smart-home/local-ai-security-camera) — o lado da câmera na fusão focada em segurança',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Fusão de sensores na casa inteligente (2027)',
      description: 'Fusão de sensores na casa inteligente: combinar vários tipos de sensor em uma única decisão de automação para reduzir falsos positivos e falsos negativos.',
      url: 'https://www.promptquorum.com/pt/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Fusão de sensores' }, { '@type': 'Thing', name: 'Confiabilidade da automação residencial' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de hardware especial para fusão de sensores?', acceptedAnswer: { '@type': 'Answer', text: 'Não — é um padrão de lógica de automação construído com sensores de template e gatilhos multicondição padrão do Home Assistant.' } },
        { '@type': 'Question', name: 'Qual é o exemplo mais simples de fusão de sensores para começar?', acceptedAnswer: { '@type': 'Answer', text: 'Combinar um sensor de presença por radar com um sensor de movimento PIR para detecção de ocupação.' } },
        { '@type': 'Question', name: 'Isso é a mesma coisa que um gêmeo digital da casa?', acceptedAnswer: { '@type': 'Answer', text: 'Relacionado, mas mais restrito — a fusão de sensores combina alguns sensores para uma decisão de automação; um gêmeo digital é um modelo mais amplo e contínuo do estado de toda a casa.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-ar.png',
    title: 'دمج بيانات الاستشعار في المنزل الذكي (2027)',
    seoTitle: 'دمج بيانات الاستشعار في المنزل الذكي (2027)',
    intro:
      'دمج بيانات الاستشعار (Sensor Fusion) يعني الجمع بين عدة أنواع من أجهزة الاستشعار — الحركة، الرادار، التلامس، الكاميرا، الصوت — في قرار أتمتة واحد، بدلًا من الاعتماد على مشغّل من جهاز استشعار واحد فقط، مما يقلل من الإيجابيات الخاطئة والسلبيات الخاطئة معًا. يشرح هذا المقال هذا النمط، مستخدمًا كشف الإشغال بالرادار مع الحركة كمثال أساسي، وكيفية بنائه في Home Assistant.',
    metaDescription:
      'دمج بيانات الاستشعار في المنزل الذكي: الجمع بين عدة أنواع من أجهزة الاستشعار في قرار أتمتة واحد لتقليل الإيجابيات والسلبيات الخاطئة.',
    twitterDescription:
      'لماذا يتفوق الجمع بين عدة أنواع من أجهزة الاستشعار (الرادار، الحركة، التلامس) في قرار واحد على الاعتماد على جهاز استشعار واحد في دقة أتمتة المنزل.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يبنون أتمتة تحتاج إلى تقليل المشغّلات الخاطئة',
    primaryTerm: 'sensor fusion home automation',
    targetKeywords: [
      'دمج بيانات الاستشعار المنزل الذكي',
      'دمج أجهزة الاستشعار لتحسين الدقة',
      'تقليل الإيجابيات الخاطئة home assistant',
      'منطق أتمتة متعدد أجهزة الاستشعار',
      'الجمع بين الرادار وجهاز استشعار الحركة',
    ],
    leadAnswerBlock:
      '**دمج بيانات الاستشعار يجمع بين قراءات عدة أنواع من أجهزة الاستشعار — على سبيل المثال، اشتراط توافق كل من الرادار وجهاز استشعار الحركة قبل أن تعتبر الأتمتة الغرفة "مشغولة" — لتقليل الإيجابيات والسلبيات الخاطئة التي ينتجها أي جهاز استشعار وحده.** هذا نمط منطق أتمتة في Home Assistant، وليس منتجًا محددًا.',
    quickAnswerTop: {
      ar: {
        question: 'كيف يحسّن الجمع بين عدة أجهزة استشعار دقة أتمتة المنزل؟',
        answer:
          'كل نوع من أجهزة الاستشعار له أنماط فشل خاصة به — جهاز استشعار الحركة PIR يفوّت شخصًا ثابتًا، وجهاز استشعار الرادار قد يسجل أحيانًا إيجابية خاطئة من اهتزاز جهاز كهربائي، وجهاز استشعار التلامس لا يعرف سوى حالة الباب مفتوح/مغلق، وليس من فتحه. دمج بيانات الاستشعار يعني كتابة منطق أتمتة يشترط توافق نوعين أو أكثر من أجهزة الاستشعار قبل التصرف بناءً على قرار، مما يلغي نقاط الضعف الفردية لكل جهاز استشعار. يُبنى هذا باستخدام شروط أتمتة قياسية في Home Assistant، وليس بأجهزة خاصة.',
        bullets: [
          'كل نوع من أجهزة الاستشعار له أنماط فشل خاصة به عند استخدامه بمفرده',
          'اشتراط توافق نوعين أو أكثر من أجهزة الاستشعار قبل التصرف يقلل الإيجابيات/السلبيات الخاطئة',
          'يُبنى باستخدام شروط أتمتة قياسية في Home Assistant — أجهزة استشعار قوالب أو مشغّلات متعددة الشروط',
          'مثال شائع: الرادار + الحركة للإشغال، أو التلامس + الكاميرا لأحداث الأمن',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'لماذا لا يكفي جهاز استشعار واحد', anchor: 'why-one-sensor-fails' },
      { label: 'بناء أتمتة دمج بيانات الاستشعار', anchor: 'building-fusion' },
      { label: 'أنماط الدمج الشائعة', anchor: 'common-patterns' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'دمج بيانات الاستشعار يجمع بين عدة أنواع من أجهزة الاستشعار (الرادار، الحركة، التلامس، الكاميرا) في قرار أتمتة واحد باستخدام شروط قياسية في Home Assistant، مما يقلل الإيجابيات/السلبيات الخاطئة التي ينتجها أي جهاز استشعار وحده.' },
      { type: 'plain-terms', content: 'يمكن أن يكون جهاز استشعار واحد مخطئًا بطريقته الخاصة — جهاز استشعار الحركة يفوّت شخصًا يجلس ساكنًا، وجهاز استشعار الباب لا يعرف من فتح الباب. دمج بيانات الاستشعار يعني ببساطة كتابة أتمتة تتحقق من أكثر من جهاز استشعار واحد ولا تتصرف إلا عند توافقها، تمامًا كما قد تثق بقرار أكثر إذا اتفق عليه شاهدان بدلًا من واحد فقط.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'كل نوع من أجهزة الاستشعار له نمط فشل خاص به عند استخدامه بمفرده — دمج بيانات الاستشعار يلغي هذا باشتراط التوافق',
          'يُبنى باستخدام شروط أتمتة قياسية في Home Assistant (مشغّلات متعددة الشروط أو أجهزة استشعار قوالب)، وليس بأجهزة خاصة',
          'النمط الشائع: الرادار + الحركة PIR للإشغال، والتلامس + الكاميرا لأحداث الأمن',
          'المقايضة هي تعقيد إضافي في الأتمتة ووقت إعداد أطول قليلًا مقابل تقليل ملموس للمشغّلات الخاطئة',
          'راجع دليل استشعار الحضور بالرادار لمعرفة نوع جهاز الاستشعار الأكثر دمجًا مع كشف الحركة',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: 'لماذا لا يكفي جهاز استشعار واحد',
        content:
          '**كل نوع من أجهزة الاستشعار له نقطة عمياء محددة: أجهزة استشعار الحركة PIR تفوّت الأشخاص الثابتين، والرادار قد يسجل أحيانًا إيجابية خاطئة من اهتزاز جهاز كهربائي، وأجهزة استشعار التلامس لا تحدد من قام بتشغيلها، والكاميرات تثير اعتبارات خصوصية تتجنبها أجهزة الاستشعار الخالية من الكاميرات.**',
        items: [
          'أتمتة الإشغال المعتمدة على PIR فقط ستطفئ الأضواء عن شخص يجلس ساكنًا، وهو أكثر إزعاج شائع مذكور في أتمتة المنزل الذكي.',
          'أتمتة الرادار فقط قد تسجل أحيانًا إيجابية خاطئة من مروحة أو اهتزاز نظام التدفئة والتهوية أو حيوان أليف، حسب إعدادات الحساسية.',
          'الاعتماد على جهاز استشعار واحد يعني وراثة نمط الفشل الخاص بذلك الجهاز عبر كل أتمتة تُبنى عليه.',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: 'بناء أتمتة دمج بيانات الاستشعار',
        content:
          '**في Home Assistant، يُبنى دمج بيانات الاستشعار عادةً كجهاز استشعار ثنائي من نوع قالب يجمع بين حالات جهازي استشعار مصدر أو أكثر بمنطق AND/OR، وتتعامل معه الأتمتة اللاحقة كمشغّل واحد أكثر موثوقية.**',
        items: [
          'قد يُبلغ جهاز استشعار قالب أساسي لدمج الإشغال عن حالة "مشغول" فقط عندما يكون جهاز الرادار نشطًا، أو عندما تم تشغيل جهاز استشعار PIR خلال الدقائق القليلة الماضية — مما يغطي كلًا من الكشف الفوري وحالة الشخص الثابت.',
          'بالنسبة لأتمتة الأمن، فإن الجمع بين جهاز استشعار تلامس (فتح الباب) وحدث كشف شخص قائم على الكاميرا (راجع دليل كاميرات الأمن بالذكاء الاصطناعي المحلي) قبل إطلاق إشعار يقلل من الإنذارات الخاطئة الناتجة، على سبيل المثال، عن فتح باب دون ظهور أحد.',
          'أبقِ منطق الدمج في جهاز استشعار قالب واحد بدلًا من تكرار منطق الشروط المتعددة عبر عدة أتمتة منفصلة — هذا يسهّل ضبطه لاحقًا.',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: 'أنماط الدمج الشائعة',
        content:
          '**أنماط الدمج الأكثر شيوعًا هي الإشغال (الرادار + الحركة)، والأمن (التلامس + كشف الكاميرا)، والبيئي (متوسط عدة أجهزة استشعار حرارة/رطوبة لتنعيم انحياز موضع جهاز استشعار واحد).**',
        items: [
          'الإشغال: جهاز استشعار رادار للكشف عن الثبات، وPIR للاستجابة الفورية للحركة، مدمجان معًا بحيث تستجيب أتمتة الإضاءة بسرعة ولا تنتهي مهلتها عن شخص يجلس ساكنًا.',
          'الأمن: أجهزة استشعار تلامس للباب/النافذة مدمجة مع كشف شخص قائم على الكاميرا، بحيث لا يُطلق إشعار إلا عند تطابق حدث دخول فعلي مع تأكيد بصري.',
          'البيئي: حساب متوسط عدة أجهزة استشعار حرارة في غرفة واحدة لتقليل أثر وضع جهاز استشعار واحد في مجرى هواء أو بالقرب من مصدر حرارة، مما يمنح أتمتة المناخ قراءة أكثر تمثيلًا.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج إلى أجهزة خاصة لدمج بيانات الاستشعار؟', a: 'لا — إنه نمط منطق أتمتة يُبنى باستخدام أجهزة استشعار قوالب قياسية في Home Assistant ومشغّلات متعددة الشروط، تجمع بين أي أجهزة استشعار تمتلكها بالفعل.' },
          { q: 'ما هو أبسط مثال لدمج بيانات الاستشعار للبدء به؟', a: 'الجمع بين جهاز استشعار حضور بالرادار وجهاز استشعار حركة PIR لكشف الإشغال نقطة انطلاق شائعة — فهو يعالج مباشرة قيد PIR في "التوقف عن كشف شخص ثابت".' },
          { q: 'هل يضيف دمج بيانات الاستشعار تعقيدًا ملحوظًا للأتمتة؟', a: 'بعض الشيء — أنت تكتب جهاز استشعار قالب بمنطق مدمج بدلًا من توجيه أتمتة إلى جهاز استشعار واحد مباشرة. هذه مقايضة يمكن التعامل معها مقابل تقليل ملموس للمشغّلات الخاطئة في الأتمتة المهمة (مثل إشعارات الأمن).' },
          { q: 'هل يمكنني دمج استدلال نموذج لغوي محلي مع بيانات الاستشعار؟', a: 'نعم — بمجرد أن تُعرض بيانات الاستشعار المدمجة ككيان قياسي في Home Assistant، يمكن لأتمتة نموذج لغوي (راجع دليل أتمتة الذكاء الاصطناعي) أن تستدل عليها بنفس طريقة أي جهاز استشعار آخر، وربما تضيف منطقًا أكثر وعيًا بالسياق فوقها.' },
          { q: 'هل هذا نفس التوأم الرقمي للمنزل؟', a: 'مرتبط لكنه أضيق نطاقًا — دمج بيانات الاستشعار يجمع بين عدد قليل من أجهزة الاستشعار لقرار أتمتة واحد محدد. التوأم الرقمي (راجع ذلك الدليل) هو نموذج أوسع ومستمر لحالة المنزل بأكمله يمكن أن تستمد منه أتمتة عديدة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[استشعار الحضور بالرادار: كشف إشغال الغرفة دون كاميرا](/ar/smart-home/radar-presence-sensing-no-camera) — جهاز الاستشعار الأكثر دمجًا مع كشف الحركة',
          '[شرح التوأم الرقمي للمنزل](/ar/smart-home/home-digital-twin-explained) — النموذج الأوسع لحالة المنزل بأكمله',
          '[أتمتة منزل أذكى باستخدام نموذج لغوي محلي](/ar/smart-home/ai-automations-local-llm) — الاستدلال على بيانات الاستشعار المدمجة',
          '[كاميرات أمن بالذكاء الاصطناعي المحلي مع Frigate](/ar/smart-home/local-ai-security-camera) — جانب الكاميرا في الدمج الموجّه للأمن',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'دمج بيانات الاستشعار في المنزل الذكي (2027)',
      description: 'دمج بيانات الاستشعار في المنزل الذكي: الجمع بين عدة أنواع من أجهزة الاستشعار في قرار أتمتة واحد لتقليل الإيجابيات والسلبيات الخاطئة.',
      url: 'https://www.promptquorum.com/ar/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'دمج بيانات الاستشعار' }, { '@type': 'Thing', name: 'موثوقية أتمتة المنزل' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج إلى أجهزة خاصة لدمج بيانات الاستشعار؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — إنه نمط منطق أتمتة يُبنى باستخدام أجهزة استشعار قوالب قياسية في Home Assistant ومشغّلات متعددة الشروط.' } },
        { '@type': 'Question', name: 'ما هو أبسط مثال لدمج بيانات الاستشعار للبدء به؟', acceptedAnswer: { '@type': 'Answer', text: 'الجمع بين جهاز استشعار حضور بالرادار وجهاز استشعار حركة PIR لكشف الإشغال.' } },
        { '@type': 'Question', name: 'هل هذا نفس التوأم الرقمي للمنزل؟', acceptedAnswer: { '@type': 'Answer', text: 'مرتبط لكنه أضيق نطاقًا — دمج بيانات الاستشعار يجمع بين عدد قليل من أجهزة الاستشعار لقرار أتمتة واحد؛ التوأم الرقمي نموذج أوسع ومستمر لحالة المنزل بأكمله.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    heroImage: '/images/sensor-fusion-smart-home-2027-overview-hero-ko.png',
    title: '스마트홈의 센서 퓨전 (2027년)',
    seoTitle: '스마트홈의 센서 퓨전 (2027년)',
    intro:
      '센서 퓨전이란 모션, 레이더, 접점, 카메라, 오디오 등 여러 유형의 센서를 하나의 자동화 결정에 결합하는 것으로, 단일 센서 하나에만 의존해 작동시키는 대신 오탐(false positive)과 미탐(false negative)을 모두 줄입니다. 이 글은 레이더와 모션을 결합한 재실 감지를 대표 사례로 사용하여 이 패턴을 설명하고, Home Assistant에서 이를 구축하는 방법을 다룹니다.',
    metaDescription:
      '스마트홈의 센서 퓨전: 여러 유형의 센서를 하나의 자동화 결정으로 결합하여 오탐과 미탐을 줄이는 방법.',
    twitterDescription:
      '여러 유형의 센서(레이더, 모션, 접점)를 하나의 결정으로 결합하는 것이 단일 센서에 의존하는 것보다 홈 자동화 정확도 면에서 왜 더 나은지 설명합니다.',
    readTime: '6분 소요',
    educationalLevel: 'Intermediate',
    audience: '오탐을 줄여야 하는 자동화를 구축하는 Home Assistant 사용자',
    primaryTerm: 'sensor fusion home automation',
    targetKeywords: [
      '센서 퓨전 홈 오토메이션',
      '센서 결합 스마트홈 정확도',
      '오탐 줄이기 home assistant',
      '다중 센서 자동화 로직',
      '레이더와 모션 센서 결합',
    ],
    leadAnswerBlock:
      '**센서 퓨전은 여러 유형의 센서에서 얻은 값을 결합합니다 — 예를 들어, 자동화가 방을 "재실 중"으로 판단하기 전에 레이더와 모션 센서 모두의 일치를 요구하는 방식으로 — 단일 센서 하나만으로는 발생하는 오탐과 미탐을 줄입니다.** 이는 특정 제품이 아니라 Home Assistant 자동화 로직 패턴입니다.',
    quickAnswerTop: {
      ko: {
        question: '여러 센서를 결합하면 홈 오토메이션 정확도가 어떻게 향상되나요?',
        answer:
          '단일 센서 유형은 저마다 고유한 실패 모드를 가지고 있습니다 — PIR 모션 센서는 가만히 있는 사람을 놓치고, 레이더 센서는 가전제품의 진동으로 인해 이따금 오탐을 등록할 수 있으며, 접점 센서는 문이 열렸는지 닫혔는지만 알 뿐 누가 열었는지는 알지 못합니다. 센서 퓨전이란 어떤 결정을 실행하기 전에 두 가지 이상의 센서 유형 간 일치를 요구하는 자동화 로직을 작성하는 것을 의미하며, 이는 각 센서 개별의 약점을 상쇄합니다. 이는 특수한 하드웨어가 아니라 표준 Home Assistant 자동화 조건으로 구축됩니다.',
        bullets: [
          '각 센서 유형은 단독으로 사용할 때 고유한 실패 모드를 가짐',
          '두 가지 이상의 센서 유형 간 일치를 요구하면 실행 전에 오탐/미탐이 줄어듦',
          '표준 Home Assistant 자동화 조건 — 템플릿 센서 또는 다중 조건 트리거로 구축',
          '일반적인 예: 재실 감지를 위한 레이더 + 모션, 또는 보안 이벤트를 위한 접점 + 카메라',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '센서 하나만으로는 부족한 이유', anchor: 'why-one-sensor-fails' },
      { label: '퓨전 자동화 구축하기', anchor: 'building-fusion' },
      { label: '일반적인 퓨전 패턴', anchor: 'common-patterns' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '센서 퓨전은 표준 Home Assistant 조건을 사용해 여러 유형의 센서(레이더, 모션, 접점, 카메라)를 하나의 자동화 결정으로 결합하여, 단일 센서 하나만으로 발생하는 오탐/미탐을 줄입니다.' },
      { type: 'plain-terms', content: '단일 센서는 저마다의 방식으로 잘못 판단할 수 있습니다 — 모션 센서는 가만히 앉아 있는 사람을 놓치고, 문 센서는 누가 문을 열었는지 알지 못합니다. 센서 퓨전은 그저 둘 이상의 센서를 확인하고 그것들이 일치할 때만 작동하는 자동화를 작성하는 것을 의미하며, 이는 한 명의 목격자보다 두 명의 목격자가 동의할 때 그 결정을 더 신뢰하는 것과 비슷합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '모든 센서 유형은 단독으로 사용될 때 고유한 실패 모드를 가집니다 — 센서 퓨전은 일치를 요구함으로써 이를 상쇄합니다',
          '특수한 하드웨어가 아니라 표준 Home Assistant 자동화 조건(다중 조건 트리거 또는 템플릿 센서)으로 구축됩니다',
          '일반적인 패턴: 재실 감지를 위한 레이더 + PIR 모션, 보안 이벤트를 위한 접점 + 카메라',
          '트레이드오프는 자동화 복잡성 증가와 약간 더 긴 설정 시간이며, 그 대가로 오작동이 의미 있게 줄어듭니다',
          '모션 감지와 가장 흔히 결합되는 센서 유형에 대해서는 레이더 재실 감지 가이드를 참고하세요',
        ],
      },
      whyOneSensorFails: {
        id: 'why-one-sensor-fails',
        title: '센서 하나만으로는 부족한 이유',
        content:
          '**모든 센서 유형에는 특정한 사각지대가 있습니다: PIR 모션 센서는 가만히 있는 재실자를 놓치고, 레이더는 가전제품의 진동으로 이따금 오탐을 일으킬 수 있으며, 접점 센서는 누가 작동시켰는지 식별하지 못하고, 카메라는 카메라 없는 센서라면 피할 수 있는 프라이버시 문제를 야기합니다.**',
        items: [
          'PIR 전용 재실 자동화는 가만히 앉아 있는 사람의 조명을 꺼버리며, 이는 스마트홈 자동화에서 가장 흔히 언급되는 불편 사항입니다.',
          '레이더 전용 자동화는 감도 설정에 따라 선풍기, 냉난방기 진동, 또는 반려동물로 인해 이따금 오탐을 등록할 수 있습니다.',
          '단일 센서에만 의존하면 그 센서에 구축된 모든 자동화가 해당 센서의 특정 실패 모드를 그대로 물려받게 됩니다.',
        ],
      },
      buildingFusion: {
        id: 'building-fusion',
        title: '퓨전 자동화 구축하기',
        content:
          '**Home Assistant에서 센서 퓨전은 일반적으로 두 개 이상의 소스 센서 상태를 AND/OR 로직으로 결합하는 템플릿 바이너리 센서로 구축되며, 이후의 자동화는 이를 단일하고 더 신뢰할 수 있는 트리거로 취급합니다.**',
        items: [
          '기본적인 재실 퓨전 템플릿 센서는 레이더 센서가 활성 상태이거나 PIR 센서가 최근 몇 분 이내에 트리거된 경우에만 "재실 중"으로 보고하도록 만들 수 있으며, 이는 즉각적인 감지와 정지 상태의 재실자 케이스를 모두 다룹니다.',
          '보안 자동화의 경우, 알림을 실행하기 전에 접점 센서(문 열림)와 카메라 기반 사람 감지 이벤트(로컬 AI 보안 카메라 가이드 참고)를 결합하면, 예를 들어 아무도 보이지 않는 상태에서 문이 열리는 경우와 같은 오경보를 줄일 수 있습니다.',
          '퓨전 로직을 여러 개의 개별 자동화에 걸쳐 다중 조건 로직을 중복시키기보다 하나의 템플릿 센서에 유지하세요 — 이렇게 하면 나중에 조정하기가 더 쉬워집니다.',
        ],
      },
      commonPatterns: {
        id: 'common-patterns',
        title: '일반적인 퓨전 패턴',
        content:
          '**가장 일반적인 퓨전 패턴은 재실(레이더 + 모션), 보안(접점 + 카메라 감지), 환경(단일 센서의 배치 편향을 상쇄하기 위해 여러 온도/습도 센서를 평균화)입니다.**',
        items: [
          '재실: 정지 상태 감지를 위한 레이더 센서와 즉각적인 모션 반응을 위한 PIR을 결합하여, 조명 자동화가 빠르게 반응하고 가만히 앉아 있는 사람에 대해 시간 초과되지 않도록 합니다.',
          '보안: 문/창문 접점 센서와 카메라 기반 사람 감지를 결합하여, 실제 출입 이벤트와 시각적 확인이 모두 일치할 때만 알림이 발생하도록 합니다.',
          '환경: 한 방에 있는 여러 온도 센서를 평균화하여 하나의 센서가 외풍이나 열원 근처에 배치된 영향을 줄이고, 기후 자동화에 더 대표성 있는 값을 제공합니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '센서 퓨전에 특수한 하드웨어가 필요한가요?', a: '아니요 — 이는 이미 가지고 있는 센서를 결합하는, 표준 Home Assistant 템플릿 센서와 다중 조건 트리거로 구축되는 자동화 로직 패턴입니다.' },
          { q: '시작하기 가장 간단한 센서 퓨전 예시는 무엇인가요?', a: '재실 감지를 위해 레이더 재실 센서와 PIR 모션 센서를 결합하는 것이 흔한 출발점입니다 — 이는 PIR의 "정지한 사람 감지를 멈춘다"는 한계를 직접적으로 해결합니다.' },
          { q: '센서 퓨전은 자동화 복잡성을 눈에 띄게 늘리나요?', a: '어느 정도는 그렇습니다 — 자동화를 단일 센서에 직접 연결하는 대신 결합 로직을 가진 템플릿 센서를 작성하게 됩니다. 이는 (보안 알림처럼) 중요한 자동화에서 오작동을 의미 있게 줄여주는 대가로 감당할 만한 트레이드오프입니다.' },
          { q: '로컬 LLM의 추론을 센서 데이터와 결합할 수 있나요?', a: '네 — 결합된 센서 데이터가 표준 Home Assistant 엔티티로 노출되면, LLM 자동화(AI 자동화 가이드 참고)는 다른 센서와 마찬가지로 그것에 대해 추론할 수 있으며, 그 위에 맥락을 더 잘 인식하는 로직을 추가할 수도 있습니다.' },
          { q: '이것은 홈 디지털 트윈과 같은 것인가요?', a: '관련은 있지만 더 좁은 개념입니다 — 센서 퓨전은 하나의 특정 자동화 결정을 위해 몇 개의 센서를 결합합니다. 디지털 트윈(해당 가이드 참고)은 여러 자동화가 활용할 수 있는, 집 전체 상태에 대한 더 넓고 지속적인 모델입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[레이더 재실 감지: 카메라 없이 방 재실 확인하기](/ko/smart-home/radar-presence-sensing-no-camera) — 모션 감지와 가장 흔히 결합되는 센서',
          '[홈 디지털 트윈 해설](/ko/smart-home/home-digital-twin-explained) — 더 넓은 집 전체 상태 모델',
          '[로컬 LLM으로 더 똑똑한 홈 자동화 구축하기](/ko/smart-home/ai-automations-local-llm) — 결합된 센서 데이터에 대한 추론',
          '[Frigate를 활용한 로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera) — 보안 중심 퓨전의 카메라 측면',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트홈의 센서 퓨전 (2027년)',
      description: '스마트홈의 센서 퓨전: 여러 유형의 센서를 하나의 자동화 결정으로 결합하여 오탐과 미탐을 줄이는 방법.',
      url: 'https://www.promptquorum.com/ko/smart-home/sensor-fusion-smart-home-2027',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '센서 퓨전' }, { '@type': 'Thing', name: '홈 오토메이션 신뢰성' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '센서 퓨전에 특수한 하드웨어가 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 표준 Home Assistant 템플릿 센서와 다중 조건 트리거로 구축되는 자동화 로직 패턴입니다.' } },
        { '@type': 'Question', name: '시작하기 가장 간단한 센서 퓨전 예시는 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: '재실 감지를 위해 레이더 재실 센서와 PIR 모션 센서를 결합하는 것입니다.' } },
        { '@type': 'Question', name: '이것은 홈 디지털 트윈과 같은 것인가요?', acceptedAnswer: { '@type': 'Answer', text: '관련은 있지만 더 좁은 개념입니다 — 센서 퓨전은 하나의 자동화 결정을 위해 몇 개의 센서를 결합하며, 디지털 트윈은 집 전체 상태에 대한 더 넓고 지속적인 모델입니다.' } },
      ],
    },
  },
}
