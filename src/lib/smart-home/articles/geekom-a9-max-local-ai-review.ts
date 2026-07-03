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
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    next_refresh_due: '2027-01-03',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'GEEKOM A9 Max Test (2026): Lokale KI & Heimserver',
    seoTitle: 'GEEKOM A9 Max Test 2026 — Lokale KI & Heimserver',
    intro:
      'Der GEEKOM A9 Max ist ein Premium-Mini-PC auf Basis des AMD Ryzen AI 9 HX 370 (12 Kerne, Radeon 890M, bis zu 128 GB DDR5). Für ein Smart Home mit lokaler KI ist er die Wahl mit Reserven: Er betreibt Home Assistant, Frigate und ein 7B–13B-Modell auf Ollama mit reichlich Luft nach oben, kostet aber mit rund 999–1.199 € (Juli 2026, Preis schwankt) deutlich mehr als ein Beelink SER8, der die meisten dieser Aufgaben ebenfalls abdeckt. Dieser Test prüft die technischen Daten, benennt ehrliche Erwartungen an die lokale LLM-Geschwindigkeit und sagt, für wen sich das Gerät lohnt.',
    metaDescription:
      'GEEKOM A9 Max Test 2026: Ryzen AI 9 HX 370, Radeon 890M, bis zu 128 GB DDR5. Betreibt Home Assistant + ein 7B–13B-LLM lokal — aber als Gerät mit Reserven für rund 999–1.199 €, keine Budget-Box.',
    twitterDescription:
      'GEEKOM A9 Max (2026): Ryzen AI 9 HX 370, 128 GB DDR5 als Obergrenze, Wi-Fi 7. Eine Premium-Box für Home Assistant + lokale KI — die NPU beschleunigt keine LLMs; das tun RAM und iGPU.',
    readTime: '7 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die entscheiden, ob sich der GEEKOM A9 Max für einen Heimserver mit lokaler KI lohnt',
    primaryTerm: 'GEEKOM A9 Max Test',
    targetKeywords: [
      'geekom a9 max test',
      'geekom a9 max lokale ki',
      'geekom a9 max home assistant',
      'geekom a9 max lokales llm',
      'ryzen ai 9 hx 370 mini pc',
    ],
    leadAnswerBlock:
      '**Der GEEKOM A9 Max (Ryzen AI 9 HX 370, Radeon 890M, 32 GB DDR5 im Test, bis zu 128 GB) ist die Wahl mit Reserven für ein Smart Home mit lokaler KI — er betreibt Home Assistant, Frigate und ein 7B–13B-Modell auf Ollama souverän.** Mit rund 999–1.199 € (Juli 2026, schwankend) kostet er etwa doppelt so viel wie ein Beelink SER8. Kaufen Sie ihn also wegen der 128-GB-RAM-Obergrenze, Wi-Fi 7 und der Reserven für Bildverarbeitung — nicht, um Geld zu sparen.',
    quickAnswerTop: {
      de: {
        question: 'Ist der GEEKOM A9 Max gut für lokale KI und Home Assistant?',
        answer:
          'Ja, aber es ist eine Premium-Wahl. Der Ryzen AI 9 HX 370 (12 Kerne/24 Threads), die Radeon-890M-iGPU und bis zu 128 GB DDR5 betreiben Home Assistant, Ollama, Whisper und Frigate auf einem Gerät mit großen Reserven — ein 7B–8B-Modell läuft bequem, und ein 13B–14B-Modell (4-Bit) passt mit Platz für Kontext. Die 50-TOPS-NPU hilft bei Bildaufgaben wie Frigate, beschleunigt aber keine lokalen LLMs, die auf CPU und iGPU laufen. Mit rund 999–1.199 € (Juli 2026, schwankend) kostet er etwa doppelt so viel wie ein Beelink SER8 und ist damit ein Kauf für Reserven und Zukunftssicherheit, kein Preis-Leistungs-Tipp.',
        bullets: [
          'CPU: Ryzen AI 9 HX 370 — 12 Kerne / 24 Threads, Radeon 890M (16 CU, RDNA 3.5)',
          'RAM: 32 GB DDR5-5600 im Test, zwei SO-DIMM-Steckplätze, bis zu 128 GB (vom Nutzer austauschbar)',
          'Lokales LLM (aus den Daten geschätzt): 7B–8B bequem, 13B–14B in 4-Bit passt; 64–128 GB ermöglichen 30B–70B (langsam, bandbreitenbegrenzt)',
          'Die NPU (50 TOPS) hilft der Frigate-Bildverarbeitung, nicht der LLM-Geschwindigkeit; iGPU und RAM-Bandbreite bestimmen die LLM-Latenz',
          'Preis rund 999–1.199 € (Juli 2026, schwankend) — ein Beelink SER8 deckt die meisten Bedürfnisse für rund 600 € ab',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Technische Daten', anchor: 'specs' },
      { label: 'Lokale KI & LLM-Leistung', anchor: 'local-ai' },
      { label: 'Vorteile & Nachteile', anchor: 'pros-cons' },
      { label: 'Käuferkontext: Zölle (2026)', anchor: 'trade-note' },
      { label: 'Wo kaufen', anchor: 'where-to-buy' },
      { label: 'Alternativen', anchor: 'alternatives' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Der GEEKOM A9 Max ist ein Premium-Mini-PC mit Ryzen AI 9 HX 370, der Home Assistant plus ein 7B–13B-LLM lokal betreibt und mit 128 GB RAM-Obergrenze reichlich Reserven bietet.' },
      { type: 'plain-terms', content: 'Ein Mini-PC ist ein kleiner, leiser Computer, den Sie den ganzen Tag laufen lassen können. Der A9 Max ist ein hochwertiges Modell: schneller Prozessor, starke integrierte Grafik und Platz für viel Arbeitsspeicher. Diese Speicher-Obergrenze ist der Grund, warum er größere KI-Modelle ausführen kann als günstigere Boxen — er kostet aber auch deutlich mehr, und sein dedizierter KI-Chip (die NPU) hilft der Kameraerkennung, nicht dem Chat-Modell.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Der A9 Max betreibt Home Assistant, Frigate, Whisper und ein 7B–13B-LLM lokal auf einem Gerät mit Reserven',
          'Ryzen AI 9 HX 370: 12 Kerne/24 Threads, Radeon-890M-iGPU, bis zu 128 GB DDR5 (zwei vom Nutzer austauschbare SO-DIMMs)',
          'Die lokale LLM-Geschwindigkeit kommt von iGPU und RAM-Bandbreite — die 50-TOPS-NPU beschleunigt Bildverarbeitung, keine Chat-Modelle',
          'Mit rund 999–1.199 € (Juli 2026, schwankend) etwa doppelt so teuer wie ein [Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review)',
          'Kaufen Sie ihn wegen der 128-GB-Obergrenze, Wi-Fi 7 und Reserven für Bildverarbeitung; sonst ist der SER8 das bessere Preis-Leistungs-Verhältnis',
          'Hergestellt in China — beziehen Sie die US-/EU-Importmaßnahmen 2026 in die Endkosten ein (siehe Zollhinweis)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit — Für wen er geeignet ist',
        content:
          '**Kaufen Sie den GEEKOM A9 Max, wenn Sie einen einzelnen Mini-PC wollen, der ein Smart Home mit lokaler KI und jahrelangen Reserven betreibt, und Sie einen Premium-Preis akzeptieren.** Sein 12-Kern-Ryzen AI 9 HX 370, die Radeon-890M-iGPU und die 128-GB-RAM-Obergrenze machen ihn zur zukunftssichersten Box in diesem Feld. Wenn Ihr Ziel die günstigste leistungsfähige Maschine ist, hören Sie hier auf und lesen Sie den SER8-Test — der A9 Max ist für einen Hub plus 7B-Modell überdimensioniert.\n\nSein stärkster Anwendungsfall ist ein **stets laufender Heimserver, der Home Assistant, Frigate und ein mittelgroßes lokales LLM gleichzeitig betreibt**, ohne dass Sie an RAM denken müssen. Das Wi-Fi-7-Funkmodul, zwei 2.5GbE-Ports und zwei USB4-Anschlüsse machen ihn zwischen den Smart-Home-Aufgaben auch zu einer fähigen Allround-Workstation.',
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Technische Daten',
        content:
          '**Alle Daten unten wurden im Juli 2026 gegen GEEKOM und unabhängige Testquellen geprüft.** Eine separate „2026 Edition“-SKU liefert den Ryzen AI 9 HX 470 (86 TOPS gesamt) zu einem höheren Preis; die Tabelle zeigt die verbreitete HX-370-Variante.',
        columns: ['Merkmal', 'GEEKOM A9 Max (HX 370)'],
        rows: [
          { Merkmal: 'CPU', 'GEEKOM A9 Max (HX 370)': 'AMD Ryzen AI 9 HX 370 (Zen 5, 4 nm)' },
          { Merkmal: 'Kerne / Threads', 'GEEKOM A9 Max (HX 370)': '12 Kerne / 24 Threads, bis zu 5,1 GHz' },
          { Merkmal: 'iGPU', 'GEEKOM A9 Max (HX 370)': 'AMD Radeon 890M — 16 CU, RDNA 3.5' },
          { Merkmal: 'NPU', 'GEEKOM A9 Max (HX 370)': 'XDNA 2, 50 TOPS (80 TOPS Plattform gesamt)' },
          { Merkmal: 'RAM', 'GEEKOM A9 Max (HX 370)': '32 GB DDR5-5600 im Test; 2 SO-DIMM-Steckplätze; bis zu 128 GB (vom Nutzer austauschbar)' },
          { Merkmal: 'Speicher', 'GEEKOM A9 Max (HX 370)': '1–2 TB NVMe; 2× M.2 PCIe 4.0; bis zu 8 TB' },
          { Merkmal: 'Anschlüsse', 'GEEKOM A9 Max (HX 370)': '2× USB4 (40 Gbit/s), 5× USB-A 10 Gbit/s, 1× USB 2.0, 2× HDMI 2.1, SD-Leser, 3,5 mm' },
          { Merkmal: 'Netzwerk', 'GEEKOM A9 Max (HX 370)': '2× 2.5GbE, Wi-Fi 7, Bluetooth 5.4' },
          { Merkmal: 'TDP', 'GEEKOM A9 Max (HX 370)': '~54 W dauerhaft (PL1), 65 W Boost (PL2)' },
          { Merkmal: 'Abmessungen', 'GEEKOM A9 Max (HX 370)': '135 × 132 × 46 mm' },
          { Merkmal: 'Betriebssystem', 'GEEKOM A9 Max (HX 370)': 'Windows 11 Pro (Linux-/Proxmox-Installation unterstützt)' },
          { Merkmal: 'Preis (Richtwert)', 'GEEKOM A9 Max (HX 370)': 'rund 999–1.199 € (Juli 2026 — schwankend, aktuellen Preis prüfen)' },
        ],
        items: [
          'Keine dedizierte GPU: Alle KI-Inferenz läuft auf CPU und Radeon-890M-iGPU, die sich den System-RAM teilen.',
          'Die beiden SO-DIMM-Steckplätze sind vom Nutzer austauschbar — Sie können mit 32 GB starten und später auf 64 GB oder 128 GB aufrüsten.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'Lokale KI & LLM-Leistung',
        content:
          '**Mit 32 GB RAM betreibt der A9 Max bequem ein 7B–8B-Modell auf Ollama und fasst ein 13B–14B-Modell in 4-Bit mit Platz für Kontext — alle Angaben aus der geprüften Hardware geschätzt, kein gemessener Benchmark.** Der Umstieg auf 64 GB ermöglicht Modelle der 30B-Klasse, und die 128-GB-Obergrenze lässt ein 70B-Modell in 4-Bit laden, wobei große Modelle durch die Speicherbandbreite (Dual-Channel DDR5-5600, kein dediziertes VRAM) begrenzt sind und eher zum Experimentieren als zum schnellen Betrieb taugen.',
        items: [
          'Ollama, LM Studio und llama.cpp laufen alle gut; die Radeon 890M wird über Vulkan- oder ROCm-Backends genutzt.',
          'Die 50-TOPS-NPU beschleunigt Bildverarbeitung wie die Frigate-Objekterkennung — sie beschleunigt keine lokalen LLMs, die die Laufzeiten auf CPU/iGPU legen.',
          'Home Assistant plus Ollama plus Whisper plus Frigate passen zusammen auf 32 GB; ergänzen Sie RAM, wenn Sie neben der Kameraaufzeichnung ein größeres Modell wollen.',
          'Dauerhaft ~54 W unter Last halten die Betriebskosten im Dauerbetrieb niedrig; siehe [Ollama auf Home Assistant](/de/smart-home/home-assistant-ollama-integration), um das Modell anzubinden.',
          'Für VRAM und Quantisierungstiefe über verschiedene Boxen siehe den clusterübergreifenden [Hardware-Leitfaden für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026).',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Vorteile & Nachteile',
        content: '**Der A9 Max tauscht Preis gegen Reserven.** Ausgewogene Sicht unten.',
        items: [
          '**Vorteile**',
          '128-GB-RAM-Obergrenze — die größte in diesem Feld, passt also die größten lokalen Modelle',
          '12-Kern-Ryzen AI 9 HX 370 mit Radeon 890M — starke iGPU für einen Mini-PC',
          'Vom Nutzer austauschbarer SO-DIMM-RAM und zwei M.2-Steckplätze — später aufrüstbar',
          'Wi-Fi 7, zwei 2.5GbE, zwei USB4-Ports — gut vernetzt für einen Heimserver',
          'Läuft mit dauerhaft ~54 W kühl und leise für eine stets laufende Box',
          '**Nachteile**',
          'Teuer — rund 999–1.199 €, etwa doppelt so viel wie ein Beelink SER8',
          'Die 50-TOPS-NPU beschleunigt keine lokalen LLMs (ein verbreiteter Irrtum)',
          'iGPU-Design mit geteiltem Speicher ist für sehr große Modelle bandbreitenbegrenzt',
          'Überdimensioniert, wenn Sie nur Home Assistant plus ein 7B-Modell betreiben',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Käuferkontext: Zölle & Verfügbarkeit (2026)',
        content:
          '**Der A9 Max wird in China gefertigt, sein Endpreis spiegelt also die Handelsmaßnahmen 2026 wider — ein Grund, jeden Preis als beweglich zu behandeln.** Die Fakten unten sind Käuferkontext, keine redaktionelle Meinung.',
        items: [
          'USA: Die Section-301-Zölle auf chinesische Elektronik bleiben 2026 in Kraft; die separaten „IEEPA“-Zölle von 2025 wurden im Februar 2026 vom Supreme Court gekippt und durch einen befristeten, gedeckelten Section-122-Zoll ersetzt. Die zollfreie „De-minimis“-Ausnahme unter 800 $ für Direktimporte ist ebenfalls entfallen.',
          'EU (betrifft DE/FR): Es gibt keinen breiten EU-Zoll auf fertige Mini-PCs, aber ab Juli 2026 wurde die zollfreie Grenze von 150 € für geringwertige Direktsendungen aus China aufgehoben und eine kleine Bearbeitungsgebühr pro Paket eingeführt.',
          'Annahme (Makrotrend, kein produktbezogener Fakt): Umgeleitete chinesische Exportkapazität hat die Verfügbarkeit dieser Marken in EU und USA hoch gehalten, was wettbewerbsfähige Preise grundsätzlich stützt.',
          'Nettoeffekt: Prüfen Sie vor dem Kauf den aktuellen Preis beim Händler — die Zahlen in diesem Test sind Richtwerte mit Stand Juli 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Wo kaufen & aktueller Preis',
        content:
          '**Preise ändern sich Woche für Woche, prüfen Sie also den Live-Preis, statt einer festen Zahl zu vertrauen.** Stand Juli 2026 liegt die verbreitete Konfiguration HX 370 / 32 GB / 2 TB bei rund 999–1.199 €, die „2026 Edition“ mit HX 470 höher.',
        items: [
          'Bestätigen Sie vor der Bestellung die genaue SKU (HX 370 vs. HX 470, RAM- und Speicherkapazität) — Preis und Daten unterscheiden sich.',
        ],
        affiliateLinks: [
          { label: 'Aktuellen Preis prüfen — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zum Vergleich',
        content: '**Wenn der A9 Max mehr ist, als Sie brauchen, decken drei günstigere Boxen die meisten gleichen Aufgaben ab.**',
        items: [
          '[Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review) — der Preis-Leistungs-Tipp: Ryzen 7 8845HS, 32 GB, rund 600 €, betreibt ein 7B-Modell bequem',
          '[Minisforum UM890 Pro](/de/smart-home/minisforum-um890-pro-local-ai-review) — ergänzt einen OCuLink-Port für eine externe GPU, falls Sie später schnellere Inferenz großer Modelle wollen',
          '[Beelink EQ14](/de/smart-home/beelink-eq14-local-ai-review) — günstige Intel-N150-Box für Home Assistant plus ein kleines Modell',
          '[GMKtec G3 Plus](/de/smart-home/gmktec-g3-plus-local-ai-review) — eine weitere günstige N150-Option mit aufrüstbarem RAM',
          'Noch am Vergleichen? Starten Sie mit dem [Überblick der besten Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann der GEEKOM A9 Max lokale LLMs ausführen?', a: 'Ja. Mit 32 GB RAM betreibt er bequem ein 7B–8B-Modell auf Ollama und fasst ein 13B–14B-Modell in 4-Bit-Quantisierung mit Platz für Kontext. Dies ist aus der geprüften Hardware geschätzt, nicht aus einem festen Benchmark, da die Geschwindigkeit von Modell, Quantisierung und Backend abhängt.' },
          { q: 'Wie groß darf ein Modell für den RAM sein?', a: 'Bei der getesteten Kapazität von 32 GB ist bis zu ein 13B–14B-Modell in 4-Bit realistisch. Ein Upgrade auf 64 GB ermöglicht Modelle der 30B-Klasse, und die 128-GB-Obergrenze lässt ein 70B-Modell in 4-Bit laden — sehr große Modelle laufen jedoch langsam, weil die iGPU den Systemspeicher teilt und kein dediziertes VRAM hat.' },
          { q: 'Macht die NPU lokale LLMs schneller?', a: 'Nein. Die 50-TOPS-NPU beschleunigt Bildverarbeitung und einige Windows-KI-Funktionen, aber verbreitete lokale LLM-Laufzeiten wie Ollama und llama.cpp legen das Modell auf CPU und Radeon-890M-iGPU. Sehen Sie die NPU als Vorteil für die Frigate-Kameraerkennung, nicht für die Geschwindigkeit von Chat-Modellen.' },
          { q: 'Ist der A9 Max gut für Home Assistant und Dauerbetrieb?', a: 'Ja. Er betreibt Home Assistant, Ollama, Whisper und Frigate zusammen mit Reserven, und seine ~54 W dauerhaft halten die Betriebskosten im Dauerbetrieb niedrig. Zwei 2.5GbE und Wi-Fi 7 eignen sich zudem für eine kabelgebundene Heimserver-Rolle.' },
          { q: 'Ist der RAM aufrüstbar?', a: 'Ja. Der A9 Max nutzt zwei standardmäßige DDR5-SO-DIMM-Steckplätze, die vom Nutzer austauschbar sind, sodass Sie mit 32 GB starten und später auf 64 GB oder 128 GB umsteigen können. Das ist ein echter Vorteil gegenüber Mini-PCs mit verlötetem Speicher.' },
          { q: 'Wie viel Strom verbraucht er?', a: 'Er läuft unter Last mit rund 54 W dauerhaft und im Leerlauf deutlich weniger, sodass Dauerbetrieb günstig ist. Der genaue Wert schwankt je nach betriebenem Modell und dem im BIOS gewählten Energieprofil.' },
          { q: 'Lohnt sich der A9 Max gegenüber einem Beelink SER8?', a: 'Nur, wenn Sie die zusätzlichen Reserven wollen. Der SER8 betreibt Home Assistant plus ein 7B-Modell zum etwa halben Preis. Der A9 Max ist den Aufpreis wert, wenn Sie die 128-GB-RAM-Obergrenze, Wi-Fi 7 oder Reserven für Bildverarbeitung für die kommenden Jahre brauchen.' },
          { q: 'Wo wird der GEEKOM A9 Max gefertigt, und beeinflusst das den Preis?', a: 'Er wird in China gefertigt. 2026 können US-Importmaßnahmen (Section-301-Zölle, das Ende der De-minimis-Ausnahme unter 800 $) und die Aufhebung der EU-Grenze von 150 € für geringwertige Sendungen die Endkosten beeinflussen — prüfen Sie also den aktuellen Händlerpreis, statt sich auf eine feste Zahl zu verlassen.' },
          { q: 'Wie sind Preis und Import des A9 Max in Deutschland und der EU?', a: 'In Deutschland liegt die verbreitete HX-370-Variante mit 32 GB / 2 TB Stand Juli 2026 bei rund 999–1.199 € (UVP bis 1.199 €), etwa bei Amazon.de, Geizhals-gelisteten Händlern oder im GEEKOM-EU-Store. Da das Gerät in China gefertigt wird, wirkt sich die zum Juli 2026 aufgehobene 150-€-Freigrenze für geringwertige Direktsendungen auf Bestellungen direkt aus China aus; ein Kauf über einen EU-Lagerhändler enthält Zoll und Einfuhrumsatzsteuer bereits im ausgewiesenen Preis. Prüfen Sie vor dem Kauf immer den aktuellen Preis, da er schwankt.' },
          { q: 'Ist der A9 Max für den deutschen Mittelstand geeignet?', a: 'Ja. Für kleine und mittlere Unternehmen ist der A9 Max ein leiser, stets laufender Server, der ein lokales LLM, Home Assistant und Kameraverarbeitung im eigenen Netzwerk hält — relevant, wenn die DSGVO eine Datenverarbeitung ohne Cloud-Übermittlung nahelegt und Sie sich an den BSI-Grundschutz-Kataloken orientieren. Da die Inferenz lokal läuft, verlassen sensible Prompts und Kameradaten das Firmengelände nicht, was die Auftragsverarbeitung nach DSGVO-Artikel 28 vereinfacht. Für einen einzelnen Hub plus 7B-Modell genügt oft ein günstigerer SER8; der A9 Max lohnt sich, wenn mehrere Dienste und größere Modelle mit Reserven laufen sollen.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) — der Überblick, zu dem dieser Test gehört',
          '[Hardware-Leitfaden für lokale LLMs](/de/local-llms/local-llm-hardware-guide-2026) — clusterübergreifend: VRAM und Quantisierungstiefe',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) — was die Box tatsächlich ausführt',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) — das Modell anbinden',
          '[Lokale KI-Sicherheitskameras](/de/smart-home/local-ai-security-camera) — wo NPU und iGPU sich auszahlen',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'GEEKOM A9 Max Test (2026): Lokale KI & Heimserver',
      reviewBody:
        'Der GEEKOM A9 Max ist ein Premium-Mini-PC mit Ryzen AI 9 HX 370, der Home Assistant plus ein 7B–13B-LLM lokal betreibt und mit 128 GB RAM-Obergrenze reichlich Reserven bietet. Er ist ein Kauf für Reserven und Zukunftssicherheit zu rund 999–1.199 € (Juli 2026), etwa doppelt so viel wie ein Beelink SER8.',
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
      url: 'https://www.promptquorum.com/de/smart-home/geekom-a9-max-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GEEKOM A9 Max',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GEEKOM' },
        description: 'Mini-PC mit AMD Ryzen AI 9 HX 370, Radeon-890M-iGPU, bis zu 128 GB DDR5, für lokale KI und Heimserver-Einsatz.',
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
    title: 'Test GEEKOM A9 Max (2026) : IA locale & serveur maison',
    seoTitle: 'Test GEEKOM A9 Max 2026 — IA locale & serveur maison',
    intro:
      'Le GEEKOM A9 Max est un mini-PC premium bâti sur l’AMD Ryzen AI 9 HX 370 (12 cœurs, Radeon 890M, jusqu’à 128 Go DDR5). Pour une maison connectée à IA locale, c’est le choix « marge de manœuvre » : il fait tourner Home Assistant, Frigate et un modèle 7B–13B sur Ollama sans forcer, mais à environ 999–1 399 € (juillet 2026, prix volatil) il coûte bien plus qu’un Beelink SER8 qui couvre l’essentiel des mêmes usages. Ce test vérifie ses caractéristiques, fixe des attentes honnêtes sur la vitesse LLM locale et indique à qui il s’adresse.',
    metaDescription:
      'Test GEEKOM A9 Max 2026 : Ryzen AI 9 HX 370, Radeon 890M, jusqu’à 128 Go DDR5. Fait tourner Home Assistant + un LLM local 7B–13B — mais c’est un choix « marge » à ~999–1 399 €, pas une box économique.',
    twitterDescription:
      'GEEKOM A9 Max (2026) : Ryzen AI 9 HX 370, plafond 128 Go DDR5, Wi-Fi 7. Une box premium Home Assistant + IA locale — le NPU n’accélère pas les LLM ; ce sont la RAM et l’iGPU qui comptent.',
    readTime: '7 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs se demandant si le GEEKOM A9 Max vaut le coup pour un serveur maison à IA locale',
    primaryTerm: 'test GEEKOM A9 Max',
    targetKeywords: [
      'test geekom a9 max',
      'geekom a9 max ia locale',
      'geekom a9 max home assistant',
      'geekom a9 max llm local',
      'ryzen ai 9 hx 370 mini pc',
    ],
    leadAnswerBlock:
      '**Le GEEKOM A9 Max (Ryzen AI 9 HX 370, Radeon 890M, 32 Go DDR5 testés, jusqu’à 128 Go) est le choix « marge de manœuvre » pour une maison connectée à IA locale — il fait tourner Home Assistant, Frigate et un modèle 7B–13B sur Ollama sans peine.** À environ 999–1 399 € (juillet 2026, volatil), il vaut à peu près le double d’un Beelink SER8 : achetez-le pour le plafond de 128 Go de RAM, le Wi-Fi 7 et la marge en vision, pas pour économiser.',
    quickAnswerTop: {
      fr: {
        question: 'Le GEEKOM A9 Max est-il bon pour l’IA locale et Home Assistant ?',
        answer:
          'Oui, mais c’est un choix premium. Le Ryzen AI 9 HX 370 (12 cœurs/24 threads), l’iGPU Radeon 890M et jusqu’à 128 Go de DDR5 font tourner Home Assistant, Ollama, Whisper et Frigate sur une seule box avec une large marge — un modèle 7B–8B est à l’aise et un 13B–14B (4 bits) passe avec de la place pour le contexte. Son NPU de 50 TOPS aide les tâches de vision comme Frigate mais n’accélère pas les LLM locaux, qui tournent sur le CPU et l’iGPU. À environ 999–1 399 € (juillet 2026, volatil), il coûte près du double d’un Beelink SER8 : c’est un achat de marge et de pérennité, pas de rapport qualité-prix.',
        bullets: [
          'CPU : Ryzen AI 9 HX 370 — 12 cœurs / 24 threads, Radeon 890M (16 CU, RDNA 3.5)',
          'RAM : 32 Go DDR5-5600 testés, deux emplacements SO-DIMM, jusqu’à 128 Go (remplaçable par l’utilisateur)',
          'LLM local (estimé d’après les specs) : 7B–8B à l’aise, 13B–14B en 4 bits passe ; 64–128 Go ouvrent le 30B–70B (lent, limité par la bande passante)',
          'Le NPU (50 TOPS) aide la vision Frigate, pas la vitesse LLM ; l’iGPU et la bande passante RAM fixent la latence LLM',
          'Prix ~999–1 399 € (juillet 2026, volatil) — un Beelink SER8 couvre l’essentiel pour environ 600 €',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
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
      { type: 'one-sentence', content: 'Le GEEKOM A9 Max est un mini-PC premium Ryzen AI 9 HX 370 qui fait tourner Home Assistant et un LLM local 7B–13B, avec un plafond de 128 Go de RAM pour la marge.' },
      { type: 'plain-terms', content: 'Un mini-PC est un petit ordinateur silencieux que vous pouvez laisser allumé toute la journée. L’A9 Max est un modèle haut de gamme : processeur rapide, forte partie graphique intégrée et place pour beaucoup de mémoire. C’est ce plafond de mémoire qui lui permet de faire tourner des modèles d’IA plus gros que les box moins chères — mais il coûte aussi bien plus, et sa puce IA dédiée (le NPU) aide la détection caméra, pas le modèle de chat.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'L’A9 Max fait tourner Home Assistant, Frigate, Whisper et un LLM local 7B–13B sur une seule box avec de la marge',
          'Ryzen AI 9 HX 370 : 12 cœurs/24 threads, iGPU Radeon 890M, jusqu’à 128 Go DDR5 (deux SO-DIMM remplaçables par l’utilisateur)',
          'La vitesse LLM locale vient de l’iGPU et de la bande passante RAM — le NPU de 50 TOPS accélère la vision, pas les modèles de chat',
          'À ~999–1 399 € (juillet 2026, volatil), environ le double d’un [Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review)',
          'Achetez-le pour le plafond de 128 Go, le Wi-Fi 7 et la marge en vision ; sinon le SER8 offre un meilleur rapport qualité-prix',
          'Fabriqué en Chine — intégrez les mesures d’import US/UE 2026 au coût final (voir la note douane)',
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict — À qui il s’adresse',
        content:
          '**Achetez le GEEKOM A9 Max si vous voulez un seul mini-PC pour une maison à IA locale avec des années de marge, et que vous acceptez un prix premium.** Son Ryzen AI 9 HX 370 à 12 cœurs, son iGPU Radeon 890M et son plafond de 128 Go de RAM en font la box la plus pérenne de cette sélection. Si votre but est la machine capable la moins chère, arrêtez-vous ici et lisez le test du SER8 — l’A9 Max est surdimensionné pour un hub plus un modèle 7B.\n\nSon usage le plus fort est un **serveur maison toujours allumé qui fait tourner Home Assistant, Frigate et un LLM local de taille moyenne en même temps**, sans que vous pensiez à la RAM. Le Wi-Fi 7, les deux ports 2.5GbE et les deux USB4 en font aussi une station de travail polyvalente entre deux tâches domotiques.',
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      specs: {
        id: 'specs',
        title: 'Caractéristiques',
        content:
          '**Toutes les caractéristiques ci-dessous ont été vérifiées auprès de GEEKOM et de sources de test indépendantes en juillet 2026.** Une référence « 2026 Edition » distincte embarque le Ryzen AI 9 HX 470 (86 TOPS au total) à un prix plus élevé ; le tableau reflète l’unité grand public HX 370.',
        columns: ['Caractéristique', 'GEEKOM A9 Max (HX 370)'],
        rows: [
          { 'Caractéristique': 'CPU', 'GEEKOM A9 Max (HX 370)': 'AMD Ryzen AI 9 HX 370 (Zen 5, 4 nm)' },
          { 'Caractéristique': 'Cœurs / threads', 'GEEKOM A9 Max (HX 370)': '12 cœurs / 24 threads, jusqu’à 5.1 GHz' },
          { 'Caractéristique': 'iGPU', 'GEEKOM A9 Max (HX 370)': 'AMD Radeon 890M — 16 CU, RDNA 3.5' },
          { 'Caractéristique': 'NPU', 'GEEKOM A9 Max (HX 370)': 'XDNA 2, 50 TOPS (80 TOPS plateforme au total)' },
          { 'Caractéristique': 'RAM', 'GEEKOM A9 Max (HX 370)': '32 Go DDR5-5600 testés ; 2 emplacements SO-DIMM ; jusqu’à 128 Go (remplaçable par l’utilisateur)' },
          { 'Caractéristique': 'Stockage', 'GEEKOM A9 Max (HX 370)': '1–2 To NVMe ; 2× M.2 PCIe 4.0 ; jusqu’à 8 To' },
          { 'Caractéristique': 'Ports', 'GEEKOM A9 Max (HX 370)': '2× USB4 (40 Gbit/s), 5× USB-A 10 Gbit/s, 1× USB 2.0, 2× HDMI 2.1, lecteur SD, 3.5 mm' },
          { 'Caractéristique': 'Réseau', 'GEEKOM A9 Max (HX 370)': '2× 2.5GbE, Wi-Fi 7, Bluetooth 5.4' },
          { 'Caractéristique': 'TDP', 'GEEKOM A9 Max (HX 370)': '~54 W soutenu (PL1), 65 W boost (PL2)' },
          { 'Caractéristique': 'Dimensions', 'GEEKOM A9 Max (HX 370)': '135 × 132 × 46 mm' },
          { 'Caractéristique': 'OS', 'GEEKOM A9 Max (HX 370)': 'Windows 11 Pro (installation Linux/Proxmox prise en charge)' },
          { 'Caractéristique': 'Prix (indicatif)', 'GEEKOM A9 Max (HX 370)': '~999–1 399 € (juillet 2026 — volatil, vérifier le prix actuel)' },
        ],
        items: [
          'Pas de GPU dédié : toute l’inférence IA tourne sur le CPU et l’iGPU Radeon 890M qui partagent la RAM système.',
          'Les deux emplacements SO-DIMM sont remplaçables par l’utilisateur — vous pouvez démarrer à 32 Go puis passer à 64 Go ou 128 Go.',
        ],
      },
      localAi: {
        id: 'local-ai',
        title: 'IA locale & performances LLM',
        content:
          '**Avec 32 Go de RAM, l’A9 Max fait tourner sans peine un modèle 7B–8B sur Ollama et accueille un 13B–14B en 4 bits avec de la place pour le contexte — toutes ces valeurs sont estimées d’après le matériel vérifié, pas mesurées.** Passer à 64 Go ouvre les modèles de classe 30B, et le plafond de 128 Go permet de charger un 70B en 4 bits, même si les gros modèles sont limités par la bande passante mémoire (DDR5-5600 double canal, pas de VRAM dédiée) et restent utilisables pour l’expérimentation plutôt que pour un service rapide.',
        items: [
          'Ollama, LM Studio et llama.cpp tournent tous bien ; la Radeon 890M est exploitée via les back-ends Vulkan ou ROCm.',
          'Le NPU de 50 TOPS accélère les charges de vision comme la détection d’objets Frigate — il n’accélère pas les LLM locaux, que les runtimes placent sur le CPU/iGPU.',
          'Home Assistant plus Ollama plus Whisper plus Frigate tiennent ensemble sur 32 Go ; ajoutez de la RAM pour un modèle plus gros en parallèle de l’enregistrement caméra.',
          'Environ 54 W soutenus sous charge gardent le coût de fonctionnement modeste en continu ; voir [Ollama sur Home Assistant](/fr/smart-home/home-assistant-ollama-integration) pour relier le modèle.',
          'Pour la VRAM et la profondeur de quantification selon les box, voir le [guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026) inter-clusters.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      prosCons: {
        id: 'pros-cons',
        title: 'Avantages & inconvénients',
        content: '**L’A9 Max échange le prix contre la marge.** Vue équilibrée ci-dessous.',
        items: [
          '**Avantages**',
          'Plafond de 128 Go de RAM — le plus élevé de la sélection, il accueille les plus gros modèles locaux',
          'Ryzen AI 9 HX 370 à 12 cœurs avec Radeon 890M — iGPU puissant pour un mini-PC',
          'RAM SO-DIMM remplaçable par l’utilisateur et deux emplacements M.2 — évolutif',
          'Wi-Fi 7, deux 2.5GbE, deux ports USB4 — bien connecté pour un serveur maison',
          'Reste frais et silencieux à ~54 W soutenus pour une box toujours allumée',
          '**Inconvénients**',
          'Cher — environ 999–1 399 €, près du double d’un Beelink SER8',
          'Le NPU de 50 TOPS n’accélère pas les LLM locaux (idée reçue fréquente)',
          'La conception iGPU à mémoire partagée est limitée en bande passante pour les très gros modèles',
          'Surdimensionné si vous ne faites tourner que Home Assistant plus un modèle 7B',
        ],
      },
      tradeNote: {
        id: 'trade-note',
        title: 'Contexte acheteur : droits de douane & disponibilité (2026)',
        content:
          '**L’A9 Max est fabriqué en Chine, donc son prix rendu reflète les mesures commerciales 2026 — une raison de traiter tout prix comme une cible mouvante.** Les faits ci-dessous sont un contexte acheteur, pas un avis éditorial.',
        items: [
          'USA : les droits Section 301 sur l’électronique chinoise restent en vigueur en 2026 ; les droits « IEEPA » distincts de 2025 ont été invalidés par la Cour suprême en février 2026 et remplacés par un droit Section 122 temporaire et plafonné. L’exemption « de minimis » hors taxe sous 800 $ pour les imports directs a aussi pris fin.',
          'UE (concerne DE/FR) : il n’existe pas de droit UE général sur les mini-PC finis, mais depuis juillet 2026 le seuil hors taxe de 150 € sur les petits colis directs de Chine a été supprimé et de petits frais de traitement par colis ajoutés.',
          'Hypothèse (tendance macro, pas un fait par produit) : la capacité d’export chinoise réorientée a maintenu une forte disponibilité de ces marques en UE et aux USA, ce qui soutient globalement des prix compétitifs.',
          'Effet net : vérifiez le prix actuel chez le revendeur avant d’acheter — les chiffres de ce test sont indicatifs et datés de juillet 2026.',
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Où acheter & prix actuel',
        content:
          '**Les prix bougent d’une semaine à l’autre, vérifiez donc le prix en direct plutôt que de vous fier à un chiffre fixe.** En juillet 2026, la configuration grand public HX 370 / 32 Go / 2 To se situe autour de 999–1 399 €, la référence « 2026 Edition » HX 470 étant plus chère.',
        items: [
          'Confirmez la référence exacte (HX 370 vs HX 470, capacités RAM et stockage) avant de commander — prix et specs diffèrent.',
        ],
        affiliateLinks: [
          { label: 'Vérifier le prix actuel — GEEKOM A9 Max', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à envisager',
        content: '**Si l’A9 Max est plus que nécessaire, trois box moins chères couvrent l’essentiel des mêmes tâches.**',
        items: [
          '[Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) — le choix rapport qualité-prix : Ryzen 7 8845HS, 32 Go, environ 600 €, fait tourner un modèle 7B sans peine',
          '[Minisforum UM890 Pro](/fr/smart-home/minisforum-um890-pro-local-ai-review) — ajoute un port OCuLink pour un GPU externe si vous voulez une inférence plus rapide de gros modèles plus tard',
          '[Beelink EQ14](/fr/smart-home/beelink-eq14-local-ai-review) — box Intel N150 économique pour Home Assistant plus un petit modèle',
          '[GMKtec G3 Plus](/fr/smart-home/gmktec-g3-plus-local-ai-review) — une autre option N150 économique avec RAM évolutive',
          'Encore en comparaison ? Partez du [comparatif des meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Le GEEKOM A9 Max peut-il faire tourner des LLM locaux ?', a: 'Oui. Avec 32 Go de RAM, il fait tourner sans peine un modèle 7B–8B sur Ollama et accueille un 13B–14B en quantification 4 bits avec de la place pour le contexte. C’est estimé d’après son matériel vérifié plutôt qu’un benchmark fixe, car la vitesse dépend du modèle, de la quantification et du back-end.' },
          { q: 'Quelle taille de modèle tient dans sa RAM ?', a: 'À la capacité testée de 32 Go, jusqu’à un modèle 13B–14B en 4 bits est réaliste. Passer à 64 Go ouvre les modèles de classe 30B, et le plafond de 128 Go permet de charger un 70B en 4 bits — même si les très gros modèles tournent lentement, car l’iGPU partage la mémoire système et n’a pas de VRAM dédiée.' },
          { q: 'Le NPU rend-il les LLM locaux plus rapides ?', a: 'Non. Le NPU de 50 TOPS accélère la vision et certaines fonctions IA de Windows, mais les runtimes LLM locaux courants comme Ollama et llama.cpp exécutent le modèle sur le CPU et l’iGPU Radeon 890M. Voyez le NPU comme un atout pour la détection caméra Frigate, pas pour la vitesse du modèle de chat.' },
          { q: 'L’A9 Max est-il bon pour Home Assistant et un usage continu ?', a: 'Oui. Il fait tourner Home Assistant, Ollama, Whisper et Frigate ensemble avec de la marge, et sa consommation de ~54 W soutenus garde le coût continu modeste. Ses deux 2.5GbE et son Wi-Fi 7 conviennent aussi à un rôle de serveur maison filaire.' },
          { q: 'La RAM est-elle évolutive ?', a: 'Oui. L’A9 Max utilise deux emplacements DDR5 SO-DIMM standard remplaçables par l’utilisateur, vous pouvez donc démarrer à 32 Go puis passer à 64 Go ou 128 Go. C’est un vrai avantage sur les mini-PC à mémoire soudée.' },
          { q: 'Combien consomme-t-il ?', a: 'Il tourne à environ 54 W soutenus sous charge et bien moins au repos, le laisser allumé en continu revient donc peu cher. La valeur exacte varie selon le modèle exécuté et le profil d’alimentation choisi dans le BIOS.' },
          { q: 'L’A9 Max vaut-il le coup face à un Beelink SER8 ?', a: 'Seulement si vous voulez la marge supplémentaire. Le SER8 fait tourner Home Assistant plus un modèle 7B pour environ moitié prix. L’A9 Max vaut le surcoût si vous avez besoin du plafond de 128 Go de RAM, du Wi-Fi 7 ou de la marge en vision pour les années à venir.' },
          { q: 'Où le GEEKOM A9 Max est-il fabriqué, et cela influe-t-il sur le prix ?', a: 'Il est fabriqué en Chine. En 2026, les mesures d’import US (droits Section 301, fin de l’exemption de minimis sous 800 $) et la suppression par l’UE de l’exemption des petits colis sous 150 € peuvent affecter le coût rendu : vérifiez donc le prix revendeur actuel plutôt que de vous fier à un chiffre fixe.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — le comparatif dont ce test fait partie',
          '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide-2026) — inter-clusters : VRAM et profondeur de quantification',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la box exécute vraiment',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — relier le modèle',
          '[Caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera) — là où le NPU et l’iGPU se rentabilisent',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Review',
      name: 'Test GEEKOM A9 Max (2026) : IA locale & serveur maison',
      reviewBody:
        'Le GEEKOM A9 Max est un mini-PC premium Ryzen AI 9 HX 370 qui fait tourner Home Assistant et un LLM local 7B–13B, avec un plafond de 128 Go de RAM. C’est un choix de marge et de pérennité à environ 999–1 399 € (juillet 2026), près du double d’un Beelink SER8.',
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
      url: 'https://www.promptquorum.com/fr/smart-home/geekom-a9-max-local-ai-review',
      reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5', worstRating: '1' },
      itemReviewed: {
        '@type': 'Product',
        name: 'GEEKOM A9 Max',
        category: 'Mini PC',
        brand: { '@type': 'Brand', name: 'GEEKOM' },
        description: 'Mini-PC avec AMD Ryzen AI 9 HX 370, iGPU Radeon 890M, jusqu’à 128 Go DDR5, pour l’IA locale et l’usage serveur maison.',
      },
    },
  },
}
