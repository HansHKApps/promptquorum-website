import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-en.webp',
    // Verified 2026-07-16 directly against CSA's own newsroom (csa-iot.org/newsroom/matter-1-6-...):
    // Matter 1.6 released June 17, 2026 — no "Matter 2.0" exists, past or planned. Renamed from
    // matter-2-0-explained (see docs/SH_26_45_VERIFICATION_LIST.md Step 2 close-out).
    // Energy-management device types (inverters, batteries, heat pumps, EV chargers) were introduced
    // progressively across Matter 1.3-1.5, NOT in 1.6 — 1.6's own headline features are NFC-based
    // commissioning, Joint Fabric (multi-admin/multi-ecosystem device sharing), and Thermostat
    // Suggestions. Reframed below to reflect that, rather than crediting 1.6 with the energy work.
    title: "Matter 1.6 Explained: What's New (2027)",
    seoTitle: 'Matter 1.6 Explained (2027)',
    intro:
      'Matter 1.6, released June 17, 2026, is the current version of the Matter smart home standard. Its headline additions are NFC-based device setup, Joint Fabric (letting multiple ecosystems co-administer the same device), and Thermostat Suggestions — not new energy-management device types, which arrived earlier across Matter 1.3-1.5 and are covered elsewhere in this cluster. This article explains what changed in 1.6 specifically and how it differs from the general protocol primer and local-control guide already on this site.',
    metaDescription:
      "What's new in Matter 1.6 (released June 17, 2026): NFC setup, Joint Fabric multi-ecosystem sharing, Thermostat Suggestions, and full backward compatibility with 1.x devices.",
    twitterDescription:
      "Matter 1.6 explained: NFC setup, Joint Fabric, Thermostat Suggestions, backward compatibility, and how it differs from the general Matter/Thread/Zigbee primer already on this site.",
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners and Home Assistant users tracking what changed in the Matter specification',
    primaryTerm: 'matter 1.6 smart home',
    targetKeywords: [
      'matter 1.6 smart home',
      'what is new in matter 1.6',
      'matter spec update',
      'matter backward compatibility',
      'matter device types 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6 (released June 17, 2026 by the Connectivity Standards Alliance) is the current version of the Matter smart home standard, adding NFC-based commissioning, Joint Fabric multi-ecosystem device sharing, and Thermostat Suggestions, while remaining fully backward-compatible with existing 1.x-certified devices.** Energy-management device types (inverters, batteries, heat pumps) were added earlier, across Matter 1.3-1.5, and are covered elsewhere in this cluster — Matter 1.6 itself is a setup and multi-ecosystem release, not an energy-focused one.',
    quickAnswerTop: {
      en: {
        question: "What's new in Matter 1.6?",
        answer:
          'Matter 1.6 (released June 17, 2026) adds NFC-based device setup, Joint Fabric — which lets multiple user-authorized controllers co-administer a single shared Matter network — and Thermostat Suggestions, a standardized way for ecosystems to propose (not force) thermostat changes. Existing 1.x-certified devices remain fully compatible; the release adds capability rather than replacing the base protocol. Energy-management device types are not new in 1.6 — those arrived across Matter 1.3-1.5.',
        bullets: [
          'Matter 1.6, released June 17, 2026: NFC setup, Joint Fabric multi-ecosystem sharing, Thermostat Suggestions',
          'Existing Matter 1.x devices remain compatible — this is additive, not a breaking change',
          'Distinct from Thread (the networking layer) and from this cluster\'s general protocol primer and local-control guide',
          'Energy-management device types (inverters, batteries, heat pumps) arrived earlier, in Matter 1.3-1.5 — not new in 1.6',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Changed', anchor: 'what-changed' },
      { label: 'Backward Compatibility', anchor: 'backward-compatibility' },
      { label: 'How This Differs From Other Matter Content Here', anchor: 'differs' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter 1.6 (released June 17, 2026) adds NFC-based commissioning, Joint Fabric multi-ecosystem device sharing, and Thermostat Suggestions, while remaining backward-compatible with existing 1.x devices — energy-management device types arrived earlier, in Matter 1.3-1.5, not in 1.6.' },
      { type: 'plain-terms', content: 'Matter is regularly updated with new capabilities, similar to how an operating system gets version updates. This update mainly adds a new way to set up devices using NFC, a way for multiple smart home systems to share control of the same device, and a standard way for a thermostat to receive (and choose whether to accept) suggested temperature changes. Devices you already own that use an older Matter version keep working exactly as before.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Matter 1.6 (released June 17, 2026) is the current spec version — its headline changes are NFC setup, Joint Fabric, and Thermostat Suggestions',
          'Existing Matter 1.x devices remain fully compatible — nothing breaks',
          'This is distinct from Thread (the network layer under Matter) and from Thread/Wi-Fi 7 router considerations',
          'Also distinct from this cluster\'s general protocol primer (Matter/Thread/Zigbee/Z-Wave overview) and local-control guide (commissioning/avoiding cloud bridges)',
          'Energy-management device types (inverters, batteries, heat pumps) are not new in 1.6 — those were introduced earlier, across Matter 1.3-1.5',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'What Changed',
        content:
          '**Matter 1.6\'s three headline additions are NFC-based commissioning, Joint Fabric, and Thermostat Suggestions — a focused, tooling-and-coordination release rather than a new-device-category release.**',
        items: [
          'NFC setup: the full device-commissioning exchange can now happen over NFC, rather than only QR-code scanning and Bluetooth.',
          'Joint Fabric: expands on the existing Multi-Admin toolkit so multiple user-authorized controllers can co-administer a single shared Matter network, making a device accessible across participating ecosystems instead of tied to whichever hub commissioned it first.',
          'Thermostat Suggestions: standardizes how ecosystems recommend thermostat changes — instead of sending a direct command, a controller sends a time-bound suggestion the thermostat itself evaluates.',
          'The revision is additive at the protocol level: it defines new things Matter *can* describe, without removing or breaking support for existing device types. Energy-management device types (inverters, batteries, EV chargers, heat pumps) were not part of this release — see this cluster\'s Matter inverter/heat-pump integration guide for that earlier (Matter 1.3-1.5) work.',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: 'Backward Compatibility',
        content:
          '**A device certified against an older Matter version continues to work with a hub or controller running the newer spec — you do not need to replace existing Matter devices.**',
        items: [
          'Your existing Matter lights, locks, and sensors need no changes when Home Assistant or another controller adds support for the newer spec revision.',
          'New device types (like energy management) are only usable if a specific product implements them — owning older Matter hardware doesn\'t retroactively grant it new capabilities.',
          'CSA\'s own Matter 1.6 announcement describes it as additive — no breaking changes to existing device types were mentioned in the release. As always with any spec update, check a specific device\'s release notes if you rely on a narrow or unusual field.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'How This Differs From Other Matter Content Here',
        content:
          '**This article covers the spec revision itself; the general protocol primer explains Matter/Thread/Zigbee/Z-Wave at a conceptual level, and the local-control guide covers commissioning and avoiding cloud bridges — read all three for the full picture.**',
        items: [
          'If you\'re asking "what is Matter and how does it compare to Zigbee/Z-Wave," start with the general protocol primer.',
          'If you\'re asking "how do I commission a Matter device locally without a cloud bridge," see the local-control guide.',
          'If you\'re asking "what changed in the spec recently, and does my hardware need an update," this article is the one — and it points to the energy-integration guide if you\'re looking for the earlier (1.3-1.5) energy-management work specifically, since that isn\'t part of 1.6.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need to update my existing Matter devices?', a: 'No — existing 1.x-certified devices continue working without any update. New capabilities like NFC setup or Joint Fabric only matter if you\'re buying new hardware or a new controller that implements them.' },
          { q: 'What is the biggest practical change in Matter 1.6?', a: 'Joint Fabric — it lets multiple user-authorized controllers co-administer a single shared Matter network, so a device can be genuinely shared across ecosystems instead of belonging to whichever hub commissioned it first. NFC setup and Thermostat Suggestions are the other two headline additions. Energy-management device types (inverters, batteries, heat pumps) are not new in this release — see the Matter inverter/heat-pump integration guide for that earlier work.' },
          { q: 'Does this affect Thread?', a: 'Thread is the networking layer Matter often runs over; Matter 1.6 is a change to the Matter application layer, not to Thread itself. See the Thread and Wi-Fi 7 routers guide for networking-layer changes.' },
          { q: 'Is my hub software compatible with Matter 1.6?', a: 'Hub software needs its own update to support a new spec release — it isn\'t automatic. Home Assistant (verified 2026-07-16 against home-assistant.io\'s own blog) fully supports Matter 1.5.1 as of write-time, with Matter 1.6 support in active beta rather than fully released — check your specific hub\'s current release notes rather than assuming day-one support for the newest spec release.' },
          { q: 'How is this different from the general Matter/Thread/Zigbee explainer on this site?', a: 'That article explains the protocols conceptually and compares them. This article covers what specifically changed in Matter 1.6 — a narrower, update-focused scope.' },
          { q: 'Where can I check the current official spec version?', a: 'The Connectivity Standards Alliance (csa-iot.org) publishes and announces the current Matter specification directly — check there rather than relying on secondary sources or marketing materials for the exact version number.' },
          { q: 'Do all Matter controllers support Matter 1.6 immediately?', a: 'No — a spec release being published doesn\'t mean every hub implements it on day one. Home Assistant\'s own blog confirms 1.6 support is in active beta rather than fully released as of write-time; Apple Home, Google Home, and SmartThings each have their own independent rollout timelines that this article does not track — check your specific controller\'s current release notes.' },
          { q: 'Does this change how Matter devices are commissioned?', a: 'Not for existing methods — QR-code and Bluetooth commissioning still work the same way. Matter 1.6 adds NFC as an additional commissioning option; it doesn\'t remove or change the existing process. See the local-control guide for the commissioning walkthrough.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — the general primer',
          '[Matter & Local Control: An Internet-Independent Smart Home](/smart-home/matter-local-control-guide) — commissioning and avoiding cloud bridges',
          '[Matter Integration for Solar Inverters and Heat Pumps](/smart-home/matter-solar-inverter-heat-pump-integration) — the energy-management device types, added earlier in Matter 1.3-1.5, not in 1.6',
          '[Thread and Wi-Fi 7 Routers for Smart Homes](/smart-home/thread-14-wifi-7-routers-guide) — the networking layer',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: "Matter 1.6 Explained: What's New (2027)",
      description: "What's new in Matter 1.6: NFC setup, Joint Fabric, Thermostat Suggestions, and backward compatibility with 1.x devices.",
      url: 'https://www.promptquorum.com/smart-home/matter-1-6-explained',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter smart home protocol' }, { '@type': 'Thing', name: 'Matter device types' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need to update my existing Matter devices?', acceptedAnswer: { '@type': 'Answer', text: 'No — existing 1.x-certified devices continue working without any update.' } },
        { '@type': 'Question', name: 'What is the biggest practical change in Matter 1.6?', acceptedAnswer: { '@type': 'Answer', text: 'Joint Fabric, which lets multiple user-authorized controllers co-administer a single shared Matter network — plus NFC setup and Thermostat Suggestions.' } },
        { '@type': 'Question', name: 'Does this affect Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Thread is the networking layer Matter often runs over; Matter 1.6 is a change to the Matter application layer, not to Thread itself.' } },
        { '@type': 'Question', name: 'Where can I check the current official spec version?', acceptedAnswer: { '@type': 'Answer', text: 'The Connectivity Standards Alliance publishes the current Matter specification directly.' } },
        { '@type': 'Question', name: 'Does this change how Matter devices are commissioned?', acceptedAnswer: { '@type': 'Answer', text: 'No — commissioning uses the same process regardless of which device types the spec defines.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-de.webp',
    title: 'Matter 1.6 erklärt: Was ist neu (2027)',
    seoTitle: 'Matter 1.6 erklärt (2027)',
    intro:
      'Matter 1.6, veröffentlicht am 17. Juni 2026, ist die aktuelle Version des Smart-Home-Standards Matter. Die wichtigsten Neuerungen sind NFC-basiertes Setup, Joint Fabric (mehrere Ökosysteme können dasselbe Gerät gemeinsam verwalten) und Thermostat-Vorschläge — keine neuen Energiemanagement-Gerätetypen, die bereits früher in Matter 1.3-1.5 eingeführt wurden und an anderer Stelle in diesem Cluster behandelt werden. Dieser Artikel erklärt, was sich in 1.6 konkret geändert hat und wie sich das vom allgemeinen Protokoll-Grundlagenartikel und dem Leitfaden zur lokalen Steuerung auf dieser Website unterscheidet.',
    metaDescription:
      'Was ist neu in Matter 1.6 (veröffentlicht am 17. Juni 2026): NFC-Setup, Joint-Fabric-Mehr-Ökosystem-Freigabe, Thermostat-Vorschläge und volle Abwärtskompatibilität mit 1.x-Geräten.',
    twitterDescription:
      'Matter 1.6 erklärt: NFC-Setup, Joint Fabric, Thermostat-Vorschläge, Abwärtskompatibilität, und wie es sich vom allgemeinen Matter/Thread/Zigbee-Grundlagenartikel auf dieser Seite unterscheidet.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer und Home-Assistant-Nutzer, die verfolgen, was sich an der Matter-Spezifikation geändert hat',
    primaryTerm: 'matter 1.6 smart home',
    targetKeywords: [
      'matter 1.6 smart home',
      'was ist neu in matter 1.6',
      'matter spezifikation update',
      'matter abwaertskompatibilitaet',
      'matter geraetetypen 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6 (veröffentlicht am 17. Juni 2026 von der Connectivity Standards Alliance) ist die aktuelle Version des Smart-Home-Standards Matter und fügt NFC-basiertes Commissioning, Joint-Fabric-Mehr-Ökosystem-Geräteverwaltung und Thermostat-Vorschläge hinzu, bleibt dabei aber voll abwärtskompatibel mit bestehenden 1.x-zertifizierten Geräten.** Energiemanagement-Gerätetypen (Wechselrichter, Batterien, Wärmepumpen) wurden bereits früher, über Matter 1.3-1.5 hinweg, hinzugefügt und werden an anderer Stelle in diesem Cluster behandelt — Matter 1.6 selbst ist ein Setup- und Mehr-Ökosystem-Release, kein energiefokussiertes.',
    quickAnswerTop: {
      de: {
        question: 'Was ist neu in Matter 1.6?',
        answer:
          'Matter 1.6 (veröffentlicht am 17. Juni 2026) fügt NFC-basiertes Geräte-Setup, Joint Fabric — womit mehrere vom Nutzer autorisierte Controller ein gemeinsames Matter-Netzwerk gemeinsam verwalten können — und Thermostat-Vorschläge hinzu, eine standardisierte Möglichkeit für Ökosysteme, Thermostat-Änderungen vorzuschlagen (nicht zu erzwingen). Bestehende 1.x-zertifizierte Geräte bleiben voll kompatibel; das Release fügt Fähigkeiten hinzu, statt das Basisprotokoll zu ersetzen. Energiemanagement-Gerätetypen sind in 1.6 nicht neu — die kamen über Matter 1.3-1.5.',
        bullets: [
          'Matter 1.6, veröffentlicht am 17. Juni 2026: NFC-Setup, Joint-Fabric-Mehr-Ökosystem-Freigabe, Thermostat-Vorschläge',
          'Bestehende Matter-1.x-Geräte bleiben kompatibel — das ist additiv, kein Breaking Change',
          'Zu unterscheiden von Thread (der Netzwerkschicht) und vom allgemeinen Protokoll-Grundlagenartikel und Leitfaden zur lokalen Steuerung dieses Clusters',
          'Energiemanagement-Gerätetypen (Wechselrichter, Batterien, Wärmepumpen) kamen bereits früher, in Matter 1.3-1.5 — nicht neu in 1.6',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was sich geändert hat', anchor: 'what-changed' },
      { label: 'Abwärtskompatibilität', anchor: 'backward-compatibility' },
      { label: 'Wie sich das von anderen Matter-Inhalten hier unterscheidet', anchor: 'differs' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter 1.6 (veröffentlicht am 17. Juni 2026) fügt NFC-basiertes Commissioning, Joint-Fabric-Mehr-Ökosystem-Geräteverwaltung und Thermostat-Vorschläge hinzu und bleibt dabei abwärtskompatibel mit bestehenden 1.x-Geräten — Energiemanagement-Gerätetypen kamen bereits früher, in Matter 1.3-1.5, nicht in 1.6.' },
      { type: 'plain-terms', content: 'Matter wird regelmäßig mit neuen Fähigkeiten aktualisiert, ähnlich wie ein Betriebssystem Versionsupdates erhält. Dieses Update fügt hauptsächlich eine neue Möglichkeit hinzu, Geräte per NFC einzurichten, eine Möglichkeit für mehrere Smart-Home-Systeme, die Steuerung desselben Geräts zu teilen, und eine standardisierte Möglichkeit für ein Thermostat, vorgeschlagene Temperaturänderungen zu erhalten (und selbst zu entscheiden, ob es sie übernimmt). Geräte, die du bereits besitzt und die eine ältere Matter-Version nutzen, funktionieren weiterhin genau wie zuvor.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Matter 1.6 (veröffentlicht am 17. Juni 2026) ist die aktuelle Spezifikationsversion — die wichtigsten Änderungen sind NFC-Setup, Joint Fabric und Thermostat-Vorschläge',
          'Bestehende Matter-1.x-Geräte bleiben voll kompatibel — nichts bricht',
          'Zu unterscheiden von Thread (der Netzwerkschicht unter Matter) und von Thread/Wi-Fi-7-Router-Überlegungen',
          'Auch zu unterscheiden vom allgemeinen Protokoll-Grundlagenartikel dieses Clusters (Matter/Thread/Zigbee/Z-Wave-Überblick) und dem Leitfaden zur lokalen Steuerung (Commissioning/Vermeiden von Cloud-Bridges)',
          'Energiemanagement-Gerätetypen (Wechselrichter, Batterien, Wärmepumpen) sind in 1.6 nicht neu — die wurden bereits früher, über Matter 1.3-1.5 hinweg, eingeführt',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'Was sich geändert hat',
        content:
          '**Matter 1.6s drei wichtigste Neuerungen sind NFC-basiertes Commissioning, Joint Fabric und Thermostat-Vorschläge — ein fokussiertes Release rund um Tools und Koordination statt einer neuen Gerätekategorie.**',
        items: [
          'NFC-Setup: Der komplette Geräte-Commissioning-Austausch kann jetzt per NFC erfolgen, statt nur über QR-Code-Scan und Bluetooth.',
          'Joint Fabric: erweitert das bestehende Multi-Admin-Toolkit, sodass mehrere vom Nutzer autorisierte Controller ein gemeinsames Matter-Netzwerk gemeinsam verwalten können — ein Gerät wird so über beteiligte Ökosysteme hinweg zugänglich, statt an den Hub gebunden zu sein, der es zuerst eingerichtet hat.',
          'Thermostat-Vorschläge: standardisiert, wie Ökosysteme Thermostat-Änderungen empfehlen — statt einen direkten Befehl zu senden, sendet ein Controller einen zeitlich begrenzten Vorschlag, den das Thermostat selbst bewertet.',
          'Die Revision ist auf Protokollebene additiv: Sie definiert neue Dinge, die Matter *beschreiben kann*, ohne Unterstützung für bestehende Gerätetypen zu entfernen oder zu beschädigen. Energiemanagement-Gerätetypen (Wechselrichter, Batterien, EV-Ladegeräte, Wärmepumpen) waren nicht Teil dieses Releases — siehe den Matter-Wechselrichter-/Wärmepumpen-Integrationsleitfaden dieses Clusters für die frühere (Matter 1.3-1.5) Arbeit dazu.',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: 'Abwärtskompatibilität',
        content:
          '**Ein Gerät, das gegen eine ältere Matter-Version zertifiziert ist, funktioniert weiterhin mit einem Hub oder Controller, der die neuere Spezifikation ausführt — du musst bestehende Matter-Geräte nicht ersetzen.**',
        items: [
          'Deine bestehenden Matter-Lampen, -Schlösser und -Sensoren benötigen keine Änderungen, wenn Home Assistant oder ein anderer Controller Unterstützung für die neuere Spezifikationsrevision hinzufügt.',
          'Neue Gerätetypen (wie Energiemanagement) sind nur nutzbar, wenn ein bestimmtes Produkt sie tatsächlich implementiert — der Besitz älterer Matter-Hardware verleiht ihr nicht rückwirkend neue Fähigkeiten.',
          'Die eigene Matter-1.6-Ankündigung der CSA beschreibt es als additiv — keine Breaking Changes an bestehenden Gerätetypen wurden im Release erwähnt. Wie bei jedem Spezifikations-Update solltest du bei einem seltenen oder ungewöhnlichen Feld die Release-Notes des jeweiligen Geräts prüfen.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'Wie sich das von anderen Matter-Inhalten hier unterscheidet',
        content:
          '**Dieser Artikel behandelt die Spezifikationsrevision selbst; der allgemeine Protokoll-Grundlagenartikel erklärt Matter/Thread/Zigbee/Z-Wave auf konzeptioneller Ebene, und der Leitfaden zur lokalen Steuerung behandelt Commissioning und das Vermeiden von Cloud-Bridges — lies alle drei für das vollständige Bild.**',
        items: [
          'Wenn du fragst "Was ist Matter und wie schneidet es im Vergleich zu Zigbee/Z-Wave ab", beginne mit dem allgemeinen Protokoll-Grundlagenartikel.',
          'Wenn du fragst "Wie richte ich ein Matter-Gerät lokal ohne Cloud-Bridge ein", siehe den Leitfaden zur lokalen Steuerung.',
          'Wenn du fragst "Was hat sich kürzlich an der Spezifikation geändert, und braucht meine Hardware ein Update", ist dieser Artikel der richtige — und er verweist auf den Energie-Integrationsleitfaden, wenn du speziell nach der früheren (1.3-1.5) Energiemanagement-Arbeit suchst, da diese nicht Teil von 1.6 ist.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Muss ich meine bestehenden Matter-Geräte aktualisieren?', a: 'Nein — bestehende 1.x-zertifizierte Geräte funktionieren ohne jedes Update weiter. Neue Fähigkeiten wie NFC-Setup oder Joint Fabric spielen nur eine Rolle, wenn du neue Hardware oder einen neuen Controller kaufst, der sie implementiert.' },
          { q: 'Was ist die größte praktische Änderung in Matter 1.6?', a: 'Joint Fabric — damit können mehrere vom Nutzer autorisierte Controller ein gemeinsames Matter-Netzwerk gemeinsam verwalten, sodass ein Gerät wirklich über Ökosysteme hinweg geteilt werden kann, statt dem Hub zu gehören, der es zuerst eingerichtet hat. NFC-Setup und Thermostat-Vorschläge sind die beiden anderen wichtigsten Neuerungen. Energiemanagement-Gerätetypen (Wechselrichter, Batterien, Wärmepumpen) sind in diesem Release nicht neu — siehe den Matter-Wechselrichter-/Wärmepumpen-Integrationsleitfaden für diese frühere Arbeit.' },
          { q: 'Betrifft das Thread?', a: 'Thread ist die Netzwerkschicht, über die Matter oft läuft; Matter 1.6 ist eine Änderung der Matter-Anwendungsschicht, nicht von Thread selbst. Siehe den Leitfaden zu Thread und Wi-Fi-7-Routern für Änderungen auf Netzwerkebene.' },
          { q: 'Ist meine Hub-Software mit Matter 1.6 kompatibel?', a: 'Hub-Software braucht ein eigenes Update, um ein neues Spezifikations-Release zu unterstützen — das geschieht nicht automatisch. Home Assistant (verifiziert am 16.07.2026 gegen den eigenen Blog von home-assistant.io) unterstützt zum Schreibzeitpunkt vollständig Matter 1.5.1, mit Matter-1.6-Unterstützung in aktivem Beta statt vollständig veröffentlicht — prüfe die aktuellen Release-Notes deines jeweiligen Hubs, statt von Tag-1-Unterstützung für das neueste Spezifikations-Release auszugehen.' },
          { q: 'Wie unterscheidet sich das vom allgemeinen Matter/Thread/Zigbee-Erklärartikel auf dieser Seite?', a: 'Dieser Artikel erklärt die Protokolle konzeptionell und vergleicht sie. Dieser Artikel hier behandelt, was sich konkret in Matter 1.6 geändert hat — ein engerer, update-fokussierter Umfang.' },
          { q: 'Wo kann ich die aktuelle offizielle Spezifikationsversion prüfen?', a: 'Die Connectivity Standards Alliance (csa-iot.org) veröffentlicht und kündigt die aktuelle Matter-Spezifikation direkt an — prüfe dort, statt dich auf Sekundärquellen oder Marketingmaterial für die genaue Versionsnummer zu verlassen.' },
          { q: 'Unterstützen alle Matter-Controller Matter 1.6 sofort?', a: 'Nein — dass ein Spezifikations-Release veröffentlicht wird, bedeutet nicht, dass jeder Hub es am ersten Tag implementiert. Der eigene Blog von Home Assistant bestätigt, dass die 1.6-Unterstützung zum Schreibzeitpunkt in aktivem Beta ist statt vollständig veröffentlicht; Apple Home, Google Home und SmartThings haben jeweils ihre eigenen unabhängigen Rollout-Zeitpläne, die dieser Artikel nicht verfolgt — prüfe die aktuellen Release-Notes deines jeweiligen Controllers.' },
          { q: 'Ändert das, wie Matter-Geräte eingerichtet werden?', a: 'Nicht für bestehende Methoden — QR-Code- und Bluetooth-Commissioning funktionieren weiterhin genauso. Matter 1.6 fügt NFC als zusätzliche Commissioning-Option hinzu; es entfernt oder ändert nicht den bestehenden Prozess. Siehe den Leitfaden zur lokalen Steuerung für die Commissioning-Anleitung.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protokolle erklärt](/de/smart-home/smart-home-protocols-explained) — der allgemeine Grundlagenartikel',
          '[Matter & lokale Steuerung: Ein internetunabhängiges Smart Home](/de/smart-home/matter-local-control-guide) — Commissioning und Vermeiden von Cloud-Bridges',
          '[Matter-Integration für Solar-Wechselrichter und Wärmepumpen](/de/smart-home/matter-solar-inverter-heat-pump-integration) — die Energiemanagement-Gerätetypen, bereits früher in Matter 1.3-1.5 hinzugefügt, nicht in 1.6',
          '[Thread und Wi-Fi-7-Router für Smart Homes](/de/smart-home/thread-14-wifi-7-routers-guide) — die Netzwerkschicht',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 1.6 erklärt: Was ist neu (2027)',
      description: 'Was ist neu in Matter 1.6: NFC-Setup, Joint Fabric, Thermostat-Vorschläge und Abwärtskompatibilität mit 1.x-Geräten.',
      url: 'https://www.promptquorum.com/de/smart-home/matter-1-6-explained',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter Smart-Home-Protokoll' }, { '@type': 'Thing', name: 'Matter-Gerätetypen' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Muss ich meine bestehenden Matter-Geräte aktualisieren?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — bestehende 1.x-zertifizierte Geräte funktionieren ohne jedes Update weiter.' } },
        { '@type': 'Question', name: 'Was ist die größte praktische Änderung in Matter 1.6?', acceptedAnswer: { '@type': 'Answer', text: 'Joint Fabric, womit mehrere vom Nutzer autorisierte Controller ein gemeinsames Matter-Netzwerk gemeinsam verwalten können — plus NFC-Setup und Thermostat-Vorschläge.' } },
        { '@type': 'Question', name: 'Betrifft das Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Thread ist die Netzwerkschicht, über die Matter oft läuft; Matter 1.6 ist eine Änderung der Matter-Anwendungsschicht, nicht von Thread selbst.' } },
        { '@type': 'Question', name: 'Wo kann ich die aktuelle offizielle Spezifikationsversion prüfen?', acceptedAnswer: { '@type': 'Answer', text: 'Die Connectivity Standards Alliance veröffentlicht die aktuelle Matter-Spezifikation direkt.' } },
        { '@type': 'Question', name: 'Ändert das, wie Matter-Geräte eingerichtet werden?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — Commissioning nutzt denselben Prozess, unabhängig davon, welche Gerätetypen die Spezifikation definiert.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-fr.webp',
    title: 'Matter 1.6 expliqué : les nouveautés (2027)',
    seoTitle: 'Matter 1.6 expliqué (2027)',
    intro:
      "Matter 1.6, sorti le 17 juin 2026, est la version actuelle du standard maison connectée Matter. Ses ajouts phares sont la configuration par NFC, Joint Fabric (permettant à plusieurs écosystèmes de co-administrer un même appareil) et les Suggestions de thermostat — pas de nouveaux types d'appareils de gestion énergétique, arrivés plus tôt via Matter 1.3-1.5 et couverts ailleurs dans ce cluster. Cet article explique ce qui a changé spécifiquement dans la version 1.6 et en quoi cela diffère du guide général sur les protocoles et du guide de contrôle local déjà présents sur ce site.",
    metaDescription:
      "Les nouveautés de Matter 1.6 (sorti le 17 juin 2026) : configuration NFC, partage multi-écosystème Joint Fabric, Suggestions de thermostat, et compatibilité ascendante totale avec les appareils 1.x.",
    twitterDescription:
      "Matter 1.6 expliqué : configuration NFC, Joint Fabric, Suggestions de thermostat, compatibilité ascendante, et en quoi cela diffère du guide général Matter/Thread/Zigbee déjà sur ce site.",
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de maison connectée et utilisateurs de Home Assistant suivant les évolutions de la spécification Matter',
    primaryTerm: 'matter 1.6 maison connectee',
    targetKeywords: [
      'matter 1.6 maison connectee',
      'nouveautes matter 1.6',
      'mise a jour specification matter',
      'compatibilite ascendante matter',
      'types appareils matter 2027',
    ],
    leadAnswerBlock:
      "**Matter 1.6 (sorti le 17 juin 2026 par la Connectivity Standards Alliance) est la version actuelle du standard maison connectée Matter, ajoutant l'appairage par NFC, le partage multi-écosystème Joint Fabric et les Suggestions de thermostat, tout en restant totalement compatible avec les appareils déjà certifiés 1.x.** Les types d'appareils de gestion énergétique (onduleurs, batteries, pompes à chaleur) ont été ajoutés plus tôt, via Matter 1.3-1.5, et sont couverts ailleurs dans ce cluster — Matter 1.6 lui-même est une version axée sur la configuration et le multi-écosystème, pas sur l'énergie.",
    quickAnswerTop: {
      fr: {
        question: 'Quelles sont les nouveautés de Matter 1.6 ?',
        answer:
          "Matter 1.6 (sorti le 17 juin 2026) ajoute la configuration d'appareil par NFC, Joint Fabric — qui permet à plusieurs contrôleurs autorisés par l'utilisateur de co-administrer un même réseau Matter partagé — et les Suggestions de thermostat, un moyen standardisé pour les écosystèmes de proposer (et non forcer) des changements de thermostat. Les appareils déjà certifiés 1.x restent totalement compatibles ; la version ajoute des capacités plutôt que de remplacer le protocole de base. Les types d'appareils de gestion énergétique ne sont pas nouveaux dans la 1.6 — ils sont arrivés via Matter 1.3-1.5.",
        bullets: [
          'Matter 1.6, sorti le 17 juin 2026 : configuration NFC, partage multi-écosystème Joint Fabric, Suggestions de thermostat',
          'Les appareils Matter 1.x existants restent compatibles — additif, pas de changement cassant',
          "Distinct de Thread (la couche réseau) et du guide général sur les protocoles et du guide de contrôle local de ce cluster",
          "Les types d'appareils de gestion énergétique (onduleurs, batteries, pompes à chaleur) sont arrivés plus tôt, dans Matter 1.3-1.5 — pas nouveaux dans la 1.6",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Ce qui a changé', anchor: 'what-changed' },
      { label: 'Compatibilité ascendante', anchor: 'backward-compatibility' },
      { label: "En quoi cela diffère des autres contenus Matter ici", anchor: 'differs' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Matter 1.6 (sorti le 17 juin 2026) ajoute l'appairage par NFC, le partage multi-écosystème Joint Fabric et les Suggestions de thermostat, tout en restant compatible avec les appareils 1.x existants — les types d'appareils de gestion énergétique sont arrivés plus tôt, dans Matter 1.3-1.5, pas dans la 1.6." },
      { type: 'plain-terms', content: "Matter est régulièrement mis à jour avec de nouvelles capacités, un peu comme un système d'exploitation reçoit des mises à jour de version. Cette mise à jour ajoute surtout un nouveau moyen de configurer les appareils via NFC, un moyen pour plusieurs systèmes de maison connectée de partager le contrôle d'un même appareil, et un moyen standardisé pour un thermostat de recevoir (et de choisir d'accepter ou non) des changements de température suggérés. Les appareils que vous possédez déjà avec une ancienne version de Matter continuent de fonctionner exactement comme avant." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Matter 1.6 (sorti le 17 juin 2026) est la version actuelle de la spécification — ses changements phares sont la configuration NFC, Joint Fabric et les Suggestions de thermostat",
          'Les appareils Matter 1.x existants restent totalement compatibles — rien ne casse',
          "Distinct de Thread (la couche réseau sous Matter) et des considérations Thread/routeurs Wi-Fi 7",
          "Distinct également du guide général sur les protocoles de ce cluster (vue d'ensemble Matter/Thread/Zigbee/Z-Wave) et du guide de contrôle local (appairage/éviter les ponts cloud)",
          "Les types d'appareils de gestion énergétique (onduleurs, batteries, pompes à chaleur) ne sont pas nouveaux dans la 1.6 — ils ont été introduits plus tôt, via Matter 1.3-1.5",
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'Ce qui a changé',
        content:
          "**Les trois ajouts phares de Matter 1.6 sont l'appairage par NFC, Joint Fabric et les Suggestions de thermostat — une version ciblée sur les outils et la coordination plutôt qu'une nouvelle catégorie d'appareils.**",
        items: [
          "Configuration NFC : tout l'échange d'appairage de l'appareil peut désormais se faire par NFC, plutôt que uniquement par scan de QR code et Bluetooth.",
          "Joint Fabric : étend la boîte à outils Multi-Admin existante pour que plusieurs contrôleurs autorisés par l'utilisateur puissent co-administrer un même réseau Matter partagé, rendant un appareil accessible à travers les écosystèmes participants plutôt que lié au hub qui l'a appairé en premier.",
          "Suggestions de thermostat : standardise la façon dont les écosystèmes recommandent des changements de thermostat — au lieu d'envoyer une commande directe, un contrôleur envoie une suggestion limitée dans le temps que le thermostat évalue lui-même.",
          "La révision est additive au niveau du protocole : elle définit de nouvelles choses que Matter *peut* décrire, sans supprimer ni casser la prise en charge des types d'appareils existants. Les types d'appareils de gestion énergétique (onduleurs, batteries, chargeurs de VE, pompes à chaleur) ne faisaient pas partie de cette version — voir le guide d'intégration Matter onduleur/pompe à chaleur de ce cluster pour ce travail antérieur (Matter 1.3-1.5).",
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: 'Compatibilité ascendante',
        content:
          "**Un appareil certifié pour une version Matter antérieure continue de fonctionner avec un hub ou un contrôleur exécutant la nouvelle spécification — vous n'avez pas besoin de remplacer les appareils Matter existants.**",
        items: [
          "Vos lampes, serrures et capteurs Matter existants n'ont besoin d'aucune modification lorsque Home Assistant ou un autre contrôleur ajoute la prise en charge de la nouvelle révision de spécification.",
          "Les nouveaux types d'appareils (comme la gestion énergétique) ne sont utilisables que si un produit spécifique les implémente — posséder du matériel Matter plus ancien ne lui confère pas rétroactivement de nouvelles capacités.",
          "L'annonce Matter 1.6 de la CSA elle-même la décrit comme additive — aucun changement cassant sur les types d'appareils existants n'a été mentionné dans la version. Comme pour toute mise à jour de spécification, vérifiez les notes de version d'un appareil spécifique si vous dépendez d'un champ rare ou inhabituel.",
        ],
      },
      differs: {
        id: 'differs',
        title: "En quoi cela diffère des autres contenus Matter ici",
        content:
          "**Cet article couvre la révision de la spécification elle-même ; le guide général sur les protocoles explique Matter/Thread/Zigbee/Z-Wave à un niveau conceptuel, et le guide de contrôle local couvre l'appairage et l'évitement des ponts cloud — lisez les trois pour la vue d'ensemble.**",
        items: [
          'Si vous vous demandez « qu\'est-ce que Matter et comment se compare-t-il à Zigbee/Z-Wave », commencez par le guide général sur les protocoles.',
          'Si vous vous demandez « comment appairer un appareil Matter localement sans pont cloud », voir le guide de contrôle local.',
          'Si vous vous demandez « qu\'est-ce qui a changé récemment dans la spécification, et mon matériel a-t-il besoin d\'une mise à jour », cet article est le bon — et il renvoie vers le guide d\'intégration énergétique si vous cherchez spécifiquement le travail antérieur (1.3-1.5) sur la gestion énergétique, puisque cela ne fait pas partie de la 1.6.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Dois-je mettre à jour mes appareils Matter existants ?', a: "Non — les appareils déjà certifiés 1.x continuent de fonctionner sans aucune mise à jour. Les nouvelles capacités comme la configuration NFC ou Joint Fabric ne comptent que si vous achetez du nouveau matériel ou un nouveau contrôleur qui les implémente." },
          { q: 'Quel est le plus grand changement pratique dans Matter 1.6 ?', a: "Joint Fabric — il permet à plusieurs contrôleurs autorisés par l'utilisateur de co-administrer un même réseau Matter partagé, afin qu'un appareil puisse être véritablement partagé entre écosystèmes plutôt qu'appartenir au hub qui l'a appairé en premier. La configuration NFC et les Suggestions de thermostat sont les deux autres ajouts phares. Les types d'appareils de gestion énergétique (onduleurs, batteries, pompes à chaleur) ne sont pas nouveaux dans cette version — voir le guide d'intégration Matter onduleur/pompe à chaleur pour ce travail antérieur." },
          { q: 'Cela affecte-t-il Thread ?', a: "Thread est la couche réseau sur laquelle Matter fonctionne souvent ; Matter 1.6 est un changement de la couche applicative de Matter, pas de Thread lui-même. Voir le guide sur Thread et les routeurs Wi-Fi 7 pour les changements au niveau réseau." },
          { q: 'Mon logiciel de hub est-il compatible avec Matter 1.6 ?', a: "Le logiciel du hub a besoin de sa propre mise à jour pour prendre en charge une nouvelle version de spécification — ce n'est pas automatique. Home Assistant (vérifié le 16/07/2026 par rapport au blog officiel de home-assistant.io) prend entièrement en charge Matter 1.5.1 au moment de l'écriture, la prise en charge de Matter 1.6 étant en bêta active plutôt que pleinement publiée — vérifiez les notes de version actuelles de votre hub spécifique plutôt que de supposer une prise en charge dès le premier jour de la dernière version de spécification." },
          { q: "En quoi cela diffère-t-il de l'explicatif général Matter/Thread/Zigbee de ce site ?", a: 'Cet article explique les protocoles de manière conceptuelle et les compare. Cet article-ci couvre ce qui a spécifiquement changé dans Matter 1.6 — une portée plus étroite, centrée sur la mise à jour.' },
          { q: 'Où puis-je vérifier la version officielle actuelle de la spécification ?', a: "La Connectivity Standards Alliance (csa-iot.org) publie et annonce directement la spécification Matter actuelle — vérifiez là plutôt que de vous fier à des sources secondaires ou du matériel marketing pour le numéro de version exact." },
          { q: 'Tous les contrôleurs Matter prennent-ils en charge Matter 1.6 immédiatement ?', a: "Non — qu'une version de spécification soit publiée ne signifie pas que chaque hub l'implémente dès le premier jour. Le blog officiel de Home Assistant confirme que la prise en charge de la 1.6 est en bêta active plutôt que pleinement publiée au moment de l'écriture ; Apple Home, Google Home et SmartThings ont chacun leur propre calendrier de déploiement indépendant que cet article ne suit pas — vérifiez les notes de version actuelles de votre contrôleur spécifique." },
          { q: 'Cela change-t-il la façon dont les appareils Matter sont appairés ?', a: "Pas pour les méthodes existantes — l'appairage par QR code et Bluetooth fonctionne toujours de la même manière. Matter 1.6 ajoute le NFC comme option d'appairage supplémentaire ; cela ne supprime ni ne modifie le processus existant. Voir le guide de contrôle local pour le tutoriel d'appairage." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave : protocoles expliqués](/fr/smart-home/smart-home-protocols-explained) — le guide général',
          '[Matter et contrôle local : une maison connectée indépendante d\'internet](/fr/smart-home/matter-local-control-guide) — appairage et évitement des ponts cloud',
          '[Intégration Matter pour onduleurs solaires et pompes à chaleur](/fr/smart-home/matter-solar-inverter-heat-pump-integration) — les types d\'appareils de gestion énergétique, ajoutés plus tôt dans Matter 1.3-1.5, pas dans la 1.6',
          '[Thread et routeurs Wi-Fi 7 pour maisons connectées](/fr/smart-home/thread-14-wifi-7-routers-guide) — la couche réseau',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 1.6 expliqué : les nouveautés (2027)',
      description: "Les nouveautés de Matter 1.6 : configuration NFC, Joint Fabric, Suggestions de thermostat, et compatibilité ascendante avec les appareils 1.x.",
      url: 'https://www.promptquorum.com/fr/smart-home/matter-1-6-explained',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Protocole maison connectée Matter' }, { '@type': 'Thing', name: "Types d'appareils Matter" }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Dois-je mettre à jour mes appareils Matter existants ?', acceptedAnswer: { '@type': 'Answer', text: "Non — les appareils déjà certifiés 1.x continuent de fonctionner sans aucune mise à jour." } },
        { '@type': 'Question', name: 'Quel est le plus grand changement pratique dans Matter 1.6 ?', acceptedAnswer: { '@type': 'Answer', text: "Joint Fabric, qui permet à plusieurs contrôleurs autorisés par l'utilisateur de co-administrer un même réseau Matter partagé — plus la configuration NFC et les Suggestions de thermostat." } },
        { '@type': 'Question', name: 'Cela affecte-t-il Thread ?', acceptedAnswer: { '@type': 'Answer', text: "Thread est la couche réseau sur laquelle Matter fonctionne souvent ; Matter 1.6 est un changement de la couche applicative de Matter, pas de Thread lui-même." } },
        { '@type': 'Question', name: 'Où puis-je vérifier la version officielle actuelle de la spécification ?', acceptedAnswer: { '@type': 'Answer', text: "La Connectivity Standards Alliance publie directement la spécification Matter actuelle." } },
        { '@type': 'Question', name: 'Cela change-t-il la façon dont les appareils Matter sont appairés ?', acceptedAnswer: { '@type': 'Answer', text: "Non — l'appairage utilise le même processus quels que soient les types d'appareils définis par la spécification." } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-ja.webp',
    title: 'Matter 1.6を解説：新機能とは（2027年）',
    seoTitle: 'Matter 1.6解説（2027年）',
    intro:
      '2026年6月17日にリリースされたMatter 1.6は、Matterスマートホーム規格の現行バージョンです。主な追加機能はNFCベースのセットアップ、Joint Fabric（複数のエコシステムが同じデバイスを共同管理できる仕組み）、そしてサーモスタット提案であり、新しいエネルギー管理デバイスタイプではありません — それらはMatter 1.3〜1.5にかけて既に導入されており、このクラスターの別記事で扱っています。この記事では1.6で具体的に何が変わったのか、そしてこのサイトにある一般的なプロトコル解説やローカル制御ガイドとどう違うのかを説明します。',
    metaDescription:
      'Matter 1.6（2026年6月17日リリース）の新機能：NFCセットアップ、Joint Fabricによる複数エコシステム共有、サーモスタット提案、そして1.xデバイスとの完全な後方互換性。',
    twitterDescription:
      'Matter 1.6解説：NFCセットアップ、Joint Fabric、サーモスタット提案、後方互換性、そしてこのサイトにある一般的なMatter/Thread/Zigbee解説との違い。',
    readTime: '読了時間6分',
    educationalLevel: 'Intermediate',
    audience: 'Matter仕様の変更点を追っているスマートホーム所有者やHome Assistantユーザー',
    primaryTerm: 'matter 1.6 スマートホーム',
    targetKeywords: [
      'matter 1.6 スマートホーム',
      'matter 1.6 新機能',
      'matter 仕様更新',
      'matter 後方互換性',
      'matter デバイスタイプ 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6（Connectivity Standards Allianceにより2026年6月17日にリリース）はMatterスマートホーム規格の現行バージョンで、NFCベースのコミッショニング、Joint Fabricによる複数エコシステムでのデバイス共有、サーモスタット提案を追加しつつ、既存の1.x認証デバイスとの完全な後方互換性を維持しています。** エネルギー管理デバイスタイプ（インバーター、バッテリー、ヒートポンプ）はMatter 1.3〜1.5にかけて既に追加されており、このクラスターの別記事で扱っています — Matter 1.6自体はセットアップと複数エコシステムに関するリリースであり、エネルギーに焦点を当てたものではありません。',
    quickAnswerTop: {
      ja: {
        question: 'Matter 1.6の新機能は何ですか？',
        answer:
          'Matter 1.6（2026年6月17日リリース）は、NFCベースのデバイスセットアップ、複数のユーザー承認済みコントローラーが単一の共有Matterネットワークを共同管理できるJoint Fabric、そしてエコシステムがサーモスタットの変更を（強制ではなく）提案するための標準化された方法であるサーモスタット提案を追加します。既存の1.x認証デバイスは完全に互換性を維持します — このリリースは基本プロトコルを置き換えるのではなく、機能を追加するものです。エネルギー管理デバイスタイプは1.6で新しいものではありません — それらはMatter 1.3〜1.5にかけて導入されました。',
        bullets: [
          '2026年6月17日リリースのMatter 1.6：NFCセットアップ、Joint Fabricによる複数エコシステム共有、サーモスタット提案',
          '既存のMatter 1.xデバイスは互換性を維持 — これは追加的な変更であり、破壊的変更ではない',
          'Thread（ネットワーク層）や、このクラスターの一般的なプロトコル解説・ローカル制御ガイドとは異なる',
          'エネルギー管理デバイスタイプ（インバーター、バッテリー、ヒートポンプ）はMatter 1.3〜1.5にかけて既に導入済み — 1.6での新機能ではない',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: '何が変わったか', anchor: 'what-changed' },
      { label: '後方互換性', anchor: 'backward-compatibility' },
      { label: 'このサイトの他のMatterコンテンツとの違い', anchor: 'differs' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter 1.6（2026年6月17日リリース）はNFCベースのコミッショニング、Joint Fabricによる複数エコシステムでのデバイス共有、サーモスタット提案を追加しつつ、既存の1.xデバイスとの後方互換性を維持します — エネルギー管理デバイスタイプはMatter 1.3〜1.5にかけて既に導入されており、1.6での新機能ではありません。' },
      { type: 'plain-terms', content: 'Matterはオペレーティングシステムがバージョンアップデートを受けるのと同じように、定期的に新機能で更新されます。この更新では主に、NFCを使ったデバイスのセットアップ方法、複数のスマートホームシステムが同じデバイスの制御を共有する方法、そしてサーモスタットが提案された温度変更を受け取り（受け入れるかどうかを自分で選べる）標準的な方法が追加されます。すでに所有している古いMatterバージョンを使うデバイスは、これまでと全く同じように動作し続けます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'Matter 1.6（2026年6月17日リリース）は現行の仕様バージョンです — 主な変更点はNFCセットアップ、Joint Fabric、サーモスタット提案です',
          '既存のMatter 1.xデバイスは完全に互換性を維持 — 何も壊れません',
          'これはThread（Matterの下にあるネットワーク層）やThread/Wi-Fi 7ルーターに関する検討とは別のものです',
          'このクラスターの一般的なプロトコル解説（Matter/Thread/Zigbee/Z-Wave概要）やローカル制御ガイド（コミッショニング/クラウドブリッジの回避）とも異なります',
          'エネルギー管理デバイスタイプ（インバーター、バッテリー、ヒートポンプ）は1.6での新機能ではありません — それらはMatter 1.3〜1.5にかけて既に導入されています',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: '何が変わったか',
        content:
          '**Matter 1.6の3つの主要な追加機能は、NFCベースのコミッショニング、Joint Fabric、サーモスタット提案です — 新しいデバイスカテゴリではなく、ツールと連携に焦点を当てたリリースです。**',
        items: [
          'NFCセットアップ：デバイスのコミッショニングのやり取り全体を、QRコードのスキャンやBluetoothだけでなく、NFC経由で行えるようになりました。',
          'Joint Fabric：既存のMulti-Adminツールキットを拡張し、複数のユーザー承認済みコントローラーが単一の共有Matterネットワークを共同管理できるようにします。これにより、デバイスは最初にコミッショニングしたハブに縛られるのではなく、参加しているエコシステム全体でアクセス可能になります。',
          'サーモスタット提案：エコシステムがサーモスタットの変更を推奨する方法を標準化します — 直接コマンドを送る代わりに、コントローラーは期限付きの提案を送り、サーモスタット自身がそれを評価します。',
          'この改訂はプロトコルレベルで追加的なものです：既存のデバイスタイプのサポートを削除したり壊したりすることなく、Matterが*記述できる*新しい事項を定義します。エネルギー管理デバイスタイプ（インバーター、バッテリー、EV充電器、ヒートポンプ）は今回のリリースには含まれていません — それ以前（Matter 1.3〜1.5）の作業についてはこのクラスターのMatterインバーター/ヒートポンプ統合ガイドを参照してください。',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: '後方互換性',
        content:
          '**古いMatterバージョンで認証されたデバイスは、新しい仕様を実行するハブやコントローラーでも引き続き動作します — 既存のMatterデバイスを買い替える必要はありません。**',
        items: [
          'Home Assistantや他のコントローラーが新しい仕様改訂のサポートを追加しても、既存のMatter照明、ロック、センサーは変更が不要です。',
          '新しいデバイスタイプ（エネルギー管理など）は、特定の製品がそれを実装している場合にのみ利用可能です — 古いMatterハードウェアを所有していても、遡って新機能が付与されるわけではありません。',
          'CSA自身のMatter 1.6発表では、追加的なものと説明されています — 既存のデバイスタイプに対する破壊的変更はリリースで言及されていません。他の仕様更新と同様に、まれな、または特殊なフィールドに依存している場合は、特定のデバイスのリリースノートを確認してください。',
        ],
      },
      differs: {
        id: 'differs',
        title: 'このサイトの他のMatterコンテンツとの違い',
        content:
          '**この記事は仕様改訂そのものを扱っています。一般的なプロトコル解説はMatter/Thread/Zigbee/Z-Waveを概念的に説明し、ローカル制御ガイドはコミッショニングとクラウドブリッジの回避を扱っています — 全体像を把握するには3つすべてを読んでください。**',
        items: [
          '「Matterとは何か、Zigbee/Z-Waveと比べてどうなのか」を知りたい場合は、一般的なプロトコル解説から始めてください。',
          '「クラウドブリッジなしでMatterデバイスをローカルでコミッショニングするには」を知りたい場合は、ローカル制御ガイドを参照してください。',
          '「最近仕様で何が変わったのか、自分のハードウェアに更新が必要か」を知りたい場合は、この記事が該当します — そして、1.6には含まれていない以前（1.3〜1.5）のエネルギー管理関連の作業を具体的に探している場合は、エネルギー統合ガイドを紹介しています。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '既存のMatterデバイスを更新する必要がありますか？', a: 'いいえ — 既存の1.x認証デバイスは更新なしで動作し続けます。NFCセットアップやJoint Fabricなどの新機能は、それらを実装した新しいハードウェアや新しいコントローラーを購入する場合にのみ関係します。' },
          { q: 'Matter 1.6における最大の実用的な変更点は何ですか？', a: 'Joint Fabricです — 複数のユーザー承認済みコントローラーが単一の共有Matterネットワークを共同管理できるようになり、デバイスは最初にコミッショニングしたハブに属するのではなく、真にエコシステム間で共有できるようになります。NFCセットアップとサーモスタット提案が他の2つの主要な追加機能です。エネルギー管理デバイスタイプ（インバーター、バッテリー、ヒートポンプ）は今回のリリースでは新しくありません — その以前の作業についてはMatterインバーター/ヒートポンプ統合ガイドを参照してください。' },
          { q: 'これはThreadに影響しますか？', a: 'ThreadはMatterがしばしば動作するネットワーク層です。Matter 1.6はMatterのアプリケーション層の変更であり、Thread自体の変更ではありません。ネットワーク層の変更についてはThreadとWi-Fi 7ルーターのガイドを参照してください。' },
          { q: '私のハブソフトウェアはMatter 1.6と互換性がありますか？', a: 'ハブソフトウェアが新しい仕様リリースをサポートするには、独自の更新が必要です — 自動ではありません。Home Assistant（2026年7月16日にhome-assistant.io自身のブログに対して検証済み）は執筆時点でMatter 1.5.1を完全サポートしており、Matter 1.6サポートは完全にリリースされたものではなく、アクティブなベータ段階にあります — 最新の仕様リリースへの初日サポートを想定するのではなく、お使いの特定のハブの現在のリリースノートを確認してください。' },
          { q: 'このサイトの一般的なMatter/Thread/Zigbee解説とはどう違いますか？', a: 'その記事はプロトコルを概念的に説明し、比較しています。この記事はMatter 1.6で具体的に何が変わったかを扱っています — より狭い、更新に焦点を当てた範囲です。' },
          { q: '現在の公式仕様バージョンはどこで確認できますか？', a: 'Connectivity Standards Alliance（csa-iot.org）が現在のMatter仕様を直接公開・発表しています — 正確なバージョン番号については、二次情報源やマーケティング資料に頼るのではなく、そこで確認してください。' },
          { q: 'すべてのMatterコントローラーがMatter 1.6を即座にサポートしますか？', a: 'いいえ — 仕様リリースが公開されたからといって、すべてのハブが初日にそれを実装するわけではありません。Home Assistant自身のブログでは、執筆時点で1.6サポートは完全にリリースされたものではなく、アクティブなベータ段階にあることが確認されています。Apple Home、Google Home、SmartThingsはそれぞれ独自の展開スケジュールを持っており、この記事では追跡していません — お使いの特定のコントローラーの現在のリリースノートを確認してください。' },
          { q: 'Matterデバイスのコミッショニング方法は変わりますか？', a: '既存の方法については変わりません — QRコードとBluetoothによるコミッショニングは引き続き同じように機能します。Matter 1.6は追加のコミッショニングオプションとしてNFCを加えるだけで、既存のプロセスを削除したり変更したりするものではありません。コミッショニングの手順についてはローカル制御ガイドを参照してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Matter、Thread、Zigbee、Z-Wave：プロトコル解説](/ja/smart-home/smart-home-protocols-explained) — 一般的な解説記事',
          '[Matterとローカル制御：インターネットに依存しないスマートホーム](/ja/smart-home/matter-local-control-guide) — コミッショニングとクラウドブリッジの回避',
          '[太陽光インバーターとヒートポンプ向けMatter統合](/ja/smart-home/matter-solar-inverter-heat-pump-integration) — エネルギー管理デバイスタイプ、Matter 1.3〜1.5で既に追加済み、1.6ではない',
          '[スマートホーム向けThreadとWi-Fi 7ルーター](/ja/smart-home/thread-14-wifi-7-routers-guide) — ネットワーク層',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 1.6を解説：新機能とは（2027年）',
      description: 'Matter 1.6の新機能：NFCセットアップ、Joint Fabric、サーモスタット提案、そして1.xデバイスとの後方互換性。',
      url: 'https://www.promptquorum.com/ja/smart-home/matter-1-6-explained',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matterスマートホームプロトコル' }, { '@type': 'Thing', name: 'Matterデバイスタイプ' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '既存のMatterデバイスを更新する必要がありますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — 既存の1.x認証デバイスは更新なしで動作し続けます。' } },
        { '@type': 'Question', name: 'Matter 1.6における最大の実用的な変更点は何ですか？', acceptedAnswer: { '@type': 'Answer', text: '複数のユーザー承認済みコントローラーが単一の共有Matterネットワークを共同管理できるJoint Fabricに加え、NFCセットアップとサーモスタット提案です。' } },
        { '@type': 'Question', name: 'これはThreadに影響しますか？', acceptedAnswer: { '@type': 'Answer', text: 'ThreadはMatterがしばしば動作するネットワーク層です。Matter 1.6はMatterのアプリケーション層の変更であり、Thread自体の変更ではありません。' } },
        { '@type': 'Question', name: '現在の公式仕様バージョンはどこで確認できますか？', acceptedAnswer: { '@type': 'Answer', text: 'Connectivity Standards Allianceが現在のMatter仕様を直接公開しています。' } },
        { '@type': 'Question', name: 'Matterデバイスのコミッショニング方法は変わりますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — 仕様が定義するデバイスタイプに関わらず、コミッショニングは同じプロセスを使用します。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-zh.webp',
    title: 'Matter 1.6 详解：有哪些新功能（2027年）',
    seoTitle: 'Matter 1.6 详解（2027年）',
    intro:
      '于2026年6月17日发布的Matter 1.6，是Matter智能家居标准的当前版本。其主要新增功能是基于NFC的设置、Joint Fabric（让多个生态系统共同管理同一设备）以及温控器建议——而不是新的能源管理设备类型，那些已在Matter 1.3-1.5中逐步引入，并在本系列的其他文章中介绍。本文将解释1.6版本具体改变了什么，以及它与本网站已有的通用协议入门文章和本地控制指南有何不同。',
    metaDescription:
      'Matter 1.6（2026年6月17日发布）的新功能：NFC设置、Joint Fabric多生态系统共享、温控器建议，以及与1.x设备的完全向后兼容。',
    twitterDescription:
      'Matter 1.6 详解：NFC设置、Joint Fabric、温控器建议、向后兼容性，以及它与本网站通用Matter/Thread/Zigbee入门文章的区别。',
    readTime: '阅读需6分钟',
    educationalLevel: 'Intermediate',
    audience: '关注Matter规范变化的智能家居用户和Home Assistant用户',
    primaryTerm: 'matter 1.6 智能家居',
    targetKeywords: [
      'matter 1.6 智能家居',
      'matter 1.6 新功能',
      'matter 规范更新',
      'matter 向后兼容性',
      'matter 设备类型 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6（由连接标准联盟于2026年6月17日发布）是Matter智能家居标准的当前版本，新增了基于NFC的配对、Joint Fabric多生态系统设备共享以及温控器建议，同时保持与现有1.x认证设备的完全向后兼容。**能源管理设备类型（逆变器、电池、热泵）已在Matter 1.3-1.5中逐步添加，并在本系列的其他文章中介绍——Matter 1.6本身是一次关于设置和多生态系统的发布，而不是专注于能源的发布。',
    quickAnswerTop: {
      zh: {
        question: 'Matter 1.6有哪些新功能？',
        answer:
          'Matter 1.6（2026年6月17日发布）新增了基于NFC的设备设置、Joint Fabric——让多个经用户授权的控制器可以共同管理同一个共享的Matter网络——以及温控器建议，这是一种让生态系统建议（而非强制）温控器变更的标准化方式。现有的1.x认证设备保持完全兼容；此次发布是增加功能，而不是替换基础协议。能源管理设备类型在1.6中并非新增内容——那些是在Matter 1.3-1.5中引入的。',
        bullets: [
          '2026年6月17日发布的Matter 1.6：NFC设置、Joint Fabric多生态系统共享、温控器建议',
          '现有的Matter 1.x设备保持兼容——这是增量式更新，而非破坏性变更',
          '这与Thread（网络层）以及本系列的通用协议入门文章和本地控制指南不同',
          '能源管理设备类型（逆变器、电池、热泵）在更早的Matter 1.3-1.5中就已出现——1.6中并非新增',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '具体改变了什么', anchor: 'what-changed' },
      { label: '向后兼容性', anchor: 'backward-compatibility' },
      { label: '与本站其他Matter内容的区别', anchor: 'differs' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter 1.6（2026年6月17日发布）新增了基于NFC的配对、Joint Fabric多生态系统设备共享以及温控器建议，同时与现有1.x设备保持向后兼容——能源管理设备类型在更早的Matter 1.3-1.5中就已出现，而不是在1.6中。' },
      { type: 'plain-terms', content: 'Matter会定期更新新功能，类似于操作系统会获得版本更新。此次更新主要新增了通过NFC设置设备的新方式、让多个智能家居系统共享控制同一设备的方式，以及让温控器接收（并自行选择是否接受）建议温度变更的标准方式。你已经拥有的、使用旧版Matter的设备将继续像以前一样正常工作。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          'Matter 1.6（2026年6月17日发布）是当前的规范版本——其主要变化是NFC设置、Joint Fabric和温控器建议',
          '现有的Matter 1.x设备保持完全兼容——不会出现故障',
          '这与Thread（Matter底层的网络层）以及Thread/Wi-Fi 7路由器相关考量不同',
          '也与本系列的通用协议入门文章（Matter/Thread/Zigbee/Z-Wave概述）和本地控制指南（配对/避免云桥接）不同',
          '能源管理设备类型（逆变器、电池、热泵）在1.6中并非新增——那些是在更早的Matter 1.3-1.5中引入的',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: '具体改变了什么',
        content:
          '**Matter 1.6的三大主要新增功能是基于NFC的配对、Joint Fabric和温控器建议——这是一次专注于工具和协调的发布，而不是新设备类别的发布。**',
        items: [
          'NFC设置：整个设备配对过程现在可以通过NFC完成，而不仅限于扫描二维码和蓝牙。',
          'Joint Fabric：在现有的多管理员工具包基础上扩展，使多个经用户授权的控制器能够共同管理同一个共享的Matter网络，让设备可以在参与的生态系统间访问，而不是被绑定到最先配对它的中枢。',
          '温控器建议：标准化了生态系统推荐温控器变更的方式——控制器不再发送直接命令，而是发送一个有时限的建议，由温控器自行评估。',
          '此次修订在协议层面是增量式的：它定义了Matter*可以*描述的新内容，而不会移除或破坏对现有设备类型的支持。能源管理设备类型（逆变器、电池、电动车充电器、热泵）不属于此次发布——有关这项更早（Matter 1.3-1.5）的工作，请参见本系列的Matter逆变器/热泵集成指南。',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: '向后兼容性',
        content:
          '**通过旧版Matter认证的设备，在运行更新规范的中枢或控制器上仍可继续使用——你无需更换现有的Matter设备。**',
        items: [
          '当Home Assistant或其他控制器新增对更新规范修订版的支持时，你现有的Matter灯具、门锁和传感器无需任何更改。',
          '新的设备类型（如能源管理）只有在特定产品实际实现了它们时才能使用——拥有较旧的Matter硬件并不会追溯获得新功能。',
          'CSA自己发布的Matter 1.6公告将其描述为增量式更新——发布说明中未提及对现有设备类型的任何破坏性变更。与任何规范更新一样，如果你依赖某个罕见或特殊字段，请查阅具体设备的发布说明。',
        ],
      },
      differs: {
        id: 'differs',
        title: '与本站其他Matter内容的区别',
        content:
          '**本文介绍规范修订本身；通用协议入门文章从概念层面解释Matter/Thread/Zigbee/Z-Wave，本地控制指南涵盖配对和避免云桥接——阅读全部三篇才能获得完整全貌。**',
        items: [
          '如果你想了解"什么是Matter，它与Zigbee/Z-Wave相比如何"，请从通用协议入门文章开始。',
          '如果你想了解"如何在不使用云桥接的情况下本地配对Matter设备"，请参见本地控制指南。',
          '如果你想了解"规范最近有什么变化，我的硬件是否需要更新"，本文正是你需要的——如果你专门想了解更早（1.3-1.5）的能源管理相关工作，本文会指向能源集成指南，因为那部分不属于1.6。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '我需要更新现有的Matter设备吗？', a: '不需要——现有的1.x认证设备无需任何更新即可继续工作。NFC设置或Joint Fabric等新功能只有在你购买实现了这些功能的新硬件或新控制器时才有意义。' },
          { q: 'Matter 1.6中最大的实际变化是什么？', a: 'Joint Fabric——它让多个经用户授权的控制器能够共同管理同一个共享的Matter网络，使设备能够真正在生态系统间共享，而不是归属于最先配对它的中枢。NFC设置和温控器建议是另外两项主要新增功能。能源管理设备类型（逆变器、电池、热泵）在此次发布中并非新增——有关这项更早的工作，请参见Matter逆变器/热泵集成指南。' },
          { q: '这会影响Thread吗？', a: 'Thread是Matter经常运行于其上的网络层；Matter 1.6是对Matter应用层的更改，而不是对Thread本身的更改。有关网络层的变化，请参见Thread和Wi-Fi 7路由器指南。' },
          { q: '我的中枢软件与Matter 1.6兼容吗？', a: '中枢软件需要自行更新才能支持新的规范发布——这不是自动的。Home Assistant（于2026年7月16日对照home-assistant.io官方博客核实）在撰写本文时完全支持Matter 1.5.1，而Matter 1.6支持仍处于活跃测试阶段，尚未完全发布——请查阅你所用具体中枢的当前发布说明，而不要假设最新规范发布会有首日支持。' },
          { q: '这与本站通用的Matter/Thread/Zigbee解说文章有何不同？', a: '那篇文章从概念上解释了这些协议并进行了比较。本文则专门介绍Matter 1.6具体改变了什么——范围更窄，专注于更新内容。' },
          { q: '我在哪里可以查看当前的官方规范版本？', a: '连接标准联盟（csa-iot.org）会直接发布并公告当前的Matter规范——请在那里查阅确切的版本号，而不是依赖二手来源或营销材料。' },
          { q: '所有Matter控制器都会立即支持Matter 1.6吗？', a: '不会——规范发布并不意味着每个中枢都会在首日实现它。Home Assistant官方博客证实，截至撰写本文时，1.6支持仍处于活跃测试阶段而非完全发布；Apple Home、Google Home和SmartThings各自有独立的推出时间表，本文不做追踪——请查阅你所用具体控制器的当前发布说明。' },
          { q: '这会改变Matter设备的配对方式吗？', a: '对现有方法不会——二维码和蓝牙配对方式仍照常运作。Matter 1.6新增NFC作为额外的配对选项；它不会移除或改变现有流程。有关配对步骤，请参见本地控制指南。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Matter、Thread、Zigbee、Z-Wave：协议详解](/zh/smart-home/smart-home-protocols-explained) — 通用入门文章',
          '[Matter与本地控制：不依赖互联网的智能家居](/zh/smart-home/matter-local-control-guide) — 配对与避免云桥接',
          '[面向太阳能逆变器和热泵的Matter集成](/zh/smart-home/matter-solar-inverter-heat-pump-integration) — 能源管理设备类型，已在Matter 1.3-1.5中添加，而非1.6',
          '[面向智能家居的Thread和Wi-Fi 7路由器](/zh/smart-home/thread-14-wifi-7-routers-guide) — 网络层',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 1.6 详解：有哪些新功能（2027年）',
      description: 'Matter 1.6的新功能：NFC设置、Joint Fabric、温控器建议，以及与1.x设备的向后兼容性。',
      url: 'https://www.promptquorum.com/zh/smart-home/matter-1-6-explained',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter智能家居协议' }, { '@type': 'Thing', name: 'Matter设备类型' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '我需要更新现有的Matter设备吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要——现有的1.x认证设备无需任何更新即可继续工作。' } },
        { '@type': 'Question', name: 'Matter 1.6中最大的实际变化是什么？', acceptedAnswer: { '@type': 'Answer', text: 'Joint Fabric，它让多个经用户授权的控制器能够共同管理同一个共享的Matter网络——此外还有NFC设置和温控器建议。' } },
        { '@type': 'Question', name: '这会影响Thread吗？', acceptedAnswer: { '@type': 'Answer', text: 'Thread是Matter经常运行于其上的网络层；Matter 1.6是对Matter应用层的更改，而不是对Thread本身的更改。' } },
        { '@type': 'Question', name: '我在哪里可以查看当前的官方规范版本？', acceptedAnswer: { '@type': 'Answer', text: '连接标准联盟会直接发布当前的Matter规范。' } },
        { '@type': 'Question', name: '这会改变Matter设备的配对方式吗？', acceptedAnswer: { '@type': 'Answer', text: '不会——无论规范定义了哪些设备类型，配对都使用相同的流程。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-es.webp',
    title: 'Matter 1.6 explicado: qué hay de nuevo (2027)',
    seoTitle: 'Matter 1.6 explicado (2027)',
    intro:
      'Matter 1.6, lanzado el 17 de junio de 2026, es la versión actual del estándar de hogar inteligente Matter. Sus principales novedades son la configuración basada en NFC, Joint Fabric (que permite que múltiples ecosistemas coadministren el mismo dispositivo) y las Sugerencias de termostato — no nuevos tipos de dispositivos de gestión energética, que llegaron antes a través de Matter 1.3-1.5 y se cubren en otra parte de este clúster. Este artículo explica qué cambió específicamente en la 1.6 y en qué se diferencia de la guía general de protocolos y la guía de control local ya presentes en este sitio.',
    metaDescription:
      'Qué hay de nuevo en Matter 1.6 (lanzado el 17 de junio de 2026): configuración NFC, uso compartido multi-ecosistema Joint Fabric, Sugerencias de termostato y compatibilidad total con dispositivos 1.x.',
    twitterDescription:
      'Matter 1.6 explicado: configuración NFC, Joint Fabric, Sugerencias de termostato, compatibilidad con versiones anteriores, y en qué se diferencia de la guía general de Matter/Thread/Zigbee de este sitio.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de hogar inteligente y usuarios de Home Assistant que siguen los cambios en la especificación Matter',
    primaryTerm: 'matter 1.6 hogar inteligente',
    targetKeywords: [
      'matter 1.6 hogar inteligente',
      'novedades matter 1.6',
      'actualizacion especificacion matter',
      'compatibilidad hacia atras matter',
      'tipos dispositivos matter 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6 (lanzado el 17 de junio de 2026 por la Connectivity Standards Alliance) es la versión actual del estándar de hogar inteligente Matter, que añade emparejamiento basado en NFC, uso compartido de dispositivos multi-ecosistema Joint Fabric y Sugerencias de termostato, manteniéndose totalmente compatible con los dispositivos ya certificados en 1.x.** Los tipos de dispositivos de gestión energética (inversores, baterías, bombas de calor) se añadieron antes, a través de Matter 1.3-1.5, y se cubren en otra parte de este clúster — Matter 1.6 en sí es un lanzamiento centrado en configuración y multi-ecosistema, no en energía.',
    quickAnswerTop: {
      es: {
        question: '¿Qué hay de nuevo en Matter 1.6?',
        answer:
          'Matter 1.6 (lanzado el 17 de junio de 2026) añade configuración de dispositivos basada en NFC, Joint Fabric — que permite que múltiples controladores autorizados por el usuario coadministren una única red Matter compartida — y Sugerencias de termostato, una forma estandarizada para que los ecosistemas propongan (no impongan) cambios de termostato. Los dispositivos ya certificados en 1.x siguen siendo totalmente compatibles; el lanzamiento añade capacidad en lugar de reemplazar el protocolo base. Los tipos de dispositivos de gestión energética no son nuevos en la 1.6 — llegaron a través de Matter 1.3-1.5.',
        bullets: [
          'Matter 1.6, lanzado el 17 de junio de 2026: configuración NFC, uso compartido multi-ecosistema Joint Fabric, Sugerencias de termostato',
          'Los dispositivos Matter 1.x existentes siguen siendo compatibles — esto es aditivo, no un cambio disruptivo',
          'Se distingue de Thread (la capa de red) y de la guía general de protocolos y la guía de control local de este clúster',
          'Los tipos de dispositivos de gestión energética (inversores, baterías, bombas de calor) llegaron antes, en Matter 1.3-1.5 — no son nuevos en la 1.6',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué cambió', anchor: 'what-changed' },
      { label: 'Compatibilidad con versiones anteriores', anchor: 'backward-compatibility' },
      { label: 'En qué se diferencia de otro contenido de Matter aquí', anchor: 'differs' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter 1.6 (lanzado el 17 de junio de 2026) añade emparejamiento basado en NFC, uso compartido de dispositivos multi-ecosistema Joint Fabric y Sugerencias de termostato, manteniéndose compatible con los dispositivos 1.x existentes — los tipos de dispositivos de gestión energética llegaron antes, en Matter 1.3-1.5, no en la 1.6.' },
      { type: 'plain-terms', content: 'Matter se actualiza regularmente con nuevas capacidades, de forma similar a cómo un sistema operativo recibe actualizaciones de versión. Esta actualización añade principalmente una nueva forma de configurar dispositivos usando NFC, una forma de que varios sistemas de hogar inteligente compartan el control del mismo dispositivo, y una forma estándar para que un termostato reciba (y elija si acepta) cambios de temperatura sugeridos. Los dispositivos que ya tienes que usan una versión anterior de Matter siguen funcionando exactamente igual que antes.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Matter 1.6 (lanzado el 17 de junio de 2026) es la versión actual de la especificación — sus cambios principales son configuración NFC, Joint Fabric y Sugerencias de termostato',
          'Los dispositivos Matter 1.x existentes siguen siendo totalmente compatibles — nada se rompe',
          'Se distingue de Thread (la capa de red bajo Matter) y de las consideraciones sobre routers Thread/Wi-Fi 7',
          'También se distingue de la guía general de protocolos de este clúster (resumen de Matter/Thread/Zigbee/Z-Wave) y de la guía de control local (emparejamiento/evitar puentes en la nube)',
          'Los tipos de dispositivos de gestión energética (inversores, baterías, bombas de calor) no son nuevos en la 1.6 — se introdujeron antes, a través de Matter 1.3-1.5',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'Qué cambió',
        content:
          '**Las tres novedades principales de Matter 1.6 son el emparejamiento basado en NFC, Joint Fabric y las Sugerencias de termostato — un lanzamiento enfocado en herramientas y coordinación en lugar de una nueva categoría de dispositivos.**',
        items: [
          'Configuración NFC: todo el intercambio de emparejamiento del dispositivo ahora puede realizarse por NFC, en lugar de solo mediante escaneo de código QR y Bluetooth.',
          'Joint Fabric: amplía el conjunto de herramientas Multi-Admin existente para que varios controladores autorizados por el usuario puedan coadministrar una única red Matter compartida, haciendo que un dispositivo sea accesible entre los ecosistemas participantes en lugar de estar atado al hub que lo emparejó primero.',
          'Sugerencias de termostato: estandariza cómo los ecosistemas recomiendan cambios de termostato — en lugar de enviar un comando directo, un controlador envía una sugerencia con límite de tiempo que el propio termostato evalúa.',
          'La revisión es aditiva a nivel de protocolo: define cosas nuevas que Matter *puede* describir, sin eliminar ni romper el soporte de los tipos de dispositivos existentes. Los tipos de dispositivos de gestión energética (inversores, baterías, cargadores de VE, bombas de calor) no formaron parte de este lanzamiento — consulta la guía de integración Matter de inversor/bomba de calor de este clúster para ese trabajo anterior (Matter 1.3-1.5).',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: 'Compatibilidad con versiones anteriores',
        content:
          '**Un dispositivo certificado contra una versión anterior de Matter sigue funcionando con un hub o controlador que ejecute la nueva especificación — no necesitas reemplazar los dispositivos Matter existentes.**',
        items: [
          'Tus luces, cerraduras y sensores Matter existentes no necesitan cambios cuando Home Assistant u otro controlador añade soporte para la nueva revisión de la especificación.',
          'Los nuevos tipos de dispositivos (como la gestión energética) solo son utilizables si un producto específico los implementa — poseer hardware Matter más antiguo no le otorga retroactivamente nuevas capacidades.',
          'El propio anuncio de Matter 1.6 de la CSA lo describe como aditivo — no se mencionaron cambios disruptivos en los tipos de dispositivos existentes en el lanzamiento. Como con cualquier actualización de especificación, verifica las notas de lanzamiento de un dispositivo específico si dependes de un campo poco común o inusual.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'En qué se diferencia de otro contenido de Matter aquí',
        content:
          '**Este artículo cubre la revisión de la especificación en sí; la guía general de protocolos explica Matter/Thread/Zigbee/Z-Wave a nivel conceptual, y la guía de control local cubre el emparejamiento y cómo evitar puentes en la nube — lee las tres para tener el panorama completo.**',
        items: [
          'Si te preguntas "qué es Matter y cómo se compara con Zigbee/Z-Wave", empieza por la guía general de protocolos.',
          'Si te preguntas "cómo emparejo un dispositivo Matter localmente sin un puente en la nube", consulta la guía de control local.',
          'Si te preguntas "qué cambió recientemente en la especificación, y si mi hardware necesita una actualización", este es el artículo indicado — y señala la guía de integración energética si buscas específicamente el trabajo anterior (1.3-1.5) de gestión energética, ya que eso no forma parte de la 1.6.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito actualizar mis dispositivos Matter existentes?', a: 'No — los dispositivos ya certificados en 1.x siguen funcionando sin ninguna actualización. Las nuevas capacidades como la configuración NFC o Joint Fabric solo importan si compras hardware nuevo o un nuevo controlador que las implemente.' },
          { q: '¿Cuál es el cambio práctico más importante en Matter 1.6?', a: 'Joint Fabric — permite que varios controladores autorizados por el usuario coadministren una única red Matter compartida, de modo que un dispositivo pueda compartirse genuinamente entre ecosistemas en lugar de pertenecer al hub que lo emparejó primero. La configuración NFC y las Sugerencias de termostato son las otras dos novedades principales. Los tipos de dispositivos de gestión energética (inversores, baterías, bombas de calor) no son nuevos en este lanzamiento — consulta la guía de integración Matter de inversor/bomba de calor para ese trabajo anterior.' },
          { q: '¿Afecta esto a Thread?', a: 'Thread es la capa de red sobre la que a menudo funciona Matter; Matter 1.6 es un cambio en la capa de aplicación de Matter, no en Thread en sí. Consulta la guía de Thread y routers Wi-Fi 7 para los cambios a nivel de red.' },
          { q: '¿Es compatible el software de mi hub con Matter 1.6?', a: 'El software del hub necesita su propia actualización para soportar un nuevo lanzamiento de especificación — no es automático. Home Assistant (verificado el 16/07/2026 contra el propio blog de home-assistant.io) soporta completamente Matter 1.5.1 en el momento de escribir esto, con el soporte de Matter 1.6 en beta activa en lugar de completamente lanzado — verifica las notas de lanzamiento actuales de tu hub específico en lugar de asumir soporte desde el primer día para la especificación más reciente.' },
          { q: '¿En qué se diferencia esto del explicativo general de Matter/Thread/Zigbee de este sitio?', a: 'Ese artículo explica los protocolos de forma conceptual y los compara. Este artículo cubre qué cambió específicamente en Matter 1.6 — un alcance más estrecho, centrado en la actualización.' },
          { q: '¿Dónde puedo verificar la versión oficial actual de la especificación?', a: 'La Connectivity Standards Alliance (csa-iot.org) publica y anuncia directamente la especificación Matter actual — verifica allí en lugar de depender de fuentes secundarias o material de marketing para el número de versión exacto.' },
          { q: '¿Todos los controladores Matter soportan Matter 1.6 de inmediato?', a: 'No — que se publique un lanzamiento de especificación no significa que cada hub lo implemente el primer día. El propio blog de Home Assistant confirma que el soporte de la 1.6 está en beta activa en lugar de completamente lanzado en el momento de escribir esto; Apple Home, Google Home y SmartThings tienen cada uno sus propios cronogramas de implementación independientes que este artículo no rastrea — verifica las notas de lanzamiento actuales de tu controlador específico.' },
          { q: '¿Cambia esto la forma en que se emparejan los dispositivos Matter?', a: 'No para los métodos existentes — el emparejamiento por código QR y Bluetooth sigue funcionando igual. Matter 1.6 añade NFC como una opción de emparejamiento adicional; no elimina ni cambia el proceso existente. Consulta la guía de control local para el recorrido de emparejamiento.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: protocolos explicados](/es/smart-home/smart-home-protocols-explained) — la guía general',
          '[Matter y control local: un hogar inteligente independiente de internet](/es/smart-home/matter-local-control-guide) — emparejamiento y cómo evitar puentes en la nube',
          '[Integración Matter para inversores solares y bombas de calor](/es/smart-home/matter-solar-inverter-heat-pump-integration) — los tipos de dispositivos de gestión energética, añadidos antes en Matter 1.3-1.5, no en la 1.6',
          '[Thread y routers Wi-Fi 7 para hogares inteligentes](/es/smart-home/thread-14-wifi-7-routers-guide) — la capa de red',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 1.6 explicado: qué hay de nuevo (2027)',
      description: 'Qué hay de nuevo en Matter 1.6: configuración NFC, Joint Fabric, Sugerencias de termostato, y compatibilidad con versiones anteriores con dispositivos 1.x.',
      url: 'https://www.promptquorum.com/es/smart-home/matter-1-6-explained',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Protocolo de hogar inteligente Matter' }, { '@type': 'Thing', name: 'Tipos de dispositivos Matter' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito actualizar mis dispositivos Matter existentes?', acceptedAnswer: { '@type': 'Answer', text: 'No — los dispositivos ya certificados en 1.x siguen funcionando sin ninguna actualización.' } },
        { '@type': 'Question', name: '¿Cuál es el cambio práctico más importante en Matter 1.6?', acceptedAnswer: { '@type': 'Answer', text: 'Joint Fabric, que permite que varios controladores autorizados por el usuario coadministren una única red Matter compartida — además de la configuración NFC y las Sugerencias de termostato.' } },
        { '@type': 'Question', name: '¿Afecta esto a Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Thread es la capa de red sobre la que a menudo funciona Matter; Matter 1.6 es un cambio en la capa de aplicación de Matter, no en Thread en sí.' } },
        { '@type': 'Question', name: '¿Dónde puedo verificar la versión oficial actual de la especificación?', acceptedAnswer: { '@type': 'Answer', text: 'La Connectivity Standards Alliance publica directamente la especificación Matter actual.' } },
        { '@type': 'Question', name: '¿Cambia esto la forma en que se emparejan los dispositivos Matter?', acceptedAnswer: { '@type': 'Answer', text: 'No — el emparejamiento usa el mismo proceso sin importar qué tipos de dispositivos defina la especificación.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-pt.webp',
    title: 'Matter 1.6 explicado: o que há de novo (2027)',
    seoTitle: 'Matter 1.6 explicado (2027)',
    intro:
      'O Matter 1.6, lançado em 17 de junho de 2026, é a versão atual do padrão de casa inteligente Matter. Suas principais novidades são a configuração baseada em NFC, o Joint Fabric (permitindo que vários ecossistemas coadministrem o mesmo dispositivo) e as Sugestões de termostato — não novos tipos de dispositivos de gestão de energia, que chegaram antes através do Matter 1.3-1.5 e são cobertos em outra parte deste cluster. Este artigo explica o que mudou especificamente na versão 1.6 e como isso difere do guia geral de protocolos e do guia de controle local já presentes neste site.',
    metaDescription:
      'O que há de novo no Matter 1.6 (lançado em 17 de junho de 2026): configuração NFC, compartilhamento multi-ecossistema Joint Fabric, Sugestões de termostato e compatibilidade retroativa total com dispositivos 1.x.',
    twitterDescription:
      'Matter 1.6 explicado: configuração NFC, Joint Fabric, Sugestões de termostato, compatibilidade retroativa, e como difere do guia geral de Matter/Thread/Zigbee já presente neste site.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa inteligente e usuários do Home Assistant acompanhando o que mudou na especificação Matter',
    primaryTerm: 'matter 1.6 casa inteligente',
    targetKeywords: [
      'matter 1.6 casa inteligente',
      'novidades matter 1.6',
      'atualizacao especificacao matter',
      'compatibilidade retroativa matter',
      'tipos dispositivos matter 2027',
    ],
    leadAnswerBlock:
      '**O Matter 1.6 (lançado em 17 de junho de 2026 pela Connectivity Standards Alliance) é a versão atual do padrão de casa inteligente Matter, adicionando comissionamento baseado em NFC, compartilhamento de dispositivos multi-ecossistema Joint Fabric e Sugestões de termostato, permanecendo totalmente compatível com dispositivos já certificados em 1.x.** Os tipos de dispositivos de gestão de energia (inversores, baterias, bombas de calor) foram adicionados antes, através do Matter 1.3-1.5, e são cobertos em outra parte deste cluster — o próprio Matter 1.6 é um lançamento focado em configuração e multi-ecossistema, não em energia.',
    quickAnswerTop: {
      pt: {
        question: 'O que há de novo no Matter 1.6?',
        answer:
          'O Matter 1.6 (lançado em 17 de junho de 2026) adiciona configuração de dispositivo baseada em NFC, Joint Fabric — que permite que vários controladores autorizados pelo usuário coadministrem uma única rede Matter compartilhada — e Sugestões de termostato, uma forma padronizada para os ecossistemas proporem (não forçarem) mudanças de termostato. Os dispositivos já certificados em 1.x permanecem totalmente compatíveis; o lançamento adiciona capacidade em vez de substituir o protocolo base. Os tipos de dispositivos de gestão de energia não são novos no 1.6 — chegaram através do Matter 1.3-1.5.',
        bullets: [
          'Matter 1.6, lançado em 17 de junho de 2026: configuração NFC, compartilhamento multi-ecossistema Joint Fabric, Sugestões de termostato',
          'Dispositivos Matter 1.x existentes permanecem compatíveis — isso é aditivo, não uma mudança disruptiva',
          'Diferente do Thread (a camada de rede) e do guia geral de protocolos e do guia de controle local deste cluster',
          'Os tipos de dispositivos de gestão de energia (inversores, baterias, bombas de calor) chegaram antes, no Matter 1.3-1.5 — não são novos no 1.6',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que mudou', anchor: 'what-changed' },
      { label: 'Compatibilidade retroativa', anchor: 'backward-compatibility' },
      { label: 'Como isso difere de outros conteúdos Matter aqui', anchor: 'differs' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O Matter 1.6 (lançado em 17 de junho de 2026) adiciona comissionamento baseado em NFC, compartilhamento de dispositivos multi-ecossistema Joint Fabric e Sugestões de termostato, permanecendo compatível com os dispositivos 1.x existentes — os tipos de dispositivos de gestão de energia chegaram antes, no Matter 1.3-1.5, não no 1.6.' },
      { type: 'plain-terms', content: 'O Matter é atualizado regularmente com novas capacidades, de forma semelhante a como um sistema operacional recebe atualizações de versão. Esta atualização adiciona principalmente uma nova forma de configurar dispositivos usando NFC, uma forma de vários sistemas de casa inteligente compartilharem o controle do mesmo dispositivo, e uma forma padrão para um termostato receber (e escolher se aceita) mudanças de temperatura sugeridas. Dispositivos que você já possui, usando uma versão mais antiga do Matter, continuam funcionando exatamente como antes.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Matter 1.6 (lançado em 17 de junho de 2026) é a versão atual da especificação — suas principais mudanças são configuração NFC, Joint Fabric e Sugestões de termostato',
          'Dispositivos Matter 1.x existentes permanecem totalmente compatíveis — nada quebra',
          'Diferente do Thread (a camada de rede sob o Matter) e de considerações sobre roteadores Thread/Wi-Fi 7',
          'Também diferente do guia geral de protocolos deste cluster (visão geral de Matter/Thread/Zigbee/Z-Wave) e do guia de controle local (comissionamento/evitar pontes em nuvem)',
          'Os tipos de dispositivos de gestão de energia (inversores, baterias, bombas de calor) não são novos no 1.6 — foram introduzidos antes, através do Matter 1.3-1.5',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'O que mudou',
        content:
          '**As três principais novidades do Matter 1.6 são o comissionamento baseado em NFC, o Joint Fabric e as Sugestões de termostato — um lançamento focado em ferramentas e coordenação, em vez de uma nova categoria de dispositivos.**',
        items: [
          'Configuração NFC: toda a troca de comissionamento do dispositivo agora pode acontecer via NFC, em vez de apenas por escaneamento de código QR e Bluetooth.',
          'Joint Fabric: expande o conjunto de ferramentas Multi-Admin existente para que vários controladores autorizados pelo usuário possam coadministrar uma única rede Matter compartilhada, tornando um dispositivo acessível entre os ecossistemas participantes em vez de vinculado ao hub que o comissionou primeiro.',
          'Sugestões de termostato: padroniza como os ecossistemas recomendam mudanças de termostato — em vez de enviar um comando direto, um controlador envia uma sugestão com prazo determinado que o próprio termostato avalia.',
          'A revisão é aditiva no nível do protocolo: define coisas novas que o Matter *pode* descrever, sem remover ou quebrar o suporte a tipos de dispositivos existentes. Os tipos de dispositivos de gestão de energia (inversores, baterias, carregadores de VE, bombas de calor) não fizeram parte deste lançamento — veja o guia de integração Matter de inversor/bomba de calor deste cluster para esse trabalho anterior (Matter 1.3-1.5).',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: 'Compatibilidade retroativa',
        content:
          '**Um dispositivo certificado contra uma versão mais antiga do Matter continua funcionando com um hub ou controlador executando a especificação mais recente — você não precisa substituir os dispositivos Matter existentes.**',
        items: [
          'Suas luzes, fechaduras e sensores Matter existentes não precisam de alterações quando o Home Assistant ou outro controlador adiciona suporte para a revisão mais recente da especificação.',
          'Novos tipos de dispositivos (como gestão de energia) só são utilizáveis se um produto específico os implementar — possuir hardware Matter mais antigo não concede retroativamente novas capacidades a ele.',
          'O próprio anúncio do Matter 1.6 pela CSA o descreve como aditivo — nenhuma mudança disruptiva nos tipos de dispositivos existentes foi mencionada no lançamento. Como em qualquer atualização de especificação, verifique as notas de lançamento de um dispositivo específico se você depender de um campo raro ou incomum.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'Como isso difere de outros conteúdos Matter aqui',
        content:
          '**Este artigo cobre a revisão da especificação em si; o guia geral de protocolos explica Matter/Thread/Zigbee/Z-Wave em nível conceitual, e o guia de controle local cobre comissionamento e como evitar pontes em nuvem — leia os três para o panorama completo.**',
        items: [
          'Se você está se perguntando "o que é Matter e como ele se compara ao Zigbee/Z-Wave", comece pelo guia geral de protocolos.',
          'Se você está se perguntando "como comissiono um dispositivo Matter localmente sem uma ponte em nuvem", veja o guia de controle local.',
          'Se você está se perguntando "o que mudou recentemente na especificação, e se meu hardware precisa de uma atualização", este é o artigo certo — e ele aponta para o guia de integração de energia se você estiver procurando especificamente pelo trabalho anterior (1.3-1.5) de gestão de energia, já que isso não faz parte do 1.6.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso atualizar meus dispositivos Matter existentes?', a: 'Não — dispositivos já certificados em 1.x continuam funcionando sem nenhuma atualização. Novas capacidades como configuração NFC ou Joint Fabric só importam se você comprar hardware novo ou um novo controlador que as implemente.' },
          { q: 'Qual é a maior mudança prática no Matter 1.6?', a: 'Joint Fabric — permite que vários controladores autorizados pelo usuário coadministrem uma única rede Matter compartilhada, para que um dispositivo possa ser genuinamente compartilhado entre ecossistemas em vez de pertencer ao hub que o comissionou primeiro. Configuração NFC e Sugestões de termostato são as outras duas principais novidades. Os tipos de dispositivos de gestão de energia (inversores, baterias, bombas de calor) não são novos neste lançamento — veja o guia de integração Matter de inversor/bomba de calor para esse trabalho anterior.' },
          { q: 'Isso afeta o Thread?', a: 'O Thread é a camada de rede sobre a qual o Matter frequentemente funciona; o Matter 1.6 é uma mudança na camada de aplicação do Matter, não no Thread em si. Veja o guia de Thread e roteadores Wi-Fi 7 para mudanças no nível de rede.' },
          { q: 'Meu software de hub é compatível com o Matter 1.6?', a: 'O software do hub precisa de sua própria atualização para suportar um novo lançamento de especificação — isso não é automático. O Home Assistant (verificado em 16/07/2026 em relação ao próprio blog do home-assistant.io) suporta totalmente o Matter 1.5.1 no momento em que este texto foi escrito, com o suporte ao Matter 1.6 em beta ativo em vez de totalmente lançado — verifique as notas de lançamento atuais do seu hub específico em vez de presumir suporte no primeiro dia para o lançamento de especificação mais recente.' },
          { q: 'Como isso difere do explicativo geral de Matter/Thread/Zigbee deste site?', a: 'Aquele artigo explica os protocolos de forma conceitual e os compara. Este artigo cobre o que especificamente mudou no Matter 1.6 — um escopo mais restrito, focado na atualização.' },
          { q: 'Onde posso verificar a versão oficial atual da especificação?', a: 'A Connectivity Standards Alliance (csa-iot.org) publica e anuncia diretamente a especificação Matter atual — verifique lá em vez de confiar em fontes secundárias ou materiais de marketing para o número exato da versão.' },
          { q: 'Todos os controladores Matter suportam o Matter 1.6 imediatamente?', a: 'Não — o fato de um lançamento de especificação ser publicado não significa que cada hub o implemente no primeiro dia. O próprio blog do Home Assistant confirma que o suporte ao 1.6 está em beta ativo em vez de totalmente lançado no momento em que este texto foi escrito; Apple Home, Google Home e SmartThings têm cada um seus próprios cronogramas de lançamento independentes que este artigo não acompanha — verifique as notas de lançamento atuais do seu controlador específico.' },
          { q: 'Isso muda a forma como os dispositivos Matter são comissionados?', a: 'Não para os métodos existentes — o comissionamento por código QR e Bluetooth continua funcionando da mesma forma. O Matter 1.6 adiciona o NFC como uma opção adicional de comissionamento; ele não remove nem altera o processo existente. Veja o guia de controle local para o passo a passo de comissionamento.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: protocolos explicados](/pt/smart-home/smart-home-protocols-explained) — o guia geral',
          '[Matter e controle local: uma casa inteligente independente da internet](/pt/smart-home/matter-local-control-guide) — comissionamento e como evitar pontes em nuvem',
          '[Integração Matter para inversores solares e bombas de calor](/pt/smart-home/matter-solar-inverter-heat-pump-integration) — os tipos de dispositivos de gestão de energia, adicionados antes no Matter 1.3-1.5, não no 1.6',
          '[Thread e roteadores Wi-Fi 7 para casas inteligentes](/pt/smart-home/thread-14-wifi-7-routers-guide) — a camada de rede',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 1.6 explicado: o que há de novo (2027)',
      description: 'O que há de novo no Matter 1.6: configuração NFC, Joint Fabric, Sugestões de termostato, e compatibilidade retroativa com dispositivos 1.x.',
      url: 'https://www.promptquorum.com/pt/smart-home/matter-1-6-explained',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Protocolo de casa inteligente Matter' }, { '@type': 'Thing', name: 'Tipos de dispositivos Matter' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso atualizar meus dispositivos Matter existentes?', acceptedAnswer: { '@type': 'Answer', text: 'Não — dispositivos já certificados em 1.x continuam funcionando sem nenhuma atualização.' } },
        { '@type': 'Question', name: 'Qual é a maior mudança prática no Matter 1.6?', acceptedAnswer: { '@type': 'Answer', text: 'Joint Fabric, que permite que vários controladores autorizados pelo usuário coadministrem uma única rede Matter compartilhada — além de configuração NFC e Sugestões de termostato.' } },
        { '@type': 'Question', name: 'Isso afeta o Thread?', acceptedAnswer: { '@type': 'Answer', text: 'O Thread é a camada de rede sobre a qual o Matter frequentemente funciona; o Matter 1.6 é uma mudança na camada de aplicação do Matter, não no Thread em si.' } },
        { '@type': 'Question', name: 'Onde posso verificar a versão oficial atual da especificação?', acceptedAnswer: { '@type': 'Answer', text: 'A Connectivity Standards Alliance publica diretamente a especificação Matter atual.' } },
        { '@type': 'Question', name: 'Isso muda a forma como os dispositivos Matter são comissionados?', acceptedAnswer: { '@type': 'Answer', text: 'Não — o comissionamento usa o mesmo processo independentemente de quais tipos de dispositivos a especificação define.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-ar.webp',
    title: 'شرح Matter 1.6: ما الجديد (⁨2027⁩)',
    seoTitle: 'شرح Matter 1.6 (⁨2027⁩)',
    intro:
      'يُعد Matter 1.6، الذي صدر في 17 يونيو 2026، النسخة الحالية من معيار المنزل الذكي Matter. إضافاته الرئيسية هي الإعداد القائم على NFC، وJoint Fabric (الذي يتيح لأنظمة بيئية متعددة إدارة الجهاز نفسه معًا)، واقتراحات الترموستات — وليس أنواع أجهزة إدارة طاقة جديدة، والتي وصلت سابقًا عبر Matter 1.3-1.5 وتُغطى في مكان آخر من هذه المجموعة. يوضح هذا الدليل ما تغير تحديدًا في 1.6 وكيف يختلف عن الشرح العام للبروتوكولات ودليل التحكم المحلي الموجودين بالفعل على هذا الموقع.',
    metaDescription:
      'ما الجديد في Matter 1.6 (صدر في 17 يونيو 2026): إعداد NFC، مشاركة Joint Fabric متعددة الأنظمة البيئية، اقتراحات الترموستات، والتوافق الكامل مع إصدارات سابقة من أجهزة 1.x.',
    twitterDescription:
      'شرح Matter 1.6: إعداد NFC، Joint Fabric، اقتراحات الترموستات، التوافق مع الإصدارات السابقة، وكيف يختلف عن الشرح العام لـ Matter/Thread/Zigbee الموجود بالفعل على هذا الموقع.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب المنازل الذكية ومستخدمو Home Assistant الذين يتابعون ما تغير في مواصفة Matter',
    primaryTerm: 'matter 1.6 smart home',
    targetKeywords: [
      'matter 1.6 المنزل الذكي',
      'ما الجديد في matter 1.6',
      'تحديث مواصفة matter',
      'التوافق مع الإصدارات السابقة matter',
      'أنواع أجهزة matter 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6 (الذي أصدره تحالف معايير الاتصال في 17 يونيو 2026) هو النسخة الحالية من معيار المنزل الذكي Matter، ويضيف التفويض القائم على NFC، ومشاركة الأجهزة متعددة الأنظمة البيئية عبر Joint Fabric، واقتراحات الترموستات، مع الحفاظ على التوافق الكامل مع الأجهزة المعتمدة بالفعل في إصدار 1.x.** أُضيفت أنواع أجهزة إدارة الطاقة (العاكسات، البطاريات، مضخات الحرارة) سابقًا، عبر Matter 1.3-1.5، وتُغطى في مكان آخر من هذه المجموعة — أما Matter 1.6 نفسه فهو إصدار يركز على الإعداد وتعدد الأنظمة البيئية، وليس على الطاقة.',
    quickAnswerTop: {
      ar: {
        question: 'ما الجديد في Matter 1.6؟',
        answer:
          'يضيف Matter 1.6 (الذي صدر في 17 يونيو 2026) إعداد الأجهزة القائم على NFC، وJoint Fabric — الذي يتيح لعدة وحدات تحكم مصرح بها من المستخدم إدارة شبكة Matter مشتركة واحدة معًا — واقتراحات الترموستات، وهي طريقة موحدة لتقترح الأنظمة البيئية (وليس فرض) تغييرات الترموستات. تظل الأجهزة المعتمدة بالفعل في إصدار 1.x متوافقة تمامًا؛ يضيف هذا الإصدار قدرات بدلًا من استبدال البروتوكول الأساسي. أنواع أجهزة إدارة الطاقة ليست جديدة في 1.6 — فقد وصلت عبر Matter 1.3-1.5.',
        bullets: [
          'Matter 1.6، صدر في 17 يونيو 2026: إعداد NFC، مشاركة Joint Fabric متعددة الأنظمة البيئية، اقتراحات الترموستات',
          'تظل أجهزة Matter 1.x الحالية متوافقة — هذا تغيير إضافي، وليس تغييرًا جذريًا',
          'يختلف عن Thread (طبقة الشبكة) وعن الشرح العام للبروتوكولات ودليل التحكم المحلي لهذه المجموعة',
          'وصلت أنواع أجهزة إدارة الطاقة (العاكسات، البطاريات، مضخات الحرارة) سابقًا، في Matter 1.3-1.5 — وليست جديدة في 1.6',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما الذي تغير', anchor: 'what-changed' },
      { label: 'التوافق مع الإصدارات السابقة', anchor: 'backward-compatibility' },
      { label: 'كيف يختلف هذا عن محتوى Matter الآخر هنا', anchor: 'differs' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يضيف Matter 1.6 (صدر في 17 يونيو 2026) التفويض القائم على NFC، ومشاركة الأجهزة متعددة الأنظمة البيئية عبر Joint Fabric، واقتراحات الترموستات، مع البقاء متوافقًا مع أجهزة 1.x الحالية — وصلت أنواع أجهزة إدارة الطاقة سابقًا، في Matter 1.3-1.5، وليس في 1.6.' },
      { type: 'plain-terms', content: 'يُحدَّث Matter بانتظام بقدرات جديدة، بشكل مشابه لكيفية حصول نظام التشغيل على تحديثات الإصدار. يضيف هذا التحديث بشكل أساسي طريقة جديدة لإعداد الأجهزة باستخدام NFC، وطريقة لعدة أنظمة منزل ذكي لمشاركة التحكم في الجهاز نفسه، وطريقة موحدة لكي يتلقى الترموستات تغييرات درجة حرارة مقترحة (ويختار ما إذا كان سيقبلها). الأجهزة التي تمتلكها بالفعل وتستخدم إصدار Matter أقدم تستمر في العمل تمامًا كما كانت من قبل.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Matter 1.6 (صدر في 17 يونيو 2026) هو إصدار المواصفة الحالي — تغييراته الرئيسية هي إعداد NFC، وJoint Fabric، واقتراحات الترموستات',
          'تظل أجهزة Matter 1.x الحالية متوافقة تمامًا — لا شيء يتعطل',
          'يختلف هذا عن Thread (طبقة الشبكة تحت Matter) وعن اعتبارات أجهزة توجيه Thread/Wi-Fi 7',
          'يختلف أيضًا عن الشرح العام للبروتوكولات لهذه المجموعة (نظرة عامة على Matter/Thread/Zigbee/Z-Wave) ودليل التحكم المحلي (التفويض/تجنب جسور السحابة)',
          'أنواع أجهزة إدارة الطاقة (العاكسات، البطاريات، مضخات الحرارة) ليست جديدة في 1.6 — فقد جرى تقديمها سابقًا، عبر Matter 1.3-1.5',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: 'ما الذي تغير',
        content:
          '**الإضافات الرئيسية الثلاث في Matter 1.6 هي التفويض القائم على NFC، وJoint Fabric، واقتراحات الترموستات — إصدار مركّز على الأدوات والتنسيق بدلًا من فئة أجهزة جديدة.**',
        items: [
          'إعداد NFC: يمكن الآن إجراء عملية تبادل تفويض الجهاز بالكامل عبر NFC، بدلًا من مسح رمز QR والبلوتوث فقط.',
          'Joint Fabric: يوسّع مجموعة أدوات Multi-Admin الحالية بحيث يمكن لعدة وحدات تحكم مصرح بها من المستخدم إدارة شبكة Matter مشتركة واحدة معًا، مما يجعل الجهاز قابلاً للوصول عبر الأنظمة البيئية المشاركة بدلاً من ارتباطه بأي محور قام بتفويضه أولاً.',
          'اقتراحات الترموستات: توحّد كيفية توصية الأنظمة البيئية بتغييرات الترموستات — بدلًا من إرسال أمر مباشر، ترسل وحدة التحكم اقتراحًا محدد المدة يقوم الترموستات نفسه بتقييمه.',
          'هذا التنقيح إضافي على مستوى البروتوكول: فهو يحدد أشياء جديدة يمكن لـ Matter *وصفها*، دون إزالة أو كسر دعم أنواع الأجهزة الحالية. لم تكن أنواع أجهزة إدارة الطاقة (العاكسات، البطاريات، شواحن السيارات الكهربائية، مضخات الحرارة) جزءًا من هذا الإصدار — راجع دليل تكامل Matter للعاكس/مضخة الحرارة الخاص بهذه المجموعة لمعرفة ذلك العمل السابق (Matter 1.3-1.5).',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: 'التوافق مع الإصدارات السابقة',
        content:
          '**يستمر الجهاز المعتمد وفق إصدار Matter أقدم في العمل مع محور أو وحدة تحكم تعمل بالمواصفة الأحدث — لست بحاجة إلى استبدال أجهزة Matter الحالية.**',
        items: [
          'لا تحتاج أضواء Matter وأقفالها وأجهزة الاستشعار الحالية لديك إلى أي تغييرات عندما يضيف Home Assistant أو وحدة تحكم أخرى دعمًا للمراجعة الأحدث من المواصفة.',
          'أنواع الأجهزة الجديدة (مثل إدارة الطاقة) قابلة للاستخدام فقط إذا نفّذها منتج محدد — امتلاك أجهزة Matter أقدم لا يمنحها بأثر رجعي قدرات جديدة.',
          'يصف إعلان CSA نفسه عن Matter 1.6 هذا الإصدار بأنه إضافي — ولم يُذكر أي تغيير جذري في أنواع الأجهزة الحالية في الإصدار. كما هو الحال مع أي تحديث للمواصفة، تحقق من ملاحظات الإصدار لجهاز محدد إذا كنت تعتمد على حقل نادر أو غير معتاد.',
        ],
      },
      differs: {
        id: 'differs',
        title: 'كيف يختلف هذا عن محتوى Matter الآخر هنا',
        content:
          '**يغطي هذا المقال مراجعة المواصفة نفسها؛ يشرح الشرح العام للبروتوكولات Matter/Thread/Zigbee/Z-Wave على مستوى مفاهيمي، ويغطي دليل التحكم المحلي التفويض وتجنب جسور السحابة — اقرأ الثلاثة جميعًا للحصول على الصورة الكاملة.**',
        items: [
          'إذا كنت تتساءل "ما هو Matter وكيف يقارن بـ Zigbee/Z-Wave"، ابدأ بالشرح العام للبروتوكولات.',
          'إذا كنت تتساءل "كيف أفوّض جهاز Matter محليًا دون جسر سحابي"، راجع دليل التحكم المحلي.',
          'إذا كنت تتساءل "ما الذي تغير مؤخرًا في المواصفة، وهل تحتاج أجهزتي إلى تحديث"، فهذا هو المقال المناسب — ويشير إلى دليل تكامل الطاقة إذا كنت تبحث تحديدًا عن عمل إدارة الطاقة السابق (1.3-1.5)، لأن ذلك ليس جزءًا من 1.6.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج إلى تحديث أجهزة Matter الحالية لدي؟', a: 'لا — تستمر الأجهزة المعتمدة بالفعل في إصدار 1.x في العمل دون أي تحديث. لا تهم القدرات الجديدة مثل إعداد NFC أو Joint Fabric إلا إذا اشتريت أجهزة جديدة أو وحدة تحكم جديدة تنفذها.' },
          { q: 'ما هو أكبر تغيير عملي في Matter 1.6؟', a: 'Joint Fabric — الذي يتيح لعدة وحدات تحكم مصرح بها من المستخدم إدارة شبكة Matter مشتركة واحدة معًا، بحيث يمكن مشاركة الجهاز فعليًا بين الأنظمة البيئية بدلًا من انتمائه لأي محور قام بتفويضه أولًا. إعداد NFC واقتراحات الترموستات هما الإضافتان الرئيسيتان الأخريان. لا تُعد أنواع أجهزة إدارة الطاقة (العاكسات، البطاريات، مضخات الحرارة) جديدة في هذا الإصدار — راجع دليل تكامل Matter للعاكس/مضخة الحرارة لمعرفة ذلك العمل السابق.' },
          { q: 'هل يؤثر هذا على Thread؟', a: 'Thread هي طبقة الشبكة التي غالبًا ما يعمل Matter فوقها؛ Matter 1.6 هو تغيير في طبقة تطبيق Matter، وليس في Thread نفسه. راجع دليل Thread وأجهزة توجيه Wi-Fi 7 للتغييرات على مستوى الشبكة.' },
          { q: 'هل برنامج المحور لدي متوافق مع Matter 1.6؟', a: 'يحتاج برنامج المحور إلى تحديث خاص به لدعم إصدار مواصفة جديد — وهذا ليس تلقائيًا. يدعم Home Assistant (تم التحقق منه في 16 يوليو 2026 مقابل مدونة home-assistant.io نفسها) بالكامل Matter 1.5.1 حتى وقت كتابة هذا، مع دعم Matter 1.6 في مرحلة تجريبية نشطة بدلاً من كونه مطروحًا بالكامل — تحقق من ملاحظات الإصدار الحالية لمحورك المحدد بدلًا من افتراض دعم من اليوم الأول لأحدث إصدار من المواصفة.' },
          { q: 'كيف يختلف هذا عن الشرح العام لـ Matter/Thread/Zigbee على هذا الموقع؟', a: 'يشرح ذلك المقال البروتوكولات على المستوى المفاهيمي ويقارن بينها. يغطي هذا المقال ما تغير تحديدًا في Matter 1.6 — نطاق أضيق يركز على التحديث.' },
          { q: 'أين يمكنني التحقق من إصدار المواصفة الرسمي الحالي؟', a: 'ينشر تحالف معايير الاتصال (csa-iot.org) ويعلن مباشرة عن مواصفة Matter الحالية — تحقق من هناك بدلًا من الاعتماد على مصادر ثانوية أو مواد تسويقية لمعرفة رقم الإصدار الدقيق.' },
          { q: 'هل تدعم جميع وحدات تحكم Matter، Matter 1.6 فورًا؟', a: 'لا — نشر إصدار مواصفة لا يعني أن كل محور ينفذه في اليوم الأول. تؤكد مدونة Home Assistant نفسها أن دعم 1.6 في مرحلة تجريبية نشطة بدلاً من كونه مطروحًا بالكامل حتى وقت كتابة هذا؛ لدى Apple Home وGoogle Home وSmartThings كل منها جداول طرح مستقلة خاصة بها لا يتتبعها هذا المقال — تحقق من ملاحظات الإصدار الحالية لوحدة التحكم المحددة لديك.' },
          { q: 'هل يغيّر هذا كيفية تفويض أجهزة Matter؟', a: 'ليس بالنسبة للطرق الحالية — لا يزال التفويض عبر رمز QR والبلوتوث يعمل بنفس الطريقة. يضيف Matter 1.6 تقنية NFC كخيار تفويض إضافي؛ فهو لا يزيل أو يغيّر العملية الحالية. راجع دليل التحكم المحلي للاطلاع على خطوات التفويض.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Matter وThread وZigbee وZ-Wave: شرح البروتوكولات](/ar/smart-home/smart-home-protocols-explained) — الشرح العام',
          '[Matter والتحكم المحلي: منزل ذكي مستقل عن الإنترنت](/ar/smart-home/matter-local-control-guide) — التفويض وتجنب جسور السحابة',
          '[تكامل Matter لعاكسات الطاقة الشمسية ومضخات الحرارة](/ar/smart-home/matter-solar-inverter-heat-pump-integration) — أنواع أجهزة إدارة الطاقة، أُضيفت سابقًا في Matter 1.3-1.5، وليس في 1.6',
          '[Thread وأجهزة توجيه Wi-Fi 7 للمنازل الذكية](/ar/smart-home/thread-14-wifi-7-routers-guide) — طبقة الشبكة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'شرح Matter 1.6: ما الجديد (⁨2027⁩)',
      description: 'ما الجديد في Matter 1.6: إعداد NFC، Joint Fabric، اقتراحات الترموستات، والتوافق مع الإصدارات السابقة مع أجهزة 1.x.',
      url: 'https://www.promptquorum.com/ar/smart-home/matter-1-6-explained',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'بروتوكول المنزل الذكي Matter' }, { '@type': 'Thing', name: 'أنواع أجهزة Matter' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج إلى تحديث أجهزة Matter الحالية لدي؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — تستمر الأجهزة المعتمدة بالفعل في إصدار 1.x في العمل دون أي تحديث.' } },
        { '@type': 'Question', name: 'ما هو أكبر تغيير عملي في Matter 1.6؟', acceptedAnswer: { '@type': 'Answer', text: 'Joint Fabric، الذي يتيح لعدة وحدات تحكم مصرح بها من المستخدم إدارة شبكة Matter مشتركة واحدة معًا — بالإضافة إلى إعداد NFC واقتراحات الترموستات.' } },
        { '@type': 'Question', name: 'هل يؤثر هذا على Thread؟', acceptedAnswer: { '@type': 'Answer', text: 'Thread هي طبقة الشبكة التي غالبًا ما يعمل Matter فوقها؛ Matter 1.6 هو تغيير في طبقة تطبيق Matter، وليس في Thread نفسه.' } },
        { '@type': 'Question', name: 'أين يمكنني التحقق من إصدار المواصفة الرسمي الحالي؟', acceptedAnswer: { '@type': 'Answer', text: 'ينشر تحالف معايير الاتصال مواصفة Matter الحالية مباشرة.' } },
        { '@type': 'Question', name: 'هل يغيّر هذا كيفية تفويض أجهزة Matter؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — يستخدم التفويض نفس العملية بغض النظر عن أنواع الأجهزة التي تحددها المواصفة.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: '2027 Protocols & Regulation',
    heroImage: '/images/matter-1-6-explained-overview-hero-ko.webp',
    title: 'Matter 1.6 해설: 무엇이 새로운가 (2027년)',
    seoTitle: 'Matter 1.6 해설 (2027년)',
    intro:
      '2026년 6월 17일에 출시된 Matter 1.6은 Matter 스마트홈 표준의 현재 버전입니다. 주요 추가 기능은 NFC 기반 설정, Joint Fabric(여러 생태계가 동일한 기기를 공동 관리할 수 있게 함), 그리고 온도조절기 제안이며, 새로운 에너지 관리 기기 유형은 아닙니다 — 그것들은 이미 Matter 1.3~1.5에 걸쳐 도입되었고 이 클러스터의 다른 글에서 다룹니다. 이 글은 1.6에서 구체적으로 무엇이 변경되었는지, 그리고 이 사이트에 이미 있는 일반 프로토콜 입문 글이나 로컬 제어 가이드와 어떻게 다른지 설명합니다.',
    metaDescription:
      'Matter 1.6(2026년 6월 17일 출시)의 새로운 점: NFC 설정, Joint Fabric 다중 생태계 공유, 온도조절기 제안, 그리고 1.x 기기와의 완전한 하위 호환성.',
    twitterDescription:
      'Matter 1.6 해설: NFC 설정, Joint Fabric, 온도조절기 제안, 하위 호환성, 그리고 이 사이트의 일반 Matter/Thread/Zigbee 입문 글과의 차이점.',
    readTime: '6분 소요',
    educationalLevel: 'Intermediate',
    audience: 'Matter 사양 변경 사항을 추적하는 스마트홈 소유자 및 Home Assistant 사용자',
    primaryTerm: 'matter 1.6 스마트홈',
    targetKeywords: [
      'matter 1.6 스마트홈',
      'matter 1.6 새로운 점',
      'matter 사양 업데이트',
      'matter 하위 호환성',
      'matter 기기 유형 2027',
    ],
    leadAnswerBlock:
      '**Matter 1.6(연결 표준 연합이 2026년 6월 17일에 출시)은 Matter 스마트홈 표준의 현재 버전으로, NFC 기반 커미셔닝, Joint Fabric 다중 생태계 기기 공유, 온도조절기 제안을 추가하면서도 기존의 1.x 인증 기기와 완전한 하위 호환성을 유지합니다.** 에너지 관리 기기 유형(인버터, 배터리, 히트펌프)은 이미 Matter 1.3~1.5에 걸쳐 추가되었으며 이 클러스터의 다른 글에서 다룹니다 — Matter 1.6 자체는 설정 및 다중 생태계에 초점을 맞춘 릴리스이지 에너지에 초점을 맞춘 것이 아닙니다.',
    quickAnswerTop: {
      ko: {
        question: 'Matter 1.6의 새로운 점은 무엇인가요?',
        answer:
          'Matter 1.6(2026년 6월 17일 출시)은 NFC 기반 기기 설정, 여러 사용자 승인 컨트롤러가 하나의 공유 Matter 네트워크를 공동 관리할 수 있게 하는 Joint Fabric, 그리고 생태계가 온도조절기 변경을 (강제하지 않고) 제안할 수 있는 표준화된 방법인 온도조절기 제안을 추가합니다. 기존의 1.x 인증 기기는 완전히 호환성을 유지합니다 — 이 릴리스는 기본 프로토콜을 대체하는 것이 아니라 기능을 추가합니다. 에너지 관리 기기 유형은 1.6에서 새로운 것이 아닙니다 — 그것들은 Matter 1.3~1.5에 걸쳐 도입되었습니다.',
        bullets: [
          '2026년 6월 17일 출시된 Matter 1.6: NFC 설정, Joint Fabric 다중 생태계 공유, 온도조절기 제안',
          '기존 Matter 1.x 기기는 호환성 유지 — 이는 추가 기능이지 파괴적 변경이 아님',
          'Thread(네트워킹 계층)와 이 클러스터의 일반 프로토콜 입문 글 및 로컬 제어 가이드와는 별개',
          '에너지 관리 기기 유형(인버터, 배터리, 히트펌프)은 Matter 1.3~1.5에서 이미 도입됨 — 1.6에서 새로운 것이 아님',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '무엇이 바뀌었나', anchor: 'what-changed' },
      { label: '하위 호환성', anchor: 'backward-compatibility' },
      { label: '이 사이트의 다른 Matter 콘텐츠와의 차이', anchor: 'differs' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter 1.6(2026년 6월 17일 출시)은 NFC 기반 커미셔닝, Joint Fabric 다중 생태계 기기 공유, 온도조절기 제안을 추가하면서 기존 1.x 기기와 하위 호환성을 유지합니다 — 에너지 관리 기기 유형은 Matter 1.3~1.5에서 이미 도입되었으며, 1.6에서 새로운 것이 아닙니다.' },
      { type: 'plain-terms', content: 'Matter는 운영체제가 버전 업데이트를 받는 것과 비슷하게 정기적으로 새로운 기능으로 업데이트됩니다. 이번 업데이트는 주로 NFC를 사용해 기기를 설정하는 새로운 방법, 여러 스마트홈 시스템이 동일한 기기의 제어를 공유하는 방법, 그리고 온도조절기가 제안된 온도 변경을 받아들일지 스스로 선택할 수 있는 표준적인 방법을 추가합니다. 이미 보유하고 있는 이전 버전의 Matter를 사용하는 기기는 이전과 정확히 동일하게 계속 작동합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Matter 1.6(2026년 6월 17일 출시)은 현재 사양 버전입니다 — 주요 변경 사항은 NFC 설정, Joint Fabric, 온도조절기 제안입니다',
          '기존 Matter 1.x 기기는 완전히 호환성을 유지합니다 — 아무것도 깨지지 않습니다',
          '이는 Thread(Matter 아래의 네트워크 계층) 및 Thread/Wi-Fi 7 라우터 관련 고려 사항과는 별개입니다',
          '이 클러스터의 일반 프로토콜 입문 글(Matter/Thread/Zigbee/Z-Wave 개요) 및 로컬 제어 가이드(커미셔닝/클라우드 브리지 회피)와도 별개입니다',
          '에너지 관리 기기 유형(인버터, 배터리, 히트펌프)은 1.6에서 새로운 것이 아닙니다 — Matter 1.3~1.5에 걸쳐 이미 도입되었습니다',
        ],
      },
      whatChanged: {
        id: 'what-changed',
        title: '무엇이 바뀌었나',
        content:
          '**Matter 1.6의 세 가지 주요 추가 기능은 NFC 기반 커미셔닝, Joint Fabric, 온도조절기 제안입니다 — 새로운 기기 카테고리가 아니라 도구와 조정에 초점을 맞춘 릴리스입니다.**',
        items: [
          'NFC 설정: 전체 기기 커미셔닝 교환을 이제 QR 코드 스캔과 블루투스뿐 아니라 NFC를 통해서도 할 수 있습니다.',
          'Joint Fabric: 기존의 다중 관리자 도구 세트를 확장하여 여러 사용자 승인 컨트롤러가 하나의 공유 Matter 네트워크를 공동 관리할 수 있게 합니다. 이를 통해 기기는 처음 커미셔닝한 허브에 종속되지 않고 참여 생태계 전반에서 접근 가능해집니다.',
          '온도조절기 제안: 생태계가 온도조절기 변경을 권장하는 방식을 표준화합니다 — 직접 명령을 보내는 대신, 컨트롤러가 시간 제한이 있는 제안을 보내고 온도조절기 자체가 이를 평가합니다.',
          '이 개정은 프로토콜 수준에서 추가적입니다: 기존 기기 유형에 대한 지원을 제거하거나 손상시키지 않으면서 Matter가 *설명할 수 있는* 새로운 것들을 정의합니다. 에너지 관리 기기 유형(인버터, 배터리, EV 충전기, 히트펌프)은 이번 릴리스에 포함되지 않았습니다 — 그 이전(Matter 1.3~1.5) 작업에 대해서는 이 클러스터의 Matter 인버터/히트펌프 통합 가이드를 참고하세요.',
        ],
      },
      backwardCompatibility: {
        id: 'backward-compatibility',
        title: '하위 호환성',
        content:
          '**이전 Matter 버전에 대해 인증된 기기는 최신 사양을 실행하는 허브나 컨트롤러와 계속 작동합니다 — 기존 Matter 기기를 교체할 필요는 없습니다.**',
        items: [
          'Home Assistant나 다른 컨트롤러가 최신 사양 개정 지원을 추가해도 기존 Matter 조명, 잠금장치, 센서는 변경이 필요하지 않습니다.',
          '새로운 기기 유형(예: 에너지 관리)은 특정 제품이 이를 실제로 구현한 경우에만 사용 가능합니다 — 이전 Matter 하드웨어를 소유하고 있다고 해서 소급하여 새로운 기능이 부여되지는 않습니다.',
          'CSA 자체의 Matter 1.6 발표는 이를 추가적인 것으로 설명합니다 — 릴리스에서 기존 기기 유형에 대한 파괴적 변경은 언급되지 않았습니다. 다른 사양 업데이트와 마찬가지로, 드물거나 특이한 필드에 의존하는 경우 특정 기기의 릴리스 노트를 확인하세요.',
        ],
      },
      differs: {
        id: 'differs',
        title: '이 사이트의 다른 Matter 콘텐츠와의 차이',
        content:
          '**이 글은 사양 개정 자체를 다룹니다; 일반 프로토콜 입문 글은 Matter/Thread/Zigbee/Z-Wave를 개념적 수준에서 설명하고, 로컬 제어 가이드는 커미셔닝과 클라우드 브리지 회피를 다룹니다 — 전체적인 그림을 보려면 세 가지를 모두 읽으세요.**',
        items: [
          '"Matter가 무엇이고 Zigbee/Z-Wave와 비교해 어떤가"가 궁금하다면 일반 프로토콜 입문 글부터 시작하세요.',
          '"클라우드 브리지 없이 Matter 기기를 로컬로 커미셔닝하는 방법"이 궁금하다면 로컬 제어 가이드를 참고하세요.',
          '"최근 사양에서 무엇이 바뀌었고 내 하드웨어에 업데이트가 필요한지"가 궁금하다면 이 글이 맞습니다 — 그리고 1.6에 포함되지 않은 이전(1.3~1.5) 에너지 관리 작업을 구체적으로 찾고 있다면 에너지 통합 가이드를 안내합니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '기존 Matter 기기를 업데이트해야 하나요?', a: '아니요 — 기존의 1.x 인증 기기는 어떤 업데이트도 없이 계속 작동합니다. NFC 설정이나 Joint Fabric 같은 새로운 기능은 그것을 구현한 새 하드웨어나 새 컨트롤러를 구매하는 경우에만 중요합니다.' },
          { q: 'Matter 1.6에서 가장 큰 실질적 변화는 무엇인가요?', a: 'Joint Fabric입니다 — 여러 사용자 승인 컨트롤러가 하나의 공유 Matter 네트워크를 공동 관리할 수 있게 하여, 기기가 처음 커미셔닝한 허브에 속하는 대신 생태계 간에 진정으로 공유될 수 있습니다. NFC 설정과 온도조절기 제안이 다른 두 가지 주요 추가 기능입니다. 에너지 관리 기기 유형(인버터, 배터리, 히트펌프)은 이번 릴리스에서 새로운 것이 아닙니다 — 그 이전 작업에 대해서는 Matter 인버터/히트펌프 통합 가이드를 참고하세요.' },
          { q: '이것이 Thread에 영향을 미치나요?', a: 'Thread는 Matter가 종종 그 위에서 실행되는 네트워킹 계층입니다; Matter 1.6은 Thread 자체가 아니라 Matter 애플리케이션 계층의 변경입니다. 네트워크 계층 변경 사항은 Thread 및 Wi-Fi 7 라우터 가이드를 참고하세요.' },
          { q: '제 허브 소프트웨어가 Matter 1.6과 호환되나요?', a: '허브 소프트웨어는 새로운 사양 릴리스를 지원하기 위해 자체 업데이트가 필요합니다 — 자동으로 되는 것이 아닙니다. Home Assistant(2026년 7월 16일 home-assistant.io 자체 블로그와 대조하여 검증됨)는 작성 시점에 Matter 1.5.1을 완전히 지원하며, Matter 1.6 지원은 완전히 출시되지 않고 활발한 베타 단계에 있습니다 — 최신 사양 릴리스에 대해 첫날 지원을 가정하지 말고 특정 허브의 현재 릴리스 노트를 확인하세요.' },
          { q: '이 사이트의 일반적인 Matter/Thread/Zigbee 설명 글과 어떻게 다른가요?', a: '그 글은 프로토콜을 개념적으로 설명하고 비교합니다. 이 글은 Matter 1.6에서 구체적으로 무엇이 바뀌었는지를 다룹니다 — 더 좁고 업데이트에 초점을 맞춘 범위입니다.' },
          { q: '현재 공식 사양 버전은 어디서 확인할 수 있나요?', a: '연결 표준 연합(csa-iot.org)이 현재 Matter 사양을 직접 발표하고 공지합니다 — 정확한 버전 번호는 2차 자료나 마케팅 자료에 의존하지 말고 그곳에서 확인하세요.' },
          { q: '모든 Matter 컨트롤러가 Matter 1.6을 즉시 지원하나요?', a: '아니요 — 사양 릴리스가 발표되었다고 해서 모든 허브가 첫날부터 이를 구현하는 것은 아닙니다. Home Assistant 자체 블로그는 작성 시점에 1.6 지원이 완전히 출시되지 않고 활발한 베타 단계에 있음을 확인합니다; Apple Home, Google Home, SmartThings는 각각 이 글에서 추적하지 않는 독립적인 출시 일정을 가지고 있습니다 — 특정 컨트롤러의 현재 릴리스 노트를 확인하세요.' },
          { q: '이것이 Matter 기기가 커미셔닝되는 방식을 바꾸나요?', a: '기존 방식에는 아니요 — QR 코드 및 블루투스 커미셔닝은 여전히 동일하게 작동합니다. Matter 1.6은 추가 커미셔닝 옵션으로 NFC를 추가합니다; 기존 프로세스를 제거하거나 변경하지 않습니다. 커미셔닝 안내는 로컬 제어 가이드를 참고하세요.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: 프로토콜 해설](/ko/smart-home/smart-home-protocols-explained) — 일반 입문 글',
          '[Matter와 로컬 제어: 인터넷에 의존하지 않는 스마트홈](/ko/smart-home/matter-local-control-guide) — 커미셔닝과 클라우드 브리지 회피',
          '[태양광 인버터와 히트펌프를 위한 Matter 통합](/ko/smart-home/matter-solar-inverter-heat-pump-integration) — 에너지 관리 기기 유형, Matter 1.3~1.5에서 이미 추가됨, 1.6이 아님',
          '[스마트홈을 위한 Thread와 Wi-Fi 7 라우터](/ko/smart-home/thread-14-wifi-7-routers-guide) — 네트워크 계층',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 1.6 해설: 무엇이 새로운가 (2027년)',
      description: 'Matter 1.6의 새로운 점: NFC 설정, Joint Fabric, 온도조절기 제안, 그리고 1.x 기기와의 하위 호환성.',
      url: 'https://www.promptquorum.com/ko/smart-home/matter-1-6-explained',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Matter 스마트홈 프로토콜' }, { '@type': 'Thing', name: 'Matter 기기 유형' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '기존 Matter 기기를 업데이트해야 하나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 기존의 1.x 인증 기기는 어떤 업데이트도 없이 계속 작동합니다.' } },
        { '@type': 'Question', name: 'Matter 1.6에서 가장 큰 실질적 변화는 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: '여러 사용자 승인 컨트롤러가 하나의 공유 Matter 네트워크를 공동 관리할 수 있게 하는 Joint Fabric에 더해 NFC 설정과 온도조절기 제안입니다.' } },
        { '@type': 'Question', name: '이것이 Thread에 영향을 미치나요?', acceptedAnswer: { '@type': 'Answer', text: 'Thread는 Matter가 종종 그 위에서 실행되는 네트워킹 계층입니다; Matter 1.6은 Thread 자체가 아니라 Matter 애플리케이션 계층의 변경입니다.' } },
        { '@type': 'Question', name: '현재 공식 사양 버전은 어디서 확인할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '연결 표준 연합이 현재 Matter 사양을 직접 발표합니다.' } },
        { '@type': 'Question', name: '이것이 Matter 기기가 커미셔닝되는 방식을 바꾸나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 사양이 정의하는 기기 유형과 관계없이 커미셔닝은 동일한 프로세스를 사용합니다.' } },
      ],
    },
  },
}
