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
    title: 'Beelink SER8 Review (2026): Local AI & Home Server',
    seoTitle: 'Beelink SER8 Review 2026 — Local AI & Home Server',
    intro:
      'The Beelink SER8 (AMD Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5) is the best-value mini PC for a local-AI smart home in 2026. At about $650 (July 2026, price volatile) it runs Home Assistant, Frigate, Whisper, and a 7B model on Ollama on one quiet box. This review verifies its specs, sets honest expectations for local-LLM speed, and explains where it beats both cheaper Intel N150 boxes and the pricier GEEKOM A9 Max.',
    metaDescription:
      'Beelink SER8 review 2026: Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5, ~$650. Runs Home Assistant + a 7B local LLM on Ollama. The best-value local-AI mini PC — full spec breakdown.',
    twitterDescription:
      'Beelink SER8 (2026): Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5, ~$650. The best-value mini PC for Home Assistant + a 7B local LLM. Dual SO-DIMM RAM, USB4, 65 W.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing a value mini PC for Home Assistant and a local LLM',
    primaryTerm: 'Beelink SER8 review',
    targetKeywords: [
      'beelink ser8 review',
      'beelink ser8 local ai',
      'beelink ser8 home assistant',
      'beelink ser8 local llm',
      'ryzen 7 8845hs mini pc',
    ],
    leadAnswerBlock:
      '**The Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5) is the best-value mini PC for Home Assistant plus a local LLM in 2026 — it runs the hub, Frigate, Whisper, and a 7B model on Ollama on one box for about $650 (July 2026, volatile).** Its strong 780M iGPU and dual, user-replaceable SO-DIMM RAM make it the default recommendation unless you need the extra headroom of a pricier box.',
    quickAnswerTop: {
      en: {
        question: 'Is the Beelink SER8 good for local AI and Home Assistant?',
        answer:
          'Yes — it is the best-value pick for this job in 2026. The Ryzen 7 8845HS (8 cores/16 threads), Radeon 780M iGPU, and 32 GB of DDR5 run Home Assistant, Ollama, Whisper, and Frigate together, with a 7B model comfortable and 13B–14B (4-bit) usable but limited by memory bandwidth. RAM is on two user-replaceable SO-DIMM slots, so you can move to 64 GB later. At about $650 (July 2026, volatile) it costs roughly half a GEEKOM A9 Max while covering most of the same smart-home work.',
        bullets: [
          'CPU: Ryzen 7 8845HS — 8 cores / 16 threads, Radeon 780M (12 CU, RDNA 3)',
          'RAM: 32 GB DDR5-5600 (2×16 GB), dual SO-DIMM, user-replaceable',
          'Local LLM (estimated from specs): 7B 4-bit comfortable; 13B–14B usable but bandwidth-limited',
          'Ports: USB4 40 Gbps, HDMI 2.1, DP 1.4, 2.5GbE, Wi-Fi 6 (not 6E)',
          'Price ~$650 (July 2026, volatile) — the value default for a local-AI home server',
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
      { type: 'one-sentence', content: 'The Beelink SER8 is a Ryzen 7 8845HS mini PC that runs Home Assistant plus a 7B local LLM on Ollama for about $650, making it the best-value local-AI box in 2026.' },
      { type: 'plain-terms', content: 'A mini PC is a small, quiet always-on computer. The SER8 has a fast AMD processor with strong built-in graphics and 32 GB of memory — enough to run your whole smart home and a mid-size AI chat model at the same time, without the price of a high-end machine. The memory sits in two replaceable slots, so you can add more later.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The SER8 runs Home Assistant, Frigate, Whisper, and a 7B local LLM on one box for about $650',
          'Ryzen 7 8845HS: 8 cores/16 threads, Radeon 780M iGPU, 32 GB DDR5 on two user-replaceable SO-DIMMs',
          'Local-LLM speed comes from the 780M iGPU and DDR5 bandwidth — a 7B model is comfortable',
          'Cheaper and simpler than a [GEEKOM A9 Max](/smart-home/geekom-a9-max-local-ai-review); far more capable than an Intel N150 box',
          'Wi-Fi is 6 (not 6E) and there is one 2.5GbE port — fine for most home servers',
          'Made in China — factor 2026 US/EU import measures into landed cost (see trade note)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — Who Should Buy It',
        content:
          '**Buy the Beelink SER8 if you want the cheapest box that still runs a 7B local model at usable speed alongside Home Assistant.** For most people building a local-AI smart home it is the right default: a strong Radeon 780M iGPU, 32 GB of DDR5, and dual replaceable RAM slots at about half the price of a GEEKOM A9 Max.\n\nIts single strongest use case is an **all-in-one home server** — Home Assistant, Ollama, Whisper, and Frigate on one quiet machine. Step up only if you need a larger model (more RAM headroom) or an external-GPU path; step down to an Intel N150 box only if a tiny model is enough.',
        affiliateLinks: [
          { label: 'Check current price — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Specifications',
        content:
          '**All specs below were verified against Beelink and independent review sources in July 2026.** RAM as sold varies by SKU (24, 32, or 64 GB); this table reflects the mainstream 32 GB / 1 TB unit.',
        columns: ['Spec', 'Beelink SER8 (8845HS)'],
        rows: [
          { Spec: 'CPU', 'Beelink SER8 (8845HS)': 'AMD Ryzen 7 8845HS (Zen 4, 4 nm)' },
          { Spec: 'Cores / threads', 'Beelink SER8 (8845HS)': '8 cores / 16 threads, up to 5.1 GHz' },
          { Spec: 'iGPU', 'Beelink SER8 (8845HS)': 'AMD Radeon 780M — 12 CU, RDNA 3' },
          { Spec: 'NPU', 'Beelink SER8 (8845HS)': 'Ryzen AI, 16 TOPS (XDNA gen 1)' },
          { Spec: 'RAM', 'Beelink SER8 (8845HS)': '32 GB DDR5-5600 (2×16 GB); dual SO-DIMM; user-replaceable (SKUs up to 64 GB)' },
          { Spec: 'Storage', 'Beelink SER8 (8845HS)': '1 TB NVMe; 2× M.2 2280 PCIe 4.0; up to 8 TB' },
          { Spec: 'Ports', 'Beelink SER8 (8845HS)': '1× USB4 (40 Gbps), 3× USB-A 10 Gbps, 2× USB-A 2.0, 1× USB-C 10 Gbps, HDMI 2.1, DP 1.4, 3.5 mm' },
          { Spec: 'Networking', 'Beelink SER8 (8845HS)': '1× 2.5GbE, Wi-Fi 6 (not 6E), Bluetooth 5.2' },
          { Spec: 'TDP', 'Beelink SER8 (8845HS)': '54–65 W (runs at 65 W sustained)' },
          { Spec: 'Dimensions', 'Beelink SER8 (8845HS)': '135 × 135 × 44.7 mm, ~0.75 kg' },
          { Spec: 'OS', 'Beelink SER8 (8845HS)': 'Windows 11 Pro (Linux/Proxmox install supported)' },
          { Spec: 'Price (indicative)', 'Beelink SER8 (8845HS)': '~$650 (July 2026 — volatile, check current price)' },
        ],
        items: [
          'No discrete GPU: all AI inference runs on the CPU and Radeon 780M iGPU sharing system RAM.',
          'Dual SO-DIMM slots are user-replaceable; the practical DDR5 ceiling on this platform is around 96 GB.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Local AI & LLM Performance',
        content:
          '**With 32 GB of RAM the SER8 comfortably runs a 7B model on Ollama and can load a 13B–14B model at 4-bit, though larger models are limited by memory bandwidth rather than capacity — all figures estimated from the verified hardware, not a measured benchmark.** The Radeon 780M is the key part: on dual-channel DDR5-5600 it keeps a 7B assistant responsive next to Home Assistant.',
        items: [
          'Ollama, LM Studio, and llama.cpp run well; the 780M is used through Vulkan or ROCm backends.',
          'A 7B model is the comfortable sweet spot; 13B–14B works for non-interactive use but feels slower.',
          '32B-class models fit only tightly in 32 GB and run slowly — step up to a 64 GB SKU for those.',
          'The 16-TOPS NPU is not used by mainstream LLM runtimes; the iGPU and RAM bandwidth set latency.',
          'See [Ollama on Home Assistant](/smart-home/home-assistant-ollama-integration) to connect the model, and the [local LLM hardware guide](/local-llms/local-llm-hardware-guide-2026) for VRAM depth.',
        ],
        affiliateLinks: [
          { label: 'Check current price — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Pros & Cons',
        content: '**The SER8 is the value benchmark; its compromises are minor for a home server.** Balanced view below.',
        items: [
          '**Pros**',
          'Best value for a capable local-AI box — ~$650 for a 7B-ready machine',
          'Strong Radeon 780M iGPU and 32 GB DDR5 handle Home Assistant plus a 7B model',
          'Dual user-replaceable SO-DIMM slots and two M.2 slots — upgradeable',
          'USB4, HDMI 2.1, and DP 1.4 support triple 4K output',
          'Runs at 65 W — modest for an always-on server',
          '**Cons**',
          'Wi-Fi is 6, not 6E — use the 2.5GbE port for a reliable wired link',
          'Only one 2.5GbE port (rivals like the UM890 Pro offer two)',
          'Not enough RAM at 32 GB for 30B-plus models without an upgrade',
          'The NPU does not accelerate local LLMs',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Buyer Context: Tariffs & Availability (2026)',
        content:
          '**The SER8 is manufactured in China, so its landed price reflects 2026 trade measures — a reason to treat any price as a moving target.** The facts below are buyer context, not editorial opinion.',
        items: [
          'US: Section 301 tariffs on Chinese electronics remain in force in 2026; the separate 2025 "IEEPA" tariffs were struck down by the Supreme Court in February 2026 and replaced by a temporary, capped Section 122 tariff. The sub-$800 duty-free "de minimis" exemption for direct imports has also ended.',
          'EU (affects DE/FR): there is no broad EU tariff on finished mini PCs, but from July 2026 the €150 duty-free threshold on low-value direct-from-China parcels was removed and a small per-parcel handling fee added.',
          'Assumption (macro trend, not a per-product fact): redirected Chinese export capacity has kept availability of these brands high in the EU and US, which broadly supports competitive pricing.',
          'Net effect: verify the current price at the retailer before buying — the ~$650 figure here is indicative and date-stamped July 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Buy & Current Price',
        content:
          '**Prices move week to week, so check the live price rather than trusting a fixed figure.** As of July 2026 the 32 GB / 1 TB SER8 clusters around $650, with the official store often higher than street listings.',
        items: [
          'Confirm the RAM SKU (24, 32, or 64 GB) — the 32 GB unit is the value sweet spot for a 7B model.',
        ],
        affiliateLinks: [
          { label: 'Check current price — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Consider',
        content: '**If the SER8 is not the right fit, four boxes bracket it on price and capability.**',
        items: [
          '[GEEKOM A9 Max](/smart-home/geekom-a9-max-local-ai-review) — the headroom pick: 128 GB RAM ceiling and Wi-Fi 7, for roughly double the price',
          '[Minisforum UM890 Pro](/smart-home/minisforum-um890-pro-local-ai-review) — similar Radeon 780M, but adds dual 2.5GbE, Wi-Fi 6E, and an OCuLink eGPU port',
          '[Beelink EQ14](/smart-home/beelink-eq14-local-ai-review) — budget Intel N150 box for Home Assistant plus a tiny model',
          '[GMKtec G3 Plus](/smart-home/gmktec-g3-plus-local-ai-review) — another budget N150 option with upgradeable RAM',
          'Still comparing? Start from the [best mini PCs for Home Assistant + local AI roundup](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can the Beelink SER8 run local LLMs?', a: 'Yes. With 32 GB of RAM and the Radeon 780M iGPU it comfortably runs a 7B model on Ollama and can load a 13B–14B model at 4-bit. This is estimated from its verified hardware rather than a fixed benchmark, because speed depends on the model, quantization, and backend.' },
          { q: 'How big a model fits in its RAM?', a: 'At 32 GB, a 7B model is comfortable and a 13B–14B model at 4-bit is usable but slower. A 30B-class model fits only tightly and runs slowly; for those, choose the 64 GB SKU or a box with a higher RAM ceiling.' },
          { q: 'Is the SER8 good for Home Assistant and always-on use?', a: 'Yes. It runs Home Assistant, Ollama, Whisper, and Frigate together on 32 GB and draws about 65 W under load, so continuous operation is inexpensive. Use the 2.5GbE port for a reliable wired connection.' },
          { q: 'Is the RAM upgradeable?', a: 'Yes. The SER8 uses two standard DDR5 SO-DIMM slots that are user-replaceable, so you can start at 32 GB and move to 64 GB later. It also has two M.2 slots for storage expansion.' },
          { q: 'Does the SER8 have Wi-Fi 6E?', a: 'No. The SER8 ships with Wi-Fi 6 (an Intel AX200 module), not Wi-Fi 6E. For a home server this rarely matters — a wired 2.5GbE link is more reliable than any Wi-Fi band.' },
          { q: 'How much power does the SER8 use?', a: 'It runs at up to 65 W under sustained load and far less at idle, so leaving it on continuously is cheap. The exact figure depends on the workload and the power profile you choose.' },
          { q: 'SER8 or GEEKOM A9 Max?', a: 'The SER8 is the value choice and covers most local-AI smart-home needs for about $650. Choose the A9 Max only if you need its 128 GB RAM ceiling, Wi-Fi 7, or extra vision headroom, which roughly doubles the cost.' },
          { q: 'Where is the Beelink SER8 made, and does that affect price?', a: 'It is manufactured in China. In 2026 US import measures (Section 301 tariffs, the end of the sub-$800 de minimis exemption) and the EU removal of the €150 low-value parcel exemption can affect landed cost, so check the current retailer price rather than relying on a fixed number.' },
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
      name: 'Beelink SER8 Review (2026): Local AI & Home Server',
      reviewBody:
        'The Beelink SER8 is a Ryzen 7 8845HS mini PC with a Radeon 780M iGPU and 32 GB DDR5 that runs Home Assistant plus a 7B local LLM on Ollama for about $650 (July 2026). It is the best-value local-AI mini PC of 2026.',
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
      url: 'https://www.promptquorum.com/smart-home/beelink-ser8-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink SER8',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'Mini PC with AMD Ryzen 7 8845HS, Radeon 780M iGPU, and 32 GB DDR5, for local AI and home-server use.',
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
    title: 'Beelink SER8 Test (2026): Lokale KI & Heimserver',
    seoTitle: 'Beelink SER8 Test 2026 — Lokale KI & Heimserver',
    intro:
      'Der Beelink SER8 (AMD Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5) ist der Mini-PC mit dem besten Preis-Leistungs-Verhältnis für ein lokales KI-Smart-Home im Jahr 2026. Für rund 549 € (Juli 2026, Preis schwankt) betreibt er Home Assistant, Frigate, Whisper und ein 7B-Modell auf Ollama auf einer einzigen leisen Box. Dieser Test prüft die Spezifikationen, setzt ehrliche Erwartungen an die Geschwindigkeit lokaler LLMs und erklärt, wo er sowohl günstigere Intel-N150-Boxen als auch den teureren GEEKOM A9 Max schlägt.',
    metaDescription:
      'Beelink SER8 Test 2026: Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5, ca. 549 €. Betreibt Home Assistant plus ein 7B-LLM lokal auf Ollama. Der Mini-PC mit dem besten Preis-Leistungs-Verhältnis für lokale KI — komplette Spec-Analyse.',
    twitterDescription:
      'Beelink SER8 (2026): Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5, ca. 549 €. Der Mini-PC mit dem besten Preis-Leistungs-Verhältnis für Home Assistant plus ein lokales 7B-LLM. Dual-SO-DIMM-RAM, USB4, 65 W.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die einen preiswerten Mini-PC für Home Assistant und ein lokales LLM auswählen',
    primaryTerm: 'Beelink SER8 Test',
    targetKeywords: [
      'beelink ser8 test',
      'beelink ser8 lokale ki',
      'beelink ser8 home assistant',
      'beelink ser8 lokales llm',
      'ryzen 7 8845hs mini pc',
    ],
    leadAnswerBlock:
      '**Der Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5) ist im Jahr 2026 der Mini-PC mit dem besten Preis-Leistungs-Verhältnis für Home Assistant plus ein lokales LLM — er betreibt die Zentrale, Frigate, Whisper und ein 7B-Modell auf Ollama auf einer Box für rund 549 € (Juli 2026, schwankend).** Seine starke Radeon-780M-iGPU und der duale, vom Nutzer austauschbare SO-DIMM-RAM machen ihn zur Standardempfehlung, sofern Sie nicht den zusätzlichen Spielraum einer teureren Box benötigen.',
    quickAnswerTop: {
      de: {
        question: 'Ist der Beelink SER8 für lokale KI und Home Assistant geeignet?',
        answer:
          'Ja — er ist 2026 die preiswerteste Wahl für diese Aufgabe. Der Ryzen 7 8845HS (8 Kerne/16 Threads), die Radeon-780M-iGPU und 32 GB DDR5 betreiben Home Assistant, Ollama, Whisper und Frigate gemeinsam, wobei ein 7B-Modell komfortabel läuft und 13B–14B (4-Bit) nutzbar, aber durch die Speicherbandbreite begrenzt ist. Der RAM sitzt auf zwei vom Nutzer austauschbaren SO-DIMM-Steckplätzen, sodass Sie später auf 64 GB aufrüsten können. Für rund 549 € (Juli 2026, schwankend) kostet er etwa die Hälfte eines GEEKOM A9 Max und deckt dabei den Großteil derselben Smart-Home-Arbeit ab.',
        bullets: [
          'CPU: Ryzen 7 8845HS — 8 Kerne / 16 Threads, Radeon 780M (12 CU, RDNA 3)',
          'RAM: 32 GB DDR5-5600 (2×16 GB), dual SO-DIMM, vom Nutzer austauschbar',
          'Lokales LLM (aus Spezifikationen geschätzt): 7B 4-Bit komfortabel; 13B–14B nutzbar, aber bandbreitenbegrenzt',
          'Anschlüsse: USB4 40 Gbps, HDMI 2.1, DP 1.4, 2.5GbE, Wi-Fi 6 (nicht 6E)',
          'Preis ca. 549 € (Juli 2026, schwankend) — der Preis-Leistungs-Standard für einen lokalen KI-Heimserver',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Spezifikationen', anchor: 'specs' },
      { label: 'Lokale KI & LLM-Leistung', anchor: 'local-ai' },
      { label: 'Vorteile & Nachteile', anchor: 'pros-cons' },
      { label: 'Käuferkontext: Zölle (2026)', anchor: 'trade-note' },
      { label: 'Wo kaufen', anchor: 'where-to-buy' },
      { label: 'Alternativen', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Der Beelink SER8 ist ein Ryzen-7-8845HS-Mini-PC, der Home Assistant plus ein lokales 7B-LLM auf Ollama für rund 549 € betreibt und damit 2026 die preiswerteste lokale KI-Box ist.' },
      { type: 'plain-terms', content: 'Ein Mini-PC ist ein kleiner, leiser Dauerbetrieb-Rechner. Der SER8 hat einen schnellen AMD-Prozessor mit starker integrierter Grafik und 32 GB Arbeitsspeicher — genug, um Ihr komplettes Smart Home und ein mittelgroßes KI-Chat-Modell gleichzeitig zu betreiben, ohne den Preis einer High-End-Maschine. Der Speicher sitzt in zwei austauschbaren Steckplätzen, sodass Sie später mehr hinzufügen können.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Der SER8 betreibt Home Assistant, Frigate, Whisper und ein lokales 7B-LLM auf einer Box für rund 549 €',
          'Ryzen 7 8845HS: 8 Kerne/16 Threads, Radeon-780M-iGPU, 32 GB DDR5 auf zwei vom Nutzer austauschbaren SO-DIMMs',
          'Die Geschwindigkeit lokaler LLMs kommt von der 780M-iGPU und der DDR5-Bandbreite — ein 7B-Modell läuft komfortabel',
          'Günstiger und einfacher als ein [GEEKOM A9 Max](/de/smart-home/geekom-a9-max-local-ai-review); weit leistungsfähiger als eine Intel-N150-Box',
          'WLAN ist Wi-Fi 6 (nicht 6E) und es gibt einen 2.5GbE-Port — für die meisten Heimserver ausreichend',
          'In China gefertigt — beziehen Sie die US-/EU-Einfuhrmaßnahmen 2026 in die Landepreise ein (siehe Zollhinweis)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit — Für wen er sich lohnt',
        content:
          '**Kaufen Sie den Beelink SER8, wenn Sie die günstigste Box wollen, die neben Home Assistant weiterhin ein lokales 7B-Modell mit brauchbarer Geschwindigkeit betreibt.** Für die meisten, die ein lokales KI-Smart-Home aufbauen, ist er die richtige Standardwahl: eine starke Radeon-780M-iGPU, 32 GB DDR5 und zwei austauschbare RAM-Steckplätze für etwa die Hälfte des Preises eines GEEKOM A9 Max.\n\nSein stärkster Einsatzzweck ist ein **All-in-One-Heimserver** — Home Assistant, Ollama, Whisper und Frigate auf einer leisen Maschine. Steigen Sie nur dann auf, wenn Sie ein größeres Modell (mehr RAM-Spielraum) oder einen externen GPU-Pfad benötigen; steigen Sie nur dann auf eine Intel-N150-Box ab, wenn ein winziges Modell genügt.',
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Spezifikationen',
        content:
          '**Alle Spezifikationen unten wurden im Juli 2026 gegen Beelink und unabhängige Testquellen geprüft.** Der ab Werk verbaute RAM variiert je nach SKU (24, 32 oder 64 GB); diese Tabelle bildet die verbreitete 32-GB-/1-TB-Einheit ab.',
        columns: ['Spezifikation', 'Beelink SER8 (8845HS)'],
        rows: [
          { Spezifikation: 'CPU', 'Beelink SER8 (8845HS)': 'AMD Ryzen 7 8845HS (Zen 4, 4 nm)' },
          { Spezifikation: 'Kerne / Threads', 'Beelink SER8 (8845HS)': '8 Kerne / 16 Threads, bis zu 5,1 GHz' },
          { Spezifikation: 'iGPU', 'Beelink SER8 (8845HS)': 'AMD Radeon 780M — 12 CU, RDNA 3' },
          { Spezifikation: 'NPU', 'Beelink SER8 (8845HS)': 'Ryzen AI, 16 TOPS (XDNA Gen 1)' },
          { Spezifikation: 'RAM', 'Beelink SER8 (8845HS)': '32 GB DDR5-5600 (2×16 GB); dual SO-DIMM; vom Nutzer austauschbar (SKUs bis 64 GB)' },
          { Spezifikation: 'Speicher', 'Beelink SER8 (8845HS)': '1 TB NVMe; 2× M.2 2280 PCIe 4.0; bis zu 8 TB' },
          { Spezifikation: 'Anschlüsse', 'Beelink SER8 (8845HS)': '1× USB4 (40 Gbps), 3× USB-A 10 Gbps, 2× USB-A 2.0, 1× USB-C 10 Gbps, HDMI 2.1, DP 1.4, 3,5 mm' },
          { Spezifikation: 'Netzwerk', 'Beelink SER8 (8845HS)': '1× 2.5GbE, Wi-Fi 6 (nicht 6E), Bluetooth 5.2' },
          { Spezifikation: 'TDP', 'Beelink SER8 (8845HS)': '54–65 W (läuft dauerhaft mit 65 W)' },
          { Spezifikation: 'Abmessungen', 'Beelink SER8 (8845HS)': '135 × 135 × 44,7 mm, ~0,75 kg' },
          { Spezifikation: 'Betriebssystem', 'Beelink SER8 (8845HS)': 'Windows 11 Pro (Installation von Linux/Proxmox unterstützt)' },
          { Spezifikation: 'Preis (indikativ)', 'Beelink SER8 (8845HS)': 'ca. 549 € (Juli 2026 — schwankend, aktuellen Preis prüfen)' },
        ],
        items: [
          'Keine dedizierte GPU: die gesamte KI-Inferenz läuft auf der CPU und der Radeon-780M-iGPU, die sich den System-RAM teilen.',
          'Die dualen SO-DIMM-Steckplätze sind vom Nutzer austauschbar; die praktische DDR5-Obergrenze auf dieser Plattform liegt bei rund 96 GB.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Lokale KI & LLM-Leistung',
        content:
          '**Mit 32 GB RAM betreibt der SER8 komfortabel ein 7B-Modell auf Ollama und kann ein 13B–14B-Modell in 4-Bit laden, wobei größere Modelle eher durch die Speicherbandbreite als durch die Kapazität begrenzt sind — alle Angaben sind aus der geprüften Hardware geschätzt, kein gemessener Benchmark.** Die Radeon 780M ist der entscheidende Teil: auf Dual-Channel-DDR5-5600 hält sie einen 7B-Assistenten neben Home Assistant reaktionsschnell.',
        items: [
          'Ollama, LM Studio und llama.cpp laufen gut; die 780M wird über die Vulkan- oder ROCm-Backends genutzt.',
          'Ein 7B-Modell ist der komfortable Sweetspot; 13B–14B funktioniert für nicht-interaktive Nutzung, wirkt aber langsamer.',
          'Modelle der 32B-Klasse passen nur knapp in 32 GB und laufen langsam — steigen Sie dafür auf eine 64-GB-SKU um.',
          'Die 16-TOPS-NPU wird von gängigen LLM-Laufzeiten nicht genutzt; iGPU und RAM-Bandbreite bestimmen die Latenz.',
          'Siehe [Ollama auf Home Assistant](/de/smart-home/home-assistant-ollama-integration), um das Modell anzubinden, und den [Leitfaden zu lokaler LLM-Hardware](/de/local-llms/local-llm-hardware-guide-2026) für die VRAM-Tiefe.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Vorteile & Nachteile',
        content: '**Der SER8 ist der Preis-Leistungs-Maßstab; seine Kompromisse sind für einen Heimserver gering.** Ausgewogene Betrachtung unten.',
        items: [
          '**Vorteile**',
          'Bestes Preis-Leistungs-Verhältnis für eine leistungsfähige lokale KI-Box — ca. 549 € für eine 7B-taugliche Maschine',
          'Starke Radeon-780M-iGPU und 32 GB DDR5 bewältigen Home Assistant plus ein 7B-Modell',
          'Zwei vom Nutzer austauschbare SO-DIMM-Steckplätze und zwei M.2-Steckplätze — aufrüstbar',
          'USB4, HDMI 2.1 und DP 1.4 unterstützen dreifache 4K-Ausgabe',
          'Läuft mit 65 W — bescheiden für einen Dauerbetrieb-Server',
          '**Nachteile**',
          'WLAN ist Wi-Fi 6, nicht 6E — nutzen Sie den 2.5GbE-Port für eine zuverlässige Kabelverbindung',
          'Nur ein 2.5GbE-Port (Rivalen wie der UM890 Pro bieten zwei)',
          'Mit 32 GB nicht genug RAM für Modelle ab 30B ohne Aufrüstung',
          'Die NPU beschleunigt lokale LLMs nicht',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Käuferkontext: Zölle & Verfügbarkeit (2026)',
        content:
          '**Der SER8 wird in China gefertigt, sodass sein Landepreis die Handelsmaßnahmen 2026 widerspiegelt — ein Grund, jeden Preis als bewegliches Ziel zu behandeln.** Die Fakten unten sind Käuferkontext, keine redaktionelle Meinung.',
        items: [
          'USA: Die Section-301-Zölle auf chinesische Elektronik bleiben 2026 in Kraft; die separaten „IEEPA"-Zölle von 2025 wurden im Februar 2026 vom Supreme Court gekippt und durch einen befristeten, gedeckelten Section-122-Zoll ersetzt. Die zollfreie „De-minimis"-Ausnahme unter 800 $ für Direktimporte ist ebenfalls entfallen.',
          'EU (betrifft DE/FR): Es gibt keinen breiten EU-Zoll auf fertige Mini-PCs, aber ab Juli 2026 wurde die Freigrenze von 150 € für geringwertige Direktpakete aus China gestrichen und eine kleine Bearbeitungsgebühr pro Paket hinzugefügt.',
          'Annahme (Makrotrend, keine Produkttatsache): Umgeleitete chinesische Exportkapazitäten haben die Verfügbarkeit dieser Marken in EU und USA hoch gehalten, was insgesamt eine wettbewerbsfähige Preisgestaltung stützt.',
          'Nettoeffekt: Prüfen Sie vor dem Kauf den aktuellen Preis beim Händler — die Angabe von rund 549 € hier ist indikativ und auf Juli 2026 datiert.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Wo kaufen & aktueller Preis',
        content:
          '**Die Preise bewegen sich Woche für Woche, prüfen Sie daher den Live-Preis, statt einer festen Angabe zu vertrauen.** Stand Juli 2026 liegt der 32-GB-/1-TB-SER8 um rund 549 €, wobei der offizielle Store oft höher liegt als Straßenpreise.',
        items: [
          'Bestätigen Sie die RAM-SKU (24, 32 oder 64 GB) — die 32-GB-Einheit ist der Preis-Leistungs-Sweetspot für ein 7B-Modell.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen im Vergleich',
        content: '**Wenn der SER8 nicht passt, rahmen ihn vier Boxen bei Preis und Leistung ein.**',
        items: [
          '[GEEKOM A9 Max](/de/smart-home/geekom-a9-max-local-ai-review) — die Wahl für Spielraum: 128 GB RAM-Obergrenze und Wi-Fi 7, für etwa den doppelten Preis',
          '[Minisforum UM890 Pro](/de/smart-home/minisforum-um890-pro-local-ai-review) — ähnliche Radeon 780M, aber mit dualem 2.5GbE, Wi-Fi 6E und einem OCuLink-eGPU-Port',
          '[Beelink EQ14](/de/smart-home/beelink-eq14-local-ai-review) — günstige Intel-N150-Box für Home Assistant plus ein winziges Modell',
          '[GMKtec G3 Plus](/de/smart-home/gmktec-g3-plus-local-ai-review) — eine weitere günstige N150-Option mit aufrüstbarem RAM',
          'Noch am Vergleichen? Starten Sie mit dem [Überblick der besten Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann der Beelink SER8 lokale LLMs betreiben?', a: 'Ja. Mit 32 GB RAM und der Radeon-780M-iGPU betreibt er komfortabel ein 7B-Modell auf Ollama und kann ein 13B–14B-Modell in 4-Bit laden. Dies ist aus der geprüften Hardware geschätzt und kein fester Benchmark, da die Geschwindigkeit vom Modell, der Quantisierung und dem Backend abhängt.' },
          { q: 'Wie groß darf ein Modell für seinen RAM sein?', a: 'Bei 32 GB läuft ein 7B-Modell komfortabel und ein 13B–14B-Modell in 4-Bit ist nutzbar, aber langsamer. Ein Modell der 30B-Klasse passt nur knapp und läuft langsam; wählen Sie dafür die 64-GB-SKU oder eine Box mit höherer RAM-Obergrenze.' },
          { q: 'Ist der SER8 gut für Home Assistant und den Dauerbetrieb?', a: 'Ja. Er betreibt Home Assistant, Ollama, Whisper und Frigate gemeinsam auf 32 GB und zieht unter Last rund 65 W, sodass der Dauerbetrieb günstig ist. Nutzen Sie den 2.5GbE-Port für eine zuverlässige Kabelverbindung.' },
          { q: 'Ist der RAM aufrüstbar?', a: 'Ja. Der SER8 nutzt zwei standardmäßige DDR5-SO-DIMM-Steckplätze, die vom Nutzer austauschbar sind, sodass Sie bei 32 GB beginnen und später auf 64 GB umsteigen können. Er hat außerdem zwei M.2-Steckplätze für die Speichererweiterung.' },
          { q: 'Hat der SER8 Wi-Fi 6E?', a: 'Nein. Der SER8 wird mit Wi-Fi 6 (einem Intel-AX200-Modul) ausgeliefert, nicht mit Wi-Fi 6E. Für einen Heimserver spielt das selten eine Rolle — eine kabelgebundene 2.5GbE-Verbindung ist zuverlässiger als jedes WLAN-Band.' },
          { q: 'Wie viel Strom verbraucht der SER8?', a: 'Er läuft unter Dauerlast mit bis zu 65 W und im Leerlauf weit weniger, sodass der Dauerbetrieb günstig ist. Der genaue Wert hängt von der Arbeitslast und dem gewählten Energieprofil ab.' },
          { q: 'SER8 oder GEEKOM A9 Max?', a: 'Der SER8 ist die Preis-Leistungs-Wahl und deckt die meisten lokalen KI-Smart-Home-Anforderungen für rund 549 € ab. Wählen Sie den A9 Max nur, wenn Sie seine 128-GB-RAM-Obergrenze, Wi-Fi 7 oder zusätzlichen Vision-Spielraum benötigen, was die Kosten etwa verdoppelt.' },
          { q: 'Wo wird der Beelink SER8 hergestellt, und beeinflusst das den Preis?', a: 'Er wird in China gefertigt. 2026 können US-Einfuhrmaßnahmen (Section-301-Zölle, das Ende der De-minimis-Ausnahme unter 800 $) und die EU-Streichung der Freigrenze von 150 € für geringwertige Pakete den Landepreis beeinflussen, prüfen Sie daher den aktuellen Händlerpreis, statt sich auf eine feste Zahl zu verlassen.' },
          { q: 'Wie viel kostet der Beelink SER8 in Deutschland und der EU?', a: 'Stand Juli 2026 liegt die 32-GB-/1-TB-Einheit bei rund 549 € auf Amazon.de und im EU-Store von Beelink, der Preis schwankt jedoch. Seit Juli 2026 ist die EU-Freigrenze von 150 € für geringwertige Direktpakete aus China entfallen und eine kleine Bearbeitungsgebühr pro Paket hinzugekommen, sodass ein Kauf bei einem in der EU gelagerten Händler den Zoll am Zoll vermeiden kann. Prüfen Sie immer den Live-Preis, da Straßenpreise oft unter dem offiziellen Store liegen.' },
          { q: 'Ist der Beelink SER8 DSGVO-konform für den deutschen Mittelstand?', a: 'Ja, und genau das ist eine seiner Stärken. Weil der SER8 das LLM, Whisper und Frigate lokal betreibt, verlassen Sprach-, Video- und Chat-Daten Ihr Netzwerk nicht — das unterstützt die Datenresidenz- und Verarbeitungspflichten nach DSGVO-Artikel 28 und passt zum Ansatz der BSI-Grundschutz-Kataloge. Für den deutschen Mittelstand ist eine lokale Box wie diese eine kostengünstige Möglichkeit, KI-Funktionen bereitzustellen, ohne personenbezogene Daten an eine Cloud außerhalb der EU zu senden.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) — der Überblick, zu dem dieser Test gehört',
          '[Leitfaden zu lokaler LLM-Hardware](/de/local-llms/local-llm-hardware-guide-2026) — clusterübergreifend: VRAM- und Quantisierungstiefe',
          '[Ihr Smart Home auf einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) — was die Box tatsächlich betreibt',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) — das Modell anbinden',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) — Pi vs. Mini-PC vs. NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Beelink SER8 Test (2026): Lokale KI & Heimserver',
      reviewBody:
        'Der Beelink SER8 ist ein Ryzen-7-8845HS-Mini-PC mit Radeon-780M-iGPU und 32 GB DDR5, der Home Assistant plus ein lokales 7B-LLM auf Ollama für rund 549 € (Juli 2026) betreibt. Er ist der Mini-PC mit dem besten Preis-Leistungs-Verhältnis für lokale KI im Jahr 2026.',
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
      url: 'https://www.promptquorum.com/de/smart-home/beelink-ser8-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink SER8',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'Mini-PC mit AMD Ryzen 7 8845HS, Radeon-780M-iGPU und 32 GB DDR5, für lokale KI und den Einsatz als Heimserver.',
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
    title: 'Test Beelink SER8 (2026) : IA locale et serveur maison',
    seoTitle: 'Test Beelink SER8 2026 — IA locale et serveur maison',
    intro:
      'Le Beelink SER8 (AMD Ryzen 7 8845HS, Radeon 780M, 32 Go DDR5) est le mini-PC au meilleur rapport qualité-prix pour une maison connectée à IA locale en 2026. À environ 549 € (juillet 2026, prix volatil), il fait tourner Home Assistant, Frigate, Whisper et un modèle 7B sur Ollama sur une seule machine silencieuse. Ce test vérifie ses spécifications, fixe des attentes honnêtes sur la vitesse des LLM locaux et explique où il surpasse à la fois les boîtiers Intel N150 moins chers et le GEEKOM A9 Max plus onéreux.',
    metaDescription:
      'Test Beelink SER8 2026 : Ryzen 7 8845HS, Radeon 780M, 32 Go DDR5, env. 549 €. Fait tourner Home Assistant plus un LLM 7B local sur Ollama. Le mini-PC IA locale au meilleur rapport qualité-prix — analyse complète des specs.',
    twitterDescription:
      'Beelink SER8 (2026) : Ryzen 7 8845HS, Radeon 780M, 32 Go DDR5, env. 549 €. Le mini-PC au meilleur rapport qualité-prix pour Home Assistant plus un LLM 7B local. RAM double SO-DIMM, USB4, 65 W.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs choisissant un mini-PC économique pour Home Assistant et un LLM local',
    primaryTerm: 'test Beelink SER8',
    targetKeywords: [
      'test beelink ser8',
      'beelink ser8 ia locale',
      'beelink ser8 home assistant',
      'beelink ser8 llm local',
      'ryzen 7 8845hs mini pc',
    ],
    leadAnswerBlock:
      "**Le Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 Go DDR5) est le mini-PC au meilleur rapport qualité-prix pour Home Assistant plus un LLM local en 2026 — il fait tourner le hub, Frigate, Whisper et un modèle 7B sur Ollama sur une seule machine pour environ 549 € (juillet 2026, volatil).** Son iGPU Radeon 780M performant et sa RAM double SO-DIMM remplaçable par l'utilisateur en font la recommandation par défaut, sauf si vous avez besoin de la marge supplémentaire d'un boîtier plus cher.",
    quickAnswerTop: {
      fr: {
        question: 'Le Beelink SER8 est-il bon pour l\'IA locale et Home Assistant ?',
        answer:
          "Oui — c'est le choix au meilleur rapport qualité-prix pour cette tâche en 2026. Le Ryzen 7 8845HS (8 cœurs/16 threads), l'iGPU Radeon 780M et 32 Go de DDR5 font tourner Home Assistant, Ollama, Whisper et Frigate ensemble, avec un modèle 7B à l'aise et un 13B–14B (4 bits) utilisable mais limité par la bande passante mémoire. La RAM occupe deux emplacements SO-DIMM remplaçables par l'utilisateur, vous pouvez donc passer à 64 Go plus tard. À environ 549 € (juillet 2026, volatil), il coûte grosso modo la moitié d'un GEEKOM A9 Max tout en couvrant l'essentiel du même travail domotique.",
        bullets: [
          'CPU : Ryzen 7 8845HS — 8 cœurs / 16 threads, Radeon 780M (12 CU, RDNA 3)',
          'RAM : 32 Go DDR5-5600 (2×16 Go), double SO-DIMM, remplaçable par l\'utilisateur',
          'LLM local (estimé d\'après les specs) : 7B 4 bits à l\'aise ; 13B–14B utilisable mais limité par la bande passante',
          'Ports : USB4 40 Gbps, HDMI 2.1, DP 1.4, 2.5GbE, Wi-Fi 6 (pas 6E)',
          'Prix env. 549 € (juillet 2026, volatil) — la référence qualité-prix pour un serveur maison à IA locale',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Spécifications', anchor: 'specs' },
      { label: 'IA locale et performances LLM', anchor: 'local-ai' },
      { label: 'Avantages et inconvénients', anchor: 'pros-cons' },
      { label: 'Contexte acheteur : droits de douane (2026)', anchor: 'trade-note' },
      { label: 'Où acheter', anchor: 'where-to-buy' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Le Beelink SER8 est un mini-PC Ryzen 7 8845HS qui fait tourner Home Assistant plus un LLM 7B local sur Ollama pour environ 549 €, ce qui en fait le boîtier IA locale au meilleur rapport qualité-prix en 2026.' },
      { type: 'plain-terms', content: "Un mini-PC est un petit ordinateur silencieux toujours allumé. Le SER8 dispose d'un processeur AMD rapide avec un puissant circuit graphique intégré et 32 Go de mémoire — de quoi faire tourner toute votre maison connectée et un modèle de chat IA de taille moyenne en même temps, sans le prix d'une machine haut de gamme. La mémoire occupe deux emplacements remplaçables, vous pouvez donc en ajouter plus tard." },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        items: [
          'Le SER8 fait tourner Home Assistant, Frigate, Whisper et un LLM 7B local sur une seule machine pour environ 549 €',
          'Ryzen 7 8845HS : 8 cœurs/16 threads, iGPU Radeon 780M, 32 Go DDR5 sur deux SO-DIMM remplaçables par l\'utilisateur',
          'La vitesse du LLM local vient de l\'iGPU 780M et de la bande passante DDR5 — un modèle 7B est à l\'aise',
          'Moins cher et plus simple qu\'un [GEEKOM A9 Max](/fr/smart-home/geekom-a9-max-local-ai-review) ; bien plus capable qu\'un boîtier Intel N150',
          'Le Wi-Fi est en 6 (pas 6E) et il y a un port 2.5GbE — suffisant pour la plupart des serveurs maison',
          'Fabriqué en Chine — intégrez les mesures d\'importation US/UE de 2026 dans le coût rendu (voir la note douanière)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — Pour qui',
        content:
          "**Achetez le Beelink SER8 si vous voulez le boîtier le moins cher qui fait tout de même tourner un modèle 7B local à une vitesse exploitable aux côtés de Home Assistant.** Pour la plupart des personnes qui montent une maison connectée à IA locale, c'est le bon choix par défaut : un iGPU Radeon 780M performant, 32 Go de DDR5 et deux emplacements RAM remplaçables pour environ la moitié du prix d'un GEEKOM A9 Max.\n\nSon meilleur cas d'usage est un **serveur maison tout-en-un** — Home Assistant, Ollama, Whisper et Frigate sur une seule machine silencieuse. Montez en gamme seulement s'il vous faut un modèle plus grand (plus de marge RAM) ou une voie GPU externe ; descendez vers un boîtier Intel N150 seulement si un tout petit modèle suffit.",
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Spécifications',
        content:
          "**Toutes les specs ci-dessous ont été vérifiées auprès de Beelink et de sources de tests indépendantes en juillet 2026.** La RAM à la vente varie selon la référence (24, 32 ou 64 Go) ; ce tableau reflète l'unité grand public 32 Go / 1 To.",
        columns: ['Spécification', 'Beelink SER8 (8845HS)'],
        rows: [
          { Spécification: 'CPU', 'Beelink SER8 (8845HS)': 'AMD Ryzen 7 8845HS (Zen 4, 4 nm)' },
          { Spécification: 'Cœurs / threads', 'Beelink SER8 (8845HS)': '8 cœurs / 16 threads, jusqu\'à 5.1 GHz' },
          { Spécification: 'iGPU', 'Beelink SER8 (8845HS)': 'AMD Radeon 780M — 12 CU, RDNA 3' },
          { Spécification: 'NPU', 'Beelink SER8 (8845HS)': 'Ryzen AI, 16 TOPS (XDNA gen 1)' },
          { Spécification: 'RAM', 'Beelink SER8 (8845HS)': '32 Go DDR5-5600 (2×16 Go) ; double SO-DIMM ; remplaçable par l\'utilisateur (références jusqu\'à 64 Go)' },
          { Spécification: 'Stockage', 'Beelink SER8 (8845HS)': '1 To NVMe ; 2× M.2 2280 PCIe 4.0 ; jusqu\'à 8 To' },
          { Spécification: 'Ports', 'Beelink SER8 (8845HS)': '1× USB4 (40 Gbps), 3× USB-A 10 Gbps, 2× USB-A 2.0, 1× USB-C 10 Gbps, HDMI 2.1, DP 1.4, 3.5 mm' },
          { Spécification: 'Réseau', 'Beelink SER8 (8845HS)': '1× 2.5GbE, Wi-Fi 6 (pas 6E), Bluetooth 5.2' },
          { Spécification: 'TDP', 'Beelink SER8 (8845HS)': '54–65 W (fonctionne à 65 W en continu)' },
          { Spécification: 'Dimensions', 'Beelink SER8 (8845HS)': '135 × 135 × 44.7 mm, ~0.75 kg' },
          { Spécification: 'OS', 'Beelink SER8 (8845HS)': 'Windows 11 Pro (installation Linux/Proxmox prise en charge)' },
          { Spécification: 'Prix (indicatif)', 'Beelink SER8 (8845HS)': 'env. 549 € (juillet 2026 — volatil, vérifier le prix actuel)' },
        ],
        items: [
          'Pas de GPU dédié : toute l\'inférence IA tourne sur le CPU et l\'iGPU Radeon 780M qui partagent la RAM système.',
          'Les deux emplacements SO-DIMM sont remplaçables par l\'utilisateur ; le plafond DDR5 pratique sur cette plateforme est d\'environ 96 Go.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'IA locale et performances LLM',
        content:
          "**Avec 32 Go de RAM, le SER8 fait tourner sans peine un modèle 7B sur Ollama et peut charger un modèle 13B–14B en 4 bits, même si les modèles plus grands sont limités par la bande passante mémoire plutôt que par la capacité — tous les chiffres sont estimés d'après le matériel vérifié, pas un benchmark mesuré.** La Radeon 780M est l'élément clé : sur du DDR5-5600 double canal, elle garde un assistant 7B réactif à côté de Home Assistant.",
        items: [
          'Ollama, LM Studio et llama.cpp tournent bien ; la 780M est exploitée via les backends Vulkan ou ROCm.',
          'Un modèle 7B est le point d\'équilibre confortable ; un 13B–14B fonctionne en usage non interactif mais paraît plus lent.',
          'Les modèles de classe 32B ne rentrent que de justesse dans 32 Go et tournent lentement — passez à une référence 64 Go pour ceux-là.',
          'Le NPU 16 TOPS n\'est pas utilisé par les runtimes LLM courants ; l\'iGPU et la bande passante RAM fixent la latence.',
          'Voir [Ollama sur Home Assistant](/fr/smart-home/home-assistant-ollama-integration) pour connecter le modèle, et le [guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026) pour la profondeur de VRAM.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Avantages et inconvénients',
        content: '**Le SER8 est la référence qualité-prix ; ses compromis sont mineurs pour un serveur maison.** Vue équilibrée ci-dessous.',
        items: [
          '**Avantages**',
          'Meilleur rapport qualité-prix pour un boîtier IA locale capable — env. 549 € pour une machine prête pour du 7B',
          'iGPU Radeon 780M performant et 32 Go DDR5 gèrent Home Assistant plus un modèle 7B',
          'Deux emplacements SO-DIMM et deux emplacements M.2 remplaçables par l\'utilisateur — évolutif',
          'USB4, HDMI 2.1 et DP 1.4 prennent en charge une triple sortie 4K',
          'Fonctionne à 65 W — modeste pour un serveur toujours allumé',
          '**Inconvénients**',
          'Le Wi-Fi est en 6, pas 6E — utilisez le port 2.5GbE pour un lien filaire fiable',
          'Un seul port 2.5GbE (des rivaux comme le UM890 Pro en offrent deux)',
          'Pas assez de RAM à 32 Go pour les modèles au-delà de 30B sans mise à niveau',
          'Le NPU n\'accélère pas les LLM locaux',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Contexte acheteur : droits de douane et disponibilité (2026)',
        content:
          "**Le SER8 est fabriqué en Chine, donc son prix rendu reflète les mesures commerciales de 2026 — une raison de traiter tout prix comme une cible mouvante.** Les faits ci-dessous sont un contexte acheteur, pas une opinion éditoriale.",
        items: [
          "USA : les droits Section 301 sur l'électronique chinoise restent en vigueur en 2026 ; les droits « IEEPA » distincts de 2025 ont été invalidés par la Cour suprême en février 2026 et remplacés par un droit Section 122 temporaire et plafonné. L'exemption de minimis en franchise de droits sous 800 $ pour les importations directes a également pris fin.",
          "UE (concerne DE/FR) : il n'y a pas de droit UE large sur les mini-PC finis, mais depuis juillet 2026 le seuil de franchise de 150 € sur les colis directs de faible valeur en provenance de Chine a été supprimé et de petits frais de traitement par colis ajoutés.",
          "Hypothèse (tendance macro, pas un fait produit) : la capacité d'exportation chinoise redirigée a maintenu une forte disponibilité de ces marques en UE et aux USA, ce qui soutient globalement des prix compétitifs.",
          "Effet net : vérifiez le prix actuel chez le revendeur avant d'acheter — le chiffre d'environ 549 € ici est indicatif et daté de juillet 2026.",
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Où acheter et prix actuel',
        content:
          "**Les prix bougent d'une semaine à l'autre, vérifiez donc le prix en direct plutôt que de vous fier à un chiffre figé.** En juillet 2026, le SER8 32 Go / 1 To se situe autour de 549 €, la boutique officielle étant souvent plus chère que les annonces du marché.",
        items: [
          'Confirmez la référence RAM (24, 32 ou 64 Go) — l\'unité 32 Go est le point idéal qualité-prix pour un modèle 7B.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à envisager',
        content: '**Si le SER8 ne convient pas, quatre boîtiers l\'encadrent en prix et en capacité.**',
        items: [
          '[GEEKOM A9 Max](/fr/smart-home/geekom-a9-max-local-ai-review) — le choix pour la marge : plafond de 128 Go de RAM et Wi-Fi 7, pour environ le double du prix',
          '[Minisforum UM890 Pro](/fr/smart-home/minisforum-um890-pro-local-ai-review) — Radeon 780M similaire, mais ajoute un double 2.5GbE, le Wi-Fi 6E et un port eGPU OCuLink',
          '[Beelink EQ14](/fr/smart-home/beelink-eq14-local-ai-review) — boîtier Intel N150 économique pour Home Assistant plus un tout petit modèle',
          '[GMKtec G3 Plus](/fr/smart-home/gmktec-g3-plus-local-ai-review) — une autre option N150 économique avec RAM évolutive',
          'Toujours en comparaison ? Partez du [comparatif des meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Le Beelink SER8 peut-il faire tourner des LLM locaux ?', a: "Oui. Avec 32 Go de RAM et l'iGPU Radeon 780M, il fait tourner sans peine un modèle 7B sur Ollama et peut charger un modèle 13B–14B en 4 bits. C'est estimé d'après son matériel vérifié plutôt qu'un benchmark figé, car la vitesse dépend du modèle, de la quantification et du backend." },
          { q: 'Quelle taille de modèle tient dans sa RAM ?', a: 'À 32 Go, un modèle 7B est à l\'aise et un 13B–14B en 4 bits est utilisable mais plus lent. Un modèle de classe 30B ne tient que de justesse et tourne lentement ; pour ceux-là, choisissez la référence 64 Go ou un boîtier au plafond RAM plus élevé.' },
          { q: 'Le SER8 est-il bon pour Home Assistant et un usage permanent ?', a: 'Oui. Il fait tourner Home Assistant, Ollama, Whisper et Frigate ensemble sur 32 Go et consomme environ 65 W en charge, donc le fonctionnement continu est peu coûteux. Utilisez le port 2.5GbE pour une connexion filaire fiable.' },
          { q: 'La RAM est-elle évolutive ?', a: 'Oui. Le SER8 utilise deux emplacements SO-DIMM DDR5 standard remplaçables par l\'utilisateur, vous pouvez donc démarrer à 32 Go et passer à 64 Go plus tard. Il a aussi deux emplacements M.2 pour l\'extension de stockage.' },
          { q: 'Le SER8 a-t-il le Wi-Fi 6E ?', a: "Non. Le SER8 est livré avec le Wi-Fi 6 (un module Intel AX200), pas le Wi-Fi 6E. Pour un serveur maison, cela compte rarement — un lien filaire 2.5GbE est plus fiable que n'importe quelle bande Wi-Fi." },
          { q: 'Combien consomme le SER8 ?', a: 'Il fonctionne jusqu\'à 65 W en charge soutenue et bien moins au repos, donc le laisser allumé en continu est peu coûteux. Le chiffre exact dépend de la charge de travail et du profil d\'alimentation choisi.' },
          { q: 'SER8 ou GEEKOM A9 Max ?', a: "Le SER8 est le choix qualité-prix et couvre l'essentiel des besoins IA locale d'une maison connectée pour environ 549 €. Choisissez l'A9 Max seulement s'il vous faut son plafond de 128 Go de RAM, le Wi-Fi 7 ou une marge vision supplémentaire, ce qui double à peu près le coût." },
          { q: 'Où le Beelink SER8 est-il fabriqué, et cela affecte-t-il le prix ?', a: "Il est fabriqué en Chine. En 2026, les mesures d'importation américaines (droits Section 301, fin de l'exemption de minimis sous 800 $) et la suppression par l'UE de l'exemption de 150 € sur les colis de faible valeur peuvent affecter le coût rendu, alors vérifiez le prix actuel chez le revendeur plutôt que de vous fier à un chiffre figé." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — le comparatif auquel appartient ce test',
          '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026) — inter-cluster : profondeur de VRAM et de quantification',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la machine fait réellement tourner',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — brancher le modèle',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — Pi vs mini-PC vs NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Test Beelink SER8 (2026) : IA locale et serveur maison',
      reviewBody:
        "Le Beelink SER8 est un mini-PC Ryzen 7 8845HS avec un iGPU Radeon 780M et 32 Go DDR5 qui fait tourner Home Assistant plus un LLM 7B local sur Ollama pour environ 549 € (juillet 2026). C'est le mini-PC IA locale au meilleur rapport qualité-prix de 2026.",
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
      url: 'https://www.promptquorum.com/fr/smart-home/beelink-ser8-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink SER8',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'Mini-PC avec AMD Ryzen 7 8845HS, iGPU Radeon 780M et 32 Go DDR5, pour l\'IA locale et un usage de serveur maison.',
      },
    },
  },
}
