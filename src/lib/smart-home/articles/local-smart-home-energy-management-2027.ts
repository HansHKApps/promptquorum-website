import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Local Smart Home Energy Management (2027)',
    seoTitle: 'Local Smart Home Energy Management (2027)',
    intro:
      'Local smart home energy management means tracking and automating solar, battery, and appliance usage entirely on your own hardware, with Home Assistant\'s Energy dashboard as the hub — no usage data leaves your network. This guide covers why cloud energy apps expose granular usage patterns, how a local setup replaces them device by device, and where to go next for inverter/heat-pump integration, the dashboard setup itself, and whole-home battery backup.',
    metaDescription:
      'Local smart home energy management in 2027: run solar, battery, and appliance monitoring through Home Assistant\'s Energy dashboard, with no usage data sent to the cloud.',
    twitterDescription:
      'Local energy management for smart homes: Home Assistant\'s Energy dashboard, local smart plugs, and load-shifting automations — no cloud usage tracking.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners with solar, a battery, or several monitored appliances who want energy data to stay local',
    primaryTerm: 'local smart home energy management',
    targetKeywords: [
      'smart home energy management local',
      'local energy monitoring home assistant',
      'home assistant energy without cloud',
      'local load shifting automation',
      'private home energy dashboard',
    ],
    leadAnswerBlock:
      '**Local smart home energy management runs on three layers: local monitoring (smart plugs and CT clamps reporting straight to Home Assistant), a local dashboard (Home Assistant\'s built-in Energy dashboard, not a vendor cloud app), and local automations that shift load to cheap or solar-generation hours.** None of the three requires sending usage data outside your network.',
    quickAnswerTop: {
      en: {
        question: 'How do I manage smart home energy locally, without a cloud dashboard?',
        answer:
          'Use Home Assistant\'s built-in Energy dashboard as the single source of truth. Feed it from local-reporting devices — a CT clamp on the main feed, energy-monitoring smart plugs on individual appliances, and a local solar/battery integration if you have one. Build automations directly in Home Assistant that shift high-draw appliances (EV charging, water heating, laundry) to low-cost or high-solar-generation hours. None of this data needs to reach a manufacturer\'s cloud service.',
        bullets: [
          'Hub: Home Assistant\'s built-in Energy dashboard',
          'Monitoring: a CT clamp on the main feed + energy-monitoring smart plugs per appliance',
          'Automation: shift load to cheap-tariff or high-solar hours, all logic runs locally',
          'Avoid: vendor cloud apps that only expose usage data through their own dashboard',
          'Next steps: inverter/heat-pump integration, then the dashboard setup guide',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Local Energy Management', anchor: 'why-local' },
      { label: 'What to Monitor', anchor: 'what-to-monitor' },
      { label: 'Load-Shifting Automations', anchor: 'automations' },
      { label: 'Where This Fits in the Stack', anchor: 'stack-fit' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Local smart home energy management uses Home Assistant\'s Energy dashboard fed by local smart plugs and a CT clamp, with load-shifting automations that never send usage data to a cloud service.' },
      { type: 'plain-terms', content: 'Instead of checking your solar or battery usage in a manufacturer\'s phone app, the same data flows into Home Assistant on your own network. A small clamp sensor reads your main power feed, and smart plugs read individual appliances. Home Assistant then uses that data to decide when to run appliances — for example, only charging an EV when solar output is high.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Use Home Assistant\'s built-in Energy dashboard as the single local hub for solar, battery, and appliance usage',
          'Feed it with a CT clamp on the main feed and energy-monitoring smart plugs on individual appliances',
          'Build load-shifting automations (EV charging, water heating, laundry) directly in Home Assistant — no cloud round-trip',
          'Cloud energy apps expose granular per-device usage patterns to the manufacturer; local monitoring keeps that data on your network',
          'This is the overview article — see the dashboard setup guide, the Matter inverter/heat-pump integration guide, and the microgrid/battery-backup guide for the specifics',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Manage Energy Locally',
        content:
          '**A cloud energy-monitoring app sends your per-device usage patterns — when you run laundry, how often you charge an EV, your daily routine — to the manufacturer\'s servers.** A local setup keeps that same data on your own network and still gets automation and historical tracking.',
        items: [
          'Granular energy data reveals occupancy patterns and daily routines — the same information a cloud camera or voice assistant would expose, just inferred from power draw instead.',
          'Many vendor energy apps require an account and internet connectivity even to view local usage, and can stop working if the vendor discontinues the app or changes its terms.',
          'A local setup keeps working during an internet outage — the load-shifting automations that save money don\'t depend on a cloud service being reachable.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: 'What to Monitor',
        content:
          '**Start with whole-home usage via a CT clamp on the main feed, then add smart plugs on the appliances that matter for automation — not everything needs its own sensor.**',
        items: [
          'A CT (current transformer) clamp on the main feed gives whole-home wattage without touching individual circuits — this is the baseline the Energy dashboard needs.',
          'Add energy-monitoring smart plugs on high-draw or schedulable appliances: EV charger, water heater, washer/dryer, dishwasher. These are the ones worth automating around.',
          'If you have solar and/or a battery, their own local integration (see the Matter inverter/heat-pump integration guide) feeds generation and state-of-charge into the same dashboard.',
          'Skip monitoring low-draw always-on devices individually — they add dashboard noise without giving you anything to automate.',
        ],
      },
      automations: {
        id: 'automations',
        title: 'Load-Shifting Automations',
        content:
          '**The payoff for local energy monitoring is automations that shift high-draw appliances to the cheapest or greenest hours, running entirely on your own hub.**',
        items: [
          'Time-of-use tariff shifting: run the dishwasher, washer, and EV charger during off-peak-rate hours, using Home Assistant\'s scheduling and your utility\'s published rate windows.',
          'Solar-following automations: only start high-draw appliances when local solar generation (fed from your inverter integration) exceeds a threshold, maximizing self-consumption over grid draw.',
          'Battery-aware automations: prioritize battery discharge for evening peak-rate hours if you have home battery storage, rather than drawing from the grid.',
          'All of this runs as standard Home Assistant automations — no cloud service needs to be reachable for the logic to execute.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'Where This Fits in the Stack',
        content:
          '**This article is the overview; the next three cover the specific pieces — Matter-based inverter/heat-pump integration, the Home Assistant Energy dashboard setup itself, and whole-home battery backup.**',
        items: [
          'For connecting a solar inverter or heat pump as a local, Matter-controlled device rather than through a vendor cloud app, see the Matter solar inverter + heat pump integration guide.',
          'For the actual dashboard configuration — adding sensors, setting up cost tracking, reading the charts — see the Home Assistant Energy dashboard setup guide.',
          'For using a home battery as backup during outages, see the home energy microgrid guide.',
          'If you don\'t yet have solar hardware, see the balcony solar cluster for what a small-scale local setup looks like before you plan whole-home energy management around it.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need solar panels for local energy management to be worth it?', a: 'No. A CT clamp plus a few energy-monitoring smart plugs gives you load-shifting automations (time-of-use tariffs, avoiding peak-rate hours) even without any solar generation. Solar and battery integration add more automation options but aren\'t required to start.' },
          { q: 'What does Home Assistant\'s Energy dashboard need to get started?', a: 'At minimum, a grid-consumption sensor — usually a CT clamp on the main feed, or a smart meter integration if your utility supports one. Everything else (per-appliance plugs, solar, battery) is additive.' },
          { q: 'Does this replace my utility\'s own energy app?', a: 'It can, for usage tracking and automation. Some utilities still require their own app for billing or tariff-switching, but day-to-day monitoring and automation work entirely through Home Assistant once it\'s wired up.' },
          { q: 'Is a CT clamp difficult to install?', a: 'Most clamp-style CT sensors clip around an existing cable inside the breaker panel without cutting wires, though working inside a panel means turning off power first and following the sensor\'s installation instructions. If you\'re not comfortable inside a breaker panel, use a licensed electrician for that step.' },
          { q: 'Can I automate around a variable electricity tariff?', a: 'Yes — if your utility publishes rate windows (or you can enter them manually), Home Assistant automations can schedule high-draw appliances for the cheapest hours using the same scheduling tools as any other automation.' },
          { q: 'How is this different from a smart thermostat\'s built-in energy reports?', a: 'A thermostat\'s own app only reports on itself and usually requires its cloud service. The Energy dashboard aggregates every monitored device — thermostat, EV charger, appliances, solar, battery — into one local view and lets automations act across all of them together.' },
          { q: 'Do smart plugs need to be locally controlled to work with this?', a: 'For the monitoring and automation described here, the plug needs to report its data into Home Assistant, ideally over a local integration (Zigbee, Z-Wave, or a locally-polled Wi-Fi integration) rather than only through the vendor\'s cloud API, so the automation keeps working offline.' },
          { q: 'What if I only have a few smart plugs and no solar?', a: 'Start there. A handful of energy-monitoring plugs on your highest-draw appliances, feeding the Energy dashboard, already enables time-of-use load shifting — solar and battery integration are additions you can make later without starting over.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant Energy Dashboard: Complete Setup Guide](/smart-home/home-assistant-energy-dashboard-guide) — the how-to',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — connecting generation hardware locally',
          '[Turning Your Home Into an Energy Microgrid](/smart-home/home-as-energy-microgrid-2027) — battery backup and outage independence',
          '[Best Hardware for a Local Smart Home + Local AI](/smart-home/best-hardware-for-local-smart-home) — the hub hardware this runs on',
          '[What Is Balcony Solar?](/balcony-solar/what-is-balcony-solar) — cross-cluster: small-scale local solar basics',
          '[Connect Balcony Solar to Home Assistant, No Cloud](/balcony-solar/connect-balcony-solar-home-assistant-local) — cross-cluster: local balcony-solar integration',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Smart Home Energy Management (2027)',
      description: 'Local smart home energy management in 2027: run solar, battery, and appliance monitoring through Home Assistant\'s Energy dashboard, with no usage data sent to the cloud.',
      url: 'https://www.promptquorum.com/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energy dashboard' }, { '@type': 'Thing', name: 'Local energy monitoring' }, { '@type': 'Thing', name: 'Load-shifting automation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need solar panels for local energy management to be worth it?', acceptedAnswer: { '@type': 'Answer', text: 'No. A CT clamp plus a few energy-monitoring smart plugs gives you load-shifting automations even without any solar generation. Solar and battery integration add more automation options but aren\'t required to start.' } },
        { '@type': 'Question', name: 'What does Home Assistant\'s Energy dashboard need to get started?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum, a grid-consumption sensor — usually a CT clamp on the main feed, or a smart meter integration if supported. Everything else is additive.' } },
        { '@type': 'Question', name: 'Does this replace my utility\'s own energy app?', acceptedAnswer: { '@type': 'Answer', text: 'It can, for usage tracking and automation. Some utilities still require their own app for billing, but day-to-day monitoring and automation work entirely through Home Assistant once configured.' } },
        { '@type': 'Question', name: 'Is a CT clamp difficult to install?', acceptedAnswer: { '@type': 'Answer', text: 'Most clip around an existing cable inside the breaker panel without cutting wires, though this means working inside the panel with the power off — use a licensed electrician if you\'re not comfortable doing that yourself.' } },
        { '@type': 'Question', name: 'Can I automate around a variable electricity tariff?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — if your utility publishes rate windows, Home Assistant automations can schedule high-draw appliances for the cheapest hours using standard scheduling tools.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Lokales Energiemanagement im Smart Home (2027)',
    seoTitle: 'Lokales Energiemanagement im Smart Home (2027)',
    intro:
      'Lokales Energiemanagement im Smart Home bedeutet, Solar-, Batterie- und Gerätenutzung vollständig auf eigener Hardware zu erfassen und zu automatisieren, mit dem Energie-Dashboard von Home Assistant als Zentrale — keine Nutzungsdaten verlassen Ihr Netzwerk. Dieser Leitfaden erklärt, warum Cloud-Energie-Apps detaillierte Nutzungsmuster preisgeben, wie ein lokales Setup sie Gerät für Gerät ersetzt, und wohin es als Nächstes geht: Wechselrichter-/Wärmepumpen-Integration, das Dashboard-Setup selbst und Batteriesicherung fürs ganze Haus.',
    metaDescription:
      'Lokales Energiemanagement im Smart Home 2027: Solar-, Batterie- und Gerätenutzung über das Energie-Dashboard von Home Assistant, ohne dass Nutzungsdaten in die Cloud gehen.',
    twitterDescription:
      'Lokales Energiemanagement für Smart Homes: Home-Assistant-Energie-Dashboard, lokale Smart Plugs und Lastverschiebungs-Automatisierungen — ohne Cloud-Tracking.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer mit Solar, Batterie oder mehreren überwachten Geräten, die Energiedaten lokal halten wollen',
    primaryTerm: 'lokales energiemanagement smart home',
    targetKeywords: [
      'smart home energiemanagement lokal',
      'lokales energiemonitoring home assistant',
      'home assistant energie ohne cloud',
      'lokale lastverschiebung automatisierung',
      'privates energie dashboard zuhause',
    ],
    leadAnswerBlock:
      '**Lokales Energiemanagement im Smart Home läuft auf drei Ebenen: lokale Überwachung (Smart Plugs und Stromwandlerzangen, die direkt an Home Assistant melden), ein lokales Dashboard (das eingebaute Energie-Dashboard von Home Assistant, keine Hersteller-Cloud-App) und lokale Automatisierungen, die die Last in günstige oder solarreiche Stunden verschieben.** Keine der drei erfordert das Senden von Nutzungsdaten außerhalb Ihres Netzwerks.',
    quickAnswerTop: {
      de: {
        question: 'Wie verwalte ich die Energie meines Smart Homes lokal, ohne Cloud-Dashboard?',
        answer:
          'Nutzen Sie das eingebaute Energie-Dashboard von Home Assistant als einzige Quelle der Wahrheit. Speisen Sie es mit lokal meldenden Geräten — einer Stromwandlerzange am Hauptzuleiter, energiemessenden Smart Plugs an einzelnen Geräten und einer lokalen Solar-/Batterie-Integration, falls vorhanden. Bauen Sie Automatisierungen direkt in Home Assistant, die stromhungrige Geräte (E-Auto-Ladung, Warmwasser, Wäsche) in günstige oder solarreiche Stunden verschieben. Keine dieser Daten muss den Cloud-Dienst eines Herstellers erreichen.',
        bullets: [
          'Zentrale: das eingebaute Energie-Dashboard von Home Assistant',
          'Überwachung: Stromwandlerzange am Hauptzuleiter + energiemessende Smart Plugs pro Gerät',
          'Automatisierung: Last in günstige Tarif- oder solarreiche Stunden verschieben, die gesamte Logik läuft lokal',
          'Vermeiden: Hersteller-Cloud-Apps, die Nutzungsdaten nur über ihr eigenes Dashboard zeigen',
          'Nächste Schritte: Wechselrichter-/Wärmepumpen-Integration, dann der Dashboard-Setup-Leitfaden',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Warum lokales Energiemanagement', anchor: 'why-local' },
      { label: 'Was überwacht werden sollte', anchor: 'what-to-monitor' },
      { label: 'Lastverschiebungs-Automatisierungen', anchor: 'automations' },
      { label: 'Wo dies in den Stack passt', anchor: 'stack-fit' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Lokales Energiemanagement im Smart Home nutzt das Energie-Dashboard von Home Assistant, gespeist von lokalen Smart Plugs und einer Stromwandlerzange, mit Lastverschiebungs-Automatisierungen, die niemals Nutzungsdaten an einen Cloud-Dienst senden.' },
      { type: 'plain-terms', content: 'Statt Ihre Solar- oder Batterienutzung in der Telefon-App eines Herstellers zu prüfen, fließen dieselben Daten in Home Assistant in Ihrem eigenen Netzwerk. Ein kleiner Klemmsensor liest Ihren Hauptzuleiter, und Smart Plugs lesen einzelne Geräte. Home Assistant nutzt diese Daten dann, um zu entscheiden, wann Geräte laufen sollen — zum Beispiel ein E-Auto nur laden, wenn die Solarleistung hoch ist.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Nutzen Sie das eingebaute Energie-Dashboard von Home Assistant als einzige lokale Zentrale für Solar-, Batterie- und Gerätenutzung',
          'Speisen Sie es mit einer Stromwandlerzange am Hauptzuleiter und energiemessenden Smart Plugs an einzelnen Geräten',
          'Bauen Sie Lastverschiebungs-Automatisierungen (E-Auto-Ladung, Warmwasser, Wäsche) direkt in Home Assistant — ohne Cloud-Umweg',
          'Cloud-Energie-Apps geben detaillierte Pro-Gerät-Nutzungsmuster an den Hersteller weiter; lokale Überwachung hält diese Daten in Ihrem Netzwerk',
          'Dies ist der Überblicksartikel — siehe den Dashboard-Setup-Leitfaden, den Matter-Wechselrichter-/Wärmepumpen-Leitfaden und den Microgrid-/Batteriesicherungs-Leitfaden für die Details',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Warum Energie lokal verwalten',
        content:
          '**Eine Cloud-Energie-App sendet Ihre Pro-Gerät-Nutzungsmuster — wann Sie Wäsche waschen, wie oft Sie ein E-Auto laden, Ihre Tagesroutine — an die Server des Herstellers.** Ein lokales Setup hält dieselben Daten in Ihrem eigenen Netzwerk und bietet trotzdem Automatisierung und Verlaufsverfolgung.',
        items: [
          'Detaillierte Energiedaten verraten Anwesenheitsmuster und Tagesroutinen — dieselbe Information, die eine Cloud-Kamera oder ein Sprachassistent preisgeben würde, nur aus dem Stromverbrauch abgeleitet.',
          'Viele Hersteller-Energie-Apps benötigen ein Konto und Internetverbindung, selbst um lokale Nutzung anzuzeigen, und können aufhören zu funktionieren, wenn der Hersteller die App einstellt oder die Bedingungen ändert.',
          'Ein lokales Setup funktioniert auch bei einem Internetausfall weiter — die geldsparenden Lastverschiebungs-Automatisierungen hängen nicht davon ab, dass ein Cloud-Dienst erreichbar ist.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: 'Was überwacht werden sollte',
        content:
          '**Beginnen Sie mit der Gesamthaus-Nutzung über eine Stromwandlerzange am Hauptzuleiter, fügen Sie dann Smart Plugs an den Geräten hinzu, die für die Automatisierung wichtig sind — nicht alles braucht einen eigenen Sensor.**',
        items: [
          'Eine Stromwandlerzange (CT) am Hauptzuleiter liefert die Gesamthaus-Wattzahl, ohne einzelne Stromkreise anzufassen — das ist die Basis, die das Energie-Dashboard braucht.',
          'Fügen Sie energiemessende Smart Plugs an stromhungrigen oder planbaren Geräten hinzu: E-Auto-Ladegerät, Warmwasserbereiter, Waschmaschine/Trockner, Geschirrspüler. Diese lohnen sich für die Automatisierung.',
          'Falls Sie Solar und/oder eine Batterie haben, speist deren eigene lokale Integration (siehe den Matter-Wechselrichter-/Wärmepumpen-Leitfaden) Erzeugung und Ladezustand in dasselbe Dashboard.',
          'Verzichten Sie auf die einzelne Überwachung stromsparender Dauerläufer — sie erzeugen nur Dashboard-Rauschen, ohne etwas zu bieten, das sich automatisieren lässt.',
        ],
      },
      automations: {
        id: 'automations',
        title: 'Lastverschiebungs-Automatisierungen',
        content:
          '**Der Gewinn der lokalen Energieüberwachung sind Automatisierungen, die stromhungrige Geräte in die günstigsten oder grünsten Stunden verschieben — vollständig auf Ihrer eigenen Zentrale.**',
        items: [
          'Zeittarif-Verschiebung: Geschirrspüler, Waschmaschine und E-Auto-Ladegerät während Nebenzeit-Tarifstunden laufen lassen, mit der Planung von Home Assistant und den veröffentlichten Tarifzeiten Ihres Versorgers.',
          'Solar-folgende Automatisierungen: stromhungrige Geräte nur starten, wenn die lokale Solarerzeugung (aus Ihrer Wechselrichter-Integration) einen Schwellenwert überschreitet, um den Eigenverbrauch gegenüber dem Netzbezug zu maximieren.',
          'Batteriebewusste Automatisierungen: Batterieentladung für abendliche Spitzentarifstunden priorisieren, falls Sie einen Heimspeicher haben, statt aus dem Netz zu beziehen.',
          'All dies läuft als Standard-Home-Assistant-Automatisierung — kein Cloud-Dienst muss erreichbar sein, damit die Logik ausgeführt wird.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'Wo dies in den Stack passt',
        content:
          '**Dieser Artikel ist der Überblick; die nächsten drei behandeln die konkreten Teile — Matter-basierte Wechselrichter-/Wärmepumpen-Integration, das Energie-Dashboard-Setup selbst und Batteriesicherung fürs ganze Haus.**',
        items: [
          'Um einen Solarwechselrichter oder eine Wärmepumpe als lokales, Matter-gesteuertes Gerät statt über eine Hersteller-Cloud-App anzubinden, siehe den Matter-Solarwechselrichter- + Wärmepumpen-Integrationsleitfaden.',
          'Für die eigentliche Dashboard-Konfiguration — Sensoren hinzufügen, Kostenverfolgung einrichten, Diagramme lesen — siehe den Home-Assistant-Energie-Dashboard-Setup-Leitfaden.',
          'Für die Nutzung eines Heimspeichers als Notstromversorgung bei Ausfällen, siehe den Energie-Microgrid-Leitfaden.',
          'Falls Sie noch keine Solarhardware haben, siehe den Balkonsolar-Cluster für ein kleines lokales Setup, bevor Sie das ganze Haus planen.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Brauche ich Solarpanels, damit sich lokales Energiemanagement lohnt?', a: 'Nein. Eine Stromwandlerzange plus ein paar energiemessende Smart Plugs bieten Lastverschiebungs-Automatisierungen (Zeittarife, Spitzenzeiten vermeiden) auch ohne jede Solarerzeugung. Solar- und Batterieintegration bieten mehr Automatisierungsoptionen, sind aber zum Start nicht nötig.' },
          { q: 'Was braucht das Energie-Dashboard von Home Assistant zum Start?', a: 'Mindestens einen Netzbezugssensor — meist eine Stromwandlerzange am Hauptzuleiter oder eine Smart-Meter-Integration, falls Ihr Versorger das unterstützt. Alles andere (Geräte-Plugs, Solar, Batterie) ist zusätzlich.' },
          { q: 'Ersetzt das die App meines Versorgers?', a: 'Für Nutzungsverfolgung und Automatisierung kann es das. Manche Versorger verlangen weiterhin ihre eigene App für Abrechnung oder Tarifwechsel, aber die tägliche Überwachung und Automatisierung läuft vollständig über Home Assistant, sobald es eingerichtet ist.' },
          { q: 'Ist eine Stromwandlerzange schwer zu installieren?', a: 'Die meisten Klemmsensoren clipsen um ein vorhandenes Kabel im Sicherungskasten, ohne Kabel zu durchtrennen, doch die Arbeit im Sicherungskasten bedeutet, zuerst den Strom abzuschalten und die Installationsanleitung des Sensors zu befolgen. Wenn Sie sich im Sicherungskasten unsicher fühlen, beauftragen Sie eine Elektrofachkraft.' },
          { q: 'Kann ich um einen variablen Stromtarif herum automatisieren?', a: 'Ja — wenn Ihr Versorger Tarifzeiten veröffentlicht (oder Sie sie manuell eingeben können), können Home-Assistant-Automatisierungen stromhungrige Geräte für die günstigsten Stunden planen, mit denselben Planungswerkzeugen wie jede andere Automatisierung.' },
          { q: 'Wie unterscheidet sich das von den eingebauten Energieberichten eines Smart-Thermostats?', a: 'Die App eines Thermostats berichtet nur über sich selbst und braucht meist dessen Cloud-Dienst. Das Energie-Dashboard fasst jedes überwachte Gerät — Thermostat, E-Auto-Ladegerät, Geräte, Solar, Batterie — in einer lokalen Ansicht zusammen und lässt Automatisierungen über alle gemeinsam wirken.' },
          { q: 'Müssen Smart Plugs lokal steuerbar sein, damit das funktioniert?', a: 'Für die hier beschriebene Überwachung und Automatisierung muss der Plug seine Daten an Home Assistant melden, idealerweise über eine lokale Integration (Zigbee, Z-Wave oder eine lokal abgefragte WLAN-Integration) statt nur über die Cloud-API des Herstellers, damit die Automatisierung auch offline funktioniert.' },
          { q: 'Was, wenn ich nur ein paar Smart Plugs und keine Solaranlage habe?', a: 'Fangen Sie dort an. Ein paar energiemessende Plugs an Ihren stromhungrigsten Geräten, die das Energie-Dashboard speisen, ermöglichen bereits Zeittarif-Lastverschiebung — Solar- und Batterieintegration sind Ergänzungen, die Sie später ohne Neustart hinzufügen können.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Themen',
        items: [
          '[Home Assistant Energie-Dashboard: Komplette Einrichtungsanleitung](/de/smart-home/home-assistant-energy-dashboard-guide) — die Anleitung',
          '[Matter-Integration für Solarwechselrichter und Wärmepumpen](/de/smart-home/matter-solar-inverter-heat-pump-integration) — Erzeugungshardware lokal anbinden',
          '[Ihr Zuhause zum Energie-Microgrid machen](/de/smart-home/home-as-energy-microgrid-2027) — Batteriesicherung und Ausfallunabhängigkeit',
          '[Beste Hardware für ein lokales Smart Home + lokale KI](/de/smart-home/best-hardware-for-local-smart-home) — die Hub-Hardware, auf der dies läuft',
          '[Was ist Balkonsolar?](/de/balcony-solar/what-is-balcony-solar) — Cluster-übergreifend: kleine lokale Solar-Grundlagen',
          '[Balkonsolar ohne Cloud mit Home Assistant verbinden](/de/balcony-solar/connect-balcony-solar-home-assistant-local) — Cluster-übergreifend: lokale Balkonsolar-Integration',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokales Energiemanagement im Smart Home (2027)',
      description: 'Lokales Energiemanagement im Smart Home 2027: Solar-, Batterie- und Gerätenutzung über das Energie-Dashboard von Home Assistant, ohne dass Nutzungsdaten in die Cloud gehen.',
      url: 'https://www.promptquorum.com/de/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energie-Dashboard' }, { '@type': 'Thing', name: 'Lokales Energiemonitoring' }, { '@type': 'Thing', name: 'Lastverschiebungs-Automatisierung' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich Solarpanels, damit sich lokales Energiemanagement lohnt?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Eine Stromwandlerzange plus ein paar energiemessende Smart Plugs bieten Lastverschiebungs-Automatisierungen auch ohne jede Solarerzeugung.' } },
        { '@type': 'Question', name: 'Was braucht das Energie-Dashboard von Home Assistant zum Start?', acceptedAnswer: { '@type': 'Answer', text: 'Mindestens einen Netzbezugssensor — meist eine Stromwandlerzange am Hauptzuleiter oder eine Smart-Meter-Integration.' } },
        { '@type': 'Question', name: 'Ersetzt das die App meines Versorgers?', acceptedAnswer: { '@type': 'Answer', text: 'Für Nutzungsverfolgung und Automatisierung kann es das, auch wenn manche Versorger weiterhin eine eigene App für die Abrechnung verlangen.' } },
        { '@type': 'Question', name: 'Ist eine Stromwandlerzange schwer zu installieren?', acceptedAnswer: { '@type': 'Answer', text: 'Die meisten clipsen um ein vorhandenes Kabel im Sicherungskasten, doch das bedeutet Arbeit bei abgeschaltetem Strom — beauftragen Sie eine Elektrofachkraft, wenn Sie unsicher sind.' } },
        { '@type': 'Question', name: 'Kann ich um einen variablen Stromtarif herum automatisieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — wenn Ihr Versorger Tarifzeiten veröffentlicht, können Home-Assistant-Automatisierungen stromhungrige Geräte für die günstigsten Stunden planen.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Gestion locale de l\'énergie dans la maison connectée (2027)',
    seoTitle: 'Gestion locale de l\'énergie (2027)',
    intro:
      'La gestion locale de l\'énergie dans une maison connectée consiste à suivre et automatiser l\'usage du solaire, de la batterie et des appareils entièrement sur votre propre matériel, avec le tableau de bord Énergie de Home Assistant comme centre — aucune donnée d\'usage ne quitte votre réseau. Ce guide explique pourquoi les applications d\'énergie cloud exposent des habitudes de consommation détaillées, comment une installation locale les remplace appareil par appareil, et où aller ensuite pour l\'intégration onduleur/pompe à chaleur, la configuration du tableau de bord lui-même, et la sauvegarde par batterie pour toute la maison.',
    metaDescription:
      'Gestion locale de l\'énergie dans la maison connectée en 2027 : suivez solaire, batterie et appareils via le tableau de bord Énergie de Home Assistant, sans envoyer de données au cloud.',
    twitterDescription:
      'Gestion locale de l\'énergie pour maisons connectées : tableau de bord Énergie de Home Assistant, prises connectées locales et automatisations de décalage de charge — sans suivi cloud.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de maison connectée avec solaire, batterie ou plusieurs appareils surveillés qui veulent garder leurs données d\'énergie locales',
    primaryTerm: 'gestion locale energie maison connectee',
    targetKeywords: [
      'gestion energie maison connectee locale',
      'monitoring energie local home assistant',
      'home assistant energie sans cloud',
      'automatisation decalage charge local',
      'tableau de bord energie prive maison',
    ],
    leadAnswerBlock:
      '**La gestion locale de l\'énergie dans une maison connectée repose sur trois niveaux : surveillance locale (prises connectées et pinces ampèremétriques qui remontent directement à Home Assistant), un tableau de bord local (le tableau de bord Énergie intégré de Home Assistant, pas une appli cloud du fabricant), et des automatisations locales qui décalent la charge vers les heures bon marché ou de forte production solaire.** Aucun des trois ne nécessite d\'envoyer des données d\'usage hors de votre réseau.',
    quickAnswerTop: {
      fr: {
        question: 'Comment gérer l\'énergie de ma maison connectée localement, sans tableau de bord cloud ?',
        answer:
          'Utilisez le tableau de bord Énergie intégré de Home Assistant comme unique source de vérité. Alimentez-le avec des appareils à rapport local — une pince ampèremétrique sur l\'arrivée principale, des prises connectées mesurant l\'énergie sur les appareils individuels, et une intégration solaire/batterie locale si vous en avez une. Construisez des automatisations directement dans Home Assistant qui décalent les appareils gourmands (recharge VE, chauffe-eau, lessive) vers les heures bon marché ou de forte production solaire. Aucune de ces données n\'a besoin d\'atteindre le service cloud d\'un fabricant.',
        bullets: [
          'Centre : le tableau de bord Énergie intégré de Home Assistant',
          'Surveillance : une pince ampèremétrique sur l\'arrivée principale + des prises connectées mesurant l\'énergie par appareil',
          'Automatisation : décaler la charge vers les heures de tarif bas ou de forte production solaire, toute la logique tourne localement',
          'À éviter : les applis cloud des fabricants qui n\'exposent les données d\'usage que via leur propre tableau de bord',
          'Prochaines étapes : intégration onduleur/pompe à chaleur, puis le guide de configuration du tableau de bord',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Pourquoi une gestion locale de l\'énergie', anchor: 'why-local' },
      { label: 'Que surveiller', anchor: 'what-to-monitor' },
      { label: 'Automatisations de décalage de charge', anchor: 'automations' },
      { label: 'Où cela s\'intègre dans la pile', anchor: 'stack-fit' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'La gestion locale de l\'énergie utilise le tableau de bord Énergie de Home Assistant alimenté par des prises connectées locales et une pince ampèremétrique, avec des automatisations de décalage de charge qui n\'envoient jamais de données à un service cloud.' },
      { type: 'plain-terms', content: 'Plutôt que de vérifier votre usage solaire ou batterie dans l\'appli téléphone d\'un fabricant, les mêmes données arrivent dans Home Assistant sur votre propre réseau. Un petit capteur à pince lit votre arrivée principale, et des prises connectées lisent les appareils individuels. Home Assistant utilise ensuite ces données pour décider quand faire fonctionner les appareils — par exemple, ne recharger un véhicule électrique que lorsque la production solaire est élevée.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          'Utilisez le tableau de bord Énergie intégré de Home Assistant comme unique centre local pour l\'usage solaire, batterie et appareils',
          'Alimentez-le avec une pince ampèremétrique sur l\'arrivée principale et des prises connectées mesurant l\'énergie sur les appareils individuels',
          'Construisez des automatisations de décalage de charge (recharge VE, chauffe-eau, lessive) directement dans Home Assistant — sans aller-retour cloud',
          'Les applis d\'énergie cloud exposent des habitudes de consommation détaillées par appareil au fabricant ; la surveillance locale garde ces données sur votre réseau',
          'Ceci est l\'article de synthèse — voir le guide de configuration du tableau de bord, le guide d\'intégration Matter onduleur/pompe à chaleur, et le guide microgrid/sauvegarde batterie pour les détails',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Pourquoi gérer l\'énergie localement',
        content:
          '**Une appli cloud de surveillance énergétique envoie vos habitudes de consommation par appareil — quand vous faites la lessive, la fréquence de recharge de votre VE, votre routine quotidienne — aux serveurs du fabricant.** Une installation locale garde ces mêmes données sur votre propre réseau tout en conservant automatisation et historique.',
        items: [
          'Des données d\'énergie détaillées révèlent des habitudes d\'occupation et des routines quotidiennes — la même information qu\'exposerait une caméra ou un assistant vocal cloud, simplement déduite de la consommation électrique.',
          'De nombreuses applis d\'énergie de fabricants exigent un compte et une connexion internet même pour voir l\'usage local, et peuvent cesser de fonctionner si le fabricant abandonne l\'appli ou change ses conditions.',
          'Une installation locale continue de fonctionner pendant une coupure internet — les automatisations de décalage de charge qui font économiser de l\'argent ne dépendent pas de la disponibilité d\'un service cloud.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: 'Que surveiller',
        content:
          '**Commencez par l\'usage global de la maison via une pince ampèremétrique sur l\'arrivée principale, puis ajoutez des prises connectées sur les appareils importants pour l\'automatisation — tout n\'a pas besoin de son propre capteur.**',
        items: [
          'Une pince ampèremétrique (CT) sur l\'arrivée principale donne la puissance totale de la maison sans toucher aux circuits individuels — c\'est la base dont le tableau de bord Énergie a besoin.',
          'Ajoutez des prises connectées mesurant l\'énergie sur les appareils gourmands ou programmables : chargeur de VE, chauffe-eau, lave-linge/sèche-linge, lave-vaisselle. Ce sont ceux qui valent la peine d\'être automatisés.',
          'Si vous avez du solaire et/ou une batterie, leur propre intégration locale (voir le guide d\'intégration Matter onduleur/pompe à chaleur) alimente production et état de charge dans le même tableau de bord.',
          'Ne surveillez pas individuellement les appareils toujours allumés à faible consommation — ils ajoutent du bruit au tableau de bord sans rien offrir à automatiser.',
        ],
      },
      automations: {
        id: 'automations',
        title: 'Automatisations de décalage de charge',
        content:
          '**Le bénéfice de la surveillance énergétique locale, ce sont des automatisations qui décalent les appareils gourmands vers les heures les moins chères ou les plus vertes, tournant entièrement sur votre propre centre.**',
        items: [
          'Décalage tarifaire horaire : faites tourner lave-vaisselle, lave-linge et chargeur de VE pendant les heures creuses, en utilisant la planification de Home Assistant et les plages tarifaires publiées par votre fournisseur.',
          'Automatisations suivant le solaire : ne démarrez les appareils gourmands que lorsque la production solaire locale (issue de votre intégration onduleur) dépasse un seuil, maximisant l\'autoconsommation par rapport au réseau.',
          'Automatisations conscientes de la batterie : privilégiez la décharge de la batterie pendant les heures de pointe du soir si vous avez un stockage domestique, plutôt que de puiser dans le réseau.',
          'Tout ceci tourne comme des automatisations Home Assistant standard — aucun service cloud n\'a besoin d\'être joignable pour que la logique s\'exécute.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'Où cela s\'intègre dans la pile',
        content:
          '**Cet article est la synthèse ; les trois suivants couvrent les éléments spécifiques — intégration onduleur/pompe à chaleur basée sur Matter, la configuration du tableau de bord Énergie de Home Assistant elle-même, et la sauvegarde par batterie pour toute la maison.**',
        items: [
          'Pour connecter un onduleur solaire ou une pompe à chaleur comme appareil local contrôlé par Matter plutôt que via une appli cloud du fabricant, voir le guide d\'intégration Matter onduleur solaire + pompe à chaleur.',
          'Pour la configuration réelle du tableau de bord — ajouter des capteurs, configurer le suivi des coûts, lire les graphiques — voir le guide de configuration du tableau de bord Énergie de Home Assistant.',
          'Pour utiliser une batterie domestique comme secours pendant les coupures, voir le guide du microgrid énergétique domestique.',
          'Si vous n\'avez pas encore de matériel solaire, voir le cluster solaire de balcon pour voir à quoi ressemble une installation locale à petite échelle avant de planifier la gestion énergétique de toute la maison.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Ai-je besoin de panneaux solaires pour que la gestion locale de l\'énergie en vaille la peine ?', a: 'Non. Une pince ampèremétrique plus quelques prises connectées mesurant l\'énergie offrent des automatisations de décalage de charge (tarifs horaires, éviter les heures de pointe) même sans aucune production solaire. L\'intégration solaire et batterie ajoute des options d\'automatisation mais n\'est pas requise pour commencer.' },
          { q: 'De quoi le tableau de bord Énergie de Home Assistant a-t-il besoin pour démarrer ?', a: 'Au minimum, un capteur de consommation réseau — généralement une pince ampèremétrique sur l\'arrivée principale, ou une intégration de compteur intelligent si votre fournisseur en supporte une. Tout le reste (prises par appareil, solaire, batterie) est additif.' },
          { q: 'Est-ce que cela remplace l\'appli énergie de mon fournisseur ?', a: 'Cela peut, pour le suivi d\'usage et l\'automatisation. Certains fournisseurs exigent toujours leur propre appli pour la facturation ou le changement de tarif, mais la surveillance et l\'automatisation quotidiennes fonctionnent entièrement via Home Assistant une fois configurées.' },
          { q: 'Une pince ampèremétrique est-elle difficile à installer ?', a: 'La plupart des capteurs à pince s\'enclenchent autour d\'un câble existant dans le tableau électrique sans couper de fils, mais travailler dans un tableau électrique signifie couper le courant d\'abord et suivre les instructions d\'installation du capteur. Si vous n\'êtes pas à l\'aise dans un tableau électrique, faites appel à un électricien agréé pour cette étape.' },
          { q: 'Puis-je automatiser autour d\'un tarif électrique variable ?', a: 'Oui — si votre fournisseur publie des plages tarifaires (ou que vous pouvez les saisir manuellement), les automatisations Home Assistant peuvent programmer les appareils gourmands pour les heures les moins chères, avec les mêmes outils de planification que toute autre automatisation.' },
          { q: 'En quoi est-ce différent des rapports énergétiques intégrés d\'un thermostat connecté ?', a: 'L\'appli propre d\'un thermostat ne rapporte que sur lui-même et nécessite généralement son service cloud. Le tableau de bord Énergie agrège chaque appareil surveillé — thermostat, chargeur de VE, appareils, solaire, batterie — dans une vue locale unique et permet aux automatisations d\'agir sur tous ensemble.' },
          { q: 'Les prises connectées doivent-elles être contrôlables localement pour que cela fonctionne ?', a: 'Pour la surveillance et l\'automatisation décrites ici, la prise doit remonter ses données vers Home Assistant, idéalement via une intégration locale (Zigbee, Z-Wave, ou une intégration Wi-Fi interrogée localement) plutôt que uniquement via l\'API cloud du fabricant, afin que l\'automatisation continue de fonctionner hors ligne.' },
          { q: 'Que faire si je n\'ai que quelques prises connectées et pas de solaire ?', a: 'Commencez par là. Quelques prises mesurant l\'énergie sur vos appareils les plus gourmands, alimentant le tableau de bord Énergie, permettent déjà le décalage de charge tarifaire horaire — l\'intégration solaire et batterie sont des ajouts que vous pouvez faire plus tard sans tout recommencer.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Tableau de bord Énergie de Home Assistant : guide complet de configuration](/fr/smart-home/home-assistant-energy-dashboard-guide) — le mode d\'emploi',
          '[Intégration Matter pour onduleurs solaires et pompes à chaleur](/fr/smart-home/matter-solar-inverter-heat-pump-integration) — connecter le matériel de production localement',
          '[Transformer votre maison en microgrid énergétique](/fr/smart-home/home-as-energy-microgrid-2027) — sauvegarde batterie et indépendance en cas de coupure',
          '[Meilleur matériel pour une maison connectée locale + IA locale](/fr/smart-home/best-hardware-for-local-smart-home) — le matériel hub sur lequel cela tourne',
          '[Qu\'est-ce que le solaire de balcon ?](/fr/balcony-solar/what-is-balcony-solar) — inter-cluster : bases du solaire local à petite échelle',
          '[Connecter le solaire de balcon à Home Assistant, sans cloud](/fr/balcony-solar/connect-balcony-solar-home-assistant-local) — inter-cluster : intégration locale du solaire de balcon',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Gestion locale de l\'énergie dans la maison connectée (2027)',
      description: 'Gestion locale de l\'énergie dans la maison connectée en 2027 : suivez solaire, batterie et appareils via le tableau de bord Énergie de Home Assistant, sans envoyer de données au cloud.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Tableau de bord Énergie Home Assistant' }, { '@type': 'Thing', name: 'Surveillance énergétique locale' }, { '@type': 'Thing', name: 'Automatisation de décalage de charge' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Ai-je besoin de panneaux solaires pour que la gestion locale de l\'énergie en vaille la peine ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Une pince ampèremétrique plus quelques prises connectées mesurant l\'énergie offrent des automatisations de décalage de charge même sans production solaire.' } },
        { '@type': 'Question', name: 'De quoi le tableau de bord Énergie de Home Assistant a-t-il besoin pour démarrer ?', acceptedAnswer: { '@type': 'Answer', text: 'Au minimum, un capteur de consommation réseau — généralement une pince ampèremétrique sur l\'arrivée principale.' } },
        { '@type': 'Question', name: 'Est-ce que cela remplace l\'appli énergie de mon fournisseur ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela peut, pour le suivi d\'usage et l\'automatisation, même si certains fournisseurs exigent toujours leur propre appli pour la facturation.' } },
        { '@type': 'Question', name: 'Une pince ampèremétrique est-elle difficile à installer ?', acceptedAnswer: { '@type': 'Answer', text: 'La plupart s\'enclenchent autour d\'un câble existant, mais cela implique de travailler courant coupé — faites appel à un électricien agréé si vous n\'êtes pas à l\'aise.' } },
        { '@type': 'Question', name: 'Puis-je automatiser autour d\'un tarif électrique variable ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — si votre fournisseur publie des plages tarifaires, les automatisations Home Assistant peuvent programmer les appareils gourmands pour les heures les moins chères.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'ローカルなスマートホームのエネルギー管理（2027年）',
    seoTitle: 'ローカルなスマートホームのエネルギー管理（2027年）',
    intro:
      'ローカルなスマートホームのエネルギー管理とは、太陽光・バッテリー・家電の使用状況を自分のハードウェアだけで記録・自動化することを意味します。Home AssistantのEnergyダッシュボードを中心に据え、使用データがネットワーク外に出ることはありません。本ガイドでは、クラウド型エネルギーアプリが詳細な使用パターンを外部に晒す理由、ローカル構成が機器ごとにそれをどう置き換えるか、そしてインバーター・ヒートポンプ連携、ダッシュボード自体の設定、家全体のバッテリーバックアップへの次のステップを解説します。',
    metaDescription:
      '2027年のローカルなスマートホームエネルギー管理：Home AssistantのEnergyダッシュボードで太陽光・バッテリー・家電を監視し、使用データをクラウドに送信しません。',
    twitterDescription:
      'スマートホームのローカルエネルギー管理：Home AssistantのEnergyダッシュボード、ローカルスマートプラグ、負荷シフト自動化 — クラウド追跡なし。',
    readTime: '8分で読めます',
    educationalLevel: 'Intermediate',
    audience: '太陽光・バッテリー・複数の監視対象家電を持ち、エネルギーデータをローカルに保ちたいスマートホーム所有者',
    primaryTerm: 'ローカル スマートホーム エネルギー管理',
    targetKeywords: [
      'スマートホーム エネルギー管理 ローカル',
      'ローカル エネルギー監視 home assistant',
      'home assistant エネルギー クラウドなし',
      'ローカル 負荷シフト 自動化',
      'プライベート 家庭用 エネルギーダッシュボード',
    ],
    leadAnswerBlock:
      '**ローカルなスマートホームエネルギー管理は3つの層で構成されます：ローカル監視（Home Assistantに直接報告するスマートプラグとCTクランプ）、ローカルダッシュボード（ベンダーのクラウドアプリではなくHome Assistant内蔵のEnergyダッシュボード）、そして安価または太陽光発電が多い時間帯に負荷をシフトするローカル自動化です。** いずれもネットワーク外へ使用データを送信する必要はありません。',
    quickAnswerTop: {
      ja: {
        question: 'クラウドダッシュボードなしでスマートホームのエネルギーをローカルに管理するには？',
        answer:
          'Home Assistant内蔵のEnergyダッシュボードを唯一の情報源として使用します。メイン電源のCTクランプ、個々の家電のエネルギー監視スマートプラグ、そしてあればローカルの太陽光/バッテリー連携からデータを供給します。EV充電・給湯・洗濯など消費電力の大きい家電を、低コストまたは太陽光発電が多い時間帯にシフトする自動化をHome Assistant内に直接構築します。これらのデータがメーカーのクラウドサービスに届く必要は一切ありません。',
        bullets: [
          'ハブ：Home Assistant内蔵のEnergyダッシュボード',
          '監視：メイン電源のCTクランプ + 各家電のエネルギー監視スマートプラグ',
          '自動化：安価な料金帯または太陽光発電が多い時間帯に負荷をシフト、ロジックはすべてローカル実行',
          '避けるべきもの：使用データを自社ダッシュボードでしか表示しないベンダーのクラウドアプリ',
          '次のステップ：インバーター・ヒートポンプ連携、その後ダッシュボード設定ガイドへ',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'なぜローカルエネルギー管理か', anchor: 'why-local' },
      { label: '何を監視すべきか', anchor: 'what-to-monitor' },
      { label: '負荷シフト自動化', anchor: 'automations' },
      { label: 'このスタックでの位置づけ', anchor: 'stack-fit' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ローカルなスマートホームエネルギー管理は、ローカルスマートプラグとCTクランプが供給するHome AssistantのEnergyダッシュボードを利用し、使用データをクラウドサービスに送信しない負荷シフト自動化を行います。' },
      { type: 'plain-terms', content: 'メーカーのスマホアプリで太陽光やバッテリーの使用状況を確認する代わりに、同じデータが自分のネットワーク内のHome Assistantに流れます。小さなクランプセンサーがメイン電源を読み取り、スマートプラグが個々の家電を読み取ります。Home Assistantはそのデータを使って、たとえば太陽光発電が高いときだけEVを充電するなど、家電をいつ動かすか判断します。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'Home Assistant内蔵のEnergyダッシュボードを、太陽光・バッテリー・家電使用の唯一のローカルハブとして使用する',
          'メイン電源のCTクランプと各家電のエネルギー監視スマートプラグでデータを供給する',
          'EV充電・給湯・洗濯などの負荷シフト自動化をHome Assistant内に直接構築 — クラウド往復なし',
          'クラウド型エネルギーアプリは機器ごとの詳細な使用パターンをメーカーに晒す。ローカル監視ならそのデータは自分のネットワークに留まる',
          'これは概要記事です — 詳細はダッシュボード設定ガイド、Matterインバーター・ヒートポンプ連携ガイド、マイクログリッド・バッテリーバックアップガイドを参照してください',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'なぜエネルギーをローカルで管理するか',
        content:
          '**クラウド型エネルギー監視アプリは、いつ洗濯するか、EVをどれくらいの頻度で充電するか、日々のルーティンといった機器ごとの使用パターンをメーカーのサーバーに送信します。** ローカル構成なら同じデータを自分のネットワークに留めたまま、自動化と履歴追跡も維持できます。',
        items: [
          '詳細なエネルギーデータは在室パターンや日々のルーティンを明らかにします — クラウドカメラや音声アシスタントが晒すのと同じ情報が、電力消費から推測されるだけです。',
          '多くのベンダー製エネルギーアプリは、ローカルの使用状況を見るだけでもアカウントとインターネット接続を要求し、ベンダーがアプリを終了したり規約を変更したりすると動作しなくなることがあります。',
          'ローカル構成はインターネット障害時にも動作し続けます — 節約になる負荷シフト自動化はクラウドサービスへの到達性に依存しません。',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: '何を監視すべきか',
        content:
          '**まずメイン電源のCTクランプで家全体の使用量を把握し、その後自動化に重要な家電にスマートプラグを追加します — すべてに専用センサーは不要です。**',
        items: [
          'メイン電源のCT（電流変成器）クランプは、個々の回路に触れずに家全体のワット数を提供します — これがEnergyダッシュボードに必要な基盤です。',
          '消費電力の大きい、あるいはスケジュール可能な家電にエネルギー監視スマートプラグを追加します：EV充電器、給湯器、洗濯機/乾燥機、食洗機。これらは自動化する価値があります。',
          '太陽光やバッテリーがある場合、それぞれ専用のローカル連携（Matterインバーター・ヒートポンプ連携ガイド参照）が発電量と充電状態を同じダッシュボードに供給します。',
          '消費電力が小さく常時稼働の機器を個別に監視するのは避けましょう — 自動化に使えるものを提供せず、ダッシュボードのノイズが増えるだけです。',
        ],
      },
      automations: {
        id: 'automations',
        title: '負荷シフト自動化',
        content:
          '**ローカルエネルギー監視の見返りは、消費電力の大きい家電を最も安い、あるいは最もグリーンな時間帯にシフトする自動化であり、すべて自分のハブ上で完結します。**',
        items: [
          '時間帯別料金シフト：Home Assistantのスケジューリングと電力会社が公開する料金時間帯を使って、オフピーク時間帯に食洗機・洗濯機・EV充電器を動かします。',
          '太陽光追従自動化：（インバーター連携から供給される）ローカルの太陽光発電が閾値を超えたときのみ消費電力の大きい家電を起動し、系統からの引き込みより自家消費を最大化します。',
          'バッテリー考慮自動化：家庭用バッテリーがある場合、系統から引き込むより夕方のピーク料金時間帯のバッテリー放電を優先します。',
          'これらはすべて標準のHome Assistant自動化として実行されます — ロジックの実行にクラウドサービスへの到達性は不要です。',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'このスタックでの位置づけ',
        content:
          '**この記事は概要であり、続く3本の記事が具体的な部分を扱います — Matterベースのインバーター・ヒートポンプ連携、Home Assistant Energyダッシュボードの設定そのもの、そして家全体のバッテリーバックアップです。**',
        items: [
          'ベンダーのクラウドアプリ経由ではなく、太陽光インバーターやヒートポンプをローカルのMatter制御機器として接続するには、Matterソーラーインバーター＋ヒートポンプ連携ガイドを参照してください。',
          'センサーの追加、コスト追跡の設定、グラフの読み方など実際のダッシュボード設定については、Home Assistant Energyダッシュボード設定ガイドを参照してください。',
          '停電時のバックアップとして家庭用バッテリーを使う方法は、家庭用エネルギーマイクログリッドガイドを参照してください。',
          'まだ太陽光ハードウェアをお持ちでない場合は、家全体のエネルギー管理を計画する前に、小規模なローカル構成がどのようなものかバルコニーソーラー・クラスターを参照してください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ローカルエネルギー管理の価値を得るために太陽光パネルは必要ですか？', a: 'いいえ。CTクランプといくつかのエネルギー監視スマートプラグだけで、太陽光発電がなくても負荷シフト自動化（時間帯別料金、ピーク時間帯回避）が可能です。太陽光とバッテリー連携はさらに自動化の選択肢を増やしますが、開始には必須ではありません。' },
          { q: 'Home AssistantのEnergyダッシュボードを始めるには何が必要ですか？', a: '最低限、系統消費量センサーが必要です — 通常はメイン電源のCTクランプ、または電力会社が対応していればスマートメーター連携です。それ以外（機器別プラグ、太陽光、バッテリー）はすべて追加要素です。' },
          { q: 'これは電力会社独自のエネルギーアプリを置き換えますか？', a: '使用状況の追跡と自動化に関しては置き換え可能です。一部の電力会社は請求や料金プラン変更に独自アプリを引き続き要求しますが、日常の監視と自動化は設定さえ済めばHome Assistantだけで完結します。' },
          { q: 'CTクランプの取り付けは難しいですか？', a: 'ほとんどのクランプ式CTセンサーは、配線を切断せずに分電盤内の既存ケーブルに取り付けられますが、分電盤内での作業は最初に電源を切り、センサーの取り付け説明書に従う必要があります。分電盤内の作業に不安がある場合は、有資格の電気工事士に依頼してください。' },
          { q: '変動する電気料金プランに合わせて自動化できますか？', a: 'はい — 電力会社が料金時間帯を公開している（または手動で入力できる）場合、Home Assistantの自動化は他の自動化と同じスケジューリングツールを使って、消費電力の大きい家電を最も安い時間帯にスケジュールできます。' },
          { q: 'これはスマートサーモスタット内蔵のエネルギーレポートとどう違いますか？', a: 'サーモスタット独自のアプリは自分自身についてしか報告せず、通常はそのクラウドサービスが必要です。Energyダッシュボードは、サーモスタット、EV充電器、家電、太陽光、バッテリーなど監視対象のすべての機器を1つのローカルビューに集約し、自動化がそれらすべてに横断的に作用できるようにします。' },
          { q: 'これを機能させるにはスマートプラグをローカルで制御できる必要がありますか？', a: 'ここで説明した監視と自動化のためには、プラグがベンダーのクラウドAPI経由だけでなく、理想的にはローカル連携（Zigbee、Z-Wave、またはローカルでポーリングされるWi-Fi連携）経由でHome Assistantにデータを報告する必要があります。そうすればオフラインでも自動化が機能し続けます。' },
          { q: 'スマートプラグが数個しかなく太陽光もない場合はどうすればいいですか？', a: 'そこから始めてください。消費電力の大きい家電に数個のエネルギー監視プラグを取り付けEnergyダッシュボードに供給するだけで、すでに時間帯別料金の負荷シフトが可能になります。太陽光とバッテリー連携は、最初からやり直すことなく後から追加できます。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant Energyダッシュボード：完全設定ガイド](/ja/smart-home/home-assistant-energy-dashboard-guide) — 設定方法',
          '[太陽光インバーターとヒートポンプのMatter連携](/ja/smart-home/matter-solar-inverter-heat-pump-integration) — 発電ハードウェアをローカルで接続',
          '[家をエネルギーマイクログリッドに変える](/ja/smart-home/home-as-energy-microgrid-2027) — バッテリーバックアップと停電時の独立性',
          '[ローカルスマートホーム＋ローカルAIに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — これが動作するハブハードウェア',
          '[バルコニーソーラーとは？](/ja/balcony-solar/what-is-balcony-solar) — クラスター横断：小規模ローカル太陽光の基礎',
          '[バルコニーソーラーをクラウドなしでHome Assistantに接続](/ja/balcony-solar/connect-balcony-solar-home-assistant-local) — クラスター横断：ローカルなバルコニーソーラー連携',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルなスマートホームのエネルギー管理（2027年）',
      description: '2027年のローカルなスマートホームエネルギー管理：Home AssistantのEnergyダッシュボードで太陽光・バッテリー・家電を監視し、使用データをクラウドに送信しません。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energyダッシュボード' }, { '@type': 'Thing', name: 'ローカルエネルギー監視' }, { '@type': 'Thing', name: '負荷シフト自動化' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'ローカルエネルギー管理の価値を得るために太陽光パネルは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。CTクランプといくつかのエネルギー監視スマートプラグだけで、太陽光発電がなくても負荷シフト自動化が可能です。' } },
        { '@type': 'Question', name: 'Home AssistantのEnergyダッシュボードを始めるには何が必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '最低限、系統消費量センサーが必要です — 通常はメイン電源のCTクランプ、またはスマートメーター連携です。' } },
        { '@type': 'Question', name: 'これは電力会社独自のエネルギーアプリを置き換えますか？', acceptedAnswer: { '@type': 'Answer', text: '使用状況の追跡と自動化に関しては可能です。一部の電力会社は請求に独自アプリを要求しますが、日常の監視はHome Assistantで完結します。' } },
        { '@type': 'Question', name: 'CTクランプの取り付けは難しいですか？', acceptedAnswer: { '@type': 'Answer', text: 'ほとんどは配線を切断せずに分電盤内の既存ケーブルに取り付けられますが、電源を切っての作業になります。不安なら有資格の電気工事士に依頼してください。' } },
        { '@type': 'Question', name: '変動する電気料金プランに合わせて自動化できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい — 電力会社が料金時間帯を公開していれば、Home Assistantの自動化が消費電力の大きい家電を最も安い時間帯にスケジュールできます。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: '本地智能家居能源管理（2027年）',
    seoTitle: '本地智能家居能源管理（2027年）',
    intro:
      '本地智能家居能源管理意味着完全在自己的硬件上追踪并自动化太阳能、电池和家电的用电情况，以Home Assistant的能源仪表盘作为中枢——使用数据不会离开你的网络。本指南将说明为什么云端能源应用会暴露详细的用电模式、本地方案如何逐设备取而代之，以及接下来该看逆变器/热泵集成、仪表盘本身的设置，以及全屋电池备用电源。',
    metaDescription:
      '2027年本地智能家居能源管理：通过Home Assistant的能源仪表盘运行太阳能、电池和家电监测，使用数据不发送到云端。',
    twitterDescription:
      '智能家居的本地能源管理：Home Assistant能源仪表盘、本地智能插座与负荷转移自动化——无需云端追踪。',
    readTime: '阅读需8分钟',
    educationalLevel: 'Intermediate',
    audience: '拥有太阳能、电池或多个被监测家电，希望能源数据保持本地化的智能家居用户',
    primaryTerm: '本地智能家居能源管理',
    targetKeywords: [
      '智能家居能源管理本地',
      '本地能源监测home assistant',
      'home assistant能源无云端',
      '本地负荷转移自动化',
      '私密家庭能源仪表盘',
    ],
    leadAnswerBlock:
      '**本地智能家居能源管理运行在三层之上：本地监测（智能插座和CT钳表直接上报给Home Assistant）、本地仪表盘（Home Assistant内置的能源仪表盘，而非厂商云端应用），以及将负荷转移到低价或太阳能高产时段的本地自动化。** 这三者都不需要将使用数据发送到你的网络之外。',
    quickAnswerTop: {
      zh: {
        question: '如何在不使用云端仪表盘的情况下本地管理智能家居能源？',
        answer:
          '将Home Assistant内置的能源仪表盘作为唯一的数据来源。用本地上报设备为其提供数据——主电源上的CT钳表、各家电上的能源监测智能插座，以及如果有的话，本地太阳能/电池集成。直接在Home Assistant中构建自动化，把高耗电家电（电动车充电、热水、洗衣）转移到低成本或太阳能高产时段。这些数据都不需要到达厂商的云端服务。',
        bullets: [
          '中枢：Home Assistant内置的能源仪表盘',
          '监测：主电源上的CT钳表 + 每台家电的能源监测智能插座',
          '自动化：将负荷转移到低价电价或太阳能高产时段，所有逻辑均在本地运行',
          '应避免：仅通过自家仪表盘展示用电数据的厂商云端应用',
          '后续步骤：逆变器/热泵集成，然后是仪表盘设置指南',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '为什么要本地能源管理', anchor: 'why-local' },
      { label: '应监测什么', anchor: 'what-to-monitor' },
      { label: '负荷转移自动化', anchor: 'automations' },
      { label: '在整体架构中的位置', anchor: 'stack-fit' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '本地智能家居能源管理使用由本地智能插座和CT钳表供给数据的Home Assistant能源仪表盘，配合从不向云端服务发送使用数据的负荷转移自动化。' },
      { type: 'plain-terms', content: '与其在厂商的手机应用中查看太阳能或电池用量，同样的数据会流入你自己网络中的Home Assistant。一个小型钳形传感器读取主电源，智能插座读取各个家电。Home Assistant随后利用这些数据决定何时运行家电——例如仅在太阳能输出高时才为电动车充电。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '将Home Assistant内置的能源仪表盘作为太阳能、电池和家电用电的唯一本地中枢',
          '用主电源上的CT钳表和各家电上的能源监测智能插座为其供数',
          '直接在Home Assistant中构建负荷转移自动化（电动车充电、热水、洗衣）——无需云端往返',
          '云端能源应用会将逐设备的详细用电模式暴露给厂商；本地监测则将这些数据留在你的网络中',
          '这是概览文章——具体细节请参见仪表盘设置指南、Matter逆变器/热泵集成指南，以及微电网/电池备用指南',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '为什么要本地管理能源',
        content:
          '**云端能源监测应用会把你逐设备的用电模式——何时洗衣、多久为电动车充一次电、你的日常作息——发送到厂商的服务器。** 本地方案将同样的数据留在你自己的网络中，同时依然提供自动化和历史记录追踪。',
        items: [
          '详细的能源数据会暴露在家模式和日常作息——与云端摄像头或语音助手会暴露的信息相同，只不过是从用电量推断出来的。',
          '许多厂商能源应用即使只是查看本地用量也需要账户和网络连接，一旦厂商停止该应用或更改条款，就可能无法使用。',
          '本地方案在网络中断期间仍能持续工作——节省费用的负荷转移自动化并不依赖云端服务是否可达。',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: '应监测什么',
        content:
          '**先通过主电源上的CT钳表监测全屋用电，再为对自动化有意义的家电添加智能插座——并非所有设备都需要单独的传感器。**',
        items: [
          '主电源上的CT（电流互感器）钳表可在不触碰单个回路的情况下提供全屋功率数据——这是能源仪表盘所需的基础。',
          '为高耗电或可调度的家电添加能源监测智能插座：电动车充电器、热水器、洗衣机/烘干机、洗碗机。这些是值得围绕其进行自动化的设备。',
          '如果你有太阳能和/或电池，它们各自的本地集成（参见Matter逆变器/热泵集成指南）会将发电量和电量状态输入同一仪表盘。',
          '不要单独监测低耗电的常开设备——它们只会增加仪表盘噪音，却没有可供自动化的价值。',
        ],
      },
      automations: {
        id: 'automations',
        title: '负荷转移自动化',
        content:
          '**本地能源监测的回报在于能将高耗电家电转移到最便宜或最环保时段的自动化，且完全运行在你自己的中枢上。**',
        items: [
          '分时电价转移：利用Home Assistant的调度功能和电力公司公布的时段，在非高峰电价时段运行洗碗机、洗衣机和电动车充电器。',
          '追踪太阳能的自动化：仅在本地太阳能发电量（来自你的逆变器集成）超过阈值时才启动高耗电家电，以最大化自用发电、减少电网取电。',
          '感知电池的自动化：如果你有家庭储能电池，优先在傍晚高峰电价时段使用电池放电，而不是从电网取电。',
          '这一切都以标准的Home Assistant自动化形式运行——执行逻辑无需任何云端服务可达。',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: '在整体架构中的位置',
        content:
          '**本文是概览；接下来三篇文章覆盖具体内容——基于Matter的逆变器/热泵集成、Home Assistant能源仪表盘本身的设置，以及全屋电池备用电源。**',
        items: [
          '若要将太阳能逆变器或热泵作为本地Matter控制设备接入，而非通过厂商云端应用，请参见Matter太阳能逆变器＋热泵集成指南。',
          '关于实际的仪表盘配置——添加传感器、设置成本追踪、读取图表——请参见Home Assistant能源仪表盘设置指南。',
          '关于将家庭电池用作断电期间的备用电源，请参见家庭能源微电网指南。',
          '如果你还没有太阳能硬件，可先参考阳台光伏专题，了解小规模本地方案的样子，再规划全屋能源管理。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '本地能源管理值得投入是否需要太阳能板？', a: '不需要。即使完全没有太阳能发电，一个CT钳表加几个能源监测智能插座也能实现负荷转移自动化（分时电价、避开高峰时段）。太阳能与电池集成会增加更多自动化选项，但并非入门必需。' },
          { q: 'Home Assistant的能源仪表盘入门需要什么？', a: '至少需要一个电网用电传感器——通常是主电源上的CT钳表，或者如果你的电力公司支持，也可以是智能电表集成。其余（各设备插座、太阳能、电池）都是可选叠加项。' },
          { q: '这能替代我电力公司自己的能源应用吗？', a: '在用电追踪和自动化方面可以。部分电力公司在计费或电价切换上仍需要其自有应用，但一旦配置完成，日常监测和自动化完全可以通过Home Assistant实现。' },
          { q: 'CT钳表安装difficult吗？', a: '大多数钳式CT传感器可以在不剪断电线的情况下夹在配电箱内已有的电缆上，但在配电箱内操作意味着要先断电并按照传感器的安装说明进行。如果你对在配电箱内操作不放心，请让持证电工完成这一步。' },
          { q: '我能围绕浮动电价进行自动化吗？', a: '可以——如果你的电力公司公布了时段电价（或者你可以手动输入），Home Assistant的自动化可以使用与其他自动化相同的调度工具，把高耗电家电安排在最便宜的时段。' },
          { q: '这与智能温控器内置的能源报告有何不同？', a: '温控器自带的应用只报告自身情况，通常还需要其云端服务。能源仪表盘会将每一个被监测的设备——温控器、电动车充电器、家电、太阳能、电池——汇总到一个本地视图中，让自动化能够统一作用于所有设备。' },
          { q: '智能插座需要能本地控制才能配合使用吗？', a: '对于本文所述的监测和自动化，插座需要把数据上报给Home Assistant，理想情况下通过本地集成（Zigbee、Z-Wave，或本地轮询的Wi-Fi集成），而不仅仅通过厂商的云端API，这样自动化在离线时也能继续工作。' },
          { q: '如果我只有几个智能插座、没有太阳能怎么办？', a: '就从这里开始。在耗电量最大的几台家电上安装能源监测插座并接入能源仪表盘，就已经能实现分时电价的负荷转移——太阳能和电池集成是以后可以再添加的部分，无需从头再来。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[Home Assistant能源仪表盘：完整设置指南](/zh/smart-home/home-assistant-energy-dashboard-guide) — 具体操作方法',
          '[太阳能逆变器与热泵的Matter集成](/zh/smart-home/matter-solar-inverter-heat-pump-integration) — 在本地连接发电硬件',
          '[将你的家变成能源微电网](/zh/smart-home/home-as-energy-microgrid-2027) — 电池备用电源与断电独立性',
          '[本地智能家居＋本地AI的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 承载这一切的中枢硬件',
          '[什么是阳台光伏？](/zh/balcony-solar/what-is-balcony-solar) — 跨专题：小规模本地太阳能基础',
          '[将阳台光伏无云端连接到Home Assistant](/zh/balcony-solar/connect-balcony-solar-home-assistant-local) — 跨专题：本地阳台光伏集成',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地智能家居能源管理（2027年）',
      description: '2027年本地智能家居能源管理：通过Home Assistant的能源仪表盘运行太阳能、电池和家电监测，使用数据不发送到云端。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant能源仪表盘' }, { '@type': 'Thing', name: '本地能源监测' }, { '@type': 'Thing', name: '负荷转移自动化' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '本地能源管理值得投入是否需要太阳能板？', acceptedAnswer: { '@type': 'Answer', text: '不需要。一个CT钳表加几个能源监测智能插座即可实现负荷转移自动化，即使完全没有太阳能发电。' } },
        { '@type': 'Question', name: 'Home Assistant的能源仪表盘入门需要什么？', acceptedAnswer: { '@type': 'Answer', text: '至少需要一个电网用电传感器——通常是主电源上的CT钳表，或智能电表集成。' } },
        { '@type': 'Question', name: '这能替代我电力公司自己的能源应用吗？', acceptedAnswer: { '@type': 'Answer', text: '在用电追踪和自动化方面可以，即使部分电力公司在计费上仍需要其自有应用。' } },
        { '@type': 'Question', name: 'CT钳表安装difficult吗？', acceptedAnswer: { '@type': 'Answer', text: '大多数可在不剪断电线的情况下夹在配电箱内已有电缆上，但需要断电操作——如不放心请找持证电工。' } },
        { '@type': 'Question', name: '我能围绕浮动电价进行自动化吗？', acceptedAnswer: { '@type': 'Answer', text: '可以——如果电力公司公布了时段电价，Home Assistant的自动化可以把高耗电家电安排在最便宜的时段。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Gestión local de energía en el hogar inteligente (2027)',
    seoTitle: 'Gestión local de energía en el hogar (2027)',
    intro:
      'La gestión local de energía en el hogar inteligente consiste en registrar y automatizar el uso de solar, batería y electrodomésticos completamente en tu propio hardware, con el panel de Energía de Home Assistant como centro — ningún dato de uso sale de tu red. Esta guía explica por qué las apps de energía en la nube exponen patrones de uso detallados, cómo una configuración local las reemplaza dispositivo por dispositivo, y adónde ir después para la integración de inversor/bomba de calor, la configuración del propio panel, y la copia de respaldo de batería para toda la casa.',
    metaDescription:
      'Gestión local de energía en el hogar inteligente en 2027: monitorea solar, batería y electrodomésticos mediante el panel de Energía de Home Assistant, sin enviar datos a la nube.',
    twitterDescription:
      'Gestión local de energía para hogares inteligentes: panel de Energía de Home Assistant, enchufes inteligentes locales y automatizaciones de desplazamiento de carga — sin seguimiento en la nube.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de hogar inteligente con solar, batería o varios electrodomésticos monitorizados que quieren mantener sus datos de energía locales',
    primaryTerm: 'gestion local energia hogar inteligente',
    targetKeywords: [
      'gestion energia hogar inteligente local',
      'monitoreo energia local home assistant',
      'home assistant energia sin nube',
      'automatizacion desplazamiento carga local',
      'panel energia privado hogar',
    ],
    leadAnswerBlock:
      '**La gestión local de energía en el hogar inteligente funciona en tres capas: monitoreo local (enchufes inteligentes y pinzas amperométricas que reportan directamente a Home Assistant), un panel local (el panel de Energía integrado de Home Assistant, no una app en la nube del fabricante), y automatizaciones locales que desplazan la carga a horas baratas o de alta generación solar.** Ninguna de las tres requiere enviar datos de uso fuera de tu red.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo gestiono la energía de mi hogar inteligente localmente, sin un panel en la nube?',
        answer:
          'Usa el panel de Energía integrado de Home Assistant como única fuente de verdad. Aliméntalo con dispositivos de reporte local — una pinza amperométrica en la acometida principal, enchufes inteligentes que miden energía en electrodomésticos individuales, y una integración solar/batería local si la tienes. Construye automatizaciones directamente en Home Assistant que desplacen electrodomésticos de alto consumo (carga de VE, calentamiento de agua, lavado) a horas de bajo costo o alta generación solar. Ninguno de estos datos necesita llegar al servicio en la nube de un fabricante.',
        bullets: [
          'Centro: el panel de Energía integrado de Home Assistant',
          'Monitoreo: una pinza amperométrica en la acometida principal + enchufes inteligentes que miden energía por electrodoméstico',
          'Automatización: desplazar la carga a horas de tarifa baja o alta generación solar, toda la lógica corre localmente',
          'Evitar: apps en la nube de fabricantes que solo muestran datos de uso a través de su propio panel',
          'Próximos pasos: integración de inversor/bomba de calor, luego la guía de configuración del panel',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Por qué gestionar la energía localmente', anchor: 'why-local' },
      { label: 'Qué monitorear', anchor: 'what-to-monitor' },
      { label: 'Automatizaciones de desplazamiento de carga', anchor: 'automations' },
      { label: 'Dónde encaja esto en la pila', anchor: 'stack-fit' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'La gestión local de energía en el hogar inteligente usa el panel de Energía de Home Assistant alimentado por enchufes inteligentes locales y una pinza amperométrica, con automatizaciones de desplazamiento de carga que nunca envían datos de uso a un servicio en la nube.' },
      { type: 'plain-terms', content: 'En lugar de revisar tu uso solar o de batería en la app del teléfono de un fabricante, los mismos datos fluyen hacia Home Assistant en tu propia red. Un pequeño sensor de pinza lee tu acometida principal, y los enchufes inteligentes leen electrodomésticos individuales. Home Assistant usa entonces esos datos para decidir cuándo hacer funcionar los electrodomésticos — por ejemplo, cargar un VE solo cuando la producción solar es alta.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Usa el panel de Energía integrado de Home Assistant como único centro local para el uso de solar, batería y electrodomésticos',
          'Aliméntalo con una pinza amperométrica en la acometida principal y enchufes inteligentes que miden energía en electrodomésticos individuales',
          'Construye automatizaciones de desplazamiento de carga (carga de VE, calentamiento de agua, lavado) directamente en Home Assistant — sin ida y vuelta a la nube',
          'Las apps de energía en la nube exponen patrones de uso detallados por dispositivo al fabricante; el monitoreo local mantiene esos datos en tu red',
          'Este es el artículo de resumen — consulta la guía de configuración del panel, la guía de integración Matter de inversor/bomba de calor, y la guía de microrred/respaldo de batería para los detalles',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por qué gestionar la energía localmente',
        content:
          '**Una app en la nube de monitoreo energético envía tus patrones de uso por dispositivo — cuándo lavas la ropa, con qué frecuencia cargas un VE, tu rutina diaria — a los servidores del fabricante.** Una configuración local mantiene esos mismos datos en tu propia red y aun así obtiene automatización y seguimiento histórico.',
        items: [
          'Los datos energéticos detallados revelan patrones de ocupación y rutinas diarias — la misma información que expondría una cámara o asistente de voz en la nube, solo inferida a partir del consumo eléctrico.',
          'Muchas apps de energía de fabricantes requieren una cuenta y conectividad a internet incluso para ver el uso local, y pueden dejar de funcionar si el fabricante descontinúa la app o cambia sus términos.',
          'Una configuración local sigue funcionando durante un corte de internet — las automatizaciones de desplazamiento de carga que ahorran dinero no dependen de que un servicio en la nube sea alcanzable.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: 'Qué monitorear',
        content:
          '**Comienza con el uso de toda la casa mediante una pinza amperométrica en la acometida principal, luego añade enchufes inteligentes en los electrodomésticos que importan para la automatización — no todo necesita su propio sensor.**',
        items: [
          'Una pinza amperométrica (CT) en la acometida principal da la potencia de toda la casa sin tocar circuitos individuales — esta es la base que necesita el panel de Energía.',
          'Añade enchufes inteligentes que midan energía en electrodomésticos de alto consumo o programables: cargador de VE, calentador de agua, lavadora/secadora, lavavajillas. Estos son los que vale la pena automatizar.',
          'Si tienes solar y/o una batería, su propia integración local (ver la guía de integración de inversor/bomba de calor con Matter) alimenta generación y estado de carga al mismo panel.',
          'Evita monitorear individualmente dispositivos siempre encendidos de bajo consumo — solo añaden ruido al panel sin darte nada que automatizar.',
        ],
      },
      automations: {
        id: 'automations',
        title: 'Automatizaciones de desplazamiento de carga',
        content:
          '**El beneficio del monitoreo energético local son las automatizaciones que desplazan electrodomésticos de alto consumo a las horas más baratas o más verdes, funcionando completamente en tu propio centro.**',
        items: [
          'Desplazamiento por tarifa horaria: haz funcionar el lavavajillas, la lavadora y el cargador de VE durante horas de tarifa baja, usando la programación de Home Assistant y las franjas tarifarias publicadas por tu compañía eléctrica.',
          'Automatizaciones que siguen al solar: inicia electrodomésticos de alto consumo solo cuando la generación solar local (alimentada desde tu integración de inversor) supere un umbral, maximizando el autoconsumo frente al consumo de red.',
          'Automatizaciones conscientes de la batería: prioriza la descarga de la batería en las horas pico de la tarde si tienes almacenamiento doméstico, en lugar de tomar de la red.',
          'Todo esto corre como automatizaciones estándar de Home Assistant — ningún servicio en la nube necesita ser alcanzable para que la lógica se ejecute.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'Dónde encaja esto en la pila',
        content:
          '**Este artículo es el resumen; los siguientes tres cubren las piezas específicas — integración de inversor/bomba de calor basada en Matter, la propia configuración del panel de Energía de Home Assistant, y el respaldo de batería para toda la casa.**',
        items: [
          'Para conectar un inversor solar o una bomba de calor como dispositivo local controlado por Matter en lugar de a través de una app en la nube del fabricante, consulta la guía de integración Matter de inversor solar + bomba de calor.',
          'Para la configuración real del panel — añadir sensores, configurar el seguimiento de costos, leer los gráficos — consulta la guía de configuración del panel de Energía de Home Assistant.',
          'Para usar una batería doméstica como respaldo durante cortes, consulta la guía de microrred de energía doméstica.',
          'Si aún no tienes hardware solar, consulta el clúster de solar de balcón para ver cómo es una configuración local a pequeña escala antes de planificar la gestión energética de toda la casa.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito paneles solares para que la gestión local de energía valga la pena?', a: 'No. Una pinza amperométrica más unos pocos enchufes inteligentes que miden energía te dan automatizaciones de desplazamiento de carga (tarifas horarias, evitar horas pico) incluso sin ninguna generación solar. La integración solar y de batería añade más opciones de automatización pero no es necesaria para empezar.' },
          { q: '¿Qué necesita el panel de Energía de Home Assistant para empezar?', a: 'Como mínimo, un sensor de consumo de red — normalmente una pinza amperométrica en la acometida principal, o una integración de medidor inteligente si tu compañía eléctrica la admite. Todo lo demás (enchufes por electrodoméstico, solar, batería) es adicional.' },
          { q: '¿Esto reemplaza la app de energía de mi compañía eléctrica?', a: 'Puede hacerlo, para seguimiento de uso y automatización. Algunas compañías eléctricas todavía requieren su propia app para facturación o cambio de tarifa, pero el monitoreo y la automatización del día a día funcionan completamente a través de Home Assistant una vez configurados.' },
          { q: '¿Es difícil instalar una pinza amperométrica?', a: 'La mayoría de los sensores CT tipo pinza se enganchan alrededor de un cable existente dentro del panel eléctrico sin cortar cables, aunque trabajar dentro de un panel significa apagar la corriente primero y seguir las instrucciones de instalación del sensor. Si no te sientes cómodo dentro de un panel eléctrico, contrata a un electricista certificado para ese paso.' },
          { q: '¿Puedo automatizar en torno a una tarifa eléctrica variable?', a: 'Sí — si tu compañía eléctrica publica franjas horarias (o puedes ingresarlas manualmente), las automatizaciones de Home Assistant pueden programar electrodomésticos de alto consumo para las horas más baratas usando las mismas herramientas de programación que cualquier otra automatización.' },
          { q: '¿En qué se diferencia esto de los informes energéticos integrados de un termostato inteligente?', a: 'La app propia de un termostato solo reporta sobre sí mismo y generalmente requiere su servicio en la nube. El panel de Energía agrega cada dispositivo monitoreado — termostato, cargador de VE, electrodomésticos, solar, batería — en una vista local única y permite que las automatizaciones actúen sobre todos ellos en conjunto.' },
          { q: '¿Los enchufes inteligentes necesitan ser controlables localmente para que esto funcione?', a: 'Para el monitoreo y la automatización descritos aquí, el enchufe necesita reportar sus datos a Home Assistant, idealmente mediante una integración local (Zigbee, Z-Wave, o una integración Wi-Fi consultada localmente) en lugar de solo a través de la API en la nube del fabricante, para que la automatización siga funcionando sin conexión.' },
          { q: '¿Qué pasa si solo tengo unos pocos enchufes inteligentes y nada de solar?', a: 'Empieza por ahí. Unos cuantos enchufes que miden energía en tus electrodomésticos de mayor consumo, alimentando el panel de Energía, ya habilitan el desplazamiento de carga por tarifa horaria — la integración solar y de batería son adiciones que puedes hacer más tarde sin empezar de cero.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Panel de Energía de Home Assistant: guía completa de configuración](/es/smart-home/home-assistant-energy-dashboard-guide) — el paso a paso',
          '[Integración Matter para inversores solares y bombas de calor](/es/smart-home/matter-solar-inverter-heat-pump-integration) — conectar el hardware de generación localmente',
          '[Convertir tu hogar en una microrred de energía](/es/smart-home/home-as-energy-microgrid-2027) — respaldo de batería e independencia ante cortes',
          '[Mejor hardware para un hogar inteligente local + IA local](/es/smart-home/best-hardware-for-local-smart-home) — el hardware de hub sobre el que corre esto',
          '[¿Qué es el solar de balcón?](/es/balcony-solar/what-is-balcony-solar) — entre clústers: fundamentos del solar local a pequeña escala',
          '[Conectar el solar de balcón a Home Assistant, sin nube](/es/balcony-solar/connect-balcony-solar-home-assistant-local) — entre clústers: integración local de solar de balcón',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Gestión local de energía en el hogar inteligente (2027)',
      description: 'Gestión local de energía en el hogar inteligente en 2027: monitorea solar, batería y electrodomésticos mediante el panel de Energía de Home Assistant, sin enviar datos a la nube.',
      url: 'https://www.promptquorum.com/es/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Panel de Energía de Home Assistant' }, { '@type': 'Thing', name: 'Monitoreo energético local' }, { '@type': 'Thing', name: 'Automatización de desplazamiento de carga' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito paneles solares para que la gestión local de energía valga la pena?', acceptedAnswer: { '@type': 'Answer', text: 'No. Una pinza amperométrica más unos pocos enchufes inteligentes que miden energía dan automatizaciones de desplazamiento de carga incluso sin generación solar.' } },
        { '@type': 'Question', name: '¿Qué necesita el panel de Energía de Home Assistant para empezar?', acceptedAnswer: { '@type': 'Answer', text: 'Como mínimo, un sensor de consumo de red — normalmente una pinza amperométrica en la acometida principal.' } },
        { '@type': 'Question', name: '¿Esto reemplaza la app de energía de mi compañía eléctrica?', acceptedAnswer: { '@type': 'Answer', text: 'Puede hacerlo para seguimiento de uso y automatización, aunque algunas compañías siguen exigiendo su propia app para facturación.' } },
        { '@type': 'Question', name: '¿Es difícil instalar una pinza amperométrica?', acceptedAnswer: { '@type': 'Answer', text: 'La mayoría se enganchan alrededor de un cable existente, pero implica trabajar con la corriente apagada — contrata a un electricista certificado si no te sientes cómodo.' } },
        { '@type': 'Question', name: '¿Puedo automatizar en torno a una tarifa eléctrica variable?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — si tu compañía eléctrica publica franjas horarias, las automatizaciones de Home Assistant pueden programar electrodomésticos de alto consumo para las horas más baratas.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Gestão local de energia na casa inteligente (2027)',
    seoTitle: 'Gestão local de energia na casa (2027)',
    intro:
      'Gestão local de energia na casa inteligente significa rastrear e automatizar o uso de solar, bateria e eletrodomésticos inteiramente no seu próprio hardware, com o painel de Energia do Home Assistant como centro — nenhum dado de uso sai da sua rede. Este guia explica por que apps de energia na nuvem expõem padrões de uso detalhados, como uma configuração local os substitui dispositivo por dispositivo, e para onde ir a seguir para a integração de inversor/bomba de calor, a configuração do próprio painel, e o backup de bateria para a casa toda.',
    metaDescription:
      'Gestão local de energia na casa inteligente em 2027: monitore solar, bateria e eletrodomésticos pelo painel de Energia do Home Assistant, sem enviar dados de uso à nuvem.',
    twitterDescription:
      'Gestão local de energia para casas inteligentes: painel de Energia do Home Assistant, tomadas inteligentes locais e automações de deslocamento de carga — sem rastreamento na nuvem.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa inteligente com solar, bateria ou vários eletrodomésticos monitorados que querem manter os dados de energia locais',
    primaryTerm: 'gestao local energia casa inteligente',
    targetKeywords: [
      'gestao energia casa inteligente local',
      'monitoramento energia local home assistant',
      'home assistant energia sem nuvem',
      'automacao deslocamento carga local',
      'painel energia privado casa',
    ],
    leadAnswerBlock:
      '**A gestão local de energia na casa inteligente roda em três camadas: monitoramento local (tomadas inteligentes e alicates amperímetros reportando direto ao Home Assistant), um painel local (o painel de Energia embutido do Home Assistant, não um app na nuvem do fabricante), e automações locais que deslocam a carga para horários baratos ou de alta geração solar.** Nenhuma das três exige enviar dados de uso para fora da sua rede.',
    quickAnswerTop: {
      pt: {
        question: 'Como gerencio a energia da minha casa inteligente localmente, sem painel na nuvem?',
        answer:
          'Use o painel de Energia embutido do Home Assistant como única fonte de verdade. Alimente-o com dispositivos de reporte local — um alicate amperímetro na entrada principal, tomadas inteligentes que medem energia em eletrodomésticos individuais, e uma integração solar/bateria local, se tiver uma. Construa automações diretamente no Home Assistant que deslocam eletrodomésticos de alto consumo (carregamento de VE, aquecimento de água, lavagem) para horários de baixo custo ou alta geração solar. Nenhum desses dados precisa chegar ao serviço na nuvem de um fabricante.',
        bullets: [
          'Centro: o painel de Energia embutido do Home Assistant',
          'Monitoramento: um alicate amperímetro na entrada principal + tomadas inteligentes medindo energia por eletrodoméstico',
          'Automação: deslocar a carga para horários de tarifa baixa ou alta geração solar, toda a lógica roda localmente',
          'Evitar: apps na nuvem de fabricantes que só mostram dados de uso pelo próprio painel',
          'Próximos passos: integração de inversor/bomba de calor, depois o guia de configuração do painel',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Por que gerenciar energia localmente', anchor: 'why-local' },
      { label: 'O que monitorar', anchor: 'what-to-monitor' },
      { label: 'Automações de deslocamento de carga', anchor: 'automations' },
      { label: 'Onde isso se encaixa na pilha', anchor: 'stack-fit' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A gestão local de energia na casa inteligente usa o painel de Energia do Home Assistant alimentado por tomadas inteligentes locais e um alicate amperímetro, com automações de deslocamento de carga que nunca enviam dados de uso a um serviço na nuvem.' },
      { type: 'plain-terms', content: 'Em vez de checar o uso de solar ou bateria no app do celular de um fabricante, os mesmos dados fluem para o Home Assistant na sua própria rede. Um pequeno sensor de alicate lê sua entrada principal, e tomadas inteligentes leem eletrodomésticos individuais. O Home Assistant então usa esses dados para decidir quando ligar eletrodomésticos — por exemplo, carregando um VE só quando a geração solar está alta.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Use o painel de Energia embutido do Home Assistant como único centro local para uso de solar, bateria e eletrodomésticos',
          'Alimente-o com um alicate amperímetro na entrada principal e tomadas inteligentes medindo energia em eletrodomésticos individuais',
          'Construa automações de deslocamento de carga (carregamento de VE, aquecimento de água, lavagem) direto no Home Assistant — sem ida e volta à nuvem',
          'Apps de energia na nuvem expõem padrões de uso detalhados por dispositivo ao fabricante; o monitoramento local mantém esses dados na sua rede',
          'Este é o artigo de visão geral — veja o guia de configuração do painel, o guia de integração Matter de inversor/bomba de calor, e o guia de microrrede/backup de bateria para os detalhes',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por que gerenciar energia localmente',
        content:
          '**Um app de monitoramento energético na nuvem envia seus padrões de uso por dispositivo — quando você lava roupa, com que frequência carrega um VE, sua rotina diária — para os servidores do fabricante.** Uma configuração local mantém esses mesmos dados na sua própria rede e ainda oferece automação e histórico.',
        items: [
          'Dados energéticos detalhados revelam padrões de ocupação e rotinas diárias — a mesma informação que uma câmera ou assistente de voz na nuvem exporia, só que inferida a partir do consumo de energia.',
          'Muitos apps de energia de fabricantes exigem conta e conexão à internet só para ver o uso local, e podem parar de funcionar se o fabricante descontinuar o app ou mudar os termos.',
          'Uma configuração local continua funcionando durante uma queda de internet — as automações de deslocamento de carga que economizam dinheiro não dependem de um serviço na nuvem estar acessível.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: 'O que monitorar',
        content:
          '**Comece com o uso da casa toda via um alicate amperímetro na entrada principal, depois adicione tomadas inteligentes nos eletrodomésticos que importam para automação — nem tudo precisa do próprio sensor.**',
        items: [
          'Um alicate amperímetro (CT) na entrada principal dá a potência da casa toda sem tocar em circuitos individuais — essa é a base que o painel de Energia precisa.',
          'Adicione tomadas inteligentes medindo energia em eletrodomésticos de alto consumo ou programáveis: carregador de VE, aquecedor de água, lavadora/secadora, lava-louças. Esses valem a pena automatizar.',
          'Se você tem solar e/ou bateria, a integração local própria deles (veja o guia de integração Matter de inversor/bomba de calor) alimenta geração e estado de carga no mesmo painel.',
          'Evite monitorar individualmente dispositivos sempre ligados de baixo consumo — eles só adicionam ruído ao painel sem dar nada para automatizar.',
        ],
      },
      automations: {
        id: 'automations',
        title: 'Automações de deslocamento de carga',
        content:
          '**O retorno do monitoramento energético local são automações que deslocam eletrodomésticos de alto consumo para os horários mais baratos ou mais verdes, rodando inteiramente no seu próprio hub.**',
        items: [
          'Deslocamento por tarifa horária: rode a lava-louças, a lavadora e o carregador de VE durante horários de tarifa baixa, usando o agendamento do Home Assistant e as janelas de tarifa publicadas pela sua concessionária.',
          'Automações que seguem o solar: só ligue eletrodomésticos de alto consumo quando a geração solar local (vinda da sua integração de inversor) ultrapassar um limite, maximizando o autoconsumo em vez do consumo da rede.',
          'Automações conscientes da bateria: priorize a descarga da bateria nos horários de pico da noite se você tiver armazenamento doméstico, em vez de puxar da rede.',
          'Tudo isso roda como automações padrão do Home Assistant — nenhum serviço na nuvem precisa estar acessível para a lógica ser executada.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'Onde isso se encaixa na pilha',
        content:
          '**Este artigo é a visão geral; os próximos três cobrem as peças específicas — integração de inversor/bomba de calor baseada em Matter, a própria configuração do painel de Energia do Home Assistant, e o backup de bateria para a casa toda.**',
        items: [
          'Para conectar um inversor solar ou bomba de calor como dispositivo local controlado por Matter em vez de por um app na nuvem do fabricante, veja o guia de integração Matter de inversor solar + bomba de calor.',
          'Para a configuração real do painel — adicionar sensores, configurar rastreamento de custo, ler os gráficos — veja o guia de configuração do painel de Energia do Home Assistant.',
          'Para usar uma bateria doméstica como backup durante quedas, veja o guia de microrrede de energia doméstica.',
          'Se você ainda não tem hardware solar, veja o cluster de energia solar de varanda para ver como é uma configuração local em pequena escala antes de planejar a gestão energética da casa toda.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de painéis solares para a gestão local de energia valer a pena?', a: 'Não. Um alicate amperímetro mais algumas tomadas inteligentes medindo energia já dão automações de deslocamento de carga (tarifas horárias, evitar horários de pico) mesmo sem nenhuma geração solar. A integração solar e de bateria adiciona mais opções de automação, mas não é necessária para começar.' },
          { q: 'O que o painel de Energia do Home Assistant precisa para começar?', a: 'No mínimo, um sensor de consumo da rede — geralmente um alicate amperímetro na entrada principal, ou uma integração de medidor inteligente se sua concessionária suportar. Todo o resto (tomadas por eletrodoméstico, solar, bateria) é adicional.' },
          { q: 'Isso substitui o app de energia da minha concessionária?', a: 'Pode, para rastreamento de uso e automação. Algumas concessionárias ainda exigem o próprio app para faturamento ou troca de tarifa, mas o monitoramento e a automação do dia a dia funcionam inteiramente pelo Home Assistant assim que configurado.' },
          { q: 'É difícil instalar um alicate amperímetro?', a: 'A maioria dos sensores CT tipo alicate se encaixa em um cabo existente dentro do quadro de disjuntores sem cortar fios, embora trabalhar dentro de um quadro signifique desligar a energia primeiro e seguir as instruções de instalação do sensor. Se você não se sentir confortável dentro de um quadro de disjuntores, contrate um eletricista licenciado para essa etapa.' },
          { q: 'Posso automatizar em torno de uma tarifa elétrica variável?', a: 'Sim — se sua concessionária publica janelas de tarifa (ou você pode inseri-las manualmente), automações do Home Assistant podem agendar eletrodomésticos de alto consumo para os horários mais baratos usando as mesmas ferramentas de agendamento de qualquer outra automação.' },
          { q: 'Como isso difere dos relatórios de energia embutidos de um termostato inteligente?', a: 'O app próprio de um termostato só reporta sobre si mesmo e geralmente exige seu serviço na nuvem. O painel de Energia agrega cada dispositivo monitorado — termostato, carregador de VE, eletrodomésticos, solar, bateria — em uma visão local única e permite que automações atuem sobre todos eles juntos.' },
          { q: 'As tomadas inteligentes precisam ser controláveis localmente para funcionar com isso?', a: 'Para o monitoramento e a automação descritos aqui, a tomada precisa reportar seus dados ao Home Assistant, idealmente por uma integração local (Zigbee, Z-Wave, ou uma integração Wi-Fi consultada localmente) em vez de só pela API na nuvem do fabricante, para que a automação continue funcionando offline.' },
          { q: 'E se eu tiver só algumas tomadas inteligentes e nenhum solar?', a: 'Comece por aí. Algumas tomadas medindo energia nos seus eletrodomésticos de maior consumo, alimentando o painel de Energia, já habilitam o deslocamento de carga por tarifa horária — a integração solar e de bateria são adições que você pode fazer depois sem recomeçar do zero.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Painel de Energia do Home Assistant: guia completo de configuração](/pt/smart-home/home-assistant-energy-dashboard-guide) — o passo a passo',
          '[Integração Matter para inversores solares e bombas de calor](/pt/smart-home/matter-solar-inverter-heat-pump-integration) — conectando o hardware de geração localmente',
          '[Transformando sua casa em uma microrrede de energia](/pt/smart-home/home-as-energy-microgrid-2027) — backup de bateria e independência em quedas',
          '[Melhor hardware para uma casa inteligente local + IA local](/pt/smart-home/best-hardware-for-local-smart-home) — o hardware de hub sobre o qual isso roda',
          '[O que é energia solar de varanda?](/pt/balcony-solar/what-is-balcony-solar) — entre clusters: fundamentos do solar local em pequena escala',
          '[Conectar energia solar de varanda ao Home Assistant, sem nuvem](/pt/balcony-solar/connect-balcony-solar-home-assistant-local) — entre clusters: integração local de solar de varanda',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Gestão local de energia na casa inteligente (2027)',
      description: 'Gestão local de energia na casa inteligente em 2027: monitore solar, bateria e eletrodomésticos pelo painel de Energia do Home Assistant, sem enviar dados de uso à nuvem.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Painel de Energia do Home Assistant' }, { '@type': 'Thing', name: 'Monitoramento energético local' }, { '@type': 'Thing', name: 'Automação de deslocamento de carga' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de painéis solares para a gestão local de energia valer a pena?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Um alicate amperímetro mais algumas tomadas inteligentes medindo energia dão automações de deslocamento de carga mesmo sem geração solar.' } },
        { '@type': 'Question', name: 'O que o painel de Energia do Home Assistant precisa para começar?', acceptedAnswer: { '@type': 'Answer', text: 'No mínimo, um sensor de consumo da rede — geralmente um alicate amperímetro na entrada principal.' } },
        { '@type': 'Question', name: 'Isso substitui o app de energia da minha concessionária?', acceptedAnswer: { '@type': 'Answer', text: 'Pode, para rastreamento de uso e automação, embora algumas concessionárias ainda exijam o próprio app para faturamento.' } },
        { '@type': 'Question', name: 'É difícil instalar um alicate amperímetro?', acceptedAnswer: { '@type': 'Answer', text: 'A maioria se encaixa em um cabo existente, mas exige trabalhar com a energia desligada — contrate um eletricista licenciado se não se sentir confortável.' } },
        { '@type': 'Question', name: 'Posso automatizar em torno de uma tarifa elétrica variável?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — se sua concessionária publica janelas de tarifa, automações do Home Assistant podem agendar eletrodomésticos de alto consumo para os horários mais baratos.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'إدارة الطاقة المحلية في المنزل الذكي (⁨2027⁩)',
    seoTitle: 'إدارة الطاقة المحلية في المنزل الذكي (⁨2027⁩)',
    intro:
      'تعني إدارة الطاقة المحلية في المنزل الذكي تتبع وأتمتة استخدام الطاقة الشمسية والبطارية والأجهزة بالكامل على جهازك الخاص، مع لوحة Energy في Home Assistant كمركز — لا تغادر بيانات الاستخدام شبكتك. يوضّح هذا الدليل لماذا تكشف تطبيقات الطاقة السحابية أنماط استخدام تفصيلية، وكيف يستبدلها إعداد محلي جهازًا بجهاز، وإلى أين تذهب بعد ذلك لدمج العاكس/مضخة الحرارة، وإعداد اللوحة نفسها، والنسخ الاحتياطي للبطارية للمنزل بالكامل.',
    metaDescription:
      'إدارة الطاقة المحلية في المنزل الذكي 2027: شغّل مراقبة الطاقة الشمسية والبطارية والأجهزة عبر لوحة Energy في Home Assistant، دون إرسال بيانات الاستخدام إلى السحابة.',
    twitterDescription:
      'إدارة الطاقة المحلية للمنازل الذكية: لوحة Energy في Home Assistant، مقابس ذكية محلية، وأتمتة تحويل الحمل — دون تتبع سحابي.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب المنازل الذكية الذين لديهم طاقة شمسية أو بطارية أو عدة أجهزة مراقَبة ويريدون إبقاء بيانات الطاقة محلية',
    primaryTerm: 'local smart home energy management',
    targetKeywords: [
      'إدارة طاقة المنزل الذكي محليًا',
      'مراقبة طاقة محلية home assistant',
      'home assistant طاقة بدون سحابة',
      'أتمتة تحويل الحمل محليًا',
      'لوحة طاقة منزلية خاصة',
    ],
    leadAnswerBlock:
      '**تعمل إدارة الطاقة المحلية في المنزل الذكي على ثلاث طبقات: المراقبة المحلية (مقابس ذكية ومشابك تيار CT ترفع تقاريرها مباشرة إلى Home Assistant)، ولوحة محلية (لوحة Energy المدمجة في Home Assistant، وليس تطبيق سحابي من الشركة المصنّعة)، وأتمتة محلية تحوّل الحمل إلى ساعات رخيصة أو ساعات إنتاج شمسي عالٍ.** لا يتطلب أي من الثلاثة إرسال بيانات الاستخدام خارج شبكتك.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أدير طاقة منزلي الذكي محليًا، دون لوحة سحابية؟',
        answer:
          'استخدم لوحة Energy المدمجة في Home Assistant كمصدر وحيد للحقيقة. غذّها من أجهزة ترفع تقاريرها محليًا — مشبك تيار على التغذية الرئيسية، ومقابس ذكية تقيس الطاقة على الأجهزة الفردية، ودمج شمسي/بطارية محلي إن وُجد. ابنِ أتمتة مباشرة داخل Home Assistant تحوّل الأجهزة عالية الاستهلاك (شحن السيارة الكهربائية، تسخين الماء، الغسيل) إلى ساعات منخفضة التكلفة أو عالية الإنتاج الشمسي. لا تحتاج أي من هذه البيانات للوصول إلى خدمة سحابية تابعة لشركة مصنّعة.',
        bullets: [
          'المركز: لوحة Energy المدمجة في Home Assistant',
          'المراقبة: مشبك تيار على التغذية الرئيسية + مقابس ذكية تقيس الطاقة لكل جهاز',
          'الأتمتة: تحويل الحمل إلى ساعات تعرفة رخيصة أو إنتاج شمسي عالٍ، وتعمل كل المنطق محليًا',
          'تجنّب: تطبيقات السحابة من الشركات المصنّعة التي تعرض بيانات الاستخدام فقط عبر لوحتها الخاصة',
          'الخطوات التالية: دمج العاكس/مضخة الحرارة، ثم دليل إعداد اللوحة',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'لماذا إدارة الطاقة محليًا', anchor: 'why-local' },
      { label: 'ما الذي يجب مراقبته', anchor: 'what-to-monitor' },
      { label: 'أتمتة تحويل الحمل', anchor: 'automations' },
      { label: 'أين يقع هذا في المجموعة', anchor: 'stack-fit' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تستخدم إدارة الطاقة المحلية في المنزل الذكي لوحة Energy في Home Assistant المغذّاة من مقابس ذكية محلية ومشبك تيار، مع أتمتة تحويل حمل لا ترسل بيانات الاستخدام أبدًا إلى خدمة سحابية.' },
      { type: 'plain-terms', content: 'بدلًا من التحقق من استخدام الطاقة الشمسية أو البطارية في تطبيق هاتف الشركة المصنّعة، تتدفق نفس البيانات إلى Home Assistant داخل شبكتك الخاصة. يقرأ مستشعر مشبك صغير تغذيتك الرئيسية، وتقرأ المقابس الذكية الأجهزة الفردية. يستخدم Home Assistant بعد ذلك تلك البيانات لتقرير متى يشغّل الأجهزة — على سبيل المثال، شحن سيارة كهربائية فقط عندما يكون الإنتاج الشمسي مرتفعًا.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'استخدم لوحة Energy المدمجة في Home Assistant كمركز محلي وحيد لاستخدام الطاقة الشمسية والبطارية والأجهزة',
          'غذّها بمشبك تيار على التغذية الرئيسية ومقابس ذكية تقيس الطاقة على الأجهزة الفردية',
          'ابنِ أتمتة تحويل الحمل (شحن السيارة الكهربائية، تسخين الماء، الغسيل) مباشرة داخل Home Assistant — دون رحلة ذهاب وإياب إلى السحابة',
          'تكشف تطبيقات الطاقة السحابية أنماط استخدام تفصيلية لكل جهاز للشركة المصنّعة؛ تُبقي المراقبة المحلية تلك البيانات داخل شبكتك',
          'هذا مقال نظرة عامة — راجع دليل إعداد اللوحة، ودليل دمج العاكس/مضخة الحرارة بمعيار Matter، ودليل الشبكة الصغيرة/النسخ الاحتياطي للبطارية للتفاصيل',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'لماذا تُدار الطاقة محليًا',
        content:
          '**يرسل تطبيق مراقبة طاقة سحابي أنماط استخدامك لكل جهاز — متى تغسل الملابس، وكم مرة تشحن سيارة كهربائية، وروتينك اليومي — إلى خوادم الشركة المصنّعة.** يُبقي الإعداد المحلي نفس البيانات داخل شبكتك الخاصة مع الحصول على الأتمتة وتتبع السجل التاريخي أيضًا.',
        items: [
          'تكشف بيانات الطاقة التفصيلية أنماط الإشغال والروتين اليومي — نفس المعلومات التي قد تكشفها كاميرا سحابية أو مساعد صوتي، لكن يُستنتج هذه المرة من استهلاك الطاقة.',
          'تتطلب العديد من تطبيقات الطاقة من الشركات المصنّعة حسابًا واتصالًا بالإنترنت حتى لعرض الاستخدام المحلي، وقد تتوقف عن العمل إذا أوقفت الشركة المصنّعة التطبيق أو غيّرت شروطها.',
          'يستمر الإعداد المحلي في العمل أثناء انقطاع الإنترنت — لا تعتمد أتمتة تحويل الحمل الموفّرة للمال على إمكانية الوصول إلى خدمة سحابية.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: 'ما الذي يجب مراقبته',
        content:
          '**ابدأ باستخدام المنزل بالكامل عبر مشبك تيار على التغذية الرئيسية، ثم أضف مقابس ذكية على الأجهزة المهمة للأتمتة — ليس كل شيء يحتاج مستشعره الخاص.**',
        items: [
          'يوفّر مشبك تيار (CT) على التغذية الرئيسية استهلاك المنزل بالكامل بالواط دون لمس الدوائر الفردية — هذا هو الأساس الذي تحتاجه لوحة Energy.',
          'أضف مقابس ذكية تقيس الطاقة على الأجهزة عالية الاستهلاك أو القابلة للجدولة: شاحن السيارة الكهربائية، سخان الماء، الغسالة/المجفف، غسالة الأطباق. هذه هي التي تستحق الأتمتة حولها.',
          'إذا كانت لديك طاقة شمسية و/أو بطارية، فإن دمجها المحلي الخاص (راجع دليل دمج العاكس/مضخة الحرارة بمعيار Matter) يغذّي الإنتاج وحالة الشحن إلى نفس اللوحة.',
          'تجنّب مراقبة الأجهزة الدائمة التشغيل منخفضة الاستهلاك فرديًا — فهي تضيف ضوضاء إلى اللوحة دون أن تمنحك شيئًا للأتمتة.',
        ],
      },
      automations: {
        id: 'automations',
        title: 'أتمتة تحويل الحمل',
        content:
          '**العائد من المراقبة المحلية للطاقة هو أتمتة تحوّل الأجهزة عالية الاستهلاك إلى أرخص الساعات أو أكثرها اعتمادًا على الطاقة الخضراء، وتعمل بالكامل على مركزك الخاص.**',
        items: [
          'تحويل حسب تعرفة الاستخدام الزمني: شغّل غسالة الأطباق والغسالة وشاحن السيارة الكهربائية خلال ساعات التعرفة المنخفضة، باستخدام جدولة Home Assistant ونوافذ التعرفة التي تنشرها شركة المرافق.',
          'أتمتة تتبع الطاقة الشمسية: ابدأ تشغيل الأجهزة عالية الاستهلاك فقط عندما يتجاوز الإنتاج الشمسي المحلي (المغذّى من دمج العاكس) عتبة معيّنة، لتعظيم الاستهلاك الذاتي بدلًا من سحب الشبكة.',
          'أتمتة واعية بالبطارية: أعطِ الأولوية لتفريغ البطارية خلال ساعات الذروة المسائية إذا كان لديك تخزين بطارية منزلي، بدلًا من السحب من الشبكة.',
          'يعمل كل هذا كأتمتة قياسية في Home Assistant — لا تحتاج أي خدمة سحابية أن تكون قابلة للوصول لتنفيذ المنطق.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: 'أين يقع هذا في المجموعة',
        content:
          '**هذا المقال هو النظرة العامة؛ تغطي المقالات الثلاثة التالية الأجزاء المحدّدة — دمج العاكس/مضخة الحرارة المعتمد على Matter، وإعداد لوحة Energy في Home Assistant نفسها، والنسخ الاحتياطي للبطارية للمنزل بالكامل.**',
        items: [
          'لتوصيل عاكس شمسي أو مضخة حرارة كجهاز محلي يتحكم فيه Matter بدلًا من عبر تطبيق سحابي من الشركة المصنّعة، راجع دليل دمج العاكس الشمسي + مضخة الحرارة بمعيار Matter.',
          'لإعداد اللوحة الفعلي — إضافة المستشعرات، وضبط تتبع التكلفة، وقراءة الرسوم البيانية — راجع دليل إعداد لوحة Energy في Home Assistant.',
          'لاستخدام بطارية منزلية كنسخة احتياطية أثناء الانقطاعات، راجع دليل الشبكة الصغيرة للطاقة المنزلية.',
          'إذا لم يكن لديك بعد أجهزة طاقة شمسية، راجع مجموعة الطاقة الشمسية للشرفة لمعرفة شكل الإعداد المحلي الصغير قبل أن تخطط لإدارة طاقة المنزل بالكامل حوله.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج ألواحًا شمسية حتى تستحق إدارة الطاقة المحلية العناء؟', a: 'لا. يمنحك مشبك تيار مع بضعة مقابس ذكية تقيس الطاقة أتمتة تحويل حمل (تعرفات زمنية، تجنّب ساعات الذروة) حتى دون أي إنتاج شمسي. يضيف دمج الطاقة الشمسية والبطارية خيارات أتمتة أكثر لكنه ليس مطلوبًا للبدء.' },
          { q: 'ماذا تحتاج لوحة Energy في Home Assistant للبدء؟', a: 'كحد أدنى، مستشعر استهلاك من الشبكة — عادةً مشبك تيار على التغذية الرئيسية، أو دمج عداد ذكي إذا كانت شركة المرافق تدعمه. كل شيء آخر (مقابس لكل جهاز، طاقة شمسية، بطارية) إضافي.' },
          { q: 'هل يستبدل هذا تطبيق الطاقة الخاص بشركة المرافق؟', a: 'يمكنه ذلك، لتتبع الاستخدام والأتمتة. لا تزال بعض شركات المرافق تتطلب تطبيقها الخاص للفوترة أو تبديل التعرفة، لكن المراقبة والأتمتة اليومية تعمل بالكامل عبر Home Assistant بمجرد إعدادها.' },
          { q: 'هل من الصعب تركيب مشبك تيار؟', a: 'تُثبَّت معظم مستشعرات CT من نوع المشبك حول كابل موجود داخل لوحة القواطع دون قطع الأسلاك، رغم أن العمل داخل اللوحة يعني إيقاف التيار أولًا واتباع تعليمات تركيب المستشعر. إذا لم تكن مرتاحًا للعمل داخل لوحة القواطع، استعن بكهربائي مرخّص لهذه الخطوة.' },
          { q: 'هل يمكنني الأتمتة حول تعرفة كهرباء متغيّرة؟', a: 'نعم — إذا كانت شركة المرافق تنشر نوافذ التعرفة (أو يمكنك إدخالها يدويًا)، يمكن لأتمتة Home Assistant جدولة الأجهزة عالية الاستهلاك لأرخص الساعات باستخدام نفس أدوات الجدولة كأي أتمتة أخرى.' },
          { q: 'كيف يختلف هذا عن تقارير الطاقة المدمجة في منظم حرارة ذكي؟', a: 'يبلّغ تطبيق منظم الحرارة الخاص عن نفسه فقط وعادةً ما يتطلب خدمته السحابية. تجمّع لوحة Energy كل جهاز مراقَب — منظم الحرارة، شاحن السيارة الكهربائية، الأجهزة، الطاقة الشمسية، البطارية — في عرض محلي واحد وتتيح للأتمتة العمل عبرها جميعًا معًا.' },
          { q: 'هل تحتاج المقابس الذكية أن تكون متحكَّمًا فيها محليًا حتى تعمل مع هذا؟', a: 'بالنسبة للمراقبة والأتمتة الموصوفة هنا، يحتاج المقبس إلى رفع بياناته إلى Home Assistant، ويُفضَّل عبر دمج محلي (Zigbee أو Z-Wave أو دمج Wi-Fi يُستطلَع محليًا) بدلًا من واجهة برمجة تطبيقات سحابية للشركة المصنّعة فقط، حتى تستمر الأتمتة في العمل دون اتصال.' },
          { q: 'ماذا لو كان لدي بضعة مقابس ذكية فقط ولا طاقة شمسية؟', a: 'ابدأ من هناك. عدد قليل من المقابس التي تقيس الطاقة على أكثر أجهزتك استهلاكًا، تغذّي لوحة Energy، تتيح بالفعل تحويل الحمل حسب التعرفة الزمنية — دمج الطاقة الشمسية والبطارية إضافات يمكنك القيام بها لاحقًا دون البدء من جديد.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[لوحة Energy في Home Assistant: دليل الإعداد الكامل](/ar/smart-home/home-assistant-energy-dashboard-guide) — طريقة الإعداد',
          '[دمج Matter للعاكسات الشمسية ومضخات الحرارة](/ar/smart-home/matter-solar-inverter-heat-pump-integration) — توصيل أجهزة التوليد محليًا',
          '[تحويل منزلك إلى شبكة طاقة صغيرة](/ar/smart-home/home-as-energy-microgrid-2027) — النسخ الاحتياطي للبطارية والاستقلالية عن الانقطاعات',
          '[أفضل الأجهزة لمنزل ذكي محلي + ذكاء اصطناعي محلي](/ar/smart-home/best-hardware-for-local-smart-home) — أجهزة المركز التي يعمل هذا عليها',
          '[ما هي الطاقة الشمسية للشرفة؟](/ar/balcony-solar/what-is-balcony-solar) — عبر المجموعات: أساسيات الطاقة الشمسية المحلية الصغيرة',
          '[توصيل الطاقة الشمسية للشرفة بـ Home Assistant دون سحابة](/ar/balcony-solar/connect-balcony-solar-home-assistant-local) — عبر المجموعات: دمج محلي للطاقة الشمسية للشرفة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'إدارة الطاقة المحلية في المنزل الذكي (⁨2027⁩)',
      description: 'إدارة الطاقة المحلية في المنزل الذكي 2027: شغّل مراقبة الطاقة الشمسية والبطارية والأجهزة عبر لوحة Energy في Home Assistant، دون إرسال بيانات الاستخدام إلى السحابة.',
      url: 'https://www.promptquorum.com/ar/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'لوحة Energy في Home Assistant' }, { '@type': 'Thing', name: 'مراقبة الطاقة المحلية' }, { '@type': 'Thing', name: 'أتمتة تحويل الحمل' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج ألواحًا شمسية حتى تستحق إدارة الطاقة المحلية العناء؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. يمنحك مشبك تيار مع بضعة مقابس ذكية تقيس الطاقة أتمتة تحويل حمل حتى دون أي إنتاج شمسي.' } },
        { '@type': 'Question', name: 'ماذا تحتاج لوحة Energy في Home Assistant للبدء؟', acceptedAnswer: { '@type': 'Answer', text: 'كحد أدنى، مستشعر استهلاك من الشبكة — عادةً مشبك تيار على التغذية الرئيسية.' } },
        { '@type': 'Question', name: 'هل يستبدل هذا تطبيق الطاقة الخاص بشركة المرافق؟', acceptedAnswer: { '@type': 'Answer', text: 'يمكنه ذلك لتتبع الاستخدام والأتمتة، رغم أن بعض الشركات لا تزال تتطلب تطبيقها الخاص للفوترة.' } },
        { '@type': 'Question', name: 'هل من الصعب تركيب مشبك تيار؟', acceptedAnswer: { '@type': 'Answer', text: 'تُثبَّت معظمها حول كابل موجود دون قطع الأسلاك، لكن هذا يعني العمل والتيار مطفأ — استعن بكهربائي مرخّص إذا لم تكن مرتاحًا.' } },
        { '@type': 'Question', name: 'هل يمكنني الأتمتة حول تعرفة كهرباء متغيّرة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — إذا كانت شركة المرافق تنشر نوافذ التعرفة، يمكن لأتمتة Home Assistant جدولة الأجهزة عالية الاستهلاك لأرخص الساعات.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: '로컬 스마트홈 에너지 관리 (2027년)',
    seoTitle: '로컬 스마트홈 에너지 관리 (2027년)',
    intro:
      '로컬 스마트홈 에너지 관리란 태양광, 배터리, 가전제품 사용량을 오직 자신의 하드웨어에서만 추적하고 자동화하는 것을 의미하며, Home Assistant의 Energy 대시보드가 그 중심이 됩니다 — 사용 데이터는 네트워크를 벗어나지 않습니다. 이 가이드에서는 클라우드 에너지 앱이 세밀한 사용 패턴을 노출하는 이유, 로컬 구성이 기기별로 이를 어떻게 대체하는지, 그리고 인버터/히트펌프 연동, 대시보드 자체 설정, 전체 가정용 배터리 백업으로 이어지는 다음 단계를 다룹니다.',
    metaDescription:
      '2027년 로컬 스마트홈 에너지 관리: Home Assistant의 Energy 대시보드를 통해 태양광, 배터리, 가전제품을 모니터링하며 사용 데이터를 클라우드로 보내지 않습니다.',
    twitterDescription:
      '스마트홈을 위한 로컬 에너지 관리: Home Assistant Energy 대시보드, 로컬 스마트 플러그, 부하 이동 자동화 — 클라우드 추적 없음.',
    readTime: '8분 소요',
    educationalLevel: 'Intermediate',
    audience: '태양광, 배터리 또는 여러 모니터링 가전제품을 보유하고 에너지 데이터를 로컬에 유지하고 싶은 스마트홈 소유자',
    primaryTerm: '로컬 스마트홈 에너지 관리',
    targetKeywords: [
      '스마트홈 에너지 관리 로컬',
      '로컬 에너지 모니터링 home assistant',
      'home assistant 에너지 클라우드 없이',
      '로컬 부하 이동 자동화',
      '개인용 홈 에너지 대시보드',
    ],
    leadAnswerBlock:
      '**로컬 스마트홈 에너지 관리는 세 가지 층으로 작동합니다: 로컬 모니터링(Home Assistant에 직접 보고하는 스마트 플러그와 CT 클램프), 로컬 대시보드(벤더 클라우드 앱이 아닌 Home Assistant에 내장된 Energy 대시보드), 그리고 저렴하거나 태양광 발전이 많은 시간대로 부하를 이동하는 로컬 자동화입니다.** 이 세 가지 모두 사용 데이터를 네트워크 밖으로 보낼 필요가 없습니다.',
    quickAnswerTop: {
      ko: {
        question: '클라우드 대시보드 없이 스마트홈 에너지를 로컬로 관리하려면 어떻게 하나요?',
        answer:
          'Home Assistant에 내장된 Energy 대시보드를 유일한 진실의 원천으로 사용하세요. 메인 전력선의 CT 클램프, 개별 가전제품의 에너지 모니터링 스마트 플러그, 그리고 있다면 로컬 태양광/배터리 연동으로 데이터를 공급하세요. 전력 소모가 큰 가전제품(전기차 충전, 온수, 세탁)을 저비용 또는 고태양광 발전 시간대로 이동시키는 자동화를 Home Assistant 안에 직접 구축하세요. 이 데이터 중 어느 것도 제조사의 클라우드 서비스에 도달할 필요가 없습니다.',
        bullets: [
          '허브: Home Assistant에 내장된 Energy 대시보드',
          '모니터링: 메인 전력선의 CT 클램프 + 가전제품별 에너지 모니터링 스마트 플러그',
          '자동화: 부하를 저렴한 요금제 또는 태양광 발전이 많은 시간대로 이동, 모든 로직은 로컬에서 실행',
          '피해야 할 것: 사용 데이터를 자체 대시보드로만 보여주는 벤더 클라우드 앱',
          '다음 단계: 인버터/히트펌프 연동, 그다음 대시보드 설정 가이드',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '왜 로컬 에너지 관리인가', anchor: 'why-local' },
      { label: '무엇을 모니터링할지', anchor: 'what-to-monitor' },
      { label: '부하 이동 자동화', anchor: 'automations' },
      { label: '이 스택에서의 위치', anchor: 'stack-fit' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '로컬 스마트홈 에너지 관리는 로컬 스마트 플러그와 CT 클램프가 공급하는 Home Assistant의 Energy 대시보드를 사용하며, 사용 데이터를 클라우드 서비스로 전혀 보내지 않는 부하 이동 자동화를 활용합니다.' },
      { type: 'plain-terms', content: '제조사의 스마트폰 앱에서 태양광이나 배터리 사용량을 확인하는 대신, 같은 데이터가 자신의 네트워크 안에 있는 Home Assistant로 흘러갑니다. 작은 클램프 센서가 메인 전력선을 읽고, 스마트 플러그가 개별 가전제품을 읽습니다. Home Assistant는 이 데이터를 사용해 가전제품을 언제 작동시킬지 결정합니다 — 예를 들어 태양광 출력이 높을 때만 전기차를 충전하는 식입니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Home Assistant에 내장된 Energy 대시보드를 태양광, 배터리, 가전제품 사용량을 위한 유일한 로컬 허브로 사용하세요',
          '메인 전력선의 CT 클램프와 개별 가전제품의 에너지 모니터링 스마트 플러그로 데이터를 공급하세요',
          '전기차 충전, 온수, 세탁 등의 부하 이동 자동화를 Home Assistant 안에 직접 구축하세요 — 클라우드 왕복 없음',
          '클라우드 에너지 앱은 기기별 세밀한 사용 패턴을 제조사에 노출합니다. 로컬 모니터링은 그 데이터를 네트워크 안에 유지합니다',
          '이 글은 개요입니다 — 자세한 내용은 대시보드 설정 가이드, Matter 인버터/히트펌프 연동 가이드, 마이크로그리드/배터리 백업 가이드를 참고하세요',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '왜 에너지를 로컬로 관리해야 하는가',
        content:
          '**클라우드 에너지 모니터링 앱은 언제 세탁하는지, 전기차를 얼마나 자주 충전하는지, 일상 루틴 같은 기기별 사용 패턴을 제조사 서버로 전송합니다.** 로컬 구성은 같은 데이터를 자신의 네트워크에 유지하면서도 자동화와 이력 추적을 계속 제공합니다.',
        items: [
          '세밀한 에너지 데이터는 재실 패턴과 일상 루틴을 드러냅니다 — 클라우드 카메라나 음성 비서가 노출하는 것과 같은 정보이며, 단지 전력 소모량에서 추론될 뿐입니다.',
          '많은 벤더 에너지 앱은 로컬 사용량을 보는 것만으로도 계정과 인터넷 연결을 요구하며, 벤더가 앱을 중단하거나 약관을 변경하면 작동을 멈출 수 있습니다.',
          '로컬 구성은 인터넷 장애 중에도 계속 작동합니다 — 비용을 절감하는 부하 이동 자동화는 클라우드 서비스 접근 가능 여부에 의존하지 않습니다.',
        ],
      },
      whatToMonitor: {
        id: 'what-to-monitor',
        title: '무엇을 모니터링할지',
        content:
          '**먼저 메인 전력선의 CT 클램프로 집 전체 사용량을 파악한 다음, 자동화에 중요한 가전제품에 스마트 플러그를 추가하세요 — 모든 것에 자체 센서가 필요한 것은 아닙니다.**',
        items: [
          '메인 전력선의 CT(전류 변환기) 클램프는 개별 회로를 건드리지 않고도 집 전체의 와트수를 제공합니다 — 이는 Energy 대시보드에 필요한 기본 요소입니다.',
          '전력 소모가 크거나 일정 조정이 가능한 가전제품에 에너지 모니터링 스마트 플러그를 추가하세요: 전기차 충전기, 온수기, 세탁기/건조기, 식기세척기. 이들이 자동화할 가치가 있는 대상입니다.',
          '태양광 및/또는 배터리가 있다면, 자체 로컬 연동(Matter 인버터/히트펌프 연동 가이드 참고)이 발전량과 충전 상태를 같은 대시보드에 공급합니다.',
          '저전력 상시 작동 기기를 개별적으로 모니터링하는 것은 피하세요 — 자동화할 대상 없이 대시보드에 잡음만 더할 뿐입니다.',
        ],
      },
      automations: {
        id: 'automations',
        title: '부하 이동 자동화',
        content:
          '**로컬 에너지 모니터링의 보상은 전력 소모가 큰 가전제품을 가장 저렴하거나 가장 친환경적인 시간대로 이동시키는 자동화이며, 이는 전적으로 자신의 허브에서 실행됩니다.**',
        items: [
          '시간대별 요금 이동: Home Assistant의 예약 기능과 전력회사가 공개한 요금 시간대를 사용해 비수기 요금 시간대에 식기세척기, 세탁기, 전기차 충전기를 작동시킵니다.',
          '태양광 추종 자동화: (인버터 연동에서 공급되는) 로컬 태양광 발전량이 임계값을 초과할 때만 전력 소모가 큰 가전제품을 시작해, 계통 사용보다 자가 소비를 최대화합니다.',
          '배터리 인식 자동화: 가정용 배터리 저장 장치가 있다면 계통에서 끌어오는 대신 저녁 피크 요금 시간대의 배터리 방전을 우선시합니다.',
          '이 모든 것은 표준 Home Assistant 자동화로 실행됩니다 — 로직이 실행되는 데 클라우드 서비스에 접근할 필요가 없습니다.',
        ],
      },
      stackFit: {
        id: 'stack-fit',
        title: '이 스택에서의 위치',
        content:
          '**이 글은 개요이며, 다음 세 편은 구체적인 부분을 다룹니다 — Matter 기반 인버터/히트펌프 연동, Home Assistant Energy 대시보드 자체 설정, 그리고 전체 가정용 배터리 백업입니다.**',
        items: [
          '태양광 인버터나 히트펌프를 벤더 클라우드 앱이 아닌 로컬 Matter 제어 기기로 연결하려면, Matter 태양광 인버터 + 히트펌프 연동 가이드를 참고하세요.',
          '실제 대시보드 설정 — 센서 추가, 비용 추적 설정, 그래프 읽기 — 은 Home Assistant Energy 대시보드 설정 가이드를 참고하세요.',
          '정전 시 백업으로 가정용 배터리를 사용하려면, 가정용 에너지 마이크로그리드 가이드를 참고하세요.',
          '아직 태양광 하드웨어가 없다면, 전체 가정 에너지 관리를 계획하기 전에 소규모 로컬 구성이 어떤 모습인지 발코니 태양광 클러스터를 참고하세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '로컬 에너지 관리가 가치 있으려면 태양광 패널이 필요한가요?', a: '아니요. CT 클램프와 몇 개의 에너지 모니터링 스마트 플러그만으로도 태양광 발전이 전혀 없어도 부하 이동 자동화(시간대별 요금, 피크 시간대 회피)가 가능합니다. 태양광 및 배터리 연동은 더 많은 자동화 옵션을 추가하지만 시작에 필수는 아닙니다.' },
          { q: 'Home Assistant Energy 대시보드를 시작하려면 무엇이 필요한가요?', a: '최소한 계통 소비 센서가 필요합니다 — 보통 메인 전력선의 CT 클램프이거나, 전력회사가 지원한다면 스마트 미터 연동입니다. 그 외(기기별 플러그, 태양광, 배터리)는 모두 추가 요소입니다.' },
          { q: '이것이 전력회사 자체 에너지 앱을 대체하나요?', a: '사용량 추적과 자동화 측면에서는 그럴 수 있습니다. 일부 전력회사는 청구서 발행이나 요금제 변경에 여전히 자체 앱을 요구하지만, 일상적인 모니터링과 자동화는 설정만 되면 전적으로 Home Assistant를 통해 작동합니다.' },
          { q: 'CT 클램프 설치가 어렵나요?', a: '대부분의 클램프형 CT 센서는 배선을 자르지 않고 배전반 안의 기존 케이블에 끼우지만, 배전반 내부 작업은 먼저 전원을 끄고 센서의 설치 지침을 따라야 함을 의미합니다. 배전반 내부 작업이 불편하다면 이 단계는 자격을 갖춘 전기 기술자에게 맡기세요.' },
          { q: '변동 전기 요금제에 맞춰 자동화할 수 있나요?', a: '네 — 전력회사가 요금 시간대를 공개하거나(혹은 수동으로 입력할 수 있다면), Home Assistant 자동화는 다른 자동화와 동일한 예약 도구를 사용해 전력 소모가 큰 가전제품을 가장 저렴한 시간대에 예약할 수 있습니다.' },
          { q: '이것이 스마트 온도조절기의 내장 에너지 보고서와 어떻게 다른가요?', a: '온도조절기 자체 앱은 자기 자신에 대해서만 보고하며 보통 클라우드 서비스가 필요합니다. Energy 대시보드는 온도조절기, 전기차 충전기, 가전제품, 태양광, 배터리 등 모니터링되는 모든 기기를 하나의 로컬 뷰로 집계하고, 자동화가 이들 모두에 걸쳐 함께 작동하도록 합니다.' },
          { q: '이 기능이 작동하려면 스마트 플러그가 로컬로 제어 가능해야 하나요?', a: '여기서 설명한 모니터링과 자동화를 위해서는, 플러그가 벤더의 클라우드 API만이 아니라 이상적으로는 로컬 연동(Zigbee, Z-Wave, 또는 로컬에서 폴링되는 Wi-Fi 연동)을 통해 데이터를 Home Assistant로 보고해야 자동화가 오프라인에서도 계속 작동합니다.' },
          { q: '스마트 플러그가 몇 개뿐이고 태양광이 없다면 어떻게 하나요?', a: '거기서부터 시작하세요. 전력 소모가 가장 큰 가전제품 몇 개에 에너지 모니터링 플러그를 설치해 Energy 대시보드에 공급하는 것만으로도 이미 시간대별 요금에 따른 부하 이동이 가능합니다 — 태양광과 배터리 연동은 나중에 처음부터 다시 시작할 필요 없이 추가할 수 있는 요소입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Home Assistant Energy 대시보드: 완전 설정 가이드](/ko/smart-home/home-assistant-energy-dashboard-guide) — 설정 방법',
          '[태양광 인버터와 히트펌프를 위한 Matter 연동](/ko/smart-home/matter-solar-inverter-heat-pump-integration) — 발전 하드웨어를 로컬로 연결',
          '[집을 에너지 마이크로그리드로 만들기](/ko/smart-home/home-as-energy-microgrid-2027) — 배터리 백업과 정전 시 독립성',
          '[로컬 스마트홈 + 로컬 AI를 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — 이것이 실행되는 허브 하드웨어',
          '[발코니 태양광이란?](/ko/balcony-solar/what-is-balcony-solar) — 클러스터 간: 소규모 로컬 태양광 기초',
          '[발코니 태양광을 클라우드 없이 Home Assistant에 연결](/ko/balcony-solar/connect-balcony-solar-home-assistant-local) — 클러스터 간: 로컬 발코니 태양광 연동',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 스마트홈 에너지 관리 (2027년)',
      description: '2027년 로컬 스마트홈 에너지 관리: Home Assistant의 Energy 대시보드를 통해 태양광, 배터리, 가전제품을 모니터링하며 사용 데이터를 클라우드로 보내지 않습니다.',
      url: 'https://www.promptquorum.com/ko/smart-home/local-smart-home-energy-management-2027',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energy 대시보드' }, { '@type': 'Thing', name: '로컬 에너지 모니터링' }, { '@type': 'Thing', name: '부하 이동 자동화' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '로컬 에너지 관리가 가치 있으려면 태양광 패널이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요. CT 클램프와 몇 개의 에너지 모니터링 스마트 플러그만으로도 태양광 발전 없이 부하 이동 자동화가 가능합니다.' } },
        { '@type': 'Question', name: 'Home Assistant Energy 대시보드를 시작하려면 무엇이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '최소한 계통 소비 센서가 필요합니다 — 보통 메인 전력선의 CT 클램프이거나 스마트 미터 연동입니다.' } },
        { '@type': 'Question', name: '이것이 전력회사 자체 에너지 앱을 대체하나요?', acceptedAnswer: { '@type': 'Answer', text: '사용량 추적과 자동화 측면에서는 가능하며, 일부 전력회사는 여전히 청구서 발행에 자체 앱을 요구합니다.' } },
        { '@type': 'Question', name: 'CT 클램프 설치가 어렵나요?', acceptedAnswer: { '@type': 'Answer', text: '대부분 배선을 자르지 않고 기존 케이블에 끼우지만, 전원을 끈 상태로 작업해야 합니다 — 불편하다면 자격을 갖춘 전기 기술자에게 맡기세요.' } },
        { '@type': 'Question', name: '변동 전기 요금제에 맞춰 자동화할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '네 — 전력회사가 요금 시간대를 공개한다면, Home Assistant 자동화가 전력 소모가 큰 가전제품을 가장 저렴한 시간대에 예약할 수 있습니다.' } },
      ],
    },
  },
}
