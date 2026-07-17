import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    // Verified 2026-07-16 against official sources: home-assistant.io/connect/zbt-2 (Connect ZBT-2,
    // $49, Silicon Labs MG24 + ESP32-S3 USB bridge — replaces the now-discontinued Connect ZBT-1/
    // SkyConnect), sonoff.tech/itead.cc (Zigbee 3.0 USB Dongle Plus, ~$27 — confirms the ZBDongle-P
    // variant uses a TI CC2652P chipset and the ZBDongle-E variant uses a Silicon Labs EFR32MG21,
    // a real, current example of the exact "same product name, different chipset" risk this article
    // already warned about), and phoscon.de/smarthomescene.com (ConBee II superseded by ConBee III,
    // ~€39.95 — ships with Zigbee 3.0 firmware by default, with an alternative OpenThread Border
    // Router firmware available for Thread use, not simultaneous Zigbee+Thread on one dongle).
    title: 'Best Zigbee and Thread USB Dongles (2027)',
    seoTitle: 'Best Zigbee + Thread Dongles (2027)',
    intro:
      "A USB Zigbee coordinator or Thread border router dongle is what turns a mini PC or Raspberry Pi running Home Assistant into a full smart home hub capable of pairing Zigbee and Thread devices directly. Home Assistant's own Connect ZBT-2 ($49), Sonoff's Zigbee 3.0 USB Dongle Plus (~$27, in two chipset variants under one product name), and Dresden Elektronik's ConBee III (~€40) are confirmed current options (checked 2026-07-16) — and the ZBT-2 itself replaces a now-discontinued predecessor, a real example of why this category needs checking before buying, not just a warning.",
    metaDescription:
      'Best Zigbee and Thread USB dongles for Home Assistant in 2027: what chipset differences mean and how to pair a dongle with a mini PC or Pi hub.',
    twitterDescription:
      'Buying guide for Zigbee coordinator and Thread border router USB dongles — chipset differences and what to check before buying.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users adding Zigbee or Thread device support to a mini PC or Pi hub',
    primaryTerm: 'best zigbee dongle home assistant',
    targetKeywords: [
      'best zigbee dongle home assistant',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      "**A USB Zigbee coordinator dongle adds Zigbee device pairing to a Home Assistant hub that doesn't have it built in, and a Thread border router dongle does the same for Thread devices — the chipset inside the dongle, not just the brand name, determines range and reliability.** Confirmed current options (checked 2026-07-16): Home Assistant's own Connect ZBT-2 ($49, Zigbee or Thread), Sonoff's Zigbee 3.0 USB Dongle Plus (~$27), and Dresden Elektronik's ConBee III (~€40).",
    quickAnswerTop: {
      en: {
        question: 'What USB dongle do I need for Zigbee or Thread devices with Home Assistant?',
        answer:
          "A Zigbee coordinator dongle (commonly paired with the Zigbee2MQTT or ZHA integration) lets Home Assistant pair and control Zigbee devices directly; a Thread border router dongle does the equivalent for Thread devices, though many Thread border routers are built into existing smart speakers/hubs rather than needing a dedicated dongle. Confirmed current options (checked 2026-07-16): Home Assistant's own Connect ZBT-2 ($49, Silicon Labs MG24 chipset, supports Zigbee or Thread — not simultaneously — and replaces the now-discontinued Connect ZBT-1/SkyConnect); Sonoff's Zigbee 3.0 USB Dongle Plus (~$27), which ships in two chipset variants under the same product name — ZBDongle-P (TI CC2652P) and ZBDongle-E (Silicon Labs EFR32MG21) — a live example of why checking the chipset, not just the product name, matters; and Dresden Elektronik's ConBee III (~€40), the current successor to the older ConBee II.",
        bullets: [
          'Zigbee coordinator dongle: needed if your hub has no built-in Zigbee radio',
          'Thread border router: often already built into an existing smart speaker/hub — check before buying a dedicated dongle',
          "Confirmed current picks: HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, check ZBDongle-P vs -E chipset), ConBee III (~€40)",
          'A USB extension cable improves range/reliability by moving the dongle away from a mini PC\'s own radio interference',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Zigbee Coordinator Dongles', anchor: 'zigbee-dongles' },
      { label: 'Thread Border Router Dongles', anchor: 'thread-dongles' },
      { label: 'Setup Tips', anchor: 'setup-tips' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "A USB Zigbee coordinator dongle or Thread border router dongle adds device-pairing radio support to a Home Assistant hub — check the chipset specifically, since product names don't always reflect internal chipset changes." },
      { type: 'plain-terms', content: 'A mini PC or Raspberry Pi running Home Assistant usually doesn\'t have a built-in radio for Zigbee devices like sensors and bulbs. A small USB dongle adds that radio. The same applies to Thread, though many people already own a Thread-capable device (like a smart speaker) without realizing it.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          "Zigbee coordinator dongle: needed if your Home Assistant hub has no built-in Zigbee radio",
          'Thread border router: check if you already have one built into an existing smart speaker/hub before buying a dedicated dongle',
          "Confirmed current picks (checked 2026-07-16): HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, two chipset variants — ZBDongle-P vs -E), ConBee III (~€40)",
          'A USB extension cable moving the dongle away from the hub\'s own electronics often improves reliability',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Zigbee Coordinator Dongles',
        content:
          '**A Zigbee coordinator dongle plugs into your Home Assistant hub via USB and pairs with the Zigbee2MQTT or ZHA integration — the specific radio chipset inside determines range and reliability more than the outer product branding.**',
        items: [
          "Sonoff's Zigbee 3.0 USB Dongle Plus (~$27) is a real, current example of exactly this risk: it ships in two chipset variants under the same product name — ZBDongle-P (TI CC2652P chipset) and ZBDongle-E (Silicon Labs EFR32MG21 chipset) — per Sonoff's own product pages. Check which variant you're buying, not just the product name.",
          "Dresden Elektronik's ConBee III (~€40) is the current successor to the older, now-superseded ConBee II — it ships with Zigbee 3.0 firmware by default, with an alternative OpenThread Border Router firmware available for Thread use (not simultaneous with Zigbee on the same dongle), per Dresden Elektronik's own product page.",
          'A USB extension cable (a few dollars) moving the dongle 1-2 meters away from a mini PC\'s own USB 3.0 ports and Wi-Fi radio commonly improves Zigbee range and reliability, since USB 3.0 can interfere with the 2.4GHz Zigbee band.',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Thread Border Router Dongles',
        content:
          '**A dedicated Thread border router dongle is only needed if you don\'t already have one built into an existing smart speaker or hub — check your current hardware first.**',
        items: [
          'Many households already have a Thread border router without realizing it, built into an existing smart speaker or hub from a major ecosystem — see the Thread/Wi-Fi routers guide for how to check.',
          'A dedicated Thread border router dongle for a Home Assistant hub is useful if you want Thread coverage independent of another ecosystem\'s hardware, or additional border routers to extend mesh coverage.',
          "Home Assistant's own Connect ZBT-2 ($49, confirmed on home-assistant.io) supports Thread as well as Zigbee — though not both at once on the same dongle — and is the official first-party option, replacing the discontinued Connect ZBT-1/SkyConnect.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: 'Setup Tips',
        content:
          '**Use a USB extension cable, avoid USB hubs for the radio dongle specifically, and check firmware update requirements before first use.**',
        items: [
          'Plug the dongle directly into a hub port (via extension cable) rather than through a USB hub, which can introduce latency or interference for radio devices.',
          'Some coordinator dongles need a firmware flash before first use to run the correct Zigbee2MQTT/ZHA-compatible firmware — check the specific product\'s setup documentation.',
          'Position the dongle (via its extension cable) away from other 2.4GHz sources (Wi-Fi routers, USB 3.0 ports) for the most reliable range.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need both a Zigbee dongle and a Thread dongle?', a: 'Only if you have devices of both types and no existing Thread border router. Many households already have Thread coverage via an existing smart speaker or hub.' },
          { q: 'Does the product name guarantee the same chipset over time?', a: 'No — this category has seen manufacturers change the internal chipset of a product line without renaming it. Check current documentation and community reports for the specific chipset, not just the product name.' },
          { q: 'Why use a USB extension cable for the dongle?', a: 'It moves the radio dongle away from a mini PC\'s own USB 3.0 ports and Wi-Fi radio, both of which can interfere with the Zigbee 2.4GHz band, generally improving range and reliability.' },
          { q: 'Zigbee2MQTT or ZHA — does the dongle choice matter?', a: 'Check the specific integration\'s (Zigbee2MQTT or ZHA) current supported-chipset list before buying, since not every dongle is supported identically by both.' },
          { q: 'Can I use a Thread dongle instead of my existing smart speaker\'s border router?', a: 'You can run multiple Thread border routers simultaneously — they cooperate to extend mesh coverage rather than conflict, so adding a dedicated one is additive, not a replacement requirement.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — protocol fundamentals',
          '[Thread and Wi-Fi 7 Routers for Smart Homes](/smart-home/thread-14-wifi-7-routers-guide) — Thread border router basics',
          '[Best Hardware for a Local Smart Home + Local AI](/smart-home/best-hardware-for-local-smart-home) — the hub hardware this pairs with',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Zigbee and Thread USB Dongles (2027)',
      description: 'Best Zigbee and Thread USB dongles for Home Assistant: chipset differences and what to check before buying.',
      url: 'https://www.promptquorum.com/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Zigbee coordinator' }, { '@type': 'Thing', name: 'Thread border router' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need both a Zigbee dongle and a Thread dongle?', acceptedAnswer: { '@type': 'Answer', text: 'Only if you have devices of both types and no existing Thread border router.' } },
        { '@type': 'Question', name: 'Does the product name guarantee the same chipset over time?', acceptedAnswer: { '@type': 'Answer', text: 'No — manufacturers have changed internal chipsets of a product line without renaming it.' } },
        { '@type': 'Question', name: 'Why use a USB extension cable for the dongle?', acceptedAnswer: { '@type': 'Answer', text: 'It moves the radio dongle away from USB 3.0 ports and Wi-Fi, both of which can interfere with the Zigbee band.' } },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: 'Die besten Zigbee- und Thread-USB-Dongles (2027)',
    seoTitle: 'Beste Zigbee + Thread Dongles (2027)',
    intro:
      "Ein USB-Zigbee-Koordinator- oder Thread-Border-Router-Dongle verwandelt einen Mini-PC oder Raspberry Pi mit Home Assistant in einen vollwertigen Smart-Home-Hub, der Zigbee- und Thread-Geräte direkt koppeln kann. Home Assistants eigener Connect ZBT-2 ($49), Sonoffs Zigbee 3.0 USB Dongle Plus (~$27, in zwei Chipsatz-Varianten unter einem Produktnamen) und Dresden Elektroniks ConBee III (~€40) sind bestätigte aktuelle Optionen (geprüft am 16.07.2026) — und der ZBT-2 selbst ersetzt einen inzwischen eingestellten Vorgänger, ein reales Beispiel dafür, warum diese Kategorie vor dem Kauf geprüft werden sollte, nicht nur eine Warnung.",
    metaDescription:
      'Die besten Zigbee- und Thread-USB-Dongles für Home Assistant 2027: was Chipsatz-Unterschiede bedeuten und wie man einen Dongle mit einem Mini-PC- oder Pi-Hub koppelt.',
    twitterDescription:
      'Kaufratgeber für Zigbee-Koordinator- und Thread-Border-Router-USB-Dongles — Chipsatz-Unterschiede und worauf man vor dem Kauf achten sollte.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die einem Mini-PC- oder Pi-Hub Zigbee- oder Thread-Geräteunterstützung hinzufügen',
    primaryTerm: 'bester zigbee dongle home assistant',
    targetKeywords: [
      'bester zigbee dongle home assistant',
      'thread border router usb dongle',
      'zigbee koordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      "**Ein USB-Zigbee-Koordinator-Dongle fügt einem Home-Assistant-Hub, der es nicht eingebaut hat, die Kopplung mit Zigbee-Geräten hinzu, und ein Thread-Border-Router-Dongle tut dasselbe für Thread-Geräte — der Chipsatz im Dongle, nicht nur die Marke, bestimmt Reichweite und Zuverlässigkeit.** Bestätigte aktuelle Optionen (geprüft am 16.07.2026): Home Assistants eigener Connect ZBT-2 ($49, Zigbee oder Thread), Sonoffs Zigbee 3.0 USB Dongle Plus (~$27) und Dresden Elektroniks ConBee III (~€40).",
    quickAnswerTop: {
      de: {
        question: 'Welchen USB-Dongle brauche ich für Zigbee- oder Thread-Geräte mit Home Assistant?',
        answer:
          "Ein Zigbee-Koordinator-Dongle (üblicherweise mit der Zigbee2MQTT- oder ZHA-Integration gekoppelt) lässt Home Assistant Zigbee-Geräte direkt koppeln und steuern; ein Thread-Border-Router-Dongle erfüllt dasselbe für Thread-Geräte, auch wenn viele Thread-Border-Router bereits in bestehende Smart Speaker/Hubs eingebaut sind, statt einen eigenen Dongle zu benötigen. Bestätigte aktuelle Optionen (geprüft am 16.07.2026): Home Assistants eigener Connect ZBT-2 ($49, Silicon-Labs-MG24-Chipsatz, unterstützt Zigbee oder Thread — nicht gleichzeitig — und ersetzt den inzwischen eingestellten Connect ZBT-1/SkyConnect); Sonoffs Zigbee 3.0 USB Dongle Plus (~$27), der unter demselben Produktnamen in zwei Chipsatz-Varianten erscheint — ZBDongle-P (TI CC2652P) und ZBDongle-E (Silicon Labs EFR32MG21) — ein reales Beispiel dafür, warum der Chipsatz zählt, nicht nur der Produktname; und Dresden Elektroniks ConBee III (~€40), der aktuelle Nachfolger des älteren ConBee II.",
        bullets: [
          'Zigbee-Koordinator-Dongle: nötig, wenn der Hub kein eingebautes Zigbee-Funkmodul hat',
          'Thread-Border-Router: oft bereits in einen bestehenden Smart Speaker/Hub eingebaut — vor dem Kauf eines eigenen Dongles prüfen',
          "Bestätigte aktuelle Empfehlungen: HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, ZBDongle-P vs. -E-Chipsatz prüfen), ConBee III (~€40)",
          'Ein USB-Verlängerungskabel verbessert Reichweite/Zuverlässigkeit, indem es den Dongle von den eigenen Funkstörungen des Mini-PCs entfernt',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Zigbee-Koordinator-Dongles', anchor: 'zigbee-dongles' },
      { label: 'Thread-Border-Router-Dongles', anchor: 'thread-dongles' },
      { label: 'Einrichtungstipps', anchor: 'setup-tips' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Ein USB-Zigbee-Koordinator-Dongle oder Thread-Border-Router-Dongle fügt einem Home-Assistant-Hub Funkunterstützung für die Gerätekopplung hinzu — prüfe gezielt den Chipsatz, da Produktnamen interne Chipsatz-Änderungen nicht immer widerspiegeln." },
      { type: 'plain-terms', content: 'Ein Mini-PC oder Raspberry Pi mit Home Assistant hat normalerweise kein eingebautes Funkmodul für Zigbee-Geräte wie Sensoren und Lampen. Ein kleiner USB-Dongle fügt dieses Funkmodul hinzu. Dasselbe gilt für Thread, auch wenn viele Menschen bereits ein Thread-fähiges Gerät (wie einen Smart Speaker) besitzen, ohne es zu wissen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          "Zigbee-Koordinator-Dongle: nötig, wenn der Home-Assistant-Hub kein eingebautes Zigbee-Funkmodul hat",
          'Thread-Border-Router: vor dem Kauf eines eigenen Dongles prüfen, ob schon einer in einem bestehenden Smart Speaker/Hub eingebaut ist',
          "Bestätigte aktuelle Empfehlungen (geprüft am 16.07.2026): HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, zwei Chipsatz-Varianten — ZBDongle-P vs. -E), ConBee III (~€40)",
          'Ein USB-Verlängerungskabel, das den Dongle von der eigenen Elektronik des Hubs entfernt, verbessert oft die Zuverlässigkeit',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Zigbee-Koordinator-Dongles',
        content:
          '**Ein Zigbee-Koordinator-Dongle wird per USB an den Home-Assistant-Hub angeschlossen und koppelt sich mit der Zigbee2MQTT- oder ZHA-Integration — der spezifische Funkchipsatz im Inneren bestimmt Reichweite und Zuverlässigkeit stärker als das äußere Produkt-Branding.**',
        items: [
          "Sonoffs Zigbee 3.0 USB Dongle Plus (~$27) ist ein reales, aktuelles Beispiel für genau dieses Risiko: Er erscheint unter demselben Produktnamen in zwei Chipsatz-Varianten — ZBDongle-P (TI-CC2652P-Chipsatz) und ZBDongle-E (Silicon-Labs-EFR32MG21-Chipsatz) — laut Sonoffs eigenen Produktseiten. Prüfe, welche Variante du kaufst, nicht nur den Produktnamen.",
          "Dresden Elektroniks ConBee III (~€40) ist der aktuelle Nachfolger des älteren, inzwischen abgelösten ConBee II — er wird standardmäßig mit Zigbee-3.0-Firmware ausgeliefert, mit einer alternativen OpenThread-Border-Router-Firmware für die Thread-Nutzung (nicht gleichzeitig mit Zigbee auf demselben Dongle), laut Dresden Elektroniks eigener Produktseite.",
          'Ein USB-Verlängerungskabel (wenige Euro) bewegt den Dongle 1-2 Meter weg von den eigenen USB-3.0-Anschlüssen und dem Wi-Fi-Funkmodul eines Mini-PCs und verbessert damit häufig Zigbee-Reichweite und -Zuverlässigkeit, da USB 3.0 das 2,4-GHz-Zigbee-Band stören kann.',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Thread-Border-Router-Dongles',
        content:
          '**Ein eigener Thread-Border-Router-Dongle ist nur nötig, wenn nicht bereits einer in einen bestehenden Smart Speaker oder Hub eingebaut ist — prüfe zuerst deine vorhandene Hardware.**',
        items: [
          'Viele Haushalte besitzen bereits einen Thread-Border-Router, ohne es zu wissen, eingebaut in einen bestehenden Smart Speaker oder Hub eines großen Ökosystems — siehe den Thread/Wi-Fi-Router-Leitfaden, wie man das prüft.',
          'Ein eigener Thread-Border-Router-Dongle für einen Home-Assistant-Hub ist nützlich, wenn du Thread-Abdeckung unabhängig von der Hardware eines anderen Ökosystems willst, oder zusätzliche Border-Router zur Erweiterung der Mesh-Abdeckung.',
          "Home Assistants eigener Connect ZBT-2 ($49, bestätigt auf home-assistant.io) unterstützt neben Zigbee auch Thread — wenn auch nicht beides gleichzeitig auf demselben Dongle — und ist die offizielle Erstanbieter-Option, die den eingestellten Connect ZBT-1/SkyConnect ersetzt.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: 'Einrichtungstipps',
        content:
          '**Nutze ein USB-Verlängerungskabel, vermeide USB-Hubs speziell für den Funk-Dongle, und prüfe Firmware-Update-Anforderungen vor der ersten Nutzung.**',
        items: [
          'Stecke den Dongle direkt (über ein Verlängerungskabel) in einen Hub-Port statt über einen USB-Hub, der Latenz oder Störungen für Funkgeräte verursachen kann.',
          'Manche Koordinator-Dongles benötigen vor der ersten Nutzung ein Firmware-Flashing, um die richtige Zigbee2MQTT-/ZHA-kompatible Firmware auszuführen — prüfe die Einrichtungsdokumentation des jeweiligen Produkts.',
          'Positioniere den Dongle (über sein Verlängerungskabel) fern von anderen 2,4-GHz-Quellen (Wi-Fi-Router, USB-3.0-Anschlüsse) für die zuverlässigste Reichweite.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Brauche ich sowohl einen Zigbee- als auch einen Thread-Dongle?', a: 'Nur wenn du Geräte beider Typen hast und keinen bestehenden Thread-Border-Router. Viele Haushalte haben bereits Thread-Abdeckung über einen bestehenden Smart Speaker oder Hub.' },
          { q: 'Garantiert der Produktname denselben Chipsatz über die Zeit?', a: 'Nein — in dieser Kategorie haben Hersteller den internen Chipsatz einer Produktlinie geändert, ohne sie umzubenennen. Prüfe aktuelle Dokumentation und Community-Berichte für den spezifischen Chipsatz, nicht nur den Produktnamen.' },
          { q: 'Warum ein USB-Verlängerungskabel für den Dongle verwenden?', a: 'Es bewegt den Funk-Dongle weg von den eigenen USB-3.0-Anschlüssen und dem Wi-Fi-Funkmodul eines Mini-PCs, die beide das 2,4-GHz-Zigbee-Band stören können, und verbessert so generell Reichweite und Zuverlässigkeit.' },
          { q: 'Zigbee2MQTT oder ZHA — spielt die Dongle-Wahl eine Rolle?', a: 'Prüfe vor dem Kauf die aktuelle Liste unterstützter Chipsätze der jeweiligen Integration (Zigbee2MQTT oder ZHA), da nicht jeder Dongle von beiden gleich unterstützt wird.' },
          { q: 'Kann ich einen Thread-Dongle statt des Border-Routers meines bestehenden Smart Speakers nutzen?', a: 'Du kannst mehrere Thread-Border-Router gleichzeitig betreiben — sie arbeiten zusammen, um die Mesh-Abdeckung zu erweitern, statt zu konkurrieren, sodass ein zusätzlicher additiv ist, kein Ersatz.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protokolle erklärt](/de/smart-home/smart-home-protocols-explained) — Protokollgrundlagen',
          '[Thread- und Wi-Fi-7-Router für Smart Homes](/de/smart-home/thread-14-wifi-7-routers-guide) — Thread-Border-Router-Grundlagen',
          '[Die beste Hardware für ein lokales Smart Home + lokale KI](/de/smart-home/best-hardware-for-local-smart-home) — die Hub-Hardware, zu der das passt',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Die besten Zigbee- und Thread-USB-Dongles (2027)',
      description: 'Die besten Zigbee- und Thread-USB-Dongles für Home Assistant: Chipsatz-Unterschiede und worauf man vor dem Kauf achten sollte.',
      url: 'https://www.promptquorum.com/de/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Zigbee-Koordinator' }, { '@type': 'Thing', name: 'Thread-Border-Router' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich sowohl einen Zigbee- als auch einen Thread-Dongle?', acceptedAnswer: { '@type': 'Answer', text: 'Nur wenn du Geräte beider Typen hast und keinen bestehenden Thread-Border-Router.' } },
        { '@type': 'Question', name: 'Garantiert der Produktname denselben Chipsatz über die Zeit?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — Hersteller haben interne Chipsätze einer Produktlinie geändert, ohne sie umzubenennen.' } },
        { '@type': 'Question', name: 'Warum ein USB-Verlängerungskabel für den Dongle verwenden?', acceptedAnswer: { '@type': 'Answer', text: 'Es bewegt den Funk-Dongle weg von USB-3.0-Anschlüssen und Wi-Fi, die beide das Zigbee-Band stören können.' } },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: 'Meilleurs dongles USB Zigbee et Thread (2027)',
    seoTitle: 'Meilleurs dongles Zigbee + Thread (2027)',
    intro:
      "Un dongle USB coordinateur Zigbee ou routeur de bordure Thread transforme un mini PC ou un Raspberry Pi exécutant Home Assistant en un véritable hub maison connectée capable d'appairer directement des appareils Zigbee et Thread. Le Connect ZBT-2 de Home Assistant lui-même ($49), le Zigbee 3.0 USB Dongle Plus de Sonoff (~$27, en deux variantes de chipset sous un même nom de produit) et le ConBee III de Dresden Elektronik (~€40) sont des options actuelles confirmées (vérifié le 16/07/2026) — et le ZBT-2 lui-même remplace un prédécesseur désormais discontinué, un exemple concret de pourquoi cette catégorie doit être vérifiée avant l'achat, pas seulement un avertissement.",
    metaDescription:
      "Meilleurs dongles USB Zigbee et Thread pour Home Assistant en 2027 : ce que signifient les différences de chipset et comment appairer un dongle avec un hub mini PC ou Pi.",
    twitterDescription:
      "Guide d'achat pour les dongles USB coordinateur Zigbee et routeur de bordure Thread — différences de chipset et ce qu'il faut vérifier avant d'acheter.",
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant ajoutant la prise en charge d\'appareils Zigbee ou Thread à un hub mini PC ou Pi',
    primaryTerm: 'meilleur dongle zigbee home assistant',
    targetKeywords: [
      'meilleur dongle zigbee home assistant',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      "**Un dongle USB coordinateur Zigbee ajoute l'appairage d'appareils Zigbee à un hub Home Assistant qui ne l'a pas intégré, et un dongle routeur de bordure Thread fait de même pour les appareils Thread — le chipset à l'intérieur du dongle, pas seulement la marque, détermine la portée et la fiabilité.** Options actuelles confirmées (vérifié le 16/07/2026) : le Connect ZBT-2 de Home Assistant lui-même ($49, Zigbee ou Thread), le Zigbee 3.0 USB Dongle Plus de Sonoff (~$27), et le ConBee III de Dresden Elektronik (~€40).",
    quickAnswerTop: {
      fr: {
        question: "De quel dongle USB ai-je besoin pour des appareils Zigbee ou Thread avec Home Assistant ?",
        answer:
          "Un dongle coordinateur Zigbee (généralement associé à l'intégration Zigbee2MQTT ou ZHA) permet à Home Assistant d'appairer et de contrôler directement des appareils Zigbee ; un dongle routeur de bordure Thread fait l'équivalent pour les appareils Thread, bien que de nombreux routeurs de bordure Thread soient déjà intégrés dans des enceintes connectées/hubs existants plutôt que de nécessiter un dongle dédié. Options actuelles confirmées (vérifié le 16/07/2026) : le Connect ZBT-2 de Home Assistant lui-même ($49, chipset Silicon Labs MG24, prend en charge Zigbee ou Thread — pas simultanément — et remplace le Connect ZBT-1/SkyConnect désormais discontinué) ; le Zigbee 3.0 USB Dongle Plus de Sonoff (~$27), disponible en deux variantes de chipset sous le même nom de produit — ZBDongle-P (TI CC2652P) et ZBDongle-E (Silicon Labs EFR32MG21) — un exemple concret de pourquoi vérifier le chipset, pas seulement le nom du produit, importe ; et le ConBee III de Dresden Elektronik (~€40), le successeur actuel de l'ancien ConBee II.",
        bullets: [
          "Dongle coordinateur Zigbee : nécessaire si votre hub n'a pas de radio Zigbee intégrée",
          'Routeur de bordure Thread : souvent déjà intégré à une enceinte connectée/un hub existant — à vérifier avant d\'acheter un dongle dédié',
          "Choix actuels confirmés : HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, vérifiez le chipset ZBDongle-P vs -E), ConBee III (~€40)",
          "Un câble d'extension USB améliore la portée/fiabilité en éloignant le dongle des interférences radio propres au mini PC",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Dongles coordinateurs Zigbee', anchor: 'zigbee-dongles' },
      { label: 'Dongles routeurs de bordure Thread', anchor: 'thread-dongles' },
      { label: "Conseils d'installation", anchor: 'setup-tips' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Un dongle USB coordinateur Zigbee ou routeur de bordure Thread ajoute une prise en charge radio pour l'appairage d'appareils à un hub Home Assistant — vérifiez spécifiquement le chipset, car les noms de produits ne reflètent pas toujours les changements internes de chipset." },
      { type: 'plain-terms', content: "Un mini PC ou Raspberry Pi exécutant Home Assistant n'a généralement pas de radio intégrée pour les appareils Zigbee comme les capteurs et les ampoules. Un petit dongle USB ajoute cette radio. Il en va de même pour Thread, bien que beaucoup possèdent déjà un appareil compatible Thread (comme une enceinte connectée) sans le savoir." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Dongle coordinateur Zigbee : nécessaire si votre hub Home Assistant n'a pas de radio Zigbee intégrée",
          "Routeur de bordure Thread : vérifiez si vous en avez déjà un intégré à une enceinte connectée/un hub existant avant d'acheter un dongle dédié",
          "Choix actuels confirmés (vérifié le 16/07/2026) : HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, deux variantes de chipset — ZBDongle-P vs -E), ConBee III (~€40)",
          "Un câble d'extension USB éloignant le dongle de l'électronique propre du hub améliore souvent la fiabilité",
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Dongles coordinateurs Zigbee',
        content:
          "**Un dongle coordinateur Zigbee se branche sur votre hub Home Assistant via USB et s'appaire avec l'intégration Zigbee2MQTT ou ZHA — le chipset radio spécifique à l'intérieur détermine la portée et la fiabilité bien plus que le branding extérieur du produit.**",
        items: [
          "Le Zigbee 3.0 USB Dongle Plus de Sonoff (~$27) est un exemple réel et actuel de ce risque précis : il est disponible en deux variantes de chipset sous le même nom de produit — ZBDongle-P (chipset TI CC2652P) et ZBDongle-E (chipset Silicon Labs EFR32MG21) — selon les pages produit officielles de Sonoff. Vérifiez quelle variante vous achetez, pas seulement le nom du produit.",
          "Le ConBee III de Dresden Elektronik (~€40) est le successeur actuel de l'ancien ConBee II, désormais dépassé — il est livré avec le firmware Zigbee 3.0 par défaut, avec un firmware alternatif OpenThread Border Router disponible pour l'usage Thread (pas simultanément avec Zigbee sur le même dongle), selon la page produit officielle de Dresden Elektronik.",
          "Un câble d'extension USB (quelques dollars) éloignant le dongle de 1 à 2 mètres des propres ports USB 3.0 et de la radio Wi-Fi d'un mini PC améliore généralement la portée et la fiabilité Zigbee, car l'USB 3.0 peut interférer avec la bande 2,4 GHz de Zigbee.",
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Dongles routeurs de bordure Thread',
        content:
          "**Un dongle routeur de bordure Thread dédié n'est nécessaire que si vous n'en avez pas déjà un intégré à une enceinte connectée ou un hub existant — vérifiez d'abord votre matériel actuel.**",
        items: [
          "De nombreux foyers possèdent déjà un routeur de bordure Thread sans le savoir, intégré à une enceinte connectée ou un hub existant d'un grand écosystème — voir le guide des routeurs Thread/Wi-Fi pour savoir comment vérifier.",
          "Un dongle routeur de bordure Thread dédié pour un hub Home Assistant est utile si vous voulez une couverture Thread indépendante du matériel d'un autre écosystème, ou des routeurs de bordure supplémentaires pour étendre la couverture du maillage.",
          "Le Connect ZBT-2 de Home Assistant lui-même ($49, confirmé sur home-assistant.io) prend en charge Thread en plus de Zigbee — bien que pas les deux à la fois sur le même dongle — et constitue l'option officielle de premier fournisseur, remplaçant le Connect ZBT-1/SkyConnect discontinué.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: "Conseils d'installation",
        content:
          "**Utilisez un câble d'extension USB, évitez les hubs USB spécifiquement pour le dongle radio, et vérifiez les exigences de mise à jour du firmware avant la première utilisation.**",
        items: [
          "Branchez le dongle directement dans un port du hub (via un câble d'extension) plutôt que via un hub USB, qui peut introduire de la latence ou des interférences pour les appareils radio.",
          "Certains dongles coordinateurs nécessitent un flash de firmware avant la première utilisation pour exécuter le firmware compatible Zigbee2MQTT/ZHA correct — vérifiez la documentation d'installation du produit spécifique.",
          "Positionnez le dongle (via son câble d'extension) loin d'autres sources 2,4 GHz (routeurs Wi-Fi, ports USB 3.0) pour la portée la plus fiable.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: "Ai-je besoin à la fois d'un dongle Zigbee et d'un dongle Thread ?", a: "Seulement si vous avez des appareils des deux types et pas de routeur de bordure Thread existant. De nombreux foyers ont déjà une couverture Thread via une enceinte connectée ou un hub existant." },
          { q: 'Le nom du produit garantit-il le même chipset dans le temps ?', a: 'Non — cette catégorie a vu des fabricants changer le chipset interne d\'une gamme de produits sans la renommer. Vérifiez la documentation actuelle et les retours de la communauté pour le chipset spécifique, pas seulement le nom du produit.' },
          { q: "Pourquoi utiliser un câble d'extension USB pour le dongle ?", a: "Il éloigne le dongle radio des propres ports USB 3.0 et de la radio Wi-Fi d'un mini PC, qui peuvent tous deux interférer avec la bande 2,4 GHz de Zigbee, améliorant généralement la portée et la fiabilité." },
          { q: 'Zigbee2MQTT ou ZHA — le choix du dongle compte-t-il ?', a: "Vérifiez la liste actuelle des chipsets pris en charge par l'intégration spécifique (Zigbee2MQTT ou ZHA) avant d'acheter, car tous les dongles ne sont pas pris en charge de manière identique par les deux." },
          { q: "Puis-je utiliser un dongle Thread à la place du routeur de bordure de mon enceinte connectée existante ?", a: "Vous pouvez exécuter plusieurs routeurs de bordure Thread simultanément — ils coopèrent pour étendre la couverture du maillage plutôt que d'entrer en conflit, donc en ajouter un dédié est additif, pas une exigence de remplacement." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave : protocoles expliqués](/fr/smart-home/smart-home-protocols-explained) — fondamentaux des protocoles',
          '[Routeurs Thread et Wi-Fi 7 pour maisons connectées](/fr/smart-home/thread-14-wifi-7-routers-guide) — bases des routeurs de bordure Thread',
          '[Meilleur matériel pour une maison connectée locale + IA locale](/fr/smart-home/best-hardware-for-local-smart-home) — le matériel de hub associé',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleurs dongles USB Zigbee et Thread (2027)',
      description: "Meilleurs dongles USB Zigbee et Thread pour Home Assistant : différences de chipset et ce qu'il faut vérifier avant d'acheter.",
      url: 'https://www.promptquorum.com/fr/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Coordinateur Zigbee' }, { '@type': 'Thing', name: 'Routeur de bordure Thread' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: "Ai-je besoin à la fois d'un dongle Zigbee et d'un dongle Thread ?", acceptedAnswer: { '@type': 'Answer', text: "Seulement si vous avez des appareils des deux types et pas de routeur de bordure Thread existant." } },
        { '@type': 'Question', name: 'Le nom du produit garantit-il le même chipset dans le temps ?', acceptedAnswer: { '@type': 'Answer', text: "Non — des fabricants ont changé les chipsets internes d'une gamme de produits sans la renommer." } },
        { '@type': 'Question', name: "Pourquoi utiliser un câble d'extension USB pour le dongle ?", acceptedAnswer: { '@type': 'Answer', text: "Il éloigne le dongle radio des ports USB 3.0 et du Wi-Fi, qui peuvent tous deux interférer avec la bande Zigbee." } },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: '最良のZigbee・Thread USBドングル(2027年版)',
    seoTitle: '最良のZigbee + Threadドングル(2027)',
    intro:
      'USB Zigbeeコーディネーターまたは Thread ボーダールータードングルは、Home Assistant を実行するミニPCやRaspberry PiをZigbeeおよびThreadデバイスを直接ペアリングできる本格的なスマートホームハブに変える製品です。Home Assistant純正のConnect ZBT-2($49)、SonoffのZigbee 3.0 USB Dongle Plus(約$27、1つの製品名の下に2種類のチップセットバリエーションあり)、Dresden ElektronikのConBee III(約€40)は確認済みの現行オプションです(2026年7月16日確認)。ZBT-2自体は生産終了となった前モデルの後継であり、これはこのカテゴリーが単なる注意喚起ではなく購入前に実際に確認すべき理由の実例です。',
    metaDescription:
      '2027年版Home Assistant向け最良のZigbee・Thread USBドングル:チップセットの違いが意味すること、ミニPCやPiハブとのペアリング方法。',
    twitterDescription:
      'Zigbeeコーディネーター・Threadボーダールーター USBドングルの購入ガイド — チップセットの違いと購入前に確認すべきこと。',
    readTime: '6分で読めます',
    educationalLevel: 'Intermediate',
    audience: 'ミニPCやPiハブにZigbeeまたはThreadデバイスサポートを追加するHome Assistantユーザー',
    primaryTerm: 'zigbee ドングル home assistant おすすめ',
    targetKeywords: [
      'zigbee ドングル home assistant おすすめ',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      '**USB Zigbeeコーディネータードングルは、内蔵されていないHome Assistantハブにデバイスのペアリング機能を追加し、Threadボーダールータードングルは同様の機能をThreadデバイス向けに提供します — ブランド名だけでなく、ドングル内部のチップセットが到達距離と信頼性を左右します。** 確認済みの現行オプション(2026年7月16日確認):Home Assistant純正のConnect ZBT-2($49、ZigbeeまたはThread)、SonoffのZigbee 3.0 USB Dongle Plus(約$27)、Dresden ElektronikのConBee III(約€40)。',
    quickAnswerTop: {
      ja: {
        question: 'Home AssistantでZigbeeやThreadデバイスを使うにはどのUSBドングルが必要ですか?',
        answer:
          'Zigbeeコーディネータードングル(一般的にZigbee2MQTTまたはZHA統合と組み合わせて使用)は、Home AssistantがZigbeeデバイスを直接ペアリング・制御できるようにします。Threadボーダールータードングルは Thread デバイスに対して同等の機能を提供しますが、多くのThreadボーダールーターは専用ドングルを必要とせず、既存のスマートスピーカー/ハブに内蔵されています。確認済みの現行オプション(2026年7月16日確認):Home Assistant純正のConnect ZBT-2($49、Silicon Labs MG24チップセット、ZigbeeまたはThreadに対応 — 同時ではない — 生産終了となったConnect ZBT-1/SkyConnectの後継)、SonoffのZigbee 3.0 USB Dongle Plus(約$27、同一製品名の下に2種類のチップセットバリエーション — ZBDongle-P(TI CC2652P)とZBDongle-E(Silicon Labs EFR32MG21) — 製品名だけでなくチップセットの確認が重要である実例)、Dresden ElektronikのConBee III(約€40、旧ConBee IIの現行後継機)。',
        bullets: [
          'Zigbeeコーディネータードングル:ハブに内蔵Zigbee無線がない場合に必要',
          'Threadボーダールーター:既存のスマートスピーカー/ハブに内蔵されていることが多い — 専用ドングル購入前に確認',
          '確認済みの現行おすすめ:HA Connect ZBT-2($49)、Sonoff Zigbee 3.0 USB Dongle Plus(約$27、ZBDongle-P vs -Eのチップセットを確認)、ConBee III(約€40)',
          'USB延長ケーブルはドングルをミニPC自体の無線干渉源から離すことで到達距離・信頼性を向上させる',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Zigbeeコーディネータードングル', anchor: 'zigbee-dongles' },
      { label: 'Threadボーダールータードングル', anchor: 'thread-dongles' },
      { label: 'セットアップのコツ', anchor: 'setup-tips' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'USB Zigbeeコーディネータードングルまたは Threadボーダールータードングルは、Home Assistantハブにデバイスペアリング用の無線サポートを追加します — 製品名は内部チップセットの変更を必ずしも反映しないため、チップセットを具体的に確認してください。' },
      { type: 'plain-terms', content: 'Home Assistantを実行するミニPCやRaspberry Piには通常、センサーや電球などのZigbeeデバイス用の無線が内蔵されていません。小さなUSBドングルがその無線を追加します。Threadについても同様ですが、多くの人は気づかないうちにすでにThread対応デバイス(スマートスピーカーなど)を所有しています。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Zigbeeコーディネータードングル:Home Assistantハブに内蔵Zigbee無線がない場合に必要',
          'Threadボーダールーター:専用ドングルを購入する前に、既存のスマートスピーカー/ハブにすでに内蔵されていないか確認する',
          '確認済みの現行おすすめ(2026年7月16日確認):HA Connect ZBT-2($49)、Sonoff Zigbee 3.0 USB Dongle Plus(約$27、2種類のチップセットバリエーション — ZBDongle-P vs -E)、ConBee III(約€40)',
          'ドングルをハブ自体の電子部品から離すUSB延長ケーブルは、しばしば信頼性を向上させる',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Zigbeeコーディネータードングル',
        content:
          '**Zigbeeコーディネータードングルは、USB経由でHome AssistantハブとZigbee2MQTTまたはZHA統合をペアリングします — 外装のブランドよりも内部の具体的な無線チップセットが到達距離と信頼性を左右します。**',
        items: [
          'SonoffのZigbee 3.0 USB Dongle Plus(約$27)は、まさにこのリスクの実例です:同一製品名の下に2種類のチップセットバリエーション — ZBDongle-P(TI CC2652Pチップセット)とZBDongle-E(Silicon Labs EFR32MG21チップセット) — がSonoff公式製品ページに記載されています。製品名だけでなく、どちらのバリエーションを購入するか確認してください。',
          'Dresden ElektronikのConBee III(約€40)は、旧型で現在は後継機が出ているConBee IIの現行後継機です — Dresden Elektronik公式製品ページによると、デフォルトでZigbee 3.0ファームウェアを搭載し、Thread用途向けの代替OpenThread Border Routerファームウェアも利用可能です(同一ドングルでZigbeeと同時使用は不可)。',
          'USB延長ケーブル(数ドル程度)でドングルをミニPC自体のUSB 3.0ポートやWi-Fi無線から1〜2メートル離すと、USB 3.0が2.4GHz帯のZigbeeと干渉することがあるため、一般的にZigbeeの到達距離と信頼性が向上します。',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Threadボーダールータードングル',
        content:
          '**専用のThreadボーダールータードングルは、既存のスマートスピーカーやハブにすでに内蔵されていない場合にのみ必要です — まず現在のハードウェアを確認してください。**',
        items: [
          '多くの家庭は、気づかないうちに大手エコシステムの既存スマートスピーカーやハブにThreadボーダールーターがすでに内蔵されています — 確認方法はThread/Wi-Fiルーターガイドを参照してください。',
          'Home Assistantハブ用の専用Threadボーダールータードングルは、他のエコシステムのハードウェアに依存しないThreadカバレッジが欲しい場合や、メッシュカバレッジを拡張するための追加ボーダールーターが欲しい場合に有用です。',
          'Home Assistant純正のConnect ZBT-2($49、home-assistant.ioで確認済み)は、Zigbeeに加えてThreadもサポートします — ただし同一ドングルで同時使用はできません — 生産終了となったConnect ZBT-1/SkyConnectの後継となる公式純正オプションです。',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: 'セットアップのコツ',
        content:
          '**USB延長ケーブルを使用し、無線ドングル専用にはUSBハブを避け、初回使用前にファームウェア更新の要件を確認してください。**',
        items: [
          'ドングルはUSBハブ経由ではなく(延長ケーブル経由で)ハブのポートに直接接続してください。USBハブは無線デバイスにとって遅延や干渉の原因になることがあります。',
          '一部のコーディネータードングルは、初回使用前にZigbee2MQTT/ZHA互換の正しいファームウェアを実行するためのファームウェア書き込みが必要です — 個別製品のセットアップドキュメントを確認してください。',
          '最も信頼性の高い到達距離を得るため、ドングル(延長ケーブル経由)を他の2.4GHzソース(Wi-Fiルーター、USB 3.0ポート)から離して配置してください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ZigbeeドングルとThreadドングルの両方が必要ですか?', a: '両方のタイプのデバイスを持っていて、既存のThreadボーダールーターがない場合のみ必要です。多くの家庭は、既存のスマートスピーカーやハブを通じてすでにThreadカバレッジを持っています。' },
          { q: '製品名は時間が経っても同じチップセットを保証しますか?', a: 'いいえ — このカテゴリーでは、メーカーが製品ラインの名前を変更せずに内部チップセットを変更した例があります。製品名だけでなく、最新のドキュメントやコミュニティの報告で具体的なチップセットを確認してください。' },
          { q: 'ドングルにUSB延長ケーブルを使う理由は?', a: 'ミニPC自体のUSB 3.0ポートやWi-Fi無線から無線ドングルを離すことができ、どちらもZigbeeの2.4GHz帯と干渉する可能性があるため、一般的に到達距離と信頼性が向上します。' },
          { q: 'Zigbee2MQTTかZHAか — ドングルの選択は重要ですか?', a: '購入前に、それぞれの統合(Zigbee2MQTTまたはZHA)の最新の対応チップセットリストを確認してください。すべてのドングルが両方に同じようにサポートされているわけではありません。' },
          { q: '既存のスマートスピーカーのボーダールーターの代わりにThreadドングルを使えますか?', a: '複数のThreadボーダールーターを同時に稼働させることができます — 競合するのではなく協調してメッシュカバレッジを拡張するため、専用ドングルの追加は代替ではなく追加的なものです。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Matter、Thread、Zigbee、Z-Wave:プロトコル解説](/ja/smart-home/smart-home-protocols-explained) — プロトコルの基礎',
          '[スマートホーム向けThread・Wi-Fi 7ルーター](/ja/smart-home/thread-14-wifi-7-routers-guide) — Threadボーダールーターの基礎',
          '[ローカルスマートホーム+ローカルAIに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — この製品と組み合わせるハブハードウェア',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '最良のZigbee・Thread USBドングル(2027年版)',
      description: 'Home Assistant向け最良のZigbee・Thread USBドングル:チップセットの違いと購入前に確認すべきこと。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Zigbeeコーディネーター' }, { '@type': 'Thing', name: 'Threadボーダールーター' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'ZigbeeドングルとThreadドングルの両方が必要ですか?', acceptedAnswer: { '@type': 'Answer', text: '両方のタイプのデバイスを持っていて、既存のThreadボーダールーターがない場合のみ必要です。' } },
        { '@type': 'Question', name: '製品名は時間が経っても同じチップセットを保証しますか?', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — メーカーが製品ラインの名前を変更せずに内部チップセットを変更した例があります。' } },
        { '@type': 'Question', name: 'ドングルにUSB延長ケーブルを使う理由は?', acceptedAnswer: { '@type': 'Answer', text: 'USB 3.0ポートやWi-FiはZigbee帯域と干渉する可能性があるため、無線ドングルをそこから離します。' } },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: '最佳Zigbee与Thread USB加密狗(2027年)',
    seoTitle: '最佳Zigbee + Thread加密狗(2027)',
    intro:
      'USB Zigbee协调器或Thread边界路由器加密狗能将运行Home Assistant的迷你电脑或树莓派变成一个功能齐全的智能家居中枢,直接配对Zigbee和Thread设备。Home Assistant官方的Connect ZBT-2($49)、Sonoff的Zigbee 3.0 USB Dongle Plus(约$27,同一产品名下有两种芯片组变体)以及Dresden Elektronik的ConBee III(约€40)均为确认的现行选项(核实于2026年7月16日)——而ZBT-2本身正是已停产前代产品的继任者,这正是该品类需要在购买前核实而非仅仅提出警告的真实例证。',
    metaDescription:
      '2027年Home Assistant最佳Zigbee与Thread USB加密狗:芯片组差异意味着什么,以及如何将加密狗与迷你电脑或树莓派中枢配对。',
    twitterDescription:
      'Zigbee协调器与Thread边界路由器USB加密狗购买指南——芯片组差异及购买前应核实的事项。',
    readTime: '阅读时间6分钟',
    educationalLevel: 'Intermediate',
    audience: '为迷你电脑或树莓派中枢添加Zigbee或Thread设备支持的Home Assistant用户',
    primaryTerm: 'home assistant 最佳zigbee加密狗',
    targetKeywords: [
      'home assistant 最佳zigbee加密狗',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      '**USB Zigbee协调器加密狗能为未内置该功能的Home Assistant中枢添加Zigbee设备配对能力,而Thread边界路由器加密狗则为Thread设备提供同等功能——决定信号范围与可靠性的是加密狗内部的芯片组,而不仅仅是品牌。** 确认的现行选项(核实于2026年7月16日):Home Assistant官方Connect ZBT-2($49,支持Zigbee或Thread)、Sonoff的Zigbee 3.0 USB Dongle Plus(约$27)以及Dresden Elektronik的ConBee III(约€40)。',
    quickAnswerTop: {
      zh: {
        question: '在Home Assistant中使用Zigbee或Thread设备需要哪种USB加密狗?',
        answer:
          'Zigbee协调器加密狗(通常与Zigbee2MQTT或ZHA集成配合使用)让Home Assistant能够直接配对并控制Zigbee设备;Thread边界路由器加密狗为Thread设备提供同等功能,不过许多Thread边界路由器已内置于现有智能音箱/中枢中,无需专用加密狗。确认的现行选项(核实于2026年7月16日):Home Assistant官方Connect ZBT-2($49,Silicon Labs MG24芯片组,支持Zigbee或Thread——不可同时使用——是已停产的Connect ZBT-1/SkyConnect的继任产品);Sonoff的Zigbee 3.0 USB Dongle Plus(约$27),同一产品名下有两种芯片组变体——ZBDongle-P(TI CC2652P)与ZBDongle-E(Silicon Labs EFR32MG21)——这正是为何需要核实芯片组而非仅看产品名称的真实例证;以及Dresden Elektronik的ConBee III(约€40),是较旧款ConBee II的现行继任产品。',
        bullets: [
          'Zigbee协调器加密狗:若中枢没有内置Zigbee无线电则需要',
          'Thread边界路由器:通常已内置于现有智能音箱/中枢中——购买专用加密狗前请先核实',
          '确认的现行推荐:HA Connect ZBT-2($49)、Sonoff Zigbee 3.0 USB Dongle Plus(约$27,请核实ZBDongle-P与-E芯片组的区别)、ConBee III(约€40)',
          'USB延长线可将加密狗移离迷你电脑自身的无线电干扰源,从而提升信号范围与可靠性',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: 'Zigbee协调器加密狗', anchor: 'zigbee-dongles' },
      { label: 'Thread边界路由器加密狗', anchor: 'thread-dongles' },
      { label: '设置技巧', anchor: 'setup-tips' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'USB Zigbee协调器加密狗或Thread边界路由器加密狗能为Home Assistant中枢添加设备配对所需的无线电支持——请专门核实芯片组,因为产品名称并不总能反映内部芯片组的变化。' },
      { type: 'plain-terms', content: '运行Home Assistant的迷你电脑或树莓派通常没有内置传感器、灯泡等Zigbee设备所需的无线电。一个小小的USB加密狗就能添加这种无线电功能。Thread也是同理,不过许多人可能已经拥有一台支持Thread的设备(比如智能音箱)而不自知。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Zigbee协调器加密狗:若Home Assistant中枢没有内置Zigbee无线电则需要',
          'Thread边界路由器:购买专用加密狗前,先核实现有智能音箱/中枢中是否已内置',
          '确认的现行推荐(核实于2026年7月16日):HA Connect ZBT-2($49)、Sonoff Zigbee 3.0 USB Dongle Plus(约$27,两种芯片组变体——ZBDongle-P与-E)、ConBee III(约€40)',
          '使用USB延长线将加密狗移离中枢自身的电子元件,通常能提升可靠性',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Zigbee协调器加密狗',
        content:
          '**Zigbee协调器加密狗通过USB接入你的Home Assistant中枢,并与Zigbee2MQTT或ZHA集成配对——内部具体的无线电芯片组比外观产品品牌更能决定信号范围与可靠性。**',
        items: [
          'Sonoff的Zigbee 3.0 USB Dongle Plus(约$27)正是这一风险的真实现行例证:根据Sonoff官方产品页面,它在同一产品名下有两种芯片组变体——ZBDongle-P(TI CC2652P芯片组)与ZBDongle-E(Silicon Labs EFR32MG21芯片组)。请核实你购买的是哪种变体,而不仅仅是产品名称。',
          'Dresden Elektronik的ConBee III(约€40)是较旧、现已被取代的ConBee II的现行继任产品——根据Dresden Elektronik官方产品页面,它默认搭载Zigbee 3.0固件,并提供可选的OpenThread Border Router固件用于Thread用途(不可与Zigbee在同一加密狗上同时使用)。',
          '一根USB延长线(几美元)可将加密狗移离迷你电脑自身的USB 3.0接口和Wi-Fi无线电1-2米,由于USB 3.0会干扰2.4GHz的Zigbee频段,通常能提升Zigbee信号范围与可靠性。',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Thread边界路由器加密狗',
        content:
          '**只有在现有智能音箱或中枢中尚未内置Thread边界路由器时,才需要专用的Thread边界路由器加密狗——请先核实你现有的硬件。**',
        items: [
          '许多家庭其实已经拥有Thread边界路由器而不自知,它内置于主流生态系统的现有智能音箱或中枢中——请参阅Thread/Wi-Fi路由器指南了解如何核实。',
          '如果你想要独立于其他生态系统硬件的Thread覆盖范围,或需要额外的边界路由器来扩展网状网络覆盖,那么为Home Assistant中枢配备专用Thread边界路由器加密狗会很有用。',
          'Home Assistant官方Connect ZBT-2($49,已在home-assistant.io上确认)除Zigbee外还支持Thread——虽然同一加密狗上不能同时支持两者——它是官方第一方选项,替代了已停产的Connect ZBT-1/SkyConnect。',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: '设置技巧',
        content:
          '**使用USB延长线,专门避免为无线电加密狗使用USB集线器,并在首次使用前核实固件更新要求。**',
        items: [
          '将加密狗(通过延长线)直接插入中枢端口,而不是通过USB集线器,后者可能给无线电设备带来延迟或干扰。',
          '部分协调器加密狗在首次使用前需要刷入固件以运行正确的Zigbee2MQTT/ZHA兼容固件——请核实具体产品的设置文档。',
          '将加密狗(通过延长线)放置在远离其他2.4GHz信号源(Wi-Fi路由器、USB 3.0接口)的位置,以获得最可靠的信号范围。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '我是否同时需要Zigbee加密狗和Thread加密狗?', a: '只有当你同时拥有两种类型的设备且没有现有的Thread边界路由器时才需要。许多家庭已经通过现有的智能音箱或中枢获得了Thread覆盖。' },
          { q: '产品名称能保证芯片组长期不变吗?', a: '不能——这一品类中曾出现制造商在不更改产品线名称的情况下更换内部芯片组的情况。请核实最新文档和社区报告中列出的具体芯片组,而不仅仅是产品名称。' },
          { q: '为什么要为加密狗使用USB延长线?', a: '它能将无线电加密狗移离迷你电脑自身的USB 3.0接口和Wi-Fi无线电,两者都可能干扰Zigbee的2.4GHz频段,从而通常能提升信号范围与可靠性。' },
          { q: 'Zigbee2MQTT还是ZHA——加密狗的选择重要吗?', a: '购买前请核实具体集成(Zigbee2MQTT或ZHA)当前支持的芯片组列表,因为并非所有加密狗都能被两者同等支持。' },
          { q: '我能用Thread加密狗代替现有智能音箱的边界路由器吗?', a: '你可以同时运行多个Thread边界路由器——它们协同工作以扩展网状网络覆盖,而不是相互冲突,因此新增一个专用路由器属于增量而非替代要求。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Matter、Thread、Zigbee、Z-Wave协议详解](/zh/smart-home/smart-home-protocols-explained) — 协议基础知识',
          '[面向智能家居的Thread与Wi-Fi 7路由器](/zh/smart-home/thread-14-wifi-7-routers-guide) — Thread边界路由器基础知识',
          '[本地智能家居+本地AI的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 与之搭配的中枢硬件',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '最佳Zigbee与Thread USB加密狗(2027年)',
      description: 'Home Assistant最佳Zigbee与Thread USB加密狗:芯片组差异及购买前应核实的事项。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Zigbee协调器' }, { '@type': 'Thing', name: 'Thread边界路由器' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '我是否同时需要Zigbee加密狗和Thread加密狗?', acceptedAnswer: { '@type': 'Answer', text: '只有当你同时拥有两种类型的设备且没有现有的Thread边界路由器时才需要。' } },
        { '@type': 'Question', name: '产品名称能保证芯片组长期不变吗?', acceptedAnswer: { '@type': 'Answer', text: '不能——制造商曾在不更改产品线名称的情况下更换内部芯片组。' } },
        { '@type': 'Question', name: '为什么要为加密狗使用USB延长线?', acceptedAnswer: { '@type': 'Answer', text: '它能将无线电加密狗移离USB 3.0接口和Wi-Fi,两者都可能干扰Zigbee频段。' } },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: 'Los mejores dongles USB Zigbee y Thread (2027)',
    seoTitle: 'Mejores dongles Zigbee + Thread (2027)',
    intro:
      "Un dongle USB coordinador Zigbee o router frontera Thread convierte un mini PC o Raspberry Pi con Home Assistant en un hub de hogar inteligente completo, capaz de emparejar dispositivos Zigbee y Thread directamente. El propio Connect ZBT-2 de Home Assistant ($49), el Zigbee 3.0 USB Dongle Plus de Sonoff (~$27, en dos variantes de chip bajo un mismo nombre de producto) y el ConBee III de Dresden Elektronik (~€40) son opciones actuales confirmadas (verificado el 16/07/2026) — y el propio ZBT-2 sustituye a un predecesor ya descontinuado, un ejemplo real de por qué esta categoría requiere comprobación antes de comprar, no solo una advertencia.",
    metaDescription:
      'Los mejores dongles USB Zigbee y Thread para Home Assistant en 2027: qué significan las diferencias de chip y cómo emparejar un dongle con un hub mini PC o Pi.',
    twitterDescription:
      'Guía de compra de dongles USB coordinador Zigbee y router frontera Thread — diferencias de chip y qué comprobar antes de comprar.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que añaden soporte de dispositivos Zigbee o Thread a un hub mini PC o Pi',
    primaryTerm: 'mejor dongle zigbee home assistant',
    targetKeywords: [
      'mejor dongle zigbee home assistant',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      "**Un dongle USB coordinador Zigbee añade emparejamiento de dispositivos Zigbee a un hub de Home Assistant que no lo tiene integrado, y un dongle router frontera Thread hace lo mismo para dispositivos Thread — el chip dentro del dongle, no solo la marca, determina el alcance y la fiabilidad.** Opciones actuales confirmadas (verificado el 16/07/2026): el propio Connect ZBT-2 de Home Assistant ($49, Zigbee o Thread), el Zigbee 3.0 USB Dongle Plus de Sonoff (~$27), y el ConBee III de Dresden Elektronik (~€40).",
    quickAnswerTop: {
      es: {
        question: '¿Qué dongle USB necesito para dispositivos Zigbee o Thread con Home Assistant?',
        answer:
          "Un dongle coordinador Zigbee (normalmente emparejado con la integración Zigbee2MQTT o ZHA) permite a Home Assistant emparejar y controlar dispositivos Zigbee directamente; un dongle router frontera Thread hace lo equivalente para dispositivos Thread, aunque muchos routers frontera Thread ya están integrados en altavoces inteligentes/hubs existentes en lugar de necesitar un dongle dedicado. Opciones actuales confirmadas (verificado el 16/07/2026): el propio Connect ZBT-2 de Home Assistant ($49, chip Silicon Labs MG24, admite Zigbee o Thread — no simultáneamente — y sustituye al ya descontinuado Connect ZBT-1/SkyConnect); el Zigbee 3.0 USB Dongle Plus de Sonoff (~$27), que se comercializa en dos variantes de chip bajo el mismo nombre de producto — ZBDongle-P (TI CC2652P) y ZBDongle-E (Silicon Labs EFR32MG21) — un ejemplo real de por qué comprobar el chip, no solo el nombre del producto, importa; y el ConBee III de Dresden Elektronik (~€40), el sucesor actual del más antiguo ConBee II.",
        bullets: [
          'Dongle coordinador Zigbee: necesario si tu hub no tiene radio Zigbee integrada',
          'Router frontera Thread: a menudo ya integrado en un altavoz inteligente/hub existente — comprueba antes de comprar un dongle dedicado',
          'Opciones actuales confirmadas: HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, comprueba el chip ZBDongle-P vs -E), ConBee III (~€40)',
          'Un cable alargador USB mejora el alcance/fiabilidad al alejar el dongle de las propias interferencias de radio del mini PC',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Dongles coordinadores Zigbee', anchor: 'zigbee-dongles' },
      { label: 'Dongles router frontera Thread', anchor: 'thread-dongles' },
      { label: 'Consejos de instalación', anchor: 'setup-tips' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un dongle USB coordinador Zigbee o router frontera Thread añade soporte de radio para el emparejamiento de dispositivos a un hub de Home Assistant — comprueba específicamente el chip, ya que los nombres de producto no siempre reflejan cambios internos de chip.' },
      { type: 'plain-terms', content: 'Un mini PC o Raspberry Pi con Home Assistant normalmente no tiene una radio integrada para dispositivos Zigbee como sensores y bombillas. Un pequeño dongle USB añade esa radio. Lo mismo aplica a Thread, aunque muchas personas ya poseen un dispositivo compatible con Thread (como un altavoz inteligente) sin saberlo.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Dongle coordinador Zigbee: necesario si tu hub de Home Assistant no tiene radio Zigbee integrada',
          'Router frontera Thread: comprueba si ya tienes uno integrado en un altavoz inteligente/hub existente antes de comprar un dongle dedicado',
          'Opciones actuales confirmadas (verificado el 16/07/2026): HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, dos variantes de chip — ZBDongle-P vs -E), ConBee III (~€40)',
          'Un cable alargador USB que aleje el dongle de la propia electrónica del hub suele mejorar la fiabilidad',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Dongles coordinadores Zigbee',
        content:
          '**Un dongle coordinador Zigbee se conecta a tu hub de Home Assistant por USB y se empareja con la integración Zigbee2MQTT o ZHA — el chip de radio específico en su interior determina el alcance y la fiabilidad más que la marca externa del producto.**',
        items: [
          "El Zigbee 3.0 USB Dongle Plus de Sonoff (~$27) es un ejemplo real y actual de exactamente este riesgo: se comercializa en dos variantes de chip bajo el mismo nombre de producto — ZBDongle-P (chip TI CC2652P) y ZBDongle-E (chip Silicon Labs EFR32MG21) — según las propias páginas de producto de Sonoff. Comprueba qué variante estás comprando, no solo el nombre del producto.",
          "El ConBee III de Dresden Elektronik (~€40) es el sucesor actual del más antiguo, ya superado, ConBee II — viene con firmware Zigbee 3.0 por defecto, con un firmware alternativo OpenThread Border Router disponible para uso Thread (no simultáneo con Zigbee en el mismo dongle), según la propia página de producto de Dresden Elektronik.",
          'Un cable alargador USB (unos pocos dólares) que aleje el dongle 1-2 metros de los propios puertos USB 3.0 y la radio Wi-Fi de un mini PC suele mejorar el alcance y la fiabilidad de Zigbee, ya que el USB 3.0 puede interferir con la banda de 2,4GHz de Zigbee.',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Dongles router frontera Thread',
        content:
          '**Un dongle router frontera Thread dedicado solo es necesario si no tienes ya uno integrado en un altavoz inteligente o hub existente — comprueba primero tu hardware actual.**',
        items: [
          'Muchos hogares ya tienen un router frontera Thread sin saberlo, integrado en un altavoz inteligente o hub existente de un ecosistema importante — consulta la guía de routers Thread/Wi-Fi para saber cómo comprobarlo.',
          'Un dongle router frontera Thread dedicado para un hub de Home Assistant es útil si quieres cobertura Thread independiente del hardware de otro ecosistema, o routers frontera adicionales para ampliar la cobertura de malla.',
          "El propio Connect ZBT-2 de Home Assistant ($49, confirmado en home-assistant.io) admite Thread además de Zigbee — aunque no ambos a la vez en el mismo dongle — y es la opción oficial de primera parte, que sustituye al descontinuado Connect ZBT-1/SkyConnect.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: 'Consejos de instalación',
        content:
          '**Usa un cable alargador USB, evita los hubs USB específicamente para el dongle de radio, y comprueba los requisitos de actualización de firmware antes del primer uso.**',
        items: [
          'Conecta el dongle directamente a un puerto del hub (mediante un cable alargador) en lugar de a través de un hub USB, que puede introducir latencia o interferencias en dispositivos de radio.',
          'Algunos dongles coordinadores necesitan un flasheo de firmware antes del primer uso para ejecutar el firmware compatible con Zigbee2MQTT/ZHA correcto — comprueba la documentación de instalación del producto específico.',
          'Coloca el dongle (mediante su cable alargador) lejos de otras fuentes de 2,4GHz (routers Wi-Fi, puertos USB 3.0) para obtener el alcance más fiable.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito tanto un dongle Zigbee como uno Thread?', a: 'Solo si tienes dispositivos de ambos tipos y no cuentas con un router frontera Thread existente. Muchos hogares ya tienen cobertura Thread a través de un altavoz inteligente o hub existente.' },
          { q: '¿El nombre del producto garantiza el mismo chip a lo largo del tiempo?', a: 'No — esta categoría ha visto a fabricantes cambiar el chip interno de una línea de productos sin cambiarle el nombre. Comprueba la documentación actual y los informes de la comunidad para el chip específico, no solo el nombre del producto.' },
          { q: '¿Por qué usar un cable alargador USB para el dongle?', a: 'Aleja el dongle de radio de los propios puertos USB 3.0 y la radio Wi-Fi de un mini PC, ambos capaces de interferir con la banda de 2,4GHz de Zigbee, mejorando generalmente el alcance y la fiabilidad.' },
          { q: '¿Zigbee2MQTT o ZHA — importa la elección del dongle?', a: 'Comprueba la lista actual de chips compatibles de la integración específica (Zigbee2MQTT o ZHA) antes de comprar, ya que no todos los dongles son compatibles de forma idéntica con ambas.' },
          { q: '¿Puedo usar un dongle Thread en lugar del router frontera de mi altavoz inteligente existente?', a: 'Puedes ejecutar varios routers frontera Thread simultáneamente — cooperan para ampliar la cobertura de malla en lugar de entrar en conflicto, por lo que añadir uno dedicado es aditivo, no un requisito de sustitución.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: protocolos explicados](/es/smart-home/smart-home-protocols-explained) — fundamentos de los protocolos',
          '[Routers Thread y Wi-Fi 7 para hogares inteligentes](/es/smart-home/thread-14-wifi-7-routers-guide) — fundamentos de routers frontera Thread',
          '[El mejor hardware para un hogar inteligente local + IA local](/es/smart-home/best-hardware-for-local-smart-home) — el hardware de hub con el que se combina',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Los mejores dongles USB Zigbee y Thread (2027)',
      description: 'Los mejores dongles USB Zigbee y Thread para Home Assistant: diferencias de chip y qué comprobar antes de comprar.',
      url: 'https://www.promptquorum.com/es/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Coordinador Zigbee' }, { '@type': 'Thing', name: 'Router frontera Thread' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito tanto un dongle Zigbee como uno Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Solo si tienes dispositivos de ambos tipos y no cuentas con un router frontera Thread existente.' } },
        { '@type': 'Question', name: '¿El nombre del producto garantiza el mismo chip a lo largo del tiempo?', acceptedAnswer: { '@type': 'Answer', text: 'No — algunos fabricantes han cambiado los chips internos de una línea de productos sin cambiarle el nombre.' } },
        { '@type': 'Question', name: '¿Por qué usar un cable alargador USB para el dongle?', acceptedAnswer: { '@type': 'Answer', text: 'Aleja el dongle de radio de los puertos USB 3.0 y el Wi-Fi, ambos capaces de interferir con la banda Zigbee.' } },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: 'Os melhores dongles USB Zigbee e Thread (2027)',
    seoTitle: 'Melhores dongles Zigbee + Thread (2027)',
    intro:
      "Um dongle USB coordenador Zigbee ou roteador de borda Thread transforma um mini PC ou Raspberry Pi rodando Home Assistant em um hub completo de casa inteligente, capaz de parear dispositivos Zigbee e Thread diretamente. O próprio Connect ZBT-2 da Home Assistant ($49), o Zigbee 3.0 USB Dongle Plus da Sonoff (~$27, em duas variantes de chipset sob o mesmo nome de produto) e o ConBee III da Dresden Elektronik (~€40) são opções atuais confirmadas (verificado em 16/07/2026) — e o próprio ZBT-2 substitui um antecessor já descontinuado, um exemplo real de por que essa categoria exige verificação antes da compra, não apenas um aviso.",
    metaDescription:
      'Os melhores dongles USB Zigbee e Thread para Home Assistant em 2027: o que as diferenças de chipset significam e como parear um dongle com um hub mini PC ou Pi.',
    twitterDescription:
      'Guia de compra de dongles USB coordenador Zigbee e roteador de borda Thread — diferenças de chipset e o que verificar antes de comprar.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant que adicionam suporte a dispositivos Zigbee ou Thread a um hub mini PC ou Pi',
    primaryTerm: 'melhor dongle zigbee home assistant',
    targetKeywords: [
      'melhor dongle zigbee home assistant',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      "**Um dongle USB coordenador Zigbee adiciona pareamento de dispositivos Zigbee a um hub Home Assistant que não o possui integrado, e um dongle roteador de borda Thread faz o mesmo para dispositivos Thread — o chipset dentro do dongle, não apenas a marca, determina alcance e confiabilidade.** Opções atuais confirmadas (verificado em 16/07/2026): o próprio Connect ZBT-2 da Home Assistant ($49, Zigbee ou Thread), o Zigbee 3.0 USB Dongle Plus da Sonoff (~$27), e o ConBee III da Dresden Elektronik (~€40).",
    quickAnswerTop: {
      pt: {
        question: 'Qual dongle USB eu preciso para dispositivos Zigbee ou Thread com Home Assistant?',
        answer:
          "Um dongle coordenador Zigbee (geralmente pareado com a integração Zigbee2MQTT ou ZHA) permite que o Home Assistant pareie e controle dispositivos Zigbee diretamente; um dongle roteador de borda Thread faz o equivalente para dispositivos Thread, embora muitos roteadores de borda Thread já estejam integrados em smart speakers/hubs existentes em vez de exigirem um dongle dedicado. Opções atuais confirmadas (verificado em 16/07/2026): o próprio Connect ZBT-2 da Home Assistant ($49, chipset Silicon Labs MG24, suporta Zigbee ou Thread — não simultaneamente — e substitui o já descontinuado Connect ZBT-1/SkyConnect); o Zigbee 3.0 USB Dongle Plus da Sonoff (~$27), que vem em duas variantes de chipset sob o mesmo nome de produto — ZBDongle-P (TI CC2652P) e ZBDongle-E (Silicon Labs EFR32MG21) — um exemplo real de por que verificar o chipset, não apenas o nome do produto, importa; e o ConBee III da Dresden Elektronik (~€40), o sucessor atual do mais antigo ConBee II.",
        bullets: [
          'Dongle coordenador Zigbee: necessário se o seu hub não tiver rádio Zigbee integrado',
          'Roteador de borda Thread: muitas vezes já integrado a um smart speaker/hub existente — verifique antes de comprar um dongle dedicado',
          'Opções atuais confirmadas: HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, verifique o chipset ZBDongle-P vs -E), ConBee III (~€40)',
          'Um cabo extensor USB melhora alcance/confiabilidade ao afastar o dongle das próprias interferências de rádio do mini PC',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Dongles coordenadores Zigbee', anchor: 'zigbee-dongles' },
      { label: 'Dongles roteadores de borda Thread', anchor: 'thread-dongles' },
      { label: 'Dicas de configuração', anchor: 'setup-tips' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Um dongle USB coordenador Zigbee ou roteador de borda Thread adiciona suporte de rádio para pareamento de dispositivos a um hub Home Assistant — verifique especificamente o chipset, já que os nomes de produto nem sempre refletem mudanças internas de chipset.' },
      { type: 'plain-terms', content: 'Um mini PC ou Raspberry Pi rodando Home Assistant geralmente não tem um rádio integrado para dispositivos Zigbee como sensores e lâmpadas. Um pequeno dongle USB adiciona esse rádio. O mesmo vale para Thread, embora muitas pessoas já possuam um dispositivo compatível com Thread (como um smart speaker) sem saber.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Dongle coordenador Zigbee: necessário se o seu hub Home Assistant não tiver rádio Zigbee integrado',
          'Roteador de borda Thread: verifique se já tem um integrado a um smart speaker/hub existente antes de comprar um dongle dedicado',
          'Opções atuais confirmadas (verificado em 16/07/2026): HA Connect ZBT-2 ($49), Sonoff Zigbee 3.0 USB Dongle Plus (~$27, duas variantes de chipset — ZBDongle-P vs -E), ConBee III (~€40)',
          'Um cabo extensor USB que afaste o dongle da própria eletrônica do hub costuma melhorar a confiabilidade',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Dongles coordenadores Zigbee',
        content:
          '**Um dongle coordenador Zigbee se conecta ao seu hub Home Assistant via USB e pareia com a integração Zigbee2MQTT ou ZHA — o chipset de rádio específico dentro dele determina alcance e confiabilidade mais do que a marca externa do produto.**',
        items: [
          "O Zigbee 3.0 USB Dongle Plus da Sonoff (~$27) é um exemplo real e atual exatamente desse risco: ele vem em duas variantes de chipset sob o mesmo nome de produto — ZBDongle-P (chipset TI CC2652P) e ZBDongle-E (chipset Silicon Labs EFR32MG21) — segundo as próprias páginas de produto da Sonoff. Verifique qual variante você está comprando, não apenas o nome do produto.",
          "O ConBee III da Dresden Elektronik (~€40) é o sucessor atual do mais antigo, já superado, ConBee II — vem com firmware Zigbee 3.0 por padrão, com um firmware alternativo OpenThread Border Router disponível para uso Thread (não simultâneo com Zigbee no mesmo dongle), segundo a própria página de produto da Dresden Elektronik.",
          'Um cabo extensor USB (alguns dólares) que afaste o dongle 1-2 metros das próprias portas USB 3.0 e do rádio Wi-Fi de um mini PC costuma melhorar o alcance e a confiabilidade do Zigbee, já que o USB 3.0 pode interferir na banda de 2,4GHz do Zigbee.',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Dongles roteadores de borda Thread',
        content:
          '**Um dongle roteador de borda Thread dedicado só é necessário se você ainda não tiver um integrado a um smart speaker ou hub existente — verifique primeiro seu hardware atual.**',
        items: [
          'Muitos domicílios já têm um roteador de borda Thread sem saber, integrado a um smart speaker ou hub existente de um grande ecossistema — veja o guia de roteadores Thread/Wi-Fi para saber como verificar.',
          'Um dongle roteador de borda Thread dedicado para um hub Home Assistant é útil se você quiser cobertura Thread independente do hardware de outro ecossistema, ou roteadores de borda adicionais para estender a cobertura de malha.',
          "O próprio Connect ZBT-2 da Home Assistant ($49, confirmado em home-assistant.io) suporta Thread além de Zigbee — embora não ambos ao mesmo tempo no mesmo dongle — e é a opção oficial de primeira parte, substituindo o descontinuado Connect ZBT-1/SkyConnect.",
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: 'Dicas de configuração',
        content:
          '**Use um cabo extensor USB, evite hubs USB especificamente para o dongle de rádio, e verifique os requisitos de atualização de firmware antes do primeiro uso.**',
        items: [
          'Conecte o dongle diretamente a uma porta do hub (via cabo extensor) em vez de por um hub USB, que pode introduzir latência ou interferência para dispositivos de rádio.',
          'Alguns dongles coordenadores precisam de um flash de firmware antes do primeiro uso para rodar o firmware compatível com Zigbee2MQTT/ZHA correto — verifique a documentação de configuração do produto específico.',
          'Posicione o dongle (via seu cabo extensor) longe de outras fontes de 2,4GHz (roteadores Wi-Fi, portas USB 3.0) para o alcance mais confiável.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de um dongle Zigbee e de um dongle Thread ao mesmo tempo?', a: 'Somente se você tiver dispositivos de ambos os tipos e não tiver um roteador de borda Thread existente. Muitos domicílios já têm cobertura Thread por meio de um smart speaker ou hub existente.' },
          { q: 'O nome do produto garante o mesmo chipset ao longo do tempo?', a: 'Não — essa categoria já teve casos de fabricantes trocando o chipset interno de uma linha de produtos sem renomeá-la. Verifique a documentação atual e relatos da comunidade para o chipset específico, não apenas o nome do produto.' },
          { q: 'Por que usar um cabo extensor USB para o dongle?', a: 'Ele afasta o dongle de rádio das próprias portas USB 3.0 e do rádio Wi-Fi de um mini PC, ambos capazes de interferir na banda de 2,4GHz do Zigbee, geralmente melhorando alcance e confiabilidade.' },
          { q: 'Zigbee2MQTT ou ZHA — a escolha do dongle importa?', a: 'Verifique a lista atual de chipsets suportados da integração específica (Zigbee2MQTT ou ZHA) antes de comprar, já que nem todo dongle é suportado de forma idêntica por ambas.' },
          { q: 'Posso usar um dongle Thread em vez do roteador de borda do meu smart speaker existente?', a: 'Você pode rodar vários roteadores de borda Thread simultaneamente — eles cooperam para estender a cobertura de malha em vez de conflitar, então adicionar um dedicado é aditivo, não um requisito de substituição.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: protocolos explicados](/pt/smart-home/smart-home-protocols-explained) — fundamentos dos protocolos',
          '[Roteadores Thread e Wi-Fi 7 para casas inteligentes](/pt/smart-home/thread-14-wifi-7-routers-guide) — fundamentos de roteadores de borda Thread',
          '[O melhor hardware para uma casa inteligente local + IA local](/pt/smart-home/best-hardware-for-local-smart-home) — o hardware de hub com o qual combina',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Os melhores dongles USB Zigbee e Thread (2027)',
      description: 'Os melhores dongles USB Zigbee e Thread para Home Assistant: diferenças de chipset e o que verificar antes de comprar.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Coordenador Zigbee' }, { '@type': 'Thing', name: 'Roteador de borda Thread' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de um dongle Zigbee e de um dongle Thread ao mesmo tempo?', acceptedAnswer: { '@type': 'Answer', text: 'Somente se você tiver dispositivos de ambos os tipos e não tiver um roteador de borda Thread existente.' } },
        { '@type': 'Question', name: 'O nome do produto garante o mesmo chipset ao longo do tempo?', acceptedAnswer: { '@type': 'Answer', text: 'Não — fabricantes já trocaram chipsets internos de uma linha de produtos sem renomeá-la.' } },
        { '@type': 'Question', name: 'Por que usar um cabo extensor USB para o dongle?', acceptedAnswer: { '@type': 'Answer', text: 'Ele afasta o dongle de rádio das portas USB 3.0 e do Wi-Fi, ambos capazes de interferir na banda Zigbee.' } },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: 'أفضل أجهزة USB Zigbee وThread (2027)',
    seoTitle: 'أفضل أجهزة Zigbee + Thread (2027)',
    intro:
      'يحوّل جهاز USB منسّق Zigbee أو موجّه حدود Thread جهاز الكمبيوتر المصغّر أو Raspberry Pi الذي يشغّل Home Assistant إلى مركز منزل ذكي كامل قادر على إقران أجهزة Zigbee وThread مباشرة. يُعد Connect ZBT-2 الخاص بـ Home Assistant نفسه ($49)، وجهاز Sonoff Zigbee 3.0 USB Dongle Plus (~$27، بنسختين مختلفتين من الشريحة تحت اسم منتج واحد)، وجهاز ConBee III من Dresden Elektronik (~€40) خيارات حالية مؤكدة (تم التحقق في 16/07/2026) — كما أن ZBT-2 نفسه يحل محل سلف تم إيقافه، وهو مثال حقيقي على سبب حاجة هذه الفئة إلى التحقق قبل الشراء، وليس مجرد تحذير.',
    metaDescription:
      'أفضل أجهزة USB Zigbee وThread لـ Home Assistant في 2027: ماذا تعني اختلافات الشرائح وكيفية إقران جهاز مع مركز كمبيوتر مصغّر أو Pi.',
    twitterDescription:
      'دليل شراء أجهزة USB منسّق Zigbee وموجّه حدود Thread — اختلافات الشرائح وما يجب التحقق منه قبل الشراء.',
    readTime: '6 دقائق قراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يضيفون دعم أجهزة Zigbee أو Thread إلى مركز كمبيوتر مصغّر أو Pi',
    primaryTerm: 'أفضل جهاز zigbee لـ home assistant',
    targetKeywords: [
      'أفضل جهاز zigbee لـ home assistant',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      '**يضيف جهاز USB منسّق Zigbee إمكانية إقران أجهزة Zigbee إلى مركز Home Assistant الذي لا يحتوي عليها مدمجة، ويقوم جهاز موجّه حدود Thread بالمهمة ذاتها لأجهزة Thread — الشريحة داخل الجهاز، وليس العلامة التجارية فقط، هي التي تحدد المدى والموثوقية.** الخيارات الحالية المؤكدة (تم التحقق في 16/07/2026): Connect ZBT-2 الخاص بـ Home Assistant نفسه ($49، Zigbee أو Thread)، وجهاز Sonoff Zigbee 3.0 USB Dongle Plus (~$27)، وجهاز ConBee III من Dresden Elektronik (~€40).',
    quickAnswerTop: {
      ar: {
        question: 'ما جهاز USB الذي أحتاجه لأجهزة Zigbee أو Thread مع Home Assistant؟',
        answer:
          'يتيح جهاز منسّق Zigbee (المقترن عادة بتكامل Zigbee2MQTT أو ZHA) لـ Home Assistant إقران أجهزة Zigbee والتحكم بها مباشرة؛ ويقوم جهاز موجّه حدود Thread بالمهمة المكافئة لأجهزة Thread، رغم أن العديد من موجّهات حدود Thread مدمجة بالفعل في مكبرات الصوت الذكية أو المراكز الحالية بدلاً من الحاجة إلى جهاز مخصص. الخيارات الحالية المؤكدة (تم التحقق في 16/07/2026): Connect ZBT-2 الخاص بـ Home Assistant نفسه ($49، شريحة Silicon Labs MG24، يدعم Zigbee أو Thread — وليس في آن واحد — ويحل محل Connect ZBT-1/SkyConnect الذي تم إيقافه)؛ وجهاز Sonoff Zigbee 3.0 USB Dongle Plus (~$27)، المتوفر بنسختين مختلفتين من الشريحة تحت اسم المنتج نفسه — ZBDongle-P (شريحة TI CC2652P) وZBDongle-E (شريحة Silicon Labs EFR32MG21) — وهو مثال حقيقي على أهمية التحقق من الشريحة وليس اسم المنتج فقط؛ وجهاز ConBee III من Dresden Elektronik (~€40)، الخلف الحالي لجهاز ConBee II الأقدم.',
        bullets: [
          'جهاز منسّق Zigbee: ضروري إذا لم يكن مركزك يحتوي على راديو Zigbee مدمج',
          'موجّه حدود Thread: غالباً مدمج بالفعل في مكبر صوت ذكي أو مركز موجود — تحقق قبل شراء جهاز مخصص',
          'الخيارات الحالية المؤكدة: HA Connect ZBT-2 ($49)، Sonoff Zigbee 3.0 USB Dongle Plus (~$27، تحقق من شريحة ZBDongle-P مقابل -E)، ConBee III (~€40)',
          'يحسّن كابل تمديد USB المدى/الموثوقية عبر إبعاد الجهاز عن تشويش الراديو الخاص بالكمبيوتر المصغّر نفسه',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'الملخص', anchor: 'tldr' },
      { label: 'أجهزة منسّق Zigbee', anchor: 'zigbee-dongles' },
      { label: 'أجهزة موجّه حدود Thread', anchor: 'thread-dongles' },
      { label: 'نصائح الإعداد', anchor: 'setup-tips' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يضيف جهاز USB منسّق Zigbee أو موجّه حدود Thread دعم راديو لإقران الأجهزة إلى مركز Home Assistant — تحقق تحديداً من الشريحة، إذ لا تعكس أسماء المنتجات دائماً تغييرات الشريحة الداخلية.' },
      { type: 'plain-terms', content: 'عادةً لا يحتوي جهاز الكمبيوتر المصغّر أو Raspberry Pi الذي يشغّل Home Assistant على راديو مدمج لأجهزة Zigbee مثل المستشعرات والمصابيح. يضيف جهاز USB صغير هذا الراديو. ينطبق الأمر نفسه على Thread، رغم أن الكثيرين يمتلكون بالفعل جهازاً متوافقاً مع Thread (مثل مكبر صوت ذكي) دون أن يدركوا ذلك.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'الملخص',
        isTldr: true,
        items: [
          'جهاز منسّق Zigbee: ضروري إذا لم يكن مركز Home Assistant لديك يحتوي على راديو Zigbee مدمج',
          'موجّه حدود Thread: تحقق مما إذا كان لديك بالفعل واحد مدمج في مكبر صوت ذكي أو مركز موجود قبل شراء جهاز مخصص',
          'الخيارات الحالية المؤكدة (تم التحقق في 16/07/2026): HA Connect ZBT-2 ($49)، Sonoff Zigbee 3.0 USB Dongle Plus (~$27، نسختان مختلفتان من الشريحة — ZBDongle-P مقابل -E)، ConBee III (~€40)',
          'غالباً ما يحسّن كابل تمديد USB الذي يبعد الجهاز عن إلكترونيات المركز نفسه الموثوقية',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'أجهزة منسّق Zigbee',
        content:
          '**يتصل جهاز منسّق Zigbee بمركز Home Assistant عبر USB ويقترن بتكامل Zigbee2MQTT أو ZHA — تحدد شريحة الراديو المحددة بداخله المدى والموثوقية أكثر من العلامة التجارية الخارجية للمنتج.**',
        items: [
          'يُعد جهاز Sonoff Zigbee 3.0 USB Dongle Plus (~$27) مثالاً حقيقياً وحالياً لهذه المخاطرة تحديداً: فهو متوفر بنسختين مختلفتين من الشريحة تحت اسم المنتج نفسه — ZBDongle-P (شريحة TI CC2652P) وZBDongle-E (شريحة Silicon Labs EFR32MG21) — وفقاً لصفحات منتجات Sonoff نفسها. تحقق من النسخة التي تشتريها، وليس اسم المنتج فقط.',
          'يُعد ConBee III من Dresden Elektronik (~€40) الخلف الحالي لجهاز ConBee II الأقدم الذي تم تجاوزه الآن — يأتي مزوداً بثابت Zigbee 3.0 افتراضياً، مع توفر ثابت بديل OpenThread Border Router لاستخدام Thread (وليس في آن واحد مع Zigbee على الجهاز نفسه)، وفقاً لصفحة منتج Dresden Elektronik نفسها.',
          'غالباً ما يحسّن كابل تمديد USB (بضعة دولارات) الذي يبعد الجهاز 1-2 متر عن منافذ USB 3.0 وراديو Wi-Fi الخاصين بالكمبيوتر المصغّر مدى وموثوقية Zigbee، لأن USB 3.0 يمكن أن يتداخل مع نطاق 2.4 جيجاهرتز الخاص بـ Zigbee.',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'أجهزة موجّه حدود Thread',
        content:
          '**لا يكون جهاز موجّه حدود Thread المخصص ضرورياً إلا إذا لم يكن لديك بالفعل واحد مدمج في مكبر صوت ذكي أو مركز موجود — تحقق أولاً من أجهزتك الحالية.**',
        items: [
          'تمتلك العديد من المنازل بالفعل موجّه حدود Thread دون أن تدرك ذلك، مدمجاً في مكبر صوت ذكي أو مركز موجود من نظام بيئي كبير — راجع دليل موجّهات Thread/Wi-Fi لمعرفة كيفية التحقق.',
          'يُعد جهاز موجّه حدود Thread مخصص لمركز Home Assistant مفيداً إذا كنت تريد تغطية Thread مستقلة عن أجهزة نظام بيئي آخر، أو موجّهات حدود إضافية لتوسيع تغطية الشبكة الشبكية.',
          'يدعم Connect ZBT-2 الخاص بـ Home Assistant نفسه ($49، مؤكد على home-assistant.io) Thread إلى جانب Zigbee — رغم عدم دعم كليهما في آن واحد على الجهاز نفسه — وهو الخيار الرسمي من الطرف الأول، ويحل محل Connect ZBT-1/SkyConnect الذي تم إيقافه.',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: 'نصائح الإعداد',
        content:
          '**استخدم كابل تمديد USB، وتجنب موزعات USB تحديداً لجهاز الراديو، وتحقق من متطلبات تحديث الثابت قبل الاستخدام الأول.**',
        items: [
          'وصّل الجهاز مباشرة بمنفذ المركز (عبر كابل تمديد) بدلاً من موزع USB، الذي يمكن أن يسبب تأخيراً أو تداخلاً لأجهزة الراديو.',
          'تحتاج بعض أجهزة المنسّق إلى تحديث ثابت قبل الاستخدام الأول لتشغيل الثابت المتوافق مع Zigbee2MQTT/ZHA الصحيح — تحقق من وثائق الإعداد الخاصة بالمنتج المحدد.',
          'ضع الجهاز (عبر كابل تمديده) بعيداً عن مصادر 2.4 جيجاهرتز الأخرى (موجّهات Wi-Fi، منافذ USB 3.0) للحصول على أكثر مدى موثوقية.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج إلى جهاز Zigbee وجهاز Thread معاً؟', a: 'فقط إذا كان لديك أجهزة من كلا النوعين ولا يوجد لديك موجّه حدود Thread موجود. تمتلك العديد من المنازل بالفعل تغطية Thread عبر مكبر صوت ذكي أو مركز موجود.' },
          { q: 'هل يضمن اسم المنتج الشريحة نفسها على مر الزمن؟', a: 'لا — شهدت هذه الفئة قيام الشركات المصنّعة بتغيير الشريحة الداخلية لخط منتج دون إعادة تسميته. تحقق من الوثائق الحالية وتقارير المجتمع للشريحة المحددة، وليس اسم المنتج فقط.' },
          { q: 'لماذا استخدام كابل تمديد USB للجهاز؟', a: 'يبعد جهاز الراديو عن منافذ USB 3.0 وراديو Wi-Fi الخاصين بالكمبيوتر المصغّر، اللذين يمكن أن يتداخلا مع نطاق Zigbee 2.4 جيجاهرتز، مما يحسّن عموماً المدى والموثوقية.' },
          { q: 'Zigbee2MQTT أم ZHA — هل يهم اختيار الجهاز؟', a: 'تحقق من قائمة الشرائح المدعومة الحالية للتكامل المحدد (Zigbee2MQTT أو ZHA) قبل الشراء، لأنه لا يتم دعم كل جهاز بالطريقة نفسها من قبل كليهما.' },
          { q: 'هل يمكنني استخدام جهاز Thread بدلاً من موجّه الحدود الخاص بمكبر الصوت الذكي الموجود لدي؟', a: 'يمكنك تشغيل عدة موجّهات حدود Thread في آن واحد — فهي تتعاون لتوسيع تغطية الشبكة الشبكية بدلاً من التعارض، لذا فإن إضافة جهاز مخصص أمر إضافي وليس متطلباً استبدالياً.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Matter وThread وZigbee وZ-Wave: البروتوكولات موضحة](/ar/smart-home/smart-home-protocols-explained) — أساسيات البروتوكولات',
          '[موجّهات Thread وWi-Fi 7 للمنازل الذكية](/ar/smart-home/thread-14-wifi-7-routers-guide) — أساسيات موجّه حدود Thread',
          '[أفضل الأجهزة لمنزل ذكي محلي + ذكاء اصطناعي محلي](/ar/smart-home/best-hardware-for-local-smart-home) — أجهزة المركز التي يتكامل معها هذا الجهاز',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل أجهزة USB Zigbee وThread (2027)',
      description: 'أفضل أجهزة USB Zigbee وThread لـ Home Assistant: اختلافات الشرائح وما يجب التحقق منه قبل الشراء.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'منسّق Zigbee' }, { '@type': 'Thing', name: 'موجّه حدود Thread' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج إلى جهاز Zigbee وجهاز Thread معاً؟', acceptedAnswer: { '@type': 'Answer', text: 'فقط إذا كان لديك أجهزة من كلا النوعين ولا يوجد لديك موجّه حدود Thread موجود.' } },
        { '@type': 'Question', name: 'هل يضمن اسم المنتج الشريحة نفسها على مر الزمن؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — قامت شركات مصنّعة بتغيير الشرائح الداخلية لخط منتج دون إعادة تسميته.' } },
        { '@type': 'Question', name: 'لماذا استخدام كابل تمديد USB للجهاز؟', acceptedAnswer: { '@type': 'Answer', text: 'يبعد جهاز الراديو عن منافذ USB 3.0 وWi-Fi، اللذين يمكن أن يتداخلا مع نطاق Zigbee.' } },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    affiliateDisclosure: true,
    title: '최고의 Zigbee 및 Thread USB 동글 (2027)',
    seoTitle: '최고의 Zigbee + Thread 동글 (2027)',
    intro:
      'USB Zigbee 코디네이터 또는 Thread 경계 라우터 동글은 Home Assistant를 실행하는 미니 PC나 Raspberry Pi를 Zigbee 및 Thread 기기를 직접 페어링할 수 있는 완전한 스마트홈 허브로 바꿔줍니다. Home Assistant 자체의 Connect ZBT-2($49), Sonoff의 Zigbee 3.0 USB Dongle Plus(약 $27, 하나의 제품명 아래 두 가지 칩셋 버전 존재), Dresden Elektronik의 ConBee III(약 €40)는 확인된 현재 옵션입니다(2026년 7월 16일 확인). ZBT-2 자체는 단종된 이전 모델의 후속 제품으로, 이는 이 카테고리가 단순한 주의사항이 아니라 구매 전 실제로 확인이 필요한 이유를 보여주는 실제 사례입니다.',
    metaDescription:
      '2027년 Home Assistant를 위한 최고의 Zigbee 및 Thread USB 동글: 칩셋 차이가 의미하는 것과 미니 PC나 Pi 허브와 동글을 페어링하는 방법.',
    twitterDescription:
      'Zigbee 코디네이터 및 Thread 경계 라우터 USB 동글 구매 가이드 — 칩셋 차이와 구매 전 확인해야 할 사항.',
    readTime: '6분 소요',
    educationalLevel: 'Intermediate',
    audience: '미니 PC나 Pi 허브에 Zigbee 또는 Thread 기기 지원을 추가하는 Home Assistant 사용자',
    primaryTerm: 'home assistant 최고의 zigbee 동글',
    targetKeywords: [
      'home assistant 최고의 zigbee 동글',
      'thread border router usb dongle',
      'zigbee coordinator usb',
      'home assistant zigbee2mqtt dongle',
      'thread dongle raspberry pi',
    ],
    leadAnswerBlock:
      '**USB Zigbee 코디네이터 동글은 내장되어 있지 않은 Home Assistant 허브에 Zigbee 기기 페어링 기능을 추가하며, Thread 경계 라우터 동글은 Thread 기기에 대해 동일한 역할을 합니다 — 브랜드만이 아니라 동글 내부의 칩셋이 범위와 신뢰성을 결정합니다.** 확인된 현재 옵션(2026년 7월 16일 확인): Home Assistant 자체의 Connect ZBT-2($49, Zigbee 또는 Thread), Sonoff의 Zigbee 3.0 USB Dongle Plus(약 $27), Dresden Elektronik의 ConBee III(약 €40).',
    quickAnswerTop: {
      ko: {
        question: 'Home Assistant에서 Zigbee 또는 Thread 기기를 사용하려면 어떤 USB 동글이 필요한가요?',
        answer:
          'Zigbee 코디네이터 동글(일반적으로 Zigbee2MQTT 또는 ZHA 통합과 함께 사용)은 Home Assistant가 Zigbee 기기를 직접 페어링하고 제어할 수 있게 해줍니다. Thread 경계 라우터 동글은 Thread 기기에 대해 동일한 역할을 하지만, 많은 Thread 경계 라우터는 전용 동글이 필요 없이 기존 스마트 스피커/허브에 이미 내장되어 있습니다. 확인된 현재 옵션(2026년 7월 16일 확인): Home Assistant 자체의 Connect ZBT-2($49, Silicon Labs MG24 칩셋, Zigbee 또는 Thread 지원 — 동시는 아님 — 단종된 Connect ZBT-1/SkyConnect의 후속 제품); Sonoff의 Zigbee 3.0 USB Dongle Plus(약 $27)는 동일한 제품명 아래 두 가지 칩셋 버전으로 출시됩니다 — ZBDongle-P(TI CC2652P)와 ZBDongle-E(Silicon Labs EFR32MG21) — 이는 제품명이 아니라 칩셋을 확인하는 것이 중요한 실제 사례입니다; Dresden Elektronik의 ConBee III(약 €40)는 이전 모델인 ConBee II의 현재 후속 제품입니다.',
        bullets: [
          'Zigbee 코디네이터 동글: 허브에 내장 Zigbee 무선이 없는 경우 필요',
          'Thread 경계 라우터: 기존 스마트 스피커/허브에 이미 내장된 경우가 많음 — 전용 동글 구매 전 확인',
          '확인된 현재 추천 제품: HA Connect ZBT-2($49), Sonoff Zigbee 3.0 USB Dongle Plus(약 $27, ZBDongle-P vs -E 칩셋 확인), ConBee III(약 €40)',
          'USB 연장 케이블은 동글을 미니 PC 자체의 무선 간섭에서 멀리 떨어뜨려 범위/신뢰성을 개선함',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: 'Zigbee 코디네이터 동글', anchor: 'zigbee-dongles' },
      { label: 'Thread 경계 라우터 동글', anchor: 'thread-dongles' },
      { label: '설정 팁', anchor: 'setup-tips' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'USB Zigbee 코디네이터 동글 또는 Thread 경계 라우터 동글은 Home Assistant 허브에 기기 페어링을 위한 무선 지원을 추가합니다 — 제품명이 내부 칩셋 변경을 항상 반영하지는 않으므로 칩셋을 구체적으로 확인하세요.' },
      { type: 'plain-terms', content: 'Home Assistant를 실행하는 미니 PC나 Raspberry Pi에는 일반적으로 센서나 전구 같은 Zigbee 기기용 무선이 내장되어 있지 않습니다. 작은 USB 동글이 이 무선 기능을 추가합니다. Thread도 마찬가지지만, 많은 사람들이 이미 Thread 지원 기기(스마트 스피커 등)를 소유하고 있으면서도 이를 모르는 경우가 많습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Zigbee 코디네이터 동글: Home Assistant 허브에 내장 Zigbee 무선이 없는 경우 필요',
          'Thread 경계 라우터: 전용 동글을 구매하기 전에 기존 스마트 스피커/허브에 이미 내장되어 있는지 확인',
          '확인된 현재 추천 제품(2026년 7월 16일 확인): HA Connect ZBT-2($49), Sonoff Zigbee 3.0 USB Dongle Plus(약 $27, 두 가지 칩셋 버전 — ZBDongle-P vs -E), ConBee III(약 €40)',
          '동글을 허브 자체 전자 부품에서 멀리 떨어뜨리는 USB 연장 케이블은 신뢰성을 개선하는 경우가 많음',
        ],
      },
      zigbeeDongles: {
        id: 'zigbee-dongles',
        title: 'Zigbee 코디네이터 동글',
        content:
          '**Zigbee 코디네이터 동글은 USB를 통해 Home Assistant 허브에 연결되어 Zigbee2MQTT 또는 ZHA 통합과 페어링됩니다 — 외부 제품 브랜드보다 내부의 특정 무선 칩셋이 범위와 신뢰성을 더 크게 좌우합니다.**',
        items: [
          'Sonoff의 Zigbee 3.0 USB Dongle Plus(약 $27)는 바로 이러한 위험을 보여주는 실제 최신 사례입니다. Sonoff의 자체 제품 페이지에 따르면 동일한 제품명 아래 두 가지 칩셋 버전 — ZBDongle-P(TI CC2652P 칩셋)와 ZBDongle-E(Silicon Labs EFR32MG21 칩셋) — 로 출시됩니다. 제품명이 아니라 구매하려는 버전을 확인하세요.',
          'Dresden Elektronik의 ConBee III(약 €40)는 이전 모델이자 이제는 대체된 ConBee II의 현재 후속 제품입니다 — Dresden Elektronik의 자체 제품 페이지에 따르면 기본적으로 Zigbee 3.0 펌웨어가 탑재되며, Thread 용도로는 대체 OpenThread Border Router 펌웨어를 사용할 수 있습니다(동일 동글에서 Zigbee와 동시 사용은 불가).',
          'USB 3.0이 2.4GHz Zigbee 대역과 간섭할 수 있으므로, 동글을 미니 PC 자체의 USB 3.0 포트와 Wi-Fi 무선에서 1~2미터 떨어뜨리는 USB 연장 케이블(몇 달러)은 일반적으로 Zigbee 범위와 신뢰성을 개선합니다.',
        ],
        affiliateLinks: [
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-P)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-p', productName: 'Sonoff ZBDongle-P', productCategory: 'Zigbee coordinator' },
          { label: 'Sonoff Zigbee 3.0 USB Dongle Plus (ZBDongle-E)', url: 'https://sonoff.tech/en-us/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e', productName: 'Sonoff ZBDongle-E', productCategory: 'Zigbee coordinator' },
          { label: 'Dresden Elektronik ConBee III', url: 'https://phoscon.de/en/conbee3', productName: 'ConBee III', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      threadDongles: {
        id: 'thread-dongles',
        title: 'Thread 경계 라우터 동글',
        content:
          '**전용 Thread 경계 라우터 동글은 기존 스마트 스피커나 허브에 이미 내장되어 있지 않은 경우에만 필요합니다 — 먼저 현재 하드웨어를 확인하세요.**',
        items: [
          '많은 가정이 이미 대형 생태계의 기존 스마트 스피커나 허브에 내장된 Thread 경계 라우터를 보유하고 있으면서도 이를 모릅니다 — 확인 방법은 Thread/Wi-Fi 라우터 가이드를 참조하세요.',
          'Home Assistant 허브용 전용 Thread 경계 라우터 동글은 다른 생태계의 하드웨어와 무관한 Thread 커버리지를 원하거나, 메시 커버리지를 확장하기 위한 추가 경계 라우터가 필요할 때 유용합니다.',
          'Home Assistant 자체의 Connect ZBT-2($49, home-assistant.io에서 확인)는 Zigbee 외에 Thread도 지원합니다 — 다만 동일 동글에서 동시에는 불가능합니다 — 이는 단종된 Connect ZBT-1/SkyConnect를 대체하는 공식 자사 옵션입니다.',
        ],
        affiliateLinks: [
          { label: 'Home Assistant Connect ZBT-2', url: 'https://www.home-assistant.io/connect/zbt-2/', productName: 'Home Assistant Connect ZBT-2', productCategory: 'Zigbee/Thread coordinator' },
        ],
      },
      setupTips: {
        id: 'setup-tips',
        title: '설정 팁',
        content:
          '**USB 연장 케이블을 사용하고, 무선 동글에는 특별히 USB 허브를 피하며, 처음 사용하기 전에 펌웨어 업데이트 요구사항을 확인하세요.**',
        items: [
          '동글은 USB 허브를 통하지 않고 (연장 케이블을 통해) 허브 포트에 직접 연결하세요. USB 허브는 무선 기기에 지연이나 간섭을 유발할 수 있습니다.',
          '일부 코디네이터 동글은 처음 사용하기 전에 올바른 Zigbee2MQTT/ZHA 호환 펌웨어를 실행하기 위한 펌웨어 플래싱이 필요합니다 — 해당 제품의 설정 문서를 확인하세요.',
          '가장 신뢰할 수 있는 범위를 위해 동글(연장 케이블을 통해)을 다른 2.4GHz 소스(Wi-Fi 라우터, USB 3.0 포트)에서 멀리 배치하세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Zigbee 동글과 Thread 동글이 둘 다 필요한가요?', a: '두 유형의 기기를 모두 보유하고 있고 기존 Thread 경계 라우터가 없는 경우에만 필요합니다. 많은 가정이 이미 기존 스마트 스피커나 허브를 통해 Thread 커버리지를 갖추고 있습니다.' },
          { q: '제품명이 시간이 지나도 동일한 칩셋을 보장하나요?', a: '아니요 — 이 카테고리에서는 제조사가 제품 라인의 이름을 바꾸지 않고 내부 칩셋을 변경한 사례가 있습니다. 제품명이 아니라 최신 문서와 커뮤니티 보고서에서 구체적인 칩셋을 확인하세요.' },
          { q: '동글에 USB 연장 케이블을 사용하는 이유는 무엇인가요?', a: '미니 PC 자체의 USB 3.0 포트와 Wi-Fi 무선에서 무선 동글을 멀리 떨어뜨려, 둘 다 Zigbee 2.4GHz 대역과 간섭할 수 있는 문제를 줄여 일반적으로 범위와 신뢰성을 개선합니다.' },
          { q: 'Zigbee2MQTT냐 ZHA냐 — 동글 선택이 중요한가요?', a: '구매 전 해당 통합(Zigbee2MQTT 또는 ZHA)의 최신 지원 칩셋 목록을 확인하세요. 모든 동글이 두 통합에서 동일하게 지원되는 것은 아닙니다.' },
          { q: '기존 스마트 스피커의 경계 라우터 대신 Thread 동글을 사용할 수 있나요?', a: '여러 Thread 경계 라우터를 동시에 운영할 수 있습니다 — 이들은 충돌하지 않고 협력하여 메시 커버리지를 확장하므로, 전용 라우터를 추가하는 것은 대체가 아니라 추가적인 것입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: 프로토콜 설명](/ko/smart-home/smart-home-protocols-explained) — 프로토콜 기초',
          '[스마트홈을 위한 Thread 및 Wi-Fi 7 라우터](/ko/smart-home/thread-14-wifi-7-routers-guide) — Thread 경계 라우터 기초',
          '[로컬 스마트홈 + 로컬 AI를 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — 이 제품과 짝을 이루는 허브 하드웨어',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '최고의 Zigbee 및 Thread USB 동글 (2027)',
      description: 'Home Assistant를 위한 최고의 Zigbee 및 Thread USB 동글: 칩셋 차이와 구매 전 확인해야 할 사항.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-zigbee-thread-dongles-2027',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Zigbee 코디네이터' }, { '@type': 'Thing', name: 'Thread 경계 라우터' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Zigbee 동글과 Thread 동글이 둘 다 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '두 유형의 기기를 모두 보유하고 있고 기존 Thread 경계 라우터가 없는 경우에만 필요합니다.' } },
        { '@type': 'Question', name: '제품명이 시간이 지나도 동일한 칩셋을 보장하나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 제조사가 제품 라인의 이름을 바꾸지 않고 내부 칩셋을 변경한 사례가 있습니다.' } },
        { '@type': 'Question', name: '동글에 USB 연장 케이블을 사용하는 이유는 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: '무선 동글을 USB 3.0 포트와 Wi-Fi에서 멀리 떨어뜨려, 둘 다 Zigbee 대역과 간섭할 수 있는 문제를 줄입니다.' } },
      ],
    },
  },
}
