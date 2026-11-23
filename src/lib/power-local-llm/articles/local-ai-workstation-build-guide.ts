// Power Local LLM — Local AI Workstation Build Guide: 3 Budget Tiers
// Slug: local-ai-workstation-build-guide
// Affiliate buying guide. Outbound component links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: current asking-price floors (2026 memory shortage: GPU, DDR5 RAM and SSD
// prices all surged; totals = sum of range midpoints, repriced 2026-10-19).
// Component prices sourced from market asking-price trackers and the audited
// PromptQuorum GPU buying guide and workstation build articles.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-en.webp',
    title: 'Local AI Workstation Build Guide 2026: 3 Budget Tiers',
    seoTitle: 'Local AI PC Build 2026: Budget to 70B Workstation',
    intro:
      'Most local-AI build guides start with the CPU, but the GPU and its VRAM are what decide which models the machine can run — every other part is chosen to support that GPU. This guide gives three complete parts lists for a local-LLM PC: a budget build for 7B-13B models, a mid build for 14B-33B models, and an enthusiast build for 70B work. Each tier lists exact components and expected performance. One caveat on price: the 2026 memory-chip shortage pushed GPU and DDR5 RAM prices far above last year\'s levels, so build totals and non-GPU part prices are not tracked here; only GPU prices are, from a dated tracker ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15) — check live listings before you order.',
    metaDescription:
      'Three complete local-AI PC builds for 2026: budget 7B-13B, mid 14B-33B, and enthusiast 70B tiers. Exact parts lists, GPU prices from a dated tracker, and notes on the 2026 DDR5 shortage.',
    twitterDescription:
      'Local AI PC build guide: three budget tiers with full parts lists for 7B to 70B models. GPU and RAM prices surged in 2026 — here are dated GPU prices.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      'Buyers building a PC specifically to run local LLMs, deciding by budget tier and target model size. Assumes familiarity with quantization and VRAM as a constraint, and basic PC-building terms, but not with specific current component SKUs.',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      'local ai pc build 2026',
      'local llm workstation build guide',
      'best pc build for running llms',
      'ai workstation parts list',
      'how to build a pc for local ai',
    ],
    leadAnswerBlock:
      '**The best local-AI PC build is the tier whose GPU VRAM fits your target model. A budget build runs 7B-13B models, a mid build runs 14B-33B models, and an enthusiast build runs 70B models — build totals are not tracked here because 2026 GPU and RAM prices move quickly; GPU prices are listed with source and date.**',
    quickAnswerTop: {
      en: {
        question: 'How do I build a PC for running local LLMs in 2026?',
        answer:
          'Choose your tier by the largest model you want to run, then build around the GPU. A budget build pairs an RTX 4060 Ti 16 GB with a Ryzen 7 CPU for 7B-13B models. A mid build uses an RTX 4070 Ti Super 16 GB for 14B-33B models. An enthusiast build uses an RTX 5090 32 GB for 70B work. The 2026 memory shortage pushed GPUs and DDR5 RAM well above their usual prices, so build totals are not tracked here and only GPU prices carry a source and date.',
        bullets: [
          'Budget build: RTX 4060 Ti 16 GB, runs 7B-13B models',
          'Mid build: RTX 4070 Ti Super 16 GB, runs 14B-33B models',
          'Enthusiast build: RTX 5090 32 GB, runs 70B models only with aggressive quantization or partial offload',
          'GPU, RAM, and SSD prices all surged in 2026 — compare new and used, because used no longer reliably costs less',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Editor\'s Choice', anchor: '#editors-choice' },
      { label: 'Build Tier Comparison', anchor: '#comparison-table' },
      { label: 'Which Build Should You Choose?', anchor: '#which-build' },
      { label: 'Budget Build', anchor: '#budget-build' },
      { label: 'Mid Build', anchor: '#mid-build' },
      { label: 'Enthusiast Build', anchor: '#enthusiast-build' },
      { label: 'How the 2026 Price Surge Changes Builds', anchor: '#price-surge' },
      { label: 'Decision Flowchart', anchor: '#decision-flowchart' },
      { label: 'Where to Buy Components', anchor: '#where-to-buy' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**The GPU sets the tier; the rest of the build supports it.** A local-AI PC is chosen GPU-first because VRAM decides which models run. Pick the tier whose GPU VRAM fits your target model, then size the CPU, RAM, and power supply around it.',
          '**2026 prices raised build costs.** A memory-chip shortage pushed GPUs and DDR5 RAM far above last year\'s prices. Build totals are not tracked here — and RAM is now a major cost line, not an afterthought (DDR5 prices rose about 500% in 12 months to August 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Budget build:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650 W PSU — runs 7B-13B models at usable speed. The lowest-cost of the three builds in this guide.',
          '**Mid build:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850 W PSU — runs 14B-33B models and makes 7B-14B feel instant.',
          '**Enthusiast build:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000 W PSU — the only one of the three builds here that can run a 70B model on a single GPU, and only with aggressive quantization or partial offload to system RAM. The RTX 5090 alone lists at around $4,500–4,700 new ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15).',
          '**RAM is not a substitute for VRAM.** System RAM lets a model spill out of VRAM, but a model running from RAM is too slow for interactive use. Buy enough VRAM for the model; buy RAM for the operating system and tooling.',
          '**The power supply scales with the GPU.** A budget build needs 650 W, the mid build 850 W, and the enthusiast build 1000 W because the RTX 5090 alone draws 575 W. Budget the PSU alongside the card.',
          '**Used is no longer a guaranteed discount.** Per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source updated 2026-10-15), used sold RTX 5090 listings ($5,900–6,350) exceed new retail (around $4,500–4,700) and used sold RTX 4090 listings ($2,575–3,010) overlap the new listing range ($2,000–3,000), so compare both before buying. A verified-working used card is still worth taking when it is clearly cheaper — but never assume it is.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Budget build:** RTX 4060 Ti 16 GB GPU — runs 7B and most 13B models.',
          '**Mid build:** RTX 4070 Ti Super 16 GB GPU — runs 14B comfortably, light 22B-33B work.',
          '**Enthusiast build:** RTX 5090 32 GB GPU — runs 33B comfortably; 70B only with aggressive quantization or partial offload.',
          '**VRAM rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**System RAM guidance:** 32 GB for the budget build, 64 GB for the mid build, 128 GB for the enthusiast build.',
          '**Power supply by tier:** 650 W budget, 850 W mid, 1000 W enthusiast — the RTX 5090 draws 575 W on its own.',
          '**2026 price reality:** GPUs, DDR5 RAM, and SSDs all surged on the memory shortage — confirm live prices and compare new against used.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: The Mid Build',
        highlight: true,
        content:
          '**For most buyers building a PC for local AI, the mid build is the tier that balances capability, cost, and headroom.** Built around an RTX 4070 Ti Super 16 GB, it runs every 14B model with context room, handles light 22B-33B work, and makes 7B-14B models feel instant It should stay usable for most 14B-class workloads for a good while, but model sizes and prices change. Drop to the budget build only if your ceiling is firmly 7B-13B models; step up to the enthusiast build only if you specifically need 70B work. The mid build is a sensible default for a machine you want to keep.',
        callouts: [
          {
            type: 'note',
            text: 'This Editor\'s Choice reflects price-to-capability only. PromptQuorum is not enrolled in any affiliate program and the links below carry no affiliate tags — they are plain reference links that earn no commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Check RTX 4070 Ti Super price on Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Three Build Tiers Compare in 2026',
        content:
          'GPU VRAM and power figures are manufacturer specifications. Inference speeds are rough, typical figures for each tier\'s GPU class (not measured by PromptQuorum); real speed varies with quantization, runtime and context length. Build totals are not tracked: only the RTX 5090 price carries a source and date (see the enthusiast build), and RAM and other parts are not tracked on this page. Compare new and used GPU listings: used no longer always costs less.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For a local-AI PC build, the GPU\'s VRAM decides which models the machine can run and the rest of the parts list is sized to support that GPU — choose the tier by model size first.',
          },
          {
            type: 'plain-terms',
            text: 'Think of the build as a team built around one star player, the GPU. The CPU, RAM, and power supply are the supporting cast — useful, but they exist to keep the GPU fed. Pick the GPU your model needs first, then assemble the rest around it.',
          },
        ],
        columns: ['Build tier', 'GPU', 'VRAM', 'Runs', 'PSU', 'Total (2026)'],
        rows: [
          {
            'Build tier': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Runs': '7B-13B models',
            'PSU': '650 W',
            'Total (2026)': 'not tracked',
          },
          {
            'Build tier': 'Mid',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Runs': '14B comfortably, light 22B-33B',
            'PSU': '850 W',
            'Total (2026)': 'not tracked',
          },
          {
            'Build tier': 'Enthusiast',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Runs': '33B comfortably, 70B only with aggressive quantization or partial offload',
            'PSU': '1000 W',
            'Total (2026)': 'not tracked',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: 'Which Build Should You Choose?',
        content:
          '**Your largest target model decides the tier; your budget confirms it.** Find the row that matches your situation.',
        columns: ['Your situation', 'Build this'],
        rows: [
          { 'Your situation': 'I run 7B-13B models and want the lowest-cost of the three builds in this guide', 'Build this': 'Budget build' },
          { 'Your situation': 'I want a first local-AI PC and am not sure how far I will go', 'Build this': 'Budget build, or mid build for headroom' },
          { 'Your situation': 'I run 14B models constantly and want them instant', 'Build this': 'Mid build' },
          { 'Your situation': 'I do light 22B-33B work and want a machine that lasts', 'Build this': 'Mid build' },
          { 'Your situation': 'I run 33B models heavily or want strong future headroom', 'Build this': 'Enthusiast build' },
          { 'Your situation': 'I need a single-GPU machine that can run 70B models only with aggressive quantization or partial offload', 'Build this': 'Enthusiast build' },
          { 'Your situation': 'I want to keep the total down despite the 2026 surge', 'Build this': 'Any tier — compare new and used GPU listings' },
          { 'Your situation': 'I am unsure and want the safest build to keep for years', 'Build this': 'Mid build — the Editor\'s Choice' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Budget Build: RTX 4060 Ti 16 GB',
        content:
          '**The budget build is the lowest-cost of the three builds in this guide and runs every 7B model plus most 13B models — enough capability for most first-time users.** It is built around the RTX 4060 Ti 16 GB, the lowest-priced 16 GB card in this guide, which keeps the total as low as the 2026 shortage allows.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB VRAM, 165 W. Typical speed for this GPU class is roughly 20-25 tok/s on 7B models (not measured by PromptQuorum; varies with quantization and context), and 14B models fit with context headroom. The 16 GB capacity is the reason to pick it over the 8 GB version.',
          '**CPU — AMD Ryzen 7 7700:** 8 cores, modest power draw. The CPU does little work during GPU inference, so a mid-range chip is correct here — do not overspend on the CPU in this tier.',
          '**Motherboard — B650 chipset:** supports the Ryzen 7 and a single full-size GPU on PCIe. No need for high-end power delivery at this tier.',
          '**RAM — 32 GB DDR5:** enough for the operating system, tooling, and a 7B-13B model running in VRAM. RAM is not a VRAM substitute — 32 GB is sufficient here, but DDR5 is now the second-largest line in this build.',
          '**Storage — 1 TB NVMe SSD:** holds the operating system and several models (a 7B Q4 model is roughly 4-5 GB).',
          '**PSU — 650 W 80+ Gold:** comfortable headroom for a 165 W GPU and an 8-core CPU.',
          '**Case and cooling — mid-tower with a tower air cooler:** the budget tier produces little heat; air cooling is sufficient.',
          '**Why build this tier:** lowest cost of entry, low power draw, and enough capability for the 7B-13B models that cover general chat, coding help, and summarization. **Why skip it:** if you already want 14B or larger models, start at the mid build.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Buy the RTX 4060 Ti in its 16 GB version specifically. The 8 GB version uses the same GPU die and runs at similar speed, but 8 GB cannot fit a 14B model — the extra memory is the entire point of this pick.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'Check RTX 4060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'Check Ryzen 7 7700 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Check 32GB DDR5 RAM price on Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Mid Build: RTX 4070 Ti Super 16 GB',
        content:
          '**The mid build is the Editor\'s Choice — it runs 14B models instantly, handles light 22B-33B work, and is the tier you build to keep.** It is built around the RTX 4070 Ti Super 16 GB, fast enough that response latency stops being noticeable on 14B-class models.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB VRAM, 285 W. Same model capacity as the budget tier but far faster — 7B-14B models feel instant, and light 22B-33B work is usable.',
          '**CPU — AMD Ryzen 9 7900X:** 12 cores. More headroom than the budget CPU for data preparation and running tooling alongside inference.',
          '**Motherboard — B650 or X670 chipset:** solid power delivery for the 12-core CPU and a 285 W GPU.',
          '**RAM — 64 GB DDR5:** room for the operating system, larger context windows, and tooling such as a RAG pipeline running next to the model. This is the biggest line after the GPU — if budget is tight, 32 GB still runs every model in this tier, because the model lives in VRAM.',
          '**Storage — 2 TB NVMe SSD:** holds a sizeable model library — a 33B Q4 model is roughly 18-20 GB.',
          '**PSU — 850 W 80+ Gold:** comfortable headroom for the 285 W GPU and the 12-core CPU under sustained load.',
          '**Case and cooling — mid-tower with a 240-280 mm AIO or high-end air cooler:** the mid tier produces moderate heat; a quality cooler keeps the CPU stable during long inference runs.',
          '**Why build this tier:** you run 14B models constantly and want them instant, or you do light 22B-33B work and want headroom. **Why skip it:** if 7B-13B is enough, the budget build costs less; if you need 70B, no 16 GB GPU fits it — go enthusiast.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The mid build fits the same models as the budget build — you are paying for speed, not capacity. Build this tier if 14B models will be a daily workload and waiting on them would annoy you.',
          },
          {
            type: 'note',
            text: 'A used RTX 4090 24 GB now lists far above this tier (used sold listings $2,575–3,010 per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15), so it no longer works as a shortcut. Compare new and used listings for the RTX 4070 Ti Super before you buy; its price is not tracked here.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'Check Ryzen 9 7900X price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Check 64GB DDR5 RAM price on Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Enthusiast Build: RTX 5090 32 GB',
        content:
          '**Of the three builds here, only the enthusiast build can run a 70B model on a single GPU, and only with aggressive quantization or partial offload to system RAM — its RTX 5090 32 GB is the headline part.** Build this tier for VRAM capacity, not raw speed; the speed is a side effect. The 2026 surge hit this tier hardest — the RTX 5090 lists at around $4,500–4,700 new against a $1,999 MSRP ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15) — so the GPU and RAM lines dominate the cost.',
        items: [
          '**GPU — RTX 5090 32 GB (new retail about $4,500–4,700 vs $1,999 MSRP; used sold listings $5,900–6,350; [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15; listing data, not quotes):** 32 GB GDDR7 VRAM, 575 W. The largest-VRAM single GPU in this guide; without a dual-GPU build it runs a 70B model only with aggressive quantization or partial offload to system RAM. It runs 33B models comfortably with room to spare.',
          '**CPU — AMD Ryzen 9 7950X:** 16 cores. Enough to run data preparation, fine-tuning experiments, and tooling alongside heavy inference.',
          '**Motherboard — X670E chipset:** strong power delivery and PCIe 5.0, sized for a 575 W GPU and the 16-core CPU.',
          '**RAM — 128 GB DDR5:** room for large context windows, multiple models loaded at once, and tooling — and the headroom to spill a model partially to RAM if needed. Few 128 GB kits list reliably, so this range doubles the 64 GB range; a 64 GB kit is the budget-saving alternative.',
          '**Storage — 4 TB NVMe SSD:** a 70B Q4 model is roughly 40 GB; a 4 TB drive holds a large library of large models. 4 TB drives rose the most of any SSD size in 2026.',
          '**PSU — 1000 W 80+ Platinum:** required because the RTX 5090 draws 575 W on its own — a 750 W unit would sag under load. Do not undersize this part.',
          '**Case and cooling — full-size case with a 360 mm AIO:** the 575 W GPU and 16-core CPU produce real heat; a 360 mm liquid cooler keeps the CPU stable during sustained 70B inference.',
          '**Why build this tier:** you need 33B or 70B models, you run heavy batch inference, or you want a machine that will not need replacing for years. **Why skip it:** for 7B-14B models it is overkill — the mid build delivers instant responses on those sizes for less than half the cost.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The RTX 5090 draws 575 W on its own. Pair it with the 1000 W power supply in this parts list — a smaller unit will brown out under load. Confirm your wall circuit can supply the full draw before building. This is not electrical-safety advice; follow NVIDIA\'s and the power-supply maker\'s guidance.',
          },
          {
            type: 'note',
            text: 'A 70B model at Q4 needs roughly 39-42 GB of VRAM, so even the RTX 5090 32 GB runs 70B at Q4 only with aggressive quantization or partial offload to system RAM. The 128 GB of RAM in this build gives that offload room to work.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'Check RTX 5090 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'Check Ryzen 9 7950X price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: 'Check 1000W PSU price on Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'How the 2026 Price Surge Changes the Build Math',
        content:
          '**The 2026 memory-chip shortage pushed GPU and DDR5 RAM prices far above normal, and since the GPU and RAM are the two largest lines in every build, they dominate the cost.** Plan the build around current listing prices, not launch prices.',
        items: [
          '**The GPU and RAM dominate the total.** In every tier the GPU is the biggest line and DDR5 RAM is now the second — the surge changes the build total more through those two parts than any other.',
          '**The cause is memory, not GPUs.** A GDDR, HBM, and DRAM supply shortage raised the cost of every card with fast memory and of system RAM itself; the higher the VRAM, the harder the card was hit. The RTX 5090 lists at around $4,500–4,700 new against a $1,999 MSRP (4,500 / 1,999 = 2.25×) per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source updated 2026-10-15) — more than double.',
          '**Lower-end GPU prices are not tracked here.** The RTX 4060 Ti 16 GB and RTX 4070 Ti Super used in the budget and mid builds are not covered by the tracker, so check live listings for them.',
          '**Used is no longer a reliable discount.** The [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source updated 2026-10-15) shows used sold RTX 5090 listings at $5,900–6,350 against new retail of around $4,500–4,700, and used sold RTX 4090 listings at $2,575–3,010 (median $2,860); these are listing data, not quotes. Compare new and used listings for every card; a verified-working used card is only worth it when it is clearly cheaper.',
          '**RAM and SSDs moved a lot; CPU, motherboard, and PSU moved little.** DDR5 prices rose about 500% in 12 months to August 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18; a 128 GB DDR5-6400 kit was listed at $3,399). CPU, motherboard, power-supply and SSD prices are not tracked on this page, so check them too.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The 2026 memory shortage pushed GPU and DDR5 RAM prices far above normal, making the GPU and RAM the two largest cost lines of a local-AI build.',
          },
          {
            type: 'plain-terms',
            text: 'The GPU is the most expensive part of the machine, and in 2026 the RAM got expensive too. Until the memory shortage eases, treat launch prices as history, compare new and used before you buy, and do not buy more VRAM or RAM than your model needs.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Decision Flowchart: Pick Your Build in Four Questions',
        content:
          '**Four questions, in order, route most builders to one tier.**',
        items: [
          '**1. What is the largest model you want to run?** 7B-13B: budget build. 14B-33B: mid build. 70B: enthusiast build.',
          '**2. What is your hard budget ceiling?** Budget build for the lowest cost, mid build for the middle, enthusiast build for the highest — the RTX 5090 alone lists at around $4,500–4,700 new ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15).',
          '**3. New or used GPU?** Compare both — per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source updated 2026-10-15), used sold RTX 5090 and RTX 4090 listings sit at or above the new ones, so a used card is only the right choice when it is clearly cheaper.',
          '**4. Does your power and space plan hold?** Confirm the PSU matches the tier (650 W / 850 W / 1000 W) and the case fits the GPU and cooler before ordering parts.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick a local-AI PC build by answering largest model size first, budget ceiling second, new-versus-used GPU third, and power and space planning last.',
          },
          {
            type: 'plain-terms',
            text: 'Start with the biggest model you actually want to run and let that set your tier. Then check your budget, decide whether to buy the GPU used, and confirm your power supply and case fit the parts. Doing it in that order avoids a build that cannot run your model.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Buy Components',
        content:
          '**Major retailers carry every part in these builds; compare new and used listings for the GPU specifically.** The links below are plain product-search links; they carry no affiliate tags and earn no commission.',
        items: [
          '**Amazon and Newegg:** the widest stock of CPUs, RAM, SSDs, power supplies, and cases. New GPU and DDR5 stock is thinner and priced at the 2026 surge level.',
          '**Used GPU market:** worth checking, but no longer a guaranteed saving — per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source updated 2026-10-15), used sold RTX 5090 and RTX 4090 listings sit at or above the new ones. Buy used only when it is clearly cheaper and verified working.',
          '**Micro Center (US, in-store):** often the best new GPU and CPU pricing if a store is reachable; also useful for CPU-plus-motherboard bundles.',
          '**Buy the GPU first.** It is the largest, most volatile line — lock in the GPU at a price you accept, then buy the supporting parts around it.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Because of the 2026 price surge, build totals are not tracked in this guide. Always open the current retailer listing for the GPU and the RAM before building — together they dominate the build cost.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'Browse GPUs on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'Browse Ryzen CPUs on Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'Browse DDR5 RAM on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'Browse NVMe SSDs on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'Browse power supplies on Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Building a Local-AI PC',
        items: [
          '**Choosing the CPU before the GPU.** The GPU decides which models the machine runs; the CPU does little during inference. Pick the GPU first, then size the CPU to support it.',
          '**Buying system RAM instead of VRAM.** RAM lets a model spill out of VRAM, but a model running from RAM is too slow for interactive use. Buy enough VRAM for the model; buy RAM only for the operating system and tooling.',
          '**Undersizing the power supply.** The RTX 5090 alone draws 575 W. A power supply that browns out under load is worse than a slower GPU that runs stably — match the PSU to the tier.',
          '**Anchoring on launch prices.** The 2026 surge means GPU MSRPs and last year\'s RAM prices no longer reflect reality. Budget the GPU and the RAM against live retailer prices, and compare the used market instead of assuming it is cheaper.',
          '**Buying the 8 GB RTX 4060 Ti for the budget build.** It shares a name with the 16 GB version but cannot fit a 14B model. Confirm the 16 GB variant in the listing.',
          '**Overbuilding for 7B models.** If 7B models cover your use case, the enthusiast build wastes thousands of dollars and hundreds of watts. Match the tier to the model, not to the budget you happen to have.',
          '**Skipping case and cooling planning.** A 575 W GPU plus a 16-core CPU produces real heat. Confirm the case fits the GPU and cooler and has airflow before ordering parts.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: GPU buying guidance and the 2026 surge context behind the build totals here.',
          '[Local LLM Workstation Build](/local-llms/local-llm-workstation-build) — PromptQuorum: dual-GPU 70B workstation parts list, cooling, and power-supply guidance behind the enthusiast tier.',
          '[NVIDIA GeForce RTX 40 and 50 Series Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Official VRAM capacity and power (TGP) figures for the RTX 4060 Ti, 4070 Ti Super, and 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live component pricing for AMD Ryzen CPUs, DDR5 RAM, NVMe SSDs, and power supplies.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: "Is a 1000 W power supply overkill for a single-GPU build?",
            a: "Not for an RTX 5090, which is rated at 575 W and can spike above that for milliseconds, so NVIDIA's reference guidance is a 1000 W unit. For the budget and mid builds in this guide it is overkill: 650 W and 850 W (80+ Gold) cover the RTX 4060 Ti 16 GB and RTX 4070 Ti Super 16 GB with headroom. Prefer an ATX 3.1 unit with a native 12V-2x6 connector over simply buying more watts.",
          },
          {
            q: 'How much does it cost to build a PC for local AI in 2026?',
            a: 'Build totals are not tracked here, because 2026 GPU and RAM prices move quickly and only GPU prices have a dated source. The RTX 5090 in the enthusiast build lists at around $4,500–4,700 new ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15), and DDR5 prices rose about 500% in 12 months to August 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Add up the live prices of the parts list for the tier you pick.',
          },
          {
            q: 'What GPU should I put in a local-AI PC build?',
            a: 'Pick the GPU by your largest target model. An RTX 4060 Ti 16 GB suits a budget build for 7B-13B models, an RTX 4070 Ti Super 16 GB suits a mid build for 14B-33B models, and an RTX 5090 32 GB suits an enthusiast build for 70B work. The GPU decides which models the machine can run, so it is chosen first and the rest of the parts list is built around it.',
          },
          {
            q: 'How much RAM do I need for a local-AI PC?',
            a: 'Plan 32 GB for a budget build, 64 GB for a mid build, and 128 GB for an enthusiast build. System RAM is not a substitute for VRAM — a model running from RAM is too slow for interactive use. RAM is for the operating system, context, and tooling; buy enough VRAM on the GPU for the model itself.',
          },
          {
            q: 'What power supply does a local-AI PC need?',
            a: 'Match the power supply to the tier: 650 W for the budget build, 850 W for the mid build, and 1000 W for the enthusiast build. The enthusiast tier needs 1000 W because the RTX 5090 draws 575 W on its own. An undersized power supply causes instability under load, so do not cut this part.',
          },
          {
            q: 'Should I buy GPU components new or used in 2026?',
            a: 'Compare new and used before you decide; do not assume used is cheaper. The [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source updated 2026-10-15) shows used sold RTX 5090 listings at $5,900–6,350 against new retail of around $4,500–4,700, and used sold RTX 4090 listings at $2,575–3,010. A verified-working used card is worth buying only when it is clearly cheaper. CPUs, RAM, SSDs, and power supplies are best bought new.',
          },
          {
            q: 'Can a single-GPU build run a 70B model?',
            a: 'Yes, the enthusiast build can. An RTX 5090 32 GB has the most VRAM of any single GPU in this guide, but a 70B model at Q4 needs roughly 39-42 GB — so it runs 70B only with aggressive quantization or partial offload to system RAM. The 128 GB of RAM in the enthusiast build gives that offload the room it needs.',
          },
          {
            q: 'Is the mid build worth the extra cost over the budget build?',
            a: 'Yes, if you run 14B-class models regularly. The budget and mid builds fit similar models, but the mid build\'s RTX 4070 Ti Super is far faster — 14B models feel instant rather than sluggish, and light 22B-33B work becomes usable. If your ceiling is firmly 7B-13B models, the budget build costs less and is the better value.',
          },
          {
            q: 'Do I need a Threadripper CPU for a local-AI PC?',
            a: 'No. A consumer Ryzen CPU is enough for all three builds in this guide — a Ryzen 7 for the budget tier, a Ryzen 9 for the mid and enthusiast tiers. A Threadripper is only worth its cost for a dual-GPU machine that runs fine-tuning and inference at the same time, which is beyond a single-GPU build.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Choose the GPU for your build with the full buying guide](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — eight GPUs across four budget tiers, with current prices and the surge math.',
          '[See the dual-GPU 70B workstation build for production use](/local-llms/local-llm-workstation-build) — a 48 GB dual-GPU tier for 70B-class models beyond this guide\'s enthusiast build.',
          '[Compare building a PC against renting cloud GPUs](/power-local-llm/cloud-gpu-rental-guide-2026) — when renting beats owning hardware for occasional compute.',
          '[Work out the VRAM each model size needs before you build](/local-llms/how-much-vram-local-llm) — the complete VRAM-by-model-size method behind the tier choices here.',
          '[Consider a Mac as an alternative to a PC build](/power-local-llm/best-mac-for-local-ai-2026) — when unified-memory Apple Silicon beats a discrete-GPU PC for local AI.',
          '[Understand the inference engine your build will actually run](/power-local-llm/llama-cpp-explained) — llama.cpp, GGUF, and the hardware backends (CUDA, ROCm, Vulkan) this workstation needs to use.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-de.webp',
    title: 'Lokale-KI-Workstation 2026 selbst bauen: 3 Budget-Stufen',
    seoTitle: 'Lokaler-KI-PC 2026: vom Budget-Build zur 70B-Workstation',
    intro:
      'Die meisten Bauanleitungen für lokale KI beginnen mit der CPU, doch GPU und VRAM entscheiden darüber, welche Modelle die Maschine ausführen kann — jede andere Komponente wird so gewählt, dass sie diese GPU unterstützt. Diese Anleitung liefert drei vollständige Teilelisten für einen Lokal-LLM-PC: einen Budget-Build für 7B- bis 13B-Modelle, einen Mittelklasse-Build für 14B- bis 33B-Modelle und einen Enthusiasten-Build für die Arbeit mit 70B-Modellen. Jede Stufe nennt exakte Komponenten und die erwartete Leistung. Ein Hinweis zum Preis: Die Speicherchip-Knappheit von 2026 hat die Preise für GPUs und DDR5-RAM weit über das Niveau des Vorjahres getrieben, sodass Build-Summen und Preise der übrigen Teile hier nicht erfasst werden; erfasst sind nur GPU-Preise aus einer datierten Quelle ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert 2026-10-15) — prüfen Sie vor der Bestellung die Live-Angebote.',
    metaDescription:
      'Lokale KI-Workstation bauen 2026: CPU, GPU, RAM und Speicher für LLM-Inferenz. Komplette Build-Anleitungen nach Budget, von Einsteiger bis RTX 5090 — datierte GPU-Preise und Hinweise zur DDR5-Knappheit 2026.',
    twitterDescription:
      'Bauanleitung für einen Lokal-KI-PC: drei Budget-Stufen mit vollständigen Teilelisten für 7B- bis 70B-Modelle. GPU- und RAM-Preise sind 2026 stark gestiegen — hier datierte GPU-Preise.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      'Käufer, die einen PC gezielt zum Betrieb lokaler LLMs bauen und die Entscheidung nach Budget-Stufe und Zielgröße des Modells treffen. Setzt Vertrautheit mit Quantisierung und VRAM als Engpass sowie mit grundlegenden PC-Bau-Begriffen voraus, nicht jedoch mit konkreten aktuellen Komponenten-SKUs.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      'lokaler ki pc bauen 2026',
      'workstation für lokale llm bauen anleitung',
      'bester pc für llm betrieb',
      'ki workstation teileliste',
      'pc für lokale ki zusammenstellen',
    ],
    leadAnswerBlock:
      '**Der beste Lokal-KI-PC ist die Stufe, deren GPU-VRAM zu Ihrem Zielmodell passt. Ein Budget-Build führt 7B- bis 13B-Modelle aus, ein Mittelklasse-Build deckt 14B- bis 33B-Modelle ab, und ein Enthusiasten-Build bewältigt 70B-Modelle — Build-Summen werden hier nicht erfasst, weil sich die GPU- und RAM-Preise 2026 schnell bewegen; GPU-Preise stehen mit Quelle und Datum da.**',
    quickAnswerTop: {
      de: {
        question: 'Wie baue ich 2026 einen PC für den Betrieb lokaler LLMs?',
        answer:
          'Wählen Sie Ihre Stufe nach dem größten Modell, das Sie ausführen möchten, und bauen Sie dann um die GPU herum. Ein Budget-Build kombiniert eine RTX 4060 Ti 16 GB mit einer Ryzen-7-CPU für 7B- bis 13B-Modelle. Ein Mittelklasse-Build nutzt eine RTX 4070 Ti Super 16 GB für 14B- bis 33B-Modelle. Ein Enthusiasten-Build setzt eine RTX 5090 32 GB für 70B-Arbeit ein. Die Speicherknappheit 2026 hat GPUs und DDR5-RAM weit über ihre üblichen Preise getrieben, daher werden Build-Summen hier nicht erfasst und nur GPU-Preise tragen Quelle und Datum.',
        bullets: [
          'Budget-Build: RTX 4060 Ti 16 GB, führt 7B- bis 13B-Modelle aus',
          'Mittelklasse-Build: RTX 4070 Ti Super 16 GB, führt 14B- bis 33B-Modelle aus',
          'Enthusiasten-Build: RTX 5090 32 GB, führt 70B-Modelle nur mit aggressiver Quantisierung oder teilweiser Auslagerung aus',
          'GPU-, RAM- und SSD-Preise sind 2026 alle stark gestiegen — vergleichen Sie neu und gebraucht, denn gebraucht ist nicht mehr verlässlich günstiger',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Empfehlung der Redaktion', anchor: '#editors-choice' },
      { label: 'Vergleich der Build-Stufen', anchor: '#comparison-table' },
      { label: 'Welchen Build sollten Sie wählen?', anchor: '#which-build' },
      { label: 'Budget-Build', anchor: '#budget-build' },
      { label: 'Mittelklasse-Build', anchor: '#mid-build' },
      { label: 'Enthusiasten-Build', anchor: '#enthusiast-build' },
      { label: 'Wie der Preisanstieg 2026 die Builds verändert', anchor: '#price-surge' },
      { label: 'Entscheidungsdiagramm', anchor: '#decision-flowchart' },
      { label: 'Wo Sie Komponenten kaufen', anchor: '#where-to-buy' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Die GPU legt die Stufe fest; der Rest des Builds unterstützt sie.** Ein Lokal-KI-PC wird GPU-zuerst geplant, weil das VRAM entscheidet, welche Modelle laufen. Wählen Sie die Stufe, deren GPU-VRAM zu Ihrem Zielmodell passt, und dimensionieren Sie CPU, RAM und Netzteil darum herum.',
          '**Die Preise 2026 haben Builds verteuert.** Eine Speicherchip-Knappheit hat GPUs und DDR5-RAM weit über die Preise des Vorjahres getrieben. Build-Summen werden hier nicht erfasst — und RAM ist jetzt eine große Kostenposition, kein Nebenposten (die DDR5-Preise stiegen laut [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18, in 12 Monaten bis August 2026 um rund 500 %).',
          '**Budget-Build:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650-W-Netzteil — führt 7B- bis 13B-Modelle in brauchbarer Geschwindigkeit aus. Der kostengünstigste der drei Builds in dieser Anleitung.',
          '**Mittelklasse-Build:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850-W-Netzteil — führt 14B- bis 33B-Modelle aus und lässt 7B- bis 14B-Modelle sofort reagieren.',
          '**Enthusiasten-Build:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000-W-Netzteil — von den drei Builds hier der einzige, der ein 70B-Modell auf einer einzelnen GPU ausführen kann, und nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM. Die RTX 5090 allein wird im Neuhandel bei rund $4.500–4.700 gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert 2026-10-15).',
          '**RAM ist kein Ersatz für VRAM.** Arbeitsspeicher lässt ein Modell aus dem VRAM auslagern, doch ein aus dem RAM laufendes Modell ist für die interaktive Nutzung zu langsam. Kaufen Sie genug VRAM für das Modell; kaufen Sie RAM für Betriebssystem und Werkzeuge.',
          '**Das Netzteil skaliert mit der GPU.** Ein Budget-Build benötigt 650 W, der Mittelklasse-Build 850 W und der Enthusiasten-Build 1000 W, weil allein die RTX 5090 575 W zieht. Planen Sie das Netzteil zusammen mit der Karte ein.',
          '**Gebraucht ist kein garantierter Rabatt mehr.** Laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Quelle aktualisiert 2026-10-15) liegen gebraucht verkaufte RTX 5090 ($5.900–6.350) über dem Neuhandel (rund $4.500–4.700) und gebraucht verkaufte RTX 4090 ($2.575–3.010) im Bereich der Neuangebote ($2.000–3.000), vergleichen Sie also vor dem Kauf beides. Eine geprüft funktionierende Gebrauchtkarte lohnt sich weiterhin, wenn sie deutlich günstiger ist — gehen Sie aber nie davon aus.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Budget-Build:** GPU RTX 4060 Ti 16 GB — führt 7B- und die meisten 13B-Modelle aus.',
          '**Mittelklasse-Build:** GPU RTX 4070 Ti Super 16 GB — führt 14B bequem aus, leichte 22B- bis 33B-Arbeit möglich.',
          '**Enthusiasten-Build:** GPU RTX 5090 32 GB — führt 33B bequem aus, 70B nur mit aggressiver Quantisierung oder teilweiser Auslagerung.',
          '**VRAM-Faustregel bei Q4_K_M:** etwa 0,6 GB pro Milliarde Parameter, plus 2 bis 4 GB für Kontext und Werkzeuge.',
          '**RAM-Empfehlung:** 32 GB für den Budget-Build, 64 GB für den Mittelklasse-Build, 128 GB für den Enthusiasten-Build.',
          '**Netzteil je Stufe:** 650 W Budget, 850 W Mittelklasse, 1000 W Enthusiast — die RTX 5090 zieht allein 575 W.',
          '**Preisrealität 2026:** GPUs, DDR5-RAM und SSDs sind wegen der Speicherknappheit alle stark gestiegen — prüfen Sie Live-Preise und vergleichen Sie neu mit gebraucht.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Empfehlung der Redaktion: der Mittelklasse-Build',
        highlight: true,
        content:
          '**Für die meisten Käufer, die einen PC für lokale KI bauen, ist der Mittelklasse-Build die Stufe, die Leistungsfähigkeit, Kosten und Reserven ausbalanciert.** Aufgebaut um eine RTX 4070 Ti Super 16 GB, führt er jedes 14B-Modell mit Kontextspielraum aus, bewältigt leichte 22B- bis 33B-Arbeit und lässt 7B- bis 14B-Modelle sofort reagieren Er sollte für die meisten Arbeiten mit 14B-Modellen noch lange nutzbar bleiben, doch Modellgrößen und Preise ändern sich. Greifen Sie nur dann zum Budget-Build, wenn Ihre Obergrenze fest bei 7B- bis 13B-Modellen liegt; steigen Sie nur dann zum Enthusiasten-Build auf, wenn Sie gezielt 70B-Arbeit benötigen. Der Mittelklasse-Build ist eine vernünftige Standardwahl für eine Maschine, die Sie behalten möchten.',
        callouts: [
          {
            type: 'note',
            text: 'Diese Redaktionsempfehlung spiegelt allein das Verhältnis von Preis zu Leistungsfähigkeit wider. PromptQuorum nimmt an keinem Partnerprogramm teil, und die untenstehenden Links tragen keine Affiliate-Kennungen — es sind reine Referenzlinks, die keine Provision einbringen.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'RTX 4070 Ti Super-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'RTX 4070 Ti Super-Preis bei Newegg prüfen',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie die drei Build-Stufen 2026 abschneiden',
        content:
          'GPU-VRAM- und Leistungsangaben sind Herstellerspezifikationen. Inferenzgeschwindigkeiten sind grobe, typische Richtwerte für die GPU-Klasse der jeweiligen Stufe (nicht von PromptQuorum gemessen); die tatsächliche Geschwindigkeit hängt von Quantisierung, Laufzeitumgebung und Kontextlänge ab. Build-Summen werden nicht erfasst: Nur der Preis der RTX 5090 trägt Quelle und Datum (siehe Enthusiasten-Build); RAM und übrige Teile werden auf dieser Seite nicht erfasst. Vergleichen Sie neue und gebrauchte GPU-Angebote: gebraucht ist nicht mehr immer günstiger.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bei einem Lokal-KI-PC entscheidet das VRAM der GPU, welche Modelle die Maschine ausführen kann, und die übrige Teileliste wird zur Unterstützung dieser GPU dimensioniert — wählen Sie die Stufe zuerst nach Modellgröße.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich den Build wie eine Mannschaft vor, die um einen Star aufgebaut ist: die GPU. CPU, RAM und Netzteil sind das unterstützende Ensemble — nützlich, aber sie existieren, um die GPU zu versorgen. Wählen Sie zuerst die GPU, die Ihr Modell braucht, und stellen Sie den Rest darum herum zusammen.',
          },
        ],
        columns: ['Build-Stufe', 'GPU', 'VRAM', 'Führt aus', 'Netzteil', 'Gesamt (2026)'],
        rows: [
          {
            'Build-Stufe': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Führt aus': '7B- bis 13B-Modelle',
            'Netzteil': '650 W',
            'Gesamt (2026)': 'nicht erfasst',
          },
          {
            'Build-Stufe': 'Mittelklasse',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Führt aus': '14B bequem, leichte 22B-33B',
            'Netzteil': '850 W',
            'Gesamt (2026)': 'nicht erfasst',
          },
          {
            'Build-Stufe': 'Enthusiast',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Führt aus': '33B bequem, 70B nur mit aggressiver Quantisierung oder teilweiser Auslagerung',
            'Netzteil': '1000 W',
            'Gesamt (2026)': 'nicht erfasst',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: 'Welchen Build sollten Sie wählen?',
        content:
          '**Ihr größtes Zielmodell legt die Stufe fest; Ihr Budget bestätigt sie.** Suchen Sie die Zeile, die zu Ihrer Situation passt.',
        columns: ['Ihre Situation', 'Dieser Build'],
        rows: [
          { 'Ihre Situation': 'Ich führe 7B- bis 13B-Modelle aus und will den günstigsten der drei Builds in dieser Anleitung', 'Dieser Build': 'Budget-Build' },
          { 'Ihre Situation': 'Ich will einen ersten Lokal-KI-PC und bin unsicher, wie weit ich gehen werde', 'Dieser Build': 'Budget-Build, oder Mittelklasse-Build für Reserven' },
          { 'Ihre Situation': 'Ich führe ständig 14B-Modelle aus und will sie sofort verfügbar haben', 'Dieser Build': 'Mittelklasse-Build' },
          { 'Ihre Situation': 'Ich mache leichte 22B- bis 33B-Arbeit und will eine Maschine, die hält', 'Dieser Build': 'Mittelklasse-Build' },
          { 'Ihre Situation': 'Ich führe 33B-Modelle intensiv aus oder will starke Zukunftsreserven', 'Dieser Build': 'Enthusiasten-Build' },
          { 'Ihre Situation': 'Single-GPU-Maschine für 70B-Modelle (nur mit aggressiver Quantisierung oder Auslagerung)', 'Dieser Build': 'Enthusiasten-Build' },
          { 'Ihre Situation': 'Ich will die Summe trotz des Preisanstiegs 2026 niedrig halten', 'Dieser Build': 'Jede Stufe — vergleichen Sie neue und gebrauchte GPU-Angebote' },
          { 'Ihre Situation': 'Ich bin unschlüssig und will den sichersten Build für viele Jahre', 'Dieser Build': 'Mittelklasse-Build — die Redaktionsempfehlung' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Budget-Build: RTX 4060 Ti 16 GB',
        content:
          '**Der Budget-Build ist der günstigste der drei Builds in dieser Anleitung und führt jedes 7B-Modell sowie die meisten 13B-Modelle aus — genug Leistungsfähigkeit für die meisten Erstnutzer.** Er ist um die RTX 4060 Ti 16 GB aufgebaut, die preisgünstigste 16-GB-Karte in dieser Anleitung, was die Summe so niedrig hält, wie die Knappheit 2026 es zulässt.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB VRAM, 165 W. Typisch sind bei 7B-Modellen rund 20-25 Tok/s (nicht von PromptQuorum gemessen, abhängig von Quantisierung und Kontext); 14B-Modelle passen mit Kontextreserve hinein. Die 16-GB-Kapazität ist der Grund, sie der 8-GB-Version vorzuziehen.',
          '**CPU — AMD Ryzen 7 7700:** 8 Kerne, geringe Leistungsaufnahme. Die CPU leistet während der GPU-Inferenz wenig, daher ist ein Mittelklasse-Chip hier richtig — geben Sie in dieser Stufe nicht zu viel für die CPU aus.',
          '**Mainboard — B650-Chipsatz:** unterstützt die Ryzen 7 und eine einzelne Vollformat-GPU auf PCIe. Eine hochwertige Spannungsversorgung ist auf dieser Stufe nicht nötig.',
          '**RAM — 32 GB DDR5:** genug für Betriebssystem, Werkzeuge und ein im VRAM laufendes 7B- bis 13B-Modell. RAM ist kein VRAM-Ersatz — 32 GB reichen hier, doch DDR5 ist jetzt die zweitgrößte Position in diesem Build.',
          '**Speicher — 1 TB NVMe-SSD:** fasst das Betriebssystem und mehrere Modelle (ein 7B-Q4-Modell ist rund 4-5 GB groß).',
          '**Netzteil — 650 W 80+ Gold:** komfortabler Spielraum für eine 165-W-GPU und eine 8-Kern-CPU.',
          '**Gehäuse und Kühlung — Midi-Tower mit einem Tower-Luftkühler:** die Budget-Stufe erzeugt wenig Hitze; Luftkühlung genügt.',
          '**Warum diese Stufe bauen:** niedrigste Einstiegskosten, geringe Leistungsaufnahme und genug Leistungsfähigkeit für die 7B- bis 13B-Modelle, die allgemeinen Chat, Coding-Hilfe und Zusammenfassungen abdecken. **Warum darauf verzichten:** wenn Sie bereits 14B- oder größere Modelle wollen, beginnen Sie beim Mittelklasse-Build.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Kaufen Sie die RTX 4060 Ti gezielt in der 16-GB-Version. Die 8-GB-Version nutzt denselben GPU-Die und läuft ähnlich schnell, aber 8 GB können kein 14B-Modell aufnehmen — der zusätzliche Speicher ist der ganze Sinn dieser Wahl.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'RTX 4060 Ti 16GB-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'Ryzen 7 7700-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: '32-GB-DDR5-RAM-Preis bei Amazon prüfen',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Mittelklasse-Build: RTX 4070 Ti Super 16 GB',
        content:
          '**Der Mittelklasse-Build ist die Empfehlung der Redaktion — er führt 14B-Modelle sofort aus, bewältigt leichte 22B- bis 33B-Arbeit und ist die Stufe, die Sie zum Behalten bauen.** Er ist um die RTX 4070 Ti Super 16 GB aufgebaut, schnell genug, dass die Antwortlatenz bei Modellen der 14B-Klasse nicht mehr spürbar ist.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB VRAM, 285 W. Dieselbe Modellkapazität wie die Budget-Stufe, aber deutlich schneller — 7B- bis 14B-Modelle reagieren sofort, und leichte 22B- bis 33B-Arbeit ist brauchbar.',
          '**CPU — AMD Ryzen 9 7900X:** 12 Kerne. Mehr Reserven als die Budget-CPU für Datenaufbereitung und das Ausführen von Werkzeugen neben der Inferenz.',
          '**Mainboard — B650- oder X670-Chipsatz:** solide Spannungsversorgung für die 12-Kern-CPU und eine 285-W-GPU.',
          '**RAM — 64 GB DDR5:** Platz für Betriebssystem, größere Kontextfenster und Werkzeuge wie eine RAG-Pipeline, die neben dem Modell läuft. Dies ist die größte Position nach der GPU — wenn das Budget knapp ist, führen 32 GB weiterhin jedes Modell dieser Stufe aus, weil das Modell im VRAM liegt.',
          '**Speicher — 2 TB NVMe-SSD:** fasst eine ansehnliche Modellbibliothek — ein 33B-Q4-Modell ist rund 18-20 GB groß.',
          '**Netzteil — 850 W 80+ Gold:** komfortabler Spielraum für die 285-W-GPU und die 12-Kern-CPU unter Dauerlast.',
          '**Gehäuse und Kühlung — Midi-Tower mit einer 240-280-mm-AIO oder hochwertigem Luftkühler:** die Mittelklasse-Stufe erzeugt moderate Hitze; ein hochwertiger Kühler hält die CPU bei langen Inferenzläufen stabil.',
          '**Warum diese Stufe bauen:** Sie führen ständig 14B-Modelle aus und wollen sie sofort verfügbar haben, oder Sie machen leichte 22B- bis 33B-Arbeit und wollen Reserven. **Warum darauf verzichten:** wenn 7B bis 13B reichen, ist der Budget-Build günstiger; wenn Sie 70B brauchen, passt keine 16-GB-GPU dafür — gehen Sie zum Enthusiasten-Build.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der Mittelklasse-Build nimmt dieselben Modelle auf wie der Budget-Build — Sie bezahlen für Geschwindigkeit, nicht für Kapazität. Bauen Sie diese Stufe, wenn 14B-Modelle ein tägliches Arbeitspensum sein werden und das Warten darauf Sie stören würde.',
          },
          {
            type: 'note',
            text: 'Eine gebrauchte RTX 4090 24 GB wird inzwischen weit über dieser Stufe angeboten (gebraucht verkaufte Angebote $2.575–3.010 laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert 2026-10-15) und taugt daher nicht mehr als Abkürzung. Vergleichen Sie bei der RTX 4070 Ti Super vor dem Kauf neue und gebrauchte Angebote; ihr Preis wird hier nicht erfasst.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'RTX 4070 Ti Super-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'Ryzen 9 7900X-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: '64-GB-DDR5-RAM-Preis bei Amazon prüfen',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Enthusiasten-Build: RTX 5090 32 GB',
        content:
          '**Von den drei Builds hier kann nur der Enthusiasten-Build ein 70B-Modell auf einer einzelnen GPU ausführen, und nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM — die RTX 5090 32 GB ist das Schlüsselbauteil.** Bauen Sie diese Stufe für VRAM-Kapazität, nicht für rohe Geschwindigkeit; die Geschwindigkeit ist ein Nebeneffekt. Der Preisanstieg 2026 traf diese Stufe am härtesten — die RTX 5090 wird im Neuhandel bei rund $4.500–4.700 gegenüber $1.999 UVP gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert 2026-10-15) —, daher dominieren GPU- und RAM-Zeile die Kosten.',
        items: [
          '**GPU — RTX 5090 32 GB (Neuhandel rund $4.500–4.700 gegenüber $1.999 UVP; gebraucht verkauft $5.900–6.350; [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert 2026-10-15; Listendaten, keine Angebote):** 32 GB GDDR7-VRAM, 575 W. Die Einzel-GPU mit dem meisten VRAM in dieser Anleitung; ohne Dual-GPU-Build führt sie ein 70B-Modell nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM aus. Sie führt 33B-Modelle bequem und mit Reserve aus.',
          '**CPU — AMD Ryzen 9 7950X:** 16 Kerne. Genug, um Datenaufbereitung, Fine-Tuning-Experimente und Werkzeuge neben intensiver Inferenz auszuführen.',
          '**Mainboard — X670E-Chipsatz:** starke Spannungsversorgung und PCIe 5.0, ausgelegt für eine 575-W-GPU und die 16-Kern-CPU.',
          '**RAM — 128 GB DDR5:** Platz für große Kontextfenster, mehrere gleichzeitig geladene Modelle und Werkzeuge — sowie die Reserve, ein Modell bei Bedarf teilweise ins RAM auszulagern. Nur wenige 128-GB-Kits sind verlässlich lieferbar; ein 64-GB-Kit ist die sparsamere Alternative.',
          '**Speicher — 4 TB NVMe-SSD:** ein 70B-Q4-Modell ist rund 40 GB groß; ein 4-TB-Laufwerk fasst eine große Bibliothek großer Modelle. 4-TB-Laufwerke verteuerten sich 2026 am stärksten aller SSD-Größen.',
          '**Netzteil — 1000 W 80+ Platinum:** erforderlich, weil die RTX 5090 allein 575 W zieht — ein 750-W-Gerät würde unter Last einbrechen. Dimensionieren Sie dieses Teil nicht zu klein.',
          '**Gehäuse und Kühlung — Big-Tower mit einer 360-mm-AIO:** die 575-W-GPU und die 16-Kern-CPU erzeugen echte Hitze; eine 360-mm-Wasserkühlung hält die CPU bei anhaltender 70B-Inferenz stabil.',
          '**Warum diese Stufe bauen:** Sie brauchen 33B- oder 70B-Modelle, führen intensive Batch-Inferenz aus oder wollen eine Maschine, die jahrelang nicht ersetzt werden muss. **Warum darauf verzichten:** für 7B- bis 14B-Modelle ist sie überdimensioniert — der Mittelklasse-Build liefert auf diesen Größen sofortige Antworten zu weniger als der Hälfte der Kosten.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Die RTX 5090 zieht allein 575 W. Kombinieren Sie sie mit dem 1000-W-Netzteil aus dieser Teileliste — ein kleineres Gerät bricht unter Last ein. Prüfen Sie vor dem Bau, ob Ihr Stromkreis die volle Leistungsaufnahme liefern kann. Dies ist keine Beratung zur elektrischen Sicherheit; beachten Sie die Hinweise von NVIDIA und des Netzteilherstellers.',
          },
          {
            type: 'note',
            text: 'Ein 70B-Modell bei Q4 benötigt rund 39-42 GB VRAM, sodass selbst die RTX 5090 32 GB 70B bei Q4 nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM ausführt. Die 128 GB RAM in diesem Build geben dieser Auslagerung den nötigen Spielraum.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'RTX 5090-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'Ryzen 9 7950X-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: '1000-W-Netzteilpreis bei Amazon prüfen',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Wie der Preisanstieg 2026 die Build-Rechnung verändert',
        content:
          '**Die Speicherchip-Knappheit von 2026 hat die Preise für GPUs und DDR5-RAM weit über das Normale getrieben, und da GPU und RAM die zwei größten Positionen in jedem Build sind, dominieren sie die Kosten.** Planen Sie den Build um aktuelle Angebotspreise, nicht um Launch-Preise.',
        items: [
          '**GPU und RAM dominieren die Summe.** In jeder Stufe ist die GPU die größte Position und DDR5-RAM inzwischen die zweitgrößte — der Preisanstieg verändert die Build-Summe über diese beiden Teile stärker als über jedes andere.',
          '**Die Ursache ist Speicher, nicht GPUs.** Eine Knappheit bei GDDR-, HBM- und DRAM-Speicher hat die Kosten jeder Karte mit schnellem Speicher und des System-RAMs selbst erhöht; je höher das VRAM, desto härter wurde die Karte getroffen. Die RTX 5090 wird im Neuhandel bei rund $4.500–4.700 gegenüber $1.999 UVP gelistet (4.500 / 1.999 = 2,25×), laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Quelle aktualisiert 2026-10-15) — mehr als das Doppelte.',
          '**Preise schwächerer GPUs werden hier nicht erfasst.** RTX 4060 Ti 16 GB und RTX 4070 Ti Super aus dem Budget- und dem Mittelklasse-Build deckt der Tracker nicht ab; prüfen Sie dafür die Live-Angebote.',
          '**Gebraucht ist kein verlässlicher Rabatt mehr.** Der [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Quelle aktualisiert 2026-10-15) zeigt gebraucht verkaufte RTX 5090 bei $5.900–6.350 gegenüber rund $4.500–4.700 im Neuhandel und gebraucht verkaufte RTX 4090 bei $2.575–3.010 (Median $2.860); das sind Listendaten, keine Angebote. Vergleichen Sie bei jeder Karte neue und gebrauchte Angebote; eine geprüft funktionierende Gebrauchtkarte lohnt sich nur, wenn sie deutlich günstiger ist.',
          '**RAM und SSDs bewegten sich stark; CPU, Mainboard und Netzteil kaum.** Die DDR5-Preise stiegen laut [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) (2026-08-18) in 12 Monaten bis August 2026 um rund 500 % (ein 128-GB-DDR5-6400-Kit wurde für $3.399 gelistet). Preise für CPU, Mainboard, Netzteil und SSD werden auf dieser Seite nicht erfasst; prüfen Sie auch diese.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die Speicherknappheit 2026 hat die Preise für GPUs und DDR5-RAM weit über das Normale getrieben, sodass GPU und RAM die zwei größten Kostenpositionen eines Lokal-KI-Builds sind.',
          },
          {
            type: 'plain-terms',
            text: 'Die GPU ist das teuerste Teil der Maschine, und 2026 ist auch das RAM teuer geworden. Bis sich die Speicherknappheit entspannt, behandeln Sie Launch-Preise als Vergangenheit, vergleichen Sie vor dem Kauf neu und gebraucht und kaufen Sie nicht mehr VRAM oder RAM, als Ihr Modell braucht.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Entscheidungsdiagramm: Wählen Sie Ihren Build in vier Fragen',
        content:
          '**Vier Fragen, der Reihe nach, leiten die meisten Bauenden zu einer Stufe.**',
        items: [
          '**1. Was ist das größte Modell, das Sie ausführen möchten?** 7B-13B: Budget-Build. 14B-33B: Mittelklasse-Build. 70B: Enthusiasten-Build.',
          '**2. Was ist Ihre harte Budget-Obergrenze?** Budget-Build für die niedrigsten Kosten, Mittelklasse-Build für die Mitte, Enthusiasten-Build für die höchsten — allein die RTX 5090 wird im Neuhandel bei rund $4.500–4.700 gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert 2026-10-15).',
          '**3. Neue oder gebrauchte GPU?** Vergleichen Sie beides — laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Quelle aktualisiert 2026-10-15) liegen gebraucht verkaufte RTX 5090 und RTX 4090 auf oder über den neuen, daher ist eine Gebrauchtkarte nur dann die richtige Wahl, wenn sie deutlich günstiger ist.',
          '**4. Halten Ihr Strom- und Platzplan stand?** Prüfen Sie, dass das Netzteil zur Stufe passt (650 W / 850 W / 1000 W) und das Gehäuse GPU und Kühler aufnimmt, bevor Sie Teile bestellen.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Wählen Sie einen Lokal-KI-PC-Build, indem Sie zuerst die größte Modellgröße, zweitens die Budget-Obergrenze, drittens neu gegen gebraucht bei der GPU und zuletzt Strom- und Platzplanung beantworten.',
          },
          {
            type: 'plain-terms',
            text: 'Beginnen Sie mit dem größten Modell, das Sie tatsächlich ausführen möchten, und lassen Sie das Ihre Stufe festlegen. Prüfen Sie dann Ihr Budget, entscheiden Sie über einen Gebrauchtkauf der GPU und stellen Sie sicher, dass Netzteil und Gehäuse zu den Teilen passen. In dieser Reihenfolge vermeiden Sie einen Build, der Ihr Modell nicht ausführen kann.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Wo Sie Komponenten kaufen',
        content:
          '**Große Händler führen jedes Teil dieser Builds; vergleichen Sie bei der GPU gezielt neue und gebrauchte Angebote.** Die untenstehenden Links sind reine Produktsuch-Links; sie tragen keine Affiliate-Kennungen und bringen keine Provision ein.',
        items: [
          '**Amazon und Newegg:** das breiteste Angebot an CPUs, RAM, SSDs, Netzteilen und Gehäusen. Der Lagerbestand neuer GPUs und von DDR5 ist dünner und auf dem Niveau des Preisanstiegs 2026 bepreist.',
          '**Gebrauchtmarkt für GPUs:** einen Blick wert, aber keine garantierte Ersparnis mehr — laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Quelle aktualisiert 2026-10-15) liegen gebraucht verkaufte RTX 5090 und RTX 4090 auf oder über den neuen. Kaufen Sie gebraucht nur, wenn es deutlich günstiger und geprüft funktionsfähig ist.',
          '**Mindfactory und Alternate (DE):** zuverlässige Quellen für CPUs, Mainboards und Netzteile sowie häufig für CPU-plus-Mainboard-Bundles, die teure DDR5-Aufpreise umgehen.',
          '**Kaufen Sie die GPU zuerst.** Sie ist die größte, schwankungsanfälligste Position — sichern Sie die GPU zu einem Preis, den Sie akzeptieren, und kaufen Sie dann die unterstützenden Teile darum herum.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wegen des Preisanstiegs 2026 werden Build-Summen in dieser Anleitung nicht erfasst. Öffnen Sie vor dem Bau stets die aktuellen Händlerangebote für GPU und RAM — zusammen dominieren sie die Build-Kosten.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'GPUs bei Amazon durchsuchen',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'Ryzen-CPUs bei Newegg durchsuchen',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'DDR5-RAM bei Amazon durchsuchen',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'NVMe-SSDs bei Amazon durchsuchen',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'Netzteile bei Amazon durchsuchen',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Bau eines Lokal-KI-PCs',
        items: [
          '**Die CPU vor der GPU wählen.** Die GPU entscheidet, welche Modelle die Maschine ausführt; die CPU leistet während der Inferenz wenig. Wählen Sie zuerst die GPU und dimensionieren Sie dann die CPU zu ihrer Unterstützung.',
          '**Arbeitsspeicher statt VRAM kaufen.** RAM lässt ein Modell aus dem VRAM auslagern, doch ein aus dem RAM laufendes Modell ist für die interaktive Nutzung zu langsam. Kaufen Sie genug VRAM für das Modell; kaufen Sie RAM nur für Betriebssystem und Werkzeuge.',
          '**Das Netzteil zu klein dimensionieren.** Allein die RTX 5090 zieht 575 W. Ein Netzteil, das unter Last einbricht, ist schlimmer als eine langsamere, aber stabil laufende GPU — passen Sie das Netzteil an die Stufe an.',
          '**Sich an Launch-Preisen orientieren.** Der Preisanstieg 2026 bedeutet, dass GPU-UVPs und die RAM-Preise des Vorjahres die Realität nicht mehr abbilden. Kalkulieren Sie GPU und RAM gegen Live-Händlerpreise und vergleichen Sie den Gebrauchtmarkt, statt ihn für günstiger zu halten.',
          '**Die 8-GB-RTX 4060 Ti für den Budget-Build kaufen.** Sie teilt einen Namen mit der 16-GB-Version, kann aber kein 14B-Modell aufnehmen. Bestätigen Sie die 16-GB-Variante im Angebot.',
          '**Für 7B-Modelle überdimensionieren.** Wenn 7B-Modelle Ihren Anwendungsfall abdecken, verschwendet der Enthusiasten-Build Tausende Euro und Hunderte Watt. Passen Sie die Stufe an das Modell an, nicht an das Budget, das Sie zufällig haben.',
          '**Gehäuse- und Kühlungsplanung überspringen.** Eine 575-W-GPU plus eine 16-Kern-CPU erzeugt echte Hitze. Bestätigen Sie, dass das Gehäuse GPU und Kühler aufnimmt und über Luftstrom verfügt, bevor Sie Teile bestellen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Bester GPU-Kaufratgeber für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: GPU-Kaufberatung und der Kontext des Preisanstiegs 2026 hinter den Build-Summen hier.',
          '[Lokale-LLM-Workstation bauen](/de/local-llms/local-llm-workstation-build) — PromptQuorum: Teileliste, Kühlung und Netzteilhinweise für eine Dual-GPU-70B-Workstation hinter der Enthusiasten-Stufe.',
          '[NVIDIA GeForce RTX 40- und 50-Serie Spezifikationen](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Offizielle VRAM-Kapazitäts- und Leistungswerte (TGP) für RTX 4060 Ti, 4070 Ti Super und 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live-Komponentenpreise für AMD-Ryzen-CPUs, DDR5-RAM, NVMe-SSDs und Netzteile.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: "Ist ein 1000-W-Netzteil für einen Build mit einer GPU übertrieben?",
            a: "Nicht für eine RTX 5090: Sie ist mit 575 W spezifiziert und kann kurzzeitig darüber hinaus spitzen, weshalb NVIDIA in der Referenzangabe ein 1000-W-Netzteil nennt. Für den Budget- und den Mittelklasse-Build dieses Leitfadens wäre es übertrieben: 650 W und 850 W (80+ Gold) bieten für RTX 4060 Ti 16 GB und RTX 4070 Ti Super 16 GB ausreichend Reserve. Ein ATX-3.1-Netzteil mit nativem 12V-2x6-Anschluss ist wichtiger als zusätzliche Watt.",
          },
          {
            q: 'Was kostet es 2026, einen PC für lokale KI zu bauen?',
            a: 'Build-Summen werden hier nicht erfasst, weil sich GPU- und RAM-Preise 2026 schnell bewegen und nur GPU-Preise eine datierte Quelle haben. Die RTX 5090 im Enthusiasten-Build wird im Neuhandel bei rund $4.500–4.700 gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert 2026-10-15), und die DDR5-Preise stiegen laut [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) (2026-08-18) in 12 Monaten bis August 2026 um rund 500 %. Addieren Sie die Live-Preise der Teileliste der gewählten Stufe.',
          },
          {
            q: 'Welche GPU sollte ich in einen Lokal-KI-PC einbauen?',
            a: 'Wählen Sie die GPU nach Ihrem größten Zielmodell. Eine RTX 4060 Ti 16 GB passt zu einem Budget-Build für 7B- bis 13B-Modelle, eine RTX 4070 Ti Super 16 GB zu einem Mittelklasse-Build für 14B- bis 33B-Modelle und eine RTX 5090 32 GB zu einem Enthusiasten-Build für 70B-Arbeit. Die GPU entscheidet, welche Modelle die Maschine ausführen kann, daher wird sie zuerst gewählt und die übrige Teileliste darum herum gebaut.',
          },
          {
            q: 'Wie viel RAM brauche ich für einen Lokal-KI-PC?',
            a: 'Planen Sie 32 GB für einen Budget-Build, 64 GB für einen Mittelklasse-Build und 128 GB für einen Enthusiasten-Build. Arbeitsspeicher ist kein Ersatz für VRAM — ein aus dem RAM laufendes Modell ist für die interaktive Nutzung zu langsam. RAM ist für Betriebssystem, Kontext und Werkzeuge da; kaufen Sie genug VRAM auf der GPU für das Modell selbst.',
          },
          {
            q: 'Welches Netzteil braucht ein Lokal-KI-PC?',
            a: 'Passen Sie das Netzteil an die Stufe an: 650 W für den Budget-Build, 850 W für den Mittelklasse-Build und 1000 W für den Enthusiasten-Build. Die Enthusiasten-Stufe benötigt 1000 W, weil die RTX 5090 allein 575 W zieht. Ein zu klein dimensioniertes Netzteil verursacht Instabilität unter Last, daher sparen Sie nicht an diesem Teil.',
          },
          {
            q: 'Sollte ich GPU-Komponenten 2026 neu oder gebraucht kaufen?',
            a: 'Vergleichen Sie neu und gebraucht, bevor Sie sich entscheiden; gehen Sie nicht davon aus, dass gebraucht günstiger ist. Der [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Quelle aktualisiert 2026-10-15) zeigt gebraucht verkaufte RTX 5090 bei $5.900–6.350 gegenüber rund $4.500–4.700 im Neuhandel und gebraucht verkaufte RTX 4090 bei $2.575–3.010. Eine geprüft funktionierende Gebrauchtkarte lohnt sich nur, wenn sie deutlich günstiger ist. CPUs, RAM, SSDs und Netzteile kauft man am besten neu.',
          },
          {
            q: 'Kann ein Single-GPU-Build ein 70B-Modell ausführen?',
            a: 'Ja, der Enthusiasten-Build kann es. Eine RTX 5090 32 GB hat den meisten VRAM aller Einzel-GPUs in dieser Anleitung, doch ein 70B-Modell bei Q4 benötigt rund 39-42 GB — sie führt 70B daher nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM aus. Die 128 GB RAM im Enthusiasten-Build geben dieser Auslagerung den nötigen Spielraum.',
          },
          {
            q: 'Lohnt sich der Mittelklasse-Build gegenüber dem Budget-Build?',
            a: 'Ja, wenn Sie Modelle der 14B-Klasse regelmäßig ausführen. Der Budget- und der Mittelklasse-Build nehmen ähnliche Modelle auf, doch die RTX 4070 Ti Super des Mittelklasse-Builds ist deutlich schneller — 14B-Modelle reagieren sofort statt träge, und leichte 22B- bis 33B-Arbeit wird brauchbar. Wenn Ihre Obergrenze fest bei 7B- bis 13B-Modellen liegt, ist der Budget-Build günstiger und das bessere Preis-Leistungs-Verhältnis.',
          },
          {
            q: 'Brauche ich eine Threadripper-CPU für einen Lokal-KI-PC?',
            a: 'Nein. Eine Consumer-Ryzen-CPU reicht für alle drei Builds dieser Anleitung — eine Ryzen 7 für die Budget-Stufe, eine Ryzen 9 für die Mittelklasse- und die Enthusiasten-Stufe. Eine Threadripper lohnt ihre Kosten nur für eine Dual-GPU-Maschine, die Fine-Tuning und Inferenz gleichzeitig ausführt, was über einen Single-GPU-Build hinausgeht.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Wählen Sie die GPU für Ihren Build mit dem vollständigen Kaufratgeber](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — acht GPUs über vier Budget-Stufen, mit aktuellen Preisen und der Rechnung zum Preisanstieg.',
          '[Sehen Sie den Dual-GPU-70B-Workstation-Build für den Produktiveinsatz](/de/local-llms/local-llm-workstation-build) — die Dual-GPU-Stufe mit 48 GB VRAM für 70B-Modelle jenseits des Enthusiasten-Builds dieser Anleitung.',
          '[Vergleichen Sie den PC-Bau mit der Miete von Cloud-GPUs](/de/power-local-llm/cloud-gpu-rental-guide-2026) — wann Mieten den Hardwarekauf für gelegentliche Rechenlast schlägt.',
          '[Ermitteln Sie das VRAM jeder Modellgröße vor dem Bau](/de/local-llms/how-much-vram-local-llm) — die vollständige VRAM-nach-Modellgröße-Methode hinter den Stufenwahlen hier.',
          '[Ziehen Sie einen Mac als Alternative zu einem PC-Build in Betracht](/de/power-local-llm/best-mac-for-local-ai-2026) — wann Apple Silicon mit vereinheitlichtem Speicher einen PC mit dedizierter GPU für lokale KI schlägt.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-fr.webp',
    title: 'Monter une station IA locale en 2026 : 3 niveaux de budget',
    seoTitle: 'PC pour IA locale 2026 : du budget à la station 70B',
    intro:
      'La plupart des guides de montage pour IA locale commencent par le processeur, mais ce sont le GPU et sa VRAM qui déterminent les modèles que la machine peut exécuter — chaque autre pièce est choisie pour soutenir ce GPU. Ce guide fournit trois listes de pièces complètes pour un PC dédié aux LLM locaux : une configuration budget pour les modèles 7B-13B, une configuration intermédiaire pour les modèles 14B-33B et une configuration enthousiaste pour le travail sur des modèles 70B. Chaque niveau précise les composants exacts, les performances attendues. Une réserve sur les prix : la pénurie de puces mémoire de 2026 a poussé les prix des GPU et de la RAM DDR5 très au-dessus de ceux de l\'an dernier, si bien que les totaux et les prix des autres pièces ne sont pas suivis ici ; seuls les prix des GPU le sont, d\'après une source datée ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source mise à jour le 2026-10-15) — vérifiez les annonces en direct avant de commander.',
    metaDescription:
      'Trois configurations PC IA locale complètes pour 2026 : niveaux budget 7B-13B, intermédiaire 14B-33B et enthousiaste 70B. Listes de pièces exactes, prix GPU datés et notes sur la pénurie de DDR5 de 2026.',
    twitterDescription:
      'Guide de montage d\'un PC pour IA locale : trois niveaux de budget avec listes de pièces complètes pour les modèles 7B à 70B. Les prix des GPU et de la RAM ont flambé en 2026 — voici des prix GPU datés.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      'Acheteurs montant un PC spécifiquement pour exécuter des LLM locaux, qui choisissent selon le niveau de budget et la taille de modèle visée. Suppose une familiarité avec la quantification et la VRAM comme contrainte, ainsi qu\'avec les termes de base du montage PC, mais pas avec les références de composants actuelles.',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      'monter pc ia locale 2026',
      'guide montage station llm local',
      'meilleur pc pour exécuter des llm',
      'liste de pièces station ia',
      'comment monter un pc pour ia locale',
    ],
    leadAnswerBlock:
      '**La meilleure configuration PC pour l\'IA locale est le niveau dont la VRAM du GPU correspond au modèle visé. Une configuration budget exécute les modèles 7B-13B, une configuration intermédiaire couvre les modèles 14B-33B et une configuration enthousiaste prend en charge les modèles 70B — les totaux ne sont pas suivis ici car les prix des GPU et de la RAM évoluent vite en 2026 ; les prix des GPU sont indiqués avec leur source et leur date.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment monter un PC pour exécuter des LLM locaux en 2026 ?',
        answer:
          'Choisissez votre niveau selon le plus grand modèle que vous voulez exécuter, puis montez autour du GPU. Une configuration budget associe une RTX 4060 Ti 16 GB à un processeur Ryzen 7 pour les modèles 7B-13B. Une configuration intermédiaire utilise une RTX 4070 Ti Super 16 GB pour les modèles 14B-33B. Une configuration enthousiaste emploie une RTX 5090 32 GB pour le travail 70B. La pénurie de mémoire de 2026 a poussé les GPU, la RAM DDR5 et les SSD bien au-dessus de leurs prix habituels, donc les totaux ne sont pas suivis ici et seuls les prix des GPU portent une source et une date.',
        bullets: [
          'Configuration budget : RTX 4060 Ti 16 GB, exécute les modèles 7B-13B',
          'Configuration intermédiaire : RTX 4070 Ti Super 16 GB, exécute les modèles 14B-33B',
          'Configuration enthousiaste : RTX 5090 32 GB, exécute les modèles 70B uniquement avec une quantification agressive ou un déchargement partiel',
          'Les prix des GPU, de la RAM et des SSD ont tous flambé en 2026 — comparez le neuf et l\'occasion, car l\'occasion ne coûte plus systématiquement moins cher',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Choix de la rédaction', anchor: '#editors-choice' },
      { label: 'Comparaison des niveaux', anchor: '#comparison-table' },
      { label: 'Quelle configuration choisir ?', anchor: '#which-build' },
      { label: 'Configuration budget', anchor: '#budget-build' },
      { label: 'Configuration intermédiaire', anchor: '#mid-build' },
      { label: 'Configuration enthousiaste', anchor: '#enthusiast-build' },
      { label: 'Comment la hausse des prix de 2026 modifie les configurations', anchor: '#price-surge' },
      { label: 'Logigramme de décision', anchor: '#decision-flowchart' },
      { label: 'Où acheter les composants', anchor: '#where-to-buy' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Le GPU fixe le niveau ; le reste de la configuration le soutient.** Un PC pour IA locale se choisit GPU en premier, car la VRAM décide des modèles exécutables. Choisissez le niveau dont la VRAM du GPU correspond à votre modèle visé, puis dimensionnez le processeur, la RAM et l\'alimentation autour de lui.',
          '**Les prix de 2026 ont renchéri les configurations.** Une pénurie de puces mémoire a poussé les GPU et la RAM DDR5 très au-dessus des prix de l\'an dernier. Les totaux ne sont pas suivis ici — et la RAM est désormais une ligne de coût majeure, pas un détail (les prix de la DDR5 ont augmenté d\'environ 500 % en 12 mois jusqu\'en août 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Configuration budget :** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD 1 To, alimentation 650 W — exécute les modèles 7B-13B à vitesse utilisable. La moins coûteuse des trois configurations de ce guide.',
          '**Configuration intermédiaire :** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD 2 To, alimentation 850 W — exécute les modèles 14B-33B et rend les modèles 7B-14B instantanés.',
          '**Configuration enthousiaste :** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD 4 To, alimentation 1000 W — des trois configurations ici, la seule capable d\'exécuter un modèle 70B sur un seul GPU, et seulement avec une quantification agressive ou un déchargement partiel vers la RAM système. La RTX 5090 seule est affichée neuve autour de $4,500–4,700 ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source mise à jour le 2026-10-15).',
          '**La RAM ne remplace pas la VRAM.** La mémoire système permet à un modèle de déborder de la VRAM, mais un modèle exécuté depuis la RAM est trop lent pour un usage interactif. Achetez assez de VRAM pour le modèle ; achetez de la RAM pour le système d\'exploitation et l\'outillage.',
          '**L\'alimentation évolue avec le GPU.** Une configuration budget exige 650 W, l\'intermédiaire 850 W et l\'enthousiaste 1000 W, car la seule RTX 5090 consomme 575 W. Budgétez l\'alimentation en même temps que la carte.',
          '**L\'occasion n\'est plus une remise garantie.** D\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source mise à jour le 2026-10-15), les RTX 5090 vendues d\'occasion ($5,900–6,350) dépassent le prix neuf (environ $4,500–4,700) et les RTX 4090 vendues d\'occasion ($2,575–3,010) chevauchent la fourchette des annonces neuves ($2,000–3,000) ; comparez donc les deux avant d\'acheter. Une carte d\'occasion vérifiée fonctionnelle reste intéressante quand elle est nettement moins chère — mais ne le présumez jamais.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Configuration budget :** GPU RTX 4060 Ti 16 GB — exécute les modèles 7B et la plupart des 13B.',
          '**Configuration intermédiaire :** GPU RTX 4070 Ti Super 16 GB — exécute aisément le 14B, travail léger en 22B-33B.',
          '**Configuration enthousiaste :** GPU RTX 5090 32 GB — exécute aisément le 33B, et le 70B uniquement avec une quantification agressive ou un déchargement partiel.',
          '**Règle empirique de VRAM en Q4_K_M :** environ 0,6 GB par milliard de paramètres, plus 2-4 GB pour le contexte et l\'outillage.',
          '**Recommandation de RAM système :** 32 GB pour la configuration budget, 64 GB pour l\'intermédiaire, 128 GB pour l\'enthousiaste.',
          '**Alimentation par niveau :** 650 W budget, 850 W intermédiaire, 1000 W enthousiaste — la RTX 5090 consomme 575 W à elle seule.',
          '**Réalité tarifaire de 2026 :** GPU, RAM DDR5 et SSD ont tous flambé avec la pénurie mémoire — vérifiez les prix en direct et comparez le neuf à l\'occasion.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Choix de la rédaction : la configuration intermédiaire',
        highlight: true,
        content:
          '**Pour la plupart des acheteurs montant un PC pour l\'IA locale, la configuration intermédiaire est le niveau qui équilibre capacité, coût et marge.** Bâtie autour d\'une RTX 4070 Ti Super 16 GB, elle exécute chaque modèle 14B avec de la marge de contexte, gère le travail léger en 22B-33B et rend les modèles 7B-14B instantanés Cette configuration devrait rester utilisable pour la plupart des charges de classe 14B pendant un bon moment, mais les tailles de modèles et les prix évoluent. Ne descendez à la configuration budget que si votre plafond est fermement les modèles 7B-13B ; ne montez à la configuration enthousiaste que si vous avez spécifiquement besoin du travail 70B. La configuration intermédiaire est un choix par défaut raisonnable pour une machine que vous voulez garder.',
        callouts: [
          {
            type: 'note',
            text: 'Ce choix de la rédaction reflète uniquement le rapport prix/capacité. PromptQuorum n\'est inscrit à aucun programme d\'affiliation et les liens ci-dessous ne portent aucune balise affiliée — ce sont de simples liens de référence qui ne génèrent aucune commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de la RTX 4070 Ti Super sur Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de la RTX 4070 Ti Super sur Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comment se comparent les trois niveaux en 2026',
        content:
          'Les chiffres de VRAM et de puissance du GPU sont des spécifications constructeur. Les vitesses d\'inférence sont des ordres de grandeur typiques pour la classe de GPU de chaque niveau (non mesurées par PromptQuorum) ; la vitesse réelle dépend de la quantification, du moteur d\'exécution et de la longueur de contexte. Les totaux ne sont pas suivis : seul le prix de la RTX 5090 porte une source et une date (voir la configuration enthousiaste), et la RAM et les autres pièces ne sont pas suivies sur cette page. Comparez les annonces de GPU neufs et d\'occasion : l\'occasion ne coûte plus toujours moins cher.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour un PC dédié à l\'IA locale, la VRAM du GPU décide des modèles que la machine peut exécuter et le reste de la liste de pièces est dimensionné pour soutenir ce GPU — choisissez le niveau d\'abord selon la taille du modèle.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez la configuration comme une équipe bâtie autour d\'une vedette, le GPU. Le processeur, la RAM et l\'alimentation sont les seconds rôles — utiles, mais ils existent pour alimenter le GPU. Choisissez d\'abord le GPU dont votre modèle a besoin, puis assemblez le reste autour de lui.',
          },
        ],
        columns: ['Niveau', 'GPU', 'VRAM', 'Exécute', 'Alimentation', 'Total (2026)'],
        rows: [
          {
            'Niveau': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Exécute': 'modèles 7B-13B',
            'Alimentation': '650 W',
            'Total (2026)': 'non suivi',
          },
          {
            'Niveau': 'Intermédiaire',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Exécute': '14B aisément, 22B-33B léger',
            'Alimentation': '850 W',
            'Total (2026)': 'non suivi',
          },
          {
            'Niveau': 'Enthousiaste',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Exécute': '33B aisément, 70B uniquement avec une quantification agressive ou un déchargement partiel',
            'Alimentation': '1000 W',
            'Total (2026)': 'non suivi',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: 'Quelle configuration choisir ?',
        content:
          '**Votre plus grand modèle visé fixe le niveau ; votre budget le confirme.** Trouvez la ligne qui correspond à votre situation.',
        columns: ['Votre situation', 'Montez ceci'],
        rows: [
          { 'Votre situation': 'J\'exécute des modèles 7B-13B et je veux la moins chère des trois configurations de ce guide', 'Montez ceci': 'Configuration budget' },
          { 'Votre situation': 'Je veux un premier PC pour l\'IA locale sans savoir jusqu\'où j\'irai', 'Montez ceci': 'Configuration budget, ou intermédiaire pour la marge' },
          { 'Votre situation': 'J\'exécute des modèles 14B en permanence et je les veux instantanés', 'Montez ceci': 'Configuration intermédiaire' },
          { 'Votre situation': 'Je fais du travail léger en 22B-33B et je veux une machine durable', 'Montez ceci': 'Configuration intermédiaire' },
          { 'Votre situation': 'J\'exécute intensivement des modèles 33B ou je veux une forte marge d\'avenir', 'Montez ceci': 'Configuration enthousiaste' },
          { 'Votre situation': 'Machine mono-GPU pour modèles 70B (quantification agressive ou déchargement partiel requis)', 'Montez ceci': 'Configuration enthousiaste' },
          { 'Votre situation': 'Je veux contenir le total malgré la flambée de 2026', 'Montez ceci': 'N\'importe quel niveau — comparez les annonces de GPU neufs et d\'occasion' },
          { 'Votre situation': 'Je suis indécis et je veux la configuration la plus sûre à garder des années', 'Montez ceci': 'Configuration intermédiaire — le choix de la rédaction' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuration budget : RTX 4060 Ti 16 GB',
        content:
          '**La configuration budget est la moins chère des trois configurations de ce guide et exécute chaque modèle 7B ainsi que la plupart des 13B — assez de capacité pour la plupart des nouveaux venus.** Elle est bâtie autour de la RTX 4060 Ti 16 GB, la carte 16 GB la moins chère de ce guide, ce qui maintient le total aussi bas que la pénurie de 2026 le permet.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB :** 16 GB de VRAM, 165 W. Vitesse typique pour cette classe de GPU : environ 20-25 tok/s sur les modèles 7B (non mesurée par PromptQuorum ; variable selon la quantification et le contexte) ; les modèles 14B tiennent avec de la marge de contexte. La capacité de 16 GB est la raison de la préférer à la version 8 GB.',
          '**Processeur — AMD Ryzen 7 7700 :** 8 cœurs, consommation modeste. Le processeur travaille peu pendant l\'inférence GPU, donc une puce de milieu de gamme est correcte ici — ne dépensez pas trop pour le processeur à ce niveau.',
          '**Carte mère — chipset B650 :** prend en charge le Ryzen 7 et un seul GPU pleine taille en PCIe. Pas besoin d\'une alimentation électrique haut de gamme à ce niveau.',
          '**RAM — 32 GB DDR5 :** assez pour le système d\'exploitation, l\'outillage et un modèle 7B-13B exécuté en VRAM. La RAM ne remplace pas la VRAM — 32 GB suffisent ici, mais la DDR5 est désormais la deuxième plus grosse ligne de cette configuration.',
          '**Stockage — SSD NVMe 1 To :** contient le système d\'exploitation et plusieurs modèles (un modèle 7B Q4 fait environ 4-5 GB).',
          '**Alimentation — 650 W 80+ Gold :** marge confortable pour un GPU de 165 W et un processeur 8 cœurs.',
          '**Boîtier et refroidissement — moyen-tour avec un ventirad tour :** le niveau budget produit peu de chaleur ; le refroidissement par air suffit.',
          '**Pourquoi monter ce niveau :** coût d\'entrée le plus bas, faible consommation et assez de capacité pour les modèles 7B-13B qui couvrent la conversation générale, l\'aide au code et le résumé. **Pourquoi l\'éviter :** si vous voulez déjà des modèles 14B ou plus grands, commencez par la configuration intermédiaire.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Achetez la RTX 4060 Ti spécifiquement dans sa version 16 GB. La version 8 GB utilise la même puce GPU et fonctionne à vitesse similaire, mais 8 GB ne peuvent pas accueillir un modèle 14B — la mémoire supplémentaire est tout l\'intérêt de ce choix.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de la RTX 4060 Ti 16GB sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'Vérifier le prix du Ryzen 7 7700 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de la RAM DDR5 32 GB sur Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Configuration intermédiaire : RTX 4070 Ti Super 16 GB',
        content:
          '**La configuration intermédiaire est le choix de la rédaction — elle exécute les modèles 14B instantanément, gère le travail léger en 22B-33B et c\'est le niveau que l\'on monte pour garder.** Elle est bâtie autour de la RTX 4070 Ti Super 16 GB, assez rapide pour que la latence de réponse cesse d\'être perceptible sur les modèles de classe 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB :** 16 GB de VRAM, 285 W. Même capacité de modèle que le niveau budget mais bien plus rapide — les modèles 7B-14B sont instantanés et le travail léger en 22B-33B est utilisable.',
          '**Processeur — AMD Ryzen 9 7900X :** 12 cœurs. Plus de marge que le processeur budget pour la préparation des données et l\'exécution d\'outils en parallèle de l\'inférence.',
          '**Carte mère — chipset B650 ou X670 :** alimentation électrique solide pour le processeur 12 cœurs et un GPU de 285 W.',
          '**RAM — 64 GB DDR5 :** de la place pour le système d\'exploitation, des fenêtres de contexte plus grandes et l\'outillage tel qu\'un pipeline RAG exécuté à côté du modèle. C\'est la plus grosse ligne après le GPU — si le budget est serré, 32 GB font tourner tous les modèles de ce niveau, car le modèle réside en VRAM.',
          '**Stockage — SSD NVMe 2 To :** contient une bibliothèque de modèles conséquente — un modèle 33B Q4 fait environ 18-20 GB.',
          '**Alimentation — 850 W 80+ Gold :** marge confortable pour le GPU de 285 W et le processeur 12 cœurs sous charge soutenue.',
          '**Boîtier et refroidissement — moyen-tour avec un AIO 240-280 mm ou un ventirad air haut de gamme :** le niveau intermédiaire produit une chaleur modérée ; un refroidisseur de qualité maintient le processeur stable lors de longues sessions d\'inférence.',
          '**Pourquoi monter ce niveau :** vous exécutez des modèles 14B en permanence et les voulez instantanés, ou vous faites du travail léger en 22B-33B et voulez de la marge. **Pourquoi l\'éviter :** si 7B-13B suffit, la configuration budget coûte moins cher ; si vous avez besoin du 70B, aucun GPU 16 GB ne le tient — passez à l\'enthousiaste.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuration intermédiaire accueille les mêmes modèles que la configuration budget — vous payez pour la vitesse, pas pour la capacité. Montez ce niveau si les modèles 14B seront une charge de travail quotidienne et que les attendre vous agacerait.',
          },
          {
            type: 'note',
            text: 'Une RTX 4090 24 GB d\'occasion est désormais affichée bien au-dessus de ce niveau (ventes d\'occasion $2,575–3,010 d\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source mise à jour le 2026-10-15), elle ne sert donc plus de raccourci. Comparez le neuf et l\'occasion pour la RTX 4070 Ti Super avant d\'acheter ; son prix n\'est pas suivi ici.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de la RTX 4070 Ti Super sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'Vérifier le prix du Ryzen 9 7900X sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de la RAM DDR5 64 GB sur Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Configuration enthousiaste : RTX 5090 32 GB',
        content:
          '**Des trois configurations ici, seule la configuration enthousiaste peut exécuter un modèle 70B sur un seul GPU, et seulement avec une quantification agressive ou un déchargement partiel vers la RAM système — sa RTX 5090 32 GB est la pièce maîtresse.** Montez ce niveau pour la capacité de VRAM, pas pour la vitesse brute ; la vitesse est un effet secondaire. La flambée de 2026 a frappé ce niveau le plus durement — la RTX 5090 est affichée neuve autour de $4,500–4,700 contre un prix conseillé de $1,999 ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source mise à jour le 2026-10-15) — donc les lignes GPU et RAM dominent le coût.',
        items: [
          '**GPU — RTX 5090 32 GB (neuve environ $4,500–4,700 contre $1,999 de prix conseillé ; vendue d\'occasion $5,900–6,350 ; [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source mise à jour le 2026-10-15 ; données d\'annonces, pas des offres) :** 32 GB de VRAM GDDR7, 575 W. Le GPU unique doté de la plus grande VRAM de ce guide ; sans configuration bi-GPU, il n\'exécute un modèle 70B qu\'avec une quantification agressive ou un déchargement partiel vers la RAM système. Elle exécute les modèles 33B aisément, avec de la marge.',
          '**Processeur — AMD Ryzen 9 7950X :** 16 cœurs. Assez pour exécuter la préparation des données, les expériences de fine-tuning et l\'outillage en parallèle d\'une inférence intensive.',
          '**Carte mère — chipset X670E :** alimentation électrique robuste et PCIe 5.0, dimensionnées pour un GPU de 575 W et le processeur 16 cœurs.',
          '**RAM — 128 GB DDR5 :** de la place pour de grandes fenêtres de contexte, plusieurs modèles chargés à la fois et l\'outillage — et la marge pour décharger partiellement un modèle vers la RAM si besoin. Peu de kits de 128 GB sont affichés de façon fiable ; un kit de 64 GB est l\'alternative pour économiser.',
          '**Stockage — SSD NVMe 4 To :** un modèle 70B Q4 fait environ 40 GB ; un disque de 4 To contient une grande bibliothèque de grands modèles. Les disques de 4 To ont connu la plus forte hausse de toutes les capacités de SSD en 2026.',
          '**Alimentation — 1000 W 80+ Platinum :** nécessaire car la RTX 5090 consomme 575 W à elle seule — un bloc de 750 W s\'effondrerait sous charge. Ne sous-dimensionnez pas cette pièce.',
          '**Boîtier et refroidissement — grand boîtier avec un AIO 360 mm :** le GPU de 575 W et le processeur 16 cœurs produisent une vraie chaleur ; un refroidissement liquide 360 mm maintient le processeur stable lors d\'une inférence 70B soutenue.',
          '**Pourquoi monter ce niveau :** vous avez besoin de modèles 33B ou 70B, vous exécutez une inférence par lots intensive ou vous voulez une machine qui n\'aura pas besoin d\'être remplacée pendant des années. **Pourquoi l\'éviter :** pour des modèles 7B-14B, c\'est surdimensionné — la configuration intermédiaire offre des réponses instantanées sur ces tailles pour moins de la moitié du coût.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La RTX 5090 consomme 575 W à elle seule. Associez-la à l\'alimentation 1000 W de cette liste de pièces — un bloc plus petit chuterait sous charge. Vérifiez que votre circuit électrique mural peut fournir la consommation totale avant de monter. Ceci n\'est pas un conseil de sécurité électrique ; suivez les consignes de NVIDIA et du fabricant de l\'alimentation.',
          },
          {
            type: 'note',
            text: 'Un modèle 70B en Q4 nécessite environ 39-42 GB de VRAM, donc même la RTX 5090 32 GB n\'exécute le 70B en Q4 qu\'avec une quantification agressive ou un déchargement partiel vers la RAM système. Les 128 GB de RAM de cette configuration donnent à ce déchargement la place nécessaire.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de la RTX 5090 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'Vérifier le prix du Ryzen 9 7950X sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: 'Vérifier le prix de l\'alimentation 1000 W sur Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Comment la hausse des prix de 2026 modifie le calcul',
        content:
          '**La pénurie de puces mémoire de 2026 a poussé les prix des GPU et de la RAM DDR5 très au-dessus de la normale et, comme le GPU et la RAM sont les deux plus grandes lignes de chaque configuration, ils dominent le coût.** Planifiez la configuration autour des prix affichés actuellement, pas des prix de lancement.',
        items: [
          '**Le GPU et la RAM dominent le total.** Dans chaque niveau, le GPU est la plus grande ligne et la RAM DDR5 est désormais la deuxième — la flambée modifie le total de la configuration davantage par ces deux pièces que par toute autre.',
          '**La cause est la mémoire, pas les GPU.** Une pénurie d\'approvisionnement en mémoire GDDR, HBM et DRAM a renchéri chaque carte dotée de mémoire rapide ainsi que la RAM système elle-même ; plus la VRAM est élevée, plus la carte a été touchée. La RTX 5090 est affichée neuve autour de $4,500–4,700 contre un prix conseillé de $1,999 (4,500 / 1,999 = 2.25×) d\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source mise à jour le 2026-10-15) — plus du double.',
          '**Les prix des GPU d\'entrée de gamme ne sont pas suivis ici.** La RTX 4060 Ti 16 GB et la RTX 4070 Ti Super des configurations budget et intermédiaire ne sont pas couvertes par le suivi ; vérifiez les annonces en direct.',
          '**L\'occasion n\'est plus une remise fiable.** Le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source mise à jour le 2026-10-15) indique des RTX 5090 vendues d\'occasion à $5,900–6,350 contre environ $4,500–4,700 en neuf, et des RTX 4090 vendues d\'occasion à $2,575–3,010 (médiane $2,860) ; ce sont des données d\'annonces, pas des offres. Comparez le neuf et l\'occasion pour chaque carte ; une carte d\'occasion vérifiée fonctionnelle ne vaut le coup que si elle est nettement moins chère.',
          '**La RAM et les SSD ont beaucoup bougé ; le processeur, la carte mère et l\'alimentation peu.** Les prix de la DDR5 ont augmenté d\'environ 500 % en 12 mois jusqu\'en août 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18 ; un kit DDR5-6400 de 128 GB était listé à $3,399). Les prix du processeur, de la carte mère, de l\'alimentation et des SSD ne sont pas suivis sur cette page ; vérifiez-les aussi.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La pénurie mémoire de 2026 a poussé les prix des GPU et de la RAM DDR5 très au-dessus de la normale, ce qui fait du GPU et de la RAM les deux plus grandes lignes de coût d\'une configuration pour IA locale.',
          },
          {
            type: 'plain-terms',
            text: 'Le GPU est la pièce la plus chère de la machine, et en 2026 la RAM est devenue chère elle aussi. Tant que la pénurie mémoire ne s\'apaise pas, considérez les prix de lancement comme de l\'histoire ancienne, comparez le neuf et l\'occasion avant d\'acheter et n\'achetez pas plus de VRAM ou de RAM que ce dont votre modèle a besoin.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Logigramme de décision : choisissez votre configuration en quatre questions',
        content:
          '**Quatre questions, dans l\'ordre, orientent la plupart des monteurs vers un niveau.**',
        items: [
          '**1. Quel est le plus grand modèle que vous voulez exécuter ?** 7B-13B : configuration budget. 14B-33B : configuration intermédiaire. 70B : configuration enthousiaste.',
          '**2. Quel est votre plafond de budget ferme ?** Configuration budget pour le coût le plus bas, intermédiaire pour le milieu, enthousiaste pour le plus élevé — la RTX 5090 seule est affichée neuve autour de $4,500–4,700 (suivi InsiderLLM, source mise à jour le 2026-10-15).',
          '**3. GPU neuf ou d\'occasion ?** Comparez les deux — d\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source mise à jour le 2026-10-15), les RTX 5090 et RTX 4090 vendues d\'occasion se situent au niveau des neuves ou au-dessus ; une carte d\'occasion n\'est donc le bon choix que si elle est nettement moins chère.',
          '**4. Votre plan d\'alimentation et d\'espace tient-il ?** Vérifiez que l\'alimentation correspond au niveau (650 W / 850 W / 1000 W) et que le boîtier accueille le GPU et le refroidisseur avant de commander les pièces.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisissez une configuration PC pour IA locale en répondant d\'abord à la plus grande taille de modèle, ensuite au plafond de budget, puis à neuf ou d\'occasion pour le GPU et enfin à la planification d\'alimentation et d\'espace.',
          },
          {
            type: 'plain-terms',
            text: 'Commencez par le plus grand modèle que vous voulez réellement exécuter et laissez-le fixer votre niveau. Vérifiez ensuite votre budget, décidez d\'acheter ou non le GPU d\'occasion et confirmez que l\'alimentation et le boîtier conviennent aux pièces. Procéder dans cet ordre évite une configuration incapable d\'exécuter votre modèle.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Où acheter les composants',
        content:
          '**Les grandes enseignes proposent chaque pièce de ces configurations ; comparez les annonces neuves et d\'occasion spécifiquement pour le GPU.** Les liens ci-dessous sont de simples liens de recherche de produits ; ils ne portent aucune balise affiliée et ne génèrent aucune commission.',
        items: [
          '**Amazon et Newegg :** le plus large stock de processeurs, RAM, SSD, alimentations et boîtiers. Le stock de GPU et de DDR5 neufs est plus mince et affiché au niveau de la flambée de 2026.',
          '**Marché du GPU d\'occasion :** à consulter, mais ce n\'est plus une économie garantie — d\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source mise à jour le 2026-10-15), les RTX 5090 et RTX 4090 vendues d\'occasion se situent au niveau des neuves ou au-dessus. N\'achetez d\'occasion que si c\'est nettement moins cher et vérifié fonctionnel.',
          '**LDLC et Materiel.net (France) :** sources fiables pour les processeurs, cartes mères et alimentations, et utiles aussi pour les offres groupées processeur-plus-carte-mère.',
          '**Achetez le GPU en premier.** C\'est la ligne la plus grande et la plus volatile — verrouillez le GPU à un prix que vous acceptez, puis achetez les pièces de soutien autour de lui.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'En raison de la flambée des prix de 2026, les totaux ne sont pas suivis dans ce guide. Ouvrez toujours l\'annonce actuelle du revendeur pour le GPU et la RAM avant de monter — ensemble, ils dominent le coût de la configuration.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'Parcourir les GPU sur Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'Parcourir les processeurs Ryzen sur Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'Parcourir la RAM DDR5 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'Parcourir les SSD NVMe sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'Parcourir les alimentations sur Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes lors du montage d\'un PC pour IA locale',
        items: [
          '**Choisir le processeur avant le GPU.** Le GPU décide des modèles que la machine exécute ; le processeur travaille peu pendant l\'inférence. Choisissez d\'abord le GPU, puis dimensionnez le processeur pour le soutenir.',
          '**Acheter de la mémoire système au lieu de la VRAM.** La RAM permet à un modèle de déborder de la VRAM, mais un modèle exécuté depuis la RAM est trop lent pour un usage interactif. Achetez assez de VRAM pour le modèle ; achetez de la RAM uniquement pour le système d\'exploitation et l\'outillage.',
          '**Sous-dimensionner l\'alimentation.** La seule RTX 5090 consomme 575 W. Une alimentation qui chute sous charge est pire qu\'un GPU plus lent mais stable — adaptez l\'alimentation au niveau.',
          '**S\'ancrer sur les prix de lancement.** La flambée de 2026 fait que les prix conseillés des GPU et les prix de la RAM de l\'an dernier ne reflètent plus la réalité. Budgétez le GPU et la RAM par rapport aux prix revendeur en direct et comparez le marché de l\'occasion au lieu de le supposer moins cher.',
          '**Acheter la RTX 4060 Ti 8 GB pour la configuration budget.** Elle partage un nom avec la version 16 GB mais ne peut pas accueillir un modèle 14B. Confirmez la variante 16 GB dans l\'annonce.',
          '**Surdimensionner pour des modèles 7B.** Si les modèles 7B couvrent votre cas d\'usage, la configuration enthousiaste gaspille des milliers d\'euros et des centaines de watts. Adaptez le niveau au modèle, pas au budget dont vous disposez par hasard.',
          '**Négliger la planification du boîtier et du refroidissement.** Un GPU de 575 W plus un processeur 16 cœurs produisent une vraie chaleur. Confirmez que le boîtier accueille le GPU et le refroidisseur et dispose d\'un flux d\'air avant de commander les pièces.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Meilleur guide d\'achat de GPU pour LLM locaux 2026](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum : conseils d\'achat de GPU et contexte de la flambée de 2026 derrière les totaux des configurations ici.',
          '[Monter une station de travail LLM locale](/fr/local-llms/local-llm-workstation-build) — PromptQuorum : liste de pièces, refroidissement et conseils d\'alimentation pour une station 70B bi-GPU au-delà du niveau enthousiaste.',
          '[Spécifications des séries NVIDIA GeForce RTX 40 et 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Capacité de VRAM et puissance (TGP) officielles pour les RTX 4060 Ti, 4070 Ti Super et 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Tarifs de composants en direct pour les processeurs AMD Ryzen, la RAM DDR5, les SSD NVMe et les alimentations.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: "Une alimentation de 1000 W est-elle excessive pour une configuration à un seul GPU ?",
            a: "Pas pour une RTX 5090, donnée pour 575 W et capable de pics brefs au-delà ; NVIDIA indique donc une alimentation de 1000 W pour sa référence. Pour les configurations économique et intermédiaire de ce guide, c'est excessif : 650 W et 850 W (80+ Gold) couvrent la RTX 4060 Ti 16 Go et la RTX 4070 Ti Super 16 Go avec de la marge. Privilégiez un modèle ATX 3.1 avec connecteur 12V-2x6 natif plutôt que davantage de watts.",
          },
          {
            q: 'Combien coûte le montage d\'un PC pour IA locale en 2026 ?',
            a: 'Les totaux ne sont pas suivis ici, car les prix des GPU et de la RAM évoluent vite en 2026 et seuls les prix des GPU ont une source datée. La RTX 5090 de la configuration enthousiaste est affichée neuve autour de $4,500–4,700 ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source mise à jour le 2026-10-15), et les prix de la DDR5 ont augmenté d\'environ 500 % en 12 mois jusqu\'en août 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Additionnez les prix en direct de la liste de pièces du niveau choisi.',
          },
          {
            q: 'Quel GPU mettre dans une configuration PC pour IA locale ?',
            a: 'Choisissez le GPU selon votre plus grand modèle visé. Une RTX 4060 Ti 16 GB convient à une configuration budget pour les modèles 7B-13B, une RTX 4070 Ti Super 16 GB à une configuration intermédiaire pour les modèles 14B-33B et une RTX 5090 32 GB à une configuration enthousiaste pour le travail 70B. Le GPU décide des modèles que la machine peut exécuter, il se choisit donc en premier et le reste de la liste de pièces se construit autour de lui.',
          },
          {
            q: 'De combien de RAM ai-je besoin pour un PC dédié à l\'IA locale ?',
            a: 'Prévoyez 32 GB pour une configuration budget, 64 GB pour une intermédiaire et 128 GB pour une enthousiaste. La mémoire système ne remplace pas la VRAM — un modèle exécuté depuis la RAM est trop lent pour un usage interactif. La RAM sert au système d\'exploitation, au contexte et à l\'outillage ; achetez assez de VRAM sur le GPU pour le modèle lui-même.',
          },
          {
            q: 'Quelle alimentation faut-il pour un PC dédié à l\'IA locale ?',
            a: 'Adaptez l\'alimentation au niveau : 650 W pour la configuration budget, 850 W pour l\'intermédiaire et 1000 W pour l\'enthousiaste. Le niveau enthousiaste exige 1000 W car la RTX 5090 consomme 575 W à elle seule. Une alimentation sous-dimensionnée cause de l\'instabilité sous charge, donc ne rognez pas sur cette pièce.',
          },
          {
            q: 'Faut-il acheter les composants GPU neufs ou d\'occasion en 2026 ?',
            a: 'Comparez le neuf et l\'occasion avant de décider ; ne supposez pas que l\'occasion est moins chère. Le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (source mise à jour le 2026-10-15) indique des RTX 5090 vendues d\'occasion à $5,900–6,350 contre environ $4,500–4,700 en neuf, et des RTX 4090 vendues d\'occasion à $2,575–3,010. Une carte d\'occasion vérifiée fonctionnelle ne vaut l\'achat que si elle est nettement moins chère. Les processeurs, la RAM, les SSD et les alimentations s\'achètent de préférence neufs.',
          },
          {
            q: 'Une configuration mono-GPU peut-elle exécuter un modèle 70B ?',
            a: 'Oui, la configuration enthousiaste le peut. Une RTX 5090 32 GB offre la plus grande VRAM de tous les GPU uniques de ce guide, mais un modèle 70B en Q4 nécessite environ 39-42 GB — elle n\'exécute donc le 70B qu\'avec une quantification agressive ou un déchargement partiel vers la RAM système. Les 128 GB de RAM de la configuration enthousiaste donnent à ce déchargement la place nécessaire.',
          },
          {
            q: 'La configuration intermédiaire vaut-elle le surcoût par rapport à la budget ?',
            a: 'Oui, si vous exécutez régulièrement des modèles de classe 14B. Les configurations budget et intermédiaire accueillent des modèles similaires, mais la RTX 4070 Ti Super de l\'intermédiaire est bien plus rapide — les modèles 14B deviennent instantanés au lieu d\'être lents, et le travail léger en 22B-33B devient utilisable. Si votre plafond est fermement les modèles 7B-13B, la configuration budget coûte moins cher et offre un meilleur rapport qualité-prix.',
          },
          {
            q: 'Faut-il un processeur Threadripper pour un PC dédié à l\'IA locale ?',
            a: 'Non. Un processeur Ryzen grand public suffit pour les trois configurations de ce guide — un Ryzen 7 pour le niveau budget, un Ryzen 9 pour les niveaux intermédiaire et enthousiaste. Un Threadripper ne vaut son coût que pour une machine bi-GPU qui exécute le fine-tuning et l\'inférence en même temps, ce qui dépasse une configuration mono-GPU.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Choisissez le GPU de votre configuration avec le guide d\'achat complet](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — huit GPU sur quatre niveaux de budget, avec les prix actuels et le calcul de la flambée.',
          '[Découvrez la configuration de station 70B bi-GPU pour un usage en production](/fr/local-llms/local-llm-workstation-build) — le niveau bi-GPU à 48 GB de VRAM pour les modèles 70B, au-delà de la configuration enthousiaste de ce guide.',
          '[Comparez le montage d\'un PC à la location de GPU cloud](/fr/power-local-llm/cloud-gpu-rental-guide-2026) — quand la location bat la possession de matériel pour un calcul occasionnel.',
          '[Calculez la VRAM nécessaire à chaque taille de modèle avant de monter](/fr/local-llms/how-much-vram-local-llm) — la méthode complète de VRAM par taille de modèle derrière les choix de niveau ici.',
          '[Envisagez un Mac comme alternative à un montage PC](/fr/power-local-llm/best-mac-for-local-ai-2026) — quand l\'Apple Silicon à mémoire unifiée bat un PC à GPU dédié pour l\'IA locale.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-ja.webp',
    title: 'ローカルAIワークステーション自作ガイド2026：予算別3構成',
    seoTitle: 'ローカルAI PC自作2026：エントリーから70B対応機まで',
    intro:
      'ローカルAI向けの自作ガイドの多くはCPUから始まりますが、マシンが実行できるモデルを決めるのはGPUとそのVRAMであり、他のすべてのパーツはそのGPUを支えるために選ばれます。本ガイドでは、ローカルLLM用PCの完全なパーツリストを3構成示します。7B〜13Bモデル向けのエントリー構成、14B〜33Bモデル向けのミドル構成、70B作業向けのハイエンド構成です。各ティアには正確なコンポーネント、想定される性能を記載しています。価格について1点ご注意ください。2026年のメモリチップ不足によりGPUとDDR5 RAMの価格が昨年の水準を大きく上回っているため、構成の合計とGPU以外のパーツ価格は追跡しておらず、追跡しているのは日付付きの情報源（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15）に基づくGPU価格のみです——ご注文の前に最新の販売ページを確認してください。日本円の価格は調査していないため、ここではUSDのままです（日本での価格は異なる場合があります）。',
    metaDescription:
      '2026年のローカルAI PC構成3種：7B〜13B向けエントリー、14B〜33B向けミドル、70B向けハイエンド。正確なパーツリスト、日付付きのGPU価格と2026年のDDR5不足に関する注記を掲載。',
    twitterDescription:
      'ローカルAI PC自作ガイド：7B〜70Bモデル向けの完全パーツリストを備えた予算別3構成。2026年はGPUとRAMの価格が急騰——日付付きのGPU価格はこちら。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      'ローカルLLMを動かすために専用のPCを組もうとしている購入者で、予算ティアと対象モデルサイズで判断する層を想定しています。量子化や制約としてのVRAM、基本的な自作PC用語には精通しているものの、具体的な現行コンポーネントのSKUには詳しくない読者を前提とします。',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      'ローカルai pc 自作 2026',
      'ローカルllm ワークステーション 自作 ガイド',
      'llm 実行 おすすめ pc 構成',
      'ai ワークステーション パーツ構成',
      'ローカルai 向け pc の組み方',
    ],
    leadAnswerBlock:
      '**最適なローカルAI PCは、GPUのVRAMが対象モデルに合うティアです。エントリー構成は7B〜13Bモデルを、ミドル構成は14B〜33Bモデルを、ハイエンド構成は70Bモデルを実行できます——2026年のGPUとRAMの価格は変動が速いため、構成の合計は追跡せず、GPU価格は情報源と日付付きで記載しています。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にローカルLLMを動かすPCはどう組めばよいですか？',
        answer:
          '実行したい最大のモデルでティアを選び、GPUを中心に組み立てます。エントリー構成はRTX 4060 Ti 16 GBとRyzen 7 CPUを組み合わせ、7B〜13Bモデルに対応します。ミドル構成はRTX 4070 Ti Super 16 GBを用いて14B〜33Bモデルに対応します。ハイエンド構成はRTX 5090 32 GBを用いて70B作業に対応します。2026年のメモリ不足によりGPUとDDR5 RAMが通常価格を大きく上回っているため、構成の合計は追跡せず、GPU価格のみ情報源と日付を付けています。',
        bullets: [
          'エントリー構成：RTX 4060 Ti 16 GB、7B〜13Bモデルを実行',
          'ミドル構成：RTX 4070 Ti Super 16 GB、14B〜33Bモデルを実行',
          'ハイエンド構成：RTX 5090 32 GB、70Bモデルは積極的な量子化または部分的なオフロードでのみ実行',
          '2026年はGPU・RAM・SSDの価格がすべて急騰——新品と中古を比較してください。中古が確実に安いとは限りません',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '編集部のおすすめ', anchor: '#editors-choice' },
      { label: '構成ティアの比較', anchor: '#comparison-table' },
      { label: 'どの構成を選ぶべきか？', anchor: '#which-build' },
      { label: 'エントリー構成', anchor: '#budget-build' },
      { label: 'ミドル構成', anchor: '#mid-build' },
      { label: 'ハイエンド構成', anchor: '#enthusiast-build' },
      { label: '2026年の価格高騰が構成をどう変えるか', anchor: '#price-surge' },
      { label: '判断フローチャート', anchor: '#decision-flowchart' },
      { label: 'コンポーネントの購入先', anchor: '#where-to-buy' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**GPUがティアを決め、残りの構成がそれを支えます。** ローカルAI PCは、VRAMが実行可能なモデルを決めるため、GPUを起点に選びます。GPUのVRAMが対象モデルに合うティアを選び、CPU・RAM・電源をその周りに合わせて選定してください。',
          '**2026年の価格は構成コストを押し上げました。** メモリチップ不足によりGPUとDDR5 RAMが昨年の価格を大きく上回りました。構成の合計はここでは追跡しておらず、RAMはもはや後回しにできない主要なコスト項目です（DDR5の価格は2026年8月までの12か月で約500%上昇、[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)、2026-08-18）。',
          '**エントリー構成：** RTX 4060 Ti 16 GB、Ryzen 7 7700、32 GB RAM、1 TB SSD、650 W電源——7B〜13Bモデルを実用的な速度で実行します。このガイドの3構成の中で最も費用を抑えた構成です。',
          '**ミドル構成：** RTX 4070 Ti Super 16 GB、Ryzen 9 7900X、64 GB RAM、2 TB SSD、850 W電源——14B〜33Bモデルを実行し、7B〜14Bモデルを即座に応答させます。',
          '**ハイエンド構成：** RTX 5090 32 GB、Ryzen 9 7950X、128 GB RAM、4 TB SSD、1000 W電源——この3構成のうち、70Bモデルを1枚のGPUで実行できるのはハイエンド構成だけで、積極的な量子化またはシステムRAMへの部分的なオフロードが前提です。RTX 5090だけで新品販売価格は約$4,500〜4,700です（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15）。',
          '**RAMはVRAMの代わりにはなりません。** システムRAMはモデルをVRAMから溢れさせることができますが、RAMから動くモデルはインタラクティブな用途には遅すぎます。モデルにはVRAMを十分に、RAMはOSとツール用に購入してください。',
          '**電源はGPUに合わせてスケールします。** エントリー構成は650 W、ミドル構成は850 W、ハイエンド構成は1000 Wが必要です。RTX 5090は単体で575 Wを消費するためです。電源はカードと同時に予算化してください。',
          '**中古はもはや確実な割引ではありません。** [InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（情報源の更新日2026-10-15）では、中古の成約済みRTX 5090（$5,900〜6,350）は新品販売価格（約$4,500〜4,700）を上回り、中古の成約済みRTX 4090（$2,575〜3,010）は新品の出品範囲（$2,000〜3,000）と重なります。購入前に両方を比較してください。動作確認済みの中古カードは、明らかに安いときには依然として検討する価値がありますが、安いと決めつけないでください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**エントリー構成：** GPU RTX 4060 Ti 16 GB——7Bおよびほとんどの13Bモデルを実行します。',
          '**ミドル構成：** GPU RTX 4070 Ti Super 16 GB——14Bを快適に実行し、軽めの22B〜33B作業も可能です。',
          '**ハイエンド構成：** GPU RTX 5090 32 GB——33Bを快適に実行でき、70Bは積極的な量子化または部分的なオフロードでのみ実行できます。',
          '**Q4_K_MでのVRAMの目安：** 10億パラメータあたりおよそ0.6 GB、加えてコンテキストとツール用に2〜4 GB。',
          '**システムRAMの指針：** エントリー構成は32 GB、ミドル構成は64 GB、ハイエンド構成は128 GB。',
          '**ティア別の電源：** エントリー650 W、ミドル850 W、ハイエンド1000 W——RTX 5090は単体で575 Wを消費します。',
          '**2026年の価格の実情：** メモリ不足でGPU、DDR5 RAM、SSDがすべて急騰——最新価格を確認し、新品と中古を比較してください。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '編集部のおすすめ：ミドル構成',
        highlight: true,
        content:
          '**ローカルAI向けにPCを組むほとんどの購入者にとって、ミドル構成は能力・コスト・余裕のバランスが取れたティアです。** RTX 4070 Ti Super 16 GBを中心に構築され、すべての14Bモデルをコンテキストの余裕をもって実行し、軽めの22B〜33B作業をこなし、7B〜14Bモデルを即座に応答させます。14B級のほとんどの作業にはかなり長く使い続けられる見込みですが、モデルサイズや価格は変わります。上限が明確に7B〜13Bモデルである場合のみエントリー構成に下げ、70B作業が特に必要な場合のみハイエンド構成に上げてください。ミドル構成は、長く使いたいマシンにとって妥当な標準の選択肢です。',
        callouts: [
          {
            type: 'note',
            text: 'この編集部のおすすめは価格対能力のみを反映したものです。PromptQuorumはいかなるアフィリエイトプログラムにも参加しておらず、以下のリンクにはアフィリエイトタグが含まれません——いずれも報酬を生まない単なる参照リンクです。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'AmazonでRTX 4070 Ti Superの価格を確認',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'NeweggでRTX 4070 Ti Superの価格を確認',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026年の3構成ティアの比較',
        content:
          'GPUのVRAMと電力の数値はメーカー仕様です。推論速度は、各ティアのGPUクラスにおける一般的な目安（PromptQuorumによる測定ではありません）で、実際の速度は量子化、ランタイム、コンテキスト長によって変わります。構成の合計は追跡していません。価格に情報源と日付を付けているのはRTX 5090のみ（ハイエンド構成を参照）で、RAMなどの部品はこのページでは追跡していません。新品と中古のGPUを比較してください。中古が常に安いとは限りません。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルAI PCでは、GPUのVRAMがマシンの実行可能なモデルを決め、残りのパーツリストはそのGPUを支えるよう選定されます——まずモデルサイズでティアを選んでください。',
          },
          {
            type: 'plain-terms',
            text: '構成を、1人のスター選手であるGPUを中心に組まれたチームと考えてください。CPU・RAM・電源は脇役で、有用ですがGPUに供給を続けるために存在します。まずモデルに必要なGPUを選び、その周りに残りを組み立てましょう。',
          },
        ],
        columns: ['構成ティア', 'GPU', 'VRAM', '実行可能', '電源', '合計（2026年）'],
        rows: [
          {
            '構成ティア': 'エントリー',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '実行可能': '7B〜13Bモデル',
            '電源': '650 W',
            '合計（2026年）': '未追跡',
          },
          {
            '構成ティア': 'ミドル',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            '実行可能': '14Bを快適に、軽めの22B〜33B',
            '電源': '850 W',
            '合計（2026年）': '未追跡',
          },
          {
            '構成ティア': 'ハイエンド',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            '実行可能': '33Bを快適に、70Bは積極的な量子化または部分的なオフロードでのみ',
            '電源': '1000 W',
            '合計（2026年）': '未追跡',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: 'どの構成を選ぶべきか？',
        content:
          '**対象とする最大のモデルがティアを決め、予算がそれを裏付けます。** ご自身の状況に合う行を探してください。',
        columns: ['あなたの状況', 'おすすめの構成'],
        rows: [
          { 'あなたの状況': '7B〜13Bモデルを動かし、本ガイドの3構成で最も費用の低い完成機が欲しい', 'おすすめの構成': 'エントリー構成' },
          { 'あなたの状況': '初めてのローカルAI PCが欲しく、どこまで進むか分からない', 'おすすめの構成': 'エントリー構成、または余裕を見てミドル構成' },
          { 'あなたの状況': '14Bモデルを常時動かし、即座に応答させたい', 'おすすめの構成': 'ミドル構成' },
          { 'あなたの状況': '軽めの22B〜33B作業を行い、長く使えるマシンが欲しい', 'おすすめの構成': 'ミドル構成' },
          { 'あなたの状況': '33Bモデルを多用する、または将来の余裕を強く求める', 'おすすめの構成': 'ハイエンド構成' },
          { 'あなたの状況': '積極的な量子化または部分的なオフロードで70Bモデルを動かせるシングルGPUマシンが必要', 'おすすめの構成': 'ハイエンド構成' },
          { 'あなたの状況': '2026年の高騰にもかかわらず合計を抑えたい', 'おすすめの構成': 'いずれのティアも——新品と中古のGPU掲載を比較' },
          { 'あなたの状況': '迷っており、何年も使える最も無難な構成が欲しい', 'おすすめの構成': 'ミドル構成——編集部のおすすめ' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'エントリー構成：RTX 4060 Ti 16 GB',
        content:
          '**エントリー構成は本ガイドの3構成で最も費用の低いローカルAI PCで、すべての7Bモデルとほとんどの13Bモデルを実行できます——多くの初めての利用者には十分な能力です。** 本ガイドで最も安価な16 GBカードであるRTX 4060 Ti 16 GBを中心に構築されており、2026年の不足が許す範囲で合計を低く抑えます。',
        items: [
          '**GPU — RTX 4060 Ti 16 GB：** 16 GB VRAM、165 W。このGPUクラスでの7Bモデルの一般的な速度はおよそ20〜25 tok/s（PromptQuorumによる測定ではなく、量子化やコンテキストにより変動）で、14Bモデルもコンテキストの余裕をもって収まります。16 GBの容量こそ、8 GB版より本機を選ぶ理由です。',
          '**CPU — AMD Ryzen 7 7700：** 8コア、消費電力は控えめ。CPUはGPU推論中ほとんど働かないため、ここではミドルレンジのチップが正解です——このティアではCPUに過剰に支出しないでください。',
          '**マザーボード — B650チップセット：** Ryzen 7とPCIe上のフルサイズGPU 1枚に対応します。このティアではハイエンドの電源回路は不要です。',
          '**RAM — 32 GB DDR5：** OS、ツール、VRAMで動く7B〜13Bモデルに十分です。RAMはVRAMの代わりにはなりません——ここでは32 GBで足りますが、DDR5は現在このビルドで2番目に大きな項目です。',
          '**ストレージ — 1 TB NVMe SSD：** OSと複数のモデルを収めます（7B Q4モデルはおよそ4〜5 GB）。',
          '**電源 — 650 W 80+ Gold：** 165 WのGPUと8コアCPUに十分な余裕があります。',
          '**ケースと冷却 — タワー型空冷クーラー搭載のミドルタワー：** エントリーティアの発熱は少なく、空冷で十分です。',
          '**このティアを組む理由：** 最も低い導入コスト、低い消費電力、そして一般的なチャット・コーディング支援・要約をカバーする7B〜13Bモデルに十分な能力。**避けるべき理由：** すでに14B以上のモデルを求めているなら、ミドル構成から始めてください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'RTX 4060 Tiは必ず16 GB版を購入してください。8 GB版は同じGPUダイを使い同程度の速度で動きますが、8 GBでは14Bモデルを収められません——追加のメモリこそ、この選択の全目的です。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'AmazonでRTX 4060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'AmazonでRyzen 7 7700の価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Amazonで32GB DDR5 RAMの価格を確認',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'ミドル構成：RTX 4070 Ti Super 16 GB',
        content:
          '**ミドル構成は編集部のおすすめです——14Bモデルを即座に実行し、軽めの22B〜33B作業をこなし、長く使うために組むティアです。** RTX 4070 Ti Super 16 GBを中心に構築され、14Bクラスのモデルでは応答の遅延が感じられなくなるほど高速です。',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB：** 16 GB VRAM、285 W。エントリーティアと同じモデル容量ですが大幅に高速で——7B〜14Bモデルは即座に応答し、軽めの22B〜33B作業も実用的です。',
          '**CPU — AMD Ryzen 9 7900X：** 12コア。データ準備や推論と並行したツール実行に、エントリーCPUより余裕があります。',
          '**マザーボード — B650またはX670チップセット：** 12コアCPUと285 W GPUに見合う堅実な電源回路。',
          '**RAM — 64 GB DDR5：** OS、より大きなコンテキストウィンドウ、モデルの隣で動くRAGパイプラインなどのツール用の余裕があります。GPUに次ぐ最大の項目です——予算が厳しければ、モデルはVRAMに載るため、32 GBでもこのティアのすべてのモデルを実行できます。',
          '**ストレージ — 2 TB NVMe SSD：** ある程度のモデルライブラリを収めます——33B Q4モデルはおよそ18〜20 GBです。',
          '**電源 — 850 W 80+ Gold：** 持続負荷下の285 W GPUと12コアCPUに十分な余裕があります。',
          '**ケースと冷却 — 240〜280 mmのAIOまたはハイエンド空冷クーラー搭載のミドルタワー：** ミドルティアの発熱は中程度で、品質の高いクーラーが長時間の推論中もCPUを安定させます。',
          '**このティアを組む理由：** 14Bモデルを常時動かして即座に応答させたい、あるいは軽めの22B〜33B作業を行い余裕が欲しい場合。**避けるべき理由：** 7B〜13Bで十分ならエントリー構成の方が安く、70Bが必要なら16 GBのGPUでは収まりません——ハイエンドへ。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ミドル構成はエントリー構成と同じモデルを収めます——支払っているのは速度であり、容量ではありません。14Bモデルが日常の作業負荷になり、待つことが煩わしいなら、このティアを組んでください。',
          },
          {
            type: 'note',
            text: '中古のRTX 4090 24 GBは現在このティアをはるかに上回る価格で出ています（中古の成約済み$2,575〜3,010、[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15）ので、近道にはなりません。RTX 4070 Ti Superは購入前に新品と中古を比較してください。価格はここでは追跡していません。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'AmazonでRTX 4070 Ti Superの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'AmazonでRyzen 9 7900Xの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Amazonで64GB DDR5 RAMの価格を確認',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'ハイエンド構成：RTX 5090 32 GB',
        content:
          '**この3構成のうち、70Bモデルを1枚のGPUで実行できるのはハイエンド構成だけで、積極的な量子化またはシステムRAMへの部分的なオフロードが前提です——RTX 5090 32 GBが目玉のパーツです。** このティアは生の速度ではなくVRAM容量のために組みます。速度は副産物です。2026年の高騰はこのティアを最も強く直撃しました——RTX 5090は新品販売価格が約$4,500〜4,700でMSRPは$1,999（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15）のため、GPUとRAMの行がコストを支配します。',
        items: [
          '**GPU — RTX 5090 32 GB（新品販売価格は約$4,500〜4,700でMSRPは$1,999、中古の成約済みは$5,900〜6,350。[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15、出品データであり見積りではありません）：** 32 GB GDDR7 VRAM、575 W。このガイドで最もVRAMの大きいシングルGPUで、デュアルGPU構成なしで70Bモデルを動かせますが、積極的な量子化またはシステムRAMへの部分的なオフロードが前提です。33Bモデルは余裕をもって快適に実行します。',
          '**CPU — AMD Ryzen 9 7950X：** 16コア。重い推論と並行して、データ準備、ファインチューニング実験、ツール実行を行うのに十分です。',
          '**マザーボード — X670Eチップセット：** 575 W GPUと16コアCPUに見合う強力な電源回路とPCIe 5.0。',
          '**RAM — 128 GB DDR5：** 大きなコンテキストウィンドウ、複数モデルの同時ロード、ツールのための容量に加え、必要に応じてモデルを部分的にRAMへ退避させる余裕があります。安定して出回っている128 GBキットは少なく、64 GBキットは費用を抑える代替案です。',
          '**ストレージ — 4 TB NVMe SSD：** 70B Q4モデルはおよそ40 GBで、4 TBドライブは大型モデルの大規模なライブラリを収めます。4 TBドライブは2026年にSSDのどの容量よりも大きく値上がりしました。',
          '**電源 — 1000 W 80+ Platinum：** RTX 5090が単体で575 Wを消費するため必須です——750 Wのユニットは負荷下でへたります。このパーツを過小にしないでください。',
          '**ケースと冷却 — 360 mmのAIO搭載のフルサイズケース：** 575 W GPUと16コアCPUは実際の発熱を生み、360 mmの水冷が持続的な70B推論中もCPUを安定させます。',
          '**このティアを組む理由：** 33Bまたは70Bモデルが必要、重いバッチ推論を行う、あるいは何年も買い替え不要なマシンが欲しい場合。**避けるべき理由：** 7B〜14Bモデルにはオーバースペックです——ミドル構成がそれらのサイズで半分以下のコストで即座の応答を提供します。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090は単体で575 Wを消費します。このパーツリストの1000 W電源と組み合わせてください——より小さいユニットは負荷下で電圧降下します。組む前に、壁のコンセント回路が全消費電力を供給できるか確認してください。',
          },
          {
            type: 'note',
            text: '70B Q4モデルはおよそ39〜42 GBのVRAMを必要とするため、RTX 5090 32 GBでさえ、70BのQ4実行は積極的な量子化またはシステムRAMへの部分的なオフロードを伴ってのみ可能です。本構成の128 GB RAMが、そのオフロードに必要な余裕を与えます。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'AmazonでRTX 5090の価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'AmazonでRyzen 9 7950Xの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: 'Amazonで1000W電源の価格を確認',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026年の価格高騰が構成の計算をどう変えるか',
        content:
          '**2026年のメモリチップ不足によりGPUとDDR5 RAMの価格が通常を大きく上回り、GPUとRAMはすべての構成で最大の2項目であるため、コストを支配します。** 構成は発売時の価格ではなく現在の提示価格を中心に計画してください。',
        items: [
          '**GPUとRAMが合計を支配します。** どのティアでもGPUが最大の項目で、DDR5 RAMが2番目です——高騰はこの2つのパーツを通じて、他のどのパーツよりも構成合計を大きく変えます。',
          '**原因はGPUそのものではなくメモリです。** GDDR、HBM、DRAMの供給不足が高速メモリを搭載するすべてのカードとシステムRAM自体のコストを押し上げ、VRAMが多いカードほど大きく直撃を受けました。RTX 5090は新品販売価格が約$4,500〜4,700でMSRPは$1,999です（4,500 / 1,999 = 2.25倍、[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15）——2倍以上です。',
          '**下位のGPUの価格はここでは追跡していません。** エントリー構成とミドル構成のRTX 4060 Ti 16 GBとRTX 4070 Ti Superはトラッカーの対象外なので、最新の出品を確認してください。',
          '**中古はもはや確実な割引ではありません。** [InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（情報源の更新日2026-10-15）では、中古の成約済みRTX 5090は$5,900〜6,350（新品販売価格は約$4,500〜4,700）、中古の成約済みRTX 4090は$2,575〜3,010（中央値$2,860）で、出品データであり見積りではありません。どのカードも新品と中古の掲載を比較してください。動作確認済みの中古カードは、明らかに安い場合にのみ検討する価値があります。',
          '**RAMとSSDは大きく動き、CPU・マザーボード・電源はあまり動きませんでした。** DDR5の価格は2026年8月までの12か月で約500%上昇しました（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)、2026-08-18。128 GBのDDR5-6400キットは$3,399で掲載）。CPU・マザーボード・電源・SSDの価格はこのページでは追跡していないため、これらも確認してください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年のメモリ不足はGPUとDDR5 RAMの価格を通常より大きく押し上げ、GPUとRAMがローカルAI構成の最大の2つのコスト項目になっています。',
          },
          {
            type: 'plain-terms',
            text: 'GPUはマシンで最も高価なパーツであり、2026年はRAMも高価になりました。メモリ不足が和らぐまでは、発売時の価格は過去のものと考え、購入前に新品と中古を比較し、モデルが必要とする以上のVRAMやRAMを買わないでください。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '判断フローチャート：4つの質問で構成を選ぶ',
        content:
          '**順を追った4つの質問が、ほとんどの自作者を1つのティアへ導きます。**',
        items: [
          '**1. 実行したい最大のモデルは何ですか？** 7B〜13B：エントリー構成。14B〜33B：ミドル構成。70B：ハイエンド構成。',
          '**2. 譲れない予算の上限は？** 最も安いのはエントリー構成、中間はミドル構成、最も高いのはハイエンド構成です——RTX 5090だけで新品販売価格は約$4,500〜4,700です（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15）。',
          '**3. 新品のGPUですか、中古ですか？** 両方を比較してください——[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（情報源の更新日2026-10-15）によると中古の成約済みRTX 5090とRTX 4090は新品と同等かそれ以上で、中古は明らかに安い場合にのみ正しい選択です。',
          '**4. 電力とスペースの計画は成り立ちますか？** パーツを注文する前に、電源がティアに合っているか（650 W／850 W／1000 W）、ケースがGPUとクーラーを収められるかを確認してください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルAI PC構成は、最大のモデルサイズを最初に、予算の上限を次に、GPUの新品と中古の比較を3番目に、電力とスペースの計画を最後に答えて選んでください。',
          },
          {
            type: 'plain-terms',
            text: '実際に実行したい最大のモデルから始め、それにティアを決めさせてください。次に予算を確認し、GPUの新品と中古を比較し、電源とケースがパーツに合うことを確かめます。この順序で進めれば、モデルを実行できない構成を避けられます。',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'コンポーネントの購入先',
        content:
          '**大手の販売店はこれらの構成のすべてのパーツを扱っています。特にGPUは、新品と中古の掲載を比較してください。** 以下のリンクは単なる商品検索リンクで、アフィリエイトタグを含まず報酬を生みません。',
        items: [
          '**AmazonとNewegg：** CPU、RAM、SSD、電源、ケースの在庫が最も豊富です。新品のGPUとDDR5の在庫はより薄く、2026年の高騰水準で値付けされています。',
          '**中古GPU市場：** 確認する価値はありますが、確実な節約ではなくなりました——[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（情報源の更新日2026-10-15）によると、中古の成約済みRTX 5090とRTX 4090は新品と同等かそれ以上です。中古は、明らかに安く、動作確認済みの場合にのみ購入してください。',
          '**ドスパラやTSUKUMOなど（日本国内）：** CPU、マザーボード、電源の信頼できる入手先で、CPUとマザーボードのセット販売にも便利です。',
          '**GPUを最初に買ってください。** 最も大きく、最も変動の激しい項目です——納得できる価格でGPUを確保してから、それを支えるパーツをその周りで購入してください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年の価格高騰のため、本ガイドでは構成の合計を追跡していません。組む前に必ずGPUとRAMの現在の販売店ページを開いてください——両者を合わせると構成コストを支配します。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'AmazonでGPUを探す',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'NeweggでRyzen CPUを探す',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'AmazonでDDR5 RAMを探す',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'AmazonでNVMe SSDを探す',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'Amazonで電源を探す',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ローカルAI PCを組む際のよくある間違い',
        items: [
          '**GPUより先にCPUを選ぶ。** GPUがマシンの実行するモデルを決め、CPUは推論中ほとんど働きません。まずGPUを選び、それを支えるようCPUを選定してください。',
          '**VRAMの代わりにシステムRAMを買う。** RAMはモデルをVRAMから溢れさせられますが、RAMから動くモデルはインタラクティブな用途には遅すぎます。モデルにはVRAMを十分に、RAMはOSとツールのためだけに購入してください。',
          '**電源を過小に見積もる。** RTX 5090は単体で575 Wを消費します。負荷下で電圧降下する電源は、安定して動く遅いGPUよりも悪い選択です——電源をティアに合わせてください。',
          '**発売時の価格を基準にする。** 2026年の高騰により、GPUの希望小売価格や昨年のRAM価格はもはや現実を反映しません。GPUとRAMは実勢の販売店価格に対して予算化し、中古のほうが安いと決めつけず、中古市場も比較してください。',
          '**エントリー構成に8 GBのRTX 4060 Tiを買う。** 16 GB版と名前を共有しますが、14Bモデルを収められません。販売ページで16 GBバリアントを確認してください。',
          '**7Bモデルのために過剰に組む。** 7Bモデルで用途が足りるなら、ハイエンド構成は数十万円と数百ワットを無駄にします。たまたまある予算ではなく、モデルにティアを合わせてください。',
          '**ケースと冷却の計画を省く。** 575 W GPUと16コアCPUは実際の発熱を生みます。パーツを注文する前に、ケースがGPUとクーラーを収め、エアフローがあることを確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[ローカルLLM向け最良のGPU購入ガイド2026](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum：GPU購入のガイダンスと、本ガイドの構成合計の背景にある2026年の高騰の状況。',
          '[ローカルLLMワークステーションを組む](/ja/local-llms/local-llm-workstation-build) — PromptQuorum：ハイエンドティアの先にあるデュアルGPU 70Bワークステーションのパーツリスト、冷却、電源の指針。',
          '[NVIDIA GeForce RTX 40・50シリーズ仕様](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti、4070 Ti Super、5090の公式VRAM容量と電力（TGP）の数値。',
          '[PCPartPicker](https://pcpartpicker.com) — AMD Ryzen CPU、DDR5 RAM、NVMe SSD、電源のリアルタイム部品価格。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: "GPU1枚の構成に1000W電源は過剰ですか?",
            a: "RTX 5090の場合は過剰ではありません。定格は575Wで、瞬間的にそれを超えるピークも生じるため、NVIDIAの基準仕様は1000W電源です。本ガイドのエントリー構成とミドル構成では過剰で、650Wと850W(80+ Gold)でRTX 4060 Ti 16GBとRTX 4070 Ti Super 16GBに十分な余裕があります。ワット数を増やすより、12V-2x6コネクタをネイティブ搭載したATX 3.1電源を選んでください。",
          },
          {
            q: '2026年にローカルAI用のPCを組む費用はいくらですか？',
            a: '2026年のGPUとRAMの価格は変動が速く、日付付きの情報源があるのはGPU価格のみのため、構成の合計は追跡していません。ハイエンド構成のRTX 5090は新品販売価格が約$4,500〜4,700（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、情報源の更新日2026-10-15）で、DDR5の価格は2026年8月までの12か月で約500%上昇しました（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)、2026-08-18）。選んだティアのパーツリストの現在価格を合計してください。日本円の価格は調査していないため、ここではUSDのままです（日本での価格は異なる場合があります）。',
          },
          {
            q: 'ローカルAI PCの構成にはどのGPUを入れるべきですか？',
            a: '対象とする最大のモデルでGPUを選んでください。RTX 4060 Ti 16 GBは7B〜13Bモデル向けのエントリー構成に、RTX 4070 Ti Super 16 GBは14B〜33Bモデル向けのミドル構成に、RTX 5090 32 GBは70B作業向けのハイエンド構成に適します。GPUがマシンの実行可能なモデルを決めるため、まずGPUを選び、残りのパーツリストはその周りに構築します。',
          },
          {
            q: 'ローカルAI PCにはどれくらいのRAMが必要ですか？',
            a: 'エントリー構成は32 GB、ミドル構成は64 GB、ハイエンド構成は128 GBを見込んでください。システムRAMはVRAMの代わりにはなりません——RAMから動くモデルはインタラクティブな用途には遅すぎます。RAMはOS・コンテキスト・ツール用であり、モデル本体にはGPUのVRAMを十分に購入してください。',
          },
          {
            q: 'ローカルAI PCにはどの電源が必要ですか？',
            a: '電源をティアに合わせてください：エントリー構成は650 W、ミドル構成は850 W、ハイエンド構成は1000 W。ハイエンドティアが1000 Wを必要とするのは、RTX 5090が単体で575 Wを消費するためです。過小な電源は負荷下で不安定を招くため、このパーツを削らないでください。',
          },
          {
            q: '2026年、GPUコンポーネントは新品と中古のどちらを買うべきですか？',
            a: '決める前に新品と中古を比較し、中古のほうが安いと決めつけないでください。[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（情報源の更新日2026-10-15）によると、中古の成約済みRTX 5090は$5,900〜6,350で新品販売価格（約$4,500〜4,700）を上回り、中古の成約済みRTX 4090は$2,575〜3,010です。動作確認済みの中古カードは、明らかに安い場合にのみ購入する価値があります。CPU、RAM、SSD、電源は新品での購入が最適です。',
          },
          {
            q: 'シングルGPU構成で70Bモデルを実行できますか？',
            a: 'はい、ハイエンド構成なら可能です。RTX 5090 32 GBはこのガイドのシングルGPUで最大のVRAMを持ちますが、70BモデルのQ4はおよそ39〜42 GBを必要とするため、積極的な量子化またはシステムRAMへの部分的なオフロードを伴ってのみ70Bを実行できます。ハイエンド構成の128 GB RAMが、そのオフロードに必要な余裕を与えます。',
          },
          {
            q: 'ミドル構成はエントリー構成より追加費用に見合いますか？',
            a: 'はい、14Bクラスのモデルを定期的に動かすならそうです。エントリー構成とミドル構成は似たモデルを収めますが、ミドル構成のRTX 4070 Ti Superははるかに高速で——14Bモデルは遅さではなく即時性で応答し、軽めの22B〜33B作業も実用的になります。上限が明確に7B〜13Bモデルなら、エントリー構成の方が安く、コストパフォーマンスに優れます。',
          },
          {
            q: 'ローカルAI PCにThreadripper CPUは必要ですか？',
            a: 'いいえ。本ガイドの3構成すべてにはコンシューマー向けのRyzen CPUで十分です——エントリーティアにはRyzen 7、ミドルとハイエンドのティアにはRyzen 9。Threadripperがそのコストに見合うのは、ファインチューニングと推論を同時に行うデュアルGPUマシンの場合のみで、これはシングルGPU構成の範囲を超えます。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[完全な購入ガイドで構成のGPUを選ぶ](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 4つの予算ティアにわたる8つのGPU、現在の価格と高騰の計算付き。',
          '[本番運用向けのデュアルGPU 70Bワークステーション構成を見る](/ja/local-llms/local-llm-workstation-build) — 本ガイドのハイエンド構成の先にある、70Bクラスのモデル向け48GB VRAMのデュアルGPUティア。',
          '[PCを組むこととクラウドGPUのレンタルを比較する](/ja/power-local-llm/cloud-gpu-rental-guide-2026) — たまの計算用途では、レンタルがハードウェア所有を上回る場合。',
          '[組む前に各モデルサイズが必要とするVRAMを算出する](/ja/local-llms/how-much-vram-local-llm) — ここでのティア選択の背景にある、モデルサイズ別VRAMの完全な算出法。',
          '[PC構成の代替としてMacを検討する](/ja/power-local-llm/best-mac-for-local-ai-2026) — 統合メモリのApple Siliconが、ローカルAIで専用GPUのPCを上回る場合。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-zh.webp',
    title: '2026 本地 AI 工作站装机指南：三档预算配置',
    seoTitle: '2026 本地 AI PC 装机：从入门到 70B 工作站',
    intro:
      '大多数本地 AI 装机指南都从 CPU 讲起，但真正决定这台机器能跑哪些模型的是 GPU 及其显存——其他每个部件都是为支撑这块 GPU 而选定的。本指南为本地 LLM PC 提供三套完整配置清单：面向 7B-13B 模型的入门配置、面向 14B-33B 模型的中端配置，以及面向 70B 工作负载的发烧配置。每一档都列出确切部件、预期性能。关于价格有一点提醒：2026 年的存储芯片短缺把 GPU 和 DDR5 内存的价格都推到了远高于去年的水平，因此整机总价和 GPU 以外的部件价格在此未追踪，仅追踪来自注明日期的来源的 GPU 价格（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于 2026-10-15）——下单前请查看实时报价。',
    metaDescription:
      '2026年本地AI工作站搭建：LLM推理所需的CPU、GPU、内存和存储。按预算的完整搭建指南，从入门级到搭载RTX 5090的高端配置，全面解析硬件选择。',
    twitterDescription:
      '本地 AI PC 装机指南：三档预算配置，附 7B 到 70B 模型的完整部件清单。GPU 和内存价格在 2026 年都大幅上涨——这里是注明日期的 GPU 价格。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      '专门为运行本地 LLM 装机的购买者，他们按预算档位和目标模型规模做决策。假定读者熟悉量化、把显存视为约束条件以及基本的装机术语，但不熟悉具体的当前部件型号。',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      '2026 本地 ai pc 装机',
      '本地 llm 工作站装机指南',
      '运行 llm 最佳 pc 配置',
      'ai 工作站部件清单',
      '如何为本地 ai 装一台 pc',
    ],
    leadAnswerBlock:
      '**最佳的本地 AI PC 配置，是 GPU 显存与你目标模型相匹配的那一档。入门配置可跑 7B-13B 模型，中端配置可跑 14B-33B 模型，发烧配置可跑 70B 模型——整机总价在此未追踪，因为 2026 年 GPU 和内存价格变化很快；GPU 价格均注明来源和日期。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年如何装一台运行本地 LLM 的 PC？',
        answer:
          '按你想运行的最大模型选择档位，然后围绕 GPU 来组装。入门配置将 RTX 4060 Ti 16 GB 与一颗 Ryzen 7 CPU 搭配，可跑 7B-13B 模型。中端配置使用 RTX 4070 Ti Super 16 GB，可跑 14B-33B 模型。发烧配置使用 RTX 5090 32 GB，用于 70B 工作负载。2026 年的存储短缺把 GPU 和 DDR5 内存都推到远高于平时的价位，因此整机总价在此未追踪，仅 GPU 价格注明来源和日期。',
        bullets: [
          '入门配置：RTX 4060 Ti 16 GB，可跑 7B-13B 模型',
          '中端配置：RTX 4070 Ti Super 16 GB，可跑 14B-33B 模型',
          '发烧配置：RTX 5090 32 GB，仅在采用激进量化或部分溢出到系统内存时才能跑 70B 模型',
          '2026 年 GPU、内存和 SSD 价格都大幅上涨——请对比全新与二手，因为二手不再必然更便宜',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '速览要点', anchor: '#quick-facts' },
      { label: '编辑推荐', anchor: '#editors-choice' },
      { label: '三档配置对比', anchor: '#comparison-table' },
      { label: '你该选哪套配置？', anchor: '#which-build' },
      { label: '入门配置', anchor: '#budget-build' },
      { label: '中端配置', anchor: '#mid-build' },
      { label: '发烧配置', anchor: '#enthusiast-build' },
      { label: '2026 年价格上涨如何改变装机', anchor: '#price-surge' },
      { label: '决策流程图', anchor: '#decision-flowchart' },
      { label: '在哪里购买部件', anchor: '#where-to-buy' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '资料来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**GPU 决定档位，配置的其余部分支撑它。** 本地 AI PC 之所以以 GPU 为先来选，是因为显存决定能跑哪些模型。选择 GPU 显存与目标模型相匹配的档位，再围绕它来确定 CPU、内存和电源的规格。',
          '**2026 年的价格抬高了配置成本。** 存储芯片短缺把 GPU 和 DDR5 内存的价格推到远高于去年的水平。整机总价在此未追踪——内存如今已是一条主要的成本项，而不再是事后才考虑的部分（DDR5 价格在截至 2026 年 8 月的 12 个月内上涨约 500%，[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)，2026-08-18）。',
          '**入门配置：** RTX 4060 Ti 16 GB、Ryzen 7 7700、32 GB 内存、1 TB SSD、650 W 电源——以可用速度运行 7B-13B 模型。这是本指南三套配置中成本最低的一套。',
          '**中端配置：** RTX 4070 Ti Super 16 GB、Ryzen 9 7900X、64 GB 内存、2 TB SSD、850 W 电源——可跑 14B-33B 模型，并让 7B-14B 模型即时响应。',
          '**发烧配置：** RTX 5090 32 GB、Ryzen 9 7950X、128 GB 内存、4 TB SSD、1000 W 电源——本指南三套配置中,只有发烧配置能在单块 GPU 上运行 70B 模型,且需要激进量化或部分溢出到系统内存。仅 RTX 5090 一项的新品零售价就约 $4,500–4,700（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于 2026-10-15）。',
          '**内存不能替代显存。** 系统内存能让模型溢出显存，但从内存运行的模型对交互式使用来说太慢。为模型买足显存,为操作系统和工具链买内存。',
          '**电源随 GPU 等比例提升。** 入门配置需要 650 W,中端配置 850 W,发烧配置 1000 W,因为单是 RTX 5090 就需 575 W。请把电源与显卡一并纳入预算。',
          '**二手不再是必然的折扣。** [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（来源更新于 2026-10-15）显示，二手成交的 RTX 5090（$5,900–6,350）高于新品零售价（约 $4,500–4,700），二手成交的 RTX 4090（$2,575–3,010）与新品挂牌区间（$2,000–3,000）重叠，因此购买前请两者对比。当二手卡明显更便宜时，一块经过验证可用的二手卡仍然值得入手——但千万不要想当然。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览要点',
        items: [
          '**入门配置：** GPU RTX 4060 Ti 16 GB——可跑 7B 及大多数 13B 模型。',
          '**中端配置：** GPU RTX 4070 Ti Super 16 GB——从容运行 14B,可做轻量 22B-33B 工作。',
          '**发烧配置：** GPU RTX 5090 32 GB——从容运行 33B;70B 仅在采用激进量化或部分溢出到系统内存时才能运行。',
          '**Q4_K_M 下的显存经验法则：** 每十亿参数约 0.6 GB,另加 2-4 GB 用于上下文和工具链。',
          '**系统内存建议：** 入门配置 32 GB,中端配置 64 GB,发烧配置 128 GB。',
          '**各档电源：** 入门 650 W、中端 850 W、发烧 1000 W——RTX 5090 单卡就需 575 W。',
          '**2026 年价格现实：** 受存储短缺影响,GPU、DDR5 内存和 SSD 价格都大幅上涨——请确认实时价格,并对比全新与二手。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '编辑推荐：中端配置',
        highlight: true,
        content:
          '**对大多数为本地 AI 装机的购买者来说,中端配置是在能力、成本和余量之间取得平衡的那一档。** 它围绕 RTX 4070 Ti Super 16 GB 构建,能在保有上下文空间的情况下运行每个 14B 模型,可应付轻量 22B-33B 工作,并让 7B-14B 模型即时响应。这套配置在大多数 14B 级工作负载下应能继续好用相当长一段时间,但模型规模和价格都会变化。只有当你的上限明确停留在 7B-13B 模型时,才降到入门配置;只有当你确实需要 70B 工作负载时,才升到发烧配置。中端配置是一台你想长期保留的机器的合理默认选择。',
        callouts: [
          {
            type: 'note',
            text: '本编辑推荐仅反映价格与能力之比。PromptQuorum 未加入任何联盟营销计划,以下链接不带任何联盟标签——它们只是普通的参考链接,不产生佣金。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 RTX 4070 Ti Super 价格',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: '在 Newegg 查看 RTX 4070 Ti Super 价格',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026 年三档配置如何对比',
        content:
          'GPU 显存和功耗数字为厂商规格。推理速度是各档 GPU 所属级别的大致典型值(并非 PromptQuorum 实测),实际速度取决于量化方式、运行时和上下文长度。配置总价未追踪：只有 RTX 5090 的价格注明来源和日期（见发烧配置），内存和其他配件在本页未追踪。请对比全新与二手 GPU 的挂牌价:二手不再必然更便宜。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '对于本地 AI PC 配置,GPU 的显存决定这台机器能跑哪些模型,部件清单的其余部分按支撑这块 GPU 来确定规格——先按模型规模选档位。',
          },
          {
            type: 'plain-terms',
            text: '把这套配置想象成一支围绕一位明星球员——GPU——组建的球队。CPU、内存和电源是辅助阵容:有用,但它们的存在是为了让 GPU 持续得到供给。先选你的模型所需的 GPU,再围绕它组装其余部分。',
          },
        ],
        columns: ['配置档位', 'GPU', '显存', '可运行', '电源', '总价（2026 年）'],
        rows: [
          {
            '配置档位': '入门',
            'GPU': 'RTX 4060 Ti 16 GB',
            '显存': '16 GB',
            '可运行': '7B-13B 模型',
            '电源': '650 W',
            '总价（2026 年）': '未追踪',
          },
          {
            '配置档位': '中端',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            '显存': '16 GB',
            '可运行': '从容跑 14B,轻量 22B-33B',
            '电源': '850 W',
            '总价（2026 年）': '未追踪',
          },
          {
            '配置档位': '发烧',
            'GPU': 'RTX 5090 32 GB',
            '显存': '32 GB',
            '可运行': '从容跑 33B,70B 仅在采用激进量化或部分溢出时可跑',
            '电源': '1000 W',
            '总价（2026 年）': '未追踪',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: '你该选哪套配置？',
        content:
          '**你目标中最大的模型决定档位,你的预算予以确认。** 找到与你情况相符的那一行。',
        columns: ['你的情况', '装这套'],
        rows: [
          { '你的情况': '我跑 7B-13B 模型,想要本指南三套配置中成本最低的整机', '装这套': '入门配置' },
          { '你的情况': '我想要第一台本地 AI PC,不确定会走多远', '装这套': '入门配置,或为留余量选中端配置' },
          { '你的情况': '我持续运行 14B 模型,希望它们即时响应', '装这套': '中端配置' },
          { '你的情况': '我做轻量 22B-33B 工作,想要一台耐用的机器', '装这套': '中端配置' },
          { '你的情况': '我大量运行 33B 模型,或想要充裕的未来余量', '装这套': '发烧配置' },
          { '你的情况': '我需要一台能跑 70B 模型的单 GPU 机器（仅限激进量化或部分溢出到系统内存）', '装这套': '发烧配置' },
          { '你的情况': '尽管有 2026 年涨价,我仍想压低总价', '装这套': '任意档位——对比全新与二手 GPU 的挂牌价' },
          { '你的情况': '我拿不定主意,想要最稳妥、能用多年的配置', '装这套': '中端配置——编辑推荐' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: '入门配置：RTX 4060 Ti 16 GB',
        content:
          '**入门配置是本指南三套配置中成本最低的本地 AI PC,可运行每个 7B 模型以及大多数 13B 模型——对大多数首次使用者来说能力足够。** 它围绕 RTX 4060 Ti 16 GB 构建,这是本指南中价格最低的 16 GB 显卡,从而把总价压到 2026 年短缺所允许的最低水平。',
        items: [
          '**GPU——RTX 4060 Ti 16 GB：** 16 GB 显存,165 W。这一级 GPU 运行 7B 模型的典型速度约为 20-25 tok/s(非 PromptQuorum 实测,随量化和上下文而变),并能在保有上下文余量的情况下容纳 14B 模型。16 GB 容量正是选它而不选 8 GB 版的理由。',
          '**CPU——AMD Ryzen 7 7700：** 8 核心,功耗适中。GPU 推理期间 CPU 工作量很小,因此这一档用中端芯片是正确的——不要在这一档的 CPU 上超额花钱。',
          '**主板——B650 芯片组：** 支持 Ryzen 7 和一块 PCIe 全尺寸 GPU。这一档不需要高端供电。',
          '**内存——32 GB DDR5：** 足以应付操作系统、工具链和一个在显存中运行的 7B-13B 模型。内存不能替代显存——这一档 32 GB 足够,但 DDR5 如今是这套配置中的第二大成本项。',
          '**存储——1 TB NVMe SSD：** 可容纳操作系统和数个模型（一个 7B Q4 模型约 4-5 GB）。',
          '**电源——650 W 80+ 金牌：** 为一块 165 W 的 GPU 和一颗 8 核 CPU 提供从容余量。',
          '**机箱与散热——配塔式风冷散热器的中塔机箱：** 入门档发热很少,风冷已足够。',
          '**为何装这一档:** 最低的入门成本、低功耗,以及涵盖通用对话、编程辅助和摘要的 7B-13B 模型所需的足够能力。**为何跳过它:** 如果你已经想要 14B 或更大的模型,请从中端配置起步。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '请专门购买 RTX 4060 Ti 的 16 GB 版本。8 GB 版使用相同的 GPU 核心、运行速度相近,但 8 GB 容纳不下 14B 模型——多出来的显存正是此选择的全部意义。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 RTX 4060 Ti 16GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 Ryzen 7 7700 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 32GB DDR5 内存价格',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: '中端配置：RTX 4070 Ti Super 16 GB',
        content:
          '**中端配置是编辑推荐——它即时运行 14B 模型,可应付轻量 22B-33B 工作,是你为长期保留而装的那一档。** 它围绕 RTX 4070 Ti Super 16 GB 构建,速度足够快,以至于在 14B 级别模型上响应延迟不再被察觉。',
        items: [
          '**GPU——RTX 4070 Ti Super 16 GB：** 16 GB 显存,285 W。与入门档相同的模型容量,但快得多——7B-14B 模型即时响应,轻量 22B-33B 工作可用。',
          '**CPU——AMD Ryzen 9 7900X：** 12 核心。在数据准备和推理同时运行工具链方面,比入门 CPU 有更多余量。',
          '**主板——B650 或 X670 芯片组：** 为 12 核 CPU 和一块 285 W GPU 提供稳固供电。',
          '**内存——64 GB DDR5：** 为操作系统、更大的上下文窗口以及在模型旁运行的 RAG 流水线等工具链留出空间。这是仅次于 GPU 的最大成本项——如果预算紧张,32 GB仍能运行这一档的所有模型,因为模型存放在显存中。',
          '**存储——2 TB NVMe SSD：** 可容纳相当规模的模型库——一个 33B Q4 模型约 18-20 GB。',
          '**电源——850 W 80+ 金牌：** 在持续负载下为 285 W GPU 和 12 核 CPU 提供从容余量。',
          '**机箱与散热——配 240-280 mm 一体式水冷或高端风冷散热器的中塔机箱：** 中端档发热中等,优质散热器在长时间推理中保持 CPU 稳定。',
          '**为何装这一档:** 你持续运行 14B 模型且希望即时响应,或你做轻量 22B-33B 工作且想要余量。**为何跳过它:** 若 7B-13B 已足够,入门配置成本更低;若你需要 70B,没有 16 GB 的 GPU 装得下它——请上发烧配置。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '中端配置容纳的模型与入门配置相同——你付的是速度,而非容量。如果 14B 模型将成为日常工作负载且等待它会让你恼火,就装这一档。',
          },
          {
            type: 'note',
            text: '一块二手 RTX 4090 24 GB 如今的挂牌价远高于这一档（二手成交 $2,575–3,010，[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于 2026-10-15）,因此它不再是捷径。购买 RTX 4070 Ti Super 前请对比全新与二手；其价格在此未追踪。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 RTX 4070 Ti Super 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 Ryzen 9 7900X 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 64GB DDR5 内存价格',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: '发烧配置：RTX 5090 32 GB',
        content:
          '**本指南三套配置中,只有发烧配置能在单块 GPU 上运行 70B 模型,且需要激进量化或部分溢出到系统内存——它的 RTX 5090 32 GB 是核心部件。** 装这一档是为了显存容量,而非纯粹的速度;速度只是副产物。2026 年涨价对这一档冲击最重——RTX 5090 的新品零售价约 $4,500–4,700，MSRP 为 $1,999（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于 2026-10-15）——因此 GPU 和内存这两项主导成本。',
        items: [
          '**GPU——RTX 5090 32 GB（新品零售价约$4,500–4,700，MSRP为$1,999；二手成交$5,900–6,350；[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于2026-10-15；挂牌数据，不是报价）：** 32 GB GDDR7 显存,575 W。这是本指南中显存最大的单块 GPU;无需双 GPU 配置即可运行 70B 模型,但需要激进量化或部分溢出到系统内存。它从容运行 33B 模型,还有富余。',
          '**CPU——AMD Ryzen 9 7950X：** 16 核心。足以在繁重推理之外运行数据准备、微调实验和工具链。',
          '**主板——X670E 芯片组：** 强劲供电和 PCIe 5.0,按一块 575 W GPU 和 16 核 CPU 来定规格。',
          '**内存——128 GB DDR5：** 为大上下文窗口、同时加载多个模型和工具链留出空间——并在需要时留有把模型部分溢出到内存的余量。很少有 128 GB 套装能稳定供货;64 GB 套装是省钱的替代方案。',
          '**存储——4 TB NVMe SSD：** 一个 70B Q4 模型约 40 GB;一块 4 TB 硬盘可容纳一个大型模型的大库。4 TB 硬盘是 2026 年涨幅最大的 SSD 容量。',
          '**电源——1000 W 80+ 白金：** 必需,因为单是 RTX 5090 就需 575 W——一只 750 W 的电源会在负载下塌陷。不要把这个部件选小。',
          '**机箱与散热——配 360 mm 一体式水冷的全尺寸机箱：** 575 W GPU 加 16 核 CPU 产生真实的热量;360 mm 液冷在持续 70B 推理中保持 CPU 稳定。',
          '**为何装这一档:** 你需要 33B 或 70B 模型、你运行繁重的批量推理,或你想要一台多年无需更换的机器。**为何跳过它:** 对 7B-14B 模型来说它属于过度配置——中端配置在这些规模上以不到一半的成本提供即时响应。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090 单卡就需 575 W。请把它与本部件清单中的 1000 W 电源搭配——更小的电源会在负载下出现电压骤降。装机前请确认你的墙面电路能够供给全部功耗。这不是电气安全建议；请遵循 NVIDIA 和电源厂商的指引。',
          },
          {
            type: 'note',
            text: '一个 70B Q4 模型约需 39-42 GB 显存,因此即便是 RTX 5090 32 GB,也只能在采用激进量化或部分溢出到系统内存的情况下以 Q4 跑 70B。本配置中的 128 GB 内存为这种溢出提供了所需的空间。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 RTX 5090 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 Ryzen 9 7950X 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: '在 Amazon 查看 1000W 电源价格',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026 年价格上涨如何改变装机的算账方式',
        content:
          '**2026 年的存储芯片短缺把 GPU 和 DDR5 内存的价格推到远高于平时的水平,而由于 GPU 和内存是每套配置中最大的两项,它们主导成本。** 请围绕当前挂牌价而非发布时价格来规划装机。',
        items: [
          '**GPU 和内存主导总价。** 在每一档中,GPU 都是最大的一项,DDR5 内存如今排第二——涨价主要通过这两个部件改变配置总价,影响超过任何其他部件。',
          '**根源是存储,而非 GPU 本身。** GDDR、HBM 和 DRAM 的供应短缺抬高了每块配备高速显存的卡以及系统内存本身的成本;显存越大,卡受冲击越重。RTX 5090 的新品零售价约 $4,500–4,700，MSRP 为 $1,999（4,500 / 1,999 = 2.25 倍，[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于 2026-10-15）——超过一倍。',
          '**低端 GPU 的价格在此未追踪。** 入门和中端配置所用的 RTX 4060 Ti 16 GB 与 RTX 4070 Ti Super 不在该追踪来源的覆盖范围内，请查看实时挂牌价。',
          '**二手不再是可靠的折扣。** [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（来源更新于 2026-10-15）显示，二手成交的 RTX 5090 为 $5,900–6,350（新品零售价约 $4,500–4,700），二手成交的 RTX 4090 为 $2,575–3,010（中位数 $2,860）；这些是挂牌数据，不是报价。每块显卡都要对比全新与二手的挂牌价;经验证可用的二手卡只有在明显更便宜时才值得买。',
          '**内存和 SSD 涨幅很大;CPU、主板和电源变动很小。** DDR5 价格在截至 2026 年 8 月的 12 个月内上涨约 500%（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)，2026-08-18；一套 128 GB DDR5-6400 套装标价 $3,399）。本页不追踪 CPU、主板、电源和 SSD 的价格，因此也请核对。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026 年的存储短缺把 GPU 和 DDR5 内存价格推到远高于平时的水平,使 GPU 和内存成为每套本地 AI 配置中最大的两项成本。',
          },
          {
            type: 'plain-terms',
            text: 'GPU 是这台机器最贵的部件,而在 2026 年内存也变贵了。在存储短缺缓解之前,请把发布时价格当作历史,购买前对比全新与二手,并且不要买超过你模型所需的显存或内存。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '决策流程图:用四个问题选定你的配置',
        content:
          '**按顺序回答的四个问题,会把大多数装机者引向某一档。**',
        items: [
          '**1. 你想运行的最大模型是多大？** 7B-13B:入门配置。14B-33B:中端配置。70B:发烧配置。',
          '**2. 你的硬性预算上限是多少？** 入门配置成本最低，中端配置居中，发烧配置最高——仅 RTX 5090 的新品零售价就约 $4,500–4,700（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于 2026-10-15）。',
          '**3. 全新还是二手 GPU？** 两者都要对比——根据[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（来源更新于 2026-10-15），二手成交的 RTX 5090 和 RTX 4090 不低于全新品,因此只有当二手卡明显更便宜时,它才是正确的选择。',
          '**4. 你的电力和空间计划站得住脚吗？** 在订购部件之前,确认电源与档位匹配（650 W／850 W／1000 W）、机箱能容纳 GPU 和散热器。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '选择本地 AI PC 配置时,先回答最大模型规模,其次预算上限,第三 GPU 是新还是二手,最后是电力与空间规划。',
          },
          {
            type: 'plain-terms',
            text: '从你真正想运行的最大模型入手,让它来决定你的档位。然后核对预算,决定是否买二手 GPU,并确认电源和机箱与部件匹配。按这个顺序来,可以避免装出一台跑不了你模型的机器。',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '在哪里购买部件',
        content:
          '**大型零售商备有这些配置中的每个部件;请专门针对 GPU 对比全新与二手的挂牌价。** 下方链接为普通的产品搜索链接,不带任何联盟标签,也不产生佣金。',
        items: [
          '**Amazon 和 Newegg：** CPU、内存、SSD、电源和机箱的库存最齐全。全新 GPU 和 DDR5 库存较少,且按 2026 年涨价水平定价。',
          '**二手 GPU 市场：** 值得一看,但不再是必然的省钱途径——根据[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（来源更新于 2026-10-15），二手成交的 RTX 5090 和 RTX 4090 不低于全新品。只有当二手卡明显更便宜且经验证可用时才买。',
          '**Micro Center（美国,实体店）：** 若有门店可达,通常是全新 GPU 和 CPU 价格最优的去处;也适合购买 CPU 加主板的套装。',
          '**先买 GPU。** 它是最大、最易波动的一项——以你能接受的价格锁定 GPU,再围绕它购买辅助部件。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '由于 2026 年价格上涨,本指南不追踪整机总价。装机前请务必打开 GPU 和内存当前的零售商商品页——二者合计主导着配置成本。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: '在 Amazon 浏览 GPU',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: '在 Newegg 浏览 Ryzen CPU',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: '在 Amazon 浏览 DDR5 内存',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: '在 Amazon 浏览 NVMe SSD',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: '在 Amazon 浏览电源',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '装本地 AI PC 时的常见错误',
        items: [
          '**在选 GPU 之前先选 CPU。** GPU 决定这台机器跑哪些模型;推理期间 CPU 工作量很小。先选 GPU,再按支撑它来定 CPU 规格。',
          '**用系统内存代替显存。** 内存能让模型溢出显存,但从内存运行的模型对交互式使用来说太慢。为模型买足显存;内存只为操作系统和工具链而买。',
          '**电源选小了。** 单是 RTX 5090 就需 575 W。一只在负载下塌陷的电源,比一块更慢但运行稳定的 GPU 更糟——把电源与档位匹配。',
          '**死盯发布时价格。** 2026 年的涨价意味着 GPU 的建议零售价和去年的内存价格都不再反映现实。请按实时零售价为 GPU 和内存做预算,并对比二手市场,而不是想当然地认为二手更便宜。',
          '**为入门配置买了 8 GB 版 RTX 4060 Ti。** 它与 16 GB 版同名,却容纳不下 14B 模型。请在商品页确认是 16 GB 版本。',
          '**为 7B 模型过度配置。** 如果 7B 模型已覆盖你的用例,发烧配置会浪费数千美元和数百瓦。把档位与模型匹配,而非与你恰好手头的预算匹配。',
          '**略过机箱与散热的规划。** 一块 575 W GPU 加一颗 16 核 CPU 会产生真实的热量。订购部件前,确认机箱能容纳 GPU 和散热器并具备风道。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[2026 本地 LLM 最佳 GPU 购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum：GPU 购买建议,以及本指南配置总价背后的 2026 年涨价背景。',
          '[搭建本地 LLM 工作站](/zh/local-llms/local-llm-workstation-build) — PromptQuorum：发烧档之外的双 GPU 70B 工作站部件清单、散热和电源指南。',
          '[NVIDIA GeForce RTX 40 与 50 系列规格](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti、4070 Ti Super 和 5090 的官方显存容量与功耗（TGP）数据。',
          '[PCPartPicker](https://pcpartpicker.com) — AMD Ryzen CPU、DDR5 内存、NVMe SSD 和电源的实时部件价格。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: "单GPU配置用1000W电源是否过剩?",
            a: "对RTX 5090并不过剩:它的额定功耗为575W,还可能出现短时峰值,因此NVIDIA的参考规格建议1000W电源。对本指南中的入门和中端配置则属过剩:650W和850W(80+ Gold)已为RTX 4060 Ti 16GB和RTX 4070 Ti Super 16GB留出充足余量。与其盲目加大瓦数,不如选择带原生12V-2x6接口的ATX 3.1电源。",
          },
          {
            q: '2026 年装一台本地 AI PC 要花多少钱？',
            a: '整机总价在此未追踪，因为 2026 年 GPU 和内存价格变化很快，只有 GPU 价格有注明日期的来源。发烧配置的 RTX 5090 新品零售价约 $4,500–4,700（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于 2026-10-15），DDR5 价格在截至 2026 年 8 月的 12 个月内上涨约 500%（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)，2026-08-18）。请把你所选档位部件清单的实时价格相加。',
          },
          {
            q: '本地 AI PC 配置该用哪块 GPU？',
            a: '按你目标中最大的模型来选 GPU。RTX 4060 Ti 16 GB 适合面向 7B-13B 模型的入门配置,RTX 4070 Ti Super 16 GB 适合面向 14B-33B 模型的中端配置,RTX 5090 32 GB 适合面向 70B 工作负载的发烧配置。GPU 决定这台机器能跑哪些模型,因此它最先选定,部件清单的其余部分围绕它来构建。',
          },
          {
            q: '本地 AI PC 需要多少内存？',
            a: '入门配置规划 32 GB,中端配置 64 GB,发烧配置 128 GB。系统内存不能替代显存——从内存运行的模型对交互式使用来说太慢。内存用于操作系统、上下文和工具链;模型本身则需在 GPU 上买足显存。',
          },
          {
            q: '本地 AI PC 需要什么样的电源？',
            a: '把电源与档位匹配:入门配置 650 W,中端配置 850 W,发烧配置 1000 W。发烧档需要 1000 W,因为 RTX 5090 单卡就需 575 W。电源选小会在负载下导致不稳定,所以不要削减这个部件。',
          },
          {
            q: '2026 年 GPU 部件该买全新还是二手？',
            a: '购买前先对比全新与二手,不要想当然地认为二手更便宜。[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（来源更新于 2026-10-15）显示，二手成交的 RTX 5090 为 $5,900–6,350（新品零售价约 $4,500–4,700），二手成交的 RTX 4090 为 $2,575–3,010。经验证可用的二手卡只有在明显更便宜时才值得买。CPU、内存、SSD 和电源则最好买全新。',
          },
          {
            q: '单 GPU 配置能跑 70B 模型吗？',
            a: '能,发烧配置可以。RTX 5090 32 GB 是本指南中显存最大的单块 GPU,但 70B 模型在 Q4 下约需 39-42 GB 显存——因此它只有在采用激进量化或部分溢出到系统内存的情况下才能运行 70B。发烧配置中的 128 GB 内存为这种溢出提供了所需空间。',
          },
          {
            q: '中端配置相比入门配置,多花的钱值得吗？',
            a: '值得,如果你经常运行 14B 级别的模型。入门配置和中端配置容纳的模型相近,但中端配置的 RTX 4070 Ti Super 快得多——14B 模型从迟缓变为即时响应,轻量 22B-33B 工作变得可用。如果你的上限明确停留在 7B-13B 模型,入门配置成本更低,性价比更高。',
          },
          {
            q: '本地 AI PC 需要 Threadripper CPU 吗？',
            a: '不需要。本指南三套配置用消费级 Ryzen CPU 都已足够——入门档用 Ryzen 7,中端和发烧档用 Ryzen 9。Threadripper 只有在一台同时运行微调和推理的双 GPU 机器上才值得它的成本,而这超出了单 GPU 配置的范围。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[用完整购买指南为你的配置选 GPU](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 横跨四个预算档位的八块 GPU,附当前价格和涨价算账。',
          '[查看面向生产用途的双 GPU 70B 工作站配置](/zh/local-llms/local-llm-workstation-build) — 本指南发烧配置之外、面向 70B 级模型的 48 GB 显存双 GPU 档位。',
          '[把自己装 PC 与租用云 GPU 做对比](/zh/power-local-llm/cloud-gpu-rental-guide-2026) — 在偶尔需要算力时,租用何时优于自购硬件。',
          '[装机前算清每个模型规模所需的显存](/zh/local-llms/how-much-vram-local-llm) — 这里档位选择背后、按模型规模算显存的完整方法。',
          '[把 Mac 作为 PC 装机的替代方案来考虑](/zh/power-local-llm/best-mac-for-local-ai-2026) — 统一内存的 Apple Silicon 何时在本地 AI 上胜过独立 GPU 的 PC。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-es.webp',
    title: 'Guía para armar una PC con IA local 2026: 3 niveles de presupuesto',
    seoTitle: 'PC para IA local 2026: del básico a la estación 70B',
    intro:
      'La mayoría de las guías para armar una PC con IA local empiezan por la CPU, pero es la GPU y su VRAM lo que decide qué modelos puede ejecutar la máquina — cada otra parte se elige para dar soporte a esa GPU. Esta guía ofrece tres listas de componentes completas para una PC dedicada a LLM locales: una configuración económica para modelos 7B-13B, una configuración media para modelos 14B-33B y una configuración entusiasta para trabajar con modelos 70B. Cada nivel incluye los componentes exactos, el rendimiento esperado. Una advertencia sobre los precios: la escasez de chips de memoria de 2026 empujó los precios de las GPU y la RAM DDR5 muy por encima de los niveles del año pasado, así que los totales y los precios del resto de piezas no se rastrean aquí; solo los precios de GPU, de una fuente fechada ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15) — revisa los listados en vivo antes de pedir. Los precios en tu país pueden variar según impuestos locales.',
    metaDescription:
      'Tres PCs para IA local en 2026: económica 7B–13B, media 14B–33B y entusiasta 70B. Listas de componentes exactas, precios de GPU fechados y notas sobre la escasez de DDR5 de 2026.',
    twitterDescription:
      'Guía para armar una PC con IA local: tres niveles de presupuesto con listas de componentes completas para modelos de 7B a 70B. Los precios de GPU y RAM se dispararon en 2026 — aquí hay precios de GPU fechados.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      'Personas que arman una PC específicamente para ejecutar LLM locales y toman su decisión según el nivel de presupuesto y el tamaño de modelo objetivo. Se asume familiaridad con la cuantización y la VRAM como restricción, y con los términos básicos del armado de PC, pero no con los SKU de componentes actuales específicos.',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      'armar pc ia local 2026',
      'guia armado workstation llm local',
      'mejor pc para ejecutar llm',
      'lista de componentes workstation ia',
      'como armar una pc para ia local',
    ],
    leadAnswerBlock:
      '**La mejor PC para IA local es el nivel cuya VRAM de GPU encaja con tu modelo objetivo. Una configuración económica ejecuta modelos 7B-13B, una media ejecuta modelos 14B-33B y una entusiasta ejecuta modelos 70B — los totales no se rastrean aquí porque los precios de GPU y RAM de 2026 cambian rápido; los precios de GPU llevan fuente y fecha. Los precios en tu país pueden variar según impuestos locales.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo armo una PC para ejecutar LLM locales en 2026?',
        answer:
          'Elige tu nivel según el modelo más grande que quieras ejecutar y luego arma la PC alrededor de la GPU. Una configuración económica combina una RTX 4060 Ti 16 GB con una CPU Ryzen 7 para modelos 7B-13B. Una configuración media usa una RTX 4070 Ti Super 16 GB para modelos 14B-33B. Una configuración entusiasta usa una RTX 5090 32 GB para trabajo con 70B. La escasez de memoria de 2026 elevó los precios de GPU y RAM DDR5 muy por encima de lo habitual, así que los totales no se rastrean aquí y solo los precios de GPU llevan fuente y fecha. Los precios en tu país pueden variar según impuestos locales.',
        bullets: [
          'Configuración económica: RTX 4060 Ti 16 GB, ejecuta modelos 7B-13B',
          'Configuración media: RTX 4070 Ti Super 16 GB, ejecuta modelos 14B-33B',
          'Configuración entusiasta: RTX 5090 32 GB, ejecuta modelos 70B solo con cuantización agresiva o descarga parcial',
          'Los precios de GPU, RAM y SSD se dispararon en 2026 — compara nuevo y usado, porque lo usado ya no siempre cuesta menos',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Elección del editor', anchor: '#editors-choice' },
      { label: 'Comparación de niveles', anchor: '#comparison-table' },
      { label: '¿Qué configuración elegir?', anchor: '#which-build' },
      { label: 'Configuración económica', anchor: '#budget-build' },
      { label: 'Configuración media', anchor: '#mid-build' },
      { label: 'Configuración entusiasta', anchor: '#enthusiast-build' },
      { label: 'Cómo el aumento de precios de 2026 cambia el armado', anchor: '#price-surge' },
      { label: 'Diagrama de decisión', anchor: '#decision-flowchart' },
      { label: 'Dónde comprar los componentes', anchor: '#where-to-buy' },
      { label: 'Errores frecuentes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**La GPU define el nivel; el resto de la configuración la soporta.** Una PC para IA local se elige primero por la GPU porque la VRAM decide qué modelos corren. Elige el nivel cuya VRAM de GPU encaje con tu modelo objetivo y luego dimensiona la CPU, la RAM y la fuente de alimentación alrededor de eso.',
          '**Los precios de 2026 encarecieron las configuraciones.** Una escasez de chips de memoria empujó las GPU y la RAM DDR5 muy por encima de los precios del año pasado. Los totales no se rastrean aquí — y la RAM ahora es una línea de costo importante, no un detalle menor (los precios de la DDR5 subieron cerca de un 500 % en 12 meses hasta agosto de 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Configuración económica:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD de 1 TB, fuente de 650 W — ejecuta modelos 7B-13B a velocidad usable. La de menor costo de las tres configuraciones de esta guía.',
          '**Configuración media:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD de 2 TB, fuente de 850 W — ejecuta modelos 14B-33B y hace que los modelos 7B-14B respondan al instante.',
          '**Configuración entusiasta:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD de 4 TB, fuente de 1000 W — de las tres configuraciones aquí, la única que puede ejecutar un modelo 70B en una sola GPU, y solo con cuantización agresiva o descarga parcial a la RAM del sistema. La RTX 5090 sola se lista nueva en unos $4.500–4.700 ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15).',
          '**La RAM no es un sustituto de la VRAM.** La RAM del sistema permite que un modelo desborde la VRAM, pero un modelo ejecutándose desde la RAM es demasiado lento para uso interactivo. Compra suficiente VRAM para el modelo; compra RAM para el sistema operativo y las herramientas.',
          '**La fuente de alimentación escala con la GPU.** Una configuración económica necesita 650 W, la media 850 W y la entusiasta 1000 W porque la RTX 5090 sola consume 575 W. Presupuesta la fuente junto con la tarjeta.',
          '**Lo usado ya no es un descuento garantizado.** Según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fuente actualizada el 2026-10-15), las RTX 5090 vendidas de segunda mano ($5.900–6.350) superan el precio nuevo (unos $4.500–4.700) y las RTX 4090 usadas ($2.575–3.010) se solapan con el rango de anuncios nuevos ($2.000–3.000), así que compara ambas antes de comprar. Una tarjeta usada con funcionamiento verificado sigue valiendo la pena cuando es claramente más barata — pero nunca lo des por hecho.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Configuración económica:** GPU RTX 4060 Ti 16 GB — ejecuta modelos 7B y la mayoría de los 13B.',
          '**Configuración media:** GPU RTX 4070 Ti Super 16 GB — ejecuta 14B con comodidad, trabajo ligero con 22B-33B.',
          '**Configuración entusiasta:** GPU RTX 5090 32 GB — ejecuta 33B con comodidad y 70B solo con cuantización agresiva o descarga parcial.',
          '**Regla general de VRAM en Q4_K_M:** aproximadamente 0,6 GB por cada mil millones de parámetros, más 2-4 GB para contexto y herramientas.',
          '**Guía de RAM del sistema:** 32 GB para la configuración económica, 64 GB para la media, 128 GB para la entusiasta.',
          '**Fuente de alimentación por nivel:** 650 W económica, 850 W media, 1000 W entusiasta — la RTX 5090 sola consume 575 W.',
          '**Realidad de precios en 2026:** GPU, RAM DDR5 y SSD se dispararon por la escasez de memoria — confirma precios actuales y compara nuevo contra usado.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Elección del editor: la configuración media',
        highlight: true,
        content:
          '**Para la mayoría de quienes arman una PC para IA local, la configuración media es el nivel que equilibra capacidad, costo y margen.** Construida alrededor de una RTX 4070 Ti Super 16 GB, ejecuta cada modelo 14B con espacio de contexto, maneja trabajo ligero con 22B-33B y hace que los modelos 7B-14B respondan al instante Debería seguir siendo utilizable para la mayoría de las cargas de trabajo de clase 14B durante bastante tiempo, pero los tamaños de los modelos y los precios cambian. Baja a la configuración económica solo si tu techo es firmemente modelos 7B-13B; sube a la configuración entusiasta solo si necesitas específicamente trabajar con 70B. La configuración media es una opción predeterminada razonable para una máquina que quieres conservar.',
        callouts: [
          {
            type: 'note',
            text: 'Esta elección del editor refleja solo la relación precio-capacidad. PromptQuorum no está inscrito en ningún programa de afiliados y los enlaces a continuación no llevan etiquetas de afiliado — son enlaces de referencia simples que no generan comisión.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Ver precio de la RTX 4070 Ti Super en Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Ver precio de la RTX 4070 Ti Super en Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Cómo se comparan los tres niveles de configuración en 2026',
        content:
          'Las cifras de VRAM y potencia de la GPU son especificaciones del fabricante. Las velocidades de inferencia son cifras aproximadas y típicas de la clase de GPU de cada nivel (no medidos por PromptQuorum); la velocidad real depende de la cuantización, el entorno de ejecución y la longitud de contexto. Los totales de configuración no se rastrean: solo el precio de la RTX 5090 lleva fuente y fecha (ver la configuración entusiasta), y la RAM y el resto de piezas no se rastrean en esta página. Compara listados de GPU nuevas y usadas: lo usado ya no siempre cuesta menos. En Latinoamérica, los precios pueden variar según impuestos locales.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para una PC con IA local, la VRAM de la GPU decide qué modelos puede ejecutar la máquina y el resto de la lista de componentes se dimensiona para soportar esa GPU — elige el nivel primero por tamaño de modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en la configuración como un equipo construido alrededor de un jugador estrella: la GPU. La CPU, la RAM y la fuente de alimentación son el reparto de apoyo — útiles, pero existen para mantener a la GPU funcionando. Elige primero la GPU que necesita tu modelo y luego arma el resto alrededor de ella.',
          },
        ],
        columns: ['Nivel', 'GPU', 'VRAM', 'Ejecuta', 'Fuente', 'Total (2026)'],
        rows: [
          {
            'Nivel': 'Económica',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Ejecuta': 'modelos 7B-13B',
            'Fuente': '650 W',
            'Total (2026)': 'no rastreado',
          },
          {
            'Nivel': 'Media',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Ejecuta': '14B con comodidad, 22B-33B ligero',
            'Fuente': '850 W',
            'Total (2026)': 'no rastreado',
          },
          {
            'Nivel': 'Entusiasta',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Ejecuta': '33B con comodidad, 70B solo con cuantización agresiva o descarga parcial',
            'Fuente': '1000 W',
            'Total (2026)': 'no rastreado',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: '¿Qué configuración deberías elegir?',
        content:
          '**El modelo más grande que quieres ejecutar decide el nivel; tu presupuesto lo confirma.** Encuentra la fila que coincide con tu situación.',
        columns: ['Tu situación', 'Arma esta'],
        rows: [
          { 'Tu situación': 'Ejecuto modelos 7B-13B y quiero la más económica de las tres configuraciones de esta guía', 'Arma esta': 'Configuración económica' },
          { 'Tu situación': 'Quiero una primera PC para IA local y no sé hasta dónde llegaré', 'Arma esta': 'Configuración económica, o la media para tener margen' },
          { 'Tu situación': 'Ejecuto modelos 14B constantemente y los quiero al instante', 'Arma esta': 'Configuración media' },
          { 'Tu situación': 'Hago trabajo ligero con 22B-33B y quiero una máquina duradera', 'Arma esta': 'Configuración media' },
          { 'Tu situación': 'Ejecuto modelos 33B intensivamente o quiero mucho margen futuro', 'Arma esta': 'Configuración entusiasta' },
          { 'Tu situación': 'GPU única para modelos 70B (solo con cuantización agresiva o descarga parcial)', 'Arma esta': 'Configuración entusiasta' },
          { 'Tu situación': 'Quiero mantener el total bajo a pesar del aumento de 2026', 'Arma esta': 'Cualquier nivel — compara listados de GPU nuevas y usadas' },
          { 'Tu situación': 'No estoy seguro y quiero la configuración más segura para conservar por años', 'Arma esta': 'Configuración media — la elección del editor' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuración económica: RTX 4060 Ti 16 GB',
        content:
          '**La configuración económica es la de menor costo de las tres configuraciones de esta guía y ejecuta cada modelo 7B y la mayoría de los modelos 13B — suficiente capacidad para la mayoría de los usuarios por primera vez.** Está construida alrededor de la RTX 4060 Ti 16 GB, la GPU de 16 GB de menor precio de esta guía, lo que mantiene el total tan bajo como lo permite la escasez de 2026.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB de VRAM, 165 W. La velocidad típica de esta clase de GPU es de aproximadamente 20-25 tok/s con modelos 7B (no medida por PromptQuorum; varía con la cuantización y el contexto), y los modelos 14B caben con margen de contexto. La capacidad de 16 GB es la razón para elegirla sobre la versión de 8 GB.',
          '**CPU — AMD Ryzen 7 7700:** 8 núcleos, consumo de energía moderado. La CPU hace poco trabajo durante la inferencia de GPU, por lo que un chip de gama media es correcto aquí — no gastes de más en la CPU en este nivel.',
          '**Placa base — chipset B650:** soporta el Ryzen 7 y una GPU de tamaño completo en PCIe. No necesitas suministro de energía de gama alta en este nivel.',
          '**RAM — 32 GB DDR5:** suficiente para el sistema operativo, las herramientas y un modelo 7B-13B ejecutándose en VRAM. La RAM no es un sustituto de la VRAM — 32 GB es suficiente aquí, pero la DDR5 ahora es la segunda línea más grande de esta configuración.',
          '**Almacenamiento — SSD NVMe de 1 TB:** contiene el sistema operativo y varios modelos (un modelo 7B Q4 pesa aproximadamente 4-5 GB).',
          '**Fuente de alimentación — 650 W 80+ Gold:** margen cómodo para una GPU de 165 W y una CPU de 8 núcleos.',
          '**Gabinete y refrigeración — torre media con enfriador de aire tipo torre:** el nivel económico genera poco calor; la refrigeración por aire es suficiente.',
          '**Por qué armar este nivel:** menor costo de entrada, bajo consumo de energía y suficiente capacidad para los modelos 7B-13B que cubren chat general, ayuda con código y resumen. **Por qué saltarlo:** si ya quieres modelos de 14B o más grandes, comienza en la configuración media.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Compra la RTX 4060 Ti específicamente en su versión de 16 GB. La versión de 8 GB usa el mismo die de GPU y corre a velocidad similar, pero 8 GB no pueden alojar un modelo 14B — la memoria extra es el único propósito de esta elección.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'Ver precio de la RTX 4060 Ti 16GB en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'Ver precio del Ryzen 7 7700 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Ver precio de la RAM DDR5 32 GB en Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Configuración media: RTX 4070 Ti Super 16 GB',
        content:
          '**La configuración media es la elección del editor — ejecuta modelos 14B al instante, maneja trabajo ligero con 22B-33B y es el nivel que armas para conservar.** Está construida alrededor de la RTX 4070 Ti Super 16 GB, suficientemente rápida para que la latencia de respuesta deje de ser perceptible en modelos de clase 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB de VRAM, 285 W. La misma capacidad de modelo que el nivel económico pero mucho más rápida — los modelos 7B-14B responden al instante y el trabajo ligero con 22B-33B es usable.',
          '**CPU — AMD Ryzen 9 7900X:** 12 núcleos. Más margen que la CPU económica para preparación de datos y ejecución de herramientas junto a la inferencia.',
          '**Placa base — chipset B650 o X670:** suministro de energía sólido para la CPU de 12 núcleos y una GPU de 285 W.',
          '**RAM — 64 GB DDR5:** espacio para el sistema operativo, ventanas de contexto más grandes y herramientas como un pipeline RAG corriendo junto al modelo. Es la línea más grande después de la GPU — si el presupuesto es ajustado, 32 GB siguen ejecutando todos los modelos de este nivel, porque el modelo vive en la VRAM.',
          '**Almacenamiento — SSD NVMe de 2 TB:** contiene una biblioteca de modelos considerable — un modelo 33B Q4 pesa aproximadamente 18-20 GB.',
          '**Fuente de alimentación — 850 W 80+ Gold:** margen cómodo para la GPU de 285 W y la CPU de 12 núcleos bajo carga sostenida.',
          '**Gabinete y refrigeración — torre media con AIO de 240-280 mm o enfriador de aire de alta gama:** el nivel medio genera calor moderado; un enfriador de calidad mantiene la CPU estable durante largas sesiones de inferencia.',
          '**Por qué armar este nivel:** ejecutas modelos 14B constantemente y los quieres al instante, o haces trabajo ligero con 22B-33B y quieres margen. **Por qué saltarlo:** si 7B-13B es suficiente, la configuración económica cuesta menos; si necesitas 70B, ninguna GPU de 16 GB lo cabe — pasa a la entusiasta.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuración media cabe los mismos modelos que la configuración económica — estás pagando por velocidad, no por capacidad. Arma este nivel si los modelos 14B serán una carga de trabajo diaria y esperar en ellos te molestaría.',
          },
          {
            type: 'note',
            text: 'Una RTX 4090 24 GB usada ahora se lista muy por encima de este nivel (ventas de segunda mano $2.575–3.010 según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15), así que ya no funciona como atajo. Compara nuevo y usado para la RTX 4070 Ti Super antes de comprar; su precio no se rastrea aquí.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Ver precio de la RTX 4070 Ti Super en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'Ver precio del Ryzen 9 7900X en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Ver precio de la RAM DDR5 64 GB en Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Configuración entusiasta: RTX 5090 32 GB',
        content:
          '**De las tres configuraciones aquí, solo la entusiasta puede ejecutar un modelo 70B en una sola GPU, y solo con cuantización agresiva o descarga parcial a la RAM del sistema — su RTX 5090 32 GB es la pieza principal.** Arma este nivel por capacidad de VRAM, no por velocidad bruta; la velocidad es un efecto secundario. El aumento de 2026 golpeó este nivel con más fuerza — la RTX 5090 se lista nueva en unos $4.500–4.700 frente a $1.999 de PVP ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15) — por lo que las líneas de GPU y RAM dominan el costo.',
        items: [
          '**GPU — RTX 5090 32 GB (nueva unos $4.500–4.700 frente a $1.999 de PVP; vendida de segunda mano $5.900–6.350; [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15; datos de anuncios, no ofertas):** 32 GB de VRAM GDDR7, 575 W. La GPU individual con más VRAM de esta guía; sin una configuración de GPU dual, ejecuta un modelo 70B solo con cuantización agresiva o descarga parcial a la RAM del sistema. Ejecuta modelos 33B con comodidad y margen.',
          '**CPU — AMD Ryzen 9 7950X:** 16 núcleos. Suficiente para ejecutar preparación de datos, experimentos de fine-tuning y herramientas junto a inferencia pesada.',
          '**Placa base — chipset X670E:** suministro de energía robusto y PCIe 5.0, dimensionado para una GPU de 575 W y la CPU de 16 núcleos.',
          '**RAM — 128 GB DDR5:** espacio para ventanas de contexto grandes, múltiples modelos cargados a la vez y herramientas — y el margen para descargar un modelo parcialmente a la RAM si es necesario. Pocos kits de 128 GB se listan de forma fiable; un kit de 64 GB es la alternativa para ahorrar.',
          '**Almacenamiento — SSD NVMe de 4 TB:** un modelo 70B Q4 pesa aproximadamente 40 GB; una unidad de 4 TB contiene una gran biblioteca de modelos grandes. Las unidades de 4 TB fueron las que más subieron de todos los tamaños de SSD en 2026.',
          '**Fuente de alimentación — 1000 W 80+ Platinum:** necesaria porque la RTX 5090 sola consume 575 W — una unidad de 750 W se vería superada bajo carga. No subestimes esta parte.',
          '**Gabinete y refrigeración — gabinete de tamaño completo con AIO de 360 mm:** la GPU de 575 W y la CPU de 16 núcleos generan calor real; un enfriador líquido de 360 mm mantiene la CPU estable durante inferencia 70B sostenida.',
          '**Por qué armar este nivel:** necesitas modelos 33B o 70B, ejecutas inferencia por lotes intensa o quieres una máquina que no necesite reemplazarse por años. **Por qué saltarlo:** para modelos 7B-14B es exagerado — la configuración media ofrece respuestas instantáneas en esos tamaños por menos de la mitad del costo.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La RTX 5090 consume 575 W por sí sola. Combínala con la fuente de 1000 W de esta lista de componentes — una unidad más pequeña colapsará bajo carga. Confirma que el circuito de tu pared puede suministrar el consumo total antes de armar. Esto no es un consejo de seguridad eléctrica; sigue las indicaciones de NVIDIA y del fabricante de la fuente.',
          },
          {
            type: 'note',
            text: 'Un modelo 70B en Q4 necesita aproximadamente 39-42 GB de VRAM, así que incluso la RTX 5090 32 GB ejecuta 70B en Q4 solo con cuantización agresiva o descarga parcial a la RAM del sistema. Los 128 GB de RAM de esta configuración le dan a esa descarga el espacio que necesita.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'Ver precio de la RTX 5090 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'Ver precio del Ryzen 9 7950X en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: 'Ver precio de la fuente 1000 W en Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Cómo el aumento de precios de 2026 cambia los cálculos del armado',
        content:
          '**La escasez de chips de memoria de 2026 empujó los precios de GPU y RAM DDR5 muy por encima de lo normal, y dado que la GPU y la RAM son las dos líneas más grandes en cada configuración, dominan el costo.** Planifica la configuración alrededor de los precios de oferta actuales, no de los precios de lanzamiento.',
        items: [
          '**La GPU y la RAM dominan el total.** En cada nivel la GPU es la línea más grande y la RAM DDR5 ahora es la segunda — el aumento cambia el total de la configuración más a través de esas dos partes que de cualquier otra.',
          '**La causa es la memoria, no las GPU.** Una escasez de suministro de GDDR, HBM y DRAM elevó el costo de cada tarjeta con memoria rápida y de la propia RAM del sistema; cuanta más VRAM, más fuerte fue el golpe. La RTX 5090 se lista nueva en unos $4.500–4.700 frente a $1.999 de PVP (4.500 / 1.999 = 2,25×) según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fuente actualizada el 2026-10-15) — más del doble.',
          '**Los precios de las GPU de gama baja no se rastrean aquí.** La RTX 4060 Ti 16 GB y la RTX 4070 Ti Super de las configuraciones económica y media no están cubiertas por el rastreador; revisa los listados en vivo.',
          '**Lo usado ya no es un descuento fiable.** El [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fuente actualizada el 2026-10-15) muestra RTX 5090 vendidas de segunda mano a $5.900–6.350 frente a unos $4.500–4.700 nuevas, y RTX 4090 vendidas de segunda mano a $2.575–3.010 (mediana $2.860); son datos de anuncios, no ofertas. Compara listados nuevos y usados de cada tarjeta; una tarjeta usada con funcionamiento verificado solo vale la pena cuando es claramente más barata.',
          '**La RAM y los SSD se movieron mucho; CPU, placa base y fuente se movieron poco.** Los precios de la DDR5 subieron cerca de un 500 % en 12 meses hasta agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18; un kit DDR5-6400 de 128 GB se listó a $3.399). Los precios de CPU, placa base, fuente y SSD no se rastrean en esta página; comprueba también esos.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La escasez de memoria de 2026 empujó los precios de GPU y RAM DDR5 muy por encima de lo normal, de modo que la GPU y la RAM son las dos líneas de costo más grandes de una configuración de IA local.',
          },
          {
            type: 'plain-terms',
            text: 'La GPU es la parte más cara de la máquina, y en 2026 la RAM también se encareció. Hasta que la escasez de memoria se alivie, trata los precios de lanzamiento como historia, compara nuevo y usado antes de comprar y no compres más VRAM ni RAM de la que necesita tu modelo.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Diagrama de decisión: elige tu configuración en cuatro preguntas',
        content:
          '**Cuatro preguntas, en orden, llevan a la mayoría de los armadores a un nivel.**',
        items: [
          '**1. ¿Cuál es el modelo más grande que quieres ejecutar?** 7B-13B: configuración económica. 14B-33B: configuración media. 70B: configuración entusiasta.',
          '**2. ¿Cuál es tu techo de presupuesto estricto?** Configuración económica para el costo más bajo, media para el intermedio, entusiasta para el más alto — solo la RTX 5090 se lista nueva en unos $4.500–4.700 ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15).',
          '**3. ¿GPU nueva o usada?** Compara ambas — según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fuente actualizada el 2026-10-15), las RTX 5090 y RTX 4090 vendidas de segunda mano se sitúan al mismo precio o por encima de las nuevas, así que una usada solo es la opción correcta cuando es claramente más barata.',
          '**4. ¿Tu plan de energía y espacio se sostiene?** Confirma que la fuente de alimentación coincide con el nivel (650 W / 850 W / 1000 W) y que el gabinete cabe la GPU y el enfriador antes de pedir las piezas.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige una configuración de PC para IA local respondiendo primero el tamaño de modelo más grande, luego el techo de presupuesto, tercero GPU nueva versus usada y por último la planificación de energía y espacio.',
          },
          {
            type: 'plain-terms',
            text: 'Comienza con el modelo más grande que realmente quieres ejecutar y deja que eso defina tu nivel. Luego verifica tu presupuesto, decide si compras la GPU usada y confirma que la fuente de alimentación y el gabinete encajan con las piezas. Hacerlo en ese orden evita una configuración que no puede ejecutar tu modelo.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Dónde comprar los componentes',
        content:
          '**Los grandes minoristas tienen cada pieza de estas configuraciones; compara listados nuevos y usados específicamente para la GPU.** Los enlaces a continuación son enlaces simples de búsqueda de productos; no llevan etiquetas de afiliado y no generan comisión.',
        items: [
          '**Amazon y Newegg:** el stock más amplio de CPUs, RAM, SSDs, fuentes de alimentación y gabinetes. El stock de GPU y DDR5 nuevas es más escaso y tiene el precio del aumento de 2026.',
          '**Mercado de GPU usadas:** vale la pena revisarlo, pero ya no es un ahorro garantizado — según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fuente actualizada el 2026-10-15), las RTX 5090 y RTX 4090 vendidas de segunda mano se sitúan al mismo precio o por encima de las nuevas. Compra usado solo cuando sea claramente más barato y con funcionamiento verificado.',
          '**MercadoLibre y tiendas locales de tecnología:** buenas fuentes en Latinoamérica para CPUs, placas base y fuentes de alimentación; también útiles para bundles de CPU más placa base.',
          '**Compra la GPU primero.** Es la línea más grande y más volátil — asegura la GPU a un precio que aceptes, luego compra las piezas de soporte alrededor de ella.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Debido al aumento de precios de 2026, los totales no se rastrean en esta guía. Siempre abre el listado actual del minorista para la GPU y la RAM antes de armar — juntos dominan el costo de la configuración.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'Explorar GPU en Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'Explorar CPU Ryzen en Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'Explorar RAM DDR5 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'Explorar SSD NVMe en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'Explorar fuentes de alimentación en Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores frecuentes al armar una PC para IA local',
        items: [
          '**Elegir la CPU antes que la GPU.** La GPU decide qué modelos ejecuta la máquina; la CPU hace poco durante la inferencia. Elige primero la GPU y luego dimensiona la CPU para soportarla.',
          '**Comprar RAM del sistema en lugar de VRAM.** La RAM permite que un modelo desborde la VRAM, pero un modelo ejecutándose desde la RAM es demasiado lento para uso interactivo. Compra suficiente VRAM para el modelo; compra RAM solo para el sistema operativo y las herramientas.',
          '**Subestimar la fuente de alimentación.** La RTX 5090 sola consume 575 W. Una fuente de alimentación que colapsa bajo carga es peor que una GPU más lenta que corre establemente — ajusta la fuente al nivel.',
          '**Anclarse en los precios de lanzamiento.** El aumento de 2026 significa que los precios de lista de las GPU y los precios de la RAM del año pasado ya no reflejan la realidad. Presupuesta la GPU y la RAM contra los precios actuales del minorista y compara el mercado de segunda mano en lugar de asumir que es más barato.',
          '**Comprar la RTX 4060 Ti de 8 GB para la configuración económica.** Comparte nombre con la versión de 16 GB pero no puede alojar un modelo 14B. Confirma la variante de 16 GB en el listado.',
          '**Sobredimensionar para modelos 7B.** Si los modelos 7B cubren tu caso de uso, la configuración entusiasta desperdicia miles de dólares y cientos de vatios. Ajusta el nivel al modelo, no al presupuesto que casualmente tienes.',
          '**Saltarse la planificación del gabinete y la refrigeración.** Una GPU de 575 W más una CPU de 16 núcleos genera calor real. Confirma que el gabinete cabe la GPU y el enfriador y tiene flujo de aire antes de pedir las piezas.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Mejor guía de compra de GPU para LLM locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: orientación de compra de GPU y el contexto del aumento de 2026 detrás de los totales de configuración aquí.',
          '[Armado de workstation para LLM local](/es/local-llms/local-llm-workstation-build) — PromptQuorum: lista de componentes, refrigeración y guía de fuente de alimentación para la workstation 70B de GPU dual detrás del nivel entusiasta.',
          '[Especificaciones de NVIDIA GeForce RTX serie 40 y 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Cifras oficiales de capacidad de VRAM y potencia (TGP) para la RTX 4060 Ti, 4070 Ti Super y 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Precios de componentes en vivo para CPU AMD Ryzen, RAM DDR5, SSD NVMe y fuentes de alimentación.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: "¿Es excesiva una fuente de 1000 W para una configuración con una sola GPU?",
            a: "No para una RTX 5090, cuya potencia nominal es de 575 W y puede tener picos breves por encima; por eso la referencia de NVIDIA es una fuente de 1000 W. Para las configuraciones económica y media de esta guía sí lo sería: 650 W y 850 W (80+ Gold) cubren la RTX 4060 Ti 16 GB y la RTX 4070 Ti Super 16 GB con margen. Es mejor una fuente ATX 3.1 con conector 12V-2x6 nativo que simplemente más vatios.",
          },
          {
            q: '¿Cuánto cuesta armar una PC para IA local en 2026?',
            a: 'Los totales no se rastrean aquí, porque los precios de GPU y RAM de 2026 cambian rápido y solo los precios de GPU tienen una fuente fechada. La RTX 5090 de la configuración entusiasta se lista nueva en unos $4.500–4.700 ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15), y los precios de la DDR5 subieron cerca de un 500 % en 12 meses hasta agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Suma los precios en vivo de la lista de componentes del nivel que elijas. Los precios en tu país pueden variar según impuestos locales.',
          },
          {
            q: '¿Qué GPU debo poner en una PC para IA local?',
            a: 'Elige la GPU según tu modelo objetivo más grande. Una RTX 4060 Ti 16 GB es adecuada para una configuración económica con modelos 7B-13B, una RTX 4070 Ti Super 16 GB para una configuración media con modelos 14B-33B y una RTX 5090 32 GB para una configuración entusiasta con trabajo en 70B. La GPU decide qué modelos puede ejecutar la máquina, por lo que se elige primero y el resto de la lista de componentes se construye alrededor de ella.',
          },
          {
            q: '¿Cuánta RAM necesito para una PC con IA local?',
            a: 'Planifica 32 GB para una configuración económica, 64 GB para una media y 128 GB para una entusiasta. La RAM del sistema no es un sustituto de la VRAM — un modelo ejecutándose desde la RAM es demasiado lento para uso interactivo. La RAM es para el sistema operativo, el contexto y las herramientas; compra suficiente VRAM en la GPU para el modelo en sí.',
          },
          {
            q: '¿Qué fuente de alimentación necesita una PC con IA local?',
            a: 'Ajusta la fuente de alimentación al nivel: 650 W para la configuración económica, 850 W para la media y 1000 W para la entusiasta. El nivel entusiasta necesita 1000 W porque la RTX 5090 sola consume 575 W. Una fuente de alimentación subdimensionada causa inestabilidad bajo carga, así que no recortes en esta parte.',
          },
          {
            q: '¿Debo comprar los componentes de GPU nuevos o usados en 2026?',
            a: 'Compara nuevo y usado antes de decidir; no asumas que lo usado es más barato. El [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fuente actualizada el 2026-10-15) muestra RTX 5090 vendidas de segunda mano a $5.900–6.350 frente a unos $4.500–4.700 nuevas, y RTX 4090 vendidas de segunda mano a $2.575–3.010. Una tarjeta usada con funcionamiento verificado solo vale la pena cuando es claramente más barata. Las CPU, RAM, SSD y fuentes de alimentación es mejor comprarlas nuevas.',
          },
          {
            q: '¿Puede una configuración de GPU única ejecutar un modelo 70B?',
            a: 'Sí, la configuración entusiasta puede. Una RTX 5090 32 GB tiene más VRAM que cualquier otra GPU individual de esta guía, pero un modelo 70B en Q4 necesita aproximadamente 39-42 GB — por lo que ejecuta 70B solo con cuantización agresiva o descarga parcial a la RAM del sistema. Los 128 GB de RAM de la configuración entusiasta le dan a esa descarga el espacio que necesita.',
          },
          {
            q: '¿Vale la pena la configuración media respecto al costo extra sobre la económica?',
            a: 'Sí, si ejecutas modelos de clase 14B con regularidad. Las configuraciones económica y media caben modelos similares, pero la RTX 4070 Ti Super de la configuración media es mucho más rápida — los modelos 14B responden al instante en lugar de lentos, y el trabajo ligero con 22B-33B se vuelve usable. Si tu techo es firmemente modelos 7B-13B, la configuración económica cuesta menos y es la mejor relación calidad-precio.',
          },
          {
            q: '¿Necesito una CPU Threadripper para una PC con IA local?',
            a: 'No. Una CPU Ryzen de consumo es suficiente para las tres configuraciones de esta guía — un Ryzen 7 para el nivel económico, un Ryzen 9 para los niveles medio y entusiasta. Un Threadripper solo vale su costo para una máquina de GPU dual que ejecuta fine-tuning e inferencia al mismo tiempo, lo que está más allá de una configuración de GPU única.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Elige la GPU para tu configuración con la guía de compra completa](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — ocho GPU en cuatro niveles de presupuesto, con precios actuales y el cálculo del aumento.',
          '[Ve la configuración de workstation 70B de GPU dual para uso en producción](/es/local-llms/local-llm-workstation-build) — el nivel de GPU dual con 48 GB de VRAM para modelos de clase 70B, más allá de la configuración entusiasta de esta guía.',
          '[Compara armar una PC contra rentar GPU en la nube](/es/power-local-llm/cloud-gpu-rental-guide-2026) — cuándo rentar supera tener hardware propio para cómputo ocasional.',
          '[Calcula la VRAM que necesita cada tamaño de modelo antes de armar](/es/local-llms/how-much-vram-local-llm) — el método completo de VRAM por tamaño de modelo detrás de las elecciones de nivel aquí.',
          '[Considera una Mac como alternativa a una configuración de PC](/es/power-local-llm/best-mac-for-local-ai-2026) — cuándo el Apple Silicon con memoria unificada supera a una PC con GPU dedicada para IA local.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guía para armar una PC con IA local 2026: 3 niveles de presupuesto',
      description: 'Tres configuraciones completas de PC para IA local en 2026: económica 7B-13B, media 14B-33B y entusiasta 70B. Listas de componentes exactas, precios de GPU fechados y notas sobre la escasez de DDR5 de 2026.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-ai-workstation-build-guide',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-11-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  pt: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-pt.webp',
    title: 'Guia para montar um PC com IA local 2026: 3 níveis de orçamento',
    seoTitle: 'PC para IA local 2026: do básico à estação de trabalho 70B',
    intro:
      'A maioria dos guias para montar um PC com IA local começa pela CPU, mas é a GPU e sua VRAM que decide quais modelos a máquina pode executar — cada outra parte é escolhida para suportar essa GPU. Este guia oferece três listas de componentes completas para um PC dedicado a LLMs locais: uma configuração econômica para modelos 7B–13B, uma configuração intermediária para modelos 14B–33B e uma configuração entusiasta para trabalhar com modelos 70B. Cada nível inclui os componentes exatos, o desempenho esperado. Uma ressalva sobre os preços: a escassez de chips de memória de 2026 empurrou os preços de GPUs e de RAM DDR5 muito acima dos níveis do ano passado, então os totais e os preços das demais peças não são rastreados aqui; só os preços de GPU, de uma fonte datada ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15) — confira os anúncios ao vivo antes de comprar. Os preços no Brasil podem variar bastante devido a impostos de importação.',
    metaDescription:
      'Três PCs para IA local em 2026: econômica 7B–13B, intermediária 14B–33B e entusiasta 70B. Listas de componentes exatas, preços de GPU datados e notas sobre a escassez de DDR5 de 2026.',
    twitterDescription:
      'Guia para montar um PC com IA local: três níveis de orçamento com listas de componentes completas para modelos de 7B a 70B. Os preços de GPU e RAM dispararam em 2026 — aqui há preços de GPU datados.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      'Pessoas que montam um PC especificamente para executar LLMs locais e tomam sua decisão com base no nível de orçamento e no tamanho de modelo alvo. Pressupõe familiaridade com quantização e VRAM como restrição, e com os termos básicos de montagem de PC, mas não com os SKUs de componentes atuais específicos.',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      'montar pc ia local 2026',
      'guia montagem workstation llm local',
      'melhor pc para executar llm',
      'lista de componentes workstation ia',
      'como montar um pc para ia local',
    ],
    leadAnswerBlock:
      '**O melhor PC para IA local é o nível cuja VRAM de GPU se encaixa no seu modelo alvo. Uma configuração econômica executa modelos 7B–13B, uma intermediária executa modelos 14B–33B e uma entusiasta executa modelos 70B — os totais não são rastreados aqui porque os preços de GPU e RAM de 2026 mudam rápido; os preços de GPU trazem fonte e data. Os preços no Brasil podem variar bastante devido a impostos de importação.**',
    quickAnswerTop: {
      pt: {
        question: 'Como monto um PC para executar LLMs locais em 2026?',
        answer:
          'Escolha seu nível com base no maior modelo que você quer executar e depois monte o PC ao redor da GPU. Uma configuração econômica combina uma RTX 4060 Ti 16 GB com uma CPU Ryzen 7 para modelos 7B–13B. Uma configuração intermediária usa uma RTX 4070 Ti Super 16 GB para modelos 14B–33B. Uma configuração entusiasta usa uma RTX 5090 32 GB para trabalho com 70B. A escassez de memória de 2026 elevou os preços de GPU e RAM DDR5 muito acima do normal, então os totais não são rastreados aqui e só os preços de GPU trazem fonte e data. Os preços no Brasil podem variar bastante devido a impostos de importação.',
        bullets: [
          'Configuração econômica: RTX 4060 Ti 16 GB, executa modelos 7B–13B',
          'Configuração intermediária: RTX 4070 Ti Super 16 GB, executa modelos 14B–33B',
          'Configuração entusiasta: RTX 5090 32 GB, executa modelos 70B apenas com quantização agressiva ou descarga parcial',
          'Os preços de GPU, RAM e SSD dispararam em 2026 — compare novo e usado, porque o usado já não custa menos de forma confiável',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Escolha do editor', anchor: '#editors-choice' },
      { label: 'Comparação de níveis', anchor: '#comparison-table' },
      { label: 'Qual configuração escolher?', anchor: '#which-build' },
      { label: 'Configuração econômica', anchor: '#budget-build' },
      { label: 'Configuração intermediária', anchor: '#mid-build' },
      { label: 'Configuração entusiasta', anchor: '#enthusiast-build' },
      { label: 'Como o aumento de preços de 2026 muda a montagem', anchor: '#price-surge' },
      { label: 'Fluxograma de decisão', anchor: '#decision-flowchart' },
      { label: 'Onde comprar os componentes', anchor: '#where-to-buy' },
      { label: 'Erros frequentes', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A GPU define o nível; o restante da configuração a suporta.** Um PC para IA local é escolhido primeiro pela GPU porque a VRAM decide quais modelos rodam. Escolha o nível cuja VRAM de GPU se encaixe no seu modelo alvo e depois dimensione a CPU, a RAM e a fonte de alimentação ao redor disso.',
          '**Os preços de 2026 encareceram as configurações.** Uma escassez de chips de memória empurrou GPUs e RAM DDR5 muito acima dos preços do ano passado. Os totais não são rastreados aqui — e a RAM agora é uma linha de custo importante, não um detalhe (os preços da DDR5 subiram cerca de 500% em 12 meses até agosto de 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Configuração econômica:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD de 1 TB, fonte de 650 W — executa modelos 7B–13B em velocidade utilizável. A de menor custo entre as três configurações deste guia.',
          '**Configuração intermediária:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD de 2 TB, fonte de 850 W — executa modelos 14B–33B e faz os modelos 7B–14B responderem instantaneamente.',
          '**Configuração entusiasta:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD de 4 TB, fonte de 1000 W — das três configurações aqui, a única que consegue executar um modelo 70B em uma só GPU, e apenas com quantização agressiva ou descarga parcial para a RAM do sistema. Só a RTX 5090 é anunciada nova por cerca de $4.500–4.700 ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15).',
          '**A RAM não é um substituto para a VRAM.** A RAM do sistema permite que um modelo ultrapasse a VRAM, mas um modelo rodando a partir da RAM é lento demais para uso interativo. Compre VRAM suficiente para o modelo; compre RAM para o sistema operacional e as ferramentas.',
          '**A fonte de alimentação escala com a GPU.** Uma configuração econômica precisa de 650 W, a intermediária 850 W e a entusiasta 1000 W porque a RTX 5090 sozinha consome 575 W. Inclua a fonte no orçamento junto com a placa.',
          '**O usado não é mais um desconto garantido.** Segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fonte atualizada em 2026-10-15), as RTX 5090 vendidas como usadas ($5.900–6.350) superam o preço novo (cerca de $4.500–4.700) e as RTX 4090 usadas ($2.575–3.010) se sobrepõem à faixa de anúncios novos ($2.000–3.000), então compare os dois antes de comprar. Uma placa usada com funcionamento verificado ainda vale a pena quando é claramente mais barata — mas nunca presuma que seja.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Configuração econômica:** GPU RTX 4060 Ti 16 GB — executa modelos 7B e a maioria dos 13B.',
          '**Configuração intermediária:** GPU RTX 4070 Ti Super 16 GB — executa 14B confortavelmente, trabalho leve com 22B–33B.',
          '**Configuração entusiasta:** GPU RTX 5090 32 GB — executa 33B confortavelmente e 70B apenas com quantização agressiva ou descarga parcial.',
          '**Regra geral de VRAM em Q4_K_M:** aproximadamente 0,6 GB por bilhão de parâmetros, mais 2–4 GB para contexto e ferramentas.',
          '**Guia de RAM do sistema:** 32 GB para a configuração econômica, 64 GB para a intermediária, 128 GB para a entusiasta.',
          '**Fonte de alimentação por nível:** 650 W econômica, 850 W intermediária, 1000 W entusiasta — a RTX 5090 sozinha consome 575 W.',
          '**Realidade de preços em 2026:** GPUs, RAM DDR5 e SSDs dispararam com a escassez de memória — confirme preços atuais e compare novo com usado.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Escolha do editor: a configuração intermediária',
        highlight: true,
        content:
          '**Para a maioria de quem monta um PC para IA local, a configuração intermediária é o nível que equilibra capacidade, custo e margem.** Construída ao redor de uma RTX 4070 Ti Super 16 GB, executa cada modelo 14B com espaço de contexto, lida com trabalho leve com 22B–33B e faz os modelos 7B–14B responderem instantaneamente Ela deve continuar utilizável para a maioria das cargas de trabalho da classe 14B por bastante tempo, mas os tamanhos dos modelos e os preços mudam. Desça para a configuração econômica apenas se o seu teto for firmemente modelos 7B–13B; suba para a entusiasta apenas se precisar especificamente de trabalho com 70B.',
        callouts: [
          {
            type: 'note',
            text: 'Esta escolha do editor reflete apenas a relação preço-capacidade. O PromptQuorum não está inscrito em nenhum programa de afiliados e os links abaixo não carregam tags de afiliado — são links de referência simples que não geram comissão.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Ver preço da RTX 4070 Ti Super na Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Ver preço da RTX 4070 Ti Super na Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Como os três níveis de configuração se comparam em 2026',
        content:
          'As cifras de VRAM e potência da GPU são especificações do fabricante. As velocidades de inferência são valores aproximados e típicos para a classe de GPU de cada nível (não medidas pelo PromptQuorum); a velocidade real depende da quantização, do runtime e do tamanho do contexto. Os totais de configuração não são rastreados: só o preço da RTX 5090 traz fonte e data (veja a configuração entusiasta), e a RAM e as demais peças não são rastreadas nesta página. Compare anúncios novos e usados de GPU: o usado já não custa sempre menos. Os preços no Brasil podem variar bastante devido a impostos de importação.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para um PC com IA local, a VRAM da GPU decide quais modelos a máquina pode executar e o restante da lista de componentes é dimensionado para suportar essa GPU — escolha o nível primeiro pelo tamanho do modelo.',
          },
          {
            type: 'plain-terms',
            text: 'Pense na configuração como uma equipe construída ao redor de um jogador estrela: a GPU. A CPU, a RAM e a fonte de alimentação são o elenco de apoio — úteis, mas existem para manter a GPU funcionando. Escolha primeiro a GPU que o seu modelo precisa e depois monte o restante ao redor dela.',
          },
        ],
        columns: ['Nível', 'GPU', 'VRAM', 'Executa', 'Fonte', 'Total (2026)'],
        rows: [
          {
            'Nível': 'Econômica',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Executa': 'modelos 7B–13B',
            'Fonte': '650 W',
            'Total (2026)': 'não rastreado',
          },
          {
            'Nível': 'Intermediária',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Executa': '14B confortavelmente, 22B–33B leve',
            'Fonte': '850 W',
            'Total (2026)': 'não rastreado',
          },
          {
            'Nível': 'Entusiasta',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Executa': '33B confortavelmente, 70B apenas com quantização agressiva ou descarga parcial',
            'Fonte': '1000 W',
            'Total (2026)': 'não rastreado',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: 'Qual configuração você deve escolher?',
        content:
          '**O maior modelo que você quer executar decide o nível; seu orçamento o confirma.** Encontre a linha que corresponde à sua situação.',
        columns: ['Sua situação', 'Monte esta'],
        rows: [
          { 'Sua situação': 'Executo modelos 7B–13B e quero a de menor custo das três configurações deste guia', 'Monte esta': 'Configuração econômica' },
          { 'Sua situação': 'Quero um primeiro PC para IA local e não sei até onde vou', 'Monte esta': 'Configuração econômica, ou a intermediária para ter margem' },
          { 'Sua situação': 'Executo modelos 14B constantemente e os quero instantâneos', 'Monte esta': 'Configuração intermediária' },
          { 'Sua situação': 'Faço trabalho leve com 22B–33B e quero uma máquina duradoura', 'Monte esta': 'Configuração intermediária' },
          { 'Sua situação': 'Executo modelos 33B intensivamente ou quero muita margem futura', 'Monte esta': 'Configuração entusiasta' },
          { 'Sua situação': 'GPU única para modelos 70B (só com quantização agressiva ou descarga parcial)', 'Monte esta': 'Configuração entusiasta' },
          { 'Sua situação': 'Quero manter o total baixo apesar do aumento de 2026', 'Monte esta': 'Qualquer nível — compare anúncios de GPU novos e usados' },
          { 'Sua situação': 'Não tenho certeza e quero a configuração mais segura para conservar por anos', 'Monte esta': 'Configuração intermediária — a escolha do editor' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuração econômica: RTX 4060 Ti 16 GB',
        content:
          '**A configuração econômica é a de menor custo das três configurações deste guia e executa cada modelo 7B e a maioria dos modelos 13B — capacidade suficiente para a maioria dos usuários pela primeira vez.** É construída ao redor da RTX 4060 Ti 16 GB, a GPU de 16 GB de menor preço deste guia, o que mantém o total tão baixo quanto a escassez de 2026 permite.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB de VRAM, 165 W. A velocidade típica desta classe de GPU é de aproximadamente 20–25 tok/s em modelos 7B (não medida pelo PromptQuorum; varia com a quantização e o contexto), e modelos 14B cabem com margem de contexto. A capacidade de 16 GB é a razão para escolhê-la sobre a versão de 8 GB.',
          '**CPU — AMD Ryzen 7 7700:** 8 núcleos, consumo de energia moderado. A CPU faz pouco trabalho durante a inferência de GPU, então um chip de gama intermediária é correto aqui.',
          '**Placa-mãe — chipset B650:** suporta o Ryzen 7 e uma GPU de tamanho completo em PCIe.',
          '**RAM — 32 GB DDR5:** suficiente para o sistema operacional, as ferramentas e um modelo 7B–13B rodando na VRAM. A RAM não substitui a VRAM — 32 GB bastam aqui, mas a DDR5 agora é a segunda maior linha desta configuração.',
          '**Armazenamento — SSD NVMe de 1 TB:** contém o sistema operacional e vários modelos (um modelo 7B Q4 pesa aproximadamente 4–5 GB).',
          '**Fonte de alimentação — 650 W 80+ Gold:** margem confortável para uma GPU de 165 W e uma CPU de 8 núcleos.',
          '**Gabinete e resfriamento — torre média com cooler de ar tipo torre:** o nível econômico gera pouco calor; o resfriamento por ar é suficiente.',
          '**Por que montar este nível:** menor custo de entrada, baixo consumo de energia e capacidade suficiente para os modelos 7B–13B que cobrem chat geral, ajuda com código e resumo. **Por que pulá-lo:** se você já quer modelos de 14B ou maiores, comece na configuração intermediária.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Compre a RTX 4060 Ti especificamente na versão de 16 GB. A versão de 8 GB usa o mesmo die de GPU e roda em velocidade similar, mas 8 GB não consegue acomodar um modelo 14B — a memória extra é o único propósito desta escolha.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'Ver preço da RTX 4060 Ti 16GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'Ver preço do Ryzen 7 7700 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Ver preço da RAM DDR5 32 GB na Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Configuração intermediária: RTX 4070 Ti Super 16 GB',
        content:
          '**A configuração intermediária é a escolha do editor — executa modelos 14B instantaneamente, lida com trabalho leve com 22B–33B e é o nível que você monta para conservar.** É construída ao redor da RTX 4070 Ti Super 16 GB, rápida o suficiente para que a latência de resposta deixe de ser perceptível em modelos de classe 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB de VRAM, 285 W. A mesma capacidade de modelo que o nível econômico, mas muito mais rápida — os modelos 7B–14B respondem instantaneamente e o trabalho leve com 22B–33B é utilizável.',
          '**CPU — AMD Ryzen 9 7900X:** 12 núcleos. Mais margem que a CPU econômica para preparação de dados e execução de ferramentas junto à inferência.',
          '**Placa-mãe — chipset B650 ou X670:** fornecimento de energia sólido para a CPU de 12 núcleos e uma GPU de 285 W.',
          '**RAM — 64 GB DDR5:** espaço para o sistema operacional, janelas de contexto maiores e ferramentas como um pipeline RAG rodando junto ao modelo. É a maior linha depois da GPU — se o orçamento estiver apertado, 32 GB ainda executam todos os modelos deste nível, porque o modelo vive na VRAM.',
          '**Armazenamento — SSD NVMe de 2 TB:** contém uma biblioteca de modelos considerável — um modelo 33B Q4 pesa aproximadamente 18–20 GB.',
          '**Fonte de alimentação — 850 W 80+ Gold:** margem confortável para a GPU de 285 W e a CPU de 12 núcleos sob carga sustentada.',
          '**Gabinete e resfriamento — torre média com AIO de 240–280 mm ou cooler de ar de alta qualidade:** o nível intermediário gera calor moderado; um cooler de qualidade mantém a CPU estável durante longas sessões de inferência.',
          '**Por que montar este nível:** você executa modelos 14B constantemente e os quer instantâneos, ou faz trabalho leve com 22B–33B e quer margem. **Por que pulá-lo:** se 7B–13B é suficiente, a configuração econômica custa menos; se você precisar de 70B, nenhuma GPU de 16 GB o cabe — passe para a entusiasta.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A configuração intermediária cabe nos mesmos modelos que a configuração econômica — você está pagando por velocidade, não por capacidade. Monte este nível se os modelos 14B serão uma carga de trabalho diária e esperar neles te incomodaria.',
          },
          {
            type: 'note',
            text: 'Uma RTX 4090 24 GB usada hoje é anunciada muito acima deste nível (vendas de usados $2.575–3.010 segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15), então deixou de ser um atalho. Compare novo e usado para a RTX 4070 Ti Super antes de comprar; o preço dela não é rastreado aqui.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Ver preço da RTX 4070 Ti Super na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'Ver preço do Ryzen 9 7900X na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Ver preço da RAM DDR5 64 GB na Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Configuração entusiasta: RTX 5090 32 GB',
        content:
          '**Das três configurações aqui, apenas a entusiasta consegue executar um modelo 70B em uma só GPU, e apenas com quantização agressiva ou descarga parcial para a RAM do sistema — sua RTX 5090 32 GB é a peça central.** Monte este nível pela capacidade de VRAM, não pela velocidade bruta; a velocidade é um efeito colateral. O aumento de 2026 atingiu este nível com mais força — a RTX 5090 é anunciada nova por cerca de $4.500–4.700 contra $1.999 de preço sugerido ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15) — então as linhas de GPU e RAM dominam o custo.',
        items: [
          '**GPU — RTX 5090 32 GB (nova cerca de $4.500–4.700 contra $1.999 de preço sugerido; vendida como usada $5.900–6.350; [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15; dados de anúncios, não ofertas):** 32 GB de VRAM GDDR7, 575 W. A GPU individual com mais VRAM deste guia; sem uma configuração de GPU dupla, executa um modelo 70B apenas com quantização agressiva ou descarga parcial para a RAM do sistema.',
          '**CPU — AMD Ryzen 9 7950X:** 16 núcleos. Suficiente para executar preparação de dados, experimentos de fine-tuning e ferramentas junto à inferência pesada.',
          '**Placa-mãe — chipset X670E:** fornecimento de energia robusto e PCIe 5.0, dimensionado para uma GPU de 575 W e a CPU de 16 núcleos.',
          '**RAM — 128 GB DDR5:** espaço para janelas de contexto grandes, múltiplos modelos carregados ao mesmo tempo e ferramentas — e a margem para descarregar um modelo parcialmente para a RAM se necessário. Poucos kits de 128 GB são anunciados de forma confiável; um kit de 64 GB é a alternativa para economizar.',
          '**Armazenamento — SSD NVMe de 4 TB:** um modelo 70B Q4 pesa aproximadamente 40 GB; uma unidade de 4 TB contém uma grande biblioteca de modelos grandes. Os SSDs de 4 TB foram os que mais subiram em 2026.',
          '**Fonte de alimentação — 1000 W 80+ Platinum:** necessária porque a RTX 5090 sozinha consome 575 W — uma unidade de 750 W seria superada sob carga. Não subestime esta parte.',
          '**Gabinete e resfriamento — gabinete de tamanho completo com AIO de 360 mm:** a GPU de 575 W e a CPU de 16 núcleos geram calor real; um resfriador líquido de 360 mm mantém a CPU estável durante inferência 70B sustentada.',
          '**Por que montar este nível:** você precisa de modelos 33B ou 70B, executa inferência em lote intensa ou quer uma máquina que não precise ser substituída por anos. **Por que pulá-lo:** para modelos 7B–14B é exagero — a configuração intermediária oferece respostas instantâneas nesses tamanhos por menos da metade do custo.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A RTX 5090 consome 575 W sozinha. Combine-a com a fonte de 1000 W desta lista de componentes — uma unidade menor vai colapsar sob carga. Confirme que o circuito da sua parede consegue fornecer o consumo total antes de montar. Isto não é aconselhamento de segurança elétrica; siga as orientações da NVIDIA e do fabricante da fonte.',
          },
          {
            type: 'note',
            text: 'Um modelo 70B em Q4 precisa de aproximadamente 39–42 GB de VRAM, então mesmo a RTX 5090 32 GB executa 70B em Q4 apenas com quantização agressiva ou descarga parcial para a RAM do sistema. Os 128 GB de RAM desta configuração dão a essa descarga o espaço que ela precisa.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'Ver preço da RTX 5090 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'Ver preço do Ryzen 9 7950X na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: 'Ver preço da fonte 1000 W na Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Como o aumento de preços de 2026 muda os cálculos da montagem',
        content:
          '**A escassez de chips de memória de 2026 empurrou os preços de GPU e RAM DDR5 muito acima do normal, e como a GPU e a RAM são as duas maiores linhas em cada configuração, elas dominam o custo.** Planeje a configuração ao redor dos preços atuais anunciados, não dos preços de lançamento.',
        items: [
          '**A GPU e a RAM dominam o total.** Em todos os níveis a GPU é a maior linha e a RAM DDR5 agora é a segunda — o aumento muda o total da configuração mais por essas duas partes do que por qualquer outra.',
          '**A causa é a memória, não as GPUs.** Uma escassez de fornecimento de GDDR, HBM e DRAM elevou o custo de cada placa com memória rápida e da própria RAM do sistema; quanto mais VRAM, mais forte foi o impacto. A RTX 5090 é anunciada nova por cerca de $4.500–4.700 contra $1.999 de preço sugerido (4.500 / 1.999 = 2,25×), segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fonte atualizada em 2026-10-15) — mais que o dobro. Os preços no Brasil podem variar bastante devido a impostos de importação.',
          '**Os preços das GPUs de gama baixa não são rastreados aqui.** A RTX 4060 Ti 16 GB e a RTX 4070 Ti Super das configurações econômica e intermediária não são cobertas pelo rastreador; confira os anúncios ao vivo.',
          '**O usado não é mais um desconto confiável.** O [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fonte atualizada em 2026-10-15) mostra RTX 5090 vendidas como usadas a $5.900–6.350 contra cerca de $4.500–4.700 novas, e RTX 4090 vendidas como usadas a $2.575–3.010 (mediana $2.860); são dados de anúncios, não ofertas. Compare anúncios novos e usados de cada placa; uma placa usada com funcionamento verificado só vale a pena quando é claramente mais barata.',
          '**RAM e SSDs subiram muito; CPU, placa-mãe e fonte subiram pouco.** Os preços da DDR5 subiram cerca de 500% em 12 meses até agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18; um kit DDR5-6400 de 128 GB foi listado a $3.399). Os preços de CPU, placa-mãe, fonte e SSD não são rastreados nesta página; confira-os também.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A escassez de memória de 2026 empurrou os preços de GPU e RAM DDR5 muito acima do normal, de modo que a GPU e a RAM são as duas maiores linhas de custo de uma configuração de IA local.',
          },
          {
            type: 'plain-terms',
            text: 'A GPU é a parte mais cara da máquina, e em 2026 a RAM também ficou cara. Até que a escassez de memória diminua, trate os preços de lançamento como história, compare novo e usado antes de comprar e não compre mais VRAM ou RAM do que o seu modelo precisa.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Fluxograma de decisão: escolha sua configuração em quatro perguntas',
        content:
          '**Quatro perguntas, em ordem, levam a maioria dos montadores a um nível.**',
        items: [
          '**1. Qual é o maior modelo que você quer executar?** 7B–13B: configuração econômica. 14B–33B: configuração intermediária. 70B: configuração entusiasta.',
          '**2. Qual é o seu teto de orçamento estrito?** Configuração econômica para o menor custo, intermediária para o meio, entusiasta para o mais alto — só a RTX 5090 é anunciada nova por cerca de $4.500–4.700 ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15).',
          '**3. GPU nova ou usada?** Compare as duas — segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fonte atualizada em 2026-10-15), as RTX 5090 e RTX 4090 vendidas como usadas ficam no mesmo preço ou acima das novas, então a usada só é a escolha certa quando é claramente mais barata.',
          '**4. Seu plano de energia e espaço se sustenta?** Confirme que a fonte de alimentação coincide com o nível (650 W / 850 W / 1000 W) e que o gabinete cabe a GPU e o cooler antes de pedir as peças.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha uma configuração de PC para IA local respondendo primeiro ao tamanho de modelo mais grande, depois ao teto de orçamento, terceiro GPU nova versus usada e por último ao planejamento de energia e espaço.',
          },
          {
            type: 'plain-terms',
            text: 'Comece com o maior modelo que você realmente quer executar e deixe isso definir seu nível. Depois verifique seu orçamento, decida se compra a GPU usada e confirme que a fonte de alimentação e o gabinete se encaixam com as peças. Fazer na ordem errada é como as pessoas montam uma configuração que não consegue executar seu modelo.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Onde comprar os componentes',
        content:
          '**Os grandes varejistas têm cada peça dessas configurações; compare anúncios novos e usados especificamente para a GPU.** Os links abaixo são links simples de pesquisa de produtos; não carregam tags de afiliado e não geram comissão.',
        items: [
          '**Amazon e Newegg:** o estoque mais amplo de CPUs, RAMs, SSDs, fontes de alimentação e gabinetes. O estoque de GPU e DDR5 novas é mais escasso e tem o preço do aumento de 2026.',
          '**Mercado de GPUs usadas:** vale conferir, mas já não é economia garantida — segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fonte atualizada em 2026-10-15), as RTX 5090 e RTX 4090 vendidas como usadas ficam no mesmo preço ou acima das novas. Compre usado só quando for claramente mais barato e com funcionamento verificado.',
          '**Mercado Livre e lojas locais de tecnologia:** boas fontes no Brasil para CPUs, placas-mãe e fontes de alimentação; também úteis para bundles de CPU + placa-mãe.',
          '**Compre a GPU primeiro.** É a linha mais grande e mais volátil — garanta a GPU a um preço que você aceite, depois compre as peças de suporte ao redor dela.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Devido ao aumento de preços de 2026, os totais não são rastreados neste guia. Sempre abra o anúncio atual do varejista para a GPU e a RAM antes de montar — juntos dominam o custo da configuração.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'Explorar GPUs na Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'Explorar CPUs Ryzen na Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'Explorar RAM DDR5 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'Explorar SSD NVMe na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'Explorar fontes de alimentação na Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros frequentes ao montar um PC para IA local',
        items: [
          '**Escolher a CPU antes da GPU.** A GPU decide quais modelos a máquina executa; a CPU faz pouco durante a inferência. Escolha primeiro a GPU e depois dimensione a CPU para suportá-la.',
          '**Comprar RAM do sistema em vez de VRAM.** A RAM permite que um modelo ultrapasse a VRAM, mas um modelo rodando a partir da RAM é lento demais para uso interativo. Compre VRAM suficiente para o modelo; compre RAM apenas para o sistema operacional e as ferramentas.',
          '**Subestimar a fonte de alimentação.** A RTX 5090 sozinha consome 575 W. Uma fonte de alimentação que colapsa sob carga é pior do que uma GPU mais lenta que roda de forma estável — ajuste a fonte ao nível.',
          '**Ancorar nos preços de lançamento.** O aumento de 2026 significa que o MSRP das GPUs e os preços de RAM do ano passado não refletem mais a realidade. Faça o orçamento da GPU e da RAM com os preços atuais do varejista e compare o mercado de segunda mão em vez de presumir que é mais barato.',
          '**Comprar a RTX 4060 Ti de 8 GB para a configuração econômica.** Compartilha o nome com a versão de 16 GB, mas não consegue acomodar um modelo 14B. Confirme a variante de 16 GB no anúncio.',
          '**Superdimensionar para modelos 7B.** Se os modelos 7B cobrem seu caso de uso, a configuração entusiasta desperdiça milhares de dólares e centenas de watts. Ajuste o nível ao modelo, não ao orçamento que você acidentalmente tem.',
          '**Pular o planejamento do gabinete e do resfriamento.** Uma GPU de 575 W mais uma CPU de 16 núcleos gera calor real. Confirme que o gabinete cabe a GPU e o cooler e tem fluxo de ar antes de pedir as peças.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Melhor guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: orientação de compra de GPU e o contexto do aumento de 2026 por trás dos totais de configuração aqui.',
          '[Montagem de workstation para LLM local](/pt/local-llms/local-llm-workstation-build) — PromptQuorum: lista de componentes, resfriamento e guia de fonte de alimentação para a workstation 70B de GPU dupla por trás do nível entusiasta.',
          '[Especificações da NVIDIA GeForce RTX série 40 e 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Cifras oficiais de capacidade de VRAM e potência (TGP) para a RTX 4060 Ti, 4070 Ti Super e 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Preços de componentes ao vivo para CPU AMD Ryzen, RAM DDR5, SSD NVMe e fontes de alimentação.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: "Uma fonte de 1000 W é exagero para uma montagem com uma única GPU?",
            a: "Não para uma RTX 5090, que tem potência nominal de 575 W e pode ter picos breves acima disso; por isso a referência da NVIDIA é uma fonte de 1000 W. Para as montagens básica e intermediária deste guia seria exagero: 650 W e 850 W (80+ Gold) atendem a RTX 4060 Ti 16 GB e a RTX 4070 Ti Super 16 GB com folga. Prefira uma fonte ATX 3.1 com conector 12V-2x6 nativo a simplesmente comprar mais watts.",
          },
          {
            q: 'Quanto custa montar um PC para IA local em 2026?',
            a: 'Os totais não são rastreados aqui, porque os preços de GPU e RAM de 2026 mudam rápido e só os preços de GPU têm fonte datada. A RTX 5090 da configuração entusiasta é anunciada nova por cerca de $4.500–4.700 ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15), e os preços da DDR5 subiram cerca de 500% em 12 meses até agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Some os preços ao vivo da lista de componentes do nível escolhido. Os preços no Brasil podem variar bastante devido a impostos de importação.',
          },
          {
            q: 'Qual GPU devo colocar em um PC para IA local?',
            a: 'Escolha a GPU com base no seu maior modelo alvo. Uma RTX 4060 Ti 16 GB é adequada para uma configuração econômica com modelos 7B–13B, uma RTX 4070 Ti Super 16 GB para uma configuração intermediária com modelos 14B–33B e uma RTX 5090 32 GB para uma configuração entusiasta com trabalho em 70B. A GPU decide quais modelos a máquina pode executar, então ela é escolhida primeiro e o restante da lista de componentes é construído ao redor dela.',
          },
          {
            q: 'Quanta RAM preciso para um PC com IA local?',
            a: 'Planeje 32 GB para uma configuração econômica, 64 GB para uma intermediária e 128 GB para uma entusiasta. A RAM do sistema não é um substituto para a VRAM — um modelo rodando a partir da RAM é lento demais para uso interativo. A RAM é para o sistema operacional, o contexto e as ferramentas; compre VRAM suficiente na GPU para o modelo em si.',
          },
          {
            q: 'Qual fonte de alimentação precisa um PC com IA local?',
            a: 'Ajuste a fonte ao nível: 650 W para a configuração econômica, 850 W para a intermediária e 1000 W para a entusiasta. O nível entusiasta precisa de 1000 W porque a RTX 5090 sozinha consome 575 W. Uma fonte de alimentação subdimensionada causa instabilidade sob carga, então não economize nesta parte.',
          },
          {
            q: 'Devo comprar os componentes de GPU novos ou usados em 2026?',
            a: 'Compare novo e usado antes de decidir; não presuma que o usado é mais barato. O [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (fonte atualizada em 2026-10-15) mostra RTX 5090 vendidas como usadas a $5.900–6.350 contra cerca de $4.500–4.700 novas, e RTX 4090 vendidas como usadas a $2.575–3.010. Uma placa usada com funcionamento verificado só vale a pena quando é claramente mais barata. CPUs, RAM, SSDs e fontes de alimentação é melhor comprar novas.',
          },
          {
            q: 'Uma configuração de GPU única pode executar um modelo 70B?',
            a: 'Sim, a configuração entusiasta pode. Uma RTX 5090 32 GB tem mais VRAM do que qualquer outra GPU individual deste guia, mas um modelo 70B em Q4 precisa de aproximadamente 39–42 GB — então executa 70B apenas com quantização agressiva ou descarga parcial para a RAM do sistema. Os 128 GB de RAM da configuração entusiasta dão a essa descarga o espaço que ela precisa.',
          },
          {
            q: 'Vale a pena a configuração intermediária em relação ao custo extra sobre a econômica?',
            a: 'Sim, se você executa modelos de classe 14B regularmente. As configurações econômica e intermediária acomodam modelos similares, mas a RTX 4070 Ti Super da configuração intermediária é muito mais rápida — os modelos 14B respondem instantaneamente em vez de lentos, e o trabalho leve com 22B–33B se torna utilizável. Se o seu teto é firmemente modelos 7B–13B, a configuração econômica custa menos e é o melhor custo-benefício.',
          },
          {
            q: 'Preciso de uma CPU Threadripper para um PC com IA local?',
            a: 'Não. Uma CPU Ryzen de consumo é suficiente para as três configurações deste guia — um Ryzen 7 para o nível econômico, um Ryzen 9 para os níveis intermediário e entusiasta. Um Threadripper só vale o custo para uma máquina de GPU dupla que executa fine-tuning e inferência ao mesmo tempo, o que está além de uma configuração de GPU única.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Escolha a GPU para sua configuração com o guia de compra completo](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — oito GPUs em quatro níveis de orçamento, com preços atuais e o cálculo do aumento.',
          '[Veja a configuração de workstation 70B de GPU dupla para uso em produção](/pt/local-llms/local-llm-workstation-build) — o nível de GPU dupla com 48 GB de VRAM para modelos da classe 70B, além da configuração entusiasta deste guia.',
          '[Compare montar um PC versus alugar GPU na nuvem](/pt/power-local-llm/cloud-gpu-rental-guide-2026) — quando alugar supera ter hardware próprio para computação ocasional.',
          '[Calcule a VRAM que cada tamanho de modelo precisa antes de montar](/pt/local-llms/how-much-vram-local-llm) — o método completo de VRAM por tamanho de modelo por trás das escolhas de nível aqui.',
          '[Considere um Mac como alternativa a uma configuração de PC](/pt/power-local-llm/best-mac-for-local-ai-2026) — quando o Apple Silicon com memória unificada supera um PC com GPU dedicada para IA local.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Guia para montar um PC com IA local 2026: 3 níveis de orçamento',
      description: 'Três configurações completas de PC para IA local em 2026: econômica 7B–13B, intermediária 14B–33B e entusiasta 70B. Listas de componentes exatas, preços de GPU datados e notas sobre a escassez de DDR5 de 2026.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-ai-workstation-build-guide',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-11-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-ar.webp',
    title: 'دليل بناء محطة عمل الذكاء الاصطناعي المحلي ⁨2026⁩: ⁨3⁩ مستويات ميزانية',
    seoTitle: 'بناء حاسوب ⁨LLM⁩ محلي ⁨2026⁩: ⁨3⁩ مستويات من ⁨7B⁩ حتى ⁨70B⁩',
    intro:
      'معظم أدلة بناء حاسوب للذكاء الاصطناعي المحلي تبدأ بالمعالج، لكن الـGPU وذاكرة VRAM الخاصة بها هي التي تحدد النماذج التي يستطيع الجهاز تشغيلها — وكل قطعة أخرى تُختار لدعم تلك الـGPU. يُقدّم هذا الدليل ثلاث قوائم مكوّنات كاملة لحاسوب مخصص لنماذج LLM المحلية: إعداد اقتصادي لنماذج 7B–13B، وإعداد متوسط لنماذج 14B–33B، وإعداد متحمس للعمل مع نماذج 70B. كل مستوى يتضمن المكوّنات الدقيقة والأداء المتوقع. تنبيه بخصوص الأسعار: شحّ رقائق الذاكرة في 2026 دفع أسعار GPU وRAM DDR5 إلى مستويات أعلى بكثير من العام الماضي، لذا لا تُتتبَّع الإجماليات وأسعار بقية القطع هنا؛ تُتتبَّع أسعار GPU فقط من مصدر مؤرَّخ ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15) — تحقق من الإعلانات الحالية قبل الطلب. الأسعار بالدولار الأمريكي وقد تختلف حسب السوق والرسوم الجمركية.',
    metaDescription:
      '3 قوائم مكوّنات كاملة لحاسوب LLM محلي 2026: مستوى اقتصادي لنماذج 7B–13B ومتوسط لـ 14B–33B ومتحمس لـ 70B. أسعار GPU مؤرَّخة وملاحظات عن شحّ DDR5 في 2026.',
    twitterDescription:
      'دليل بناء حاسوب للذكاء الاصطناعي المحلي: ثلاثة مستويات ميزانية بقوائم مكوّنات كاملة لنماذج من 7B إلى 70B. ارتفعت أسعار GPU وRAM في 2026 — إليك أسعار GPU مؤرَّخة.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      'الأشخاص الذين يبنون حاساوباً مخصصاً لتشغيل نماذج LLM المحلية ويتخذون قرارهم بناءً على مستوى الميزانية وحجم النموذج المستهدف. يفترض الإلمام بمفهوم التكميم وVRAM كقيد، وبالمصطلحات الأساسية لبناء الحاسوب، لكن لا يشترط معرفة SKUs المحددة للمكوّنات الحالية.',
    readTime: '14 دقائق قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'بناء محطة عمل الذكاء الاصطناعي المحلي',
    targetKeywords: [
      'بناء حاسوب ذكاء اصطناعي محلي 2026',
      'دليل بناء محطة عمل llm محلي',
      'أفضل حاسوب لتشغيل llm',
      'قائمة مكوّنات محطة عمل الذكاء الاصطناعي',
      'كيف أبني حاسوباً للذكاء الاصطناعي المحلي',
    ],
    leadAnswerBlock:
      '**أفضل حاسوب للذكاء الاصطناعي المحلي هو المستوى الذي تتناسب فيه VRAM الـGPU مع نموذجك المستهدف. الإعداد الاقتصادي يُشغّل نماذج 7B–13B، والمتوسط يُشغّل نماذج 14B–33B، والمتحمس يُشغّل نماذج 70B — لا تُتتبَّع الإجماليات هنا لأن أسعار GPU وRAM في 2026 تتغير بسرعة؛ وأسعار GPU مذكورة مع المصدر والتاريخ.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبني حاسوباً لتشغيل نماذج LLM المحلية في 2026؟',
        answer:
          'اختر مستواك بناءً على أكبر نموذج تريد تشغيله ثم ابنِ الحاسوب حول الـGPU. الإعداد الاقتصادي يجمع RTX 4060 Ti 16 GB مع معالج Ryzen 7 لنماذج 7B–13B. الإعداد المتوسط يستخدم RTX 4070 Ti Super 16 GB لنماذج 14B–33B. الإعداد المتحمس يستخدم RTX 5090 32 GB للعمل مع 70B. شحّ الذاكرة في 2026 رفع أسعار GPU وRAM DDR5 بشكل كبير، لذا لا تُتتبَّع الإجماليات هنا وأسعار GPU فقط تحمل المصدر والتاريخ.',
        bullets: [
          'الإعداد الاقتصادي: RTX 4060 Ti 16 GB، يُشغّل نماذج 7B–13B.',
          'الإعداد المتوسط: RTX 4070 Ti Super 16 GB، يُشغّل نماذج 14B–33B.',
          'الإعداد المتحمس: RTX 5090 32 GB، يُشغّل نماذج 70B فقط مع تكميم عدواني أو تفريغ جزئي.',
          'ارتفعت أسعار GPU وRAM وSSD كلها في 2026 — قارن الجديد بالمستعمل، فالمستعمل لم يعد أرخص دائماً.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'اختيار المحرر', anchor: '#editors-choice' },
      { label: 'مقارنة المستويات', anchor: '#comparison-table' },
      { label: 'أي إعداد تختار؟', anchor: '#which-build' },
      { label: 'الإعداد الاقتصادي', anchor: '#budget-build' },
      { label: 'الإعداد المتوسط', anchor: '#mid-build' },
      { label: 'الإعداد المتحمس', anchor: '#enthusiast-build' },
      { label: 'كيف يغيّر ارتفاع أسعار 2026 الحسابات', anchor: '#price-surge' },
      { label: 'مخطط قرار الاختيار', anchor: '#decision-flowchart' },
      { label: 'أين تشتري المكوّنات', anchor: '#where-to-buy' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**الـGPU تحدد المستوى؛ بقية المكوّنات تدعمها.** حاسوب الذكاء الاصطناعي المحلي يُختار أولاً بناءً على الـGPU لأن VRAM تحدد النماذج التي تعمل. اختر المستوى الذي تناسب VRAM الـGPU فيه نموذجك المستهدف، ثم حجّم المعالج والـRAM والمزوّد حول ذلك.',
          '**أسعار 2026 رفعت تكلفة الإعدادات.** شحّ رقائق الذاكرة دفع أسعار GPU وRAM DDR5 إلى مستويات أعلى بكثير من العام الماضي. لا تُتتبَّع الإجماليات هنا — وأصبحت RAM بنداً رئيسياً في التكلفة لا تفصيلاً هامشياً (ارتفعت أسعار DDR5 بنحو 500% خلال 12 شهراً حتى أغسطس 2026 وفق [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)، 2026-08-18).',
          '**الإعداد الاقتصادي:** RTX 4060 Ti 16 GB وRyzen 7 7700 و32 جيجابايت RAM وSSD 1 تيرابايت ومزوّد 650 واط — يُشغّل نماذج 7B–13B بسرعة مقبولة. الأقل تكلفة بين الإعدادات الثلاثة في هذا الدليل.',
          '**الإعداد المتوسط:** RTX 4070 Ti Super 16 GB وRyzen 9 7900X و64 جيجابايت RAM وSSD 2 تيرابايت ومزوّد 850 واط — يُشغّل نماذج 14B–33B ويجعل نماذج 7B–14B تستجيب فوراً.',
          '**الإعداد المتحمس:** RTX 5090 32 GB وRyzen 9 7950X و128 جيجابايت RAM وSSD 4 تيرابايت ومزوّد 1000 واط — ومن بين الإعدادات الثلاثة هنا، هو الوحيد القادر على تشغيل نموذج 70B على GPU واحدة، ولا يتم ذلك إلا بتكميم عدواني أو تفريغ جزئي إلى RAM النظام. تُعرض RTX 5090 وحدها جديدة بنحو $4,500–4,700 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15).',
          '**RAM النظام ليست بديلاً عن VRAM.** تتيح RAM النظام للنموذج تجاوز VRAM، لكن نموذجاً يعمل من RAM بطيء جداً للاستخدام التفاعلي. اشترِ VRAM كافية في الـGPU للنموذج؛ اشترِ RAM للنظام التشغيلي والأدوات.',
          '**المزوّد يتدرج مع الـGPU.** الإعداد الاقتصادي يحتاج 650 واطاً، والمتوسط 850 واطاً، والمتحمس 1000 واط لأن RTX 5090 وحدها تستهلك 575 واطاً. اشمل المزوّد في الميزانية مع الـGPU.',
          '**المستعمل لم يعد خصماً مضموناً.** يُظهر [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (المصدر محدّث في 2026-10-15) أن RTX 5090 المستعملة المباعة ($5,900–6,350) تفوق السعر الجديد (نحو $4,500–4,700) وأن RTX 4090 المستعملة ($2,575–3,010) تتداخل مع نطاق الإعلانات الجديدة ($2,000–3,000)، فقارن الاثنين قبل الشراء. تظل البطاقة المستعملة المتحقق من عملها خياراً جيداً حين تكون أرخص بوضوح — لكن لا تفترض ذلك أبداً.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الإعداد الاقتصادي:** GPU RTX 4060 Ti 16 GB — يُشغّل نماذج 7B ومعظم نماذج 13B.',
          '**الإعداد المتوسط:** GPU RTX 4070 Ti Super 16 GB — يُشغّل 14B بارتياح وعمل خفيف مع 22B–33B.',
          '**الإعداد المتحمس:** GPU RTX 5090 32 GB — يُشغّل 33B بارتياح، و70B فقط مع تكميم عدواني أو تفريغ جزئي.',
          '**قاعدة VRAM في Q4_K_M:** حوالي 0.6 جيجابايت لكل مليار معامل، بالإضافة إلى 2–4 جيجابايت للسياق والأدوات.',
          '**دليل RAM النظام:** 32 جيجابايت للاقتصادي، 64 جيجابايت للمتوسط، 128 جيجابايت للمتحمس.',
          '**المزوّد لكل مستوى:** 650 واط للاقتصادي، 850 واط للمتوسط، 1000 واط للمتحمس — RTX 5090 وحدها تستهلك 575 واطاً.',
          '**واقع أسعار 2026:** ارتفعت أسعار GPU وRAM DDR5 وSSD كلها بسبب شحّ الذاكرة — تحقق من الأسعار الحالية وقارن الجديد بالمستعمل.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'اختيار المحرر: الإعداد المتوسط',
        highlight: true,
        content:
          '**لمعظم من يبنون حاسوباً للذكاء الاصطناعي المحلي، الإعداد المتوسط هو المستوى الذي يوازن القدرة والتكلفة والهامش.** مبني حول RTX 4070 Ti Super 16 GB، يُشغّل كل نموذج 14B بمساحة سياق، ويتعامل مع العمل الخفيف مع 22B–33B، ويجعل نماذج 7B–14B تستجيب فوراً — ينبغي أن يظل صالحاً لمعظم أحمال العمل من فئة 14B لفترة جيدة، لكن أحجام النماذج والأسعار تتغير. انزل للاقتصادي فقط إن كانت نماذج 7B–13B حدّك الصارم؛ ارتفع للمتحمس فقط إن كنت تحتاج تحديداً العمل مع نماذج 70B.',
        callouts: [
          {
            type: 'note',
            text: 'اختيار المحرر هذا يعكس فقط العلاقة بين السعر والقدرة. لا يشارك PromptQuorum في أي برنامج تابع والروابط أدناه لا تحمل علامات تابعة — إنها روابط مرجعية بسيطة لا تولّد عمولة.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'شاهد سعر RTX 4070 Ti Super على Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'شاهد سعر RTX 4070 Ti Super على Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'كيف تتقاطع المستويات الثلاثة في 2026',
        content:
          'أرقام VRAM وطاقة الـGPU هي مواصفات الشركة المصنّعة. سرعات الاستدلال أرقام تقريبية نموذجية لفئة GPU في كل مستوى (لم تقسها PromptQuorum)؛ والسرعة الفعلية تتوقف على التكميم وبيئة التشغيل وطول السياق. إجماليات البناء غير متتبَّعة: سعر RTX 5090 فقط يحمل المصدر والتاريخ (انظر الإعداد المتحمس)، وRAM وبقية القطع غير متتبَّعة في هذه الصفحة. قارن إعلانات GPU الجديدة والمستعملة: المستعمل لم يعد أرخص دائماً.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لحاسوب الذكاء الاصطناعي المحلي، VRAM الـGPU تحدد النماذج التي يستطيع الجهاز تشغيلها وبقية قائمة المكوّنات تُحجَّم لدعم تلك الـGPU — اختر المستوى أولاً بناءً على حجم النموذج.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر في الإعداد كفريق مبني حول لاعب نجم: الـGPU. المعالج والـRAM والمزوّد هم طاقم الدعم — مفيدون، لكن موجودون ليبقوا الـGPU تعمل. اختر أولاً الـGPU التي يحتاجها نموذجك ثم ابنِ البقية حولها.',
          },
        ],
        columns: ['المستوى', 'GPU', 'VRAM', 'يُشغّل', 'المزوّد', 'الإجمالي (2026)'],
        rows: [
          {
            'المستوى': 'اقتصادي',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 جيجابايت',
            'يُشغّل': 'نماذج 7B–13B',
            'المزوّد': '650 واط',
            'الإجمالي (2026)': 'غير متتبَّع',
          },
          {
            'المستوى': 'متوسط',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 جيجابايت',
            'يُشغّل': '14B بارتياح، 22B–33B خفيف',
            'المزوّد': '850 واط',
            'الإجمالي (2026)': 'غير متتبَّع',
          },
          {
            'المستوى': 'متحمس',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 جيجابايت',
            'يُشغّل': '33B بارتياح، 70B فقط مع تكميم عدواني أو تفريغ جزئي',
            'المزوّد': '1000 واط',
            'الإجمالي (2026)': 'غير متتبَّع',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: 'أي إعداد يجب أن تختار؟',
        content:
          '**أكبر نموذج تريد تشغيله يحدد المستوى؛ ميزانيتك تؤكده.** ابحث عن الصف الذي يتوافق مع وضعك.',
        columns: ['وضعك', 'ابنِ هذا'],
        rows: [
          { 'وضعك': 'أُشغّل نماذج 7B–13B وأريد أقل الإعدادات الثلاثة تكلفة في هذا الدليل', 'ابنِ هذا': 'الإعداد الاقتصادي' },
          { 'وضعك': 'أريد أول حاسوب للذكاء الاصطناعي ولا أعرف إلى أين سأصل', 'ابنِ هذا': 'الاقتصادي، أو المتوسط لهامش أكبر' },
          { 'وضعك': 'أُشغّل نماذج 14B باستمرار وأريدها فورية', 'ابنِ هذا': 'الإعداد المتوسط' },
          { 'وضعك': 'أعمل خفيفاً مع 22B–33B وأريد جهازاً يدوم', 'ابنِ هذا': 'الإعداد المتوسط' },
          { 'وضعك': 'أُشغّل نماذج 33B بكثافة أو أريد هامشاً مستقبلياً كبيراً', 'ابنِ هذا': 'الإعداد المتحمس' },
          { 'وضعك': 'أحتاج جهاز GPU واحد يُشغّل نماذج 70B فقط مع تكميم عدواني أو تفريغ جزئي', 'ابنِ هذا': 'الإعداد المتحمس' },
          { 'وضعك': 'أريد إبقاء الإجمالي منخفضاً رغم ارتفاع 2026', 'ابنِ هذا': 'أي مستوى — قارن إعلانات GPU الجديدة والمستعملة' },
          { 'وضعك': 'لست متأكداً وأريد الإعداد الأكثر أماناً للحفاظ عليه لسنوات', 'ابنِ هذا': 'الإعداد المتوسط — اختيار المحرر' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'الإعداد الاقتصادي: RTX 4060 Ti 16 GB',
        content:
          '**الإعداد الاقتصادي هو أقل الإعدادات الثلاثة تكلفة في هذا الدليل للذكاء الاصطناعي المحلي ويُشغّل كل نموذج 7B ومعظم نماذج 13B — قدرة كافية لمعظم المستخدمين لأول مرة.** مبني حول RTX 4060 Ti 16 GB، أرخص بطاقة 16 جيجابايت في هذا الدليل، مما يُبقي الإجمالي منخفضاً قدر ما يسمح به شحّ 2026.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 جيجابايت VRAM، 165 واط. السرعة النموذجية لهذه الفئة من GPU على نماذج 7B حوالي 20–25 رمز/ثانية (لم تقسها PromptQuorum؛ وتختلف حسب التكميم والسياق)، وتتسع نماذج 14B بهامش سياق. سعة 16 جيجابايت هي سبب اختيارها على إصدار 8 جيجابايت.',
          '**المعالج — AMD Ryzen 7 7700:** 8 أنوية، استهلاك طاقة معتدل. المعالج يؤدي عملاً قليلاً أثناء الاستدلال بالـGPU، لذا شريحة متوسطة المستوى مناسبة هنا.',
          '**اللوحة الأم — شرائح B650:** تدعم Ryzen 7 وGPU كاملة الحجم عبر PCIe.',
          '**RAM — 32 جيجابايت DDR5:** كافية للنظام التشغيلي والأدوات ونموذج 7B–13B يعمل في VRAM. RAM ليست بديلاً عن VRAM — 32 جيجابايت تكفي هنا، لكن DDR5 أصبحت ثاني أكبر بند في هذا الإعداد.',
          '**التخزين — SSD NVMe 1 تيرابايت:** يحتوي النظام التشغيلي ونماذج متعددة (نموذج 7B Q4 يزن حوالي 4–5 جيجابايت).',
          '**المزوّد — 650 واط 80+ Gold:** هامش مريح لـGPU 165 واط ومعالج 8 أنوية.',
          '**الهيكل والتبريد — برج متوسط مع مبرّد هواء:** المستوى الاقتصادي يولّد حرارة قليلة؛ التبريد الهوائي كافٍ.',
          '**لماذا تبني هذا المستوى:** أدنى تكلفة دخول، استهلاك طاقة منخفض، وقدرة كافية لنماذج 7B–13B التي تغطي الدردشة العامة ومساعدة الكود والتلخيص. **لماذا تتجاوزه:** إن كنت تريد نماذج 14B أو أكبر، ابدأ بالإعداد المتوسط.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اشترِ RTX 4060 Ti تحديداً بإصدار 16 جيجابايت. إصدار 8 جيجابايت يستخدم نفس الـdie ويعمل بسرعة مماثلة، لكن 8 جيجابايت لا تستوعب نموذج 14B — الذاكرة الإضافية هي الغرض الوحيد من هذا الاختيار.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'شاهد سعر RTX 4060 Ti 16GB على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'شاهد سعر Ryzen 7 7700 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'شاهد سعر RAM DDR5 32 جيجابايت على Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'الإعداد المتوسط: RTX 4070 Ti Super 16 GB',
        content:
          '**الإعداد المتوسط هو اختيار المحرر — يُشغّل نماذج 14B فوراً، ويتعامل مع العمل الخفيف مع 22B–33B، وهو المستوى الذي تبنيه للإبقاء عليه.** مبني حول RTX 4070 Ti Super 16 GB، سريع بما يكفي لأن تتوقف كمون الاستجابة عن الملاحظة مع نماذج فئة 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 جيجابايت VRAM، 285 واط. نفس قدرة النموذج مع المستوى الاقتصادي لكن أسرع بكثير — نماذج 7B–14B تستجيب فوراً والعمل الخفيف مع 22B–33B قابل للاستخدام.',
          '**المعالج — AMD Ryzen 9 7900X:** 12 نواة. هامش أكبر من المعالج الاقتصادي لتحضير البيانات وتشغيل الأدوات جانباً للاستدلال.',
          '**اللوحة الأم — شرائح B650 أو X670:** إمداد طاقة قوي لمعالج 12 نواة وGPU 285 واط.',
          '**RAM — 64 جيجابايت DDR5:** مساحة للنظام التشغيلي ونوافذ سياق أكبر وأدوات كـpipeline RAG يعمل جانباً للنموذج. هذا أكبر بند بعد الـGPU — إن كانت الميزانية ضيقة فإن 32 جيجابايت ما زالت تُشغّل كل نموذج في هذا المستوى لأن النموذج يعيش في VRAM.',
          '**التخزين — SSD NVMe 2 تيرابايت:** يحتوي مكتبة نماذج كبيرة — نموذج 33B Q4 يزن حوالي 18–20 جيجابايت.',
          '**المزوّد — 850 واط 80+ Gold:** هامش مريح لـGPU 285 واط ومعالج 12 نواة تحت حمل مستمر.',
          '**الهيكل والتبريد — برج متوسط مع AIO 240–280 مم أو مبرّد هواء عالي الجودة:** المستوى المتوسط يولّد حرارة معتدلة؛ مبرّد جيد يُبقي المعالج مستقراً أثناء جلسات استدلال طويلة.',
          '**لماذا تبني هذا المستوى:** تُشغّل نماذج 14B باستمرار وتريدها فورية، أو تعمل خفيفاً مع 22B–33B وتريد هامشاً. **لماذا تتجاوزه:** إن كانت نماذج 7B–13B كافية، الإعداد الاقتصادي أقل تكلفة؛ إن احتجت نماذج 70B، لا GPU 16 جيجابايت تستوعبها — انتقل للمتحمس.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الإعداد المتوسط يستوعب نفس النماذج مع الإعداد الاقتصادي — أنت تدفع للسرعة لا للقدرة. ابنِ هذا المستوى إن كانت نماذج 14B عبئاً يومياً والانتظار عليها سيزعجك.',
          },
          {
            type: 'note',
            text: 'RTX 4090 24 GB مستعملة تُعرض الآن بسعر يفوق هذا المستوى بكثير (الإعلانات المستعملة المباعة $2,575–3,010 وفق [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15)، فلم تعد اختصاراً. قارن الجديد والمستعمل لـRTX 4070 Ti Super قبل الشراء؛ سعرها غير متتبَّع هنا.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'شاهد سعر RTX 4070 Ti Super على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'شاهد سعر Ryzen 9 7900X على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'شاهد سعر RAM DDR5 64 جيجابايت على Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'الإعداد المتحمس: RTX 5090 32 GB',
        content:
          '**من بين الإعدادات الثلاثة هنا، الإعداد المتحمس وحده يستطيع تشغيل نموذج 70B على GPU واحدة، ولا يتم ذلك إلا بتكميم عدواني أو تفريغ جزئي إلى RAM النظام — RTX 5090 32 GB هي القطعة المحورية.** ابنِ هذا المستوى لقدرة VRAM لا للسرعة الخام؛ السرعة هي أثر جانبي. ضربت موجة 2026 هذا المستوى بأشد قوة — إذ تُعرض RTX 5090 جديدة بنحو $4,500–4,700 مقابل MSRP قدره $1,999 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15) — لذا يهيمن بندا الـGPU والـRAM على التكلفة.',
        items: [
          '**GPU — RTX 5090 32 GB (جديدة بالتجزئة نحو $4,500–4,700 مقابل MSRP قدره $1,999؛ المستعملة المباعة $5,900–6,350؛ [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15؛ بيانات إعلانات وليست عروضاً):** 32 جيجابايت VRAM GDDR7، 575 واط. هي GPU الواحدة الأكبر VRAM في هذا الدليل؛ وبدون إعداد GPU مزدوج لا تُشغّل نموذج 70B إلا بتكميم عدواني أو تفريغ جزئي إلى RAM النظام. تُشغّل نماذج 33B بارتياح مع مساحة إضافية.',
          '**المعالج — AMD Ryzen 9 7950X:** 16 نواة. كافٍ لتشغيل تحضير البيانات وتجارب الضبط الدقيق والأدوات جانباً للاستدلال المكثّف.',
          '**اللوحة الأم — شرائح X670E:** إمداد طاقة قوي وPCIe 5.0، مُحجَّم لـGPU 575 واط ومعالج 16 نواة.',
          '**RAM — 128 جيجابايت DDR5:** مساحة لنوافذ سياق كبيرة ونماذج متعددة محمّلة في وقت واحد والأدوات — والهامش لتفريغ نموذج جزئياً إلى RAM عند الحاجة. قلّما تُعرض أطقم 128 جيجابايت بشكل موثوق؛ وطقم 64 جيجابايت هو البديل الموفّر.',
          '**التخزين — SSD NVMe 4 تيرابايت:** نموذج 70B Q4 يزن حوالي 40 جيجابايت؛ وحدة 4 تيرابايت تحتوي مكتبة كبيرة من النماذج الكبيرة. ارتفعت أسعار وحدات 4 تيرابايت أكثر من أي حجم SSD آخر في 2026.',
          '**المزوّد — 1000 واط 80+ Platinum:** ضرورية لأن RTX 5090 وحدها تستهلك 575 واطاً — وحدة 750 واط ستنهار تحت الحمل. لا تُقلّل من أهمية هذه القطعة.',
          '**الهيكل والتبريد — هيكل كامل الحجم مع AIO 360 مم:** GPU 575 واط ومعالج 16 نواة يولّدان حرارة حقيقية؛ مبرّد سائل 360 مم يُبقي المعالج مستقراً أثناء الاستدلال المستمر بـ70B.',
          '**لماذا تبني هذا المستوى:** تحتاج نماذج 33B أو 70B، أو تُشغّل استدلالاً دفعياً مكثّفاً، أو تريد جهازاً لا يحتاج استبدالاً لسنوات. **لماذا تتجاوزه:** لنماذج 7B–14B إسراف — الإعداد المتوسط يُوفّر إجابات فورية بهذه الأحجام بأقل من نصف التكلفة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090 تستهلك 575 واطاً وحدها. اقرنها بمزوّد 1000 واط من هذه القائمة — وحدة أصغر ستنهار تحت الحمل. تأكد من أن دائرة الجدار الكهربائية تستطيع توفير الاستهلاك الإجمالي قبل البناء. هذه ليست نصيحة للسلامة الكهربائية؛ اتبع إرشادات NVIDIA وصانع مزوّد الطاقة.',
          },
          {
            type: 'note',
            text: 'نموذج 70B في Q4 يحتاج حوالي 39–42 جيجابايت VRAM، لذا حتى RTX 5090 32 GB تُشغّل 70B في Q4 فقط مع تكميم عدواني أو تفريغ جزئي إلى RAM النظام. الـ128 جيجابايت RAM في هذا الإعداد تُعطي ذلك التفريغ المساحة التي يحتاجها.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'شاهد سعر RTX 5090 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'شاهد سعر Ryzen 9 7950X على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: 'شاهد سعر مزوّد 1000 واط على Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'كيف يغيّر ارتفاع أسعار 2026 حسابات البناء',
        content:
          '**شحّ رقائق الذاكرة في 2026 دفع أسعار GPU وRAM DDR5 إلى ما فوق المعتاد بكثير، وبما أن الـGPU والـRAM أكبر بندين في كل إعداد، فهما يهيمنان على التكلفة.** خطط للإعداد حول الأسعار المطلوبة حالياً لا أسعار الإطلاق.',
        items: [
          '**الـGPU والـRAM تهيمنان على الإجمالي.** في المستويات الثلاثة، الـGPU هي أكبر بند وRAM DDR5 أصبحت ثاني أكبر بند — الارتفاع يغيّر إجمالي الإعداد عبر هاتين القطعتين أكثر من أي قطعة أخرى.',
          '**السبب الذاكرة لا الـGPU.** شحّ إمدادات GDDR وHBM وDRAM رفع تكلفة كل بطاقة بذاكرة سريعة وتكلفة RAM النظام نفسها؛ كلما زادت VRAM، كان التأثير أشد. تُعرض RTX 5090 جديدة بنحو $4,500–4,700 مقابل MSRP قدره $1,999 (4,500 / 1,999 = 2.25×) وفق [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (المصدر محدّث في 2026-10-15) — أكثر من الضعف.',
          '**أسعار بطاقات المدى الأدنى غير متتبَّعة هنا.** RTX 4060 Ti 16 GB وRTX 4070 Ti Super في الإعدادين الاقتصادي والمتوسط لا يغطيهما المتتبع؛ تحقق من الإعلانات الحالية.',
          '**المستعمل لم يعد خصماً موثوقاً.** يُظهر [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (المصدر محدّث في 2026-10-15) RTX 5090 المستعملة المباعة بـ$5,900–6,350 مقابل نحو $4,500–4,700 جديدة، وRTX 4090 المستعملة المباعة بـ$2,575–3,010 (الوسيط $2,860)؛ وهي بيانات إعلانات وليست عروضاً. قارن الإعلانات الجديدة والمستعملة لكل بطاقة؛ البطاقة المستعملة المتحقق من عملها لا تستحق الشراء إلا حين تكون أرخص بوضوح.',
          '**RAM وSSD تحركتا كثيراً؛ المعالج واللوحة الأم والمزوّد تحركت قليلاً.** ارتفعت أسعار DDR5 بنحو 500% خلال 12 شهراً حتى أغسطس 2026 وفق [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) (2026-08-18؛ عُرض طقم DDR5-6400 سعة 128 GB بسعر $3,399). أسعار المعالج واللوحة الأم والمزوّد وSSD غير متتبَّعة في هذه الصفحة؛ فتحقق منها أيضاً.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'شحّ الذاكرة في 2026 دفع أسعار GPU وRAM DDR5 إلى ما فوق المعتاد بكثير، فصارت الـGPU والـRAM أكبر بندي تكلفة في إعداد ذكاء اصطناعي محلي.',
          },
          {
            type: 'plain-terms',
            text: 'الـGPU هي أغلى قطعة في الجهاز، وفي 2026 أصبحت الـRAM غالية أيضاً. حتى يتحسن شحّ الذاكرة، عامل أسعار الإطلاق كتاريخ، وقارن الجديد بالمستعمل قبل الشراء، ولا تشترِ VRAM أو RAM أكثر مما يحتاجه نموذجك.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'مخطط قرار الاختيار: اختر إعدادك في أربعة أسئلة',
        content:
          '**أربعة أسئلة بالترتيب تقود معظم من يبنون إلى مستوى.**',
        items: [
          '**1. ما أكبر نموذج تريد تشغيله؟** 7B–13B: الاقتصادي. 14B–33B: المتوسط. 70B: المتحمس.',
          '**2. ما سقف ميزانيتك الصارم؟** الإعداد الاقتصادي لأقل تكلفة، والمتوسط للمستوى الوسط، والمتحمس للأعلى — تُعرض RTX 5090 وحدها جديدة بنحو $4,500–4,700 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15).',
          '**3. GPU جديدة أم مستعملة؟** قارن الاثنين — وفق [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (المصدر محدّث في 2026-10-15) تُباع RTX 5090 وRTX 4090 المستعملتان بسعر يساوي الجديدة أو يفوقها، فلا تكون المستعملة الخيار الصحيح إلا حين تكون أرخص بوضوح.',
          '**4. هل تتحمل خطتك في الطاقة والمساحة؟** تأكد من أن المزوّد يتطابق مع المستوى (650 / 850 / 1000 واط) وأن الهيكل يستوعب الـGPU والمبرّد قبل طلب القطع.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر إعداد حاسوب للذكاء الاصطناعي المحلي بالإجابة أولاً على حجم أكبر نموذج، ثانياً على سقف الميزانية، ثالثاً GPU جديدة مقابل مستعملة، وأخيراً تخطيط الطاقة والمساحة.',
          },
          {
            type: 'plain-terms',
            text: 'ابدأ بأكبر نموذج تريد تشغيله حقاً واجعل ذلك يحدد مستواك. ثم تحقق من ميزانيتك، اقرر إن كنت تشتري الـGPU مستعملة، وتأكد من أن المزوّد والهيكل يناسبان القطع. الفعل بترتيب خاطئ هو السبب في بناء إعدادات لا تستطيع تشغيل نموذجها.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'أين تشتري المكوّنات',
        content:
          '**تجار التجزئة الكبار لديهم كل قطعة من هذه الإعدادات؛ قارن الإعلانات الجديدة والمستعملة للـGPU تحديداً.** الروابط أدناه روابط بحث منتجات بسيطة؛ لا تحمل علامات تابعة ولا تولّد عمولة.',
        items: [
          '**Amazon وNewegg:** أوسع مخزون للمعالجات والـRAM والـSSD والمزوّدات والهياكل. مخزون GPU وDDR5 الجديد أشح ومسعَّر بمستوى ارتفاع 2026.',
          '**سوق GPU المستعملة:** يستحق الاطلاع، لكنه لم يعد توفيراً مضموناً — وفق [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (المصدر محدّث في 2026-10-15) تُباع RTX 5090 وRTX 4090 المستعملتان بسعر يساوي الجديدة أو يفوقها. اشترِ المستعمل فقط حين يكون أرخص بوضوح ومتحققاً من عمله.',
          '**المتاجر المحلية لقطع الحاسوب:** مصادر جيدة للمعالجات واللوحات الأم والمزوّدات؛ مفيدة أيضاً لحزم المعالج + اللوحة الأم.',
          '**اشترِ الـGPU أولاً.** إنها السطر الأكبر والأكثر تقلباً — احصل على GPU بسعر تقبله، ثم اشترِ قطع الدعم حولها.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'بسبب ارتفاع الأسعار في 2026، لا تُتتبَّع الإجماليات في هذا الدليل. افتح دائماً إعلان التاجر الحالي للـGPU وللـRAM قبل البناء — فهما معاً يهيمنان على تكلفة الإعداد.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'استكشف GPU على Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'استكشف معالجات Ryzen على Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'استكشف RAM DDR5 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'استكشف SSD NVMe على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'استكشف مزوّدات الطاقة على Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة عند بناء حاسوب للذكاء الاصطناعي المحلي',
        items: [
          '**اختيار المعالج قبل الـGPU.** الـGPU تحدد النماذج التي يُشغّلها الجهاز؛ المعالج يؤدي عملاً قليلاً أثناء الاستدلال. اختر الـGPU أولاً ثم حجّم المعالج لدعمها.',
          '**شراء RAM النظام بدلاً من VRAM.** تتيح RAM النظام للنموذج تجاوز VRAM، لكن نموذجاً يعمل من RAM بطيء جداً للاستخدام التفاعلي. اشترِ VRAM كافية في الـGPU للنموذج؛ اشترِ RAM فقط للنظام التشغيلي والأدوات.',
          '**التقليل من شأن المزوّد.** RTX 5090 وحدها تستهلك 575 واطاً. مزوّد ينهار تحت الحمل أسوأ من GPU أبطأ تعمل باستقرار — طابق المزوّد مع المستوى.',
          '**التعلق بأسعار الإطلاق.** ارتفاع 2026 يعني أن أسعار الإطلاق الاسمية للـGPU وأسعار RAM العام الماضي لم تعد تعكس الواقع. ضع ميزانية الـGPU والـRAM بالأسعار الحالية لدى التاجر، وقارن السوق المستعمل بدلاً من افتراض أنه أرخص.',
          '**شراء RTX 4060 Ti 8 جيجابايت للإعداد الاقتصادي.** تشارك الاسم مع إصدار 16 جيجابايت لكنها لا تستوعب نموذج 14B. تأكد من متغيّر 16 جيجابايت في الإعلان.',
          '**المبالغة في التحجيم لنماذج 7B.** إن كانت نماذج 7B تغطي حالة استخدامك، الإعداد المتحمس يُهدر آلاف الدولارات والواط. طابق المستوى مع النموذج لا مع الميزانية التي تصادف امتلاكها.',
          '**تخطي تخطيط الهيكل والتبريد.** GPU 575 واط بالإضافة إلى معالج 16 نواة يولّد حرارة حقيقية. تأكد من أن الهيكل يستوعب الـGPU والمبرّد ولديه تدفق هواء قبل طلب القطع.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[دليل شراء GPU لـLLMs المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: إرشادات شراء GPU وسياق ارتفاع 2026 خلف إجماليات البناء هنا.',
          '[بناء محطة عمل LLM محلي](/ar/local-llms/local-llm-workstation-build) — PromptQuorum: قائمة مكوّنات ودليل التبريد والمزوّد لمحطة عمل GPU مزدوجة 70B خلف المستوى المتحمس.',
          '[مواصفات NVIDIA GeForce RTX سلسلة 40 و50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — أرقام رسمية لقدرة VRAM والطاقة (TGP) لـRTX 4060 Ti و4070 Ti Super و5090.',
          '[PCPartPicker](https://pcpartpicker.com) — أسعار المكوّنات المباشرة لمعالجات AMD Ryzen وRAM DDR5 وSSD NVMe والمزوّدات.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: "هل مزود طاقة 1000 واط مبالغ فيه لتجميعة بوحدة معالجة رسومات واحدة؟",
            a: "ليس لبطاقة RTX 5090 التي تبلغ قدرتها المقدّرة 575 واط وقد تشهد ذروات لحظية أعلى منها، ولذلك يوصي مرجع NVIDIA بمزود طاقة 1000 واط. أما للتجميعتين الاقتصادية والمتوسطة في هذا الدليل فهو مبالغ فيه: يكفي 650 واط و850 واط (80+ Gold) لبطاقتي RTX 4060 Ti 16 GB وRTX 4070 Ti Super 16 GB مع هامش جيد. فضّل مزود طاقة ATX 3.1 بموصل 12V-2x6 أصلي على مجرد زيادة الواطات.",
          },
          {
            q: 'كم يكلّف بناء حاسوب للذكاء الاصطناعي المحلي في 2026؟',
            a: 'لا تُتتبَّع الإجماليات هنا، لأن أسعار GPU وRAM في 2026 تتغير بسرعة وأسعار GPU فقط لها مصدر مؤرَّخ. تُعرض RTX 5090 في الإعداد المتحمس جديدة بنحو $4,500–4,700 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15)، وارتفعت أسعار DDR5 بنحو 500% خلال 12 شهراً حتى أغسطس 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)، 2026-08-18). اجمع الأسعار الحالية لقائمة مكوّنات المستوى الذي تختاره. الأسعار بالدولار الأمريكي وقد تختلف حسب السوق والرسوم الجمركية.',
          },
          {
            q: 'أي GPU يجب أن أضعها في حاسوب الذكاء الاصطناعي المحلي؟',
            a: 'اختر الـGPU بناءً على أكبر نموذجك المستهدف. RTX 4060 Ti 16 GB مناسبة للإعداد الاقتصادي مع نماذج 7B–13B، وRTX 4070 Ti Super 16 GB للمتوسط مع نماذج 14B–33B، وRTX 5090 32 GB للمتحمس مع العمل بـ70B. الـGPU تحدد النماذج التي يستطيع الجهاز تشغيلها، لذا تُختار أولاً وبقية قائمة المكوّنات تُبنى حولها.',
          },
          {
            q: 'كم RAM أحتاج لحاسوب الذكاء الاصطناعي المحلي؟',
            a: 'خطط لـ32 جيجابايت للإعداد الاقتصادي، و64 جيجابايت للمتوسط، و128 جيجابايت للمتحمس. RAM النظام ليست بديلاً عن VRAM — نموذج يعمل من RAM بطيء جداً للاستخدام التفاعلي. RAM للنظام التشغيلي والسياق والأدوات؛ اشترِ VRAM كافية في الـGPU للنموذج ذاته.',
          },
          {
            q: 'أي مزوّد طاقة يحتاجه حاسوب الذكاء الاصطناعي المحلي؟',
            a: 'طابق المزوّد مع المستوى: 650 واط للاقتصادي، 850 واط للمتوسط، 1000 واط للمتحمس. المستوى المتحمس يحتاج 1000 واط لأن RTX 5090 وحدها تستهلك 575 واطاً. مزوّد أصغر من المطلوب يسبب عدم استقرار تحت الحمل، لذا لا تقتصد في هذه القطعة.',
          },
          {
            q: 'هل يجب أن أشتري مكوّنات GPU جديدة أم مستعملة في 2026؟',
            a: 'قارن الجديد بالمستعمل قبل أن تقرر؛ ولا تفترض أن المستعمل أرخص. يُظهر [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (المصدر محدّث في 2026-10-15) RTX 5090 المستعملة المباعة بـ$5,900–6,350 مقابل نحو $4,500–4,700 جديدة، وRTX 4090 المستعملة المباعة بـ$2,575–3,010. البطاقة المستعملة المتحقق من عملها لا تستحق الشراء إلا حين تكون أرخص بوضوح. المعالجات والـRAM والـSSD والمزوّدات يُفضَّل شراؤها جديدة.',
          },
          {
            q: 'هل يستطيع إعداد GPU واحد تشغيل نموذج 70B؟',
            a: 'نعم، الإعداد المتحمس يستطيع. RTX 5090 32 GB لديها أكبر VRAM بين وحدات GPU الواحدة في هذا الدليل، لكن نموذج 70B في Q4 يحتاج حوالي 39–42 جيجابايت — لذا يُشغّل 70B فقط مع تكميم عدواني أو تفريغ جزئي لـRAM النظام. الـ128 جيجابايت RAM في الإعداد المتحمس تُعطي هذا التفريغ المساحة التي يحتاجها.',
          },
          {
            q: 'هل يستحق الإعداد المتوسط التكلفة الإضافية على الاقتصادي؟',
            a: 'نعم، إن كنت تُشغّل نماذج فئة 14B بانتظام. الإعداد الاقتصادي والمتوسط يستوعبان نماذج مماثلة، لكن RTX 4070 Ti Super في المتوسط أسرع بكثير — نماذج 14B تستجيب فوراً بدلاً من بطء، والعمل الخفيف مع 22B–33B يصبح قابلاً للاستخدام. إن كان سقفك صارماً عند نماذج 7B–13B، الإعداد الاقتصادي أقل تكلفة وهو الأفضل قيمةً.',
          },
          {
            q: 'هل أحتاج معالج Threadripper لحاسوب الذكاء الاصطناعي المحلي؟',
            a: 'لا. معالج Ryzen للمستهلكين كافٍ للمستويات الثلاثة في هذا الدليل — Ryzen 7 للمستوى الاقتصادي، وRyzen 9 للمتوسط والمتحمس. Threadripper يستحق تكلفته فقط لجهاز GPU مزدوج يُشغّل الضبط الدقيق والاستدلال في وقت واحد، وهو ما يتجاوز إعداد GPU واحدة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[اختر الـGPU لإعدادك مع الدليل الكامل للشراء](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — ثمانية GPU في أربعة مستويات ميزانية، مع الأسعار الحالية وحساب الارتفاع.',
          '[شاهد إعداد محطة عمل 70B بـGPU مزدوجة للاستخدام الإنتاجي](/ar/local-llms/local-llm-workstation-build) — مستوى GPU مزدوجة بذاكرة 48 GB لنماذج فئة 70B ما وراء الإعداد المتحمس في هذا الدليل.',
          '[قارن بناء حاسوب مقابل استئجار GPU في السحابة](/ar/power-local-llm/cloud-gpu-rental-guide-2026) — متى يتفوق الاستئجار على امتلاك أجهزة للحوسبة العرضية.',
          '[احسب VRAM التي يحتاجها كل حجم نموذج قبل البناء](/ar/local-llms/how-much-vram-local-llm) — الطريقة الكاملة لـVRAM حسب حجم النموذج خلف اختيارات المستوى هنا.',
          '[فكّر في Mac كبديل لإعداد PC](/ar/power-local-llm/best-mac-for-local-ai-2026) — متى يتفوق Apple Silicon بالذاكرة الموحدة على PC بـGPU مخصصة للذكاء الاصطناعي المحلي.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'دليل بناء محطة عمل الذكاء الاصطناعي المحلي 2026: 3 مستويات ميزانية',
      description: 'ثلاثة إعدادات كاملة لحاسوب الذكاء الاصطناعي المحلي في 2026: اقتصادي 7B–13B ومتوسط 14B–33B ومتحمس 70B. قوائم مكوّنات دقيقة وأسعار GPU مؤرَّخة وملاحظات عن شحّ DDR5 في 2026.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-ai-workstation-build-guide',
      inLanguage: 'ar',
      datePublished: '2026-05-24',
      dateModified: '2026-11-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-22',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-ko.webp',
    title: '로컬 AI 워크스테이션 구성 가이드 2026: 예산별 3단계',
    seoTitle: '로컬 AI PC 2026: 입문부터 70B 워크스테이션까지',
    intro:
      '대부분의 로컬 AI PC 구성 가이드는 CPU부터 시작하지만, 실제로 어떤 모델을 실행할 수 있는지를 결정하는 것은 GPU와 그 VRAM입니다. 나머지 모든 부품은 GPU를 지원하기 위해 선택됩니다. 이 가이드는 로컬 LLM 전용 PC를 위한 세 가지 완전한 부품 목록을 제공합니다. 7B–13B 모델을 위한 보급형 구성, 14B–33B 모델을 위한 중급형 구성, 그리고 70B 모델 작업을 위한 고급형 구성입니다. 각 단계에는 정확한 부품, 예상 성능이 포함되어 있습니다. 가격에 관한 주의 사항: 2026년 메모리 칩 공급 부족으로 GPU와 DDR5 RAM 가격이 작년 수준을 훨씬 웃돌게 되어, 구성 총액과 GPU 외 부품 가격은 여기서 추적하지 않으며 날짜가 명시된 출처([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15)의 GPU 가격만 추적합니다. 주문 전에 실시간 판매 목록을 확인하십시오. 원화 가격은 조사하지 않아 USD로 표기하며, 한국 가격은 다를 수 있습니다.',
    metaDescription:
      '2026년 로컬 AI PC 3가지 구성: 보급형 7B–13B, 중급형 14B–33B, 고급형 70B. 정확한 부품 목록, 날짜가 명시된 GPU 가격과 2026년 DDR5 공급 부족 관련 안내를 확인하십시오.',
    twitterDescription:
      '로컬 AI PC 구성 가이드: 7B부터 70B 모델까지 완전한 부품 목록과 함께 예산별 3단계. 2026년에는 GPU와 RAM 가격이 급등했습니다. 날짜가 명시된 GPU 가격을 확인하십시오.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Ministral 3 8B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4070 Ti Super 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA RTX 5090 32 GB',
      'AMD Ryzen 7 7700',
      'AMD Ryzen 9 7900X',
    ],
    audience:
      '로컬 LLM 실행을 위해 PC를 구성하는 분들로, 예산 수준과 목표 모델 크기에 따라 결정을 내리는 사람들입니다. 양자화와 VRAM의 제약, PC 조립 기본 용어에 대한 이해는 있지만, 현재 특정 부품 SKU에 대해서는 잘 모르는 분들을 대상으로 합니다.',
    readTime: '14분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local AI workstation build',
    targetKeywords: [
      '로컬 llm pc 조립 2026',
      '로컬 ai 워크스테이션 구성 가이드',
      '로컬 llm 실행 최적 pc',
      'ai 워크스테이션 부품 목록',
      '로컬 ai pc 조립 방법',
    ],
    leadAnswerBlock:
      '**로컬 AI PC에서 최적의 구성은 목표 모델에 맞는 GPU VRAM을 갖춘 단계입니다. 보급형 구성은 7B–13B 모델을 실행하고, 중급형 구성은 14B–33B 모델을 실행하며, 고급형 구성은 70B 모델을 실행합니다. 2026년 GPU와 RAM 가격은 변동이 빨라 구성 총액은 추적하지 않으며, GPU 가격은 출처와 날짜를 함께 표기합니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년에 로컬 LLM을 실행하기 위한 PC를 어떻게 구성합니까?',
        answer:
          '실행하려는 가장 큰 모델에 따라 단계를 선택한 후 GPU를 중심으로 PC를 구성하십시오. 보급형 구성은 7B–13B 모델을 위해 RTX 4060 Ti 16 GB와 Ryzen 7 CPU를 조합합니다. 중급형 구성은 14B–33B 모델을 위해 RTX 4070 Ti Super 16 GB를 사용합니다. 고급형 구성은 70B 작업을 위해 RTX 5090 32 GB를 사용합니다. 2026년 메모리 공급 부족으로 GPU와 DDR5 RAM이 평소 가격을 크게 웃돌기 때문에, 구성 총액은 추적하지 않고 GPU 가격에만 출처와 날짜를 표기합니다.',
        bullets: [
          '보급형: RTX 4060 Ti 16 GB, 7B–13B 모델 실행 가능',
          '중급형: RTX 4070 Ti Super 16 GB, 14B–33B 모델 실행 가능',
          '고급형: RTX 5090 32 GB, 적극적인 양자화나 부분 오프로드로만 70B 모델 실행 가능',
          '2026년에는 GPU, RAM, SSD 가격이 모두 급등했습니다. 신품과 중고를 비교하십시오. 중고가 더 이상 항상 저렴하지는 않기 때문입니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '에디터 추천', anchor: '#editors-choice' },
      { label: '단계 비교', anchor: '#comparison-table' },
      { label: '어떤 구성을 선택해야 합니까?', anchor: '#which-build' },
      { label: '보급형 구성', anchor: '#budget-build' },
      { label: '중급형 구성', anchor: '#mid-build' },
      { label: '고급형 구성', anchor: '#enthusiast-build' },
      { label: '2026년 가격 급등이 구성에 미치는 영향', anchor: '#price-surge' },
      { label: '결정 순서도', anchor: '#decision-flowchart' },
      { label: '부품 구입처', anchor: '#where-to-buy' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**GPU가 단계를 결정하고, 나머지 구성이 GPU를 지원합니다.** 로컬 AI PC는 VRAM이 어떤 모델을 실행할 수 있는지를 결정하기 때문에 GPU부터 선택합니다. 목표 모델에 맞는 GPU VRAM을 갖춘 단계를 선택한 후, CPU, RAM, 파워 서플라이를 그 주변에 맞게 구성하십시오.',
          '**2026년 가격 상승이 구성 비용을 높였습니다.** 메모리 칩 공급 부족으로 GPU와 DDR5 RAM이 작년 가격을 훨씬 웃돌게 되었습니다. 구성 총액은 여기서 추적하지 않으며, RAM은 이제 부가 항목이 아니라 주요 비용 항목입니다(DDR5 가격은 2026년 8월까지 12개월 동안 약 500% 올랐습니다, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**보급형 구성:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650 W 파워 서플라이 — 7B–13B 모델을 사용 가능한 속도로 실행합니다. 이 가이드의 세 구성 중 비용이 가장 낮은 구성입니다.',
          '**중급형 구성:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850 W 파워 서플라이 — 14B–33B 모델을 실행하고, 7B–14B 모델을 즉각적인 응답 속도로 처리합니다.',
          '**고급형 구성:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000 W 파워 서플라이 — 이 가이드의 세 구성 중 70B 모델을 GPU 한 장으로 실행할 수 있는 것은 고급형뿐이며, 그것도 적극적인 양자화나 시스템 RAM으로의 부분 오프로드가 필요합니다. RTX 5090 한 장만으로도 신품 소매가가 약 $4,500–4,700입니다([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15).',
          '**RAM은 VRAM의 대체재가 아닙니다.** 시스템 RAM은 모델이 VRAM을 초과할 때 오프로드를 허용하지만, RAM에서 실행 중인 모델은 대화형 사용에 너무 느립니다. 모델에 맞는 충분한 VRAM을 구매하고, RAM은 운영 체제와 도구를 위해 구매하십시오.',
          '**파워 서플라이는 GPU에 맞게 확장됩니다.** 보급형은 650 W, 중급형은 850 W, 고급형은 1000 W가 필요합니다. RTX 5090 단독으로 575 W를 소비하기 때문입니다. GPU와 함께 파워 서플라이 예산을 책정하십시오.',
          '**중고가 더 이상 확실한 할인은 아닙니다.** [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(출처 갱신일 2026-10-15)에 따르면 중고 체결 RTX 5090($5,900–6,350)은 신품 소매가(약 $4,500–4,700)보다 높고, 중고 체결 RTX 4090($2,575–3,010)은 신품 매물 범위($2,000–3,000)와 겹치므로 구매 전에 둘을 비교하십시오. 검증된 작동 상태의 중고 카드는 분명히 더 저렴할 때는 여전히 살 만하지만, 항상 그렇다고 가정해서는 안 됩니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**보급형 구성:** GPU RTX 4060 Ti 16 GB — 7B 모델 및 대부분의 13B 모델 실행 가능.',
          '**중급형 구성:** GPU RTX 4070 Ti Super 16 GB — 14B 모델을 편안하게, 22B–33B 모델도 경량 작업 가능.',
          '**고급형 구성:** GPU RTX 5090 32 GB — 33B 모델을 편안하게 실행하며, 70B 모델은 적극적인 양자화나 부분 오프로드로만 실행 가능.',
          '**Q4_K_M 양자화 VRAM 기본 규칙:** 매개변수 10억 개당 약 0.6 GB, 컨텍스트 및 도구용 2–4 GB 추가.',
          '**시스템 RAM 가이드:** 보급형 32 GB, 중급형 64 GB, 고급형 128 GB.',
          '**단계별 파워 서플라이:** 보급형 650 W, 중급형 850 W, 고급형 1000 W — RTX 5090 단독으로 575 W 소비.',
          '**2026년 가격 현실:** GPU, DDR5 RAM, SSD가 모두 메모리 공급 부족으로 급등했습니다. 실시간 가격을 확인하고 신품과 중고를 비교하십시오.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '에디터 추천: 중급형 구성',
        highlight: true,
        content:
          '**대부분의 로컬 AI PC 구성자에게 중급형 구성은 성능, 비용, 여유 공간을 균형 있게 제공하는 단계입니다.** RTX 4070 Ti Super 16 GB를 중심으로 구성된 이 설정은 충분한 컨텍스트 공간으로 모든 14B 모델을 실행하고, 22B–33B 모델의 경량 작업도 처리하며, 7B–14B 모델을 즉각적인 속도로 응답합니다. 대부분의 14B급 작업에는 상당 기간 계속 쓸 수 있을 것으로 보이지만 모델 크기와 가격은 변합니다. 7B–13B 모델만 사용할 계획이라면 보급형으로 내려가고, 70B 작업이 꼭 필요하다면 고급형으로 올라가십시오. 중급형 구성은 오래 유지하고 싶은 기기를 위한 합리적인 기본 선택입니다.',
        callouts: [
          {
            type: 'note',
            text: '이 에디터 추천은 가격 대비 성능 비율만을 반영합니다. PromptQuorum은 어떤 제휴 프로그램에도 등록되어 있지 않으며, 아래 링크에는 제휴 태그가 포함되어 있지 않습니다. 이 링크는 수수료를 발생시키지 않는 단순 참조 링크입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Amazon에서 RTX 4070 Ti Super 가격 확인',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Newegg에서 RTX 4070 Ti Super 가격 확인',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026년 세 가지 구성 단계 비교',
        content:
          'VRAM 및 GPU 전력 수치는 제조사 사양입니다. 추론 속도는 각 단계 GPU 등급의 대략적인 일반 수치(PromptQuorum이 측정한 값이 아님)이고, 실제 속도는 양자화, 런타임, 컨텍스트 길이에 따라 달라집니다. 구성 총액은 추적하지 않습니다. 가격에 출처와 날짜를 표기한 것은 RTX 5090뿐이며(고급형 구성 참조), RAM 등 부품은 이 페이지에서 추적하지 않습니다. 신품과 중고 GPU 목록을 비교하십시오. 중고가 더 이상 항상 저렴하지는 않습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 AI PC에서 GPU의 VRAM이 실행 가능한 모델을 결정하며, 나머지 부품 목록은 GPU를 지원하도록 구성됩니다. 모델 크기에 따라 단계를 먼저 선택하십시오.',
          },
          {
            type: 'plain-terms',
            text: '구성을 스타 선수를 중심으로 구성된 팀으로 생각하십시오. GPU가 스타 선수이고, CPU, RAM, 파워 서플라이는 GPU를 작동 상태로 유지하기 위해 존재하는 지원 역할입니다. 필요한 모델에 맞는 GPU를 먼저 선택한 후 나머지를 그 주변에 구성하십시오.',
          },
        ],
        columns: ['단계', 'GPU', 'VRAM', '실행 가능', '파워 서플라이', '총액 (2026년)'],
        rows: [
          {
            '단계': '보급형',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '실행 가능': '7B–13B 모델',
            '파워 서플라이': '650 W',
            '총액 (2026년)': '미추적',
          },
          {
            '단계': '중급형',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            '실행 가능': '14B 편안하게, 22B–33B 경량',
            '파워 서플라이': '850 W',
            '총액 (2026년)': '미추적',
          },
          {
            '단계': '고급형',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            '실행 가능': '33B 편안하게, 70B는 적극적인 양자화나 부분 오프로드로만',
            '파워 서플라이': '1000 W',
            '총액 (2026년)': '미추적',
          },
        ],
      },
      whichBuild: {
        id: 'which-build',
        title: '어떤 구성을 선택해야 합니까?',
        content:
          '**실행하려는 가장 큰 모델이 단계를 결정하며, 예산이 이를 확인합니다.** 상황에 맞는 행을 찾으십시오.',
        columns: ['상황', '선택할 구성'],
        rows: [
          { '상황': '7B–13B 모델을 실행하며 이 가이드의 세 구성 중 가장 비용이 낮은 기기를 원하는 경우', '선택할 구성': '보급형 구성' },
          { '상황': '첫 로컬 AI PC이며 얼마나 멀리 갈지 모르는 경우', '선택할 구성': '보급형, 또는 여유를 위해 중급형' },
          { '상황': '14B 모델을 지속적으로 실행하며 즉각적인 응답을 원하는 경우', '선택할 구성': '중급형 구성' },
          { '상황': '22B–33B 경량 작업을 하며 오래 사용할 기기를 원하는 경우', '선택할 구성': '중급형 구성' },
          { '상황': '33B 모델을 집중적으로 사용하거나 충분한 미래 여유 공간이 필요한 경우', '선택할 구성': '고급형 구성' },
          { '상황': '적극적인 양자화나 부분 오프로드로 70B 모델을 실행할 수 있는 단일 GPU 기기가 필요한 경우', '선택할 구성': '고급형 구성' },
          { '상황': '2026년 가격 급등에도 불구하고 총액을 낮게 유지하고 싶은 경우', '선택할 구성': '어떤 단계든 가능 — 신품과 중고 GPU 목록 비교' },
          { '상황': '확실하지 않으며 수년간 유지할 가장 안전한 구성을 원하는 경우', '선택할 구성': '중급형 구성 — 에디터 추천' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: '보급형 구성: RTX 4060 Ti 16 GB',
        content:
          '**보급형 구성은 이 가이드의 세 구성 중 가장 비용이 낮은 로컬 AI PC이며, 모든 7B 모델과 대부분의 13B 모델을 실행합니다. 처음 사용하는 대부분의 사용자에게 충분한 성능입니다.** RTX 4060 Ti 16 GB를 중심으로 구성되며, 이 가이드에서 가장 저렴한 16 GB 카드로 2026년 공급 부족이 허용하는 한 총액을 낮게 유지합니다.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB VRAM, 165 W. 이 GPU 등급에서 7B 모델의 일반적인 속도는 약 20–25 tok/s이며(PromptQuorum이 측정한 값이 아니며 양자화와 컨텍스트에 따라 달라짐), 컨텍스트 여유 공간과 함께 14B 모델도 수용합니다. 16 GB 용량이 8 GB 버전을 선택하지 않는 이유입니다.',
          '**CPU — AMD Ryzen 7 7700:** 8코어, 적당한 전력 소비. CPU는 GPU 추론 중 작업이 거의 없으므로 이 단계에서는 중간급 칩이 적합합니다. 이 단계에서 CPU에 과도하게 지출하지 마십시오.',
          '**메인보드 — B650 칩셋:** Ryzen 7과 전체 크기 GPU를 PCIe에서 지원합니다. 이 단계에서는 고급 전원 공급이 필요하지 않습니다.',
          '**RAM — 32 GB DDR5:** 운영 체제, 도구, VRAM에서 실행되는 7B–13B 모델을 위해 충분합니다. RAM은 VRAM의 대체재가 아닙니다. 이 단계에서 32 GB로 충분하지만, DDR5는 이제 이 구성에서 두 번째로 큰 항목입니다.',
          '**스토리지 — 1 TB NVMe SSD:** 운영 체제와 여러 모델을 저장합니다. 7B Q4 모델 하나는 약 4–5 GB입니다.',
          '**파워 서플라이 — 650 W 80+ Gold:** 165 W GPU와 8코어 CPU에 대한 편안한 여유 공간.',
          '**케이스 및 쿨링 — 타워형 공냉 쿨러가 있는 미드타워:** 보급형은 발열이 적습니다. 공냉으로 충분합니다.',
          '**이 단계를 선택하는 이유:** 낮은 초기 비용, 낮은 전력 소비, 일반 채팅, 코드 지원, 요약을 담당하는 7B–13B 모델에 충분한 성능. **건너뛰어야 하는 이유:** 이미 14B 이상 모델을 원하신다면 중급형 구성부터 시작하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'RTX 4060 Ti는 반드시 16 GB 버전을 구입하십시오. 8 GB 버전은 동일한 GPU 다이를 사용하여 비슷한 속도로 실행되지만, 8 GB는 14B 모델을 수용할 수 없습니다. 추가 메모리가 이 선택의 유일한 이유입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'pc-component',
            label: 'Amazon에서 RTX 4060 Ti 16GB 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            label: 'Amazon에서 Ryzen 7 7700 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Amazon에서 32 GB DDR5 RAM 가격 확인',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: '중급형 구성: RTX 4070 Ti Super 16 GB',
        content:
          '**중급형 구성은 에디터 추천입니다. 14B 모델을 즉각적으로 실행하고, 22B–33B 경량 작업을 처리하며, 오래 유지할 수 있는 단계입니다.** RTX 4070 Ti Super 16 GB를 중심으로 구성되며, 14B급 모델에서 응답 지연이 감지되지 않을 만큼 충분히 빠릅니다.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB VRAM, 285 W. 보급형과 동일한 모델 수용 능력이지만 훨씬 빠릅니다. 7B–14B 모델이 즉각 응답하고, 22B–33B 경량 작업도 사용 가능합니다.',
          '**CPU — AMD Ryzen 9 7900X:** 12코어. 추론과 함께 데이터 준비 및 도구 실행을 위한 보급형보다 더 많은 여유 공간.',
          '**메인보드 — B650 또는 X670 칩셋:** 12코어 CPU와 285 W GPU를 위한 견고한 전원 공급.',
          '**RAM — 64 GB DDR5:** 운영 체제, 더 큰 컨텍스트 창, 모델과 함께 실행되는 RAG 파이프라인 같은 도구를 위한 공간. GPU 다음으로 가장 큰 항목입니다. 예산이 빠듯하다면 모델은 VRAM에 올라가므로 32 GB로도 이 단계의 모든 모델을 실행할 수 있습니다.',
          '**스토리지 — 2 TB NVMe SSD:** 상당한 모델 라이브러리를 저장합니다. 33B Q4 모델 하나는 약 18–20 GB입니다.',
          '**파워 서플라이 — 850 W 80+ Gold:** 지속적인 부하 하에서 285 W GPU와 12코어 CPU에 대한 편안한 여유 공간.',
          '**케이스 및 쿨링 — 240–280 mm AIO 또는 고급 공냉 쿨러가 있는 미드타워:** 중급형은 적당한 발열이 있습니다. 품질 쿨러로 장시간 추론 세션 중 CPU를 안정적으로 유지하십시오.',
          '**이 단계를 선택하는 이유:** 14B 모델을 지속적으로 실행하며 즉각적인 응답을 원하거나, 22B–33B 경량 작업을 하며 여유 공간이 필요한 경우. **건너뛰어야 하는 이유:** 7B–13B로 충분하다면 보급형이 더 저렴합니다. 70B가 필요하다면 16 GB GPU로는 불가능하므로 고급형으로 가십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '중급형 구성은 보급형과 동일한 모델을 수용합니다. 속도가 아닌 용량에 대한 비용입니다. 14B 모델이 일상적인 작업 부하가 되고 기다리는 것이 싫다면 이 단계를 선택하십시오.',
          },
          {
            type: 'note',
            text: '중고 RTX 4090 24 GB는 이제 이 단계보다 훨씬 높은 가격에 올라와 있어(중고 체결 $2,575–3,010, [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15) 더 이상 지름길이 되지 못합니다. RTX 4070 Ti Super는 구매 전에 신품과 중고를 비교하십시오. 가격은 여기서 추적하지 않습니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            label: 'Amazon에서 RTX 4070 Ti Super 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            label: 'Amazon에서 Ryzen 9 7900X 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            label: 'Amazon에서 64 GB DDR5 RAM 가격 확인',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: '고급형 구성: RTX 5090 32 GB',
        content:
          '**이 가이드의 세 구성 중 70B 모델을 GPU 한 장으로 실행할 수 있는 것은 고급형 구성뿐이며, 적극적인 양자화나 시스템 RAM으로의 부분 오프로드가 필요합니다. RTX 5090 32 GB가 핵심 부품입니다.** 이 단계를 선택하는 이유는 원시 속도가 아닌 VRAM 용량입니다. 속도는 부수적인 효과입니다. 2026년 가격 급등이 이 단계에 가장 강하게 영향을 미쳐 RTX 5090은 신품 소매가가 약 $4,500–4,700이고 MSRP는 $1,999입니다([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15). 그래서 GPU와 RAM 항목이 비용을 주도합니다.',
        items: [
          '**GPU — RTX 5090 32 GB (신품 소매가 약 $4,500–4,700, MSRP $1,999; 중고 체결 $5,900–6,350; [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15, 매물 데이터이며 견적이 아닙니다):** 32 GB GDDR7 VRAM, 575 W. 이 가이드에서 VRAM이 가장 큰 단일 GPU로, 이중 GPU 구성 없이도 70B 모델을 실행할 수 있지만 적극적인 양자화나 시스템 RAM으로의 부분 오프로드가 필요합니다. 33B 모델을 여유 공간과 함께 편안하게 실행합니다.',
          '**CPU — AMD Ryzen 9 7950X:** 16코어. 집중적인 추론과 함께 데이터 준비, 파인튜닝 실험, 도구 실행을 처리하기에 충분합니다.',
          '**메인보드 — X670E 칩셋:** 575 W GPU와 16코어 CPU를 위해 크기가 맞춰진 강력한 전원 공급 및 PCIe 5.0.',
          '**RAM — 128 GB DDR5:** 큰 컨텍스트 창, 동시에 로드된 여러 모델, 도구를 위한 공간 — 그리고 필요시 모델을 RAM으로 부분 오프로드할 수 있는 여유 공간. 128 GB 키트는 안정적으로 판매되는 경우가 드뭅니다. 64 GB 키트가 비용을 줄이는 대안입니다.',
          '**스토리지 — 4 TB NVMe SSD:** 70B Q4 모델 하나는 약 40 GB입니다. 4 TB 드라이브는 대형 모델의 큰 라이브러리를 수용합니다. 2026년에 4 TB 드라이브는 SSD 용량 중 가장 크게 올랐습니다.',
          '**파워 서플라이 — 1000 W 80+ Platinum:** RTX 5090 단독으로 575 W를 소비하기 때문에 필요합니다. 750 W 유닛은 부하 하에서 부족할 것입니다. 이 부품을 절약하지 마십시오.',
          '**케이스 및 쿨링 — 360 mm AIO가 있는 풀타워:** 575 W GPU와 16코어 CPU는 실제 발열을 발생시킵니다. 360 mm 수냉 쿨러는 지속적인 70B 추론 중 CPU를 안정적으로 유지합니다.',
          '**이 단계를 선택하는 이유:** 33B 또는 70B 모델이 필요하거나, 집중적인 배치 추론을 실행하거나, 수년간 교체 없이 사용할 기기를 원하는 경우. **건너뛰어야 하는 이유:** 7B–14B 모델에는 과하게 비쌉니다. 중급형 구성이 해당 크기에서 절반도 안 되는 비용으로 즉각적인 응답을 제공합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090은 단독으로 575 W를 소비합니다. 이 부품 목록의 1000 W 파워 서플라이와 함께 사용하십시오. 더 작은 유닛은 부하 하에서 제한될 것입니다. 조립 전에 벽면 회로가 총 소비 전력을 공급할 수 있는지 확인하십시오. 이는 전기 안전에 대한 조언이 아니며, NVIDIA와 파워 서플라이 제조사의 안내를 따르십시오.',
          },
          {
            type: 'note',
            text: 'Q4 양자화 70B 모델은 약 39–42 GB의 VRAM이 필요하므로, RTX 5090 32 GB조차 적극적인 양자화나 시스템 RAM으로의 부분 오프로드를 통해서만 70B를 실행할 수 있습니다. 이 구성의 128 GB RAM이 해당 오프로드에 필요한 공간을 제공합니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'pc-component',
            label: 'Amazon에서 RTX 5090 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            label: 'Amazon에서 Ryzen 9 7950X 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            label: 'Amazon에서 1000 W 파워 서플라이 가격 확인',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026년 가격 급등이 구성 계획에 미치는 영향',
        content:
          '**2026년 메모리 칩 공급 부족으로 GPU와 DDR5 RAM 가격이 평소보다 훨씬 높아졌으며, GPU와 RAM이 모든 구성에서 가장 큰 두 항목이므로 비용을 주도합니다.** 출시 가격이 아닌 현재 판매 가격을 기준으로 구성을 계획하십시오.',
        items: [
          '**GPU와 RAM이 총액을 주도합니다.** 모든 단계에서 GPU가 가장 큰 항목이고 DDR5 RAM이 이제 두 번째입니다. 가격 급등은 이 두 부품을 통해 다른 어떤 부품보다 구성 총액을 더 많이 변화시킵니다.',
          '**원인은 GPU가 아닌 메모리입니다.** GDDR, HBM, DRAM 공급 부족으로 빠른 메모리가 있는 모든 카드와 시스템 RAM 자체의 비용이 증가했습니다. VRAM이 많을수록 카드가 받은 타격이 컸습니다. RTX 5090은 신품 소매가가 약 $4,500–4,700이고 MSRP는 $1,999입니다(4,500 / 1,999 = 2.25배, [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15). 두 배가 넘습니다.',
          '**하위급 GPU 가격은 여기서 추적하지 않습니다.** 보급형과 중급형 구성의 RTX 4060 Ti 16 GB와 RTX 4070 Ti Super는 트래커의 대상이 아니므로 실시간 매물을 확인하십시오.',
          '**중고가 더 이상 확실한 할인은 아닙니다.** [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(출처 갱신일 2026-10-15)에 따르면 중고 체결 RTX 5090은 $5,900–6,350(신품 소매가 약 $4,500–4,700), 중고 체결 RTX 4090은 $2,575–3,010(중앙값 $2,860)이며 매물 데이터이지 견적이 아닙니다. 모든 카드에서 신품과 중고 목록을 비교하십시오. 검증된 작동 상태의 중고 카드는 분명히 더 저렴할 때만 가치가 있습니다.',
          '**RAM과 SSD는 크게 움직였고 CPU, 메인보드, 파워 서플라이는 거의 움직이지 않았습니다.** DDR5 가격은 2026년 8월까지 12개월 동안 약 500% 올랐습니다([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18; 128 GB DDR5-6400 키트가 $3,399에 등록). CPU, 메인보드, 파워 서플라이, SSD 가격은 이 페이지에서 추적하지 않으므로 이들도 확인하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 메모리 공급 부족으로 GPU와 DDR5 RAM 가격이 평소보다 훨씬 높아져, GPU와 RAM이 로컬 AI 구성에서 가장 큰 두 비용 항목이 되었습니다.',
          },
          {
            type: 'plain-terms',
            text: 'GPU는 기기의 가장 비싼 부품이며, 2026년에는 RAM도 비싸졌습니다. 메모리 공급 부족이 해소될 때까지 출시 가격은 역사로 취급하고, 구매 전에 신품과 중고를 비교하며, 모델에 필요한 것 이상의 VRAM이나 RAM을 구입하지 마십시오.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '결정 순서도: 네 가지 질문으로 구성 선택',
        content:
          '**네 가지 질문에 순서대로 답하면 대부분의 구성자가 단계에 도달합니다.**',
        items: [
          '**1. 실행하려는 가장 큰 모델은 무엇입니까?** 7B–13B: 보급형 구성. 14B–33B: 중급형 구성. 70B: 고급형 구성.',
          '**2. 엄격한 예산 상한은 얼마입니까?** 보급형 구성이 비용이 가장 낮고, 중급형이 중간, 고급형이 가장 높습니다. RTX 5090 한 장만으로도 신품 소매가가 약 $4,500–4,700입니다([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15).',
          '**3. 새 GPU를 구입합니까, 중고 GPU를 구입합니까?** 둘 다 비교하십시오. [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(출처 갱신일 2026-10-15)에 따르면 중고 체결 RTX 5090과 RTX 4090은 신품과 같거나 더 높으므로, 중고는 분명히 더 저렴할 때만 올바른 선택입니다.',
          '**4. 전원 공급 및 공간 계획이 성립합니까?** 부품을 주문하기 전에 파워 서플라이가 단계에 맞는지(650 W / 850 W / 1000 W) 확인하고, 케이스가 GPU와 쿨러를 수용하는지 확인하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 AI PC 구성을 선택할 때는 먼저 가장 큰 모델 크기, 다음으로 예산 상한, 세 번째로 새 GPU 대 중고 GPU, 마지막으로 전원 공급 및 공간 계획 순으로 답하십시오.',
          },
          {
            type: 'plain-terms',
            text: '실제로 실행하려는 가장 큰 모델부터 시작하여 단계를 결정하십시오. 그런 다음 예산을 확인하고, 중고 GPU를 구입할지 결정하고, 파워 서플라이와 케이스가 부품에 맞는지 확인하십시오. 이 순서대로 하면 모델을 실행할 수 없는 구성을 피할 수 있습니다.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '부품 구입처',
        content:
          '**대형 소매업체에는 이 구성의 모든 부품이 있습니다. 특히 GPU는 신품과 중고 목록을 비교하십시오.** 아래 링크는 단순 제품 검색 링크입니다. 제휴 태그가 없으며 수수료가 발생하지 않습니다.',
        items: [
          '**Amazon 및 Newegg:** CPU, RAM, SSD, 파워 서플라이, 케이스의 가장 넓은 재고. 새 GPU와 DDR5 재고는 더 부족하며 2026년 가격 급등 수준으로 책정되어 있습니다.',
          '**중고 GPU 시장:** 확인해 볼 만하지만 더 이상 확실한 절약은 아닙니다. [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(출처 갱신일 2026-10-15)에 따르면 중고 체결 RTX 5090과 RTX 4090은 신품과 같거나 더 높습니다. 분명히 더 저렴하고 작동이 검증된 경우에만 중고를 구입하십시오.',
          '**지역 전자 제품 매장 및 PC 전문점:** CPU, 메인보드, 파워 서플라이의 좋은 공급처입니다. CPU와 메인보드 번들도 유용합니다.',
          '**GPU를 먼저 구입하십시오.** GPU가 가장 크고 변동성이 높은 항목입니다. 수용 가능한 가격으로 GPU를 확보한 후, 지원 부품을 그 주변에 구입하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 가격 급등으로 이 가이드는 구성 총액을 추적하지 않습니다. 조립하기 전에 항상 GPU와 RAM의 현재 소매 목록을 여십시오. 두 부품이 함께 구성 비용을 주도합니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            label: 'Amazon에서 GPU 탐색',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            label: 'Newegg에서 Ryzen CPU 탐색',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            label: 'Amazon에서 DDR5 RAM 탐색',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            label: 'Amazon에서 NVMe SSD 탐색',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            label: 'Amazon에서 파워 서플라이 탐색',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '로컬 AI PC 구성 시 흔한 실수',
        items: [
          '**GPU보다 CPU를 먼저 선택하는 것.** GPU가 기기가 실행하는 모델을 결정하며, CPU는 추론 중 작업이 거의 없습니다. GPU를 먼저 선택한 후 CPU를 그것을 지원하도록 구성하십시오.',
          '**VRAM 대신 시스템 RAM을 구입하는 것.** RAM은 모델이 VRAM을 초과할 때 오프로드를 허용하지만, RAM에서 실행 중인 모델은 대화형 사용에 너무 느립니다. 모델에 맞는 충분한 VRAM을 구입하고, RAM은 운영 체제와 도구를 위해서만 구입하십시오.',
          '**파워 서플라이를 과소평가하는 것.** RTX 5090 단독으로 575 W를 소비합니다. 부하 하에서 제한되는 파워 서플라이는 안정적으로 실행되는 느린 GPU보다 나쁩니다. 단계에 맞게 파워 서플라이를 조정하십시오.',
          '**출시 가격에 고정되는 것.** 2026년 가격 급등으로 GPU 권장 소비자가와 작년의 RAM 가격은 더 이상 현실을 반영하지 않습니다. GPU와 RAM을 실시간 소매 가격 기준으로 예산을 책정하고, 중고가 더 저렴하다고 가정하지 말고 중고 시장과 비교하십시오.',
          '**보급형 구성에 RTX 4060 Ti 8 GB를 구입하는 것.** 16 GB 버전과 같은 이름이지만 14B 모델을 수용할 수 없습니다. 목록에서 16 GB 변형을 확인하십시오.',
          '**7B 모델을 위해 과도하게 지출하는 것.** 7B 모델이 사용 사례를 충족한다면 고급형 구성은 수천 달러와 수백 와트를 낭비합니다. 예산이 아닌 모델에 맞게 단계를 조정하십시오.',
          '**케이스 및 쿨링 계획을 건너뛰는 것.** 575 W GPU와 16코어 CPU는 실제 발열을 발생시킵니다. 부품을 주문하기 전에 케이스가 GPU와 쿨러를 수용하고 공기 흐름이 원활한지 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[로컬 LLM 최적 GPU 구매 가이드 2026](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: GPU 구매 안내와 여기 구성 총액의 배경이 되는 2026년 가격 급등 상황.',
          '[로컬 LLM 워크스테이션 구성](/ko/local-llms/local-llm-workstation-build) — PromptQuorum: 고급형 단계 이면의 이중 GPU 70B 워크스테이션을 위한 부품 목록, 쿨링, 파워 서플라이 가이드.',
          '[NVIDIA GeForce RTX 40 및 50 시리즈 사양](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti, 4070 Ti Super, 5090의 공식 VRAM 용량 및 전력(TGP) 수치.',
          '[PCPartPicker](https://pcpartpicker.com) — AMD Ryzen CPU, DDR5 RAM, NVMe SSD, 파워 서플라이의 실시간 부품 가격.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: "GPU 1개 구성에 1000W 파워서플라이는 과한가요?",
            a: "RTX 5090에는 과하지 않습니다. 정격 575W이며 순간적으로 그 이상 치솟을 수 있어 NVIDIA 레퍼런스는 1000W 파워를 제시합니다. 이 가이드의 보급형·중급형 구성에는 과합니다. 650W와 850W(80+ Gold)로 RTX 4060 Ti 16GB와 RTX 4070 Ti Super 16GB에 충분한 여유가 있습니다. 와트 수를 늘리기보다 12V-2x6 커넥터를 기본 지원하는 ATX 3.1 제품을 고르세요.",
          },
          {
            q: '2026년에 로컬 AI PC를 구성하는 데 얼마나 비용이 듭니까?',
            a: '2026년 GPU와 RAM 가격은 변동이 빠르고 날짜가 명시된 출처가 있는 것은 GPU 가격뿐이므로 구성 총액은 추적하지 않습니다. 고급형 구성의 RTX 5090은 신품 소매가가 약 $4,500–4,700이고([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15), DDR5 가격은 2026년 8월까지 12개월 동안 약 500% 올랐습니다([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). 선택한 단계의 부품 목록 현재 가격을 합산하십시오. 원화 가격은 조사하지 않아 USD로 표기하며, 한국 가격은 다를 수 있습니다.',
          },
          {
            q: '로컬 AI PC에 어떤 GPU를 사용해야 합니까?',
            a: '목표 모델 크기에 따라 GPU를 선택하십시오. 7B–13B 모델 보급형 구성에는 RTX 4060 Ti 16 GB, 14B–33B 모델 중급형 구성에는 RTX 4070 Ti Super 16 GB, 70B 작업 고급형 구성에는 RTX 5090 32 GB가 적합합니다. GPU가 기기가 실행하는 모델을 결정하므로 먼저 선택하고, 나머지 부품 목록을 그 주변에 구성하십시오.',
          },
          {
            q: '로컬 AI PC에 RAM이 얼마나 필요합니까?',
            a: '보급형 구성에 32 GB, 중급형에 64 GB, 고급형에 128 GB를 계획하십시오. 시스템 RAM은 VRAM의 대체재가 아닙니다. RAM에서 실행 중인 모델은 대화형 사용에 너무 느립니다. RAM은 운영 체제, 컨텍스트, 도구를 위한 것입니다. 모델 자체를 위해 GPU에 충분한 VRAM을 구입하십시오.',
          },
          {
            q: '로컬 AI PC에 어떤 파워 서플라이가 필요합니까?',
            a: '단계에 맞게 파워 서플라이를 조정하십시오: 보급형 구성에 650 W, 중급형에 850 W, 고급형에 1000 W. 고급형 단계는 RTX 5090 단독으로 575 W를 소비하기 때문에 1000 W가 필요합니다. 용량 부족 파워 서플라이는 부하 하에서 불안정성을 초래하므로 이 부품을 절약하지 마십시오.',
          },
          {
            q: '2026년에 GPU 부품을 새 것으로 구입해야 합니까, 중고로 구입해야 합니까?',
            a: '결정하기 전에 신품과 중고를 비교하고, 중고가 더 저렴하다고 가정하지 마십시오. [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(출처 갱신일 2026-10-15)에 따르면 중고 체결 RTX 5090은 $5,900–6,350으로 신품 소매가(약 $4,500–4,700)보다 높고, 중고 체결 RTX 4090은 $2,575–3,010입니다. 검증된 작동 상태의 중고 카드는 분명히 더 저렴할 때만 구입할 가치가 있습니다. CPU, RAM, SSD, 파워 서플라이는 새 것으로 구입하는 것이 좋습니다.',
          },
          {
            q: '단일 GPU 구성으로 70B 모델을 실행할 수 있습니까?',
            a: '네, 고급형 구성으로 가능합니다. RTX 5090 32 GB는 이 가이드의 단일 GPU 중 VRAM이 가장 크지만, Q4 양자화 70B 모델은 약 39–42 GB의 VRAM이 필요하므로 적극적인 양자화나 시스템 RAM으로의 부분 오프로드를 통해서만 70B를 실행할 수 있습니다. 고급형 구성의 128 GB RAM이 해당 오프로드에 필요한 공간을 제공합니다.',
          },
          {
            q: '보급형 대비 추가 비용을 고려할 때 중급형 구성이 가치가 있습니까?',
            a: '14B급 모델을 정기적으로 실행한다면 그렇습니다. 보급형과 중급형 구성은 비슷한 모델을 수용하지만, 중급형의 RTX 4070 Ti Super가 훨씬 빠릅니다. 14B 모델이 느리게 응답하는 대신 즉각적으로 응답하고, 22B–33B 경량 작업이 사용 가능해집니다. 7B–13B 모델만으로 충분하다면 보급형이 더 저렴해 가성비가 좋습니다.',
          },
          {
            q: '로컬 AI PC에 Threadripper CPU가 필요합니까?',
            a: '아니요. 이 가이드의 세 가지 구성에는 소비자용 Ryzen CPU로 충분합니다. 보급형 단계에는 Ryzen 7, 중급형과 고급형 단계에는 Ryzen 9. Threadripper는 파인튜닝과 추론을 동시에 실행하는 이중 GPU 기기에만 비용 가치가 있습니다. 이는 단일 GPU 구성의 범위를 벗어납니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[전체 구매 가이드로 구성에 맞는 GPU 선택](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 현재 가격과 가격 급등 계산이 포함된 네 가지 예산 단계의 GPU 8종.',
          '[프로덕션 사용을 위한 이중 GPU 70B 워크스테이션 구성 보기](/ko/local-llms/local-llm-workstation-build) — 이 가이드의 고급형 구성을 넘어서는 70B급 모델용 48 GB VRAM 이중 GPU 단계.',
          '[PC 구성 대 클라우드 GPU 대여 비교](/ko/power-local-llm/cloud-gpu-rental-guide-2026) — 가끔 컴퓨팅에는 자체 하드웨어 소유보다 대여가 나을 때.',
          '[구성 전 각 모델 크기에 필요한 VRAM 계산](/ko/local-llms/how-much-vram-local-llm) — 여기 단계 선택 이면의 모델 크기별 완전한 VRAM 방법론.',
          '[로컬 AI를 위한 PC 구성의 대안으로 Mac 고려](/ko/power-local-llm/best-mac-for-local-ai-2026) — 통합 메모리를 갖춘 Apple Silicon이 로컬 AI를 위한 전용 GPU PC를 능가하는 경우.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 AI 워크스테이션 구성 가이드 2026: 예산별 3단계',
      description: '2026년 로컬 AI PC 세 가지 완전 구성: 보급형 7B–13B, 중급형 14B–33B, 고급형 70B. 정확한 부품 목록, 예상 tokens/s, 2026년 GPU·RAM·SSD 공급 부족을 반영해 다시 산정한 총 비용.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-ai-workstation-build-guide',
      inLanguage: 'ko',
      datePublished: '2026-05-24',
      dateModified: '2026-11-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/ko/power-local-llm](https://www.promptquorum.com/ko/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: '로컬 AI 워크스테이션 구성 가이드 2026', item: '[www.promptquorum.com/ko/power-local-llm/local-ai-workstation-build-guide](https://www.promptquorum.com/ko/power-local-llm/local-ai-workstation-build-guide)' },
      ],
    },
  },
}
