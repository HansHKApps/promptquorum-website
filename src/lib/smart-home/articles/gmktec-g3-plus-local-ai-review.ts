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
}
