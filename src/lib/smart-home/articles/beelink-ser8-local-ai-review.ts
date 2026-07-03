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
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Análisis Beelink SER8 (2026): IA local y servidor doméstico',
    seoTitle: 'Análisis Beelink SER8 2026 — IA local y servidor doméstico',
    intro:
      'El Beelink SER8 (AMD Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5) es el mini PC con mejor relación calidad-precio para un hogar inteligente con IA local en 2026. Por unos 549 € (~$650 en Latinoamérica; julio de 2026, precio volátil) ejecuta Home Assistant, Frigate, Whisper y un modelo 7B en Ollama en un solo equipo silencioso. Este análisis verifica sus especificaciones, fija expectativas honestas sobre la velocidad del LLM local y explica dónde supera tanto a los equipos Intel N150 más baratos como al GEEKOM A9 Max más caro.',
    metaDescription:
      'Análisis Beelink SER8 2026: Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5, ~549 €. Ejecuta Home Assistant más un LLM 7B local en Ollama. El mini PC de IA local con mejor relación calidad-precio — desglose completo de especificaciones.',
    twitterDescription:
      'Beelink SER8 (2026): Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5, ~549 €. El mini PC con mejor relación calidad-precio para Home Assistant más un LLM 7B local. RAM SO-DIMM dual, USB4, 65 W.',
    readTime: '7 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que eligen un mini PC económico para Home Assistant y un LLM local',
    primaryTerm: 'análisis Beelink SER8',
    targetKeywords: [
      'análisis beelink ser8',
      'beelink ser8 ia local',
      'beelink ser8 home assistant',
      'beelink ser8 llm local',
      'ryzen 7 8845hs mini pc',
    ],
    leadAnswerBlock:
      '**El Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB DDR5) es el mini PC con mejor relación calidad-precio para Home Assistant más un LLM local en 2026: ejecuta el hub, Frigate, Whisper y un modelo 7B en Ollama en un solo equipo por unos 549 € (julio de 2026, volátil).** Su potente iGPU Radeon 780M y su RAM SO-DIMM dual reemplazable por el usuario lo convierten en la recomendación por defecto, salvo que necesites el margen extra de un equipo más caro.',
    quickAnswerTop: {
      es: {
        question: '¿Es bueno el Beelink SER8 para IA local y Home Assistant?',
        answer:
          'Sí: es la opción con mejor relación calidad-precio para esta tarea en 2026. El Ryzen 7 8845HS (8 núcleos/16 hilos), la iGPU Radeon 780M y 32 GB de DDR5 ejecutan Home Assistant, Ollama, Whisper y Frigate juntos, con un modelo 7B cómodo y un 13B–14B (4 bits) usable pero limitado por el ancho de banda de memoria. La RAM va en dos ranuras SO-DIMM reemplazables por el usuario, así que puedes pasar a 64 GB más adelante. Por unos 549 € (julio de 2026, volátil) cuesta aproximadamente la mitad que un GEEKOM A9 Max cubriendo casi el mismo trabajo domótico. Los precios en tu país pueden variar según impuestos locales.',
        bullets: [
          'CPU: Ryzen 7 8845HS — 8 núcleos / 16 hilos, Radeon 780M (12 CU, RDNA 3)',
          'RAM: 32 GB DDR5-5600 (2×16 GB), SO-DIMM dual, reemplazable por el usuario',
          'LLM local (estimado por especificaciones): 7B 4 bits cómodo; 13B–14B usable pero limitado por ancho de banda',
          'Puertos: USB4 40 Gbps, HDMI 2.1, DP 1.4, 2.5GbE, Wi-Fi 6 (no 6E)',
          'Precio ~549 € (julio de 2026, volátil) — la referencia calidad-precio para un servidor doméstico con IA local',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Especificaciones', anchor: 'specs' },
      { label: 'IA local y rendimiento LLM', anchor: 'local-ai' },
      { label: 'Ventajas y desventajas', anchor: 'pros-cons' },
      { label: 'Contexto del comprador: aranceles (2026)', anchor: 'trade-note' },
      { label: 'Dónde comprar', anchor: 'where-to-buy' },
      { label: 'Alternativas', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'El Beelink SER8 es un mini PC Ryzen 7 8845HS que ejecuta Home Assistant más un LLM 7B local en Ollama por unos 549 €, lo que lo convierte en el equipo de IA local con mejor relación calidad-precio en 2026.' },
      { type: 'plain-terms', content: 'Un mini PC es un equipo pequeño y silencioso que está siempre encendido. El SER8 tiene un procesador AMD rápido con potente gráfica integrada y 32 GB de memoria: suficiente para ejecutar todo tu hogar inteligente y un modelo de chat de IA de tamaño medio a la vez, sin el precio de una máquina de gama alta. La memoria va en dos ranuras reemplazables, así que puedes añadir más después.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'El SER8 ejecuta Home Assistant, Frigate, Whisper y un LLM 7B local en un solo equipo por unos 549 €',
          'Ryzen 7 8845HS: 8 núcleos/16 hilos, iGPU Radeon 780M, 32 GB DDR5 en dos SO-DIMM reemplazables por el usuario',
          'La velocidad del LLM local viene de la iGPU 780M y del ancho de banda DDR5 — un modelo 7B va cómodo',
          'Más barato y sencillo que un [GEEKOM A9 Max](/es/smart-home/geekom-a9-max-local-ai-review); mucho más capaz que un equipo Intel N150',
          'El Wi-Fi es 6 (no 6E) y hay un puerto 2.5GbE — suficiente para la mayoría de servidores domésticos',
          'Fabricado en China — ten en cuenta las medidas de importación de EE. UU./UE de 2026 en el coste final (ver nota comercial)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto — Para quién es',
        content:
          '**Compra el Beelink SER8 si quieres el equipo más barato que aún ejecuta un modelo 7B local a velocidad usable junto a Home Assistant.** Para la mayoría de quienes montan un hogar inteligente con IA local es la opción por defecto correcta: una potente iGPU Radeon 780M, 32 GB de DDR5 y dos ranuras de RAM reemplazables por aproximadamente la mitad del precio de un GEEKOM A9 Max.\n\nSu caso de uso más fuerte es un **servidor doméstico todo en uno**: Home Assistant, Ollama, Whisper y Frigate en una máquina silenciosa. Sube de nivel solo si necesitas un modelo más grande (más margen de RAM) o una vía de GPU externa; baja a un equipo Intel N150 solo si te basta con un modelo diminuto.',
        affiliateLinks: [
          { label: 'Consultar precio actual — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Especificaciones',
        content:
          '**Todas las especificaciones siguientes se verificaron con Beelink y fuentes de análisis independientes en julio de 2026.** La RAM de fábrica varía según el modelo (24, 32 o 64 GB); esta tabla refleja la unidad principal de 32 GB / 1 TB.',
        columns: ['Especificación', 'Beelink SER8 (8845HS)'],
        rows: [
          { Especificación: 'CPU', 'Beelink SER8 (8845HS)': 'AMD Ryzen 7 8845HS (Zen 4, 4 nm)' },
          { Especificación: 'Núcleos / hilos', 'Beelink SER8 (8845HS)': '8 núcleos / 16 hilos, hasta 5.1 GHz' },
          { Especificación: 'iGPU', 'Beelink SER8 (8845HS)': 'AMD Radeon 780M — 12 CU, RDNA 3' },
          { Especificación: 'NPU', 'Beelink SER8 (8845HS)': 'Ryzen AI, 16 TOPS (XDNA gen 1)' },
          { Especificación: 'RAM', 'Beelink SER8 (8845HS)': '32 GB DDR5-5600 (2×16 GB); SO-DIMM dual; reemplazable por el usuario (modelos hasta 64 GB)' },
          { Especificación: 'Almacenamiento', 'Beelink SER8 (8845HS)': '1 TB NVMe; 2× M.2 2280 PCIe 4.0; hasta 8 TB' },
          { Especificación: 'Puertos', 'Beelink SER8 (8845HS)': '1× USB4 (40 Gbps), 3× USB-A 10 Gbps, 2× USB-A 2.0, 1× USB-C 10 Gbps, HDMI 2.1, DP 1.4, 3.5 mm' },
          { Especificación: 'Red', 'Beelink SER8 (8845HS)': '1× 2.5GbE, Wi-Fi 6 (no 6E), Bluetooth 5.2' },
          { Especificación: 'TDP', 'Beelink SER8 (8845HS)': '54–65 W (funciona a 65 W sostenidos)' },
          { Especificación: 'Dimensiones', 'Beelink SER8 (8845HS)': '135 × 135 × 44.7 mm, ~0.75 kg' },
          { Especificación: 'SO', 'Beelink SER8 (8845HS)': 'Windows 11 Pro (instalación de Linux/Proxmox compatible)' },
          { Especificación: 'Precio (indicativo)', 'Beelink SER8 (8845HS)': '~549 € / ~$650 USD (julio de 2026 — volátil, consulta el precio actual)' },
        ],
        items: [
          'Sin GPU dedicada: toda la inferencia de IA corre en la CPU y la iGPU Radeon 780M compartiendo la RAM del sistema.',
          'Las dos ranuras SO-DIMM son reemplazables por el usuario; el techo práctico de DDR5 en esta plataforma ronda los 96 GB.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'IA local y rendimiento LLM',
        content:
          '**Con 32 GB de RAM, el SER8 ejecuta con comodidad un modelo 7B en Ollama y puede cargar un modelo 13B–14B a 4 bits, aunque los modelos más grandes están limitados por el ancho de banda de memoria más que por la capacidad — todas las cifras se estiman a partir del hardware verificado, no de un benchmark medido.** La Radeon 780M es la pieza clave: con DDR5-5600 de doble canal mantiene ágil un asistente 7B junto a Home Assistant.',
        items: [
          'Ollama, LM Studio y llama.cpp funcionan bien; la 780M se usa a través de los backends Vulkan o ROCm.',
          'Un modelo 7B es el punto óptimo cómodo; un 13B–14B sirve para uso no interactivo pero se siente más lento.',
          'Los modelos de clase 32B entran solo justos en 32 GB y corren lentos — pasa a un modelo de 64 GB para esos.',
          'La NPU de 16 TOPS no la usan los runtimes de LLM habituales; la iGPU y el ancho de banda de RAM fijan la latencia.',
          'Consulta [Ollama en Home Assistant](/es/smart-home/home-assistant-ollama-integration) para conectar el modelo, y la [guía de hardware para LLM local](/es/local-llms/local-llm-hardware-guide-2026) para la profundidad de VRAM.',
        ],
        affiliateLinks: [
          { label: 'Consultar precio actual — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Ventajas y desventajas',
        content: '**El SER8 es la referencia de calidad-precio; sus concesiones son menores para un servidor doméstico.** Visión equilibrada abajo.',
        items: [
          '**Ventajas**',
          'Mejor relación calidad-precio para un equipo de IA local capaz — ~549 € por una máquina lista para 7B',
          'Potente iGPU Radeon 780M y 32 GB DDR5 manejan Home Assistant más un modelo 7B',
          'Dos ranuras SO-DIMM y dos ranuras M.2 reemplazables por el usuario — ampliable',
          'USB4, HDMI 2.1 y DP 1.4 admiten salida triple 4K',
          'Funciona a 65 W — modesto para un servidor siempre encendido',
          '**Desventajas**',
          'El Wi-Fi es 6, no 6E — usa el puerto 2.5GbE para un enlace por cable fiable',
          'Solo un puerto 2.5GbE (rivales como el UM890 Pro ofrecen dos)',
          'Con 32 GB no hay RAM suficiente para modelos de más de 30B sin ampliar',
          'La NPU no acelera los LLM locales',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Contexto del comprador: aranceles y disponibilidad (2026)',
        content:
          '**El SER8 se fabrica en China, así que su precio final refleja las medidas comerciales de 2026 — una razón para tratar cualquier precio como un objetivo móvil.** Los datos siguientes son contexto para el comprador, no opinión editorial.',
        items: [
          'EE. UU.: los aranceles de la Sección 301 sobre la electrónica china siguen vigentes en 2026; los aranceles «IEEPA» de 2025, aparte, fueron anulados por el Tribunal Supremo en febrero de 2026 y sustituidos por un arancel temporal y con tope de la Sección 122. La exención «de minimis» libre de aranceles por debajo de 800 $ para importaciones directas también terminó.',
          'UE (afecta a DE/FR): no hay un arancel general de la UE sobre mini PC terminados, pero desde julio de 2026 se eliminó el umbral libre de aranceles de 150 € en paquetes directos de bajo valor desde China y se añadió una pequeña tasa de gestión por paquete.',
          'Suposición (tendencia macro, no un dato del producto): la capacidad de exportación china redirigida ha mantenido alta la disponibilidad de estas marcas en la UE y EE. UU., lo que en general respalda precios competitivos.',
          'Efecto neto: verifica el precio actual en la tienda antes de comprar — la cifra de ~549 € aquí es indicativa y fechada en julio de 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Dónde comprar y precio actual',
        content:
          '**Los precios se mueven de una semana a otra, así que consulta el precio en vivo en lugar de fiarte de una cifra fija.** A julio de 2026 el SER8 de 32 GB / 1 TB se agrupa en torno a los 549 € (~$650 en Latinoamérica), y la tienda oficial suele ser más cara que las ofertas del mercado.',
        items: [
          'Confirma el modelo de RAM (24, 32 o 64 GB) — la unidad de 32 GB es el punto óptimo de calidad-precio para un modelo 7B.',
        ],
        affiliateLinks: [
          { label: 'Consultar precio actual — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a considerar',
        content: '**Si el SER8 no encaja, cuatro equipos lo enmarcan en precio y capacidad.**',
        items: [
          '[GEEKOM A9 Max](/es/smart-home/geekom-a9-max-local-ai-review) — la opción con más margen: techo de 128 GB de RAM y Wi-Fi 7, por aproximadamente el doble de precio',
          '[Minisforum UM890 Pro](/es/smart-home/minisforum-um890-pro-local-ai-review) — Radeon 780M similar, pero añade doble 2.5GbE, Wi-Fi 6E y un puerto eGPU OCuLink',
          '[Beelink EQ14](/es/smart-home/beelink-eq14-local-ai-review) — equipo Intel N150 económico para Home Assistant más un modelo diminuto',
          '[GMKtec G3 Plus](/es/smart-home/gmktec-g3-plus-local-ai-review) — otra opción N150 económica con RAM ampliable',
          '¿Aún comparando? Empieza por el [resumen de los mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puede el Beelink SER8 ejecutar LLM locales?', a: 'Sí. Con 32 GB de RAM y la iGPU Radeon 780M ejecuta con comodidad un modelo 7B en Ollama y puede cargar un modelo 13B–14B a 4 bits. Esto se estima a partir de su hardware verificado y no de un benchmark fijo, porque la velocidad depende del modelo, la cuantización y el backend.' },
          { q: '¿Qué tamaño de modelo cabe en su RAM?', a: 'Con 32 GB, un modelo 7B va cómodo y un 13B–14B a 4 bits es usable pero más lento. Un modelo de clase 30B entra solo justo y corre lento; para esos, elige el modelo de 64 GB o un equipo con techo de RAM más alto.' },
          { q: '¿Es bueno el SER8 para Home Assistant y uso permanente?', a: 'Sí. Ejecuta Home Assistant, Ollama, Whisper y Frigate juntos en 32 GB y consume unos 65 W bajo carga, así que el funcionamiento continuo es barato. Usa el puerto 2.5GbE para una conexión por cable fiable.' },
          { q: '¿Es ampliable la RAM?', a: 'Sí. El SER8 usa dos ranuras SO-DIMM DDR5 estándar reemplazables por el usuario, así que puedes empezar en 32 GB y pasar a 64 GB después. También tiene dos ranuras M.2 para ampliar el almacenamiento.' },
          { q: '¿Tiene el SER8 Wi-Fi 6E?', a: 'No. El SER8 viene con Wi-Fi 6 (un módulo Intel AX200), no Wi-Fi 6E. Para un servidor doméstico rara vez importa — un enlace por cable 2.5GbE es más fiable que cualquier banda Wi-Fi.' },
          { q: '¿Cuánta energía consume el SER8?', a: 'Funciona a hasta 65 W bajo carga sostenida y mucho menos en reposo, así que dejarlo encendido de forma continua es barato. La cifra exacta depende de la carga de trabajo y del perfil de energía que elijas.' },
          { q: '¿SER8 o GEEKOM A9 Max?', a: 'El SER8 es la opción calidad-precio y cubre la mayoría de necesidades de IA local de un hogar inteligente por unos 549 €. Elige el A9 Max solo si necesitas su techo de 128 GB de RAM, Wi-Fi 7 o margen extra de visión, lo que aproximadamente duplica el coste.' },
          { q: '¿Dónde se fabrica el Beelink SER8 y afecta eso al precio?', a: 'Se fabrica en China. En 2026, las medidas de importación de EE. UU. (aranceles de la Sección 301, el fin de la exención de minimis por debajo de 800 $) y la eliminación por la UE de la exención de 150 € para paquetes de bajo valor pueden afectar al coste final, así que consulta el precio actual en la tienda en lugar de fiarte de una cifra fija.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — el resumen al que pertenece este análisis',
          '[Guía de hardware para LLM local](/es/local-llms/local-llm-hardware-guide-2026) — entre clústeres: profundidad de VRAM y cuantización',
          '[Ejecuta tu hogar inteligente en un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — lo que el equipo ejecuta realmente',
          '[Conecta Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — integrar el modelo',
          '[Mejor hardware para un hogar inteligente local](/es/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Análisis Beelink SER8 (2026): IA local y servidor doméstico',
      reviewBody:
        'El Beelink SER8 es un mini PC Ryzen 7 8845HS con iGPU Radeon 780M y 32 GB DDR5 que ejecuta Home Assistant más un LLM 7B local en Ollama por unos 549 € (julio de 2026). Es el mini PC de IA local con mejor relación calidad-precio de 2026.',
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
      url: 'https://www.promptquorum.com/es/smart-home/beelink-ser8-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink SER8',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'Mini PC con AMD Ryzen 7 8845HS, iGPU Radeon 780M y 32 GB DDR5, para IA local y uso como servidor doméstico.',
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Beelink SER8 レビュー（2026）: ローカルAIとホームサーバー',
    seoTitle: 'Beelink SER8 レビュー 2026 — ローカルAI＆ホームサーバー',
    intro:
      'Beelink SER8（AMD Ryzen 7 8845HS、Radeon 780M、32 GB DDR5）は、2026年のローカルAIスマートホームに最もコスパの良いミニPCです。約¥99,800（2026年7月、価格変動あり）で、Home Assistant、Frigate、Whisper、そしてOllama上の7Bモデルを1台の静かな筐体で動かせます。本レビューではスペックを検証し、ローカルLLMの速度について正直な期待値を示し、より安価なIntel N150機と、より高価なGEEKOM A9 Maxの両方を上回るポイントを説明します。',
    metaDescription:
      'Beelink SER8 レビュー 2026: Ryzen 7 8845HS、Radeon 780M、32 GB DDR5、約¥99,800。Home AssistantとOllamaのローカルLLM 7Bを実行。最もコスパの良いローカルAIミニPC — スペックを詳細に解説。',
    twitterDescription:
      'Beelink SER8（2026）: Ryzen 7 8845HS、Radeon 780M、32 GB DDR5、約¥99,800。Home Assistantと7BローカルLLMに最もコスパの良いミニPC。デュアルSO-DIMM、USB4、65 W。',
    readTime: '7分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Home AssistantとローカルLLM向けにコスパの良いミニPCを選ぶ購入者',
    primaryTerm: 'Beelink SER8 レビュー',
    targetKeywords: [
      'beelink ser8 レビュー',
      'beelink ser8 ローカルai',
      'beelink ser8 home assistant',
      'beelink ser8 ローカルllm',
      'ryzen 7 8845hs ミニpc',
    ],
    leadAnswerBlock:
      '**Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB DDR5）は、2026年にHome AssistantとローカルLLMを動かすのに最もコスパの良いミニPCです。ハブ、Frigate、Whisper、Ollama上の7Bモデルを1台で、約¥99,800（2026年7月、変動あり）で実行できます。** 強力な780M iGPUと、ユーザーが交換可能なデュアルSO-DIMM RAMにより、より高価な筐体の余裕が必要でない限り、これが標準的な推奨機となります。',
    quickAnswerTop: {
      ja: {
        question: 'Beelink SER8はローカルAIとHome Assistantに向いていますか？',
        answer:
          'はい、2026年にこの用途で最もコスパの良い選択肢です。Ryzen 7 8845HS（8コア/16スレッド）、Radeon 780M iGPU、32 GBのDDR5が、Home Assistant、Ollama、Whisper、Frigateを同時に動かし、7Bモデルは快適、13B〜14B（4bit）は使えるもののメモリ帯域に制約されます。RAMはユーザーが交換可能な2つのSO-DIMMスロットにあるため、後から64 GBへ移行できます。約¥99,800（2026年7月、変動あり）で、GEEKOM A9 Maxのおよそ半額ながら、ほぼ同じスマートホーム作業をカバーします。',
        bullets: [
          'CPU: Ryzen 7 8845HS — 8コア / 16スレッド、Radeon 780M（12 CU、RDNA 3）',
          'RAM: 32 GB DDR5-5600（2×16 GB）、デュアルSO-DIMM、ユーザー交換可能',
          'ローカルLLM（スペックからの推定）: 7B 4bitは快適、13B〜14Bは使えるが帯域制約あり',
          'ポート: USB4 40 Gbps、HDMI 2.1、DP 1.4、2.5GbE、Wi-Fi 6（6Eではない）',
          '価格 約¥99,800（2026年7月、変動あり）— ローカルAIホームサーバーのコスパ基準',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '評価', anchor: 'verdict' },
      { label: 'スペック', anchor: 'specs' },
      { label: 'ローカルAIとLLM性能', anchor: 'local-ai' },
      { label: '長所と短所', anchor: 'pros-cons' },
      { label: '購入者向け背景: 関税（2026）', anchor: 'trade-note' },
      { label: '購入先', anchor: 'where-to-buy' },
      { label: '代替候補', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Beelink SER8はRyzen 7 8845HS搭載のミニPCで、Home AssistantとOllama上の7BローカルLLMを約¥99,800で動かせ、2026年で最もコスパの良いローカルAI筐体です。' },
      { type: 'plain-terms', content: 'ミニPCとは、小型で静かな常時稼働のコンピューターです。SER8は高速なAMDプロセッサーと強力な内蔵グラフィックス、32 GBのメモリを備え、ハイエンド機の価格をかけずに、スマートホーム全体と中規模のAIチャットモデルを同時に動かせます。メモリは交換可能な2つのスロットにあり、後から増設できます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        items: [
          'SER8はHome Assistant、Frigate、Whisper、ローカルLLM 7Bを1台で約¥99,800で動かせます',
          'Ryzen 7 8845HS: 8コア/16スレッド、Radeon 780M iGPU、ユーザー交換可能な2枚のSO-DIMMに32 GB DDR5',
          'ローカルLLMの速度は780M iGPUとDDR5帯域から生まれ、7Bモデルは快適です',
          '[GEEKOM A9 Max](/ja/smart-home/geekom-a9-max-local-ai-review)より安価でシンプル、Intel N150機よりはるかに高性能',
          'Wi-Fiは6（6Eではない）で2.5GbEポートが1つ — 多くのホームサーバーには十分です',
          '中国製 — 2026年の米国/EU輸入措置を上陸コストに織り込んでください（関税の注記参照）',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '評価 — どんな人向けか',
        content:
          '**Home Assistantと並行してローカル7Bモデルを実用的な速度で動かせる、最も安い筐体が欲しいならBeelink SER8を選んでください。** ローカルAIスマートホームを構築する多くの人にとって、これが正しい標準機です。強力なRadeon 780M iGPU、32 GBのDDR5、交換可能なデュアルRAMスロットを、GEEKOM A9 Maxのおよそ半額で備えます。\n\n最も得意な用途は**オールインワンのホームサーバー**です。Home Assistant、Ollama、Whisper、Frigateを1台の静かなマシンで動かせます。より大きなモデル（RAMの余裕）や外部GPUの経路が必要な場合のみ上位機へ、極小モデルで十分な場合のみIntel N150機へ下げてください。',
        affiliateLinks: [
          { label: '現在の価格を確認 — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'スペック',
        content:
          '**以下のスペックはすべて、2026年7月にBeelinkおよび独立系レビューの情報源と照合して検証しました。** 販売時のRAMはSKUにより異なり（24、32、64 GB）、この表は主流の32 GB / 1 TBモデルを反映しています。',
        columns: ['項目', 'Beelink SER8 (8845HS)'],
        rows: [
          { '項目': 'CPU', 'Beelink SER8 (8845HS)': 'AMD Ryzen 7 8845HS（Zen 4、4 nm）' },
          { '項目': 'コア / スレッド', 'Beelink SER8 (8845HS)': '8コア / 16スレッド、最大5.1 GHz' },
          { '項目': 'iGPU', 'Beelink SER8 (8845HS)': 'AMD Radeon 780M — 12 CU、RDNA 3' },
          { '項目': 'NPU', 'Beelink SER8 (8845HS)': 'Ryzen AI、16 TOPS（XDNA 第1世代）' },
          { '項目': 'RAM', 'Beelink SER8 (8845HS)': '32 GB DDR5-5600（2×16 GB）; デュアルSO-DIMM; ユーザー交換可能（最大64 GBのSKU）' },
          { '項目': 'ストレージ', 'Beelink SER8 (8845HS)': '1 TB NVMe; 2× M.2 2280 PCIe 4.0; 最大8 TB' },
          { '項目': 'ポート', 'Beelink SER8 (8845HS)': '1× USB4（40 Gbps）、3× USB-A 10 Gbps、2× USB-A 2.0、1× USB-C 10 Gbps、HDMI 2.1、DP 1.4、3.5 mm' },
          { '項目': 'ネットワーク', 'Beelink SER8 (8845HS)': '1× 2.5GbE、Wi-Fi 6（6Eではない）、Bluetooth 5.2' },
          { '項目': 'TDP', 'Beelink SER8 (8845HS)': '54〜65 W（65 W持続で動作）' },
          { '項目': '寸法', 'Beelink SER8 (8845HS)': '135 × 135 × 44.7 mm、約0.75 kg' },
          { '項目': 'OS', 'Beelink SER8 (8845HS)': 'Windows 11 Pro（Linux/Proxmoxのインストールに対応）' },
          { '項目': '価格（目安）', 'Beelink SER8 (8845HS)': '約¥99,800（2026年7月 — 変動あり、現在の価格を確認）' },
        ],
        items: [
          '専用GPUなし: すべてのAI推論は、システムRAMを共有するCPUとRadeon 780M iGPUで動作します。',
          'デュアルSO-DIMMスロットはユーザー交換可能で、このプラットフォームの実用的なDDR5上限は約96 GBです。',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'ローカルAIとLLM性能',
        content:
          '**32 GBのRAMがあれば、SER8はOllama上で7Bモデルを快適に動かし、13B〜14Bモデルを4bitで読み込めますが、より大きなモデルは容量よりもメモリ帯域に制約されます。すべての数値は検証済みハードウェアからの推定であり、実測ベンチマークではありません。** 鍵となるのはRadeon 780Mで、デュアルチャネルDDR5-5600上でHome Assistantと並行して7Bアシスタントを軽快に保ちます。',
        items: [
          'Ollama、LM Studio、llama.cppは良好に動作し、780MはVulkanまたはROCmバックエンド経由で使われます。',
          '7Bモデルが快適なスイートスポットで、13B〜14Bは非対話用途では使えますが遅く感じます。',
          '32Bクラスのモデルは32 GBにぎりぎりしか収まらず遅く動きます — その用途には64 GBのSKUへ。',
          '16 TOPSのNPUは主流のLLMランタイムでは使われず、iGPUとRAM帯域がレイテンシを決めます。',
          'モデルの接続は[Home AssistantでのOllama](/ja/smart-home/home-assistant-ollama-integration)を、VRAMの深さは[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide-2026)を参照してください。',
        ],
        affiliateLinks: [
          { label: '現在の価格を確認 — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: '長所と短所',
        content: '**SER8はコスパの基準機で、ホームサーバーとしての妥協点はわずかです。** バランスの取れた見方を以下に示します。',
        items: [
          '**長所**',
          '高性能なローカルAI筐体として最良のコスパ — 7B対応マシンが約¥99,800',
          '強力なRadeon 780M iGPUと32 GB DDR5がHome Assistantと7Bモデルを両立',
          'ユーザー交換可能なデュアルSO-DIMMスロットと2つのM.2スロット — 拡張可能',
          'USB4、HDMI 2.1、DP 1.4がトリプル4K出力に対応',
          '65 Wで動作 — 常時稼働サーバーとして控えめ',
          '**短所**',
          'Wi-Fiは6で6Eではない — 信頼性の高い有線接続には2.5GbEポートを使用',
          '2.5GbEポートは1つのみ（UM890 Proなどのライバルは2つ提供）',
          '32 GBでは、増設なしに30B超のモデルを動かすにはRAMが不足',
          'NPUはローカルLLMを高速化しません',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: '購入者向け背景: 関税と入手性（2026）',
        content:
          '**SER8は中国で製造されるため、その上陸価格は2026年の貿易措置を反映します。どんな価格も動く目標として扱うべき理由です。** 以下の事実は購入者向けの背景であり、編集上の意見ではありません。',
        items: [
          '米国: 中国製電子機器へのSection 301関税は2026年も継続中です。別枠の2025年「IEEPA」関税は2026年2月に最高裁で無効とされ、暫定かつ上限付きのSection 122関税に置き換えられました。直接輸入向けの800ドル未満の免税「de minimis」も終了しています。',
          'EU（DE/FRに影響）: 完成品のミニPCへの広範なEU関税はありませんが、2026年7月から中国からの低額直送小包に対する150ユーロの免税枠が撤廃され、小包ごとの少額の取扱手数料が追加されました。',
          '前提（マクロ傾向であり製品ごとの事実ではない）: 中国の輸出能力の振り向けにより、これらのブランドのEUと米国での入手性は高く保たれ、全体として競争的な価格を支えています。',
          '正味の影響: 購入前に販売店で現在の価格を確認してください — ここでの約¥99,800は目安で、2026年7月時点のものです。',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '購入先と現在の価格',
        content:
          '**価格は週ごとに動くため、固定値を信じるのではなくリアルタイムの価格を確認してください。** 2026年7月時点で、32 GB / 1 TBのSER8は約¥99,800前後に集まり、公式ストアは実売価格より高いことがよくあります。',
        items: [
          'RAMのSKU（24、32、64 GB）を確認してください — 32 GBモデルが7Bモデルのコスパのスイートスポットです。',
        ],
        affiliateLinks: [
          { label: '現在の価格を確認 — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '検討すべき代替候補',
        content: '**SER8が最適でない場合、4つの筐体が価格と性能でこれを挟みます。**',
        items: [
          '[GEEKOM A9 Max](/ja/smart-home/geekom-a9-max-local-ai-review) — 余裕重視の選択: 128 GBのRAM上限とWi-Fi 7、価格はおよそ2倍',
          '[Minisforum UM890 Pro](/ja/smart-home/minisforum-um890-pro-local-ai-review) — 同様のRadeon 780Mながら、デュアル2.5GbE、Wi-Fi 6E、OCuLink eGPUポートを追加',
          '[Beelink EQ14](/ja/smart-home/beelink-eq14-local-ai-review) — Home Assistantと極小モデル向けの低価格Intel N150機',
          '[GMKtec G3 Plus](/ja/smart-home/gmktec-g3-plus-local-ai-review) — RAM拡張可能な、もう一つの低価格N150オプション',
          'まだ比較中ですか？ [Home Assistant + ローカルAI向けベストミニPCまとめ](/ja/smart-home/best-mini-pc-home-assistant-local-ai)から始めてください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Beelink SER8はローカルLLMを動かせますか？', a: 'はい。32 GBのRAMとRadeon 780M iGPUにより、Ollama上で7Bモデルを快適に動かし、13B〜14Bモデルを4bitで読み込めます。これは固定のベンチマークではなく検証済みハードウェアからの推定です。速度はモデル、量子化、バックエンドに依存するためです。' },
          { q: 'どのくらいの大きさのモデルがRAMに収まりますか？', a: '32 GBでは、7Bモデルは快適で、4bitの13B〜14Bは使えますが遅くなります。30Bクラスのモデルはぎりぎりしか収まらず遅く動きます。その用途には64 GBのSKUか、より高いRAM上限の筐体を選んでください。' },
          { q: 'SER8はHome Assistantや常時稼働に向いていますか？', a: 'はい。Home Assistant、Ollama、Whisper、Frigateを32 GBで同時に動かし、負荷時で約65 Wを消費するため、継続運用は安価です。信頼性の高い有線接続には2.5GbEポートを使ってください。' },
          { q: 'RAMは拡張できますか？', a: 'はい。SER8はユーザー交換可能な標準的なDDR5 SO-DIMMスロットを2つ使うため、32 GBから始めて後で64 GBへ移行できます。ストレージ拡張用のM.2スロットも2つあります。' },
          { q: 'SER8はWi-Fi 6Eに対応していますか？', a: 'いいえ。SER8はWi-Fi 6（Intel AX200モジュール）を搭載しており、Wi-Fi 6Eではありません。ホームサーバーではこれが問題になることはめったにありません — 有線の2.5GbE接続はどのWi-Fiバンドよりも信頼できます。' },
          { q: 'SER8はどのくらい電力を消費しますか？', a: '持続負荷時で最大65 W、アイドル時ははるかに少ないため、連続して電源を入れておいても安価です。正確な数値はワークロードと選択した電源プロファイルによります。' },
          { q: 'SER8とGEEKOM A9 Maxのどちらですか？', a: 'SER8はコスパの選択で、約¥99,800でローカルAIスマートホームのほとんどのニーズをカバーします。128 GBのRAM上限、Wi-Fi 7、追加のビジョンの余裕が必要な場合のみA9 Maxを選んでください。コストはおよそ2倍になります。' },
          { q: 'Beelink SER8はどこで製造され、それは価格に影響しますか？', a: '中国で製造されています。2026年には米国の輸入措置（Section 301関税、800ドル未満のde minimis免税の終了）とEUによる150ユーロの低額小包免税の撤廃が上陸コストに影響し得るため、固定の数値に頼らず販売店の現在の価格を確認してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant + ローカルAI向けベストミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — このレビューが属するまとめ',
          '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide-2026) — クラスター横断: VRAMと量子化の深さ',
          '[スマートホームをローカルLLMで動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — この筐体が実際に動かすもの',
          '[OllamaをHome Assistantに接続する](/ja/smart-home/home-assistant-ollama-integration) — モデルを組み込む',
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — Pi対ミニPC対NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Beelink SER8 レビュー（2026）: ローカルAIとホームサーバー',
      reviewBody:
        'Beelink SER8はRadeon 780M iGPUと32 GB DDR5を備えたRyzen 7 8845HSミニPCで、Home AssistantとOllama上の7BローカルLLMを約¥99,800（2026年7月）で動かします。2026年で最もコスパの良いローカルAIミニPCです。',
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
      url: 'https://www.promptquorum.com/ja/smart-home/beelink-ser8-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink SER8',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'AMD Ryzen 7 8845HS、Radeon 780M iGPU、32 GB DDR5を搭載したミニPC。ローカルAIとホームサーバー用途向け。',
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Beelink SER8 评测（2026）：本地 AI 与家庭服务器',
    seoTitle: 'Beelink SER8 评测 2026 — 本地 AI 与家庭服务器',
    intro:
      'Beelink SER8（AMD Ryzen 7 8845HS、Radeon 780M、32 GB DDR5）是 2026 年本地 AI 智能家居中性价比最高的迷你 PC。约 $650（2026 年 7 月，价格波动）即可在一台安静的机器上运行 Home Assistant、Frigate、Whisper 以及 Ollama 上的 7B 模型。本评测核实其规格，对本地 LLM 速度给出诚实的预期，并说明它在哪些方面同时胜过更便宜的 Intel N150 机型和更贵的 GEEKOM A9 Max。',
    metaDescription:
      'Beelink SER8 评测 2026：Ryzen 7 8845HS、Radeon 780M、32 GB DDR5，约 $650。可在 Ollama 上运行 Home Assistant 加一个 7B 本地 LLM。性价比最高的本地 AI 迷你 PC — 完整规格解析。',
    twitterDescription:
      'Beelink SER8（2026）：Ryzen 7 8845HS、Radeon 780M、32 GB DDR5，约 $650。运行 Home Assistant 加 7B 本地 LLM 性价比最高的迷你 PC。双 SO-DIMM 内存、USB4、65 W。',
    readTime: '阅读约7分钟',
    educationalLevel: 'Intermediate',
    audience: '为 Home Assistant 和本地 LLM 挑选高性价比迷你 PC 的购买者',
    primaryTerm: 'Beelink SER8 评测',
    targetKeywords: [
      'beelink ser8 评测',
      'beelink ser8 本地 ai',
      'beelink ser8 home assistant',
      'beelink ser8 本地 llm',
      'ryzen 7 8845hs 迷你 pc',
    ],
    leadAnswerBlock:
      '**Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB DDR5）是 2026 年运行 Home Assistant 加本地 LLM 性价比最高的迷你 PC——它在一台机器上运行中枢、Frigate、Whisper 和 Ollama 上的 7B 模型，约 $650（2026 年 7 月，波动）。** 其强劲的 780M 核显和用户可更换的双 SO-DIMM 内存使其成为默认推荐，除非你需要更贵机型的额外余量。',
    quickAnswerTop: {
      zh: {
        question: 'Beelink SER8 适合本地 AI 和 Home Assistant 吗？',
        answer:
          '适合——它是 2026 年该用途性价比最高的选择。Ryzen 7 8845HS（8 核/16 线程）、Radeon 780M 核显和 32 GB DDR5 可同时运行 Home Assistant、Ollama、Whisper 和 Frigate，7B 模型运行从容，13B–14B（4-bit）可用但受内存带宽限制。内存位于两个用户可更换的 SO-DIMM 插槽上，因此日后可升级到 64 GB。约 $650（2026 年 7 月，波动）大约是 GEEKOM A9 Max 的一半，却覆盖了大部分相同的智能家居工作。',
        bullets: [
          'CPU：Ryzen 7 8845HS — 8 核 / 16 线程，Radeon 780M（12 CU，RDNA 3）',
          '内存：32 GB DDR5-5600（2×16 GB），双 SO-DIMM，用户可更换',
          '本地 LLM（据规格估算）：7B 4-bit 从容；13B–14B 可用但受带宽限制',
          '接口：USB4 40 Gbps、HDMI 2.1、DP 1.4、2.5GbE、Wi-Fi 6（非 6E）',
          '价格约 $650（2026 年 7 月，波动）— 本地 AI 家庭服务器的性价比标杆',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: 'tldr' },
      { label: '结论', anchor: 'verdict' },
      { label: '规格', anchor: 'specs' },
      { label: '本地 AI 与 LLM 性能', anchor: 'local-ai' },
      { label: '优点与缺点', anchor: 'pros-cons' },
      { label: '购买者背景：关税（2026）', anchor: 'trade-note' },
      { label: '购买渠道', anchor: 'where-to-buy' },
      { label: '替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Beelink SER8 是一款 Ryzen 7 8845HS 迷你 PC，约 $650 即可在 Ollama 上运行 Home Assistant 加一个 7B 本地 LLM，是 2026 年性价比最高的本地 AI 机型。' },
      { type: 'plain-terms', content: '迷你 PC 是一台小巧、安静、全天候运行的电脑。SER8 配备快速的 AMD 处理器、强劲的集成显卡和 32 GB 内存——足以同时运行整个智能家居和一个中等规模的 AI 聊天模型，而无需高端机器的价格。内存位于两个可更换插槽中，日后可以加装。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        items: [
          'SER8 在一台机器上运行 Home Assistant、Frigate、Whisper 和一个 7B 本地 LLM，约 $650',
          'Ryzen 7 8845HS：8 核/16 线程，Radeon 780M 核显，32 GB DDR5 分布在两条用户可更换的 SO-DIMM 上',
          '本地 LLM 速度来自 780M 核显和 DDR5 带宽——7B 模型运行从容',
          '比 [GEEKOM A9 Max](/zh/smart-home/geekom-a9-max-local-ai-review) 更便宜、更简单；比 Intel N150 机型强大得多',
          'Wi-Fi 为 6（非 6E），有一个 2.5GbE 端口——对大多数家庭服务器足够',
          '中国制造——将 2026 年美国/欧盟进口措施计入到岸成本（见关税说明）',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论——谁该购买',
        content:
          '**如果你想要在 Home Assistant 旁边仍能以可用速度运行本地 7B 模型的最便宜机器，请购买 Beelink SER8。** 对于大多数搭建本地 AI 智能家居的人来说，它是正确的默认选择：强劲的 Radeon 780M 核显、32 GB DDR5 和两个可更换内存插槽，价格约为 GEEKOM A9 Max 的一半。\n\n它最强的用例是**一体化家庭服务器**——在一台安静的机器上运行 Home Assistant、Ollama、Whisper 和 Frigate。只有当你需要更大的模型（更多内存余量）或外接 GPU 路径时才升级；只有当极小模型就够用时才降级到 Intel N150 机型。',
        affiliateLinks: [
          { label: '查看当前价格 — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: '规格',
        content:
          '**以下所有规格均于 2026 年 7 月与 Beelink 及独立评测来源核对验证。** 出厂内存因 SKU 而异（24、32 或 64 GB）；本表反映主流的 32 GB / 1 TB 机型。',
        columns: ['规格', 'Beelink SER8 (8845HS)'],
        rows: [
          { '规格': 'CPU', 'Beelink SER8 (8845HS)': 'AMD Ryzen 7 8845HS（Zen 4，4 nm）' },
          { '规格': '核心 / 线程', 'Beelink SER8 (8845HS)': '8 核 / 16 线程，最高 5.1 GHz' },
          { '规格': '核显', 'Beelink SER8 (8845HS)': 'AMD Radeon 780M — 12 CU，RDNA 3' },
          { '规格': 'NPU', 'Beelink SER8 (8845HS)': 'Ryzen AI，16 TOPS（XDNA 第一代）' },
          { '规格': '内存', 'Beelink SER8 (8845HS)': '32 GB DDR5-5600（2×16 GB）；双 SO-DIMM；用户可更换（SKU 最高 64 GB）' },
          { '规格': '存储', 'Beelink SER8 (8845HS)': '1 TB NVMe；2× M.2 2280 PCIe 4.0；最高 8 TB' },
          { '规格': '接口', 'Beelink SER8 (8845HS)': '1× USB4（40 Gbps）、3× USB-A 10 Gbps、2× USB-A 2.0、1× USB-C 10 Gbps、HDMI 2.1、DP 1.4、3.5 mm' },
          { '规格': '网络', 'Beelink SER8 (8845HS)': '1× 2.5GbE、Wi-Fi 6（非 6E）、Bluetooth 5.2' },
          { '规格': 'TDP', 'Beelink SER8 (8845HS)': '54–65 W（持续 65 W 运行）' },
          { '规格': '尺寸', 'Beelink SER8 (8845HS)': '135 × 135 × 44.7 mm，约 0.75 kg' },
          { '规格': '操作系统', 'Beelink SER8 (8845HS)': 'Windows 11 Pro（支持安装 Linux/Proxmox）' },
          { '规格': '价格（参考）', 'Beelink SER8 (8845HS)': '约 $650（2026 年 7 月 — 波动，请查看当前价格）' },
        ],
        items: [
          '无独立 GPU：所有 AI 推理都在共享系统内存的 CPU 和 Radeon 780M 核显上运行。',
          '双 SO-DIMM 插槽用户可更换；该平台的实际 DDR5 上限约为 96 GB。',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: '本地 AI 与 LLM 性能',
        content:
          '**凭借 32 GB 内存，SER8 可在 Ollama 上从容运行 7B 模型，并能以 4-bit 加载 13B–14B 模型，不过更大的模型受限于内存带宽而非容量——所有数据均据已验证硬件估算，并非实测基准。** Radeon 780M 是关键部件：在双通道 DDR5-5600 上，它让 7B 助手在 Home Assistant 旁保持响应迅速。',
        items: [
          'Ollama、LM Studio 和 llama.cpp 运行良好；780M 通过 Vulkan 或 ROCm 后端使用。',
          '7B 模型是从容的甜蜜点；13B–14B 适合非交互用途，但感觉较慢。',
          '32B 级模型在 32 GB 中仅勉强容纳且运行缓慢——这类用途请升级到 64 GB SKU。',
          '16 TOPS 的 NPU 未被主流 LLM 运行时使用；核显和内存带宽决定延迟。',
          '连接模型请参阅 [Home Assistant 上的 Ollama](/zh/smart-home/home-assistant-ollama-integration)，VRAM 深度请参阅 [本地 LLM 硬件指南](/zh/local-llms/local-llm-hardware-guide-2026)。',
        ],
        affiliateLinks: [
          { label: '查看当前价格 — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: '优点与缺点',
        content: '**SER8 是性价比标杆；对家庭服务器而言，它的妥协很小。** 均衡观点如下。',
        items: [
          '**优点**',
          '高性能本地 AI 机型的最佳性价比——约 $650 即可获得一台 7B 就绪的机器',
          '强劲的 Radeon 780M 核显和 32 GB DDR5 兼顾 Home Assistant 与 7B 模型',
          '两个用户可更换的 SO-DIMM 插槽和两个 M.2 插槽——可升级',
          'USB4、HDMI 2.1 和 DP 1.4 支持三路 4K 输出',
          '以 65 W 运行——对全天候服务器而言很节能',
          '**缺点**',
          'Wi-Fi 为 6，而非 6E——可靠有线连接请使用 2.5GbE 端口',
          '仅一个 2.5GbE 端口（UM890 Pro 等对手提供两个）',
          '32 GB 内存不足以在不升级的情况下运行 30B 以上的模型',
          'NPU 不加速本地 LLM',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: '购买者背景：关税与供货（2026）',
        content:
          '**SER8 在中国制造，因此其到岸价格反映了 2026 年的贸易措施——这是把任何价格都当作移动目标的理由。** 以下事实是购买者背景，而非编辑观点。',
        items: [
          '美国：针对中国电子产品的第 301 条关税在 2026 年仍然有效；另行的 2025 年"IEEPA"关税于 2026 年 2 月被最高法院推翻，并由临时的、有上限的第 122 条关税取代。针对直接进口的 800 美元以下免税"de minimis"豁免也已终止。',
          '欧盟（影响 DE/FR）：对成品迷你 PC 没有广泛的欧盟关税，但自 2026 年 7 月起，对来自中国的低价值直邮包裹的 150 欧元免税门槛被取消，并增加了每件包裹的小额处理费。',
          '假设（宏观趋势，而非单品事实）：中国转向的出口产能使这些品牌在欧盟和美国保持高供货，总体上支撑了具有竞争力的价格。',
          '净效应：购买前请在零售商处核实当前价格——此处约 $650 的数字是参考值，标注日期为 2026 年 7 月。',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '购买渠道与当前价格',
        content:
          '**价格逐周变动，因此请查看实时价格，而不要相信固定数字。** 截至 2026 年 7 月，32 GB / 1 TB 的 SER8 集中在 $650 左右，官方商店往往高于市场报价。',
        items: [
          '确认内存 SKU（24、32 或 64 GB）——32 GB 机型是 7B 模型的性价比甜蜜点。',
        ],
        affiliateLinks: [
          { label: '查看当前价格 — Beelink SER8', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '值得考虑的替代方案',
        content: '**如果 SER8 不合适，有四款机型在价格和性能上将其框定。**',
        items: [
          '[GEEKOM A9 Max](/zh/smart-home/geekom-a9-max-local-ai-review) — 追求余量之选：128 GB 内存上限和 Wi-Fi 7，价格约为两倍',
          '[Minisforum UM890 Pro](/zh/smart-home/minisforum-um890-pro-local-ai-review) — 类似的 Radeon 780M，但增加了双 2.5GbE、Wi-Fi 6E 和 OCuLink eGPU 端口',
          '[Beelink EQ14](/zh/smart-home/beelink-eq14-local-ai-review) — 面向 Home Assistant 加一个极小模型的经济型 Intel N150 机型',
          '[GMKtec G3 Plus](/zh/smart-home/gmktec-g3-plus-local-ai-review) — 另一款内存可升级的经济型 N150 选项',
          '还在比较？请从 [Home Assistant + 本地 AI 最佳迷你 PC 汇总](/zh/smart-home/best-mini-pc-home-assistant-local-ai) 开始。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Beelink SER8 能运行本地 LLM 吗？', a: '能。凭借 32 GB 内存和 Radeon 780M 核显，它可在 Ollama 上从容运行 7B 模型，并能以 4-bit 加载 13B–14B 模型。这是据其已验证硬件估算，而非固定基准，因为速度取决于模型、量化和后端。' },
          { q: '它的内存能容纳多大的模型？', a: '在 32 GB 下，7B 模型运行从容，4-bit 的 13B–14B 可用但较慢。30B 级模型仅勉强容纳且运行缓慢；这类模型请选择 64 GB SKU 或内存上限更高的机型。' },
          { q: 'SER8 适合 Home Assistant 和全天候运行吗？', a: '适合。它在 32 GB 上同时运行 Home Assistant、Ollama、Whisper 和 Frigate，负载下约耗 65 W，因此持续运行成本低廉。可靠有线连接请使用 2.5GbE 端口。' },
          { q: '内存可以升级吗？', a: '可以。SER8 使用两个标准的、用户可更换的 DDR5 SO-DIMM 插槽，因此你可以从 32 GB 起步，日后升级到 64 GB。它还有两个用于扩展存储的 M.2 插槽。' },
          { q: 'SER8 有 Wi-Fi 6E 吗？', a: '没有。SER8 出厂搭载 Wi-Fi 6（Intel AX200 模块），而非 Wi-Fi 6E。对家庭服务器而言这很少要紧——有线 2.5GbE 连接比任何 Wi-Fi 频段都更可靠。' },
          { q: 'SER8 耗电多少？', a: '在持续负载下最高 65 W，空闲时远低于此，因此持续开机成本低廉。确切数值取决于工作负载和你选择的电源配置。' },
          { q: 'SER8 还是 GEEKOM A9 Max？', a: 'SER8 是性价比之选，约 $650 即可覆盖大多数本地 AI 智能家居需求。只有当你需要其 128 GB 内存上限、Wi-Fi 7 或额外的视觉余量时才选 A9 Max，其成本大约翻倍。' },
          { q: 'Beelink SER8 在哪里制造，这会影响价格吗？', a: '它在中国制造。2026 年，美国进口措施（第 301 条关税、800 美元以下 de minimis 豁免的终止）以及欧盟取消 150 欧元低价值包裹豁免都可能影响到岸成本，因此请核实零售商的当前价格，而不要依赖固定数字。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant + 本地 AI 最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 本评测所属的汇总',
          '[本地 LLM 硬件指南](/zh/local-llms/local-llm-hardware-guide-2026) — 跨集群：VRAM 与量化深度',
          '[用本地 LLM 运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 这台机器实际运行什么',
          '[将 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 接入模型',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — Pi 对迷你 PC 对 NAS',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Beelink SER8 评测（2026）：本地 AI 与家庭服务器',
      reviewBody:
        'Beelink SER8 是一款配备 Radeon 780M 核显和 32 GB DDR5 的 Ryzen 7 8845HS 迷你 PC，约 $650（2026 年 7 月）即可在 Ollama 上运行 Home Assistant 加一个 7B 本地 LLM。它是 2026 年性价比最高的本地 AI 迷你 PC。',
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
      url: 'https://www.promptquorum.com/zh/smart-home/beelink-ser8-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink SER8',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: '搭载 AMD Ryzen 7 8845HS、Radeon 780M 核显和 32 GB DDR5 的迷你 PC，用于本地 AI 和家庭服务器。',
      },
    },
  },
}
