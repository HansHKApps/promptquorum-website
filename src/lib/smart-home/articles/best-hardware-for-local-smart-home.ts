import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-en.webp',
    affiliateDisclosure: true,
    title: 'Best Hardware for a Local Smart Home + Local AI (2026)',
    seoTitle: 'Best Local Smart Home + AI Hardware (2026)',
    intro:
      'The best hardware for a local smart home follows one decision: an Intel N100/N150 mini PC or a Raspberry Pi 5 runs the Home Assistant hub, an Intel iGPU (OpenVINO) or a Hailo-8L M.2 module accelerates Frigate camera detection, an SSD or NAS stores recordings, and a used RTX 3090 box is the step-up for running a local LLM. This guide picks each layer, prices every tier at current 2026 rates, and helps you choose for HA-only versus HA-plus-AI so you buy once instead of twice.',
    metaDescription:
      'Best local smart home + AI hardware in 2026: Intel N100 mini PC or Raspberry Pi 5 hub, Frigate accelerator (Intel iGPU/Hailo), SSD storage, and an LLM step-up. Updated pricing.',
    twitterDescription:
      'Local smart home hardware in 2026: Intel N100 mini PC or Pi 5 hub, Frigate accelerator (Intel iGPU/Hailo-8L), SSD storage, used RTX 3090 for a local LLM. Current 2026 prices.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing hardware to run Home Assistant and local AI',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'best hardware home assistant local ai',
      'home assistant hardware',
      'mini pc home assistant local llm',
      'raspberry pi vs mini pc home assistant',
      'local smart home server',
    ],
    leadAnswerBlock:
      '**Build a local smart home in four layers: the hub (Intel N100/N150 mini PC or Raspberry Pi 5), a Frigate accelerator (Intel iGPU via OpenVINO or a Hailo-8L M.2 module), storage (an SSD, or a NAS for many cameras), and — if you want a local LLM — a step-up box such as a used RTX 3090.** For Home Assistant alone a Raspberry Pi is enough; the deciding factor is whether you add camera detection and local AI. Already know your goal? Jump to [which hardware to buy for each setup](#quick-picks).',
    quickAnswerTop: {
      en: {
        question: 'What hardware do I need for a local smart home with AI?',
        answer:
          'Start with the hub: an Intel N100/N150 mini PC or a Raspberry Pi 5 runs Home Assistant. Add a Frigate accelerator for cameras — an Intel iGPU via OpenVINO covers most setups, and a Hailo-8L or Hailo-8 M.2 module adds detection capacity (the Google Coral is now legacy). Store recordings on an SSD, or a NAS for many cameras. For a local LLM, step up to a mini PC with a capable iGPU/NPU or a used RTX 3090 box. If you think you will add local AI within a year, buy the mini PC now rather than a Raspberry Pi you will replace later.',
        bullets: [
          'Hub: Intel N100/N150 mini PC or Raspberry Pi 5',
          'Frigate: Intel iGPU (OpenVINO) or Hailo-8L M.2 — Coral is legacy',
          'Storage: SSD, or a NAS for many cameras',
          'Local LLM step-up: mini PC iGPU/NPU or used RTX 3090',
          'Decide first: HA-only or HA + cameras + local AI — it determines whether you buy once or twice',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Which Hardware Should You Buy?', anchor: 'quick-picks' },
      { label: 'What the Hub Needs', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'Frigate Accelerator', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Dedicated Server', anchor: 'server' },
      { label: "Don't Overspend", anchor: 'dont-overspend' },
      { label: 'Power Consumption', anchor: 'power' },
      { label: 'One Box or Two?', anchor: 'one-or-two' },
      { label: 'HA-only vs HA + AI', anchor: 'picking' },
      { label: 'A General Buying Recommendation', anchor: 'what-id-buy' },
      { label: 'Complete Stacks', anchor: 'stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'An Intel N100/N150 mini PC or a Raspberry Pi 5 runs the hub; add an Intel iGPU or Hailo-8L for Frigate, an SSD or NAS for storage, and a used RTX 3090 box if you want a local LLM.' },
      { type: 'plain-terms', content: 'The hub software (Home Assistant) is light and runs on a small computer like a Raspberry Pi. Camera detection (Frigate) needs an accelerator — an Intel graphics chip via OpenVINO, or a Hailo M.2 module. Adding a local language model needs more power still, which is where a mini PC with a capable graphics chip, or a used graphics card such as an RTX 3090, comes in.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Hub: an Intel N100/N150 mini PC (~$190–220) or a Raspberry Pi 5 (~$180–305 as of August 2026, up sharply on a DRAM shortage) runs Home Assistant',
          'Frigate: an Intel iGPU (OpenVINO, built into most mini PCs), a Hailo-8L M.2 module (~$70), or a Hailo-8 M.2 (~$170–200) accelerates camera detection — the Google Coral is now legacy and no longer Frigate\'s recommendation for new builds',
          'Storage: an SSD for recordings, or a NAS (Synology DS225+ ~$340, DS925+ ~$640, UGREEN NASync ~$650–730) once you run several cameras',
          'Local LLM step-up: a Ryzen mini PC (32GB RAM, ~$649) or a used RTX 3090 box (~$1,050–1,300 as of August 2026 — prices have risen well above 2024–2025 levels)',
          'Decide HA-only vs HA + cameras + local AI before buying — it changes the right box, and buying the mini PC now beats replacing a Pi later',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Which Hardware Should You Buy?',
        content:
          '**Match your goal to a box, not the other way around.** The table below maps each smart-home goal to the hardware that covers it — every row links to the fuller pick further down the page.',
        columns: ['Your goal', 'Buy this', 'Est. price (Aug 2026)'],
        rows: [
          { 'Your goal': 'Home Assistant only', 'Buy this': '[Home Assistant Green or Raspberry Pi 5](#raspberry-pi)', 'Est. price (Aug 2026)': '$199 (Green) / $180–305 (Pi 5)' },
          { 'Your goal': 'HA + Frigate cameras', 'Buy this': '[Intel N100/N150 mini PC](#mini-pc)', 'Est. price (Aug 2026)': '~$190–220' },
          { 'Your goal': 'HA + a local LLM', 'Buy this': '[Ryzen mini PC, 32GB RAM](#mini-pc)', 'Est. price (Aug 2026)': '~$649' },
          { 'Your goal': 'HA + a larger local LLM', 'Buy this': '[Used RTX 3090 server](#server)', 'Est. price (Aug 2026)': '~$1,050–1,300 (GPU only)' },
        ],
        tableFormat: true,
        note: 'Prices are current as of August 2026 and move — GPU and DRAM pricing especially has been volatile this year. Check the linked listing before buying.',
        callouts: [
          { type: 'tip', text: 'Not sure yet whether you will want local AI? See [Don\'t Overspend](#dont-overspend) before you buy the expensive box.' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'What the Hub Needs',
        content:
          '**Home Assistant itself is lightweight and runs on modest hardware; the heavy demands come from Frigate camera detection and a local LLM.** Size the box for what you will add, not just the hub.',
        items: [
          'The hub needs little compute for device control and automations.',
          'Frigate object detection needs an accelerator: an Intel iGPU via OpenVINO handles most setups, and a Hailo-8L or Hailo-8 M.2 module adds capacity. The Google Coral USB/M.2 TPU still works but is now legacy — Frigate no longer recommends it for new builds.',
          'Larger Whisper models and local LLM inference are the most demanding workloads — plan RAM and a GPU/NPU around those.',
          'Store camera recordings on an SSD; move to a NAS once you run several cameras continuously.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**A Raspberry Pi 5 is the lowest-power way to run Home Assistant for typical smart home use, but a 2026 DRAM shortage has pushed board prices up sharply — the 8GB board now runs roughly $180–220 and the 16GB board $280–305, both well above their original ~$80/$120 launch prices, with analysts not expecting normalisation before late 2027.** It struggles with LLM inference and large Whisper models.',
        items: [
          'Great for device control, automations, and a small local voice setup.',
          'LLM inference on a Pi is limited to very small, slow models — pair it with a Hailo-8L M.2 HAT if you want Frigate detection.',
          'Choose a Pi 5 if you want basics at low power and are confident you will not add a local LLM. If you think you will want local AI within the next year, skip the Pi and buy the mini PC now — it costs little more and saves you buying twice.',
          'For a plug-and-play appliance, the Home Assistant Green ships ready to run (about $199 in 2026, up from a $99 launch price). Home Assistant Yellow was discontinued in October 2025 — Green is now the only official first-party hub.',
        ],
        affiliateLinks: [
          { label: 'Check Raspberry Pi 5 price →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '$180–305' },
          { label: 'Check Home Assistant Green price →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '$199' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (and Room for an LLM)',
        content:
          '**A mini PC is the best single-box choice for Home Assistant plus local AI, with enough RAM and a capable iGPU or NPU to run a small LLM and accelerate Frigate.** It balances power, size, and cost, and this is the section to spend more on if you are buying one box for both jobs.',
        items: [
          'Best budget pick: a low-power Intel N100/N150 mini PC runs Home Assistant and accelerates Frigate via the Intel iGPU (OpenVINO) — the practical default for a hub-plus-cameras box. The Beelink EQ14 (Intel N150, 16GB RAM) is priced around $190–220 as of August 2026 — good for 24/7 operation and low electricity use, but underpowered for a local LLM.',
          'Best pick for local AI: for a local LLM on the same box, step up to a Ryzen mini PC with 32GB RAM. The Beelink SER8 (Ryzen 7 8845HS) is priced around $649 as of August 2026 and runs a Qwen3 8B or Llama 3.1 8B model via Ollama at usable speed, alongside Home Assistant and Frigate. Prioritise RAM and a capable integrated GPU or NPU for lower latency.',
          'If you are buying one box for Home Assistant and local AI together, the Ryzen mini PC is worth the extra cost over the N150 — it is the only one of the two that actually runs an LLM at usable speed.',
          'For specific picks, see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai) and the cross-cluster [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Check EQ14 price →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '$190–220' },
          { label: 'Check SER8 price →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: '~$649' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: 'Running Security Cameras? Choose Your Frigate Accelerator',
        content:
          '**How many cameras and how much detection headroom you need decides the accelerator, separately from which box runs the hub.** Frigate no longer recommends the Google Coral for new builds — it now steers new users toward Hailo, alongside a host\'s built-in Intel iGPU.',
        items: [
          '1–4 cameras: the Intel iGPU built into an N100/N150 mini PC, run via OpenVINO, covers most home setups at no extra hardware cost.',
          '4–10 cameras or if you want more detection headroom on non-Intel hardware: a Hailo-8L M.2 module (~$70 as of August 2026) is Frigate\'s current low-power recommendation — it behaves like the Coral used to, as a first-class-supported add-in card.',
          '10+ cameras or heavier enrichments (face/license-plate recognition on top of detection): a Hailo-8 M.2 module (~$170–200) adds meaningfully more throughput.',
          'Already own a Coral? It still works — this is only about what to buy for a new build, not a reason to replace a working Coral setup.',
        ],
        affiliateLinks: [
          { label: 'Check Hailo-8L price →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: '~$70' },
          { label: 'Check Hailo-8 price →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: '~$170–200' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**A NAS can host Home Assistant in a container alongside storage and Frigate recordings, if it has enough CPU and RAM — a good option if you already own one, but not the right reason to buy your first NAS.** Don\'t buy a NAS specifically to run a local LLM: a dedicated mini PC or GPU box is a better AI platform for the money.',
        items: [
          '2–4 cameras / lighter storage: the Synology DS225+ (~$340 as of August 2026) covers Home Assistant-in-a-container plus Frigate recordings for a small camera count.',
          '4–10 cameras / more headroom: the Synology DS925+ (~$640) adds CPU/RAM headroom for more add-ons and cameras.',
          'Storage plus local AI in one box: UGREEN NASync models (DXP4800 Plus-class, ~$650–730) ship with a built-in local-LLM option and newer hardware (DDR5, 10GbE without add-on cards) at a similar price to the DS925+.',
          'LLM inference on a NAS still depends heavily on its hardware — most NAS units lack a capable discrete GPU, so treat the built-in LLM option as a convenience feature, not a substitute for the RTX 3090 tier below if you actually want a large model.',
        ],
        affiliateLinks: [
          { label: 'Check DS225+ price →', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: '~$340' },
          { label: 'Check DS925+ price →', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: '~$640' },
          { label: 'Check UGREEN NASync price →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: '~$650–730' },
        ],
      },
      server: {
        id: 'server',
        title: 'Dedicated Server (LLM Step-Up)',
        content:
          '**A dedicated server with a discrete GPU is the step-up for running a larger local LLM alongside many cameras.** It offers the most headroom at higher cost and power — and GPU prices moved a lot in 2026, so treat the figures below as a snapshot, not a fixed number.',
        items: [
          'A used RTX 3090 (24GB VRAM) is one of the strongest VRAM-per-dollar options for local LLMs, but its used price has risen sharply through 2026 to roughly $1,050–1,300 as of August — well above the $600–800 it traded at in 2024–2025. Q4-quantized models up to roughly 70B may be possible depending on quantization, context size, and offloading; treat this as a capability range, not a guarantee for every 70B model.',
          'A used RTX 3060 (12GB) is the budget alternative for a discrete-GPU box, now running roughly $220–290 used as of August 2026 — it handles 7B–13B models comfortably without the RTX 3090\'s VRAM headroom or price.',
          'Best for many cameras, a larger LLM, and multiple users. Higher power draw and cost than a mini PC — see the power-consumption section below before committing to this tier.',
          'Overkill for a basic smart home — reserve for heavy local-AI use, and keep the Home Assistant hub on a separate low-power box for reliability (see One Box or Two? below).',
        ],
        affiliateLinks: [
          { label: 'Check RTX 3090 used listings →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: '~$1,050–1,300' },
          { label: 'Check RTX 3060 used listings →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: '~$220–290' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-en.svg',
        imageCaption: 'Local LLM capacity by hardware tier: Raspberry Pi 5 runs only tiny models, an Intel N100/N150 Mini PC handles small models, a Ryzen Mini PC (32GB RAM) runs 7B–8B models, and a used RTX 3090 (24GB VRAM) scales to about 70B at Q4 quantization depending on setup.',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: "Don't Overspend on Your Home Assistant Server",
        content:
          '**More hardware than your use case needs is the single most common wasted purchase in this category — match the box to what you actually plan to run.**',
        items: [
          'Home Assistant only? You don\'t need an RTX GPU, and you probably don\'t need a mini PC — a Raspberry Pi 5 or Home Assistant Green covers it.',
          'Home Assistant plus Frigate cameras? You don\'t need an expensive workstation — an Intel N100/N150 mini PC with its built-in iGPU is enough for most home camera counts.',
          'Home Assistant plus a small local LLM? A 32GB Ryzen mini PC is enough for an 8B-class model — you don\'t need a discrete GPU yet.',
          'Want a large local LLM (32B and up)? That is the point where a discrete GPU, such as a used RTX 3090, actually earns its cost.',
        ],
      },
      power: {
        id: 'power',
        title: 'Power Consumption Matters for a 24/7 Box',
        content:
          '**This hardware runs continuously, so for a box that never turns off, electricity cost over a year can matter as much as the purchase price.** Roughly, in order of typical draw:',
        columns: ['Hardware', 'Typical role', 'Power draw', 'Best for'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Typical role': 'Hub only', 'Power draw': 'Very low (a few watts)', 'Best for': 'Home Assistant' },
          { 'Hardware': 'Intel N100/N150 mini PC', 'Typical role': 'Hub + Frigate', 'Power draw': 'Low (~10–15W typical)', 'Best for': '24/7 hub + cameras' },
          { 'Hardware': 'Ryzen mini PC (32GB)', 'Typical role': 'Hub + Frigate + small LLM', 'Power draw': 'Moderate (~15–35W typical, higher under LLM load)', 'Best for': 'One-box local AI' },
          { 'Hardware': 'RTX 3090 server', 'Typical role': 'Heavy local AI', 'Power draw': 'High (GPU alone can draw 250W+ under load)', 'Best for': 'Large models, not 24/7 idle' },
        ],
        tableFormat: true,
        note: 'For a server that runs 24/7, power consumption can matter more than the initial purchase price — a 250W GPU running continuously adds meaningfully to a power bill in a way a 10W mini PC does not. This is one reason to keep a heavy GPU server as a separate, deliberately-run box rather than an always-on one (see One Box or Two? below).',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: 'One Box or Two?',
        content:
          '**One box is simpler and cheaper; two boxes protect Home Assistant\'s reliability from a heavier AI workload.** Which one is right depends on how much you value uptime versus simplicity.',
        items: [
          'One box (a single mini PC): simplest and cheapest — a Ryzen mini PC runs Home Assistant, Frigate, and a small local LLM together. The right choice for most home setups.',
          'Two boxes (a low-power hub plus a separate AI machine): keeps Home Assistant ultra-reliable on a low-power box that rarely needs a reboot, while heavier AI work — a used RTX 3090 server, for example — runs and can be restarted independently without taking your automations down with it.',
          'Choose two boxes if you run Home Assistant for anything safety-relevant (locks, alarms, heating) and want that layer isolated from a GPU box that you might reboot, update, or experiment on.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Picking for HA-only vs HA + AI',
        content:
          '**Choose a Pi for HA-only, and a mini PC for HA plus local AI — that single decision drives the right hardware.** Match the box to the workload, not the other way around.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-en.svg',
        imageCaption: 'Decision tree for smart home hardware: adding Frigate cameras and a local LLM lead to four builds — Raspberry Pi 5, Intel N100/N150 Mini PC, Ryzen Mini PC (32GB RAM), or an RTX 3090 server (24GB VRAM).',
        columns: ['Hardware', 'Relative price', 'HA-only', 'Can run a local LLM', 'Frigate acceleration'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Relative price': 'Low', 'HA-only': 'Yes', 'Can run a local LLM': 'Very small only, slow', 'Frigate acceleration': 'Hailo-8L M.2 HAT' },
          { 'Hardware': 'Intel N100/N150 mini PC', 'Relative price': 'Medium', 'HA-only': 'Yes', 'Can run a local LLM': 'Small models', 'Frigate acceleration': 'Intel iGPU (OpenVINO)' },
          { 'Hardware': 'Ryzen mini PC', 'Relative price': 'Medium', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (7B–8B)', 'Frigate acceleration': 'iGPU or Hailo M.2' },
          { 'Hardware': 'NAS', 'Relative price': 'Medium–High', 'HA-only': 'Yes (container)', 'Can run a local LLM': 'Depends on hardware', 'Frigate acceleration': 'Depends on model' },
          { 'Hardware': 'Server + used RTX 3090', 'Relative price': 'High', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (up to ~70B, quantization-dependent)', 'Frigate acceleration': 'Discrete GPU' },
        ],
        note: 'For power draw per tier, see [Power Consumption](#power) above; for whether to run everything on one box, see [One Box or Two?](#one-or-two).',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: 'A General Buying Recommendation for 2026',
        content:
          '**If you are choosing one box today and are not sure which tier fits, this is a reasonable default based on the trade-offs above — your actual needs may point elsewhere, and none of the picks below have been tested or reviewed by PromptQuorum.**',
        items: [
          'For a normal local smart home (Home Assistant plus a handful of Zigbee/Matter devices): an Intel N150 mini PC is a sensible default — it covers Frigate too if you add cameras later.',
          'For Home Assistant plus cameras plus a small local AI assistant: a Ryzen mini PC with 32GB RAM is a reasonable one-box choice — it is the cheapest box that actually runs an 8B-class LLM at usable speed.',
          'For serious local AI (32B-class models or larger): a separate RTX 3090 server, kept apart from the Home Assistant hub, is the reasonable step-up given current used-GPU pricing.',
          'A new AI-first installation is generally a weaker fit for a Raspberry Pi given 2026 Pi pricing and its LLM limitations — a mini PC is usually a closer price and a much better AI platform.',
        ],
      },
      stacks: {
        id: 'stacks',
        title: 'Complete Local Smart-Home Stacks',
        content:
          '**Most buyers need more than one product — a hub, a Frigate accelerator, and storage at minimum, plus an AI box if you want local LLM inference.** These three stacks combine the picks above by scenario; every product links back to its full recommendation earlier on this page.',
        columns: ['Stack', 'Hub', 'Frigate accelerator', 'AI', 'Est. total (Aug 2026)'],
        rows: [
          { 'Stack': 'Starter (HA only)', 'Hub': '[Home Assistant Green or Pi 5](#raspberry-pi)', 'Frigate accelerator': '—', 'AI': '—', 'Est. total (Aug 2026)': '~$199–305' },
          { 'Stack': 'HA + cameras', 'Hub': '[N150 mini PC](#mini-pc)', 'Frigate accelerator': '[Intel iGPU, or Hailo-8L if you want more headroom](#frigate-accelerator)', 'AI': '—', 'Est. total (Aug 2026)': '~$190–290' },
          { 'Stack': 'HA + cameras + local AI', 'Hub': '[Ryzen mini PC, 32GB](#mini-pc)', 'Frigate accelerator': 'Built-in iGPU, or [Hailo-8L for more cameras](#frigate-accelerator)', 'AI': 'Runs on the same box (8B-class model)', 'Est. total (Aug 2026)': '~$649–720' },
          { 'Stack': 'HA + cameras + large local AI', 'Hub': '[N150 mini PC (kept separate for reliability)](#mini-pc)', 'Frigate accelerator': '[Hailo-8](#frigate-accelerator)', 'AI': '[Used RTX 3090 server, run separately](#server)', 'Est. total (Aug 2026)': '~$1,400–1,700' },
        ],
        tableFormat: true,
        note: 'The last stack keeps the Home Assistant hub on its own low-power box and runs the RTX 3090 as a separate machine — see [One Box or Two?](#one-or-two) for why.',
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What hardware does Frigate recommend?', a: 'For new builds Frigate recommends an Intel iGPU via OpenVINO, or a Hailo-8L (~$70, budget) or Hailo-8 (~$170–200, faster) M.2 module for more detection capacity. The Google Coral USB/M.2 TPU still works but is now legacy — Frigate no longer recommends it for new installations except on very low-power hardware.' },
          { q: 'Can a Raspberry Pi run a local LLM too?', a: 'A Pi can run only very small models, and slowly, so it is not ideal for a responsive local-LLM assistant. It handles Home Assistant and basic voice well, but for local AI a mini PC with a capable iGPU or NPU — or a used RTX 3090 box — is the better choice.' },
          { q: 'How much RAM do I need?', a: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM and other AI services on the same box, more RAM helps; a mini PC with 32GB RAM and a capable iGPU/NPU keeps a Qwen3 8B or Llama 3.1 8B model responsive. Match RAM to the model size you plan to run.' },
          { q: 'What mini PC should I get?', a: 'For HA plus cameras, an Intel N100/N150 mini PC accelerates Frigate via OpenVINO. For HA plus a local LLM, step up to a Ryzen mini PC with 32GB RAM. See the best mini PCs for Home Assistant + local AI guide for picks.' },
          { q: 'One box or two?', a: 'One box (a mini PC) is simplest and runs Home Assistant plus a small local LLM together. Split into two if you want to keep the hub ultra-reliable on a low-power box and offload heavy AI to a separate machine such as a used RTX 3090 server.' },
          { q: 'What about power consumption for a 24/7 box?', a: 'It matters more than the purchase price for hardware that never turns off. A Raspberry Pi draws a few watts, an N100/N150 mini PC around 10–15W, a Ryzen mini PC 15–35W depending on load, and a discrete GPU like an RTX 3090 can draw 250W+ under load — one reason to run a heavy GPU server as a separate box rather than always-on.' },
          { q: 'Is a Raspberry Pi still worth it given 2026 pricing?', a: 'For Home Assistant only, yes — it is still the lowest-power option. But a 2026 DRAM shortage has pushed Pi 5 prices up sharply (roughly $180–305 depending on RAM as of August 2026, versus an original $80–120), narrowing the price gap to an N100/N150 mini PC. If you might add cameras or a local LLM within a year, the mini PC is usually the better buy now.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — specific picks',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the full stack',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the AI box runs',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) — cross-cluster: VRAM and hardware depth',
          '[Best GPU Buying Guide for Local LLMs](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — deeper GPU picks if you need more VRAM than an RTX 3090',
          '[Cloud GPU Rental Guide](/power-local-llm/cloud-gpu-rental-guide-2026) — renting GPU time instead of buying, if you only need it occasionally',
          '[Best Balcony Solar Batteries 2026](/balcony-solar/best-balcony-solar-batteries-2026) — battery storage for your local home energy setup',
          '[Best Smart Home Hubs for Local Control (2027)](/smart-home/best-smart-home-hubs-2027) — dedicated hub picks',
          '[NVIDIA Jetson Orin Nano for Smart Home AI: Review (2027)](/smart-home/nvidia-jetson-orin-nano-smart-home-review) — GPU-class local AI hardware',
          '[Best Zigbee and Thread USB Dongles (2027)](/smart-home/best-zigbee-thread-dongles-2027) — radio hardware for Zigbee and Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Hardware for a Local Smart Home + Local AI (2026)',
      description: 'Best local smart home + AI hardware in 2026: Intel N100 mini PC or Raspberry Pi 5 hub, Frigate accelerator (Intel iGPU/Hailo), SSD storage, and an LLM step-up.',
      url: 'https://www.promptquorum.com/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Home Assistant hardware' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: 'Local LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What hardware does Frigate recommend?', acceptedAnswer: { '@type': 'Answer', text: 'For new builds Frigate recommends an Intel iGPU via OpenVINO, or a Hailo-8L (~$70) or Hailo-8 (~$170–200) M.2 module for more detection capacity. The Google Coral TPU still works but is now legacy and no longer recommended for new installations.' } },
        { '@type': 'Question', name: 'Can a Raspberry Pi run a local LLM too?', acceptedAnswer: { '@type': 'Answer', text: 'A Pi can run only very small models, and slowly. It handles Home Assistant and basic voice well, but for a responsive local-LLM assistant a mini PC with a capable iGPU or NPU, or a used RTX 3090 box, is better.' } },
        { '@type': 'Question', name: 'How much RAM do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM on the same box, more RAM helps; a mini PC with 32GB RAM keeps a Qwen3 8B or Llama 3.1 8B model responsive. Match RAM to the model size you plan to run.' } },
        { '@type': 'Question', name: 'What mini PC should I get?', acceptedAnswer: { '@type': 'Answer', text: 'For HA plus cameras, an Intel N100/N150 mini PC accelerates Frigate via OpenVINO. For HA plus a local LLM, step up to a Ryzen mini PC with 32GB RAM. See the best mini PCs for Home Assistant + local AI guide.' } },
        { '@type': 'Question', name: 'One box or two?', acceptedAnswer: { '@type': 'Answer', text: 'One mini PC runs Home Assistant plus a small local LLM together. Split into two if you want the hub ultra-reliable on a low-power box and heavy AI offloaded to a separate machine such as a used RTX 3090 server.' } },
        { '@type': 'Question', name: 'What about power consumption for a 24/7 box?', acceptedAnswer: { '@type': 'Answer', text: 'It matters more than purchase price for hardware that never turns off. A Raspberry Pi draws a few watts, an N100/N150 mini PC around 10–15W, a Ryzen mini PC 15–35W, and a discrete GPU like an RTX 3090 can draw 250W+ under load.' } },
        { '@type': 'Question', name: 'Is a Raspberry Pi still worth it given 2026 pricing?', acceptedAnswer: { '@type': 'Answer', text: 'For Home Assistant only, yes. But a 2026 DRAM shortage pushed Pi 5 prices to roughly $180–305 depending on RAM, versus an original $80–120, narrowing the gap to an N100/N150 mini PC — which is the better buy if you might add cameras or a local LLM within a year.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-ar.webp',
    affiliateDisclosure: true,
    title: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي المحلي (⁨2026⁩)',
    seoTitle: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي (⁨2026⁩)',
    intro:
      'تتبع أفضل أجهزة المنزل الذكي المحلي قرارًا واحدًا: يشغّل mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5 مركز Home Assistant، ويسرّع iGPU من Intel (عبر OpenVINO) أو وحدة Hailo-8L بصيغة M.2 كشف كاميرات Frigate، ويخزّن SSD أو NAS التسجيلات، ويكون صندوق RTX 3090 مستعمل هو الترقية لتشغيل نموذج LLM محلي. يختار هذا الدليل كل طبقة، ويسعّر كل فئة بأسعار 2026 الحالية، ويساعدك على الاختيار بين HA فقط أو HA مع الذكاء الاصطناعي حتى تشتري مرة واحدة لا مرتين.',
    metaDescription:
      'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي 2026: مركز mini PC بمعالج Intel N100 أو Raspberry Pi 5، مسرّع Frigate (Intel iGPU/Hailo)، تخزين SSD، وترقية LLM. أسعار محدّثة.',
    twitterDescription:
      'أجهزة المنزل الذكي المحلي 2026: مركز mini PC بمعالج Intel N100 أو Pi 5، مسرّع Frigate (Intel iGPU/Hailo-8L)، تخزين SSD، وRTX 3090 مستعمل لنموذج LLM محلي. أسعار 2026 المحدّثة.',
    readTime: '11 دقيقة للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المشترون الذين يختارون أجهزة لتشغيل Home Assistant والذكاء الاصطناعي المحلي',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'أفضل أجهزة home assistant ذكاء اصطناعي محلي',
      'أجهزة home assistant',
      'mini pc home assistant نموذج llm محلي',
      'raspberry pi مقابل mini pc home assistant',
      'خادم المنزل الذكي المحلي',
    ],
    leadAnswerBlock:
      '**ابنِ المنزل الذكي المحلي في أربع طبقات: المركز (mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5)، ومسرّع Frigate (Intel iGPU عبر OpenVINO أو وحدة Hailo-8L بصيغة M.2)، والتخزين (SSD، أو NAS لعدة كاميرات)، وإذا أردت نموذج LLM محلي — صندوق ترقية مثل RTX 3090 مستعمل.** لـ Home Assistant وحده يكفي Raspberry Pi؛ العامل الحاسم هو ما إذا كنت ستضيف كشف الكاميرا والذكاء الاصطناعي المحلي. هل تعرف هدفك بالفعل؟ انتقل مباشرة إلى [ما الأجهزة التي تشتريها لكل إعداد](#quick-picks).',
    quickAnswerTop: {
      ar: {
        question: 'ما الأجهزة التي أحتاجها للمنزل الذكي المحلي مع الذكاء الاصطناعي؟',
        answer:
          'ابدأ بالمركز: يشغّل mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5 نظام Home Assistant. أضف مسرّع Frigate للكاميرات — يغطي iGPU من Intel عبر OpenVINO معظم الإعدادات، وتضيف وحدة Hailo-8L أو Hailo-8 بصيغة M.2 سعة كشف أكبر (أصبح Google Coral إرثًا قديمًا). خزّن التسجيلات على SSD، أو NAS لعدة كاميرات. لنموذج LLM محلي، ارتقِ إلى mini PC مع iGPU/NPU قادرة أو صندوق RTX 3090 مستعمل. إذا كنت تعتقد أنك ستضيف ذكاءً اصطناعيًا محليًا خلال عام، اشترِ mini PC الآن بدلًا من Raspberry Pi ستستبدله لاحقًا.',
        bullets: [
          'المركز: mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5',
          'Frigate: Intel iGPU (OpenVINO) أو Hailo-8L بصيغة M.2 — Coral إرث قديم',
          'التخزين: SSD، أو NAS لعدة كاميرات',
          'ترقية LLM محلي: mini PC بـ iGPU/NPU أو RTX 3090 مستعمل',
          'إذا كنت قد تضيف ذكاءً اصطناعيًا محليًا خلال عام، اشترِ mini PC الآن — أرخص من استبدال Raspberry Pi لاحقًا',
          'قرر أولًا: HA فقط أم HA + كاميرات + ذكاء اصطناعي محلي — هذا يحدد ما إذا كنت تشتري مرة أم مرتين',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما الأجهزة التي يجب شراؤها؟', anchor: 'quick-picks' },
      { label: 'ما يحتاجه المركز', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'مسرّع Frigate', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'خادم مخصص', anchor: 'server' },
      { label: 'لا تُبالغ في الإنفاق', anchor: 'dont-overspend' },
      { label: 'استهلاك الطاقة', anchor: 'power' },
      { label: 'صندوق واحد أم اثنان؟', anchor: 'one-or-two' },
      { label: 'HA فقط أم HA + ذكاء اصطناعي', anchor: 'picking' },
      { label: 'توصية شراء عامة', anchor: 'what-id-buy' },
      { label: 'تجميعات كاملة', anchor: 'stacks' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يشغّل mini PC بمعالج Intel N100/N150 أو Raspberry Pi 5 المركز؛ أضف Intel iGPU أو Hailo-8L لـ Frigate، وSSD أو NAS للتخزين، وصندوق RTX 3090 مستعمل إذا أردت نموذج LLM محلي.' },
      { type: 'plain-terms', content: 'برنامج المركز (Home Assistant) خفيف ويعمل على حاسوب صغير مثل Raspberry Pi. يحتاج كشف الكاميرا (Frigate) إلى مسرّع — شريحة رسومات Intel عبر OpenVINO أو وحدة Hailo بصيغة M.2. تتطلب إضافة نموذج لغوي محلي قدرة أكبر، وهنا يأتي دور mini PC بشريحة رسومات قادرة أو بطاقة رسومات مستعملة مثل RTX 3090.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'المركز: mini PC بمعالج Intel N100/N150 (بحدود ‎$190–220‎) أو Raspberry Pi 5 (بحدود ‎$180–305‎ حتى أغسطس 2026، ارتفع بشدة بسبب نقص ذاكرة DRAM) يشغّل Home Assistant',
          'Frigate: iGPU من Intel (مدمجة في معظم أجهزة mini PC، عبر OpenVINO)، أو وحدة Hailo-8L بصيغة M.2 (بحدود ‎$70‎)، أو Hailo-8 بصيغة M.2 (بحدود ‎$170–200‎) تسرّع كشف الكاميرا — أصبح Google Coral إرثًا قديمًا ولم يعد توصية Frigate للأنظمة الجديدة',
          'التخزين: SSD للتسجيلات، أو NAS (‎Synology DS225+‎ بحدود ‎$340‎، ‎DS925+‎ بحدود ‎$640‎، ‎UGREEN NASync‎ بحدود ‎$650–730‎) عند تشغيل عدة كاميرات',
          'ترقية LLM محلي: mini PC بمعالج Ryzen (32GB RAM، بحدود ‎$649‎) أو صندوق RTX 3090 مستعمل (بحدود ‎$1,050–1,300‎ حتى أغسطس 2026 — ارتفعت الأسعار كثيرًا عن مستويات 2024–2025)',
          'قرر HA فقط أم HA + كاميرات + ذكاء اصطناعي محلي قبل الشراء — يغيّر ذلك الجهاز المناسب، وشراء mini PC الآن أفضل من استبدال Pi لاحقًا',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'ما الأجهزة التي يجب شراؤها؟',
        content:
          '**طابق هدفك مع الصندوق المناسب، وليس العكس.** يربط الجدول أدناه كل هدف من أهداف المنزل الذكي بالأجهزة التي تغطيه — كل صف يقود إلى التوصية الأكمل لاحقًا في الصفحة.',
        columns: ['هدفك', 'اشترِ هذا', 'السعر التقديري (أغسطس 2026)'],
        rows: [
          { 'هدفك': 'Home Assistant فقط', 'اشترِ هذا': '[Home Assistant Green أو Raspberry Pi 5](#raspberry-pi)', 'السعر التقديري (أغسطس 2026)': '‎$199‎ (Green) / ‎$180–305‎ (Pi 5)' },
          { 'هدفك': 'HA + كاميرات Frigate', 'اشترِ هذا': '[mini PC بمعالج Intel N100/N150](#mini-pc)', 'السعر التقديري (أغسطس 2026)': 'بحدود ‎$190–220‎' },
          { 'هدفك': 'HA + نموذج LLM محلي', 'اشترِ هذا': '[mini PC بمعالج Ryzen، 32GB RAM](#mini-pc)', 'السعر التقديري (أغسطس 2026)': 'بحدود ‎$649‎' },
          { 'هدفك': 'HA + نموذج LLM محلي أكبر', 'اشترِ هذا': '[خادم RTX 3090 مستعمل](#server)', 'السعر التقديري (أغسطس 2026)': 'بحدود ‎$1,050–1,300‎ (GPU فقط)' },
        ],
        tableFormat: true,
        note: 'الأسعار حالية حتى أغسطس 2026 وتتغيّر — أسعار GPU وذاكرة DRAM كانت متقلبة بشكل خاص هذا العام. تحقق من السعر في الإعلان المرتبط قبل الشراء.',
        callouts: [
          { type: 'tip', text: 'لم تحسم أمرك بعد بشأن الذكاء الاصطناعي المحلي؟ راجع [لا تُبالغ في الإنفاق](#dont-overspend) قبل شراء الصندوق الأغلى.' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'ما يحتاجه المركز',
        content:
          '**Home Assistant خفيف بحد ذاته ويعمل على أجهزة متواضعة؛ الطلبات الثقيلة تأتي من كشف كاميرات Frigate ونموذج LLM محلي.** حجّم الصندوق لما ستضيفه، ليس فقط للمركز.',
        items: [
          'يحتاج المركز حسابًا ضئيلًا للتحكم في الأجهزة والأتمتة.',
          'يحتاج كشف الأجسام في Frigate إلى مسرّع: يتعامل iGPU من Intel عبر OpenVINO مع معظم الإعدادات، وتضيف وحدة Hailo-8L أو Hailo-8 بصيغة M.2 سعة أكبر. لا يزال Google Coral (USB/M.2 TPU) يعمل لكنه أصبح إرثًا قديمًا — لم يعد Frigate يوصي به للأنظمة الجديدة.',
          'نماذج Whisper الأكبر واستنتاج نموذج LLM المحلي هي أثقل أحمال العمل — خطط لـ RAM وGPU/NPU حولها.',
          'خزّن تسجيلات الكاميرا على SSD؛ انتقل إلى NAS عند تشغيل عدة كاميرات باستمرار.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi 5 هو أقل استهلاكًا للطاقة طريقةً لتشغيل Home Assistant للاستخدام المنزلي الذكي الاعتيادي، لكن نقص ذاكرة DRAM في 2026 رفع أسعار اللوحات بشدة — أصبح سعر لوحة 8GB نحو ‎$180–220‎ ولوحة 16GB نحو ‎$280–305‎، وكلاهما أعلى بكثير من سعري الإطلاق الأصليين البالغين نحو ‎$80‎/‎$120‎، ولا يتوقع المحللون عودة الأسعار لطبيعتها قبل أواخر 2027.** لا يزال يجد صعوبة مع استنتاج النموذج اللغوي ونماذج Whisper الكبيرة.',
        items: [
          'ممتاز للتحكم في الأجهزة والأتمتة وإعداد صوتي محلي صغير.',
          'استنتاج النموذج اللغوي على Pi محدود بنماذج صغيرة جدًا وبطيئة — أضف وحدة Hailo-8L بصيغة M.2 HAT إذا أردت كشف Frigate.',
          'اختر Pi 5 إذا أردت الأساسيات باستهلاك طاقة منخفض وكنت متأكدًا من أنك لن تضيف نموذج LLM محلي. إذا كنت تعتقد أنك ستريد ذكاءً اصطناعيًا محليًا خلال السنة القادمة، تخطَّ Pi واشترِ mini PC الآن — يكلّف أكثر بقليل فقط ويوفر عليك الشراء مرتين.',
          'للحصول على جهاز جاهز للتشغيل الفوري، يُشحن Home Assistant Green مهيَّأً للتشغيل (نحو ‎$199‎ في 2026، ارتفاعًا من سعر إطلاق ‎$99‎). أُوقف Home Assistant Yellow في أكتوبر 2025 — أصبح Green الآن المركز الرسمي الوحيد من الشركة نفسها.',
        ],
        affiliateLinks: [
          { label: 'تحقق من سعر Raspberry Pi 5 ←', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '‎$180–305‎' },
          { label: 'تحقق من سعر Home Assistant Green ←', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '‎$199‎' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (ومساحة لنموذج LLM)',
        content:
          '**mini PC هو أفضل خيار بصندوق واحد لـ Home Assistant مع الذكاء الاصطناعي المحلي، بما يكفي من RAM وiGPU أو NPU قادرة لتشغيل نموذج LLM صغير وتسريع Frigate.** يوازن القدرة والحجم والتكلفة، وهذه الفئة تستحق إنفاقًا أكبر إذا كنت تشتري صندوقًا واحدًا لكلتا المهمتين.',
        items: [
          'أفضل خيار اقتصادي: يشغّل mini PC بمعالج Intel N100/N150 منخفض الطاقة نظام Home Assistant ويسرّع Frigate عبر iGPU من Intel (OpenVINO) — الخيار العملي الافتراضي لصندوق مركز مع كاميرات. يبلغ سعر Beelink EQ14 (Intel N150، 16GB RAM) نحو ‎$190–220‎ حتى أغسطس 2026 — جيد للتشغيل على مدار الساعة واستهلاك كهرباء منخفض، لكنه ضعيف لنموذج LLM محلي.',
          'أفضل خيار للذكاء الاصطناعي المحلي: لنموذج LLM محلي على نفس الصندوق، ارتقِ إلى mini PC بمعالج Ryzen مع 32GB RAM. يبلغ سعر Beelink SER8 (Ryzen 7 8845HS) نحو ‎$649‎ حتى أغسطس 2026 ويشغّل نموذج Qwen3 8B أو Llama 3.1 8B عبر Ollama بسرعة قابلة للاستخدام، إلى جانب Home Assistant وFrigate. أعطِ الأولوية لـ RAM وGPU متكاملة أو NPU قادرة لزمن استجابة أقل.',
          'إذا كنت ستشتري صندوقًا واحدًا لـ Home Assistant والذكاء الاصطناعي المحلي معًا، فإن التكلفة الإضافية لـ mini PC بمعالج Ryzen مقارنة بـ N150 تستحق العناء — فهو الوحيد من الاثنين الذي يشغّل فعليًا نموذج LLM بسرعة قابلة للاستخدام.',
          'للاختيارات المحددة، راجع [أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) ومتعدد العناقيد [أفضل mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'تحقق من سعر EQ14 ←', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '‎$190–220‎' },
          { label: 'تحقق من سعر SER8 ←', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: 'بحدود ‎$649‎' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: 'هل ستشغّل كاميرات أمنية؟ اختر مسرّع Frigate الخاص بك',
        content:
          '**عدد الكاميرات ومقدار احتياطي الكشف الذي تحتاجه هو ما يحدد المسرّع، بمعزل عن الصندوق الذي يشغّل المركز.** لم يعد Frigate يوصي بـ Google Coral للأنظمة الجديدة — أصبح يوجّه المستخدمين الجدد نحو Hailo، إلى جانب iGPU المدمجة في الجهاز المضيف.',
        items: [
          '1–4 كاميرات: تغطي iGPU من Intel المدمجة في mini PC بمعالج N100/N150، عبر OpenVINO، معظم الإعدادات المنزلية دون أي تكلفة أجهزة إضافية.',
          '4–10 كاميرات، أو إذا أردت احتياطي كشف أكبر على أجهزة غير Intel: وحدة Hailo-8L بصيغة M.2 (بحدود ‎$70‎ حتى أغسطس 2026) هي توصية Frigate الحالية منخفضة الطاقة — تعمل كما كان يعمل Coral سابقًا، كبطاقة إضافية مدعومة رسميًا من الدرجة الأولى.',
          '10+ كاميرات أو إثراءات أثقل (تعرّف على الوجوه/لوحات السيارات إضافة إلى الكشف): تضيف وحدة Hailo-8 بصيغة M.2 (بحدود ‎$170–200‎) قدرة معالجة أكبر بشكل ملموس.',
          'هل تملك Coral بالفعل؟ لا يزال يعمل — هذا يخص فقط ما يجب شراؤه في نظام جديد، وليس سببًا لاستبدال إعداد Coral يعمل بشكل جيد.',
        ],
        affiliateLinks: [
          { label: 'تحقق من سعر Hailo-8L ←', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: 'بحدود ‎$70‎' },
          { label: 'تحقق من سعر Hailo-8 ←', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: 'بحدود ‎$170–200‎' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**يمكن لـ NAS استضافة Home Assistant في حاوية إلى جانب التخزين وتسجيلات Frigate، إذا كان يمتلك CPU وRAM كافيين — خيار جيد إذا كنت تملك واحدًا بالفعل، لكنه ليس السبب الصحيح لشراء أول NAS لك.** لا تشترِ NAS خصيصًا لتشغيل نموذج LLM محلي: صندوق mini PC مخصص أو صندوق GPU يمثّل منصة ذكاء اصطناعي أفضل بنفس المال.',
        items: [
          '2–4 كاميرات / تخزين أخف: يغطي Synology DS225+ (بحدود ‎$340‎ حتى أغسطس 2026) نظام Home Assistant المُحوسب في حاوية إلى جانب تسجيلات Frigate لعدد قليل من الكاميرات.',
          '4–10 كاميرات / حيّز أكبر: يضيف Synology DS925+ (بحدود ‎$640‎) حيّز CPU/RAM أكبر للمزيد من الإضافات والكاميرات.',
          'التخزين مع الذكاء الاصطناعي المحلي في صندوق واحد: تأتي طرازات UGREEN NASync (بفئة DXP4800 Plus، بحدود ‎$650–730‎) مع خيار نموذج LLM محلي مدمج وأجهزة أحدث (DDR5، وشبكة 10GbE دون بطاقات إضافية) بسعر مماثل لـ DS925+.',
          'يعتمد استنتاج النموذج اللغوي على NAS بشدة على أجهزته — تفتقر معظم أجهزة NAS إلى GPU منفصلة قادرة، لذا عامل خيار LLM المدمج كميزة راحة، لا كبديل لفئة RTX 3090 أدناه إذا أردت فعلًا نموذجًا كبيرًا.',
        ],
        affiliateLinks: [
          { label: 'تحقق من سعر DS225+ ←', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: 'بحدود ‎$340‎' },
          { label: 'تحقق من سعر DS925+ ←', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: 'بحدود ‎$640‎' },
          { label: 'تحقق من سعر UGREEN NASync ←', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: 'بحدود ‎$650–730‎' },
        ],
      },
      server: {
        id: 'server',
        title: 'خادم مخصص (ترقية LLM)',
        content:
          '**الخادم المخصص مع GPU منفصلة هو الترقية لتشغيل نموذج LLM محلي أكبر إلى جانب كاميرات كثيرة.** يوفر أكبر حيّز بتكلفة واستهلاك طاقة أعلى — وقد تحرّكت أسعار GPU كثيرًا في 2026، لذا اعتبر الأرقام أدناه لقطة لحظية وليست قيمة ثابتة.',
        items: [
          'RTX 3090 مستعمل (24GB VRAM) هو أحد أقوى الخيارات من حيث VRAM مقابل السعر للنماذج اللغوية المحلية، لكن سعره المستعمل ارتفع بشدة خلال 2026 إلى نحو ‎$1,050–1,300‎ حتى أغسطس — أعلى بكثير من ‎$600–800‎ التي كان يتداول بها في 2024–2025. قد تكون النماذج المرمّزة بـ Q4 حتى نحو 70B ممكنة حسب طريقة الترميز وحجم السياق والإفراغ إلى القرص؛ اعتبر هذا نطاق قدرة، لا ضمانًا لكل نموذج 70B.',
          'RTX 3060 مستعمل (12GB) هو البديل الاقتصادي لصندوق GPU منفصلة، ويبلغ سعره المستعمل الآن نحو ‎$220–290‎ حتى أغسطس 2026 — يتعامل مع نماذج 7B–13B بشكل مريح دون حيّز VRAM أو سعر RTX 3090.',
          'الأفضل لكاميرات كثيرة ونموذج LLM أكبر ومستخدمين متعددين. استهلاك طاقة وتكلفة أعلى من mini PC — راجع قسم استهلاك الطاقة أدناه قبل الالتزام بهذه الفئة.',
          'مبالغة لمنزل ذكي أساسي — احتفظ به للاستخدام الكثيف للذكاء الاصطناعي المحلي، وأبقِ مركز Home Assistant على صندوق منفصل منخفض الطاقة للموثوقية (انظر صندوق واحد أم اثنان؟ أدناه).',
        ],
        affiliateLinks: [
          { label: 'تحقق من عروض RTX 3090 المستعملة ←', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: 'بحدود ‎$1,050–1,300‎' },
          { label: 'تحقق من عروض RTX 3060 المستعملة ←', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: 'بحدود ‎$220–290‎' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-ar.svg',
        imageCaption: 'سعة نموذج LLM محلي حسب فئة الأجهزة: يشغّل Raspberry Pi 5 نماذج صغيرة جدًا فقط، ويتعامل mini PC بمعالج Intel N100/N150 مع نماذج صغيرة، ويشغّل mini PC بمعالج Ryzen (32GB RAM) نماذج 7B–8B، ويصل RTX 3090 مستعمل (24GB VRAM) إلى نحو 70B بترميز Q4 حسب الإعداد.',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: 'لا تُبالغ في الإنفاق على خادم Home Assistant',
        content:
          '**شراء أجهزة أكثر مما تحتاجه حالتك هو أكثر عملية شراء مهدرة شيوعًا في هذه الفئة — طابق الصندوق مع ما تنوي فعلًا تشغيله.**',
        items: [
          'تشغّل Home Assistant فقط؟ لست بحاجة إلى GPU من فئة RTX، وربما لست بحاجة إلى mini PC أصلًا — يكفي Raspberry Pi 5 أو Home Assistant Green.',
          'Home Assistant مع كاميرات Frigate؟ لست بحاجة إلى محطة عمل باهظة — يكفي mini PC بمعالج Intel N100/N150 وiGPU مدمجة لمعظم أعداد الكاميرات المنزلية.',
          'Home Assistant مع نموذج LLM محلي صغير؟ يكفي mini PC بمعالج Ryzen و32GB لنموذج من فئة 8B — لا تحتاج بعد إلى GPU منفصلة.',
          'تريد نموذج LLM محلي كبيرًا (32B فما فوق)؟ هنا فقط تستحق GPU منفصلة، مثل RTX 3090 مستعمل، تكلفتها فعلًا.',
        ],
      },
      power: {
        id: 'power',
        title: 'استهلاك الطاقة مهم لصندوق يعمل على مدار الساعة',
        content:
          '**تعمل هذه الأجهزة باستمرار، لذا بالنسبة لصندوق لا يُغلق أبدًا، قد تكون تكلفة الكهرباء على مدار عام مهمة بقدر سعر الشراء.** تقريبًا، حسب الاستهلاك المعتاد:',
        columns: ['الأجهزة', 'الدور المعتاد', 'استهلاك الطاقة', 'الأفضل لـ'],
        rows: [
          { 'الأجهزة': 'Raspberry Pi 5', 'الدور المعتاد': 'مركز فقط', 'استهلاك الطاقة': 'منخفض جدًا (بضعة واطات)', 'الأفضل لـ': 'Home Assistant' },
          { 'الأجهزة': 'mini PC بمعالج Intel N100/N150', 'الدور المعتاد': 'مركز + Frigate', 'استهلاك الطاقة': 'منخفض (نحو ‎10–15W‎ عادةً)', 'الأفضل لـ': 'مركز + كاميرات على مدار الساعة' },
          { 'الأجهزة': 'mini PC بمعالج Ryzen (32GB)', 'الدور المعتاد': 'مركز + Frigate + نموذج LLM صغير', 'استهلاك الطاقة': 'متوسط (نحو ‎15–35W‎ عادةً، أعلى تحت حمل LLM)', 'الأفضل لـ': 'ذكاء اصطناعي محلي بصندوق واحد' },
          { 'الأجهزة': 'خادم RTX 3090', 'الدور المعتاد': 'ذكاء اصطناعي محلي ثقيل', 'استهلاك الطاقة': 'مرتفع (يمكن أن تستهلك GPU وحدها ‎250W+‎ تحت الحمل)', 'الأفضل لـ': 'نماذج كبيرة، ليس خمولًا على مدار الساعة' },
        ],
        tableFormat: true,
        note: 'بالنسبة لخادم يعمل على مدار الساعة، قد يكون استهلاك الطاقة أهم من سعر الشراء الأولي — تضيف GPU بقدرة ‎250W‎ تعمل باستمرار مبلغًا كبيرًا لفاتورة الكهرباء لا يقارَن بما يضيفه mini PC بقدرة ‎10W‎. هذا أحد أسباب إبقاء خادم GPU ثقيل كصندوق منفصل يُشغَّل عمدًا بدلًا من تشغيله دائمًا (انظر صندوق واحد أم اثنان؟ أدناه).',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: 'صندوق واحد أم اثنان؟',
        content:
          '**الصندوق الواحد أبسط وأرخص؛ الصندوقان يحميان موثوقية Home Assistant من حمل ذكاء اصطناعي أثقل.** الخيار الصحيح يعتمد على مدى تقديرك لوقت التشغيل مقابل البساطة.',
        items: [
          'صندوق واحد (mini PC واحد): الأبسط والأرخص — يشغّل mini PC بمعالج Ryzen نظام Home Assistant وFrigate ونموذج LLM محلي صغير معًا. الخيار الصحيح لمعظم الإعدادات المنزلية.',
          'صندوقان (مركز منخفض الطاقة مع جهاز ذكاء اصطناعي منفصل): يبقي Home Assistant موثوقًا للغاية على صندوق منخفض الطاقة نادرًا ما يحتاج إعادة تشغيل، بينما يعمل الذكاء الاصطناعي الأثقل — خادم RTX 3090 مستعمل مثلًا — ويمكن إعادة تشغيله بشكل مستقل دون تعطيل أتمتتك معه.',
          'اختر الصندوقين إذا كنت تشغّل Home Assistant لأي شيء متعلق بالسلامة (الأقفال، الإنذارات، التدفئة) وتريد عزل هذه الطبقة عن صندوق GPU قد تعيد تشغيله أو تحدّثه أو تجرّب عليه.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'الاختيار بين HA فقط أم HA + ذكاء اصطناعي',
        content:
          '**اختر Pi لـ HA فقط، وmini PC لـ HA مع الذكاء الاصطناعي المحلي — هذا القرار الواحد يحدد الأجهزة المناسبة.** طابق الصندوق مع حمل العمل، وليس العكس.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-ar.svg',
        imageCaption: 'شجرة قرار لأجهزة المنزل الذكي: تؤدي إضافة كاميرات Frigate ونموذج LLM محلي إلى أربعة تجميعات — Raspberry Pi 5، أو mini PC بمعالج Intel N100/N150، أو mini PC بمعالج Ryzen (32GB RAM)، أو خادم RTX 3090 (24GB VRAM).',
        columns: ['الأجهزة', 'السعر النسبي', 'HA فقط', 'يمكنه تشغيل نموذج LLM محلي', 'تسريع Frigate'],
        rows: [
          { 'الأجهزة': 'Raspberry Pi 5', 'السعر النسبي': 'منخفض', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نماذج صغيرة جدًا فقط، بطيء', 'تسريع Frigate': 'Hailo-8L M.2 HAT' },
          { 'الأجهزة': 'mini PC بمعالج Intel N100/N150', 'السعر النسبي': 'متوسط', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نماذج صغيرة', 'تسريع Frigate': 'Intel iGPU (OpenVINO)' },
          { 'الأجهزة': 'mini PC بمعالج Ryzen', 'السعر النسبي': 'متوسط', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نعم (7B–8B)', 'تسريع Frigate': 'iGPU أو Hailo M.2' },
          { 'الأجهزة': 'NAS', 'السعر النسبي': 'متوسط-مرتفع', 'HA فقط': 'نعم (حاوية)', 'يمكنه تشغيل نموذج LLM محلي': 'يعتمد على الأجهزة', 'تسريع Frigate': 'يعتمد على الطراز' },
          { 'الأجهزة': 'خادم + RTX 3090 مستعمل', 'السعر النسبي': 'مرتفع', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نعم (حتى نحو 70B، حسب الترميز)', 'تسريع Frigate': 'GPU منفصلة' },
        ],
        note: 'لاستهلاك الطاقة حسب الفئة، راجع [استهلاك الطاقة](#power) أعلاه؛ ولمعرفة ما إذا كان يستحق تشغيل كل شيء على صندوق واحد، راجع [صندوق واحد أم اثنان؟](#one-or-two).',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: 'توصية شراء عامة لعام 2026',
        content:
          '**إذا كنت تختار صندوقًا واحدًا اليوم ولست متأكدًا من الفئة المناسبة، فهذا افتراض معقول استنادًا إلى المقايضات أعلاه — قد تشير احتياجاتك الفعلية إلى شيء آخر، ولم يتم اختبار أي من الخيارات أدناه أو مراجعتها من قِبل PromptQuorum.**',
        items: [
          'لمنزل ذكي محلي عادي (Home Assistant مع بضعة أجهزة Zigbee/Matter): mini PC بمعالج Intel N150 خيار افتراضي منطقي — يغطي أيضًا Frigate إذا أضفت كاميرات لاحقًا.',
          'لـ Home Assistant مع كاميرات مع مساعد ذكاء اصطناعي محلي صغير: mini PC بمعالج Ryzen و32GB RAM خيار معقول بصندوق واحد — الأرخص من بين الأجهزة التي تشغّل فعليًا نموذج LLM من فئة 8B بسرعة قابلة للاستخدام.',
          'للذكاء الاصطناعي المحلي الجاد (نماذج من فئة 32B أو أكبر): خادم RTX 3090 منفصل، بمعزل عن مركز Home Assistant، هو الترقية المعقولة نظرًا لأسعار GPU المستعملة الحالية.',
          'التركيب الجديد الذي يضع الذكاء الاصطناعي أولًا منذ البداية غالبًا ما يكون أقل ملاءمة لـ Raspberry Pi نظرًا لأسعار Pi في 2026 وقيود LLM لديه — يقترب mini PC عادةً في السعر ويكون منصة ذكاء اصطناعي أفضل بكثير.',
        ],
      },
      stacks: {
        id: 'stacks',
        title: 'تجميعات كاملة للمنزل الذكي المحلي',
        content:
          '**يحتاج معظم المشترين إلى أكثر من منتج واحد — على الأقل مركز، ومسرّع Frigate، وتخزين، بالإضافة إلى صندوق ذكاء اصطناعي إذا أردت استنتاج LLM محلي.** تجمع هذه التجميعات الثلاثة الخيارات أعلاه حسب السيناريو؛ يعيدك كل منتج إلى توصيته الكاملة سابقًا في هذه الصفحة.',
        columns: ['التجميعة', 'المركز', 'مسرّع Frigate', 'الذكاء الاصطناعي', 'الإجمالي التقديري (أغسطس 2026)'],
        rows: [
          { 'التجميعة': 'البداية (HA فقط)', 'المركز': '[Home Assistant Green أو Pi 5](#raspberry-pi)', 'مسرّع Frigate': '—', 'الذكاء الاصطناعي': '—', 'الإجمالي التقديري (أغسطس 2026)': 'بحدود ‎$199–305‎' },
          { 'التجميعة': 'HA + كاميرات', 'المركز': '[mini PC بمعالج N150](#mini-pc)', 'مسرّع Frigate': '[Intel iGPU، أو Hailo-8L لمزيد من الاحتياطي](#frigate-accelerator)', 'الذكاء الاصطناعي': '—', 'الإجمالي التقديري (أغسطس 2026)': 'بحدود ‎$190–290‎' },
          { 'التجميعة': 'HA + كاميرات + ذكاء اصطناعي محلي', 'المركز': '[mini PC بمعالج Ryzen، 32GB](#mini-pc)', 'مسرّع Frigate': 'iGPU مدمجة، أو [Hailo-8L لعدد أكبر من الكاميرات](#frigate-accelerator)', 'الذكاء الاصطناعي': 'يعمل على نفس الصندوق (نموذج من فئة 8B)', 'الإجمالي التقديري (أغسطس 2026)': 'بحدود ‎$649–720‎' },
          { 'التجميعة': 'HA + كاميرات + ذكاء اصطناعي محلي كبير', 'المركز': '[mini PC بمعالج N150 (يبقى منفصلًا للموثوقية)](#mini-pc)', 'مسرّع Frigate': '[Hailo-8](#frigate-accelerator)', 'الذكاء الاصطناعي': '[خادم RTX 3090 مستعمل، يعمل بشكل منفصل](#server)', 'الإجمالي التقديري (أغسطس 2026)': 'بحدود ‎$1,400–1,700‎' },
        ],
        tableFormat: true,
        note: 'تُبقي التجميعة الأخيرة مركز Home Assistant على صندوقه الخاص منخفض الطاقة وتشغّل RTX 3090 كجهاز منفصل — راجع [صندوق واحد أم اثنان؟](#one-or-two) لمعرفة السبب.',
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'ما الأجهزة التي يوصي بها Frigate؟', a: 'للأنظمة الجديدة يوصي Frigate بـ iGPU من Intel عبر OpenVINO، أو وحدة Hailo-8L (بحدود ‎$70‎، اقتصادية) أو Hailo-8 (بحدود ‎$170–200‎، أسرع) بصيغة M.2 لسعة كشف أكبر. لا يزال Google Coral (USB/M.2 TPU) يعمل لكنه أصبح إرثًا قديمًا — لم يعد Frigate يوصي به للأنظمة الجديدة إلا على أجهزة منخفضة الطاقة جدًا.' },
          { q: 'هل يستطيع Raspberry Pi تشغيل نموذج LLM محلي أيضًا؟', a: 'يمكن لـ Pi تشغيل نماذج صغيرة جدًا فحسب وببطء، لذا فهو ليس مثاليًا لمساعد LLM محلي سريع الاستجابة. يتعامل بشكل جيد مع Home Assistant والصوت الأساسي، لكن للذكاء الاصطناعي المحلي يُعدّ mini PC مع iGPU أو NPU قادرة — أو صندوق RTX 3090 مستعمل — الخيار الأفضل.' },
          { q: 'كم من RAM أحتاج؟', a: 'Home Assistant وحده يعمل في بضعة غيغابايت. لتشغيل نموذج LLM محلي صغير وخدمات ذكاء اصطناعي أخرى على نفس الصندوق، يساعد المزيد من RAM؛ يُبقي mini PC مع 32GB RAM وiGPU/NPU قادرة نموذج Qwen3 8B أو Llama 3.1 8B سريع الاستجابة. طابق RAM مع حجم النموذج الذي تخطط لتشغيله.' },
          { q: 'ما mini PC الذي يجب أن أشتريه؟', a: 'لـ HA مع الكاميرات، يسرّع mini PC بمعالج Intel N100/N150 نظام Frigate عبر OpenVINO. لـ HA مع نموذج LLM محلي، ارتقِ إلى mini PC بمعالج Ryzen مع 32GB RAM. راجع دليل أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي للاختيارات.' },
          { q: 'صندوق واحد أم اثنان؟', a: 'صندوق واحد (mini PC) هو الأبسط ويشغّل Home Assistant مع نموذج LLM محلي صغير معًا. قسّم إلى اثنين إذا أردت إبقاء المركز موثوقًا للغاية على صندوق منخفض الطاقة وتفريغ الذكاء الاصطناعي الثقيل على جهاز منفصل مثل خادم RTX 3090 مستعمل.' },
          { q: 'هل استهلاك الطاقة مهم لصندوق يعمل على مدار الساعة؟', a: 'يهم أكثر من سعر الشراء بالنسبة لأجهزة لا تُغلق أبدًا. يستهلك Raspberry Pi بضعة واطات، وmini PC بمعالج N100/N150 نحو ‎10–15W‎، وmini PC بمعالج Ryzen نحو ‎15–35W‎ حسب الحمل، ويمكن أن تستهلك GPU منفصلة مثل RTX 3090 ‎250W+‎ تحت الحمل — أحد أسباب تشغيل خادم GPU ثقيل كصندوق منفصل بدلًا من تشغيله دائمًا.' },
          { q: 'هل يستحق Raspberry Pi الشراء بعد بأسعار 2026؟', a: 'لـ Home Assistant فقط، نعم — لا يزال الخيار الأقل استهلاكًا للطاقة. لكن نقص ذاكرة DRAM في 2026 رفع أسعار Pi 5 بشدة (بحدود ‎$180–305‎ حسب سعة RAM حتى أغسطس 2026، مقابل ‎$80–120‎ الأصليين)، مما يقلّص فارق السعر مع mini PC بمعالج N100/N150. إذا كنت قد تضيف كاميرات أو نموذج LLM محلي خلال عام، فعادةً ما يكون mini PC الشراء الأفضل الآن.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل Mini PCs لـ Home Assistant + ذكاء اصطناعي محلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) — اختيارات محددة',
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — المجموعة الكاملة',
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — ما يشغّله صندوق الذكاء الاصطناعي',
          '[أفضل Mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm) — متعدد العناقيد: VRAM وتفاصيل الأجهزة',
          '[أفضل دليل شراء GPU للنماذج اللغوية المحلية](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — اختيارات GPU أعمق إذا كنت تحتاج VRAM أكثر من RTX 3090',
          '[دليل استئجار GPU سحابي](/ar/power-local-llm/cloud-gpu-rental-guide-2026) — استئجار وقت GPU بدلًا من الشراء، إذا كنت تحتاجه أحيانًا فقط',
          '[أفضل بطاريات الطاقة الشمسية للشرفة 2026](/ar/balcony-solar/best-balcony-solar-batteries-2026) — تخزين البطاريات للإعداد المنزلي المحلي للطاقة',
          '[أفضل محاور المنزل الذكي للتحكم المحلي (2027)](/ar/smart-home/best-smart-home-hubs-2027) — توصيات محاور مخصصة',
          '[مراجعة NVIDIA Jetson Orin Nano للذكاء الاصطناعي في المنزل الذكي (2027)](/ar/smart-home/nvidia-jetson-orin-nano-smart-home-review) — عتاد ذكاء اصطناعي محلي بمعالج رسومات',
          '[أفضل أجهزة USB Zigbee وThread (2027)](/ar/smart-home/best-zigbee-thread-dongles-2027) — عتاد لاسلكي لـ Zigbee وThread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي المحلي (2026)',
      description: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي 2026: مركز mini PC بمعالج Intel N100 أو Raspberry Pi 5، مسرّع Frigate (Intel iGPU/Hailo)، تخزين SSD، وترقية LLM.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ar',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'أجهزة Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: 'نموذج LLM محلي' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'ما الأجهزة التي يوصي بها Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'للأنظمة الجديدة يوصي Frigate بـ iGPU من Intel عبر OpenVINO، أو وحدة Hailo-8L (بحدود ‎$70‎) أو Hailo-8 (بحدود ‎$170–200‎) بصيغة M.2 لسعة كشف أكبر. لا يزال Google Coral TPU يعمل لكنه أصبح إرثًا قديمًا ولم يعد يُوصى به للأنظمة الجديدة.' } },
        { '@type': 'Question', name: 'هل يستطيع Raspberry Pi تشغيل نموذج LLM محلي أيضًا؟', acceptedAnswer: { '@type': 'Answer', text: 'يمكن لـ Pi تشغيل نماذج صغيرة جدًا فحسب وببطء. يتعامل بشكل جيد مع Home Assistant والصوت الأساسي، لكن للذكاء الاصطناعي المحلي mini PC مع iGPU أو NPU قادرة، أو صندوق RTX 3090 مستعمل، هو الأفضل.' } },
        { '@type': 'Question', name: 'كم من RAM أحتاج؟', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant وحده يعمل في بضعة غيغابايت. لتشغيل نموذج LLM محلي صغير على نفس الصندوق، يساعد المزيد من RAM؛ يُبقي mini PC مع 32GB RAM نموذج Qwen3 8B أو Llama 3.1 8B سريع الاستجابة. طابق RAM مع حجم النموذج الذي تخطط لتشغيله.' } },
        { '@type': 'Question', name: 'ما mini PC الذي يجب أن أشتريه؟', acceptedAnswer: { '@type': 'Answer', text: 'لـ HA مع الكاميرات، يسرّع mini PC بمعالج Intel N100/N150 نظام Frigate عبر OpenVINO. لـ HA مع نموذج LLM محلي، ارتقِ إلى mini PC بمعالج Ryzen مع 32GB RAM. راجع دليل أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي.' } },
        { '@type': 'Question', name: 'صندوق واحد أم اثنان؟', acceptedAnswer: { '@type': 'Answer', text: 'mini PC واحد يشغّل Home Assistant مع نموذج LLM محلي صغير معًا. قسّم إلى اثنين إذا أردت إبقاء المركز موثوقًا للغاية على صندوق منخفض الطاقة وتفريغ الذكاء الاصطناعي الثقيل على جهاز منفصل مثل خادم RTX 3090 مستعمل.' } },
        { '@type': 'Question', name: 'هل استهلاك الطاقة مهم لصندوق يعمل على مدار الساعة؟', acceptedAnswer: { '@type': 'Answer', text: 'يهم أكثر من سعر الشراء بالنسبة لأجهزة لا تُغلق أبدًا. يستهلك Raspberry Pi بضعة واطات، وmini PC بمعالج N100/N150 نحو ‎10–15W‎، وmini PC بمعالج Ryzen نحو ‎15–35W‎، ويمكن أن تستهلك GPU منفصلة مثل RTX 3090 ‎250W+‎ تحت الحمل.' } },
        { '@type': 'Question', name: 'هل يستحق Raspberry Pi الشراء بعد بأسعار 2026؟', acceptedAnswer: { '@type': 'Answer', text: 'لـ Home Assistant فقط، نعم. لكن نقص ذاكرة DRAM في 2026 رفع أسعار Pi 5 إلى نحو ‎$180–305‎ حسب سعة RAM، مقابل ‎$80–120‎ الأصليين، مما يقلّص الفارق مع mini PC بمعالج N100/N150 — وهو الخيار الأفضل إذا كنت قد تضيف كاميرات أو نموذج LLM محلي خلال عام.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-de.webp',
    affiliateDisclosure: true,
    title: 'Beste Hardware für ein lokales Smart Home + lokale KI (2026)',
    seoTitle: 'Beste Hardware: lokales Smart Home + KI (2026)',
    intro:
      'Die beste Hardware für ein lokales Smart Home folgt einer Entscheidung: Ein Mini-PC mit Intel N100/N150 oder ein Raspberry Pi 5 betreibt den Home-Assistant-Hub, eine Intel-iGPU (OpenVINO) oder ein Hailo-8L-M.2-Modul beschleunigt die Frigate-Kameraerkennung, eine SSD oder ein NAS speichert die Aufnahmen, und ein gebrauchtes RTX-3090-Gerät ist der Aufstieg für ein lokales LLM. Dieser Leitfaden wählt jede Schicht mit aktuellen Preisen für 2026 und hilft bei der Wahl zwischen nur-HA und HA-plus-KI, damit Sie nur einmal statt zweimal kaufen.',
    metaDescription:
      'Beste Hardware für lokales Smart Home + KI 2026: Intel-N100-Mini-PC oder Raspberry Pi 5 als Hub, Frigate-Beschleuniger (Intel iGPU/Hailo), SSD-Speicher, LLM-Aufstieg. Aktualisierte Preise.',
    twitterDescription:
      'Hardware für ein lokales Smart Home 2026: Intel-N100-Mini-PC oder Pi 5 als Hub, Frigate-Beschleuniger (Intel iGPU/Hailo-8L), SSD-Speicher, gebrauchte RTX 3090 fürs LLM. Aktuelle Preise 2026.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die Hardware für Home Assistant und lokale KI wählen',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'beste hardware home assistant lokale ki',
      'home assistant hardware',
      'mini pc home assistant lokales llm',
      'raspberry pi vs mini pc home assistant',
      'lokaler smart home server',
    ],
    leadAnswerBlock:
      '**Bauen Sie ein lokales Smart Home in vier Schichten: den Hub (Mini-PC mit Intel N100/N150 oder Raspberry Pi 5), einen Frigate-Beschleuniger (Intel-iGPU über OpenVINO oder ein Hailo-8L-M.2-Modul), Speicher (eine SSD oder ein NAS für viele Kameras) und – wenn Sie ein lokales LLM wollen – ein Aufstiegsgerät wie eine gebrauchte RTX 3090.** Für Home Assistant allein genügt ein Raspberry Pi; entscheidend ist, ob Sie Kameraerkennung und lokale KI hinzufügen. Kennen Sie Ihr Ziel schon? Springen Sie direkt zu [welche Hardware Sie für welches Setup kaufen sollten](#quick-picks).',
    quickAnswerTop: {
      de: {
        question: 'Welche Hardware brauche ich für ein lokales Smart Home mit KI?',
        answer:
          'Beginnen Sie mit dem Hub: Ein Mini-PC mit Intel N100/N150 oder ein Raspberry Pi 5 betreibt Home Assistant. Fügen Sie einen Frigate-Beschleuniger für Kameras hinzu – eine Intel-iGPU über OpenVINO deckt die meisten Setups ab, und ein Hailo-8L- oder Hailo-8-M.2-Modul erhöht die Erkennungskapazität (der Google Coral ist inzwischen veraltet). Speichern Sie Aufnahmen auf einer SSD oder einem NAS für viele Kameras. Für ein lokales LLM steigen Sie auf einen Mini-PC mit leistungsfähiger iGPU/NPU oder ein gebrauchtes RTX-3090-Gerät auf. Wenn Sie glauben, innerhalb eines Jahres lokale KI hinzuzufügen, kaufen Sie den Mini-PC jetzt statt eines Raspberry Pi, den Sie später ersetzen müssten.',
        bullets: [
          'Hub: Intel-N100/N150-Mini-PC oder Raspberry Pi 5',
          'Frigate: Intel-iGPU (OpenVINO) oder Hailo-8L M.2 – Coral ist veraltet',
          'Speicher: SSD oder ein NAS für viele Kameras',
          'LLM-Aufstieg: Mini-PC-iGPU/NPU oder gebrauchte RTX 3090',
          'Wenn Sie innerhalb eines Jahres lokale KI hinzufügen könnten, kaufen Sie jetzt den Mini-PC – günstiger, als später einen Raspberry Pi zu ersetzen',
          'Zuerst entscheiden: nur HA oder HA + Kameras + lokale KI – das bestimmt, ob Sie einmal oder zweimal kaufen',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Welche Hardware sollten Sie kaufen?', anchor: 'quick-picks' },
      { label: 'Was der Hub braucht', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini-PC', anchor: 'mini-pc' },
      { label: 'Frigate-Beschleuniger', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Dedizierter Server', anchor: 'server' },
      { label: 'Nicht zu viel ausgeben', anchor: 'dont-overspend' },
      { label: 'Stromverbrauch', anchor: 'power' },
      { label: 'Ein Gerät oder zwei?', anchor: 'one-or-two' },
      { label: 'Nur HA vs HA + KI', anchor: 'picking' },
      { label: 'Eine allgemeine Kaufempfehlung', anchor: 'what-id-buy' },
      { label: 'Komplette Setups', anchor: 'stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein Mini-PC mit Intel N100/N150 oder ein Raspberry Pi 5 betreibt den Hub; ergänzen Sie eine Intel-iGPU oder Hailo-8L für Frigate, eine SSD oder ein NAS für Speicher und ein gebrauchtes RTX-3090-Gerät, wenn Sie ein lokales LLM wollen.' },
      { type: 'plain-terms', content: 'Die Hub-Software (Home Assistant) ist leichtgewichtig und läuft auf einem kleinen Computer wie einem Raspberry Pi. Die Kameraerkennung (Frigate) braucht einen Beschleuniger – einen Intel-Grafikchip über OpenVINO oder ein Hailo-M.2-Modul. Ein lokales Sprachmodell hinzuzufügen braucht noch mehr Leistung, und hier kommt ein Mini-PC mit leistungsfähigem Grafikchip oder eine gebrauchte Grafikkarte wie eine RTX 3090 ins Spiel.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Hub: Ein Mini-PC mit Intel N100/N150 (ca. 230–280 €) oder ein Raspberry Pi 5 (im August 2026 ca. 185–300 €, stark gestiegen wegen einer DRAM-Knappheit) betreibt Home Assistant',
          'Frigate: Eine Intel-iGPU (OpenVINO, in den meisten Mini-PCs integriert), ein Hailo-8L-M.2-Modul (ca. 70–80 €) oder ein Hailo-8 M.2 (ca. 180–220 €) beschleunigt die Kameraerkennung – der Google Coral ist inzwischen veraltet und keine Frigate-Empfehlung mehr für neue Builds',
          'Speicher: eine SSD für Aufnahmen oder ein NAS (Synology DS225+ ca. 380–420 €, DS925+ ca. 680–750 €, UGREEN NASync ca. 700–800 €), sobald Sie mehrere Kameras betreiben',
          'LLM-Aufstieg: ein Ryzen-Mini-PC (32 GB RAM, ca. 600–650 €) oder ein gebrauchtes RTX-3090-Gerät (im August 2026 ca. 1.400–1.750 € – die Preise liegen deutlich über dem Niveau von 2024–2025)',
          'Entscheiden Sie nur-HA vs HA + Kameras + lokale KI vor dem Kauf – das ändert das richtige Gerät, und den Mini-PC jetzt zu kaufen schlägt es, später einen Pi zu ersetzen',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Welche Hardware sollten Sie kaufen?',
        content:
          '**Passen Sie das Gerät an Ihr Ziel an, nicht umgekehrt.** Die folgende Tabelle ordnet jedem Smart-Home-Ziel die passende Hardware zu – jede Zeile verlinkt auf die ausführlichere Empfehlung weiter unten auf der Seite.',
        columns: ['Ihr Ziel', 'Das kaufen', 'Geschätzter Preis (Aug. 2026)'],
        rows: [
          { 'Ihr Ziel': 'Nur Home Assistant', 'Das kaufen': '[Home Assistant Green oder Raspberry Pi 5](#raspberry-pi)', 'Geschätzter Preis (Aug. 2026)': '179 € (Green) / 185–300 € (Pi 5)' },
          { 'Ihr Ziel': 'HA + Frigate-Kameras', 'Das kaufen': '[Intel-N100/N150-Mini-PC](#mini-pc)', 'Geschätzter Preis (Aug. 2026)': 'ca. 230–280 €' },
          { 'Ihr Ziel': 'HA + ein lokales LLM', 'Das kaufen': '[Ryzen-Mini-PC, 32 GB RAM](#mini-pc)', 'Geschätzter Preis (Aug. 2026)': 'ca. 600–650 €' },
          { 'Ihr Ziel': 'HA + ein größeres lokales LLM', 'Das kaufen': '[Server mit gebrauchter RTX 3090](#server)', 'Geschätzter Preis (Aug. 2026)': 'ca. 1.400–1.750 € (nur GPU)' },
        ],
        tableFormat: true,
        note: 'Die Preise sind Stand August 2026 und ändern sich – vor allem GPU- und DRAM-Preise waren dieses Jahr sehr volatil. Prüfen Sie den Preis im verlinkten Angebot vor dem Kauf.',
        callouts: [
          { type: 'tip', text: 'Noch unsicher, ob Sie lokale KI wollen? Lesen Sie [Nicht zu viel ausgeben](#dont-overspend), bevor Sie das teure Gerät kaufen.' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Was der Hub braucht',
        content:
          '**Home Assistant selbst ist leichtgewichtig und läuft auf bescheidener Hardware; die hohen Anforderungen kommen von der Frigate-Kameraerkennung und einem lokalen LLM.** Dimensionieren Sie das Gerät nach dem, was Sie hinzufügen, nicht nur nach dem Hub.',
        items: [
          'Der Hub braucht wenig Rechenleistung für Gerätesteuerung und Automatisierungen.',
          'Die Frigate-Objekterkennung braucht einen Beschleuniger: Eine Intel-iGPU über OpenVINO deckt die meisten Setups ab, ein Hailo-8L- oder Hailo-8-M.2-Modul erhöht die Kapazität. Der Google Coral (USB/M.2 TPU) funktioniert weiterhin, ist aber inzwischen veraltet – Frigate empfiehlt ihn für neue Builds nicht mehr.',
          'Größere Whisper-Modelle und lokale LLM-Inferenz sind die anspruchsvollsten Workloads – planen Sie RAM und eine GPU/NPU rund um diese.',
          'Speichern Sie Kameraaufnahmen auf einer SSD; wechseln Sie zu einem NAS, sobald Sie mehrere Kameras dauerhaft betreiben.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Ein Raspberry Pi 5 ist der stromsparendste Weg, Home Assistant für typische Smart-Home-Nutzung zu betreiben, aber eine DRAM-Knappheit 2026 hat die Board-Preise stark steigen lassen – das 8-GB-Board kostet jetzt rund 185–220 €, das 16-GB-Board rund 280–300 €, beide weit über dem ursprünglichen Startpreis von ca. 80/120 $, und Analysten erwarten vor Ende 2027 keine Normalisierung.** Mit LLM-Inferenz und großen Whisper-Modellen hat er weiterhin Schwierigkeiten.',
        items: [
          'Hervorragend für Gerätesteuerung, Automatisierungen und ein kleines lokales Sprach-Setup.',
          'LLM-Inferenz auf einem Pi ist auf sehr kleine, langsame Modelle begrenzt – kombinieren Sie ihn mit einem Hailo-8L-M.2-HAT, wenn Sie Frigate-Erkennung wollen.',
          'Wählen Sie einen Pi 5, wenn Sie Grundlagen bei niedrigem Stromverbrauch wollen und sicher sind, dass Sie kein lokales LLM hinzufügen. Falls Sie glauben, innerhalb des nächsten Jahres lokale KI zu wollen, überspringen Sie den Pi und kaufen jetzt den Mini-PC – er kostet wenig mehr und erspart Ihnen einen Doppelkauf.',
          'Für ein Plug-and-play-Gerät wird das Home Assistant Green betriebsbereit geliefert (2026 rund 179 €, gegenüber einem Startpreis von 99 $). Home Assistant Yellow wurde im Oktober 2025 eingestellt – Green ist jetzt der einzige offizielle Hub des Herstellers.',
        ],
        affiliateLinks: [
          { label: 'Raspberry-Pi-5-Preis prüfen →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '185–300 €' },
          { label: 'Home-Assistant-Green-Preis prüfen →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '179 €' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini-PC (und Platz für ein LLM)',
        content:
          '**Ein Mini-PC ist die beste Ein-Geräte-Wahl für Home Assistant plus lokale KI, mit genug RAM und einer leistungsfähigen iGPU oder NPU, um ein kleines LLM zu betreiben und Frigate zu beschleunigen.** Er balanciert Leistung, Größe und Kosten – und ist die Kategorie, in der sich mehr Budget lohnt, wenn Sie ein einziges Gerät für beide Aufgaben wollen.',
        items: [
          'Beste Budget-Wahl: Ein stromsparender Mini-PC mit Intel N100/N150 betreibt Home Assistant und beschleunigt Frigate über die Intel-iGPU (OpenVINO) – der praktische Standard für ein Hub-plus-Kameras-Gerät. Der Beelink EQ14 (Intel N150, 16 GB RAM) kostet im August 2026 rund 230–280 € – gut für den 24/7-Betrieb und niedrigen Stromverbrauch, aber zu schwach für ein lokales LLM.',
          'Beste Wahl für lokale KI: Für ein lokales LLM auf demselben Gerät steigen Sie auf einen Ryzen-Mini-PC mit 32 GB RAM auf. Der Beelink SER8 (Ryzen 7 8845HS) kostet im August 2026 rund 600–650 € und betreibt ein Qwen3-8B- oder Llama-3.1-8B-Modell über Ollama mit brauchbarer Geschwindigkeit, zusammen mit Home Assistant und Frigate. Priorisieren Sie RAM und eine leistungsfähige integrierte GPU oder NPU für geringere Latenz.',
          'Wenn Sie ein einziges Gerät für Home Assistant und lokale KI zusammen kaufen, lohnt sich der Mehrpreis des Ryzen-Mini-PCs gegenüber dem N150 – nur er läuft ein LLM tatsächlich mit brauchbarer Geschwindigkeit.',
          'Für konkrete Empfehlungen siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) und clusterübergreifend [beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'EQ14-Preis prüfen →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '230–280 €' },
          { label: 'SER8-Preis prüfen →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: 'ca. 600–650 €' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: 'Betreiben Sie Sicherheitskameras? Wählen Sie Ihren Frigate-Beschleuniger',
        content:
          '**Wie viele Kameras und wie viel Erkennungsreserve Sie brauchen, entscheidet über den Beschleuniger – unabhängig davon, welches Gerät den Hub betreibt.** Frigate empfiehlt den Google Coral für neue Builds nicht mehr – neue Nutzer werden jetzt zu Hailo geleitet, neben der integrierten Intel-iGPU des Host-Geräts.',
        items: [
          '1–4 Kameras: Die in einen N100/N150-Mini-PC integrierte Intel-iGPU, über OpenVINO betrieben, deckt die meisten Heimsetups ohne zusätzliche Hardwarekosten ab.',
          '4–10 Kameras, oder wenn Sie auf Nicht-Intel-Hardware mehr Erkennungsreserve wollen: Ein Hailo-8L-M.2-Modul (im August 2026 ca. 70–80 €) ist Frigates aktuelle stromsparende Empfehlung – es übernimmt die Rolle, die früher der Coral hatte, als offiziell erstklassig unterstützte Zusatzkarte.',
          '10+ Kameras oder aufwendigere Zusatzerkennungen (Gesichts-/Kennzeichenerkennung zusätzlich zur Erkennung): Ein Hailo-8-M.2-Modul (ca. 180–220 €) bringt deutlich mehr Durchsatz.',
          'Besitzen Sie bereits einen Coral? Er funktioniert weiterhin – es geht hier nur darum, was Sie für einen Neubau kaufen sollten, nicht darum, ein funktionierendes Coral-Setup zu ersetzen.',
        ],
        affiliateLinks: [
          { label: 'Hailo-8L-Preis prüfen →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: 'ca. 70–80 €' },
          { label: 'Hailo-8-Preis prüfen →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: 'ca. 180–220 €' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Ein NAS kann Home Assistant in einem Container neben Speicher und Frigate-Aufnahmen betreiben, wenn es genug CPU und RAM hat – eine gute Option, wenn Sie bereits eines besitzen, aber nicht der richtige Grund, Ihr erstes NAS zu kaufen.** Kaufen Sie kein NAS speziell, um ein lokales LLM zu betreiben: Ein dedizierter Mini-PC oder ein GPU-Gerät ist fürs gleiche Geld die bessere KI-Plattform.',
        items: [
          '2–4 Kameras / leichterer Speicherbedarf: Das Synology DS225+ (im August 2026 ca. 380–420 €) deckt containerisiertes Home Assistant plus Frigate-Aufnahmen für wenige Kameras ab.',
          '4–10 Kameras / mehr Reserven: Das Synology DS925+ (ca. 680–750 €) bietet mehr CPU-/RAM-Reserven für mehr Add-ons und Kameras.',
          'Speicher plus lokale KI in einem Gerät: UGREEN-NASync-Modelle (DXP4800-Plus-Klasse, ca. 700–800 €) kommen mit einer integrierten lokalen-LLM-Option und neuerer Hardware (DDR5, 10GbE ohne Zusatzkarten) zu einem ähnlichen Preis wie das DS925+.',
          'LLM-Inferenz auf einem NAS hängt weiterhin stark von seiner Hardware ab – den meisten NAS-Geräten fehlt eine leistungsfähige diskrete GPU, betrachten Sie die integrierte LLM-Option daher als Komfortfunktion, nicht als Ersatz für die RTX-3090-Stufe unten, wenn Sie wirklich ein großes Modell wollen.',
        ],
        affiliateLinks: [
          { label: 'DS225+-Preis prüfen →', url: 'https://www.synology.com/de-de/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: 'ca. 380–420 €' },
          { label: 'DS925+-Preis prüfen →', url: 'https://www.synology.com/de-de/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: 'ca. 680–750 €' },
          { label: 'UGREEN-NASync-Preis prüfen →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: 'ca. 700–800 €' },
        ],
      },
      server: {
        id: 'server',
        title: 'Dedizierter Server (LLM-Aufstieg)',
        content:
          '**Ein dedizierter Server mit dedizierter GPU ist der Aufstieg, um ein größeres lokales LLM neben vielen Kameras zu betreiben.** Er bietet die meisten Reserven bei höheren Kosten und höherem Stromverbrauch – und GPU-Preise haben sich 2026 stark bewegt, betrachten Sie die folgenden Zahlen daher als Momentaufnahme, nicht als festen Wert.',
        items: [
          'Eine gebrauchte RTX 3090 (24 GB VRAM) ist eine der stärksten VRAM-pro-Euro-Optionen für lokale LLMs, aber ihr Gebrauchtpreis ist 2026 stark gestiegen, auf rund 1.400–1.750 € im August – weit über den 900–1.000 €, zu denen sie 2024–2025 gehandelt wurde. Q4-quantisierte Modelle bis etwa 70B sind je nach Quantisierung, Kontextgröße und Offloading möglicherweise machbar; betrachten Sie das als Fähigkeitsbereich, nicht als Garantie für jedes 70B-Modell.',
          'Eine gebrauchte RTX 3060 (12 GB) ist die günstigere Alternative für ein Gerät mit diskreter GPU, aktuell im August 2026 gebraucht bei rund 250–320 € – sie bewältigt 7B–13B-Modelle problemlos, ohne die VRAM-Reserven oder den Preis der RTX 3090.',
          'Am besten für viele Kameras, ein größeres LLM und mehrere Nutzer. Höherer Stromverbrauch und höhere Kosten als ein Mini-PC – lesen Sie den Abschnitt zum Stromverbrauch unten, bevor Sie sich für diese Stufe entscheiden.',
          'Überdimensioniert für ein einfaches Smart Home – reservieren Sie ihn für intensive lokale KI-Nutzung und halten Sie den Home-Assistant-Hub für Zuverlässigkeit auf einem separaten, stromsparenden Gerät (siehe Ein Gerät oder zwei? unten).',
        ],
        affiliateLinks: [
          { label: 'RTX-3090-Gebrauchtangebote prüfen →', url: 'https://www.ebay.de/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: 'ca. 1.400–1.750 €' },
          { label: 'RTX-3060-Gebrauchtangebote prüfen →', url: 'https://www.ebay.de/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: 'ca. 250–320 €' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-de.svg',
        imageCaption: 'Lokale LLM-Kapazität je Hardware-Stufe: Ein Raspberry Pi 5 läuft nur mit winzigen Modellen, ein Intel-N100/N150-Mini-PC bewältigt kleine Modelle, ein Ryzen-Mini-PC (32 GB RAM) läuft mit 7B–8B-Modellen, und eine gebrauchte RTX 3090 (24 GB VRAM) skaliert je nach Setup auf etwa 70B bei Q4-Quantisierung.',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: 'Geben Sie für Ihren Home-Assistant-Server nicht zu viel aus',
        content:
          '**Mehr Hardware, als Ihr Anwendungsfall braucht, ist der häufigste Fehlkauf in dieser Kategorie – passen Sie das Gerät an das an, was Sie tatsächlich vorhaben.**',
        items: [
          'Nur Home Assistant? Sie brauchen keine RTX-GPU und wahrscheinlich auch keinen Mini-PC – ein Raspberry Pi 5 oder ein Home Assistant Green reicht.',
          'Home Assistant plus Frigate-Kameras? Sie brauchen keine teure Workstation – ein Intel-N100/N150-Mini-PC mit integrierter iGPU reicht für die meisten Kameraanzahlen im Heimbereich.',
          'Home Assistant plus ein kleines lokales LLM? Ein 32-GB-Ryzen-Mini-PC reicht für ein Modell der 8B-Klasse – eine diskrete GPU brauchen Sie noch nicht.',
          'Sie wollen ein großes lokales LLM (32B aufwärts)? Genau dann rechtfertigt sich eine diskrete GPU, etwa eine gebrauchte RTX 3090.',
        ],
      },
      power: {
        id: 'power',
        title: 'Stromverbrauch zählt bei einem 24/7-Gerät',
        content:
          '**Diese Hardware läuft dauerhaft, daher kann bei einem Gerät, das nie ausgeschaltet wird, der Stromverbrauch über ein Jahr genauso wichtig sein wie der Kaufpreis.** Ungefähr, nach typischem Verbrauch geordnet:',
        columns: ['Hardware', 'Typische Rolle', 'Stromverbrauch', 'Am besten für'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Typische Rolle': 'Nur Hub', 'Stromverbrauch': 'Sehr niedrig (wenige Watt)', 'Am besten für': 'Home Assistant' },
          { 'Hardware': 'Intel-N100/N150-Mini-PC', 'Typische Rolle': 'Hub + Frigate', 'Stromverbrauch': 'Niedrig (typisch ca. 10–15W)', 'Am besten für': '24/7-Hub + Kameras' },
          { 'Hardware': 'Ryzen-Mini-PC (32GB)', 'Typische Rolle': 'Hub + Frigate + kleines LLM', 'Stromverbrauch': 'Mittel (typisch ca. 15–35W, unter LLM-Last höher)', 'Am besten für': 'Lokale KI in einem Gerät' },
          { 'Hardware': 'RTX-3090-Server', 'Typische Rolle': 'Intensive lokale KI', 'Stromverbrauch': 'Hoch (nur die GPU kann unter Last 250W+ ziehen)', 'Am besten für': 'Große Modelle, nicht dauerhaft im Leerlauf' },
        ],
        tableFormat: true,
        note: 'Bei einem 24/7-laufenden Server kann der Stromverbrauch mehr zählen als der Anschaffungspreis – eine dauerhaft laufende 250-W-GPU belastet die Stromrechnung deutlich mehr, als es ein 10-W-Mini-PC tut. Das ist ein Grund, einen leistungsstarken GPU-Server als separates, bewusst betriebenes Gerät zu halten statt als Dauerläufer (siehe Ein Gerät oder zwei? unten).',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: 'Ein Gerät oder zwei?',
        content:
          '**Ein Gerät ist einfacher und günstiger; zwei Geräte schützen die Zuverlässigkeit von Home Assistant vor einer schwereren KI-Last.** Was richtig ist, hängt davon ab, wie sehr Sie Betriebszeit gegenüber Einfachheit gewichten.',
        items: [
          'Ein Gerät (ein einzelner Mini-PC): am einfachsten und günstigsten – ein Ryzen-Mini-PC betreibt Home Assistant, Frigate und ein kleines lokales LLM gemeinsam. Die richtige Wahl für die meisten Heimsetups.',
          'Zwei Geräte (ein stromsparender Hub plus eine separate KI-Maschine): hält Home Assistant auf einem stromsparenden Gerät extrem zuverlässig, das selten neu gestartet werden muss, während intensivere KI-Arbeit – etwa ein gebrauchter RTX-3090-Server – unabhängig läuft und neu gestartet werden kann, ohne Ihre Automatisierungen mitzureißen.',
          'Wählen Sie zwei Geräte, wenn Sie Home Assistant für etwas Sicherheitsrelevantes nutzen (Schlösser, Alarme, Heizung) und diese Ebene von einem GPU-Gerät isolieren wollen, das Sie eventuell neu starten, aktualisieren oder mit dem Sie experimentieren.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Wählen für nur-HA vs HA + KI',
        content:
          '**Wählen Sie einen Pi für nur-HA und einen Mini-PC für HA plus lokale KI – diese eine Entscheidung bestimmt die richtige Hardware.** Passen Sie das Gerät an den Workload an, nicht umgekehrt.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-de.svg',
        imageCaption: 'Entscheidungsbaum für Smart-Home-Hardware: Frigate-Kameras und ein lokales LLM hinzuzufügen führt zu vier Builds – Raspberry Pi 5, Intel-N100/N150-Mini-PC, Ryzen-Mini-PC (32 GB RAM) oder ein RTX-3090-Server (24 GB VRAM).',
        columns: ['Hardware', 'Relativer Preis', 'Nur-HA', 'Kann ein lokales LLM betreiben', 'Frigate-Beschleunigung'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Relativer Preis': 'Niedrig', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Nur sehr klein, langsam', 'Frigate-Beschleunigung': 'Hailo-8L M.2 HAT' },
          { 'Hardware': 'Intel-N100/N150-Mini-PC', 'Relativer Preis': 'Mittel', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Kleine Modelle', 'Frigate-Beschleunigung': 'Intel-iGPU (OpenVINO)' },
          { 'Hardware': 'Ryzen-Mini-PC', 'Relativer Preis': 'Mittel', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Ja (7B–8B)', 'Frigate-Beschleunigung': 'iGPU oder Hailo M.2' },
          { 'Hardware': 'NAS', 'Relativer Preis': 'Mittel–hoch', 'Nur-HA': 'Ja (Container)', 'Kann ein lokales LLM betreiben': 'Hängt von der Hardware ab', 'Frigate-Beschleunigung': 'Hängt vom Modell ab' },
          { 'Hardware': 'Server + gebrauchte RTX 3090', 'Relativer Preis': 'Hoch', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Ja (bis ~70B, je nach Quantisierung)', 'Frigate-Beschleunigung': 'Dedizierte GPU' },
        ],
        note: 'Zum Stromverbrauch je Stufe siehe [Stromverbrauch](#power) oben; ob sich alles auf einem Gerät lohnt, siehe [Ein Gerät oder zwei?](#one-or-two).',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: 'Eine allgemeine Kaufempfehlung für 2026',
        content:
          '**Wenn Sie heute ein einzelnes Gerät wählen und sich unsicher sind, welche Stufe passt, ist dies angesichts der obigen Abwägungen ein vertretbarer Standard – Ihr tatsächlicher Bedarf kann in eine andere Richtung zeigen, und keine der folgenden Empfehlungen wurde von PromptQuorum getestet oder geprüft.**',
        items: [
          'Für ein normales lokales Smart Home (Home Assistant plus eine Handvoll Zigbee-/Matter-Geräte): Ein Intel-N150-Mini-PC ist ein sinnvoller Standard – er deckt auch Frigate ab, falls Sie später Kameras hinzufügen.',
          'Für Home Assistant plus Kameras plus einen kleinen lokalen KI-Assistenten: Ein Ryzen-Mini-PC mit 32 GB RAM ist eine vertretbare Ein-Geräte-Wahl – das günstigste Gerät, das ein LLM der 8B-Klasse tatsächlich mit brauchbarer Geschwindigkeit betreibt.',
          'Für ernsthafte lokale KI (Modelle der 32B-Klasse oder größer): Ein separater RTX-3090-Server, getrennt vom Home-Assistant-Hub, ist angesichts der aktuellen Gebraucht-GPU-Preise der vertretbare Aufstieg.',
          'Eine neue, von Anfang an KI-orientierte Installation passt angesichts der Pi-Preise 2026 und ihrer LLM-Einschränkungen generell schlechter zu einem Raspberry Pi – ein Mini-PC liegt meist preislich näher dran und ist eine deutlich bessere KI-Plattform.',
        ],
      },
      stacks: {
        id: 'stacks',
        title: 'Komplette lokale Smart-Home-Setups',
        content:
          '**Die meisten Käufer brauchen mehr als ein Produkt – mindestens einen Hub, einen Frigate-Beschleuniger und Speicher, plus ein KI-Gerät, wenn Sie lokale LLM-Inferenz wollen.** Diese drei Setups kombinieren die obigen Empfehlungen nach Szenario; jedes Produkt verlinkt zurück zu seiner vollständigen Empfehlung weiter oben auf dieser Seite.',
        columns: ['Setup', 'Hub', 'Frigate-Beschleuniger', 'KI', 'Geschätzte Gesamtkosten (Aug. 2026)'],
        rows: [
          { 'Setup': 'Einsteiger (nur HA)', 'Hub': '[Home Assistant Green oder Pi 5](#raspberry-pi)', 'Frigate-Beschleuniger': '—', 'KI': '—', 'Geschätzte Gesamtkosten (Aug. 2026)': 'ca. 179–300 €' },
          { 'Setup': 'HA + Kameras', 'Hub': '[N150-Mini-PC](#mini-pc)', 'Frigate-Beschleuniger': '[Intel-iGPU, oder Hailo-8L für mehr Reserve](#frigate-accelerator)', 'KI': '—', 'Geschätzte Gesamtkosten (Aug. 2026)': 'ca. 230–360 €' },
          { 'Setup': 'HA + Kameras + lokale KI', 'Hub': '[Ryzen-Mini-PC, 32GB](#mini-pc)', 'Frigate-Beschleuniger': 'Integrierte iGPU, oder [Hailo-8L für mehr Kameras](#frigate-accelerator)', 'KI': 'Läuft auf demselben Gerät (Modell der 8B-Klasse)', 'Geschätzte Gesamtkosten (Aug. 2026)': 'ca. 600–730 €' },
          { 'Setup': 'HA + Kameras + große lokale KI', 'Hub': '[N150-Mini-PC (für Zuverlässigkeit separat gehalten)](#mini-pc)', 'Frigate-Beschleuniger': '[Hailo-8](#frigate-accelerator)', 'KI': '[Server mit gebrauchter RTX 3090, separat betrieben](#server)', 'Geschätzte Gesamtkosten (Aug. 2026)': 'ca. 1.800–2.250 €' },
        ],
        tableFormat: true,
        note: 'Das letzte Setup hält den Home-Assistant-Hub auf seinem eigenen stromsparenden Gerät und betreibt die RTX 3090 als separate Maschine – warum, steht bei [Ein Gerät oder zwei?](#one-or-two).',
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Welche Hardware empfiehlt Frigate?', a: 'Für neue Builds empfiehlt Frigate eine Intel-iGPU über OpenVINO oder ein Hailo-8L- (ca. 70–80 €, günstig) bzw. Hailo-8-Modul (ca. 180–220 €, schneller) im M.2-Format für mehr Erkennungskapazität. Der Google Coral (USB/M.2 TPU) funktioniert weiterhin, ist aber inzwischen veraltet – Frigate empfiehlt ihn für neue Installationen außer auf sehr stromsparender Hardware nicht mehr.' },
          { q: 'Kann ein Raspberry Pi auch ein lokales LLM betreiben?', a: 'Ein Pi kann nur sehr kleine Modelle betreiben, und das langsam, daher ist er für einen reaktionsschnellen lokalen LLM-Assistenten nicht ideal. Home Assistant und einfache Sprache bewältigt er gut, aber für lokale KI ist ein Mini-PC mit einer leistungsfähigen iGPU oder NPU – oder ein gebrauchtes RTX-3090-Gerät – die bessere Wahl.' },
          { q: 'Wie viel RAM brauche ich?', a: 'Home Assistant allein läuft in ein paar Gigabyte. Um ein kleines lokales LLM und andere KI-Dienste auf demselben Gerät zu betreiben, hilft mehr RAM; ein Mini-PC mit 32 GB RAM und einer leistungsfähigen iGPU/NPU hält ein Qwen3-8B- oder Llama-3.1-8B-Modell reaktionsschnell. Passen Sie den RAM an die geplante Modellgröße an.' },
          { q: 'Welchen Mini-PC sollte ich kaufen?', a: 'Für HA plus Kameras beschleunigt ein Intel-N100/N150-Mini-PC Frigate über OpenVINO. Für HA plus ein lokales LLM steigen Sie auf einen Ryzen-Mini-PC mit 32 GB RAM auf. Siehe den Leitfaden zu den besten Mini-PCs für Home Assistant + lokale KI für konkrete Empfehlungen.' },
          { q: 'Ein Gerät oder zwei?', a: 'Ein Gerät (ein Mini-PC) ist am einfachsten und betreibt Home Assistant plus ein kleines lokales LLM zusammen. Teilen Sie auf zwei auf, wenn Sie den Hub auf einem stromsparenden Gerät extrem zuverlässig halten und intensive KI auf eine separate Maschine wie einen gebrauchten RTX-3090-Server auslagern wollen.' },
          { q: 'Zählt der Stromverbrauch bei einem 24/7-Gerät?', a: 'Er zählt mehr als der Kaufpreis bei Hardware, die nie ausgeschaltet wird. Ein Raspberry Pi zieht wenige Watt, ein N100/N150-Mini-PC etwa 10–15W, ein Ryzen-Mini-PC je nach Last 15–35W, und eine diskrete GPU wie eine RTX 3090 kann unter Last 250W+ ziehen – ein Grund, einen leistungsstarken GPU-Server als separates Gerät statt als Dauerläufer zu betreiben.' },
          { q: 'Lohnt sich ein Raspberry Pi bei den Preisen von 2026 noch?', a: 'Für Home Assistant allein, ja – er bleibt die stromsparendste Option. Aber eine DRAM-Knappheit 2026 hat die Pi-5-Preise stark steigen lassen (im August 2026 je nach RAM ca. 185–300 €, gegenüber ursprünglich 80–120 $), was den Preisabstand zu einem Intel-N100/N150-Mini-PC verkleinert. Wenn Sie innerhalb eines Jahres Kameras oder ein lokales LLM hinzufügen könnten, ist der Mini-PC meist jetzt schon der bessere Kauf.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) – konkrete Empfehlungen',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – der vollständige Stack',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – was das KI-Gerät betreibt',
          '[Beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm) – clusterübergreifend: VRAM und Hardware-Details',
          '[Bester GPU-Kaufratgeber für lokale LLMs](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) – tiefergehende GPU-Empfehlungen, wenn Sie mehr VRAM als eine RTX 3090 brauchen',
          '[Cloud-GPU-Mietratgeber](/de/power-local-llm/cloud-gpu-rental-guide-2026) – GPU-Zeit mieten statt kaufen, wenn Sie sie nur gelegentlich brauchen',
          '[Beste Balkonkraftwerk-Batterien 2026](/de/balcony-solar/best-balcony-solar-batteries-2026) — Batteriespeicher für Ihr lokales Heim-Energiesystem',
          '[Die besten Smart-Home-Hubs für lokale Steuerung (2027)](/de/smart-home/best-smart-home-hubs-2027) – dedizierte Hub-Empfehlungen',
          '[NVIDIA Jetson Orin Nano für Smart-Home-KI: Test (2027)](/de/smart-home/nvidia-jetson-orin-nano-smart-home-review) – GPU-Hardware für lokale KI',
          '[Die besten Zigbee- und Thread-USB-Dongles (2027)](/de/smart-home/best-zigbee-thread-dongles-2027) – Funk-Hardware für Zigbee und Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste Hardware für ein lokales Smart Home + lokale KI (2026)',
      description: 'Beste Hardware für lokales Smart Home + KI 2026: Intel-N100-Mini-PC oder Raspberry Pi 5 als Hub, Frigate-Beschleuniger (Intel iGPU/Hailo), SSD-Speicher, LLM-Aufstieg.',
      url: 'https://www.promptquorum.com/de/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Home-Assistant-Hardware' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: 'Lokales LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Welche Hardware empfiehlt Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Für neue Builds empfiehlt Frigate eine Intel-iGPU über OpenVINO oder ein Hailo-8L- (ca. 70–80 €) bzw. Hailo-8-Modul (ca. 180–220 €) im M.2-Format für mehr Erkennungskapazität. Der Google Coral TPU funktioniert weiterhin, ist aber inzwischen veraltet und wird für neue Installationen nicht mehr empfohlen.' } },
        { '@type': 'Question', name: 'Kann ein Raspberry Pi auch ein lokales LLM betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Pi kann nur sehr kleine Modelle betreiben, und das langsam. Home Assistant und einfache Sprache bewältigt er gut, aber für einen reaktionsschnellen lokalen LLM-Assistenten ist ein Mini-PC mit leistungsfähiger iGPU oder NPU oder ein gebrauchtes RTX-3090-Gerät besser.' } },
        { '@type': 'Question', name: 'Wie viel RAM brauche ich?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant allein läuft in ein paar Gigabyte. Um ein kleines lokales LLM auf demselben Gerät zu betreiben, hilft mehr RAM; ein Mini-PC mit 32 GB RAM hält ein Qwen3-8B- oder Llama-3.1-8B-Modell reaktionsschnell. Passen Sie den RAM an die geplante Modellgröße an.' } },
        { '@type': 'Question', name: 'Welchen Mini-PC sollte ich kaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Für HA plus Kameras beschleunigt ein Intel-N100/N150-Mini-PC Frigate über OpenVINO. Für HA plus ein lokales LLM steigen Sie auf einen Ryzen-Mini-PC mit 32 GB RAM auf. Siehe den Leitfaden zu den besten Mini-PCs für Home Assistant + lokale KI.' } },
        { '@type': 'Question', name: 'Ein Gerät oder zwei?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Mini-PC betreibt Home Assistant plus ein kleines lokales LLM zusammen. Teilen Sie auf zwei auf, wenn Sie den Hub auf einem stromsparenden Gerät extrem zuverlässig halten und intensive KI auf eine separate Maschine wie einen gebrauchten RTX-3090-Server auslagern wollen.' } },
        { '@type': 'Question', name: 'Zählt der Stromverbrauch bei einem 24/7-Gerät?', acceptedAnswer: { '@type': 'Answer', text: 'Er zählt mehr als der Kaufpreis bei Hardware, die nie ausgeschaltet wird. Ein Raspberry Pi zieht wenige Watt, ein N100/N150-Mini-PC etwa 10–15W, ein Ryzen-Mini-PC etwa 15–35W, und eine diskrete GPU wie eine RTX 3090 kann unter Last 250W+ ziehen.' } },
        { '@type': 'Question', name: 'Lohnt sich ein Raspberry Pi bei den Preisen von 2026 noch?', acceptedAnswer: { '@type': 'Answer', text: 'Für Home Assistant allein, ja. Aber eine DRAM-Knappheit 2026 hat die Pi-5-Preise je nach RAM auf ca. 185–300 € steigen lassen, gegenüber ursprünglich 80–120 $, was den Abstand zu einem Intel-N100/N150-Mini-PC verkleinert – der die bessere Wahl ist, wenn Sie innerhalb eines Jahres Kameras oder ein lokales LLM hinzufügen könnten.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-es.webp',
    affiliateDisclosure: true,
    title: 'Mejor Hardware para un Smart Home Local + IA Local (2026)',
    seoTitle: 'Mejor Hardware: Smart Home Local + IA (2026)',
    intro:
      'El mejor hardware para un smart home local sigue una decisión: un mini PC Intel N100/N150 o una Raspberry Pi 5 ejecuta el hub de Home Assistant, una iGPU Intel (OpenVINO) o un módulo Hailo-8L M.2 acelera la detección de cámaras de Frigate, un SSD o NAS almacena las grabaciones, y un equipo con RTX 3090 usada es el salto para ejecutar un LLM local. Esta guía elige cada capa, con precios actualizados a 2026, y te ayuda a decidir entre solo-HA y HA-más-IA para comprar una sola vez, no dos.',
    metaDescription:
      'Mejor hardware para un smart home local + IA en 2026: hub con mini PC Intel N100 o Raspberry Pi 5, acelerador Frigate (Intel iGPU/Hailo), almacenamiento SSD y salto a LLM. Precios actualizados.',
    twitterDescription:
      'Hardware para un smart home local en 2026: hub con mini PC Intel N100 o Pi 5, acelerador Frigate (Intel iGPU/Hailo-8L), almacenamiento SSD, RTX 3090 usada para un LLM local. Precios actualizados de 2026.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que eligen hardware para Home Assistant e IA local',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'mejor hardware home assistant ia local',
      'home assistant hardware',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'servidor smart home local',
    ],
    leadAnswerBlock:
      '**Monta un smart home local en cuatro capas: el hub (mini PC Intel N100/N150 o Raspberry Pi 5), un acelerador de Frigate (iGPU Intel vía OpenVINO o un módulo Hailo-8L M.2), almacenamiento (un SSD, o un NAS para muchas cámaras) y —si quieres un LLM local— un equipo de salto como una RTX 3090 usada.** Para Home Assistant solo, una Raspberry Pi es suficiente; el factor decisivo es si añades detección de cámaras e IA local. ¿Ya tienes claro tu objetivo? Ve directo a [qué hardware comprar para cada configuración](#quick-picks).',
    quickAnswerTop: {
      es: {
        question: '¿Qué hardware necesito para un smart home local con IA?',
        answer:
          'Empieza por el hub: un mini PC Intel N100/N150 o una Raspberry Pi 5 ejecuta Home Assistant. Añade un acelerador de Frigate para las cámaras: una iGPU Intel vía OpenVINO cubre la mayoría de configuraciones, y un módulo Hailo-8L o Hailo-8 M.2 añade capacidad de detección (el Google Coral ya es heredado). Guarda las grabaciones en un SSD, o un NAS para muchas cámaras. Para un LLM local, sube a un mini PC con iGPU/NPU capaz o a un equipo con RTX 3090 usada. Si crees que añadirás IA local dentro de un año, compra el mini PC ahora en lugar de una Raspberry Pi que tendrás que sustituir después.',
        bullets: [
          'Hub: mini PC Intel N100/N150 o Raspberry Pi 5',
          'Frigate: iGPU Intel (OpenVINO) o Hailo-8L M.2 — Coral es heredado',
          'Almacenamiento: SSD, o un NAS para muchas cámaras',
          'Salto a LLM local: iGPU/NPU de mini PC o RTX 3090 usada',
          'Si podrías añadir IA local dentro de un año, compra el mini PC ya — sale más barato que sustituir una Raspberry Pi después',
          'Decide primero: solo-HA o HA + cámaras + IA local — esto determina si compras una vez o dos',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: '¿Qué Hardware Comprar?', anchor: 'quick-picks' },
      { label: 'Qué necesita el hub', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'Acelerador de Frigate', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Servidor dedicado', anchor: 'server' },
      { label: 'No gastes de más', anchor: 'dont-overspend' },
      { label: 'Consumo eléctrico', anchor: 'power' },
      { label: '¿Un equipo o dos?', anchor: 'one-or-two' },
      { label: 'Solo-HA vs HA + IA', anchor: 'picking' },
      { label: 'Una recomendación general de compra', anchor: 'what-id-buy' },
      { label: 'Configuraciones completas', anchor: 'stacks' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un mini PC Intel N100/N150 o una Raspberry Pi 5 ejecuta el hub; añade una iGPU Intel o Hailo-8L para Frigate, un SSD o NAS para almacenamiento, y un equipo con RTX 3090 usada si quieres un LLM local.' },
      { type: 'plain-terms', content: 'El software del hub (Home Assistant) es ligero y corre en un ordenador pequeño como una Raspberry Pi. La detección de cámaras (Frigate) necesita un acelerador: un chip gráfico Intel vía OpenVINO, o un módulo Hailo M.2. Añadir un modelo de lenguaje local necesita aún más potencia, y ahí entra un mini PC con un chip gráfico capaz, o una tarjeta gráfica usada como una RTX 3090.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Hub: un mini PC Intel N100/N150 (~230–280 €) o una Raspberry Pi 5 (~185–300 € en agosto de 2026, muy al alza por la escasez de memoria DRAM) ejecuta Home Assistant',
          'Frigate: una iGPU Intel (OpenVINO, integrada en la mayoría de mini PC), un módulo Hailo-8L M.2 (~70–80 €) o un Hailo-8 M.2 (~180–220 €) acelera la detección de cámaras — el Google Coral ya es heredado y ya no es la recomendación de Frigate para equipos nuevos',
          'Almacenamiento: un SSD para grabaciones, o un NAS (Synology DS225+ ~380–420 €, DS925+ ~680–750 €, UGREEN NASync ~700–800 €) en cuanto uses varias cámaras',
          'Salto a LLM local: un mini PC Ryzen (32 GB de RAM, ~600–650 €) o un equipo con RTX 3090 usada (~1.400–1.750 € en agosto de 2026 — los precios han subido muy por encima de 2024–2025)',
          'Decide entre solo-HA o HA + cámaras + IA local antes de comprar: cambia el equipo adecuado, y comprar el mini PC ahora es mejor que sustituir una Pi después',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: '¿Qué Hardware Comprar?',
        content:
          '**Haz que tu objetivo determine el equipo, no al revés.** La tabla siguiente asocia cada objetivo de smart home con el hardware que lo cubre — cada fila enlaza con la recomendación más detallada más abajo en la página.',
        columns: ['Tu objetivo', 'Compra esto', 'Precio estimado (ago 2026)'],
        rows: [
          { 'Tu objetivo': 'Solo Home Assistant', 'Compra esto': '[Home Assistant Green o Raspberry Pi 5](#raspberry-pi)', 'Precio estimado (ago 2026)': '179 € (Green) / 185–300 € (Pi 5)' },
          { 'Tu objetivo': 'HA + cámaras Frigate', 'Compra esto': '[Mini PC Intel N100/N150](#mini-pc)', 'Precio estimado (ago 2026)': '~230–280 €' },
          { 'Tu objetivo': 'HA + un LLM local', 'Compra esto': '[Mini PC Ryzen, 32 GB de RAM](#mini-pc)', 'Precio estimado (ago 2026)': '~600–650 €' },
          { 'Tu objetivo': 'HA + un LLM local más grande', 'Compra esto': '[Servidor con RTX 3090 usada](#server)', 'Precio estimado (ago 2026)': '~1.400–1.750 € (solo GPU)' },
        ],
        tableFormat: true,
        note: 'Los precios son actuales a agosto de 2026 y cambian — los precios de GPU y DRAM han sido especialmente volátiles este año. Comprueba el precio en la publicación antes de comprar.',
        callouts: [
          { type: 'tip', text: '¿Aún no sabes si querrás IA local? Consulta [No gastes de más](#dont-overspend) antes de comprar el equipo más caro.' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Qué necesita el hub',
        content:
          '**El propio Home Assistant es ligero y corre en hardware modesto; las demandas fuertes vienen de la detección de cámaras de Frigate y de un LLM local.** Dimensiona el equipo para lo que vas a añadir, no solo para el hub.',
        items: [
          'El hub necesita poco cómputo para el control de dispositivos y las automatizaciones.',
          'La detección de objetos de Frigate necesita un acelerador: una iGPU Intel vía OpenVINO cubre la mayoría de configuraciones, y un módulo Hailo-8L o Hailo-8 M.2 añade capacidad. El Google Coral USB/M.2 TPU sigue funcionando, pero ya es heredado — Frigate ya no lo recomienda para instalaciones nuevas.',
          'Los modelos Whisper más grandes y la inferencia de LLM local son las cargas más exigentes: planifica la RAM y una GPU/NPU en torno a ellas.',
          'Guarda las grabaciones de las cámaras en un SSD; pasa a un NAS en cuanto uses varias cámaras de forma continua.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Una Raspberry Pi 5 es la forma de menor consumo de ejecutar Home Assistant para el uso típico de smart home, pero la escasez de DRAM de 2026 ha disparado el precio de las placas — la de 8GB ronda ahora los 185–220 €, y la de 16GB, 280–300 €, ambas muy por encima de su precio de lanzamiento de ~80/120 $, y los analistas no esperan una normalización antes de finales de 2027.** Sigue teniendo dificultades con la inferencia de LLM y los modelos Whisper grandes.',
        items: [
          'Estupenda para control de dispositivos, automatizaciones y una pequeña configuración de voz local.',
          'La inferencia de LLM en una Pi se limita a modelos muy pequeños y lentos — combínala con un HAT Hailo-8L M.2 si quieres detección con Frigate.',
          'Elige una Pi 5 si quieres lo básico con bajo consumo y tienes claro que no vas a añadir un LLM local. Si crees que querrás IA local dentro de un año, sáltate la Pi y compra ya el mini PC — cuesta poco más y te ahorra comprar dos veces.',
          'Para un equipo listo para usar, el Home Assistant Green se envía preconfigurado (unos 179 € en 2026, frente a un precio de lanzamiento de 99 $). El Home Assistant Yellow se descontinuó en octubre de 2025 — Green es ahora el único hub oficial de la propia marca.',
        ],
        affiliateLinks: [
          { label: 'Ver precio de la Raspberry Pi 5 →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '185–300 €' },
          { label: 'Ver precio del Home Assistant Green →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '179 €' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (y sitio para un LLM)',
        content:
          '**Un mini PC es la mejor opción de un solo equipo para Home Assistant más IA local, con suficiente RAM y una iGPU o NPU capaz para ejecutar un LLM pequeño y acelerar Frigate.** Equilibra potencia, tamaño y coste, y es la categoría en la que merece la pena gastar más si quieres un solo equipo para ambas funciones.',
        items: [
          'Mejor opción económica: un mini PC Intel N100/N150 de bajo consumo ejecuta Home Assistant y acelera Frigate mediante la iGPU Intel (OpenVINO) — la opción práctica por defecto para un equipo de hub más cámaras. El Beelink EQ14 (Intel N150, 16 GB de RAM) cuesta unos 230–280 € en agosto de 2026 — bueno para funcionamiento 24/7 y bajo consumo, pero insuficiente para un LLM local.',
          'Mejor opción para IA local: para un LLM local en el mismo equipo, sube a un mini PC Ryzen con 32 GB de RAM. El Beelink SER8 (Ryzen 7 8845HS) cuesta unos 600–650 € en agosto de 2026 y ejecuta un modelo Qwen3 8B o Llama 3.1 8B vía Ollama a una velocidad aprovechable, junto con Home Assistant y Frigate. Prioriza la RAM y una GPU integrada o NPU capaz para menor latencia.',
          'Si vas a comprar un solo equipo para Home Assistant e IA local juntos, el mini PC Ryzen justifica el coste extra sobre el N150 — es el único de los dos que realmente ejecuta un LLM a una velocidad aprovechable.',
          'Para opciones concretas, consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) y, entre clústeres, [mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Ver precio del EQ14 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '230–280 €' },
          { label: 'Ver precio del SER8 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: '~600–650 €' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: '¿Vas a usar cámaras de seguridad? Elige tu acelerador de Frigate',
        content:
          '**El número de cámaras y cuánto margen de detección necesites determina el acelerador, algo aparte de qué equipo ejecuta el hub.** Frigate ya no recomienda el Google Coral para equipos nuevos — ahora dirige a los nuevos usuarios hacia Hailo, o hacia la iGPU Intel integrada del equipo anfitrión.',
        items: [
          '1–4 cámaras: la iGPU Intel integrada en un mini PC N100/N150, usada vía OpenVINO, cubre la mayoría de configuraciones domésticas sin coste de hardware adicional.',
          '4–10 cámaras, o si quieres más margen de detección en hardware que no sea Intel: un módulo Hailo-8L M.2 (~70–80 € en agosto de 2026) es la recomendación actual de bajo consumo de Frigate — funciona como antes lo hacía el Coral, como tarjeta adicional con soporte de primer nivel.',
          '10 o más cámaras, o enriquecimientos más pesados (reconocimiento facial/de matrículas además de la detección): un módulo Hailo-8 M.2 (~180–220 €) añade bastante más rendimiento.',
          '¿Ya tienes un Coral? Sigue funcionando — esto solo trata de qué comprar en un equipo nuevo, no de una razón para sustituir un Coral que ya funciona.',
        ],
        affiliateLinks: [
          { label: 'Ver precio del Hailo-8L →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: '~70–80 €' },
          { label: 'Ver precio del Hailo-8 →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: '~180–220 €' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Un NAS puede alojar Home Assistant en un contenedor junto al almacenamiento y las grabaciones de Frigate, si tiene suficiente CPU y RAM — es una buena opción si ya tienes uno, pero no el motivo correcto para comprar tu primer NAS.** No compres un NAS específicamente para ejecutar un LLM local: un mini PC dedicado o un equipo con GPU es una mejor plataforma de IA por el mismo dinero.',
        items: [
          '2–4 cámaras / almacenamiento más ligero: el Synology DS225+ (~380–420 € en agosto de 2026) cubre Home Assistant en contenedor más las grabaciones de Frigate para pocas cámaras.',
          '4–10 cámaras / más margen: el Synology DS925+ (~680–750 €) añade más margen de CPU/RAM para más complementos y cámaras.',
          'Almacenamiento más IA local en un solo equipo: los modelos UGREEN NASync (gama DXP4800 Plus, ~700–800 €) vienen con una opción de LLM local integrada y hardware más reciente (DDR5, 10GbE sin tarjetas adicionales) a un precio similar al del DS925+.',
          'La inferencia de LLM en un NAS sigue dependiendo mucho de su hardware — la mayoría de los NAS carecen de una GPU discreta capaz, así que trata la opción de LLM integrada como una comodidad, no como sustituto del nivel RTX 3090 de abajo si realmente quieres un modelo grande.',
        ],
        affiliateLinks: [
          { label: 'Ver precio del DS225+ →', url: 'https://www.synology.com/es-es/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: '~380–420 €' },
          { label: 'Ver precio del DS925+ →', url: 'https://www.synology.com/es-es/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: '~680–750 €' },
          { label: 'Ver precio del UGREEN NASync →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: '~700–800 €' },
        ],
      },
      server: {
        id: 'server',
        title: 'Servidor dedicado (salto a LLM)',
        content:
          '**Un servidor dedicado con una GPU discreta es el salto para ejecutar un LLM local más grande junto a muchas cámaras.** Ofrece el mayor margen a mayor coste y consumo — y el precio de las GPU se ha movido mucho en 2026, así que trata las cifras siguientes como una instantánea, no como un valor fijo.',
        items: [
          'Una RTX 3090 usada (24 GB de VRAM) es una de las opciones con mejor relación VRAM-precio para LLM locales, pero su precio de segunda mano ha subido con fuerza durante 2026, hasta unos 1.400–1.750 € en agosto — muy por encima de los 900–1.000 € de 2024–2025. Los modelos cuantizados en Q4 de hasta unos 70B pueden ser posibles según la cuantización, el tamaño de contexto y el offloading; considéralo un rango de capacidad, no una garantía para todo modelo de 70B.',
          'Una RTX 3060 usada (12 GB) es la alternativa económica para un equipo con GPU discreta, ahora en torno a 250–320 € de segunda mano en agosto de 2026 — gestiona modelos de 7B–13B sin problema, aunque sin el margen de VRAM ni el precio de la RTX 3090.',
          'Mejor para muchas cámaras, un LLM más grande y varios usuarios. Mayor consumo y coste que un mini PC — consulta la sección de consumo eléctrico más abajo antes de comprometerte con este nivel.',
          'Excesivo para un smart home básico — resérvalo para uso intensivo de IA local, y mantén el hub de Home Assistant en un equipo aparte de bajo consumo por fiabilidad (ver ¿Un equipo o dos? más abajo).',
        ],
        affiliateLinks: [
          { label: 'Ver anuncios de RTX 3090 usada →', url: 'https://www.ebay.es/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: '~1.400–1.750 €' },
          { label: 'Ver anuncios de RTX 3060 usada →', url: 'https://www.ebay.es/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: '~250–320 €' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-es.svg',
        imageCaption: 'Capacidad de LLM local por nivel de hardware: una Raspberry Pi 5 solo ejecuta modelos diminutos, un mini PC Intel N100/N150 gestiona modelos pequeños, un mini PC Ryzen (32 GB de RAM) ejecuta modelos de 7B–8B, y una RTX 3090 usada (24 GB de VRAM) escala hasta unos 70B en cuantización Q4 según la configuración.',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: 'No gastes de más en tu servidor de Home Assistant',
        content:
          '**Comprar más hardware del que necesita tu caso de uso es la compra más habitual malgastada en esta categoría — ajusta el equipo a lo que realmente vas a ejecutar.**',
        items: [
          '¿Solo Home Assistant? No necesitas una GPU RTX, y probablemente tampoco un mini PC — una Raspberry Pi 5 o un Home Assistant Green lo cubren.',
          '¿Home Assistant más cámaras de Frigate? No necesitas una estación de trabajo cara — un mini PC Intel N100/N150 con su iGPU integrada es suficiente para la mayoría de números de cámaras domésticas.',
          '¿Home Assistant más un pequeño LLM local? Un mini PC Ryzen de 32 GB es suficiente para un modelo de clase 8B — todavía no necesitas una GPU discreta.',
          '¿Quieres un LLM local grande (32B en adelante)? Ahí es donde una GPU discreta, como una RTX 3090 usada, realmente justifica su coste.',
        ],
      },
      power: {
        id: 'power',
        title: 'El consumo eléctrico importa en un equipo 24/7',
        content:
          '**Este hardware funciona de forma continua, así que para un equipo que nunca se apaga, el coste eléctrico a lo largo de un año puede importar tanto como el precio de compra.** Aproximadamente, por orden de consumo típico:',
        columns: ['Hardware', 'Rol típico', 'Consumo', 'Ideal para'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Rol típico': 'Solo hub', 'Consumo': 'Muy bajo (unos vatios)', 'Ideal para': 'Home Assistant' },
          { 'Hardware': 'Mini PC Intel N100/N150', 'Rol típico': 'Hub + Frigate', 'Consumo': 'Bajo (~10–15W típico)', 'Ideal para': 'Hub + cámaras 24/7' },
          { 'Hardware': 'Mini PC Ryzen (32GB)', 'Rol típico': 'Hub + Frigate + LLM pequeño', 'Consumo': 'Moderado (~15–35W típico, más bajo carga de LLM)', 'Ideal para': 'IA local en un solo equipo' },
          { 'Hardware': 'Servidor RTX 3090', 'Rol típico': 'IA local pesada', 'Consumo': 'Alto (la GPU sola puede consumir 250W+ bajo carga)', 'Ideal para': 'Modelos grandes, no en reposo 24/7' },
        ],
        tableFormat: true,
        note: 'Para un servidor que funciona 24/7, el consumo eléctrico puede importar más que el precio de compra inicial — una GPU de 250W funcionando de forma continua añade mucho más a la factura de la luz de lo que lo hace un mini PC de 10W. Este es un motivo para mantener un servidor con GPU potente como un equipo aparte, encendido de forma deliberada, en lugar de siempre encendido (ver ¿Un equipo o dos? más abajo).',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: '¿Un equipo o dos?',
        content:
          '**Un equipo es más simple y barato; dos equipos protegen la fiabilidad de Home Assistant frente a una carga de IA más pesada.** Cuál es el adecuado depende de cuánto valores el tiempo de actividad frente a la simplicidad.',
        items: [
          'Un equipo (un solo mini PC): lo más simple y barato — un mini PC Ryzen ejecuta Home Assistant, Frigate y un pequeño LLM local juntos. La opción adecuada para la mayoría de configuraciones domésticas.',
          'Dos equipos (un hub de bajo consumo más una máquina de IA aparte): mantiene Home Assistant ultrafiable en un equipo de bajo consumo que rara vez necesita reiniciarse, mientras que el trabajo de IA más pesado —un servidor con RTX 3090 usada, por ejemplo— funciona y puede reiniciarse de forma independiente sin tumbar tus automatizaciones con él.',
          'Elige dos equipos si usas Home Assistant para algo relacionado con la seguridad (cerraduras, alarmas, calefacción) y quieres aislar esa capa de un equipo con GPU que quizá reinicies, actualices o con el que experimentes.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Elegir para solo-HA vs HA + IA',
        content:
          '**Elige una Pi para solo-HA y un mini PC para HA más IA local: esa única decisión determina el hardware adecuado.** Ajusta el equipo a la carga de trabajo, no al revés.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-es.svg',
        imageCaption: 'Árbol de decisión para el hardware de smart home: añadir cámaras de Frigate y un LLM local lleva a cuatro configuraciones — Raspberry Pi 5, mini PC Intel N100/N150, mini PC Ryzen (32 GB de RAM) o un servidor RTX 3090 (24 GB de VRAM).',
        columns: ['Hardware', 'Precio relativo', 'Solo-HA', 'Puede ejecutar un LLM local', 'Aceleración de Frigate'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Precio relativo': 'Bajo', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Solo muy pequeños, lento', 'Aceleración de Frigate': 'HAT Hailo-8L M.2' },
          { 'Hardware': 'Mini PC Intel N100/N150', 'Precio relativo': 'Medio', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Modelos pequeños', 'Aceleración de Frigate': 'iGPU Intel (OpenVINO)' },
          { 'Hardware': 'Mini PC Ryzen', 'Precio relativo': 'Medio', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Sí (7B–8B)', 'Aceleración de Frigate': 'iGPU o Hailo M.2' },
          { 'Hardware': 'NAS', 'Precio relativo': 'Medio–alto', 'Solo-HA': 'Sí (contenedor)', 'Puede ejecutar un LLM local': 'Depende del hardware', 'Aceleración de Frigate': 'Depende del modelo' },
          { 'Hardware': 'Servidor + RTX 3090 usada', 'Precio relativo': 'Alto', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Sí (hasta ~70B, según cuantización)', 'Aceleración de Frigate': 'GPU discreta' },
        ],
        note: 'Para el consumo eléctrico por nivel, consulta [Consumo eléctrico](#power) arriba; para saber si conviene ejecutarlo todo en un solo equipo, consulta [¿Un equipo o dos?](#one-or-two).',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: 'Una recomendación general de compra para 2026',
        content:
          '**Si hoy estás eligiendo un equipo y no tienes claro qué nivel te conviene, esta es una base razonable teniendo en cuenta los compromisos anteriores — tus necesidades reales pueden apuntar a otra parte, y ninguna de las opciones siguientes ha sido probada ni revisada por PromptQuorum.**',
        items: [
          'Para un smart home local normal (Home Assistant más algunos dispositivos Zigbee/Matter): un mini PC Intel N150 es una opción por defecto sensata — también cubre Frigate si añades cámaras más adelante.',
          'Para Home Assistant más cámaras más un pequeño asistente de IA local: un mini PC Ryzen con 32 GB de RAM es una opción razonable de un solo equipo — es el equipo más barato que realmente ejecuta un LLM de clase 8B a una velocidad aprovechable.',
          'Para IA local en serio (modelos de clase 32B o mayores): un servidor RTX 3090 aparte, separado del hub de Home Assistant, es el salto razonable dado el precio actual de las GPU usadas.',
          'Una instalación nueva pensada desde el principio para IA suele encajar peor con una Raspberry Pi, dado el precio de la Pi en 2026 y sus limitaciones de LLM — un mini PC suele tener un precio parecido y es una plataforma de IA mucho mejor.',
        ],
      },
      stacks: {
        id: 'stacks',
        title: 'Configuraciones completas de smart home local',
        content:
          '**La mayoría de compradores necesita más de un producto: como mínimo un hub, un acelerador de Frigate y almacenamiento, más un equipo de IA si quieres inferencia de LLM local.** Estas tres configuraciones combinan las opciones anteriores por escenario; cada producto enlaza con su recomendación completa más arriba en esta página.',
        columns: ['Configuración', 'Hub', 'Acelerador de Frigate', 'IA', 'Total estimado (ago 2026)'],
        rows: [
          { 'Configuración': 'Inicial (solo HA)', 'Hub': '[Home Assistant Green o Pi 5](#raspberry-pi)', 'Acelerador de Frigate': '—', 'IA': '—', 'Total estimado (ago 2026)': '~179–300 €' },
          { 'Configuración': 'HA + cámaras', 'Hub': '[Mini PC N150](#mini-pc)', 'Acelerador de Frigate': '[iGPU Intel, o Hailo-8L para más margen](#frigate-accelerator)', 'IA': '—', 'Total estimado (ago 2026)': '~230–360 €' },
          { 'Configuración': 'HA + cámaras + IA local', 'Hub': '[Mini PC Ryzen, 32 GB](#mini-pc)', 'Acelerador de Frigate': 'iGPU integrada, o [Hailo-8L para más cámaras](#frigate-accelerator)', 'IA': 'Corre en el mismo equipo (modelo de clase 8B)', 'Total estimado (ago 2026)': '~600–730 €' },
          { 'Configuración': 'HA + cámaras + IA local grande', 'Hub': '[Mini PC N150 (mantenido aparte por fiabilidad)](#mini-pc)', 'Acelerador de Frigate': '[Hailo-8](#frigate-accelerator)', 'IA': '[Servidor con RTX 3090 usada, aparte](#server)', 'Total estimado (ago 2026)': '~1.800–2.250 €' },
        ],
        tableFormat: true,
        note: 'La última configuración mantiene el hub de Home Assistant en su propio equipo de bajo consumo y ejecuta la RTX 3090 como una máquina aparte — consulta [¿Un equipo o dos?](#one-or-two) para saber por qué.',
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué hardware recomienda Frigate?', a: 'Para equipos nuevos, Frigate recomienda una iGPU Intel vía OpenVINO, o un módulo Hailo-8L (~70–80 €, económico) o Hailo-8 (~180–220 €, más rápido) en formato M.2 para más capacidad de detección. El Google Coral USB/M.2 TPU sigue funcionando, pero ya es heredado — Frigate ya no lo recomienda para instalaciones nuevas salvo en hardware de muy bajo consumo.' },
          { q: '¿Puede una Raspberry Pi ejecutar también un LLM local?', a: 'Una Pi solo puede ejecutar modelos muy pequeños, y lentamente, así que no es ideal para un asistente de LLM local con buena respuesta. Maneja bien Home Assistant y la voz básica, pero para IA local un mini PC con una iGPU o NPU capaz, o un equipo con RTX 3090 usada, es la mejor opción.' },
          { q: '¿Cuánta RAM necesito?', a: 'Home Assistant solo corre en un par de gigabytes. Para ejecutar un LLM local pequeño y otros servicios de IA en el mismo equipo, ayuda más RAM; un mini PC con 32 GB de RAM y una iGPU/NPU capaz mantiene un modelo Qwen3 8B o Llama 3.1 8B con buena respuesta. Ajusta la RAM al tamaño del modelo que planees ejecutar.' },
          { q: '¿Qué mini PC debería comprar?', a: 'Para HA más cámaras, un mini PC Intel N100/N150 acelera Frigate vía OpenVINO. Para HA más un LLM local, sube a un mini PC Ryzen con 32 GB de RAM. Consulta la guía de mejores mini PC para Home Assistant + IA local para opciones concretas.' },
          { q: '¿Un equipo o dos?', a: 'Un equipo (un mini PC) es lo más simple y ejecuta Home Assistant más un LLM local pequeño juntos. Divide en dos si quieres mantener el hub ultrafiable en un equipo de bajo consumo y descargar la IA pesada a una máquina separada como un servidor con RTX 3090 usada.' },
          { q: '¿Importa el consumo eléctrico en un equipo 24/7?', a: 'Importa más que el precio de compra en hardware que nunca se apaga. Una Raspberry Pi consume unos vatios, un mini PC N100/N150 unos 10–15W, un mini PC Ryzen entre 15 y 35W según la carga, y una GPU discreta como una RTX 3090 puede consumir 250W o más bajo carga — un motivo para ejecutar un servidor con GPU potente como equipo aparte en lugar de siempre encendido.' },
          { q: '¿Sigue mereciendo la pena una Raspberry Pi con los precios de 2026?', a: 'Para Home Assistant solo, sí — sigue siendo la opción de menor consumo. Pero la escasez de DRAM de 2026 ha disparado el precio de la Pi 5 (~185–300 € según la RAM en agosto de 2026, frente a un precio original de 80–120 $), reduciendo la diferencia de precio con un mini PC N100/N150. Si podrías añadir cámaras o un LLM local dentro de un año, el mini PC suele ser la mejor compra ahora mismo.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — opciones concretas',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el stack completo',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — qué ejecuta el equipo de IA',
          '[Mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm) — entre clústeres: VRAM y detalle de hardware',
          '[Guía de compra de la mejor GPU para LLM local](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — opciones de GPU más a fondo si necesitas más VRAM que una RTX 3090',
          '[Guía de alquiler de GPU en la nube](/es/power-local-llm/cloud-gpu-rental-guide-2026) — alquilar tiempo de GPU en lugar de comprar, si solo la necesitas de vez en cuando',
          '[Las mejores baterías de solar de balcón 2026](/es/balcony-solar/best-balcony-solar-batteries-2026) — almacenamiento en batería para tu configuración local de energía doméstica',
          '[Los mejores hubs domóticos para control local (2027)](/es/smart-home/best-smart-home-hubs-2027) — hubs dedicados recomendados',
          '[NVIDIA Jetson Orin Nano para IA en el hogar inteligente: análisis (2027)](/es/smart-home/nvidia-jetson-orin-nano-smart-home-review) — hardware de IA local con GPU',
          '[Los mejores dongles USB Zigbee y Thread (2027)](/es/smart-home/best-zigbee-thread-dongles-2027) — hardware de radio para Zigbee y Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejor Hardware para un Smart Home Local + IA Local (2026)',
      description: 'Mejor hardware para un smart home local + IA en 2026: hub con mini PC Intel N100 o Raspberry Pi 5, acelerador Frigate (Intel iGPU/Hailo), almacenamiento SSD y salto a LLM.',
      url: 'https://www.promptquorum.com/es/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Hardware de Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué hardware recomienda Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Para equipos nuevos, Frigate recomienda una iGPU Intel vía OpenVINO, o un módulo Hailo-8L (~70–80 €) o Hailo-8 (~180–220 €) en formato M.2 para más capacidad de detección. El Google Coral TPU sigue funcionando, pero ya es heredado y ya no se recomienda para instalaciones nuevas.' } },
        { '@type': 'Question', name: '¿Puede una Raspberry Pi ejecutar también un LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Una Pi solo puede ejecutar modelos muy pequeños y lentamente. Maneja bien Home Assistant y la voz básica, pero para un asistente de LLM local con buena respuesta, un mini PC con iGPU o NPU capaz, o un equipo con RTX 3090 usada, es mejor.' } },
        { '@type': 'Question', name: '¿Cuánta RAM necesito?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant solo corre en un par de gigabytes. Para ejecutar un LLM local pequeño en el mismo equipo, ayuda más RAM; un mini PC con 32 GB de RAM mantiene un modelo Qwen3 8B o Llama 3.1 8B con buena respuesta. Ajusta la RAM al tamaño del modelo que planees ejecutar.' } },
        { '@type': 'Question', name: '¿Qué mini PC debería comprar?', acceptedAnswer: { '@type': 'Answer', text: 'Para HA más cámaras, un mini PC Intel N100/N150 acelera Frigate vía OpenVINO. Para HA más un LLM local, sube a un mini PC Ryzen con 32 GB de RAM. Consulta la guía de mejores mini PC para Home Assistant + IA local.' } },
        { '@type': 'Question', name: '¿Un equipo o dos?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini PC ejecuta Home Assistant más un LLM local pequeño juntos. Divide en dos si quieres el hub ultrafiable en un equipo de bajo consumo y la IA pesada en una máquina separada como un servidor con RTX 3090 usada.' } },
        { '@type': 'Question', name: '¿Importa el consumo eléctrico en un equipo 24/7?', acceptedAnswer: { '@type': 'Answer', text: 'Importa más que el precio de compra en hardware que nunca se apaga. Una Raspberry Pi consume unos vatios, un mini PC N100/N150 unos 10–15W, un mini PC Ryzen unos 15–35W, y una GPU discreta como una RTX 3090 puede consumir 250W o más bajo carga.' } },
        { '@type': 'Question', name: '¿Sigue mereciendo la pena una Raspberry Pi con los precios de 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Para Home Assistant solo, sí. Pero la escasez de DRAM de 2026 ha subido el precio de la Pi 5 a unos 185–300 € según la RAM, frente a un precio original de 80–120 $, reduciendo la diferencia con un mini PC N100/N150 — que es la mejor compra si podrías añadir cámaras o un LLM local dentro de un año.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-ko.webp',
    affiliateDisclosure: true,
    title: '로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어 (2026)',
    seoTitle: '로컬 스마트 홈 + AI를 위한 최고의 하드웨어 (2026)',
    intro:
      '로컬 스마트 홈에 최적인 하드웨어는 하나의 결정으로 정리됩니다. Intel N100/N150 미니 PC 또는 Raspberry Pi 5가 Home Assistant 허브를 실행하고, Intel 내장 GPU(OpenVINO) 또는 Hailo-8L M.2 모듈이 Frigate 카메라 감지를 가속하며, SSD 또는 NAS가 녹화 영상을 저장하고, 중고 RTX 3090 서버가 로컬 LLM을 실행하기 위한 상위 단계입니다. 이 가이드는 각 계층을 선택하고 2026년 현재 가격을 단계별로 제시하며, HA 단독과 HA+AI 중 무엇을 고를지 안내하여 두 번이 아니라 한 번에 제대로 구매하도록 돕습니다.',
    metaDescription:
      '2026년 로컬 스마트 홈 + AI 최고의 하드웨어: Intel N100 미니 PC 또는 Raspberry Pi 5 허브, Frigate 가속기(Intel iGPU/Hailo), SSD 스토리지, LLM 업그레이드 경로. 최신 가격 반영.',
    twitterDescription:
      '2026년 로컬 스마트 홈 하드웨어: Intel N100 미니 PC 또는 Pi 5 허브, Frigate 가속기(Intel iGPU/Hailo-8L), SSD 스토리지, 로컬 LLM용 중고 RTX 3090. 2026년 최신 가격.',
    readTime: '11분 분량',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant와 로컬 AI 실행을 위한 하드웨어를 선택하는 구매자',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'home assistant 로컬 AI 최고의 하드웨어',
      'home assistant 하드웨어',
      '미니 PC home assistant 로컬 LLM',
      'raspberry pi 대 미니 PC home assistant',
      '로컬 스마트 홈 서버',
    ],
    leadAnswerBlock:
      '**로컬 스마트 홈은 네 계층으로 구성됩니다. 허브(Intel N100/N150 미니 PC 또는 Raspberry Pi 5), Frigate 가속기(OpenVINO를 통한 Intel 내장 GPU 또는 Hailo-8L M.2 모듈), 스토리지(SSD, 카메라가 많다면 NAS), 그리고 로컬 LLM을 원한다면 중고 RTX 3090 같은 업그레이드 기기입니다.** Home Assistant만 사용한다면 Raspberry Pi로 충분합니다. 결정 요인은 카메라 감지와 로컬 AI를 추가할지 여부입니다. 목표가 이미 정해졌다면 [구성별로 구매해야 할 하드웨어](#quick-picks)로 바로 이동하십시오.',
    quickAnswerTop: {
      ko: {
        question: 'AI가 포함된 로컬 스마트 홈에 어떤 하드웨어가 필요합니까?',
        answer:
          '먼저 허브부터 시작하십시오. Intel N100/N150 미니 PC 또는 Raspberry Pi 5가 Home Assistant를 실행합니다. 카메라용으로 Frigate 가속기를 추가하십시오. OpenVINO를 통한 Intel 내장 GPU가 대부분의 구성을 처리하며, Hailo-8L 또는 Hailo-8 M.2 모듈이 감지 성능을 더합니다(Google Coral은 이제 레거시입니다). 녹화 영상은 SSD에 저장하고, 카메라가 많다면 NAS를 사용하십시오. 로컬 LLM을 원한다면 고성능 내장 GPU/NPU가 있는 미니 PC나 중고 RTX 3090 서버로 업그레이드하십시오. 1년 이내에 로컬 AI를 추가할 것 같다면, 나중에 교체할 Raspberry Pi 대신 지금 미니 PC를 구매하십시오.',
        bullets: [
          '허브: Intel N100/N150 미니 PC 또는 Raspberry Pi 5',
          'Frigate: Intel 내장 GPU(OpenVINO) 또는 Hailo-8L M.2 — Coral은 레거시',
          '스토리지: SSD, 카메라가 많다면 NAS',
          '로컬 LLM 업그레이드: 미니 PC 내장 GPU/NPU 또는 중고 RTX 3090',
          '1년 이내에 로컬 AI를 추가할 가능성이 있다면 지금 미니 PC를 구매하는 편이 낫습니다 — 나중에 Pi를 교체하는 것보다 저렴합니다',
          '먼저 결정하십시오: HA 단독인지 HA + 카메라 + 로컬 AI인지 — 이 선택이 한 번만 구매할지 두 번 구매할지를 결정합니다',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '어떤 하드웨어를 구매해야 할까?', anchor: 'quick-picks' },
      { label: '허브에 필요한 것', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: '미니 PC', anchor: 'mini-pc' },
      { label: 'Frigate 가속기', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: '전용 서버', anchor: 'server' },
      { label: '과소비하지 않기', anchor: 'dont-overspend' },
      { label: '전력 소비', anchor: 'power' },
      { label: '기기 하나 대 두 개?', anchor: 'one-or-two' },
      { label: 'HA 단독 대 HA + AI', anchor: 'picking' },
      { label: '전반적인 구매 권장 사항', anchor: 'what-id-buy' },
      { label: '완전한 구성 예시', anchor: 'stacks' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Intel N100/N150 미니 PC 또는 Raspberry Pi 5가 허브를 실행하고, Frigate용으로 Intel 내장 GPU나 Hailo-8L을 추가하며, 스토리지로 SSD나 NAS를, 로컬 LLM을 원한다면 중고 RTX 3090 서버를 더하십시오.' },
      { type: 'plain-terms', content: '허브 소프트웨어(Home Assistant)는 가볍고 Raspberry Pi 같은 소형 컴퓨터에서 실행됩니다. 카메라 감지(Frigate)는 가속기가 필요합니다. OpenVINO를 통한 Intel 그래픽 칩이나 Hailo M.2 모듈이 그 역할을 합니다. 로컬 언어 모델을 추가하려면 더 많은 성능이 필요하며, 이때 고성능 그래픽 칩을 갖춘 미니 PC나 RTX 3090 같은 중고 그래픽 카드가 필요합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          '허브: Intel N100/N150 미니 PC(약 $190–220) 또는 Raspberry Pi 5(2026년 8월 기준 약 $180–305, D램 공급 부족으로 급등)가 Home Assistant를 실행합니다',
          'Frigate: 대부분의 미니 PC에 내장된 Intel 내장 GPU(OpenVINO), Hailo-8L M.2 모듈(약 $70), 또는 Hailo-8 M.2(약 $170–200)가 카메라 감지를 가속합니다 — Google Coral은 이제 레거시이며 신규 구성에 대한 Frigate의 권장에서 제외되었습니다',
          '스토리지: 녹화 영상은 SSD, 카메라가 늘어나면(Synology DS225+ 약 $340, DS925+ 약 $640, UGREEN NASync 약 $650–730) NAS',
          '로컬 LLM 업그레이드: Ryzen 미니 PC(RAM 32GB, 약 $649) 또는 중고 RTX 3090 서버(2026년 8월 기준 약 $1,050–1,300 — 2024–2025년 수준보다 훨씬 높아졌습니다)',
          '구매 전에 HA 단독인지 HA + 카메라 + 로컬 AI인지 결정하십시오. 그 선택이 적합한 기기를 바꾸며, 나중에 Pi를 교체하기보다 지금 미니 PC를 구매하는 것이 더 낫습니다',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: '어떤 하드웨어를 구매해야 할까?',
        content:
          '**목표를 먼저 정하고 그에 맞는 기기를 고르십시오. 그 반대가 아닙니다.** 아래 표는 각 스마트 홈 목표를 이를 충족하는 하드웨어와 연결합니다 — 각 행은 페이지 하단의 더 자세한 추천으로 연결됩니다.',
        columns: ['목표', '구매할 것', '예상 가격 (2026년 8월)'],
        rows: [
          { '목표': 'Home Assistant만 사용', '구매할 것': '[Home Assistant Green 또는 Raspberry Pi 5](#raspberry-pi)', '예상 가격 (2026년 8월)': '$199 (Green) / $180–305 (Pi 5)' },
          { '목표': 'HA + Frigate 카메라', '구매할 것': '[Intel N100/N150 미니 PC](#mini-pc)', '예상 가격 (2026년 8월)': '약 $190–220' },
          { '목표': 'HA + 로컬 LLM', '구매할 것': '[Ryzen 미니 PC, RAM 32GB](#mini-pc)', '예상 가격 (2026년 8월)': '약 $649' },
          { '목표': 'HA + 더 큰 로컬 LLM', '구매할 것': '[중고 RTX 3090 서버](#server)', '예상 가격 (2026년 8월)': '약 $1,050–1,300 (GPU만)' },
        ],
        tableFormat: true,
        note: '가격은 2026년 8월 기준이며 변동됩니다 — 특히 GPU와 D램 가격은 올해 변동성이 컸습니다. 구매 전 링크된 매물의 실제 가격을 확인하십시오.',
        callouts: [
          { type: 'tip', text: '로컬 AI를 원할지 아직 확실하지 않습니까? 비싼 기기를 사기 전에 [과소비하지 않기](#dont-overspend)를 참조하십시오.' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: '허브에 필요한 것',
        content:
          '**Home Assistant 자체는 가볍고 평범한 하드웨어에서 실행됩니다. 높은 요구 사항은 Frigate 카메라 감지와 로컬 LLM에서 옵니다.** 허브만이 아니라 추가할 것을 고려하여 기기 크기를 결정하십시오.',
        items: [
          '허브는 장치 제어 및 자동화에 거의 연산이 필요하지 않습니다.',
          'Frigate 객체 감지에는 가속기가 필요합니다. OpenVINO를 통한 Intel 내장 GPU가 대부분의 구성을 처리하며, Hailo-8L 또는 Hailo-8 M.2 모듈이 성능을 더합니다. Google Coral USB/M.2 TPU는 여전히 작동하지만 이제 레거시이며 Frigate는 신규 구성에 더 이상 권장하지 않습니다.',
          '대형 Whisper 모델과 로컬 LLM 추론이 가장 까다로운 워크로드입니다. 이에 맞춰 RAM과 GPU/NPU를 계획하십시오.',
          '카메라 녹화는 SSD에 저장하고, 카메라 여러 대를 상시 운영하게 되면 NAS로 옮기십시오.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi 5는 일반적인 스마트 홈 용도로 Home Assistant를 실행하는 가장 저전력인 방법이지만, 2026년 D램 공급 부족으로 보드 가격이 크게 올라 8GB 보드는 약 $180–220, 16GB 보드는 약 $280–305로, 원래 출시가 약 $80/$120보다 훨씬 높아졌으며 분석가들은 2027년 하반기 이전에는 정상화되지 않을 것으로 보고 있습니다.** 여전히 LLM 추론과 대형 Whisper 모델에는 어려움을 겪습니다.',
        items: [
          '장치 제어, 자동화, 소형 로컬 음성 설정에 탁월합니다.',
          'Pi에서의 LLM 추론은 매우 소형이고 느린 모델에만 제한됩니다. Frigate 감지를 원한다면 Hailo-8L M.2 HAT와 함께 사용하십시오.',
          '저전력으로 기본 기능만 원하고 1년 이내에 로컬 LLM을 추가하지 않을 것이 확실하다면 Pi 5를 선택하십시오. 1년 이내에 로컬 AI를 원할 것 같다면 Pi를 건너뛰고 지금 미니 PC를 구매하십시오 — 비용은 조금 더 들지만 나중에 두 번 구매하는 것을 막아줍니다.',
          '바로 사용 가능한 어플라이언스를 원한다면 Home Assistant Green이 즉시 사용 가능한 상태로 출시됩니다(2026년 기준 약 $199, 출시가 $99에서 상승). Home Assistant Yellow는 2025년 10월에 단종되었습니다 — 이제 Green이 유일한 공식 자사 허브입니다.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 가격 확인 →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '$180–305' },
          { label: 'Home Assistant Green 가격 확인 →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '$199' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: '미니 PC (LLM을 위한 여유 공간)',
        content:
          '**미니 PC는 Home Assistant와 로컬 AI를 하나의 기기에서 실행하는 최고의 선택입니다. 충분한 RAM과 고성능 내장 GPU 또는 NPU를 갖추고 있습니다.** 성능, 크기, 비용의 균형이 잡혀 있으며, 두 가지 작업을 한 기기로 처리하려면 이 항목에 더 투자할 가치가 있습니다.',
        items: [
          '최고의 예산형 선택: 저전력 Intel N100/N150 미니 PC는 Home Assistant를 실행하고 Intel 내장 GPU(OpenVINO)로 Frigate를 가속합니다 — 허브+카메라 기기의 실용적인 기본 선택입니다. Beelink EQ14(Intel N150, RAM 16GB)는 2026년 8월 기준 약 $190–220입니다 — 24시간 운영과 낮은 전력 소비에 적합하지만 로컬 LLM에는 성능이 부족합니다.',
          '로컬 AI를 위한 최고의 선택: 같은 기기에서 로컬 LLM을 원한다면 RAM 32GB의 Ryzen 미니 PC로 업그레이드하십시오. Beelink SER8(Ryzen 7 8845HS)은 2026년 8월 기준 약 $649이며 Ollama로 Qwen3 8B나 Llama 3.1 8B 모델을 실용적인 속도로 실행하는 동시에 Home Assistant와 Frigate도 함께 처리합니다. 낮은 지연 시간을 위해 RAM과 고성능 내장 GPU 또는 NPU를 우선시하십시오.',
          'Home Assistant와 로컬 AI를 한 기기로 함께 구매한다면 N150 대비 Ryzen 미니 PC의 추가 비용은 그만한 가치가 있습니다 — 실용적인 속도로 실제로 LLM을 실행할 수 있는 것은 둘 중 이것뿐입니다.',
          '구체적인 선택은 [Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai)와 크로스 클러스터 [로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm)를 참조하십시오.',
        ],
        affiliateLinks: [
          { label: 'EQ14 가격 확인 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '$190–220' },
          { label: 'SER8 가격 확인 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: '약 $649' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: '보안 카메라를 운영하십니까? Frigate 가속기를 선택하십시오',
        content:
          '**카메라 대수와 필요한 감지 여유가 가속기를 결정하며, 이는 허브를 어떤 기기에서 실행하는지와는 별개입니다.** Frigate는 더 이상 신규 구성에 Google Coral을 권장하지 않습니다 — 이제 호스트에 내장된 Intel iGPU와 함께 신규 사용자에게 Hailo를 안내합니다.',
        items: [
          '1–4대: N100/N150 미니 PC에 내장된 Intel iGPU를 OpenVINO로 실행하면 추가 하드웨어 비용 없이 대부분의 가정용 구성을 처리합니다.',
          '4–10대이거나 Intel이 아닌 하드웨어에서 감지 여유를 더 원한다면: Hailo-8L M.2 모듈(2026년 8월 기준 약 $70)이 Frigate의 현재 저전력 권장 사항입니다 — 과거의 Coral처럼 공식적으로 일급 지원되는 추가 카드 역할을 합니다.',
          '10대 이상이거나 더 무거운 부가 처리(감지 외에 얼굴/번호판 인식)가 필요하다면: Hailo-8 M.2 모듈(약 $170–200)이 훨씬 더 높은 처리량을 제공합니다.',
          '이미 Coral을 보유하고 계십니까? 여전히 작동합니다 — 이는 신규 구성 시 무엇을 사야 하는지에 관한 것일 뿐, 정상 작동 중인 Coral 구성을 교체해야 할 이유는 아닙니다.',
        ],
        affiliateLinks: [
          { label: 'Hailo-8L 가격 확인 →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: '약 $70' },
          { label: 'Hailo-8 가격 확인 →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: '약 $170–200' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**NAS는 충분한 CPU와 RAM이 있다면 스토리지 및 Frigate 녹화와 함께 컨테이너에서 Home Assistant를 호스팅할 수 있습니다 — 이미 보유하고 있다면 좋은 선택이지만, 첫 NAS를 구매하는 이유가 되어서는 안 됩니다.** 로컬 LLM을 실행하기 위한 목적만으로는 NAS를 구매하지 마십시오 — 전용 미니 PC나 GPU 기기가 같은 비용으로 더 나은 AI 플랫폼입니다.',
        items: [
          '2–4대 / 가벼운 스토리지: Synology DS225+(2026년 8월 기준 약 $340)는 소수 카메라를 위한 컨테이너화된 Home Assistant와 Frigate 녹화를 처리합니다.',
          '4–10대 / 더 많은 여유가 필요: Synology DS925+(약 $640)는 더 많은 애드온과 카메라를 위한 CPU/RAM 여유를 제공합니다.',
          '스토리지와 로컬 AI를 하나의 기기로: UGREEN NASync 시리즈(DXP4800 Plus급, 약 $650–730)는 내장 로컬 LLM 옵션과 더 새로운 하드웨어(DDR5, 추가 카드 없는 10GbE)를 DS925+와 비슷한 가격에 제공합니다.',
          'NAS에서의 LLM 추론은 여전히 하드웨어에 크게 좌우됩니다 — 대부분의 NAS는 성능 좋은 개별 GPU가 없으므로, 내장 LLM 옵션은 편의 기능으로 취급하고 진짜 대형 모델을 원한다면 아래 RTX 3090 등급의 대체재로 여기지 마십시오.',
        ],
        affiliateLinks: [
          { label: 'DS225+ 가격 확인 →', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: '약 $340' },
          { label: 'DS925+ 가격 확인 →', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: '약 $640' },
          { label: 'UGREEN NASync 가격 확인 →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: '약 $650–730' },
        ],
      },
      server: {
        id: 'server',
        title: '전용 서버 (LLM 업그레이드)',
        content:
          '**개별 GPU를 갖춘 전용 서버는 많은 카메라와 함께 더 큰 로컬 LLM을 실행하기 위한 업그레이드 경로입니다.** 더 높은 비용과 전력으로 가장 많은 여유를 제공합니다 — 2026년에는 GPU 가격이 크게 변동했으므로 아래 수치는 고정값이 아니라 특정 시점의 스냅샷으로 보십시오.',
        items: [
          '중고 RTX 3090(VRAM 24GB)은 로컬 LLM용으로 달러당 VRAM 효율이 가장 좋은 옵션 중 하나이지만, 중고 가격이 2026년 동안 크게 올라 8월 기준 약 $1,050–1,300입니다 — 2024–2025년의 $600–800보다 훨씬 높습니다. 양자화 방식, 컨텍스트 크기, 오프로딩에 따라 Q4 양자화로 최대 약 70B 모델까지 가능할 수 있습니다. 이는 모든 70B 모델을 보장하는 것이 아니라 대략적인 성능 범위로 여기십시오.',
          '중고 RTX 3060(12GB)은 개별 GPU 기기의 예산형 대안이며, 2026년 8월 기준 중고 가격은 약 $220–290입니다 — RTX 3090만큼의 VRAM 여유나 가격은 아니지만 7B–13B 모델을 무난하게 처리합니다.',
          '카메라가 많거나, 대형 LLM을 실행하거나, 여러 사용자가 있는 경우에 가장 적합합니다. 미니 PC보다 전력 소비와 비용이 높습니다 — 이 등급에 투자하기 전에 아래 전력 소비 섹션을 참조하십시오.',
          '기본적인 스마트 홈에는 과도합니다. 대용량 로컬 AI 사용에 예약하고, 안정성을 위해 Home Assistant 허브는 별도의 저전력 기기에 유지하십시오(아래 "기기 하나 대 두 개?" 참조).',
        ],
        affiliateLinks: [
          { label: 'RTX 3090 중고 시세 확인 →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: '약 $1,050–1,300' },
          { label: 'RTX 3060 중고 시세 확인 →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: '약 $220–290' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-ko.svg',
        imageCaption: '하드웨어 등급별 로컬 LLM 용량: Raspberry Pi 5는 아주 작은 모델만 실행하고, Intel N100/N150 미니 PC는 소형 모델을 처리하며, Ryzen 미니 PC(RAM 32GB)는 7B–8B 모델을 실행하고, 중고 RTX 3090(VRAM 24GB)은 구성에 따라 Q4 양자화 기준 최대 약 70B까지 확장됩니다.',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: 'Home Assistant 서버에 과소비하지 마십시오',
        content:
          '**사용 목적보다 과한 하드웨어를 구매하는 것이 이 카테고리에서 가장 흔한 낭비입니다 — 실제로 실행할 것에 맞춰 기기를 선택하십시오.**',
        items: [
          'Home Assistant만 사용합니까? RTX GPU는 필요 없고, 미니 PC도 아마 필요 없습니다 — Raspberry Pi 5나 Home Assistant Green이면 충분합니다.',
          'Home Assistant와 Frigate 카메라를 함께 사용합니까? 비싼 워크스테이션은 필요 없습니다 — 내장 iGPU를 갖춘 Intel N100/N150 미니 PC로 대부분의 가정용 카메라 대수를 충분히 처리합니다.',
          'Home Assistant와 소형 로컬 LLM을 함께 사용합니까? 32GB Ryzen 미니 PC로 8B급 모델에는 충분합니다 — 아직 개별 GPU는 필요 없습니다.',
          '대형 로컬 LLM(32B 이상)을 원하십니까? 그때야 개별 GPU(예: 중고 RTX 3090)가 실제로 비용만큼 값어치를 합니다.',
        ],
      },
      power: {
        id: 'power',
        title: '24시간 운영 기기에서는 전력 소비가 중요합니다',
        content:
          '**이 하드웨어는 계속 켜져 있으므로, 전원을 끄지 않는 기기의 경우 1년간 전기 요금이 구매 가격만큼 중요할 수 있습니다.** 대략적으로 일반적인 소비 순서는 다음과 같습니다.',
        columns: ['하드웨어', '일반적인 역할', '전력 소비', '적합한 용도'],
        rows: [
          { '하드웨어': 'Raspberry Pi 5', '일반적인 역할': '허브만', '전력 소비': '매우 낮음(몇 와트)', '적합한 용도': 'Home Assistant' },
          { '하드웨어': 'Intel N100/N150 미니 PC', '일반적인 역할': '허브 + Frigate', '전력 소비': '낮음(일반적으로 약 10–15W)', '적합한 용도': '24시간 허브 + 카메라' },
          { '하드웨어': 'Ryzen 미니 PC(32GB)', '일반적인 역할': '허브 + Frigate + 소형 LLM', '전력 소비': '중간(일반적으로 약 15–35W, LLM 부하 시 더 높음)', '적합한 용도': '단일 기기 로컬 AI' },
          { '하드웨어': 'RTX 3090 서버', '일반적인 역할': '고부하 로컬 AI', '전력 소비': '높음(GPU만으로 부하 시 250W 이상)', '적합한 용도': '대형 모델, 24시간 유휴에는 부적합' },
        ],
        tableFormat: true,
        note: '24시간 운영되는 서버의 경우 전력 소비가 초기 구매 가격보다 더 중요할 수 있습니다 — 250W GPU가 계속 작동하면 10W 미니 PC와는 비교할 수 없을 정도로 전기 요금에 영향을 줍니다. 이것이 고성능 GPU 서버를 항상 켜두지 않고 의도적으로 운영되는 별도 기기로 유지해야 하는 이유 중 하나입니다(아래 "기기 하나 대 두 개?" 참조).',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: '기기 하나 대 두 개?',
        content:
          '**기기 하나가 더 간단하고 저렴하며, 기기 두 개는 더 무거운 AI 워크로드로부터 Home Assistant의 안정성을 보호합니다.** 어느 쪽이 맞는지는 가동 시간과 단순함 중 무엇을 더 중시하는지에 달려 있습니다.',
        items: [
          '기기 하나(단일 미니 PC): 가장 간단하고 저렴합니다 — Ryzen 미니 PC 하나로 Home Assistant, Frigate, 소형 로컬 LLM을 함께 실행합니다. 대부분의 가정용 구성에 적합한 선택입니다.',
          '기기 두 개(저전력 허브와 별도의 AI 기기): 재부팅이 거의 필요 없는 저전력 기기에서 Home Assistant를 매우 안정적으로 유지하는 동시에, 더 무거운 AI 작업(예: 중고 RTX 3090 서버)을 독립적으로 실행하고 재시작할 수 있어 자동화가 함께 중단되지 않습니다.',
          '잠금장치, 경보, 난방 등 안전과 관련된 무언가를 Home Assistant로 운영하고, 재부팅·업데이트·실험을 할 수 있는 GPU 기기로부터 이 계층을 분리하고 싶다면 두 기기를 선택하십시오.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'HA 단독 대 HA + AI 선택',
        content:
          '**HA 단독에는 Pi, HA + 로컬 AI에는 미니 PC를 선택하십시오. 이 단일 결정이 올바른 하드웨어를 결정합니다.** 워크로드에 맞게 기기를 선택하십시오. 그 반대가 아닙니다.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-ko.svg',
        imageCaption: '스마트 홈 하드웨어 결정 트리: Frigate 카메라 추가 여부와 로컬 LLM 추가 여부에 따라 Raspberry Pi 5, Intel N100/N150 미니 PC, Ryzen 미니 PC(RAM 32GB), RTX 3090 서버(VRAM 24GB) 중 하나로 이어집니다.',
        columns: ['하드웨어', '상대적 가격', 'HA 단독', '로컬 LLM 실행 가능', 'Frigate 가속'],
        rows: [
          { '하드웨어': 'Raspberry Pi 5', '상대적 가격': '저가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '매우 소형만, 느림', 'Frigate 가속': 'Hailo-8L M.2 HAT' },
          { '하드웨어': 'Intel N100/N150 미니 PC', '상대적 가격': '중가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '소형 모델', 'Frigate 가속': 'Intel 내장 GPU(OpenVINO)' },
          { '하드웨어': 'Ryzen 미니 PC', '상대적 가격': '중가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '가능 (7B–8B)', 'Frigate 가속': '내장 GPU 또는 Hailo M.2' },
          { '하드웨어': 'NAS', '상대적 가격': '중~고가', 'HA 단독': '가능 (컨테이너)', '로컬 LLM 실행 가능': '하드웨어에 따라 다름', 'Frigate 가속': '모델에 따라 다름' },
          { '하드웨어': '서버 + 중고 RTX 3090', '상대적 가격': '고가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '가능 (최대 약 70B, 양자화에 따라 다름)', 'Frigate 가속': '개별 GPU' },
        ],
        note: '등급별 전력 소비는 위의 [전력 소비](#power)를, 모든 것을 한 기기에서 실행할지 여부는 [기기 하나 대 두 개?](#one-or-two)를 참조하십시오.',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: '2026년 전반적인 구매 권장 사항',
        content:
          '**오늘 기기 하나를 선택하려는데 어느 등급이 맞는지 확신이 서지 않는다면, 위의 트레이드오프를 바탕으로 한 합리적인 기본값은 다음과 같습니다 — 실제 필요는 다른 곳을 가리킬 수 있으며, 아래 추천 중 어느 것도 PromptQuorum이 테스트하거나 검토하지 않았습니다.**',
        items: [
          '일반적인 로컬 스마트 홈(Home Assistant와 소수의 Zigbee/Matter 기기)의 경우: Intel N150 미니 PC가 합리적인 기본 선택입니다 — 나중에 카메라를 추가해도 Frigate를 처리합니다.',
          'Home Assistant와 카메라, 소형 로컬 AI 어시스턴트를 함께 사용하려면: RAM 32GB의 Ryzen 미니 PC가 합리적인 단일 기기 선택입니다 — 실용적인 속도로 8B급 LLM을 실제로 실행하는 가장 저렴한 기기입니다.',
          '본격적인 로컬 AI(32B급 이상 모델)를 원한다면: Home Assistant 허브와 분리된 별도의 RTX 3090 서버가 현재 중고 GPU 가격을 고려할 때 합리적인 업그레이드입니다.',
          'AI를 처음부터 우선시하는 신규 구축은 2026년 Pi 가격과 LLM 한계를 고려하면 일반적으로 Raspberry Pi와 궁합이 덜 맞습니다 — 미니 PC가 대체로 가격은 비슷하면서 훨씬 나은 AI 플랫폼입니다.',
        ],
      },
      stacks: {
        id: 'stacks',
        title: '완전한 로컬 스마트 홈 구성 예시',
        content:
          '**대부분의 구매자는 하나 이상의 제품이 필요합니다 — 최소한 허브, Frigate 가속기, 스토리지가 필요하며, 로컬 LLM 추론을 원한다면 AI 기기도 추가로 필요합니다.** 다음 세 가지 구성은 시나리오별로 위의 선택을 조합한 것입니다. 각 제품은 이 페이지 앞부분의 전체 추천으로 다시 연결됩니다.',
        columns: ['구성', '허브', 'Frigate 가속기', 'AI', '예상 총액 (2026년 8월)'],
        rows: [
          { '구성': '스타터 (HA만)', '허브': '[Home Assistant Green 또는 Pi 5](#raspberry-pi)', 'Frigate 가속기': '—', 'AI': '—', '예상 총액 (2026년 8월)': '약 $199–305' },
          { '구성': 'HA + 카메라', '허브': '[N150 미니 PC](#mini-pc)', 'Frigate 가속기': '[Intel iGPU, 여유가 더 필요하면 Hailo-8L](#frigate-accelerator)', 'AI': '—', '예상 총액 (2026년 8월)': '약 $190–290' },
          { '구성': 'HA + 카메라 + 로컬 AI', '허브': '[Ryzen 미니 PC, 32GB](#mini-pc)', 'Frigate 가속기': '내장 iGPU, 카메라가 많으면 [Hailo-8L](#frigate-accelerator)', 'AI': '같은 기기에서 실행 (8B급 모델)', '예상 총액 (2026년 8월)': '약 $649–720' },
          { '구성': 'HA + 카메라 + 대형 로컬 AI', '허브': '[N150 미니 PC (안정성을 위해 분리)](#mini-pc)', 'Frigate 가속기': '[Hailo-8](#frigate-accelerator)', 'AI': '[중고 RTX 3090 서버, 별도 운영](#server)', '예상 총액 (2026년 8월)': '약 $1,400–1,700' },
        ],
        tableFormat: true,
        note: '마지막 구성은 Home Assistant 허브를 자체 저전력 기기에 유지하고 RTX 3090을 별도 기기로 운영합니다 — 이유는 [기기 하나 대 두 개?](#one-or-two)를 참조하십시오.',
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Frigate는 어떤 하드웨어를 권장합니까?', a: '신규 구성에는 OpenVINO를 통한 Intel 내장 GPU, 또는 감지 성능을 더 원한다면 Hailo-8L(약 $70, 보급형)이나 Hailo-8(약 $170–200, 고성능) M.2 모듈을 Frigate가 권장합니다. Google Coral USB/M.2 TPU는 여전히 작동하지만 이제 레거시이며, 매우 저전력 하드웨어를 제외하고는 신규 설치에 더 이상 권장되지 않습니다.' },
          { q: 'Raspberry Pi도 로컬 LLM을 실행할 수 있습니까?', a: 'Pi는 매우 소형 모델만 느리게 실행할 수 있으므로 반응이 빠른 로컬 LLM 어시스턴트에는 이상적이지 않습니다. Home Assistant와 기본 음성은 잘 처리하지만 로컬 AI에는 고성능 내장 GPU나 NPU가 있는 미니 PC, 또는 중고 RTX 3090 서버가 더 나은 선택입니다.' },
          { q: 'RAM이 얼마나 필요합니까?', a: 'Home Assistant 단독은 몇 GB면 충분합니다. 같은 기기에서 소형 로컬 LLM과 다른 AI 서비스를 실행하려면 더 많은 RAM이 도움이 됩니다. RAM 32GB의 미니 PC는 Qwen3 8B나 Llama 3.1 8B 모델을 원활하게 유지합니다. 실행할 모델 크기에 맞게 RAM을 선택하십시오.' },
          { q: '어떤 미니 PC를 구매해야 합니까?', a: 'HA + 카메라라면 Intel N100/N150 미니 PC가 OpenVINO로 Frigate를 가속합니다. HA + 로컬 LLM이라면 RAM 32GB의 Ryzen 미니 PC로 업그레이드하십시오. 구체적인 선택은 Home Assistant + 로컬 AI를 위한 최고의 미니 PC 가이드를 참조하십시오.' },
          { q: '기기 하나로 충분합니까, 두 개가 필요합니까?', a: '미니 PC 하나로 Home Assistant와 소형 로컬 LLM을 함께 실행하는 것이 가장 간단합니다. 안정성을 위해 허브를 저전력 기기에서 매우 안정적으로 유지하고 무거운 AI를 중고 RTX 3090 서버 같은 별도 기기에 오프로드하려면 두 기기로 나누십시오.' },
          { q: '24시간 운영 기기에서 전력 소비가 중요합니까?', a: '전원을 끄지 않는 하드웨어의 경우 전력 소비가 구매 가격보다 중요할 수 있습니다. Raspberry Pi는 몇 와트, N100/N150 미니 PC는 약 10–15W, Ryzen 미니 PC는 부하에 따라 약 15–35W, RTX 3090 같은 개별 GPU는 부하 시 250W 이상을 소비할 수 있습니다 — 이것이 고성능 GPU 서버를 항상 켜두지 않고 별도 기기로 운영해야 하는 이유 중 하나입니다.' },
          { q: '2026년 가격을 고려할 때 Raspberry Pi는 여전히 가치가 있습니까?', a: 'Home Assistant만 사용한다면 그렇습니다 — 여전히 가장 저전력인 선택지입니다. 하지만 2026년 D램 공급 부족으로 Pi 5 가격이 크게 올라(2026년 8월 기준 RAM에 따라 약 $180–305, 원래는 $80–120) Intel N100/N150 미니 PC와의 가격 차이가 줄어들었습니다. 1년 이내에 카메라나 로컬 LLM을 추가할 가능성이 있다면 대체로 지금은 미니 PC가 더 나은 선택입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — 구체적인 선택',
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 전체 스택',
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — AI 기기가 실행하는 것',
          '[로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm) — 크로스 클러스터: VRAM 및 하드웨어 심층 정보',
          '[로컬 LLM을 위한 최고의 GPU 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 3090보다 더 많은 VRAM이 필요하다면 더 심층적인 GPU 선택',
          '[클라우드 GPU 대여 가이드](/ko/power-local-llm/cloud-gpu-rental-guide-2026) — 가끔만 필요하다면 구매 대신 GPU 시간을 대여',
          '[2026 최고의 발코니 태양광 배터리](/ko/balcony-solar/best-balcony-solar-batteries-2026) — 로컬 홈 에너지 설정을 위한 배터리 저장장치',
          '[로컬 제어를 위한 최고의 스마트홈 허브 (2027년)](/ko/smart-home/best-smart-home-hubs-2027) — 전용 허브 추천',
          '[스마트홈 AI용 NVIDIA Jetson Orin Nano 리뷰 (2027)](/ko/smart-home/nvidia-jetson-orin-nano-smart-home-review) — GPU 기반 로컬 AI 하드웨어',
          '[최고의 Zigbee 및 Thread USB 동글 (2027)](/ko/smart-home/best-zigbee-thread-dongles-2027) — Zigbee/Thread 무선 하드웨어',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어 (2026)',
      description: '2026년 로컬 스마트 홈 + AI 최고의 하드웨어: Intel N100 미니 PC 또는 Raspberry Pi 5 허브, Frigate 가속기(Intel iGPU/Hailo), SSD 스토리지, LLM 업그레이드 경로.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Home Assistant 하드웨어' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: '미니 PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: '로컬 LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate는 어떤 하드웨어를 권장합니까?', acceptedAnswer: { '@type': 'Answer', text: '신규 구성에는 OpenVINO를 통한 Intel 내장 GPU, 또는 감지 성능을 더 원한다면 Hailo-8L(약 $70)이나 Hailo-8(약 $170–200) M.2 모듈을 Frigate가 권장합니다. Google Coral TPU는 여전히 작동하지만 이제 레거시이며 신규 설치에는 더 이상 권장되지 않습니다.' } },
        { '@type': 'Question', name: 'Raspberry Pi도 로컬 LLM을 실행할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Pi는 매우 소형 모델만 느리게 실행할 수 있습니다. Home Assistant와 기본 음성은 잘 처리하지만 반응이 빠른 로컬 LLM 어시스턴트에는 고성능 내장 GPU나 NPU가 있는 미니 PC, 또는 중고 RTX 3090 서버가 더 적합합니다.' } },
        { '@type': 'Question', name: 'RAM이 얼마나 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant 단독은 몇 GB면 충분합니다. 같은 기기에서 소형 로컬 LLM을 실행하려면 더 많은 RAM이 도움이 됩니다. RAM 32GB의 미니 PC는 Qwen3 8B나 Llama 3.1 8B 모델을 원활하게 유지합니다. 실행할 모델 크기에 맞게 RAM을 선택하십시오.' } },
        { '@type': 'Question', name: '어떤 미니 PC를 구매해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: 'HA + 카메라라면 Intel N100/N150 미니 PC가 OpenVINO로 Frigate를 가속합니다. HA + 로컬 LLM이라면 RAM 32GB의 Ryzen 미니 PC로 업그레이드하십시오. Home Assistant + 로컬 AI를 위한 최고의 미니 PC 가이드를 참조하십시오.' } },
        { '@type': 'Question', name: '기기 하나로 충분합니까, 두 개가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '미니 PC 하나로 Home Assistant와 소형 로컬 LLM을 함께 실행합니다. 허브를 저전력 기기에서 매우 안정적으로 유지하고 무거운 AI를 중고 RTX 3090 서버 같은 별도 기기에 오프로드하려면 두 기기로 나누십시오.' } },
        { '@type': 'Question', name: '24시간 운영 기기에서 전력 소비가 중요합니까?', acceptedAnswer: { '@type': 'Answer', text: '전원을 끄지 않는 하드웨어의 경우 전력 소비가 구매 가격보다 중요할 수 있습니다. Raspberry Pi는 몇 와트, N100/N150 미니 PC는 약 10–15W, Ryzen 미니 PC는 약 15–35W, RTX 3090 같은 개별 GPU는 부하 시 250W 이상을 소비할 수 있습니다.' } },
        { '@type': 'Question', name: '2026년 가격을 고려할 때 Raspberry Pi는 여전히 가치가 있습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant만 사용한다면 그렇습니다. 하지만 2026년 D램 공급 부족으로 Pi 5 가격이 RAM에 따라 약 $180–305로 올랐으며, 이는 원래의 $80–120보다 높아 Intel N100/N150 미니 PC와의 가격 차이가 줄어들었습니다 — 1년 이내에 카메라나 로컬 LLM을 추가할 가능성이 있다면 미니 PC가 더 나은 선택인 경우가 많습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-fr.webp',
    affiliateDisclosure: true,
    title: 'Meilleur Matériel pour une Maison Connectée Locale + IA Locale (2026)',
    seoTitle: 'Meilleur Matériel : Maison Connectée Locale + IA (2026)',
    intro:
      'Le meilleur matériel pour une maison connectée locale suit une seule logique : un mini-PC Intel N100/N150 ou une Raspberry Pi 5 fait tourner le hub Home Assistant, une iGPU Intel (OpenVINO) ou un module Hailo-8L M.2 accélère la détection de caméras Frigate, un SSD ou un NAS stocke les enregistrements, et un boîtier RTX 3090 d\'occasion constitue la montée en gamme pour un LLM local. Ce guide détaille chaque couche, avec les prix actualisés pour 2026, et vous aide à choisir entre HA seul et HA plus IA pour n\'acheter qu\'une fois, pas deux.',
    metaDescription:
      'Meilleur matériel maison connectée locale + IA 2026 : mini-PC Intel N100 ou Raspberry Pi 5 comme hub, accélérateur Frigate (iGPU Intel/Hailo), stockage SSD, montée en gamme LLM. Prix actualisés.',
    twitterDescription:
      'Matériel pour une maison connectée locale en 2026 : mini-PC Intel N100 ou Pi 5 comme hub, accélérateur Frigate (iGPU Intel/Hailo-8L), stockage SSD, RTX 3090 d\'occasion pour un LLM local. Prix actualisés 2026.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs choisissant du matériel pour Home Assistant et l\'IA locale',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'meilleur matériel home assistant ia locale',
      'home assistant matériel',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'serveur maison connectée locale',
    ],
    leadAnswerBlock:
      '**Construisez une maison connectée locale en quatre couches : le hub (mini-PC Intel N100/N150 ou Raspberry Pi 5), un accélérateur Frigate (iGPU Intel via OpenVINO ou module Hailo-8L M.2), le stockage (un SSD, ou un NAS pour de nombreuses caméras) et — si vous voulez un LLM local — un boîtier de montée en gamme comme une RTX 3090 d\'occasion.** Pour Home Assistant seul, une Raspberry Pi suffit ; le facteur décisif est l\'ajout de la détection de caméras et de l\'IA locale. Vous connaissez déjà votre objectif ? Allez directement à [quel matériel acheter pour chaque configuration](#quick-picks).',
    quickAnswerTop: {
      fr: {
        question: 'Quel matériel pour une maison connectée locale avec IA ?',
        answer:
          'Commencez par le hub : un mini-PC Intel N100/N150 ou une Raspberry Pi 5 fait tourner Home Assistant. Ajoutez un accélérateur Frigate pour les caméras — une iGPU Intel via OpenVINO couvre la plupart des configurations, et un module Hailo-8L ou Hailo-8 M.2 augmente la capacité de détection (le Google Coral est désormais obsolète). Stockez les enregistrements sur un SSD, ou un NAS pour de nombreuses caméras. Pour un LLM local, passez à un mini-PC avec une iGPU/NPU capable ou un boîtier RTX 3090 d\'occasion. Si vous pensez ajouter de l\'IA locale dans l\'année, achetez le mini-PC maintenant plutôt qu\'une Raspberry Pi que vous devrez remplacer plus tard.',
        bullets: [
          'Hub : mini-PC Intel N100/N150 ou Raspberry Pi 5',
          'Frigate : iGPU Intel (OpenVINO) ou Hailo-8L M.2 — le Coral est obsolète',
          'Stockage : SSD, ou un NAS pour de nombreuses caméras',
          'Montée en gamme LLM local : iGPU/NPU du mini-PC ou RTX 3090 d\'occasion',
          'Si vous pourriez ajouter de l\'IA locale dans l\'année, achetez le mini-PC dès maintenant — moins cher que remplacer une Raspberry Pi plus tard',
          'Décidez d\'abord : HA seul ou HA + caméras + IA locale — cela détermine si vous achetez une fois ou deux',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Quel matériel acheter ?', anchor: 'quick-picks' },
      { label: 'Ce que le hub nécessite', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini-PC', anchor: 'mini-pc' },
      { label: 'Accélérateur Frigate', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Serveur dédié', anchor: 'server' },
      { label: 'Ne dépensez pas trop', anchor: 'dont-overspend' },
      { label: 'Consommation électrique', anchor: 'power' },
      { label: 'Une machine ou deux ?', anchor: 'one-or-two' },
      { label: 'HA-seul vs HA + IA', anchor: 'picking' },
      { label: 'Une recommandation d\'achat générale', anchor: 'what-id-buy' },
      { label: 'Configurations complètes', anchor: 'stacks' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un mini-PC Intel N100/N150 ou une Raspberry Pi 5 fait tourner le hub ; ajoutez une iGPU Intel ou un Hailo-8L pour Frigate, un SSD ou un NAS pour le stockage, et un boîtier RTX 3090 d\'occasion si vous voulez un LLM local.' },
      { type: 'plain-terms', content: 'Le logiciel du hub (Home Assistant) est léger et tourne sur un petit ordinateur comme une Raspberry Pi. La détection de caméras (Frigate) a besoin d\'un accélérateur — une puce graphique Intel via OpenVINO, ou un module Hailo M.2. Ajouter un modèle de langage local demande encore plus de puissance, et c\'est là qu\'un mini-PC avec une puce graphique capable, ou une carte graphique d\'occasion comme une RTX 3090, entre en jeu.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Hub : un mini-PC Intel N100/N150 (environ 230–280 €) ou une Raspberry Pi 5 (environ 185–300 € en août 2026, en forte hausse à cause d\'une pénurie de mémoire DRAM) fait tourner Home Assistant',
          'Frigate : une iGPU Intel (OpenVINO, intégrée à la plupart des mini-PC), un module Hailo-8L M.2 (environ 70–80 €) ou un Hailo-8 M.2 (environ 180–220 €) accélère la détection de caméras — le Google Coral est désormais obsolète et n\'est plus la recommandation de Frigate pour les nouvelles installations',
          'Stockage : un SSD pour les enregistrements, ou un NAS (Synology DS225+ environ 380–420 €, DS925+ environ 680–750 €, UGREEN NASync environ 700–800 €) dès que vous exploitez plusieurs caméras',
          'Montée en gamme LLM local : un mini-PC Ryzen (32 Go de RAM, environ 600–650 €) ou un boîtier RTX 3090 d\'occasion (environ 1 400–1 750 € en août 2026 — les prix ont bien plus grimpé qu\'en 2024–2025)',
          'Décidez HA-seul vs HA + caméras + IA locale avant d\'acheter — cela change la bonne machine, et acheter le mini-PC maintenant vaut mieux que remplacer une Pi plus tard',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Quel matériel acheter ?',
        content:
          '**Faites correspondre votre objectif à une machine, pas l\'inverse.** Le tableau ci-dessous associe chaque objectif de maison connectée au matériel qui le couvre — chaque ligne renvoie à la recommandation détaillée plus bas dans la page.',
        columns: ['Votre objectif', 'Achetez ceci', 'Prix estimé (août 2026)'],
        rows: [
          { 'Votre objectif': 'Home Assistant seul', 'Achetez ceci': '[Home Assistant Green ou Raspberry Pi 5](#raspberry-pi)', 'Prix estimé (août 2026)': '179 € (Green) / 185–300 € (Pi 5)' },
          { 'Votre objectif': 'HA + caméras Frigate', 'Achetez ceci': '[Mini-PC Intel N100/N150](#mini-pc)', 'Prix estimé (août 2026)': 'environ 230–280 €' },
          { 'Votre objectif': 'HA + un LLM local', 'Achetez ceci': '[Mini-PC Ryzen, 32 Go de RAM](#mini-pc)', 'Prix estimé (août 2026)': 'environ 600–650 €' },
          { 'Votre objectif': 'HA + un LLM local plus grand', 'Achetez ceci': '[Serveur RTX 3090 d\'occasion](#server)', 'Prix estimé (août 2026)': 'environ 1 400–1 750 € (GPU seul)' },
        ],
        tableFormat: true,
        note: 'Les prix sont actuels en août 2026 et évoluent — les prix des GPU et de la DRAM en particulier ont été volatils cette année. Vérifiez le prix sur l\'annonce avant d\'acheter.',
        callouts: [
          { type: 'tip', text: 'Vous ne savez pas encore si vous voudrez de l\'IA locale ? Consultez [Ne dépensez pas trop](#dont-overspend) avant d\'acheter la machine la plus chère.' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Ce que le hub nécessite',
        content:
          '**Home Assistant lui-même est léger et tourne sur du matériel modeste ; les exigences lourdes viennent de la détection de caméras Frigate et d\'un LLM local.** Dimensionnez la machine pour ce que vous allez ajouter, pas seulement pour le hub.',
        items: [
          'Le hub demande peu de puissance pour le contrôle des appareils et les automatisations.',
          'La détection d\'objets Frigate a besoin d\'un accélérateur : une iGPU Intel via OpenVINO couvre la plupart des configurations, et un module Hailo-8L ou Hailo-8 M.2 augmente la capacité. Le Google Coral (TPU USB/M.2) fonctionne toujours, mais il est désormais obsolète — Frigate ne le recommande plus pour les nouvelles installations.',
          'Les modèles Whisper plus grands et l\'inférence de LLM local sont les charges les plus exigeantes — prévoyez la RAM et un GPU/NPU en conséquence.',
          'Stockez les enregistrements de caméras sur un SSD ; passez à un NAS dès que vous exploitez plusieurs caméras en continu.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Une Raspberry Pi 5 est le moyen le moins gourmand en énergie de faire tourner Home Assistant pour un usage maison connectée typique, mais une pénurie de DRAM en 2026 a fait grimper le prix des cartes bien plus fortement — la carte 8 Go coûte désormais environ 185–220 €, et la 16 Go environ 280–300 €, toutes deux bien au-dessus de leur prix de lancement d\'environ 80/120 $, et les analystes n\'anticipent pas de normalisation avant fin 2027.** Elle peine toujours avec l\'inférence de LLM et les grands modèles Whisper.',
        items: [
          'Excellente pour le contrôle des appareils, les automatisations et une petite configuration vocale locale.',
          'L\'inférence de LLM sur une Pi se limite à des modèles très petits et lents — associez-la à un HAT Hailo-8L M.2 si vous voulez la détection Frigate.',
          'Choisissez une Pi 5 si vous voulez les bases à faible consommation et êtes certain de ne pas ajouter de LLM local. Si vous pensez vouloir de l\'IA locale dans l\'année, passez directement au mini-PC — il coûte à peine plus cher et vous évite d\'acheter deux fois.',
          'Pour un appareil prêt à l\'emploi, le Home Assistant Green est livré opérationnel (environ 179 € en 2026, contre un prix de lancement de 99 $). Le Home Assistant Yellow a été abandonné en octobre 2025 — le Green est désormais le seul hub officiel de la marque.',
        ],
        affiliateLinks: [
          { label: 'Voir le prix de la Raspberry Pi 5 →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '185–300 €' },
          { label: 'Voir le prix du Home Assistant Green →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '179 €' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini-PC (et de la place pour un LLM)',
        content:
          '**Un mini-PC est le meilleur choix en une seule machine pour Home Assistant plus l\'IA locale, avec assez de RAM et une iGPU ou NPU capable pour exécuter un petit LLM et accélérer Frigate.** Il équilibre puissance, taille et coût — c\'est la catégorie où il vaut la peine de dépenser plus si vous voulez une seule machine pour les deux usages.',
        items: [
          'Meilleur choix économique : un mini-PC basse consommation Intel N100/N150 fait tourner Home Assistant et accélère Frigate via l\'iGPU Intel (OpenVINO) — l\'option par défaut pratique pour une machine hub-plus-caméras. Le Beelink EQ14 (Intel N150, 16 Go de RAM) coûte environ 230–280 € en août 2026 — bon pour un fonctionnement 24 h/24 et une faible consommation, mais sous-dimensionné pour un LLM local.',
          'Meilleur choix pour l\'IA locale : pour un LLM local sur la même machine, passez à un mini-PC Ryzen avec 32 Go de RAM. Le Beelink SER8 (Ryzen 7 8845HS) coûte environ 600–650 € en août 2026 et fait tourner un modèle Qwen3 8B ou Llama 3.1 8B via Ollama à une vitesse utilisable, aux côtés de Home Assistant et Frigate. Priorisez la RAM et un GPU intégré ou NPU capable pour une latence plus faible.',
          'Si vous achetez une seule machine pour Home Assistant et l\'IA locale ensemble, le mini-PC Ryzen justifie son surcoût par rapport au N150 — c\'est le seul des deux qui fait vraiment tourner un LLM à une vitesse utilisable.',
          'Pour des choix précis, voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) et, inter-clusters, [meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Voir le prix de l\'EQ14 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '230–280 €' },
          { label: 'Voir le prix du SER8 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: 'environ 600–650 €' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: 'Vous utilisez des caméras de sécurité ? Choisissez votre accélérateur Frigate',
        content:
          '**Le nombre de caméras et la marge de détection nécessaire déterminent l\'accélérateur, indépendamment de la machine qui fait tourner le hub.** Frigate ne recommande plus le Google Coral pour les nouvelles installations — il oriente désormais les nouveaux utilisateurs vers Hailo, ou vers l\'iGPU Intel intégrée à la machine hôte.',
        items: [
          '1 à 4 caméras : l\'iGPU Intel intégrée à un mini-PC N100/N150, utilisée via OpenVINO, couvre la plupart des configurations domestiques sans coût matériel supplémentaire.',
          '4 à 10 caméras, ou pour davantage de marge de détection sur du matériel non Intel : un module Hailo-8L M.2 (environ 70–80 € en août 2026) est la recommandation basse consommation actuelle de Frigate — il joue le rôle que le Coral tenait autrefois, en tant que carte d\'extension officiellement bien supportée.',
          '10 caméras et plus, ou des traitements plus lourds (reconnaissance faciale/de plaques en plus de la détection) : un module Hailo-8 M.2 (environ 180–220 €) apporte nettement plus de débit.',
          'Vous possédez déjà un Coral ? Il continue de fonctionner — ceci ne concerne que les achats pour une nouvelle installation, pas une raison de remplacer un Coral qui fonctionne bien.',
        ],
        affiliateLinks: [
          { label: 'Voir le prix du Hailo-8L →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: 'environ 70–80 €' },
          { label: 'Voir le prix du Hailo-8 →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: 'environ 180–220 €' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Un NAS peut héberger Home Assistant dans un conteneur aux côtés du stockage et des enregistrements Frigate, s\'il a assez de CPU et de RAM — une bonne option si vous en possédez déjà un, mais pas la bonne raison d\'acheter votre premier NAS.** N\'achetez pas un NAS spécifiquement pour faire tourner un LLM local : un mini-PC dédié ou une machine avec GPU constitue une meilleure plateforme d\'IA pour le même budget.',
        items: [
          '2 à 4 caméras / stockage plus léger : le Synology DS225+ (environ 380–420 € en août 2026) couvre Home Assistant en conteneur plus les enregistrements Frigate pour un petit nombre de caméras.',
          '4 à 10 caméras / plus de marge : le Synology DS925+ (environ 680–750 €) apporte plus de marge CPU/RAM pour davantage d\'add-ons et de caméras.',
          'Stockage plus IA locale en une machine : les modèles UGREEN NASync (gamme DXP4800 Plus, environ 700–800 €) sont livrés avec une option de LLM local intégrée et du matériel plus récent (DDR5, 10GbE sans carte d\'extension) à un prix proche du DS925+.',
          'L\'inférence de LLM sur un NAS dépend toujours fortement de son matériel — la plupart des NAS n\'ont pas de GPU dédié capable, donc considérez l\'option LLM intégrée comme un confort, pas comme un substitut au niveau RTX 3090 ci-dessous si vous voulez vraiment un modèle volumineux.',
        ],
        affiliateLinks: [
          { label: 'Voir le prix du DS225+ →', url: 'https://www.synology.com/fr-fr/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: 'environ 380–420 €' },
          { label: 'Voir le prix du DS925+ →', url: 'https://www.synology.com/fr-fr/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: 'environ 680–750 €' },
          { label: 'Voir le prix de l\'UGREEN NASync →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: 'environ 700–800 €' },
        ],
      },
      server: {
        id: 'server',
        title: 'Serveur dédié (montée en gamme LLM)',
        content:
          '**Un serveur dédié avec un GPU dédié constitue la montée en gamme pour exécuter un LLM local plus grand aux côtés de nombreuses caméras.** Il offre le plus de marge à un coût et une consommation supérieurs — et les prix des GPU ont beaucoup bougé en 2026, donc traitez les chiffres ci-dessous comme un instantané, pas une valeur fixe.',
        items: [
          'Une RTX 3090 d\'occasion (24 Go de VRAM) est l\'une des options offrant le meilleur rapport VRAM/prix pour les LLM locaux, mais son prix d\'occasion a fortement grimpé en 2026, pour atteindre environ 1 400–1 750 € en août — bien au-dessus des 900–1 000 € observés en 2024–2025. Des modèles quantifiés en Q4 jusqu\'à environ 70B peuvent être possibles selon la quantification, la taille de contexte et l\'offloading ; considérez cela comme une plage de capacité, pas une garantie pour tout modèle de 70B.',
          'Une RTX 3060 d\'occasion (12 Go) est l\'alternative économique pour une machine à GPU dédié, aujourd\'hui autour de 250–320 € d\'occasion en août 2026 — elle gère confortablement les modèles de 7B à 13B, sans la marge de VRAM ni le prix de la RTX 3090.',
          'Idéal pour de nombreuses caméras, un LLM plus grand et plusieurs utilisateurs. Consommation et coût supérieurs à un mini-PC — consultez la section sur la consommation électrique ci-dessous avant de vous engager sur ce niveau.',
          'Surdimensionné pour une maison connectée basique — réservez-le à un usage intensif d\'IA locale, et gardez le hub Home Assistant sur une machine séparée à faible consommation pour la fiabilité (voir Une machine ou deux ? ci-dessous).',
        ],
        affiliateLinks: [
          { label: 'Voir les annonces de RTX 3090 d\'occasion →', url: 'https://www.ebay.fr/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: 'environ 1 400–1 750 €' },
          { label: 'Voir les annonces de RTX 3060 d\'occasion →', url: 'https://www.ebay.fr/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: 'environ 250–320 €' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-fr.svg',
        imageCaption: 'Capacité de LLM local par niveau de matériel : une Raspberry Pi 5 ne fait tourner que des modèles minuscules, un mini-PC Intel N100/N150 gère de petits modèles, un mini-PC Ryzen (32 Go de RAM) fait tourner des modèles de 7B à 8B, et une RTX 3090 d\'occasion (24 Go de VRAM) monte jusqu\'à environ 70B en quantification Q4 selon la configuration.',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: 'Ne dépensez pas trop pour votre serveur Home Assistant',
        content:
          '**Acheter plus de matériel que votre usage ne le nécessite est l\'achat superflu le plus courant dans cette catégorie — faites correspondre la machine à ce que vous comptez réellement faire tourner.**',
        items: [
          'Home Assistant seul ? Vous n\'avez pas besoin d\'un GPU RTX, et probablement pas non plus d\'un mini-PC — une Raspberry Pi 5 ou un Home Assistant Green suffit.',
          'Home Assistant plus caméras Frigate ? Vous n\'avez pas besoin d\'une station de travail coûteuse — un mini-PC Intel N100/N150 avec son iGPU intégrée suffit pour la plupart des nombres de caméras domestiques.',
          'Home Assistant plus un petit LLM local ? Un mini-PC Ryzen de 32 Go suffit pour un modèle de classe 8B — vous n\'avez pas encore besoin d\'un GPU dédié.',
          'Vous voulez un LLM local volumineux (32B et plus) ? C\'est là qu\'un GPU dédié, comme une RTX 3090 d\'occasion, justifie réellement son coût.',
        ],
      },
      power: {
        id: 'power',
        title: 'La consommation électrique compte pour une machine 24 h/24',
        content:
          '**Ce matériel tourne en continu, donc pour une machine qui ne s\'éteint jamais, le coût de l\'électricité sur une année peut compter autant que le prix d\'achat.** Approximativement, par ordre de consommation typique :',
        columns: ['Matériel', 'Rôle typique', 'Consommation', 'Idéal pour'],
        rows: [
          { 'Matériel': 'Raspberry Pi 5', 'Rôle typique': 'Hub seul', 'Consommation': 'Très faible (quelques watts)', 'Idéal pour': 'Home Assistant' },
          { 'Matériel': 'Mini-PC Intel N100/N150', 'Rôle typique': 'Hub + Frigate', 'Consommation': 'Faible (environ 10–15 W typique)', 'Idéal pour': 'Hub + caméras 24 h/24' },
          { 'Matériel': 'Mini-PC Ryzen (32 Go)', 'Rôle typique': 'Hub + Frigate + petit LLM', 'Consommation': 'Modérée (environ 15–35 W typique, plus sous charge LLM)', 'Idéal pour': 'IA locale sur une seule machine' },
          { 'Matériel': 'Serveur RTX 3090', 'Rôle typique': 'IA locale lourde', 'Consommation': 'Élevée (le GPU seul peut consommer 250 W+ en charge)', 'Idéal pour': 'Grands modèles, pas 24 h/24 en veille' },
        ],
        tableFormat: true,
        note: 'Pour un serveur fonctionnant 24 h/24, la consommation électrique peut compter davantage que le prix d\'achat initial — un GPU de 250 W en fonctionnement continu pèse bien plus sur la facture qu\'un mini-PC de 10 W. C\'est une des raisons de garder un GPU puissant sur une machine séparée, allumée délibérément, plutôt que toujours active (voir Une machine ou deux ? ci-dessous).',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: 'Une machine ou deux ?',
        content:
          '**Une seule machine est plus simple et moins chère ; deux machines protègent la fiabilité de Home Assistant d\'une charge d\'IA plus lourde.** Le bon choix dépend de ce que vous privilégiez entre la disponibilité et la simplicité.',
        items: [
          'Une machine (un seul mini-PC) : la plus simple et la moins chère — un mini-PC Ryzen fait tourner Home Assistant, Frigate et un petit LLM local ensemble. Le bon choix pour la plupart des configurations domestiques.',
          'Deux machines (un hub basse consommation plus une machine IA séparée) : garde Home Assistant ultra-fiable sur une machine basse consommation qui a rarement besoin de redémarrer, pendant que le travail d\'IA plus lourd — un serveur RTX 3090 d\'occasion, par exemple — tourne et peut être redémarré indépendamment sans faire tomber vos automatisations avec lui.',
          'Choisissez deux machines si vous utilisez Home Assistant pour quoi que ce soit lié à la sécurité (serrures, alarmes, chauffage) et voulez isoler cette couche d\'une machine GPU que vous pourriez redémarrer, mettre à jour ou tester.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Choisir pour HA-seul vs HA + IA',
        content:
          '**Choisissez une Pi pour HA-seul et un mini-PC pour HA plus IA locale — cette seule décision détermine le bon matériel.** Adaptez la machine à la charge de travail, pas l\'inverse.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-fr.svg',
        imageCaption: 'Arbre de décision pour le matériel de maison connectée : ajouter des caméras Frigate et un LLM local mène à quatre configurations — Raspberry Pi 5, mini-PC Intel N100/N150, mini-PC Ryzen (32 Go de RAM) ou un serveur RTX 3090 (24 Go de VRAM).',
        columns: ['Matériel', 'Prix relatif', 'HA-seul', 'Peut exécuter un LLM local', 'Accélération Frigate'],
        rows: [
          { 'Matériel': 'Raspberry Pi 5', 'Prix relatif': 'Faible', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Très petits seulement, lent', 'Accélération Frigate': 'HAT Hailo-8L M.2' },
          { 'Matériel': 'Mini-PC Intel N100/N150', 'Prix relatif': 'Moyen', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Petits modèles', 'Accélération Frigate': 'iGPU Intel (OpenVINO)' },
          { 'Matériel': 'Mini-PC Ryzen', 'Prix relatif': 'Moyen', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Oui (7B–8B)', 'Accélération Frigate': 'iGPU ou Hailo M.2' },
          { 'Matériel': 'NAS', 'Prix relatif': 'Moyen–élevé', 'HA-seul': 'Oui (conteneur)', 'Peut exécuter un LLM local': 'Dépend du matériel', 'Accélération Frigate': 'Dépend du modèle' },
          { 'Matériel': 'Serveur + RTX 3090 d\'occasion', 'Prix relatif': 'Élevé', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Oui (jusqu\'à ~70B, selon la quantification)', 'Accélération Frigate': 'GPU dédié' },
        ],
        note: 'Pour la consommation électrique par niveau, voir [Consommation électrique](#power) ci-dessus ; pour savoir s\'il vaut mieux tout faire tourner sur une seule machine, voir [Une machine ou deux ?](#one-or-two).',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: 'Une recommandation d\'achat générale pour 2026',
        content:
          '**Si vous choisissez une machine aujourd\'hui et ne savez pas quel niveau vous convient, voici une base raisonnable compte tenu des arbitrages ci-dessus — vos besoins réels peuvent pointer ailleurs, et aucun des choix ci-dessous n\'a été testé ni évalué par PromptQuorum.**',
        items: [
          'Pour une maison connectée locale classique (Home Assistant plus quelques appareils Zigbee/Matter) : un mini-PC Intel N150 est un choix par défaut sensé — il couvre aussi Frigate si vous ajoutez des caméras plus tard.',
          'Pour Home Assistant plus caméras plus un petit assistant IA local : un mini-PC Ryzen avec 32 Go de RAM est un choix raisonnable en une seule machine — c\'est la machine la moins chère qui fait vraiment tourner un LLM de classe 8B à une vitesse utilisable.',
          'Pour une IA locale sérieuse (modèles de classe 32B ou plus) : un serveur RTX 3090 séparé, tenu à l\'écart du hub Home Assistant, est la montée en gamme raisonnable compte tenu des prix actuels des GPU d\'occasion.',
          'Une nouvelle installation orientée IA dès le départ convient généralement moins bien à une Raspberry Pi, compte tenu des prix de la Pi en 2026 et de ses limites en matière de LLM — un mini-PC est souvent d\'un prix proche et constitue une bien meilleure plateforme d\'IA.',
        ],
      },
      stacks: {
        id: 'stacks',
        title: 'Configurations complètes de maison connectée locale',
        content:
          '**La plupart des acheteurs ont besoin de plus d\'un produit — au minimum un hub, un accélérateur Frigate et du stockage, plus une machine IA si vous voulez de l\'inférence de LLM local.** Ces trois configurations combinent les choix ci-dessus par scénario ; chaque produit renvoie à sa recommandation complète plus haut sur cette page.',
        columns: ['Configuration', 'Hub', 'Accélérateur Frigate', 'IA', 'Total estimé (août 2026)'],
        rows: [
          { 'Configuration': 'Débutant (HA seul)', 'Hub': '[Home Assistant Green ou Pi 5](#raspberry-pi)', 'Accélérateur Frigate': '—', 'IA': '—', 'Total estimé (août 2026)': 'environ 179–300 €' },
          { 'Configuration': 'HA + caméras', 'Hub': '[Mini-PC N150](#mini-pc)', 'Accélérateur Frigate': '[iGPU Intel, ou Hailo-8L pour plus de marge](#frigate-accelerator)', 'IA': '—', 'Total estimé (août 2026)': 'environ 230–360 €' },
          { 'Configuration': 'HA + caméras + IA locale', 'Hub': '[Mini-PC Ryzen, 32 Go](#mini-pc)', 'Accélérateur Frigate': 'iGPU intégrée, ou [Hailo-8L pour plus de caméras](#frigate-accelerator)', 'IA': 'Tourne sur la même machine (modèle de classe 8B)', 'Total estimé (août 2026)': 'environ 600–730 €' },
          { 'Configuration': 'HA + caméras + IA locale volumineuse', 'Hub': '[Mini-PC N150 (gardé séparé pour la fiabilité)](#mini-pc)', 'Accélérateur Frigate': '[Hailo-8](#frigate-accelerator)', 'IA': '[Serveur RTX 3090 d\'occasion, séparé](#server)', 'Total estimé (août 2026)': 'environ 1 800–2 250 €' },
        ],
        tableFormat: true,
        note: 'La dernière configuration garde le hub Home Assistant sur sa propre machine basse consommation et fait tourner la RTX 3090 comme une machine séparée — voir [Une machine ou deux ?](#one-or-two) pour comprendre pourquoi.',
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quel matériel Frigate recommande-t-il ?', a: 'Pour les nouvelles installations, Frigate recommande une iGPU Intel via OpenVINO, ou un module Hailo-8L (environ 70–80 €, économique) ou Hailo-8 (environ 180–220 €, plus rapide) au format M.2 pour davantage de capacité de détection. Le Google Coral (TPU USB/M.2) fonctionne toujours, mais il est désormais obsolète — Frigate ne le recommande plus pour les nouvelles installations, sauf sur du matériel très basse consommation.' },
          { q: 'Une Raspberry Pi peut-elle aussi exécuter un LLM local ?', a: 'Une Pi ne peut exécuter que des modèles très petits, et lentement, elle n\'est donc pas idéale pour un assistant LLM local réactif. Elle gère bien Home Assistant et la voix basique, mais pour l\'IA locale un mini-PC avec une iGPU ou NPU capable — ou un boîtier RTX 3090 d\'occasion — est le meilleur choix.' },
          { q: 'De combien de RAM ai-je besoin ?', a: 'Home Assistant seul tourne dans quelques gigaoctets. Pour exécuter un petit LLM local et d\'autres services d\'IA sur la même machine, plus de RAM aide ; un mini-PC avec 32 Go de RAM et une iGPU/NPU capable garde un modèle Qwen3 8B ou Llama 3.1 8B réactif. Adaptez la RAM à la taille du modèle prévu.' },
          { q: 'Quel mini-PC choisir ?', a: 'Pour HA plus caméras, un mini-PC Intel N100/N150 accélère Frigate via OpenVINO. Pour HA plus un LLM local, passez à un mini-PC Ryzen avec 32 Go de RAM. Voir le guide des meilleurs mini-PC pour Home Assistant + IA locale pour des choix précis.' },
          { q: 'Une machine ou deux ?', a: 'Une machine (un mini-PC) est la plus simple et fait tourner Home Assistant plus un petit LLM local ensemble. Séparez en deux si vous voulez garder le hub ultra-fiable sur une machine basse consommation et déporter l\'IA lourde vers une machine séparée comme un serveur RTX 3090 d\'occasion.' },
          { q: 'La consommation électrique compte-t-elle pour une machine 24 h/24 ?', a: 'Elle compte plus que le prix d\'achat pour du matériel qui ne s\'éteint jamais. Une Raspberry Pi consomme quelques watts, un mini-PC N100/N150 environ 10–15 W, un mini-PC Ryzen entre 15 et 35 W selon la charge, et un GPU dédié comme une RTX 3090 peut consommer 250 W ou plus en charge — une raison de faire tourner un serveur GPU puissant sur une machine séparée plutôt que toujours active.' },
          { q: 'Une Raspberry Pi vaut-elle encore le coup avec les prix de 2026 ?', a: 'Pour Home Assistant seul, oui — elle reste l\'option la moins gourmande en énergie. Mais une pénurie de DRAM en 2026 a fait grimper fortement les prix de la Pi 5 (environ 185–300 € selon la RAM en août 2026, contre un prix d\'origine de 80–120 $), réduisant l\'écart de prix avec un mini-PC N100/N150. Si vous pourriez ajouter des caméras ou un LLM local dans l\'année, le mini-PC est généralement le meilleur achat dès maintenant.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — choix précis',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — le stack complet',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la machine IA exécute',
          '[Meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm) — inter-clusters : VRAM et détail matériel',
          '[Guide d\'achat du meilleur GPU pour LLM local](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — choix de GPU plus approfondis si vous avez besoin de plus de VRAM qu\'une RTX 3090',
          '[Guide de location de GPU dans le cloud](/fr/power-local-llm/cloud-gpu-rental-guide-2026) — louer du temps GPU plutôt qu\'acheter, si vous n\'en avez besoin qu\'occasionnellement',
          '[Meilleures batteries solaires de balcon 2026](/fr/balcony-solar/best-balcony-solar-batteries-2026) — stockage batterie pour votre installation locale d\'énergie domestique',
          '[Meilleurs hubs domotiques pour le contrôle local (2027)](/fr/smart-home/best-smart-home-hubs-2027) — hubs domotiques dédiés',
          '[NVIDIA Jetson Orin Nano pour la maison connectée : test (2027)](/fr/smart-home/nvidia-jetson-orin-nano-smart-home-review) — matériel IA local avec GPU',
          '[Meilleurs dongles USB Zigbee et Thread (2027)](/fr/smart-home/best-zigbee-thread-dongles-2027) — matériel radio Zigbee et Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleur Matériel pour une Maison Connectée Locale + IA Locale (2026)',
      description: 'Meilleur matériel maison connectée locale + IA 2026 : mini-PC Intel N100 ou Raspberry Pi 5 comme hub, accélérateur Frigate (iGPU Intel/Hailo), stockage SSD, montée en gamme LLM.',
      url: 'https://www.promptquorum.com/fr/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Matériel Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quel matériel Frigate recommande-t-il ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour les nouvelles installations, Frigate recommande une iGPU Intel via OpenVINO, ou un module Hailo-8L (environ 70–80 €) ou Hailo-8 (environ 180–220 €) au format M.2 pour davantage de capacité de détection. Le Google Coral fonctionne toujours, mais il est désormais obsolète et n\'est plus recommandé pour les nouvelles installations.' } },
        { '@type': 'Question', name: 'Une Raspberry Pi peut-elle aussi exécuter un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Une Pi ne peut exécuter que des modèles très petits, et lentement. Elle gère bien Home Assistant et la voix basique, mais pour un assistant LLM local réactif, un mini-PC avec iGPU ou NPU capable, ou un boîtier RTX 3090 d\'occasion, est meilleur.' } },
        { '@type': 'Question', name: 'De combien de RAM ai-je besoin ?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant seul tourne dans quelques gigaoctets. Pour exécuter un petit LLM local sur la même machine, plus de RAM aide ; un mini-PC avec 32 Go de RAM garde un modèle Qwen3 8B ou Llama 3.1 8B réactif. Adaptez la RAM à la taille du modèle prévu.' } },
        { '@type': 'Question', name: 'Quel mini-PC choisir ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour HA plus caméras, un mini-PC Intel N100/N150 accélère Frigate via OpenVINO. Pour HA plus un LLM local, passez à un mini-PC Ryzen avec 32 Go de RAM. Voir le guide des meilleurs mini-PC pour Home Assistant + IA locale.' } },
        { '@type': 'Question', name: 'Une machine ou deux ?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini-PC fait tourner Home Assistant plus un petit LLM local ensemble. Séparez en deux si vous voulez le hub ultra-fiable sur une machine basse consommation et l\'IA lourde déportée vers une machine séparée comme un serveur RTX 3090 d\'occasion.' } },
        { '@type': 'Question', name: 'La consommation électrique compte-t-elle pour une machine 24 h/24 ?', acceptedAnswer: { '@type': 'Answer', text: 'Elle compte plus que le prix d\'achat pour du matériel qui ne s\'éteint jamais. Une Raspberry Pi consomme quelques watts, un mini-PC N100/N150 environ 10–15 W, un mini-PC Ryzen environ 15–35 W, et un GPU dédié comme une RTX 3090 peut consommer 250 W ou plus en charge.' } },
        { '@type': 'Question', name: 'Une Raspberry Pi vaut-elle encore le coup avec les prix de 2026 ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour Home Assistant seul, oui. Mais une pénurie de DRAM en 2026 a fait grimper les prix de la Pi 5 à environ 185–300 € selon la RAM, contre un prix d\'origine de 80–120 $, réduisant l\'écart avec un mini-PC N100/N150 — qui est le meilleur achat si vous pourriez ajouter des caméras ou un LLM local dans l\'année.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-ja.webp',
    affiliateDisclosure: true,
    title: 'ローカルスマートホーム + ローカルAIに最適なハードウェア（2026）',
    seoTitle: '最適なハードウェア：ローカルSH + AI（2026）',
    intro:
      'ローカルスマートホームに最適なハードウェアは、次の判断に従います。ハブは Intel N100/N150 ミニPC または Raspberry Pi 5、Frigate のカメラ検出は Intel 内蔵GPU（OpenVINO）または Hailo-8L M.2 モジュールで加速し、録画は SSD または NAS に保存、ローカルLLM を動かしたいなら中古の RTX 3090 搭載機がその上位選択肢です。本ガイドは各層を選び、2026年時点の最新価格を示し、HAのみか HA＋AI かの判断を助けます——一度で正しく買い、二度買わずに済むように。',
    metaDescription:
      'ローカルスマートホーム＋AIの最適ハードウェア（2026年）：Intel N100 ミニPC または Raspberry Pi 5 のハブ、Frigate 加速（Intel 内蔵GPU／Hailo）、SSD ストレージ、LLM 用の上位構成を解説。価格情報を更新。',
    twitterDescription:
      'ローカルスマートホームのハードウェア（2026年）：ハブは Intel N100 ミニPC または Pi 5、Frigate 加速は Intel 内蔵GPU／Hailo-8L、SSD ストレージ、ローカルLLM は中古 RTX 3090。2026年最新価格。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant とローカルAIを動かすハードウェアを選ぶ購入者',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      '最適 ハードウェア home assistant ローカルai',
      'home assistant ハードウェア',
      'ミニpc home assistant ローカルllm',
      'raspberry pi 対 ミニpc home assistant',
      'ローカル スマートホーム サーバー',
    ],
    leadAnswerBlock:
      '**ローカルスマートホームは4つの層で構築します。ハブ（Intel N100/N150 ミニPC または Raspberry Pi 5）、Frigate 加速器（OpenVINO 経由の Intel 内蔵GPU または Hailo-8L M.2 モジュール）、ストレージ（SSD、カメラが多いなら NAS）、そしてローカルLLM が欲しいなら中古 RTX 3090 のような上位構成です。** Home Assistant 単体なら Raspberry Pi で十分——決め手はカメラ検出とローカルAIを加えるかどうかです。目的がもう決まっているなら、[構成別のおすすめハードウェア](#quick-picks)へ直接どうぞ。',
    quickAnswerTop: {
      ja: {
        question: 'AI付きのローカルスマートホームにはどんなハードウェアが必要ですか？',
        answer:
          'まずハブから始めます。Intel N100/N150 ミニPC または Raspberry Pi 5 が Home Assistant を動かします。カメラ用に Frigate 加速器を追加——OpenVINO 経由の Intel 内蔵GPU がほとんどの構成をカバーし、Hailo-8L または Hailo-8 M.2 モジュールが検出能力を高めます（Google Coral は現在レガシー扱いです）。録画は SSD、カメラが多いなら NAS に保存します。ローカルLLM には、高性能な内蔵GPU/NPU を備えたミニPC、または中古の RTX 3090 搭載機に上げましょう。1年以内にローカルAIを追加しそうなら、あとで買い替える Raspberry Pi ではなく、今のうちにミニPCを買いましょう。',
        bullets: [
          'ハブ：Intel N100/N150 ミニPC または Raspberry Pi 5',
          'Frigate：Intel 内蔵GPU（OpenVINO）または Hailo-8L M.2——Coral はレガシー',
          'ストレージ：SSD、カメラが多いなら NAS',
          'ローカルLLM の上位構成：ミニPC の内蔵GPU/NPU または中古 RTX 3090',
          '1年以内にローカルAIを追加しそうなら、今すぐミニPCを買う方が得——後で Raspberry Pi を買い替えるより安上がり',
          'まず決める：HAのみか、HA＋カメラ＋ローカルAIか——これで一度で済むか二度買うかが決まる',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '何を買うべきか？', anchor: 'quick-picks' },
      { label: 'ハブに必要なもの', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'ミニPC', anchor: 'mini-pc' },
      { label: 'Frigate 加速器', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: '専用サーバー', anchor: 'server' },
      { label: '買いすぎない', anchor: 'dont-overspend' },
      { label: '消費電力', anchor: 'power' },
      { label: '一台か二台か？', anchor: 'one-or-two' },
      { label: 'HAのみ 対 HA＋AI', anchor: 'picking' },
      { label: '総合的な購入の目安', anchor: 'what-id-buy' },
      { label: '完全な構成例', anchor: 'stacks' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Intel N100/N150 ミニPC または Raspberry Pi 5 がハブを動かし、Frigate には Intel 内蔵GPU または Hailo-8L、ストレージには SSD または NAS、ローカルLLM が欲しいなら中古 RTX 3090 搭載機を加えます。' },
      { type: 'plain-terms', content: 'ハブのソフト（Home Assistant）は軽量で、Raspberry Pi のような小型コンピューターで動きます。カメラ検出（Frigate）には加速器が必要です——OpenVINO 経由の Intel グラフィックチップ、または Hailo の M.2 モジュールです。ローカルの言語モデルを加えるにはさらに多くの性能が必要で、そこで高性能なグラフィックチップを備えたミニPCや、RTX 3090 のような中古グラフィックカードが活きてきます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'ハブ：Intel N100/N150 ミニPC（約22,000〜27,000円）または Raspberry Pi 5（2026年8月時点で約22,000〜38,000円、DRAM不足で大幅値上がり）が Home Assistant を動かす',
          'Frigate：多くのミニPCに内蔵された Intel 内蔵GPU（OpenVINO 経由）、Hailo-8L M.2 モジュール（約10,000円）、または Hailo-8 M.2（約25,000〜30,000円）がカメラ検出を加速——Google Coral は現在レガシーで、新規構築での Frigate の推奨からは外れています',
          'ストレージ：録画は SSD、カメラが増えたら（Synology DS225+ 約50,000円、DS925+ 約95,000円、UGREEN NASync 約95,000〜105,000円）NAS へ',
          'ローカルLLM の上位構成：Ryzen ミニPC（RAM 32GB、約95,000〜100,000円）または中古 RTX 3090 搭載機（2026年8月時点で約130,000〜160,000円——2024〜2025年の水準よりかなり高くなっています）',
          '購入前に HAのみ 対 HA＋カメラ＋ローカルAI を決める——適切な機器が変わり、後で Pi を買い替えるより今ミニPCを買う方が得です',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: '何を買うべきか？',
        content:
          '**目的から機器を選びましょう。逆ではありません。** 下の表はスマートホームの目的ごとに、それをカバーするハードウェアを対応させています——各行はページ後半のより詳しいおすすめにリンクしています。',
        columns: ['目的', 'これを買う', '目安価格（2026年8月）'],
        rows: [
          { '目的': 'Home Assistant のみ', 'これを買う': '[Home Assistant Green または Raspberry Pi 5](#raspberry-pi)', '目安価格（2026年8月）': '約30,000円（Green）／約22,000〜38,000円（Pi 5）' },
          { '目的': 'HA＋Frigate カメラ', 'これを買う': '[Intel N100/N150 ミニPC](#mini-pc)', '目安価格（2026年8月）': '約22,000〜27,000円' },
          { '目的': 'HA＋ローカルLLM', 'これを買う': '[Ryzen ミニPC、RAM 32GB](#mini-pc)', '目安価格（2026年8月）': '約95,000〜100,000円' },
          { '目的': 'HA＋より大きなローカルLLM', 'これを買う': '[中古 RTX 3090 サーバー](#server)', '目安価格（2026年8月）': '約130,000〜160,000円（GPUのみ）' },
        ],
        tableFormat: true,
        note: '価格は2026年8月時点の目安で変動します——特に GPU とDRAMの価格は今年変動が大きいです。購入前にリンク先の実際の価格を確認してください。',
        callouts: [
          { type: 'tip', text: 'ローカルAIが欲しいかまだ迷っている方は、高価な機器を買う前に[買いすぎない](#dont-overspend)を確認してください。' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'ハブに必要なもの',
        content:
          '**Home Assistant 自体は軽量で控えめなハードウェアで動きます；重い要求は Frigate のカメラ検出とローカルLLM から来ます。** ハブだけでなく、追加するものに合わせて機器を選びましょう。',
        items: [
          'ハブは機器制御と自動化にほとんど計算力を要しません。',
          'Frigate の物体検出には加速器が必要です。OpenVINO 経由の Intel 内蔵GPU がほとんどの構成をカバーし、Hailo-8L または Hailo-8 M.2 モジュールが検出能力を高めます。Google Coral の USB/M.2 TPU は今も動作しますが現在はレガシー扱いで、Frigate は新規構築には推奨していません。',
          'より大きな Whisper モデルとローカルLLM 推論が最も要求の高いワークロードです——これらを軸に RAM と GPU/NPU を計画しましょう。',
          'カメラの録画は SSD に保存し、複数台のカメラを常時運用するようになったら NAS に移行しましょう。',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi 5 は、一般的なスマートホーム用途で Home Assistant を動かす最も低消費電力な方法ですが、2026年の DRAM 不足でボードの価格は大きく上昇しており、8GBモデルは約22,000〜27,000円、16GBモデルは約35,000〜38,000円と、いずれも発売時の水準を大きく上回っています。正常化は2027年後半以降になると見られています。** それでも LLM推論や大きな Whisper モデルには苦労します。',
        items: [
          '機器制御、自動化、小規模なローカル音声構成に最適。',
          'Pi 上の LLM 推論は非常に小さく遅いモデルに限られます。Frigate 検出が欲しいなら Hailo-8L M.2 HAT と組み合わせましょう。',
          '低消費電力で基本が欲しく、1年以内にローカルLLMを追加しないと確信しているなら Pi 5 を選びましょう。1年以内にローカルAIが欲しくなりそうなら、Pi は飛ばして今のうちにミニPCを買うのがおすすめです——差額はわずかで、後で二度買う手間を省けます。',
          'すぐ使える完成品としては、Home Assistant Green が組み立て済みで届きます（2026年時点で約30,000円。ただし国内での正規販売は限定的）。Home Assistant Yellow は2025年10月に生産終了しました——Green が現在唯一の公式ファーストパーティ製ハブです。',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 の価格を見る →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '約22,000〜38,000円' },
          { label: 'Home Assistant Green の価格を見る →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '約30,000円（国内での正規販売は限定的）' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'ミニPC（と LLM の余地）',
        content:
          '**ミニPCは、十分な RAM と高性能な内蔵GPU または NPU を備えた、Home Assistant＋ローカルAIに最適な一台の選択です。** 性能・サイズ・コストのバランスが取れており、1台で両方の役割を担わせたいなら、ここに多めに予算を割く価値があります。',
        items: [
          '予算重視のベストな選択：低消費電力の Intel N100/N150 ミニPC は Home Assistant を動かし、Intel 内蔵GPU（OpenVINO）で Frigate を加速します——ハブ＋カメラ機の現実的な標準構成です。Beelink EQ14（Intel N150、RAM 16GB）は2026年8月時点で約28,000〜34,000円——24時間稼働と低消費電力に向きますが、ローカルLLMには非力です。',
          'ローカルAI向けベストな選択：同じ機器でローカルLLM も動かすなら、RAM 32GB の Ryzen ミニPC に上げましょう。Beelink SER8（Ryzen 7 8845HS）は2026年8月時点で約95,000〜100,000円で、Ollama 経由で Qwen3 8B や Llama 3.1 8B モデルを実用的な速度で動かせ、Home Assistant と Frigate も同時にこなします。低レイテンシのために RAM と高性能な内蔵GPU/NPU を優先しましょう。',
          'Home Assistant とローカルAIを1台にまとめて買うなら、N150 より高い Ryzen ミニPC の追加費用は十分見合います——実用的な速度でLLMを本当に動かせるのは2つのうちこちらだけです。',
          '具体的な候補は[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)、クラスター横断で[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm)を参照。',
        ],
        affiliateLinks: [
          { label: 'EQ14 の価格を見る →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '約28,000〜34,000円' },
          { label: 'SER8 の価格を見る →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: '約95,000〜100,000円' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: '防犯カメラを使うなら？Frigate 加速器の選び方',
        content:
          '**何台のカメラを使い、どれだけの検出余力が必要かで加速器を選びます。これはハブをどの機器で動かすかとは別の話です。** Frigate はもう新規構築で Google Coral を推奨していません——今は Hailo か、ホスト機に内蔵の Intel 内蔵GPU を新規ユーザーに勧めています。',
        items: [
          '1〜4台：N100/N150 ミニPC に内蔵された Intel 内蔵GPU を OpenVINO 経由で使えば、追加ハードウェアなしでほとんどの家庭用構成をカバーできます。',
          '4〜10台、または Intel以外のハードウェアでより多くの検出余力が欲しい場合：Hailo-8L M.2 モジュール（2026年8月時点で約10,000円）が Frigate 現在の低消費電力な推奨です——かつての Coral のように、公式に一級サポートされる追加カードとして機能します。',
          '10台以上、またはより重い追加処理（検出に加えて顔認識・ナンバープレート認識）が必要な場合：Hailo-8 M.2 モジュール（約25,000〜30,000円）が明確に高いスループットを提供します。',
          'すでに Coral をお持ちですか？それは今も使えます——ここでは新規構築で何を買うべきかを扱っているだけで、正常に動いている Coral 構成を置き換える理由にはなりません。',
        ],
        affiliateLinks: [
          { label: 'Hailo-8L の価格を見る →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: '約10,000円' },
          { label: 'Hailo-8 の価格を見る →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: '約25,000〜30,000円' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**NAS は、十分な CPU と RAM があれば、ストレージや Frigate の録画と並べてコンテナで Home Assistant をホストできます——すでに所有しているなら良い選択肢ですが、これだけを目的に最初の1台を買う理由にはなりません。** ローカルLLMを動かすためだけに NAS を買わないでください——専用のミニPCや GPU 機の方が、同じ予算でより良いAIプラットフォームです。',
        items: [
          '2〜4台／比較的軽いストレージ用途：Synology DS225+（2026年8月時点で約50,000円）は少数カメラのコンテナ版 Home Assistant と Frigate の録画をカバーします。',
          '4〜10台／より多くの余力が必要：Synology DS925+（約95,000円）はより多くのアドオンやカメラに対応する CPU/RAM の余力を提供します。',
          'ストレージとローカルAIを1台に：UGREEN NASync シリーズ（DXP4800 Plus クラス、約95,000〜105,000円）はローカルLLMオプションを内蔵し、DS925+と同程度の価格で新しいハードウェア（DDR5、拡張カード不要の10GbE）を備えます。',
          'NAS 上の LLM 推論は依然としてそのハードウェアに大きく左右されます——ほとんどの NAS は高性能なディスクリートGPUを欠くため、内蔵LLMオプションは便利機能として捉え、本格的な大型モデルが欲しい場合は下記の RTX 3090 クラスの代わりにはならないと考えてください。',
        ],
        affiliateLinks: [
          { label: 'DS225+ の価格を見る →', url: 'https://www.synology.com/ja-jp/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: '約50,000円' },
          { label: 'DS925+ の価格を見る →', url: 'https://www.synology.com/ja-jp/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: '約95,000円' },
          { label: 'UGREEN NASync の価格を見る →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: '約95,000〜105,000円' },
        ],
      },
      server: {
        id: 'server',
        title: '専用サーバー（LLM の上位構成）',
        content:
          '**ディスクリートGPUを搭載した専用サーバーは、多数のカメラと並行してより大きなローカルLLM を動かすための上位構成です。** より高いコストと消費電力で最大の余裕を提供します——2026年はGPU価格の変動が大きいため、以下の数字はある時点のスナップショットとして捉えてください。',
        items: [
          '中古の RTX 3090（VRAM 24GB）はローカルLLM向けにVRAM単価が最も優れた選択肢の一つですが、その中古価格は2026年を通じて大きく上昇し、8月時点で約130,000〜160,000円——2024〜2025年の水準よりかなり高くなっています。量子化方式、コンテキストサイズ、オフロード次第では、Q4量子化で約70Bまでのモデルが動く可能性があります——これは目安の範囲であり、すべての70Bモデルを保証するものではありません。',
          '中古の RTX 3060（12GB）はディスクリートGPU機の予算重視の代替で、2026年8月時点の中古価格は約27,000〜36,000円——RTX 3090ほどのVRAM余裕や価格ではありませんが、7B〜13Bモデルを問題なく扱えます。',
          '多数のカメラ、より大きな LLM、複数ユーザーに最適。ミニPCより消費電力もコストも高くなります——この構成に踏み切る前に、下記の消費電力のセクションを確認してください。',
          '基本的なスマートホームには過剰——重いローカルAI用途に取っておき、信頼性のために Home Assistant のハブは別の低消費電力機に分けましょう（下記「一台か二台か？」を参照）。',
        ],
        affiliateLinks: [
          { label: 'RTX 3090 の中古相場を見る →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: '約130,000〜160,000円' },
          { label: 'RTX 3060 の中古相場を見る →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: '約27,000〜36,000円' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-ja.svg',
        imageCaption: 'ハードウェア階層別のローカルLLM容量：Raspberry Pi 5 は極小モデルのみ、Intel N100/N150 ミニPC は小型モデルを処理、Ryzen ミニPC（RAM 32GB）は 7B〜8B モデルを実行、中古 RTX 3090（VRAM 24GB）は構成次第で Q4 量子化で約70Bまで対応します。',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: 'Home Assistant サーバーに買いすぎない',
        content:
          '**用途以上のハードウェアを買ってしまうことが、このカテゴリーで最もよくある無駄な出費です——実際に動かす予定のものに機器を合わせましょう。**',
        items: [
          'Home Assistant のみ？RTX GPUは不要ですし、おそらくミニPCも不要です——Raspberry Pi 5 か Home Assistant Green で十分です。',
          'Home Assistant＋Frigate カメラ？高価なワークステーションは不要です——内蔵GPUを備えた Intel N100/N150 ミニPCで、多くの家庭のカメラ台数には十分です。',
          'Home Assistant＋小型のローカルLLM？32GB の Ryzen ミニPC で 8Bクラスのモデルには十分です——まだディスクリートGPUは不要です。',
          '大型のローカルLLM（32B以上）が欲しいですか？そこがディスクリートGPU（中古 RTX 3090 など）が本当に価値を発揮するポイントです。',
        ],
      },
      power: {
        id: 'power',
        title: '24時間稼働の機器では消費電力が重要',
        content:
          '**このハードウェアは常時稼働するため、電源を切らない機器にとっては、1年間の電気代が購入価格と同じくらい重要になることがあります。** おおよそ、典型的な消費電力の順に：',
        columns: ['ハードウェア', '典型的な役割', '消費電力', '向いている用途'],
        rows: [
          { 'ハードウェア': 'Raspberry Pi 5', '典型的な役割': 'ハブのみ', '消費電力': '非常に低い（数ワット）', '向いている用途': 'Home Assistant' },
          { 'ハードウェア': 'Intel N100/N150 ミニPC', '典型的な役割': 'ハブ＋Frigate', '消費電力': '低い（典型約10〜15W）', '向いている用途': '24時間稼働のハブ＋カメラ' },
          { 'ハードウェア': 'Ryzen ミニPC（32GB）', '典型的な役割': 'ハブ＋Frigate＋小型LLM', '消費電力': '中程度（典型約15〜35W、LLM負荷時はさらに高い）', '向いている用途': '一台で完結するローカルAI' },
          { 'ハードウェア': 'RTX 3090 サーバー', '典型的な役割': '重いローカルAI', '消費電力': '高い（GPU単体で負荷時250W以上）', '向いている用途': '大型モデル、24時間アイドルには不向き' },
        ],
        tableFormat: true,
        note: '24時間稼働するサーバーでは、消費電力が初期購入価格より重要になることがあります——250WのGPUが連続稼働すると、10WのミニPCとは比較にならないほど電気代に響きます。これが、重いGPUサーバーを常時稼働機ではなく、意図的に使うときだけ動かす別機として分けておくべき理由の一つです（下記「一台か二台か？」を参照）。',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: '一台か二台か？',
        content:
          '**一台の方がシンプルで安く、二台にすると Home Assistant の信頼性を重いAI負荷から守れます。** どちらが適切かは、稼働率とシンプルさのどちらを重視するかによります。',
        items: [
          '一台（単一のミニPC）：最もシンプルで安価——Ryzen ミニPC 一台で Home Assistant、Frigate、小型のローカルLLMをまとめて動かせます。多くの家庭の構成にとって正しい選択です。',
          '二台（低消費電力のハブ＋別のAI機）：ほとんど再起動が不要な低消費電力機で Home Assistant を極めて安定させつつ、より重いAI処理——例えば中古 RTX 3090 サーバー——を独立して稼働・再起動でき、自動化を巻き込みません。',
          '安全に関わるもの（鍵、警報、暖房など）を Home Assistant で動かしていて、再起動・更新・実験をする可能性のあるGPU機からこの層を切り離したい場合は、二台構成を選びましょう。',
        ],
      },
      picking: {
        id: 'picking',
        title: 'HAのみ 対 HA＋AI で選ぶ',
        content:
          '**HAのみなら Raspberry Pi 5、HA＋ローカルAIならミニPCを選びましょう——この一つの判断が適切なハードウェアを決めます。** 機器をワークロードに合わせましょう。逆ではありません。',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-ja.svg',
        imageCaption: 'スマートホーム機器の決定木：Frigate カメラの追加とローカルLLMの追加という2つの分岐から、Raspberry Pi 5、Intel N100/N150 ミニPC、Ryzen ミニPC（RAM 32GB）、RTX 3090 サーバー（VRAM 24GB）の4通りの構成に分かれます。',
        columns: ['ハードウェア', '相対価格', 'HAのみ', 'ローカルLLMを動かせるか', 'Frigate 加速'],
        rows: [
          { 'ハードウェア': 'Raspberry Pi 5', '相対価格': '低', 'HAのみ': '可', 'ローカルLLMを動かせるか': '非常に小型のみ、遅い', 'Frigate 加速': 'Hailo-8L M.2 HAT' },
          { 'ハードウェア': 'Intel N100/N150 ミニPC', '相対価格': '中', 'HAのみ': '可', 'ローカルLLMを動かせるか': '小型モデル', 'Frigate 加速': 'Intel 内蔵GPU（OpenVINO）' },
          { 'ハードウェア': 'Ryzen ミニPC', '相対価格': '中', 'HAのみ': '可', 'ローカルLLMを動かせるか': '可（7B〜8B）', 'Frigate 加速': '内蔵GPU または Hailo M.2' },
          { 'ハードウェア': 'NAS', '相対価格': '中〜高', 'HAのみ': '可（コンテナ）', 'ローカルLLMを動かせるか': 'ハードウェア次第', 'Frigate 加速': 'モデル次第' },
          { 'ハードウェア': 'サーバー＋中古 RTX 3090', '相対価格': '高', 'HAのみ': '可', 'ローカルLLMを動かせるか': '可（約70Bまで、量子化次第）', 'Frigate 加速': 'ディスクリートGPU' },
        ],
        note: '各階層の消費電力は上記[消費電力](#power)を、すべてを一台にまとめるべきかは[一台か二台か？](#one-or-two)を参照。',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: '2026年の総合的な購入の目安',
        content:
          '**今日一台の機器を選ぶ際にどの階層が合うか迷っているなら、上記のトレードオフを踏まえた一つの妥当な目安として、以下を紹介します——実際の必要性によっては別の答えが正しいこともあり、以下のいずれも PromptQuorum によるテストやレビューは行っていません。**',
        items: [
          '一般的なローカルスマートホーム（Home Assistant と少数の Zigbee/Matter デバイス）：Intel N150 ミニPC が無難な既定の選択です——後でカメラを追加しても Frigate をカバーできます。',
          'Home Assistant＋カメラ＋小型のローカルAIアシスタント：RAM 32GB の Ryzen ミニPC が妥当な一台構成です——実用的な速度で8Bクラスの LLM を実際に動かせる最も安い選択肢です。',
          '本格的なローカルAI（32Bクラス以上のモデル）：Home Assistant のハブとは切り離した独立の RTX 3090 サーバーが、現在の中古GPU価格を踏まえた妥当な上位構成です。',
          '新規のAI優先の構築は、2026年の Pi の価格とLLM性能の限界を踏まえると、Raspberry Pi との相性が総じて弱くなります——価格差はミニPCの方が近く、AIプラットフォームとしてはずっと優れているのが通常です。',
        ],
      },
      stacks: {
        id: 'stacks',
        title: 'ローカルスマートホームの完全な構成例',
        content:
          '**多くの購入者には複数の製品が必要です——最低でもハブ、Frigate 加速器、ストレージ、そしてローカルLLM推論をしたいなら追加でAI機。** 以下の3つの構成は、上記のおすすめをシナリオ別にまとめたものです。各製品はページ前半のより詳しいおすすめにリンクしています。',
        columns: ['構成', 'ハブ', 'Frigate 加速器', 'AI', '目安合計（2026年8月）'],
        rows: [
          { '構成': 'スターター（HAのみ）', 'ハブ': '[Home Assistant Green または Pi 5](#raspberry-pi)', 'Frigate 加速器': '—', 'AI': '—', '目安合計（2026年8月）': '約30,000〜38,000円' },
          { '構成': 'HA＋カメラ', 'ハブ': '[N150 ミニPC](#mini-pc)', 'Frigate 加速器': '[Intel 内蔵GPU、より余力が欲しいなら Hailo-8L](#frigate-accelerator)', 'AI': '—', '目安合計（2026年8月）': '約22,000〜37,000円' },
          { '構成': 'HA＋カメラ＋ローカルAI', 'ハブ': '[Ryzen ミニPC、32GB](#mini-pc)', 'Frigate 加速器': '内蔵GPU、カメラが多いなら[Hailo-8L](#frigate-accelerator)', 'AI': '同じ機器で稼働（8Bクラスモデル）', '目安合計（2026年8月）': '約95,000〜110,000円' },
          { '構成': 'HA＋カメラ＋大型ローカルAI', 'ハブ': '[N150 ミニPC（信頼性のため分離）](#mini-pc)', 'Frigate 加速器': '[Hailo-8](#frigate-accelerator)', 'AI': '[中古 RTX 3090 サーバー、別稼働](#server)', '目安合計（2026年8月）': '約180,000〜225,000円' },
        ],
        tableFormat: true,
        note: '最後の構成では、Home Assistant のハブを専用の低消費電力機に残し、RTX 3090 は別マシンとして稼働させます——理由は[一台か二台か？](#one-or-two)を参照。',
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Frigate はどんなハードウェアを推奨していますか？', a: '新規構築では、OpenVINO 経由の Intel 内蔵GPU、または検出能力を高める Hailo-8L（約10,000円、低価格）や Hailo-8（約25,000〜30,000円、高速）の M.2 モジュールが推奨されます。Google Coral の USB/M.2 TPU は今も動作しますが現在はレガシー扱いで、非常に低消費電力な構成を除き Frigate は新規インストールには推奨していません。' },
          { q: 'Raspberry Pi でもローカルLLMを動かせますか？', a: 'Pi は非常に小型のモデルを遅く動かせるだけなので、反応の良いローカルLLMアシスタントには不向きです。Home Assistant と基本的な音声はよく動かしますが、ローカルAIには高性能な内蔵GPU または NPU 付きのミニPC、または中古 RTX 3090 搭載機がより良い選択です。' },
          { q: 'RAM はどれくらい必要ですか？', a: 'Home Assistant 単体なら数ギガバイトで動きます。同じ機器で小型のローカルLLMや他のAIサービスを動かすには RAM が多いほど助かります；RAM 32GB で高性能な内蔵GPU/NPU を備えたミニPCは Qwen3 8B や Llama 3.1 8B モデルを反応良く保ちます。動かす予定のモデルサイズに RAM を合わせましょう。' },
          { q: 'どのミニPCを買うべきですか？', a: 'HA＋カメラなら、Intel N100/N150 ミニPC が OpenVINO 経由で Frigate を加速します。HA＋ローカルLLM なら、RAM 32GB の Ryzen ミニPC に上げましょう。候補は Home Assistant＋ローカルAIに最適なミニPCのガイドを参照してください。' },
          { q: '一台ですか、二台ですか？', a: '一台（ミニPC）が最もシンプルで、Home Assistant と小型のローカルLLMを一緒に動かせます。ハブを極めて安定させ、重いAIを中古 RTX 3090 サーバーのような別マシンに任せたい場合は二台に分けましょう。' },
          { q: '24時間稼働の機器で消費電力は重要ですか？', a: '電源を切らないハードウェアでは、消費電力が購入価格より重要になることがあります。Raspberry Pi は数ワット、N100/N150 ミニPC は約10〜15W、Ryzen ミニPC は負荷次第で約15〜35W、RTX 3090 のようなディスクリートGPUは負荷時250W以上になり得ます——これが重いGPUサーバーを常時稼働機ではなく別機にしておくべき理由の一つです。' },
          { q: '2026年の価格でも Raspberry Pi はまだ買う価値がありますか？', a: 'Home Assistant のみなら、はい——今も最も低消費電力な選択肢です。ただし2026年のDRAM不足で Pi 5 の価格は大きく上昇し（2026年8月時点でRAM構成により約22,000〜38,000円、発売時は当時の水準ではるかに安価でした）、Intel N100/N150 ミニPCとの価格差は縮まっています。1年以内にカメラやローカルLLMを追加する可能性があるなら、今はミニPCの方が良い買い物であることが多いです。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — 具体的な候補',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 構成の全体',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — AI機器が何を動かすか',
          '[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm) — クラスター横断：VRAM とハードウェアの詳細',
          '[ローカルLLM向けベストGPU購入ガイド](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 3090 以上のVRAMが必要な場合のより詳しいGPU選び',
          '[クラウドGPUレンタルガイド](/ja/power-local-llm/cloud-gpu-rental-guide-2026) — たまにしか使わないなら購入ではなくレンタルという選択肢',
          '[2026年おすすめバルコニー太陽光バッテリー](/ja/balcony-solar/best-balcony-solar-batteries-2026) — ローカルホームエネルギー設備のためのバッテリーストレージ',
          '[ローカル制御向けベストスマートホームハブ（2027年）](/ja/smart-home/best-smart-home-hubs-2027) — 専用ハブのおすすめ',
          '[NVIDIA Jetson Orin Nanoでスマートホームaiを実現：レビュー（2027年）](/ja/smart-home/nvidia-jetson-orin-nano-smart-home-review) — GPU搭載のローカルAIハードウェア',
          '[最良のZigbee・Thread USBドングル(2027年版)](/ja/smart-home/best-zigbee-thread-dongles-2027) — Zigbee/Thread無線ハードウェア',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルスマートホーム + ローカルAIに最適なハードウェア（2026）',
      description: 'ローカルスマートホーム＋AIの最適ハードウェア（2026年）：Intel N100 ミニPC または Raspberry Pi 5 のハブ、Frigate 加速（Intel 内蔵GPU／Hailo）、SSD ストレージ、LLM 用の上位構成を解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Home Assistant ハードウェア' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'ミニPC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: 'ローカルLLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate はどんなハードウェアを推奨していますか？', acceptedAnswer: { '@type': 'Answer', text: '新規構築では OpenVINO 経由の Intel 内蔵GPU、または Hailo-8L（約10,000円）や Hailo-8（約25,000〜30,000円）の M.2 モジュールが検出能力を高めます。Google Coral の TPU は今も動作しますが現在はレガシー扱いで、新規インストールには推奨されません。' } },
        { '@type': 'Question', name: 'Raspberry Pi でもローカルLLMを動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'Pi は非常に小型のモデルを遅く動かせるだけです。Home Assistant と基本的な音声はよく動かしますが、反応の良いローカルLLMアシスタントには高性能な内蔵GPU または NPU 付きのミニPC、または中古 RTX 3090 搭載機が良いです。' } },
        { '@type': 'Question', name: 'RAM はどれくらい必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant 単体なら数ギガバイトで動きます。同じ機器で小型のローカルLLMを動かすには RAM が多いほど助かります；RAM 32GB のミニPCは Qwen3 8B や Llama 3.1 8B モデルを反応良く保ちます。動かす予定のモデルサイズに RAM を合わせましょう。' } },
        { '@type': 'Question', name: 'どのミニPCを買うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'HA＋カメラなら Intel N100/N150 ミニPC が OpenVINO 経由で Frigate を加速します。HA＋ローカルLLM なら RAM 32GB の Ryzen ミニPC に上げましょう。Home Assistant＋ローカルAIに最適なミニPCのガイドを参照してください。' } },
        { '@type': 'Question', name: '一台ですか、二台ですか？', acceptedAnswer: { '@type': 'Answer', text: 'ミニPC一台で Home Assistant と小型のローカルLLMを一緒に動かせます。ハブを極めて安定させ、重いAIを中古 RTX 3090 サーバーのような別マシンに任せたいなら二台に分けましょう。' } },
        { '@type': 'Question', name: '24時間稼働の機器で消費電力は重要ですか？', acceptedAnswer: { '@type': 'Answer', text: '電源を切らないハードウェアでは、消費電力が購入価格より重要になることがあります。Raspberry Pi は数ワット、N100/N150 ミニPC は約10〜15W、Ryzen ミニPC は約15〜35W、RTX 3090 のようなディスクリートGPUは負荷時250W以上になり得ます。' } },
        { '@type': 'Question', name: '2026年の価格でも Raspberry Pi はまだ買う価値がありますか？', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant のみなら、はい。ただし2026年のDRAM不足で Pi 5 の価格はRAM構成により約22,000〜38,000円まで上昇し、発売時よりはるかに高く、Intel N100/N150 ミニPCとの価格差は縮まっています——1年以内にカメラやローカルLLMを追加する可能性があるなら、ミニPCの方が良い選択であることが多いです。' } },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-pt.webp',
    affiliateDisclosure: true,
    title: 'Melhor Hardware para uma Casa Inteligente Local + IA Local (2026)',
    seoTitle: 'Melhor Hardware: Casa Inteligente Local + IA (2026)',
    intro:
      'O melhor hardware para uma casa inteligente local segue uma única decisão: um mini PC Intel N100/N150 ou uma Raspberry Pi 5 roda o hub Home Assistant, uma iGPU Intel (OpenVINO) ou um módulo Hailo-8L M.2 acelera a detecção de câmeras do Frigate, um SSD ou NAS armazena as gravações, e um servidor com RTX 3090 usada é o passo seguinte para rodar um LLM local. Este guia escolhe cada camada, com preços atualizados para 2026, e ajuda você a decidir entre só-HA e HA-mais-IA para comprar uma vez, não duas.',
    metaDescription:
      'Melhor hardware para casa inteligente local + IA em 2026: hub mini PC Intel N100 ou Raspberry Pi 5, acelerador do Frigate (iGPU Intel/Hailo), armazenamento SSD e um passo seguinte para LLM. Preços atualizados.',
    twitterDescription:
      'Hardware para casa inteligente local em 2026: hub mini PC Intel N100 ou Pi 5, acelerador do Frigate (iGPU Intel/Hailo-8L), armazenamento SSD, RTX 3090 usada para um LLM local. Preços atualizados de 2026.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores escolhendo hardware para Home Assistant e IA local',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'melhor hardware home assistant ia local',
      'home assistant hardware',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'servidor casa inteligente local',
    ],
    leadAnswerBlock:
      '**Monte uma casa inteligente local em quatro camadas: o hub (mini PC Intel N100/N150 ou Raspberry Pi 5), um acelerador para o Frigate (iGPU Intel via OpenVINO ou um módulo Hailo-8L M.2), armazenamento (um SSD, ou um NAS para muitas câmeras) e — se você quiser um LLM local — um equipamento de passo seguinte, como uma RTX 3090 usada.** Para o Home Assistant sozinho, uma Raspberry Pi basta; o fator decisivo é se você adiciona detecção de câmeras e IA local. Já sabe o seu objetivo? Vá direto para [qual hardware comprar para cada configuração](#quick-picks).',
    quickAnswerTop: {
      pt: {
        question: 'Qual hardware preciso para uma casa inteligente local com IA?',
        answer:
          'Comece pelo hub: um mini PC Intel N100/N150 ou uma Raspberry Pi 5 roda o Home Assistant. Adicione um acelerador para o Frigate cuidar das câmeras — uma iGPU Intel via OpenVINO cobre a maioria das configurações, e um módulo Hailo-8L ou Hailo-8 M.2 adiciona capacidade de detecção (o Google Coral já é legado). Armazene as gravações em um SSD, ou em um NAS para muitas câmeras. Para um LLM local, suba para um mini PC com iGPU/NPU capaz ou um servidor com RTX 3090 usada. Se você acha que vai adicionar IA local dentro de um ano, compre o mini PC agora em vez de uma Raspberry Pi que você vai substituir depois.',
        bullets: [
          'Hub: mini PC Intel N100/N150 ou Raspberry Pi 5',
          'Frigate: iGPU Intel (OpenVINO) ou Hailo-8L M.2 — o Coral já é legado',
          'Armazenamento: SSD, ou um NAS para muitas câmeras',
          'Passo seguinte para LLM local: iGPU/NPU do mini PC ou RTX 3090 usada',
          'Se você pode adicionar IA local dentro de um ano, compre o mini PC agora — sai mais barato do que comprar uma Raspberry Pi e trocar depois',
          'Decida primeiro: só-HA ou HA + câmeras + IA local — isso define se você compra uma vez ou duas',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Qual Hardware Comprar?', anchor: 'quick-picks' },
      { label: 'O que o hub precisa', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'Acelerador do Frigate', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Servidor dedicado', anchor: 'server' },
      { label: 'Não gaste demais', anchor: 'dont-overspend' },
      { label: 'Consumo de energia', anchor: 'power' },
      { label: 'Um equipamento ou dois?', anchor: 'one-or-two' },
      { label: 'Só-HA vs HA + IA', anchor: 'picking' },
      { label: 'Uma recomendação geral de compra', anchor: 'what-id-buy' },
      { label: 'Configurações completas', anchor: 'stacks' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Um mini PC Intel N100/N150 ou uma Raspberry Pi 5 roda o hub; adicione uma iGPU Intel ou um Hailo-8L para o Frigate, um SSD ou NAS para armazenamento, e um servidor com RTX 3090 usada se você quiser um LLM local.' },
      { type: 'plain-terms', content: 'O software do hub (Home Assistant) é leve e roda em um computador pequeno como uma Raspberry Pi. A detecção de câmeras (Frigate) precisa de um acelerador — um chip gráfico Intel via OpenVINO, ou um módulo Hailo M.2. Adicionar um modelo de linguagem local exige ainda mais potência, e é aí que entram um mini PC com um chip gráfico capaz, ou uma placa de vídeo usada como a RTX 3090.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Hub: um mini PC Intel N100/N150 (~R$ 2.000–2.300) ou uma Raspberry Pi 5 (~R$ 1.900–3.250 em agosto de 2026, em alta forte por causa de uma escassez de memória DRAM) roda o Home Assistant',
          'Frigate: uma iGPU Intel (OpenVINO, embutida na maioria dos mini PCs), um módulo Hailo-8L M.2 (~R$ 750) ou Hailo-8 M.2 (~R$ 1.800–2.100) acelera a detecção de câmeras — o Google Coral já é legado e não é mais a recomendação do Frigate para novas montagens',
          'Armazenamento: um SSD para as gravações, ou um NAS (Synology DS225+ ~R$ 3.600, DS925+ ~R$ 6.800, UGREEN NASync ~R$ 6.900–7.800) a partir de várias câmeras',
          'Passo seguinte para LLM local: um mini PC Ryzen (32GB de RAM, ~R$ 6.900) ou um servidor com RTX 3090 usada (~R$ 11.200–13.800 em agosto de 2026 — os preços subiram bem acima do nível de 2024–2025)',
          'Decida só-HA vs HA + câmeras + IA local antes de comprar — isso muda o equipamento certo, e comprar o mini PC agora é melhor do que trocar a Pi depois',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: 'Qual Hardware Comprar?',
        content:
          '**Combine seu objetivo com um equipamento, não o contrário.** A tabela abaixo mapeia cada objetivo de casa inteligente ao hardware que atende — cada linha leva à recomendação completa mais abaixo na página.',
        columns: ['Seu objetivo', 'Compre isto', 'Preço estimado (ago/2026)'],
        rows: [
          { 'Seu objetivo': 'Só Home Assistant', 'Compre isto': '[Home Assistant Green ou Raspberry Pi 5](#raspberry-pi)', 'Preço estimado (ago/2026)': 'R$ 2.100 (Green) / R$ 1.900–3.250 (Pi 5)' },
          { 'Seu objetivo': 'HA + câmeras Frigate', 'Compre isto': '[Mini PC Intel N100/N150](#mini-pc)', 'Preço estimado (ago/2026)': '~R$ 2.000–2.300' },
          { 'Seu objetivo': 'HA + um LLM local', 'Compre isto': '[Mini PC Ryzen, 32GB de RAM](#mini-pc)', 'Preço estimado (ago/2026)': '~R$ 6.900' },
          { 'Seu objetivo': 'HA + um LLM local maior', 'Compre isto': '[Servidor com RTX 3090 usada](#server)', 'Preço estimado (ago/2026)': '~R$ 11.200–13.800 (só a GPU)' },
        ],
        tableFormat: true,
        note: 'Os preços são atuais em agosto de 2026 e mudam — GPU e memória DRAM têm oscilado bastante este ano. Confira o preço no anúncio antes de comprar.',
        callouts: [
          { type: 'tip', text: 'Ainda não sabe se vai querer IA local? Veja [Não gaste demais](#dont-overspend) antes de comprar o equipamento mais caro.' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'O que o hub precisa',
        content:
          '**O próprio Home Assistant é leve e roda em hardware modesto; as demandas pesadas vêm da detecção de câmeras do Frigate e de um LLM local.** Dimensione o equipamento para o que você vai adicionar, não só para o hub.',
        items: [
          'O hub precisa de pouco processamento para o controle de dispositivos e as automações.',
          'A detecção de objetos do Frigate precisa de um acelerador: uma iGPU Intel via OpenVINO cobre a maioria das configurações, e um módulo Hailo-8L ou Hailo-8 M.2 adiciona capacidade. O TPU Google Coral USB/M.2 ainda funciona, mas já é legado — o Frigate não recomenda mais para novas montagens.',
          'Modelos Whisper maiores e a inferência de LLM local são as cargas mais exigentes — planeje a RAM e uma GPU/NPU em torno delas.',
          'Armazene as gravações de câmera em um SSD; migre para um NAS quando você rodar várias câmeras continuamente.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Uma Raspberry Pi 5 é a forma de menor consumo de rodar o Home Assistant para o uso típico de casa inteligente, mas uma escassez de DRAM em 2026 empurrou os preços das placas para cima com força — a placa de 8GB agora custa cerca de R$ 1.900–2.300 e a de 16GB, R$ 3.000–3.250, ambas bem acima do preço de lançamento original de cerca de R$ 650/R$ 950, e analistas não esperam normalização antes do fim de 2027.** Ela ainda tem dificuldade com inferência de LLM e modelos Whisper grandes.',
        items: [
          'Ótima para controle de dispositivos, automações e uma pequena configuração de voz local.',
          'A inferência de LLM em uma Pi se limita a modelos muito pequenos e lentos — combine com um HAT Hailo-8L M.2 se quiser detecção do Frigate.',
          'Escolha uma Pi 5 se você quer o básico com baixo consumo e tem certeza de que não vai adicionar um LLM local. Se você acha que vai querer IA local no próximo ano, pule a Pi e compre o mini PC agora — custa pouco mais e evita comprar duas vezes.',
          'Para um aparelho pronto para usar, o Home Assistant Green já vem configurado (cerca de R$ 2.100 em 2026, contra um preço de lançamento de R$ 650). O Home Assistant Yellow foi descontinuado em outubro de 2025 — o Green agora é o único hub oficial da própria empresa.',
        ],
        affiliateLinks: [
          { label: 'Ver preço da Raspberry Pi 5 →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: 'R$ 1.900–3.250' },
          { label: 'Ver preço do Home Assistant Green →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: 'R$ 2.100' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (e espaço para um LLM)',
        content:
          '**Um mini PC é a melhor escolha de equipamento único para Home Assistant mais IA local, com RAM suficiente e uma iGPU ou NPU capaz para rodar um LLM pequeno e acelerar o Frigate.** Ele equilibra potência, tamanho e custo, e é a categoria em que vale a pena gastar mais se você quer um único equipamento para as duas funções.',
        items: [
          'Melhor escolha econômica: um mini PC Intel N100/N150 de baixo consumo roda o Home Assistant e acelera o Frigate via iGPU Intel (OpenVINO) — a escolha padrão prática para um equipamento de hub mais câmeras. O Beelink EQ14 (Intel N150, 16GB de RAM) custa em torno de R$ 2.000–2.300 em agosto de 2026 — bom para operação 24 horas e baixo consumo de energia, mas fraco demais para um LLM local.',
          'Melhor escolha para IA local: para um LLM local no mesmo equipamento, suba para um mini PC Ryzen com 32GB de RAM. O Beelink SER8 (Ryzen 7 8845HS) custa em torno de R$ 6.900 em agosto de 2026 e roda um modelo Qwen3 8B ou Llama 3.1 8B via Ollama em velocidade utilizável, junto com Home Assistant e Frigate. Priorize RAM e uma GPU integrada ou NPU capaz para menor latência.',
          'Se você vai comprar um único equipamento para Home Assistant e IA local juntos, o mini PC Ryzen compensa o custo extra em relação ao N150 — é o único dos dois que de fato roda um LLM em velocidade utilizável.',
          'Para escolhas específicas, veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) e, entre clusters, [melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm).',
        ],
        affiliateLinks: [
          { label: 'Ver preço do EQ14 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: 'R$ 2.000–2.300' },
          { label: 'Ver preço do SER8 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: '~R$ 6.900' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: 'Vai rodar câmeras de segurança? Escolha seu acelerador do Frigate',
        content:
          '**O número de câmeras e quanta folga de detecção você precisa é o que decide o acelerador, separadamente de qual equipamento roda o hub.** O Frigate não recomenda mais o Google Coral para novas montagens — agora direciona novos usuários para o Hailo, além da iGPU Intel embutida no host.',
        items: [
          '1–4 câmeras: a iGPU Intel embutida em um mini PC N100/N150, usada via OpenVINO, cobre a maioria das configurações domésticas sem custo extra de hardware.',
          '4–10 câmeras, ou se você quiser mais folga de detecção em hardware não-Intel: um módulo Hailo-8L M.2 (~R$ 750 em agosto de 2026) é a recomendação atual de baixo consumo do Frigate — funciona como o Coral funcionava antes, como uma placa adicional com suporte de primeira linha.',
          '10+ câmeras ou reconhecimentos adicionais mais pesados (reconhecimento facial/de placas além da detecção): um módulo Hailo-8 M.2 (~R$ 1.800–2.100) acrescenta bastante mais throughput.',
          'Já tem um Coral? Ele continua funcionando — isso é só sobre o que comprar em uma montagem nova, não um motivo para trocar um Coral que já funciona.',
        ],
        affiliateLinks: [
          { label: 'Ver preço do Hailo-8L →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: '~R$ 750' },
          { label: 'Ver preço do Hailo-8 →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: '~R$ 1.800–2.100' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Um NAS pode hospedar o Home Assistant em um contêiner ao lado do armazenamento e das gravações do Frigate, se tiver CPU e RAM suficientes — uma boa opção se você já tem um, mas não é o motivo certo para comprar seu primeiro NAS.** Não compre um NAS especificamente para rodar um LLM local: um mini PC dedicado ou um equipamento com GPU é uma plataforma de IA melhor pelo mesmo dinheiro.',
        items: [
          '2–4 câmeras / armazenamento mais leve: o Synology DS225+ (~R$ 3.600 em agosto de 2026) cobre Home Assistant em contêiner mais gravações do Frigate para poucas câmeras.',
          '4–10 câmeras / mais folga: o Synology DS925+ (~R$ 6.800) acrescenta folga de CPU/RAM para mais complementos e câmeras.',
          'Armazenamento mais IA local em um único equipamento: os modelos UGREEN NASync (classe DXP4800 Plus, ~R$ 6.900–7.800) vêm com uma opção de LLM local integrada e hardware mais novo (DDR5, 10GbE sem placa adicional) por um preço parecido com o do DS925+.',
          'A inferência de LLM em um NAS ainda depende muito do hardware dele — a maioria dos NAS não tem uma GPU dedicada capaz, então trate a opção de LLM integrada como um recurso de conveniência, não como substituto do nível RTX 3090 abaixo se você realmente quer um modelo grande.',
        ],
        affiliateLinks: [
          { label: 'Ver preço do DS225+ →', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: '~R$ 3.600' },
          { label: 'Ver preço do DS925+ →', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: '~R$ 6.800' },
          { label: 'Ver preço do UGREEN NASync →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: '~R$ 6.900–7.800' },
        ],
      },
      server: {
        id: 'server',
        title: 'Servidor dedicado (passo seguinte para LLM)',
        content:
          '**Um servidor dedicado com GPU dedicada é o passo seguinte para rodar um LLM local maior ao lado de muitas câmeras.** Ele oferece a maior folga a maior custo e consumo — e o preço das GPUs mudou bastante em 2026, então trate os números abaixo como um retrato do momento, não um valor fixo.',
        items: [
          'Uma RTX 3090 usada (24GB de VRAM) é uma das opções com melhor VRAM por real para LLMs locais, mas seu preço usado subiu com força ao longo de 2026, para cerca de R$ 11.200–13.800 em agosto — bem acima dos R$ 6.000–8.000 de 2024–2025. Modelos com quantização Q4 de até cerca de 70B podem ser possíveis dependendo da quantização, do tamanho de contexto e do offloading; trate isso como uma faixa de capacidade, não uma garantia para todo modelo de 70B.',
          'Uma RTX 3060 usada (12GB) é a alternativa econômica para um equipamento com GPU dedicada, custando hoje cerca de R$ 2.300–3.100 usada em agosto de 2026 — dá conta bem de modelos de 7B–13B, sem a folga de VRAM (nem o preço) da RTX 3090.',
          'Melhor para muitas câmeras, um LLM maior e vários usuários. Maior consumo e custo que um mini PC — veja a seção de consumo de energia abaixo antes de investir nesse nível.',
          'Exagero para uma casa inteligente básica — reserve para uso intenso de IA local, e mantenha o hub do Home Assistant em um equipamento separado de baixo consumo para mais confiabilidade (veja Um equipamento ou dois? abaixo).',
        ],
        affiliateLinks: [
          { label: 'Ver anúncios de RTX 3090 usada →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: '~R$ 11.200–13.800' },
          { label: 'Ver anúncios de RTX 3060 usada →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: '~R$ 2.300–3.100' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-pt.svg',
        imageCaption: 'Capacidade de LLM local por nível de hardware: um Raspberry Pi 5 só roda modelos minúsculos, um mini PC Intel N100/N150 lida com modelos pequenos, um mini PC Ryzen (32GB de RAM) roda modelos de 7B–8B, e uma RTX 3090 usada (24GB de VRAM) chega a cerca de 70B em quantização Q4 dependendo da configuração.',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: 'Não gaste demais no seu servidor do Home Assistant',
        content:
          '**Comprar mais hardware do que o seu caso de uso precisa é a compra desperdiçada mais comum nessa categoria — combine o equipamento com o que você realmente pretende rodar.**',
        items: [
          'Só Home Assistant? Você não precisa de uma GPU RTX, e provavelmente nem de um mini PC — uma Raspberry Pi 5 ou um Home Assistant Green já dá conta.',
          'Home Assistant mais câmeras do Frigate? Você não precisa de uma estação de trabalho cara — um mini PC Intel N100/N150 com a iGPU embutida já basta para a maioria das quantidades de câmeras domésticas.',
          'Home Assistant mais um LLM local pequeno? Um mini PC Ryzen de 32GB já é suficiente para um modelo classe 8B — você ainda não precisa de uma GPU dedicada.',
          'Quer um LLM local grande (32B para cima)? É aí que uma GPU dedicada, como uma RTX 3090 usada, realmente compensa o custo.',
        ],
      },
      power: {
        id: 'power',
        title: 'Consumo de energia importa para um equipamento 24 horas',
        content:
          '**Esse hardware roda continuamente, então, para um equipamento que nunca desliga, o custo de energia ao longo de um ano pode importar tanto quanto o preço de compra.** Aproximadamente, em ordem de consumo típico:',
        columns: ['Hardware', 'Papel típico', 'Consumo de energia', 'Melhor para'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Papel típico': 'Só hub', 'Consumo de energia': 'Muito baixo (poucos watts)', 'Melhor para': 'Home Assistant' },
          { 'Hardware': 'Mini PC Intel N100/N150', 'Papel típico': 'Hub + Frigate', 'Consumo de energia': 'Baixo (~10–15W típico)', 'Melhor para': 'Hub + câmeras 24 horas' },
          { 'Hardware': 'Mini PC Ryzen (32GB)', 'Papel típico': 'Hub + Frigate + LLM pequeno', 'Consumo de energia': 'Moderado (~15–35W típico, mais sob carga de LLM)', 'Melhor para': 'IA local em um equipamento' },
          { 'Hardware': 'Servidor RTX 3090', 'Papel típico': 'IA local pesada', 'Consumo de energia': 'Alto (só a GPU pode consumir 250W+ sob carga)', 'Melhor para': 'Modelos grandes, não 24 horas ocioso' },
        ],
        tableFormat: true,
        note: 'Para um servidor que roda 24 horas, o consumo de energia pode importar mais que o preço inicial de compra — uma GPU de 250W rodando continuamente pesa bem mais na conta de luz do que um mini PC de 10W. Esse é um motivo para manter uma GPU pesada como um equipamento separado e ligado sob demanda, em vez de sempre ligado (veja Um equipamento ou dois? abaixo).',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: 'Um equipamento ou dois?',
        content:
          '**Um equipamento é mais simples e mais barato; dois equipamentos protegem a confiabilidade do Home Assistant de uma carga de IA mais pesada.** Qual é o certo depende de quanto você valoriza tempo ativo versus simplicidade.',
        items: [
          'Um equipamento (um único mini PC): o mais simples e barato — um mini PC Ryzen roda Home Assistant, Frigate e um LLM local pequeno juntos. A escolha certa para a maioria das configurações domésticas.',
          'Dois equipamentos (um hub de baixo consumo mais uma máquina de IA separada): mantém o Home Assistant ultraconfiável em um equipamento de baixo consumo que raramente precisa reiniciar, enquanto o trabalho de IA mais pesado — um servidor com RTX 3090 usada, por exemplo — roda e pode ser reiniciado de forma independente, sem derrubar suas automações junto.',
          'Escolha dois equipamentos se você usa o Home Assistant para qualquer coisa relevante para segurança (fechaduras, alarmes, aquecimento) e quer manter essa camada isolada de um equipamento com GPU que você talvez reinicie, atualize ou use para testes.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Escolher para só-HA vs HA + IA',
        content:
          '**Escolha uma Pi para só-HA e um mini PC para HA mais IA local — essa única decisão define o hardware certo.** Ajuste o equipamento à carga de trabalho, não o contrário.',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-pt.svg',
        imageCaption: 'Árvore de decisão para hardware de casa inteligente: adicionar câmeras Frigate e um LLM local leva a quatro montagens — Raspberry Pi 5, mini PC Intel N100/N150, mini PC Ryzen (32GB de RAM) ou um servidor RTX 3090 (24GB de VRAM).',
        columns: ['Hardware', 'Preço relativo', 'Só-HA', 'Pode rodar um LLM local', 'Aceleração do Frigate'],
        rows: [
          { 'Hardware': 'Raspberry Pi 5', 'Preço relativo': 'Baixo', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Só muito pequenos, lento', 'Aceleração do Frigate': 'HAT Hailo-8L M.2' },
          { 'Hardware': 'Mini PC Intel N100/N150', 'Preço relativo': 'Médio', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Modelos pequenos', 'Aceleração do Frigate': 'iGPU Intel (OpenVINO)' },
          { 'Hardware': 'Mini PC Ryzen', 'Preço relativo': 'Médio', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Sim (7B–8B)', 'Aceleração do Frigate': 'iGPU ou Hailo M.2' },
          { 'Hardware': 'NAS', 'Preço relativo': 'Médio–alto', 'Só-HA': 'Sim (contêiner)', 'Pode rodar um LLM local': 'Depende do hardware', 'Aceleração do Frigate': 'Depende do modelo' },
          { 'Hardware': 'Servidor + RTX 3090 usada', 'Preço relativo': 'Alto', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Sim (até ~70B, dependendo da quantização)', 'Aceleração do Frigate': 'GPU dedicada' },
        ],
        note: 'Para o consumo de energia por nível, veja [Consumo de energia](#power) acima; para saber se vale rodar tudo em um único equipamento, veja [Um equipamento ou dois?](#one-or-two).',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: 'Uma recomendação geral de compra para 2026',
        content:
          '**Se você está escolhendo um único equipamento hoje e não tem certeza de qual nível se encaixa, esta é uma base razoável considerando as trocas acima — sua necessidade real pode apontar para outro lado, e nenhuma das indicações abaixo foi testada ou avaliada pela PromptQuorum.**',
        items: [
          'Para uma casa inteligente local comum (Home Assistant mais alguns dispositivos Zigbee/Matter): um mini PC Intel N150 é um padrão sensato — ele também cobre o Frigate se você adicionar câmeras depois.',
          'Para Home Assistant mais câmeras mais um pequeno assistente de IA local: um mini PC Ryzen com 32GB de RAM é uma escolha razoável de equipamento único — é o mais barato que de fato roda um LLM classe 8B em velocidade utilizável.',
          'Para IA local a sério (modelos classe 32B ou maiores): um servidor RTX 3090 separado, mantido à parte do hub do Home Assistant, é o passo seguinte razoável dado o preço atual de GPUs usadas.',
          'Uma instalação nova voltada para IA em geral combina menos com uma Raspberry Pi, considerando os preços da Pi em 2026 e suas limitações de LLM — um mini PC costuma ter preço parecido e ser uma plataforma de IA muito melhor.',
        ],
      },
      stacks: {
        id: 'stacks',
        title: 'Configurações completas de casa inteligente local',
        content:
          '**A maioria dos compradores precisa de mais de um produto — no mínimo um hub, um acelerador do Frigate e armazenamento, mais um equipamento de IA se você quiser inferência de LLM local.** Estas três configurações combinam as indicações acima por cenário; cada produto leva de volta à sua recomendação completa mais acima nesta página.',
        columns: ['Configuração', 'Hub', 'Acelerador do Frigate', 'IA', 'Total estimado (ago/2026)'],
        rows: [
          { 'Configuração': 'Iniciante (só HA)', 'Hub': '[Home Assistant Green ou Pi 5](#raspberry-pi)', 'Acelerador do Frigate': '—', 'IA': '—', 'Total estimado (ago/2026)': '~R$ 2.100–3.250' },
          { 'Configuração': 'HA + câmeras', 'Hub': '[Mini PC N150](#mini-pc)', 'Acelerador do Frigate': '[iGPU Intel, ou Hailo-8L para mais folga](#frigate-accelerator)', 'IA': '—', 'Total estimado (ago/2026)': '~R$ 2.000–3.100' },
          { 'Configuração': 'HA + câmeras + IA local', 'Hub': '[Mini PC Ryzen, 32GB](#mini-pc)', 'Acelerador do Frigate': 'iGPU embutida, ou [Hailo-8L para mais câmeras](#frigate-accelerator)', 'IA': 'Roda no mesmo equipamento (modelo classe 8B)', 'Total estimado (ago/2026)': '~R$ 6.900–7.700' },
          { 'Configuração': 'HA + câmeras + IA local grande', 'Hub': '[Mini PC N150 (mantido separado por confiabilidade)](#mini-pc)', 'Acelerador do Frigate': '[Hailo-8](#frigate-accelerator)', 'IA': '[Servidor com RTX 3090 usada, rodando separado](#server)', 'Total estimado (ago/2026)': '~R$ 14.700–18.100' },
        ],
        tableFormat: true,
        note: 'A última configuração mantém o hub do Home Assistant em seu próprio equipamento de baixo consumo e roda a RTX 3090 como uma máquina separada — veja [Um equipamento ou dois?](#one-or-two) para entender o motivo.',
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual hardware o Frigate recomenda?', a: 'Para novas montagens, o Frigate recomenda uma iGPU Intel via OpenVINO, ou um módulo Hailo-8L (~R$ 750, econômico) ou Hailo-8 (~R$ 1.800–2.100, mais rápido) M.2 para mais capacidade de detecção. O TPU Google Coral USB/M.2 ainda funciona, mas já é legado — o Frigate não recomenda mais para novas instalações, exceto em hardware de consumo muito baixo.' },
          { q: 'Uma Raspberry Pi também pode rodar um LLM local?', a: 'Uma Pi só consegue rodar modelos muito pequenos, e devagar, então não é ideal para um assistente de LLM local responsivo. Ela dá conta bem do Home Assistant e da voz básica, mas para IA local um mini PC com uma iGPU ou NPU capaz — ou um servidor com RTX 3090 usada — é a melhor escolha.' },
          { q: 'De quanta RAM eu preciso?', a: 'O Home Assistant sozinho roda em poucos gigabytes. Para rodar um LLM local pequeno e outros serviços de IA no mesmo equipamento, mais RAM ajuda; um mini PC com 32GB de RAM e uma iGPU/NPU capaz mantém um modelo Qwen3 8B ou Llama 3.1 8B responsivo. Ajuste a RAM ao tamanho do modelo que você planeja rodar.' },
          { q: 'Qual mini PC eu deveria comprar?', a: 'Para HA mais câmeras, um mini PC Intel N100/N150 acelera o Frigate via OpenVINO. Para HA mais um LLM local, suba para um mini PC Ryzen com 32GB de RAM. Veja o guia dos melhores mini PCs para Home Assistant + IA local para escolhas específicas.' },
          { q: 'Um equipamento ou dois?', a: 'Um equipamento (um mini PC) é o mais simples e roda o Home Assistant mais um LLM local pequeno juntos. Divida em dois se você quiser manter o hub ultraconfiável em um equipamento de baixo consumo e descarregar a IA pesada para uma máquina separada, como um servidor com RTX 3090 usada.' },
          { q: 'O consumo de energia importa para um equipamento 24 horas?', a: 'Importa mais do que o preço de compra para hardware que nunca desliga. Uma Raspberry Pi consome poucos watts, um mini PC N100/N150 cerca de 10–15W, um mini PC Ryzen entre 15–35W dependendo da carga, e uma GPU dedicada como a RTX 3090 pode consumir 250W ou mais sob carga — um motivo para rodar um servidor com GPU pesada como um equipamento separado, em vez de sempre ligado.' },
          { q: 'Uma Raspberry Pi ainda vale a pena com os preços de 2026?', a: 'Só para Home Assistant, sim — ainda é a opção de menor consumo. Mas uma escassez de DRAM em 2026 empurrou os preços da Pi 5 para cima (cerca de R$ 1.900–3.250 dependendo da RAM, em agosto de 2026, contra um valor original de R$ 650–950), diminuindo a diferença de preço para um mini PC N100/N150. Se você pode adicionar câmeras ou um LLM local dentro de um ano, o mini PC costuma ser a compra melhor agora.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — escolhas específicas',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o stack completo',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — o que o equipamento de IA roda',
          '[Melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm) — entre clusters: VRAM e detalhe de hardware',
          '[Guia de compra da melhor GPU para LLM local](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — escolhas de GPU mais aprofundadas se você precisa de mais VRAM que uma RTX 3090',
          '[Guia de aluguel de GPU na nuvem](/pt/power-local-llm/cloud-gpu-rental-guide-2026) — alugar tempo de GPU em vez de comprar, se você só precisa ocasionalmente',
          '[Melhores baterias de solar de varanda 2026](/pt/balcony-solar/best-balcony-solar-batteries-2026) — armazenamento em bateria para sua configuração local de energia doméstica',
          '[Os melhores hubs de casa inteligente para controle local (2027)](/pt/smart-home/best-smart-home-hubs-2027) — hubs dedicados recomendados',
          '[NVIDIA Jetson Orin Nano para IA em casa inteligente: análise (2027)](/pt/smart-home/nvidia-jetson-orin-nano-smart-home-review) — hardware de IA local com GPU',
          '[Os melhores dongles USB Zigbee e Thread (2027)](/pt/smart-home/best-zigbee-thread-dongles-2027) — hardware de rádio para Zigbee e Thread',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhor Hardware para uma Casa Inteligente Local + IA Local (2026)',
      description: 'Melhor hardware para casa inteligente local + IA em 2026: hub mini PC Intel N100 ou Raspberry Pi 5, acelerador do Frigate (iGPU Intel/Hailo), armazenamento SSD e um passo seguinte para LLM.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'pt',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Hardware do Home Assistant' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: 'LLM local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt',
      mainEntity: [
        { '@type': 'Question', name: 'Qual hardware o Frigate recomenda?', acceptedAnswer: { '@type': 'Answer', text: 'Para novas montagens, o Frigate recomenda uma iGPU Intel via OpenVINO, ou um módulo Hailo-8L (~R$ 750) ou Hailo-8 (~R$ 1.800–2.100) M.2 para mais capacidade de detecção. O TPU Google Coral ainda funciona, mas já é legado e não é mais recomendado para novas instalações.' } },
        { '@type': 'Question', name: 'Uma Raspberry Pi também pode rodar um LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Uma Pi só consegue rodar modelos muito pequenos e devagar. Ela dá conta bem do Home Assistant e da voz básica, mas para um assistente de LLM local responsivo um mini PC com iGPU ou NPU capaz, ou um servidor com RTX 3090 usada, é melhor.' } },
        { '@type': 'Question', name: 'De quanta RAM eu preciso?', acceptedAnswer: { '@type': 'Answer', text: 'O Home Assistant sozinho roda em poucos gigabytes. Para rodar um LLM local pequeno no mesmo equipamento, mais RAM ajuda; um mini PC com 32GB de RAM mantém um modelo Qwen3 8B ou Llama 3.1 8B responsivo. Ajuste a RAM ao tamanho do modelo que você planeja rodar.' } },
        { '@type': 'Question', name: 'Qual mini PC eu deveria comprar?', acceptedAnswer: { '@type': 'Answer', text: 'Para HA mais câmeras, um mini PC Intel N100/N150 acelera o Frigate via OpenVINO. Para HA mais um LLM local, suba para um mini PC Ryzen com 32GB de RAM. Veja o guia dos melhores mini PCs para Home Assistant + IA local.' } },
        { '@type': 'Question', name: 'Um equipamento ou dois?', acceptedAnswer: { '@type': 'Answer', text: 'Um mini PC roda o Home Assistant mais um LLM local pequeno juntos. Divida em dois se quiser o hub ultraconfiável em um equipamento de baixo consumo e a IA pesada descarregada para uma máquina separada, como um servidor com RTX 3090 usada.' } },
        { '@type': 'Question', name: 'O consumo de energia importa para um equipamento 24 horas?', acceptedAnswer: { '@type': 'Answer', text: 'Importa mais do que o preço de compra para hardware que nunca desliga. Uma Raspberry Pi consome poucos watts, um mini PC N100/N150 cerca de 10–15W, um mini PC Ryzen cerca de 15–35W, e uma GPU dedicada como a RTX 3090 pode consumir 250W ou mais sob carga.' } },
        { '@type': 'Question', name: 'Uma Raspberry Pi ainda vale a pena com os preços de 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Só para Home Assistant, sim. Mas uma escassez de DRAM em 2026 empurrou os preços da Pi 5 para cerca de R$ 1.900–3.250 dependendo da RAM, contra um valor original de R$ 650–950, diminuindo a diferença para um mini PC N100/N150 — que é a melhor compra se você pode adicionar câmeras ou um LLM local dentro de um ano.' } },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-08-25',
    next_refresh_due: '2027-02-25',
    theme: 'Local-First Smart Home',
    heroImage: '/images/best-hardware-for-local-smart-home-overview-hero-zh.webp',
    affiliateDisclosure: true,
    title: '本地智能家居 + 本地 AI 的最佳硬件（2026）',
    seoTitle: '最佳硬件：本地智能家居 + AI（2026）',
    intro:
      '本地智能家居的最佳硬件遵循一个思路：用 Intel N100/N150 迷你 PC 或 Raspberry Pi 5 运行 Home Assistant 中枢，用 Intel 集成显卡（OpenVINO）或 Hailo-8L M.2 模块加速 Frigate 摄像头检测，用 SSD 或 NAS 存储录像，若想运行本地 LLM，则用二手 RTX 3090 主机升级。本指南逐层给出选择，按 2026 年最新价格标注每一档，并帮你在仅-HA 与 HA-加-AI 之间做决定，让你一次买对，而不是买两次。',
    metaDescription:
      '2026年本地智能家居 + AI 硬件推荐：Intel N100 迷你 PC 或 Raspberry Pi 5 中枢，Frigate 加速方案（Intel 集成显卡/Hailo），SSD 存储，以及本地 LLM 升级选项。含最新价格。',
    twitterDescription:
      '2026本地智能家居硬件：Intel N100 迷你 PC 或 Pi 5 中枢，Frigate 加速用 Intel 集成显卡或 Hailo-8L，SSD 存储，二手 RTX 3090 跑本地 LLM。2026年最新价格。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    audience: '为运行 Home Assistant 和本地 AI 选购硬件的人',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      '最佳硬件 home assistant 本地ai',
      'home assistant 硬件',
      '迷你pc home assistant 本地llm',
      'raspberry pi 对 迷你pc home assistant',
      '本地 智能家居 服务器',
    ],
    leadAnswerBlock:
      '**本地智能家居分四层搭建：中枢（Intel N100/N150 迷你 PC 或 Raspberry Pi 5）、Frigate 加速器（经由 OpenVINO 的 Intel 集成显卡，或 Hailo-8L M.2 模块）、存储（SSD，摄像头多则用 NAS），以及——如果你想要本地 LLM——一台升级主机，例如二手 RTX 3090。** 仅运行 Home Assistant 的话，Raspberry Pi 就够用；决定性因素是你是否要加入摄像头检测和本地 AI。已经明确目标了？直接跳到[各类配置该买什么硬件](#quick-picks)。',
    quickAnswerTop: {
      zh: {
        question: '带 AI 的本地智能家居需要什么硬件？',
        answer:
          '先从中枢开始：Intel N100/N150 迷你 PC 或 Raspberry Pi 5 运行 Home Assistant。再为摄像头加一个 Frigate 加速器——经由 OpenVINO 的 Intel 集成显卡能覆盖大多数配置，Hailo-8L 或 Hailo-8 M.2 模块可提升检测容量（Google Coral 现已过时）。录像存到 SSD，摄像头多的话用 NAS。要跑本地 LLM，就升级到带强力集成显卡/NPU 的迷你 PC，或一台二手 RTX 3090 主机。如果你觉得一年内会加入本地 AI，现在就直接买迷你 PC，而不是买 Raspberry Pi 以后再换。',
        bullets: [
          '中枢：Intel N100/N150 迷你 PC 或 Raspberry Pi 5',
          'Frigate：Intel 集成显卡（OpenVINO）或 Hailo-8L M.2——Coral 已过时',
          '存储：SSD，摄像头多则用 NAS',
          '本地 LLM 升级：迷你 PC 集成显卡/NPU 或二手 RTX 3090',
          '如果一年内可能加装本地 AI，现在直接买迷你 PC——比买 Raspberry Pi 之后再换划算',
          '先决定：仅-HA 还是 HA + 摄像头 + 本地 AI——这决定你是买一次还是买两次',
        ],
        updatedDate: '2026-08',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '该买什么硬件？', anchor: 'quick-picks' },
      { label: '中枢需要什么', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: '迷你 PC', anchor: 'mini-pc' },
      { label: 'Frigate 加速器', anchor: 'frigate-accelerator' },
      { label: 'NAS', anchor: 'nas' },
      { label: '专用服务器', anchor: 'server' },
      { label: '别买多了', anchor: 'dont-overspend' },
      { label: '功耗', anchor: 'power' },
      { label: '一台还是两台？', anchor: 'one-or-two' },
      { label: '仅-HA 对 HA + AI', anchor: 'picking' },
      { label: '总体购买建议', anchor: 'what-id-buy' },
      { label: '完整方案组合', anchor: 'stacks' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Intel N100/N150 迷你 PC 或 Raspberry Pi 5 运行中枢；Frigate 加 Intel 集成显卡或 Hailo-8L，存储用 SSD 或 NAS，想要本地 LLM 就上二手 RTX 3090 主机。' },
      { type: 'plain-terms', content: '中枢软件（Home Assistant）很轻量，可在 Raspberry Pi 这样的小电脑上运行。摄像头检测（Frigate）需要加速器——经由 OpenVINO 的 Intel 显示芯片，或一块 Hailo M.2 模块。加入本地语言模型则需要更强的算力，这正是带强力显示芯片的迷你 PC，或二手显卡如 RTX 3090 派上用场的地方。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '中枢：Intel N100/N150 迷你 PC（约 190–220 美元）或 Raspberry Pi 5（截至 2026 年 8 月约 180–305 美元，受内存芯片短缺影响大幅涨价）运行 Home Assistant',
          'Frigate：Intel 集成显卡（内置于大多数迷你 PC，经由 OpenVINO）、Hailo-8L M.2 模块（约 70 美元）或 Hailo-8 M.2（约 170–200 美元）加速摄像头检测——Google Coral 现已过时，不再是 Frigate 对新搭建的推荐',
          '存储：录像用 SSD，摄像头多起来（Synology DS225+ 约 340 美元、DS925+ 约 640 美元、UGREEN NASync 约 650–730 美元）后再上 NAS',
          '本地 LLM 升级：Ryzen 迷你 PC（32GB 内存，约 649 美元）或二手 RTX 3090 主机（截至 2026 年 8 月约 1,050–1,300 美元，价格已明显高于 2024–2025 年水平）',
          '购买前先决定仅-HA 还是 HA + 摄像头 + 本地 AI——这会改变合适的设备，现在直接买迷你 PC 比以后换掉 Pi 更划算',
        ],
      },
      quickPicks: {
        id: 'quick-picks',
        title: '该买什么硬件？',
        content:
          '**先明确目标，再挑设备，而不是反过来。** 下表把每种智能家居目标对应到能覆盖它的硬件——每一行都链接到本页后面更详细的推荐。',
        columns: ['你的目标', '该买', '预估价格（2026年8月）'],
        rows: [
          { '你的目标': '仅 Home Assistant', '该买': '[Home Assistant Green 或 Raspberry Pi 5](#raspberry-pi)', '预估价格（2026年8月）': '199 美元（Green）/ 180–305 美元（Pi 5）' },
          { '你的目标': 'HA + Frigate 摄像头', '该买': '[Intel N100/N150 迷你 PC](#mini-pc)', '预估价格（2026年8月）': '约 190–220 美元' },
          { '你的目标': 'HA + 本地 LLM', '该买': '[Ryzen 迷你 PC，32GB 内存](#mini-pc)', '预估价格（2026年8月）': '约 649 美元' },
          { '你的目标': 'HA + 更大的本地 LLM', '该买': '[二手 RTX 3090 服务器](#server)', '预估价格（2026年8月）': '约 1,050–1,300 美元（仅 GPU）' },
        ],
        tableFormat: true,
        note: '以上价格为 2026 年 8 月的当前水平，会持续变化——尤其是 GPU 和内存芯片价格今年波动很大。下单前请核对链接页面的实际价格。',
        callouts: [
          { type: 'tip', text: '还不确定要不要上本地 AI？买贵的设备之前，先看看[别买多了](#dont-overspend)。' },
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: '中枢需要什么',
        content:
          '**Home Assistant 本身很轻量，在普通硬件上即可运行；繁重需求来自 Frigate 摄像头检测和本地 LLM。** 按你要添加的内容来选设备，而不仅是中枢本身。',
        items: [
          '中枢在设备控制和自动化上几乎不需要算力。',
          'Frigate 物体检测需要加速器：经由 OpenVINO 的 Intel 集成显卡能处理大多数配置，Hailo-8L 或 Hailo-8 M.2 模块可提升容量。Google Coral USB/M.2 TPU 仍能用，但现已过时——Frigate 不再为新搭建推荐它。',
          '更大的 Whisper 模型和本地 LLM 推理是最吃力的工作负载——围绕它们规划内存和 GPU/NPU。',
          '录像存到 SSD；连续运行多个摄像头后再迁移到 NAS。',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**对典型智能家居用途而言，Raspberry Pi 5 是运行 Home Assistant 最省电的方式，但 2026 年的内存芯片短缺已让开发板价格大幅上涨——8GB 版本现在约 180–220 美元，16GB 版本约 280–305 美元，都远高于原先约 80/120 美元的首发价，分析师预计要到 2027 年末才会恢复正常。** 它在 LLM 推理和大型 Whisper 模型上仍然吃力。',
        items: [
          '非常适合设备控制、自动化以及小规模本地语音配置。',
          'Pi 上的 LLM 推理仅限非常小且缓慢的模型——如果想要 Frigate 检测，可搭配 Hailo-8L M.2 HAT。',
          '若想以低功耗实现基础功能，且确定不会加装本地 LLM，就选 Pi 5。如果你觉得一年内可能想要本地 AI，直接跳过 Pi，现在就买迷你 PC——只多花一点钱，却能省下以后再买一次的成本。',
          '想要即插即用的成品，Home Assistant Green 出厂即可运行（2026 年约 199 美元，高于 99 美元的首发价）。Home Assistant Yellow 已于 2026 年 10 月停产——Green 现在是唯一的官方原厂中枢。',
        ],
        affiliateLinks: [
          { label: '查看 Raspberry Pi 5 价格 →', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer', priceRange: '180–305 美元' },
          { label: '查看 Home Assistant Green 价格 →', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub', priceRange: '199 美元' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: '迷你 PC（以及给 LLM 留出空间）',
        content:
          '**迷你 PC 是 Home Assistant 加本地 AI 的最佳单机选择，拥有足够内存以及可运行小型 LLM、加速 Frigate 的强力集成显卡或 NPU。** 它在性能、体积和成本之间取得平衡，如果你打算用一台设备同时干两件事，这一档就是值得多花钱的地方。',
        items: [
          '最佳预算之选：低功耗的 Intel N100/N150 迷你 PC 可运行 Home Assistant，并经由 Intel 集成显卡（OpenVINO）加速 Frigate——是中枢加摄像头这类配置的实用首选。Beelink EQ14（Intel N150，16GB 内存）截至 2026 年 8 月价格约 190–220 美元——适合 24 小时运行且耗电低，但跑本地 LLM 力不从心。',
          '本地 AI 首选：若想在同一台设备上跑本地 LLM，升级到带 32GB 内存的 Ryzen 迷你 PC。Beelink SER8（Ryzen 7 8845HS）截至 2026 年 8 月价格约 649 美元，可经由 Ollama 以可用速度运行 Qwen3 8B 或 Llama 3.1 8B 模型，同时兼顾 Home Assistant 和 Frigate。优先考虑内存和强力集成显卡或 NPU 以降低延迟。',
          '如果你打算用一台设备同时跑 Home Assistant 和本地 AI，Ryzen 迷你 PC 比 N150 多花的钱是值得的——它是两者中唯一能以可用速度真正跑起 LLM 的。',
          '具体选择参见[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)，以及跨集群的[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm)。',
        ],
        affiliateLinks: [
          { label: '查看 EQ14 价格 →', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14 (Intel N150)', productCategory: 'Mini PC', priceRange: '190–220 美元' },
          { label: '查看 SER8 价格 →', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8 (Ryzen 7 8845HS)', productCategory: 'Mini PC', priceRange: '约 649 美元' },
        ],
      },
      frigateAccelerator: {
        id: 'frigate-accelerator',
        title: '要跑安防摄像头？挑选你的 Frigate 加速器',
        content:
          '**摄像头数量和你需要多少检测余量决定加速器该选哪一档，这与中枢跑在哪台设备上是分开的两件事。** Frigate 已不再为新搭建推荐 Google Coral——现在会引导新用户使用 Hailo，或直接用主机自带的 Intel 集成显卡。',
        items: [
          '1–4 个摄像头：N100/N150 迷你 PC 内置的 Intel 集成显卡，经由 OpenVINO 运行，无需额外硬件成本即可覆盖大多数家庭配置。',
          '4–10 个摄像头，或想在非 Intel 硬件上获得更多检测余量：Hailo-8L M.2 模块（截至 2026 年 8 月约 70 美元）是 Frigate 目前的低功耗首选——它像当年的 Coral 一样，是被官方一线支持的扩展卡。',
          '10 个以上摄像头，或需要更强的附加检测（在物体检测之上做人脸/车牌识别）：Hailo-8 M.2 模块（约 170–200 美元）能带来明显更高的吞吐量。',
          '已经有一块 Coral 了？它依然能用——这里只是讨论新搭建该买什么，不是说要换掉一套正常运作的 Coral 方案。',
        ],
        affiliateLinks: [
          { label: '查看 Hailo-8L 价格 →', url: 'https://hailo.ai/products/ai-accelerators/hailo-8l-m-2-ai-acceleration-module-for-ai-light-applications/', productName: 'Hailo-8L M.2', productCategory: 'AI accelerator', priceRange: '约 70 美元' },
          { label: '查看 Hailo-8 价格 →', url: 'https://www.waveshare.com/hailo-8.htm', productName: 'Hailo-8 M.2', productCategory: 'AI accelerator', priceRange: '约 170–200 美元' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**若 NAS 有足够的 CPU 和内存，它可以在容器中运行 Home Assistant，同时兼顾存储和 Frigate 录像——如果你已经有一台，是个不错的选择，但不该只为此专门买一台 NAS。** 不要为了跑本地 LLM 专门买 NAS：专用的迷你 PC 或 GPU 主机在这笔钱上是更好的 AI 平台。',
        items: [
          '2–4 个摄像头 / 存储需求较轻：Synology DS225+（截至 2026 年 8 月约 340 美元）能覆盖容器化 Home Assistant 加上少量摄像头的 Frigate 录像。',
          '4–10 个摄像头 / 需要更多余量：Synology DS925+（约 640 美元）提供更多 CPU/内存余量，支持更多附加项和摄像头。',
          '存储加本地 AI 一体化：UGREEN NASync 系列（DXP4800 Plus 级别，约 650–730 美元）自带本地 LLM 选项，硬件更新（DDR5、无需扩展卡的 10GbE），价格与 DS925+ 接近。',
          'NAS 上的 LLM 推理仍然高度依赖其硬件——大多数 NAS 缺少强力独立 GPU，所以把内置 LLM 选项当作一项便利功能，而不是想跑大模型时替代下方 RTX 3090 那一档的方案。',
        ],
        affiliateLinks: [
          { label: '查看 DS225+ 价格 →', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS', priceRange: '约 340 美元' },
          { label: '查看 DS925+ 价格 →', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS', priceRange: '约 640 美元' },
          { label: '查看 UGREEN NASync 价格 →', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS', priceRange: '约 650–730 美元' },
        ],
      },
      server: {
        id: 'server',
        title: '专用服务器（LLM 升级方案）',
        content:
          '**搭配独立 GPU 的专用服务器，是在运行大量摄像头的同时运行更大本地 LLM 的升级方案。** 它以更高的成本和功耗提供最大的余量——2026 年 GPU 价格波动很大，所以下面的数字只是一个快照，不是固定值。',
        items: [
          '二手 RTX 3090（24GB 显存）是本地 LLM 中性价比最高的显存选项之一，但其二手价在 2026 年大幅上涨，截至 8 月约为 1,050–1,300 美元——远高于 2024–2025 年约 600–800 美元的水平。视量化方式、上下文长度和卸载策略而定，Q4 量化下最高约 70B 的模型或许可行；把这理解为一个能力区间，而不是对每个 70B 模型的保证。',
          '二手 RTX 3060（12GB）是独立 GPU 主机的预算之选，截至 2026 年 8 月二手价约 220–290 美元——能轻松处理 7B–13B 模型，只是没有 RTX 3090 那样的显存余量或对应的高价。',
          '最适合大量摄像头、更大的 LLM 和多个用户的场景。功耗和成本都高于迷你 PC——投入这一档之前请先看下面的功耗部分。',
          '对基础智能家居而言过于强大——留给繁重的本地 AI 用途，并把 Home Assistant 中枢放在单独的低功耗设备上以保证可靠性（见下方"一台还是两台？"）。',
        ],
        affiliateLinks: [
          { label: '查看 RTX 3090 二手行情 →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3090', productName: 'NVIDIA RTX 3090 24GB (used)', productCategory: 'GPU', priceRange: '约 1,050–1,300 美元' },
          { label: '查看 RTX 3060 二手行情 →', url: 'https://www.ebay.com/sch/i.html?_nkw=RTX+3060+12GB', productName: 'NVIDIA RTX 3060 12GB (used)', productCategory: 'GPU', priceRange: '约 220–290 美元' },
        ],
        image: '/images/best-hardware-for-local-smart-home-llm-capacity-zh.svg',
        imageCaption: '各硬件等级的本地 LLM 容量：Raspberry Pi 5 只能运行极小模型，Intel N100/N150 迷你 PC 可处理小型模型，Ryzen 迷你 PC（32GB 内存）可运行 7B–8B 模型，二手 RTX 3090（24GB 显存）在 Q4 量化下视配置可扩展到约 70B。',
      },
      dontOverspend: {
        id: 'dont-overspend',
        title: '别为你的 Home Assistant 服务器买多了',
        content:
          '**超出实际需求的硬件，是这个品类里最常见的浪费性购买——让设备匹配你实际打算跑的东西。**',
        items: [
          '只跑 Home Assistant？你不需要 RTX 显卡，甚至可能不需要迷你 PC——一台 Raspberry Pi 5 或 Home Assistant Green 就够了。',
          'Home Assistant 加 Frigate 摄像头？你不需要昂贵的工作站——一台带内置集成显卡的 Intel N100/N150 迷你 PC，对大多数家庭摄像头数量已经足够。',
          'Home Assistant 加一个小型本地 LLM？一台 32GB 的 Ryzen 迷你 PC 足以跑 8B 级别的模型——你还不需要独立 GPU。',
          '想要更大的本地 LLM（32B 及以上）？这才是独立 GPU（比如二手 RTX 3090）真正值回票价的地方。',
        ],
      },
      power: {
        id: 'power',
        title: '24小时运行的设备，功耗很重要',
        content:
          '**这类硬件会持续运行，所以对于一台从不关机的设备来说，一年的电费开销可能和购买价格一样重要。** 大致按典型功耗排序：',
        columns: ['硬件', '典型角色', '功耗', '适合场景'],
        rows: [
          { '硬件': 'Raspberry Pi 5', '典型角色': '仅中枢', '功耗': '很低（几瓦）', '适合场景': 'Home Assistant' },
          { '硬件': 'Intel N100/N150 迷你 PC', '典型角色': '中枢 + Frigate', '功耗': '低（典型约 10–15W）', '适合场景': '24 小时中枢 + 摄像头' },
          { '硬件': 'Ryzen 迷你 PC（32GB）', '典型角色': '中枢 + Frigate + 小型 LLM', '功耗': '中等（典型约 15–35W，LLM 负载下更高）', '适合场景': '单机本地 AI' },
          { '硬件': 'RTX 3090 服务器', '典型角色': '重度本地 AI', '功耗': '高（仅 GPU 负载下可达 250W+）', '适合场景': '大模型，非 24 小时闲置' },
        ],
        tableFormat: true,
        note: '对于 24 小时运行的服务器，功耗有时比购买价格更重要——一块持续运行的 250W GPU，对电费的影响远大于一台 10W 的迷你 PC。这也是为什么应该把重负载 GPU 服务器做成单独、按需运行的设备，而不是常开设备（见下方"一台还是两台？"）。',
      },
      oneOrTwo: {
        id: 'one-or-two',
        title: '一台还是两台？',
        content:
          '**一台设备更简单也更便宜；两台设备能让 Home Assistant 的可靠性不受较重 AI 负载的影响。** 哪个合适取决于你更看重稳定运行时间还是简单性。',
        items: [
          '一台设备（单一迷你 PC）：最简单也最便宜——一台 Ryzen 迷你 PC 同时运行 Home Assistant、Frigate 和一个小型本地 LLM。对大多数家庭配置来说是正确选择。',
          '两台设备（一台低功耗中枢加一台独立的 AI 主机）：让 Home Assistant 在几乎不需要重启的低功耗设备上保持极高可靠性，而更重的 AI 工作——比如一台二手 RTX 3090 服务器——可以独立运行、独立重启，不会连带影响你的自动化。',
          '如果你的 Home Assistant 跑着任何与安全相关的东西（门锁、警报、供暖），并且想把这一层与你可能会重启、更新或折腾的 GPU 主机隔离开，就选两台。',
        ],
      },
      picking: {
        id: 'picking',
        title: '为仅-HA 对 HA + AI 选择',
        content:
          '**仅-HA 选 Pi，HA 加本地 AI 选迷你 PC——这一个决定就能确定合适的硬件。** 让设备匹配工作负载，而不是反过来。',
        image: '/images/best-hardware-for-local-smart-home-decision-tree-zh.svg',
        imageCaption: '智能家居硬件决策树：是否添加 Frigate 摄像头和是否添加本地 LLM，这两个问题决定四种搭配——Raspberry Pi 5、Intel N100/N150 迷你 PC、Ryzen 迷你 PC（32GB 内存）或 RTX 3090 服务器（24GB 显存）。',
        columns: ['硬件', '相对价格', '仅-HA', '能否运行本地 LLM', 'Frigate 加速'],
        rows: [
          { '硬件': 'Raspberry Pi 5', '相对价格': '低', '仅-HA': '可', '能否运行本地 LLM': '仅非常小，缓慢', 'Frigate 加速': 'Hailo-8L M.2 HAT' },
          { '硬件': 'Intel N100/N150 迷你 PC', '相对价格': '中', '仅-HA': '可', '能否运行本地 LLM': '小型模型', 'Frigate 加速': 'Intel 集成显卡（OpenVINO）' },
          { '硬件': 'Ryzen 迷你 PC', '相对价格': '中', '仅-HA': '可', '能否运行本地 LLM': '可（7B–8B）', 'Frigate 加速': '集成显卡或 Hailo M.2' },
          { '硬件': 'NAS', '相对价格': '中–高', '仅-HA': '可（容器）', '能否运行本地 LLM': '取决于硬件', 'Frigate 加速': '取决于机型' },
          { '硬件': '服务器 + 二手 RTX 3090', '相对价格': '高', '仅-HA': '可', '能否运行本地 LLM': '可（最高约 70B，视量化而定）', 'Frigate 加速': '独立 GPU' },
        ],
        note: '各档的功耗详见上方[功耗](#power)；是否所有东西都放在一台设备上，详见[一台还是两台？](#one-or-two)。',
      },
      whatIdBuy: {
        id: 'what-id-buy',
        title: '2026年的总体购买建议',
        content:
          '**如果你今天要选一台设备，又不确定该选哪一档，基于以上权衡，这是一个合理的默认建议——你的实际需求可能指向别的方向，而且以下推荐均未经 PromptQuorum 测试或评测。**',
        items: [
          '普通本地智能家居（Home Assistant 加少量 Zigbee/Matter 设备）：Intel N150 迷你 PC 是明智的默认选择——以后加摄像头时它也能覆盖 Frigate。',
          'Home Assistant 加摄像头加一个小型本地 AI 助手：一台 32GB 内存的 Ryzen 迷你 PC 是合理的单机之选——它是唯一能以可用速度真正跑起 8B 级 LLM 的最便宜设备。',
          '认真做本地 AI（32B 级及以上模型）：一台独立的 RTX 3090 服务器，与 Home Assistant 中枢分开放置，考虑到当前二手 GPU 价格，是合理的升级方案。',
          '一个全新的、以 AI 为先的搭建，通常不太适合选 Raspberry Pi——鉴于 2026 年的 Pi 定价及其 LLM 局限，迷你 PC 的价格通常相差不大，却是明显更好的 AI 平台。',
        ],
      },
      stacks: {
        id: 'stacks',
        title: '完整的本地智能家居方案组合',
        content:
          '**多数买家需要不止一件产品——至少是中枢、Frigate 加速器和存储，若想跑本地 LLM 推理还要加一台 AI 主机。** 以下三套组合按场景把上面的推荐搭配在一起；每个产品都链接回本页前面的完整推荐。',
        columns: ['组合', '中枢', 'Frigate 加速器', 'AI', '预估总价（2026年8月）'],
        rows: [
          { '组合': '入门（仅 HA）', '中枢': '[Home Assistant Green 或 Pi 5](#raspberry-pi)', 'Frigate 加速器': '—', 'AI': '—', '预估总价（2026年8月）': '约 199–305 美元' },
          { '组合': 'HA + 摄像头', '中枢': '[N150 迷你 PC](#mini-pc)', 'Frigate 加速器': '[Intel 集成显卡，需要更多余量就上 Hailo-8L](#frigate-accelerator)', 'AI': '—', '预估总价（2026年8月）': '约 190–290 美元' },
          { '组合': 'HA + 摄像头 + 本地 AI', '中枢': '[Ryzen 迷你 PC，32GB](#mini-pc)', 'Frigate 加速器': '内置集成显卡，摄像头多就用[Hailo-8L](#frigate-accelerator)', 'AI': '在同一台设备上运行（8B 级模型）', '预估总价（2026年8月）': '约 649–720 美元' },
          { '组合': 'HA + 摄像头 + 大型本地 AI', '中枢': '[N150 迷你 PC（为可靠性单独运行）](#mini-pc)', 'Frigate 加速器': '[Hailo-8](#frigate-accelerator)', 'AI': '[二手 RTX 3090 服务器，单独运行](#server)', '预估总价（2026年8月）': '约 1,400–1,700 美元' },
        ],
        tableFormat: true,
        note: '最后一套组合把 Home Assistant 中枢留在自己的低功耗设备上，把 RTX 3090 当作一台独立机器运行——原因见[一台还是两台？](#one-or-two)。',
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Frigate 推荐用什么硬件？', a: '对于新搭建，Frigate 推荐经由 OpenVINO 的 Intel 集成显卡，或 Hailo-8L（约 70 美元，入门级）或 Hailo-8（约 170–200 美元，更快）M.2 模块以获得更强检测能力。Google Coral USB/M.2 TPU 仍能用，但现已过时——除非是非常低功耗的硬件，Frigate 不再为新安装推荐它。' },
          { q: 'Raspberry Pi 也能运行本地 LLM 吗？', a: 'Pi 只能运行非常小的模型，而且很慢，因此不适合做响应灵敏的本地 LLM 助手。它能很好地处理 Home Assistant 和基础语音，但对本地 AI 而言，带强力集成显卡或 NPU 的迷你 PC，或一台二手 RTX 3090 主机，是更好的选择。' },
          { q: '我需要多少内存？', a: '仅 Home Assistant 用几个 GB 就能运行。要在同一台设备上运行小型本地 LLM 和其他 AI 服务，更多内存会有帮助；一台带 32GB 内存和强力集成显卡/NPU 的迷你 PC 能让 Qwen3 8B 或 Llama 3.1 8B 模型保持响应。把内存匹配到你计划运行的模型大小。' },
          { q: '我该买哪台迷你 PC？', a: '要跑 HA 加摄像头，Intel N100/N150 迷你 PC 经由 OpenVINO 加速 Frigate。要跑 HA 加本地 LLM，升级到带 32GB 内存的 Ryzen 迷你 PC。参见 Home Assistant + 本地 AI 的最佳迷你 PC 指南获取具体选择。' },
          { q: '一台还是两台？', a: '一台（迷你 PC）最简单，可同时运行 Home Assistant 和一个小型本地 LLM。如果你想让中枢在低功耗设备上保持极高可靠性，并把繁重 AI 卸载到另一台机器，例如二手 RTX 3090 服务器，就分成两台。' },
          { q: '24小时运行的设备，功耗要考虑吗？', a: '对于从不关机的硬件来说，功耗有时比购买价格更重要。Raspberry Pi 耗电几瓦，N100/N150 迷你 PC 约 10–15W，Ryzen 迷你 PC 视负载约 15–35W，而像 RTX 3090 这样的独立 GPU 满载可达 250W 以上——这也是为什么重负载 GPU 服务器最好做成独立设备，而不是常开设备。' },
          { q: '按 2026 年的价格，Raspberry Pi 还值得买吗？', a: '如果只跑 Home Assistant，仍然值得——它依然是功耗最低的选项。但 2026 年的内存芯片短缺让 Pi 5 价格大幅上涨（截至 2026 年 8 月，视内存大小约 180–305 美元，相比最初的 80–120 美元），与 N100/N150 迷你 PC 的价差正在缩小。如果你一年内可能会加摄像头或本地 LLM，现在通常直接买迷你 PC更划算。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 具体选择',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 完整堆栈',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — AI 设备运行什么',
          '[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm) — 跨集群：VRAM 与硬件细节',
          '[本地 LLM 最佳 GPU 购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 若需要比 RTX 3090 更多显存，这里有更深入的 GPU 选择',
          '[云端 GPU 租用指南](/zh/power-local-llm/cloud-gpu-rental-guide-2026) — 只是偶尔需要 GPU 算力，租用而非购买',
          '[2026年最佳阳台太阳能电池](/zh/balcony-solar/best-balcony-solar-batteries-2026) — 本地家庭能源系统的电池储能',
          '[本地控制最佳智能家居中枢（2027年）](/zh/smart-home/best-smart-home-hubs-2027) — 专用中枢推荐',
          '[NVIDIA Jetson Orin Nano智能家居AI评测（2027年）](/zh/smart-home/nvidia-jetson-orin-nano-smart-home-review) — 支持GPU的本地AI硬件',
          '[最佳Zigbee与Thread USB加密狗(2027年)](/zh/smart-home/best-zigbee-thread-dongles-2027) — Zigbee/Thread无线硬件',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地智能家居 + 本地 AI 的最佳硬件（2026）',
      description: '2026年本地智能家居 + AI 硬件推荐：Intel N100 迷你 PC 或 Raspberry Pi 5 中枢，Frigate 加速方案（Intel 集成显卡/Hailo），SSD 存储，以及本地 LLM 升级选项。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-08-25',
      about: [{ '@type': 'Thing', name: 'Home Assistant 硬件' }, { '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: '迷你 PC' }, { '@type': 'Thing', name: 'Hailo M.2 accelerator' }, { '@type': 'Thing', name: '本地 LLM' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate 推荐用什么硬件？', acceptedAnswer: { '@type': 'Answer', text: '对于新搭建，Frigate 推荐经由 OpenVINO 的 Intel 集成显卡，或 Hailo-8L（约 70 美元）或 Hailo-8（约 170–200 美元）M.2 模块以获得更强检测能力。Google Coral TPU 仍能用，但现已过时，不再为新安装推荐。' } },
        { '@type': 'Question', name: 'Raspberry Pi 也能运行本地 LLM 吗？', acceptedAnswer: { '@type': 'Answer', text: 'Pi 只能运行非常小的模型，而且很慢。它能很好地处理 Home Assistant 和基础语音，但对响应灵敏的本地 LLM 助手而言，带强力集成显卡或 NPU 的迷你 PC，或一台二手 RTX 3090 主机更好。' } },
        { '@type': 'Question', name: '我需要多少内存？', acceptedAnswer: { '@type': 'Answer', text: '仅 Home Assistant 用几个 GB 就能运行。要在同一台设备上运行小型本地 LLM，更多内存会有帮助；带 32GB 内存的迷你 PC 能让 Qwen3 8B 或 Llama 3.1 8B 模型保持响应。把内存匹配到你计划运行的模型大小。' } },
        { '@type': 'Question', name: '我该买哪台迷你 PC？', acceptedAnswer: { '@type': 'Answer', text: '要跑 HA 加摄像头，Intel N100/N150 迷你 PC 经由 OpenVINO 加速 Frigate。要跑 HA 加本地 LLM，升级到带 32GB 内存的 Ryzen 迷你 PC。参见 Home Assistant + 本地 AI 的最佳迷你 PC 指南。' } },
        { '@type': 'Question', name: '一台还是两台？', acceptedAnswer: { '@type': 'Answer', text: '一台迷你 PC 可同时运行 Home Assistant 和一个小型本地 LLM。若想让中枢在低功耗设备上保持极高可靠，并把繁重 AI 卸载到另一台机器，例如二手 RTX 3090 服务器，就分成两台。' } },
        { '@type': 'Question', name: '24小时运行的设备，功耗要考虑吗？', acceptedAnswer: { '@type': 'Answer', text: '对于从不关机的硬件，功耗有时比购买价格更重要。Raspberry Pi 耗电几瓦，N100/N150 迷你 PC 约 10–15W，Ryzen 迷你 PC 约 15–35W，而 RTX 3090 这样的独立 GPU 满载可达 250W 以上。' } },
        { '@type': 'Question', name: '按 2026 年的价格，Raspberry Pi 还值得买吗？', acceptedAnswer: { '@type': 'Answer', text: '如果只跑 Home Assistant，仍然值得。但 2026 年的内存芯片短缺让 Pi 5 价格涨到约 180–305 美元（视内存大小），相比最初的 80–120 美元，与 N100/N150 迷你 PC 的价差正在缩小——如果你一年内可能加摄像头或本地 LLM，迷你 PC 通常是更好的选择。' } },
      ],
    },
  },
}
