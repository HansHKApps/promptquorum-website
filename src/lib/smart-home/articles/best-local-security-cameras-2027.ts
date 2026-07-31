import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-en.webp',
    affiliateDisclosure: true,
    // Verified 2026-07-16 against official manufacturer pages/stores: reolink.com (RLC-810A specs),
    // store.reolink.com (Home Hub Pro price), store.ui.com (UniFi Protect NVR pricing), amcrest.com
    // (ONVIF Profile S/T support claim), and eufy.com/Amazon (HomeBase 3 price). Prices are dated
    // snapshots — retail prices fluctuate; check the linked page at time of purchase.
    title: 'Best Local Security Cameras (2027)',
    seoTitle: 'Best Local Security Cameras (2027)',
    intro:
      'The best local security cameras for a privacy-focused smart home store footage on-device or on your own network storage, without requiring a subscription for basic recording. Reolink, Ubiquiti UniFi Protect, Amcrest, and Eufy each offer confirmed local-storage or local-NVR options without a mandatory cloud subscription (checked 2026-07-16 against official sources; prices are snapshots, not fixed figures). This guide covers what to check for genuine local capability and is a hardware-buying complement to the Frigate how-to guide already on this site.',
    metaDescription:
      'Best local security cameras in 2027: models with genuine on-device or local-network storage, no mandatory cloud subscription. Buying guide, not a Frigate setup tutorial.',
    twitterDescription:
      'Buying guide for local-storage security cameras — no cloud subscription required for basic recording. Complements the Frigate how-to guide.',
    readTime: '7 min read',
    educationalLevel: 'Beginner',
    audience: 'Smart home buyers choosing camera hardware with genuine local storage capability',
    primaryTerm: 'best local security cameras',
    targetKeywords: [
      'best local security cameras no cloud',
      'local storage security camera 2027',
      'security camera no subscription',
      'onvif camera home assistant',
      'privacy security camera buying guide',
    ],
    leadAnswerBlock:
      '**The best local security cameras support on-device (SD card/NVR) or local-network storage for basic recording without requiring a cloud subscription, and ideally expose a local streaming protocol (RTSP/ONVIF) so Frigate or Home Assistant can pull the feed directly.** Reolink\'s RLC-810A (RTSP confirmed, no subscription for SD recording), Ubiquiti\'s UniFi Protect + UNVR ($299, fully local NVR), Amcrest\'s PoE line (broad ONVIF Profile S/T support), and Eufy\'s HomeBase 3 (~$149, local storage, no monthly fee) are four confirmed current options — checked 2026-07-16, prices are snapshots.',
    quickAnswerTop: {
      en: {
        question: 'Which security cameras work without a cloud subscription?',
        answer:
          'Look for cameras that explicitly support local storage (SD card or NVR) for basic recording, and ideally an open local streaming protocol like RTSP or ONVIF so Frigate can pull the feed for AI detection without any cloud dependency. Confirmed current options (checked 2026-07-16): Reolink\'s cameras ship RTSP on every PoE/Wi-Fi model with no subscription required for local SD/NVR recording; Ubiquiti\'s UniFi Protect records every camera to a local NVR (the entry-level UNVR Instant is $199) with no recurring fee for core functionality; Amcrest\'s PoE line has broad ONVIF Profile S/T support for third-party NVR software; Eufy\'s HomeBase 3 hub (~$149) stores footage locally by default with no monthly fee. Many other consumer brands market "local storage" while still requiring a cloud account for basic viewing — check the manufacturer\'s current documentation, not marketing copy, before buying anything not listed here.',
        bullets: [
          'Required: local storage option (SD card or NVR) that works without an active subscription',
          'Ideal: RTSP or ONVIF local streaming support, for Frigate/Home Assistant integration',
          'Confirmed current options: Reolink (RTSP on every model), Ubiquiti UniFi Protect (local NVR, no core fees), Amcrest (broad ONVIF support), Eufy (local HomeBase hub)',
          'Check: does the camera require a cloud account even for local-only use — some brands not listed here do',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What to Check For', anchor: 'what-to-check' },
      { label: 'Camera Categories', anchor: 'camera-categories' },
      { label: 'How This Differs From the Frigate Guide', anchor: 'differs-from-frigate' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best local security cameras support local storage and ideally RTSP/ONVIF streaming without a mandatory cloud subscription — verify current specific models and their confirmed local-capability before buying.' },
      { type: 'plain-terms', content: 'Many security cameras only really work through the manufacturer\'s app and cloud service, even if they technically have an SD card slot. This guide is about finding cameras where local storage and local access genuinely work as the primary way to use the camera, not as a limited backup option.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Required: local storage (SD card or NVR) usable without an active cloud subscription',
          'Ideal: RTSP or ONVIF streaming support for direct Frigate/Home Assistant integration',
          'Watch for: cameras that require a cloud account even for local-only setup — check current documentation, not marketing copy',
          'Confirmed current picks (checked 2026-07-16): Reolink RLC-810A, Ubiquiti UniFi Protect + UNVR ($299), Amcrest PoE line, Eufy HomeBase 3 (~$149) — prices are snapshots, check the linked page before buying',
          'This is a hardware-buying guide — see the Frigate how-to guide for setting up local AI detection once you have local-capable cameras',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'What to Check For',
        content:
          '**Confirm three things before buying: does local storage work without an active subscription, does the camera expose RTSP or ONVIF for third-party access, and does basic setup require a cloud account at all.**',
        items: [
          'Local storage without subscription: many cameras include an SD card slot but still gate cloud-connected features (or even viewing recent footage) behind a paid plan — check the manufacturer\'s current terms specifically for this.',
          'RTSP/ONVIF support: this is what lets Frigate or Home Assistant pull the camera feed directly for local AI detection — not every "local storage" camera exposes this; some restrict the stream to their own app only.',
          'Cloud-account requirement: some cameras require creating a manufacturer account even if you never intend to use their cloud features — decide if that trade-off (an account, without necessarily paying or storing footage there) is acceptable for your setup.',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'Camera Categories',
        content:
          '**Local-capable cameras generally fall into three categories: NVR-based systems (recording to a dedicated local recorder), Wi-Fi cameras with RTSP/ONVIF support, and PoE (Power over Ethernet) cameras — each with different setup trade-offs.**',
        items: [
          'NVR-based systems: typically the most reliably local-first option, since the recorder itself is the local storage and often doesn\'t require any cloud account for basic operation. Ubiquiti\'s UniFi Protect is the clearest example: every camera records to a local NVR (UNVR Instant, $199, up to UNVR Pro/Enterprise tiers for larger installs) with no recurring fee for core functionality, confirmed on Ubiquiti\'s own store.',
          'Wi-Fi cameras with RTSP/ONVIF: convenient wireless installation. Reolink ships RTSP on every PoE and Wi-Fi model per its own support documentation, and doesn\'t gate local SD-card recording behind a subscription — but always check a specific model\'s current firmware notes, since some manufacturers elsewhere in the market have removed RTSP/ONVIF after launch.',
          'PoE cameras: generally the most reliable for continuous local recording since power and data run over one cable, at the cost of needing PoE-capable network switches. Amcrest\'s PoE line has broad ONVIF Profile S and T support (per Amcrest\'s own documentation), commonly used with third-party NVR software like Blue Iris or Synology Surveillance Station, at an average price around $100 per camera (checked 2026-07-16, varies by model).',
          'All-in-one hub systems: Eufy\'s HomeBase 3 (S380, ~$149) stores footage locally by default on up to 16TB of expandable storage, with no monthly fee required — a middle ground between a full NVR and a single standalone camera, confirmed on Eufy\'s own product page.',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'How This Differs From the Frigate Guide',
        content:
          '**This article helps you choose camera hardware; the Frigate guide covers setting up the local AI detection software once you have local-capable cameras.**',
        items: [
          'Read this guide first if you don\'t yet own local-capable cameras and need to choose hardware.',
          'Go to the local AI security cameras with Frigate guide for the software setup — hardware requirements, Home Assistant integration, and detection configuration.',
          'The two are complementary: camera choice determines what\'s possible; Frigate setup determines what you actually configure.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do all cameras with an SD card slot work without a subscription?', a: 'Not necessarily — some gate remote viewing, notifications, or even local playback behind an app-based subscription despite having local storage hardware. Check the specific manufacturer\'s current terms.' },
          { q: 'What is RTSP and why does it matter?', a: 'RTSP (Real Time Streaming Protocol) is an open standard for pulling a camera\'s video stream directly, which is what lets Frigate or Home Assistant access the feed without going through the manufacturer\'s app or cloud service.' },
          { q: 'Are PoE cameras better than Wi-Fi cameras for this?', a: 'PoE cameras are generally more reliable for continuous local recording since they don\'t depend on Wi-Fi stability, but require PoE-capable network hardware. Wi-Fi cameras with confirmed RTSP/ONVIF support are a simpler installation trade-off.' },
          { q: 'Can I add local cameras to an existing cloud-camera setup?', a: 'Yes — you can mix camera types, using local-capable cameras with Frigate for AI detection while keeping any existing cloud cameras separate, though unifying everything under local control is simpler to maintain long-term.' },
          { q: 'Does a local camera setup need internet access?', a: 'No — once configured, local storage and RTSP-based detection work entirely on your local network, though initial setup for some cameras may still require an internet connection for firmware or app registration.' },
          { q: 'Where do I set up AI detection once I have local cameras?', a: 'See the local AI security cameras with Frigate guide for the detection software setup, hardware acceleration options, and Home Assistant integration.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — the software setup this hardware enables',
          '[Radar Presence Sensing: Room Occupancy Without a Camera](/smart-home/radar-presence-sensing-no-camera) — a camera-free presence-detection alternative',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the broader privacy context for camera choices',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Local Security Cameras (2027)',
      description: 'Best local security cameras: models with genuine on-device or local-network storage, no mandatory cloud subscription.',
      url: 'https://www.promptquorum.com/smart-home/best-local-security-cameras-2027',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Local security camera' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do all cameras with an SD card slot work without a subscription?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily — some gate remote viewing or notifications behind an app-based subscription despite having local storage hardware.' } },
        { '@type': 'Question', name: 'What is RTSP and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP is an open standard for pulling a camera\'s video stream directly, letting Frigate or Home Assistant access the feed without the manufacturer\'s cloud service.' } },
        { '@type': 'Question', name: 'Does a local camera setup need internet access?', acceptedAnswer: { '@type': 'Answer', text: 'No — once configured, local storage and RTSP-based detection work entirely on your local network.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-de.webp',
    affiliateDisclosure: true,
    title: 'Beste lokale Sicherheitskameras (2027)',
    seoTitle: 'Beste lokale Sicherheitskameras (2027)',
    intro:
      'Die besten lokalen Sicherheitskameras für ein auf Privatsphäre ausgerichtetes Smart Home speichern Aufnahmen direkt auf dem Gerät oder im eigenen Netzwerkspeicher, ohne dass für die Basisaufzeichnung ein Abonnement erforderlich ist. Reolink, Ubiquiti UniFi Protect, Amcrest und Eufy bieten jeweils bestätigte Optionen für lokale Speicherung oder einen lokalen NVR ohne verpflichtendes Cloud-Abonnement (geprüft am 16.07.2026 anhand offizieller Quellen; Preise sind Momentaufnahmen, keine festen Werte). Dieser Leitfaden erklärt, worauf für echte lokale Fähigkeiten zu achten ist, und ist eine Hardware-Kaufergänzung zum bereits auf dieser Website vorhandenen Frigate-Anleitungsartikel.',
    metaDescription:
      'Beste lokale Sicherheitskameras 2027: Modelle mit echter On-Device- oder lokaler Netzwerkspeicherung, kein verpflichtendes Cloud-Abonnement. Kaufratgeber, kein Frigate-Setup-Tutorial.',
    twitterDescription:
      'Kaufratgeber für Sicherheitskameras mit lokaler Speicherung — kein Cloud-Abonnement für die Basisaufzeichnung nötig. Ergänzt den Frigate-Anleitungsartikel.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Smart-Home-Käufer, die Kamera-Hardware mit echter lokaler Speicherfähigkeit auswählen',
    primaryTerm: 'beste lokale sicherheitskameras',
    targetKeywords: [
      'beste lokale sicherheitskameras ohne cloud',
      'sicherheitskamera lokaler speicher 2027',
      'sicherheitskamera ohne abonnement',
      'onvif kamera home assistant',
      'kaufratgeber privatsphaere sicherheitskamera',
    ],
    leadAnswerBlock:
      '**Die besten lokalen Sicherheitskameras unterstützen On-Device-Speicherung (SD-Karte/NVR) oder lokale Netzwerkspeicherung für die Basisaufzeichnung ohne verpflichtendes Cloud-Abonnement und bieten idealerweise ein lokales Streaming-Protokoll (RTSP/ONVIF), sodass Frigate oder Home Assistant den Feed direkt abrufen können.** Reolinks RLC-810A (RTSP bestätigt, kein Abonnement für SD-Aufzeichnung nötig), Ubiquitis UniFi Protect + UNVR (299 $, vollständig lokaler NVR), Amcrests PoE-Linie (breite Unterstützung für ONVIF Profile S/T) und Eufys HomeBase 3 (~149 $, lokale Speicherung, keine monatliche Gebühr) sind vier bestätigte aktuelle Optionen — geprüft am 16.07.2026, Preise sind Momentaufnahmen.',
    quickAnswerTop: {
      de: {
        question: 'Welche Sicherheitskameras funktionieren ohne Cloud-Abonnement?',
        answer:
          'Achte auf Kameras, die ausdrücklich lokale Speicherung (SD-Karte oder NVR) für die Basisaufzeichnung unterstützen, und idealerweise ein offenes lokales Streaming-Protokoll wie RTSP oder ONVIF, damit Frigate den Feed für KI-Erkennung ohne jede Cloud-Abhängigkeit abrufen kann. Bestätigte aktuelle Optionen (geprüft am 16.07.2026): Reolinks Kameras liefern RTSP bei jedem PoE-/Wi-Fi-Modell ohne erforderliches Abonnement für lokale SD-/NVR-Aufzeichnung; Ubiquitis UniFi Protect zeichnet jede Kamera auf einem lokalen NVR auf (der Einstiegs-UNVR Instant kostet 199 $) ohne wiederkehrende Gebühr für die Kernfunktionen; Amcrests PoE-Linie bietet breite Unterstützung für ONVIF Profile S/T für NVR-Software von Drittanbietern; Eufys HomeBase-3-Hub (~149 $) speichert Aufnahmen standardmäßig lokal ohne monatliche Gebühr. Viele andere Verbrauchermarken bewerben "lokale Speicherung", verlangen aber weiterhin ein Cloud-Konto selbst für die einfache Anzeige — prüfe die aktuelle Dokumentation des Herstellers, nicht das Marketingmaterial, bevor du etwas kaufst, das hier nicht aufgeführt ist.',
        bullets: [
          'Erforderlich: Option zur lokalen Speicherung (SD-Karte oder NVR), die ohne aktives Abonnement funktioniert',
          'Ideal: Unterstützung für lokales RTSP- oder ONVIF-Streaming für die Integration mit Frigate/Home Assistant',
          'Bestätigte aktuelle Optionen: Reolink (RTSP bei jedem Modell), Ubiquiti UniFi Protect (lokaler NVR, keine Kerngebühren), Amcrest (breite ONVIF-Unterstützung), Eufy (lokaler HomeBase-Hub)',
          'Prüfen: Erfordert die Kamera ein Cloud-Konto selbst für rein lokale Nutzung — manche hier nicht aufgeführten Marken tun das',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Worauf zu achten ist', anchor: 'what-to-check' },
      { label: 'Kamerakategorien', anchor: 'camera-categories' },
      { label: 'Wie sich das vom Frigate-Leitfaden unterscheidet', anchor: 'differs-from-frigate' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Die besten lokalen Sicherheitskameras unterstützen lokale Speicherung und idealerweise RTSP-/ONVIF-Streaming ohne verpflichtendes Cloud-Abonnement — prüfe vor dem Kauf konkrete aktuelle Modelle und deren bestätigte lokale Fähigkeiten.' },
      { type: 'plain-terms', content: 'Viele Sicherheitskameras funktionieren eigentlich nur über die App und den Cloud-Dienst des Herstellers, auch wenn sie technisch einen SD-Kartenslot haben. In diesem Leitfaden geht es darum, Kameras zu finden, bei denen lokale Speicherung und lokaler Zugriff tatsächlich als primärer Nutzungsweg funktionieren, und nicht nur als eingeschränkte Sicherungsoption.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Erforderlich: lokale Speicherung (SD-Karte oder NVR), nutzbar ohne aktives Cloud-Abonnement',
          'Ideal: Unterstützung für RTSP- oder ONVIF-Streaming für die direkte Integration mit Frigate/Home Assistant',
          'Achtung bei: Kameras, die selbst für ein rein lokales Setup ein Cloud-Konto erfordern — prüfe die aktuelle Dokumentation, nicht das Marketingmaterial',
          'Bestätigte aktuelle Empfehlungen (geprüft am 16.07.2026): Reolink RLC-810A, Ubiquiti UniFi Protect + UNVR (299 $), Amcrest PoE-Linie, Eufy HomeBase 3 (~149 $) — Preise sind Momentaufnahmen, vor dem Kauf die verlinkte Seite prüfen',
          'Dies ist ein Hardware-Kaufratgeber — siehe den Frigate-Anleitungsartikel für das Einrichten der lokalen KI-Erkennung, sobald du lokal fähige Kameras hast',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Worauf zu achten ist',
        content:
          '**Kläre vor dem Kauf drei Dinge: Funktioniert die lokale Speicherung ohne aktives Abonnement, bietet die Kamera RTSP oder ONVIF für den Zugriff durch Dritte, und erfordert die Basiseinrichtung überhaupt ein Cloud-Konto?**',
        items: [
          'Lokale Speicherung ohne Abonnement: Viele Kameras haben einen SD-Kartenslot, sperren aber cloudgebundene Funktionen (oder sogar die Ansicht kürzlicher Aufnahmen) hinter einem kostenpflichtigen Plan — prüfe die aktuellen Bedingungen des Herstellers speziell dazu.',
          'RTSP-/ONVIF-Unterstützung: Das ermöglicht es Frigate oder Home Assistant, den Kamera-Feed direkt für lokale KI-Erkennung abzurufen — nicht jede Kamera mit "lokaler Speicherung" bietet das; manche beschränken den Stream auf die eigene App.',
          'Cloud-Kontopflicht: Manche Kameras erfordern die Erstellung eines Herstellerkontos, selbst wenn du die Cloud-Funktionen nie nutzen willst — entscheide, ob dieser Kompromiss (ein Konto, ohne notwendigerweise dort zu bezahlen oder Aufnahmen zu speichern) für dein Setup akzeptabel ist.',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'Kamerakategorien',
        content:
          '**Lokal fähige Kameras lassen sich grob in drei Kategorien einteilen: NVR-basierte Systeme (Aufzeichnung auf einen dedizierten lokalen Rekorder), Wi-Fi-Kameras mit RTSP-/ONVIF-Unterstützung und PoE-Kameras (Power over Ethernet) — jeweils mit unterschiedlichen Kompromissen bei der Einrichtung.**',
        items: [
          'NVR-basierte Systeme: in der Regel die zuverlässigste lokal-first-Option, da der Rekorder selbst der lokale Speicher ist und für den Grundbetrieb oft kein Cloud-Konto benötigt. Ubiquitis UniFi Protect ist das klarste Beispiel: Jede Kamera zeichnet auf einem lokalen NVR auf (UNVR Instant, 199 $, bis hin zu UNVR Pro/Enterprise für größere Installationen) ohne wiederkehrende Gebühr für die Kernfunktionen, bestätigt im eigenen Shop von Ubiquiti.',
          'Wi-Fi-Kameras mit RTSP/ONVIF: praktische kabellose Installation. Reolink liefert laut eigener Support-Dokumentation RTSP bei jedem PoE- und Wi-Fi-Modell und sperrt die lokale SD-Kartenaufzeichnung nicht hinter einem Abonnement — prüfe aber immer die aktuellen Firmware-Hinweise eines konkreten Modells, da manche Hersteller anderswo am Markt RTSP/ONVIF nach dem Launch wieder entfernt haben.',
          'PoE-Kameras: im Allgemeinen am zuverlässigsten für die kontinuierliche lokale Aufzeichnung, da Strom und Daten über ein Kabel laufen — auf Kosten der Notwendigkeit PoE-fähiger Netzwerk-Switches. Amcrests PoE-Linie bietet laut Amcrests eigener Dokumentation breite Unterstützung für ONVIF Profile S und T, häufig genutzt mit NVR-Software von Drittanbietern wie Blue Iris oder Synology Surveillance Station, zu einem Durchschnittspreis von rund 100 $ pro Kamera (geprüft am 16.07.2026, variiert je nach Modell).',
          'All-in-One-Hub-Systeme: Eufys HomeBase 3 (S380, ~149 $) speichert Aufnahmen standardmäßig lokal auf bis zu 16 TB erweiterbarem Speicher, ohne erforderliche monatliche Gebühr — ein Mittelweg zwischen einem vollständigen NVR und einer einzelnen eigenständigen Kamera, bestätigt auf Eufys eigener Produktseite.',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'Wie sich das vom Frigate-Leitfaden unterscheidet',
        content:
          '**Dieser Artikel hilft dir bei der Wahl der Kamera-Hardware; der Frigate-Leitfaden behandelt das Einrichten der lokalen KI-Erkennungssoftware, sobald du lokal fähige Kameras hast.**',
        items: [
          'Lies diesen Leitfaden zuerst, wenn du noch keine lokal fähigen Kameras besitzt und Hardware auswählen musst.',
          'Gehe zum Leitfaden über lokale KI-Sicherheitskameras mit Frigate für die Software-Einrichtung — Hardwareanforderungen, Home-Assistant-Integration und Erkennungskonfiguration.',
          'Die beiden ergänzen sich: Die Kamerawahl bestimmt, was möglich ist; die Frigate-Einrichtung bestimmt, was du tatsächlich konfigurierst.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Funktionieren alle Kameras mit SD-Kartenslot ohne Abonnement?', a: 'Nicht unbedingt — manche sperren die Fernansicht, Benachrichtigungen oder sogar die lokale Wiedergabe hinter einem app-basierten Abonnement, trotz vorhandener lokaler Speicherhardware. Prüfe die aktuellen Bedingungen des jeweiligen Herstellers.' },
          { q: 'Was ist RTSP und warum ist es wichtig?', a: 'RTSP (Real Time Streaming Protocol) ist ein offener Standard, um den Videostream einer Kamera direkt abzurufen — das ermöglicht es Frigate oder Home Assistant, auf den Feed zuzugreifen, ohne über die App oder den Cloud-Dienst des Herstellers zu gehen.' },
          { q: 'Sind PoE-Kameras dafür besser als Wi-Fi-Kameras?', a: 'PoE-Kameras sind für die kontinuierliche lokale Aufzeichnung in der Regel zuverlässiger, da sie nicht von der Wi-Fi-Stabilität abhängen, benötigen aber PoE-fähige Netzwerkhardware. Wi-Fi-Kameras mit bestätigter RTSP-/ONVIF-Unterstützung sind ein einfacherer Installationskompromiss.' },
          { q: 'Kann ich lokale Kameras zu einem bestehenden Cloud-Kamera-Setup hinzufügen?', a: 'Ja — du kannst Kameratypen mischen, lokal fähige Kameras mit Frigate für KI-Erkennung nutzen und bestehende Cloud-Kameras separat behalten, wobei die Vereinheitlichung unter lokaler Kontrolle langfristig einfacher zu pflegen ist.' },
          { q: 'Benötigt ein lokales Kamera-Setup Internetzugang?', a: 'Nein — einmal konfiguriert, funktionieren lokale Speicherung und RTSP-basierte Erkennung vollständig im lokalen Netzwerk, wobei die Ersteinrichtung mancher Kameras für Firmware oder App-Registrierung weiterhin eine Internetverbindung erfordern kann.' },
          { q: 'Wo richte ich die KI-Erkennung ein, sobald ich lokale Kameras habe?', a: 'Siehe den Leitfaden über lokale KI-Sicherheitskameras mit Frigate für die Einrichtung der Erkennungssoftware, Hardwarebeschleunigungsoptionen und Home-Assistant-Integration.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale KI-Sicherheitskameras mit Frigate](/de/smart-home/local-ai-security-camera) — die Software-Einrichtung, die diese Hardware ermöglicht',
          '[Radar-Präsenzerkennung: Raumbelegung ohne Kamera](/de/smart-home/radar-presence-sensing-no-camera) — eine kamerafreie Alternative zur Präsenzerkennung',
          '[Datenschutzrisiken im Smart Home](/de/smart-home/smart-home-privacy-risks) — der breitere Datenschutzkontext für Kamerawahl',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste lokale Sicherheitskameras (2027)',
      description: 'Beste lokale Sicherheitskameras: Modelle mit echter On-Device- oder lokaler Netzwerkspeicherung, kein verpflichtendes Cloud-Abonnement.',
      url: 'https://www.promptquorum.com/de/smart-home/best-local-security-cameras-2027',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Lokale Sicherheitskamera' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Funktionieren alle Kameras mit SD-Kartenslot ohne Abonnement?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht unbedingt — manche sperren die Fernansicht oder Benachrichtigungen hinter einem app-basierten Abonnement, trotz vorhandener lokaler Speicherhardware.' } },
        { '@type': 'Question', name: 'Was ist RTSP und warum ist es wichtig?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP ist ein offener Standard, um den Videostream einer Kamera direkt abzurufen, wodurch Frigate oder Home Assistant ohne den Cloud-Dienst des Herstellers auf den Feed zugreifen können.' } },
        { '@type': 'Question', name: 'Benötigt ein lokales Kamera-Setup Internetzugang?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — einmal konfiguriert, funktionieren lokale Speicherung und RTSP-basierte Erkennung vollständig im lokalen Netzwerk.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-fr.webp',
    affiliateDisclosure: true,
    title: 'Meilleures caméras de sécurité locales (2027)',
    seoTitle: 'Meilleures caméras de sécurité locales (2027)',
    intro:
      "Les meilleures caméras de sécurité locales pour une maison connectée axée sur la vie privée stockent les enregistrements sur l'appareil ou sur votre propre stockage réseau, sans nécessiter d'abonnement pour l'enregistrement de base. Reolink, Ubiquiti UniFi Protect, Amcrest et Eufy proposent chacun des options confirmées de stockage local ou de NVR local sans abonnement cloud obligatoire (vérifié le 16/07/2026 auprès de sources officielles ; les prix sont des instantanés, pas des chiffres fixes). Ce guide explique quoi vérifier pour une véritable capacité locale et complète, côté achat de matériel, le guide pratique Frigate déjà présent sur ce site.",
    metaDescription:
      "Meilleures caméras de sécurité locales en 2027 : modèles avec un véritable stockage sur l'appareil ou en réseau local, sans abonnement cloud obligatoire. Guide d'achat, pas un tutoriel de configuration Frigate.",
    twitterDescription:
      "Guide d'achat pour caméras de sécurité à stockage local — aucun abonnement cloud requis pour l'enregistrement de base. Complète le guide pratique Frigate.",
    readTime: '7 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Acheteurs de maison connectée choisissant du matériel de caméra avec une véritable capacité de stockage local',
    primaryTerm: 'meilleures cameras de securite locales',
    targetKeywords: [
      'meilleures cameras de securite locales sans cloud',
      'camera securite stockage local 2027',
      'camera securite sans abonnement',
      'camera onvif home assistant',
      'guide achat camera securite vie privee',
    ],
    leadAnswerBlock:
      "**Les meilleures caméras de sécurité locales prennent en charge le stockage sur l'appareil (carte SD/NVR) ou en réseau local pour l'enregistrement de base sans nécessiter d'abonnement cloud, et exposent idéalement un protocole de streaming local (RTSP/ONVIF) afin que Frigate ou Home Assistant puissent récupérer directement le flux.** Le RLC-810A de Reolink (RTSP confirmé, aucun abonnement requis pour l'enregistrement sur carte SD), UniFi Protect + UNVR d'Ubiquiti (299 $, NVR entièrement local), la gamme PoE d'Amcrest (large prise en charge d'ONVIF Profile S/T) et le HomeBase 3 d'Eufy (~149 $, stockage local, sans frais mensuels) sont quatre options actuelles confirmées — vérifié le 16/07/2026, les prix sont des instantanés.",
    quickAnswerTop: {
      fr: {
        question: 'Quelles caméras de sécurité fonctionnent sans abonnement cloud ?',
        answer:
          "Recherchez des caméras qui prennent explicitement en charge le stockage local (carte SD ou NVR) pour l'enregistrement de base, et idéalement un protocole de streaming local ouvert comme RTSP ou ONVIF afin que Frigate puisse récupérer le flux pour la détection par IA sans aucune dépendance au cloud. Options actuelles confirmées (vérifié le 16/07/2026) : les caméras Reolink intègrent RTSP sur chaque modèle PoE/Wi-Fi sans abonnement requis pour l'enregistrement local sur carte SD/NVR ; UniFi Protect d'Ubiquiti enregistre chaque caméra sur un NVR local (l'UNVR Instant d'entrée de gamme coûte 199 $) sans frais récurrents pour les fonctionnalités de base ; la gamme PoE d'Amcrest offre une large prise en charge d'ONVIF Profile S/T pour les logiciels NVR tiers ; le hub HomeBase 3 d'Eufy (~149 $) stocke les enregistrements localement par défaut sans frais mensuels. De nombreuses autres marques grand public commercialisent le « stockage local » tout en exigeant encore un compte cloud pour la simple visualisation — vérifiez la documentation actuelle du fabricant, pas les argumentaires marketing, avant d'acheter tout produit non listé ici.",
        bullets: [
          "Requis : option de stockage local (carte SD ou NVR) fonctionnant sans abonnement actif",
          'Idéal : prise en charge du streaming local RTSP ou ONVIF, pour l\'intégration Frigate/Home Assistant',
          'Options actuelles confirmées : Reolink (RTSP sur chaque modèle), UniFi Protect d\'Ubiquiti (NVR local, sans frais de base), Amcrest (large prise en charge ONVIF), Eufy (hub HomeBase local)',
          "À vérifier : la caméra exige-t-elle un compte cloud même pour un usage purement local — certaines marques non listées ici le font",
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Quoi vérifier', anchor: 'what-to-check' },
      { label: 'Catégories de caméras', anchor: 'camera-categories' },
      { label: 'En quoi cela diffère du guide Frigate', anchor: 'differs-from-frigate' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: "Les meilleures caméras de sécurité locales prennent en charge le stockage local et idéalement le streaming RTSP/ONVIF sans abonnement cloud obligatoire — vérifiez les modèles actuels précis et leur capacité locale confirmée avant d'acheter." },
      { type: 'plain-terms', content: "De nombreuses caméras de sécurité ne fonctionnent vraiment que via l'application et le service cloud du fabricant, même si elles disposent techniquement d'un emplacement pour carte SD. Ce guide vise à trouver des caméras où le stockage local et l'accès local fonctionnent réellement comme mode d'utilisation principal, et non comme une option de secours limitée." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          "Requis : stockage local (carte SD ou NVR) utilisable sans abonnement cloud actif",
          "Idéal : prise en charge du streaming RTSP ou ONVIF pour une intégration directe avec Frigate/Home Assistant",
          "À surveiller : les caméras exigeant un compte cloud même pour une configuration purement locale — vérifiez la documentation actuelle, pas les argumentaires marketing",
          "Sélections actuelles confirmées (vérifié le 16/07/2026) : Reolink RLC-810A, UniFi Protect + UNVR d'Ubiquiti (299 $), gamme PoE Amcrest, Eufy HomeBase 3 (~149 $) — les prix sont des instantanés, vérifiez la page liée avant d'acheter",
          "Ceci est un guide d'achat de matériel — voir le guide pratique Frigate pour configurer la détection locale par IA une fois que vous avez des caméras compatibles localement",
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Quoi vérifier',
        content:
          "**Confirmez trois choses avant d'acheter : le stockage local fonctionne-t-il sans abonnement actif, la caméra expose-t-elle RTSP ou ONVIF pour un accès tiers, et la configuration de base nécessite-t-elle un compte cloud ?**",
        items: [
          "Stockage local sans abonnement : de nombreuses caméras incluent un emplacement pour carte SD mais verrouillent quand même les fonctionnalités connectées au cloud (voire la visualisation des enregistrements récents) derrière un plan payant — vérifiez spécifiquement les conditions actuelles du fabricant à ce sujet.",
          "Prise en charge RTSP/ONVIF : c'est ce qui permet à Frigate ou Home Assistant de récupérer directement le flux de la caméra pour la détection locale par IA — toutes les caméras à « stockage local » ne l'exposent pas ; certaines restreignent le flux à leur propre application uniquement.",
          "Exigence de compte cloud : certaines caméras exigent la création d'un compte fabricant même si vous n'avez jamais l'intention d'utiliser leurs fonctionnalités cloud — décidez si ce compromis (un compte, sans nécessairement payer ou y stocker des enregistrements) est acceptable pour votre configuration.",
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'Catégories de caméras',
        content:
          "**Les caméras compatibles localement se répartissent généralement en trois catégories : les systèmes basés sur NVR (enregistrement sur un enregistreur local dédié), les caméras Wi-Fi avec prise en charge RTSP/ONVIF, et les caméras PoE (Power over Ethernet) — chacune avec des compromis d'installation différents.**",
        items: [
          "Systèmes basés sur NVR : généralement l'option la plus fiablement locale, puisque l'enregistreur lui-même constitue le stockage local et ne nécessite souvent aucun compte cloud pour le fonctionnement de base. UniFi Protect d'Ubiquiti en est l'exemple le plus clair : chaque caméra enregistre sur un NVR local (UNVR Instant, 199 $, jusqu'aux gammes UNVR Pro/Enterprise pour les installations plus importantes) sans frais récurrents pour les fonctionnalités de base, confirmé sur la boutique officielle d'Ubiquiti.",
          "Caméras Wi-Fi avec RTSP/ONVIF : installation sans fil pratique. Reolink intègre RTSP sur chaque modèle PoE et Wi-Fi selon sa propre documentation d'assistance, et ne verrouille pas l'enregistrement local sur carte SD derrière un abonnement — mais vérifiez toujours les notes de firmware actuelles d'un modèle précis, car certains fabricants ailleurs sur le marché ont retiré RTSP/ONVIF après le lancement.",
          "Caméras PoE : généralement les plus fiables pour l'enregistrement local continu puisque l'alimentation et les données passent par un seul câble, au prix de la nécessité de commutateurs réseau compatibles PoE. La gamme PoE d'Amcrest offre une large prise en charge d'ONVIF Profile S et T (selon la propre documentation d'Amcrest), couramment utilisée avec des logiciels NVR tiers comme Blue Iris ou Synology Surveillance Station, à un prix moyen d'environ 100 $ par caméra (vérifié le 16/07/2026, varie selon le modèle).",
          "Systèmes hub tout-en-un : le HomeBase 3 d'Eufy (S380, ~149 $) stocke les enregistrements localement par défaut sur jusqu'à 16 To de stockage extensible, sans frais mensuels requis — un compromis entre un NVR complet et une simple caméra autonome, confirmé sur la page produit officielle d'Eufy.",
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'En quoi cela diffère du guide Frigate',
        content:
          "**Cet article vous aide à choisir le matériel des caméras ; le guide Frigate couvre la configuration du logiciel de détection locale par IA une fois que vous disposez de caméras compatibles localement.**",
        items: [
          "Lisez d'abord ce guide si vous ne possédez pas encore de caméras compatibles localement et devez choisir du matériel.",
          "Consultez le guide sur les caméras de sécurité locales par IA avec Frigate pour la configuration logicielle — exigences matérielles, intégration Home Assistant et configuration de la détection.",
          "Les deux sont complémentaires : le choix de la caméra détermine ce qui est possible ; la configuration de Frigate détermine ce que vous configurez réellement.",
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Toutes les caméras avec un emplacement carte SD fonctionnent-elles sans abonnement ?', a: "Pas nécessairement — certaines verrouillent la visualisation à distance, les notifications, voire la lecture locale derrière un abonnement lié à l'application, malgré la présence de matériel de stockage local. Vérifiez les conditions actuelles du fabricant concerné." },
          { q: "Qu'est-ce que RTSP et pourquoi est-ce important ?", a: "RTSP (Real Time Streaming Protocol) est une norme ouverte permettant de récupérer directement le flux vidéo d'une caméra, ce qui permet à Frigate ou Home Assistant d'accéder au flux sans passer par l'application ou le service cloud du fabricant." },
          { q: 'Les caméras PoE sont-elles meilleures que les caméras Wi-Fi pour cela ?', a: "Les caméras PoE sont généralement plus fiables pour l'enregistrement local continu car elles ne dépendent pas de la stabilité du Wi-Fi, mais nécessitent du matériel réseau compatible PoE. Les caméras Wi-Fi avec prise en charge RTSP/ONVIF confirmée offrent un compromis d'installation plus simple." },
          { q: 'Puis-je ajouter des caméras locales à une configuration de caméras cloud existante ?', a: "Oui — vous pouvez mélanger les types de caméras, en utilisant des caméras compatibles localement avec Frigate pour la détection par IA tout en gardant les caméras cloud existantes séparées, bien qu'unifier le tout sous un contrôle local soit plus simple à maintenir sur le long terme." },
          { q: "Une configuration de caméra locale a-t-elle besoin d'un accès internet ?", a: "Non — une fois configurés, le stockage local et la détection basée sur RTSP fonctionnent entièrement sur votre réseau local, bien que la configuration initiale de certaines caméras puisse encore nécessiter une connexion internet pour le firmware ou l'enregistrement de l'application." },
          { q: "Où puis-je configurer la détection par IA une fois que j'ai des caméras locales ?", a: "Voir le guide sur les caméras de sécurité locales par IA avec Frigate pour la configuration du logiciel de détection, les options d'accélération matérielle et l'intégration Home Assistant." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Caméras de sécurité locales par IA avec Frigate](/fr/smart-home/local-ai-security-camera) — la configuration logicielle que ce matériel permet',
          '[Détection de présence par radar : occupation des pièces sans caméra](/fr/smart-home/radar-presence-sensing-no-camera) — une alternative de détection de présence sans caméra',
          '[Risques pour la vie privée en maison connectée](/fr/smart-home/smart-home-privacy-risks) — le contexte plus large de la vie privée pour le choix des caméras',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleures caméras de sécurité locales (2027)',
      description: "Meilleures caméras de sécurité locales : modèles avec un véritable stockage sur l'appareil ou en réseau local, sans abonnement cloud obligatoire.",
      url: 'https://www.promptquorum.com/fr/smart-home/best-local-security-cameras-2027',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Caméra de sécurité locale' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Toutes les caméras avec un emplacement carte SD fonctionnent-elles sans abonnement ?', acceptedAnswer: { '@type': 'Answer', text: "Pas nécessairement — certaines verrouillent la visualisation à distance ou les notifications derrière un abonnement lié à l'application, malgré la présence de matériel de stockage local." } },
        { '@type': 'Question', name: "Qu'est-ce que RTSP et pourquoi est-ce important ?", acceptedAnswer: { '@type': 'Answer', text: "RTSP est une norme ouverte permettant de récupérer directement le flux vidéo d'une caméra, ce qui permet à Frigate ou Home Assistant d'accéder au flux sans passer par le service cloud du fabricant." } },
        { '@type': 'Question', name: "Une configuration de caméra locale a-t-elle besoin d'un accès internet ?", acceptedAnswer: { '@type': 'Answer', text: "Non — une fois configurés, le stockage local et la détection basée sur RTSP fonctionnent entièrement sur votre réseau local." } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-ja.webp',
    affiliateDisclosure: true,
    title: 'ベストなローカル防犯カメラ（2027年）',
    seoTitle: 'ベストなローカル防犯カメラ（2027年）',
    intro:
      'プライバシー重視のスマートホームに適したベストなローカル防犯カメラは、基本的な録画にサブスクリプションを必要とせず、映像をデバイス上または自分のネットワークストレージに保存します。Reolink、Ubiquiti UniFi Protect、Amcrest、Eufyはそれぞれ、必須のクラウドサブスクリプションなしで利用できる確認済みのローカルストレージまたはローカルNVRオプションを提供しています（2026年7月16日に公式情報源に対して確認済み。価格はある時点でのスナップショットであり、固定値ではありません）。このガイドは真のローカル機能を確認する際のポイントを扱っており、このサイトに既にあるFrigateのハウツーガイドを補完するハードウェア購入ガイドです。',
    metaDescription:
      '2027年のベストなローカル防犯カメラ：本当にオンデバイスまたはローカルネットワークに保存でき、クラウドサブスクリプションが必須ではないモデル。Frigateのセットアップチュートリアルではなく購入ガイドです。',
    twitterDescription:
      'ローカルストレージ対応の防犯カメラの購入ガイド — 基本録画にクラウドサブスクリプションは不要。Frigateのハウツーガイドを補完します。',
    readTime: '読了時間7分',
    educationalLevel: 'Beginner',
    audience: '本当にローカルストレージ機能を持つカメラハードウェアを選ぶスマートホーム購入者',
    primaryTerm: 'ベスト ローカル 防犯カメラ',
    targetKeywords: [
      'ベスト ローカル 防犯カメラ クラウドなし',
      '防犯カメラ ローカルストレージ 2027',
      '防犯カメラ サブスクリプションなし',
      'onvif カメラ home assistant',
      'プライバシー 防犯カメラ 購入ガイド',
    ],
    leadAnswerBlock:
      '**ベストなローカル防犯カメラは、クラウドサブスクリプションを必要とせずに基本録画のためのオンデバイス（SDカード/NVR）またはローカルネットワークストレージをサポートし、理想的にはFrigateやHome Assistantが直接フィードを取得できるローカルストリーミングプロトコル（RTSP/ONVIF）を公開しています。** ReolinkのRLC-810A（RTSP対応確認済み、SD録画にサブスクリプション不要）、UbiquitiのUniFi Protect + UNVR（299ドル、完全にローカルなNVR）、AmcrestのPoEラインナップ（ONVIF Profile S/Tの広範なサポート）、EufyのHomeBase 3（約149ドル、ローカルストレージ、月額料金なし）が、確認済みの現行4つの選択肢です — 2026年7月16日確認、価格はスナップショットです。',
    quickAnswerTop: {
      ja: {
        question: 'クラウドサブスクリプションなしで動作する防犯カメラはどれですか？',
        answer:
          '基本録画のためにローカルストレージ（SDカードまたはNVR）を明示的にサポートし、理想的にはRTSPやONVIFのようなオープンなローカルストリーミングプロトコルを備えているカメラを探しましょう。これにより、Frigateがクラウド依存なしでAI検知用のフィードを取得できます。確認済みの現行オプション（2026年7月16日確認）：Reolinkのカメラは、あらゆるPoE/Wi-Fiモデルで、ローカルSD/NVR録画にサブスクリプション不要でRTSPを搭載しています。UbiquitiのUniFi Protectは、すべてのカメラをローカルNVRに録画し（エントリーレベルのUNVR Instantは199ドル）、コア機能に定期料金はかかりません。AmcrestのPoEラインナップはサードパーティ製NVRソフトウェア向けにONVIF Profile S/Tを広くサポートしています。EufyのHomeBase 3ハブ（約149ドル）はデフォルトで月額料金なしにローカルに映像を保存します。他の多くのコンシューマーブランドは「ローカルストレージ」を謳いながらも、基本的な視聴にすらクラウドアカウントを必要とする場合があります — ここに記載のないモデルを購入する前に、マーケティング文言ではなくメーカーの現行ドキュメントを確認してください。',
        bullets: [
          '必須：アクティブなサブスクリプションなしで動作するローカルストレージオプション（SDカードまたはNVR）',
          '理想：Frigate/Home Assistant連携のためのRTSPまたはONVIFローカルストリーミングサポート',
          '確認済みの現行オプション：Reolink（全モデルでRTSP対応）、Ubiquiti UniFi Protect（ローカルNVR、コア機能に料金なし）、Amcrest（広範なONVIFサポート）、Eufy（ローカルHomeBaseハブ）',
          '確認事項：ローカル利用のみでもカメラがクラウドアカウントを必要とするか — ここに記載のない一部ブランドはそうなっています',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: '確認すべきポイント', anchor: 'what-to-check' },
      { label: 'カメラのカテゴリー', anchor: 'camera-categories' },
      { label: 'Frigateガイドとの違い', anchor: 'differs-from-frigate' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ベストなローカル防犯カメラは、必須のクラウドサブスクリプションなしにローカルストレージと理想的にはRTSP/ONVIFストリーミングをサポートします — 購入前に具体的な現行モデルとその確認済みのローカル機能を確認してください。' },
      { type: 'plain-terms', content: '多くの防犯カメラは、技術的にはSDカードスロットを備えていても、実際にはメーカーのアプリとクラウドサービスを通じてしか機能しません。このガイドは、限定的なバックアップ手段としてではなく、ローカルストレージとローカルアクセスがカメラの主要な利用方法として実際に機能するカメラを見つけることを目的としています。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          '必須：アクティブなクラウドサブスクリプションなしで利用できるローカルストレージ（SDカードまたはNVR）',
          '理想：FrigateやHome Assistantとの直接連携のためのRTSPまたはONVIFストリーミングサポート',
          '注意点：ローカルのみのセットアップでもクラウドアカウントを必要とするカメラ — マーケティング文言ではなく現行ドキュメントを確認すること',
          '確認済みの現行おすすめ（2026年7月16日確認）：Reolink RLC-810A、Ubiquiti UniFi Protect + UNVR（299ドル）、AmcrestのPoEラインナップ、Eufy HomeBase 3（約149ドル）— 価格はスナップショットのため、購入前にリンク先ページを確認してください',
          'これはハードウェア購入ガイドです — ローカル対応カメラを入手した後、ローカルAI検知をセットアップする方法についてはFrigateのハウツーガイドを参照してください',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '確認すべきポイント',
        content:
          '**購入前に3つのことを確認しましょう：アクティブなサブスクリプションなしでローカルストレージが機能するか、カメラがサードパーティアクセス用にRTSPまたはONVIFを公開しているか、そして基本セットアップにそもそもクラウドアカウントが必要かどうかです。**',
        items: [
          'サブスクリプションなしのローカルストレージ：多くのカメラはSDカードスロットを備えていますが、それでもクラウド連携機能（あるいは最近の映像の視聴すら）を有料プランの背後に隠しています — メーカーの現行の利用規約をこの点について具体的に確認してください。',
          'RTSP/ONVIFサポート：これによりFrigateやHome AssistantがローカルAI検知のためにカメラフィードを直接取得できます — すべての「ローカルストレージ」カメラがこれを公開しているわけではなく、ストリームを自社アプリのみに制限しているものもあります。',
          'クラウドアカウント要件：クラウド機能を一切使うつもりがなくても、メーカーアカウントの作成を必須とするカメラもあります — その妥協点（必ずしも料金を払ったり映像を保存したりするわけではないアカウント）が自分のセットアップにとって許容できるかを判断してください。',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'カメラのカテゴリー',
        content:
          '**ローカル対応カメラは大まかに3つのカテゴリーに分類されます：NVRベースのシステム（専用のローカルレコーダーへの録画）、RTSP/ONVIF対応のWi-Fiカメラ、そしてPoE（Power over Ethernet）カメラ — それぞれセットアップ上の異なるトレードオフがあります。**',
        items: [
          'NVRベースのシステム：レコーダー自体がローカルストレージであり、基本動作にクラウドアカウントを必要としないことが多いため、一般的に最も確実にローカルファーストなオプションです。UbiquitiのUniFi Protectが最も分かりやすい例で、すべてのカメラがローカルNVRに録画し（UNVR Instantは199ドル、大規模な導入向けのUNVR Pro/Enterpriseまで）、コア機能に定期料金はかかりません。これはUbiquiti自身のストアで確認済みです。',
          'RTSP/ONVIF対応のWi-Fiカメラ：便利な無線設置。Reolinkは自社サポートドキュメントによると、あらゆるPoEおよびWi-Fiモデルにおいて、ローカルSDカード録画をサブスクリプションの背後に隠すことなくRTSPを搭載しています — ただし、市場の一部メーカーはローンチ後にRTSP/ONVIFを削除した例もあるため、特定モデルの現行ファームウェアノートを常に確認してください。',
          'PoEカメラ：電源とデータが1本のケーブルで通るため、継続的なローカル録画において一般的に最も信頼性が高い一方、PoE対応のネットワークスイッチが必要になります。AmcrestのPoEラインナップは（Amcrest自身のドキュメントによると）ONVIF Profile SおよびTを広くサポートしており、Blue IrisやSynology Surveillance Stationのようなサードパーティ製NVRソフトウェアと組み合わせて使われることが多く、平均価格はカメラ1台あたり約100ドルです（2026年7月16日確認、モデルにより異なります）。',
          'オールインワンハブシステム：EufyのHomeBase 3（S380、約149ドル）は、拡張可能な最大16TBのストレージにデフォルトで映像をローカル保存し、月額料金は不要です — フルNVRと単体カメラの中間に位置する選択肢で、Eufy自身の製品ページで確認済みです。',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'Frigateガイドとの違い',
        content:
          '**この記事はカメラハードウェアの選び方を助けるものであり、Frigateガイドはローカル対応カメラを入手した後にローカルAI検知ソフトウェアをセットアップする方法を扱っています。**',
        items: [
          'まだローカル対応カメラを所有しておらず、ハードウェアを選ぶ必要がある場合は、まずこのガイドを読んでください。',
          'ソフトウェアのセットアップについては、Frigateを使ったローカルAI防犯カメラのガイドを参照してください — ハードウェア要件、Home Assistant連携、検知設定を扱っています。',
          'この2つは互いに補完し合います：カメラの選択が何が可能かを決め、Frigateのセットアップが実際に何を設定するかを決めます。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'SDカードスロット付きのカメラはすべてサブスクリプションなしで動作しますか？', a: '必ずしもそうではありません — ローカルストレージ用のハードウェアを備えていても、リモート視聴、通知、あるいはローカル再生さえもアプリベースのサブスクリプションの背後に隠しているカメラもあります。特定メーカーの現行の利用規約を確認してください。' },
          { q: 'RTSPとは何ですか、なぜ重要なのですか？', a: 'RTSP（Real Time Streaming Protocol）は、カメラの映像ストリームを直接取得するためのオープンな標準規格で、これによりFrigateやHome Assistantがメーカーのアプリやクラウドサービスを介さずにフィードにアクセスできます。' },
          { q: 'これに関してPoEカメラはWi-Fiカメラより優れていますか？', a: 'PoEカメラはWi-Fiの安定性に依存しないため、継続的なローカル録画において一般的により信頼性が高いですが、PoE対応のネットワーク機器が必要です。確認済みのRTSP/ONVIFサポートを持つWi-Fiカメラは、より簡単な設置トレードオフとなります。' },
          { q: '既存のクラウドカメラのセットアップにローカルカメラを追加できますか？', a: 'はい — カメラタイプを混在させることができ、AI検知にはFrigateとローカル対応カメラを使いつつ、既存のクラウドカメラは分けて維持できます。ただし、すべてをローカル制御下に統一する方が長期的な保守は容易です。' },
          { q: 'ローカルカメラのセットアップにインターネットアクセスは必要ですか？', a: 'いいえ — 一度設定すれば、ローカルストレージとRTSPベースの検知は完全にローカルネットワーク内で動作します。ただし、一部のカメラの初期セットアップでは、ファームウェアやアプリ登録のためにインターネット接続が依然として必要になる場合があります。' },
          { q: 'ローカルカメラを入手したら、AI検知はどこでセットアップすればよいですか？', a: '検知ソフトウェアのセットアップ、ハードウェアアクセラレーションのオプション、Home Assistant連携については、Frigateを使ったローカルAI防犯カメラのガイドを参照してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Frigateを使ったローカルAI防犯カメラ](/ja/smart-home/local-ai-security-camera) — このハードウェアが可能にするソフトウェアセットアップ',
          '[レーダーによる存在検知：カメラなしの部屋の在室確認](/ja/smart-home/radar-presence-sensing-no-camera) — カメラ不要の存在検知の代替手段',
          '[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks) — カメラ選びにおけるより広範なプライバシーの文脈',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ベストなローカル防犯カメラ（2027年）',
      description: 'ベストなローカル防犯カメラ：本当にオンデバイスまたはローカルネットワークに保存でき、クラウドサブスクリプションが必須ではないモデル。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-local-security-cameras-2027',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'ローカル防犯カメラ' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'SDカードスロット付きのカメラはすべてサブスクリプションなしで動作しますか？', acceptedAnswer: { '@type': 'Answer', text: '必ずしもそうではありません — ローカルストレージ用のハードウェアを備えていても、リモート視聴や通知をアプリベースのサブスクリプションの背後に隠しているカメラもあります。' } },
        { '@type': 'Question', name: 'RTSPとは何ですか、なぜ重要なのですか？', acceptedAnswer: { '@type': 'Answer', text: 'RTSPは、カメラの映像ストリームを直接取得するためのオープンな標準規格で、これによりFrigateやHome Assistantがメーカーのクラウドサービスを介さずにフィードにアクセスできます。' } },
        { '@type': 'Question', name: 'ローカルカメラのセットアップにインターネットアクセスは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ — 一度設定すれば、ローカルストレージとRTSPベースの検知は完全にローカルネットワーク内で動作します。' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-zh.webp',
    affiliateDisclosure: true,
    title: '最佳本地安防摄像头（2027年）',
    seoTitle: '最佳本地安防摄像头（2027年）',
    intro:
      '对于注重隐私的智能家居而言，最佳本地安防摄像头能够在设备上或自己的网络存储中保存录像，而基本录制无需订阅。Reolink、Ubiquiti UniFi Protect、Amcrest和Eufy均提供已确认的本地存储或本地NVR选项，无需强制性云订阅（于2026年7月16日对照官方资料核实；价格为特定时间点的快照，并非固定数字）。本指南介绍了如何判断真正的本地能力，是本站已有的Frigate操作指南在硬件选购方面的补充。',
    metaDescription:
      '2027年最佳本地安防摄像头：真正支持本地设备存储或本地网络存储、无需强制云订阅的型号。这是购买指南，而非Frigate安装教程。',
    twitterDescription:
      '本地存储安防摄像头购买指南——基本录制无需云订阅。是Frigate操作指南的补充。',
    readTime: '阅读需7分钟',
    educationalLevel: 'Beginner',
    audience: '正在选择具备真正本地存储能力的摄像头硬件的智能家居购买者',
    primaryTerm: '最佳本地安防摄像头',
    targetKeywords: [
      '最佳本地安防摄像头 无云',
      '安防摄像头 本地存储 2027',
      '安防摄像头 无订阅',
      'onvif 摄像头 home assistant',
      '隐私 安防摄像头 购买指南',
    ],
    leadAnswerBlock:
      '**最佳本地安防摄像头支持本地设备存储（SD卡/NVR）或本地网络存储用于基本录制，且无需云订阅，理想情况下还应提供本地流媒体协议（RTSP/ONVIF），以便Frigate或Home Assistant可以直接获取视频流。** Reolink的RLC-810A（已确认支持RTSP，SD卡录制无需订阅）、Ubiquiti的UniFi Protect + UNVR（299美元，完全本地化的NVR）、Amcrest的PoE系列（广泛支持ONVIF Profile S/T）以及Eufy的HomeBase 3（约149美元，本地存储，无月费）是四款已确认的当前可选产品——于2026年7月16日核实，价格为当时的快照。',
    quickAnswerTop: {
      zh: {
        question: '哪些安防摄像头无需云订阅即可使用？',
        answer:
          '寻找明确支持本地存储（SD卡或NVR）用于基本录制的摄像头，理想情况下还应支持RTSP或ONVIF等开放的本地流媒体协议，以便Frigate无需任何云依赖即可获取视频流用于AI检测。已确认的当前可选产品（于2026年7月16日核实）：Reolink的摄像头在每款PoE/Wi-Fi型号上都配备RTSP，本地SD卡/NVR录制无需订阅；Ubiquiti的UniFi Protect将每台摄像头录制到本地NVR（入门级UNVR Instant售价199美元），核心功能无需持续付费；Amcrest的PoE系列广泛支持第三方NVR软件所需的ONVIF Profile S/T；Eufy的HomeBase 3中枢（约149美元）默认将录像本地存储，无月费。许多其他消费品牌宣传"本地存储"，但即使是基本查看仍需要云账户——在购买本文未列出的产品之前，请查阅制造商的现行文档，而非营销宣传材料。',
        bullets: [
          '必需：无需激活订阅即可使用的本地存储选项（SD卡或NVR）',
          '理想：支持RTSP或ONVIF本地流媒体，便于与Frigate/Home Assistant集成',
          '已确认的当前可选产品：Reolink（每款型号均支持RTSP）、Ubiquiti UniFi Protect（本地NVR，核心功能无费用）、Amcrest（广泛支持ONVIF）、Eufy（本地HomeBase中枢）',
          '需检查：即使仅用于本地用途，摄像头是否仍要求云账户——本文未列出的一些品牌确实如此',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '需要检查的内容', anchor: 'what-to-check' },
      { label: '摄像头分类', anchor: 'camera-categories' },
      { label: '与Frigate指南的区别', anchor: 'differs-from-frigate' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '最佳本地安防摄像头支持本地存储，理想情况下还支持RTSP/ONVIF流媒体，且无需强制云订阅——购买前请核实具体的当前型号及其已确认的本地能力。' },
      { type: 'plain-terms', content: '许多安防摄像头即使技术上配有SD卡插槽，实际上也只能通过制造商的应用和云服务真正运作。本指南旨在帮助你找到那些本地存储和本地访问真正作为主要使用方式发挥作用的摄像头，而不仅仅是一种有限的备份选项。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          '必需：可在无激活云订阅的情况下使用的本地存储（SD卡或NVR）',
          '理想：支持RTSP或ONVIF流媒体，便于与Frigate/Home Assistant直接集成',
          '需留意：即使是纯本地设置也要求云账户的摄像头——请查阅现行文档，而非营销宣传材料',
          '已确认的当前推荐（于2026年7月16日核实）：Reolink RLC-810A、Ubiquiti UniFi Protect + UNVR（299美元）、Amcrest PoE系列、Eufy HomeBase 3（约149美元）——价格为当时的快照，购买前请查看链接页面',
          '这是一份硬件购买指南——一旦你拥有支持本地功能的摄像头，请参阅Frigate操作指南来设置本地AI检测',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '需要检查的内容',
        content:
          '**购买前请确认三件事：本地存储在无激活订阅的情况下是否可用，摄像头是否为第三方访问提供RTSP或ONVIF，以及基本设置是否需要云账户。**',
        items: [
          '无需订阅的本地存储：许多摄像头配有SD卡插槽，但仍将云连接功能（甚至是查看最近录像）限制在付费方案之内——请专门查阅制造商现行条款中关于这一点的说明。',
          'RTSP/ONVIF支持：这是Frigate或Home Assistant能够直接获取摄像头视频流用于本地AI检测的关键——并非所有"本地存储"摄像头都提供此功能；有些会将视频流限制在自家应用内。',
          '云账户要求：有些摄像头要求创建制造商账户，即使你从未打算使用其云功能——请自行判断这种权衡（拥有账户，但不一定需要付费或在其中存储录像）是否适合你的设置。',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: '摄像头分类',
        content:
          '**支持本地功能的摄像头大致可分为三类：基于NVR的系统（录制到专用本地录像机）、支持RTSP/ONVIF的Wi-Fi摄像头，以及PoE（以太网供电）摄像头——每种都有不同的设置权衡。**',
        items: [
          '基于NVR的系统：通常是最可靠的本地优先选项，因为录像机本身就是本地存储，且基本操作通常无需任何云账户。Ubiquiti的UniFi Protect是最清晰的例子：每台摄像头都录制到本地NVR（UNVR Instant售价199美元，面向更大规模安装还有UNVR Pro/Enterprise系列），核心功能无需持续付费，这一点已在Ubiquiti自己的商店中得到确认。',
          '支持RTSP/ONVIF的Wi-Fi摄像头：便于无线安装。根据Reolink自己的支持文档，其每款PoE和Wi-Fi型号都配备RTSP，且不会将本地SD卡录制限制在订阅之内——但请务必查阅具体型号的现行固件说明，因为市场上一些其他制造商在发布后移除了RTSP/ONVIF支持。',
          'PoE摄像头：由于电力和数据通过一根线缆传输，通常在持续本地录制方面最为可靠，代价是需要支持PoE的网络交换机。根据Amcrest自己的文档，其PoE系列广泛支持ONVIF Profile S和T，常与Blue Iris或Synology Surveillance Station等第三方NVR软件配合使用，平均价格约为每台摄像头100美元（于2026年7月16日核实，因型号而异）。',
          '一体化中枢系统：Eufy的HomeBase 3（S380，约149美元）默认将录像本地存储在最多可扩展至16TB的存储空间中，无需月费——是完整NVR与单个独立摄像头之间的折中方案，这一点已在Eufy自己的产品页面得到确认。',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: '与Frigate指南的区别',
        content:
          '**本文帮助你选择摄像头硬件；Frigate指南则介绍在你拥有支持本地功能的摄像头后，如何设置本地AI检测软件。**',
        items: [
          '如果你还没有支持本地功能的摄像头、需要先选购硬件，请先阅读本指南。',
          '有关软件设置——硬件要求、Home Assistant集成和检测配置，请参阅使用Frigate实现本地AI安防摄像头的指南。',
          '两者相辅相成：摄像头的选择决定了可能实现什么；Frigate的设置则决定了你实际配置了什么。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '所有配有SD卡插槽的摄像头都能在无订阅情况下使用吗？', a: '不一定——尽管配有本地存储硬件，有些摄像头仍会将远程查看、通知甚至本地回放限制在基于应用的订阅之内。请查阅具体制造商的现行条款。' },
          { q: '什么是RTSP，为什么它很重要？', a: 'RTSP（实时流协议）是一种直接获取摄像头视频流的开放标准，这使得Frigate或Home Assistant无需通过制造商的应用或云服务即可访问视频流。' },
          { q: '就此而言，PoE摄像头是否比Wi-Fi摄像头更好？', a: 'PoE摄像头由于不依赖Wi-Fi稳定性，在持续本地录制方面通常更可靠，但需要支持PoE的网络硬件。已确认支持RTSP/ONVIF的Wi-Fi摄像头则是一种更简单的安装折中方案。' },
          { q: '我可以将本地摄像头添加到现有的云摄像头设置中吗？', a: '可以——你可以混用不同类型的摄像头，将支持本地功能的摄像头与Frigate配合用于AI检测，同时保留现有的云摄像头独立运行，不过将所有设备统一到本地控制之下从长远来看更便于维护。' },
          { q: '本地摄像头设置需要互联网访问吗？', a: '不需要——一旦配置完成，本地存储和基于RTSP的检测完全在本地网络上运行，不过部分摄像头的初始设置可能仍需要互联网连接来完成固件更新或应用注册。' },
          { q: '拥有本地摄像头后，我该在哪里设置AI检测？', a: '有关检测软件设置、硬件加速选项和Home Assistant集成，请参阅使用Frigate实现本地AI安防摄像头的指南。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[使用Frigate实现本地AI安防摄像头](/zh/smart-home/local-ai-security-camera) — 这套硬件所支持的软件设置',
          '[雷达存在感应：无需摄像头的房间占用检测](/zh/smart-home/radar-presence-sensing-no-camera) — 一种无需摄像头的存在检测替代方案',
          '[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks) — 摄像头选择背后更广泛的隐私背景',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '最佳本地安防摄像头（2027年）',
      description: '最佳本地安防摄像头：真正支持本地设备存储或本地网络存储、无需强制云订阅的型号。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-local-security-cameras-2027',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '本地安防摄像头' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '所有配有SD卡插槽的摄像头都能在无订阅情况下使用吗？', acceptedAnswer: { '@type': 'Answer', text: '不一定——尽管配有本地存储硬件，有些摄像头仍会将远程查看或通知限制在基于应用的订阅之内。' } },
        { '@type': 'Question', name: '什么是RTSP，为什么它很重要？', acceptedAnswer: { '@type': 'Answer', text: 'RTSP是一种直接获取摄像头视频流的开放标准，使Frigate或Home Assistant无需通过制造商的云服务即可访问视频流。' } },
        { '@type': 'Question', name: '本地摄像头设置需要互联网访问吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要——一旦配置完成，本地存储和基于RTSP的检测完全在本地网络上运行。' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-es.webp',
    affiliateDisclosure: true,
    title: 'Mejores cámaras de seguridad locales (2027)',
    seoTitle: 'Mejores cámaras de seguridad locales (2027)',
    intro:
      'Las mejores cámaras de seguridad locales para un hogar inteligente centrado en la privacidad almacenan las grabaciones en el propio dispositivo o en tu almacenamiento de red, sin requerir una suscripción para la grabación básica. Reolink, Ubiquiti UniFi Protect, Amcrest y Eufy ofrecen cada una opciones confirmadas de almacenamiento local o NVR local sin suscripción cloud obligatoria (verificado el 16/07/2026 con fuentes oficiales; los precios son instantáneas puntuales, no cifras fijas). Esta guía explica qué comprobar para una verdadera capacidad local y es un complemento de compra de hardware para la guía práctica de Frigate ya presente en este sitio.',
    metaDescription:
      'Mejores cámaras de seguridad locales en 2027: modelos con almacenamiento real en el dispositivo o en red local, sin suscripción cloud obligatoria. Guía de compra, no un tutorial de configuración de Frigate.',
    twitterDescription:
      'Guía de compra de cámaras de seguridad con almacenamiento local — sin suscripción cloud necesaria para la grabación básica. Complementa la guía práctica de Frigate.',
    readTime: '7 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de hogar inteligente que eligen hardware de cámaras con capacidad de almacenamiento local genuina',
    primaryTerm: 'mejores camaras de seguridad locales',
    targetKeywords: [
      'mejores camaras de seguridad locales sin cloud',
      'camara seguridad almacenamiento local 2027',
      'camara seguridad sin suscripcion',
      'camara onvif home assistant',
      'guia compra camara seguridad privacidad',
    ],
    leadAnswerBlock:
      '**Las mejores cámaras de seguridad locales admiten almacenamiento en el dispositivo (tarjeta SD/NVR) o en red local para la grabación básica sin requerir una suscripción cloud, e idealmente exponen un protocolo de streaming local (RTSP/ONVIF) para que Frigate o Home Assistant puedan obtener la transmisión directamente.** La RLC-810A de Reolink (RTSP confirmado, sin suscripción para grabación en SD), UniFi Protect + UNVR de Ubiquiti (299 $, NVR totalmente local), la línea PoE de Amcrest (amplia compatibilidad con ONVIF Profile S/T) y el HomeBase 3 de Eufy (~149 $, almacenamiento local, sin cuota mensual) son cuatro opciones actuales confirmadas — verificado el 16/07/2026, los precios son instantáneas puntuales.',
    quickAnswerTop: {
      es: {
        question: '¿Qué cámaras de seguridad funcionan sin suscripción cloud?',
        answer:
          'Busca cámaras que admitan explícitamente el almacenamiento local (tarjeta SD o NVR) para la grabación básica, e idealmente un protocolo de streaming local abierto como RTSP u ONVIF para que Frigate pueda obtener la transmisión para la detección por IA sin ninguna dependencia del cloud. Opciones actuales confirmadas (verificado el 16/07/2026): las cámaras de Reolink incluyen RTSP en todos los modelos PoE/Wi-Fi sin necesidad de suscripción para la grabación local en SD/NVR; UniFi Protect de Ubiquiti graba cada cámara en un NVR local (el UNVR Instant de entrada cuesta 199 $) sin cuota recurrente para las funciones principales; la línea PoE de Amcrest tiene amplia compatibilidad con ONVIF Profile S/T para software NVR de terceros; el hub HomeBase 3 de Eufy (~149 $) almacena las grabaciones localmente por defecto sin cuota mensual. Muchas otras marcas de consumo anuncian "almacenamiento local" pero aun así requieren una cuenta cloud incluso para la visualización básica — comprueba la documentación actual del fabricante, no el material de marketing, antes de comprar cualquier producto no incluido aquí.',
        bullets: [
          'Requerido: opción de almacenamiento local (tarjeta SD o NVR) que funcione sin suscripción activa',
          'Ideal: compatibilidad con streaming local RTSP u ONVIF, para la integración con Frigate/Home Assistant',
          'Opciones actuales confirmadas: Reolink (RTSP en todos los modelos), UniFi Protect de Ubiquiti (NVR local, sin cuotas por funciones principales), Amcrest (amplia compatibilidad ONVIF), Eufy (hub HomeBase local)',
          'Comprobar: si la cámara requiere una cuenta cloud incluso para uso puramente local — algunas marcas no incluidas aquí lo hacen',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué comprobar', anchor: 'what-to-check' },
      { label: 'Categorías de cámaras', anchor: 'camera-categories' },
      { label: 'En qué se diferencia de la guía de Frigate', anchor: 'differs-from-frigate' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Las mejores cámaras de seguridad locales admiten almacenamiento local e idealmente streaming RTSP/ONVIF sin suscripción cloud obligatoria — verifica los modelos actuales concretos y su capacidad local confirmada antes de comprar.' },
      { type: 'plain-terms', content: 'Muchas cámaras de seguridad solo funcionan realmente a través de la app y el servicio cloud del fabricante, aunque técnicamente tengan una ranura para tarjeta SD. Esta guía busca encontrar cámaras donde el almacenamiento local y el acceso local funcionen genuinamente como la forma principal de uso, y no como una opción de respaldo limitada.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Requerido: almacenamiento local (tarjeta SD o NVR) utilizable sin suscripción cloud activa',
          'Ideal: compatibilidad con streaming RTSP u ONVIF para integración directa con Frigate/Home Assistant',
          'Ten cuidado con: cámaras que requieren una cuenta cloud incluso para una configuración puramente local — comprueba la documentación actual, no el material de marketing',
          'Elecciones actuales confirmadas (verificado el 16/07/2026): Reolink RLC-810A, UniFi Protect + UNVR de Ubiquiti (299 $), línea PoE de Amcrest, Eufy HomeBase 3 (~149 $) — los precios son instantáneas puntuales, comprueba la página enlazada antes de comprar',
          'Esta es una guía de compra de hardware — consulta la guía práctica de Frigate para configurar la detección local por IA una vez que tengas cámaras con capacidad local',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'Qué comprobar',
        content:
          '**Confirma tres cosas antes de comprar: si el almacenamiento local funciona sin suscripción activa, si la cámara expone RTSP u ONVIF para acceso de terceros, y si la configuración básica requiere una cuenta cloud.**',
        items: [
          'Almacenamiento local sin suscripción: muchas cámaras incluyen una ranura para tarjeta SD pero aun así restringen las funciones conectadas al cloud (o incluso la visualización de grabaciones recientes) tras un plan de pago — comprueba específicamente los términos actuales del fabricante al respecto.',
          'Compatibilidad RTSP/ONVIF: esto es lo que permite a Frigate o Home Assistant obtener la transmisión de la cámara directamente para la detección local por IA — no todas las cámaras de "almacenamiento local" lo exponen; algunas restringen la transmisión solo a su propia app.',
          'Requisito de cuenta cloud: algunas cámaras requieren crear una cuenta del fabricante incluso si nunca tienes intención de usar sus funciones cloud — decide si ese compromiso (una cuenta, sin necesariamente pagar o almacenar grabaciones allí) es aceptable para tu configuración.',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'Categorías de cámaras',
        content:
          '**Las cámaras con capacidad local generalmente se dividen en tres categorías: sistemas basados en NVR (grabación en un grabador local dedicado), cámaras Wi-Fi con compatibilidad RTSP/ONVIF, y cámaras PoE (Power over Ethernet) — cada una con diferentes compromisos de configuración.**',
        items: [
          'Sistemas basados en NVR: normalmente la opción más fiablemente local, ya que el grabador en sí es el almacenamiento local y a menudo no requiere ninguna cuenta cloud para el funcionamiento básico. UniFi Protect de Ubiquiti es el ejemplo más claro: cada cámara graba en un NVR local (UNVR Instant, 199 $, hasta niveles UNVR Pro/Enterprise para instalaciones más grandes) sin cuota recurrente por las funciones principales, confirmado en la propia tienda de Ubiquiti.',
          'Cámaras Wi-Fi con RTSP/ONVIF: instalación inalámbrica cómoda. Reolink incluye RTSP en todos sus modelos PoE y Wi-Fi según su propia documentación de soporte, y no restringe la grabación local en tarjeta SD tras una suscripción — pero comprueba siempre las notas de firmware actuales de un modelo concreto, ya que algunos fabricantes en otras partes del mercado han eliminado RTSP/ONVIF después del lanzamiento.',
          'Cámaras PoE: generalmente las más fiables para la grabación local continua, ya que la alimentación y los datos van por un solo cable, a costa de necesitar switches de red compatibles con PoE. La línea PoE de Amcrest tiene amplia compatibilidad con ONVIF Profile S y T (según la propia documentación de Amcrest), comúnmente usada con software NVR de terceros como Blue Iris o Synology Surveillance Station, a un precio medio de alrededor de 100 $ por cámara (verificado el 16/07/2026, varía según el modelo).',
          'Sistemas de hub todo en uno: el HomeBase 3 de Eufy (S380, ~149 $) almacena las grabaciones localmente por defecto en hasta 16 TB de almacenamiento ampliable, sin cuota mensual requerida — un punto intermedio entre un NVR completo y una sola cámara independiente, confirmado en la propia página de producto de Eufy.',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'En qué se diferencia de la guía de Frigate',
        content:
          '**Este artículo te ayuda a elegir el hardware de la cámara; la guía de Frigate cubre la configuración del software de detección local por IA una vez que tienes cámaras con capacidad local.**',
        items: [
          'Lee primero esta guía si aún no tienes cámaras con capacidad local y necesitas elegir hardware.',
          'Consulta la guía de cámaras de seguridad locales con IA usando Frigate para la configuración del software — requisitos de hardware, integración con Home Assistant y configuración de detección.',
          'Ambas son complementarias: la elección de cámara determina qué es posible; la configuración de Frigate determina qué configuras realmente.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Todas las cámaras con ranura para tarjeta SD funcionan sin suscripción?', a: 'No necesariamente — algunas restringen la visualización remota, las notificaciones o incluso la reproducción local tras una suscripción basada en app, a pesar de tener hardware de almacenamiento local. Comprueba los términos actuales del fabricante específico.' },
          { q: '¿Qué es RTSP y por qué importa?', a: 'RTSP (Real Time Streaming Protocol) es un estándar abierto para obtener directamente la transmisión de vídeo de una cámara, lo que permite a Frigate o Home Assistant acceder a la transmisión sin pasar por la app o el servicio cloud del fabricante.' },
          { q: '¿Son mejores las cámaras PoE que las cámaras Wi-Fi para esto?', a: 'Las cámaras PoE son generalmente más fiables para la grabación local continua, ya que no dependen de la estabilidad del Wi-Fi, pero requieren hardware de red compatible con PoE. Las cámaras Wi-Fi con compatibilidad RTSP/ONVIF confirmada son un compromiso de instalación más simple.' },
          { q: '¿Puedo añadir cámaras locales a una configuración de cámaras cloud existente?', a: 'Sí — puedes mezclar tipos de cámara, usando cámaras con capacidad local con Frigate para la detección por IA mientras mantienes separadas las cámaras cloud existentes, aunque unificar todo bajo control local es más sencillo de mantener a largo plazo.' },
          { q: '¿Necesita una configuración de cámara local acceso a internet?', a: 'No — una vez configurada, el almacenamiento local y la detección basada en RTSP funcionan completamente en tu red local, aunque la configuración inicial de algunas cámaras aún puede requerir una conexión a internet para el firmware o el registro de la app.' },
          { q: '¿Dónde configuro la detección por IA una vez que tengo cámaras locales?', a: 'Consulta la guía de cámaras de seguridad locales con IA usando Frigate para la configuración del software de detección, las opciones de aceleración por hardware y la integración con Home Assistant.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Cámaras de seguridad locales con IA usando Frigate](/es/smart-home/local-ai-security-camera) — la configuración de software que este hardware permite',
          '[Detección de presencia por radar: ocupación de habitaciones sin cámara](/es/smart-home/radar-presence-sensing-no-camera) — una alternativa de detección de presencia sin cámara',
          '[Riesgos de privacidad en el hogar inteligente](/es/smart-home/smart-home-privacy-risks) — el contexto de privacidad más amplio para la elección de cámaras',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores cámaras de seguridad locales (2027)',
      description: 'Mejores cámaras de seguridad locales: modelos con almacenamiento real en el dispositivo o en red local, sin suscripción cloud obligatoria.',
      url: 'https://www.promptquorum.com/es/smart-home/best-local-security-cameras-2027',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Cámara de seguridad local' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Todas las cámaras con ranura para tarjeta SD funcionan sin suscripción?', acceptedAnswer: { '@type': 'Answer', text: 'No necesariamente — algunas restringen la visualización remota o las notificaciones tras una suscripción basada en app, a pesar de tener hardware de almacenamiento local.' } },
        { '@type': 'Question', name: '¿Qué es RTSP y por qué importa?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP es un estándar abierto para obtener directamente la transmisión de vídeo de una cámara, lo que permite a Frigate o Home Assistant acceder a la transmisión sin el servicio cloud del fabricante.' } },
        { '@type': 'Question', name: '¿Necesita una configuración de cámara local acceso a internet?', acceptedAnswer: { '@type': 'Answer', text: 'No — una vez configurada, el almacenamiento local y la detección basada en RTSP funcionan completamente en tu red local.' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-pt.webp',
    affiliateDisclosure: true,
    title: 'Melhores câmeras de segurança locais (2027)',
    seoTitle: 'Melhores câmeras de segurança locais (2027)',
    intro:
      'As melhores câmeras de segurança locais para uma casa inteligente focada em privacidade armazenam as gravações no próprio dispositivo ou no seu armazenamento de rede, sem exigir uma assinatura para a gravação básica. Reolink, Ubiquiti UniFi Protect, Amcrest e Eufy oferecem, cada uma, opções confirmadas de armazenamento local ou NVR local sem assinatura em nuvem obrigatória (verificado em 16/07/2026 em fontes oficiais; os preços são instantâneos, não valores fixos). Este guia explica o que verificar para uma capacidade local genuína e é um complemento de compra de hardware para o guia prático do Frigate já presente neste site.',
    metaDescription:
      'Melhores câmeras de segurança locais em 2027: modelos com armazenamento real no dispositivo ou em rede local, sem assinatura em nuvem obrigatória. Guia de compra, não um tutorial de configuração do Frigate.',
    twitterDescription:
      'Guia de compra de câmeras de segurança com armazenamento local — sem assinatura em nuvem necessária para a gravação básica. Complementa o guia prático do Frigate.',
    readTime: '7 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Compradores de casa inteligente que escolhem hardware de câmera com capacidade real de armazenamento local',
    primaryTerm: 'melhores cameras de seguranca locais',
    targetKeywords: [
      'melhores cameras de seguranca locais sem nuvem',
      'camera seguranca armazenamento local 2027',
      'camera seguranca sem assinatura',
      'camera onvif home assistant',
      'guia compra camera seguranca privacidade',
    ],
    leadAnswerBlock:
      '**As melhores câmeras de segurança locais suportam armazenamento no dispositivo (cartão SD/NVR) ou em rede local para a gravação básica sem exigir uma assinatura em nuvem, e idealmente expõem um protocolo de streaming local (RTSP/ONVIF) para que o Frigate ou o Home Assistant possam captar o stream diretamente.** A RLC-810A da Reolink (RTSP confirmado, sem assinatura para gravação em SD), o UniFi Protect + UNVR da Ubiquiti (299 $, NVR totalmente local), a linha PoE da Amcrest (amplo suporte a ONVIF Profile S/T) e o HomeBase 3 da Eufy (~149 $, armazenamento local, sem taxa mensal) são quatro opções atuais confirmadas — verificado em 16/07/2026, os preços são instantâneos.',
    quickAnswerTop: {
      pt: {
        question: 'Quais câmeras de segurança funcionam sem assinatura em nuvem?',
        answer:
          'Procure câmeras que suportem explicitamente o armazenamento local (cartão SD ou NVR) para a gravação básica, e idealmente um protocolo de streaming local aberto como RTSP ou ONVIF para que o Frigate possa captar o stream para detecção por IA sem nenhuma dependência de nuvem. Opções atuais confirmadas (verificado em 16/07/2026): as câmeras da Reolink trazem RTSP em todo modelo PoE/Wi-Fi sem exigir assinatura para a gravação local em SD/NVR; o UniFi Protect da Ubiquiti grava cada câmera em um NVR local (o UNVR Instant de entrada custa 199 $) sem taxa recorrente para as funções principais; a linha PoE da Amcrest tem amplo suporte a ONVIF Profile S/T para software NVR de terceiros; o hub HomeBase 3 da Eufy (~149 $) armazena as gravações localmente por padrão sem taxa mensal. Muitas outras marcas de consumo anunciam "armazenamento local" mas ainda exigem uma conta em nuvem mesmo para a visualização básica — verifique a documentação atual do fabricante, não o material de marketing, antes de comprar qualquer produto não listado aqui.',
        bullets: [
          'Necessário: opção de armazenamento local (cartão SD ou NVR) que funcione sem assinatura ativa',
          'Ideal: suporte a streaming local RTSP ou ONVIF, para integração com Frigate/Home Assistant',
          'Opções atuais confirmadas: Reolink (RTSP em todo modelo), UniFi Protect da Ubiquiti (NVR local, sem taxas por funções principais), Amcrest (amplo suporte ONVIF), Eufy (hub HomeBase local)',
          'Verificar: se a câmera exige uma conta em nuvem mesmo para uso puramente local — algumas marcas não listadas aqui exigem',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que verificar', anchor: 'what-to-check' },
      { label: 'Categorias de câmeras', anchor: 'camera-categories' },
      { label: 'Como isso difere do guia do Frigate', anchor: 'differs-from-frigate' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'As melhores câmeras de segurança locais suportam armazenamento local e idealmente streaming RTSP/ONVIF sem assinatura em nuvem obrigatória — verifique os modelos atuais concretos e sua capacidade local confirmada antes de comprar.' },
      { type: 'plain-terms', content: 'Muitas câmeras de segurança só funcionam de fato através do app e do serviço em nuvem do fabricante, mesmo que tecnicamente tenham um slot para cartão SD. Este guia busca encontrar câmeras em que o armazenamento local e o acesso local realmente funcionem como a forma principal de uso, e não como uma opção de backup limitada.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Necessário: armazenamento local (cartão SD ou NVR) utilizável sem assinatura em nuvem ativa',
          'Ideal: suporte a streaming RTSP ou ONVIF para integração direta com Frigate/Home Assistant',
          'Cuidado com: câmeras que exigem uma conta em nuvem mesmo para uma configuração puramente local — verifique a documentação atual, não o material de marketing',
          'Escolhas atuais confirmadas (verificado em 16/07/2026): Reolink RLC-810A, UniFi Protect + UNVR da Ubiquiti (299 $), linha PoE da Amcrest, Eufy HomeBase 3 (~149 $) — os preços são instantâneos, verifique a página vinculada antes de comprar',
          'Este é um guia de compra de hardware — veja o guia prático do Frigate para configurar a detecção local por IA depois que você tiver câmeras com capacidade local',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'O que verificar',
        content:
          '**Confirme três coisas antes de comprar: se o armazenamento local funciona sem assinatura ativa, se a câmera expõe RTSP ou ONVIF para acesso de terceiros, e se a configuração básica exige uma conta em nuvem.**',
        items: [
          'Armazenamento local sem assinatura: muitas câmeras incluem um slot para cartão SD, mas ainda assim restringem recursos conectados à nuvem (ou até mesmo a visualização de gravações recentes) atrás de um plano pago — verifique especificamente os termos atuais do fabricante sobre isso.',
          'Suporte a RTSP/ONVIF: isso é o que permite ao Frigate ou Home Assistant captar o stream da câmera diretamente para detecção local por IA — nem toda câmera de "armazenamento local" expõe isso; algumas restringem o stream apenas ao próprio app.',
          'Exigência de conta em nuvem: algumas câmeras exigem a criação de uma conta do fabricante mesmo que você nunca pretenda usar os recursos de nuvem — decida se essa troca (uma conta, sem necessariamente pagar ou armazenar gravações lá) é aceitável para sua configuração.',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'Categorias de câmeras',
        content:
          '**As câmeras com capacidade local geralmente se dividem em três categorias: sistemas baseados em NVR (gravação em um gravador local dedicado), câmeras Wi-Fi com suporte a RTSP/ONVIF, e câmeras PoE (Power over Ethernet) — cada uma com diferentes trade-offs de configuração.**',
        items: [
          'Sistemas baseados em NVR: geralmente a opção mais confiavelmente local, já que o próprio gravador é o armazenamento local e muitas vezes não exige nenhuma conta em nuvem para operação básica. O UniFi Protect da Ubiquiti é o exemplo mais claro: toda câmera grava em um NVR local (UNVR Instant, 199 $, até os níveis UNVR Pro/Enterprise para instalações maiores) sem taxa recorrente pelas funções principais, confirmado na própria loja da Ubiquiti.',
          'Câmeras Wi-Fi com RTSP/ONVIF: instalação sem fio conveniente. A Reolink traz RTSP em todo modelo PoE e Wi-Fi segundo sua própria documentação de suporte, e não restringe a gravação local em cartão SD atrás de uma assinatura — mas sempre verifique as notas de firmware atuais de um modelo específico, já que alguns fabricantes em outras partes do mercado removeram RTSP/ONVIF após o lançamento.',
          'Câmeras PoE: geralmente as mais confiáveis para gravação local contínua, já que energia e dados passam por um único cabo, ao custo de exigir switches de rede compatíveis com PoE. A linha PoE da Amcrest tem amplo suporte a ONVIF Profile S e T (segundo a própria documentação da Amcrest), comumente usada com software NVR de terceiros como Blue Iris ou Synology Surveillance Station, a um preço médio de cerca de 100 $ por câmera (verificado em 16/07/2026, varia por modelo).',
          'Sistemas de hub tudo-em-um: o HomeBase 3 da Eufy (S380, ~149 $) armazena gravações localmente por padrão em até 16 TB de armazenamento expansível, sem taxa mensal exigida — um meio-termo entre um NVR completo e uma única câmera autônoma, confirmado na própria página de produto da Eufy.',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'Como isso difere do guia do Frigate',
        content:
          '**Este artigo ajuda você a escolher o hardware da câmera; o guia do Frigate cobre a configuração do software de detecção local por IA depois que você tiver câmeras com capacidade local.**',
        items: [
          'Leia este guia primeiro se você ainda não possui câmeras com capacidade local e precisa escolher hardware.',
          'Acesse o guia de câmeras de segurança locais com IA usando o Frigate para a configuração de software — requisitos de hardware, integração com Home Assistant e configuração de detecção.',
          'Os dois são complementares: a escolha da câmera determina o que é possível; a configuração do Frigate determina o que você realmente configura.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Todas as câmeras com slot para cartão SD funcionam sem assinatura?', a: 'Não necessariamente — algumas restringem a visualização remota, notificações ou até mesmo a reprodução local atrás de uma assinatura baseada em app, apesar de terem hardware de armazenamento local. Verifique os termos atuais do fabricante específico.' },
          { q: 'O que é RTSP e por que isso importa?', a: 'RTSP (Real Time Streaming Protocol) é um padrão aberto para captar diretamente o stream de vídeo de uma câmera, o que permite ao Frigate ou Home Assistant acessar o feed sem passar pelo app ou serviço em nuvem do fabricante.' },
          { q: 'Câmeras PoE são melhores que câmeras Wi-Fi para isso?', a: 'Câmeras PoE geralmente são mais confiáveis para gravação local contínua, já que não dependem da estabilidade do Wi-Fi, mas exigem hardware de rede compatível com PoE. Câmeras Wi-Fi com suporte RTSP/ONVIF confirmado são um trade-off de instalação mais simples.' },
          { q: 'Posso adicionar câmeras locais a uma configuração de câmeras em nuvem existente?', a: 'Sim — você pode misturar tipos de câmera, usando câmeras com capacidade local com o Frigate para detecção por IA enquanto mantém quaisquer câmeras em nuvem existentes separadas, embora unificar tudo sob controle local seja mais simples de manter a longo prazo.' },
          { q: 'Uma configuração de câmera local precisa de acesso à internet?', a: 'Não — uma vez configurada, o armazenamento local e a detecção baseada em RTSP funcionam inteiramente na sua rede local, embora a configuração inicial de algumas câmeras ainda possa exigir uma conexão com a internet para firmware ou registro do app.' },
          { q: 'Onde eu configuro a detecção por IA depois que tenho câmeras locais?', a: 'Veja o guia de câmeras de segurança locais com IA usando o Frigate para a configuração do software de detecção, opções de aceleração de hardware e integração com Home Assistant.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Câmeras de segurança locais com IA usando o Frigate](/pt/smart-home/local-ai-security-camera) — a configuração de software que este hardware possibilita',
          '[Detecção de presença por radar: ocupação de ambientes sem câmera](/pt/smart-home/radar-presence-sensing-no-camera) — uma alternativa de detecção de presença sem câmera',
          '[Riscos de privacidade na casa inteligente](/pt/smart-home/smart-home-privacy-risks) — o contexto de privacidade mais amplo para a escolha de câmeras',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores câmeras de segurança locais (2027)',
      description: 'Melhores câmeras de segurança locais: modelos com armazenamento real no dispositivo ou em rede local, sem assinatura em nuvem obrigatória.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-local-security-cameras-2027',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'Câmera de segurança local' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Todas as câmeras com slot para cartão SD funcionam sem assinatura?', acceptedAnswer: { '@type': 'Answer', text: 'Não necessariamente — algumas restringem a visualização remota ou notificações atrás de uma assinatura baseada em app, apesar de terem hardware de armazenamento local.' } },
        { '@type': 'Question', name: 'O que é RTSP e por que isso importa?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP é um padrão aberto para captar diretamente o stream de vídeo de uma câmera, permitindo ao Frigate ou Home Assistant acessar o feed sem o serviço em nuvem do fabricante.' } },
        { '@type': 'Question', name: 'Uma configuração de câmera local precisa de acesso à internet?', acceptedAnswer: { '@type': 'Answer', text: 'Não — uma vez configurada, o armazenamento local e a detecção baseada em RTSP funcionam inteiramente na sua rede local.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-ar.webp',
    affiliateDisclosure: true,
    title: 'أفضل كاميرات المراقبة المحلية (⁨2027⁩)',
    seoTitle: 'أفضل كاميرات المراقبة المحلية (⁨2027⁩)',
    intro:
      'أفضل كاميرات المراقبة المحلية للمنزل الذكي الذي يركز على الخصوصية تخزّن اللقطات على الجهاز نفسه أو على تخزين الشبكة الخاص بك، دون الحاجة إلى اشتراك للتسجيل الأساسي. تقدم كل من Reolink وUbiquiti UniFi Protect وAmcrest وEufy خيارات مؤكدة للتخزين المحلي أو NVR محلي دون اشتراك سحابي إلزامي (تم التحقق في 16/07/2026 مقابل مصادر رسمية؛ الأسعار لقطات لحظية وليست أرقامًا ثابتة). يغطي هذا الدليل ما يجب التحقق منه للحصول على قدرة محلية حقيقية، وهو مكمل لشراء الأجهزة لدليل Frigate العملي الموجود بالفعل على هذا الموقع.',
    metaDescription:
      'أفضل كاميرات المراقبة المحلية في 2027: طرازات ذات تخزين حقيقي على الجهاز أو على الشبكة المحلية، دون اشتراك سحابي إلزامي. دليل شراء، وليس درسًا تعليميًا لإعداد Frigate.',
    twitterDescription:
      'دليل شراء لكاميرات المراقبة ذات التخزين المحلي — لا حاجة لاشتراك سحابي للتسجيل الأساسي. يكمّل دليل Frigate العملي.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مشترو المنازل الذكية الذين يختارون أجهزة كاميرات ذات قدرة تخزين محلية حقيقية',
    primaryTerm: 'أفضل كاميرات مراقبة محلية',
    targetKeywords: [
      'أفضل كاميرات مراقبة محلية بدون سحابة',
      'كاميرا مراقبة تخزين محلي 2027',
      'كاميرا مراقبة بدون اشتراك',
      'كاميرا onvif home assistant',
      'دليل شراء كاميرا مراقبة خصوصية',
    ],
    leadAnswerBlock:
      '**أفضل كاميرات المراقبة المحلية تدعم التخزين على الجهاز (بطاقة SD/NVR) أو التخزين على الشبكة المحلية للتسجيل الأساسي دون الحاجة إلى اشتراك سحابي، ومن الناحية المثالية توفر بروتوكول بث محلي (RTSP/ONVIF) بحيث يمكن لـ Frigate أو Home Assistant سحب البث مباشرة.** كاميرا RLC-810A من Reolink (RTSP مؤكد، دون اشتراك للتسجيل على بطاقة SD)، وUniFi Protect + UNVR من Ubiquiti (299 دولارًا، NVR محلي بالكامل)، وخط PoE من Amcrest (دعم واسع لـ ONVIF Profile S/T)، وHomeBase 3 من Eufy (~149 دولارًا، تخزين محلي، دون رسوم شهرية) هي أربعة خيارات حالية مؤكدة — تم التحقق في 16/07/2026، والأسعار لقطات لحظية.',
    quickAnswerTop: {
      ar: {
        question: 'ما هي كاميرات المراقبة التي تعمل دون اشتراك سحابي؟',
        answer:
          'ابحث عن كاميرات تدعم صراحةً التخزين المحلي (بطاقة SD أو NVR) للتسجيل الأساسي، ومن الناحية المثالية بروتوكول بث محلي مفتوح مثل RTSP أو ONVIF بحيث يمكن لـ Frigate سحب البث لكشف الحركة بالذكاء الاصطناعي دون أي اعتماد على السحابة. الخيارات الحالية المؤكدة (تم التحقق في 16/07/2026): تأتي كاميرات Reolink مزودة بـ RTSP في كل طراز PoE/Wi-Fi دون الحاجة إلى اشتراك للتسجيل المحلي على SD/NVR؛ يسجل UniFi Protect من Ubiquiti كل كاميرا على NVR محلي (يبلغ سعر UNVR Instant للمستوى الأساسي 199 دولارًا) دون رسوم متكررة للوظائف الأساسية؛ يتمتع خط PoE من Amcrest بدعم واسع لـ ONVIF Profile S/T لبرامج NVR من جهات خارجية؛ يخزّن محور HomeBase 3 من Eufy (~149 دولارًا) اللقطات محليًا افتراضيًا دون رسوم شهرية. تسوّق العديد من العلامات التجارية الاستهلاكية الأخرى لفكرة "التخزين المحلي" مع أنها لا تزال تتطلب حسابًا سحابيًا حتى للعرض الأساسي — تحقق من الوثائق الحالية للشركة المصنعة، وليس من نصوص التسويق، قبل شراء أي منتج غير مدرج هنا.',
        bullets: [
          'مطلوب: خيار تخزين محلي (بطاقة SD أو NVR) يعمل دون اشتراك نشط',
          'مثالي: دعم البث المحلي عبر RTSP أو ONVIF، للتكامل مع Frigate/Home Assistant',
          'الخيارات الحالية المؤكدة: Reolink (RTSP في كل طراز)، UniFi Protect من Ubiquiti (NVR محلي، دون رسوم للوظائف الأساسية)، Amcrest (دعم واسع لـ ONVIF)، Eufy (محور HomeBase محلي)',
          'تحقق: هل تتطلب الكاميرا حسابًا سحابيًا حتى للاستخدام المحلي البحت — بعض العلامات التجارية غير المدرجة هنا تفعل ذلك',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما الذي يجب التحقق منه', anchor: 'what-to-check' },
      { label: 'فئات الكاميرات', anchor: 'camera-categories' },
      { label: 'كيف يختلف هذا عن دليل Frigate', anchor: 'differs-from-frigate' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'أفضل كاميرات المراقبة المحلية تدعم التخزين المحلي، ومن الناحية المثالية بث RTSP/ONVIF دون اشتراك سحابي إلزامي — تحقق من الطرازات الحالية المحددة وقدرتها المحلية المؤكدة قبل الشراء.' },
      { type: 'plain-terms', content: 'العديد من كاميرات المراقبة لا تعمل فعليًا إلا من خلال تطبيق الشركة المصنعة وخدمتها السحابية، حتى وإن كانت تقنيًا تحتوي على فتحة بطاقة SD. يهدف هذا الدليل إلى إيجاد الكاميرات التي يعمل فيها التخزين المحلي والوصول المحلي فعليًا كطريقة الاستخدام الأساسية، وليس كخيار احتياطي محدود.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'مطلوب: تخزين محلي (بطاقة SD أو NVR) قابل للاستخدام دون اشتراك سحابي نشط',
          'مثالي: دعم بث RTSP أو ONVIF للتكامل المباشر مع Frigate/Home Assistant',
          'انتبه لـ: الكاميرات التي تتطلب حسابًا سحابيًا حتى للإعداد المحلي البحت — تحقق من الوثائق الحالية، وليس من نصوص التسويق',
          'الاختيارات الحالية المؤكدة (تم التحقق في 16/07/2026): Reolink RLC-810A، وUniFi Protect + UNVR من Ubiquiti (299 دولارًا)، وخط PoE من Amcrest، وEufy HomeBase 3 (~149 دولارًا) — الأسعار لقطات لحظية، تحقق من الصفحة المرتبطة قبل الشراء',
          'هذا دليل شراء أجهزة — راجع دليل Frigate العملي لإعداد كشف الحركة المحلي بالذكاء الاصطناعي بمجرد امتلاكك لكاميرات ذات قدرة محلية',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: 'ما الذي يجب التحقق منه',
        content:
          '**تأكد من ثلاثة أمور قبل الشراء: هل يعمل التخزين المحلي دون اشتراك نشط، وهل تعرض الكاميرا RTSP أو ONVIF للوصول من جهات خارجية، وهل يتطلب الإعداد الأساسي حسابًا سحابيًا من الأساس.**',
        items: [
          'التخزين المحلي دون اشتراك: تتضمن العديد من الكاميرات فتحة بطاقة SD لكنها لا تزال تحصر الميزات المتصلة بالسحابة (أو حتى عرض اللقطات الأخيرة) خلف خطة مدفوعة — تحقق من شروط الشركة المصنعة الحالية على وجه التحديد بشأن هذا الأمر.',
          'دعم RTSP/ONVIF: هذا ما يسمح لـ Frigate أو Home Assistant بسحب بث الكاميرا مباشرة لكشف الحركة المحلي بالذكاء الاصطناعي — ليست كل كاميرا "تخزين محلي" تعرض هذا؛ بعضها يقصر البث على تطبيقها الخاص فقط.',
          'متطلب الحساب السحابي: تتطلب بعض الكاميرات إنشاء حساب لدى الشركة المصنعة حتى لو لم تكن تنوي أبدًا استخدام ميزاتها السحابية — قرر ما إذا كانت هذه المفاضلة (حساب، دون الحاجة بالضرورة للدفع أو تخزين اللقطات هناك) مقبولة لإعدادك.',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: 'فئات الكاميرات',
        content:
          '**تنقسم الكاميرات ذات القدرة المحلية عمومًا إلى ثلاث فئات: الأنظمة القائمة على NVR (التسجيل على مسجل محلي مخصص)، وكاميرات Wi-Fi التي تدعم RTSP/ONVIF، وكاميرات PoE (الطاقة عبر الإيثرنت) — لكل منها مفاضلات إعداد مختلفة.**',
        items: [
          'الأنظمة القائمة على NVR: عادةً الخيار الأكثر موثوقية من حيث كونه محليًا بالكامل، لأن المسجل نفسه هو التخزين المحلي وغالبًا لا يتطلب أي حساب سحابي للتشغيل الأساسي. يُعد UniFi Protect من Ubiquiti أوضح مثال: تسجل كل كاميرا على NVR محلي (UNVR Instant، 199 دولارًا، وصولًا إلى مستويات UNVR Pro/Enterprise للتركيبات الأكبر) دون رسوم متكررة للوظائف الأساسية، وهذا مؤكد على متجر Ubiquiti الرسمي.',
          'كاميرات Wi-Fi مع RTSP/ONVIF: تركيب لاسلكي مريح. تأتي كاميرات Reolink مزودة بـ RTSP في كل طراز PoE وWi-Fi وفقًا لوثائق الدعم الخاصة بها، ولا تحصر التسجيل المحلي على بطاقة SD خلف اشتراك — لكن تحقق دائمًا من ملاحظات البرامج الثابتة الحالية لطراز محدد، إذ أزالت بعض الشركات المصنعة في أماكن أخرى من السوق دعم RTSP/ONVIF بعد الإطلاق.',
          'كاميرات PoE: عمومًا الأكثر موثوقية للتسجيل المحلي المستمر لأن الطاقة والبيانات تمران عبر كابل واحد، مقابل الحاجة إلى مفاتيح شبكة تدعم PoE. يتمتع خط PoE من Amcrest بدعم واسع لـ ONVIF Profile S وT (وفقًا لوثائق Amcrest الخاصة)، ويُستخدم بشكل شائع مع برامج NVR من جهات خارجية مثل Blue Iris أو Synology Surveillance Station، بمتوسط سعر يبلغ حوالي 100 دولار لكل كاميرا (تم التحقق في 16/07/2026، يختلف حسب الطراز).',
          'أنظمة المحور الشاملة: يخزّن HomeBase 3 من Eufy (S380، ~149 دولارًا) اللقطات محليًا افتراضيًا على ما يصل إلى 16 تيرابايت من التخزين القابل للتوسيع، دون رسوم شهرية مطلوبة — حل وسط بين NVR كامل وكاميرا مستقلة واحدة، وهذا مؤكد على صفحة منتج Eufy الرسمية.',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'كيف يختلف هذا عن دليل Frigate',
        content:
          '**يساعدك هذا المقال على اختيار أجهزة الكاميرا؛ ويغطي دليل Frigate إعداد برنامج كشف الحركة المحلي بالذكاء الاصطناعي بمجرد امتلاكك لكاميرات ذات قدرة محلية.**',
        items: [
          'اقرأ هذا الدليل أولًا إذا كنت لا تمتلك بعد كاميرات ذات قدرة محلية وتحتاج إلى اختيار الأجهزة.',
          'انتقل إلى دليل كاميرات المراقبة المحلية بالذكاء الاصطناعي باستخدام Frigate لإعداد البرنامج — متطلبات الأجهزة، وتكامل Home Assistant، وضبط إعدادات الكشف.',
          'يكمّل الدليلان بعضهما البعض: اختيار الكاميرا يحدد ما هو ممكن؛ وإعداد Frigate يحدد ما تقوم بضبطه فعليًا.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل تعمل جميع الكاميرات ذات فتحة بطاقة SD دون اشتراك؟', a: 'ليس بالضرورة — بعضها يحصر العرض عن بُعد أو الإشعارات أو حتى التشغيل المحلي خلف اشتراك قائم على تطبيق، رغم امتلاكها لأجهزة تخزين محلي. تحقق من الشروط الحالية للشركة المصنعة المحددة.' },
          { q: 'ما هو RTSP ولماذا يهم؟', a: 'RTSP (بروتوكول البث في الوقت الفعلي) هو معيار مفتوح لسحب بث فيديو الكاميرا مباشرة، وهو ما يتيح لـ Frigate أو Home Assistant الوصول إلى البث دون المرور عبر تطبيق الشركة المصنعة أو خدمتها السحابية.' },
          { q: 'هل كاميرات PoE أفضل من كاميرات Wi-Fi لهذا الغرض؟', a: 'كاميرات PoE عمومًا أكثر موثوقية للتسجيل المحلي المستمر لأنها لا تعتمد على استقرار Wi-Fi، لكنها تتطلب أجهزة شبكة تدعم PoE. تُعد كاميرات Wi-Fi ذات دعم RTSP/ONVIF المؤكد مفاضلة تركيب أبسط.' },
          { q: 'هل يمكنني إضافة كاميرات محلية إلى إعداد كاميرات سحابية موجود؟', a: 'نعم — يمكنك مزج أنواع الكاميرات، باستخدام الكاميرات ذات القدرة المحلية مع Frigate لكشف الحركة بالذكاء الاصطناعي مع إبقاء أي كاميرات سحابية موجودة منفصلة، رغم أن توحيد كل شيء تحت التحكم المحلي أبسط في الصيانة على المدى الطويل.' },
          { q: 'هل يحتاج إعداد الكاميرا المحلية إلى الوصول إلى الإنترنت؟', a: 'لا — بمجرد التهيئة، يعمل التخزين المحلي والكشف المعتمد على RTSP بالكامل على شبكتك المحلية، رغم أن الإعداد الأولي لبعض الكاميرات قد لا يزال يتطلب اتصالًا بالإنترنت للبرامج الثابتة أو تسجيل التطبيق.' },
          { q: 'أين أُعد كشف الحركة بالذكاء الاصطناعي بمجرد امتلاكي لكاميرات محلية؟', a: 'راجع دليل كاميرات المراقبة المحلية بالذكاء الاصطناعي باستخدام Frigate لإعداد برنامج الكشف، وخيارات تسريع الأجهزة، وتكامل Home Assistant.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[كاميرات المراقبة المحلية بالذكاء الاصطناعي باستخدام Frigate](/ar/smart-home/local-ai-security-camera) — إعداد البرنامج الذي تتيحه هذه الأجهزة',
          '[استشعار الحضور بالرادار: شغل الغرفة دون كاميرا](/ar/smart-home/radar-presence-sensing-no-camera) — بديل لاستشعار الحضور بدون كاميرا',
          '[مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks) — السياق الأوسع للخصوصية عند اختيار الكاميرات',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل كاميرات المراقبة المحلية (⁨2027⁩)',
      description: 'أفضل كاميرات المراقبة المحلية: طرازات ذات تخزين حقيقي على الجهاز أو على الشبكة المحلية، دون اشتراك سحابي إلزامي.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-local-security-cameras-2027',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: 'كاميرا مراقبة محلية' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل تعمل جميع الكاميرات ذات فتحة بطاقة SD دون اشتراك؟', acceptedAnswer: { '@type': 'Answer', text: 'ليس بالضرورة — بعضها يحصر العرض عن بُعد أو الإشعارات خلف اشتراك قائم على تطبيق، رغم امتلاكها لأجهزة تخزين محلي.' } },
        { '@type': 'Question', name: 'ما هو RTSP ولماذا يهم؟', acceptedAnswer: { '@type': 'Answer', text: 'RTSP هو معيار مفتوح لسحب بث فيديو الكاميرا مباشرة، مما يتيح لـ Frigate أو Home Assistant الوصول إلى البث دون خدمة الشركة المصنعة السحابية.' } },
        { '@type': 'Question', name: 'هل يحتاج إعداد الكاميرا المحلية إلى الوصول إلى الإنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'لا — بمجرد التهيئة، يعمل التخزين المحلي والكشف المعتمد على RTSP بالكامل على شبكتك المحلية.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-07-16',
    next_refresh_due: '2027-01-16',
    theme: "Buyer's Guides",
    heroImage: '/images/best-local-security-cameras-2027-overview-hero-ko.webp',
    affiliateDisclosure: true,
    title: '최고의 로컬 보안 카메라 (2027년)',
    seoTitle: '최고의 로컬 보안 카메라 (2027년)',
    intro:
      '프라이버시를 중시하는 스마트홈을 위한 최고의 로컬 보안 카메라는 기본 녹화에 구독이 필요하지 않고 영상을 기기 자체 또는 자체 네트워크 저장소에 저장합니다. Reolink, Ubiquiti UniFi Protect, Amcrest, Eufy는 각각 필수 클라우드 구독 없이 사용할 수 있는 확인된 로컬 저장소 또는 로컬 NVR 옵션을 제공합니다(2026년 7월 16일 공식 출처 대비 확인됨; 가격은 특정 시점의 스냅샷이며 고정된 수치가 아닙니다). 이 가이드는 진정한 로컬 기능을 확인하는 방법을 다루며, 이 사이트에 이미 있는 Frigate 사용법 가이드를 보완하는 하드웨어 구매 가이드입니다.',
    metaDescription:
      '2027년 최고의 로컬 보안 카메라: 진정한 온디바이스 또는 로컬 네트워크 저장소를 갖춘, 필수 클라우드 구독이 없는 모델. Frigate 설정 튜토리얼이 아닌 구매 가이드입니다.',
    twitterDescription:
      '로컬 저장소 보안 카메라 구매 가이드 — 기본 녹화에 클라우드 구독이 필요하지 않습니다. Frigate 사용법 가이드를 보완합니다.',
    readTime: '7분 소요',
    educationalLevel: 'Beginner',
    audience: '진정한 로컬 저장 기능을 갖춘 카메라 하드웨어를 선택하는 스마트홈 구매자',
    primaryTerm: '최고의 로컬 보안 카메라',
    targetKeywords: [
      '최고의 로컬 보안 카메라 클라우드 없음',
      '보안 카메라 로컬 저장소 2027',
      '보안 카메라 구독 없음',
      'onvif 카메라 home assistant',
      '프라이버시 보안 카메라 구매 가이드',
    ],
    leadAnswerBlock:
      '**최고의 로컬 보안 카메라는 클라우드 구독 없이 기본 녹화를 위한 온디바이스(SD 카드/NVR) 또는 로컬 네트워크 저장소를 지원하며, 이상적으로는 Frigate나 Home Assistant가 피드를 직접 가져올 수 있도록 로컬 스트리밍 프로토콜(RTSP/ONVIF)을 제공합니다.** Reolink의 RLC-810A(RTSP 확인됨, SD 녹화에 구독 불필요), Ubiquiti의 UniFi Protect + UNVR(299달러, 완전한 로컬 NVR), Amcrest의 PoE 라인업(광범위한 ONVIF Profile S/T 지원), Eufy의 HomeBase 3(~149달러, 로컬 저장소, 월 요금 없음)가 확인된 네 가지 현재 옵션입니다 — 2026년 7월 16일 확인됨, 가격은 스냅샷입니다.',
    quickAnswerTop: {
      ko: {
        question: '클라우드 구독 없이 작동하는 보안 카메라는 무엇인가요?',
        answer:
          '기본 녹화를 위해 로컬 저장소(SD 카드 또는 NVR)를 명시적으로 지원하고, 이상적으로는 RTSP나 ONVIF 같은 개방형 로컬 스트리밍 프로토콜을 지원하여 Frigate가 클라우드 의존 없이 AI 감지를 위한 피드를 가져올 수 있는 카메라를 찾으세요. 확인된 현재 옵션(2026년 7월 16일 확인됨): Reolink의 카메라는 모든 PoE/Wi-Fi 모델에서 로컬 SD/NVR 녹화에 구독이 필요 없이 RTSP를 제공합니다; Ubiquiti의 UniFi Protect는 모든 카메라를 로컬 NVR에 녹화하며(입문형 UNVR Instant는 199달러) 핵심 기능에 반복 요금이 없습니다; Amcrest의 PoE 라인업은 서드파티 NVR 소프트웨어를 위한 ONVIF Profile S/T를 광범위하게 지원합니다; Eufy의 HomeBase 3 허브(~149달러)는 기본적으로 월 요금 없이 영상을 로컬에 저장합니다. 다른 많은 소비자 브랜드들은 "로컬 저장소"를 홍보하면서도 기본 시청에조차 클라우드 계정을 요구합니다 — 여기에 나열되지 않은 제품을 구매하기 전에는 마케팅 문구가 아니라 제조사의 현재 문서를 확인하세요.',
        bullets: [
          '필수: 활성 구독 없이 작동하는 로컬 저장소 옵션(SD 카드 또는 NVR)',
          '이상적: Frigate/Home Assistant 연동을 위한 RTSP 또는 ONVIF 로컬 스트리밍 지원',
          '확인된 현재 옵션: Reolink(모든 모델에서 RTSP), Ubiquiti UniFi Protect(로컬 NVR, 핵심 기능 요금 없음), Amcrest(광범위한 ONVIF 지원), Eufy(로컬 HomeBase 허브)',
          '확인 사항: 순수 로컬 사용에도 카메라가 클라우드 계정을 요구하는지 — 여기에 나열되지 않은 일부 브랜드는 그렇습니다',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '확인해야 할 사항', anchor: 'what-to-check' },
      { label: '카메라 카테고리', anchor: 'camera-categories' },
      { label: 'Frigate 가이드와의 차이', anchor: 'differs-from-frigate' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '최고의 로컬 보안 카메라는 필수 클라우드 구독 없이 로컬 저장소와 이상적으로는 RTSP/ONVIF 스트리밍을 지원합니다 — 구매 전 구체적인 현재 모델과 그 확인된 로컬 기능을 확인하세요.' },
      { type: 'plain-terms', content: '많은 보안 카메라는 기술적으로 SD 카드 슬롯을 갖추고 있어도 실제로는 제조사의 앱과 클라우드 서비스를 통해서만 제대로 작동합니다. 이 가이드는 로컬 저장소와 로컬 접근이 제한된 백업 옵션이 아니라 카메라를 사용하는 주된 방식으로 실제로 작동하는 카메라를 찾는 것을 목표로 합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '필수: 활성 클라우드 구독 없이 사용할 수 있는 로컬 저장소(SD 카드 또는 NVR)',
          '이상적: Frigate/Home Assistant와의 직접 연동을 위한 RTSP 또는 ONVIF 스트리밍 지원',
          '주의할 점: 순수 로컬 설정에도 클라우드 계정을 요구하는 카메라 — 마케팅 문구가 아니라 현재 문서를 확인할 것',
          '확인된 현재 추천 제품(2026년 7월 16일 확인됨): Reolink RLC-810A, Ubiquiti UniFi Protect + UNVR(299달러), Amcrest PoE 라인업, Eufy HomeBase 3(~149달러) — 가격은 스냅샷이므로 구매 전 링크된 페이지를 확인하세요',
          '이것은 하드웨어 구매 가이드입니다 — 로컬 기능을 갖춘 카메라를 확보한 후 로컬 AI 감지를 설정하는 방법은 Frigate 사용법 가이드를 참고하세요',
        ],
      },
      whatToCheck: {
        id: 'what-to-check',
        title: '확인해야 할 사항',
        content:
          '**구매 전 세 가지를 확인하세요: 활성 구독 없이 로컬 저장소가 작동하는지, 카메라가 서드파티 접근을 위해 RTSP나 ONVIF를 제공하는지, 그리고 기본 설정에 클라우드 계정이 아예 필요한지 여부입니다.**',
        items: [
          '구독 없는 로컬 저장소: 많은 카메라에 SD 카드 슬롯이 있지만, 클라우드 연결 기능(또는 최근 영상을 보는 것조차)을 유료 요금제 뒤에 가두는 경우가 있습니다 — 이 부분에 대해 제조사의 현재 약관을 구체적으로 확인하세요.',
          'RTSP/ONVIF 지원: 이것은 Frigate나 Home Assistant가 로컬 AI 감지를 위해 카메라 피드를 직접 가져올 수 있게 해줍니다 — 모든 "로컬 저장소" 카메라가 이를 제공하는 것은 아니며, 일부는 스트림을 자체 앱으로만 제한합니다.',
          '클라우드 계정 요구 사항: 일부 카메라는 클라우드 기능을 전혀 사용할 의도가 없어도 제조사 계정 생성을 요구합니다 — 이런 절충안(반드시 결제하거나 영상을 저장하지 않더라도 계정을 만드는 것)이 자신의 설정에 허용 가능한지 판단하세요.',
        ],
      },
      cameraCategories: {
        id: 'camera-categories',
        title: '카메라 카테고리',
        content:
          '**로컬 기능을 갖춘 카메라는 대체로 세 가지 카테고리로 나뉩니다: NVR 기반 시스템(전용 로컬 레코더에 녹화), RTSP/ONVIF를 지원하는 Wi-Fi 카메라, 그리고 PoE(Power over Ethernet) 카메라 — 각각 설정 방식에 다른 장단점이 있습니다.**',
        items: [
          'NVR 기반 시스템: 레코더 자체가 로컬 저장소이며 기본 작동에 클라우드 계정이 필요하지 않은 경우가 많아, 일반적으로 가장 신뢰할 수 있는 로컬 우선 옵션입니다. Ubiquiti의 UniFi Protect가 가장 명확한 예로, 모든 카메라가 로컬 NVR에 녹화되며(UNVR Instant는 199달러, 대규모 설치를 위한 UNVR Pro/Enterprise 등급까지) 핵심 기능에 반복 요금이 없다는 점이 Ubiquiti 자체 스토어에서 확인됩니다.',
          'RTSP/ONVIF를 지원하는 Wi-Fi 카메라: 편리한 무선 설치. Reolink는 자체 지원 문서에 따르면 모든 PoE 및 Wi-Fi 모델에서 RTSP를 제공하며 로컬 SD 카드 녹화를 구독 뒤에 가두지 않습니다 — 하지만 시장의 다른 일부 제조사들이 출시 후 RTSP/ONVIF를 제거한 사례가 있으므로 특정 모델의 현재 펌웨어 노트를 항상 확인하세요.',
          'PoE 카메라: 전원과 데이터가 하나의 케이블로 전달되기 때문에 일반적으로 지속적인 로컬 녹화에 가장 신뢰할 수 있지만, PoE를 지원하는 네트워크 스위치가 필요합니다. Amcrest의 PoE 라인업은 (Amcrest 자체 문서에 따르면) ONVIF Profile S 및 T를 광범위하게 지원하며, Blue Iris나 Synology Surveillance Station 같은 서드파티 NVR 소프트웨어와 함께 흔히 사용되고, 평균 가격은 카메라 1대당 약 100달러입니다(2026년 7월 16일 확인됨, 모델에 따라 다름).',
          '올인원 허브 시스템: Eufy의 HomeBase 3(S380, ~149달러)는 기본적으로 최대 16TB까지 확장 가능한 저장소에 영상을 로컬로 저장하며 월 요금이 필요하지 않습니다 — 완전한 NVR과 단일 독립형 카메라 사이의 중간 지점으로, Eufy 자체 제품 페이지에서 확인됩니다.',
        ],
        affiliateLinks: [
          { label: 'Reolink RLC-810A', url: 'https://reolink.com/product/rlc-810a/', productName: 'Reolink RLC-810A', productCategory: 'PoE security camera' },
          { label: 'Ubiquiti UniFi Protect NVR', url: 'https://store.ui.com/us/en/products/unvr', productName: 'Ubiquiti UNVR', productCategory: 'Network video recorder' },
          { label: 'Amcrest PoE Cameras', url: 'https://amcrest.com/ip-cameras/poe-cameras.html', productName: 'Amcrest PoE IP Camera', productCategory: 'PoE security camera' },
          { label: 'Eufy HomeBase 3 (S380)', url: 'https://www.eufy.com/products/t80301d1', productName: 'Eufy HomeBase 3', productCategory: 'Local storage hub' },
        ],
      },
      differsFromFrigate: {
        id: 'differs-from-frigate',
        title: 'Frigate 가이드와의 차이',
        content:
          '**이 글은 카메라 하드웨어를 선택하는 데 도움을 주고, Frigate 가이드는 로컬 기능을 갖춘 카메라를 확보한 후 로컬 AI 감지 소프트웨어를 설정하는 방법을 다룹니다.**',
        items: [
          '아직 로컬 기능을 갖춘 카메라가 없고 하드웨어를 선택해야 한다면 이 가이드를 먼저 읽으세요.',
          '소프트웨어 설정 — 하드웨어 요구 사항, Home Assistant 연동, 감지 구성 — 에 대해서는 Frigate를 이용한 로컬 AI 보안 카메라 가이드를 참고하세요.',
          '두 가이드는 서로 보완합니다: 카메라 선택은 무엇이 가능한지를 결정하고, Frigate 설정은 실제로 무엇을 구성하는지를 결정합니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'SD 카드 슬롯이 있는 모든 카메라가 구독 없이 작동하나요?', a: '반드시 그런 것은 아닙니다 — 로컬 저장 하드웨어를 갖추고 있음에도 일부는 원격 시청, 알림, 심지어 로컬 재생까지 앱 기반 구독 뒤에 가둡니다. 해당 제조사의 현재 약관을 확인하세요.' },
          { q: 'RTSP란 무엇이고 왜 중요한가요?', a: 'RTSP(실시간 스트리밍 프로토콜)는 카메라의 영상 스트림을 직접 가져오기 위한 개방형 표준으로, 이를 통해 Frigate나 Home Assistant가 제조사의 앱이나 클라우드 서비스를 거치지 않고 피드에 접근할 수 있습니다.' },
          { q: '이런 용도에는 PoE 카메라가 Wi-Fi 카메라보다 나은가요?', a: 'PoE 카메라는 Wi-Fi 안정성에 의존하지 않기 때문에 지속적인 로컬 녹화에 일반적으로 더 신뢰할 수 있지만, PoE를 지원하는 네트워크 하드웨어가 필요합니다. RTSP/ONVIF 지원이 확인된 Wi-Fi 카메라는 더 간단한 설치 절충안입니다.' },
          { q: '기존 클라우드 카메라 설정에 로컬 카메라를 추가할 수 있나요?', a: '네 — 카메라 유형을 혼합할 수 있으며, 로컬 기능을 갖춘 카메라는 AI 감지를 위해 Frigate와 함께 사용하면서 기존 클라우드 카메라는 별도로 유지할 수 있습니다. 다만 모든 것을 로컬 제어 아래 통합하는 것이 장기적으로 유지 관리가 더 간단합니다.' },
          { q: '로컬 카메라 설정에 인터넷 접속이 필요한가요?', a: '아니요 — 설정이 완료되면 로컬 저장소와 RTSP 기반 감지는 전적으로 로컬 네트워크에서 작동합니다. 다만 일부 카메라의 초기 설정은 펌웨어나 앱 등록을 위해 여전히 인터넷 연결이 필요할 수 있습니다.' },
          { q: '로컬 카메라를 확보한 후 AI 감지는 어디에서 설정하나요?', a: '감지 소프트웨어 설정, 하드웨어 가속 옵션, Home Assistant 연동에 대해서는 Frigate를 이용한 로컬 AI 보안 카메라 가이드를 참고하세요.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Frigate를 이용한 로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera) — 이 하드웨어가 가능하게 하는 소프트웨어 설정',
          '[레이더 존재 감지: 카메라 없는 방 점유 확인](/ko/smart-home/radar-presence-sensing-no-camera) — 카메라 없는 존재 감지 대안',
          '[스마트홈 프라이버시 위험](/ko/smart-home/smart-home-privacy-risks) — 카메라 선택을 위한 더 넓은 프라이버시 맥락',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '최고의 로컬 보안 카메라 (2027년)',
      description: '최고의 로컬 보안 카메라: 진정한 온디바이스 또는 로컬 네트워크 저장소를 갖춘, 필수 클라우드 구독이 없는 모델.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-local-security-cameras-2027',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      about: [{ '@type': 'Thing', name: '로컬 보안 카메라' }, { '@type': 'Thing', name: 'RTSP' }, { '@type': 'Thing', name: 'ONVIF' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'SD 카드 슬롯이 있는 모든 카메라가 구독 없이 작동하나요?', acceptedAnswer: { '@type': 'Answer', text: '반드시 그런 것은 아닙니다 — 로컬 저장 하드웨어를 갖추고 있음에도 일부는 원격 시청이나 알림을 앱 기반 구독 뒤에 가둡니다.' } },
        { '@type': 'Question', name: 'RTSP란 무엇이고 왜 중요한가요?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP는 카메라의 영상 스트림을 직접 가져오기 위한 개방형 표준으로, Frigate나 Home Assistant가 제조사의 클라우드 서비스 없이 피드에 접근할 수 있게 해줍니다.' } },
        { '@type': 'Question', name: '로컬 카메라 설정에 인터넷 접속이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요 — 설정이 완료되면 로컬 저장소와 RTSP 기반 감지는 전적으로 로컬 네트워크에서 작동합니다.' } },
      ],
    },
  },
}
