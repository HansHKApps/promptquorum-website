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
}
