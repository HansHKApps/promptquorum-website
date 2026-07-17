import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// Verified 2026-07-16 against the Connectivity Standards Alliance's own newsroom page:
// csa-iot.org/newsroom/matter-enabling-universal-grid-friendly-integration-for-energy-smart-appliances-and-more/
// CSA's own text: Matter 1.3 added device-type support for EV charging, air conditioning, and
// general household appliance loads, "with additional device types to follow in 1.4 and the
// future, such as heat pumps, solar, batteries, and water heaters." That page names zero shipping
// manufacturers or certified products for inverters/batteries/heat pumps specifically — this is a
// case where the spec is ahead of the market, not a confirmed list of compliant hardware. Reframed
// below as an early-mover/what's-coming explainer instead of a claims-heavy "this works today"
// piece, per the SH_26_45_VERIFICATION_LIST.md close-out decision (2026-07-16).

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Matter for Solar Inverters and Heat Pumps: What\'s Coming (2027)',
    seoTitle: 'Matter for Solar Inverters + Heat Pumps: Not Yet (2027)',
    intro:
      'Matter\'s specification has defined device types for energy-management hardware — solar inverters, battery storage, EV chargers, and heat pumps — since Matter 1.4+ (per the Connectivity Standards Alliance\'s own roadmap announcement), but as of write-time no shipping, Matter-certified inverter, battery, or heat pump product from any manufacturer has been confirmed. This is an early-mover explainer: what the spec defines today, and what to watch for before it becomes a real buying option, not a guide to hardware you can use right now. It also explains how this differs from the monitoring-and-dashboard integrations already covered for balcony solar, which do work today.',
    metaDescription:
      'Matter defines device types for solar inverters and heat pumps (Matter 1.4+), but no shipping certified products exist yet as of July 2026 — what\'s coming, not what works today.',
    twitterDescription:
      'Matter has a spec for solar inverters and heat pumps — but no shipping certified products yet. What the spec defines, and what to watch for.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners with a solar inverter, battery, or heat pump who want to know when local Matter control becomes a real option',
    primaryTerm: 'matter solar inverter heat pump integration',
    targetKeywords: [
      'matter smart home inverter heat pump',
      'matter energy management device types',
      'home assistant matter solar inverter',
      'matter heat pump integration',
      'is matter solar inverter support real',
    ],
    leadAnswerBlock:
      '**Not yet, as a real buying decision — Matter\'s specification has defined device types for energy management (inverters, batteries, EV chargers, heat pumps) since Matter 1.4+, but as of July 2026 no shipping, Matter-certified product in these categories has been confirmed from any manufacturer.** The Connectivity Standards Alliance\'s own roadmap announcement named these device types as planned additions following Matter 1.3, without naming a single manufacturer or product shipping them today. Treat this article as "what to watch for," not "what you can buy."',
    quickAnswerTop: {
      en: {
        question: 'Can I control my solar inverter or heat pump locally with Matter today?',
        answer:
          'Not yet, for the specific "Matter-certified inverter/heat pump" scenario. Matter\'s specification has included energy-management device types (inverters, battery storage, EV chargers, heat pumps) since Matter 1.4+, letting a certified device report status and accept commands locally through Home Assistant instead of a manufacturer cloud app — but no shipping, Matter-certified product in these categories was confirmed as of write-time (July 2026), per the Connectivity Standards Alliance\'s own materials. The capability exists in the spec; the products don\'t exist in the market yet.',
        bullets: [
          'Matter has defined device types for inverters, batteries, EV chargers, and heat pumps since Matter 1.4+',
          'No shipping, Matter-certified product in these categories was confirmed as of July 2026 — this is a spec-ahead-of-market situation, not a buying guide',
          'Monitoring dashboards (already covered for balcony solar) are a different, working-today approach — this article is about native device-level control, which isn\'t available yet',
          'Check the manufacturer\'s own current documentation before assuming any specific product ships this support',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Matter Defines for Energy Hardware', anchor: 'what-matter-defines' },
      { label: 'Inverters and Batteries: What\'s Coming', anchor: 'inverters-batteries' },
      { label: 'Heat Pumps: What\'s Coming', anchor: 'heat-pumps' },
      { label: 'How This Differs from Monitoring-Only Integrations', anchor: 'differs-from-monitoring' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter has defined device types for inverters, batteries, EV chargers, and heat pumps since Matter 1.4+, but no shipping Matter-certified product in these categories was confirmed as of July 2026 — this is an early-mover explainer, not a current buying guide.' },
      { type: 'plain-terms', content: 'Matter is a shared language that smart devices use to talk to a hub like Home Assistant. Matter\'s spec now includes definitions for energy hardware — solar inverters, home batteries, EV chargers, and heat pumps — but defining a device type in the spec isn\'t the same as a manufacturer actually building and certifying a product against it. As of mid-2026, that product side hasn\'t caught up yet.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Matter has defined device types for energy management — inverters, batteries, EV chargers, heat pumps — since Matter 1.4+',
          'As of write-time (July 2026), no shipping, Matter-certified product in these categories was confirmed from any manufacturer, per the Connectivity Standards Alliance\'s own materials',
          'This is a spec-ahead-of-market situation: the capability is defined, the hardware isn\'t here yet — treat this as an early-mover explainer, not a buying guide',
          'This is distinct from the monitoring/dashboard integrations already covered in the balcony solar cluster — those read usage data, work today, and don\'t depend on Matter certification',
          'If you want something that works right now, monitoring-only integration (CT clamp, vendor local API) is the current path — see the local energy management overview',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'What Matter Defines for Energy Hardware',
        content:
          '**Matter\'s energy-management device types cover device state (charging, discharging, generating, idle), power/energy readings, and command support (start/stop, mode changes) — a protocol-level capability that manufacturers can build against, not something any confirmed shipping product currently implements.**',
        items: [
          'Device types include: electrical energy meters, solar inverters, battery storage systems, EV chargers, and heat pumps — added to the spec starting with Matter 1.4, per the Connectivity Standards Alliance\'s own roadmap announcement following Matter 1.3.',
          'A device that did implement one of these would advertise it and get discovered by Home Assistant automatically, the same commissioning flow as any other Matter device — but this article does not point to a confirmed product that does this today.',
          'Even once products do ship, expect partial implementations at first — a device type\'s full spec (e.g., accepting commands, not just reporting read-only status) is often adopted incrementally by early manufacturer implementations. Check a specific product\'s documentation once one actually exists, rather than assuming full control from the device-type name alone.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'Inverters and Batteries: What\'s Coming',
        content:
          '**Once a manufacturer ships a Matter-certified inverter or battery, it would be able to report generation, state of charge, and charge/discharge status locally, and accept mode commands (e.g., prioritize self-consumption vs. grid export) from Home Assistant automations — but as of write-time, no such shipping product was confirmed.**',
        items: [
          'This would eventually let an automation like the load-shifting examples in the local energy management overview react to real-time generation and battery state, not just a fixed schedule — once the hardware exists.',
          'For actual current-generation battery products and their local integration options today (which use manufacturer-specific local APIs or monitoring, not Matter energy device types), see the balcony solar cluster\'s battery buying guides — that\'s the working-today path, separate from what this article describes.',
          'This article describes the Matter device-type capability as defined in the spec, not a confirmed list of compliant products — check a manufacturer\'s current announcements directly before assuming a specific inverter or battery model has shipped this support.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'Heat Pumps: What\'s Coming',
        content:
          '**A Matter heat pump device type, once implemented by a shipping product, would expose mode, target temperature, and running state, letting Home Assistant automate it alongside solar generation — for example, running the heat pump harder during high-solar hours — but no confirmed shipping product implements this as of write-time.**',
        items: [
          'This would follow the same pattern as a Matter thermostat, extended to a heat pump\'s specific operating modes, once a manufacturer ships it.',
          'Pairing this with the local energy monitoring described in the overview article would eventually let an automation prefer heat-pump operation when local generation is high, rather than a fixed time-of-day schedule — a "still coming" scenario, not a current one.',
          'As with inverters, this is an emerging category on the spec side with no confirmed shipping manufacturer support as of write-time — check heat pump manufacturers\' own current announcements rather than assuming support because the device type exists in Matter.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'How This Differs from Monitoring-Only Integrations',
        content:
          '**Monitoring-only integration reads usage or generation data (via a CT clamp, or a vendor\'s local API) without native device control, and works today; Matter device-level integration for these categories does not yet, since no certified products ship.**',
        items: [
          'The balcony solar cluster\'s existing Home Assistant integration content is monitoring/dashboard-focused — reading inverter output into Home Assistant. That works now and remains the practical option.',
          'Matter integration, once real products exist, would be a step further: the inverter or heat pump becomes a first-class local device, discoverable and controllable the same way as any other Matter device, without a vendor-specific integration.',
          'Given no Matter-certified inverter, battery, or heat pump product was confirmed shipping as of write-time, the monitoring approach in the balcony solar guides is the only working starting point today — Matter support here is a future addition, not a current alternative.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does Matter support solar inverters today?', a: 'The specification does — Matter has included a device type for solar inverters since Matter 1.4+ — but no shipping, Matter-certified inverter product was confirmed as of July 2026, per the Connectivity Standards Alliance\'s own materials. Check your inverter manufacturer\'s current documentation or announcements; don\'t assume support exists just because the spec defines it.' },
          { q: 'Can I control my heat pump\'s temperature through Home Assistant via Matter?', a: 'Not yet, as of write-time — no confirmed shipping heat pump product implements Matter\'s heat pump device type. Once a manufacturer does ship one, mode and target temperature would become standard Home Assistant entities the same way a Matter thermostat\'s do today.' },
          { q: 'Is this the same as the balcony solar Home Assistant integration guides?', a: 'No. Those guides cover reading inverter data into Home Assistant for monitoring, and work today. This article covers Matter-native device control, a capability defined in the spec but not yet available in any confirmed shipping product.' },
          { q: 'What happens if my inverter isn\'t Matter-certified?', a: 'That describes every inverter on the market as of write-time — none are confirmed Matter-certified for energy device types. Monitoring-only integration (via a manufacturer local API or a CT clamp) is the current working option for usage tracking and basic automation; see the balcony solar cluster\'s integration guides.' },
          { q: 'Do I need a new inverter to get Matter support?', a: 'The question is premature as of write-time — no inverter, new or existing, has confirmed Matter energy device-type certification yet. Once products do ship, whether your existing hardware gains support will depend on your specific manufacturer offering a firmware update path; check their roadmap directly once certified products exist.' },
          { q: 'Does Matter energy support work with battery-only setups (no solar)?', a: 'In the spec, yes — the battery storage device type is defined independently of the inverter device type, so a battery-only local backup setup would be able to use Matter for local status and control without solar generation being involved, once a certified product exists. As of write-time, that\'s still a "when it ships" scenario like the rest of this article.' },
          { q: 'Can an automation combine Matter energy data with a local LLM?', a: 'Once inverter, battery, or heat pump state is exposed as standard Home Assistant entities via Matter — which requires a certified product that doesn\'t exist yet — a local LLM automation (see the local LLM smart home guide) would be able to reason over that data the same way it does for any other entity. This is a future capability, not a current one.' },
          { q: 'Where do I check current Matter certification for a specific product?', a: 'Check the manufacturer\'s own product documentation or the Connectivity Standards Alliance\'s certified-products listing directly — do not rely on marketing copy alone, since "Matter compatible" branding is often broader than certification for a specific energy device type.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Smart Home Energy Management](/smart-home/local-smart-home-energy-management-2027) — the overview this article narrows into',
          '[Matter 1.6 Explained: What\'s New](/smart-home/matter-1-6-explained) — the broader spec update',
          '[Matter & Local Control: An Internet-Independent Smart Home](/smart-home/matter-local-control-guide) — local commissioning fundamentals',
          '[Best Balcony Solar Microinverters](/balcony-solar/best-balcony-solar-microinverters) — cross-cluster: current inverter hardware picks that work today',
          '[Home Assistant + Balcony Solar, No Cloud](/balcony-solar/home-assistant-balcony-solar-no-cloud) — cross-cluster: the monitoring-only integration path that works today',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter for Solar Inverters and Heat Pumps: What\'s Coming (2027)',
      description: 'Matter defines device types for solar inverters and heat pumps (Matter 1.4+), but no shipping certified products exist yet as of July 2026 — what\'s coming, not what works today.',
      url: 'https://www.promptquorum.com/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter energy management' }, { '@type': 'Thing', name: 'Solar inverter' }, { '@type': 'Thing', name: 'Heat pump' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does Matter support solar inverters today?', acceptedAnswer: { '@type': 'Answer', text: 'The specification has included a device type for solar inverters since Matter 1.4+, but no shipping, Matter-certified inverter product was confirmed as of July 2026.' } },
        { '@type': 'Question', name: 'Can I control my heat pump\'s temperature through Home Assistant via Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Not yet as of write-time — no confirmed shipping heat pump product implements Matter\'s heat pump device type.' } },
        { '@type': 'Question', name: 'Is this the same as the balcony solar Home Assistant integration guides?', acceptedAnswer: { '@type': 'Answer', text: 'No. Those guides cover reading inverter data into Home Assistant for monitoring and work today. This article covers Matter-native device control, which is not yet available in any confirmed shipping product.' } },
        { '@type': 'Question', name: 'What happens if my inverter isn\'t Matter-certified?', acceptedAnswer: { '@type': 'Answer', text: 'That describes every inverter on the market as of write-time. Monitoring-only integration via a manufacturer local API or a CT clamp is the current working option.' } },
        { '@type': 'Question', name: 'Where do I check current Matter certification for a specific product?', acceptedAnswer: { '@type': 'Answer', text: 'Check the manufacturer\'s own product documentation or the Connectivity Standards Alliance\'s certified-products listing directly, rather than relying on general marketing claims.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Matter für Solarwechselrichter und Wärmepumpen: Was kommt (2027)',
    seoTitle: 'Matter für Wechselrichter + Wärmepumpen: Noch nicht (2027)',
    intro:
      'Die Matter-Spezifikation definiert seit Matter 1.4+ Gerätetypen für Energiehardware — Solarwechselrichter, Batteriespeicher, E-Auto-Ladegeräte und Wärmepumpen (laut der eigenen Roadmap-Ankündigung der Connectivity Standards Alliance) —, doch zum Zeitpunkt dieses Textes ist kein ausgeliefertes, Matter-zertifiziertes Wechselrichter-, Batterie- oder Wärmepumpenprodukt eines Herstellers bestätigt. Dies ist eine Early-Mover-Erklärung: was die Spezifikation heute definiert und worauf zu achten ist, bevor daraus eine echte Kaufoption wird — kein Leitfaden zu Hardware, die Sie jetzt schon nutzen können. Er erklärt zudem, wie sich dies von den bereits für Balkonsolar behandelten Monitoring- und Dashboard-Integrationen unterscheidet, die schon heute funktionieren.',
    metaDescription:
      'Matter definiert Gerätetypen für Solarwechselrichter und Wärmepumpen (Matter 1.4+), aber es gibt noch keine ausgelieferten zertifizierten Produkte (Stand Juli 2026) — was kommt, nicht was heute funktioniert.',
    twitterDescription:
      'Matter hat eine Spezifikation für Solarwechselrichter und Wärmepumpen — aber noch keine ausgelieferten zertifizierten Produkte. Was die Spezifikation definiert und worauf zu achten ist.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer mit Solarwechselrichter, Batterie oder Wärmepumpe, die wissen wollen, wann lokale Matter-Steuerung eine echte Option wird',
    primaryTerm: 'matter solarwechselrichter waermepumpe integration',
    targetKeywords: [
      'matter smart home wechselrichter waermepumpe',
      'matter energiemanagement geraetetypen',
      'home assistant matter solarwechselrichter',
      'matter waermepumpen integration',
      'ist matter solarwechselrichter unterstuetzung real',
    ],
    leadAnswerBlock:
      '**Noch nicht als reale Kaufentscheidung — die Matter-Spezifikation definiert seit Matter 1.4+ Gerätetypen für Energiemanagement (Wechselrichter, Batterien, E-Auto-Ladegeräte, Wärmepumpen), doch mit Stand Juli 2026 ist kein ausgeliefertes, Matter-zertifiziertes Produkt in diesen Kategorien von irgendeinem Hersteller bestätigt.** Die eigene Roadmap-Ankündigung der Connectivity Standards Alliance nannte diese Gerätetypen als geplante Ergänzungen nach Matter 1.3, ohne einen einzigen Hersteller oder ein Produkt zu nennen, das sie heute ausliefert. Betrachten Sie diesen Artikel als „worauf zu achten ist", nicht als „was Sie kaufen können".',
    quickAnswerTop: {
      de: {
        question: 'Kann ich meinen Solarwechselrichter oder meine Wärmepumpe heute lokal mit Matter steuern?',
        answer:
          'Noch nicht, für das konkrete Szenario „Matter-zertifizierter Wechselrichter/Wärmepumpe". Die Matter-Spezifikation umfasst seit Matter 1.4+ Gerätetypen für Energiemanagement (Wechselrichter, Batteriespeicher, E-Auto-Ladegeräte, Wärmepumpen), die es einem zertifizierten Gerät erlauben würden, Status lokal über Home Assistant zu melden und Befehle entgegenzunehmen, statt über eine Hersteller-Cloud-App — doch zum Zeitpunkt dieses Textes (Juli 2026) war kein ausgeliefertes, Matter-zertifiziertes Produkt in diesen Kategorien bestätigt, laut den eigenen Unterlagen der Connectivity Standards Alliance. Die Fähigkeit existiert in der Spezifikation; die Produkte existieren noch nicht am Markt.',
        bullets: [
          'Matter definiert seit Matter 1.4+ Gerätetypen für Wechselrichter, Batterien, E-Auto-Ladegeräte und Wärmepumpen',
          'Kein ausgeliefertes, Matter-zertifiziertes Produkt in diesen Kategorien war mit Stand Juli 2026 bestätigt — die Spezifikation ist dem Markt voraus, das ist kein Kaufratgeber',
          'Monitoring-Dashboards (bereits für Balkonsolar behandelt) sind ein anderer, schon heute funktionierender Ansatz — dieser Artikel behandelt native Gerätesteuerung, die noch nicht verfügbar ist',
          'Prüfen Sie die aktuelle Dokumentation des Herstellers, bevor Sie annehmen, dass ein bestimmtes Produkt diese Unterstützung bietet',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was Matter für Energiehardware definiert', anchor: 'what-matter-defines' },
      { label: 'Wechselrichter und Batterien: Was kommt', anchor: 'inverters-batteries' },
      { label: 'Wärmepumpen: Was kommt', anchor: 'heat-pumps' },
      { label: 'Unterschied zu reinen Monitoring-Integrationen', anchor: 'differs-from-monitoring' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter definiert seit Matter 1.4+ Gerätetypen für Wechselrichter, Batterien, E-Auto-Ladegeräte und Wärmepumpen, doch kein ausgeliefertes Matter-zertifiziertes Produkt in diesen Kategorien war mit Stand Juli 2026 bestätigt — dies ist eine Early-Mover-Erklärung, kein aktueller Kaufratgeber.' },
      { type: 'plain-terms', content: 'Matter ist eine gemeinsame Sprache, mit der Smart-Home-Geräte mit einem Hub wie Home Assistant sprechen. Die Matter-Spezifikation umfasst inzwischen Definitionen für Energiehardware — Solarwechselrichter, Heimbatterien, E-Auto-Ladegeräte und Wärmepumpen —, aber einen Gerätetyp in der Spezifikation zu definieren ist nicht dasselbe, wie wenn ein Hersteller tatsächlich ein Produkt danach baut und zertifiziert. Mitte 2026 hat die Produktseite noch nicht nachgezogen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Matter definiert seit Matter 1.4+ Gerätetypen für Energiemanagement — Wechselrichter, Batterien, E-Auto-Ladegeräte, Wärmepumpen',
          'Mit Stand Juli 2026 war kein ausgeliefertes, Matter-zertifiziertes Produkt in diesen Kategorien von irgendeinem Hersteller bestätigt, laut den eigenen Unterlagen der Connectivity Standards Alliance',
          'Dies ist eine Situation, in der die Spezifikation dem Markt voraus ist: Die Fähigkeit ist definiert, die Hardware ist noch nicht da — betrachten Sie dies als Early-Mover-Erklärung, nicht als Kaufratgeber',
          'Dies unterscheidet sich von den bereits im Balkonsolar-Cluster behandelten Monitoring-/Dashboard-Integrationen — diese lesen Nutzungsdaten, funktionieren schon heute und hängen nicht von einer Matter-Zertifizierung ab',
          'Wenn Sie etwas wollen, das jetzt schon funktioniert, ist reine Monitoring-Integration (Stromwandlerzange, lokale Hersteller-API) der aktuelle Weg — siehe den Überblick zum lokalen Energiemanagement',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'Was Matter für Energiehardware definiert',
        content:
          '**Die Energiemanagement-Gerätetypen von Matter decken Gerätestatus (Laden, Entladen, Erzeugen, Leerlauf), Leistungs-/Energiewerte und Befehlsunterstützung (Start/Stopp, Modiwechsel) ab — eine Fähigkeit auf Protokollebene, gegen die Hersteller entwickeln können, aber kein bestätigtes ausgeliefertes Produkt implementiert sie derzeit.**',
        items: [
          'Gerätetypen umfassen: elektrische Energiezähler, Solarwechselrichter, Batteriespeichersysteme, E-Auto-Ladegeräte und Wärmepumpen — der Spezifikation hinzugefügt beginnend mit Matter 1.4, laut der eigenen Roadmap-Ankündigung der Connectivity Standards Alliance nach Matter 1.3.',
          'Ein Gerät, das einen dieser Typen implementieren würde, würde dies ankündigen und automatisch von Home Assistant erkannt werden, derselbe Anlernvorgang wie bei jedem anderen Matter-Gerät — aber dieser Artikel verweist auf kein bestätigtes Produkt, das dies heute tut.',
          'Selbst wenn Produkte ausgeliefert werden, sind zunächst teilweise Implementierungen zu erwarten — die volle Spezifikation eines Gerätetyps (z. B. Befehle entgegennehmen, nicht nur schreibgeschützten Status melden) wird von frühen Hersteller-Implementierungen oft nur schrittweise übernommen. Prüfen Sie die Dokumentation eines konkreten Produkts, sobald es tatsächlich existiert, statt volle Steuerung allein aus dem Namen des Gerätetyps anzunehmen.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'Wechselrichter und Batterien: Was kommt',
        content:
          '**Sobald ein Hersteller einen Matter-zertifizierten Wechselrichter oder eine Batterie ausliefert, könnte dieser lokal Erzeugung, Ladezustand und Lade-/Entladestatus melden und Modibefehle (z. B. Eigenverbrauch vs. Netzeinspeisung priorisieren) von Home-Assistant-Automatisierungen entgegennehmen — doch mit Stand dieses Textes war kein solches ausgeliefertes Produkt bestätigt.**',
        items: [
          'Dies würde es letztlich einer Automatisierung wie den Lastverschiebungsbeispielen im Überblick zum lokalen Energiemanagement erlauben, auf Echtzeit-Erzeugung und Batteriestatus zu reagieren, nicht nur auf einen festen Zeitplan — sobald die Hardware existiert.',
          'Für tatsächliche aktuelle Batterieprodukte und deren lokale Integrationsoptionen heute (die herstellerspezifische lokale APIs oder Monitoring nutzen, nicht Matter-Energiegerätetypen), siehe die Batterie-Kaufratgeber des Balkonsolar-Clusters — das ist der schon heute funktionierende Weg, getrennt von dem, was dieser Artikel beschreibt.',
          'Dieser Artikel beschreibt die in der Spezifikation definierte Matter-Gerätetyp-Fähigkeit, keine bestätigte Liste konform ausgelieferter Produkte — prüfen Sie die aktuellen Ankündigungen eines Herstellers direkt, bevor Sie annehmen, dass ein bestimmtes Wechselrichter- oder Batteriemodell diese Unterstützung ausliefert.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'Wärmepumpen: Was kommt',
        content:
          '**Ein Matter-Wärmepumpen-Gerätetyp würde, sobald von einem ausgelieferten Produkt implementiert, Modus, Zieltemperatur und Betriebsstatus offenlegen und es Home Assistant erlauben, sie neben der Solarerzeugung zu automatisieren — zum Beispiel die Wärmepumpe während sonnenreicher Stunden stärker laufen zu lassen —, doch kein bestätigtes ausgeliefertes Produkt implementiert dies mit Stand dieses Textes.**',
        items: [
          'Dies würde demselben Muster wie ein Matter-Thermostat folgen, erweitert auf die spezifischen Betriebsmodi einer Wärmepumpe, sobald ein Hersteller sie ausliefert.',
          'Kombiniert mit der im Überblicksartikel beschriebenen lokalen Energieüberwachung würde dies letztlich einer Automatisierung erlauben, den Wärmepumpenbetrieb bei hoher lokaler Erzeugung zu bevorzugen, statt einem festen Tageszeitplan zu folgen — ein „kommt noch"-Szenario, kein aktuelles.',
          'Wie bei Wechselrichtern ist dies eine aufkommende Kategorie auf Spezifikationsseite ohne bestätigte ausgelieferte Herstellerunterstützung mit Stand dieses Textes — prüfen Sie die aktuellen Ankündigungen der Wärmepumpenhersteller direkt, statt Unterstützung anzunehmen, nur weil der Gerätetyp in Matter existiert.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'Unterschied zu reinen Monitoring-Integrationen',
        content:
          '**Reine Monitoring-Integration liest Nutzungs- oder Erzeugungsdaten (über eine Stromwandlerzange oder eine lokale Hersteller-API) ohne native Gerätesteuerung und funktioniert schon heute; Matter-Gerätesteuerung für diese Kategorien noch nicht, da keine zertifizierten Produkte ausgeliefert werden.**',
        items: [
          'Die bestehenden Home-Assistant-Integrationsinhalte des Balkonsolar-Clusters sind Monitoring-/Dashboard-fokussiert — sie lesen Wechselrichterleistung in Home Assistant ein. Das funktioniert jetzt und bleibt die praktische Option.',
          'Matter-Integration wäre, sobald echte Produkte existieren, ein Schritt weiter: Der Wechselrichter oder die Wärmepumpe wird zum vollwertigen lokalen Gerät, entdeckbar und steuerbar genauso wie jedes andere Matter-Gerät, ohne herstellerspezifische Integration.',
          'Da kein Matter-zertifiziertes Wechselrichter-, Batterie- oder Wärmepumpenprodukt mit Stand dieses Textes als ausgeliefert bestätigt war, ist der Monitoring-Ansatz in den Balkonsolar-Leitfäden der einzige heute funktionierende Ausgangspunkt — Matter-Unterstützung ist hier eine zukünftige Ergänzung, keine aktuelle Alternative.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Unterstützt Matter heute Solarwechselrichter?', a: 'Die Spezifikation tut es — Matter umfasst seit Matter 1.4+ einen Gerätetyp für Solarwechselrichter —, aber kein ausgeliefertes, Matter-zertifiziertes Wechselrichterprodukt war mit Stand Juli 2026 bestätigt, laut den eigenen Unterlagen der Connectivity Standards Alliance. Prüfen Sie die aktuelle Dokumentation oder Ankündigungen Ihres Wechselrichterherstellers; nehmen Sie Unterstützung nicht einfach an, nur weil die Spezifikation sie definiert.' },
          { q: 'Kann ich die Temperatur meiner Wärmepumpe über Home Assistant per Matter steuern?', a: 'Noch nicht, mit Stand dieses Textes — kein bestätigtes ausgeliefertes Wärmepumpenprodukt implementiert den Matter-Wärmepumpen-Gerätetyp. Sobald ein Hersteller eine ausliefert, würden Modus und Zieltemperatur zu Standard-Home-Assistant-Entitäten, genauso wie es bei einem Matter-Thermostat heute schon der Fall ist.' },
          { q: 'Ist das dasselbe wie die Home-Assistant-Integrationsleitfäden für Balkonsolar?', a: 'Nein. Diese Leitfäden behandeln das Einlesen von Wechselrichterdaten in Home Assistant zur Überwachung und funktionieren schon heute. Dieser Artikel behandelt native Matter-Gerätesteuerung, eine in der Spezifikation definierte, aber noch in keinem bestätigten ausgelieferten Produkt verfügbare Fähigkeit.' },
          { q: 'Was passiert, wenn mein Wechselrichter nicht Matter-zertifiziert ist?', a: 'Das beschreibt mit Stand dieses Textes jeden Wechselrichter am Markt — keiner ist als Matter-zertifiziert für Energiegerätetypen bestätigt. Reine Monitoring-Integration (über eine lokale Hersteller-API oder eine Stromwandlerzange) ist die aktuelle funktionierende Option für Nutzungsverfolgung und einfache Automatisierung; siehe die Integrationsleitfäden des Balkonsolar-Clusters.' },
          { q: 'Brauche ich einen neuen Wechselrichter für Matter-Unterstützung?', a: 'Die Frage ist mit Stand dieses Textes verfrüht — kein Wechselrichter, neu oder bestehend, hat bislang eine bestätigte Matter-Energiegerätetyp-Zertifizierung. Sobald Produkte ausgeliefert werden, hängt es davon ab, ob Ihr Hersteller einen Firmware-Update-Pfad anbietet; prüfen Sie dessen Roadmap direkt, sobald zertifizierte Produkte existieren.' },
          { q: 'Funktioniert Matter-Energieunterstützung auch bei reinen Batterie-Setups (ohne Solar)?', a: 'In der Spezifikation ja — der Batteriespeicher-Gerätetyp ist unabhängig vom Wechselrichter-Gerätetyp definiert, sodass ein reines Batterie-Backup-Setup Matter für lokalen Status und Steuerung ohne Solarerzeugung nutzen könnte, sobald ein zertifiziertes Produkt existiert. Mit Stand dieses Textes ist das noch ein „sobald es ausgeliefert wird"-Szenario wie der Rest dieses Artikels.' },
          { q: 'Kann eine Automatisierung Matter-Energiedaten mit einem lokalen LLM kombinieren?', a: 'Sobald Wechselrichter-, Batterie- oder Wärmepumpenstatus als Standard-Home-Assistant-Entitäten via Matter verfügbar ist — was ein zertifiziertes Produkt erfordert, das noch nicht existiert —, könnte eine lokale-LLM-Automatisierung (siehe den Leitfaden zum lokalen LLM im Smart Home) genauso über diese Daten schlussfolgern wie über jede andere Entität. Das ist eine zukünftige, keine aktuelle Fähigkeit.' },
          { q: 'Wo prüfe ich die aktuelle Matter-Zertifizierung für ein bestimmtes Produkt?', a: 'Prüfen Sie die eigene Produktdokumentation des Herstellers oder die Liste zertifizierter Produkte der Connectivity Standards Alliance direkt — verlassen Sie sich nicht allein auf Marketingtexte, da „Matter-kompatibel"-Branding oft weiter gefasst ist als die Zertifizierung für einen bestimmten Energiegerätetyp.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Themen',
        items: [
          '[Lokales Energiemanagement im Smart Home](/de/smart-home/local-smart-home-energy-management-2027) — der Überblick, in den dieser Artikel sich einordnet',
          '[Matter 1.6 erklärt: Was ist neu](/de/smart-home/matter-1-6-explained) — das größere Spezifikations-Update',
          '[Matter & lokale Steuerung: Ein internetunabhängiges Smart Home](/de/smart-home/matter-local-control-guide) — Grundlagen zum lokalen Anlernen',
          '[Beste Balkonsolar-Mikrowechselrichter](/de/balcony-solar/best-balcony-solar-microinverters) — clusterübergreifend: aktuelle Wechselrichter-Hardware, die schon heute funktioniert',
          '[Home Assistant + Balkonsolar, ohne Cloud](/de/balcony-solar/home-assistant-balcony-solar-no-cloud) — clusterübergreifend: der reine Monitoring-Integrationspfad, der schon heute funktioniert',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter für Solarwechselrichter und Wärmepumpen: Was kommt (2027)',
      description: 'Matter definiert Gerätetypen für Solarwechselrichter und Wärmepumpen (Matter 1.4+), aber es gibt noch keine ausgelieferten zertifizierten Produkte (Stand Juli 2026) — was kommt, nicht was heute funktioniert.',
      url: 'https://www.promptquorum.com/de/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter Energiemanagement' }, { '@type': 'Thing', name: 'Solarwechselrichter' }, { '@type': 'Thing', name: 'Wärmepumpe' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Unterstützt Matter heute Solarwechselrichter?', acceptedAnswer: { '@type': 'Answer', text: 'Die Spezifikation umfasst seit Matter 1.4+ einen Gerätetyp für Solarwechselrichter, aber kein ausgeliefertes, Matter-zertifiziertes Wechselrichterprodukt war mit Stand Juli 2026 bestätigt.' } },
        { '@type': 'Question', name: 'Kann ich die Temperatur meiner Wärmepumpe über Home Assistant per Matter steuern?', acceptedAnswer: { '@type': 'Answer', text: 'Noch nicht mit Stand dieses Textes — kein bestätigtes ausgeliefertes Wärmepumpenprodukt implementiert den Matter-Wärmepumpen-Gerätetyp.' } },
        { '@type': 'Question', name: 'Ist das dasselbe wie die Home-Assistant-Integrationsleitfäden für Balkonsolar?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Diese Leitfäden behandeln das Einlesen von Wechselrichterdaten zur Überwachung und funktionieren schon heute. Dieser Artikel behandelt native Matter-Gerätesteuerung, die noch in keinem ausgelieferten Produkt verfügbar ist.' } },
        { '@type': 'Question', name: 'Was passiert, wenn mein Wechselrichter nicht Matter-zertifiziert ist?', acceptedAnswer: { '@type': 'Answer', text: 'Das beschreibt mit Stand dieses Textes jeden Wechselrichter am Markt. Reine Monitoring-Integration über eine lokale Hersteller-API oder eine Stromwandlerzange ist die aktuelle funktionierende Option.' } },
        { '@type': 'Question', name: 'Wo prüfe ich die aktuelle Matter-Zertifizierung für ein bestimmtes Produkt?', acceptedAnswer: { '@type': 'Answer', text: 'Prüfen Sie die eigene Produktdokumentation des Herstellers oder die Liste zertifizierter Produkte der Connectivity Standards Alliance direkt.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Matter pour onduleurs solaires et pompes à chaleur : ce qui arrive (2027)',
    seoTitle: 'Matter pour onduleurs + pompes à chaleur : pas encore (2027)',
    intro:
      'La spécification Matter définit des types d\'appareils pour le matériel de gestion énergétique — onduleurs solaires, stockage par batterie, chargeurs de véhicules électriques et pompes à chaleur — depuis Matter 1.4+ (selon l\'annonce de feuille de route de la Connectivity Standards Alliance elle-même), mais à l\'heure où ces lignes sont écrites, aucun produit onduleur, batterie ou pompe à chaleur certifié Matter et commercialisé par un fabricant n\'est confirmé. Ceci est une explication pour early adopters : ce que la spécification définit aujourd\'hui, et ce qu\'il faut surveiller avant que cela devienne une véritable option d\'achat, pas un guide sur du matériel utilisable dès maintenant. Il explique aussi en quoi cela diffère des intégrations de surveillance et de tableau de bord déjà couvertes pour le solaire de balcon, qui elles fonctionnent aujourd\'hui.',
    metaDescription:
      'Matter définit des types d\'appareils pour onduleurs solaires et pompes à chaleur (Matter 1.4+), mais aucun produit certifié commercialisé n\'existe encore en juillet 2026 — ce qui arrive, pas ce qui fonctionne aujourd\'hui.',
    twitterDescription:
      'Matter a une spécification pour onduleurs solaires et pompes à chaleur — mais aucun produit certifié commercialisé pour l\'instant. Ce que la spécification définit, et quoi surveiller.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de maison connectée avec onduleur solaire, batterie ou pompe à chaleur voulant savoir quand le contrôle local Matter deviendra une vraie option',
    primaryTerm: 'matter onduleur solaire pompe a chaleur integration',
    targetKeywords: [
      'matter maison connectee onduleur pompe a chaleur',
      'matter types appareils gestion energie',
      'home assistant matter onduleur solaire',
      'matter integration pompe a chaleur',
      'matter onduleur solaire support reel',
    ],
    leadAnswerBlock:
      '**Pas encore, comme véritable décision d\'achat — la spécification Matter définit des types d\'appareils pour la gestion énergétique (onduleurs, batteries, chargeurs de VE, pompes à chaleur) depuis Matter 1.4+, mais en juillet 2026 aucun produit certifié Matter et commercialisé dans ces catégories n\'est confirmé chez un quelconque fabricant.** L\'annonce de feuille de route de la Connectivity Standards Alliance elle-même a désigné ces types d\'appareils comme des ajouts prévus après Matter 1.3, sans nommer un seul fabricant ou produit les commercialisant aujourd\'hui. Considérez cet article comme « ce qu\'il faut surveiller », pas « ce que vous pouvez acheter ».',
    quickAnswerTop: {
      fr: {
        question: 'Puis-je contrôler mon onduleur solaire ou ma pompe à chaleur localement avec Matter aujourd\'hui ?',
        answer:
          'Pas encore, pour le scénario précis « onduleur/pompe à chaleur certifié Matter ». La spécification Matter inclut des types d\'appareils de gestion énergétique (onduleurs, stockage par batterie, chargeurs de VE, pompes à chaleur) depuis Matter 1.4+, permettant à un appareil certifié de signaler son état et d\'accepter des commandes localement via Home Assistant plutôt que via une appli cloud du fabricant — mais aucun produit certifié Matter et commercialisé dans ces catégories n\'était confirmé à l\'heure où ces lignes sont écrites (juillet 2026), selon les documents propres de la Connectivity Standards Alliance. La capacité existe dans la spécification ; les produits n\'existent pas encore sur le marché.',
        bullets: [
          'Matter définit des types d\'appareils pour onduleurs, batteries, chargeurs de VE et pompes à chaleur depuis Matter 1.4+',
          'Aucun produit certifié Matter et commercialisé dans ces catégories n\'était confirmé en juillet 2026 — la spécification est en avance sur le marché, ce n\'est pas un guide d\'achat',
          'Les tableaux de bord de surveillance (déjà couverts pour le solaire de balcon) sont une approche différente, fonctionnelle dès aujourd\'hui — cet article traite du contrôle natif au niveau appareil, qui n\'est pas encore disponible',
          'Vérifiez la documentation actuelle du fabricant avant de supposer qu\'un produit donné offre ce support',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Ce que Matter définit pour le matériel énergétique', anchor: 'what-matter-defines' },
      { label: 'Onduleurs et batteries : ce qui arrive', anchor: 'inverters-batteries' },
      { label: 'Pompes à chaleur : ce qui arrive', anchor: 'heat-pumps' },
      { label: 'Différence avec les intégrations de surveillance seule', anchor: 'differs-from-monitoring' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter définit des types d\'appareils pour onduleurs, batteries, chargeurs de VE et pompes à chaleur depuis Matter 1.4+, mais aucun produit certifié Matter et commercialisé dans ces catégories n\'était confirmé en juillet 2026 — ceci est une explication pour early adopters, pas un guide d\'achat actuel.' },
      { type: 'plain-terms', content: 'Matter est un langage commun que les appareils connectés utilisent pour parler à un hub comme Home Assistant. La spécification Matter inclut désormais des définitions pour le matériel énergétique — onduleurs solaires, batteries domestiques, chargeurs de VE et pompes à chaleur —, mais définir un type d\'appareil dans la spécification n\'est pas la même chose qu\'un fabricant construisant et certifiant réellement un produit selon cette définition. Mi-2026, le côté produit n\'a pas encore rattrapé son retard.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          'Matter définit des types d\'appareils pour la gestion énergétique — onduleurs, batteries, chargeurs de VE, pompes à chaleur — depuis Matter 1.4+',
          'À l\'heure où ces lignes sont écrites (juillet 2026), aucun produit certifié Matter et commercialisé dans ces catégories n\'était confirmé chez un fabricant quelconque, selon les documents propres de la Connectivity Standards Alliance',
          'C\'est une situation où la spécification est en avance sur le marché : la capacité est définie, le matériel n\'est pas encore là — considérez ceci comme une explication pour early adopters, pas un guide d\'achat',
          'Ceci diffère des intégrations de surveillance/tableau de bord déjà couvertes dans le cluster solaire de balcon — celles-ci lisent des données d\'usage, fonctionnent aujourd\'hui, et ne dépendent pas d\'une certification Matter',
          'Si vous voulez quelque chose qui fonctionne dès maintenant, l\'intégration de surveillance seule (pince ampèremétrique, API locale du fabricant) est la voie actuelle — voir la synthèse sur la gestion locale de l\'énergie',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'Ce que Matter définit pour le matériel énergétique',
        content:
          '**Les types d\'appareils de gestion énergétique de Matter couvrent l\'état de l\'appareil (charge, décharge, production, veille), les relevés de puissance/énergie, et le support de commandes (démarrage/arrêt, changements de mode) — une capacité au niveau protocole que les fabricants peuvent implémenter, mais qu\'aucun produit confirmé commercialisé n\'implémente actuellement.**',
        items: [
          'Les types d\'appareils incluent : compteurs d\'énergie électrique, onduleurs solaires, systèmes de stockage par batterie, chargeurs de VE et pompes à chaleur — ajoutés à la spécification à partir de Matter 1.4, selon l\'annonce de feuille de route de la Connectivity Standards Alliance elle-même après Matter 1.3.',
          'Un appareil qui implémenterait l\'un de ces types l\'annoncerait et serait détecté automatiquement par Home Assistant, le même processus d\'appairage que pour tout autre appareil Matter — mais cet article ne pointe vers aucun produit confirmé qui fait cela aujourd\'hui.',
          'Même une fois que des produits seront commercialisés, attendez-vous à des implémentations partielles au début — la spécification complète d\'un type d\'appareil (par exemple accepter des commandes, pas seulement signaler un état en lecture seule) est souvent adoptée progressivement par les premières implémentations des fabricants. Vérifiez la documentation d\'un produit précis une fois qu\'il existe réellement, plutôt que de supposer un contrôle complet à partir du seul nom du type d\'appareil.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'Onduleurs et batteries : ce qui arrive',
        content:
          '**Une fois qu\'un fabricant commercialisera un onduleur ou une batterie certifié Matter, celui-ci pourrait signaler localement la production, l\'état de charge et le statut de charge/décharge, et accepter des commandes de mode (par exemple prioriser l\'autoconsommation vs l\'export réseau) depuis des automatisations Home Assistant — mais à l\'heure où ces lignes sont écrites, aucun produit commercialisé de ce type n\'était confirmé.**',
        items: [
          'Cela permettrait éventuellement à une automatisation comme les exemples de décalage de charge dans la synthèse sur la gestion locale de l\'énergie de réagir à la production et au statut de la batterie en temps réel, pas seulement à un horaire fixe — une fois que le matériel existera.',
          'Pour les produits de batterie de génération actuelle réels et leurs options d\'intégration locale aujourd\'hui (qui utilisent des API locales spécifiques au fabricant ou de la surveillance, pas les types d\'appareils énergétiques Matter), voir les guides d\'achat de batteries du cluster solaire de balcon — c\'est la voie fonctionnelle dès aujourd\'hui, distincte de ce que décrit cet article.',
          'Cet article décrit la capacité de type d\'appareil Matter telle que définie dans la spécification, pas une liste confirmée de produits conformes — vérifiez directement les annonces actuelles d\'un fabricant avant de supposer qu\'un modèle d\'onduleur ou de batterie précis offre ce support.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'Pompes à chaleur : ce qui arrive',
        content:
          '**Un type d\'appareil pompe à chaleur Matter, une fois implémenté par un produit commercialisé, exposerait le mode, la température cible et l\'état de fonctionnement, permettant à Home Assistant de l\'automatiser aux côtés de la production solaire — par exemple faire fonctionner la pompe à chaleur plus fort pendant les heures de forte production solaire —, mais aucun produit commercialisé confirmé n\'implémente cela à l\'heure où ces lignes sont écrites.**',
        items: [
          'Cela suivrait le même schéma qu\'un thermostat Matter, étendu aux modes de fonctionnement spécifiques d\'une pompe à chaleur, une fois qu\'un fabricant la commercialisera.',
          'Combiné à la surveillance énergétique locale décrite dans l\'article de synthèse, cela permettrait éventuellement à une automatisation de privilégier le fonctionnement de la pompe à chaleur quand la production locale est élevée, plutôt qu\'un horaire fixe — un scénario « à venir », pas actuel.',
          'Comme pour les onduleurs, c\'est une catégorie émergente côté spécification, sans support fabricant commercialisé confirmé à l\'heure où ces lignes sont écrites — vérifiez directement les annonces actuelles des fabricants de pompes à chaleur plutôt que de supposer un support parce que le type d\'appareil existe dans Matter.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'Différence avec les intégrations de surveillance seule',
        content:
          '**L\'intégration de surveillance seule lit des données d\'usage ou de production (via une pince ampèremétrique ou une API locale du fournisseur) sans contrôle natif de l\'appareil, et fonctionne aujourd\'hui ; l\'intégration Matter au niveau appareil pour ces catégories ne fonctionne pas encore, puisqu\'aucun produit certifié n\'est commercialisé.**',
        items: [
          'Le contenu d\'intégration Home Assistant existant du cluster solaire de balcon est centré sur la surveillance/le tableau de bord — lire la production de l\'onduleur dans Home Assistant. Cela fonctionne maintenant et reste l\'option pratique.',
          'L\'intégration Matter, une fois que des produits réels existeront, irait plus loin : l\'onduleur ou la pompe à chaleur deviendrait un appareil local de première classe, détectable et contrôlable de la même manière que tout autre appareil Matter, sans intégration spécifique au fournisseur.',
          'Étant donné qu\'aucun produit onduleur, batterie ou pompe à chaleur certifié Matter n\'était confirmé commercialisé à l\'heure où ces lignes sont écrites, l\'approche de surveillance des guides solaire de balcon est le seul point de départ fonctionnel aujourd\'hui — le support Matter ici est un ajout futur, pas une alternative actuelle.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Matter prend-il en charge les onduleurs solaires aujourd\'hui ?', a: 'La spécification, oui — Matter inclut un type d\'appareil pour les onduleurs solaires depuis Matter 1.4+ —, mais aucun produit onduleur certifié Matter et commercialisé n\'était confirmé en juillet 2026, selon les documents propres de la Connectivity Standards Alliance. Vérifiez la documentation ou les annonces actuelles du fabricant de votre onduleur ; ne supposez pas que le support existe simplement parce que la spécification le définit.' },
          { q: 'Puis-je contrôler la température de ma pompe à chaleur via Home Assistant par Matter ?', a: 'Pas encore, à l\'heure où ces lignes sont écrites — aucun produit pompe à chaleur commercialisé confirmé n\'implémente le type d\'appareil pompe à chaleur de Matter. Une fois qu\'un fabricant en commercialisera une, le mode et la température cible deviendraient des entités Home Assistant standard, comme c\'est déjà le cas pour un thermostat Matter aujourd\'hui.' },
          { q: 'Est-ce la même chose que les guides d\'intégration Home Assistant pour le solaire de balcon ?', a: 'Non. Ces guides couvrent la lecture des données d\'onduleur dans Home Assistant à des fins de surveillance, et fonctionnent aujourd\'hui. Cet article couvre le contrôle natif d\'appareil Matter, une capacité définie dans la spécification mais pas encore disponible dans un produit commercialisé confirmé.' },
          { q: 'Que se passe-t-il si mon onduleur n\'est pas certifié Matter ?', a: 'Cela décrit chaque onduleur du marché à l\'heure où ces lignes sont écrites — aucun n\'est confirmé certifié Matter pour les types d\'appareils énergétiques. L\'intégration de surveillance seule (via une API locale du fabricant ou une pince ampèremétrique) est l\'option fonctionnelle actuelle pour le suivi d\'usage et l\'automatisation de base ; voir les guides d\'intégration du cluster solaire de balcon.' },
          { q: 'Ai-je besoin d\'un nouvel onduleur pour obtenir le support Matter ?', a: 'La question est prématurée à l\'heure où ces lignes sont écrites — aucun onduleur, neuf ou existant, n\'a de certification confirmée pour les types d\'appareils énergétiques Matter. Une fois que des produits seront commercialisés, le fait que votre matériel existant obtienne le support dépendra du fabricant offrant un chemin de mise à jour firmware ; vérifiez directement sa feuille de route une fois que des produits certifiés existeront.' },
          { q: 'Le support énergétique Matter fonctionne-t-il avec des installations batterie seule (sans solaire) ?', a: 'Dans la spécification, oui — le type d\'appareil stockage par batterie est défini indépendamment du type d\'appareil onduleur, donc une installation de secours batterie seule pourrait utiliser Matter pour le statut et le contrôle locaux sans production solaire impliquée, une fois qu\'un produit certifié existera. À l\'heure où ces lignes sont écrites, c\'est encore un scénario « quand cela sera commercialisé » comme le reste de cet article.' },
          { q: 'Une automatisation peut-elle combiner des données énergétiques Matter avec un LLM local ?', a: 'Une fois que l\'état de l\'onduleur, de la batterie ou de la pompe à chaleur sera exposé comme entités Home Assistant standard via Matter — ce qui nécessite un produit certifié qui n\'existe pas encore —, une automatisation LLM locale (voir le guide LLM local pour maison connectée) pourrait raisonner sur ces données de la même façon que pour toute autre entité. C\'est une capacité future, pas actuelle.' },
          { q: 'Où vérifier la certification Matter actuelle pour un produit précis ?', a: 'Consultez directement la documentation propre du fabricant ou la liste des produits certifiés de la Connectivity Standards Alliance — ne vous fiez pas uniquement au discours marketing, car le label « compatible Matter » est souvent plus large que la certification pour un type d\'appareil énergétique précis.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Gestion locale de l\'énergie dans la maison connectée](/fr/smart-home/local-smart-home-energy-management-2027) — la synthèse dans laquelle s\'inscrit cet article',
          '[Matter 1.6 expliqué : les nouveautés](/fr/smart-home/matter-1-6-explained) — la mise à jour de spécification plus large',
          '[Matter & contrôle local : une maison connectée indépendante d\'internet](/fr/smart-home/matter-local-control-guide) — fondamentaux de l\'appairage local',
          '[Meilleurs micro-onduleurs solaires de balcon](/fr/balcony-solar/best-balcony-solar-microinverters) — inter-cluster : choix de matériel onduleur actuel qui fonctionne dès aujourd\'hui',
          '[Home Assistant + solaire de balcon, sans cloud](/fr/balcony-solar/home-assistant-balcony-solar-no-cloud) — inter-cluster : la voie d\'intégration de surveillance seule qui fonctionne dès aujourd\'hui',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter pour onduleurs solaires et pompes à chaleur : ce qui arrive (2027)',
      description: 'Matter définit des types d\'appareils pour onduleurs solaires et pompes à chaleur (Matter 1.4+), mais aucun produit certifié commercialisé n\'existe encore en juillet 2026 — ce qui arrive, pas ce qui fonctionne aujourd\'hui.',
      url: 'https://www.promptquorum.com/fr/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Gestion énergétique Matter' }, { '@type': 'Thing', name: 'Onduleur solaire' }, { '@type': 'Thing', name: 'Pompe à chaleur' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Matter prend-il en charge les onduleurs solaires aujourd\'hui ?', acceptedAnswer: { '@type': 'Answer', text: 'La spécification inclut un type d\'appareil pour les onduleurs solaires depuis Matter 1.4+, mais aucun produit certifié Matter et commercialisé n\'était confirmé en juillet 2026.' } },
        { '@type': 'Question', name: 'Puis-je contrôler la température de ma pompe à chaleur via Home Assistant par Matter ?', acceptedAnswer: { '@type': 'Answer', text: 'Pas encore à l\'heure où ces lignes sont écrites — aucun produit pompe à chaleur commercialisé confirmé n\'implémente le type d\'appareil pompe à chaleur de Matter.' } },
        { '@type': 'Question', name: 'Est-ce la même chose que les guides d\'intégration Home Assistant pour le solaire de balcon ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Ces guides couvrent la lecture de données d\'onduleur pour la surveillance et fonctionnent aujourd\'hui. Cet article couvre le contrôle natif d\'appareil Matter, non encore disponible.' } },
        { '@type': 'Question', name: 'Que se passe-t-il si mon onduleur n\'est pas certifié Matter ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela décrit chaque onduleur du marché à l\'heure où ces lignes sont écrites. L\'intégration de surveillance seule via une API locale du fabricant ou une pince ampèremétrique est l\'option fonctionnelle actuelle.' } },
        { '@type': 'Question', name: 'Où vérifier la certification Matter actuelle pour un produit précis ?', acceptedAnswer: { '@type': 'Answer', text: 'Consultez directement la documentation propre du fabricant ou la liste des produits certifiés de la Connectivity Standards Alliance.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: '太陽光インバーターとヒートポンプ向けMatter：今後の展望（2027年）',
    seoTitle: '太陽光インバーター＋ヒートポンプのMatter：まだ先（2027年）',
    intro:
      'Matter仕様は、Matter 1.4以降（Connectivity Standards Alliance自身のロードマップ発表による）、太陽光インバーター、蓄電池、EV充電器、ヒートポンプといったエネルギー管理機器のデバイスタイプを定義していますが、本稿執筆時点で、いずれのメーカーからもMatter認証済みで出荷されているインバーター・電池・ヒートポンプ製品は確認されていません。これはアーリーアダプター向けの解説です：仕様が今日何を定義しているか、そして実際の購入選択肢になる前に何を注視すべきかを扱うものであり、今すぐ使えるハードウェアのガイドではありません。また、すでに稼働しているバルコニーソーラー向けの監視・ダッシュボード連携とどう違うかも説明します。',
    metaDescription:
      'Matterは太陽光インバーターとヒートポンプ向けにデバイスタイプを定義済み（Matter 1.4以降）ですが、2026年7月時点で出荷済みの認証製品はまだ存在しません — 今日動くものではなく、今後の展望です。',
    twitterDescription:
      'Matterには太陽光インバーターとヒートポンプの仕様がありますが、出荷済みの認証製品はまだありません。仕様が定義する内容と、今後注視すべき点。',
    readTime: '7分で読めます',
    educationalLevel: 'Intermediate',
    audience: '太陽光インバーター、バッテリー、ヒートポンプを持ち、ローカルMatter制御がいつ現実の選択肢になるか知りたいスマートホーム所有者',
    primaryTerm: 'matter 太陽光インバーター ヒートポンプ 連携',
    targetKeywords: [
      'matter スマートホーム インバーター ヒートポンプ',
      'matter エネルギー管理 デバイスタイプ',
      'home assistant matter 太陽光インバーター',
      'matter ヒートポンプ 連携',
      'matter 太陽光インバーター対応 本当か',
    ],
    leadAnswerBlock:
      '**現実の購入判断としてはまだです — Matter仕様はMatter 1.4以降、エネルギー管理（インバーター、電池、EV充電器、ヒートポンプ）のデバイスタイプを定義していますが、2026年7月時点でこれらのカテゴリーで出荷済みかつMatter認証済みの製品はいずれのメーカーからも確認されていません。** Connectivity Standards Alliance自身のロードマップ発表は、Matter 1.3に続く計画中の追加としてこれらのデバイスタイプを挙げましたが、今日それらを出荷しているメーカーや製品は一つも名指ししていません。本記事は「何を買えるか」ではなく「何に注目すべきか」として読んでください。',
    quickAnswerTop: {
      ja: {
        question: '太陽光インバーターやヒートポンプを今日Matterでローカル制御できますか？',
        answer:
          '「Matter認証済みのインバーター/ヒートポンプ」という具体的なシナリオについては、まだです。Matter仕様はMatter 1.4以降、エネルギー管理デバイスタイプ（インバーター、蓄電池、EV充電器、ヒートポンプ）を含んでおり、認証済み機器がメーカーのクラウドアプリではなくHome Assistant経由でローカルに状態を報告しコマンドを受け付けることを可能にしますが、本稿執筆時点（2026年7月）で、これらのカテゴリーで出荷済みかつMatter認証済みの製品はConnectivity Standards Alliance自身の資料によれば確認されていません。仕様上は機能が存在しますが、製品はまだ市場に存在しません。',
        bullets: [
          'Matter 1.4以降、インバーター・電池・EV充電器・ヒートポンプのデバイスタイプが定義されている',
          '2026年7月時点でこれらのカテゴリーの出荷済みMatter認証製品は確認されていない — 仕様が市場に先行している状況であり、購入ガイドではない',
          '（バルコニーソーラーで既に扱った）監視ダッシュボードは別の、今日から機能するアプローチ — 本記事はまだ利用できないネイティブな機器レベル制御を扱う',
          '特定製品がこの対応を出荷していると仮定する前に、メーカーの最新のドキュメントを確認すること',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'Matterがエネルギー機器向けに定義するもの', anchor: 'what-matter-defines' },
      { label: 'インバーターと電池：今後の展望', anchor: 'inverters-batteries' },
      { label: 'ヒートポンプ：今後の展望', anchor: 'heat-pumps' },
      { label: '監視専用連携との違い', anchor: 'differs-from-monitoring' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter 1.4以降、インバーター・電池・EV充電器・ヒートポンプのデバイスタイプが定義されていますが、2026年7月時点でこれらのカテゴリーの出荷済みMatter認証製品は確認されていません — これはアーリーアダプター向けの解説であり、現在の購入ガイドではありません。' },
      { type: 'plain-terms', content: 'Matterは、スマートホーム機器がHome Assistantのようなハブと会話するための共通言語です。Matter仕様には現在、太陽光インバーター、家庭用バッテリー、EV充電器、ヒートポンプといったエネルギー機器の定義が含まれていますが、仕様にデバイスタイプを定義することと、メーカーが実際にそれに沿った製品を作り認証を取ることは別問題です。2026年半ば時点で、製品側はまだ追いついていません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'Matter 1.4以降、エネルギー管理（インバーター・電池・EV充電器・ヒートポンプ）のデバイスタイプが定義されている',
          '本稿執筆時点（2026年7月）で、これらのカテゴリーの出荷済みMatter認証製品はいずれのメーカーからもConnectivity Standards Alliance自身の資料によれば確認されていない',
          'これは仕様が市場に先行している状況：機能は定義済みだがハードウェアはまだ存在しない — 本記事はアーリーアダプター向け解説として扱ってください、購入ガイドではありません',
          'バルコニーソーラー・クラスターで既に扱った監視・ダッシュボード連携とは異なる — それらは使用データを読み取り、今日機能し、Matter認証に依存しない',
          '今すぐ機能するものが欲しい場合、監視専用連携（CTクランプ、ベンダーのローカルAPI）が現在の道です — ローカルエネルギー管理の概要記事を参照してください',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'Matterがエネルギー機器向けに定義するもの',
        content:
          '**Matterのエネルギー管理デバイスタイプは、機器の状態（充電中・放電中・発電中・待機中）、電力/エネルギー計測値、コマンド対応（起動/停止、モード変更）をカバーします — これはメーカーが実装対象とできるプロトコルレベルの機能であり、現時点で確認されている出荷済み製品が実装しているものではありません。**',
        items: [
          'デバイスタイプには、電気エネルギーメーター、太陽光インバーター、蓄電システム、EV充電器、ヒートポンプが含まれます — Matter 1.3に続くConnectivity Standards Alliance自身のロードマップ発表によれば、Matter 1.4から仕様に追加されました。',
          'これらのいずれかを実装した機器は、他のMatter機器と同じペアリングフローでそれを表明し、Home Assistantに自動的に検出されるでしょう — ただし本記事は、今日これを行う確認済み製品を指し示すものではありません。',
          '製品が実際に出荷され始めても、当初は部分的な実装が予想されます — デバイスタイプの完全な仕様（例えば読み取り専用の状態報告だけでなくコマンドの受け付け）は、初期のメーカー実装では段階的にしか採用されないことが多いです。実際に存在するようになった特定製品のドキュメントを確認し、デバイスタイプ名だけから完全な制御を仮定しないでください。',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'インバーターと電池：今後の展望',
        content:
          '**メーカーがMatter認証済みのインバーターや電池を出荷すれば、発電量、充電状態、充放電ステータスをローカルに報告し、Home Assistantの自動化からモードコマンド（例えば自家消費優先か系統売電優先か）を受け付けられるようになるはずですが、本稿執筆時点でそのような出荷済み製品は確認されていません。**',
        items: [
          'ハードウェアが存在するようになれば、これはローカルエネルギー管理の概要記事にある負荷シフトの例のような自動化が、固定スケジュールだけでなくリアルタイムの発電量やバッテリー状態に反応できるようにするでしょう。',
          '実際に現行世代のバッテリー製品と、今日利用できるそのローカル連携オプション（Matterエネルギーデバイスタイプではなく、メーカー独自のローカルAPIや監視を使用）については、バルコニーソーラー・クラスターのバッテリー購入ガイドを参照してください — これは本記事が説明する内容とは別の、今日から機能する道です。',
          '本記事は仕様で定義されたMatterデバイスタイプの機能を説明するものであり、対応製品の確認済みリストではありません — 特定のインバーターやバッテリーモデルがこの対応を出荷していると仮定する前に、メーカーの現在の発表を直接確認してください。',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'ヒートポンプ：今後の展望',
        content:
          '**Matterのヒートポンプデバイスタイプは、出荷製品によって実装されれば、モード、目標温度、稼働状態を公開し、Home Assistantが太陽光発電と連動してそれを自動化できるようになるでしょう — 例えば太陽光発電が多い時間帯にヒートポンプをより強く稼働させるなど — しかし本稿執筆時点でこれを実装する確認済みの出荷製品はありません。**',
        items: [
          'これは、メーカーが出荷すれば、Matterサーモスタットと同じパターンをヒートポンプ固有の動作モードに拡張したものになるでしょう。',
          '概要記事で説明したローカルエネルギー監視と組み合わせれば、これはやがて、固定の時間帯スケジュールではなく、ローカルの発電量が高いときにヒートポンプの稼働を優先する自動化を可能にするでしょう — これは「まだ先」のシナリオであり、現在のものではありません。',
          'インバーターと同様、これは仕様側では新興カテゴリーであり、本稿執筆時点で確認済みの出荷メーカー対応はありません — Matterにデバイスタイプが存在するからといって対応があると仮定せず、ヒートポンプメーカーの現在の発表を直接確認してください。',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: '監視専用連携との違い',
        content:
          '**監視専用連携は（CTクランプやベンダーのローカルAPI経由で）使用量や発電量データを読み取るだけでネイティブな機器制御は行わず、今日機能します。これらのカテゴリーでのMatter機器レベル連携は、認証済み製品が出荷されていないため、まだ機能しません。**',
        items: [
          'バルコニーソーラー・クラスターの既存のHome Assistant連携コンテンツは監視・ダッシュボード中心です — インバーターの出力をHome Assistantに読み込みます。これは今すぐ機能し、実用的な選択肢であり続けます。',
          '実際の製品が存在するようになれば、Matter連携はさらに一歩進んだものになります：インバーターやヒートポンプは、ベンダー固有の連携なしに、他のMatter機器と同じように検出・制御できる第一級のローカル機器になります。',
          '本稿執筆時点でMatter認証済みのインバーター、バッテリー、ヒートポンプ製品の出荷が確認されていないため、バルコニーソーラーガイドの監視アプローチが今日唯一機能する出発点です — ここでのMatter対応は将来の追加であり、現在の代替手段ではありません。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Matterは今日、太陽光インバーターに対応していますか？', a: '仕様上は対応しています — MatterはMatter 1.4以降、太陽光インバーター向けのデバイスタイプを含んでいます — しかし、Connectivity Standards Alliance自身の資料によれば、2026年7月時点で出荷済みかつMatter認証済みのインバーター製品は確認されていません。インバーターメーカーの現在のドキュメントや発表を確認してください。仕様がそれを定義しているというだけで対応があると仮定しないでください。' },
          { q: 'Matter経由でHome Assistantを通じてヒートポンプの温度を制御できますか？', a: '本稿執筆時点ではまだです — Matterのヒートポンプデバイスタイプを実装した確認済みの出荷製品はありません。メーカーが実際に出荷すれば、モードと目標温度は、今日のMatterサーモスタットと同様に標準のHome Assistantエンティティになるでしょう。' },
          { q: 'これはバルコニーソーラーのHome Assistant連携ガイドと同じものですか？', a: 'いいえ。それらのガイドは監視目的でインバーターデータをHome Assistantに読み込むことを扱っており、今日機能します。本記事はネイティブなMatter機器制御を扱っており、これは仕様で定義された機能ですが、確認済みの出荷製品にはまだ存在しません。' },
          { q: '私のインバーターがMatter認証を受けていない場合どうなりますか？', a: 'それは本稿執筆時点で市場にあるすべてのインバーターに当てはまります — エネルギーデバイスタイプについてMatter認証済みと確認されているものはありません。監視専用連携（メーカーのローカルAPIまたはCTクランプ経由）が、使用状況追跡と基本的な自動化のための現在機能する選択肢です。バルコニーソーラー・クラスターの連携ガイドを参照してください。' },
          { q: 'Matter対応を得るには新しいインバーターが必要ですか？', a: 'この質問は本稿執筆時点では時期尚早です — 新旧を問わずいずれのインバーターも、Matterエネルギーデバイスタイプの確認済み認証をまだ持っていません。製品が実際に出荷されれば、既存のハードウェアが対応を得られるかどうかは、お使いのメーカーがファームウェア更新の道筋を提供するかどうかに左右されます。認証済み製品が存在するようになったら、そのロードマップを直接確認してください。' },
          { q: 'Matterのエネルギー対応は電池のみ（太陽光なし）の構成でも機能しますか？', a: '仕様上はイエスです — 蓄電システムのデバイスタイプはインバーターのデバイスタイプとは独立して定義されているため、認証済み製品が存在するようになれば、太陽光発電が関与しない電池のみのローカルバックアップ構成でも、ローカルの状態把握と制御にMatterを使えるはずです。本稿執筆時点では、これも本記事の他の部分と同様「出荷されたら」のシナリオです。' },
          { q: '自動化はMatterのエネルギーデータをローカルLLMと組み合わせられますか？', a: 'インバーター、電池、ヒートポンプの状態がMatter経由で標準のHome Assistantエンティティとして公開されるようになれば（これにはまだ存在しない認証済み製品が必要です）、ローカルLLM自動化（ローカルLLMスマートホームガイド参照）は他のエンティティと同じようにそのデータを推論に使えるようになるでしょう。これは将来の機能であり、現在のものではありません。' },
          { q: '特定製品の現在のMatter認証はどこで確認できますか？', a: 'メーカー自身の製品ドキュメント、またはConnectivity Standards Allianceの認証製品リストを直接確認してください — マーケティング文言だけに頼らないでください。「Matter対応」というブランディングは、特定のエネルギーデバイスタイプの認証よりも範囲が広いことがよくあります。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルなスマートホームのエネルギー管理](/ja/smart-home/local-smart-home-energy-management-2027) — 本記事が掘り下げる概要記事',
          '[Matter 1.6解説：新機能](/ja/smart-home/matter-1-6-explained) — より広範な仕様アップデート',
          '[Matter＆ローカル制御：インターネット非依存のスマートホーム](/ja/smart-home/matter-local-control-guide) — ローカルペアリングの基礎',
          '[バルコニーソーラー用マイクロインバーターおすすめ](/ja/balcony-solar/best-balcony-solar-microinverters) — クラスター横断：今日から機能する現行インバーターハードウェアの選択肢',
          '[Home Assistant＋バルコニーソーラー、クラウドなし](/ja/balcony-solar/home-assistant-balcony-solar-no-cloud) — クラスター横断：今日から機能する監視専用連携の道',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '太陽光インバーターとヒートポンプ向けMatter：今後の展望（2027年）',
      description: 'Matterは太陽光インバーターとヒートポンプ向けにデバイスタイプを定義済み（Matter 1.4以降）ですが、2026年7月時点で出荷済みの認証製品はまだ存在しません — 今日動くものではなく、今後の展望です。',
      url: 'https://www.promptquorum.com/ja/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matterエネルギー管理' }, { '@type': 'Thing', name: '太陽光インバーター' }, { '@type': 'Thing', name: 'ヒートポンプ' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Matterは今日、太陽光インバーターに対応していますか？', acceptedAnswer: { '@type': 'Answer', text: '仕様上はMatter 1.4以降、太陽光インバーター向けのデバイスタイプを含んでいますが、2026年7月時点で出荷済みかつMatter認証済みのインバーター製品は確認されていません。' } },
        { '@type': 'Question', name: 'Matter経由でHome Assistantを通じてヒートポンプの温度を制御できますか？', acceptedAnswer: { '@type': 'Answer', text: '本稿執筆時点ではまだです — Matterのヒートポンプデバイスタイプを実装した確認済みの出荷製品はありません。' } },
        { '@type': 'Question', name: 'これはバルコニーソーラーのHome Assistant連携ガイドと同じものですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。それらのガイドは監視目的のインバーターデータ読み込みを扱い、今日機能します。本記事はまだ出荷製品に存在しないネイティブなMatter機器制御を扱います。' } },
        { '@type': 'Question', name: '私のインバーターがMatter認証を受けていない場合どうなりますか？', acceptedAnswer: { '@type': 'Answer', text: 'それは本稿執筆時点で市場にあるすべてのインバーターに当てはまります。メーカーのローカルAPIまたはCTクランプ経由の監視専用連携が現在機能する選択肢です。' } },
        { '@type': 'Question', name: '特定製品の現在のMatter認証はどこで確認できますか？', acceptedAnswer: { '@type': 'Answer', text: 'メーカー自身の製品ドキュメント、またはConnectivity Standards Allianceの認証製品リストを直接確認してください。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: '太阳能逆变器与热泵的Matter支持：即将到来（2027年）',
    seoTitle: '太阳能逆变器＋热泵的Matter：尚未到来（2027年）',
    intro:
      '自Matter 1.4起（根据Connectivity Standards Alliance自己的路线图公告），Matter规范已经为能源管理硬件——太阳能逆变器、电池储能、电动车充电器和热泵——定义了设备类型，但截至本文撰写时，尚未确认有任何厂商推出经Matter认证并已上市的逆变器、电池或热泵产品。这是一篇面向早期关注者的解读：说明规范目前定义了什么，以及在其成为真正可购买的选项之前应关注哪些动态，而不是一份可以现在就使用的硬件指南。文章还说明了这与已经为阳台光伏介绍过的、目前已经可用的监测与仪表盘集成有何不同。',
    metaDescription:
      'Matter已为太阳能逆变器和热泵定义设备类型（Matter 1.4及以上），但截至2026年7月尚无已上市的认证产品——这是即将到来的内容，而非今天就能用的功能。',
    twitterDescription:
      'Matter已有太阳能逆变器和热泵的规范——但尚无已上市的认证产品。规范定义了什么，以及该关注什么。',
    readTime: '阅读需7分钟',
    educationalLevel: 'Intermediate',
    audience: '拥有太阳能逆变器、电池或热泵，想知道本地Matter控制何时会成为真正选项的智能家居用户',
    primaryTerm: 'matter 太阳能逆变器 热泵 集成',
    targetKeywords: [
      'matter 智能家居 逆变器 热泵',
      'matter 能源管理 设备类型',
      'home assistant matter 太阳能逆变器',
      'matter 热泵 集成',
      'matter 太阳能逆变器支持 是否属实',
    ],
    leadAnswerBlock:
      '**作为一项真正的购买决策，目前还不行——自Matter 1.4起，Matter规范已为能源管理（逆变器、电池、电动车充电器、热泵）定义了设备类型，但截至2026年7月，尚未确认有任何厂商在这些类别中推出经Matter认证并已上市的产品。** Connectivity Standards Alliance自己的路线图公告将这些设备类型列为Matter 1.3之后的计划新增内容，但没有点名任何一家目前正在出货此类产品的厂商或产品。请将本文视为"该关注什么"，而非"现在能买什么"。',
    quickAnswerTop: {
      zh: {
        question: '我今天能用Matter本地控制太阳能逆变器或热泵吗？',
        answer:
          '就"经Matter认证的逆变器/热泵"这一具体场景而言，还不行。自Matter 1.4起，Matter规范已包含能源管理设备类型（逆变器、电池储能、电动车充电器、热泵），使认证设备能够通过Home Assistant在本地上报状态并接受指令，而不是通过厂商的云端应用——但根据Connectivity Standards Alliance自己的材料，截至本文撰写时（2026年7月），尚未确认这些类别中有任何已上市且经Matter认证的产品。这项能力已写入规范，但产品尚未出现在市场上。',
        bullets: [
          '自Matter 1.4起，已为逆变器、电池、电动车充电器和热泵定义设备类型',
          '截至2026年7月，尚未确认这些类别中有已上市的Matter认证产品——这是规范领先于市场的情况，不是购买指南',
          '监测仪表盘（已在阳台光伏中介绍过）是一种不同的、今天就能用的方案——本文讨论的是尚不可用的原生设备级控制',
          '在假定某个具体产品支持此功能之前，请查阅厂商的最新文档',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: 'Matter为能源硬件定义了什么', anchor: 'what-matter-defines' },
      { label: '逆变器与电池：即将到来', anchor: 'inverters-batteries' },
      { label: '热泵：即将到来', anchor: 'heat-pumps' },
      { label: '与纯监测集成的区别', anchor: 'differs-from-monitoring' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '自Matter 1.4起，已为逆变器、电池、电动车充电器和热泵定义设备类型，但截至2026年7月尚未确认这些类别中有已上市的Matter认证产品——这是一篇面向早期关注者的解读，而非当前的购买指南。' },
      { type: 'plain-terms', content: 'Matter是智能家居设备与Home Assistant这类中枢通信所使用的共通语言。Matter规范现在已经包含太阳能逆变器、家用电池、电动车充电器和热泵等能源硬件的定义，但在规范中定义一种设备类型，并不等于厂商真的据此制造并认证了产品。截至2026年年中，产品端还没有跟上。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '自Matter 1.4起，已为能源管理——逆变器、电池、电动车充电器、热泵——定义了设备类型',
          '截至本文撰写时（2026年7月），根据Connectivity Standards Alliance自己的材料，尚未确认任何厂商在这些类别中推出已上市的Matter认证产品',
          '这是规范领先于市场的情况：能力已定义，硬件尚未出现——请将本文视为面向早期关注者的解读，而非购买指南',
          '这与阳台光伏专题中已经介绍过的监测/仪表盘集成不同——那些方案读取用电数据，今天就能用，且不依赖Matter认证',
          '如果你想要现在就能用的方案，纯监测集成（CT钳表、厂商本地API）是当前的路径——参见本地能源管理概览',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'Matter为能源硬件定义了什么',
        content:
          '**Matter的能源管理设备类型涵盖设备状态（充电、放电、发电、空闲）、功率/电量读数，以及指令支持（启动/停止、模式切换）——这是厂商可以据以开发的协议层能力，但目前没有任何已确认上市的产品实现它。**',
        items: [
          '设备类型包括：电能表、太阳能逆变器、储能系统、电动车充电器和热泵——根据Connectivity Standards Alliance自己在Matter 1.3之后发布的路线图公告，这些从Matter 1.4开始被加入规范。',
          '若有设备实现了其中之一，它会像其他任何Matter设备一样通过相同的配对流程被Home Assistant自动发现并公开——但本文并未指向任何今天真正做到这一点的已确认产品。',
          '即便产品真正开始上市，最初也应预期是部分实现——设备类型的完整规范（例如接受指令，而不仅仅是上报只读状态）往往被早期厂商实现逐步采纳。请在某个具体产品真正存在后查阅其文档，而不要仅凭设备类型的名称就假定其支持完全控制。',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: '逆变器与电池：即将到来',
        content:
          '**一旦有厂商推出经Matter认证的逆变器或电池，它应能本地上报发电量、电量状态和充放电状态，并接受来自Home Assistant自动化的模式指令（例如优先自用还是优先并网售电）——但截至本文撰写时，尚未确认有此类产品已上市。**',
        items: [
          '一旦硬件存在，这最终将让类似本地能源管理概览中负荷转移示例的自动化，能够响应实时发电量和电池状态，而不只是固定的时间表。',
          '关于当前真实存在的电池产品及其目前的本地集成方式（使用厂商特定的本地API或监测，而非Matter能源设备类型），请参见阳台光伏专题的电池购买指南——那是今天就能用的方案，与本文所述内容不同。',
          '本文描述的是规范中定义的Matter设备类型能力，而非一份已确认合规产品的清单——在假定某个具体的逆变器或电池型号已上市支持此功能之前，请直接查阅厂商当前的公告。',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: '热泵：即将到来',
        content:
          '**Matter热泵设备类型一旦被某款上市产品实现，应能公开模式、目标温度和运行状态，让Home Assistant能够将其与太阳能发电联动自动化——例如在太阳能发电高峰时段让热泵更强力运行——但截至本文撰写时，没有任何已确认上市的产品实现这一点。**',
        items: [
          '一旦厂商推出相应产品，这将遵循与Matter温控器相同的模式，并扩展到热泵特有的运行模式。',
          '将其与概览文章中描述的本地能源监测结合，最终将让自动化在本地发电量高时优先运行热泵，而不是遵循固定的时段计划——这是一个"尚未到来"的场景，而非当前情况。',
          '与逆变器一样，这在规范层面是一个新兴类别，截至本文撰写时没有确认的厂商上市支持——请直接查阅热泵厂商当前的公告，而不要仅因为Matter中存在该设备类型就假定其已获支持。',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: '与纯监测集成的区别',
        content:
          '**纯监测集成（通过CT钳表或厂商本地API）读取用电或发电数据，没有原生设备控制，并且今天就能用；而这些类别的Matter设备级集成由于没有认证产品上市，尚不可用。**',
        items: [
          '阳台光伏专题现有的Home Assistant集成内容以监测/仪表盘为主——将逆变器输出读入Home Assistant。这目前有效，并且仍是实用的选择。',
          '一旦真实产品存在，Matter集成将更进一步：逆变器或热泵将成为一等本地设备，可像其他任何Matter设备一样被发现和控制，而无需厂商专属集成。',
          '鉴于截至本文撰写时没有确认已上市的Matter认证逆变器、电池或热泵产品，阳台光伏指南中的监测方案是今天唯一可行的起点——这里的Matter支持是未来的补充，而非当前的替代方案。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Matter今天支持太阳能逆变器吗？', a: '规范层面是支持的——自Matter 1.4起，Matter就包含了太阳能逆变器的设备类型——但根据Connectivity Standards Alliance自己的材料，截至2026年7月，尚未确认有任何已上市且经Matter认证的逆变器产品。请查阅你的逆变器厂商当前的文档或公告；不要仅因规范定义了它就假定支持已经存在。' },
          { q: '我能通过Home Assistant用Matter控制热泵温度吗？', a: '截至本文撰写时还不行——没有已确认上市的热泵产品实现Matter的热泵设备类型。一旦厂商真正推出此类产品，模式和目标温度将成为标准的Home Assistant实体，就像今天的Matter温控器一样。' },
          { q: '这和阳台光伏的Home Assistant集成指南是一回事吗？', a: '不是。那些指南讲的是为了监测目的把逆变器数据读入Home Assistant，而且今天就能用。本文讲的是原生Matter设备控制——这项能力已在规范中定义，但尚未出现在任何已确认上市的产品中。' },
          { q: '如果我的逆变器没有Matter认证会怎样？', a: '截至本文撰写时，市面上所有逆变器都是这种情况——没有任何一款被确认为已获得能源设备类型的Matter认证。纯监测集成（通过厂商本地API或CT钳表）是目前可用于用电追踪和基本自动化的方案；参见阳台光伏专题的集成指南。' },
          { q: '我需要换新逆变器才能获得Matter支持吗？', a: '截至本文撰写时，这个问题为时尚早——无论新旧，目前没有任何逆变器被确认获得Matter能源设备类型认证。一旦产品真正上市，你现有硬件能否获得支持将取决于厂商是否提供固件升级路径；等认证产品出现后，请直接查阅厂商的路线图。' },
          { q: 'Matter的能源支持能用于仅有电池（没有太阳能）的配置吗？', a: '在规范层面可以——储能设备类型的定义独立于逆变器设备类型，因此一旦有认证产品存在，仅电池的本地备用配置也应能在不涉及太阳能发电的情况下使用Matter进行本地状态查询和控制。截至本文撰写时，这仍和本文其余部分一样，是一个"等产品上市"的场景。' },
          { q: '自动化能把Matter能源数据与本地LLM结合使用吗？', a: '一旦逆变器、电池或热泵的状态通过Matter以标准Home Assistant实体的形式公开——这需要目前尚不存在的认证产品——本地LLM自动化（参见本地LLM智能家居指南）就应能像处理其他任何实体一样，对这些数据进行推理。这是一项未来能力，而非当前能力。' },
          { q: '在哪里可以查询某个具体产品当前的Matter认证情况？', a: '请直接查阅厂商自己的产品文档，或Connectivity Standards Alliance的认证产品列表——不要只依赖营销文案，因为"兼容Matter"这一宣传通常比针对某个具体能源设备类型的认证范围更宽泛。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[本地智能家居能源管理](/zh/smart-home/local-smart-home-energy-management-2027) — 本文所细化的概览文章',
          '[Matter 1.6解读：新变化](/zh/smart-home/matter-1-6-explained) — 更广泛的规范更新',
          '[Matter与本地控制：不依赖互联网的智能家居](/zh/smart-home/matter-local-control-guide) — 本地配对基础',
          '[阳台光伏微型逆变器推荐](/zh/balcony-solar/best-balcony-solar-microinverters) — 跨专题：今天就能用的现行逆变器硬件选择',
          '[Home Assistant + 阳台光伏，无需云端](/zh/balcony-solar/home-assistant-balcony-solar-no-cloud) — 跨专题：今天就能用的纯监测集成路径',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '太阳能逆变器与热泵的Matter支持：即将到来（2027年）',
      description: 'Matter已为太阳能逆变器和热泵定义设备类型（Matter 1.4及以上），但截至2026年7月尚无已上市的认证产品——这是即将到来的内容，而非今天就能用的功能。',
      url: 'https://www.promptquorum.com/zh/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter能源管理' }, { '@type': 'Thing', name: '太阳能逆变器' }, { '@type': 'Thing', name: '热泵' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Matter今天支持太阳能逆变器吗？', acceptedAnswer: { '@type': 'Answer', text: '规范层面自Matter 1.4起就包含了太阳能逆变器的设备类型，但截至2026年7月尚未确认有已上市且经Matter认证的逆变器产品。' } },
        { '@type': 'Question', name: '我能通过Home Assistant用Matter控制热泵温度吗？', acceptedAnswer: { '@type': 'Answer', text: '截至本文撰写时还不行——没有已确认上市的热泵产品实现Matter的热泵设备类型。' } },
        { '@type': 'Question', name: '这和阳台光伏的Home Assistant集成指南是一回事吗？', acceptedAnswer: { '@type': 'Answer', text: '不是。那些指南讲的是为监测目的读取逆变器数据，且今天就能用。本文讲的是尚未出现在已上市产品中的原生Matter设备控制。' } },
        { '@type': 'Question', name: '如果我的逆变器没有Matter认证会怎样？', acceptedAnswer: { '@type': 'Answer', text: '截至本文撰写时，市面上所有逆变器都是如此。通过厂商本地API或CT钳表的纯监测集成是目前可用的方案。' } },
        { '@type': 'Question', name: '在哪里可以查询某个具体产品当前的Matter认证情况？', acceptedAnswer: { '@type': 'Answer', text: '请直接查阅厂商自己的产品文档，或Connectivity Standards Alliance的认证产品列表。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Matter para inversores solares y bombas de calor: lo que viene (2027)',
    seoTitle: 'Matter para inversores + bombas de calor: aún no (2027)',
    intro:
      'La especificación Matter ha definido tipos de dispositivo para hardware de gestión energética — inversores solares, almacenamiento por batería, cargadores de VE y bombas de calor — desde Matter 1.4+ (según el propio anuncio de hoja de ruta de la Connectivity Standards Alliance), pero al momento de escribir esto no se ha confirmado ningún producto de inversor, batería o bomba de calor certificado Matter y comercializado por ningún fabricante. Esta es una explicación para adoptantes tempranos: lo que la especificación define hoy, y qué vigilar antes de que se convierta en una opción de compra real, no una guía de hardware que puedas usar ahora mismo. También explica en qué se diferencia de las integraciones de monitoreo y panel ya cubiertas para el solar de balcón, que sí funcionan hoy.',
    metaDescription:
      'Matter define tipos de dispositivo para inversores solares y bombas de calor (Matter 1.4+), pero no existen productos certificados comercializados a julio de 2026 — lo que viene, no lo que funciona hoy.',
    twitterDescription:
      'Matter tiene una especificación para inversores solares y bombas de calor — pero aún ningún producto certificado comercializado. Lo que define la especificación, y qué vigilar.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de hogar inteligente con inversor solar, batería o bomba de calor que quieren saber cuándo el control local Matter será una opción real',
    primaryTerm: 'matter inversor solar bomba de calor integracion',
    targetKeywords: [
      'matter hogar inteligente inversor bomba calor',
      'matter tipos dispositivo gestion energia',
      'home assistant matter inversor solar',
      'matter integracion bomba de calor',
      'soporte matter inversor solar es real',
    ],
    leadAnswerBlock:
      '**Todavía no, como decisión de compra real — la especificación Matter ha definido tipos de dispositivo para gestión energética (inversores, baterías, cargadores de VE, bombas de calor) desde Matter 1.4+, pero a julio de 2026 no se ha confirmado ningún producto certificado Matter y comercializado en estas categorías por ningún fabricante.** El propio anuncio de hoja de ruta de la Connectivity Standards Alliance nombró estos tipos de dispositivo como adiciones planificadas tras Matter 1.3, sin nombrar un solo fabricante o producto que los comercialice hoy. Trata este artículo como "qué vigilar", no "qué puedes comprar".',
    quickAnswerTop: {
      es: {
        question: '¿Puedo controlar mi inversor solar o bomba de calor localmente con Matter hoy?',
        answer:
          'Todavía no, para el escenario específico de "inversor/bomba de calor certificado Matter". La especificación Matter ha incluido tipos de dispositivo de gestión energética (inversores, almacenamiento por batería, cargadores de VE, bombas de calor) desde Matter 1.4+, permitiendo que un dispositivo certificado reporte estado y acepte comandos localmente a través de Home Assistant en lugar de una app en la nube del fabricante — pero no se confirmó ningún producto certificado Matter y comercializado en estas categorías al momento de escribir esto (julio de 2026), según los propios materiales de la Connectivity Standards Alliance. La capacidad existe en la especificación; los productos aún no existen en el mercado.',
        bullets: [
          'Matter ha definido tipos de dispositivo para inversores, baterías, cargadores de VE y bombas de calor desde Matter 1.4+',
          'Ningún producto certificado Matter y comercializado en estas categorías fue confirmado a julio de 2026 — la especificación va por delante del mercado, esto no es una guía de compra',
          'Los paneles de monitoreo (ya cubiertos para el solar de balcón) son un enfoque diferente que funciona hoy — este artículo trata del control nativo a nivel de dispositivo, que aún no está disponible',
          'Verifica la documentación actual del fabricante antes de suponer que un producto dado ofrece este soporte',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué define Matter para el hardware energético', anchor: 'what-matter-defines' },
      { label: 'Inversores y baterías: lo que viene', anchor: 'inverters-batteries' },
      { label: 'Bombas de calor: lo que viene', anchor: 'heat-pumps' },
      { label: 'Diferencia con las integraciones de solo monitoreo', anchor: 'differs-from-monitoring' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter ha definido tipos de dispositivo para inversores, baterías, cargadores de VE y bombas de calor desde Matter 1.4+, pero ningún producto certificado Matter y comercializado en estas categorías fue confirmado a julio de 2026 — esta es una explicación para adoptantes tempranos, no una guía de compra actual.' },
      { type: 'plain-terms', content: 'Matter es un lenguaje común que los dispositivos inteligentes usan para hablar con un hub como Home Assistant. La especificación Matter ahora incluye definiciones para hardware energético — inversores solares, baterías domésticas, cargadores de VE y bombas de calor —, pero definir un tipo de dispositivo en la especificación no es lo mismo que un fabricante realmente construyendo y certificando un producto conforme a ella. A mediados de 2026, el lado del producto todavía no ha alcanzado esto.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Matter ha definido tipos de dispositivo para gestión energética — inversores, baterías, cargadores de VE, bombas de calor — desde Matter 1.4+',
          'Al momento de escribir esto (julio de 2026), no se confirmó ningún producto certificado Matter y comercializado en estas categorías por ningún fabricante, según los propios materiales de la Connectivity Standards Alliance',
          'Esta es una situación donde la especificación va por delante del mercado: la capacidad está definida, el hardware aún no está aquí — trata esto como una explicación para adoptantes tempranos, no una guía de compra',
          'Esto es distinto de las integraciones de monitoreo/panel ya cubiertas en el clúster de solar de balcón — esas leen datos de uso, funcionan hoy, y no dependen de la certificación Matter',
          'Si quieres algo que funcione ahora mismo, la integración de solo monitoreo (pinza amperométrica, API local del fabricante) es el camino actual — ver el resumen sobre gestión local de energía',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'Qué define Matter para el hardware energético',
        content:
          '**Los tipos de dispositivo de gestión energética de Matter cubren el estado del dispositivo (cargando, descargando, generando, inactivo), lecturas de potencia/energía, y soporte de comandos (inicio/parada, cambios de modo) — una capacidad a nivel de protocolo contra la que los fabricantes pueden desarrollar, pero que ningún producto confirmado comercializado implementa actualmente.**',
        items: [
          'Los tipos de dispositivo incluyen: medidores de energía eléctrica, inversores solares, sistemas de almacenamiento por batería, cargadores de VE y bombas de calor — añadidos a la especificación a partir de Matter 1.4, según el propio anuncio de hoja de ruta de la Connectivity Standards Alliance tras Matter 1.3.',
          'Un dispositivo que sí implementara uno de estos lo anunciaría y sería detectado automáticamente por Home Assistant, el mismo flujo de emparejamiento que cualquier otro dispositivo Matter — pero este artículo no señala ningún producto confirmado que haga esto hoy.',
          'Incluso cuando los productos se comercialicen, espera implementaciones parciales al principio — la especificación completa de un tipo de dispositivo (por ejemplo, aceptar comandos, no solo reportar estado de solo lectura) a menudo es adoptada de forma incremental por las primeras implementaciones de los fabricantes. Verifica la documentación de un producto específico una vez que realmente exista, en lugar de suponer control completo solo por el nombre del tipo de dispositivo.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'Inversores y baterías: lo que viene',
        content:
          '**Una vez que un fabricante comercialice un inversor o batería certificado Matter, este podría reportar generación, estado de carga y estado de carga/descarga localmente, y aceptar comandos de modo (por ejemplo, priorizar autoconsumo vs. exportación a la red) desde automatizaciones de Home Assistant — pero al momento de escribir esto, no se confirmó ningún producto comercializado de este tipo.**',
        items: [
          'Esto eventualmente permitiría que una automatización como los ejemplos de desplazamiento de carga en el resumen de gestión local de energía reaccione a la generación y el estado de la batería en tiempo real, no solo a un horario fijo — una vez que el hardware exista.',
          'Para productos de batería de generación actual reales y sus opciones de integración local hoy (que usan API locales específicas del fabricante o monitoreo, no tipos de dispositivo energético Matter), ver las guías de compra de baterías del clúster de solar de balcón — ese es el camino que funciona hoy, separado de lo que describe este artículo.',
          'Este artículo describe la capacidad de tipo de dispositivo Matter tal como se define en la especificación, no una lista confirmada de productos conformes — verifica los anuncios actuales de un fabricante directamente antes de suponer que un modelo específico de inversor o batería ha comercializado este soporte.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'Bombas de calor: lo que viene',
        content:
          '**Un tipo de dispositivo bomba de calor Matter, una vez implementado por un producto comercializado, expondría modo, temperatura objetivo y estado de funcionamiento, permitiendo a Home Assistant automatizarlo junto con la generación solar — por ejemplo, haciendo funcionar la bomba de calor con más intensidad durante horas de alta generación solar —, pero ningún producto comercializado confirmado implementa esto al momento de escribir esto.**',
        items: [
          'Esto seguiría el mismo patrón que un termostato Matter, extendido a los modos de funcionamiento específicos de una bomba de calor, una vez que un fabricante la comercialice.',
          'Combinado con el monitoreo energético local descrito en el artículo de resumen, esto eventualmente permitiría que una automatización priorice el funcionamiento de la bomba de calor cuando la generación local sea alta, en lugar de un horario fijo — un escenario "aún por venir", no uno actual.',
          'Como con los inversores, esta es una categoría emergente en el lado de la especificación sin soporte confirmado de fabricante comercializado al momento de escribir esto — verifica directamente los anuncios actuales de los fabricantes de bombas de calor en lugar de suponer soporte porque el tipo de dispositivo existe en Matter.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'Diferencia con las integraciones de solo monitoreo',
        content:
          '**La integración de solo monitoreo lee datos de uso o generación (vía una pinza amperométrica o una API local del proveedor) sin control nativo del dispositivo, y funciona hoy; la integración Matter a nivel de dispositivo para estas categorías aún no, ya que no se comercializan productos certificados.**',
        items: [
          'El contenido de integración existente de Home Assistant del clúster de solar de balcón está centrado en monitoreo/panel — leer la salida del inversor en Home Assistant. Eso funciona ahora y sigue siendo la opción práctica.',
          'La integración Matter, una vez que existan productos reales, sería un paso más allá: el inversor o la bomba de calor se convertiría en un dispositivo local de primera clase, detectable y controlable de la misma manera que cualquier otro dispositivo Matter, sin una integración específica del proveedor.',
          'Dado que no se confirmó ningún producto de inversor, batería o bomba de calor certificado Matter comercializado al momento de escribir esto, el enfoque de monitoreo en las guías de solar de balcón es el único punto de partida funcional hoy — el soporte Matter aquí es una adición futura, no una alternativa actual.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Matter soporta inversores solares hoy?', a: 'La especificación sí lo hace — Matter ha incluido un tipo de dispositivo para inversores solares desde Matter 1.4+ —, pero no se confirmó ningún producto de inversor certificado Matter y comercializado a julio de 2026, según los propios materiales de la Connectivity Standards Alliance. Verifica la documentación o los anuncios actuales del fabricante de tu inversor; no supongas que el soporte existe solo porque la especificación lo define.' },
          { q: '¿Puedo controlar la temperatura de mi bomba de calor a través de Home Assistant vía Matter?', a: 'Todavía no, al momento de escribir esto — ningún producto de bomba de calor comercializado confirmado implementa el tipo de dispositivo bomba de calor de Matter. Una vez que un fabricante sí comercialice uno, el modo y la temperatura objetivo se convertirían en entidades estándar de Home Assistant de la misma forma que lo hace hoy un termostato Matter.' },
          { q: '¿Es esto lo mismo que las guías de integración Home Assistant para solar de balcón?', a: 'No. Esas guías cubren la lectura de datos del inversor en Home Assistant para monitoreo, y funcionan hoy. Este artículo cubre el control nativo de dispositivo Matter, una capacidad definida en la especificación pero aún no disponible en ningún producto comercializado confirmado.' },
          { q: '¿Qué pasa si mi inversor no está certificado Matter?', a: 'Eso describe a todos los inversores del mercado al momento de escribir esto — ninguno está confirmado como certificado Matter para tipos de dispositivo energético. La integración de solo monitoreo (vía una API local del fabricante o una pinza amperométrica) es la opción funcional actual para seguimiento de uso y automatización básica; ver las guías de integración del clúster de solar de balcón.' },
          { q: '¿Necesito un inversor nuevo para obtener soporte Matter?', a: 'La pregunta es prematura al momento de escribir esto — ningún inversor, nuevo o existente, tiene confirmada aún la certificación de tipo de dispositivo energético Matter. Una vez que se comercialicen productos, que tu hardware existente obtenga soporte dependerá de que tu fabricante específico ofrezca una vía de actualización de firmware; verifica su hoja de ruta directamente una vez que existan productos certificados.' },
          { q: '¿El soporte energético de Matter funciona con configuraciones solo de batería (sin solar)?', a: 'En la especificación, sí — el tipo de dispositivo de almacenamiento por batería se define independientemente del tipo de dispositivo inversor, por lo que una configuración de respaldo solo de batería podría usar Matter para estado y control locales sin que la generación solar esté involucrada, una vez que exista un producto certificado. Al momento de escribir esto, eso sigue siendo un escenario de "cuando se comercialice" como el resto de este artículo.' },
          { q: '¿Puede una automatización combinar datos energéticos Matter con un LLM local?', a: 'Una vez que el estado del inversor, batería o bomba de calor se exponga como entidades estándar de Home Assistant vía Matter — lo que requiere un producto certificado que aún no existe —, una automatización con LLM local (ver la guía de LLM local para el hogar inteligente) podría razonar sobre esos datos de la misma forma que lo hace con cualquier otra entidad. Esta es una capacidad futura, no actual.' },
          { q: '¿Dónde verifico la certificación Matter actual de un producto específico?', a: 'Consulta directamente la documentación propia del fabricante o el listado de productos certificados de la Connectivity Standards Alliance — no te fíes solo del texto de marketing, ya que la marca "compatible con Matter" suele ser más amplia que la certificación para un tipo de dispositivo energético específico.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Gestión local de energía en el hogar inteligente](/es/smart-home/local-smart-home-energy-management-2027) — el resumen en el que se enfoca este artículo',
          '[Matter 1.6 explicado: novedades](/es/smart-home/matter-1-6-explained) — la actualización de especificación más amplia',
          '[Matter y control local: un hogar inteligente independiente de internet](/es/smart-home/matter-local-control-guide) — fundamentos de emparejamiento local',
          '[Mejores microinversores solares de balcón](/es/balcony-solar/best-balcony-solar-microinverters) — entre clústers: elecciones de hardware de inversor actual que funcionan hoy',
          '[Home Assistant + solar de balcón, sin nube](/es/balcony-solar/home-assistant-balcony-solar-no-cloud) — entre clústers: el camino de integración de solo monitoreo que funciona hoy',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter para inversores solares y bombas de calor: lo que viene (2027)',
      description: 'Matter define tipos de dispositivo para inversores solares y bombas de calor (Matter 1.4+), pero no existen productos certificados comercializados a julio de 2026 — lo que viene, no lo que funciona hoy.',
      url: 'https://www.promptquorum.com/es/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Gestión energética Matter' }, { '@type': 'Thing', name: 'Inversor solar' }, { '@type': 'Thing', name: 'Bomba de calor' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Matter soporta inversores solares hoy?', acceptedAnswer: { '@type': 'Answer', text: 'La especificación incluye un tipo de dispositivo para inversores solares desde Matter 1.4+, pero no se confirmó ningún producto certificado Matter y comercializado a julio de 2026.' } },
        { '@type': 'Question', name: '¿Puedo controlar la temperatura de mi bomba de calor a través de Home Assistant vía Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Todavía no al momento de escribir esto — ningún producto de bomba de calor comercializado confirmado implementa el tipo de dispositivo bomba de calor de Matter.' } },
        { '@type': 'Question', name: '¿Es esto lo mismo que las guías de integración Home Assistant para solar de balcón?', acceptedAnswer: { '@type': 'Answer', text: 'No. Esas guías cubren la lectura de datos de inversor para monitoreo y funcionan hoy. Este artículo cubre control nativo de dispositivo Matter, aún no disponible.' } },
        { '@type': 'Question', name: '¿Qué pasa si mi inversor no está certificado Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Eso describe a todos los inversores del mercado al momento de escribir esto. La integración de solo monitoreo vía API local del fabricante o pinza amperométrica es la opción funcional actual.' } },
        { '@type': 'Question', name: '¿Dónde verifico la certificación Matter actual de un producto específico?', acceptedAnswer: { '@type': 'Answer', text: 'Consulta directamente la documentación propia del fabricante o el listado de productos certificados de la Connectivity Standards Alliance.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'Matter para inversores solares e bombas de calor: o que está por vir (2027)',
    seoTitle: 'Matter para inversores + bombas de calor: ainda não (2027)',
    intro:
      'A especificação Matter define tipos de dispositivo para hardware de gestão energética — inversores solares, armazenamento por bateria, carregadores de VE e bombas de calor — desde o Matter 1.4+ (segundo o próprio anúncio de roadmap da Connectivity Standards Alliance), mas no momento em que este texto foi escrito, nenhum produto de inversor, bateria ou bomba de calor certificado Matter e à venda foi confirmado por nenhum fabricante. Esta é uma explicação para early adopters: o que a especificação define hoje, e o que observar antes que isso se torne uma opção de compra real, não um guia de hardware que você pode usar agora. Também explica em que isso difere das integrações de monitoramento e painel já cobertas para energia solar de varanda, que funcionam hoje.',
    metaDescription:
      'O Matter define tipos de dispositivo para inversores solares e bombas de calor (Matter 1.4+), mas não há produtos certificados à venda em julho de 2026 — o que está por vir, não o que funciona hoje.',
    twitterDescription:
      'O Matter tem uma especificação para inversores solares e bombas de calor — mas ainda nenhum produto certificado à venda. O que a especificação define, e o que observar.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa inteligente com inversor solar, bateria ou bomba de calor que querem saber quando o controle local Matter será uma opção real',
    primaryTerm: 'matter inversor solar bomba de calor integracao',
    targetKeywords: [
      'matter casa inteligente inversor bomba de calor',
      'matter tipos dispositivo gestao energia',
      'home assistant matter inversor solar',
      'matter integracao bomba de calor',
      'suporte matter inversor solar e real',
    ],
    leadAnswerBlock:
      '**Ainda não, como decisão de compra real — a especificação Matter define tipos de dispositivo para gestão energética (inversores, baterias, carregadores de VE, bombas de calor) desde o Matter 1.4+, mas em julho de 2026 nenhum produto certificado Matter e à venda nessas categorias foi confirmado por nenhum fabricante.** O próprio anúncio de roadmap da Connectivity Standards Alliance citou esses tipos de dispositivo como adições planejadas após o Matter 1.3, sem nomear um único fabricante ou produto que os comercialize hoje. Trate este artigo como "o que observar", não "o que você pode comprar".',
    quickAnswerTop: {
      pt: {
        question: 'Posso controlar meu inversor solar ou bomba de calor localmente com Matter hoje?',
        answer:
          'Ainda não, para o cenário específico de "inversor/bomba de calor certificado Matter". A especificação Matter inclui tipos de dispositivo de gestão energética (inversores, armazenamento por bateria, carregadores de VE, bombas de calor) desde o Matter 1.4+, permitindo que um dispositivo certificado reporte status e aceite comandos localmente via Home Assistant em vez de um app na nuvem do fabricante — mas nenhum produto certificado Matter e à venda nessas categorias foi confirmado no momento em que este texto foi escrito (julho de 2026), segundo os próprios materiais da Connectivity Standards Alliance. A capacidade existe na especificação; os produtos ainda não existem no mercado.',
        bullets: [
          'O Matter define tipos de dispositivo para inversores, baterias, carregadores de VE e bombas de calor desde o Matter 1.4+',
          'Nenhum produto certificado Matter e à venda nessas categorias foi confirmado em julho de 2026 — a especificação está à frente do mercado, isso não é um guia de compra',
          'Painéis de monitoramento (já cobertos para energia solar de varanda) são uma abordagem diferente que funciona hoje — este artigo trata do controle nativo em nível de dispositivo, que ainda não está disponível',
          'Verifique a documentação atual do fabricante antes de supor que um produto específico oferece esse suporte',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que o Matter define para o hardware energético', anchor: 'what-matter-defines' },
      { label: 'Inversores e baterias: o que está por vir', anchor: 'inverters-batteries' },
      { label: 'Bombas de calor: o que está por vir', anchor: 'heat-pumps' },
      { label: 'Diferença para integrações apenas de monitoramento', anchor: 'differs-from-monitoring' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O Matter define tipos de dispositivo para inversores, baterias, carregadores de VE e bombas de calor desde o Matter 1.4+, mas nenhum produto certificado Matter e à venda nessas categorias foi confirmado em julho de 2026 — esta é uma explicação para early adopters, não um guia de compra atual.' },
      { type: 'plain-terms', content: 'O Matter é uma linguagem comum que dispositivos inteligentes usam para conversar com um hub como o Home Assistant. A especificação Matter agora inclui definições para hardware energético — inversores solares, baterias domésticas, carregadores de VE e bombas de calor —, mas definir um tipo de dispositivo na especificação não é o mesmo que um fabricante realmente construir e certificar um produto de acordo com ela. Em meados de 2026, o lado do produto ainda não alcançou isso.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Matter define tipos de dispositivo para gestão energética — inversores, baterias, carregadores de VE, bombas de calor — desde o Matter 1.4+',
          'No momento em que este texto foi escrito (julho de 2026), nenhum produto certificado Matter e à venda nessas categorias foi confirmado por nenhum fabricante, segundo os próprios materiais da Connectivity Standards Alliance',
          'Esta é uma situação em que a especificação está à frente do mercado: a capacidade está definida, o hardware ainda não chegou — trate isso como uma explicação para early adopters, não um guia de compra',
          'Isso é diferente das integrações de monitoramento/painel já cobertas no cluster de energia solar de varanda — essas leem dados de uso, funcionam hoje, e não dependem de certificação Matter',
          'Se você quer algo que funcione agora, a integração apenas de monitoramento (alicate amperímetro, API local do fabricante) é o caminho atual — veja a visão geral sobre gestão local de energia',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'O que o Matter define para o hardware energético',
        content:
          '**Os tipos de dispositivo de gestão energética do Matter cobrem estado do dispositivo (carregando, descarregando, gerando, ocioso), leituras de potência/energia, e suporte a comandos (iniciar/parar, mudanças de modo) — uma capacidade em nível de protocolo contra a qual fabricantes podem desenvolver, mas que nenhum produto confirmado à venda implementa atualmente.**',
        items: [
          'Os tipos de dispositivo incluem: medidores de energia elétrica, inversores solares, sistemas de armazenamento por bateria, carregadores de VE e bombas de calor — adicionados à especificação a partir do Matter 1.4, segundo o próprio anúncio de roadmap da Connectivity Standards Alliance após o Matter 1.3.',
          'Um dispositivo que implementasse um desses o anunciaria e seria descoberto automaticamente pelo Home Assistant, o mesmo fluxo de pareamento de qualquer outro dispositivo Matter — mas este artigo não aponta para nenhum produto confirmado que faça isso hoje.',
          'Mesmo quando produtos forem comercializados, espere implementações parciais no início — a especificação completa de um tipo de dispositivo (por exemplo, aceitar comandos, não só reportar status somente leitura) muitas vezes é adotada de forma incremental pelas primeiras implementações dos fabricantes. Verifique a documentação de um produto específico assim que ele realmente existir, em vez de supor controle total apenas pelo nome do tipo de dispositivo.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'Inversores e baterias: o que está por vir',
        content:
          '**Assim que um fabricante lançar um inversor ou bateria certificado Matter, ele poderia reportar geração, estado de carga e status de carga/descarga localmente, e aceitar comandos de modo (por exemplo, priorizar autoconsumo vs. exportação para a rede) de automações do Home Assistant — mas no momento em que este texto foi escrito, nenhum produto à venda desse tipo foi confirmado.**',
        items: [
          'Isso eventualmente permitiria que uma automação como os exemplos de deslocamento de carga na visão geral de gestão local de energia reaja à geração e ao estado da bateria em tempo real, não apenas a um horário fixo — assim que o hardware existir.',
          'Para produtos de bateria de geração atual reais e suas opções de integração local hoje (que usam APIs locais específicas do fabricante ou monitoramento, não tipos de dispositivo energético Matter), veja os guias de compra de bateria do cluster de energia solar de varanda — esse é o caminho que funciona hoje, separado do que este artigo descreve.',
          'Este artigo descreve a capacidade de tipo de dispositivo Matter conforme definida na especificação, não uma lista confirmada de produtos conformes — verifique os anúncios atuais de um fabricante diretamente antes de supor que um modelo específico de inversor ou bateria já lançou esse suporte.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'Bombas de calor: o que está por vir',
        content:
          '**Um tipo de dispositivo bomba de calor Matter, uma vez implementado por um produto à venda, exporia modo, temperatura alvo e status de funcionamento, permitindo que o Home Assistant a automatize junto com a geração solar — por exemplo, fazendo a bomba de calor funcionar mais forte durante horários de alta geração solar —, mas nenhum produto à venda confirmado implementa isso no momento em que este texto foi escrito.**',
        items: [
          'Isso seguiria o mesmo padrão de um termostato Matter, estendido aos modos de operação específicos de uma bomba de calor, assim que um fabricante a lançar.',
          'Combinado com o monitoramento energético local descrito no artigo de visão geral, isso eventualmente permitiria que uma automação priorize o funcionamento da bomba de calor quando a geração local estiver alta, em vez de um horário fixo — um cenário "ainda por vir", não um atual.',
          'Assim como com inversores, esta é uma categoria emergente do lado da especificação sem suporte confirmado de fabricante à venda no momento em que este texto foi escrito — verifique diretamente os anúncios atuais dos fabricantes de bombas de calor em vez de supor suporte só porque o tipo de dispositivo existe no Matter.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'Diferença para integrações apenas de monitoramento',
        content:
          '**A integração apenas de monitoramento lê dados de uso ou geração (via um alicate amperímetro ou uma API local do fornecedor) sem controle nativo do dispositivo, e funciona hoje; a integração Matter em nível de dispositivo para essas categorias ainda não, já que nenhum produto certificado é vendido.**',
        items: [
          'O conteúdo de integração existente do Home Assistant no cluster de energia solar de varanda é focado em monitoramento/painel — ler a saída do inversor no Home Assistant. Isso funciona agora e continua sendo a opção prática.',
          'A integração Matter, quando produtos reais existirem, seria um passo além: o inversor ou a bomba de calor se tornaria um dispositivo local de primeira classe, detectável e controlável da mesma forma que qualquer outro dispositivo Matter, sem uma integração específica do fornecedor.',
          'Dado que nenhum produto de inversor, bateria ou bomba de calor certificado Matter foi confirmado como à venda no momento em que este texto foi escrito, a abordagem de monitoramento nos guias de energia solar de varanda é o único ponto de partida funcional hoje — o suporte Matter aqui é uma adição futura, não uma alternativa atual.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O Matter suporta inversores solares hoje?', a: 'A especificação sim — o Matter inclui um tipo de dispositivo para inversores solares desde o Matter 1.4+ —, mas nenhum produto de inversor certificado Matter e à venda foi confirmado em julho de 2026, segundo os próprios materiais da Connectivity Standards Alliance. Verifique a documentação ou os anúncios atuais do fabricante do seu inversor; não suponha que o suporte existe só porque a especificação o define.' },
          { q: 'Posso controlar a temperatura da minha bomba de calor pelo Home Assistant via Matter?', a: 'Ainda não, no momento em que este texto foi escrito — nenhum produto de bomba de calor à venda confirmado implementa o tipo de dispositivo bomba de calor do Matter. Assim que um fabricante lançar um, modo e temperatura alvo se tornariam entidades padrão do Home Assistant, da mesma forma que um termostato Matter já faz hoje.' },
          { q: 'Isso é o mesmo que os guias de integração Home Assistant para energia solar de varanda?', a: 'Não. Esses guias cobrem a leitura de dados do inversor no Home Assistant para monitoramento, e funcionam hoje. Este artigo cobre o controle nativo de dispositivo Matter, uma capacidade definida na especificação mas ainda não disponível em nenhum produto à venda confirmado.' },
          { q: 'O que acontece se meu inversor não for certificado Matter?', a: 'Isso descreve todo inversor no mercado no momento em que este texto foi escrito — nenhum é confirmado como certificado Matter para tipos de dispositivo energético. A integração apenas de monitoramento (via uma API local do fabricante ou um alicate amperímetro) é a opção funcional atual para rastreamento de uso e automação básica; veja os guias de integração do cluster de energia solar de varanda.' },
          { q: 'Preciso de um inversor novo para obter suporte Matter?', a: 'A pergunta é prematura no momento em que este texto foi escrito — nenhum inversor, novo ou existente, tem certificação confirmada de tipo de dispositivo energético Matter ainda. Assim que produtos forem lançados, se seu hardware existente ganhará suporte dependerá do seu fabricante específico oferecer um caminho de atualização de firmware; verifique o roadmap dele diretamente assim que produtos certificados existirem.' },
          { q: 'O suporte energético do Matter funciona com configurações apenas de bateria (sem solar)?', a: 'Na especificação, sim — o tipo de dispositivo de armazenamento por bateria é definido independentemente do tipo de dispositivo inversor, então uma configuração de backup apenas de bateria poderia usar Matter para status e controle locais sem geração solar envolvida, assim que um produto certificado existir. No momento em que este texto foi escrito, isso ainda é um cenário de "quando for lançado" como o resto deste artigo.' },
          { q: 'Uma automação pode combinar dados energéticos Matter com um LLM local?', a: 'Assim que o status do inversor, bateria ou bomba de calor for exposto como entidades padrão do Home Assistant via Matter — o que requer um produto certificado que ainda não existe —, uma automação com LLM local (veja o guia de LLM local para casa inteligente) poderia raciocinar sobre esses dados da mesma forma que faz para qualquer outra entidade. Essa é uma capacidade futura, não atual.' },
          { q: 'Onde verifico a certificação Matter atual de um produto específico?', a: 'Verifique diretamente a documentação própria do fabricante ou a lista de produtos certificados da Connectivity Standards Alliance — não confie apenas no texto de marketing, já que a marca "compatível com Matter" costuma ser mais ampla que a certificação para um tipo de dispositivo energético específico.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Gestão local de energia na casa inteligente](/pt/smart-home/local-smart-home-energy-management-2027) — a visão geral que este artigo detalha',
          '[Matter 1.6 explicado: novidades](/pt/smart-home/matter-1-6-explained) — a atualização de especificação mais ampla',
          '[Matter e controle local: uma casa inteligente independente de internet](/pt/smart-home/matter-local-control-guide) — fundamentos de pareamento local',
          '[Melhores microinversores solares de varanda](/pt/balcony-solar/best-balcony-solar-microinverters) — entre clusters: escolhas de hardware de inversor atual que funcionam hoje',
          '[Home Assistant + energia solar de varanda, sem nuvem](/pt/balcony-solar/home-assistant-balcony-solar-no-cloud) — entre clusters: o caminho de integração apenas de monitoramento que funciona hoje',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter para inversores solares e bombas de calor: o que está por vir (2027)',
      description: 'O Matter define tipos de dispositivo para inversores solares e bombas de calor (Matter 1.4+), mas não há produtos certificados à venda em julho de 2026 — o que está por vir, não o que funciona hoje.',
      url: 'https://www.promptquorum.com/pt/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Gestão energética Matter' }, { '@type': 'Thing', name: 'Inversor solar' }, { '@type': 'Thing', name: 'Bomba de calor' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O Matter suporta inversores solares hoje?', acceptedAnswer: { '@type': 'Answer', text: 'A especificação inclui um tipo de dispositivo para inversores solares desde o Matter 1.4+, mas nenhum produto certificado Matter e à venda foi confirmado em julho de 2026.' } },
        { '@type': 'Question', name: 'Posso controlar a temperatura da minha bomba de calor pelo Home Assistant via Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Ainda não no momento em que este texto foi escrito — nenhum produto de bomba de calor à venda confirmado implementa o tipo de dispositivo bomba de calor do Matter.' } },
        { '@type': 'Question', name: 'Isso é o mesmo que os guias de integração Home Assistant para energia solar de varanda?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Esses guias cobrem a leitura de dados do inversor para monitoramento e funcionam hoje. Este artigo cobre controle nativo de dispositivo Matter, ainda não disponível.' } },
        { '@type': 'Question', name: 'O que acontece se meu inversor não for certificado Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Isso descreve todo inversor no mercado no momento em que este texto foi escrito. A integração apenas de monitoramento via API local do fabricante ou alicate amperímetro é a opção funcional atual.' } },
        { '@type': 'Question', name: 'Onde verifico a certificação Matter atual de um produto específico?', acceptedAnswer: { '@type': 'Answer', text: 'Verifique diretamente a documentação própria do fabricante ou a lista de produtos certificados da Connectivity Standards Alliance.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: 'معيار Matter للعاكسات الشمسية ومضخات الحرارة: ما القادم (⁨2027⁩)',
    seoTitle: 'Matter للعاكسات + مضخات الحرارة: ليس بعد (⁨2027⁩)',
    intro:
      'حدّدت مواصفة Matter أنواع أجهزة لعتاد إدارة الطاقة — العاكسات الشمسية وتخزين البطارية وشواحن السيارات الكهربائية ومضخات الحرارة — منذ Matter 1.4 وما بعدها (وفق إعلان خارطة الطريق الخاص بـ Connectivity Standards Alliance نفسها)، لكن حتى وقت كتابة هذا النص، لم يُؤكَّد أي منتج عاكس أو بطارية أو مضخة حرارة معتمد بمعيار Matter ومطروح في السوق من أي شركة مصنّعة. هذا شرح لأصحاب السبق: ما تحدده المواصفة اليوم، وما يجب مراقبته قبل أن يصبح خيار شراء حقيقي، وليس دليلًا لعتاد يمكنك استخدامه الآن. كما يوضّح كيف يختلف هذا عن تكاملات المراقبة واللوحة التي سبق تناولها للطاقة الشمسية للشرفة، والتي تعمل بالفعل اليوم.',
    metaDescription:
      'يحدد Matter أنواع أجهزة للعاكسات الشمسية ومضخات الحرارة (Matter 1.4 وما بعدها)، لكن لا توجد منتجات معتمدة مطروحة بعد حتى يوليو 2026 — ما هو قادم، وليس ما يعمل اليوم.',
    twitterDescription:
      'لدى Matter مواصفة للعاكسات الشمسية ومضخات الحرارة — لكن لا توجد بعد منتجات معتمدة مطروحة. ما تحدده المواصفة، وما يجب مراقبته.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب المنازل الذكية الذين لديهم عاكس شمسي أو بطارية أو مضخة حرارة ويريدون معرفة متى يصبح التحكم المحلي عبر Matter خيارًا حقيقيًا',
    primaryTerm: 'matter solar inverter heat pump integration',
    targetKeywords: [
      'matter منزل ذكي عاكس مضخة حرارة',
      'matter أنواع أجهزة إدارة الطاقة',
      'home assistant matter عاكس شمسي',
      'matter دمج مضخة حرارة',
      'هل دعم matter للعاكس الشمسي حقيقي',
    ],
    leadAnswerBlock:
      '**ليس بعد، كقرار شراء حقيقي — حدّدت مواصفة Matter أنواع أجهزة لإدارة الطاقة (عاكسات، بطاريات، شواحن سيارات كهربائية، مضخات حرارة) منذ Matter 1.4 وما بعدها، لكن حتى يوليو 2026 لم يُؤكَّد أي منتج معتمد بمعيار Matter ومطروح في هذه الفئات من أي شركة مصنّعة.** سمّى إعلان خارطة الطريق الخاص بـ Connectivity Standards Alliance نفسها أنواع الأجهزة هذه كإضافات مخطط لها بعد Matter 1.3، دون تسمية أي شركة مصنّعة أو منتج واحد يطرحها اليوم. تعامل مع هذا المقال باعتباره "ما يجب مراقبته"، وليس "ما يمكنك شراؤه".',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني التحكم في عاكسي الشمسي أو مضخة الحرارة محليًا بمعيار Matter اليوم؟',
        answer:
          'ليس بعد، بالنسبة لسيناريو "العاكس/مضخة الحرارة المعتمدة بمعيار Matter" تحديدًا. تشمل مواصفة Matter أنواع أجهزة إدارة الطاقة (عاكسات، تخزين بطارية، شواحن سيارات كهربائية، مضخات حرارة) منذ Matter 1.4 وما بعدها، مما يتيح لجهاز معتمد رفع تقارير الحالة محليًا عبر Home Assistant وقبول الأوامر بدلًا من تطبيق سحابي للشركة المصنّعة — لكن لم يُؤكَّد أي منتج معتمد بمعيار Matter ومطروح في هذه الفئات حتى وقت كتابة هذا النص (يوليو 2026)، وفقًا لمواد Connectivity Standards Alliance نفسها. القدرة موجودة في المواصفة؛ المنتجات لم توجد بعد في السوق.',
        bullets: [
          'حدّد Matter أنواع أجهزة للعاكسات والبطاريات وشواحن السيارات الكهربائية ومضخات الحرارة منذ Matter 1.4 وما بعدها',
          'لم يُؤكَّد أي منتج معتمد بمعيار Matter ومطروح في هذه الفئات حتى يوليو 2026 — المواصفة تسبق السوق، وهذا ليس دليل شراء',
          'لوحات المراقبة (التي سبق تناولها للطاقة الشمسية للشرفة) نهج مختلف يعمل اليوم — يتناول هذا المقال التحكم الأصلي على مستوى الجهاز، وهو غير متاح بعد',
          'تحقق من الوثائق الحالية للشركة المصنّعة قبل افتراض أن منتجًا معينًا يقدّم هذا الدعم',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما يحدده Matter لعتاد الطاقة', anchor: 'what-matter-defines' },
      { label: 'العاكسات والبطاريات: ما القادم', anchor: 'inverters-batteries' },
      { label: 'مضخات الحرارة: ما القادم', anchor: 'heat-pumps' },
      { label: 'الفرق عن تكاملات المراقبة فقط', anchor: 'differs-from-monitoring' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'حدّد Matter أنواع أجهزة للعاكسات والبطاريات وشواحن السيارات الكهربائية ومضخات الحرارة منذ Matter 1.4 وما بعدها، لكن لم يُؤكَّد أي منتج معتمد بمعيار Matter ومطروح في هذه الفئات حتى يوليو 2026 — هذا شرح لأصحاب السبق، وليس دليل شراء حالي.' },
      { type: 'plain-terms', content: 'Matter لغة مشتركة تستخدمها أجهزة المنزل الذكي للتحدث مع مركز مثل Home Assistant. تشمل مواصفة Matter الآن تعريفات لعتاد الطاقة — العاكسات الشمسية وبطاريات المنزل وشواحن السيارات الكهربائية ومضخات الحرارة — لكن تعريف نوع جهاز في المواصفة ليس كصنع شركة مصنّعة منتجًا فعليًا واعتماده وفقها. حتى منتصف 2026، لم يواكب جانب المنتجات ذلك بعد.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'حدّد Matter أنواع أجهزة لإدارة الطاقة — عاكسات، بطاريات، شواحن سيارات كهربائية، مضخات حرارة — منذ Matter 1.4 وما بعدها',
          'حتى وقت كتابة هذا النص (يوليو 2026)، لم يُؤكَّد أي منتج معتمد بمعيار Matter ومطروح في هذه الفئات من أي شركة مصنّعة، وفقًا لمواد Connectivity Standards Alliance نفسها',
          'هذه حالة تسبق فيها المواصفة السوق: القدرة محددة، لكن العتاد لم يصل بعد — تعامل مع هذا كشرح لأصحاب السبق، وليس دليل شراء',
          'يختلف هذا عن تكاملات المراقبة/اللوحة التي سبق تناولها في مجموعة الطاقة الشمسية للشرفة — تلك تقرأ بيانات الاستخدام وتعمل اليوم ولا تعتمد على اعتماد Matter',
          'إذا أردت شيئًا يعمل الآن، فإن التكامل القائم على المراقبة فقط (مشبك تيار، واجهة برمجة تطبيقات محلية للشركة المصنّعة) هو الطريق الحالي — راجع نظرة عامة إدارة الطاقة المحلية',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'ما يحدده Matter لعتاد الطاقة',
        content:
          '**تغطي أنواع أجهزة إدارة الطاقة في Matter حالة الجهاز (شحن، تفريغ، توليد، خمول)، وقراءات الطاقة/القدرة، ودعم الأوامر (تشغيل/إيقاف، تغييرات الوضع) — قدرة على مستوى البروتوكول يمكن للشركات المصنّعة البناء عليها، لكن لا يطبقها حاليًا أي منتج مؤكَّد مطروح في السوق.**',
        items: [
          'تشمل أنواع الأجهزة: عدادات الطاقة الكهربائية، والعاكسات الشمسية، وأنظمة تخزين البطارية، وشواحن السيارات الكهربائية، ومضخات الحرارة — أُضيفت إلى المواصفة بدءًا من Matter 1.4، وفقًا لإعلان خارطة الطريق الخاص بـ Connectivity Standards Alliance نفسها بعد Matter 1.3.',
          'الجهاز الذي ينفّذ أحد هذه الأنواع سيُعلن عن ذلك ويُكتشف تلقائيًا بواسطة Home Assistant، بنفس تدفق الإقران المستخدم لأي جهاز Matter آخر — لكن هذا المقال لا يشير إلى أي منتج مؤكَّد يفعل ذلك اليوم.',
          'حتى عندما تُطرح المنتجات فعلًا، توقّع تنفيذات جزئية في البداية — غالبًا ما تُعتمَد المواصفة الكاملة لنوع الجهاز (مثل قبول الأوامر، لا مجرد الإبلاغ عن حالة للقراءة فقط) تدريجيًا من قِبل التنفيذات المبكرة للشركات المصنّعة. تحقق من وثائق منتج محدد بمجرد وجوده فعليًا، بدلًا من افتراض تحكم كامل استنادًا فقط إلى اسم نوع الجهاز.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: 'العاكسات والبطاريات: ما القادم',
        content:
          '**بمجرد أن تطرح شركة مصنّعة عاكسًا أو بطارية معتمدة بمعيار Matter، سيكون بإمكانه الإبلاغ عن التوليد وحالة الشحن وحالة الشحن/التفريغ محليًا، وقبول أوامر الوضع (مثل إعطاء الأولوية للاستهلاك الذاتي مقابل التصدير للشبكة) من أتمتة Home Assistant — لكن حتى وقت كتابة هذا النص، لم يُؤكَّد أي منتج مطروح من هذا النوع.**',
        items: [
          'سيتيح هذا في النهاية لأتمتة مثل أمثلة تحويل الحمل في نظرة عامة إدارة الطاقة المحلية أن تستجيب للتوليد وحالة البطارية في الوقت الفعلي، وليس فقط لجدول ثابت — بمجرد وجود العتاد.',
          'للحصول على منتجات بطارية حالية فعلية وخيارات دمجها المحلية اليوم (التي تستخدم واجهات برمجة تطبيقات محلية خاصة بالشركة المصنّعة أو المراقبة، وليس أنواع أجهزة الطاقة في Matter)، راجع أدلة شراء البطاريات في مجموعة الطاقة الشمسية للشرفة — هذا هو الطريق الذي يعمل اليوم، منفصل عمّا يصفه هذا المقال.',
          'يصف هذا المقال قدرة نوع جهاز Matter كما هي محددة في المواصفة، وليس قائمة مؤكَّدة بالمنتجات المتوافقة — تحقق من الإعلانات الحالية لشركة مصنّعة مباشرة قبل افتراض أن طرازًا معينًا من العاكس أو البطارية قد طرح هذا الدعم.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: 'مضخات الحرارة: ما القادم',
        content:
          '**نوع جهاز مضخة الحرارة في Matter، بمجرد تنفيذه من قبل منتج مطروح، سيكشف عن الوضع ودرجة الحرارة المستهدفة وحالة التشغيل، مما يتيح لـ Home Assistant أتمتته جنبًا إلى جنب مع التوليد الشمسي — على سبيل المثال، تشغيل مضخة الحرارة بقوة أكبر خلال ساعات الإنتاج الشمسي العالي — لكن لا يوجد منتج مؤكَّد مطروح ينفّذ هذا حتى وقت كتابة هذا النص.**',
        items: [
          'سيتبع هذا نفس نمط منظم الحرارة المعتمد بمعيار Matter، ممتدًا إلى أوضاع التشغيل الخاصة بمضخة الحرارة، بمجرد أن تطرحه شركة مصنّعة.',
          'بالاقتران مع مراقبة الطاقة المحلية الموصوفة في مقال النظرة العامة، سيتيح هذا في النهاية لأتمتة أن تفضّل تشغيل مضخة الحرارة عندما يكون التوليد المحلي مرتفعًا، بدلًا من جدول زمني ثابت — سيناريو "لا يزال قادمًا"، وليس حاليًا.',
          'كما هو الحال مع العاكسات، هذه فئة ناشئة على جانب المواصفة دون دعم مؤكَّد من شركة مصنّعة مطروح حتى وقت كتابة هذا النص — تحقق مباشرة من الإعلانات الحالية لشركات مصنّعي مضخات الحرارة بدلًا من افتراض الدعم لمجرد وجود نوع الجهاز في Matter.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: 'الفرق عن تكاملات المراقبة فقط',
        content:
          '**يقرأ التكامل القائم على المراقبة فقط بيانات الاستخدام أو التوليد (عبر مشبك تيار أو واجهة برمجة تطبيقات محلية للمورّد) دون تحكم أصلي في الجهاز، ويعمل اليوم؛ أما تكامل Matter على مستوى الجهاز لهذه الفئات فلا يعمل بعد، لأنه لا تُطرح منتجات معتمدة.**',
        items: [
          'محتوى تكامل Home Assistant الحالي في مجموعة الطاقة الشمسية للشرفة يركّز على المراقبة/اللوحة — قراءة إخراج العاكس في Home Assistant. هذا يعمل الآن ويظل الخيار العملي.',
          'سيكون تكامل Matter، بمجرد وجود منتجات حقيقية، خطوة أبعد: يصبح العاكس أو مضخة الحرارة جهازًا محليًا من الدرجة الأولى، قابلًا للاكتشاف والتحكم بنفس طريقة أي جهاز Matter آخر، دون تكامل خاص بالمورّد.',
          'نظرًا لعدم تأكيد طرح أي منتج عاكس أو بطارية أو مضخة حرارة معتمد بمعيار Matter حتى وقت كتابة هذا النص، فإن نهج المراقبة في أدلة الطاقة الشمسية للشرفة هو نقطة البداية العملية الوحيدة اليوم — دعم Matter هنا إضافة مستقبلية، وليس بديلًا حاليًا.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يدعم Matter العاكسات الشمسية اليوم؟', a: 'المواصفة نعم — يشمل Matter نوع جهاز للعاكسات الشمسية منذ Matter 1.4 وما بعدها — لكن لم يُؤكَّد أي منتج عاكس معتمد بمعيار Matter ومطروح حتى يوليو 2026، وفقًا لمواد Connectivity Standards Alliance نفسها. تحقق من الوثائق أو الإعلانات الحالية لشركة تصنيع عاكسك؛ لا تفترض وجود الدعم لمجرد أن المواصفة تحدده.' },
          { q: 'هل يمكنني التحكم في درجة حرارة مضخة الحرارة عبر Home Assistant بواسطة Matter؟', a: 'ليس بعد، حتى وقت كتابة هذا النص — لا يوجد منتج مضخة حرارة مطروح مؤكَّد ينفّذ نوع جهاز مضخة الحرارة في Matter. بمجرد أن تطرح شركة مصنّعة واحدة فعلًا، سيصبح الوضع ودرجة الحرارة المستهدفة كيانات قياسية في Home Assistant، بنفس طريقة منظم حرارة Matter اليوم.' },
          { q: 'هل هذا نفس أدلة تكامل Home Assistant للطاقة الشمسية للشرفة؟', a: 'لا. تتناول تلك الأدلة قراءة بيانات العاكس في Home Assistant لأغراض المراقبة، وتعمل اليوم. يتناول هذا المقال التحكم الأصلي في جهاز Matter، وهي قدرة محددة في المواصفة لكنها غير متاحة بعد في أي منتج مؤكَّد مطروح.' },
          { q: 'ماذا يحدث إذا لم يكن عاكسي معتمدًا بمعيار Matter؟', a: 'هذا يصف كل عاكس في السوق حتى وقت كتابة هذا النص — لا يوجد أي منها مؤكَّد كمعتمد بمعيار Matter لأنواع أجهزة الطاقة. التكامل القائم على المراقبة فقط (عبر واجهة برمجة تطبيقات محلية للشركة المصنّعة أو مشبك تيار) هو الخيار العملي الحالي لتتبع الاستخدام والأتمتة الأساسية؛ راجع أدلة التكامل في مجموعة الطاقة الشمسية للشرفة.' },
          { q: 'هل أحتاج عاكسًا جديدًا للحصول على دعم Matter؟', a: 'السؤال سابق لأوانه حتى وقت كتابة هذا النص — لا يوجد أي عاكس، جديد أو موجود، حصل على اعتماد مؤكَّد لنوع جهاز الطاقة في Matter بعد. بمجرد طرح المنتجات، سيعتمد حصول عتادك الحالي على الدعم على تقديم شركتك المصنّعة مسارًا لتحديث البرنامج الثابت؛ تحقق من خارطة طريقها مباشرة بمجرد وجود منتجات معتمدة.' },
          { q: 'هل يعمل دعم الطاقة في Matter مع إعدادات البطارية فقط (بدون طاقة شمسية)؟', a: 'في المواصفة نعم — نوع جهاز تخزين البطارية محدد بشكل مستقل عن نوع جهاز العاكس، لذا فإن إعداد النسخ الاحتياطي المحلي القائم على البطارية فقط سيكون قادرًا على استخدام Matter للحالة والتحكم المحليين دون تدخل التوليد الشمسي، بمجرد وجود منتج معتمد. حتى وقت كتابة هذا النص، لا يزال هذا سيناريو "عندما يُطرح" مثل بقية هذا المقال.' },
          { q: 'هل يمكن لأتمتة أن تجمع بين بيانات طاقة Matter ونموذج LLM محلي؟', a: 'بمجرد كشف حالة العاكس أو البطارية أو مضخة الحرارة ككيانات قياسية في Home Assistant عبر Matter — وهو ما يتطلب منتجًا معتمدًا لا يزال غير موجود — ستتمكن أتمتة LLM محلية (راجع دليل LLM المحلي للمنزل الذكي) من الاستدلال على تلك البيانات بنفس الطريقة التي تفعلها مع أي كيان آخر. هذه قدرة مستقبلية، وليست حالية.' },
          { q: 'أين أتحقق من اعتماد Matter الحالي لمنتج معين؟', a: 'تحقق من وثائق المنتج الخاصة بالشركة المصنّعة أو قائمة المنتجات المعتمدة الخاصة بـ Connectivity Standards Alliance مباشرة — لا تعتمد على النصوص التسويقية وحدها، إذ إن علامة "متوافق مع Matter" غالبًا ما تكون أوسع من الاعتماد لنوع جهاز طاقة محدد.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[إدارة الطاقة المحلية في المنزل الذكي](/ar/smart-home/local-smart-home-energy-management-2027) — النظرة العامة التي يتعمق فيها هذا المقال',
          '[شرح Matter 1.6: ما الجديد](/ar/smart-home/matter-1-6-explained) — تحديث المواصفة الأوسع',
          '[Matter والتحكم المحلي: منزل ذكي مستقل عن الإنترنت](/ar/smart-home/matter-local-control-guide) — أساسيات الإقران المحلي',
          '[أفضل عاكسات دقيقة للطاقة الشمسية للشرفة](/ar/balcony-solar/best-balcony-solar-microinverters) — عبر المجموعات: خيارات عتاد العاكس الحالية التي تعمل اليوم',
          '[Home Assistant + الطاقة الشمسية للشرفة، دون سحابة](/ar/balcony-solar/home-assistant-balcony-solar-no-cloud) — عبر المجموعات: طريق التكامل القائم على المراقبة فقط الذي يعمل اليوم',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'معيار Matter للعاكسات الشمسية ومضخات الحرارة: ما القادم (⁨2027⁩)',
      description: 'يحدد Matter أنواع أجهزة للعاكسات الشمسية ومضخات الحرارة (Matter 1.4 وما بعدها)، لكن لا توجد منتجات معتمدة مطروحة بعد حتى يوليو 2026 — ما هو قادم، وليس ما يعمل اليوم.',
      url: 'https://www.promptquorum.com/ar/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'إدارة طاقة Matter' }, { '@type': 'Thing', name: 'عاكس شمسي' }, { '@type': 'Thing', name: 'مضخة حرارة' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يدعم Matter العاكسات الشمسية اليوم؟', acceptedAnswer: { '@type': 'Answer', text: 'المواصفة تشمل نوع جهاز للعاكسات الشمسية منذ Matter 1.4 وما بعدها، لكن لم يُؤكَّد أي منتج عاكس معتمد بمعيار Matter ومطروح حتى يوليو 2026.' } },
        { '@type': 'Question', name: 'هل يمكنني التحكم في درجة حرارة مضخة الحرارة عبر Home Assistant بواسطة Matter؟', acceptedAnswer: { '@type': 'Answer', text: 'ليس بعد حتى وقت كتابة هذا النص — لا يوجد منتج مضخة حرارة مطروح مؤكَّد ينفّذ نوع جهاز مضخة الحرارة في Matter.' } },
        { '@type': 'Question', name: 'هل هذا نفس أدلة تكامل Home Assistant للطاقة الشمسية للشرفة؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. تتناول تلك الأدلة قراءة بيانات العاكس للمراقبة وتعمل اليوم. يتناول هذا المقال التحكم الأصلي في جهاز Matter، غير المتاح بعد.' } },
        { '@type': 'Question', name: 'ماذا يحدث إذا لم يكن عاكسي معتمدًا بمعيار Matter؟', acceptedAnswer: { '@type': 'Answer', text: 'هذا يصف كل عاكس في السوق حتى وقت كتابة هذا النص. التكامل القائم على المراقبة فقط عبر واجهة برمجة تطبيقات محلية للشركة المصنّعة أو مشبك تيار هو الخيار العملي الحالي.' } },
        { '@type': 'Question', name: 'أين أتحقق من اعتماد Matter الحالي لمنتج معين؟', acceptedAnswer: { '@type': 'Answer', text: 'تحقق من وثائق المنتج الخاصة بالشركة المصنّعة أو قائمة المنتجات المعتمدة الخاصة بـ Connectivity Standards Alliance مباشرة.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Energy & Solar Integration',
    title: '태양광 인버터와 히트펌프를 위한 Matter: 다가오는 것 (2027년)',
    seoTitle: '태양광 인버터 + 히트펌프용 Matter: 아직 아님 (2027년)',
    intro:
      'Matter 사양은 Matter 1.4 이상부터(Connectivity Standards Alliance 자체 로드맵 발표에 따르면) 태양광 인버터, 배터리 저장 장치, 전기차 충전기, 히트펌프 등 에너지 관리 하드웨어를 위한 기기 유형을 정의해 왔지만, 이 글을 쓰는 시점에는 어떤 제조사로부터도 Matter 인증을 받고 실제 출시된 인버터, 배터리, 히트펌프 제품이 확인되지 않았습니다. 이는 얼리어답터를 위한 해설입니다: 사양이 오늘 무엇을 정의하는지, 그리고 이것이 실제 구매 옵션이 되기 전에 무엇을 지켜봐야 하는지를 다루며, 지금 당장 사용할 수 있는 하드웨어 가이드가 아닙니다. 또한 이미 발코니 태양광에서 다룬, 오늘날 실제로 작동하는 모니터링·대시보드 연동과 어떻게 다른지도 설명합니다.',
    metaDescription:
      'Matter는 태양광 인버터와 히트펌프용 기기 유형을 정의했지만(Matter 1.4 이상), 2026년 7월 기준 출시된 인증 제품은 아직 없습니다 — 다가오는 것이지, 오늘 작동하는 것이 아닙니다.',
    twitterDescription:
      'Matter에는 태양광 인버터와 히트펌프를 위한 사양이 있지만 — 아직 출시된 인증 제품은 없습니다. 사양이 정의하는 것과 지켜봐야 할 것.',
    readTime: '7분 소요',
    educationalLevel: 'Intermediate',
    audience: '태양광 인버터, 배터리, 히트펌프를 보유하고 로컬 Matter 제어가 언제 실제 옵션이 될지 알고 싶은 스마트홈 소유자',
    primaryTerm: 'matter 태양광 인버터 히트펌프 연동',
    targetKeywords: [
      'matter 스마트홈 인버터 히트펌프',
      'matter 에너지 관리 기기 유형',
      'home assistant matter 태양광 인버터',
      'matter 히트펌프 연동',
      'matter 태양광 인버터 지원 사실인가',
    ],
    leadAnswerBlock:
      '**실제 구매 결정으로서는 아직 아닙니다 — Matter 사양은 Matter 1.4 이상부터 에너지 관리(인버터, 배터리, 전기차 충전기, 히트펌프)를 위한 기기 유형을 정의해 왔지만, 2026년 7월 기준 어떤 제조사로부터도 이 카테고리에서 Matter 인증을 받고 출시된 제품이 확인되지 않았습니다.** Connectivity Standards Alliance 자체 로드맵 발표는 이러한 기기 유형을 Matter 1.3 이후 계획된 추가 사항으로 언급했지만, 오늘 이를 출시하는 제조사나 제품을 단 하나도 지목하지 않았습니다. 이 글은 "무엇을 살 수 있는가"가 아니라 "무엇을 지켜봐야 하는가"로 받아들이세요.',
    quickAnswerTop: {
      ko: {
        question: '오늘 Matter로 태양광 인버터나 히트펌프를 로컬로 제어할 수 있나요?',
        answer:
          '"Matter 인증 인버터/히트펌프"라는 구체적인 시나리오에 대해서는 아직 아닙니다. Matter 사양은 Matter 1.4 이상부터 에너지 관리 기기 유형(인버터, 배터리 저장 장치, 전기차 충전기, 히트펌프)을 포함하고 있어, 인증된 기기가 제조사 클라우드 앱 대신 Home Assistant를 통해 로컬로 상태를 보고하고 명령을 받을 수 있게 하지만, Connectivity Standards Alliance 자체 자료에 따르면 이 글을 쓰는 시점(2026년 7월) 기준 이 카테고리에서 출시되고 Matter 인증을 받은 제품은 확인되지 않았습니다. 그 기능은 사양에 존재하지만, 제품은 아직 시장에 존재하지 않습니다.',
        bullets: [
          'Matter는 Matter 1.4 이상부터 인버터, 배터리, 전기차 충전기, 히트펌프를 위한 기기 유형을 정의함',
          '2026년 7월 기준 이 카테고리에서 출시되고 Matter 인증을 받은 제품은 확인되지 않음 — 이는 사양이 시장보다 앞서 있는 상황이며, 구매 가이드가 아님',
          '모니터링 대시보드(이미 발코니 태양광에서 다룸)는 오늘 작동하는 다른 접근 방식임 — 이 글은 아직 이용할 수 없는 네이티브 기기 수준 제어를 다룸',
          '특정 제품이 이 지원을 제공한다고 가정하기 전에 제조사의 최신 문서를 확인할 것',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: 'Matter가 에너지 하드웨어에 정의하는 것', anchor: 'what-matter-defines' },
      { label: '인버터와 배터리: 다가오는 것', anchor: 'inverters-batteries' },
      { label: '히트펌프: 다가오는 것', anchor: 'heat-pumps' },
      { label: '모니터링 전용 연동과의 차이', anchor: 'differs-from-monitoring' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter는 Matter 1.4 이상부터 인버터, 배터리, 전기차 충전기, 히트펌프를 위한 기기 유형을 정의했지만, 2026년 7월 기준 이 카테고리에서 출시되고 Matter 인증을 받은 제품은 확인되지 않았습니다 — 이는 얼리어답터를 위한 해설이지, 현재의 구매 가이드가 아닙니다.' },
      { type: 'plain-terms', content: 'Matter는 스마트홈 기기가 Home Assistant 같은 허브와 대화하는 데 사용하는 공통 언어입니다. Matter 사양에는 이제 태양광 인버터, 가정용 배터리, 전기차 충전기, 히트펌프 같은 에너지 하드웨어에 대한 정의가 포함되어 있지만, 사양에서 기기 유형을 정의하는 것과 제조사가 실제로 그에 맞춰 제품을 만들고 인증받는 것은 다른 문제입니다. 2026년 중반 기준, 제품 쪽은 아직 이를 따라잡지 못했습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Matter는 Matter 1.4 이상부터 에너지 관리(인버터, 배터리, 전기차 충전기, 히트펌프)를 위한 기기 유형을 정의함',
          '이 글을 쓰는 시점(2026년 7월) 기준, Connectivity Standards Alliance 자체 자료에 따르면 어떤 제조사로부터도 이 카테고리에서 출시된 Matter 인증 제품은 확인되지 않음',
          '이는 사양이 시장보다 앞서 있는 상황입니다: 기능은 정의되었지만 하드웨어는 아직 없습니다 — 이를 얼리어답터를 위한 해설로 받아들이고, 구매 가이드로 받아들이지 마세요',
          '이는 발코니 태양광 클러스터에서 이미 다룬 모니터링/대시보드 연동과는 다릅니다 — 그것들은 사용 데이터를 읽고, 오늘 작동하며, Matter 인증에 의존하지 않습니다',
          '지금 당장 작동하는 것을 원한다면, 모니터링 전용 연동(CT 클램프, 벤더 로컬 API)이 현재의 경로입니다 — 로컬 에너지 관리 개요를 참고하세요',
        ],
      },
      whatMatterDefines: {
        id: 'what-matter-defines',
        title: 'Matter가 에너지 하드웨어에 정의하는 것',
        content:
          '**Matter의 에너지 관리 기기 유형은 기기 상태(충전 중, 방전 중, 발전 중, 유휴 상태), 전력/에너지 판독값, 명령 지원(시작/정지, 모드 변경)을 다룹니다 — 이는 제조사가 개발 대상으로 삼을 수 있는 프로토콜 수준의 기능이지만, 현재 확인된 출시 제품 중 이를 구현한 것은 없습니다.**',
        items: [
          '기기 유형에는 전력량계, 태양광 인버터, 배터리 저장 시스템, 전기차 충전기, 히트펌프가 포함됩니다 — Connectivity Standards Alliance 자체 로드맵 발표에 따르면 Matter 1.3 이후 Matter 1.4부터 사양에 추가되었습니다.',
          '이 중 하나를 구현한 기기는 이를 알리고 다른 Matter 기기와 동일한 페어링 과정을 통해 Home Assistant에 자동으로 발견될 것입니다 — 하지만 이 글은 오늘 이를 수행하는 확인된 제품을 가리키지 않습니다.',
          '제품이 실제로 출시되더라도 처음에는 부분적인 구현을 예상해야 합니다 — 기기 유형의 전체 사양(예: 읽기 전용 상태 보고뿐 아니라 명령 수용)은 초기 제조사 구현에서 종종 점진적으로 채택됩니다. 실제로 존재하게 된 특정 제품의 문서를 확인하고, 기기 유형 이름만으로 전체 제어를 가정하지 마세요.',
        ],
      },
      invertersBatteries: {
        id: 'inverters-batteries',
        title: '인버터와 배터리: 다가오는 것',
        content:
          '**제조사가 Matter 인증 인버터나 배터리를 출시하면, 발전량, 충전 상태, 충전/방전 상태를 로컬로 보고하고 Home Assistant 자동화로부터 모드 명령(예: 자가 소비 우선 대 계통 판매 우선)을 받을 수 있을 것이지만, 이 글을 쓰는 시점 기준 그러한 출시 제품은 확인되지 않았습니다.**',
        items: [
          '하드웨어가 존재하게 되면, 이는 궁극적으로 로컬 에너지 관리 개요의 부하 이동 예시 같은 자동화가 고정된 일정이 아니라 실시간 발전량과 배터리 상태에 반응할 수 있게 할 것입니다.',
          '오늘날 실제 현행 배터리 제품과 그 로컬 연동 옵션(Matter 에너지 기기 유형이 아니라 제조사 고유의 로컬 API나 모니터링을 사용)에 대해서는 발코니 태양광 클러스터의 배터리 구매 가이드를 참고하세요 — 이것이 오늘 작동하는 경로이며, 이 글이 설명하는 것과는 별개입니다.',
          '이 글은 사양에 정의된 Matter 기기 유형의 기능을 설명하는 것이지, 확인된 준수 제품 목록이 아닙니다 — 특정 인버터나 배터리 모델이 이 지원을 출시했다고 가정하기 전에 제조사의 최신 발표를 직접 확인하세요.',
        ],
      },
      heatPumps: {
        id: 'heat-pumps',
        title: '히트펌프: 다가오는 것',
        content:
          '**Matter 히트펌프 기기 유형은 출시 제품에 구현되면 모드, 목표 온도, 작동 상태를 노출해 Home Assistant가 태양광 발전과 함께 이를 자동화할 수 있게 할 것입니다 — 예를 들어 태양광 발전이 많은 시간대에 히트펌프를 더 강하게 작동시키는 식으로 — 하지만 이 글을 쓰는 시점 기준 확인된 출시 제품 중 이를 구현한 것은 없습니다.**',
        items: [
          '제조사가 출시하면, 이는 Matter 온도조절기와 동일한 패턴을 따르되 히트펌프 특유의 작동 모드로 확장된 형태가 될 것입니다.',
          '개요 글에서 설명한 로컬 에너지 모니터링과 결합하면, 이는 궁극적으로 고정된 시간대 일정 대신 로컬 발전량이 높을 때 히트펌프 작동을 우선시하는 자동화를 가능하게 할 것입니다 — "아직 오지 않은" 시나리오이지 현재의 것이 아닙니다.',
          '인버터와 마찬가지로, 이는 사양 측면에서는 신흥 카테고리이며 이 글을 쓰는 시점 기준 확인된 제조사의 출시 지원이 없습니다 — Matter에 기기 유형이 존재한다는 이유만으로 지원을 가정하지 말고 히트펌프 제조사의 최신 발표를 직접 확인하세요.',
        ],
      },
      differsFromMonitoring: {
        id: 'differs-from-monitoring',
        title: '모니터링 전용 연동과의 차이',
        content:
          '**모니터링 전용 연동은 (CT 클램프나 벤더의 로컬 API를 통해) 네이티브 기기 제어 없이 사용량이나 발전량 데이터를 읽으며 오늘 작동합니다. 이 카테고리에 대한 Matter 기기 수준 연동은 인증된 제품이 출시되지 않았기 때문에 아직 작동하지 않습니다.**',
        items: [
          '발코니 태양광 클러스터의 기존 Home Assistant 연동 콘텐츠는 모니터링/대시보드 중심입니다 — 인버터 출력을 Home Assistant로 읽어들이는 것입니다. 이는 지금 작동하며 실용적인 옵션으로 남아 있습니다.',
          '실제 제품이 존재하게 되면, Matter 연동은 한 걸음 더 나아갈 것입니다: 인버터나 히트펌프는 벤더 고유 연동 없이 다른 Matter 기기와 동일한 방식으로 발견하고 제어할 수 있는 일급 로컬 기기가 될 것입니다.',
          '이 글을 쓰는 시점 기준 Matter 인증을 받고 출시된 인버터, 배터리, 히트펌프 제품이 확인되지 않았으므로, 발코니 태양광 가이드의 모니터링 접근 방식이 오늘 유일하게 작동하는 출발점입니다 — 여기서 Matter 지원은 현재의 대안이 아니라 미래의 추가 사항입니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Matter가 오늘 태양광 인버터를 지원하나요?', a: '사양상으로는 그렇습니다 — Matter는 Matter 1.4 이상부터 태양광 인버터용 기기 유형을 포함하고 있습니다 — 하지만 Connectivity Standards Alliance 자체 자료에 따르면 2026년 7월 기준 출시되고 Matter 인증을 받은 인버터 제품은 확인되지 않았습니다. 인버터 제조사의 최신 문서나 발표를 확인하세요; 사양이 이를 정의한다고 해서 지원이 존재한다고 가정하지 마세요.' },
          { q: 'Home Assistant를 통해 Matter로 히트펌프 온도를 제어할 수 있나요?', a: '이 글을 쓰는 시점 기준 아직 아닙니다 — 확인된 출시 히트펌프 제품 중 Matter의 히트펌프 기기 유형을 구현한 것은 없습니다. 제조사가 실제로 출시하면, 모드와 목표 온도는 오늘날의 Matter 온도조절기와 마찬가지로 표준 Home Assistant 엔티티가 될 것입니다.' },
          { q: '이것이 발코니 태양광용 Home Assistant 연동 가이드와 같은 것인가요?', a: '아닙니다. 그 가이드들은 모니터링을 위해 인버터 데이터를 Home Assistant로 읽어들이는 것을 다루며, 오늘 작동합니다. 이 글은 네이티브 Matter 기기 제어를 다루는데, 이는 사양에 정의되었지만 확인된 출시 제품에는 아직 존재하지 않는 기능입니다.' },
          { q: '내 인버터가 Matter 인증을 받지 않았다면 어떻게 되나요?', a: '이 글을 쓰는 시점 기준 시장의 모든 인버터가 그렇습니다 — 에너지 기기 유형에 대해 Matter 인증을 받았다고 확인된 것은 없습니다. 모니터링 전용 연동(제조사의 로컬 API나 CT 클램프를 통한)이 사용량 추적과 기본 자동화를 위한 현재의 작동 옵션입니다. 발코니 태양광 클러스터의 연동 가이드를 참고하세요.' },
          { q: 'Matter 지원을 받으려면 새 인버터가 필요한가요?', a: '이 글을 쓰는 시점 기준 이 질문은 시기상조입니다 — 신구를 막론하고 어떤 인버터도 아직 확인된 Matter 에너지 기기 유형 인증을 받지 않았습니다. 제품이 실제로 출시되면, 기존 하드웨어가 지원을 받을지 여부는 특정 제조사가 펌웨어 업데이트 경로를 제공하는지에 달려 있습니다; 인증된 제품이 존재하게 되면 해당 제조사의 로드맵을 직접 확인하세요.' },
          { q: 'Matter 에너지 지원이 배터리 전용 설정(태양광 없음)에서도 작동하나요?', a: '사양상으로는 그렇습니다 — 배터리 저장 기기 유형은 인버터 기기 유형과 독립적으로 정의되어 있으므로, 인증된 제품이 존재하게 되면 태양광 발전이 관여하지 않는 배터리 전용 로컬 백업 설정도 로컬 상태 확인과 제어에 Matter를 사용할 수 있을 것입니다. 이 글을 쓰는 시점 기준, 이는 이 글의 나머지 부분과 마찬가지로 여전히 "출시되면"이라는 시나리오입니다.' },
          { q: '자동화가 Matter 에너지 데이터를 로컬 LLM과 결합할 수 있나요?', a: '인버터, 배터리, 히트펌프 상태가 Matter를 통해 표준 Home Assistant 엔티티로 노출되면(아직 존재하지 않는 인증된 제품이 필요함), 로컬 LLM 자동화(로컬 LLM 스마트홈 가이드 참고)는 다른 어떤 엔티티에 대해서와 마찬가지로 그 데이터에 대해 추론할 수 있을 것입니다. 이는 현재가 아닌 미래의 기능입니다.' },
          { q: '특정 제품의 현재 Matter 인증은 어디서 확인하나요?', a: '제조사 자체의 제품 문서나 Connectivity Standards Alliance의 인증 제품 목록을 직접 확인하세요 — 마케팅 문구에만 의존하지 마세요. "Matter 호환" 브랜딩은 특정 에너지 기기 유형에 대한 인증보다 범위가 넓은 경우가 많습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 스마트홈 에너지 관리](/ko/smart-home/local-smart-home-energy-management-2027) — 이 글이 좁혀 들어가는 개요 글',
          '[Matter 1.6 해설: 새로운 점](/ko/smart-home/matter-1-6-explained) — 더 폭넓은 사양 업데이트',
          '[Matter와 로컬 제어: 인터넷에 독립적인 스마트홈](/ko/smart-home/matter-local-control-guide) — 로컬 페어링 기초',
          '[베스트 발코니 태양광 마이크로 인버터](/ko/balcony-solar/best-balcony-solar-microinverters) — 클러스터 간: 오늘 작동하는 현행 인버터 하드웨어 선택',
          '[Home Assistant + 발코니 태양광, 클라우드 없이](/ko/balcony-solar/home-assistant-balcony-solar-no-cloud) — 클러스터 간: 오늘 작동하는 모니터링 전용 연동 경로',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '태양광 인버터와 히트펌프를 위한 Matter: 다가오는 것 (2027년)',
      description: 'Matter는 태양광 인버터와 히트펌프용 기기 유형을 정의했지만(Matter 1.4 이상), 2026년 7월 기준 출시된 인증 제품은 아직 없습니다 — 다가오는 것이지, 오늘 작동하는 것이 아닙니다.',
      url: 'https://www.promptquorum.com/ko/smart-home/matter-solar-inverter-heat-pump-integration',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter 에너지 관리' }, { '@type': 'Thing', name: '태양광 인버터' }, { '@type': 'Thing', name: '히트펌프' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Matter가 오늘 태양광 인버터를 지원하나요?', acceptedAnswer: { '@type': 'Answer', text: '사양상으로는 Matter 1.4 이상부터 태양광 인버터용 기기 유형을 포함하지만, 2026년 7월 기준 출시되고 Matter 인증을 받은 인버터 제품은 확인되지 않았습니다.' } },
        { '@type': 'Question', name: 'Home Assistant를 통해 Matter로 히트펌프 온도를 제어할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '이 글을 쓰는 시점 기준 아직 아닙니다 — 확인된 출시 히트펌프 제품 중 Matter의 히트펌프 기기 유형을 구현한 것은 없습니다.' } },
        { '@type': 'Question', name: '이것이 발코니 태양광용 Home Assistant 연동 가이드와 같은 것인가요?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 그 가이드들은 모니터링을 위한 인버터 데이터 읽기를 다루며 오늘 작동합니다. 이 글은 아직 출시 제품에 존재하지 않는 네이티브 Matter 기기 제어를 다룹니다.' } },
        { '@type': 'Question', name: '내 인버터가 Matter 인증을 받지 않았다면 어떻게 되나요?', acceptedAnswer: { '@type': 'Answer', text: '이 글을 쓰는 시점 기준 시장의 모든 인버터가 그렇습니다. 제조사의 로컬 API나 CT 클램프를 통한 모니터링 전용 연동이 현재의 작동 옵션입니다.' } },
        { '@type': 'Question', name: '특정 제품의 현재 Matter 인증은 어디서 확인하나요?', acceptedAnswer: { '@type': 'Answer', text: '제조사 자체의 제품 문서나 Connectivity Standards Alliance의 인증 제품 목록을 직접 확인하세요.' } },
      ],
    },
  },
}
