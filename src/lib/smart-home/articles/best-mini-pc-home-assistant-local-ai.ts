import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Best Mini PCs for Home Assistant + Local AI (2026)',
    seoTitle: 'Best Mini PC for Home Assistant + Local AI in 2026',
    intro:
      'The best mini PC for Home Assistant plus a local LLM on one box in 2026 is the Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) at about $650, which runs the hub, Frigate, and a 7B model via Ollama. On a budget, an Intel N150 box like the Beelink EQ14 or GMKtec G3 Plus (about $180–230) runs Home Assistant and a small model. For the strongest on-device AI and vision, the GEEKOM A9 Max (Ryzen AI 9 HX 370, about $1,099–1,299) steps up further. This buyer\'s guide compares all five specific units side by side, gives a direct recommendation for each use case, and covers setup notes — cross-linking to the local-llms hardware guide for VRAM depth.',
    metaDescription:
      'Best mini PC for Home Assistant 2026: Beelink SER8 (~$650) for Frigate + a 7B model; Intel N150 boxes (~$180–230) for budget; GEEKOM A9 Max (~$1,099+) for on-device AI. Compared side by side.',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-en.webp',
    twitterDescription:
      'Best mini PC for Home Assistant 2026: Beelink SER8 (~$650) runs Frigate + a 7B model on Ollama; budget Intel N150 boxes (~$180–230); GEEKOM A9 Max (~$1,099+) for on-device AI. 5 units compared.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing a mini PC for Home Assistant and local AI',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'best mini pc home assistant local ai',
      'mini pc home assistant llm',
      'home assistant local ai hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**The best all-round mini PC for Home Assistant plus a local LLM in 2026 is the Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) at about $650 — it runs the hub, Frigate, and a 7B model on Ollama on one box.** For a budget or fanless build, an Intel N150 box like the Beelink EQ14 or GMKtec G3 Plus (about $180–230) runs Home Assistant and a small model. For the strongest on-device AI, the GEEKOM A9 Max (about $1,099–1,299) steps up further. Prioritise RAM and the iGPU over raw CPU clock for AI latency.',
    quickAnswerTop: {
      en: {
        question: 'What mini PC is best for Home Assistant and local AI in 2026?',
        answer:
          'For most people the Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB, about $650) is the best pick — its strong iGPU runs a 7B model on Ollama alongside Home Assistant, Frigate, and Whisper. On a budget or for a near-fanless box, an Intel N150 mini PC such as the Beelink EQ14 or GMKtec G3 Plus (about $180–230) runs Home Assistant plus a small model. For the strongest on-device AI and vision, a Ryzen AI mini PC like the GEEKOM A9 Max (about $1,099–1,299) steps up further.',
        bullets: [
          'Best all-round: Beelink SER8 (Ryzen 7 8845HS, 32 GB) ~$650 — HA + Frigate + a 7B model on Ollama',
          'Budget / near-fanless: Intel N150 (Beelink EQ14, GMKtec G3 Plus) ~$180–230 — HA + a small model',
          'Best for local AI: GEEKOM A9 Max (Ryzen AI 9 HX 370) ~$1,099–1,299 — strongest iGPU + NPU for vision',
          'Prioritise RAM and a capable iGPU over CPU clock; more RAM fits a larger model',
          'See the local-llms hardware guide for VRAM depth',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Quick Picks', anchor: 'quick-picks' },
      { label: 'What You Need for HA + LLM', anchor: 'what-you-need' },
      { label: 'The 5 Mini PCs Compared', anchor: 'mini-pc-picks' },
      { label: 'Comparison', anchor: 'comparison' },
      { label: 'What Can Each Class Actually Run?', anchor: 'ai-capabilities' },
      { label: 'Best For…', anchor: 'best-for' },
      { label: 'Budget vs Performance', anchor: 'budget-performance' },
      { label: 'Which One Should You Buy?', anchor: 'which-to-buy' },
      { label: 'Total Cost and Power', anchor: 'cost-and-power' },
      { label: 'Setup Notes', anchor: 'setup-notes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best mini PC for Home Assistant plus a local LLM has ample RAM and a capable iGPU or NPU to run the hub and a small model on one box.' },
      { type: 'plain-terms', content: 'A mini PC is a small, low-power computer that can run your whole smart home plus a local AI model. The two things that matter most are RAM (enough to hold the model and the hub) and a capable graphics chip or NPU (to keep the AI responsive). CPU clock speed matters less.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Prioritise RAM and a capable integrated GPU or NPU over raw CPU clock',
          'A low-power Intel N150 mini PC (~$180–220) runs Home Assistant and a small model',
          'A Ryzen 7/9 mini PC with a strong iGPU (~$650) handles a 7B model alongside the hub',
          'A Ryzen AI NPU-equipped mini PC (~$1,099+) is the strongest option for on-device AI and vision',
          'One mini PC can run Home Assistant, Ollama, Whisper, and Frigate together',
          'See the cross-cluster local-llms hardware guide for VRAM specifics',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Quick Picks',
        content:
          '**Three configurations cover most Home Assistant + local AI setups.** Pick by budget and the model size you want to run.',
        items: [
          '**Best overall — Beelink SER8 (32 GB):** runs Home Assistant, Frigate, and a 7B model on Ollama on one box. Around $650 for the 32 GB / 1 TB configuration, though listings vary — check the current price.',
          '**Best budget — Beelink EQ14 or GMKtec G3 Plus (Intel N150):** runs Home Assistant plus a small model (1–3B) for about $180–220.',
          '**Best for local AI — GEEKOM A9 Max (Ryzen AI 9 HX 370):** the strongest iGPU and an NPU for on-device vision; typically $1,099–1,299 depending on configuration and retailer.',
        ],
        affiliateLinks: [
          { label: 'Check SER8 price →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Check EQ14 price →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'Check A9 Max price →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: 'Prices as of August 2026 — mini PC pricing moves quickly and varies by retailer and configuration; confirm the current listing before buying.',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'What You Need for HA + LLM on One Box',
        content:
          '**You need enough RAM to hold the model plus Home Assistant, and a capable iGPU or NPU to keep the model responsive.** CPU clock is secondary for this workload.',
        items: [
          'RAM: enough headroom for the model size you want plus the hub and add-ons.',
          'Graphics/NPU: a capable integrated GPU or NPU lowers LLM and Whisper latency.',
          'Storage: room for recordings if you also run Frigate — see [local AI security cameras](/smart-home/local-ai-security-camera).',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: 'The 5 Mini PCs Compared',
        content:
          '**Three classes cover most needs: low-power N-series for light AI, Ryzen/Core i-series with a strong iGPU for a 7B model, and NPU-equipped mini PCs for efficient on-device AI.** Below is what each of the five specific units in this guide is built for, based on their published specifications — not independent testing by PromptQuorum.',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Best overall for Home Assistant + a 7B model',
            verdict:
              'With a Ryzen 7 8845HS and Radeon 780M iGPU, this is expected to be the strongest single-box option in this guide for running Home Assistant, Frigate, and a 7B-class model on Ollama together. The 780M iGPU — not an NPU — does the heavy lifting for local-LLM inference.',
            pros: [
              'Strong integrated GPU for 7B-class models',
              '32 GB RAM configuration leaves headroom for the hub plus add-ons',
              'Handles Home Assistant, Frigate, and Whisper on one box',
              'Idle power draw is modest for the performance class (see Comparison table)',
            ],
            cons: [
              'Pricier than an N150 box',
              'Higher power draw under AI load than a low-power box',
              'Overkill if you only need Home Assistant with no local AI',
            ],
            affiliateLinks: [{ label: 'Check price →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Budget pick for Home Assistant + a small model',
            verdict:
              'The Intel N150 is a 6 W-TDP chip built for efficiency, not throughput — expected to run Home Assistant and a 1–3B model comfortably, but a 7B model would likely be noticeably slower on this class of hardware.',
            pros: [
              'Lowest price point in this guide',
              'Very low idle power draw, well suited to a 24/7 box',
              'Near-silent operation is common at this power class',
            ],
            cons: [
              'Slower on anything above a small model',
              'Less RAM headroom than the Ryzen-class options',
              'Not a strong fit if you plan to add Frigate with multiple cameras',
            ],
            affiliateLinks: [{ label: 'Check price →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'Budget alternative to the EQ14',
            verdict:
              'Same Intel N150 class as the EQ14, with the notable difference that its RAM is a user-replaceable SO-DIMM on most configurations rather than soldered — worth checking if you may want to upgrade RAM later.',
            pros: [
              'Similar price and performance profile to the EQ14',
              'Upgradable RAM (SO-DIMM, up to 32 GB) on some configurations',
              'Dual M.2 storage expansion for Frigate recordings',
            ],
            cons: [
              'Same AI-performance ceiling as other N150-class boxes',
              'Availability and exact configuration vary by retailer',
            ],
            affiliateLinks: [{ label: 'Check price →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'Performance alternative to the SER8',
            verdict:
              'Built around a Ryzen 9 8945HS with a configurable TDP up to 70 W, this is expected to deliver similar or slightly higher sustained AI throughput than the SER8 once configured with 32 GB RAM, at the cost of higher power draw under load.',
            pros: [
              'Configurable TDP for more sustained performance under load',
              'Same class of iGPU as the SER8',
              'Barebones pricing gives flexibility to choose your own RAM/storage',
            ],
            cons: [
              'Higher power draw under sustained load than the SER8',
              'Barebones units need RAM and storage purchased separately',
              'Landed pricing can shift with import costs',
            ],
            affiliateLinks: [{ label: 'Check price →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: 'Best for local AI and on-device vision',
            verdict:
              'The Ryzen AI 9 HX 370 pairs a strong Radeon 890M iGPU with a dedicated NPU. For local-LLM inference the iGPU is still expected to do most of the work — the NPU\'s advantage shows up in vision tasks like Frigate\'s object detection, not raw LLM throughput.',
            pros: [
              'Strongest iGPU (Radeon 890M) in this guide',
              'NPU offloads some vision-detection work from the CPU/GPU',
              'Highest RAM ceiling for running larger models alongside the hub',
            ],
            cons: [
              'Highest price in this guide by a wide margin',
              'The NPU does not meaningfully speed up local-LLM chat — don\'t buy this expecting an NPU-driven LLM boost',
              'More capability than most Home Assistant setups actually need',
            ],
            affiliateLinks: [{ label: 'Check price →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparison',
        content:
          '**Match the unit to your target model and budget.** Prices and power figures are approximate, drawn from manufacturer listings and independent hardware reviews as of August 2026 — confirm the current listing before buying.',
        columns: ['Model', 'CPU', 'GPU/iGPU', 'RAM (as tested)', 'Approx. price (Aug 2026)', 'Idle / typical power', 'Best for'],
        rows: [
          { 'Model': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integrated)', 'RAM (as tested)': '16 GB', 'Approx. price (Aug 2026)': '~$189–220', 'Idle / typical power': '~5–12W idle, ~15–25W under load', 'Best for': 'HA + a small model' },
          { 'Model': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integrated)', 'RAM (as tested)': '16 GB (upgradable)', 'Approx. price (Aug 2026)': '~$180–230', 'Idle / typical power': '~5–12W idle, ~15–25W under load', 'Best for': 'HA + a small model, budget flexibility' },
          { 'Model': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM (as tested)': '32 GB', 'Approx. price (Aug 2026)': '~$650', 'Idle / typical power': '~7–10W idle, ~45W+ under sustained AI load', 'Best for': 'HA + Frigate + a 7B model' },
          { 'Model': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'Same class as SER8', 'RAM (as tested)': '32 GB (BYO)', 'Approx. price (Aug 2026)': '~$649 (32GB) / ~$439 barebones', 'Idle / typical power': '~7–9W idle, ~54–90W under sustained load', 'Best for': 'Similar to SER8, more configurable' },
          { 'Model': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM (as tested)': '32 GB', 'Approx. price (Aug 2026)': '~$1,099–1,299', 'Idle / typical power': '~7–9W idle, ~20–34W typical use', 'Best for': 'Strongest on-device AI + vision' },
        ],
        items: [
          'For VRAM and quantization depth, see the cross-cluster [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-en.webp',
        imageCaption: 'Mini PC Classes for Home Assistant AI -- RAM guidance and what each can run',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: 'What Can Each Class Actually Run?',
        content:
          '**The table below reflects expected performance based on each chip\'s published specifications, not independently measured benchmarks by PromptQuorum — treat it as a starting point for sizing your setup, not a guarantee.**',
        columns: ['Hardware class', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper (voice)', 'Frigate (vision)'],
        rows: [
          { 'Hardware class': 'Intel N150 (EQ14, G3 Plus)', 'Home Assistant': 'Smooth', 'Ollama 3B': 'Usable', 'Ollama 7–8B': 'Slow, likely not comfortable', 'Whisper (voice)': 'Usable for short clips', 'Frigate (vision)': 'Basic detection, no NPU acceleration' },
          { 'Hardware class': 'Ryzen 7/9 8845HS/8945HS (SER8, UM890 Pro)', 'Home Assistant': 'Smooth', 'Ollama 3B': 'Smooth', 'Ollama 7–8B': 'Usable at typical quantization', 'Whisper (voice)': 'Smooth', 'Frigate (vision)': 'Good, GPU-accelerated' },
          { 'Hardware class': 'Ryzen AI 9 HX 370 (A9 Max)', 'Home Assistant': 'Smooth', 'Ollama 3B': 'Smooth', 'Ollama 7–8B': 'Smooth', 'Whisper (voice)': 'Smooth', 'Frigate (vision)': 'Best in this guide, NPU-assisted' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: 'Best For…',
        items: [
          '**Budget under $250:** an Intel N150 box (Beelink EQ14 or GMKtec G3 Plus) covers Home Assistant plus a small model.',
          '**Want a 7B model and Frigate together:** step up to a Ryzen 7/9 mini PC with a strong iGPU — the Beelink SER8 or Minisforum UM890 Pro.',
          '**Want a quiet, low-power 24/7 box and don\'t need a large model:** an N150 box draws the least power at idle and is often near-silent.',
          '**Want the strongest on-device AI and vision:** the GEEKOM A9 Max\'s combination of a strong iGPU and NPU is the most capable option here, at the highest price.',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Budget vs Performance',
        content:
          '**Buy the cheapest box that runs your target model at acceptable latency — usually a Ryzen/Core i mini PC with a strong iGPU for a 7B model.** Do not overspend on CPU or NPU capability you will not use — see [Which One Should You Buy?](#which-to-buy) below for a direct recommendation by use case.',
        items: [
          'Budget: a low-power N150 box for HA plus a tiny model.',
          'Balanced: a Ryzen 7/9 mini PC with a strong iGPU for a 7B model.',
          'For the broader hardware decision (Pi vs mini PC vs NAS), see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-en.webp',
        imageCaption: 'Budget vs Performance Pick -- Buy the cheapest box that fits your model',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: 'Which One Should You Buy?',
        content:
          '**Match the box to your actual workload rather than buying the most capable unit available.**',
        items: [
          'If Home Assistant is your only workload: buy the Beelink EQ14 or GMKtec G3 Plus.',
          'If you want Home Assistant plus a local 7B model on one box: buy the Beelink SER8 (32 GB configuration).',
          'If local AI performance is the priority and budget allows: step up to the GEEKOM A9 Max or Minisforum UM890 Pro.',
          'If you are running Frigate with several cameras: prioritise RAM and storage for recordings over raw CPU speed — see [local AI security cameras](/smart-home/local-ai-security-camera) for storage planning.',
        ],
        callouts: [
          { type: 'warning', text: 'Don\'t buy the SER8 or a similarly priced box if you only want Home Assistant and a handful of automations — an N150 box is considerably cheaper and sufficient for that workload.' },
          { type: 'warning', text: 'Don\'t buy an N150 box if your goal is a responsive 7B-class model, Whisper, and Frigate running at the same time — expect it to feel slow at that combined workload.' },
          { type: 'warning', text: 'Don\'t buy the GEEKOM A9 Max expecting its NPU to accelerate local-LLM chat — the iGPU does most of that work; the NPU\'s benefit shows up mainly in vision tasks like Frigate.' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: 'Total Cost and Power Considerations',
        content:
          '**Hardware is the only real cost — the software stack is free.** Home Assistant, Ollama, a local model, and Frigate are all free and open-source; the mini PC itself is the entire budget line.',
        items: [
          '**Hardware cost by tier:** budget N150 box ~$180–230; balanced Ryzen 7/9 box (32 GB) ~$650; step-up NPU box ~$1,099–1,299.',
          '**Power for a 24/7 box:** idle draw is broadly similar across all five units in this guide (roughly 5–10W), but sustained AI-inference load varies more — an N150 box draws noticeably less under load (~15–25W) than a Ryzen 7/9 box running a 7B model (~45W or more). For a box that runs around the clock, that difference adds up over a year more than peak benchmark performance does.',
          'Manufacturer-published TDP figures set the upper bound (N150: 6W; 8845HS/8945HS: 45W, configurable up to 70W on some boards; HX 370: configurable 15–54W) — actual draw depends on workload and BIOS power-mode settings.',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Setup Notes',
        content:
          '**Run Home Assistant OS or a container, install Ollama, and confirm the iGPU/NPU is used for inference.** Keep the box wired to your network for reliability.',
        items: [
          'Install Home Assistant — see [getting started](/smart-home/home-assistant-getting-started).',
          'Install Ollama and pull a small model — see [how to install Ollama](/local-llms/how-to-install-ollama).',
          'Wire Ollama into Home Assistant — see [the Ollama integration guide](/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can one mini PC do both Home Assistant and a local LLM?', a: 'Yes. A mini PC with enough RAM and a capable integrated GPU or NPU runs Home Assistant and a small local LLM together, and can add Whisper and Frigate. This single-box approach is the simplest way to get a local-AI smart home.' },
          { q: 'How much RAM do I need?', a: 'Enough to hold your target model plus Home Assistant and any add-ons. A small model needs only modest RAM, while running a 7B model comfortably alongside the hub benefits from ample RAM. Match RAM to the largest model you plan to run.' },
          { q: 'Intel or AMD for a Home Assistant mini PC?', a: 'Both work. A low-power Intel N-series box is cheapest for light use; an AMD Ryzen or Intel Core i mini PC with a strong integrated GPU handles a 7B model better. Choose based on the model size and latency you want.' },
          { q: 'What is the cheapest mini PC that runs a local LLM?', a: 'A low-power Intel N-series mini PC is the cheapest that can run Home Assistant plus a very small model, though responses are slower. For a snappier 7B-class assistant, step up to a Ryzen or Core i mini PC with a strong iGPU.' },
          { q: 'How much does the whole setup cost, including software?', a: 'The mini PC is the only real cost. Home Assistant, Ollama, a local model, and Frigate are all free and open-source, so the total is whatever you pay for the hardware — from about $180 for an N150 box to around $1,200+ for the strongest NPU-equipped option in this guide.' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: 'Full Reviews of Each Mini PC',
        content:
          '**Each mini PC below has a dedicated page covering configuration, compatibility, and buying considerations.**',
        items: [
          '[Beelink SER8 — full review](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — full review](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — full review](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — full review](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — full review](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS vs server',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the box runs',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — wire the model in',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) — cross-cluster: VRAM and hardware depth',
          '[Local AI Security Cameras](/smart-home/local-ai-security-camera) — storage and camera-count planning for Frigate',
          '[No-Cloud Balcony Solar with Home Assistant](/balcony-solar/home-assistant-balcony-solar-no-cloud) — monitor solar output locally from the same box',
          '[NVIDIA Jetson Orin Nano for Smart Home AI: Review (2027)](/smart-home/nvidia-jetson-orin-nano-smart-home-review) — GPU-class alternative to a mini PC',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Mini PCs for Home Assistant + Local AI (2026)',
      description: 'Best mini PC for Home Assistant 2026: Beelink SER8 (~$650) for Frigate + a 7B model; Intel N150 boxes (~$180–230) for budget; GEEKOM A9 Max (~$1,099+) for on-device AI. Compared side by side.',
      url: 'https://www.promptquorum.com/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Local LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can one mini PC do both Home Assistant and a local LLM?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A mini PC with enough RAM and a capable iGPU or NPU runs Home Assistant and a small local LLM together, and can add Whisper and Frigate.' } },
        { '@type': 'Question', name: 'How much RAM do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Enough to hold your target model plus Home Assistant and add-ons. A small model needs modest RAM; running a 7B model comfortably benefits from ample RAM.' } },
        { '@type': 'Question', name: 'Intel or AMD for a Home Assistant mini PC?', acceptedAnswer: { '@type': 'Answer', text: 'Both work. A low-power Intel N-series box is cheapest for light use; an AMD Ryzen or Intel Core i mini PC with a strong iGPU handles a 7B model better.' } },
        { '@type': 'Question', name: 'What is the cheapest mini PC that runs a local LLM?', acceptedAnswer: { '@type': 'Answer', text: 'A low-power Intel N-series mini PC can run Home Assistant plus a very small model, though slower. For a snappier 7B assistant, step up to a Ryzen or Core i box with a strong iGPU.' } },
        { '@type': 'Question', name: 'How much does the whole setup cost, including software?', acceptedAnswer: { '@type': 'Answer', text: 'The mini PC is the only real cost. Home Assistant, Ollama, a local model, and Frigate are all free and open-source, so the total is whatever you pay for the hardware.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'أفضل ⁨Mini PCs⁩ لـ ⁨Home Assistant⁩ + الذكاء الاصطناعي المحلي (⁨2026⁩)',
    seoTitle: 'أفضل ⁨Mini PC⁩ لـ ⁨Home Assistant + LLM⁩ محلي ⁨2026⁩',
    intro:
      'أفضل mini PC لـ Home Assistant مع نموذج LLM محلي على صندوق واحد في 2026 هو Beelink SER8 (Ryzen 7 8845HS، Radeon 780M، 32 GB) بنحو ‎$650‎، إذ يشغّل المركز وFrigate ونموذج 7B عبر Ollama. وبميزانية محدودة، يشغّل صندوق Intel N150 مثل Beelink EQ14 أو GMKtec G3 Plus (نحو ‎$180–230‎) Home Assistant ونموذجًا صغيرًا. وللحصول على أقوى ذكاء اصطناعي على الجهاز ورؤية، يرتقي GEEKOM A9 Max (Ryzen AI 9 HX 370، نحو ‎$1,099–1,299‎) خطوة أخرى. يقارن هذا الدليل الشرائي الأجهزة الخمسة المحددة جنبًا إلى جنب، ويقدّم توصية مباشرة لكل حالة استخدام، ويغطي ملاحظات الإعداد — مع إحالات متقاطعة إلى دليل أجهزة local-llms لتفاصيل VRAM.',
    metaDescription:
      'أفضل mini PC لـ Home Assistant 2026: Beelink SER8 (نحو ‎$650‎) لـ Frigate + نموذج 7B؛ صناديق Intel N150 (نحو ‎$180–230‎) اقتصادية؛ GEEKOM A9 Max (نحو ‎$1,099+‎) لذكاء اصطناعي على الجهاز. مقارنة جنبًا إلى جنب.',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-ar.webp',
    twitterDescription:
      'أفضل mini PC لـ Home Assistant 2026: Beelink SER8 (نحو ‎$650‎) يشغّل Frigate + نموذج 7B على Ollama؛ صناديق Intel N150 الاقتصادية (نحو ‎$180–230‎)؛ GEEKOM A9 Max (نحو ‎$1,099+‎) لذكاء اصطناعي على الجهاز. مقارنة 5 أجهزة.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المشترون الذين يختارون mini PC لـ Home Assistant والذكاء الاصطناعي المحلي',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'أفضل mini pc home assistant ذكاء اصطناعي محلي',
      'mini pc home assistant llm',
      'أجهزة home assistant ذكاء اصطناعي محلي',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**أفضل mini PC شامل لـ Home Assistant مع نموذج LLM محلي في 2026 هو Beelink SER8 (Ryzen 7 8845HS، Radeon 780M، 32 GB) بنحو ‎$650‎ — يشغّل المركز وFrigate ونموذج 7B على Ollama على صندوق واحد.** لبناء اقتصادي أو شبه صامت، يشغّل صندوق Intel N150 مثل Beelink EQ14 أو GMKtec G3 Plus (نحو ‎$180–230‎) Home Assistant ونموذجًا صغيرًا. وللحصول على أقوى ذكاء اصطناعي على الجهاز، يرتقي GEEKOM A9 Max (نحو ‎$1,099–1,299‎) خطوة أخرى. أعطِ الأولوية لـ RAM وiGPU على تردد CPU الخام لزمن استجابة الذكاء الاصطناعي.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل mini PC لـ Home Assistant والذكاء الاصطناعي المحلي في 2026؟',
        answer:
          'لمعظم الناس، Beelink SER8 (Ryzen 7 8845HS، Radeon 780M، 32 GB، نحو ‎$650‎) هو أفضل اختيار — iGPU القوية تشغّل نموذج 7B على Ollama إلى جانب Home Assistant وFrigate وWhisper. بميزانية محدودة أو لصندوق شبه صامت، يشغّل mini PC بـ Intel N150 مثل Beelink EQ14 أو GMKtec G3 Plus (نحو ‎$180–230‎) Home Assistant مع نموذج صغير. وللحصول على أقوى ذكاء اصطناعي على الجهاز ورؤية، يرتقي mini PC بـ Ryzen AI مثل GEEKOM A9 Max (نحو ‎$1,099–1,299‎) خطوة أخرى.',
        bullets: [
          'الأفضل شاملًا: Beelink SER8 (Ryzen 7 8845HS، 32 GB) نحو ‎$650‎ — HA + Frigate + نموذج 7B على Ollama',
          'اقتصادي / شبه صامت: Intel N150 (Beelink EQ14، GMKtec G3 Plus) نحو ‎$180–230‎ — HA + نموذج صغير',
          'الأفضل للذكاء الاصطناعي المحلي: GEEKOM A9 Max (Ryzen AI 9 HX 370) نحو ‎$1,099–1,299‎ — أقوى iGPU + NPU للرؤية',
          'أعطِ الأولوية لـ RAM وiGPU قادرة على تردد CPU؛ RAM أكثر يستوعب نموذجًا أكبر',
          'راجع دليل أجهزة local-llms لتفاصيل VRAM',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'اختيارات سريعة', anchor: 'quick-picks' },
      { label: 'ما تحتاجه لـ HA + LLM', anchor: 'what-you-need' },
      { label: 'مقارنة الأجهزة الخمسة', anchor: 'mini-pc-picks' },
      { label: 'المقارنة', anchor: 'comparison' },
      { label: 'ماذا يستطيع كل صنف تشغيله فعليًا؟', anchor: 'ai-capabilities' },
      { label: 'الأفضل لـ…', anchor: 'best-for' },
      { label: 'الميزانية مقابل الأداء', anchor: 'budget-performance' },
      { label: 'أيهما يجب أن تشتري؟', anchor: 'which-to-buy' },
      { label: 'التكلفة الإجمالية واستهلاك الطاقة', anchor: 'cost-and-power' },
      { label: 'ملاحظات الإعداد', anchor: 'setup-notes' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'أفضل mini PC لـ Home Assistant مع نموذج LLM محلي يمتلك RAM وافرًا وiGPU أو NPU قادرة لتشغيل المركز ونموذج صغير على صندوق واحد.' },
      { type: 'plain-terms', content: 'mini PC هو حاسوب صغير منخفض الطاقة يمكنه تشغيل منزلك الذكي بالكامل مع نموذج ذكاء اصطناعي محلي. أهم شيئين هما RAM (كافٍ لاستيعاب النموذج والمركز) وشريحة رسومات أو NPU قادرة (لإبقاء الذكاء الاصطناعي سريع الاستجابة). تردد CPU يهم أقل.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'أعطِ الأولوية لـ RAM وGPU متكاملة أو NPU قادرة على تردد CPU الخام',
          'mini PC اقتصادي بـ Intel N150 (نحو ‎$180–220‎) يشغّل Home Assistant ونموذجًا صغيرًا',
          'mini PC بـ Ryzen 7/9 مع iGPU قوية (نحو ‎$650‎) يتعامل مع نموذج 7B إلى جانب المركز',
          'mini PC بـ Ryzen AI مزوّد بـ NPU (نحو ‎$1,099+‎) هو الخيار الأقوى للذكاء الاصطناعي على الجهاز والرؤية',
          'يمكن لـ mini PC واحد تشغيل Home Assistant وOllama وWhisper وFrigate معًا',
          'راجع دليل أجهزة local-llms متعدد العناقيد لتفاصيل VRAM',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'اختيارات سريعة',
        content:
          '**ثلاث تكوينات تغطي معظم إعدادات Home Assistant + الذكاء الاصطناعي المحلي.** اختر حسب الميزانية وحجم النموذج الذي تريد تشغيله.',
        items: [
          '**الأفضل شاملًا — Beelink SER8 (32 GB):** يشغّل Home Assistant وFrigate ونموذج 7B على Ollama على صندوق واحد. نحو ‎$650‎ لتكوين ‎32 GB / 1 TB‎، رغم أن الأسعار تختلف حسب البائع — راجع السعر الحالي.',
          '**الأفضل اقتصاديًا — Beelink EQ14 أو GMKtec G3 Plus (Intel N150):** يشغّل Home Assistant مع نموذج صغير (1–3B) بنحو ‎$180–220‎.',
          '**الأفضل للذكاء الاصطناعي المحلي — GEEKOM A9 Max (Ryzen AI 9 HX 370):** أقوى iGPU وNPU للرؤية على الجهاز؛ عادةً بين ‎$1,099‎ و‎$1,299‎ حسب التكوين والبائع.',
        ],
        affiliateLinks: [
          { label: 'راجع سعر SER8 ←', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'راجع سعر EQ14 ←', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'راجع سعر A9 Max ←', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: 'الأسعار كما في أغسطس 2026 — تتغيّر أسعار mini PC بسرعة وتختلف حسب البائع والتكوين؛ تأكد من السعر الحالي قبل الشراء.',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'ما تحتاجه لـ HA + LLM على صندوق واحد',
        content:
          '**تحتاج RAM كافيًا لاستيعاب النموذج مع Home Assistant، وiGPU أو NPU قادرة لإبقاء النموذج سريع الاستجابة.** تردد CPU ثانوي لهذا حمل العمل.',
        items: [
          'RAM: حيّز كافٍ لحجم النموذج الذي تريده مع المركز والإضافات.',
          'الرسومات/NPU: GPU متكاملة أو NPU قادرة تخفض زمن استجابة LLM وWhisper.',
          'التخزين: مساحة للتسجيلات إذا شغّلت أيضًا Frigate — راجع [كاميرات الأمان بالذكاء الاصطناعي المحلي](/ar/smart-home/local-ai-security-camera).',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: 'مقارنة الأجهزة الخمسة',
        content:
          '**ثلاث فئات تغطي معظم الاحتياجات: N-series منخفض الطاقة للذكاء الاصطناعي الخفيف، وRyzen/Core i مع iGPU قوية لنموذج 7B، وmini PCs مجهّزة بـ NPU للذكاء الاصطناعي الفعال على الجهاز.** فيما يلي الغرض من كل جهاز من الأجهزة الخمسة المحددة في هذا الدليل، بناءً على مواصفاته المنشورة — وليس اختبارات مستقلة أجرتها PromptQuorum.',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'الأفضل شاملًا لـ Home Assistant + نموذج 7B',
            verdict:
              'بمعالج Ryzen 7 8845HS وiGPU من طراز Radeon 780M، من المتوقع أن يكون هذا أقوى خيار جهاز واحد في هذا الدليل لتشغيل Home Assistant وFrigate ونموذج من فئة 7B على Ollama معًا. iGPU طراز 780M — وليس NPU — هو من يؤدي العمل الأثقل في استدلال LLM المحلي.',
            pros: [
              'GPU متكاملة قوية لنماذج فئة 7B',
              'تكوين 32 GB من RAM يترك حيّزًا للمركز والإضافات',
              'يتعامل مع Home Assistant وFrigate وWhisper على صندوق واحد',
              'استهلاك الطاقة عند الخمول معتدل لفئة أدائه (راجع جدول المقارنة)',
            ],
            cons: [
              'أغلى من صندوق N150',
              'استهلاك طاقة أعلى تحت حِمل الذكاء الاصطناعي مقارنةً بصندوق منخفض الطاقة',
              'مبالغ فيه إذا كنت تحتاج Home Assistant فقط دون ذكاء اصطناعي محلي',
            ],
            affiliateLinks: [{ label: 'راجع السعر ←', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'الاختيار الاقتصادي لـ Home Assistant + نموذج صغير',
            verdict:
              'شريحة Intel N150 مصمّمة بقدرة حرارية ‎6W‎ للكفاءة لا للإنتاجية — يُتوقع أن تشغّل Home Assistant ونموذجًا بحجم 1–3B بارتياح، لكن نموذج 7B سيكون على الأرجح أبطأ بوضوح على هذه الفئة من الأجهزة.',
            pros: [
              'أقل نقطة سعرية في هذا الدليل',
              'استهلاك طاقة منخفض جدًا عند الخمول، مناسب لصندوق يعمل على مدار الساعة',
              'التشغيل شبه الصامت شائع في هذه الفئة من الاستهلاك',
            ],
            cons: [
              'أبطأ في أي شيء يفوق نموذجًا صغيرًا',
              'حيّز RAM أقل من خيارات فئة Ryzen',
              'ليس خيارًا قويًا إذا كنت تخطط لإضافة Frigate مع عدة كاميرات',
            ],
            affiliateLinks: [{ label: 'راجع السعر ←', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'بديل اقتصادي لـ EQ14',
            verdict:
              'نفس فئة Intel N150 مثل EQ14، مع فارق ملحوظ هو أن ذاكرة RAM قابلة للاستبدال من المستخدم (SO-DIMM) في معظم التكوينات بدلًا من كونها ملحومة — يستحق التحقق إذا كنت تريد ترقية RAM لاحقًا.',
            pros: [
              'ملف سعر وأداء مشابه لـ EQ14',
              'RAM قابلة للترقية (SO-DIMM، حتى 32 GB) في بعض التكوينات',
              'توسعة تخزين ‎M.2‎ مزدوجة لتسجيلات Frigate',
            ],
            cons: [
              'نفس سقف أداء الذكاء الاصطناعي مثل صناديق فئة N150 الأخرى',
              'التوفر والتكوين الدقيق يختلفان حسب البائع',
            ],
            affiliateLinks: [{ label: 'راجع السعر ←', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'بديل أعلى أداءً لـ SER8',
            verdict:
              'مبني حول معالج Ryzen 9 8945HS بقدرة حرارية قابلة للتكوين تصل إلى ‎70W‎ — يُتوقع أن يقدّم إنتاجية ذكاء اصطناعي مستدامة مماثلة أو أعلى قليلًا من SER8 عند تكوينه بـ 32 GB من RAM، مقابل استهلاك طاقة أعلى تحت الحِمل.',
            pros: [
              'قدرة حرارية قابلة للتكوين لأداء مستدام أكبر تحت الحِمل',
              'نفس فئة iGPU الموجودة في SER8',
              'التسعير بدون تجهيزات يمنح مرونة في اختيار RAM/التخزين الخاص بك',
            ],
            cons: [
              'استهلاك طاقة أعلى تحت الحِمل المستمر مقارنةً بـ SER8',
              'الوحدات بدون تجهيزات تتطلب شراء RAM والتخزين بشكل منفصل',
              'السعر النهائي قد يتغيّر مع تكاليف الاستيراد',
            ],
            affiliateLinks: [{ label: 'راجع السعر ←', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: 'الأفضل للذكاء الاصطناعي المحلي والرؤية على الجهاز',
            verdict:
              'يجمع Ryzen AI 9 HX 370 بين iGPU قوية من طراز Radeon 890M وNPU مخصصة. بالنسبة لاستدلال LLM المحلي، يُتوقع أن تظل iGPU تؤدي معظم العمل — تظهر ميزة NPU في مهام الرؤية مثل كشف الأجسام في Frigate، وليس في إنتاجية LLM الخام.',
            pros: [
              'أقوى iGPU (Radeon 890M) في هذا الدليل',
              'تُخفف NPU جزءًا من عمل كشف الرؤية عن CPU/GPU',
              'أعلى سقف RAM لتشغيل نماذج أكبر إلى جانب المركز',
            ],
            cons: [
              'أعلى سعر في هذا الدليل بفارق كبير',
              'لا تسرّع NPU دردشة LLM المحلية بشكل ملموس — لا تشترِ هذا الجهاز متوقعًا تحسينًا في LLM مدفوعًا بـ NPU',
              'قدرة أكبر مما تحتاجه معظم إعدادات Home Assistant فعليًا',
            ],
            affiliateLinks: [{ label: 'راجع السعر ←', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'المقارنة',
        content:
          '**طابق الجهاز مع نموذجك المستهدف وميزانيتك.** الأسعار وأرقام استهلاك الطاقة تقريبية، مستمدة من قوائم الشركات المصنّعة ومراجعات أجهزة مستقلة اعتبارًا من أغسطس 2026 — تأكد من السعر الحالي قبل الشراء.',
        columns: ['الجهاز', 'CPU', 'GPU/iGPU', 'RAM (المختبَرة)', 'السعر التقريبي (أغسطس 2026)', 'استهلاك الطاقة عند الخمول/النموذجي', 'الأفضل لـ'],
        rows: [
          { 'الجهاز': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (متكاملة)', 'RAM (المختبَرة)': '16 GB', 'السعر التقريبي (أغسطس 2026)': '‎$189–220‎', 'استهلاك الطاقة عند الخمول/النموذجي': '‎5–12W‎ خمول، ‎15–25W‎ تحت الحِمل', 'الأفضل لـ': 'HA + نموذج صغير' },
          { 'الجهاز': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (متكاملة)', 'RAM (المختبَرة)': '16 GB (قابلة للترقية)', 'السعر التقريبي (أغسطس 2026)': '‎$180–230‎', 'استهلاك الطاقة عند الخمول/النموذجي': '‎5–12W‎ خمول، ‎15–25W‎ تحت الحِمل', 'الأفضل لـ': 'HA + نموذج صغير، مرونة في الميزانية' },
          { 'الجهاز': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM (المختبَرة)': '32 GB', 'السعر التقريبي (أغسطس 2026)': '‎$650‎', 'استهلاك الطاقة عند الخمول/النموذجي': '‎7–10W‎ خمول، ‎45W+‎ تحت حِمل ذكاء اصطناعي مستدام', 'الأفضل لـ': 'HA + Frigate + نموذج 7B' },
          { 'الجهاز': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'نفس فئة SER8', 'RAM (المختبَرة)': '32 GB (اختيارك)', 'السعر التقريبي (أغسطس 2026)': '‎$649‎ (32GB) / ‎$439‎ بدون تجهيزات', 'استهلاك الطاقة عند الخمول/النموذجي': '‎7–9W‎ خمول، ‎54–90W‎ تحت حِمل مستمر', 'الأفضل لـ': 'مشابه لـ SER8، أكثر قابلية للتكوين' },
          { 'الجهاز': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM (المختبَرة)': '32 GB', 'السعر التقريبي (أغسطس 2026)': '‎$1,099–1,299‎', 'استهلاك الطاقة عند الخمول/النموذجي': '‎7–9W‎ خمول، ‎20–34W‎ استخدام نموذجي', 'الأفضل لـ': 'أقوى ذكاء اصطناعي على الجهاز + رؤية' },
        ],
        items: [
          'لـ VRAM وعمق التكميم، راجع متعدد العناقيد [أفضل mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-ar.webp',
        imageCaption: 'فئات الحاسوب المصغر لذكاء Home Assistant -- إرشادات الذاكرة وما يمكن تشغيله',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: 'ماذا يستطيع كل صنف تشغيله فعليًا؟',
        content:
          '**يعكس الجدول أدناه الأداء المتوقع بناءً على المواصفات المنشورة لكل شريحة، وليس اختبارات أداء قِيست بشكل مستقل من PromptQuorum — اعتبره نقطة انطلاق لتحديد حجم إعدادك، لا ضمانًا.**',
        columns: ['فئة الأجهزة', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper (الصوت)', 'Frigate (الرؤية)'],
        rows: [
          { 'فئة الأجهزة': 'Intel N150 (EQ14، G3 Plus)', 'Home Assistant': 'سلس', 'Ollama 3B': 'قابل للاستخدام', 'Ollama 7–8B': 'بطيء، على الأرجح غير مريح', 'Whisper (الصوت)': 'قابل للاستخدام لمقاطع قصيرة', 'Frigate (الرؤية)': 'كشف أساسي، دون تسريع NPU' },
          { 'فئة الأجهزة': 'Ryzen 7/9 8845HS/8945HS (SER8، UM890 Pro)', 'Home Assistant': 'سلس', 'Ollama 3B': 'سلس', 'Ollama 7–8B': 'قابل للاستخدام بالتكميم المعتاد', 'Whisper (الصوت)': 'سلس', 'Frigate (الرؤية)': 'جيد، مسرّع بـ GPU' },
          { 'فئة الأجهزة': 'Ryzen AI 9 HX 370 (A9 Max)', 'Home Assistant': 'سلس', 'Ollama 3B': 'سلس', 'Ollama 7–8B': 'سلس', 'Whisper (الصوت)': 'سلس', 'Frigate (الرؤية)': 'الأفضل في هذا الدليل، بمساعدة NPU' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: 'الأفضل لـ…',
        items: [
          '**ميزانية أقل من ‎$250‎:** جهاز Intel N150 (Beelink EQ14 أو GMKtec G3 Plus) يغطي Home Assistant مع نموذج صغير.',
          '**تريد نموذج 7B وFrigate معًا:** انتقل إلى mini PC بـ Ryzen 7/9 مع iGPU قوية — Beelink SER8 أو Minisforum UM890 Pro.',
          '**تريد جهازًا هادئًا منخفض الطاقة يعمل على مدار الساعة ولا تحتاج نموذجًا كبيرًا:** جهاز N150 يستهلك أقل عند الخمول وغالبًا ما يكون شبه صامت.',
          '**تريد أقوى ذكاء اصطناعي على الجهاز ورؤية:** الجمع بين iGPU قوية وNPU في GEEKOM A9 Max هو الخيار الأكثر قدرة هنا، بأعلى سعر.',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'الميزانية مقابل الأداء',
        content:
          '**اشترِ أرخص جهاز يشغّل نموذجك المستهدف بزمن استجابة مقبول — عادةً mini PC بـ Ryzen/Core i مع iGPU قوية لنموذج 7B.** لا تنفق زيادةً على قدرة CPU أو NPU لن تستخدمها — راجع [أيهما يجب أن تشتري؟](#which-to-buy) أدناه للحصول على توصية مباشرة حسب حالة الاستخدام.',
        items: [
          'الميزانية: صندوق N150 منخفض الطاقة لـ HA مع نموذج صغير جدًا.',
          'متوازن: mini PC بـ Ryzen 7/9 مع iGPU قوية لنموذج 7B.',
          'لقرار الأجهزة الأوسع (Pi مقابل mini PC مقابل NAS)، راجع [أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-ar.webp',
        imageCaption: 'اختيار الميزانية مقابل الأداء -- اشترِ أرخص جهاز يناسب نموذجك',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: 'أيهما يجب أن تشتري؟',
        content:
          '**طابق الجهاز مع حِمل عملك الفعلي بدلًا من شراء أكثر وحدة قدرةً متاحة.**',
        items: [
          'إذا كان Home Assistant هو حِمل عملك الوحيد: اشترِ Beelink EQ14 أو GMKtec G3 Plus.',
          'إذا كنت تريد Home Assistant مع نموذج 7B محلي على صندوق واحد: اشترِ Beelink SER8 (تكوين 32 GB).',
          'إذا كان أداء الذكاء الاصطناعي المحلي هو الأولوية وتسمح الميزانية: انتقل إلى GEEKOM A9 Max أو Minisforum UM890 Pro.',
          'إذا كنت تشغّل Frigate مع عدة كاميرات: أعطِ الأولوية لـ RAM والتخزين للتسجيلات على سرعة CPU الخام — راجع [كاميرات الأمان بالذكاء الاصطناعي المحلي](/ar/smart-home/local-ai-security-camera) لتخطيط التخزين.',
        ],
        callouts: [
          { type: 'warning', text: 'لا تشترِ SER8 أو جهازًا بسعر مماثل إذا كنت تريد فقط Home Assistant وبعض الأتمتة — جهاز N150 أرخص كثيرًا وكافٍ لهذا الحِمل.' },
          { type: 'warning', text: 'لا تشترِ جهاز N150 إذا كان هدفك نموذجًا سريع الاستجابة من فئة 7B مع Whisper وFrigate يعملان في الوقت نفسه — توقّع أن يبدو ذلك بطيئًا مع هذا الحِمل المدمج.' },
          { type: 'warning', text: 'لا تشترِ GEEKOM A9 Max متوقعًا أن تسرّع NPU الخاصة به دردشة LLM المحلية — تؤدي iGPU معظم ذلك العمل؛ تظهر فائدة NPU بشكل أساسي في مهام الرؤية مثل Frigate.' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: 'التكلفة الإجمالية واستهلاك الطاقة',
        content:
          '**الأجهزة هي التكلفة الحقيقية الوحيدة — البرمجيات مجانية.** Home Assistant وOllama ونموذج محلي وFrigate جميعها مجانية ومفتوحة المصدر؛ mini PC نفسه هو بند الميزانية الوحيد.',
        items: [
          '**تكلفة الأجهزة حسب الفئة:** جهاز N150 اقتصادي نحو ‎$180–230‎؛ جهاز Ryzen 7/9 متوازن (32 GB) نحو ‎$650‎؛ جهاز NPU متقدم نحو ‎$1,099–1,299‎.',
          '**استهلاك الطاقة لجهاز يعمل على مدار الساعة:** استهلاك الخمول متقارب بشكل عام بين الأجهزة الخمسة في هذا الدليل (نحو ‎5–10W‎)، لكن حِمل استدلال الذكاء الاصطناعي المستمر يتفاوت أكثر — يستهلك جهاز N150 أقل بوضوح تحت الحِمل (نحو ‎15–25W‎) مقارنةً بجهاز Ryzen 7/9 يشغّل نموذج 7B (نحو ‎45W‎ أو أكثر). بالنسبة لجهاز يعمل على مدار الساعة، يتراكم هذا الفارق على مدى عام أكثر من أداء الاختبارات القصوى.',
          'أرقام القدرة الحرارية (TDP) المنشورة من الشركة المصنّعة تحدد الحد الأعلى (N150: ‎6W‎؛ 8845HS/8945HS: ‎45W‎، قابلة للتكوين حتى ‎70W‎ على بعض اللوحات؛ HX 370: قابلة للتكوين ‎15–54W‎) — يعتمد الاستهلاك الفعلي على حِمل العمل وإعدادات وضع الطاقة في BIOS.',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'ملاحظات الإعداد',
        content:
          '**شغّل Home Assistant OS أو حاوية، ثبّت Ollama، وتأكد من استخدام iGPU/NPU للاستنتاج.** ابقِ الصندوق متصلًا بالشبكة سلكيًا للموثوقية.',
        items: [
          'ثبّت Home Assistant — راجع [البدء](/ar/smart-home/home-assistant-getting-started).',
          'ثبّت Ollama واسحب نموذجًا صغيرًا — راجع [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama).',
          'اربط Ollama بـ Home Assistant — راجع [دليل تكامل Ollama](/ar/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'هل يستطيع mini PC واحد تشغيل Home Assistant ونموذج LLM محلي معًا؟', a: 'نعم. mini PC مع RAM كافٍ وGPU متكاملة أو NPU قادرة يشغّل Home Assistant ونموذج LLM محلي صغيرًا معًا، ويمكنه إضافة Whisper وFrigate. هذا النهج بصندوق واحد هو أبسط طريقة للحصول على منزل ذكي بذكاء اصطناعي محلي.' },
          { q: 'كم من RAM أحتاج؟', a: 'كافٍ لاستيعاب نموذجك المستهدف مع Home Assistant وأي إضافات. نموذج صغير يحتاج RAM متواضعًا، بينما يستفيد تشغيل نموذج 7B بشكل مريح إلى جانب المركز من RAM وافر. طابق RAM مع أكبر نموذج تخطط لتشغيله.' },
          { q: 'Intel أم AMD لـ mini PC بـ Home Assistant؟', a: 'كلاهما يعمل. صندوق Intel N-series منخفض الطاقة هو الأرخص للاستخدام الخفيف؛ mini PC بـ AMD Ryzen أو Intel Core i مع GPU متكاملة قوية يتعامل بشكل أفضل مع نموذج 7B. اختر حسب حجم النموذج وزمن الاستجابة الذي تريده.' },
          { q: 'ما أرخص mini PC يشغّل نموذج LLM محلي؟', a: 'Intel N-series mini PC منخفض الطاقة هو الأرخص الذي يمكنه تشغيل Home Assistant مع نموذج صغير جدًا، وإن كانت الاستجابات أبطأ. لمساعد 7B أسرع استجابةً، ترقَّ إلى Ryzen أو Core i mini PC مع iGPU قوية.' },
          { q: 'كم تبلغ تكلفة الإعداد الكامل، شاملة البرمجيات؟', a: 'mini PC هو التكلفة الحقيقية الوحيدة. Home Assistant وOllama ونموذج محلي وFrigate جميعها مجانية ومفتوحة المصدر، لذا يكون الإجمالي هو ما تدفعه مقابل الأجهزة فقط — من نحو ‎$180‎ لجهاز N150 إلى نحو ‎$1,200+‎ لأقوى خيار مزوّد بـ NPU في هذا الدليل.' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: 'نظرة تفصيلية على كل mini PC',
        content:
          '**لكل mini PC أدناه صفحة مخصّصة تغطي التكوين والتوافق واعتبارات الشراء.**',
        items: [
          '[Beelink SER8 — النظرة التفصيلية الكاملة](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — النظرة التفصيلية الكاملة](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — النظرة التفصيلية الكاملة](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — النظرة التفصيلية الكاملة](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — النظرة التفصيلية الكاملة](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home) — Pi مقابل mini PC مقابل NAS مقابل خادم',
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — ما يشغّله الصندوق',
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — ربط النموذج',
          '[أفضل Mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm) — متعدد العناقيد: VRAM وعمق الأجهزة',
          '[كاميرات الأمان بالذكاء الاصطناعي المحلي](/ar/smart-home/local-ai-security-camera) — تخطيط التخزين وعدد الكاميرات لـ Frigate',
          '[طاقة شمسية للشرفة بدون سحابة مع Home Assistant](/ar/balcony-solar/home-assistant-balcony-solar-no-cloud) — مراقبة الإنتاج الشمسي محلياً من نفس الصندوق',
          '[مراجعة NVIDIA Jetson Orin Nano للذكاء الاصطناعي في المنزل الذكي (2027)](/ar/smart-home/nvidia-jetson-orin-nano-smart-home-review) — بديل بمعالج رسومات لجهاز mini PC',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل Mini PCs لـ Home Assistant + الذكاء الاصطناعي المحلي (2026)',
      description: 'أفضل mini PC لـ Home Assistant 2026: Beelink SER8 (نحو ‎$650‎) لـ Frigate + نموذج 7B؛ صناديق Intel N150 (نحو ‎$180–230‎) اقتصادية؛ GEEKOM A9 Max (نحو ‎$1,099+‎) لذكاء اصطناعي على الجهاز. مقارنة جنبًا إلى جنب.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'ar',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'نموذج LLM محلي' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يستطيع mini PC واحد تشغيل Home Assistant ونموذج LLM محلي معًا؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. mini PC مع RAM كافٍ وiGPU أو NPU قادرة يشغّل Home Assistant ونموذج LLM محلي صغيرًا معًا، ويمكنه إضافة Whisper وFrigate.' } },
        { '@type': 'Question', name: 'كم من RAM أحتاج؟', acceptedAnswer: { '@type': 'Answer', text: 'كافٍ لاستيعاب نموذجك المستهدف مع Home Assistant والإضافات. نموذج صغير يحتاج RAM متواضعًا؛ تشغيل نموذج 7B بشكل مريح يستفيد من RAM وافر.' } },
        { '@type': 'Question', name: 'Intel أم AMD لـ mini PC بـ Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'كلاهما يعمل. Intel N-series منخفض الطاقة هو الأرخص للاستخدام الخفيف؛ AMD Ryzen أو Intel Core i مع iGPU قوية يتعامل بشكل أفضل مع نموذج 7B.' } },
        { '@type': 'Question', name: 'ما أرخص mini PC يشغّل نموذج LLM محلي؟', acceptedAnswer: { '@type': 'Answer', text: 'Intel N-series منخفض الطاقة يمكنه تشغيل Home Assistant مع نموذج صغير جدًا، وإن كانت الاستجابات أبطأ. لمساعد 7B أسرع، ترقَّ إلى Ryzen أو Core i مع iGPU قوية.' } },
        { '@type': 'Question', name: 'كم تبلغ تكلفة الإعداد الكامل، شاملة البرمجيات؟', acceptedAnswer: { '@type': 'Answer', text: 'mini PC هو التكلفة الحقيقية الوحيدة. Home Assistant وOllama ونموذج محلي وFrigate جميعها مجانية ومفتوحة المصدر، لذا يكون الإجمالي هو ما تدفعه مقابل الأجهزة فقط.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Beste Mini-PCs für Home Assistant + lokale KI (2026)',
    seoTitle: 'Bester Mini-PC für Home Assistant + lokale KI 2026',
    intro:
      'Der beste Mini-PC für Home Assistant plus ein lokales LLM auf einem Gerät ist 2026 der Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) für rund 650 €, der den Hub, Frigate und ein 7B-Modell über Ollama betreibt. Mit knapperem Budget betreibt ein Intel-N150-Gerät wie der Beelink EQ14 oder GMKtec G3 Plus (rund 180–230 €) Home Assistant und ein kleines Modell. Für die stärkste On-Device-KI und Bildverarbeitung geht der GEEKOM A9 Max (Ryzen AI 9 HX 370, rund 1.099–1.299 €) noch einen Schritt weiter. Diese Kaufberatung vergleicht alle fünf konkreten Geräte direkt nebeneinander, gibt eine klare Empfehlung für jeden Anwendungsfall und behandelt Einrichtungshinweise – mit Querverweis auf den local-llms-Hardware-Leitfaden für VRAM-Tiefe.',
    metaDescription:
      'Bester Mini-PC für Home Assistant 2026: Beelink SER8 (~650 €) für Frigate + ein 7B-Modell; Intel-N150-Geräte (~180–230 €) fürs Budget; GEEKOM A9 Max (~1.099 €+) für On-Device-KI. Direkt verglichen.',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-de.webp',
    twitterDescription:
      'Bester Mini-PC für Home Assistant 2026: Beelink SER8 (~650 €) betreibt Frigate + ein 7B-Modell auf Ollama; günstige Intel-N150-Geräte (~180–230 €); GEEKOM A9 Max (~1.099 €+) für On-Device-KI. 5 Geräte im Vergleich.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die einen Mini-PC für Home Assistant und lokale KI wählen',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'bester mini pc home assistant lokale ki',
      'mini pc home assistant llm',
      'home assistant lokale ki hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**Der beste Allround-Mini-PC für Home Assistant plus ein lokales LLM ist 2026 der Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) für rund 650 € – er betreibt den Hub, Frigate und ein 7B-Modell auf Ollama auf einem Gerät.** Für einen günstigen oder nahezu lautlosen Aufbau betreibt ein Intel-N150-Gerät wie der Beelink EQ14 oder GMKtec G3 Plus (rund 180–230 €) Home Assistant und ein kleines Modell. Für die stärkste On-Device-KI geht der GEEKOM A9 Max (rund 1.099–1.299 €) noch einen Schritt weiter. Priorisieren Sie RAM und die iGPU für die KI-Latenz über die rohe CPU-Taktung.',
    quickAnswerTop: {
      de: {
        question: 'Welcher Mini-PC ist 2026 am besten für Home Assistant und lokale KI?',
        answer:
          'Für die meisten ist der Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB, rund 650 €) die beste Wahl – seine starke iGPU betreibt ein 7B-Modell auf Ollama neben Home Assistant, Frigate und Whisper. Mit knapperem Budget oder für ein nahezu lautloses Gerät betreibt ein Intel-N150-Mini-PC wie der Beelink EQ14 oder GMKtec G3 Plus (rund 180–230 €) Home Assistant plus ein kleines Modell. Für die stärkste On-Device-KI und Bildverarbeitung geht ein Ryzen-AI-Mini-PC wie der GEEKOM A9 Max (rund 1.099–1.299 €) noch einen Schritt weiter.',
        bullets: [
          'Beste Allround-Wahl: Beelink SER8 (Ryzen 7 8845HS, 32 GB) ca. 650 € – HA + Frigate + ein 7B-Modell auf Ollama',
          'Budget / nahezu lautlos: Intel N150 (Beelink EQ14, GMKtec G3 Plus) ca. 180–230 € – HA + ein kleines Modell',
          'Beste Wahl für lokale KI: GEEKOM A9 Max (Ryzen AI 9 HX 370) ca. 1.099–1.299 € – stärkste iGPU + NPU für Bildverarbeitung',
          'RAM und eine leistungsfähige iGPU über die CPU-Taktung priorisieren; mehr RAM fasst ein größeres Modell',
          'Für VRAM-Tiefe siehe den local-llms-Hardware-Leitfaden',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Schnellauswahl', anchor: 'quick-picks' },
      { label: 'Was Sie für HA + LLM brauchen', anchor: 'what-you-need' },
      { label: 'Die 5 Mini-PCs im Vergleich', anchor: 'mini-pc-picks' },
      { label: 'Vergleich', anchor: 'comparison' },
      { label: 'Was kann jede Klasse wirklich?', anchor: 'ai-capabilities' },
      { label: 'Ideal Für…', anchor: 'best-for' },
      { label: 'Budget vs Leistung', anchor: 'budget-performance' },
      { label: 'Welches sollten Sie kaufen?', anchor: 'which-to-buy' },
      { label: 'Gesamtkosten und Stromverbrauch', anchor: 'cost-and-power' },
      { label: 'Einrichtungshinweise', anchor: 'setup-notes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Der beste Mini-PC für Home Assistant plus ein lokales LLM hat reichlich RAM und eine leistungsfähige iGPU oder NPU, um den Hub und ein kleines Modell auf einem Gerät zu betreiben.' },
      { type: 'plain-terms', content: 'Ein Mini-PC ist ein kleiner, stromsparender Computer, der Ihr ganzes Smart Home plus ein lokales KI-Modell betreiben kann. Die zwei wichtigsten Dinge sind RAM (genug, um Modell und Hub zu fassen) und ein leistungsfähiger Grafikchip oder eine NPU (um die KI reaktionsschnell zu halten). Die CPU-Taktung zählt weniger.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'RAM und eine leistungsfähige integrierte GPU oder NPU über die rohe CPU-Taktung priorisieren',
          'Ein stromsparender Intel-N150-Mini-PC (~180–220 €) betreibt Home Assistant und ein kleines Modell',
          'Ein Ryzen-7/9-Mini-PC mit starker iGPU (~650 €) bewältigt ein 7B-Modell neben dem Hub',
          'Ein Ryzen-AI-Mini-PC mit NPU (~1.099 €+) ist die stärkste Option für On-Device-KI und Bildverarbeitung',
          'Ein Mini-PC kann Home Assistant, Ollama, Whisper und Frigate zusammen betreiben',
          'Für VRAM-Details siehe den clusterübergreifenden local-llms-Hardware-Leitfaden',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Schnellauswahl',
        content:
          '**Drei Konfigurationen decken die meisten Home-Assistant-plus-lokale-KI-Aufbauten ab.** Wählen Sie nach Budget und der gewünschten Modellgröße.',
        items: [
          '**Beste Allround-Wahl — Beelink SER8 (32 GB):** betreibt Home Assistant, Frigate und ein 7B-Modell auf Ollama auf einem Gerät. Rund 650 € für die Konfiguration mit 32 GB / 1 TB, wobei die Preise je nach Händler variieren – aktuellen Preis prüfen.',
          '**Beste Budget-Wahl — Beelink EQ14 oder GMKtec G3 Plus (Intel N150):** betreibt Home Assistant plus ein kleines Modell (1–3B) für rund 180–220 €.',
          '**Beste Wahl für lokale KI — GEEKOM A9 Max (Ryzen AI 9 HX 370):** stärkste iGPU und eine NPU für On-Device-Bildverarbeitung; üblicherweise 1.099–1.299 € je nach Konfiguration und Händler.',
        ],
        affiliateLinks: [
          { label: 'SER8-Preis prüfen →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'EQ14-Preis prüfen →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'A9-Max-Preis prüfen →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: 'Preise Stand August 2026 – Mini-PC-Preise ändern sich schnell und variieren je nach Händler und Konfiguration; prüfen Sie den aktuellen Preis vor dem Kauf.',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'Was Sie für HA + LLM auf einem Gerät brauchen',
        content:
          '**Sie brauchen genug RAM, um das Modell plus Home Assistant zu fassen, und eine leistungsfähige iGPU oder NPU, um das Modell reaktionsschnell zu halten.** Die CPU-Taktung ist für diesen Workload zweitrangig.',
        items: [
          'RAM: genug Reserve für die gewünschte Modellgröße plus Hub und Add-ons.',
          'Grafik/NPU: eine leistungsfähige integrierte GPU oder NPU senkt die LLM- und Whisper-Latenz.',
          'Speicher: Platz für Aufnahmen, wenn Sie auch Frigate betreiben – siehe [lokale KI-Sicherheitskameras](/de/smart-home/local-ai-security-camera).',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: 'Die 5 Mini-PCs im Vergleich',
        content:
          '**Drei Klassen decken die meisten Bedürfnisse ab: stromsparende N-Serie für leichte KI, Ryzen/Core-i mit starker iGPU für ein 7B-Modell und NPU-bestückte Mini-PCs für effiziente On-Device-KI.** Im Folgenden sehen Sie, wofür jedes der fünf konkreten Geräte dieser Übersicht ausgelegt ist – basierend auf den veröffentlichten Spezifikationen, nicht auf unabhängigen Tests von PromptQuorum.',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Beste Allround-Wahl für Home Assistant + ein 7B-Modell',
            verdict:
              'Mit einem Ryzen 7 8845HS und einer Radeon-780M-iGPU dürfte dies die stärkste Einzelgerät-Option dieser Übersicht sein, um Home Assistant, Frigate und ein Modell der 7B-Klasse gemeinsam auf Ollama zu betreiben. Die 780M-iGPU – nicht eine NPU – übernimmt die Hauptarbeit bei der lokalen LLM-Inferenz.',
            pros: [
              'Starke integrierte GPU für Modelle der 7B-Klasse',
              'Die 32-GB-RAM-Konfiguration lässt Spielraum für den Hub plus Add-ons',
              'Bewältigt Home Assistant, Frigate und Whisper auf einem Gerät',
              'Leerlauf-Stromverbrauch ist für diese Leistungsklasse moderat (siehe Vergleichstabelle)',
            ],
            cons: [
              'Teurer als ein N150-Gerät',
              'Höherer Stromverbrauch unter KI-Last als ein stromsparendes Gerät',
              'Überdimensioniert, wenn Sie nur Home Assistant ohne lokale KI benötigen',
            ],
            affiliateLinks: [{ label: 'Preis prüfen →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Budget-Wahl für Home Assistant + ein kleines Modell',
            verdict:
              'Der Intel N150 ist ein Chip mit 6 W TDP, der auf Effizienz statt Durchsatz ausgelegt ist – erwartungsgemäß betreibt er Home Assistant und ein 1–3B-Modell komfortabel, ein 7B-Modell dürfte auf dieser Hardwareklasse jedoch spürbar langsamer laufen.',
            pros: [
              'Niedrigster Preispunkt dieser Übersicht',
              'Sehr niedriger Leerlauf-Stromverbrauch, gut geeignet für ein 24/7-Gerät',
              'Nahezu lautloser Betrieb ist in dieser Leistungsklasse üblich',
            ],
            cons: [
              'Langsamer bei allem oberhalb eines kleinen Modells',
              'Weniger RAM-Spielraum als die Ryzen-Klasse',
              'Weniger geeignet, wenn Sie Frigate mit mehreren Kameras hinzufügen möchten',
            ],
            affiliateLinks: [{ label: 'Preis prüfen →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'Budget-Alternative zum EQ14',
            verdict:
              'Gleiche Intel-N150-Klasse wie der EQ14, mit dem bemerkenswerten Unterschied, dass der RAM bei den meisten Konfigurationen als vom Nutzer austauschbares SO-DIMM statt verlötet ausgeführt ist – prüfenswert, falls Sie den RAM später aufrüsten möchten.',
            pros: [
              'Ähnliches Preis-Leistungs-Profil wie der EQ14',
              'Aufrüstbarer RAM (SO-DIMM, bis 32 GB) bei manchen Konfigurationen',
              'Doppelte M.2-Speichererweiterung für Frigate-Aufnahmen',
            ],
            cons: [
              'Gleiche KI-Leistungsobergrenze wie andere Geräte der N150-Klasse',
              'Verfügbarkeit und genaue Konfiguration variieren je nach Händler',
            ],
            affiliateLinks: [{ label: 'Preis prüfen →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'Leistungsalternative zum SER8',
            verdict:
              'Aufgebaut um einen Ryzen 9 8945HS mit konfigurierbarem TDP bis 70 W – erwartungsgemäß liefert dies mit 32 GB RAM konfiguriert einen ähnlichen oder etwas höheren nachhaltigen KI-Durchsatz als der SER8, auf Kosten eines höheren Stromverbrauchs unter Last.',
            pros: [
              'Konfigurierbares TDP für mehr nachhaltige Leistung unter Last',
              'Gleiche iGPU-Klasse wie der SER8',
              'Barebone-Preisgestaltung gibt Flexibilität bei RAM/Speicher',
            ],
            cons: [
              'Höherer Stromverbrauch unter Dauerlast als der SER8',
              'Barebone-Einheiten benötigen separat gekauften RAM und Speicher',
              'Der Endpreis kann sich mit Importkosten ändern',
            ],
            affiliateLinks: [{ label: 'Preis prüfen →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: 'Beste Wahl für lokale KI und On-Device-Bildverarbeitung',
            verdict:
              'Der Ryzen AI 9 HX 370 kombiniert eine starke Radeon-890M-iGPU mit einer dedizierten NPU. Für die lokale LLM-Inferenz übernimmt erwartungsgemäß weiterhin die iGPU den Großteil der Arbeit – der Vorteil der NPU zeigt sich bei Bildaufgaben wie der Objekterkennung von Frigate, nicht beim reinen LLM-Durchsatz.',
            pros: [
              'Stärkste iGPU (Radeon 890M) dieser Übersicht',
              'Die NPU entlastet CPU/GPU bei Bilderkennungsaufgaben',
              'Höchste RAM-Obergrenze für größere Modelle neben dem Hub',
            ],
            cons: [
              'Höchster Preis dieser Übersicht, mit deutlichem Abstand',
              'Die NPU beschleunigt lokalen LLM-Chat nicht spürbar – kaufen Sie dieses Gerät nicht in Erwartung eines NPU-gestützten LLM-Boosts',
              'Mehr Leistung, als die meisten Home-Assistant-Aufbauten tatsächlich benötigen',
            ],
            affiliateLinks: [{ label: 'Preis prüfen →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Vergleich',
        content:
          '**Passen Sie das Gerät an Ihr Zielmodell und Budget an.** Preise und Verbrauchsangaben sind Näherungswerte, entnommen aus Herstellerangaben und unabhängigen Hardware-Tests, Stand August 2026 – prüfen Sie den aktuellen Preis vor dem Kauf.',
        columns: ['Modell', 'CPU', 'GPU/iGPU', 'RAM (getestet)', 'Preis ca. (Aug. 2026)', 'Leerlauf-/typischer Verbrauch', 'Ideal für'],
        rows: [
          { 'Modell': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integriert)', 'RAM (getestet)': '16 GB', 'Preis ca. (Aug. 2026)': '~189–220 €', 'Leerlauf-/typischer Verbrauch': '~5–12W Leerlauf, ~15–25W unter Last', 'Ideal für': 'HA + ein kleines Modell' },
          { 'Modell': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integriert)', 'RAM (getestet)': '16 GB (aufrüstbar)', 'Preis ca. (Aug. 2026)': '~180–230 €', 'Leerlauf-/typischer Verbrauch': '~5–12W Leerlauf, ~15–25W unter Last', 'Ideal für': 'HA + ein kleines Modell, Budget-Flexibilität' },
          { 'Modell': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM (getestet)': '32 GB', 'Preis ca. (Aug. 2026)': '~650 €', 'Leerlauf-/typischer Verbrauch': '~7–10W Leerlauf, ~45W+ unter nachhaltiger KI-Last', 'Ideal für': 'HA + Frigate + ein 7B-Modell' },
          { 'Modell': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'Gleiche Klasse wie SER8', 'RAM (getestet)': '32 GB (eigene Wahl)', 'Preis ca. (Aug. 2026)': '~649 € (32GB) / ~439 € Barebone', 'Leerlauf-/typischer Verbrauch': '~7–9W Leerlauf, ~54–90W unter Dauerlast', 'Ideal für': 'Ähnlich SER8, konfigurierbarer' },
          { 'Modell': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM (getestet)': '32 GB', 'Preis ca. (Aug. 2026)': '~1.099–1.299 €', 'Leerlauf-/typischer Verbrauch': '~7–9W Leerlauf, ~20–34W typische Nutzung', 'Ideal für': 'Stärkste On-Device-KI + Bildverarbeitung' },
        ],
        items: [
          'Für VRAM und Quantisierungs-Tiefe siehe clusterübergreifend [beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-de.webp',
        imageCaption: 'Mini-PC-Klassen für Home Assistant KI -- RAM-Empfehlung und Leistungsfähigkeit',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: 'Was kann jede Klasse wirklich?',
        content:
          '**Die folgende Tabelle spiegelt die erwartete Leistung basierend auf den veröffentlichten Spezifikationen jedes Chips wider – nicht unabhängig von PromptQuorum gemessene Benchmarks. Betrachten Sie sie als Ausgangspunkt für die Dimensionierung Ihres Aufbaus, nicht als Garantie.**',
        columns: ['Hardware-Klasse', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper (Sprache)', 'Frigate (Bildverarbeitung)'],
        rows: [
          { 'Hardware-Klasse': 'Intel N150 (EQ14, G3 Plus)', 'Home Assistant': 'Flüssig', 'Ollama 3B': 'Nutzbar', 'Ollama 7–8B': 'Langsam, wahrscheinlich nicht komfortabel', 'Whisper (Sprache)': 'Nutzbar für kurze Clips', 'Frigate (Bildverarbeitung)': 'Grunderkennung, keine NPU-Beschleunigung' },
          { 'Hardware-Klasse': 'Ryzen 7/9 8845HS/8945HS (SER8, UM890 Pro)', 'Home Assistant': 'Flüssig', 'Ollama 3B': 'Flüssig', 'Ollama 7–8B': 'Nutzbar bei typischer Quantisierung', 'Whisper (Sprache)': 'Flüssig', 'Frigate (Bildverarbeitung)': 'Gut, GPU-beschleunigt' },
          { 'Hardware-Klasse': 'Ryzen AI 9 HX 370 (A9 Max)', 'Home Assistant': 'Flüssig', 'Ollama 3B': 'Flüssig', 'Ollama 7–8B': 'Flüssig', 'Whisper (Sprache)': 'Flüssig', 'Frigate (Bildverarbeitung)': 'Beste dieser Übersicht, NPU-unterstützt' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: 'Ideal Für…',
        items: [
          '**Budget unter 250 €:** ein Intel-N150-Gerät (Beelink EQ14 oder GMKtec G3 Plus) deckt Home Assistant plus ein kleines Modell ab.',
          '**Möchten Sie ein 7B-Modell und Frigate zusammen:** steigen Sie auf einen Ryzen-7/9-Mini-PC mit starker iGPU um – den Beelink SER8 oder den Minisforum UM890 Pro.',
          '**Möchten Sie ein leises, stromsparendes 24/7-Gerät und benötigen kein großes Modell:** ein N150-Gerät verbraucht im Leerlauf am wenigsten und ist oft nahezu lautlos.',
          '**Möchten Sie die stärkste On-Device-KI und Bildverarbeitung:** die Kombination aus starker iGPU und NPU des GEEKOM A9 Max ist hier die leistungsfähigste Option, zum höchsten Preis.',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Budget vs Leistung',
        content:
          '**Kaufen Sie das günstigste Gerät, das Ihr Zielmodell bei akzeptabler Latenz betreibt – meist ein Ryzen/Core-i-Mini-PC mit starker iGPU für ein 7B-Modell.** Geben Sie nicht zu viel für CPU- oder NPU-Leistung aus, die Sie nicht nutzen – siehe [Welches sollten Sie kaufen?](#which-to-buy) unten für eine direkte Empfehlung je Anwendungsfall.',
        items: [
          'Budget: ein stromsparendes N150-Gerät für HA plus ein winziges Modell.',
          'Ausgewogen: ein Ryzen-7/9-Mini-PC mit starker iGPU für ein 7B-Modell.',
          'Für die breitere Hardware-Entscheidung (Pi vs Mini-PC vs NAS) siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-de.webp',
        imageCaption: 'Budget vs. Leistung: Die Wahl -- Kaufe die günstigste Box, die zu deinem Modell passt',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: 'Welches sollten Sie kaufen?',
        content:
          '**Passen Sie das Gerät an Ihren tatsächlichen Workload an, statt das leistungsfähigste verfügbare Gerät zu kaufen.**',
        items: [
          'Wenn Home Assistant Ihr einziger Workload ist: kaufen Sie den Beelink EQ14 oder den GMKtec G3 Plus.',
          'Wenn Sie Home Assistant plus ein lokales 7B-Modell auf einem Gerät möchten: kaufen Sie den Beelink SER8 (32-GB-Konfiguration).',
          'Wenn lokale KI-Leistung Priorität hat und das Budget es zulässt: steigen Sie auf den GEEKOM A9 Max oder den Minisforum UM890 Pro um.',
          'Wenn Sie Frigate mit mehreren Kameras betreiben: priorisieren Sie RAM und Speicher für Aufnahmen gegenüber roher CPU-Geschwindigkeit – siehe [lokale KI-Sicherheitskameras](/de/smart-home/local-ai-security-camera) zur Speicherplanung.',
        ],
        callouts: [
          { type: 'warning', text: 'Kaufen Sie den SER8 oder ein ähnlich teures Gerät nicht, wenn Sie nur Home Assistant und ein paar Automatisierungen möchten – ein N150-Gerät ist deutlich günstiger und für diesen Workload ausreichend.' },
          { type: 'warning', text: 'Kaufen Sie kein N150-Gerät, wenn Ihr Ziel ein reaktionsschnelles Modell der 7B-Klasse, Whisper und Frigate gleichzeitig ist – erwarten Sie, dass sich diese kombinierte Last langsam anfühlt.' },
          { type: 'warning', text: 'Kaufen Sie den GEEKOM A9 Max nicht in der Erwartung, dass seine NPU den lokalen LLM-Chat beschleunigt – das übernimmt größtenteils die iGPU; der Vorteil der NPU zeigt sich vor allem bei Bildaufgaben wie Frigate.' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: 'Gesamtkosten und Stromverbrauch',
        content:
          '**Hardware ist die einzige echte Kostenposition – die Software ist kostenlos.** Home Assistant, Ollama, ein lokales Modell und Frigate sind alle kostenlos und Open Source; der Mini-PC selbst ist der gesamte Budgetposten.',
        items: [
          '**Hardwarekosten nach Klasse:** günstiges N150-Gerät ~180–230 €; ausgewogenes Ryzen-7/9-Gerät (32 GB) ~650 €; NPU-Spitzengerät ~1.099–1.299 €.',
          '**Stromverbrauch für ein 24/7-Gerät:** der Leerlaufverbrauch ist bei allen fünf Geräten dieser Übersicht weitgehend ähnlich (etwa 5–10W), aber die nachhaltige KI-Inferenzlast variiert stärker – ein N150-Gerät verbraucht unter Last deutlich weniger (~15–25W) als ein Ryzen-7/9-Gerät, das ein 7B-Modell betreibt (~45W oder mehr). Für ein rund um die Uhr laufendes Gerät summiert sich dieser Unterschied über ein Jahr mehr als die maximale Benchmark-Leistung.',
          'Die vom Hersteller veröffentlichten TDP-Werte setzen die Obergrenze (N150: 6W; 8845HS/8945HS: 45W, bei manchen Boards konfigurierbar bis 70W; HX 370: konfigurierbar 15–54W) – der tatsächliche Verbrauch hängt vom Workload und den BIOS-Energiemodus-Einstellungen ab.',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Einrichtungshinweise',
        content:
          '**Betreiben Sie Home Assistant OS oder einen Container, installieren Sie Ollama und bestätigen Sie, dass die iGPU/NPU für die Inferenz genutzt wird.** Halten Sie das Gerät für Zuverlässigkeit per Kabel am Netzwerk.',
        items: [
          'Installieren Sie Home Assistant – siehe [Erste Schritte](/de/smart-home/home-assistant-getting-started).',
          'Installieren Sie Ollama und laden Sie ein kleines Modell – siehe [Ollama installieren](/de/local-llms/how-to-install-ollama).',
          'Verdrahten Sie Ollama in Home Assistant – siehe [der Leitfaden zur Ollama-Integration](/de/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann ein Mini-PC sowohl Home Assistant als auch ein lokales LLM betreiben?', a: 'Ja. Ein Mini-PC mit genug RAM und einer leistungsfähigen integrierten GPU oder NPU betreibt Home Assistant und ein kleines lokales LLM zusammen und kann Whisper und Frigate hinzufügen. Dieser Ein-Geräte-Ansatz ist der einfachste Weg zu einem lokalen KI-Smart-Home.' },
          { q: 'Wie viel RAM brauche ich?', a: 'Genug, um Ihr Zielmodell plus Home Assistant und etwaige Add-ons zu fassen. Ein kleines Modell braucht nur bescheidenen RAM, während es einem 7B-Modell, das bequem neben dem Hub läuft, von reichlich RAM profitiert. Passen Sie den RAM an das größte geplante Modell an.' },
          { q: 'Intel oder AMD für einen Home-Assistant-Mini-PC?', a: 'Beides funktioniert. Ein stromsparendes Intel-N-Serie-Gerät ist für leichte Nutzung am günstigsten; ein Mini-PC mit AMD Ryzen oder Intel Core i und starker integrierter GPU bewältigt ein 7B-Modell besser. Wählen Sie nach der gewünschten Modellgröße und Latenz.' },
          { q: 'Was ist der günstigste Mini-PC, der ein lokales LLM betreibt?', a: 'Ein stromsparender Intel-N-Serie-Mini-PC ist der günstigste, der Home Assistant plus ein sehr kleines Modell betreiben kann, wenn auch mit langsameren Antworten. Für einen flotteren Assistenten der 7B-Klasse steigen Sie auf einen Ryzen- oder Core-i-Mini-PC mit starker iGPU um.' },
          { q: 'Wie viel kostet der gesamte Aufbau inklusive Software?', a: 'Der Mini-PC ist die einzige echte Kostenposition. Home Assistant, Ollama, ein lokales Modell und Frigate sind alle kostenlos und Open Source, daher entspricht der Gesamtpreis dem, was Sie für die Hardware zahlen – von rund 180 € für ein N150-Gerät bis rund 1.200 €+ für die stärkste NPU-Option dieser Übersicht.' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: 'Ausführliche Übersicht der einzelnen Mini-PCs',
        content:
          '**Jeder Mini-PC unten hat eine eigene Seite mit Konfiguration, Kompatibilität und Kaufüberlegungen.**',
        items: [
          '[Beelink SER8 — vollständige Übersicht](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — vollständige Übersicht](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — vollständige Übersicht](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — vollständige Übersicht](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — vollständige Übersicht](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – Pi vs Mini-PC vs NAS vs Server',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – was das Gerät betreibt',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – das Modell einbinden',
          '[Beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm) – clusterübergreifend: VRAM und Hardware-Tiefe',
          '[Lokale KI-Sicherheitskameras](/de/smart-home/local-ai-security-camera) – Speicher- und Kameraanzahl-Planung für Frigate',
          '[Balkonkraftwerk ohne Cloud mit Home Assistant](/de/balcony-solar/home-assistant-balcony-solar-no-cloud) — Solarertrag lokal vom gleichen Gerät überwachen',
          '[NVIDIA Jetson Orin Nano für Smart-Home-KI: Test (2027)](/de/smart-home/nvidia-jetson-orin-nano-smart-home-review) – GPU-Alternative zum Mini-PC',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste Mini-PCs für Home Assistant + lokale KI (2026)',
      description: 'Bester Mini-PC für Home Assistant 2026: Beelink SER8 (~650 €) für Frigate + ein 7B-Modell; Intel-N150-Geräte (~180–230 €) fürs Budget; GEEKOM A9 Max (~1.099 €+) für On-Device-KI. Direkt verglichen.',
      url: 'https://www.promptquorum.com/de/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Lokales LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Kann ein Mini-PC sowohl Home Assistant als auch ein lokales LLM betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Ein Mini-PC mit genug RAM und einer leistungsfähigen iGPU oder NPU betreibt Home Assistant und ein kleines lokales LLM zusammen und kann Whisper und Frigate hinzufügen.' } },
        { '@type': 'Question', name: 'Wie viel RAM brauche ich?', acceptedAnswer: { '@type': 'Answer', text: 'Genug, um Ihr Zielmodell plus Home Assistant und Add-ons zu fassen. Ein kleines Modell braucht bescheidenen RAM; ein 7B-Modell bequem zu betreiben profitiert von reichlich RAM.' } },
        { '@type': 'Question', name: 'Intel oder AMD für einen Home-Assistant-Mini-PC?', acceptedAnswer: { '@type': 'Answer', text: 'Beides funktioniert. Ein stromsparendes Intel-N-Serie-Gerät ist für leichte Nutzung am günstigsten; ein AMD Ryzen oder Intel Core i mit starker iGPU bewältigt ein 7B-Modell besser.' } },
        { '@type': 'Question', name: 'Was ist der günstigste Mini-PC, der ein lokales LLM betreibt?', acceptedAnswer: { '@type': 'Answer', text: 'Ein stromsparender Intel-N-Serie-Mini-PC kann Home Assistant plus ein sehr kleines Modell betreiben, wenn auch langsamer. Für einen flotteren 7B-Assistenten steigen Sie auf einen Ryzen oder Core i mit starker iGPU um.' } },
        { '@type': 'Question', name: 'Wie viel kostet der gesamte Aufbau inklusive Software?', acceptedAnswer: { '@type': 'Answer', text: 'Der Mini-PC ist die einzige echte Kostenposition. Home Assistant, Ollama, ein lokales Modell und Frigate sind alle kostenlos und Open Source, daher entspricht der Gesamtpreis dem, was Sie für die Hardware zahlen.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Mejores Mini PC para Home Assistant + IA Local (2026)',
    seoTitle: 'Mejor Mini PC para Home Assistant + IA Local en 2026',
    intro:
      'El mejor mini PC para ejecutar Home Assistant más un LLM local en un solo equipo en 2026 es el Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) por unos 650 €, que ejecuta el hub, Frigate y un modelo 7B con Ollama. Con menos presupuesto, un equipo Intel N150 como el Beelink EQ14 o el GMKtec G3 Plus (unos 180–230 €) ejecuta Home Assistant y un modelo pequeño. Para la IA en el dispositivo y la visión más potentes, el GEEKOM A9 Max (Ryzen AI 9 HX 370, unos 1.099–1.299 €) sube un escalón más. Esta guía de compra compara los cinco equipos concretos uno junto a otro, da una recomendación directa para cada caso de uso y cubre notas de configuración, con enlace cruzado a la guía de hardware de local-llms para la profundidad de VRAM.',
    metaDescription:
      'Mejor mini PC para Home Assistant 2026: Beelink SER8 (~650 €) para Frigate + un modelo 7B; equipos Intel N150 (~180–230 €) económicos; GEEKOM A9 Max (~1.099 €+) para IA en el dispositivo. Comparados uno junto a otro.',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-es.webp',
    twitterDescription:
      'Mejor mini PC para Home Assistant 2026: el Beelink SER8 (~650 €) ejecuta Frigate + un modelo 7B con Ollama; equipos Intel N150 económicos (~180–230 €); GEEKOM A9 Max (~1.099 €+) para IA en el dispositivo. 5 equipos comparados.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que eligen un mini PC para Home Assistant e IA local',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'mejor mini pc home assistant ia local',
      'mini pc home assistant llm',
      'home assistant ia local hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**El mejor mini PC integral para Home Assistant más un LLM local en 2026 es el Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) por unos 650 €: ejecuta el hub, Frigate y un modelo 7B con Ollama en un solo equipo.** Para una configuración económica o casi silenciosa, un equipo Intel N150 como el Beelink EQ14 o el GMKtec G3 Plus (unos 180–230 €) ejecuta Home Assistant y un modelo pequeño. Para la IA en el dispositivo más potente, el GEEKOM A9 Max (unos 1.099–1.299 €) sube un escalón más. Prioriza la RAM y la iGPU sobre la frecuencia bruta de la CPU para la latencia de IA.',
    quickAnswerTop: {
      es: {
        question: '¿Qué mini PC es mejor para Home Assistant e IA local en 2026?',
        answer:
          'Para la mayoría, el Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB, unos 650 €) es la mejor opción: su iGPU fuerte ejecuta un modelo 7B con Ollama junto a Home Assistant, Frigate y Whisper. Con menos presupuesto o para un equipo casi silencioso, un mini PC Intel N150 como el Beelink EQ14 o el GMKtec G3 Plus (unos 180–230 €) ejecuta Home Assistant más un modelo pequeño. Para la IA en el dispositivo y la visión más potentes, un mini PC Ryzen AI como el GEEKOM A9 Max (unos 1.099–1.299 €) sube un escalón más.',
        bullets: [
          'Mejor integral: Beelink SER8 (Ryzen 7 8845HS, 32 GB) ~650 € — HA + Frigate + un modelo 7B con Ollama',
          'Económico / casi silencioso: Intel N150 (Beelink EQ14, GMKtec G3 Plus) ~180–230 € — HA + un modelo pequeño',
          'Mejor para IA local: GEEKOM A9 Max (Ryzen AI 9 HX 370) ~1.099–1.299 € — la iGPU + NPU más potentes para visión',
          'Prioriza la RAM y una iGPU capaz sobre la frecuencia de la CPU; más RAM aloja un modelo mayor',
          'Consulta la guía de hardware de local-llms para la profundidad de VRAM',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Selecciones Rápidas', anchor: 'quick-picks' },
      { label: 'Qué necesitas para HA + LLM', anchor: 'what-you-need' },
      { label: 'Los 5 Mini PC Comparados', anchor: 'mini-pc-picks' },
      { label: 'Comparación', anchor: 'comparison' },
      { label: '¿Qué Puede Ejecutar Cada Clase?', anchor: 'ai-capabilities' },
      { label: 'Ideal Para…', anchor: 'best-for' },
      { label: 'Presupuesto vs Rendimiento', anchor: 'budget-performance' },
      { label: '¿Cuál Deberías Comprar?', anchor: 'which-to-buy' },
      { label: 'Coste Total y Consumo', anchor: 'cost-and-power' },
      { label: 'Notas de configuración', anchor: 'setup-notes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'El mejor mini PC para Home Assistant más un LLM local tiene RAM amplia y una iGPU o NPU capaz para ejecutar el hub y un modelo pequeño en un solo equipo.' },
      { type: 'plain-terms', content: 'Un mini PC es un ordenador pequeño y de bajo consumo que puede ejecutar todo tu smart home más un modelo de IA local. Las dos cosas que más importan son la RAM (suficiente para alojar el modelo y el hub) y un chip gráfico o NPU capaz (para mantener la IA con buena respuesta). La frecuencia de la CPU importa menos.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Prioriza la RAM y una GPU integrada o NPU capaz sobre la frecuencia bruta de la CPU',
          'Un mini PC de bajo consumo de la serie N de Intel (~180–220 €) ejecuta Home Assistant y un modelo pequeño',
          'Un mini PC Ryzen 7/9 con una iGPU fuerte (~650 €) maneja un modelo 7B junto al hub',
          'Un mini PC con NPU Ryzen AI (~1.099 €+) es la opción más potente para IA en el dispositivo y visión',
          'Un solo mini PC puede ejecutar Home Assistant, Ollama, Whisper y Frigate juntos',
          'Consulta la guía de hardware de local-llms (entre clústeres) para detalles de VRAM',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Selecciones Rápidas',
        content:
          '**Tres configuraciones cubren la mayoría de instalaciones de Home Assistant + IA local.** Elige según tu presupuesto y el tamaño de modelo que quieras ejecutar.',
        items: [
          '**Mejor en general — Beelink SER8 (32 GB):** ejecuta Home Assistant, Frigate y un modelo 7B con Ollama en un solo equipo. Unos 650 € para la configuración de 32 GB / 1 TB, aunque los precios varían según el vendedor — consulta el precio actual.',
          '**Mejor económico — Beelink EQ14 o GMKtec G3 Plus (Intel N150):** ejecuta Home Assistant más un modelo pequeño (1–3B) por unos 180–220 €.',
          '**Mejor para IA local — GEEKOM A9 Max (Ryzen AI 9 HX 370):** la iGPU más potente y una NPU para visión en el dispositivo; normalmente entre 1.099 y 1.299 € según configuración y vendedor.',
        ],
        affiliateLinks: [
          { label: 'Ver precio del SER8 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Ver precio del EQ14 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'Ver precio del A9 Max →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: 'Precios de agosto de 2026 — el precio de los mini PC cambia con rapidez y varía según el vendedor y la configuración; confirma el precio vigente antes de comprar.',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'Qué necesitas para HA + LLM en un equipo',
        content:
          '**Necesitas suficiente RAM para alojar el modelo más Home Assistant, y una iGPU o NPU capaz para mantener el modelo con buena respuesta.** La frecuencia de la CPU es secundaria para esta carga.',
        items: [
          'RAM: margen suficiente para el tamaño de modelo que quieras más el hub y los complementos.',
          'Gráficos/NPU: una GPU integrada o NPU capaz reduce la latencia del LLM y de Whisper.',
          'Almacenamiento: espacio para grabaciones si también ejecutas Frigate — consulta [cámaras de seguridad con IA local](/es/smart-home/local-ai-security-camera).',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: 'Los 5 Mini PC Comparados',
        content:
          '**Tres clases cubren la mayoría de necesidades: la serie N de bajo consumo para IA ligera, Ryzen/Core i con una iGPU fuerte para un modelo 7B, y mini PC con NPU para IA eficiente en el dispositivo.** A continuación se explica para qué está pensado cada uno de los cinco equipos concretos de esta guía, según sus especificaciones publicadas — no pruebas independientes realizadas por PromptQuorum.',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Mejor opción general para Home Assistant + un modelo 7B',
            verdict:
              'Con un Ryzen 7 8845HS y una iGPU Radeon 780M, se espera que sea la opción de un solo equipo más potente de esta guía para ejecutar Home Assistant, Frigate y un modelo de clase 7B con Ollama juntos. La iGPU 780M — no una NPU — es la que realiza el trabajo pesado de la inferencia del LLM local.',
            pros: [
              'GPU integrada potente para modelos de clase 7B',
              'La configuración de 32 GB de RAM deja margen para el hub más complementos',
              'Maneja Home Assistant, Frigate y Whisper en un solo equipo',
              'El consumo en reposo es moderado para su clase de rendimiento (ver tabla de Comparación)',
            ],
            cons: [
              'Más caro que un equipo N150',
              'Mayor consumo bajo carga de IA que un equipo de bajo consumo',
              'Excesivo si solo necesitas Home Assistant sin IA local',
            ],
            affiliateLinks: [{ label: 'Ver precio →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Opción económica para Home Assistant + un modelo pequeño',
            verdict:
              'El Intel N150 es un chip de 6 W de TDP diseñado para la eficiencia, no para el rendimiento — se espera que ejecute Home Assistant y un modelo de 1–3B con comodidad, pero un modelo 7B probablemente sería notablemente más lento en esta clase de hardware.',
            pros: [
              'El precio más bajo de esta guía',
              'Consumo en reposo muy bajo, adecuado para un equipo que funciona 24/7',
              'Funcionamiento casi silencioso, habitual en esta clase de consumo',
            ],
            cons: [
              'Más lento con cualquier cosa por encima de un modelo pequeño',
              'Menos margen de RAM que las opciones de clase Ryzen',
              'No es la mejor opción si planeas añadir Frigate con varias cámaras',
            ],
            affiliateLinks: [{ label: 'Ver precio →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'Alternativa económica al EQ14',
            verdict:
              'Misma clase Intel N150 que el EQ14, con la diferencia notable de que su RAM es un módulo SO-DIMM reemplazable por el usuario en la mayoría de configuraciones en lugar de estar soldada — merece la pena comprobarlo si más adelante quieres ampliar la RAM.',
            pros: [
              'Perfil de precio y rendimiento similar al EQ14',
              'RAM ampliable (SO-DIMM, hasta 32 GB) en algunas configuraciones',
              'Expansión de almacenamiento M.2 doble para grabaciones de Frigate',
            ],
            cons: [
              'Mismo límite de rendimiento de IA que otros equipos de clase N150',
              'La disponibilidad y la configuración exacta varían según el vendedor',
            ],
            affiliateLinks: [{ label: 'Ver precio →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'Alternativa de mayor rendimiento al SER8',
            verdict:
              'Construido en torno a un Ryzen 9 8945HS con un TDP configurable de hasta 70 W, se espera que ofrezca un rendimiento de IA sostenido similar o ligeramente superior al del SER8 una vez configurado con 32 GB de RAM, a costa de un mayor consumo bajo carga.',
            pros: [
              'TDP configurable para un rendimiento más sostenido bajo carga',
              'Misma clase de iGPU que el SER8',
              'El precio "barebones" da flexibilidad para elegir tu propia RAM/almacenamiento',
            ],
            cons: [
              'Mayor consumo bajo carga sostenida que el SER8',
              'Las unidades barebones requieren comprar RAM y almacenamiento por separado',
              'El precio final puede variar con los costes de importación',
            ],
            affiliateLinks: [{ label: 'Ver precio →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: 'Mejor para IA local y visión en el dispositivo',
            verdict:
              'El Ryzen AI 9 HX 370 combina una iGPU Radeon 890M potente con una NPU dedicada. Para la inferencia del LLM local, se espera que la iGPU siga haciendo la mayor parte del trabajo — la ventaja de la NPU se nota en tareas de visión como la detección de objetos de Frigate, no en el rendimiento bruto del LLM.',
            pros: [
              'La iGPU más potente (Radeon 890M) de esta guía',
              'La NPU descarga parte del trabajo de detección visual de la CPU/GPU',
              'El límite de RAM más alto para ejecutar modelos mayores junto al hub',
            ],
            cons: [
              'El precio más alto de esta guía, por un margen amplio',
              'La NPU no acelera de forma significativa el chat con LLM local — no la compres esperando una mejora del LLM impulsada por la NPU',
              'Más capacidad de la que la mayoría de instalaciones de Home Assistant realmente necesita',
            ],
            affiliateLinks: [{ label: 'Ver precio →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparación',
        content:
          '**Ajusta el equipo a tu modelo objetivo y presupuesto.** Los precios y las cifras de consumo son aproximados, obtenidos de listados del fabricante y análisis de hardware independientes a agosto de 2026 — confirma el precio vigente antes de comprar.',
        columns: ['Modelo', 'CPU', 'GPU/iGPU', 'RAM (probada)', 'Precio aprox. (ago. 2026)', 'Consumo en reposo / típico', 'Ideal para'],
        rows: [
          { 'Modelo': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integrada)', 'RAM (probada)': '16 GB', 'Precio aprox. (ago. 2026)': '~189–220 €', 'Consumo en reposo / típico': '~5–12W en reposo, ~15–25W bajo carga', 'Ideal para': 'HA + un modelo pequeño' },
          { 'Modelo': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integrada)', 'RAM (probada)': '16 GB (ampliable)', 'Precio aprox. (ago. 2026)': '~180–230 €', 'Consumo en reposo / típico': '~5–12W en reposo, ~15–25W bajo carga', 'Ideal para': 'HA + un modelo pequeño, flexibilidad de presupuesto' },
          { 'Modelo': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM (probada)': '32 GB', 'Precio aprox. (ago. 2026)': '~650 €', 'Consumo en reposo / típico': '~7–10W en reposo, ~45W+ bajo carga de IA sostenida', 'Ideal para': 'HA + Frigate + un modelo 7B' },
          { 'Modelo': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'Misma clase que el SER8', 'RAM (probada)': '32 GB (propia)', 'Precio aprox. (ago. 2026)': '~649 € (32GB) / ~439 € barebones', 'Consumo en reposo / típico': '~7–9W en reposo, ~54–90W bajo carga sostenida', 'Ideal para': 'Similar al SER8, más configurable' },
          { 'Modelo': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM (probada)': '32 GB', 'Precio aprox. (ago. 2026)': '~1.099–1.299 €', 'Consumo en reposo / típico': '~7–9W en reposo, ~20–34W en uso típico', 'Ideal para': 'La IA en el dispositivo + visión más potentes' },
        ],
        items: [
          'Para VRAM y profundidad de cuantización, consulta entre clústeres [mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-es.webp',
        imageCaption: 'Clases de Mini PC para IA de Home Assistant -- Guía de RAM y capacidades',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: '¿Qué Puede Ejecutar Cada Clase?',
        content:
          '**La siguiente tabla refleja el rendimiento esperado según las especificaciones publicadas de cada chip, no pruebas comparativas medidas de forma independiente por PromptQuorum — trátala como punto de partida para dimensionar tu instalación, no como una garantía.**',
        columns: ['Clase de hardware', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper (voz)', 'Frigate (visión)'],
        rows: [
          { 'Clase de hardware': 'Intel N150 (EQ14, G3 Plus)', 'Home Assistant': 'Fluido', 'Ollama 3B': 'Utilizable', 'Ollama 7–8B': 'Lento, probablemente no cómodo', 'Whisper (voz)': 'Utilizable para clips cortos', 'Frigate (visión)': 'Detección básica, sin aceleración NPU' },
          { 'Clase de hardware': 'Ryzen 7/9 8845HS/8945HS (SER8, UM890 Pro)', 'Home Assistant': 'Fluido', 'Ollama 3B': 'Fluido', 'Ollama 7–8B': 'Utilizable con la cuantización habitual', 'Whisper (voz)': 'Fluido', 'Frigate (visión)': 'Bueno, acelerado por GPU' },
          { 'Clase de hardware': 'Ryzen AI 9 HX 370 (A9 Max)', 'Home Assistant': 'Fluido', 'Ollama 3B': 'Fluido', 'Ollama 7–8B': 'Fluido', 'Whisper (voz)': 'Fluido', 'Frigate (visión)': 'El mejor de esta guía, asistido por NPU' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: 'Ideal Para…',
        items: [
          '**Presupuesto por debajo de 250 €:** un equipo Intel N150 (Beelink EQ14 o GMKtec G3 Plus) cubre Home Assistant más un modelo pequeño.',
          '**Quieres un modelo 7B y Frigate a la vez:** sube a un mini PC Ryzen 7/9 con una iGPU fuerte — el Beelink SER8 o el Minisforum UM890 Pro.',
          '**Quieres un equipo silencioso y de bajo consumo funcionando 24/7 y no necesitas un modelo grande:** un equipo N150 consume menos en reposo y suele ser casi silencioso.',
          '**Quieres la IA en el dispositivo y la visión más potentes:** la combinación de una iGPU fuerte y una NPU del GEEKOM A9 Max es la opción más capaz aquí, al precio más alto.',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Presupuesto vs rendimiento',
        content:
          '**Compra el equipo más barato que ejecute tu modelo objetivo con latencia aceptable — normalmente un mini PC Ryzen/Core i con una iGPU fuerte para un modelo 7B.** No gastes de más en capacidad de CPU o NPU que no vayas a usar — consulta [¿Cuál Deberías Comprar?](#which-to-buy) más abajo para una recomendación directa según el caso de uso.',
        items: [
          'Económico: un equipo de la serie N de bajo consumo para HA más un modelo diminuto.',
          'Equilibrado: un mini PC Ryzen 7/9 con una iGPU fuerte para un modelo 7B.',
          'Para la decisión de hardware más amplia (Pi vs mini PC vs NAS), consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-es.webp',
        imageCaption: 'Presupuesto vs Rendimiento: la Elección -- Compra la caja más barata que se ajuste a tu modelo',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: '¿Cuál Deberías Comprar?',
        content:
          '**Ajusta el equipo a tu carga de trabajo real en lugar de comprar la unidad más capaz disponible.**',
        items: [
          'Si Home Assistant es tu única carga de trabajo: compra el Beelink EQ14 o el GMKtec G3 Plus.',
          'Si quieres Home Assistant más un modelo 7B local en un solo equipo: compra el Beelink SER8 (configuración de 32 GB).',
          'Si el rendimiento de IA local es la prioridad y el presupuesto lo permite: sube al GEEKOM A9 Max o al Minisforum UM890 Pro.',
          'Si ejecutas Frigate con varias cámaras: prioriza la RAM y el almacenamiento para grabaciones sobre la velocidad bruta de la CPU — consulta [cámaras de seguridad con IA local](/es/smart-home/local-ai-security-camera) para planificar el almacenamiento.',
        ],
        callouts: [
          { type: 'warning', text: 'No compres el SER8 ni un equipo de precio similar si solo quieres Home Assistant y unas cuantas automatizaciones — un equipo N150 es bastante más barato y suficiente para esa carga de trabajo.' },
          { type: 'warning', text: 'No compres un equipo N150 si tu objetivo es un modelo de clase 7B con buena respuesta, Whisper y Frigate funcionando a la vez — espera que se note lento con esa carga combinada.' },
          { type: 'warning', text: 'No compres el GEEKOM A9 Max esperando que su NPU acelere el chat con LLM local — la iGPU hace la mayor parte de ese trabajo; el beneficio de la NPU se nota sobre todo en tareas de visión como Frigate.' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: 'Coste Total y Consumo',
        content:
          '**El hardware es el único coste real — el software es gratuito.** Home Assistant, Ollama, un modelo local y Frigate son gratuitos y de código abierto; el mini PC en sí es la única partida del presupuesto.',
        items: [
          '**Coste de hardware por nivel:** equipo económico N150 ~180–230 €; equipo equilibrado Ryzen 7/9 (32 GB) ~650 €; equipo con NPU de gama superior ~1.099–1.299 €.',
          '**Consumo para un equipo 24/7:** el consumo en reposo es bastante similar entre los cinco equipos de esta guía (aproximadamente 5–10W), pero la carga sostenida de inferencia de IA varía más — un equipo N150 consume notablemente menos bajo carga (~15–25W) que un equipo Ryzen 7/9 ejecutando un modelo 7B (~45W o más). Para un equipo que funciona las 24 horas, esa diferencia se acumula a lo largo de un año más que el rendimiento máximo en pruebas comparativas.',
          'Las cifras de TDP publicadas por el fabricante marcan el límite superior (N150: 6W; 8845HS/8945HS: 45W, configurable hasta 70W en algunas placas; HX 370: configurable 15–54W) — el consumo real depende de la carga de trabajo y de los ajustes del modo de energía en la BIOS.',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Notas de configuración',
        content:
          '**Ejecuta Home Assistant OS o un contenedor, instala Ollama y confirma que la iGPU/NPU se usa para la inferencia.** Mantén el equipo cableado a tu red para fiabilidad.',
        items: [
          'Instala Home Assistant — consulta [primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Instala Ollama y descarga un modelo pequeño — consulta [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
          'Cablea Ollama en Home Assistant — consulta [la guía de integración de Ollama](/es/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puede un mini PC hacer tanto Home Assistant como un LLM local?', a: 'Sí. Un mini PC con suficiente RAM y una GPU integrada o NPU capaz ejecuta Home Assistant y un LLM local pequeño juntos, y puede añadir Whisper y Frigate. Este enfoque de un solo equipo es la forma más simple de tener un smart home con IA local.' },
          { q: '¿Cuánta RAM necesito?', a: 'Suficiente para alojar tu modelo objetivo más Home Assistant y cualquier complemento. Un modelo pequeño necesita poca RAM, mientras que ejecutar un modelo 7B cómodamente junto al hub se beneficia de RAM amplia. Ajusta la RAM al modelo más grande que planees ejecutar.' },
          { q: '¿Intel o AMD para un mini PC de Home Assistant?', a: 'Ambos funcionan. Un equipo de la serie N de Intel de bajo consumo es el más barato para uso ligero; un mini PC con AMD Ryzen o Intel Core i con una GPU integrada fuerte maneja mejor un modelo 7B. Elige según el tamaño de modelo y la latencia que quieras.' },
          { q: '¿Cuál es el mini PC más barato que ejecuta un LLM local?', a: 'Un mini PC de la serie N de Intel de bajo consumo es el más barato que puede ejecutar Home Assistant más un modelo muy pequeño, aunque las respuestas son más lentas. Para un asistente más ágil de clase 7B, sube a un mini PC Ryzen o Core i con una iGPU fuerte.' },
          { q: '¿Cuánto cuesta toda la instalación, incluyendo el software?', a: 'El mini PC es el único coste real. Home Assistant, Ollama, un modelo local y Frigate son gratuitos y de código abierto, así que el total es lo que pagues por el hardware — desde unos 180 € por un equipo N150 hasta unos 1.200 €+ por la opción con NPU más potente de esta guía.' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: 'Análisis detallado de cada mini PC',
        content:
          '**Cada mini PC de abajo tiene una página dedicada que cubre configuración, compatibilidad y consideraciones de compra.**',
        items: [
          '[Beelink SER8 — análisis completo](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — análisis completo](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — análisis completo](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — análisis completo](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — análisis completo](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS vs servidor',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — qué ejecuta el equipo',
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — integra el modelo',
          '[Mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm) — entre clústeres: VRAM y detalle de hardware',
          '[Cámaras de seguridad con IA local](/es/smart-home/local-ai-security-camera) — planificación de almacenamiento y número de cámaras para Frigate',
          '[Solar de balcón sin nube con Home Assistant](/es/balcony-solar/home-assistant-balcony-solar-no-cloud) — monitoriza la producción solar localmente desde el mismo equipo',
          '[NVIDIA Jetson Orin Nano para IA en el hogar inteligente: análisis (2027)](/es/smart-home/nvidia-jetson-orin-nano-smart-home-review) — alternativa con GPU al mini PC',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores Mini PC para Home Assistant + IA Local (2026)',
      description: 'Mejor mini PC para Home Assistant 2026: Beelink SER8 (~650 €) para Frigate + un modelo 7B; equipos Intel N150 (~180–230 €) económicos; GEEKOM A9 Max (~1.099 €+) para IA en el dispositivo. Comparados uno junto a otro.',
      url: 'https://www.promptquorum.com/es/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Puede un mini PC hacer tanto Home Assistant como un LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Un mini PC con suficiente RAM y una iGPU o NPU capaz ejecuta Home Assistant y un LLM local pequeño juntos, y puede añadir Whisper y Frigate.' } },
        { '@type': 'Question', name: '¿Cuánta RAM necesito?', acceptedAnswer: { '@type': 'Answer', text: 'Suficiente para alojar tu modelo objetivo más Home Assistant y complementos. Un modelo pequeño necesita poca RAM; ejecutar un modelo 7B cómodamente se beneficia de RAM amplia.' } },
        { '@type': 'Question', name: '¿Intel o AMD para un mini PC de Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Ambos funcionan. Un equipo de la serie N de Intel de bajo consumo es el más barato para uso ligero; un AMD Ryzen o Intel Core i con una iGPU fuerte maneja mejor un modelo 7B.' } },
        { '@type': 'Question', name: '¿Cuál es el mini PC más barato que ejecuta un LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini PC de la serie N de Intel de bajo consumo puede ejecutar Home Assistant más un modelo muy pequeño, aunque más lento. Para un asistente 7B más ágil, sube a un Ryzen o Core i con una iGPU fuerte.' } },
        { '@type': 'Question', name: '¿Cuánto cuesta toda la instalación, incluyendo el software?', acceptedAnswer: { '@type': 'Answer', text: 'El mini PC es el único coste real. Home Assistant, Ollama, un modelo local y Frigate son gratuitos y de código abierto, así que el total es lo que pagues por el hardware.' } },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Home Assistant + 로컬 AI를 위한 최고의 미니 PC (2026)',
    seoTitle: '2026년 Home Assistant + 로컬 AI를 위한 최고의 미니 PC',
    intro:
      '2026년 하나의 기기에서 Home Assistant와 로컬 LLM을 실행하기 위한 최고의 미니 PC는 Beelink SER8(Ryzen 7 8845HS, Radeon 780M, 32 GB, 약 $650)로, 허브와 Frigate, Ollama의 7B 모델을 함께 실행합니다. 예산이 빠듯하다면 Beelink EQ14 또는 GMKtec G3 Plus 같은 Intel N150 기기(약 $180–230)가 Home Assistant와 소형 모델을 실행합니다. 가장 강력한 온-디바이스 AI와 비전을 원한다면 GEEKOM A9 Max(Ryzen AI 9 HX 370, 약 $1,099–1,299)가 한 단계 더 나아갑니다. 이 구매 가이드는 다섯 가지 구체적인 제품을 나란히 비교하고, 각 사용 사례에 대한 직접적인 추천을 제공하며, 설정 메모를 다룹니다. VRAM 심층 정보는 local-llms 하드웨어 가이드로 크로스 링크합니다.',
    metaDescription:
      '2026년 Home Assistant 최고의 미니 PC: Beelink SER8(약 $650)로 Frigate + 7B 모델; 예산용 Intel N150 기기(약 $180–230); 온-디바이스 AI용 GEEKOM A9 Max(약 $1,099+). 나란히 비교했습니다.',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-ko.webp',
    twitterDescription:
      '2026년 Home Assistant 최고의 미니 PC: Beelink SER8(약 $650)가 Frigate + 7B 모델을 실행; 예산용 Intel N150 기기(약 $180–230); 온-디바이스 AI용 GEEKOM A9 Max(약 $1,099+). 5개 제품 비교.',
    readTime: '10분 읽기',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant와 로컬 AI를 위한 미니 PC를 선택하는 구매자',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'home assistant 로컬 AI 최고의 미니 PC',
      '미니 PC home assistant LLM',
      'home assistant 로컬 AI 하드웨어',
      '미니 PC ollama home assistant',
      'home assistant 미니 PC 2026',
    ],
    leadAnswerBlock:
      '**2026년 Home Assistant와 로컬 LLM을 위한 최고의 올라운드 미니 PC는 Beelink SER8(Ryzen 7 8845HS, Radeon 780M, 32 GB, 약 $650)입니다 — 허브와 Frigate, Ollama의 7B 모델을 하나의 기기에서 실행합니다.** 예산형 또는 거의 무소음 구성으로는 Beelink EQ14 또는 GMKtec G3 Plus 같은 Intel N150 기기(약 $180–230)가 Home Assistant와 소형 모델을 실행합니다. 가장 강력한 온-디바이스 AI를 원한다면 GEEKOM A9 Max(약 $1,099–1,299)가 한 단계 더 나아갑니다. AI 지연 시간을 위해 원시 CPU 클럭보다 RAM과 iGPU를 우선시하십시오.',
    quickAnswerTop: {
      ko: {
        question: '2026년 Home Assistant와 로컬 AI에 가장 적합한 미니 PC는 무엇입니까?',
        answer:
          '대부분의 사용자에게는 Beelink SER8(Ryzen 7 8845HS, Radeon 780M, 32 GB, 약 $650)이 최고의 선택입니다 — 강력한 iGPU가 Home Assistant, Frigate, Whisper와 함께 Ollama의 7B 모델을 실행합니다. 예산이 빠듯하거나 거의 무소음 기기를 원한다면 Beelink EQ14 또는 GMKtec G3 Plus 같은 Intel N150 미니 PC(약 $180–230)가 Home Assistant와 소형 모델을 실행합니다. 가장 강력한 온-디바이스 AI와 비전을 원한다면 GEEKOM A9 Max(약 $1,099–1,299) 같은 Ryzen AI 미니 PC가 한 단계 더 나아갑니다.',
        bullets: [
          '최고의 올라운드: Beelink SER8(Ryzen 7 8845HS, 32 GB) 약 $650 — HA + Frigate + Ollama의 7B 모델',
          '예산형 / 거의 무소음: Intel N150(Beelink EQ14, GMKtec G3 Plus) 약 $180–230 — HA + 소형 모델',
          '로컬 AI 최고 선택: GEEKOM A9 Max(Ryzen AI 9 HX 370) 약 $1,099–1,299 — 비전을 위한 최강 iGPU + NPU',
          'CPU 클럭보다 RAM과 고성능 iGPU를 우선시하십시오; RAM이 많을수록 더 큰 모델을 담습니다',
          'VRAM 심층 정보는 local-llms 하드웨어 가이드를 참조하십시오',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '빠른 선택', anchor: 'quick-picks' },
      { label: 'HA + LLM에 필요한 것', anchor: 'what-you-need' },
      { label: '5개 미니 PC 비교', anchor: 'mini-pc-picks' },
      { label: '비교', anchor: 'comparison' },
      { label: '각 클래스가 실제로 실행할 수 있는 것', anchor: 'ai-capabilities' },
      { label: '이런 경우에 최적…', anchor: 'best-for' },
      { label: '예산 대 성능', anchor: 'budget-performance' },
      { label: '어느 것을 구매해야 할까?', anchor: 'which-to-buy' },
      { label: '총비용 및 전력 소비', anchor: 'cost-and-power' },
      { label: '설정 메모', anchor: 'setup-notes' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant와 로컬 LLM을 위한 최고의 미니 PC는 허브와 소형 모델을 하나의 기기에서 실행하기 위한 충분한 RAM과 고성능 iGPU 또는 NPU를 갖추고 있습니다.' },
      { type: 'plain-terms', content: '미니 PC는 스마트 홈 전체와 로컬 AI 모델을 실행할 수 있는 소형 저전력 컴퓨터입니다. 가장 중요한 두 가지는 RAM(모델과 허브를 수용하기에 충분한)과 고성능 그래픽 칩 또는 NPU(AI 응답성 유지)입니다. CPU 클럭 속도는 덜 중요합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          '원시 CPU 클럭보다 RAM과 고성능 내장 GPU 또는 NPU를 우선시하십시오',
          '저전력 Intel N150 미니 PC(약 $180–220)는 Home Assistant와 소형 모델을 실행합니다',
          '강력한 iGPU가 있는 Ryzen 7/9 미니 PC(약 $650)는 허브 옆에서 7B 모델을 처리합니다',
          'NPU가 있는 Ryzen AI 미니 PC(약 $1,099+)는 온-디바이스 AI와 비전을 위한 최강 옵션입니다',
          '하나의 미니 PC로 Home Assistant, Ollama, Whisper, Frigate를 함께 실행할 수 있습니다',
          'VRAM 세부 사항은 크로스 클러스터 local-llms 하드웨어 가이드를 참조하십시오',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: '빠른 선택',
        content:
          '**세 가지 구성이 대부분의 Home Assistant + 로컬 AI 설정을 다룹니다.** 예산과 실행하려는 모델 크기에 따라 선택하십시오.',
        items: [
          '**최고의 올라운드 — Beelink SER8(32 GB):** Home Assistant, Frigate, Ollama의 7B 모델을 하나의 기기에서 실행합니다. 32 GB / 1 TB 구성 기준 약 $650이지만, 가격은 판매처마다 다르므로 현재 가격을 확인하십시오.',
          '**최고의 예산 선택 — Beelink EQ14 또는 GMKtec G3 Plus(Intel N150):** Home Assistant와 소형 모델(1–3B)을 약 $180–220에 실행합니다.',
          '**로컬 AI 최고 선택 — GEEKOM A9 Max(Ryzen AI 9 HX 370):** 온-디바이스 비전을 위한 최강 iGPU와 NPU를 탑재; 구성과 판매처에 따라 일반적으로 $1,099–1,299입니다.',
        ],
        affiliateLinks: [
          { label: 'SER8 가격 확인 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'EQ14 가격 확인 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'A9 Max 가격 확인 →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: '가격은 2026년 8월 기준입니다 — 미니 PC 가격은 빠르게 변동하며 판매처와 구성에 따라 다릅니다; 구매 전 현재 가격을 확인하십시오.',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: '하나의 기기에서 HA + LLM에 필요한 것',
        content:
          '**모델과 Home Assistant를 수용하기에 충분한 RAM과 모델의 응답성을 유지하기 위한 고성능 iGPU 또는 NPU가 필요합니다.** CPU 클럭은 이 워크로드에서 부차적입니다.',
        items: [
          'RAM: 원하는 모델 크기와 허브 및 부가 기능을 위한 충분한 여유.',
          '그래픽/NPU: 고성능 내장 GPU 또는 NPU는 LLM 및 Whisper 지연 시간을 줄입니다.',
          '저장소: Frigate도 실행한다면 녹화를 위한 공간 — [로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera)를 참조하십시오.',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: '5개 미니 PC 비교',
        content:
          '**세 가지 클래스가 대부분의 요구를 충족합니다: 경량 AI를 위한 저전력 N-시리즈, 7B 모델을 위한 강력한 iGPU가 있는 Ryzen/Core i-시리즈, 효율적인 온-디바이스 AI를 위한 NPU 탑재 미니 PC.** 아래는 이 가이드에 포함된 다섯 가지 제품 각각이 무엇에 적합한지, 게시된 사양을 근거로 정리한 내용입니다 — PromptQuorum의 독립적인 테스트 결과가 아닙니다.',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Home Assistant + 7B 모델을 위한 최고의 올라운드 선택',
            verdict:
              'Ryzen 7 8845HS와 Radeon 780M iGPU를 갖춘 이 제품은 Home Assistant, Frigate, 7B급 모델을 Ollama에서 함께 실행하는 데 있어 이 가이드에서 가장 강력한 단일 기기 옵션일 것으로 예상됩니다. 780M iGPU가 — NPU가 아니라 — 로컬 LLM 추론의 핵심 작업을 담당합니다.',
            pros: [
              '7B급 모델을 위한 강력한 내장 GPU',
              '32 GB RAM 구성이 허브와 부가 기능을 위한 여유를 제공',
              'Home Assistant, Frigate, Whisper를 한 기기에서 처리',
              '이 성능 등급 대비 유휴 전력 소비가 적당함(비교 표 참조)',
            ],
            cons: [
              'N150 기기보다 비쌈',
              '저전력 기기보다 AI 부하 시 전력 소비가 높음',
              '로컬 AI 없이 Home Assistant만 필요하다면 과한 사양',
            ],
            affiliateLinks: [{ label: '가격 확인 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Home Assistant + 소형 모델을 위한 예산 선택',
            verdict:
              'Intel N150은 처리량보다 효율성을 위해 설계된 6W TDP 칩입니다 — Home Assistant와 1–3B 모델은 무난히 실행할 것으로 예상되지만, 7B 모델은 이 하드웨어 등급에서 눈에 띄게 느려질 가능성이 높습니다.',
            pros: [
              '이 가이드에서 가장 낮은 가격대',
              '유휴 전력 소비가 매우 낮아 24/7 기기에 적합',
              '이 전력 등급에서는 거의 무소음 작동이 일반적',
            ],
            cons: [
              '소형 모델을 넘어서는 작업에서는 느림',
              'Ryzen 등급보다 RAM 여유가 적음',
              '여러 카메라로 Frigate를 추가할 계획이라면 적합하지 않음',
            ],
            affiliateLinks: [{ label: '가격 확인 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'EQ14의 예산 대안',
            verdict:
              'EQ14와 동일한 Intel N150 등급이지만, 대부분의 구성에서 RAM이 납땜된 형태가 아니라 사용자가 교체 가능한 SO-DIMM이라는 주목할 만한 차이가 있습니다 — 나중에 RAM을 업그레이드하고 싶다면 확인해 볼 가치가 있습니다.',
            pros: [
              'EQ14와 비슷한 가격 및 성능 프로필',
              '일부 구성에서 업그레이드 가능한 RAM(SO-DIMM, 최대 32 GB)',
              'Frigate 녹화를 위한 듀얼 M.2 저장소 확장',
            ],
            cons: [
              '다른 N150 등급 기기와 동일한 AI 성능 한계',
              '가용성과 정확한 구성은 판매처마다 다름',
            ],
            affiliateLinks: [{ label: '가격 확인 →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'SER8의 성능 대안',
            verdict:
              '최대 70W까지 조정 가능한 TDP를 가진 Ryzen 9 8945HS 기반으로, 32 GB RAM 구성 시 SER8과 비슷하거나 다소 높은 지속적인 AI 처리량을 제공할 것으로 예상되며, 그 대가로 부하 시 전력 소비가 더 높습니다.',
            pros: [
              '부하 시 더 지속적인 성능을 위한 조정 가능한 TDP',
              'SER8과 동일한 등급의 iGPU',
              '베어본 가격 정책으로 RAM/저장소를 직접 선택하는 유연성 제공',
            ],
            cons: [
              'SER8보다 지속 부하 시 전력 소비가 높음',
              '베어본 제품은 RAM과 저장소를 별도로 구매해야 함',
              '수입 비용에 따라 최종 가격이 변동될 수 있음',
            ],
            affiliateLinks: [{ label: '가격 확인 →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: '로컬 AI와 온-디바이스 비전을 위한 최고 선택',
            verdict:
              'Ryzen AI 9 HX 370은 강력한 Radeon 890M iGPU와 전용 NPU를 결합합니다. 로컬 LLM 추론에서는 여전히 iGPU가 대부분의 작업을 처리할 것으로 예상되며 — NPU의 장점은 Frigate의 객체 감지 같은 비전 작업에서 드러나지, 순수 LLM 처리량에서 드러나지 않습니다.',
            pros: [
              '이 가이드에서 가장 강력한 iGPU(Radeon 890M)',
              'NPU가 CPU/GPU의 비전 감지 작업을 일부 분담',
              '허브와 함께 더 큰 모델을 실행하기 위한 최고 RAM 한도',
            ],
            cons: [
              '이 가이드에서 가장 높은 가격, 그것도 큰 차이로',
              'NPU가 로컬 LLM 채팅을 눈에 띄게 가속하지는 않음 — NPU 기반 LLM 성능 향상을 기대하고 구매하지 마십시오',
              '대부분의 Home Assistant 설정에 실제로 필요한 것보다 더 많은 성능',
            ],
            affiliateLinks: [{ label: '가격 확인 →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '비교',
        content:
          '**목표 모델과 예산에 맞는 기기를 선택하십시오.** 가격 및 전력 수치는 근사치이며, 2026년 8월 기준 제조사 게시 정보와 독립적인 하드웨어 리뷰에서 가져왔습니다 — 구매 전 현재 가격을 확인하십시오.',
        columns: ['제품', 'CPU', 'GPU/iGPU', 'RAM(테스트 기준)', '대략적 가격(2026년 8월)', '유휴/일반 전력 소비', '이런 경우에 최적'],
        rows: [
          { '제품': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD(내장)', 'RAM(테스트 기준)': '16 GB', '대략적 가격(2026년 8월)': '약 $189–220', '유휴/일반 전력 소비': '유휴 약 5–12W, 부하 시 약 15–25W', '이런 경우에 최적': 'HA + 소형 모델' },
          { '제품': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD(내장)', 'RAM(테스트 기준)': '16 GB(업그레이드 가능)', '대략적 가격(2026년 8월)': '약 $180–230', '유휴/일반 전력 소비': '유휴 약 5–12W, 부하 시 약 15–25W', '이런 경우에 최적': 'HA + 소형 모델, 예산 유연성' },
          { '제품': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM(테스트 기준)': '32 GB', '대략적 가격(2026년 8월)': '약 $650', '유휴/일반 전력 소비': '유휴 약 7–10W, 지속적인 AI 부하 시 약 45W 이상', '이런 경우에 최적': 'HA + Frigate + 7B 모델' },
          { '제품': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'SER8과 동일 등급', 'RAM(테스트 기준)': '32 GB(직접 선택)', '대략적 가격(2026년 8월)': '약 $649(32GB) / 약 $439 베어본', '유휴/일반 전력 소비': '유휴 약 7–9W, 지속 부하 시 약 54–90W', '이런 경우에 최적': 'SER8과 유사, 더 구성 가능' },
          { '제품': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM(테스트 기준)': '32 GB', '대략적 가격(2026년 8월)': '약 $1,099–1,299', '유휴/일반 전력 소비': '유휴 약 7–9W, 일반 사용 시 약 20–34W', '이런 경우에 최적': '최강 온-디바이스 AI + 비전' },
        ],
        items: [
          'VRAM 및 양자화 심도는 크로스 클러스터 [로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm)를 참조하십시오.',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-ko.webp',
        imageCaption: 'Home Assistant AI용 미니 PC 등급 -- RAM 가이드와 실행 가능 범위',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: '각 클래스가 실제로 실행할 수 있는 것',
        content:
          '**아래 표는 각 칩의 게시된 사양을 근거로 한 예상 성능을 반영하며, PromptQuorum이 독립적으로 측정한 벤치마크가 아닙니다 — 보장이 아니라 설정 규모를 정하기 위한 출발점으로 활용하십시오.**',
        columns: ['하드웨어 클래스', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper(음성)', 'Frigate(비전)'],
        rows: [
          { '하드웨어 클래스': 'Intel N150(EQ14, G3 Plus)', 'Home Assistant': '원활함', 'Ollama 3B': '사용 가능', 'Ollama 7–8B': '느림, 편안하지 않을 가능성 높음', 'Whisper(음성)': '짧은 클립에 사용 가능', 'Frigate(비전)': '기본 감지, NPU 가속 없음' },
          { '하드웨어 클래스': 'Ryzen 7/9 8845HS/8945HS(SER8, UM890 Pro)', 'Home Assistant': '원활함', 'Ollama 3B': '원활함', 'Ollama 7–8B': '일반적인 양자화 시 사용 가능', 'Whisper(음성)': '원활함', 'Frigate(비전)': '양호함, GPU 가속' },
          { '하드웨어 클래스': 'Ryzen AI 9 HX 370(A9 Max)', 'Home Assistant': '원활함', 'Ollama 3B': '원활함', 'Ollama 7–8B': '원활함', 'Whisper(음성)': '원활함', 'Frigate(비전)': '이 가이드 중 최고, NPU 지원' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: '이런 경우에 최적…',
        items: [
          '**예산 $250 미만:** Intel N150 기기(Beelink EQ14 또는 GMKtec G3 Plus)가 Home Assistant와 소형 모델을 다룹니다.',
          '**7B 모델과 Frigate를 함께 원함:** 강력한 iGPU가 있는 Ryzen 7/9 미니 PC — Beelink SER8 또는 Minisforum UM890 Pro로 업그레이드하십시오.',
          '**조용하고 저전력인 24/7 기기를 원하며 큰 모델이 필요 없음:** N150 기기는 유휴 시 전력 소비가 가장 적고 종종 거의 무소음입니다.',
          '**가장 강력한 온-디바이스 AI와 비전을 원함:** GEEKOM A9 Max의 강력한 iGPU와 NPU 조합이 여기서 가장 강력한 옵션이며, 가격도 가장 높습니다.',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: '예산 대 성능',
        content:
          '**허용 가능한 지연 시간으로 목표 모델을 실행하는 가장 저렴한 기기를 구매하십시오. 일반적으로 7B 모델을 위한 강력한 iGPU가 있는 Ryzen/Core i 미니 PC입니다.** 사용하지 않을 CPU나 NPU 성능에 과도하게 지출하지 마십시오 — 사용 사례별 직접적인 추천은 아래 [어느 것을 구매해야 할까?](#which-to-buy)를 참조하십시오.',
        items: [
          '경제적: 매우 소형 모델과 함께 HA를 위한 저전력 N150 기기.',
          '균형적: 7B 모델을 위한 강력한 iGPU가 있는 Ryzen 7/9 미니 PC.',
          '더 넓은 하드웨어 결정(Pi 대 미니 PC 대 NAS)은 [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-ko.webp',
        imageCaption: '예산 대 성능 선택 -- 모델에 맞는 가장 저렴한 기기 구매',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: '어느 것을 구매해야 할까?',
        content:
          '**사용 가능한 가장 강력한 기기를 구매하기보다 실제 워크로드에 맞는 기기를 선택하십시오.**',
        items: [
          'Home Assistant가 유일한 워크로드라면: Beelink EQ14 또는 GMKtec G3 Plus를 구매하십시오.',
          'Home Assistant와 로컬 7B 모델을 하나의 기기에서 원한다면: Beelink SER8(32 GB 구성)을 구매하십시오.',
          '로컬 AI 성능이 우선이고 예산이 허락한다면: GEEKOM A9 Max 또는 Minisforum UM890 Pro로 업그레이드하십시오.',
          '여러 카메라로 Frigate를 실행한다면: 원시 CPU 속도보다 녹화를 위한 RAM과 저장소를 우선시하십시오 — 저장소 계획은 [로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera)를 참조하십시오.',
        ],
        callouts: [
          { type: 'warning', text: 'Home Assistant와 몇 가지 자동화만 원한다면 SER8이나 비슷한 가격대의 기기는 피하십시오 — N150 기기가 훨씬 저렴하며 이 워크로드에는 충분합니다.' },
          { type: 'warning', text: '반응성 있는 7B급 모델, Whisper, Frigate를 동시에 실행하는 것이 목표라면 N150 기기는 피하십시오 — 이 결합된 부하에서는 느리게 느껴질 것으로 예상됩니다.' },
          { type: 'warning', text: 'NPU가 로컬 LLM 채팅을 가속해 줄 것이라 기대하며 GEEKOM A9 Max를 구매하지 마십시오 — 그 작업의 대부분은 iGPU가 처리하며, NPU의 이점은 주로 Frigate 같은 비전 작업에서 나타납니다.' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: '총비용 및 전력 소비',
        content:
          '**하드웨어가 유일한 실질적 비용입니다 — 소프트웨어는 무료입니다.** Home Assistant, Ollama, 로컬 모델, Frigate는 모두 무료이며 오픈 소스입니다; 미니 PC 자체가 전체 예산 항목입니다.',
        items: [
          '**등급별 하드웨어 비용:** 예산형 N150 기기 약 $180–230; 균형형 Ryzen 7/9 기기(32 GB) 약 $650; 최상위 NPU 기기 약 $1,099–1,299.',
          '**24/7 기기의 전력 소비:** 이 가이드의 다섯 기기 모두 유휴 전력 소비는 대체로 비슷하지만(약 5–10W), 지속적인 AI 추론 부하는 더 크게 다릅니다 — N150 기기는 부하 시 눈에 띄게 적게 소비하며(약 15–25W), 7B 모델을 실행하는 Ryzen 7/9 기기(약 45W 이상)와 비교됩니다. 24시간 내내 작동하는 기기라면 이 차이는 최고 벤치마크 성능보다 1년 동안 더 많이 누적됩니다.',
          '제조사가 게시한 TDP 수치가 상한선을 정합니다(N150: 6W; 8845HS/8945HS: 45W, 일부 보드에서는 최대 70W까지 조정 가능; HX 370: 15–54W 조정 가능) — 실제 소비 전력은 워크로드와 BIOS 전력 모드 설정에 따라 달라집니다.',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: '설정 메모',
        content:
          '**Home Assistant OS 또는 컨테이너를 실행하고, Ollama를 설치하며, 추론에 iGPU/NPU가 사용되는지 확인하십시오.** 안정성을 위해 기기를 네트워크에 유선으로 연결하십시오.',
        items: [
          'Home Assistant를 설치하십시오 — [시작하기](/ko/smart-home/home-assistant-getting-started)를 참조하십시오.',
          'Ollama를 설치하고 소형 모델을 다운로드하십시오 — [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)을 참조하십시오.',
          'Ollama를 Home Assistant에 연결하십시오 — [Ollama 통합 가이드](/ko/smart-home/home-assistant-ollama-integration)를 참조하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '하나의 미니 PC로 Home Assistant와 로컬 LLM 모두 실행할 수 있습니까?', a: '네. 충분한 RAM과 고성능 내장 GPU 또는 NPU가 있는 미니 PC는 Home Assistant와 소형 로컬 LLM을 함께 실행하고 Whisper와 Frigate를 추가할 수 있습니다. 이 단일 기기 접근 방식이 로컬 AI 스마트 홈을 구축하는 가장 간단한 방법입니다.' },
          { q: 'RAM이 얼마나 필요합니까?', a: '목표 모델과 Home Assistant 및 부가 기능을 수용하기에 충분한 양이 필요합니다. 소형 모델은 적당한 RAM만 필요하지만 허브 옆에서 7B 모델을 편안하게 실행하려면 충분한 RAM이 도움이 됩니다. 실행할 가장 큰 모델에 맞게 RAM을 선택하십시오.' },
          { q: 'Home Assistant 미니 PC에는 Intel과 AMD 중 어느 것이 좋습니까?', a: '둘 다 작동합니다. 저전력 Intel N-시리즈 기기는 경량 사용에 가장 저렴하고, 강력한 내장 GPU가 있는 AMD Ryzen 또는 Intel Core i 미니 PC는 7B 모델을 더 잘 처리합니다. 원하는 모델 크기와 지연 시간에 따라 선택하십시오.' },
          { q: '로컬 LLM을 실행하는 가장 저렴한 미니 PC는 무엇입니까?', a: '저전력 Intel N-시리즈 미니 PC가 Home Assistant와 매우 소형 모델을 실행할 수 있는 가장 저렴한 것이지만 응답이 더 느립니다. 더 빠른 7B급 어시스턴트를 원한다면 강력한 iGPU가 있는 Ryzen 또는 Core i 미니 PC로 업그레이드하십시오.' },
          { q: '소프트웨어를 포함한 전체 설정 비용은 얼마입니까?', a: '미니 PC가 유일한 실질적 비용입니다. Home Assistant, Ollama, 로컬 모델, Frigate는 모두 무료이며 오픈 소스이므로, 총비용은 하드웨어에 지불하는 금액과 같습니다 — N150 기기의 경우 약 $180부터, 이 가이드에서 가장 강력한 NPU 옵션은 약 $1,200 이상까지입니다.' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: '각 미니 PC 상세 정보',
        content:
          '**아래 각 미니 PC마다 구성, 호환성, 구매 고려 사항을 다루는 전용 페이지가 있습니다.**',
        items: [
          '[Beelink SER8 — 전체 정보](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — 전체 정보](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — 전체 정보](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — 전체 정보](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — 전체 정보](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — Pi 대 미니 PC 대 NAS 대 서버',
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — 기기가 실행하는 것',
          '[Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration) — 모델 연결',
          '[로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm) — 크로스 클러스터: VRAM 및 하드웨어 심층 정보',
          '[로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera) — Frigate를 위한 저장소 및 카메라 대수 계획',
          '[Home Assistant로 클라우드 없는 발코니 태양광](/ko/balcony-solar/home-assistant-balcony-solar-no-cloud) — 같은 기기에서 태양광 출력을 로컬로 모니터링',
          '[스마트홈 AI용 NVIDIA Jetson Orin Nano 리뷰 (2027)](/ko/smart-home/nvidia-jetson-orin-nano-smart-home-review) — 미니 PC의 GPU 대안',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant + 로컬 AI를 위한 최고의 미니 PC (2026)',
      description: '2026년 Home Assistant 최고의 미니 PC: Beelink SER8(약 $650)로 Frigate + 7B 모델; 예산용 Intel N150 기기(약 $180–230); 온-디바이스 AI용 GEEKOM A9 Max(약 $1,099+). 나란히 비교했습니다.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'ko',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: '미니 PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '로컬 LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '하나의 미니 PC로 Home Assistant와 로컬 LLM 모두 실행할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '네. 충분한 RAM과 고성능 iGPU 또는 NPU가 있는 미니 PC는 Home Assistant와 소형 로컬 LLM을 함께 실행하고 Whisper와 Frigate를 추가할 수 있습니다.' } },
        { '@type': 'Question', name: 'RAM이 얼마나 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '목표 모델과 Home Assistant 및 부가 기능을 수용하기에 충분한 양이 필요합니다. 소형 모델은 적당한 RAM만 필요하지만 7B 모델을 편안하게 실행하려면 충분한 RAM이 도움이 됩니다.' } },
        { '@type': 'Question', name: 'Home Assistant 미니 PC에는 Intel과 AMD 중 어느 것이 좋습니까?', acceptedAnswer: { '@type': 'Answer', text: '둘 다 작동합니다. 저전력 Intel N-시리즈 기기는 경량 사용에 가장 저렴하고, 강력한 iGPU가 있는 AMD Ryzen 또는 Intel Core i는 7B 모델을 더 잘 처리합니다.' } },
        { '@type': 'Question', name: '로컬 LLM을 실행하는 가장 저렴한 미니 PC는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '저전력 Intel N-시리즈 미니 PC가 Home Assistant와 매우 소형 모델을 실행할 수 있지만 응답이 더 느립니다. 더 빠른 7B 어시스턴트를 원한다면 강력한 iGPU가 있는 Ryzen 또는 Core i로 업그레이드하십시오.' } },
        { '@type': 'Question', name: '소프트웨어를 포함한 전체 설정 비용은 얼마입니까?', acceptedAnswer: { '@type': 'Answer', text: '미니 PC가 유일한 실질적 비용입니다. Home Assistant, Ollama, 로컬 모델, Frigate는 모두 무료이며 오픈 소스이므로, 총비용은 하드웨어에 지불하는 금액과 같습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Meilleurs Mini-PC pour Home Assistant + IA Locale (2026)',
    seoTitle: 'Meilleur Mini-PC pour Home Assistant + IA Locale 2026',
    intro:
      'Le meilleur mini-PC pour faire tourner Home Assistant plus un LLM local sur une seule machine en 2026 est le Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 Go) à environ 650 €, qui fait tourner le hub, Frigate et un modèle 7B via Ollama. Avec un budget serré, une machine Intel N150 comme le Beelink EQ14 ou le GMKtec G3 Plus (environ 180–230 €) fait tourner Home Assistant et un petit modèle. Pour l\'IA embarquée et la vision les plus puissantes, le GEEKOM A9 Max (Ryzen AI 9 HX 370, environ 1 099–1 299 €) monte encore d\'un cran. Ce guide d\'achat compare les cinq machines concrètes côte à côte, donne une recommandation directe pour chaque cas d\'usage et couvre des notes de configuration — avec lien croisé vers le guide matériel de local-llms pour la profondeur de VRAM.',
    metaDescription:
      'Meilleur mini-PC pour Home Assistant 2026 : Beelink SER8 (~650 €) pour Frigate + un modèle 7B ; machines Intel N150 (~180–230 €) économiques ; GEEKOM A9 Max (~1 099 €+) pour l\'IA embarquée. Comparés côte à côte.',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-fr.webp',
    twitterDescription:
      'Meilleur mini-PC pour Home Assistant 2026 : le Beelink SER8 (~650 €) fait tourner Frigate + un modèle 7B sur Ollama ; machines Intel N150 abordables (~180–230 €) ; GEEKOM A9 Max (~1 099 €+) pour l\'IA embarquée. 5 machines comparées.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs choisissant un mini-PC pour Home Assistant et l\'IA locale',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'meilleur mini pc home assistant ia locale',
      'mini pc home assistant llm',
      'home assistant ia locale matériel',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**Le meilleur mini-PC polyvalent pour Home Assistant plus un LLM local en 2026 est le Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 Go) à environ 650 € — il fait tourner le hub, Frigate et un modèle 7B sur Ollama sur une seule machine.** Pour une configuration abordable ou quasi silencieuse, une machine Intel N150 comme le Beelink EQ14 ou le GMKtec G3 Plus (environ 180–230 €) fait tourner Home Assistant et un petit modèle. Pour l\'IA embarquée la plus puissante, le GEEKOM A9 Max (environ 1 099–1 299 €) monte encore d\'un cran. Priorisez la RAM et l\'iGPU plutôt que la fréquence brute du CPU pour la latence de l\'IA.',
    quickAnswerTop: {
      fr: {
        question: 'Quel mini-PC est le meilleur pour Home Assistant et l\'IA locale en 2026 ?',
        answer:
          'Pour la plupart des gens, le Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 Go, environ 650 €) est le meilleur choix : son iGPU puissant fait tourner un modèle 7B sur Ollama aux côtés de Home Assistant, Frigate et Whisper. Avec un budget serré ou pour une machine quasi silencieuse, un mini-PC Intel N150 comme le Beelink EQ14 ou le GMKtec G3 Plus (environ 180–230 €) fait tourner Home Assistant plus un petit modèle. Pour l\'IA embarquée et la vision les plus puissantes, un mini-PC Ryzen AI comme le GEEKOM A9 Max (environ 1 099–1 299 €) monte encore d\'un cran.',
        bullets: [
          'Meilleur polyvalent : Beelink SER8 (Ryzen 7 8845HS, 32 Go) ~650 € — HA + Frigate + un modèle 7B sur Ollama',
          'Abordable / quasi silencieux : Intel N150 (Beelink EQ14, GMKtec G3 Plus) ~180–230 € — HA + un petit modèle',
          'Meilleur pour l\'IA locale : GEEKOM A9 Max (Ryzen AI 9 HX 370) ~1 099–1 299 € — l\'iGPU + le NPU les plus puissants pour la vision',
          'Priorisez la RAM et un iGPU capable plutôt que la fréquence du CPU ; plus de RAM contient un plus gros modèle',
          'Voir le guide matériel de local-llms pour la profondeur de VRAM',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Sélections rapides', anchor: 'quick-picks' },
      { label: 'Ce qu\'il vous faut pour HA + LLM', anchor: 'what-you-need' },
      { label: 'Les 5 mini-PC comparés', anchor: 'mini-pc-picks' },
      { label: 'Comparaison', anchor: 'comparison' },
      { label: 'Que peut réellement faire chaque classe ?', anchor: 'ai-capabilities' },
      { label: 'Idéal pour…', anchor: 'best-for' },
      { label: 'Budget vs performances', anchor: 'budget-performance' },
      { label: 'Lequel devriez-vous acheter ?', anchor: 'which-to-buy' },
      { label: 'Coût total et consommation', anchor: 'cost-and-power' },
      { label: 'Notes de configuration', anchor: 'setup-notes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Le meilleur mini-PC pour Home Assistant plus un LLM local a une RAM ample et un iGPU ou NPU capable pour faire tourner le hub et un petit modèle sur une seule machine.' },
      { type: 'plain-terms', content: 'Un mini-PC est un petit ordinateur basse consommation qui peut faire tourner toute votre maison connectée plus un modèle d\'IA local. Les deux choses qui comptent le plus sont la RAM (assez pour contenir le modèle et le hub) et une puce graphique ou un NPU capable (pour garder l\'IA réactive). La fréquence du CPU compte moins.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Priorisez la RAM et un GPU intégré ou NPU capable plutôt que la fréquence brute du CPU',
          'Un mini-PC Intel N150 économique (~180–220 €) fait tourner Home Assistant et un petit modèle',
          'Un mini-PC Ryzen 7/9 avec un iGPU puissant (~650 €) gère un modèle 7B aux côtés du hub',
          'Un mini-PC Ryzen AI à NPU (~1 099 €+) est l\'option la plus puissante pour l\'IA embarquée et la vision',
          'Un mini-PC peut faire tourner Home Assistant, Ollama, Whisper et Frigate ensemble',
          'Voir le guide matériel de local-llms (inter-clusters) pour les détails de VRAM',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Sélections rapides',
        content:
          '**Trois configurations couvrent la plupart des installations Home Assistant + IA locale.** Choisissez selon votre budget et la taille de modèle voulue.',
        items: [
          '**Meilleur polyvalent — Beelink SER8 (32 Go) :** fait tourner Home Assistant, Frigate et un modèle 7B sur Ollama sur une seule machine. Environ 650 € pour la configuration 32 Go / 1 To, bien que les prix varient selon le vendeur — vérifiez le prix actuel.',
          '**Meilleur abordable — Beelink EQ14 ou GMKtec G3 Plus (Intel N150) :** fait tourner Home Assistant plus un petit modèle (1–3B) pour environ 180–220 €.',
          '**Meilleur pour l\'IA locale — GEEKOM A9 Max (Ryzen AI 9 HX 370) :** l\'iGPU le plus puissant et un NPU pour la vision embarquée ; généralement entre 1 099 et 1 299 € selon la configuration et le vendeur.',
        ],
        affiliateLinks: [
          { label: 'Voir le prix du SER8 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Voir le prix de l\'EQ14 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'Voir le prix de l\'A9 Max →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: 'Prix en date d\'août 2026 — les prix des mini-PC évoluent rapidement et varient selon le vendeur et la configuration ; vérifiez le prix actuel avant d\'acheter.',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'Ce qu\'il vous faut pour HA + LLM sur une machine',
        content:
          '**Il vous faut assez de RAM pour contenir le modèle plus Home Assistant, et un iGPU ou NPU capable pour garder le modèle réactif.** La fréquence du CPU est secondaire pour cette charge.',
        items: [
          'RAM : assez de marge pour la taille de modèle voulue plus le hub et les add-ons.',
          'Graphique/NPU : un GPU intégré ou NPU capable réduit la latence du LLM et de Whisper.',
          'Stockage : de la place pour les enregistrements si vous faites aussi tourner Frigate — voir [caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera).',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: 'Les 5 mini-PC comparés',
        content:
          '**Trois classes couvrent la plupart des besoins : série N basse consommation pour l\'IA légère, Ryzen/Core i avec iGPU puissant pour un modèle 7B, et mini-PC à NPU pour une IA efficace sur l\'appareil.** Voici à quoi est destinée chacune des cinq machines de ce guide, selon leurs spécifications publiées — pas des tests indépendants menés par PromptQuorum.',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Meilleur polyvalent pour Home Assistant + un modèle 7B',
            verdict:
              'Avec un Ryzen 7 8845HS et un iGPU Radeon 780M, cette machine devrait être l\'option monoposte la plus puissante de ce guide pour faire tourner Home Assistant, Frigate et un modèle de classe 7B sur Ollama ensemble. C\'est l\'iGPU 780M — pas un NPU — qui fait le gros du travail pour l\'inférence LLM locale.',
            pros: [
              'GPU intégré puissant pour des modèles de classe 7B',
              'La configuration 32 Go de RAM laisse de la marge pour le hub plus des add-ons',
              'Gère Home Assistant, Frigate et Whisper sur une seule machine',
              'Consommation au repos modérée pour sa classe de performance (voir le tableau de comparaison)',
            ],
            cons: [
              'Plus cher qu\'une machine N150',
              'Consommation plus élevée sous charge IA qu\'une machine basse consommation',
              'Surdimensionné si vous n\'avez besoin que de Home Assistant sans IA locale',
            ],
            affiliateLinks: [{ label: 'Voir le prix →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Choix abordable pour Home Assistant + un petit modèle',
            verdict:
              'L\'Intel N150 est une puce à 6 W de TDP conçue pour l\'efficacité, pas le débit — elle devrait faire tourner Home Assistant et un modèle 1–3B confortablement, mais un modèle 7B serait probablement nettement plus lent sur cette classe de matériel.',
            pros: [
              'Le prix le plus bas de ce guide',
              'Consommation au repos très faible, bien adaptée à une machine 24/7',
              'Le fonctionnement quasi silencieux est courant dans cette classe de consommation',
            ],
            cons: [
              'Plus lent au-delà d\'un petit modèle',
              'Moins de marge de RAM que les options de classe Ryzen',
              'Pas idéal si vous prévoyez d\'ajouter Frigate avec plusieurs caméras',
            ],
            affiliateLinks: [{ label: 'Voir le prix →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'Alternative abordable à l\'EQ14',
            verdict:
              'Même classe Intel N150 que l\'EQ14, avec une différence notable : sa RAM est un module SO-DIMM remplaçable par l\'utilisateur sur la plupart des configurations plutôt que soudée — à vérifier si vous voulez faire évoluer la RAM plus tard.',
            pros: [
              'Profil prix/performance similaire à l\'EQ14',
              'RAM évolutive (SO-DIMM, jusqu\'à 32 Go) sur certaines configurations',
              'Double extension de stockage M.2 pour les enregistrements Frigate',
            ],
            cons: [
              'Même plafond de performance IA que les autres machines de classe N150',
              'La disponibilité et la configuration exacte varient selon le vendeur',
            ],
            affiliateLinks: [{ label: 'Voir le prix →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'Alternative plus performante au SER8',
            verdict:
              'Construit autour d\'un Ryzen 9 8945HS avec un TDP configurable jusqu\'à 70 W, ce modèle devrait offrir un débit IA soutenu similaire ou légèrement supérieur au SER8 une fois configuré avec 32 Go de RAM, au prix d\'une consommation plus élevée sous charge.',
            pros: [
              'TDP configurable pour une performance plus soutenue sous charge',
              'Même classe d\'iGPU que le SER8',
              'La tarification en configuration nue offre une flexibilité pour choisir sa propre RAM/stockage',
            ],
            cons: [
              'Consommation plus élevée sous charge soutenue que le SER8',
              'Les unités nues nécessitent l\'achat séparé de RAM et de stockage',
              'Le prix final peut varier avec les coûts d\'importation',
            ],
            affiliateLinks: [{ label: 'Voir le prix →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: 'Meilleur pour l\'IA locale et la vision embarquée',
            verdict:
              'Le Ryzen AI 9 HX 370 associe un iGPU Radeon 890M puissant à un NPU dédié. Pour l\'inférence LLM locale, c\'est l\'iGPU qui devrait continuer à faire la majeure partie du travail — l\'avantage du NPU se manifeste dans les tâches de vision comme la détection d\'objets de Frigate, pas dans le débit brut du LLM.',
            pros: [
              'L\'iGPU le plus puissant (Radeon 890M) de ce guide',
              'Le NPU décharge une partie du travail de détection visuelle du CPU/GPU',
              'Le plafond de RAM le plus élevé pour faire tourner de plus gros modèles aux côtés du hub',
            ],
            cons: [
              'Le prix le plus élevé de ce guide, avec une marge importante',
              'Le NPU n\'accélère pas de manière significative le chat LLM local — ne l\'achetez pas en espérant un gain de performance LLM grâce au NPU',
              'Plus de capacité que ce dont la plupart des installations Home Assistant ont réellement besoin',
            ],
            affiliateLinks: [{ label: 'Voir le prix →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparaison',
        content:
          '**Adaptez la machine à votre modèle cible et à votre budget.** Les prix et les chiffres de consommation sont approximatifs, tirés des fiches constructeur et de tests matériels indépendants en date d\'août 2026 — vérifiez le prix actuel avant d\'acheter.',
        columns: ['Modèle', 'CPU', 'GPU/iGPU', 'RAM (testée)', 'Prix approx. (août 2026)', 'Consommation au repos/typique', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (intégré)', 'RAM (testée)': '16 Go', 'Prix approx. (août 2026)': '~189–220 €', 'Consommation au repos/typique': '~5–12W au repos, ~15–25W en charge', 'Idéal pour': 'HA + un petit modèle' },
          { 'Modèle': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (intégré)', 'RAM (testée)': '16 Go (évolutive)', 'Prix approx. (août 2026)': '~180–230 €', 'Consommation au repos/typique': '~5–12W au repos, ~15–25W en charge', 'Idéal pour': 'HA + un petit modèle, flexibilité budgétaire' },
          { 'Modèle': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM (testée)': '32 Go', 'Prix approx. (août 2026)': '~650 €', 'Consommation au repos/typique': '~7–10W au repos, ~45W+ en charge IA soutenue', 'Idéal pour': 'HA + Frigate + un modèle 7B' },
          { 'Modèle': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'Même classe que le SER8', 'RAM (testée)': '32 Go (au choix)', 'Prix approx. (août 2026)': '~649 € (32Go) / ~439 € nu', 'Consommation au repos/typique': '~7–9W au repos, ~54–90W en charge soutenue', 'Idéal pour': 'Similaire au SER8, plus configurable' },
          { 'Modèle': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM (testée)': '32 Go', 'Prix approx. (août 2026)': '~1 099–1 299 €', 'Consommation au repos/typique': '~7–9W au repos, ~20–34W en usage typique', 'Idéal pour': 'IA embarquée + vision les plus puissantes' },
        ],
        items: [
          'Pour la VRAM et la profondeur de quantification, voir inter-clusters [meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-fr.webp',
        imageCaption: 'Classes de Mini PC pour l\'IA Home Assistant -- Recommandations RAM et capacités',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: 'Que peut réellement faire chaque classe ?',
        content:
          '**Le tableau ci-dessous reflète la performance attendue selon les spécifications publiées de chaque puce, pas des benchmarks mesurés indépendamment par PromptQuorum — considérez-le comme un point de départ pour dimensionner votre installation, pas une garantie.**',
        columns: ['Classe matérielle', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper (voix)', 'Frigate (vision)'],
        rows: [
          { 'Classe matérielle': 'Intel N150 (EQ14, G3 Plus)', 'Home Assistant': 'Fluide', 'Ollama 3B': 'Utilisable', 'Ollama 7–8B': 'Lent, probablement pas confortable', 'Whisper (voix)': 'Utilisable pour des clips courts', 'Frigate (vision)': 'Détection basique, pas d\'accélération NPU' },
          { 'Classe matérielle': 'Ryzen 7/9 8845HS/8945HS (SER8, UM890 Pro)', 'Home Assistant': 'Fluide', 'Ollama 3B': 'Fluide', 'Ollama 7–8B': 'Utilisable avec la quantification habituelle', 'Whisper (voix)': 'Fluide', 'Frigate (vision)': 'Bon, accéléré par GPU' },
          { 'Classe matérielle': 'Ryzen AI 9 HX 370 (A9 Max)', 'Home Assistant': 'Fluide', 'Ollama 3B': 'Fluide', 'Ollama 7–8B': 'Fluide', 'Whisper (voix)': 'Fluide', 'Frigate (vision)': 'Le meilleur de ce guide, assisté par NPU' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: 'Idéal pour…',
        items: [
          '**Budget inférieur à 250 € :** une machine Intel N150 (Beelink EQ14 ou GMKtec G3 Plus) couvre Home Assistant plus un petit modèle.',
          '**Vous voulez un modèle 7B et Frigate ensemble :** passez à un mini-PC Ryzen 7/9 avec un iGPU puissant — le Beelink SER8 ou le Minisforum UM890 Pro.',
          '**Vous voulez une machine silencieuse, basse consommation, en fonctionnement 24/7, et n\'avez pas besoin d\'un gros modèle :** une machine N150 consomme le moins au repos et est souvent quasi silencieuse.',
          '**Vous voulez l\'IA embarquée et la vision les plus puissantes :** la combinaison d\'un iGPU puissant et d\'un NPU du GEEKOM A9 Max est l\'option la plus capable ici, au prix le plus élevé.',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Budget vs performances',
        content:
          '**Achetez la machine la moins chère qui fait tourner votre modèle cible à une latence acceptable — généralement un mini-PC Ryzen/Core i avec un iGPU puissant pour un modèle 7B.** Ne dépensez pas trop en capacité CPU ou NPU que vous n\'utiliserez pas — voir [Lequel devriez-vous acheter ?](#which-to-buy) ci-dessous pour une recommandation directe selon le cas d\'usage.',
        items: [
          'Économique : une machine N150 basse consommation pour HA plus un modèle minuscule.',
          'Équilibré : un mini-PC Ryzen 7/9 avec un iGPU puissant pour un modèle 7B.',
          'Pour la décision matérielle plus large (Pi vs mini-PC vs NAS), voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-fr.webp',
        imageCaption: 'Budget vs Performance : le Choix -- Achetez le boîtier le moins cher adapté à votre modèle',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: 'Lequel devriez-vous acheter ?',
        content:
          '**Adaptez la machine à votre charge de travail réelle plutôt que d\'acheter l\'unité la plus capable disponible.**',
        items: [
          'Si Home Assistant est votre seule charge de travail : achetez le Beelink EQ14 ou le GMKtec G3 Plus.',
          'Si vous voulez Home Assistant plus un modèle 7B local sur une seule machine : achetez le Beelink SER8 (configuration 32 Go).',
          'Si la performance IA locale est la priorité et que le budget le permet : passez au GEEKOM A9 Max ou au Minisforum UM890 Pro.',
          'Si vous faites tourner Frigate avec plusieurs caméras : priorisez la RAM et le stockage pour les enregistrements plutôt que la vitesse brute du CPU — voir [caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera) pour la planification du stockage.',
        ],
        callouts: [
          { type: 'warning', text: 'N\'achetez pas le SER8 ni une machine de prix similaire si vous voulez seulement Home Assistant et quelques automatisations — une machine N150 est nettement moins chère et suffisante pour cette charge.' },
          { type: 'warning', text: 'N\'achetez pas une machine N150 si votre objectif est un modèle de classe 7B réactif, Whisper et Frigate fonctionnant en même temps — attendez-vous à ce que ce soit lent avec cette charge combinée.' },
          { type: 'warning', text: 'N\'achetez pas le GEEKOM A9 Max en vous attendant à ce que son NPU accélère le chat LLM local — c\'est l\'iGPU qui fait l\'essentiel de ce travail ; l\'avantage du NPU se manifeste surtout dans les tâches de vision comme Frigate.' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: 'Coût total et consommation',
        content:
          '**Le matériel est le seul coût réel — le logiciel est gratuit.** Home Assistant, Ollama, un modèle local et Frigate sont tous gratuits et open source ; le mini-PC lui-même est le seul poste de budget.',
        items: [
          '**Coût matériel par palier :** machine N150 économique ~180–230 € ; machine Ryzen 7/9 équilibrée (32 Go) ~650 € ; machine NPU haut de gamme ~1 099–1 299 €.',
          '**Consommation pour une machine 24/7 :** la consommation au repos est globalement similaire entre les cinq machines de ce guide (environ 5–10W), mais la charge d\'inférence IA soutenue varie davantage — une machine N150 consomme nettement moins en charge (~15–25W) qu\'une machine Ryzen 7/9 faisant tourner un modèle 7B (~45W ou plus). Pour une machine qui tourne en continu, cette différence s\'accumule sur une année plus que la performance de pointe en benchmark.',
          'Les chiffres de TDP publiés par le constructeur fixent la limite supérieure (N150 : 6W ; 8845HS/8945HS : 45W, configurable jusqu\'à 70W sur certaines cartes ; HX 370 : configurable 15–54W) — la consommation réelle dépend de la charge de travail et des réglages du mode d\'alimentation dans le BIOS.',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Notes de configuration',
        content:
          '**Faites tourner Home Assistant OS ou un conteneur, installez Ollama et confirmez que l\'iGPU/NPU est utilisé pour l\'inférence.** Gardez la machine câblée à votre réseau pour la fiabilité.',
        items: [
          'Installez Home Assistant — voir [premiers pas](/fr/smart-home/home-assistant-getting-started).',
          'Installez Ollama et téléchargez un petit modèle — voir [comment installer Ollama](/fr/local-llms/how-to-install-ollama).',
          'Câblez Ollama dans Home Assistant — voir [le guide d\'intégration Ollama](/fr/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Un seul mini-PC peut-il faire à la fois Home Assistant et un LLM local ?', a: 'Oui. Un mini-PC avec assez de RAM et un GPU intégré ou NPU capable fait tourner Home Assistant et un petit LLM local ensemble, et peut ajouter Whisper et Frigate. Cette approche en une machine est la façon la plus simple d\'obtenir une maison connectée à IA locale.' },
          { q: 'De combien de RAM ai-je besoin ?', a: 'Assez pour contenir votre modèle cible plus Home Assistant et les add-ons. Un petit modèle ne nécessite que peu de RAM, tandis que faire tourner confortablement un modèle 7B aux côtés du hub profite d\'une RAM ample. Adaptez la RAM au plus gros modèle prévu.' },
          { q: 'Intel ou AMD pour un mini-PC Home Assistant ?', a: 'Les deux fonctionnent. Une machine de la série N d\'Intel basse consommation est la moins chère pour un usage léger ; un mini-PC AMD Ryzen ou Intel Core i avec un GPU intégré puissant gère mieux un modèle 7B. Choisissez selon la taille de modèle et la latence voulues.' },
          { q: 'Quel est le mini-PC le moins cher qui fait tourner un LLM local ?', a: 'Un mini-PC de la série N d\'Intel basse consommation est le moins cher qui puisse faire tourner Home Assistant plus un très petit modèle, bien que les réponses soient plus lentes. Pour un assistant de classe 7B plus vif, montez vers un mini-PC Ryzen ou Core i avec un iGPU puissant.' },
          { q: 'Combien coûte l\'installation complète, logiciel inclus ?', a: 'Le mini-PC est le seul coût réel. Home Assistant, Ollama, un modèle local et Frigate sont tous gratuits et open source, donc le total correspond à ce que vous payez pour le matériel — d\'environ 180 € pour une machine N150 à environ 1 200 €+ pour l\'option NPU la plus puissante de ce guide.' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: 'Aperçu détaillé de chaque mini-PC',
        content:
          '**Chaque mini-PC ci-dessous a une page dédiée couvrant la configuration, la compatibilité et les considérations d\'achat.**',
        items: [
          '[Beelink SER8 — aperçu complet](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — aperçu complet](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — aperçu complet](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — aperçu complet](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — aperçu complet](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — Pi vs mini-PC vs NAS vs serveur',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la machine exécute',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — intégrer le modèle',
          '[Meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm) — inter-clusters : VRAM et détail matériel',
          '[Caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera) — planification du stockage et du nombre de caméras pour Frigate',
          '[Solaire de balcon sans cloud avec Home Assistant](/fr/balcony-solar/home-assistant-balcony-solar-no-cloud) — surveiller la production solaire en local depuis la même machine',
          '[NVIDIA Jetson Orin Nano pour la maison connectée : test (2027)](/fr/smart-home/nvidia-jetson-orin-nano-smart-home-review) — alternative GPU au mini-PC',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleurs Mini-PC pour Home Assistant + IA Locale (2026)',
      description: 'Meilleur mini-PC pour Home Assistant 2026 : Beelink SER8 (~650 €) pour Frigate + un modèle 7B ; machines Intel N150 (~180–230 €) économiques ; GEEKOM A9 Max (~1 099 €+) pour l\'IA embarquée. Comparés côte à côte.',
      url: 'https://www.promptquorum.com/fr/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Un seul mini-PC peut-il faire à la fois Home Assistant et un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Un mini-PC avec assez de RAM et un GPU intégré ou NPU capable fait tourner Home Assistant et un petit LLM local ensemble, et peut ajouter Whisper et Frigate.' } },
        { '@type': 'Question', name: 'De combien de RAM ai-je besoin ?', acceptedAnswer: { '@type': 'Answer', text: 'Assez pour contenir votre modèle cible plus Home Assistant et les add-ons. Un petit modèle nécessite peu de RAM ; faire tourner confortablement un modèle 7B profite d\'une RAM ample.' } },
        { '@type': 'Question', name: 'Intel ou AMD pour un mini-PC Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Les deux fonctionnent. Une machine de la série N d\'Intel basse consommation est la moins chère pour un usage léger ; un AMD Ryzen ou Intel Core i avec un iGPU puissant gère mieux un modèle 7B.' } },
        { '@type': 'Question', name: 'Quel est le mini-PC le moins cher qui fait tourner un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini-PC de la série N d\'Intel basse consommation peut faire tourner Home Assistant plus un très petit modèle, bien que plus lentement. Pour un assistant 7B plus vif, montez vers un Ryzen ou Core i avec un iGPU puissant.' } },
        { '@type': 'Question', name: 'Combien coûte l\'installation complète, logiciel inclus ?', acceptedAnswer: { '@type': 'Answer', text: 'Le mini-PC est le seul coût réel. Home Assistant, Ollama, un modèle local et Frigate sont tous gratuits et open source, donc le total correspond à ce que vous payez pour le matériel.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Home Assistant + ローカルAIに最適なミニPC（2026）',
    seoTitle: 'Home Assistant + ローカルAIに最適なミニPC 2026年版ガイド',
    intro:
      '2026年、Home Assistant とローカル LLM を一台で動かすのに最適なミニPCは Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB、約¥94,800）で、ハブと Frigate、Ollama の 7B モデルを動かします。予算を抑えるなら、Beelink EQ14 や GMKtec G3 Plus といった Intel N150 機（約¥28,000〜33,000）が Home Assistant と小型モデルを動かします。最も強力なオンデバイスAIと映像処理を求めるなら、GEEKOM A9 Max（Ryzen AI 9 HX 370、約¥165,000〜195,000）がさらに一段上です。本購入ガイドは五つの具体的な機種を並べて比較し、用途ごとに明確な推奨を示し、設定上の注意を扱います——VRAM の詳細は local-llms のハードウェアガイドへ相互リンクします。',
    metaDescription:
      'Home Assistant 向け最適ミニPC（2026年）：Beelink SER8（約¥94,800）で Frigate＋7B モデル、予算重視は Intel N150 機（約¥28,000〜33,000）、オンデバイスAIには GEEKOM A9 Max（約¥165,000〜）。並べて比較。',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-ja.webp',
    twitterDescription:
      'Home Assistant 向け最適ミニPC（2026年）：Beelink SER8（約¥94,800）が Frigate＋7B モデルを動かす。予算重視は Intel N150 機（約¥28,000〜33,000）、オンデバイスAIには GEEKOM A9 Max（約¥165,000〜）。5機種比較。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant とローカルAIのためミニPCを選ぶ購入者',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      '最適 ミニpc home assistant ローカルai',
      'ミニpc home assistant llm',
      'home assistant ローカルai ハードウェア',
      'ミニpc ollama home assistant',
      'home assistant ミニpc 2026',
    ],
    leadAnswerBlock:
      '**2026年、Home Assistant とローカル LLM に最適なオールラウンドなミニPCは Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB、約¥94,800）です——ハブと Frigate、Ollama の 7B モデルを一台で動かします。** 予算重視やほぼ無音の構成なら、Beelink EQ14 や GMKtec G3 Plus といった Intel N150 機（約¥28,000〜33,000）が Home Assistant と小型モデルを動かします。最も強力なオンデバイスAIを求めるなら、GEEKOM A9 Max（約¥165,000〜195,000）がさらに一段上です。AI のレイテンシのため、生の CPU クロックより RAM と iGPU を優先しましょう。',
    quickAnswerTop: {
      ja: {
        question: '2026年、Home Assistant とローカルAIに最適なミニPCは？',
        answer:
          '多くの人には Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB、約¥94,800）が最適です——強力な iGPU が Home Assistant、Frigate、Whisper と並べて Ollama の 7B モデルを動かします。予算重視やほぼ無音の機器なら、Beelink EQ14 や GMKtec G3 Plus といった Intel N150 のミニPC（約¥28,000〜33,000）が Home Assistant と小型モデルを動かします。最も強力なオンデバイスAIと映像処理を求めるなら、GEEKOM A9 Max（約¥165,000〜195,000）のような Ryzen AI のミニPCがさらに一段上です。',
        bullets: [
          'オールラウンド最適：Beelink SER8（Ryzen 7 8845HS、32 GB）約¥94,800——HA + Frigate + Ollama の 7B モデル',
          '予算重視／ほぼ無音：Intel N150（Beelink EQ14、GMKtec G3 Plus）約¥28,000〜33,000——HA + 小型モデル',
          'ローカルAI最適：GEEKOM A9 Max（Ryzen AI 9 HX 370）約¥165,000〜195,000——映像処理に最強の iGPU + NPU',
          'CPU クロックより RAM と高性能な iGPU を優先；RAM が多いほど大きなモデルが載る',
          'VRAM の詳細は local-llms のハードウェアガイドを参照',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'クイックピック', anchor: 'quick-picks' },
      { label: 'HA + LLM に必要なもの', anchor: 'what-you-need' },
      { label: '5機種比較', anchor: 'mini-pc-picks' },
      { label: '比較', anchor: 'comparison' },
      { label: '各クラスが実際にできること', anchor: 'ai-capabilities' },
      { label: 'こんな人に最適…', anchor: 'best-for' },
      { label: '予算対性能', anchor: 'budget-performance' },
      { label: 'どれを買うべきか', anchor: 'which-to-buy' },
      { label: '総コストと消費電力', anchor: 'cost-and-power' },
      { label: '設定の注意', anchor: 'setup-notes' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant とローカル LLM に最適なミニPCは、潤沢な RAM と高性能な iGPU または NPU を備え、ハブと小型モデルを一台で動かします。' },
      { type: 'plain-terms', content: 'ミニPCは、スマートホーム全体とローカルAIモデルを動かせる小型で低消費電力のコンピューターです。最も重要なのは二つ：RAM（モデルとハブを保持するのに十分）と、高性能なグラフィックチップまたは NPU（AI を反応良く保つため）です。CPU のクロックはそれほど重要ではありません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          '生の CPU クロックより、RAM と高性能な統合 GPU または NPU を優先する',
          '低消費電力の Intel N150 ミニPC（約¥28,000〜33,000）は Home Assistant と小型モデルを動かす',
          '強力な iGPU を備えた Ryzen 7/9 のミニPC（約¥94,800）はハブと並べて 7B モデルを扱う',
          'NPU を備えた Ryzen AI のミニPC（約¥165,000〜）はオンデバイスAIと映像処理に最強の選択肢',
          '一台のミニPCで Home Assistant、Ollama、Whisper、Frigate を一緒に動かせる',
          'VRAM の詳細はクラスター横断の local-llms ハードウェアガイドを参照',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'クイックピック',
        content:
          '**三つの構成でHome Assistant＋ローカルAIのほとんどのニーズをカバーできます。** 予算と動かしたいモデルサイズで選びましょう。',
        items: [
          '**総合最適 — Beelink SER8（32 GB）：** Home Assistant、Frigate、Ollama の 7B モデルを一台で動かします。32 GB／1 TB 構成で約¥94,800ですが、価格は販売店によって変わるため、最新価格を確認してください。',
          '**予算最適 — Beelink EQ14 または GMKtec G3 Plus（Intel N150）：** Home Assistant と小型モデル（1〜3B）を約¥28,000〜33,000で動かします。',
          '**ローカルAI最適 — GEEKOM A9 Max（Ryzen AI 9 HX 370）：** オンデバイス映像処理に最強の iGPU と NPU を搭載；構成と販売店により通常約¥165,000〜195,000です。',
        ],
        affiliateLinks: [
          { label: 'SER8の価格を見る →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'EQ14の価格を見る →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'A9 Maxの価格を見る →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: '価格は2026年8月時点のものです——ミニPCの価格は急速に変動し、販売店や構成によって異なります；購入前に最新価格を確認してください。',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: '一台で HA + LLM に必要なもの',
        content:
          '**モデルと Home Assistant を保持する十分な RAM と、モデルを反応良く保つ高性能な iGPU または NPU が必要です。** このワークロードでは CPU クロックは二次的です。',
        items: [
          'RAM：欲しいモデルサイズに加え、ハブとアドオンのための十分な余裕。',
          'グラフィック/NPU：高性能な統合 GPU または NPU が LLM と Whisper のレイテンシを下げます。',
          'ストレージ：Frigate も動かすなら録画用の余地を——[ローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera)を参照。',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: '5機種比較',
        content:
          '**三つのクラスが大半のニーズを満たします：軽い AI には低消費電力の N シリーズ、7B モデルには強力な iGPU 付きの Ryzen/Core i、効率的なオンデバイス AI には NPU 搭載のミニPC。** 以下は、このガイドで扱う五つの具体的な機種がそれぞれ何に向いているかを、公開されている仕様に基づいてまとめたものです——PromptQuorum による独自のテスト結果ではありません。',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Home Assistant + 7B モデルに最適な総合選択',
            verdict:
              'Ryzen 7 8845HS と Radeon 780M の iGPU を搭載し、Home Assistant、Frigate、Ollama の 7B クラスモデルを一緒に動かす上で、このガイドで最も強力な一台構成になると見込まれます。ローカル LLM 推論の主な処理を担うのは 780M iGPU であり、NPU ではありません。',
            pros: [
              '7B クラスのモデルに向いた強力な内蔵GPU',
              '32 GB RAM構成でハブとアドオンの余裕を確保',
              'Home Assistant、Frigate、Whisper を一台でこなせる',
              'この性能クラスとしては待機時消費電力が控えめ（比較表を参照）',
            ],
            cons: [
              'N150 機より高価',
              'AI 負荷時の消費電力は低電力機より高い',
              'ローカルAI不要でHome Assistantのみなら過剰スペック',
            ],
            affiliateLinks: [{ label: '価格を見る →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Home Assistant + 小型モデルの予算選択',
            verdict:
              'Intel N150 はスループットではなく効率を重視した6WのTDPチップです——Home Assistant と 1〜3B モデルは無理なく動くと見込まれますが、7B モデルはこのハードウェアクラスでは明らかに遅くなる可能性が高いです。',
            pros: [
              'このガイドで最も低い価格帯',
              '待機時消費電力が非常に低く、24時間稼働機に適する',
              'この電力クラスではほぼ無音動作が一般的',
            ],
            cons: [
              '小型モデルを超える処理では遅い',
              'Ryzenクラスよりも RAM の余裕が少ない',
              '複数カメラでFrigateを追加する予定には向かない',
            ],
            affiliateLinks: [{ label: '価格を見る →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'EQ14 の予算代替機',
            verdict:
              'EQ14 と同じ Intel N150 クラスですが、注目すべき違いとして、ほとんどの構成でRAMが基板に直付けではなくユーザーが交換可能なSO-DIMMとなっています——後からRAMを増設したい場合には確認する価値があります。',
            pros: [
              'EQ14 と同様の価格・性能プロファイル',
              '一部構成でアップグレード可能な RAM（SO-DIMM、最大32 GB）',
              'Frigate 録画用のデュアル M.2 ストレージ拡張',
            ],
            cons: [
              '他の N150 クラス機と同じ AI 性能の上限',
              '在庫状況や正確な構成は販売店により異なる',
            ],
            affiliateLinks: [{ label: '価格を見る →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'SER8 の性能重視代替機',
            verdict:
              '最大70WまでTDPを調整可能なRyzen 9 8945HSを中心に構成され、32 GB RAM構成時にはSER8と同等かやや高い持続的AI処理能力が見込まれますが、その分、負荷時の消費電力は高くなります。',
            pros: [
              '負荷時により持続的な性能を発揮する調整可能なTDP',
              'SER8 と同クラスの iGPU',
              'ベアボーン価格設定によりRAM／ストレージを自由に選べる柔軟性',
            ],
            cons: [
              '持続負荷時の消費電力がSER8より高い',
              'ベアボーン機はRAMとストレージを別途購入する必要がある',
              '輸入コストにより最終価格が変動する可能性がある',
            ],
            affiliateLinks: [{ label: '価格を見る →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: 'ローカルAIとオンデバイス映像処理に最適',
            verdict:
              'Ryzen AI 9 HX 370 は強力な Radeon 890M iGPU と専用 NPU を組み合わせています。ローカル LLM 推論では依然として iGPU が大半の処理を担うと見込まれ——NPU の優位性は Frigate の物体検知のような映像処理タスクに現れるものであり、純粋なLLMの処理速度には現れません。',
            pros: [
              'このガイドで最も強力な iGPU（Radeon 890M）',
              'NPU が CPU/GPU の映像検知処理の一部を肩代わり',
              'ハブと並べてより大きなモデルを動かすための最高 RAM 上限',
            ],
            cons: [
              'このガイドで大差をつけて最も高価',
              'NPU がローカル LLM チャットを大きく高速化するわけではない——NPUによるLLM性能向上を期待して購入しないこと',
              'ほとんどの Home Assistant 構成が実際に必要とする以上の性能',
            ],
            affiliateLinks: [{ label: '価格を見る →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比較',
        content:
          '**目標のモデルと予算に合った機種を選びましょう。** 価格と消費電力の数値はおおよそのもので、2026年8月時点のメーカー公表情報と独立系ハードウェアレビューから引用しています——購入前に最新価格を確認してください。',
        columns: ['機種', 'CPU', 'GPU/iGPU', 'RAM（テスト構成）', 'おおよその価格（2026年8月）', '待機時／通常時消費電力', 'こんな人に最適'],
        rows: [
          { '機種': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD（内蔵）', 'RAM（テスト構成）': '16 GB', 'おおよその価格（2026年8月）': '約¥28,000〜33,000', '待機時／通常時消費電力': '待機時約5〜12W、負荷時約15〜25W', 'こんな人に最適': 'HA + 小型モデル' },
          { '機種': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD（内蔵）', 'RAM（テスト構成）': '16 GB（増設可）', 'おおよその価格（2026年8月）': '約¥28,000〜35,000', '待機時／通常時消費電力': '待機時約5〜12W、負荷時約15〜25W', 'こんな人に最適': 'HA + 小型モデル、予算の柔軟性' },
          { '機種': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM（テスト構成）': '32 GB', 'おおよその価格（2026年8月）': '約¥94,800', '待機時／通常時消費電力': '待機時約7〜10W、持続的AI負荷時約45W以上', 'こんな人に最適': 'HA + Frigate + 7B モデル' },
          { '機種': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'SER8 と同クラス', 'RAM（テスト構成）': '32 GB（自由選択）', 'おおよその価格（2026年8月）': '約¥97,000（32GB）／約¥66,000（ベアボーン）', '待機時／通常時消費電力': '待機時約7〜9W、持続負荷時約54〜90W', 'こんな人に最適': 'SER8に類似、より構成の自由度が高い' },
          { '機種': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM（テスト構成）': '32 GB', 'おおよその価格（2026年8月）': '約¥165,000〜195,000', '待機時／通常時消費電力': '待機時約7〜9W、通常使用時約20〜34W', 'こんな人に最適': '最強のオンデバイスAI + 映像処理' },
        ],
        items: [
          'VRAM と量子化の詳細は、クラスター横断で[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm)を参照。',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-ja.webp',
        imageCaption: 'Home Assistant AI向けミニPCクラス -- RAM目安とできること',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: '各クラスが実際にできること',
        content:
          '**下表は各チップの公開仕様に基づく予測性能であり、PromptQuorum が独自に測定したベンチマークではありません——設定の目安として活用してください。保証ではありません。**',
        columns: ['ハードウェアクラス', 'Home Assistant', 'Ollama 3B', 'Ollama 7〜8B', 'Whisper（音声）', 'Frigate（映像）'],
        rows: [
          { 'ハードウェアクラス': 'Intel N150（EQ14、G3 Plus）', 'Home Assistant': 'スムーズ', 'Ollama 3B': '使用可能', 'Ollama 7〜8B': '遅く、快適とは言えない可能性が高い', 'Whisper（音声）': '短いクリップなら使用可能', 'Frigate（映像）': '基本的な検知、NPUアクセラレーションなし' },
          { 'ハードウェアクラス': 'Ryzen 7/9 8845HS/8945HS（SER8、UM890 Pro）', 'Home Assistant': 'スムーズ', 'Ollama 3B': 'スムーズ', 'Ollama 7〜8B': '一般的な量子化で使用可能', 'Whisper（音声）': 'スムーズ', 'Frigate（映像）': '良好、GPUアクセラレーション対応' },
          { 'ハードウェアクラス': 'Ryzen AI 9 HX 370（A9 Max）', 'Home Assistant': 'スムーズ', 'Ollama 3B': 'スムーズ', 'Ollama 7〜8B': 'スムーズ', 'Whisper（音声）': 'スムーズ', 'Frigate（映像）': 'このガイド中で最良、NPUアシスト' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: 'こんな人に最適…',
        items: [
          '**予算$250未満：** Intel N150機（Beelink EQ14 または GMKtec G3 Plus）で Home Assistant と小型モデルをカバー。',
          '**7B モデルと Frigate を両方使いたい：** 強力な iGPU を備えた Ryzen 7/9 のミニPC——Beelink SER8 または Minisforum UM890 Pro にステップアップ。',
          '**静かで低消費電力の24時間稼働機を求め、大型モデルは不要：** N150 機は待機時消費電力が最も低く、しばしばほぼ無音です。',
          '**最も強力なオンデバイスAIと映像処理を求める：** GEEKOM A9 Max の強力な iGPU と NPU の組み合わせが最も高性能な選択肢ですが、価格も最も高くなります。',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: '予算対性能',
        content:
          '**目標モデルを許容できるレイテンシで動かせる最も安い機器を買いましょう——たいていは 7B モデル向けに強力な iGPU を備えた Ryzen/Core i のミニPC。** 使わない CPU や NPU の性能に払いすぎないように——用途別の直接的な推奨は下記の[どれを買うべきか](#which-to-buy)を参照。',
        items: [
          '予算重視：HA と極小モデル向けの低消費電力 N150 機。',
          'バランス：7B モデル向けに強力な iGPU を備えた Ryzen 7/9 のミニPC。',
          'より広いハードウェアの判断（Pi 対 ミニPC 対 NAS）は[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-ja.webp',
        imageCaption: '予算対性能の選び方 -- モデルに合った最も安価なボックスを購入',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: 'どれを買うべきか',
        content:
          '**入手可能な最も高性能な機種を買うのではなく、実際のワークロードに合った機種を選びましょう。**',
        items: [
          'Home Assistant のみが目的なら：Beelink EQ14 または GMKtec G3 Plus を購入。',
          'Home Assistant とローカル 7B モデルを一台でこなしたいなら：Beelink SER8（32 GB構成）を購入。',
          'ローカルAI性能を優先し予算が許すなら：GEEKOM A9 Max または Minisforum UM890 Pro にステップアップ。',
          '複数カメラで Frigate を運用するなら：CPUの生の速度よりも録画用のRAMとストレージを優先——ストレージ計画は[ローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera)を参照。',
        ],
        callouts: [
          { type: 'warning', text: 'Home Assistant といくつかの自動化だけが目的なら、SER8や同程度の価格帯の機種は避けましょう——N150機のほうがはるかに安く、その用途には十分です。' },
          { type: 'warning', text: '反応の良い7Bクラスモデル、Whisper、Frigateを同時に動かすのが目的なら、N150機は避けましょう——その組み合わせの負荷では動作が遅く感じられると見込まれます。' },
          { type: 'warning', text: 'NPUがローカルLLMチャットを高速化してくれると期待してGEEKOM A9 Maxを購入しないでください——その処理の大部分はiGPUが担い、NPUの効果は主にFrigateのような映像処理タスクに現れます。' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: '総コストと消費電力',
        content:
          '**ハードウェアだけが実質的なコストです——ソフトウェアは無料です。** Home Assistant、Ollama、ローカルモデル、Frigate はすべて無料かつオープンソースです；ミニPC自体が予算のすべてです。',
        items: [
          '**クラス別ハードウェアコスト：** 予算重視のN150機は約¥28,000〜35,000；バランス型のRyzen 7/9機（32 GB）は約¥94,800；最上位のNPU機は約¥165,000〜195,000。',
          '**24時間稼働機の消費電力：** このガイドの5機種すべてで待機時消費電力はおおむね同程度（約5〜10W）ですが、持続的なAI推論負荷はより大きく異なります——N150機は負荷時の消費電力が明らかに少なく（約15〜25W）、7Bモデルを動かすRyzen 7/9機（約45W以上）と比較されます。24時間稼働する機器の場合、この差はピーク時のベンチマーク性能よりも1年間で大きく積み重なります。',
          'メーカー公表のTDP値が上限を定めます（N150：6W；8845HS/8945HS：45W、一部の基板では最大70Wまで調整可；HX 370：15〜54W調整可）——実際の消費電力はワークロードとBIOSの電源モード設定によって変わります。',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: '設定の注意',
        content:
          '**Home Assistant OS かコンテナを動かし、Ollama をインストールし、推論に iGPU/NPU が使われていることを確認しましょう。** 信頼性のため、機器は有線でネットワークにつなぎます。',
        items: [
          'Home Assistant をインストール——[入門](/ja/smart-home/home-assistant-getting-started)を参照。',
          'Ollama をインストールし、小型モデルをプル——[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama)を参照。',
          'Ollama を Home Assistant に配線——[Ollama 統合ガイド](/ja/smart-home/home-assistant-ollama-integration)を参照。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '一台のミニPCで Home Assistant とローカル LLM の両方をこなせますか？', a: 'はい。十分な RAM と高性能な統合 GPU または NPU を備えたミニPCは、Home Assistant と小型のローカル LLM を一緒に動かし、Whisper と Frigate を加えられます。この一台アプローチは、ローカルAIのスマートホームを得る最もシンプルな方法です。' },
          { q: 'RAM はどれくらい必要ですか？', a: '目標モデルに加え、Home Assistant と各アドオンを保持できるだけ必要です。小型モデルは控えめな RAM で済み、7B モデルをハブと並べて快適に動かすには潤沢な RAM が役立ちます。動かす予定の最大のモデルに RAM を合わせましょう。' },
          { q: 'Home Assistant のミニPCは Intel と AMD のどちら？', a: 'どちらも動きます。低消費電力の Intel N シリーズ機は軽い用途に最も安く、強力な統合 GPU を備えた AMD Ryzen または Intel Core i のミニPCは 7B モデルをより良く扱います。欲しいモデルサイズとレイテンシで選びましょう。' },
          { q: 'ローカル LLM を動かせる最も安いミニPCは？', a: '低消費電力の Intel N シリーズのミニPCが、Home Assistant と非常に小さなモデルを動かせる最も安い機種ですが、応答は遅めです。よりキビキビした 7B クラスのアシスタントには、強力な iGPU を備えた Ryzen または Core i のミニPCへ上げましょう。' },
          { q: 'ソフトウェアを含めた全体のセットアップ費用はどのくらいですか？', a: 'ミニPCが唯一の実質的なコストです。Home Assistant、Ollama、ローカルモデル、Frigate はすべて無料かつオープンソースなので、総額はハードウェアに支払う金額そのものになります——N150機なら約¥28,000から、このガイドで最も強力なNPU搭載機なら約¥180,000以上まで。' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: '各ミニPCの詳細情報',
        content:
          '**以下の各ミニPCには、構成・互換性・購入時の検討事項をまとめた専用ページがあります。**',
        items: [
          '[Beelink SER8 — 詳細情報](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — 詳細情報](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — 詳細情報](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — 詳細情報](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — 詳細情報](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — Pi 対 ミニPC 対 NAS 対 サーバー',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — 機器が何を動かすか',
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — モデルを組み込む',
          '[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm) — クラスター横断：VRAM とハードウェアの詳細',
          '[ローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera) — Frigate向けのストレージとカメラ台数の計画',
          '[Home Assistantでクラウドなしのバルコニー太陽光発電](/ja/balcony-solar/home-assistant-balcony-solar-no-cloud) — 同じ機器でローカルに太陽光出力を監視',
          '[NVIDIA Jetson Orin Nanoでスマートホームaiを実現：レビュー（2027年）](/ja/smart-home/nvidia-jetson-orin-nano-smart-home-review) — ミニPCに代わるGPU搭載機',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant + ローカルAIに最適なミニPC（2026）',
      description: 'Home Assistant 向け最適ミニPC（2026年）：Beelink SER8（約¥94,800）で Frigate＋7B モデル、予算重視は Intel N150 機（約¥28,000〜33,000）、オンデバイスAIには GEEKOM A9 Max（約¥165,000〜）。並べて比較。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: 'ミニPC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'ローカルLLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '一台のミニPCで Home Assistant とローカル LLM の両方をこなせますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。十分な RAM と高性能な統合 GPU または NPU を備えたミニPCは、Home Assistant と小型のローカル LLM を一緒に動かし、Whisper と Frigate を加えられます。' } },
        { '@type': 'Question', name: 'RAM はどれくらい必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '目標モデルに加え、Home Assistant とアドオンを保持できるだけ必要です。小型モデルは控えめな RAM で済み、7B モデルを快適に動かすには潤沢な RAM が役立ちます。' } },
        { '@type': 'Question', name: 'Home Assistant のミニPCは Intel と AMD のどちら？', acceptedAnswer: { '@type': 'Answer', text: 'どちらも動きます。低消費電力の Intel N シリーズ機は軽い用途に最も安く、強力な iGPU を備えた AMD Ryzen または Intel Core i は 7B モデルをより良く扱います。' } },
        { '@type': 'Question', name: 'ローカル LLM を動かせる最も安いミニPCは？', acceptedAnswer: { '@type': 'Answer', text: '低消費電力の Intel N シリーズのミニPCが、Home Assistant と非常に小さなモデルを動かせる最も安い機種ですが遅めです。よりキビキビした 7B には強力な iGPU の Ryzen か Core i へ。' } },
        { '@type': 'Question', name: 'ソフトウェアを含めた全体のセットアップ費用はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: 'ミニPCが唯一の実質的なコストです。Home Assistant、Ollama、ローカルモデル、Frigate はすべて無料かつオープンソースなので、総額はハードウェアに支払う金額そのものになります。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Melhores Mini PCs para Home Assistant + IA Local (2026)',
    seoTitle: 'Melhor Mini PC para Home Assistant + IA Local em 2026',
    intro:
      'O melhor mini PC para rodar o Home Assistant mais um LLM local em uma só máquina em 2026 é o Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) por cerca de R$ 5.000, que roda o hub, o Frigate e um modelo 7B via Ollama. Com orçamento apertado, uma máquina Intel N150 como o Beelink EQ14 ou o GMKtec G3 Plus (cerca de R$ 1.400–1.900) roda o Home Assistant e um modelo pequeno. Para a IA embarcada e a visão mais potentes, o GEEKOM A9 Max (Ryzen AI 9 HX 370, cerca de R$ 8.500–10.100) sobe mais um nível. Este guia de compra compara as cinco máquinas concretas lado a lado, dá uma recomendação direta para cada caso de uso e cobre notas de configuração — com link cruzado para o guia de hardware do local-llms para a profundidade de VRAM.',
    metaDescription:
      'Melhor mini PC para Home Assistant 2026: Beelink SER8 (~R$ 5.000) para Frigate + um modelo 7B; máquinas Intel N150 (~R$ 1.400–1.900) econômicas; GEEKOM A9 Max (~R$ 8.500+) para IA embarcada. Comparados lado a lado.',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-pt.webp',
    twitterDescription:
      'Melhor mini PC para Home Assistant 2026: o Beelink SER8 (~R$ 5.000) roda Frigate + um modelo 7B no Ollama; máquinas Intel N150 acessíveis (~R$ 1.400–1.900); GEEKOM A9 Max (~R$ 8.500+) para IA embarcada. 5 máquinas comparadas.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores escolhendo um mini PC para Home Assistant e IA local',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'melhor mini pc home assistant ia local',
      'mini pc home assistant llm',
      'home assistant ia local hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**O melhor mini PC completo para o Home Assistant mais um LLM local em 2026 é o Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB) por cerca de R$ 5.000 — ele roda o hub, o Frigate e um modelo 7B no Ollama em uma só máquina.** Para uma configuração econômica ou quase silenciosa, uma máquina Intel N150 como o Beelink EQ14 ou o GMKtec G3 Plus (cerca de R$ 1.400–1.900) roda o Home Assistant e um modelo pequeno. Para a IA embarcada mais potente, o GEEKOM A9 Max (cerca de R$ 8.500–10.100) sobe mais um nível. Os preços no Brasil podem variar bastante devido a impostos de importação. Priorize a RAM e a iGPU sobre a frequência bruta da CPU para a latência da IA.',
    quickAnswerTop: {
      pt: {
        question: 'Qual mini PC é melhor para Home Assistant e IA local em 2026?',
        answer:
          'Para a maioria, o Beelink SER8 (Ryzen 7 8845HS, Radeon 780M, 32 GB, cerca de R$ 5.000) é a melhor escolha — sua iGPU forte roda um modelo 7B no Ollama ao lado do Home Assistant, do Frigate e do Whisper. Com orçamento apertado ou para uma máquina quase silenciosa, um mini PC Intel N150 como o Beelink EQ14 ou o GMKtec G3 Plus (cerca de R$ 1.400–1.900) roda o Home Assistant mais um modelo pequeno. Para a IA embarcada e a visão mais potentes, um mini PC Ryzen AI como o GEEKOM A9 Max (cerca de R$ 8.500–10.100) sobe mais um nível.',
        bullets: [
          'Melhor completo: Beelink SER8 (Ryzen 7 8845HS, 32 GB) ~R$ 5.000 — HA + Frigate + um modelo 7B no Ollama',
          'Econômico / quase silencioso: Intel N150 (Beelink EQ14, GMKtec G3 Plus) ~R$ 1.400–1.900 — HA + um modelo pequeno',
          'Melhor para IA local: GEEKOM A9 Max (Ryzen AI 9 HX 370) ~R$ 8.500–10.100 — a iGPU + NPU mais potentes para visão',
          'Priorize a RAM e uma iGPU capaz sobre a frequência da CPU; mais RAM comporta um modelo maior',
          'Veja o guia de hardware do local-llms para a profundidade de VRAM',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Escolhas rápidas', anchor: 'quick-picks' },
      { label: 'O que você precisa para HA + LLM', anchor: 'what-you-need' },
      { label: 'Os 5 mini PCs comparados', anchor: 'mini-pc-picks' },
      { label: 'Comparação', anchor: 'comparison' },
      { label: 'O que cada classe consegue rodar de fato?', anchor: 'ai-capabilities' },
      { label: 'Ideal para…', anchor: 'best-for' },
      { label: 'Orçamento vs desempenho', anchor: 'budget-performance' },
      { label: 'Qual você deveria comprar?', anchor: 'which-to-buy' },
      { label: 'Custo total e consumo de energia', anchor: 'cost-and-power' },
      { label: 'Notas de configuração', anchor: 'setup-notes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O melhor mini PC para o Home Assistant mais um LLM local tem RAM ampla e uma iGPU ou NPU capaz para rodar o hub e um modelo pequeno em uma só máquina.' },
      { type: 'plain-terms', content: 'Um mini PC é um computador pequeno e de baixo consumo que pode rodar toda a sua casa inteligente mais um modelo de IA local. As duas coisas que mais importam são a RAM (suficiente para abrigar o modelo e o hub) e um chip gráfico ou NPU capaz (para manter a IA responsiva). A frequência da CPU importa menos.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Priorize a RAM e uma GPU integrada ou NPU capaz sobre a frequência bruta da CPU',
          'Um mini PC Intel N150 econômico (~R$ 1.400–1.900) roda o Home Assistant e um modelo pequeno',
          'Um mini PC Ryzen 7/9 com uma iGPU forte (~R$ 5.000) lida com um modelo 7B ao lado do hub',
          'Um mini PC Ryzen AI com NPU (~R$ 8.500+) é a opção mais potente para IA embarcada e visão',
          'Um mini PC pode rodar Home Assistant, Ollama, Whisper e Frigate juntos',
          'Veja o guia de hardware do local-llms (entre clusters) para detalhes de VRAM',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Escolhas rápidas',
        content:
          '**Três configurações cobrem a maioria das instalações de Home Assistant + IA local.** Escolha pelo orçamento e pelo tamanho de modelo que você quer rodar.',
        items: [
          '**Melhor completo — Beelink SER8 (32 GB):** roda o Home Assistant, o Frigate e um modelo 7B no Ollama em uma só máquina. Cerca de R$ 5.000 para a configuração de 32 GB / 1 TB, embora os preços variem por revendedor — confira o preço atual.',
          '**Melhor econômico — Beelink EQ14 ou GMKtec G3 Plus (Intel N150):** roda o Home Assistant mais um modelo pequeno (1–3B) por cerca de R$ 1.400–1.900.',
          '**Melhor para IA local — GEEKOM A9 Max (Ryzen AI 9 HX 370):** a iGPU mais forte e uma NPU para visão embarcada; normalmente entre R$ 8.500 e R$ 10.100, dependendo da configuração e do revendedor.',
        ],
        affiliateLinks: [
          { label: 'Ver preço do SER8 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Ver preço do EQ14 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'Ver preço do A9 Max →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: 'Preços de agosto de 2026 — o preço de mini PCs muda rapidamente e varia por revendedor e configuração; confira o preço atual antes de comprar. No Brasil, impostos de importação tornam os preços especialmente voláteis.',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'O que você precisa para HA + LLM em uma máquina',
        content:
          '**Você precisa de RAM suficiente para abrigar o modelo mais o Home Assistant, e de uma iGPU ou NPU capaz para manter o modelo responsivo.** A frequência da CPU é secundária para essa carga.',
        items: [
          'RAM: folga suficiente para o tamanho de modelo que você quer mais o hub e os complementos.',
          'Gráficos/NPU: uma GPU integrada ou NPU capaz reduz a latência do LLM e do Whisper.',
          'Armazenamento: espaço para gravações se você também rodar o Frigate — veja [câmeras de segurança com IA local](/pt/smart-home/local-ai-security-camera).',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: 'Os 5 mini PCs comparados',
        content:
          '**Três classes cobrem a maioria das necessidades: série N de baixo consumo para IA leve, Ryzen/Core i com iGPU forte para um modelo 7B, e mini PCs com NPU para IA eficiente no dispositivo.** Abaixo está para que cada uma das cinco máquinas deste guia é indicada, com base nas especificações publicadas — não em testes independentes feitos pela PromptQuorum.',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Melhor opção completa para Home Assistant + um modelo 7B',
            verdict:
              'Com um Ryzen 7 8845HS e uma iGPU Radeon 780M, espera-se que esta seja a opção de uma só máquina mais forte deste guia para rodar o Home Assistant, o Frigate e um modelo de classe 7B no Ollama juntos. A iGPU 780M — não uma NPU — faz o trabalho pesado da inferência de LLM local.',
            pros: [
              'GPU integrada forte para modelos de classe 7B',
              'A configuração de 32 GB de RAM deixa folga para o hub mais complementos',
              'Lida com Home Assistant, Frigate e Whisper em uma só máquina',
              'Consumo em repouso moderado para essa classe de desempenho (veja a tabela de comparação)',
            ],
            cons: [
              'Mais caro que uma máquina N150',
              'Consumo mais alto sob carga de IA do que uma máquina de baixo consumo',
              'Exagerado se você só precisa do Home Assistant, sem IA local',
            ],
            affiliateLinks: [{ label: 'Ver preço →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Escolha econômica para Home Assistant + um modelo pequeno',
            verdict:
              'O Intel N150 é um chip de 6 W de TDP feito para eficiência, não para vazão — espera-se que rode o Home Assistant e um modelo de 1–3B com folga, mas um modelo 7B provavelmente ficaria bem mais lento nessa classe de hardware.',
            pros: [
              'O preço mais baixo deste guia',
              'Consumo em repouso muito baixo, bem adequado a uma máquina 24/7',
              'Operação quase silenciosa é comum nessa classe de consumo',
            ],
            cons: [
              'Mais lento em qualquer coisa acima de um modelo pequeno',
              'Menos folga de RAM que as opções de classe Ryzen',
              'Não é uma boa opção se você planeja adicionar o Frigate com várias câmeras',
            ],
            affiliateLinks: [{ label: 'Ver preço →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'Alternativa econômica ao EQ14',
            verdict:
              'Mesma classe Intel N150 do EQ14, com uma diferença notável: a RAM é um módulo SO-DIMM trocável pelo usuário na maioria das configurações, em vez de soldada — vale a pena verificar se você quiser expandir a RAM depois.',
            pros: [
              'Perfil de preço e desempenho semelhante ao EQ14',
              'RAM expansível (SO-DIMM, até 32 GB) em algumas configurações',
              'Expansão dupla de armazenamento M.2 para gravações do Frigate',
            ],
            cons: [
              'Mesmo teto de desempenho de IA que outras máquinas de classe N150',
              'Disponibilidade e configuração exata variam por revendedor',
            ],
            affiliateLinks: [{ label: 'Ver preço →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'Alternativa de maior desempenho ao SER8',
            verdict:
              'Construído em torno de um Ryzen 9 8945HS com TDP configurável até 70 W, espera-se que entregue vazão de IA sustentada semelhante ou um pouco superior ao SER8 quando configurado com 32 GB de RAM, ao custo de um consumo mais alto sob carga.',
            pros: [
              'TDP configurável para desempenho mais sustentado sob carga',
              'Mesma classe de iGPU do SER8',
              'Preço em versão sem componentes dá flexibilidade para escolher sua própria RAM/armazenamento',
            ],
            cons: [
              'Consumo mais alto sob carga sustentada do que o SER8',
              'Unidades sem componentes exigem compra separada de RAM e armazenamento',
              'O preço final pode variar com custos de importação',
            ],
            affiliateLinks: [{ label: 'Ver preço →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: 'Melhor para IA local e visão embarcada',
            verdict:
              'O Ryzen AI 9 HX 370 combina uma iGPU Radeon 890M forte com uma NPU dedicada. Para inferência de LLM local, espera-se que a iGPU continue fazendo a maior parte do trabalho — a vantagem da NPU aparece em tarefas de visão como a detecção de objetos do Frigate, não na vazão bruta do LLM.',
            pros: [
              'A iGPU mais forte (Radeon 890M) deste guia',
              'A NPU tira parte do trabalho de detecção visual da CPU/GPU',
              'O maior teto de RAM para rodar modelos maiores ao lado do hub',
            ],
            cons: [
              'O preço mais alto deste guia, com folga',
              'A NPU não acelera de forma significativa o chat de LLM local — não compre esperando um ganho de desempenho de LLM vindo da NPU',
              'Mais capacidade do que a maioria das instalações de Home Assistant realmente precisa',
            ],
            affiliateLinks: [{ label: 'Ver preço →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparação',
        content:
          '**Ajuste a máquina ao seu modelo-alvo e orçamento.** Os preços e os números de consumo são aproximados, obtidos de listagens do fabricante e análises de hardware independentes em agosto de 2026 — confira o preço atual antes de comprar.',
        columns: ['Modelo', 'CPU', 'GPU/iGPU', 'RAM (testada)', 'Preço aprox. (ago. 2026)', 'Consumo em repouso/típico', 'Ideal para'],
        rows: [
          { 'Modelo': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integrada)', 'RAM (testada)': '16 GB', 'Preço aprox. (ago. 2026)': '~R$ 1.400–1.900', 'Consumo em repouso/típico': '~5–12W em repouso, ~15–25W sob carga', 'Ideal para': 'HA + um modelo pequeno' },
          { 'Modelo': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD (integrada)', 'RAM (testada)': '16 GB (expansível)', 'Preço aprox. (ago. 2026)': '~R$ 1.400–1.900', 'Consumo em repouso/típico': '~5–12W em repouso, ~15–25W sob carga', 'Ideal para': 'HA + um modelo pequeno, flexibilidade de orçamento' },
          { 'Modelo': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', 'RAM (testada)': '32 GB', 'Preço aprox. (ago. 2026)': '~R$ 5.000', 'Consumo em repouso/típico': '~7–10W em repouso, ~45W+ sob carga de IA sustentada', 'Ideal para': 'HA + Frigate + um modelo 7B' },
          { 'Modelo': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': 'Mesma classe do SER8', 'RAM (testada)': '32 GB (à escolha)', 'Preço aprox. (ago. 2026)': '~R$ 5.000 (32GB) / ~R$ 3.400 sem componentes', 'Consumo em repouso/típico': '~7–9W em repouso, ~54–90W sob carga sustentada', 'Ideal para': 'Similar ao SER8, mais configurável' },
          { 'Modelo': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', 'RAM (testada)': '32 GB', 'Preço aprox. (ago. 2026)': '~R$ 8.500–10.100', 'Consumo em repouso/típico': '~7–9W em repouso, ~20–34W em uso típico', 'Ideal para': 'IA embarcada + visão mais potentes' },
        ],
        items: [
          'Para VRAM e profundidade de quantização, veja entre clusters [melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-pt.webp',
        imageCaption: 'Classes de Mini PC para IA do Home Assistant -- Orientação de RAM e capacidades',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: 'O que cada classe consegue rodar de fato?',
        content:
          '**A tabela abaixo reflete o desempenho esperado com base nas especificações publicadas de cada chip, não benchmarks medidos de forma independente pela PromptQuorum — trate como um ponto de partida para dimensionar sua instalação, não como uma garantia.**',
        columns: ['Classe de hardware', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper (voz)', 'Frigate (visão)'],
        rows: [
          { 'Classe de hardware': 'Intel N150 (EQ14, G3 Plus)', 'Home Assistant': 'Fluido', 'Ollama 3B': 'Utilizável', 'Ollama 7–8B': 'Lento, provavelmente não confortável', 'Whisper (voz)': 'Utilizável para trechos curtos', 'Frigate (visão)': 'Detecção básica, sem aceleração por NPU' },
          { 'Classe de hardware': 'Ryzen 7/9 8845HS/8945HS (SER8, UM890 Pro)', 'Home Assistant': 'Fluido', 'Ollama 3B': 'Fluido', 'Ollama 7–8B': 'Utilizável com a quantização típica', 'Whisper (voz)': 'Fluido', 'Frigate (visão)': 'Bom, acelerado por GPU' },
          { 'Classe de hardware': 'Ryzen AI 9 HX 370 (A9 Max)', 'Home Assistant': 'Fluido', 'Ollama 3B': 'Fluido', 'Ollama 7–8B': 'Fluido', 'Whisper (voz)': 'Fluido', 'Frigate (visão)': 'O melhor deste guia, assistido por NPU' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: 'Ideal para…',
        items: [
          '**Orçamento abaixo de R$ 1.500:** uma máquina Intel N150 (Beelink EQ14 ou GMKtec G3 Plus) cobre o Home Assistant mais um modelo pequeno.',
          '**Você quer um modelo 7B e o Frigate juntos:** suba para um mini PC Ryzen 7/9 com uma iGPU forte — o Beelink SER8 ou o Minisforum UM890 Pro.',
          '**Você quer uma máquina silenciosa, de baixo consumo, funcionando 24/7, e não precisa de um modelo grande:** uma máquina N150 consome menos em repouso e costuma ser quase silenciosa.',
          '**Você quer a IA embarcada e a visão mais potentes:** a combinação de uma iGPU forte e uma NPU do GEEKOM A9 Max é a opção mais capaz aqui, pelo preço mais alto.',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Orçamento vs desempenho',
        content:
          '**Compre a máquina mais barata que roda o seu modelo-alvo com latência aceitável — geralmente um mini PC Ryzen/Core i com uma iGPU forte para um modelo 7B.** Não gaste demais em capacidade de CPU ou NPU que você não vai usar — veja [Qual você deveria comprar?](#which-to-buy) abaixo para uma recomendação direta por caso de uso.',
        items: [
          'Econômico: uma máquina N150 de baixo consumo para HA mais um modelo minúsculo.',
          'Equilibrado: um mini PC Ryzen 7/9 com uma iGPU forte para um modelo 7B.',
          'Para a decisão de hardware mais ampla (Pi vs mini PC vs NAS), veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-pt.webp',
        imageCaption: 'Orçamento vs Desempenho: a Escolha -- Compre a caixa mais barata que caiba no seu modelo',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: 'Qual você deveria comprar?',
        content:
          '**Ajuste a máquina à sua carga de trabalho real, em vez de comprar a unidade mais capaz disponível.**',
        items: [
          'Se o Home Assistant é sua única carga de trabalho: compre o Beelink EQ14 ou o GMKtec G3 Plus.',
          'Se você quer o Home Assistant mais um modelo 7B local em uma só máquina: compre o Beelink SER8 (configuração de 32 GB).',
          'Se o desempenho de IA local é a prioridade e o orçamento permite: suba para o GEEKOM A9 Max ou o Minisforum UM890 Pro.',
          'Se você roda o Frigate com várias câmeras: priorize RAM e armazenamento para gravações em vez da velocidade bruta da CPU — veja [câmeras de segurança com IA local](/pt/smart-home/local-ai-security-camera) para planejar o armazenamento.',
        ],
        callouts: [
          { type: 'warning', text: 'Não compre o SER8 nem uma máquina de preço semelhante se você só quer o Home Assistant e algumas automações — uma máquina N150 é bem mais barata e suficiente para essa carga.' },
          { type: 'warning', text: 'Não compre uma máquina N150 se o seu objetivo é um modelo de classe 7B responsivo, Whisper e Frigate rodando ao mesmo tempo — espere que isso pareça lento com essa carga combinada.' },
          { type: 'warning', text: 'Não compre o GEEKOM A9 Max esperando que a NPU dele acelere o chat de LLM local — quem faz a maior parte desse trabalho é a iGPU; o benefício da NPU aparece principalmente em tarefas de visão como o Frigate.' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: 'Custo total e consumo de energia',
        content:
          '**O hardware é o único custo real — o software é gratuito.** Home Assistant, Ollama, um modelo local e Frigate são todos gratuitos e de código aberto; o mini PC em si é toda a linha de orçamento.',
        items: [
          '**Custo de hardware por faixa:** máquina N150 econômica ~R$ 1.400–1.900; máquina Ryzen 7/9 equilibrada (32 GB) ~R$ 5.000; máquina NPU de ponta ~R$ 8.500–10.100.',
          '**Consumo para uma máquina 24/7:** o consumo em repouso é amplamente semelhante entre as cinco máquinas deste guia (cerca de 5–10W), mas a carga de inferência de IA sustentada varia mais — uma máquina N150 consome bem menos sob carga (~15–25W) do que uma máquina Ryzen 7/9 rodando um modelo 7B (~45W ou mais). Para uma máquina que roda o tempo todo, essa diferença se acumula ao longo de um ano mais do que o desempenho de pico em benchmark.',
          'Os valores de TDP publicados pelo fabricante definem o limite superior (N150: 6W; 8845HS/8945HS: 45W, configurável até 70W em algumas placas; HX 370: configurável 15–54W) — o consumo real depende da carga de trabalho e das configurações do modo de energia na BIOS.',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Notas de configuração',
        content:
          '**Rode o Home Assistant OS ou um contêiner, instale o Ollama e confirme que a iGPU/NPU é usada para a inferência.** Mantenha a máquina cabeada à sua rede para confiabilidade.',
        items: [
          'Instale o Home Assistant — veja [primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Instale o Ollama e baixe um modelo pequeno — veja [como instalar o Ollama](/pt/local-llms/how-to-install-ollama).',
          'Cableie o Ollama no Home Assistant — veja [o guia de integração do Ollama](/pt/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Um mini PC pode fazer tanto o Home Assistant quanto um LLM local?', a: 'Sim. Um mini PC com RAM suficiente e uma GPU integrada ou NPU capaz roda o Home Assistant e um LLM local pequeno juntos, e pode adicionar Whisper e Frigate. Essa abordagem de uma máquina é a forma mais simples de ter uma casa inteligente com IA local.' },
          { q: 'De quanta RAM eu preciso?', a: 'Suficiente para abrigar o seu modelo-alvo mais o Home Assistant e quaisquer complementos. Um modelo pequeno precisa de pouca RAM, enquanto rodar um modelo 7B confortavelmente ao lado do hub se beneficia de RAM ampla. Ajuste a RAM ao maior modelo que você planeja rodar.' },
          { q: 'Intel ou AMD para um mini PC de Home Assistant?', a: 'Ambos funcionam. Uma máquina da série N da Intel de baixo consumo é a mais barata para uso leve; um mini PC AMD Ryzen ou Intel Core i com uma GPU integrada forte lida melhor com um modelo 7B. Escolha com base no tamanho de modelo e na latência que você quer.' },
          { q: 'Qual o mini PC mais barato que roda um LLM local?', a: 'Um mini PC da série N da Intel de baixo consumo é o mais barato que pode rodar o Home Assistant mais um modelo muito pequeno, embora as respostas sejam mais lentas. Para um assistente de classe 7B mais ágil, suba para um mini PC Ryzen ou Core i com uma iGPU forte.' },
          { q: 'Quanto custa a instalação completa, incluindo o software?', a: 'O mini PC é o único custo real. Home Assistant, Ollama, um modelo local e Frigate são todos gratuitos e de código aberto, então o total corresponde ao que você paga pelo hardware — de cerca de R$ 1.400 por uma máquina N150 até cerca de R$ 10.000+ pela opção com NPU mais potente deste guia.' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: 'Informações detalhadas de cada mini PC',
        content:
          '**Cada mini PC abaixo tem uma página dedicada cobrindo configuração, compatibilidade e considerações de compra.**',
        items: [
          '[Beelink SER8 — informações completas](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — informações completas](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — informações completas](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — informações completas](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — informações completas](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS vs servidor',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — o que a máquina roda',
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — integre o modelo',
          '[Melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm) — entre clusters: VRAM e detalhe de hardware',
          '[Câmeras de segurança com IA local](/pt/smart-home/local-ai-security-camera) — planejamento de armazenamento e número de câmeras para o Frigate',
          '[Solar de varanda sem nuvem com Home Assistant](/pt/balcony-solar/home-assistant-balcony-solar-no-cloud) — monitorize a produção solar localmente no mesmo equipamento',
          '[NVIDIA Jetson Orin Nano para IA em casa inteligente: análise (2027)](/pt/smart-home/nvidia-jetson-orin-nano-smart-home-review) — alternativa com GPU ao mini PC',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores Mini PCs para Home Assistant + IA Local (2026)',
      description: 'Melhor mini PC para Home Assistant 2026: Beelink SER8 (~R$ 5.000) para Frigate + um modelo 7B; máquinas Intel N150 (~R$ 1.400–1.900) econômicas; GEEKOM A9 Max (~R$ 8.500+) para IA embarcada. Comparados lado a lado.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Um mini PC pode fazer tanto o Home Assistant quanto um LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Um mini PC com RAM suficiente e uma GPU integrada ou NPU capaz roda o Home Assistant e um LLM local pequeno juntos, e pode adicionar Whisper e Frigate.' } },
        { '@type': 'Question', name: 'De quanta RAM eu preciso?', acceptedAnswer: { '@type': 'Answer', text: 'Suficiente para abrigar o seu modelo-alvo mais o Home Assistant e complementos. Um modelo pequeno precisa de pouca RAM; rodar um modelo 7B confortavelmente se beneficia de RAM ampla.' } },
        { '@type': 'Question', name: 'Intel ou AMD para um mini PC de Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Ambos funcionam. Uma máquina da série N da Intel de baixo consumo é a mais barata para uso leve; um AMD Ryzen ou Intel Core i com uma iGPU forte lida melhor com um modelo 7B.' } },
        { '@type': 'Question', name: 'Qual o mini PC mais barato que roda um LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Um mini PC da série N da Intel de baixo consumo pode rodar o Home Assistant mais um modelo muito pequeno, embora mais lento. Para um assistente 7B mais ágil, suba para um Ryzen ou Core i com uma iGPU forte.' } },
        { '@type': 'Question', name: 'Quanto custa a instalação completa, incluindo o software?', acceptedAnswer: { '@type': 'Answer', text: 'O mini PC é o único custo real. Home Assistant, Ollama, um modelo local e Frigate são todos gratuitos e de código aberto, então o total corresponde ao que você paga pelo hardware.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-23',
    next_refresh_due: '2027-02-23',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Home Assistant + 本地 AI 的最佳迷你 PC（2026）',
    seoTitle: '2026年最佳迷你 PC：Home Assistant 加本地大语言模型',
    intro:
      '2026年在一台机器上运行 Home Assistant 加本地 LLM 的最佳迷你 PC 是 Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB，约 $650），可运行中枢、Frigate 以及通过 Ollama 的 7B 模型。若预算有限，Beelink EQ14 或 GMKtec G3 Plus 这类 Intel N150 机器（约 $180–230）可运行 Home Assistant 和一个小型模型。若追求最强的设备端 AI 与视觉处理，GEEKOM A9 Max（Ryzen AI 9 HX 370，约 $1,099–1,299）则更进一步。本购买指南将五款具体机型并排比较，为每种使用场景给出直接建议，并涵盖配置注意事项——并交叉链接到 local-llms 硬件指南以了解 VRAM 细节。',
    metaDescription:
      '2026年 Home Assistant 最佳迷你 PC：Beelink SER8（约 $650）运行 Frigate + 7B 模型；预算型 Intel N150 机器（约 $180–230）；设备端 AI 首选 GEEKOM A9 Max（约 $1,099+）。并排比较。',
    heroImage: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-zh.webp',
    twitterDescription:
      '2026年 Home Assistant 最佳迷你 PC：Beelink SER8（约 $650）运行 Frigate + 7B 模型；实惠的 Intel N150 机器（约 $180–230）；设备端 AI 首选 GEEKOM A9 Max（约 $1,099+）。5款机型对比。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    audience: '为 Home Assistant 和本地 AI 选购迷你 PC 的人',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      '最佳迷你pc home assistant 本地ai',
      '迷你pc home assistant llm',
      'home assistant 本地ai 硬件',
      '迷你pc ollama home assistant',
      'home assistant 迷你pc 2026',
    ],
    leadAnswerBlock:
      '**2026年 Home Assistant 加本地 LLM 的最佳全能迷你 PC 是 Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB，约 $650）——它在一台机器上运行中枢、Frigate 以及 Ollama 的 7B 模型。** 若追求预算或近乎无声的配置，Beelink EQ14 或 GMKtec G3 Plus 这类 Intel N150 机器（约 $180–230）可运行 Home Assistant 和一个小型模型。若追求最强的设备端 AI，GEEKOM A9 Max（约 $1,099–1,299）则更进一步。为了 AI 延迟，优先考虑内存和 iGPU，而非纯粹的 CPU 主频。',
    quickAnswerTop: {
      zh: {
        question: '2026年 Home Assistant 和本地 AI 用哪台迷你 PC 最好？',
        answer:
          '对大多数人，Beelink SER8（Ryzen 7 8845HS、Radeon 780M、32 GB，约 $650）是最佳选择——其强力 iGPU 可在 Home Assistant、Frigate 和 Whisper 之外运行 Ollama 的 7B 模型。若追求预算或近乎无声的机器，Beelink EQ14 或 GMKtec G3 Plus 这类 Intel N150 迷你 PC（约 $180–230）可运行 Home Assistant 加一个小型模型。若追求最强的设备端 AI 与视觉处理，GEEKOM A9 Max（约 $1,099–1,299）这类 Ryzen AI 迷你 PC 则更进一步。',
        bullets: [
          '全能最佳：Beelink SER8（Ryzen 7 8845HS、32 GB）约 $650 —— HA + Frigate + Ollama 的 7B 模型',
          '预算 / 近乎无声：Intel N150（Beelink EQ14、GMKtec G3 Plus）约 $180–230 —— HA + 一个小型模型',
          '本地 AI 首选：GEEKOM A9 Max（Ryzen AI 9 HX 370）约 $1,099–1,299 —— 视觉处理最强的 iGPU + NPU',
          '优先内存和强力 iGPU，而非 CPU 主频；内存越多可容纳越大的模型',
          '关于 VRAM 细节，参见 local-llms 硬件指南',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '快速推荐', anchor: 'quick-picks' },
      { label: 'HA + LLM 需要什么', anchor: 'what-you-need' },
      { label: '5款迷你 PC 对比', anchor: 'mini-pc-picks' },
      { label: '比较', anchor: 'comparison' },
      { label: '每类实际能运行什么', anchor: 'ai-capabilities' },
      { label: '适合场景…', anchor: 'best-for' },
      { label: '预算对性能', anchor: 'budget-performance' },
      { label: '该买哪一款', anchor: 'which-to-buy' },
      { label: '总成本与功耗', anchor: 'cost-and-power' },
      { label: '配置注意事项', anchor: 'setup-notes' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant 加本地 LLM 的最佳迷你 PC，拥有充足内存和一块强力 iGPU 或 NPU，以在一台机器上运行中枢和一个小型模型。' },
      { type: 'plain-terms', content: '迷你 PC 是一台小而低功耗的电脑，可运行你的整个智能家居加一个本地 AI 模型。最重要的两点是内存（足以容纳模型和中枢）和一块强力的显示芯片或 NPU（以保持 AI 灵敏）。CPU 主频则次要。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '优先内存和一块强力的集成 GPU 或 NPU，而非纯粹的 CPU 主频',
          '低功耗的 Intel N150 迷你 PC（约 $180–220）可运行 Home Assistant 和一个小型模型',
          '配强力 iGPU 的 Ryzen 7/9 迷你 PC（约 $650）能在中枢旁边处理 7B 模型',
          '配 NPU 的 Ryzen AI 迷你 PC（约 $1,099+）是设备端 AI 与视觉处理的最强选择',
          '一台迷你 PC 可同时运行 Home Assistant、Ollama、Whisper 和 Frigate',
          '关于 VRAM 细节，参见跨集群的 local-llms 硬件指南',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: '快速推荐',
        content:
          '**三种配置可覆盖大多数 Home Assistant + 本地 AI 需求。** 按预算和你想运行的模型大小来选择。',
        items: [
          '**全能最佳 — Beelink SER8（32 GB）：** 在一台机器上运行 Home Assistant、Frigate 以及 Ollama 的 7B 模型。32 GB / 1 TB 配置约 $650，但价格因经销商而异——请查看当前价格。',
          '**预算最佳 — Beelink EQ14 或 GMKtec G3 Plus（Intel N150）：** 以约 $180–220 运行 Home Assistant 加一个小型模型（1–3B）。',
          '**本地 AI 首选 — GEEKOM A9 Max（Ryzen AI 9 HX 370）：** 视觉处理最强的 iGPU 加 NPU；根据配置和经销商，通常约为 $1,099–1,299。',
        ],
        affiliateLinks: [
          { label: '查看 SER8 价格 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: '查看 EQ14 价格 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: '查看 A9 Max 价格 →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
        note: '价格截至 2026 年 8 月——迷你 PC 价格变化很快，且因经销商和配置而异；购买前请确认当前价格。',
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: '在一台机器上实现 HA + LLM 需要什么',
        content:
          '**你需要足够的内存来容纳模型加 Home Assistant，以及一块强力的 iGPU 或 NPU 来保持模型灵敏。** 对这类工作负载，CPU 主频是次要的。',
        items: [
          '内存：为你想要的模型大小，外加中枢和加载项，留出足够余量。',
          '显示/NPU：一块强力的集成 GPU 或 NPU 可降低 LLM 和 Whisper 的延迟。',
          '存储：若你还运行 Frigate，要为录像留出空间——参见[本地 AI 安防摄像头](/zh/smart-home/local-ai-security-camera)。',
        ],
      },
      productCards: {
        id: 'mini-pc-picks',
        title: '5款迷你 PC 对比',
        content:
          '**三类涵盖大多数需求：轻量 AI 用低功耗 N 系列，7B 模型用配强力 iGPU 的 Ryzen/Core i，高效的设备端 AI 用配 NPU 的迷你 PC。** 以下是本指南中五款具体机型各自的定位，基于其公开规格——而非 PromptQuorum 的独立测试结果。',
        rankedItems: [
          {
            rank: 1,
            name: 'Beelink SER8',
            tagline: 'Home Assistant + 7B 模型的全能最佳选择',
            verdict:
              '搭载 Ryzen 7 8845HS 和 Radeon 780M iGPU，预计是本指南中一台机器同时运行 Home Assistant、Frigate 和 Ollama 上 7B 级模型的最强选择。780M iGPU——而非 NPU——承担本地 LLM 推理的主要工作。',
            pros: [
              '为 7B 级模型配备强力集成 GPU',
              '32 GB 内存配置为中枢和加载项留出余量',
              '可在一台机器上处理 Home Assistant、Frigate 和 Whisper',
              '相对这一性能级别，待机功耗适中（见比较表）',
            ],
            cons: [
              '比 N150 机型贵',
              'AI 负载下功耗高于低功耗机型',
              '若只需 Home Assistant 而不需要本地 AI，则显得过剩',
            ],
            affiliateLinks: [{ label: '查看价格 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs' }],
          },
          {
            rank: 2,
            name: 'Beelink EQ14',
            tagline: 'Home Assistant + 小型模型的预算之选',
            verdict:
              'Intel N150 是一款为效率而非吞吐量设计的 6W TDP 芯片——预计能轻松运行 Home Assistant 和 1–3B 模型，但 7B 模型在这类硬件上很可能明显变慢。',
            pros: [
              '本指南中价格最低',
              '待机功耗极低，非常适合 24/7 常开设备',
              '这一功耗级别下近乎无声的运行较为常见',
            ],
            cons: [
              '处理超出小型模型的任务时较慢',
              '内存余量小于 Ryzen 级别机型',
              '若计划为多摄像头添加 Frigate，则不够合适',
            ],
            affiliateLinks: [{ label: '查看价格 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150' }],
          },
          {
            rank: 3,
            name: 'GMKtec G3 Plus',
            tagline: 'EQ14 的预算替代品',
            verdict:
              '与 EQ14 同为 Intel N150 级别，一个显著区别是：大多数配置中，其内存为用户可更换的 SO-DIMM，而非焊接式——若日后想升级内存，值得留意这一点。',
            pros: [
              '价格与性能表现与 EQ14 相近',
              '部分配置支持内存升级（SO-DIMM，最高 32 GB）',
              '双 M.2 存储扩展，方便存放 Frigate 录像',
            ],
            cons: [
              'AI 性能上限与其他 N150 级别机型相同',
              '可用性与具体配置因经销商而异',
            ],
            affiliateLinks: [{ label: '查看价格 →', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor' }],
          },
          {
            rank: 4,
            name: 'Minisforum UM890 Pro',
            tagline: 'SER8 的性能向替代品',
            verdict:
              '以 TDP 可调至 70W 的 Ryzen 9 8945HS 为核心，配置 32 GB 内存后，预计能提供与 SER8 相近或略高的持续 AI 吞吐量，代价是负载下功耗更高。',
            pros: [
              'TDP 可调，负载下性能更持久',
              '与 SER8 同级别的 iGPU',
              '裸机定价让你可自由选择内存/存储',
            ],
            cons: [
              '持续负载下功耗高于 SER8',
              '裸机版本需另购内存和存储',
              '因进口成本，最终售价可能波动',
            ],
            affiliateLinks: [{ label: '查看价格 →', url: 'https://www.minisforum.com/products/minisforum-um890-pro' }],
          },
          {
            rank: 5,
            name: 'GEEKOM A9 Max',
            tagline: '本地 AI 与设备端视觉处理的最佳之选',
            verdict:
              'Ryzen AI 9 HX 370 将强力的 Radeon 890M iGPU 与专用 NPU 相结合。对本地 LLM 推理而言，预计仍由 iGPU 承担大部分工作——NPU 的优势体现在 Frigate 物体检测这类视觉任务上，而非纯粹的 LLM 吞吐量。',
            pros: [
              '本指南中最强的 iGPU（Radeon 890M）',
              'NPU 可分担 CPU/GPU 的部分视觉检测工作',
              '内存上限最高，可在中枢旁边运行更大的模型',
            ],
            cons: [
              '本指南中价格最高，且差距明显',
              'NPU 并不能显著加速本地 LLM 聊天——不要期待 NPU 带来 LLM 性能提升而购买本机型',
              '性能超出大多数 Home Assistant 配置的实际需求',
            ],
            affiliateLinks: [{ label: '查看价格 →', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/' }],
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比较',
        content:
          '**根据你的目标模型和预算选择机型。** 价格与功耗数据为近似值，来自 2026 年 8 月的厂商信息和独立硬件评测——购买前请确认当前价格。',
        columns: ['机型', 'CPU', 'GPU/iGPU', '内存（测试配置）', '大致价格（2026年8月）', '待机/典型功耗', '适合场景'],
        rows: [
          { '机型': 'Beelink EQ14', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD（集成）', '内存（测试配置）': '16 GB', '大致价格（2026年8月）': '约 $189–220', '待机/典型功耗': '待机约5–12W，负载约15–25W', '适合场景': 'HA + 一个小型模型' },
          { '机型': 'GMKtec G3 Plus', 'CPU': 'Intel N150', 'GPU/iGPU': 'Intel UHD（集成）', '内存（测试配置）': '16 GB（可升级）', '大致价格（2026年8月）': '约 $180–230', '待机/典型功耗': '待机约5–12W，负载约15–25W', '适合场景': 'HA + 一个小型模型，预算灵活' },
          { '机型': 'Beelink SER8', 'CPU': 'Ryzen 7 8845HS', 'GPU/iGPU': 'Radeon 780M', '内存（测试配置）': '32 GB', '大致价格（2026年8月）': '约 $650', '待机/典型功耗': '待机约7–10W，持续 AI 负载约45W以上', '适合场景': 'HA + Frigate + 7B 模型' },
          { '机型': 'Minisforum UM890 Pro', 'CPU': 'Ryzen 9 8945HS', 'GPU/iGPU': '与 SER8 同级别', '内存（测试配置）': '32 GB（自选）', '大致价格（2026年8月）': '约 $649（32GB）/ 约 $439（裸机）', '待机/典型功耗': '待机约7–9W，持续负载约54–90W', '适合场景': '类似 SER8，配置更灵活' },
          { '机型': 'GEEKOM A9 Max', 'CPU': 'Ryzen AI 9 HX 370', 'GPU/iGPU': 'Radeon 890M + NPU', '内存（测试配置）': '32 GB', '大致价格（2026年8月）': '约 $1,099–1,299', '待机/典型功耗': '待机约7–9W，典型使用约20–34W', '适合场景': '最强设备端 AI + 视觉处理' },
        ],
        items: [
          '关于 VRAM 和量化细节，参见跨集群的[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm)。',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-class-comparison-hero-zh.webp',
        imageCaption: 'Home Assistant AI用迷你主机分类 -- 内存建议与可运行内容',
      },
      aiCapabilities: {
        id: 'ai-capabilities',
        title: '每类实际能运行什么',
        content:
          '**下表反映的是基于各芯片公开规格得出的预期性能，而非 PromptQuorum 独立测量的基准测试——请将其视为规划配置的起点，而非保证。**',
        columns: ['硬件级别', 'Home Assistant', 'Ollama 3B', 'Ollama 7–8B', 'Whisper（语音）', 'Frigate（视觉）'],
        rows: [
          { '硬件级别': 'Intel N150（EQ14、G3 Plus）', 'Home Assistant': '流畅', 'Ollama 3B': '可用', 'Ollama 7–8B': '较慢，可能不够舒适', 'Whisper（语音）': '短片段可用', 'Frigate（视觉）': '基础检测，无 NPU 加速' },
          { '硬件级别': 'Ryzen 7/9 8845HS/8945HS（SER8、UM890 Pro）', 'Home Assistant': '流畅', 'Ollama 3B': '流畅', 'Ollama 7–8B': '常规量化下可用', 'Whisper（语音）': '流畅', 'Frigate（视觉）': '良好，GPU 加速' },
          { '硬件级别': 'Ryzen AI 9 HX 370（A9 Max）', 'Home Assistant': '流畅', 'Ollama 3B': '流畅', 'Ollama 7–8B': '流畅', 'Whisper（语音）': '流畅', 'Frigate（视觉）': '本指南中最佳，NPU 辅助' },
        ],
      },
      decisionFilters: {
        id: 'best-for',
        title: '适合场景…',
        items: [
          '**预算低于 $250：** Intel N150 机型（Beelink EQ14 或 GMKtec G3 Plus）可满足 Home Assistant 加一个小型模型。',
          '**想同时运行 7B 模型和 Frigate：** 升级到配强力 iGPU 的 Ryzen 7/9 迷你 PC——Beelink SER8 或 Minisforum UM890 Pro。',
          '**想要安静、低功耗、24/7 常开且不需要大型模型：** N150 机型待机功耗最低，且通常近乎无声。',
          '**想要最强的设备端 AI 与视觉处理：** GEEKOM A9 Max 强力 iGPU 与 NPU 的组合是这里能力最强的选择，价格也最高。',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: '预算对性能',
        content:
          '**购买能以可接受延迟运行你目标模型的最便宜机器——通常是为 7B 模型配强力 iGPU 的 Ryzen/Core i 迷你 PC。** 不要为用不上的 CPU 或 NPU 性能多花钱——具体场景的直接建议见下方的[该买哪一款](#which-to-buy)。',
        items: [
          '预算型：为 HA 加一个极小模型选低功耗 N150 机器。',
          '均衡型：为 7B 模型选配强力 iGPU 的 Ryzen 7/9 迷你 PC。',
          '关于更广泛的硬件决策（Pi 对迷你 PC 对 NAS），参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
        ],
        image: '/images/best-mini-pc-home-assistant-local-ai-pick-guide-hero-zh.webp',
        imageCaption: '预算与性能的选择 -- 购买适合你模型的最便宜设备',
      },
      whichToBuy: {
        id: 'which-to-buy',
        title: '该买哪一款',
        content:
          '**按实际工作负载选择机型，而不是买能买到的最强机型。**',
        items: [
          '若 Home Assistant 是唯一工作负载：购买 Beelink EQ14 或 GMKtec G3 Plus。',
          '若想在一台机器上同时运行 Home Assistant 和本地 7B 模型：购买 Beelink SER8（32 GB 配置）。',
          '若本地 AI 性能是首要考量且预算允许：升级到 GEEKOM A9 Max 或 Minisforum UM890 Pro。',
          '若使用多摄像头运行 Frigate：优先考虑用于录像的内存和存储，而非单纯的 CPU 速度——存储规划参见[本地 AI 安防摄像头](/zh/smart-home/local-ai-security-camera)。',
        ],
        callouts: [
          { type: 'warning', text: '如果你只需要 Home Assistant 和少量自动化，不要购买 SER8 或类似价位的机型——N150 机型便宜得多，且足以满足这类需求。' },
          { type: 'warning', text: '如果你的目标是同时流畅运行 7B 级模型、Whisper 和 Frigate，不要购买 N150 机型——在这种组合负载下预计会感到明显变慢。' },
          { type: 'warning', text: '不要期待 GEEKOM A9 Max 的 NPU 能加速本地 LLM 聊天而购买它——这部分工作主要由 iGPU 承担；NPU 的优势主要体现在 Frigate 这类视觉任务上。' },
        ],
      },
      costAndPower: {
        id: 'cost-and-power',
        title: '总成本与功耗',
        content:
          '**硬件是唯一的实际成本——软件是免费的。** Home Assistant、Ollama、本地模型和 Frigate 都是免费开源的；迷你 PC 本身就是全部预算支出。',
        items: [
          '**按级别划分的硬件成本：** 预算型 N150 机型约 $180–230；均衡型 Ryzen 7/9 机型（32 GB）约 $650；顶配 NPU 机型约 $1,099–1,299。',
          '**24/7 设备的功耗：** 本指南中五款机型的待机功耗大体相近（约 5–10W），但持续 AI 推理负载下差异更大——N150 机型在负载下的功耗（约15–25W）明显低于运行 7B 模型的 Ryzen 7/9 机型（约45W 或更高）。对于全天候运行的设备，这一差异在一年内累积下来，比峰值基准性能更重要。',
          '厂商公布的 TDP 数值划定了上限（N150：6W；8845HS/8945HS：45W，部分主板可调至 70W；HX 370：可调 15–54W）——实际功耗取决于工作负载和 BIOS 电源模式设置。',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: '配置注意事项',
        content:
          '**运行 Home Assistant OS 或容器，安装 Ollama，并确认推理使用了 iGPU/NPU。** 为可靠性，把机器有线连接到你的网络。',
        items: [
          '安装 Home Assistant——参见[入门](/zh/smart-home/home-assistant-getting-started)。',
          '安装 Ollama 并拉取一个小型模型——参见[如何安装 Ollama](/zh/local-llms/how-to-install-ollama)。',
          '把 Ollama 接入 Home Assistant——参见[Ollama 集成指南](/zh/smart-home/home-assistant-ollama-integration)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '一台迷你 PC 能同时做 Home Assistant 和本地 LLM 吗？', a: '能。一台内存足够、配强力集成 GPU 或 NPU 的迷你 PC 可同时运行 Home Assistant 和一个小型本地 LLM，并能加入 Whisper 和 Frigate。这种单机方式是获得本地 AI 智能家居最简单的途径。' },
          { q: '我需要多少内存？', a: '足以容纳你的目标模型，外加 Home Assistant 和任何加载项。小型模型只需不多的内存，而要在中枢旁边从容运行 7B 模型则受益于充裕内存。把内存匹配到你计划运行的最大模型。' },
          { q: 'Home Assistant 迷你 PC 选 Intel 还是 AMD？', a: '两者都行。低功耗的 Intel N 系列机器在轻量使用上最便宜；配强力集成 GPU 的 AMD Ryzen 或 Intel Core i 迷你 PC 能更好地处理 7B 模型。按你想要的模型大小和延迟来选。' },
          { q: '能运行本地 LLM 的最便宜迷你 PC 是哪台？', a: '低功耗的 Intel N 系列迷你 PC 是能运行 Home Assistant 加一个非常小模型的最便宜机型，尽管响应较慢。要想 7B 级助手更灵敏，就升级到配强力 iGPU 的 Ryzen 或 Core i 迷你 PC。' },
          { q: '包含软件在内，整套配置需要多少钱？', a: '迷你 PC 是唯一的实际成本。Home Assistant、Ollama、本地模型和 Frigate 都是免费开源的，因此总花费就是你为硬件支付的金额——从 N150 机型约 $180 起，到本指南中最强的 NPU 配置约 $1,200 以上。' },
        ],
      },
      unitReviews: {
        id: 'unit-reviews',
        title: '各款迷你主机的详细信息',
        content:
          '**下方每款迷你 PC 都有专门页面，涵盖配置、兼容性和购买注意事项。**',
        items: [
          '[Beelink SER8 — 完整信息](/smart-home/beelink-ser8-local-ai-review)',
          '[GEEKOM A9 Max — 完整信息](/smart-home/geekom-a9-max-local-ai-review)',
          '[Minisforum UM890 Pro — 完整信息](/smart-home/minisforum-um890-pro-local-ai-review)',
          '[Beelink EQ14 — 完整信息](/smart-home/beelink-eq14-local-ai-review)',
          '[GMKtec G3 Plus — 完整信息](/smart-home/gmktec-g3-plus-local-ai-review)',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — Pi 对迷你 PC 对 NAS 对服务器',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 这台机器运行什么',
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 把模型接入',
          '[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm) — 跨集群：VRAM 与硬件细节',
          '[本地 AI 安防摄像头](/zh/smart-home/local-ai-security-camera) — Frigate 的存储与摄像头数量规划',
          '[Home Assistant 本地监控阳台太阳能（无云端）](/zh/balcony-solar/home-assistant-balcony-solar-no-cloud) — 在同一台设备上本地监控太阳能输出',
          '[NVIDIA Jetson Orin Nano智能家居AI评测（2027年）](/zh/smart-home/nvidia-jetson-orin-nano-smart-home-review) — 迷你 PC 之外的 GPU 方案',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant + 本地 AI 的最佳迷你 PC（2026）',
      description: '2026年 Home Assistant 最佳迷你 PC：Beelink SER8（约 $650）运行 Frigate + 7B 模型；预算型 Intel N150 机器（约 $180–230）；设备端 AI 首选 GEEKOM A9 Max（约 $1,099+）。并排比较。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-23',
      about: [{ '@type': 'Thing', name: '迷你 PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '本地 LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '一台迷你 PC 能同时做 Home Assistant 和本地 LLM 吗？', acceptedAnswer: { '@type': 'Answer', text: '能。一台内存足够、配强力集成 GPU 或 NPU 的迷你 PC 可同时运行 Home Assistant 和一个小型本地 LLM，并能加入 Whisper 和 Frigate。' } },
        { '@type': 'Question', name: '我需要多少内存？', acceptedAnswer: { '@type': 'Answer', text: '足以容纳你的目标模型，外加 Home Assistant 和加载项。小型模型只需不多内存；从容运行 7B 模型则受益于充裕内存。' } },
        { '@type': 'Question', name: 'Home Assistant 迷你 PC 选 Intel 还是 AMD？', acceptedAnswer: { '@type': 'Answer', text: '两者都行。低功耗 Intel N 系列在轻量使用上最便宜；配强力 iGPU 的 AMD Ryzen 或 Intel Core i 能更好地处理 7B 模型。' } },
        { '@type': 'Question', name: '能运行本地 LLM 的最便宜迷你 PC 是哪台？', acceptedAnswer: { '@type': 'Answer', text: '低功耗 Intel N 系列迷你 PC 可运行 Home Assistant 加一个非常小的模型，但较慢。要 7B 助手更灵敏，就升级到配强力 iGPU 的 Ryzen 或 Core i。' } },
        { '@type': 'Question', name: '包含软件在内，整套配置需要多少钱？', acceptedAnswer: { '@type': 'Answer', text: '迷你 PC 是唯一的实际成本。Home Assistant、Ollama、本地模型和 Frigate 都是免费开源的，因此总花费就是你为硬件支付的金额。' } },
      ],
    },
  },
}
