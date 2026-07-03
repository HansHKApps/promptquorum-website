import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Minisforum UM890 Pro Review (2026): Local AI Home Server',
    seoTitle: 'Minisforum UM890 Pro Review 2026 — Local AI Server',
    intro:
      'The Minisforum UM890 Pro (AMD Ryzen 9 8945HS, Radeon 780M, up to 96 GB DDR5) is the versatile step-up mini PC for a local-AI smart home. Priced from about $439 barebones to $649 with 32 GB (July 2026, volatile), it matches a Beelink SER8 on the local model but adds dual 2.5GbE, Wi-Fi 6E, and an OCuLink port for an external GPU. This review verifies its specs, sets honest expectations for local-LLM speed, and explains who should pay the premium over a SER8.',
    metaDescription:
      'Minisforum UM890 Pro review 2026: Ryzen 9 8945HS, Radeon 780M, up to 96 GB DDR5, OCuLink eGPU, dual 2.5GbE. Runs Home Assistant + a 7B local LLM — the expandable step-up box.',
    twitterDescription:
      'Minisforum UM890 Pro (2026): Ryzen 9 8945HS, Radeon 780M, up to 96 GB DDR5, OCuLink for an external GPU, dual 2.5GbE. The expandable local-AI home server — here is the breakdown.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers who want an expandable mini PC for Home Assistant and local AI',
    primaryTerm: 'Minisforum UM890 Pro review',
    targetKeywords: [
      'minisforum um890 pro review',
      'minisforum um890 pro local ai',
      'um890 pro home assistant',
      'um890 pro local llm',
      'ryzen 9 8945hs mini pc oculink',
    ],
    leadAnswerBlock:
      '**The Minisforum UM890 Pro (Ryzen 9 8945HS, Radeon 780M, up to 96 GB DDR5) runs Home Assistant plus a 7B local LLM like a Beelink SER8 but adds dual 2.5GbE, Wi-Fi 6E, and an OCuLink port for an external GPU — from about $439 barebones to $649 with 32 GB (July 2026, volatile).** Buy it if you want an expandable home server with a real path to faster large-model inference.',
    quickAnswerTop: {
      en: {
        question: 'Is the Minisforum UM890 Pro good for local AI and Home Assistant?',
        answer:
          'Yes — it is the expandable step-up pick. The Ryzen 9 8945HS (8 cores/16 threads), Radeon 780M iGPU, and up to 96 GB of DDR5 run Home Assistant, Ollama, Whisper, and Frigate together; a 7B model is comfortable and 13B–14B fits with more RAM. Its differentiators are dual 2.5GbE, Wi-Fi 6E, and an OCuLink port that connects an external GPU for genuinely fast large-model inference. Priced from about $439 barebones to $649 with 32 GB (July 2026, volatile), it costs a little more than a Beelink SER8 but adds real expansion.',
        bullets: [
          'CPU: Ryzen 9 8945HS — 8 cores / 16 threads, Radeon 780M (12 CU, RDNA 3)',
          'RAM: DDR5-5600 dual channel, two user-upgradeable SO-DIMMs, up to 96 GB',
          'Local LLM (estimated from specs): 7B comfortable; 13B–14B with more RAM; OCuLink eGPU for fast large models',
          'Networking/expansion: dual 2.5GbE, Wi-Fi 6E, 2× USB4, OCuLink eGPU port',
          'Price ~$439 barebones / ~$649 with 32 GB (July 2026, volatile) — expandable step-up',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Specifications', anchor: 'specs' },
      { label: 'Local AI & LLM Performance', anchor: 'local-ai' },
      { label: 'Pros & Cons', anchor: 'pros-cons' },
      { label: 'Buyer Context: Tariffs (2026)', anchor: 'trade-note' },
      { label: 'Where to Buy', anchor: 'where-to-buy' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The Minisforum UM890 Pro is a Ryzen 9 8945HS mini PC that runs Home Assistant plus a 7B local LLM and adds an OCuLink port for an external GPU.' },
      { type: 'plain-terms', content: 'A mini PC is a small, quiet always-on computer. The UM890 Pro is a capable one that runs a whole smart home and a mid-size AI model. Its special feature is a port that lets you plug in a full external graphics card later, so you can make big AI models run much faster without buying a new machine.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The UM890 Pro runs Home Assistant, Frigate, Whisper, and a 7B local LLM on one box',
          'Ryzen 9 8945HS: 8 cores/16 threads, Radeon 780M iGPU, up to 96 GB DDR5 on two upgradeable SO-DIMMs',
          'Differentiators vs a [Beelink SER8](/smart-home/beelink-ser8-local-ai-review): dual 2.5GbE, Wi-Fi 6E, and an OCuLink eGPU port',
          'OCuLink gives a real path to fast large-model inference with an external GPU',
          'Priced from ~$439 barebones to ~$649 with 32 GB — the expandable step-up',
          'Made in China — factor 2026 US/EU import measures into landed cost (see trade note)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — Who Should Buy It',
        content:
          '**Buy the Minisforum UM890 Pro if you want a SER8-class local-AI box with room to grow — more RAM headroom, dual 2.5GbE, and an OCuLink port for an external GPU.** For a 7B model on Home Assistant it performs like a Beelink SER8; the reason to pay a little more is expansion. If you never plan to add a GPU or a second network link, the SER8 saves money for similar day-to-day performance.\n\nIts single strongest use case is an **expandable home server** — start with the iGPU, and add an OCuLink external GPU later when you want fast 13B–30B inference. The barebones SKU also lets you supply your own RAM and SSD.',
        affiliateLinks: [
          { label: 'Check current price — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Specifications',
        content:
          '**All specs below were verified against Minisforum and independent review sources in July 2026.** The RAM ceiling is 96 GB on the official page (some retailers still list 64 GB). It ships barebones or pre-built by SKU.',
        columns: ['Spec', 'Minisforum UM890 Pro (8945HS)'],
        rows: [
          { Spec: 'CPU', 'Minisforum UM890 Pro (8945HS)': 'AMD Ryzen 9 8945HS (Zen 4)' },
          { Spec: 'Cores / threads', 'Minisforum UM890 Pro (8945HS)': '8 cores / 16 threads, up to 5.2 GHz' },
          { Spec: 'iGPU', 'Minisforum UM890 Pro (8945HS)': 'AMD Radeon 780M — 12 CU, RDNA 3' },
          { Spec: 'NPU', 'Minisforum UM890 Pro (8945HS)': 'Ryzen AI, 16 TOPS (39 TOPS platform total)' },
          { Spec: 'RAM', 'Minisforum UM890 Pro (8945HS)': 'DDR5-5600 dual channel; 2 SO-DIMM slots; up to 96 GB (user-upgradeable)' },
          { Spec: 'Storage', 'Minisforum UM890 Pro (8945HS)': '2× M.2 2280 PCIe 4.0; up to 8 TB' },
          { Spec: 'Ports', 'Minisforum UM890 Pro (8945HS)': '2× USB4 (40 Gbps, 100 W PD-in), 4× USB-A 10 Gbps, HDMI 2.1, DP 1.4, OCuLink (PCIe 4.0 ×4), 3.5 mm' },
          { Spec: 'Networking', 'Minisforum UM890 Pro (8945HS)': '2× 2.5GbE, Wi-Fi 6E, Bluetooth 5.3' },
          { Spec: 'TDP', 'Minisforum UM890 Pro (8945HS)': '45 W base, configurable to ~70 W' },
          { Spec: 'Dimensions', 'Minisforum UM890 Pro (8945HS)': '127 × 130 × 67 mm' },
          { Spec: 'OS', 'Minisforum UM890 Pro (8945HS)': 'Windows 11 Pro on pre-built SKUs (Linux/Proxmox supported)' },
          { Spec: 'Price (indicative)', 'Minisforum UM890 Pro (8945HS)': '~$439 barebones / ~$649 with 32 GB (July 2026 — volatile, check current price)' },
        ],
        items: [
          'The OCuLink port (PCIe 4.0 ×4, ~64 Gbps) connects an external GPU dock — a faster path than USB4/Thunderbolt for a discrete GPU.',
          'Two user-upgradeable SO-DIMM slots and two M.2 slots make it easy to expand RAM and storage.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Local AI & LLM Performance',
        content:
          '**On the iGPU the UM890 Pro comfortably runs a 7B model and fits 13B–14B with more RAM; its real advantage is the OCuLink port, which connects an external GPU for genuinely fast large-model inference — all figures estimated from the verified hardware, not a measured benchmark.** Without an external GPU, large models are limited by memory bandwidth like any shared-memory box.',
        items: [
          'With 32 GB, a 7B model is comfortable; 64–96 GB opens 13B–14B comfortably and a 30B model at low throughput.',
          'OCuLink adds an external desktop GPU for large-model speed the iGPU cannot reach — a differentiator over USB4-only boxes.',
          'Ollama, LM Studio, and llama.cpp run well; the 16-TOPS NPU is not used by mainstream LLM runtimes.',
          'Dual 2.5GbE suits a wired, reliable home server; see [Ollama on Home Assistant](/smart-home/home-assistant-ollama-integration).',
          'For VRAM and quantization depth, see the cross-cluster [local LLM hardware guide](/local-llms/local-llm-hardware-guide-2026).',
        ],
        affiliateLinks: [
          { label: 'Check current price — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Pros & Cons',
        content: '**The UM890 Pro is the expandable choice; you pay a little more for growth room.** Balanced view below.',
        items: [
          '**Pros**',
          'OCuLink port for a fast external GPU — a genuine large-model upgrade path',
          'Up to 96 GB DDR5 on two user-upgradeable SO-DIMM slots',
          'Dual 2.5GbE and Wi-Fi 6E — better connectivity than a Beelink SER8',
          'Two USB4 ports (100 W PD-in) and up to four simultaneous displays',
          'Barebones SKU lets you supply your own RAM and SSD',
          '**Cons**',
          'Costs more than a Beelink SER8 for similar iGPU-only performance',
          'Larger chassis (67 mm tall) than most boxes here',
          'An external GPU means extra cost, space, and noise — not truly "mini" once added',
          'The NPU does not accelerate local LLMs',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Buyer Context: Tariffs & Availability (2026)',
        content:
          '**The UM890 Pro is manufactured in China, so its landed price reflects 2026 trade measures — a reason to treat any price as a moving target.** The facts below are buyer context, not editorial opinion.',
        items: [
          'US: Section 301 tariffs on Chinese electronics remain in force in 2026; the separate 2025 "IEEPA" tariffs were struck down by the Supreme Court in February 2026 and replaced by a temporary, capped Section 122 tariff. The sub-$800 duty-free "de minimis" exemption for direct imports has also ended.',
          'EU (affects DE/FR): there is no broad EU tariff on finished mini PCs, but from July 2026 the €150 duty-free threshold on low-value direct-from-China parcels was removed and a small per-parcel handling fee added.',
          'Assumption (macro trend, not a per-product fact): redirected Chinese export capacity has kept availability of these brands high in the EU and US, which broadly supports competitive pricing.',
          'Net effect: verify the current price at the retailer before buying — the figures here are indicative and date-stamped July 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Buy & Current Price',
        content:
          '**Prices move week to week, so check the live price rather than trusting a fixed figure.** As of July 2026 the UM890 Pro runs from about $439 barebones to $649 with 32 GB and $729 with 64 GB.',
        items: [
          'Decide barebones vs pre-built: barebones is cheaper if you already have DDR5 SO-DIMMs and an NVMe SSD.',
        ],
        affiliateLinks: [
          { label: 'Check current price — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Consider',
        content: '**If the UM890 Pro is not the right fit, these bracket it on price and expansion.**',
        items: [
          '[Beelink SER8](/smart-home/beelink-ser8-local-ai-review) — the value pick with similar iGPU performance for less, minus OCuLink and dual LAN',
          '[GEEKOM A9 Max](/smart-home/geekom-a9-max-local-ai-review) — premium headroom box with a 128 GB RAM ceiling and Wi-Fi 7',
          '[Beelink EQ14](/smart-home/beelink-eq14-local-ai-review) — budget Intel N150 box for Home Assistant plus a tiny model',
          '[GMKtec G3 Plus](/smart-home/gmktec-g3-plus-local-ai-review) — another budget N150 option with upgradeable RAM',
          'Still comparing? Start from the [best mini PCs for Home Assistant + local AI roundup](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can the Minisforum UM890 Pro run local LLMs?', a: 'Yes. On its Radeon 780M iGPU it comfortably runs a 7B model on Ollama and fits 13B–14B with more RAM. With an external GPU over OCuLink it runs large models much faster. These figures are estimated from its verified hardware, not a fixed benchmark.' },
          { q: 'How big a model fits in its RAM?', a: 'With 32 GB, a 7B model is comfortable. Upgrading to 64–96 GB fits 13B–14B comfortably and a 30B model at low throughput on the iGPU. For fast large-model inference, add a GPU through the OCuLink port.' },
          { q: 'What is the OCuLink port for?', a: 'OCuLink is a PCIe 4.0 ×4 connector (about 64 Gbps) that links an external GPU dock. It is faster than USB4/Thunderbolt for a discrete GPU, giving the UM890 Pro a real upgrade path to fast large-model inference — the main reason to choose it over a Beelink SER8.' },
          { q: 'Is the UM890 Pro good for Home Assistant and always-on use?', a: 'Yes. It runs Home Assistant, Ollama, Whisper, and Frigate together, and its dual 2.5GbE and Wi-Fi 6E make it a well-connected home server. Base draw is 45 W, configurable up to about 70 W.' },
          { q: 'Is the RAM upgradeable?', a: 'Yes. The UM890 Pro uses two user-upgradeable DDR5 SO-DIMM slots and supports up to 96 GB (some retailers list 64 GB). It also has two M.2 slots for storage.' },
          { q: 'How much power does the UM890 Pro use?', a: 'It runs at 45 W base and up to about 70 W under load in performance mode, with much less at idle. Adding an external GPU over OCuLink increases total draw substantially.' },
          { q: 'UM890 Pro or Beelink SER8?', a: 'Day to day they perform alike on a 7B model. Choose the UM890 Pro for its OCuLink eGPU path, dual 2.5GbE, Wi-Fi 6E, and 96 GB RAM ceiling; choose the SER8 to save money if you do not need that expansion.' },
          { q: 'Where is the Minisforum UM890 Pro made, and does that affect price?', a: 'It is manufactured in China. In 2026 US import measures (Section 301 tariffs, the end of the sub-$800 de minimis exemption) and the EU removal of the €150 low-value parcel exemption can affect landed cost, so check the current retailer price rather than relying on a fixed number.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — the roundup this review belongs to',
          '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide-2026) — cross-cluster: VRAM and quantization depth',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the box actually runs',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — wire the model in',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Minisforum UM890 Pro Review (2026): Local AI Home Server',
      reviewBody:
        'The Minisforum UM890 Pro is a Ryzen 9 8945HS mini PC with a Radeon 780M iGPU, up to 96 GB DDR5, and an OCuLink port for an external GPU. It runs Home Assistant plus a 7B local LLM and is the expandable step-up box, from about $439 barebones (July 2026).',
      datePublished: '2026-07-03',
      dateModified: '2026-07-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      url: 'https://www.promptquorum.com/smart-home/minisforum-um890-pro-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Minisforum UM890 Pro',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Minisforum' },
        description: 'Mini PC with AMD Ryzen 9 8945HS, Radeon 780M iGPU, up to 96 GB DDR5, and an OCuLink eGPU port, for local AI and home-server use.',
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Minisforum UM890 Pro Test (2026): Lokaler-KI-Heimserver',
    seoTitle: 'Minisforum UM890 Pro Test 2026 — Lokaler KI-Server',
    intro:
      'Der Minisforum UM890 Pro (AMD Ryzen 9 8945HS, Radeon 780M, bis zu 96 GB DDR5) ist der vielseitige Aufstiegs-Mini-PC für ein Smart Home mit lokaler KI. Ab ca. 489 € als Barebone bis ca. 649 € mit 32 GB (Juli 2026, schwankend) erreicht er beim lokalen Modell das Niveau eines Beelink SER8, bietet aber zusätzlich zwei 2,5GbE-Ports, Wi-Fi 6E und einen OCuLink-Anschluss für eine externe GPU. Dieser Test prüft die Spezifikationen, setzt ehrliche Erwartungen an die Geschwindigkeit lokaler LLMs und erklärt, wer den Aufpreis gegenüber einem SER8 zahlen sollte.',
    metaDescription:
      'Minisforum UM890 Pro Test 2026: Ryzen 9 8945HS, Radeon 780M, bis zu 96 GB DDR5, OCuLink-eGPU, zwei 2,5GbE. Betreibt Home Assistant + ein lokales 7B-LLM — die erweiterbare Aufstiegs-Box.',
    twitterDescription:
      'Minisforum UM890 Pro (2026): Ryzen 9 8945HS, Radeon 780M, bis zu 96 GB DDR5, OCuLink für eine externe GPU, zwei 2,5GbE. Der erweiterbare Lokale-KI-Heimserver — hier die Analyse.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die einen erweiterbaren Mini-PC für Home Assistant und lokale KI suchen',
    primaryTerm: 'Minisforum UM890 Pro Test',
    targetKeywords: [
      'minisforum um890 pro test',
      'minisforum um890 pro lokale ki',
      'um890 pro home assistant',
      'um890 pro lokales llm',
      'ryzen 9 8945hs mini pc oculink',
    ],
    leadAnswerBlock:
      '**Der Minisforum UM890 Pro (Ryzen 9 8945HS, Radeon 780M, bis zu 96 GB DDR5) betreibt Home Assistant plus ein lokales 7B-LLM wie ein Beelink SER8, bietet aber zusätzlich zwei 2,5GbE-Ports, Wi-Fi 6E und einen OCuLink-Anschluss für eine externe GPU — ab ca. 489 € als Barebone bis ca. 649 € mit 32 GB (Juli 2026, schwankend).** Kaufen Sie ihn, wenn Sie einen erweiterbaren Heimserver mit echtem Weg zu schnellerer Inferenz großer Modelle wollen.',
    quickAnswerTop: {
      de: {
        question: 'Ist der Minisforum UM890 Pro gut für lokale KI und Home Assistant?',
        answer:
          'Ja — er ist die erweiterbare Aufstiegswahl. Der Ryzen 9 8945HS (8 Kerne/16 Threads), die Radeon-780M-iGPU und bis zu 96 GB DDR5 betreiben Home Assistant, Ollama, Whisper und Frigate gemeinsam; ein 7B-Modell läuft bequem, und 13B–14B passen mit mehr RAM. Seine Unterscheidungsmerkmale sind zwei 2,5GbE-Ports, Wi-Fi 6E und ein OCuLink-Anschluss, der eine externe GPU für wirklich schnelle Inferenz großer Modelle anbindet. Ab ca. 489 € als Barebone bis ca. 649 € mit 32 GB (Juli 2026, schwankend) kostet er etwas mehr als ein Beelink SER8, bietet aber echte Erweiterbarkeit.',
        bullets: [
          'CPU: Ryzen 9 8945HS — 8 Kerne / 16 Threads, Radeon 780M (12 CU, RDNA 3)',
          'RAM: DDR5-5600 Dual-Channel, zwei nutzeraufrüstbare SO-DIMMs, bis zu 96 GB',
          'Lokales LLM (aus Spezifikationen geschätzt): 7B bequem; 13B–14B mit mehr RAM; OCuLink-eGPU für schnelle große Modelle',
          'Netzwerk/Erweiterung: zwei 2,5GbE, Wi-Fi 6E, 2× USB4, OCuLink-eGPU-Anschluss',
          'Preis ca. 489 € als Barebone / ca. 649 € mit 32 GB (Juli 2026, schwankend) — erweiterbarer Aufstieg',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Spezifikationen', anchor: 'specs' },
      { label: 'Lokale KI & LLM-Leistung', anchor: 'local-ai' },
      { label: 'Vor- & Nachteile', anchor: 'pros-cons' },
      { label: 'Käuferkontext: Zölle (2026)', anchor: 'trade-note' },
      { label: 'Wo kaufen', anchor: 'where-to-buy' },
      { label: 'Alternativen', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Der Minisforum UM890 Pro ist ein Ryzen-9-8945HS-Mini-PC, der Home Assistant plus ein lokales 7B-LLM betreibt und einen OCuLink-Anschluss für eine externe GPU bietet.' },
      { type: 'plain-terms', content: 'Ein Mini-PC ist ein kleiner, leiser Dauerbetrieb-Computer. Der UM890 Pro ist ein leistungsfähiges Modell, das ein ganzes Smart Home und ein mittelgroßes KI-Modell betreibt. Seine Besonderheit ist ein Anschluss, über den Sie später eine vollwertige externe Grafikkarte anschließen können, sodass große KI-Modelle viel schneller laufen, ohne dass Sie ein neues Gerät kaufen müssen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Der UM890 Pro betreibt Home Assistant, Frigate, Whisper und ein lokales 7B-LLM auf einer Box',
          'Ryzen 9 8945HS: 8 Kerne/16 Threads, Radeon-780M-iGPU, bis zu 96 GB DDR5 auf zwei aufrüstbaren SO-DIMMs',
          'Unterscheidungsmerkmale gegenüber einem [Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review): zwei 2,5GbE, Wi-Fi 6E und ein OCuLink-eGPU-Anschluss',
          'OCuLink bietet einen echten Weg zu schneller Inferenz großer Modelle mit einer externen GPU',
          'Ab ca. 489 € als Barebone bis ca. 649 € mit 32 GB — der erweiterbare Aufstieg',
          'In China gefertigt — beziehen Sie die US-/EU-Importmaßnahmen 2026 in die Endkosten ein (siehe Zollhinweis)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit — Für wen er sich lohnt',
        content:
          '**Kaufen Sie den Minisforum UM890 Pro, wenn Sie eine Box der SER8-Klasse für lokale KI mit Wachstumsraum wollen — mehr RAM-Reserve, zwei 2,5GbE und einen OCuLink-Anschluss für eine externe GPU.** Für ein 7B-Modell auf Home Assistant leistet er wie ein Beelink SER8; der Grund für den kleinen Aufpreis ist die Erweiterbarkeit. Wenn Sie nie eine GPU oder eine zweite Netzwerkverbindung hinzufügen wollen, spart der SER8 Geld bei ähnlicher Alltagsleistung.\n\nSein stärkster Einsatzzweck ist ein **erweiterbarer Heimserver** — beginnen Sie mit der iGPU und ergänzen Sie später eine externe OCuLink-GPU, wenn Sie schnelle 13B–30B-Inferenz wollen. Die Barebone-Variante erlaubt es zudem, eigenen RAM und eine eigene SSD zu verwenden.',
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Spezifikationen',
        content:
          '**Alle nachstehenden Spezifikationen wurden im Juli 2026 gegen Minisforum und unabhängige Testquellen geprüft.** Die RAM-Obergrenze liegt laut offizieller Seite bei 96 GB (manche Händler nennen noch 64 GB). Ausgeliefert wird je nach SKU als Barebone oder vorkonfiguriert.',
        columns: ['Spezifikation', 'Minisforum UM890 Pro (8945HS)'],
        rows: [
          { Spezifikation: 'CPU', 'Minisforum UM890 Pro (8945HS)': 'AMD Ryzen 9 8945HS (Zen 4)' },
          { Spezifikation: 'Kerne / Threads', 'Minisforum UM890 Pro (8945HS)': '8 Kerne / 16 Threads, bis zu 5,2 GHz' },
          { Spezifikation: 'iGPU', 'Minisforum UM890 Pro (8945HS)': 'AMD Radeon 780M — 12 CU, RDNA 3' },
          { Spezifikation: 'NPU', 'Minisforum UM890 Pro (8945HS)': 'Ryzen AI, 16 TOPS (39 TOPS Plattform gesamt)' },
          { Spezifikation: 'RAM', 'Minisforum UM890 Pro (8945HS)': 'DDR5-5600 Dual-Channel; 2 SO-DIMM-Steckplätze; bis zu 96 GB (nutzeraufrüstbar)' },
          { Spezifikation: 'Speicher', 'Minisforum UM890 Pro (8945HS)': '2× M.2 2280 PCIe 4.0; bis zu 8 TB' },
          { Spezifikation: 'Anschlüsse', 'Minisforum UM890 Pro (8945HS)': '2× USB4 (40 Gbps, 100 W PD-in), 4× USB-A 10 Gbps, HDMI 2.1, DP 1.4, OCuLink (PCIe 4.0 ×4), 3,5 mm' },
          { Spezifikation: 'Netzwerk', 'Minisforum UM890 Pro (8945HS)': '2× 2,5GbE, Wi-Fi 6E, Bluetooth 5.3' },
          { Spezifikation: 'TDP', 'Minisforum UM890 Pro (8945HS)': '45 W Basis, konfigurierbar bis ca. 70 W' },
          { Spezifikation: 'Abmessungen', 'Minisforum UM890 Pro (8945HS)': '127 × 130 × 67 mm' },
          { Spezifikation: 'OS', 'Minisforum UM890 Pro (8945HS)': 'Windows 11 Pro auf vorkonfigurierten SKUs (Linux/Proxmox unterstützt)' },
          { Spezifikation: 'Preis (indikativ)', 'Minisforum UM890 Pro (8945HS)': 'ca. 489 € Barebone / ca. 649 € mit 32 GB (Juli 2026 — schwankend, aktuellen Preis prüfen)' },
        ],
        items: [
          'Der OCuLink-Anschluss (PCIe 4.0 ×4, ~64 Gbps) verbindet ein externes GPU-Dock — ein schnellerer Weg als USB4/Thunderbolt für eine dedizierte GPU.',
          'Zwei nutzeraufrüstbare SO-DIMM-Steckplätze und zwei M.2-Steckplätze machen die Erweiterung von RAM und Speicher einfach.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Lokale KI & LLM-Leistung',
        content:
          '**Auf der iGPU betreibt der UM890 Pro bequem ein 7B-Modell und fasst 13B–14B mit mehr RAM; sein echter Vorteil ist der OCuLink-Anschluss, der eine externe GPU für wirklich schnelle Inferenz großer Modelle anbindet — alle Angaben aus der geprüften Hardware geschätzt, kein gemessener Benchmark.** Ohne externe GPU sind große Modelle wie bei jeder Shared-Memory-Box durch die Speicherbandbreite begrenzt.',
        items: [
          'Mit 32 GB läuft ein 7B-Modell bequem; 64–96 GB eröffnen 13B–14B bequem und ein 30B-Modell bei geringem Durchsatz.',
          'OCuLink ergänzt eine externe Desktop-GPU für eine Modellgeschwindigkeit, die die iGPU nicht erreicht — ein Unterscheidungsmerkmal gegenüber reinen USB4-Boxen.',
          'Ollama, LM Studio und llama.cpp laufen gut; die 16-TOPS-NPU wird von gängigen LLM-Runtimes nicht genutzt.',
          'Zwei 2,5GbE eignen sich für einen kabelgebundenen, zuverlässigen Heimserver; siehe [Ollama auf Home Assistant](/de/smart-home/home-assistant-ollama-integration).',
          'Zu VRAM und Quantisierungstiefe siehe den clusterübergreifenden [Hardware-Guide für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026).',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Vor- & Nachteile',
        content: '**Der UM890 Pro ist die erweiterbare Wahl; Sie zahlen etwas mehr für Wachstumsraum.** Ausgewogene Sicht unten.',
        items: [
          '**Vorteile**',
          'OCuLink-Anschluss für eine schnelle externe GPU — ein echter Upgrade-Pfad für große Modelle',
          'Bis zu 96 GB DDR5 auf zwei nutzeraufrüstbaren SO-DIMM-Steckplätzen',
          'Zwei 2,5GbE und Wi-Fi 6E — bessere Konnektivität als ein Beelink SER8',
          'Zwei USB4-Anschlüsse (100 W PD-in) und bis zu vier gleichzeitige Displays',
          'Die Barebone-Variante erlaubt eigenen RAM und eigene SSD',
          '**Nachteile**',
          'Kostet mehr als ein Beelink SER8 bei ähnlicher reiner iGPU-Leistung',
          'Größeres Gehäuse (67 mm hoch) als die meisten Boxen hier',
          'Eine externe GPU bedeutet zusätzliche Kosten, Platz und Geräusch — nach dem Hinzufügen nicht mehr wirklich „mini“',
          'Die NPU beschleunigt keine lokalen LLMs',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Käuferkontext: Zölle & Verfügbarkeit (2026)',
        content:
          '**Der UM890 Pro wird in China gefertigt, daher spiegelt sein Endpreis die Handelsmaßnahmen 2026 wider — ein Grund, jeden Preis als bewegliches Ziel zu behandeln.** Die folgenden Fakten sind Käuferkontext, keine redaktionelle Meinung.',
        items: [
          'USA: Die Section-301-Zölle auf chinesische Elektronik bleiben 2026 in Kraft; die separaten „IEEPA“-Zölle von 2025 wurden im Februar 2026 vom Supreme Court gekippt und durch einen befristeten, gedeckelten Section-122-Zoll ersetzt. Die zollfreie „De-minimis“-Grenze unter 800 $ für Direktimporte ist ebenfalls entfallen.',
          'EU (betrifft DE/FR): Es gibt keinen breiten EU-Zoll auf fertige Mini-PCs, aber seit Juli 2026 wurde die zollfreie 150-€-Grenze für geringwertige Direktsendungen aus China abgeschafft und eine kleine Bearbeitungsgebühr pro Paket eingeführt.',
          'Annahme (Makrotrend, kein produktbezogener Fakt): Umgeleitete chinesische Exportkapazität hat die Verfügbarkeit dieser Marken in der EU und den USA hoch gehalten, was wettbewerbsfähige Preise breit stützt.',
          'Nettoeffekt: Prüfen Sie den aktuellen Preis beim Händler vor dem Kauf — die Zahlen hier sind indikativ und mit Juli 2026 datiert.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Wo kaufen & aktueller Preis',
        content:
          '**Preise ändern sich von Woche zu Woche, prüfen Sie daher den Live-Preis, statt einer festen Zahl zu vertrauen.** Stand Juli 2026 liegt der UM890 Pro zwischen ca. 489 € als Barebone, ca. 649 € mit 32 GB und ca. 729 € mit 64 GB.',
        items: [
          'Entscheiden Sie Barebone vs. vorkonfiguriert: Barebone ist günstiger, wenn Sie bereits DDR5-SO-DIMMs und eine NVMe-SSD haben.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen im Blick',
        content: '**Wenn der UM890 Pro nicht die richtige Wahl ist, rahmen diese ihn bei Preis und Erweiterbarkeit ein.**',
        items: [
          '[Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review) — die Preis-Leistungs-Wahl mit ähnlicher iGPU-Leistung für weniger, ohne OCuLink und Dual-LAN',
          '[GEEKOM A9 Max](/de/smart-home/geekom-a9-max-local-ai-review) — Premium-Box mit Reserven, 128-GB-RAM-Obergrenze und Wi-Fi 7',
          '[Beelink EQ14](/de/smart-home/beelink-eq14-local-ai-review) — günstige Intel-N150-Box für Home Assistant plus ein kleines Modell',
          '[GMKtec G3 Plus](/de/smart-home/gmktec-g3-plus-local-ai-review) — weitere günstige N150-Option mit aufrüstbarem RAM',
          'Noch am Vergleichen? Starten Sie mit dem [Überblick der besten Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann der Minisforum UM890 Pro lokale LLMs ausführen?', a: 'Ja. Auf seiner Radeon-780M-iGPU läuft ein 7B-Modell auf Ollama bequem, und 13B–14B passen mit mehr RAM. Mit einer externen GPU über OCuLink laufen große Modelle deutlich schneller. Diese Angaben sind aus der geprüften Hardware geschätzt, kein fester Benchmark.' },
          { q: 'Wie groß darf ein Modell für den RAM sein?', a: 'Mit 32 GB läuft ein 7B-Modell bequem. Ein Upgrade auf 64–96 GB fasst 13B–14B bequem und ein 30B-Modell bei geringem Durchsatz auf der iGPU. Für schnelle Inferenz großer Modelle ergänzen Sie eine GPU über den OCuLink-Anschluss.' },
          { q: 'Wofür ist der OCuLink-Anschluss?', a: 'OCuLink ist ein PCIe-4.0-×4-Anschluss (etwa 64 Gbps), der ein externes GPU-Dock anbindet. Er ist schneller als USB4/Thunderbolt für eine dedizierte GPU und gibt dem UM890 Pro einen echten Upgrade-Pfad zu schneller Inferenz großer Modelle — der Hauptgrund, ihn einem Beelink SER8 vorzuziehen.' },
          { q: 'Ist der UM890 Pro gut für Home Assistant und Dauerbetrieb?', a: 'Ja. Er betreibt Home Assistant, Ollama, Whisper und Frigate gemeinsam, und seine zwei 2,5GbE sowie Wi-Fi 6E machen ihn zu einem gut vernetzten Heimserver. Die Grundaufnahme liegt bei 45 W, konfigurierbar bis ca. 70 W.' },
          { q: 'Ist der RAM aufrüstbar?', a: 'Ja. Der UM890 Pro nutzt zwei nutzeraufrüstbare DDR5-SO-DIMM-Steckplätze und unterstützt bis zu 96 GB (manche Händler nennen 64 GB). Er hat außerdem zwei M.2-Steckplätze für Speicher.' },
          { q: 'Wie viel Strom verbraucht der UM890 Pro?', a: 'Er läuft mit 45 W Basis und bis zu ca. 70 W unter Last im Leistungsmodus, im Leerlauf deutlich weniger. Eine externe GPU über OCuLink erhöht die Gesamtaufnahme erheblich.' },
          { q: 'UM890 Pro oder Beelink SER8?', a: 'Im Alltag leisten sie bei einem 7B-Modell gleich. Wählen Sie den UM890 Pro für seinen OCuLink-eGPU-Pfad, zwei 2,5GbE, Wi-Fi 6E und die 96-GB-RAM-Obergrenze; wählen Sie den SER8, um Geld zu sparen, wenn Sie diese Erweiterung nicht brauchen.' },
          { q: 'Wo wird der Minisforum UM890 Pro gefertigt, und beeinflusst das den Preis?', a: 'Er wird in China gefertigt. 2026 können US-Importmaßnahmen (Section-301-Zölle, das Ende der De-minimis-Befreiung unter 800 $) und die EU-Abschaffung der 150-€-Grenze für geringwertige Sendungen die Endkosten beeinflussen, prüfen Sie daher den aktuellen Händlerpreis statt sich auf eine feste Zahl zu verlassen.' },
          { q: 'Hilft der UM890 Pro bei der DSGVO-Konformität im Smart Home?', a: 'Ja, indirekt. Weil KI-Inferenz und Sprachverarbeitung lokal auf dem Gerät laufen, verlassen Kamerabilder, Sprachbefehle und Sensordaten Ihr Heimnetz nicht — das unterstützt „Privacy by Design“ nach DSGVO-Artikel 25 und die Datenminimierung. Es gibt keinen Cloud-Anbieter, mit dem ein Auftragsverarbeitungsvertrag nach Artikel 28 nötig wäre. Für Gewerbetreibende erleichtert die lokale Verarbeitung zudem die Ausrichtung an den BSI-Grundschutz-Katalogen.' },
          { q: 'Was kostet der UM890 Pro in Deutschland und was ist beim Import zu beachten?', a: 'Im EU-Store und bei EU-Händlern startet der UM890 Pro bei ca. 489 € als Barebone und ca. 649 € mit 32 GB (Juli 2026, schwankend). Seit Juli 2026 ist die zollfreie 150-€-Grenze für geringwertige Direktsendungen aus China entfallen und es kommt eine kleine Bearbeitungsgebühr pro Paket hinzu; kaufen Sie daher bevorzugt bei einem EU-Händler mit lokaler Gewährleistung, um Zoll- und Einfuhrüberraschungen zu vermeiden.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) — der Überblick, zu dem dieser Test gehört',
          '[Hardware-Guide für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026) — clusterübergreifend: VRAM und Quantisierungstiefe',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) — was die Box tatsächlich ausführt',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) — das Modell einbinden',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) — Pi vs. Mini-PC vs. NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Minisforum UM890 Pro Test (2026): Lokaler-KI-Heimserver',
      reviewBody:
        'Der Minisforum UM890 Pro ist ein Ryzen-9-8945HS-Mini-PC mit Radeon-780M-iGPU, bis zu 96 GB DDR5 und einem OCuLink-Anschluss für eine externe GPU. Er betreibt Home Assistant plus ein lokales 7B-LLM und ist die erweiterbare Aufstiegs-Box, ab ca. 489 € als Barebone (Juli 2026).',
      datePublished: '2026-07-03',
      dateModified: '2026-07-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      url: 'https://www.promptquorum.com/de/smart-home/minisforum-um890-pro-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Minisforum UM890 Pro',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Minisforum' },
        description: 'Mini-PC mit AMD Ryzen 9 8945HS, Radeon-780M-iGPU, bis zu 96 GB DDR5 und einem OCuLink-eGPU-Anschluss, für lokale KI und Heimserver-Einsatz.',
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Test Minisforum UM890 Pro (2026) : serveur IA local',
    seoTitle: 'Test Minisforum UM890 Pro 2026 — serveur IA local',
    intro:
      'Le Minisforum UM890 Pro (AMD Ryzen 9 8945HS, Radeon 780M, jusqu\'à 96 GB DDR5) est le mini-PC polyvalent de montée en gamme pour une maison connectée à IA locale. À partir d\'environ 489 € en barebone jusqu\'à 649 € avec 32 GB (juillet 2026, variable), il égale un Beelink SER8 sur le modèle local mais ajoute deux ports 2.5GbE, le Wi-Fi 6E et un port OCuLink pour un GPU externe. Ce test vérifie ses caractéristiques, pose des attentes honnêtes sur la vitesse des LLM locaux et explique qui devrait payer le surcoût face à un SER8.',
    metaDescription:
      'Test Minisforum UM890 Pro 2026 : Ryzen 9 8945HS, Radeon 780M, jusqu\'à 96 GB DDR5, eGPU OCuLink, deux 2.5GbE. Fait tourner Home Assistant + un LLM local 7B — la box évolutive.',
    twitterDescription:
      'Minisforum UM890 Pro (2026) : Ryzen 9 8945HS, Radeon 780M, jusqu\'à 96 GB DDR5, OCuLink pour un GPU externe, deux 2.5GbE. Le serveur IA local évolutif — voici l\'analyse.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs cherchant un mini-PC évolutif pour Home Assistant et l\'IA locale',
    primaryTerm: 'test Minisforum UM890 Pro',
    targetKeywords: [
      'test minisforum um890 pro',
      'minisforum um890 pro ia locale',
      'um890 pro home assistant',
      'um890 pro llm local',
      'ryzen 9 8945hs mini pc oculink',
    ],
    leadAnswerBlock:
      '**Le Minisforum UM890 Pro (Ryzen 9 8945HS, Radeon 780M, jusqu\'à 96 GB DDR5) fait tourner Home Assistant plus un LLM local 7B comme un Beelink SER8, mais ajoute deux ports 2.5GbE, le Wi-Fi 6E et un port OCuLink pour un GPU externe — à partir d\'environ 489 € en barebone jusqu\'à 649 € avec 32 GB (juillet 2026, variable).** Choisissez-le si vous voulez un serveur maison évolutif avec une vraie voie vers une inférence plus rapide des grands modèles.',
    quickAnswerTop: {
      fr: {
        question: 'Le Minisforum UM890 Pro est-il bon pour l\'IA locale et Home Assistant ?',
        answer:
          'Oui — c\'est le choix évolutif de montée en gamme. Le Ryzen 9 8945HS (8 cœurs/16 threads), l\'iGPU Radeon 780M et jusqu\'à 96 GB DDR5 font tourner ensemble Home Assistant, Ollama, Whisper et Frigate ; un modèle 7B est confortable et 13B–14B passent avec plus de RAM. Ses différenciateurs sont deux ports 2.5GbE, le Wi-Fi 6E et un port OCuLink qui connecte un GPU externe pour une inférence des grands modèles vraiment rapide. À partir d\'environ 489 € en barebone jusqu\'à 649 € avec 32 GB (juillet 2026, variable), il coûte un peu plus qu\'un Beelink SER8 mais ajoute une vraie évolutivité.',
        bullets: [
          'CPU : Ryzen 9 8945HS — 8 cœurs / 16 threads, Radeon 780M (12 CU, RDNA 3)',
          'RAM : DDR5-5600 double canal, deux SO-DIMM évolutifs par l\'utilisateur, jusqu\'à 96 GB',
          'LLM local (estimé d\'après les specs) : 7B confortable ; 13B–14B avec plus de RAM ; eGPU OCuLink pour les grands modèles rapides',
          'Réseau/extension : deux 2.5GbE, Wi-Fi 6E, 2× USB4, port eGPU OCuLink',
          'Prix ~489 € en barebone / ~649 € avec 32 GB (juillet 2026, variable) — montée en gamme évolutive',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'L\'essentiel', anchor: 'tldr' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Caractéristiques', anchor: 'specs' },
      { label: 'IA locale & performances LLM', anchor: 'local-ai' },
      { label: 'Avantages & inconvénients', anchor: 'pros-cons' },
      { label: 'Contexte acheteur : droits de douane (2026)', anchor: 'trade-note' },
      { label: 'Où acheter', anchor: 'where-to-buy' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Le Minisforum UM890 Pro est un mini-PC Ryzen 9 8945HS qui fait tourner Home Assistant plus un LLM local 7B et ajoute un port OCuLink pour un GPU externe.' },
      { type: 'plain-terms', content: 'Un mini-PC est un petit ordinateur silencieux toujours allumé. Le UM890 Pro en est un modèle capable qui fait tourner toute une maison connectée et un modèle d\'IA de taille moyenne. Sa particularité est un port qui permet de brancher plus tard une vraie carte graphique externe, afin que les gros modèles d\'IA tournent beaucoup plus vite sans acheter une nouvelle machine.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'L\'essentiel',
        isTldr: true,
        items: [
          'Le UM890 Pro fait tourner Home Assistant, Frigate, Whisper et un LLM local 7B sur une seule box',
          'Ryzen 9 8945HS : 8 cœurs/16 threads, iGPU Radeon 780M, jusqu\'à 96 GB DDR5 sur deux SO-DIMM évolutifs',
          'Différenciateurs face à un [Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) : deux 2.5GbE, Wi-Fi 6E et un port eGPU OCuLink',
          'OCuLink offre une vraie voie vers une inférence rapide des grands modèles avec un GPU externe',
          'À partir de ~489 € en barebone jusqu\'à ~649 € avec 32 GB — la montée en gamme évolutive',
          'Fabriqué en Chine — intégrez les mesures d\'importation US/UE 2026 dans le coût final (voir la note douanière)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — pour qui',
        content:
          '**Achetez le Minisforum UM890 Pro si vous voulez une box IA locale de classe SER8 avec de la marge — plus de RAM, deux 2.5GbE et un port OCuLink pour un GPU externe.** Pour un modèle 7B sur Home Assistant, il se comporte comme un Beelink SER8 ; la raison de payer un peu plus est l\'évolutivité. Si vous ne prévoyez jamais d\'ajouter un GPU ou un second lien réseau, le SER8 économise de l\'argent pour des performances quotidiennes similaires.\n\nSon meilleur cas d\'usage est un **serveur maison évolutif** — commencez avec l\'iGPU et ajoutez plus tard un GPU externe OCuLink pour une inférence 13B–30B rapide. La variante barebone permet aussi de fournir votre propre RAM et votre SSD.',
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Caractéristiques',
        content:
          '**Toutes les caractéristiques ci-dessous ont été vérifiées face aux sources Minisforum et à des tests indépendants en juillet 2026.** Le plafond RAM est de 96 GB sur la page officielle (certains revendeurs indiquent encore 64 GB). Livré en barebone ou préassemblé selon la SKU.',
        columns: ['Caractéristique', 'Minisforum UM890 Pro (8945HS)'],
        rows: [
          { 'Caractéristique': 'CPU', 'Minisforum UM890 Pro (8945HS)': 'AMD Ryzen 9 8945HS (Zen 4)' },
          { 'Caractéristique': 'Cœurs / threads', 'Minisforum UM890 Pro (8945HS)': '8 cœurs / 16 threads, jusqu\'à 5.2 GHz' },
          { 'Caractéristique': 'iGPU', 'Minisforum UM890 Pro (8945HS)': 'AMD Radeon 780M — 12 CU, RDNA 3' },
          { 'Caractéristique': 'NPU', 'Minisforum UM890 Pro (8945HS)': 'Ryzen AI, 16 TOPS (39 TOPS plateforme totale)' },
          { 'Caractéristique': 'RAM', 'Minisforum UM890 Pro (8945HS)': 'DDR5-5600 double canal ; 2 emplacements SO-DIMM ; jusqu\'à 96 GB (évolutif par l\'utilisateur)' },
          { 'Caractéristique': 'Stockage', 'Minisforum UM890 Pro (8945HS)': '2× M.2 2280 PCIe 4.0 ; jusqu\'à 8 TB' },
          { 'Caractéristique': 'Ports', 'Minisforum UM890 Pro (8945HS)': '2× USB4 (40 Gbps, 100 W PD-in), 4× USB-A 10 Gbps, HDMI 2.1, DP 1.4, OCuLink (PCIe 4.0 ×4), 3.5 mm' },
          { 'Caractéristique': 'Réseau', 'Minisforum UM890 Pro (8945HS)': '2× 2.5GbE, Wi-Fi 6E, Bluetooth 5.3' },
          { 'Caractéristique': 'TDP', 'Minisforum UM890 Pro (8945HS)': '45 W de base, configurable jusqu\'à ~70 W' },
          { 'Caractéristique': 'Dimensions', 'Minisforum UM890 Pro (8945HS)': '127 × 130 × 67 mm' },
          { 'Caractéristique': 'OS', 'Minisforum UM890 Pro (8945HS)': 'Windows 11 Pro sur les SKU préassemblées (Linux/Proxmox pris en charge)' },
          { 'Caractéristique': 'Prix (indicatif)', 'Minisforum UM890 Pro (8945HS)': '~489 € barebone / ~649 € avec 32 GB (juillet 2026 — variable, vérifiez le prix actuel)' },
        ],
        items: [
          'Le port OCuLink (PCIe 4.0 ×4, ~64 Gbps) connecte un dock GPU externe — une voie plus rapide que USB4/Thunderbolt pour un GPU dédié.',
          'Deux emplacements SO-DIMM et deux emplacements M.2 évolutifs facilitent l\'extension de la RAM et du stockage.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'IA locale & performances LLM',
        content:
          '**Sur l\'iGPU, le UM890 Pro fait confortablement tourner un modèle 7B et accueille 13B–14B avec plus de RAM ; son vrai atout est le port OCuLink, qui connecte un GPU externe pour une inférence des grands modèles vraiment rapide — tous les chiffres sont estimés d\'après le matériel vérifié, pas un benchmark mesuré.** Sans GPU externe, les grands modèles sont limités par la bande passante mémoire, comme toute box à mémoire partagée.',
        items: [
          'Avec 32 GB, un modèle 7B est confortable ; 64–96 GB ouvrent 13B–14B confortablement et un modèle 30B à faible débit.',
          'OCuLink ajoute un GPU de bureau externe pour une vitesse que l\'iGPU ne peut atteindre — un différenciateur face aux box USB4 seules.',
          'Ollama, LM Studio et llama.cpp tournent bien ; le NPU 16 TOPS n\'est pas utilisé par les runtimes LLM courants.',
          'Deux 2.5GbE conviennent à un serveur maison filaire et fiable ; voir [Ollama sur Home Assistant](/fr/smart-home/home-assistant-ollama-integration).',
          'Pour la VRAM et la profondeur de quantification, voir le [guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026) inter-clusters.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Avantages & inconvénients',
        content: '**Le UM890 Pro est le choix évolutif ; vous payez un peu plus pour la marge de croissance.** Vue équilibrée ci-dessous.',
        items: [
          '**Avantages**',
          'Port OCuLink pour un GPU externe rapide — une vraie voie de mise à niveau pour les grands modèles',
          'Jusqu\'à 96 GB DDR5 sur deux emplacements SO-DIMM évolutifs',
          'Deux 2.5GbE et Wi-Fi 6E — meilleure connectivité qu\'un Beelink SER8',
          'Deux ports USB4 (100 W PD-in) et jusqu\'à quatre écrans simultanés',
          'La variante barebone permet de fournir votre propre RAM et SSD',
          '**Inconvénients**',
          'Coûte plus qu\'un Beelink SER8 pour des performances iGPU seule similaires',
          'Châssis plus grand (67 mm de haut) que la plupart des box ici',
          'Un GPU externe implique coût, place et bruit supplémentaires — plus vraiment « mini » une fois ajouté',
          'Le NPU n\'accélère pas les LLM locaux',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Contexte acheteur : droits de douane & disponibilité (2026)',
        content:
          '**Le UM890 Pro est fabriqué en Chine, son prix final reflète donc les mesures commerciales 2026 — une raison de traiter tout prix comme une cible mouvante.** Les faits ci-dessous sont un contexte acheteur, pas un avis éditorial.',
        items: [
          'États-Unis : les droits Section 301 sur l\'électronique chinoise restent en vigueur en 2026 ; les droits « IEEPA » distincts de 2025 ont été invalidés par la Cour suprême en février 2026 et remplacés par un droit Section 122 temporaire et plafonné. L\'exemption « de minimis » en franchise sous 800 $ pour les imports directs a aussi pris fin.',
          'UE (concerne DE/FR) : il n\'y a pas de droit UE général sur les mini-PC finis, mais depuis juillet 2026 le seuil de franchise de 150 € sur les petits colis directs de Chine a été supprimé et de petits frais de traitement par colis ajoutés.',
          'Hypothèse (tendance macro, pas un fait par produit) : la capacité d\'export chinoise redirigée a maintenu une forte disponibilité de ces marques en UE et aux États-Unis, ce qui soutient globalement des prix compétitifs.',
          'Effet net : vérifiez le prix actuel chez le revendeur avant d\'acheter — les chiffres ici sont indicatifs et datés de juillet 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Où acheter & prix actuel',
        content:
          '**Les prix bougent d\'une semaine à l\'autre, vérifiez donc le prix en direct plutôt que de vous fier à un chiffre figé.** En juillet 2026, le UM890 Pro va d\'environ 489 € en barebone à 649 € avec 32 GB et 729 € avec 64 GB.',
        items: [
          'Décidez barebone vs préassemblé : le barebone est moins cher si vous avez déjà des SO-DIMM DDR5 et un SSD NVMe.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à considérer',
        content: '**Si le UM890 Pro n\'est pas le bon choix, celles-ci l\'encadrent en prix et en évolutivité.**',
        items: [
          '[Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) — le choix rapport qualité-prix avec des performances iGPU similaires pour moins cher, sans OCuLink ni double LAN',
          '[GEEKOM A9 Max](/fr/smart-home/geekom-a9-max-local-ai-review) — box premium avec plafond RAM de 128 GB et Wi-Fi 7',
          '[Beelink EQ14](/fr/smart-home/beelink-eq14-local-ai-review) — box Intel N150 économique pour Home Assistant plus un petit modèle',
          '[GMKtec G3 Plus](/fr/smart-home/gmktec-g3-plus-local-ai-review) — autre option N150 économique avec RAM évolutive',
          'Encore en comparaison ? Partez du [comparatif des meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Le Minisforum UM890 Pro peut-il faire tourner des LLM locaux ?', a: 'Oui. Sur son iGPU Radeon 780M, il fait confortablement tourner un modèle 7B sur Ollama et accueille 13B–14B avec plus de RAM. Avec un GPU externe via OCuLink, il fait tourner les grands modèles bien plus vite. Ces chiffres sont estimés d\'après son matériel vérifié, pas un benchmark figé.' },
          { q: 'Quelle taille de modèle tient dans sa RAM ?', a: 'Avec 32 GB, un modèle 7B est confortable. Passer à 64–96 GB accueille 13B–14B confortablement et un modèle 30B à faible débit sur l\'iGPU. Pour une inférence rapide des grands modèles, ajoutez un GPU via le port OCuLink.' },
          { q: 'À quoi sert le port OCuLink ?', a: 'OCuLink est un connecteur PCIe 4.0 ×4 (environ 64 Gbps) qui relie un dock GPU externe. Il est plus rapide que USB4/Thunderbolt pour un GPU dédié, donnant au UM890 Pro une vraie voie de mise à niveau vers une inférence rapide des grands modèles — la principale raison de le préférer à un Beelink SER8.' },
          { q: 'Le UM890 Pro est-il bon pour Home Assistant et l\'usage permanent ?', a: 'Oui. Il fait tourner ensemble Home Assistant, Ollama, Whisper et Frigate, et ses deux 2.5GbE et le Wi-Fi 6E en font un serveur maison bien connecté. La consommation de base est de 45 W, configurable jusqu\'à environ 70 W.' },
          { q: 'La RAM est-elle évolutive ?', a: 'Oui. Le UM890 Pro utilise deux emplacements SO-DIMM DDR5 évolutifs par l\'utilisateur et prend en charge jusqu\'à 96 GB (certains revendeurs indiquent 64 GB). Il a aussi deux emplacements M.2 pour le stockage.' },
          { q: 'Combien consomme le UM890 Pro ?', a: 'Il fonctionne à 45 W de base et jusqu\'à environ 70 W en charge en mode performance, avec bien moins au repos. Ajouter un GPU externe via OCuLink augmente sensiblement la consommation totale.' },
          { q: 'UM890 Pro ou Beelink SER8 ?', a: 'Au quotidien, ils se comportent pareil sur un modèle 7B. Choisissez le UM890 Pro pour sa voie eGPU OCuLink, ses deux 2.5GbE, le Wi-Fi 6E et le plafond RAM de 96 GB ; choisissez le SER8 pour économiser si vous n\'avez pas besoin de cette extension.' },
          { q: 'Où est fabriqué le Minisforum UM890 Pro, et cela affecte-t-il le prix ?', a: 'Il est fabriqué en Chine. En 2026, les mesures d\'importation US (droits Section 301, fin de l\'exemption de minimis sous 800 $) et la suppression par l\'UE du seuil de 150 € sur les petits colis peuvent affecter le coût final ; vérifiez donc le prix actuel chez le revendeur plutôt que de vous fier à un chiffre figé.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — le comparatif dont ce test fait partie',
          '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026) — inter-clusters : VRAM et profondeur de quantification',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la box exécute réellement',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — intégrer le modèle',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — Pi vs mini-PC vs NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Test Minisforum UM890 Pro (2026) : serveur IA local',
      reviewBody:
        'Le Minisforum UM890 Pro est un mini-PC Ryzen 9 8945HS doté d\'un iGPU Radeon 780M, jusqu\'à 96 GB DDR5 et d\'un port OCuLink pour un GPU externe. Il fait tourner Home Assistant plus un LLM local 7B et constitue la box évolutive de montée en gamme, à partir d\'environ 489 € en barebone (juillet 2026).',
      datePublished: '2026-07-03',
      dateModified: '2026-07-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
        logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' },
      },
      url: 'https://www.promptquorum.com/fr/smart-home/minisforum-um890-pro-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Minisforum UM890 Pro',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Minisforum' },
        description: 'Mini-PC avec AMD Ryzen 9 8945HS, iGPU Radeon 780M, jusqu\'à 96 GB DDR5 et un port eGPU OCuLink, pour l\'IA locale et l\'usage serveur maison.',
      },
    },
  },
}
