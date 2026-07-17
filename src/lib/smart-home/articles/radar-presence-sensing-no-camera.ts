import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'Radar Presence Sensing: Room Occupancy Without a Camera (2027)',
    seoTitle: 'Radar Presence Sensing, No Camera (2027)',
    // Verified 2026-07-16 against Aqara's own spec page (us.aqara.com/pages/product-specs/presence-sensor-fp-2),
    // major US retailer listings (Amazon, Best Buy, Home Depot) for the Aqara FP2, and SmartHomeScene's
    // mmWave sensor module roundup + ESPHome's own LD2410 component docs for the Hi-Link LD2410/LD2410C/LD2450
    // DIY chips. Exact retail price fluctuates by retailer/promo — the range below is a checked snapshot, not
    // a fixed figure.
    intro:
      'mmWave radar sensors detect room occupancy and even micro-movements like breathing without capturing any image, making them a privacy-friendlier alternative to a camera for presence-based automations. The Aqara FP2 (around $80–85 at major US retailers) is a ready-to-use option, while Hi-Link\'s LD2410/LD2410C/LD2450 chips (around $15–25 as a DIY ESPHome build with an ESP32 board) are the common lower-cost path. This article covers how radar presence sensing works, where it beats a camera or motion sensor, and how to wire it into Home Assistant.',
    metaDescription:
      'Radar presence sensors for room occupancy detection without a camera: how mmWave sensing works and where it beats motion sensors or cameras in a smart home.',
    twitterDescription:
      'mmWave radar sensors detect room occupancy without a camera — more accurate than PIR motion sensors, more private than a camera.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners wanting accurate presence detection without adding a camera',
    primaryTerm: 'radar presence sensor smart home',
    targetKeywords: [
      'radar presence sensor smart home',
      'mmwave occupancy sensor no camera',
      'room presence detection without camera',
      'radar sensor home assistant',
      'privacy occupancy sensor',
    ],
    leadAnswerBlock:
      '**A radar (mmWave) presence sensor detects whether a room is occupied — including a stationary person, not just motion — without capturing any image, making it more accurate than a passive-infrared motion sensor and more private than a camera for presence-based automations.** The Aqara FP2 (~$80–85, ready-to-use) and Hi-Link\'s LD2410/LD2410C/LD2450 chips (~$15–25, DIY ESPHome build) are the two common paths — check current retailer pricing before buying, since promos shift the exact figure.',
    quickAnswerTop: {
      en: {
        question: 'Can I detect room occupancy without a camera?',
        answer:
          'Yes — mmWave radar presence sensors detect whether someone is in a room, including when they\'re sitting still, by sensing motion and micro-movement (like breathing) via radio waves, without capturing any image. This solves the main limitation of passive-infrared (PIR) motion sensors, which stop detecting a stationary person after a short timeout. The Aqara FP2 (~$80–85 at major US retailers, wired, Wi-Fi + Bluetooth, no hub required) is a ready-to-use option that pairs with Home Assistant locally via the HomeKit Controller integration; Hi-Link\'s LD2410/LD2410C/LD2450 chips (~$15–25 as a DIY ESPHome build with an ESP32 board) are the cheaper, more hands-on path with native ESPHome support.',
        bullets: [
          'Radar sensors detect stationary occupancy, not just motion — solves PIR\'s "stops detecting when still" problem',
          'No image is captured — more private than a camera for presence detection',
          'Aqara FP2: ~$80–85, ready-to-use, pairs with Home Assistant locally via HomeKit Controller',
          'Hi-Link LD2410/LD2410C/LD2450: ~$15–25 as a DIY ESPHome build, native ESPHome component support',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'How Radar Presence Sensing Works', anchor: 'how-it-works' },
      { label: 'Radar vs PIR Motion vs Camera', anchor: 'radar-vs-alternatives' },
      { label: 'Home Assistant Integration', anchor: 'ha-integration' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Radar (mmWave) presence sensors detect room occupancy, including a stationary person, without capturing an image — more accurate than motion sensors and more private than a camera.' },
      { type: 'plain-terms', content: 'A regular motion sensor only notices when something moves, so it can think a room is empty even while you\'re sitting still reading. A radar sensor uses radio waves instead of light, and can detect that a person is present even without motion — similar to how radar detects a stationary car — all without taking a picture of the room.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'mmWave radar sensors detect occupancy including a stationary person, unlike PIR motion sensors which need movement to trigger',
          'No image is captured — presence data only, which is more private than a camera for this use case',
          'Ready-to-use option: Aqara FP2 (~$80–85, wired, no hub required, pairs locally via HomeKit Controller). DIY option: Hi-Link LD2410/LD2410C/LD2450 (~$15–25 with an ESP32 board, native ESPHome support)',
          'Integrates into Home Assistant as a standard presence/occupancy entity, usable in any automation the same way a motion sensor would be',
          'See the sensor fusion guide for combining radar with other sensor types to reduce false positives further',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'How Radar Presence Sensing Works',
        content:
          '**A radar sensor emits low-power radio waves and measures the reflections to detect movement and even micro-movements like breathing, which is what lets it register a stationary person as "present" rather than timing out.**',
        items: [
          'This is fundamentally different from a passive-infrared (PIR) motion sensor, which only detects heat-signature changes from movement and cannot distinguish a stationary occupant from an empty room.',
          'Because it works via radio reflection rather than light or image capture, a radar sensor can also work through some materials and doesn\'t need line-of-sight the way an optical sensor does.',
          'Some radar sensors report distance and zone information in addition to a simple occupied/unoccupied state, letting automations react to where in a room someone is, not just whether the room is occupied — the Aqara FP2, for example, divides a monitored room into up to 30 zones and can track up to 5 people simultaneously.',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'Radar vs PIR Motion vs Camera',
        content:
          '**Choose radar when you need accurate stationary-occupancy detection without a camera; choose PIR motion sensors for simple, low-cost trigger-on-movement automations; choose a camera when you need to identify what or who is present, not just whether the room is occupied.**',
        items: [
          'PIR motion sensors are cheaper and sufficient for automations that only need to detect movement, like a hallway light that turns on when you walk through — they aren\'t suited to "keep the lights on while someone is sitting still" automations without workarounds.',
          'A camera (see the local AI security camera guide) can identify specific objects or people, which radar cannot — use a camera when identification matters, not just presence.',
          'Radar sensors avoid the privacy trade-off of a camera entirely for automations that only need to know "is someone here," which is a meaningful privacy improvement for rooms like bedrooms or bathrooms where a camera would be undesirable.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant Integration',
        content:
          '**A radar presence sensor typically integrates into Home Assistant as a binary occupancy sensor (and sometimes additional zone/distance sensors), usable in any automation the same way a motion sensor entity would be.**',
        items: [
          'The Aqara FP2 connects over Wi-Fi (2.4GHz) plus Bluetooth, and pairs with Home Assistant through the local HomeKit Controller integration — no Aqara hub or cloud account required. Hi-Link LD2410/LD2410C/LD2450-based DIY builds run on an ESP32 with ESPHome, which is local by design. Check the specific product\'s integration method before buying if local control matters to you — not every radar sensor on the market avoids a cloud dependency.',
          'Because the entity behaves like a standard presence sensor, existing automations built around motion sensors can often be adapted to a radar sensor with minimal changes — replace the trigger entity, keep the automation logic.',
          'Combining radar with other sensor types (contact sensors, a camera, audio) via sensor fusion can reduce false positives further — see the sensor fusion in the smart home guide.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does a radar sensor capture any images?', a: 'No — radar presence sensors detect occupancy via radio wave reflection, not image capture. This is the core privacy advantage over a camera for presence detection.' },
          { q: 'Can radar sensors detect a person who is sitting completely still?', a: 'Yes — this is the main advantage over PIR motion sensors, which rely on movement and typically time out when someone stops moving. Radar can detect micro-movements like breathing to register continued occupancy.' },
          { q: 'How much do radar presence sensors cost?', a: 'A ready-to-use option like the Aqara FP2 runs around $80–85 at major US retailers; a DIY build using a Hi-Link LD2410, LD2410C, or LD2450 chip with an ESP32 board runs around $15–25. Check current retailer listings before buying, since promos shift the exact figure.' },
          { q: 'Do radar sensors work through walls or doors?', a: 'To a limited, unreliable degree — community testing with Hi-Link LD2410-class sensors shows they can pick up motion through glass and thin plywood, but are often oversensitive through thin walls or doors in ways that cause false positives rather than useful detection. Don\'t design an automation around deliberate through-wall sensing; tune the detection range and sensitivity down if you\'re seeing triggers from an adjacent room.' },
          { q: 'Is a radar sensor better than a PIR motion sensor for every use case?', a: 'No — PIR sensors are cheaper and perfectly adequate for simple trigger-on-movement automations. Radar is worth the added cost specifically when you need accurate stationary-occupancy detection.' },
          { q: 'Can I use a radar sensor for security instead of a camera?', a: 'Radar can detect presence/intrusion but cannot identify who or what triggered it the way a camera can — for security applications requiring identification, a camera (or radar plus camera together via sensor fusion) is the more complete solution.' },
          { q: 'Does a radar sensor need internet access to work?', a: 'This depends on the specific product\'s integration — check whether it uses a local integration (Zigbee, ESPHome) versus a cloud-dependent app before buying if offline reliability matters to you.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Sensor Fusion in the Smart Home](/smart-home/sensor-fusion-smart-home-2027) — combining radar with other sensor types',
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — the identification alternative to presence-only radar',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the broader privacy context radar sensing addresses',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Radar Presence Sensing: Room Occupancy Without a Camera (2027)',
      description: 'Radar presence sensors for room occupancy detection without a camera: how mmWave sensing works and where it beats motion sensors or cameras.',
      url: 'https://www.promptquorum.com/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Radar presence sensor' }, { '@type': 'Thing', name: 'mmWave sensing' }, { '@type': 'Thing', name: 'Occupancy detection' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Does a radar sensor capture any images?', acceptedAnswer: { '@type': 'Answer', text: 'No — radar presence sensors detect occupancy via radio wave reflection, not image capture.' } },
        { '@type': 'Question', name: 'Can radar sensors detect a person who is sitting completely still?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — radar can detect micro-movements like breathing to register continued occupancy, unlike PIR motion sensors which time out.' } },
        { '@type': 'Question', name: 'Is a radar sensor better than a PIR motion sensor for every use case?', acceptedAnswer: { '@type': 'Answer', text: 'No — PIR sensors are cheaper and adequate for simple trigger-on-movement automations. Radar is worth it for accurate stationary-occupancy detection specifically.' } },
        { '@type': 'Question', name: 'Can I use a radar sensor for security instead of a camera?', acceptedAnswer: { '@type': 'Answer', text: 'Radar can detect presence/intrusion but cannot identify who or what triggered it the way a camera can.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'Radarpräsenzsensorik: Raumbelegung ohne Kamera (2027)',
    seoTitle: 'Radarpräsenzsensorik ohne Kamera (2027)',
    intro:
      'mmWave-Radarsensoren erkennen Raumbelegung und sogar Mikrobewegungen wie Atmung, ohne dabei ein Bild aufzunehmen — das macht sie zu einer datenschutzfreundlicheren Alternative zu einer Kamera für präsenzbasierte Automatisierungen. Der Aqara FP2 (etwa 80–85 $ bei großen US-Händlern) ist eine gebrauchsfertige Option, während Hi-Links LD2410/LD2410C/LD2450-Chips (etwa 15–25 $ als DIY-ESPHome-Build mit einem ESP32-Board) der übliche kostengünstigere Weg sind. Dieser Artikel erklärt, wie Radarpräsenzsensorik funktioniert, wo sie eine Kamera oder einen Bewegungsmelder übertrifft, und wie man sie in Home Assistant einbindet.',
    metaDescription:
      'Radarpräsenzsensoren zur Raumbelegungserkennung ohne Kamera: wie mmWave-Sensorik funktioniert und wo sie Bewegungsmelder oder Kameras im Smart Home übertrifft.',
    twitterDescription:
      'mmWave-Radarsensoren erkennen Raumbelegung ohne Kamera — genauer als PIR-Bewegungsmelder, datenschutzfreundlicher als eine Kamera.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer, die präzise Präsenzerkennung ohne zusätzliche Kamera wünschen',
    primaryTerm: 'radar praesenzsensor smart home',
    targetKeywords: [
      'radar praesenzsensor smart home',
      'mmwave belegungssensor ohne kamera',
      'raumpraesenzerkennung ohne kamera',
      'radarsensor home assistant',
      'datenschutzfreundlicher belegungssensor',
    ],
    leadAnswerBlock:
      '**Ein Radar-(mmWave-)Präsenzsensor erkennt, ob ein Raum belegt ist — einschließlich einer regungslos sitzenden Person, nicht nur Bewegung — ohne dabei ein Bild aufzunehmen, was ihn genauer macht als einen passiven Infrarot-Bewegungsmelder und datenschutzfreundlicher als eine Kamera für präsenzbasierte Automatisierungen.** Der Aqara FP2 (~80–85 $, gebrauchsfertig) und Hi-Links LD2410/LD2410C/LD2450-Chips (~15–25 $, DIY-ESPHome-Build) sind die beiden üblichen Wege — prüfe vor dem Kauf die aktuellen Händlerpreise, da Aktionen die genaue Zahl verschieben.',
    quickAnswerTop: {
      de: {
        question: 'Kann ich Raumbelegung ohne Kamera erkennen?',
        answer:
          'Ja — mmWave-Radar-Präsenzsensoren erkennen, ob sich jemand in einem Raum befindet, auch wenn die Person still sitzt, indem sie Bewegung und Mikrobewegungen (wie Atmung) über Radiowellen erfassen, ohne dabei ein Bild aufzunehmen. Das löst die Hauptschwäche passiver Infrarot-(PIR-)Bewegungsmelder, die eine regungslose Person nach einem kurzen Timeout nicht mehr erkennen. Der Aqara FP2 (~80–85 $ bei großen US-Händlern, kabelgebunden, Wi-Fi + Bluetooth, ohne Hub) ist eine gebrauchsfertige Option, die sich lokal über die HomeKit-Controller-Integration mit Home Assistant koppeln lässt; Hi-Links LD2410/LD2410C/LD2450-Chips (~15–25 $ als DIY-ESPHome-Build mit einem ESP32-Board) sind der günstigere, arbeitsintensivere Weg mit nativer ESPHome-Unterstützung.',
        bullets: [
          'Radarsensoren erkennen regungslose Belegung, nicht nur Bewegung — löst das Problem von PIR, dass die Erkennung bei Stillstand aufhört',
          'Es wird kein Bild aufgenommen — datenschutzfreundlicher als eine Kamera zur Präsenzerkennung',
          'Aqara FP2: ~80–85 $, gebrauchsfertig, koppelt sich lokal über HomeKit Controller mit Home Assistant',
          'Hi-Link LD2410/LD2410C/LD2450: ~15–25 $ als DIY-ESPHome-Build, native ESPHome-Komponentenunterstützung',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Wie Radarpräsenzsensorik funktioniert', anchor: 'how-it-works' },
      { label: 'Radar vs. PIR-Bewegungsmelder vs. Kamera', anchor: 'radar-vs-alternatives' },
      { label: 'Home-Assistant-Integration', anchor: 'ha-integration' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Radar-(mmWave-)Präsenzsensoren erkennen Raumbelegung, einschließlich einer regungslosen Person, ohne dabei ein Bild aufzunehmen — genauer als Bewegungsmelder und datenschutzfreundlicher als eine Kamera.' },
      { type: 'plain-terms', content: 'Ein gewöhnlicher Bewegungsmelder bemerkt nur, wenn sich etwas bewegt, und kann deshalb glauben, ein Raum sei leer, obwohl du still sitzt und liest. Ein Radarsensor nutzt stattdessen Radiowellen statt Licht und kann erkennen, dass eine Person anwesend ist, auch ohne Bewegung — ähnlich wie Radar ein stehendes Auto erkennt — all das, ohne ein Bild vom Raum aufzunehmen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'mmWave-Radarsensoren erkennen Belegung einschließlich einer regungslosen Person, im Gegensatz zu PIR-Bewegungsmeldern, die Bewegung zum Auslösen benötigen',
          'Es wird kein Bild aufgenommen — nur Präsenzdaten, was für diesen Einsatzzweck datenschutzfreundlicher ist als eine Kamera',
          'Gebrauchsfertige Option: Aqara FP2 (~80–85 $, kabelgebunden, ohne Hub, koppelt lokal über HomeKit Controller). DIY-Option: Hi-Link LD2410/LD2410C/LD2450 (~15–25 $ mit einem ESP32-Board, native ESPHome-Unterstützung)',
          'Lässt sich in Home Assistant als Standard-Präsenz-/Belegungsentität einbinden, nutzbar in jeder Automatisierung genau wie ein Bewegungsmelder',
          'Siehe den Sensor-Fusion-Leitfaden zum Kombinieren von Radar mit anderen Sensortypen, um Fehlalarme weiter zu reduzieren',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Wie Radarpräsenzsensorik funktioniert',
        content:
          '**Ein Radarsensor sendet energiearme Radiowellen aus und misst die Reflexionen, um Bewegung und sogar Mikrobewegungen wie Atmung zu erkennen — dadurch registriert er eine regungslose Person als „anwesend" statt sie nach einem Timeout als abwesend zu werten.**',
        items: [
          'Das unterscheidet sich grundlegend von einem passiven Infrarot-(PIR-)Bewegungsmelder, der nur Wärmesignaturänderungen durch Bewegung erkennt und eine regungslose anwesende Person nicht von einem leeren Raum unterscheiden kann.',
          'Da er über Funkreflexion statt über Licht oder Bildaufnahme arbeitet, kann ein Radarsensor auch durch manche Materialien hindurch funktionieren und benötigt keine Sichtlinie wie ein optischer Sensor.',
          'Manche Radarsensoren melden zusätzlich zu einem einfachen Belegt/Unbelegt-Status auch Entfernungs- und Zoneninformationen, sodass Automatisierungen darauf reagieren können, wo genau sich jemand im Raum befindet, nicht nur ob der Raum belegt ist — der Aqara FP2 zum Beispiel unterteilt einen überwachten Raum in bis zu 30 Zonen und kann bis zu 5 Personen gleichzeitig verfolgen.',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'Radar vs. PIR-Bewegungsmelder vs. Kamera',
        content:
          '**Wähle Radar, wenn du genaue Erkennung regungsloser Belegung ohne Kamera brauchst; wähle PIR-Bewegungsmelder für einfache, kostengünstige Bewegungsauslöser-Automatisierungen; wähle eine Kamera, wenn du erkennen musst, was oder wer anwesend ist, nicht nur ob der Raum belegt ist.**',
        items: [
          'PIR-Bewegungsmelder sind günstiger und ausreichend für Automatisierungen, die nur Bewegung erkennen müssen, etwa ein Flurlicht, das beim Durchgehen angeht — sie eignen sich ohne Workarounds nicht für Automatisierungen wie „Licht anlassen, solange jemand regungslos sitzt".',
          'Eine Kamera (siehe den Leitfaden zu lokalen KI-Sicherheitskameras) kann bestimmte Objekte oder Personen identifizieren, was Radar nicht kann — nutze eine Kamera, wenn Identifikation wichtig ist, nicht nur Präsenz.',
          'Radarsensoren umgehen den Datenschutz-Kompromiss einer Kamera vollständig bei Automatisierungen, die nur wissen müssen „ist jemand hier" — ein bedeutender Datenschutzgewinn für Räume wie Schlafzimmer oder Badezimmer, in denen eine Kamera unerwünscht wäre.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home-Assistant-Integration',
        content:
          '**Ein Radar-Präsenzsensor bindet sich typischerweise als binärer Belegungssensor (und manchmal zusätzliche Zonen-/Entfernungssensoren) in Home Assistant ein und ist in jeder Automatisierung genau wie eine Bewegungsmelder-Entität nutzbar.**',
        items: [
          'Der Aqara FP2 verbindet sich über Wi-Fi (2,4 GHz) plus Bluetooth und koppelt sich über die lokale HomeKit-Controller-Integration mit Home Assistant — ohne Aqara-Hub oder Cloud-Konto. DIY-Builds auf Basis von Hi-Link LD2410/LD2410C/LD2450 laufen auf einem ESP32 mit ESPHome, das von Haus aus lokal ist. Prüfe vor dem Kauf die Integrationsmethode des konkreten Produkts, falls dir lokale Steuerung wichtig ist — nicht jeder Radarsensor auf dem Markt vermeidet eine Cloud-Abhängigkeit.',
          'Da sich die Entität wie ein Standard-Präsenzsensor verhält, lassen sich bestehende, um Bewegungsmelder herum gebaute Automatisierungen oft mit minimalen Änderungen an einen Radarsensor anpassen — die Auslöser-Entität ersetzen, die Automatisierungslogik beibehalten.',
          'Das Kombinieren von Radar mit anderen Sensortypen (Kontaktsensoren, einer Kamera, Audio) per Sensor-Fusion kann Fehlalarme weiter reduzieren — siehe die Sensor-Fusion im Smart-Home-Leitfaden.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Nimmt ein Radarsensor Bilder auf?', a: 'Nein — Radar-Präsenzsensoren erkennen Belegung über Funkwellenreflexion, nicht über Bildaufnahme. Das ist der wesentliche Datenschutzvorteil gegenüber einer Kamera zur Präsenzerkennung.' },
          { q: 'Können Radarsensoren eine völlig regungslos sitzende Person erkennen?', a: 'Ja — das ist der Hauptvorteil gegenüber PIR-Bewegungsmeldern, die auf Bewegung angewiesen sind und typischerweise nach einem Timeout abschalten, sobald sich jemand nicht mehr bewegt. Radar kann Mikrobewegungen wie Atmung erkennen, um fortbestehende Belegung zu registrieren.' },
          { q: 'Wie viel kosten Radar-Präsenzsensoren?', a: 'Eine gebrauchsfertige Option wie der Aqara FP2 kostet bei großen US-Händlern etwa 80–85 $; ein DIY-Build mit einem Hi-Link-LD2410-, LD2410C- oder LD2450-Chip und einem ESP32-Board kostet etwa 15–25 $. Prüfe vor dem Kauf aktuelle Händlerangebote, da Aktionen die genaue Zahl verschieben.' },
          { q: 'Funktionieren Radarsensoren durch Wände oder Türen hindurch?', a: 'In begrenztem, unzuverlässigem Maß — Community-Tests mit Sensoren der Hi-Link-LD2410-Klasse zeigen, dass sie Bewegung durch Glas und dünnes Sperrholz erfassen können, sind aber durch dünne Wände oder Türen oft überempfindlich, was eher zu Fehlalarmen als zu nützlicher Erkennung führt. Baue keine Automatisierung auf gezielter Durch-Wand-Erkennung auf; reduziere Erkennungsreichweite und Empfindlichkeit, wenn du Auslöser aus einem Nachbarraum bemerkst.' },
          { q: 'Ist ein Radarsensor für jeden Einsatzzweck besser als ein PIR-Bewegungsmelder?', a: 'Nein — PIR-Sensoren sind günstiger und für einfache Bewegungsauslöser-Automatisierungen völlig ausreichend. Radar lohnt die Mehrkosten speziell dann, wenn du genaue Erkennung regungsloser Belegung brauchst.' },
          { q: 'Kann ich einen Radarsensor statt einer Kamera für Sicherheit nutzen?', a: 'Radar kann Präsenz/Eindringen erkennen, aber nicht identifizieren, wer oder was es ausgelöst hat, so wie es eine Kamera kann — für Sicherheitsanwendungen, die Identifikation erfordern, ist eine Kamera (oder Radar plus Kamera zusammen per Sensor-Fusion) die vollständigere Lösung.' },
          { q: 'Braucht ein Radarsensor Internetzugang, um zu funktionieren?', a: 'Das hängt von der Integration des konkreten Produkts ab — prüfe vor dem Kauf, ob es eine lokale Integration (Zigbee, ESPHome) oder eine cloudabhängige App nutzt, falls dir Offline-Zuverlässigkeit wichtig ist.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Sensor-Fusion im Smart Home](/de/smart-home/sensor-fusion-smart-home-2027) — Radar mit anderen Sensortypen kombinieren',
          '[Lokale KI-Sicherheitskameras mit Frigate](/de/smart-home/local-ai-security-camera) — die Identifikationsalternative zu reiner Präsenzerkennung per Radar',
          '[Datenschutzrisiken im Smart Home](/de/smart-home/smart-home-privacy-risks) — der breitere Datenschutzkontext, den Radarsensorik adressiert',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Radarpräsenzsensorik: Raumbelegung ohne Kamera (2027)',
      description: 'Radarpräsenzsensoren zur Raumbelegungserkennung ohne Kamera: wie mmWave-Sensorik funktioniert und wo sie Bewegungsmelder oder Kameras übertrifft.',
      url: 'https://www.promptquorum.com/de/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Radar-Präsenzsensor' }, { '@type': 'Thing', name: 'mmWave-Sensorik' }, { '@type': 'Thing', name: 'Belegungserkennung' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Nimmt ein Radarsensor Bilder auf?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — Radar-Präsenzsensoren erkennen Belegung über Funkwellenreflexion, nicht über Bildaufnahme.' } },
        { '@type': 'Question', name: 'Können Radarsensoren eine völlig regungslos sitzende Person erkennen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Radar kann Mikrobewegungen wie Atmung erkennen, um fortbestehende Belegung zu registrieren, im Gegensatz zu PIR-Bewegungsmeldern, die nach einem Timeout abschalten.' } },
        { '@type': 'Question', name: 'Ist ein Radarsensor für jeden Einsatzzweck besser als ein PIR-Bewegungsmelder?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — PIR-Sensoren sind günstiger und für einfache Bewegungsauslöser-Automatisierungen ausreichend. Radar lohnt sich speziell für genaue Erkennung regungsloser Belegung.' } },
        { '@type': 'Question', name: 'Kann ich einen Radarsensor statt einer Kamera für Sicherheit nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Radar kann Präsenz/Eindringen erkennen, aber nicht identifizieren, wer oder was es ausgelöst hat, so wie es eine Kamera kann.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: "Détection de présence radar : occupation d'une pièce sans caméra (2027)",
    seoTitle: 'Détection de présence radar sans caméra (2027)',
    intro:
      "Les capteurs radar mmWave détectent l'occupation d'une pièce et même des micro-mouvements comme la respiration, sans capturer aucune image, ce qui en fait une alternative plus respectueuse de la vie privée qu'une caméra pour les automatisations basées sur la présence. L'Aqara FP2 (environ 80–85 $ chez les grands revendeurs américains) est une option prête à l'emploi, tandis que les puces LD2410/LD2410C/LD2450 de Hi-Link (environ 15–25 $ en montage DIY ESPHome avec une carte ESP32) constituent la voie courante à moindre coût. Cet article explique comment fonctionne la détection de présence radar, où elle surpasse une caméra ou un capteur de mouvement, et comment l'intégrer à Home Assistant.",
    metaDescription:
      "Capteurs de présence radar pour détecter l'occupation d'une pièce sans caméra : comment fonctionne la détection mmWave et où elle surpasse les capteurs de mouvement ou les caméras dans une maison connectée.",
    twitterDescription:
      "Les capteurs radar mmWave détectent l'occupation d'une pièce sans caméra — plus précis que les capteurs de mouvement PIR, plus respectueux de la vie privée qu'une caméra.",
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de maison connectée souhaitant une détection de présence précise sans ajouter de caméra',
    primaryTerm: 'capteur radar presence maison connectee',
    targetKeywords: [
      'capteur radar presence maison connectee',
      'capteur occupation mmwave sans camera',
      'detection presence piece sans camera',
      'capteur radar home assistant',
      'capteur occupation respect vie privee',
    ],
    leadAnswerBlock:
      "**Un capteur de présence radar (mmWave) détecte si une pièce est occupée — y compris par une personne immobile, pas seulement en mouvement — sans capturer aucune image, ce qui le rend plus précis qu'un capteur de mouvement infrarouge passif et plus respectueux de la vie privée qu'une caméra pour les automatisations basées sur la présence.** L'Aqara FP2 (~80–85 $, prêt à l'emploi) et les puces LD2410/LD2410C/LD2450 de Hi-Link (~15–25 $, montage DIY ESPHome) sont les deux voies courantes — vérifiez les prix actuels des revendeurs avant d'acheter, car les promotions font varier le chiffre exact.",
    quickAnswerTop: {
      fr: {
        question: "Puis-je détecter l'occupation d'une pièce sans caméra ?",
        answer:
          "Oui — les capteurs de présence radar mmWave détectent si quelqu'un se trouve dans une pièce, y compris lorsqu'il est assis immobile, en détectant le mouvement et les micro-mouvements (comme la respiration) via des ondes radio, sans capturer aucune image. Cela résout la principale limite des capteurs de mouvement infrarouges passifs (PIR), qui cessent de détecter une personne immobile après un court délai. L'Aqara FP2 (~80–85 $ chez les grands revendeurs américains, filaire, Wi-Fi + Bluetooth, sans hub requis) est une option prête à l'emploi qui s'associe localement à Home Assistant via l'intégration HomeKit Controller ; les puces LD2410/LD2410C/LD2450 de Hi-Link (~15–25 $ en montage DIY ESPHome avec une carte ESP32) constituent la voie moins chère et plus pratique, avec prise en charge native ESPHome.",
        bullets: [
          "Les capteurs radar détectent l'occupation immobile, pas seulement le mouvement — résout le problème du PIR qui « cesse de détecter à l'arrêt »",
          "Aucune image n'est capturée — plus respectueux de la vie privée qu'une caméra pour la détection de présence",
          "Aqara FP2 : ~80–85 $, prêt à l'emploi, s'associe localement à Home Assistant via HomeKit Controller",
          "Hi-Link LD2410/LD2410C/LD2450 : ~15–25 $ en montage DIY ESPHome, prise en charge native des composants ESPHome",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Comment fonctionne la détection de présence radar', anchor: 'how-it-works' },
      { label: 'Radar vs mouvement PIR vs caméra', anchor: 'radar-vs-alternatives' },
      { label: 'Intégration Home Assistant', anchor: 'ha-integration' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Les capteurs de présence radar (mmWave) détectent l'occupation d'une pièce, y compris une personne immobile, sans capturer d'image — plus précis que les capteurs de mouvement et plus respectueux de la vie privée qu'une caméra." },
      { type: 'plain-terms', content: "Un capteur de mouvement classique ne remarque que ce qui bouge, il peut donc penser qu'une pièce est vide alors que vous êtes assis immobile en train de lire. Un capteur radar utilise des ondes radio au lieu de la lumière et peut détecter la présence d'une personne même sans mouvement — un peu comme un radar détecte une voiture à l'arrêt — le tout sans prendre de photo de la pièce." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Les capteurs radar mmWave détectent l'occupation, y compris une personne immobile, contrairement aux capteurs de mouvement PIR qui nécessitent un mouvement pour se déclencher",
          "Aucune image n'est capturée — seulement des données de présence, ce qui est plus respectueux de la vie privée qu'une caméra pour cet usage",
          "Option prête à l'emploi : Aqara FP2 (~80–85 $, filaire, sans hub requis, s'associe localement via HomeKit Controller). Option DIY : Hi-Link LD2410/LD2410C/LD2450 (~15–25 $ avec une carte ESP32, prise en charge native ESPHome)",
          "S'intègre à Home Assistant comme une entité de présence/occupation standard, utilisable dans n'importe quelle automatisation comme le serait un capteur de mouvement",
          "Voir le guide de fusion de capteurs pour combiner le radar avec d'autres types de capteurs afin de réduire davantage les faux positifs",
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Comment fonctionne la détection de présence radar',
        content:
          "**Un capteur radar émet des ondes radio à faible puissance et mesure les réflexions pour détecter le mouvement et même des micro-mouvements comme la respiration, ce qui lui permet d'enregistrer une personne immobile comme « présente » plutôt que de la considérer absente après un délai.**",
        items: [
          "Cela diffère fondamentalement d'un capteur de mouvement infrarouge passif (PIR), qui ne détecte que les changements de signature thermique dus au mouvement et ne peut pas distinguer un occupant immobile d'une pièce vide.",
          "Comme il fonctionne par réflexion radio plutôt que par lumière ou capture d'image, un capteur radar peut aussi fonctionner à travers certains matériaux et n'a pas besoin de ligne de vue directe comme un capteur optique.",
          "Certains capteurs radar rapportent des informations de distance et de zone en plus d'un simple état occupé/inoccupé, permettant aux automatisations de réagir à l'endroit précis où se trouve quelqu'un dans une pièce, pas seulement si la pièce est occupée — l'Aqara FP2, par exemple, divise une pièce surveillée en jusqu'à 30 zones et peut suivre jusqu'à 5 personnes simultanément.",
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'Radar vs mouvement PIR vs caméra',
        content:
          "**Choisissez le radar quand vous avez besoin d'une détection précise de l'occupation immobile sans caméra ; choisissez les capteurs de mouvement PIR pour des automatisations simples et peu coûteuses déclenchées par le mouvement ; choisissez une caméra quand vous devez identifier ce qui ou qui est présent, pas seulement si la pièce est occupée.**",
        items: [
          "Les capteurs de mouvement PIR sont moins chers et suffisants pour les automatisations qui n'ont besoin de détecter que le mouvement, comme une lumière de couloir qui s'allume à votre passage — ils ne conviennent pas, sans contournement, aux automatisations du type « garder la lumière allumée tant que quelqu'un est assis immobile ».",
          "Une caméra (voir le guide des caméras de sécurité IA locales) peut identifier des objets ou des personnes spécifiques, ce que le radar ne peut pas faire — utilisez une caméra quand l'identification compte, pas seulement la présence.",
          "Les capteurs radar évitent entièrement le compromis de confidentialité d'une caméra pour les automatisations qui doivent seulement savoir « quelqu'un est-il ici » — une amélioration significative de la vie privée pour des pièces comme les chambres ou les salles de bains où une caméra serait indésirable.",
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Intégration Home Assistant',
        content:
          "**Un capteur de présence radar s'intègre généralement à Home Assistant comme un capteur d'occupation binaire (et parfois des capteurs de zone/distance supplémentaires), utilisable dans n'importe quelle automatisation comme le serait une entité de capteur de mouvement.**",
        items: [
          "L'Aqara FP2 se connecte en Wi-Fi (2,4 GHz) plus Bluetooth, et s'associe à Home Assistant via l'intégration locale HomeKit Controller — sans hub Aqara ni compte cloud requis. Les montages DIY basés sur Hi-Link LD2410/LD2410C/LD2450 tournent sur un ESP32 avec ESPHome, qui est local par conception. Vérifiez la méthode d'intégration du produit spécifique avant l'achat si le contrôle local compte pour vous — tous les capteurs radar du marché n'évitent pas une dépendance cloud.",
          "Comme l'entité se comporte comme un capteur de présence standard, les automatisations existantes construites autour de capteurs de mouvement peuvent souvent être adaptées à un capteur radar avec des changements minimes — remplacez l'entité déclencheuse, conservez la logique d'automatisation.",
          "Combiner le radar avec d'autres types de capteurs (capteurs de contact, une caméra, l'audio) via la fusion de capteurs peut réduire davantage les faux positifs — voir la fusion de capteurs dans le guide de la maison connectée.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Un capteur radar capture-t-il des images ?', a: "Non — les capteurs de présence radar détectent l'occupation par réflexion d'ondes radio, pas par capture d'image. C'est l'avantage clé en matière de confidentialité par rapport à une caméra pour la détection de présence." },
          { q: 'Les capteurs radar peuvent-ils détecter une personne complètement immobile ?', a: "Oui — c'est le principal avantage par rapport aux capteurs de mouvement PIR, qui dépendent du mouvement et s'arrêtent généralement après un délai lorsque quelqu'un cesse de bouger. Le radar peut détecter des micro-mouvements comme la respiration pour enregistrer une occupation continue." },
          { q: 'Combien coûtent les capteurs de présence radar ?', a: "Une option prête à l'emploi comme l'Aqara FP2 coûte environ 80–85 $ chez les grands revendeurs américains ; un montage DIY utilisant une puce Hi-Link LD2410, LD2410C ou LD2450 avec une carte ESP32 coûte environ 15–25 $. Vérifiez les offres actuelles des revendeurs avant d'acheter, car les promotions font varier le chiffre exact." },
          { q: 'Les capteurs radar fonctionnent-ils à travers les murs ou les portes ?', a: "Dans une mesure limitée et peu fiable — des tests communautaires avec des capteurs de la classe Hi-Link LD2410 montrent qu'ils peuvent détecter du mouvement à travers du verre et du contreplaqué fin, mais sont souvent trop sensibles à travers des murs ou portes fins, ce qui cause des faux positifs plutôt qu'une détection utile. Ne concevez pas une automatisation autour d'une détection délibérée à travers les murs ; réduisez la portée et la sensibilité de détection si vous observez des déclenchements depuis une pièce adjacente." },
          { q: 'Un capteur radar est-il meilleur qu\'un capteur de mouvement PIR pour tous les usages ?', a: "Non — les capteurs PIR sont moins chers et parfaitement adéquats pour les automatisations simples déclenchées par le mouvement. Le radar vaut le coût supplémentaire spécifiquement quand vous avez besoin d'une détection précise de l'occupation immobile." },
          { q: 'Puis-je utiliser un capteur radar pour la sécurité à la place d\'une caméra ?', a: "Le radar peut détecter une présence/intrusion mais ne peut pas identifier qui ou quoi l'a déclenchée comme le ferait une caméra — pour les applications de sécurité nécessitant l'identification, une caméra (ou le radar combiné à une caméra via la fusion de capteurs) est la solution la plus complète." },
          { q: 'Un capteur radar a-t-il besoin d\'un accès internet pour fonctionner ?', a: "Cela dépend de l'intégration du produit spécifique — vérifiez s'il utilise une intégration locale (Zigbee, ESPHome) ou une application dépendante du cloud avant l'achat si la fiabilité hors ligne compte pour vous." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          "[Fusion de capteurs dans la maison connectée](/fr/smart-home/sensor-fusion-smart-home-2027) — combiner le radar avec d'autres types de capteurs",
          '[Caméras de sécurité IA locales avec Frigate](/fr/smart-home/local-ai-security-camera) — l\'alternative d\'identification au radar de présence seule',
          '[Risques pour la vie privée dans la maison connectée](/fr/smart-home/smart-home-privacy-risks) — le contexte de confidentialité plus large que la détection radar aborde',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: "Détection de présence radar : occupation d'une pièce sans caméra (2027)",
      description: "Capteurs de présence radar pour détecter l'occupation d'une pièce sans caméra : comment fonctionne la détection mmWave et où elle surpasse les capteurs de mouvement ou les caméras.",
      url: 'https://www.promptquorum.com/fr/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Capteur de présence radar' }, { '@type': 'Thing', name: 'Détection mmWave' }, { '@type': 'Thing', name: "Détection d'occupation" }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Un capteur radar capture-t-il des images ?', acceptedAnswer: { '@type': 'Answer', text: "Non — les capteurs de présence radar détectent l'occupation par réflexion d'ondes radio, pas par capture d'image." } },
        { '@type': 'Question', name: 'Les capteurs radar peuvent-ils détecter une personne complètement immobile ?', acceptedAnswer: { '@type': 'Answer', text: "Oui — le radar peut détecter des micro-mouvements comme la respiration pour enregistrer une occupation continue, contrairement aux capteurs de mouvement PIR qui s'arrêtent après un délai." } },
        { '@type': 'Question', name: 'Un capteur radar est-il meilleur qu\'un capteur de mouvement PIR pour tous les usages ?', acceptedAnswer: { '@type': 'Answer', text: "Non — les capteurs PIR sont moins chers et adéquats pour les automatisations simples déclenchées par le mouvement. Le radar vaut la peine spécifiquement pour la détection précise de l'occupation immobile." } },
        { '@type': 'Question', name: 'Puis-je utiliser un capteur radar pour la sécurité à la place d\'une caméra ?', acceptedAnswer: { '@type': 'Answer', text: "Le radar peut détecter une présence/intrusion mais ne peut pas identifier qui ou quoi l'a déclenchée comme le ferait une caméra." } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'レーダー式人感センサー：カメラなしの部屋の在室検知（2027年）',
    seoTitle: 'カメラ不要のレーダー人感センサー（2027年）',
    intro:
      'mmWaveレーダーセンサーは、画像を一切撮影することなく部屋の在室状況や呼吸のような微小な動きまで検知できるため、プレゼンスベースの自動化においてカメラよりプライバシーに配慮した代替手段となります。Aqara FP2（米国の主要小売店で約80〜85ドル）はすぐに使えるオプションであり、Hi-LinkのLD2410/LD2410C/LD2450チップ（ESP32ボードを使ったDIY ESPHomeビルドで約15〜25ドル）は一般的な低コストの選択肢です。この記事では、レーダー式人感検知の仕組み、カメラや人感センサーより優れている点、そしてHome Assistantへの組み込み方を解説します。',
    metaDescription:
      'カメラなしで部屋の在室を検知するレーダー人感センサー：mmWaveセンシングの仕組みと、スマートホームにおいて人感センサーやカメラより優れている点。',
    twitterDescription:
      'mmWaveレーダーセンサーはカメラなしで部屋の在室を検知します — PIR人感センサーより正確で、カメラよりプライバシーに配慮しています。',
    readTime: '読了時間6分',
    educationalLevel: 'Intermediate',
    audience: 'カメラを追加せずに正確な在室検知を求めるスマートホーム所有者',
    primaryTerm: 'radar 人感センサー スマートホーム',
    targetKeywords: [
      'radar 人感センサー スマートホーム',
      'mmwave 在室センサー カメラなし',
      '部屋 在室検知 カメラなし',
      'radar センサー home assistant',
      'プライバシー配慮 在室センサー',
    ],
    leadAnswerBlock:
      '**レーダー（mmWave）人感センサーは、静止している人も含めて部屋が在室状態かどうかを、画像を一切撮影せずに検知します。これにより、パッシブ赤外線人感センサーより正確で、プレゼンスベースの自動化においてカメラよりプライバシーに配慮したものになります。** Aqara FP2（すぐに使える、約80〜85ドル）とHi-LinkのLD2410/LD2410C/LD2450チップ（DIY ESPHomeビルド、約15〜25ドル）が一般的な2つの選択肢です — プロモーションで実際の価格は変動するため、購入前に現在の小売価格を確認してください。',
    quickAnswerTop: {
      ja: {
        question: 'カメラなしで部屋の在室を検知できますか？',
        answer:
          'はい — mmWaveレーダー人感センサーは、電波を使って動きや呼吸のような微小な動きを感知することで、じっと座っている場合を含め、誰かが部屋にいるかどうかを検知でき、画像は一切撮影しません。これは、静止している人を短いタイムアウト後に検知しなくなるパッシブ赤外線（PIR）人感センサーの主な弱点を解決します。Aqara FP2（米国の主要小売店で約80〜85ドル、有線、Wi-Fi + Bluetooth、ハブ不要）はすぐに使えるオプションで、HomeKitコントローラー連携を通じてHome Assistantとローカルでペアリングできます。Hi-LinkのLD2410/LD2410C/LD2450チップ（ESP32ボードを使ったDIY ESPHomeビルドで約15〜25ドル）は、より安価で手間のかかる選択肢で、ESPHomeをネイティブにサポートしています。',
        bullets: [
          'レーダーセンサーは単なる動きではなく静止時の在室も検知 — PIRの「静止すると検知しなくなる」問題を解決',
          '画像は一切撮影されない — 在室検知においてカメラよりプライバシーに配慮',
          'Aqara FP2：約80〜85ドル、すぐに使える、HomeKitコントローラー経由でHome Assistantとローカルにペアリング',
          'Hi-Link LD2410/LD2410C/LD2450：DIY ESPHomeビルドで約15〜25ドル、ESPHomeコンポーネントをネイティブサポート',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'レーダー式人感検知の仕組み', anchor: 'how-it-works' },
      { label: 'レーダー vs PIR人感センサー vs カメラ', anchor: 'radar-vs-alternatives' },
      { label: 'Home Assistant連携', anchor: 'ha-integration' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'レーダー（mmWave）人感センサーは、静止している人も含めて部屋の在室を検知しますが、画像は一切撮影しません — 人感センサーより正確で、カメラよりプライバシーに配慮しています。' },
      { type: 'plain-terms', content: '通常の人感センサーは動いたものにしか気づかないため、あなたがじっと座って読書していても部屋が空だと判断してしまうことがあります。レーダーセンサーは光の代わりに電波を使い、動きがなくても人がいることを検知できます — レーダーが停止中の車を検知できるのと似ています — しかも部屋の写真は一切撮影しません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'mmWaveレーダーセンサーは、動きが必要なPIR人感センサーとは異なり、静止している人を含めて在室を検知する',
          '画像は撮影されない — 在室データのみで、この用途ではカメラよりプライバシーに配慮している',
          'すぐに使えるオプション：Aqara FP2（約80〜85ドル、有線、ハブ不要、HomeKitコントローラー経由でローカルにペアリング）。DIYオプション：Hi-Link LD2410/LD2410C/LD2450（ESP32ボードで約15〜25ドル、ESPHomeをネイティブサポート）',
          'Home Assistantに標準的な在室/占有エンティティとして組み込まれ、人感センサーと同じようにあらゆる自動化で利用可能',
          'レーダーを他のセンサータイプと組み合わせて誤検知をさらに減らす方法はセンサーフュージョンガイドを参照',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'レーダー式人感検知の仕組み',
        content:
          '**レーダーセンサーは低出力の電波を発し、その反射を測定することで動きや呼吸のような微小な動きまで検知し、これにより静止している人をタイムアウトさせるのではなく「在室」として登録できます。**',
        items: [
          'これは、動きによる熱シグネチャの変化しか検知できず、静止している在室者と空の部屋を区別できないパッシブ赤外線（PIR）人感センサーとは根本的に異なります。',
          '光や画像撮影ではなく電波の反射で動作するため、レーダーセンサーは一部の素材を通しても動作でき、光学センサーのように直接見通せる必要がありません。',
          '一部のレーダーセンサーは、単純な在室/不在の状態に加えて距離やゾーン情報も報告するため、自動化は部屋が在室かどうかだけでなく、部屋のどこに人がいるかにも反応できます — 例えばAqara FP2は、監視対象の部屋を最大30ゾーンに分割し、最大5人を同時に追跡できます。',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'レーダー vs PIR人感センサー vs カメラ',
        content:
          '**カメラなしで正確な静止時在室検知が必要な場合はレーダーを選び、シンプルで低コストな動作トリガー自動化にはPIR人感センサーを選び、部屋が在室かどうかだけでなく何が、あるいは誰がいるかを特定する必要がある場合はカメラを選んでください。**',
        items: [
          'PIR人感センサーは安価で、廊下を通ったときに点灯する照明のような、動きの検知だけが必要な自動化には十分です — 「誰かがじっと座っている間は照明を点けたままにする」といった自動化には、回避策なしでは向いていません。',
          'カメラ（ローカルAIセキュリティカメラのガイドを参照）は特定の物や人を識別できますが、レーダーにはそれができません — 在室だけでなく識別が重要な場合はカメラを使ってください。',
          'レーダーセンサーは、「誰かがいるかどうか」だけを知る必要がある自動化において、カメラのプライバシー面での妥協を完全に回避できます — カメラが望ましくない寝室や浴室のような部屋にとって、これは大きなプライバシー上の改善です。',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant連携',
        content:
          '**レーダー人感センサーは通常、Home Assistantにバイナリの在室センサー（場合によっては追加のゾーン/距離センサー）として組み込まれ、人感センサーエンティティと同じようにあらゆる自動化で利用できます。**',
        items: [
          'Aqara FP2はWi-Fi（2.4GHz）とBluetoothで接続し、ローカルのHomeKitコントローラー連携を通じてHome Assistantとペアリングします — Aqaraハブやクラウドアカウントは不要です。Hi-Link LD2410/LD2410C/LD2450ベースのDIYビルドは、本来ローカルであるESPHomeを使ってESP32上で動作します。ローカル制御が重要な場合は、購入前に具体的な製品の連携方法を確認してください — 市場のすべてのレーダーセンサーがクラウド依存を回避しているわけではありません。',
          'エンティティは標準的な人感センサーのように振る舞うため、人感センサーを中心に構築された既存の自動化は、多くの場合、最小限の変更でレーダーセンサーに適応できます — トリガーエンティティを置き換え、自動化ロジックはそのまま維持します。',
          'センサーフュージョンによりレーダーを他のセンサータイプ（接点センサー、カメラ、音声）と組み合わせることで、誤検知をさらに減らせます — スマートホームガイドのセンサーフュージョンを参照してください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'レーダーセンサーは画像を撮影しますか？', a: 'いいえ — レーダー人感センサーは電波の反射によって在室を検知し、画像は撮影しません。これが、在室検知においてカメラに対する中核的なプライバシー上の利点です。' },
          { q: 'レーダーセンサーは完全に静止して座っている人を検知できますか？', a: 'はい — これがPIR人感センサーに対する主な利点です。PIRは動きに依存し、通常は誰かが動かなくなるとタイムアウトします。レーダーは呼吸のような微小な動きを検知して、在室が続いていることを登録できます。' },
          { q: 'レーダー人感センサーの価格はどのくらいですか？', a: 'Aqara FP2のようなすぐに使えるオプションは、米国の主要小売店で約80〜85ドルです。Hi-LinkのLD2410、LD2410C、またはLD2450チップとESP32ボードを使ったDIYビルドは約15〜25ドルです。プロモーションで実際の価格は変動するため、購入前に現在の小売価格を確認してください。' },
          { q: 'レーダーセンサーは壁やドア越しに機能しますか？', a: '限定的で不確実な範囲でのみです — Hi-Link LD2410クラスのセンサーを使ったコミュニティテストでは、ガラスや薄い合板越しの動きを拾えることが示されていますが、薄い壁やドア越しでは過敏になり、有用な検知ではなくむしろ誤検知を引き起こすことがよくあります。壁越しの意図的な検知を前提に自動化を設計しないでください。隣室からのトリガーが見られる場合は、検知範囲と感度を下げてください。' },
          { q: 'レーダーセンサーはあらゆる用途でPIR人感センサーより優れていますか？', a: 'いいえ — PIRセンサーは安価で、シンプルな動作トリガー自動化には十分です。レーダーは、正確な静止時在室検知が特に必要な場合に、追加コストに見合う価値があります。' },
          { q: 'カメラの代わりにレーダーセンサーをセキュリティ用途に使えますか？', a: 'レーダーは在室/侵入を検知できますが、カメラのように誰が、あるいは何がそれを引き起こしたのかを識別することはできません — 識別が必要なセキュリティ用途には、カメラ（またはセンサーフュージョンによるレーダーとカメラの併用）がより完全なソリューションです。' },
          { q: 'レーダーセンサーが動作するのにインターネットアクセスは必要ですか？', a: 'これは具体的な製品の連携方法によります — オフラインでの信頼性が重要な場合は、購入前にローカル連携（Zigbee、ESPHome）を使うか、クラウド依存のアプリを使うかを確認してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[スマートホームにおけるセンサーフュージョン](/ja/smart-home/sensor-fusion-smart-home-2027) — レーダーと他のセンサータイプの組み合わせ',
          '[Frigateを使ったローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera) — 在室のみのレーダーに対する識別の代替手段',
          '[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks) — レーダー式人感検知が対応するより広いプライバシー上の文脈',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'レーダー式人感センサー：カメラなしの部屋の在室検知（2027年）',
      description: 'カメラなしで部屋の在室を検知するレーダー人感センサー：mmWaveセンシングの仕組みと、人感センサーやカメラより優れている点。',
      url: 'https://www.promptquorum.com/ja/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'レーダー人感センサー' }, { '@type': 'Thing', name: 'mmWaveセンシング' }, { '@type': 'Thing', name: '在室検知' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'レーダーセンサーは画像を撮影しますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — レーダー人感センサーは電波の反射によって在室を検知し、画像は撮影しません。' } },
        { '@type': 'Question', name: 'レーダーセンサーは完全に静止して座っている人を検知できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい — レーダーは呼吸のような微小な動きを検知して在室の継続を登録できます。タイムアウトするPIR人感センサーとは異なります。' } },
        { '@type': 'Question', name: 'レーダーセンサーはあらゆる用途でPIR人感センサーより優れていますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — PIRセンサーは安価でシンプルな動作トリガー自動化には十分です。レーダーは特に正確な静止時在室検知に価値があります。' } },
        { '@type': 'Question', name: 'カメラの代わりにレーダーセンサーをセキュリティ用途に使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'レーダーは在室/侵入を検知できますが、カメラのように誰が、あるいは何がそれを引き起こしたのかを識別することはできません。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: '雷达人体存在感应：无需摄像头的房间占用检测（2027年）',
    seoTitle: '无摄像头雷达存在感应（2027年）',
    intro:
      '毫米波（mmWave）雷达传感器可以检测房间的占用情况，甚至呼吸等微小动作，而无需捕获任何图像，这使其成为基于存在感应自动化时比摄像头更注重隐私的替代方案。Aqara FP2（美国主要零售商售价约80–85美元）是一款即插即用的选择，而Hi-Link的LD2410/LD2410C/LD2450芯片（配合ESP32开发板进行DIY ESPHome构建，约15–25美元）是常见的低成本方案。本文介绍雷达存在感应的工作原理、它在哪些方面优于摄像头或运动传感器，以及如何将其接入Home Assistant。',
    metaDescription:
      '无需摄像头即可检测房间占用的雷达存在传感器：毫米波感应的工作原理，以及它在智能家居中优于运动传感器或摄像头的地方。',
    twitterDescription:
      '毫米波雷达传感器无需摄像头即可检测房间占用——比PIR运动传感器更准确，比摄像头更注重隐私。',
    readTime: '阅读时间6分钟',
    educationalLevel: 'Intermediate',
    audience: '希望在不添加摄像头的情况下实现精准存在检测的智能家居用户',
    primaryTerm: 'radar 存在传感器 智能家居',
    targetKeywords: [
      'radar 存在传感器 智能家居',
      'mmwave 占用传感器 无摄像头',
      '房间存在检测 无摄像头',
      'radar 传感器 home assistant',
      '隐私友好 占用传感器',
    ],
    leadAnswerBlock:
      '**雷达（毫米波）存在传感器可以检测房间是否有人——包括静止不动的人，而不仅仅是运动——且无需捕获任何图像，因此在基于存在感应的自动化中，它比被动红外运动传感器更准确，也比摄像头更注重隐私。** Aqara FP2（约80–85美元，即插即用）和Hi-Link的LD2410/LD2410C/LD2450芯片（约15–25美元，DIY ESPHome构建）是两种常见方案——购买前请核实当前零售价格，因为促销活动会使实际价格有所波动。',
    quickAnswerTop: {
      zh: {
        question: '我可以在不使用摄像头的情况下检测房间占用吗？',
        answer:
          '可以——毫米波雷达存在传感器通过无线电波感应运动和呼吸等微小动作，即使有人一动不动地坐着，也能检测出房间是否有人，且不捕获任何图像。这解决了被动红外（PIR）运动传感器的主要局限：在短暂超时后就无法再检测静止不动的人。Aqara FP2（美国主要零售商售价约80–85美元，有线连接，Wi-Fi + 蓝牙，无需网关）是一款即插即用的产品，可通过HomeKit Controller集成在本地与Home Assistant配对；Hi-Link的LD2410/LD2410C/LD2450芯片（配合ESP32开发板DIY ESPHome构建，约15–25美元）则是更便宜、需要更多动手操作的方案，原生支持ESPHome。',
        bullets: [
          '雷达传感器可检测静止占用，而不仅仅是运动——解决了PIR传感器"静止后无法检测"的问题',
          '不捕获任何图像——在存在检测方面比摄像头更注重隐私',
          'Aqara FP2：约80–85美元，即插即用，通过HomeKit Controller在本地与Home Assistant配对',
          'Hi-Link LD2410/LD2410C/LD2450：DIY ESPHome构建约15–25美元，原生支持ESPHome组件',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '雷达存在感应的工作原理', anchor: 'how-it-works' },
      { label: '雷达 vs PIR运动传感器 vs 摄像头', anchor: 'radar-vs-alternatives' },
      { label: 'Home Assistant集成', anchor: 'ha-integration' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '雷达（毫米波）存在传感器可以检测房间占用情况，包括静止不动的人，且无需捕获图像——比运动传感器更准确，比摄像头更注重隐私。' },
      { type: 'plain-terms', content: '普通运动传感器只能察觉到移动的物体，因此即使你静静地坐着阅读，它也可能认为房间是空的。雷达传感器使用无线电波而非光线，即使没有运动也能检测到有人在场——类似于雷达检测静止车辆的方式——而且全程不会拍摄房间的图像。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '毫米波雷达传感器可以检测包括静止不动的人在内的占用情况，而PIR运动传感器则需要运动才能触发',
          '不捕获任何图像——仅有存在数据，在此用途上比摄像头更注重隐私',
          '即插即用方案：Aqara FP2（约80–85美元，有线，无需网关，通过HomeKit Controller在本地配对）。DIY方案：Hi-Link LD2410/LD2410C/LD2450（配合ESP32开发板约15–25美元，原生支持ESPHome）',
          '可作为标准的存在/占用实体接入Home Assistant，可像运动传感器一样用于任何自动化',
          '有关将雷达与其他传感器类型结合以进一步减少误报，请参阅传感器融合指南',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '雷达存在感应的工作原理',
        content:
          '**雷达传感器发射低功率无线电波并测量其反射，以检测运动甚至呼吸等微小动作，这使其能够将静止不动的人识别为"在场"，而不是在超时后判定为无人。**',
        items: [
          '这与被动红外（PIR）运动传感器有本质区别，后者只能检测由运动引起的热特征变化，无法区分静止的在场人员与空房间。',
          '由于它通过无线电反射而非光线或图像捕获工作，雷达传感器还可以穿透某些材料工作，也不像光学传感器那样需要直接视线。',
          '除了简单的占用/未占用状态外，一些雷达传感器还能报告距离和区域信息，使自动化不仅能响应房间是否有人，还能响应房间内的具体位置——例如Aqara FP2可将监测房间划分为最多30个区域，并可同时追踪最多5人。',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: '雷达 vs PIR运动传感器 vs 摄像头',
        content:
          '**当你需要在不使用摄像头的情况下精准检测静止占用时选择雷达；当你需要简单、低成本的运动触发自动化时选择PIR运动传感器；当你需要识别在场的是什么或是谁，而不仅仅是房间是否有人时选择摄像头。**',
        items: [
          'PIR运动传感器更便宜，足以满足只需检测运动的自动化需求，比如你经过时自动亮起的走廊灯——但对于"只要有人静坐就保持灯亮"这类自动化，若不采用变通方法，PIR并不适合。',
          '摄像头（参见本地AI安防摄像头指南）可以识别具体的物体或人，而雷达无法做到——当识别比单纯的存在检测更重要时，请使用摄像头。',
          '对于只需知道"是否有人在这里"的自动化，雷达传感器完全避免了摄像头带来的隐私权衡——对于卧室或浴室这类不适合安装摄像头的房间，这是隐私方面的重大改善。',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant集成',
        content:
          '**雷达存在传感器通常作为二元占用传感器（有时还包括额外的区域/距离传感器）接入Home Assistant，可像运动传感器实体一样用于任何自动化。**',
        items: [
          'Aqara FP2通过Wi-Fi（2.4GHz）加蓝牙连接，并通过本地HomeKit Controller集成与Home Assistant配对——无需Aqara网关或云账户。基于Hi-Link LD2410/LD2410C/LD2450的DIY构建运行在ESP32上，使用天生本地化的ESPHome。如果本地控制对你很重要，购买前请确认具体产品的集成方式——并非市场上所有雷达传感器都能避免云依赖。',
          '由于该实体的行为与标准存在传感器相同，围绕运动传感器构建的现有自动化通常只需极少改动即可适配雷达传感器——替换触发实体，保留自动化逻辑不变。',
          '通过传感器融合将雷达与其他类型的传感器（接触传感器、摄像头、音频）结合，可进一步减少误报——请参阅智能家居指南中的传感器融合部分。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '雷达传感器会捕获图像吗？', a: '不会——雷达存在传感器通过无线电波反射检测占用情况，而非图像捕获。这是它相较于摄像头在存在检测方面的核心隐私优势。' },
          { q: '雷达传感器能检测完全静止不动的人吗？', a: '能——这是它相较于PIR运动传感器的主要优势，PIR依赖运动，通常在有人停止移动后会超时失效。雷达可以检测呼吸等微小动作，以确认持续占用。' },
          { q: '雷达存在传感器的价格是多少？', a: 'Aqara FP2这类即插即用产品在美国主要零售商处售价约80–85美元；使用Hi-Link LD2410、LD2410C或LD2450芯片搭配ESP32开发板的DIY构建约15–25美元。购买前请核实当前零售价格，因为促销活动会使实际价格有所波动。' },
          { q: '雷达传感器能穿透墙壁或门检测吗？', a: '只能在有限且不太可靠的程度上——社区对Hi-Link LD2410级传感器的测试显示，它们可以穿透玻璃和薄胶合板检测到运动，但穿透薄墙壁或门时往往过于敏感，导致误报而非有用的检测。不要围绕刻意的隔墙检测来设计自动化；如果发现来自相邻房间的触发，请降低检测范围和灵敏度。' },
          { q: '雷达传感器在所有用例中都比PIR运动传感器更好吗？', a: '不是——PIR传感器更便宜，对于简单的运动触发自动化来说完全够用。只有当你确实需要精准的静止占用检测时，雷达的额外成本才值得。' },
          { q: '我可以用雷达传感器代替摄像头来实现安防吗？', a: '雷达可以检测存在/入侵，但无法像摄像头那样识别触发的是谁或是什么——对于需要识别功能的安防应用，摄像头（或通过传感器融合将雷达与摄像头结合）是更完整的解决方案。' },
          { q: '雷达传感器工作需要联网吗？', a: '这取决于具体产品的集成方式——如果离线可靠性对你很重要，购买前请确认它使用的是本地集成（Zigbee、ESPHome）还是依赖云端的应用程序。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[智能家居中的传感器融合](/zh/smart-home/sensor-fusion-smart-home-2027) — 将雷达与其他类型的传感器结合',
          '[使用Frigate的本地AI安防摄像头](/zh/smart-home/local-ai-security-camera) — 纯存在检测雷达的识别替代方案',
          '[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks) — 雷达存在感应所应对的更广泛隐私背景',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '雷达人体存在感应：无需摄像头的房间占用检测（2027年）',
      description: '无需摄像头即可检测房间占用的雷达存在传感器：毫米波感应的工作原理，以及它优于运动传感器或摄像头的地方。',
      url: 'https://www.promptquorum.com/zh/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '雷达存在传感器' }, { '@type': 'Thing', name: '毫米波感应' }, { '@type': 'Thing', name: '占用检测' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '雷达传感器会捕获图像吗？', acceptedAnswer: { '@type': 'Answer', text: '不会——雷达存在传感器通过无线电波反射检测占用情况，而非图像捕获。' } },
        { '@type': 'Question', name: '雷达传感器能检测完全静止不动的人吗？', acceptedAnswer: { '@type': 'Answer', text: '能——雷达可以检测呼吸等微小动作以确认持续占用，这与会超时失效的PIR运动传感器不同。' } },
        { '@type': 'Question', name: '雷达传感器在所有用例中都比PIR运动传感器更好吗？', acceptedAnswer: { '@type': 'Answer', text: '不是——PIR传感器更便宜，足以应对简单的运动触发自动化。雷达的价值主要体现在精准的静止占用检测上。' } },
        { '@type': 'Question', name: '我可以用雷达传感器代替摄像头来实现安防吗？', acceptedAnswer: { '@type': 'Answer', text: '雷达可以检测存在/入侵，但无法像摄像头那样识别触发的是谁或是什么。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'Detección de presencia por radar: ocupación de habitaciones sin cámara (2027)',
    seoTitle: 'Detección de presencia por radar sin cámara (2027)',
    intro:
      'Los sensores de radar mmWave detectan la ocupación de una habitación e incluso micromovimientos como la respiración sin capturar ninguna imagen, lo que los convierte en una alternativa más respetuosa con la privacidad que una cámara para automatizaciones basadas en presencia. El Aqara FP2 (alrededor de 80-85 $ en los principales minoristas de EE. UU.) es una opción lista para usar, mientras que los chips LD2410/LD2410C/LD2450 de Hi-Link (alrededor de 15-25 $ como montaje DIY con ESPHome y una placa ESP32) son la vía habitual de menor coste. Este artículo explica cómo funciona la detección de presencia por radar, en qué casos supera a una cámara o a un sensor de movimiento, y cómo integrarla en Home Assistant.',
    metaDescription:
      'Sensores de presencia por radar para detectar la ocupación de una habitación sin cámara: cómo funciona la detección mmWave y en qué supera a los sensores de movimiento o a las cámaras en una casa inteligente.',
    twitterDescription:
      'Los sensores de radar mmWave detectan la ocupación de una habitación sin cámara: más precisos que los sensores de movimiento PIR y más respetuosos con la privacidad que una cámara.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de casas inteligentes que desean una detección de presencia precisa sin añadir una cámara',
    primaryTerm: 'sensor radar presencia casa inteligente',
    targetKeywords: [
      'sensor radar presencia casa inteligente',
      'sensor ocupacion mmwave sin camara',
      'deteccion presencia habitacion sin camara',
      'sensor radar home assistant',
      'sensor ocupacion respetuoso privacidad',
    ],
    leadAnswerBlock:
      '**Un sensor de presencia por radar (mmWave) detecta si una habitación está ocupada, incluyendo a una persona inmóvil y no solo el movimiento, sin capturar ninguna imagen, lo que lo hace más preciso que un sensor de movimiento infrarrojo pasivo y más respetuoso con la privacidad que una cámara para automatizaciones basadas en presencia.** El Aqara FP2 (~80-85 $, listo para usar) y los chips LD2410/LD2410C/LD2450 de Hi-Link (~15-25 $, montaje DIY con ESPHome) son las dos vías habituales: verifica los precios actuales de los minoristas antes de comprar, ya que las promociones hacen variar la cifra exacta.',
    quickAnswerTop: {
      es: {
        question: '¿Puedo detectar la ocupación de una habitación sin cámara?',
        answer:
          'Sí: los sensores de presencia por radar mmWave detectan si hay alguien en una habitación, incluso cuando está sentado sin moverse, mediante la detección de movimiento y micromovimientos (como la respiración) a través de ondas de radio, sin capturar ninguna imagen. Esto resuelve la principal limitación de los sensores de movimiento por infrarrojos pasivos (PIR), que dejan de detectar a una persona inmóvil tras un breve período de espera. El Aqara FP2 (~80-85 $ en los principales minoristas de EE. UU., con cable, Wi-Fi + Bluetooth, sin necesidad de hub) es una opción lista para usar que se empareja localmente con Home Assistant a través de la integración HomeKit Controller; los chips LD2410/LD2410C/LD2450 de Hi-Link (~15-25 $ como montaje DIY con ESPHome y una placa ESP32) son la vía más económica y práctica, con soporte nativo de ESPHome.',
        bullets: [
          'Los sensores de radar detectan la ocupación estática, no solo el movimiento: resuelven el problema del PIR de "dejar de detectar al quedarse quieto"',
          'No se captura ninguna imagen: más respetuoso con la privacidad que una cámara para la detección de presencia',
          'Aqara FP2: ~80-85 $, listo para usar, se empareja localmente con Home Assistant a través de HomeKit Controller',
          'Hi-Link LD2410/LD2410C/LD2450: ~15-25 $ como montaje DIY con ESPHome, soporte nativo de componentes ESPHome',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Cómo funciona la detección de presencia por radar', anchor: 'how-it-works' },
      { label: 'Radar vs. movimiento PIR vs. cámara', anchor: 'radar-vs-alternatives' },
      { label: 'Integración con Home Assistant', anchor: 'ha-integration' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Los sensores de presencia por radar (mmWave) detectan la ocupación de una habitación, incluida una persona inmóvil, sin capturar ninguna imagen: más precisos que los sensores de movimiento y más respetuosos con la privacidad que una cámara.' },
      { type: 'plain-terms', content: 'Un sensor de movimiento normal solo detecta lo que se mueve, por lo que puede pensar que una habitación está vacía aunque estés sentado sin moverte leyendo. Un sensor de radar utiliza ondas de radio en lugar de luz y puede detectar que hay una persona presente incluso sin movimiento, de forma similar a como un radar detecta un coche parado, todo ello sin tomar ninguna imagen de la habitación.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Los sensores de radar mmWave detectan la ocupación, incluida una persona inmóvil, a diferencia de los sensores de movimiento PIR, que necesitan movimiento para activarse',
          'No se captura ninguna imagen: solo datos de presencia, lo que resulta más respetuoso con la privacidad que una cámara para este uso',
          'Opción lista para usar: Aqara FP2 (~80-85 $, con cable, sin necesidad de hub, se empareja localmente a través de HomeKit Controller). Opción DIY: Hi-Link LD2410/LD2410C/LD2450 (~15-25 $ con una placa ESP32, soporte nativo de ESPHome)',
          'Se integra en Home Assistant como una entidad estándar de presencia/ocupación, utilizable en cualquier automatización igual que un sensor de movimiento',
          'Consulta la guía de fusión de sensores para combinar el radar con otros tipos de sensores y reducir aún más los falsos positivos',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Cómo funciona la detección de presencia por radar',
        content:
          '**Un sensor de radar emite ondas de radio de baja potencia y mide las reflexiones para detectar movimiento e incluso micromovimientos como la respiración, lo que le permite registrar a una persona inmóvil como "presente" en lugar de darla por ausente tras un tiempo de espera.**',
        items: [
          'Esto difiere fundamentalmente de un sensor de movimiento por infrarrojos pasivo (PIR), que solo detecta cambios de firma térmica provocados por el movimiento y no puede distinguir a un ocupante inmóvil de una habitación vacía.',
          'Como funciona mediante reflexión de radio en lugar de luz o captura de imagen, un sensor de radar también puede funcionar a través de algunos materiales y no necesita línea de visión directa como un sensor óptico.',
          'Algunos sensores de radar informan de la distancia y la zona además de un simple estado ocupado/desocupado, lo que permite que las automatizaciones reaccionen según dónde se encuentra alguien en la habitación, no solo si está ocupada: el Aqara FP2, por ejemplo, divide una habitación monitorizada en hasta 30 zonas y puede seguir hasta 5 personas simultáneamente.',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'Radar vs. movimiento PIR vs. cámara',
        content:
          '**Elige radar cuando necesites una detección precisa de ocupación estática sin cámara; elige sensores de movimiento PIR para automatizaciones sencillas y económicas activadas por movimiento; elige una cámara cuando necesites identificar qué o quién está presente, no solo si la habitación está ocupada.**',
        items: [
          'Los sensores de movimiento PIR son más baratos y suficientes para automatizaciones que solo necesitan detectar movimiento, como una luz de pasillo que se enciende al pasar; sin soluciones alternativas, no son adecuados para automatizaciones del tipo "mantener la luz encendida mientras alguien está sentado sin moverse".',
          'Una cámara (consulta la guía de cámaras de seguridad con IA local) puede identificar objetos o personas específicas, algo que el radar no puede hacer: usa una cámara cuando la identificación importe, no solo la presencia.',
          'Los sensores de radar evitan por completo la contrapartida de privacidad de una cámara en automatizaciones que solo necesitan saber "hay alguien aquí", lo que supone una mejora de privacidad relevante para habitaciones como dormitorios o baños donde una cámara sería indeseable.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Integración con Home Assistant',
        content:
          '**Un sensor de presencia por radar normalmente se integra en Home Assistant como un sensor de ocupación binario (y a veces sensores adicionales de zona/distancia), utilizable en cualquier automatización igual que lo sería una entidad de sensor de movimiento.**',
        items: [
          'El Aqara FP2 se conecta por Wi-Fi (2,4 GHz) además de Bluetooth, y se empareja con Home Assistant mediante la integración local de HomeKit Controller, sin necesidad de un hub Aqara ni una cuenta en la nube. Los montajes DIY basados en Hi-Link LD2410/LD2410C/LD2450 funcionan en un ESP32 con ESPHome, que es local por diseño. Comprueba el método de integración del producto concreto antes de comprarlo si el control local te importa: no todos los sensores de radar del mercado evitan una dependencia de la nube.',
          'Como la entidad se comporta como un sensor de presencia estándar, las automatizaciones existentes creadas en torno a sensores de movimiento a menudo pueden adaptarse a un sensor de radar con cambios mínimos: sustituye la entidad activadora y mantén la lógica de la automatización.',
          'Combinar el radar con otros tipos de sensores (sensores de contacto, una cámara, audio) mediante fusión de sensores puede reducir aún más los falsos positivos: consulta la fusión de sensores en la guía de la casa inteligente.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Un sensor de radar captura imágenes?', a: 'No: los sensores de presencia por radar detectan la ocupación mediante la reflexión de ondas de radio, no mediante captura de imágenes. Esta es la principal ventaja de privacidad frente a una cámara para la detección de presencia.' },
          { q: '¿Los sensores de radar pueden detectar a una persona completamente inmóvil?', a: 'Sí: esta es la principal ventaja frente a los sensores de movimiento PIR, que dependen del movimiento y suelen dejar de detectar tras un tiempo de espera cuando alguien deja de moverse. El radar puede detectar micromovimientos como la respiración para registrar la ocupación continuada.' },
          { q: '¿Cuánto cuestan los sensores de presencia por radar?', a: 'Una opción lista para usar como el Aqara FP2 cuesta entre 80-85 $ en los principales minoristas de EE. UU.; un montaje DIY con un chip Hi-Link LD2410, LD2410C o LD2450 y una placa ESP32 cuesta entre 15-25 $. Comprueba los precios actuales de los minoristas antes de comprar, ya que las promociones hacen variar la cifra exacta.' },
          { q: '¿Los sensores de radar funcionan a través de paredes o puertas?', a: 'En un grado limitado y poco fiable: las pruebas de la comunidad con sensores de la clase Hi-Link LD2410 muestran que pueden detectar movimiento a través de vidrio y contrachapado fino, pero suelen ser demasiado sensibles a través de paredes o puertas delgadas, lo que provoca falsos positivos en lugar de una detección útil. No diseñes una automatización basándote en la detección deliberada a través de paredes; reduce el alcance de detección y la sensibilidad si observas activaciones desde una habitación contigua.' },
          { q: '¿Es un sensor de radar mejor que un sensor de movimiento PIR para todos los casos de uso?', a: 'No: los sensores PIR son más baratos y perfectamente adecuados para automatizaciones sencillas activadas por movimiento. El radar merece el coste adicional específicamente cuando necesitas una detección precisa de ocupación estática.' },
          { q: '¿Puedo usar un sensor de radar para seguridad en lugar de una cámara?', a: 'El radar puede detectar presencia/intrusión, pero no puede identificar quién o qué lo activó como sí puede hacer una cámara: para aplicaciones de seguridad que requieren identificación, una cámara (o el radar junto con una cámara mediante fusión de sensores) es la solución más completa.' },
          { q: '¿Un sensor de radar necesita acceso a internet para funcionar?', a: 'Esto depende de la integración del producto concreto: comprueba si utiliza una integración local (Zigbee, ESPHome) o una aplicación dependiente de la nube antes de comprar, si la fiabilidad sin conexión te importa.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Fusión de sensores en la casa inteligente](/es/smart-home/sensor-fusion-smart-home-2027) — combinar el radar con otros tipos de sensores',
          '[Cámaras de seguridad con IA local con Frigate](/es/smart-home/local-ai-security-camera) — la alternativa de identificación al radar de solo presencia',
          '[Riesgos de privacidad en la casa inteligente](/es/smart-home/smart-home-privacy-risks) — el contexto de privacidad más amplio que aborda la detección por radar',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Detección de presencia por radar: ocupación de habitaciones sin cámara (2027)',
      description: 'Sensores de presencia por radar para detectar la ocupación de una habitación sin cámara: cómo funciona la detección mmWave y en qué supera a los sensores de movimiento o a las cámaras.',
      url: 'https://www.promptquorum.com/es/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Sensor de presencia por radar' }, { '@type': 'Thing', name: 'Detección mmWave' }, { '@type': 'Thing', name: 'Detección de ocupación' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Un sensor de radar captura imágenes?', acceptedAnswer: { '@type': 'Answer', text: 'No: los sensores de presencia por radar detectan la ocupación mediante la reflexión de ondas de radio, no mediante captura de imágenes.' } },
        { '@type': 'Question', name: '¿Los sensores de radar pueden detectar a una persona completamente inmóvil?', acceptedAnswer: { '@type': 'Answer', text: 'Sí: el radar puede detectar micromovimientos como la respiración para registrar la ocupación continuada, a diferencia de los sensores de movimiento PIR, que dejan de detectar tras un tiempo de espera.' } },
        { '@type': 'Question', name: '¿Es un sensor de radar mejor que un sensor de movimiento PIR para todos los casos de uso?', acceptedAnswer: { '@type': 'Answer', text: 'No: los sensores PIR son más baratos y adecuados para automatizaciones sencillas activadas por movimiento. El radar merece la pena específicamente para la detección precisa de ocupación estática.' } },
        { '@type': 'Question', name: '¿Puedo usar un sensor de radar para seguridad en lugar de una cámara?', acceptedAnswer: { '@type': 'Answer', text: 'El radar puede detectar presencia/intrusión, pero no puede identificar quién o qué lo activó como sí puede hacer una cámara.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'Detecção de presença por radar: ocupação de ambientes sem câmera (2027)',
    seoTitle: 'Detecção de presença por radar sem câmera (2027)',
    intro:
      'Sensores de radar mmWave detectam a ocupação de um ambiente e até micromovimentos como a respiração sem captar nenhuma imagem, tornando-os uma alternativa mais respeitosa com a privacidade do que uma câmera para automações baseadas em presença. O Aqara FP2 (cerca de US$ 80-85 nos principais varejistas dos EUA) é uma opção pronta para uso, enquanto os chips LD2410/LD2410C/LD2450 da Hi-Link (cerca de US$ 15-25 em uma montagem DIY com ESPHome e uma placa ESP32) são o caminho comum de menor custo. Este artigo explica como funciona a detecção de presença por radar, em quais situações ela supera uma câmera ou um sensor de movimento, e como integrá-la ao Home Assistant.',
    metaDescription:
      'Sensores de presença por radar para detecção de ocupação de ambientes sem câmera: como funciona a detecção mmWave e onde ela supera sensores de movimento ou câmeras em uma casa inteligente.',
    twitterDescription:
      'Sensores de radar mmWave detectam a ocupação de um ambiente sem câmera — mais precisos que sensores de movimento PIR, mais respeitosos com a privacidade que uma câmera.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casas inteligentes que desejam detecção de presença precisa sem adicionar uma câmera',
    primaryTerm: 'sensor radar presenca casa inteligente',
    targetKeywords: [
      'sensor radar presenca casa inteligente',
      'sensor ocupacao mmwave sem camera',
      'deteccao presenca ambiente sem camera',
      'sensor radar home assistant',
      'sensor ocupacao respeita privacidade',
    ],
    leadAnswerBlock:
      '**Um sensor de presença por radar (mmWave) detecta se um ambiente está ocupado — incluindo uma pessoa parada, não apenas em movimento — sem captar nenhuma imagem, tornando-o mais preciso que um sensor de movimento infravermelho passivo e mais respeitoso com a privacidade que uma câmera para automações baseadas em presença.** O Aqara FP2 (~US$ 80-85, pronto para uso) e os chips LD2410/LD2410C/LD2450 da Hi-Link (~US$ 15-25, montagem DIY com ESPHome) são os dois caminhos comuns — confira os preços atuais dos varejistas antes de comprar, já que promoções alteram o valor exato.',
    quickAnswerTop: {
      pt: {
        question: 'Posso detectar a ocupação de um ambiente sem câmera?',
        answer:
          'Sim — sensores de presença por radar mmWave detectam se há alguém em um ambiente, mesmo quando essa pessoa está sentada e parada, sensoriando movimento e micromovimentos (como a respiração) via ondas de rádio, sem captar nenhuma imagem. Isso resolve a principal limitação dos sensores de movimento por infravermelho passivo (PIR), que param de detectar uma pessoa parada após um curto período. O Aqara FP2 (~US$ 80-85 nos principais varejistas dos EUA, com fio, Wi-Fi + Bluetooth, sem necessidade de hub) é uma opção pronta para uso que se conecta localmente ao Home Assistant via integração HomeKit Controller; os chips LD2410/LD2410C/LD2450 da Hi-Link (~US$ 15-25 em uma montagem DIY com ESPHome e uma placa ESP32) são o caminho mais barato e mais prático, com suporte nativo ao ESPHome.',
        bullets: [
          'Sensores de radar detectam ocupação parada, não apenas movimento — resolve o problema do PIR de "parar de detectar quando a pessoa fica imóvel"',
          'Nenhuma imagem é captada — mais respeitoso com a privacidade que uma câmera para detecção de presença',
          'Aqara FP2: ~US$ 80-85, pronto para uso, conecta-se localmente ao Home Assistant via HomeKit Controller',
          'Hi-Link LD2410/LD2410C/LD2450: ~US$ 15-25 em montagem DIY com ESPHome, suporte nativo a componentes ESPHome',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Como funciona a detecção de presença por radar', anchor: 'how-it-works' },
      { label: 'Radar vs. movimento PIR vs. câmera', anchor: 'radar-vs-alternatives' },
      { label: 'Integração com o Home Assistant', anchor: 'ha-integration' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Sensores de presença por radar (mmWave) detectam a ocupação de um ambiente, incluindo uma pessoa parada, sem captar nenhuma imagem — mais precisos que sensores de movimento e mais respeitosos com a privacidade que uma câmera.' },
      { type: 'plain-terms', content: 'Um sensor de movimento comum só percebe o que se move, então pode achar que um ambiente está vazio mesmo enquanto você está sentado, parado, lendo. Um sensor de radar usa ondas de rádio em vez de luz, e pode detectar que uma pessoa está presente mesmo sem movimento — de forma parecida a como um radar detecta um carro parado — tudo isso sem tirar nenhuma foto do ambiente.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Sensores de radar mmWave detectam ocupação incluindo uma pessoa parada, diferentemente de sensores de movimento PIR, que precisam de movimento para acionar',
          'Nenhuma imagem é captada — apenas dados de presença, o que é mais respeitoso com a privacidade que uma câmera para esse uso',
          'Opção pronta para uso: Aqara FP2 (~US$ 80-85, com fio, sem necessidade de hub, conecta-se localmente via HomeKit Controller). Opção DIY: Hi-Link LD2410/LD2410C/LD2450 (~US$ 15-25 com uma placa ESP32, suporte nativo ao ESPHome)',
          'Integra-se ao Home Assistant como uma entidade padrão de presença/ocupação, utilizável em qualquer automação da mesma forma que um sensor de movimento',
          'Veja o guia de fusão de sensores para combinar radar com outros tipos de sensores e reduzir ainda mais os falsos positivos',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'Como funciona a detecção de presença por radar',
        content:
          '**Um sensor de radar emite ondas de rádio de baixa potência e mede as reflexões para detectar movimento e até micromovimentos como a respiração, o que permite registrar uma pessoa parada como "presente" em vez de considerá-la ausente após um período de espera.**',
        items: [
          'Isso é fundamentalmente diferente de um sensor de movimento por infravermelho passivo (PIR), que detecta apenas mudanças na assinatura térmica causadas por movimento e não consegue distinguir um ocupante parado de um ambiente vazio.',
          'Como funciona por reflexão de rádio em vez de luz ou captura de imagem, um sensor de radar também pode funcionar através de alguns materiais e não precisa de linha de visão direta como um sensor óptico.',
          'Alguns sensores de radar informam distância e informações de zona além de um simples estado ocupado/desocupado, permitindo que automações reajam a onde alguém está no ambiente, não apenas se o ambiente está ocupado — o Aqara FP2, por exemplo, divide um ambiente monitorado em até 30 zonas e pode rastrear até 5 pessoas simultaneamente.',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'Radar vs. movimento PIR vs. câmera',
        content:
          '**Escolha radar quando precisar de detecção precisa de ocupação parada sem câmera; escolha sensores de movimento PIR para automações simples e de baixo custo acionadas por movimento; escolha uma câmera quando precisar identificar o que ou quem está presente, não apenas se o ambiente está ocupado.**',
        items: [
          'Sensores de movimento PIR são mais baratos e suficientes para automações que só precisam detectar movimento, como uma luz de corredor que acende quando você passa — eles não são adequados, sem soluções alternativas, para automações do tipo "manter a luz acesa enquanto alguém está sentado e parado".',
          'Uma câmera (veja o guia de câmeras de segurança com IA local) pode identificar objetos ou pessoas específicas, algo que o radar não consegue — use uma câmera quando a identificação for importante, não apenas a presença.',
          'Sensores de radar evitam totalmente o trade-off de privacidade de uma câmera em automações que só precisam saber "há alguém aqui", o que representa uma melhoria significativa de privacidade para ambientes como quartos ou banheiros, onde uma câmera seria indesejável.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Integração com o Home Assistant',
        content:
          '**Um sensor de presença por radar normalmente se integra ao Home Assistant como um sensor de ocupação binário (e às vezes sensores adicionais de zona/distância), utilizável em qualquer automação da mesma forma que uma entidade de sensor de movimento seria.**',
        items: [
          'O Aqara FP2 se conecta via Wi-Fi (2,4 GHz) mais Bluetooth, e se conecta ao Home Assistant através da integração local HomeKit Controller — sem necessidade de hub Aqara ou conta na nuvem. Montagens DIY baseadas em Hi-Link LD2410/LD2410C/LD2450 rodam em um ESP32 com ESPHome, que é local por design. Verifique o método de integração do produto específico antes de comprar se o controle local for importante para você — nem todo sensor de radar do mercado evita uma dependência de nuvem.',
          'Como a entidade se comporta como um sensor de presença padrão, automações existentes construídas em torno de sensores de movimento muitas vezes podem ser adaptadas para um sensor de radar com mudanças mínimas — substitua a entidade de gatilho, mantenha a lógica da automação.',
          'Combinar radar com outros tipos de sensores (sensores de contato, uma câmera, áudio) via fusão de sensores pode reduzir ainda mais os falsos positivos — veja a fusão de sensores no guia de casa inteligente.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Um sensor de radar captura imagens?', a: 'Não — sensores de presença por radar detectam a ocupação por reflexão de ondas de rádio, não por captura de imagem. Essa é a principal vantagem de privacidade em relação a uma câmera para detecção de presença.' },
          { q: 'Sensores de radar conseguem detectar uma pessoa completamente parada?', a: 'Sim — essa é a principal vantagem em relação aos sensores de movimento PIR, que dependem de movimento e normalmente param após um período quando alguém para de se mover. O radar pode detectar micromovimentos como a respiração para registrar ocupação contínua.' },
          { q: 'Quanto custam os sensores de presença por radar?', a: 'Uma opção pronta para uso como o Aqara FP2 custa cerca de US$ 80-85 nos principais varejistas dos EUA; uma montagem DIY usando um chip Hi-Link LD2410, LD2410C ou LD2450 com uma placa ESP32 custa cerca de US$ 15-25. Confira os preços atuais dos varejistas antes de comprar, já que promoções alteram o valor exato.' },
          { q: 'Sensores de radar funcionam através de paredes ou portas?', a: 'Em um grau limitado e pouco confiável — testes da comunidade com sensores da classe Hi-Link LD2410 mostram que eles conseguem captar movimento através de vidro e compensado fino, mas costumam ser excessivamente sensíveis através de paredes ou portas finas, o que causa falsos positivos em vez de detecção útil. Não projete uma automação em torno de detecção proposital através de paredes; reduza o alcance de detecção e a sensibilidade se você estiver notando acionamentos vindos de um ambiente adjacente.' },
          { q: 'Um sensor de radar é melhor que um sensor de movimento PIR para todos os casos de uso?', a: 'Não — sensores PIR são mais baratos e perfeitamente adequados para automações simples acionadas por movimento. O radar vale o custo adicional especificamente quando você precisa de detecção precisa de ocupação parada.' },
          { q: 'Posso usar um sensor de radar para segurança em vez de uma câmera?', a: 'O radar pode detectar presença/intrusão, mas não consegue identificar quem ou o que acionou como uma câmera consegue — para aplicações de segurança que exigem identificação, uma câmera (ou radar mais câmera juntos via fusão de sensores) é a solução mais completa.' },
          { q: 'Um sensor de radar precisa de acesso à internet para funcionar?', a: 'Isso depende da integração do produto específico — verifique se ele usa uma integração local (Zigbee, ESPHome) ou um aplicativo dependente de nuvem antes de comprar, se a confiabilidade offline for importante para você.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Fusão de sensores na casa inteligente](/pt/smart-home/sensor-fusion-smart-home-2027) — combinando radar com outros tipos de sensores',
          '[Câmeras de segurança com IA local com Frigate](/pt/smart-home/local-ai-security-camera) — a alternativa de identificação ao radar somente de presença',
          '[Riscos de privacidade na casa inteligente](/pt/smart-home/smart-home-privacy-risks) — o contexto de privacidade mais amplo que a detecção por radar aborda',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Detecção de presença por radar: ocupação de ambientes sem câmera (2027)',
      description: 'Sensores de presença por radar para detecção de ocupação de ambientes sem câmera: como funciona a detecção mmWave e onde ela supera sensores de movimento ou câmeras.',
      url: 'https://www.promptquorum.com/pt/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Sensor de presença por radar' }, { '@type': 'Thing', name: 'Detecção mmWave' }, { '@type': 'Thing', name: 'Detecção de ocupação' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Um sensor de radar captura imagens?', acceptedAnswer: { '@type': 'Answer', text: 'Não — sensores de presença por radar detectam a ocupação por reflexão de ondas de rádio, não por captura de imagem.' } },
        { '@type': 'Question', name: 'Sensores de radar conseguem detectar uma pessoa completamente parada?', acceptedAnswer: { '@type': 'Answer', text: 'Sim — o radar pode detectar micromovimentos como a respiração para registrar ocupação contínua, diferentemente dos sensores de movimento PIR, que param após um período.' } },
        { '@type': 'Question', name: 'Um sensor de radar é melhor que um sensor de movimento PIR para todos os casos de uso?', acceptedAnswer: { '@type': 'Answer', text: 'Não — sensores PIR são mais baratos e adequados para automações simples acionadas por movimento. O radar vale a pena especificamente para detecção precisa de ocupação parada.' } },
        { '@type': 'Question', name: 'Posso usar um sensor de radar para segurança em vez de uma câmera?', acceptedAnswer: { '@type': 'Answer', text: 'O radar pode detectar presença/intrusão, mas não consegue identificar quem ou o que acionou como uma câmera consegue.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: 'استشعار الحضور بالرادار: اكتشاف إشغال الغرفة دون كاميرا (2027)',
    seoTitle: 'استشعار الحضور بالرادار دون كاميرا (2027)',
    intro:
      'تكتشف مستشعرات الرادار بموجات المليمتر (mmWave) إشغال الغرفة، بل وحتى الحركات الدقيقة مثل التنفس، دون التقاط أي صورة، مما يجعلها بديلاً أكثر مراعاة للخصوصية من الكاميرا في أتمتة قائمة على الحضور. يُعد Aqara FP2 (بسعر يتراوح بين 80 و85 دولارًا تقريبًا لدى كبرى المتاجر الأمريكية) خيارًا جاهزًا للاستخدام، بينما تُعد شرائح Hi-Link من طراز LD2410/LD2410C/LD2450 (بسعر يتراوح بين 15 و25 دولارًا تقريبًا كمشروع تركيب ذاتي باستخدام ESPHome مع لوحة ESP32) الطريق الشائع الأقل تكلفة. يتناول هذا المقال كيفية عمل استشعار الحضور بالرادار، والحالات التي يتفوق فيها على الكاميرا أو مستشعر الحركة، وكيفية ربطه بـ Home Assistant.',
    metaDescription:
      'مستشعرات حضور بالرادار لاكتشاف إشغال الغرفة دون كاميرا: كيف يعمل الاستشعار بموجات المليمتر (mmWave) وأين يتفوق على مستشعرات الحركة أو الكاميرات في المنزل الذكي.',
    twitterDescription:
      'تكتشف مستشعرات الرادار بموجات المليمتر إشغال الغرفة دون كاميرا — أدق من مستشعرات الحركة PIR، وأكثر مراعاة للخصوصية من الكاميرا.',
    readTime: 'وقت القراءة 6 دقائق',
    educationalLevel: 'Intermediate',
    audience: 'مالكو المنازل الذكية الراغبون في اكتشاف حضور دقيق دون إضافة كاميرا',
    primaryTerm: 'مستشعر حضور رادار منزل ذكي',
    targetKeywords: [
      'مستشعر حضور رادار منزل ذكي',
      'مستشعر إشغال mmwave دون كاميرا',
      'اكتشاف حضور الغرفة دون كاميرا',
      'مستشعر رادار home assistant',
      'مستشعر إشغال يراعي الخصوصية',
    ],
    leadAnswerBlock:
      '**يكتشف مستشعر الحضور بالرادار (mmWave) ما إذا كانت الغرفة مشغولة — بما في ذلك وجود شخص ثابت لا يتحرك، وليس مجرد الحركة — دون التقاط أي صورة، مما يجعله أدق من مستشعر الحركة بالأشعة تحت الحمراء السلبي، وأكثر مراعاة للخصوصية من الكاميرا في أتمتة قائمة على الحضور.** يُعد Aqara FP2 (~80-85 دولارًا، جاهز للاستخدام) وشرائح Hi-Link من طراز LD2410/LD2410C/LD2450 (~15-25 دولارًا، مشروع تركيب ذاتي باستخدام ESPHome) الطريقين الشائعين — تحقق من أسعار المتاجر الحالية قبل الشراء، إذ تتسبب العروض الترويجية في تغيير الرقم الدقيق.',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني اكتشاف إشغال الغرفة دون كاميرا؟',
        answer:
          'نعم — تكتشف مستشعرات الحضور بالرادار mmWave ما إذا كان هناك شخص في الغرفة، حتى عندما يكون جالسًا بلا حراك، من خلال استشعار الحركة والحركات الدقيقة (مثل التنفس) عبر موجات الراديو، دون التقاط أي صورة. يحل هذا القيد الرئيسي لمستشعرات الحركة بالأشعة تحت الحمراء السلبية (PIR)، التي تتوقف عن اكتشاف الشخص الثابت بعد مهلة قصيرة. يُعد Aqara FP2 (~80-85 دولارًا لدى كبرى المتاجر الأمريكية، سلكي، واي فاي + بلوتوث، دون الحاجة إلى محور) خيارًا جاهزًا للاستخدام يقترن محليًا بـ Home Assistant عبر تكامل HomeKit Controller؛ أما شرائح Hi-Link من طراز LD2410/LD2410C/LD2450 (~15-25 دولارًا كمشروع تركيب ذاتي باستخدام ESPHome مع لوحة ESP32) فهي الطريق الأرخص والأكثر عملية يدويًا، مع دعم أصلي لـ ESPHome.',
        bullets: [
          'تكتشف مستشعرات الرادار الإشغال الثابت، وليس مجرد الحركة — تحل مشكلة PIR المتمثلة في "التوقف عن الاكتشاف عند الثبات"',
          'لا تُلتقط أي صورة — أكثر مراعاة للخصوصية من الكاميرا في اكتشاف الحضور',
          'Aqara FP2: ~80-85 دولارًا، جاهز للاستخدام، يقترن محليًا بـ Home Assistant عبر HomeKit Controller',
          'Hi-Link LD2410/LD2410C/LD2450: ~15-25 دولارًا كمشروع تركيب ذاتي باستخدام ESPHome، مع دعم أصلي لمكونات ESPHome',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'كيف يعمل استشعار الحضور بالرادار', anchor: 'how-it-works' },
      { label: 'الرادار مقابل حركة PIR مقابل الكاميرا', anchor: 'radar-vs-alternatives' },
      { label: 'التكامل مع Home Assistant', anchor: 'ha-integration' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تكتشف مستشعرات الحضور بالرادار (mmWave) إشغال الغرفة، بما في ذلك وجود شخص ثابت، دون التقاط أي صورة — أدق من مستشعرات الحركة وأكثر مراعاة للخصوصية من الكاميرا.' },
      { type: 'plain-terms', content: 'لا يلاحظ مستشعر الحركة العادي سوى ما يتحرك، لذا قد يعتقد أن الغرفة فارغة حتى وأنت جالس بلا حراك تقرأ. يستخدم مستشعر الرادار موجات الراديو بدلًا من الضوء، ويمكنه اكتشاف وجود شخص حتى دون حركة — على غرار كيفية اكتشاف الرادار لسيارة متوقفة — كل ذلك دون التقاط أي صورة للغرفة.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'تكتشف مستشعرات الرادار mmWave الإشغال بما في ذلك وجود شخص ثابت، على عكس مستشعرات الحركة PIR التي تحتاج إلى حركة لتُفعَّل',
          'لا تُلتقط أي صورة — بيانات الحضور فقط، وهذا أكثر مراعاة للخصوصية من الكاميرا لهذا الاستخدام',
          'خيار جاهز للاستخدام: Aqara FP2 (~80-85 دولارًا، سلكي، دون الحاجة إلى محور، يقترن محليًا عبر HomeKit Controller). خيار تركيب ذاتي: Hi-Link LD2410/LD2410C/LD2450 (~15-25 دولارًا مع لوحة ESP32، مع دعم أصلي لـ ESPHome)',
          'يندمج في Home Assistant ككيان حضور/إشغال قياسي، يمكن استخدامه في أي أتمتة بنفس طريقة مستشعر الحركة',
          'راجع دليل دمج المستشعرات لمعرفة كيفية الجمع بين الرادار وأنواع مستشعرات أخرى لتقليل الإيجابيات الكاذبة أكثر',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: 'كيف يعمل استشعار الحضور بالرادار',
        content:
          '**يُصدر مستشعر الرادار موجات راديو منخفضة الطاقة ويقيس انعكاساتها لاكتشاف الحركة وحتى الحركات الدقيقة مثل التنفس، وهذا ما يتيح له تسجيل الشخص الثابت كـ"حاضر" بدلًا من اعتباره غير موجود بعد مهلة زمنية.**',
        items: [
          'يختلف هذا اختلافًا جوهريًا عن مستشعر الحركة بالأشعة تحت الحمراء السلبي (PIR)، الذي يكتشف فقط التغيرات في البصمة الحرارية الناتجة عن الحركة، ولا يستطيع التمييز بين شخص ثابت موجود وغرفة فارغة.',
          'نظرًا لأنه يعمل عبر انعكاس الراديو بدلًا من الضوء أو التقاط الصور، يمكن لمستشعر الرادار أيضًا العمل عبر بعض المواد ولا يحتاج إلى خط رؤية مباشر كما هو الحال مع المستشعر البصري.',
          'تُبلغ بعض مستشعرات الرادار عن معلومات المسافة والمنطقة بالإضافة إلى حالة بسيطة مشغول/غير مشغول، مما يتيح للأتمتة الاستجابة لمكان وجود الشخص داخل الغرفة، وليس فقط ما إذا كانت الغرفة مشغولة — فمثلًا يقسّم Aqara FP2 الغرفة المراقَبة إلى ما يصل إلى 30 منطقة، ويمكنه تتبع ما يصل إلى 5 أشخاص في آنٍ واحد.',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: 'الرادار مقابل حركة PIR مقابل الكاميرا',
        content:
          '**اختر الرادار عندما تحتاج إلى اكتشاف دقيق للإشغال الثابت دون كاميرا؛ واختر مستشعرات الحركة PIR للأتمتة البسيطة منخفضة التكلفة القائمة على تفعيل الحركة؛ واختر الكاميرا عندما تحتاج إلى تحديد ما أو من الموجود، وليس فقط ما إذا كانت الغرفة مشغولة.**',
        items: [
          'مستشعرات الحركة PIR أرخص وكافية للأتمتة التي تحتاج فقط إلى اكتشاف الحركة، مثل إضاءة الممر التي تُضاء عند مرورك — وهي غير مناسبة، دون حلول بديلة، للأتمتة من نوع "إبقاء الإضاءة مضاءة طالما كان شخص ما جالسًا بلا حراك".',
          'يمكن للكاميرا (راجع دليل كاميرات الأمان بالذكاء الاصطناعي المحلي) تحديد أشياء أو أشخاص معينين، وهو ما لا يستطيعه الرادار — استخدم الكاميرا عندما يكون التحديد مهمًا، وليس مجرد الحضور.',
          'تتجنب مستشعرات الرادار تمامًا مقايضة الخصوصية الخاصة بالكاميرا في الأتمتة التي تحتاج فقط إلى معرفة "هل يوجد أحد هنا" — وهو تحسّن مهم في الخصوصية لغرف مثل غرف النوم أو الحمامات حيث تكون الكاميرا غير مرغوب فيها.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'التكامل مع Home Assistant',
        content:
          '**عادةً ما يندمج مستشعر الحضور بالرادار في Home Assistant ككيان استشعار إشغال ثنائي (وأحيانًا مستشعرات منطقة/مسافة إضافية)، يمكن استخدامه في أي أتمتة بنفس طريقة كيان مستشعر الحركة.**',
        items: [
          'يتصل Aqara FP2 عبر واي فاي (2.4 جيجاهرتز) بالإضافة إلى بلوتوث، ويقترن بـ Home Assistant من خلال تكامل HomeKit Controller المحلي — دون الحاجة إلى محور Aqara أو حساب سحابي. تعمل مشاريع التركيب الذاتي المعتمدة على Hi-Link LD2410/LD2410C/LD2450 على لوحة ESP32 باستخدام ESPHome، وهو محلي بطبيعته. تحقق من طريقة تكامل المنتج المحدد قبل الشراء إذا كان التحكم المحلي مهمًا بالنسبة لك — فليست كل مستشعرات الرادار في السوق تتجنب الاعتماد على السحابة.',
          'نظرًا لأن الكيان يتصرف مثل مستشعر حضور قياسي، يمكن غالبًا تكييف الأتمتة الحالية المبنية حول مستشعرات الحركة لتعمل مع مستشعر الرادار بتغييرات طفيفة — استبدل كيان التفعيل، واحتفظ بمنطق الأتمتة.',
          'يمكن أن يؤدي الجمع بين الرادار وأنواع مستشعرات أخرى (مستشعرات التلامس، كاميرا، الصوت) عبر دمج المستشعرات إلى تقليل الإيجابيات الكاذبة أكثر — راجع دمج المستشعرات في دليل المنزل الذكي.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يلتقط مستشعر الرادار أي صور؟', a: 'لا — تكتشف مستشعرات الحضور بالرادار الإشغال عبر انعكاس موجات الراديو، وليس عبر التقاط الصور. هذه هي الميزة الأساسية للخصوصية مقارنة بالكاميرا في اكتشاف الحضور.' },
          { q: 'هل يمكن لمستشعرات الرادار اكتشاف شخص جالس بلا حراك تمامًا؟', a: 'نعم — هذه هي الميزة الرئيسية مقارنة بمستشعرات الحركة PIR، التي تعتمد على الحركة وعادةً ما تنتهي مهلتها عندما يتوقف شخص ما عن الحركة. يمكن للرادار اكتشاف الحركات الدقيقة مثل التنفس لتسجيل استمرار الإشغال.' },
          { q: 'كم تكلف مستشعرات الحضور بالرادار؟', a: 'يبلغ سعر الخيار الجاهز للاستخدام مثل Aqara FP2 حوالي 80-85 دولارًا لدى كبرى المتاجر الأمريكية؛ ويبلغ سعر مشروع التركيب الذاتي باستخدام شريحة Hi-Link من طراز LD2410 أو LD2410C أو LD2450 مع لوحة ESP32 حوالي 15-25 دولارًا. تحقق من أسعار المتاجر الحالية قبل الشراء، إذ تتسبب العروض الترويجية في تغيير الرقم الدقيق.' },
          { q: 'هل تعمل مستشعرات الرادار عبر الجدران أو الأبواب؟', a: 'بدرجة محدودة وغير موثوقة — تُظهر اختبارات المجتمع باستخدام مستشعرات من فئة Hi-Link LD2410 أنها قادرة على رصد الحركة عبر الزجاج والخشب الرقائقي الرقيق، لكنها غالبًا ما تكون شديدة الحساسية عبر الجدران أو الأبواب الرقيقة بطرق تتسبب في إيجابيات كاذبة بدلًا من اكتشاف مفيد. لا تصمم أتمتة تعتمد على الاكتشاف المتعمد عبر الجدران؛ قلل نطاق الاكتشاف والحساسية إذا كنت تلاحظ تفعيلات من غرفة مجاورة.' },
          { q: 'هل مستشعر الرادار أفضل من مستشعر الحركة PIR في جميع حالات الاستخدام؟', a: 'لا — مستشعرات PIR أرخص وكافية تمامًا للأتمتة البسيطة القائمة على تفعيل الحركة. يستحق الرادار التكلفة الإضافية تحديدًا عندما تحتاج إلى اكتشاف دقيق للإشغال الثابت.' },
          { q: 'هل يمكنني استخدام مستشعر رادار للأمان بدلًا من الكاميرا؟', a: 'يمكن للرادار اكتشاف الحضور/التسلل لكنه لا يستطيع تحديد من أو ما الذي فعّله كما تستطيع الكاميرا — بالنسبة لتطبيقات الأمان التي تتطلب التحديد، تُعد الكاميرا (أو الرادار مع الكاميرا معًا عبر دمج المستشعرات) الحل الأكثر اكتمالًا.' },
          { q: 'هل يحتاج مستشعر الرادار إلى الوصول إلى الإنترنت للعمل؟', a: 'يعتمد ذلك على تكامل المنتج المحدد — تحقق مما إذا كان يستخدم تكاملًا محليًا (Zigbee، ESPHome) مقابل تطبيق يعتمد على السحابة قبل الشراء إذا كانت الموثوقية دون اتصال بالإنترنت مهمة بالنسبة لك.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دمج المستشعرات في المنزل الذكي](/ar/smart-home/sensor-fusion-smart-home-2027) — الجمع بين الرادار وأنواع مستشعرات أخرى',
          '[كاميرات الأمان بالذكاء الاصطناعي المحلي باستخدام Frigate](/ar/smart-home/local-ai-security-camera) — بديل التحديد لرادار الحضور فقط',
          '[مخاطر الخصوصية في المنزل الذكي](/ar/smart-home/smart-home-privacy-risks) — السياق الأوسع للخصوصية الذي يعالجه استشعار الرادار',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'استشعار الحضور بالرادار: اكتشاف إشغال الغرفة دون كاميرا (2027)',
      description: 'مستشعرات حضور بالرادار لاكتشاف إشغال الغرفة دون كاميرا: كيف يعمل الاستشعار بموجات المليمتر وأين يتفوق على مستشعرات الحركة أو الكاميرات.',
      url: 'https://www.promptquorum.com/ar/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'مستشعر حضور بالرادار' }, { '@type': 'Thing', name: 'الاستشعار بموجات المليمتر' }, { '@type': 'Thing', name: 'اكتشاف الإشغال' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يلتقط مستشعر الرادار أي صور؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — تكتشف مستشعرات الحضور بالرادار الإشغال عبر انعكاس موجات الراديو، وليس عبر التقاط الصور.' } },
        { '@type': 'Question', name: 'هل يمكن لمستشعرات الرادار اكتشاف شخص جالس بلا حراك تمامًا؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم — يمكن للرادار اكتشاف الحركات الدقيقة مثل التنفس لتسجيل استمرار الإشغال، على عكس مستشعرات الحركة PIR التي تنتهي مهلتها.' } },
        { '@type': 'Question', name: 'هل مستشعر الرادار أفضل من مستشعر الحركة PIR في جميع حالات الاستخدام؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — مستشعرات PIR أرخص وكافية للأتمتة البسيطة القائمة على تفعيل الحركة. يستحق الرادار التكلفة تحديدًا لاكتشاف دقيق للإشغال الثابت.' } },
        { '@type': 'Question', name: 'هل يمكنني استخدام مستشعر رادار للأمان بدلًا من الكاميرا؟', acceptedAnswer: { '@type': 'Answer', text: 'يمكن للرادار اكتشاف الحضور/التسلل لكنه لا يستطيع تحديد من أو ما الذي فعّله كما تستطيع الكاميرا.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: 'Advanced Local AI',
    title: '레이더 존재 감지: 카메라 없이 방 재실 여부 파악하기 (2027년)',
    seoTitle: '카메라 없는 레이더 존재 감지 (2027년)',
    intro:
      'mmWave 레이더 센서는 이미지를 전혀 촬영하지 않고도 방의 재실 여부는 물론 호흡과 같은 미세한 움직임까지 감지할 수 있어, 존재 감지 기반 자동화에서 카메라보다 프라이버시 친화적인 대안이 됩니다. Aqara FP2(미국 주요 소매업체 기준 약 80~85달러)는 바로 사용 가능한 옵션이며, Hi-Link의 LD2410/LD2410C/LD2450 칩(ESP32 보드를 사용한 DIY ESPHome 빌드로 약 15~25달러)은 일반적인 저비용 대안입니다. 이 글에서는 레이더 존재 감지의 작동 방식, 카메라나 동작 센서보다 뛰어난 부분, 그리고 Home Assistant에 연동하는 방법을 다룹니다.',
    metaDescription:
      '카메라 없이 방 재실 여부를 감지하는 레이더 존재 센서: mmWave 감지 방식과 스마트홈에서 동작 센서나 카메라보다 뛰어난 부분.',
    twitterDescription:
      'mmWave 레이더 센서는 카메라 없이 방의 재실 여부를 감지합니다 — PIR 동작 센서보다 정확하고, 카메라보다 프라이버시 친화적입니다.',
    readTime: '읽는 데 6분',
    educationalLevel: 'Intermediate',
    audience: '카메라를 추가하지 않고 정확한 존재 감지를 원하는 스마트홈 소유자',
    primaryTerm: 'radar 존재 센서 스마트홈',
    targetKeywords: [
      'radar 존재 센서 스마트홈',
      'mmwave 재실 센서 카메라 없이',
      '방 존재 감지 카메라 없이',
      'radar 센서 home assistant',
      '프라이버시 친화적 재실 센서',
    ],
    leadAnswerBlock:
      '**레이더(mmWave) 존재 센서는 가만히 앉아 있는 사람을 포함해 방이 재실 상태인지를 이미지를 전혀 촬영하지 않고 감지할 수 있어, 수동 적외선 동작 센서보다 정확하고 존재 감지 기반 자동화에서 카메라보다 프라이버시 친화적입니다.** Aqara FP2(~80~85달러, 바로 사용 가능)와 Hi-Link의 LD2410/LD2410C/LD2450 칩(~15~25달러, DIY ESPHome 빌드)이 두 가지 일반적인 방법입니다 — 프로모션에 따라 정확한 가격이 달라지므로 구매 전 현재 소매 가격을 확인하세요.',
    quickAnswerTop: {
      ko: {
        question: '카메라 없이 방의 재실 여부를 감지할 수 있나요?',
        answer:
          '네 — mmWave 레이더 존재 센서는 전파를 통해 동작과 호흡 같은 미세한 움직임을 감지함으로써, 사람이 가만히 앉아 있을 때도 방에 사람이 있는지 감지할 수 있으며 이미지는 전혀 촬영하지 않습니다. 이는 짧은 시간이 지나면 가만히 있는 사람을 더 이상 감지하지 못하는 수동 적외선(PIR) 동작 센서의 주요 한계를 해결합니다. Aqara FP2(미국 주요 소매업체 기준 약 80~85달러, 유선, Wi-Fi + 블루투스, 허브 불필요)는 HomeKit Controller 연동을 통해 Home Assistant와 로컬로 페어링되는 바로 사용 가능한 옵션이며, Hi-Link의 LD2410/LD2410C/LD2450 칩(ESP32 보드를 사용한 DIY ESPHome 빌드로 약 15~25달러)은 ESPHome을 기본 지원하는 더 저렴하고 손이 많이 가는 대안입니다.',
        bullets: [
          '레이더 센서는 단순 동작이 아니라 정지 상태의 재실도 감지 — PIR의 "정지하면 감지 중단" 문제를 해결',
          '이미지가 전혀 촬영되지 않음 — 존재 감지에서 카메라보다 프라이버시 친화적',
          'Aqara FP2: ~80~85달러, 바로 사용 가능, HomeKit Controller를 통해 Home Assistant와 로컬 페어링',
          'Hi-Link LD2410/LD2410C/LD2450: DIY ESPHome 빌드로 ~15~25달러, ESPHome 구성 요소 기본 지원',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '레이더 존재 감지 작동 방식', anchor: 'how-it-works' },
      { label: '레이더 vs PIR 동작 센서 vs 카메라', anchor: 'radar-vs-alternatives' },
      { label: 'Home Assistant 연동', anchor: 'ha-integration' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '레이더(mmWave) 존재 센서는 가만히 앉아 있는 사람을 포함해 방의 재실 여부를 이미지 촬영 없이 감지합니다 — 동작 센서보다 정확하고 카메라보다 프라이버시 친화적입니다.' },
      { type: 'plain-terms', content: '일반 동작 센서는 움직이는 것만 감지하기 때문에, 당신이 가만히 앉아 책을 읽고 있어도 방이 비어 있다고 판단할 수 있습니다. 레이더 센서는 빛 대신 전파를 사용하며, 움직임이 없어도 사람이 있다는 것을 감지할 수 있습니다 — 레이더가 정지한 자동차를 감지하는 것과 비슷한 원리입니다 — 그리고 이 모든 과정에서 방의 사진을 전혀 찍지 않습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'mmWave 레이더 센서는 동작이 있어야 작동하는 PIR 동작 센서와 달리, 가만히 있는 사람을 포함한 재실을 감지함',
          '이미지가 전혀 촬영되지 않음 — 재실 데이터만 사용하며, 이 용도에서는 카메라보다 프라이버시 친화적',
          '바로 사용 가능한 옵션: Aqara FP2(~80~85달러, 유선, 허브 불필요, HomeKit Controller를 통해 로컬 페어링). DIY 옵션: Hi-Link LD2410/LD2410C/LD2450(ESP32 보드 포함 ~15~25달러, ESPHome 기본 지원)',
          'Home Assistant에 표준 재실/존재 엔티티로 연동되며, 동작 센서와 동일한 방식으로 모든 자동화에 사용 가능',
          '레이더를 다른 센서 유형과 결합해 오탐을 더 줄이는 방법은 센서 퓨전 가이드를 참고',
        ],
      },
      howItWorks: {
        id: 'how-it-works',
        title: '레이더 존재 감지 작동 방식',
        content:
          '**레이더 센서는 저출력 전파를 방출하고 반사파를 측정해 동작과 호흡 같은 미세한 움직임까지 감지하며, 이를 통해 가만히 있는 사람을 시간 초과로 처리하는 대신 "재실 중"으로 등록할 수 있습니다.**',
        items: [
          '이는 동작으로 인한 열 신호 변화만 감지할 수 있고 가만히 있는 재실자와 빈 방을 구분할 수 없는 수동 적외선(PIR) 동작 센서와는 근본적으로 다릅니다.',
          '빛이나 이미지 촬영이 아닌 전파 반사를 통해 작동하기 때문에, 레이더 센서는 일부 재질을 통과해서도 작동할 수 있으며 광학 센서처럼 직접적인 시야가 필요하지 않습니다.',
          '일부 레이더 센서는 단순한 재실/공실 상태 외에도 거리와 구역 정보를 보고하여, 자동화가 방이 재실 중인지 여부뿐 아니라 사람이 방 안 어디에 있는지에도 반응할 수 있게 합니다 — 예를 들어 Aqara FP2는 감시 대상 방을 최대 30개 구역으로 나누고 최대 5명을 동시에 추적할 수 있습니다.',
        ],
      },
      radarVsAlternatives: {
        id: 'radar-vs-alternatives',
        title: '레이더 vs PIR 동작 센서 vs 카메라',
        content:
          '**카메라 없이 정확한 정지 재실 감지가 필요할 때는 레이더를 선택하고, 간단하고 저렴한 동작 트리거 자동화에는 PIR 동작 센서를 선택하며, 방이 재실 중인지 여부뿐 아니라 무엇 또는 누가 있는지 식별해야 할 때는 카메라를 선택하세요.**',
        items: [
          'PIR 동작 센서는 더 저렴하며, 지나갈 때 켜지는 복도 조명처럼 동작 감지만 필요한 자동화에는 충분합니다 — 하지만 우회 방법 없이는 "누군가 가만히 앉아 있는 동안 조명을 켜 둔다" 같은 자동화에는 적합하지 않습니다.',
          '카메라(로컬 AI 보안 카메라 가이드 참고)는 레이더가 할 수 없는 특정 사물이나 사람 식별이 가능합니다 — 단순한 존재 여부가 아니라 식별이 중요할 때는 카메라를 사용하세요.',
          '레이더 센서는 "여기에 누군가 있는지"만 알면 되는 자동화에서 카메라의 프라이버시 절충을 완전히 피할 수 있으며, 이는 카메라가 바람직하지 않은 침실이나 욕실 같은 공간에서 의미 있는 프라이버시 개선입니다.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant 연동',
        content:
          '**레이더 존재 센서는 일반적으로 Home Assistant에 바이너리 재실 센서(때로는 추가 구역/거리 센서 포함)로 연동되며, 동작 센서 엔티티와 동일한 방식으로 모든 자동화에 사용할 수 있습니다.**',
        items: [
          'Aqara FP2는 Wi-Fi(2.4GHz)와 블루투스로 연결되며, 로컬 HomeKit Controller 연동을 통해 Home Assistant와 페어링됩니다 — Aqara 허브나 클라우드 계정이 필요하지 않습니다. Hi-Link LD2410/LD2410C/LD2450 기반 DIY 빌드는 본질적으로 로컬인 ESPHome을 사용해 ESP32에서 구동됩니다. 로컬 제어가 중요하다면 구매 전 해당 제품의 구체적인 연동 방식을 확인하세요 — 시장의 모든 레이더 센서가 클라우드 의존성을 피하는 것은 아닙니다.',
          '이 엔티티는 표준 존재 센서처럼 동작하므로, 동작 센서를 중심으로 구축된 기존 자동화는 대개 최소한의 변경만으로 레이더 센서에 맞게 조정할 수 있습니다 — 트리거 엔티티만 교체하고 자동화 로직은 그대로 유지하세요.',
          '센서 퓨전을 통해 레이더를 다른 유형의 센서(접촉 센서, 카메라, 오디오)와 결합하면 오탐을 더 줄일 수 있습니다 — 스마트홈 가이드의 센서 퓨전 부분을 참고하세요.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '레이더 센서가 이미지를 촬영하나요?', a: '아니요 — 레이더 존재 센서는 전파 반사를 통해 재실 여부를 감지하며, 이미지를 촬영하지 않습니다. 이것이 존재 감지에서 카메라 대비 핵심적인 프라이버시 장점입니다.' },
          { q: '레이더 센서가 완전히 가만히 앉아 있는 사람을 감지할 수 있나요?', a: '네 — 이는 동작에 의존하며 사람이 움직임을 멈추면 보통 시간 초과로 감지를 중단하는 PIR 동작 센서 대비 주요 장점입니다. 레이더는 호흡 같은 미세한 움직임을 감지해 지속적인 재실을 등록할 수 있습니다.' },
          { q: '레이더 존재 센서의 가격은 얼마인가요?', a: 'Aqara FP2 같은 바로 사용 가능한 옵션은 미국 주요 소매업체 기준 약 80~85달러입니다. Hi-Link LD2410, LD2410C, LD2450 칩과 ESP32 보드를 사용한 DIY 빌드는 약 15~25달러입니다. 프로모션에 따라 정확한 가격이 달라지므로 구매 전 현재 소매 가격을 확인하세요.' },
          { q: '레이더 센서가 벽이나 문을 통과해서도 작동하나요?', a: '제한적이고 신뢰할 수 없는 수준입니다 — Hi-Link LD2410급 센서를 사용한 커뮤니티 테스트에 따르면 유리와 얇은 합판을 통해 동작을 감지할 수 있지만, 얇은 벽이나 문을 통해서는 지나치게 민감하게 반응해 유용한 감지가 아닌 오탐을 일으키는 경우가 많습니다. 의도적인 벽 통과 감지를 전제로 자동화를 설계하지 마세요. 인접한 방에서 오는 트리거가 감지된다면 감지 범위와 민감도를 낮추세요.' },
          { q: '레이더 센서가 모든 용도에서 PIR 동작 센서보다 나은가요?', a: '아니요 — PIR 센서는 더 저렴하며 간단한 동작 트리거 자동화에는 충분히 적합합니다. 레이더는 정확한 정지 재실 감지가 필요한 경우에 한해 추가 비용을 지불할 가치가 있습니다.' },
          { q: '카메라 대신 레이더 센서를 보안용으로 사용할 수 있나요?', a: '레이더는 존재/침입을 감지할 수 있지만, 카메라처럼 누가 또는 무엇이 이를 유발했는지 식별할 수는 없습니다 — 식별이 필요한 보안 용도에는 카메라(또는 센서 퓨전을 통한 레이더와 카메라의 조합)가 더 완전한 해결책입니다.' },
          { q: '레이더 센서가 작동하려면 인터넷 접속이 필요한가요?', a: '이는 해당 제품의 연동 방식에 따라 다릅니다 — 오프라인 신뢰성이 중요하다면 구매 전 로컬 연동(Zigbee, ESPHome)을 사용하는지 클라우드 의존형 앱을 사용하는지 확인하세요.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[스마트홈에서의 센서 퓨전](/ko/smart-home/sensor-fusion-smart-home-2027) — 레이더와 다른 센서 유형 결합하기',
          '[Frigate를 활용한 로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera) — 존재 감지만 하는 레이더의 식별 대안',
          '[스마트홈 프라이버시 위험](/ko/smart-home/smart-home-privacy-risks) — 레이더 존재 감지가 다루는 더 넓은 프라이버시 맥락',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '레이더 존재 감지: 카메라 없이 방 재실 여부 파악하기 (2027년)',
      description: '카메라 없이 방 재실 여부를 감지하는 레이더 존재 센서: mmWave 감지 방식과 동작 센서나 카메라보다 뛰어난 부분.',
      url: 'https://www.promptquorum.com/ko/smart-home/radar-presence-sensing-no-camera',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '레이더 존재 센서' }, { '@type': 'Thing', name: 'mmWave 감지' }, { '@type': 'Thing', name: '재실 감지' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '레이더 센서가 이미지를 촬영하나요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 레이더 존재 센서는 전파 반사를 통해 재실 여부를 감지하며, 이미지를 촬영하지 않습니다.' } },
        { '@type': 'Question', name: '레이더 센서가 완전히 가만히 앉아 있는 사람을 감지할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '네 — 레이더는 호흡 같은 미세한 움직임을 감지해 지속적인 재실을 등록할 수 있으며, 이는 시간 초과되는 PIR 동작 센서와 다릅니다.' } },
        { '@type': 'Question', name: '레이더 센서가 모든 용도에서 PIR 동작 센서보다 나은가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — PIR 센서는 더 저렴하며 간단한 동작 트리거 자동화에 적합합니다. 레이더는 정확한 정지 재실 감지에 특히 가치가 있습니다.' } },
        { '@type': 'Question', name: '카메라 대신 레이더 센서를 보안용으로 사용할 수 있나요?', acceptedAnswer: { '@type': 'Answer', text: '레이더는 존재/침입을 감지할 수 있지만, 카메라처럼 누가 또는 무엇이 이를 유발했는지 식별할 수는 없습니다.' } },
      ],
    },
  },
}
