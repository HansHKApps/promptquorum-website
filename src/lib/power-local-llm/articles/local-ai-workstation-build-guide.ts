// Power Local LLM — Local AI Workstation Build Guide: 3 Budget Tiers
// Slug: local-ai-workstation-build-guide
// Affiliate buying guide. Outbound component links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// All 9 locales are authored.
//
// Prices: build totals are not tracked. Only RTX 5090 / RTX 4090 figures (InsiderLLM,
// US market, fetched 2026-11-27) and one DDR5 figure (Hardware Busters, 2026-08-18).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-en.webp',
    title: 'Local AI Workstation Build Guide 2026: 3 Budget Tiers',
    seoTitle: 'Local AI PC Build 2026: Budget to 70B Workstation',
    intro:
      'Most local-AI build guides start with the CPU, but the GPU and its VRAM largely decide which models the machine can run — every other part is chosen to support that GPU. This guide gives three parts lists for a local-LLM PC: a budget build for 7B-13B models, a mid build for 14B-33B models, and an enthusiast build for 70B work. Each tier names its main components and the model sizes it targets. One caveat on price: memory-supply shortages pushed up high-VRAM GPU and DDR5 RAM prices in 2026. Build totals are not tracked here; the only GPU prices given are for the RTX 5090 and RTX 4090, from the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market, fetched 2026-11-27) — check live listings before you order.',
    metaDescription:
      'Three local-AI PC builds for 2026: budget 7B-13B, mid 14B-33B and enthusiast 70B tiers. Parts lists, a few dated US GPU prices and notes on DDR5 price rises.',
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
      '**Choose the local-AI PC build whose GPU VRAM fits your target model. The budget build targets 7B-13B models, the mid build 14B-33B (the larger ones with lower quantization or partial offload), and the enthusiast build 70B with the same trade-offs. Build totals are not tracked here because 2026 GPU and RAM prices move quickly; the few GPU prices shown carry a source and date.**',
    quickAnswerTop: {
      en: {
        question: 'How do I build a PC for running local LLMs in 2026?',
        answer:
          'Choose your tier by the largest model you want to run, then build around the GPU. A budget build pairs an RTX 4060 Ti 16 GB with a Ryzen 7 CPU for 7B-13B models. A mid build uses an RTX 4070 Ti Super 16 GB for 14B-33B models, where the larger ones need lower quantization or partial offload. An enthusiast build uses an RTX 5090 32 GB for 70B work, also with those trade-offs. GPU and DDR5 RAM prices rose sharply in 2026, so build totals are not tracked here and only the few GPU prices shown carry a source and date.',
        bullets: [
          'Budget build: RTX 4060 Ti 16 GB, runs 7B-13B models',
          'Mid build: RTX 4070 Ti Super 16 GB, targets 14B-33B models (larger ones with trade-offs)',
          'Enthusiast build: RTX 5090 32 GB, runs 70B models only with aggressive quantization or partial offload',
          'GPU and DDR5 RAM prices rose sharply in 2026 — compare new and used GPUs, because used is not reliably cheaper',
        ],
        updatedDate: '2026-11-27',
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
          '**2026 prices raised build costs.** A memory-supply shortage pushed up high-VRAM GPU and DDR5 RAM prices. Build totals are not tracked here, and RAM can be a major cost line (DDR5 prices rose about 500% in 12 months to August 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Budget build:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650 W PSU — runs 7B-13B models at usable speed. The lowest-cost of the three builds in this guide.',
          '**Mid build:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850 W PSU — runs 14B-class models much faster than the budget card; the larger 22B-33B models need lower quantization or partial offload to system RAM.',
          '**Enthusiast build:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000 W PSU — the only one of the three builds here that can run a 70B model on a single GPU, and only with aggressive quantization or partial offload to system RAM. The RTX 5090 alone lists at around $4,500–4,700 new ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US market, fetched 2026-11-27).',
          '**RAM is not a substitute for VRAM.** System RAM lets a model spill out of VRAM, but a model running partly or fully from RAM is usually much slower, often too slow for comfortable interactive use. Buy as much VRAM as your target model needs; RAM mainly serves the operating system, tooling and any offload.',
          '**The power supply scales with the GPU.** A budget build needs 650 W, the mid build 850 W, and the enthusiast build 1000 W because the RTX 5090 alone draws 575 W. Budget the PSU alongside the card.',
          '**Used is no longer a guaranteed discount.** Per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market, fetched 2026-11-27; used figures are eBay US sold listings, October 2026; the new-price ranges are not dated on the source), used sold RTX 5090 listings ($5,900–6,350) exceed new retail (around $4,500–4,700) and used sold RTX 4090 listings ($2,575–3,010) overlap the new listing range ($2,000–3,000), so compare both before buying. A verified-working used card is still worth taking when it is clearly cheaper — but never assume it is.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Budget build:** RTX 4060 Ti 16 GB GPU — runs 7B and most 13B models.',
          '**Mid build:** RTX 4070 Ti Super 16 GB GPU — runs 14B-class models; 22B-33B with lower quantization or partial offload.',
          '**Enthusiast build:** RTX 5090 32 GB GPU — runs 33B comfortably; 70B only with aggressive quantization or partial offload.',
          '**VRAM rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**System RAM guidance:** 32 GB for the budget build, 64 GB for the mid build, 128 GB for the enthusiast build.',
          '**Power supply by tier:** 650 W budget, 850 W mid, 1000 W enthusiast — the RTX 5090 draws 575 W on its own.',
          '**2026 price reality:** GPU and DDR5 RAM prices rose sharply — confirm live prices and compare new against used GPUs.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: The Mid Build',
        highlight: true,
        content:
          '**Our editorial pick for most buyers is the mid build.** Built around an RTX 4070 Ti Super 16 GB, it runs 14B-class models at Q4 with room for context, can handle 22B-33B models with lower quantization or partial offload, and is much faster than the budget card. Choose the budget build if your ceiling is firmly 7B-13B models; step up to the enthusiast build if you specifically need more VRAM for 33B or 70B work. Model sizes and prices change, so re-check before you buy.',
        callouts: [
          {
            type: 'note',
            text: 'This Editor\'s Choice is an editorial judgment based on manufacturer specifications and typical model file sizes. It is not based on PromptQuorum testing or on a price comparison; the price of the RTX 4070 Ti Super is not tracked here. PromptQuorum is not enrolled in any affiliate program and the links below carry no affiliate tags — they are plain reference links that earn no commission.',
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
          'GPU VRAM and power figures are manufacturer specifications. The Runs column is an estimate from model file sizes and VRAM, not a PromptQuorum test; real results vary with quantization, runtime and context length. Build totals are not tracked: this page gives prices for the RTX 5090 and RTX 4090 only, not for the other parts. Compare new and used GPU listings: used is not reliably cheaper.',
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
            'Runs': '14B; 22B-33B with lower quant or offload',
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
          { 'Your situation': 'I run 14B models constantly and want faster replies', 'Build this': 'Mid build' },
          { 'Your situation': 'I do light 22B-33B work and accept lower quant or offload', 'Build this': 'Mid build' },
          { 'Your situation': 'I run 33B models heavily or want more VRAM headroom', 'Build this': 'Enthusiast build' },
          { 'Your situation': 'I need a single-GPU machine that can run 70B models only with aggressive quantization or partial offload', 'Build this': 'Enthusiast build' },
          { 'Your situation': 'I want to keep the total down despite the 2026 surge', 'Build this': 'Any tier — compare new and used GPU listings' },
          { 'Your situation': 'I am unsure and want a middle option', 'Build this': 'Mid build — the Editor\'s Choice' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Budget Build: RTX 4060 Ti 16 GB',
        content:
          '**The budget build is the lowest-cost of the three builds in this guide and runs 7B models and, at Q4, most 13B models — enough for many first-time users.** It is built around the RTX 4060 Ti 16 GB, the lowest-priced 16 GB card in this guide, which helps keep the total down.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB VRAM, 165 W. 14B models at Q4 fit with context headroom. No speed figure is given here: PromptQuorum has not measured this card, and speed varies with quantization, runtime and context length. The 16 GB capacity is the reason to pick it over the 8 GB version.',
          '**CPU — AMD Ryzen 7 7700:** 8 cores, modest power draw. The CPU does little work during GPU inference, so a mid-range chip is correct here — do not overspend on the CPU in this tier.',
          '**Motherboard — B650 chipset:** supports the Ryzen 7 and a single full-size GPU on PCIe. No need for high-end power delivery at this tier.',
          '**RAM — 32 GB DDR5:** enough for the operating system, tooling, and a 7B-13B model running in VRAM. RAM is not a VRAM substitute. DDR5 prices rose sharply in 2026, so check the live price.',
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
          '**The mid build is the Editor\'s Choice: a faster card for daily 14B work, with larger 22B-33B models possible at lower quantization or with partial offload.** It is built around the RTX 4070 Ti Super 16 GB, whose higher memory bandwidth makes it much faster than the budget card on the same models.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB VRAM, 285 W. The same capacity as the budget tier, with much higher memory bandwidth, so 7B-14B models respond noticeably faster. A 33B Q4 model (roughly 18-20 GB) does not fit in 16 GB, so the larger models in the 22B-33B range need a lower quantization or partial offload.',
          '**CPU — AMD Ryzen 9 7900X:** 12 cores. More headroom than the budget CPU for data preparation and running tooling alongside inference.',
          '**Motherboard — B650 or X670 chipset:** solid power delivery for the 12-core CPU and a 285 W GPU.',
          '**RAM — 64 GB DDR5:** room for the operating system, larger context windows, partial offload, and tooling such as a RAG pipeline running next to the model. If budget is tight, 32 GB is enough for models that fit entirely in VRAM; offloaded models benefit from more.',
          '**Storage — 2 TB NVMe SSD:** holds a sizeable model library — a 33B Q4 model is roughly 18-20 GB.',
          '**PSU — 850 W 80+ Gold:** comfortable headroom for the 285 W GPU and the 12-core CPU under sustained load.',
          '**Case and cooling — mid-tower with a 240-280 mm AIO or high-end air cooler:** the mid tier produces moderate heat; a quality cooler keeps the CPU stable during long inference runs.',
          '**Why build this tier:** you run 14B models constantly and want faster replies, or you do light 22B-33B work and accept the trade-offs. **Why skip it:** if 7B-13B is enough, the budget build costs less; if 70B is your goal, 16 GB is far too little — look at the enthusiast build.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The mid build fits the same models as the budget build — you are paying for speed, not capacity. Build this tier if 14B models will be a daily workload and waiting on them would annoy you.',
          },
          {
            type: 'note',
            text: 'A used RTX 4090 24 GB is an expensive shortcut: eBay US sold listings were $2,575–3,010 in October 2026 ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US market, fetched 2026-11-27). The RTX 4070 Ti Super\'s price is not tracked here, so compare live new and used listings before you buy.',
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
          '**Of the three builds here, only the enthusiast build can run a 70B model on a single GPU, and only with aggressive quantization or partial offload to system RAM — its RTX 5090 32 GB is the headline part.** Build this tier mainly for VRAM capacity. The RTX 5090 lists at around $4,500–4,700 new against a $1,999 MSRP ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US market, fetched 2026-11-27), so expect the GPU to be the largest cost.',
        items: [
          '**GPU — RTX 5090 32 GB (new retail about $4,500–4,700, a range the source does not date, vs $1,999 MSRP; used eBay US sold listings $5,900–6,350, October 2026; [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US market, fetched 2026-11-27; not quotes):** 32 GB GDDR7 VRAM, 575 W. The largest-VRAM single GPU in this guide. It runs 33B models at Q4 with room to spare, but a 70B model only with aggressive quantization or partial offload to system RAM.',
          '**CPU — AMD Ryzen 9 7950X:** 16 cores. Enough to run data preparation, fine-tuning experiments, and tooling alongside heavy inference.',
          '**Motherboard — X670E chipset:** strong power delivery and PCIe 5.0, sized for a 575 W GPU and the 16-core CPU.',
          '**RAM — 128 GB DDR5:** room for large context windows, multiple models loaded at once, tooling, and partial offload to RAM. A 64 GB kit is the lower-cost alternative.',
          '**Storage — 4 TB NVMe SSD:** a 70B Q4 model is roughly 40 GB; a 4 TB drive holds a large library of large models.',
          '**PSU — 1000 W 80+ Platinum:** NVIDIA lists 575 W graphics power and 1000 W required system power for the RTX 5090 (requirements vary with the rest of the system). A 750 W unit is below that guidance, so do not undersize this part.',
          '**Case and cooling — full-size case with a 360 mm AIO:** the 575 W GPU and 16-core CPU produce real heat; plan airflow and CPU cooling for sustained load.',
          '**Why build this tier:** you want 33B models with headroom, you are prepared to run 70B with trade-offs, or you run heavy batch inference. **Why skip it:** for 7B-14B models it is more than you need — the mid build runs those sizes without the cost of an RTX 5090.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The RTX 5090 draws 575 W on its own. Pair it with the 1000 W power supply in this parts list — a smaller unit is below NVIDIA\'s guidance and may cause shutdowns or instability under load. Confirm your wall circuit can supply the full draw before building. This is not electrical-safety advice; follow NVIDIA\'s and the power-supply maker\'s guidance.',
          },
          {
            type: 'note',
            text: 'A 70B model at Q4 needs roughly 39-42 GB of VRAM, so even the RTX 5090 32 GB cannot hold it entirely: it needs a lower quantization or partial offload to system RAM. The 128 GB of RAM in this build gives that offload room to work.',
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
          '**A 2026 memory-supply shortage pushed high-VRAM GPU and DDR5 RAM prices up sharply, and these two parts can take a large share of a build budget.** Plan around current listing prices, not launch prices.',
        items: [
          '**Check the GPU and RAM first.** The GPU is usually the most expensive part of a local-AI build, and DDR5 RAM became much more expensive in 2026. This page tracks no build totals, so it does not rank the cost lines.',
          '**Memory supply is a main cause.** The [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) attributes the GPU price rise mainly to a GDDR7 shortage as memory production shifts toward AI data centres, and says cards with 16 GB or more face the tightest supply. For DDR5, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) likewise points to production moving toward HBM and server DRAM. The RTX 5090 lists at around $4,500–4,700 new against a $1,999 MSRP (4,500 / 1,999 = 2.25×; InsiderLLM, US market, fetched 2026-11-27) — more than double.',
          '**Lower-end GPU prices are not tracked here.** The RTX 4060 Ti 16 GB and RTX 4070 Ti Super used in the budget and mid builds are not covered by the tracker, so check live listings for them.',
          '**Used is not a reliable discount.** The [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market, fetched 2026-11-27) shows used eBay US sold listings in October 2026 of $5,900–6,350 for the RTX 5090, against new retail of around $4,500–4,700 (not dated on the source), and $2,575–3,010 for the RTX 4090 (median $2,860, 216 sales); these are listing data, not quotes. Compare new and used for every card; buy a verified-working used card only when it is clearly cheaper.',
          '**DDR5 moved a lot; other parts are not tracked.** DDR5 prices rose about 500% in 12 months to August 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18; a 128 GB DDR5-6400 kit was listed at $3,399). CPU, motherboard, power-supply and SSD prices are not tracked on this page, so check them too.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A 2026 memory shortage pushed high-VRAM GPU and DDR5 RAM prices up sharply, so check both first when you price a local-AI build.',
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
          '**2. What is your hard budget ceiling?** Budget build for the lowest cost, mid build for the middle, enthusiast build for the highest — the RTX 5090 alone lists at around $4,500–4,700 new ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US market, fetched 2026-11-27).',
          '**3. New or used GPU?** Compare both — per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market, fetched 2026-11-27), used RTX 5090 sold listings sit above new retail, and used RTX 4090 sold listings overlap the new listing range, so a used card makes sense only when it is clearly cheaper.',
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
          '**Large retailers carry the kinds of parts in these builds; compare new and used listings for the GPU specifically.** The links below are plain product-search links; they carry no affiliate tags and earn no commission.',
        items: [
          '**Amazon and Newegg:** a broad range of CPUs, RAM, SSDs, power supplies and cases. Check live availability and price for new GPUs and DDR5.',
          '**Used GPU market:** worth checking, but not a guaranteed saving — per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market, fetched 2026-11-27), used RTX 5090 sold listings sit above new retail, and used RTX 4090 sold listings overlap the new listing range. Buy used only when it is clearly cheaper and verified working.',
          '**Micro Center (US, in-store):** another place to compare new GPU and CPU prices if a store is within reach; check for CPU-plus-motherboard bundles.',
          '**Buy the GPU first.** It is usually the most expensive part and its price can move quickly — secure it at a price you accept, then buy the supporting parts around it.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Build totals are not tracked in this guide. Open the current retailer listings for the GPU and the RAM before building — they can make up a large share of the cost.',
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
          '**Buying system RAM instead of VRAM.** RAM lets a model spill out of VRAM, but a model running partly or fully from RAM is usually much slower, often too slow for comfortable interactive use. Buy as much VRAM as your target model needs.',
          '**Undersizing the power supply.** The RTX 5090 alone draws 575 W. A power supply that browns out under load is worse than a slower GPU that runs stably — match the PSU to the tier.',
          '**Anchoring on launch prices.** The 2026 surge means GPU MSRPs and last year\'s RAM prices no longer reflect reality. Budget the GPU and the RAM against live retailer prices, and compare the used market instead of assuming it is cheaper.',
          '**Buying the 8 GB RTX 4060 Ti for the budget build.** It shares a name with the 16 GB version but cannot fit a 14B model. Confirm the 16 GB variant in the listing.',
          '**Overbuilding for 7B models.** If 7B models cover your use case, the enthusiast build adds a far more expensive GPU and a much higher power draw (575 W against 165 W for the budget card) for little benefit. Match the tier to the model, not to the budget you happen to have.',
          '**Skipping case and cooling planning.** A 575 W GPU plus a 16-core CPU produces real heat. Confirm the case fits the GPU and cooler and has airflow before ordering parts.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: GPU buying guidance and background on the 2026 price rise.',
          '[Local LLM Workstation Build](/local-llms/local-llm-workstation-build) — PromptQuorum: dual-GPU 70B workstation parts list, cooling, and power-supply guidance behind the enthusiast tier.',
          '[NVIDIA GeForce RTX 40 and 50 Series Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Official VRAM capacity and power (TGP) figures for the RTX 4060 Ti, 4070 Ti Super, and 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live component pricing for AMD Ryzen CPUs, DDR5 RAM, NVMe SSDs, and power supplies.',
          '[InsiderLLM: NVIDIA GPU prices](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — Third-party tracker for the RTX 5090 and RTX 4090 figures and the GPU supply explanation (US market, fetched 2026-11-27).',
          '[Hardware Busters: DDR5 memory prices](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — Source for the DDR5 price-rise figures (2026-08-18).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: "Is a 1000 W power supply overkill for a single-GPU build?",
            a: 'Not for an RTX 5090: NVIDIA lists 575 W graphics power and 1000 W required system power for it (requirements vary with the rest of the system). For the budget and mid builds in this guide, 1000 W is more than needed: 650 W and 850 W (80+ Gold) cover the RTX 4060 Ti 16 GB and RTX 4070 Ti Super 16 GB with headroom. An ATX 3.1 unit with a native 12V-2x6 connector matters more than simply buying more watts.',
          },
          {
            q: 'How much does it cost to build a PC for local AI in 2026?',
            a: 'Build totals are not tracked here, because 2026 GPU and RAM prices move quickly. The RTX 5090 in the enthusiast build lists at around $4,500–4,700 new ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US market, fetched 2026-11-27), and DDR5 prices rose about 500% in 12 months to August 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Add up the live prices of the parts list for the tier you pick.',
          },
          {
            q: 'What GPU should I put in a local-AI PC build?',
            a: 'Pick the GPU by your largest target model. An RTX 4060 Ti 16 GB suits a budget build for 7B-13B models, an RTX 4070 Ti Super 16 GB suits a mid build for 14B-33B models, and an RTX 5090 32 GB suits an enthusiast build for 70B work. The GPU decides which models the machine can run, so it is chosen first and the rest of the parts list is built around it. Note that 16 GB cards need a lower quantization or partial offload for the larger models in the 14B-33B range.',
          },
          {
            q: 'How much RAM do I need for a local-AI PC?',
            a: 'Plan 32 GB for a budget build, 64 GB for a mid build, and 128 GB for an enthusiast build. System RAM is not a substitute for VRAM — a model running partly or fully from RAM is usually much slower, often too slow for comfortable interactive use. RAM is for the operating system, context, tooling and offload; buy as much GPU VRAM as your target model needs.',
          },
          {
            q: 'What power supply does a local-AI PC need?',
            a: 'Match the power supply to the tier: 650 W for the budget build, 850 W for the mid build, and 1000 W for the enthusiast build. The enthusiast tier needs 1000 W because the RTX 5090 draws 575 W on its own. An undersized power supply causes instability under load, so do not cut this part.',
          },
          {
            q: 'Should I buy GPU components new or used in 2026?',
            a: 'Compare new and used before you decide; do not assume used is cheaper. The [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market, fetched 2026-11-27) shows used eBay US sold listings in October 2026 of $5,900–6,350 for the RTX 5090, against new retail of around $4,500–4,700 (not dated on the source), and $2,575–3,010 for the RTX 4090. A used card is worth buying only when it is clearly cheaper and verified working. For CPUs, RAM, SSDs and power supplies, we would usually buy new for the warranty.',
          },
          {
            q: 'Can a single-GPU build run a 70B model?',
            a: 'Yes, the enthusiast build can. An RTX 5090 32 GB has the most VRAM of any single GPU in this guide, but a 70B model at Q4 needs roughly 39-42 GB — so it runs 70B only with aggressive quantization or partial offload to system RAM. The 128 GB of RAM in the enthusiast build gives that offload the room it needs.',
          },
          {
            q: 'Is the mid build worth the extra cost over the budget build?',
            a: 'It can be, if you run 14B-class models regularly. Both builds have 16 GB of VRAM, so the mid build does not let you load bigger models into VRAM, but the RTX 4070 Ti Super has much higher memory bandwidth and responds faster. If your ceiling is firmly 7B-13B models, the budget build costs less.',
          },
          {
            q: 'Do I need a Threadripper CPU for a local-AI PC?',
            a: 'No. A consumer Ryzen CPU is enough for all three builds in this guide — a Ryzen 7 for the budget tier, a Ryzen 9 for the mid and enthusiast tiers. A Threadripper is mainly worth considering for multi-GPU machines that need more PCIe lanes, which is beyond these single-GPU builds.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Choose the GPU for your build with the full buying guide](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — ten consumer GPUs across four budget tiers, with dated prices.',
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
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-de.webp',
    title: 'Lokale-KI-Workstation 2026 selbst bauen: 3 Budget-Stufen',
    seoTitle: 'Lokaler-KI-PC 2026: vom Budget-Build zur 70B-Workstation',
    intro:
      'Die meisten Bauanleitungen für lokale KI beginnen mit der CPU, doch GPU und VRAM entscheiden weitgehend, welche Modelle die Maschine ausführen kann — jede andere Komponente wird so gewählt, dass sie diese GPU unterstützt. Diese Anleitung liefert drei Teilelisten für einen Lokal-LLM-PC: einen Budget-Build für 7B- bis 13B-Modelle, einen Mittelklasse-Build für 14B- bis 33B-Modelle und einen Enthusiasten-Build für die Arbeit mit 70B-Modellen. Jede Stufe nennt ihre wichtigsten Komponenten und die angestrebten Modellgrößen. Ein Hinweis zum Preis: Engpässe bei Speicherchips haben 2026 die Preise für GPUs mit viel VRAM und für DDR5-RAM erhöht. Build-Summen werden hier nicht erfasst; GPU-Preise nennen wir nur für RTX 5090 und RTX 4090 aus dem [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt, abgerufen am 2026-11-27) — prüfen Sie vor der Bestellung die Live-Angebote.',
    metaDescription:
      'Lokale KI-Workstation bauen 2026: CPU, GPU, RAM und Speicher für LLM-Inferenz. Komplette Build-Anleitungen nach Budget, von Einsteiger bis RTX 5090 — einige datierte US-GPU-Preise und Hinweise zur DDR5-Knappheit 2026.',
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
      '**Wählen Sie den Lokal-KI-Build, dessen GPU-VRAM zu Ihrem Zielmodell passt. Der Budget-Build zielt auf 7B- bis 13B-Modelle, der Mittelklasse-Build auf 14B bis 33B (die größeren mit niedrigerer Quantisierung oder teilweiser Auslagerung) und der Enthusiasten-Build auf 70B mit denselben Kompromissen. Build-Summen werden hier nicht erfasst, weil sich GPU- und RAM-Preise 2026 schnell bewegen; die wenigen genannten GPU-Preise stehen mit Quelle und Datum da.**',
    quickAnswerTop: {
      de: {
        question: 'Wie baue ich 2026 einen PC für den Betrieb lokaler LLMs?',
        answer:
          'Wählen Sie Ihre Stufe nach dem größten Modell, das Sie ausführen möchten, und bauen Sie dann um die GPU herum. Ein Budget-Build kombiniert eine RTX 4060 Ti 16 GB mit einer Ryzen-7-CPU für 7B- bis 13B-Modelle. Ein Mittelklasse-Build nutzt eine RTX 4070 Ti Super 16 GB für 14B- bis 33B-Modelle, wobei die größeren eine niedrigere Quantisierung oder teilweise Auslagerung brauchen. Ein Enthusiasten-Build setzt eine RTX 5090 32 GB für 70B-Arbeit ein, ebenfalls mit diesen Kompromissen. Die Preise für GPUs und DDR5-RAM sind 2026 stark gestiegen, daher werden Build-Summen nicht erfasst und nur die wenigen genannten GPU-Preise tragen Quelle und Datum.',
        bullets: [
          'Budget-Build: RTX 4060 Ti 16 GB, führt 7B- bis 13B-Modelle aus',
          'Mittelklasse-Build: RTX 4070 Ti Super 16 GB für 14B bis 33B (größere mit Kompromissen)',
          'Enthusiasten-Build: RTX 5090 32 GB, führt 70B-Modelle nur mit aggressiver Quantisierung oder teilweiser Auslagerung aus',
          'GPU- und DDR5-RAM-Preise sind 2026 stark gestiegen — vergleichen Sie neue und gebrauchte GPUs, denn gebraucht ist nicht verlässlich günstiger',
        ],
        updatedDate: '2026-11-27',
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
          '**Die Preise 2026 haben Builds verteuert.** Ein Speicherengpass hat die Preise für GPUs mit viel VRAM und für DDR5-RAM erhöht. Build-Summen werden hier nicht erfasst, und RAM kann eine große Kostenposition sein (die DDR5-Preise stiegen laut [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18, in 12 Monaten bis August 2026 um rund 500 %).',
          '**Budget-Build:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650-W-Netzteil — führt 7B- bis 13B-Modelle in brauchbarer Geschwindigkeit aus. Der kostengünstigste der drei Builds in dieser Anleitung.',
          '**Mittelklasse-Build:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850-W-Netzteil — führt Modelle der 14B-Klasse deutlich schneller aus als die Budget-Karte; die größeren 22B- bis 33B-Modelle brauchen eine niedrigere Quantisierung oder teilweise Auslagerung ins System-RAM.',
          '**Enthusiasten-Build:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000-W-Netzteil — von den drei Builds hier der einzige, der ein 70B-Modell auf einer einzelnen GPU ausführen kann, und nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM. Die RTX 5090 allein wird im Neuhandel bei rund $4.500–4.700 gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US-Markt, abgerufen am 2026-11-27).',
          '**RAM ist kein Ersatz für VRAM.** Arbeitsspeicher lässt ein Modell aus dem VRAM auslagern, doch ein teilweise oder ganz aus dem RAM laufendes Modell ist meist deutlich langsamer und oft zu langsam für angenehme interaktive Nutzung. Kaufen Sie so viel VRAM, wie Ihr Zielmodell braucht; RAM dient vor allem Betriebssystem, Werkzeugen und Auslagerung.',
          '**Das Netzteil skaliert mit der GPU.** Ein Budget-Build benötigt 650 W, der Mittelklasse-Build 850 W und der Enthusiasten-Build 1000 W, weil allein die RTX 5090 575 W zieht. Planen Sie das Netzteil zusammen mit der Karte ein.',
          '**Gebraucht ist kein garantierter Rabatt mehr.** Laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt, abgerufen am 2026-11-27; Gebrauchtwerte sind verkaufte Angebote auf eBay US, Oktober 2026; die Neupreisspannen sind in der Quelle nicht datiert) liegen gebraucht verkaufte RTX 5090 ($5.900–6.350) über dem Neuhandel (rund $4.500–4.700) und gebraucht verkaufte RTX 4090 ($2.575–3.010) im Bereich der Neuangebote ($2.000–3.000), vergleichen Sie also vor dem Kauf beides. Eine geprüft funktionierende Gebrauchtkarte lohnt sich weiterhin, wenn sie deutlich günstiger ist — gehen Sie aber nie davon aus.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Budget-Build:** GPU RTX 4060 Ti 16 GB — führt 7B- und die meisten 13B-Modelle aus.',
          '**Mittelklasse-Build:** GPU RTX 4070 Ti Super 16 GB — führt Modelle der 14B-Klasse aus; 22B bis 33B mit niedrigerer Quantisierung oder teilweiser Auslagerung.',
          '**Enthusiasten-Build:** GPU RTX 5090 32 GB — führt 33B bequem aus, 70B nur mit aggressiver Quantisierung oder teilweiser Auslagerung.',
          '**VRAM-Faustregel bei Q4_K_M:** etwa 0,6 GB pro Milliarde Parameter, plus 2 bis 4 GB für Kontext und Werkzeuge.',
          '**RAM-Empfehlung:** 32 GB für den Budget-Build, 64 GB für den Mittelklasse-Build, 128 GB für den Enthusiasten-Build.',
          '**Netzteil je Stufe:** 650 W Budget, 850 W Mittelklasse, 1000 W Enthusiast — die RTX 5090 zieht allein 575 W.',
          '**Preisrealität 2026:** Die Preise für GPUs und DDR5-RAM sind stark gestiegen — prüfen Sie Live-Preise und vergleichen Sie neue mit gebrauchten GPUs.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Empfehlung der Redaktion: der Mittelklasse-Build',
        highlight: true,
        content:
          '**Unsere redaktionelle Empfehlung für die meisten Käufer ist der Mittelklasse-Build.** Aufgebaut um eine RTX 4070 Ti Super 16 GB, führt er Modelle der 14B-Klasse in Q4 mit Platz für Kontext aus, kann 22B- bis 33B-Modelle mit niedrigerer Quantisierung oder teilweiser Auslagerung bewältigen und ist deutlich schneller als die Budget-Karte. Wählen Sie den Budget-Build, wenn Ihre Obergrenze fest bei 7B bis 13B liegt; steigen Sie zum Enthusiasten-Build auf, wenn Sie gezielt mehr VRAM für 33B- oder 70B-Arbeit brauchen. Modellgrößen und Preise ändern sich, prüfen Sie also vor dem Kauf erneut.',
        callouts: [
          {
            type: 'note',
            text: 'Diese Redaktionsempfehlung ist eine redaktionelle Einschätzung auf Basis von Herstellerangaben und typischen Modelldateigrößen. Sie beruht weder auf Tests von PromptQuorum noch auf einem Preisvergleich; der Preis der RTX 4070 Ti Super wird hier nicht erfasst. PromptQuorum nimmt an keinem Partnerprogramm teil, und die untenstehenden Links tragen keine Affiliate-Kennungen — es sind reine Referenzlinks, die keine Provision einbringen.',
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
          'GPU-VRAM- und Leistungsangaben sind Herstellerspezifikationen. Die Spalte zu den lauffähigen Modellen ist eine Schätzung aus Modelldateigrößen und VRAM, kein Test von PromptQuorum; die Ergebnisse hängen von Quantisierung, Laufzeitumgebung und Kontextlänge ab. Build-Summen werden nicht erfasst: Diese Seite nennt Preise nur für RTX 5090 und RTX 4090, nicht für die übrigen Teile. Vergleichen Sie neue und gebrauchte GPU-Angebote: Gebraucht ist nicht verlässlich günstiger.',
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
            'Führt aus': '14B; 22B-33B mit weniger Quant./Auslagerung',
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
          { 'Ihre Situation': 'Ich nutze ständig 14B-Modelle und will schnellere Antworten', 'Dieser Build': 'Mittelklasse-Build' },
          { 'Ihre Situation': 'Leichte 22B-33B-Arbeit, Kompromisse sind für mich okay', 'Dieser Build': 'Mittelklasse-Build' },
          { 'Ihre Situation': 'Ich nutze 33B-Modelle intensiv oder will mehr VRAM-Reserve', 'Dieser Build': 'Enthusiasten-Build' },
          { 'Ihre Situation': 'Single-GPU-Maschine für 70B-Modelle (nur mit aggressiver Quantisierung oder Auslagerung)', 'Dieser Build': 'Enthusiasten-Build' },
          { 'Ihre Situation': 'Ich will die Summe trotz des Preisanstiegs 2026 niedrig halten', 'Dieser Build': 'Jede Stufe — vergleichen Sie neue und gebrauchte GPU-Angebote' },
          { 'Ihre Situation': 'Ich bin unschlüssig und will eine Lösung in der Mitte', 'Dieser Build': 'Mittelklasse-Build — die Redaktionsempfehlung' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Budget-Build: RTX 4060 Ti 16 GB',
        content:
          '**Der Budget-Build ist der günstigste der drei Builds in dieser Anleitung und führt 7B-Modelle sowie in Q4 die meisten 13B-Modelle aus — genug für viele Einsteiger.** Er ist um die RTX 4060 Ti 16 GB aufgebaut, die preisgünstigste 16-GB-Karte in dieser Anleitung, was hilft, die Summe niedrig zu halten.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB VRAM, 165 W. 14B-Modelle in Q4 passen mit Kontextreserve hinein. Eine Geschwindigkeitsangabe nennen wir nicht: PromptQuorum hat diese Karte nicht gemessen, und das Tempo hängt von Quantisierung, Laufzeitumgebung und Kontextlänge ab. Die 16-GB-Kapazität ist der Grund, sie der 8-GB-Version vorzuziehen.',
          '**CPU — AMD Ryzen 7 7700:** 8 Kerne, geringe Leistungsaufnahme. Die CPU leistet während der GPU-Inferenz wenig, daher ist ein Mittelklasse-Chip hier richtig — geben Sie in dieser Stufe nicht zu viel für die CPU aus.',
          '**Mainboard — B650-Chipsatz:** unterstützt die Ryzen 7 und eine einzelne Vollformat-GPU auf PCIe. Eine hochwertige Spannungsversorgung ist auf dieser Stufe nicht nötig.',
          '**RAM — 32 GB DDR5:** genug für Betriebssystem, Werkzeuge und ein im VRAM laufendes 7B- bis 13B-Modell. RAM ist kein VRAM-Ersatz. Die DDR5-Preise sind 2026 stark gestiegen, prüfen Sie also den aktuellen Preis.',
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
          '**Der Mittelklasse-Build ist die Empfehlung der Redaktion: eine schnellere Karte für die tägliche 14B-Arbeit, größere 22B- bis 33B-Modelle sind mit niedrigerer Quantisierung oder teilweiser Auslagerung möglich.** Er ist um die RTX 4070 Ti Super 16 GB aufgebaut, deren höhere Speicherbandbreite sie bei denselben Modellen deutlich schneller macht als die Budget-Karte.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB VRAM, 285 W. Dieselbe Kapazität wie die Budget-Stufe, aber viel höhere Speicherbandbreite, sodass 7B- bis 14B-Modelle spürbar schneller antworten. Ein 33B-Q4-Modell (rund 18-20 GB) passt nicht in 16 GB, daher brauchen die größeren Modelle zwischen 22B und 33B eine niedrigere Quantisierung oder teilweise Auslagerung.',
          '**CPU — AMD Ryzen 9 7900X:** 12 Kerne. Mehr Reserven als die Budget-CPU für Datenaufbereitung und das Ausführen von Werkzeugen neben der Inferenz.',
          '**Mainboard — B650- oder X670-Chipsatz:** solide Spannungsversorgung für die 12-Kern-CPU und eine 285-W-GPU.',
          '**RAM — 64 GB DDR5:** Platz für Betriebssystem, größere Kontextfenster, teilweise Auslagerung und Werkzeuge wie eine RAG-Pipeline neben dem Modell. Bei knappem Budget reichen 32 GB für Modelle, die vollständig ins VRAM passen; ausgelagerte Modelle profitieren von mehr.',
          '**Speicher — 2 TB NVMe-SSD:** fasst eine ansehnliche Modellbibliothek — ein 33B-Q4-Modell ist rund 18-20 GB groß.',
          '**Netzteil — 850 W 80+ Gold:** komfortabler Spielraum für die 285-W-GPU und die 12-Kern-CPU unter Dauerlast.',
          '**Gehäuse und Kühlung — Midi-Tower mit einer 240-280-mm-AIO oder hochwertigem Luftkühler:** die Mittelklasse-Stufe erzeugt moderate Hitze; ein hochwertiger Kühler hält die CPU bei langen Inferenzläufen stabil.',
          '**Warum diese Stufe bauen:** Sie nutzen ständig 14B-Modelle und wollen schnellere Antworten, oder Sie machen leichte 22B- bis 33B-Arbeit und akzeptieren die Kompromisse. **Warum darauf verzichten:** wenn 7B bis 13B reichen, ist der Budget-Build günstiger; wenn 70B Ihr Ziel ist, sind 16 GB viel zu wenig — sehen Sie sich den Enthusiasten-Build an.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der Mittelklasse-Build nimmt dieselben Modelle auf wie der Budget-Build — Sie bezahlen für Geschwindigkeit, nicht für Kapazität. Bauen Sie diese Stufe, wenn 14B-Modelle ein tägliches Arbeitspensum sein werden und das Warten darauf Sie stören würde.',
          },
          {
            type: 'note',
            text: 'Eine gebrauchte RTX 4090 24 GB ist eine teure Abkürzung: Verkaufte Angebote auf eBay US lagen im Oktober 2026 bei $2.575–3.010 ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US-Markt, abgerufen am 2026-11-27). Der Preis der RTX 4070 Ti Super wird hier nicht erfasst; vergleichen Sie vor dem Kauf die aktuellen Angebote für neue und gebrauchte Karten.',
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
          '**Von den drei Builds hier kann nur der Enthusiasten-Build ein 70B-Modell auf einer einzelnen GPU ausführen, und nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM — die RTX 5090 32 GB ist das Schlüsselbauteil.** Bauen Sie diese Stufe vor allem wegen der VRAM-Kapazität. Die RTX 5090 wird im Neuhandel bei rund $4.500–4.700 gegenüber $1.999 UVP gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US-Markt, abgerufen am 2026-11-27); rechnen Sie daher mit der GPU als größtem Kostenpunkt.',
        items: [
          '**GPU — RTX 5090 32 GB (Neuhandel rund $4.500–4.700, eine von der Quelle nicht datierte Spanne, gegenüber $1.999 UVP; gebraucht, verkaufte Angebote auf eBay US $5.900–6.350, Oktober 2026; [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US-Markt, abgerufen am 2026-11-27; keine Preisangebote):** 32 GB GDDR7-VRAM, 575 W. Die Einzel-GPU mit dem meisten VRAM in dieser Anleitung. Sie führt 33B-Modelle in Q4 mit Reserve aus, ein 70B-Modell aber nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM.',
          '**CPU — AMD Ryzen 9 7950X:** 16 Kerne. Genug, um Datenaufbereitung, Fine-Tuning-Experimente und Werkzeuge neben intensiver Inferenz auszuführen.',
          '**Mainboard — X670E-Chipsatz:** starke Spannungsversorgung und PCIe 5.0, ausgelegt für eine 575-W-GPU und die 16-Kern-CPU.',
          '**RAM — 128 GB DDR5:** Platz für große Kontextfenster, mehrere gleichzeitig geladene Modelle, Werkzeuge und teilweise Auslagerung ins RAM. Ein 64-GB-Kit ist die günstigere Alternative.',
          '**Speicher — 4 TB NVMe-SSD:** Ein 70B-Q4-Modell ist rund 40 GB groß; ein 4-TB-Laufwerk fasst eine große Bibliothek großer Modelle.',
          '**Netzteil — 1000 W 80+ Platinum:** NVIDIA nennt für die RTX 5090 575 W Grafikleistungsaufnahme und 1000 W erforderliche Systemleistung (je nach übrigem System abweichend). Ein 750-W-Netzteil liegt unter dieser Vorgabe, dimensionieren Sie dieses Teil also nicht zu klein.',
          '**Gehäuse und Kühlung — Big-Tower mit 360-mm-AIO:** Die 575-W-GPU und die 16-Kern-CPU erzeugen echte Hitze; planen Sie Luftstrom und CPU-Kühlung für Dauerlast ein.',
          '**Warum diese Stufe bauen:** Sie wollen 33B-Modelle mit Reserve, sind bereit, 70B mit Kompromissen zu betreiben, oder führen intensive Batch-Inferenz aus. **Warum darauf verzichten:** Für 7B- bis 14B-Modelle ist sie mehr als nötig — der Mittelklasse-Build führt diese Größen ohne die Kosten einer RTX 5090 aus.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Die RTX 5090 zieht allein 575 W. Kombinieren Sie sie mit dem 1000-W-Netzteil aus dieser Teileliste — ein kleineres Gerät liegt unter der NVIDIA-Vorgabe und kann unter Last zu Abschaltungen oder Instabilität führen. Prüfen Sie vor dem Bau, ob Ihr Stromkreis die volle Leistungsaufnahme liefern kann. Dies ist keine Beratung zur elektrischen Sicherheit; beachten Sie die Hinweise von NVIDIA und des Netzteilherstellers.',
          },
          {
            type: 'note',
            text: 'Ein 70B-Modell in Q4 benötigt rund 39-42 GB VRAM, sodass selbst die RTX 5090 32 GB es nicht vollständig aufnehmen kann: Es braucht eine niedrigere Quantisierung oder teilweise Auslagerung ins System-RAM. Die 128 GB RAM in diesem Build geben dieser Auslagerung den nötigen Spielraum.',
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
          '**Ein Speicherengpass hat 2026 die Preise für GPUs mit viel VRAM und für DDR5-RAM stark erhöht, und diese beiden Teile können einen großen Anteil des Budgets ausmachen.** Planen Sie mit aktuellen Angebotspreisen, nicht mit Launch-Preisen.',
        items: [
          '**Prüfen Sie zuerst GPU und RAM.** Die GPU ist meist das teuerste Teil eines Lokal-KI-Builds, und DDR5-RAM ist 2026 deutlich teurer geworden. Diese Seite erfasst keine Build-Summen und stellt daher keine Rangfolge der Kostenposten auf.',
          '**Die Speicherversorgung ist eine Hauptursache.** Der [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) führt den GPU-Preisanstieg vor allem auf eine GDDR7-Knappheit zurück, weil die Speicherproduktion in Richtung KI-Rechenzentren wandert, und sieht bei Karten ab 16 GB das knappste Angebot. Für DDR5 nennt [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) ebenfalls die Verlagerung der Produktion zu HBM und Server-DRAM. Die RTX 5090 wird im Neuhandel bei rund $4.500–4.700 gegenüber $1.999 UVP gelistet (4.500 / 1.999 = 2,25×; InsiderLLM, US-Markt, abgerufen am 2026-11-27) — mehr als das Doppelte.',
          '**Preise schwächerer GPUs werden hier nicht erfasst.** RTX 4060 Ti 16 GB und RTX 4070 Ti Super aus dem Budget- und dem Mittelklasse-Build deckt der Tracker nicht ab; prüfen Sie dafür die Live-Angebote.',
          '**Gebraucht ist kein verlässlicher Rabatt.** Der [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt, abgerufen am 2026-11-27) zeigt für Oktober 2026 verkaufte Gebrauchtangebote auf eBay US von $5.900–6.350 für die RTX 5090, gegenüber rund $4.500–4.700 im Neuhandel (in der Quelle nicht datiert), und $2.575–3.010 für die RTX 4090 (Median $2.860, 216 Verkäufe); das sind Angebotsdaten, keine Preisangebote. Vergleichen Sie bei jeder Karte neu und gebraucht; kaufen Sie eine geprüft funktionierende Gebrauchtkarte nur, wenn sie deutlich günstiger ist.',
          '**DDR5 hat sich stark bewegt; andere Teile werden nicht erfasst.** Die DDR5-Preise stiegen laut [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) (2026-08-18) in 12 Monaten bis August 2026 um rund 500 % (ein 128-GB-DDR5-6400-Kit wurde für $3.399 gelistet). Preise für CPU, Mainboard, Netzteil und SSD werden auf dieser Seite nicht erfasst; prüfen Sie auch diese.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ein Speicherengpass hat 2026 die Preise für GPUs mit viel VRAM und für DDR5-RAM stark erhöht; prüfen Sie beide zuerst, wenn Sie einen Lokal-KI-Build kalkulieren.',
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
          '**2. Was ist Ihre harte Budget-Obergrenze?** Budget-Build für die niedrigsten Kosten, Mittelklasse-Build für die Mitte, Enthusiasten-Build für die höchsten — allein die RTX 5090 wird im Neuhandel bei rund $4.500–4.700 gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US-Markt, abgerufen am 2026-11-27).',
          '**3. Neue oder gebrauchte GPU?** Vergleichen Sie beides — laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt, abgerufen am 2026-11-27) liegen verkaufte gebrauchte RTX 5090 über dem Neuhandel und verkaufte gebrauchte RTX 4090 überschneiden sich mit der Spanne der Neuangebote; eine Gebrauchtkarte lohnt also nur, wenn sie deutlich günstiger ist.',
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
          '**Große Händler führen die Arten von Teilen, die diese Builds brauchen; vergleichen Sie bei der GPU gezielt neue und gebrauchte Angebote.** Die untenstehenden Links sind reine Produktsuch-Links; sie tragen keine Affiliate-Kennungen und bringen keine Provision ein.',
        items: [
          '**Amazon und Newegg:** ein breites Sortiment an CPUs, RAM, SSDs, Netzteilen und Gehäusen. Prüfen Sie Verfügbarkeit und Preis neuer GPUs und von DDR5 live.',
          '**Gebrauchtmarkt für GPUs:** einen Blick wert, aber keine garantierte Ersparnis — laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt, abgerufen am 2026-11-27) liegen verkaufte gebrauchte RTX 5090 über dem Neuhandel und verkaufte gebrauchte RTX 4090 überschneiden sich mit der Spanne der Neuangebote. Kaufen Sie gebraucht nur, wenn es deutlich günstiger und geprüft funktionsfähig ist.',
          '**Mindfactory und Alternate (DE):** weitere Anlaufstellen, um Preise für CPUs, Mainboards, Netzteile und GPUs zu vergleichen; achten Sie auf CPU-Mainboard-Bundles.',
          '**Kaufen Sie die GPU zuerst.** Sie ist meist das teuerste Teil, und ihr Preis kann sich schnell ändern — sichern Sie sie zu einem Preis, den Sie akzeptieren, und kaufen Sie dann die übrigen Teile dazu.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Build-Summen werden in dieser Anleitung nicht erfasst. Öffnen Sie vor dem Bau die aktuellen Händlerangebote für GPU und RAM — sie können einen großen Teil der Kosten ausmachen.',
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
          '**Arbeitsspeicher statt VRAM kaufen.** RAM lässt ein Modell aus dem VRAM auslagern, doch ein teilweise oder ganz aus dem RAM laufendes Modell ist meist deutlich langsamer und oft zu langsam für angenehme interaktive Nutzung. Kaufen Sie so viel VRAM, wie Ihr Zielmodell braucht.',
          '**Das Netzteil zu klein dimensionieren.** Allein die RTX 5090 zieht 575 W. Ein Netzteil, das unter Last einbricht, ist schlimmer als eine langsamere, aber stabil laufende GPU — passen Sie das Netzteil an die Stufe an.',
          '**Sich an Launch-Preisen orientieren.** Der Preisanstieg 2026 bedeutet, dass GPU-UVPs und die RAM-Preise des Vorjahres die Realität nicht mehr abbilden. Kalkulieren Sie GPU und RAM gegen Live-Händlerpreise und vergleichen Sie den Gebrauchtmarkt, statt ihn für günstiger zu halten.',
          '**Die 8-GB-RTX 4060 Ti für den Budget-Build kaufen.** Sie teilt einen Namen mit der 16-GB-Version, kann aber kein 14B-Modell aufnehmen. Bestätigen Sie die 16-GB-Variante im Angebot.',
          '**Für 7B-Modelle überdimensionieren.** Wenn 7B-Modelle Ihren Anwendungsfall abdecken, bringt der Enthusiasten-Build eine viel teurere GPU und eine deutlich höhere Leistungsaufnahme (575 W gegenüber 165 W bei der Budget-Karte) bei wenig Nutzen. Passen Sie die Stufe an das Modell an, nicht an das Budget, das Sie zufällig haben.',
          '**Gehäuse- und Kühlungsplanung überspringen.** Eine 575-W-GPU plus eine 16-Kern-CPU erzeugt echte Hitze. Bestätigen Sie, dass das Gehäuse GPU und Kühler aufnimmt und über Luftstrom verfügt, bevor Sie Teile bestellen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Bester GPU-Kaufratgeber für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: GPU-Kaufberatung und Hintergrund zum Preisanstieg 2026.',
          '[Lokale-LLM-Workstation bauen](/de/local-llms/local-llm-workstation-build) — PromptQuorum: Teileliste, Kühlung und Netzteilhinweise für eine Dual-GPU-70B-Workstation hinter der Enthusiasten-Stufe.',
          '[NVIDIA GeForce RTX 40- und 50-Serie Spezifikationen](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Offizielle VRAM-Kapazitäts- und Leistungswerte (TGP) für RTX 4060 Ti, 4070 Ti Super und 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live-Komponentenpreise für AMD-Ryzen-CPUs, DDR5-RAM, NVMe-SSDs und Netzteile.',
          '[InsiderLLM: NVIDIA-GPU-Preise](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — Drittanbieter-Tracker für die Angaben zu RTX 5090 und RTX 4090 und die Erklärung der GPU-Versorgung (US-Markt, abgerufen am 2026-11-27).',
          '[Hardware Busters: DDR5-Speicherpreise](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — Quelle für die Angaben zum DDR5-Preisanstieg (2026-08-18).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: "Ist ein 1000-W-Netzteil für einen Build mit einer GPU übertrieben?",
            a: 'Nicht für eine RTX 5090: NVIDIA nennt dafür 575 W Grafikleistungsaufnahme und 1000 W erforderliche Systemleistung (je nach übrigem System abweichend). Für den Budget- und den Mittelklasse-Build dieses Leitfadens sind 1000 W mehr als nötig: 650 W und 850 W (80+ Gold) bieten für RTX 4060 Ti 16 GB und RTX 4070 Ti Super 16 GB ausreichend Reserve. Ein ATX-3.1-Netzteil mit nativem 12V-2x6-Anschluss ist wichtiger als zusätzliche Watt.',
          },
          {
            q: 'Was kostet es 2026, einen PC für lokale KI zu bauen?',
            a: 'Build-Summen werden hier nicht erfasst, weil sich GPU- und RAM-Preise 2026 schnell bewegen. Die RTX 5090 im Enthusiasten-Build wird im Neuhandel bei rund $4.500–4.700 gelistet ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US-Markt, abgerufen am 2026-11-27), und die DDR5-Preise stiegen laut [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) (2026-08-18) in 12 Monaten bis August 2026 um rund 500 %. Addieren Sie die Live-Preise der Teileliste der gewählten Stufe.',
          },
          {
            q: 'Welche GPU sollte ich in einen Lokal-KI-PC einbauen?',
            a: 'Wählen Sie die GPU nach Ihrem größten Zielmodell. Eine RTX 4060 Ti 16 GB passt zu einem Budget-Build für 7B- bis 13B-Modelle, eine RTX 4070 Ti Super 16 GB zu einem Mittelklasse-Build für 14B- bis 33B-Modelle und eine RTX 5090 32 GB zu einem Enthusiasten-Build für 70B-Arbeit. Die GPU entscheidet, welche Modelle die Maschine ausführen kann, daher wird sie zuerst gewählt und die übrige Teileliste darum herum gebaut. Hinweis: Mit 16 GB brauchen die größeren Modelle zwischen 14B und 33B eine niedrigere Quantisierung oder teilweise Auslagerung.',
          },
          {
            q: 'Wie viel RAM brauche ich für einen Lokal-KI-PC?',
            a: 'Planen Sie 32 GB für einen Budget-Build, 64 GB für einen Mittelklasse-Build und 128 GB für einen Enthusiasten-Build. Arbeitsspeicher ist kein Ersatz für VRAM — ein teilweise oder ganz aus dem RAM laufendes Modell ist meist deutlich langsamer und oft zu langsam für angenehme interaktive Nutzung. RAM ist für Betriebssystem, Kontext, Werkzeuge und Auslagerung da; kaufen Sie so viel GPU-VRAM, wie Ihr Zielmodell braucht.',
          },
          {
            q: 'Welches Netzteil braucht ein Lokal-KI-PC?',
            a: 'Passen Sie das Netzteil an die Stufe an: 650 W für den Budget-Build, 850 W für den Mittelklasse-Build und 1000 W für den Enthusiasten-Build. Die Enthusiasten-Stufe benötigt 1000 W, weil die RTX 5090 allein 575 W zieht. Ein zu klein dimensioniertes Netzteil verursacht Instabilität unter Last, daher sparen Sie nicht an diesem Teil.',
          },
          {
            q: 'Sollte ich GPU-Komponenten 2026 neu oder gebraucht kaufen?',
            a: 'Vergleichen Sie neu und gebraucht, bevor Sie sich entscheiden; gehen Sie nicht davon aus, dass gebraucht günstiger ist. Der [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt, abgerufen am 2026-11-27) zeigt für Oktober 2026 verkaufte Gebrauchtangebote auf eBay US von $5.900–6.350 für die RTX 5090, gegenüber rund $4.500–4.700 im Neuhandel (in der Quelle nicht datiert), und $2.575–3.010 für die RTX 4090. Eine Gebrauchtkarte lohnt sich nur, wenn sie deutlich günstiger und geprüft funktionsfähig ist. CPUs, RAM, SSDs und Netzteile würden wir wegen der Garantie meist neu kaufen.',
          },
          {
            q: 'Kann ein Single-GPU-Build ein 70B-Modell ausführen?',
            a: 'Ja, der Enthusiasten-Build kann es. Eine RTX 5090 32 GB hat den meisten VRAM aller Einzel-GPUs in dieser Anleitung, doch ein 70B-Modell bei Q4 benötigt rund 39-42 GB — sie führt 70B daher nur mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM aus. Die 128 GB RAM im Enthusiasten-Build geben dieser Auslagerung den nötigen Spielraum.',
          },
          {
            q: 'Lohnt sich der Mittelklasse-Build gegenüber dem Budget-Build?',
            a: 'Das kann sich lohnen, wenn Sie Modelle der 14B-Klasse regelmäßig nutzen. Beide Builds haben 16 GB VRAM, der Mittelklasse-Build lädt also keine größeren Modelle ins VRAM, aber die RTX 4070 Ti Super hat eine viel höhere Speicherbandbreite und antwortet schneller. Liegt Ihre Obergrenze fest bei 7B bis 13B, ist der Budget-Build günstiger.',
          },
          {
            q: 'Brauche ich eine Threadripper-CPU für einen Lokal-KI-PC?',
            a: 'Nein. Eine Consumer-Ryzen-CPU reicht für alle drei Builds dieser Anleitung — eine Ryzen 7 für die Budget-Stufe, eine Ryzen 9 für die Mittelklasse- und die Enthusiasten-Stufe. Eine Threadripper kommt vor allem für Multi-GPU-Maschinen in Betracht, die mehr PCIe-Lanes brauchen, was über diese Single-GPU-Builds hinausgeht.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Wählen Sie die GPU für Ihren Build mit dem vollständigen Kaufratgeber](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — zehn Consumer-GPUs in vier Budget-Stufen, mit datierten Preisen.',
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
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-fr.webp',
    title: 'Monter une station IA locale en 2026 : 3 niveaux de budget',
    seoTitle: 'PC pour IA locale 2026 : du budget à la station 70B',
    intro:
      'La plupart des guides de montage pour l\'IA locale commencent par le processeur, mais ce sont le GPU et sa VRAM qui décident en grande partie des modèles que la machine peut exécuter — chaque autre pièce est choisie pour soutenir ce GPU. Ce guide donne trois listes de pièces pour un PC LLM local : une configuration budget pour les modèles 7B-13B, une configuration intermédiaire pour les 14B-33B et une configuration enthousiaste pour le travail en 70B. Chaque niveau indique ses principaux composants et les tailles de modèle visées. Une réserve sur les prix : des pénuries de mémoire ont fait monter en 2026 les prix des GPU à forte VRAM et de la RAM DDR5. Les totaux des configurations ne sont pas suivis ici ; les seuls prix de GPU indiqués concernent les RTX 5090 et RTX 4090, d\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (marché américain, consulté le 2026-11-27) — vérifiez les annonces en direct avant de commander.',
    metaDescription:
      'Trois configurations PC IA locale complètes pour 2026 : niveaux budget 7B-13B, intermédiaire 14B-33B et enthousiaste 70B. Listes de pièces, quelques prix GPU datés (marché américain) et notes sur la pénurie de DDR5 de 2026.',
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
      '**Choisissez la configuration dont la VRAM du GPU correspond à votre modèle visé. La configuration budget vise les modèles 7B-13B, l\'intermédiaire les 14B-33B (les plus grands avec une quantification plus faible ou un déchargement partiel), l\'enthousiaste le 70B avec les mêmes compromis. Les totaux ne sont pas suivis ici, car les prix des GPU et de la RAM évoluent vite en 2026 ; les quelques prix de GPU affichés ont une source et une date.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment monter un PC pour exécuter des LLM locaux en 2026 ?',
        answer:
          'Choisissez le niveau selon le plus grand modèle que vous voulez exécuter, puis construisez autour du GPU. La configuration budget associe une RTX 4060 Ti 16 GB à un Ryzen 7 pour les modèles 7B-13B. L\'intermédiaire utilise une RTX 4070 Ti Super 16 GB pour les 14B-33B, les plus grands exigeant une quantification plus faible ou un déchargement partiel. L\'enthousiaste utilise une RTX 5090 32 GB pour le 70B, avec les mêmes compromis. Les prix des GPU et de la RAM DDR5 ont fortement monté en 2026 : les totaux ne sont donc pas suivis ici et seuls les quelques prix de GPU affichés ont une source et une date.',
        bullets: [
          'Configuration budget : RTX 4060 Ti 16 GB, exécute les modèles 7B-13B',
          'Configuration intermédiaire : RTX 4070 Ti Super 16 GB, vise le 14B-33B (avec compromis au-delà)',
          'Configuration enthousiaste : RTX 5090 32 GB, exécute les modèles 70B uniquement avec une quantification agressive ou un déchargement partiel',
          'Les prix des GPU et de la DDR5 ont fortement monté en 2026 — comparez neuf et occasion, l\'occasion n\'étant pas forcément moins chère',
        ],
        updatedDate: '2026-11-27',
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
          '**Les prix de 2026 ont renchéri les configurations.** Une pénurie de mémoire a fait monter les prix des GPU à forte VRAM et de la RAM DDR5. Les totaux ne sont pas suivis ici, et la RAM peut être un poste important (les prix de la DDR5 ont augmenté d\'environ 500 % en 12 mois jusqu\'en août 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Configuration budget :** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD 1 To, alimentation 650 W — exécute les modèles 7B-13B à vitesse utilisable. La moins coûteuse des trois configurations de ce guide.',
          '**Configuration intermédiaire :** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD 2 To, alimentation 850 W — exécute les modèles de classe 14B bien plus vite que la carte budget ; les modèles 22B-33B les plus grands exigent une quantification plus faible ou un déchargement partiel vers la RAM système.',
          '**Configuration enthousiaste :** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD 4 To, alimentation 1000 W — des trois configurations ici, la seule capable d\'exécuter un modèle 70B sur un seul GPU, et seulement avec une quantification agressive ou un déchargement partiel vers la RAM système. La RTX 5090 seule est affichée neuve autour de $4,500–4,700 ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), marché américain, consulté le 2026-11-27).',
          '**La RAM ne remplace pas la VRAM.** La mémoire système permet à un modèle de déborder de la VRAM, mais un modèle exécuté en partie ou entièrement depuis la RAM est généralement bien plus lent, souvent trop pour un usage interactif confortable. Achetez la VRAM dont votre modèle visé a besoin ; la RAM sert surtout au système, aux outils et au déchargement.',
          '**L\'alimentation évolue avec le GPU.** Une configuration budget exige 650 W, l\'intermédiaire 850 W et l\'enthousiaste 1000 W, car la seule RTX 5090 consomme 575 W. Budgétez l\'alimentation en même temps que la carte.',
          '**L\'occasion n\'est plus une remise garantie.** D\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (marché américain, consulté le 2026-11-27 ; les chiffres d\'occasion sont des ventes sur eBay US d\'octobre 2026 ; les fourchettes du neuf ne sont pas datées par la source), les RTX 5090 vendues d\'occasion ($5,900–6,350) dépassent le prix neuf (environ $4,500–4,700) et les RTX 4090 vendues d\'occasion ($2,575–3,010) chevauchent la fourchette des annonces neuves ($2,000–3,000) ; comparez donc les deux avant d\'acheter. Une carte d\'occasion vérifiée fonctionnelle reste intéressante quand elle est nettement moins chère — mais ne le présumez jamais.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Configuration budget :** GPU RTX 4060 Ti 16 GB — exécute les modèles 7B et la plupart des 13B.',
          '**Configuration intermédiaire :** GPU RTX 4070 Ti Super 16 GB — exécute les modèles de classe 14B ; 22B-33B avec quantification plus faible ou déchargement partiel.',
          '**Configuration enthousiaste :** GPU RTX 5090 32 GB — exécute aisément le 33B, et le 70B uniquement avec une quantification agressive ou un déchargement partiel.',
          '**Règle empirique de VRAM en Q4_K_M :** environ 0,6 GB par milliard de paramètres, plus 2-4 GB pour le contexte et l\'outillage.',
          '**Recommandation de RAM système :** 32 GB pour la configuration budget, 64 GB pour l\'intermédiaire, 128 GB pour l\'enthousiaste.',
          '**Alimentation par niveau :** 650 W budget, 850 W intermédiaire, 1000 W enthousiaste — la RTX 5090 consomme 575 W à elle seule.',
          '**Réalité des prix 2026 :** les prix des GPU et de la RAM DDR5 ont fortement monté — vérifiez les prix en direct et comparez GPU neufs et d\'occasion.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Choix de la rédaction : la configuration intermédiaire',
        highlight: true,
        content:
          '**Pour la plupart des acheteurs, notre choix éditorial est la configuration intermédiaire.** Bâtie autour d\'une RTX 4070 Ti Super 16 GB, elle exécute les modèles de classe 14B en Q4 avec de la place pour le contexte, peut gérer des modèles 22B-33B avec une quantification plus faible ou un déchargement partiel, et est bien plus rapide que la carte budget. Prenez la configuration budget si votre plafond reste le 7B-13B ; passez à l\'enthousiaste si vous avez précisément besoin de plus de VRAM pour le 33B ou le 70B. Les tailles de modèles et les prix changent : revérifiez avant d\'acheter.',
        callouts: [
          {
            type: 'note',
            text: 'Ce choix de la rédaction est un jugement éditorial fondé sur les spécifications des fabricants et les tailles de fichiers habituelles des modèles. Il ne repose ni sur des tests de PromptQuorum ni sur une comparaison de prix ; le prix de la RTX 4070 Ti Super n\'est pas suivi ici. PromptQuorum n\'est inscrit à aucun programme d\'affiliation et les liens ci-dessous ne portent aucune balise affiliée — ce sont de simples liens de référence qui ne génèrent aucune commission.',
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
          'Les chiffres de VRAM et de puissance des GPU sont des spécifications des fabricants. La colonne des modèles exécutables est une estimation d\'après la taille des fichiers et la VRAM, et non un test de PromptQuorum ; les résultats varient selon la quantification, le moteur d\'exécution et la longueur du contexte. Les totaux ne sont pas suivis : cette page ne donne des prix que pour les RTX 5090 et RTX 4090, pas pour les autres pièces. Comparez les annonces de GPU neufs et d\'occasion : l\'occasion n\'est pas forcément moins chère.',
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
            'Exécute': '14B ; 22B-33B avec quant. réduite/déchargement',
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
          { 'Votre situation': 'J\'utilise des 14B en continu et veux des réponses plus rapides', 'Montez ceci': 'Configuration intermédiaire' },
          { 'Votre situation': 'Un peu de 22B-33B, et j\'accepte les compromis', 'Montez ceci': 'Configuration intermédiaire' },
          { 'Votre situation': 'J\'utilise beaucoup le 33B ou veux plus de marge en VRAM', 'Montez ceci': 'Configuration enthousiaste' },
          { 'Votre situation': 'Machine mono-GPU pour modèles 70B (quantification agressive ou déchargement partiel requis)', 'Montez ceci': 'Configuration enthousiaste' },
          { 'Votre situation': 'Je veux contenir le total malgré la flambée de 2026', 'Montez ceci': 'N\'importe quel niveau — comparez les annonces de GPU neufs et d\'occasion' },
          { 'Votre situation': 'J\'hésite et je veux une option intermédiaire', 'Montez ceci': 'Configuration intermédiaire — le choix de la rédaction' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuration budget : RTX 4060 Ti 16 GB',
        content:
          '**La configuration budget est la moins coûteuse des trois de ce guide ; elle exécute les modèles 7B et, en Q4, la plupart des 13B — assez pour beaucoup de débutants.** Elle repose sur la RTX 4060 Ti 16 GB, la carte 16 GB la moins chère de ce guide, ce qui aide à contenir le total.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB :** 16 GB de VRAM, 165 W. Les modèles 14B en Q4 tiennent avec de la marge pour le contexte. Aucun chiffre de vitesse n\'est donné : PromptQuorum n\'a pas mesuré cette carte, et la vitesse varie selon la quantification, le moteur et la longueur du contexte. Les 16 GB sont la raison de la préférer à la version 8 GB.',
          '**Processeur — AMD Ryzen 7 7700 :** 8 cœurs, consommation modeste. Le processeur travaille peu pendant l\'inférence GPU, donc une puce de milieu de gamme est correcte ici — ne dépensez pas trop pour le processeur à ce niveau.',
          '**Carte mère — chipset B650 :** prend en charge le Ryzen 7 et un seul GPU pleine taille en PCIe. Pas besoin d\'une alimentation électrique haut de gamme à ce niveau.',
          '**RAM — 32 GB DDR5 :** suffisant pour le système, les outils et un modèle 7B-13B tenant en VRAM. La RAM ne remplace pas la VRAM. Les prix de la DDR5 ont fortement monté en 2026 : vérifiez le prix actuel.',
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
          '**La configuration intermédiaire est le choix de la rédaction : une carte plus rapide pour le 14B au quotidien, les modèles 22B-33B plus grands restant possibles avec une quantification plus faible ou un déchargement partiel.** Elle repose sur la RTX 4070 Ti Super 16 GB, dont la bande passante mémoire plus élevée la rend bien plus rapide que la carte budget sur les mêmes modèles.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB :** 16 GB de VRAM, 285 W. Même capacité que le niveau budget, mais une bande passante mémoire nettement supérieure : les modèles 7B-14B répondent sensiblement plus vite. Un 33B en Q4 (environ 18-20 GB) ne tient pas dans 16 GB ; les plus grands modèles entre 22B et 33B exigent donc une quantification plus faible ou un déchargement partiel.',
          '**Processeur — AMD Ryzen 9 7900X :** 12 cœurs. Plus de marge que le processeur budget pour la préparation des données et l\'exécution d\'outils en parallèle de l\'inférence.',
          '**Carte mère — chipset B650 ou X670 :** alimentation électrique solide pour le processeur 12 cœurs et un GPU de 285 W.',
          '**RAM — 64 GB DDR5 :** de la place pour le système, de plus grandes fenêtres de contexte, le déchargement partiel et des outils comme un pipeline RAG à côté du modèle. Si le budget est serré, 32 GB suffisent pour les modèles tenant entièrement en VRAM ; le déchargement profite d\'une capacité supérieure.',
          '**Stockage — SSD NVMe 2 To :** contient une bibliothèque de modèles conséquente — un modèle 33B Q4 fait environ 18-20 GB.',
          '**Alimentation — 850 W 80+ Gold :** marge confortable pour le GPU de 285 W et le processeur 12 cœurs sous charge soutenue.',
          '**Boîtier et refroidissement — moyen-tour avec un AIO 240-280 mm ou un ventirad air haut de gamme :** le niveau intermédiaire produit une chaleur modérée ; un refroidisseur de qualité maintient le processeur stable lors de longues sessions d\'inférence.',
          '**Pourquoi monter ce niveau :** vous utilisez des 14B en continu et voulez des réponses plus rapides, ou vous faites un peu de 22B-33B en acceptant les compromis. **Pourquoi l\'éviter :** si le 7B-13B suffit, la configuration budget coûte moins cher ; si vous visez le 70B, 16 GB sont très insuffisants — regardez la configuration enthousiaste.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuration intermédiaire accueille les mêmes modèles que la configuration budget — vous payez pour la vitesse, pas pour la capacité. Montez ce niveau si les modèles 14B seront une charge de travail quotidienne et que les attendre vous agacerait.',
          },
          {
            type: 'note',
            text: 'Une RTX 4090 24 GB d\'occasion est un raccourci coûteux : les ventes sur eBay US se situaient à $2,575–3,010 en octobre 2026 ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), marché américain, consulté le 2026-11-27). Le prix de la RTX 4070 Ti Super n\'est pas suivi ici : comparez les annonces actuelles, neuves et d\'occasion, avant d\'acheter.',
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
          '**Des trois configurations ici, seule l\'enthousiaste peut exécuter un modèle 70B sur un seul GPU, et seulement avec une quantification agressive ou un déchargement partiel vers la RAM système — sa RTX 5090 32 GB en est la pièce maîtresse.** Montez ce niveau avant tout pour la capacité en VRAM. La RTX 5090 est affichée neuve autour de $4,500–4,700 contre $1,999 de prix conseillé ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), marché américain, consulté le 2026-11-27) : attendez-vous à ce que le GPU soit le poste le plus lourd.',
        items: [
          '**GPU — RTX 5090 32 GB (neuve environ $4,500–4,700, fourchette non datée par la source, contre $1,999 de prix conseillé ; ventes d\'occasion sur eBay US $5,900–6,350, octobre 2026 ; [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), marché américain, consulté le 2026-11-27 ; il ne s\'agit pas de devis) :** 32 GB de VRAM GDDR7, 575 W. Le GPU unique avec le plus de VRAM de ce guide. Il exécute les 33B en Q4 avec de la marge, mais un 70B seulement avec une quantification agressive ou un déchargement partiel vers la RAM système.',
          '**Processeur — AMD Ryzen 9 7950X :** 16 cœurs. Assez pour exécuter la préparation des données, les expériences de fine-tuning et l\'outillage en parallèle d\'une inférence intensive.',
          '**Carte mère — chipset X670E :** alimentation électrique robuste et PCIe 5.0, dimensionnées pour un GPU de 575 W et le processeur 16 cœurs.',
          '**RAM — 128 GB DDR5 :** de la place pour de grandes fenêtres de contexte, plusieurs modèles chargés, des outils et le déchargement partiel. Un kit de 64 GB est l\'alternative moins coûteuse.',
          '**Stockage — SSD NVMe 4 To :** un 70B en Q4 pèse environ 40 GB ; un disque de 4 To contient une vaste bibliothèque de grands modèles.',
          '**Alimentation — 1000 W 80+ Platinum :** NVIDIA indique pour la RTX 5090 575 W de puissance graphique et 1000 W de puissance système requise (variable selon le reste de la configuration). Un bloc de 750 W est sous cette recommandation : ne sous-dimensionnez pas cette pièce.',
          '**Boîtier et refroidissement — grand boîtier avec AIO 360 mm :** le GPU de 575 W et le processeur 16 cœurs produisent une vraie chaleur ; prévoyez le flux d\'air et le refroidissement du processeur pour une charge soutenue.',
          '**Pourquoi monter ce niveau :** vous voulez du 33B avec de la marge, vous acceptez de faire tourner le 70B avec des compromis, ou vous faites de l\'inférence par lots intensive. **Pourquoi l\'éviter :** pour les 7B-14B, c\'est plus que nécessaire — l\'intermédiaire exécute ces tailles sans le coût d\'une RTX 5090.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La RTX 5090 consomme 575 W à elle seule. Associez-la à l\'alimentation de 1000 W de cette liste — un bloc plus petit est sous la recommandation de NVIDIA et peut provoquer des arrêts ou de l\'instabilité sous charge. Vérifiez avant le montage que votre circuit électrique peut fournir toute la puissance. Ceci n\'est pas un conseil en sécurité électrique ; suivez les indications de NVIDIA et du fabricant de l\'alimentation.',
          },
          {
            type: 'note',
            text: 'Un modèle 70B en Q4 nécessite environ 39-42 GB de VRAM : même la RTX 5090 32 GB ne peut pas le contenir entièrement. Il faut une quantification plus faible ou un déchargement partiel vers la RAM système. Les 128 GB de RAM de cette configuration donnent à ce déchargement la place nécessaire.',
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
          '**En 2026, une pénurie de mémoire a fait fortement monter les prix des GPU à forte VRAM et de la RAM DDR5, et ces deux pièces peuvent peser lourd dans le budget.** Planifiez avec les prix affichés actuels, pas avec les prix de lancement.',
        items: [
          '**Vérifiez d\'abord le GPU et la RAM.** Le GPU est généralement la pièce la plus chère d\'un PC pour IA locale, et la DDR5 a nettement renchéri en 2026. Cette page ne suit aucun total et ne classe donc pas les postes de dépense.',
          '**L\'approvisionnement en mémoire est une cause majeure.** Le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) attribue la hausse des GPU principalement à une pénurie de GDDR7, la production de mémoire se réorientant vers les centres de données d\'IA, et indique que les cartes de 16 GB et plus sont les plus contraintes. Pour la DDR5, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) évoque de même un report de la production vers la HBM et la DRAM pour serveurs. La RTX 5090 est affichée neuve autour de $4,500–4,700 contre $1,999 de prix conseillé (4,500 / 1,999 = 2.25× ; InsiderLLM, marché américain, consulté le 2026-11-27) — plus du double.',
          '**Les prix des GPU d\'entrée de gamme ne sont pas suivis ici.** La RTX 4060 Ti 16 GB et la RTX 4070 Ti Super des configurations budget et intermédiaire ne sont pas couvertes par le suivi ; vérifiez les annonces en direct.',
          '**L\'occasion n\'est pas une remise fiable.** Le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (marché américain, consulté le 2026-11-27) indique, pour les ventes d\'occasion sur eBay US en octobre 2026, $5,900–6,350 pour la RTX 5090, contre environ $4,500–4,700 en neuf (non daté par la source), et $2,575–3,010 pour la RTX 4090 (médiane $2,860, 216 ventes) ; ce sont des données d\'annonces, pas des devis. Comparez neuf et occasion pour chaque carte ; n\'achetez une carte d\'occasion vérifiée fonctionnelle que si elle est nettement moins chère.',
          '**La DDR5 a beaucoup bougé ; les autres pièces ne sont pas suivies.** Les prix de la DDR5 ont augmenté d\'environ 500 % en 12 mois jusqu\'en août 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18 ; un kit DDR5-6400 de 128 GB était affiché à $3,399). Les prix des processeurs, cartes mères, alimentations et SSD ne sont pas suivis sur cette page : vérifiez-les aussi.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En 2026, une pénurie de mémoire a fait fortement monter les prix des GPU à forte VRAM et de la DDR5 : vérifiez-les en premier quand vous chiffrez une configuration.',
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
          '**2. Quel est votre plafond de budget ferme ?** Configuration budget pour le coût le plus bas, intermédiaire pour le milieu, enthousiaste pour le plus élevé — la RTX 5090 seule est affichée neuve autour de $4,500–4,700 (suivi InsiderLLM, marché américain, consulté le 2026-11-27).',
          '**3. GPU neuf ou d\'occasion ?** Comparez les deux — d\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (marché américain, consulté le 2026-11-27), les RTX 5090 vendues d\'occasion dépassent le prix neuf et les ventes d\'occasion de RTX 4090 chevauchent la fourchette des annonces neuves ; l\'occasion n\'a donc de sens que si elle est nettement moins chère.',
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
          '**Les grandes enseignes proposent les types de pièces de ces configurations ; comparez les annonces neuves et d\'occasion pour le GPU en particulier.** Les liens ci-dessous sont de simples liens de recherche de produits ; ils ne portent aucune balise affiliée et ne génèrent aucune commission.',
        items: [
          '**Amazon et Newegg :** un large choix de processeurs, RAM, SSD, alimentations et boîtiers. Vérifiez en direct la disponibilité et le prix des GPU et de la DDR5 neufs.',
          '**Marché du GPU d\'occasion :** à consulter, mais ce n\'est pas une économie garantie — d\'après le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (marché américain, consulté le 2026-11-27), les RTX 5090 vendues d\'occasion dépassent le prix neuf et les ventes d\'occasion de RTX 4090 chevauchent la fourchette des annonces neuves. N\'achetez d\'occasion que si c\'est nettement moins cher et vérifié fonctionnel.',
          '**LDLC et Materiel.net (France) :** d\'autres enseignes pour comparer les prix des processeurs, cartes mères, alimentations et GPU ; regardez les offres groupées processeur et carte mère.',
          '**Achetez le GPU en premier.** C\'est généralement la pièce la plus chère et son prix peut changer vite — sécurisez-le à un prix que vous acceptez, puis achetez les autres pièces autour.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Les totaux des configurations ne sont pas suivis dans ce guide. Consultez les annonces actuelles du GPU et de la RAM avant le montage — elles peuvent représenter une part importante du coût.',
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
          '**Acheter de la RAM au lieu de la VRAM.** La RAM permet à un modèle de déborder de la VRAM, mais un modèle exécuté en partie ou entièrement depuis la RAM est généralement bien plus lent, souvent trop pour un usage interactif confortable. Achetez la VRAM dont votre modèle visé a besoin.',
          '**Sous-dimensionner l\'alimentation.** La seule RTX 5090 consomme 575 W. Une alimentation qui chute sous charge est pire qu\'un GPU plus lent mais stable — adaptez l\'alimentation au niveau.',
          '**S\'ancrer sur les prix de lancement.** La flambée de 2026 fait que les prix conseillés des GPU et les prix de la RAM de l\'an dernier ne reflètent plus la réalité. Budgétez le GPU et la RAM par rapport aux prix revendeur en direct et comparez le marché de l\'occasion au lieu de le supposer moins cher.',
          '**Acheter la RTX 4060 Ti 8 GB pour la configuration budget.** Elle partage un nom avec la version 16 GB mais ne peut pas accueillir un modèle 14B. Confirmez la variante 16 GB dans l\'annonce.',
          '**Surdimensionner pour des modèles 7B.** Si des 7B couvrent votre usage, la configuration enthousiaste ajoute un GPU bien plus cher et une consommation nettement supérieure (575 W contre 165 W pour la carte budget) pour peu de bénéfice. Adaptez le niveau au modèle, pas au budget dont vous disposez par hasard.',
          '**Négliger la planification du boîtier et du refroidissement.** Un GPU de 575 W plus un processeur 16 cœurs produisent une vraie chaleur. Confirmez que le boîtier accueille le GPU et le refroidisseur et dispose d\'un flux d\'air avant de commander les pièces.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Meilleur guide d\'achat GPU pour LLM locaux 2026](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum : conseils d\'achat de GPU et contexte de la hausse des prix de 2026.',
          '[Monter une station de travail LLM locale](/fr/local-llms/local-llm-workstation-build) — PromptQuorum : liste de pièces, refroidissement et conseils d\'alimentation pour une station 70B bi-GPU au-delà du niveau enthousiaste.',
          '[Spécifications des séries NVIDIA GeForce RTX 40 et 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Capacité de VRAM et puissance (TGP) officielles pour les RTX 4060 Ti, 4070 Ti Super et 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Tarifs de composants en direct pour les processeurs AMD Ryzen, la RAM DDR5, les SSD NVMe et les alimentations.',
          '[InsiderLLM : prix des GPU NVIDIA](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — Suivi tiers pour les chiffres des RTX 5090 et RTX 4090 et l\'explication sur l\'approvisionnement des GPU (marché américain, consulté le 2026-11-27).',
          '[Hardware Busters : prix de la mémoire DDR5](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — Source des chiffres sur la hausse de la DDR5 (2026-08-18).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: "Une alimentation de 1000 W est-elle excessive pour une configuration à un seul GPU ?",
            a: 'Pas pour une RTX 5090 : NVIDIA indique 575 W de puissance graphique et 1000 W de puissance système requise (variable selon le reste de la configuration). Pour les configurations budget et intermédiaire de ce guide, 1000 W dépassent le besoin : 650 W et 850 W (80+ Gold) couvrent la RTX 4060 Ti 16 GB et la RTX 4070 Ti Super 16 GB avec de la marge. Un bloc ATX 3.1 avec connecteur 12V-2x6 natif compte davantage que des watts supplémentaires.',
          },
          {
            q: 'Combien coûte le montage d\'un PC pour IA locale en 2026 ?',
            a: 'Les totaux ne sont pas suivis ici, car les prix des GPU et de la RAM évoluent vite en 2026. La RTX 5090 de la configuration enthousiaste est affichée neuve autour de $4,500–4,700 ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), marché américain, consulté le 2026-11-27), et les prix de la DDR5 ont augmenté d\'environ 500 % en 12 mois jusqu\'en août 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Additionnez les prix en direct des pièces du niveau choisi.',
          },
          {
            q: 'Quel GPU mettre dans une configuration PC pour IA locale ?',
            a: 'Choisissez le GPU selon votre plus grand modèle visé. Une RTX 4060 Ti 16 GB convient à une configuration budget pour les modèles 7B-13B, une RTX 4070 Ti Super 16 GB à une configuration intermédiaire pour les modèles 14B-33B et une RTX 5090 32 GB à une configuration enthousiaste pour le travail 70B. Le GPU décide des modèles que la machine peut exécuter, il se choisit donc en premier et le reste de la liste de pièces se construit autour de lui. À noter : avec 16 GB, les plus grands modèles entre 14B et 33B exigent une quantification plus faible ou un déchargement partiel.',
          },
          {
            q: 'De combien de RAM ai-je besoin pour un PC dédié à l\'IA locale ?',
            a: 'Prévoyez 32 GB pour la configuration budget, 64 GB pour l\'intermédiaire et 128 GB pour l\'enthousiaste. La RAM système ne remplace pas la VRAM — un modèle exécuté en partie ou entièrement depuis la RAM est généralement bien plus lent, souvent trop pour un usage interactif confortable. La RAM sert au système, au contexte, aux outils et au déchargement ; achetez la VRAM dont votre modèle visé a besoin.',
          },
          {
            q: 'Quelle alimentation faut-il pour un PC dédié à l\'IA locale ?',
            a: 'Adaptez l\'alimentation au niveau : 650 W pour la configuration budget, 850 W pour l\'intermédiaire et 1000 W pour l\'enthousiaste. Le niveau enthousiaste exige 1000 W car la RTX 5090 consomme 575 W à elle seule. Une alimentation sous-dimensionnée cause de l\'instabilité sous charge, donc ne rognez pas sur cette pièce.',
          },
          {
            q: 'Faut-il acheter les composants GPU neufs ou d\'occasion en 2026 ?',
            a: 'Comparez le neuf et l\'occasion avant de décider ; ne supposez pas que l\'occasion est moins chère. Le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (marché américain, consulté le 2026-11-27) indique, pour les ventes d\'occasion sur eBay US en octobre 2026, $5,900–6,350 pour la RTX 5090, contre environ $4,500–4,700 en neuf (non daté par la source), et $2,575–3,010 pour la RTX 4090. Une carte d\'occasion ne vaut le coup que si elle est nettement moins chère et vérifiée fonctionnelle. Pour les processeurs, la RAM, les SSD et les alimentations, nous achèterions généralement du neuf pour la garantie.',
          },
          {
            q: 'Une configuration mono-GPU peut-elle exécuter un modèle 70B ?',
            a: 'Oui, la configuration enthousiaste le peut. Une RTX 5090 32 GB offre la plus grande VRAM de tous les GPU uniques de ce guide, mais un modèle 70B en Q4 nécessite environ 39-42 GB — elle n\'exécute donc le 70B qu\'avec une quantification agressive ou un déchargement partiel vers la RAM système. Les 128 GB de RAM de la configuration enthousiaste donnent à ce déchargement la place nécessaire.',
          },
          {
            q: 'La configuration intermédiaire vaut-elle le surcoût par rapport à la budget ?',
            a: 'Cela peut valoir le coup si vous utilisez régulièrement des modèles de classe 14B. Les deux configurations ont 16 GB de VRAM : l\'intermédiaire ne permet donc pas de charger en VRAM des modèles plus grands, mais la RTX 4070 Ti Super a une bande passante mémoire bien supérieure et répond plus vite. Si votre plafond reste le 7B-13B, la configuration budget coûte moins cher.',
          },
          {
            q: 'Faut-il un processeur Threadripper pour un PC dédié à l\'IA locale ?',
            a: 'Non. Un processeur Ryzen grand public suffit pour les trois configurations de ce guide — un Ryzen 7 pour le niveau budget, un Ryzen 9 pour les niveaux intermédiaire et enthousiaste. Un Threadripper est surtout à envisager pour les machines multi-GPU qui ont besoin de plus de lignes PCIe, ce qui dépasse ces configurations à un seul GPU.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Choisissez le GPU de votre configuration avec le guide d\'achat complet](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — dix GPU grand public sur quatre niveaux de budget, avec des prix datés.',
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
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-ja.webp',
    title: 'ローカルAIワークステーション自作ガイド2026：予算別3構成',
    seoTitle: 'ローカルAI PC自作2026：エントリーから70B対応機まで',
    intro:
      'ローカルAIの自作ガイドの多くはCPUから始まりますが、どのモデルを実行できるかを大きく左右するのはGPUとそのVRAMです。他のパーツはすべて、そのGPUを支えるために選びます。このガイドでは、ローカルLLM用PCのパーツリストを3つ紹介します。7B〜13Bモデル向けのエントリー構成、14B〜33Bモデル向けのミドル構成、70B向けのハイエンド構成です。各ティアには主なパーツと対象モデルサイズを示します。価格についての注意：メモリの供給不足により、2026年は大容量VRAMのGPUとDDR5 RAMの価格が上昇しました。構成の合計はここでは追跡していません。掲載するGPU価格はRTX 5090とRTX 4090のみで、[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（米国市場、2026-11-27に確認）によるものです。注文前に最新の出品を確認してください。',
    metaDescription:
      '2026年のローカルAI PC構成3種：7B〜13B向けエントリー、14B〜33B向けミドル、70B向けハイエンド。パーツリスト、日付付きの米国GPU価格の一部と2026年のDDR5不足に関する注記を掲載。',
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
      '**GPUのVRAMが対象モデルに合う構成を選んでください。エントリー構成は7B〜13B、ミドル構成は14B〜33B（大きいものは低い量子化または部分的なオフロードが必要）、ハイエンド構成は同じ妥協を前提とした70Bが対象です。2026年のGPUとRAMの価格は変動が速いため構成の合計は追跡していません。掲載する少数のGPU価格には出典と日付があります。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にローカルLLMを動かすPCはどう組めばよいですか？',
        answer:
          '実行したい最大のモデルでティアを決め、GPUを中心に組みます。エントリー構成はRTX 4060 Ti 16 GBとRyzen 7の組み合わせで7B〜13Bモデル向けです。ミドル構成はRTX 4070 Ti Super 16 GBで14B〜33Bモデル向けですが、大きいモデルは低い量子化または部分的なオフロードが必要です。ハイエンド構成はRTX 5090 32 GBで70B向けですが、同じ妥協が伴います。2026年はGPUとDDR5 RAMの価格が急上昇したため、構成の合計は追跡せず、掲載する少数のGPU価格にのみ出典と日付を付けています。',
        bullets: [
          'エントリー構成：RTX 4060 Ti 16 GB、7B〜13Bモデルを実行',
          'ミドル構成：RTX 4070 Ti Super 16 GB、14B〜33Bが対象（大きいモデルは妥協が必要）',
          'ハイエンド構成：RTX 5090 32 GB、70Bモデルは積極的な量子化または部分的なオフロードでのみ実行',
          '2026年はGPUとDDR5の価格が急上昇しました。中古が安いとは限らないため、新品と中古のGPUを比較してください',
        ],
        updatedDate: '2026-11-27',
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
          '**2026年の価格で構成の費用が上がりました。** メモリ不足により、大容量VRAMのGPUとDDR5 RAMの価格が上昇しました。構成の合計は追跡していませんが、RAMは大きな費用項目になり得ます（DDR5の価格は2026年8月までの12か月で約500%上昇、[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)、2026-08-18）。',
          '**エントリー構成：** RTX 4060 Ti 16 GB、Ryzen 7 7700、32 GB RAM、1 TB SSD、650 W電源——7B〜13Bモデルを実用的な速度で実行します。このガイドの3構成の中で最も費用を抑えた構成です。',
          '**ミドル構成：** RTX 4070 Ti Super 16 GB、Ryzen 9 7900X、64 GB RAM、2 TB SSD、850 W電源——14Bクラスのモデルをエントリー向けカードよりかなり速く実行します。大きめの22B〜33Bモデルは、低い量子化またはシステムRAMへの部分的なオフロードが必要です。',
          '**ハイエンド構成：** RTX 5090 32 GB、Ryzen 9 7950X、128 GB RAM、4 TB SSD、1000 W電源——この3構成のうち、70Bモデルを1枚のGPUで実行できるのはハイエンド構成だけで、積極的な量子化またはシステムRAMへの部分的なオフロードが前提です。RTX 5090だけで新品販売価格は約$4,500〜4,700です（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、米国市場、2026-11-27に確認）。',
          '**RAMはVRAMの代わりにはなりません。** システムRAMがあればモデルをVRAMから溢れさせられますが、一部または全部をRAMで動かすと通常はかなり遅くなり、快適な対話利用には遅すぎることもよくあります。対象モデルに必要なVRAMを確保してください。RAMは主にOS、ツール、オフロード用です。',
          '**電源はGPUに合わせてスケールします。** エントリー構成は650 W、ミドル構成は850 W、ハイエンド構成は1000 Wが必要です。RTX 5090は単体で575 Wを消費するためです。電源はカードと同時に予算化してください。',
          '**中古はもはや確実な割引ではありません。** [InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（米国市場、2026-11-27に確認。中古の数値はeBay USの成約価格で2026年10月、新品の価格帯は情報源に日付がありません）では、中古の成約済みRTX 5090（$5,900〜6,350）は新品販売価格（約$4,500〜4,700）を上回り、中古の成約済みRTX 4090（$2,575〜3,010）は新品の出品範囲（$2,000〜3,000）と重なります。購入前に両方を比較してください。動作確認済みの中古カードは、明らかに安いときには依然として検討する価値がありますが、安いと決めつけないでください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**エントリー構成：** GPU RTX 4060 Ti 16 GB——7Bおよびほとんどの13Bモデルを実行します。',
          '**ミドル構成：** GPU RTX 4070 Ti Super 16 GB——14Bクラスのモデルを実行。22B〜33Bは低い量子化または部分的なオフロードが必要です。',
          '**ハイエンド構成：** GPU RTX 5090 32 GB——33Bを快適に実行でき、70Bは積極的な量子化または部分的なオフロードでのみ実行できます。',
          '**Q4_K_MでのVRAMの目安：** 10億パラメータあたりおよそ0.6 GB、加えてコンテキストとツール用に2〜4 GB。',
          '**システムRAMの指針：** エントリー構成は32 GB、ミドル構成は64 GB、ハイエンド構成は128 GB。',
          '**ティア別の電源：** エントリー650 W、ミドル850 W、ハイエンド1000 W——RTX 5090は単体で575 Wを消費します。',
          '**2026年の価格事情：** GPUとDDR5 RAMの価格が急上昇しました。最新価格を確認し、GPUは新品と中古を比較してください。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '編集部のおすすめ：ミドル構成',
        highlight: true,
        content:
          '**多くの購入者への編集部のおすすめはミドル構成です。** RTX 4070 Ti Super 16 GBを中心とし、14BクラスのモデルをQ4でコンテキストの余裕を持って実行でき、22B〜33Bモデルは低い量子化または部分的なオフロードで扱え、エントリー向けカードよりかなり高速です。上限が確実に7B〜13Bならエントリー構成を、33Bや70Bのために特により多くのVRAMが必要ならハイエンド構成を選んでください。モデルサイズも価格も変わるため、購入前に再確認してください。',
        callouts: [
          {
            type: 'note',
            text: 'この編集部のおすすめは、メーカー仕様と一般的なモデルのファイルサイズに基づく編集上の判断です。PromptQuorumのテストや価格比較に基づくものではなく、RTX 4070 Ti Superの価格はここでは追跡していません。PromptQuorumはいかなるアフィリエイトプログラムにも参加しておらず、以下のリンクにはアフィリエイトタグが含まれません——いずれも報酬を生まない単なる参照リンクです。',
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
          'GPUのVRAMと電力の数値はメーカー仕様です。実行できるモデルの列はモデルのファイルサイズとVRAMからの推定で、PromptQuorumのテスト結果ではありません。実際の結果は量子化、実行環境、コンテキスト長で変わります。構成の合計は追跡していません。このページで価格を示すのはRTX 5090とRTX 4090のみで、他のパーツは含みません。中古が安いとは限らないため、新品と中古のGPU出品を比較してください。',
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
            '実行可能': '14B／22B〜33Bは低量子化かオフロード',
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
          { 'あなたの状況': '14Bモデルを常用し、より速い応答がほしい', 'おすすめの構成': 'ミドル構成' },
          { 'あなたの状況': '22B〜33Bを軽く使い、妥協は許容できる', 'おすすめの構成': 'ミドル構成' },
          { 'あなたの状況': '33Bモデルを多用する、またはVRAMの余裕がほしい', 'おすすめの構成': 'ハイエンド構成' },
          { 'あなたの状況': '積極的な量子化または部分的なオフロードで70Bモデルを動かせるシングルGPUマシンが必要', 'おすすめの構成': 'ハイエンド構成' },
          { 'あなたの状況': '2026年の高騰にもかかわらず合計を抑えたい', 'おすすめの構成': 'いずれのティアも——新品と中古のGPU掲載を比較' },
          { 'あなたの状況': '迷っていて、中間の選択肢がほしい', 'おすすめの構成': 'ミドル構成——編集部のおすすめ' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'エントリー構成：RTX 4060 Ti 16 GB',
        content:
          '**エントリー構成はこのガイドの3構成で最も費用を抑えた構成で、7Bモデルと、Q4ならほとんどの13Bモデルを実行できます。多くの初心者には十分です。** 中心はこのガイドで最も安い16 GBカードのRTX 4060 Ti 16 GBで、合計を抑えるのに役立ちます。',
        items: [
          '**GPU — RTX 4060 Ti 16 GB：** 16 GB VRAM、165 W。Q4の14Bモデルはコンテキストの余裕を持って収まります。速度の数値は掲載しません。PromptQuorumはこのカードを測定しておらず、速度は量子化、実行環境、コンテキスト長で変わるためです。8 GB版ではなくこちらを選ぶ理由は16 GBの容量です。',
          '**CPU — AMD Ryzen 7 7700：** 8コア、消費電力は控えめ。CPUはGPU推論中ほとんど働かないため、ここではミドルレンジのチップが正解です——このティアではCPUに過剰に支出しないでください。',
          '**マザーボード — B650チップセット：** Ryzen 7とPCIe上のフルサイズGPU 1枚に対応します。このティアではハイエンドの電源回路は不要です。',
          '**RAM — 32 GB DDR5：** OS、ツール、VRAM上で動く7B〜13Bモデルには十分です。RAMはVRAMの代わりになりません。DDR5は2026年に大きく値上がりしたため、最新価格を確認してください。',
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
          '**ミドル構成は編集部のおすすめです。日常の14B作業向けのより速いカードで、大きめの22B〜33Bモデルも低い量子化または部分的なオフロードで利用できます。** 中心はRTX 4070 Ti Super 16 GBで、メモリ帯域が広いため、同じモデルでエントリー向けカードよりかなり高速です。',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB：** 16 GB VRAM、285 W。容量はエントリーティアと同じですが、メモリ帯域がはるかに広く、7B〜14Bモデルの応答は目に見えて速くなります。33BのQ4モデル（約18〜20 GB）は16 GBに収まらないため、22B〜33Bの大きいモデルは低い量子化または部分的なオフロードが必要です。',
          '**CPU — AMD Ryzen 9 7900X：** 12コア。データ準備や推論と並行したツール実行に、エントリーCPUより余裕があります。',
          '**マザーボード — B650またはX670チップセット：** 12コアCPUと285 W GPUに見合う堅実な電源回路。',
          '**RAM — 64 GB DDR5：** OS、大きなコンテキスト、部分的なオフロード、モデルと並行して動くRAGパイプラインなどのツールに余裕があります。予算が厳しければ、VRAMに完全に収まるモデルには32 GBで足ります。オフロードする場合は多いほど有利です。',
          '**ストレージ — 2 TB NVMe SSD：** ある程度のモデルライブラリを収めます——33B Q4モデルはおよそ18〜20 GBです。',
          '**電源 — 850 W 80+ Gold：** 持続負荷下の285 W GPUと12コアCPUに十分な余裕があります。',
          '**ケースと冷却 — 240〜280 mmのAIOまたはハイエンド空冷クーラー搭載のミドルタワー：** ミドルティアの発熱は中程度で、品質の高いクーラーが長時間の推論中もCPUを安定させます。',
          '**このティアを組む理由：** 14Bモデルを常用して応答を速くしたい、または22B〜33Bを軽く使い妥協を受け入れられる場合です。**避ける理由：** 7B〜13Bで十分ならエントリー構成のほうが安く済みます。70Bが目標なら16 GBはまったく足りないため、ハイエンド構成を検討してください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ミドル構成はエントリー構成と同じモデルを収めます——支払っているのは速度であり、容量ではありません。14Bモデルが日常の作業負荷になり、待つことが煩わしいなら、このティアを組んでください。',
          },
          {
            type: 'note',
            text: '中古のRTX 4090 24 GBは高くつく近道です。eBay USの成約価格は2026年10月に$2,575〜3,010でした（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、米国市場、2026-11-27に確認）。RTX 4070 Ti Superの価格はここでは追跡していないため、購入前に新品と中古の最新出品を比較してください。',
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
          '**この3構成のうち、70Bモデルを1枚のGPUで実行できるのはハイエンド構成だけで、積極的な量子化またはシステムRAMへの部分的なオフロードが前提です。中心パーツはRTX 5090 32 GBです。** このティアは主にVRAM容量のために選びます。RTX 5090の新品販売価格は約$4,500〜4,700で、MSRPは$1,999です（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、米国市場、2026-11-27に確認）。GPUが最大の費用になると見込んでください。',
        items: [
          '**GPU — RTX 5090 32 GB（新品販売価格は約$4,500〜4,700で、この範囲は情報源に日付がありません。MSRPは$1,999。中古はeBay USの成約価格$5,900〜6,350、2026年10月。[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、米国市場、2026-11-27に確認。見積もりではありません）：** 32 GB GDDR7 VRAM、575 W。このガイドのシングルGPUで最大のVRAMです。Q4の33Bモデルは余裕を持って実行できますが、70Bモデルは積極的な量子化またはシステムRAMへの部分的なオフロードが必要です。',
          '**CPU — AMD Ryzen 9 7950X：** 16コア。重い推論と並行して、データ準備、ファインチューニング実験、ツール実行を行うのに十分です。',
          '**マザーボード — X670Eチップセット：** 575 W GPUと16コアCPUに見合う強力な電源回路とPCIe 5.0。',
          '**RAM — 128 GB DDR5：** 大きなコンテキスト、複数モデルの同時読み込み、ツール、RAMへの部分的なオフロードに余裕があります。64 GBキットはより安価な選択肢です。',
          '**ストレージ — 4 TB NVMe SSD：** 70BのQ4モデルは約40 GBです。4 TBあれば大型モデルを多数保存できます。',
          '**電源 — 1000 W 80+ Platinum：** NVIDIAはRTX 5090のグラフィックス電力を575 W、必要システム電力を1000 Wとしています（構成によって異なります）。750 Wはこの目安を下回るため、容量を小さく選ばないでください。',
          '**ケースと冷却 — 360 mm AIO搭載のフルサイズケース：** 575 WのGPUと16コアCPUは大きく発熱します。持続負荷を想定してエアフローとCPU冷却を計画してください。',
          '**このティアを組む理由：** 33Bモデルを余裕を持って使いたい、妥協を受け入れて70Bを動かす、または重いバッチ推論を行う場合です。**避ける理由：** 7B〜14Bモデルには必要以上です。ミドル構成ならRTX 5090の費用なしでこのサイズを実行できます。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090は単体で575 Wを消費します。このパーツリストの1000 W電源と組み合わせてください。小さい電源はNVIDIAの目安を下回り、負荷時にシャットダウンや不安定の原因になることがあります。組み立て前に、コンセント回路が消費電力全体を供給できるか確認してください。これは電気安全に関する助言ではありません。NVIDIAと電源メーカーの案内に従ってください。',
          },
          {
            type: 'note',
            text: '70BのQ4モデルは約39〜42 GBのVRAMを必要とするため、RTX 5090 32 GBでも全体は収まりません。低い量子化かシステムRAMへの部分的なオフロードが必要です。この構成の128 GB RAMは、そのオフロードの余裕になります。',
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
          '**2026年はメモリ供給不足で大容量VRAMのGPUとDDR5 RAMの価格が大きく上がり、この2つは予算の大きな割合を占めることがあります。** 発売時の価格ではなく、現在の出品価格で計画してください。',
        items: [
          '**まずGPUとRAMを確認してください。** ローカルAI PCではGPUが最も高価なパーツになることが多く、DDR5 RAMは2026年に大幅に値上がりしました。このページは合計を追跡していないため、費用項目の順位は示しません。',
          '**主な要因はメモリ供給です。** [InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)は、GPU値上がりの主因をGDDR7の不足とし、メモリ生産がAIデータセンター向けに移っていること、16 GB以上のカードの供給が最も厳しいことを挙げています。DDR5についても[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)は、生産がHBMとサーバー向けDRAMに移っていることを指摘しています。RTX 5090の新品販売価格は約$4,500〜4,700で、MSRPは$1,999です（4,500 / 1,999 = 2.25倍、InsiderLLM、米国市場、2026-11-27に確認）。2倍を超えます。',
          '**下位のGPUの価格はここでは追跡していません。** エントリー構成とミドル構成のRTX 4060 Ti 16 GBとRTX 4070 Ti Superはトラッカーの対象外なので、最新の出品を確認してください。',
          '**中古は確実な割引ではありません。** [InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（米国市場、2026-11-27に確認）では、2026年10月のeBay US中古成約価格は、RTX 5090が$5,900〜6,350（新品販売価格は約$4,500〜4,700、情報源に日付なし）、RTX 4090が$2,575〜3,010（中央値$2,860、216件）です。出品データであり見積もりではありません。どのカードも新品と中古を比較し、動作確認済みの中古は明らかに安い場合にのみ購入してください。',
          '**DDR5は大きく動き、他のパーツは追跡していません。** DDR5の価格は2026年8月までの12か月で約500%上昇しました（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)、2026-08-18。128 GB DDR5-6400キットは$3,399で掲載）。CPU、マザーボード、電源、SSDの価格はこのページでは追跡していないため、これらも確認してください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年はメモリ不足で大容量VRAMのGPUとDDR5 RAMの価格が大きく上がったため、構成の費用を見積もるときはまずこの2つを確認してください。',
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
          '**2. 譲れない予算の上限は？** 最も安いのはエントリー構成、中間はミドル構成、最も高いのはハイエンド構成です——RTX 5090だけで新品販売価格は約$4,500〜4,700です（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、米国市場、2026-11-27に確認）。',
          '**3. GPUは新品か中古か？** 両方を比較してください。[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（米国市場、2026-11-27に確認）では、中古RTX 5090の成約価格は新品販売価格を上回り、中古RTX 4090の成約価格は新品の出品価格帯と重なります。中古は明らかに安い場合にのみ意味があります。',
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
          '**大手の販売店では、これらの構成に必要な種類のパーツが手に入ります。特にGPUは新品と中古の出品を比較してください。** 以下のリンクは単なる商品検索リンクで、アフィリエイトタグを含まず報酬を生みません。',
        items: [
          '**AmazonとNewegg：** CPU、RAM、SSD、電源、ケースを幅広く扱います。新品のGPUとDDR5は在庫と価格を最新情報で確認してください。',
          '**中古GPU市場：** 確認する価値はありますが、節約は保証されません。[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（米国市場、2026-11-27に確認）では、中古RTX 5090の成約価格は新品販売価格を上回り、中古RTX 4090の成約価格は新品の出品価格帯と重なります。中古は明らかに安く、動作確認済みの場合にのみ購入してください。',
          '**ドスパラやTSUKUMOなど（日本国内）：** CPU、マザーボード、電源、GPUの価格を比較できる購入先の候補です。CPUとマザーボードのセットも確認してください。',
          '**GPUを最初に確保してください。** 多くの場合最も高価で、価格が短期間で変わることがあります。納得できる価格で確保してから、他のパーツをそろえてください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'このガイドでは構成の合計を追跡していません。組み立て前にGPUとRAMの最新の販売ページを確認してください。費用の大きな割合を占めることがあります。',
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
          '**VRAMではなくシステムRAMを買う。** RAMがあればモデルをVRAMから溢れさせられますが、一部または全部をRAMで動かすと通常はかなり遅くなり、快適な対話利用には遅すぎることもよくあります。対象モデルに必要なVRAMを確保してください。',
          '**電源を過小に見積もる。** RTX 5090は単体で575 Wを消費します。負荷下で電圧降下する電源は、安定して動く遅いGPUよりも悪い選択です——電源をティアに合わせてください。',
          '**発売時の価格を基準にする。** 2026年の高騰により、GPUの希望小売価格や昨年のRAM価格はもはや現実を反映しません。GPUとRAMは実勢の販売店価格に対して予算化し、中古のほうが安いと決めつけず、中古市場も比較してください。',
          '**エントリー構成に8 GBのRTX 4060 Tiを買う。** 16 GB版と名前を共有しますが、14Bモデルを収められません。販売ページで16 GBバリアントを確認してください。',
          '**7Bモデルに過剰な構成を組む。** 7Bモデルで用途が足りるなら、ハイエンド構成はずっと高価なGPUと大幅に大きい消費電力（エントリー向けカードの165 Wに対し575 W）が加わるだけで、利点はわずかです。手元の予算ではなくモデルに合わせてティアを選んでください。',
          '**ケースと冷却の計画を省く。** 575 W GPUと16コアCPUは実際の発熱を生みます。パーツを注文する前に、ケースがGPUとクーラーを収め、エアフローがあることを確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[ローカルLLM向けGPU購入ガイド2026](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum：GPU購入の指針と2026年の値上がりの背景。',
          '[ローカルLLMワークステーションを組む](/ja/local-llms/local-llm-workstation-build) — PromptQuorum：ハイエンドティアの先にあるデュアルGPU 70Bワークステーションのパーツリスト、冷却、電源の指針。',
          '[NVIDIA GeForce RTX 40・50シリーズ仕様](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti、4070 Ti Super、5090の公式VRAM容量と電力（TGP）の数値。',
          '[PCPartPicker](https://pcpartpicker.com) — AMD Ryzen CPU、DDR5 RAM、NVMe SSD、電源のリアルタイム部品価格。',
          '[InsiderLLM：NVIDIA GPUの価格](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — RTX 5090とRTX 4090の数値とGPU供給の説明に使った第三者トラッカー（米国市場、2026-11-27に確認）。',
          '[Hardware Busters：DDR5メモリ価格](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — DDR5値上がりの数値の出典（2026-08-18）。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: "GPU1枚の構成に1000W電源は過剰ですか?",
            a: 'RTX 5090なら過剰ではありません。NVIDIAは同カードのグラフィックス電力を575 W、必要システム電力を1000 Wとしています（構成によって異なります）。このガイドのエントリー構成とミドル構成には1000 Wは必要以上で、650 Wと850 W（80+ Gold）でRTX 4060 Ti 16 GBとRTX 4070 Ti Super 16 GBを余裕を持ってまかなえます。ワット数を増やすより、12V-2x6コネクタを標準装備したATX 3.1電源を選ぶことが重要です。',
          },
          {
            q: '2026年にローカルAI用のPCを組む費用はいくらですか？',
            a: '2026年のGPUとRAMの価格は変動が速いため、構成の合計は追跡していません。ハイエンド構成のRTX 5090は新品販売価格が約$4,500〜4,700で（[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、米国市場、2026-11-27に確認）、DDR5の価格は2026年8月までの12か月で約500%上昇しました（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)、2026-08-18）。選んだティアのパーツリストの最新価格を合計してください。',
          },
          {
            q: 'ローカルAI PCの構成にはどのGPUを入れるべきですか？',
            a: '対象とする最大のモデルでGPUを選んでください。RTX 4060 Ti 16 GBは7B〜13Bモデル向けのエントリー構成に、RTX 4070 Ti Super 16 GBは14B〜33Bモデル向けのミドル構成に、RTX 5090 32 GBは70B作業向けのハイエンド構成に適します。GPUがマシンの実行可能なモデルを決めるため、まずGPUを選び、残りのパーツリストはその周りに構築します。なお、16 GBのカードでは、14B〜33Bの大きいモデルは低い量子化または部分的なオフロードが必要です。',
          },
          {
            q: 'ローカルAI PCにはどれくらいのRAMが必要ですか？',
            a: 'エントリー構成は32 GB、ミドル構成は64 GB、ハイエンド構成は128 GBが目安です。システムRAMはVRAMの代わりになりません。一部または全部をRAMで動かすモデルは通常かなり遅く、快適な対話利用には遅すぎることもよくあります。RAMはOS、コンテキスト、ツール、オフロード用です。GPUのVRAMは対象モデルに必要な分を確保してください。',
          },
          {
            q: 'ローカルAI PCにはどの電源が必要ですか？',
            a: '電源をティアに合わせてください：エントリー構成は650 W、ミドル構成は850 W、ハイエンド構成は1000 W。ハイエンドティアが1000 Wを必要とするのは、RTX 5090が単体で575 Wを消費するためです。過小な電源は負荷下で不安定を招くため、このパーツを削らないでください。',
          },
          {
            q: '2026年、GPUコンポーネントは新品と中古のどちらを買うべきですか？',
            a: '決める前に新品と中古を比較し、中古のほうが安いと決めつけないでください。[InsiderLLMのGPU価格トラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（米国市場、2026-11-27に確認）では、2026年10月のeBay US中古成約価格は、RTX 5090が$5,900〜6,350（新品販売価格は約$4,500〜4,700、情報源に日付なし）、RTX 4090が$2,575〜3,010です。中古カードは、明らかに安く動作確認済みの場合にのみ買う価値があります。CPU、RAM、SSD、電源は、保証のため通常は新品をおすすめします。',
          },
          {
            q: 'シングルGPU構成で70Bモデルを実行できますか？',
            a: 'はい、ハイエンド構成なら可能です。RTX 5090 32 GBはこのガイドのシングルGPUで最大のVRAMを持ちますが、70BモデルのQ4はおよそ39〜42 GBを必要とするため、積極的な量子化またはシステムRAMへの部分的なオフロードを伴ってのみ70Bを実行できます。ハイエンド構成の128 GB RAMが、そのオフロードに必要な余裕を与えます。',
          },
          {
            q: 'ミドル構成はエントリー構成より追加費用に見合いますか？',
            a: '14Bクラスのモデルをよく使うなら、価値がある場合があります。どちらもVRAMは16 GBなので、ミドル構成でもVRAMに載るモデルは大きくなりませんが、RTX 4070 Ti Superはメモリ帯域がはるかに広く、応答が速くなります。上限が確実に7B〜13Bなら、エントリー構成のほうが安く済みます。',
          },
          {
            q: 'ローカルAI PCにThreadripper CPUは必要ですか？',
            a: 'いいえ。このガイドの3構成にはコンシューマー向けRyzen CPUで十分です。エントリーティアはRyzen 7、ミドルとハイエンドはRyzen 9です。Threadripperは主に、より多くのPCIeレーンが必要なマルチGPUマシンで検討するもので、これらのシングルGPU構成の範囲外です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[詳しい購入ガイドで構成のGPUを選ぶ](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 4つの予算帯の民生用GPU 10機種を、日付付きの価格とともに紹介。',
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
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-zh.webp',
    title: '2026 本地 AI 工作站装机指南：三档预算配置',
    seoTitle: '2026 本地 AI PC 装机：从入门到 70B 工作站',
    intro:
      '大多数本地 AI 装机指南从 CPU 讲起,但机器能跑哪些模型主要由 GPU 及其显存决定——其他部件都是为支撑这块 GPU 而选的。本指南给出三套本地 LLM PC 部件清单:面向 7B-13B 模型的入门配置、面向 14B-33B 模型的中端配置,以及面向 70B 工作负载的发烧配置。每一档列出主要部件和目标模型规模。关于价格需要说明:存储芯片供应短缺在 2026 年推高了大显存 GPU 和 DDR5 内存的价格。本页不追踪整机总价,给出的 GPU 价格仅限 RTX 5090 和 RTX 4090,来自 [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场，2026-11-27 查阅）——下单前请查看实时挂牌价。',
    metaDescription:
      '2026年本地AI工作站搭建：LLM推理所需的CPU、GPU、内存和存储。按预算的完整搭建指南，从入门级到搭载RTX 5090的高端配置，并附硬件选择说明。',
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
      '**选择 GPU 显存能容纳目标模型的那一套配置。入门配置面向 7B-13B 模型,中端配置面向 14B-33B（较大的模型需要更低量化或部分溢出）,发烧配置面向 70B,同样需要这些取舍。由于 2026 年 GPU 和内存价格变化很快,本页不追踪整机总价;所列的少量 GPU 价格均注明来源和日期。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年如何装一台运行本地 LLM 的 PC？',
        answer:
          '按你想运行的最大模型选档位,再围绕 GPU 装机。入门配置用 RTX 4060 Ti 16 GB 搭配 Ryzen 7,面向 7B-13B 模型。中端配置用 RTX 4070 Ti Super 16 GB 面向 14B-33B 模型,其中较大的模型需要更低量化或部分溢出。发烧配置用 RTX 5090 32 GB 处理 70B,同样需要这些取舍。2026 年 GPU 和 DDR5 内存价格大幅上涨,因此本页不追踪整机总价,只有所列的少量 GPU 价格注明来源和日期。',
        bullets: [
          '入门配置：RTX 4060 Ti 16 GB，可跑 7B-13B 模型',
          '中端配置：RTX 4070 Ti Super 16 GB,面向 14B-33B（较大模型需取舍）',
          '发烧配置：RTX 5090 32 GB，仅在采用激进量化或部分溢出到系统内存时才能跑 70B 模型',
          '2026 年 GPU 和 DDR5 价格大幅上涨——请对比全新与二手 GPU,二手并不一定更便宜',
        ],
        updatedDate: '2026-11-27',
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
          '**2026 年的价格抬高了装机成本。** 存储供应短缺推高了大显存 GPU 和 DDR5 内存的价格。本页不追踪整机总价,而内存可能是一项大开支（据 [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)，2026-08-18，DDR5 价格在截至 2026 年 8 月的 12 个月内上涨约 500%）。',
          '**入门配置：** RTX 4060 Ti 16 GB、Ryzen 7 7700、32 GB 内存、1 TB SSD、650 W 电源——以可用速度运行 7B-13B 模型。这是本指南三套配置中成本最低的一套。',
          '**中端配置：** RTX 4070 Ti Super 16 GB、Ryzen 9 7900X、64 GB 内存、2 TB SSD、850 W 电源——运行 14B 级模型比入门显卡快得多;较大的 22B-33B 模型需要更低量化或部分溢出到系统内存。',
          '**发烧配置：** RTX 5090 32 GB、Ryzen 9 7950X、128 GB 内存、4 TB SSD、1000 W 电源——本指南三套配置中,只有发烧配置能在单块 GPU 上运行 70B 模型,且需要激进量化或部分溢出到系统内存。仅 RTX 5090 一项的新品零售价就约 $4,500–4,700（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，美国市场，2026-11-27 查阅）。',
          '**内存不能替代显存。** 系统内存可以让模型溢出显存,但部分或全部从内存运行的模型通常慢得多,往往难以满足流畅的交互使用。按目标模型所需购买显存;内存主要用于操作系统、工具链和溢出。',
          '**电源随 GPU 等比例提升。** 入门配置需要 650 W,中端配置 850 W,发烧配置 1000 W,因为单是 RTX 5090 就需 575 W。请把电源与显卡一并纳入预算。',
          '**二手不再是必然的折扣。** [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场，2026-11-27 查阅；二手数据为 2026 年 10 月 eBay 美国站成交价，全新价格区间来源未标日期）显示，二手成交的 RTX 5090（$5,900–6,350）高于新品零售价（约 $4,500–4,700），二手成交的 RTX 4090（$2,575–3,010）与新品挂牌区间（$2,000–3,000）重叠，因此购买前请两者对比。当二手卡明显更便宜时，一块经过验证可用的二手卡仍然值得入手——但千万不要想当然。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览要点',
        items: [
          '**入门配置：** GPU RTX 4060 Ti 16 GB——可跑 7B 及大多数 13B 模型。',
          '**中端配置：** GPU RTX 4070 Ti Super 16 GB——可运行 14B 级模型;22B-33B 需更低量化或部分溢出。',
          '**发烧配置：** GPU RTX 5090 32 GB——从容运行 33B;70B 仅在采用激进量化或部分溢出到系统内存时才能运行。',
          '**Q4_K_M 下的显存经验法则：** 每十亿参数约 0.6 GB,另加 2-4 GB 用于上下文和工具链。',
          '**系统内存建议：** 入门配置 32 GB,中端配置 64 GB,发烧配置 128 GB。',
          '**各档电源：** 入门 650 W、中端 850 W、发烧 1000 W——RTX 5090 单卡就需 575 W。',
          '**2026 年价格现实：** GPU 和 DDR5 内存价格大幅上涨——请确认实时价格,并对比全新与二手 GPU。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '编辑推荐：中端配置',
        highlight: true,
        content:
          '**对大多数购买者,我们的编辑推荐是中端配置。** 它以 RTX 4070 Ti Super 16 GB 为核心,能以 Q4 运行 14B 级模型并留出上下文空间,22B-33B 模型可通过更低量化或部分溢出来处理,速度比入门显卡快得多。如果上限明确是 7B-13B,选入门配置;如果确实需要更多显存跑 33B 或 70B,再升到发烧配置。模型规模和价格都会变化,购买前请再次核实。',
        callouts: [
          {
            type: 'note',
            text: '本编辑推荐是基于厂商规格和常见模型文件大小的编辑判断,既不基于 PromptQuorum 的测试,也不基于价格比较;本页不追踪 RTX 4070 Ti Super 的价格。PromptQuorum 未加入任何联盟营销计划,以下链接不带任何联盟标签——它们只是普通的参考链接,不产生佣金。',
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
          'GPU 的显存和功耗数据来自厂商规格。可运行模型一列是根据模型文件大小和显存做出的估计,并非 PromptQuorum 的测试;实际结果随量化、运行框架和上下文长度而变化。本页不追踪整机总价:只给出 RTX 5090 和 RTX 4090 的价格,不含其他部件。请对比全新与二手 GPU 挂牌价:二手并不一定更便宜。',
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
            '可运行': '14B；22B-33B 需低量化或溢出',
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
          { '你的情况': '我经常跑 14B 模型,想要更快的响应', '装这套': '中端配置' },
          { '你的情况': '我偶尔跑 22B-33B,能接受取舍', '装这套': '中端配置' },
          { '你的情况': '我大量使用 33B 模型,或想要更多显存余量', '装这套': '发烧配置' },
          { '你的情况': '我需要一台能跑 70B 模型的单 GPU 机器（仅限激进量化或部分溢出到系统内存）', '装这套': '发烧配置' },
          { '你的情况': '尽管有 2026 年涨价,我仍想压低总价', '装这套': '任意档位——对比全新与二手 GPU 的挂牌价' },
          { '你的情况': '我拿不定主意,想要一个中间方案', '装这套': '中端配置——编辑推荐' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: '入门配置：RTX 4060 Ti 16 GB',
        content:
          '**入门配置是本指南三套中成本最低的,能运行 7B 模型,以及 Q4 下的大多数 13B 模型——对很多新手已经够用。** 它以本指南中最便宜的 16 GB 显卡 RTX 4060 Ti 16 GB 为核心,有助于压低总价。',
        items: [
          '**GPU——RTX 4060 Ti 16 GB：** 16 GB 显存,165 W。Q4 的 14B 模型可以装下并留有上下文余量。本页不给出速度数字:PromptQuorum 未测试过这张卡,速度会随量化、运行框架和上下文长度变化。选它而非 8 GB 版本的理由正是 16 GB 容量。',
          '**CPU——AMD Ryzen 7 7700：** 8 核心,功耗适中。GPU 推理期间 CPU 工作量很小,因此这一档用中端芯片是正确的——不要在这一档的 CPU 上超额花钱。',
          '**主板——B650 芯片组：** 支持 Ryzen 7 和一块 PCIe 全尺寸 GPU。这一档不需要高端供电。',
          '**内存——32 GB DDR5：** 足够运行操作系统、工具链以及一个驻留在显存中的 7B-13B 模型。内存不能替代显存。DDR5 在 2026 年大幅涨价,请查看实时价格。',
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
          '**中端配置是编辑推荐:一张更快的显卡用于日常 14B 工作,较大的 22B-33B 模型可通过更低量化或部分溢出来运行。** 它以 RTX 4070 Ti Super 16 GB 为核心,其更高的显存带宽使它在相同模型上比入门显卡快得多。',
        items: [
          '**GPU——RTX 4070 Ti Super 16 GB：** 16 GB 显存,285 W。容量与入门档相同,但显存带宽高得多,因此 7B-14B 模型响应明显更快。33B 的 Q4 模型（约 18-20 GB）装不进 16 GB,所以 22B-33B 区间中较大的模型需要更低量化或部分溢出。',
          '**CPU——AMD Ryzen 9 7900X：** 12 核心。在数据准备和推理同时运行工具链方面,比入门 CPU 有更多余量。',
          '**主板——B650 或 X670 芯片组：** 为 12 核 CPU 和一块 285 W GPU 提供稳固供电。',
          '**内存——64 GB DDR5：** 可容纳操作系统、更大的上下文窗口、部分溢出,以及与模型并行运行的 RAG 流水线等工具。预算紧张时,32 GB 对完全装进显存的模型已经够用;需要溢出的模型则受益于更大内存。',
          '**存储——2 TB NVMe SSD：** 可容纳相当规模的模型库——一个 33B Q4 模型约 18-20 GB。',
          '**电源——850 W 80+ 金牌：** 在持续负载下为 285 W GPU 和 12 核 CPU 提供从容余量。',
          '**机箱与散热——配 240-280 mm 一体式水冷或高端风冷散热器的中塔机箱：** 中端档发热中等,优质散热器在长时间推理中保持 CPU 稳定。',
          '**为何装这一档:** 你经常跑 14B 模型并想要更快的响应,或偶尔跑 22B-33B 且能接受取舍。**为何跳过它:** 如果 7B-13B 就够,入门配置更省钱;如果目标是 70B,16 GB 远远不够——请看发烧配置。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '中端配置容纳的模型与入门配置相同——你付的是速度,而非容量。如果 14B 模型将成为日常工作负载且等待它会让你恼火,就装这一档。',
          },
          {
            type: 'note',
            text: '二手 RTX 4090 24 GB 是一条昂贵的捷径:2026 年 10 月 eBay 美国站成交价为 $2,575–3,010（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，美国市场，2026-11-27 查阅）。本页不追踪 RTX 4070 Ti Super 的价格,购买前请对比当前全新与二手挂牌价。',
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
          '**本指南三套配置中,只有发烧配置能在单块 GPU 上运行 70B 模型,且需要激进量化或部分溢出到系统内存——它的 RTX 5090 32 GB 是核心部件。** 装这一档主要是为了显存容量。RTX 5090 的新品零售价约 $4,500–4,700，MSRP 为 $1,999（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，美国市场，2026-11-27 查阅）,因此应预期 GPU 是最大的一项开支。',
        items: [
          '**GPU——RTX 5090 32 GB（新品零售价约 $4,500–4,700，来源未给该区间标注日期，MSRP 为 $1,999；二手为 eBay 美国站成交价 $5,900–6,350，2026 年 10 月；[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，美国市场，2026-11-27 查阅；并非报价）：** 32 GB GDDR7 显存,575 W。本指南中显存最大的单块 GPU。它能以 Q4 从容运行 33B 模型,但 70B 模型只能通过激进量化或部分溢出到系统内存来运行。',
          '**CPU——AMD Ryzen 9 7950X：** 16 核心。足以在繁重推理之外运行数据准备、微调实验和工具链。',
          '**主板——X670E 芯片组：** 强劲供电和 PCIe 5.0,按一块 575 W GPU 和 16 核 CPU 来定规格。',
          '**内存——128 GB DDR5：** 可容纳大上下文窗口、同时加载多个模型、工具链以及部分溢出到内存。64 GB 套装是成本更低的替代方案。',
          '**存储——4 TB NVMe SSD：** 70B 的 Q4 模型约 40 GB;4 TB 硬盘可存放大量大型模型。',
          '**电源——1000 W 80+ 白金：** NVIDIA 标明 RTX 5090 的显卡功耗为 575 W,系统所需功率为 1000 W（视整机配置而异）。750 W 电源低于该建议,请不要把这个部件选小。',
          '**机箱与散热——配 360 mm 一体式水冷的大型机箱：** 575 W 的 GPU 和 16 核 CPU 发热可观;请按持续负载规划风道和 CPU 散热。',
          '**为何装这一档:** 你想从容运行 33B 模型、愿意带着取舍跑 70B,或要做繁重的批量推理。**为何跳过它:** 对 7B-14B 模型来说它超出所需——中端配置无需 RTX 5090 的开销就能运行这些规模。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090 单卡就需 575 W。请搭配本部件清单中的 1000 W 电源——更小的电源低于 NVIDIA 的建议,可能在负载下导致关机或不稳定。装机前确认墙插线路能提供全部功耗。本内容并非用电安全建议;请遵循 NVIDIA 和电源厂商的指引。',
          },
          {
            type: 'note',
            text: '70B 模型在 Q4 下约需 39-42 GB 显存,即使 RTX 5090 32 GB 也无法完整装下:需要更低量化或部分溢出到系统内存。本配置的 128 GB 内存为这种溢出提供了空间。',
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
          '**2026 年的存储供应短缺大幅推高了大显存 GPU 和 DDR5 内存的价格,这两个部件可能占去预算的很大一部分。** 请按当前挂牌价规划,而不是发布价。',
        items: [
          '**先查 GPU 和内存。** GPU 通常是本地 AI PC 中最贵的部件,而 DDR5 内存在 2026 年明显涨价。本页不追踪整机总价,因此不对各项开支排序。',
          '**存储供应是主要原因。** [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)认为 GPU 涨价主要源于 GDDR7 短缺,因为存储产能转向 AI 数据中心,并称 16 GB 及以上的显卡供应最紧。对于 DDR5,[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) 同样指出产能转向 HBM 和服务器 DRAM。RTX 5090 的新品零售价约 $4,500–4,700，MSRP 为 $1,999（4,500 / 1,999 = 2.25 倍；InsiderLLM，美国市场，2026-11-27 查阅）——超过两倍。',
          '**低端 GPU 的价格在此未追踪。** 入门和中端配置所用的 RTX 4060 Ti 16 GB 与 RTX 4070 Ti Super 不在该追踪来源的覆盖范围内，请查看实时挂牌价。',
          '**二手并非可靠的折扣。** [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场，2026-11-27 查阅）显示，2026 年 10 月 eBay 美国站二手成交价：RTX 5090 为 $5,900–6,350（新品零售价约 $4,500–4,700，来源未标日期），RTX 4090 为 $2,575–3,010（中位数 $2,860，216 笔成交）;这些是挂牌数据,不是报价。每张卡都应对比全新与二手;只有明显更便宜时才买经验证可用的二手卡。',
          '**DDR5 涨幅很大;其他部件未追踪。** DDR5 价格在截至 2026 年 8 月的 12 个月内上涨约 500%（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)，2026-08-18；一套 128 GB DDR5-6400 内存标价 $3,399）。本页不追踪 CPU、主板、电源和 SSD 的价格,请一并核实。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026 年的存储短缺大幅推高了大显存 GPU 和 DDR5 内存的价格,估算装机成本时请先核对这两项。',
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
          '**2. 你的硬性预算上限是多少？** 入门配置成本最低，中端配置居中，发烧配置最高——仅 RTX 5090 的新品零售价就约 $4,500–4,700（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，美国市场，2026-11-27 查阅）。',
          '**3. 买全新还是二手 GPU？** 两者都要对比——据 [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场，2026-11-27 查阅）,二手 RTX 5090 成交价高于全新零售价,二手 RTX 4090 成交价与全新挂牌区间重叠;只有明显更便宜时,二手卡才有意义。',
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
          '**大型零售商有这些配置所需的各类部件;尤其要针对 GPU 对比全新与二手挂牌价。** 下方链接为普通的产品搜索链接,不带任何联盟标签,也不产生佣金。',
        items: [
          '**Amazon 和 Newegg：** CPU、内存、SSD、电源和机箱品类丰富。全新 GPU 和 DDR5 的库存与价格请实时查看。',
          '**二手 GPU 市场：** 值得一看,但并不保证省钱——据 [InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场，2026-11-27 查阅）,二手 RTX 5090 成交价高于全新零售价,二手 RTX 4090 成交价与全新挂牌区间重叠。只有当二手卡明显更便宜且经验证可用时才买。',
          '**Micro Center（美国,实体店）：** 如果附近有门店,可作为对比全新 GPU 和 CPU 价格的又一选择;也可留意 CPU 加主板套装。',
          '**先买 GPU。** 它通常是最贵的部件,价格可能变化很快——以你能接受的价格拿下它,再配齐其他部件。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '本指南不追踪整机总价。装机前请打开 GPU 和内存的当前零售页面——它们可能占成本的很大一部分。',
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
          '**买系统内存代替显存。** 内存可以让模型溢出显存,但部分或全部从内存运行的模型通常慢得多,往往难以满足流畅的交互使用。按目标模型所需购买显存。',
          '**电源选小了。** 单是 RTX 5090 就需 575 W。一只在负载下塌陷的电源,比一块更慢但运行稳定的 GPU 更糟——把电源与档位匹配。',
          '**死盯发布时价格。** 2026 年的涨价意味着 GPU 的建议零售价和去年的内存价格都不再反映现实。请按实时零售价为 GPU 和内存做预算,并对比二手市场,而不是想当然地认为二手更便宜。',
          '**为入门配置买了 8 GB 版 RTX 4060 Ti。** 它与 16 GB 版同名,却容纳不下 14B 模型。请在商品页确认是 16 GB 版本。',
          '**为 7B 模型过度配置。** 如果 7B 模型已满足需求,发烧配置只会带来贵得多的 GPU 和高得多的功耗（575 W,入门显卡为 165 W）,收益很小。让档位匹配模型,而不是匹配你手头刚好有的预算。',
          '**略过机箱与散热的规划。** 一块 575 W GPU 加一颗 16 核 CPU 会产生真实的热量。订购部件前,确认机箱能容纳 GPU 和散热器并具备风道。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[本地 LLM GPU 选购指南 2026](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum：GPU 选购建议和 2026 年涨价背景。',
          '[搭建本地 LLM 工作站](/zh/local-llms/local-llm-workstation-build) — PromptQuorum：发烧档之外的双 GPU 70B 工作站部件清单、散热和电源指南。',
          '[NVIDIA GeForce RTX 40 与 50 系列规格](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti、4070 Ti Super 和 5090 的官方显存容量与功耗（TGP）数据。',
          '[PCPartPicker](https://pcpartpicker.com) — AMD Ryzen CPU、DDR5 内存、NVMe SSD 和电源的实时部件价格。',
          '[InsiderLLM：NVIDIA GPU 价格](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — RTX 5090 与 RTX 4090 数据及 GPU 供应说明所用的第三方追踪来源（美国市场，2026-11-27 查阅）。',
          '[Hardware Busters：DDR5 内存价格](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — DDR5 涨价数据来源（2026-08-18）。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: "单GPU配置用1000W电源是否过剩?",
            a: '对 RTX 5090 并不过度:NVIDIA 标明其显卡功耗为 575 W,系统所需功率为 1000 W（视整机配置而异）。对本指南的入门和中端配置,1000 W 超出所需:650 W 和 850 W（80+ 金牌）即可为 RTX 4060 Ti 16 GB 和 RTX 4070 Ti Super 16 GB 留出余量。带原生 12V-2x6 接口的 ATX 3.1 电源比单纯增加瓦数更重要。',
          },
          {
            q: '2026 年装一台本地 AI PC 要花多少钱？',
            a: '由于 2026 年 GPU 和内存价格变化很快,本页不追踪整机总价。发烧配置的 RTX 5090 新品零售价约 $4,500–4,700（[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，美国市场，2026-11-27 查阅），DDR5 价格在截至 2026 年 8 月的 12 个月内上涨约 500%（[Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)，2026-08-18）。请把所选档位部件清单的实时价格相加。',
          },
          {
            q: '本地 AI PC 配置该用哪块 GPU？',
            a: '按你目标中最大的模型来选 GPU。RTX 4060 Ti 16 GB 适合面向 7B-13B 模型的入门配置,RTX 4070 Ti Super 16 GB 适合面向 14B-33B 模型的中端配置,RTX 5090 32 GB 适合面向 70B 工作负载的发烧配置。GPU 决定这台机器能跑哪些模型,因此它最先选定,部件清单的其余部分围绕它来构建。需要注意:16 GB 显卡运行 14B-33B 区间中较大的模型时,需要更低量化或部分溢出。',
          },
          {
            q: '本地 AI PC 需要多少内存？',
            a: '入门配置建议 32 GB,中端配置 64 GB,发烧配置 128 GB。系统内存不能替代显存——部分或全部从内存运行的模型通常慢得多,往往难以满足流畅的交互使用。内存用于操作系统、上下文、工具链和溢出;GPU 显存按目标模型所需购买。',
          },
          {
            q: '本地 AI PC 需要什么样的电源？',
            a: '把电源与档位匹配:入门配置 650 W,中端配置 850 W,发烧配置 1000 W。发烧档需要 1000 W,因为 RTX 5090 单卡就需 575 W。电源选小会在负载下导致不稳定,所以不要削减这个部件。',
          },
          {
            q: '2026 年 GPU 部件该买全新还是二手？',
            a: '决定前先对比全新与二手,不要想当然认为二手更便宜。[InsiderLLM GPU 价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场，2026-11-27 查阅）显示，2026 年 10 月 eBay 美国站二手成交价：RTX 5090 为 $5,900–6,350（新品零售价约 $4,500–4,700，来源未标日期），RTX 4090 为 $2,575–3,010。只有当二手卡明显更便宜且经验证可用时才值得买。CPU、内存、SSD 和电源,考虑到保修,我们通常会买全新的。',
          },
          {
            q: '单 GPU 配置能跑 70B 模型吗？',
            a: '能,发烧配置可以。RTX 5090 32 GB 是本指南中显存最大的单块 GPU,但 70B 模型在 Q4 下约需 39-42 GB 显存——因此它只有在采用激进量化或部分溢出到系统内存的情况下才能运行 70B。发烧配置中的 128 GB 内存为这种溢出提供了所需空间。',
          },
          {
            q: '中端配置相比入门配置,多花的钱值得吗？',
            a: '如果你经常运行 14B 级模型,可能值得。两套配置都是 16 GB 显存,所以中端配置并不能把更大的模型装进显存,但 RTX 4070 Ti Super 的显存带宽高得多,响应更快。如果上限明确是 7B-13B,入门配置更省钱。',
          },
          {
            q: '本地 AI PC 需要 Threadripper CPU 吗？',
            a: '不需要。本指南三套配置用消费级 Ryzen CPU 就够了——入门档用 Ryzen 7,中端和发烧档用 Ryzen 9。Threadripper 主要适合需要更多 PCIe 通道的多 GPU 机器,这超出了这些单 GPU 配置的范围。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[用完整选购指南为你的配置挑选 GPU](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 四个预算档位的十款消费级 GPU,附注明日期的价格。',
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
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-es.webp',
    title: 'Guía para armar una PC con IA local 2026: 3 niveles de presupuesto',
    seoTitle: 'PC para IA local 2026: del básico a la estación 70B',
    intro:
      'La mayoría de las guías de armado para IA local empiezan por la CPU, pero la GPU y su VRAM deciden en gran medida qué modelos puede ejecutar la máquina: las demás piezas se eligen para apoyar esa GPU. Esta guía ofrece tres listas de componentes para una PC de LLM local: una configuración económica para modelos 7B-13B, una media para 14B-33B y una entusiasta para trabajar con 70B. Cada nivel indica sus componentes principales y los tamaños de modelo a los que apunta. Una salvedad sobre precios: la escasez de memoria encareció en 2026 las GPU con mucha VRAM y la RAM DDR5. Aquí no se rastrean los totales; los únicos precios de GPU que se dan son los de la RTX 5090 y la RTX 4090, del [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU., consultado el 2026-11-27): revisa los listados en vivo antes de pedir.',
    metaDescription:
      'Tres PCs para IA local en 2026: económica 7B–13B, media 14B–33B y entusiasta 70B. Listas de componentes, algunos precios de GPU fechados (EE. UU.) y notas sobre la escasez de DDR5 de 2026.',
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
      '**Elige la configuración cuya VRAM de GPU encaje con tu modelo objetivo. La económica apunta a modelos 7B-13B, la media a 14B-33B (los más grandes con una cuantización menor o descarga parcial) y la entusiasta a 70B con los mismos compromisos. Aquí no se rastrean los totales porque los precios de GPU y RAM de 2026 cambian rápido; los pocos precios de GPU que se muestran tienen fuente y fecha.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo armo una PC para ejecutar LLM locales en 2026?',
        answer:
          'Elige el nivel según el modelo más grande que quieras ejecutar y arma alrededor de la GPU. La configuración económica combina una RTX 4060 Ti 16 GB con un Ryzen 7 para modelos 7B-13B. La media usa una RTX 4070 Ti Super 16 GB para 14B-33B, y los más grandes necesitan una cuantización menor o descarga parcial. La entusiasta usa una RTX 5090 32 GB para trabajar con 70B, con esos mismos compromisos. Los precios de GPU y RAM DDR5 subieron con fuerza en 2026, así que aquí no se rastrean totales y solo los pocos precios de GPU mostrados tienen fuente y fecha.',
        bullets: [
          'Configuración económica: RTX 4060 Ti 16 GB, ejecuta modelos 7B-13B',
          'Configuración media: RTX 4070 Ti Super 16 GB, apunta a 14B-33B (los grandes, con compromisos)',
          'Configuración entusiasta: RTX 5090 32 GB, ejecuta modelos 70B solo con cuantización agresiva o descarga parcial',
          'Los precios de GPU y DDR5 subieron con fuerza en 2026: compara GPU nuevas y usadas, porque lo usado no es necesariamente más barato',
        ],
        updatedDate: '2026-11-27',
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
          '**Los precios de 2026 encarecieron las configuraciones.** La escasez de memoria encareció las GPU con mucha VRAM y la RAM DDR5. Aquí no se rastrean los totales, y la RAM puede ser un gasto importante (los precios de la DDR5 subieron cerca de un 500 % en 12 meses hasta agosto de 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Configuración económica:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD de 1 TB, fuente de 650 W — ejecuta modelos 7B-13B a velocidad usable. La de menor costo de las tres configuraciones de esta guía.',
          '**Configuración media:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD de 2 TB, fuente de 850 W — ejecuta modelos de clase 14B mucho más rápido que la tarjeta económica; los modelos 22B-33B más grandes necesitan una cuantización menor o descarga parcial a la RAM del sistema.',
          '**Configuración entusiasta:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD de 4 TB, fuente de 1000 W — de las tres configuraciones aquí, la única que puede ejecutar un modelo 70B en una sola GPU, y solo con cuantización agresiva o descarga parcial a la RAM del sistema. La RTX 5090 sola se lista nueva en unos $4.500–4.700 ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado de EE. UU., consultado el 2026-11-27).',
          '**La RAM no sustituye a la VRAM.** La RAM del sistema permite que un modelo desborde la VRAM, pero un modelo que se ejecuta en parte o por completo desde la RAM suele ser mucho más lento, a menudo demasiado para un uso interactivo cómodo. Compra la VRAM que necesite tu modelo objetivo; la RAM sirve sobre todo para el sistema, las herramientas y la descarga.',
          '**La fuente de alimentación escala con la GPU.** Una configuración económica necesita 650 W, la media 850 W y la entusiasta 1000 W porque la RTX 5090 sola consume 575 W. Presupuesta la fuente junto con la tarjeta.',
          '**Lo usado ya no es un descuento garantizado.** Según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU., consultado el 2026-11-27; las cifras de usados son ventas en eBay US de octubre de 2026; los rangos de precio nuevo no están fechados en la fuente), las RTX 5090 vendidas de segunda mano ($5.900–6.350) superan el precio nuevo (unos $4.500–4.700) y las RTX 4090 usadas ($2.575–3.010) se solapan con el rango de anuncios nuevos ($2.000–3.000), así que compara ambas antes de comprar. Una tarjeta usada con funcionamiento verificado sigue valiendo la pena cuando es claramente más barata — pero nunca lo des por hecho.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Configuración económica:** GPU RTX 4060 Ti 16 GB — ejecuta modelos 7B y la mayoría de los 13B.',
          '**Configuración media:** GPU RTX 4070 Ti Super 16 GB — ejecuta modelos de clase 14B; 22B-33B con cuantización menor o descarga parcial.',
          '**Configuración entusiasta:** GPU RTX 5090 32 GB — ejecuta 33B con comodidad y 70B solo con cuantización agresiva o descarga parcial.',
          '**Regla general de VRAM en Q4_K_M:** aproximadamente 0,6 GB por cada mil millones de parámetros, más 2-4 GB para contexto y herramientas.',
          '**Guía de RAM del sistema:** 32 GB para la configuración económica, 64 GB para la media, 128 GB para la entusiasta.',
          '**Fuente de alimentación por nivel:** 650 W económica, 850 W media, 1000 W entusiasta — la RTX 5090 sola consume 575 W.',
          '**Realidad de precios 2026:** los precios de GPU y RAM DDR5 subieron con fuerza: confirma los precios actuales y compara GPU nuevas y usadas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Elección del editor: la configuración media',
        highlight: true,
        content:
          '**Nuestra elección editorial para la mayoría es la configuración media.** Construida alrededor de una RTX 4070 Ti Super 16 GB, ejecuta modelos de clase 14B en Q4 con espacio para contexto, puede manejar modelos 22B-33B con una cuantización menor o descarga parcial y es mucho más rápida que la tarjeta económica. Elige la económica si tu techo está firmemente en 7B-13B; sube a la entusiasta si necesitas específicamente más VRAM para 33B o 70B. Los tamaños de modelo y los precios cambian, así que vuelve a comprobarlos antes de comprar.',
        callouts: [
          {
            type: 'note',
            text: 'Esta elección del editor es un criterio editorial basado en las especificaciones de los fabricantes y en tamaños de archivo habituales de los modelos. No se basa en pruebas de PromptQuorum ni en una comparación de precios; el precio de la RTX 4070 Ti Super no se rastrea aquí. PromptQuorum no está inscrito en ningún programa de afiliados y los enlaces a continuación no llevan etiquetas de afiliado — son enlaces de referencia simples que no generan comisión.',
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
          'Las cifras de VRAM y potencia de las GPU son especificaciones del fabricante. La columna de modelos ejecutables es una estimación a partir del tamaño de los archivos y la VRAM, no una prueba de PromptQuorum; los resultados varían según la cuantización, el motor de ejecución y la longitud del contexto. No se rastrean totales: esta página solo da precios de la RTX 5090 y la RTX 4090, no de las demás piezas. Compara listados de GPU nuevas y usadas: lo usado no es necesariamente más barato.',
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
            'Ejecuta': '14B; 22B-33B con menor cuant. o descarga',
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
          { 'Tu situación': 'Uso modelos 14B constantemente y quiero respuestas más rápidas', 'Arma esta': 'Configuración media' },
          { 'Tu situación': 'Hago algo de 22B-33B y acepto los compromisos', 'Arma esta': 'Configuración media' },
          { 'Tu situación': 'Uso mucho 33B o quiero más margen de VRAM', 'Arma esta': 'Configuración entusiasta' },
          { 'Tu situación': 'GPU única para modelos 70B (solo con cuantización agresiva o descarga parcial)', 'Arma esta': 'Configuración entusiasta' },
          { 'Tu situación': 'Quiero mantener el total bajo a pesar del aumento de 2026', 'Arma esta': 'Cualquier nivel — compara listados de GPU nuevas y usadas' },
          { 'Tu situación': 'No estoy seguro y quiero una opción intermedia', 'Arma esta': 'Configuración media — la elección del editor' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuración económica: RTX 4060 Ti 16 GB',
        content:
          '**La configuración económica es la de menor costo de las tres de esta guía y ejecuta modelos 7B y, en Q4, la mayoría de los 13B: suficiente para muchos principiantes.** Se basa en la RTX 4060 Ti 16 GB, la tarjeta de 16 GB más barata de esta guía, lo que ayuda a mantener bajo el total.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB de VRAM, 165 W. Los modelos 14B en Q4 caben con margen para el contexto. No damos una cifra de velocidad: PromptQuorum no ha medido esta tarjeta, y la velocidad varía según la cuantización, el motor y la longitud del contexto. La capacidad de 16 GB es la razón para elegirla frente a la versión de 8 GB.',
          '**CPU — AMD Ryzen 7 7700:** 8 núcleos, consumo de energía moderado. La CPU hace poco trabajo durante la inferencia de GPU, por lo que un chip de gama media es correcto aquí — no gastes de más en la CPU en este nivel.',
          '**Placa base — chipset B650:** soporta el Ryzen 7 y una GPU de tamaño completo en PCIe. No necesitas suministro de energía de gama alta en este nivel.',
          '**RAM — 32 GB DDR5:** suficiente para el sistema operativo, las herramientas y un modelo 7B-13B que se ejecute en la VRAM. La RAM no sustituye a la VRAM. Los precios de la DDR5 subieron con fuerza en 2026, así que consulta el precio actual.',
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
          '**La configuración media es la elección del editor: una tarjeta más rápida para el trabajo diario con 14B, y los modelos 22B-33B más grandes son posibles con una cuantización menor o descarga parcial.** Se basa en la RTX 4070 Ti Super 16 GB, cuyo mayor ancho de banda de memoria la hace mucho más rápida que la tarjeta económica con los mismos modelos.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB de VRAM, 285 W. La misma capacidad que el nivel económico, con mucho más ancho de banda de memoria, así que los modelos 7B-14B responden notablemente más rápido. Un modelo 33B en Q4 (unos 18-20 GB) no cabe en 16 GB, por lo que los modelos más grandes entre 22B y 33B necesitan una cuantización menor o descarga parcial.',
          '**CPU — AMD Ryzen 9 7900X:** 12 núcleos. Más margen que la CPU económica para preparación de datos y ejecución de herramientas junto a la inferencia.',
          '**Placa base — chipset B650 o X670:** suministro de energía sólido para la CPU de 12 núcleos y una GPU de 285 W.',
          '**RAM — 64 GB DDR5:** espacio para el sistema operativo, ventanas de contexto más grandes, descarga parcial y herramientas como un pipeline RAG junto al modelo. Si el presupuesto es ajustado, 32 GB bastan para modelos que caben por completo en la VRAM; los modelos con descarga aprovechan más.',
          '**Almacenamiento — SSD NVMe de 2 TB:** contiene una biblioteca de modelos considerable — un modelo 33B Q4 pesa aproximadamente 18-20 GB.',
          '**Fuente de alimentación — 850 W 80+ Gold:** margen cómodo para la GPU de 285 W y la CPU de 12 núcleos bajo carga sostenida.',
          '**Gabinete y refrigeración — torre media con AIO de 240-280 mm o enfriador de aire de alta gama:** el nivel medio genera calor moderado; un enfriador de calidad mantiene la CPU estable durante largas sesiones de inferencia.',
          '**Por qué armar este nivel:** usas modelos 14B constantemente y quieres respuestas más rápidas, o haces algo de 22B-33B y aceptas los compromisos. **Por qué saltarlo:** si te basta con 7B-13B, la económica cuesta menos; si tu objetivo es 70B, 16 GB son muy insuficientes: mira la entusiasta.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuración media cabe los mismos modelos que la configuración económica — estás pagando por velocidad, no por capacidad. Arma este nivel si los modelos 14B serán una carga de trabajo diaria y esperar en ellos te molestaría.',
          },
          {
            type: 'note',
            text: 'Una RTX 4090 24 GB usada es un atajo caro: las ventas en eBay US fueron de $2.575–3.010 en octubre de 2026 ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado de EE. UU., consultado el 2026-11-27). El precio de la RTX 4070 Ti Super no se rastrea aquí, así que compara los listados actuales, nuevos y usados, antes de comprar.',
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
          '**De las tres configuraciones aquí, solo la entusiasta puede ejecutar un modelo 70B en una sola GPU, y solo con cuantización agresiva o descarga parcial a la RAM del sistema; su RTX 5090 32 GB es la pieza principal.** Arma este nivel sobre todo por la capacidad de VRAM. La RTX 5090 se lista nueva a unos $4.500–4.700 frente a $1.999 de PVP ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado de EE. UU., consultado el 2026-11-27), así que cuenta con que la GPU sea el mayor gasto.',
        items: [
          '**GPU — RTX 5090 32 GB (nueva unos $4.500–4.700, un rango que la fuente no fecha, frente a $1.999 de PVP; ventas de segunda mano en eBay US $5.900–6.350, octubre de 2026; [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado de EE. UU., consultado el 2026-11-27; no son cotizaciones):** 32 GB de VRAM GDDR7, 575 W. La GPU individual con más VRAM de esta guía. Ejecuta modelos 33B en Q4 con margen, pero un 70B solo con cuantización agresiva o descarga parcial a la RAM del sistema.',
          '**CPU — AMD Ryzen 9 7950X:** 16 núcleos. Suficiente para ejecutar preparación de datos, experimentos de fine-tuning y herramientas junto a inferencia pesada.',
          '**Placa base — chipset X670E:** suministro de energía robusto y PCIe 5.0, dimensionado para una GPU de 575 W y la CPU de 16 núcleos.',
          '**RAM — 128 GB DDR5:** espacio para ventanas de contexto grandes, varios modelos cargados a la vez, herramientas y descarga parcial a la RAM. Un kit de 64 GB es la alternativa de menor costo.',
          '**Almacenamiento — SSD NVMe de 4 TB:** un modelo 70B en Q4 pesa unos 40 GB; una unidad de 4 TB guarda una gran biblioteca de modelos grandes.',
          '**Fuente — 1000 W 80+ Platinum:** NVIDIA indica para la RTX 5090 575 W de potencia gráfica y 1000 W de potencia de sistema requerida (varía según el resto del equipo). Una fuente de 750 W queda por debajo de esa indicación, así que no la subdimensiones.',
          '**Gabinete y refrigeración — gabinete grande con AIO de 360 mm:** la GPU de 575 W y la CPU de 16 núcleos generan calor real; planifica el flujo de aire y la refrigeración de la CPU para carga sostenida.',
          '**Por qué armar este nivel:** quieres modelos 33B con margen, estás dispuesto a usar 70B con compromisos o haces inferencia por lotes intensiva. **Por qué saltarlo:** para modelos 7B-14B es más de lo necesario: la media ejecuta esos tamaños sin el costo de una RTX 5090.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La RTX 5090 consume 575 W por sí sola. Combínala con la fuente de 1000 W de esta lista: una menor queda por debajo de la indicación de NVIDIA y puede causar apagados o inestabilidad bajo carga. Confirma antes de armar que tu circuito eléctrico puede suministrar todo el consumo. Esto no es asesoramiento de seguridad eléctrica; sigue las indicaciones de NVIDIA y del fabricante de la fuente.',
          },
          {
            type: 'note',
            text: 'Un modelo 70B en Q4 necesita unos 39-42 GB de VRAM, así que ni siquiera la RTX 5090 32 GB puede alojarlo entero: necesita una cuantización menor o descarga parcial a la RAM del sistema. Los 128 GB de RAM de esta configuración dan espacio a esa descarga.',
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
          '**En 2026 la escasez de memoria encareció con fuerza las GPU con mucha VRAM y la RAM DDR5, y estas dos piezas pueden llevarse gran parte del presupuesto.** Planifica con precios de listado actuales, no con precios de lanzamiento.',
        items: [
          '**Revisa primero la GPU y la RAM.** La GPU suele ser la pieza más cara de una PC para IA local, y la DDR5 se encareció mucho en 2026. Esta página no rastrea totales, así que no ordena las partidas de gasto.',
          '**El suministro de memoria es una causa principal.** El [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) atribuye la subida de las GPU sobre todo a una escasez de GDDR7, porque la producción de memoria se desplaza hacia centros de datos de IA, y señala que las tarjetas de 16 GB o más tienen el suministro más ajustado. Para la DDR5, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) apunta igualmente a que la producción se mueve hacia HBM y DRAM para servidores. La RTX 5090 se lista nueva a unos $4.500–4.700 frente a $1.999 de PVP (4.500 / 1.999 = 2,25×; InsiderLLM, mercado de EE. UU., consultado el 2026-11-27): más del doble.',
          '**Los precios de las GPU de gama baja no se rastrean aquí.** La RTX 4060 Ti 16 GB y la RTX 4070 Ti Super de las configuraciones económica y media no están cubiertas por el rastreador; revisa los listados en vivo.',
          '**Lo usado no es un descuento fiable.** El [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU., consultado el 2026-11-27) muestra, para ventas de segunda mano en eBay US en octubre de 2026, $5.900–6.350 para la RTX 5090, frente a unos $4.500–4.700 en tienda nueva (sin fecha en la fuente), y $2.575–3.010 para la RTX 4090 (mediana $2.860, 216 ventas); son datos de listados, no cotizaciones. Compara nuevo y usado en cada tarjeta; compra una usada y verificada solo si es claramente más barata.',
          '**La DDR5 se movió mucho; las demás piezas no se rastrean.** Los precios de la DDR5 subieron cerca de un 500 % en 12 meses hasta agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18; un kit DDR5-6400 de 128 GB se listaba a $3.399). Los precios de CPU, placa base, fuente y SSD no se rastrean en esta página, así que revísalos también.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'En 2026 la escasez de memoria encareció con fuerza las GPU con mucha VRAM y la DDR5, así que revisa ambas primero al presupuestar una configuración.',
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
          '**2. ¿Cuál es tu techo de presupuesto estricto?** Configuración económica para el costo más bajo, media para el intermedio, entusiasta para el más alto — solo la RTX 5090 se lista nueva en unos $4.500–4.700 ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado de EE. UU., consultado el 2026-11-27).',
          '**3. ¿GPU nueva o usada?** Compara ambas: según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU., consultado el 2026-11-27), las RTX 5090 vendidas de segunda mano superan el precio nuevo y las ventas usadas de RTX 4090 se solapan con el rango de listados nuevos, así que una usada solo tiene sentido si es claramente más barata.',
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
          '**Los grandes minoristas venden los tipos de piezas de estas configuraciones; compara listados nuevos y usados sobre todo para la GPU.** Los enlaces a continuación son enlaces simples de búsqueda de productos; no llevan etiquetas de afiliado y no generan comisión.',
        items: [
          '**Amazon y Newegg:** una amplia oferta de CPUs, RAM, SSDs, fuentes y gabinetes. Comprueba en vivo la disponibilidad y el precio de las GPU y la DDR5 nuevas.',
          '**Mercado de GPU usadas:** vale la pena revisarlo, pero no garantiza ahorro: según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU., consultado el 2026-11-27), las RTX 5090 vendidas de segunda mano superan el precio nuevo y las ventas usadas de RTX 4090 se solapan con el rango de listados nuevos. Compra usado solo si es claramente más barato y con funcionamiento verificado.',
          '**MercadoLibre y tiendas locales de tecnología:** otras opciones en Latinoamérica para comparar precios de CPUs, placas base y fuentes; busca paquetes de CPU más placa base.',
          '**Compra la GPU primero.** Suele ser la pieza más cara y su precio puede cambiar rápido: asegúrala a un precio que aceptes y luego compra las demás piezas.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'En esta guía no se rastrean los totales. Abre los listados actuales de la GPU y la RAM antes de armar: pueden representar una gran parte del costo.',
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
          '**Comprar RAM del sistema en vez de VRAM.** La RAM permite que un modelo desborde la VRAM, pero un modelo que se ejecuta en parte o por completo desde la RAM suele ser mucho más lento, a menudo demasiado para un uso interactivo cómodo. Compra la VRAM que necesite tu modelo objetivo.',
          '**Subestimar la fuente de alimentación.** La RTX 5090 sola consume 575 W. Una fuente de alimentación que colapsa bajo carga es peor que una GPU más lenta que corre establemente — ajusta la fuente al nivel.',
          '**Anclarse en los precios de lanzamiento.** El aumento de 2026 significa que los precios de lista de las GPU y los precios de la RAM del año pasado ya no reflejan la realidad. Presupuesta la GPU y la RAM contra los precios actuales del minorista y compara el mercado de segunda mano en lugar de asumir que es más barato.',
          '**Comprar la RTX 4060 Ti de 8 GB para la configuración económica.** Comparte nombre con la versión de 16 GB pero no puede alojar un modelo 14B. Confirma la variante de 16 GB en el listado.',
          '**Sobredimensionar para modelos 7B.** Si los 7B cubren tu uso, la configuración entusiasta añade una GPU mucho más cara y un consumo bastante mayor (575 W frente a 165 W de la tarjeta económica) para poco beneficio. Ajusta el nivel al modelo, no al presupuesto que casualmente tengas.',
          '**Saltarse la planificación del gabinete y la refrigeración.** Una GPU de 575 W más una CPU de 16 núcleos genera calor real. Confirma que el gabinete cabe la GPU y el enfriador y tiene flujo de aire antes de pedir las piezas.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Mejor guía de compra de GPU para LLM locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: guía de compra de GPU y contexto de la subida de precios de 2026.',
          '[Armado de workstation para LLM local](/es/local-llms/local-llm-workstation-build) — PromptQuorum: lista de componentes, refrigeración y guía de fuente de alimentación para la workstation 70B de GPU dual detrás del nivel entusiasta.',
          '[Especificaciones de NVIDIA GeForce RTX serie 40 y 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Cifras oficiales de capacidad de VRAM y potencia (TGP) para la RTX 4060 Ti, 4070 Ti Super y 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Precios de componentes en vivo para CPU AMD Ryzen, RAM DDR5, SSD NVMe y fuentes de alimentación.',
          '[InsiderLLM: precios de GPU NVIDIA](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — Rastreador de terceros para las cifras de la RTX 5090 y la RTX 4090 y la explicación del suministro de GPU (mercado de EE. UU., consultado el 2026-11-27).',
          '[Hardware Busters: precios de memoria DDR5](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — Fuente de las cifras de la subida de la DDR5 (2026-08-18).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: "¿Es excesiva una fuente de 1000 W para una configuración con una sola GPU?",
            a: 'No para una RTX 5090: NVIDIA indica 575 W de potencia gráfica y 1000 W de potencia de sistema requerida (varía según el resto del equipo). Para las configuraciones económica y media de esta guía, 1000 W son más de lo necesario: 650 W y 850 W (80+ Gold) cubren la RTX 4060 Ti 16 GB y la RTX 4070 Ti Super 16 GB con margen. Una fuente ATX 3.1 con conector 12V-2x6 nativo importa más que sumar vatios.',
          },
          {
            q: '¿Cuánto cuesta armar una PC para IA local en 2026?',
            a: 'Aquí no se rastrean los totales porque los precios de GPU y RAM de 2026 cambian rápido. La RTX 5090 de la configuración entusiasta se lista nueva a unos $4.500–4.700 ([rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado de EE. UU., consultado el 2026-11-27), y los precios de la DDR5 subieron cerca de un 500 % en 12 meses hasta agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Suma los precios actuales de la lista del nivel que elijas.',
          },
          {
            q: '¿Qué GPU debo poner en una PC para IA local?',
            a: 'Elige la GPU según tu modelo objetivo más grande. Una RTX 4060 Ti 16 GB es adecuada para una configuración económica con modelos 7B-13B, una RTX 4070 Ti Super 16 GB para una configuración media con modelos 14B-33B y una RTX 5090 32 GB para una configuración entusiasta con trabajo en 70B. La GPU decide qué modelos puede ejecutar la máquina, por lo que se elige primero y el resto de la lista de componentes se construye alrededor de ella. Ten en cuenta que con 16 GB los modelos más grandes entre 14B y 33B necesitan una cuantización menor o descarga parcial.',
          },
          {
            q: '¿Cuánta RAM necesito para una PC con IA local?',
            a: 'Calcula 32 GB para la configuración económica, 64 GB para la media y 128 GB para la entusiasta. La RAM del sistema no sustituye a la VRAM: un modelo que se ejecuta en parte o por completo desde la RAM suele ser mucho más lento, a menudo demasiado para un uso interactivo cómodo. La RAM sirve para el sistema, el contexto, las herramientas y la descarga; compra la VRAM que necesite tu modelo objetivo.',
          },
          {
            q: '¿Qué fuente de alimentación necesita una PC con IA local?',
            a: 'Ajusta la fuente de alimentación al nivel: 650 W para la configuración económica, 850 W para la media y 1000 W para la entusiasta. El nivel entusiasta necesita 1000 W porque la RTX 5090 sola consume 575 W. Una fuente de alimentación subdimensionada causa inestabilidad bajo carga, así que no recortes en esta parte.',
          },
          {
            q: '¿Debo comprar los componentes de GPU nuevos o usados en 2026?',
            a: 'Compara nuevo y usado antes de decidir; no asumas que lo usado es más barato. El [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU., consultado el 2026-11-27) muestra, para ventas de segunda mano en eBay US en octubre de 2026, $5.900–6.350 para la RTX 5090, frente a unos $4.500–4.700 en tienda nueva (sin fecha en la fuente), y $2.575–3.010 para la RTX 4090. Una tarjeta usada solo compensa si es claramente más barata y se ha verificado que funciona. Las CPUs, la RAM, los SSD y las fuentes normalmente los compraríamos nuevos por la garantía.',
          },
          {
            q: '¿Puede una configuración de GPU única ejecutar un modelo 70B?',
            a: 'Sí, la configuración entusiasta puede. Una RTX 5090 32 GB tiene más VRAM que cualquier otra GPU individual de esta guía, pero un modelo 70B en Q4 necesita aproximadamente 39-42 GB — por lo que ejecuta 70B solo con cuantización agresiva o descarga parcial a la RAM del sistema. Los 128 GB de RAM de la configuración entusiasta le dan a esa descarga el espacio que necesita.',
          },
          {
            q: '¿Vale la pena la configuración media respecto al costo extra sobre la económica?',
            a: 'Puede valer la pena si usas modelos de clase 14B con frecuencia. Ambas configuraciones tienen 16 GB de VRAM, así que la media no permite cargar en VRAM modelos más grandes, pero la RTX 4070 Ti Super tiene mucho más ancho de banda de memoria y responde más rápido. Si tu techo está firmemente en 7B-13B, la económica cuesta menos.',
          },
          {
            q: '¿Necesito una CPU Threadripper para una PC con IA local?',
            a: 'No. Una CPU Ryzen de consumo basta para las tres configuraciones de esta guía: un Ryzen 7 para el nivel económico y un Ryzen 9 para el medio y el entusiasta. Un Threadripper interesa sobre todo en máquinas multi-GPU que necesitan más líneas PCIe, algo que va más allá de estas configuraciones de una sola GPU.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Elige la GPU de tu configuración con la guía de compra completa](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — diez GPU de consumo en cuatro niveles de presupuesto, con precios fechados.',
          '[Ve la configuración de workstation 70B de GPU dual para uso en producción](/es/local-llms/local-llm-workstation-build) — el nivel de GPU dual con 48 GB de VRAM para modelos de clase 70B, más allá de la configuración entusiasta de esta guía.',
          '[Compara armar una PC contra rentar GPU en la nube](/es/power-local-llm/cloud-gpu-rental-guide-2026) — cuándo rentar supera tener hardware propio para cómputo ocasional.',
          '[Calcula la VRAM que necesita cada tamaño de modelo antes de armar](/es/local-llms/how-much-vram-local-llm) — el método completo de VRAM por tamaño de modelo detrás de las elecciones de nivel aquí.',
          '[Considera una Mac como alternativa a una configuración de PC](/es/power-local-llm/best-mac-for-local-ai-2026) — cuándo el Apple Silicon con memoria unificada supera a una PC con GPU dedicada para IA local.',
        ],
      },
    },
},
  pt: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-pt.webp',
    title: 'Guia para montar um PC com IA local 2026: 3 níveis de orçamento',
    seoTitle: 'PC para IA local 2026: do básico à estação de trabalho 70B',
    intro:
      'A maioria dos guias de montagem para IA local começa pela CPU, mas a GPU e sua VRAM decidem em grande parte quais modelos a máquina consegue executar: as demais peças são escolhidas para dar suporte a essa GPU. Este guia traz três listas de componentes para um PC de LLM local: uma configuração econômica para modelos 7B–13B, uma intermediária para 14B–33B e uma entusiasta para trabalhar com 70B. Cada nível indica os principais componentes e os tamanhos de modelo que pretende atender. Uma ressalva sobre preços: a escassez de memória encareceu em 2026 as GPUs com muita VRAM e a RAM DDR5. Os totais não são rastreados aqui; os únicos preços de GPU informados são os da RTX 5090 e da RTX 4090, do [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA, consultado em 2026-11-27) — confira os anúncios atuais antes de comprar.',
    metaDescription:
      'Três PCs para IA local em 2026: econômica 7B–13B, intermediária 14B–33B e entusiasta 70B. Listas de componentes, alguns preços de GPU datados (EUA) e notas sobre a escassez de DDR5 de 2026.',
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
      '**Escolha a configuração cuja VRAM de GPU atenda ao seu modelo alvo. A econômica mira modelos 7B–13B, a intermediária 14B–33B (os maiores com quantização menor ou descarga parcial) e a entusiasta 70B com as mesmas concessões. Os totais não são rastreados aqui porque os preços de GPU e RAM de 2026 mudam rápido; os poucos preços de GPU mostrados têm fonte e data.**',
    quickAnswerTop: {
      pt: {
        question: 'Como monto um PC para executar LLMs locais em 2026?',
        answer:
          'Escolha o nível pelo maior modelo que você quer executar e monte em torno da GPU. A configuração econômica combina uma RTX 4060 Ti 16 GB com um Ryzen 7 para modelos 7B–13B. A intermediária usa uma RTX 4070 Ti Super 16 GB para 14B–33B, e os maiores exigem quantização menor ou descarga parcial. A entusiasta usa uma RTX 5090 32 GB para trabalhar com 70B, com essas mesmas concessões. Os preços de GPU e RAM DDR5 subiram muito em 2026, por isso os totais não são rastreados e só os poucos preços de GPU mostrados têm fonte e data.',
        bullets: [
          'Configuração econômica: RTX 4060 Ti 16 GB, executa modelos 7B–13B',
          'Configuração intermediária: RTX 4070 Ti Super 16 GB, mira 14B–33B (maiores com concessões)',
          'Configuração entusiasta: RTX 5090 32 GB, executa modelos 70B apenas com quantização agressiva ou descarga parcial',
          'Os preços de GPU e DDR5 subiram muito em 2026 — compare GPUs novas e usadas, pois o usado não é necessariamente mais barato',
        ],
        updatedDate: '2026-11-27',
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
          '**Os preços de 2026 encareceram as configurações.** A escassez de memória encareceu as GPUs com muita VRAM e a RAM DDR5. Os totais não são rastreados aqui, e a RAM pode ser um custo importante (os preços da DDR5 subiram cerca de 500% em 12 meses até agosto de 2026, [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18).',
          '**Configuração econômica:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD de 1 TB, fonte de 650 W — executa modelos 7B–13B em velocidade utilizável. A de menor custo entre as três configurações deste guia.',
          '**Configuração intermediária:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD de 2 TB, fonte de 850 W — executa modelos da classe 14B muito mais rápido que a placa econômica; os maiores modelos 22B–33B exigem quantização menor ou descarga parcial para a RAM do sistema.',
          '**Configuração entusiasta:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD de 4 TB, fonte de 1000 W — das três configurações aqui, a única que consegue executar um modelo 70B em uma só GPU, e apenas com quantização agressiva ou descarga parcial para a RAM do sistema. Só a RTX 5090 é anunciada nova por cerca de $4.500–4.700 ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado dos EUA, consultado em 2026-11-27).',
          '**A RAM não substitui a VRAM.** A RAM do sistema permite que um modelo ultrapasse a VRAM, mas um modelo rodando em parte ou totalmente a partir da RAM costuma ser muito mais lento, muitas vezes lento demais para um uso interativo confortável. Compre a VRAM que o seu modelo alvo precisa; a RAM serve principalmente ao sistema, às ferramentas e à descarga.',
          '**A fonte de alimentação escala com a GPU.** Uma configuração econômica precisa de 650 W, a intermediária 850 W e a entusiasta 1000 W porque a RTX 5090 sozinha consome 575 W. Inclua a fonte no orçamento junto com a placa.',
          '**O usado não é mais um desconto garantido.** Segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA, consultado em 2026-11-27; os valores de usados são vendas no eBay US de outubro de 2026; as faixas de preço de novas não têm data na fonte), as RTX 5090 vendidas como usadas ($5.900–6.350) superam o preço novo (cerca de $4.500–4.700) e as RTX 4090 usadas ($2.575–3.010) se sobrepõem à faixa de anúncios novos ($2.000–3.000), então compare os dois antes de comprar. Uma placa usada com funcionamento verificado ainda vale a pena quando é claramente mais barata — mas nunca presuma que seja.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Configuração econômica:** GPU RTX 4060 Ti 16 GB — executa modelos 7B e a maioria dos 13B.',
          '**Configuração intermediária:** GPU RTX 4070 Ti Super 16 GB — executa modelos da classe 14B; 22B–33B com quantização menor ou descarga parcial.',
          '**Configuração entusiasta:** GPU RTX 5090 32 GB — executa 33B confortavelmente e 70B apenas com quantização agressiva ou descarga parcial.',
          '**Regra geral de VRAM em Q4_K_M:** aproximadamente 0,6 GB por bilhão de parâmetros, mais 2–4 GB para contexto e ferramentas.',
          '**Guia de RAM do sistema:** 32 GB para a configuração econômica, 64 GB para a intermediária, 128 GB para a entusiasta.',
          '**Fonte de alimentação por nível:** 650 W econômica, 850 W intermediária, 1000 W entusiasta — a RTX 5090 sozinha consome 575 W.',
          '**Realidade de preços em 2026:** os preços de GPU e RAM DDR5 subiram muito — confira os preços atuais e compare GPUs novas e usadas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Escolha do editor: a configuração intermediária',
        highlight: true,
        content:
          '**Nossa escolha editorial para a maioria é a configuração intermediária.** Montada em torno de uma RTX 4070 Ti Super 16 GB, ela executa modelos da classe 14B em Q4 com espaço para contexto, pode lidar com modelos 22B–33B com quantização menor ou descarga parcial e é muito mais rápida que a placa econômica. Escolha a econômica se o seu teto for firmemente 7B–13B; suba para a entusiasta se precisar especificamente de mais VRAM para 33B ou 70B. Tamanhos de modelo e preços mudam, então verifique de novo antes de comprar.',
        callouts: [
          {
            type: 'note',
            text: 'Esta escolha do editor é um julgamento editorial baseado em especificações dos fabricantes e em tamanhos típicos de arquivos de modelos. Não se baseia em testes do PromptQuorum nem em comparação de preços; o preço da RTX 4070 Ti Super não é rastreado aqui. O PromptQuorum não está inscrito em nenhum programa de afiliados e os links abaixo não carregam tags de afiliado — são links de referência simples que não geram comissão.',
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
          'Os números de VRAM e potência das GPUs são especificações dos fabricantes. A coluna de modelos executáveis é uma estimativa a partir do tamanho dos arquivos e da VRAM, não um teste do PromptQuorum; os resultados variam conforme a quantização, o motor de execução e o tamanho do contexto. Os totais não são rastreados: esta página informa preços apenas da RTX 5090 e da RTX 4090, não das outras peças. Compare anúncios de GPUs novas e usadas: o usado não é necessariamente mais barato.',
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
            'Executa': '14B; 22B–33B com quant. menor ou descarga',
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
          { 'Sua situação': 'Uso modelos 14B o tempo todo e quero respostas mais rápidas', 'Monte esta': 'Configuração intermediária' },
          { 'Sua situação': 'Faço um pouco de 22B–33B e aceito as concessões', 'Monte esta': 'Configuração intermediária' },
          { 'Sua situação': 'Uso muito 33B ou quero mais folga de VRAM', 'Monte esta': 'Configuração entusiasta' },
          { 'Sua situação': 'GPU única para modelos 70B (só com quantização agressiva ou descarga parcial)', 'Monte esta': 'Configuração entusiasta' },
          { 'Sua situação': 'Quero manter o total baixo apesar do aumento de 2026', 'Monte esta': 'Qualquer nível — compare anúncios de GPU novos e usados' },
          { 'Sua situação': 'Estou em dúvida e quero uma opção intermediária', 'Monte esta': 'Configuração intermediária — a escolha do editor' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuração econômica: RTX 4060 Ti 16 GB',
        content:
          '**A configuração econômica é a de menor custo entre as três deste guia e executa modelos 7B e, em Q4, a maioria dos 13B — o suficiente para muitos iniciantes.** Ela usa a RTX 4060 Ti 16 GB, a placa de 16 GB mais barata deste guia, o que ajuda a manter o total baixo.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB de VRAM, 165 W. Modelos 14B em Q4 cabem com folga para contexto. Não informamos velocidade: o PromptQuorum não mediu esta placa, e a velocidade varia conforme a quantização, o motor e o tamanho do contexto. A capacidade de 16 GB é o motivo para preferi-la à versão de 8 GB.',
          '**CPU — AMD Ryzen 7 7700:** 8 núcleos, consumo de energia moderado. A CPU faz pouco trabalho durante a inferência de GPU, então um chip de gama intermediária é correto aqui.',
          '**Placa-mãe — chipset B650:** suporta o Ryzen 7 e uma GPU de tamanho completo em PCIe.',
          '**RAM — 32 GB DDR5:** suficiente para o sistema operacional, as ferramentas e um modelo 7B–13B rodando na VRAM. A RAM não substitui a VRAM. Os preços da DDR5 subiram muito em 2026, então confira o preço atual.',
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
          '**A configuração intermediária é a Escolha do Editor: uma placa mais rápida para o trabalho diário com 14B, com os modelos 22B–33B maiores possíveis com quantização menor ou descarga parcial.** Ela usa a RTX 4070 Ti Super 16 GB, cuja maior largura de banda de memória a torna muito mais rápida que a placa econômica nos mesmos modelos.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB de VRAM, 285 W. A mesma capacidade do nível econômico, com largura de banda de memória muito maior, então modelos 7B–14B respondem bem mais rápido. Um modelo 33B em Q4 (cerca de 18–20 GB) não cabe em 16 GB; por isso os modelos maiores entre 22B e 33B exigem quantização menor ou descarga parcial.',
          '**CPU — AMD Ryzen 9 7900X:** 12 núcleos. Mais margem que a CPU econômica para preparação de dados e execução de ferramentas junto à inferência.',
          '**Placa-mãe — chipset B650 ou X670:** fornecimento de energia sólido para a CPU de 12 núcleos e uma GPU de 285 W.',
          '**RAM — 64 GB DDR5:** espaço para o sistema operacional, janelas de contexto maiores, descarga parcial e ferramentas como um pipeline RAG ao lado do modelo. Se o orçamento estiver apertado, 32 GB bastam para modelos que cabem inteiros na VRAM; modelos com descarga aproveitam mais.',
          '**Armazenamento — SSD NVMe de 2 TB:** contém uma biblioteca de modelos considerável — um modelo 33B Q4 pesa aproximadamente 18–20 GB.',
          '**Fonte de alimentação — 850 W 80+ Gold:** margem confortável para a GPU de 285 W e a CPU de 12 núcleos sob carga sustentada.',
          '**Gabinete e resfriamento — torre média com AIO de 240–280 mm ou cooler de ar de alta qualidade:** o nível intermediário gera calor moderado; um cooler de qualidade mantém a CPU estável durante longas sessões de inferência.',
          '**Por que montar este nível:** você usa modelos 14B o tempo todo e quer respostas mais rápidas, ou faz um pouco de 22B–33B e aceita as concessões. **Por que pulá-lo:** se 7B–13B bastam, a econômica custa menos; se o objetivo é 70B, 16 GB são muito pouco — veja a entusiasta.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A configuração intermediária cabe nos mesmos modelos que a configuração econômica — você está pagando por velocidade, não por capacidade. Monte este nível se os modelos 14B serão uma carga de trabalho diária e esperar neles te incomodaria.',
          },
          {
            type: 'note',
            text: 'Uma RTX 4090 24 GB usada é um atalho caro: as vendas no eBay US ficaram em $2.575–3.010 em outubro de 2026 ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado dos EUA, consultado em 2026-11-27). O preço da RTX 4070 Ti Super não é rastreado aqui, então compare os anúncios atuais, novos e usados, antes de comprar.',
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
          '**Das três configurações aqui, apenas a entusiasta consegue executar um modelo 70B em uma só GPU, e apenas com quantização agressiva ou descarga parcial para a RAM do sistema — sua RTX 5090 32 GB é a peça principal.** Monte este nível principalmente pela capacidade de VRAM. A RTX 5090 é anunciada nova por cerca de $4.500–4.700 contra $1.999 de preço sugerido ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado dos EUA, consultado em 2026-11-27); conte com a GPU como o maior custo.',
        items: [
          '**GPU — RTX 5090 32 GB (nova cerca de $4.500–4.700, faixa sem data na fonte, contra $1.999 de preço sugerido; vendas de usadas no eBay US $5.900–6.350, outubro de 2026; [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado dos EUA, consultado em 2026-11-27; não são cotações):** 32 GB de VRAM GDDR7, 575 W. A GPU individual com mais VRAM deste guia. Executa modelos 33B em Q4 com folga, mas um 70B apenas com quantização agressiva ou descarga parcial para a RAM do sistema.',
          '**CPU — AMD Ryzen 9 7950X:** 16 núcleos. Suficiente para executar preparação de dados, experimentos de fine-tuning e ferramentas junto à inferência pesada.',
          '**Placa-mãe — chipset X670E:** fornecimento de energia robusto e PCIe 5.0, dimensionado para uma GPU de 575 W e a CPU de 16 núcleos.',
          '**RAM — 128 GB DDR5:** espaço para janelas de contexto grandes, vários modelos carregados ao mesmo tempo, ferramentas e descarga parcial para a RAM. Um kit de 64 GB é a alternativa de menor custo.',
          '**Armazenamento — SSD NVMe de 4 TB:** um modelo 70B em Q4 tem cerca de 40 GB; uma unidade de 4 TB guarda uma grande biblioteca de modelos grandes.',
          '**Fonte — 1000 W 80+ Platinum:** a NVIDIA informa para a RTX 5090 575 W de potência gráfica e 1000 W de potência de sistema exigida (varia conforme o restante do PC). Uma fonte de 750 W fica abaixo dessa orientação, então não subdimensione esta peça.',
          '**Gabinete e resfriamento — gabinete grande com AIO de 360 mm:** a GPU de 575 W e a CPU de 16 núcleos geram calor real; planeje o fluxo de ar e o resfriamento da CPU para carga contínua.',
          '**Por que montar este nível:** você quer modelos 33B com folga, aceita rodar 70B com concessões ou faz inferência em lote pesada. **Por que pulá-lo:** para modelos 7B–14B é mais do que o necessário — a intermediária executa esses tamanhos sem o custo de uma RTX 5090.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A RTX 5090 consome 575 W sozinha. Combine-a com a fonte de 1000 W desta lista — uma menor fica abaixo da orientação da NVIDIA e pode causar desligamentos ou instabilidade sob carga. Confirme antes de montar se o circuito elétrico suporta todo o consumo. Isto não é aconselhamento de segurança elétrica; siga as orientações da NVIDIA e do fabricante da fonte.',
          },
          {
            type: 'note',
            text: 'Um modelo 70B em Q4 precisa de cerca de 39–42 GB de VRAM, então nem a RTX 5090 32 GB consegue acomodá-lo inteiro: ele precisa de quantização menor ou descarga parcial para a RAM do sistema. Os 128 GB de RAM desta configuração dão espaço a essa descarga.',
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
          '**Em 2026, a escassez de memória encareceu muito as GPUs com muita VRAM e a RAM DDR5, e essas duas peças podem consumir grande parte do orçamento.** Planeje com preços de anúncios atuais, não com preços de lançamento.',
        items: [
          '**Verifique primeiro a GPU e a RAM.** A GPU costuma ser a peça mais cara de um PC para IA local, e a DDR5 ficou bem mais cara em 2026. Esta página não rastreia totais, então não classifica os itens de custo.',
          '**O fornecimento de memória é uma causa principal.** O [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) atribui a alta das GPUs principalmente à escassez de GDDR7, com a produção de memória migrando para data centers de IA, e diz que placas de 16 GB ou mais têm a oferta mais apertada. Para a DDR5, o [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) também aponta a migração da produção para HBM e DRAM de servidores. A RTX 5090 é anunciada nova por cerca de $4.500–4.700 contra $1.999 de preço sugerido (4.500 / 1.999 = 2,25×; InsiderLLM, mercado dos EUA, consultado em 2026-11-27) — mais que o dobro.',
          '**Os preços das GPUs de gama baixa não são rastreados aqui.** A RTX 4060 Ti 16 GB e a RTX 4070 Ti Super das configurações econômica e intermediária não são cobertas pelo rastreador; confira os anúncios ao vivo.',
          '**O usado não é um desconto confiável.** O [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA, consultado em 2026-11-27) mostra, em vendas de usados no eBay US em outubro de 2026, $5.900–6.350 para a RTX 5090, contra cerca de $4.500–4.700 no varejo de novas (sem data na fonte), e $2.575–3.010 para a RTX 4090 (mediana $2.860, 216 vendas); são dados de anúncios, não cotações. Compare novo e usado em cada placa; compre uma usada com funcionamento verificado só se for claramente mais barata.',
          '**A DDR5 mudou muito; as outras peças não são rastreadas.** Os preços da DDR5 subiram cerca de 500% em 12 meses até agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18; um kit DDR5-6400 de 128 GB era anunciado por $3.399). Preços de CPU, placa-mãe, fonte e SSD não são rastreados nesta página, então confira-os também.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Em 2026, a escassez de memória encareceu muito as GPUs com muita VRAM e a DDR5; confira as duas primeiro ao orçar uma configuração.',
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
          '**2. Qual é o seu teto de orçamento estrito?** Configuração econômica para o menor custo, intermediária para o meio, entusiasta para o mais alto — só a RTX 5090 é anunciada nova por cerca de $4.500–4.700 ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado dos EUA, consultado em 2026-11-27).',
          '**3. GPU nova ou usada?** Compare as duas — segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA, consultado em 2026-11-27), as RTX 5090 vendidas como usadas ficam acima do preço das novas, e as vendas de RTX 4090 usadas se sobrepõem à faixa de anúncios de novas; uma usada só faz sentido se for claramente mais barata.',
          '**4. Seu plano de energia e espaço se sustenta?** Confirme que a fonte de alimentação coincide com o nível (650 W / 850 W / 1000 W) e que o gabinete cabe a GPU e o cooler antes de pedir as peças.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha uma configuração de PC para IA local respondendo primeiro ao tamanho de modelo mais grande, depois ao teto de orçamento, terceiro GPU nova versus usada e por último ao planejamento de energia e espaço.',
          },
          {
            type: 'plain-terms',
            text: 'Comece com o maior modelo que você realmente quer executar e deixe isso definir seu nível. Depois verifique seu orçamento, decida se compra a GPU usada e confirme que a fonte de alimentação e o gabinete se encaixam com as peças. Seguir essa ordem evita uma configuração que não consegue executar o seu modelo.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Onde comprar os componentes',
        content:
          '**Os grandes varejistas vendem os tipos de peças destas configurações; compare anúncios novos e usados principalmente para a GPU.** Os links abaixo são links simples de pesquisa de produtos; não carregam tags de afiliado e não geram comissão.',
        items: [
          '**Amazon e Newegg:** uma ampla oferta de CPUs, RAM, SSDs, fontes e gabinetes. Confira ao vivo a disponibilidade e o preço de GPUs e DDR5 novas.',
          '**Mercado de GPUs usadas:** vale conferir, mas não é economia garantida — segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA, consultado em 2026-11-27), as RTX 5090 vendidas como usadas ficam acima do preço das novas, e as vendas de RTX 4090 usadas se sobrepõem à faixa de anúncios de novas. Compre usado só se for claramente mais barato e com funcionamento verificado.',
          '**Mercado Livre e lojas locais de tecnologia:** outras opções no Brasil para comparar preços de CPUs, placas-mãe e fontes; procure kits de CPU + placa-mãe.',
          '**Compre a GPU primeiro.** Ela costuma ser a peça mais cara, e seu preço pode mudar rápido — garanta-a a um preço que você aceite e depois compre as demais peças.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Os totais não são rastreados neste guia. Abra os anúncios atuais da GPU e da RAM antes de montar — elas podem representar grande parte do custo.',
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
          '**Comprar RAM do sistema em vez de VRAM.** A RAM permite que um modelo ultrapasse a VRAM, mas um modelo rodando em parte ou totalmente a partir da RAM costuma ser muito mais lento, muitas vezes lento demais para um uso interativo confortável. Compre a VRAM que o seu modelo alvo precisa.',
          '**Subestimar a fonte de alimentação.** A RTX 5090 sozinha consome 575 W. Uma fonte de alimentação que colapsa sob carga é pior do que uma GPU mais lenta que roda de forma estável — ajuste a fonte ao nível.',
          '**Ancorar nos preços de lançamento.** O aumento de 2026 significa que o MSRP das GPUs e os preços de RAM do ano passado não refletem mais a realidade. Faça o orçamento da GPU e da RAM com os preços atuais do varejista e compare o mercado de segunda mão em vez de presumir que é mais barato.',
          '**Comprar a RTX 4060 Ti de 8 GB para a configuração econômica.** Compartilha o nome com a versão de 16 GB, mas não consegue acomodar um modelo 14B. Confirme a variante de 16 GB no anúncio.',
          '**Superdimensionar para modelos 7B.** Se os 7B atendem ao seu uso, a configuração entusiasta acrescenta uma GPU muito mais cara e um consumo bem maior (575 W contra 165 W da placa econômica) com pouco benefício. Ajuste o nível ao modelo, não ao orçamento que você por acaso tem.',
          '**Pular o planejamento do gabinete e do resfriamento.** Uma GPU de 575 W mais uma CPU de 16 núcleos gera calor real. Confirme que o gabinete cabe a GPU e o cooler e tem fluxo de ar antes de pedir as peças.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Melhor guia de compra de GPU para LLM local 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: orientação de compra de GPU e contexto da alta de preços de 2026.',
          '[Montagem de workstation para LLM local](/pt/local-llms/local-llm-workstation-build) — PromptQuorum: lista de componentes, resfriamento e guia de fonte de alimentação para a workstation 70B de GPU dupla por trás do nível entusiasta.',
          '[Especificações da NVIDIA GeForce RTX série 40 e 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Cifras oficiais de capacidade de VRAM e potência (TGP) para a RTX 4060 Ti, 4070 Ti Super e 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Preços de componentes ao vivo para CPU AMD Ryzen, RAM DDR5, SSD NVMe e fontes de alimentação.',
          '[InsiderLLM: preços de GPUs NVIDIA](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — Rastreador de terceiros para os números da RTX 5090 e da RTX 4090 e a explicação sobre o fornecimento de GPUs (mercado dos EUA, consultado em 2026-11-27).',
          '[Hardware Busters: preços de memória DDR5](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — Fonte dos números sobre a alta da DDR5 (2026-08-18).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: "Uma fonte de 1000 W é exagero para uma montagem com uma única GPU?",
            a: 'Não para uma RTX 5090: a NVIDIA informa 575 W de potência gráfica e 1000 W de potência de sistema exigida (varia conforme o restante do PC). Para as configurações econômica e intermediária deste guia, 1000 W são mais que o necessário: 650 W e 850 W (80+ Gold) atendem a RTX 4060 Ti 16 GB e a RTX 4070 Ti Super 16 GB com folga. Uma fonte ATX 3.1 com conector 12V-2x6 nativo importa mais que simplesmente somar watts.',
          },
          {
            q: 'Quanto custa montar um PC para IA local em 2026?',
            a: 'Os totais não são rastreados aqui porque os preços de GPU e RAM de 2026 mudam rápido. A RTX 5090 da configuração entusiasta é anunciada nova por cerca de $4.500–4.700 ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), mercado dos EUA, consultado em 2026-11-27), e os preços da DDR5 subiram cerca de 500% em 12 meses até agosto de 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). Some os preços atuais da lista do nível escolhido.',
          },
          {
            q: 'Qual GPU devo colocar em um PC para IA local?',
            a: 'Escolha a GPU com base no seu maior modelo alvo. Uma RTX 4060 Ti 16 GB é adequada para uma configuração econômica com modelos 7B–13B, uma RTX 4070 Ti Super 16 GB para uma configuração intermediária com modelos 14B–33B e uma RTX 5090 32 GB para uma configuração entusiasta com trabalho em 70B. A GPU decide quais modelos a máquina pode executar, então ela é escolhida primeiro e o restante da lista de componentes é construído ao redor dela. Atenção: com 16 GB, os modelos maiores entre 14B e 33B exigem quantização menor ou descarga parcial.',
          },
          {
            q: 'Quanta RAM preciso para um PC com IA local?',
            a: 'Planeje 32 GB para a configuração econômica, 64 GB para a intermediária e 128 GB para a entusiasta. A RAM do sistema não substitui a VRAM — um modelo rodando em parte ou totalmente a partir da RAM costuma ser muito mais lento, muitas vezes lento demais para um uso interativo confortável. A RAM serve ao sistema, ao contexto, às ferramentas e à descarga; compre a VRAM que o seu modelo alvo precisa.',
          },
          {
            q: 'Qual fonte de alimentação precisa um PC com IA local?',
            a: 'Ajuste a fonte ao nível: 650 W para a configuração econômica, 850 W para a intermediária e 1000 W para a entusiasta. O nível entusiasta precisa de 1000 W porque a RTX 5090 sozinha consome 575 W. Uma fonte de alimentação subdimensionada causa instabilidade sob carga, então não economize nesta parte.',
          },
          {
            q: 'Devo comprar os componentes de GPU novos ou usados em 2026?',
            a: 'Compare novo e usado antes de decidir; não presuma que o usado é mais barato. O [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA, consultado em 2026-11-27) mostra, em vendas de usados no eBay US em outubro de 2026, $5.900–6.350 para a RTX 5090, contra cerca de $4.500–4.700 no varejo de novas (sem data na fonte), e $2.575–3.010 para a RTX 4090. Uma placa usada só compensa se for claramente mais barata e com funcionamento verificado. CPUs, RAM, SSDs e fontes nós normalmente compraríamos novos pela garantia.',
          },
          {
            q: 'Uma configuração de GPU única pode executar um modelo 70B?',
            a: 'Sim, a configuração entusiasta pode. Uma RTX 5090 32 GB tem mais VRAM do que qualquer outra GPU individual deste guia, mas um modelo 70B em Q4 precisa de aproximadamente 39–42 GB — então executa 70B apenas com quantização agressiva ou descarga parcial para a RAM do sistema. Os 128 GB de RAM da configuração entusiasta dão a essa descarga o espaço que ela precisa.',
          },
          {
            q: 'Vale a pena a configuração intermediária em relação ao custo extra sobre a econômica?',
            a: 'Pode valer a pena se você usa modelos da classe 14B com frequência. As duas configurações têm 16 GB de VRAM, então a intermediária não permite carregar modelos maiores na VRAM, mas a RTX 4070 Ti Super tem largura de banda de memória muito maior e responde mais rápido. Se o seu teto for firmemente 7B–13B, a econômica custa menos.',
          },
          {
            q: 'Preciso de uma CPU Threadripper para um PC com IA local?',
            a: 'Não. Uma CPU Ryzen de consumo basta para as três configurações deste guia — um Ryzen 7 no nível econômico e um Ryzen 9 no intermediário e no entusiasta. Um Threadripper vale ser considerado principalmente em máquinas com várias GPUs que precisam de mais linhas PCIe, o que vai além destas configurações com uma só GPU.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Escolha a GPU da sua configuração com o guia de compra completo](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — dez GPUs de consumo em quatro faixas de orçamento, com preços datados.',
          '[Veja a configuração de workstation 70B de GPU dupla para uso em produção](/pt/local-llms/local-llm-workstation-build) — o nível de GPU dupla com 48 GB de VRAM para modelos da classe 70B, além da configuração entusiasta deste guia.',
          '[Compare montar um PC versus alugar GPU na nuvem](/pt/power-local-llm/cloud-gpu-rental-guide-2026) — quando alugar supera ter hardware próprio para computação ocasional.',
          '[Calcule a VRAM que cada tamanho de modelo precisa antes de montar](/pt/local-llms/how-much-vram-local-llm) — o método completo de VRAM por tamanho de modelo por trás das escolhas de nível aqui.',
          '[Considere um Mac como alternativa a uma configuração de PC](/pt/power-local-llm/best-mac-for-local-ai-2026) — quando o Apple Silicon com memória unificada supera um PC com GPU dedicada para IA local.',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-ar.webp',
    title: 'دليل بناء محطة عمل الذكاء الاصطناعي المحلي ⁨2026⁩: ⁨3⁩ مستويات ميزانية',
    seoTitle: 'بناء حاسوب ⁨LLM⁩ محلي ⁨2026⁩: ⁨3⁩ مستويات من ⁨7B⁩ حتى ⁨70B⁩',
    intro:
      'تبدأ معظم أدلة بناء حواسيب الذكاء الاصطناعي المحلي بالمعالج، لكن الـGPU وذاكرتها VRAM هما ما يحدد إلى حد كبير النماذج التي يستطيع الجهاز تشغيلها، وتُختار بقية القطع لدعم هذه الـGPU. يقدّم هذا الدليل ثلاث قوائم مكوّنات لحاسوب LLM محلي: إعداد اقتصادي لنماذج 7B–13B، وإعداد متوسط لنماذج 14B–33B، وإعداد متحمس للعمل مع 70B. يذكر كل مستوى مكوّناته الرئيسية وأحجام النماذج المستهدفة. وتنبيه بشأن الأسعار: رفع نقص إمدادات الذاكرة في 2026 أسعار بطاقات GPU ذات VRAM الكبيرة وأسعار RAM من نوع DDR5. لا نتتبّع هنا إجماليات الإعدادات، وأسعار GPU الوحيدة المذكورة هي لـRTX 5090 وRTX 4090 من [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكية، تاريخ الاطلاع 2026-11-27)، فتحقق من الإعلانات الحالية قبل الطلب.',
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
      'الأشخاص الذين يبنون حاسوباً مخصصاً لتشغيل نماذج LLM المحلية ويتخذون قرارهم بناءً على مستوى الميزانية وحجم النموذج المستهدف. يفترض الإلمام بمفهوم التكميم وVRAM كقيد، وبالمصطلحات الأساسية لبناء الحاسوب، لكن لا يشترط معرفة SKUs المحددة للمكوّنات الحالية.',
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
      '**اختر الإعداد الذي تتسع VRAM الـGPU فيه لنموذجك المستهدف. يستهدف الاقتصادي نماذج 7B–13B، والمتوسط 14B–33B (الأكبر منها بتكميم أخفض أو تفريغ جزئي)، والمتحمس 70B بالتنازلات نفسها. لا نتتبّع الإجماليات لأن أسعار GPU وRAM في 2026 تتغير بسرعة، وأسعار GPU القليلة المعروضة مذكورة بمصدرها وتاريخها.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبني حاسوباً لتشغيل نماذج LLM المحلية في 2026؟',
        answer:
          'اختر المستوى حسب أكبر نموذج تريد تشغيله، ثم ابنِ حول الـGPU. يجمع الإعداد الاقتصادي بين RTX 4060 Ti 16 GB ومعالج Ryzen 7 لنماذج 7B–13B. ويستخدم المتوسط RTX 4070 Ti Super 16 GB لنماذج 14B–33B، وتحتاج الأكبر منها إلى تكميم أخفض أو تفريغ جزئي. ويستخدم المتحمس RTX 5090 32 GB للعمل مع 70B بالتنازلات نفسها. ارتفعت أسعار GPU وRAM من نوع DDR5 بشدة في 2026، لذلك لا نتتبّع الإجماليات، وأسعار GPU القليلة المعروضة فقط مذكورة بمصدرها وتاريخها.',
        bullets: [
          'الإعداد الاقتصادي: RTX 4060 Ti 16 GB، يُشغّل نماذج 7B–13B.',
          'الإعداد المتوسط: RTX 4070 Ti Super 16 GB، يستهدف 14B–33B (الأكبر بتنازلات).',
          'الإعداد المتحمس: RTX 5090 32 GB، يُشغّل نماذج 70B فقط مع تكميم عدواني أو تفريغ جزئي.',
          'ارتفعت أسعار GPU وDDR5 بشدة في 2026 — قارن بين البطاقات الجديدة والمستعملة، فالمستعمل ليس أرخص بالضرورة.',
        ],
        updatedDate: '2026-11-27',
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
          '**أسعار 2026 رفعت تكلفة الإعدادات.** رفع نقص الذاكرة أسعار بطاقات GPU ذات VRAM الكبيرة وأسعار RAM من نوع DDR5. لا نتتبّع الإجماليات هنا، وقد تكون RAM بنداً كبيراً في التكلفة (ارتفعت أسعار DDR5 بنحو 500% خلال 12 شهراً حتى أغسطس 2026 وفق [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)، 2026-08-18).',
          '**الإعداد الاقتصادي:** RTX 4060 Ti 16 GB وRyzen 7 7700 و32 جيجابايت RAM وSSD 1 تيرابايت ومزوّد 650 واط — يُشغّل نماذج 7B–13B بسرعة مقبولة. الأقل تكلفة بين الإعدادات الثلاثة في هذا الدليل.',
          '**الإعداد المتوسط:** RTX 4070 Ti Super 16 GB وRyzen 9 7900X و64 جيجابايت RAM وSSD 2 تيرابايت ومزوّد 850 واط — يُشغّل نماذج فئة 14B أسرع بكثير من البطاقة الاقتصادية؛ وتحتاج نماذج 22B–33B الأكبر إلى تكميم أخفض أو تفريغ جزئي إلى RAM النظام.',
          '**الإعداد المتحمس:** RTX 5090 32 GB وRyzen 9 7950X و128 جيجابايت RAM وSSD 4 تيرابايت ومزوّد 1000 واط — ومن بين الإعدادات الثلاثة هنا، هو الوحيد القادر على تشغيل نموذج 70B على GPU واحدة، ولا يتم ذلك إلا بتكميم عدواني أو تفريغ جزئي إلى RAM النظام. تُعرض RTX 5090 وحدها جديدة بنحو $4,500–4,700 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، السوق الأمريكية، تاريخ الاطلاع 2026-11-27).',
          '**RAM ليست بديلاً عن VRAM.** تتيح RAM النظام للنموذج تجاوز VRAM، لكن النموذج الذي يعمل جزئياً أو كلياً من RAM يكون عادةً أبطأ بكثير، وغالباً أبطأ من أن يناسب استخداماً تفاعلياً مريحاً. اشترِ من VRAM ما يحتاجه نموذجك المستهدف؛ أما RAM فتخدم أساساً النظام والأدوات والتفريغ.',
          '**المزوّد يتدرج مع الـGPU.** الإعداد الاقتصادي يحتاج 650 واطاً، والمتوسط 850 واطاً، والمتحمس 1000 واط لأن RTX 5090 وحدها تستهلك 575 واطاً. اشمل المزوّد في الميزانية مع الـGPU.',
          '**المستعمل لم يعد خصماً مضموناً.** يُظهر [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكية، تاريخ الاطلاع 2026-11-27؛ أرقام المستعمل هي مبيعات eBay الأمريكي في أكتوبر 2026، ونطاقات أسعار الجديدة غير مؤرَّخة في المصدر) أن RTX 5090 المستعملة المباعة ($5,900–6,350) تفوق السعر الجديد (نحو $4,500–4,700) وأن RTX 4090 المستعملة ($2,575–3,010) تتداخل مع نطاق الإعلانات الجديدة ($2,000–3,000)، فقارن الاثنين قبل الشراء. تظل البطاقة المستعملة المتحقق من عملها خياراً جيداً حين تكون أرخص بوضوح — لكن لا تفترض ذلك أبداً.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الإعداد الاقتصادي:** GPU RTX 4060 Ti 16 GB — يُشغّل نماذج 7B ومعظم نماذج 13B.',
          '**الإعداد المتوسط:** GPU RTX 4070 Ti Super 16 GB — يُشغّل نماذج فئة 14B؛ و22B–33B بتكميم أخفض أو تفريغ جزئي.',
          '**الإعداد المتحمس:** GPU RTX 5090 32 GB — يُشغّل 33B بارتياح، و70B فقط مع تكميم عدواني أو تفريغ جزئي.',
          '**قاعدة VRAM في Q4_K_M:** حوالي 0.6 جيجابايت لكل مليار معامل، بالإضافة إلى 2–4 جيجابايت للسياق والأدوات.',
          '**دليل RAM النظام:** 32 جيجابايت للاقتصادي، 64 جيجابايت للمتوسط، 128 جيجابايت للمتحمس.',
          '**المزوّد لكل مستوى:** 650 واط للاقتصادي، 850 واط للمتوسط، 1000 واط للمتحمس — RTX 5090 وحدها تستهلك 575 واطاً.',
          '**واقع الأسعار 2026:** ارتفعت أسعار GPU وRAM من نوع DDR5 بشدة — تحقق من الأسعار الحالية وقارن بين بطاقات GPU الجديدة والمستعملة.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'اختيار المحرر: الإعداد المتوسط',
        highlight: true,
        content:
          '**اختيارنا التحريري لمعظم المشترين هو الإعداد المتوسط.** مبني حول RTX 4070 Ti Super 16 GB، ويُشغّل نماذج فئة 14B بتكميم Q4 مع مساحة للسياق، ويمكنه التعامل مع نماذج 22B–33B بتكميم أخفض أو تفريغ جزئي، وهو أسرع بكثير من البطاقة الاقتصادية. اختر الاقتصادي إذا كان سقفك ثابتاً عند 7B–13B، وانتقل إلى المتحمس إذا كنت تحتاج تحديداً إلى VRAM أكبر لـ33B أو 70B. أحجام النماذج والأسعار تتغير، فأعد التحقق قبل الشراء.',
        callouts: [
          {
            type: 'note',
            text: 'اختيار المحرر هذا حكم تحريري يستند إلى مواصفات المصنّعين وأحجام ملفات النماذج المعتادة، ولا يستند إلى اختبارات من PromptQuorum ولا إلى مقارنة أسعار؛ فسعر RTX 4070 Ti Super غير متتبَّع هنا. لا يشارك PromptQuorum في أي برنامج تابع، والروابط أدناه لا تحمل علامات تابعة — إنها روابط مرجعية بسيطة لا تولّد عمولة.',
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
          'أرقام VRAM والطاقة لبطاقات GPU هي مواصفات المصنّعين. عمود النماذج القابلة للتشغيل تقدير مبني على أحجام ملفات النماذج وVRAM، وليس اختباراً من PromptQuorum؛ وتختلف النتائج حسب التكميم وبيئة التشغيل وطول السياق. لا نتتبّع الإجماليات: تذكر هذه الصفحة أسعار RTX 5090 وRTX 4090 فقط دون بقية القطع. قارن إعلانات GPU الجديدة والمستعملة، فالمستعمل ليس أرخص بالضرورة.',
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
            'يُشغّل': '14B؛ و22B–33B بتكميم أخفض أو تفريغ',
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
          { 'وضعك': 'أشغّل نماذج 14B باستمرار وأريد ردوداً أسرع', 'ابنِ هذا': 'الإعداد المتوسط' },
          { 'وضعك': 'أعمل قليلاً مع 22B–33B وأقبل التنازلات', 'ابنِ هذا': 'الإعداد المتوسط' },
          { 'وضعك': 'أستخدم 33B بكثافة أو أريد هامش VRAM أكبر', 'ابنِ هذا': 'الإعداد المتحمس' },
          { 'وضعك': 'أحتاج جهاز GPU واحد يُشغّل نماذج 70B فقط مع تكميم عدواني أو تفريغ جزئي', 'ابنِ هذا': 'الإعداد المتحمس' },
          { 'وضعك': 'أريد إبقاء الإجمالي منخفضاً رغم ارتفاع 2026', 'ابنِ هذا': 'أي مستوى — قارن إعلانات GPU الجديدة والمستعملة' },
          { 'وضعك': 'لست متأكداً وأريد خياراً وسطاً', 'ابنِ هذا': 'الإعداد المتوسط — اختيار المحرر' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'الإعداد الاقتصادي: RTX 4060 Ti 16 GB',
        content:
          '**الإعداد الاقتصادي هو الأقل تكلفة بين الإعدادات الثلاثة في هذا الدليل، ويُشغّل نماذج 7B، ومعظم نماذج 13B بتكميم Q4، وهذا يكفي كثيراً من المبتدئين.** وهو مبني حول RTX 4060 Ti 16 GB، أرخص بطاقة بسعة 16 جيجابايت في هذا الدليل، مما يساعد على خفض الإجمالي.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** ذاكرة VRAM بسعة 16 جيجابايت، 165 واط. تتسع لنماذج 14B بتكميم Q4 مع هامش للسياق. لا نذكر رقماً للسرعة: لم يقِس PromptQuorum هذه البطاقة، والسرعة تختلف حسب التكميم وبيئة التشغيل وطول السياق. سعة 16 جيجابايت هي سبب تفضيلها على إصدار 8 جيجابايت.',
          '**المعالج — AMD Ryzen 7 7700:** 8 أنوية، استهلاك طاقة معتدل. المعالج يؤدي عملاً قليلاً أثناء الاستدلال بالـGPU، لذا شريحة متوسطة المستوى مناسبة هنا.',
          '**اللوحة الأم — شرائح B650:** تدعم Ryzen 7 وGPU كاملة الحجم عبر PCIe.',
          '**RAM — 32 جيجابايت DDR5:** تكفي لنظام التشغيل والأدوات ونموذج 7B–13B يعمل داخل VRAM. وRAM ليست بديلاً عن VRAM. ارتفعت أسعار DDR5 بشدة في 2026، فتحقق من السعر الحالي.',
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
          '**الإعداد المتوسط هو اختيار المحرر: بطاقة أسرع للعمل اليومي مع 14B، مع إمكانية تشغيل نماذج 22B–33B الأكبر بتكميم أخفض أو تفريغ جزئي.** وهو مبني حول RTX 4070 Ti Super 16 GB التي يجعلها عرض نطاق الذاكرة الأعلى أسرع بكثير من البطاقة الاقتصادية على النماذج نفسها.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** ذاكرة VRAM بسعة 16 جيجابايت، 285 واط. السعة نفسها كالمستوى الاقتصادي مع عرض نطاق ذاكرة أعلى بكثير، فتستجيب نماذج 7B–14B أسرع بشكل ملحوظ. لا يتسع 16 جيجابايت لنموذج 33B بتكميم Q4 (نحو 18–20 جيجابايت)، لذا تحتاج النماذج الأكبر بين 22B و33B إلى تكميم أخفض أو تفريغ جزئي.',
          '**المعالج — AMD Ryzen 9 7900X:** 12 نواة. هامش أكبر من المعالج الاقتصادي لتحضير البيانات وتشغيل الأدوات جانباً للاستدلال.',
          '**اللوحة الأم — شرائح B650 أو X670:** إمداد طاقة قوي لمعالج 12 نواة وGPU 285 واط.',
          '**RAM — 64 جيجابايت DDR5:** مساحة لنظام التشغيل ونوافذ سياق أكبر وتفريغ جزئي وأدوات مثل خط RAG يعمل بجانب النموذج. إذا كانت الميزانية محدودة فإن 32 جيجابايت تكفي للنماذج التي تتسع كاملة في VRAM، أما النماذج المفرَّغة فتستفيد من سعة أكبر.',
          '**التخزين — SSD NVMe 2 تيرابايت:** يحتوي مكتبة نماذج كبيرة — نموذج 33B Q4 يزن حوالي 18–20 جيجابايت.',
          '**المزوّد — 850 واط 80+ Gold:** هامش مريح لـGPU 285 واط ومعالج 12 نواة تحت حمل مستمر.',
          '**الهيكل والتبريد — برج متوسط مع AIO 240–280 مم أو مبرّد هواء عالي الجودة:** المستوى المتوسط يولّد حرارة معتدلة؛ مبرّد جيد يُبقي المعالج مستقراً أثناء جلسات استدلال طويلة.',
          '**لماذا تبني هذا المستوى:** تشغّل نماذج 14B باستمرار وتريد ردوداً أسرع، أو تعمل قليلاً مع 22B–33B وتقبل التنازلات. **لماذا تتجاوزه:** إذا كانت 7B–13B تكفيك فالإعداد الاقتصادي أقل تكلفة؛ وإذا كان هدفك 70B فإن 16 جيجابايت قليلة جداً، فانظر إلى الإعداد المتحمس.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الإعداد المتوسط يستوعب نفس النماذج مع الإعداد الاقتصادي — أنت تدفع للسرعة لا للقدرة. ابنِ هذا المستوى إن كانت نماذج 14B عبئاً يومياً والانتظار عليها سيزعجك.',
          },
          {
            type: 'note',
            text: 'بطاقة RTX 4090 24 GB المستعملة طريق مختصر مكلف: بلغت أسعار المبيعات على eBay الأمريكي $2,575–3,010 في أكتوبر 2026 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، السوق الأمريكية، تاريخ الاطلاع 2026-11-27). سعر RTX 4070 Ti Super غير متتبَّع هنا، فقارن الإعلانات الحالية الجديدة والمستعملة قبل الشراء.',
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
          '**من بين الإعدادات الثلاثة هنا، الإعداد المتحمس وحده يستطيع تشغيل نموذج 70B على GPU واحدة، وفقط بتكميم عدواني أو تفريغ جزئي إلى RAM النظام — وRTX 5090 32 GB هي قطعته الرئيسية.** ابنِ هذا المستوى أساساً من أجل سعة VRAM. تُعرض RTX 5090 جديدة بنحو $4,500–4,700 مقابل MSRP قدره $1,999 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، السوق الأمريكية، تاريخ الاطلاع 2026-11-27)، فتوقّع أن تكون الـGPU أكبر بند في التكلفة.',
        items: [
          '**GPU — RTX 5090 32 GB (جديدة بالتجزئة نحو $4,500–4,700، وهو نطاق لا يؤرّخه المصدر، مقابل MSRP قدره $1,999؛ والمستعملة المباعة على eBay الأمريكي $5,900–6,350 في أكتوبر 2026؛ [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، السوق الأمريكية، تاريخ الاطلاع 2026-11-27؛ ليست عروض أسعار):** ذاكرة VRAM من نوع GDDR7 بسعة 32 جيجابايت، 575 واط. صاحبة أكبر VRAM بين وحدات GPU المفردة في هذا الدليل. تُشغّل نماذج 33B بتكميم Q4 مع هامش، لكنها لا تُشغّل نموذج 70B إلا بتكميم عدواني أو تفريغ جزئي إلى RAM النظام.',
          '**المعالج — AMD Ryzen 9 7950X:** 16 نواة. كافٍ لتشغيل تحضير البيانات وتجارب الضبط الدقيق والأدوات جانباً للاستدلال المكثّف.',
          '**اللوحة الأم — شرائح X670E:** إمداد طاقة قوي وPCIe 5.0، مُحجَّم لـGPU 575 واط ومعالج 16 نواة.',
          '**RAM — 128 جيجابايت DDR5:** مساحة لنوافذ سياق كبيرة وتحميل عدة نماذج معاً والأدوات والتفريغ الجزئي إلى RAM. طقم 64 جيجابايت هو البديل الأقل تكلفة.',
          '**التخزين — SSD NVMe بسعة 4 تيرابايت:** نموذج 70B بتكميم Q4 يبلغ نحو 40 جيجابايت؛ وقرص 4 تيرابايت يتسع لمكتبة كبيرة من النماذج الكبيرة.',
          '**المزوّد — 1000 واط 80+ Platinum:** تذكر NVIDIA لبطاقة RTX 5090 استهلاكاً رسومياً قدره 575 واطاً وقدرة نظام مطلوبة قدرها 1000 واط (تختلف حسب بقية الجهاز). مزوّد 750 واطاً أقل من هذا التوجيه، فلا تختر قطعة أصغر من اللازم.',
          '**الهيكل والتبريد — هيكل كبير مع AIO بقياس 360 مم:** تولّد GPU بقدرة 575 واطاً ومعالج بـ16 نواة حرارة حقيقية؛ خطط لتدفق الهواء وتبريد المعالج تحت حمل مستمر.',
          '**لماذا تبني هذا المستوى:** تريد نماذج 33B مع هامش، أو تقبل تشغيل 70B بتنازلات، أو تجري استدلالاً دفعياً مكثفاً. **لماذا تتجاوزه:** لنماذج 7B–14B هو أكثر من حاجتك، فالإعداد المتوسط يُشغّل هذه الأحجام دون تكلفة RTX 5090.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'تستهلك RTX 5090 وحدها 575 واطاً. استخدم معها مزوّد 1000 واط المذكور في قائمة القطع — فالمزوّد الأصغر يقل عن توجيه NVIDIA وقد يسبب انطفاءً أو عدم استقرار تحت الحمل. تأكد قبل البناء من أن دائرة الكهرباء لديك تستطيع توفير كامل الاستهلاك. هذا ليس نصيحة في السلامة الكهربائية؛ اتبع إرشادات NVIDIA ومصنّع المزوّد.',
          },
          {
            type: 'note',
            text: 'يحتاج نموذج 70B بتكميم Q4 إلى نحو 39–42 جيجابايت من VRAM، لذا لا تتسع له حتى RTX 5090 32 GB كاملاً: يلزم تكميم أخفض أو تفريغ جزئي إلى RAM النظام. وتمنح RAM بسعة 128 جيجابايت في هذا الإعداد مساحة لذلك التفريغ.',
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
          '**رفع نقص إمدادات الذاكرة في 2026 أسعار بطاقات GPU ذات VRAM الكبيرة وأسعار RAM من نوع DDR5 بشدة، وقد تستهلك هاتان القطعتان حصة كبيرة من الميزانية.** خطط بأسعار الإعلانات الحالية لا بأسعار الإطلاق.',
        items: [
          '**تحقق من GPU وRAM أولاً.** الـGPU هي عادةً أغلى قطعة في حاسوب الذكاء الاصطناعي المحلي، وقد ارتفع سعر DDR5 كثيراً في 2026. لا تتتبّع هذه الصفحة الإجماليات، لذلك لا ترتّب بنود التكلفة.',
          '**إمداد الذاكرة سبب رئيسي.** يعزو [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) ارتفاع أسعار GPU أساساً إلى نقص GDDR7 مع تحول إنتاج الذاكرة نحو مراكز بيانات الذكاء الاصطناعي، ويقول إن البطاقات بسعة 16 جيجابايت فأكثر هي الأشد شحاً. وبشأن DDR5 يشير [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) كذلك إلى انتقال الإنتاج نحو HBM وDRAM الخاصة بالخوادم. تُعرض RTX 5090 جديدة بنحو $4,500–4,700 مقابل MSRP قدره $1,999 (4,500 / 1,999 = 2.25×؛ InsiderLLM، السوق الأمريكية، تاريخ الاطلاع 2026-11-27)، أي أكثر من الضعف.',
          '**أسعار بطاقات المدى الأدنى غير متتبَّعة هنا.** RTX 4060 Ti 16 GB وRTX 4070 Ti Super في الإعدادين الاقتصادي والمتوسط لا يغطيهما المتتبع؛ تحقق من الإعلانات الحالية.',
          '**المستعمل ليس خصماً موثوقاً.** يعرض [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكية، تاريخ الاطلاع 2026-11-27) لمبيعات المستعمل على eBay الأمريكي في أكتوبر 2026: $5,900–6,350 لـRTX 5090 مقابل نحو $4,500–4,700 للجديدة بالتجزئة (دون تاريخ في المصدر)، و$2,575–3,010 لـRTX 4090 (الوسيط $2,860 من 216 عملية بيع)؛ وهي بيانات إعلانات لا عروض أسعار. قارن الجديد بالمستعمل في كل بطاقة، ولا تشترِ مستعملة متحققاً من عملها إلا إذا كانت أرخص بوضوح.',
          '**تحركت DDR5 كثيراً، وبقية القطع غير متتبَّعة.** ارتفعت أسعار DDR5 بنحو 500% خلال 12 شهراً حتى أغسطس 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)، 2026-08-18؛ وعُرض طقم DDR5-6400 بسعة 128 جيجابايت بـ$3,399). لا تتتبّع هذه الصفحة أسعار المعالج واللوحة الأم والمزوّد وSSD، فتحقق منها أيضاً.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'رفع نقص الذاكرة في 2026 أسعار بطاقات GPU ذات VRAM الكبيرة وأسعار DDR5 بشدة، فابدأ بالتحقق منهما عند تسعير أي إعداد.',
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
          '**2. ما سقف ميزانيتك الصارم؟** الإعداد الاقتصادي لأقل تكلفة، والمتوسط للمستوى الوسط، والمتحمس للأعلى — تُعرض RTX 5090 وحدها جديدة بنحو $4,500–4,700 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، السوق الأمريكية، تاريخ الاطلاع 2026-11-27).',
          '**3. GPU جديدة أم مستعملة؟** قارن بينهما — وفق [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكية، تاريخ الاطلاع 2026-11-27) تتجاوز مبيعات RTX 5090 المستعملة سعر الجديدة، وتتداخل مبيعات RTX 4090 المستعملة مع نطاق إعلانات الجديدة، فلا معنى للمستعملة إلا إذا كانت أرخص بوضوح.',
          '**4. هل تتحمل خطتك في الطاقة والمساحة؟** تأكد من أن المزوّد يتطابق مع المستوى (650 / 850 / 1000 واط) وأن الهيكل يستوعب الـGPU والمبرّد قبل طلب القطع.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر إعداد حاسوب للذكاء الاصطناعي المحلي بالإجابة أولاً على حجم أكبر نموذج، ثانياً على سقف الميزانية، ثالثاً GPU جديدة مقابل مستعملة، وأخيراً تخطيط الطاقة والمساحة.',
          },
          {
            type: 'plain-terms',
            text: 'ابدأ بأكبر نموذج تريد تشغيله حقاً واجعل ذلك يحدد مستواك. ثم تحقق من ميزانيتك، اقرر إن كنت تشتري الـGPU مستعملة، وتأكد من أن المزوّد والهيكل يناسبان القطع. اتباع هذا الترتيب يجنّبك إعداداً لا يستطيع تشغيل نموذجك.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'أين تشتري المكوّنات',
        content:
          '**يوفّر تجار التجزئة الكبار أنواع القطع المستخدمة في هذه الإعدادات؛ وقارن الإعلانات الجديدة والمستعملة للـGPU تحديداً.** الروابط أدناه روابط بحث بسيطة عن المنتجات؛ لا تحمل علامات تابعة ولا تولّد عمولة.',
        items: [
          '**Amazon وNewegg:** تشكيلة واسعة من المعالجات وRAM وSSD والمزوّدات والهياكل. تحقق مباشرة من توفر بطاقات GPU وDDR5 الجديدة وأسعارها.',
          '**سوق GPU المستعملة:** يستحق الاطلاع لكنه لا يضمن التوفير — وفق [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكية، تاريخ الاطلاع 2026-11-27) تتجاوز مبيعات RTX 5090 المستعملة سعر الجديدة، وتتداخل مبيعات RTX 4090 المستعملة مع نطاق إعلانات الجديدة. اشترِ المستعمل فقط إذا كان أرخص بوضوح ومتحققاً من عمله.',
          '**المتاجر المحلية لقطع الحاسوب:** خيارات إضافية لمقارنة أسعار المعالجات واللوحات الأم والمزوّدات؛ وابحث عن حزم المعالج مع اللوحة الأم.',
          '**اشترِ الـGPU أولاً.** هي عادةً أغلى قطعة وقد يتغير سعرها بسرعة — احصل عليها بسعر تقبله، ثم اشترِ بقية القطع.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'لا يتتبّع هذا الدليل إجماليات الإعدادات. افتح إعلانات التجار الحالية للـGPU وRAM قبل البناء، فقد تشكّلان جزءاً كبيراً من التكلفة.',
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
          '**شراء RAM بدلاً من VRAM.** تتيح RAM للنموذج تجاوز VRAM، لكن النموذج الذي يعمل جزئياً أو كلياً من RAM يكون عادةً أبطأ بكثير، وغالباً أبطأ من أن يناسب استخداماً تفاعلياً مريحاً. اشترِ من VRAM ما يحتاجه نموذجك المستهدف.',
          '**التقليل من شأن المزوّد.** RTX 5090 وحدها تستهلك 575 واطاً. مزوّد ينهار تحت الحمل أسوأ من GPU أبطأ تعمل باستقرار — طابق المزوّد مع المستوى.',
          '**التعلق بأسعار الإطلاق.** ارتفاع 2026 يعني أن أسعار الإطلاق الاسمية للـGPU وأسعار RAM العام الماضي لم تعد تعكس الواقع. ضع ميزانية الـGPU والـRAM بالأسعار الحالية لدى التاجر، وقارن السوق المستعمل بدلاً من افتراض أنه أرخص.',
          '**شراء RTX 4060 Ti 8 جيجابايت للإعداد الاقتصادي.** تشارك الاسم مع إصدار 16 جيجابايت لكنها لا تستوعب نموذج 14B. تأكد من متغيّر 16 جيجابايت في الإعلان.',
          '**المبالغة في البناء لنماذج 7B.** إذا كانت نماذج 7B تغطي استخدامك فإن الإعداد المتحمس يضيف GPU أغلى بكثير واستهلاك طاقة أعلى كثيراً (575 واطاً مقابل 165 واطاً للبطاقة الاقتصادية) مقابل فائدة قليلة. اختر المستوى حسب النموذج لا حسب الميزانية المتاحة لك صدفة.',
          '**تخطي تخطيط الهيكل والتبريد.** GPU 575 واط بالإضافة إلى معالج 16 نواة يولّد حرارة حقيقية. تأكد من أن الهيكل يستوعب الـGPU والمبرّد ولديه تدفق هواء قبل طلب القطع.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[أفضل دليل شراء GPU لنماذج LLM المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: إرشادات شراء GPU وخلفية ارتفاع أسعار 2026.',
          '[بناء محطة عمل LLM محلي](/ar/local-llms/local-llm-workstation-build) — PromptQuorum: قائمة مكوّنات ودليل التبريد والمزوّد لمحطة عمل GPU مزدوجة 70B خلف المستوى المتحمس.',
          '[مواصفات NVIDIA GeForce RTX سلسلة 40 و50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — أرقام رسمية لقدرة VRAM والطاقة (TGP) لـRTX 4060 Ti و4070 Ti Super و5090.',
          '[PCPartPicker](https://pcpartpicker.com) — أسعار المكوّنات المباشرة لمعالجات AMD Ryzen وRAM DDR5 وSSD NVMe والمزوّدات.',
          '[InsiderLLM: أسعار بطاقات NVIDIA](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — متتبع من طرف ثالث لأرقام RTX 5090 وRTX 4090 وشرح إمداد GPU (السوق الأمريكية، تاريخ الاطلاع 2026-11-27).',
          '[Hardware Busters: أسعار ذاكرة DDR5](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — مصدر أرقام ارتفاع أسعار DDR5 (2026-08-18).',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: "هل مزود طاقة 1000 واط مبالغ فيه لتجميعة بوحدة معالجة رسومات واحدة؟",
            a: 'ليس مبالغاً فيه مع RTX 5090: تذكر NVIDIA لها استهلاكاً رسومياً قدره 575 واطاً وقدرة نظام مطلوبة قدرها 1000 واط (تختلف حسب بقية الجهاز). أما للإعدادين الاقتصادي والمتوسط في هذا الدليل فإن 1000 واط تزيد على الحاجة: يكفي 650 و850 واطاً (80+ Gold) لبطاقتي RTX 4060 Ti 16 GB وRTX 4070 Ti Super 16 GB مع هامش. ومزوّد ATX 3.1 بموصّل 12V-2x6 أصلي أهم من مجرد زيادة الواط.',
          },
          {
            q: 'كم يكلّف بناء حاسوب للذكاء الاصطناعي المحلي في 2026؟',
            a: 'لا نتتبّع الإجماليات هنا لأن أسعار GPU وRAM في 2026 تتغير بسرعة. تُعرض RTX 5090 في الإعداد المتحمس جديدة بنحو $4,500–4,700 ([متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، السوق الأمريكية، تاريخ الاطلاع 2026-11-27)، وارتفعت أسعار DDR5 بنحو 500% خلال 12 شهراً حتى أغسطس 2026 ([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)، 2026-08-18). اجمع الأسعار الحالية لقائمة قطع المستوى الذي تختاره.',
          },
          {
            q: 'أي GPU يجب أن أضعها في حاسوب الذكاء الاصطناعي المحلي؟',
            a: 'اختر الـGPU بناءً على أكبر نموذجك المستهدف. RTX 4060 Ti 16 GB مناسبة للإعداد الاقتصادي مع نماذج 7B–13B، وRTX 4070 Ti Super 16 GB للمتوسط مع نماذج 14B–33B، وRTX 5090 32 GB للمتحمس مع العمل بـ70B. الـGPU تحدد النماذج التي يستطيع الجهاز تشغيلها، لذا تُختار أولاً وبقية قائمة المكوّنات تُبنى حولها. ملاحظة: مع 16 جيجابايت تحتاج النماذج الأكبر بين 14B و33B إلى تكميم أخفض أو تفريغ جزئي.',
          },
          {
            q: 'كم RAM أحتاج لحاسوب الذكاء الاصطناعي المحلي؟',
            a: 'خطط لـ32 جيجابايت للإعداد الاقتصادي و64 للمتوسط و128 للمتحمس. RAM النظام ليست بديلاً عن VRAM: فالنموذج الذي يعمل جزئياً أو كلياً من RAM يكون عادةً أبطأ بكثير، وغالباً أبطأ من أن يناسب استخداماً تفاعلياً مريحاً. تخدم RAM نظام التشغيل والسياق والأدوات والتفريغ؛ واشترِ من VRAM ما يحتاجه نموذجك المستهدف.',
          },
          {
            q: 'أي مزوّد طاقة يحتاجه حاسوب الذكاء الاصطناعي المحلي؟',
            a: 'طابق المزوّد مع المستوى: 650 واط للاقتصادي، 850 واط للمتوسط، 1000 واط للمتحمس. المستوى المتحمس يحتاج 1000 واط لأن RTX 5090 وحدها تستهلك 575 واطاً. مزوّد أصغر من المطلوب يسبب عدم استقرار تحت الحمل، لذا لا تقتصد في هذه القطعة.',
          },
          {
            q: 'هل يجب أن أشتري مكوّنات GPU جديدة أم مستعملة في 2026؟',
            a: 'قارن الجديد بالمستعمل قبل أن تقرر، ولا تفترض أن المستعمل أرخص. يعرض [متتبع أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكية، تاريخ الاطلاع 2026-11-27) لمبيعات المستعمل على eBay الأمريكي في أكتوبر 2026: $5,900–6,350 لـRTX 5090 مقابل نحو $4,500–4,700 للجديدة بالتجزئة (دون تاريخ في المصدر)، و$2,575–3,010 لـRTX 4090. لا تستحق البطاقة المستعملة الشراء إلا إذا كانت أرخص بوضوح ومتحققاً من عملها. أما المعالج وRAM وSSD والمزوّد فنشتريها عادةً جديدة من أجل الضمان.',
          },
          {
            q: 'هل يستطيع إعداد GPU واحد تشغيل نموذج 70B؟',
            a: 'نعم، الإعداد المتحمس يستطيع. RTX 5090 32 GB لديها أكبر VRAM بين وحدات GPU الواحدة في هذا الدليل، لكن نموذج 70B في Q4 يحتاج حوالي 39–42 جيجابايت — لذا يُشغّل 70B فقط مع تكميم عدواني أو تفريغ جزئي لـRAM النظام. الـ128 جيجابايت RAM في الإعداد المتحمس تُعطي هذا التفريغ المساحة التي يحتاجها.',
          },
          {
            q: 'هل يستحق الإعداد المتوسط التكلفة الإضافية على الاقتصادي؟',
            a: 'قد يستحق ذلك إذا كنت تشغّل نماذج فئة 14B بانتظام. في الإعدادين 16 جيجابايت من VRAM، فلا يتيح المتوسط تحميل نماذج أكبر داخل VRAM، لكن RTX 4070 Ti Super تملك عرض نطاق ذاكرة أعلى بكثير وتستجيب أسرع. وإذا كان سقفك ثابتاً عند 7B–13B فالإعداد الاقتصادي أقل تكلفة.',
          },
          {
            q: 'هل أحتاج معالج Threadripper لحاسوب الذكاء الاصطناعي المحلي؟',
            a: 'لا. يكفي معالج Ryzen المخصص للمستهلكين للإعدادات الثلاثة في هذا الدليل — Ryzen 7 للمستوى الاقتصادي وRyzen 9 للمتوسط والمتحمس. ويستحق Threadripper النظر أساساً في الأجهزة متعددة GPU التي تحتاج إلى مسارات PCIe أكثر، وهذا يتجاوز هذه الإعدادات ذات الـGPU الواحدة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[اختر GPU لإعدادك بدليل الشراء الكامل](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — عشر بطاقات GPU للمستهلكين في أربع فئات ميزانية مع أسعار مؤرَّخة.',
          '[شاهد إعداد محطة عمل 70B بـGPU مزدوجة للاستخدام الإنتاجي](/ar/local-llms/local-llm-workstation-build) — مستوى GPU مزدوجة بذاكرة 48 GB لنماذج فئة 70B ما وراء الإعداد المتحمس في هذا الدليل.',
          '[قارن بناء حاسوب مقابل استئجار GPU في السحابة](/ar/power-local-llm/cloud-gpu-rental-guide-2026) — متى يتفوق الاستئجار على امتلاك أجهزة للحوسبة العرضية.',
          '[احسب VRAM التي يحتاجها كل حجم نموذج قبل البناء](/ar/local-llms/how-much-vram-local-llm) — الطريقة الكاملة لـVRAM حسب حجم النموذج خلف اختيارات المستوى هنا.',
          '[فكّر في Mac كبديل لإعداد PC](/ar/power-local-llm/best-mac-for-local-ai-2026) — متى يتفوق Apple Silicon بالذاكرة الموحدة على PC بـGPU مخصصة للذكاء الاصطناعي المحلي.',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-11-27',
    next_refresh_due: '2026-12-22',
    theme: 'Overview & Reference',
    heroImage: '/images/local-ai-workstation-build-guide-2026-overview-hero-ko.webp',
    title: '로컬 AI 워크스테이션 구성 가이드 2026: 예산별 3단계',
    seoTitle: '로컬 AI PC 2026: 입문부터 70B 워크스테이션까지',
    intro:
      '대부분의 로컬 AI 구성 가이드는 CPU부터 설명하지만, 기기에서 어떤 모델을 실행할 수 있는지는 대체로 GPU와 VRAM이 결정합니다. 나머지 부품은 이 GPU를 지원하도록 선택합니다. 이 가이드는 로컬 LLM PC용 부품 목록 세 가지를 제공합니다. 7B–13B 모델용 보급형, 14B–33B 모델용 중급형, 70B 작업용 고급형입니다. 각 단계는 주요 부품과 목표 모델 크기를 제시합니다. 가격 관련 유의 사항: 메모리 공급 부족으로 2026년에 대용량 VRAM GPU와 DDR5 RAM 가격이 올랐습니다. 구성 총액은 여기에서 추적하지 않으며, 제시하는 GPU 가격은 RTX 5090과 RTX 4090뿐이고 출처는 [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장, 2026-11-27 확인)입니다. 주문 전에 실시간 매물을 확인하십시오.',
    metaDescription:
      '2026년 로컬 AI PC 3가지 구성: 보급형 7B–13B, 중급형 14B–33B, 고급형 70B. 부품 목록, 날짜가 명시된 일부 미국 GPU 가격과 2026년 DDR5 공급 부족 관련 안내를 확인하십시오.',
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
      '**GPU VRAM이 목표 모델에 맞는 구성을 선택하십시오. 보급형은 7B–13B, 중급형은 14B–33B(큰 모델은 더 낮은 양자화나 부분 오프로드 필요), 고급형은 같은 절충을 전제로 70B를 목표로 합니다. 2026년 GPU와 RAM 가격은 빠르게 변하므로 구성 총액은 추적하지 않으며, 제시하는 몇 가지 GPU 가격에는 출처와 날짜를 표시했습니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년에 로컬 LLM을 실행하기 위한 PC를 어떻게 구성합니까?',
        answer:
          '실행하려는 가장 큰 모델로 단계를 정하고 GPU를 중심으로 구성하십시오. 보급형은 RTX 4060 Ti 16 GB와 Ryzen 7 CPU로 7B–13B 모델을 목표로 합니다. 중급형은 RTX 4070 Ti Super 16 GB로 14B–33B 모델을 목표로 하며, 큰 모델은 더 낮은 양자화나 부분 오프로드가 필요합니다. 고급형은 RTX 5090 32 GB로 70B 작업을 목표로 하며 같은 절충이 따릅니다. 2026년에 GPU와 DDR5 RAM 가격이 크게 올랐으므로 구성 총액은 추적하지 않고, 제시하는 몇 가지 GPU 가격에만 출처와 날짜를 표시합니다.',
        bullets: [
          '보급형: RTX 4060 Ti 16 GB, 7B–13B 모델 실행 가능',
          '중급형: RTX 4070 Ti Super 16 GB, 14B–33B 대상(큰 모델은 절충 필요)',
          '고급형: RTX 5090 32 GB, 적극적인 양자화나 부분 오프로드로만 70B 모델 실행 가능',
          '2026년에 GPU와 DDR5 가격이 크게 올랐습니다. 중고가 반드시 더 저렴하지는 않으므로 신품과 중고 GPU를 비교하십시오',
        ],
        updatedDate: '2026-11-27',
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
          '**2026년 가격으로 구성 비용이 올랐습니다.** 메모리 공급 부족으로 대용량 VRAM GPU와 DDR5 RAM 가격이 올랐습니다. 구성 총액은 추적하지 않으며 RAM이 큰 비용 항목이 될 수 있습니다([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18에 따르면 DDR5 가격은 2026년 8월까지 12개월 동안 약 500% 상승).',
          '**보급형 구성:** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650 W 파워 서플라이 — 7B–13B 모델을 사용 가능한 속도로 실행합니다. 이 가이드의 세 구성 중 비용이 가장 낮은 구성입니다.',
          '**중급형 구성:** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850 W 파워 서플라이 — 14B급 모델을 보급형 카드보다 훨씬 빠르게 실행합니다. 큰 22B–33B 모델은 더 낮은 양자화나 시스템 RAM으로의 부분 오프로드가 필요합니다.',
          '**고급형 구성:** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000 W 파워 서플라이 — 이 가이드의 세 구성 중 70B 모델을 GPU 한 장으로 실행할 수 있는 것은 고급형뿐이며, 그것도 적극적인 양자화나 시스템 RAM으로의 부분 오프로드가 필요합니다. RTX 5090 한 장만으로도 신품 소매가가 약 $4,500–4,700입니다([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 미국 시장, 2026-11-27 확인).',
          '**RAM은 VRAM의 대체재가 아닙니다.** 시스템 RAM을 쓰면 모델이 VRAM을 넘어설 수 있지만, 일부 또는 전부를 RAM에서 실행하면 대개 훨씬 느리고 편안한 대화형 사용에는 너무 느린 경우가 많습니다. 목표 모델에 필요한 만큼 VRAM을 확보하십시오. RAM은 주로 운영 체제, 도구, 오프로드에 쓰입니다.',
          '**파워 서플라이는 GPU에 맞게 확장됩니다.** 보급형은 650 W, 중급형은 850 W, 고급형은 1000 W가 필요합니다. RTX 5090 단독으로 575 W를 소비하기 때문입니다. GPU와 함께 파워 서플라이 예산을 책정하십시오.',
          '**중고가 더 이상 확실한 할인은 아닙니다.** [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장, 2026-11-27 확인. 중고 수치는 2026년 10월 eBay 미국 체결가이며 신품 가격대는 출처에 날짜가 없음)에 따르면 중고 체결 RTX 5090($5,900–6,350)은 신품 소매가(약 $4,500–4,700)보다 높고, 중고 체결 RTX 4090($2,575–3,010)은 신품 매물 범위($2,000–3,000)와 겹치므로 구매 전에 둘을 비교하십시오. 검증된 작동 상태의 중고 카드는 분명히 더 저렴할 때는 여전히 살 만하지만, 항상 그렇다고 가정해서는 안 됩니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**보급형 구성:** GPU RTX 4060 Ti 16 GB — 7B 모델 및 대부분의 13B 모델 실행 가능.',
          '**중급형 구성:** GPU RTX 4070 Ti Super 16 GB — 14B급 모델 실행, 22B–33B는 더 낮은 양자화나 부분 오프로드 필요.',
          '**고급형 구성:** GPU RTX 5090 32 GB — 33B 모델을 편안하게 실행하며, 70B 모델은 적극적인 양자화나 부분 오프로드로만 실행 가능.',
          '**Q4_K_M 양자화 VRAM 기본 규칙:** 매개변수 10억 개당 약 0.6 GB, 컨텍스트 및 도구용 2–4 GB 추가.',
          '**시스템 RAM 가이드:** 보급형 32 GB, 중급형 64 GB, 고급형 128 GB.',
          '**단계별 파워 서플라이:** 보급형 650 W, 중급형 850 W, 고급형 1000 W — RTX 5090 단독으로 575 W 소비.',
          '**2026년 가격 현실:** GPU와 DDR5 RAM 가격이 크게 올랐습니다. 실시간 가격을 확인하고 신품과 중고 GPU를 비교하십시오.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '에디터 추천: 중급형 구성',
        highlight: true,
        content:
          '**대부분의 구매자를 위한 편집부의 선택은 중급형 구성입니다.** RTX 4070 Ti Super 16 GB를 중심으로 하며, 14B급 모델을 Q4로 컨텍스트 여유를 두고 실행하고, 22B–33B 모델은 더 낮은 양자화나 부분 오프로드로 처리할 수 있으며, 보급형 카드보다 훨씬 빠릅니다. 상한이 확실히 7B–13B라면 보급형을, 33B나 70B를 위해 VRAM이 더 필요하다면 고급형을 선택하십시오. 모델 크기와 가격은 변하므로 구매 전에 다시 확인하십시오.',
        callouts: [
          {
            type: 'note',
            text: '이 에디터 추천은 제조사 사양과 일반적인 모델 파일 크기를 바탕으로 한 편집상의 판단입니다. PromptQuorum의 테스트나 가격 비교에 근거하지 않으며, RTX 4070 Ti Super의 가격은 여기에서 추적하지 않습니다. PromptQuorum은 어떤 제휴 프로그램에도 등록되어 있지 않으며, 아래 링크에는 제휴 태그가 포함되어 있지 않습니다. 이 링크는 수수료를 발생시키지 않는 단순 참조 링크입니다.',
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
          'GPU의 VRAM과 전력 수치는 제조사 사양입니다. 실행 가능 모델 열은 모델 파일 크기와 VRAM에 근거한 추정이며 PromptQuorum의 테스트 결과가 아닙니다. 실제 결과는 양자화, 실행 환경, 컨텍스트 길이에 따라 달라집니다. 구성 총액은 추적하지 않습니다. 이 페이지는 RTX 5090과 RTX 4090의 가격만 제시하며 다른 부품 가격은 포함하지 않습니다. 중고가 반드시 더 저렴하지는 않으므로 신품과 중고 GPU 매물을 비교하십시오.',
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
            '실행 가능': '14B, 22B–33B는 낮은 양자화·오프로드',
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
          { '상황': '14B 모델을 상시 사용하며 더 빠른 응답을 원함', '선택할 구성': '중급형 구성' },
          { '상황': '22B–33B를 가볍게 사용하며 절충을 받아들임', '선택할 구성': '중급형 구성' },
          { '상황': '33B 모델을 많이 쓰거나 VRAM 여유를 원함', '선택할 구성': '고급형 구성' },
          { '상황': '적극적인 양자화나 부분 오프로드로 70B 모델을 실행할 수 있는 단일 GPU 기기가 필요한 경우', '선택할 구성': '고급형 구성' },
          { '상황': '2026년 가격 급등에도 불구하고 총액을 낮게 유지하고 싶은 경우', '선택할 구성': '어떤 단계든 가능 — 신품과 중고 GPU 목록 비교' },
          { '상황': '확신이 없어 중간 선택지를 원함', '선택할 구성': '중급형 구성 — 에디터 추천' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: '보급형 구성: RTX 4060 Ti 16 GB',
        content:
          '**보급형 구성은 이 가이드의 세 구성 중 비용이 가장 낮으며 7B 모델과 Q4의 대부분의 13B 모델을 실행합니다. 많은 입문자에게 충분합니다.** 이 가이드에서 가장 저렴한 16 GB 카드인 RTX 4060 Ti 16 GB를 중심으로 하여 총비용을 낮추는 데 도움이 됩니다.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB:** 16 GB VRAM, 165 W. Q4의 14B 모델은 컨텍스트 여유를 두고 들어갑니다. 속도 수치는 제시하지 않습니다. PromptQuorum은 이 카드를 측정하지 않았고, 속도는 양자화, 실행 환경, 컨텍스트 길이에 따라 달라집니다. 8 GB 버전 대신 이 제품을 고르는 이유는 16 GB 용량입니다.',
          '**CPU — AMD Ryzen 7 7700:** 8코어, 적당한 전력 소비. CPU는 GPU 추론 중 작업이 거의 없으므로 이 단계에서는 중간급 칩이 적합합니다. 이 단계에서 CPU에 과도하게 지출하지 마십시오.',
          '**메인보드 — B650 칩셋:** Ryzen 7과 전체 크기 GPU를 PCIe에서 지원합니다. 이 단계에서는 고급 전원 공급이 필요하지 않습니다.',
          '**RAM — 32 GB DDR5:** 운영 체제, 도구, VRAM에서 실행되는 7B–13B 모델에 충분합니다. RAM은 VRAM의 대체재가 아닙니다. DDR5 가격은 2026년에 크게 올랐으므로 현재 가격을 확인하십시오.',
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
          '**중급형 구성은 에디터 추천입니다. 일상적인 14B 작업을 위한 더 빠른 카드이며, 큰 22B–33B 모델은 더 낮은 양자화나 부분 오프로드로 사용할 수 있습니다.** RTX 4070 Ti Super 16 GB를 중심으로 하며, 더 높은 메모리 대역폭 덕분에 같은 모델에서 보급형 카드보다 훨씬 빠릅니다.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB:** 16 GB VRAM, 285 W. 용량은 보급형과 같지만 메모리 대역폭이 훨씬 높아 7B–14B 모델의 응답이 눈에 띄게 빠릅니다. 33B Q4 모델(약 18–20 GB)은 16 GB에 들어가지 않으므로 22B–33B 범위의 큰 모델은 더 낮은 양자화나 부분 오프로드가 필요합니다.',
          '**CPU — AMD Ryzen 9 7900X:** 12코어. 추론과 함께 데이터 준비 및 도구 실행을 위한 보급형보다 더 많은 여유 공간.',
          '**메인보드 — B650 또는 X670 칩셋:** 12코어 CPU와 285 W GPU를 위한 견고한 전원 공급.',
          '**RAM — 64 GB DDR5:** 운영 체제, 더 큰 컨텍스트 창, 부분 오프로드, 모델과 함께 실행하는 RAG 파이프라인 같은 도구를 위한 공간입니다. 예산이 빠듯하면 VRAM에 완전히 들어가는 모델에는 32 GB로 충분하며, 오프로드하는 모델은 용량이 클수록 유리합니다.',
          '**스토리지 — 2 TB NVMe SSD:** 상당한 모델 라이브러리를 저장합니다. 33B Q4 모델 하나는 약 18–20 GB입니다.',
          '**파워 서플라이 — 850 W 80+ Gold:** 지속적인 부하 하에서 285 W GPU와 12코어 CPU에 대한 편안한 여유 공간.',
          '**케이스 및 쿨링 — 240–280 mm AIO 또는 고급 공냉 쿨러가 있는 미드타워:** 중급형은 적당한 발열이 있습니다. 품질 쿨러로 장시간 추론 세션 중 CPU를 안정적으로 유지하십시오.',
          '**이 단계를 선택하는 이유:** 14B 모델을 상시 사용하며 더 빠른 응답을 원하거나, 22B–33B를 가볍게 쓰면서 절충을 받아들일 수 있는 경우입니다. **건너뛰어야 하는 이유:** 7B–13B로 충분하면 보급형이 더 저렴합니다. 70B가 목표라면 16 GB는 크게 부족하므로 고급형을 검토하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '중급형 구성은 보급형과 동일한 모델을 수용합니다. 추가 비용은 용량이 아니라 속도에 대한 것입니다. 14B 모델이 일상적인 작업 부하가 되고 기다리는 것이 싫다면 이 단계를 선택하십시오.',
          },
          {
            type: 'note',
            text: '중고 RTX 4090 24 GB는 비용이 큰 지름길입니다. 2026년 10월 eBay 미국 체결가는 $2,575–3,010이었습니다([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 미국 시장, 2026-11-27 확인). RTX 4070 Ti Super의 가격은 여기에서 추적하지 않으므로 구매 전에 신품과 중고의 현재 매물을 비교하십시오.',
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
          '**이 가이드의 세 구성 중 70B 모델을 GPU 한 장으로 실행할 수 있는 것은 고급형 구성뿐이며, 적극적인 양자화나 시스템 RAM으로의 부분 오프로드가 필요합니다. RTX 5090 32 GB가 핵심 부품입니다.** 이 단계는 주로 VRAM 용량 때문에 선택합니다. RTX 5090은 신품 소매가가 약 $4,500–4,700이고 MSRP는 $1,999입니다([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 미국 시장, 2026-11-27 확인). GPU가 가장 큰 비용이 될 것으로 예상하십시오.',
        items: [
          '**GPU — RTX 5090 32 GB (신품 소매가 약 $4,500–4,700, 출처에 날짜가 없는 범위, MSRP $1,999; 중고는 eBay 미국 체결가 $5,900–6,350, 2026년 10월; [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 미국 시장, 2026-11-27 확인; 견적 아님):** 32 GB GDDR7 VRAM, 575 W. 이 가이드의 단일 GPU 중 VRAM이 가장 큽니다. Q4의 33B 모델은 여유 있게 실행하지만, 70B 모델은 적극적인 양자화나 시스템 RAM으로의 부분 오프로드로만 실행합니다.',
          '**CPU — AMD Ryzen 9 7950X:** 16코어. 집중적인 추론과 함께 데이터 준비, 파인튜닝 실험, 도구 실행을 처리하기에 충분합니다.',
          '**메인보드 — X670E 칩셋:** 575 W GPU와 16코어 CPU를 위해 크기가 맞춰진 강력한 전원 공급 및 PCIe 5.0.',
          '**RAM — 128 GB DDR5:** 큰 컨텍스트 창, 여러 모델 동시 로드, 도구, RAM으로의 부분 오프로드를 위한 공간입니다. 64 GB 키트는 비용이 더 낮은 대안입니다.',
          '**스토리지 — 4 TB NVMe SSD:** 70B Q4 모델은 약 40 GB입니다. 4 TB 드라이브에는 대형 모델을 많이 저장할 수 있습니다.',
          '**파워 서플라이 — 1000 W 80+ Platinum:** NVIDIA는 RTX 5090의 그래픽 소비 전력을 575 W, 필요 시스템 전력을 1000 W로 안내합니다(나머지 구성에 따라 다름). 750 W 제품은 이 기준에 못 미치므로 이 부품을 작게 선택하지 마십시오.',
          '**케이스 및 쿨링 — 360 mm AIO를 장착한 대형 케이스:** 575 W GPU와 16코어 CPU는 상당한 열을 냅니다. 지속 부하에 맞춰 공기 흐름과 CPU 냉각을 계획하십시오.',
          '**이 단계를 선택하는 이유:** 33B 모델을 여유 있게 쓰고 싶거나, 절충을 감수하고 70B를 실행하거나, 무거운 배치 추론을 하는 경우입니다. **건너뛰어야 하는 이유:** 7B–14B 모델에는 필요 이상입니다. 중급형은 RTX 5090 비용 없이 이 크기를 실행합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090은 단독으로 575 W를 소비합니다. 이 부품 목록의 1000 W 파워 서플라이와 함께 사용하십시오. 더 작은 제품은 NVIDIA 기준에 못 미치며 부하 시 전원 꺼짐이나 불안정을 일으킬 수 있습니다. 조립 전에 콘센트 회로가 전체 소비 전력을 공급할 수 있는지 확인하십시오. 이는 전기 안전 자문이 아닙니다. NVIDIA와 파워 서플라이 제조사의 안내를 따르십시오.',
          },
          {
            type: 'note',
            text: '70B 모델은 Q4에서 약 39–42 GB의 VRAM이 필요하므로 RTX 5090 32 GB도 전체를 담을 수 없습니다. 더 낮은 양자화나 시스템 RAM으로의 부분 오프로드가 필요합니다. 이 구성의 128 GB RAM이 그 오프로드를 위한 공간을 제공합니다.',
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
          '**2026년 메모리 공급 부족으로 대용량 VRAM GPU와 DDR5 RAM 가격이 크게 올랐으며, 이 두 부품은 예산의 큰 부분을 차지할 수 있습니다.** 출시 가격이 아닌 현재 매물 가격으로 계획하십시오.',
        items: [
          '**GPU와 RAM을 먼저 확인하십시오.** GPU는 대개 로컬 AI PC에서 가장 비싼 부품이며 DDR5 RAM은 2026년에 크게 비싸졌습니다. 이 페이지는 총액을 추적하지 않으므로 비용 항목의 순위를 매기지 않습니다.',
          '**메모리 공급이 주요 원인입니다.** [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)는 GPU 가격 상승의 주된 원인을 GDDR7 부족으로 보며, 메모리 생산이 AI 데이터센터 쪽으로 옮겨 가고 있고 16 GB 이상 카드의 공급이 가장 빠듯하다고 설명합니다. DDR5에 대해서도 [Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/)는 생산이 HBM과 서버용 DRAM으로 이동한 점을 지적합니다. RTX 5090은 신품 소매가가 약 $4,500–4,700이고 MSRP는 $1,999입니다(4,500 / 1,999 = 2.25배, InsiderLLM, 미국 시장, 2026-11-27 확인). 두 배가 넘습니다.',
          '**하위급 GPU 가격은 여기서 추적하지 않습니다.** 보급형과 중급형 구성의 RTX 4060 Ti 16 GB와 RTX 4070 Ti Super는 트래커의 대상이 아니므로 실시간 매물을 확인하십시오.',
          '**중고는 확실한 할인이 아닙니다.** [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장, 2026-11-27 확인)에 따르면 2026년 10월 eBay 미국 중고 체결가는 RTX 5090이 $5,900–6,350(신품 소매가 약 $4,500–4,700, 출처에 날짜 없음), RTX 4090이 $2,575–3,010(중앙값 $2,860, 216건)입니다. 이는 매물 데이터이며 견적이 아닙니다. 모든 카드에서 신품과 중고를 비교하고, 작동이 검증된 중고는 분명히 더 저렴할 때만 구입하십시오.',
          '**DDR5는 크게 움직였고 다른 부품은 추적하지 않습니다.** DDR5 가격은 2026년 8월까지 12개월 동안 약 500% 올랐습니다([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18. 128 GB DDR5-6400 키트가 $3,399에 게시됨). CPU, 메인보드, 파워 서플라이, SSD 가격은 이 페이지에서 추적하지 않으므로 함께 확인하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 메모리 공급 부족으로 대용량 VRAM GPU와 DDR5 RAM 가격이 크게 올랐으므로, 구성 비용을 계산할 때 이 두 가지를 먼저 확인하십시오.',
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
          '**2. 엄격한 예산 상한은 얼마입니까?** 보급형 구성이 비용이 가장 낮고, 중급형이 중간, 고급형이 가장 높습니다. RTX 5090 한 장만으로도 신품 소매가가 약 $4,500–4,700입니다([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 미국 시장, 2026-11-27 확인).',
          '**3. 신품 GPU입니까, 중고 GPU입니까?** 둘 다 비교하십시오. [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장, 2026-11-27 확인)에 따르면 중고 RTX 5090 체결가는 신품 소매가보다 높고, 중고 RTX 4090 체결가는 신품 매물 가격대와 겹칩니다. 중고는 분명히 더 저렴할 때만 의미가 있습니다.',
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
          '**대형 소매업체에서는 이 구성에 필요한 종류의 부품을 판매합니다. 특히 GPU는 신품과 중고 매물을 비교하십시오.** 아래 링크는 단순 제품 검색 링크입니다. 제휴 태그가 없으며 수수료가 발생하지 않습니다.',
        items: [
          '**Amazon 및 Newegg:** CPU, RAM, SSD, 파워 서플라이, 케이스를 폭넓게 판매합니다. 신품 GPU와 DDR5의 재고와 가격은 실시간으로 확인하십시오.',
          '**중고 GPU 시장:** 확인해 볼 만하지만 절약이 보장되지는 않습니다. [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장, 2026-11-27 확인)에 따르면 중고 RTX 5090 체결가는 신품 소매가보다 높고, 중고 RTX 4090 체결가는 신품 매물 가격대와 겹칩니다. 분명히 더 저렴하고 작동이 검증된 경우에만 중고를 구입하십시오.',
          '**지역 전자 제품 매장 및 PC 전문점:** CPU, 메인보드, 파워 서플라이 가격을 비교할 수 있는 또 다른 구매처입니다. CPU와 메인보드 번들도 확인하십시오.',
          '**GPU를 먼저 구입하십시오.** 대개 가장 비싼 부품이며 가격이 빠르게 바뀔 수 있습니다. 수용 가능한 가격에 확보한 뒤 나머지 부품을 구입하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '이 가이드는 구성 총액을 추적하지 않습니다. 조립 전에 GPU와 RAM의 현재 판매 페이지를 확인하십시오. 비용의 큰 부분을 차지할 수 있습니다.',
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
          '**VRAM 대신 시스템 RAM을 구입하는 것.** RAM을 쓰면 모델이 VRAM을 넘어설 수 있지만, 일부 또는 전부를 RAM에서 실행하면 대개 훨씬 느리고 편안한 대화형 사용에는 너무 느린 경우가 많습니다. 목표 모델에 필요한 만큼 VRAM을 확보하십시오.',
          '**파워 서플라이를 과소평가하는 것.** RTX 5090 단독으로 575 W를 소비합니다. 부하 하에서 제한되는 파워 서플라이는 안정적으로 실행되는 느린 GPU보다 나쁩니다. 단계에 맞게 파워 서플라이를 조정하십시오.',
          '**출시 가격에 고정되는 것.** 2026년 가격 급등으로 GPU 권장 소비자가와 작년의 RAM 가격은 더 이상 현실을 반영하지 않습니다. GPU와 RAM을 실시간 소매 가격 기준으로 예산을 책정하고, 중고가 더 저렴하다고 가정하지 말고 중고 시장과 비교하십시오.',
          '**보급형 구성에 RTX 4060 Ti 8 GB를 구입하는 것.** 16 GB 버전과 같은 이름이지만 14B 모델을 수용할 수 없습니다. 목록에서 16 GB 변형을 확인하십시오.',
          '**7B 모델용으로 과도하게 구성하는 것.** 7B 모델로 용도가 충분하다면 고급형은 훨씬 비싼 GPU와 훨씬 높은 소비 전력(보급형 카드 165 W 대비 575 W)을 더할 뿐 이점은 작습니다. 우연히 가진 예산이 아니라 모델에 맞춰 단계를 고르십시오.',
          '**케이스 및 쿨링 계획을 건너뛰는 것.** 575 W GPU와 16코어 CPU는 실제 발열을 발생시킵니다. 부품을 주문하기 전에 케이스가 GPU와 쿨러를 수용하고 공기 흐름이 원활한지 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[로컬 LLM GPU 구매 가이드 2026](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: GPU 구매 안내와 2026년 가격 상승 배경.',
          '[로컬 LLM 워크스테이션 구성](/ko/local-llms/local-llm-workstation-build) — PromptQuorum: 고급형 단계 이면의 이중 GPU 70B 워크스테이션을 위한 부품 목록, 쿨링, 파워 서플라이 가이드.',
          '[NVIDIA GeForce RTX 40 및 50 시리즈 사양](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti, 4070 Ti Super, 5090의 공식 VRAM 용량 및 전력(TGP) 수치.',
          '[PCPartPicker](https://pcpartpicker.com) — AMD Ryzen CPU, DDR5 RAM, NVMe SSD, 파워 서플라이의 실시간 부품 가격.',
          '[InsiderLLM: NVIDIA GPU 가격](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — RTX 5090과 RTX 4090 수치 및 GPU 공급 설명에 사용한 제3자 트래커(미국 시장, 2026-11-27 확인).',
          '[Hardware Busters: DDR5 메모리 가격](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/) — DDR5 가격 상승 수치의 출처(2026-08-18).',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: "GPU 1개 구성에 1000W 파워서플라이는 과한가요?",
            a: 'RTX 5090에는 과하지 않습니다. NVIDIA는 이 카드의 그래픽 소비 전력을 575 W, 필요 시스템 전력을 1000 W로 안내합니다(나머지 구성에 따라 다름). 이 가이드의 보급형과 중급형에는 1000 W가 필요 이상이며, 650 W와 850 W(80+ Gold)로 RTX 4060 Ti 16 GB와 RTX 4070 Ti Super 16 GB를 여유 있게 감당합니다. 와트를 늘리는 것보다 12V-2x6 커넥터를 기본 제공하는 ATX 3.1 제품이 더 중요합니다.',
          },
          {
            q: '2026년에 로컬 AI PC를 구성하는 데 얼마나 비용이 듭니까?',
            a: '2026년 GPU와 RAM 가격은 빠르게 변하므로 구성 총액은 추적하지 않습니다. 고급형 구성의 RTX 5090은 신품 소매가가 약 $4,500–4,700이고([InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 미국 시장, 2026-11-27 확인), DDR5 가격은 2026년 8월까지 12개월 동안 약 500% 올랐습니다([Hardware Busters](https://hwbusters.com/news/ddr5-memory-prices-are-up-500-in-a-year-and-a-128gb-kit-now-lists-at-3399/), 2026-08-18). 선택한 단계의 부품 목록 실시간 가격을 합산하십시오.',
          },
          {
            q: '로컬 AI PC에 어떤 GPU를 사용해야 합니까?',
            a: '목표 모델 크기에 따라 GPU를 선택하십시오. 7B–13B 모델 보급형 구성에는 RTX 4060 Ti 16 GB, 14B–33B 모델 중급형 구성에는 RTX 4070 Ti Super 16 GB, 70B 작업 고급형 구성에는 RTX 5090 32 GB가 적합합니다. GPU가 기기가 실행하는 모델을 결정하므로 먼저 선택하고, 나머지 부품 목록을 그 주변에 구성하십시오. 참고로 16 GB 카드에서는 14B–33B 범위의 큰 모델에 더 낮은 양자화나 부분 오프로드가 필요합니다.',
          },
          {
            q: '로컬 AI PC에 RAM이 얼마나 필요합니까?',
            a: '보급형은 32 GB, 중급형은 64 GB, 고급형은 128 GB를 계획하십시오. 시스템 RAM은 VRAM의 대체재가 아닙니다. 일부 또는 전부를 RAM에서 실행하는 모델은 대개 훨씬 느리고 편안한 대화형 사용에는 너무 느린 경우가 많습니다. RAM은 운영 체제, 컨텍스트, 도구, 오프로드용이며, GPU VRAM은 목표 모델에 필요한 만큼 확보하십시오.',
          },
          {
            q: '로컬 AI PC에 어떤 파워 서플라이가 필요합니까?',
            a: '단계에 맞게 파워 서플라이를 조정하십시오: 보급형 구성에 650 W, 중급형에 850 W, 고급형에 1000 W. 고급형 단계는 RTX 5090 단독으로 575 W를 소비하기 때문에 1000 W가 필요합니다. 용량 부족 파워 서플라이는 부하 하에서 불안정성을 초래하므로 이 부품을 절약하지 마십시오.',
          },
          {
            q: '2026년에 GPU 부품을 새 것으로 구입해야 합니까, 중고로 구입해야 합니까?',
            a: '결정하기 전에 신품과 중고를 비교하고, 중고가 더 저렴하다고 가정하지 마십시오. [InsiderLLM GPU 가격 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장, 2026-11-27 확인)에 따르면 2026년 10월 eBay 미국 중고 체결가는 RTX 5090이 $5,900–6,350(신품 소매가 약 $4,500–4,700, 출처에 날짜 없음), RTX 4090이 $2,575–3,010입니다. 중고 카드는 분명히 더 저렴하고 작동이 검증된 경우에만 살 가치가 있습니다. CPU, RAM, SSD, 파워 서플라이는 보증을 고려해 저희라면 대개 신품을 구입합니다.',
          },
          {
            q: '단일 GPU 구성으로 70B 모델을 실행할 수 있습니까?',
            a: '네, 고급형 구성으로 가능합니다. RTX 5090 32 GB는 이 가이드의 단일 GPU 중 VRAM이 가장 크지만, Q4 양자화 70B 모델은 약 39–42 GB의 VRAM이 필요하므로 적극적인 양자화나 시스템 RAM으로의 부분 오프로드를 통해서만 70B를 실행할 수 있습니다. 고급형 구성의 128 GB RAM이 해당 오프로드에 필요한 공간을 제공합니다.',
          },
          {
            q: '보급형 대비 추가 비용을 고려할 때 중급형 구성이 가치가 있습니까?',
            a: '14B급 모델을 자주 실행한다면 가치가 있을 수 있습니다. 두 구성 모두 VRAM이 16 GB이므로 중급형이라고 더 큰 모델을 VRAM에 올릴 수 있는 것은 아니지만, RTX 4070 Ti Super는 메모리 대역폭이 훨씬 높아 응답이 빠릅니다. 상한이 확실히 7B–13B라면 보급형이 더 저렴합니다.',
          },
          {
            q: '로컬 AI PC에 Threadripper CPU가 필요합니까?',
            a: '아닙니다. 이 가이드의 세 구성에는 일반 소비자용 Ryzen CPU로 충분합니다. 보급형은 Ryzen 7, 중급형과 고급형은 Ryzen 9입니다. Threadripper는 주로 더 많은 PCIe 레인이 필요한 멀티 GPU 시스템에서 검토할 만하며, 이 단일 GPU 구성의 범위를 벗어납니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[전체 구매 가이드로 구성에 맞는 GPU 선택](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 네 가지 예산대의 일반 소비자용 GPU 10종과 날짜가 표시된 가격.',
          '[프로덕션 사용을 위한 이중 GPU 70B 워크스테이션 구성 보기](/ko/local-llms/local-llm-workstation-build) — 이 가이드의 고급형 구성을 넘어서는 70B급 모델용 48 GB VRAM 이중 GPU 단계.',
          '[PC 구성 대 클라우드 GPU 대여 비교](/ko/power-local-llm/cloud-gpu-rental-guide-2026) — 가끔 컴퓨팅에는 자체 하드웨어 소유보다 대여가 나을 때.',
          '[구성 전 각 모델 크기에 필요한 VRAM 계산](/ko/local-llms/how-much-vram-local-llm) — 여기 단계 선택 이면의 모델 크기별 완전한 VRAM 방법론.',
          '[로컬 AI를 위한 PC 구성의 대안으로 Mac 고려](/ko/power-local-llm/best-mac-for-local-ai-2026) — 통합 메모리를 갖춘 Apple Silicon이 로컬 AI를 위한 전용 GPU PC를 능가하는 경우.',
        ],
      },
    },
  },
}
