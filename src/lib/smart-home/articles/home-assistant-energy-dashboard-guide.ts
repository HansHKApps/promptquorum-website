import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-en.webp',
    title: 'Home Assistant Energy Dashboard: Complete Setup Guide (2027)',
    seoTitle: 'Home Assistant Energy Dashboard Setup (2027)',
    intro:
      'Home Assistant\'s built-in Energy dashboard tracks grid consumption, solar generation, battery state, and individual-device usage in one local view — the setup takes adding a few sensor entities, not writing any automation code. This guide walks through adding a grid sensor, solar and battery sensors if you have them, individual device tracking, and reading the resulting cost and usage charts.',
    metaDescription:
      'Set up Home Assistant\'s Energy dashboard in 2027: add grid, solar, battery, and device sensors, configure cost tracking, and read the usage charts.',
    twitterDescription:
      'Step-by-step Home Assistant Energy dashboard setup: grid sensor, solar/battery integration, per-device tracking, and cost configuration.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    audience: 'Home Assistant users setting up energy tracking for the first time',
    primaryTerm: 'home assistant energy dashboard setup',
    targetKeywords: [
      'home assistant energy dashboard setup',
      'how to configure ha energy dashboard',
      'home assistant energy tracking',
      'home assistant solar dashboard',
      'home assistant cost tracking energy',
    ],
    leadAnswerBlock:
      '**Set up Home Assistant\'s Energy dashboard by adding a grid-consumption sensor first (from Settings → Dashboards → Energy), then adding solar, battery, and individual-device sensors as optional extras — each addition just points the dashboard at an existing sensor entity, no coding required.** The dashboard builds its charts automatically once sensors are configured.',
    quickAnswerTop: {
      en: {
        question: 'How do I set up the Home Assistant Energy dashboard?',
        answer:
          'Go to Settings → Dashboards → Energy in Home Assistant. Add a grid-consumption sensor first — this can come from a CT clamp integration, a smart meter integration, or any sensor entity that reports energy in kWh. Then optionally add solar production, battery charge/discharge, and gas/water if metered. For individual devices, add each energy-monitoring smart plug as an "individual device" under the same Energy configuration page. Set your electricity tariff (fixed rate or time-of-use) so the dashboard can calculate cost, not just usage.',
        bullets: [
          'Step 1: add a grid-consumption sensor (CT clamp or smart meter integration)',
          'Step 2 (optional): add solar production and battery sensors',
          'Step 3 (optional): add individual devices — one entry per energy-monitoring smart plug',
          'Step 4: set your tariff so the dashboard shows cost, not just kWh',
          'The dashboard needs at least 24 hours of data before charts become meaningful',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Before You Start', anchor: 'before-you-start' },
      { label: 'Adding a Grid Sensor', anchor: 'grid-sensor' },
      { label: 'Adding Solar and Battery', anchor: 'solar-battery' },
      { label: 'Adding Individual Devices', anchor: 'individual-devices' },
      { label: 'Setting Up Cost Tracking', anchor: 'cost-tracking' },
      { label: 'Reading the Dashboard', anchor: 'reading-dashboard' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Set up Home Assistant\'s Energy dashboard from Settings → Dashboards → Energy by adding a grid-consumption sensor first, then optional solar, battery, and individual-device sensors, and your electricity tariff for cost tracking.' },
      { type: 'plain-terms', content: 'The Energy dashboard is a built-in Home Assistant screen that turns raw sensor readings into usage charts and cost estimates. You don\'t write any code — you just tell it which existing sensor represents your grid power, your solar panels, your battery, and any individually-monitored devices, and it draws the graphs from there.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Go to Settings → Dashboards → Energy to start configuration — no YAML editing required',
          'Add a grid-consumption sensor first (CT clamp or smart meter integration) — this is the only required step',
          'Solar, battery, gas/water, and individual devices are all optional additions on the same page',
          'Set your electricity tariff (fixed or time-of-use) so the dashboard shows cost alongside usage',
          'Give it at least 24 hours before expecting meaningful charts — the dashboard aggregates hourly data',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'Before You Start',
        content:
          '**You need at least one sensor entity reporting energy in kWh (or power in W, which Home Assistant can integrate into kWh) before the Energy dashboard has anything to display.**',
        items: [
          'This is usually a CT clamp integration (many brands report directly into Home Assistant), a smart meter integration if your utility/region supports one, or a whole-home monitor.',
          'If you don\'t have any energy sensor yet, see the local smart home energy management overview and the best hardware for a local smart home guide for hardware options before returning here.',
          'You don\'t need solar, a battery, or any individual-device sensors to get started — those are additive.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Adding a Grid Sensor',
        content:
          '**In Settings → Dashboards → Energy, click "Add Consumption" under Electricity grid, and select your grid-consumption sensor entity.**',
        items: [
          'If your sensor reports power (W) rather than energy (kWh), Home Assistant\'s Riemann sum integration helper converts it — the Energy dashboard setup flow prompts for this automatically when needed.',
          'If you have solar, also mark whether your grid sensor already nets out solar production (some smart meters do) or reports gross consumption — this affects whether you need a separate "return to grid" sensor.',
          'This single step is enough to start seeing a basic usage chart; everything else in this guide is optional refinement.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: 'Adding Solar and Battery',
        content:
          '**If you have solar generation and/or battery storage, add them as separate sensor entities on the same Energy configuration page — "Solar Panels" and "Home Battery Storage" sections.**',
        items: [
          'Solar production needs its own sensor entity, typically from your inverter\'s local integration (see the Matter solar inverter integration guide, or your inverter\'s existing local API integration).',
          'Battery storage needs two sensor entities — energy going into the battery and energy coming out — so the dashboard can show charge/discharge separately from grid and solar.',
          'Once both are configured, the dashboard\'s energy distribution chart shows how much of your consumption came from solar, battery, or grid at any point in time.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: 'Adding Individual Devices',
        content:
          '**Under "Individual devices," add each energy-monitoring smart plug or built-in appliance sensor you want tracked separately — this is what lets you see which appliance is driving your usage.**',
        items: [
          'Any sensor entity reporting energy in kWh can be added here, most commonly an energy-monitoring smart plug on an EV charger, water heater, or major appliance.',
          'You don\'t need to monitor everything — see the local energy management overview for guidance on which devices are worth individually tracking.',
          'Individual devices appear as their own line items in the dashboard\'s usage breakdown, letting you compare appliances directly.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Setting Up Cost Tracking',
        content:
          '**Configure your electricity tariff under the grid consumption sensor\'s settings to turn kWh usage into cost estimates — either a fixed rate or a time-of-use schedule.**',
        items: [
          'A fixed rate is a single price per kWh, entered once.',
          'A time-of-use tariff lets you define rate windows (e.g., peak/off-peak hours) so the dashboard\'s cost calculation matches your actual bill — this is also what load-shifting automations (see the local energy management overview) key off of.',
          'If you have solar with a feed-in tariff (paid for exporting to the grid), configure that under the solar sensor\'s settings to see net cost, not just consumption cost.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Reading the Dashboard',
        content:
          '**The dashboard shows a daily/weekly/monthly usage graph, an energy-distribution chart (grid vs. solar vs. battery), and a cost summary — give it 24 hours before expecting the first full day of data.**',
        items: [
          'The usage graph lets you compare days or weeks to spot patterns — a good first check after setup is whether your grid draw drops during solar-generation hours as expected.',
          'The distribution chart is the fastest way to see self-consumption ratio if you have solar — how much of your usage came from your own generation versus the grid.',
          'Individual-device entries let you sanity-check that a specific appliance\'s usage matches expectations, which is also useful for catching a miswired or misconfigured sensor early.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need a smart meter for the Energy dashboard to work?', a: 'No — a CT clamp on your main feed works without a smart meter and is the more common setup. A smart meter integration is an alternative if your utility and region support one.' },
          { q: 'Can I use the Energy dashboard without solar or a battery?', a: 'Yes. Grid-consumption tracking alone gives you usage and cost charts. Solar and battery sections are entirely optional and can be added later.' },
          { q: 'Why is my dashboard empty right after setup?', a: 'The Energy dashboard aggregates data hourly, so it typically needs a full day before showing a complete usage graph. This is expected — check back after 24 hours.' },
          { q: 'What if my region uses a time-of-use tariff with more than two rate periods?', a: 'Home Assistant\'s tariff configuration supports multiple rate periods, not just peak/off-peak — enter each window and its rate under the grid sensor\'s cost settings.' },
          { q: 'Can I add individual devices later without redoing the setup?', a: 'Yes — individual devices, solar, and battery can all be added or removed independently at any time from the same Energy configuration page, without affecting the grid sensor already configured.' },
          { q: 'Does this dashboard require an internet connection?', a: 'No — once sensors are configured, the Energy dashboard runs entirely on your local Home Assistant instance and continues working during an internet outage, though any cloud-hosted sensor integration you\'ve chosen to use would not.' },
          { q: 'How is this different from a generic Home Assistant dashboard?', a: 'The Energy dashboard is a purpose-built, auto-generated view specifically for energy sensors — it handles unit conversion, cost calculation, and the distribution chart automatically, which a manually built dashboard would need custom cards and templates to replicate.' },
          { q: 'Can automations use Energy dashboard data directly?', a: 'Yes — the underlying sensor entities the Energy dashboard reads from are standard Home Assistant entities, so any automation (including the load-shifting examples in the local energy management overview) can reference them directly.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the overview this guide implements',
          '[Home Assistant: Complete Getting-Started Guide](/smart-home/home-assistant-getting-started) — general first-install setup',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — connecting generation hardware',
          '[Connect Balcony Solar to Home Assistant, No Cloud](/balcony-solar/connect-balcony-solar-home-assistant-local) — cross-cluster: feeding solar data in',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant Energy Dashboard: Complete Setup Guide (2027)',
      description: 'Set up Home Assistant\'s Energy dashboard in 2027: add grid, solar, battery, and device sensors, configure cost tracking, and read the usage charts.',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energy dashboard' }, { '@type': 'Thing', name: 'Energy monitoring' }, { '@type': 'Thing', name: 'Cost tracking' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Set Up the Home Assistant Energy Dashboard',
      description: 'Configure grid, solar, battery, and individual-device sensors in Home Assistant\'s built-in Energy dashboard.',
      step: [
        { '@type': 'HowToStep', name: 'Add a grid sensor', text: 'Go to Settings → Dashboards → Energy and add your grid-consumption sensor entity.' },
        { '@type': 'HowToStep', name: 'Add solar and battery (optional)', text: 'Add solar production and battery charge/discharge sensor entities if you have that hardware.' },
        { '@type': 'HowToStep', name: 'Add individual devices (optional)', text: 'Add each energy-monitoring smart plug or appliance sensor under Individual Devices.' },
        { '@type': 'HowToStep', name: 'Configure your tariff', text: 'Enter your fixed rate or time-of-use tariff under the grid sensor settings for cost tracking.' },
        { '@type': 'HowToStep', name: 'Wait for data', text: 'Allow at least 24 hours for the dashboard to aggregate a full day of usage before reading the charts.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a smart meter for the Energy dashboard to work?', acceptedAnswer: { '@type': 'Answer', text: 'No — a CT clamp on your main feed works without a smart meter and is the more common setup.' } },
        { '@type': 'Question', name: 'Can I use the Energy dashboard without solar or a battery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Grid-consumption tracking alone gives you usage and cost charts; solar and battery sections are optional.' } },
        { '@type': 'Question', name: 'Why is my dashboard empty right after setup?', acceptedAnswer: { '@type': 'Answer', text: 'The Energy dashboard aggregates data hourly and typically needs a full day before showing a complete usage graph.' } },
        { '@type': 'Question', name: 'Does this dashboard require an internet connection?', acceptedAnswer: { '@type': 'Answer', text: 'No — once sensors are configured, the Energy dashboard runs entirely on your local Home Assistant instance.' } },
        { '@type': 'Question', name: 'Can automations use Energy dashboard data directly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the underlying sensor entities are standard Home Assistant entities that any automation can reference directly.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-de.webp',
    title: 'Home Assistant Energie-Dashboard: Komplette Einrichtungsanleitung (2027)',
    seoTitle: 'Home Assistant Energie-Dashboard einrichten (2027)',
    intro:
      'Das eingebaute Energie-Dashboard von Home Assistant erfasst Netzbezug, Solarerzeugung, Batteriestatus und Gerätenutzung einzeln in einer lokalen Ansicht — die Einrichtung erfordert das Hinzufügen einiger Sensor-Entitäten, keinen Automatisierungscode. Diese Anleitung führt durch das Hinzufügen eines Netzsensors, Solar- und Batteriesensoren falls vorhanden, die Erfassung einzelner Geräte und das Lesen der resultierenden Kosten- und Nutzungsdiagramme.',
    metaDescription:
      'Richten Sie 2027 das Energie-Dashboard von Home Assistant ein: Netz-, Solar-, Batterie- und Gerätesensoren hinzufügen, Kostenverfolgung konfigurieren, Nutzungsdiagramme lesen.',
    twitterDescription:
      'Schritt-für-Schritt-Einrichtung des Home-Assistant-Energie-Dashboards: Netzsensor, Solar-/Batterieintegration, Pro-Gerät-Verfolgung und Kostenkonfiguration.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Home-Assistant-Nutzer, die zum ersten Mal Energieverfolgung einrichten',
    primaryTerm: 'home assistant energie dashboard einrichten',
    targetKeywords: [
      'home assistant energie dashboard einrichten',
      'ha energie dashboard konfigurieren',
      'home assistant energieverfolgung',
      'home assistant solar dashboard',
      'home assistant kostenverfolgung energie',
    ],
    leadAnswerBlock:
      '**Richten Sie das Energie-Dashboard von Home Assistant ein, indem Sie zuerst einen Netzbezugssensor hinzufügen (unter Einstellungen → Dashboards → Energie), dann optional Solar-, Batterie- und Einzelgerätesensoren als Extras — jede Ergänzung verweist das Dashboard nur auf eine vorhandene Sensor-Entität, kein Programmieren nötig.** Das Dashboard erstellt seine Diagramme automatisch, sobald Sensoren konfiguriert sind.',
    quickAnswerTop: {
      de: {
        question: 'Wie richte ich das Home Assistant Energie-Dashboard ein?',
        answer:
          'Gehen Sie in Home Assistant zu Einstellungen → Dashboards → Energie. Fügen Sie zuerst einen Netzbezugssensor hinzu — dieser kann aus einer Stromwandlerzangen-Integration, einer Smart-Meter-Integration oder jeder Sensor-Entität stammen, die Energie in kWh meldet. Fügen Sie dann optional Solarerzeugung, Batterieladung/-entladung und Gas/Wasser hinzu, falls gemessen. Für einzelne Geräte fügen Sie jeden energiemessenden Smart Plug als „einzelnes Gerät" auf derselben Energie-Konfigurationsseite hinzu. Legen Sie Ihren Stromtarif fest (Festpreis oder Zeittarif), damit das Dashboard Kosten berechnen kann, nicht nur Verbrauch.',
        bullets: [
          'Schritt 1: einen Netzbezugssensor hinzufügen (Stromwandlerzange oder Smart-Meter-Integration)',
          'Schritt 2 (optional): Solarerzeugungs- und Batteriesensoren hinzufügen',
          'Schritt 3 (optional): einzelne Geräte hinzufügen — ein Eintrag pro energiemessendem Smart Plug',
          'Schritt 4: Ihren Tarif festlegen, damit das Dashboard Kosten statt nur kWh zeigt',
          'Das Dashboard braucht mindestens 24 Stunden Daten, bevor Diagramme aussagekräftig werden',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Bevor Sie beginnen', anchor: 'before-you-start' },
      { label: 'Netzsensor hinzufügen', anchor: 'grid-sensor' },
      { label: 'Solar und Batterie hinzufügen', anchor: 'solar-battery' },
      { label: 'Einzelne Geräte hinzufügen', anchor: 'individual-devices' },
      { label: 'Kostenverfolgung einrichten', anchor: 'cost-tracking' },
      { label: 'Das Dashboard lesen', anchor: 'reading-dashboard' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Richten Sie das Energie-Dashboard von Home Assistant unter Einstellungen → Dashboards → Energie ein, indem Sie zuerst einen Netzbezugssensor hinzufügen, dann optional Solar-, Batterie- und Einzelgerätesensoren sowie Ihren Stromtarif für die Kostenverfolgung.' },
      { type: 'plain-terms', content: 'Das Energie-Dashboard ist ein eingebauter Home-Assistant-Bildschirm, der rohe Sensorwerte in Nutzungsdiagramme und Kostenschätzungen verwandelt. Sie schreiben keinen Code — Sie sagen ihm nur, welcher vorhandene Sensor Ihren Netzbezug, Ihre Solarpanels, Ihre Batterie und einzeln überwachte Geräte darstellt, und es zeichnet die Diagramme von dort aus.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Gehen Sie zu Einstellungen → Dashboards → Energie, um die Konfiguration zu starten — keine YAML-Bearbeitung nötig',
          'Fügen Sie zuerst einen Netzbezugssensor hinzu (Stromwandlerzange oder Smart-Meter-Integration) — das ist der einzige erforderliche Schritt',
          'Solar, Batterie, Gas/Wasser und einzelne Geräte sind alle optionale Ergänzungen auf derselben Seite',
          'Legen Sie Ihren Stromtarif fest (fest oder zeitbasiert), damit das Dashboard Kosten neben der Nutzung anzeigt',
          'Geben Sie mindestens 24 Stunden, bevor Sie aussagekräftige Diagramme erwarten — das Dashboard aggregiert stündliche Daten',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'Bevor Sie beginnen',
        content:
          '**Sie brauchen mindestens eine Sensor-Entität, die Energie in kWh meldet (oder Leistung in W, die Home Assistant in kWh integrieren kann), bevor das Energie-Dashboard etwas anzeigen kann.**',
        items: [
          'Dies ist meist eine Stromwandlerzangen-Integration (viele Marken melden direkt an Home Assistant), eine Smart-Meter-Integration, falls Ihr Versorger/Ihre Region eine unterstützt, oder ein Gesamthaus-Monitor.',
          'Falls Sie noch keinen Energiesensor haben, siehe den Überblick zum lokalen Energiemanagement im Smart Home und den Leitfaden zur besten Hardware für ein lokales Smart Home für Hardware-Optionen, bevor Sie hierher zurückkehren.',
          'Sie brauchen Solar, eine Batterie oder Einzelgerätesensoren nicht, um zu starten — das sind Ergänzungen.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Netzsensor hinzufügen',
        content:
          '**Klicken Sie unter Einstellungen → Dashboards → Energie auf „Verbrauch hinzufügen" unter Stromnetz und wählen Sie Ihre Netzbezugssensor-Entität aus.**',
        items: [
          'Falls Ihr Sensor Leistung (W) statt Energie (kWh) meldet, konvertiert der Riemann-Summen-Integrationshelfer von Home Assistant dies — der Einrichtungsablauf des Energie-Dashboards fragt dies bei Bedarf automatisch ab.',
          'Falls Sie Solar haben, markieren Sie auch, ob Ihr Netzsensor die Solarerzeugung bereits saldiert (manche Smart Meter tun das) oder den Bruttoverbrauch meldet — dies beeinflusst, ob Sie einen separaten „Netzeinspeisung"-Sensor brauchen.',
          'Dieser einzelne Schritt reicht aus, um ein grundlegendes Nutzungsdiagramm zu sehen; alles andere in dieser Anleitung ist optionale Verfeinerung.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: 'Solar und Batterie hinzufügen',
        content:
          '**Falls Sie Solarerzeugung und/oder Batteriespeicher haben, fügen Sie sie als separate Sensor-Entitäten auf derselben Energie-Konfigurationsseite hinzu — Abschnitte „Solarpanels" und „Hausbatteriespeicher".**',
        items: [
          'Die Solarerzeugung braucht eine eigene Sensor-Entität, typischerweise aus der lokalen Integration Ihres Wechselrichters (siehe den Matter-Solarwechselrichter-Integrationsleitfaden oder die bestehende lokale API-Integration Ihres Wechselrichters).',
          'Der Batteriespeicher braucht zwei Sensor-Entitäten — Energie, die in die Batterie fließt, und Energie, die herauskommt —, damit das Dashboard Laden/Entladen getrennt von Netz und Solar zeigen kann.',
          'Sobald beide konfiguriert sind, zeigt das Energieverteilungsdiagramm des Dashboards, wie viel Ihres Verbrauchs zu jedem Zeitpunkt aus Solar, Batterie oder Netz kam.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: 'Einzelne Geräte hinzufügen',
        content:
          '**Fügen Sie unter „Einzelne Geräte" jeden energiemessenden Smart Plug oder eingebauten Gerätesensor hinzu, den Sie separat verfolgen möchten — so sehen Sie, welches Gerät Ihre Nutzung antreibt.**',
        items: [
          'Jede Sensor-Entität, die Energie in kWh meldet, kann hier hinzugefügt werden, am häufigsten ein energiemessender Smart Plug an einem E-Auto-Ladegerät, Warmwasserbereiter oder einem größeren Gerät.',
          'Sie müssen nicht alles überwachen — siehe den Überblick zum lokalen Energiemanagement für Hinweise, welche Geräte sich für die einzelne Verfolgung lohnen.',
          'Einzelne Geräte erscheinen als eigene Posten in der Nutzungsaufschlüsselung des Dashboards, sodass Sie Geräte direkt vergleichen können.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Kostenverfolgung einrichten',
        content:
          '**Konfigurieren Sie Ihren Stromtarif unter den Einstellungen des Netzbezugssensors, um kWh-Nutzung in Kostenschätzungen umzuwandeln — entweder einen Festpreis oder einen Zeittarifplan.**',
        items: [
          'Ein Festpreis ist ein einzelner Preis pro kWh, einmal eingegeben.',
          'Ein Zeittarif lässt Sie Tarifzeiten definieren (z. B. Spitzen-/Nebenzeitstunden), damit die Kostenberechnung des Dashboards Ihrer tatsächlichen Rechnung entspricht — dies ist auch, woran sich Lastverschiebungs-Automatisierungen (siehe den Überblick zum lokalen Energiemanagement) orientieren.',
          'Falls Sie Solar mit Einspeisevergütung haben (Vergütung für Netzeinspeisung), konfigurieren Sie dies unter den Einstellungen des Solarsensors, um Nettokosten statt nur Verbrauchskosten zu sehen.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Das Dashboard lesen',
        content:
          '**Das Dashboard zeigt ein tägliches/wöchentliches/monatliches Nutzungsdiagramm, ein Energieverteilungsdiagramm (Netz vs. Solar vs. Batterie) und eine Kostenübersicht — geben Sie ihm 24 Stunden, bevor Sie den ersten vollen Datentag erwarten.**',
        items: [
          'Das Nutzungsdiagramm lässt Sie Tage oder Wochen vergleichen, um Muster zu erkennen — eine gute erste Prüfung nach der Einrichtung ist, ob Ihr Netzbezug während der Solarerzeugungsstunden wie erwartet sinkt.',
          'Das Verteilungsdiagramm ist der schnellste Weg, das Eigenverbrauchsverhältnis zu sehen, falls Sie Solar haben — wie viel Ihrer Nutzung aus Ihrer eigenen Erzeugung gegenüber dem Netz kam.',
          'Einzelgeräte-Einträge lassen Sie überprüfen, ob die Nutzung eines bestimmten Geräts den Erwartungen entspricht, was auch nützlich ist, um einen falsch verkabelten oder falsch konfigurierten Sensor früh zu erkennen.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Brauche ich einen Smart Meter, damit das Energie-Dashboard funktioniert?', a: 'Nein — eine Stromwandlerzange an Ihrem Hauptzuleiter funktioniert ohne Smart Meter und ist das gängigere Setup. Eine Smart-Meter-Integration ist eine Alternative, falls Ihr Versorger und Ihre Region eine unterstützen.' },
          { q: 'Kann ich das Energie-Dashboard ohne Solar oder Batterie nutzen?', a: 'Ja. Reine Netzbezugsverfolgung liefert Ihnen Nutzungs- und Kostendiagramme. Solar- und Batterieabschnitte sind vollständig optional und können später hinzugefügt werden.' },
          { q: 'Warum ist mein Dashboard direkt nach der Einrichtung leer?', a: 'Das Energie-Dashboard aggregiert Daten stündlich und braucht daher typischerweise einen vollen Tag, bevor es ein vollständiges Nutzungsdiagramm zeigt. Das ist normal — schauen Sie nach 24 Stunden wieder rein.' },
          { q: 'Was, wenn meine Region einen Zeittarif mit mehr als zwei Tarifzeiten nutzt?', a: 'Die Tarifkonfiguration von Home Assistant unterstützt mehrere Tarifzeiten, nicht nur Spitzen-/Nebenzeit — geben Sie jede Zeitspanne und ihren Tarif unter den Kosteneinstellungen des Netzsensors ein.' },
          { q: 'Kann ich später einzelne Geräte hinzufügen, ohne die Einrichtung zu wiederholen?', a: 'Ja — einzelne Geräte, Solar und Batterie können jederzeit unabhängig auf derselben Energie-Konfigurationsseite hinzugefügt oder entfernt werden, ohne den bereits konfigurierten Netzsensor zu beeinflussen.' },
          { q: 'Braucht dieses Dashboard eine Internetverbindung?', a: 'Nein — sobald Sensoren konfiguriert sind, läuft das Energie-Dashboard vollständig auf Ihrer lokalen Home-Assistant-Instanz und funktioniert bei einem Internetausfall weiter, obwohl jede von Ihnen gewählte cloudgehostete Sensorintegration das nicht täte.' },
          { q: 'Wie unterscheidet sich das von einem generischen Home-Assistant-Dashboard?', a: 'Das Energie-Dashboard ist eine zweckgebundene, automatisch generierte Ansicht speziell für Energiesensoren — es übernimmt Einheitenumrechnung, Kostenberechnung und das Verteilungsdiagramm automatisch, was ein manuell erstelltes Dashboard mit benutzerdefinierten Karten und Vorlagen nachbilden müsste.' },
          { q: 'Können Automatisierungen Energie-Dashboard-Daten direkt nutzen?', a: 'Ja — die zugrunde liegenden Sensor-Entitäten, aus denen das Energie-Dashboard liest, sind Standard-Home-Assistant-Entitäten, sodass jede Automatisierung (einschließlich der Lastverschiebungsbeispiele im Überblick zum lokalen Energiemanagement) direkt darauf verweisen kann.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Themen',
        items: [
          '[Lokales Energiemanagement im Smart Home](/de/smart-home/local-smart-home-energy-management-2027) — der Überblick, den diese Anleitung umsetzt',
          '[Home Assistant: Komplette Einstiegsanleitung](/de/smart-home/home-assistant-getting-started) — allgemeine Ersteinrichtung',
          '[Matter-Integration für Solarwechselrichter und Wärmepumpen](/de/smart-home/matter-solar-inverter-heat-pump-integration) — Erzeugungshardware anbinden',
          '[Balkonsolar ohne Cloud mit Home Assistant verbinden](/de/balcony-solar/connect-balcony-solar-home-assistant-local) — clusterübergreifend: Solardaten einspeisen',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant Energie-Dashboard: Komplette Einrichtungsanleitung (2027)',
      description: 'Richten Sie 2027 das Energie-Dashboard von Home Assistant ein: Netz-, Solar-, Batterie- und Gerätesensoren hinzufügen, Kostenverfolgung konfigurieren, Nutzungsdiagramme lesen.',
      url: 'https://www.promptquorum.com/de/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energie-Dashboard' }, { '@type': 'Thing', name: 'Energiemonitoring' }, { '@type': 'Thing', name: 'Kostenverfolgung' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Das Home Assistant Energie-Dashboard einrichten',
      description: 'Konfigurieren Sie Netz-, Solar-, Batterie- und Einzelgerätesensoren im eingebauten Energie-Dashboard von Home Assistant.',
      step: [
        { '@type': 'HowToStep', name: 'Netzsensor hinzufügen', text: 'Gehen Sie zu Einstellungen → Dashboards → Energie und fügen Sie Ihre Netzbezugssensor-Entität hinzu.' },
        { '@type': 'HowToStep', name: 'Solar und Batterie hinzufügen (optional)', text: 'Fügen Sie Solarerzeugungs- und Batterieladung/-entladungssensor-Entitäten hinzu, falls Sie diese Hardware haben.' },
        { '@type': 'HowToStep', name: 'Einzelne Geräte hinzufügen (optional)', text: 'Fügen Sie jeden energiemessenden Smart Plug oder Gerätesensor unter Einzelne Geräte hinzu.' },
        { '@type': 'HowToStep', name: 'Tarif konfigurieren', text: 'Geben Sie Ihren Festpreis- oder Zeittarif unter den Netzsensor-Einstellungen für die Kostenverfolgung ein.' },
        { '@type': 'HowToStep', name: 'Auf Daten warten', text: 'Geben Sie dem Dashboard mindestens 24 Stunden, um einen vollen Nutzungstag zu aggregieren, bevor Sie die Diagramme lesen.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich einen Smart Meter, damit das Energie-Dashboard funktioniert?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — eine Stromwandlerzange an Ihrem Hauptzuleiter funktioniert ohne Smart Meter und ist das gängigere Setup.' } },
        { '@type': 'Question', name: 'Kann ich das Energie-Dashboard ohne Solar oder Batterie nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Reine Netzbezugsverfolgung liefert Nutzungs- und Kostendiagramme; Solar- und Batterieabschnitte sind optional.' } },
        { '@type': 'Question', name: 'Warum ist mein Dashboard direkt nach der Einrichtung leer?', acceptedAnswer: { '@type': 'Answer', text: 'Das Energie-Dashboard aggregiert Daten stündlich und braucht typischerweise einen vollen Tag, bevor es ein vollständiges Nutzungsdiagramm zeigt.' } },
        { '@type': 'Question', name: 'Braucht dieses Dashboard eine Internetverbindung?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — sobald Sensoren konfiguriert sind, läuft das Energie-Dashboard vollständig auf Ihrer lokalen Home-Assistant-Instanz.' } },
        { '@type': 'Question', name: 'Können Automatisierungen Energie-Dashboard-Daten direkt nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — die zugrunde liegenden Sensor-Entitäten sind Standard-Home-Assistant-Entitäten, auf die jede Automatisierung direkt verweisen kann.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-fr.webp',
    title: 'Tableau de bord Énergie de Home Assistant : guide complet de configuration (2027)',
    seoTitle: 'Configurer le tableau de bord Énergie de Home Assistant (2027)',
    intro:
      'Le tableau de bord Énergie intégré de Home Assistant suit la consommation réseau, la production solaire, l\'état de la batterie et l\'usage par appareil individuel dans une vue locale unique — la configuration consiste à ajouter quelques entités capteurs, pas à écrire de code d\'automatisation. Ce guide explique comment ajouter un capteur réseau, des capteurs solaire et batterie si vous en avez, le suivi par appareil individuel, et la lecture des graphiques de coût et d\'usage qui en résultent.',
    metaDescription:
      'Configurez le tableau de bord Énergie de Home Assistant en 2027 : ajoutez capteurs réseau, solaire, batterie et appareils, configurez le suivi des coûts, lisez les graphiques d\'usage.',
    twitterDescription:
      'Configuration pas à pas du tableau de bord Énergie de Home Assistant : capteur réseau, intégration solaire/batterie, suivi par appareil et configuration des coûts.',
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Utilisateurs de Home Assistant configurant le suivi énergétique pour la première fois',
    primaryTerm: 'configuration tableau de bord energie home assistant',
    targetKeywords: [
      'configuration tableau de bord energie home assistant',
      'comment configurer tableau de bord energie ha',
      'suivi energie home assistant',
      'tableau de bord solaire home assistant',
      'suivi cout energie home assistant',
    ],
    leadAnswerBlock:
      '**Configurez le tableau de bord Énergie de Home Assistant en ajoutant d\'abord un capteur de consommation réseau (depuis Paramètres → Tableaux de bord → Énergie), puis en ajoutant des capteurs solaire, batterie et par appareil individuel comme extras optionnels — chaque ajout ne fait que pointer le tableau de bord vers une entité capteur existante, aucun code requis.** Le tableau de bord construit ses graphiques automatiquement une fois les capteurs configurés.',
    quickAnswerTop: {
      fr: {
        question: 'Comment configurer le tableau de bord Énergie de Home Assistant ?',
        answer:
          'Allez dans Paramètres → Tableaux de bord → Énergie dans Home Assistant. Ajoutez d\'abord un capteur de consommation réseau — celui-ci peut provenir d\'une intégration pince ampèremétrique, d\'une intégration compteur intelligent, ou de toute entité capteur qui rapporte l\'énergie en kWh. Ajoutez ensuite éventuellement la production solaire, la charge/décharge de la batterie, et le gaz/eau si mesurés. Pour les appareils individuels, ajoutez chaque prise connectée mesurant l\'énergie comme « appareil individuel » sur la même page de configuration Énergie. Définissez votre tarif électrique (taux fixe ou horaire) pour que le tableau de bord puisse calculer le coût, pas seulement l\'usage.',
        bullets: [
          'Étape 1 : ajouter un capteur de consommation réseau (pince ampèremétrique ou intégration compteur intelligent)',
          'Étape 2 (optionnelle) : ajouter des capteurs de production solaire et de batterie',
          'Étape 3 (optionnelle) : ajouter des appareils individuels — une entrée par prise connectée mesurant l\'énergie',
          'Étape 4 : définir votre tarif pour que le tableau de bord affiche le coût, pas seulement les kWh',
          'Le tableau de bord a besoin d\'au moins 24 heures de données avant que les graphiques deviennent significatifs',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Avant de commencer', anchor: 'before-you-start' },
      { label: 'Ajouter un capteur réseau', anchor: 'grid-sensor' },
      { label: 'Ajouter solaire et batterie', anchor: 'solar-battery' },
      { label: 'Ajouter des appareils individuels', anchor: 'individual-devices' },
      { label: 'Configurer le suivi des coûts', anchor: 'cost-tracking' },
      { label: 'Lire le tableau de bord', anchor: 'reading-dashboard' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Configurez le tableau de bord Énergie de Home Assistant depuis Paramètres → Tableaux de bord → Énergie en ajoutant d\'abord un capteur de consommation réseau, puis des capteurs solaire, batterie et par appareil optionnels, et votre tarif électrique pour le suivi des coûts.' },
      { type: 'plain-terms', content: 'Le tableau de bord Énergie est un écran intégré de Home Assistant qui transforme les relevés bruts des capteurs en graphiques d\'usage et estimations de coût. Vous n\'écrivez aucun code — vous indiquez simplement quel capteur existant représente votre réseau électrique, vos panneaux solaires, votre batterie, et les appareils surveillés individuellement, et il trace les graphiques à partir de là.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          'Allez dans Paramètres → Tableaux de bord → Énergie pour démarrer la configuration — aucune édition YAML requise',
          'Ajoutez d\'abord un capteur de consommation réseau (pince ampèremétrique ou intégration compteur intelligent) — c\'est la seule étape requise',
          'Solaire, batterie, gaz/eau et appareils individuels sont tous des ajouts optionnels sur la même page',
          'Définissez votre tarif électrique (fixe ou horaire) pour que le tableau de bord affiche le coût en plus de l\'usage',
          'Laissez au moins 24 heures avant d\'attendre des graphiques significatifs — le tableau de bord agrège des données horaires',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'Avant de commencer',
        content:
          '**Vous avez besoin d\'au moins une entité capteur rapportant l\'énergie en kWh (ou la puissance en W, que Home Assistant peut intégrer en kWh) avant que le tableau de bord Énergie ait quoi que ce soit à afficher.**',
        items: [
          'C\'est généralement une intégration pince ampèremétrique (de nombreuses marques rapportent directement à Home Assistant), une intégration compteur intelligent si votre fournisseur/région en supporte une, ou un moniteur de maison entière.',
          'Si vous n\'avez pas encore de capteur d\'énergie, consultez la synthèse sur la gestion locale de l\'énergie et le guide du meilleur matériel pour une maison connectée locale pour les options matérielles avant de revenir ici.',
          'Vous n\'avez pas besoin de solaire, d\'une batterie ou de capteurs par appareil individuel pour commencer — ce sont des ajouts.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Ajouter un capteur réseau',
        content:
          '**Dans Paramètres → Tableaux de bord → Énergie, cliquez sur « Ajouter une consommation » sous Réseau électrique, et sélectionnez votre entité capteur de consommation réseau.**',
        items: [
          'Si votre capteur rapporte la puissance (W) plutôt que l\'énergie (kWh), l\'assistant d\'intégration de somme de Riemann de Home Assistant la convertit — le flux de configuration du tableau de bord Énergie le demande automatiquement si besoin.',
          'Si vous avez du solaire, indiquez aussi si votre capteur réseau compense déjà la production solaire (certains compteurs intelligents le font) ou rapporte la consommation brute — cela affecte si vous avez besoin d\'un capteur séparé de « retour au réseau ».',
          'Cette seule étape suffit pour commencer à voir un graphique d\'usage basique ; tout le reste de ce guide est un raffinement optionnel.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: 'Ajouter solaire et batterie',
        content:
          '**Si vous avez une production solaire et/ou un stockage par batterie, ajoutez-les comme entités capteurs séparées sur la même page de configuration Énergie — sections « Panneaux solaires » et « Stockage batterie domestique ».**',
        items: [
          'La production solaire a besoin de sa propre entité capteur, généralement depuis l\'intégration locale de votre onduleur (voir le guide d\'intégration Matter onduleur solaire, ou l\'intégration API locale existante de votre onduleur).',
          'Le stockage par batterie a besoin de deux entités capteurs — l\'énergie entrant dans la batterie et l\'énergie en sortant — afin que le tableau de bord puisse afficher la charge/décharge séparément du réseau et du solaire.',
          'Une fois les deux configurés, le graphique de distribution d\'énergie du tableau de bord montre quelle part de votre consommation provenait du solaire, de la batterie ou du réseau à tout moment.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: 'Ajouter des appareils individuels',
        content:
          '**Sous « Appareils individuels », ajoutez chaque prise connectée mesurant l\'énergie ou capteur d\'appareil intégré que vous voulez suivre séparément — c\'est ce qui vous permet de voir quel appareil est responsable de votre consommation.**',
        items: [
          'Toute entité capteur rapportant l\'énergie en kWh peut être ajoutée ici, le plus souvent une prise connectée mesurant l\'énergie sur un chargeur de VE, un chauffe-eau, ou un appareil majeur.',
          'Vous n\'avez pas besoin de tout surveiller — consultez la synthèse sur la gestion locale de l\'énergie pour savoir quels appareils valent la peine d\'être suivis individuellement.',
          'Les appareils individuels apparaissent comme des lignes distinctes dans la répartition d\'usage du tableau de bord, vous permettant de comparer les appareils directement.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Configurer le suivi des coûts',
        content:
          '**Configurez votre tarif électrique sous les paramètres du capteur de consommation réseau pour transformer l\'usage en kWh en estimations de coût — soit un taux fixe, soit un planning horaire.**',
        items: [
          'Un taux fixe est un prix unique par kWh, saisi une fois.',
          'Un tarif horaire vous permet de définir des plages tarifaires (par exemple heures pleines/creuses) afin que le calcul de coût du tableau de bord corresponde à votre facture réelle — c\'est aussi ce sur quoi se basent les automatisations de décalage de charge (voir la synthèse sur la gestion locale de l\'énergie).',
          'Si vous avez du solaire avec un tarif de rachat (payé pour l\'export vers le réseau), configurez-le sous les paramètres du capteur solaire pour voir le coût net, pas seulement le coût de consommation.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Lire le tableau de bord',
        content:
          '**Le tableau de bord affiche un graphique d\'usage quotidien/hebdomadaire/mensuel, un graphique de distribution d\'énergie (réseau vs solaire vs batterie), et un résumé des coûts — laissez 24 heures avant d\'attendre la première journée complète de données.**',
        items: [
          'Le graphique d\'usage vous permet de comparer des jours ou des semaines pour repérer des tendances — une bonne première vérification après configuration est de voir si votre consommation réseau baisse pendant les heures de production solaire comme attendu.',
          'Le graphique de distribution est le moyen le plus rapide de voir le taux d\'autoconsommation si vous avez du solaire — quelle part de votre usage provenait de votre propre production par rapport au réseau.',
          'Les entrées d\'appareils individuels vous permettent de vérifier que l\'usage d\'un appareil précis correspond aux attentes, ce qui est aussi utile pour détecter tôt un capteur mal câblé ou mal configuré.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Ai-je besoin d\'un compteur intelligent pour que le tableau de bord Énergie fonctionne ?', a: 'Non — une pince ampèremétrique sur votre arrivée principale fonctionne sans compteur intelligent et est la configuration la plus courante. Une intégration compteur intelligent est une alternative si votre fournisseur et votre région en supportent une.' },
          { q: 'Puis-je utiliser le tableau de bord Énergie sans solaire ni batterie ?', a: 'Oui. Le suivi de la consommation réseau seul vous donne des graphiques d\'usage et de coût. Les sections solaire et batterie sont entièrement optionnelles et peuvent être ajoutées plus tard.' },
          { q: 'Pourquoi mon tableau de bord est-il vide juste après la configuration ?', a: 'Le tableau de bord Énergie agrège les données à l\'heure, donc il a généralement besoin d\'une journée complète avant d\'afficher un graphique d\'usage complet. C\'est normal — revérifiez après 24 heures.' },
          { q: 'Que faire si ma région utilise un tarif horaire avec plus de deux périodes tarifaires ?', a: 'La configuration tarifaire de Home Assistant supporte plusieurs périodes tarifaires, pas seulement heures pleines/creuses — saisissez chaque plage et son tarif sous les paramètres de coût du capteur réseau.' },
          { q: 'Puis-je ajouter des appareils individuels plus tard sans refaire la configuration ?', a: 'Oui — appareils individuels, solaire et batterie peuvent tous être ajoutés ou retirés indépendamment à tout moment depuis la même page de configuration Énergie, sans affecter le capteur réseau déjà configuré.' },
          { q: 'Ce tableau de bord nécessite-t-il une connexion internet ?', a: 'Non — une fois les capteurs configurés, le tableau de bord Énergie tourne entièrement sur votre instance Home Assistant locale et continue de fonctionner pendant une coupure internet, bien que toute intégration de capteur hébergée dans le cloud que vous auriez choisie ne le ferait pas.' },
          { q: 'En quoi est-ce différent d\'un tableau de bord Home Assistant générique ?', a: 'Le tableau de bord Énergie est une vue conçue spécifiquement pour les capteurs d\'énergie, générée automatiquement — il gère la conversion d\'unités, le calcul de coût et le graphique de distribution automatiquement, ce qu\'un tableau de bord construit manuellement devrait reproduire avec des cartes et modèles personnalisés.' },
          { q: 'Les automatisations peuvent-elles utiliser directement les données du tableau de bord Énergie ?', a: 'Oui — les entités capteurs sous-jacentes que lit le tableau de bord Énergie sont des entités Home Assistant standard, donc toute automatisation (y compris les exemples de décalage de charge dans la synthèse sur la gestion locale de l\'énergie) peut y faire référence directement.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Gestion locale de l\'énergie dans la maison connectée](/fr/smart-home/local-smart-home-energy-management-2027) — la synthèse que ce guide met en œuvre',
          '[Home Assistant : guide complet de démarrage](/fr/smart-home/home-assistant-getting-started) — configuration générale de première installation',
          '[Intégration Matter pour onduleurs solaires et pompes à chaleur](/fr/smart-home/matter-solar-inverter-heat-pump-integration) — connecter le matériel de production',
          '[Connecter le solaire de balcon à Home Assistant, sans cloud](/fr/balcony-solar/connect-balcony-solar-home-assistant-local) — inter-cluster : alimenter les données solaires',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Tableau de bord Énergie de Home Assistant : guide complet de configuration (2027)',
      description: 'Configurez le tableau de bord Énergie de Home Assistant en 2027 : ajoutez capteurs réseau, solaire, batterie et appareils, configurez le suivi des coûts, lisez les graphiques d\'usage.',
      url: 'https://www.promptquorum.com/fr/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Tableau de bord Énergie Home Assistant' }, { '@type': 'Thing', name: 'Surveillance énergétique' }, { '@type': 'Thing', name: 'Suivi des coûts' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Configurer le tableau de bord Énergie de Home Assistant',
      description: 'Configurez les capteurs réseau, solaire, batterie et par appareil individuel dans le tableau de bord Énergie intégré de Home Assistant.',
      step: [
        { '@type': 'HowToStep', name: 'Ajouter un capteur réseau', text: 'Allez dans Paramètres → Tableaux de bord → Énergie et ajoutez votre entité capteur de consommation réseau.' },
        { '@type': 'HowToStep', name: 'Ajouter solaire et batterie (optionnel)', text: 'Ajoutez des entités capteurs de production solaire et de charge/décharge de batterie si vous avez ce matériel.' },
        { '@type': 'HowToStep', name: 'Ajouter des appareils individuels (optionnel)', text: 'Ajoutez chaque prise connectée mesurant l\'énergie ou capteur d\'appareil sous Appareils individuels.' },
        { '@type': 'HowToStep', name: 'Configurer votre tarif', text: 'Saisissez votre tarif fixe ou horaire sous les paramètres du capteur réseau pour le suivi des coûts.' },
        { '@type': 'HowToStep', name: 'Attendre les données', text: 'Laissez au moins 24 heures au tableau de bord pour agréger une journée complète d\'usage avant de lire les graphiques.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Ai-je besoin d\'un compteur intelligent pour que le tableau de bord Énergie fonctionne ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — une pince ampèremétrique sur votre arrivée principale fonctionne sans compteur intelligent et est la configuration la plus courante.' } },
        { '@type': 'Question', name: 'Puis-je utiliser le tableau de bord Énergie sans solaire ni batterie ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Le suivi de la consommation réseau seul donne des graphiques d\'usage et de coût ; solaire et batterie sont optionnels.' } },
        { '@type': 'Question', name: 'Pourquoi mon tableau de bord est-il vide juste après la configuration ?', acceptedAnswer: { '@type': 'Answer', text: 'Le tableau de bord Énergie agrège les données à l\'heure et a généralement besoin d\'une journée complète avant d\'afficher un graphique complet.' } },
        { '@type': 'Question', name: 'Ce tableau de bord nécessite-t-il une connexion internet ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — une fois les capteurs configurés, le tableau de bord Énergie tourne entièrement sur votre instance Home Assistant locale.' } },
        { '@type': 'Question', name: 'Les automatisations peuvent-elles utiliser directement les données du tableau de bord Énergie ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — les entités capteurs sous-jacentes sont des entités Home Assistant standard que toute automatisation peut référencer directement.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-ja.webp',
    title: 'Home Assistant Energyダッシュボード：完全設定ガイド（2027年）',
    seoTitle: 'Home Assistant Energyダッシュボード設定（2027年）',
    intro:
      'Home Assistant内蔵のEnergyダッシュボードは、系統消費量・太陽光発電量・バッテリー状態・個別機器の使用量を1つのローカルビューで追跡します — 設定に必要なのはいくつかのセンサーエンティティの追加だけで、自動化コードを書く必要はありません。本ガイドでは、系統センサーの追加、（お持ちの場合は）太陽光・バッテリーセンサーの追加、個別機器の追跡、そして結果として得られるコストと使用量のグラフの読み方を説明します。',
    metaDescription:
      '2027年版：Home AssistantのEnergyダッシュボードを設定する方法 — 系統・太陽光・バッテリー・機器センサーを追加し、コスト追跡を設定し、使用量グラフを読む。',
    twitterDescription:
      'Home Assistant Energyダッシュボードのステップバイステップ設定：系統センサー、太陽光/バッテリー連携、機器別追跡、コスト設定。',
    readTime: '7分で読めます',
    educationalLevel: 'Beginner',
    audience: '初めてエネルギー追跡を設定するHome Assistantユーザー',
    primaryTerm: 'home assistant energy dashboard 設定',
    targetKeywords: [
      'home assistant energy dashboard 設定',
      'ha energy dashboard 設定方法',
      'home assistant エネルギー追跡',
      'home assistant 太陽光 ダッシュボード',
      'home assistant コスト追跡 エネルギー',
    ],
    leadAnswerBlock:
      '**Home AssistantのEnergyダッシュボードは、まず系統消費量センサーを追加し（設定→ダッシュボード→エネルギーから）、次に太陽光・バッテリー・個別機器のセンサーをオプションとして追加することで設定します — 追加のたびにダッシュボードが既存のセンサーエンティティを指し示すだけで、コーディングは不要です。** センサーが設定されれば、ダッシュボードは自動的にグラフを構築します。',
    quickAnswerTop: {
      ja: {
        question: 'Home AssistantのEnergyダッシュボードはどう設定しますか？',
        answer:
          'Home Assistantで設定→ダッシュボード→エネルギーに移動します。まず系統消費量センサーを追加します — これはCTクランプ連携、スマートメーター連携、あるいはkWhでエネルギーを報告する任意のセンサーエンティティから得られます。次に、あれば太陽光発電、バッテリーの充放電、計測されていればガス/水道を任意で追加します。個別機器については、各エネルギー監視スマートプラグを同じEnergy設定ページの「個別機器」として追加します。ダッシュボードが使用量だけでなくコストを計算できるよう、電気料金プラン（定額または時間帯別）を設定します。',
        bullets: [
          'ステップ1：系統消費量センサーを追加（CTクランプまたはスマートメーター連携）',
          'ステップ2（任意）：太陽光発電とバッテリーのセンサーを追加',
          'ステップ3（任意）：個別機器を追加 — エネルギー監視スマートプラグ1台につき1エントリ',
          'ステップ4：料金プランを設定し、ダッシュボードがkWhだけでなくコストを表示するようにする',
          'グラフが意味を持つようになるまで、ダッシュボードには最低24時間分のデータが必要',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: '始める前に', anchor: 'before-you-start' },
      { label: '系統センサーの追加', anchor: 'grid-sensor' },
      { label: '太陽光とバッテリーの追加', anchor: 'solar-battery' },
      { label: '個別機器の追加', anchor: 'individual-devices' },
      { label: 'コスト追跡の設定', anchor: 'cost-tracking' },
      { label: 'ダッシュボードの読み方', anchor: 'reading-dashboard' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '設定→ダッシュボード→エネルギーから、まず系統消費量センサーを追加し、次に任意で太陽光・バッテリー・個別機器のセンサー、そしてコスト追跡のための電気料金プランを追加してHome AssistantのEnergyダッシュボードを設定します。' },
      { type: 'plain-terms', content: 'Energyダッシュボードは、生のセンサー値を使用量グラフとコスト見積もりに変換する、Home Assistant内蔵の画面です。コードは書きません — どの既存センサーが系統電力、太陽光パネル、バッテリー、個別監視対象機器を表すかを指定するだけで、そこからグラフが描画されます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          '設定→ダッシュボード→エネルギーに移動して設定を開始 — YAML編集は不要',
          'まず系統消費量センサーを追加（CTクランプまたはスマートメーター連携）— これが唯一必須のステップ',
          '太陽光、バッテリー、ガス/水道、個別機器はすべて同じページ上の任意の追加項目',
          'ダッシュボードが使用量と並べてコストを表示するよう電気料金プラン（定額または時間帯別）を設定する',
          '意味のあるグラフを期待する前に少なくとも24時間は待つ — ダッシュボードは1時間ごとにデータを集計する',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: '始める前に',
        content:
          '**Energyダッシュボードが何かを表示できるようになる前に、kWhでエネルギーを報告する（あるいはHome Assistantがkwhに積算できるW単位の電力を報告する）センサーエンティティが少なくとも1つ必要です。**',
        items: [
          'これは通常、CTクランプ連携（多くのブランドがHome Assistantに直接報告します）、電力会社/地域が対応していればスマートメーター連携、または全屋モニターです。',
          'まだエネルギーセンサーをお持ちでない場合は、ここに戻る前にローカルなスマートホームのエネルギー管理の概要とローカルスマートホームに最適なハードウェアガイドでハードウェアの選択肢を確認してください。',
          '始めるために太陽光、バッテリー、個別機器センサーは必要ありません — それらは追加要素です。',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: '系統センサーの追加',
        content:
          '**設定→ダッシュボード→エネルギーで、電力系統の下にある「消費を追加」をクリックし、系統消費量センサーエンティティを選択します。**',
        items: [
          'センサーがエネルギー（kWh）ではなく電力（W）を報告する場合、Home AssistantのRiemann和積算ヘルパーがそれを変換します — 必要な場合、Energyダッシュボードの設定フローが自動的にこれを促します。',
          '太陽光をお持ちの場合、系統センサーがすでに太陽光発電を相殺しているか（一部のスマートメーターはそうします）、総消費量を報告しているかも指定してください — これにより、別途「系統への逆潮流」センサーが必要かどうかが変わります。',
          'この1ステップだけで基本的な使用量グラフが表示され始めるのに十分です。このガイドの残りはすべて任意の調整です。',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: '太陽光とバッテリーの追加',
        content:
          '**太陽光発電および/またはバッテリー蓄電をお持ちの場合、同じEnergy設定ページ上の「太陽光パネル」と「家庭用バッテリー蓄電」セクションに別々のセンサーエンティティとして追加します。**',
        items: [
          '太陽光発電には専用のセンサーエンティティが必要で、通常はインバーターのローカル連携（Matter太陽光インバーター連携ガイド、またはインバーターの既存のローカルAPI連携を参照）から得られます。',
          'バッテリー蓄電には2つのセンサーエンティティが必要です — バッテリーに入るエネルギーと出るエネルギー — これにより、ダッシュボードは系統や太陽光とは別に充放電を表示できます。',
          '両方が設定されると、ダッシュボードのエネルギー分配グラフは、任意の時点であなたの消費量のうちどれだけが太陽光、バッテリー、系統から来たかを示します。',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: '個別機器の追加',
        content:
          '**「個別機器」の下に、個別に追跡したい各エネルギー監視スマートプラグまたは内蔵の家電センサーを追加します — これにより、どの家電が使用量を押し上げているかがわかります。**',
        items: [
          'kWhでエネルギーを報告する任意のセンサーエンティティをここに追加できます。最も一般的なのは、EV充電器、給湯器、または主要な家電に取り付けたエネルギー監視スマートプラグです。',
          'すべてを監視する必要はありません — どの機器を個別に追跡する価値があるかについては、ローカルエネルギー管理の概要を参照してください。',
          '個別機器は、ダッシュボードの使用量内訳の中で独自の項目として表示され、家電を直接比較できるようになります。',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'コスト追跡の設定',
        content:
          '**系統消費量センサーの設定の下で電気料金プランを設定し、kWh使用量をコスト見積もりに変換します — 定額プランか時間帯別プランのいずれかです。**',
        items: [
          '定額プランは、一度入力するkWhあたりの単一価格です。',
          '時間帯別プランでは料金時間帯（例：ピーク時間帯/オフピーク時間帯）を定義でき、ダッシュボードのコスト計算が実際の請求書と一致するようになります — これは負荷シフト自動化（ローカルエネルギー管理の概要を参照）が基準にするものでもあります。',
          '固定価格買取制度付きの太陽光をお持ちの場合（系統への売電に対する支払い）、消費コストだけでなく正味コストを見るために太陽光センサーの設定の下でこれを設定してください。',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'ダッシュボードの読み方',
        content:
          '**ダッシュボードには日次/週次/月次の使用量グラフ、エネルギー分配グラフ（系統対太陽光対バッテリー）、コストサマリーが表示されます — 最初の1日分のデータが揃うまで24時間待ってください。**',
        items: [
          '使用量グラフでは日や週を比較してパターンを見つけられます — 設定後の良い最初のチェックは、太陽光発電時間帯に系統からの引き込みが期待通り減少しているかどうかです。',
          '太陽光をお持ちの場合、分配グラフは自家消費率を見る最も速い方法です — 自分の発電と系統からのどちらから使用量が来たかがわかります。',
          '個別機器のエントリにより、特定の家電の使用量が期待通りかを確認でき、配線ミスや設定ミスのセンサーを早期に発見するのにも役立ちます。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Energyダッシュボードが機能するにはスマートメーターが必要ですか？', a: 'いいえ — メイン電源のCTクランプはスマートメーターなしでも機能し、より一般的な構成です。電力会社と地域が対応していれば、スマートメーター連携が代替手段です。' },
          { q: '太陽光やバッテリーなしでEnergyダッシュボードを使えますか？', a: 'はい。系統消費量の追跡だけでも使用量とコストのグラフが得られます。太陽光とバッテリーのセクションは完全に任意で、後から追加できます。' },
          { q: '設定直後にダッシュボードが空なのはなぜですか？', a: 'Energyダッシュボードは1時間ごとにデータを集計するため、通常は完全な使用量グラフを表示するまでに丸1日かかります。これは想定通りです — 24時間後に再確認してください。' },
          { q: '地域の時間帯別料金が2つ以上の料金期間を持つ場合はどうなりますか？', a: 'Home Assistantの料金設定は、ピーク/オフピークだけでなく複数の料金期間に対応しています — 系統センサーのコスト設定の下で各時間帯とその料金を入力してください。' },
          { q: '設定をやり直さずに後から個別機器を追加できますか？', a: 'はい — 個別機器、太陽光、バッテリーはすべて、既に設定済みの系統センサーに影響を与えることなく、同じEnergy設定ページからいつでも独立して追加・削除できます。' },
          { q: 'このダッシュボードにはインターネット接続が必要ですか？', a: 'いいえ — センサーが設定されれば、Energyダッシュボードは完全にローカルのHome Assistantインスタンス上で動作し、インターネット障害時も動作し続けますが、選択したクラウドホスト型のセンサー連携があればそれは動作しません。' },
          { q: 'これは一般的なHome Assistantダッシュボードとどう違いますか？', a: 'Energyダッシュボードは、エネルギーセンサー専用に自動生成される目的特化型のビューです — 単位変換、コスト計算、分配グラフを自動的に処理します。手動で構築したダッシュボードでこれを再現するにはカスタムカードとテンプレートが必要になります。' },
          { q: '自動化はEnergyダッシュボードのデータを直接使えますか？', a: 'はい — Energyダッシュボードが読み取る基礎となるセンサーエンティティは標準のHome Assistantエンティティなので、どの自動化（ローカルエネルギー管理の概要にある負荷シフトの例を含む）もそれらを直接参照できます。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルなスマートホームのエネルギー管理](/ja/smart-home/local-smart-home-energy-management-2027) — 本ガイドが実装する概要記事',
          '[Home Assistant：完全な始め方ガイド](/ja/smart-home/home-assistant-getting-started) — 一般的な初回インストール設定',
          '[太陽光インバーターとヒートポンプのMatter連携](/ja/smart-home/matter-solar-inverter-heat-pump-integration) — 発電ハードウェアの接続',
          '[バルコニーソーラーをクラウドなしでHome Assistantに接続](/ja/balcony-solar/connect-balcony-solar-home-assistant-local) — クラスター横断：太陽光データの取り込み',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant Energyダッシュボード：完全設定ガイド（2027年）',
      description: '2027年版：Home AssistantのEnergyダッシュボードを設定する方法 — 系統・太陽光・バッテリー・機器センサーを追加し、コスト追跡を設定し、使用量グラフを読む。',
      url: 'https://www.promptquorum.com/ja/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energyダッシュボード' }, { '@type': 'Thing', name: 'エネルギー監視' }, { '@type': 'Thing', name: 'コスト追跡' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Home Assistant Energyダッシュボードの設定',
      description: 'Home Assistant内蔵のEnergyダッシュボードで系統・太陽光・バッテリー・個別機器のセンサーを設定する。',
      step: [
        { '@type': 'HowToStep', name: '系統センサーの追加', text: '設定→ダッシュボード→エネルギーに移動し、系統消費量センサーエンティティを追加します。' },
        { '@type': 'HowToStep', name: '太陽光とバッテリーの追加（任意）', text: 'そのハードウェアをお持ちの場合、太陽光発電とバッテリー充放電のセンサーエンティティを追加します。' },
        { '@type': 'HowToStep', name: '個別機器の追加（任意）', text: '各エネルギー監視スマートプラグまたは家電センサーを個別機器の下に追加します。' },
        { '@type': 'HowToStep', name: '料金プランの設定', text: 'コスト追跡のため、系統センサー設定の下で定額または時間帯別の料金プランを入力します。' },
        { '@type': 'HowToStep', name: 'データを待つ', text: 'グラフを読む前に、ダッシュボードが丸1日分の使用量を集計するまで少なくとも24時間待ちます。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Energyダッシュボードが機能するにはスマートメーターが必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — メイン電源のCTクランプはスマートメーターなしでも機能し、より一般的な構成です。' } },
        { '@type': 'Question', name: '太陽光やバッテリーなしでEnergyダッシュボードを使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。系統消費量の追跡だけでも使用量とコストのグラフが得られます。太陽光とバッテリーのセクションは任意です。' } },
        { '@type': 'Question', name: '設定直後にダッシュボードが空なのはなぜですか？', acceptedAnswer: { '@type': 'Answer', text: 'Energyダッシュボードは1時間ごとにデータを集計し、通常は完全な使用量グラフを表示するまでに丸1日かかります。' } },
        { '@type': 'Question', name: 'このダッシュボードにはインターネット接続が必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — センサーが設定されれば、Energyダッシュボードは完全にローカルのHome Assistantインスタンス上で動作します。' } },
        { '@type': 'Question', name: '自動化はEnergyダッシュボードのデータを直接使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい — 基礎となるセンサーエンティティは標準のHome Assistantエンティティで、どの自動化も直接参照できます。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-zh.webp',
    title: 'Home Assistant能源仪表盘：完整设置指南（2027年）',
    seoTitle: 'Home Assistant能源仪表盘设置（2027年）',
    intro:
      'Home Assistant内置的能源仪表盘可在一个本地视图中追踪电网用电、太阳能发电、电池状态和单个设备的用电情况——设置只需添加几个传感器实体，无需编写任何自动化代码。本指南将介绍如何添加电网传感器、（如果有的话）太阳能与电池传感器、单设备追踪，以及如何解读由此生成的成本和用电图表。',
    metaDescription:
      '2027年设置Home Assistant能源仪表盘：添加电网、太阳能、电池和设备传感器，配置成本追踪，读取用电图表。',
    twitterDescription:
      'Home Assistant能源仪表盘分步设置：电网传感器、太阳能/电池集成、逐设备追踪与成本配置。',
    readTime: '阅读需7分钟',
    educationalLevel: 'Beginner',
    audience: '首次设置能源追踪的Home Assistant用户',
    primaryTerm: 'home assistant 能源仪表盘 设置',
    targetKeywords: [
      'home assistant 能源仪表盘设置',
      '如何配置ha能源仪表盘',
      'home assistant 能源追踪',
      'home assistant 太阳能仪表盘',
      'home assistant 成本追踪 能源',
    ],
    leadAnswerBlock:
      '**设置Home Assistant能源仪表盘时，先添加一个电网用电传感器（在设置 → 仪表盘 → 能源中），然后再添加太阳能、电池和单设备传感器作为可选补充——每次添加只是让仪表盘指向一个已有的传感器实体，无需编写代码。** 传感器配置完成后，仪表盘会自动生成图表。',
    quickAnswerTop: {
      zh: {
        question: '如何设置Home Assistant的能源仪表盘？',
        answer:
          '在Home Assistant中进入设置 → 仪表盘 → 能源。先添加一个电网用电传感器——它可以来自CT钳表集成、智能电表集成，或任何以kWh上报能源的传感器实体。然后可以选择性地添加太阳能发电、电池充放电，以及（如果有计量的话）燃气/水表。对于单个设备，在同一个能源配置页面下把每个能源监测智能插座添加为"单个设备"。设置你的电价（固定电价或分时电价），这样仪表盘就能计算成本，而不仅仅是用量。',
        bullets: [
          '第一步：添加电网用电传感器（CT钳表或智能电表集成）',
          '第二步（可选）：添加太阳能发电和电池传感器',
          '第三步（可选）：添加单个设备——每个能源监测智能插座对应一条记录',
          '第四步：设置电价，让仪表盘显示成本而不只是kWh',
          '仪表盘至少需要24小时的数据后，图表才会变得有意义',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '开始之前', anchor: 'before-you-start' },
      { label: '添加电网传感器', anchor: 'grid-sensor' },
      { label: '添加太阳能与电池', anchor: 'solar-battery' },
      { label: '添加单个设备', anchor: 'individual-devices' },
      { label: '设置成本追踪', anchor: 'cost-tracking' },
      { label: '解读仪表盘', anchor: 'reading-dashboard' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '在设置 → 仪表盘 → 能源中，先添加一个电网用电传感器，再添加可选的太阳能、电池和单设备传感器，以及用于成本追踪的电价，即可设置Home Assistant的能源仪表盘。' },
      { type: 'plain-terms', content: '能源仪表盘是Home Assistant内置的一个界面，能把原始传感器读数转化为用电图表和成本估算。你无需编写任何代码——只需告诉它哪个现有传感器代表你的电网用电、太阳能板、电池以及各个被单独监测的设备，它就会据此绘制图表。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '前往设置 → 仪表盘 → 能源开始配置——无需编辑YAML',
          '先添加一个电网用电传感器（CT钳表或智能电表集成）——这是唯一必需的步骤',
          '太阳能、电池、燃气/水表和单个设备都是同一页面上的可选附加项',
          '设置你的电价（固定或分时），让仪表盘在显示用量的同时显示成本',
          '在期待有意义的图表之前至少等待24小时——仪表盘按小时汇总数据',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: '开始之前',
        content:
          '**在能源仪表盘有内容可显示之前，你至少需要一个以kWh上报能源（或以W上报功率，Home Assistant可将其积分为kWh）的传感器实体。**',
        items: [
          '这通常是一个CT钳表集成（许多品牌可直接向Home Assistant上报）、如果你的电力公司/地区支持的话可以是智能电表集成，或者是一个全屋监测器。',
          '如果你还没有任何能源传感器，请先参考本地智能家居能源管理概览和本地智能家居最佳硬件指南了解硬件选项，再回到这里。',
          '入门阶段你不需要太阳能、电池或任何单设备传感器——它们都是后续可以添加的。',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: '添加电网传感器',
        content:
          '**在设置 → 仪表盘 → 能源中，点击"电网"下的"添加用电量"，然后选择你的电网用电传感器实体。**',
        items: [
          '如果你的传感器上报的是功率（W）而不是能量（kWh），Home Assistant的黎曼求和积分助手会进行转换——能源仪表盘的设置流程会在需要时自动提示这一点。',
          '如果你有太阳能，还需标明你的电网传感器是否已经抵消了太阳能发电量（一些智能电表会这样做），还是上报的是总用电量——这会影响你是否需要一个单独的"回馈电网"传感器。',
          '仅这一步就足以让你开始看到基本的用电图表；本指南中的其余内容都是可选的细化设置。',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: '添加太阳能与电池',
        content:
          '**如果你有太阳能发电和/或电池储能，请在同一个能源配置页面上把它们作为独立的传感器实体添加——分别在"太阳能板"和"家庭电池储能"部分。**',
        items: [
          '太阳能发电需要一个专属的传感器实体，通常来自你逆变器的本地集成（参见Matter太阳能逆变器集成指南，或你逆变器已有的本地API集成）。',
          '电池储能需要两个传感器实体——流入电池的能量和流出的能量——这样仪表盘才能把充放电与电网、太阳能分开显示。',
          '两者都配置好后，仪表盘的能源分布图会显示在任意时刻你的用电量中有多少来自太阳能、电池或电网。',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: '添加单个设备',
        content:
          '**在"单个设备"下，添加每个你想单独追踪的能源监测智能插座或内置家电传感器——这能让你看清是哪台家电在推高你的用电量。**',
        items: [
          '任何以kWh上报能源的传感器实体都可以添加到这里，最常见的是安装在电动车充电器、热水器或大型家电上的能源监测智能插座。',
          '你不需要监测所有东西——参见本地能源管理概览，了解哪些设备值得单独追踪。',
          '单个设备会在仪表盘的用电明细中以独立条目的形式出现，方便你直接比较各家电。',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: '设置成本追踪',
        content:
          '**在电网用电传感器的设置下配置你的电价，把kWh用量转换为成本估算——可以是固定电价，也可以是分时电价计划。**',
        items: [
          '固定电价是每kWh的单一价格，只需输入一次。',
          '分时电价让你可以定义时段（例如高峰/非高峰时段），这样仪表盘的成本计算就能匹配你的实际账单——这也是负荷转移自动化（参见本地能源管理概览）所依据的信息。',
          '如果你的太阳能有上网电价（因向电网售电而获得报酬），请在太阳能传感器的设置下配置这一点，以便查看净成本而不仅仅是用电成本。',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: '解读仪表盘',
        content:
          '**仪表盘会显示日/周/月用电图表、能源分布图（电网 vs 太阳能 vs 电池）和成本汇总——在期待第一份完整一天的数据之前请给它24小时。**',
        items: [
          '用电图表让你可以比较不同日期或星期，从而发现规律——设置完成后一个不错的初步检查是，看你的电网用电是否在太阳能发电时段如预期般下降。',
          '如果你有太阳能，分布图是查看自用比例最快的方式——你的用电量中有多少来自自身发电、多少来自电网。',
          '单设备条目让你能核实某台具体家电的用电量是否符合预期，这也有助于及早发现接线错误或配置错误的传感器。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '能源仪表盘运行是否需要智能电表？', a: '不需要——主电源上的CT钳表无需智能电表即可工作，这也是更常见的配置方式。如果你的电力公司和地区支持，智能电表集成是一种替代方案。' },
          { q: '没有太阳能或电池能使用能源仪表盘吗？', a: '可以。仅电网用电追踪就能给你提供用量和成本图表。太阳能和电池部分完全是可选的，可以以后再添加。' },
          { q: '为什么设置完成后仪表盘是空的？', a: '能源仪表盘按小时汇总数据，因此通常需要一整天才能显示完整的用电图表。这是正常现象——请在24小时后再回来查看。' },
          { q: '如果我所在地区的分时电价有两个以上的时段怎么办？', a: 'Home Assistant的电价配置支持多个时段，不只是高峰/非高峰——在电网传感器的成本设置下输入每个时段及其电价。' },
          { q: '我能以后再添加单个设备而无需重做设置吗？', a: '可以——单个设备、太阳能和电池都可以随时从同一个能源配置页面独立添加或删除，不会影响已配置的电网传感器。' },
          { q: '这个仪表盘需要联网吗？', a: '不需要——传感器配置完成后，能源仪表盘完全运行在你本地的Home Assistant实例上，在网络中断期间仍会继续工作，尽管你选择使用的任何云托管传感器集成不会。' },
          { q: '这与通用的Home Assistant仪表盘有何不同？', a: '能源仪表盘是专为能源传感器打造、自动生成的视图——它会自动处理单位换算、成本计算和分布图，而手动搭建的仪表盘需要自定义卡片和模板才能复现这些功能。' },
          { q: '自动化能直接使用能源仪表盘的数据吗？', a: '可以——能源仪表盘读取的底层传感器实体是标准的Home Assistant实体，因此任何自动化（包括本地能源管理概览中的负荷转移示例）都可以直接引用它们。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[本地智能家居能源管理](/zh/smart-home/local-smart-home-energy-management-2027) — 本指南所实现的概览',
          '[Home Assistant：完整入门指南](/zh/smart-home/home-assistant-getting-started) — 通用的首次安装设置',
          '[太阳能逆变器与热泵的Matter集成](/zh/smart-home/matter-solar-inverter-heat-pump-integration) — 在本地连接发电硬件',
          '[将阳台光伏无云端连接到Home Assistant](/zh/balcony-solar/connect-balcony-solar-home-assistant-local) — 跨专题：接入太阳能数据',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant能源仪表盘：完整设置指南（2027年）',
      description: '2027年设置Home Assistant能源仪表盘：添加电网、太阳能、电池和设备传感器，配置成本追踪，读取用电图表。',
      url: 'https://www.promptquorum.com/zh/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant能源仪表盘' }, { '@type': 'Thing', name: '能源监测' }, { '@type': 'Thing', name: '成本追踪' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '设置Home Assistant能源仪表盘',
      description: '在Home Assistant内置的能源仪表盘中配置电网、太阳能、电池和单个设备传感器。',
      step: [
        { '@type': 'HowToStep', name: '添加电网传感器', text: '前往设置 → 仪表盘 → 能源，添加你的电网用电传感器实体。' },
        { '@type': 'HowToStep', name: '添加太阳能与电池（可选）', text: '如果你有相应硬件，添加太阳能发电和电池充放电传感器实体。' },
        { '@type': 'HowToStep', name: '添加单个设备（可选）', text: '在"单个设备"下添加每个能源监测智能插座或家电传感器。' },
        { '@type': 'HowToStep', name: '配置电价', text: '在电网传感器设置下输入你的固定电价或分时电价，以进行成本追踪。' },
        { '@type': 'HowToStep', name: '等待数据', text: '在读取图表前，至少给仪表盘24小时来汇总完整一天的用量。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '能源仪表盘运行是否需要智能电表？', acceptedAnswer: { '@type': 'Answer', text: '不需要——主电源上的CT钳表无需智能电表即可工作，这也是更常见的配置方式。' } },
        { '@type': 'Question', name: '没有太阳能或电池能使用能源仪表盘吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。仅电网用电追踪就能提供用量和成本图表；太阳能和电池部分是可选的。' } },
        { '@type': 'Question', name: '为什么设置完成后仪表盘是空的？', acceptedAnswer: { '@type': 'Answer', text: '能源仪表盘按小时汇总数据，通常需要一整天才能显示完整的用电图表。' } },
        { '@type': 'Question', name: '这个仪表盘需要联网吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要——传感器配置完成后，能源仪表盘完全运行在你本地的Home Assistant实例上。' } },
        { '@type': 'Question', name: '自动化能直接使用能源仪表盘的数据吗？', acceptedAnswer: { '@type': 'Answer', text: '可以——底层传感器实体是标准的Home Assistant实体，任何自动化都可以直接引用它们。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-es.webp',
    title: 'Panel de Energía de Home Assistant: guía completa de configuración (2027)',
    seoTitle: 'Configurar el panel de Energía de Home Assistant (2027)',
    intro:
      'El panel de Energía integrado de Home Assistant rastrea el consumo de red, la producción solar, el estado de la batería y el uso por dispositivo individual en una única vista local — la configuración consiste en añadir unas pocas entidades sensor, no en escribir código de automatización. Esta guía explica cómo añadir un sensor de red, sensores de solar y batería si los tienes, seguimiento de dispositivos individuales, y cómo leer los gráficos de costo y uso resultantes.',
    metaDescription:
      'Configura el panel de Energía de Home Assistant en 2027: añade sensores de red, solar, batería y dispositivos, configura el seguimiento de costos, y lee los gráficos de uso.',
    twitterDescription:
      'Configuración paso a paso del panel de Energía de Home Assistant: sensor de red, integración solar/batería, seguimiento por dispositivo, y configuración de costos.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Usuarios de Home Assistant configurando el seguimiento energético por primera vez',
    primaryTerm: 'configuracion panel energia home assistant',
    targetKeywords: [
      'configuracion panel energia home assistant',
      'como configurar panel energia ha',
      'seguimiento energia home assistant',
      'panel solar home assistant',
      'seguimiento costo energia home assistant',
    ],
    leadAnswerBlock:
      '**Configura el panel de Energía de Home Assistant añadiendo primero un sensor de consumo de red (desde Ajustes → Paneles → Energía), luego añadiendo sensores de solar, batería y dispositivo individual como extras opcionales — cada adición solo apunta el panel a una entidad sensor existente, sin necesidad de código.** El panel construye sus gráficos automáticamente una vez que los sensores están configurados.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo configuro el panel de Energía de Home Assistant?',
        answer:
          'Ve a Ajustes → Paneles → Energía en Home Assistant. Añade primero un sensor de consumo de red — este puede venir de una integración de pinza amperométrica, una integración de medidor inteligente, o cualquier entidad sensor que reporte energía en kWh. Luego añade opcionalmente la producción solar, la carga/descarga de batería, y gas/agua si están medidos. Para dispositivos individuales, añade cada enchufe inteligente que mida energía como un "dispositivo individual" en la misma página de configuración de Energía. Configura tu tarifa eléctrica (tasa fija o por horario) para que el panel pueda calcular el costo, no solo el uso.',
        bullets: [
          'Paso 1: añadir un sensor de consumo de red (pinza amperométrica o integración de medidor inteligente)',
          'Paso 2 (opcional): añadir sensores de producción solar y batería',
          'Paso 3 (opcional): añadir dispositivos individuales — una entrada por cada enchufe inteligente que mida energía',
          'Paso 4: configurar tu tarifa para que el panel muestre el costo, no solo los kWh',
          'El panel necesita al menos 24 horas de datos antes de que los gráficos sean significativos',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Antes de empezar', anchor: 'before-you-start' },
      { label: 'Añadir un sensor de red', anchor: 'grid-sensor' },
      { label: 'Añadir solar y batería', anchor: 'solar-battery' },
      { label: 'Añadir dispositivos individuales', anchor: 'individual-devices' },
      { label: 'Configurar el seguimiento de costos', anchor: 'cost-tracking' },
      { label: 'Leer el panel', anchor: 'reading-dashboard' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Configura el panel de Energía de Home Assistant desde Ajustes → Paneles → Energía añadiendo primero un sensor de consumo de red, luego sensores opcionales de solar, batería y dispositivo individual, y tu tarifa eléctrica para el seguimiento de costos.' },
      { type: 'plain-terms', content: 'El panel de Energía es una pantalla integrada de Home Assistant que convierte las lecturas brutas de sensores en gráficos de uso y estimaciones de costo. No escribes código — solo le indicas qué sensor existente representa tu red eléctrica, tus paneles solares, tu batería, y cualquier dispositivo monitoreado individualmente, y dibuja los gráficos a partir de ahí.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Ve a Ajustes → Paneles → Energía para iniciar la configuración — no se requiere editar YAML',
          'Añade primero un sensor de consumo de red (pinza amperométrica o integración de medidor inteligente) — este es el único paso requerido',
          'Solar, batería, gas/agua y dispositivos individuales son todas adiciones opcionales en la misma página',
          'Configura tu tarifa eléctrica (fija o por horario) para que el panel muestre el costo junto con el uso',
          'Dale al menos 24 horas antes de esperar gráficos significativos — el panel agrega datos por hora',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'Antes de empezar',
        content:
          '**Necesitas al menos una entidad sensor que reporte energía en kWh (o potencia en W, que Home Assistant puede integrar en kWh) antes de que el panel de Energía tenga algo que mostrar.**',
        items: [
          'Esto suele ser una integración de pinza amperométrica (muchas marcas reportan directamente a Home Assistant), una integración de medidor inteligente si tu compañía eléctrica/región soporta una, o un monitor de toda la casa.',
          'Si aún no tienes ningún sensor de energía, consulta el resumen sobre gestión local de energía en el hogar inteligente y la guía del mejor hardware para un hogar inteligente local para opciones de hardware antes de volver aquí.',
          'No necesitas solar, una batería, o sensores de dispositivo individual para empezar — esos son adicionales.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Añadir un sensor de red',
        content:
          '**En Ajustes → Paneles → Energía, haz clic en "Añadir consumo" bajo Red eléctrica, y selecciona tu entidad sensor de consumo de red.**',
        items: [
          'Si tu sensor reporta potencia (W) en lugar de energía (kWh), el ayudante de integración de suma de Riemann de Home Assistant lo convierte — el flujo de configuración del panel de Energía lo solicita automáticamente cuando es necesario.',
          'Si tienes solar, marca también si tu sensor de red ya compensa la producción solar (algunos medidores inteligentes lo hacen) o reporta el consumo bruto — esto afecta si necesitas un sensor separado de "retorno a la red".',
          'Este único paso es suficiente para empezar a ver un gráfico de uso básico; todo lo demás en esta guía es un refinamiento opcional.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: 'Añadir solar y batería',
        content:
          '**Si tienes generación solar y/o almacenamiento por batería, añádelos como entidades sensor separadas en la misma página de configuración de Energía — secciones "Paneles solares" y "Almacenamiento de batería doméstica".**',
        items: [
          'La producción solar necesita su propia entidad sensor, típicamente de la integración local de tu inversor (ver la guía de integración Matter de inversor solar, o la integración API local existente de tu inversor).',
          'El almacenamiento por batería necesita dos entidades sensor — energía que entra en la batería y energía que sale — para que el panel pueda mostrar carga/descarga por separado de la red y el solar.',
          'Una vez que ambos estén configurados, el gráfico de distribución de energía del panel muestra cuánto de tu consumo vino de solar, batería, o red en cualquier momento.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: 'Añadir dispositivos individuales',
        content:
          '**Bajo "Dispositivos individuales," añade cada enchufe inteligente que mida energía o sensor de electrodoméstico integrado que quieras rastrear por separado — esto es lo que te permite ver qué electrodoméstico está impulsando tu consumo.**',
        items: [
          'Cualquier entidad sensor que reporte energía en kWh puede añadirse aquí, más comúnmente un enchufe inteligente que mida energía en un cargador de VE, calentador de agua, o electrodoméstico principal.',
          'No necesitas monitorear todo — consulta el resumen de gestión local de energía para orientación sobre qué dispositivos vale la pena rastrear individualmente.',
          'Los dispositivos individuales aparecen como líneas propias en el desglose de uso del panel, permitiéndote comparar electrodomésticos directamente.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Configurar el seguimiento de costos',
        content:
          '**Configura tu tarifa eléctrica bajo los ajustes del sensor de consumo de red para convertir el uso en kWh en estimaciones de costo — ya sea una tasa fija o un horario por franjas.**',
        items: [
          'Una tasa fija es un único precio por kWh, ingresado una vez.',
          'Una tarifa por horario te permite definir franjas de tarifa (por ejemplo, horas pico/valle) para que el cálculo de costo del panel coincida con tu factura real — esto es también en lo que se basan las automatizaciones de desplazamiento de carga (ver el resumen de gestión local de energía).',
          'Si tienes solar con una tarifa de inyección (pagada por exportar a la red), configúrala bajo los ajustes del sensor solar para ver el costo neto, no solo el costo de consumo.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Leer el panel',
        content:
          '**El panel muestra un gráfico de uso diario/semanal/mensual, un gráfico de distribución de energía (red vs. solar vs. batería), y un resumen de costos — dale 24 horas antes de esperar el primer día completo de datos.**',
        items: [
          'El gráfico de uso te permite comparar días o semanas para detectar patrones — una buena primera verificación tras la configuración es si tu consumo de red baja durante las horas de generación solar como se espera.',
          'El gráfico de distribución es la forma más rápida de ver la tasa de autoconsumo si tienes solar — cuánto de tu uso vino de tu propia generación frente a la red.',
          'Las entradas de dispositivo individual te permiten verificar que el uso de un electrodoméstico específico coincide con las expectativas, lo cual también es útil para detectar temprano un sensor mal cableado o mal configurado.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito un medidor inteligente para que funcione el panel de Energía?', a: 'No — una pinza amperométrica en tu acometida principal funciona sin medidor inteligente y es la configuración más común. Una integración de medidor inteligente es una alternativa si tu compañía eléctrica y región soportan una.' },
          { q: '¿Puedo usar el panel de Energía sin solar o batería?', a: 'Sí. El seguimiento de consumo de red por sí solo te da gráficos de uso y costo. Las secciones de solar y batería son completamente opcionales y pueden añadirse más tarde.' },
          { q: '¿Por qué mi panel está vacío justo después de configurarlo?', a: 'El panel de Energía agrega datos por hora, así que normalmente necesita un día completo antes de mostrar un gráfico de uso completo. Esto es esperado — vuelve a revisar después de 24 horas.' },
          { q: '¿Qué pasa si mi región usa una tarifa por horario con más de dos períodos de tasa?', a: 'La configuración de tarifas de Home Assistant soporta múltiples períodos de tasa, no solo pico/valle — ingresa cada franja y su tasa bajo los ajustes de costo del sensor de red.' },
          { q: '¿Puedo añadir dispositivos individuales más tarde sin rehacer la configuración?', a: 'Sí — dispositivos individuales, solar y batería pueden añadirse o eliminarse independientemente en cualquier momento desde la misma página de configuración de Energía, sin afectar el sensor de red ya configurado.' },
          { q: '¿Este panel requiere conexión a internet?', a: 'No — una vez que los sensores están configurados, el panel de Energía funciona completamente en tu instancia local de Home Assistant y continúa funcionando durante un corte de internet, aunque cualquier integración de sensor alojada en la nube que hayas elegido usar no lo haría.' },
          { q: '¿En qué se diferencia esto de un panel genérico de Home Assistant?', a: 'El panel de Energía es una vista generada automáticamente y diseñada específicamente para sensores de energía — maneja la conversión de unidades, el cálculo de costos, y el gráfico de distribución automáticamente, lo cual un panel construido manualmente necesitaría tarjetas y plantillas personalizadas para replicar.' },
          { q: '¿Pueden las automatizaciones usar directamente los datos del panel de Energía?', a: 'Sí — las entidades sensor subyacentes de las que lee el panel de Energía son entidades estándar de Home Assistant, así que cualquier automatización (incluyendo los ejemplos de desplazamiento de carga en el resumen de gestión local de energía) puede referenciarlas directamente.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Gestión local de energía en el hogar inteligente](/es/smart-home/local-smart-home-energy-management-2027) — el resumen que esta guía implementa',
          '[Home Assistant: guía completa de inicio](/es/smart-home/home-assistant-getting-started) — configuración general de primera instalación',
          '[Integración Matter para inversores solares y bombas de calor](/es/smart-home/matter-solar-inverter-heat-pump-integration) — conectar el hardware de generación',
          '[Conectar el solar de balcón a Home Assistant, sin nube](/es/balcony-solar/connect-balcony-solar-home-assistant-local) — entre clústers: alimentar datos solares',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Panel de Energía de Home Assistant: guía completa de configuración (2027)',
      description: 'Configura el panel de Energía de Home Assistant en 2027: añade sensores de red, solar, batería y dispositivos, configura el seguimiento de costos, y lee los gráficos de uso.',
      url: 'https://www.promptquorum.com/es/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Panel de Energía de Home Assistant' }, { '@type': 'Thing', name: 'Monitoreo energético' }, { '@type': 'Thing', name: 'Seguimiento de costos' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Configurar el panel de Energía de Home Assistant',
      description: 'Configura los sensores de red, solar, batería y dispositivo individual en el panel de Energía integrado de Home Assistant.',
      step: [
        { '@type': 'HowToStep', name: 'Añadir un sensor de red', text: 'Ve a Ajustes → Paneles → Energía y añade tu entidad sensor de consumo de red.' },
        { '@type': 'HowToStep', name: 'Añadir solar y batería (opcional)', text: 'Añade entidades sensor de producción solar y carga/descarga de batería si tienes ese hardware.' },
        { '@type': 'HowToStep', name: 'Añadir dispositivos individuales (opcional)', text: 'Añade cada enchufe inteligente que mida energía o sensor de electrodoméstico bajo Dispositivos individuales.' },
        { '@type': 'HowToStep', name: 'Configura tu tarifa', text: 'Ingresa tu tasa fija o tarifa por horario bajo los ajustes del sensor de red para el seguimiento de costos.' },
        { '@type': 'HowToStep', name: 'Esperar datos', text: 'Permite al menos 24 horas para que el panel agregue un día completo de uso antes de leer los gráficos.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito un medidor inteligente para que funcione el panel de Energía?', acceptedAnswer: { '@type': 'Answer', text: 'No — una pinza amperométrica en tu acometida principal funciona sin medidor inteligente y es la configuración más común.' } },
        { '@type': 'Question', name: '¿Puedo usar el panel de Energía sin solar o batería?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. El seguimiento de consumo de red por sí solo da gráficos de uso y costo; las secciones de solar y batería son opcionales.' } },
        { '@type': 'Question', name: '¿Por qué mi panel está vacío justo después de configurarlo?', acceptedAnswer: { '@type': 'Answer', text: 'El panel de Energía agrega datos por hora y normalmente necesita un día completo antes de mostrar un gráfico completo.' } },
        { '@type': 'Question', name: '¿Este panel requiere conexión a internet?', acceptedAnswer: { '@type': 'Answer', text: 'No — una vez configurados los sensores, el panel de Energía funciona completamente en tu instancia local de Home Assistant.' } },
        { '@type': 'Question', name: '¿Pueden las automatizaciones usar directamente los datos del panel de Energía?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — las entidades sensor subyacentes son entidades estándar de Home Assistant que cualquier automatización puede referenciar directamente.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-pt.webp',
    title: 'Painel de Energia do Home Assistant: guia completo de configuração (2027)',
    seoTitle: 'Configurar o painel de Energia do Home Assistant (2027)',
    intro:
      'O painel de Energia embutido do Home Assistant rastreia consumo de rede, geração solar, estado da bateria e uso por dispositivo individual em uma única visão local — a configuração consiste em adicionar algumas entidades de sensor, não em escrever código de automação. Este guia percorre como adicionar um sensor de rede, sensores de solar e bateria se você tiver, rastreamento de dispositivos individuais, e como ler os gráficos de custo e uso resultantes.',
    metaDescription:
      'Configure o painel de Energia do Home Assistant em 2027: adicione sensores de rede, solar, bateria e dispositivos, configure o rastreamento de custos, e leia os gráficos de uso.',
    twitterDescription:
      'Configuração passo a passo do painel de Energia do Home Assistant: sensor de rede, integração solar/bateria, rastreamento por dispositivo, e configuração de custos.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Usuários do Home Assistant configurando rastreamento de energia pela primeira vez',
    primaryTerm: 'configuracao painel energia home assistant',
    targetKeywords: [
      'configuracao painel energia home assistant',
      'como configurar painel energia ha',
      'rastreamento energia home assistant',
      'painel solar home assistant',
      'rastreamento custo energia home assistant',
    ],
    leadAnswerBlock:
      '**Configure o painel de Energia do Home Assistant adicionando primeiro um sensor de consumo de rede (em Configurações → Painéis → Energia), depois adicionando sensores de solar, bateria e dispositivo individual como extras opcionais — cada adição apenas aponta o painel para uma entidade de sensor existente, sem necessidade de código.** O painel constrói seus gráficos automaticamente assim que os sensores são configurados.',
    quickAnswerTop: {
      pt: {
        question: 'Como configuro o painel de Energia do Home Assistant?',
        answer:
          'Vá em Configurações → Painéis → Energia no Home Assistant. Adicione primeiro um sensor de consumo de rede — este pode vir de uma integração de alicate amperímetro, uma integração de medidor inteligente, ou qualquer entidade de sensor que reporte energia em kWh. Depois adicione opcionalmente a produção solar, a carga/descarga de bateria, e gás/água se medidos. Para dispositivos individuais, adicione cada tomada inteligente que mede energia como um "dispositivo individual" na mesma página de configuração de Energia. Configure sua tarifa elétrica (taxa fixa ou por horário) para que o painel possa calcular o custo, não só o uso.',
        bullets: [
          'Passo 1: adicionar um sensor de consumo de rede (alicate amperímetro ou integração de medidor inteligente)',
          'Passo 2 (opcional): adicionar sensores de produção solar e bateria',
          'Passo 3 (opcional): adicionar dispositivos individuais — uma entrada por tomada inteligente que mede energia',
          'Passo 4: configurar sua tarifa para que o painel mostre o custo, não só os kWh',
          'O painel precisa de pelo menos 24 horas de dados antes que os gráficos se tornem significativos',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Antes de começar', anchor: 'before-you-start' },
      { label: 'Adicionando um sensor de rede', anchor: 'grid-sensor' },
      { label: 'Adicionando solar e bateria', anchor: 'solar-battery' },
      { label: 'Adicionando dispositivos individuais', anchor: 'individual-devices' },
      { label: 'Configurando o rastreamento de custos', anchor: 'cost-tracking' },
      { label: 'Lendo o painel', anchor: 'reading-dashboard' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Configure o painel de Energia do Home Assistant em Configurações → Painéis → Energia adicionando primeiro um sensor de consumo de rede, depois sensores opcionais de solar, bateria e dispositivo individual, e sua tarifa elétrica para o rastreamento de custos.' },
      { type: 'plain-terms', content: 'O painel de Energia é uma tela embutida do Home Assistant que transforma leituras brutas de sensores em gráficos de uso e estimativas de custo. Você não escreve código — apenas informa qual sensor existente representa sua rede elétrica, seus painéis solares, sua bateria, e quaisquer dispositivos monitorados individualmente, e ele desenha os gráficos a partir daí.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Vá em Configurações → Painéis → Energia para iniciar a configuração — nenhuma edição de YAML necessária',
          'Adicione primeiro um sensor de consumo de rede (alicate amperímetro ou integração de medidor inteligente) — este é o único passo obrigatório',
          'Solar, bateria, gás/água e dispositivos individuais são todas adições opcionais na mesma página',
          'Configure sua tarifa elétrica (fixa ou por horário) para que o painel mostre o custo junto com o uso',
          'Dê pelo menos 24 horas antes de esperar gráficos significativos — o painel agrega dados por hora',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'Antes de começar',
        content:
          '**Você precisa de pelo menos uma entidade de sensor reportando energia em kWh (ou potência em W, que o Home Assistant pode integrar em kWh) antes que o painel de Energia tenha algo para exibir.**',
        items: [
          'Isso geralmente é uma integração de alicate amperímetro (muitas marcas reportam diretamente ao Home Assistant), uma integração de medidor inteligente se sua concessionária/região suportar uma, ou um monitor de casa toda.',
          'Se você ainda não tem nenhum sensor de energia, veja a visão geral de gestão local de energia na casa inteligente e o guia do melhor hardware para uma casa inteligente local para opções de hardware antes de voltar aqui.',
          'Você não precisa de solar, uma bateria, ou sensores de dispositivo individual para começar — esses são adicionais.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Adicionando um sensor de rede',
        content:
          '**Em Configurações → Painéis → Energia, clique em "Adicionar consumo" sob Rede elétrica, e selecione sua entidade de sensor de consumo de rede.**',
        items: [
          'Se seu sensor reporta potência (W) em vez de energia (kWh), o auxiliar de integração de soma de Riemann do Home Assistant converte isso — o fluxo de configuração do painel de Energia solicita isso automaticamente quando necessário.',
          'Se você tem solar, marque também se seu sensor de rede já compensa a produção solar (alguns medidores inteligentes fazem isso) ou reporta o consumo bruto — isso afeta se você precisa de um sensor separado de "retorno à rede".',
          'Esse único passo já é suficiente para começar a ver um gráfico de uso básico; tudo o mais neste guia é refinamento opcional.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: 'Adicionando solar e bateria',
        content:
          '**Se você tem geração solar e/ou armazenamento por bateria, adicione-os como entidades de sensor separadas na mesma página de configuração de Energia — seções "Painéis solares" e "Armazenamento de bateria doméstica".**',
        items: [
          'A produção solar precisa de sua própria entidade de sensor, tipicamente da integração local do seu inversor (veja o guia de integração Matter de inversor solar, ou a integração de API local já existente do seu inversor).',
          'O armazenamento por bateria precisa de duas entidades de sensor — energia entrando na bateria e energia saindo — para que o painel possa mostrar carga/descarga separadamente da rede e do solar.',
          'Assim que ambos estiverem configurados, o gráfico de distribuição de energia do painel mostra quanto do seu consumo veio de solar, bateria, ou rede em qualquer momento.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: 'Adicionando dispositivos individuais',
        content:
          '**Em "Dispositivos individuais," adicione cada tomada inteligente que mede energia ou sensor de eletrodoméstico embutido que você quer rastrear separadamente — isso é o que permite ver qual eletrodoméstico está impulsionando seu consumo.**',
        items: [
          'Qualquer entidade de sensor reportando energia em kWh pode ser adicionada aqui, mais comumente uma tomada inteligente que mede energia em um carregador de VE, aquecedor de água, ou eletrodoméstico principal.',
          'Você não precisa monitorar tudo — veja a visão geral de gestão local de energia para orientação sobre quais dispositivos valem a pena rastrear individualmente.',
          'Dispositivos individuais aparecem como itens de linha próprios no detalhamento de uso do painel, permitindo comparar eletrodomésticos diretamente.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Configurando o rastreamento de custos',
        content:
          '**Configure sua tarifa elétrica nas configurações do sensor de consumo de rede para transformar o uso em kWh em estimativas de custo — seja uma taxa fixa ou um horário por faixas.**',
        items: [
          'Uma taxa fixa é um único preço por kWh, inserido uma vez.',
          'Uma tarifa por horário permite definir janelas de tarifa (por exemplo, horários de pico/fora de pico) para que o cálculo de custo do painel corresponda à sua conta real — isso também é o que as automações de deslocamento de carga (veja a visão geral de gestão local de energia) usam como base.',
          'Se você tem solar com tarifa de injeção (pago por exportar para a rede), configure isso nas configurações do sensor solar para ver o custo líquido, não só o custo de consumo.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Lendo o painel',
        content:
          '**O painel mostra um gráfico de uso diário/semanal/mensal, um gráfico de distribuição de energia (rede vs. solar vs. bateria), e um resumo de custos — dê 24 horas antes de esperar o primeiro dia completo de dados.**',
        items: [
          'O gráfico de uso permite comparar dias ou semanas para identificar padrões — uma boa primeira verificação após a configuração é se seu consumo de rede cai durante os horários de geração solar como esperado.',
          'O gráfico de distribuição é a forma mais rápida de ver a taxa de autoconsumo se você tem solar — quanto do seu uso veio da sua própria geração versus a rede.',
          'As entradas de dispositivo individual permitem verificar se o uso de um eletrodoméstico específico corresponde às expectativas, o que também é útil para detectar cedo um sensor mal cabeado ou mal configurado.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de um medidor inteligente para o painel de Energia funcionar?', a: 'Não — um alicate amperímetro na sua entrada principal funciona sem medidor inteligente e é a configuração mais comum. Uma integração de medidor inteligente é uma alternativa se sua concessionária e região suportarem uma.' },
          { q: 'Posso usar o painel de Energia sem solar ou bateria?', a: 'Sim. O rastreamento de consumo de rede sozinho já dá gráficos de uso e custo. As seções de solar e bateria são totalmente opcionais e podem ser adicionadas depois.' },
          { q: 'Por que meu painel está vazio logo após a configuração?', a: 'O painel de Energia agrega dados por hora, então normalmente precisa de um dia completo antes de mostrar um gráfico de uso completo. Isso é esperado — confira novamente após 24 horas.' },
          { q: 'E se minha região usa uma tarifa por horário com mais de dois períodos de taxa?', a: 'A configuração de tarifa do Home Assistant suporta múltiplos períodos de taxa, não só pico/fora de pico — insira cada janela e sua taxa nas configurações de custo do sensor de rede.' },
          { q: 'Posso adicionar dispositivos individuais depois sem refazer a configuração?', a: 'Sim — dispositivos individuais, solar e bateria podem todos ser adicionados ou removidos independentemente a qualquer momento na mesma página de configuração de Energia, sem afetar o sensor de rede já configurado.' },
          { q: 'Este painel precisa de conexão à internet?', a: 'Não — assim que os sensores estão configurados, o painel de Energia roda inteiramente na sua instância local do Home Assistant e continua funcionando durante uma queda de internet, embora qualquer integração de sensor hospedada na nuvem que você tenha escolhido usar não continuaria.' },
          { q: 'Como isso difere de um painel genérico do Home Assistant?', a: 'O painel de Energia é uma visão gerada automaticamente e feita especificamente para sensores de energia — ele lida com conversão de unidades, cálculo de custo, e o gráfico de distribuição automaticamente, o que um painel construído manualmente precisaria de cartões e modelos personalizados para replicar.' },
          { q: 'As automações podem usar os dados do painel de Energia diretamente?', a: 'Sim — as entidades de sensor subjacentes que o painel de Energia lê são entidades padrão do Home Assistant, então qualquer automação (incluindo os exemplos de deslocamento de carga na visão geral de gestão local de energia) pode referenciá-las diretamente.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Gestão local de energia na casa inteligente](/pt/smart-home/local-smart-home-energy-management-2027) — a visão geral que este guia implementa',
          '[Home Assistant: guia completo de início](/pt/smart-home/home-assistant-getting-started) — configuração geral de primeira instalação',
          '[Integração Matter para inversores solares e bombas de calor](/pt/smart-home/matter-solar-inverter-heat-pump-integration) — conectando hardware de geração',
          '[Conectar energia solar de varanda ao Home Assistant, sem nuvem](/pt/balcony-solar/connect-balcony-solar-home-assistant-local) — entre clusters: alimentando dados solares',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Painel de Energia do Home Assistant: guia completo de configuração (2027)',
      description: 'Configure o painel de Energia do Home Assistant em 2027: adicione sensores de rede, solar, bateria e dispositivos, configure o rastreamento de custos, e leia os gráficos de uso.',
      url: 'https://www.promptquorum.com/pt/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Painel de Energia do Home Assistant' }, { '@type': 'Thing', name: 'Monitoramento energético' }, { '@type': 'Thing', name: 'Rastreamento de custos' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Configurar o painel de Energia do Home Assistant',
      description: 'Configure os sensores de rede, solar, bateria e dispositivo individual no painel de Energia embutido do Home Assistant.',
      step: [
        { '@type': 'HowToStep', name: 'Adicionar um sensor de rede', text: 'Vá em Configurações → Painéis → Energia e adicione sua entidade de sensor de consumo de rede.' },
        { '@type': 'HowToStep', name: 'Adicionar solar e bateria (opcional)', text: 'Adicione entidades de sensor de produção solar e carga/descarga de bateria se você tiver esse hardware.' },
        { '@type': 'HowToStep', name: 'Adicionar dispositivos individuais (opcional)', text: 'Adicione cada tomada inteligente que mede energia ou sensor de eletrodoméstico em Dispositivos individuais.' },
        { '@type': 'HowToStep', name: 'Configure sua tarifa', text: 'Insira sua taxa fixa ou tarifa por horário nas configurações do sensor de rede para o rastreamento de custos.' },
        { '@type': 'HowToStep', name: 'Aguardar dados', text: 'Permita pelo menos 24 horas para o painel agregar um dia completo de uso antes de ler os gráficos.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de um medidor inteligente para o painel de Energia funcionar?', acceptedAnswer: { '@type': 'Answer', text: 'Não — um alicate amperímetro na sua entrada principal funciona sem medidor inteligente e é a configuração mais comum.' } },
        { '@type': 'Question', name: 'Posso usar o painel de Energia sem solar ou bateria?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O rastreamento de consumo de rede sozinho já dá gráficos de uso e custo; as seções de solar e bateria são opcionais.' } },
        { '@type': 'Question', name: 'Por que meu painel está vazio logo após a configuração?', acceptedAnswer: { '@type': 'Answer', text: 'O painel de Energia agrega dados por hora e normalmente precisa de um dia completo antes de mostrar um gráfico completo.' } },
        { '@type': 'Question', name: 'Este painel precisa de conexão à internet?', acceptedAnswer: { '@type': 'Answer', text: 'Não — assim que os sensores estão configurados, o painel de Energia roda inteiramente na sua instância local do Home Assistant.' } },
        { '@type': 'Question', name: 'As automações podem usar os dados do painel de Energia diretamente?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — as entidades de sensor subjacentes são entidades padrão do Home Assistant que qualquer automação pode referenciar diretamente.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-ar.webp',
    title: 'لوحة Energy في Home Assistant: دليل الإعداد الكامل (⁨2027⁩)',
    seoTitle: 'إعداد لوحة Energy في Home Assistant (⁨2027⁩)',
    intro:
      'تتبع لوحة Energy المدمجة في Home Assistant استهلاك الشبكة، والإنتاج الشمسي، وحالة البطارية، واستخدام الأجهزة الفردية في عرض محلي واحد — يتطلب الإعداد إضافة بضع كيانات مستشعر، وليس كتابة أي كود أتمتة. يستعرض هذا الدليل إضافة مستشعر شبكة، ومستشعرات شمسية وبطارية إن وُجدت، وتتبع الأجهزة الفردية، وقراءة رسوم التكلفة والاستخدام البيانية الناتجة.',
    metaDescription:
      'أعدّ لوحة Energy في Home Assistant لعام 2027: أضف مستشعرات الشبكة والطاقة الشمسية والبطارية والأجهزة، واضبط تتبع التكلفة، واقرأ رسوم الاستخدام البيانية.',
    twitterDescription:
      'إعداد لوحة Energy في Home Assistant خطوة بخطوة: مستشعر الشبكة، دمج الطاقة الشمسية/البطارية، التتبع لكل جهاز، وإعداد التكلفة.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مستخدمو Home Assistant الذين يعدّون تتبع الطاقة لأول مرة',
    primaryTerm: 'home assistant energy dashboard setup',
    targetKeywords: [
      'إعداد لوحة energy في home assistant',
      'كيفية ضبط لوحة energy في ha',
      'تتبع الطاقة home assistant',
      'لوحة الطاقة الشمسية home assistant',
      'تتبع تكلفة الطاقة home assistant',
    ],
    leadAnswerBlock:
      '**أعدّ لوحة Energy في Home Assistant بإضافة مستشعر استهلاك من الشبكة أولًا (من الإعدادات ← لوحات المعلومات ← الطاقة)، ثم إضافة مستشعرات الطاقة الشمسية والبطارية والأجهزة الفردية كإضافات اختيارية — كل إضافة توجّه اللوحة فقط إلى كيان مستشعر موجود، دون الحاجة إلى برمجة.** تبني اللوحة رسومها البيانية تلقائيًا بمجرد ضبط المستشعرات.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أُعدّ لوحة Energy في Home Assistant؟',
        answer:
          'اذهب إلى الإعدادات ← لوحات المعلومات ← الطاقة في Home Assistant. أضف أولًا مستشعر استهلاك من الشبكة — يمكن أن يأتي هذا من دمج مشبك تيار، أو دمج عداد ذكي، أو أي كيان مستشعر يبلّغ عن الطاقة بوحدة kWh. ثم أضف اختياريًا إنتاج الطاقة الشمسية، وشحن/تفريغ البطارية، والغاز/الماء إن كانا مُقاسين. للأجهزة الفردية، أضف كل مقبس ذكي يقيس الطاقة كـ"جهاز فردي" ضمن نفس صفحة إعداد الطاقة. اضبط تعرفة الكهرباء لديك (سعر ثابت أو حسب الوقت) حتى تتمكن اللوحة من حساب التكلفة، لا الاستخدام فقط.',
        bullets: [
          'الخطوة 1: إضافة مستشعر استهلاك من الشبكة (مشبك تيار أو دمج عداد ذكي)',
          'الخطوة 2 (اختيارية): إضافة مستشعرات إنتاج الطاقة الشمسية والبطارية',
          'الخطوة 3 (اختيارية): إضافة أجهزة فردية — إدخال واحد لكل مقبس ذكي يقيس الطاقة',
          'الخطوة 4: ضبط التعرفة حتى تعرض اللوحة التكلفة، لا كيلوواط ساعة فقط',
          'تحتاج اللوحة إلى 24 ساعة على الأقل من البيانات قبل أن تصبح الرسوم البيانية ذات معنى',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'قبل أن تبدأ', anchor: 'before-you-start' },
      { label: 'إضافة مستشعر الشبكة', anchor: 'grid-sensor' },
      { label: 'إضافة الطاقة الشمسية والبطارية', anchor: 'solar-battery' },
      { label: 'إضافة أجهزة فردية', anchor: 'individual-devices' },
      { label: 'إعداد تتبع التكلفة', anchor: 'cost-tracking' },
      { label: 'قراءة اللوحة', anchor: 'reading-dashboard' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'أعدّ لوحة Energy في Home Assistant من الإعدادات ← لوحات المعلومات ← الطاقة بإضافة مستشعر استهلاك من الشبكة أولًا، ثم مستشعرات اختيارية للطاقة الشمسية والبطارية والأجهزة الفردية، وتعرفة الكهرباء لديك لتتبع التكلفة.' },
      { type: 'plain-terms', content: 'لوحة Energy هي شاشة مدمجة في Home Assistant تحوّل قراءات المستشعرات الخام إلى رسوم استخدام بيانية وتقديرات تكلفة. لا تكتب أي كود — فقط تخبرها بأي مستشعر موجود يمثّل طاقة الشبكة لديك، وألواحك الشمسية، وبطاريتك، وأي أجهزة مُراقَبة فرديًا، وترسم الرسوم البيانية من هناك.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'اذهب إلى الإعدادات ← لوحات المعلومات ← الطاقة لبدء الإعداد — لا حاجة لتحرير YAML',
          'أضف أولًا مستشعر استهلاك من الشبكة (مشبك تيار أو دمج عداد ذكي) — هذه هي الخطوة الوحيدة المطلوبة',
          'الطاقة الشمسية والبطارية والغاز/الماء والأجهزة الفردية كلها إضافات اختيارية في الصفحة نفسها',
          'اضبط تعرفة الكهرباء لديك (ثابتة أو حسب الوقت) حتى تعرض اللوحة التكلفة إلى جانب الاستخدام',
          'انتظر 24 ساعة على الأقل قبل توقّع رسوم بيانية ذات معنى — تجمّع اللوحة البيانات كل ساعة',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: 'قبل أن تبدأ',
        content:
          '**تحتاج إلى كيان مستشعر واحد على الأقل يبلّغ عن الطاقة بوحدة kWh (أو القدرة بوحدة W التي يمكن لـ Home Assistant تكاملها إلى kWh) قبل أن يكون لدى لوحة Energy أي شيء لعرضه.**',
        items: [
          'عادةً ما يكون هذا دمج مشبك تيار (تُبلّغ العديد من العلامات التجارية مباشرة إلى Home Assistant)، أو دمج عداد ذكي إذا كانت شركة المرافق/منطقتك تدعم ذلك، أو جهاز مراقبة للمنزل بالكامل.',
          'إذا لم يكن لديك أي مستشعر طاقة بعد، راجع نظرة عامة إدارة الطاقة المحلية في المنزل الذكي ودليل أفضل الأجهزة لمنزل ذكي محلي لخيارات العتاد قبل العودة إلى هنا.',
          'لا تحتاج إلى طاقة شمسية أو بطارية أو أي مستشعرات أجهزة فردية للبدء — تلك إضافات.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'إضافة مستشعر الشبكة',
        content:
          '**في الإعدادات ← لوحات المعلومات ← الطاقة، انقر على "إضافة استهلاك" ضمن شبكة الكهرباء، واختر كيان مستشعر استهلاك الشبكة لديك.**',
        items: [
          'إذا كان مستشعرك يبلّغ عن القدرة (W) بدلًا من الطاقة (kWh)، فإن مساعد تكامل مجموع ريمان في Home Assistant يحوّل ذلك — يطلب تدفق إعداد لوحة Energy هذا تلقائيًا عند الحاجة.',
          'إذا كانت لديك طاقة شمسية، حدّد أيضًا ما إذا كان مستشعر الشبكة لديك يخصم بالفعل الإنتاج الشمسي (تفعل بعض العدادات الذكية ذلك) أو يبلّغ عن الاستهلاك الإجمالي — يؤثر هذا على ما إذا كنت تحتاج مستشعرًا منفصلًا لـ"العودة إلى الشبكة".',
          'تكفي هذه الخطوة الواحدة لبدء رؤية رسم بياني أساسي للاستخدام؛ كل ما تبقى في هذا الدليل هو تحسين اختياري.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: 'إضافة الطاقة الشمسية والبطارية',
        content:
          '**إذا كان لديك إنتاج شمسي و/أو تخزين بطارية، أضفهما ككيانات مستشعر منفصلة في نفس صفحة إعداد الطاقة — قسمي "الألواح الشمسية" و"تخزين بطارية المنزل".**',
        items: [
          'يحتاج الإنتاج الشمسي إلى كيان مستشعر خاص به، عادةً من الدمج المحلي لعاكسك (راجع دليل دمج العاكس الشمسي بمعيار Matter، أو دمج واجهة برمجة التطبيقات المحلية الحالي لعاكسك).',
          'يحتاج تخزين البطارية إلى كيانَي مستشعر — الطاقة الداخلة إلى البطارية والطاقة الخارجة منها — حتى تتمكن اللوحة من عرض الشحن/التفريغ بشكل منفصل عن الشبكة والطاقة الشمسية.',
          'بمجرد ضبط كليهما، يُظهر الرسم البياني لتوزيع الطاقة في اللوحة مقدار ما جاء من استهلاكك من الطاقة الشمسية أو البطارية أو الشبكة في أي لحظة.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: 'إضافة أجهزة فردية',
        content:
          '**تحت "أجهزة فردية"، أضف كل مقبس ذكي يقيس الطاقة أو مستشعر جهاز مدمج تريد تتبعه بشكل منفصل — هذا ما يتيح لك رؤية أي جهاز يقود استهلاكك.**',
        items: [
          'يمكن إضافة أي كيان مستشعر يبلّغ عن الطاقة بوحدة kWh هنا، وأكثرها شيوعًا مقبس ذكي يقيس الطاقة على شاحن سيارة كهربائية أو سخان ماء أو جهاز رئيسي.',
          'لست بحاجة لمراقبة كل شيء — راجع نظرة عامة إدارة الطاقة المحلية للحصول على إرشادات حول الأجهزة التي تستحق التتبع الفردي.',
          'تظهر الأجهزة الفردية كبنود مستقلة في تفصيل الاستخدام في اللوحة، مما يتيح لك مقارنة الأجهزة مباشرة.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'إعداد تتبع التكلفة',
        content:
          '**اضبط تعرفة الكهرباء لديك ضمن إعدادات مستشعر استهلاك الشبكة لتحويل استخدام kWh إلى تقديرات تكلفة — إما سعر ثابت أو جدول حسب الوقت.**',
        items: [
          'السعر الثابت هو سعر واحد لكل kWh، يُدخَل مرة واحدة.',
          'تتيح لك التعرفة حسب الوقت تحديد نوافذ الأسعار (مثل ساعات الذروة/خارج الذروة) حتى يتطابق حساب التكلفة في اللوحة مع فاتورتك الفعلية — وهذا أيضًا ما تعتمد عليه أتمتة تحويل الحمل (راجع نظرة عامة إدارة الطاقة المحلية).',
          'إذا كانت لديك طاقة شمسية مع تعرفة تغذية (مدفوعة مقابل التصدير إلى الشبكة)، فاضبط ذلك ضمن إعدادات مستشعر الطاقة الشمسية لرؤية التكلفة الصافية، لا تكلفة الاستهلاك فقط.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'قراءة اللوحة',
        content:
          '**تعرض اللوحة رسمًا بيانيًا يوميًا/أسبوعيًا/شهريًا للاستخدام، ورسمًا بيانيًا لتوزيع الطاقة (الشبكة مقابل الطاقة الشمسية مقابل البطارية)، وملخص التكلفة — انتظر 24 ساعة قبل توقّع أول يوم كامل من البيانات.**',
        items: [
          'يتيح لك الرسم البياني للاستخدام مقارنة الأيام أو الأسابيع لرصد الأنماط — فحص أولي جيد بعد الإعداد هو ما إذا كان سحب الشبكة لديك ينخفض خلال ساعات الإنتاج الشمسي كما هو متوقع.',
          'الرسم البياني للتوزيع هو أسرع طريقة لرؤية نسبة الاستهلاك الذاتي إذا كانت لديك طاقة شمسية — مقدار ما جاء من استخدامك من إنتاجك الخاص مقابل الشبكة.',
          'تتيح لك إدخالات الأجهزة الفردية التحقق من أن استخدام جهاز معين يتوافق مع التوقعات، وهو مفيد أيضًا لاكتشاف مستشعر مُوصَّل أو مُعدّ بشكل خاطئ مبكرًا.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج إلى عداد ذكي حتى تعمل لوحة Energy؟', a: 'لا — يعمل مشبك تيار على التغذية الرئيسية دون عداد ذكي وهو الإعداد الأكثر شيوعًا. دمج العداد الذكي بديل إذا كانت شركة المرافق ومنطقتك تدعمانه.' },
          { q: 'هل يمكنني استخدام لوحة Energy دون طاقة شمسية أو بطارية؟', a: 'نعم. يمنحك تتبع استهلاك الشبكة وحده رسومًا بيانية للاستخدام والتكلفة. قسما الطاقة الشمسية والبطارية اختياريان تمامًا ويمكن إضافتهما لاحقًا.' },
          { q: 'لماذا لوحتي فارغة مباشرة بعد الإعداد؟', a: 'تجمّع لوحة Energy البيانات كل ساعة، لذا تحتاج عادةً إلى يوم كامل قبل عرض رسم بياني كامل للاستخدام. هذا متوقع — تحقق مرة أخرى بعد 24 ساعة.' },
          { q: 'ماذا لو كانت منطقتي تستخدم تعرفة حسب الوقت بأكثر من فترتي أسعار؟', a: 'يدعم إعداد التعرفة في Home Assistant فترات أسعار متعددة، وليس فقط ذروة/خارج الذروة — أدخل كل نافذة زمنية وسعرها ضمن إعدادات تكلفة مستشعر الشبكة.' },
          { q: 'هل يمكنني إضافة أجهزة فردية لاحقًا دون إعادة الإعداد؟', a: 'نعم — يمكن إضافة أو إزالة الأجهزة الفردية والطاقة الشمسية والبطارية بشكل مستقل في أي وقت من نفس صفحة إعداد الطاقة، دون التأثير على مستشعر الشبكة المُعدّ بالفعل.' },
          { q: 'هل تحتاج هذه اللوحة إلى اتصال بالإنترنت؟', a: 'لا — بمجرد ضبط المستشعرات، تعمل لوحة Energy بالكامل على نسخة Home Assistant المحلية لديك وتستمر في العمل أثناء انقطاع الإنترنت، رغم أن أي دمج مستشعر مستضاف على السحابة اخترت استخدامه لن يعمل.' },
          { q: 'كيف تختلف هذه عن لوحة Home Assistant العامة؟', a: 'لوحة Energy هي عرض مُولَّد تلقائيًا ومصمم خصيصًا لمستشعرات الطاقة — تتعامل مع تحويل الوحدات وحساب التكلفة والرسم البياني للتوزيع تلقائيًا، وهو ما تحتاج لوحة مبنية يدويًا إلى بطاقات وقوالب مخصصة لتكراره.' },
          { q: 'هل يمكن للأتمتة استخدام بيانات لوحة Energy مباشرة؟', a: 'نعم — كيانات المستشعر الأساسية التي تقرأ منها لوحة Energy هي كيانات قياسية في Home Assistant، لذا يمكن لأي أتمتة (بما في ذلك أمثلة تحويل الحمل في نظرة عامة إدارة الطاقة المحلية) الإشارة إليها مباشرة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[إدارة الطاقة المحلية في المنزل الذكي](/ar/smart-home/local-smart-home-energy-management-2027) — النظرة العامة التي ينفّذها هذا الدليل',
          '[Home Assistant: دليل البدء الكامل](/ar/smart-home/home-assistant-getting-started) — إعداد التثبيت الأولي العام',
          '[دمج Matter للعاكسات الشمسية ومضخات الحرارة](/ar/smart-home/matter-solar-inverter-heat-pump-integration) — توصيل أجهزة التوليد',
          '[توصيل الطاقة الشمسية للشرفة بـ Home Assistant دون سحابة](/ar/balcony-solar/connect-balcony-solar-home-assistant-local) — عبر المجموعات: تغذية بيانات الطاقة الشمسية',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'لوحة Energy في Home Assistant: دليل الإعداد الكامل (⁨2027⁩)',
      description: 'أعدّ لوحة Energy في Home Assistant لعام 2027: أضف مستشعرات الشبكة والطاقة الشمسية والبطارية والأجهزة، واضبط تتبع التكلفة، واقرأ رسوم الاستخدام البيانية.',
      url: 'https://www.promptquorum.com/ar/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'لوحة Energy في Home Assistant' }, { '@type': 'Thing', name: 'مراقبة الطاقة' }, { '@type': 'Thing', name: 'تتبع التكلفة' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'إعداد لوحة Energy في Home Assistant',
      description: 'اضبط مستشعرات الشبكة والطاقة الشمسية والبطارية والأجهزة الفردية في لوحة Energy المدمجة في Home Assistant.',
      step: [
        { '@type': 'HowToStep', name: 'إضافة مستشعر شبكة', text: 'اذهب إلى الإعدادات ← لوحات المعلومات ← الطاقة وأضف كيان مستشعر استهلاك الشبكة لديك.' },
        { '@type': 'HowToStep', name: 'إضافة الطاقة الشمسية والبطارية (اختياري)', text: 'أضف كيانات مستشعر إنتاج الطاقة الشمسية وشحن/تفريغ البطارية إن كان لديك ذلك العتاد.' },
        { '@type': 'HowToStep', name: 'إضافة أجهزة فردية (اختياري)', text: 'أضف كل مقبس ذكي يقيس الطاقة أو مستشعر جهاز ضمن أجهزة فردية.' },
        { '@type': 'HowToStep', name: 'ضبط تعرفتك', text: 'أدخل تعرفتك الثابتة أو حسب الوقت ضمن إعدادات مستشعر الشبكة لتتبع التكلفة.' },
        { '@type': 'HowToStep', name: 'انتظار البيانات', text: 'انتظر 24 ساعة على الأقل حتى تجمّع اللوحة يومًا كاملًا من الاستخدام قبل قراءة الرسوم البيانية.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج إلى عداد ذكي حتى تعمل لوحة Energy؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — يعمل مشبك تيار على التغذية الرئيسية دون عداد ذكي وهو الإعداد الأكثر شيوعًا.' } },
        { '@type': 'Question', name: 'هل يمكنني استخدام لوحة Energy دون طاقة شمسية أو بطارية؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يمنحك تتبع استهلاك الشبكة وحده رسومًا بيانية للاستخدام والتكلفة؛ قسما الطاقة الشمسية والبطارية اختياريان.' } },
        { '@type': 'Question', name: 'لماذا لوحتي فارغة مباشرة بعد الإعداد؟', acceptedAnswer: { '@type': 'Answer', text: 'تجمّع لوحة Energy البيانات كل ساعة وتحتاج عادةً إلى يوم كامل قبل عرض رسم بياني كامل.' } },
        { '@type': 'Question', name: 'هل تحتاج هذه اللوحة إلى اتصال بالإنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — بمجرد ضبط المستشعرات، تعمل لوحة Energy بالكامل على نسخة Home Assistant المحلية لديك.' } },
        { '@type': 'Question', name: 'هل يمكن للأتمتة استخدام بيانات لوحة Energy مباشرة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — كيانات المستشعر الأساسية هي كيانات قياسية في Home Assistant يمكن لأي أتمتة الإشارة إليها مباشرة.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-ko.webp',
    title: 'Home Assistant Energy 대시보드: 완전 설정 가이드 (2027년)',
    seoTitle: 'Home Assistant Energy 대시보드 설정 (2027년)',
    intro:
      'Home Assistant에 내장된 Energy 대시보드는 계통 소비량, 태양광 발전량, 배터리 상태, 개별 기기 사용량을 하나의 로컬 뷰에서 추적합니다 — 설정은 자동화 코드를 작성하는 것이 아니라 몇 개의 센서 엔티티를 추가하는 작업입니다. 이 가이드는 계통 센서 추가, (있다면) 태양광 및 배터리 센서 추가, 개별 기기 추적, 그리고 그 결과로 나오는 비용 및 사용량 그래프를 읽는 방법을 다룹니다.',
    metaDescription:
      '2027년 Home Assistant Energy 대시보드 설정하기: 계통, 태양광, 배터리, 기기 센서를 추가하고, 비용 추적을 구성하고, 사용량 그래프를 읽는 법.',
    twitterDescription:
      'Home Assistant Energy 대시보드 단계별 설정: 계통 센서, 태양광/배터리 연동, 기기별 추적, 비용 구성.',
    readTime: '7분 소요',
    educationalLevel: 'Beginner',
    audience: '처음으로 에너지 추적을 설정하는 Home Assistant 사용자',
    primaryTerm: 'home assistant energy dashboard 설정',
    targetKeywords: [
      'home assistant energy dashboard 설정',
      'ha energy dashboard 설정 방법',
      'home assistant 에너지 추적',
      'home assistant 태양광 대시보드',
      'home assistant 비용 추적 에너지',
    ],
    leadAnswerBlock:
      '**Home Assistant의 Energy 대시보드를 설정하려면 먼저 계통 소비 센서를 추가하고(설정 → 대시보드 → 에너지에서), 그다음 태양광, 배터리, 개별 기기 센서를 선택적으로 추가하세요 — 각 추가 항목은 대시보드가 기존 센서 엔티티를 가리키게 할 뿐이며 코딩이 필요 없습니다.** 센서가 구성되면 대시보드가 자동으로 그래프를 생성합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Home Assistant Energy 대시보드는 어떻게 설정하나요?',
        answer:
          'Home Assistant에서 설정 → 대시보드 → 에너지로 이동하세요. 먼저 계통 소비 센서를 추가합니다 — 이는 CT 클램프 연동, 스마트 미터 연동, 또는 kWh 단위로 에너지를 보고하는 어떤 센서 엔티티에서든 올 수 있습니다. 그다음 선택적으로 태양광 발전, 배터리 충전/방전, 계량된다면 가스/수도를 추가하세요. 개별 기기의 경우, 같은 에너지 구성 페이지에서 각 에너지 모니터링 스마트 플러그를 "개별 기기"로 추가하세요. 대시보드가 사용량뿐 아니라 비용을 계산할 수 있도록 전기 요금제(고정 요금 또는 시간대별)를 설정하세요.',
        bullets: [
          '1단계: 계통 소비 센서 추가 (CT 클램프 또는 스마트 미터 연동)',
          '2단계(선택): 태양광 발전 및 배터리 센서 추가',
          '3단계(선택): 개별 기기 추가 — 에너지 모니터링 스마트 플러그마다 하나의 항목',
          '4단계: 요금제를 설정해 대시보드가 kWh뿐 아니라 비용을 표시하게 함',
          '그래프가 의미 있어지려면 대시보드에 최소 24시간의 데이터가 필요함',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '시작하기 전에', anchor: 'before-you-start' },
      { label: '계통 센서 추가하기', anchor: 'grid-sensor' },
      { label: '태양광과 배터리 추가하기', anchor: 'solar-battery' },
      { label: '개별 기기 추가하기', anchor: 'individual-devices' },
      { label: '비용 추적 설정하기', anchor: 'cost-tracking' },
      { label: '대시보드 읽는 법', anchor: 'reading-dashboard' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '설정 → 대시보드 → 에너지에서 먼저 계통 소비 센서를 추가하고, 그다음 선택적으로 태양광, 배터리, 개별 기기 센서와 비용 추적을 위한 전기 요금제를 추가해 Home Assistant Energy 대시보드를 설정하세요.' },
      { type: 'plain-terms', content: 'Energy 대시보드는 원시 센서 판독값을 사용량 그래프와 비용 추정치로 변환하는 Home Assistant 내장 화면입니다. 코드를 작성할 필요 없이 — 어떤 기존 센서가 계통 전력, 태양광 패널, 배터리, 개별적으로 모니터링되는 기기를 나타내는지만 알려주면 거기서부터 그래프를 그립니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '설정 → 대시보드 → 에너지로 이동해 구성을 시작하세요 — YAML 편집이 필요 없음',
          '먼저 계통 소비 센서를 추가하세요(CT 클램프 또는 스마트 미터 연동) — 이것이 유일한 필수 단계임',
          '태양광, 배터리, 가스/수도, 개별 기기는 모두 같은 페이지에서의 선택적 추가 항목임',
          '전기 요금제(고정 또는 시간대별)를 설정해 대시보드가 사용량과 함께 비용을 표시하게 하세요',
          '의미 있는 그래프를 기대하기 전에 최소 24시간을 기다리세요 — 대시보드는 시간별로 데이터를 집계함',
        ],
      },
      beforeYouStart: {
        id: 'before-you-start',
        title: '시작하기 전에',
        content:
          '**Energy 대시보드가 표시할 무언가를 갖기 전에, kWh 단위로 에너지를 보고하는(또는 Home Assistant가 kWh로 적분할 수 있는 W 단위 전력을 보고하는) 센서 엔티티가 최소 하나 필요합니다.**',
        items: [
          '이는 보통 CT 클램프 연동(많은 브랜드가 Home Assistant에 직접 보고함), 전력회사/지역이 지원한다면 스마트 미터 연동, 또는 전체 가정용 모니터입니다.',
          '아직 에너지 센서가 없다면, 여기로 돌아오기 전에 로컬 스마트홈 에너지 관리 개요와 로컬 스마트홈을 위한 최고의 하드웨어 가이드에서 하드웨어 옵션을 확인하세요.',
          '시작하는 데 태양광, 배터리, 또는 개별 기기 센서가 필요하지 않습니다 — 이들은 추가 요소입니다.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: '계통 센서 추가하기',
        content:
          '**설정 → 대시보드 → 에너지에서, 전력 계통 아래의 "소비량 추가"를 클릭하고 계통 소비 센서 엔티티를 선택하세요.**',
        items: [
          '센서가 에너지(kWh)가 아닌 전력(W)을 보고하는 경우, Home Assistant의 리만 합 적분 도우미가 이를 변환합니다 — Energy 대시보드 설정 흐름이 필요할 때 자동으로 이를 요청합니다.',
          '태양광이 있다면, 계통 센서가 이미 태양광 발전을 상쇄하고 있는지(일부 스마트 미터가 그렇게 함) 아니면 총 소비량을 보고하는지도 표시하세요 — 이는 별도의 "계통 역송" 센서가 필요한지에 영향을 줍니다.',
          '이 한 단계만으로 기본 사용량 그래프를 보기 시작하기에 충분합니다. 이 가이드의 나머지 모든 것은 선택적 세부 조정입니다.',
        ],
      },
      solarBattery: {
        id: 'solar-battery',
        title: '태양광과 배터리 추가하기',
        content:
          '**태양광 발전 및/또는 배터리 저장 장치가 있다면, 같은 에너지 구성 페이지의 "태양광 패널"과 "가정용 배터리 저장 장치" 섹션에 별도의 센서 엔티티로 추가하세요.**',
        items: [
          '태양광 발전에는 자체 센서 엔티티가 필요하며, 보통 인버터의 로컬 연동(Matter 태양광 인버터 연동 가이드 또는 인버터의 기존 로컬 API 연동 참고)에서 옵니다.',
          '배터리 저장 장치에는 두 개의 센서 엔티티가 필요합니다 — 배터리로 들어가는 에너지와 나오는 에너지 — 그래야 대시보드가 계통 및 태양광과 별도로 충전/방전을 표시할 수 있습니다.',
          '둘 다 구성되면, 대시보드의 에너지 분배 그래프는 특정 시점에 소비량 중 얼마가 태양광, 배터리, 또는 계통에서 왔는지 보여줍니다.',
        ],
      },
      individualDevices: {
        id: 'individual-devices',
        title: '개별 기기 추가하기',
        content:
          '**"개별 기기" 아래에, 별도로 추적하고 싶은 각 에너지 모니터링 스마트 플러그나 내장 가전 센서를 추가하세요 — 이를 통해 어떤 가전이 사용량을 주도하는지 볼 수 있습니다.**',
        items: [
          'kWh 단위로 에너지를 보고하는 어떤 센서 엔티티든 여기에 추가할 수 있으며, 가장 흔한 것은 전기차 충전기, 온수기, 또는 주요 가전제품에 설치된 에너지 모니터링 스마트 플러그입니다.',
          '모든 것을 모니터링할 필요는 없습니다 — 어떤 기기를 개별적으로 추적할 가치가 있는지에 대한 안내는 로컬 에너지 관리 개요를 참고하세요.',
          '개별 기기는 대시보드의 사용량 분석에서 자체 항목으로 표시되어, 가전제품을 직접 비교할 수 있게 해줍니다.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: '비용 추적 설정하기',
        content:
          '**계통 소비 센서 설정에서 전기 요금제를 구성해 kWh 사용량을 비용 추정치로 변환하세요 — 고정 요금이든 시간대별 일정이든 상관없습니다.**',
        items: [
          '고정 요금은 kWh당 단일 가격으로, 한 번 입력합니다.',
          '시간대별 요금제는 요금 구간(예: 피크/비피크 시간)을 정의할 수 있게 해줘서 대시보드의 비용 계산이 실제 청구서와 일치하게 합니다 — 이는 또한 부하 이동 자동화(로컬 에너지 관리 개요 참고)가 기준으로 삼는 것이기도 합니다.',
          '피드인 요금제가 있는 태양광이 있다면(계통으로 수출한 것에 대해 지급받음), 소비 비용뿐 아니라 순 비용을 보려면 태양광 센서 설정에서 이를 구성하세요.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: '대시보드 읽는 법',
        content:
          '**대시보드는 일간/주간/월간 사용량 그래프, 에너지 분배 그래프(계통 대 태양광 대 배터리), 비용 요약을 보여줍니다 — 첫 완전한 하루치 데이터를 기대하기 전에 24시간을 기다리세요.**',
        items: [
          '사용량 그래프를 통해 날짜나 주를 비교해 패턴을 발견할 수 있습니다 — 설정 후 좋은 첫 확인은 태양광 발전 시간대에 계통 사용량이 예상대로 줄어드는지 보는 것입니다.',
          '분배 그래프는 태양광이 있는 경우 자가 소비 비율을 보는 가장 빠른 방법입니다 — 사용량 중 얼마가 자체 발전에서 왔고 얼마가 계통에서 왔는지.',
          '개별 기기 항목을 통해 특정 가전의 사용량이 예상과 일치하는지 확인할 수 있으며, 이는 배선이 잘못되었거나 잘못 구성된 센서를 조기에 발견하는 데도 유용합니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Energy 대시보드가 작동하려면 스마트 미터가 필요한가요?', a: '아니요 — 메인 전력선의 CT 클램프는 스마트 미터 없이도 작동하며 더 흔한 구성입니다. 전력회사와 지역이 지원한다면 스마트 미터 연동이 대안입니다.' },
          { q: '태양광이나 배터리 없이 Energy 대시보드를 사용할 수 있나요?', a: '네. 계통 소비 추적만으로도 사용량과 비용 그래프를 얻을 수 있습니다. 태양광과 배터리 섹션은 완전히 선택 사항이며 나중에 추가할 수 있습니다.' },
          { q: '설정 직후 대시보드가 비어 있는 이유는 무엇인가요?', a: 'Energy 대시보드는 시간별로 데이터를 집계하므로, 완전한 사용량 그래프를 표시하기까지 보통 하루가 걸립니다. 이는 정상입니다 — 24시간 후 다시 확인하세요.' },
          { q: '지역에서 두 개 이상의 요금 구간이 있는 시간대별 요금제를 사용한다면 어떻게 하나요?', a: 'Home Assistant의 요금제 구성은 피크/비피크뿐 아니라 여러 요금 구간을 지원합니다 — 계통 센서의 비용 설정에서 각 시간대와 요금을 입력하세요.' },
          { q: '설정을 다시 하지 않고 나중에 개별 기기를 추가할 수 있나요?', a: '네 — 개별 기기, 태양광, 배터리는 모두 언제든지 같은 에너지 구성 페이지에서 독립적으로 추가하거나 제거할 수 있으며, 이미 구성된 계통 센서에 영향을 주지 않습니다.' },
          { q: '이 대시보드는 인터넷 연결이 필요한가요?', a: '아니요 — 센서가 구성되면 Energy 대시보드는 전적으로 로컬 Home Assistant 인스턴스에서 실행되며 인터넷 장애 중에도 계속 작동하지만, 사용하기로 선택한 클라우드 호스팅 센서 연동은 그렇지 않을 것입니다.' },
          { q: '이것이 일반 Home Assistant 대시보드와 어떻게 다른가요?', a: 'Energy 대시보드는 에너지 센서를 위해 특별히 자동 생성되는 목적 구축형 뷰입니다 — 단위 변환, 비용 계산, 분배 그래프를 자동으로 처리하며, 수동으로 만든 대시보드는 이를 재현하려면 커스텀 카드와 템플릿이 필요할 것입니다.' },
          { q: '자동화가 Energy 대시보드 데이터를 직접 사용할 수 있나요?', a: '네 — Energy 대시보드가 읽어오는 기본 센서 엔티티는 표준 Home Assistant 엔티티이므로, 어떤 자동화든(로컬 에너지 관리 개요의 부하 이동 예시 포함) 이를 직접 참조할 수 있습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 스마트홈 에너지 관리](/ko/smart-home/local-smart-home-energy-management-2027) — 이 가이드가 구현하는 개요',
          '[Home Assistant: 완전한 시작 가이드](/ko/smart-home/home-assistant-getting-started) — 일반적인 최초 설치 설정',
          '[태양광 인버터와 히트펌프를 위한 Matter 연동](/ko/smart-home/matter-solar-inverter-heat-pump-integration) — 발전 하드웨어 연결',
          '[발코니 태양광을 클라우드 없이 Home Assistant에 연결](/ko/balcony-solar/connect-balcony-solar-home-assistant-local) — 클러스터 간: 태양광 데이터 공급',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant Energy 대시보드: 완전 설정 가이드 (2027년)',
      description: '2027년 Home Assistant Energy 대시보드 설정하기: 계통, 태양광, 배터리, 기기 센서를 추가하고, 비용 추적을 구성하고, 사용량 그래프를 읽는 법.',
      url: 'https://www.promptquorum.com/ko/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Home Assistant Energy 대시보드' }, { '@type': 'Thing', name: '에너지 모니터링' }, { '@type': 'Thing', name: '비용 추적' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Home Assistant Energy 대시보드 설정하기',
      description: 'Home Assistant에 내장된 Energy 대시보드에서 계통, 태양광, 배터리, 개별 기기 센서를 구성하세요.',
      step: [
        { '@type': 'HowToStep', name: '계통 센서 추가', text: '설정 → 대시보드 → 에너지로 이동해 계통 소비 센서 엔티티를 추가하세요.' },
        { '@type': 'HowToStep', name: '태양광과 배터리 추가(선택)', text: '해당 하드웨어가 있다면 태양광 발전 및 배터리 충전/방전 센서 엔티티를 추가하세요.' },
        { '@type': 'HowToStep', name: '개별 기기 추가(선택)', text: '개별 기기 아래에 각 에너지 모니터링 스마트 플러그나 가전 센서를 추가하세요.' },
        { '@type': 'HowToStep', name: '요금제 구성', text: '비용 추적을 위해 계통 센서 설정에서 고정 요금 또는 시간대별 요금제를 입력하세요.' },
        { '@type': 'HowToStep', name: '데이터 대기', text: '그래프를 읽기 전에 대시보드가 완전한 하루치 사용량을 집계하도록 최소 24시간을 기다리세요.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Energy 대시보드가 작동하려면 스마트 미터가 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 메인 전력선의 CT 클램프는 스마트 미터 없이도 작동하며 더 흔한 구성입니다.' } },
        { '@type': 'Question', name: '태양광이나 배터리 없이 Energy 대시보드를 사용할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '네. 계통 소비 추적만으로도 사용량과 비용 그래프를 얻을 수 있습니다; 태양광과 배터리 섹션은 선택 사항입니다.' } },
        { '@type': 'Question', name: '설정 직후 대시보드가 비어 있는 이유는 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: 'Energy 대시보드는 시간별로 데이터를 집계하며 완전한 그래프를 표시하기까지 보통 하루가 걸립니다.' } },
        { '@type': 'Question', name: '이 대시보드는 인터넷 연결이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 센서가 구성되면 Energy 대시보드는 전적으로 로컬 Home Assistant 인스턴스에서 실행됩니다.' } },
        { '@type': 'Question', name: '자동화가 Energy 대시보드 데이터를 직접 사용할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '네 — 기본 센서 엔티티는 표준 Home Assistant 엔티티이며 어떤 자동화든 직접 참조할 수 있습니다.' } },
      ],
    },
  },
}
