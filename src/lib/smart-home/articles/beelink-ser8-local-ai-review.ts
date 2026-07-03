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
}
