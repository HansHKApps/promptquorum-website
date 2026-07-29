import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-en.png',
    affiliateDisclosure: true,
    // Verified 2026-07-16 against official sources: home-assistant.io/green (Home Assistant Green,
    // $199 — Nabu Casa raised the price twice from a $99 2023 launch, citing RAM component costs),
    // hubitat.com (Elevation C-8 Pro, $179.95, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5 controller/BLE),
    // homey.app (Homey Pro, $449 as of a June 1 2026 price increase from $399, Wi-Fi/BLE/Matter
    // v1.3/Thread border router/Zigbee 3.0/Z-Wave 700/433MHz/IR — the broadest protocol coverage of
    // the three).
    title: 'Best Smart Home Hubs for Local Control (2027)',
    seoTitle: 'Best Smart Home Hubs (2027)',
    intro:
      'This guide compares off-the-shelf hub appliances (Home Assistant Green, Hubitat Elevation C-8 Pro, Homey Pro) for buyers who want ready-to-run hardware rather than assembling a mini-PC or Raspberry Pi build themselves. All three are confirmed current products with current prices (checked 2026-07-16) — and two of the three have already had a price increase in 2026, on top of Home Assistant Yellow\'s prior discontinuation, underscoring how fast this category moves. This is distinct from the ecosystem comparison (Alexa vs Google vs Apple vs Home Assistant) and the broader DIY hardware guide already on this site.',
    metaDescription:
      "Best smart home hubs for local control in 2027: off-the-shelf hub appliances compared, for buyers who want ready-to-run hardware over a DIY mini-PC build.",
    twitterDescription:
      'Comparing off-the-shelf smart home hub appliances for local control — for buyers who want plug-and-play hardware, not a DIY mini-PC build.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home buyers who want a ready-to-run hub appliance rather than a DIY hardware build',
    primaryTerm: 'best smart home hub 2027',
    targetKeywords: [
      'best smart home hub 2027',
      'home assistant green vs hubitat vs homey',
      'ready to run smart home hub',
      'off the shelf home assistant hub',
      'smart home hub appliance',
    ],
    leadAnswerBlock:
      "**This guide compares dedicated hub appliances — Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95), and Homey Pro ($449) — for buyers who want ready-to-run hardware, not a DIY mini-PC or Raspberry Pi build.** All three prices confirmed directly from the manufacturers on 2026-07-16; this category moves fast, with Home Assistant Yellow already discontinued and two of these three hubs raising prices earlier in 2026. If you want the DIY path instead, see the best hardware for a local smart home guide.",
    quickAnswerTop: {
      en: {
        question: 'What is the best off-the-shelf smart home hub?',
        answer:
          "For a ready-to-run appliance rather than a DIY build, Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95), and Homey Pro ($449) are the three current dedicated hub options — each with different trade-offs. Home Assistant Green runs the actual Home Assistant software you'd otherwise self-host; Nabu Casa raised its price twice in 2026 (from a $99 2023 launch) citing RAM component costs. Hubitat's C-8 Pro runs its own local-processing-focused platform with Zigbee 3.0, Z-Wave 800 Long Range, and Matter 1.5 controller support. Homey Pro has the broadest built-in radio support of the three (Wi-Fi, Bluetooth, Matter, Thread border router, Zigbee, Z-Wave, 433MHz, infrared) but also runs its own separate platform, and its price rose from $399 to $449 on June 1, 2026.",
        bullets: [
          'Home Assistant Green ($199): plug-and-play access to the full Home Assistant ecosystem',
          'Hubitat Elevation C-8 Pro ($179.95): local-processing focus, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5, own automation engine',
          'Homey Pro ($449): broadest out-of-box protocol support (adds Thread border router, 433MHz, IR), own app ecosystem',
          'All three prices confirmed 2026-07-16 — this category has already seen a discontinuation (HA Yellow) and two 2026 price increases',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Hub Appliance vs DIY Build', anchor: 'appliance-vs-diy' },
      { label: 'What Differs Between Hubs', anchor: 'what-differs' },
      { label: 'How This Differs From the Ecosystem Comparison', anchor: 'differs-from-ecosystem' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Off-the-shelf smart home hub appliances (Home Assistant Green-class, Hubitat, Homey) trade DIY flexibility for ready-to-run hardware — verify current specific SKUs and pricing before buying, since this category has already seen a discontinuation.' },
      { type: 'plain-terms', content: 'Instead of building your own smart home hub from a mini PC or Raspberry Pi, you can buy a device made specifically for this — plug it in and it\'s already set up to run. This guide compares those ready-made options, separate from the general software-platform comparison (Alexa vs Google vs Home Assistant) already on this site.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          "This guide covers off-the-shelf hub appliances — Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95), Homey Pro ($449) — for a DIY mini-PC/Pi build instead, see the best hardware for a local smart home guide",
          'All 3 prices confirmed directly from manufacturers 2026-07-16 — this category has already seen a discontinuation (Home Assistant Yellow) and 2 price increases in 2026 alone',
          'Different from the ecosystem comparison guide, which compares software platforms (Alexa, Google, Apple, Home Assistant), not hub hardware',
          'Priorities to compare: local-processing depth, protocol support (Zigbee/Z-Wave/Thread/Matter), and whether the app ecosystem locks you in',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: 'Hub Appliance vs DIY Build',
        content:
          '**A dedicated hub appliance is ready to run out of the box; a DIY mini-PC or Raspberry Pi build (see the best hardware guide) offers more flexibility and headroom to add local AI, at the cost of more setup effort.**',
        items: [
          'Choose an appliance if you want the simplest path to a working local-first smart home without researching individual hardware components.',
          'Choose a DIY build if you want to run additional workloads on the same box — a local LLM, Frigate camera detection with a dedicated accelerator — since a dedicated hub appliance is typically not sized for that.',
          'Both paths can run Home Assistant\'s software; the difference is packaged hardware versus assembled hardware, not a different software experience for Home Assistant specifically (Hubitat and Homey run their own separate platforms).',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'What Differs Between Hubs',
        content:
          '**The main differences between hub appliances are which software platform they run (Home Assistant vs a proprietary platform), built-in protocol radios, and how much local processing versus cloud dependency each requires.**',
        items: [
          "Home Assistant Green ($199, confirmed on home-assistant.io) runs the actual Home Assistant software — the same platform covered throughout this cluster — in a plug-and-play appliance form factor. Nabu Casa has raised its price twice in 2026 from an original $99 at 2023 launch, citing rising RAM component costs.",
          "Hubitat's Elevation C-8 Pro ($179.95, confirmed on hubitat.com) runs its own separate automation platform with a stated local-processing focus, supporting Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (as a controller), and Bluetooth — distinct from Home Assistant's ecosystem and community integrations.",
          "Homey Pro ($449, confirmed on homey.app — raised from $399 on June 1, 2026) runs its own platform too, with the broadest built-in protocol support of the three: Wi-Fi, Bluetooth, Matter v1.3, Thread border router, Zigbee 3.0, Z-Wave 700, 433MHz, and infrared, on a 1.5GHz quad-core processor with 4GB RAM.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: 'How This Differs From the Ecosystem Comparison',
        content:
          '**The ecosystem comparison guide compares software platforms and their voice assistants (Alexa, Google Home, Apple Home, Home Assistant); this guide compares physical hub hardware for buyers who\'ve already decided they want a dedicated appliance.**',
        items: [
          'Read the ecosystem comparison first if you\'re deciding which platform/voice-assistant approach fits you.',
          'Read this guide once you know you want a dedicated hub appliance and need to choose the physical hardware.',
          'Read the best hardware for a local smart home guide instead if you\'d rather build a mini-PC/Pi hub yourself.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is a hub appliance better than a DIY mini-PC build?', a: 'Neither is universally better — an appliance is simpler to set up; a DIY build offers more flexibility for additional workloads like a local LLM or Frigate camera detection. Choose based on whether you want simplicity or headroom.' },
          { q: 'Do Hubitat and Homey run Home Assistant software?', a: 'No — they run their own separate automation platforms, distinct from Home Assistant. This is an important distinction from a Home Assistant Green-class device, which runs the actual Home Assistant software.' },
          { q: 'Is Home Assistant Yellow still available?', a: "No — Home Assistant Yellow was discontinued in early 2026. Home Assistant Green ($199, confirmed on home-assistant.io) is the current official appliance option." },
          { q: 'Can I add local AI or camera detection to a hub appliance?', a: "Generally, dedicated hub appliances are sized for hub duties, not additional heavy workloads — see the best hardware for a local smart home guide if you want a single box that also runs a local LLM or Frigate." },
          { q: 'Which hub has the best built-in protocol support?', a: "Homey Pro ($449) has the broadest confirmed radio support of the three — Wi-Fi, Bluetooth, Matter v1.3, Thread border router, Zigbee 3.0, Z-Wave 700, 433MHz, and infrared. Hubitat's C-8 Pro ($179.95) covers Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (controller), and Bluetooth. Home Assistant Green ($199) relies on USB dongles (see the Zigbee/Thread dongles guide) for radio support rather than building it all in." },
          { q: 'Have these hub prices changed recently?', a: 'Yes — both Home Assistant Green (twice in 2026, from an original $99 at 2023 launch) and Homey Pro (from $399 to $449 on June 1, 2026) have raised prices this year, both manufacturers citing rising component costs.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — the software/platform comparison, not hardware',
          '[Best Hardware for a Local Smart Home + Local AI](/smart-home/best-hardware-for-local-smart-home) — the DIY mini-PC/Pi alternative',
          "[IKEA's Matter Ecosystem: Complete Guide](/smart-home/ikea-matter-ecosystem-guide-2027) — a budget device-plus-hub alternative",
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Smart Home Hubs for Local Control (2027)',
      description: 'Best smart home hubs for local control: off-the-shelf hub appliances compared, for buyers who want ready-to-run hardware.',
      url: 'https://www.promptquorum.com/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is a hub appliance better than a DIY mini-PC build?', acceptedAnswer: { '@type': 'Answer', text: 'Neither is universally better — an appliance is simpler; a DIY build offers more flexibility for additional workloads.' } },
        { '@type': 'Question', name: 'Do Hubitat and Homey run Home Assistant software?', acceptedAnswer: { '@type': 'Answer', text: 'No — they run their own separate automation platforms, distinct from Home Assistant.' } },
        { '@type': 'Question', name: 'Is Home Assistant Yellow still available?', acceptedAnswer: { '@type': 'Answer', text: 'No — Home Assistant Yellow was discontinued in early 2026.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-de.png',
    affiliateDisclosure: true,
    title: 'Die besten Smart-Home-Hubs für lokale Steuerung (2027)',
    seoTitle: 'Die besten Smart-Home-Hubs (2027)',
    intro:
      'Dieser Leitfaden vergleicht fertige Hub-Geräte (Home Assistant Green, Hubitat Elevation C-8 Pro, Homey Pro) für Käufer, die sofort einsatzbereite Hardware wollen, statt selbst einen Mini-PC oder Raspberry Pi zusammenzubauen. Alle drei sind bestätigte aktuelle Produkte mit aktuellen Preisen (geprüft am 16.07.2026) — und zwei der drei hatten 2026 bereits eine Preiserhöhung, zusätzlich zur vorherigen Einstellung von Home Assistant Yellow, was zeigt, wie schnell sich diese Kategorie bewegt. Das unterscheidet sich vom Ökosystem-Vergleich (Alexa vs. Google vs. Apple vs. Home Assistant) und dem umfassenderen DIY-Hardware-Leitfaden, die bereits auf dieser Website stehen.',
    metaDescription:
      'Die besten Smart-Home-Hubs für lokale Steuerung 2027: fertige Hub-Geräte im Vergleich, für Käufer, die sofort einsatzbereite Hardware statt eines DIY-Mini-PC-Builds wollen.',
    twitterDescription:
      'Vergleich fertiger Smart-Home-Hub-Geräte für lokale Steuerung — für Käufer, die Plug-and-Play-Hardware statt eines DIY-Mini-PC-Builds wollen.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Smart-Home-Käufer, die ein sofort einsatzbereites Hub-Gerät statt eines DIY-Hardware-Builds wollen',
    primaryTerm: 'bester smart home hub 2027',
    targetKeywords: [
      'bester smart home hub 2027',
      'home assistant green vs hubitat vs homey',
      'sofort einsatzbereiter smart home hub',
      'fertiger home assistant hub',
      'smart home hub geraet',
    ],
    leadAnswerBlock:
      '**Dieser Leitfaden vergleicht dedizierte Hub-Geräte — Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95) und Homey Pro ($449) — für Käufer, die sofort einsatzbereite Hardware wollen, statt einen DIY-Mini-PC oder Raspberry Pi zu bauen.** Alle drei Preise wurden am 16.07.2026 direkt bei den Herstellern bestätigt; diese Kategorie bewegt sich schnell, Home Assistant Yellow wurde bereits eingestellt, und zwei dieser drei Hubs haben 2026 bereits ihre Preise erhöht. Wenn du stattdessen den DIY-Weg gehen möchtest, siehe den Leitfaden zur besten Hardware für ein lokales Smart Home.',
    quickAnswerTop: {
      de: {
        question: 'Was ist der beste fertige Smart-Home-Hub?',
        answer:
          'Für ein sofort einsatzbereites Gerät statt eines DIY-Builds sind Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95) und Homey Pro ($449) die drei aktuellen dedizierten Hub-Optionen — jede mit unterschiedlichen Kompromissen. Home Assistant Green führt die tatsächliche Home-Assistant-Software aus, die du sonst selbst hosten müsstest; Nabu Casa hat den Preis 2026 zweimal erhöht (von einem $99-Launch 2023), unter Berufung auf RAM-Komponentenkosten. Hubitats C-8 Pro läuft auf einer eigenen, auf lokale Verarbeitung fokussierten Plattform mit Zigbee 3.0, Z-Wave 800 Long Range und Matter-1.5-Controller-Unterstützung. Homey Pro bietet von den dreien die breiteste eingebaute Funkunterstützung (Wi-Fi, Bluetooth, Matter, Thread-Border-Router, Zigbee, Z-Wave, 433MHz, Infrarot), läuft aber ebenfalls auf einer eigenen separaten Plattform, und der Preis stieg am 1. Juni 2026 von $399 auf $449.',
        bullets: [
          'Home Assistant Green ($199): Plug-and-Play-Zugang zum gesamten Home-Assistant-Ökosystem',
          'Hubitat Elevation C-8 Pro ($179.95): Fokus auf lokale Verarbeitung, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5, eigene Automatisierungs-Engine',
          'Homey Pro ($449): breiteste Out-of-the-Box-Protokollunterstützung der drei (fügt Thread-Border-Router, 433MHz, IR hinzu), eigenes App-Ökosystem',
          'Alle drei Preise am 16.07.2026 bestätigt — diese Kategorie hat bereits eine Einstellung (HA Yellow) und zwei Preiserhöhungen 2026 erlebt',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Hub-Gerät vs. DIY-Build', anchor: 'appliance-vs-diy' },
      { label: 'Was sich zwischen Hubs unterscheidet', anchor: 'what-differs' },
      { label: 'Wie sich das vom Ökosystem-Vergleich unterscheidet', anchor: 'differs-from-ecosystem' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Fertige Smart-Home-Hub-Geräte (Home-Assistant-Green-Klasse, Hubitat, Homey) tauschen DIY-Flexibilität gegen sofort einsatzbereite Hardware — prüfe aktuelle spezifische SKUs und Preise vor dem Kauf, da diese Kategorie bereits eine Einstellung erlebt hat.' },
      { type: 'plain-terms', content: 'Statt deinen eigenen Smart-Home-Hub aus einem Mini-PC oder Raspberry Pi zu bauen, kannst du ein speziell dafür gefertigtes Gerät kaufen — einstecken, und es ist bereits eingerichtet und läuft. Dieser Leitfaden vergleicht diese fertigen Optionen, getrennt vom allgemeinen Software-Plattform-Vergleich (Alexa vs. Google vs. Home Assistant), der bereits auf dieser Website steht.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Dieser Leitfaden behandelt fertige Hub-Geräte — Home Assistant Green ($199), Hubitat Elevation C-8 Pro ($179.95), Homey Pro ($449) — für einen DIY-Mini-PC/Pi-Build siehe stattdessen den Leitfaden zur besten Hardware für ein lokales Smart Home',
          'Alle 3 Preise am 16.07.2026 direkt bei den Herstellern bestätigt — diese Kategorie hat bereits eine Einstellung (Home Assistant Yellow) und allein 2026 2 Preiserhöhungen erlebt',
          'Anders als der Ökosystem-Vergleichsleitfaden, der Software-Plattformen vergleicht (Alexa, Google, Apple, Home Assistant), nicht Hub-Hardware',
          'Zu vergleichende Prioritäten: Tiefe der lokalen Verarbeitung, Protokollunterstützung (Zigbee/Z-Wave/Thread/Matter) und ob das App-Ökosystem dich bindet',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: 'Hub-Gerät vs. DIY-Build',
        content:
          '**Ein dediziertes Hub-Gerät ist sofort einsatzbereit; ein DIY-Mini-PC- oder Raspberry-Pi-Build (siehe den Leitfaden zur besten Hardware) bietet mehr Flexibilität und Spielraum für lokale KI, auf Kosten von mehr Einrichtungsaufwand.**',
        items: [
          'Wähle ein Gerät, wenn du den einfachsten Weg zu einem funktionierenden, lokal-first Smart Home willst, ohne einzelne Hardware-Komponenten recherchieren zu müssen.',
          'Wähle einen DIY-Build, wenn du zusätzliche Workloads auf derselben Box ausführen möchtest — ein lokales LLM, Frigate-Kameraerkennung mit einem dedizierten Beschleuniger — da ein dediziertes Hub-Gerät dafür typischerweise nicht dimensioniert ist.',
          'Beide Wege können die Home-Assistant-Software ausführen; der Unterschied ist verpackte versus zusammengebaute Hardware, nicht ein anderes Software-Erlebnis speziell für Home Assistant (Hubitat und Homey laufen auf ihren eigenen separaten Plattformen).',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'Was sich zwischen Hubs unterscheidet',
        content:
          '**Die Hauptunterschiede zwischen Hub-Geräten sind, welche Software-Plattform sie ausführen (Home Assistant vs. eine proprietäre Plattform), eingebaute Protokoll-Funkmodule, und wie viel lokale Verarbeitung versus Cloud-Abhängigkeit jedes benötigt.**',
        items: [
          'Home Assistant Green ($199, bestätigt auf home-assistant.io) führt die tatsächliche Home-Assistant-Software aus — dieselbe Plattform, die in diesem gesamten Cluster behandelt wird — in einem Plug-and-Play-Gerätegehäuse. Nabu Casa hat den Preis 2026 zweimal erhöht, ausgehend von ursprünglich $99 beim Launch 2023, unter Berufung auf steigende RAM-Komponentenkosten.',
          'Hubitats Elevation C-8 Pro ($179.95, bestätigt auf hubitat.com) läuft auf einer eigenen separaten Automatisierungsplattform mit erklärtem Fokus auf lokale Verarbeitung, unterstützt Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (als Controller) und Bluetooth — getrennt vom Home-Assistant-Ökosystem und dessen Community-Integrationen.',
          'Homey Pro ($449, bestätigt auf homey.app — am 1. Juni 2026 von $399 erhöht) läuft ebenfalls auf einer eigenen Plattform, mit der breitesten eingebauten Protokollunterstützung der drei: Wi-Fi, Bluetooth, Matter v1.3, Thread-Border-Router, Zigbee 3.0, Z-Wave 700, 433MHz und Infrarot, auf einem 1,5-GHz-Quad-Core-Prozessor mit 4 GB RAM.',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: 'Wie sich das vom Ökosystem-Vergleich unterscheidet',
        content:
          '**Der Ökosystem-Vergleichsleitfaden vergleicht Software-Plattformen und ihre Sprachassistenten (Alexa, Google Home, Apple Home, Home Assistant); dieser Leitfaden vergleicht physische Hub-Hardware für Käufer, die sich bereits für ein dediziertes Gerät entschieden haben.**',
        items: [
          'Lies zuerst den Ökosystem-Vergleich, wenn du dich entscheiden musst, welcher Plattform-/Sprachassistenten-Ansatz zu dir passt.',
          'Lies diesen Leitfaden, sobald du weißt, dass du ein dediziertes Hub-Gerät willst und die physische Hardware auswählen musst.',
          'Lies stattdessen den Leitfaden zur besten Hardware für ein lokales Smart Home, wenn du lieber selbst einen Mini-PC/Pi-Hub bauen möchtest.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist ein Hub-Gerät besser als ein DIY-Mini-PC-Build?', a: 'Keines ist grundsätzlich besser — ein Gerät ist einfacher einzurichten; ein DIY-Build bietet mehr Flexibilität für zusätzliche Workloads wie ein lokales LLM oder Frigate-Kameraerkennung. Wähle basierend darauf, ob du Einfachheit oder Spielraum willst.' },
          { q: 'Laufen Hubitat und Homey mit Home-Assistant-Software?', a: 'Nein — sie laufen auf ihren eigenen separaten Automatisierungsplattformen, getrennt von Home Assistant. Das ist ein wichtiger Unterschied zu einem Gerät der Home-Assistant-Green-Klasse, das die tatsächliche Home-Assistant-Software ausführt.' },
          { q: 'Ist Home Assistant Yellow noch erhältlich?', a: 'Nein — Home Assistant Yellow wurde Anfang 2026 eingestellt. Home Assistant Green ($199, bestätigt auf home-assistant.io) ist die aktuelle offizielle Geräte-Option.' },
          { q: 'Kann ich einem Hub-Gerät lokale KI oder Kameraerkennung hinzufügen?', a: 'Im Allgemeinen sind dedizierte Hub-Geräte für Hub-Aufgaben dimensioniert, nicht für zusätzliche schwere Workloads — siehe den Leitfaden zur besten Hardware für ein lokales Smart Home, wenn du eine einzelne Box willst, die auch ein lokales LLM oder Frigate ausführt.' },
          { q: 'Welcher Hub hat die beste eingebaute Protokollunterstützung?', a: 'Homey Pro ($449) hat von den dreien die breiteste bestätigte Funkunterstützung — Wi-Fi, Bluetooth, Matter v1.3, Thread-Border-Router, Zigbee 3.0, Z-Wave 700, 433MHz und Infrarot. Hubitats C-8 Pro ($179.95) deckt Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (Controller) und Bluetooth ab. Home Assistant Green ($199) verlässt sich für Funkunterstützung auf USB-Dongles (siehe den Leitfaden zu Zigbee/Thread-Dongles), statt alles einzubauen.' },
          { q: 'Haben sich diese Hub-Preise kürzlich geändert?', a: 'Ja — sowohl Home Assistant Green (zweimal 2026, ausgehend von ursprünglich $99 beim Launch 2023) als auch Homey Pro (von $399 auf $449 am 1. Juni 2026) haben dieses Jahr die Preise erhöht, beide Hersteller nennen steigende Komponentenkosten als Grund.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Smart-Home-Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared) — der Software-/Plattform-Vergleich, keine Hardware',
          '[Die beste Hardware für ein lokales Smart Home + lokale KI](/de/smart-home/best-hardware-for-local-smart-home) — die DIY-Mini-PC/Pi-Alternative',
          "[IKEAs Matter-Ökosystem: Der komplette Leitfaden](/de/smart-home/ikea-matter-ecosystem-guide-2027) — eine günstige Alternative aus Gerät plus Hub",
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Die besten Smart-Home-Hubs für lokale Steuerung (2027)',
      description: 'Die besten Smart-Home-Hubs für lokale Steuerung: fertige Hub-Geräte im Vergleich, für Käufer, die sofort einsatzbereite Hardware wollen.',
      url: 'https://www.promptquorum.com/de/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist ein Hub-Gerät besser als ein DIY-Mini-PC-Build?', acceptedAnswer: { '@type': 'Answer', text: 'Keines ist grundsätzlich besser — ein Gerät ist einfacher; ein DIY-Build bietet mehr Flexibilität für zusätzliche Workloads.' } },
        { '@type': 'Question', name: 'Laufen Hubitat und Homey mit Home-Assistant-Software?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — sie laufen auf ihren eigenen separaten Automatisierungsplattformen, getrennt von Home Assistant.' } },
        { '@type': 'Question', name: 'Ist Home Assistant Yellow noch erhältlich?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — Home Assistant Yellow wurde Anfang 2026 eingestellt.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-fr.png',
    affiliateDisclosure: true,
    title: 'Meilleurs hubs domotiques pour le contrôle local (2027)',
    seoTitle: 'Meilleurs hubs domotiques (2027)',
    intro:
      "Ce guide compare des appareils hub prêts à l'emploi (Home Assistant Green, Hubitat Elevation C-8 Pro, Homey Pro) pour les acheteurs qui veulent du matériel prêt à l'usage plutôt que d'assembler eux-mêmes un mini-PC ou un Raspberry Pi. Les trois sont des produits actuels confirmés avec des prix actuels (vérifiés le 16/07/2026) — et deux des trois ont déjà connu une hausse de prix en 2026, en plus de l'arrêt antérieur de Home Assistant Yellow, soulignant à quel point cette catégorie évolue vite. Cela diffère du comparatif d'écosystèmes (Alexa vs Google vs Apple vs Home Assistant) et du guide matériel DIY plus large déjà présents sur ce site.",
    metaDescription:
      "Meilleurs hubs domotiques pour le contrôle local en 2027 : comparatif d'appareils hub prêts à l'emploi, pour les acheteurs qui veulent du matériel prêt à l'usage plutôt qu'un montage DIY sur mini-PC.",
    twitterDescription:
      "Comparatif d'appareils hub domotiques prêts à l'emploi pour le contrôle local — pour les acheteurs qui veulent du matériel plug-and-play, pas un montage DIY sur mini-PC.",
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    audience: "Acheteurs de maison connectée qui veulent un hub prêt à l'emploi plutôt qu'un montage matériel DIY",
    primaryTerm: 'meilleur hub domotique 2027',
    targetKeywords: [
      'meilleur hub domotique 2027',
      'home assistant green vs hubitat vs homey',
      'hub domotique pret a l emploi',
      'hub home assistant tout fait',
      'appareil hub domotique',
    ],
    leadAnswerBlock:
      "**Ce guide compare des appareils hub dédiés — Home Assistant Green (199 $), Hubitat Elevation C-8 Pro (179,95 $) et Homey Pro (449 $) — pour les acheteurs qui veulent du matériel prêt à l'emploi, pas un montage DIY sur mini-PC ou Raspberry Pi.** Les trois prix ont été confirmés directement auprès des fabricants le 16/07/2026 ; cette catégorie évolue vite, Home Assistant Yellow ayant déjà été arrêté et deux de ces trois hubs ayant augmenté leurs prix plus tôt en 2026. Si vous préférez la voie DIY, consultez le guide du meilleur matériel pour une maison connectée locale.",
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur hub domotique prêt à l\'emploi ?',
        answer:
          "Pour un appareil prêt à l'emploi plutôt qu'un montage DIY, Home Assistant Green (199 $), Hubitat Elevation C-8 Pro (179,95 $) et Homey Pro (449 $) sont les trois options de hub dédié actuelles — chacune avec des compromis différents. Home Assistant Green exécute le véritable logiciel Home Assistant que vous devriez sinon auto-héberger ; Nabu Casa a augmenté son prix deux fois en 2026 (depuis un lancement à 99 $ en 2023), citant les coûts des composants RAM. Le C-8 Pro de Hubitat exécute sa propre plateforme axée sur le traitement local, avec prise en charge de Zigbee 3.0, Z-Wave 800 Long Range et Matter 1.5 en tant que contrôleur. Homey Pro offre la prise en charge radio intégrée la plus large des trois (Wi-Fi, Bluetooth, Matter, routeur de bordure Thread, Zigbee, Z-Wave, 433 MHz, infrarouge) mais exécute aussi sa propre plateforme distincte, et son prix est passé de 399 $ à 449 $ le 1er juin 2026.",
        bullets: [
          "Home Assistant Green (199 $) : accès plug-and-play à l'écosystème Home Assistant complet",
          "Hubitat Elevation C-8 Pro (179,95 $) : axé sur le traitement local, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5, son propre moteur d'automatisation",
          "Homey Pro (449 $) : prise en charge de protocoles la plus large d'entrée de jeu (ajoute routeur de bordure Thread, 433 MHz, IR), son propre écosystème d'applications",
          "Les trois prix confirmés le 16/07/2026 — cette catégorie a déjà connu un arrêt de produit (HA Yellow) et deux hausses de prix en 2026",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Hub prêt à l\'emploi vs montage DIY', anchor: 'appliance-vs-diy' },
      { label: 'Ce qui différencie les hubs', anchor: 'what-differs' },
      { label: 'En quoi cela diffère du comparatif d\'écosystèmes', anchor: 'differs-from-ecosystem' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Les appareils hub domotiques prêts à l'emploi (classe Home Assistant Green, Hubitat, Homey) échangent la flexibilité DIY contre du matériel prêt à l'usage — vérifiez les références et prix spécifiques actuels avant l'achat, car cette catégorie a déjà connu un arrêt de produit." },
      { type: 'plain-terms', content: "Plutôt que de construire votre propre hub domotique à partir d'un mini-PC ou d'un Raspberry Pi, vous pouvez acheter un appareil conçu spécifiquement pour cela — branchez-le et il est déjà configuré pour fonctionner. Ce guide compare ces options toutes faites, distinctes du comparatif général de plateformes logicielles (Alexa vs Google vs Home Assistant) déjà présent sur ce site." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Ce guide couvre des appareils hub prêts à l'emploi — Home Assistant Green (199 $), Hubitat Elevation C-8 Pro (179,95 $), Homey Pro (449 $) — pour un montage DIY mini-PC/Pi, consultez plutôt le guide du meilleur matériel pour une maison connectée locale",
          "Les 3 prix confirmés directement auprès des fabricants le 16/07/2026 — cette catégorie a déjà connu un arrêt de produit (Home Assistant Yellow) et 2 hausses de prix rien qu'en 2026",
          "Différent du guide comparatif d'écosystèmes, qui compare des plateformes logicielles (Alexa, Google, Apple, Home Assistant), pas du matériel hub",
          "Priorités à comparer : profondeur du traitement local, prise en charge des protocoles (Zigbee/Z-Wave/Thread/Matter), et si l'écosystème d'applications vous enferme",
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: "Hub prêt à l'emploi vs montage DIY",
        content:
          "**Un appareil hub dédié est prêt à l'emploi dès la sortie de la boîte ; un montage DIY sur mini-PC ou Raspberry Pi (voir le guide du meilleur matériel) offre plus de flexibilité et de marge pour ajouter de l'IA locale, au prix d'un effort de configuration plus important.**",
        items: [
          "Choisissez un appareil tout fait si vous voulez le chemin le plus simple vers une maison connectée locale fonctionnelle sans avoir à rechercher des composants matériels individuels.",
          "Choisissez un montage DIY si vous voulez exécuter des charges de travail supplémentaires sur la même machine — un LLM local, la détection de caméra Frigate avec un accélérateur dédié — car un appareil hub dédié n'est généralement pas dimensionné pour cela.",
          "Les deux voies peuvent exécuter le logiciel Home Assistant ; la différence est du matériel packagé contre du matériel assemblé, pas une expérience logicielle différente pour Home Assistant spécifiquement (Hubitat et Homey exécutent leurs propres plateformes distinctes).",
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'Ce qui différencie les hubs',
        content:
          "**Les principales différences entre les appareils hub sont la plateforme logicielle qu'ils exécutent (Home Assistant vs une plateforme propriétaire), les radios de protocole intégrées, et le degré de traitement local par rapport à la dépendance au cloud requis par chacun.**",
        items: [
          "Home Assistant Green (199 $, confirmé sur home-assistant.io) exécute le véritable logiciel Home Assistant — la même plateforme couverte dans tout ce cluster — dans un boîtier d'appareil plug-and-play. Nabu Casa a augmenté son prix deux fois en 2026 depuis un prix initial de 99 $ au lancement 2023, citant la hausse des coûts des composants RAM.",
          "Le C-8 Pro de Hubitat (179,95 $, confirmé sur hubitat.com) exécute sa propre plateforme d'automatisation distincte avec un accent affiché sur le traitement local, prenant en charge Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (en tant que contrôleur) et Bluetooth — distincte de l'écosystème Home Assistant et de ses intégrations communautaires.",
          "Homey Pro (449 $, confirmé sur homey.app — augmenté depuis 399 $ le 1er juin 2026) exécute lui aussi sa propre plateforme, avec la prise en charge de protocoles intégrée la plus large des trois : Wi-Fi, Bluetooth, Matter v1.3, routeur de bordure Thread, Zigbee 3.0, Z-Wave 700, 433 MHz et infrarouge, sur un processeur quad-core à 1,5 GHz avec 4 Go de RAM.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: "En quoi cela diffère du comparatif d'écosystèmes",
        content:
          "**Le guide comparatif d'écosystèmes compare des plateformes logicielles et leurs assistants vocaux (Alexa, Google Home, Apple Home, Home Assistant) ; ce guide compare le matériel hub physique pour les acheteurs ayant déjà décidé qu'ils veulent un appareil dédié.**",
        items: [
          "Lisez d'abord le comparatif d'écosystèmes si vous décidez quelle approche de plateforme/assistant vocal vous convient.",
          "Lisez ce guide une fois que vous savez que vous voulez un appareil hub dédié et devez choisir le matériel physique.",
          "Lisez plutôt le guide du meilleur matériel pour une maison connectée locale si vous préférez construire vous-même un hub mini-PC/Pi.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Un appareil hub est-il meilleur qu\'un montage DIY sur mini-PC ?', a: "Aucun n'est universellement meilleur — un appareil tout fait est plus simple à configurer ; un montage DIY offre plus de flexibilité pour des charges de travail supplémentaires comme un LLM local ou la détection de caméra Frigate. Choisissez selon que vous voulez la simplicité ou la marge de manœuvre." },
          { q: 'Hubitat et Homey exécutent-ils le logiciel Home Assistant ?', a: "Non — ils exécutent leurs propres plateformes d'automatisation distinctes, différentes de Home Assistant. C'est une distinction importante par rapport à un appareil de classe Home Assistant Green, qui exécute le véritable logiciel Home Assistant." },
          { q: 'Home Assistant Yellow est-il encore disponible ?', a: "Non — Home Assistant Yellow a été arrêté début 2026. Home Assistant Green (199 $, confirmé sur home-assistant.io) est l'option d'appareil officielle actuelle." },
          { q: "Puis-je ajouter de l'IA locale ou de la détection de caméra à un appareil hub ?", a: "En général, les appareils hub dédiés sont dimensionnés pour les tâches de hub, pas pour des charges de travail lourdes supplémentaires — consultez le guide du meilleur matériel pour une maison connectée locale si vous voulez une seule machine qui exécute aussi un LLM local ou Frigate." },
          { q: 'Quel hub a la meilleure prise en charge de protocoles intégrée ?', a: "Homey Pro (449 $) a la prise en charge radio confirmée la plus large des trois — Wi-Fi, Bluetooth, Matter v1.3, routeur de bordure Thread, Zigbee 3.0, Z-Wave 700, 433 MHz et infrarouge. Le C-8 Pro de Hubitat (179,95 $) couvre Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (contrôleur) et Bluetooth. Home Assistant Green (199 $) s'appuie sur des dongles USB (voir le guide des dongles Zigbee/Thread) pour la prise en charge radio plutôt que de tout intégrer." },
          { q: 'Ces prix de hub ont-ils changé récemment ?', a: "Oui — Home Assistant Green (deux fois en 2026, depuis un prix initial de 99 $ au lancement 2023) et Homey Pro (de 399 $ à 449 $ le 1er juin 2026) ont tous deux augmenté leurs prix cette année, les deux fabricants citant la hausse des coûts des composants." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Comparatif des écosystèmes domotiques](/fr/smart-home/smart-home-ecosystems-compared) — le comparatif logiciel/plateforme, pas le matériel',
          "[Le meilleur matériel pour une maison connectée locale + IA locale](/fr/smart-home/best-hardware-for-local-smart-home) — l'alternative DIY mini-PC/Pi",
          "[L'écosystème Matter d'IKEA : guide complet](/fr/smart-home/ikea-matter-ecosystem-guide-2027) — une alternative économique appareil plus hub",
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleurs hubs domotiques pour le contrôle local (2027)',
      description: "Meilleurs hubs domotiques pour le contrôle local : comparatif d'appareils hub prêts à l'emploi, pour les acheteurs qui veulent du matériel prêt à l'usage.",
      url: 'https://www.promptquorum.com/fr/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Un appareil hub est-il meilleur qu\'un montage DIY sur mini-PC ?', acceptedAnswer: { '@type': 'Answer', text: "Aucun n'est universellement meilleur — un appareil tout fait est plus simple ; un montage DIY offre plus de flexibilité pour des charges de travail supplémentaires." } },
        { '@type': 'Question', name: 'Hubitat et Homey exécutent-ils le logiciel Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: "Non — ils exécutent leurs propres plateformes d'automatisation distinctes, différentes de Home Assistant." } },
        { '@type': 'Question', name: 'Home Assistant Yellow est-il encore disponible ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — Home Assistant Yellow a été arrêté début 2026.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-ja.png',
    affiliateDisclosure: true,
    title: 'ローカル制御向けベストスマートホームハブ（2027年）',
    seoTitle: 'ベストスマートホームハブ（2027年）',
    intro:
      'このガイドでは、ミニPCやRaspberry Piを自分で組み立てるのではなく、すぐに使えるハードウェアを求める買い手向けに、既製のハブ機器（Home Assistant Green、Hubitat Elevation C-8 Pro、Homey Pro）を比較します。3製品とも確認済みの現行製品で、価格も現行のもの（2026年7月16日確認）です — そのうち2製品は、Home Assistant Yellowの生産終了に加えて2026年に既に値上げがあり、このカテゴリーがいかに速く動いているかを物語っています。これはエコシステム比較（Alexa vs Google vs Apple vs Home Assistant）や、このサイトに既にあるより広範なDIYハードウェアガイドとは別のものです。',
    metaDescription:
      '2027年のローカル制御向けベストスマートホームハブ：ミニPCによるDIY構築ではなく、すぐに使えるハードウェアを求める買い手向けに既製のハブ機器を比較。',
    twitterDescription:
      'ローカル制御向けの既製スマートホームハブ機器を比較 — DIYミニPC構築ではなく、プラグアンドプレイのハードウェアを求める買い手向け。',
    readTime: '読了時間7分',
    educationalLevel: 'Beginner',
    audience: 'DIYハードウェア構築ではなく、すぐに使えるハブ機器を求めるスマートホーム購入者',
    primaryTerm: 'best smart home hub 2027',
    targetKeywords: [
      'ベスト スマートホームハブ 2027',
      'home assistant green vs hubitat vs homey',
      'すぐ使える スマートホームハブ',
      '既製 home assistant ハブ',
      'スマートホーム ハブ機器',
    ],
    leadAnswerBlock:
      '**このガイドでは、DIYミニPCやRaspberry Piの構築ではなく、すぐに使えるハードウェアを求める買い手向けに、専用ハブ機器 — Home Assistant Green（$199）、Hubitat Elevation C-8 Pro（$179.95）、Homey Pro（$449）— を比較します。** 3つの価格はすべて2026年7月16日にメーカーから直接確認済みです。このカテゴリーは動きが速く、Home Assistant Yellowは既に生産終了し、この3製品のうち2つは2026年前半に既に値上げしています。代わりにDIYの道を選びたい場合は、ローカルスマートホーム向けベストハードウェアガイドを参照してください。',
    quickAnswerTop: {
      ja: {
        question: '最良の既製スマートホームハブは何ですか？',
        answer:
          'DIY構築ではなくすぐに使える機器としては、Home Assistant Green（$199）、Hubitat Elevation C-8 Pro（$179.95）、Homey Pro（$449）が現行の3つの専用ハブ選択肢であり、それぞれ異なるトレードオフがあります。Home Assistant Greenは本来自分でホストするはずの実際のHome Assistantソフトウェアを実行します。Nabu Casaは2026年に価格を2回引き上げました（2023年の$99での発売から）、理由はRAMコンポーネントコストです。HubitatのC-8 Proは、独自のローカル処理重視のプラットフォームを実行し、Zigbee 3.0、Z-Wave 800 Long Range、Matter 1.5コントローラー対応をサポートします。Homey Proは3製品の中で最も幅広い内蔵無線対応（Wi-Fi、Bluetooth、Matter、Threadボーダールーター、Zigbee、Z-Wave、433MHz、赤外線）を持ちますが、独自の別プラットフォームも実行しており、価格は2026年6月1日に$399から$449に上昇しました。',
        bullets: [
          'Home Assistant Green（$199）：Home Assistantエコシステム全体へのプラグアンドプレイアクセス',
          'Hubitat Elevation C-8 Pro（$179.95）：ローカル処理重視、Zigbee 3.0/Z-Wave 800 LR/Matter 1.5、独自オートメーションエンジン',
          'Homey Pro（$449）：3製品中最も幅広い標準プロトコル対応（Threadボーダールーター、433MHz、IRを追加）、独自のアプリエコシステム',
          '3つの価格すべて2026年7月16日確認済み — このカテゴリーは既に生産終了（HA Yellow）と2026年の2度の値上げを経験している',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'ハブ機器 vs DIY構築', anchor: 'appliance-vs-diy' },
      { label: 'ハブ間の違い', anchor: 'what-differs' },
      { label: 'エコシステム比較との違い', anchor: 'differs-from-ecosystem' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '既製のスマートホームハブ機器（Home Assistant Greenクラス、Hubitat、Homey）は、DIYの柔軟性とすぐに使えるハードウェアをトレードオフします — このカテゴリーは既に生産終了を経験しているため、購入前に現行の具体的なSKUと価格を確認してください。' },
      { type: 'plain-terms', content: 'ミニPCやRaspberry Piから自分でスマートホームハブを構築する代わりに、これ専用に作られた機器を購入できます — プラグインするだけで既にセットアップ済みで動作します。このガイドでは、このサイトに既にある一般的なソフトウェアプラットフォーム比較（Alexa vs Google vs Home Assistant）とは別に、これらの既製オプションを比較します。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'このガイドは既製のハブ機器 — Home Assistant Green（$199）、Hubitat Elevation C-8 Pro（$179.95）、Homey Pro（$449）— を扱います。DIYミニPC/Pi構築についてはローカルスマートホーム向けベストハードウェアガイドを参照してください',
          '3つの価格すべて2026年7月16日にメーカーから直接確認済み — このカテゴリーは既に生産終了（Home Assistant Yellow）と、2026年だけで2度の値上げを経験している',
          'ソフトウェアプラットフォーム（Alexa、Google、Apple、Home Assistant）を比較するエコシステム比較ガイドとは異なり、ハブハードウェアを比較するもの',
          '比較すべき優先事項：ローカル処理の深さ、プロトコル対応（Zigbee/Z-Wave/Thread/Matter）、アプリエコシステムがロックインを生むかどうか',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: 'ハブ機器 vs DIY構築',
        content:
          '**専用ハブ機器は箱から出してすぐに使える一方、DIYミニPCやRaspberry Pi構築（ベストハードウェアガイド参照）は、より多くの設定作業を要する代わりに、より高い柔軟性とローカルAI追加の余裕を提供します。**',
        items: [
          '個々のハードウェアコンポーネントを調べることなく、動作するローカルファーストなスマートホームへの最もシンプルな道を求めるなら、機器を選んでください。',
          '同じ箱で追加のワークロード — ローカルLLM、専用アクセラレータを使ったFrigateカメラ検出 — を実行したいなら、DIY構築を選んでください。専用ハブ機器は通常そのようなサイジングになっていません。',
          'どちらの道もHome Assistantのソフトウェアを実行できます。違いはパッケージ化されたハードウェアか組み立てられたハードウェアかであり、Home Assistant特有の異なるソフトウェア体験ではありません（HubitatとHomeyは独自の別プラットフォームを実行します）。',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'ハブ間の違い',
        content:
          '**ハブ機器間の主な違いは、どのソフトウェアプラットフォームを実行するか（Home Assistant vs 独自プラットフォーム）、内蔵プロトコル無線、そしてどれだけのローカル処理対クラウド依存を各機器が必要とするかです。**',
        items: [
          'Home Assistant Green（$199、home-assistant.ioで確認済み）は、このクラスター全体で扱われている実際のHome Assistantソフトウェアを、プラグアンドプレイの機器フォームファクターで実行します。Nabu Casaは、2023年発売時の当初$99から2026年に価格を2回引き上げており、理由はRAMコンポーネントコストの上昇です。',
          'HubitatのElevation C-8 Pro（$179.95、hubitat.comで確認済み）は、ローカル処理重視を掲げる独自の別オートメーションプラットフォームを実行し、Zigbee 3.0、Z-Wave 800 Long Range、Matter 1.5（コントローラーとして）、Bluetoothをサポートします — Home Assistantのエコシステムやコミュニティ統合とは別のものです。',
          'Homey Pro（$449、homey.appで確認済み — 2026年6月1日に$399から値上げ）も独自のプラットフォームを実行し、3製品中最も幅広い内蔵プロトコル対応を持ちます：Wi-Fi、Bluetooth、Matter v1.3、Threadボーダールーター、Zigbee 3.0、Z-Wave 700、433MHz、赤外線を、1.5GHzクアッドコアプロセッサと4GB RAMで実現しています。',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: 'エコシステム比較との違い',
        content:
          '**エコシステム比較ガイドは、ソフトウェアプラットフォームとその音声アシスタント（Alexa、Google Home、Apple Home、Home Assistant）を比較しますが、このガイドは、専用機器を求めることを既に決めている買い手向けに、物理的なハブハードウェアを比較します。**',
        items: [
          'どのプラットフォーム/音声アシスタントのアプローチが自分に合うか決めている場合は、まずエコシステム比較を読んでください。',
          '専用ハブ機器が欲しいと分かっていて、物理ハードウェアを選ぶ必要がある場合は、このガイドを読んでください。',
          '代わりにミニPC/Piハブを自分で構築したい場合は、ローカルスマートホーム向けベストハードウェアガイドを読んでください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ハブ機器はDIYミニPC構築より優れていますか？', a: 'どちらが普遍的に優れているというわけではありません — 機器はセットアップがよりシンプルで、DIY構築はローカルLLMやFrigateカメラ検出のような追加ワークロードに対してより高い柔軟性を提供します。シンプルさか余裕かで選んでください。' },
          { q: 'HubitatとHomeyはHome Assistantソフトウェアを実行しますか？', a: 'いいえ — 両者はHome Assistantとは別の独自のオートメーションプラットフォームを実行します。これは、実際のHome Assistantソフトウェアを実行するHome Assistant Greenクラスの機器との重要な違いです。' },
          { q: 'Home Assistant Yellowはまだ入手できますか？', a: 'いいえ — Home Assistant Yellowは2026年初頭に生産終了しました。Home Assistant Green（$199、home-assistant.ioで確認済み）が現行の公式な機器オプションです。' },
          { q: 'ハブ機器にローカルAIやカメラ検出を追加できますか？', a: '一般的に、専用ハブ機器はハブの役割向けにサイジングされており、追加の重いワークロード向けではありません — ローカルLLMやFrigateも実行する1台の箱が欲しい場合は、ローカルスマートホーム向けベストハードウェアガイドを参照してください。' },
          { q: 'どのハブが最良の内蔵プロトコル対応を持ちますか？', a: 'Homey Pro（$449）は3製品中最も幅広い確認済み無線対応を持ちます — Wi-Fi、Bluetooth、Matter v1.3、Threadボーダールーター、Zigbee 3.0、Z-Wave 700、433MHz、赤外線。HubitatのC-8 Pro（$179.95）はZigbee 3.0、Z-Wave 800 Long Range、Matter 1.5（コントローラー）、Bluetoothをカバーします。Home Assistant Green（$199）は、すべてを内蔵する代わりに、無線対応をUSBドングル（Zigbee/Threadドングルガイド参照）に依存しています。' },
          { q: 'これらのハブ価格は最近変更されましたか？', a: 'はい — Home Assistant Green（2026年に2回、2023年発売時の当初$99から）とHomey Pro（2026年6月1日に$399から$449へ）の両方が今年値上げしており、両メーカーとも部品コストの上昇を理由に挙げています。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[スマートホームエコシステム比較](/ja/smart-home/smart-home-ecosystems-compared) — ハードウェアではなくソフトウェア/プラットフォームの比較',
          '[ローカルスマートホーム + ローカルAI向けベストハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — DIYミニPC/Pi代替案',
          '[IKEAのMatterエコシステム：完全ガイド](/ja/smart-home/ikea-matter-ecosystem-guide-2027) — 予算重視の機器プラスハブの代替案',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカル制御向けベストスマートホームハブ（2027年）',
      description: 'ローカル制御向けベストスマートホームハブ：すぐに使えるハードウェアを求める買い手向けに既製のハブ機器を比較。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'ハブ機器はDIYミニPC構築より優れていますか？', acceptedAnswer: { '@type': 'Answer', text: 'どちらが普遍的に優れているというわけではありません — 機器はよりシンプルで、DIY構築は追加ワークロードに対してより高い柔軟性を提供します。' } },
        { '@type': 'Question', name: 'HubitatとHomeyはHome Assistantソフトウェアを実行しますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — 両者はHome Assistantとは別の独自のオートメーションプラットフォームを実行します。' } },
        { '@type': 'Question', name: 'Home Assistant Yellowはまだ入手できますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — Home Assistant Yellowは2026年初頭に生産終了しました。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-zh.png',
    affiliateDisclosure: true,
    title: '本地控制最佳智能家居中枢（2027年）',
    seoTitle: '最佳智能家居中枢（2027年）',
    intro:
      '本指南比较了现成的中枢设备（Home Assistant Green、Hubitat Elevation C-8 Pro、Homey Pro），适合那些想要即插即用硬件、而不想自己组装迷你主机或树莓派的买家。这三款都是已确认的现行产品，价格也是当前价格（于2026年7月16日核实）——而且三款产品中有两款在2026年已经涨价，再加上此前Home Assistant Yellow已经停产，这凸显了这个品类变化之快。这与本站已有的生态系统对比（Alexa对比Google对比Apple对比Home Assistant）以及更宽泛的DIY硬件指南不同。',
    metaDescription:
      '2027年本地控制最佳智能家居中枢：对比现成的中枢设备，适合想要即插即用硬件而非DIY迷你主机方案的买家。',
    twitterDescription:
      '对比用于本地控制的现成智能家居中枢设备——适合想要即插即用硬件、而非DIY迷你主机方案的买家。',
    readTime: '阅读需7分钟',
    educationalLevel: 'Beginner',
    audience: '想要即插即用中枢设备、而非DIY硬件方案的智能家居买家',
    primaryTerm: 'best smart home hub 2027',
    targetKeywords: [
      '2027年最佳智能家居中枢',
      'home assistant green vs hubitat vs homey',
      '即插即用智能家居中枢',
      '现成的 home assistant 中枢',
      '智能家居中枢设备',
    ],
    leadAnswerBlock:
      '**本指南比较了专用中枢设备——Home Assistant Green（199美元）、Hubitat Elevation C-8 Pro（179.95美元）和Homey Pro（449美元）——适合想要即插即用硬件、而不想DIY组装迷你主机或树莓派的买家。**这三个价格均于2026年7月16日直接从制造商处核实；这个品类变化很快，Home Assistant Yellow已经停产，而这三款中枢中有两款在2026年早些时候已经涨价。如果你更想走DIY路线，请参阅本地智能家居最佳硬件指南。',
    quickAnswerTop: {
      zh: {
        question: '最好的现成智能家居中枢是什么？',
        answer:
          '对于想要即插即用设备而非DIY方案的用户来说，Home Assistant Green（199美元）、Hubitat Elevation C-8 Pro（179.95美元）和Homey Pro（449美元）是目前三款专用中枢选项——各有不同的取舍。Home Assistant Green运行的是你原本需要自行托管的真正的Home Assistant软件；Nabu Casa在2026年两次涨价（从2023年发布时的99美元起），原因是内存组件成本上升。Hubitat的C-8 Pro运行自家专注本地处理的平台，支持Zigbee 3.0、Z-Wave 800 Long Range以及Matter 1.5控制器。Homey Pro在三者中拥有最广泛的内置无线支持（Wi-Fi、蓝牙、Matter、Thread边界路由器、Zigbee、Z-Wave、433MHz、红外），但同样运行自己独立的平台，其价格在2026年6月1日从399美元涨到449美元。',
        bullets: [
          'Home Assistant Green（199美元）：即插即用接入完整的Home Assistant生态系统',
          'Hubitat Elevation C-8 Pro（179.95美元）：专注本地处理，支持Zigbee 3.0/Z-Wave 800 LR/Matter 1.5，拥有自家自动化引擎',
          'Homey Pro（449美元）：三者中开箱即用协议支持最广（新增Thread边界路由器、433MHz、红外），拥有自家应用生态系统',
          '三个价格均于2026年7月16日核实——该品类已经历一次停产（HA Yellow）和2026年内两次涨价',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '中枢设备 vs DIY方案', anchor: 'appliance-vs-diy' },
      { label: '中枢之间的区别', anchor: 'what-differs' },
      { label: '与生态系统对比的区别', anchor: 'differs-from-ecosystem' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '现成的智能家居中枢设备（Home Assistant Green级别、Hubitat、Homey）以DIY灵活性换取即插即用硬件——购买前请核实当前具体的SKU和价格，因为该品类已经历过一次停产。' },
      { type: 'plain-terms', content: '你可以购买专为此设计的设备，而不是自己用迷你主机或树莓派搭建智能家居中枢——插上电源即可，因为它已经预先配置好可以运行。本指南比较这些现成的选项，与本站已有的通用软件平台对比（Alexa对比Google对比Home Assistant）是分开的内容。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '本指南涵盖现成的中枢设备——Home Assistant Green（199美元）、Hubitat Elevation C-8 Pro（179.95美元）、Homey Pro（449美元）——如需DIY迷你主机/树莓派方案，请参阅本地智能家居最佳硬件指南',
          '3款产品价格均于2026年7月16日直接从制造商处核实——该品类已经历一次停产（Home Assistant Yellow）以及仅在2026年内的2次涨价',
          '与生态系统对比指南不同，后者比较的是软件平台（Alexa、Google、Apple、Home Assistant），而非中枢硬件',
          '需要比较的优先事项：本地处理的深度、协议支持（Zigbee/Z-Wave/Thread/Matter），以及应用生态系统是否会将你锁定其中',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: '中枢设备 vs DIY方案',
        content:
          '**专用中枢设备开箱即用；而DIY迷你主机或树莓派方案（参见最佳硬件指南）提供更多灵活性和加装本地AI的余量，代价是需要更多的搭建工作。**',
        items: [
          '如果你想要最简单的方式来搭建一个可用的本地优先智能家居，而不必研究单个硬件组件，请选择成品设备。',
          '如果你想在同一台设备上运行额外的工作负载——本地LLM、配备专用加速器的Frigate摄像头检测——请选择DIY方案，因为专用中枢设备通常并未为此配置足够的规格。',
          '两种路径都可以运行Home Assistant的软件；区别在于成品硬件与自行组装的硬件之间，而不是Home Assistant本身在软件体验上的差异（Hubitat和Homey运行的是各自独立的平台）。',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: '中枢之间的区别',
        content:
          '**中枢设备之间的主要区别在于它们运行的软件平台（Home Assistant还是专有平台）、内置的协议无线模块，以及每款设备需要多少本地处理与云依赖。**',
        items: [
          'Home Assistant Green（199美元，已在home-assistant.io上核实）以即插即用设备的形式运行真正的Home Assistant软件——这也是本系列文章中一直介绍的同一平台。Nabu Casa在2026年两次涨价，从2023年发布时的最初99美元起，理由是内存组件成本上涨。',
          'Hubitat的Elevation C-8 Pro（179.95美元，已在hubitat.com上核实）运行自家独立的自动化平台，明确专注于本地处理，支持Zigbee 3.0、Z-Wave 800 Long Range、Matter 1.5（作为控制器）以及蓝牙——与Home Assistant的生态系统和社区集成不同。',
          'Homey Pro（449美元，已在homey.app上核实——2026年6月1日从399美元上涨）同样运行自家平台，拥有三者中最广泛的内置协议支持：Wi-Fi、蓝牙、Matter v1.3、Thread边界路由器、Zigbee 3.0、Z-Wave 700、433MHz和红外，搭载1.5GHz四核处理器与4GB内存。',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: '与生态系统对比的区别',
        content:
          '**生态系统对比指南比较的是软件平台及其语音助手（Alexa、Google Home、Apple Home、Home Assistant）；本指南比较的是物理中枢硬件，适合已经决定要专用设备的买家。**',
        items: [
          '如果你正在决定哪种平台/语音助手方式适合你，请先阅读生态系统对比。',
          '如果你已经知道自己想要专用中枢设备、需要选择具体硬件，请阅读本指南。',
          '如果你更想自己搭建迷你主机/树莓派中枢，请改为阅读本地智能家居最佳硬件指南。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '中枢设备比DIY迷你主机方案更好吗？', a: '没有哪个是绝对更好的——成品设备设置更简单；DIY方案在应对本地LLM或Frigate摄像头检测等额外工作负载时更灵活。请根据你需要简单性还是余量来选择。' },
          { q: 'Hubitat和Homey运行Home Assistant软件吗？', a: '不运行——它们运行的是各自独立的自动化平台，与Home Assistant不同。这是与Home Assistant Green级别设备（运行真正的Home Assistant软件）的一个重要区别。' },
          { q: 'Home Assistant Yellow还有售吗？', a: '没有——Home Assistant Yellow已于2026年初停产。Home Assistant Green（199美元，已在home-assistant.io上核实）是目前官方的中枢设备选项。' },
          { q: '我可以给中枢设备添加本地AI或摄像头检测吗？', a: '一般来说，专用中枢设备是按中枢职责配置的，而非额外的重型工作负载——如果你想要一台同时运行本地LLM或Frigate的设备，请参阅本地智能家居最佳硬件指南。' },
          { q: '哪款中枢的内置协议支持最好？', a: 'Homey Pro（449美元）在三者中拥有最广泛的已确认无线支持——Wi-Fi、蓝牙、Matter v1.3、Thread边界路由器、Zigbee 3.0、Z-Wave 700、433MHz和红外。Hubitat的C-8 Pro（179.95美元）覆盖Zigbee 3.0、Z-Wave 800 Long Range、Matter 1.5（控制器）和蓝牙。Home Assistant Green（199美元）依赖USB加密狗（参见Zigbee/Thread加密狗指南）来支持无线协议，而非全部内置。' },
          { q: '这些中枢的价格最近有变化吗？', a: '有——Home Assistant Green（2026年内两次，从2023年发布时最初的99美元起）和Homey Pro（2026年6月1日从399美元涨到449美元）今年都涨价了，两家制造商都表示原因是组件成本上升。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[智能家居生态系统对比](/zh/smart-home/smart-home-ecosystems-compared) — 软件/平台对比，非硬件',
          '[本地智能家居 + 本地AI最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — DIY迷你主机/树莓派替代方案',
          '[IKEA的Matter生态系统：完整指南](/zh/smart-home/ikea-matter-ecosystem-guide-2027) — 一种设备加中枢的经济型替代方案',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地控制最佳智能家居中枢（2027年）',
      description: '本地控制最佳智能家居中枢：对比现成的中枢设备，适合想要即插即用硬件的买家。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '中枢设备比DIY迷你主机方案更好吗？', acceptedAnswer: { '@type': 'Answer', text: '没有哪个是绝对更好的——成品设备更简单；DIY方案在应对额外工作负载时更灵活。' } },
        { '@type': 'Question', name: 'Hubitat和Homey运行Home Assistant软件吗？', acceptedAnswer: { '@type': 'Answer', text: '不运行——它们运行的是各自独立的自动化平台，与Home Assistant不同。' } },
        { '@type': 'Question', name: 'Home Assistant Yellow还有售吗？', acceptedAnswer: { '@type': 'Answer', text: '没有——Home Assistant Yellow已于2026年初停产。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-es.png',
    affiliateDisclosure: true,
    title: 'Los mejores hubs domóticos para control local (2027)',
    seoTitle: 'Los mejores hubs domóticos (2027)',
    intro:
      'Esta guía compara dispositivos hub listos para usar (Home Assistant Green, Hubitat Elevation C-8 Pro, Homey Pro) para compradores que quieren hardware listo para funcionar en lugar de montar ellos mismos un mini-PC o una Raspberry Pi. Los tres son productos actuales confirmados con precios actuales (verificados el 16/07/2026) — y dos de los tres ya han tenido una subida de precio en 2026, sumado a la anterior descontinuación de Home Assistant Yellow, lo que subraya lo rápido que se mueve esta categoría. Esto es distinto de la comparativa de ecosistemas (Alexa vs Google vs Apple vs Home Assistant) y de la guía de hardware DIY más amplia ya presentes en este sitio.',
    metaDescription:
      'Los mejores hubs domóticos para control local en 2027: comparativa de dispositivos hub listos para usar, para compradores que quieren hardware listo para funcionar en lugar de un montaje DIY de mini-PC.',
    twitterDescription:
      'Comparativa de dispositivos hub domóticos listos para usar para control local — para compradores que quieren hardware plug-and-play, no un montaje DIY de mini-PC.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de hogar inteligente que quieren un dispositivo hub listo para usar en lugar de un montaje de hardware DIY',
    primaryTerm: 'mejor hub domotico 2027',
    targetKeywords: [
      'mejor hub domotico 2027',
      'home assistant green vs hubitat vs homey',
      'hub domotico listo para usar',
      'hub home assistant listo para usar',
      'dispositivo hub domotico',
    ],
    leadAnswerBlock:
      '**Esta guía compara dispositivos hub dedicados — Home Assistant Green (199 $), Hubitat Elevation C-8 Pro (179,95 $) y Homey Pro (449 $) — para compradores que quieren hardware listo para funcionar, no un montaje DIY de mini-PC o Raspberry Pi.** Los tres precios se confirmaron directamente con los fabricantes el 16/07/2026; esta categoría se mueve rápido, con Home Assistant Yellow ya descontinuado y dos de estos tres hubs subiendo precios antes en 2026. Si prefieres la vía DIY, consulta la guía del mejor hardware para un hogar inteligente local.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor hub domótico listo para usar?',
        answer:
          'Para un dispositivo listo para funcionar en lugar de un montaje DIY, Home Assistant Green (199 $), Hubitat Elevation C-8 Pro (179,95 $) y Homey Pro (449 $) son las tres opciones de hub dedicado actuales — cada una con diferentes compensaciones. Home Assistant Green ejecuta el software real de Home Assistant que de otro modo tendrías que autoalojar; Nabu Casa subió su precio dos veces en 2026 (desde un lanzamiento de 99 $ en 2023), citando el coste de los componentes de RAM. El C-8 Pro de Hubitat ejecuta su propia plataforma centrada en el procesamiento local, con Zigbee 3.0, Z-Wave 800 Long Range y compatibilidad como controlador Matter 1.5. Homey Pro tiene el soporte de radio integrado más amplio de los tres (Wi-Fi, Bluetooth, Matter, router de borde Thread, Zigbee, Z-Wave, 433MHz, infrarrojos), pero también ejecuta su propia plataforma separada, y su precio subió de 399 $ a 449 $ el 1 de junio de 2026.',
        bullets: [
          'Home Assistant Green (199 $): acceso plug-and-play al ecosistema completo de Home Assistant',
          'Hubitat Elevation C-8 Pro (179,95 $): enfoque en procesamiento local, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5, motor de automatización propio',
          'Homey Pro (449 $): el soporte de protocolos más amplio de fábrica de los tres (añade router de borde Thread, 433MHz, IR), ecosistema de apps propio',
          'Los tres precios confirmados el 16/07/2026 — esta categoría ya ha visto una descontinuación (HA Yellow) y dos subidas de precio en 2026',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Dispositivo hub vs montaje DIY', anchor: 'appliance-vs-diy' },
      { label: 'Qué diferencia a los hubs', anchor: 'what-differs' },
      { label: 'En qué se diferencia de la comparativa de ecosistemas', anchor: 'differs-from-ecosystem' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Los dispositivos hub domóticos listos para usar (clase Home Assistant Green, Hubitat, Homey) cambian la flexibilidad DIY por hardware listo para funcionar — verifica los SKU específicos actuales y los precios antes de comprar, ya que esta categoría ya ha visto una descontinuación.' },
      { type: 'plain-terms', content: 'En lugar de construir tu propio hub domótico a partir de un mini-PC o una Raspberry Pi, puedes comprar un dispositivo hecho específicamente para esto — lo enchufas y ya está configurado para funcionar. Esta guía compara esas opciones ya hechas, separadas de la comparativa general de plataformas de software (Alexa vs Google vs Home Assistant) ya presente en este sitio.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Esta guía cubre dispositivos hub listos para usar — Home Assistant Green (199 $), Hubitat Elevation C-8 Pro (179,95 $), Homey Pro (449 $) — para un montaje DIY de mini-PC/Pi, consulta en su lugar la guía del mejor hardware para un hogar inteligente local',
          'Los 3 precios confirmados directamente con los fabricantes el 16/07/2026 — esta categoría ya ha visto una descontinuación (Home Assistant Yellow) y 2 subidas de precio solo en 2026',
          'Distinto de la guía comparativa de ecosistemas, que compara plataformas de software (Alexa, Google, Apple, Home Assistant), no hardware de hub',
          'Prioridades a comparar: profundidad del procesamiento local, soporte de protocolos (Zigbee/Z-Wave/Thread/Matter), y si el ecosistema de apps te ata a él',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: 'Dispositivo hub vs montaje DIY',
        content:
          '**Un dispositivo hub dedicado está listo para funcionar nada más sacarlo de la caja; un montaje DIY de mini-PC o Raspberry Pi (ver la guía del mejor hardware) ofrece más flexibilidad y margen para añadir IA local, a costa de más esfuerzo de configuración.**',
        items: [
          'Elige un dispositivo si quieres el camino más simple hacia un hogar inteligente local-first funcional sin investigar componentes de hardware individuales.',
          'Elige un montaje DIY si quieres ejecutar cargas de trabajo adicionales en la misma máquina — un LLM local, detección de cámara Frigate con un acelerador dedicado — ya que un dispositivo hub dedicado normalmente no está dimensionado para eso.',
          'Ambas vías pueden ejecutar el software de Home Assistant; la diferencia es hardware empaquetado frente a hardware ensamblado, no una experiencia de software distinta para Home Assistant específicamente (Hubitat y Homey ejecutan sus propias plataformas separadas).',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'Qué diferencia a los hubs',
        content:
          '**Las principales diferencias entre dispositivos hub son qué plataforma de software ejecutan (Home Assistant frente a una plataforma propietaria), las radios de protocolo integradas, y cuánto procesamiento local frente a dependencia de la nube requiere cada uno.**',
        items: [
          'Home Assistant Green (199 $, confirmado en home-assistant.io) ejecuta el software real de Home Assistant — la misma plataforma cubierta en todo este clúster — en un formato de dispositivo plug-and-play. Nabu Casa ha subido su precio dos veces en 2026 desde un precio original de 99 $ en el lanzamiento de 2023, citando el aumento del coste de los componentes de RAM.',
          'El Elevation C-8 Pro de Hubitat (179,95 $, confirmado en hubitat.com) ejecuta su propia plataforma de automatización separada con un enfoque declarado en el procesamiento local, con soporte para Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (como controlador) y Bluetooth — distinta del ecosistema y las integraciones comunitarias de Home Assistant.',
          'Homey Pro (449 $, confirmado en homey.app — subido desde 399 $ el 1 de junio de 2026) también ejecuta su propia plataforma, con el soporte de protocolos integrado más amplio de los tres: Wi-Fi, Bluetooth, Matter v1.3, router de borde Thread, Zigbee 3.0, Z-Wave 700, 433MHz e infrarrojos, en un procesador quad-core de 1,5GHz con 4GB de RAM.',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: 'En qué se diferencia de la comparativa de ecosistemas',
        content:
          '**La guía comparativa de ecosistemas compara plataformas de software y sus asistentes de voz (Alexa, Google Home, Apple Home, Home Assistant); esta guía compara hardware físico de hub para compradores que ya han decidido que quieren un dispositivo dedicado.**',
        items: [
          'Lee primero la comparativa de ecosistemas si estás decidiendo qué enfoque de plataforma/asistente de voz te conviene.',
          'Lee esta guía una vez sepas que quieres un dispositivo hub dedicado y necesites elegir el hardware físico.',
          'Lee en su lugar la guía del mejor hardware para un hogar inteligente local si prefieres construir tú mismo un hub de mini-PC/Pi.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Es mejor un dispositivo hub que un montaje DIY de mini-PC?', a: 'Ninguno es universalmente mejor — un dispositivo es más simple de configurar; un montaje DIY ofrece más flexibilidad para cargas de trabajo adicionales como un LLM local o detección de cámara Frigate. Elige según si quieres simplicidad o margen.' },
          { q: '¿Hubitat y Homey ejecutan el software de Home Assistant?', a: 'No — ejecutan sus propias plataformas de automatización separadas, distintas de Home Assistant. Esta es una distinción importante frente a un dispositivo de clase Home Assistant Green, que ejecuta el software real de Home Assistant.' },
          { q: '¿Sigue disponible Home Assistant Yellow?', a: 'No — Home Assistant Yellow se descontinuó a principios de 2026. Home Assistant Green (199 $, confirmado en home-assistant.io) es la opción de dispositivo oficial actual.' },
          { q: '¿Puedo añadir IA local o detección de cámara a un dispositivo hub?', a: 'Generalmente, los dispositivos hub dedicados están dimensionados para tareas de hub, no para cargas de trabajo pesadas adicionales — consulta la guía del mejor hardware para un hogar inteligente local si quieres una sola máquina que también ejecute un LLM local o Frigate.' },
          { q: '¿Qué hub tiene el mejor soporte de protocolos integrado?', a: 'Homey Pro (449 $) tiene el soporte de radio confirmado más amplio de los tres — Wi-Fi, Bluetooth, Matter v1.3, router de borde Thread, Zigbee 3.0, Z-Wave 700, 433MHz e infrarrojos. El C-8 Pro de Hubitat (179,95 $) cubre Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (controlador) y Bluetooth. Home Assistant Green (199 $) depende de dongles USB (ver la guía de dongles Zigbee/Thread) para el soporte de radio en lugar de integrarlo todo.' },
          { q: '¿Han cambiado recientemente estos precios de hub?', a: 'Sí — tanto Home Assistant Green (dos veces en 2026, desde un precio original de 99 $ en el lanzamiento de 2023) como Homey Pro (de 399 $ a 449 $ el 1 de junio de 2026) han subido precios este año, ambos fabricantes citando el aumento de los costes de componentes.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Comparativa de ecosistemas domóticos](/es/smart-home/smart-home-ecosystems-compared) — la comparativa de software/plataforma, no de hardware',
          '[El mejor hardware para un hogar inteligente local + IA local](/es/smart-home/best-hardware-for-local-smart-home) — la alternativa DIY de mini-PC/Pi',
          '[El ecosistema Matter de IKEA: guía completa](/es/smart-home/ikea-matter-ecosystem-guide-2027) — una alternativa económica de dispositivo más hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Los mejores hubs domóticos para control local (2027)',
      description: 'Los mejores hubs domóticos para control local: comparativa de dispositivos hub listos para usar, para compradores que quieren hardware listo para funcionar.',
      url: 'https://www.promptquorum.com/es/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Es mejor un dispositivo hub que un montaje DIY de mini-PC?', acceptedAnswer: { '@type': 'Answer', text: 'Ninguno es universalmente mejor — un dispositivo es más simple; un montaje DIY ofrece más flexibilidad para cargas de trabajo adicionales.' } },
        { '@type': 'Question', name: '¿Hubitat y Homey ejecutan el software de Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'No — ejecutan sus propias plataformas de automatización separadas, distintas de Home Assistant.' } },
        { '@type': 'Question', name: '¿Sigue disponible Home Assistant Yellow?', acceptedAnswer: { '@type': 'Answer', text: 'No — Home Assistant Yellow se descontinuó a principios de 2026.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-pt.png',
    affiliateDisclosure: true,
    title: 'Os melhores hubs de casa inteligente para controle local (2027)',
    seoTitle: 'Os melhores hubs de casa inteligente (2027)',
    intro:
      'Este guia compara dispositivos hub prontos para uso (Home Assistant Green, Hubitat Elevation C-8 Pro, Homey Pro) para compradores que querem hardware pronto para funcionar em vez de montar eles mesmos um mini-PC ou Raspberry Pi. Os três são produtos atuais confirmados com preços atuais (verificados em 16/07/2026) — e dois dos três já tiveram um aumento de preço em 2026, além da descontinuação anterior do Home Assistant Yellow, o que ressalta o quão rápido essa categoria se move. Isso é diferente da comparação de ecossistemas (Alexa vs Google vs Apple vs Home Assistant) e do guia de hardware DIY mais amplo já presentes neste site.',
    metaDescription:
      'Os melhores hubs de casa inteligente para controle local em 2027: comparação de dispositivos hub prontos para uso, para compradores que querem hardware pronto para funcionar em vez de uma montagem DIY de mini-PC.',
    twitterDescription:
      'Comparação de dispositivos hub de casa inteligente prontos para uso para controle local — para compradores que querem hardware plug-and-play, não uma montagem DIY de mini-PC.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de casa inteligente que querem um dispositivo hub pronto para uso em vez de uma montagem de hardware DIY',
    primaryTerm: 'melhor hub casa inteligente 2027',
    targetKeywords: [
      'melhor hub casa inteligente 2027',
      'home assistant green vs hubitat vs homey',
      'hub casa inteligente pronto para uso',
      'hub home assistant pronto',
      'dispositivo hub casa inteligente',
    ],
    leadAnswerBlock:
      '**Este guia compara dispositivos hub dedicados — Home Assistant Green (US$ 199), Hubitat Elevation C-8 Pro (US$ 179,95) e Homey Pro (US$ 449) — para compradores que querem hardware pronto para funcionar, não uma montagem DIY de mini-PC ou Raspberry Pi.** Os três preços foram confirmados diretamente com os fabricantes em 16/07/2026; essa categoria se move rápido, com o Home Assistant Yellow já descontinuado e dois desses três hubs aumentando preços mais cedo em 2026. Se você prefere o caminho DIY, consulte o guia do melhor hardware para uma casa inteligente local.',
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor hub de casa inteligente pronto para uso?',
        answer:
          'Para um dispositivo pronto para funcionar em vez de uma montagem DIY, Home Assistant Green (US$ 199), Hubitat Elevation C-8 Pro (US$ 179,95) e Homey Pro (US$ 449) são as três opções de hub dedicado atuais — cada uma com diferentes compensações. O Home Assistant Green executa o software real do Home Assistant que você teria que hospedar você mesmo; a Nabu Casa aumentou seu preço duas vezes em 2026 (partindo de um lançamento de US$ 99 em 2023), citando o custo de componentes de RAM. O C-8 Pro da Hubitat executa sua própria plataforma focada em processamento local, com suporte a Zigbee 3.0, Z-Wave 800 Long Range e controlador Matter 1.5. O Homey Pro tem o suporte de rádio embutido mais amplo dos três (Wi-Fi, Bluetooth, Matter, roteador de borda Thread, Zigbee, Z-Wave, 433MHz, infravermelho), mas também executa sua própria plataforma separada, e seu preço subiu de US$ 399 para US$ 449 em 1º de junho de 2026.',
        bullets: [
          'Home Assistant Green (US$ 199): acesso plug-and-play a todo o ecossistema Home Assistant',
          'Hubitat Elevation C-8 Pro (US$ 179,95): foco em processamento local, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5, motor de automação próprio',
          'Homey Pro (US$ 449): suporte de protocolo de fábrica mais amplo dos três (adiciona roteador de borda Thread, 433MHz, IR), ecossistema de apps próprio',
          'Os três preços confirmados em 16/07/2026 — essa categoria já viu uma descontinuação (HA Yellow) e dois aumentos de preço em 2026',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Dispositivo hub vs montagem DIY', anchor: 'appliance-vs-diy' },
      { label: 'O que diferencia os hubs', anchor: 'what-differs' },
      { label: 'Como isso difere da comparação de ecossistemas', anchor: 'differs-from-ecosystem' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Dispositivos hub de casa inteligente prontos para uso (classe Home Assistant Green, Hubitat, Homey) trocam flexibilidade DIY por hardware pronto para funcionar — verifique os SKUs específicos atuais e os preços antes de comprar, já que essa categoria já teve uma descontinuação.' },
      { type: 'plain-terms', content: 'Em vez de construir seu próprio hub de casa inteligente a partir de um mini-PC ou Raspberry Pi, você pode comprar um dispositivo feito especificamente para isso — basta ligá-lo e ele já está configurado para funcionar. Este guia compara essas opções prontas, separadas da comparação geral de plataformas de software (Alexa vs Google vs Home Assistant) já presente neste site.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Este guia cobre dispositivos hub prontos para uso — Home Assistant Green (US$ 199), Hubitat Elevation C-8 Pro (US$ 179,95), Homey Pro (US$ 449) — para uma montagem DIY de mini-PC/Pi, consulte o guia do melhor hardware para uma casa inteligente local',
          'Os 3 preços confirmados diretamente com os fabricantes em 16/07/2026 — essa categoria já viu uma descontinuação (Home Assistant Yellow) e 2 aumentos de preço somente em 2026',
          'Diferente do guia de comparação de ecossistemas, que compara plataformas de software (Alexa, Google, Apple, Home Assistant), não hardware de hub',
          'Prioridades a comparar: profundidade do processamento local, suporte a protocolos (Zigbee/Z-Wave/Thread/Matter) e se o ecossistema de apps te prende a ele',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: 'Dispositivo hub vs montagem DIY',
        content:
          '**Um dispositivo hub dedicado está pronto para funcionar assim que sai da caixa; uma montagem DIY de mini-PC ou Raspberry Pi (veja o guia do melhor hardware) oferece mais flexibilidade e margem para adicionar IA local, ao custo de mais esforço de configuração.**',
        items: [
          'Escolha um dispositivo se você quer o caminho mais simples para uma casa inteligente local-first funcional sem pesquisar componentes de hardware individuais.',
          'Escolha uma montagem DIY se quiser executar cargas de trabalho adicionais na mesma máquina — um LLM local, detecção de câmera Frigate com um acelerador dedicado — já que um dispositivo hub dedicado normalmente não é dimensionado para isso.',
          'Ambos os caminhos podem executar o software do Home Assistant; a diferença é hardware empacotado versus hardware montado, não uma experiência de software diferente para o Home Assistant especificamente (Hubitat e Homey executam suas próprias plataformas separadas).',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'O que diferencia os hubs',
        content:
          '**As principais diferenças entre dispositivos hub são qual plataforma de software eles executam (Home Assistant vs uma plataforma proprietária), rádios de protocolo embutidos, e quanto processamento local versus dependência da nuvem cada um exige.**',
        items: [
          'O Home Assistant Green (US$ 199, confirmado em home-assistant.io) executa o software real do Home Assistant — a mesma plataforma abordada em todo este cluster — em um formato de dispositivo plug-and-play. A Nabu Casa aumentou seu preço duas vezes em 2026 a partir de um preço original de US$ 99 no lançamento de 2023, citando o aumento no custo de componentes de RAM.',
          'O Elevation C-8 Pro da Hubitat (US$ 179,95, confirmado em hubitat.com) executa sua própria plataforma de automação separada com foco declarado em processamento local, com suporte a Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (como controlador) e Bluetooth — distinta do ecossistema e das integrações da comunidade do Home Assistant.',
          'O Homey Pro (US$ 449, confirmado em homey.app — aumentado de US$ 399 em 1º de junho de 2026) também executa sua própria plataforma, com o suporte de protocolo embutido mais amplo dos três: Wi-Fi, Bluetooth, Matter v1.3, roteador de borda Thread, Zigbee 3.0, Z-Wave 700, 433MHz e infravermelho, em um processador quad-core de 1,5GHz com 4GB de RAM.',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: 'Como isso difere da comparação de ecossistemas',
        content:
          '**O guia de comparação de ecossistemas compara plataformas de software e seus assistentes de voz (Alexa, Google Home, Apple Home, Home Assistant); este guia compara hardware físico de hub para compradores que já decidiram que querem um dispositivo dedicado.**',
        items: [
          'Leia primeiro a comparação de ecossistemas se você está decidindo qual abordagem de plataforma/assistente de voz combina com você.',
          'Leia este guia assim que souber que quer um dispositivo hub dedicado e precisar escolher o hardware físico.',
          'Leia o guia do melhor hardware para uma casa inteligente local se preferir montar você mesmo um hub de mini-PC/Pi.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Um dispositivo hub é melhor que uma montagem DIY de mini-PC?', a: 'Nenhum é universalmente melhor — um dispositivo é mais simples de configurar; uma montagem DIY oferece mais flexibilidade para cargas de trabalho adicionais como um LLM local ou detecção de câmera Frigate. Escolha com base em querer simplicidade ou margem.' },
          { q: 'Hubitat e Homey executam o software do Home Assistant?', a: 'Não — eles executam suas próprias plataformas de automação separadas, distintas do Home Assistant. Essa é uma distinção importante em relação a um dispositivo de classe Home Assistant Green, que executa o software real do Home Assistant.' },
          { q: 'O Home Assistant Yellow ainda está disponível?', a: 'Não — o Home Assistant Yellow foi descontinuado no início de 2026. O Home Assistant Green (US$ 199, confirmado em home-assistant.io) é a opção de dispositivo oficial atual.' },
          { q: 'Posso adicionar IA local ou detecção de câmera a um dispositivo hub?', a: 'Geralmente, dispositivos hub dedicados são dimensionados para tarefas de hub, não para cargas de trabalho pesadas adicionais — consulte o guia do melhor hardware para uma casa inteligente local se quiser uma única máquina que também execute um LLM local ou Frigate.' },
          { q: 'Qual hub tem o melhor suporte de protocolo embutido?', a: 'O Homey Pro (US$ 449) tem o suporte de rádio confirmado mais amplo dos três — Wi-Fi, Bluetooth, Matter v1.3, roteador de borda Thread, Zigbee 3.0, Z-Wave 700, 433MHz e infravermelho. O C-8 Pro da Hubitat (US$ 179,95) cobre Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 (controlador) e Bluetooth. O Home Assistant Green (US$ 199) depende de dongles USB (veja o guia de dongles Zigbee/Thread) para suporte de rádio em vez de embutir tudo.' },
          { q: 'Esses preços de hub mudaram recentemente?', a: 'Sim — tanto o Home Assistant Green (duas vezes em 2026, partindo de um preço original de US$ 99 no lançamento de 2023) quanto o Homey Pro (de US$ 399 para US$ 449 em 1º de junho de 2026) aumentaram os preços este ano, ambos os fabricantes citando o aumento nos custos de componentes.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Comparação de ecossistemas de casa inteligente](/pt/smart-home/smart-home-ecosystems-compared) — a comparação de software/plataforma, não hardware',
          '[O melhor hardware para uma casa inteligente local + IA local](/pt/smart-home/best-hardware-for-local-smart-home) — a alternativa DIY de mini-PC/Pi',
          '[O ecossistema Matter da IKEA: guia completo](/pt/smart-home/ikea-matter-ecosystem-guide-2027) — uma alternativa econômica de dispositivo mais hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Os melhores hubs de casa inteligente para controle local (2027)',
      description: 'Os melhores hubs de casa inteligente para controle local: comparação de dispositivos hub prontos para uso, para compradores que querem hardware pronto para funcionar.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Um dispositivo hub é melhor que uma montagem DIY de mini-PC?', acceptedAnswer: { '@type': 'Answer', text: 'Nenhum é universalmente melhor — um dispositivo é mais simples; uma montagem DIY oferece mais flexibilidade para cargas de trabalho adicionais.' } },
        { '@type': 'Question', name: 'Hubitat e Homey executam o software do Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Não — eles executam suas próprias plataformas de automação separadas, distintas do Home Assistant.' } },
        { '@type': 'Question', name: 'O Home Assistant Yellow ainda está disponível?', acceptedAnswer: { '@type': 'Answer', text: 'Não — o Home Assistant Yellow foi descontinuado no início de 2026.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-ar.png',
    affiliateDisclosure: true,
    title: 'أفضل محاور المنزل الذكي للتحكم المحلي (⁨2027⁩)',
    seoTitle: 'أفضل محاور المنزل الذكي (⁨2027⁩)',
    intro:
      'يقارن هذا الدليل أجهزة المحاور الجاهزة (Home Assistant Green وHubitat Elevation C-8 Pro وHomey Pro) للمشترين الذين يريدون أجهزة جاهزة للعمل بدلاً من تجميع جهاز كمبيوتر مصغّر أو Raspberry Pi بأنفسهم. جميع الأجهزة الثلاثة منتجات حالية مؤكدة بأسعار حالية (تم التحقق منها في 16 يوليو 2026) — وقد شهد اثنان من الثلاثة بالفعل زيادة في السعر خلال 2026، إضافة إلى توقف Home Assistant Yellow سابقًا، مما يؤكد مدى سرعة تحرك هذه الفئة. هذا يختلف عن مقارنة الأنظمة البيئية (Alexa مقابل Google مقابل Apple مقابل Home Assistant) ودليل الأجهزة الأوسع للتجميع الذاتي الموجودين بالفعل على هذا الموقع.',
    metaDescription:
      'أفضل محاور المنزل الذكي للتحكم المحلي في 2027: مقارنة أجهزة المحاور الجاهزة، للمشترين الذين يريدون أجهزة جاهزة للعمل بدلاً من تجميع كمبيوتر مصغّر بأنفسهم.',
    twitterDescription:
      'مقارنة أجهزة محاور المنزل الذكي الجاهزة للتحكم المحلي — للمشترين الذين يريدون أجهزة جاهزة للتشغيل الفوري، وليس تجميع كمبيوتر مصغّر بأنفسهم.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو المنزل الذكي الذين يريدون جهاز محور جاهز للعمل بدلاً من تجميع أجهزة بأنفسهم',
    primaryTerm: 'best smart home hub 2027',
    targetKeywords: [
      'افضل محور منزل ذكي 2027',
      'home assistant green vs hubitat vs homey',
      'محور منزل ذكي جاهز للعمل',
      'محور home assistant جاهز',
      'جهاز محور المنزل الذكي',
    ],
    leadAnswerBlock:
      '**يقارن هذا الدليل أجهزة محاور مخصصة — Home Assistant Green (199 دولارًا)، وHubitat Elevation C-8 Pro (179.95 دولارًا)، وHomey Pro (449 دولارًا) — للمشترين الذين يريدون أجهزة جاهزة للعمل، وليس تجميع كمبيوتر مصغّر أو Raspberry Pi بأنفسهم.** تم تأكيد الأسعار الثلاثة مباشرة من الشركات المصنّعة في 16 يوليو 2026؛ تتحرك هذه الفئة بسرعة، حيث تم إيقاف Home Assistant Yellow بالفعل، وقام اثنان من هذه المحاور الثلاثة برفع الأسعار في وقت سابق من 2026. إذا كنت تفضل طريق التجميع الذاتي بدلًا من ذلك، راجع دليل أفضل الأجهزة لمنزل ذكي محلي.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل محور منزل ذكي جاهز؟',
        answer:
          'بالنسبة لجهاز جاهز للعمل بدلاً من تجميع ذاتي، تُعد Home Assistant Green (199 دولارًا) وHubitat Elevation C-8 Pro (179.95 دولارًا) وHomey Pro (449 دولارًا) الخيارات الثلاثة الحالية للمحاور المخصصة — لكل منها مقايضات مختلفة. يشغّل Home Assistant Green برنامج Home Assistant الفعلي الذي كنت ستستضيفه بنفسك؛ رفعت Nabu Casa سعره مرتين في 2026 (من إطلاق بسعر 99 دولارًا في 2023)، مستشهدة بتكاليف مكونات الذاكرة RAM. يشغّل C-8 Pro من Hubitat منصته الخاصة التي تركز على المعالجة المحلية بدعم لـ Zigbee 3.0 وZ-Wave 800 Long Range ودعم وحدة تحكم Matter 1.5. يتمتع Homey Pro بأوسع دعم لاسلكي مدمج من بين الثلاثة (Wi-Fi وBluetooth وMatter وموجّه حدودي Thread وZigbee وZ-Wave و433 ميغاهرتز والأشعة تحت الحمراء) لكنه أيضًا يشغّل منصته الخاصة المنفصلة، وقد ارتفع سعره من 399 دولارًا إلى 449 دولارًا في 1 يونيو 2026.',
        bullets: [
          'Home Assistant Green (199 دولارًا): وصول جاهز للتشغيل الفوري إلى نظام Home Assistant البيئي الكامل',
          'Hubitat Elevation C-8 Pro (179.95 دولارًا): تركيز على المعالجة المحلية، Zigbee 3.0/Z-Wave 800 LR/Matter 1.5، محرك أتمتة خاص',
          'Homey Pro (449 دولارًا): أوسع دعم بروتوكولات جاهز من الصندوق بين الثلاثة (يضيف موجّهًا حدوديًا Thread و433 ميغاهرتز والأشعة تحت الحمراء)، نظام تطبيقات خاص',
          'تم تأكيد الأسعار الثلاثة في 16 يوليو 2026 — شهدت هذه الفئة بالفعل توقفًا (HA Yellow) وارتفاعين في الأسعار خلال 2026',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'جهاز المحور مقابل التجميع الذاتي', anchor: 'appliance-vs-diy' },
      { label: 'ما الذي يختلف بين المحاور', anchor: 'what-differs' },
      { label: 'كيف يختلف هذا عن مقارنة الأنظمة البيئية', anchor: 'differs-from-ecosystem' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تستبدل أجهزة محاور المنزل الذكي الجاهزة (فئة Home Assistant Green وHubitat وHomey) مرونة التجميع الذاتي بأجهزة جاهزة للعمل — تحقق من رموز المنتجات SKU المحددة الحالية والأسعار قبل الشراء، حيث شهدت هذه الفئة بالفعل توقف أحد المنتجات.' },
      { type: 'plain-terms', content: 'بدلاً من بناء محور المنزل الذكي الخاص بك من كمبيوتر مصغّر أو Raspberry Pi، يمكنك شراء جهاز مصنوع خصيصًا لهذا الغرض — قم بتوصيله وسيكون جاهزًا للعمل بالفعل. يقارن هذا الدليل تلك الخيارات الجاهزة، بمعزل عن المقارنة العامة لمنصات البرمجيات (Alexa مقابل Google مقابل Home Assistant) الموجودة بالفعل على هذا الموقع.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'يغطي هذا الدليل أجهزة المحاور الجاهزة — Home Assistant Green (199 دولارًا)، وHubitat Elevation C-8 Pro (179.95 دولارًا)، وHomey Pro (449 دولارًا) — للتجميع الذاتي لكمبيوتر مصغّر/Pi، راجع بدلاً من ذلك دليل أفضل الأجهزة لمنزل ذكي محلي',
          'تم تأكيد الأسعار الثلاثة مباشرة من الشركات المصنّعة في 16 يوليو 2026 — شهدت هذه الفئة بالفعل توقفًا (Home Assistant Yellow) وارتفاعين في السعر في 2026 وحدها',
          'يختلف عن دليل مقارنة الأنظمة البيئية، الذي يقارن منصات البرمجيات (Alexa وGoogle وApple وHome Assistant)، وليس أجهزة المحاور',
          'الأولويات التي يجب مقارنتها: عمق المعالجة المحلية، ودعم البروتوكولات (Zigbee/Z-Wave/Thread/Matter)، وما إذا كان نظام التطبيقات يقيّدك',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: 'جهاز المحور مقابل التجميع الذاتي',
        content:
          '**جهاز المحور المخصص جاهز للعمل مباشرة من الصندوق؛ بينما يوفر التجميع الذاتي لكمبيوتر مصغّر أو Raspberry Pi (راجع دليل أفضل الأجهزة) مرونة أكبر ومساحة لإضافة الذكاء الاصطناعي المحلي، على حساب مزيد من جهد الإعداد.**',
        items: [
          'اختر جهازًا جاهزًا إذا كنت تريد أبسط طريق لمنزل ذكي محلي الأولوية يعمل دون البحث في مكونات أجهزة فردية.',
          'اختر التجميع الذاتي إذا كنت تريد تشغيل أعباء عمل إضافية على نفس الجهاز — نموذج لغوي كبير محلي، اكتشاف كاميرا Frigate بمسرّع مخصص — نظرًا لأن جهاز المحور المخصص عادة لا يكون مصممًا بحجم يناسب ذلك.',
          'يمكن لكلا الطريقين تشغيل برنامج Home Assistant؛ الفرق هو أجهزة معبأة مقابل أجهزة مجمّعة، وليس تجربة برمجية مختلفة لـ Home Assistant تحديدًا (يشغّل Hubitat وHomey منصتيهما الخاصتين المنفصلتين).',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: 'ما الذي يختلف بين المحاور',
        content:
          '**الاختلافات الرئيسية بين أجهزة المحاور هي منصة البرمجيات التي تشغّلها (Home Assistant مقابل منصة خاصة)، والراديوهات المدمجة للبروتوكولات، ومقدار المعالجة المحلية مقابل الاعتماد على السحابة الذي يتطلبه كل منها.**',
        items: [
          'يشغّل Home Assistant Green (199 دولارًا، مؤكد على home-assistant.io) برنامج Home Assistant الفعلي — نفس المنصة التي تُغطى في هذه المجموعة بأكملها — في شكل جهاز جاهز للتشغيل الفوري. رفعت Nabu Casa سعره مرتين في 2026 من سعر أصلي قدره 99 دولارًا عند الإطلاق في 2023، مستشهدة بارتفاع تكاليف مكونات الذاكرة RAM.',
          'يشغّل C-8 Pro من Hubitat (179.95 دولارًا، مؤكد على hubitat.com) منصة أتمتة خاصة به منفصلة مع تركيز معلن على المعالجة المحلية، ويدعم Zigbee 3.0 وZ-Wave 800 Long Range وMatter 1.5 (كوحدة تحكم) وBluetooth — منفصلة عن نظام Home Assistant البيئي وتكاملاته المجتمعية.',
          'يشغّل Homey Pro (449 دولارًا، مؤكد على homey.app — ارتفع من 399 دولارًا في 1 يونيو 2026) أيضًا منصته الخاصة، مع أوسع دعم بروتوكولات مدمج من بين الثلاثة: Wi-Fi وBluetooth وMatter v1.3 وموجّه حدودي Thread وZigbee 3.0 وZ-Wave 700 و433 ميغاهرتز والأشعة تحت الحمراء، على معالج رباعي النواة بسرعة 1.5 غيغاهرتز مع 4 غيغابايت من الذاكرة RAM.',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: 'كيف يختلف هذا عن مقارنة الأنظمة البيئية',
        content:
          '**يقارن دليل مقارنة الأنظمة البيئية منصات البرمجيات ومساعداتها الصوتية (Alexa وGoogle Home وApple Home وHome Assistant)؛ بينما يقارن هذا الدليل أجهزة المحاور الفعلية للمشترين الذين قرروا بالفعل أنهم يريدون جهازًا مخصصًا.**',
        items: [
          'اقرأ مقارنة الأنظمة البيئية أولاً إذا كنت تقرر أي نهج منصة/مساعد صوتي يناسبك.',
          'اقرأ هذا الدليل بمجرد أن تعرف أنك تريد جهاز محور مخصص وتحتاج إلى اختيار الأجهزة الفعلية.',
          'اقرأ بدلاً من ذلك دليل أفضل الأجهزة لمنزل ذكي محلي إذا كنت تفضل بناء محور كمبيوتر مصغّر/Pi بنفسك.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل جهاز المحور أفضل من التجميع الذاتي لكمبيوتر مصغّر؟', a: 'لا يوجد أفضل بشكل عام — الجهاز الجاهز أبسط في الإعداد؛ يوفر التجميع الذاتي مرونة أكبر لأعباء عمل إضافية مثل نموذج لغوي كبير محلي أو اكتشاف كاميرا Frigate. اختر بناءً على ما إذا كنت تريد البساطة أو المساحة الإضافية.' },
          { q: 'هل يشغّل Hubitat وHomey برنامج Home Assistant؟', a: 'لا — فهما يشغّلان منصتي أتمتة منفصلتين خاصتين بهما، مختلفتين عن Home Assistant. هذا فرق مهم عن جهاز من فئة Home Assistant Green، الذي يشغّل برنامج Home Assistant الفعلي.' },
          { q: 'هل ما زال Home Assistant Yellow متاحًا؟', a: 'لا — توقف إنتاج Home Assistant Yellow في أوائل 2026. Home Assistant Green (199 دولارًا، مؤكد على home-assistant.io) هو خيار الجهاز الرسمي الحالي.' },
          { q: 'هل يمكنني إضافة ذكاء اصطناعي محلي أو اكتشاف كاميرا إلى جهاز محور؟', a: 'بشكل عام، تُصمم أجهزة المحاور المخصصة لمهام المحور، وليس لأعباء عمل ثقيلة إضافية — راجع دليل أفضل الأجهزة لمنزل ذكي محلي إذا كنت تريد جهازًا واحدًا يشغّل أيضًا نموذجًا لغويًا كبيرًا محليًا أو Frigate.' },
          { q: 'أي محور لديه أفضل دعم بروتوكولات مدمج؟', a: 'يتمتع Homey Pro (449 دولارًا) بأوسع دعم لاسلكي مؤكد من بين الثلاثة — Wi-Fi وBluetooth وMatter v1.3 وموجّه حدودي Thread وZigbee 3.0 وZ-Wave 700 و433 ميغاهرتز والأشعة تحت الحمراء. يغطي C-8 Pro من Hubitat (179.95 دولارًا) Zigbee 3.0 وZ-Wave 800 Long Range وMatter 1.5 (وحدة تحكم) وBluetooth. يعتمد Home Assistant Green (199 دولارًا) على دونجل USB (راجع دليل دونجل Zigbee/Thread) لدعم الاتصال اللاسلكي بدلاً من دمجه بالكامل.' },
          { q: 'هل تغيرت أسعار هذه المحاور مؤخرًا؟', a: 'نعم — رفع كل من Home Assistant Green (مرتين في 2026، من سعر أصلي قدره 99 دولارًا عند الإطلاق في 2023) وHomey Pro (من 399 دولارًا إلى 449 دولارًا في 1 يونيو 2026) أسعارهما هذا العام، وكلا الشركتين تستشهدان بارتفاع تكاليف المكونات.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مقارنة أنظمة المنزل الذكي البيئية](/ar/smart-home/smart-home-ecosystems-compared) — مقارنة البرمجيات/المنصات، وليست الأجهزة',
          '[أفضل الأجهزة لمنزل ذكي محلي + ذكاء اصطناعي محلي](/ar/smart-home/best-hardware-for-local-smart-home) — بديل التجميع الذاتي لكمبيوتر مصغّر/Pi',
          '[نظام Matter البيئي من IKEA: دليل شامل](/ar/smart-home/ikea-matter-ecosystem-guide-2027) — بديل اقتصادي من جهاز مع محور',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل محاور المنزل الذكي للتحكم المحلي (⁨2027⁩)',
      description: 'أفضل محاور المنزل الذكي للتحكم المحلي: مقارنة أجهزة المحاور الجاهزة، للمشترين الذين يريدون أجهزة جاهزة للعمل.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل جهاز المحور أفضل من التجميع الذاتي لكمبيوتر مصغّر؟', acceptedAnswer: { '@type': 'Answer', text: 'لا يوجد أفضل بشكل عام — الجهاز الجاهز أبسط؛ يوفر التجميع الذاتي مرونة أكبر لأعباء عمل إضافية.' } },
        { '@type': 'Question', name: 'هل يشغّل Hubitat وHomey برنامج Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — فهما يشغّلان منصتي أتمتة منفصلتين خاصتين بهما، مختلفتين عن Home Assistant.' } },
        { '@type': 'Question', name: 'هل ما زال Home Assistant Yellow متاحًا؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — توقف إنتاج Home Assistant Yellow في أوائل 2026.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-smart-home-hubs-2027-overview-hero-ko.png',
    affiliateDisclosure: true,
    title: '로컬 제어를 위한 최고의 스마트홈 허브 (2027년)',
    seoTitle: '최고의 스마트홈 허브 (2027년)',
    intro:
      '이 가이드는 미니PC나 Raspberry Pi를 직접 조립하는 대신 바로 사용할 수 있는 하드웨어를 원하는 구매자를 위해 기성품 허브 기기(Home Assistant Green, Hubitat Elevation C-8 Pro, Homey Pro)를 비교합니다. 세 제품 모두 확인된 현재 판매 중인 제품이며 가격도 현재 가격입니다(2026년 7월 16일 확인) — 그리고 세 제품 중 두 제품은 이미 2026년에 가격이 인상되었으며, Home Assistant Yellow의 이전 단종과 더불어 이 카테고리가 얼마나 빠르게 변화하는지 보여줍니다. 이는 생태계 비교(Alexa vs Google vs Apple vs Home Assistant)와 이 사이트에 이미 있는 더 폭넓은 DIY 하드웨어 가이드와는 별개입니다.',
    metaDescription:
      '2027년 로컬 제어를 위한 최고의 스마트홈 허브: DIY 미니PC 구축이 아닌 바로 사용 가능한 하드웨어를 원하는 구매자를 위해 기성품 허브 기기를 비교합니다.',
    twitterDescription:
      '로컬 제어를 위한 기성품 스마트홈 허브 기기 비교 — DIY 미니PC 구축이 아닌 플러그 앤 플레이 하드웨어를 원하는 구매자를 위한 가이드.',
    readTime: '7분 소요',
    educationalLevel: 'Beginner',
    audience: 'DIY 하드웨어 구축이 아닌 바로 사용 가능한 허브 기기를 원하는 스마트홈 구매자',
    primaryTerm: 'best smart home hub 2027',
    targetKeywords: [
      '최고의 스마트홈 허브 2027',
      'home assistant green vs hubitat vs homey',
      '바로 사용 가능한 스마트홈 허브',
      '기성품 home assistant 허브',
      '스마트홈 허브 기기',
    ],
    leadAnswerBlock:
      '**이 가이드는 DIY 미니PC나 Raspberry Pi 구축이 아닌 바로 사용 가능한 하드웨어를 원하는 구매자를 위해 전용 허브 기기 — Home Assistant Green($199), Hubitat Elevation C-8 Pro($179.95), Homey Pro($449) — 를 비교합니다.** 세 가격 모두 2026년 7월 16일 제조사로부터 직접 확인되었습니다. 이 카테고리는 빠르게 변화하며, Home Assistant Yellow는 이미 단종되었고 이 세 허브 중 두 개는 2026년 초에 이미 가격이 인상되었습니다. 대신 DIY 방식을 원한다면 로컬 스마트홈을 위한 최고의 하드웨어 가이드를 참고하세요.',
    quickAnswerTop: {
      ko: {
        question: '가장 좋은 기성품 스마트홈 허브는 무엇인가요?',
        answer:
          'DIY 구축이 아닌 바로 사용 가능한 기기를 원한다면, Home Assistant Green($199), Hubitat Elevation C-8 Pro($179.95), Homey Pro($449)가 현재 세 가지 전용 허브 옵션이며 각각 서로 다른 절충점이 있습니다. Home Assistant Green은 원래 직접 호스팅해야 할 실제 Home Assistant 소프트웨어를 실행합니다. Nabu Casa는 2026년에 가격을 두 차례 인상했습니다(2023년 $99 출시가에서 시작). 이유는 RAM 부품 비용입니다. Hubitat의 C-8 Pro는 로컬 처리에 중점을 둔 자체 플랫폼을 실행하며 Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5 컨트롤러를 지원합니다. Homey Pro는 세 제품 중 가장 폭넓은 내장 무선 지원(Wi-Fi, 블루투스, Matter, Thread 경계 라우터, Zigbee, Z-Wave, 433MHz, 적외선)을 제공하지만 역시 자체 별도 플랫폼을 실행하며, 가격은 2026년 6월 1일에 $399에서 $449로 인상되었습니다.',
        bullets: [
          'Home Assistant Green($199): Home Assistant 전체 생태계에 대한 플러그 앤 플레이 접근',
          'Hubitat Elevation C-8 Pro($179.95): 로컬 처리 중점, Zigbee 3.0/Z-Wave 800 LR/Matter 1.5, 자체 자동화 엔진',
          'Homey Pro($449): 세 제품 중 가장 폭넓은 기본 프로토콜 지원(Thread 경계 라우터, 433MHz, 적외선 추가), 자체 앱 생태계',
          '세 가격 모두 2026년 7월 16일 확인됨 — 이 카테고리는 이미 단종(HA Yellow)과 2026년 두 차례의 가격 인상을 겪었습니다',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '허브 기기 vs DIY 구축', anchor: 'appliance-vs-diy' },
      { label: '허브 간 차이점', anchor: 'what-differs' },
      { label: '생태계 비교와의 차이점', anchor: 'differs-from-ecosystem' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '기성품 스마트홈 허브 기기(Home Assistant Green급, Hubitat, Homey)는 DIY 유연성을 바로 사용 가능한 하드웨어와 맞바꿉니다 — 이 카테고리는 이미 단종을 겪은 적이 있으므로 구매 전 현재 구체적인 SKU와 가격을 확인하세요.' },
      { type: 'plain-terms', content: '미니PC나 Raspberry Pi로 직접 스마트홈 허브를 만드는 대신, 이 목적으로 특별히 제작된 기기를 구매할 수 있습니다 — 연결하면 이미 작동할 수 있게 설정되어 있습니다. 이 가이드는 이 사이트에 이미 있는 일반 소프트웨어 플랫폼 비교(Alexa vs Google vs Home Assistant)와는 별개로 이러한 기성품 옵션을 비교합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '이 가이드는 기성품 허브 기기 — Home Assistant Green($199), Hubitat Elevation C-8 Pro($179.95), Homey Pro($449) — 를 다룹니다. DIY 미니PC/Pi 구축은 로컬 스마트홈을 위한 최고의 하드웨어 가이드를 참고하세요',
          '3개 가격 모두 2026년 7월 16일 제조사로부터 직접 확인됨 — 이 카테고리는 이미 단종(Home Assistant Yellow)과 2026년에만 2번의 가격 인상을 겪었습니다',
          '소프트웨어 플랫폼(Alexa, Google, Apple, Home Assistant)을 비교하는 생태계 비교 가이드와 달리 허브 하드웨어를 비교합니다',
          '비교할 우선순위: 로컬 처리 심도, 프로토콜 지원(Zigbee/Z-Wave/Thread/Matter), 앱 생태계가 종속을 유발하는지 여부',
        ],
      },
      applianceVsDiy: {
        id: 'appliance-vs-diy',
        title: '허브 기기 vs DIY 구축',
        content:
          '**전용 허브 기기는 박스에서 꺼내면 바로 사용할 수 있고, DIY 미니PC나 Raspberry Pi 구축(최고의 하드웨어 가이드 참고)은 더 많은 설정 노력을 대가로 더 큰 유연성과 로컬 AI 추가 여유 공간을 제공합니다.**',
        items: [
          '개별 하드웨어 구성 요소를 조사하지 않고 작동하는 로컬 우선 스마트홈으로 가는 가장 단순한 방법을 원한다면 기기를 선택하세요.',
          '동일한 박스에서 추가 워크로드 — 로컬 LLM, 전용 가속기를 사용한 Frigate 카메라 감지 — 를 실행하고 싶다면 DIY 구축을 선택하세요. 전용 허브 기기는 일반적으로 그런 용도로 설계되지 않았습니다.',
          '두 방식 모두 Home Assistant 소프트웨어를 실행할 수 있습니다. 차이는 패키지화된 하드웨어와 조립된 하드웨어의 차이일 뿐, Home Assistant 자체에 대해 다른 소프트웨어 경험을 제공하는 것은 아닙니다(Hubitat과 Homey는 각자 별도의 자체 플랫폼을 실행합니다).',
        ],
      },
      whatDiffers: {
        id: 'what-differs',
        title: '허브 간 차이점',
        content:
          '**허브 기기 간의 주요 차이점은 실행하는 소프트웨어 플랫폼(Home Assistant vs 독점 플랫폼), 내장된 프로토콜 무선, 그리고 각각 얼마나 많은 로컬 처리와 클라우드 의존성을 필요로 하는지입니다.**',
        items: [
          'Home Assistant Green($199, home-assistant.io에서 확인됨)은 이 클러스터 전체에서 다루는 것과 동일한 플랫폼인 실제 Home Assistant 소프트웨어를 플러그 앤 플레이 기기 형태로 실행합니다. Nabu Casa는 2023년 출시 당시 원래 $99였던 가격에서 2026년에 두 차례 인상했으며, 이유는 RAM 부품 비용 상승입니다.',
          'Hubitat의 Elevation C-8 Pro($179.95, hubitat.com에서 확인됨)는 로컬 처리에 명시적으로 중점을 둔 자체 별도 자동화 플랫폼을 실행하며, Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5(컨트롤러로서), 블루투스를 지원합니다 — Home Assistant 생태계 및 커뮤니티 통합과는 별개입니다.',
          'Homey Pro($449, homey.app에서 확인됨 — 2026년 6월 1일 $399에서 인상됨) 역시 자체 플랫폼을 실행하며, 세 제품 중 가장 폭넓은 내장 프로토콜 지원을 제공합니다: Wi-Fi, 블루투스, Matter v1.3, Thread 경계 라우터, Zigbee 3.0, Z-Wave 700, 433MHz, 적외선을 1.5GHz 쿼드코어 프로세서와 4GB RAM에서 지원합니다.',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
          { label: 'Hubitat Elevation C-8 Pro', url: 'https://hubitat.com/products/7194320273451', productName: 'Hubitat Elevation C-8 Pro', productCategory: 'Smart home hub' },
          { label: 'Homey Pro', url: 'https://homey.app/en-us/homey-pro/', productName: 'Homey Pro', productCategory: 'Smart home hub' },
        ],
      },
      differsFromEcosystem: {
        id: 'differs-from-ecosystem',
        title: '생태계 비교와의 차이점',
        content:
          '**생태계 비교 가이드는 소프트웨어 플랫폼과 그 음성 비서(Alexa, Google Home, Apple Home, Home Assistant)를 비교하며, 이 가이드는 이미 전용 기기를 원한다고 결정한 구매자를 위해 물리적 허브 하드웨어를 비교합니다.**',
        items: [
          '어떤 플랫폼/음성 비서 방식이 자신에게 맞는지 결정 중이라면 먼저 생태계 비교를 읽으세요.',
          '전용 허브 기기를 원한다는 것을 알고 물리적 하드웨어를 선택해야 한다면 이 가이드를 읽으세요.',
          '대신 미니PC/Pi 허브를 직접 만들고 싶다면 로컬 스마트홈을 위한 최고의 하드웨어 가이드를 읽으세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '허브 기기가 DIY 미니PC 구축보다 나은가요?', a: '보편적으로 어느 쪽이 더 낫다고 할 수는 없습니다 — 기기는 설정이 더 간단하고, DIY 구축은 로컬 LLM이나 Frigate 카메라 감지 같은 추가 워크로드에 더 큰 유연성을 제공합니다. 단순함을 원하는지 여유 공간을 원하는지에 따라 선택하세요.' },
          { q: 'Hubitat와 Homey는 Home Assistant 소프트웨어를 실행하나요?', a: '아니요 — 두 제품은 Home Assistant와 별개인 자체 자동화 플랫폼을 실행합니다. 이는 실제 Home Assistant 소프트웨어를 실행하는 Home Assistant Green급 기기와의 중요한 차이점입니다.' },
          { q: 'Home Assistant Yellow는 아직 구매할 수 있나요?', a: '아니요 — Home Assistant Yellow는 2026년 초에 단종되었습니다. Home Assistant Green($199, home-assistant.io에서 확인됨)이 현재 공식 기기 옵션입니다.' },
          { q: '허브 기기에 로컬 AI나 카메라 감지를 추가할 수 있나요?', a: '일반적으로 전용 허브 기기는 허브 역할에 맞게 설계되어 있으며 추가적인 무거운 워크로드용이 아닙니다 — 로컬 LLM이나 Frigate도 함께 실행하는 단일 기기를 원한다면 로컬 스마트홈을 위한 최고의 하드웨어 가이드를 참고하세요.' },
          { q: '어떤 허브가 가장 좋은 내장 프로토콜 지원을 제공하나요?', a: 'Homey Pro($449)는 세 제품 중 가장 폭넓은 확인된 무선 지원을 제공합니다 — Wi-Fi, 블루투스, Matter v1.3, Thread 경계 라우터, Zigbee 3.0, Z-Wave 700, 433MHz, 적외선. Hubitat의 C-8 Pro($179.95)는 Zigbee 3.0, Z-Wave 800 Long Range, Matter 1.5(컨트롤러), 블루투스를 지원합니다. Home Assistant Green($199)은 모든 것을 내장하는 대신 무선 지원을 위해 USB 동글(Zigbee/Thread 동글 가이드 참고)에 의존합니다.' },
          { q: '이 허브 가격이 최근 변경되었나요?', a: '네 — Home Assistant Green(2026년에 두 차례, 2023년 출시 당시 원래 $99에서 시작)과 Homey Pro(2026년 6월 1일 $399에서 $449로) 모두 올해 가격을 인상했으며, 두 제조사 모두 부품 비용 상승을 이유로 들었습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[스마트홈 생태계 비교](/ko/smart-home/smart-home-ecosystems-compared) — 하드웨어가 아닌 소프트웨어/플랫폼 비교',
          '[로컬 스마트홈 + 로컬 AI를 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — DIY 미니PC/Pi 대안',
          '[IKEA의 Matter 생태계: 완벽 가이드](/ko/smart-home/ikea-matter-ecosystem-guide-2027) — 저렴한 기기 플러스 허브 대안',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 제어를 위한 최고의 스마트홈 허브 (2027년)',
      description: '로컬 제어를 위한 최고의 스마트홈 허브: 바로 사용 가능한 하드웨어를 원하는 구매자를 위해 기성품 허브 기기를 비교합니다.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-smart-home-hubs-2027',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Smart home hub' }, { '@type': 'Thing', name: 'Home Assistant Green' }, { '@type': 'Thing', name: 'Hubitat' }, { '@type': 'Thing', name: 'Homey' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '허브 기기가 DIY 미니PC 구축보다 나은가요?', acceptedAnswer: { '@type': 'Answer', text: '보편적으로 어느 쪽이 더 낫다고 할 수는 없습니다 — 기기는 더 간단하고, DIY 구축은 추가 워크로드에 더 큰 유연성을 제공합니다.' } },
        { '@type': 'Question', name: 'Hubitat와 Homey는 Home Assistant 소프트웨어를 실행하나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 두 제품은 Home Assistant와 별개인 자체 자동화 플랫폼을 실행합니다.' } },
        { '@type': 'Question', name: 'Home Assistant Yellow는 아직 구매할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — Home Assistant Yellow는 2026년 초에 단종되었습니다.' } },
      ],
    },
  },
}
