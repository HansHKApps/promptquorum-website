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
    title: 'GEEKOM A9 Max Review (2026): Local AI & Home Server',
    seoTitle: 'GEEKOM A9 Max Review 2026 — Local AI & Home Server',
    intro:
      'The GEEKOM A9 Max is a premium mini PC built on the AMD Ryzen AI 9 HX 370 (12 cores, Radeon 890M, up to 128 GB DDR5). For a local-AI smart home it is the headroom pick: it runs Home Assistant, Frigate, and a 7B–13B model on Ollama with room to spare, but at roughly $1,099–1,299 (July 2026, price volatile) it costs far more than a Beelink SER8 that covers most of the same ground. This review verifies its specs, sets honest expectations for local-LLM speed, and says who should buy it.',
    metaDescription:
      'GEEKOM A9 Max review 2026: Ryzen AI 9 HX 370, Radeon 890M, up to 128 GB DDR5. Runs Home Assistant + a 7B–13B local LLM — but it is a ~$1,100 headroom pick, not a budget box.',
    twitterDescription:
      'GEEKOM A9 Max (2026): Ryzen AI 9 HX 370, 128 GB DDR5 ceiling, Wi-Fi 7. A premium Home Assistant + local-AI box — the NPU does not speed up LLMs; RAM and the iGPU do.',
    readTime: '7 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers deciding whether the GEEKOM A9 Max is worth it for a local-AI home server',
    primaryTerm: 'GEEKOM A9 Max review',
    targetKeywords: [
      'geekom a9 max review',
      'geekom a9 max local ai',
      'geekom a9 max home assistant',
      'geekom a9 max local llm',
      'ryzen ai 9 hx 370 mini pc',
    ],
    leadAnswerBlock:
      '**The GEEKOM A9 Max (Ryzen AI 9 HX 370, Radeon 890M, 32 GB DDR5 as tested, up to 128 GB) is the headroom choice for a local-AI smart home — it runs Home Assistant, Frigate, and a 7B–13B model on Ollama comfortably.** At about $1,099–1,299 (July 2026, volatile) it is roughly double the price of a Beelink SER8, so buy it for the 128 GB RAM ceiling, Wi-Fi 7, and vision headroom — not to save money.',
    quickAnswerTop: {
      en: {
        question: 'Is the GEEKOM A9 Max good for local AI and Home Assistant?',
        answer:
          'Yes, but it is a premium pick. The Ryzen AI 9 HX 370 (12 cores/24 threads), Radeon 890M iGPU, and up to 128 GB of DDR5 run Home Assistant, Ollama, Whisper, and Frigate on one box with large headroom — a 7B–8B model is comfortable and 13B–14B (4-bit) fits with room for context. Its 50-TOPS NPU helps vision tasks like Frigate but does not accelerate local LLMs, which run on the CPU and iGPU. At roughly $1,099–1,299 (July 2026, volatile) it costs about double a Beelink SER8, so it is a headroom-and-future-proofing buy, not a value one.',
        bullets: [
          'CPU: Ryzen AI 9 HX 370 — 12 cores / 24 threads, Radeon 890M (16 CU, RDNA 3.5)',
          'RAM: 32 GB DDR5-5600 as tested, two SO-DIMM slots, up to 128 GB (user-replaceable)',
          'Local LLM (estimated from specs): 7B–8B comfortable, 13B–14B 4-bit fits; 64–128 GB opens 30B–70B (slow, bandwidth-limited)',
          'NPU (50 TOPS) helps Frigate vision, not LLM speed; the iGPU and RAM bandwidth set LLM latency',
          'Price ~$1,099–1,299 (July 2026, volatile) — a Beelink SER8 covers most needs for ~$650',
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
      { type: 'one-sentence', content: 'The GEEKOM A9 Max is a premium Ryzen AI 9 HX 370 mini PC that runs Home Assistant plus a 7B–13B local LLM with a 128 GB RAM ceiling for headroom.' },
      { type: 'plain-terms', content: 'A mini PC is a small, quiet computer you can leave on all day. The A9 Max is a high-end one: fast processor, strong built-in graphics, and space for a lot of memory. That memory ceiling is why it can run bigger AI models than cheaper boxes — but it also costs a lot more, and its dedicated AI chip (the NPU) helps camera detection, not the chat model.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'The A9 Max runs Home Assistant, Frigate, Whisper, and a 7B–13B local LLM on one box with headroom',
          'Ryzen AI 9 HX 370: 12 cores/24 threads, Radeon 890M iGPU, up to 128 GB DDR5 (two user-replaceable SO-DIMMs)',
          'Local-LLM speed comes from the iGPU and RAM bandwidth — the 50-TOPS NPU accelerates vision, not chat models',
          'At ~$1,099–1,299 (July 2026, volatile) it is roughly double a [Beelink SER8](/smart-home/beelink-ser8-local-ai-review)',
          'Buy it for the 128 GB ceiling, Wi-Fi 7, and vision headroom; otherwise the SER8 is better value',
          'Made in China — factor 2026 US/EU import measures into landed cost (see trade note)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — Who Should Buy It',
        content:
          '**Buy the GEEKOM A9 Max if you want a single mini PC that runs a local-AI smart home with years of headroom and you accept a premium price.** Its 12-core Ryzen AI 9 HX 370, Radeon 890M iGPU, and 128 GB RAM ceiling make it the most future-proof box in this set. If your goal is the cheapest capable machine, stop here and read the SER8 review — the A9 Max is overkill for a hub plus a 7B model.\n\nIts single strongest use case is an **always-on home server that runs Home Assistant, Frigate, and a mid-size local LLM at once** without you thinking about RAM. The Wi-Fi 7 radio, dual 2.5GbE, and two USB4 ports also make it a capable general workstation between smart-home duties.',
        affiliateLinks: [
          { label: 'Check current price — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Specifications',
        content:
          '**All specs below were verified against GEEKOM and independent review sources in July 2026.** A separate "2026 Edition" SKU ships the Ryzen AI 9 HX 470 (86 TOPS total) at a higher price; the table reflects the mainstream HX 370 unit.',
        columns: ['Spec', 'GEEKOM A9 Max (HX 370)'],
        rows: [
          { Spec: 'CPU', 'GEEKOM A9 Max (HX 370)': 'AMD Ryzen AI 9 HX 370 (Zen 5, 4 nm)' },
          { Spec: 'Cores / threads', 'GEEKOM A9 Max (HX 370)': '12 cores / 24 threads, up to 5.1 GHz' },
          { Spec: 'iGPU', 'GEEKOM A9 Max (HX 370)': 'AMD Radeon 890M — 16 CU, RDNA 3.5' },
          { Spec: 'NPU', 'GEEKOM A9 Max (HX 370)': 'XDNA 2, 50 TOPS (80 TOPS platform total)' },
          { Spec: 'RAM', 'GEEKOM A9 Max (HX 370)': '32 GB DDR5-5600 as tested; 2 SO-DIMM slots; up to 128 GB (user-replaceable)' },
          { Spec: 'Storage', 'GEEKOM A9 Max (HX 370)': '1–2 TB NVMe; 2× M.2 PCIe 4.0; up to 8 TB' },
          { Spec: 'Ports', 'GEEKOM A9 Max (HX 370)': '2× USB4 (40 Gbps), 5× USB-A 10 Gbps, 1× USB 2.0, 2× HDMI 2.1, SD reader, 3.5 mm' },
          { Spec: 'Networking', 'GEEKOM A9 Max (HX 370)': '2× 2.5GbE, Wi-Fi 7, Bluetooth 5.4' },
          { Spec: 'TDP', 'GEEKOM A9 Max (HX 370)': '~54 W sustained (PL1), 65 W boost (PL2)' },
          { Spec: 'Dimensions', 'GEEKOM A9 Max (HX 370)': '135 × 132 × 46 mm' },
          { Spec: 'OS', 'GEEKOM A9 Max (HX 370)': 'Windows 11 Pro (Linux/Proxmox install supported)' },
          { Spec: 'Price (indicative)', 'GEEKOM A9 Max (HX 370)': '~$1,099–1,299 (July 2026 — volatile, check current price)' },
        ],
        items: [
          'No discrete GPU: all AI inference runs on the CPU and Radeon 890M iGPU sharing system RAM.',
          'The two SO-DIMM slots are user-replaceable — you can start at 32 GB and move to 64 GB or 128 GB later.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Local AI & LLM Performance',
        content:
          '**With 32 GB of RAM the A9 Max comfortably runs a 7B–8B model on Ollama and fits a 13B–14B model at 4-bit with room for context — all figures estimated from the verified hardware, not a measured benchmark.** Moving to 64 GB opens 30B-class models, and the 128 GB ceiling lets a 70B model load at 4-bit, though large models are limited by memory bandwidth (dual-channel DDR5-5600, no dedicated VRAM) and are usable for experimentation rather than fast serving.',
        items: [
          'Ollama, LM Studio, and llama.cpp all run well; the Radeon 890M is used through Vulkan or ROCm backends.',
          'The 50-TOPS NPU accelerates vision workloads such as Frigate object detection — it does not speed up local LLMs, which the runtimes place on the CPU/iGPU.',
          'Home Assistant plus Ollama plus Whisper plus Frigate fit together on 32 GB; add RAM if you want a larger model alongside camera recording.',
          'Sustained ~54 W under load keeps always-on running cost modest; see [Ollama on Home Assistant](/smart-home/home-assistant-ollama-integration) to wire the model in.',
          'For VRAM and quantization depth across boxes, see the cross-cluster [local LLM hardware guide](/local-llms/local-llm-hardware-guide-2026).',
        ],
        affiliateLinks: [
          { label: 'Check current price — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Pros & Cons',
        content: '**The A9 Max trades price for headroom.** Balanced view below.',
        items: [
          '**Pros**',
          '128 GB RAM ceiling — the largest in this set, so it fits the biggest local models',
          '12-core Ryzen AI 9 HX 370 with Radeon 890M — strong iGPU for a mini PC',
          'User-replaceable SO-DIMM RAM and dual M.2 slots — you can upgrade later',
          'Wi-Fi 7, dual 2.5GbE, two USB4 ports — well connected for a home server',
          'Runs cool and quiet at ~54 W sustained for an always-on box',
          '**Cons**',
          'Expensive — roughly $1,099–1,299, about double a Beelink SER8',
          'The 50-TOPS NPU does not accelerate local LLMs (a common misconception)',
          'iGPU + shared-memory design is bandwidth-limited for very large models',
          'Overkill if you only run Home Assistant plus a 7B model',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Buyer Context: Tariffs & Availability (2026)',
        content:
          '**The A9 Max is manufactured in China, so its landed price reflects 2026 trade measures — a reason to treat any price as a moving target.** The facts below are buyer context, not editorial opinion.',
        items: [
          'US: Section 301 tariffs on Chinese electronics remain in force in 2026; the separate 2025 "IEEPA" tariffs were struck down by the Supreme Court in February 2026 and replaced by a temporary, capped Section 122 tariff. The sub-$800 duty-free "de minimis" exemption for direct imports has also ended.',
          'EU (affects DE/FR): there is no broad EU tariff on finished mini PCs, but from July 2026 the €150 duty-free threshold on low-value direct-from-China parcels was removed and a small per-parcel handling fee added.',
          'Assumption (macro trend, not a per-product fact): redirected Chinese export capacity has kept availability of these brands high in the EU and US, which broadly supports competitive pricing.',
          'Net effect: verify the current price at the retailer before buying — the figures in this review are indicative and date-stamped July 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Buy & Current Price',
        content:
          '**Prices move week to week, so check the live price rather than trusting a fixed figure.** As of July 2026 the mainstream HX 370 / 32 GB / 2 TB configuration sits around $1,099–1,299, with the "2026 Edition" HX 470 SKU higher.',
        items: [
          'Confirm the exact SKU (HX 370 vs HX 470, RAM and storage capacity) before ordering — pricing and specs differ.',
        ],
        affiliateLinks: [
          { label: 'Check current price — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Consider',
        content: '**If the A9 Max is more than you need, three cheaper boxes cover most of the same jobs.**',
        items: [
          '[Beelink SER8](/smart-home/beelink-ser8-local-ai-review) — the value pick: Ryzen 7 8845HS, 32 GB, ~$650, runs a 7B model comfortably',
          '[Minisforum UM890 Pro](/smart-home/minisforum-um890-pro-local-ai-review) — adds an OCuLink port for an external GPU if you want faster large-model inference later',
          '[Beelink EQ14](/smart-home/beelink-eq14-local-ai-review) — budget Intel N150 box for Home Assistant plus a tiny model',
          '[GMKtec G3 Plus](/smart-home/gmktec-g3-plus-local-ai-review) — another budget N150 option with upgradeable RAM',
          'Still comparing? Start from the [best mini PCs for Home Assistant + local AI roundup](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can the GEEKOM A9 Max run local LLMs?', a: 'Yes. With 32 GB of RAM it comfortably runs a 7B–8B model on Ollama and fits a 13B–14B model at 4-bit quantization with room for context. This is estimated from its verified hardware rather than a fixed benchmark, because speed depends on the model, quantization, and backend.' },
          { q: 'How big a model fits in its RAM?', a: 'At the 32 GB tested capacity, up to a 13B–14B model at 4-bit is realistic. Upgrading to 64 GB opens 30B-class models, and the 128 GB ceiling lets a 70B model load at 4-bit — though very large models run slowly because the iGPU shares system memory and has no dedicated VRAM.' },
          { q: 'Does the NPU make local LLMs faster?', a: 'No. The 50-TOPS NPU accelerates vision and some Windows AI features, but mainstream local-LLM runtimes such as Ollama and llama.cpp run the model on the CPU and Radeon 890M iGPU. Treat the NPU as a benefit for Frigate camera detection, not for chat-model speed.' },
          { q: 'Is the A9 Max good for Home Assistant and always-on use?', a: 'Yes. It runs Home Assistant, Ollama, Whisper, and Frigate together with headroom, and its ~54 W sustained draw keeps always-on running cost modest. Its dual 2.5GbE and Wi-Fi 7 also suit a wired home-server role.' },
          { q: 'Is the RAM upgradeable?', a: 'Yes. The A9 Max uses two standard DDR5 SO-DIMM slots that are user-replaceable, so you can start at 32 GB and move to 64 GB or 128 GB later. This is a genuine advantage over mini PCs with soldered memory.' },
          { q: 'How much power does it use?', a: 'It runs at roughly 54 W sustained under load and much less at idle, so leaving it on continuously is inexpensive. The exact figure varies with the model you run and the power profile you select in the BIOS.' },
          { q: 'Is the A9 Max worth it over a Beelink SER8?', a: 'Only if you want the extra headroom. The SER8 runs Home Assistant plus a 7B model for about half the price. The A9 Max is worth the premium if you need the 128 GB RAM ceiling, Wi-Fi 7, or vision headroom for the years ahead.' },
          { q: 'Where is the GEEKOM A9 Max made, and does that affect price?', a: 'It is manufactured in China. In 2026 US import measures (Section 301 tariffs, the end of the sub-$800 de minimis exemption) and the EU removal of the €150 low-value parcel exemption can affect landed cost, so check the current retailer price rather than relying on a fixed number.' },
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
          '[Local AI Security Cameras](/smart-home/local-ai-security-camera) — where the NPU and iGPU earn their keep',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'GEEKOM A9 Max Review (2026): Local AI & Home Server',
      reviewBody:
        'The GEEKOM A9 Max is a premium Ryzen AI 9 HX 370 mini PC that runs Home Assistant plus a 7B–13B local LLM with a 128 GB RAM ceiling. It is a headroom and future-proofing pick at roughly $1,099–1,299 (July 2026), about double a Beelink SER8.',
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
      url: 'https://www.promptquorum.com/smart-home/geekom-a9-max-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GEEKOM A9 Max',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GEEKOM' },
        description: 'Mini PC with AMD Ryzen AI 9 HX 370, Radeon 890M iGPU, up to 128 GB DDR5, for local AI and home-server use.',
      },
    },
  },
}
