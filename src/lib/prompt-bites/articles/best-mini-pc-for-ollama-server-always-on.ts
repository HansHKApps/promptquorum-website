import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-en.webp',
    type: 'comparison',
    title: 'Best Mini PC for an Always-On Ollama Server (2026)',
    seoTitle: 'Best Mini PC for Always-On Ollama Server 2026',
    metaDescription: 'Run Ollama 24/7 on a mini PC (estimated 10–45 W). Top picks: Minisforum UM890 Pro, AOOSTAR GEM12, Beelink SER8. Specs, power draw, and buy links inside.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**Our pick for an always-on Ollama server is the Minisforum UM890 Pro (AMD Ryzen 9 8945HS, 32–96 GB RAM, Radeon 780M iGPU), chosen from published specifications; PromptQuorum has not tested these mini PCs. Estimated power draw under load is 25–45 W. With dual-channel DDR5-5600 (89.6 GB/s), memory bandwidth caps a 7B Q4 model of about 4.5 GB at roughly 20 tok/s; expect less in practice.**',
    quickAnswerTop: {
      question: 'What is the best mini PC for running Ollama as an always-on home server?',
      answer: 'The Minisforum UM890 Pro is our top pick: an 8-core CPU, up to 96 GB RAM for larger models and an estimated 25–45 W under load. Treat the Radeon 780M as unverified for Ollama: it is not on Ollama\'s official ROCm GPU list. Lower-cost option: Beelink SER8 (~$450). For an external GPU: AOOSTAR GEM12 Pro OCuLink.',
      bullets: [
        'Minisforum UM890 Pro: best overall — Ryzen 9 8945HS, up to 96 GB DDR5, 25–45 W',
        'AOOSTAR GEM12 Pro OCuLink: best for eGPU — OCuLink port connects RTX 3080/3090',
        'Beelink SER8: best budget — Ryzen 7 8745HS, 32 GB, ~$450',
        'Apple Mac Mini M6/M5 Pro: macOS option — M6 from $899 (up to 32 GB); 64 GB M5 Pro from $2,699 (Apple US, 28 November 2026; the $1,699 base has 24 GB)',
        'The three x86 picks at an assumed 25–45 W average cost about $3–5 a month at $0.15/kWh',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Mini PCs draw 15–45 W vs 200–350 W for desktop GPUs — 24/7 savings matter (typical ranges, estimates)',
          'UM890 Pro runs 7B models on the CPU; memory bandwidth caps 7B Q4 at roughly 20 tok/s, real speed is lower',
          'AOOSTAR GEM12 Pro + OCuLink eGPU unlocks GPU acceleration without a desktop PC',
          'Mac Mini: the 64 GB M5 Pro gives 30B-class models comfortable room; the base M6 tops out at 32 GB; both available since September 22, 2026',
          'Beelink SER8 is the lower-cost start at about $450 — 32 GB RAM for 7B and 13B',
        ],
      },
      rankedList: {
        title: 'Best Mini PCs for Always-On Ollama Server — Ranked',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The Minisforum UM890 Pro is our pick for an always-on Ollama server because it combines an 8-core CPU, up to 96 GB DDR5 RAM and an estimated sub-50 W power draw.',
          },
          {
            type: 'plain-terms',
            text: 'A mini PC running Ollama can serve AI responses to your home network around the clock while using far less power than a desktop with a large graphics card. More RAM = larger models. OCuLink = add a real GPU without a full desktop.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Minisforum UM890 Pro — Best Overall',
            content: 'The Minisforum UM890 Pro runs the AMD Ryzen 9 8945HS (8-core, up to 5.2 GHz) and supports up to 96 GB DDR5-5600 dual-channel RAM — enough memory to load Llama 3.3 70B at Q4 (43 GB), but slowly: the 89.6 GB/s of memory bandwidth caps it at about 2 tok/s. For a 7B Q4 model the same ceiling is roughly 20 tok/s. These are theoretical limits, not measurements; expect less. The Radeon 780M iGPU is not on [Ollama\'s official ROCm GPU list](https://docs.ollama.com/gpu) (checked November 28, 2026); Ollama also has a Vulkan backend, but we have no verified speed for this chip. Estimated idle power: ~15 W; under load: ~35–45 W. Price: ~$500 (32 GB/1 TB) to $600 (64 GB).',
            affiliateLinks: [
              { label: 'Minisforum UM890 Pro on Amazon', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
              { label: 'Minisforum UM890 Pro on Minisforum.com', url: 'https://www.minisforum.com/products/minisforum-um890-pro' },
            ],
          },
          {
            rank: 2,
            title: 'AOOSTAR GEM12 Pro OCuLink — Best for eGPU',
            content: 'The AOOSTAR GEM12 Pro OCuLink adds an OCuLink port that connects to an external GPU over PCIe 4.0 x4 (64 GT/s raw), a quarter of the lanes of a PCIe 4.0 x16 slot. When a model fits entirely in the GPU\'s VRAM, the narrower link mainly affects loading time; work that spills into system RAM suffers more. PromptQuorum has not tested this combination and gives no speed figure for it. Without an eGPU it is a CPU mini PC like the others. The mini PC itself runs AMD Ryzen 7 Pro 8845HS with 32–96 GB DDR5. An external GPU dock or adapter, a power supply and the graphics card cost extra. Barebone price: ~$380; configured (32 GB/1 TB): ~$480.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink on Amazon', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro' },
            ],
          },
          {
            rank: 3,
            title: 'Beelink SER8 — Best Budget Pick',
            content: 'The Beelink SER8 runs the AMD Ryzen 7 8745HS (8-core, up to 4.9 GHz) with 32 GB DDR5 and 1 TB NVMe SSD for ~$450. CPU speed in Ollama is limited by memory bandwidth, and PromptQuorum has not measured it. Estimated idle power: 10–15 W. RAM is user-upgradeable (not soldered on current 8745HS revision). It is a lower-cost entry into always-on Ollama for 7B and 13B models.',
            affiliateLinks: [
              { label: 'Beelink SER8 on Amazon', url: 'https://www.amazon.com/s?k=Beelink+SER8' },
            ],
          },
          {
            rank: 4,
            title: 'Apple Mac Mini M6 / M5 Pro — Best for macOS',
            content: 'Apple refreshed the Mac Mini lineup on August 25, 2026, replacing the M4 generation. The Mac Mini M6 starts at $899 with up to 32 GB unified memory and 170 GB/s bandwidth. The Mac Mini M5 Pro starts at $1,699 with 24 GB and can be configured with up to 64 GB unified memory, with 307 GB/s bandwidth and Thunderbolt 5. On the Apple US store (checked November 28, 2026, before tax), the cheapest 64 GB configuration is $2,699 (15-core CPU, 512 GB), and the 18-core, 1 TB version is $3,199. Both have been available since September 22, 2026. For an always-on Ollama server, memory is what matters: 32 GB (M6) shared with macOS fits 7B–13B models comfortably but is tight for a 30B Q4 model of about 19 GB, while 64 GB (M5 Pro) leaves clear room for 30B-class models. PromptQuorum has not tested this hardware and gives no speed figures for it.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M6 on Amazon', url: 'https://www.amazon.com/s?k=Mac+Mini+M6' },
              { label: 'Apple Mac Mini on Apple.com (M6 and M5 Pro configs)', url: 'https://www.apple.com/shop/buy-mac/mac-mini' },
            ],
          },
        ],
      },
      powerCostBox: {
        title: 'Always-On Electricity Cost Comparison',
        content: 'Assumed average power draw (estimates, not measurements), running 24/7 for 30 days at an assumed $0.15/kWh:',
        columns: ['Device', 'Avg Load Power', 'Monthly Cost (24/7)'],
        rows: [
          { 'Device': 'Minisforum UM890 Pro', 'Avg Load Power': '35 W', 'Monthly Cost (24/7)': '~$3.78/mo' },
          { 'Device': 'Beelink SER8', 'Avg Load Power': '25 W', 'Monthly Cost (24/7)': '~$2.70/mo' },
          { 'Device': 'Mac Mini M6 / M5 Pro', 'Avg Load Power': 'Not yet benchmarked', 'Monthly Cost (24/7)': 'TBD after independent tests' },
          { 'Device': 'Desktop RTX 4060 Ti (comparison)', 'Avg Load Power': '200 W', 'Monthly Cost (24/7)': '~$21.60/mo' },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Can a mini PC run 13B or larger models at useful speed?',
            a: 'With enough RAM it can load them; speed is the limit. On a mini PC with dual-channel DDR5-5600 (89.6 GB/s), memory bandwidth caps a 13B Q8 model of about 14 GB at roughly 6 tok/s, and real speed is lower. A smaller Q4 version runs faster. These are theoretical limits, not measurements. For 30B-class models, a 64 GB Mac Mini M5 Pro (from $2,699 on the Apple US store, November 28, 2026; the $1,699 base has 24 GB) offers more memory and bandwidth. The base Mac Mini M6 (up to 32 GB) is tight for them.',
          },
          {
            q: 'Does Ollama work well as a network server on a mini PC?',
            a: 'Yes. Set OLLAMA_HOST=0.0.0.0 in your environment and Ollama serves requests from devices on your LAN. Pair it with Open WebUI (Docker container) for a browser-based interface for phones, tablets, and PCs. Response speed depends on the model and on how many requests arrive at once; PromptQuorum has not load-tested these mini PCs. Ollama has no built-in authentication, so do not expose it to the internet.',
          },
          {
            q: 'What about eGPU setups — are they worth it?',
            a: 'They are worth considering if you need models to run on a desktop-class GPU. An OCuLink setup (for example the AOOSTAR GEM12 Pro with an RTX 3090 in an external dock) uses PCIe 4.0 x4, a quarter of the lanes of a PCIe 4.0 x16 slot. This mainly slows model loading when the model fits in VRAM. The card, dock and power supply add cost and power draw, including at idle. Thunderbolt 3 and 4 enclosures typically pass less PCIe data than OCuLink x4. PromptQuorum has not benchmarked either.',
          },
        ],
      },
      relatedReading: {
        title: 'Related Guides',
        items: [
          '[Ollama Latest Version: What\'s New?](/prompt-bites/ollama-latest-version) -- Ollama updates',
          '[Best Mini PC for Local LLM](/prompt-bites/best-mini-pc-for-local-llm) -- mini PC guide',
          '[How Much RAM Does a 7B Model Need?](/prompt-bites/how-much-ram-for-7b-model) -- RAM requirements',
          '[Best Ollama Models for CPU-Only Inference](/prompt-bites/best-ollama-models-cpu-only) -- CPU inference guide',
          '[Best SSD for Fast Model Loading](/prompt-bites/best-ssd-fast-model-loading) -- SSD guide',
          '[Best VPN for Downloading AI Models](/prompt-bites/best-vpn-downloading-ai-models) -- VPN guide',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can a mini PC run 13B or larger models at useful speed?',
          acceptedAnswer: { '@type': 'Answer', text: 'With enough RAM it can load them, but memory bandwidth limits speed: at 89.6 GB/s, a 13B Q8 model of about 14 GB tops out near 6 tok/s in theory. For 30B-class models, a 64 GB Mac Mini M5 Pro (from $2,699, Apple US store, November 28, 2026; the $1,699 base has 24 GB) is an option; the 32 GB base-chip M6 is tight.' },
        },
        {
          '@type': 'Question',
          name: 'Does Ollama work well as a network server on a mini PC?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Set OLLAMA_HOST=0.0.0.0 and Ollama serves your LAN. Pair it with Open WebUI for a browser interface. Speed depends on the model and the number of simultaneous requests. Do not expose Ollama to the internet.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Best Mini PCs for Always-On Ollama Server 2026',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: 'Best overall — Ryzen 9 8945HS, up to 96 GB DDR5, ~$500' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'Best for eGPU — OCuLink port, Ryzen 7 Pro 8845HS, ~$480' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: 'Best budget — Ryzen 7 8745HS, 32 GB, ~$450' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'macOS option — M6 from $899 (up to 32 GB); 64 GB M5 Pro from $2,699 (the $1,699 base has 24 GB), available since September 22, 2026' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Best Mini PC for an Always-On Ollama Server (2026)', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'en' },
  },

  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-de.webp',
    type: 'comparison',
    title: 'Bester Mini-PC für Ollama-Server im Dauerbetrieb (2026)',
    seoTitle: 'Bester Mini-PC für Always-On Ollama Server 2026',
    metaDescription: 'Ollama 24/7 auf einem Mini-PC betreiben (geschätzt 10–45 W). Top-Empfehlungen: Minisforum UM890 Pro, AOOSTAR GEM12, Beelink SER8. Specs, Stromverbrauch und Kauflinks.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**Unsere Wahl für einen Ollama-Server im Dauerbetrieb ist der Minisforum UM890 Pro (AMD Ryzen 9 8945HS, 32–96 GB RAM, Radeon 780M iGPU), ausgewählt anhand veröffentlichter Spezifikationen; PromptQuorum hat diese Mini-PCs nicht getestet. Unter Last sind es geschätzt 25–45 W. Bei Dual-Channel-DDR5-5600 (89,6 GB/s) begrenzt die Speicherbandbreite ein 7B-Q4-Modell von ca. 4,5 GB auf rund 20 Tok/s; in der Praxis ist weniger zu erwarten.**',
    quickAnswerTop: {
      question: 'Welcher Mini-PC eignet sich am besten für einen Ollama-Home-Server im Dauerbetrieb?',
      answer: 'Der Minisforum UM890 Pro ist unsere erste Wahl: 8-Kern-CPU, bis zu 96 GB RAM für größere Modelle und geschätzt 25–45 W unter Last. Die Radeon 780M sollten Sie für Ollama als ungeprüft ansehen: Sie steht nicht auf der offiziellen ROCm-GPU-Liste von Ollama. Günstigere Option: Beelink SER8 (~420 €). Für eine externe GPU: AOOSTAR GEM12 Pro OCuLink.',
      bullets: [
        'Minisforum UM890 Pro: Bestes Gesamtpaket — Ryzen 9 8945HS, bis 96 GB DDR5, 25–45 W',
        'AOOSTAR GEM12 Pro OCuLink: Beste eGPU-Option — OCuLink-Port für RTX 3080/3090',
        'Beelink SER8: Bestes Budget — Ryzen 7 8745HS, 32 GB, ~420 €',
        'Apple Mac Mini M6/M5 Pro: macOS-Option — M6 ab 1.049 € (bis 32 GB); M5 Pro mit 64 GB ab 3.099 € (Apple Store Deutschland, 28. November 2026; die Basis für 1.999 € hat 24 GB)',
        'Die drei x86-Empfehlungen kosten bei angenommenen 25–45 W im Mittel ca. 5–10 € Strom pro Monat (0,30 €/kWh)',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Mini-PCs verbrauchen 15–45 W statt 200–350 W für Desktop-GPUs — 24/7-Einsparungen sind erheblich (typische Bereiche, geschätzt)',
          'UM890 Pro führt 7B-Modelle auf der CPU aus; die Speicherbandbreite begrenzt 7B Q4 auf rund 20 Tok/s, real ist es weniger',
          'AOOSTAR GEM12 Pro + OCuLink-eGPU ermöglicht GPU-Beschleunigung ohne Desktop-PC',
          'Mac Mini: Der M5 Pro mit 64 GB bietet 30B-Modellen reichlich Platz; der Basis-M6 endet bei 32 GB; beide seit dem 22. September 2026 erhältlich',
          'Beelink SER8 ist der günstigere Einstieg für ca. 420 € mit 32 GB RAM für 7B und 13B',
        ],
      },
      rankedList: {
        title: 'Beste Mini-PCs für Ollama-Server im Dauerbetrieb — Ranking',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Der Minisforum UM890 Pro ist unsere Wahl für einen Always-On-Ollama-Server: 8-Kern-CPU, bis zu 96 GB DDR5-RAM und geschätzt unter 50 W Stromaufnahme.',
          },
          {
            type: 'plain-terms',
            text: 'Ein Mini-PC mit Ollama kann rund um die Uhr KI-Antworten ins Heimnetz liefern und braucht dabei deutlich weniger Strom als ein Desktop mit großer Grafikkarte. Mehr RAM = größere Modelle. OCuLink = echte GPU ohne Desktop-PC.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Minisforum UM890 Pro — Bestes Gesamtpaket',
            content: 'Der Minisforum UM890 Pro läuft mit dem AMD Ryzen 9 8945HS (8 Kerne, bis 5,2 GHz) und unterstützt bis zu 96 GB DDR5-5600 Dual-Channel-RAM — genug Speicher, um Llama 3.3 70B bei Q4 (43 GB) zu laden, allerdings langsam: Die Bandbreite von 89,6 GB/s begrenzt es auf etwa 2 Tok/s. Für ein 7B-Q4-Modell liegt dieselbe Obergrenze bei rund 20 Tok/s. Das sind theoretische Grenzen, keine Messungen; real ist es weniger. Die Radeon 780M iGPU steht nicht auf der [offiziellen ROCm-GPU-Liste von Ollama](https://docs.ollama.com/gpu) (geprüft am 28. November 2026); Ollama hat auch ein Vulkan-Backend, für diesen Chip liegt uns aber keine verifizierte Geschwindigkeit vor. Geschätzt: ~15 W im Leerlauf, ~35–45 W unter Last. Preis: ~470 € (32 GB/1 TB) bis 570 € (64 GB).',
            affiliateLinks: [
              { label: 'Minisforum UM890 Pro bei Amazon.de', url: 'https://www.amazon.de/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            rank: 2,
            title: 'AOOSTAR GEM12 Pro OCuLink — Beste eGPU-Option',
            content: 'Der AOOSTAR GEM12 Pro OCuLink hat einen OCuLink-Port, der eine externe GPU über PCIe 4.0 x4 (64 GT/s brutto) anbindet, also mit einem Viertel der Lanes eines PCIe-4.0-x16-Slots. Passt ein Modell vollständig in den VRAM, wirkt sich die schmalere Verbindung vor allem auf die Ladezeit aus; Lasten, die in den Arbeitsspeicher ausgelagert werden, leiden stärker. PromptQuorum hat diese Kombination nicht getestet und nennt dafür keine Geschwindigkeit. Ohne eGPU ist er ein CPU-Mini-PC wie die anderen. Der Mini-PC selbst nutzt den AMD Ryzen 7 Pro 8845HS mit 32–96 GB DDR5. eGPU-Dock bzw. Adapter, Netzteil und Grafikkarte kosten extra. Preis Barebone: ~360 €; mit 32 GB/1 TB: ~450 €.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink bei Amazon.de', url: 'https://www.amazon.de/s?k=AOOSTAR+GEM12+Pro' },
            ],
          },
          {
            rank: 3,
            title: 'Beelink SER8 — Bestes Budget-Angebot',
            content: 'Der Beelink SER8 läuft mit dem AMD Ryzen 7 8745HS (8 Kerne, bis 4,9 GHz), 32 GB DDR5 und 1 TB NVMe-SSD für ~420 €. Die CPU-Geschwindigkeit in Ollama wird durch die Speicherbandbreite begrenzt; PromptQuorum hat sie nicht gemessen. Geschätzt 10–15 W im Leerlauf. RAM nachrüstbar (nicht verlötet bei aktueller 8745HS-Revision). Ein günstigerer Einstieg in Always-On-Ollama für 7B- und 13B-Modelle.',
            affiliateLinks: [
              { label: 'Beelink SER8 bei Amazon.de', url: 'https://www.amazon.de/s?k=Beelink+SER8' },
            ],
          },
          {
            rank: 4,
            title: 'Apple Mac Mini M6 / M5 Pro — Bester macOS-Mini-PC',
            content: 'Apple hat die Mac-Mini-Reihe am 25. August 2026 aufgefrischt und löst damit die M4-Generation ab. Der Mac Mini M6 startet bei 1.049 € mit bis zu 32 GB Unified Memory und 170 GB/s Bandbreite. Der Mac Mini M5 Pro startet bei 1.999 € mit 24 GB und lässt sich auf bis zu 64 GB Unified Memory konfigurieren, mit 307 GB/s Bandbreite und Thunderbolt 5. Im Apple Store Deutschland (geprüft am 28. November 2026) kostet die günstigste 64-GB-Konfiguration 3.099 € (15-Core-CPU, 512 GB), die Version mit 18 Kernen und 1 TB 3.649 €. Beide sind seit dem 22. September 2026 erhältlich. Für einen dauerhaft laufenden Ollama-Server zählt der Speicher: 32 GB (M6), die sich auch macOS teilt, reichen komfortabel für 7B–13B-Modelle, sind aber knapp für ein 30B-Q4-Modell von ca. 19 GB; 64 GB (M5 Pro) lassen für 30B-Modelle deutlich Platz. PromptQuorum hat diese Hardware nicht getestet und nennt dafür keine Geschwindigkeiten.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M6 bei Amazon.de', url: 'https://www.amazon.de/s?k=Mac+Mini+M6' },
              { label: 'Apple Mac Mini bei Apple.com (M6 und M5 Pro)', url: 'https://www.apple.com/de/shop/buy-mac/mac-mini' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Kann ein Mini-PC 13B- oder größere Modelle in nutzbarer Geschwindigkeit ausführen?',
            a: 'Mit genug RAM lassen sie sich laden; die Grenze ist die Geschwindigkeit. Auf einem Mini-PC mit Dual-Channel-DDR5-5600 (89,6 GB/s) begrenzt die Speicherbandbreite ein 13B-Q8-Modell von ca. 14 GB auf rund 6 Tok/s, real ist es weniger. Eine kleinere Q4-Version läuft schneller. Das sind theoretische Grenzen, keine Messungen. Für 30B-Modelle bietet ein Mac Mini M5 Pro mit 64 GB (ab 3.099 € im Apple Store Deutschland, 28. November 2026; die Basis für 1.999 € hat 24 GB) mehr Speicher und Bandbreite. Für den Basis-M6 (bis 32 GB) wird es eng.',
          },
          {
            q: 'Funktioniert Ollama gut als Netzwerkserver auf einem Mini-PC?',
            a: 'Ja. OLLAMA_HOST=0.0.0.0 setzen, dann beantwortet Ollama Anfragen von Geräten im LAN. Mit Open WebUI (Docker-Container) gibt es eine Browser-Oberfläche für Smartphones, Tablets und PCs. Die Antwortgeschwindigkeit hängt vom Modell und von gleichzeitigen Anfragen ab; PromptQuorum hat diese Mini-PCs nicht unter Last getestet. Ollama hat keine eingebaute Authentifizierung, geben Sie es daher nicht ins Internet frei.',
          },
          {
            q: 'Lohnen sich eGPU-Setups mit einem Mini-PC?',
            a: 'Sie sind eine Überlegung wert, wenn Modelle auf einer GPU der Desktop-Klasse laufen sollen. Ein OCuLink-Aufbau (zum Beispiel AOOSTAR GEM12 Pro mit einer RTX 3090 in einem externen Dock) nutzt PCIe 4.0 x4, ein Viertel der Lanes eines PCIe-4.0-x16-Slots. Passt das Modell in den VRAM, bremst das vor allem das Laden. Karte, Dock und Netzteil bringen Zusatzkosten und zusätzlichen Verbrauch, auch im Leerlauf. Thunderbolt-3- und -4-Gehäuse übertragen typischerweise weniger PCIe-Daten als OCuLink x4. PromptQuorum hat beides nicht gemessen.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kann ein Mini-PC 13B- oder größere Modelle in nutzbarer Geschwindigkeit ausführen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Mit genug RAM lassen sie sich laden, die Speicherbandbreite begrenzt aber das Tempo: Bei 89,6 GB/s liegt ein 13B-Q8-Modell von ca. 14 GB theoretisch bei höchstens rund 6 Tok/s. Für 30B-Modelle ist ein Mac Mini M5 Pro mit 64 GB (ab 3.099 €, Apple Store Deutschland, 28. November 2026; die Basis für 1.999 € hat 24 GB) eine Option; beim M6 mit 32 GB wird es eng.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste Mini-PCs für Always-On Ollama Server 2026',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: 'Bestes Gesamtpaket — Ryzen 9 8945HS, bis 96 GB DDR5, ~470 €' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'Beste eGPU-Option — OCuLink-Port, Ryzen 7 Pro 8845HS, ~450 €' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: 'Bestes Budget — Ryzen 7 8745HS, 32 GB, ~420 €' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'macOS-Option — M6 ab 1.049 € (bis 32 GB); M5 Pro mit 64 GB ab 3.099 € (die Basis für 1.999 € hat 24 GB), erhältlich seit dem 22. September 2026' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Bester Mini-PC für Ollama-Server im Dauerbetrieb (2026)', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/de/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'de' },
  },

  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-fr.webp',
    type: 'comparison',
    title: 'Meilleur mini PC pour un serveur Ollama en continu (2026)',
    seoTitle: 'Meilleur mini PC serveur Ollama always-on 2026',
    metaDescription: 'Faire tourner Ollama 24h/24 sur un mini PC (10–45 W estimés). Tops : Minisforum UM890 Pro, AOOSTAR GEM12, Beelink SER8. Specs, consommation et liens d\'achat.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**Notre choix pour un serveur Ollama en continu est le Minisforum UM890 Pro (AMD Ryzen 9 8945HS, 32–96 Go de RAM, iGPU Radeon 780M), sélectionné d\'après les spécifications publiées ; PromptQuorum n\'a pas testé ces mini PC. Sa consommation en charge est estimée à 25–45 W. Avec de la DDR5-5600 double canal (89,6 Go/s), la bande passante limite un modèle 7B Q4 d\'environ 4,5 Go à quelque 20 tok/s ; attendez-vous à moins en pratique.**',
    quickAnswerTop: {
      question: 'Quel est le meilleur mini PC pour faire tourner Ollama en tant que serveur maison en continu ?',
      answer: 'Le Minisforum UM890 Pro est notre premier choix : CPU 8 cœurs, jusqu\'à 96 Go de RAM pour des modèles plus grands et une consommation estimée à 25–45 W en charge. Considérez la Radeon 780M comme non vérifiée pour Ollama : elle ne figure pas sur la liste officielle des GPU ROCm d\'Ollama. Option moins chère : Beelink SER8 (~420 €). Pour un GPU externe : AOOSTAR GEM12 Pro OCuLink.',
      bullets: [
        'Minisforum UM890 Pro : meilleur global — Ryzen 9 8945HS, jusqu\'à 96 Go DDR5, 25–45 W',
        'AOOSTAR GEM12 Pro OCuLink : meilleur pour eGPU — port OCuLink pour RTX 3080/3090',
        'Beelink SER8 : meilleur budget — Ryzen 7 8745HS, 32 Go, ~420 €',
        'Apple Mac Mini M6/M5 Pro : option macOS — M6 dès 1 049 € (jusqu\'à 32 Go) ; M5 Pro 64 Go dès 3 099 € (Apple Store France, 28 novembre 2026 ; la base à 1 999 € a 24 Go)',
        'Les trois choix x86, à 25–45 W de moyenne supposée, coûtent env. 4,50–8 € d\'électricité par mois (0,25 €/kWh)',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Les mini PC consomment 15–45 W vs 200–350 W pour les GPU de bureau — économies significatives en 24/7 (plages typiques, estimations)',
          'L\'UM890 Pro exécute les modèles 7B sur le CPU ; la bande passante limite le 7B Q4 à environ 20 tok/s, le réel est inférieur',
          'AOOSTAR GEM12 Pro + eGPU OCuLink = accélération GPU sans PC de bureau',
          'Mac Mini : le M5 Pro 64 Go laisse une large place aux modèles 30B ; le M6 de base plafonne à 32 Go ; les deux sont disponibles depuis le 22 septembre 2026',
          'Le Beelink SER8 est l\'entrée de gamme moins chère, env. 420 €, avec 32 Go pour 7B et 13B',
        ],
      },
      rankedList: {
        title: 'Meilleurs mini PC pour serveur Ollama always-on — Classement',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le Minisforum UM890 Pro est notre choix pour un serveur Ollama always-on : CPU 8 cœurs, jusqu\'à 96 Go de DDR5 et une consommation estimée sous 50 W.',
          },
          {
            type: 'plain-terms',
            text: 'Un mini PC avec Ollama peut servir des réponses IA à tout le réseau domestique en continu, en consommant bien moins qu\'un PC de bureau doté d\'une grosse carte graphique. Plus de RAM = modèles plus grands. OCuLink = vraie GPU sans PC de bureau.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Minisforum UM890 Pro — Meilleur choix global',
            content: 'Le Minisforum UM890 Pro utilise l\'AMD Ryzen 9 8945HS (8 cœurs, jusqu\'à 5,2 GHz) et prend en charge jusqu\'à 96 Go de DDR5-5600 double canal — assez de mémoire pour charger Llama 3.3 70B en Q4 (43 Go), mais lentement : les 89,6 Go/s de bande passante le limitent à environ 2 tok/s. Pour un modèle 7B Q4, le même plafond est d\'environ 20 tok/s. Ce sont des limites théoriques, pas des mesures ; le réel est inférieur. L\'iGPU Radeon 780M ne figure pas sur la [liste officielle des GPU ROCm d\'Ollama](https://docs.ollama.com/gpu) (vérifié le 28 novembre 2026) ; Ollama dispose aussi d\'un backend Vulkan, mais nous n\'avons aucune vitesse vérifiée pour cette puce. Consommation estimée : ~15 W au repos, ~35–45 W en charge. Prix : ~470 € (32 Go/1 To) à 570 € (64 Go).',
            affiliateLinks: [
              { label: 'Minisforum UM890 Pro sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            rank: 2,
            title: 'AOOSTAR GEM12 Pro OCuLink — Meilleur pour eGPU',
            content: 'L\'AOOSTAR GEM12 Pro OCuLink ajoute un port OCuLink qui relie une GPU externe en PCIe 4.0 x4 (64 GT/s bruts), soit un quart des lignes d\'un emplacement PCIe 4.0 x16. Quand le modèle tient entièrement dans la VRAM, ce lien plus étroit pèse surtout sur le temps de chargement ; ce qui déborde en RAM souffre davantage. PromptQuorum n\'a pas testé cette combinaison et ne donne aucune vitesse. Sans eGPU, c\'est un mini PC sur CPU comme les autres. Le mini PC lui-même embarque l\'AMD Ryzen 7 Pro 8845HS avec 32–96 Go de DDR5. Le dock ou l\'adaptateur eGPU, l\'alimentation et la carte graphique sont en sus. Prix nu : ~360 € ; avec 32 Go/1 To : ~450 €.',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink sur Amazon.fr', url: 'https://www.amazon.fr/s?k=AOOSTAR+GEM12+Pro' },
            ],
          },
          {
            rank: 3,
            title: 'Beelink SER8 — Meilleur choix budget',
            content: 'Le Beelink SER8 utilise l\'AMD Ryzen 7 8745HS (8 cœurs, jusqu\'à 4,9 GHz), 32 Go de DDR5 et 1 To de NVMe pour ~420 €. La vitesse CPU sous Ollama est limitée par la bande passante mémoire ; PromptQuorum ne l\'a pas mesurée. Consommation au repos estimée : 10–15 W. RAM évolutive (non soudée sur la révision 8745HS actuelle). Une entrée moins chère dans Ollama en continu pour les modèles 7B et 13B.',
            affiliateLinks: [
              { label: 'Beelink SER8 sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Beelink+SER8' },
            ],
          },
          {
            rank: 4,
            title: 'Apple Mac Mini M6 / M5 Pro — Meilleur pour macOS',
            content: 'Apple a renouvelé la gamme Mac Mini le 25 août 2026, remplaçant la génération M4. Le Mac Mini M6 démarre à 1 049 € avec jusqu\'à 32 Go de mémoire unifiée et 170 Go/s de bande passante. Le Mac Mini M5 Pro démarre à 1 999 € avec 24 Go et se configure jusqu\'à 64 Go de mémoire unifiée, avec 307 Go/s de bande passante et Thunderbolt 5. Sur l\'Apple Store France (vérifié le 28 novembre 2026), la configuration 64 Go la moins chère coûte 3 099 € (CPU 15 cœurs, 512 Go), et la version 18 cœurs avec 1 To 3 649 €. Les deux sont disponibles depuis le 22 septembre 2026. Pour un serveur Ollama en continu, c\'est la mémoire qui compte : 32 Go (M6), partagés avec macOS, suffisent largement aux modèles 7B–13B mais sont justes pour un modèle 30B Q4 d\'environ 19 Go, tandis que 64 Go (M5 Pro) laissent une marge nette pour les modèles 30B. PromptQuorum n\'a pas testé ce matériel et ne donne aucune vitesse.',
            affiliateLinks: [
              { label: 'Apple Mac Mini M6 sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Mac+Mini+M6' },
              { label: 'Apple Mac Mini sur Apple.com (configs M6 et M5 Pro)', url: 'https://www.apple.com/fr/shop/buy-mac/mac-mini' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Un mini PC peut-il faire tourner des modèles 13B ou plus à vitesse utile ?',
            a: 'Avec assez de RAM, on peut les charger ; la limite est la vitesse. Sur un mini PC en DDR5-5600 double canal (89,6 Go/s), la bande passante limite un modèle 13B Q8 d\'environ 14 Go à quelque 6 tok/s, et le réel est inférieur. Une version Q4 plus petite va plus vite. Ce sont des limites théoriques, pas des mesures. Pour les modèles 30B, un Mac Mini M5 Pro 64 Go (dès 3 099 € sur l\'Apple Store France, 28 novembre 2026 ; la base à 1 999 € a 24 Go) offre plus de mémoire et de bande passante. Le M6 de base (jusqu\'à 32 Go) est juste.',
          },
          {
            q: 'Ollama fonctionne-t-il bien comme serveur réseau sur un mini PC ?',
            a: 'Oui. Définissez OLLAMA_HOST=0.0.0.0 et Ollama répond aux appareils du réseau local. Avec Open WebUI (Docker), vous avez une interface navigateur pour téléphones, tablettes et PC. La vitesse dépend du modèle et du nombre de requêtes simultanées ; PromptQuorum n\'a pas testé ces mini PC en charge. Ollama n\'intègre pas d\'authentification : ne l\'exposez pas à Internet.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Un mini PC peut-il faire tourner des modèles 13B ou plus à vitesse utile ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Avec assez de RAM, on peut les charger, mais la bande passante limite la vitesse : à 89,6 Go/s, un modèle 13B Q8 d\'environ 14 Go plafonne en théorie vers 6 tok/s. Pour les modèles 30B, un Mac Mini M5 Pro 64 Go (dès 3 099 €, Apple Store France, 28 novembre 2026 ; la base à 1 999 € a 24 Go) est une option ; le M6 à 32 Go est juste.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleurs mini PC pour serveur Ollama always-on 2026',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: 'Meilleur global — Ryzen 9 8945HS, jusqu\'à 96 Go DDR5, ~470 €' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'Meilleur eGPU — port OCuLink, Ryzen 7 Pro 8845HS, ~450 €' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: 'Meilleur budget — Ryzen 7 8745HS, 32 Go, ~420 €' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'Option macOS — M6 dès 1 049 € (jusqu\'à 32 Go) ; M5 Pro 64 Go dès 3 099 € (la base à 1 999 € a 24 Go), disponible depuis le 22 septembre 2026' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Meilleur mini PC pour un serveur Ollama en continu (2026)', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/fr/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'fr' },
  },

  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-ja.webp',
    type: 'comparison',
    title: '常時稼働Ollamaサーバー向けミニPC最おすすめ（2026年）',
    seoTitle: '常時稼働Ollamaサーバー用ミニPCおすすめ4選 2026',
    metaDescription: 'Ollamaを24時間365日稼働させるミニPC比較（推定10～45W）。Minisforum UM890 Pro・AOOSTAR GEM12・Beelink SER8のスペック・消費電力・購入リンクを紹介。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**常時稼働のOllamaサーバー向けに当サイトが選ぶのはMinisforum UM890 Pro（AMD Ryzen 9 8945HS、32〜96GB RAM、Radeon 780M内蔵GPU）です。公開仕様に基づく選定で、PromptQuorumはこれらのミニPCをテストしていません。負荷時の推定消費電力は25〜45Wです。デュアルチャンネルDDR5-5600（89.6GB/s）では、約4.5GBの7B Q4モデルはメモリ帯域により理論上約20トークン/秒が上限で、実際はそれより低くなります。**',
    quickAnswerTop: {
      question: 'Ollamaを常時稼働ホームサーバーとして動かすのに最適なミニPCは何ですか？',
      answer: '当サイトの第一候補はMinisforum UM890 Proです。8コアCPU、大きめのモデル向けに最大96GBのRAM、負荷時の推定消費電力は25〜45Wです。Radeon 780MはOllama公式のROCm対応GPU一覧にないため、Ollamaでの動作は未確認と考えてください。低価格の選択肢はBeelink SER8（約4万9000円）、外付けGPU向けはAOOSTAR GEM12 Pro OCuLinkです。',
      bullets: [
        'Minisforum UM890 Pro：総合1位 — Ryzen 9 8945HS、最大96GB DDR5、25〜45W',
        'AOOSTAR GEM12 Pro OCuLink：eGPU最良 — OCuLinkポートでRTX 3080/3090接続可',
        'Beelink SER8：バジェット最良 — Ryzen 7 8745HS、32GB、約4万9000円',
        'Apple Mac Mini M6/M5 Pro：macOSの選択肢 — M6は¥149,800から（最大32GB）、64GBのM5 Proは¥479,800から（Apple日本、2026年11月28日確認。¥299,800の基本構成は24GB）',
        'x86の3機種は平均25〜45Wと仮定すると、電気代は月約560〜1,000円です（31円/kWh）',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'ミニPCは15〜45W対デスクトップGPU200〜350W — 24時間稼働のコスト差は大きい（一般的な目安の推定値）',
          'UM890 Proは7BモデルをCPUで実行。メモリ帯域により7B Q4は理論上約20トークン/秒が上限で、実測値はより低くなります',
          'AOOSTAR GEM12 Pro + OCuLink eGPUでデスクトップなしにGPU推論を実現',
          'Mac Mini：64GBのM5 Proは30B級モデルに十分な余裕があり、基本のM6は最大32GB。両モデルとも2026年9月22日から発売中',
          'Beelink SER8は約4万9000円の低価格な入門機で、32GB RAMは7Bと13Bに対応します',
        ],
      },
      rankedList: {
        title: '常時稼働Ollamaサーバー向けミニPCランキング',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Minisforum UM890 Proは当サイトが常時稼働Ollamaサーバー向けに選ぶ機種です。8コアCPU、最大96GB DDR5 RAM、推定50W未満の消費電力を備えます。',
          },
          {
            type: 'plain-terms',
            text: 'Ollamaを入れたミニPCは、大型グラフィックカード搭載のデスクトップよりはるかに少ない電力で、家庭内ネットワークにAI応答を常時提供できます。RAMが多いほど大きなモデルを使えます。OCuLinkなら、デスクトップPCなしで本格的なGPUを追加できます。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Minisforum UM890 Pro — 総合1位',
            content: 'Minisforum UM890 ProはAMD Ryzen 9 8945HS（8コア、最大5.2GHz）を搭載し、最大96GBのDDR5-5600デュアルチャンネルRAMに対応します。Llama 3.3 70B Q4（43GB）を読み込める容量ですが低速で、89.6GB/sのメモリ帯域では約2トークン/秒が上限です。7B Q4では同じ上限が約20トークン/秒です。いずれも理論上の限界で実測ではなく、実際はこれより低くなります。内蔵GPUのRadeon 780Mは[Ollama公式のROCm対応GPU一覧](https://docs.ollama.com/gpu)にありません（2026年11月28日確認）。OllamaにはVulkanバックエンドもありますが、このチップの確認済み速度はありません。推定消費電力はアイドル約15W、負荷時約35〜45Wです。価格：約5万4000円（32GB/1TB）〜6万4000円（64GB）。',
            affiliateLinks: [
              { label: 'Minisforum UM890 Pro をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=Minisforum+UM890+Pro' },
            ],
          },
          {
            rank: 2,
            title: 'AOOSTAR GEM12 Pro OCuLink — eGPU最良',
            content: 'AOOSTAR GEM12 Pro OCuLinkは、PCIe 4.0 x4（生の転送速度64GT/s）で外部GPUを接続するOCuLinkポートを備えます。レーン数はPCIe 4.0 x16スロットの4分の1です。モデルがGPUのVRAMに完全に収まる場合、狭い接続の影響は主に読み込み時間です。システムRAMにはみ出す処理はより影響を受けます。PromptQuorumはこの組み合わせをテストしておらず、速度は示しません。eGPUがなければ、他と同じCPU型のミニPCです。本体はAMD Ryzen 7 Pro 8845HS、32〜96GB DDR5です。eGPU用ドックやアダプター、電源、グラフィックカードは別途費用がかかります。ベアボーン価格：約4万1000円、32GB/1TB構成：約5万2000円。',
            affiliateLinks: [
              { label: 'AOOSTAR GEM12 Pro OCuLink をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=AOOSTAR+GEM12+Pro' },
            ],
          },
          {
            rank: 3,
            title: 'Beelink SER8 — バジェット最良',
            content: 'Beelink SER8はAMD Ryzen 7 8745HS（8コア、最大4.9GHz）、32GB DDR5、1TB NVMe SSDで約4万9000円です。OllamaでのCPU速度はメモリ帯域に制限され、PromptQuorumは計測していません。推定アイドル消費電力は10〜15Wです。RAMは増設できます（現行の8745HSリビジョンはハンダ付けなし）。7Bと13Bモデル向けに、低価格で常時稼働Ollamaを始められます。',
            affiliateLinks: [
              { label: 'Beelink SER8 をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=Beelink+SER8' },
            ],
          },
          {
            rank: 4,
            title: 'Apple Mac Mini M6 / M5 Pro — macOS最良',
            content: 'Appleは2026年8月25日にMac Miniシリーズを刷新し、M4世代を置き換えました。Mac Mini M6は¥149,800からで、最大32GBの統合メモリ、170GB/sの帯域幅です。Mac Mini M5 Proは24GBで¥299,800からで、最大64GBの統合メモリに構成でき、307GB/sの帯域幅とThunderbolt 5に対応します。Apple日本のオンラインストア（2026年11月28日確認、税込）では、最も安い64GB構成が¥479,800（15コアCPU、512GB）、18コア・1TBが¥569,800です。両モデルとも2026年9月22日から発売中です。常時稼働のOllamaサーバーではメモリが重要です。macOSと共有する32GB（M6）は7B〜13Bモデルには十分ですが、約19GBの30B Q4モデルには窮屈です。64GB（M5 Pro）なら30B級モデルに明確な余裕があります。PromptQuorumはこのハードウェアをテストしておらず、速度は示しません。',
            affiliateLinks: [
              { label: 'Apple Mac Mini M6 をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=Mac+Mini+M6' },
              { label: 'Apple公式サイトでMac Mini（M6・M5 Pro）を確認', url: 'https://www.apple.com/jp/shop/buy-mac/mac-mini' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'ミニPCで13B以上のモデルを実用的な速度で動かせますか？',
            a: '十分なRAMがあれば読み込めますが、制約は速度です。デュアルチャンネルDDR5-5600（89.6GB/s）のミニPCでは、約14GBの13B Q8モデルはメモリ帯域により約6トークン/秒が上限で、実際はより低くなります。小さいQ4版のほうが速く動きます。これは理論上の限界で、実測ではありません。30B級モデルには、64GBのMac Mini M5 Pro（Apple日本で¥479,800から、2026年11月28日確認。¥299,800の基本構成は24GB）のほうがメモリと帯域に余裕があります。基本のM6（最大32GB）では窮屈です。',
          },
          {
            q: 'OllamaはミニPC上でネットワークサーバーとして機能しますか？',
            a: 'はい。OLLAMA_HOST=0.0.0.0を設定すると、LAN上のデバイスからのリクエストを受け付けます。Open WebUI（Dockerコンテナ）と組み合わせると、スマートフォン・タブレット・PCのブラウザから使えます。応答速度はモデルと同時リクエスト数によって変わり、PromptQuorumはこれらのミニPCで負荷テストをしていません。Ollamaには組み込み認証がないため、インターネットに公開しないでください。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ミニPCで13B以上のモデルを実用的な速度で動かせますか？',
          acceptedAnswer: { '@type': 'Answer', text: '十分なRAMがあれば読み込めますが、メモリ帯域が速度を制限します。89.6GB/sでは、約14GBの13B Q8モデルは理論上約6トークン/秒が上限です。30B級モデルには64GBのMac Mini M5 Pro（Apple日本で¥479,800から、2026年11月28日確認。¥299,800の基本構成は24GB）が選択肢で、32GBのM6では窮屈です。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '常時稼働Ollamaサーバー向けミニPCランキング2026',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: '総合1位 — Ryzen 9 8945HS、最大96GB DDR5、約5万4000円' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'eGPU最良 — OCuLinkポート、Ryzen 7 Pro 8845HS、約5万2000円' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: 'バジェット最良 — Ryzen 7 8745HS、32GB、約4万9000円' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'macOSの選択肢 — M6は¥149,800から（最大32GB）、64GBのM5 Proは¥479,800から（¥299,800の基本構成は24GB）、2026年9月22日から発売中' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '常時稼働Ollamaサーバー向けミニPC最おすすめ（2026年）', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/ja/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'ja' },
  },

  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-es.webp',
    type: 'comparison',
    title: 'Mejor Mini PC para Servidor Ollama Siempre Encendido 2026',
    seoTitle: 'Mejor Mini PC para Servidor Ollama Always-On 2026',
    metaDescription: 'Ejecuta Ollama 24/7 en un mini PC (10–45 W estimados). Mejores opciones: Minisforum UM890 Pro, AOOSTAR GEM12 y Beelink SER8. Especificaciones, consumo y compra.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**Nuestra elección para un servidor Ollama siempre encendido es el Minisforum UM890 Pro (AMD Ryzen 9 8945HS, 32–96 GB RAM, Radeon 780M iGPU), seleccionado según las especificaciones publicadas; PromptQuorum no ha probado estos mini PC. El consumo estimado bajo carga es de 25–45 W. Con DDR5-5600 de doble canal (89,6 GB/s), el ancho de banda limita un modelo 7B Q4 de unos 4,5 GB a cerca de 20 tok/s; en la práctica espera menos.**',
    quickAnswerTop: {
      question: '¿Cuál es el mejor mini PC para ejecutar Ollama como servidor casero siempre encendido?',
      answer: 'El Minisforum UM890 Pro es nuestra primera opción: CPU de 8 núcleos, hasta 96 GB de RAM para modelos más grandes y un consumo estimado de 25–45 W bajo carga. Considera la Radeon 780M no verificada para Ollama: no figura en la lista oficial de GPU ROCm de Ollama. Opción más barata: Beelink SER8 (~$450). Para una GPU externa: AOOSTAR GEM12 Pro OCuLink.',
      bullets: [
        'Minisforum UM890 Pro: mejor general — Ryzen 9 8945HS, hasta 96 GB DDR5, 25–45 W',
        'AOOSTAR GEM12 Pro OCuLink: mejor para eGPU — puerto OCuLink conecta RTX 3080/3090',
        'Beelink SER8: mejor presupuesto — Ryzen 7 8745HS, 32 GB, ~$450',
        'Apple Mac Mini M6/M5 Pro: opción macOS — M6 desde $899 (hasta 32 GB); M5 Pro de 64 GB desde $2.699 (Apple Store de EE. UU., 28 de noviembre de 2026; la base de $1.699 tiene 24 GB)',
        'Las tres opciones x86, con una media supuesta de 25–45 W, cuestan unos $3–5 al mes a $0,15/kWh',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Mini PCs consumen 15–45 W vs 200–350 W para GPUs de escritorio — ahorros 24/7 importan (rangos típicos, estimados)',
          'UM890 Pro ejecuta modelos 7B en la CPU; el ancho de banda limita 7B Q4 a unos 20 tok/s y la velocidad real es menor',
          'AOOSTAR GEM12 Pro + eGPU OCuLink desbloquea aceleración GPU sin PC de escritorio',
          'Mac Mini: el M5 Pro de 64 GB deja espacio de sobra para modelos 30B; el M6 base llega hasta 32 GB; ambos a la venta desde el 22 de septiembre de 2026',
          'Beelink SER8 es la entrada más barata, unos $450, con 32 GB de RAM para 7B y 13B',
        ],
      
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'El Minisforum UM890 Pro es nuestra elección para un servidor Ollama siempre encendido: CPU de 8 núcleos, hasta 96 GB de RAM DDR5 y un consumo estimado inferior a 50 W.',
          },
          {
            type: 'plain-terms',
            text: 'Un mini PC con Ollama puede dar respuestas de IA a toda tu red doméstica las 24 horas consumiendo mucho menos que un PC de sobremesa con una gráfica grande. Más RAM = modelos más grandes. OCuLink = añadir una GPU real sin montar un equipo completo.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Puede un mini PC ejecutar modelos 13B o más grandes a velocidad útil?',
            a: 'Con suficiente RAM puede cargarlos; el límite es la velocidad. En un mini PC con DDR5-5600 de doble canal (89,6 GB/s), el ancho de banda limita un modelo 13B Q8 de unos 14 GB a cerca de 6 tok/s, y la velocidad real es menor. Una versión Q4 más pequeña va más rápido. Son límites teóricos, no mediciones. Para modelos 30B, un Mac Mini M5 Pro de 64 GB (desde $2.699 en la Apple Store de EE. UU., 28 de noviembre de 2026; la base de $1.699 tiene 24 GB) ofrece más memoria y ancho de banda. El M6 base (hasta 32 GB) va justo.',
          },
          {
            q: '¿Funciona bien Ollama como servidor de red en un mini PC?',
            a: 'Sí. Configura OLLAMA_HOST=0.0.0.0 y Ollama atiende solicitudes de dispositivos de tu LAN. Combínalo con Open WebUI (contenedor Docker) para tener una interfaz web desde teléfonos, tablets y PCs. La velocidad depende del modelo y de las solicitudes simultáneas; PromptQuorum no ha probado estos mini PC bajo carga. Ollama no incluye autenticación, así que no lo expongas a internet.',
          },
          {
            q: '¿Valen la pena las configuraciones eGPU?',
            a: 'Merecen la pena si necesitas ejecutar modelos en una GPU de sobremesa. Un montaje OCuLink (por ejemplo, AOOSTAR GEM12 Pro con una RTX 3090 en un dock externo) usa PCIe 4.0 x4, una cuarta parte de las líneas de una ranura PCIe 4.0 x16. Si el modelo cabe en la VRAM, afecta sobre todo a la carga. La tarjeta, el dock y la fuente añaden coste y consumo, también en reposo. Las carcasas Thunderbolt 3 y 4 suelen transmitir menos datos PCIe que OCuLink x4. PromptQuorum no ha medido ninguna.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puede un mini PC ejecutar modelos 13B o más grandes a velocidad útil?',
          acceptedAnswer: { '@type': 'Answer', text: 'Con suficiente RAM puede cargarlos, pero el ancho de banda limita la velocidad: a 89,6 GB/s, un modelo 13B Q8 de unos 14 GB llega en teoría a unos 6 tok/s como máximo. Para modelos 30B, un Mac Mini M5 Pro de 64 GB (desde $2.699, Apple Store de EE. UU., 28 de noviembre de 2026; la base de $1.699 tiene 24 GB) es una opción; el M6 de 32 GB va justo.' },
        },
        {
          '@type': 'Question',
          name: '¿Funciona bien Ollama como servidor de red en un mini PC?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Configura OLLAMA_HOST=0.0.0.0 y Ollama atiende tu LAN. Combínalo con Open WebUI para una interfaz web. La velocidad depende del modelo y de las solicitudes simultáneas. No expongas Ollama a internet.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mejores Mini PCs para Servidor Ollama Always-On 2026',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: 'Mejor general — Ryzen 9 8945HS, hasta 96 GB DDR5, ~$500' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'Mejor para eGPU — puerto OCuLink, Ryzen 7 Pro 8845HS, ~$480' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: 'Mejor presupuesto — Ryzen 7 8745HS, 32 GB, ~$450' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'Opción macOS — M6 desde $899 (hasta 32 GB); M5 Pro de 64 GB desde $2.699 (la base de $1.699 tiene 24 GB), a la venta desde el 22 sept. 2026' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Mejor Mini PC para Servidor Ollama Always-On 2026', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/es/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'es' },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-pt.webp',
    type: 'comparison',
    title: 'Melhor Mini PC para Servidor Ollama Sempre Ligado 2026',
    seoTitle: 'Melhor Mini PC para Servidor Ollama Always-On 2026',
    metaDescription: 'Execute o Ollama 24/7 em um mini PC (10–45 W estimados). Melhores opções: Minisforum UM890 Pro, AOOSTAR GEM12, Beelink SER8. Especificações, consumo e links de compra.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**Nossa escolha para um servidor Ollama sempre ligado é o Minisforum UM890 Pro (AMD Ryzen 9 8945HS, 32–96 GB RAM, Radeon 780M iGPU), selecionado pelas especificações publicadas; a PromptQuorum não testou esses mini PCs. O consumo estimado sob carga é de 25–45 W. Com DDR5-5600 em canal duplo (89,6 GB/s), a largura de banda limita um modelo 7B Q4 de cerca de 4,5 GB a aproximadamente 20 tok/s; na prática, espere menos.**',
    quickAnswerTop: {
      question: 'Qual é o melhor mini PC para executar o Ollama como servidor doméstico sempre ligado?',
      answer: 'O Minisforum UM890 Pro é nossa principal escolha: CPU de 8 núcleos, até 96 GB de RAM para modelos maiores e consumo estimado de 25–45 W sob carga. Considere a Radeon 780M não verificada para o Ollama: ela não está na lista oficial de GPUs ROCm do Ollama. Opção mais barata: Beelink SER8 (~$450). Para GPU externa: AOOSTAR GEM12 Pro OCuLink.',
      bullets: [
        'Minisforum UM890 Pro: melhor geral — Ryzen 9 8945HS, até 96 GB DDR5, 25–45 W',
        'AOOSTAR GEM12 Pro OCuLink: melhor para eGPU — porta OCuLink conecta RTX 3080/3090',
        'Beelink SER8: melhor orçamento — Ryzen 7 8745HS, 32 GB, ~$450',
        'Apple Mac Mini M6/M5 Pro: opção macOS — M6 a partir de $899 (até 32 GB); M5 Pro de 64 GB a partir de $2.699 (Apple Store dos EUA, 28 de novembro de 2026; a base de $1.699 tem 24 GB)',
        'As três opções x86, com média suposta de 25–45 W, custam cerca de $3–5 por mês a $0,15/kWh',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Mini PCs consomem 15–45 W contra 200–350 W das GPUs de mesa — a economia 24/7 é relevante (faixas típicas, estimadas)',
          'UM890 Pro executa modelos 7B na CPU; a largura de banda limita o 7B Q4 a cerca de 20 tok/s e a velocidade real é menor',
          'AOOSTAR GEM12 Pro + eGPU OCuLink desbloqueia aceleração de GPU sem PC de mesa',
          'Mac Mini: o M5 Pro de 64 GB deixa bastante espaço para modelos 30B; o M6 básico chega a 32 GB; ambos disponíveis desde 22 de setembro de 2026',
          'Beelink SER8 é a entrada mais barata, cerca de $450, com 32 GB de RAM para 7B e 13B',
        ],
      
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Minisforum UM890 Pro é nossa escolha para um servidor Ollama sempre ligado: CPU de 8 núcleos, até 96 GB de RAM DDR5 e consumo estimado abaixo de 50 W.',
          },
          {
            type: 'plain-terms',
            text: 'Um mini PC com Ollama pode responder com IA para toda a sua rede doméstica 24 horas por dia consumindo muito menos que um desktop com placa de vídeo grande. Mais RAM = modelos maiores. OCuLink = adicionar uma GPU real sem montar um desktop completo.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Um mini PC consegue executar modelos de 13B ou maiores em velocidade útil?',
            a: 'Com RAM suficiente é possível carregá-los; o limite é a velocidade. Em um mini PC com DDR5-5600 em canal duplo (89,6 GB/s), a largura de banda limita um modelo 13B Q8 de cerca de 14 GB a aproximadamente 6 tok/s, e a velocidade real é menor. Uma versão Q4 menor é mais rápida. São limites teóricos, não medições. Para modelos 30B, um Mac Mini M5 Pro de 64 GB (a partir de $2.699 na Apple Store dos EUA, 28 de novembro de 2026; a base de $1.699 tem 24 GB) oferece mais memória e largura de banda. O M6 básico (até 32 GB) fica apertado.',
          },
          {
            q: 'O Ollama funciona bem como servidor de rede em um mini PC?',
            a: 'Sim. Configure OLLAMA_HOST=0.0.0.0 e o Ollama atende requisições de dispositivos na sua LAN. Combine com o Open WebUI (contêiner Docker) para uma interface no navegador em telefones, tablets e PCs. A velocidade depende do modelo e de quantas requisições chegam ao mesmo tempo; a PromptQuorum não fez teste de carga nesses mini PCs. O Ollama não tem autenticação integrada, então não o exponha à internet.',
          },
          {
            q: 'Vale a pena configurações com eGPU?',
            a: 'Vale considerar se você precisa rodar modelos em uma GPU de desktop. Uma montagem OCuLink (por exemplo, AOOSTAR GEM12 Pro com uma RTX 3090 em um dock externo) usa PCIe 4.0 x4, um quarto das pistas de um slot PCIe 4.0 x16. Se o modelo cabe na VRAM, isso afeta principalmente o carregamento. A placa, o dock e a fonte aumentam o custo e o consumo, inclusive em repouso. Gabinetes Thunderbolt 3 e 4 normalmente transmitem menos dados PCIe que o OCuLink x4. A PromptQuorum não mediu nenhum dos dois.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Um mini PC consegue executar modelos de 13B ou maiores em velocidade útil?',
          acceptedAnswer: { '@type': 'Answer', text: 'Com RAM suficiente é possível carregá-los, mas a largura de banda limita a velocidade: a 89,6 GB/s, um modelo 13B Q8 de cerca de 14 GB chega, em teoria, a no máximo uns 6 tok/s. Para modelos 30B, um Mac Mini M5 Pro de 64 GB (a partir de $2.699, Apple Store dos EUA, 28 de novembro de 2026; a base de $1.699 tem 24 GB) é uma opção; o M6 de 32 GB fica apertado.' },
        },
        {
          '@type': 'Question',
          name: 'O Ollama funciona bem como servidor de rede em um mini PC?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sim. Configure OLLAMA_HOST=0.0.0.0 e o Ollama atende sua LAN. Combine com o Open WebUI para uma interface no navegador. A velocidade depende do modelo e das requisições simultâneas. Não exponha o Ollama à internet.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Melhores Mini PCs para Servidor Ollama Always-On 2026',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: 'Melhor geral — Ryzen 9 8945HS, até 96 GB DDR5, ~$500' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'Melhor para eGPU — porta OCuLink, Ryzen 7 Pro 8845HS, ~$480' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: 'Melhor orçamento — Ryzen 7 8745HS, 32 GB, ~$450' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'Opção macOS — M6 a partir de $899 (até 32 GB); M5 Pro de 64 GB a partir de $2.699 (a base de $1.699 tem 24 GB), disponível desde 22 set. 2026' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Melhor Mini PC para Servidor Ollama Sempre Ligado 2026', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/pt/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'pt-BR' },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-zh.webp',
    type: 'comparison',
    title: '2026年Ollama常驻服务器最佳迷你电脑推荐',
    seoTitle: '2026年Ollama常驻服务器迷你PC推荐（4款评测）',
    metaDescription: '用估计功耗10–45W的迷你PC全天候运行Ollama：铭凡UM890 Pro（Radeon 780M核显）、AOOSTAR GEM12（双DDR5）、零刻SER8（Ryzen 7 8745HS）。规格对比、功耗信息与购买链接，轻松搭建24小时本地AI服务器。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**我们为常驻Ollama服务器选择铭凡UM890 Pro（AMD Ryzen 9 8945HS、32–96GB内存、Radeon 780M核显）。该选择基于公开规格，PromptQuorum未测试过这些迷你PC。估计负载功耗为25–45W。在双通道DDR5-5600（89.6GB/s）下，内存带宽使约4.5GB的7B Q4模型理论上限约为20 tok/s，实际会更低。**',
    quickAnswerTop: {
      question: '跑Ollama常驻家庭服务器用什么迷你PC最好？',
      answer: '铭凡UM890 Pro是我们的首选：8核CPU，最高96GB内存可装更大的模型，估计负载功耗25–45W。请将Radeon 780M对Ollama的支持视为未经验证：它不在Ollama官方ROCm支持GPU列表中。更便宜的选择：零刻SER8（约3000元）。外接显卡可选AOOSTAR GEM12 Pro OCuLink。',
      bullets: [
        '铭凡UM890 Pro：综合最佳 — Ryzen 9 8945HS、最高96GB DDR5、25–45W',
        'AOOSTAR GEM12 Pro OCuLink：最佳eGPU方案 — OCuLink接口连接RTX 3080/3090',
        '零刻SER8：最佳预算 — Ryzen 7 8745HS、32GB、约3000元',
        'Apple Mac Mini M6/M5 Pro：macOS选择 — M6起价$899（最高32GB）；64GB的M5 Pro起价$2,699（Apple美国在线商店，2026年11月28日；$1,699基础款为24GB）',
        '三款x86机型按平均25–45W假设，在$0.15/kWh下每月电费约$3–5',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '迷你PC功耗15–45W对比桌面GPU 200–350W——24小时节能优势明显（典型范围，估算值）',
          'UM890 Pro用CPU运行7B模型；内存带宽使7B Q4理论上限约20 tok/s，实际更低',
          'AOOSTAR GEM12 Pro + OCuLink eGPU实现不买桌面PC也有GPU加速',
          'Mac Mini：64GB的M5 Pro为30B级模型留有充足空间；基础款M6最高32GB；两款均自2026年9月22日起上市',
          '零刻SER8是约3000元的低价入门选择——32GB内存支持7B和13B',
        ],
      },
      rankedList: {
        title: 'Ollama常驻服务器迷你PC排名',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '铭凡UM890 Pro是我们为常驻Ollama服务器选择的机型：8核CPU、最高96GB DDR5内存，估计功耗低于50W。',
          },
          {
            type: 'plain-terms',
            text: '装有Ollama的迷你PC可以全天候向家庭局域网提供AI服务，耗电远低于配备大型显卡的台式机。内存越大，能运行的模型越大。OCuLink让你无需台式机即可接入独立显卡。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: '铭凡UM890 Pro — 综合最佳',
            content: '铭凡UM890 Pro搭载AMD Ryzen 9 8945HS（8核、最高5.2GHz），支持最高96GB DDR5-5600双通道内存，容量足以加载Q4量化的Llama 3.3 70B（43GB），但速度很慢：89.6GB/s的内存带宽把上限限制在约2 tok/s。对7B Q4模型，同样的上限约为20 tok/s。这些是理论上限而非实测值，实际更低。Radeon 780M核显不在[Ollama官方ROCm支持GPU列表](https://docs.ollama.com/gpu)中（2026年11月28日核对）；Ollama另有Vulkan后端，但我们没有该芯片经过核实的速度数据。估计待机功耗约15W，负载约35–45W。价格：约3500元（32GB/1TB）至4200元（64GB）。',
            affiliateLinks: [
              { label: '在京东查看铭凡UM890 Pro', url: 'https://search.jd.com/Search?keyword=Minisforum+UM890+Pro' },
              { label: '在铭凡官网查看UM890 Pro', url: 'https://minisforum.com.cn' },
            ],
          },
          {
            rank: 2,
            title: 'AOOSTAR GEM12 Pro OCuLink — 最佳eGPU选择',
            content: 'AOOSTAR GEM12 Pro OCuLink配备OCuLink接口，通过PCIe 4.0 x4（原始速率64GT/s）连接外部显卡，通道数是PCIe 4.0 x16插槽的四分之一。当模型完全装入显存时，较窄的链路主要影响加载时间；溢出到系统内存的任务受影响更大。PromptQuorum未测试过该组合，不提供速度数据。不接eGPU时，它与其他机型一样是靠CPU运行的迷你PC。机身本身搭载AMD Ryzen 7 Pro 8845HS和32–96GB DDR5。eGPU扩展坞或转接器、电源和显卡需另外购买。裸机价格：约2600元；含32GB/1TB：约3300元。',
            affiliateLinks: [
              { label: '在京东查看AOOSTAR GEM12 Pro OCuLink', url: 'https://search.jd.com/Search?keyword=AOOSTAR+GEM12+Pro' },
            ],
          },
          {
            rank: 3,
            title: '零刻SER8 — 最佳预算选择',
            content: '零刻SER8搭载AMD Ryzen 7 8745HS（8核、最高4.9GHz）、32GB DDR5和1TB NVMe SSD，售价约3000元。Ollama的CPU速度受内存带宽限制，PromptQuorum未实测。估计待机功耗10–15W。内存可升级（现款8745HS版本非焊接）。它是运行7B和13B模型、以较低成本入门常驻Ollama的选择。',
            affiliateLinks: [
              { label: '在京东查看零刻SER8', url: 'https://search.jd.com/Search?keyword=Beelink+SER8' },
            ],
          },
          {
            rank: 4,
            title: 'Apple Mac Mini M6 / M5 Pro — 最佳macOS选择',
            content: 'Apple于2026年8月25日更新了Mac Mini系列，取代了M4世代。Mac Mini M6起售价$899，最高32GB统一内存，带宽170GB/s。Mac Mini M5 Pro起售价$1,699（24GB），最高可配置64GB统一内存，带宽307GB/s，支持Thunderbolt 5。在Apple美国在线商店（2026年11月28日核对，不含税），最便宜的64GB配置为$2,699（15核CPU、512GB），18核加1TB版本为$3,199。两款均自2026年9月22日起上市。对常驻Ollama服务器来说，内存是关键：与macOS共享的32GB（M6）运行7B–13B模型很充裕，但装下约19GB的30B Q4模型会很紧张；64GB（M5 Pro）则为30B级模型留有明显余量。PromptQuorum未测试过这款硬件，不提供速度数据。',
            affiliateLinks: [
              { label: '在京东查看Apple Mac Mini M6', url: 'https://search.jd.com/Search?keyword=Mac+Mini+M6' },
              { label: '在Apple官网查看Mac Mini（M6及M5 Pro）', url: 'https://www.apple.com.cn/shop/buy-mac/mac-mini' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '迷你PC能以实用速度运行13B或更大的模型吗？',
            a: '内存足够就能加载，限制在于速度。在双通道DDR5-5600（89.6GB/s）的迷你PC上，内存带宽使约14GB的13B Q8模型上限约为6 tok/s，实际更低。较小的Q4版本更快。这是理论上限，并非实测。对30B级模型，64GB的Mac Mini M5 Pro（Apple美国在线商店$2,699起，2026年11月28日；$1,699基础款为24GB）提供更多内存和带宽。基础款M6（最高32GB）会很紧张。',
          },
          {
            q: 'Ollama在迷你PC上作为网络服务器运行效果如何？',
            a: '可以。设置OLLAMA_HOST=0.0.0.0后，Ollama即可响应局域网内设备的请求。搭配Open WebUI（Docker容器），可在手机、平板和电脑的浏览器中使用。响应速度取决于模型和同时到达的请求数；PromptQuorum未对这些迷你PC做过负载测试。Ollama没有内置身份验证，请勿将其暴露到互联网。',
          },
          {
            q: 'eGPU方案值得投资吗？',
            a: '如果需要让模型在台式机级显卡上运行，可以考虑。OCuLink方案（例如AOOSTAR GEM12 Pro搭配外置扩展坞中的RTX 3090）使用PCIe 4.0 x4，通道数是PCIe 4.0 x16插槽的四分之一。当模型装得进显存时，主要影响加载速度。显卡、扩展坞和电源会增加成本和功耗，待机时也一样。Thunderbolt 3和4显卡盒通常传输的PCIe数据少于OCuLink x4。PromptQuorum未对两者做过实测。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '迷你PC能以实用速度运行13B或更大的模型吗？',
          acceptedAnswer: { '@type': 'Answer', text: '内存足够就能加载，但内存带宽限制速度：在89.6GB/s下，约14GB的13B Q8模型理论上限约6 tok/s。对30B级模型，64GB的Mac Mini M5 Pro（Apple美国在线商店$2,699起，2026年11月28日；$1,699基础款为24GB）是一个选择；32GB的M6会很紧张。' },
        },
        {
          '@type': 'Question',
          name: 'eGPU方案值得投资吗？',
          acceptedAnswer: { '@type': 'Answer', text: 'OCuLink eGPU使用PCIe 4.0 x4，通道数是PCIe 4.0 x16插槽的四分之一；模型装得进显存时主要影响加载时间。显卡、扩展坞和电源会增加成本和功耗。PromptQuorum未做实测。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年Ollama常驻服务器最佳迷你PC排名',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '铭凡UM890 Pro', description: '综合最佳 — Ryzen 9 8945HS、最高96GB DDR5、约3500元' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: '最佳eGPU — OCuLink接口、Ryzen 7 Pro 8845HS、约3300元' },
        { '@type': 'ListItem', position: 3, name: '零刻SER8', description: '最佳预算 — Ryzen 7 8745HS、32GB、约3000元' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'macOS选择 — M6起价$899（最高32GB）；64GB的M5 Pro起价$2,699（$1,699基础款为24GB），2026年9月22日起上市' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '2026年Ollama常驻服务器最佳迷你电脑推荐', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/zh/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'zh' },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-ar.webp',
    type: 'comparison',
    title: 'أفضل جهاز كمبيوتر مصغر لخادم ⁨Ollama⁩ الدائم التشغيل ⁨2026⁩',
    seoTitle: 'أفضل جهاز مصغر لخادم ⁨Ollama⁩ دائم ⁨2026⁩ | ⁨PromptQuorum⁩',
    metaDescription: 'شغّل ⁨Ollama 24/7⁩ بجهاز مصغر يستهلك تقديريًا ⁨10⁩–⁨45 W⁩. مقارنة المواصفات والاستهلاك بين ⁨Minisforum UM890 Pro⁩ و⁨AOOSTAR GEM12⁩ و⁨Beelink SER8⁩ و⁨Mac Mini⁩.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**اختيارنا لخادم Ollama دائم التشغيل هو Minisforum UM890 Pro ‏(AMD Ryzen 9 8945HS، 32–96 GB RAM، Radeon 780M iGPU)، وقد اخترناه استنادًا إلى المواصفات المنشورة؛ ولم تختبر PromptQuorum هذه الأجهزة. استهلاكه التقديري تحت الحمل 25–45 W. ومع ذاكرة DDR5-5600 ثنائية القناة (89.6 GB/s) يحد عرض النطاق نموذج 7B Q4 بحجم نحو 4.5 GB عند قرابة 20 رمز/ثانية نظريًا، والمتوقع عمليًا أقل.**',
    quickAnswerTop: {
      question: 'ما هو أفضل جهاز كمبيوتر مصغر لتشغيل Ollama كخادم منزلي دائم التشغيل؟',
      answer: 'Minisforum UM890 Pro هو خيارنا الأول: CPU بثماني أنوية، وحتى 96 GB RAM لنماذج أكبر، واستهلاك تقديري 25–45 W تحت الحمل. اعتبر دعم Radeon 780M في Ollama غير مؤكد: فهي ليست في قائمة Ollama الرسمية لبطاقات ROCm. خيار أرخص: Beelink SER8 ‏(~$450). ولبطاقة GPU خارجية: AOOSTAR GEM12 Pro OCuLink.',
      bullets: [
        'Minisforum UM890 Pro: الأفضل عموماً — Ryzen 9 8945HS، حتى 96 GB DDR5، 25–45 W',
        'AOOSTAR GEM12 Pro OCuLink: الأفضل للـeGPU — منفذ OCuLink يتصل بـRTX 3080/3090',
        'Beelink SER8: الأفضل للميزانية — Ryzen 7 8745HS، 32 GB، ~$450',
        'Apple Mac Mini M6/M5 Pro: خيار macOS — ‏M6 من ‎$899 (حتى 32 GB)؛ وM5 Pro بسعة 64 GB من $2,699 (متجر Apple الأمريكي، 28 نوفمبر 2026؛ والأساسي بسعر $1,699 بذاكرة 24 GB)',
        'الخيارات الثلاثة بمعمارية x86، بمتوسط مفترض 25–45 W، تكلف نحو $3–5 شهريًا بسعر $0.15/kWh',
      ],
      updatedDate: '2026-11',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'الأجهزة المصغرة تستهلك 15–45 W مقابل 200–350 W لبطاقات GPU المكتبية — وفورات 24/7 مهمة (نطاقات معتادة تقديرية)',
          'UM890 Pro يشغّل نماذج 7B على CPU؛ ويحد عرض النطاق نموذج 7B Q4 عند نحو 20 رمز/ثانية، والسرعة الفعلية أقل',
          'AOOSTAR GEM12 Pro + eGPU OCuLink يتيح تسريع GPU دون الحاجة لحاسوب مكتبي',
          'Mac Mini: طراز M5 Pro بسعة 64 GB يوفّر مساحة مريحة لنماذج 30B؛ والأساسي M6 يصل إلى 32 GB؛ وكلاهما متوفر منذ 22 سبتمبر 2026',
          'Beelink SER8 هو نقطة البداية الأرخص بنحو $450 — مع 32 GB RAM لنماذج 7B و13B',
        ],
      
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Minisforum UM890 Pro هو اختيارنا لخادم Ollama يعمل على مدار الساعة: CPU بثماني أنوية، وذاكرة DDR5 تصل إلى 96 GB، واستهلاك تقديري أقل من 50 واط.',
          },
          {
            type: 'plain-terms',
            text: 'يمكن لكمبيوتر مصغّر يشغّل Ollama أن يقدّم إجابات الذكاء الاصطناعي لشبكة منزلك على مدار الساعة باستهلاك أقل بكثير من حاسوب مكتبي ببطاقة رسوميات كبيرة. ذاكرة أكبر تعني نماذج أكبر، ومنفذ OCuLink يتيح إضافة بطاقة رسوميات حقيقية دون حاسوب مكتبي كامل.',
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل يمكن لجهاز مصغر تشغيل نماذج 13B أو أكبر بسرعة مفيدة؟',
            a: 'مع ذاكرة كافية يمكن تحميلها، والعائق هو السرعة. على جهاز مصغر بذاكرة DDR5-5600 ثنائية القناة (89.6 GB/s) يحد عرض النطاق نموذج 13B Q8 بحجم نحو 14 GB عند قرابة 6 رمز/ثانية، والسرعة الفعلية أقل. وتعمل نسخة Q4 الأصغر أسرع. هذه حدود نظرية لا قياسات. ولنماذج 30B يوفّر Mac Mini M5 Pro بسعة 64 GB ‏(من $2,699 في متجر Apple الأمريكي، 28 نوفمبر 2026؛ والأساسي بسعر $1,699 بذاكرة 24 GB) ذاكرة وعرض نطاق أكبر. أما M6 الأساسي (حتى 32 GB) فضيق.',
          },
          {
            q: 'هل يعمل Ollama جيداً كخادم شبكة على جهاز مصغر؟',
            a: 'نعم. اضبط OLLAMA_HOST=0.0.0.0 ليستقبل Ollama الطلبات من أجهزة شبكتك المحلية. ادمجه مع Open WebUI (حاوية Docker) للحصول على واجهة في المتصفح للهواتف والأجهزة اللوحية والحواسيب. تعتمد سرعة الاستجابة على النموذج وعدد الطلبات المتزامنة، ولم تُجرِ PromptQuorum اختبار حمل لهذه الأجهزة. لا يملك Ollama مصادقة مدمجة، فلا تعرضه على الإنترنت.',
          },
          {
            q: 'هل تستحق إعدادات eGPU التكلفة؟',
            a: 'تستحق النظر إذا احتجت إلى تشغيل النماذج على GPU من فئة الأجهزة المكتبية. يستخدم إعداد OCuLink (مثل AOOSTAR GEM12 Pro مع RTX 3090 في قاعدة خارجية) PCIe 4.0 x4، أي ربع ممرات فتحة PCIe 4.0 x16. وإذا اتسع النموذج في VRAM فالتأثير الأساسي على التحميل. تضيف البطاقة والقاعدة ومزوّد الطاقة تكلفة واستهلاكًا، حتى في الخمول. وعادةً تمرّر صناديق Thunderbolt 3 و4 بيانات PCIe أقل من OCuLink x4. لم تقِس PromptQuorum أيًا منهما.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'هل يمكن لجهاز مصغر تشغيل نماذج 13B أو أكبر بسرعة مفيدة؟',
          acceptedAnswer: { '@type': 'Answer', text: 'مع ذاكرة كافية يمكن تحميلها، لكن عرض النطاق يحد السرعة: عند 89.6 GB/s لا يتجاوز نموذج 13B Q8 بحجم نحو 14 GB قرابة 6 رمز/ثانية نظريًا. ولنماذج 30B يُعد Mac Mini M5 Pro بسعة 64 GB ‏(من $2,699، متجر Apple الأمريكي، 28 نوفمبر 2026؛ والأساسي بسعر $1,699 بذاكرة 24 GB) خيارًا، أما M6 بسعة 32 GB فضيق.' },
        },
        {
          '@type': 'Question',
          name: 'هل يعمل Ollama جيداً كخادم شبكة على جهاز مصغر؟',
          acceptedAnswer: { '@type': 'Answer', text: 'نعم. اضبط OLLAMA_HOST=0.0.0.0 ليخدم Ollama شبكتك المحلية. ادمجه مع Open WebUI لواجهة في المتصفح. تعتمد السرعة على النموذج وعدد الطلبات المتزامنة. لا تعرض Ollama على الإنترنت.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'أفضل الأجهزة المصغرة لخادم Ollama الدائم التشغيل 2026',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: 'الأفضل عموماً — Ryzen 9 8945HS، حتى 96 GB DDR5، ~$500' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'الأفضل للـeGPU — منفذ OCuLink، Ryzen 7 Pro 8845HS، ~$480' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: 'الأفضل للميزانية — Ryzen 7 8745HS، 32 GB، ~$450' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'خيار macOS — ‏M6 من ‎$899 (حتى 32 GB)؛ وM5 Pro بسعة 64 GB من $2,699 (والأساسي بسعر $1,699 بذاكرة 24 GB)، متوفر منذ 22 سبتمبر 2026' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'أفضل جهاز كمبيوتر مصغر لخادم Ollama الدائم التشغيل 2026', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/ar/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'ar' },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-02-26',
    theme: 'Hardware & Performance',
    heroImage: '/images/best-mini-pc-for-ollama-server-always-on-overview-hero-ko.webp',
    type: 'comparison',
    title: '2026년 Ollama 상시 서버용 최고의 미니 PC 추천',
    seoTitle: '2026년 Ollama 상시 서버 미니 PC 추천 (4종 비교)',
    metaDescription: '추정 10–45W의 전력으로 Ollama를 24시간 운영하는 미니 PC 추천: Minisforum UM890 Pro (Radeon 780M 내장 그래픽), AOOSTAR GEM12, Beelink SER8. 사양 비교, 전력 소비 정보 및 구매 링크.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    parentArticle: '/local-llms/local-llm-hardware-guide',
    leadAnswerBlock: '**상시 Ollama 서버용으로 당사가 고른 제품은 Minisforum UM890 Pro(AMD Ryzen 9 8945HS, 32–96 GB RAM, Radeon 780M iGPU)입니다. 공개된 사양을 근거로 선정했으며 PromptQuorum은 이 미니 PC들을 테스트하지 않았습니다. 부하 시 추정 소비 전력은 25–45 W입니다. 듀얼 채널 DDR5-5600(89.6 GB/s)에서는 메모리 대역폭 때문에 약 4.5 GB의 7B Q4 모델이 이론상 약 20 tok/s가 한계이며, 실제로는 더 낮을 것입니다.**',
    quickAnswerTop: {
      ko: {
        question: 'Ollama 상시 홈 서버 운영에 가장 좋은 미니 PC는 무엇입니까?',
        answer: 'Minisforum UM890 Pro가 당사의 1순위입니다. 8코어 CPU, 더 큰 모델을 위한 최대 96 GB RAM, 부하 시 추정 25–45 W입니다. Radeon 780M은 Ollama의 공식 ROCm GPU 목록에 없으므로 Ollama에서의 동작은 검증되지 않은 것으로 보십시오. 더 저렴한 선택은 Beelink SER8(~$450), 외장 GPU용은 AOOSTAR GEM12 Pro OCuLink입니다.',
        bullets: [
          'Minisforum UM890 Pro: 종합 최고 — Ryzen 9 8945HS, 최대 96 GB DDR5, 25–45 W',
          'AOOSTAR GEM12 Pro OCuLink: eGPU 최고 — OCuLink 포트로 RTX 3080/3090 연결 가능',
          'Beelink SER8: 가성비 최고 — Ryzen 7 8745HS, 32 GB, ~$450',
          'Apple Mac Mini M6/M5 Pro: macOS 선택지 — M6 $899부터(최대 32 GB), 64 GB M5 Pro $2,699부터(Apple 미국 스토어, 2026년 11월 28일. $1,699 기본형은 24 GB)',
          'x86 추천 3종은 평균 25–45 W를 가정하면 $0.15/kWh 기준 월 약 $3–5입니다',
        ],
        updatedDate: '2026-11',
      },
    },
    targetKeywords: [
      'Ollama 미니 PC 추천 2026',
      'Ollama 홈 서버 미니 PC',
      '저전력 AI 서버 미니 PC',
      'Ollama 상시 운영 PC',
      'Minisforum UM890 Pro Ollama',
      'eGPU OCuLink 미니 PC',
      'Beelink SER8 Ollama',
      'Mac Mini M5 Pro 로컬 LLM',
    ],
    readTime: '6분 분량',
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '미니 PC 소비 전력은 15–45 W로 데스크톱 GPU의 200–350 W 대비 압도적으로 낮아 24시간 운영에 유리합니다(일반적인 범위의 추정치).',
          'UM890 Pro는 7B 모델을 CPU로 실행합니다. 메모리 대역폭상 7B Q4는 약 20 tok/s가 한계이며 실제 속도는 더 낮습니다',
          'AOOSTAR GEM12 Pro + OCuLink eGPU 조합은 데스크톱 PC 없이도 GPU 가속을 실현합니다.',
          'Mac Mini: 64 GB M5 Pro는 30B급 모델에 여유가 있고, 기본형 M6은 최대 32 GB입니다. 두 모델 모두 2026년 9월 22일부터 판매 중입니다',
          'Beelink SER8은 약 $450의 저렴한 입문 선택지이며 32 GB RAM으로 7B 및 13B 모델을 다룹니다',
        ],
      },
      rankedList: {
        title: 'Ollama 상시 서버용 미니 PC 순위',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Minisforum UM890 Pro는 8코어 CPU, 최대 96 GB DDR5 메모리, 추정 50 W 미만의 소비 전력을 갖춘 당사의 Ollama 상시 서버용 선택입니다.',
          },
          {
            type: 'plain-terms',
            text: 'Ollama가 설치된 미니 PC는 대형 그래픽 카드를 단 데스크톱보다 훨씬 적은 전력으로 가정 네트워크에 AI 서비스를 상시 제공할 수 있습니다. 메모리가 많을수록 더 큰 모델을 실행할 수 있으며, OCuLink를 쓰면 데스크톱 없이 외장 GPU를 연결할 수 있습니다.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Minisforum UM890 Pro — 종합 최고',
            content: 'Minisforum UM890 Pro는 AMD Ryzen 9 8945HS(8코어, 최대 5.2 GHz)를 탑재하고 최대 96 GB DDR5-5600 듀얼 채널 메모리를 지원합니다. Llama 3.3 70B Q4(43 GB)를 적재할 용량은 되지만 느립니다. 89.6 GB/s의 메모리 대역폭 때문에 약 2 tok/s가 한계입니다. 7B Q4 모델에서는 같은 한계가 약 20 tok/s입니다. 이는 실측이 아닌 이론적 한계이며 실제로는 더 낮습니다. Radeon 780M 내장 GPU는 [Ollama 공식 ROCm GPU 목록](https://docs.ollama.com/gpu)에 없습니다(2026년 11월 28일 확인). Ollama에는 Vulkan 백엔드도 있지만 이 칩의 검증된 속도는 없습니다. 추정 소비 전력은 대기 약 15 W, 부하 약 35–45 W입니다. 가격: 약 $500(32 GB/1 TB) ~ $620(64 GB).',
            affiliateLinks: [
              { label: 'Amazon에서 Minisforum UM890 Pro 보기', url: 'https://www.amazon.com/s?k=Minisforum+UM890+Pro' },
              { label: 'Minisforum 공식 사이트에서 UM890 Pro 보기', url: 'https://www.minisforum.com' },
            ],
          },
          {
            rank: 2,
            title: 'AOOSTAR GEM12 Pro OCuLink — eGPU 최고 선택',
            content: 'AOOSTAR GEM12 Pro OCuLink는 PCIe 4.0 x4(원시 전송률 64 GT/s)로 외장 GPU를 연결하는 OCuLink 포트를 갖추고 있으며, 이는 PCIe 4.0 x16 슬롯 레인의 4분의 1입니다. 모델이 GPU의 VRAM에 모두 들어가면 좁은 연결은 주로 로딩 시간에 영향을 줍니다. 시스템 RAM으로 넘치는 작업은 더 크게 영향을 받습니다. PromptQuorum은 이 조합을 테스트하지 않았으며 속도 수치를 제시하지 않습니다. eGPU가 없으면 다른 제품과 같은 CPU 기반 미니 PC입니다. 본체는 AMD Ryzen 7 Pro 8845HS와 32–96 GB DDR5를 사용합니다. eGPU 독이나 어댑터, 전원 공급 장치, 그래픽 카드는 별도 비용입니다. 베어본 가격: 약 $380, 32 GB/1 TB 구성: 약 $480.',
            affiliateLinks: [
              { label: 'Amazon에서 AOOSTAR GEM12 Pro OCuLink 보기', url: 'https://www.amazon.com/s?k=AOOSTAR+GEM12+Pro+OCuLink' },
            ],
          },
          {
            rank: 3,
            title: 'Beelink SER8 — 가성비 최고 선택',
            content: 'Beelink SER8은 AMD Ryzen 7 8745HS(8코어, 최대 4.9 GHz), 32 GB DDR5, 1 TB NVMe SSD를 약 $450에 제공합니다. Ollama의 CPU 속도는 메모리 대역폭의 제한을 받으며 PromptQuorum은 측정하지 않았습니다. 추정 대기 전력은 10–15 W입니다. 현행 8745HS 리비전은 메모리 업그레이드가 가능합니다(납땜 아님). 7B 및 13B 모델을 위한 더 저렴한 상시 Ollama 입문 선택지입니다.',
            affiliateLinks: [
              { label: 'Amazon에서 Beelink SER8 보기', url: 'https://www.amazon.com/s?k=Beelink+SER8' },
            ],
          },
          {
            rank: 4,
            title: 'Apple Mac Mini M6 / M5 Pro — macOS 최고 선택',
            content: 'Apple은 2026년 8월 25일 Mac mini 라인업을 새로 선보이며 M4 세대를 대체했습니다. Mac Mini M6는 $899부터이며 최대 32 GB 통합 메모리, 170 GB/s 대역폭을 제공합니다. Mac Mini M5 Pro는 24 GB 구성이 $1,699부터이며 최대 64 GB 통합 메모리로 구성할 수 있고, 307 GB/s 대역폭과 Thunderbolt 5를 지원합니다. Apple 미국 스토어(2026년 11월 28일 확인, 세전)에서 가장 저렴한 64 GB 구성은 $2,699(15코어 CPU, 512 GB)이고 18코어·1 TB 모델은 $3,199입니다. 두 모델 모두 2026년 9월 22일부터 판매 중입니다. 상시 Ollama 서버에서는 메모리가 중요합니다. macOS와 공유하는 32 GB(M6)는 7B–13B 모델에는 여유롭지만 약 19 GB의 30B Q4 모델에는 빠듯하며, 64 GB(M5 Pro)는 30B급 모델에 확실한 여유를 둡니다. PromptQuorum은 이 하드웨어를 테스트하지 않았으며 속도 수치를 제시하지 않습니다.',
            affiliateLinks: [
              { label: 'Amazon에서 Mac Mini M6 보기', url: 'https://www.amazon.com/s?k=Mac+Mini+M6' },
              { label: 'Apple에서 Mac Mini(M6·M5 Pro) 보기', url: 'https://www.apple.com/mac-mini/' },
            ],
          },
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '미니 PC로 13B 이상의 모델을 실용적인 속도로 실행할 수 있습니까?',
            a: 'RAM이 충분하면 적재할 수 있지만 속도가 한계입니다. 듀얼 채널 DDR5-5600(89.6 GB/s) 미니 PC에서는 메모리 대역폭 때문에 약 14 GB의 13B Q8 모델이 약 6 tok/s를 넘기 어렵고 실제 속도는 더 낮습니다. 더 작은 Q4 버전은 더 빠릅니다. 이는 실측이 아닌 이론적 한계입니다. 30B급 모델에는 64 GB Mac Mini M5 Pro(Apple 미국 스토어 $2,699부터, 2026년 11월 28일. $1,699 기본형은 24 GB)가 메모리와 대역폭이 더 여유롭습니다. 기본형 M6(최대 32 GB)는 빠듯합니다.',
          },
          {
            q: 'Ollama를 미니 PC에서 네트워크 서버로 운영하면 잘 작동합니까?',
            a: '네. OLLAMA_HOST=0.0.0.0으로 설정하면 Ollama가 로컬 네트워크 기기의 요청을 처리합니다. Open WebUI(Docker 컨테이너)와 함께 사용하면 스마트폰, 태블릿, PC의 브라우저에서 이용할 수 있습니다. 응답 속도는 모델과 동시 요청 수에 따라 달라지며, PromptQuorum은 이 미니 PC들의 부하 테스트를 하지 않았습니다. Ollama에는 내장 인증이 없으므로 인터넷에 노출하지 마십시오.',
          },
          {
            q: 'eGPU 구성은 비용 대비 가치가 있습니까?',
            a: '데스크톱급 GPU에서 모델을 실행해야 한다면 고려할 만합니다. OCuLink 구성(예: 외장 독에 RTX 3090을 장착한 AOOSTAR GEM12 Pro)은 PCIe 4.0 x4를 사용하며, 이는 PCIe 4.0 x16 슬롯 레인의 4분의 1입니다. 모델이 VRAM에 들어가면 주로 로딩에 영향을 줍니다. 카드, 독, 전원 공급 장치는 대기 상태를 포함해 비용과 소비 전력을 늘립니다. Thunderbolt 3·4 인클로저는 일반적으로 OCuLink x4보다 PCIe 데이터를 적게 전달합니다. PromptQuorum은 둘 다 측정하지 않았습니다.',
          },
        ],
      },
      relatedReading: {
        title: '관련 읽기 자료',
        items: [
          '[년 로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide)',
          '[Ollama 설치 및 시작 가이드](/ko/local-llms/how-to-install-ollama)',
          '최고의 무료 로컬 AI 모델 2026',
          '[eGPU로 로컬 LLM 실행하기](/ko/prompt-bites/best-egpu-ollama-macbook)',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '미니 PC로 13B 이상의 모델을 실용적인 속도로 실행할 수 있습니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'RAM이 충분하면 적재할 수 있지만 메모리 대역폭이 속도를 제한합니다. 89.6 GB/s에서 약 14 GB의 13B Q8 모델은 이론상 약 6 tok/s가 한계입니다. 30B급 모델에는 64 GB Mac Mini M5 Pro(Apple 미국 스토어 $2,699부터, 2026년 11월 28일. $1,699 기본형은 24 GB)가 선택지이며 32 GB M6는 빠듯합니다.' },
        },
        {
          '@type': 'Question',
          name: 'Ollama를 미니 PC에서 네트워크 서버로 운영하면 잘 작동합니까?',
          acceptedAnswer: { '@type': 'Answer', text: 'OLLAMA_HOST=0.0.0.0 설정으로 로컬 네트워크에 서비스합니다. Open WebUI와 함께 사용하면 브라우저 인터페이스를 제공합니다. 속도는 모델과 동시 요청 수에 따라 달라집니다. Ollama를 인터넷에 노출하지 마십시오.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026년 Ollama 상시 서버용 최고의 미니 PC 순위',
      numberOfItems: 4,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Minisforum UM890 Pro', description: '종합 최고 — Ryzen 9 8945HS, 최대 96 GB DDR5, ~$500' },
        { '@type': 'ListItem', position: 2, name: 'AOOSTAR GEM12 Pro OCuLink', description: 'eGPU 최고 — OCuLink 포트, Ryzen 7 Pro 8845HS, ~$480' },
        { '@type': 'ListItem', position: 3, name: 'Beelink SER8', description: '가성비 최고 — Ryzen 7 8745HS, 32 GB, ~$450' },
        { '@type': 'ListItem', position: 4, name: 'Apple Mac Mini M6 / M5 Pro', description: 'macOS 선택지 — M6 $899부터(최대 32 GB), 64 GB M5 Pro $2,699부터($1,699 기본형은 24 GB), 2026년 9월 22일부터 판매' },
      ],
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)' },
        { '@type': 'ListItem', position: 2, name: 'Prompt Bites', item: '[www.promptquorum.com/ko/prompt-bites](https://www.promptquorum.com/ko/prompt-bites)' },
        { '@type': 'ListItem', position: 3, name: '2026년 Ollama 상시 서버용 최고의 미니 PC 추천', item: '[www.promptquorum.com/ko/prompt-bites/best-mini-pc-for-ollama-server-always-on](https://www.promptquorum.com/ko/prompt-bites/best-mini-pc-for-ollama-server-always-on)' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '2026년 Ollama 상시 서버용 최고의 미니 PC 추천', datePublished: '2026-05-26', dateModified: '2026-11-28', url: 'https://www.promptquorum.com/ko/prompt-bites/best-mini-pc-for-ollama-server-always-on', inLanguage: 'ko' },
  },
}
