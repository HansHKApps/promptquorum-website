import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-en.webp',
    title: 'Thread and Wi-Fi 7 Routers for Smart Homes (2026)',
    seoTitle: 'Thread + Wi-Fi 7 Routers for Smart Homes (2026)',
    // Refreshed 2026-10-18: Thread 1.4.0 (Sept 2024) is current, sole Border Router certification path
    // since Jan 1, 2026 (threadgroup.org). Border-router device families from the Matter Alpha directory
    // (Oct 2026), which does not state a Thread version per product. Credential sharing is mandatory for
    // 1.4 border routers (Espressif). Wi-Fi 8 (802.11bn) not ratified, expected ~2028. No prices asserted.
    intro:
      'A smart home network needs two layers: a Thread border router that bridges low-power Thread devices (locks, sensors, some lighting) to your network, and Wi-Fi with enough bandwidth and low latency for cameras and voice. Thread 1.4 and Wi-Fi 7 (802.11be) are both current, but they are separate features: several Wi-Fi mesh systems, such as the eero 7 line and Google Nest Wifi Pro, double as Thread border routers, while a Wi-Fi 7 label alone says nothing about Thread. This guide shows which device families qualify, what Thread 1.4 changes, and what to check before you buy.',
    metaDescription:
      'Which routers are Thread border routers? Thread 1.4 explained, which Wi-Fi mesh systems and hubs qualify, and what smart home Wi-Fi 7 really needs.',
    twitterDescription:
      'A Wi-Fi 7 label does not make a router a Thread border router. Which mesh systems and hubs qualify, what Thread 1.4 changes, and what smart home Wi-Fi needs.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Smart home owners choosing a router or Thread border router',
    primaryTerm: 'thread border router wifi smart home',
    targetKeywords: [
      'thread border router wifi router',
      'best router for smart home 2027',
      'wifi 7 smart home camera bandwidth',
      'thread mesh network smart home',
      'home assistant thread border router',
    ],
    leadAnswerBlock:
      '**A Wi-Fi 7 router is not automatically a Thread border router: eero 7-series mesh systems and Google Nest Wifi Pro are listed as Thread border routers, but the Wi-Fi generation says nothing about Thread, so confirm Thread border router support on the vendor\'s spec sheet before buying. Since 1 January 2026 every newly certified border router must meet Thread 1.4, which lets border routers from different brands share one Thread network.**',
    quickAnswerTop: {
      en: {
        question: 'Do I need a Wi-Fi 7 router and a Thread border router for my smart home?',
        answer: 'You need a Thread border router only if you use Thread devices (many newer locks, sensors and some lighting). It is often already built into a smart speaker, display, Apple TV, Google TV Streamer or hub you own, and some mesh Wi-Fi systems such as the eero 7 line and Google Nest Wifi Pro include one. You do not need Wi-Fi 7 for Thread; Wi-Fi 7 matters mainly for camera bandwidth and many simultaneous clients.',
        bullets: [
          'Thread border router: check speakers, displays, Apple TV and hubs you own first',
          'Wi-Fi 7 does not imply Thread support: look for the Thread border router listing',
          'Thread 1.4 border routers share one Thread network across brands',
          'Wi-Fi priority: bandwidth and latency for your camera and voice load, plus 2.4 GHz coverage for sensors',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What a Thread Border Router Does', anchor: 'thread-border-router' },
      { label: 'Which Devices Are Thread Border Routers', anchor: 'border-router-devices' },
      { label: 'What Thread 1.4 Changes', anchor: 'thread-14' },
      { label: 'What Your Wi-Fi Actually Needs', anchor: 'wifi-needs' },
      { label: 'How to Choose a Wi-Fi 7 Mesh System', anchor: 'mesh-checklist' },
      { label: 'Why Not to Wait for Wi-Fi 8', anchor: 'wifi-8' },
      { label: 'What to Ignore in Marketing', anchor: 'marketing-noise' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A Thread border router bridges Thread devices to your network and is often built into a speaker, hub or mesh Wi-Fi system, while Wi-Fi 7 mainly helps camera bandwidth, so the two are separate buying decisions.' },
      { type: 'plain-terms', content: 'Some smart home devices, such as many locks and sensors, use a low-power protocol called Thread. To reach your normal network they need a "border router", which is often already built into a smart speaker, an Apple TV or a mesh Wi-Fi system. Wi-Fi 7 is a separate upgrade that helps cameras and busy networks, and it does not by itself add Thread.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'A Thread border router bridges Thread devices (locks, sensors, some lighting) to your network. Check your speakers, displays, Apple TV and hubs before buying a dedicated one.',
          'Wi-Fi 7 and Thread are independent: the eero 7 line and Google Nest Wifi Pro are listed as Thread border routers, but a Wi-Fi 7 label alone does not guarantee Thread support.',
          'Thread 1.4 border routers must support credential sharing, so border routers from different brands can join one Thread network. Border routers certified since 1 January 2026 follow Thread 1.4.',
          'For smart home Wi-Fi, bandwidth for cameras, low latency and 2.4 GHz coverage matter more than the peak speed on the box.',
          'Wi-Fi 8 (802.11bn) is not ratified; the standard is expected around 2028, so Wi-Fi 7 remains the current choice.',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'What a Thread Border Router Does',
        content: '**A Thread border router connects your Thread devices to your home network and the internet, and it is often already inside a smart speaker, display, streamer, hub or mesh Wi-Fi system you own.**',
        items: [
          'Thread is a low-power mesh protocol on the 2.4 GHz radio band, separate from Wi-Fi. Thread devices cannot reach your phone or Home Assistant without a border router.',
          'Several border routers on one network extend mesh coverage and add redundancy, so a second one in another part of the home generally improves reliability.',
          'Thread 1.4.0 (September 2024) is the current specification and, since 1 January 2026, the only version new Thread Border Routers can be certified against, per the Thread Group.',
          'A border router does not need Wi-Fi 7: Thread runs on its own radio, so an older Wi-Fi generation with a border router works as well for Thread devices.',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'Which Devices Are Thread Border Routers',
        content: '**Border routers come from five device families: mesh Wi-Fi systems, smart speakers and displays, streamers, smart home hubs and DIY boards.** The list below follows the Matter Alpha border router directory, updated October 2026; it does not state the Thread version of each product, so check the vendor\'s page for Thread 1.4.',
        columns: ['Device family', 'Examples', 'Note'],
        rows: [
          { 'Device family': 'Mesh Wi-Fi systems', Examples: 'eero 7, Pro 7, Max 7, Outdoor 7', Note: 'Wi-Fi 7' },
          { 'Device family': 'Mesh Wi-Fi systems', Examples: 'Google Nest Wifi Pro', Note: 'Wi-Fi 6E' },
          { 'Device family': 'Speakers and displays', Examples: 'Echo (4th gen), Echo Show 8/11, Nest Hub', Note: 'Often already owned' },
          { 'Device family': 'Apple devices', Examples: 'HomePod mini, HomePod (2nd gen), Apple TV 4K', Note: 'Apple TV: Ethernet model for 3rd gen' },
          { 'Device family': 'Streamers', Examples: 'Google TV Streamer (4K)', Note: 'Plugs into the TV' },
          { 'Device family': 'Smart home hubs', Examples: 'SmartThings Station, Aqara Hub M3, IKEA DIRIGERA', Note: 'Hub also runs Matter' },
          { 'Device family': 'DIY and Home Assistant', Examples: 'Home Assistant Green, Connect ZBT-2', Note: 'Open source OpenThread' },
        ],
        items: [
          'Several eero models are listed, including the Wi-Fi 6 and 6E generations; verify your exact model on eero\'s support page.',
          'If your Thread devices already work through a speaker or Apple TV, a Wi-Fi 7 upgrade will not add anything for them.',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'What Thread 1.4 Changes',
        content: '**Thread 1.4 makes credential sharing mandatory, so border routers from different brands can join one Thread network instead of each creating its own.**',
        items: [
          'Credential sharing lets a new border router or device join an existing Thread network without creating a new one, which the Thread 1.4 specification requires of every certified border router, as Espressif explains.',
          'Rollout is uneven: SmartThings hubs have been upgraded to Thread 1.4 with credential sharing, and Home Assistant\'s OpenThread border router added Thread 1.4 as a beta, but not every product has an update.',
          'Existing border routers need a software update or replacement to gain Thread 1.4 features, according to Thread Group president Vividh Siddha; Matter 1.4 also added a Home Router and Access Point (HRAP) device type for routers that include Thread.',
          'Until your border routers all support Thread 1.4, mixing brands can still leave you with separate Thread networks, so prefer same-brand border routers or confirm 1.4 support before adding another.',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'What Your Wi-Fi Actually Needs',
        content: '**Camera streams (especially several 4K cameras via Frigate) and responsive voice assistants need consistent bandwidth and low latency more than they need the newest Wi-Fi generation number on a spec sheet.**',
        items: [
          'Local camera detection (see the local AI security camera guide) sends video to your Frigate box over the local network. This load benefits from more real-world bandwidth, especially with several cameras, and wired cameras avoid Wi-Fi entirely.',
          'Voice assistant responsiveness depends more on your local hub\'s processing (see the local voice assistant guide) than on raw Wi-Fi throughput, though a congested network adds latency to everything.',
          'Wi-Fi 7 (802.11be) adds 320 MHz channels and multi-link operation, which mainly help many simultaneous clients and high-bandwidth devices. For a typical camera and voice load, a well-configured Wi-Fi 6 or 6E system can be enough; treat advertised throughput as a ceiling, not a guaranteed gain.',
          'Entry-level Wi-Fi 7 mesh systems can be dual-band (2.4 and 5 GHz) with no 6 GHz radio, so check the band list instead of the generation label.',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'How to Choose a Wi-Fi 7 Mesh System',
        content: '**Choose a mesh system by Thread support, wired backhaul, band count and client limits, in that order, rather than by the headline speed rating.**',
        items: [
          'Thread border router: confirm it on the vendor\'s support page and check whether the Thread version is stated. eero 7-series systems are listed; many other brands are not.',
          'Backhaul: Ethernet between nodes, or a dedicated tri-band wireless backhaul, keeps node-to-node traffic off the channel your cameras use.',
          'Bands: a 6 GHz radio helps cameras and laptops; sensors stay on 2.4 GHz, so 2.4 GHz coverage in every room matters more for them.',
          'Client limit: homes with many plugs, bulbs and sensors should check the stated simultaneous-device limit.',
          'Ongoing cost: some eero features sit behind the paid eero Plus subscription, so check what the base system includes.',
          'Existing hardware: if a speaker, Apple TV or hub already acts as your Thread border router, you can choose the Wi-Fi system purely on Wi-Fi merits.',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'Why Not to Wait for Wi-Fi 8',
        content: '**Wi-Fi 8 (IEEE 802.11bn) is not ratified and is expected around 2028, so Wi-Fi 7 is the current generation to buy.**',
        items: [
          'Draft-based Wi-Fi 8 chips were announced at CES 2026, and early routers built on the draft have been reported, but early adopters will likely need firmware updates after ratification.',
          'Wi-Fi 8 targets reliability and latency rather than higher peak speed, and keeps the same bands and 320 MHz width as Wi-Fi 7; Wi-Fi Alliance certification is expected around the end of 2027.',
          'Thread is not tied to the Wi-Fi generation, so a Thread border router bought today keeps working after a later Wi-Fi upgrade.',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: 'What to Ignore in Marketing',
        content: '**A router\'s theoretical maximum throughput is rarely the bottleneck in a smart home: device density, 2.4 GHz coverage for battery-powered sensors and simultaneous-connection limits usually matter more.**',
        items: [
          'Most individual smart home sensors and battery-powered devices use 2.4 GHz Wi-Fi or a separate protocol (Zigbee, Thread) entirely, so a router\'s 6 GHz or newest-standard speed rarely affects them directly.',
          'Check a router\'s stated simultaneous-connected-device limit if you have many smart plugs, sensors and other IoT devices; this practical limit matters more than theoretical throughput for most smart homes.',
          '"Smart home ready" or "Matter ready" on a router box does not tell you whether it is a Thread border router; look for Thread border router in the specification or on the vendor\'s support page.',
          'Independent reviews, not manufacturer speed ratings, show real-world performance; PromptQuorum has not tested the products named in this guide.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Does a Wi-Fi 7 router include a Thread border router?', a: 'Not automatically. Wi-Fi 7 describes the Wi-Fi radio, while a Thread border router needs a separate Thread radio and software. The eero 7 line is listed as Thread border routers, but you should confirm the Thread border router feature on the spec sheet of any router you consider.' },
          { q: 'Which routers can act as a Thread border router?', a: 'Mesh systems listed as Thread border routers include the eero 7, Pro 7, Max 7 and Outdoor 7 and the Google Nest Wifi Pro. Many people already have one in a smart speaker, display, HomePod, Apple TV 4K, Google TV Streamer or hub, so check those first.' },
          { q: 'Do I need a separate Thread border router device?', a: 'Often not, because many existing smart speakers, streamers and hubs already include one. Check your current hardware\'s specifications before buying a dedicated device.' },
          { q: 'What is Thread 1.4 and do I need to replace my border router?', a: 'Thread 1.4 requires border routers to support credential sharing so that devices from different brands can join one Thread network. Existing border routers need a software update to gain Thread 1.4 features and may need replacement if the maker does not provide one. Border routers certified since 1 January 2026 follow Thread 1.4.' },
          { q: 'How many Thread border routers should I have?', a: 'More than one, in different areas of your home, generally improves mesh reliability because they cooperate rather than conflict. With Thread 1.4 and credential sharing, border routers from different brands can join the same network.' },
          { q: 'Does a faster Wi-Fi standard actually help my smart home?', a: 'It helps mainly for camera streaming bandwidth if you run several high-resolution cameras and for networks with many simultaneous clients. For most individual sensors and smart plugs on 2.4 GHz or Zigbee/Thread, the newest Wi-Fi generation makes little practical difference.' },
          { q: 'Should I wait for Wi-Fi 8 before buying a router?', a: 'Usually not. Wi-Fi 8 (802.11bn) is not ratified and is expected around 2028. It targets reliability and latency rather than higher peak speed, and Thread border routers work independently of the Wi-Fi generation.' },
          { q: 'What actually limits smart home network performance?', a: 'More often device density (how many IoT devices are connected simultaneously) and 2.4 GHz coverage than top-line Wi-Fi speed. Check your router\'s simultaneous-connection limit if you have many smart plugs and sensors.' },
          { q: 'Should I buy a mesh Wi-Fi system for a smart home?', a: 'A mesh system can help with whole-home 2.4 GHz coverage for battery-powered sensors, which matters more for device reliability than raw speed. Check whether each mesh node also acts as a Thread border router if that matters to you.' },
          { q: 'Is Thread the same as Wi-Fi?', a: 'No. Thread is a separate low-power mesh protocol, distinct from Wi-Fi. A Thread border router is the bridge between the two. See the general protocol primer for the full comparison.' },
          { q: 'Do all my smart home devices need Thread?', a: 'No. Many devices still use Zigbee, Z-Wave or Wi-Fi directly. Thread is one of several protocols in use; see the general protocol primer for which devices typically use which.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list) (device families, October 2026)',
          '[Thread Group](https://www.threadgroup.org/) (Thread 1.4.0 specification and certification)',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/) (mandatory for Thread 1.4 border routers)',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/) (Matter 1.4, HRAP device type)',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8) and [TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html) (802.11bn timeline)',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread) (eero Thread border router support)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protocols Explained](/smart-home/smart-home-protocols-explained) — what Thread is, compared to other protocols',
          '[Matter 1.6 Explained: What\'s New](/smart-home/matter-1-6-explained) — the application-layer spec, separate from networking hardware',
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — the bandwidth-heaviest local workload',
          '[Best Zigbee and Thread USB Dongles](/smart-home/best-zigbee-thread-dongles-2027) — dedicated radio hardware for a mini-PC/Pi hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Thread and Wi-Fi 7 Routers for Smart Homes (2026)',
      description: 'Which routers are Thread border routers? Thread 1.4 explained, which Wi-Fi mesh systems and hubs qualify, and what smart home Wi-Fi 7 really needs.',
      url: 'https://www.promptquorum.com/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'en',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Thread border router' },
        { '@type': 'Thing', name: 'Wi-Fi networking' },
        { '@type': 'Thing', name: 'Smart home networking' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does a Wi-Fi 7 router include a Thread border router?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not automatically. Wi-Fi 7 describes the Wi-Fi radio, while a Thread border router needs a separate Thread radio and software. The eero 7 line is listed as Thread border routers, but you should confirm the Thread border router feature on the spec sheet of any router you consider.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which routers can act as a Thread border router?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mesh systems listed as Thread border routers include the eero 7, Pro 7, Max 7 and Outdoor 7 and the Google Nest Wifi Pro. Many people already have one in a smart speaker, display, HomePod, Apple TV 4K, Google TV Streamer or hub, so check those first.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a separate Thread border router device?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Often not, because many existing smart speakers, streamers and hubs already include one. Check your current hardware\'s specifications before buying a dedicated device.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Thread 1.4 and do I need to replace my border router?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 1.4 requires border routers to support credential sharing so that devices from different brands can join one Thread network. Existing border routers need a software update to gain Thread 1.4 features and may need replacement if the maker does not provide one. Border routers certified since 1 January 2026 follow Thread 1.4.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many Thread border routers should I have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'More than one, in different areas of your home, generally improves mesh reliability because they cooperate rather than conflict. With Thread 1.4 and credential sharing, border routers from different brands can join the same network.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a faster Wi-Fi standard actually help my smart home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It helps mainly for camera streaming bandwidth if you run several high-resolution cameras and for networks with many simultaneous clients. For most individual sensors and smart plugs on 2.4 GHz or Zigbee/Thread, the newest Wi-Fi generation makes little practical difference.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I wait for Wi-Fi 8 before buying a router?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usually not. Wi-Fi 8 (802.11bn) is not ratified and is expected around 2028. It targets reliability and latency rather than higher peak speed, and Thread border routers work independently of the Wi-Fi generation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What actually limits smart home network performance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'More often device density (how many IoT devices are connected simultaneously) and 2.4 GHz coverage than top-line Wi-Fi speed. Check your router\'s simultaneous-connection limit if you have many smart plugs and sensors.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I buy a mesh Wi-Fi system for a smart home?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A mesh system can help with whole-home 2.4 GHz coverage for battery-powered sensors, which matters more for device reliability than raw speed. Check whether each mesh node also acts as a Thread border router if that matters to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Thread the same as Wi-Fi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Thread is a separate low-power mesh protocol, distinct from Wi-Fi. A Thread border router is the bridge between the two. See the general protocol primer for the full comparison.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do all my smart home devices need Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Many devices still use Zigbee, Z-Wave or Wi-Fi directly. Thread is one of several protocols in use; see the general protocol primer for which devices typically use which.',
          },
        },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-de.webp',
    title: 'Thread und Wi-Fi-7-Router für Smart Homes (2026)',
    seoTitle: 'Thread + Wi-Fi-7-Router für Smart Homes (2026)',
    intro:
      'Ein Smart-Home-Netzwerk braucht zwei Schichten: einen Thread-Border-Router, der stromsparende Thread-Geräte (Schlösser, Sensoren, manche Beleuchtung) mit deinem Netzwerk verbindet, und ein WLAN mit genug Bandbreite und niedriger Latenz für Kameras und Sprachassistenten. Thread 1.4 und Wi-Fi 7 (802.11be) sind beide aktuell, aber voneinander unabhängige Funktionen: Mehrere Mesh-WLAN-Systeme, etwa die eero-7-Serie und Google Nest Wifi Pro, dienen zugleich als Thread-Border-Router, während ein Wi-Fi-7-Label allein nichts über Thread aussagt. Dieser Leitfaden zeigt, welche Gerätefamilien infrage kommen, was Thread 1.4 ändert und was du vor dem Kauf prüfen solltest.',
    metaDescription:
      'Welche Router sind Thread-Border-Router? Thread 1.4 erklärt, welche Mesh-WLAN-Systeme und Hubs infrage kommen und was Smart-Home-Wi-Fi-7 wirklich braucht.',
    twitterDescription:
      'Ein Wi-Fi-7-Label macht einen Router nicht zum Thread-Border-Router. Welche Mesh-Systeme und Hubs infrage kommen, was Thread 1.4 ändert und was Smart-Home-WLAN braucht.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Smart-Home-Besitzer bei der Wahl eines Routers oder Thread-Border-Routers',
    primaryTerm: 'thread border router wifi smart home',
    targetKeywords: [
      'thread border router wifi router',
      'bester router smart home 2027',
      'wifi 7 smart home kamera bandbreite',
      'thread mesh netzwerk smart home',
      'home assistant thread border router',
    ],
    leadAnswerBlock:
      '**Ein Wi-Fi-7-Router ist nicht automatisch ein Thread-Border-Router: Mesh-Systeme der eero-7-Serie und Google Nest Wifi Pro sind als Thread-Border-Router gelistet, doch die Wi-Fi-Generation sagt nichts über Thread aus – prüfe die Thread-Border-Router-Unterstützung deshalb vor dem Kauf im Datenblatt des Herstellers. Seit dem 1. Januar 2026 muss jeder neu zertifizierte Border Router Thread 1.4 erfüllen, wodurch Border Router verschiedener Marken ein gemeinsames Thread-Netzwerk nutzen können.**',
    quickAnswerTop: {
      de: {
        question: 'Brauche ich einen Wi-Fi-7-Router und einen Thread-Border-Router für mein Smart Home?',
        answer: 'Einen Thread-Border-Router brauchst du nur, wenn du Thread-Geräte nutzt (viele neuere Schlösser, Sensoren und manche Beleuchtung). Oft steckt er schon in einem Smart Speaker, Display, Apple TV, Google TV Streamer oder Hub, den du besitzt, und manche Mesh-WLAN-Systeme wie die eero-7-Serie und Google Nest Wifi Pro bringen einen mit. Für Thread brauchst du kein Wi-Fi 7; Wi-Fi 7 zählt vor allem für Kamerabandbreite und viele gleichzeitige Clients.',
        bullets: [
          'Thread-Border-Router: prüfe zuerst Speaker, Displays, Apple TV und Hubs, die du besitzt',
          'Wi-Fi 7 bedeutet nicht automatisch Thread-Unterstützung: achte auf den Eintrag als Thread-Border-Router',
          'Border Router mit Thread 1.4 teilen sich ein Thread-Netzwerk über Marken hinweg',
          'Wi-Fi-Priorität: Bandbreite und Latenz für deine Kamera- und Sprachlast, dazu 2,4-GHz-Abdeckung für Sensoren',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was ein Thread-Border-Router macht', anchor: 'thread-border-router' },
      { label: 'Welche Geräte Thread-Border-Router sind', anchor: 'border-router-devices' },
      { label: 'Was Thread 1.4 ändert', anchor: 'thread-14' },
      { label: 'Was dein Wi-Fi wirklich braucht', anchor: 'wifi-needs' },
      { label: 'So wählst du ein Wi-Fi-7-Mesh-System', anchor: 'mesh-checklist' },
      { label: 'Warum nicht auf Wi-Fi 8 warten', anchor: 'wifi-8' },
      { label: 'Was im Marketing zu ignorieren ist', anchor: 'marketing-noise' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein Thread-Border-Router verbindet Thread-Geräte mit deinem Netzwerk und steckt oft in einem Speaker, Hub oder Mesh-WLAN-System, während Wi-Fi 7 vor allem die Kamerabandbreite verbessert – beides sind getrennte Kaufentscheidungen.' },
      { type: 'plain-terms', content: 'Manche Smart-Home-Geräte, etwa viele Schlösser und Sensoren, nutzen ein stromsparendes Protokoll namens Thread. Um dein normales Netzwerk zu erreichen, brauchen sie einen „Border Router“, der oft schon in einem Smart Speaker, einem Apple TV oder einem Mesh-WLAN-System steckt. Wi-Fi 7 ist ein separates Upgrade, das Kameras und ausgelasteten Netzwerken hilft und Thread nicht von selbst mitbringt.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Ein Thread-Border-Router verbindet Thread-Geräte (Schlösser, Sensoren, manche Beleuchtung) mit deinem Netzwerk. Prüfe Speaker, Displays, Apple TV und Hubs, bevor du ein eigenes Gerät kaufst.',
          'Wi-Fi 7 und Thread sind unabhängig voneinander: Die eero-7-Serie und Google Nest Wifi Pro sind als Thread-Border-Router gelistet, aber ein Wi-Fi-7-Label allein garantiert keine Thread-Unterstützung.',
          'Border Router mit Thread 1.4 müssen Credential Sharing unterstützen, sodass Border Router verschiedener Marken einem Thread-Netzwerk beitreten können. Seit dem 1. Januar 2026 zertifizierte Border Router folgen Thread 1.4.',
          'Für Smart-Home-WLAN zählen Bandbreite für Kameras, niedrige Latenz und 2,4-GHz-Abdeckung mehr als die Spitzengeschwindigkeit auf der Verpackung.',
          'Wi-Fi 8 (802.11bn) ist nicht verabschiedet; der Standard wird um 2028 erwartet, daher bleibt Wi-Fi 7 die aktuelle Wahl.',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'Was ein Thread-Border-Router macht',
        content: '**Ein Thread-Border-Router verbindet deine Thread-Geräte mit dem Heimnetzwerk und dem Internet und steckt oft schon in einem Smart Speaker, Display, Streamer, Hub oder Mesh-WLAN-System, das du besitzt.**',
        items: [
          'Thread ist ein stromsparendes Mesh-Protokoll im 2,4-GHz-Funkband, getrennt von Wi-Fi. Ohne Border Router erreichen Thread-Geräte weder dein Smartphone noch Home Assistant.',
          'Mehrere Border Router in einem Netzwerk erweitern die Mesh-Abdeckung und schaffen Redundanz; ein zweiter in einem anderen Teil des Hauses verbessert die Zuverlässigkeit daher generell.',
          'Thread 1.4.0 (September 2024) ist die aktuelle Spezifikation und laut Thread Group seit dem 1. Januar 2026 die einzige Version, gegen die neue Thread-Border-Router zertifiziert werden können.',
          'Ein Border Router braucht kein Wi-Fi 7: Thread nutzt ein eigenes Funkmodul, daher funktioniert für Thread-Geräte auch eine ältere Wi-Fi-Generation mit Border Router genauso gut.',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'Welche Geräte Thread-Border-Router sind',
        content: '**Border Router stammen aus fünf Gerätefamilien: Mesh-WLAN-Systeme, Smart Speaker und Displays, Streamer, Smart-Home-Hubs und DIY-Boards.** Die Liste folgt dem Border-Router-Verzeichnis von Matter Alpha, Stand Oktober 2026; sie nennt nicht die Thread-Version jedes Produkts, prüfe daher auf der Herstellerseite, ob Thread 1.4 unterstützt wird.',
        columns: ['Gerätefamilie', 'Beispiele', 'Hinweis'],
        rows: [
          { 'Gerätefamilie': 'Mesh-WLAN-Systeme', Beispiele: 'eero 7, Pro 7, Max 7, Outdoor 7', Hinweis: 'Wi-Fi 7' },
          { 'Gerätefamilie': 'Mesh-WLAN-Systeme', Beispiele: 'Google Nest Wifi Pro', Hinweis: 'Wi-Fi 6E' },
          { 'Gerätefamilie': 'Speaker und Displays', Beispiele: 'Echo (4th gen), Echo Show 8/11, Nest Hub', Hinweis: 'Oft schon vorhanden' },
          { 'Gerätefamilie': 'Apple-Geräte', Beispiele: 'HomePod mini, HomePod (2nd gen), Apple TV 4K', Hinweis: 'Apple TV 3rd gen: Ethernet-Modell' },
          { 'Gerätefamilie': 'Streamer', Beispiele: 'Google TV Streamer (4K)', Hinweis: 'Wird am Fernseher angeschlossen' },
          { 'Gerätefamilie': 'Smart-Home-Hubs', Beispiele: 'SmartThings Station, Aqara Hub M3, IKEA DIRIGERA', Hinweis: 'Hub nutzt auch Matter' },
          { 'Gerätefamilie': 'DIY und Home Assistant', Beispiele: 'Home Assistant Green, Connect ZBT-2', Hinweis: 'Open-Source-OpenThread' },
        ],
        items: [
          'Mehrere eero-Modelle sind gelistet, auch aus den Wi-Fi-6- und -6E-Generationen; prüfe dein genaues Modell auf der Support-Seite von eero.',
          'Funktionieren deine Thread-Geräte bereits über einen Speaker oder Apple TV, bringt ihnen ein Wi-Fi-7-Upgrade nichts.',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'Was Thread 1.4 ändert',
        content: '**Thread 1.4 macht Credential Sharing verpflichtend, sodass Border Router verschiedener Marken einem gemeinsamen Thread-Netzwerk beitreten können, statt dass jeder ein eigenes aufbaut.**',
        items: [
          'Credential Sharing erlaubt es einem neuen Border Router oder Gerät, einem bestehenden Thread-Netzwerk beizutreten, ohne ein neues zu erzeugen; die Thread-1.4-Spezifikation verlangt das von jedem zertifizierten Border Router, wie Espressif erläutert.',
          'Die Verbreitung ist uneinheitlich: SmartThings-Hubs wurden mit Credential Sharing auf Thread 1.4 aktualisiert, und der OpenThread-Border-Router von Home Assistant hat Thread 1.4 als Beta erhalten, doch nicht jedes Produkt hat ein Update.',
          'Bestehende Border Router brauchen laut Thread-Group-Präsident Vividh Siddha ein Software-Update oder Ersatz, um Thread-1.4-Funktionen zu erhalten; außerdem hat Matter 1.4 mit Home Router and Access Point (HRAP) einen Gerätetyp für Router mit Thread ergänzt.',
          'Solange nicht alle deine Border Router Thread 1.4 unterstützen, können gemischte Marken weiterhin getrennte Thread-Netzwerke ergeben; bevorzuge daher Border Router derselben Marke oder bestätige die 1.4-Unterstützung, bevor du einen weiteren hinzufügst.',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'Was dein Wi-Fi wirklich braucht',
        content: '**Kamera-Streams (besonders mehrere 4K-Kameras über Frigate) und reaktionsschnelle Sprachassistenten brauchen konstante Bandbreite und niedrige Latenz mehr als die neueste Wi-Fi-Generationsnummer auf einem Datenblatt.**',
        items: [
          'Lokale Kameraerkennung (siehe den Leitfaden zu lokalen KI-Überwachungskameras) sendet Video über das lokale Netzwerk an deine Frigate-Box. Diese Last profitiert von mehr realer Bandbreite, besonders bei mehreren Kameras; kabelgebundene Kameras umgehen Wi-Fi ganz.',
          'Die Reaktionsfähigkeit von Sprachassistenten hängt mehr von der Verarbeitung deines lokalen Hubs ab (siehe den Leitfaden zum lokalen Sprachassistenten) als vom reinen Wi-Fi-Durchsatz, auch wenn ein überlastetes Netzwerk allem Latenz hinzufügt.',
          'Wi-Fi 7 (802.11be) bringt 320-MHz-Kanäle und Multi-Link Operation, die vor allem vielen gleichzeitigen Clients und bandbreitenhungrigen Geräten helfen. Für eine typische Kamera- und Sprachlast kann ein gut konfiguriertes Wi-Fi-6- oder -6E-System ausreichen; behandle beworbenen Durchsatz als Obergrenze, nicht als garantierten Gewinn.',
          'Wi-Fi-7-Mesh-Systeme der Einstiegsklasse können Dualband (2,4 und 5 GHz) ohne 6-GHz-Funkmodul sein; prüfe daher die Bänderliste statt des Generationslabels.',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'So wählst du ein Wi-Fi-7-Mesh-System',
        content: '**Wähle ein Mesh-System in dieser Reihenfolge nach Thread-Unterstützung, kabelgebundenem Backhaul, Bänderzahl und Client-Limit statt nach der groß beworbenen Geschwindigkeitsangabe.**',
        items: [
          'Thread-Border-Router: bestätige ihn auf der Support-Seite des Herstellers und prüfe, ob die Thread-Version genannt wird. Systeme der eero-7-Serie sind gelistet; viele andere Marken nicht.',
          'Backhaul: Ethernet zwischen den Knoten oder ein dediziertes Tri-Band-Funk-Backhaul hält den Datenverkehr zwischen den Knoten vom Kanal fern, den deine Kameras nutzen.',
          'Bänder: Ein 6-GHz-Funkmodul hilft Kameras und Laptops; Sensoren bleiben auf 2,4 GHz, daher zählt für sie die 2,4-GHz-Abdeckung in jedem Raum mehr.',
          'Client-Limit: Haushalte mit vielen Steckdosen, Lampen und Sensoren sollten das angegebene Limit gleichzeitiger Geräte prüfen.',
          'Laufende Kosten: Manche eero-Funktionen stehen hinter dem kostenpflichtigen Abo eero Plus; prüfe daher, was das Basissystem enthält.',
          'Vorhandene Hardware: Fungiert bereits ein Speaker, Apple TV oder Hub als dein Thread-Border-Router, kannst du das WLAN-System allein nach WLAN-Kriterien wählen.',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'Warum nicht auf Wi-Fi 8 warten',
        content: '**Wi-Fi 8 (IEEE 802.11bn) ist nicht verabschiedet und wird um 2028 erwartet, daher ist Wi-Fi 7 die aktuelle Generation zum Kaufen.**',
        items: [
          'Auf Entwürfen basierende Wi-Fi-8-Chips wurden auf der CES 2026 angekündigt, und erste Router auf Entwurfsbasis wurden gemeldet, doch Early Adopter brauchen nach der Verabschiedung voraussichtlich Firmware-Updates.',
          'Wi-Fi 8 zielt auf Zuverlässigkeit und Latenz statt auf höhere Spitzengeschwindigkeit und behält dieselben Bänder und die 320-MHz-Breite von Wi-Fi 7; die Zertifizierung der Wi-Fi Alliance wird etwa Ende 2027 erwartet.',
          'Thread ist nicht an die Wi-Fi-Generation gebunden, daher funktioniert ein heute gekaufter Thread-Border-Router nach einem späteren Wi-Fi-Upgrade weiter.',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: 'Was im Marketing zu ignorieren ist',
        content: '**Der theoretische Höchstdurchsatz eines Routers ist im Smart Home selten der Engpass: Gerätedichte, 2,4-GHz-Abdeckung für batteriebetriebene Sensoren und Limits gleichzeitiger Verbindungen zählen meist mehr.**',
        items: [
          'Die meisten einzelnen Smart-Home-Sensoren und batteriebetriebenen Geräte nutzen 2,4-GHz-Wi-Fi oder ein komplett separates Protokoll (Zigbee, Thread), daher betrifft die 6-GHz- oder Neuester-Standard-Geschwindigkeit eines Routers sie selten direkt.',
          'Prüfe das angegebene Limit gleichzeitig verbundener Geräte eines Routers, wenn du viele Smart-Steckdosen, Sensoren und andere IoT-Geräte hast; dieses praktische Limit zählt für die meisten Smart Homes mehr als der theoretische Durchsatz.',
          '„Smart Home ready“ oder „Matter ready“ auf der Router-Verpackung sagt nicht, ob er ein Thread-Border-Router ist; suche in der Spezifikation oder auf der Support-Seite des Herstellers nach Thread Border Router.',
          'Unabhängige Tests, nicht Geschwindigkeitsangaben der Hersteller, zeigen die Leistung im Alltag; PromptQuorum hat die in diesem Leitfaden genannten Produkte nicht getestet.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Enthält ein Wi-Fi-7-Router einen Thread-Border-Router?', a: 'Nicht automatisch. Wi-Fi 7 beschreibt das WLAN-Funkmodul, während ein Thread-Border-Router ein separates Thread-Funkmodul und passende Software braucht. Die eero-7-Serie ist als Thread-Border-Router gelistet, doch bestätige die Thread-Border-Router-Funktion im Datenblatt jedes Routers, den du erwägst.' },
          { q: 'Welche Router können als Thread-Border-Router dienen?', a: 'Als Thread-Border-Router gelistete Mesh-Systeme sind unter anderem eero 7, Pro 7, Max 7 und Outdoor 7 sowie Google Nest Wifi Pro. Viele haben schon einen in einem Smart Speaker, Display, HomePod, Apple TV 4K, Google TV Streamer oder Hub, prüfe diese also zuerst.' },
          { q: 'Brauche ich ein separates Thread-Border-Router-Gerät?', a: 'Oft nicht, da viele vorhandene Smart Speaker, Streamer und Hubs bereits einen enthalten. Prüfe die Spezifikationen deiner aktuellen Hardware, bevor du ein dediziertes Gerät kaufst.' },
          { q: 'Was ist Thread 1.4 und muss ich meinen Border Router ersetzen?', a: 'Thread 1.4 verlangt von Border Routern Unterstützung für Credential Sharing, damit Geräte verschiedener Marken einem Thread-Netzwerk beitreten können. Bestehende Border Router brauchen ein Software-Update für Thread-1.4-Funktionen und müssen eventuell ersetzt werden, wenn der Hersteller keines liefert. Seit dem 1. Januar 2026 zertifizierte Border Router folgen Thread 1.4.' },
          { q: 'Wie viele Thread-Border-Router sollte ich haben?', a: 'Mehr als einer, in verschiedenen Bereichen deines Zuhauses, verbessert generell die Mesh-Zuverlässigkeit, weil sie zusammenarbeiten statt zu konkurrieren. Mit Thread 1.4 und Credential Sharing können Border Router verschiedener Marken demselben Netzwerk beitreten.' },
          { q: 'Hilft ein schnellerer Wi-Fi-Standard meinem Smart Home tatsächlich?', a: 'Er hilft hauptsächlich bei der Kamera-Streaming-Bandbreite, wenn du mehrere hochauflösende Kameras betreibst, und in Netzwerken mit vielen gleichzeitigen Clients. Für die meisten einzelnen Sensoren und Smart-Steckdosen auf 2,4 GHz oder Zigbee/Thread macht die neueste Wi-Fi-Generation wenig praktischen Unterschied.' },
          { q: 'Sollte ich mit dem Router-Kauf auf Wi-Fi 8 warten?', a: 'Meist nicht. Wi-Fi 8 (802.11bn) ist nicht verabschiedet und wird um 2028 erwartet. Es zielt auf Zuverlässigkeit und Latenz statt auf höhere Spitzengeschwindigkeit, und Thread-Border-Router arbeiten unabhängig von der Wi-Fi-Generation.' },
          { q: 'Was begrenzt die Netzwerkleistung eines Smart Homes tatsächlich?', a: 'Häufiger die Gerätedichte (wie viele IoT-Geräte gleichzeitig verbunden sind) und die 2,4-GHz-Abdeckung als die Wi-Fi-Spitzengeschwindigkeit. Prüfe das Limit gleichzeitiger Verbindungen deines Routers, wenn du viele Smart-Steckdosen und Sensoren hast.' },
          { q: 'Sollte ich ein Mesh-Wi-Fi-System für ein Smart Home kaufen?', a: 'Ein Mesh-System kann bei der ganzhausweiten 2,4-GHz-Abdeckung für batteriebetriebene Sensoren helfen, was für die Gerätezuverlässigkeit mehr zählt als reine Geschwindigkeit. Prüfe, ob jeder Mesh-Knoten auch als Thread-Border-Router fungiert, falls dir das wichtig ist.' },
          { q: 'Ist Thread dasselbe wie Wi-Fi?', a: 'Nein. Thread ist ein separates, stromsparendes Mesh-Protokoll, unabhängig von Wi-Fi. Ein Thread-Border-Router ist die Brücke zwischen beiden. Den vollständigen Vergleich findest du im allgemeinen Protokoll-Grundlagenartikel.' },
          { q: 'Brauchen alle meine Smart-Home-Geräte Thread?', a: 'Nein. Viele Geräte nutzen weiterhin Zigbee, Z-Wave oder direkt Wi-Fi. Thread ist eines von mehreren genutzten Protokollen; im allgemeinen Protokoll-Grundlagenartikel steht, welche Geräte typischerweise welches nutzen.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list) (Gerätefamilien, Oktober 2026)',
          '[Thread Group](https://www.threadgroup.org/) (Thread-1.4.0-Spezifikation und Zertifizierung)',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/) (verpflichtend für Thread-1.4-Border-Router)',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: Der Matter-Standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/) (Matter 1.4, Gerätetyp HRAP)',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8) und [TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html) (Zeitplan 802.11bn)',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread) (Thread-Border-Router-Unterstützung bei eero)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: Protokolle erklärt](/de/smart-home/smart-home-protocols-explained) — was Thread ist, im Vergleich zu anderen Protokollen',
          '[Matter 1.6 erklärt: Was ist neu](/de/smart-home/matter-1-6-explained) — die Anwendungsschicht-Spezifikation, getrennt von Netzwerk-Hardware',
          '[Lokale KI-Überwachungskameras mit Frigate](/de/smart-home/local-ai-security-camera) — die bandbreitenintensivste lokale Last',
          '[Beste Zigbee- und Thread-USB-Dongles](/de/smart-home/best-zigbee-thread-dongles-2027) — dedizierte Funk-Hardware für einen Mini-PC/Pi-Hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Thread und Wi-Fi-7-Router für Smart Homes (2026)',
      description: 'Welche Router sind Thread-Border-Router? Thread 1.4 erklärt, welche Mesh-WLAN-Systeme und Hubs infrage kommen und was Smart-Home-Wi-Fi-7 wirklich braucht.',
      url: 'https://www.promptquorum.com/de/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'de',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Thread-Border-Router' },
        { '@type': 'Thing', name: 'Wi-Fi-Netzwerk' },
        { '@type': 'Thing', name: 'Smart-Home-Netzwerk' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Enthält ein Wi-Fi-7-Router einen Thread-Border-Router?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nicht automatisch. Wi-Fi 7 beschreibt das WLAN-Funkmodul, während ein Thread-Border-Router ein separates Thread-Funkmodul und passende Software braucht. Die eero-7-Serie ist als Thread-Border-Router gelistet, doch bestätige die Thread-Border-Router-Funktion im Datenblatt jedes Routers, den du erwägst.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Router können als Thread-Border-Router dienen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Als Thread-Border-Router gelistete Mesh-Systeme sind unter anderem eero 7, Pro 7, Max 7 und Outdoor 7 sowie Google Nest Wifi Pro. Viele haben schon einen in einem Smart Speaker, Display, HomePod, Apple TV 4K, Google TV Streamer oder Hub, prüfe diese also zuerst.',
          },
        },
        {
          '@type': 'Question',
          name: 'Brauche ich ein separates Thread-Border-Router-Gerät?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oft nicht, da viele vorhandene Smart Speaker, Streamer und Hubs bereits einen enthalten. Prüfe die Spezifikationen deiner aktuellen Hardware, bevor du ein dediziertes Gerät kaufst.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist Thread 1.4 und muss ich meinen Border Router ersetzen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 1.4 verlangt von Border Routern Unterstützung für Credential Sharing, damit Geräte verschiedener Marken einem Thread-Netzwerk beitreten können. Bestehende Border Router brauchen ein Software-Update für Thread-1.4-Funktionen und müssen eventuell ersetzt werden, wenn der Hersteller keines liefert. Seit dem 1. Januar 2026 zertifizierte Border Router folgen Thread 1.4.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viele Thread-Border-Router sollte ich haben?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mehr als einer, in verschiedenen Bereichen deines Zuhauses, verbessert generell die Mesh-Zuverlässigkeit, weil sie zusammenarbeiten statt zu konkurrieren. Mit Thread 1.4 und Credential Sharing können Border Router verschiedener Marken demselben Netzwerk beitreten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hilft ein schnellerer Wi-Fi-Standard meinem Smart Home tatsächlich?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Er hilft hauptsächlich bei der Kamera-Streaming-Bandbreite, wenn du mehrere hochauflösende Kameras betreibst, und in Netzwerken mit vielen gleichzeitigen Clients. Für die meisten einzelnen Sensoren und Smart-Steckdosen auf 2,4 GHz oder Zigbee/Thread macht die neueste Wi-Fi-Generation wenig praktischen Unterschied.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sollte ich mit dem Router-Kauf auf Wi-Fi 8 warten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Meist nicht. Wi-Fi 8 (802.11bn) ist nicht verabschiedet und wird um 2028 erwartet. Es zielt auf Zuverlässigkeit und Latenz statt auf höhere Spitzengeschwindigkeit, und Thread-Border-Router arbeiten unabhängig von der Wi-Fi-Generation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was begrenzt die Netzwerkleistung eines Smart Homes tatsächlich?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Häufiger die Gerätedichte (wie viele IoT-Geräte gleichzeitig verbunden sind) und die 2,4-GHz-Abdeckung als die Wi-Fi-Spitzengeschwindigkeit. Prüfe das Limit gleichzeitiger Verbindungen deines Routers, wenn du viele Smart-Steckdosen und Sensoren hast.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sollte ich ein Mesh-Wi-Fi-System für ein Smart Home kaufen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein Mesh-System kann bei der ganzhausweiten 2,4-GHz-Abdeckung für batteriebetriebene Sensoren helfen, was für die Gerätezuverlässigkeit mehr zählt als reine Geschwindigkeit. Prüfe, ob jeder Mesh-Knoten auch als Thread-Border-Router fungiert, falls dir das wichtig ist.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist Thread dasselbe wie Wi-Fi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Thread ist ein separates, stromsparendes Mesh-Protokoll, unabhängig von Wi-Fi. Ein Thread-Border-Router ist die Brücke zwischen beiden. Den vollständigen Vergleich findest du im allgemeinen Protokoll-Grundlagenartikel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Brauchen alle meine Smart-Home-Geräte Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Viele Geräte nutzen weiterhin Zigbee, Z-Wave oder direkt Wi-Fi. Thread ist eines von mehreren genutzten Protokollen; im allgemeinen Protokoll-Grundlagenartikel steht, welche Geräte typischerweise welches nutzen.',
          },
        },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-fr.webp',
    title: 'Thread et routeurs Wi-Fi 7 pour maisons connectées (2026)',
    seoTitle: 'Thread + routeurs Wi-Fi 7 pour maisons connectées (2026)',
    intro:
      'Le réseau d\'une maison connectée repose sur deux couches : un routeur frontalier Thread, qui relie les appareils Thread à faible consommation (serrures, capteurs, certains éclairages) à votre réseau, et un Wi-Fi offrant assez de bande passante et une latence faible pour les caméras et la voix. Thread 1.4 et le Wi-Fi 7 (802.11be) sont tous deux d\'actualité, mais ce sont deux fonctions distinctes : plusieurs systèmes Wi-Fi maillés, comme la gamme eero 7 et le Google Nest Wifi Pro, font aussi office de routeurs frontaliers Thread, alors que la mention Wi-Fi 7 seule ne dit rien de Thread. Ce guide montre quelles familles d\'appareils conviennent, ce que change Thread 1.4 et quoi vérifier avant d\'acheter.',
    metaDescription:
      'Quels routeurs sont des routeurs frontaliers Thread ? Thread 1.4 expliqué, systèmes maillés et hubs compatibles, et ce que demande vraiment le Wi-Fi 7.',
    twitterDescription:
      'La mention Wi-Fi 7 ne fait pas d\'un routeur un routeur frontalier Thread. Quels systèmes maillés et hubs conviennent, ce que change Thread 1.4 et ce qu\'il faut au Wi-Fi.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de maison connectée choisissant un routeur ou un routeur frontalier Thread',
    primaryTerm: 'routeur frontalier thread wifi maison connectee',
    targetKeywords: [
      'routeur frontalier thread wifi',
      'meilleur routeur maison connectee 2027',
      'wifi 7 bande passante camera maison connectee',
      'reseau maille thread maison connectee',
      'home assistant routeur frontalier thread',
    ],
    leadAnswerBlock:
      '**Un routeur Wi-Fi 7 n\'est pas automatiquement un routeur frontalier Thread : les systèmes maillés eero de la série 7 et le Google Nest Wifi Pro sont répertoriés comme routeurs frontaliers Thread, mais la génération Wi-Fi ne dit rien de Thread ; vérifiez donc la prise en charge sur la fiche technique du fabricant avant d\'acheter. Depuis le 1er janvier 2026, tout nouveau routeur frontalier certifié doit respecter Thread 1.4, ce qui permet à des routeurs frontaliers de marques différentes de partager un même réseau Thread.**',
    quickAnswerTop: {
      fr: {
        question: 'Ai-je besoin d\'un routeur Wi-Fi 7 et d\'un routeur frontalier Thread pour ma maison connectée ?',
        answer: 'Un routeur frontalier Thread n\'est nécessaire que si vous utilisez des appareils Thread (de nombreuses serrures et capteurs récents, et certains éclairages). Il est souvent déjà intégré à une enceinte connectée, un écran, une Apple TV, un Google TV Streamer ou un hub que vous possédez, et certains systèmes Wi-Fi maillés, comme la gamme eero 7 et le Google Nest Wifi Pro, en incluent un. Le Wi-Fi 7 n\'est pas requis pour Thread ; il compte surtout pour la bande passante des caméras et le grand nombre de clients simultanés.',
        bullets: [
          'Routeur frontalier Thread : vérifiez d\'abord enceintes, écrans, Apple TV et hubs que vous possédez',
          'Wi-Fi 7 n\'implique pas Thread : cherchez la mention de routeur frontalier Thread',
          'Les routeurs frontaliers Thread 1.4 partagent un même réseau Thread entre marques',
          'Priorité Wi-Fi : bande passante et latence pour vos caméras et la voix, plus couverture 2,4 GHz pour les capteurs',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Ce que fait un routeur frontalier Thread', anchor: 'thread-border-router' },
      { label: 'Quels appareils sont des routeurs frontaliers Thread', anchor: 'border-router-devices' },
      { label: 'Ce que change Thread 1.4', anchor: 'thread-14' },
      { label: 'Ce dont votre Wi-Fi a réellement besoin', anchor: 'wifi-needs' },
      { label: 'Choisir un système maillé Wi-Fi 7', anchor: 'mesh-checklist' },
      { label: 'Pourquoi ne pas attendre le Wi-Fi 8', anchor: 'wifi-8' },
      { label: 'Ce qu\'il faut ignorer dans le marketing', anchor: 'marketing-noise' },
      { label: 'Questions fréquentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un routeur frontalier Thread relie les appareils Thread à votre réseau et se trouve souvent dans une enceinte, un hub ou un système Wi-Fi maillé, tandis que le Wi-Fi 7 aide surtout la bande passante des caméras : ce sont deux décisions d\'achat distinctes.' },
      { type: 'plain-terms', content: 'Certains appareils de maison connectée, comme de nombreuses serrures et capteurs, utilisent un protocole à faible consommation appelé Thread. Pour atteindre votre réseau habituel, ils ont besoin d\'un « routeur frontalier », souvent déjà intégré à une enceinte connectée, une Apple TV ou un système Wi-Fi maillé. Le Wi-Fi 7 est une amélioration distincte, utile aux caméras et aux réseaux chargés, et il n\'ajoute pas Thread à lui seul.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          'Un routeur frontalier Thread relie les appareils Thread (serrures, capteurs, certains éclairages) à votre réseau. Vérifiez vos enceintes, écrans, Apple TV et hubs avant d\'acheter un modèle dédié.',
          'Wi-Fi 7 et Thread sont indépendants : la gamme eero 7 et le Google Nest Wifi Pro sont répertoriés comme routeurs frontaliers Thread, mais la seule mention Wi-Fi 7 ne garantit pas la prise en charge de Thread.',
          'Les routeurs frontaliers Thread 1.4 doivent prendre en charge le partage d\'identifiants, si bien que des routeurs de marques différentes peuvent rejoindre un même réseau Thread. Ceux certifiés depuis le 1er janvier 2026 suivent Thread 1.4.',
          'Pour le Wi-Fi d\'une maison connectée, la bande passante des caméras, la faible latence et la couverture 2,4 GHz comptent plus que le débit maximal affiché sur la boîte.',
          'Le Wi-Fi 8 (802.11bn) n\'est pas ratifié ; la norme est attendue vers 2028, le Wi-Fi 7 reste donc le choix actuel.',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'Ce que fait un routeur frontalier Thread',
        content: '**Un routeur frontalier Thread relie vos appareils Thread à votre réseau domestique et à internet, et il se trouve souvent déjà dans une enceinte, un écran, un boîtier de streaming, un hub ou un système Wi-Fi maillé que vous possédez.**',
        items: [
          'Thread est un protocole maillé à faible consommation sur la bande radio 2,4 GHz, distinct du Wi-Fi. Sans routeur frontalier, les appareils Thread ne peuvent pas joindre votre téléphone ni Home Assistant.',
          'Plusieurs routeurs frontaliers sur un même réseau étendent la couverture maillée et ajoutent de la redondance ; en installer un second dans une autre partie du logement améliore généralement la fiabilité.',
          'Thread 1.4.0 (septembre 2024) est la spécification actuelle et, depuis le 1er janvier 2026, la seule version selon laquelle de nouveaux routeurs frontaliers Thread peuvent être certifiés, d\'après le Thread Group.',
          'Un routeur frontalier n\'a pas besoin du Wi-Fi 7 : Thread utilise sa propre radio, donc une génération Wi-Fi plus ancienne associée à un routeur frontalier fonctionne aussi bien pour les appareils Thread.',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'Quels appareils sont des routeurs frontaliers Thread',
        content: '**Les routeurs frontaliers se répartissent en cinq familles d\'appareils : systèmes Wi-Fi maillés, enceintes et écrans connectés, boîtiers de streaming, hubs de maison connectée et cartes DIY.** La liste ci-dessous suit l\'annuaire des routeurs frontaliers de Matter Alpha, mis à jour en octobre 2026 ; il n\'indique pas la version Thread de chaque produit, vérifiez donc la page du fabricant pour Thread 1.4.',
        columns: ['Famille d\'appareils', 'Exemples', 'Remarque'],
        rows: [
          { 'Famille d\'appareils': 'Systèmes Wi-Fi maillés', Exemples: 'eero 7, Pro 7, Max 7, Outdoor 7', Remarque: 'Wi-Fi 7' },
          { 'Famille d\'appareils': 'Systèmes Wi-Fi maillés', Exemples: 'Google Nest Wifi Pro', Remarque: 'Wi-Fi 6E' },
          { 'Famille d\'appareils': 'Enceintes et écrans', Exemples: 'Echo (4e gén.), Echo Show 8/11, Nest Hub', Remarque: 'Souvent déjà possédé' },
          { 'Famille d\'appareils': 'Appareils Apple', Exemples: 'HomePod mini, HomePod (2e gén.), Apple TV 4K', Remarque: 'Apple TV : modèle Ethernet (3e gén.)' },
          { 'Famille d\'appareils': 'Boîtiers de streaming', Exemples: 'Google TV Streamer (4K)', Remarque: 'Se branche sur le téléviseur' },
          { 'Famille d\'appareils': 'Hubs de maison connectée', Exemples: 'SmartThings Station, Aqara Hub M3, IKEA DIRIGERA', Remarque: 'Le hub gère aussi Matter' },
          { 'Famille d\'appareils': 'DIY et Home Assistant', Exemples: 'Home Assistant Green, Connect ZBT-2', Remarque: 'OpenThread open source' },
        ],
        items: [
          'Plusieurs modèles eero sont répertoriés, y compris les générations Wi-Fi 6 et 6E ; vérifiez votre modèle exact sur la page d\'assistance d\'eero.',
          'Si vos appareils Thread fonctionnent déjà via une enceinte ou une Apple TV, passer au Wi-Fi 7 ne leur apportera rien.',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'Ce que change Thread 1.4',
        content: '**Thread 1.4 rend le partage d\'identifiants obligatoire : des routeurs frontaliers de marques différentes peuvent ainsi rejoindre un même réseau Thread au lieu de créer chacun le leur.**',
        items: [
          'Le partage d\'identifiants permet à un nouveau routeur frontalier ou appareil de rejoindre un réseau Thread existant sans en créer un nouveau ; la spécification Thread 1.4 l\'exige de tout routeur frontalier certifié, comme l\'explique Espressif.',
          'Le déploiement est inégal : les hubs SmartThings sont passés à Thread 1.4 avec partage d\'identifiants, et le routeur frontalier OpenThread de Home Assistant a ajouté Thread 1.4 en version bêta, mais tous les produits ne disposent pas d\'une mise à jour.',
          'Les routeurs frontaliers existants ont besoin d\'une mise à jour logicielle ou d\'un remplacement pour obtenir les fonctions de Thread 1.4, selon Vividh Siddha, président du Thread Group ; Matter 1.4 a aussi ajouté un type d\'appareil Home Router and Access Point (HRAP) pour les routeurs qui incluent Thread.',
          'Tant que tous vos routeurs frontaliers ne prennent pas en charge Thread 1.4, mélanger les marques peut encore donner des réseaux Thread séparés ; privilégiez donc des routeurs frontaliers de la même marque ou confirmez la prise en charge de 1.4 avant d\'en ajouter un autre.',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'Ce dont votre Wi-Fi a réellement besoin',
        content: '**Les flux de caméras (surtout plusieurs caméras 4K via Frigate) et les assistants vocaux réactifs ont besoin d\'une bande passante constante et d\'une faible latence plus que du numéro de génération Wi-Fi le plus récent affiché sur une fiche technique.**',
        items: [
          'La détection locale par caméra (voir le guide des caméras de sécurité IA locales) envoie la vidéo à votre boîtier Frigate sur le réseau local. Cette charge profite d\'une bande passante réelle plus élevée, surtout avec plusieurs caméras, et les caméras filaires évitent totalement le Wi-Fi.',
          'La réactivité de l\'assistant vocal dépend plus du traitement de votre hub local (voir le guide de l\'assistant vocal local) que du débit Wi-Fi brut, bien qu\'un réseau saturé ajoute de la latence à tout.',
          'Le Wi-Fi 7 (802.11be) ajoute des canaux de 320 MHz et le fonctionnement multi-liens, qui aident surtout avec de nombreux clients simultanés et des appareils gourmands en bande passante. Pour une charge typique de caméras et de voix, un système Wi-Fi 6 ou 6E bien configuré peut suffire ; considérez le débit annoncé comme un plafond, non comme un gain garanti.',
          'Les systèmes maillés Wi-Fi 7 d\'entrée de gamme peuvent être bibandes (2,4 et 5 GHz) sans radio 6 GHz : consultez la liste des bandes plutôt que la mention de génération.',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'Choisir un système maillé Wi-Fi 7',
        content: '**Choisissez un système maillé selon la prise en charge de Thread, la liaison filaire entre nœuds, le nombre de bandes et la limite de clients, dans cet ordre, plutôt que selon l\'indice de débit affiché.**',
        items: [
          'Routeur frontalier Thread : confirmez-le sur la page d\'assistance du fabricant et vérifiez si la version de Thread est indiquée. Les systèmes eero de la série 7 sont répertoriés ; beaucoup d\'autres marques ne le sont pas.',
          'Liaison entre nœuds : l\'Ethernet entre les nœuds, ou une liaison sans fil tribande dédiée, évite que le trafic entre nœuds n\'empiète sur le canal utilisé par vos caméras.',
          'Bandes : une radio 6 GHz aide les caméras et les ordinateurs portables ; les capteurs restent en 2,4 GHz, la couverture 2,4 GHz dans chaque pièce compte donc davantage pour eux.',
          'Limite de clients : les logements avec beaucoup de prises, d\'ampoules et de capteurs doivent vérifier la limite d\'appareils simultanés indiquée.',
          'Coût récurrent : certaines fonctions d\'eero sont réservées à l\'abonnement payant eero Plus ; vérifiez donc ce qu\'inclut le système de base.',
          'Matériel existant : si une enceinte, une Apple TV ou un hub fait déjà office de routeur frontalier Thread, vous pouvez choisir le système Wi-Fi uniquement sur ses qualités Wi-Fi.',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'Pourquoi ne pas attendre le Wi-Fi 8',
        content: '**Le Wi-Fi 8 (IEEE 802.11bn) n\'est pas ratifié et est attendu vers 2028 ; le Wi-Fi 7 est donc la génération actuelle à acheter.**',
        items: [
          'Des puces Wi-Fi 8 basées sur le brouillon ont été annoncées au CES 2026, et de premiers routeurs construits sur ce brouillon ont été signalés, mais les premiers acquéreurs auront probablement besoin de mises à jour du firmware après la ratification.',
          'Le Wi-Fi 8 vise la fiabilité et la latence plutôt qu\'un débit de pointe plus élevé, et conserve les mêmes bandes et la même largeur de 320 MHz que le Wi-Fi 7 ; la certification Wi-Fi Alliance est attendue vers la fin de 2027.',
          'Thread n\'est pas lié à la génération Wi-Fi : un routeur frontalier Thread acheté aujourd\'hui continue de fonctionner après une future mise à niveau Wi-Fi.',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: 'Ce qu\'il faut ignorer dans le marketing',
        content: '**Le débit maximal théorique d\'un routeur est rarement le goulot d\'étranglement dans une maison connectée : la densité d\'appareils, la couverture 2,4 GHz pour les capteurs sur pile et les limites de connexions simultanées comptent généralement davantage.**',
        items: [
          'La plupart des capteurs de maison connectée et des appareils sur pile utilisent le Wi-Fi 2,4 GHz ou un protocole entièrement distinct (Zigbee, Thread) ; la vitesse en 6 GHz ou celle de la norme la plus récente d\'un routeur les affecte rarement de façon directe.',
          'Vérifiez la limite d\'appareils connectés simultanément indiquée pour un routeur si vous avez beaucoup de prises connectées, de capteurs et d\'autres appareils IoT ; cette limite pratique compte plus que le débit théorique pour la plupart des maisons connectées.',
          'La mention « compatible maison connectée » ou « compatible Matter » sur la boîte d\'un routeur ne dit pas s\'il s\'agit d\'un routeur frontalier Thread ; cherchez « routeur frontalier Thread » dans les caractéristiques ou sur la page d\'assistance du fabricant.',
          'Ce sont les tests indépendants, non les débits annoncés par les fabricants, qui montrent les performances réelles ; PromptQuorum n\'a pas testé les produits cités dans ce guide.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Un routeur Wi-Fi 7 inclut-il un routeur frontalier Thread ?', a: 'Pas automatiquement. Le Wi-Fi 7 décrit la radio Wi-Fi, alors qu\'un routeur frontalier Thread exige une radio Thread distincte et un logiciel dédié. La gamme eero 7 est répertoriée comme routeurs frontaliers Thread, mais confirmez cette fonction sur la fiche technique de tout routeur envisagé.' },
          { q: 'Quels routeurs peuvent servir de routeur frontalier Thread ?', a: 'Parmi les systèmes maillés répertoriés comme routeurs frontaliers Thread figurent les eero 7, Pro 7, Max 7 et Outdoor 7 ainsi que le Google Nest Wifi Pro. Beaucoup en ont déjà un dans une enceinte, un écran, un HomePod, une Apple TV 4K, un Google TV Streamer ou un hub : vérifiez-les d\'abord.' },
          { q: 'Ai-je besoin d\'un appareil routeur frontalier Thread séparé ?', a: 'Souvent non, car de nombreuses enceintes, boîtiers de streaming et hubs existants en incluent déjà un. Consultez les caractéristiques de votre matériel actuel avant d\'acheter un appareil dédié.' },
          { q: 'Qu\'est-ce que Thread 1.4 et dois-je remplacer mon routeur frontalier ?', a: 'Thread 1.4 impose aux routeurs frontaliers de prendre en charge le partage d\'identifiants afin que des appareils de marques différentes rejoignent un même réseau Thread. Les routeurs frontaliers existants ont besoin d\'une mise à jour logicielle pour obtenir ces fonctions, et peuvent devoir être remplacés si le fabricant n\'en fournit pas. Ceux certifiés depuis le 1er janvier 2026 suivent Thread 1.4.' },
          { q: 'Combien de routeurs frontaliers Thread devrais-je avoir ?', a: 'Plus d\'un, dans différentes zones du logement, améliore généralement la fiabilité du maillage, car ils coopèrent au lieu de s\'opposer. Avec Thread 1.4 et le partage d\'identifiants, des routeurs frontaliers de marques différentes peuvent rejoindre le même réseau.' },
          { q: 'Une norme Wi-Fi plus rapide aide-t-elle réellement ma maison connectée ?', a: 'Elle aide principalement la bande passante du streaming des caméras si vous utilisez plusieurs caméras haute résolution, ainsi que les réseaux comptant beaucoup de clients simultanés. Pour la plupart des capteurs et prises connectées en 2,4 GHz ou en Zigbee/Thread, la dernière génération Wi-Fi change peu en pratique.' },
          { q: 'Dois-je attendre le Wi-Fi 8 avant d\'acheter un routeur ?', a: 'En général non. Le Wi-Fi 8 (802.11bn) n\'est pas ratifié et est attendu vers 2028. Il vise la fiabilité et la latence plutôt qu\'un débit de pointe plus élevé, et les routeurs frontaliers Thread fonctionnent indépendamment de la génération Wi-Fi.' },
          { q: 'Qu\'est-ce qui limite réellement les performances du réseau d\'une maison connectée ?', a: 'Le plus souvent la densité d\'appareils (nombre d\'appareils IoT connectés simultanément) et la couverture 2,4 GHz, plutôt que la vitesse Wi-Fi maximale. Vérifiez la limite de connexions simultanées de votre routeur si vous avez de nombreuses prises connectées et de nombreux capteurs.' },
          { q: 'Devrais-je acheter un système Wi-Fi maillé pour une maison connectée ?', a: 'Un système maillé peut aider à couvrir toute la maison en 2,4 GHz pour les capteurs sur pile, ce qui compte plus pour la fiabilité des appareils que la vitesse brute. Vérifiez si chaque nœud fait aussi office de routeur frontalier Thread si cela vous importe.' },
          { q: 'Thread est-il la même chose que le Wi-Fi ?', a: 'Non. Thread est un protocole maillé à faible consommation distinct du Wi-Fi. Un routeur frontalier Thread fait le pont entre les deux. Voir le guide général sur les protocoles pour la comparaison complète.' },
          { q: 'Tous mes appareils de maison connectée ont-ils besoin de Thread ?', a: 'Non. De nombreux appareils utilisent encore Zigbee, Z-Wave ou directement le Wi-Fi. Thread n\'est qu\'un des protocoles employés ; voir le guide général sur les protocoles pour savoir lesquels utilisent généralement quoi.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Matter Alpha : Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list) (familles d\'appareils, octobre 2026)',
          '[Thread Group](https://www.threadgroup.org/) (spécification Thread 1.4.0 et certification)',
          '[Espressif : Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/) (obligatoire pour les routeurs frontaliers Thread 1.4)',
          '[Matter Alpha : SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha : Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de : The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/) (Matter 1.4, type d\'appareil HRAP)',
          '[Wikipédia : Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8) et [TechSpot : Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html) (calendrier 802.11bn)',
          '[eero : What is Thread?](https://eero.com/support/articles/what-is-thread) (prise en charge de Thread par eero)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave : protocoles expliqués](/fr/smart-home/smart-home-protocols-explained) — ce qu\'est Thread, comparé à d\'autres protocoles',
          '[Matter 1.6 expliqué : les nouveautés](/fr/smart-home/matter-1-6-explained) — la spécification de couche applicative, distincte du matériel réseau',
          '[Caméras de sécurité IA locales avec Frigate](/fr/smart-home/local-ai-security-camera) — la charge locale la plus gourmande en bande passante',
          '[Meilleurs dongles USB Zigbee et Thread](/fr/smart-home/best-zigbee-thread-dongles-2027) — matériel radio dédié pour un hub mini-PC/Pi',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Thread et routeurs Wi-Fi 7 pour maisons connectées (2026)',
      description: 'Quels routeurs sont des routeurs frontaliers Thread ? Thread 1.4 expliqué, systèmes maillés et hubs compatibles, et ce que demande vraiment le Wi-Fi 7.',
      url: 'https://www.promptquorum.com/fr/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'fr',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Routeur frontalier Thread' },
        { '@type': 'Thing', name: 'Réseau Wi-Fi' },
        { '@type': 'Thing', name: 'Réseau de maison connectée' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Un routeur Wi-Fi 7 inclut-il un routeur frontalier Thread ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pas automatiquement. Le Wi-Fi 7 décrit la radio Wi-Fi, alors qu\'un routeur frontalier Thread exige une radio Thread distincte et un logiciel dédié. La gamme eero 7 est répertoriée comme routeurs frontaliers Thread, mais confirmez cette fonction sur la fiche technique de tout routeur envisagé.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels routeurs peuvent servir de routeur frontalier Thread ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Parmi les systèmes maillés répertoriés comme routeurs frontaliers Thread figurent les eero 7, Pro 7, Max 7 et Outdoor 7 ainsi que le Google Nest Wifi Pro. Beaucoup en ont déjà un dans une enceinte, un écran, un HomePod, une Apple TV 4K, un Google TV Streamer ou un hub : vérifiez-les d\'abord.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ai-je besoin d\'un appareil routeur frontalier Thread séparé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Souvent non, car de nombreuses enceintes, boîtiers de streaming et hubs existants en incluent déjà un. Consultez les caractéristiques de votre matériel actuel avant d\'acheter un appareil dédié.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que Thread 1.4 et dois-je remplacer mon routeur frontalier ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 1.4 impose aux routeurs frontaliers de prendre en charge le partage d\'identifiants afin que des appareils de marques différentes rejoignent un même réseau Thread. Les routeurs frontaliers existants ont besoin d\'une mise à jour logicielle pour obtenir ces fonctions, et peuvent devoir être remplacés si le fabricant n\'en fournit pas. Ceux certifiés depuis le 1er janvier 2026 suivent Thread 1.4.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de routeurs frontaliers Thread devrais-je avoir ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plus d\'un, dans différentes zones du logement, améliore généralement la fiabilité du maillage, car ils coopèrent au lieu de s\'opposer. Avec Thread 1.4 et le partage d\'identifiants, des routeurs frontaliers de marques différentes peuvent rejoindre le même réseau.',
          },
        },
        {
          '@type': 'Question',
          name: 'Une norme Wi-Fi plus rapide aide-t-elle réellement ma maison connectée ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Elle aide principalement la bande passante du streaming des caméras si vous utilisez plusieurs caméras haute résolution, ainsi que les réseaux comptant beaucoup de clients simultanés. Pour la plupart des capteurs et prises connectées en 2,4 GHz ou en Zigbee/Thread, la dernière génération Wi-Fi change peu en pratique.',
          },
        },
        {
          '@type': 'Question',
          name: 'Dois-je attendre le Wi-Fi 8 avant d\'acheter un routeur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En général non. Le Wi-Fi 8 (802.11bn) n\'est pas ratifié et est attendu vers 2028. Il vise la fiabilité et la latence plutôt qu\'un débit de pointe plus élevé, et les routeurs frontaliers Thread fonctionnent indépendamment de la génération Wi-Fi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qui limite réellement les performances du réseau d\'une maison connectée ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le plus souvent la densité d\'appareils (nombre d\'appareils IoT connectés simultanément) et la couverture 2,4 GHz, plutôt que la vitesse Wi-Fi maximale. Vérifiez la limite de connexions simultanées de votre routeur si vous avez de nombreuses prises connectées et de nombreux capteurs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Devrais-je acheter un système Wi-Fi maillé pour une maison connectée ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un système maillé peut aider à couvrir toute la maison en 2,4 GHz pour les capteurs sur pile, ce qui compte plus pour la fiabilité des appareils que la vitesse brute. Vérifiez si chaque nœud fait aussi office de routeur frontalier Thread si cela vous importe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread est-il la même chose que le Wi-Fi ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Thread est un protocole maillé à faible consommation distinct du Wi-Fi. Un routeur frontalier Thread fait le pont entre les deux. Voir le guide général sur les protocoles pour la comparaison complète.',
          },
        },
        {
          '@type': 'Question',
          name: 'Tous mes appareils de maison connectée ont-ils besoin de Thread ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. De nombreux appareils utilisent encore Zigbee, Z-Wave ou directement le Wi-Fi. Thread n\'est qu\'un des protocoles employés ; voir le guide général sur les protocoles pour savoir lesquels utilisent généralement quoi.',
          },
        },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-ja.webp',
    title: 'スマートホーム向けThreadとWi-Fi 7ルーター（2026年）',
    seoTitle: 'スマートホーム向けThread + Wi-Fi 7ルーター（2026年）',
    intro:
      'スマートホームのネットワークには2つの層が必要です。低電力のThreadデバイス（ロック、センサー、一部の照明）をネットワークにつなぐThreadボーダールーターと、カメラや音声に十分な帯域幅と低遅延を備えたWi-Fiです。Thread 1.4とWi-Fi 7（802.11be）はどちらも現行の規格ですが、別々の機能です。eero 7シリーズやGoogle Nest Wifi ProのようにThreadボーダールーターを兼ねるWi-Fiメッシュシステムもある一方、Wi-Fi 7という表記だけではThread対応は分かりません。このガイドでは、どの機器ファミリーが該当するか、Thread 1.4で何が変わるか、購入前に何を確認すべきかを説明します。',
    metaDescription:
      'Threadボーダールーターになるルーターは？Thread 1.4の要点、対応するWi-Fiメッシュとハブ、スマートホームに必要なWi-Fi 7の条件を解説。',
    twitterDescription:
      'Wi-Fi 7の表記だけではThreadボーダールーターになりません。対応するメッシュシステムとハブ、Thread 1.4の変更点、スマートホームに必要なWi-Fiを解説。',
    readTime: '読了時間7分',
    educationalLevel: 'Intermediate',
    audience: 'ルーターやThreadボーダールーターを選んでいるスマートホーム所有者',
    primaryTerm: 'thread border router wifi smart home',
    targetKeywords: [
      'thread ボーダールーター wifi ルーター',
      'スマートホーム 最適 ルーター 2027',
      'wifi 7 スマートホーム カメラ 帯域幅',
      'thread メッシュ ネットワーク スマートホーム',
      'home assistant thread ボーダールーター',
    ],
    leadAnswerBlock:
      '**Wi-Fi 7ルーターが自動的にThreadボーダールーターになるわけではありません。eero 7シリーズのメッシュシステムとGoogle Nest Wifi ProはThreadボーダールーターとして掲載されていますが、Wi-Fiの世代からThread対応は分かりません。購入前にメーカーの仕様書でThreadボーダールーター対応を確認してください。2026年1月1日以降、新たに認証されるボーダールーターはThread 1.4を満たす必要があり、異なるブランドのボーダールーターが1つのThreadネットワークを共有できます。**',
    quickAnswerTop: {
      ja: {
        question: 'スマートホームにWi-Fi 7ルーターとThreadボーダールーターは必要ですか？',
        answer: 'Threadボーダールーターが必要なのは、Threadデバイス（最近のロックやセンサー、一部の照明）を使う場合だけです。すでに持っているスマートスピーカー、ディスプレイ、Apple TV、Google TV Streamer、ハブに内蔵されていることが多く、eero 7シリーズやGoogle Nest Wifi Proのように内蔵するメッシュWi-Fiシステムもあります。ThreadにWi-Fi 7は不要で、Wi-Fi 7が主に役立つのはカメラの帯域幅と多数の同時接続クライアントです。',
        bullets: [
          'Threadボーダールーター：まず手持ちのスピーカー、ディスプレイ、Apple TV、ハブを確認する',
          'Wi-Fi 7はThread対応を意味しない：Threadボーダールーターとして掲載されているか確認する',
          'Thread 1.4のボーダールーターはブランドをまたいで1つのThreadネットワークを共有できる',
          'Wi-Fiの優先事項：カメラと音声の負荷に見合う帯域幅と遅延、センサー用の2.4 GHzカバレッジ',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要約', anchor: 'tldr' },
      { label: 'Threadボーダールーターの役割', anchor: 'thread-border-router' },
      { label: 'Threadボーダールーターになる機器', anchor: 'border-router-devices' },
      { label: 'Thread 1.4で変わること', anchor: 'thread-14' },
      { label: 'Wi-Fiに実際に必要なもの', anchor: 'wifi-needs' },
      { label: 'Wi-Fi 7メッシュシステムの選び方', anchor: 'mesh-checklist' },
      { label: 'Wi-Fi 8を待たなくてよい理由', anchor: 'wifi-8' },
      { label: 'マーケティングで無視すべきこと', anchor: 'marketing-noise' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Threadボーダールーターは、Threadデバイスをネットワークにつなぐ機器で、スピーカー、ハブ、メッシュWi-Fiシステムに内蔵されていることが多く、Wi-Fi 7は主にカメラの帯域幅に役立つため、この2つは別々の購入判断です。' },
      { type: 'plain-terms', content: '多くのロックやセンサーなど一部のスマートホームデバイスは、Threadという低電力プロトコルを使います。通常のネットワークにつなぐには「ボーダールーター」が必要で、スマートスピーカー、Apple TV、メッシュWi-Fiシステムにすでに内蔵されていることが多くあります。Wi-Fi 7はカメラや混雑したネットワークに役立つ別のアップグレードで、それだけでThreadが加わるわけではありません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        items: [
          'Threadボーダールーターは、Threadデバイス（ロック、センサー、一部の照明）をネットワークにつなぎます。専用機器を買う前に、手持ちのスピーカー、ディスプレイ、Apple TV、ハブを確認してください。',
          'Wi-Fi 7とThreadは独立しています。eero 7シリーズとGoogle Nest Wifi ProはThreadボーダールーターとして掲載されていますが、Wi-Fi 7の表記だけではThread対応は保証されません。',
          'Thread 1.4のボーダールーターは認証情報の共有に対応する必要があり、異なるブランドのボーダールーターが1つのThreadネットワークに参加できます。2026年1月1日以降に認証されたボーダールーターはThread 1.4に準拠します。',
          'スマートホームのWi-Fiでは、箱に書かれた最大速度よりも、カメラ用の帯域幅、低遅延、2.4 GHzのカバレッジが重要です。',
          'Wi-Fi 8（802.11bn）は未承認で、規格の確定は2028年前後の見込みです。現時点ではWi-Fi 7が現行の選択肢です。',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'Threadボーダールーターの役割',
        content: '**Threadボーダールーターは、Threadデバイスを自宅のネットワークとインターネットにつなぐ機器で、すでに持っているスマートスピーカー、ディスプレイ、ストリーマー、ハブ、メッシュWi-Fiシステムの中に入っていることが多くあります。**',
        items: [
          'ThreadはWi-Fiとは別の、2.4 GHz帯を使う低電力メッシュプロトコルです。ボーダールーターがないと、ThreadデバイスはスマートフォンやHome Assistantに接続できません。',
          '同じネットワークに複数のボーダールーターを置くとメッシュのカバレッジが広がり冗長性も加わるため、家の別の場所に2台目を置くと一般に信頼性が上がります。',
          'Thread 1.4.0（2024年9月）は現行の仕様で、Thread Groupによれば、2026年1月1日以降は新しいThreadボーダールーターが認証を受けられる唯一のバージョンです。',
          'ボーダールーターにWi-Fi 7は不要です。Threadは独自の無線で動くため、古い世代のWi-FiでもボーダールーターがあればThreadデバイスは同様に動作します。',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'Threadボーダールーターになる機器',
        content: '**ボーダールーターは5つの機器ファミリーに分かれます。メッシュWi-Fiシステム、スマートスピーカーとディスプレイ、ストリーマー、スマートホームハブ、DIYボードです。** 以下の一覧はMatter Alphaのボーダールーター一覧（2026年10月更新）に基づいており、各製品のThreadバージョンは記載されていないため、Thread 1.4への対応はメーカーのページで確認してください。',
        columns: ['機器の種類', '例', '備考'],
        rows: [
          { '機器の種類': 'メッシュWi-Fiシステム', '例': 'eero 7、Pro 7、Max 7、Outdoor 7', '備考': 'Wi-Fi 7' },
          { '機器の種類': 'メッシュWi-Fiシステム', '例': 'Google Nest Wifi Pro', '備考': 'Wi-Fi 6E' },
          { '機器の種類': 'スピーカーとディスプレイ', '例': 'Echo（第4世代）、Echo Show 8/11、Nest Hub', '備考': 'すでに所有している場合が多い' },
          { '機器の種類': 'Apple製品', '例': 'HomePod mini、HomePod（第2世代）、Apple TV 4K', '備考': 'Apple TVは第3世代ならEthernetモデル' },
          { '機器の種類': 'ストリーマー', '例': 'Google TV Streamer（4K）', '備考': 'テレビに接続して使う' },
          { '機器の種類': 'スマートホームハブ', '例': 'SmartThings Station、Aqara Hub M3、IKEA DIRIGERA', '備考': 'ハブはMatterにも対応' },
          { '機器の種類': 'DIYとHome Assistant', '例': 'Home Assistant Green、Connect ZBT-2', '備考': 'オープンソースのOpenThread' },
        ],
        items: [
          'eeroはWi-Fi 6や6Eの世代を含む複数のモデルが掲載されています。お持ちのモデルは、eeroのサポートページで確認してください。',
          'ThreadデバイスがすでにスピーカーやApple TV経由で動いているなら、Wi-Fi 7にアップグレードしてもThreadデバイスには何も加わりません。',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'Thread 1.4で変わること',
        content: '**Thread 1.4では認証情報の共有が必須になり、異なるブランドのボーダールーターが、それぞれ別のネットワークを作る代わりに1つのThreadネットワークに参加できます。**',
        items: [
          '認証情報の共有により、新しいボーダールーターやデバイスが新規ネットワークを作らずに既存のThreadネットワークに参加できます。Espressifが説明しているとおり、Thread 1.4の仕様は認証されるすべてのボーダールーターにこれを求めています。',
          '対応状況にはばらつきがあります。SmartThingsのハブは認証情報の共有を含むThread 1.4にアップグレードされ、Home AssistantのOpenThreadボーダールーターもThread 1.4をベータ版として追加しましたが、すべての製品にアップデートがあるわけではありません。',
          'Thread Group会長のVividh Siddha氏によると、既存のボーダールーターはThread 1.4の機能を得るためにソフトウェア更新か買い替えが必要です。また、Matter 1.4ではThreadを備えるルーター向けにHome Router and Access Point（HRAP）デバイスタイプが追加されました。',
          'すべてのボーダールーターがThread 1.4に対応するまでは、ブランドを混在させると別々のThreadネットワークになる場合があります。同じブランドのボーダールーターを選ぶか、追加前に1.4対応を確認してください。',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'Wi-Fiに実際に必要なもの',
        content: '**カメラのストリーム（特にFrigateで複数の4Kカメラを扱う場合）や応答の速い音声アシスタントには、仕様書に載る最新のWi-Fi世代よりも、安定した帯域幅と低遅延が重要です。**',
        items: [
          'ローカルのカメラ検出（ローカルAI防犯カメラガイドを参照）は、ローカルネットワーク経由でFrigateのマシンに映像を送ります。この負荷は、特にカメラが複数ある場合、実際に使える帯域幅が大きいほど有利で、有線カメラならWi-Fiを使いません。',
          '音声アシスタントの応答性は、Wi-Fiの生のスループットよりもローカルハブの処理能力（ローカル音声アシスタントガイドを参照）に左右されますが、混雑したネットワークはすべての処理に遅延を加えます。',
          'Wi-Fi 7（802.11be）は320 MHzチャネルとマルチリンク動作を追加し、主に多数の同時クライアントや高帯域のデバイスに役立ちます。一般的なカメラと音声の負荷なら、適切に設定したWi-Fi 6や6Eのシステムで足りる場合があります。公称スループットは上限であり、得られる向上の保証ではありません。',
          'エントリークラスのWi-Fi 7メッシュシステムには、6 GHz無線のないデュアルバンド（2.4 GHzと5 GHz）のものもあります。世代の表記ではなく、対応バンドの一覧を確認してください。',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'Wi-Fi 7メッシュシステムの選び方',
        content: '**メッシュシステムは、最大速度の表記ではなく、Thread対応、有線バックホール、バンド数、クライアント数の上限の順で選んでください。**',
        items: [
          'Threadボーダールーター：メーカーのサポートページで確認し、Threadのバージョンが明記されているかも見てください。eero 7シリーズは掲載されていますが、他の多くのブランドは掲載されていません。',
          'バックホール：ノード間のEthernet、または専用のトライバンド無線バックホールを使うと、ノード間の通信がカメラの使うチャネルから切り離されます。',
          'バンド：6 GHz無線はカメラやノートPCに有利ですが、センサーは2.4 GHzのままなので、センサーには全部屋の2.4 GHzカバレッジの方が重要です。',
          'クライアント数の上限：プラグ、電球、センサーが多い家では、記載されている同時接続デバイス数の上限を確認してください。',
          '継続的な費用：eeroの一部機能は有料のeero Plusサブスクリプションの対象なので、基本システムに何が含まれるかを確認してください。',
          '既存の機器：スピーカー、Apple TV、ハブがすでにThreadボーダールーターとして働いているなら、Wi-Fiシステムはその性能だけで選べます。',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'Wi-Fi 8を待たなくてよい理由',
        content: '**Wi-Fi 8（IEEE 802.11bn）は未承認で、2028年前後の見込みのため、現時点で購入対象となる現行世代はWi-Fi 7です。**',
        items: [
          'ドラフトに基づくWi-Fi 8チップはCES 2026で発表され、ドラフト準拠の初期ルーターも報告されていますが、早期に購入した場合は承認後にファームウェア更新が必要になる可能性が高いです。',
          'Wi-Fi 8は最高速度の向上ではなく信頼性と遅延の改善を目指しており、周波数帯と320 MHz幅はWi-Fi 7と同じです。Wi-Fi Allianceの認証は2027年末前後と見込まれています。',
          'ThreadはWi-Fiの世代に依存しないため、今日買ったThreadボーダールーターは、後でWi-Fiをアップグレードしても使い続けられます。',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: 'マーケティングで無視すべきこと',
        content: '**ルーターの理論上の最大スループットがスマートホームでボトルネックになることはまれで、通常はデバイス密度、バッテリー駆動センサー用の2.4 GHzカバレッジ、同時接続数の上限の方が重要です。**',
        items: [
          '個々のスマートホームセンサーやバッテリー駆動デバイスの多くは、2.4 GHzのWi-Fiか、まったく別のプロトコル（Zigbee、Thread）を使うため、ルーターの6 GHzや最新規格の速度が直接影響することはまれです。',
          'スマートプラグ、センサー、その他のIoTデバイスが多い場合は、ルーターに記載された同時接続デバイス数の上限を確認してください。多くのスマートホームでは、この実用上の上限の方が理論上のスループットより重要です。',
          'ルーターの箱にある「スマートホーム対応」や「Matter対応」の表記からは、Threadボーダールーターかどうかは分かりません。仕様かメーカーのサポートページで、Threadボーダールーターの記載を探してください。',
          '実際の性能が分かるのはメーカーの速度表記ではなく独立したレビューです。PromptQuorumはこのガイドで挙げた製品をテストしていません。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Wi-Fi 7ルーターにはThreadボーダールーターが含まれていますか？', a: '自動的には含まれません。Wi-Fi 7はWi-Fi無線の規格で、Threadボーダールーターには別のThread無線とソフトウェアが必要です。eero 7シリーズはThreadボーダールーターとして掲載されていますが、検討するルーターごとに仕様書でThreadボーダールーター機能を確認してください。' },
          { q: 'どのルーターがThreadボーダールーターになりますか？', a: 'Threadボーダールーターとして掲載されているメッシュシステムには、eero 7、Pro 7、Max 7、Outdoor 7とGoogle Nest Wifi Proがあります。スマートスピーカー、ディスプレイ、HomePod、Apple TV 4K、Google TV Streamer、ハブにすでに内蔵されている人も多いので、まずそれらを確認してください。' },
          { q: '専用のThreadボーダールーター機器は必要ですか？', a: '多くの場合は不要です。既存のスマートスピーカー、ストリーマー、ハブの多くにすでに含まれています。専用機器を買う前に、現在の機器の仕様を確認してください。' },
          { q: 'Thread 1.4とは何ですか。ボーダールーターを買い替える必要はありますか？', a: 'Thread 1.4は、異なるブランドのデバイスが1つのThreadネットワークに参加できるよう、ボーダールーターに認証情報の共有への対応を求めます。既存のボーダールーターはThread 1.4の機能を得るためにソフトウェア更新が必要で、メーカーが提供しない場合は買い替えが必要になることがあります。2026年1月1日以降に認証されたボーダールーターはThread 1.4に準拠します。' },
          { q: 'Threadボーダールーターはいくつ持つべきですか？', a: '家の別々のエリアに複数置くと、競合せず協調して動くため、一般にメッシュの信頼性が上がります。Thread 1.4と認証情報の共有により、異なるブランドのボーダールーターが同じネットワークに参加できます。' },
          { q: 'より速いWi-Fi規格はスマートホームに実際に役立ちますか？', a: '主に、高解像度カメラを複数動かす場合のカメラストリーミングの帯域幅や、同時接続クライアントが多いネットワークで役立ちます。2.4 GHzやZigbee/Threadで動くほとんどの個々のセンサーやスマートプラグでは、最新のWi-Fi世代による実用上の差はほとんどありません。' },
          { q: 'ルーターを買う前にWi-Fi 8を待つべきですか？', a: '通常は待つ必要はありません。Wi-Fi 8（802.11bn）は未承認で、2028年前後の見込みです。最高速度の向上ではなく信頼性と遅延の改善を目指しており、ThreadボーダールーターはWi-Fiの世代とは無関係に動作します。' },
          { q: 'スマートホームのネットワーク性能を実際に制限するものは何ですか？', a: '最高のWi-Fi速度よりも、デバイス密度（同時に接続されているIoTデバイスの数）と2.4 GHzカバレッジの方が影響することが多くあります。スマートプラグやセンサーが多い場合は、ルーターの同時接続数の上限を確認してください。' },
          { q: 'スマートホーム向けにメッシュWi-Fiシステムを買うべきですか？', a: 'メッシュシステムは、バッテリー駆動センサー向けの家全体の2.4 GHzカバレッジに役立ちます。これは生の速度よりもデバイスの信頼性にとって重要です。Threadボーダールーターとしての機能が必要なら、各メッシュノードがその役割も果たすかを確認してください。' },
          { q: 'ThreadはWi-Fiと同じものですか？', a: 'いいえ。ThreadはWi-Fiとは別の低電力メッシュプロトコルで、Threadボーダールーターが両者の橋渡しをします。詳しい比較は、一般的なプロトコル解説記事を参照してください。' },
          { q: 'スマートホームのデバイスはすべてThreadが必要ですか？', a: 'いいえ。多くのデバイスは今もZigbee、Z-Wave、またはWi-Fiを直接使っています。Threadは使われているプロトコルの1つです。どのデバイスが通常どのプロトコルを使うかは、一般的なプロトコル解説記事を参照してください。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list)（機器ファミリー、2026年10月）',
          '[Thread Group](https://www.threadgroup.org/)（Thread 1.4.0の仕様と認証）',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/)（Thread 1.4ボーダールーターで必須）',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/)（Matter 1.4、HRAPデバイスタイプ）',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8)と[TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html)（802.11bnの時期）',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread)（eeroのThreadボーダールーター対応）',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Matter、Thread、Zigbee、Z-Wave：プロトコル解説](/ja/smart-home/smart-home-protocols-explained) — Threadとは何か、他のプロトコルとの比較',
          '[Matter 1.6を解説：新機能とは](/ja/smart-home/matter-1-6-explained) — ネットワークハードウェアとは別のアプリケーション層仕様',
          '[Frigateを使ったローカルAI防犯カメラ](/ja/smart-home/local-ai-security-camera) — 最も帯域幅を消費するローカルワークロード',
          '[最高のZigbeeおよびThread USBドングル](/ja/smart-home/best-zigbee-thread-dongles-2027) — ミニPC/Piハブ向けの専用無線ハードウェア',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホーム向けThreadとWi-Fi 7ルーター（2026年）',
      description: 'Threadボーダールーターになるルーターは？Thread 1.4の要点、対応するWi-Fiメッシュとハブ、スマートホームに必要なWi-Fi 7の条件を解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'ja',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Threadボーダールーター' },
        { '@type': 'Thing', name: 'Wi-Fiネットワーク' },
        { '@type': 'Thing', name: 'スマートホームネットワーク' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wi-Fi 7ルーターにはThreadボーダールーターが含まれていますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '自動的には含まれません。Wi-Fi 7はWi-Fi無線の規格で、Threadボーダールーターには別のThread無線とソフトウェアが必要です。eero 7シリーズはThreadボーダールーターとして掲載されていますが、検討するルーターごとに仕様書でThreadボーダールーター機能を確認してください。',
          },
        },
        {
          '@type': 'Question',
          name: 'どのルーターがThreadボーダールーターになりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Threadボーダールーターとして掲載されているメッシュシステムには、eero 7、Pro 7、Max 7、Outdoor 7とGoogle Nest Wifi Proがあります。スマートスピーカー、ディスプレイ、HomePod、Apple TV 4K、Google TV Streamer、ハブにすでに内蔵されている人も多いので、まずそれらを確認してください。',
          },
        },
        {
          '@type': 'Question',
          name: '専用のThreadボーダールーター機器は必要ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '多くの場合は不要です。既存のスマートスピーカー、ストリーマー、ハブの多くにすでに含まれています。専用機器を買う前に、現在の機器の仕様を確認してください。',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread 1.4とは何ですか。ボーダールーターを買い替える必要はありますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 1.4は、異なるブランドのデバイスが1つのThreadネットワークに参加できるよう、ボーダールーターに認証情報の共有への対応を求めます。既存のボーダールーターはThread 1.4の機能を得るためにソフトウェア更新が必要で、メーカーが提供しない場合は買い替えが必要になることがあります。2026年1月1日以降に認証されたボーダールーターはThread 1.4に準拠します。',
          },
        },
        {
          '@type': 'Question',
          name: 'Threadボーダールーターはいくつ持つべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '家の別々のエリアに複数置くと、競合せず協調して動くため、一般にメッシュの信頼性が上がります。Thread 1.4と認証情報の共有により、異なるブランドのボーダールーターが同じネットワークに参加できます。',
          },
        },
        {
          '@type': 'Question',
          name: 'より速いWi-Fi規格はスマートホームに実際に役立ちますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '主に、高解像度カメラを複数動かす場合のカメラストリーミングの帯域幅や、同時接続クライアントが多いネットワークで役立ちます。2.4 GHzやZigbee/Threadで動くほとんどの個々のセンサーやスマートプラグでは、最新のWi-Fi世代による実用上の差はほとんどありません。',
          },
        },
        {
          '@type': 'Question',
          name: 'ルーターを買う前にWi-Fi 8を待つべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '通常は待つ必要はありません。Wi-Fi 8（802.11bn）は未承認で、2028年前後の見込みです。最高速度の向上ではなく信頼性と遅延の改善を目指しており、ThreadボーダールーターはWi-Fiの世代とは無関係に動作します。',
          },
        },
        {
          '@type': 'Question',
          name: 'スマートホームのネットワーク性能を実際に制限するものは何ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '最高のWi-Fi速度よりも、デバイス密度（同時に接続されているIoTデバイスの数）と2.4 GHzカバレッジの方が影響することが多くあります。スマートプラグやセンサーが多い場合は、ルーターの同時接続数の上限を確認してください。',
          },
        },
        {
          '@type': 'Question',
          name: 'スマートホーム向けにメッシュWi-Fiシステムを買うべきですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'メッシュシステムは、バッテリー駆動センサー向けの家全体の2.4 GHzカバレッジに役立ちます。これは生の速度よりもデバイスの信頼性にとって重要です。Threadボーダールーターとしての機能が必要なら、各メッシュノードがその役割も果たすかを確認してください。',
          },
        },
        {
          '@type': 'Question',
          name: 'ThreadはWi-Fiと同じものですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。ThreadはWi-Fiとは別の低電力メッシュプロトコルで、Threadボーダールーターが両者の橋渡しをします。詳しい比較は、一般的なプロトコル解説記事を参照してください。',
          },
        },
        {
          '@type': 'Question',
          name: 'スマートホームのデバイスはすべてThreadが必要ですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。多くのデバイスは今もZigbee、Z-Wave、またはWi-Fiを直接使っています。Threadは使われているプロトコルの1つです。どのデバイスが通常どのプロトコルを使うかは、一般的なプロトコル解説記事を参照してください。',
          },
        },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-zh.webp',
    title: '智能家居的Thread与Wi-Fi 7路由器（2026年）',
    seoTitle: '智能家居Thread + Wi-Fi 7路由器（2026年）',
    intro:
      '智能家居网络需要两层：一层是Thread边界路由器，负责把低功耗的Thread设备（门锁、传感器、部分照明）桥接到你的网络；另一层是带宽足够、延迟较低的Wi-Fi，用于摄像头和语音。Thread 1.4与Wi-Fi 7（802.11be）都是当前规范，但二者是各自独立的功能：eero 7系列、Google Nest Wifi Pro等部分Wi-Fi Mesh系统同时可充当Thread边界路由器，而仅有Wi-Fi 7标识并不说明是否支持Thread。本指南说明哪些设备类别符合条件、Thread 1.4带来了什么变化，以及购买前应检查什么。',
    metaDescription:
      '哪些路由器是Thread边界路由器？解读Thread 1.4、哪些Wi-Fi Mesh系统和中枢支持，以及智能家居的Wi-Fi 7真正需要什么。',
    twitterDescription:
      'Wi-Fi 7标识并不代表路由器就是Thread边界路由器。哪些Mesh系统和中枢支持、Thread 1.4有何变化，以及智能家居Wi-Fi需要什么。',
    readTime: '阅读需7分钟',
    educationalLevel: 'Intermediate',
    audience: '正在选择路由器或Thread边界路由器的智能家居用户',
    primaryTerm: 'thread border router wifi smart home',
    targetKeywords: [
      'thread 边界路由器 wifi 路由器',
      '智能家居最佳路由器 2027',
      'wifi 7 智能家居摄像头带宽',
      'thread 网状网络 智能家居',
      'home assistant thread 边界路由器',
    ],
    leadAnswerBlock:
      '**Wi-Fi 7路由器并不自动就是Thread边界路由器：eero 7系列Mesh系统和Google Nest Wifi Pro被列为Thread边界路由器，但Wi-Fi代际本身并不说明是否支持Thread，因此购买前请在厂商规格表中确认是否支持Thread边界路由器。自2026年1月1日起，所有新认证的边界路由器都必须符合Thread 1.4，这使不同品牌的边界路由器可以共用同一个Thread网络。**',
    quickAnswerTop: {
      zh: {
        question: '我的智能家居需要Wi-Fi 7路由器和Thread边界路由器吗？',
        answer: '只有在使用Thread设备（许多较新的门锁、传感器和部分照明）时，才需要Thread边界路由器。它往往已内置在你已有的智能音箱、显示屏、Apple TV、Google TV Streamer或中枢中，部分Mesh Wi-Fi系统（如eero 7系列和Google Nest Wifi Pro）也自带。Thread并不需要Wi-Fi 7；Wi-Fi 7主要对摄像头带宽和大量同时连接的设备有意义。',
        bullets: [
          'Thread边界路由器：先检查你已有的音箱、显示屏、Apple TV和中枢',
          'Wi-Fi 7不代表支持Thread：请查看是否列为Thread边界路由器',
          'Thread 1.4边界路由器可跨品牌共用同一个Thread网络',
          'Wi-Fi优先级：满足摄像头和语音负载的带宽与延迟，并保证传感器所需的2.4 GHz覆盖',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: 'Thread边界路由器的作用', anchor: 'thread-border-router' },
      { label: '哪些设备是Thread边界路由器', anchor: 'border-router-devices' },
      { label: 'Thread 1.4带来的变化', anchor: 'thread-14' },
      { label: '你的Wi-Fi实际需要什么', anchor: 'wifi-needs' },
      { label: '如何选择Wi-Fi 7 Mesh系统', anchor: 'mesh-checklist' },
      { label: '为什么不必等待Wi-Fi 8', anchor: 'wifi-8' },
      { label: '营销宣传中应忽略的内容', anchor: 'marketing-noise' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Thread边界路由器把Thread设备桥接到你的网络，往往已内置在音箱、中枢或Mesh Wi-Fi系统中，而Wi-Fi 7主要提升摄像头带宽，因此二者是两个独立的购买决策。' },
      { type: 'plain-terms', content: '一些智能家居设备（如许多门锁和传感器）使用一种名为Thread的低功耗协议。要连上你的普通网络，它们需要一台“边界路由器”，而这通常已内置在智能音箱、Apple TV或Mesh Wi-Fi系统中。Wi-Fi 7是另一项独立的升级，有助于摄像头和繁忙的网络，本身并不会增加Thread功能。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        items: [
          'Thread边界路由器把Thread设备（门锁、传感器、部分照明）桥接到你的网络。购买专用设备之前，请先检查你的音箱、显示屏、Apple TV和中枢。',
          'Wi-Fi 7与Thread相互独立：eero 7系列和Google Nest Wifi Pro被列为Thread边界路由器，但仅有Wi-Fi 7标识并不保证支持Thread。',
          'Thread 1.4边界路由器必须支持凭据共享，因此不同品牌的边界路由器可以加入同一个Thread网络。2026年1月1日起认证的边界路由器均遵循Thread 1.4。',
          '对智能家居Wi-Fi而言，摄像头所需带宽、低延迟和2.4 GHz覆盖比包装盒上的峰值速度更重要。',
          'Wi-Fi 8（802.11bn）尚未批准，标准预计在2028年前后完成，因此Wi-Fi 7仍是当前的选择。',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'Thread边界路由器的作用',
        content: '**Thread边界路由器把你的Thread设备连接到家庭网络和互联网，而且往往已经内置在你拥有的智能音箱、显示屏、流媒体设备、中枢或Mesh Wi-Fi系统中。**',
        items: [
          'Thread是运行在2.4 GHz无线频段上的低功耗网状协议，与Wi-Fi相互独立。没有边界路由器，Thread设备无法连接你的手机或Home Assistant。',
          '同一网络中的多台边界路由器可扩展网状覆盖并提供冗余，因此在家中另一区域再放一台，通常能提高可靠性。',
          '据Thread Group称，Thread 1.4.0（2024年9月）是当前规范，并且自2026年1月1日起，是新Thread边界路由器唯一可以通过认证的版本。',
          '边界路由器并不需要Wi-Fi 7：Thread使用自己的无线电，因此对Thread设备而言，搭配较早Wi-Fi代际的边界路由器同样可用。',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: '哪些设备是Thread边界路由器',
        content: '**边界路由器分为五类设备：Mesh Wi-Fi系统、智能音箱和显示屏、流媒体设备、智能家居中枢以及DIY开发板。**下表依据Matter Alpha的边界路由器目录（2026年10月更新）；该目录并未标明各产品的Thread版本，请到厂商页面确认是否支持Thread 1.4。',
        columns: ['设备类别', '示例', '备注'],
        rows: [
          { '设备类别': 'Mesh Wi-Fi系统', '示例': 'eero 7, Pro 7, Max 7, Outdoor 7', '备注': 'Wi-Fi 7' },
          { '设备类别': 'Mesh Wi-Fi系统', '示例': 'Google Nest Wifi Pro', '备注': 'Wi-Fi 6E' },
          { '设备类别': '音箱和显示屏', '示例': 'Echo (4th gen), Echo Show 8/11, Nest Hub', '备注': '常已拥有' },
          { '设备类别': 'Apple设备', '示例': 'HomePod mini, HomePod (2nd gen), Apple TV 4K', '备注': 'Apple TV：第3代需以太网型号' },
          { '设备类别': '流媒体设备', '示例': 'Google TV Streamer (4K)', '备注': '接入电视即可' },
          { '设备类别': '智能家居中枢', '示例': 'SmartThings Station, Aqara Hub M3, IKEA DIRIGERA', '备注': '中枢同时支持Matter' },
          { '设备类别': 'DIY与Home Assistant', '示例': 'Home Assistant Green, Connect ZBT-2', '备注': '开源OpenThread' },
        ],
        items: [
          '列表中包含多款eero型号，其中也有Wi-Fi 6和6E世代；请到eero支持页面核实你的具体型号。',
          '如果你的Thread设备已通过音箱或Apple TV正常工作，升级到Wi-Fi 7不会给它们带来任何增益。',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'Thread 1.4带来的变化',
        content: '**Thread 1.4强制要求凭据共享，因此不同品牌的边界路由器可以加入同一个Thread网络，而不是各自创建一个网络。**',
        items: [
          '凭据共享让新的边界路由器或设备无需新建网络，即可加入现有的Thread网络；正如Espressif所解释的，Thread 1.4规范要求每台通过认证的边界路由器都支持这一点。',
          '推进情况并不均衡：SmartThings中枢已升级到支持凭据共享的Thread 1.4，Home Assistant的OpenThread边界路由器也以测试版加入了Thread 1.4，但并非每款产品都有更新。',
          '据Thread Group总裁Vividh Siddha称，现有边界路由器需要软件更新或更换才能获得Thread 1.4功能；Matter 1.4还为包含Thread的路由器新增了家庭路由器和接入点（HRAP）设备类型。',
          '在所有边界路由器都支持Thread 1.4之前，混用品牌仍可能导致出现多个独立的Thread网络，因此请优先选择同品牌的边界路由器，或在添加前确认其支持1.4。',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: '你的Wi-Fi实际需要什么',
        content: '**摄像头视频流（尤其是通过Frigate运行多个4K摄像头）和响应灵敏的语音助手，比规格表上最新的Wi-Fi代际数字更需要稳定的带宽和低延迟。**',
        items: [
          '本地摄像头检测（参见本地AI安防摄像头指南）会通过本地网络把视频发送到你的Frigate主机。这类负载受益于更多实际带宽，摄像头数量多时尤其明显，而有线摄像头则完全不占用Wi-Fi。',
          '语音助手的响应速度更多取决于本地中枢的处理能力（参见本地语音助手指南），而非原始Wi-Fi吞吐量，不过网络拥堵会给一切都增加延迟。',
          'Wi-Fi 7（802.11be）增加了320 MHz信道和多链路操作，主要有助于大量同时连接的设备和高带宽设备。对典型的摄像头和语音负载而言，配置良好的Wi-Fi 6或6E系统可能已经足够；请把宣传的吞吐量视为上限，而非有保证的收益。',
          '入门级Wi-Fi 7 Mesh系统可能只有双频段（2.4和5 GHz），没有6 GHz无线电，因此请查看频段清单，而不是只看代际标识。',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: '如何选择Wi-Fi 7 Mesh系统',
        content: '**选择Mesh系统时，请依次按Thread支持、有线回程、频段数量和客户端上限来判断，而不是看宣传的最高速度。**',
        items: [
          'Thread边界路由器：到厂商支持页面确认，并查看是否标明了Thread版本。eero 7系列已被列入；许多其他品牌则没有。',
          '回程：节点之间使用以太网，或专用的三频无线回程，可让节点间的流量避开摄像头所用的信道。',
          '频段：6 GHz无线电对摄像头和笔记本电脑有帮助；传感器仍使用2.4 GHz，因此每个房间的2.4 GHz覆盖对它们更重要。',
          '客户端上限：插座、灯泡和传感器很多的家庭，应查看标明的同时连接设备上限。',
          '持续成本：部分eero功能需要付费订阅eero Plus，因此请确认基础系统包含哪些功能。',
          '现有硬件：如果音箱、Apple TV或中枢已经充当你的Thread边界路由器，就可以纯粹按Wi-Fi本身的优劣来选择Wi-Fi系统。',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: '为什么不必等待Wi-Fi 8',
        content: '**Wi-Fi 8（IEEE 802.11bn）尚未批准，预计在2028年前后完成，因此Wi-Fi 7仍是当前值得购买的世代。**',
        items: [
          '基于草案的Wi-Fi 8芯片已在CES 2026上发布，也有基于草案的早期路由器的报道，但早期用户在标准批准后很可能需要更新固件。',
          'Wi-Fi 8的目标是可靠性和延迟，而非更高的峰值速度，并沿用与Wi-Fi 7相同的频段和320 MHz带宽；Wi-Fi联盟的认证预计在2027年底前后开始。',
          'Thread与Wi-Fi代际无关，因此今天购买的Thread边界路由器在日后升级Wi-Fi之后仍能继续使用。',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: '营销宣传中应忽略的内容',
        content: '**路由器的理论最大吞吐量很少是智能家居中的瓶颈：设备密度、电池供电传感器所需的2.4 GHz覆盖，以及同时连接数限制通常更为重要。**',
        items: [
          '大多数单个智能家居传感器和电池供电设备使用2.4 GHz Wi-Fi，或完全使用另一种协议（Zigbee、Thread），因此路由器的6 GHz或最新标准速度很少直接影响它们。',
          '如果你有许多智能插座、传感器和其他物联网设备，请查看路由器标明的同时连接设备数上限；对大多数智能家居来说，这个实际限制比理论吞吐量更重要。',
          '路由器包装上的“智能家居就绪”或“Matter就绪”并不说明它是否是Thread边界路由器；请在规格说明或厂商支持页面中查找Thread边界路由器。',
          '反映真实性能的是独立评测，而不是厂商标称的速度；PromptQuorum没有测试过本指南中提到的产品。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Wi-Fi 7路由器包含Thread边界路由器吗？', a: '不会自动包含。Wi-Fi 7描述的是Wi-Fi无线电，而Thread边界路由器需要单独的Thread无线电和软件。eero 7系列被列为Thread边界路由器，但对于你考虑的任何路由器，都应在规格表中确认Thread边界路由器功能。' },
          { q: '哪些路由器可以充当Thread边界路由器？', a: '被列为Thread边界路由器的Mesh系统包括eero 7、Pro 7、Max 7、Outdoor 7以及Google Nest Wifi Pro。很多人已经在智能音箱、显示屏、HomePod、Apple TV 4K、Google TV Streamer或中枢中拥有一台，请先检查这些设备。' },
          { q: '我需要单独的Thread边界路由器设备吗？', a: '通常不需要，因为许多现有的智能音箱、流媒体设备和中枢已经内置了一台。购买专用设备之前，请先检查现有硬件的规格。' },
          { q: 'Thread 1.4是什么？我需要更换边界路由器吗？', a: 'Thread 1.4要求边界路由器支持凭据共享，使不同品牌的设备能加入同一个Thread网络。现有边界路由器需要软件更新才能获得Thread 1.4功能，如果厂商不提供更新，可能需要更换。2026年1月1日起认证的边界路由器均遵循Thread 1.4。' },
          { q: '我应该有多少台Thread边界路由器？', a: '在家中不同区域配置不止一台，通常能提高网状网络的可靠性，因为它们是协作而非冲突的关系。有了Thread 1.4和凭据共享，不同品牌的边界路由器可以加入同一个网络。' },
          { q: '更快的Wi-Fi标准真的对我的智能家居有帮助吗？', a: '它主要有助于运行多个高分辨率摄像头时的视频流带宽，以及同时连接大量客户端的网络。对于大多数使用2.4 GHz或Zigbee/Thread的单个传感器和智能插座，最新的Wi-Fi代际几乎没有实际差异。' },
          { q: '我应该等Wi-Fi 8再买路由器吗？', a: '通常不必。Wi-Fi 8（802.11bn）尚未批准，预计在2028年前后完成。它的目标是可靠性和延迟，而非更高的峰值速度，而且Thread边界路由器的工作与Wi-Fi代际无关。' },
          { q: '实际上是什么限制了智能家居的网络性能？', a: '往往是设备密度（同时连接的物联网设备数量）和2.4 GHz覆盖，而不是顶级Wi-Fi速度。如果你有许多智能插座和传感器，请查看路由器的同时连接数限制。' },
          { q: '我应该为智能家居购买Mesh Wi-Fi系统吗？', a: 'Mesh系统有助于为电池供电传感器提供全屋2.4 GHz覆盖，这对设备可靠性的影响超过原始速度。如果你在意Thread，请确认每个Mesh节点是否也充当Thread边界路由器。' },
          { q: 'Thread和Wi-Fi是一回事吗？', a: '不是。Thread是一种独立的低功耗网状协议，与Wi-Fi不同。Thread边界路由器是两者之间的桥梁。完整对比请参见通用协议入门文章。' },
          { q: '我所有的智能家居设备都需要Thread吗？', a: '不需要。许多设备仍直接使用Zigbee、Z-Wave或Wi-Fi。Thread只是正在使用的多种协议之一；有关哪些设备通常使用哪种协议，请参见通用协议入门文章。' },
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list)（设备类别，2026年10月）',
          '[Thread Group](https://www.threadgroup.org/)（Thread 1.4.0规范与认证）',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/)（Thread 1.4边界路由器强制要求）',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/)（Matter 1.4，HRAP设备类型）',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8)和[TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html)（802.11bn时间表）',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread)（eero对Thread边界路由器的支持）',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Matter、Thread、Zigbee、Z-Wave：协议详解](/zh/smart-home/smart-home-protocols-explained) — Thread是什么，与其他协议的比较',
          '[Matter 1.6 详解：有哪些新功能](/zh/smart-home/matter-1-6-explained) — 与网络硬件分开的应用层规范',
          '[使用Frigate的本地AI安防摄像头](/zh/smart-home/local-ai-security-camera) — 带宽消耗最大的本地工作负载',
          '[最佳Zigbee和Thread USB加密狗](/zh/smart-home/best-zigbee-thread-dongles-2027) — 用于迷你PC/树莓派中枢的专用无线电硬件',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居的Thread与Wi-Fi 7路由器（2026年）',
      description: '哪些路由器是Thread边界路由器？解读Thread 1.4、哪些Wi-Fi Mesh系统和中枢支持，以及智能家居的Wi-Fi 7真正需要什么。',
      url: 'https://www.promptquorum.com/zh/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'zh',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Thread边界路由器' },
        { '@type': 'Thing', name: 'Wi-Fi网络' },
        { '@type': 'Thing', name: '智能家居网络' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wi-Fi 7路由器包含Thread边界路由器吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不会自动包含。Wi-Fi 7描述的是Wi-Fi无线电，而Thread边界路由器需要单独的Thread无线电和软件。eero 7系列被列为Thread边界路由器，但对于你考虑的任何路由器，都应在规格表中确认Thread边界路由器功能。',
          },
        },
        {
          '@type': 'Question',
          name: '哪些路由器可以充当Thread边界路由器？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '被列为Thread边界路由器的Mesh系统包括eero 7、Pro 7、Max 7、Outdoor 7以及Google Nest Wifi Pro。很多人已经在智能音箱、显示屏、HomePod、Apple TV 4K、Google TV Streamer或中枢中拥有一台，请先检查这些设备。',
          },
        },
        {
          '@type': 'Question',
          name: '我需要单独的Thread边界路由器设备吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '通常不需要，因为许多现有的智能音箱、流媒体设备和中枢已经内置了一台。购买专用设备之前，请先检查现有硬件的规格。',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread 1.4是什么？我需要更换边界路由器吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 1.4要求边界路由器支持凭据共享，使不同品牌的设备能加入同一个Thread网络。现有边界路由器需要软件更新才能获得Thread 1.4功能，如果厂商不提供更新，可能需要更换。2026年1月1日起认证的边界路由器均遵循Thread 1.4。',
          },
        },
        {
          '@type': 'Question',
          name: '我应该有多少台Thread边界路由器？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '在家中不同区域配置不止一台，通常能提高网状网络的可靠性，因为它们是协作而非冲突的关系。有了Thread 1.4和凭据共享，不同品牌的边界路由器可以加入同一个网络。',
          },
        },
        {
          '@type': 'Question',
          name: '更快的Wi-Fi标准真的对我的智能家居有帮助吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '它主要有助于运行多个高分辨率摄像头时的视频流带宽，以及同时连接大量客户端的网络。对于大多数使用2.4 GHz或Zigbee/Thread的单个传感器和智能插座，最新的Wi-Fi代际几乎没有实际差异。',
          },
        },
        {
          '@type': 'Question',
          name: '我应该等Wi-Fi 8再买路由器吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '通常不必。Wi-Fi 8（802.11bn）尚未批准，预计在2028年前后完成。它的目标是可靠性和延迟，而非更高的峰值速度，而且Thread边界路由器的工作与Wi-Fi代际无关。',
          },
        },
        {
          '@type': 'Question',
          name: '实际上是什么限制了智能家居的网络性能？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '往往是设备密度（同时连接的物联网设备数量）和2.4 GHz覆盖，而不是顶级Wi-Fi速度。如果你有许多智能插座和传感器，请查看路由器的同时连接数限制。',
          },
        },
        {
          '@type': 'Question',
          name: '我应该为智能家居购买Mesh Wi-Fi系统吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mesh系统有助于为电池供电传感器提供全屋2.4 GHz覆盖，这对设备可靠性的影响超过原始速度。如果你在意Thread，请确认每个Mesh节点是否也充当Thread边界路由器。',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread和Wi-Fi是一回事吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不是。Thread是一种独立的低功耗网状协议，与Wi-Fi不同。Thread边界路由器是两者之间的桥梁。完整对比请参见通用协议入门文章。',
          },
        },
        {
          '@type': 'Question',
          name: '我所有的智能家居设备都需要Thread吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不需要。许多设备仍直接使用Zigbee、Z-Wave或Wi-Fi。Thread只是正在使用的多种协议之一；有关哪些设备通常使用哪种协议，请参见通用协议入门文章。',
          },
        },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-es.webp',
    title: 'Thread y routers Wi-Fi 7 para hogares inteligentes (2026)',
    seoTitle: 'Thread + routers Wi-Fi 7 para hogares inteligentes (2026)',
    intro:
      'La red de un hogar inteligente necesita dos capas: un router frontera Thread que conecte los dispositivos Thread de bajo consumo (cerraduras, sensores, parte de la iluminación) con tu red, y un Wi-Fi con ancho de banda suficiente y baja latencia para cámaras y voz. Thread 1.4 y Wi-Fi 7 (802.11be) están vigentes, pero son funciones distintas: varios sistemas Wi-Fi en malla, como la gama eero 7 y Google Nest Wifi Pro, también actúan como routers frontera Thread, mientras que la etiqueta Wi-Fi 7 por sí sola no dice nada sobre Thread. Esta guía indica qué familias de dispositivos cumplen, qué cambia con Thread 1.4 y qué comprobar antes de comprar.',
    metaDescription:
      '¿Qué routers son routers frontera Thread? Thread 1.4 explicado, qué sistemas Wi-Fi en malla y hubs lo son y qué necesita de verdad el Wi-Fi 7 en casa.',
    twitterDescription:
      'Una etiqueta Wi-Fi 7 no convierte un router en router frontera Thread. Qué sistemas en malla y hubs sirven, qué cambia con Thread 1.4 y qué necesita el Wi-Fi del hogar.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de hogar inteligente eligiendo un router o un router frontera Thread',
    primaryTerm: 'router frontera thread wifi hogar inteligente',
    targetKeywords: [
      'router frontera thread wifi router',
      'mejor router hogar inteligente 2027',
      'wifi 7 ancho de banda camara hogar inteligente',
      'red malla thread hogar inteligente',
      'home assistant router frontera thread',
    ],
    leadAnswerBlock:
      '**Un router Wi-Fi 7 no es automáticamente un router frontera Thread: los sistemas en malla eero 7 y Google Nest Wifi Pro figuran como routers frontera Thread, pero la generación Wi-Fi no dice nada sobre Thread, así que confirma la compatibilidad con router frontera Thread en la ficha técnica del fabricante antes de comprar. Desde el 1 de enero de 2026, todo router frontera recién certificado debe cumplir Thread 1.4, lo que permite que routers frontera de distintas marcas compartan una misma red Thread.**',
    quickAnswerTop: {
      es: {
        question: '¿Necesito un router Wi-Fi 7 y un router frontera Thread para mi hogar inteligente?',
        answer: 'Solo necesitas un router frontera Thread si usas dispositivos Thread (muchas cerraduras y sensores nuevos y parte de la iluminación). A menudo ya viene integrado en un altavoz inteligente, una pantalla, un Apple TV, un Google TV Streamer o un hub que tengas, y algunos sistemas Wi-Fi en malla, como la gama eero 7 y Google Nest Wifi Pro, incluyen uno. No necesitas Wi-Fi 7 para Thread; el Wi-Fi 7 importa sobre todo para el ancho de banda de las cámaras y para muchos clientes simultáneos.',
        bullets: [
          'Router frontera Thread: revisa primero los altavoces, pantallas, Apple TV y hubs que ya tengas',
          'Wi-Fi 7 no implica compatibilidad con Thread: busca el listado como router frontera Thread',
          'Los routers frontera Thread 1.4 comparten una sola red Thread entre marcas',
          'Prioridad en el Wi-Fi: ancho de banda y latencia para tus cámaras y tu voz, más cobertura de 2,4 GHz para sensores',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué hace un router frontera Thread', anchor: 'thread-border-router' },
      { label: 'Qué dispositivos son routers frontera Thread', anchor: 'border-router-devices' },
      { label: 'Qué cambia con Thread 1.4', anchor: 'thread-14' },
      { label: 'Qué necesita realmente tu Wi-Fi', anchor: 'wifi-needs' },
      { label: 'Cómo elegir un sistema en malla Wi-Fi 7', anchor: 'mesh-checklist' },
      { label: 'Por qué no esperar al Wi-Fi 8', anchor: 'wifi-8' },
      { label: 'Qué ignorar en el marketing', anchor: 'marketing-noise' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un router frontera Thread conecta los dispositivos Thread con tu red y suele venir integrado en un altavoz, hub o sistema Wi-Fi en malla, mientras que el Wi-Fi 7 ayuda sobre todo al ancho de banda de las cámaras, así que son dos decisiones de compra distintas.' },
      { type: 'plain-terms', content: 'Algunos dispositivos del hogar inteligente, como muchas cerraduras y sensores, usan un protocolo de bajo consumo llamado Thread. Para llegar a tu red normal necesitan un "router frontera", que a menudo ya está integrado en un altavoz inteligente, un Apple TV o un sistema Wi-Fi en malla. El Wi-Fi 7 es una mejora aparte que ayuda a las cámaras y a las redes con mucha carga, y por sí solo no añade Thread.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Un router frontera Thread conecta los dispositivos Thread (cerraduras, sensores, parte de la iluminación) con tu red. Revisa tus altavoces, pantallas, Apple TV y hubs antes de comprar uno dedicado.',
          'Wi-Fi 7 y Thread son independientes: la gama eero 7 y Google Nest Wifi Pro figuran como routers frontera Thread, pero una etiqueta Wi-Fi 7 por sí sola no garantiza compatibilidad con Thread.',
          'Los routers frontera Thread 1.4 deben admitir el uso compartido de credenciales, de modo que los de distintas marcas puedan unirse a una misma red Thread. Los routers frontera certificados desde el 1 de enero de 2026 siguen Thread 1.4.',
          'Para el Wi-Fi del hogar inteligente, importan más el ancho de banda para las cámaras, la baja latencia y la cobertura de 2,4 GHz que la velocidad máxima impresa en la caja.',
          'Wi-Fi 8 (802.11bn) no está ratificado; se espera el estándar hacia 2028, así que Wi-Fi 7 sigue siendo la opción actual.',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'Qué hace un router frontera Thread',
        content: '**Un router frontera Thread conecta tus dispositivos Thread con la red doméstica y con internet, y a menudo ya está dentro de un altavoz inteligente, pantalla, streamer, hub o sistema Wi-Fi en malla que tengas.**',
        items: [
          'Thread es un protocolo de malla de bajo consumo en la banda de radio de 2,4 GHz, independiente del Wi-Fi. Los dispositivos Thread no pueden comunicarse con tu teléfono ni con Home Assistant sin un router frontera.',
          'Varios routers frontera en una misma red amplían la cobertura de la malla y añaden redundancia, así que un segundo router en otra zona de la casa suele mejorar la fiabilidad.',
          'Thread 1.4.0 (septiembre de 2024) es la especificación actual y, desde el 1 de enero de 2026, la única versión con la que se pueden certificar nuevos routers frontera Thread, según el Thread Group.',
          'Un router frontera no necesita Wi-Fi 7: Thread funciona con su propia radio, así que una generación Wi-Fi anterior con un router frontera sirve igual para los dispositivos Thread.',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'Qué dispositivos son routers frontera Thread',
        content: '**Los routers frontera proceden de cinco familias de dispositivos: sistemas Wi-Fi en malla, altavoces y pantallas inteligentes, streamers, hubs del hogar inteligente y placas DIY.** La lista siguiente sigue el directorio de routers frontera de Matter Alpha, actualizado en octubre de 2026; no indica la versión de Thread de cada producto, así que consulta la página del fabricante para confirmar Thread 1.4.',
        columns: ['Familia de dispositivo', 'Ejemplos', 'Nota'],
        rows: [
          { 'Familia de dispositivo': 'Sistemas Wi-Fi en malla', Ejemplos: 'eero 7, Pro 7, Max 7, Outdoor 7', Nota: 'Wi-Fi 7' },
          { 'Familia de dispositivo': 'Sistemas Wi-Fi en malla', Ejemplos: 'Google Nest Wifi Pro', Nota: 'Wi-Fi 6E' },
          { 'Familia de dispositivo': 'Altavoces y pantallas', Ejemplos: 'Echo (4.ª gen.), Echo Show 8/11, Nest Hub', Nota: 'A menudo ya se tienen' },
          { 'Familia de dispositivo': 'Dispositivos Apple', Ejemplos: 'HomePod mini, HomePod (2.ª gen.), Apple TV 4K', Nota: 'Apple TV: modelo Ethernet en 3.ª gen.' },
          { 'Familia de dispositivo': 'Streamers', Ejemplos: 'Google TV Streamer (4K)', Nota: 'Se conecta a la TV' },
          { 'Familia de dispositivo': 'Hubs del hogar inteligente', Ejemplos: 'SmartThings Station, Aqara Hub M3, IKEA DIRIGERA', Nota: 'El hub también usa Matter' },
          { 'Familia de dispositivo': 'DIY y Home Assistant', Ejemplos: 'Home Assistant Green, Connect ZBT-2', Nota: 'OpenThread de código abierto' },
        ],
        items: [
          'Figuran varios modelos de eero, incluidas las generaciones Wi-Fi 6 y 6E; verifica tu modelo exacto en la página de soporte de eero.',
          'Si tus dispositivos Thread ya funcionan a través de un altavoz o un Apple TV, una mejora a Wi-Fi 7 no les aportará nada.',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'Qué cambia con Thread 1.4',
        content: '**Thread 1.4 hace obligatorio el uso compartido de credenciales, de modo que routers frontera de distintas marcas pueden unirse a una misma red Thread en lugar de crear cada uno la suya.**',
        items: [
          'El uso compartido de credenciales permite que un nuevo router frontera o dispositivo se una a una red Thread existente sin crear otra; la especificación Thread 1.4 lo exige a todo router frontera certificado, como explica Espressif.',
          'El despliegue es desigual: los hubs SmartThings se han actualizado a Thread 1.4 con uso compartido de credenciales, y el router frontera OpenThread de Home Assistant incorporó Thread 1.4 como beta, pero no todos los productos tienen actualización.',
          'Los routers frontera existentes necesitan una actualización de software o su sustitución para obtener las funciones de Thread 1.4, según el presidente del Thread Group, Vividh Siddha; Matter 1.4 también añadió un tipo de dispositivo Home Router and Access Point (HRAP) para routers que incluyen Thread.',
          'Mientras no todos tus routers frontera admitan Thread 1.4, mezclar marcas aún puede dejarte con redes Thread separadas, así que prefiere routers frontera de la misma marca o confirma la compatibilidad con 1.4 antes de añadir otro.',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'Qué necesita realmente tu Wi-Fi',
        content: '**Los flujos de cámara (sobre todo varias cámaras 4K con Frigate) y los asistentes de voz receptivos necesitan ancho de banda constante y baja latencia más que el número de la generación Wi-Fi más reciente en una ficha técnica.**',
        items: [
          'La detección local con cámaras (consulta la guía de cámaras de seguridad con IA local) envía vídeo a tu equipo Frigate por la red local. Esta carga se beneficia de más ancho de banda real, sobre todo con varias cámaras, y las cámaras por cable evitan el Wi-Fi por completo.',
          'La capacidad de respuesta del asistente de voz depende más del procesamiento de tu hub local (consulta la guía del asistente de voz local) que del rendimiento bruto del Wi-Fi, aunque una red congestionada añade latencia a todo.',
          'Wi-Fi 7 (802.11be) añade canales de 320 MHz y operación multienlace, que ayudan sobre todo con muchos clientes simultáneos y dispositivos de gran ancho de banda. Para una carga típica de cámaras y voz, un sistema Wi-Fi 6 o 6E bien configurado puede bastar; considera el rendimiento anunciado como un techo, no como una mejora garantizada.',
          'Los sistemas en malla Wi-Fi 7 de gama básica pueden ser de doble banda (2,4 y 5 GHz) sin radio de 6 GHz, así que revisa la lista de bandas en lugar de la etiqueta de generación.',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'Cómo elegir un sistema en malla Wi-Fi 7',
        content: '**Elige un sistema en malla según la compatibilidad con Thread, el backhaul por cable, el número de bandas y los límites de clientes, en ese orden, y no por la cifra de velocidad destacada.**',
        items: [
          'Router frontera Thread: confírmalo en la página de soporte del fabricante y comprueba si indica la versión de Thread. Los sistemas eero 7 figuran en la lista; muchas otras marcas no.',
          'Backhaul: Ethernet entre nodos, o un backhaul inalámbrico tribanda dedicado, mantiene el tráfico entre nodos fuera del canal que usan tus cámaras.',
          'Bandas: una radio de 6 GHz ayuda a cámaras y portátiles; los sensores siguen en 2,4 GHz, así que la cobertura de 2,4 GHz en cada habitación les importa más.',
          'Límite de clientes: los hogares con muchos enchufes, bombillas y sensores deben revisar el límite declarado de dispositivos simultáneos.',
          'Coste continuo: algunas funciones de eero requieren la suscripción de pago eero Plus, así que comprueba qué incluye el sistema base.',
          'Hardware existente: si un altavoz, un Apple TV o un hub ya hace de router frontera Thread, puedes elegir el sistema Wi-Fi solo por sus méritos como Wi-Fi.',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'Por qué no esperar al Wi-Fi 8',
        content: '**Wi-Fi 8 (IEEE 802.11bn) no está ratificado y se espera hacia 2028, así que Wi-Fi 7 es la generación actual que conviene comprar.**',
        items: [
          'Los chips Wi-Fi 8 basados en el borrador se anunciaron en el CES 2026 y se han reportado primeros routers basados en él, pero los primeros compradores probablemente necesitarán actualizaciones de firmware tras la ratificación.',
          'Wi-Fi 8 apunta a la fiabilidad y la latencia más que a una mayor velocidad máxima, y mantiene las mismas bandas y el ancho de 320 MHz de Wi-Fi 7; la certificación de la Wi-Fi Alliance se espera hacia finales de 2027.',
          'Thread no depende de la generación Wi-Fi, así que un router frontera Thread comprado hoy seguirá funcionando tras una mejora posterior del Wi-Fi.',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: 'Qué ignorar en el marketing',
        content: '**El rendimiento máximo teórico de un router rara vez es el cuello de botella en un hogar inteligente: la densidad de dispositivos, la cobertura de 2,4 GHz para sensores con batería y los límites de conexiones simultáneas suelen importar más.**',
        items: [
          'La mayoría de los sensores y dispositivos con batería del hogar inteligente usan Wi-Fi de 2,4 GHz o un protocolo distinto (Zigbee, Thread), así que la velocidad de 6 GHz o del estándar más nuevo de un router rara vez les afecta directamente.',
          'Revisa el límite declarado de dispositivos conectados simultáneamente de un router si tienes muchos enchufes inteligentes, sensores y otros dispositivos IoT; este límite práctico importa más que el rendimiento teórico en la mayoría de los hogares inteligentes.',
          '"Smart home ready" o "Matter ready" en la caja de un router no indica si es un router frontera Thread; busca router frontera Thread en la especificación o en la página de soporte del fabricante.',
          'Las reseñas independientes, y no las cifras de velocidad de los fabricantes, muestran el rendimiento real; PromptQuorum no ha probado los productos citados en esta guía.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Un router Wi-Fi 7 incluye un router frontera Thread?', a: 'No automáticamente. Wi-Fi 7 describe la radio Wi-Fi, mientras que un router frontera Thread necesita una radio Thread aparte y su software. La gama eero 7 figura como routers frontera Thread, pero debes confirmar la función de router frontera Thread en la ficha técnica de cualquier router que consideres.' },
          { q: '¿Qué routers pueden actuar como router frontera Thread?', a: 'Entre los sistemas en malla que figuran como routers frontera Thread están eero 7, Pro 7, Max 7 y Outdoor 7, y Google Nest Wifi Pro. Muchas personas ya tienen uno en un altavoz inteligente, pantalla, HomePod, Apple TV 4K, Google TV Streamer o hub, así que revisa esos primero.' },
          { q: '¿Necesito un dispositivo router frontera Thread aparte?', a: 'A menudo no, porque muchos altavoces inteligentes, streamers y hubs ya incluyen uno. Consulta las especificaciones de tu hardware actual antes de comprar un dispositivo dedicado.' },
          { q: '¿Qué es Thread 1.4 y debo sustituir mi router frontera?', a: 'Thread 1.4 exige que los routers frontera admitan el uso compartido de credenciales para que dispositivos de distintas marcas puedan unirse a una misma red Thread. Los routers frontera existentes necesitan una actualización de software para obtener las funciones de Thread 1.4 y puede que haya que sustituirlos si el fabricante no la ofrece. Los routers frontera certificados desde el 1 de enero de 2026 siguen Thread 1.4.' },
          { q: '¿Cuántos routers frontera Thread debería tener?', a: 'Más de uno, en distintas zonas de tu hogar, suele mejorar la fiabilidad de la malla porque cooperan en lugar de entrar en conflicto. Con Thread 1.4 y el uso compartido de credenciales, routers frontera de distintas marcas pueden unirse a la misma red.' },
          { q: '¿Un estándar Wi-Fi más rápido ayuda realmente a mi hogar inteligente?', a: 'Ayuda sobre todo con el ancho de banda de transmisión de cámaras si usas varias cámaras de alta resolución y en redes con muchos clientes simultáneos. Para la mayoría de sensores y enchufes inteligentes en 2,4 GHz o Zigbee/Thread, la generación Wi-Fi más reciente apenas marca diferencia práctica.' },
          { q: '¿Debería esperar al Wi-Fi 8 antes de comprar un router?', a: 'Normalmente no. Wi-Fi 8 (802.11bn) no está ratificado y se espera hacia 2028. Apunta a la fiabilidad y la latencia más que a una mayor velocidad máxima, y los routers frontera Thread funcionan con independencia de la generación Wi-Fi.' },
          { q: '¿Qué limita realmente el rendimiento de la red de un hogar inteligente?', a: 'Con más frecuencia la densidad de dispositivos (cuántos dispositivos IoT están conectados a la vez) y la cobertura de 2,4 GHz que la velocidad Wi-Fi máxima. Revisa el límite de conexiones simultáneas de tu router si tienes muchos enchufes inteligentes y sensores.' },
          { q: '¿Debería comprar un sistema Wi-Fi en malla para un hogar inteligente?', a: 'Un sistema en malla puede ayudar con la cobertura de 2,4 GHz en toda la casa para sensores con batería, lo que importa más para la fiabilidad de los dispositivos que la velocidad bruta. Comprueba si cada nodo de la malla también actúa como router frontera Thread, si eso te interesa.' },
          { q: '¿Thread es lo mismo que Wi-Fi?', a: 'No. Thread es un protocolo de malla de bajo consumo distinto del Wi-Fi. Un router frontera Thread es el puente entre ambos. Consulta la guía general de protocolos para la comparación completa.' },
          { q: '¿Todos mis dispositivos del hogar inteligente necesitan Thread?', a: 'No. Muchos dispositivos aún usan Zigbee, Z-Wave o Wi-Fi directamente. Thread es uno de varios protocolos en uso; consulta la guía general de protocolos para saber qué dispositivos suelen usar cuál.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list) (familias de dispositivos, octubre de 2026)',
          '[Thread Group](https://www.threadgroup.org/) (especificación y certificación de Thread 1.4.0)',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/) (obligatorio para los routers frontera Thread 1.4)',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/) (Matter 1.4, tipo de dispositivo HRAP)',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8) y [TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html) (calendario de 802.11bn)',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread) (compatibilidad de eero como router frontera Thread)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: protocolos explicados](/es/smart-home/smart-home-protocols-explained) — qué es Thread, comparado con otros protocolos',
          '[Matter 1.6 explicado: qué hay de nuevo](/es/smart-home/matter-1-6-explained) — la especificación de capa de aplicación, separada del hardware de red',
          '[Cámaras de seguridad con IA local con Frigate](/es/smart-home/local-ai-security-camera) — la carga local más intensiva en ancho de banda',
          '[Mejores dongles USB Zigbee y Thread](/es/smart-home/best-zigbee-thread-dongles-2027) — hardware de radio dedicado para un hub mini-PC/Pi',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Thread y routers Wi-Fi 7 para hogares inteligentes (2026)',
      description: '¿Qué routers son routers frontera Thread? Thread 1.4 explicado, qué sistemas Wi-Fi en malla y hubs lo son y qué necesita de verdad el Wi-Fi 7 en casa.',
      url: 'https://www.promptquorum.com/es/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'es',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Router frontera Thread' },
        { '@type': 'Thing', name: 'Red Wi-Fi' },
        { '@type': 'Thing', name: 'Red de hogar inteligente' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Un router Wi-Fi 7 incluye un router frontera Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No automáticamente. Wi-Fi 7 describe la radio Wi-Fi, mientras que un router frontera Thread necesita una radio Thread aparte y su software. La gama eero 7 figura como routers frontera Thread, pero debes confirmar la función de router frontera Thread en la ficha técnica de cualquier router que consideres.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué routers pueden actuar como router frontera Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Entre los sistemas en malla que figuran como routers frontera Thread están eero 7, Pro 7, Max 7 y Outdoor 7, y Google Nest Wifi Pro. Muchas personas ya tienen uno en un altavoz inteligente, pantalla, HomePod, Apple TV 4K, Google TV Streamer o hub, así que revisa esos primero.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito un dispositivo router frontera Thread aparte?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A menudo no, porque muchos altavoces inteligentes, streamers y hubs ya incluyen uno. Consulta las especificaciones de tu hardware actual antes de comprar un dispositivo dedicado.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es Thread 1.4 y debo sustituir mi router frontera?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 1.4 exige que los routers frontera admitan el uso compartido de credenciales para que dispositivos de distintas marcas puedan unirse a una misma red Thread. Los routers frontera existentes necesitan una actualización de software para obtener las funciones de Thread 1.4 y puede que haya que sustituirlos si el fabricante no la ofrece. Los routers frontera certificados desde el 1 de enero de 2026 siguen Thread 1.4.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuántos routers frontera Thread debería tener?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Más de uno, en distintas zonas de tu hogar, suele mejorar la fiabilidad de la malla porque cooperan en lugar de entrar en conflicto. Con Thread 1.4 y el uso compartido de credenciales, routers frontera de distintas marcas pueden unirse a la misma red.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Un estándar Wi-Fi más rápido ayuda realmente a mi hogar inteligente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ayuda sobre todo con el ancho de banda de transmisión de cámaras si usas varias cámaras de alta resolución y en redes con muchos clientes simultáneos. Para la mayoría de sensores y enchufes inteligentes en 2,4 GHz o Zigbee/Thread, la generación Wi-Fi más reciente apenas marca diferencia práctica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Debería esperar al Wi-Fi 8 antes de comprar un router?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Normalmente no. Wi-Fi 8 (802.11bn) no está ratificado y se espera hacia 2028. Apunta a la fiabilidad y la latencia más que a una mayor velocidad máxima, y los routers frontera Thread funcionan con independencia de la generación Wi-Fi.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué limita realmente el rendimiento de la red de un hogar inteligente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Con más frecuencia la densidad de dispositivos (cuántos dispositivos IoT están conectados a la vez) y la cobertura de 2,4 GHz que la velocidad Wi-Fi máxima. Revisa el límite de conexiones simultáneas de tu router si tienes muchos enchufes inteligentes y sensores.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Debería comprar un sistema Wi-Fi en malla para un hogar inteligente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un sistema en malla puede ayudar con la cobertura de 2,4 GHz en toda la casa para sensores con batería, lo que importa más para la fiabilidad de los dispositivos que la velocidad bruta. Comprueba si cada nodo de la malla también actúa como router frontera Thread, si eso te interesa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Thread es lo mismo que Wi-Fi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Thread es un protocolo de malla de bajo consumo distinto del Wi-Fi. Un router frontera Thread es el puente entre ambos. Consulta la guía general de protocolos para la comparación completa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Todos mis dispositivos del hogar inteligente necesitan Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Muchos dispositivos aún usan Zigbee, Z-Wave o Wi-Fi directamente. Thread es uno de varios protocolos en uso; consulta la guía general de protocolos para saber qué dispositivos suelen usar cuál.',
          },
        },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-pt.webp',
    title: 'Thread e roteadores Wi-Fi 7 para casas inteligentes (2026)',
    seoTitle: 'Thread + roteadores Wi-Fi 7 para casas inteligentes (2026)',
    intro:
      'A rede de uma casa inteligente precisa de duas camadas: um roteador de borda Thread, que conecta à sua rede os dispositivos Thread de baixo consumo (fechaduras, sensores, parte da iluminação), e um Wi-Fi com largura de banda e latência baixa o bastante para câmeras e voz. O Thread 1.4 e o Wi-Fi 7 (802.11be) são ambos atuais, mas são recursos independentes: vários sistemas Wi-Fi mesh, como a linha eero 7 e o Google Nest Wifi Pro, também funcionam como roteadores de borda Thread, enquanto o selo Wi-Fi 7 sozinho não diz nada sobre Thread. Este guia mostra quais famílias de dispositivos se qualificam, o que muda com o Thread 1.4 e o que conferir antes de comprar.',
    metaDescription:
      'Quais roteadores são roteadores de borda Thread? Thread 1.4 explicado, quais sistemas mesh e hubs se qualificam e o que o Wi-Fi 7 exige em casa inteligente.',
    twitterDescription:
      'O selo Wi-Fi 7 não faz de um roteador um roteador de borda Thread. Quais sistemas mesh e hubs se qualificam, o que muda no Thread 1.4 e o que o Wi-Fi da casa inteligente exige.',
    readTime: '7 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa inteligente escolhendo um roteador ou um roteador de borda Thread',
    primaryTerm: 'roteador borda thread wifi casa inteligente',
    targetKeywords: [
      'roteador borda thread wifi roteador',
      'melhor roteador casa inteligente 2027',
      'wifi 7 largura de banda camera casa inteligente',
      'rede malha thread casa inteligente',
      'home assistant roteador borda thread',
    ],
    leadAnswerBlock:
      '**Um roteador Wi-Fi 7 não é automaticamente um roteador de borda Thread: os sistemas mesh da série eero 7 e o Google Nest Wifi Pro constam como roteadores de borda Thread, mas a geração do Wi-Fi não diz nada sobre Thread, então confirme o suporte a roteador de borda Thread na ficha técnica do fabricante antes de comprar. Desde 1º de janeiro de 2026, todo roteador de borda recém-certificado precisa atender ao Thread 1.4, que permite que roteadores de borda de marcas diferentes compartilhem uma única rede Thread.**',
    quickAnswerTop: {
      pt: {
        question: 'Preciso de um roteador Wi-Fi 7 e de um roteador de borda Thread para minha casa inteligente?',
        answer: 'Você só precisa de um roteador de borda Thread se usar dispositivos Thread (muitas fechaduras e sensores mais novos e parte da iluminação). Muitas vezes ele já vem embutido em uma caixa de som inteligente, tela, Apple TV, Google TV Streamer ou hub que você já tem, e alguns sistemas Wi-Fi mesh, como a linha eero 7 e o Google Nest Wifi Pro, incluem um. Você não precisa de Wi-Fi 7 para o Thread; o Wi-Fi 7 importa principalmente para a largura de banda das câmeras e para muitos clientes simultâneos.',
        bullets: [
          'Roteador de borda Thread: confira primeiro caixas de som, telas, Apple TV e hubs que você já tem',
          'Wi-Fi 7 não implica suporte a Thread: procure a listagem como roteador de borda Thread',
          'Roteadores de borda Thread 1.4 compartilham uma rede Thread entre marcas',
          'Prioridade no Wi-Fi: largura de banda e latência para suas câmeras e voz, além de cobertura em 2,4 GHz para sensores',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que um roteador de borda Thread faz', anchor: 'thread-border-router' },
      { label: 'Quais dispositivos são roteadores de borda Thread', anchor: 'border-router-devices' },
      { label: 'O que muda com o Thread 1.4', anchor: 'thread-14' },
      { label: 'O que seu Wi-Fi realmente precisa', anchor: 'wifi-needs' },
      { label: 'Como escolher um sistema mesh Wi-Fi 7', anchor: 'mesh-checklist' },
      { label: 'Por que não esperar pelo Wi-Fi 8', anchor: 'wifi-8' },
      { label: 'O que ignorar no marketing', anchor: 'marketing-noise' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Um roteador de borda Thread conecta dispositivos Thread à sua rede e costuma vir embutido em uma caixa de som, hub ou sistema Wi-Fi mesh, enquanto o Wi-Fi 7 ajuda principalmente na largura de banda das câmeras, então as duas compras são decisões separadas.' },
      { type: 'plain-terms', content: 'Alguns dispositivos de casa inteligente, como muitas fechaduras e sensores, usam um protocolo de baixo consumo chamado Thread. Para chegar à sua rede normal, eles precisam de um "roteador de borda", que muitas vezes já vem embutido em uma caixa de som inteligente, em uma Apple TV ou em um sistema Wi-Fi mesh. O Wi-Fi 7 é um upgrade à parte que ajuda câmeras e redes com muitos aparelhos, e sozinho ele não adiciona Thread.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Um roteador de borda Thread conecta dispositivos Thread (fechaduras, sensores, parte da iluminação) à sua rede. Confira suas caixas de som, telas, Apple TV e hubs antes de comprar um dedicado.',
          'Wi-Fi 7 e Thread são independentes: a linha eero 7 e o Google Nest Wifi Pro constam como roteadores de borda Thread, mas o selo Wi-Fi 7 sozinho não garante suporte a Thread.',
          'Roteadores de borda Thread 1.4 precisam oferecer compartilhamento de credenciais, então roteadores de borda de marcas diferentes podem entrar em uma mesma rede Thread. Os certificados desde 1º de janeiro de 2026 seguem o Thread 1.4.',
          'Para o Wi-Fi da casa inteligente, largura de banda para câmeras, baixa latência e cobertura em 2,4 GHz importam mais do que a velocidade máxima impressa na caixa.',
          'O Wi-Fi 8 (802.11bn) ainda não foi ratificado; o padrão é esperado por volta de 2028, então o Wi-Fi 7 segue como a escolha atual.',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'O que um roteador de borda Thread faz',
        content: '**Um roteador de borda Thread conecta seus dispositivos Thread à rede doméstica e à internet, e muitas vezes já está dentro de uma caixa de som inteligente, tela, streamer, hub ou sistema Wi-Fi mesh que você tem.**',
        items: [
          'Thread é um protocolo mesh de baixo consumo na faixa de rádio de 2,4 GHz, separado do Wi-Fi. Dispositivos Thread não alcançam seu celular nem o Home Assistant sem um roteador de borda.',
          'Vários roteadores de borda na mesma rede ampliam a cobertura da malha e adicionam redundância, então um segundo em outra parte da casa geralmente melhora a confiabilidade.',
          'O Thread 1.4.0 (setembro de 2024) é a especificação atual e, desde 1º de janeiro de 2026, a única versão em que novos roteadores de borda Thread podem ser certificados, segundo o Thread Group.',
          'Um roteador de borda não precisa de Wi-Fi 7: o Thread usa um rádio próprio, então uma geração mais antiga de Wi-Fi com um roteador de borda funciona igualmente bem para dispositivos Thread.',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'Quais dispositivos são roteadores de borda Thread',
        content: '**Os roteadores de borda vêm de cinco famílias de dispositivos: sistemas Wi-Fi mesh, caixas de som e telas inteligentes, streamers, hubs de casa inteligente e placas DIY.** A lista abaixo segue o diretório de roteadores de borda da Matter Alpha, atualizado em outubro de 2026; ela não informa a versão do Thread de cada produto, então confira a página do fabricante para saber se há Thread 1.4.',
        columns: ['Família de dispositivo', 'Exemplos', 'Observação'],
        rows: [
          { 'Família de dispositivo': 'Sistemas Wi-Fi mesh', Exemplos: 'eero 7, Pro 7, Max 7, Outdoor 7', 'Observação': 'Wi-Fi 7' },
          { 'Família de dispositivo': 'Sistemas Wi-Fi mesh', Exemplos: 'Google Nest Wifi Pro', 'Observação': 'Wi-Fi 6E' },
          { 'Família de dispositivo': 'Caixas de som e telas', Exemplos: 'Echo (4ª ger.), Echo Show 8/11, Nest Hub', 'Observação': 'Muitas vezes já em casa' },
          { 'Família de dispositivo': 'Dispositivos Apple', Exemplos: 'HomePod mini, HomePod (2ª ger.), Apple TV 4K', 'Observação': 'Apple TV 3ª ger.: modelo Ethernet' },
          { 'Família de dispositivo': 'Streamers', Exemplos: 'Google TV Streamer (4K)', 'Observação': 'Conecta-se à TV' },
          { 'Família de dispositivo': 'Hubs de casa inteligente', Exemplos: 'SmartThings Station, Aqara Hub M3, IKEA DIRIGERA', 'Observação': 'O hub também roda Matter' },
          { 'Família de dispositivo': 'DIY e Home Assistant', Exemplos: 'Home Assistant Green, Connect ZBT-2', 'Observação': 'OpenThread de código aberto' },
        ],
        items: [
          'Vários modelos eero constam na lista, incluindo as gerações Wi-Fi 6 e 6E; confirme seu modelo exato na página de suporte da eero.',
          'Se seus dispositivos Thread já funcionam por meio de uma caixa de som ou Apple TV, um upgrade para Wi-Fi 7 não acrescenta nada para eles.',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'O que muda com o Thread 1.4',
        content: '**O Thread 1.4 torna o compartilhamento de credenciais obrigatório, então roteadores de borda de marcas diferentes podem entrar em uma mesma rede Thread em vez de cada um criar a sua.**',
        items: [
          'O compartilhamento de credenciais permite que um novo roteador de borda ou dispositivo entre em uma rede Thread existente sem criar outra, algo que a especificação Thread 1.4 exige de todo roteador de borda certificado, como a Espressif explica.',
          'A adoção é desigual: os hubs SmartThings foram atualizados para o Thread 1.4 com compartilhamento de credenciais, e o roteador de borda OpenThread do Home Assistant ganhou o Thread 1.4 em versão beta, mas nem todo produto tem atualização.',
          'Roteadores de borda existentes precisam de uma atualização de software ou de substituição para ganhar os recursos do Thread 1.4, segundo Vividh Siddha, presidente do Thread Group; o Matter 1.4 também adicionou o tipo de dispositivo Home Router and Access Point (HRAP) para roteadores que incluem Thread.',
          'Enquanto nem todos os seus roteadores de borda aceitarem o Thread 1.4, misturar marcas ainda pode resultar em redes Thread separadas; por isso, prefira roteadores de borda da mesma marca ou confirme o suporte ao 1.4 antes de adicionar outro.',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'O que seu Wi-Fi realmente precisa',
        content: '**Transmissões de câmera (especialmente várias câmeras 4K via Frigate) e assistentes de voz responsivos precisam de largura de banda consistente e baixa latência mais do que do número da geração Wi-Fi mais recente em uma ficha técnica.**',
        items: [
          'A detecção local em câmeras (veja o guia de câmeras de segurança com IA local) envia vídeo para sua caixa Frigate pela rede local. Essa carga se beneficia de mais largura de banda real, principalmente com várias câmeras, e câmeras com fio evitam o Wi-Fi por completo.',
          'A responsividade do assistente de voz depende mais do processamento do seu hub local (veja o guia do assistente de voz local) do que da taxa de transferência bruta do Wi-Fi, embora uma rede congestionada adicione latência a tudo.',
          'O Wi-Fi 7 (802.11be) traz canais de 320 MHz e operação multi-link, que ajudam principalmente com muitos clientes simultâneos e dispositivos de alta largura de banda. Para uma carga típica de câmeras e voz, um sistema Wi-Fi 6 ou 6E bem configurado pode bastar; trate a velocidade anunciada como um teto, não como um ganho garantido.',
          'Sistemas mesh Wi-Fi 7 de entrada podem ser dual-band (2,4 e 5 GHz) sem rádio de 6 GHz, então confira a lista de bandas em vez do selo da geração.',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'Como escolher um sistema mesh Wi-Fi 7',
        content: '**Escolha um sistema mesh por suporte a Thread, backhaul com fio, número de bandas e limite de clientes, nessa ordem, e não pela velocidade de destaque.**',
        items: [
          'Roteador de borda Thread: confirme na página de suporte do fabricante e veja se a versão do Thread é informada. Os sistemas da série eero 7 constam na lista; muitas outras marcas não.',
          'Backhaul: Ethernet entre os nós, ou um backhaul sem fio tri-band dedicado, mantém o tráfego entre nós fora do canal usado pelas suas câmeras.',
          'Bandas: um rádio de 6 GHz ajuda câmeras e notebooks; os sensores continuam em 2,4 GHz, então a cobertura em 2,4 GHz em todos os cômodos importa mais para eles.',
          'Limite de clientes: casas com muitas tomadas, lâmpadas e sensores devem conferir o limite declarado de dispositivos simultâneos.',
          'Custo contínuo: alguns recursos da eero ficam atrás da assinatura paga eero Plus, então veja o que o sistema básico inclui.',
          'Hardware existente: se uma caixa de som, Apple TV ou hub já funciona como seu roteador de borda Thread, você pode escolher o sistema Wi-Fi apenas pelos méritos do Wi-Fi.',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'Por que não esperar pelo Wi-Fi 8',
        content: '**O Wi-Fi 8 (IEEE 802.11bn) não foi ratificado e é esperado por volta de 2028, então o Wi-Fi 7 é a geração atual a comprar.**',
        items: [
          'Chips de Wi-Fi 8 baseados em rascunho foram anunciados na CES 2026, e há relatos de primeiros roteadores baseados nesse rascunho, mas quem adotar cedo provavelmente precisará de atualizações de firmware após a ratificação.',
          'O Wi-Fi 8 prioriza confiabilidade e latência em vez de velocidade máxima maior, e mantém as mesmas bandas e a largura de 320 MHz do Wi-Fi 7; a certificação da Wi-Fi Alliance é esperada por volta do fim de 2027.',
          'O Thread não está atrelado à geração do Wi-Fi, então um roteador de borda Thread comprado hoje continua funcionando depois de um upgrade de Wi-Fi.',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: 'O que ignorar no marketing',
        content: '**A taxa de transferência máxima teórica de um roteador raramente é o gargalo em uma casa inteligente: densidade de dispositivos, cobertura em 2,4 GHz para sensores a bateria e limites de conexões simultâneas geralmente importam mais.**',
        items: [
          'A maioria dos sensores e dispositivos a bateria de casa inteligente usa Wi-Fi de 2,4 GHz ou um protocolo totalmente separado (Zigbee, Thread), então os 6 GHz ou a velocidade do padrão mais novo de um roteador raramente os afetam diretamente.',
          'Confira o limite declarado de dispositivos conectados simultaneamente do roteador se você tiver muitas tomadas inteligentes, sensores e outros dispositivos IoT; esse limite prático importa mais do que a taxa teórica para a maioria das casas inteligentes.',
          '"Pronto para casa inteligente" ou "Matter ready" na caixa de um roteador não indica se ele é um roteador de borda Thread; procure por roteador de borda Thread na especificação ou na página de suporte do fabricante.',
          'Avaliações independentes, e não as velocidades declaradas pelos fabricantes, mostram o desempenho real; a PromptQuorum não testou os produtos citados neste guia.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Um roteador Wi-Fi 7 inclui um roteador de borda Thread?', a: 'Não automaticamente. O Wi-Fi 7 descreve o rádio Wi-Fi, enquanto um roteador de borda Thread precisa de um rádio Thread e de software próprios. A linha eero 7 consta como roteadores de borda Thread, mas confirme o recurso na ficha técnica de qualquer roteador que você considerar.' },
          { q: 'Quais roteadores podem atuar como roteador de borda Thread?', a: 'Entre os sistemas mesh listados como roteadores de borda Thread estão o eero 7, Pro 7, Max 7 e Outdoor 7 e o Google Nest Wifi Pro. Muita gente já tem um em uma caixa de som, tela, HomePod, Apple TV 4K, Google TV Streamer ou hub, então confira esses primeiro.' },
          { q: 'Preciso de um dispositivo roteador de borda Thread separado?', a: 'Muitas vezes não, porque várias caixas de som, streamers e hubs que você já tem incluem um. Confira as especificações do seu hardware atual antes de comprar um dispositivo dedicado.' },
          { q: 'O que é o Thread 1.4 e preciso trocar meu roteador de borda?', a: 'O Thread 1.4 exige que os roteadores de borda ofereçam compartilhamento de credenciais, para que dispositivos de marcas diferentes entrem em uma mesma rede Thread. Roteadores de borda existentes precisam de uma atualização de software para ganhar os recursos do Thread 1.4 e podem precisar de substituição se o fabricante não a oferecer. Os roteadores de borda certificados desde 1º de janeiro de 2026 seguem o Thread 1.4.' },
          { q: 'Quantos roteadores de borda Thread devo ter?', a: 'Mais de um, em áreas diferentes da casa, geralmente melhora a confiabilidade da malha, porque eles cooperam em vez de entrar em conflito. Com o Thread 1.4 e o compartilhamento de credenciais, roteadores de borda de marcas diferentes podem entrar na mesma rede.' },
          { q: 'Um padrão Wi-Fi mais rápido realmente ajuda minha casa inteligente?', a: 'Ajuda principalmente na largura de banda de transmissão se você usa várias câmeras de alta resolução e em redes com muitos clientes simultâneos. Para a maioria dos sensores e tomadas inteligentes em 2,4 GHz ou Zigbee/Thread, a geração mais nova do Wi-Fi faz pouca diferença prática.' },
          { q: 'Devo esperar pelo Wi-Fi 8 antes de comprar um roteador?', a: 'Normalmente não. O Wi-Fi 8 (802.11bn) não foi ratificado e é esperado por volta de 2028. Ele prioriza confiabilidade e latência em vez de velocidade máxima maior, e os roteadores de borda Thread funcionam independentemente da geração do Wi-Fi.' },
          { q: 'O que realmente limita o desempenho da rede de uma casa inteligente?', a: 'Com mais frequência, a densidade de dispositivos (quantos aparelhos IoT estão conectados ao mesmo tempo) e a cobertura em 2,4 GHz do que a velocidade máxima do Wi-Fi. Confira o limite de conexões simultâneas do seu roteador se você tiver muitas tomadas inteligentes e sensores.' },
          { q: 'Devo comprar um sistema Wi-Fi mesh para uma casa inteligente?', a: 'Um sistema mesh pode ajudar com a cobertura em 2,4 GHz na casa toda para sensores a bateria, o que pesa mais na confiabilidade dos dispositivos do que a velocidade bruta. Veja se cada nó mesh também atua como roteador de borda Thread, caso isso seja importante para você.' },
          { q: 'Thread é a mesma coisa que Wi-Fi?', a: 'Não. Thread é um protocolo mesh de baixo consumo separado, distinto do Wi-Fi. Um roteador de borda Thread é a ponte entre os dois. Veja o guia geral de protocolos para a comparação completa.' },
          { q: 'Todos os meus dispositivos de casa inteligente precisam de Thread?', a: 'Não. Muitos dispositivos ainda usam Zigbee, Z-Wave ou Wi-Fi diretamente. O Thread é um dos vários protocolos em uso; veja o guia geral de protocolos para saber quais dispositivos costumam usar qual.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list) (famílias de dispositivos, outubro de 2026)',
          '[Thread Group](https://www.threadgroup.org/) (especificação e certificação do Thread 1.4.0)',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/) (obrigatório para roteadores de borda Thread 1.4)',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/) (Matter 1.4, tipo de dispositivo HRAP)',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8) e [TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html) (cronograma do 802.11bn)',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread) (suporte a roteador de borda Thread na eero)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: protocolos explicados](/pt/smart-home/smart-home-protocols-explained) — o que é Thread, comparado com outros protocolos',
          '[Matter 1.6 explicado: o que há de novo](/pt/smart-home/matter-1-6-explained) — a especificação de camada de aplicação, separada do hardware de rede',
          '[Câmeras de segurança com IA local com Frigate](/pt/smart-home/local-ai-security-camera) — a carga local que mais consome largura de banda',
          '[Melhores dongles USB Zigbee e Thread](/pt/smart-home/best-zigbee-thread-dongles-2027) — hardware de rádio dedicado para um hub mini-PC/Pi',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Thread e roteadores Wi-Fi 7 para casas inteligentes (2026)',
      description: 'Quais roteadores são roteadores de borda Thread? Thread 1.4 explicado, quais sistemas mesh e hubs se qualificam e o que o Wi-Fi 7 exige em casa inteligente.',
      url: 'https://www.promptquorum.com/pt/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'pt-BR',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Roteador de borda Thread' },
        { '@type': 'Thing', name: 'Rede Wi-Fi' },
        { '@type': 'Thing', name: 'Rede de casa inteligente' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Um roteador Wi-Fi 7 inclui um roteador de borda Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não automaticamente. O Wi-Fi 7 descreve o rádio Wi-Fi, enquanto um roteador de borda Thread precisa de um rádio Thread e de software próprios. A linha eero 7 consta como roteadores de borda Thread, mas confirme o recurso na ficha técnica de qualquer roteador que você considerar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais roteadores podem atuar como roteador de borda Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Entre os sistemas mesh listados como roteadores de borda Thread estão o eero 7, Pro 7, Max 7 e Outdoor 7 e o Google Nest Wifi Pro. Muita gente já tem um em uma caixa de som, tela, HomePod, Apple TV 4K, Google TV Streamer ou hub, então confira esses primeiro.',
          },
        },
        {
          '@type': 'Question',
          name: 'Preciso de um dispositivo roteador de borda Thread separado?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Muitas vezes não, porque várias caixas de som, streamers e hubs que você já tem incluem um. Confira as especificações do seu hardware atual antes de comprar um dispositivo dedicado.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que é o Thread 1.4 e preciso trocar meu roteador de borda?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O Thread 1.4 exige que os roteadores de borda ofereçam compartilhamento de credenciais, para que dispositivos de marcas diferentes entrem em uma mesma rede Thread. Roteadores de borda existentes precisam de uma atualização de software para ganhar os recursos do Thread 1.4 e podem precisar de substituição se o fabricante não a oferecer. Os roteadores de borda certificados desde 1º de janeiro de 2026 seguem o Thread 1.4.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quantos roteadores de borda Thread devo ter?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mais de um, em áreas diferentes da casa, geralmente melhora a confiabilidade da malha, porque eles cooperam em vez de entrar em conflito. Com o Thread 1.4 e o compartilhamento de credenciais, roteadores de borda de marcas diferentes podem entrar na mesma rede.',
          },
        },
        {
          '@type': 'Question',
          name: 'Um padrão Wi-Fi mais rápido realmente ajuda minha casa inteligente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ajuda principalmente na largura de banda de transmissão se você usa várias câmeras de alta resolução e em redes com muitos clientes simultâneos. Para a maioria dos sensores e tomadas inteligentes em 2,4 GHz ou Zigbee/Thread, a geração mais nova do Wi-Fi faz pouca diferença prática.',
          },
        },
        {
          '@type': 'Question',
          name: 'Devo esperar pelo Wi-Fi 8 antes de comprar um roteador?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Normalmente não. O Wi-Fi 8 (802.11bn) não foi ratificado e é esperado por volta de 2028. Ele prioriza confiabilidade e latência em vez de velocidade máxima maior, e os roteadores de borda Thread funcionam independentemente da geração do Wi-Fi.',
          },
        },
        {
          '@type': 'Question',
          name: 'O que realmente limita o desempenho da rede de uma casa inteligente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Com mais frequência, a densidade de dispositivos (quantos aparelhos IoT estão conectados ao mesmo tempo) e a cobertura em 2,4 GHz do que a velocidade máxima do Wi-Fi. Confira o limite de conexões simultâneas do seu roteador se você tiver muitas tomadas inteligentes e sensores.',
          },
        },
        {
          '@type': 'Question',
          name: 'Devo comprar um sistema Wi-Fi mesh para uma casa inteligente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Um sistema mesh pode ajudar com a cobertura em 2,4 GHz na casa toda para sensores a bateria, o que pesa mais na confiabilidade dos dispositivos do que a velocidade bruta. Veja se cada nó mesh também atua como roteador de borda Thread, caso isso seja importante para você.',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread é a mesma coisa que Wi-Fi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. Thread é um protocolo mesh de baixo consumo separado, distinto do Wi-Fi. Um roteador de borda Thread é a ponte entre os dois. Veja o guia geral de protocolos para a comparação completa.',
          },
        },
        {
          '@type': 'Question',
          name: 'Todos os meus dispositivos de casa inteligente precisam de Thread?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. Muitos dispositivos ainda usam Zigbee, Z-Wave ou Wi-Fi diretamente. O Thread é um dos vários protocolos em uso; veja o guia geral de protocolos para saber quais dispositivos costumam usar qual.',
          },
        },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-ar.webp',
    title: 'Thread وأجهزة توجيه Wi-Fi 7 للمنازل الذكية (⁨2026⁩)',
    seoTitle: 'Thread + أجهزة توجيه Wi-Fi 7 للمنازل الذكية (⁨2026⁩)',
    intro:
      'تحتاج شبكة المنزل الذكي إلى طبقتين: موجّه حدودي Thread يربط أجهزة Thread منخفضة الطاقة (الأقفال وأجهزة الاستشعار وبعض الإضاءة) بشبكتك، وشبكة Wi-Fi بعرض نطاق كافٍ وزمن استجابة منخفض للكاميرات والصوت. يُعدّ Thread 1.4 وWi-Fi 7 (802.11be) من المواصفات الحالية، لكنهما ميزتان منفصلتان: فبعض أنظمة Wi-Fi الشبكية، مثل سلسلة eero 7 وGoogle Nest Wifi Pro، تعمل أيضًا موجّهات حدودية Thread، أما وسم Wi-Fi 7 وحده فلا يدل على دعم Thread. يوضح هذا الدليل أي فئات الأجهزة مؤهلة، وما الذي يغيّره Thread 1.4، وما ينبغي التحقق منه قبل الشراء.',
    metaDescription:
      'أي الموجّهات تعمل موجّهًا حدوديًا Thread؟ شرح Thread 1.4، والأنظمة والمحاور المؤهلة، وما يحتاجه المنزل الذكي فعليًا من Wi-Fi 7.',
    twitterDescription:
      'وسم Wi-Fi 7 لا يجعل الموجّه موجّهًا حدوديًا Thread. أي الأنظمة والمحاور مؤهلة، وما الذي يغيّره Thread 1.4، وما تحتاجه شبكة المنزل الذكي.',
    readTime: '7 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب المنازل الذكية الذين يختارون موجّهًا أو موجّهًا حدوديًا Thread',
    primaryTerm: 'thread border router wifi smart home',
    targetKeywords: [
      'موجه حدودي thread wifi',
      'أفضل موجه للمنزل الذكي 2027',
      'wifi 7 عرض نطاق كاميرا المنزل الذكي',
      'شبكة thread المنزل الذكي',
      'home assistant موجه حدودي thread',
    ],
    leadAnswerBlock:
      '**موجّه Wi-Fi 7 ليس بالضرورة موجّهًا حدوديًا Thread: أنظمة eero 7 الشبكية وGoogle Nest Wifi Pro مدرجة موجّهات حدودية Thread، لكن جيل Wi-Fi لا يدل على دعم Thread، لذا تأكد من دعم الموجّه الحدودي Thread في ورقة مواصفات الشركة المصنّعة قبل الشراء. ومنذ 1 يناير 2026 يجب أن يستوفي كل موجّه حدودي جديد معتمد مواصفة Thread 1.4، التي تتيح لموجّهات حدودية من علامات مختلفة مشاركة شبكة Thread واحدة.**',
    quickAnswerTop: {
      ar: {
        question: 'هل أحتاج إلى موجّه Wi-Fi 7 وموجّه حدودي Thread لمنزلي الذكي؟',
        answer: 'تحتاج إلى موجّه حدودي Thread فقط إذا كنت تستخدم أجهزة Thread (كثير من الأقفال وأجهزة الاستشعار الأحدث وبعض الإضاءة). وغالبًا يكون مدمجًا بالفعل في مكبر صوت ذكي أو شاشة أو Apple TV أو Google TV Streamer أو محور تملكه، كما تتضمن بعض أنظمة Wi-Fi الشبكية، مثل سلسلة eero 7 وGoogle Nest Wifi Pro، موجّهًا حدوديًا. لا تحتاج إلى Wi-Fi 7 لتشغيل Thread؛ فأهمية Wi-Fi 7 تتركز في عرض نطاق الكاميرات وكثرة الأجهزة المتصلة في آن واحد.',
        bullets: [
          'الموجّه الحدودي Thread: افحص أولًا مكبرات الصوت والشاشات وApple TV والمحاور التي تملكها',
          'Wi-Fi 7 لا يعني دعم Thread: ابحث عن إدراج الجهاز موجّهًا حدوديًا Thread',
          'الموجّهات الحدودية Thread 1.4 تشترك في شبكة Thread واحدة عبر العلامات المختلفة',
          'أولوية Wi-Fi: عرض النطاق وزمن الاستجابة لحمل الكاميرات والصوت، مع تغطية 2.4 GHz لأجهزة الاستشعار',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما الذي يفعله الموجّه الحدودي Thread', anchor: 'thread-border-router' },
      { label: 'الأجهزة التي تعمل موجّهات حدودية Thread', anchor: 'border-router-devices' },
      { label: 'ما الذي يغيّره Thread 1.4', anchor: 'thread-14' },
      { label: 'ما الذي تحتاجه شبكة Wi-Fi فعليًا', anchor: 'wifi-needs' },
      { label: 'كيف تختار نظام Wi-Fi 7 الشبكي', anchor: 'mesh-checklist' },
      { label: 'لماذا لا تنتظر Wi-Fi 8', anchor: 'wifi-8' },
      { label: 'ما يجب تجاهله في التسويق', anchor: 'marketing-noise' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يربط الموجّه الحدودي Thread أجهزة Thread بشبكتك، وغالبًا يكون مدمجًا في مكبر صوت أو محور أو نظام Wi-Fi شبكي، بينما يفيد Wi-Fi 7 أساسًا في عرض نطاق الكاميرات، فهما قراران شرائيان منفصلان.' },
      { type: 'plain-terms', content: 'تستخدم بعض أجهزة المنزل الذكي، مثل كثير من الأقفال وأجهزة الاستشعار، بروتوكولًا منخفض الطاقة اسمه Thread. وللوصول إلى شبكتك المعتادة تحتاج إلى «موجّه حدودي»، وغالبًا يكون مدمجًا بالفعل في مكبر صوت ذكي أو Apple TV أو نظام Wi-Fi شبكي. أما Wi-Fi 7 فترقية منفصلة تفيد الكاميرات والشبكات المزدحمة، ولا تضيف Thread بمفردها.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'يربط الموجّه الحدودي Thread أجهزة Thread (الأقفال وأجهزة الاستشعار وبعض الإضاءة) بشبكتك. افحص مكبرات الصوت والشاشات وApple TV والمحاور لديك قبل شراء جهاز مخصص.',
          'Wi-Fi 7 وThread مستقلان: سلسلة eero 7 وGoogle Nest Wifi Pro مدرجتان موجّهات حدودية Thread، لكن وسم Wi-Fi 7 وحده لا يضمن دعم Thread.',
          'يجب أن تدعم الموجّهات الحدودية Thread 1.4 مشاركة بيانات الاعتماد، فتنضم موجّهات من علامات مختلفة إلى شبكة Thread واحدة. والموجّهات المعتمدة منذ 1 يناير 2026 تتبع Thread 1.4.',
          'في Wi-Fi المنزل الذكي، يهم عرض النطاق للكاميرات وانخفاض زمن الاستجابة وتغطية 2.4 GHz أكثر من السرعة القصوى المكتوبة على العلبة.',
          'لم يُصدَّق بعدُ على Wi-Fi 8 (802.11bn)؛ ويُتوقع اعتماد المعيار نحو عام 2028، لذا يبقى Wi-Fi 7 الخيار الحالي.',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'ما الذي يفعله الموجّه الحدودي Thread',
        content: '**يربط الموجّه الحدودي Thread أجهزة Thread بشبكتك المنزلية والإنترنت، وغالبًا يكون موجودًا بالفعل داخل مكبر صوت ذكي أو شاشة أو جهاز بث أو محور أو نظام Wi-Fi شبكي تملكه.**',
        items: [
          'Thread بروتوكول شبكي مترابط منخفض الطاقة يعمل على نطاق 2.4 GHz، ومنفصل عن Wi-Fi. ولا تصل أجهزة Thread إلى هاتفك أو Home Assistant بدون موجّه حدودي.',
          'وجود عدة موجّهات حدودية على شبكة واحدة يوسّع تغطية الشبكة ويضيف احتياطًا، لذا فإضافة موجّه ثانٍ في جزء آخر من المنزل يحسّن الموثوقية عادةً.',
          'Thread 1.4.0 (سبتمبر 2024) هي المواصفة الحالية، ومنذ 1 يناير 2026 هي الإصدار الوحيد الذي يمكن اعتماد الموجّهات الحدودية Thread الجديدة عليه، بحسب Thread Group.',
          'لا يحتاج الموجّه الحدودي إلى Wi-Fi 7: فـ Thread يعمل بمرسله الراديوي الخاص، لذا يؤدي جيل أقدم من Wi-Fi مع موجّه حدودي الغرض نفسه لأجهزة Thread.',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'الأجهزة التي تعمل موجّهات حدودية Thread',
        content: '**تأتي الموجّهات الحدودية من خمس فئات أجهزة: أنظمة Wi-Fi الشبكية، ومكبرات الصوت والشاشات الذكية، وأجهزة البث، ومحاور المنزل الذكي، ولوحات DIY.** تتبع القائمة أدناه دليل الموجّهات الحدودية في Matter Alpha المحدَّث في أكتوبر 2026؛ وهي لا تذكر إصدار Thread لكل منتج، لذا راجع صفحة الشركة المصنّعة للتحقق من Thread 1.4.',
        columns: ['فئة الجهاز', 'أمثلة', 'ملاحظة'],
        rows: [
          { 'فئة الجهاز': 'أنظمة Wi-Fi الشبكية', 'أمثلة': 'eero 7 وPro 7 وMax 7 وOutdoor 7', 'ملاحظة': 'Wi-Fi 7' },
          { 'فئة الجهاز': 'أنظمة Wi-Fi الشبكية', 'أمثلة': 'Google Nest Wifi Pro', 'ملاحظة': 'Wi-Fi 6E' },
          { 'فئة الجهاز': 'مكبرات الصوت والشاشات', 'أمثلة': 'Echo (الجيل 4) وEcho Show 8/11 وNest Hub', 'ملاحظة': 'غالبًا تملكه بالفعل' },
          { 'فئة الجهاز': 'أجهزة Apple', 'أمثلة': 'HomePod mini وHomePod (الجيل 2) وApple TV 4K', 'ملاحظة': 'Apple TV: طراز Ethernet للجيل 3' },
          { 'فئة الجهاز': 'أجهزة البث', 'أمثلة': 'Google TV Streamer (4K)', 'ملاحظة': 'يُوصل بالتلفزيون' },
          { 'فئة الجهاز': 'محاور المنزل الذكي', 'أمثلة': 'SmartThings Station وAqara Hub M3 وIKEA DIRIGERA', 'ملاحظة': 'المحور يشغّل Matter أيضًا' },
          { 'فئة الجهاز': 'DIY وHome Assistant', 'أمثلة': 'Home Assistant Green وConnect ZBT-2', 'ملاحظة': 'OpenThread مفتوح المصدر' },
        ],
        items: [
          'أُدرجت عدة طرازات من eero، بما فيها أجيال Wi-Fi 6 وWi-Fi 6E؛ تحقق من طرازك تحديدًا في صفحة دعم eero.',
          'إذا كانت أجهزة Thread لديك تعمل بالفعل عبر مكبر صوت أو Apple TV، فلن تضيف ترقية Wi-Fi 7 شيئًا لها.',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'ما الذي يغيّره Thread 1.4',
        content: '**يجعل Thread 1.4 مشاركة بيانات الاعتماد إلزامية، فتنضم موجّهات حدودية من علامات مختلفة إلى شبكة Thread واحدة بدلًا من أن ينشئ كل منها شبكته الخاصة.**',
        items: [
          'تتيح مشاركة بيانات الاعتماد لموجّه حدودي أو جهاز جديد الانضمام إلى شبكة Thread قائمة دون إنشاء شبكة جديدة، وتشترطها مواصفة Thread 1.4 على كل موجّه حدودي معتمد، كما توضح Espressif.',
          'الانتشار غير متساوٍ: رُقّيت محاور SmartThings إلى Thread 1.4 مع مشاركة بيانات الاعتماد، وأضاف موجّه OpenThread الحدودي في Home Assistant دعم Thread 1.4 بنسخة تجريبية، لكن ليس لكل منتج تحديث.',
          'تحتاج الموجّهات الحدودية الحالية إلى تحديث برمجي أو استبدال للحصول على ميزات Thread 1.4، بحسب رئيس Thread Group فيفيد سيدها (Vividh Siddha)؛ كما أضاف Matter 1.4 نوع الجهاز Home Router and Access Point (HRAP) للموجّهات التي تتضمن Thread.',
          'إلى أن تدعم موجّهاتك الحدودية كلها Thread 1.4، قد يؤدي الخلط بين العلامات إلى شبكات Thread منفصلة، لذا فضّل موجّهات حدودية من العلامة نفسها أو تأكد من دعم 1.4 قبل إضافة موجّه آخر.',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'ما الذي تحتاجه شبكة Wi-Fi فعليًا',
        content: '**تحتاج بثوث الكاميرات (خاصة عدة كاميرات 4K عبر Frigate) والمساعدات الصوتية سريعة الاستجابة إلى عرض نطاق ثابت وزمن استجابة منخفض أكثر مما تحتاج إلى أحدث رقم لجيل Wi-Fi في ورقة المواصفات.**',
        items: [
          'يرسل كشف الكاميرات المحلي (راجع دليل كاميرات الأمان بالذكاء الاصطناعي المحلي) الفيديو إلى جهاز Frigate عبر الشبكة المحلية. يستفيد هذا الحمل من عرض نطاق فعلي أكبر، خاصة مع عدة كاميرات، وتتجنب الكاميرات السلكية Wi-Fi تمامًا.',
          'تعتمد استجابة المساعد الصوتي على معالجة المحور المحلي (راجع دليل المساعد الصوتي المحلي) أكثر مما تعتمد على إنتاجية Wi-Fi الخام، رغم أن الشبكة المزدحمة تضيف زمن استجابة لكل شيء.',
          'يضيف Wi-Fi 7 (802.11be) قنوات بعرض 320 MHz والتشغيل متعدد الروابط، وهما يفيدان أساسًا كثرة الأجهزة المتصلة معًا والأجهزة عالية عرض النطاق. وفي حمل كاميرات وصوت اعتيادي قد يكفي نظام Wi-Fi 6 أو 6E مضبوط جيدًا؛ فعامِل الإنتاجية المعلنة على أنها سقف، لا مكسبًا مضمونًا.',
          'قد تكون أنظمة Wi-Fi 7 الشبكية الأساسية ثنائية النطاق (2.4 و5 GHz) بلا مرسل 6 GHz، لذا افحص قائمة النطاقات بدلًا من وسم الجيل.',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'كيف تختار نظام Wi-Fi 7 الشبكي',
        content: '**اختر النظام الشبكي بحسب دعم Thread، ثم الربط الخلفي السلكي، ثم عدد النطاقات، ثم حدود الأجهزة المتصلة، وبهذا الترتيب، لا بحسب تصنيف السرعة الرئيسي.**',
        items: [
          'الموجّه الحدودي Thread: تأكد منه في صفحة دعم الشركة المصنّعة وتحقق مما إذا كان إصدار Thread مذكورًا. أنظمة eero 7 مدرجة، أما علامات كثيرة أخرى فلا.',
          'الربط الخلفي: يُبقي Ethernet بين العقد، أو ربط لاسلكي مخصص ثلاثي النطاقات، حركة العقد بعيدًا عن القناة التي تستخدمها الكاميرات.',
          'النطاقات: يفيد مرسل 6 GHz الكاميرات والحواسيب المحمولة؛ أما أجهزة الاستشعار فتبقى على 2.4 GHz، لذا تهمها تغطية 2.4 GHz في كل غرفة أكثر.',
          'حد الأجهزة المتصلة: ينبغي للمنازل التي فيها مقابس ومصابيح وأجهزة استشعار كثيرة فحص الحد المعلن للأجهزة المتصلة في آن واحد.',
          'التكلفة المستمرة: بعض ميزات eero مرتبطة باشتراك eero Plus المدفوع، لذا تحقق مما يتضمنه النظام الأساسي.',
          'الأجهزة الحالية: إذا كان مكبر صوت أو Apple TV أو محور يعمل بالفعل موجّهك الحدودي Thread، يمكنك اختيار نظام Wi-Fi بحسب مزايا Wi-Fi وحدها.',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'لماذا لا تنتظر Wi-Fi 8',
        content: '**لم يُصدَّق بعدُ على Wi-Fi 8 (IEEE 802.11bn) ويُتوقع نحو عام 2028، لذا فإن Wi-Fi 7 هو الجيل الحالي المناسب للشراء.**',
        items: [
          'أُعلن عن شرائح Wi-Fi 8 المبنية على المسودة في CES 2026، وأُفيد بوجود موجّهات مبكرة مبنية عليها، لكن المتبنين الأوائل سيحتاجون على الأرجح إلى تحديثات للبرنامج الثابت بعد التصديق.',
          'يستهدف Wi-Fi 8 الموثوقية وزمن الاستجابة لا زيادة السرعة القصوى، ويحتفظ بالنطاقات نفسها وعرض 320 MHz كما في Wi-Fi 7؛ ويُتوقع اعتماد Wi-Fi Alliance نحو نهاية 2027.',
          'لا يرتبط Thread بجيل Wi-Fi، لذا يواصل الموجّه الحدودي Thread الذي تشتريه اليوم العمل بعد أي ترقية لاحقة في Wi-Fi.',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: 'ما يجب تجاهله في التسويق',
        content: '**نادرًا ما تكون أقصى إنتاجية نظرية للموجّه هي العنق الضيق في المنزل الذكي: فكثافة الأجهزة وتغطية 2.4 GHz لأجهزة الاستشعار العاملة بالبطارية وحدود الاتصال المتزامن تكون عادةً أهم.**',
        items: [
          'تستخدم معظم أجهزة الاستشعار والأجهزة العاملة بالبطارية في المنزل الذكي Wi-Fi بنطاق 2.4 GHz أو بروتوكولًا منفصلًا تمامًا (Zigbee أو Thread)، لذا نادرًا ما تتأثر مباشرةً بنطاق 6 GHz في الموجّه أو بسرعة أحدث معيار.',
          'افحص الحد المعلن للأجهزة المتصلة في آن واحد إذا كان لديك مقابس ذكية وأجهزة استشعار وأجهزة إنترنت الأشياء الأخرى كثيرة؛ فهذا الحد العملي أهم من الإنتاجية النظرية في معظم المنازل الذكية.',
          'عبارة «جاهز للمنزل الذكي» أو «جاهز لـ Matter» على علبة الموجّه لا تخبرك إن كان موجّهًا حدوديًا Thread؛ ابحث عن عبارة الموجّه الحدودي Thread في المواصفات أو في صفحة دعم الشركة المصنّعة.',
          'تُظهر المراجعات المستقلة، لا تصنيفات السرعة من الشركات المصنّعة، الأداء الفعلي؛ ولم تختبر PromptQuorum المنتجات المذكورة في هذا الدليل.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يتضمن موجّه Wi-Fi 7 موجّهًا حدوديًا Thread؟', a: 'ليس بالضرورة. يصف Wi-Fi 7 المرسل الراديوي لـ Wi-Fi، بينما يحتاج الموجّه الحدودي Thread إلى مرسل Thread منفصل وبرنامج خاص. سلسلة eero 7 مدرجة موجّهات حدودية Thread، لكن ينبغي التأكد من ميزة الموجّه الحدودي Thread في ورقة مواصفات أي موجّه تفكر فيه.' },
          { q: 'أي الموجّهات يمكن أن تعمل موجّهًا حدوديًا Thread؟', a: 'تشمل الأنظمة الشبكية المدرجة موجّهات حدودية Thread كلًّا من eero 7 وPro 7 وMax 7 وOutdoor 7 وGoogle Nest Wifi Pro. ولدى كثيرين موجّه حدودي بالفعل في مكبر صوت ذكي أو شاشة أو HomePod أو Apple TV 4K أو Google TV Streamer أو محور، لذا افحص هذه أولًا.' },
          { q: 'هل أحتاج إلى جهاز موجّه حدودي Thread منفصل؟', a: 'غالبًا لا، لأن كثيرًا من مكبرات الصوت الذكية وأجهزة البث والمحاور الحالية تتضمن واحدًا. راجع مواصفات أجهزتك الحالية قبل شراء جهاز مخصص.' },
          { q: 'ما هو Thread 1.4 وهل يجب أن أستبدل موجّهي الحدودي؟', a: 'يشترط Thread 1.4 أن تدعم الموجّهات الحدودية مشاركة بيانات الاعتماد حتى تنضم أجهزة من علامات مختلفة إلى شبكة Thread واحدة. تحتاج الموجّهات الحدودية الحالية إلى تحديث برمجي للحصول على ميزات Thread 1.4، وقد تحتاج إلى استبدال إن لم توفر الشركة المصنّعة تحديثًا. والموجّهات الحدودية المعتمدة منذ 1 يناير 2026 تتبع Thread 1.4.' },
          { q: 'كم موجّهًا حدوديًا Thread ينبغي أن أملك؟', a: 'أكثر من واحد، في مناطق مختلفة من المنزل، يحسّن موثوقية الشبكة عادةً لأنها تتعاون ولا تتعارض. ومع Thread 1.4 ومشاركة بيانات الاعتماد، تنضم موجّهات حدودية من علامات مختلفة إلى الشبكة نفسها.' },
          { q: 'هل يفيد معيار Wi-Fi الأسرع منزلي الذكي فعلًا؟', a: 'يفيد أساسًا في عرض نطاق بث الكاميرات إذا شغّلت عدة كاميرات عالية الدقة، وفي الشبكات ذات الأجهزة المتصلة الكثيرة في آن واحد. أما لمعظم أجهزة الاستشعار والمقابس الذكية العاملة على 2.4 GHz أو Zigbee/Thread فالفرق العملي لأحدث جيل من Wi-Fi ضئيل.' },
          { q: 'هل أنتظر Wi-Fi 8 قبل شراء موجّه؟', a: 'عادةً لا. لم يُصدَّق بعدُ على Wi-Fi 8 (802.11bn) ويُتوقع نحو عام 2028. وهو يستهدف الموثوقية وزمن الاستجابة لا زيادة السرعة القصوى، وتعمل الموجّهات الحدودية Thread بمعزل عن جيل Wi-Fi.' },
          { q: 'ما الذي يحدّ فعليًا من أداء شبكة المنزل الذكي؟', a: 'في الغالب كثافة الأجهزة (عدد أجهزة إنترنت الأشياء المتصلة في آن واحد) وتغطية 2.4 GHz، لا سرعة Wi-Fi القصوى. افحص حد الاتصال المتزامن في موجّهك إذا كان لديك مقابس ذكية وأجهزة استشعار كثيرة.' },
          { q: 'هل أشتري نظام Wi-Fi شبكيًا للمنزل الذكي؟', a: 'قد يساعد النظام الشبكي في تغطية 2.4 GHz لكامل المنزل لأجهزة الاستشعار العاملة بالبطارية، وهو أهم لموثوقية الأجهزة من السرعة الخام. تحقق مما إذا كانت كل عقدة شبكية تعمل أيضًا موجّهًا حدوديًا Thread إن كان ذلك يهمك.' },
          { q: 'هل Thread هو نفسه Wi-Fi؟', a: 'لا. Thread بروتوكول شبكي مترابط منخفض الطاقة ومختلف عن Wi-Fi، والموجّه الحدودي Thread هو الجسر بين الاثنين. راجع المدخل العام إلى البروتوكولات للمقارنة الكاملة.' },
          { q: 'هل تحتاج كل أجهزة منزلي الذكي إلى Thread؟', a: 'لا. ما زالت أجهزة كثيرة تستخدم Zigbee أو Z-Wave أو Wi-Fi مباشرةً. Thread أحد عدة بروتوكولات مستخدمة؛ راجع المدخل العام إلى البروتوكولات لمعرفة الأجهزة التي تستخدم كل بروتوكول عادةً.' },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list) (فئات الأجهزة، أكتوبر 2026)',
          '[Thread Group](https://www.threadgroup.org/) (مواصفة Thread 1.4.0 والاعتماد)',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/) (إلزامية للموجّهات الحدودية Thread 1.4)',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/) (Matter 1.4 ونوع الجهاز HRAP)',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8) و[TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html) (الجدول الزمني لـ 802.11bn)',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread) (دعم eero للموجّه الحدودي Thread)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Matter وThread وZigbee وZ-Wave: شرح البروتوكولات](/ar/smart-home/smart-home-protocols-explained) — ما هو Thread، مقارنة بالبروتوكولات الأخرى',
          '[شرح Matter 1.6: ما الجديد](/ar/smart-home/matter-1-6-explained) — مواصفة طبقة التطبيق، منفصلة عن أجهزة الشبكة',
          '[كاميرات الأمان بالذكاء الاصطناعي المحلي مع Frigate](/ar/smart-home/local-ai-security-camera) — الحمل المحلي الأكثر استهلاكًا لعرض النطاق',
          '[أفضل أدوات USB Zigbee وThread](/ar/smart-home/best-zigbee-thread-dongles-2027) — أجهزة راديو مخصصة لمحور كمبيوتر صغير/Pi',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Thread وأجهزة توجيه Wi-Fi 7 للمنازل الذكية (⁨2026⁩)',
      description: 'أي الموجّهات تعمل موجّهًا حدوديًا Thread؟ شرح Thread 1.4، والأنظمة والمحاور المؤهلة، وما يحتاجه المنزل الذكي فعليًا من Wi-Fi 7.',
      url: 'https://www.promptquorum.com/ar/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'ar',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'موجّه Thread الحدودي' },
        { '@type': 'Thing', name: 'شبكة Wi-Fi' },
        { '@type': 'Thing', name: 'شبكة المنزل الذكي' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'هل يتضمن موجّه Wi-Fi 7 موجّهًا حدوديًا Thread؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ليس بالضرورة. يصف Wi-Fi 7 المرسل الراديوي لـ Wi-Fi، بينما يحتاج الموجّه الحدودي Thread إلى مرسل Thread منفصل وبرنامج خاص. سلسلة eero 7 مدرجة موجّهات حدودية Thread، لكن ينبغي التأكد من ميزة الموجّه الحدودي Thread في ورقة مواصفات أي موجّه تفكر فيه.',
          },
        },
        {
          '@type': 'Question',
          name: 'أي الموجّهات يمكن أن تعمل موجّهًا حدوديًا Thread؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'تشمل الأنظمة الشبكية المدرجة موجّهات حدودية Thread كلًّا من eero 7 وPro 7 وMax 7 وOutdoor 7 وGoogle Nest Wifi Pro. ولدى كثيرين موجّه حدودي بالفعل في مكبر صوت ذكي أو شاشة أو HomePod أو Apple TV 4K أو Google TV Streamer أو محور، لذا افحص هذه أولًا.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل أحتاج إلى جهاز موجّه حدودي Thread منفصل؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'غالبًا لا، لأن كثيرًا من مكبرات الصوت الذكية وأجهزة البث والمحاور الحالية تتضمن واحدًا. راجع مواصفات أجهزتك الحالية قبل شراء جهاز مخصص.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما هو Thread 1.4 وهل يجب أن أستبدل موجّهي الحدودي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'يشترط Thread 1.4 أن تدعم الموجّهات الحدودية مشاركة بيانات الاعتماد حتى تنضم أجهزة من علامات مختلفة إلى شبكة Thread واحدة. تحتاج الموجّهات الحدودية الحالية إلى تحديث برمجي للحصول على ميزات Thread 1.4، وقد تحتاج إلى استبدال إن لم توفر الشركة المصنّعة تحديثًا. والموجّهات الحدودية المعتمدة منذ 1 يناير 2026 تتبع Thread 1.4.',
          },
        },
        {
          '@type': 'Question',
          name: 'كم موجّهًا حدوديًا Thread ينبغي أن أملك؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'أكثر من واحد، في مناطق مختلفة من المنزل، يحسّن موثوقية الشبكة عادةً لأنها تتعاون ولا تتعارض. ومع Thread 1.4 ومشاركة بيانات الاعتماد، تنضم موجّهات حدودية من علامات مختلفة إلى الشبكة نفسها.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يفيد معيار Wi-Fi الأسرع منزلي الذكي فعلًا؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'يفيد أساسًا في عرض نطاق بث الكاميرات إذا شغّلت عدة كاميرات عالية الدقة، وفي الشبكات ذات الأجهزة المتصلة الكثيرة في آن واحد. أما لمعظم أجهزة الاستشعار والمقابس الذكية العاملة على 2.4 GHz أو Zigbee/Thread فالفرق العملي لأحدث جيل من Wi-Fi ضئيل.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل أنتظر Wi-Fi 8 قبل شراء موجّه؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'عادةً لا. لم يُصدَّق بعدُ على Wi-Fi 8 (802.11bn) ويُتوقع نحو عام 2028. وهو يستهدف الموثوقية وزمن الاستجابة لا زيادة السرعة القصوى، وتعمل الموجّهات الحدودية Thread بمعزل عن جيل Wi-Fi.',
          },
        },
        {
          '@type': 'Question',
          name: 'ما الذي يحدّ فعليًا من أداء شبكة المنزل الذكي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'في الغالب كثافة الأجهزة (عدد أجهزة إنترنت الأشياء المتصلة في آن واحد) وتغطية 2.4 GHz، لا سرعة Wi-Fi القصوى. افحص حد الاتصال المتزامن في موجّهك إذا كان لديك مقابس ذكية وأجهزة استشعار كثيرة.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل أشتري نظام Wi-Fi شبكيًا للمنزل الذكي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'قد يساعد النظام الشبكي في تغطية 2.4 GHz لكامل المنزل لأجهزة الاستشعار العاملة بالبطارية، وهو أهم لموثوقية الأجهزة من السرعة الخام. تحقق مما إذا كانت كل عقدة شبكية تعمل أيضًا موجّهًا حدوديًا Thread إن كان ذلك يهمك.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل Thread هو نفسه Wi-Fi؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. Thread بروتوكول شبكي مترابط منخفض الطاقة ومختلف عن Wi-Fi، والموجّه الحدودي Thread هو الجسر بين الاثنين. راجع المدخل العام إلى البروتوكولات للمقارنة الكاملة.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل تحتاج كل أجهزة منزلي الذكي إلى Thread؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. ما زالت أجهزة كثيرة تستخدم Zigbee أو Z-Wave أو Wi-Fi مباشرةً. Thread أحد عدة بروتوكولات مستخدمة؛ راجع المدخل العام إلى البروتوكولات لمعرفة الأجهزة التي تستخدم كل بروتوكول عادةً.',
          },
        },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-16',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: '2026 Protocols & Regulation',
    heroImage: '/images/thread-14-wifi-7-routers-guide-overview-hero-ko.webp',
    title: '스마트홈을 위한 Thread와 Wi-Fi 7 라우터 (2026년)',
    seoTitle: '스마트홈용 Thread + Wi-Fi 7 라우터 (2026년)',
    intro:
      '스마트홈 네트워크에는 두 개의 계층이 필요합니다. 하나는 저전력 Thread 기기(잠금장치, 센서, 일부 조명)를 홈 네트워크에 연결하는 Thread 경계 라우터이고, 다른 하나는 카메라와 음성에 충분한 대역폭과 낮은 지연 시간을 제공하는 Wi-Fi입니다. Thread 1.4와 Wi-Fi 7(802.11be)은 모두 현행 규격이지만 서로 별개의 기능입니다. eero 7 시리즈와 Google Nest Wifi Pro 같은 일부 메시 Wi-Fi 시스템은 Thread 경계 라우터를 겸하지만, Wi-Fi 7 표기만으로는 Thread 지원 여부를 알 수 없습니다. 이 가이드는 어떤 기기군이 해당하는지, Thread 1.4에서 무엇이 달라지는지, 구매 전에 무엇을 확인해야 하는지 설명합니다.',
    metaDescription:
      '어떤 라우터가 Thread 경계 라우터일까요? Thread 1.4 해설, 해당하는 메시 Wi-Fi와 허브, 스마트홈 Wi-Fi 7의 실제 요건.',
    twitterDescription:
      'Wi-Fi 7 표기가 Thread 경계 라우터를 뜻하지는 않습니다. 해당하는 메시 시스템과 허브, Thread 1.4의 변화, 스마트홈 Wi-Fi 요건을 정리했습니다.',
    readTime: '7분 소요',
    educationalLevel: 'Intermediate',
    audience: '라우터나 Thread 경계 라우터를 선택하는 스마트홈 소유자',
    primaryTerm: 'thread border router wifi smart home',
    targetKeywords: [
      'thread 경계 라우터 wifi 라우터',
      '스마트홈 최고의 라우터 2027',
      'wifi 7 스마트홈 카메라 대역폭',
      'thread 메시 네트워크 스마트홈',
      'home assistant thread 경계 라우터',
    ],
    leadAnswerBlock:
      '**Wi-Fi 7 라우터가 자동으로 Thread 경계 라우터인 것은 아닙니다. eero 7 시리즈 메시 시스템과 Google Nest Wifi Pro는 Thread 경계 라우터로 등재되어 있지만, Wi-Fi 세대 표기만으로는 Thread 지원 여부를 알 수 없으므로 구매 전에 제조사 사양서에서 Thread 경계 라우터 지원을 확인하세요. 2026년 1월 1일부터 새로 인증받는 모든 경계 라우터는 Thread 1.4를 충족해야 하며, 이에 따라 서로 다른 브랜드의 경계 라우터가 하나의 Thread 네트워크를 공유할 수 있습니다.**',
    quickAnswerTop: {
      ko: {
        question: '스마트홈에 Wi-Fi 7 라우터와 Thread 경계 라우터가 모두 필요한가요?',
        answer: 'Thread 경계 라우터는 Thread 기기(최근의 많은 잠금장치, 센서, 일부 조명)를 쓸 때만 필요합니다. 이미 가지고 있는 스마트 스피커, 디스플레이, Apple TV, Google TV Streamer, 허브에 내장된 경우가 많고, eero 7 시리즈나 Google Nest Wifi Pro 같은 일부 메시 Wi-Fi 시스템에도 포함되어 있습니다. Thread에는 Wi-Fi 7이 필요하지 않으며, Wi-Fi 7은 주로 카메라 대역폭과 다수의 동시 접속 기기에 의미가 있습니다.',
        bullets: [
          'Thread 경계 라우터: 먼저 보유 중인 스피커, 디스플레이, Apple TV, 허브를 확인',
          'Wi-Fi 7이 Thread 지원을 뜻하지 않음: Thread 경계 라우터 등재 여부를 확인',
          'Thread 1.4 경계 라우터는 브랜드와 관계없이 하나의 Thread 네트워크를 공유',
          'Wi-Fi 우선순위: 카메라와 음성 부하에 맞는 대역폭과 지연 시간, 센서용 2.4GHz 커버리지',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: 'Thread 경계 라우터가 하는 일', anchor: 'thread-border-router' },
      { label: 'Thread 경계 라우터에 해당하는 기기', anchor: 'border-router-devices' },
      { label: 'Thread 1.4에서 달라지는 점', anchor: 'thread-14' },
      { label: 'Wi-Fi에 실제로 필요한 것', anchor: 'wifi-needs' },
      { label: 'Wi-Fi 7 메시 시스템 고르는 법', anchor: 'mesh-checklist' },
      { label: 'Wi-Fi 8을 기다리지 않아도 되는 이유', anchor: 'wifi-8' },
      { label: '마케팅에서 무시해야 할 것', anchor: 'marketing-noise' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Thread 경계 라우터는 Thread 기기를 네트워크에 연결하며 스피커, 허브, 메시 Wi-Fi 시스템에 내장된 경우가 많고, Wi-Fi 7은 주로 카메라 대역폭에 도움이 되므로 둘은 별개의 구매 결정입니다.' },
      { type: 'plain-terms', content: '많은 잠금장치와 센서 같은 일부 스마트홈 기기는 Thread라는 저전력 프로토콜을 사용합니다. 일반 네트워크에 닿으려면 "경계 라우터"가 필요하며, 이는 스마트 스피커, Apple TV, 메시 Wi-Fi 시스템에 이미 내장된 경우가 많습니다. Wi-Fi 7은 카메라와 붐비는 네트워크에 도움이 되는 별개의 업그레이드이며, 그것만으로 Thread가 추가되지는 않습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Thread 경계 라우터는 Thread 기기(잠금장치, 센서, 일부 조명)를 네트워크에 연결합니다. 전용 기기를 사기 전에 스피커, 디스플레이, Apple TV, 허브부터 확인하세요.',
          'Wi-Fi 7과 Thread는 서로 독립적입니다. eero 7 시리즈와 Google Nest Wifi Pro는 Thread 경계 라우터로 등재되어 있지만, Wi-Fi 7 표기만으로 Thread 지원이 보장되지는 않습니다.',
          'Thread 1.4 경계 라우터는 자격 증명 공유를 지원해야 하므로 서로 다른 브랜드의 경계 라우터가 하나의 Thread 네트워크에 참여할 수 있습니다. 2026년 1월 1일 이후 인증된 경계 라우터는 Thread 1.4를 따릅니다.',
          '스마트홈 Wi-Fi에서는 상자에 적힌 최고 속도보다 카메라용 대역폭, 낮은 지연 시간, 2.4GHz 커버리지가 더 중요합니다.',
          'Wi-Fi 8(802.11bn)은 아직 비준되지 않았으며 2028년경으로 예상되므로, 현재 선택지는 여전히 Wi-Fi 7입니다.',
        ],
      },
      threadBorderRouter: {
        id: 'thread-border-router',
        title: 'Thread 경계 라우터가 하는 일',
        content: '**Thread 경계 라우터는 Thread 기기를 홈 네트워크와 인터넷에 연결하며, 이미 보유한 스마트 스피커, 디스플레이, 스트리머, 허브, 메시 Wi-Fi 시스템 안에 들어 있는 경우가 많습니다.**',
        items: [
          'Thread는 2.4GHz 대역을 쓰는 저전력 메시 프로토콜이며 Wi-Fi와는 별개입니다. 경계 라우터가 없으면 Thread 기기는 스마트폰이나 Home Assistant에 닿을 수 없습니다.',
          '한 네트워크에 경계 라우터가 여러 대 있으면 메시 커버리지가 넓어지고 이중화가 되므로, 집의 다른 구역에 하나 더 두면 일반적으로 안정성이 좋아집니다.',
          'Thread Group에 따르면 Thread 1.4.0(2024년 9월)은 현행 사양이며, 2026년 1월 1일부터는 새 Thread 경계 라우터가 인증받을 수 있는 유일한 버전입니다.',
          '경계 라우터에 Wi-Fi 7은 필요하지 않습니다. Thread는 자체 무선 칩으로 동작하므로, 더 오래된 Wi-Fi 세대에 경계 라우터를 갖춰도 Thread 기기에는 똑같이 작동합니다.',
        ],
      },
      borderRouterDevices: {
        id: 'border-router-devices',
        title: 'Thread 경계 라우터에 해당하는 기기',
        content: '**경계 라우터는 메시 Wi-Fi 시스템, 스마트 스피커와 디스플레이, 스트리머, 스마트홈 허브, DIY 보드의 다섯 가지 기기군에서 나옵니다.** 아래 목록은 2026년 10월에 갱신된 Matter Alpha 경계 라우터 디렉터리를 따르며, 제품별 Thread 버전은 표기되어 있지 않으므로 Thread 1.4 지원은 제조사 페이지에서 확인하세요.',
        columns: ['기기군', '예시', '비고'],
        rows: [
          { '기기군': '메시 Wi-Fi 시스템', '예시': 'eero 7, Pro 7, Max 7, Outdoor 7', '비고': 'Wi-Fi 7' },
          { '기기군': '메시 Wi-Fi 시스템', '예시': 'Google Nest Wifi Pro', '비고': 'Wi-Fi 6E' },
          { '기기군': '스피커와 디스플레이', '예시': 'Echo (4th gen), Echo Show 8/11, Nest Hub', '비고': '이미 보유한 경우가 많음' },
          { '기기군': 'Apple 기기', '예시': 'HomePod mini, HomePod (2nd gen), Apple TV 4K', '비고': 'Apple TV는 3세대 이더넷 모델' },
          { '기기군': '스트리머', '예시': 'Google TV Streamer (4K)', '비고': 'TV에 연결' },
          { '기기군': '스마트홈 허브', '예시': 'SmartThings Station, Aqara Hub M3, IKEA DIRIGERA', '비고': '허브가 Matter도 실행' },
          { '기기군': 'DIY 및 Home Assistant', '예시': 'Home Assistant Green, Connect ZBT-2', '비고': '오픈소스 OpenThread' },
        ],
        items: [
          'Wi-Fi 6와 6E 세대를 포함해 여러 eero 모델이 등재되어 있으므로, 정확한 모델은 eero 지원 페이지에서 확인하세요.',
          '이미 스피커나 Apple TV로 Thread 기기가 잘 작동한다면, Wi-Fi 7로 업그레이드해도 그 기기들에는 달라지는 것이 없습니다.',
        ],
      },
      thread14: {
        id: 'thread-14',
        title: 'Thread 1.4에서 달라지는 점',
        content: '**Thread 1.4에서는 자격 증명 공유가 필수가 되어, 서로 다른 브랜드의 경계 라우터가 각자 네트워크를 만드는 대신 하나의 Thread 네트워크에 참여할 수 있습니다.**',
        items: [
          '자격 증명 공유를 통해 새 경계 라우터나 기기가 새 네트워크를 만들지 않고 기존 Thread 네트워크에 참여할 수 있으며, Espressif의 설명대로 Thread 1.4 사양은 인증받는 모든 경계 라우터에 이를 요구합니다.',
          '적용 속도는 제각각입니다. SmartThings 허브는 자격 증명 공유가 포함된 Thread 1.4로 업그레이드되었고 Home Assistant의 OpenThread 경계 라우터도 Thread 1.4를 베타로 추가했지만, 모든 제품에 업데이트가 나온 것은 아닙니다.',
          'Thread Group 대표 Vividh Siddha에 따르면 기존 경계 라우터가 Thread 1.4 기능을 쓰려면 소프트웨어 업데이트나 교체가 필요합니다. 또한 Matter 1.4는 Thread를 포함한 라우터를 위해 홈 라우터 및 액세스 포인트(HRAP) 기기 유형을 추가했습니다.',
          '경계 라우터가 모두 Thread 1.4를 지원하기 전까지는 브랜드를 섞으면 Thread 네트워크가 여전히 분리될 수 있으므로, 같은 브랜드의 경계 라우터를 선택하거나 추가 전에 1.4 지원을 확인하세요.',
        ],
      },
      wifiNeeds: {
        id: 'wifi-needs',
        title: 'Wi-Fi에 실제로 필요한 것',
        content: '**카메라 스트림(특히 Frigate로 여러 대의 4K 카메라를 쓸 때)과 반응이 빠른 음성 비서에는 사양서의 최신 Wi-Fi 세대 숫자보다 일관된 대역폭과 낮은 지연 시간이 더 중요합니다.**',
        items: [
          '로컬 카메라 감지(로컬 AI 보안 카메라 가이드 참고)는 로컬 네트워크를 통해 영상을 Frigate 장비로 보냅니다. 이 부하는 실제 대역폭이 넉넉할수록, 특히 카메라가 여러 대일수록 도움이 되며, 유선 카메라는 Wi-Fi 자체를 거치지 않습니다.',
          '음성 비서의 반응성은 Wi-Fi 처리량 자체보다 로컬 허브의 처리 능력(로컬 음성 비서 가이드 참고)에 더 좌우되지만, 혼잡한 네트워크는 모든 것에 지연을 더합니다.',
          'Wi-Fi 7(802.11be)은 320MHz 채널과 멀티 링크 작동을 추가하며, 이는 주로 동시 접속 기기가 많거나 고대역폭 기기가 있을 때 도움이 됩니다. 일반적인 카메라와 음성 부하라면 잘 설정된 Wi-Fi 6 또는 6E 시스템으로도 충분할 수 있으니, 광고된 처리량은 보장된 이득이 아니라 상한선으로 보세요.',
          '보급형 Wi-Fi 7 메시 시스템은 6GHz 무선 없이 듀얼 밴드(2.4GHz와 5GHz)일 수 있으므로, 세대 표기 대신 지원 대역 목록을 확인하세요.',
        ],
      },
      meshChecklist: {
        id: 'mesh-checklist',
        title: 'Wi-Fi 7 메시 시스템 고르는 법',
        content: '**메시 시스템은 대표 속도 등급이 아니라 Thread 지원, 유선 백홀, 대역 수, 클라이언트 제한의 순서로 고르세요.**',
        items: [
          'Thread 경계 라우터: 제조사 지원 페이지에서 확인하고 Thread 버전이 명시되어 있는지 살펴보세요. eero 7 시리즈는 등재되어 있지만 다른 많은 브랜드는 그렇지 않습니다.',
          '백홀: 노드 사이를 이더넷으로 잇거나 전용 트라이밴드 무선 백홀을 쓰면, 노드 간 트래픽이 카메라가 사용하는 채널을 차지하지 않습니다.',
          '대역: 6GHz 무선은 카메라와 노트북에 도움이 되지만 센서는 2.4GHz에 머물기 때문에, 센서에는 모든 방의 2.4GHz 커버리지가 더 중요합니다.',
          '클라이언트 제한: 플러그, 전구, 센서가 많은 집은 명시된 동시 접속 기기 제한을 확인하세요.',
          '지속 비용: 일부 eero 기능은 유료 eero Plus 구독 뒤에 있으므로 기본 시스템에 무엇이 포함되는지 확인하세요.',
          '기존 장비: 스피커, Apple TV, 허브가 이미 Thread 경계 라우터 역할을 한다면 Wi-Fi 시스템은 Wi-Fi 성능만으로 고르면 됩니다.',
        ],
      },
      wifi8: {
        id: 'wifi-8',
        title: 'Wi-Fi 8을 기다리지 않아도 되는 이유',
        content: '**Wi-Fi 8(IEEE 802.11bn)은 아직 비준되지 않았고 2028년경으로 예상되므로, 지금 구매할 현행 세대는 Wi-Fi 7입니다.**',
        items: [
          '초안 기반 Wi-Fi 8 칩은 CES 2026에서 발표되었고 초안에 기반한 초기 라우터도 보도되었지만, 얼리 어답터는 비준 이후 펌웨어 업데이트가 필요할 가능성이 높습니다.',
          'Wi-Fi 8은 최고 속도 향상보다 안정성과 지연 시간을 목표로 하며 Wi-Fi 7과 같은 대역과 320MHz 폭을 유지합니다. Wi-Fi Alliance 인증은 2027년 말경으로 예상됩니다.',
          'Thread는 Wi-Fi 세대에 묶여 있지 않으므로, 오늘 구입한 Thread 경계 라우터는 나중에 Wi-Fi를 업그레이드한 뒤에도 계속 작동합니다.',
        ],
      },
      marketingNoise: {
        id: 'marketing-noise',
        title: '마케팅에서 무시해야 할 것',
        content: '**라우터의 이론상 최대 처리량이 스마트홈의 병목이 되는 경우는 드뭅니다. 기기 밀도, 배터리 구동 센서용 2.4GHz 커버리지, 동시 접속 제한이 대개 더 중요합니다.**',
        items: [
          '개별 스마트홈 센서와 배터리 구동 기기 대부분은 2.4GHz Wi-Fi 또는 Zigbee, Thread 같은 별도 프로토콜을 사용하므로, 라우터의 6GHz나 최신 표준 속도가 이들에 직접 영향을 주는 일은 드뭅니다.',
          '스마트 플러그, 센서 등 IoT 기기가 많다면 라우터에 명시된 동시 접속 기기 제한을 확인하세요. 대부분의 스마트홈에서는 이 실질적 제한이 이론상 처리량보다 중요합니다.',
          '라우터 상자의 "스마트홈 지원"이나 "Matter 지원" 문구로는 Thread 경계 라우터인지 알 수 없으므로, 사양이나 제조사 지원 페이지에서 Thread 경계 라우터 항목을 찾아보세요.',
          '실제 성능은 제조사의 속도 등급이 아니라 독립적인 리뷰에서 드러납니다. PromptQuorum은 이 가이드에 언급된 제품을 직접 테스트하지 않았습니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Wi-Fi 7 라우터에는 Thread 경계 라우터가 포함되어 있나요?', a: '자동으로 포함되지는 않습니다. Wi-Fi 7은 Wi-Fi 무선을 가리키며, Thread 경계 라우터에는 별도의 Thread 무선과 소프트웨어가 필요합니다. eero 7 시리즈는 Thread 경계 라우터로 등재되어 있지만, 고려 중인 라우터는 사양서에서 Thread 경계 라우터 기능을 확인하세요.' },
          { q: '어떤 라우터가 Thread 경계 라우터 역할을 할 수 있나요?', a: 'Thread 경계 라우터로 등재된 메시 시스템에는 eero 7, Pro 7, Max 7, Outdoor 7과 Google Nest Wifi Pro가 있습니다. 많은 사용자는 이미 스마트 스피커, 디스플레이, HomePod, Apple TV 4K, Google TV Streamer, 허브에 하나를 갖고 있으니 먼저 확인하세요.' },
          { q: '별도의 Thread 경계 라우터 기기가 필요한가요?', a: '기존 스마트 스피커, 스트리머, 허브에 이미 포함된 경우가 많아 대개는 필요하지 않습니다. 전용 기기를 구매하기 전에 현재 장비의 사양을 확인하세요.' },
          { q: 'Thread 1.4는 무엇이며 경계 라우터를 교체해야 하나요?', a: 'Thread 1.4는 서로 다른 브랜드의 기기가 하나의 Thread 네트워크에 참여할 수 있도록 경계 라우터가 자격 증명 공유를 지원하도록 요구합니다. 기존 경계 라우터가 Thread 1.4 기능을 쓰려면 소프트웨어 업데이트가 필요하며, 제조사가 제공하지 않으면 교체해야 할 수 있습니다. 2026년 1월 1일 이후 인증된 경계 라우터는 Thread 1.4를 따릅니다.' },
          { q: 'Thread 경계 라우터는 몇 개나 두어야 하나요?', a: '집의 여러 구역에 하나 이상을 두면 서로 충돌하지 않고 협력하므로 일반적으로 메시 안정성이 좋아집니다. Thread 1.4와 자격 증명 공유가 적용되면 서로 다른 브랜드의 경계 라우터도 같은 네트워크에 참여할 수 있습니다.' },
          { q: '더 빠른 Wi-Fi 표준이 스마트홈에 실제로 도움이 되나요?', a: '주로 고해상도 카메라 여러 대를 운영할 때의 카메라 스트리밍 대역폭과, 동시 접속 기기가 많은 네트워크에 도움이 됩니다. 2.4GHz나 Zigbee/Thread를 쓰는 대부분의 개별 센서와 스마트 플러그에는 최신 Wi-Fi 세대가 실질적인 차이를 거의 만들지 않습니다.' },
          { q: '라우터를 사기 전에 Wi-Fi 8을 기다려야 하나요?', a: '대개는 그럴 필요가 없습니다. Wi-Fi 8(802.11bn)은 아직 비준되지 않았고 2028년경으로 예상됩니다. 최고 속도보다 안정성과 지연 시간을 목표로 하며, Thread 경계 라우터는 Wi-Fi 세대와 무관하게 작동합니다.' },
          { q: '스마트홈 네트워크 성능을 실제로 제한하는 것은 무엇인가요?', a: '최고 수준의 Wi-Fi 속도보다 기기 밀도(동시에 연결된 IoT 기기 수)와 2.4GHz 커버리지인 경우가 더 많습니다. 스마트 플러그와 센서가 많다면 라우터의 동시 접속 제한을 확인하세요.' },
          { q: '스마트홈을 위해 메시 Wi-Fi 시스템을 사야 하나요?', a: '메시 시스템은 배터리 구동 센서를 위한 집 전체의 2.4GHz 커버리지에 도움이 될 수 있으며, 이는 기기 안정성에 속도보다 더 중요합니다. Thread가 중요하다면 각 메시 노드가 Thread 경계 라우터 역할도 하는지 확인하세요.' },
          { q: 'Thread와 Wi-Fi는 같은 것인가요?', a: '아니요. Thread는 Wi-Fi와 구별되는 별도의 저전력 메시 프로토콜이며, Thread 경계 라우터는 둘을 잇는 다리입니다. 전체 비교는 일반 프로토콜 입문 글을 참고하세요.' },
          { q: '모든 스마트홈 기기에 Thread가 필요한가요?', a: '아니요. 많은 기기가 여전히 Zigbee, Z-Wave, Wi-Fi를 직접 사용합니다. Thread는 사용 중인 여러 프로토콜 중 하나이며, 어떤 기기가 보통 어떤 프로토콜을 쓰는지는 일반 프로토콜 입문 글을 참고하세요.' },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Matter Alpha: Thread border routers, the complete list](https://www.matteralpha.com/frequently-asked-questions/thread-border-routers-the-complete-list) (기기군, 2026년 10월)',
          '[Thread Group](https://www.threadgroup.org/) (Thread 1.4.0 사양 및 인증)',
          '[Espressif: Thread credential sharing](https://developer.espressif.com/blog/2026/01/thread-credential-sharing/) (Thread 1.4 경계 라우터 필수 사항)',
          '[Matter Alpha: SmartThings hubs upgrade to Thread 1.4](https://www.matteralpha.com/news/smartthings-hubs-upgrade-to-thread-1-4-with-credential-sharing-feature)',
          '[Matter Alpha: Home Assistant upgrades OpenThread border router to 1.4 in beta](https://www.matteralpha.com/news/home-assistant-upgrades-openthread-border-router-to-1-4-in-beta)',
          '[Matter-Smarthome.de: The Matter standard 2025](https://matter-smarthome.de/en/development/the-matter-standard-2025-taking-stock/) (Matter 1.4, HRAP 기기 유형)',
          '[Wikipedia: Wi-Fi 8](https://en.wikipedia.org/wiki/Wi-Fi_8) 및 [TechSpot: Wi-Fi 8 at CES 2026](https://www.techspot.com/news/110830-wi-fi-8-already-peeking-out-ces-2026.html) (802.11bn 일정)',
          '[eero: What is Thread?](https://eero.com/support/articles/what-is-thread) (eero의 Thread 경계 라우터 지원)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Matter, Thread, Zigbee, Z-Wave: 프로토콜 해설](/ko/smart-home/smart-home-protocols-explained) — Thread가 무엇인지, 다른 프로토콜과의 비교',
          '[Matter 1.6 해설: 무엇이 새로운가](/ko/smart-home/matter-1-6-explained) — 네트워킹 하드웨어와 별개인 애플리케이션 계층 사양',
          '[Frigate를 사용한 로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera) — 대역폭을 가장 많이 사용하는 로컬 워크로드',
          '[최고의 Zigbee 및 Thread USB 동글](/ko/smart-home/best-zigbee-thread-dongles-2027) — 미니 PC/Pi 허브를 위한 전용 무선 하드웨어',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트홈을 위한 Thread와 Wi-Fi 7 라우터 (2026년)',
      description: '어떤 라우터가 Thread 경계 라우터일까요? Thread 1.4 해설, 해당하는 메시 Wi-Fi와 허브, 스마트홈 Wi-Fi 7의 실제 요건.',
      url: 'https://www.promptquorum.com/ko/smart-home/thread-14-wifi-7-routers-guide',
      inLanguage: 'ko',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      datePublished: '2026-07-16',
      dateModified: '2026-10-18',
      about: [
        { '@type': 'Thing', name: 'Thread 경계 라우터' },
        { '@type': 'Thing', name: 'Wi-Fi 네트워킹' },
        { '@type': 'Thing', name: '스마트홈 네트워킹' },
      ],
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wi-Fi 7 라우터에는 Thread 경계 라우터가 포함되어 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '자동으로 포함되지는 않습니다. Wi-Fi 7은 Wi-Fi 무선을 가리키며, Thread 경계 라우터에는 별도의 Thread 무선과 소프트웨어가 필요합니다. eero 7 시리즈는 Thread 경계 라우터로 등재되어 있지만, 고려 중인 라우터는 사양서에서 Thread 경계 라우터 기능을 확인하세요.',
          },
        },
        {
          '@type': 'Question',
          name: '어떤 라우터가 Thread 경계 라우터 역할을 할 수 있나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 경계 라우터로 등재된 메시 시스템에는 eero 7, Pro 7, Max 7, Outdoor 7과 Google Nest Wifi Pro가 있습니다. 많은 사용자는 이미 스마트 스피커, 디스플레이, HomePod, Apple TV 4K, Google TV Streamer, 허브에 하나를 갖고 있으니 먼저 확인하세요.',
          },
        },
        {
          '@type': 'Question',
          name: '별도의 Thread 경계 라우터 기기가 필요한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '기존 스마트 스피커, 스트리머, 허브에 이미 포함된 경우가 많아 대개는 필요하지 않습니다. 전용 기기를 구매하기 전에 현재 장비의 사양을 확인하세요.',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread 1.4는 무엇이며 경계 라우터를 교체해야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Thread 1.4는 서로 다른 브랜드의 기기가 하나의 Thread 네트워크에 참여할 수 있도록 경계 라우터가 자격 증명 공유를 지원하도록 요구합니다. 기존 경계 라우터가 Thread 1.4 기능을 쓰려면 소프트웨어 업데이트가 필요하며, 제조사가 제공하지 않으면 교체해야 할 수 있습니다. 2026년 1월 1일 이후 인증된 경계 라우터는 Thread 1.4를 따릅니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread 경계 라우터는 몇 개나 두어야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '집의 여러 구역에 하나 이상을 두면 서로 충돌하지 않고 협력하므로 일반적으로 메시 안정성이 좋아집니다. Thread 1.4와 자격 증명 공유가 적용되면 서로 다른 브랜드의 경계 라우터도 같은 네트워크에 참여할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '더 빠른 Wi-Fi 표준이 스마트홈에 실제로 도움이 되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '주로 고해상도 카메라 여러 대를 운영할 때의 카메라 스트리밍 대역폭과, 동시 접속 기기가 많은 네트워크에 도움이 됩니다. 2.4GHz나 Zigbee/Thread를 쓰는 대부분의 개별 센서와 스마트 플러그에는 최신 Wi-Fi 세대가 실질적인 차이를 거의 만들지 않습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '라우터를 사기 전에 Wi-Fi 8을 기다려야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '대개는 그럴 필요가 없습니다. Wi-Fi 8(802.11bn)은 아직 비준되지 않았고 2028년경으로 예상됩니다. 최고 속도보다 안정성과 지연 시간을 목표로 하며, Thread 경계 라우터는 Wi-Fi 세대와 무관하게 작동합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '스마트홈 네트워크 성능을 실제로 제한하는 것은 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '최고 수준의 Wi-Fi 속도보다 기기 밀도(동시에 연결된 IoT 기기 수)와 2.4GHz 커버리지인 경우가 더 많습니다. 스마트 플러그와 센서가 많다면 라우터의 동시 접속 제한을 확인하세요.',
          },
        },
        {
          '@type': 'Question',
          name: '스마트홈을 위해 메시 Wi-Fi 시스템을 사야 하나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '메시 시스템은 배터리 구동 센서를 위한 집 전체의 2.4GHz 커버리지에 도움이 될 수 있으며, 이는 기기 안정성에 속도보다 더 중요합니다. Thread가 중요하다면 각 메시 노드가 Thread 경계 라우터 역할도 하는지 확인하세요.',
          },
        },
        {
          '@type': 'Question',
          name: 'Thread와 Wi-Fi는 같은 것인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요. Thread는 Wi-Fi와 구별되는 별도의 저전력 메시 프로토콜이며, Thread 경계 라우터는 둘을 잇는 다리입니다. 전체 비교는 일반 프로토콜 입문 글을 참고하세요.',
          },
        },
        {
          '@type': 'Question',
          name: '모든 스마트홈 기기에 Thread가 필요한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요. 많은 기기가 여전히 Zigbee, Z-Wave, Wi-Fi를 직접 사용합니다. Thread는 사용 중인 여러 프로토콜 중 하나이며, 어떤 기기가 보통 어떤 프로토콜을 쓰는지는 일반 프로토콜 입문 글을 참고하세요.',
          },
        },
      ],
    },
  },
}
