import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-en.webp',
    title: 'Home Assistant Energy Dashboard: Complete Setup Guide (2026)',
    seoTitle: 'Home Assistant Energy Dashboard Setup (2026)',
    intro:
      'Home Assistant\'s built-in Energy dashboard tracks grid consumption, solar generation, battery state, and individual-device usage in one local view — the setup takes adding a few sensor entities, not writing any automation code. This guide walks through adding a grid sensor, solar and battery sensors if you have them, individual device tracking, and reading the resulting cost and usage charts.',
    metaDescription:
      'Set up the Home Assistant Energy dashboard in 2026: grid, solar, battery and HVAC sensors, setup time, example layouts, and fixes for missing sensors.',
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
      'home assistant energy dashboard examples',
      'home assistant custom energy dashboard',
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
          'Setup takes minutes once sensors exist; charts fill from hourly statistics, and a full day gives a meaningful daily view',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Before You Start', anchor: 'before-you-start' },
      { label: 'How Long Does Setup Take?', anchor: 'setup-time' },
      { label: 'Adding a Grid Sensor', anchor: 'grid-sensor' },
      { label: 'Adding Solar and Battery', anchor: 'solar-battery' },
      { label: 'Adding Individual Devices', anchor: 'individual-devices' },
      { label: 'Tracking HVAC and Other High-Draw Devices', anchor: 'hvac-devices' },
      { label: 'Setting Up Cost Tracking', anchor: 'cost-tracking' },
      { label: 'Reading the Dashboard', anchor: 'reading-dashboard' },
      { label: 'Example Layouts and Customizing the Dashboard', anchor: 'example-layouts' },
      { label: 'Fixing Sensors That Do Not Appear', anchor: 'missing-sensors' },
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
          'Configuration takes minutes once your sensors exist; charts start filling with the first hourly statistics, and a full day gives a meaningful daily view',
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
      setupTime: {
        id: 'setup-time',
        title: 'How Long Does Setup Take?',
        content:
          '**Configuring the Energy dashboard usually takes minutes once your energy sensors exist — the time-consuming part is installing and pairing the monitoring hardware, not the dashboard itself.**',
        items: [
          'Grid-only setup: one sensor selection plus a tariff, with no code or YAML.',
          'Solar, battery, and individual devices: one additional selection per sensor on the same page.',
          'Charts: statistics are compiled hourly, so the first bars appear after the next full hour, and a full day gives the first complete daily view.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Adding a Grid Sensor',
        content:
          '**In Settings → Dashboards → Energy, click "Add Consumption" under Electricity grid, and select your grid-consumption sensor entity.**',
        items: [
          'If your sensor reports power (W) rather than energy (kWh), first create an energy sensor with Home Assistant\'s Integration (Riemann sum) helper, then add that sensor — Home Assistant can only approximate energy from power samples, so frequent sampling gives better results.',
          'If you have solar and a dedicated export connection, add your household grid connection without the solar sensor, add the inverter as a Solar panels source, and add the export connection as a second Grid source: set only the exported energy, set the power measurement to Inverted, and configure export compensation.',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: 'Tracking HVAC and Other High-Draw Devices',
        content:
          '**Air conditioners and boilers that expose a power (W) or energy (kWh) sensor can be added under Individual devices like any smart plug — use a device hierarchy to avoid double-counting.**',
        items: [
          'If the unit reports power in watts, either add the power sensor directly (it needs device_class power and state_class measurement) or convert it to energy with the Integration (Riemann sum) helper and add that sensor.',
          'To see a circuit-level meter and the HVAC unit on one dashboard, add every sensor as an individual device first, then pick the circuit-level entity as the upstream device of the devices it contains — this prevents double-counting.',
          'Which sensors exist depends on your unit\'s integration — check it for a power or energy entity before buying extra monitoring hardware.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Setting Up Cost Tracking',
        content:
          '**Configure your electricity tariff under the grid consumption sensor\'s settings to turn kWh usage into cost estimates — either a fixed rate or a time-of-use schedule.**',
        items: [
          'A fixed rate is a single price per kWh, entered once.',
          'Time-of-use pricing works by splitting consumption into tariffs with the utility_meter integration (for example peak and off-peak), or by pointing the price at an entity that reports the current price, so the cost calculation matches your actual bill — this is also what load-shifting automations (see the local energy management overview) key off of.',
          'If you export solar to the grid and are paid for it, configure the compensation on the grid connection\'s export (return-to-grid) entry to see net cost, not just consumption cost.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Reading the Dashboard',
        content:
          '**The dashboard shows daily, weekly, and monthly usage, an energy-distribution chart (grid vs. solar vs. battery), and a cost summary — bars appear as hourly statistics are compiled, and a full day gives the first complete daily view.**',
        items: [
          'The usage graph lets you compare days or weeks to spot patterns — a good first check after setup is whether your grid draw drops during solar-generation hours as expected.',
          'The distribution chart is the fastest way to see self-consumption ratio if you have solar — how much of your usage came from your own generation versus the grid.',
          'Individual-device entries let you sanity-check that a specific appliance\'s usage matches expectations, which is also useful for catching a miswired or misconfigured sensor early.',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: 'Example Layouts and Customizing the Dashboard',
        content:
          '**The Energy dashboard is configured, not built: choose which sources appear, then show or hide cards with Customize cards — changes apply to everyone using the instance.**',
        items: [
          'Example 1 — grid only: one consumption sensor and a tariff give usage and cost charts.',
          'Example 2 — solar household: grid consumption, the inverter as Solar panels, and optional battery sensors give the grid/solar/battery distribution chart.',
          'Example 3 — device-level view: add individual devices (smart plugs, an air conditioner, an EV charger) and an upstream hierarchy to see each load\'s share.',
          'To customize, open Settings → Dashboards → Energy → Edit dashboard → Customize cards; cards are grouped into Overview, Electricity, Gas, Water, and Now, and a card stays unavailable until its source is configured.',
          'For a fully custom layout, build a regular dashboard from the same sensor entities.',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: 'Fixing Sensors That Do Not Appear',
        content:
          '**If a sensor is missing from the selection list, it almost always lacks the right device_class, state_class, or unit — check these first.**',
        items: [
          'Energy sensors: device_class energy with state_class total or total_increasing.',
          'Power sensors: device_class power with state_class measurement.',
          'Battery: device_class battery, state_class measurement, and unit %. Gas and water: device_class gas or water with state_class total or total_increasing.',
          'The entity must be a sensor (convert an input_number with a template sensor), use a supported unit, and be stored by the Recorder; resolve any errors under Settings → Tools → Statistics.',
          'Inflated totals: do not sum two resetting sensors (for example two utility_meter sensors) with a template or Group helper — add each cumulative sensor separately and correct bad data under Settings → Tools → Statistics.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need a smart meter for the Energy dashboard to work?', a: 'No — a CT clamp on your main feed works without a smart meter and is the more common setup. A smart meter integration is an alternative if your utility and region support one.' },
          { q: 'Can I use the Energy dashboard without solar or a battery?', a: 'Yes. Grid-consumption tracking alone gives you usage and cost charts. Solar and battery sections are entirely optional and can be added later.' },
          { q: 'Why is my dashboard empty right after setup?', a: 'The Energy dashboard reads hourly long-term statistics, so the first bars appear after the next full hour and a full day gives a complete daily view. If nothing appears after a few hours, check that the sensor has the required device_class and state_class and that Settings → Tools → Statistics shows no errors for it.' },
          { q: 'What if my region uses a time-of-use tariff with more than two rate periods?', a: 'Yes — the utility_meter integration can split consumption into as many tariffs as your contract has, and a price entity can follow any schedule your provider publishes. Select it under the grid connection\'s cost settings.' },
          { q: 'Can I add individual devices later without redoing the setup?', a: 'Yes — individual devices, solar, and battery can all be added or removed independently at any time from the same Energy configuration page, without affecting the grid sensor already configured.' },
          { q: 'Does this dashboard require an internet connection?', a: 'No — once sensors are configured, the Energy dashboard runs entirely on your local Home Assistant instance and continues working during an internet outage, though any cloud-hosted sensor integration you\'ve chosen to use would not.' },
          { q: 'How is this different from a generic Home Assistant dashboard?', a: 'The Energy dashboard is a purpose-built, auto-generated view specifically for energy sensors — it handles unit conversion, cost calculation, and the distribution chart automatically, which a manually built dashboard would need custom cards and templates to replicate.' },
          { q: 'Can automations use Energy dashboard data directly?', a: 'Yes — the underlying sensor entities the Energy dashboard reads from are standard Home Assistant entities, so any automation (including the load-shifting examples in the local energy management overview) can reference them directly.' },
          { q: 'How long does it take to set up the Home Assistant Energy dashboard?', a: 'Configuration usually takes minutes once energy sensors exist: select the grid sensor, add optional sources, and set a tariff. Charts fill from hourly statistics, so allow the next full hour for first data and a day for a complete daily view.' },
          { q: 'Why is my sensor missing from the Energy dashboard list?', a: 'It usually lacks the required attributes: energy sensors need device_class energy and state_class total or total_increasing, and power sensors need device_class power and state_class measurement. It must also be a sensor entity with a supported unit that the Recorder stores.' },
          { q: 'Can I track my air conditioner or boiler in the Energy dashboard?', a: 'Yes, if it exposes a power (W) or energy (kWh) sensor. Add the energy sensor under Individual devices, or convert a power sensor with the Integration (Riemann sum) helper first, and set an upstream device to avoid double-counting.' },
          { q: 'Can I customize the Energy dashboard?', a: 'Yes — open Settings → Dashboards → Energy → Edit dashboard → Customize cards to show or hide cards. Changes apply to all users; for a fully custom layout, build a regular dashboard from the same sensors.' },
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
      headline: 'Home Assistant Energy Dashboard: Complete Setup Guide (2026)',
      description: 'Set up the Home Assistant Energy dashboard in 2026: grid, solar, battery and HVAC sensors, setup time, example layouts, and fixes for missing sensors.',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: 'Wait for data', text: 'Allow the next full hour for the first statistics, and about a day for a complete daily view, before reading the charts.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a smart meter for the Energy dashboard to work?', acceptedAnswer: { '@type': 'Answer', text: 'No — a CT clamp on your main feed works without a smart meter and is the more common setup.' } },
        { '@type': 'Question', name: 'Can I use the Energy dashboard without solar or a battery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Grid-consumption tracking alone gives you usage and cost charts; solar and battery sections are optional.' } },
        { '@type': 'Question', name: 'Why is my dashboard empty right after setup?', acceptedAnswer: { '@type': 'Answer', text: 'The Energy dashboard reads hourly statistics, so the first bars appear after the next full hour and a full day gives a complete daily view.' } },
        { '@type': 'Question', name: 'Does this dashboard require an internet connection?', acceptedAnswer: { '@type': 'Answer', text: 'No — once sensors are configured, the Energy dashboard runs entirely on your local Home Assistant instance.' } },
        { '@type': 'Question', name: 'Can automations use Energy dashboard data directly?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — the underlying sensor entities are standard Home Assistant entities that any automation can reference directly.' } },
        { '@type': 'Question', name: 'How long does it take to set up the Home Assistant Energy dashboard?', acceptedAnswer: { '@type': 'Answer', text: 'Configuration usually takes minutes once energy sensors exist; charts fill from hourly statistics.' } },
        { '@type': 'Question', name: 'Why is my sensor missing from the Energy dashboard list?', acceptedAnswer: { '@type': 'Answer', text: 'It usually lacks the required device_class or state_class, is not a sensor entity, or is not stored by the Recorder.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-de.webp',
    title: 'Home Assistant Energie-Dashboard: Komplette Einrichtungsanleitung (2026)',
    seoTitle: 'Home Assistant Energie-Dashboard einrichten (2026)',
    intro:
      'Das eingebaute Energie-Dashboard von Home Assistant erfasst Netzbezug, Solarerzeugung, Batteriestatus und Gerätenutzung einzeln in einer lokalen Ansicht — die Einrichtung erfordert das Hinzufügen einiger Sensor-Entitäten, keinen Automatisierungscode. Diese Anleitung führt durch das Hinzufügen eines Netzsensors, Solar- und Batteriesensoren falls vorhanden, die Erfassung einzelner Geräte und das Lesen der resultierenden Kosten- und Nutzungsdiagramme.',
    metaDescription:
      'Home-Assistant-Energiedashboard 2026 einrichten: Netz-, Solar-, Batterie- und Klimasensoren, Dauer der Einrichtung, Beispiel-Layouts und Lösungen für fehlende Sensoren.',
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
      'home assistant energiedashboard beispiele',
      'home assistant energiedashboard anpassen',
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
          'Die Einrichtung dauert Minuten, sobald Sensoren existieren; Diagramme füllen sich über stündliche Statistiken, ein ganzer Tag ergibt eine aussagekräftige Tagesansicht',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Bevor Sie beginnen', anchor: 'before-you-start' },
      { label: 'Wie lange dauert die Einrichtung?', anchor: 'setup-time' },
      { label: 'Netzsensor hinzufügen', anchor: 'grid-sensor' },
      { label: 'Solar und Batterie hinzufügen', anchor: 'solar-battery' },
      { label: 'Einzelne Geräte hinzufügen', anchor: 'individual-devices' },
      { label: 'Klimageräte und andere Großverbraucher erfassen', anchor: 'hvac-devices' },
      { label: 'Kostenverfolgung einrichten', anchor: 'cost-tracking' },
      { label: 'Das Dashboard lesen', anchor: 'reading-dashboard' },
      { label: 'Beispiel-Layouts und Dashboard anpassen', anchor: 'example-layouts' },
      { label: 'Sensoren, die nicht erscheinen, beheben', anchor: 'missing-sensors' },
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
          'Die Konfiguration dauert Minuten, sobald Ihre Sensoren existieren; Diagramme füllen sich mit den ersten stündlichen Statistiken, ein ganzer Tag ergibt eine aussagekräftige Tagesansicht',
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
      setupTime: {
        id: 'setup-time',
        title: 'Wie lange dauert die Einrichtung?',
        content:
          '**Die Konfiguration des Energie-Dashboards dauert meist nur Minuten, sobald Ihre Energiesensoren existieren — zeitaufwendig sind Installation und Kopplung der Messhardware, nicht das Dashboard selbst.**',
        items: [
          'Nur Netz: eine Sensorauswahl plus ein Tarif, ohne Code oder YAML.',
          'Solar, Batterie und einzelne Geräte: eine weitere Auswahl pro Sensor auf derselben Seite.',
          'Diagramme: Statistiken werden stündlich berechnet, daher erscheinen die ersten Balken nach der nächsten vollen Stunde, und ein ganzer Tag ergibt die erste vollständige Tagesansicht.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Netzsensor hinzufügen',
        content:
          '**Klicken Sie unter Einstellungen → Dashboards → Energie auf „Verbrauch hinzufügen" unter Stromnetz und wählen Sie Ihre Netzbezugssensor-Entität aus.**',
        items: [
          'Falls Ihr Sensor Leistung (W) statt Energie (kWh) meldet, erstellen Sie zuerst mit dem Helfer „Integration (Riemann sum)" von Home Assistant einen Energiesensor und fügen Sie dann diesen hinzu — Home Assistant kann Energie aus Leistungswerten nur annähern, daher liefern häufige Messungen bessere Ergebnisse.',
          'Falls Sie Solar und einen separaten Einspeiseanschluss haben, fügen Sie Ihren Haushalts-Netzanschluss ohne den Solarsensor hinzu, den Wechselrichter als Quelle „Solarpanels" und den Einspeiseanschluss als zweite Netzquelle: Tragen Sie nur die eingespeiste Energie ein, setzen Sie die Leistungsmessung auf „Invertiert" und konfigurieren Sie die Einspeisevergütung.',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: 'Klimageräte und andere Großverbraucher erfassen',
        content:
          '**Klimaanlagen und Heizkessel, die einen Leistungs- (W) oder Energiesensor (kWh) bereitstellen, lassen sich wie ein Smart Plug unter „Einzelne Geräte" hinzufügen — mit einer Geräte-Hierarchie vermeiden Sie Doppelzählungen.**',
        items: [
          'Meldet das Gerät Leistung in Watt, fügen Sie entweder den Leistungssensor direkt hinzu (er braucht device_class power und state_class measurement) oder wandeln ihn mit dem Helfer „Integration (Riemann sum)" in Energie um und fügen diesen Sensor hinzu.',
          'Um einen Stromkreis-Zähler und das Klimagerät in einem Dashboard zu sehen, fügen Sie zuerst alle Sensoren als einzelne Geräte hinzu und wählen dann die Stromkreis-Entität als übergeordnetes Gerät (Upstream) der darin enthaltenen Geräte — das verhindert Doppelzählungen.',
          'Welche Sensoren es gibt, hängt von der Integration Ihres Geräts ab — prüfen Sie dort auf eine Leistungs- oder Energie-Entität, bevor Sie zusätzliche Messhardware kaufen.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Kostenverfolgung einrichten',
        content:
          '**Konfigurieren Sie Ihren Stromtarif unter den Einstellungen des Netzbezugssensors, um kWh-Nutzung in Kostenschätzungen umzuwandeln — entweder einen Festpreis oder einen Zeittarifplan.**',
        items: [
          'Ein Festpreis ist ein einzelner Preis pro kWh, einmal eingegeben.',
          'Zeittarife funktionieren, indem Sie den Verbrauch mit der Integration utility_meter in Tarife aufteilen (z. B. Hoch- und Niedertarif) oder den Preis auf eine Entität zeigen lassen, die den aktuellen Preis meldet, damit die Kostenberechnung Ihrer tatsächlichen Rechnung entspricht — daran orientieren sich auch Lastverschiebungs-Automatisierungen (siehe den Überblick zum lokalen Energiemanagement).',
          'Falls Sie Solarstrom ins Netz einspeisen und dafür vergütet werden, konfigurieren Sie die Vergütung am Einspeise-Eintrag (Netzrückspeisung) des Netzanschlusses, um Nettokosten statt nur Verbrauchskosten zu sehen.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Das Dashboard lesen',
        content:
          '**Das Dashboard zeigt täglichen, wöchentlichen und monatlichen Verbrauch, ein Energieverteilungsdiagramm (Netz vs. Solar vs. Batterie) und eine Kostenübersicht — Balken erscheinen, sobald stündliche Statistiken berechnet sind, und ein ganzer Tag ergibt die erste vollständige Tagesansicht.**',
        items: [
          'Das Nutzungsdiagramm lässt Sie Tage oder Wochen vergleichen, um Muster zu erkennen — eine gute erste Prüfung nach der Einrichtung ist, ob Ihr Netzbezug während der Solarerzeugungsstunden wie erwartet sinkt.',
          'Das Verteilungsdiagramm ist der schnellste Weg, das Eigenverbrauchsverhältnis zu sehen, falls Sie Solar haben — wie viel Ihrer Nutzung aus Ihrer eigenen Erzeugung gegenüber dem Netz kam.',
          'Einzelgeräte-Einträge lassen Sie überprüfen, ob die Nutzung eines bestimmten Geräts den Erwartungen entspricht, was auch nützlich ist, um einen falsch verkabelten oder falsch konfigurierten Sensor früh zu erkennen.',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: 'Beispiel-Layouts und Dashboard anpassen',
        content:
          '**Das Energie-Dashboard wird konfiguriert, nicht gebaut: Sie wählen die angezeigten Quellen und blenden Karten über „Karten anpassen" ein oder aus — Änderungen gelten für alle Nutzer der Instanz.**',
        items: [
          'Beispiel 1 — nur Netz: ein Verbrauchssensor und ein Tarif liefern Nutzungs- und Kostendiagramme.',
          'Beispiel 2 — Solar-Haushalt: Netzbezug, der Wechselrichter als Solarpanels und optionale Batteriesensoren ergeben das Verteilungsdiagramm Netz/Solar/Batterie.',
          'Beispiel 3 — Geräteansicht: Fügen Sie einzelne Geräte (Smart Plugs, eine Klimaanlage, eine E-Auto-Wallbox) und eine Upstream-Hierarchie hinzu, um den Anteil jeder Last zu sehen.',
          'Zum Anpassen öffnen Sie Einstellungen → Dashboards → Energie → Dashboard bearbeiten → Karten anpassen; die Karten sind in Übersicht, Strom, Gas, Wasser und Jetzt gruppiert, und eine Karte bleibt nicht verfügbar, bis ihre Quelle konfiguriert ist.',
          'Für ein völlig individuelles Layout bauen Sie ein normales Dashboard aus denselben Sensor-Entitäten.',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: 'Sensoren, die nicht erscheinen, beheben',
        content:
          '**Fehlt ein Sensor in der Auswahlliste, fehlt ihm fast immer die passende device_class, state_class oder Einheit — prüfen Sie zuerst diese.**',
        items: [
          'Energiesensoren: device_class energy mit state_class total oder total_increasing.',
          'Leistungssensoren: device_class power mit state_class measurement.',
          'Batterie: device_class battery, state_class measurement und Einheit %. Gas und Wasser: device_class gas oder water mit state_class total oder total_increasing.',
          'Die Entität muss ein sensor sein (einen input_number wandeln Sie mit einem Template-Sensor um), eine unterstützte Einheit nutzen und vom Recorder gespeichert werden; beheben Sie Fehler unter Einstellungen → Werkzeuge → Statistiken.',
          'Überhöhte Summen: Addieren Sie nicht zwei zurücksetzende Sensoren (z. B. zwei utility_meter-Sensoren) per Template oder Gruppen-Helfer — fügen Sie jeden kumulativen Sensor einzeln hinzu und korrigieren Sie falsche Daten unter Einstellungen → Werkzeuge → Statistiken.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Brauche ich einen Smart Meter, damit das Energie-Dashboard funktioniert?', a: 'Nein — eine Stromwandlerzange an Ihrem Hauptzuleiter funktioniert ohne Smart Meter und ist das gängigere Setup. Eine Smart-Meter-Integration ist eine Alternative, falls Ihr Versorger und Ihre Region eine unterstützen.' },
          { q: 'Kann ich das Energie-Dashboard ohne Solar oder Batterie nutzen?', a: 'Ja. Reine Netzbezugsverfolgung liefert Ihnen Nutzungs- und Kostendiagramme. Solar- und Batterieabschnitte sind vollständig optional und können später hinzugefügt werden.' },
          { q: 'Warum ist mein Dashboard direkt nach der Einrichtung leer?', a: 'Das Energie-Dashboard liest stündliche Langzeitstatistiken, daher erscheinen die ersten Balken nach der nächsten vollen Stunde und ein ganzer Tag ergibt eine vollständige Tagesansicht. Falls nach einigen Stunden nichts erscheint, prüfen Sie, ob der Sensor die erforderlichen device_class und state_class hat und unter Einstellungen → Werkzeuge → Statistiken keine Fehler für ihn angezeigt werden.' },
          { q: 'Was, wenn meine Region einen Zeittarif mit mehr als zwei Tarifzeiten nutzt?', a: 'Ja — die Integration utility_meter kann den Verbrauch in so viele Tarife aufteilen, wie Ihr Vertrag hat, und eine Preis-Entität kann jedem Zeitplan Ihres Anbieters folgen. Wählen Sie sie in den Kosteneinstellungen des Netzanschlusses aus.' },
          { q: 'Kann ich später einzelne Geräte hinzufügen, ohne die Einrichtung zu wiederholen?', a: 'Ja — einzelne Geräte, Solar und Batterie können jederzeit unabhängig auf derselben Energie-Konfigurationsseite hinzugefügt oder entfernt werden, ohne den bereits konfigurierten Netzsensor zu beeinflussen.' },
          { q: 'Braucht dieses Dashboard eine Internetverbindung?', a: 'Nein — sobald Sensoren konfiguriert sind, läuft das Energie-Dashboard vollständig auf Ihrer lokalen Home-Assistant-Instanz und funktioniert bei einem Internetausfall weiter, obwohl jede von Ihnen gewählte cloudgehostete Sensorintegration das nicht täte.' },
          { q: 'Wie unterscheidet sich das von einem generischen Home-Assistant-Dashboard?', a: 'Das Energie-Dashboard ist eine zweckgebundene, automatisch generierte Ansicht speziell für Energiesensoren — es übernimmt Einheitenumrechnung, Kostenberechnung und das Verteilungsdiagramm automatisch, was ein manuell erstelltes Dashboard mit benutzerdefinierten Karten und Vorlagen nachbilden müsste.' },
          { q: 'Können Automatisierungen Energie-Dashboard-Daten direkt nutzen?', a: 'Ja — die zugrunde liegenden Sensor-Entitäten, aus denen das Energie-Dashboard liest, sind Standard-Home-Assistant-Entitäten, sodass jede Automatisierung (einschließlich der Lastverschiebungsbeispiele im Überblick zum lokalen Energiemanagement) direkt darauf verweisen kann.' },
          { q: 'Wie lange dauert die Einrichtung des Home-Assistant-Energie-Dashboards?', a: 'Die Konfiguration dauert meist Minuten, sobald Energiesensoren existieren: Netzsensor wählen, optionale Quellen hinzufügen und einen Tarif festlegen. Diagramme füllen sich aus stündlichen Statistiken — rechnen Sie bis zur nächsten vollen Stunde für erste Daten und einen Tag für eine vollständige Tagesansicht.' },
          { q: 'Warum fehlt mein Sensor in der Auswahlliste des Energie-Dashboards?', a: 'Meist fehlen erforderliche Attribute: Energiesensoren brauchen device_class energy und state_class total oder total_increasing, Leistungssensoren device_class power und state_class measurement. Außerdem muss es eine sensor-Entität mit unterstützter Einheit sein, die der Recorder speichert.' },
          { q: 'Kann ich meine Klimaanlage oder Heizung im Energie-Dashboard erfassen?', a: 'Ja, wenn sie einen Leistungs- (W) oder Energiesensor (kWh) bereitstellt. Fügen Sie den Energiesensor unter „Einzelne Geräte" hinzu oder wandeln Sie einen Leistungssensor zuerst mit dem Helfer „Integration (Riemann sum)" um, und legen Sie ein übergeordnetes Gerät fest, um Doppelzählungen zu vermeiden.' },
          { q: 'Kann ich das Energie-Dashboard anpassen?', a: 'Ja — öffnen Sie Einstellungen → Dashboards → Energie → Dashboard bearbeiten → Karten anpassen, um Karten ein- oder auszublenden. Änderungen gelten für alle Nutzer; für ein völlig individuelles Layout bauen Sie ein normales Dashboard aus denselben Sensoren.' },
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
      headline: 'Home Assistant Energie-Dashboard: Komplette Einrichtungsanleitung (2026)',
      description: 'Home-Assistant-Energiedashboard 2026 einrichten: Netz-, Solar-, Batterie- und Klimasensoren, Dauer der Einrichtung, Beispiel-Layouts und Lösungen für fehlende Sensoren.',
      url: 'https://www.promptquorum.com/de/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: 'Auf Daten warten', text: 'Warten Sie die nächste volle Stunde für die ersten Statistiken und etwa einen Tag für eine vollständige Tagesansicht, bevor Sie die Diagramme lesen.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich einen Smart Meter, damit das Energie-Dashboard funktioniert?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — eine Stromwandlerzange an Ihrem Hauptzuleiter funktioniert ohne Smart Meter und ist das gängigere Setup.' } },
        { '@type': 'Question', name: 'Kann ich das Energie-Dashboard ohne Solar oder Batterie nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Reine Netzbezugsverfolgung liefert Nutzungs- und Kostendiagramme; Solar- und Batterieabschnitte sind optional.' } },
        { '@type': 'Question', name: 'Warum ist mein Dashboard direkt nach der Einrichtung leer?', acceptedAnswer: { '@type': 'Answer', text: 'Das Energie-Dashboard liest stündliche Statistiken, daher erscheinen die ersten Balken nach der nächsten vollen Stunde und ein ganzer Tag ergibt eine vollständige Tagesansicht.' } },
        { '@type': 'Question', name: 'Braucht dieses Dashboard eine Internetverbindung?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — sobald Sensoren konfiguriert sind, läuft das Energie-Dashboard vollständig auf Ihrer lokalen Home-Assistant-Instanz.' } },
        { '@type': 'Question', name: 'Können Automatisierungen Energie-Dashboard-Daten direkt nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — die zugrunde liegenden Sensor-Entitäten sind Standard-Home-Assistant-Entitäten, auf die jede Automatisierung direkt verweisen kann.' } },
        { '@type': 'Question', name: 'Wie lange dauert die Einrichtung des Home-Assistant-Energie-Dashboards?', acceptedAnswer: { '@type': 'Answer', text: 'Die Konfiguration dauert meist Minuten, sobald Energiesensoren existieren; Diagramme füllen sich aus stündlichen Statistiken.' } },
        { '@type': 'Question', name: 'Warum fehlt mein Sensor in der Auswahlliste des Energie-Dashboards?', acceptedAnswer: { '@type': 'Answer', text: 'Meist fehlt die erforderliche device_class oder state_class, es ist keine sensor-Entität, oder der Recorder speichert sie nicht.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-fr.webp',
    title: 'Tableau de bord Énergie de Home Assistant : guide complet de configuration (2026)',
    seoTitle: 'Configurer le tableau de bord Énergie de Home Assistant (2026)',
    intro:
      'Le tableau de bord Énergie intégré de Home Assistant suit la consommation réseau, la production solaire, l\'état de la batterie et l\'usage par appareil individuel dans une vue locale unique — la configuration consiste à ajouter quelques entités capteurs, pas à écrire de code d\'automatisation. Ce guide explique comment ajouter un capteur réseau, des capteurs solaire et batterie si vous en avez, le suivi par appareil individuel, et la lecture des graphiques de coût et d\'usage qui en résultent.',
    metaDescription:
      'Configurez le tableau de bord Énergie de Home Assistant en 2026 : capteurs réseau, solaire, batterie et CVC, durée de mise en place, exemples de dispositions et solutions aux capteurs manquants.',
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
      'exemples tableau de bord énergie home assistant',
      'tableau de bord énergie home assistant personnalisé',
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
          'La mise en place prend quelques minutes une fois les capteurs en place ; les graphiques se remplissent à partir de statistiques horaires, et une journée complète donne une vue quotidienne exploitable',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Avant de commencer', anchor: 'before-you-start' },
      { label: 'Combien de temps prend la configuration ?', anchor: 'setup-time' },
      { label: 'Ajouter un capteur réseau', anchor: 'grid-sensor' },
      { label: 'Ajouter solaire et batterie', anchor: 'solar-battery' },
      { label: 'Ajouter des appareils individuels', anchor: 'individual-devices' },
      { label: 'Suivre le CVC et les autres gros consommateurs', anchor: 'hvac-devices' },
      { label: 'Configurer le suivi des coûts', anchor: 'cost-tracking' },
      { label: 'Lire le tableau de bord', anchor: 'reading-dashboard' },
      { label: 'Exemples de dispositions et personnalisation', anchor: 'example-layouts' },
      { label: 'Résoudre les capteurs qui n\'apparaissent pas', anchor: 'missing-sensors' },
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
          'La configuration prend quelques minutes une fois vos capteurs en place ; les graphiques se remplissent avec les premières statistiques horaires, et une journée complète donne une vue quotidienne exploitable',
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
      setupTime: {
        id: 'setup-time',
        title: 'Combien de temps prend la configuration ?',
        content:
          '**Configurer le tableau de bord Énergie prend généralement quelques minutes une fois vos capteurs d\'énergie en place — le plus long est d\'installer et d\'appairer le matériel de mesure, pas le tableau de bord lui-même.**',
        items: [
          'Réseau seul : une sélection de capteur plus un tarif, sans code ni YAML.',
          'Solaire, batterie et appareils individuels : une sélection supplémentaire par capteur sur la même page.',
          'Graphiques : les statistiques sont calculées toutes les heures, donc les premières barres apparaissent après l\'heure pleine suivante, et une journée complète donne la première vue quotidienne complète.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Ajouter un capteur réseau',
        content:
          '**Dans Paramètres → Tableaux de bord → Énergie, cliquez sur « Ajouter une consommation » sous Réseau électrique, et sélectionnez votre entité capteur de consommation réseau.**',
        items: [
          'Si votre capteur indique une puissance (W) plutôt qu\'une énergie (kWh), créez d\'abord un capteur d\'énergie avec l\'assistant Intégration (Riemann sum) de Home Assistant, puis ajoutez ce capteur — Home Assistant ne peut qu\'estimer l\'énergie à partir d\'échantillons de puissance, donc un échantillonnage fréquent donne de meilleurs résultats.',
          'Si vous avez du solaire et une connexion d\'exportation dédiée, ajoutez votre raccordement réseau domestique sans le capteur solaire, l\'onduleur comme source « Panneaux solaires », puis la connexion d\'exportation comme seconde source Réseau : renseignez uniquement l\'énergie exportée, réglez la mesure de puissance sur « Inversée » et configurez la rémunération de l\'export.',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: 'Suivre le CVC et les autres gros consommateurs',
        content:
          '**Les climatiseurs et chaudières qui exposent un capteur de puissance (W) ou d\'énergie (kWh) s\'ajoutent sous « Appareils individuels » comme une prise connectée — utilisez une hiérarchie d\'appareils pour éviter les doubles comptages.**',
        items: [
          'Si l\'appareil indique sa puissance en watts, ajoutez soit le capteur de puissance directement (il exige device_class power et state_class measurement), soit convertissez-le en énergie avec l\'assistant Intégration (Riemann sum) et ajoutez ce capteur.',
          'Pour voir un compteur de circuit et l\'appareil CVC sur un même tableau de bord, ajoutez d\'abord chaque capteur comme appareil individuel, puis choisissez l\'entité du circuit comme appareil amont des appareils qu\'elle contient — cela évite les doubles comptages.',
          'Les capteurs disponibles dépendent de l\'intégration de votre appareil — vérifiez-y la présence d\'une entité de puissance ou d\'énergie avant d\'acheter du matériel de mesure supplémentaire.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Configurer le suivi des coûts',
        content:
          '**Configurez votre tarif électrique sous les paramètres du capteur de consommation réseau pour transformer l\'usage en kWh en estimations de coût — soit un taux fixe, soit un planning horaire.**',
        items: [
          'Un taux fixe est un prix unique par kWh, saisi une fois.',
          'La tarification horaire fonctionne en répartissant la consommation en tarifs avec l\'intégration utility_meter (par exemple heures pleines et creuses), ou en faisant pointer le prix vers une entité qui indique le prix courant, afin que le calcul des coûts corresponde à votre facture réelle — c\'est aussi ce sur quoi s\'appuient les automatisations de report de charge (voir l\'aperçu de la gestion locale de l\'énergie).',
          'Si vous injectez du solaire sur le réseau et êtes rémunéré, configurez la rémunération sur l\'entrée d\'export (retour réseau) du raccordement réseau pour voir le coût net, et pas seulement le coût de consommation.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Lire le tableau de bord',
        content:
          '**Le tableau de bord affiche la consommation quotidienne, hebdomadaire et mensuelle, un graphique de répartition de l\'énergie (réseau, solaire, batterie) et un récapitulatif des coûts — les barres apparaissent au fil du calcul des statistiques horaires, et une journée complète donne la première vue quotidienne complète.**',
        items: [
          'Le graphique d\'usage vous permet de comparer des jours ou des semaines pour repérer des tendances — une bonne première vérification après configuration est de voir si votre consommation réseau baisse pendant les heures de production solaire comme attendu.',
          'Le graphique de distribution est le moyen le plus rapide de voir le taux d\'autoconsommation si vous avez du solaire — quelle part de votre usage provenait de votre propre production par rapport au réseau.',
          'Les entrées d\'appareils individuels vous permettent de vérifier que l\'usage d\'un appareil précis correspond aux attentes, ce qui est aussi utile pour détecter tôt un capteur mal câblé ou mal configuré.',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: 'Exemples de dispositions et personnalisation',
        content:
          '**Le tableau de bord Énergie se configure, il ne se construit pas : choisissez les sources affichées, puis affichez ou masquez des cartes avec « Personnaliser les cartes » — les changements s\'appliquent à tous les utilisateurs de l\'instance.**',
        items: [
          'Exemple 1 — réseau seul : un capteur de consommation et un tarif donnent des graphiques d\'usage et de coût.',
          'Exemple 2 — foyer solaire : consommation réseau, onduleur comme panneaux solaires et capteurs de batterie optionnels donnent le graphique de répartition réseau/solaire/batterie.',
          'Exemple 3 — vue par appareil : ajoutez des appareils individuels (prises connectées, climatiseur, borne de recharge) et une hiérarchie amont pour voir la part de chaque charge.',
          'Pour personnaliser, ouvrez Paramètres → Tableaux de bord → Énergie → Modifier le tableau de bord → Personnaliser les cartes ; les cartes sont regroupées en Aperçu, Électricité, Gaz, Eau et Maintenant, et une carte reste indisponible tant que sa source n\'est pas configurée.',
          'Pour une disposition entièrement personnalisée, créez un tableau de bord classique à partir des mêmes entités de capteurs.',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: 'Résoudre les capteurs qui n\'apparaissent pas',
        content:
          '**Si un capteur manque dans la liste de sélection, il lui manque presque toujours la bonne device_class, state_class ou unité — vérifiez-les en premier.**',
        items: [
          'Capteurs d\'énergie : device_class energy avec state_class total ou total_increasing.',
          'Capteurs de puissance : device_class power avec state_class measurement.',
          'Batterie : device_class battery, state_class measurement et unité %. Gaz et eau : device_class gas ou water avec state_class total ou total_increasing.',
          'L\'entité doit être un sensor (convertissez un input_number avec un capteur modèle), utiliser une unité prise en charge et être enregistrée par le Recorder ; corrigez les erreurs sous Paramètres → Outils → Statistiques.',
          'Totaux gonflés : n\'additionnez pas deux capteurs qui se réinitialisent (par exemple deux capteurs utility_meter) via un modèle ou un groupe — ajoutez chaque capteur cumulatif séparément et corrigez les mauvaises données sous Paramètres → Outils → Statistiques.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Ai-je besoin d\'un compteur intelligent pour que le tableau de bord Énergie fonctionne ?', a: 'Non — une pince ampèremétrique sur votre arrivée principale fonctionne sans compteur intelligent et est la configuration la plus courante. Une intégration compteur intelligent est une alternative si votre fournisseur et votre région en supportent une.' },
          { q: 'Puis-je utiliser le tableau de bord Énergie sans solaire ni batterie ?', a: 'Oui. Le suivi de la consommation réseau seul vous donne des graphiques d\'usage et de coût. Les sections solaire et batterie sont entièrement optionnelles et peuvent être ajoutées plus tard.' },
          { q: 'Pourquoi mon tableau de bord est-il vide juste après la configuration ?', a: 'Le tableau de bord Énergie lit des statistiques horaires à long terme : les premières barres apparaissent après l\'heure pleine suivante et une journée complète donne une vue quotidienne complète. Si rien n\'apparaît après quelques heures, vérifiez que le capteur a les device_class et state_class requis et que Paramètres → Outils → Statistiques n\'affiche aucune erreur pour lui.' },
          { q: 'Que faire si ma région utilise un tarif horaire avec plus de deux périodes tarifaires ?', a: 'Oui — l\'intégration utility_meter peut répartir la consommation en autant de tarifs que votre contrat en compte, et une entité de prix peut suivre n\'importe quel calendrier publié par votre fournisseur. Sélectionnez-la dans les paramètres de coût du raccordement réseau.' },
          { q: 'Puis-je ajouter des appareils individuels plus tard sans refaire la configuration ?', a: 'Oui — appareils individuels, solaire et batterie peuvent tous être ajoutés ou retirés indépendamment à tout moment depuis la même page de configuration Énergie, sans affecter le capteur réseau déjà configuré.' },
          { q: 'Ce tableau de bord nécessite-t-il une connexion internet ?', a: 'Non — une fois les capteurs configurés, le tableau de bord Énergie tourne entièrement sur votre instance Home Assistant locale et continue de fonctionner pendant une coupure internet, bien que toute intégration de capteur hébergée dans le cloud que vous auriez choisie ne le ferait pas.' },
          { q: 'En quoi est-ce différent d\'un tableau de bord Home Assistant générique ?', a: 'Le tableau de bord Énergie est une vue conçue spécifiquement pour les capteurs d\'énergie, générée automatiquement — il gère la conversion d\'unités, le calcul de coût et le graphique de distribution automatiquement, ce qu\'un tableau de bord construit manuellement devrait reproduire avec des cartes et modèles personnalisés.' },
          { q: 'Les automatisations peuvent-elles utiliser directement les données du tableau de bord Énergie ?', a: 'Oui — les entités capteurs sous-jacentes que lit le tableau de bord Énergie sont des entités Home Assistant standard, donc toute automatisation (y compris les exemples de décalage de charge dans la synthèse sur la gestion locale de l\'énergie) peut y faire référence directement.' },
          { q: 'Combien de temps faut-il pour configurer le tableau de bord Énergie de Home Assistant ?', a: 'La configuration prend généralement quelques minutes une fois les capteurs d\'énergie en place : sélectionnez le capteur réseau, ajoutez les sources optionnelles et définissez un tarif. Les graphiques se remplissent à partir de statistiques horaires : comptez l\'heure pleine suivante pour les premières données et une journée pour une vue quotidienne complète.' },
          { q: 'Pourquoi mon capteur n\'apparaît-il pas dans la liste du tableau de bord Énergie ?', a: 'Il lui manque généralement des attributs requis : les capteurs d\'énergie exigent device_class energy et state_class total ou total_increasing, les capteurs de puissance device_class power et state_class measurement. Ce doit aussi être une entité sensor avec une unité prise en charge, enregistrée par le Recorder.' },
          { q: 'Puis-je suivre mon climatiseur ou ma chaudière dans le tableau de bord Énergie ?', a: 'Oui, s\'ils exposent un capteur de puissance (W) ou d\'énergie (kWh). Ajoutez le capteur d\'énergie sous « Appareils individuels », ou convertissez d\'abord un capteur de puissance avec l\'assistant Intégration (Riemann sum), et définissez un appareil amont pour éviter les doubles comptages.' },
          { q: 'Puis-je personnaliser le tableau de bord Énergie ?', a: 'Oui — ouvrez Paramètres → Tableaux de bord → Énergie → Modifier le tableau de bord → Personnaliser les cartes pour afficher ou masquer des cartes. Les changements s\'appliquent à tous les utilisateurs ; pour une disposition entièrement personnalisée, créez un tableau de bord classique à partir des mêmes capteurs.' },
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
      headline: 'Tableau de bord Énergie de Home Assistant : guide complet de configuration (2026)',
      description: 'Configurez le tableau de bord Énergie de Home Assistant en 2026 : capteurs réseau, solaire, batterie et CVC, durée de mise en place, exemples de dispositions et solutions aux capteurs manquants.',
      url: 'https://www.promptquorum.com/fr/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: 'Attendre les données', text: 'Attendez l\'heure pleine suivante pour les premières statistiques, et environ une journée pour une vue quotidienne complète, avant de lire les graphiques.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Ai-je besoin d\'un compteur intelligent pour que le tableau de bord Énergie fonctionne ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — une pince ampèremétrique sur votre arrivée principale fonctionne sans compteur intelligent et est la configuration la plus courante.' } },
        { '@type': 'Question', name: 'Puis-je utiliser le tableau de bord Énergie sans solaire ni batterie ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Le suivi de la consommation réseau seul donne des graphiques d\'usage et de coût ; solaire et batterie sont optionnels.' } },
        { '@type': 'Question', name: 'Pourquoi mon tableau de bord est-il vide juste après la configuration ?', acceptedAnswer: { '@type': 'Answer', text: 'Le tableau de bord Énergie lit des statistiques horaires : les premières barres apparaissent après l\'heure pleine suivante et une journée complète donne une vue quotidienne complète.' } },
        { '@type': 'Question', name: 'Ce tableau de bord nécessite-t-il une connexion internet ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — une fois les capteurs configurés, le tableau de bord Énergie tourne entièrement sur votre instance Home Assistant locale.' } },
        { '@type': 'Question', name: 'Les automatisations peuvent-elles utiliser directement les données du tableau de bord Énergie ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — les entités capteurs sous-jacentes sont des entités Home Assistant standard que toute automatisation peut référencer directement.' } },
        { '@type': 'Question', name: 'Combien de temps faut-il pour configurer le tableau de bord Énergie de Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'La configuration prend généralement quelques minutes une fois les capteurs d\'énergie en place ; les graphiques se remplissent à partir de statistiques horaires.' } },
        { '@type': 'Question', name: 'Pourquoi mon capteur n\'apparaît-il pas dans la liste du tableau de bord Énergie ?', acceptedAnswer: { '@type': 'Answer', text: 'Il lui manque généralement la device_class ou la state_class requise, ce n\'est pas une entité sensor, ou le Recorder ne l\'enregistre pas.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-ja.webp',
    title: 'Home Assistant Energyダッシュボード：完全設定ガイド（2026年）',
    seoTitle: 'Home Assistant Energyダッシュボード設定（2026年）',
    intro:
      'Home Assistant内蔵のEnergyダッシュボードは、系統消費量・太陽光発電量・バッテリー状態・個別機器の使用量を1つのローカルビューで追跡します — 設定に必要なのはいくつかのセンサーエンティティの追加だけで、自動化コードを書く必要はありません。本ガイドでは、系統センサーの追加、（お持ちの場合は）太陽光・バッテリーセンサーの追加、個別機器の追跡、そして結果として得られるコストと使用量のグラフの読み方を説明します。',
    metaDescription:
      '2026年版 Home Assistant エネルギーダッシュボードの設定：系統・太陽光・バッテリー・空調センサー、所要時間、レイアウト例、センサーが表示されない場合の対処。',
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
      'home assistant エネルギーダッシュボード 例',
      'home assistant エネルギーダッシュボード カスタマイズ',
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
          'センサーが揃っていれば設定は数分で完了し、グラフは1時間ごとの統計から表示され、丸1日で日次ビューが意味を持つ',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: '始める前に', anchor: 'before-you-start' },
      { label: '設定にはどのくらい時間がかかりますか？', anchor: 'setup-time' },
      { label: '系統センサーの追加', anchor: 'grid-sensor' },
      { label: '太陽光とバッテリーの追加', anchor: 'solar-battery' },
      { label: '個別機器の追加', anchor: 'individual-devices' },
      { label: '空調などの高消費電力機器を追跡する', anchor: 'hvac-devices' },
      { label: 'コスト追跡の設定', anchor: 'cost-tracking' },
      { label: 'ダッシュボードの読み方', anchor: 'reading-dashboard' },
      { label: 'レイアウト例とダッシュボードのカスタマイズ', anchor: 'example-layouts' },
      { label: 'センサーが表示されない場合の対処', anchor: 'missing-sensors' },
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
          'センサーが揃っていれば設定は数分で完了します。グラフは最初の1時間ごとの統計から表示され始め、丸1日で日次ビューが意味を持ちます',
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
      setupTime: {
        id: 'setup-time',
        title: '設定にはどのくらい時間がかかりますか？',
        content:
          '**エネルギーセンサーが揃っていれば、エネルギーダッシュボードの設定は通常数分で終わります。時間がかかるのはダッシュボードではなく、計測ハードウェアの設置とペアリングです。**',
        items: [
          '系統のみ：センサーを1つ選択してタリフを設定するだけで、コードや YAML は不要です。',
          '太陽光・バッテリー・個別デバイス：同じページでセンサーごとに選択を1つ追加します。',
          'グラフ：統計は1時間ごとに集計されるため、最初の棒グラフは次の正時以降に表示され、丸1日で最初の完全な日次ビューになります。',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: '系統センサーの追加',
        content:
          '**設定→ダッシュボード→エネルギーで、電力系統の下にある「消費を追加」をクリックし、系統消費量センサーエンティティを選択します。**',
        items: [
          'センサーがエネルギー（kWh）ではなく電力（W）を報告する場合は、まず Home Assistant の「Integration (Riemann sum)」ヘルパーでエネルギーセンサーを作成し、そのセンサーを追加してください。Home Assistant は電力サンプルからエネルギーを近似できるだけなので、サンプリング間隔が短いほど精度が上がります。',
          '太陽光があり専用の売電接続がある場合は、太陽光センサーを含めずに自宅の系統接続を追加し、インバーターを「太陽光パネル」ソースとして追加し、売電接続を2つ目の系統ソースとして追加します。売電エネルギーのみを設定し、電力測定を「反転」に設定し、売電の補償額（売電単価）を設定してください。',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: '空調などの高消費電力機器を追跡する',
        content:
          '**電力（W）またはエネルギー（kWh）センサーを提供するエアコンやボイラーは、スマートプラグと同様に「個別デバイス」へ追加できます。二重カウントを避けるにはデバイス階層を使います。**',
        items: [
          '機器がワット単位の電力を報告する場合は、電力センサーを直接追加する（device_class power と state_class measurement が必要）か、「Integration (Riemann sum)」ヘルパーでエネルギーに変換してそのセンサーを追加します。',
          '回路単位のメーターと空調機器を1つのダッシュボードで見るには、まずすべてのセンサーを個別デバイスとして追加し、次に回路単位のエンティティを、それに含まれるデバイスの上位デバイスとして選択します。これで二重カウントを防げます。',
          '利用できるセンサーは機器のインテグレーション次第です。追加の計測ハードウェアを購入する前に、電力またはエネルギーのエンティティがあるか確認してください。',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'コスト追跡の設定',
        content:
          '**系統消費量センサーの設定の下で電気料金プランを設定し、kWh使用量をコスト見積もりに変換します — 定額プランか時間帯別プランのいずれかです。**',
        items: [
          '定額プランは、一度入力するkWhあたりの単一価格です。',
          '時間帯別料金は、utility_meter インテグレーションで消費量をタリフ（例：ピークとオフピーク）に分割するか、現在の価格を報告するエンティティを価格として指定することで実現でき、コスト計算が実際の請求額に近づきます。負荷シフトの自動化（ローカルエネルギー管理の概要を参照）もこれを基準にします。',
          '太陽光の余剰電力を系統に売電して対価を得ている場合は、系統接続の売電（系統への逆潮流）エントリーで補償額を設定すると、消費コストだけでなく正味コストを確認できます。',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'ダッシュボードの読み方',
        content:
          '**ダッシュボードには、日次・週次・月次の使用量、エネルギー配分グラフ（系統・太陽光・バッテリー）、コストの概要が表示されます。棒グラフは1時間ごとの統計が集計されるにつれて表示され、丸1日で最初の完全な日次ビューになります。**',
        items: [
          '使用量グラフでは日や週を比較してパターンを見つけられます — 設定後の良い最初のチェックは、太陽光発電時間帯に系統からの引き込みが期待通り減少しているかどうかです。',
          '太陽光をお持ちの場合、分配グラフは自家消費率を見る最も速い方法です — 自分の発電と系統からのどちらから使用量が来たかがわかります。',
          '個別機器のエントリにより、特定の家電の使用量が期待通りかを確認でき、配線ミスや設定ミスのセンサーを早期に発見するのにも役立ちます。',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: 'レイアウト例とダッシュボードのカスタマイズ',
        content:
          '**エネルギーダッシュボードは「作る」のではなく「設定する」ものです。表示するソースを選び、「カードをカスタマイズ」でカードの表示/非表示を切り替えます。変更はインスタンスの全ユーザーに適用されます。**',
        items: [
          '例1：系統のみ — 消費センサー1つとタリフで、使用量とコストのグラフが得られます。',
          '例2：太陽光のある家庭 — 系統消費、太陽光パネルとしてのインバーター、任意のバッテリーセンサーで、系統/太陽光/バッテリーの配分グラフが得られます。',
          '例3：デバイス単位のビュー — 個別デバイス（スマートプラグ、エアコン、EV充電器）と上位デバイスの階層を追加して、各負荷の割合を確認します。',
          'カスタマイズするには、設定 → ダッシュボード → エネルギー → ダッシュボードを編集 → カードをカスタマイズ を開きます。カードは概要・電気・ガス・水道・現在にグループ化され、ソースが設定されるまでカードは利用できません。',
          '完全に自由なレイアウトにしたい場合は、同じセンサーエンティティから通常のダッシュボードを作成してください。',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: 'センサーが表示されない場合の対処',
        content:
          '**選択リストにセンサーが表示されない場合、ほぼ常に正しい device_class、state_class、または単位が欠けています。まずこれらを確認してください。**',
        items: [
          'エネルギーセンサー：device_class energy と、state_class total または total_increasing。',
          '電力センサー：device_class power と state_class measurement。',
          'バッテリー：device_class battery、state_class measurement、単位 %。ガスと水道：device_class gas または water と、state_class total または total_increasing。',
          'エンティティは sensor である必要があり（input_number はテンプレートセンサーで変換）、対応する単位を使い、Recorder に保存されている必要があります。設定 → ツール → 統計 でエラーを解消してください。',
          '合計値が膨らむ場合：リセットされる2つのセンサー（例：utility_meter センサー2つ）をテンプレートやグループヘルパーで合算しないでください。累積センサーは個別に追加し、誤ったデータは 設定 → ツール → 統計 で修正します。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Energyダッシュボードが機能するにはスマートメーターが必要ですか？', a: 'いいえ — メイン電源のCTクランプはスマートメーターなしでも機能し、より一般的な構成です。電力会社と地域が対応していれば、スマートメーター連携が代替手段です。' },
          { q: '太陽光やバッテリーなしでEnergyダッシュボードを使えますか？', a: 'はい。系統消費量の追跡だけでも使用量とコストのグラフが得られます。太陽光とバッテリーのセクションは完全に任意で、後から追加できます。' },
          { q: '設定直後にダッシュボードが空なのはなぜですか？', a: 'エネルギーダッシュボードは1時間ごとの長期統計を読み込むため、最初の棒グラフは次の正時以降に表示され、丸1日で完全な日次ビューになります。数時間経っても何も表示されない場合は、センサーに必要な device_class と state_class があるか、設定 → ツール → 統計 でそのセンサーにエラーがないかを確認してください。' },
          { q: '地域の時間帯別料金が2つ以上の料金期間を持つ場合はどうなりますか？', a: 'はい。utility_meter インテグレーションは契約のタリフ数に合わせて消費量を分割でき、価格エンティティは事業者が公表する任意のスケジュールに従えます。系統接続のコスト設定で選択してください。' },
          { q: '設定をやり直さずに後から個別機器を追加できますか？', a: 'はい — 個別機器、太陽光、バッテリーはすべて、既に設定済みの系統センサーに影響を与えることなく、同じEnergy設定ページからいつでも独立して追加・削除できます。' },
          { q: 'このダッシュボードにはインターネット接続が必要ですか？', a: 'いいえ — センサーが設定されれば、Energyダッシュボードは完全にローカルのHome Assistantインスタンス上で動作し、インターネット障害時も動作し続けますが、選択したクラウドホスト型のセンサー連携があればそれは動作しません。' },
          { q: 'これは一般的なHome Assistantダッシュボードとどう違いますか？', a: 'Energyダッシュボードは、エネルギーセンサー専用に自動生成される目的特化型のビューです — 単位変換、コスト計算、分配グラフを自動的に処理します。手動で構築したダッシュボードでこれを再現するにはカスタムカードとテンプレートが必要になります。' },
          { q: '自動化はEnergyダッシュボードのデータを直接使えますか？', a: 'はい — Energyダッシュボードが読み取る基礎となるセンサーエンティティは標準のHome Assistantエンティティなので、どの自動化（ローカルエネルギー管理の概要にある負荷シフトの例を含む）もそれらを直接参照できます。' },
          { q: 'Home Assistant のエネルギーダッシュボードの設定にはどのくらいかかりますか？', a: 'エネルギーセンサーが揃っていれば通常数分です。系統センサーを選び、任意のソースを追加し、タリフを設定します。グラフは1時間ごとの統計から表示されるため、最初のデータは次の正時以降、完全な日次ビューは1日後が目安です。' },
          { q: 'エネルギーダッシュボードの一覧にセンサーが表示されないのはなぜですか？', a: '多くは必要な属性が不足しています。エネルギーセンサーには device_class energy と state_class total または total_increasing、電力センサーには device_class power と state_class measurement が必要です。また、対応する単位を持ち Recorder に保存される sensor エンティティである必要があります。' },
          { q: 'エアコンやボイラーをエネルギーダッシュボードで追跡できますか？', a: 'はい、電力（W）またはエネルギー（kWh）センサーを提供していれば可能です。エネルギーセンサーを「個別デバイス」に追加するか、先に「Integration (Riemann sum)」ヘルパーで電力センサーを変換し、二重カウントを避けるために上位デバイスを設定してください。' },
          { q: 'エネルギーダッシュボードをカスタマイズできますか？', a: 'はい。設定 → ダッシュボード → エネルギー → ダッシュボードを編集 → カードをカスタマイズ でカードの表示/非表示を切り替えられます。変更は全ユーザーに適用されます。完全に自由なレイアウトにしたい場合は、同じセンサーから通常のダッシュボードを作成してください。' },
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
      headline: 'Home Assistant Energyダッシュボード：完全設定ガイド（2026年）',
      description: '2026年版 Home Assistant エネルギーダッシュボードの設定：系統・太陽光・バッテリー・空調センサー、所要時間、レイアウト例、センサーが表示されない場合の対処。',
      url: 'https://www.promptquorum.com/ja/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: 'データを待つ', text: 'グラフを読む前に、最初の統計が出る次の正時まで待ち、完全な日次ビューには約1日を見込んでください。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Energyダッシュボードが機能するにはスマートメーターが必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — メイン電源のCTクランプはスマートメーターなしでも機能し、より一般的な構成です。' } },
        { '@type': 'Question', name: '太陽光やバッテリーなしでEnergyダッシュボードを使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。系統消費量の追跡だけでも使用量とコストのグラフが得られます。太陽光とバッテリーのセクションは任意です。' } },
        { '@type': 'Question', name: '設定直後にダッシュボードが空なのはなぜですか？', acceptedAnswer: { '@type': 'Answer', text: 'エネルギーダッシュボードは1時間ごとの統計を読み込むため、最初の棒グラフは次の正時以降に表示され、丸1日で完全な日次ビューになります。' } },
        { '@type': 'Question', name: 'このダッシュボードにはインターネット接続が必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — センサーが設定されれば、Energyダッシュボードは完全にローカルのHome Assistantインスタンス上で動作します。' } },
        { '@type': 'Question', name: '自動化はEnergyダッシュボードのデータを直接使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい — 基礎となるセンサーエンティティは標準のHome Assistantエンティティで、どの自動化も直接参照できます。' } },
        { '@type': 'Question', name: 'Home Assistant のエネルギーダッシュボードの設定にはどのくらいかかりますか？', acceptedAnswer: { '@type': 'Answer', text: 'エネルギーセンサーが揃っていれば通常数分です。グラフは1時間ごとの統計から表示されます。' } },
        { '@type': 'Question', name: 'エネルギーダッシュボードの一覧にセンサーが表示されないのはなぜですか？', acceptedAnswer: { '@type': 'Answer', text: '多くは必要な device_class または state_class が不足している、sensor エンティティではない、または Recorder に保存されていないことが原因です。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-zh.webp',
    title: 'Home Assistant能源仪表盘：完整设置指南（2026年）',
    seoTitle: 'Home Assistant能源仪表盘设置（2026年）',
    intro:
      'Home Assistant内置的能源仪表盘可在一个本地视图中追踪电网用电、太阳能发电、电池状态和单个设备的用电情况——设置只需添加几个传感器实体，无需编写任何自动化代码。本指南将介绍如何添加电网传感器、（如果有的话）太阳能与电池传感器、单设备追踪，以及如何解读由此生成的成本和用电图表。',
    metaDescription:
      '2026年 Home Assistant 能源仪表板设置指南：电网、太阳能、电池和暖通空调传感器，设置耗时，布局示例，以及传感器缺失的解决办法。',
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
      'home assistant 能源仪表板 示例',
      'home assistant 自定义能源仪表板',
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
          '传感器就绪后设置只需几分钟；图表基于每小时统计数据逐步填充，满一天后日视图才有参考价值',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '开始之前', anchor: 'before-you-start' },
      { label: '设置需要多长时间？', anchor: 'setup-time' },
      { label: '添加电网传感器', anchor: 'grid-sensor' },
      { label: '添加太阳能与电池', anchor: 'solar-battery' },
      { label: '添加单个设备', anchor: 'individual-devices' },
      { label: '追踪暖通空调等高功率设备', anchor: 'hvac-devices' },
      { label: '设置成本追踪', anchor: 'cost-tracking' },
      { label: '解读仪表盘', anchor: 'reading-dashboard' },
      { label: '布局示例与自定义仪表板', anchor: 'example-layouts' },
      { label: '解决传感器不显示的问题', anchor: 'missing-sensors' },
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
          '传感器就绪后配置只需几分钟；图表随首批每小时统计数据开始填充，满一天后日视图才有参考价值',
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
      setupTime: {
        id: 'setup-time',
        title: '设置需要多长时间？',
        content:
          '**能源传感器就绪后，配置能源仪表板通常只需几分钟——耗时的是安装和配对监测硬件，而不是仪表板本身。**',
        items: [
          '仅电网：选择一个传感器并设置电价，无需代码或 YAML。',
          '太阳能、电池和单个设备：在同一页面为每个传感器多做一次选择。',
          '图表：统计数据每小时汇总一次，因此第一批柱状图在下一个整点后出现，满一天后才有第一个完整的日视图。',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: '添加电网传感器',
        content:
          '**在设置 → 仪表盘 → 能源中，点击"电网"下的"添加用电量"，然后选择你的电网用电传感器实体。**',
        items: [
          '如果传感器报告的是功率（W）而不是能量（kWh），请先用 Home Assistant 的“Integration (Riemann sum)”辅助工具创建能量传感器，再添加该传感器——Home Assistant 只能根据功率采样值近似估算能量，因此采样越频繁，结果越准确。',
          '如果您有太阳能和独立的上网（输出）接入，请添加不含太阳能传感器的家庭电网接入，将逆变器添加为“太阳能电池板”来源，再将上网接入添加为第二个电网来源：只设置输出的能量，将功率测量设为“反转”，并配置上网补偿。',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: '追踪暖通空调等高功率设备',
        content:
          '**提供功率（W）或能量（kWh）传感器的空调和锅炉，可以像智能插座一样添加到“单个设备”——使用设备层级可避免重复计算。**',
        items: [
          '如果设备报告的是以瓦为单位的功率，可以直接添加功率传感器（需要 device_class power 和 state_class measurement），或用“Integration (Riemann sum)”辅助工具将其转换为能量后添加该传感器。',
          '要在一个仪表板中同时查看回路级电表和空调设备，请先把所有传感器添加为单个设备，再把回路级实体选为其包含设备的上游设备——这样可避免重复计算。',
          '有哪些传感器取决于设备的集成——购买额外的监测硬件之前，请先检查该集成是否提供功率或能量实体。',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: '设置成本追踪',
        content:
          '**在电网用电传感器的设置下配置你的电价，把kWh用量转换为成本估算——可以是固定电价，也可以是分时电价计划。**',
        items: [
          '固定电价是每kWh的单一价格，只需输入一次。',
          '分时电价的做法是用 utility_meter 集成将用电量拆分为不同电价时段（例如峰时和谷时），或让价格指向一个报告当前电价的实体，使成本计算与实际账单一致——负载转移自动化（参见本地能源管理概览）也依据这一点。',
          '如果您把太阳能电力输出到电网并获得收益，请在电网接入的输出（回馈电网）条目中配置补偿，以查看净成本，而不仅是用电成本。',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: '解读仪表盘',
        content:
          '**仪表板显示每日、每周和每月用电量、能量分配图（电网、太阳能、电池）以及成本摘要——柱状图会随每小时统计数据的汇总逐步出现，满一天后才有第一个完整的日视图。**',
        items: [
          '用电图表让你可以比较不同日期或星期，从而发现规律——设置完成后一个不错的初步检查是，看你的电网用电是否在太阳能发电时段如预期般下降。',
          '如果你有太阳能，分布图是查看自用比例最快的方式——你的用电量中有多少来自自身发电、多少来自电网。',
          '单设备条目让你能核实某台具体家电的用电量是否符合预期，这也有助于及早发现接线错误或配置错误的传感器。',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: '布局示例与自定义仪表板',
        content:
          '**能源仪表板是“配置”出来的，而不是“搭建”出来的：选择要显示的来源，再通过“自定义卡片”显示或隐藏卡片——更改对该实例的所有用户生效。**',
        items: [
          '示例 1——仅电网：一个用电传感器加电价，即可得到用量和成本图表。',
          '示例 2——太阳能家庭：电网用电、作为太阳能电池板的逆变器以及可选的电池传感器，可得到电网/太阳能/电池分配图。',
          '示例 3——设备级视图：添加单个设备（智能插座、空调、电动车充电桩）和上游层级，查看每个负载的占比。',
          '要自定义，请打开 设置 → 仪表板 → 能源 → 编辑仪表板 → 自定义卡片；卡片分为概览、电力、燃气、水和当前几组，来源配置完成前卡片不可用。',
          '如需完全自定义的布局，请用相同的传感器实体搭建常规仪表板。',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: '解决传感器不显示的问题',
        content:
          '**如果选择列表中缺少某个传感器，几乎总是因为它缺少正确的 device_class、state_class 或单位——请先检查这些。**',
        items: [
          '能量传感器：device_class energy，state_class 为 total 或 total_increasing。',
          '功率传感器：device_class power，state_class 为 measurement。',
          '电池：device_class battery、state_class measurement，单位为 %。燃气和水：device_class 为 gas 或 water，state_class 为 total 或 total_increasing。',
          '实体必须是 sensor（input_number 需用模板传感器转换）、使用受支持的单位，并由 Recorder 存储；请在 设置 → 工具 → 统计 中解决所有错误。',
          '总量虚高：不要通过模板或群组辅助工具把两个会重置的传感器（例如两个 utility_meter 传感器）相加——请分别添加每个累计传感器，并在 设置 → 工具 → 统计 中修正错误数据。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '能源仪表盘运行是否需要智能电表？', a: '不需要——主电源上的CT钳表无需智能电表即可工作，这也是更常见的配置方式。如果你的电力公司和地区支持，智能电表集成是一种替代方案。' },
          { q: '没有太阳能或电池能使用能源仪表盘吗？', a: '可以。仅电网用电追踪就能给你提供用量和成本图表。太阳能和电池部分完全是可选的，可以以后再添加。' },
          { q: '为什么设置完成后仪表盘是空的？', a: '能源仪表板读取每小时的长期统计数据，因此第一批柱状图会在下一个整点后出现，满一天后才有完整的日视图。如果几个小时后仍无显示，请检查传感器是否具有所需的 device_class 和 state_class，并确认 设置 → 工具 → 统计 中没有该传感器的错误。' },
          { q: '如果我所在地区的分时电价有两个以上的时段怎么办？', a: '可以——utility_meter 集成能按合同的电价时段数量拆分用电量，价格实体也可以遵循供应商公布的任何时间表。请在电网接入的成本设置中选择它。' },
          { q: '我能以后再添加单个设备而无需重做设置吗？', a: '可以——单个设备、太阳能和电池都可以随时从同一个能源配置页面独立添加或删除，不会影响已配置的电网传感器。' },
          { q: '这个仪表盘需要联网吗？', a: '不需要——传感器配置完成后，能源仪表盘完全运行在你本地的Home Assistant实例上，在网络中断期间仍会继续工作，尽管你选择使用的任何云托管传感器集成不会。' },
          { q: '这与通用的Home Assistant仪表盘有何不同？', a: '能源仪表盘是专为能源传感器打造、自动生成的视图——它会自动处理单位换算、成本计算和分布图，而手动搭建的仪表盘需要自定义卡片和模板才能复现这些功能。' },
          { q: '自动化能直接使用能源仪表盘的数据吗？', a: '可以——能源仪表盘读取的底层传感器实体是标准的Home Assistant实体，因此任何自动化（包括本地能源管理概览中的负荷转移示例）都可以直接引用它们。' },
          { q: '设置 Home Assistant 能源仪表板需要多长时间？', a: '能源传感器就绪后，配置通常只需几分钟：选择电网传感器，添加可选来源，并设置电价。图表基于每小时统计数据填充，首批数据约需等到下一个整点，完整的日视图约需一天。' },
          { q: '为什么我的传感器没有出现在能源仪表板列表中？', a: '通常是缺少必需属性：能量传感器需要 device_class energy 以及 state_class total 或 total_increasing，功率传感器需要 device_class power 和 state_class measurement。此外它必须是使用受支持单位、并由 Recorder 存储的 sensor 实体。' },
          { q: '我可以在能源仪表板中追踪空调或锅炉吗？', a: '可以，前提是它提供功率（W）或能量（kWh）传感器。将能量传感器添加到“单个设备”，或先用“Integration (Riemann sum)”辅助工具转换功率传感器，并设置上游设备以避免重复计算。' },
          { q: '我可以自定义能源仪表板吗？', a: '可以——打开 设置 → 仪表板 → 能源 → 编辑仪表板 → 自定义卡片 即可显示或隐藏卡片。更改对所有用户生效；如需完全自定义的布局，请用相同的传感器搭建常规仪表板。' },
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
      headline: 'Home Assistant能源仪表盘：完整设置指南（2026年）',
      description: '2026年 Home Assistant 能源仪表板设置指南：电网、太阳能、电池和暖通空调传感器，设置耗时，布局示例，以及传感器缺失的解决办法。',
      url: 'https://www.promptquorum.com/zh/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: '等待数据', text: '读取图表之前，请等待下一个整点以获得首批统计数据，并预留约一天时间以获得完整的日视图。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '能源仪表盘运行是否需要智能电表？', acceptedAnswer: { '@type': 'Answer', text: '不需要——主电源上的CT钳表无需智能电表即可工作，这也是更常见的配置方式。' } },
        { '@type': 'Question', name: '没有太阳能或电池能使用能源仪表盘吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。仅电网用电追踪就能提供用量和成本图表；太阳能和电池部分是可选的。' } },
        { '@type': 'Question', name: '为什么设置完成后仪表盘是空的？', acceptedAnswer: { '@type': 'Answer', text: '能源仪表板读取每小时统计数据，因此第一批柱状图会在下一个整点后出现，满一天后才有完整的日视图。' } },
        { '@type': 'Question', name: '这个仪表盘需要联网吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要——传感器配置完成后，能源仪表盘完全运行在你本地的Home Assistant实例上。' } },
        { '@type': 'Question', name: '自动化能直接使用能源仪表盘的数据吗？', acceptedAnswer: { '@type': 'Answer', text: '可以——底层传感器实体是标准的Home Assistant实体，任何自动化都可以直接引用它们。' } },
        { '@type': 'Question', name: '设置 Home Assistant 能源仪表板需要多长时间？', acceptedAnswer: { '@type': 'Answer', text: '能源传感器就绪后，配置通常只需几分钟；图表基于每小时统计数据填充。' } },
        { '@type': 'Question', name: '为什么我的传感器没有出现在能源仪表板列表中？', acceptedAnswer: { '@type': 'Answer', text: '通常是缺少所需的 device_class 或 state_class、不是 sensor 实体，或未被 Recorder 存储。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-es.webp',
    title: 'Panel de Energía de Home Assistant: guía completa de configuración (2026)',
    seoTitle: 'Configurar el panel de Energía de Home Assistant (2026)',
    intro:
      'El panel de Energía integrado de Home Assistant rastrea el consumo de red, la producción solar, el estado de la batería y el uso por dispositivo individual en una única vista local — la configuración consiste en añadir unas pocas entidades sensor, no en escribir código de automatización. Esta guía explica cómo añadir un sensor de red, sensores de solar y batería si los tienes, seguimiento de dispositivos individuales, y cómo leer los gráficos de costo y uso resultantes.',
    metaDescription:
      'Configura el panel de Energía de Home Assistant en 2026: sensores de red, solar, batería y climatización, tiempo de configuración, ejemplos de diseño y soluciones para sensores que faltan.',
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
      'ejemplos panel de energía home assistant',
      'panel de energía home assistant personalizado',
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
          'La configuración lleva minutos una vez que existen los sensores; los gráficos se llenan con estadísticas horarias y un día completo da una vista diaria útil',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Antes de empezar', anchor: 'before-you-start' },
      { label: '¿Cuánto tarda la configuración?', anchor: 'setup-time' },
      { label: 'Añadir un sensor de red', anchor: 'grid-sensor' },
      { label: 'Añadir solar y batería', anchor: 'solar-battery' },
      { label: 'Añadir dispositivos individuales', anchor: 'individual-devices' },
      { label: 'Seguir la climatización y otros equipos de alto consumo', anchor: 'hvac-devices' },
      { label: 'Configurar el seguimiento de costos', anchor: 'cost-tracking' },
      { label: 'Leer el panel', anchor: 'reading-dashboard' },
      { label: 'Ejemplos de diseño y personalización del panel', anchor: 'example-layouts' },
      { label: 'Solucionar sensores que no aparecen', anchor: 'missing-sensors' },
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
          'La configuración lleva minutos una vez que existen tus sensores; los gráficos empiezan a llenarse con las primeras estadísticas horarias y un día completo da una vista diaria útil',
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
      setupTime: {
        id: 'setup-time',
        title: '¿Cuánto tarda la configuración?',
        content:
          '**Configurar el panel de Energía suele llevar minutos una vez que existen tus sensores de energía; lo que consume tiempo es instalar y emparejar el hardware de medición, no el panel en sí.**',
        items: [
          'Solo red: una selección de sensor más una tarifa, sin código ni YAML.',
          'Solar, batería y dispositivos individuales: una selección adicional por sensor en la misma página.',
          'Gráficos: las estadísticas se calculan cada hora, así que las primeras barras aparecen tras la siguiente hora en punto y un día completo da la primera vista diaria completa.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Añadir un sensor de red',
        content:
          '**En Ajustes → Paneles → Energía, haz clic en "Añadir consumo" bajo Red eléctrica, y selecciona tu entidad sensor de consumo de red.**',
        items: [
          'Si tu sensor informa potencia (W) en lugar de energía (kWh), crea primero un sensor de energía con el ayudante Integración (Riemann sum) de Home Assistant y luego añade ese sensor: Home Assistant solo puede aproximar la energía a partir de muestras de potencia, así que un muestreo frecuente da mejores resultados.',
          'Si tienes solar y una conexión de exportación dedicada, añade la conexión de red de tu hogar sin el sensor solar, el inversor como fuente «Paneles solares» y la conexión de exportación como segunda fuente de Red: indica solo la energía exportada, configura la medición de potencia como «Invertida» y establece la compensación por exportación.',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: 'Seguir la climatización y otros equipos de alto consumo',
        content:
          '**Los aires acondicionados y calderas que exponen un sensor de potencia (W) o de energía (kWh) se pueden añadir en «Dispositivos individuales» como cualquier enchufe inteligente; usa una jerarquía de dispositivos para evitar contar dos veces.**',
        items: [
          'Si el equipo informa la potencia en vatios, añade el sensor de potencia directamente (necesita device_class power y state_class measurement) o conviértelo en energía con el ayudante Integración (Riemann sum) y añade ese sensor.',
          'Para ver un medidor de circuito y el equipo de climatización en un mismo panel, añade primero todos los sensores como dispositivos individuales y luego elige la entidad del circuito como dispositivo superior (upstream) de los dispositivos que contiene; así se evita el doble recuento.',
          'Los sensores disponibles dependen de la integración de tu equipo: comprueba si ofrece una entidad de potencia o de energía antes de comprar hardware de medición adicional.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Configurar el seguimiento de costos',
        content:
          '**Configura tu tarifa eléctrica bajo los ajustes del sensor de consumo de red para convertir el uso en kWh en estimaciones de costo — ya sea una tasa fija o un horario por franjas.**',
        items: [
          'Una tasa fija es un único precio por kWh, ingresado una vez.',
          'La tarifa por franjas horarias funciona dividiendo el consumo en tarifas con la integración utility_meter (por ejemplo, punta y valle) o haciendo que el precio apunte a una entidad que informe del precio actual, de modo que el cálculo del coste coincida con tu factura real; de esto dependen también las automatizaciones de desplazamiento de carga (consulta la visión general de gestión local de la energía).',
          'Si viertes excedentes solares a la red y te los compensan, configura la compensación en la entrada de exportación (retorno a la red) de la conexión de red para ver el coste neto y no solo el coste de consumo.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Leer el panel',
        content:
          '**El panel muestra el uso diario, semanal y mensual, un gráfico de distribución de energía (red, solar y batería) y un resumen de costes: las barras aparecen a medida que se calculan las estadísticas horarias y un día completo da la primera vista diaria completa.**',
        items: [
          'El gráfico de uso te permite comparar días o semanas para detectar patrones — una buena primera verificación tras la configuración es si tu consumo de red baja durante las horas de generación solar como se espera.',
          'El gráfico de distribución es la forma más rápida de ver la tasa de autoconsumo si tienes solar — cuánto de tu uso vino de tu propia generación frente a la red.',
          'Las entradas de dispositivo individual te permiten verificar que el uso de un electrodoméstico específico coincide con las expectativas, lo cual también es útil para detectar temprano un sensor mal cableado o mal configurado.',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: 'Ejemplos de diseño y personalización del panel',
        content:
          '**El panel de Energía se configura, no se construye: elige qué fuentes aparecen y muestra u oculta tarjetas con «Personalizar tarjetas»; los cambios se aplican a todos los usuarios de la instancia.**',
        items: [
          'Ejemplo 1 — solo red: un sensor de consumo y una tarifa dan gráficos de uso y coste.',
          'Ejemplo 2 — hogar con solar: el consumo de red, el inversor como paneles solares y sensores de batería opcionales dan el gráfico de distribución red/solar/batería.',
          'Ejemplo 3 — vista por dispositivo: añade dispositivos individuales (enchufes inteligentes, un aire acondicionado, un cargador de coche eléctrico) y una jerarquía superior para ver la parte de cada carga.',
          'Para personalizar, abre Ajustes → Paneles → Energía → Editar panel → Personalizar tarjetas; las tarjetas se agrupan en Resumen, Electricidad, Gas, Agua y Ahora, y una tarjeta no está disponible hasta que se configura su fuente.',
          'Para un diseño totalmente personalizado, crea un panel normal a partir de las mismas entidades de sensor.',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: 'Solucionar sensores que no aparecen',
        content:
          '**Si un sensor falta en la lista de selección, casi siempre le falta el device_class, state_class o la unidad correctos: revísalos primero.**',
        items: [
          'Sensores de energía: device_class energy con state_class total o total_increasing.',
          'Sensores de potencia: device_class power con state_class measurement.',
          'Batería: device_class battery, state_class measurement y unidad %. Gas y agua: device_class gas o water con state_class total o total_increasing.',
          'La entidad debe ser un sensor (convierte un input_number con un sensor de plantilla), usar una unidad compatible y estar guardada por el Recorder; resuelve cualquier error en Ajustes → Herramientas → Estadísticas.',
          'Totales inflados: no sumes dos sensores que se reinician (por ejemplo, dos sensores utility_meter) con una plantilla o un ayudante de grupo; añade cada sensor acumulativo por separado y corrige los datos erróneos en Ajustes → Herramientas → Estadísticas.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito un medidor inteligente para que funcione el panel de Energía?', a: 'No — una pinza amperométrica en tu acometida principal funciona sin medidor inteligente y es la configuración más común. Una integración de medidor inteligente es una alternativa si tu compañía eléctrica y región soportan una.' },
          { q: '¿Puedo usar el panel de Energía sin solar o batería?', a: 'Sí. El seguimiento de consumo de red por sí solo te da gráficos de uso y costo. Las secciones de solar y batería son completamente opcionales y pueden añadirse más tarde.' },
          { q: '¿Por qué mi panel está vacío justo después de configurarlo?', a: 'El panel de Energía lee estadísticas horarias a largo plazo, así que las primeras barras aparecen tras la siguiente hora en punto y un día completo da una vista diaria completa. Si pasadas unas horas no aparece nada, comprueba que el sensor tenga los device_class y state_class necesarios y que Ajustes → Herramientas → Estadísticas no muestre errores para él.' },
          { q: '¿Qué pasa si mi región usa una tarifa por horario con más de dos períodos de tasa?', a: 'Sí: la integración utility_meter puede dividir el consumo en tantas tarifas como tenga tu contrato, y una entidad de precio puede seguir cualquier calendario que publique tu proveedor. Selecciónala en los ajustes de coste de la conexión de red.' },
          { q: '¿Puedo añadir dispositivos individuales más tarde sin rehacer la configuración?', a: 'Sí — dispositivos individuales, solar y batería pueden añadirse o eliminarse independientemente en cualquier momento desde la misma página de configuración de Energía, sin afectar el sensor de red ya configurado.' },
          { q: '¿Este panel requiere conexión a internet?', a: 'No — una vez que los sensores están configurados, el panel de Energía funciona completamente en tu instancia local de Home Assistant y continúa funcionando durante un corte de internet, aunque cualquier integración de sensor alojada en la nube que hayas elegido usar no lo haría.' },
          { q: '¿En qué se diferencia esto de un panel genérico de Home Assistant?', a: 'El panel de Energía es una vista generada automáticamente y diseñada específicamente para sensores de energía — maneja la conversión de unidades, el cálculo de costos, y el gráfico de distribución automáticamente, lo cual un panel construido manualmente necesitaría tarjetas y plantillas personalizadas para replicar.' },
          { q: '¿Pueden las automatizaciones usar directamente los datos del panel de Energía?', a: 'Sí — las entidades sensor subyacentes de las que lee el panel de Energía son entidades estándar de Home Assistant, así que cualquier automatización (incluyendo los ejemplos de desplazamiento de carga en el resumen de gestión local de energía) puede referenciarlas directamente.' },
          { q: '¿Cuánto tarda en configurarse el panel de Energía de Home Assistant?', a: 'La configuración suele llevar minutos una vez que existen los sensores de energía: selecciona el sensor de red, añade fuentes opcionales y define una tarifa. Los gráficos se llenan con estadísticas horarias, así que cuenta con la siguiente hora en punto para los primeros datos y con un día para una vista diaria completa.' },
          { q: '¿Por qué falta mi sensor en la lista del panel de Energía?', a: 'Normalmente le faltan atributos obligatorios: los sensores de energía necesitan device_class energy y state_class total o total_increasing, y los de potencia device_class power y state_class measurement. Además debe ser una entidad sensor con una unidad compatible que el Recorder almacene.' },
          { q: '¿Puedo seguir mi aire acondicionado o mi caldera en el panel de Energía?', a: 'Sí, si expone un sensor de potencia (W) o de energía (kWh). Añade el sensor de energía en «Dispositivos individuales», o convierte antes un sensor de potencia con el ayudante Integración (Riemann sum), y define un dispositivo superior para evitar el doble recuento.' },
          { q: '¿Puedo personalizar el panel de Energía?', a: 'Sí: abre Ajustes → Paneles → Energía → Editar panel → Personalizar tarjetas para mostrar u ocultar tarjetas. Los cambios se aplican a todos los usuarios; para un diseño totalmente personalizado, crea un panel normal a partir de los mismos sensores.' },
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
      headline: 'Panel de Energía de Home Assistant: guía completa de configuración (2026)',
      description: 'Configura el panel de Energía de Home Assistant en 2026: sensores de red, solar, batería y climatización, tiempo de configuración, ejemplos de diseño y soluciones para sensores que faltan.',
      url: 'https://www.promptquorum.com/es/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: 'Esperar datos', text: 'Espera a la siguiente hora en punto para las primeras estadísticas, y aproximadamente un día para una vista diaria completa, antes de leer los gráficos.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito un medidor inteligente para que funcione el panel de Energía?', acceptedAnswer: { '@type': 'Answer', text: 'No — una pinza amperométrica en tu acometida principal funciona sin medidor inteligente y es la configuración más común.' } },
        { '@type': 'Question', name: '¿Puedo usar el panel de Energía sin solar o batería?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. El seguimiento de consumo de red por sí solo da gráficos de uso y costo; las secciones de solar y batería son opcionales.' } },
        { '@type': 'Question', name: '¿Por qué mi panel está vacío justo después de configurarlo?', acceptedAnswer: { '@type': 'Answer', text: 'El panel de Energía lee estadísticas horarias, así que las primeras barras aparecen tras la siguiente hora en punto y un día completo da una vista diaria completa.' } },
        { '@type': 'Question', name: '¿Este panel requiere conexión a internet?', acceptedAnswer: { '@type': 'Answer', text: 'No — una vez configurados los sensores, el panel de Energía funciona completamente en tu instancia local de Home Assistant.' } },
        { '@type': 'Question', name: '¿Pueden las automatizaciones usar directamente los datos del panel de Energía?', acceptedAnswer: { '@type': 'Answer', text: 'Sí — las entidades sensor subyacentes son entidades estándar de Home Assistant que cualquier automatización puede referenciar directamente.' } },
        { '@type': 'Question', name: '¿Cuánto tarda en configurarse el panel de Energía de Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'La configuración suele llevar minutos una vez que existen los sensores de energía; los gráficos se llenan con estadísticas horarias.' } },
        { '@type': 'Question', name: '¿Por qué falta mi sensor en la lista del panel de Energía?', acceptedAnswer: { '@type': 'Answer', text: 'Normalmente le falta el device_class o state_class necesario, no es una entidad sensor o el Recorder no la almacena.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-pt.webp',
    title: 'Painel de Energia do Home Assistant: guia completo de configuração (2026)',
    seoTitle: 'Configurar o painel de Energia do Home Assistant (2026)',
    intro:
      'O painel de Energia embutido do Home Assistant rastreia consumo de rede, geração solar, estado da bateria e uso por dispositivo individual em uma única visão local — a configuração consiste em adicionar algumas entidades de sensor, não em escrever código de automação. Este guia percorre como adicionar um sensor de rede, sensores de solar e bateria se você tiver, rastreamento de dispositivos individuais, e como ler os gráficos de custo e uso resultantes.',
    metaDescription:
      'Configure o painel de Energia do Home Assistant em 2026: sensores de rede, solar, bateria e climatização, tempo de configuração, exemplos de layout e soluções para sensores ausentes.',
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
      'exemplos painel de energia home assistant',
      'painel de energia home assistant personalizado',
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
          'A configuração leva minutos quando os sensores já existem; os gráficos são preenchidos por estatísticas horárias e um dia completo dá uma visão diária útil',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Antes de começar', anchor: 'before-you-start' },
      { label: 'Quanto tempo leva a configuração?', anchor: 'setup-time' },
      { label: 'Adicionando um sensor de rede', anchor: 'grid-sensor' },
      { label: 'Adicionando solar e bateria', anchor: 'solar-battery' },
      { label: 'Adicionando dispositivos individuais', anchor: 'individual-devices' },
      { label: 'Acompanhar climatização e outros equipamentos de alto consumo', anchor: 'hvac-devices' },
      { label: 'Configurando o rastreamento de custos', anchor: 'cost-tracking' },
      { label: 'Lendo o painel', anchor: 'reading-dashboard' },
      { label: 'Exemplos de layout e personalização do painel', anchor: 'example-layouts' },
      { label: 'Resolver sensores que não aparecem', anchor: 'missing-sensors' },
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
          'A configuração leva minutos quando seus sensores já existem; os gráficos começam a ser preenchidos com as primeiras estatísticas horárias e um dia completo dá uma visão diária útil',
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
      setupTime: {
        id: 'setup-time',
        title: 'Quanto tempo leva a configuração?',
        content:
          '**Configurar o painel de Energia costuma levar minutos quando seus sensores de energia já existem — o que consome tempo é instalar e parear o hardware de medição, não o painel em si.**',
        items: [
          'Somente rede: uma seleção de sensor mais uma tarifa, sem código nem YAML.',
          'Solar, bateria e dispositivos individuais: uma seleção adicional por sensor na mesma página.',
          'Gráficos: as estatísticas são calculadas a cada hora, então as primeiras barras aparecem após a próxima hora cheia e um dia completo dá a primeira visão diária completa.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'Adicionando um sensor de rede',
        content:
          '**Em Configurações → Painéis → Energia, clique em "Adicionar consumo" sob Rede elétrica, e selecione sua entidade de sensor de consumo de rede.**',
        items: [
          'Se o seu sensor informa potência (W) em vez de energia (kWh), primeiro crie um sensor de energia com o auxiliar Integração (Riemann sum) do Home Assistant e depois adicione esse sensor — o Home Assistant só consegue aproximar a energia a partir de amostras de potência, então amostragens frequentes dão resultados melhores.',
          'Se você tem solar e uma conexão de exportação dedicada, adicione a conexão de rede da residência sem o sensor solar, o inversor como fonte «Painéis solares» e a conexão de exportação como segunda fonte de Rede: informe apenas a energia exportada, defina a medição de potência como «Invertida» e configure a compensação pela exportação.',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: 'Acompanhar climatização e outros equipamentos de alto consumo',
        content:
          '**Aparelhos de ar-condicionado e caldeiras que expõem um sensor de potência (W) ou de energia (kWh) podem ser adicionados em «Dispositivos individuais» como qualquer tomada inteligente — use uma hierarquia de dispositivos para evitar contagem dupla.**',
        items: [
          'Se o equipamento informa a potência em watts, adicione o sensor de potência diretamente (ele precisa de device_class power e state_class measurement) ou converta-o em energia com o auxiliar Integração (Riemann sum) e adicione esse sensor.',
          'Para ver um medidor de circuito e o equipamento de climatização no mesmo painel, adicione primeiro todos os sensores como dispositivos individuais e depois escolha a entidade do circuito como dispositivo superior (upstream) dos dispositivos que ela contém — isso evita a contagem dupla.',
          'Os sensores disponíveis dependem da integração do seu equipamento — verifique se ela oferece uma entidade de potência ou energia antes de comprar hardware de medição adicional.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'Configurando o rastreamento de custos',
        content:
          '**Configure sua tarifa elétrica nas configurações do sensor de consumo de rede para transformar o uso em kWh em estimativas de custo — seja uma taxa fixa ou um horário por faixas.**',
        items: [
          'Uma taxa fixa é um único preço por kWh, inserido uma vez.',
          'A tarifa por horário funciona dividindo o consumo em tarifas com a integração utility_meter (por exemplo, ponta e fora de ponta) ou apontando o preço para uma entidade que informa o preço atual, para que o cálculo de custo corresponda à sua conta real — é nisso que as automações de deslocamento de carga (veja a visão geral de gestão local de energia) se baseiam.',
          'Se você injeta solar na rede e é remunerado por isso, configure a compensação na entrada de exportação (retorno à rede) da conexão de rede para ver o custo líquido, e não apenas o custo de consumo.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'Lendo o painel',
        content:
          '**O painel mostra o uso diário, semanal e mensal, um gráfico de distribuição de energia (rede, solar e bateria) e um resumo de custos — as barras aparecem conforme as estatísticas horárias são calculadas, e um dia completo dá a primeira visão diária completa.**',
        items: [
          'O gráfico de uso permite comparar dias ou semanas para identificar padrões — uma boa primeira verificação após a configuração é se seu consumo de rede cai durante os horários de geração solar como esperado.',
          'O gráfico de distribuição é a forma mais rápida de ver a taxa de autoconsumo se você tem solar — quanto do seu uso veio da sua própria geração versus a rede.',
          'As entradas de dispositivo individual permitem verificar se o uso de um eletrodoméstico específico corresponde às expectativas, o que também é útil para detectar cedo um sensor mal cabeado ou mal configurado.',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: 'Exemplos de layout e personalização do painel',
        content:
          '**O painel de Energia é configurado, não construído: escolha quais fontes aparecem e mostre ou oculte cartões com «Personalizar cartões» — as alterações valem para todos os usuários da instância.**',
        items: [
          'Exemplo 1 — somente rede: um sensor de consumo e uma tarifa geram gráficos de uso e custo.',
          'Exemplo 2 — casa com solar: consumo da rede, o inversor como painéis solares e sensores de bateria opcionais geram o gráfico de distribuição rede/solar/bateria.',
          'Exemplo 3 — visão por dispositivo: adicione dispositivos individuais (tomadas inteligentes, um ar-condicionado, um carregador de carro elétrico) e uma hierarquia superior para ver a participação de cada carga.',
          'Para personalizar, abra Configurações → Painéis → Energia → Editar painel → Personalizar cartões; os cartões são agrupados em Visão geral, Eletricidade, Gás, Água e Agora, e um cartão fica indisponível até que sua fonte seja configurada.',
          'Para um layout totalmente personalizado, crie um painel comum a partir das mesmas entidades de sensor.',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: 'Resolver sensores que não aparecem',
        content:
          '**Se um sensor não aparece na lista de seleção, quase sempre falta o device_class, state_class ou a unidade correta — verifique-os primeiro.**',
        items: [
          'Sensores de energia: device_class energy com state_class total ou total_increasing.',
          'Sensores de potência: device_class power com state_class measurement.',
          'Bateria: device_class battery, state_class measurement e unidade %. Gás e água: device_class gas ou water com state_class total ou total_increasing.',
          'A entidade precisa ser um sensor (converta um input_number com um sensor de modelo), usar uma unidade compatível e ser armazenada pelo Recorder; resolva quaisquer erros em Configurações → Ferramentas → Estatísticas.',
          'Totais inflados: não some dois sensores que reiniciam (por exemplo, dois sensores utility_meter) com um modelo ou auxiliar de grupo — adicione cada sensor cumulativo separadamente e corrija dados incorretos em Configurações → Ferramentas → Estatísticas.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de um medidor inteligente para o painel de Energia funcionar?', a: 'Não — um alicate amperímetro na sua entrada principal funciona sem medidor inteligente e é a configuração mais comum. Uma integração de medidor inteligente é uma alternativa se sua concessionária e região suportarem uma.' },
          { q: 'Posso usar o painel de Energia sem solar ou bateria?', a: 'Sim. O rastreamento de consumo de rede sozinho já dá gráficos de uso e custo. As seções de solar e bateria são totalmente opcionais e podem ser adicionadas depois.' },
          { q: 'Por que meu painel está vazio logo após a configuração?', a: 'O painel de Energia lê estatísticas horárias de longo prazo, então as primeiras barras aparecem após a próxima hora cheia e um dia completo dá uma visão diária completa. Se nada aparecer após algumas horas, verifique se o sensor tem os device_class e state_class necessários e se Configurações → Ferramentas → Estatísticas não mostra erros para ele.' },
          { q: 'E se minha região usa uma tarifa por horário com mais de dois períodos de taxa?', a: 'Sim — a integração utility_meter pode dividir o consumo em quantas tarifas o seu contrato tiver, e uma entidade de preço pode seguir qualquer cronograma publicado pela sua distribuidora. Selecione-a nas configurações de custo da conexão de rede.' },
          { q: 'Posso adicionar dispositivos individuais depois sem refazer a configuração?', a: 'Sim — dispositivos individuais, solar e bateria podem todos ser adicionados ou removidos independentemente a qualquer momento na mesma página de configuração de Energia, sem afetar o sensor de rede já configurado.' },
          { q: 'Este painel precisa de conexão à internet?', a: 'Não — assim que os sensores estão configurados, o painel de Energia roda inteiramente na sua instância local do Home Assistant e continua funcionando durante uma queda de internet, embora qualquer integração de sensor hospedada na nuvem que você tenha escolhido usar não continuaria.' },
          { q: 'Como isso difere de um painel genérico do Home Assistant?', a: 'O painel de Energia é uma visão gerada automaticamente e feita especificamente para sensores de energia — ele lida com conversão de unidades, cálculo de custo, e o gráfico de distribuição automaticamente, o que um painel construído manualmente precisaria de cartões e modelos personalizados para replicar.' },
          { q: 'As automações podem usar os dados do painel de Energia diretamente?', a: 'Sim — as entidades de sensor subjacentes que o painel de Energia lê são entidades padrão do Home Assistant, então qualquer automação (incluindo os exemplos de deslocamento de carga na visão geral de gestão local de energia) pode referenciá-las diretamente.' },
          { q: 'Quanto tempo leva para configurar o painel de Energia do Home Assistant?', a: 'A configuração costuma levar minutos quando os sensores de energia já existem: selecione o sensor de rede, adicione fontes opcionais e defina uma tarifa. Os gráficos são preenchidos por estatísticas horárias, então conte com a próxima hora cheia para os primeiros dados e um dia para uma visão diária completa.' },
          { q: 'Por que meu sensor não aparece na lista do painel de Energia?', a: 'Normalmente faltam atributos obrigatórios: sensores de energia precisam de device_class energy e state_class total ou total_increasing, e sensores de potência de device_class power e state_class measurement. Também precisa ser uma entidade sensor com unidade compatível armazenada pelo Recorder.' },
          { q: 'Posso acompanhar meu ar-condicionado ou caldeira no painel de Energia?', a: 'Sim, se ele expuser um sensor de potência (W) ou de energia (kWh). Adicione o sensor de energia em «Dispositivos individuais», ou converta antes um sensor de potência com o auxiliar Integração (Riemann sum), e defina um dispositivo superior para evitar contagem dupla.' },
          { q: 'Posso personalizar o painel de Energia?', a: 'Sim — abra Configurações → Painéis → Energia → Editar painel → Personalizar cartões para mostrar ou ocultar cartões. As alterações valem para todos os usuários; para um layout totalmente personalizado, crie um painel comum a partir dos mesmos sensores.' },
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
      headline: 'Painel de Energia do Home Assistant: guia completo de configuração (2026)',
      description: 'Configure o painel de Energia do Home Assistant em 2026: sensores de rede, solar, bateria e climatização, tempo de configuração, exemplos de layout e soluções para sensores ausentes.',
      url: 'https://www.promptquorum.com/pt/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: 'Aguardar dados', text: 'Aguarde a próxima hora cheia para as primeiras estatísticas, e cerca de um dia para uma visão diária completa, antes de ler os gráficos.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de um medidor inteligente para o painel de Energia funcionar?', acceptedAnswer: { '@type': 'Answer', text: 'Não — um alicate amperímetro na sua entrada principal funciona sem medidor inteligente e é a configuração mais comum.' } },
        { '@type': 'Question', name: 'Posso usar o painel de Energia sem solar ou bateria?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O rastreamento de consumo de rede sozinho já dá gráficos de uso e custo; as seções de solar e bateria são opcionais.' } },
        { '@type': 'Question', name: 'Por que meu painel está vazio logo após a configuração?', acceptedAnswer: { '@type': 'Answer', text: 'O painel de Energia lê estatísticas horárias, então as primeiras barras aparecem após a próxima hora cheia e um dia completo dá uma visão diária completa.' } },
        { '@type': 'Question', name: 'Este painel precisa de conexão à internet?', acceptedAnswer: { '@type': 'Answer', text: 'Não — assim que os sensores estão configurados, o painel de Energia roda inteiramente na sua instância local do Home Assistant.' } },
        { '@type': 'Question', name: 'As automações podem usar os dados do painel de Energia diretamente?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — as entidades de sensor subjacentes são entidades padrão do Home Assistant que qualquer automação pode referenciar diretamente.' } },
        { '@type': 'Question', name: 'Quanto tempo leva para configurar o painel de Energia do Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'A configuração costuma levar minutos quando os sensores de energia já existem; os gráficos são preenchidos por estatísticas horárias.' } },
        { '@type': 'Question', name: 'Por que meu sensor não aparece na lista do painel de Energia?', acceptedAnswer: { '@type': 'Answer', text: 'Normalmente falta o device_class ou state_class necessário, não é uma entidade sensor ou o Recorder não a armazena.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-ar.webp',
    title: 'لوحة Energy في Home Assistant: دليل الإعداد الكامل (⁨2026⁩)',
    seoTitle: 'إعداد لوحة Energy في Home Assistant (⁨2026⁩)',
    intro:
      'تتبع لوحة Energy المدمجة في Home Assistant استهلاك الشبكة، والإنتاج الشمسي، وحالة البطارية، واستخدام الأجهزة الفردية في عرض محلي واحد — يتطلب الإعداد إضافة بضع كيانات مستشعر، وليس كتابة أي كود أتمتة. يستعرض هذا الدليل إضافة مستشعر شبكة، ومستشعرات شمسية وبطارية إن وُجدت، وتتبع الأجهزة الفردية، وقراءة رسوم التكلفة والاستخدام البيانية الناتجة.',
    metaDescription:
      'إعداد لوحة الطاقة في Home Assistant لعام 2026: مستشعرات الشبكة والطاقة الشمسية والبطارية وأنظمة التكييف، مدة الإعداد، أمثلة للتخطيط، وحلول للمستشعرات غير الظاهرة.',
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
      'أمثلة لوحة الطاقة home assistant',
      'تخصيص لوحة الطاقة home assistant',
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
          'يستغرق الإعداد دقائق بمجرد توفر المستشعرات؛ تمتلئ الرسوم البيانية من الإحصاءات الساعية، ويمنحك يوم كامل عرضًا يوميًا مفيدًا',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'قبل أن تبدأ', anchor: 'before-you-start' },
      { label: 'كم تستغرق عملية الإعداد؟', anchor: 'setup-time' },
      { label: 'إضافة مستشعر الشبكة', anchor: 'grid-sensor' },
      { label: 'إضافة الطاقة الشمسية والبطارية', anchor: 'solar-battery' },
      { label: 'إضافة أجهزة فردية', anchor: 'individual-devices' },
      { label: 'تتبّع التكييف والأجهزة عالية الاستهلاك', anchor: 'hvac-devices' },
      { label: 'إعداد تتبع التكلفة', anchor: 'cost-tracking' },
      { label: 'قراءة اللوحة', anchor: 'reading-dashboard' },
      { label: 'أمثلة للتخطيط وتخصيص اللوحة', anchor: 'example-layouts' },
      { label: 'إصلاح المستشعرات التي لا تظهر', anchor: 'missing-sensors' },
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
          'يستغرق الإعداد دقائق بمجرد توفر مستشعراتك؛ تبدأ الرسوم البيانية بالامتلاء مع أولى الإحصاءات الساعية، ويمنحك يوم كامل عرضًا يوميًا مفيدًا',
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
      setupTime: {
        id: 'setup-time',
        title: 'كم تستغرق عملية الإعداد؟',
        content:
          '**يستغرق إعداد لوحة الطاقة عادةً دقائق بمجرد توفر مستشعرات الطاقة — الجزء المستهلك للوقت هو تركيب أجهزة المراقبة وإقرانها، وليس اللوحة نفسها.**',
        items: [
          'الشبكة فقط: اختيار مستشعر واحد مع تعريفة، دون أي كود أو YAML.',
          'الطاقة الشمسية والبطارية والأجهزة الفردية: اختيار إضافي واحد لكل مستشعر في الصفحة نفسها.',
          'الرسوم البيانية: تُحتسب الإحصاءات كل ساعة، لذا تظهر أولى الأعمدة بعد الساعة الكاملة التالية، ويمنحك يوم كامل أول عرض يومي مكتمل.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: 'إضافة مستشعر الشبكة',
        content:
          '**في الإعدادات ← لوحات المعلومات ← الطاقة، انقر على "إضافة استهلاك" ضمن شبكة الكهرباء، واختر كيان مستشعر استهلاك الشبكة لديك.**',
        items: [
          'إذا كان المستشعر يُبلّغ عن القدرة (W) بدلًا من الطاقة (kWh)، فأنشئ أولًا مستشعر طاقة باستخدام مساعد Integration (Riemann sum) في Home Assistant ثم أضف هذا المستشعر — يستطيع Home Assistant تقدير الطاقة تقريبيًا فقط من عينات القدرة، لذا يمنح أخذ العينات المتكرر نتائج أفضل.',
          'إذا كان لديك طاقة شمسية واتصال تصدير مخصص، فأضف اتصال شبكة المنزل دون مستشعر الطاقة الشمسية، وأضف العاكس كمصدر «الألواح الشمسية»، وأضف اتصال التصدير كمصدر شبكة ثانٍ: اضبط الطاقة المصدَّرة فقط، واضبط قياس القدرة على «معكوس»، وقم بإعداد تعويض التصدير.',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: 'تتبّع التكييف والأجهزة عالية الاستهلاك',
        content:
          '**يمكن إضافة المكيّفات والغلايات التي توفّر مستشعر قدرة (W) أو طاقة (kWh) ضمن «الأجهزة الفردية» مثل أي مقبس ذكي — استخدم تسلسلًا هرميًا للأجهزة لتجنب الاحتساب المزدوج.**',
        items: [
          'إذا كان الجهاز يُبلّغ عن القدرة بالواط، فأضف مستشعر القدرة مباشرةً (يتطلب device_class power وstate_class measurement) أو حوّله إلى طاقة بمساعد Integration (Riemann sum) ثم أضف ذلك المستشعر.',
          'لعرض عدّاد على مستوى الدائرة وجهاز التكييف في لوحة واحدة، أضف كل المستشعرات أولًا كأجهزة فردية، ثم اختر كيان الدائرة كجهاز أعلى (upstream) للأجهزة التي يحتويها — وهذا يمنع الاحتساب المزدوج.',
          'تعتمد المستشعرات المتاحة على تكامل جهازك — تحقق منه بحثًا عن كيان للقدرة أو الطاقة قبل شراء أجهزة مراقبة إضافية.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: 'إعداد تتبع التكلفة',
        content:
          '**اضبط تعرفة الكهرباء لديك ضمن إعدادات مستشعر استهلاك الشبكة لتحويل استخدام kWh إلى تقديرات تكلفة — إما سعر ثابت أو جدول حسب الوقت.**',
        items: [
          'السعر الثابت هو سعر واحد لكل kWh، يُدخَل مرة واحدة.',
          'تعمل التعريفة حسب وقت الاستخدام بتقسيم الاستهلاك إلى تعريفات باستخدام تكامل utility_meter (مثل ذروة وغير ذروة)، أو بتوجيه السعر إلى كيان يُبلّغ عن السعر الحالي، ليطابق حساب التكلفة فاتورتك الفعلية — وهذا ما تعتمد عليه أتمتة نقل الأحمال (راجع نظرة عامة على إدارة الطاقة المحلية).',
          'إذا كنت تصدّر الطاقة الشمسية إلى الشبكة وتحصل على مقابل، فاضبط التعويض في إدخال التصدير (العودة إلى الشبكة) ضمن اتصال الشبكة لترى صافي التكلفة وليس تكلفة الاستهلاك فقط.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: 'قراءة اللوحة',
        content:
          '**تعرض اللوحة الاستخدام اليومي والأسبوعي والشهري، ومخطط توزيع الطاقة (الشبكة مقابل الشمس مقابل البطارية)، وملخصًا للتكلفة — تظهر الأعمدة مع احتساب الإحصاءات الساعية، ويمنحك يوم كامل أول عرض يومي مكتمل.**',
        items: [
          'يتيح لك الرسم البياني للاستخدام مقارنة الأيام أو الأسابيع لرصد الأنماط — فحص أولي جيد بعد الإعداد هو ما إذا كان سحب الشبكة لديك ينخفض خلال ساعات الإنتاج الشمسي كما هو متوقع.',
          'الرسم البياني للتوزيع هو أسرع طريقة لرؤية نسبة الاستهلاك الذاتي إذا كانت لديك طاقة شمسية — مقدار ما جاء من استخدامك من إنتاجك الخاص مقابل الشبكة.',
          'تتيح لك إدخالات الأجهزة الفردية التحقق من أن استخدام جهاز معين يتوافق مع التوقعات، وهو مفيد أيضًا لاكتشاف مستشعر مُوصَّل أو مُعدّ بشكل خاطئ مبكرًا.',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: 'أمثلة للتخطيط وتخصيص اللوحة',
        content:
          '**لوحة الطاقة تُهيَّأ ولا تُبنى: اختر المصادر التي تظهر، ثم أظهر البطاقات أو أخفِها عبر «تخصيص البطاقات» — وتسري التغييرات على جميع مستخدمي النسخة.**',
        items: [
          'المثال 1 — الشبكة فقط: مستشعر استهلاك واحد وتعريفة يمنحان رسوم الاستخدام والتكلفة.',
          'المثال 2 — منزل بطاقة شمسية: استهلاك الشبكة والعاكس كألواح شمسية ومستشعرات بطارية اختيارية تمنح مخطط توزيع الشبكة/الشمس/البطارية.',
          'المثال 3 — عرض على مستوى الجهاز: أضف أجهزة فردية (مقابس ذكية، مكيّف، شاحن سيارة كهربائية) وتسلسلًا هرميًا علويًا لترى حصة كل حِمل.',
          'للتخصيص افتح الإعدادات ← اللوحات ← الطاقة ← تعديل اللوحة ← تخصيص البطاقات؛ تُجمَّع البطاقات في نظرة عامة، الكهرباء، الغاز، المياه، والآن، وتظل البطاقة غير متاحة حتى يتم إعداد مصدرها.',
          'للحصول على تخطيط مخصص بالكامل، أنشئ لوحة عادية من كيانات المستشعرات نفسها.',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: 'إصلاح المستشعرات التي لا تظهر',
        content:
          '**إذا كان مستشعر مفقودًا من قائمة الاختيار، فيكاد يكون السبب دائمًا نقص device_class أو state_class أو الوحدة الصحيحة — تحقق منها أولًا.**',
        items: [
          'مستشعرات الطاقة: device_class energy مع state_class بقيمة total أو total_increasing.',
          'مستشعرات القدرة: device_class power مع state_class measurement.',
          'البطارية: device_class battery وstate_class measurement ووحدة %. الغاز والمياه: device_class بقيمة gas أو water مع state_class بقيمة total أو total_increasing.',
          'يجب أن يكون الكيان من نوع sensor (حوّل input_number بمستشعر قالب)، وبوحدة مدعومة، ومخزَّنًا لدى Recorder؛ وعالج أي أخطاء في الإعدادات ← الأدوات ← الإحصاءات.',
          'مجاميع متضخمة: لا تجمع مستشعرين يُعاد ضبطهما (مثل مستشعري utility_meter) عبر قالب أو مساعد مجموعة — أضف كل مستشعر تراكمي على حدة وصحّح البيانات الخاطئة في الإعدادات ← الأدوات ← الإحصاءات.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج إلى عداد ذكي حتى تعمل لوحة Energy؟', a: 'لا — يعمل مشبك تيار على التغذية الرئيسية دون عداد ذكي وهو الإعداد الأكثر شيوعًا. دمج العداد الذكي بديل إذا كانت شركة المرافق ومنطقتك تدعمانه.' },
          { q: 'هل يمكنني استخدام لوحة Energy دون طاقة شمسية أو بطارية؟', a: 'نعم. يمنحك تتبع استهلاك الشبكة وحده رسومًا بيانية للاستخدام والتكلفة. قسما الطاقة الشمسية والبطارية اختياريان تمامًا ويمكن إضافتهما لاحقًا.' },
          { q: 'لماذا لوحتي فارغة مباشرة بعد الإعداد؟', a: 'تقرأ لوحة الطاقة إحصاءات طويلة الأمد بالساعة، لذا تظهر أولى الأعمدة بعد الساعة الكاملة التالية، ويمنحك يوم كامل عرضًا يوميًا مكتملًا. إذا لم يظهر شيء بعد بضع ساعات، فتحقق من أن المستشعر يملك device_class وstate_class المطلوبين، وأن الإعدادات ← الأدوات ← الإحصاءات لا تعرض أخطاء له.' },
          { q: 'ماذا لو كانت منطقتي تستخدم تعرفة حسب الوقت بأكثر من فترتي أسعار؟', a: 'نعم — يمكن لتكامل utility_meter تقسيم الاستهلاك إلى عدد التعريفات الموجودة في عقدك، ويمكن لكيان السعر اتباع أي جدول ينشره مزوّدك. اخترْه في إعدادات التكلفة ضمن اتصال الشبكة.' },
          { q: 'هل يمكنني إضافة أجهزة فردية لاحقًا دون إعادة الإعداد؟', a: 'نعم — يمكن إضافة أو إزالة الأجهزة الفردية والطاقة الشمسية والبطارية بشكل مستقل في أي وقت من نفس صفحة إعداد الطاقة، دون التأثير على مستشعر الشبكة المُعدّ بالفعل.' },
          { q: 'هل تحتاج هذه اللوحة إلى اتصال بالإنترنت؟', a: 'لا — بمجرد ضبط المستشعرات، تعمل لوحة Energy بالكامل على نسخة Home Assistant المحلية لديك وتستمر في العمل أثناء انقطاع الإنترنت، رغم أن أي دمج مستشعر مستضاف على السحابة اخترت استخدامه لن يعمل.' },
          { q: 'كيف تختلف هذه عن لوحة Home Assistant العامة؟', a: 'لوحة Energy هي عرض مُولَّد تلقائيًا ومصمم خصيصًا لمستشعرات الطاقة — تتعامل مع تحويل الوحدات وحساب التكلفة والرسم البياني للتوزيع تلقائيًا، وهو ما تحتاج لوحة مبنية يدويًا إلى بطاقات وقوالب مخصصة لتكراره.' },
          { q: 'هل يمكن للأتمتة استخدام بيانات لوحة Energy مباشرة؟', a: 'نعم — كيانات المستشعر الأساسية التي تقرأ منها لوحة Energy هي كيانات قياسية في Home Assistant، لذا يمكن لأي أتمتة (بما في ذلك أمثلة تحويل الحمل في نظرة عامة إدارة الطاقة المحلية) الإشارة إليها مباشرة.' },
          { q: 'كم يستغرق إعداد لوحة الطاقة في Home Assistant؟', a: 'يستغرق الإعداد عادةً دقائق بمجرد توفر مستشعرات الطاقة: اختر مستشعر الشبكة، وأضف المصادر الاختيارية، وحدّد تعريفة. تمتلئ الرسوم البيانية من إحصاءات ساعية، لذا توقّع الساعة الكاملة التالية لأولى البيانات ويومًا لعرض يومي مكتمل.' },
          { q: 'لماذا لا يظهر مستشعري في قائمة لوحة الطاقة؟', a: 'غالبًا ينقصه أحد السمات المطلوبة: تحتاج مستشعرات الطاقة إلى device_class energy وstate_class بقيمة total أو total_increasing، وتحتاج مستشعرات القدرة إلى device_class power وstate_class measurement. ويجب أن يكون كيان sensor بوحدة مدعومة يخزّنها Recorder.' },
          { q: 'هل يمكنني تتبّع مكيّفي أو غلايتي في لوحة الطاقة؟', a: 'نعم، إذا كان يوفّر مستشعر قدرة (W) أو طاقة (kWh). أضف مستشعر الطاقة ضمن «الأجهزة الفردية»، أو حوّل مستشعر القدرة أولًا بمساعد Integration (Riemann sum)، وحدّد جهازًا أعلى لتجنب الاحتساب المزدوج.' },
          { q: 'هل يمكنني تخصيص لوحة الطاقة؟', a: 'نعم — افتح الإعدادات ← اللوحات ← الطاقة ← تعديل اللوحة ← تخصيص البطاقات لإظهار البطاقات أو إخفائها. تسري التغييرات على جميع المستخدمين؛ وللحصول على تخطيط مخصص بالكامل أنشئ لوحة عادية من المستشعرات نفسها.' },
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
      headline: 'لوحة Energy في Home Assistant: دليل الإعداد الكامل (⁨2026⁩)',
      description: 'إعداد لوحة الطاقة في Home Assistant لعام 2026: مستشعرات الشبكة والطاقة الشمسية والبطارية وأنظمة التكييف، مدة الإعداد، أمثلة للتخطيط، وحلول للمستشعرات غير الظاهرة.',
      url: 'https://www.promptquorum.com/ar/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: 'انتظار البيانات', text: 'انتظر الساعة الكاملة التالية لأولى الإحصاءات، ونحو يوم لعرض يومي مكتمل، قبل قراءة الرسوم البيانية.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج إلى عداد ذكي حتى تعمل لوحة Energy؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — يعمل مشبك تيار على التغذية الرئيسية دون عداد ذكي وهو الإعداد الأكثر شيوعًا.' } },
        { '@type': 'Question', name: 'هل يمكنني استخدام لوحة Energy دون طاقة شمسية أو بطارية؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يمنحك تتبع استهلاك الشبكة وحده رسومًا بيانية للاستخدام والتكلفة؛ قسما الطاقة الشمسية والبطارية اختياريان.' } },
        { '@type': 'Question', name: 'لماذا لوحتي فارغة مباشرة بعد الإعداد؟', acceptedAnswer: { '@type': 'Answer', text: 'تقرأ لوحة الطاقة إحصاءات ساعية، لذا تظهر أولى الأعمدة بعد الساعة الكاملة التالية، ويمنحك يوم كامل عرضًا يوميًا مكتملًا.' } },
        { '@type': 'Question', name: 'هل تحتاج هذه اللوحة إلى اتصال بالإنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — بمجرد ضبط المستشعرات، تعمل لوحة Energy بالكامل على نسخة Home Assistant المحلية لديك.' } },
        { '@type': 'Question', name: 'هل يمكن للأتمتة استخدام بيانات لوحة Energy مباشرة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — كيانات المستشعر الأساسية هي كيانات قياسية في Home Assistant يمكن لأي أتمتة الإشارة إليها مباشرة.' } },
        { '@type': 'Question', name: 'كم يستغرق إعداد لوحة الطاقة في Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'يستغرق الإعداد عادةً دقائق بمجرد توفر مستشعرات الطاقة؛ وتمتلئ الرسوم البيانية من إحصاءات ساعية.' } },
        { '@type': 'Question', name: 'لماذا لا يظهر مستشعري في قائمة لوحة الطاقة؟', acceptedAnswer: { '@type': 'Answer', text: 'غالبًا ينقصه device_class أو state_class المطلوب، أو ليس كيان sensor، أو لا يخزّنه Recorder.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Energy & Solar Integration',
    heroImage: '/images/home-assistant-energy-dashboard-guide-overview-hero-ko.webp',
    title: 'Home Assistant Energy 대시보드: 완전 설정 가이드 (2026년)',
    seoTitle: 'Home Assistant Energy 대시보드 설정 (2026년)',
    intro:
      'Home Assistant에 내장된 Energy 대시보드는 계통 소비량, 태양광 발전량, 배터리 상태, 개별 기기 사용량을 하나의 로컬 뷰에서 추적합니다 — 설정은 자동화 코드를 작성하는 것이 아니라 몇 개의 센서 엔티티를 추가하는 작업입니다. 이 가이드는 계통 센서 추가, (있다면) 태양광 및 배터리 센서 추가, 개별 기기 추적, 그리고 그 결과로 나오는 비용 및 사용량 그래프를 읽는 방법을 다룹니다.',
    metaDescription:
      '2026년 Home Assistant 에너지 대시보드 설정: 전력망·태양광·배터리·냉난방 센서, 설정 소요 시간, 레이아웃 예시, 센서가 보이지 않을 때의 해결법.',
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
      'home assistant 에너지 대시보드 예시',
      'home assistant 에너지 대시보드 커스터마이징',
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
          '센서가 준비되어 있으면 설정은 몇 분이면 끝나고, 차트는 시간별 통계로 채워지며, 하루가 지나면 일간 보기가 의미를 갖습니다',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '시작하기 전에', anchor: 'before-you-start' },
      { label: '설정에는 얼마나 걸리나요?', anchor: 'setup-time' },
      { label: '계통 센서 추가하기', anchor: 'grid-sensor' },
      { label: '태양광과 배터리 추가하기', anchor: 'solar-battery' },
      { label: '개별 기기 추가하기', anchor: 'individual-devices' },
      { label: '냉난방 등 고전력 기기 추적하기', anchor: 'hvac-devices' },
      { label: '비용 추적 설정하기', anchor: 'cost-tracking' },
      { label: '대시보드 읽는 법', anchor: 'reading-dashboard' },
      { label: '레이아웃 예시와 대시보드 커스터마이징', anchor: 'example-layouts' },
      { label: '나타나지 않는 센서 해결하기', anchor: 'missing-sensors' },
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
          '센서가 준비되어 있으면 설정은 몇 분이면 끝나며, 차트는 첫 시간별 통계부터 채워지기 시작하고 하루가 지나면 일간 보기가 의미를 갖습니다',
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
      setupTime: {
        id: 'setup-time',
        title: '설정에는 얼마나 걸리나요?',
        content:
          '**에너지 센서가 이미 있다면 에너지 대시보드 설정은 보통 몇 분이면 끝납니다. 시간이 걸리는 부분은 대시보드가 아니라 측정 하드웨어의 설치와 페어링입니다.**',
        items: [
          '전력망만: 센서 하나를 선택하고 요금제를 설정하면 되며, 코드나 YAML은 필요 없습니다.',
          '태양광, 배터리, 개별 기기: 같은 페이지에서 센서마다 선택을 하나씩 추가합니다.',
          '차트: 통계는 시간별로 집계되므로 첫 막대는 다음 정시 이후에 나타나고, 하루가 지나면 처음으로 완전한 일간 보기가 됩니다.',
        ],
      },
      gridSensor: {
        id: 'grid-sensor',
        title: '계통 센서 추가하기',
        content:
          '**설정 → 대시보드 → 에너지에서, 전력 계통 아래의 "소비량 추가"를 클릭하고 계통 소비 센서 엔티티를 선택하세요.**',
        items: [
          '센서가 에너지(kWh)가 아닌 전력(W)을 보고한다면, 먼저 Home Assistant의 Integration (Riemann sum) 도우미로 에너지 센서를 만든 뒤 그 센서를 추가하세요. Home Assistant는 전력 샘플로부터 에너지를 근사할 수만 있으므로 샘플링이 잦을수록 결과가 좋아집니다.',
          '태양광이 있고 별도의 역송(수출) 연결이 있다면, 태양광 센서 없이 가정의 전력망 연결을 추가하고, 인버터를 "태양광 패널" 소스로, 역송 연결을 두 번째 전력망 소스로 추가하세요. 역송된 에너지만 설정하고, 전력 측정을 "반전"으로 지정하고, 역송 보상을 설정합니다.',
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
      hvacDevices: {
        id: 'hvac-devices',
        title: '냉난방 등 고전력 기기 추적하기',
        content:
          '**전력(W) 또는 에너지(kWh) 센서를 제공하는 에어컨과 보일러는 스마트 플러그처럼 "개별 기기"에 추가할 수 있으며, 기기 계층 구조를 사용하면 이중 집계를 피할 수 있습니다.**',
        items: [
          '기기가 와트 단위 전력을 보고한다면 전력 센서를 직접 추가하거나(device_class power와 state_class measurement 필요), Integration (Riemann sum) 도우미로 에너지로 변환한 뒤 그 센서를 추가하세요.',
          '회로 단위 계량기와 냉난방 기기를 한 대시보드에서 보려면, 먼저 모든 센서를 개별 기기로 추가한 다음 회로 단위 엔티티를 그에 포함된 기기들의 상위(upstream) 기기로 선택하세요. 이렇게 하면 이중 집계를 막을 수 있습니다.',
          '사용 가능한 센서는 기기의 통합에 따라 다릅니다. 추가 측정 하드웨어를 사기 전에 전력 또는 에너지 엔티티가 있는지 먼저 확인하세요.',
        ],
      },
      costTracking: {
        id: 'cost-tracking',
        title: '비용 추적 설정하기',
        content:
          '**계통 소비 센서 설정에서 전기 요금제를 구성해 kWh 사용량을 비용 추정치로 변환하세요 — 고정 요금이든 시간대별 일정이든 상관없습니다.**',
        items: [
          '고정 요금은 kWh당 단일 가격으로, 한 번 입력합니다.',
          '시간대별 요금제는 utility_meter 통합으로 소비량을 요금 구간(예: 피크와 비피크)으로 나누거나, 현재 가격을 보고하는 엔티티를 가격으로 지정하는 방식으로 구현되어 비용 계산이 실제 청구서와 맞아집니다. 부하 이동 자동화(로컬 에너지 관리 개요 참조)도 이를 기준으로 합니다.',
          '태양광을 전력망으로 역송하고 대가를 받는다면, 전력망 연결의 역송(전력망 반환) 항목에서 보상을 설정해 소비 비용뿐 아니라 순비용을 확인하세요.',
        ],
      },
      readingDashboard: {
        id: 'reading-dashboard',
        title: '대시보드 읽는 법',
        content:
          '**대시보드는 일간·주간·월간 사용량, 에너지 분배 차트(전력망 대 태양광 대 배터리), 비용 요약을 보여줍니다. 막대는 시간별 통계가 집계되면서 나타나며, 하루가 지나면 처음으로 완전한 일간 보기가 됩니다.**',
        items: [
          '사용량 그래프를 통해 날짜나 주를 비교해 패턴을 발견할 수 있습니다 — 설정 후 좋은 첫 확인은 태양광 발전 시간대에 계통 사용량이 예상대로 줄어드는지 보는 것입니다.',
          '분배 그래프는 태양광이 있는 경우 자가 소비 비율을 보는 가장 빠른 방법입니다 — 사용량 중 얼마가 자체 발전에서 왔고 얼마가 계통에서 왔는지.',
          '개별 기기 항목을 통해 특정 가전의 사용량이 예상과 일치하는지 확인할 수 있으며, 이는 배선이 잘못되었거나 잘못 구성된 센서를 조기에 발견하는 데도 유용합니다.',
        ],
      },
      exampleLayouts: {
        id: 'example-layouts',
        title: '레이아웃 예시와 대시보드 커스터마이징',
        content:
          '**에너지 대시보드는 "만드는" 것이 아니라 "설정하는" 것입니다. 표시할 소스를 고르고 "카드 사용자 지정"으로 카드를 표시하거나 숨기세요. 변경 사항은 인스턴스의 모든 사용자에게 적용됩니다.**',
        items: [
          '예시 1 — 전력망만: 소비 센서 하나와 요금제만으로 사용량과 비용 차트를 얻습니다.',
          '예시 2 — 태양광 가정: 전력망 소비, 태양광 패널로 등록한 인버터, 선택적인 배터리 센서로 전력망/태양광/배터리 분배 차트를 얻습니다.',
          '예시 3 — 기기 단위 보기: 개별 기기(스마트 플러그, 에어컨, 전기차 충전기)와 상위 계층 구조를 추가해 각 부하의 비중을 확인합니다.',
          '사용자 지정하려면 설정 → 대시보드 → 에너지 → 대시보드 편집 → 카드 사용자 지정을 여세요. 카드는 개요, 전기, 가스, 수도, 현재로 묶이며, 소스가 설정되기 전에는 카드를 사용할 수 없습니다.',
          '완전히 자유로운 레이아웃이 필요하면 같은 센서 엔티티로 일반 대시보드를 만드세요.',
        ],
      },
      missingSensors: {
        id: 'missing-sensors',
        title: '나타나지 않는 센서 해결하기',
        content:
          '**선택 목록에 센서가 없다면 거의 항상 올바른 device_class, state_class 또는 단위가 빠져 있는 것입니다. 먼저 이 항목들을 확인하세요.**',
        items: [
          '에너지 센서: device_class energy와 state_class total 또는 total_increasing.',
          '전력 센서: device_class power와 state_class measurement.',
          '배터리: device_class battery, state_class measurement, 단위 %. 가스와 수도: device_class gas 또는 water와 state_class total 또는 total_increasing.',
          '엔티티는 sensor여야 하고(input_number는 템플릿 센서로 변환), 지원되는 단위를 쓰며, Recorder에 저장되어야 합니다. 설정 → 도구 → 통계에서 오류를 해결하세요.',
          '합계가 부풀려질 때: 초기화되는 센서 두 개(예: utility_meter 센서 두 개)를 템플릿이나 그룹 도우미로 합산하지 마세요. 누적 센서를 각각 따로 추가하고, 잘못된 데이터는 설정 → 도구 → 통계에서 수정하세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Energy 대시보드가 작동하려면 스마트 미터가 필요한가요?', a: '아니요 — 메인 전력선의 CT 클램프는 스마트 미터 없이도 작동하며 더 흔한 구성입니다. 전력회사와 지역이 지원한다면 스마트 미터 연동이 대안입니다.' },
          { q: '태양광이나 배터리 없이 Energy 대시보드를 사용할 수 있나요?', a: '네. 계통 소비 추적만으로도 사용량과 비용 그래프를 얻을 수 있습니다. 태양광과 배터리 섹션은 완전히 선택 사항이며 나중에 추가할 수 있습니다.' },
          { q: '설정 직후 대시보드가 비어 있는 이유는 무엇인가요?', a: '에너지 대시보드는 시간별 장기 통계를 읽기 때문에 첫 막대는 다음 정시 이후에 나타나고, 하루가 지나면 완전한 일간 보기가 됩니다. 몇 시간이 지나도 아무것도 나타나지 않으면 센서에 필요한 device_class와 state_class가 있는지, 설정 → 도구 → 통계에서 해당 센서에 오류가 없는지 확인하세요.' },
          { q: '지역에서 두 개 이상의 요금 구간이 있는 시간대별 요금제를 사용한다면 어떻게 하나요?', a: '네. utility_meter 통합은 계약상의 요금 구간 수만큼 소비량을 나눌 수 있고, 가격 엔티티는 공급자가 공개하는 어떤 일정이든 따를 수 있습니다. 전력망 연결의 비용 설정에서 선택하세요.' },
          { q: '설정을 다시 하지 않고 나중에 개별 기기를 추가할 수 있나요?', a: '네 — 개별 기기, 태양광, 배터리는 모두 언제든지 같은 에너지 구성 페이지에서 독립적으로 추가하거나 제거할 수 있으며, 이미 구성된 계통 센서에 영향을 주지 않습니다.' },
          { q: '이 대시보드는 인터넷 연결이 필요한가요?', a: '아니요 — 센서가 구성되면 Energy 대시보드는 전적으로 로컬 Home Assistant 인스턴스에서 실행되며 인터넷 장애 중에도 계속 작동하지만, 사용하기로 선택한 클라우드 호스팅 센서 연동은 그렇지 않을 것입니다.' },
          { q: '이것이 일반 Home Assistant 대시보드와 어떻게 다른가요?', a: 'Energy 대시보드는 에너지 센서를 위해 특별히 자동 생성되는 목적 구축형 뷰입니다 — 단위 변환, 비용 계산, 분배 그래프를 자동으로 처리하며, 수동으로 만든 대시보드는 이를 재현하려면 커스텀 카드와 템플릿이 필요할 것입니다.' },
          { q: '자동화가 Energy 대시보드 데이터를 직접 사용할 수 있나요?', a: '네 — Energy 대시보드가 읽어오는 기본 센서 엔티티는 표준 Home Assistant 엔티티이므로, 어떤 자동화든(로컬 에너지 관리 개요의 부하 이동 예시 포함) 이를 직접 참조할 수 있습니다.' },
          { q: 'Home Assistant 에너지 대시보드 설정에는 얼마나 걸리나요?', a: '에너지 센서가 이미 있다면 보통 몇 분이면 됩니다. 전력망 센서를 선택하고, 선택적인 소스를 추가하고, 요금제를 설정하세요. 차트는 시간별 통계로 채워지므로 첫 데이터는 다음 정시, 완전한 일간 보기는 하루 정도를 예상하세요.' },
          { q: '에너지 대시보드 목록에 내 센서가 보이지 않는 이유는 무엇인가요?', a: '대개 필수 속성이 빠져 있습니다. 에너지 센서에는 device_class energy와 state_class total 또는 total_increasing이, 전력 센서에는 device_class power와 state_class measurement가 필요합니다. 또한 Recorder가 저장하는, 지원되는 단위의 sensor 엔티티여야 합니다.' },
          { q: '에너지 대시보드에서 에어컨이나 보일러를 추적할 수 있나요?', a: '네, 전력(W) 또는 에너지(kWh) 센서를 제공한다면 가능합니다. 에너지 센서를 "개별 기기"에 추가하거나, 먼저 Integration (Riemann sum) 도우미로 전력 센서를 변환하고, 이중 집계를 피하도록 상위 기기를 설정하세요.' },
          { q: '에너지 대시보드를 사용자 지정할 수 있나요?', a: '네. 설정 → 대시보드 → 에너지 → 대시보드 편집 → 카드 사용자 지정에서 카드를 표시하거나 숨길 수 있습니다. 변경 사항은 모든 사용자에게 적용되며, 완전히 자유로운 레이아웃이 필요하면 같은 센서로 일반 대시보드를 만드세요.' },
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
      headline: 'Home Assistant Energy 대시보드: 완전 설정 가이드 (2026년)',
      description: '2026년 Home Assistant 에너지 대시보드 설정: 전력망·태양광·배터리·냉난방 센서, 설정 소요 시간, 레이아웃 예시, 센서가 보이지 않을 때의 해결법.',
      url: 'https://www.promptquorum.com/ko/smart-home/home-assistant-energy-dashboard-guide',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
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
        { '@type': 'HowToStep', name: '데이터 대기', text: '차트를 읽기 전에 첫 통계를 위해 다음 정시까지, 완전한 일간 보기를 위해 약 하루를 기다리세요.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Energy 대시보드가 작동하려면 스마트 미터가 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 메인 전력선의 CT 클램프는 스마트 미터 없이도 작동하며 더 흔한 구성입니다.' } },
        { '@type': 'Question', name: '태양광이나 배터리 없이 Energy 대시보드를 사용할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '네. 계통 소비 추적만으로도 사용량과 비용 그래프를 얻을 수 있습니다; 태양광과 배터리 섹션은 선택 사항입니다.' } },
        { '@type': 'Question', name: '설정 직후 대시보드가 비어 있는 이유는 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: '에너지 대시보드는 시간별 통계를 읽기 때문에 첫 막대는 다음 정시 이후에 나타나고, 하루가 지나면 완전한 일간 보기가 됩니다.' } },
        { '@type': 'Question', name: '이 대시보드는 인터넷 연결이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 센서가 구성되면 Energy 대시보드는 전적으로 로컬 Home Assistant 인스턴스에서 실행됩니다.' } },
        { '@type': 'Question', name: '자동화가 Energy 대시보드 데이터를 직접 사용할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '네 — 기본 센서 엔티티는 표준 Home Assistant 엔티티이며 어떤 자동화든 직접 참조할 수 있습니다.' } },
        { '@type': 'Question', name: 'Home Assistant 에너지 대시보드 설정에는 얼마나 걸리나요?', acceptedAnswer: { '@type': 'Answer', text: '에너지 센서가 이미 있다면 보통 몇 분이면 되며, 차트는 시간별 통계로 채워집니다.' } },
        { '@type': 'Question', name: '에너지 대시보드 목록에 내 센서가 보이지 않는 이유는 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: '대개 필요한 device_class 또는 state_class가 없거나, sensor 엔티티가 아니거나, Recorder가 저장하지 않기 때문입니다.' } },
      ],
    },
  },
}
