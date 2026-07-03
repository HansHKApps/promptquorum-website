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
    title: 'Beelink EQ14 Review (2026): Home Assistant on a Budget',
    seoTitle: 'Beelink EQ14 Review 2026 — Budget Home Assistant Box',
    intro:
      'The Beelink EQ14 (Intel N150, 16 GB DDR4, dual 2.5GbE) is a budget mini PC for a local-first smart home. At about $189–199 (July 2026, price volatile) it runs Home Assistant and a small local model well, but it is a hub-and-networking box, not an AI machine. This review verifies its specs, sets honest expectations for local-LLM speed, and explains when to buy it instead of a Ryzen box like the Beelink SER8.',
    metaDescription:
      'Beelink EQ14 review 2026: Intel N150, 16 GB DDR4, dual 2.5GbE, ~$190. Great budget Home Assistant box for a tiny local model — honest limits on local-LLM speed explained.',
    twitterDescription:
      'Beelink EQ14 (2026): Intel N150, 16 GB DDR4, dual 2.5GbE, ~$190. A budget Home Assistant box — runs a 1B–3B local model, not a 7B assistant. Here is where it fits.',
    readTime: '6 min read',
    educationalLevel: 'Beginner',
    audience: 'Budget buyers running Home Assistant and a small local model',
    primaryTerm: 'Beelink EQ14 review',
    targetKeywords: [
      'beelink eq14 review',
      'beelink eq14 home assistant',
      'beelink eq14 local ai',
      'intel n150 mini pc home assistant',
      'beelink eq14 local llm',
    ],
    leadAnswerBlock:
      '**The Beelink EQ14 (Intel N150, 16 GB DDR4, dual 2.5GbE) is a budget mini PC that runs Home Assistant and a small 1B–3B local model well for about $189–199 (July 2026, volatile).** Buy it as an efficient hub-and-networking box; if you want a responsive 7B assistant, step up to a Ryzen box like the Beelink SER8 instead.',
    quickAnswerTop: {
      en: {
        question: 'Is the Beelink EQ14 good for Home Assistant and local AI?',
        answer:
          'Yes for Home Assistant, with limits for AI. The Intel N150 (4 cores), Intel UHD graphics, and 16 GB of single-channel DDR4 run Home Assistant, add-ons, and a small 1B–3B local model comfortably. A 7B model will load but runs slowly because of the single-channel DDR4 bandwidth and lack of an AI accelerator. Its real standout is dual 2.5GbE networking, which makes it a strong low-power hub. At about $189–199 (July 2026, volatile) it is a budget pick, not a local-LLM machine.',
        bullets: [
          'CPU: Intel N150 — 4 cores / 4 threads, Intel UHD graphics (24 EU), no NPU',
          'RAM: 16 GB DDR4-3200, single channel, single SO-DIMM slot (16 GB max)',
          'Local LLM (estimated from specs): 1B–3B 4-bit is the sweet spot; 7B loads but is slow',
          'Standout: dual 2.5GbE (Intel i226-V) and dual HDMI — a strong low-power hub',
          'Price ~$189–199 (July 2026, volatile) — budget Home Assistant box',
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
      { type: 'one-sentence', content: 'The Beelink EQ14 is a budget Intel N150 mini PC that runs Home Assistant and a small 1B–3B local model, with dual 2.5GbE networking as its standout feature.' },
      { type: 'plain-terms', content: 'A mini PC is a small, low-power always-on computer. The EQ14 is a cheap one: it easily runs a smart-home hub and a small AI model, but not a big, fast chat model. Its best trick is two fast network ports, which make it a tidy home-network box as well as a hub.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The EQ14 runs Home Assistant and a small 1B–3B local model well for about $190',
          'Intel N150: 4 cores, Intel UHD graphics, 16 GB single-channel DDR4 (16 GB max), no NPU',
          'A 7B model loads but runs slowly — this is a hub, not an AI box',
          'Standout: dual 2.5GbE (Intel i226-V) makes it a strong low-power home-network hub',
          'For a responsive 7B assistant, step up to a [Beelink SER8](/smart-home/beelink-ser8-local-ai-review)',
          'Made in China — factor 2026 US/EU import measures into landed cost (see trade note)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — Who Should Buy It',
        content:
          '**Buy the Beelink EQ14 if you want a cheap, efficient box to run Home Assistant plus a small local model, and you value its dual 2.5GbE networking.** It is a fine entry point to a local-first smart home for about $190. Do not buy it expecting a fast local assistant — the Intel N150 with single-channel DDR4 is fine for a 1B–3B model but slow with anything larger.\n\nIts single strongest use case is an **always-on Home Assistant hub with real networking** — two 2.5GbE ports let it double as a router-adjacent box or run network add-ons while hosting the hub.',
        affiliateLinks: [
          { label: 'Check current price — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Specifications',
        content:
          '**All specs below were verified against Beelink and independent review sources in July 2026.** Note the RAM is DDR4, single-channel, and capped at 16 GB — a real constraint for AI work. Storage capacity ships by SKU.',
        columns: ['Spec', 'Beelink EQ14 (N150)'],
        rows: [
          { Spec: 'CPU', 'Beelink EQ14 (N150)': 'Intel N150 (Twin Lake / Alder Lake-N)' },
          { Spec: 'Cores / threads', 'Beelink EQ14 (N150)': '4 cores / 4 threads, up to 3.6 GHz' },
          { Spec: 'iGPU', 'Beelink EQ14 (N150)': 'Intel UHD Graphics, 24 EU' },
          { Spec: 'NPU', 'Beelink EQ14 (N150)': 'None' },
          { Spec: 'RAM', 'Beelink EQ14 (N150)': '16 GB DDR4-3200, single channel, single SO-DIMM (16 GB max)' },
          { Spec: 'Storage', 'Beelink EQ14 (N150)': '500 GB–1 TB by SKU; 2× M.2 2280 PCIe 3.0; up to 8 TB' },
          { Spec: 'Ports', 'Beelink EQ14 (N150)': 'USB-A 10 Gbps ×3+, USB-A 2.0, USB-C 10 Gbps (data only), 2× HDMI 2.0, 3.5 mm' },
          { Spec: 'Networking', 'Beelink EQ14 (N150)': '2× 2.5GbE (Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { Spec: 'TDP', 'Beelink EQ14 (N150)': '~6 W base; configured to ~20–25 W; ~6 W idle at the wall' },
          { Spec: 'Dimensions', 'Beelink EQ14 (N150)': '126 × 126 × 39 mm, ~432–490 g' },
          { Spec: 'OS', 'Beelink EQ14 (N150)': 'Windows 11 Home (Linux/Home Assistant OS supported)' },
          { Spec: 'Price (indicative)', 'Beelink EQ14 (N150)': '~$189–199 (July 2026 — volatile, check current price)' },
        ],
        items: [
          'The USB-C port is data-only — no DisplayPort-Alt output and no Power Delivery.',
          'Dual displays run from the two HDMI 2.0 ports at up to 4K/60.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Local AI & LLM Performance',
        content:
          '**A 1B–3B model at 4-bit is the realistic sweet spot on the EQ14; a 7B model will load within 16 GB but generates slowly because of single-channel DDR4 bandwidth and four efficiency cores — all figures estimated from the verified hardware, not a measured benchmark.** The Intel UHD graphics offer little acceleration for LLMs here, so expect CPU-bound speeds.',
        items: [
          'Good for lightweight local assistants, classification, and summarization on small models.',
          'Not suited to an interactive 7B chat assistant — bandwidth and core count are the limits.',
          'There is no NPU, so nothing offloads the model; the CPU does the work.',
          'For camera object detection, pair Home Assistant with a more capable box — see [local AI security cameras](/smart-home/local-ai-security-camera).',
          'See [how to install Ollama](/local-llms/how-to-install-ollama) to try a small model, and the [local LLM hardware guide](/local-llms/local-llm-hardware-guide-2026) for context.',
        ],
        affiliateLinks: [
          { label: 'Check current price — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Pros & Cons',
        content: '**The EQ14 is a budget hub with one genuine standout — its networking.** Balanced view below.',
        items: [
          '**Pros**',
          'Very affordable — about $190 for a capable Home Assistant hub',
          'Dual 2.5GbE (Intel i226-V) — rare at this price and genuinely useful',
          'Low power: roughly 6 W idle, cheap to run 24/7',
          'Two M.2 slots and dual HDMI for a small, flexible box',
          'RAM is a replaceable SO-DIMM (though capped at 16 GB)',
          '**Cons**',
          '16 GB single-channel DDR4 ceiling — the main limit for AI',
          'No NPU and weak iGPU acceleration — slow beyond a 3B model',
          'USB-C is data-only (no video out, no Power Delivery)',
          'Not the right box if a responsive 7B assistant is the goal',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Buyer Context: Tariffs & Availability (2026)',
        content:
          '**The EQ14 is manufactured in China, so its landed price reflects 2026 trade measures — a reason to treat any price as a moving target.** The facts below are buyer context, not editorial opinion.',
        items: [
          'US: Section 301 tariffs on Chinese electronics remain in force in 2026; the separate 2025 "IEEPA" tariffs were struck down by the Supreme Court in February 2026 and replaced by a temporary, capped Section 122 tariff. The sub-$800 duty-free "de minimis" exemption for direct imports has also ended.',
          'EU (affects DE/FR): there is no broad EU tariff on finished mini PCs, but from July 2026 the €150 duty-free threshold on low-value direct-from-China parcels was removed and a small per-parcel handling fee added.',
          'Assumption (macro trend, not a per-product fact): redirected Chinese export capacity has kept availability of these brands high in the EU and US, which broadly supports competitive pricing.',
          'Net effect: verify the current price at the retailer before buying — the ~$190 figure here is indicative and date-stamped July 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Buy & Current Price',
        content:
          '**Prices move week to week, so check the live price rather than trusting a fixed figure.** As of July 2026 the 16 GB EQ14 sits around $189–199, with higher-storage SKUs closer to $220.',
        items: [
          'Confirm the LAN variant — the mainstream N150 EQ14 ships with dual 2.5GbE, which is the reason to pick it.',
        ],
        affiliateLinks: [
          { label: 'Check current price — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Consider',
        content: '**If the EQ14 is too limited (or you want a different budget box), consider these.**',
        items: [
          '[GMKtec G3 Plus](/smart-home/gmktec-g3-plus-local-ai-review) — the other budget N150 box; upgradeable to 32 GB RAM but only a single 2.5GbE port',
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
          { q: 'Can the Beelink EQ14 run local LLMs?', a: 'It can run small ones. A 1B–3B model at 4-bit is the realistic sweet spot. A 7B model will load within 16 GB but generates slowly because of single-channel DDR4 bandwidth and the four-core N150. This is estimated from its verified hardware, not a fixed benchmark.' },
          { q: 'How big a model fits in its RAM?', a: 'With 16 GB total (shared with the operating system) a 1B–3B model is comfortable and a 7B 4-bit model just fits but runs slowly. The 16 GB ceiling is a hard limit — the N150 platform and single SO-DIMM slot cannot go higher.' },
          { q: 'Is the EQ14 good for Home Assistant and always-on use?', a: 'Yes. It runs Home Assistant and add-ons comfortably and draws about 6 W at idle, so it is cheap to leave on. Its dual 2.5GbE ports make it a strong low-power hub and network box.' },
          { q: 'Does the EQ14 have an NPU for AI?', a: 'No. The Intel N150 has no NPU or AI accelerator, and the integrated graphics give little help with LLMs. Any AI model runs on the CPU, which is why only small models are practical.' },
          { q: 'Is the RAM upgradeable?', a: 'The RAM is a replaceable DDR4 SO-DIMM, but the platform caps at 16 GB, so there is no meaningful upgrade path for larger models. If you need more memory for AI, choose a Ryzen box instead.' },
          { q: 'How much power does the EQ14 use?', a: 'About 6 W at idle and roughly 20–25 W under load, so running it continuously costs very little. This efficiency is a key reason to choose an N150 box as a hub.' },
          { q: 'EQ14 or GMKtec G3 Plus?', a: 'Both use the Intel N150. The EQ14 has dual 2.5GbE, which suits a networking-heavy hub; the G3 Plus has a single 2.5GbE but supports up to 32 GB of RAM, which helps a little for larger models. Pick by whether you value networking or memory headroom.' },
          { q: 'Where is the Beelink EQ14 made, and does that affect price?', a: 'It is manufactured in China. In 2026 US import measures (Section 301 tariffs, the end of the sub-$800 de minimis exemption) and the EU removal of the €150 low-value parcel exemption can affect landed cost, so check the current retailer price rather than relying on a fixed number.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — the roundup this review belongs to',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the box actually runs',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — try a small model on the EQ14',
          '[Getting Started with Home Assistant](/smart-home/home-assistant-getting-started) — set up the hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Beelink EQ14 Review (2026): Home Assistant on a Budget',
      reviewBody:
        'The Beelink EQ14 is a budget Intel N150 mini PC with 16 GB DDR4 and dual 2.5GbE that runs Home Assistant and a small 1B–3B local model for about $189–199 (July 2026). It is a hub-and-networking box, not a local-LLM machine.',
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
      url: 'https://www.promptquorum.com/smart-home/beelink-eq14-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink EQ14',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'Budget mini PC with Intel N150, 16 GB DDR4, and dual 2.5GbE, for Home Assistant and a small local model.',
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
    title: 'Beelink EQ14 Test (2026): Home Assistant für kleines Geld',
    seoTitle: 'Beelink EQ14 Test 2026 — günstige Home-Assistant-Box',
    intro:
      'Der Beelink EQ14 (Intel N150, 16 GB DDR4, zwei 2.5GbE) ist ein günstiger Mini-PC für ein lokal-first Smart Home. Für rund 199 € (Juli 2026, Preis schwankt) betreibt er Home Assistant und ein kleines lokales Modell gut, ist aber eine Hub- und Netzwerk-Box, keine KI-Maschine. Dieser Test prüft die Spezifikationen, setzt ehrliche Erwartungen an die Geschwindigkeit lokaler LLMs und erklärt, wann Sie ihn statt einer Ryzen-Box wie dem Beelink SER8 kaufen sollten.',
    metaDescription:
      'Beelink EQ14 Test 2026: Intel N150, 16 GB DDR4, zwei 2.5GbE, ca. 199 €. Starke günstige Home-Assistant-Box für ein kleines lokales Modell — ehrliche Grenzen bei der LLM-Geschwindigkeit erklärt.',
    twitterDescription:
      'Beelink EQ14 (2026): Intel N150, 16 GB DDR4, zwei 2.5GbE, ca. 199 €. Eine günstige Home-Assistant-Box — betreibt ein 1B–3B-Modell, keinen 7B-Assistenten. Hier passt sie.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Preisbewusste Käufer, die Home Assistant und ein kleines lokales Modell betreiben',
    primaryTerm: 'Beelink EQ14 Test',
    targetKeywords: [
      'beelink eq14 test',
      'beelink eq14 home assistant',
      'beelink eq14 lokale ki',
      'intel n150 mini pc home assistant',
      'beelink eq14 lokales llm',
    ],
    leadAnswerBlock:
      '**Der Beelink EQ14 (Intel N150, 16 GB DDR4, zwei 2.5GbE) ist ein günstiger Mini-PC, der Home Assistant und ein kleines 1B–3B-Modell für rund 199 € (Juli 2026, schwankend) gut betreibt.** Kaufen Sie ihn als effiziente Hub- und Netzwerk-Box; wenn Sie einen flotten 7B-Assistenten wollen, greifen Sie stattdessen zu einer Ryzen-Box wie dem Beelink SER8.',
    quickAnswerTop: {
      de: {
        question: 'Ist der Beelink EQ14 gut für Home Assistant und lokale KI?',
        answer:
          'Ja für Home Assistant, mit Grenzen bei KI. Der Intel N150 (4 Kerne), die Intel-UHD-Grafik und 16 GB Single-Channel-DDR4 betreiben Home Assistant, Add-ons und ein kleines 1B–3B-Modell bequem. Ein 7B-Modell lädt zwar, läuft aber langsam wegen der Single-Channel-DDR4-Bandbreite und des fehlenden KI-Beschleunigers. Sein echtes Highlight ist das doppelte 2.5GbE-Netzwerk, das ihn zu einem starken, stromsparenden Hub macht. Für rund 199 € (Juli 2026, schwankend) ist er eine günstige Wahl, keine LLM-Maschine.',
        bullets: [
          'CPU: Intel N150 — 4 Kerne / 4 Threads, Intel-UHD-Grafik (24 EU), kein NPU',
          'RAM: 16 GB DDR4-3200, Single-Channel, ein SO-DIMM-Slot (max. 16 GB)',
          'Lokales LLM (aus Specs geschätzt): 1B–3B 4-Bit ist der Sweet Spot; 7B lädt, ist aber langsam',
          'Highlight: zwei 2.5GbE (Intel i226-V) und zwei HDMI — ein starker stromsparender Hub',
          'Preis rund 199 € (Juli 2026, schwankend) — günstige Home-Assistant-Box',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
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
      { type: 'one-sentence', content: 'Der Beelink EQ14 ist ein günstiger Intel-N150-Mini-PC, der Home Assistant und ein kleines 1B–3B-Modell betreibt, mit doppeltem 2.5GbE-Netzwerk als herausragendem Merkmal.' },
      { type: 'plain-terms', content: 'Ein Mini-PC ist ein kleiner, stromsparender Dauerläufer-Computer. Der EQ14 ist ein günstiges Exemplar: Er betreibt mühelos einen Smart-Home-Hub und ein kleines KI-Modell, aber kein großes, schnelles Chat-Modell. Sein bester Trick sind zwei schnelle Netzwerkanschlüsse, die ihn auch zu einer aufgeräumten Heimnetz-Box machen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Der EQ14 betreibt Home Assistant und ein kleines 1B–3B-Modell gut für rund 199 €',
          'Intel N150: 4 Kerne, Intel-UHD-Grafik, 16 GB Single-Channel-DDR4 (max. 16 GB), kein NPU',
          'Ein 7B-Modell lädt, läuft aber langsam — das ist ein Hub, keine KI-Box',
          'Highlight: zwei 2.5GbE (Intel i226-V) machen ihn zu einem starken stromsparenden Heimnetz-Hub',
          'Für einen flotten 7B-Assistenten greifen Sie zu einem [Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review)',
          'Made in China — kalkulieren Sie die US-/EU-Importmaßnahmen 2026 in den Endpreis ein (siehe Zollhinweis)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit — Für wen geeignet',
        content:
          '**Kaufen Sie den Beelink EQ14, wenn Sie eine günstige, effiziente Box für Home Assistant plus ein kleines lokales Modell wollen und sein doppeltes 2.5GbE-Netzwerk schätzen.** Er ist ein guter Einstieg in ein lokal-first Smart Home für rund 199 €. Kaufen Sie ihn nicht in der Erwartung eines schnellen lokalen Assistenten — der Intel N150 mit Single-Channel-DDR4 ist für ein 1B–3B-Modell in Ordnung, aber bei Größerem langsam.\n\nSein stärkster Anwendungsfall ist ein **immer laufender Home-Assistant-Hub mit echtem Netzwerk** — zwei 2.5GbE-Ports lassen ihn als router-nahe Box arbeiten oder Netzwerk-Add-ons ausführen, während er den Hub hostet.',
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Spezifikationen',
        content:
          '**Alle Angaben unten wurden im Juli 2026 mit Beelink und unabhängigen Test-Quellen abgeglichen.** Beachten Sie: Der RAM ist DDR4, Single-Channel und auf 16 GB begrenzt — eine echte Einschränkung für KI-Aufgaben. Die Speichergröße variiert je nach SKU.',
        columns: ['Merkmal', 'Beelink EQ14 (N150)'],
        rows: [
          { Merkmal: 'CPU', 'Beelink EQ14 (N150)': 'Intel N150 (Twin Lake / Alder Lake-N)' },
          { Merkmal: 'Kerne / Threads', 'Beelink EQ14 (N150)': '4 Kerne / 4 Threads, bis zu 3,6 GHz' },
          { Merkmal: 'iGPU', 'Beelink EQ14 (N150)': 'Intel UHD Graphics, 24 EU' },
          { Merkmal: 'NPU', 'Beelink EQ14 (N150)': 'Keiner' },
          { Merkmal: 'RAM', 'Beelink EQ14 (N150)': '16 GB DDR4-3200, Single-Channel, ein SO-DIMM (max. 16 GB)' },
          { Merkmal: 'Speicher', 'Beelink EQ14 (N150)': '500 GB–1 TB je SKU; 2× M.2 2280 PCIe 3.0; bis zu 8 TB' },
          { Merkmal: 'Anschlüsse', 'Beelink EQ14 (N150)': 'USB-A 10 Gbit/s ×3+, USB-A 2.0, USB-C 10 Gbit/s (nur Daten), 2× HDMI 2.0, 3,5 mm' },
          { Merkmal: 'Netzwerk', 'Beelink EQ14 (N150)': '2× 2.5GbE (Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { Merkmal: 'TDP', 'Beelink EQ14 (N150)': '~6 W Basis; konfiguriert auf ~20–25 W; ~6 W Leerlauf an der Steckdose' },
          { Merkmal: 'Abmessungen', 'Beelink EQ14 (N150)': '126 × 126 × 39 mm, ~432–490 g' },
          { Merkmal: 'Betriebssystem', 'Beelink EQ14 (N150)': 'Windows 11 Home (Linux/Home Assistant OS unterstützt)' },
          { Merkmal: 'Preis (Richtwert)', 'Beelink EQ14 (N150)': '~199 € (Juli 2026 — schwankend, aktuellen Preis prüfen)' },
        ],
        items: [
          'Der USB-C-Port ist reiner Datenport — kein DisplayPort-Alt-Ausgang und kein Power Delivery.',
          'Zwei Displays laufen über die zwei HDMI-2.0-Ports mit bis zu 4K/60.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Lokale KI & LLM-Leistung',
        content:
          '**Ein 1B–3B-Modell mit 4-Bit ist der realistische Sweet Spot beim EQ14; ein 7B-Modell lädt zwar in 16 GB, generiert aber langsam wegen der Single-Channel-DDR4-Bandbreite und der vier Effizienzkerne — alle Werte sind aus der geprüften Hardware geschätzt, kein gemessener Benchmark.** Die Intel-UHD-Grafik bietet hier kaum Beschleunigung für LLMs, erwarten Sie also CPU-gebundene Geschwindigkeiten.',
        items: [
          'Gut für leichte lokale Assistenten, Klassifikation und Zusammenfassung auf kleinen Modellen.',
          'Nicht geeignet für einen interaktiven 7B-Chat-Assistenten — Bandbreite und Kernzahl sind die Grenzen.',
          'Es gibt kein NPU, also lagert nichts das Modell aus; die CPU erledigt die Arbeit.',
          'Für Kamera-Objekterkennung koppeln Sie Home Assistant mit einer leistungsfähigeren Box — siehe [lokale KI-Überwachungskameras](/de/smart-home/local-ai-security-camera).',
          'Siehe [Ollama installieren](/de/local-llms/how-to-install-ollama), um ein kleines Modell zu testen, und den [Hardware-Guide für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026) für den Kontext.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Vorteile & Nachteile',
        content: '**Der EQ14 ist eine günstige Hub-Box mit einem echten Highlight — seinem Netzwerk.** Ausgewogene Sicht unten.',
        items: [
          '**Vorteile**',
          'Sehr günstig — rund 199 € für einen fähigen Home-Assistant-Hub',
          'Zwei 2.5GbE (Intel i226-V) — selten in dieser Preisklasse und wirklich nützlich',
          'Geringer Verbrauch: rund 6 W Leerlauf, günstig im 24/7-Betrieb',
          'Zwei M.2-Slots und zwei HDMI für eine kleine, flexible Box',
          'RAM ist ein austauschbares SO-DIMM (aber auf 16 GB begrenzt)',
          '**Nachteile**',
          '16 GB Single-Channel-DDR4-Obergrenze — die Hauptgrenze für KI',
          'Kein NPU und schwache iGPU-Beschleunigung — langsam jenseits eines 3B-Modells',
          'USB-C ist nur Daten (kein Videoausgang, kein Power Delivery)',
          'Nicht die richtige Box, wenn ein flotter 7B-Assistent das Ziel ist',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Käuferkontext: Zölle & Verfügbarkeit (2026)',
        content:
          '**Der EQ14 wird in China gefertigt, sein Endpreis spiegelt also die Handelsmaßnahmen 2026 wider — ein Grund, jeden Preis als beweglich zu betrachten.** Die Fakten unten sind Käuferkontext, keine redaktionelle Meinung.',
        items: [
          'USA: Die Section-301-Zölle auf chinesische Elektronik bleiben 2026 in Kraft; die separaten „IEEPA“-Zölle von 2025 wurden im Februar 2026 vom Supreme Court gekippt und durch einen befristeten, gedeckelten Section-122-Zoll ersetzt. Die zollfreie „De-minimis“-Ausnahme unter 800 $ für Direktimporte ist ebenfalls entfallen.',
          'EU (betrifft DE/FR): Es gibt keinen breiten EU-Zoll auf fertige Mini-PCs, aber ab Juli 2026 wurde die zollfreie 150-€-Grenze für geringwertige Direktpakete aus China gestrichen und eine kleine Bearbeitungsgebühr pro Paket eingeführt.',
          'Annahme (Makrotrend, kein Fakt pro Produkt): Umgeleitete chinesische Exportkapazität hat die Verfügbarkeit dieser Marken in EU und USA hoch gehalten, was wettbewerbsfähige Preise grob stützt.',
          'Nettoeffekt: Prüfen Sie vor dem Kauf den aktuellen Preis beim Händler — der Richtwert von ~199 € hier ist indikativ und auf Juli 2026 datiert.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Wo kaufen & aktueller Preis',
        content:
          '**Preise ändern sich von Woche zu Woche, prüfen Sie also den Live-Preis, statt einem festen Wert zu vertrauen.** Stand Juli 2026 liegt der 16-GB-EQ14 bei rund 199–219 €, Varianten mit mehr Speicher näher an 240 €.',
        items: [
          'Bestätigen Sie die LAN-Variante — der gängige N150-EQ14 kommt mit zwei 2.5GbE, was der Grund ist, ihn zu wählen.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zum Vergleich',
        content: '**Wenn der EQ14 zu begrenzt ist (oder Sie eine andere günstige Box wollen), ziehen Sie diese in Betracht.**',
        items: [
          '[GMKtec G3 Plus](/de/smart-home/gmktec-g3-plus-local-ai-review) — die andere günstige N150-Box; aufrüstbar auf 32 GB RAM, aber nur ein 2.5GbE-Port',
          '[Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review) — der Aufstieg: Ryzen 7 8845HS betreibt einen echten 7B-Assistenten für rund 650 €',
          '[Minisforum UM890 Pro](/de/smart-home/minisforum-um890-pro-local-ai-review) — Mittelklasse-Ryzen-9 mit zwei 2.5GbE und einem eGPU-Port',
          '[GEEKOM A9 Max](/de/smart-home/geekom-a9-max-local-ai-review) — Premium-Box mit Reserven bis 128 GB RAM',
          'Noch am Vergleichen? Starten Sie mit dem [Vergleich der besten Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann der Beelink EQ14 lokale LLMs betreiben?', a: 'Kleine ja. Ein 1B–3B-Modell mit 4-Bit ist der realistische Sweet Spot. Ein 7B-Modell lädt in 16 GB, generiert aber langsam wegen der Single-Channel-DDR4-Bandbreite und des Vierkern-N150. Das ist aus der geprüften Hardware geschätzt, kein fester Benchmark.' },
          { q: 'Wie groß darf ein Modell im RAM sein?', a: 'Mit 16 GB gesamt (geteilt mit dem Betriebssystem) ist ein 1B–3B-Modell bequem und ein 7B-4-Bit-Modell passt gerade so, läuft aber langsam. Die 16-GB-Grenze ist hart — die N150-Plattform und der eine SO-DIMM-Slot können nicht höher.' },
          { q: 'Ist der EQ14 gut für Home Assistant und Dauerbetrieb?', a: 'Ja. Er betreibt Home Assistant und Add-ons bequem und zieht rund 6 W im Leerlauf, ist also günstig im Dauerbetrieb. Seine zwei 2.5GbE-Ports machen ihn zu einem starken stromsparenden Hub und Netzwerk-Box.' },
          { q: 'Hat der EQ14 ein NPU für KI?', a: 'Nein. Der Intel N150 hat kein NPU oder KI-Beschleuniger, und die integrierte Grafik hilft bei LLMs kaum. Jedes KI-Modell läuft auf der CPU, weshalb nur kleine Modelle praktikabel sind.' },
          { q: 'Ist der RAM aufrüstbar?', a: 'Der RAM ist ein austauschbares DDR4-SO-DIMM, aber die Plattform ist bei 16 GB gedeckelt, es gibt also keinen sinnvollen Aufrüstpfad für größere Modelle. Wenn Sie mehr Speicher für KI brauchen, wählen Sie stattdessen eine Ryzen-Box.' },
          { q: 'Wie viel Strom verbraucht der EQ14?', a: 'Rund 6 W im Leerlauf und etwa 20–25 W unter Last, der Dauerbetrieb kostet also sehr wenig. Diese Effizienz ist ein Hauptgrund, eine N150-Box als Hub zu wählen.' },
          { q: 'EQ14 oder GMKtec G3 Plus?', a: 'Beide nutzen den Intel N150. Der EQ14 hat zwei 2.5GbE, was zu einem netzwerklastigen Hub passt; der G3 Plus hat ein einzelnes 2.5GbE, unterstützt aber bis zu 32 GB RAM, was bei größeren Modellen etwas hilft. Wählen Sie danach, ob Sie Netzwerk oder Speicherreserve schätzen.' },
          { q: 'Wo wird der Beelink EQ14 gefertigt, und beeinflusst das den Preis?', a: 'Er wird in China gefertigt. 2026 können US-Importmaßnahmen (Section-301-Zölle, das Ende der De-minimis-Ausnahme unter 800 $) und die EU-Streichung der 150-€-Kleinsendungsgrenze den Endpreis beeinflussen, prüfen Sie also den aktuellen Händlerpreis, statt sich auf eine feste Zahl zu verlassen.' },
          { q: 'Muss ich bei der Verwendung des Beelink EQ14 die DSGVO beachten?', a: 'Wenn Sie personenbezogene Daten verarbeiten, ja — aber ein lokal-first Aufbau kommt Ihnen entgegen. Weil der EQ14 Home Assistant und das lokale Modell vollständig auf dem Gerät ausführt, verbleiben Sprach-, Sensor- und Automatisierungsdaten in Ihrem Netzwerk und werden nicht an eine Cloud gesendet. Das erleichtert die Erfüllung der DSGVO-Grundsätze der Datenminimierung und Zweckbindung sowie einer Auftragsverarbeitung nach Art. 28 DSGVO, da kein externer Auftragsverarbeiter beteiligt ist. Orientieren Sie den Aufbau an den BSI-Grundschutz-Katalogen (sichere Konfiguration, Netzsegmentierung über die zwei 2.5GbE-Ports, regelmäßige Updates), um die technischen und organisatorischen Maßnahmen sauber zu dokumentieren.' },
          { q: 'Ist der Beelink EQ14 für den deutschen Mittelstand geeignet?', a: 'Für leichte Aufgaben ja. Als stromsparender Dauerläufer eignet sich der EQ14 im Mittelstand als lokaler Home-Assistant- bzw. Automatisierungs-Hub, als Netzwerk-Box (zwei 2.5GbE) oder für ein kleines 1B–3B-Modell zur Klassifikation und Zusammenfassung ohne Cloud. Für einen produktiven 7B-Assistenten mit mehreren Nutzern ist er zu schwach — dafür ist eine Ryzen-Box wie der Beelink SER8 die bessere Wahl. Achten Sie in beiden Fällen auf BSI-konforme Konfiguration (Härtung, Update-Prozess, Backups) und die getrennte DACH-Netzsegmentierung, um IT-Sicherheitsstandards einzuhalten.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) — der Vergleich, zu dem dieser Test gehört',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) — Pi vs. Mini-PC vs. NAS',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) — was die Box tatsächlich ausführt',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) — ein kleines Modell auf dem EQ14 testen',
          '[Erste Schritte mit Home Assistant](/de/smart-home/home-assistant-getting-started) — den Hub einrichten',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Beelink EQ14 Test (2026): Home Assistant für kleines Geld',
      reviewBody:
        'Der Beelink EQ14 ist ein günstiger Intel-N150-Mini-PC mit 16 GB DDR4 und zwei 2.5GbE, der Home Assistant und ein kleines 1B–3B-Modell für rund 199 € (Juli 2026) betreibt. Er ist eine Hub- und Netzwerk-Box, keine LLM-Maschine.',
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
      url: 'https://www.promptquorum.com/de/smart-home/beelink-eq14-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink EQ14',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'Günstiger Mini-PC mit Intel N150, 16 GB DDR4 und zwei 2.5GbE, für Home Assistant und ein kleines lokales Modell.',
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
    title: 'Test du Beelink EQ14 (2026) : Home Assistant à petit prix',
    seoTitle: 'Test Beelink EQ14 2026 — box Home Assistant économique',
    intro:
      'Le Beelink EQ14 (Intel N150, 16 Go DDR4, deux ports 2.5GbE) est un mini-PC économique pour une maison connectée locale. À environ 199 € (juillet 2026, prix variable), il fait tourner Home Assistant et un petit modèle local, mais c\'est une box hub-et-réseau, pas une machine d\'IA. Ce test vérifie ses caractéristiques, fixe des attentes honnêtes sur la vitesse des LLM locaux et explique quand le choisir plutôt qu\'une box Ryzen comme le Beelink SER8.',
    metaDescription:
      'Test Beelink EQ14 2026 : Intel N150, 16 Go DDR4, deux 2.5GbE, ~199 €. Excellente box Home Assistant économique pour un petit modèle local — limites honnêtes sur la vitesse LLM expliquées.',
    twitterDescription:
      'Beelink EQ14 (2026) : Intel N150, 16 Go DDR4, deux 2.5GbE, ~199 €. Une box Home Assistant économique — fait tourner un modèle 1B–3B, pas un assistant 7B. Voici sa place.',
    readTime: '6 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Acheteurs au budget serré utilisant Home Assistant et un petit modèle local',
    primaryTerm: 'test Beelink EQ14',
    targetKeywords: [
      'test beelink eq14',
      'beelink eq14 home assistant',
      'beelink eq14 ia locale',
      'mini pc intel n150 home assistant',
      'beelink eq14 llm local',
    ],
    leadAnswerBlock:
      '**Le Beelink EQ14 (Intel N150, 16 Go DDR4, deux 2.5GbE) est un mini-PC économique qui fait bien tourner Home Assistant et un petit modèle 1B–3B pour environ 199 € (juillet 2026, variable).** Achetez-le comme une box hub-et-réseau efficace ; si vous voulez un assistant 7B réactif, passez plutôt à une box Ryzen comme le Beelink SER8.',
    quickAnswerTop: {
      fr: {
        question: 'Le Beelink EQ14 est-il bon pour Home Assistant et l\'IA locale ?',
        answer:
          'Oui pour Home Assistant, avec des limites pour l\'IA. L\'Intel N150 (4 cœurs), le GPU Intel UHD et 16 Go de DDR4 mono-canal font tourner Home Assistant, les modules et un petit modèle 1B–3B confortablement. Un modèle 7B se charge mais reste lent, à cause de la bande passante DDR4 mono-canal et de l\'absence d\'accélérateur d\'IA. Son vrai atout est le double réseau 2.5GbE, qui en fait un hub basse consommation solide. À environ 199 € (juillet 2026, variable), c\'est un choix économique, pas une machine à LLM.',
        bullets: [
          'CPU : Intel N150 — 4 cœurs / 4 threads, GPU Intel UHD (24 EU), pas de NPU',
          'RAM : 16 Go DDR4-3200, mono-canal, un seul slot SO-DIMM (16 Go max)',
          'LLM local (estimé d\'après les specs) : 1B–3B 4-bit est l\'idéal ; le 7B se charge mais reste lent',
          'Atout : deux 2.5GbE (Intel i226-V) et deux HDMI — un hub basse consommation solide',
          'Prix ~199 € (juillet 2026, variable) — box Home Assistant économique',
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
      { label: 'Où l\'acheter', anchor: 'where-to-buy' },
      { label: 'Alternatives', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Le Beelink EQ14 est un mini-PC Intel N150 économique qui fait tourner Home Assistant et un petit modèle 1B–3B, avec le double réseau 2.5GbE comme atout majeur.' },
      { type: 'plain-terms', content: 'Un mini-PC est un petit ordinateur basse consommation qui reste allumé en permanence. L\'EQ14 est un modèle bon marché : il fait facilement tourner un hub domotique et un petit modèle d\'IA, mais pas un gros modèle de conversation rapide. Son meilleur atout, ce sont deux ports réseau rapides, qui en font aussi une box réseau domestique bien pensée.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'L\'essentiel',
        isTldr: true,
        items: [
          'L\'EQ14 fait bien tourner Home Assistant et un petit modèle 1B–3B pour environ 199 €',
          'Intel N150 : 4 cœurs, GPU Intel UHD, 16 Go de DDR4 mono-canal (16 Go max), pas de NPU',
          'Un modèle 7B se charge mais reste lent — c\'est un hub, pas une box d\'IA',
          'Atout : deux 2.5GbE (Intel i226-V) en font un hub réseau domestique basse consommation solide',
          'Pour un assistant 7B réactif, passez à un [Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review)',
          'Fabriqué en Chine — intégrez les mesures d\'importation US/UE de 2026 dans le coût final (voir la note douanière)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — À qui il s\'adresse',
        content:
          '**Achetez le Beelink EQ14 si vous voulez une box économique et efficace pour faire tourner Home Assistant et un petit modèle local, et que vous appréciez son double réseau 2.5GbE.** C\'est une bonne porte d\'entrée vers une maison connectée locale pour environ 199 €. Ne l\'achetez pas en attendant un assistant local rapide — l\'Intel N150 en DDR4 mono-canal convient à un modèle 1B–3B mais reste lent au-delà.\n\nSon usage le plus fort est un **hub Home Assistant toujours allumé avec un vrai réseau** — deux ports 2.5GbE lui permettent de servir de box proche du routeur ou de faire tourner des modules réseau tout en hébergeant le hub.',
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Caractéristiques',
        content:
          '**Toutes les caractéristiques ci-dessous ont été vérifiées auprès de Beelink et de sources de test indépendantes en juillet 2026.** Notez que la RAM est en DDR4, mono-canal, et plafonnée à 16 Go — une vraie contrainte pour l\'IA. La capacité de stockage varie selon le SKU.',
        columns: ['Caractéristique', 'Beelink EQ14 (N150)'],
        rows: [
          { 'Caractéristique': 'CPU', 'Beelink EQ14 (N150)': 'Intel N150 (Twin Lake / Alder Lake-N)' },
          { 'Caractéristique': 'Cœurs / threads', 'Beelink EQ14 (N150)': '4 cœurs / 4 threads, jusqu\'à 3.6 GHz' },
          { 'Caractéristique': 'iGPU', 'Beelink EQ14 (N150)': 'Intel UHD Graphics, 24 EU' },
          { 'Caractéristique': 'NPU', 'Beelink EQ14 (N150)': 'Aucun' },
          { 'Caractéristique': 'RAM', 'Beelink EQ14 (N150)': '16 Go DDR4-3200, mono-canal, un seul SO-DIMM (16 Go max)' },
          { 'Caractéristique': 'Stockage', 'Beelink EQ14 (N150)': '500 Go–1 To selon le SKU ; 2× M.2 2280 PCIe 3.0 ; jusqu\'à 8 To' },
          { 'Caractéristique': 'Connectique', 'Beelink EQ14 (N150)': 'USB-A 10 Gb/s ×3+, USB-A 2.0, USB-C 10 Gb/s (données seulement), 2× HDMI 2.0, 3.5 mm' },
          { 'Caractéristique': 'Réseau', 'Beelink EQ14 (N150)': '2× 2.5GbE (Intel i226-V), Wi-Fi 6, Bluetooth 5.2' },
          { 'Caractéristique': 'TDP', 'Beelink EQ14 (N150)': '~6 W de base ; configuré à ~20–25 W ; ~6 W au repos à la prise' },
          { 'Caractéristique': 'Dimensions', 'Beelink EQ14 (N150)': '126 × 126 × 39 mm, ~432–490 g' },
          { 'Caractéristique': 'OS', 'Beelink EQ14 (N150)': 'Windows 11 Home (Linux/Home Assistant OS pris en charge)' },
          { 'Caractéristique': 'Prix (indicatif)', 'Beelink EQ14 (N150)': '~199 € (juillet 2026 — variable, vérifier le prix actuel)' },
        ],
        items: [
          'Le port USB-C est réservé aux données — pas de sortie DisplayPort-Alt ni de Power Delivery.',
          'Le double affichage passe par les deux ports HDMI 2.0 jusqu\'à 4K/60.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'IA locale & performances LLM',
        content:
          '**Un modèle 1B–3B en 4-bit est le point idéal réaliste sur l\'EQ14 ; un modèle 7B se charge dans 16 Go mais génère lentement à cause de la bande passante DDR4 mono-canal et des quatre cœurs à haute efficacité — tous les chiffres sont estimés d\'après le matériel vérifié, pas un benchmark mesuré.** Le GPU Intel UHD offre peu d\'accélération pour les LLM ici : attendez-vous à des vitesses limitées par le CPU.',
        items: [
          'Bon pour des assistants locaux légers, la classification et le résumé sur de petits modèles.',
          'Inadapté à un assistant conversationnel 7B interactif — la bande passante et le nombre de cœurs sont les limites.',
          'Il n\'y a pas de NPU, donc rien ne décharge le modèle ; le CPU fait tout le travail.',
          'Pour la détection d\'objets par caméra, associez Home Assistant à une box plus capable — voir [caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera).',
          'Voir [comment installer Ollama](/fr/local-llms/how-to-install-ollama) pour tester un petit modèle, et le [guide matériel pour LLM locaux](/fr/local-llms/local-llm-hardware-guide-2026) pour le contexte.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Avantages & inconvénients',
        content: '**L\'EQ14 est une box économique avec un vrai atout — son réseau.** Vue équilibrée ci-dessous.',
        items: [
          '**Avantages**',
          'Très abordable — environ 199 € pour un hub Home Assistant capable',
          'Deux 2.5GbE (Intel i226-V) — rare à ce prix et vraiment utile',
          'Faible consommation : environ 6 W au repos, économique en 24/7',
          'Deux slots M.2 et deux HDMI pour une box petite et flexible',
          'La RAM est un SO-DIMM remplaçable (mais plafonné à 16 Go)',
          '**Inconvénients**',
          'Plafond de 16 Go DDR4 mono-canal — la principale limite pour l\'IA',
          'Pas de NPU et faible accélération iGPU — lent au-delà d\'un modèle 3B',
          'USB-C réservé aux données (pas de sortie vidéo, pas de Power Delivery)',
          'Pas la bonne box si l\'objectif est un assistant 7B réactif',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Contexte acheteur : droits de douane & disponibilité (2026)',
        content:
          '**L\'EQ14 est fabriqué en Chine, son prix final reflète donc les mesures commerciales de 2026 — une raison de considérer tout prix comme mouvant.** Les faits ci-dessous sont du contexte acheteur, pas une opinion éditoriale.',
        items: [
          'USA : les droits de douane Section 301 sur l\'électronique chinoise restent en vigueur en 2026 ; les droits « IEEPA » distincts de 2025 ont été invalidés par la Cour suprême en février 2026 et remplacés par un droit temporaire et plafonné au titre de la Section 122. L\'exemption « de minimis » sans droits sous 800 $ pour les importations directes a également pris fin.',
          'UE (concerne DE/FR) : il n\'existe pas de droit de douane UE général sur les mini-PC finis, mais depuis juillet 2026 le seuil sans droits de 150 € sur les petits colis directs de Chine a été supprimé et de petits frais de traitement par colis ajoutés.',
          'Hypothèse (tendance macro, pas un fait par produit) : la capacité d\'exportation chinoise réorientée a maintenu une forte disponibilité de ces marques en UE et aux US, ce qui soutient globalement des prix compétitifs.',
          'Effet net : vérifiez le prix actuel chez le revendeur avant d\'acheter — le chiffre de ~199 € ici est indicatif et daté de juillet 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Où l\'acheter & prix actuel',
        content:
          '**Les prix bougent d\'une semaine à l\'autre, vérifiez donc le prix en direct plutôt que de vous fier à un chiffre fixe.** En juillet 2026, l\'EQ14 16 Go se situe autour de 199–219 €, les versions à stockage supérieur plus près de 240 €.',
        items: [
          'Confirmez la variante LAN — l\'EQ14 N150 grand public est livré avec deux 2.5GbE, ce qui est la raison de le choisir.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — Beelink EQ14', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à considérer',
        content: '**Si l\'EQ14 est trop limité (ou si vous voulez une autre box économique), envisagez celles-ci.**',
        items: [
          '[GMKtec G3 Plus](/fr/smart-home/gmktec-g3-plus-local-ai-review) — l\'autre box N150 économique ; évolutive jusqu\'à 32 Go de RAM mais un seul port 2.5GbE',
          '[Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) — le cran au-dessus : le Ryzen 7 8845HS fait tourner un vrai assistant 7B pour environ 650 €',
          '[Minisforum UM890 Pro](/fr/smart-home/minisforum-um890-pro-local-ai-review) — Ryzen 9 milieu de gamme avec deux 2.5GbE et un port eGPU',
          '[GEEKOM A9 Max](/fr/smart-home/geekom-a9-max-local-ai-review) — box premium avec une marge jusqu\'à 128 Go de RAM',
          'Encore en comparaison ? Partez du [comparatif des meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Le Beelink EQ14 peut-il faire tourner des LLM locaux ?', a: 'Les petits, oui. Un modèle 1B–3B en 4-bit est le point idéal réaliste. Un modèle 7B se charge dans 16 Go mais génère lentement, à cause de la bande passante DDR4 mono-canal et du N150 à quatre cœurs. C\'est estimé d\'après son matériel vérifié, pas un benchmark fixe.' },
          { q: 'Quelle taille de modèle tient dans sa RAM ?', a: 'Avec 16 Go au total (partagés avec le système d\'exploitation), un modèle 1B–3B est confortable et un 7B en 4-bit tient tout juste mais reste lent. Le plafond de 16 Go est une limite dure — la plateforme N150 et l\'unique slot SO-DIMM ne peuvent pas aller plus haut.' },
          { q: 'L\'EQ14 est-il bon pour Home Assistant et un usage permanent ?', a: 'Oui. Il fait tourner Home Assistant et les modules confortablement et consomme environ 6 W au repos, il est donc économique à laisser allumé. Ses deux ports 2.5GbE en font un hub et une box réseau basse consommation solides.' },
          { q: 'L\'EQ14 a-t-il un NPU pour l\'IA ?', a: 'Non. L\'Intel N150 n\'a ni NPU ni accélérateur d\'IA, et le GPU intégré aide peu pour les LLM. Tout modèle d\'IA tourne sur le CPU, c\'est pourquoi seuls les petits modèles sont pratiques.' },
          { q: 'La RAM est-elle évolutive ?', a: 'La RAM est un SO-DIMM DDR4 remplaçable, mais la plateforme plafonne à 16 Go, il n\'y a donc pas de vraie évolution possible pour des modèles plus grands. Si vous avez besoin de plus de mémoire pour l\'IA, choisissez plutôt une box Ryzen.' },
          { q: 'Combien consomme l\'EQ14 ?', a: 'Environ 6 W au repos et à peu près 20–25 W en charge, le faire tourner en continu coûte donc très peu. Cette efficacité est une raison clé de choisir une box N150 comme hub.' },
          { q: 'EQ14 ou GMKtec G3 Plus ?', a: 'Les deux utilisent l\'Intel N150. L\'EQ14 a deux 2.5GbE, ce qui convient à un hub orienté réseau ; le G3 Plus a un seul 2.5GbE mais prend en charge jusqu\'à 32 Go de RAM, ce qui aide un peu pour les modèles plus grands. Choisissez selon que vous privilégiez le réseau ou la marge mémoire.' },
          { q: 'Où le Beelink EQ14 est-il fabriqué, et cela affecte-t-il le prix ?', a: 'Il est fabriqué en Chine. En 2026, les mesures d\'importation US (droits Section 301, fin de l\'exemption de minimis sous 800 $) et la suppression par l\'UE de l\'exemption des petits colis sous 150 € peuvent affecter le coût final, vérifiez donc le prix actuel chez le revendeur plutôt que de vous fier à un chiffre fixe.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — le comparatif auquel ce test appartient',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — Pi vs mini-PC vs NAS',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la box exécute réellement',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — tester un petit modèle sur l\'EQ14',
          '[Bien démarrer avec Home Assistant](/fr/smart-home/home-assistant-getting-started) — configurer le hub',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Test du Beelink EQ14 (2026) : Home Assistant à petit prix',
      reviewBody:
        'Le Beelink EQ14 est un mini-PC Intel N150 économique avec 16 Go DDR4 et deux 2.5GbE qui fait tourner Home Assistant et un petit modèle 1B–3B pour environ 199 € (juillet 2026). C\'est une box hub-et-réseau, pas une machine à LLM.',
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
      url: 'https://www.promptquorum.com/fr/smart-home/beelink-eq14-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '3.5', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'Beelink EQ14',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'Beelink' },
        description: 'Mini-PC économique avec Intel N150, 16 Go DDR4 et deux 2.5GbE, pour Home Assistant et un petit modèle local.',
      },
    },
  },
}
