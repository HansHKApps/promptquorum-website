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
    title: 'GMKtec G3 Plus Review (2026): Budget Local Smart Home',
    seoTitle: 'GMKtec G3 Plus Review 2026 — Budget Smart-Home Box',
    intro:
      'The GMKtec NucBox G3 Plus (Intel N150, upgradeable to 32 GB DDR4) is a budget mini PC for a local-first smart home. At about $180–230 (July 2026, price volatile) it runs Home Assistant and a small local model, with a genuine advantage over some rivals: its RAM is a replaceable SO-DIMM, not soldered. This review verifies its specs, sets honest expectations for local-LLM speed, and explains where it fits against the Beelink EQ14 and the Ryzen-class boxes.',
    metaDescription:
      'GMKtec G3 Plus review 2026: Intel N150, upgradeable to 32 GB DDR4, dual HDMI, single 2.5GbE, ~$180–230. A budget Home Assistant box with replaceable RAM — full spec breakdown.',
    twitterDescription:
      'GMKtec G3 Plus (2026): Intel N150, upgradeable to 32 GB DDR4 (not soldered), ~$180–230. A budget Home Assistant box for a small local model — here is where it fits.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Budget buyers running Home Assistant and a small local model',
    primaryTerm: 'GMKtec G3 Plus review',
    targetKeywords: [
      'gmktec g3 plus review',
      'gmktec g3 plus home assistant',
      'gmktec g3 plus local ai',
      'gmktec nucbox g3 plus n150',
      'gmktec g3 plus local llm',
    ],
    leadAnswerBlock:
      '**The GMKtec G3 Plus (Intel N150, upgradeable to 32 GB DDR4) is a budget mini PC that runs Home Assistant and a small 1B–8B local model for about $180–230 (July 2026, volatile).** Its standout is a replaceable SO-DIMM RAM slot that reaches 32 GB — more memory headroom than a Beelink EQ14 — though it runs a single 2.5GbE port and no USB-C.',
    quickAnswerTop: {
      en: {
        question: 'Is the GMKtec G3 Plus good for Home Assistant and local AI?',
        answer:
          'Yes for Home Assistant, with limits for AI. The Intel N150 (4 cores), Intel UHD graphics, and DDR4 memory run Home Assistant and a small local model well. Because its single SO-DIMM slot reaches 32 GB, it has a little more headroom than 16 GB-capped rivals — but single-channel DDR4 and no NPU still make anything beyond a small model slow. At about $180–230 (July 2026, volatile) it is a budget box, not a local-LLM machine.',
        bullets: [
          'CPU: Intel N150 — 4 cores / 4 threads, Intel UHD graphics (24 EU), no NPU',
          'RAM: DDR4-3200, single SO-DIMM slot, upgradeable to 32 GB (replaceable, not soldered)',
          'Local LLM (estimated from specs): 1B–8B 4-bit fits; 7–8B is usable but slow',
          'Ports: dual HDMI (dual 4K/60), single 2.5GbE, Wi-Fi 6 — no USB-C',
          'Price ~$180–230 (July 2026, volatile) — budget Home Assistant box',
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
      { type: 'one-sentence', content: 'The GMKtec G3 Plus is a budget Intel N150 mini PC that runs Home Assistant and a small local model, with a replaceable DDR4 slot that reaches 32 GB.' },
      { type: 'plain-terms', content: 'A mini PC is a small, low-power always-on computer. The G3 Plus is a cheap one that runs a smart-home hub and a small AI model. Unlike some budget boxes, its memory can be swapped and taken up to 32 GB, which gives a bit more room — but it is still a hub, not a fast AI machine.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The G3 Plus runs Home Assistant and a small 1B–8B local model for about $180–230',
          'Intel N150: 4 cores, Intel UHD graphics, DDR4 upgradeable to 32 GB (replaceable SO-DIMM), no NPU',
          'A 7–8B model fits but runs slowly — this is a budget hub, not an AI box',
          'Standout vs the [Beelink EQ14](/smart-home/beelink-eq14-local-ai-review): 32 GB RAM ceiling (but only one 2.5GbE port and no USB-C)',
          'For a responsive 7B assistant, step up to a [Beelink SER8](/smart-home/beelink-ser8-local-ai-review)',
          'Made in China — factor 2026 US/EU import measures into landed cost (see trade note)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — Who Should Buy It',
        content:
          '**Buy the GMKtec G3 Plus if you want a cheap Home Assistant box and you value a replaceable RAM slot that reaches 32 GB.** For about $180–230 it is a solid budget entry to a local-first smart home, with a little more memory headroom than 16 GB-capped rivals. Do not expect a fast local assistant — the Intel N150 with single-channel DDR4 handles small models only.\n\nIts single strongest use case is a **compact, upgradeable Home Assistant hub** that can also host a small model. If you want two network ports, the Beelink EQ14 is the better hub; if you want real AI speed, move up to a Ryzen box.',
        affiliateLinks: [
          { label: 'Check current price — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Specifications',
        content:
          '**All specs below were verified against GMKtec and independent review sources in July 2026.** The RAM is a replaceable DDR4 SO-DIMM (not soldered) that reaches 32 GB. There is no USB-C port on this model.',
        columns: ['Spec', 'GMKtec G3 Plus (N150)'],
        rows: [
          { Spec: 'CPU', 'GMKtec G3 Plus (N150)': 'Intel N150 (Twin Lake / Alder Lake-N)' },
          { Spec: 'Cores / threads', 'GMKtec G3 Plus (N150)': '4 cores / 4 threads, up to 3.6 GHz' },
          { Spec: 'iGPU', 'GMKtec G3 Plus (N150)': 'Intel UHD Graphics, 24 EU, up to 1000 MHz' },
          { Spec: 'NPU', 'GMKtec G3 Plus (N150)': 'None' },
          { Spec: 'RAM', 'GMKtec G3 Plus (N150)': 'DDR4-3200, single SO-DIMM, upgradeable to 32 GB (replaceable, not soldered)' },
          { Spec: 'Storage', 'GMKtec G3 Plus (N150)': 'M.2 2280 PCIe 3.0 NVMe (up to 4 TB) + M.2 2242 SATA (up to 2 TB)' },
          { Spec: 'Ports', 'GMKtec G3 Plus (N150)': '4× USB-A 3.2 (up to 10 Gbps), 2× HDMI 2.0, 3.5 mm — no USB-C' },
          { Spec: 'Networking', 'GMKtec G3 Plus (N150)': '1× 2.5GbE (Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { Spec: 'TDP', 'GMKtec G3 Plus (N150)': '~6 W base; ~6 W idle, ~21 W under load' },
          { Spec: 'Dimensions', 'GMKtec G3 Plus (N150)': '114 × 106 × 42.5 mm, ~361 g' },
          { Spec: 'OS', 'GMKtec G3 Plus (N150)': 'Windows 11 Pro (Linux/Home Assistant OS supported)' },
          { Spec: 'Price (indicative)', 'GMKtec G3 Plus (N150)': '~$180–230 (July 2026 — volatile, check current price)' },
        ],
        items: [
          'Two storage slots — one NVMe (PCIe 3.0) and one SATA (M.2 2242) — allow a fast OS drive plus bulk storage.',
          'USB-A port speed varies by source and SKU (5–10 Gbps); confirm on the listing you buy.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Local AI & LLM Performance',
        content:
          '**A 1B–8B model at 4-bit fits on the G3 Plus; a 7–8B model is usable but slow, and the 32 GB RAM option allows a larger context or a ~13B model at low throughput — all figures estimated from the verified hardware, not a measured benchmark.** As with any N150 box, single-channel DDR4 bandwidth and the lack of an NPU are the limits.',
        items: [
          'Good for lightweight local assistants, summarization, and automations on small models.',
          'Upgrading to 32 GB helps context length more than raw speed — the memory bandwidth is unchanged.',
          'No NPU and limited iGPU acceleration, so inference is CPU-bound.',
          'For heavier local AI (vision, a fast 7B assistant), choose a Ryzen box instead.',
          'See [how to install Ollama](/local-llms/how-to-install-ollama) to try a small model, and the [local LLM hardware guide](/local-llms/local-llm-hardware-guide-2026) for context.',
        ],
        affiliateLinks: [
          { label: 'Check current price — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Pros & Cons',
        content: '**The G3 Plus trades networking for memory headroom versus the EQ14.** Balanced view below.',
        items: [
          '**Pros**',
          'Very affordable — about $180–230 for a Home Assistant box',
          'Replaceable DDR4 SO-DIMM upgradeable to 32 GB — more headroom than 16 GB-capped rivals',
          'Two storage slots: NVMe plus a separate SATA M.2 for bulk storage',
          'Low power: roughly 6 W idle, cheap to run 24/7',
          'Very compact (114 × 106 mm) and light (~361 g)',
          '**Cons**',
          'Only a single 2.5GbE port (the EQ14 has two)',
          'No USB-C port at all',
          'Single-channel DDR4 and no NPU — slow beyond a small model',
          'USB-A port speed is inconsistent across listings; verify before buying',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Buyer Context: Tariffs & Availability (2026)',
        content:
          '**The G3 Plus is manufactured in China, so its landed price reflects 2026 trade measures — a reason to treat any price as a moving target.** The facts below are buyer context, not editorial opinion.',
        items: [
          'US: Section 301 tariffs on Chinese electronics remain in force in 2026; the separate 2025 "IEEPA" tariffs were struck down by the Supreme Court in February 2026 and replaced by a temporary, capped Section 122 tariff. The sub-$800 duty-free "de minimis" exemption for direct imports has also ended.',
          'EU (affects DE/FR): there is no broad EU tariff on finished mini PCs, but from July 2026 the €150 duty-free threshold on low-value direct-from-China parcels was removed and a small per-parcel handling fee added.',
          'Assumption (macro trend, not a per-product fact): redirected Chinese export capacity has kept availability of these brands high in the EU and US, which broadly supports competitive pricing.',
          'Net effect: verify the current price at the retailer before buying — the ~$180–230 figure here is indicative and date-stamped July 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Buy & Current Price',
        content:
          '**Prices move week to week, so check the live price rather than trusting a fixed figure.** As of July 2026 the 16 GB / 512 GB G3 Plus sits around $180–230; the manufacturer page may show a placeholder price that does not reflect street listings.',
        items: [
          'Confirm the RAM and storage capacity of the exact SKU — and that you can upgrade the SO-DIMM to 32 GB if you want the headroom.',
        ],
        affiliateLinks: [
          { label: 'Check current price — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Consider',
        content: '**If the G3 Plus is not the right budget box, consider these.**',
        items: [
          '[Beelink EQ14](/smart-home/beelink-eq14-local-ai-review) — the other budget N150 box; dual 2.5GbE networking but capped at 16 GB RAM',
          '[Beelink SER8](/smart-home/beelink-ser8-local-ai-review) — the step up: Ryzen 7 8845HS runs a real 7B assistant for about $650',
          '[Minisforum UM890 Pro](/smart-home/minisforum-um890-pro-local-ai-review) — mid-range Ryzen 9 with dual 2.5GbE and an eGPU port',
          '[GEEKOM A9 Max](/smart-home/geekom-a9-max-local-ai-review) — premium headroom box with a 128 GB RAM ceiling',
          'Still comparing? Start from the [best mini PCs for Home Assistant + local AI roundup](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can the GMKtec G3 Plus run local LLMs?', a: 'It can run small ones. A 1B–8B model at 4-bit fits, and a 7–8B model is usable but slow because of single-channel DDR4 bandwidth and the four-core N150. This is estimated from its verified hardware, not a fixed benchmark.' },
          { q: 'How big a model fits in its RAM?', a: 'With the base 16 GB, a 7–8B 4-bit model fits with headroom. Upgrading the SO-DIMM to 32 GB allows a longer context or a roughly 13B model at low throughput, though speed stays limited by memory bandwidth.' },
          { q: 'Is the RAM soldered or upgradeable?', a: 'Upgradeable. Despite some assumptions to the contrary, the G3 Plus uses a single replaceable DDR4 SO-DIMM slot, not soldered memory, and supports up to 32 GB. That upgrade path is a real advantage over budget boxes with fixed RAM.' },
          { q: 'Is the G3 Plus good for Home Assistant and always-on use?', a: 'Yes. It runs Home Assistant and add-ons well and draws about 6 W at idle, so it is cheap to leave on. Note it has a single 2.5GbE port, so it is less of a networking box than the dual-LAN Beelink EQ14.' },
          { q: 'Does the G3 Plus have a USB-C port?', a: 'No. This model has four USB-A ports and two HDMI outputs but no USB-C port, so plan your peripherals accordingly.' },
          { q: 'How much power does the G3 Plus use?', a: 'About 6 W at idle and roughly 21 W under load, so continuous operation costs very little. This efficiency is a key reason to choose an N150 box as a hub.' },
          { q: 'G3 Plus or Beelink EQ14?', a: 'Both use the Intel N150. The G3 Plus supports up to 32 GB of RAM, which helps context and larger small-models; the EQ14 caps at 16 GB but adds a second 2.5GbE port. Choose by whether you value memory headroom or dual networking.' },
          { q: 'Where is the GMKtec G3 Plus made, and does that affect price?', a: 'It is manufactured in China. In 2026 US import measures (Section 301 tariffs, the end of the sub-$800 de minimis exemption) and the EU removal of the €150 low-value parcel exemption can affect landed cost, so check the current retailer price rather than relying on a fixed number.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — the roundup this review belongs to',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the box actually runs',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — try a small model on the G3 Plus',
          '[Getting Started with Home Assistant](/smart-home/home-assistant-getting-started) — set up the hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'GMKtec G3 Plus Review (2026): Budget Local Smart Home',
      reviewBody:
        'The GMKtec NucBox G3 Plus is a budget Intel N150 mini PC with a replaceable DDR4 SO-DIMM upgradeable to 32 GB. It runs Home Assistant and a small local model for about $180–230 (July 2026). A hub with memory headroom, not a fast AI machine.',
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
      url: 'https://www.promptquorum.com/smart-home/gmktec-g3-plus-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GMKtec NucBox G3 Plus',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GMKtec' },
        description: 'Budget mini PC with Intel N150 and DDR4 RAM upgradeable to 32 GB, for Home Assistant and a small local model.',
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
    title: 'GMKtec G3 Plus Test (2026): Günstiges lokales Smart Home',
    seoTitle: 'GMKtec G3 Plus Test 2026 — Günstige Smart-Home-Box',
    intro:
      'Der GMKtec NucBox G3 Plus (Intel N150, aufrüstbar auf 32 GB DDR4) ist ein günstiger Mini-PC für ein lokal betriebenes Smart Home. Für etwa 199–239 € (Stand Juli 2026, Preis schwankt) betreibt er Home Assistant und ein kleines lokales Modell — mit einem echten Vorteil gegenüber manchen Konkurrenten: Sein RAM ist ein austauschbares SO-DIMM, nicht verlötet. Dieser Test prüft die Spezifikationen, setzt ehrliche Erwartungen an die Geschwindigkeit lokaler LLMs und erklärt, wo er sich gegenüber dem Beelink EQ14 und den Ryzen-Boxen einordnet.',
    metaDescription:
      'GMKtec G3 Plus Test 2026: Intel N150, aufrüstbar auf 32 GB DDR4, Dual-HDMI, einzelnes 2,5GbE, ca. 199–239 €. Eine günstige Home-Assistant-Box mit austauschbarem RAM — die komplette Spezifikationsanalyse.',
    twitterDescription:
      'GMKtec G3 Plus (2026): Intel N150, aufrüstbar auf 32 GB DDR4 (nicht verlötet), ca. 199–239 €. Eine günstige Home-Assistant-Box für ein kleines lokales Modell — hier passt sie hin.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Sparsame Käufer, die Home Assistant und ein kleines lokales Modell betreiben',
    primaryTerm: 'GMKtec G3 Plus Test',
    targetKeywords: [
      'gmktec g3 plus test',
      'gmktec g3 plus home assistant',
      'gmktec g3 plus lokale ki',
      'gmktec nucbox g3 plus n150',
      'gmktec g3 plus lokales llm',
    ],
    leadAnswerBlock:
      '**Der GMKtec G3 Plus (Intel N150, aufrüstbar auf 32 GB DDR4) ist ein günstiger Mini-PC, der Home Assistant und ein kleines lokales 1B–8B-Modell für etwa 199–239 € betreibt (Stand Juli 2026, schwankend).** Sein Alleinstellungsmerkmal ist ein austauschbarer SO-DIMM-RAM-Steckplatz, der 32 GB erreicht — mehr Speicherreserve als ein Beelink EQ14 —, wobei er allerdings nur einen einzelnen 2,5GbE-Port und kein USB-C bietet.',
    quickAnswerTop: {
      de: {
        question: 'Ist der GMKtec G3 Plus gut für Home Assistant und lokale KI?',
        answer:
          'Ja für Home Assistant, mit Einschränkungen bei KI. Der Intel N150 (4 Kerne), die Intel-UHD-Grafik und der DDR4-Speicher betreiben Home Assistant und ein kleines lokales Modell gut. Da sein einzelner SO-DIMM-Steckplatz 32 GB erreicht, hat er etwas mehr Reserve als die auf 16 GB begrenzten Konkurrenten — doch Single-Channel-DDR4 und der fehlende NPU machen alles jenseits eines kleinen Modells weiterhin langsam. Für etwa 199–239 € (Stand Juli 2026, schwankend) ist er eine günstige Box, keine LLM-Maschine.',
        bullets: [
          'CPU: Intel N150 — 4 Kerne / 4 Threads, Intel-UHD-Grafik (24 EU), kein NPU',
          'RAM: DDR4-3200, einzelner SO-DIMM-Steckplatz, aufrüstbar auf 32 GB (austauschbar, nicht verlötet)',
          'Lokales LLM (aus den Spezifikationen geschätzt): 1B–8B in 4-Bit passt; 7–8B nutzbar, aber langsam',
          'Anschlüsse: Dual-HDMI (2× 4K/60), einzelnes 2,5GbE, Wi-Fi 6 — kein USB-C',
          'Preis ca. 199–239 € (Stand Juli 2026, schwankend) — günstige Home-Assistant-Box',
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
      { type: 'one-sentence', content: 'Der GMKtec G3 Plus ist ein günstiger Intel-N150-Mini-PC, der Home Assistant und ein kleines lokales Modell betreibt, mit einem austauschbaren DDR4-Steckplatz, der 32 GB erreicht.' },
      { type: 'plain-terms', content: 'Ein Mini-PC ist ein kleiner, stromsparender Dauerläufer-Computer. Der G3 Plus ist ein günstiger, der eine Smart-Home-Zentrale und ein kleines KI-Modell betreibt. Anders als manche Budget-Boxen lässt sich sein Speicher tauschen und auf 32 GB erhöhen, was etwas mehr Spielraum gibt — aber er bleibt eine Zentrale, keine schnelle KI-Maschine.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Der G3 Plus betreibt Home Assistant und ein kleines lokales 1B–8B-Modell für etwa 199–239 €',
          'Intel N150: 4 Kerne, Intel-UHD-Grafik, DDR4 aufrüstbar auf 32 GB (austauschbares SO-DIMM), kein NPU',
          'Ein 7–8B-Modell passt, läuft aber langsam — dies ist eine günstige Zentrale, keine KI-Box',
          'Alleinstellungsmerkmal gegenüber dem [Beelink EQ14](/de/smart-home/beelink-eq14-local-ai-review): 32 GB RAM-Obergrenze (aber nur ein 2,5GbE-Port und kein USB-C)',
          'Für einen flüssigen 7B-Assistenten greifen Sie zum [Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review)',
          'In China gefertigt — kalkulieren Sie die US-/EU-Importmaßnahmen 2026 in die Endkosten ein (siehe Zollhinweis)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit — Für wen geeignet',
        content:
          '**Kaufen Sie den GMKtec G3 Plus, wenn Sie eine günstige Home-Assistant-Box möchten und Wert auf einen austauschbaren RAM-Steckplatz legen, der 32 GB erreicht.** Für etwa 199–239 € ist er ein solider, günstiger Einstieg in ein lokal betriebenes Smart Home, mit etwas mehr Speicherreserve als die auf 16 GB begrenzten Konkurrenten. Erwarten Sie keinen schnellen lokalen Assistenten — der Intel N150 mit Single-Channel-DDR4 bewältigt nur kleine Modelle.\n\nSein stärkster Anwendungsfall ist eine **kompakte, aufrüstbare Home-Assistant-Zentrale**, die auch ein kleines Modell hosten kann. Wenn Sie zwei Netzwerkports wollen, ist der Beelink EQ14 die bessere Zentrale; wenn Sie echte KI-Geschwindigkeit brauchen, steigen Sie auf eine Ryzen-Box um.',
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Spezifikationen',
        content:
          '**Alle folgenden Spezifikationen wurden im Juli 2026 gegen GMKtec und unabhängige Testquellen geprüft.** Der RAM ist ein austauschbares DDR4-SO-DIMM (nicht verlötet), das 32 GB erreicht. Dieses Modell hat keinen USB-C-Anschluss.',
        columns: ['Spezifikation', 'GMKtec G3 Plus (N150)'],
        rows: [
          { Spezifikation: 'CPU', 'GMKtec G3 Plus (N150)': 'Intel N150 (Twin Lake / Alder Lake-N)' },
          { Spezifikation: 'Kerne / Threads', 'GMKtec G3 Plus (N150)': '4 Kerne / 4 Threads, bis zu 3,6 GHz' },
          { Spezifikation: 'iGPU', 'GMKtec G3 Plus (N150)': 'Intel UHD Graphics, 24 EU, bis zu 1000 MHz' },
          { Spezifikation: 'NPU', 'GMKtec G3 Plus (N150)': 'Keine' },
          { Spezifikation: 'RAM', 'GMKtec G3 Plus (N150)': 'DDR4-3200, einzelnes SO-DIMM, aufrüstbar auf 32 GB (austauschbar, nicht verlötet)' },
          { Spezifikation: 'Speicher', 'GMKtec G3 Plus (N150)': 'M.2 2280 PCIe 3.0 NVMe (bis zu 4 TB) + M.2 2242 SATA (bis zu 2 TB)' },
          { Spezifikation: 'Anschlüsse', 'GMKtec G3 Plus (N150)': '4× USB-A 3.2 (bis zu 10 Gbit/s), 2× HDMI 2.0, 3,5 mm — kein USB-C' },
          { Spezifikation: 'Netzwerk', 'GMKtec G3 Plus (N150)': '1× 2,5GbE (Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { Spezifikation: 'TDP', 'GMKtec G3 Plus (N150)': '~6 W Basis; ~6 W Leerlauf, ~21 W unter Last' },
          { Spezifikation: 'Abmessungen', 'GMKtec G3 Plus (N150)': '114 × 106 × 42,5 mm, ~361 g' },
          { Spezifikation: 'Betriebssystem', 'GMKtec G3 Plus (N150)': 'Windows 11 Pro (Linux/Home Assistant OS unterstützt)' },
          { Spezifikation: 'Preis (Richtwert)', 'GMKtec G3 Plus (N150)': 'ca. 199–239 € (Juli 2026 — schwankend, aktuellen Preis prüfen)' },
        ],
        items: [
          'Zwei Speichersteckplätze — ein NVMe (PCIe 3.0) und ein SATA (M.2 2242) — erlauben eine schnelle Systemplatte plus Massenspeicher.',
          'Die USB-A-Geschwindigkeit variiert je nach Quelle und SKU (5–10 Gbit/s); prüfen Sie das Angebot, das Sie kaufen.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Lokale KI & LLM-Leistung',
        content:
          '**Ein 1B–8B-Modell in 4-Bit passt auf den G3 Plus; ein 7–8B-Modell ist nutzbar, aber langsam, und die 32-GB-RAM-Option erlaubt einen größeren Kontext oder ein ~13B-Modell mit geringem Durchsatz — alle Werte sind aus der geprüften Hardware geschätzt, kein gemessener Benchmark.** Wie bei jeder N150-Box sind die Single-Channel-DDR4-Bandbreite und das fehlende NPU die Grenzen.',
        items: [
          'Gut für schlanke lokale Assistenten, Zusammenfassungen und Automatisierungen mit kleinen Modellen.',
          'Die Aufrüstung auf 32 GB hilft der Kontextlänge mehr als der reinen Geschwindigkeit — die Speicherbandbreite bleibt unverändert.',
          'Kein NPU und begrenzte iGPU-Beschleunigung, daher ist die Inferenz CPU-gebunden.',
          'Für anspruchsvollere lokale KI (Vision, ein schneller 7B-Assistent) wählen Sie stattdessen eine Ryzen-Box.',
          'Siehe [wie man Ollama installiert](/de/local-llms/how-to-install-ollama), um ein kleines Modell auszuprobieren, und den [Hardware-Guide für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026) für den Kontext.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Vorteile & Nachteile',
        content: '**Der G3 Plus tauscht Netzwerk gegen Speicherreserve gegenüber dem EQ14.** Ausgewogene Betrachtung unten.',
        items: [
          '**Vorteile**',
          'Sehr günstig — etwa 199–239 € für eine Home-Assistant-Box',
          'Austauschbares DDR4-SO-DIMM, aufrüstbar auf 32 GB — mehr Reserve als bei auf 16 GB begrenzten Konkurrenten',
          'Zwei Speichersteckplätze: NVMe plus ein separater SATA-M.2 für Massenspeicher',
          'Geringer Verbrauch: rund 6 W im Leerlauf, günstig im 24/7-Betrieb',
          'Sehr kompakt (114 × 106 mm) und leicht (~361 g)',
          '**Nachteile**',
          'Nur ein einzelner 2,5GbE-Port (der EQ14 hat zwei)',
          'Überhaupt kein USB-C-Anschluss',
          'Single-Channel-DDR4 und kein NPU — langsam jenseits eines kleinen Modells',
          'Die USB-A-Geschwindigkeit ist über die Angebote hinweg uneinheitlich; vor dem Kauf prüfen',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Käuferkontext: Zölle & Verfügbarkeit (2026)',
        content:
          '**Der G3 Plus wird in China gefertigt, daher spiegelt sein Endpreis die Handelsmaßnahmen 2026 wider — ein Grund, jeden Preis als bewegliches Ziel zu behandeln.** Die folgenden Fakten sind Käuferkontext, keine redaktionelle Meinung.',
        items: [
          'USA: Die Section-301-Zölle auf chinesische Elektronik gelten 2026 weiterhin; die separaten "IEEPA"-Zölle von 2025 wurden im Februar 2026 vom Obersten Gerichtshof gekippt und durch einen befristeten, gedeckelten Section-122-Zoll ersetzt. Die zollfreie "De-minimis"-Ausnahme unter 800 USD für Direktimporte ist ebenfalls entfallen.',
          'EU (betrifft DE/FR): Es gibt keinen breiten EU-Zoll auf fertige Mini-PCs, aber ab Juli 2026 wurde die zollfreie 150-€-Grenze für geringwertige Direktsendungen aus China aufgehoben und eine kleine Bearbeitungsgebühr pro Sendung eingeführt.',
          'Annahme (Makrotrend, kein produktspezifischer Fakt): Umgeleitete chinesische Exportkapazitäten haben die Verfügbarkeit dieser Marken in EU und USA hochgehalten, was wettbewerbsfähige Preise insgesamt stützt.',
          'Nettoeffekt: Prüfen Sie den aktuellen Preis beim Händler vor dem Kauf — der hier genannte Richtwert von ca. 199–239 € ist indikativ und mit Stand Juli 2026 datiert.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Wo kaufen & aktueller Preis',
        content:
          '**Die Preise ändern sich von Woche zu Woche, prüfen Sie also den Live-Preis statt einer festen Zahl zu vertrauen.** Stand Juli 2026 liegt der G3 Plus mit 16 GB / 512 GB bei etwa 199–239 €; die Herstellerseite zeigt möglicherweise einen Platzhalterpreis, der nicht den Straßenpreisen entspricht.',
        items: [
          'Bestätigen Sie RAM- und Speicherkapazität der genauen SKU — und dass Sie das SO-DIMM auf 32 GB aufrüsten können, falls Sie die Reserve möchten.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Zu erwägende Alternativen',
        content: '**Falls der G3 Plus nicht die richtige Budget-Box ist, ziehen Sie diese in Betracht.**',
        items: [
          '[Beelink EQ14](/de/smart-home/beelink-eq14-local-ai-review) — die andere günstige N150-Box; Dual-2,5GbE-Netzwerk, aber auf 16 GB RAM begrenzt',
          '[Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review) — die nächste Stufe: Ryzen 7 8845HS betreibt einen echten 7B-Assistenten für etwa 650 €',
          '[Minisforum UM890 Pro](/de/smart-home/minisforum-um890-pro-local-ai-review) — Mittelklasse-Ryzen-9 mit Dual-2,5GbE und einem eGPU-Port',
          '[GEEKOM A9 Max](/de/smart-home/geekom-a9-max-local-ai-review) — Premium-Box mit Reserve und 128-GB-RAM-Obergrenze',
          'Noch am Vergleichen? Starten Sie mit der [Übersicht der besten Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann der GMKtec G3 Plus lokale LLMs betreiben?', a: 'Er kann kleine betreiben. Ein 1B–8B-Modell in 4-Bit passt, und ein 7–8B-Modell ist nutzbar, aber langsam wegen der Single-Channel-DDR4-Bandbreite und des Vierkern-N150. Dies ist aus seiner geprüften Hardware geschätzt, kein fester Benchmark.' },
          { q: 'Wie groß darf ein Modell für seinen RAM sein?', a: 'Mit den Basis-16 GB passt ein 7–8B-Modell in 4-Bit mit Reserve. Die Aufrüstung des SO-DIMM auf 32 GB erlaubt einen längeren Kontext oder ein etwa 13B großes Modell mit geringem Durchsatz, wobei die Geschwindigkeit durch die Speicherbandbreite begrenzt bleibt.' },
          { q: 'Ist der RAM verlötet oder aufrüstbar?', a: 'Aufrüstbar. Entgegen mancher Annahmen nutzt der G3 Plus einen einzelnen austauschbaren DDR4-SO-DIMM-Steckplatz, keinen verlöteten Speicher, und unterstützt bis zu 32 GB. Dieser Aufrüstpfad ist ein echter Vorteil gegenüber Budget-Boxen mit fixem RAM.' },
          { q: 'Ist der G3 Plus gut für Home Assistant und Dauerbetrieb?', a: 'Ja. Er betreibt Home Assistant und Add-ons gut und zieht im Leerlauf etwa 6 W, ist also günstig im Dauerbetrieb. Beachten Sie: Er hat nur einen 2,5GbE-Port, ist also weniger eine Netzwerk-Box als der Dual-LAN-Beelink-EQ14.' },
          { q: 'Hat der G3 Plus einen USB-C-Anschluss?', a: 'Nein. Dieses Modell hat vier USB-A-Anschlüsse und zwei HDMI-Ausgänge, aber keinen USB-C-Anschluss, planen Sie Ihre Peripherie entsprechend.' },
          { q: 'Wie viel Strom verbraucht der G3 Plus?', a: 'Etwa 6 W im Leerlauf und rund 21 W unter Last, sodass Dauerbetrieb sehr wenig kostet. Diese Effizienz ist ein Hauptgrund, eine N150-Box als Zentrale zu wählen.' },
          { q: 'G3 Plus oder Beelink EQ14?', a: 'Beide nutzen den Intel N150. Der G3 Plus unterstützt bis zu 32 GB RAM, was Kontext und größere kleine Modelle begünstigt; der EQ14 ist bei 16 GB gedeckelt, ergänzt aber einen zweiten 2,5GbE-Port. Wählen Sie danach, ob Sie Speicherreserve oder Dual-Netzwerk schätzen.' },
          { q: 'Wo wird der GMKtec G3 Plus gefertigt, und beeinflusst das den Preis?', a: 'Er wird in China gefertigt. 2026 können US-Importmaßnahmen (Section-301-Zölle, das Ende der De-minimis-Ausnahme unter 800 USD) und die EU-Aufhebung der 150-€-Grenze für geringwertige Sendungen die Endkosten beeinflussen, prüfen Sie also den aktuellen Händlerpreis, statt sich auf eine feste Zahl zu verlassen.' },
          { q: 'Muss ich bei der Nutzung des GMKtec G3 Plus für lokale KI die DSGVO beachten?', a: 'Genau die lokale Verarbeitung erleichtert die DSGVO-Konformität. Weil Home Assistant und das lokale Modell die Daten auf dem Gerät halten, verlassen personenbezogene Daten nicht Ihr Netzwerk — das unterstützt die Datenresidenz- und Verarbeitungspflichten nach DSGVO-Artikel 28 und passt zu den BSI-Grundschutz-Katalogen. Für sensible Anwendungsfälle dokumentieren Sie den Datenfluss und sichern das Gerät im Netzwerk ab; die lokale Inferenz selbst vermeidet die Übermittlung an Dritte.' },
          { q: 'Ist der G3 Plus für den deutschen Mittelstand geeignet?', a: 'Für leichte, lokal betriebene Aufgaben ja. Kleine und mittlere Unternehmen im DACH-Raum können den G3 Plus als günstige Home-Assistant- oder Automatisierungszentrale mit einem kleinen lokalen Modell einsetzen, ohne Cloud-Abhängigkeit. Für IT-Sicherheit orientieren Sie sich an den BSI-Grundschutz-Katalogen (Netzsegmentierung, Updates, Zugriffskontrolle). Für produktive KI-Arbeit über kleine Modelle hinaus ist eine Ryzen-Box die bessere Wahl.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) — die Übersicht, zu der dieser Test gehört',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) — Pi vs. Mini-PC vs. NAS',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) — was die Box tatsächlich betreibt',
          '[Wie man Ollama installiert](/de/local-llms/how-to-install-ollama) — ein kleines Modell auf dem G3 Plus ausprobieren',
          '[Erste Schritte mit Home Assistant](/de/smart-home/home-assistant-getting-started) — die Zentrale einrichten',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'GMKtec G3 Plus Test (2026): Günstiges lokales Smart Home',
      reviewBody:
        'Der GMKtec NucBox G3 Plus ist ein günstiger Intel-N150-Mini-PC mit einem austauschbaren DDR4-SO-DIMM, aufrüstbar auf 32 GB. Er betreibt Home Assistant und ein kleines lokales Modell für etwa 199–239 € (Stand Juli 2026). Eine Zentrale mit Speicherreserve, keine schnelle KI-Maschine.',
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
      url: 'https://www.promptquorum.com/de/smart-home/gmktec-g3-plus-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GMKtec NucBox G3 Plus',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GMKtec' },
        description: 'Günstiger Mini-PC mit Intel N150 und DDR4-RAM aufrüstbar auf 32 GB, für Home Assistant und ein kleines lokales Modell.',
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
    title: 'Test GMKtec G3 Plus (2026) : maison connectée locale',
    seoTitle: 'Test GMKtec G3 Plus 2026 — Mini-PC domotique abordable',
    intro:
      'Le GMKtec NucBox G3 Plus (Intel N150, extensible à 32 Go DDR4) est un mini-PC abordable pour une maison connectée locale. À environ 199–239 € (juillet 2026, prix volatil), il fait tourner Home Assistant et un petit modèle local, avec un vrai atout face à certains rivaux : sa RAM est un SO-DIMM remplaçable, non soudé. Ce test vérifie ses spécifications, fixe des attentes honnêtes sur la vitesse des LLM locaux et explique où il se situe face au Beelink EQ14 et aux boîtiers Ryzen.',
    metaDescription:
      'Test GMKtec G3 Plus 2026 : Intel N150, extensible à 32 Go DDR4, double HDMI, un seul 2,5GbE, ~199–239 €. Un boîtier Home Assistant abordable à RAM remplaçable — analyse complète.',
    twitterDescription:
      'GMKtec G3 Plus (2026) : Intel N150, extensible à 32 Go DDR4 (non soudée), ~199–239 €. Un boîtier Home Assistant abordable pour un petit modèle local — voici où il se situe.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Acheteurs au budget serré faisant tourner Home Assistant et un petit modèle local',
    primaryTerm: 'test GMKtec G3 Plus',
    targetKeywords: [
      'test gmktec g3 plus',
      'gmktec g3 plus home assistant',
      'gmktec g3 plus ia locale',
      'gmktec nucbox g3 plus n150',
      'gmktec g3 plus llm local',
    ],
    leadAnswerBlock:
      '**Le GMKtec G3 Plus (Intel N150, extensible à 32 Go DDR4) est un mini-PC abordable qui fait tourner Home Assistant et un petit modèle local 1B–8B pour environ 199–239 € (juillet 2026, volatil).** Son point fort est un emplacement SO-DIMM remplaçable atteignant 32 Go — plus de marge mémoire qu\'un Beelink EQ14 — même s\'il n\'offre qu\'un seul port 2,5GbE et pas d\'USB-C.',
    quickAnswerTop: {
      fr: {
        question: 'Le GMKtec G3 Plus est-il bon pour Home Assistant et l\'IA locale ?',
        answer:
          'Oui pour Home Assistant, avec des limites pour l\'IA. L\'Intel N150 (4 cœurs), le GPU Intel UHD et la mémoire DDR4 font bien tourner Home Assistant et un petit modèle local. Comme son unique emplacement SO-DIMM atteint 32 Go, il offre un peu plus de marge que les rivaux limités à 16 Go — mais la DDR4 mono-canal et l\'absence de NPU rendent tout ce qui dépasse un petit modèle lent. À environ 199–239 € (juillet 2026, volatil), c\'est un boîtier abordable, pas une machine à LLM.',
        bullets: [
          'CPU : Intel N150 — 4 cœurs / 4 threads, GPU Intel UHD (24 EU), pas de NPU',
          'RAM : DDR4-3200, un seul emplacement SO-DIMM, extensible à 32 Go (remplaçable, non soudée)',
          'LLM local (estimé d\'après les specs) : 1B–8B en 4-bit tient ; 7–8B utilisable mais lent',
          'Ports : double HDMI (double 4K/60), un seul 2,5GbE, Wi-Fi 6 — pas d\'USB-C',
          'Prix ~199–239 € (juillet 2026, volatil) — boîtier Home Assistant abordable',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
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
      { type: 'one-sentence', content: 'Le GMKtec G3 Plus est un mini-PC Intel N150 abordable qui fait tourner Home Assistant et un petit modèle local, avec un emplacement DDR4 remplaçable atteignant 32 Go.' },
      { type: 'plain-terms', content: 'Un mini-PC est un petit ordinateur peu gourmand, allumé en permanence. Le G3 Plus est un modèle bon marché qui fait tourner un hub domotique et un petit modèle d\'IA. Contrairement à certains boîtiers d\'entrée de gamme, sa mémoire peut être remplacée et portée à 32 Go, ce qui donne un peu plus de marge — mais il reste un hub, pas une machine d\'IA rapide.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Le G3 Plus fait tourner Home Assistant et un petit modèle local 1B–8B pour environ 199–239 €',
          'Intel N150 : 4 cœurs, GPU Intel UHD, DDR4 extensible à 32 Go (SO-DIMM remplaçable), pas de NPU',
          'Un modèle 7–8B tient mais tourne lentement — c\'est un hub abordable, pas un boîtier d\'IA',
          'Atout face au [Beelink EQ14](/fr/smart-home/beelink-eq14-local-ai-review) : plafond de 32 Go de RAM (mais un seul port 2,5GbE et pas d\'USB-C)',
          'Pour un assistant 7B réactif, montez en gamme vers un [Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review)',
          'Fabriqué en Chine — intégrez les mesures d\'importation US/UE 2026 au coût final (voir la note douanière)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — À qui il s\'adresse',
        content:
          '**Achetez le GMKtec G3 Plus si vous voulez un boîtier Home Assistant bon marché et que vous appréciez un emplacement RAM remplaçable atteignant 32 Go.** Pour environ 199–239 €, c\'est une porte d\'entrée solide et abordable vers une maison connectée locale, avec un peu plus de marge mémoire que les rivaux limités à 16 Go. N\'attendez pas un assistant local rapide — l\'Intel N150 avec DDR4 mono-canal ne gère que de petits modèles.\n\nSon meilleur usage est un **hub Home Assistant compact et évolutif** capable aussi d\'héberger un petit modèle. Si vous voulez deux ports réseau, le Beelink EQ14 est le meilleur hub ; si vous voulez une vraie vitesse d\'IA, passez à un boîtier Ryzen.',
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Spécifications',
        content:
          '**Toutes les spécifications ci-dessous ont été vérifiées auprès de GMKtec et de sources de test indépendantes en juillet 2026.** La RAM est un SO-DIMM DDR4 remplaçable (non soudé) atteignant 32 Go. Ce modèle n\'a pas de port USB-C.',
        columns: ['Spécification', 'GMKtec G3 Plus (N150)'],
        rows: [
          { 'Spécification': 'CPU', 'GMKtec G3 Plus (N150)': 'Intel N150 (Twin Lake / Alder Lake-N)' },
          { 'Spécification': 'Cœurs / threads', 'GMKtec G3 Plus (N150)': '4 cœurs / 4 threads, jusqu\'à 3.6 GHz' },
          { 'Spécification': 'iGPU', 'GMKtec G3 Plus (N150)': 'Intel UHD Graphics, 24 EU, jusqu\'à 1000 MHz' },
          { 'Spécification': 'NPU', 'GMKtec G3 Plus (N150)': 'Aucun' },
          { 'Spécification': 'RAM', 'GMKtec G3 Plus (N150)': 'DDR4-3200, un seul SO-DIMM, extensible à 32 Go (remplaçable, non soudée)' },
          { 'Spécification': 'Stockage', 'GMKtec G3 Plus (N150)': 'M.2 2280 PCIe 3.0 NVMe (jusqu\'à 4 To) + M.2 2242 SATA (jusqu\'à 2 To)' },
          { 'Spécification': 'Ports', 'GMKtec G3 Plus (N150)': '4× USB-A 3.2 (jusqu\'à 10 Gbit/s), 2× HDMI 2.0, 3,5 mm — pas d\'USB-C' },
          { 'Spécification': 'Réseau', 'GMKtec G3 Plus (N150)': '1× 2,5GbE (Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { 'Spécification': 'TDP', 'GMKtec G3 Plus (N150)': '~6 W de base ; ~6 W au repos, ~21 W en charge' },
          { 'Spécification': 'Dimensions', 'GMKtec G3 Plus (N150)': '114 × 106 × 42,5 mm, ~361 g' },
          { 'Spécification': 'OS', 'GMKtec G3 Plus (N150)': 'Windows 11 Pro (Linux/Home Assistant OS pris en charge)' },
          { 'Spécification': 'Prix (indicatif)', 'GMKtec G3 Plus (N150)': '~199–239 € (juillet 2026 — volatil, vérifier le prix actuel)' },
        ],
        items: [
          'Deux emplacements de stockage — un NVMe (PCIe 3.0) et un SATA (M.2 2242) — permettent un disque système rapide plus du stockage de masse.',
          'La vitesse des ports USB-A varie selon la source et la référence (5–10 Gbit/s) ; vérifiez sur l\'annonce que vous achetez.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'IA locale et performances LLM',
        content:
          '**Un modèle 1B–8B en 4-bit tient sur le G3 Plus ; un modèle 7–8B est utilisable mais lent, et l\'option 32 Go de RAM autorise un contexte plus large ou un modèle ~13B à faible débit — tous ces chiffres sont estimés d\'après le matériel vérifié, pas un benchmark mesuré.** Comme pour tout boîtier N150, la bande passante DDR4 mono-canal et l\'absence de NPU sont les limites.',
        items: [
          'Bon pour des assistants locaux légers, la synthèse et les automatisations sur de petits modèles.',
          'Passer à 32 Go aide davantage la longueur de contexte que la vitesse brute — la bande passante mémoire reste inchangée.',
          'Pas de NPU et une accélération iGPU limitée, donc l\'inférence dépend du CPU.',
          'Pour une IA locale plus lourde (vision, un assistant 7B rapide), choisissez plutôt un boîtier Ryzen.',
          'Consultez [comment installer Ollama](/fr/local-llms/how-to-install-ollama) pour essayer un petit modèle, et le [guide matériel des LLM locaux](/fr/local-llms/local-llm-hardware-guide-2026) pour le contexte.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Avantages et inconvénients',
        content: '**Le G3 Plus échange le réseau contre de la marge mémoire face à l\'EQ14.** Vue équilibrée ci-dessous.',
        items: [
          '**Avantages**',
          'Très abordable — environ 199–239 € pour un boîtier Home Assistant',
          'SO-DIMM DDR4 remplaçable extensible à 32 Go — plus de marge que les rivaux limités à 16 Go',
          'Deux emplacements de stockage : NVMe plus un SATA M.2 séparé pour le stockage de masse',
          'Faible consommation : environ 6 W au repos, peu coûteux en 24/7',
          'Très compact (114 × 106 mm) et léger (~361 g)',
          '**Inconvénients**',
          'Un seul port 2,5GbE (l\'EQ14 en a deux)',
          'Aucun port USB-C',
          'DDR4 mono-canal et pas de NPU — lent au-delà d\'un petit modèle',
          'La vitesse des ports USB-A est incohérente selon les annonces ; vérifiez avant d\'acheter',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Contexte acheteur : droits de douane et disponibilité (2026)',
        content:
          '**Le G3 Plus est fabriqué en Chine, donc son prix final reflète les mesures commerciales de 2026 — une raison de traiter tout prix comme une cible mouvante.** Les faits ci-dessous sont un contexte acheteur, pas un avis éditorial.',
        items: [
          'USA : les droits de douane Section 301 sur l\'électronique chinoise restent en vigueur en 2026 ; les droits « IEEPA » de 2025, distincts, ont été invalidés par la Cour suprême en février 2026 et remplacés par un droit Section 122 temporaire et plafonné. L\'exemption « de minimis » sans droits sous 800 USD pour les imports directs a également pris fin.',
          'UE (concerne DE/FR) : il n\'y a pas de droit UE général sur les mini-PC finis, mais depuis juillet 2026 le seuil de 150 € sans droits sur les petits colis directs de Chine a été supprimé et de faibles frais de traitement par colis ajoutés.',
          'Hypothèse (tendance macro, pas un fait par produit) : la capacité d\'export chinoise redirigée a maintenu une forte disponibilité de ces marques en UE et aux USA, ce qui soutient globalement des prix compétitifs.',
          'Effet net : vérifiez le prix actuel chez le revendeur avant d\'acheter — le chiffre de ~199–239 € ici est indicatif et daté de juillet 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Où acheter et prix actuel',
        content:
          '**Les prix bougent d\'une semaine à l\'autre, vérifiez donc le prix en direct plutôt que de vous fier à un chiffre fixe.** En juillet 2026, le G3 Plus 16 Go / 512 Go se situe autour de 199–239 € ; la page du fabricant peut afficher un prix indicatif qui ne reflète pas les annonces réelles.',
        items: [
          'Confirmez la RAM et la capacité de stockage de la référence exacte — et que vous pouvez porter le SO-DIMM à 32 Go si vous voulez la marge.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à envisager',
        content: '**Si le G3 Plus n\'est pas le bon boîtier abordable, envisagez ceux-ci.**',
        items: [
          '[Beelink EQ14](/fr/smart-home/beelink-eq14-local-ai-review) — l\'autre boîtier N150 abordable ; réseau double 2,5GbE mais plafonné à 16 Go de RAM',
          '[Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) — la montée en gamme : le Ryzen 7 8845HS fait tourner un vrai assistant 7B pour environ 650 €',
          '[Minisforum UM890 Pro](/fr/smart-home/minisforum-um890-pro-local-ai-review) — Ryzen 9 milieu de gamme avec double 2,5GbE et un port eGPU',
          '[GEEKOM A9 Max](/fr/smart-home/geekom-a9-max-local-ai-review) — boîtier premium avec un plafond de 128 Go de RAM',
          'Toujours en comparaison ? Commencez par le [comparatif des meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Foire aux questions',
        faqs: [
          { q: 'Le GMKtec G3 Plus peut-il faire tourner des LLM locaux ?', a: 'Il peut en faire tourner de petits. Un modèle 1B–8B en 4-bit tient, et un modèle 7–8B est utilisable mais lent à cause de la bande passante DDR4 mono-canal et du N150 à quatre cœurs. Ceci est estimé d\'après son matériel vérifié, pas un benchmark figé.' },
          { q: 'Quelle taille de modèle tient dans sa RAM ?', a: 'Avec les 16 Go de base, un modèle 7–8B en 4-bit tient avec de la marge. Porter le SO-DIMM à 32 Go autorise un contexte plus long ou un modèle d\'environ 13B à faible débit, même si la vitesse reste limitée par la bande passante mémoire.' },
          { q: 'La RAM est-elle soudée ou évolutive ?', a: 'Évolutive. Contrairement à certaines idées reçues, le G3 Plus utilise un seul emplacement SO-DIMM DDR4 remplaçable, pas de la mémoire soudée, et prend en charge jusqu\'à 32 Go. Cette possibilité d\'évolution est un vrai avantage face aux boîtiers d\'entrée de gamme à RAM fixe.' },
          { q: 'Le G3 Plus est-il bon pour Home Assistant et un usage permanent ?', a: 'Oui. Il fait bien tourner Home Assistant et ses modules complémentaires et consomme environ 6 W au repos, il est donc peu coûteux à laisser allumé. Notez qu\'il n\'a qu\'un port 2,5GbE, il est donc moins un boîtier réseau que le Beelink EQ14 à double LAN.' },
          { q: 'Le G3 Plus a-t-il un port USB-C ?', a: 'Non. Ce modèle a quatre ports USB-A et deux sorties HDMI mais pas de port USB-C, prévoyez vos périphériques en conséquence.' },
          { q: 'Combien consomme le G3 Plus ?', a: 'Environ 6 W au repos et environ 21 W en charge, le fonctionnement continu coûte donc très peu. Cette efficacité est une raison clé de choisir un boîtier N150 comme hub.' },
          { q: 'G3 Plus ou Beelink EQ14 ?', a: 'Les deux utilisent l\'Intel N150. Le G3 Plus prend en charge jusqu\'à 32 Go de RAM, ce qui aide le contexte et les petits modèles plus grands ; l\'EQ14 plafonne à 16 Go mais ajoute un second port 2,5GbE. Choisissez selon que vous privilégiez la marge mémoire ou le double réseau.' },
          { q: 'Où le GMKtec G3 Plus est-il fabriqué, et cela affecte-t-il le prix ?', a: 'Il est fabriqué en Chine. En 2026, les mesures d\'importation américaines (droits Section 301, fin de l\'exemption de minimis sous 800 USD) et la suppression par l\'UE du seuil de 150 € pour les petits colis peuvent affecter le coût final, vérifiez donc le prix actuel du revendeur plutôt que de vous fier à un chiffre fixe.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — le comparatif auquel ce test appartient',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — Pi vs mini-PC vs NAS',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que le boîtier fait réellement tourner',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — essayer un petit modèle sur le G3 Plus',
          '[Débuter avec Home Assistant](/fr/smart-home/home-assistant-getting-started) — configurer le hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Test GMKtec G3 Plus (2026) : maison connectée locale',
      reviewBody:
        'Le GMKtec NucBox G3 Plus est un mini-PC Intel N150 abordable doté d\'un SO-DIMM DDR4 remplaçable extensible à 32 Go. Il fait tourner Home Assistant et un petit modèle local pour environ 199–239 € (juillet 2026). Un hub avec de la marge mémoire, pas une machine d\'IA rapide.',
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
      url: 'https://www.promptquorum.com/fr/smart-home/gmktec-g3-plus-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GMKtec NucBox G3 Plus',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GMKtec' },
        description: 'Mini-PC abordable avec Intel N150 et RAM DDR4 extensible à 32 Go, pour Home Assistant et un petit modèle local.',
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
    title: 'Análisis GMKtec G3 Plus (2026): hogar inteligente local',
    seoTitle: 'Análisis GMKtec G3 Plus 2026 — Mini PC domótica barata',
    intro:
      'El GMKtec NucBox G3 Plus (Intel N150, ampliable a 32 GB DDR4) es un mini PC económico para un hogar inteligente de tipo local-first. Por unos 199–239 € (julio de 2026, precio volátil) ejecuta Home Assistant y un modelo local pequeño, con una ventaja real frente a algunos rivales: su RAM es un SO-DIMM reemplazable, no soldado. Este análisis verifica sus especificaciones, fija expectativas honestas sobre la velocidad del LLM local y explica dónde encaja frente al Beelink EQ14 y las cajas Ryzen.',
    metaDescription:
      'Análisis GMKtec G3 Plus 2026: Intel N150, ampliable a 32 GB DDR4, HDMI doble, un solo 2.5GbE, ~199–239 €. Una caja Home Assistant económica con RAM reemplazable — desglose completo.',
    twitterDescription:
      'GMKtec G3 Plus (2026): Intel N150, ampliable a 32 GB DDR4 (no soldada), ~199–239 €. Una caja Home Assistant económica para un modelo local pequeño — aquí es donde encaja.',
    readTime: '6 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Compradores con presupuesto ajustado que ejecutan Home Assistant y un modelo local pequeño',
    primaryTerm: 'análisis GMKtec G3 Plus',
    targetKeywords: [
      'análisis gmktec g3 plus',
      'gmktec g3 plus home assistant',
      'gmktec g3 plus ia local',
      'gmktec nucbox g3 plus n150',
      'gmktec g3 plus llm local',
    ],
    leadAnswerBlock:
      '**El GMKtec G3 Plus (Intel N150, ampliable a 32 GB DDR4) es un mini PC económico que ejecuta Home Assistant y un modelo local pequeño de 1B–8B por unos 199–239 € (julio de 2026, volátil).** Su punto fuerte es una ranura SO-DIMM reemplazable que llega a 32 GB — más margen de memoria que un Beelink EQ14 — aunque tiene un solo puerto 2.5GbE y no lleva USB-C.',
    quickAnswerTop: {
      es: {
        question: '¿Es bueno el GMKtec G3 Plus para Home Assistant y la IA local?',
        answer:
          'Sí para Home Assistant, con límites para la IA. El Intel N150 (4 núcleos), la GPU Intel UHD y la memoria DDR4 ejecutan bien Home Assistant y un modelo local pequeño. Como su única ranura SO-DIMM llega a 32 GB, tiene algo más de margen que los rivales limitados a 16 GB — pero la DDR4 de un solo canal y la falta de NPU hacen lento todo lo que supere a un modelo pequeño. Por unos 199–239 € (julio de 2026, volátil) es una caja económica, no una máquina de LLM.',
        bullets: [
          'CPU: Intel N150 — 4 núcleos / 4 hilos, GPU Intel UHD (24 EU), sin NPU',
          'RAM: DDR4-3200, una sola ranura SO-DIMM, ampliable a 32 GB (reemplazable, no soldada)',
          'LLM local (estimado según las specs): 1B–8B en 4-bit entra; 7–8B usable pero lento',
          'Puertos: HDMI doble (doble 4K/60), un solo 2.5GbE, Wi-Fi 6 — sin USB-C',
          'Precio ~199–239 € (julio de 2026, volátil) — caja Home Assistant económica',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Especificaciones', anchor: 'specs' },
      { label: 'IA local y rendimiento LLM', anchor: 'local-ai' },
      { label: 'Pros y contras', anchor: 'pros-cons' },
      { label: 'Contexto de compra: aranceles (2026)', anchor: 'trade-note' },
      { label: 'Dónde comprar', anchor: 'where-to-buy' },
      { label: 'Alternativas', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'El GMKtec G3 Plus es un mini PC Intel N150 económico que ejecuta Home Assistant y un modelo local pequeño, con una ranura DDR4 reemplazable que llega a 32 GB.' },
      { type: 'plain-terms', content: 'Un mini PC es un ordenador pequeño, de bajo consumo y siempre encendido. El G3 Plus es uno barato que ejecuta un concentrador domótico y un modelo de IA pequeño. A diferencia de algunas cajas económicas, su memoria se puede cambiar y subir hasta 32 GB, lo que da algo más de margen — pero sigue siendo un concentrador, no una máquina de IA rápida.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'El G3 Plus ejecuta Home Assistant y un modelo local pequeño de 1B–8B por unos 199–239 €',
          'Intel N150: 4 núcleos, GPU Intel UHD, DDR4 ampliable a 32 GB (SO-DIMM reemplazable), sin NPU',
          'Un modelo de 7–8B entra pero funciona lento — es un concentrador económico, no una caja de IA',
          'Ventaja frente al [Beelink EQ14](/es/smart-home/beelink-eq14-local-ai-review): techo de 32 GB de RAM (pero un solo puerto 2.5GbE y sin USB-C)',
          'Para un asistente 7B fluido, sube al [Beelink SER8](/es/smart-home/beelink-ser8-local-ai-review)',
          'Fabricado en China — incluye las medidas de importación de EE. UU./UE de 2026 en el coste final (ver la nota sobre aranceles)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto — Para quién es',
        content:
          '**Compra el GMKtec G3 Plus si quieres una caja Home Assistant barata y valoras una ranura de RAM reemplazable que llega a 32 GB.** Por unos 199–239 € es una puerta de entrada sólida y económica a un hogar inteligente local, con algo más de margen de memoria que los rivales limitados a 16 GB. No esperes un asistente local rápido — el Intel N150 con DDR4 de un solo canal solo maneja modelos pequeños.\n\nSu mejor caso de uso es un **concentrador Home Assistant compacto y ampliable** que también puede alojar un modelo pequeño. Si quieres dos puertos de red, el Beelink EQ14 es el mejor concentrador; si quieres velocidad de IA real, sube a una caja Ryzen.',
        affiliateLinks: [
          { label: 'Consultar precio actual — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Especificaciones',
        content:
          '**Todas las especificaciones siguientes se verificaron contra GMKtec y fuentes de análisis independientes en julio de 2026.** La RAM es un SO-DIMM DDR4 reemplazable (no soldado) que llega a 32 GB. Este modelo no tiene puerto USB-C.',
        columns: ['Especificación', 'GMKtec G3 Plus (N150)'],
        rows: [
          { 'Especificación': 'CPU', 'GMKtec G3 Plus (N150)': 'Intel N150 (Twin Lake / Alder Lake-N)' },
          { 'Especificación': 'Núcleos / hilos', 'GMKtec G3 Plus (N150)': '4 núcleos / 4 hilos, hasta 3.6 GHz' },
          { 'Especificación': 'iGPU', 'GMKtec G3 Plus (N150)': 'Intel UHD Graphics, 24 EU, hasta 1000 MHz' },
          { 'Especificación': 'NPU', 'GMKtec G3 Plus (N150)': 'Ninguna' },
          { 'Especificación': 'RAM', 'GMKtec G3 Plus (N150)': 'DDR4-3200, un solo SO-DIMM, ampliable a 32 GB (reemplazable, no soldada)' },
          { 'Especificación': 'Almacenamiento', 'GMKtec G3 Plus (N150)': 'M.2 2280 PCIe 3.0 NVMe (hasta 4 TB) + M.2 2242 SATA (hasta 2 TB)' },
          { 'Especificación': 'Puertos', 'GMKtec G3 Plus (N150)': '4× USB-A 3.2 (hasta 10 Gbps), 2× HDMI 2.0, 3.5 mm — sin USB-C' },
          { 'Especificación': 'Red', 'GMKtec G3 Plus (N150)': '1× 2.5GbE (Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { 'Especificación': 'TDP', 'GMKtec G3 Plus (N150)': '~6 W base; ~6 W en reposo, ~21 W en carga' },
          { 'Especificación': 'Dimensiones', 'GMKtec G3 Plus (N150)': '114 × 106 × 42.5 mm, ~361 g' },
          { 'Especificación': 'SO', 'GMKtec G3 Plus (N150)': 'Windows 11 Pro (Linux/Home Assistant OS compatibles)' },
          { 'Especificación': 'Precio (indicativo)', 'GMKtec G3 Plus (N150)': '~199–239 € (julio de 2026 — volátil, consultar precio actual)' },
        ],
        items: [
          'Dos ranuras de almacenamiento — una NVMe (PCIe 3.0) y una SATA (M.2 2242) — permiten un disco de sistema rápido más almacenamiento masivo.',
          'La velocidad de los puertos USB-A varía según la fuente y la referencia (5–10 Gbps); confírmalo en el anuncio que compres.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'IA local y rendimiento LLM',
        content:
          '**Un modelo de 1B–8B en 4-bit entra en el G3 Plus; un modelo de 7–8B es usable pero lento, y la opción de 32 GB de RAM permite un contexto mayor o un modelo ~13B con bajo rendimiento — todas las cifras están estimadas a partir del hardware verificado, no son un benchmark medido.** Como en cualquier caja N150, el ancho de banda DDR4 de un solo canal y la falta de NPU son los límites.',
        items: [
          'Bueno para asistentes locales ligeros, resúmenes y automatizaciones con modelos pequeños.',
          'Subir a 32 GB ayuda más a la longitud de contexto que a la velocidad bruta — el ancho de banda de memoria no cambia.',
          'Sin NPU y con aceleración iGPU limitada, así que la inferencia depende de la CPU.',
          'Para IA local más exigente (visión, un asistente 7B rápido), elige una caja Ryzen en su lugar.',
          'Consulta [cómo instalar Ollama](/es/local-llms/how-to-install-ollama) para probar un modelo pequeño, y la [guía de hardware para LLM local](/es/local-llms/local-llm-hardware-guide-2026) para el contexto.',
        ],
        affiliateLinks: [
          { label: 'Consultar precio actual — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Pros y contras',
        content: '**El G3 Plus cambia red por margen de memoria frente al EQ14.** Vista equilibrada abajo.',
        items: [
          '**Pros**',
          'Muy económico — unos 199–239 € por una caja Home Assistant',
          'SO-DIMM DDR4 reemplazable ampliable a 32 GB — más margen que los rivales limitados a 16 GB',
          'Dos ranuras de almacenamiento: NVMe más un SATA M.2 aparte para almacenamiento masivo',
          'Bajo consumo: unos 6 W en reposo, barato de tener 24/7',
          'Muy compacto (114 × 106 mm) y ligero (~361 g)',
          '**Contras**',
          'Solo un puerto 2.5GbE (el EQ14 tiene dos)',
          'Ningún puerto USB-C',
          'DDR4 de un solo canal y sin NPU — lento más allá de un modelo pequeño',
          'La velocidad de los puertos USB-A es inconsistente entre anuncios; verifícalo antes de comprar',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Contexto de compra: aranceles y disponibilidad (2026)',
        content:
          '**El G3 Plus se fabrica en China, así que su precio final refleja las medidas comerciales de 2026 — una razón para tratar cualquier precio como un objetivo móvil.** Los datos siguientes son contexto de compra, no una opinión editorial.',
        items: [
          'EE. UU.: los aranceles de la Sección 301 sobre electrónica china siguen vigentes en 2026; los aranceles «IEEPA» de 2025, distintos, fueron anulados por el Tribunal Supremo en febrero de 2026 y sustituidos por un arancel temporal y limitado de la Sección 122. La exención «de minimis» sin aranceles por debajo de 800 USD para importaciones directas también terminó.',
          'UE (afecta a DE/FR): no hay un arancel general de la UE sobre mini PC terminados, pero desde julio de 2026 se eliminó el umbral de 150 € sin aranceles para paquetes pequeños directos de China y se añadió una pequeña tasa de gestión por paquete.',
          'Supuesto (tendencia macro, no un dato por producto): la capacidad de exportación china redirigida ha mantenido alta la disponibilidad de estas marcas en la UE y EE. UU., lo que en general respalda precios competitivos.',
          'Efecto neto: verifica el precio actual en el vendedor antes de comprar — la cifra de ~199–239 € aquí es indicativa y con fecha de julio de 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Dónde comprar y precio actual',
        content:
          '**Los precios cambian semana a semana, así que consulta el precio en vivo en lugar de fiarte de una cifra fija.** En julio de 2026 el G3 Plus de 16 GB / 512 GB ronda los 199–239 €; la página del fabricante puede mostrar un precio orientativo que no refleja los anuncios reales.',
        items: [
          'Confirma la RAM y la capacidad de almacenamiento de la referencia exacta — y que puedes ampliar el SO-DIMM a 32 GB si quieres el margen.',
        ],
        affiliateLinks: [
          { label: 'Consultar precio actual — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a considerar',
        content: '**Si el G3 Plus no es la caja económica adecuada, considera estas.**',
        items: [
          '[Beelink EQ14](/es/smart-home/beelink-eq14-local-ai-review) — la otra caja N150 económica; red doble 2.5GbE pero limitada a 16 GB de RAM',
          '[Beelink SER8](/es/smart-home/beelink-ser8-local-ai-review) — el salto: el Ryzen 7 8845HS ejecuta un asistente 7B real por unos 650 €',
          '[Minisforum UM890 Pro](/es/smart-home/minisforum-um890-pro-local-ai-review) — Ryzen 9 de gama media con doble 2.5GbE y un puerto eGPU',
          '[GEEKOM A9 Max](/es/smart-home/geekom-a9-max-local-ai-review) — caja premium con techo de 128 GB de RAM',
          '¿Aún comparando? Empieza por el [resumen de los mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puede el GMKtec G3 Plus ejecutar LLM locales?', a: 'Puede ejecutar los pequeños. Un modelo de 1B–8B en 4-bit entra, y un modelo de 7–8B es usable pero lento por el ancho de banda DDR4 de un solo canal y el N150 de cuatro núcleos. Esto está estimado a partir de su hardware verificado, no es un benchmark fijo.' },
          { q: '¿Qué tamaño de modelo entra en su RAM?', a: 'Con los 16 GB de base, un modelo de 7–8B en 4-bit entra con margen. Ampliar el SO-DIMM a 32 GB permite un contexto más largo o un modelo de unos 13B con bajo rendimiento, aunque la velocidad sigue limitada por el ancho de banda de memoria.' },
          { q: '¿La RAM está soldada o es ampliable?', a: 'Ampliable. A pesar de algunas suposiciones en contra, el G3 Plus usa una sola ranura SO-DIMM DDR4 reemplazable, no memoria soldada, y admite hasta 32 GB. Esa vía de ampliación es una ventaja real frente a las cajas económicas con RAM fija.' },
          { q: '¿Es bueno el G3 Plus para Home Assistant y uso permanente?', a: 'Sí. Ejecuta bien Home Assistant y sus complementos y consume unos 6 W en reposo, así que es barato dejarlo encendido. Ten en cuenta que tiene un solo puerto 2.5GbE, así que es menos una caja de red que el Beelink EQ14 de doble LAN.' },
          { q: '¿Tiene el G3 Plus un puerto USB-C?', a: 'No. Este modelo tiene cuatro puertos USB-A y dos salidas HDMI pero ningún puerto USB-C, así que planifica tus periféricos en consecuencia.' },
          { q: '¿Cuánta energía consume el G3 Plus?', a: 'Unos 6 W en reposo y unos 21 W en carga, así que el funcionamiento continuo cuesta muy poco. Esa eficiencia es una razón clave para elegir una caja N150 como concentrador.' },
          { q: '¿G3 Plus o Beelink EQ14?', a: 'Ambos usan el Intel N150. El G3 Plus admite hasta 32 GB de RAM, lo que ayuda al contexto y a modelos pequeños más grandes; el EQ14 se limita a 16 GB pero añade un segundo puerto 2.5GbE. Elige según valores el margen de memoria o la red doble.' },
          { q: '¿Dónde se fabrica el GMKtec G3 Plus y afecta al precio?', a: 'Se fabrica en China. En 2026, las medidas de importación de EE. UU. (aranceles de la Sección 301, el fin de la exención de minimis por debajo de 800 USD) y la eliminación por la UE del umbral de 150 € para paquetes pequeños pueden afectar al coste final, así que consulta el precio actual del vendedor en lugar de fiarte de una cifra fija.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — el resumen al que pertenece este análisis',
          '[Mejor hardware para un hogar inteligente local](/es/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS',
          '[Ejecutar tu hogar inteligente con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — lo que la caja realmente ejecuta',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — probar un modelo pequeño en el G3 Plus',
          '[Primeros pasos con Home Assistant](/es/smart-home/home-assistant-getting-started) — configurar el concentrador',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Análisis GMKtec G3 Plus (2026): hogar inteligente local',
      reviewBody:
        'El GMKtec NucBox G3 Plus es un mini PC Intel N150 económico con un SO-DIMM DDR4 reemplazable ampliable a 32 GB. Ejecuta Home Assistant y un modelo local pequeño por unos 199–239 € (julio de 2026). Un concentrador con margen de memoria, no una máquina de IA rápida.',
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
      url: 'https://www.promptquorum.com/es/smart-home/gmktec-g3-plus-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GMKtec NucBox G3 Plus',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GMKtec' },
        description: 'Mini PC económico con Intel N150 y RAM DDR4 ampliable a 32 GB, para Home Assistant y un modelo local pequeño.',
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
    title: 'GMKtec G3 Plus レビュー（2026）：格安ローカルスマートホーム',
    seoTitle: 'GMKtec G3 Plus レビュー2026 — 格安スマートホーム機',
    intro:
      'GMKtec NucBox G3 Plus（Intel N150、32 GB DDR4 まで増設可能）は、ローカル優先のスマートホーム向けの格安ミニPCです。約¥22,000〜26,000（2026年7月、価格変動あり）で Home Assistant と小型ローカルモデルを動かせます。一部のライバルに対する明確な利点は、RAM がオンボード実装ではなく交換可能な SO-DIMM である点です。このレビューでは仕様を検証し、ローカルLLMの速度に関する正直な期待値を示し、Beelink EQ14 や Ryzen 系機との位置づけを説明します。',
    metaDescription:
      'GMKtec G3 Plus レビュー2026：Intel N150、32 GB DDR4 まで増設可、デュアルHDMI、2.5GbE ×1、約¥22,000〜26,000。RAM 交換可能な格安 Home Assistant 機の完全な仕様解説。',
    twitterDescription:
      'GMKtec G3 Plus（2026）：Intel N150、32 GB DDR4 まで増設可（オンボード実装ではない）、約¥22,000〜26,000。小型ローカルモデル向けの格安 Home Assistant 機の位置づけを解説。',
    readTime: '6分で読める',
    educationalLevel: 'Beginner',
    audience: 'Home Assistant と小型ローカルモデルを動かす、予算重視のユーザー',
    primaryTerm: 'GMKtec G3 Plus レビュー',
    targetKeywords: [
      'gmktec g3 plus レビュー',
      'gmktec g3 plus home assistant',
      'gmktec g3 plus ローカルai',
      'gmktec nucbox g3 plus n150',
      'gmktec g3 plus ローカルllm',
    ],
    leadAnswerBlock:
      '**GMKtec G3 Plus（Intel N150、32 GB DDR4 まで増設可能）は、Home Assistant と小型の 1B〜8B ローカルモデルを約¥22,000〜26,000（2026年7月、変動あり）で動かせる格安ミニPCです。** 最大の特長は、32 GB まで対応する交換可能な SO-DIMM スロットで、Beelink EQ14 より多くのメモリ余裕があります。ただし 2.5GbE ポートは1つのみで、USB-C はありません。',
    quickAnswerTop: {
      ja: {
        question: 'GMKtec G3 Plus は Home Assistant とローカルAIに向いていますか？',
        answer:
          'Home Assistant には向いていますが、AI には制約があります。Intel N150（4コア）、Intel UHD グラフィックス、DDR4 メモリで Home Assistant と小型ローカルモデルは快適に動きます。単一の SO-DIMM スロットが 32 GB まで対応するため、16 GB 上限のライバルより少し余裕がありますが、シングルチャネル DDR4 と NPU の非搭載により、小型モデルを超えるものはやはり低速です。約¥22,000〜26,000（2026年7月、変動あり）で、これは格安機であり LLM マシンではありません。',
        bullets: [
          'CPU：Intel N150 — 4コア / 4スレッド、Intel UHD グラフィックス（24 EU）、NPU なし',
          'RAM：DDR4-3200、SO-DIMM スロット×1、32 GB まで増設可（交換可能、オンボード実装ではない）',
          'ローカルLLM（仕様からの推定）：1B〜8B の 4-bit は動作；7〜8B は使えるが低速',
          'ポート：デュアルHDMI（デュアル 4K/60）、2.5GbE ×1、Wi-Fi 6 — USB-C なし',
          '価格 約¥22,000〜26,000（2026年7月、変動あり）— 格安 Home Assistant 機',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: 'tldr' },
      { label: '結論', anchor: 'verdict' },
      { label: '仕様', anchor: 'specs' },
      { label: 'ローカルAI・LLM 性能', anchor: 'local-ai' },
      { label: '長所と短所', anchor: 'pros-cons' },
      { label: '購入時の背景：関税（2026）', anchor: 'trade-note' },
      { label: '購入先', anchor: 'where-to-buy' },
      { label: '代替候補', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'GMKtec G3 Plus は、Home Assistant と小型ローカルモデルを動かす格安の Intel N150 ミニPCで、32 GB まで対応する交換可能な DDR4 スロットを備えます。' },
      { type: 'plain-terms', content: 'ミニPCは、小型で低消費電力の常時稼働コンピューターです。G3 Plus はその安価な一台で、スマートホームのハブと小型AIモデルを動かします。一部の格安機と違い、メモリを交換して 32 GB まで増やせるため少し余裕がありますが、それでも高速なAIマシンではなくハブです。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '重要ポイント',
        isTldr: true,
        items: [
          'G3 Plus は Home Assistant と小型の 1B〜8B ローカルモデルを約¥22,000〜26,000 で動かせます',
          'Intel N150：4コア、Intel UHD グラフィックス、DDR4 は 32 GB まで増設可（交換可能な SO-DIMM）、NPU なし',
          '7〜8B モデルは動くが低速 — これは格安ハブであり、AI 機ではありません',
          '[Beelink EQ14](/ja/smart-home/beelink-eq14-local-ai-review) に対する特長：32 GB の RAM 上限（ただし 2.5GbE ポートは1つのみ、USB-C なし）',
          '応答の速い 7B アシスタントには [Beelink SER8](/ja/smart-home/beelink-ser8-local-ai-review) へステップアップ',
          '中国製 — 2026年の米国/EU 輸入措置を最終コストに織り込むこと（関税の注記を参照）',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論 — 誰に向くか',
        content:
          '**格安の Home Assistant 機が欲しく、32 GB まで対応する交換可能な RAM スロットを重視するなら、GMKtec G3 Plus を選んでください。** 約¥22,000〜26,000 で、ローカル優先のスマートホームへの堅実で手頃な入り口となり、16 GB 上限のライバルより少しメモリに余裕があります。高速なローカルアシスタントは期待しないでください — シングルチャネル DDR4 の Intel N150 は小型モデルしか扱えません。\n\n最も強い用途は、小型モデルもホストできる**コンパクトで増設可能な Home Assistant ハブ**です。ネットワークポートが2つ欲しいなら Beelink EQ14 の方が優れたハブです。本物のAI速度が欲しいなら Ryzen 機へ移行してください。',
        affiliateLinks: [
          { label: '現在の価格を確認 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: '仕様',
        content:
          '**以下の仕様はすべて、2026年7月に GMKtec と独立系レビューソースに照らして検証しました。** RAM は 32 GB まで対応する交換可能な DDR4 SO-DIMM（オンボード実装ではない）です。このモデルに USB-C ポートはありません。',
        columns: ['項目', 'GMKtec G3 Plus (N150)'],
        rows: [
          { '項目': 'CPU', 'GMKtec G3 Plus (N150)': 'Intel N150（Twin Lake / Alder Lake-N）' },
          { '項目': 'コア / スレッド', 'GMKtec G3 Plus (N150)': '4コア / 4スレッド、最大 3.6 GHz' },
          { '項目': 'iGPU', 'GMKtec G3 Plus (N150)': 'Intel UHD Graphics、24 EU、最大 1000 MHz' },
          { '項目': 'NPU', 'GMKtec G3 Plus (N150)': 'なし' },
          { '項目': 'RAM', 'GMKtec G3 Plus (N150)': 'DDR4-3200、SO-DIMM ×1、32 GB まで増設可（交換可能、オンボード実装ではない）' },
          { '項目': 'ストレージ', 'GMKtec G3 Plus (N150)': 'M.2 2280 PCIe 3.0 NVMe（最大 4 TB）+ M.2 2242 SATA（最大 2 TB）' },
          { '項目': 'ポート', 'GMKtec G3 Plus (N150)': 'USB-A 3.2 ×4（最大 10 Gbps）、HDMI 2.0 ×2、3.5 mm — USB-C なし' },
          { '項目': 'ネットワーク', 'GMKtec G3 Plus (N150)': '2.5GbE ×1（Intel i226-V）、Wi-Fi 6、Bluetooth 5.2' },
          { '項目': 'TDP', 'GMKtec G3 Plus (N150)': '約6 W ベース；アイドル約6 W、負荷時約21 W' },
          { '項目': '寸法', 'GMKtec G3 Plus (N150)': '114 × 106 × 42.5 mm、約361 g' },
          { '項目': 'OS', 'GMKtec G3 Plus (N150)': 'Windows 11 Pro（Linux/Home Assistant OS に対応）' },
          { '項目': '価格（目安）', 'GMKtec G3 Plus (N150)': '約¥22,000〜26,000（2026年7月 — 変動あり、現在の価格を確認）' },
        ],
        items: [
          'ストレージスロットは2つ — NVMe（PCIe 3.0）と SATA（M.2 2242）— で、高速な OS ドライブと大容量ストレージを両立できます。',
          'USB-A ポートの速度はソースや SKU により異なります（5〜10 Gbps）。購入する商品ページで確認してください。',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'ローカルAI・LLM 性能',
        content:
          '**1B〜8B の 4-bit モデルは G3 Plus に収まり、7〜8B モデルは使えるが低速です。32 GB の RAM オプションでは、より長いコンテキストや低スループットの ~13B モデルが可能になります — いずれの数値も検証済みハードウェアからの推定であり、実測ベンチマークではありません。** どの N150 機とも同様に、シングルチャネル DDR4 の帯域幅と NPU の非搭載が限界となります。',
        items: [
          '軽量なローカルアシスタント、要約、小型モデルでの自動化に適しています。',
          '32 GB への増設は、生の速度よりコンテキスト長に効きます — メモリ帯域幅は変わりません。',
          'NPU がなく iGPU アクセラレーションも限定的なため、推論は CPU 律速です。',
          'より重いローカルAI（ビジョン、高速な 7B アシスタント）には、代わりに Ryzen 機を選んでください。',
          '小型モデルを試すには [Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) を、背景には [ローカルLLM ハードウェアガイド](/ja/local-llms/local-llm-hardware-guide-2026) を参照してください。',
        ],
        affiliateLinks: [
          { label: '現在の価格を確認 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: '長所と短所',
        content: '**G3 Plus は EQ14 に対し、ネットワークをメモリ余裕と引き換えにしています。** バランスの取れた見方を以下に示します。',
        items: [
          '**長所**',
          '非常に手頃 — Home Assistant 機として約¥22,000〜26,000',
          '交換可能な DDR4 SO-DIMM で 32 GB まで増設可 — 16 GB 上限のライバルより余裕あり',
          'ストレージスロット2つ：NVMe に加え、大容量用の独立した SATA M.2',
          '低消費電力：アイドル約6 W、24/7 運用でも安価',
          '非常にコンパクト（114 × 106 mm）で軽量（約361 g）',
          '**短所**',
          '2.5GbE ポートは1つのみ（EQ14 は2つ）',
          'USB-C ポートは一切なし',
          'シングルチャネル DDR4 で NPU なし — 小型モデルを超えると低速',
          'USB-A ポートの速度は商品ページ間で一貫しない；購入前に確認を',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: '購入時の背景：関税と入手性（2026）',
        content:
          '**G3 Plus は中国製のため、最終価格は 2026年の通商措置を反映します — どの価格も変動するものとして扱うべき理由です。** 以下は購入時の背景情報であり、編集上の意見ではありません。',
        items: [
          '米国：中国製電子機器への通商法301条関税は 2026年も有効です。別枠の 2025年「IEEPA」関税は 2026年2月に最高裁で無効とされ、暫定的で上限のある122条関税に置き換えられました。直接輸入の 800 ドル未満の免税「デミニミス」措置も終了しました。',
          'EU（DE/FR に影響）：完成品ミニPCへの広範な EU 関税はありませんが、2026年7月から中国からの低額直送小包に対する 150 ユーロの免税枠が撤廃され、小包ごとに少額の手数料が追加されました。',
          '想定（製品ごとの事実ではなくマクロ傾向）：中国の輸出能力の振り替えにより、これらのブランドの EU・米国での入手性は高く保たれ、全体として競争的な価格を支えています。',
          '正味の影響：購入前に販売店で現在の価格を確認してください — ここでの約¥22,000〜26,000 という数値は目安であり、2026年7月時点のものです。',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '購入先と現在の価格',
        content:
          '**価格は週ごとに動くため、固定の数値を信じるより実際の価格を確認してください。** 2026年7月時点で 16 GB / 512 GB の G3 Plus は約¥22,000〜26,000 です。メーカーページは実売と異なる参考価格を表示する場合があります。',
        items: [
          '購入する正確な SKU の RAM とストレージ容量を確認し、余裕が欲しい場合は SO-DIMM を 32 GB に増設できることも確認してください。',
        ],
        affiliateLinks: [
          { label: '現在の価格を確認 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '検討すべき代替候補',
        content: '**G3 Plus が適切な格安機でない場合は、これらを検討してください。**',
        items: [
          '[Beelink EQ14](/ja/smart-home/beelink-eq14-local-ai-review) — もう一つの格安 N150 機；デュアル 2.5GbE ネットワークだが RAM は 16 GB 上限',
          '[Beelink SER8](/ja/smart-home/beelink-ser8-local-ai-review) — 格上：Ryzen 7 8845HS が本物の 7B アシスタントを約 650 ドルで動かす',
          '[Minisforum UM890 Pro](/ja/smart-home/minisforum-um890-pro-local-ai-review) — デュアル 2.5GbE と eGPU ポートを備えたミドルレンジ Ryzen 9',
          '[GEEKOM A9 Max](/ja/smart-home/geekom-a9-max-local-ai-review) — 128 GB の RAM 上限を持つプレミアム機',
          'まだ比較中ですか？ [Home Assistant + ローカルAI 向けベストミニPCのまとめ](/ja/smart-home/best-mini-pc-home-assistant-local-ai) から始めてください。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'GMKtec G3 Plus はローカルLLMを動かせますか？', a: '小型のものは動かせます。1B〜8B の 4-bit モデルは収まり、7〜8B モデルは使えますが、シングルチャネル DDR4 の帯域幅と4コアの N150 のため低速です。これは検証済みハードウェアからの推定であり、固定のベンチマークではありません。' },
          { q: 'RAM にはどのくらいのサイズのモデルが収まりますか？', a: 'ベースの 16 GB では、7〜8B の 4-bit モデルが余裕をもって収まります。SO-DIMM を 32 GB に増設すると、より長いコンテキストや約 13B のモデルが低スループットで可能になりますが、速度はメモリ帯域幅に制限されたままです。' },
          { q: 'RAM はオンボード実装ですか、それとも増設可能ですか？', a: '増設可能です。逆の想定に反して、G3 Plus はオンボード実装ではなく、交換可能な DDR4 SO-DIMM スロットを1つ使用し、最大 32 GB に対応します。この増設の余地は、RAM 固定の格安機に対する明確な利点です。' },
          { q: 'G3 Plus は Home Assistant と常時稼働に向いていますか？', a: 'はい。Home Assistant とアドオンを快適に動かし、アイドル時の消費は約6 W なので、つけっぱなしでも安価です。ただし 2.5GbE ポートは1つのみで、デュアルLAN の Beelink EQ14 ほどのネットワーク機ではありません。' },
          { q: 'G3 Plus に USB-C ポートはありますか？', a: 'ありません。このモデルは USB-A ポート4つと HDMI 出力2つを備えますが、USB-C ポートはありません。周辺機器はそれに合わせて計画してください。' },
          { q: 'G3 Plus の消費電力はどのくらいですか？', a: 'アイドル時約6 W、負荷時約21 W なので、連続運用のコストはごくわずかです。この効率の高さは、ハブとして N150 機を選ぶ主要な理由です。' },
          { q: 'G3 Plus と Beelink EQ14 のどちらを選ぶべきですか？', a: '両方とも Intel N150 を使用します。G3 Plus は最大 32 GB の RAM に対応し、コンテキストやより大きな小型モデルに有利です。EQ14 は 16 GB 上限ですが、2つ目の 2.5GbE ポートを追加します。メモリ余裕とデュアルネットワークのどちらを重視するかで選んでください。' },
          { q: 'GMKtec G3 Plus はどこで製造され、それは価格に影響しますか？', a: '中国で製造されています。2026年には米国の輸入措置（301条関税、800 ドル未満のデミニミス免税の終了）や EU による低額小包の 150 ユーロ免税枠の撤廃が最終コストに影響し得るため、固定の数値に頼らず販売店の現在の価格を確認してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant + ローカルAI 向けベストミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — このレビューが属するまとめ',
          '[ローカルスマートホーム向けベストハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — Pi 対 ミニPC 対 NAS',
          '[ローカルLLM でスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — この機が実際に動かすもの',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — G3 Plus で小型モデルを試す',
          '[Home Assistant を始める](/ja/smart-home/home-assistant-getting-started) — ハブをセットアップする',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'GMKtec G3 Plus レビュー（2026）：格安ローカルスマートホーム',
      reviewBody:
        'GMKtec NucBox G3 Plus は、32 GB まで増設可能な交換可能 DDR4 SO-DIMM を備えた格安の Intel N150 ミニPCです。Home Assistant と小型ローカルモデルを約¥22,000〜26,000（2026年7月）で動かします。メモリに余裕のあるハブであり、高速なAIマシンではありません。',
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
      url: 'https://www.promptquorum.com/ja/smart-home/gmktec-g3-plus-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GMKtec NucBox G3 Plus',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GMKtec' },
        description: '32 GB まで増設可能な Intel N150 と DDR4 RAM を備えた格安ミニPC。Home Assistant と小型ローカルモデル向け。',
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
    title: 'GMKtec G3 Plus 评测（2026）：入门级本地智能家居',
    seoTitle: 'GMKtec G3 Plus 评测 2026 — 入门级智能家居主机',
    intro:
      'GMKtec NucBox G3 Plus（Intel N150，可升级至 32 GB DDR4）是一款面向本地优先智能家居的入门级迷你主机。约 $180–230（2026年7月，价格波动）即可运行 Home Assistant 和一个小型本地模型，并相比部分竞品有一个真正的优势：它的内存是可更换的 SO-DIMM，而非板载焊接。本评测核实其规格，对本地 LLM 的速度给出务实预期，并说明它相对 Beelink EQ14 及 Ryzen 级主机的定位。',
    metaDescription:
      'GMKtec G3 Plus 评测 2026：Intel N150，可升级至 32 GB DDR4，双 HDMI，单 2.5GbE，约 $180–230。一款内存可更换的入门级 Home Assistant 主机——完整规格解析。',
    twitterDescription:
      'GMKtec G3 Plus（2026）：Intel N150，可升级至 32 GB DDR4（非板载焊接），约 $180–230。面向小型本地模型的入门级 Home Assistant 主机——看它的定位。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Beginner',
    audience: '运行 Home Assistant 和小型本地模型的预算型用户',
    primaryTerm: 'GMKtec G3 Plus 评测',
    targetKeywords: [
      'gmktec g3 plus 评测',
      'gmktec g3 plus home assistant',
      'gmktec g3 plus 本地 ai',
      'gmktec nucbox g3 plus n150',
      'gmktec g3 plus 本地 llm',
    ],
    leadAnswerBlock:
      '**GMKtec G3 Plus（Intel N150，可升级至 32 GB DDR4）是一款入门级迷你主机，约 $180–230（2026年7月，价格波动）即可运行 Home Assistant 和一个 1B–8B 的小型本地模型。** 它的亮点是一个可更换的 SO-DIMM 插槽，最高支持 32 GB——比 Beelink EQ14 有更多内存余量——不过它只有单个 2.5GbE 端口，且没有 USB-C。',
    quickAnswerTop: {
      zh: {
        question: 'GMKtec G3 Plus 适合 Home Assistant 和本地 AI 吗？',
        answer:
          '适合 Home Assistant，但 AI 有限制。Intel N150（4 核）、Intel UHD 核显和 DDR4 内存能很好地运行 Home Assistant 和小型本地模型。由于单 SO-DIMM 插槽可达 32 GB，它比上限 16 GB 的竞品多一点余量——但单通道 DDR4 和缺少 NPU 仍让超出小型模型的任务变慢。约 $180–230（2026年7月，波动）——它是入门级主机，不是本地 LLM 机器。',
        bullets: [
          'CPU：Intel N150——4 核 / 4 线程，Intel UHD 核显（24 EU），无 NPU',
          '内存：DDR4-3200，单 SO-DIMM 插槽，可升级至 32 GB（可更换，非板载焊接）',
          '本地 LLM（据规格估算）：1B–8B 的 4-bit 可运行；7–8B 可用但慢',
          '端口：双 HDMI（双 4K/60）、单 2.5GbE、Wi-Fi 6——无 USB-C',
          '价格约 $180–230（2026年7月，波动）——入门级 Home Assistant 主机',
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
      { label: '购买背景：关税（2026）', anchor: 'trade-note' },
      { label: '在哪购买', anchor: 'where-to-buy' },
      { label: '替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'GMKtec G3 Plus 是一款入门级 Intel N150 迷你主机，可运行 Home Assistant 和小型本地模型，配备最高支持 32 GB 的可更换 DDR4 插槽。' },
      { type: 'plain-terms', content: '迷你主机是一台小巧、低功耗、常年开机的电脑。G3 Plus 是其中便宜的一款，用来运行智能家居中枢和一个小型 AI 模型。与部分入门级主机不同，它的内存可更换并升级到 32 GB，因此多一点余量——但它仍是中枢，不是快速的 AI 机器。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '核心要点',
        isTldr: true,
        items: [
          'G3 Plus 约 $180–230 即可运行 Home Assistant 和一个 1B–8B 的小型本地模型',
          'Intel N150：4 核，Intel UHD 核显，DDR4 可升级至 32 GB（可更换 SO-DIMM），无 NPU',
          '7–8B 模型能装下但运行慢——这是入门级中枢，不是 AI 主机',
          '相对 [Beelink EQ14](/zh/smart-home/beelink-eq14-local-ai-review) 的亮点：32 GB 内存上限（但只有单个 2.5GbE 端口且无 USB-C）',
          '想要响应更快的 7B 助手，请升级到 [Beelink SER8](/zh/smart-home/beelink-ser8-local-ai-review)',
          '中国制造——将 2026 年美国/欧盟进口措施计入到手成本（见关税说明）',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论——谁该买',
        content:
          '**如果你想要一台便宜的 Home Assistant 主机，并看重可更换、最高 32 GB 的内存插槽，就买 GMKtec G3 Plus。** 约 $180–230，它是进入本地优先智能家居的扎实入门之选，比上限 16 GB 的竞品多一点内存余量。不要指望它是快速的本地助手——单通道 DDR4 的 Intel N150 只能处理小型模型。\n\n它最强的用途是一台**紧凑、可升级、还能承载小型模型的 Home Assistant 中枢**。如果你想要两个网口，Beelink EQ14 是更好的中枢；如果你想要真正的 AI 速度，请升级到 Ryzen 主机。',
        affiliateLinks: [
          { label: '查看当前价格 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: '规格',
        content:
          '**以下所有规格已于 2026年7月对照 GMKtec 及独立评测来源核实。** 内存是最高支持 32 GB 的可更换 DDR4 SO-DIMM（非板载焊接）。此型号没有 USB-C 端口。',
        columns: ['规格项', 'GMKtec G3 Plus (N150)'],
        rows: [
          { '规格项': 'CPU', 'GMKtec G3 Plus (N150)': 'Intel N150（Twin Lake / Alder Lake-N）' },
          { '规格项': '核心 / 线程', 'GMKtec G3 Plus (N150)': '4 核 / 4 线程，最高 3.6 GHz' },
          { '规格项': '核显', 'GMKtec G3 Plus (N150)': 'Intel UHD Graphics，24 EU，最高 1000 MHz' },
          { '规格项': 'NPU', 'GMKtec G3 Plus (N150)': '无' },
          { '规格项': '内存', 'GMKtec G3 Plus (N150)': 'DDR4-3200，单 SO-DIMM，可升级至 32 GB（可更换，非板载焊接）' },
          { '规格项': '存储', 'GMKtec G3 Plus (N150)': 'M.2 2280 PCIe 3.0 NVMe（最高 4 TB）+ M.2 2242 SATA（最高 2 TB）' },
          { '规格项': '端口', 'GMKtec G3 Plus (N150)': '4× USB-A 3.2（最高 10 Gbps）、2× HDMI 2.0、3.5 mm——无 USB-C' },
          { '规格项': '网络', 'GMKtec G3 Plus (N150)': '1× 2.5GbE（Intel i226-V）、Wi-Fi 6、Bluetooth 5.2' },
          { '规格项': 'TDP', 'GMKtec G3 Plus (N150)': '约 6 W 基础；空载约 6 W，满载约 21 W' },
          { '规格项': '尺寸', 'GMKtec G3 Plus (N150)': '114 × 106 × 42.5 mm，约 361 g' },
          { '规格项': '操作系统', 'GMKtec G3 Plus (N150)': 'Windows 11 Pro（支持 Linux/Home Assistant OS）' },
          { '规格项': '价格（参考）', 'GMKtec G3 Plus (N150)': '约 $180–230（2026年7月——波动，请查看当前价格）' },
        ],
        items: [
          '两个存储插槽——一个 NVMe（PCIe 3.0）和一个 SATA（M.2 2242）——可实现高速系统盘加大容量存储。',
          'USB-A 端口速度因来源和 SKU 而异（5–10 Gbps）；请在你购买的商品页确认。',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: '本地 AI 与 LLM 性能',
        content:
          '**1B–8B 的 4-bit 模型可装入 G3 Plus；7–8B 模型可用但慢，32 GB 内存选项可支持更长上下文或以低吞吐运行约 13B 模型——所有数字均据核实过的硬件估算，并非实测基准。** 与任何 N150 主机一样，单通道 DDR4 带宽和缺少 NPU 是瓶颈。',
        items: [
          '适合轻量本地助手、摘要以及基于小型模型的自动化。',
          '升级到 32 GB 对上下文长度的帮助大于原始速度——内存带宽不变。',
          '无 NPU 且核显加速有限，因此推理受 CPU 限制。',
          '对更重的本地 AI（视觉、快速的 7B 助手），请改选 Ryzen 主机。',
          '参见[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) 试用小型模型，以及[本地 LLM 硬件指南](/zh/local-llms/local-llm-hardware-guide-2026) 了解背景。',
        ],
        affiliateLinks: [
          { label: '查看当前价格 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: '优点与缺点',
        content: '**相对 EQ14，G3 Plus 用网络换取了内存余量。** 以下为均衡视角。',
        items: [
          '**优点**',
          '非常实惠——一台 Home Assistant 主机约 $180–230',
          '可更换 DDR4 SO-DIMM，可升级至 32 GB——比上限 16 GB 的竞品更有余量',
          '两个存储插槽：NVMe 加一个独立 SATA M.2 用于大容量存储',
          '低功耗：空载约 6 W，7×24 运行成本低',
          '非常紧凑（114 × 106 mm）且轻（约 361 g）',
          '**缺点**',
          '只有单个 2.5GbE 端口（EQ14 有两个）',
          '完全没有 USB-C 端口',
          '单通道 DDR4 且无 NPU——超出小型模型即变慢',
          'USB-A 端口速度在不同商品页间不一致；购买前请核实',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: '购买背景：关税与供货（2026）',
        content:
          '**G3 Plus 在中国制造，因此其到手价反映 2026 年的贸易措施——这也是把任何价格都视为动态目标的理由。** 以下是购买背景，而非编辑观点。',
        items: [
          '美国：对中国电子产品的 301 条款关税在 2026 年仍然有效；单独的 2025 年"IEEPA"关税已于 2026年2月被最高法院推翻，并由临时且有上限的 122 条款关税取代。针对直邮进口的 800 美元以下免税"最低限度"豁免也已终止。',
          '欧盟（影响 DE/FR）：欧盟对成品迷你主机没有普遍关税，但自 2026年7月起，取消了对来自中国的低价值直邮包裹 150 欧元的免税门槛，并按包裹增加了少量处理费。',
          '假设（宏观趋势，非单一产品事实）：中国出口产能的转向使这些品牌在欧盟和美国的供货保持充足，总体上支撑了有竞争力的价格。',
          '净影响：购买前请在零售商处核实当前价格——此处约 $180–230 的数字为参考值，标注日期为 2026年7月。',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '在哪购买与当前价格',
        content:
          '**价格每周都在变动，因此请查看实时价格，而非相信一个固定数字。** 截至 2026年7月，16 GB / 512 GB 的 G3 Plus 约为 $180–230；厂商页面可能显示与实际售价不符的占位价格。',
        items: [
          '确认具体 SKU 的内存和存储容量——如果你想要余量，也确认可将 SO-DIMM 升级至 32 GB。',
        ],
        affiliateLinks: [
          { label: '查看当前价格 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '可考虑的替代方案',
        content: '**如果 G3 Plus 不是合适的入门级主机，可考虑这些。**',
        items: [
          '[Beelink EQ14](/zh/smart-home/beelink-eq14-local-ai-review)——另一款入门级 N150 主机；双 2.5GbE 网络但内存上限 16 GB',
          '[Beelink SER8](/zh/smart-home/beelink-ser8-local-ai-review)——升级之选：Ryzen 7 8845HS 约 $650 即可运行真正的 7B 助手',
          '[Minisforum UM890 Pro](/zh/smart-home/minisforum-um890-pro-local-ai-review)——中端 Ryzen 9，配双 2.5GbE 和一个 eGPU 端口',
          '[GEEKOM A9 Max](/zh/smart-home/geekom-a9-max-local-ai-review)——高端主机，内存上限达 128 GB',
          '还在比较？先看[面向 Home Assistant + 本地 AI 的最佳迷你主机汇总](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'GMKtec G3 Plus 能运行本地 LLM 吗？', a: '能运行小型的。1B–8B 的 4-bit 模型可装下，7–8B 模型可用但慢，原因是单通道 DDR4 带宽和四核 N150。这是据其核实过的硬件估算，并非固定基准。' },
          { q: '它的内存能装多大的模型？', a: '在基础 16 GB 下，7–8B 的 4-bit 模型可留有余量装入。将 SO-DIMM 升级到 32 GB 可支持更长上下文或以低吞吐运行约 13B 模型，但速度仍受内存带宽限制。' },
          { q: '内存是板载焊接还是可升级？', a: '可升级。与某些猜测相反，G3 Plus 使用单个可更换的 DDR4 SO-DIMM 插槽，而非板载焊接内存，并支持最高 32 GB。这个升级空间相对内存固定的入门级主机是真正的优势。' },
          { q: 'G3 Plus 适合 Home Assistant 和常年开机使用吗？', a: '适合。它能很好地运行 Home Assistant 及其加载项，空载约 6 W，因此长期开机成本很低。注意它只有单个 2.5GbE 端口，因此作为网络主机不如双 LAN 的 Beelink EQ14。' },
          { q: 'G3 Plus 有 USB-C 端口吗？', a: '没有。此型号有四个 USB-A 端口和两个 HDMI 输出，但没有 USB-C 端口，请据此规划外设。' },
          { q: 'G3 Plus 耗电多少？', a: '空载约 6 W，满载约 21 W，因此持续运行成本极低。这种能效是选择 N150 主机作为中枢的关键原因。' },
          { q: 'G3 Plus 还是 Beelink EQ14？', a: '两者都用 Intel N150。G3 Plus 支持最高 32 GB 内存，有利于上下文和更大的小型模型；EQ14 上限 16 GB，但增加了第二个 2.5GbE 端口。按你更看重内存余量还是双网络来选择。' },
          { q: 'GMKtec G3 Plus 在哪里制造，是否影响价格？', a: '它在中国制造。2026 年美国进口措施（301 条款关税、800 美元以下最低限度豁免的终止）以及欧盟取消低价值包裹 150 欧元门槛都可能影响到手成本，因此请核实零售商当前价格，而非依赖固定数字。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[面向 Home Assistant + 本地 AI 的最佳迷你主机](/zh/smart-home/best-mini-pc-home-assistant-local-ai)——本评测所属的汇总',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)——Pi 对 迷你主机 对 NAS',
          '[用本地 LLM 运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)——这台主机实际运行什么',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama)——在 G3 Plus 上试用小型模型',
          '[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started)——搭建中枢',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'GMKtec G3 Plus 评测（2026）：入门级本地智能家居',
      reviewBody:
        'GMKtec NucBox G3 Plus 是一款入门级 Intel N150 迷你主机，配备可更换、最高升级至 32 GB 的 DDR4 SO-DIMM。约 $180–230（2026年7月）即可运行 Home Assistant 和小型本地模型。一台有内存余量的中枢，而非快速的 AI 机器。',
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
      url: 'https://www.promptquorum.com/zh/smart-home/gmktec-g3-plus-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GMKtec NucBox G3 Plus',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GMKtec' },
        description: '搭载 Intel N150、DDR4 内存可升级至 32 GB 的入门级迷你主机，面向 Home Assistant 和小型本地模型。',
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'GMKtec G3 Plus 리뷰(2026): 저가형 로컬 스마트홈',
    seoTitle: 'GMKtec G3 Plus 리뷰 2026 — 저가 스마트홈 미니PC',
    intro:
      'GMKtec NucBox G3 Plus(Intel N150, 32 GB DDR4까지 확장 가능)는 로컬 우선 스마트홈을 위한 저가형 미니PC입니다. 약 $180–230(2026년 7월, 가격 변동)로 Home Assistant와 소형 로컬 모델을 실행하며, 일부 경쟁 제품 대비 실질적인 강점이 있습니다. 바로 RAM이 납땜형이 아니라 교체 가능한 SO-DIMM이라는 점입니다. 이 리뷰는 사양을 검증하고, 로컬 LLM 속도에 대한 현실적인 기대치를 제시하며, Beelink EQ14 및 Ryzen급 제품과의 위치를 설명합니다.',
    metaDescription:
      'GMKtec G3 Plus 리뷰 2026: Intel N150, 32 GB DDR4까지 확장, 듀얼 HDMI, 단일 2.5GbE, 약 $180–230. RAM 교체가 가능한 저가형 Home Assistant 미니PC의 전체 사양 분석입니다.',
    twitterDescription:
      'GMKtec G3 Plus(2026): Intel N150, 32 GB DDR4까지 확장(납땜형 아님), 약 $180–230. 소형 로컬 모델을 위한 저가형 Home Assistant 미니PC의 위치를 정리했습니다.',
    readTime: '6분 읽기',
    educationalLevel: 'Beginner',
    audience: 'Home Assistant와 소형 로컬 모델을 실행하는 예산 중심 구매자',
    primaryTerm: 'GMKtec G3 Plus 리뷰',
    targetKeywords: [
      'gmktec g3 plus 리뷰',
      'gmktec g3 plus home assistant',
      'gmktec g3 plus 로컬 ai',
      'gmktec nucbox g3 plus n150',
      'gmktec g3 plus 로컬 llm',
    ],
    leadAnswerBlock:
      '**GMKtec G3 Plus(Intel N150, 32 GB DDR4까지 확장 가능)는 약 $180–230(2026년 7월, 변동)로 Home Assistant와 1B–8B 소형 로컬 모델을 실행하는 저가형 미니PC입니다.** 가장 큰 강점은 32 GB까지 지원하는 교체 가능한 SO-DIMM 슬롯으로, Beelink EQ14보다 메모리 여유가 큽니다. 다만 2.5GbE 포트는 하나뿐이고 USB-C는 없습니다.',
    quickAnswerTop: {
      ko: {
        question: 'GMKtec G3 Plus는 Home Assistant와 로컬 AI에 적합합니까?',
        answer:
          'Home Assistant에는 적합하지만 AI에는 한계가 있습니다. Intel N150(4코어), Intel UHD 그래픽, DDR4 메모리는 Home Assistant와 소형 로컬 모델을 잘 실행합니다. 단일 SO-DIMM 슬롯이 32 GB까지 지원하므로 16 GB 상한의 경쟁 제품보다 여유가 조금 더 있지만, 싱글 채널 DDR4와 NPU 부재로 소형 모델을 넘어서는 작업은 여전히 느립니다. 약 $180–230(2026년 7월, 변동)로, 이것은 저가형 미니PC이지 로컬 LLM 머신은 아닙니다.',
        bullets: [
          'CPU: Intel N150 — 4코어 / 4스레드, Intel UHD 그래픽(24 EU), NPU 없음',
          'RAM: DDR4-3200, 단일 SO-DIMM 슬롯, 32 GB까지 확장 가능(교체 가능, 납땜형 아님)',
          '로컬 LLM(사양 기반 추정): 1B–8B 4-bit는 적재 가능, 7–8B는 쓸 만하지만 느림',
          '포트: 듀얼 HDMI(듀얼 4K/60), 단일 2.5GbE, Wi-Fi 6 — USB-C 없음',
          '가격 약 $180–230(2026년 7월, 변동) — 저가형 Home Assistant 미니PC',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: 'tldr' },
      { label: '총평', anchor: 'verdict' },
      { label: '사양', anchor: 'specs' },
      { label: '로컬 AI 및 LLM 성능', anchor: 'local-ai' },
      { label: '장점과 단점', anchor: 'pros-cons' },
      { label: '구매 배경: 관세(2026)', anchor: 'trade-note' },
      { label: '구매처', anchor: 'where-to-buy' },
      { label: '대안', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'GMKtec G3 Plus는 Home Assistant와 소형 로컬 모델을 실행하는 저가형 Intel N150 미니PC로, 32 GB까지 지원하는 교체 가능한 DDR4 슬롯을 갖췄습니다.' },
      { type: 'plain-terms', content: '미니PC는 작고 저전력이며 항상 켜 두는 컴퓨터입니다. G3 Plus는 그중 저렴한 제품으로, 스마트홈 허브와 소형 AI 모델을 실행합니다. 일부 저가형 제품과 달리 메모리를 교체해 32 GB까지 늘릴 수 있어 여유가 조금 더 있지만, 여전히 빠른 AI 머신이 아니라 허브입니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 내용',
        isTldr: true,
        items: [
          'G3 Plus는 약 $180–230로 Home Assistant와 1B–8B 소형 로컬 모델을 실행합니다',
          'Intel N150: 4코어, Intel UHD 그래픽, DDR4 32 GB까지 확장 가능(교체형 SO-DIMM), NPU 없음',
          '7–8B 모델은 적재되지만 느리게 실행됩니다 — 이것은 저가형 허브이지 AI 미니PC가 아닙니다',
          '[Beelink EQ14](/ko/smart-home/beelink-eq14-local-ai-review) 대비 강점: 32 GB RAM 상한(단, 2.5GbE 포트 하나, USB-C 없음)',
          '반응이 빠른 7B 어시스턴트가 필요하면 [Beelink SER8](/ko/smart-home/beelink-ser8-local-ai-review)로 올라가십시오',
          '중국 제조 — 2026년 미국/EU 수입 조치를 최종 비용에 반영하십시오(관세 참고 참조)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: '총평 — 누구에게 적합한가',
        content:
          '**저렴한 Home Assistant 미니PC를 원하고 32 GB까지 지원하는 교체 가능한 RAM 슬롯을 중시한다면 GMKtec G3 Plus를 구매하십시오.** 약 $180–230로 로컬 우선 스마트홈에 대한 견실하고 합리적인 진입점이며, 16 GB 상한 경쟁 제품보다 메모리 여유가 조금 더 있습니다. 빠른 로컬 어시스턴트는 기대하지 마십시오 — 싱글 채널 DDR4의 Intel N150은 소형 모델만 처리합니다.\n\n가장 강력한 용도는 소형 모델도 호스팅할 수 있는 **소형이면서 확장 가능한 Home Assistant 허브**입니다. 네트워크 포트가 두 개 필요하면 Beelink EQ14가 더 나은 허브이며, 진짜 AI 속도가 필요하면 Ryzen 제품으로 올라가십시오.',
        affiliateLinks: [
          { label: '현재 가격 확인 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: '사양',
        content:
          '**아래 모든 사양은 2026년 7월에 GMKtec 및 독립 리뷰 출처와 대조해 검증했습니다.** RAM은 32 GB까지 지원하는 교체 가능한 DDR4 SO-DIMM(납땜형 아님)입니다. 이 모델에는 USB-C 포트가 없습니다.',
        columns: ['항목', 'GMKtec G3 Plus (N150)'],
        rows: [
          { '항목': 'CPU', 'GMKtec G3 Plus (N150)': 'Intel N150(Twin Lake / Alder Lake-N)' },
          { '항목': '코어 / 스레드', 'GMKtec G3 Plus (N150)': '4코어 / 4스레드, 최대 3.6 GHz' },
          { '항목': 'iGPU', 'GMKtec G3 Plus (N150)': 'Intel UHD Graphics, 24 EU, 최대 1000 MHz' },
          { '항목': 'NPU', 'GMKtec G3 Plus (N150)': '없음' },
          { '항목': 'RAM', 'GMKtec G3 Plus (N150)': 'DDR4-3200, 단일 SO-DIMM, 32 GB까지 확장 가능(교체 가능, 납땜형 아님)' },
          { '항목': '저장장치', 'GMKtec G3 Plus (N150)': 'M.2 2280 PCIe 3.0 NVMe(최대 4 TB) + M.2 2242 SATA(최대 2 TB)' },
          { '항목': '포트', 'GMKtec G3 Plus (N150)': '4× USB-A 3.2(최대 10 Gbps), 2× HDMI 2.0, 3.5 mm — USB-C 없음' },
          { '항목': '네트워크', 'GMKtec G3 Plus (N150)': '1× 2.5GbE(Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { '항목': 'TDP', 'GMKtec G3 Plus (N150)': '약 6 W 기본; 유휴 약 6 W, 부하 시 약 21 W' },
          { '항목': '크기', 'GMKtec G3 Plus (N150)': '114 × 106 × 42.5 mm, 약 361 g' },
          { '항목': 'OS', 'GMKtec G3 Plus (N150)': 'Windows 11 Pro(Linux/Home Assistant OS 지원)' },
          { '항목': '가격(참고)', 'GMKtec G3 Plus (N150)': '약 $180–230(2026년 7월 — 변동, 현재 가격 확인)' },
        ],
        items: [
          '저장장치 슬롯 두 개 — NVMe(PCIe 3.0)와 SATA(M.2 2242) — 로 빠른 OS 드라이브와 대용량 저장을 함께 구성할 수 있습니다.',
          'USB-A 포트 속도는 출처와 SKU에 따라 다릅니다(5–10 Gbps). 구매하는 상품 페이지에서 확인하십시오.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: '로컬 AI 및 LLM 성능',
        content:
          '**1B–8B 4-bit 모델은 G3 Plus에 적재되며, 7–8B 모델은 쓸 만하지만 느립니다. 32 GB RAM 옵션은 더 긴 컨텍스트나 낮은 처리량의 약 13B 모델을 가능하게 합니다 — 모든 수치는 검증된 하드웨어에서 추정한 값이며 실측 벤치마크가 아닙니다.** 모든 N150 제품과 마찬가지로 싱글 채널 DDR4 대역폭과 NPU 부재가 한계입니다.',
        items: [
          '경량 로컬 어시스턴트, 요약, 소형 모델 기반 자동화에 적합합니다.',
          '32 GB로 업그레이드하면 원시 속도보다 컨텍스트 길이에 더 도움이 됩니다 — 메모리 대역폭은 변하지 않습니다.',
          'NPU가 없고 iGPU 가속이 제한적이라 추론은 CPU에 좌우됩니다.',
          '더 무거운 로컬 AI(비전, 빠른 7B 어시스턴트)에는 대신 Ryzen 제품을 선택하십시오.',
          '소형 모델을 시험하려면 [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)을, 배경은 [로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide-2026)를 참고하십시오.',
        ],
        affiliateLinks: [
          { label: '현재 가격 확인 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: '장점과 단점',
        content: '**G3 Plus는 EQ14 대비 네트워크를 메모리 여유와 맞바꿉니다.** 균형 잡힌 시각은 아래와 같습니다.',
        items: [
          '**장점**',
          '매우 저렴 — Home Assistant 미니PC로 약 $180–230',
          '교체 가능한 DDR4 SO-DIMM으로 32 GB까지 확장 — 16 GB 상한 경쟁 제품보다 여유 있음',
          '저장장치 슬롯 두 개: NVMe와 대용량용 별도 SATA M.2',
          '저전력: 유휴 시 약 6 W로 24/7 운용 비용이 저렴',
          '매우 소형(114 × 106 mm)이고 가벼움(약 361 g)',
          '**단점**',
          '2.5GbE 포트가 하나뿐(EQ14는 두 개)',
          'USB-C 포트가 전혀 없음',
          '싱글 채널 DDR4에 NPU 없음 — 소형 모델을 넘어서면 느림',
          'USB-A 포트 속도가 상품 페이지마다 일관되지 않음; 구매 전 확인 필요',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: '구매 배경: 관세 및 공급(2026)',
        content:
          '**G3 Plus는 중국에서 제조되므로 최종 가격은 2026년 무역 조치를 반영합니다 — 어떤 가격이든 변동 대상으로 봐야 하는 이유입니다.** 아래 사실은 편집 의견이 아니라 구매 배경 정보입니다.',
        items: [
          '미국: 중국산 전자제품에 대한 301조 관세는 2026년에도 유효합니다. 별개의 2025년 "IEEPA" 관세는 2026년 2월 대법원에서 무효화되었고, 한시적이고 상한이 있는 122조 관세로 대체되었습니다. 직수입에 대한 800달러 미만 면세 "디미니미스" 조항도 종료되었습니다.',
          'EU(DE/FR에 영향): 완성 미니PC에 대한 광범위한 EU 관세는 없지만, 2026년 7월부터 중국발 저가 직배송 소포에 대한 150유로 면세 기준이 폐지되고 소포당 소액의 처리 수수료가 추가되었습니다.',
          '가정(제품별 사실이 아닌 거시 추세): 전환된 중국 수출 물량이 EU와 미국에서 이들 브랜드의 공급을 높게 유지해, 전반적으로 경쟁력 있는 가격을 뒷받침합니다.',
          '순효과: 구매 전 판매처에서 현재 가격을 확인하십시오 — 여기의 약 $180–230는 참고 수치이며 2026년 7월 기준입니다.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '구매처 및 현재 가격',
        content:
          '**가격은 주 단위로 움직이므로 고정된 수치를 믿기보다 실시간 가격을 확인하십시오.** 2026년 7월 기준 16 GB / 512 GB G3 Plus는 약 $180–230입니다. 제조사 페이지는 실제 판매가와 다른 참고 가격을 표시할 수 있습니다.',
        items: [
          '정확한 SKU의 RAM과 저장 용량을 확인하고, 여유가 필요하면 SO-DIMM을 32 GB로 확장할 수 있는지도 확인하십시오.',
        ],
        affiliateLinks: [
          { label: '현재 가격 확인 — GMKtec G3 Plus', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: '고려할 만한 대안',
        content: '**G3 Plus가 적합한 저가형 제품이 아니라면 다음을 고려하십시오.**',
        items: [
          '[Beelink EQ14](/ko/smart-home/beelink-eq14-local-ai-review) — 또 다른 저가형 N150 제품; 듀얼 2.5GbE 네트워크지만 RAM은 16 GB 상한',
          '[Beelink SER8](/ko/smart-home/beelink-ser8-local-ai-review) — 상위 단계: Ryzen 7 8845HS가 약 $650로 진짜 7B 어시스턴트를 실행',
          '[Minisforum UM890 Pro](/ko/smart-home/minisforum-um890-pro-local-ai-review) — 듀얼 2.5GbE와 eGPU 포트를 갖춘 중급 Ryzen 9',
          '[GEEKOM A9 Max](/ko/smart-home/geekom-a9-max-local-ai-review) — 128 GB RAM 상한의 프리미엄 제품',
          '아직 비교 중이십니까? [Home Assistant + 로컬 AI용 최고의 미니PC 정리](/ko/smart-home/best-mini-pc-home-assistant-local-ai)부터 시작하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'GMKtec G3 Plus는 로컬 LLM을 실행할 수 있습니까?', a: '소형 모델은 실행할 수 있습니다. 1B–8B 4-bit 모델은 적재되며, 7–8B 모델은 쓸 만하지만 싱글 채널 DDR4 대역폭과 4코어 N150 때문에 느립니다. 이는 검증된 하드웨어에서 추정한 값이며 고정 벤치마크가 아닙니다.' },
          { q: 'RAM에는 어느 정도 크기의 모델이 들어갑니까?', a: '기본 16 GB에서는 7–8B 4-bit 모델이 여유 있게 적재됩니다. SO-DIMM을 32 GB로 확장하면 더 긴 컨텍스트나 낮은 처리량의 약 13B 모델이 가능하지만, 속도는 여전히 메모리 대역폭에 제한됩니다.' },
          { q: 'RAM은 납땜형입니까, 아니면 확장 가능합니까?', a: '확장 가능합니다. 일부 추측과 달리 G3 Plus는 납땜형 메모리가 아니라 교체 가능한 DDR4 SO-DIMM 슬롯 하나를 사용하며 최대 32 GB를 지원합니다. 이 확장 여지는 RAM이 고정된 저가형 제품 대비 실질적인 강점입니다.' },
          { q: 'G3 Plus는 Home Assistant와 상시 운용에 적합합니까?', a: '적합합니다. Home Assistant와 애드온을 잘 실행하고 유휴 시 약 6 W를 소비하므로 켜 두는 비용이 저렴합니다. 다만 2.5GbE 포트가 하나뿐이라 듀얼 LAN의 Beelink EQ14만큼의 네트워크 제품은 아닙니다.' },
          { q: 'G3 Plus에 USB-C 포트가 있습니까?', a: '없습니다. 이 모델은 USB-A 포트 네 개와 HDMI 출력 두 개를 갖췄지만 USB-C 포트는 없으므로 주변기기를 그에 맞게 계획하십시오.' },
          { q: 'G3 Plus는 전력을 얼마나 사용합니까?', a: '유휴 시 약 6 W, 부하 시 약 21 W이므로 연속 운용 비용이 매우 적습니다. 이 효율성은 허브로 N150 제품을 선택하는 핵심 이유입니다.' },
          { q: 'G3 Plus입니까, Beelink EQ14입니까?', a: '둘 다 Intel N150을 사용합니다. G3 Plus는 최대 32 GB RAM을 지원해 컨텍스트와 더 큰 소형 모델에 유리하고, EQ14는 16 GB 상한이지만 두 번째 2.5GbE 포트를 추가합니다. 메모리 여유와 듀얼 네트워크 중 무엇을 중시하는지에 따라 선택하십시오.' },
          { q: 'GMKtec G3 Plus는 어디에서 제조되며 가격에 영향을 줍니까?', a: '중국에서 제조됩니다. 2026년에는 미국 수입 조치(301조 관세, 800달러 미만 디미니미스 면세 종료)와 EU의 저가 소포 150유로 기준 폐지가 최종 비용에 영향을 줄 수 있으므로, 고정된 수치에 의존하지 말고 판매처의 현재 가격을 확인하십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Home Assistant + 로컬 AI용 최고의 미니PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — 이 리뷰가 속한 정리 글',
          '[로컬 스마트홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — Pi 대 미니PC 대 NAS',
          '[로컬 LLM으로 스마트홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — 이 제품이 실제로 실행하는 것',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — G3 Plus에서 소형 모델 시험하기',
          '[Home Assistant 시작하기](/ko/smart-home/home-assistant-getting-started) — 허브 설정하기',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'GMKtec G3 Plus 리뷰(2026): 저가형 로컬 스마트홈',
      reviewBody:
        'GMKtec NucBox G3 Plus는 32 GB까지 확장 가능한 교체형 DDR4 SO-DIMM을 갖춘 저가형 Intel N150 미니PC입니다. 약 $180–230(2026년 7월)로 Home Assistant와 소형 로컬 모델을 실행합니다. 메모리 여유가 있는 허브이며 빠른 AI 머신은 아닙니다.',
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
      url: 'https://www.promptquorum.com/ko/smart-home/gmktec-g3-plus-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GMKtec NucBox G3 Plus',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GMKtec' },
        description: 'Intel N150과 32 GB까지 확장 가능한 DDR4 RAM을 갖춘 저가형 미니PC로, Home Assistant와 소형 로컬 모델용입니다.',
      },
    },
  },
}
