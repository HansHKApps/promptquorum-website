// Power Local LLM — Local AI Workstation Build Guide: 3 Budget Tiers
// Slug: local-ai-workstation-build-guide-2026
// Affiliate buying guide. Outbound component links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: July 2026 snapshot. The 2026 memory-chip shortage pushed GPU prices
// 1.5-2x above MSRP, which raises every build cost in this guide above earlier
// figures. Component prices sourced from the audited PromptQuorum GPU buying
// guide and workstation build articles.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: 'Local AI Workstation Build Guide 2026: 3 Budget Tiers',
    seoTitle: 'Local AI PC Build 2026: Budget to 70B Workstation',
    intro:
      'Most local-AI build guides start with the CPU, but the GPU and its VRAM are what decide which models the machine can run — every other part is chosen to support that GPU. This guide gives three complete parts lists for a local-LLM PC: a budget build for 7B-13B models, a mid build for 14B-33B models, and an enthusiast build for 70B work. Each tier lists exact components, expected performance, and a total cost. One caveat on price: the 2026 memory-chip shortage pushed GPU prices 1.5-2x above MSRP, which raises every build cost here above what the same parts cost a year ago — treat each figure as a July 2026 snapshot and lean on the used GPU market where you can.',
    metaDescription:
      'Three complete local-AI PC builds for 2026: budget 7B-13B, mid 14B-33B, and enthusiast 70B tiers. Exact parts lists, expected tokens/sec, and July 2026 total costs.',
    twitterDescription:
      'Local AI PC build guide: three budget tiers with full parts lists for 7B to 70B models. The 2026 GPU price surge raised every build cost — here are July 2026 totals.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**The best local-AI PC build is the tier whose GPU VRAM fits your target model. A ~$1,100 budget build runs 7B-13B models, a ~$2,400 mid build runs 14B-33B models, and a ~$5,000 enthusiast build runs 70B models — with 2026 GPU prices raising every total above last year.**',
    quickAnswerTop: {
      en: {
        question: 'How do I build a PC for running local LLMs in 2026?',
        answer:
          'Choose your tier by the largest model you want to run, then build around the GPU. A budget build (~$1,100) pairs an RTX 4060 Ti 16 GB with a Ryzen 7 CPU for 7B-13B models. A mid build (~$2,400) uses an RTX 4070 Ti Super 16 GB for 14B-33B models. An enthusiast build (~$5,000) uses an RTX 5090 32 GB for 70B work. The 2026 memory shortage pushed GPU prices well above MSRP, so every total is a July 2026 snapshot.',
        bullets: [
          'Budget build ~$1,100: RTX 4060 Ti 16 GB, runs 7B-13B models',
          'Mid build ~$2,400: RTX 4070 Ti Super 16 GB, runs 14B-33B models',
          'Enthusiast build ~$5,000: RTX 5090 32 GB, runs 70B models at Q4',
          '2026 GPU prices run 1.5-2x above MSRP — buy GPUs used where you can',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Editor\'s Choice', anchor: '#editors-choice' },
      { label: 'Build Tier Comparison', anchor: '#comparison-table' },
      { label: 'Which Build Should You Choose?', anchor: '#which-build' },
      { label: 'Budget Build (~$1,100)', anchor: '#budget-build' },
      { label: 'Mid Build (~$2,400)', anchor: '#mid-build' },
      { label: 'Enthusiast Build (~$5,000)', anchor: '#enthusiast-build' },
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
          '**2026 GPU prices raised every build cost.** A memory-chip shortage pushed GPU prices 1.5-2x above MSRP. The build totals here are July 2026 snapshots and run higher than the same parts cost a year ago — lean on the used GPU market.',
          '**Budget build (~$1,100):** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650 W PSU — runs 7B-13B models at usable speed. The cheapest complete machine for local AI.',
          '**Mid build (~$2,400):** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850 W PSU — runs 14B-33B models and makes 7B-14B feel instant.',
          '**Enthusiast build (~$5,000):** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000 W PSU — the only single-GPU build that fits a 70B model at Q4.',
          '**RAM is not a substitute for VRAM.** System RAM lets a model spill out of VRAM, but a model running from RAM is too slow for interactive use. Buy enough VRAM for the model; buy RAM for the operating system and tooling.',
          '**The power supply scales with the GPU.** A budget build needs 650 W, the mid build 850 W, and the enthusiast build 1000 W because the RTX 5090 alone draws 575 W. Budget the PSU alongside the card.',
          '**Used GPUs are the value play in 2026.** A used RTX 4090 or RTX 4060 Ti escapes most of the price surge — buy a verified-working used card to keep the build total down.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Budget build (~$1,100):** RTX 4060 Ti 16 GB GPU — runs 7B and most 13B models.',
          '**Mid build (~$2,400):** RTX 4070 Ti Super 16 GB GPU — runs 14B comfortably, light 22B-33B work.',
          '**Enthusiast build (~$5,000):** RTX 5090 32 GB GPU — runs 33B comfortably and 70B at Q4.',
          '**VRAM rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**System RAM guidance:** 32 GB for the budget build, 64 GB for the mid build, 128 GB for the enthusiast build.',
          '**Power supply by tier:** 650 W budget, 850 W mid, 1000 W enthusiast — the RTX 5090 draws 575 W on its own.',
          '**2026 price reality:** GPU prices run 1.5-2x above MSRP on a memory shortage — confirm live prices and consider used cards.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: The Mid Build (~$2,400)',
        sponsoredSlot: true,
        content:
          '**For most buyers building a PC for local AI, the mid build is the tier that balances capability, cost, and headroom.** Built around an RTX 4070 Ti Super 16 GB, it runs every 14B model with context room, handles light 22B-33B work, and makes 7B-14B models feel instant — for roughly $2,400 all in. It is the build that will not frustrate you within months and will not need replacing within a year. Drop to the budget build only if your ceiling is firmly 7B-13B models; step up to the enthusiast build only if you specifically need 70B work. The mid build is the safe default for a machine you want to keep.',
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
            priceRange: '1150-1200',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Check RTX 4070 Ti Super price on Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Three Build Tiers Compare in 2026',
        content:
          'GPU VRAM and power figures are manufacturer specifications. Inference speeds are family-level estimates from PromptQuorum GPU testing for the tier\'s GPU. Build totals are July 2026 US snapshots — the 2026 GPU price surge pushed cards 1.5-2x above MSRP, so the GPU line dominates each total and moves week to week. Buying the GPU used lowers every total.',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: 'Local AI PC build tiers compared: RTX 4060 Ti 16GB budget build (~$1,100) runs 7B-13B models, RTX 4070 Ti Super 16GB mid build (~$2,400) runs 14B-33B models, RTX 5090 32GB enthusiast build (~$5,000) runs 33B-70B models.',
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
        columns: ['Build tier', 'GPU', 'VRAM', 'Runs', 'PSU', 'Total (July 2026)'],
        rows: [
          {
            'Build tier': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Runs': '7B-13B models',
            'PSU': '650 W',
            'Total (July 2026)': '~$1,100',
          },
          {
            'Build tier': 'Mid',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Runs': '14B comfortably, light 22B-33B',
            'PSU': '850 W',
            'Total (July 2026)': '~$2,400',
          },
          {
            'Build tier': 'Enthusiast',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Runs': '33B comfortably, 70B at Q4',
            'PSU': '1000 W',
            'Total (July 2026)': '~$5,000',
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
          { 'Your situation': 'I run 7B-13B models and want the cheapest complete machine', 'Build this': 'Budget build (~$1,100)' },
          { 'Your situation': 'I want a first local-AI PC and am not sure how far I will go', 'Build this': 'Budget build, or mid build for headroom' },
          { 'Your situation': 'I run 14B models constantly and want them instant', 'Build this': 'Mid build (~$2,400)' },
          { 'Your situation': 'I do light 22B-33B work and want a machine that lasts', 'Build this': 'Mid build (~$2,400)' },
          { 'Your situation': 'I run 33B models heavily or want strong future headroom', 'Build this': 'Enthusiast build (~$5,000)' },
          { 'Your situation': 'I need a single-GPU machine that runs 70B models at Q4', 'Build this': 'Enthusiast build (~$5,000)' },
          { 'Your situation': 'I want to keep the total down despite the 2026 surge', 'Build this': 'Any tier — buy the GPU used' },
          { 'Your situation': 'I am unsure and want the safest build to keep for years', 'Build this': 'Mid build — the Editor\'s Choice' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Budget Build (~$1,100): RTX 4060 Ti 16 GB',
        content:
          '**The budget build is the cheapest complete local-AI PC and runs every 7B model plus most 13B models — enough capability for most first-time users.** It is built around the RTX 4060 Ti 16 GB, the GPU least inflated by the 2026 surge, which keeps the total reasonable.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB (~$420-450):** 16 GB VRAM, 165 W. Runs 7B models at roughly 20-25 tok/s and fits 14B models with context headroom. The 16 GB capacity is the reason to pick it over the 8 GB version.',
          '**CPU — AMD Ryzen 7 7700 (~$250-280):** 8 cores, modest power draw. The CPU does little work during GPU inference, so a mid-range chip is correct here — do not overspend on the CPU in this tier.',
          '**Motherboard — B650 chipset (~$130-160):** supports the Ryzen 7 and a single full-size GPU on PCIe. No need for high-end power delivery at this tier.',
          '**RAM — 32 GB DDR5 (~$90-120):** enough for the operating system, tooling, and a 7B-13B model running in VRAM. RAM is not a VRAM substitute — 32 GB is sufficient here.',
          '**Storage — 1 TB NVMe SSD (~$70-90):** holds the operating system and several models (a 7B Q4 model is roughly 4-5 GB).',
          '**PSU — 650 W 80+ Gold (~$80-100):** comfortable headroom for a 165 W GPU and an 8-core CPU.',
          '**Case and cooling — mid-tower with a tower air cooler (~$80-120):** the budget tier produces little heat; air cooling is sufficient.',
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
            priceRange: '420-450',
            label: 'Check RTX 4060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'Check Ryzen 7 7700 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: 'Check 32GB DDR5 RAM price on Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Mid Build (~$2,400): RTX 4070 Ti Super 16 GB',
        content:
          '**The mid build is the Editor\'s Choice — it runs 14B models instantly, handles light 22B-33B work, and is the tier you build to keep.** It is built around the RTX 4070 Ti Super 16 GB, fast enough that response latency stops being noticeable on 14B-class models.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB (~$1,150-1,200):** 16 GB VRAM, 285 W. Same model capacity as the budget tier but far faster — 7B-14B models feel instant, and light 22B-33B work is usable.',
          '**CPU — AMD Ryzen 9 7900X (~$330-370):** 12 cores. More headroom than the budget CPU for data preparation and running tooling alongside inference.',
          '**Motherboard — B650 or X670 chipset (~$180-240):** solid power delivery for the 12-core CPU and a 285 W GPU.',
          '**RAM — 64 GB DDR5 (~$180-230):** room for the operating system, larger context windows, and tooling such as a RAG pipeline running next to the model.',
          '**Storage — 2 TB NVMe SSD (~$130-170):** holds a sizeable model library — a 33B Q4 model is roughly 18-20 GB.',
          '**PSU — 850 W 80+ Gold (~$120-150):** comfortable headroom for the 285 W GPU and the 12-core CPU under sustained load.',
          '**Case and cooling — mid-tower with a 240-280 mm AIO or high-end air cooler (~$150-220):** the mid tier produces moderate heat; a quality cooler keeps the CPU stable during long inference runs.',
          '**Why build this tier:** you run 14B models constantly and want them instant, or you do light 22B-33B work and want headroom. **Why skip it:** if 7B-13B is enough, the budget build saves over $1,000; if you need 70B, no 16 GB GPU fits it — go enthusiast.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'The mid build fits the same models as the budget build — you are paying for speed, not capacity. Build this tier if 14B models will be a daily workload and waiting on them would annoy you.',
          },
          {
            type: 'note',
            text: 'A used RTX 4090 24 GB sometimes sells close to the price of a new RTX 4070 Ti Super after the 2026 surge. If you find one verified working, it adds 8 GB of VRAM and reaches 33B models — worth checking before you buy the 4070 Ti Super.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'Check Ryzen 9 7900X price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: 'Check 64GB DDR5 RAM price on Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Enthusiast Build (~$5,000): RTX 5090 32 GB',
        content:
          '**The enthusiast build is the only single-GPU machine that fits a 70B model at Q4 — its RTX 5090 32 GB is the headline part.** Build this tier for VRAM capacity, not raw speed; the speed is a side effect. The 2026 surge hit this tier hardest, so the GPU line dominates and moves week to week.',
        items: [
          '**GPU — RTX 5090 32 GB (~$3,650-3,900):** 32 GB GDDR7 VRAM, 575 W. The only single consumer card that runs a 70B model at Q4 without a dual-GPU build. It runs 33B models comfortably with room to spare.',
          '**CPU — AMD Ryzen 9 7950X (~$450-520):** 16 cores. Enough to run data preparation, fine-tuning experiments, and tooling alongside heavy inference.',
          '**Motherboard — X670E chipset (~$280-380):** strong power delivery and PCIe 5.0, sized for a 575 W GPU and the 16-core CPU.',
          '**RAM — 128 GB DDR5 (~$380-480):** room for large context windows, multiple models loaded at once, and tooling — and the headroom to spill a model partially to RAM if needed.',
          '**Storage — 4 TB NVMe SSD (~$260-340):** a 70B Q4 model is roughly 40 GB; a 4 TB drive holds a large library of large models.',
          '**PSU — 1000 W 80+ Platinum (~$180-240):** required because the RTX 5090 draws 575 W on its own — a 750 W unit would sag under load. Do not undersize this part.',
          '**Case and cooling — full-size case with a 360 mm AIO (~$280-380):** the 575 W GPU and 16-core CPU produce real heat; a 360 mm liquid cooler keeps the CPU stable during sustained 70B inference.',
          '**Why build this tier:** you need 33B or 70B models, you run heavy batch inference, or you want a machine that will not need replacing for years. **Why skip it:** for 7B-14B models it is overkill — the mid build delivers instant responses on those sizes for less than half the cost.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The RTX 5090 draws 575 W on its own. Pair it with the 1000 W power supply in this parts list — a smaller unit will brown out under load. Confirm your wall circuit can supply the full draw before building.',
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
            priceRange: '3650-3900',
            label: 'Check RTX 5090 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'Check Ryzen 9 7950X price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: 'Check 1000W PSU price on Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'How the 2026 Price Surge Changes the Build Math',
        content:
          '**The 2026 memory-chip shortage pushed GPU prices 1.5-2x above MSRP, and since the GPU is the largest line in every build, it raised every total above last year.** Plan the build around current prices, not launch prices.',
        items: [
          '**The GPU dominates the total.** In all three tiers the GPU is the single biggest cost — the surge changes the build total more than any other part.',
          '**The cause is memory, not GPUs.** A GDDR and HBM supply shortage raised the cost of every card with fast memory; the higher the VRAM, the harder the card was hit. The RTX 5090 went from a $1,999 launch price to roughly $3,650-3,900.',
          '**Lower-end GPUs held up better.** The RTX 4060 Ti 16 GB sits near its MSRP, which is why the budget build total moved least.',
          '**Used GPUs are the value play.** A used RTX 4060 Ti or RTX 4090 escapes most of the surge — buying a verified-working used card is the simplest way to cut the build total.',
          '**Non-GPU parts moved less.** CPU, motherboard, SSD, and PSU prices rose modestly; DDR5 RAM also tightened with the memory shortage, but the GPU is still the line to watch.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The 2026 memory shortage pushed GPU prices 1.5-2x above MSRP, raising every local-AI build total because the GPU is the largest single line in the parts list.',
          },
          {
            type: 'plain-terms',
            text: 'The GPU is the most expensive part of the machine, and in 2026 the GPU is the part that got expensive. Until the memory shortage eases, treat launch prices as history, buy the GPU second-hand when you can, and do not buy more VRAM than your model needs.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Decision Flowchart: Pick Your Build in Four Questions',
        content:
          '**Four questions, in order, route most builders to one tier.**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: 'Decision tree for choosing a local-AI PC build by largest model size: 7B-13B models route to the ~$1,100 budget build, 14B-33B models to the ~$2,400 mid build, and 70B models to the ~$5,000 enthusiast build.',
        items: [
          '**1. What is the largest model you want to run?** 7B-13B: budget build. 14B-33B: mid build. 70B: enthusiast build.',
          '**2. What is your hard budget ceiling?** Around $1,100: budget build. Around $2,400: mid build. Around $5,000: enthusiast build.',
          '**3. New or used GPU?** A verified-working used GPU escapes most of the 2026 surge — choose used to lower any tier\'s total.',
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
          '**Major retailers carry every part in these builds; the used market is the value source for the GPU specifically.** The links below are plain product-search links; they carry no affiliate tags and earn no commission.',
        items: [
          '**Amazon and Newegg:** the widest stock of CPUs, RAM, SSDs, power supplies, and cases. New GPU stock is thinner and priced at the 2026 surge level.',
          '**Used GPU market:** the best value for the GPU line — a verified-working used RTX 4060 Ti, RTX 4070 Ti Super, or RTX 4090 escapes most of the surge.',
          '**Micro Center (US, in-store):** often the best new GPU and CPU pricing if a store is reachable; also useful for CPU-plus-motherboard bundles.',
          '**Buy the GPU first.** It is the largest, most volatile line — lock in the GPU at a price you accept, then buy the supporting parts around it.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Because of the 2026 GPU price surge, every total in this guide is a fast-moving July 2026 snapshot. Always open the current retailer listing for the GPU before building — its price has moved week to week and it dominates the build cost.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'Browse GPUs on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'Browse Ryzen CPUs on Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'Browse DDR5 RAM on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'Browse NVMe SSDs on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**Anchoring on GPU MSRP.** The 2026 surge means launch prices no longer reflect reality. Budget the GPU against the live retailer price and consider the used market.',
          '**Buying the 8 GB RTX 4060 Ti for the budget build.** It shares a name with the 16 GB version but cannot fit a 14B model. Confirm the 16 GB variant in the listing.',
          '**Overbuilding for 7B models.** If 7B models cover your use case, the enthusiast build wastes thousands of dollars and hundreds of watts. Match the tier to the model, not to the budget you happen to have.',
          '**Skipping case and cooling planning.** A 575 W GPU plus a 16-core CPU produces real heat. Confirm the case fits the GPU and cooler and has airflow before ordering parts.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: July 2026 GPU prices and the 1.5-2x surge over MSRP used for the build totals here.',
          '[Local LLM Workstation Build](/local-llms/local-llm-workstation-build) — PromptQuorum: dual-GPU 70B workstation parts list, cooling, and power-supply guidance behind the enthusiast tier.',
          '[NVIDIA GeForce RTX 40 and 50 Series Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Official VRAM capacity and power (TGP) figures for the RTX 4060 Ti, 4070 Ti Super, and 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live component pricing for AMD Ryzen CPUs, DDR5 RAM, NVMe SSDs, and power supplies as of July 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'How much does it cost to build a PC for local AI in 2026?',
            a: 'A budget local-AI PC costs roughly $1,100, a mid build roughly $2,400, and an enthusiast 70B build roughly $5,000. These are July 2026 snapshots — the 2026 memory-chip shortage pushed GPU prices 1.5-2x above MSRP, and since the GPU is the largest line in every build, it raised each total above what the same parts cost a year ago.',
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
            a: 'Buy the GPU used where you can, and other parts new. The 2026 surge pushed new GPU prices 1.5-2x above MSRP, but the used market escaped most of it — a verified-working used RTX 4060 Ti, RTX 4070 Ti Super, or RTX 4090 lowers the build total significantly. CPUs, RAM, SSDs, and power supplies are best bought new.',
          },
          {
            q: 'Can a single-GPU build run a 70B model?',
            a: 'Yes, the enthusiast build can. An RTX 5090 32 GB is the only single consumer card that fits a 70B model at Q4, which needs roughly 39-42 GB of VRAM — so it runs 70B with aggressive quantization or partial offload to system RAM. The 128 GB of RAM in the enthusiast build gives that offload the room it needs.',
          },
          {
            q: 'Is the mid build worth the extra cost over the budget build?',
            a: 'Yes, if you run 14B-class models regularly. The budget and mid builds fit similar models, but the mid build\'s RTX 4070 Ti Super is far faster — 14B models feel instant rather than sluggish, and light 22B-33B work becomes usable. If your ceiling is firmly 7B-13B models, the budget build saves over $1,000 and is the better value.',
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
          '[Choose the GPU for your build with the full buying guide](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — eight GPUs across four budget tiers, with July 2026 prices and the surge math.',
          '[See the dual-GPU 70B workstation build for production use](/local-llms/local-llm-workstation-build) — the $4,000-6,000 multi-user tier beyond this guide\'s enthusiast build.',
          '[Compare building a PC against renting cloud GPUs](/power-local-llm/cloud-gpu-rental-guide-2026) — when renting beats owning hardware for occasional compute.',
          '[Work out the VRAM each model size needs before you build](/local-llms/how-much-vram-local-llm) — the complete VRAM-by-model-size method behind the tier choices here.',
          '[Consider a Mac as an alternative to a PC build](/power-local-llm/best-mac-for-local-ai-2026) — when unified-memory Apple Silicon beats a discrete-GPU PC for local AI.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: 'Lokale-KI-Workstation 2026 selbst bauen: 3 Budget-Stufen',
    seoTitle: 'Lokaler-KI-PC 2026: vom Budget-Build zur 70B-Workstation',
    intro:
      'Die meisten Bauanleitungen für lokale KI beginnen mit der CPU, doch GPU und VRAM entscheiden darüber, welche Modelle die Maschine ausführen kann — jede andere Komponente wird so gewählt, dass sie diese GPU unterstützt. Diese Anleitung liefert drei vollständige Teilelisten für einen Lokal-LLM-PC: einen Budget-Build für 7B- bis 13B-Modelle, einen Mittelklasse-Build für 14B- bis 33B-Modelle und einen Enthusiasten-Build für die Arbeit mit 70B-Modellen. Jede Stufe nennt exakte Komponenten, die erwartete Leistung und die Gesamtkosten. Ein Hinweis zum Preis: Die Speicherchip-Knappheit von 2026 hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben, was jeden Build hier teurer macht als dieselben Teile vor einem Jahr — behandeln Sie jede Zahl als Momentaufnahme vom Juli 2026 und nutzen Sie den Gebrauchtmarkt für GPUs, wo es geht.',
    metaDescription:
      'Lokale KI-Workstation bauen 2026: CPU, GPU, RAM und Speicher für LLM-Inferenz. Komplette Build-Anleitungen nach Budget, von Einsteiger bis RTX 5090.',
    twitterDescription:
      'Bauanleitung für einen Lokal-KI-PC: drei Budget-Stufen mit vollständigen Teilelisten für 7B- bis 70B-Modelle. Der GPU-Preisanstieg 2026 hat jeden Build verteuert — hier die Juli-2026-Summen.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**Der beste Lokal-KI-PC ist die Stufe, deren GPU-VRAM zu Ihrem Zielmodell passt. Ein Budget-Build für ca. 1.250 € führt 7B- bis 13B-Modelle aus, ein Mittelklasse-Build für ca. 2.500 € deckt 14B- bis 33B-Modelle ab, und ein Enthusiasten-Build für ca. 5.200 € bewältigt 70B-Modelle — wobei die GPU-Preise 2026 jede Summe gegenüber dem Vorjahr anheben.**',
    quickAnswerTop: {
      de: {
        question: 'Wie baue ich 2026 einen PC für den Betrieb lokaler LLMs?',
        answer:
          'Wählen Sie Ihre Stufe nach dem größten Modell, das Sie ausführen möchten, und bauen Sie dann um die GPU herum. Ein Budget-Build (ca. 1.250 €) kombiniert eine RTX 4060 Ti 16 GB mit einer Ryzen-7-CPU für 7B- bis 13B-Modelle. Ein Mittelklasse-Build (ca. 2.500 €) nutzt eine RTX 4070 Ti Super 16 GB für 14B- bis 33B-Modelle. Ein Enthusiasten-Build (ca. 5.200 €) setzt eine RTX 5090 32 GB für 70B-Arbeit ein. Die Speicherknappheit 2026 hat die GPU-Preise weit über die UVP getrieben, daher ist jede Summe eine Momentaufnahme vom Juli 2026.',
        bullets: [
          'Budget-Build ca. 1.250 €: RTX 4060 Ti 16 GB, führt 7B- bis 13B-Modelle aus',
          'Mittelklasse-Build ca. 2.500 €: RTX 4070 Ti Super 16 GB, führt 14B- bis 33B-Modelle aus',
          'Enthusiasten-Build ca. 5.200 €: RTX 5090 32 GB, führt 70B-Modelle bei Q4 aus',
          'GPU-Preise 2026 liegen beim 1,5- bis 2-Fachen der UVP — kaufen Sie GPUs gebraucht, wo es geht',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Empfehlung der Redaktion', anchor: '#editors-choice' },
      { label: 'Vergleich der Build-Stufen', anchor: '#comparison-table' },
      { label: 'Welchen Build sollten Sie wählen?', anchor: '#which-build' },
      { label: 'Budget-Build (ca. 1.250 €)', anchor: '#budget-build' },
      { label: 'Mittelklasse-Build (ca. 2.500 €)', anchor: '#mid-build' },
      { label: 'Enthusiasten-Build (ca. 5.200 €)', anchor: '#enthusiast-build' },
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
          '**Die GPU-Preise 2026 haben jeden Build verteuert.** Eine Speicherchip-Knappheit hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben. Die Build-Summen hier sind Momentaufnahmen vom Juli 2026 und liegen höher als dieselben Teile vor einem Jahr — nutzen Sie den Gebrauchtmarkt für GPUs.',
          '**Budget-Build (ca. 1.250 €):** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650-W-Netzteil — führt 7B- bis 13B-Modelle in brauchbarer Geschwindigkeit aus. Die günstigste vollständige Maschine für lokale KI.',
          '**Mittelklasse-Build (ca. 2.500 €):** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850-W-Netzteil — führt 14B- bis 33B-Modelle aus und lässt 7B- bis 14B-Modelle sofort reagieren.',
          '**Enthusiasten-Build (ca. 5.200 €):** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000-W-Netzteil — der einzige Single-GPU-Build, in den ein 70B-Modell bei Q4 passt.',
          '**RAM ist kein Ersatz für VRAM.** Arbeitsspeicher lässt ein Modell aus dem VRAM auslagern, doch ein aus dem RAM laufendes Modell ist für die interaktive Nutzung zu langsam. Kaufen Sie genug VRAM für das Modell; kaufen Sie RAM für Betriebssystem und Werkzeuge.',
          '**Das Netzteil skaliert mit der GPU.** Ein Budget-Build benötigt 650 W, der Mittelklasse-Build 850 W und der Enthusiasten-Build 1000 W, weil allein die RTX 5090 575 W zieht. Planen Sie das Netzteil zusammen mit der Karte ein.',
          '**Gebrauchte GPUs sind 2026 die Preis-Leistungs-Wahl.** Eine gebrauchte RTX 4090 oder RTX 4060 Ti entgeht dem größten Teil des Preisanstiegs — kaufen Sie eine geprüft funktionierende Gebrauchtkarte, um die Build-Summe niedrig zu halten.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Budget-Build (ca. 1.250 €):** GPU RTX 4060 Ti 16 GB — führt 7B- und die meisten 13B-Modelle aus.',
          '**Mittelklasse-Build (ca. 2.500 €):** GPU RTX 4070 Ti Super 16 GB — führt 14B bequem aus, leichte 22B- bis 33B-Arbeit möglich.',
          '**Enthusiasten-Build (ca. 5.200 €):** GPU RTX 5090 32 GB — führt 33B bequem und 70B bei Q4 aus.',
          '**VRAM-Faustregel bei Q4_K_M:** etwa 0,6 GB pro Milliarde Parameter, plus 2 bis 4 GB für Kontext und Werkzeuge.',
          '**RAM-Empfehlung:** 32 GB für den Budget-Build, 64 GB für den Mittelklasse-Build, 128 GB für den Enthusiasten-Build.',
          '**Netzteil je Stufe:** 650 W Budget, 850 W Mittelklasse, 1000 W Enthusiast — die RTX 5090 zieht allein 575 W.',
          '**Preisrealität 2026:** GPU-Preise liegen wegen einer Speicherknappheit beim 1,5- bis 2-Fachen der UVP — prüfen Sie Live-Preise und ziehen Sie Gebrauchtkarten in Betracht.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Empfehlung der Redaktion: der Mittelklasse-Build (ca. 2.500 €)',
        sponsoredSlot: true,
        content:
          '**Für die meisten Käufer, die einen PC für lokale KI bauen, ist der Mittelklasse-Build die Stufe, die Leistungsfähigkeit, Kosten und Reserven ausbalanciert.** Aufgebaut um eine RTX 4070 Ti Super 16 GB, führt er jedes 14B-Modell mit Kontextspielraum aus, bewältigt leichte 22B- bis 33B-Arbeit und lässt 7B- bis 14B-Modelle sofort reagieren — für rund 2.500 € komplett. Es ist der Build, der Sie nicht binnen Monaten frustriert und nicht binnen eines Jahres ersetzt werden muss. Greifen Sie nur dann zum Budget-Build, wenn Ihre Obergrenze fest bei 7B- bis 13B-Modellen liegt; steigen Sie nur dann zum Enthusiasten-Build auf, wenn Sie gezielt 70B-Arbeit benötigen. Der Mittelklasse-Build ist die sichere Standardwahl für eine Maschine, die Sie behalten möchten.',
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
            priceRange: '1150-1200',
            label: 'RTX 4070 Ti Super-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'RTX 4070 Ti Super-Preis bei Newegg prüfen',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie die drei Build-Stufen 2026 abschneiden',
        content:
          'GPU-VRAM- und Leistungsangaben sind Herstellerspezifikationen. Inferenzgeschwindigkeiten sind Schätzungen auf Modellfamilien-Ebene aus PromptQuorum-GPU-Tests für die GPU der jeweiligen Stufe. Die Build-Summen sind US-Momentaufnahmen vom Juli 2026 — der GPU-Preisanstieg 2026 hat die Karten auf das 1,5- bis 2-Fache der UVP getrieben, sodass die GPU-Zeile jede Summe dominiert und sich von Woche zu Woche bewegt. Der Gebrauchtkauf der GPU senkt jede Summe.',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: 'Vergleich der Local-AI-PC-Build-Stufen 2026: RTX 4060 Ti 16 GB Budget-Build (~1.100 $) für 7B-13B-Modelle, RTX 4070 Ti Super 16 GB Mittelklasse-Build (~2.400 $) für 14B-33B-Modelle, RTX 5090 32 GB Enthusiasten-Build (~5.000 $) für 33B-70B-Modelle.',
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
        columns: ['Build-Stufe', 'GPU', 'VRAM', 'Führt aus', 'Netzteil', 'Gesamt (Juli 2026)'],
        rows: [
          {
            'Build-Stufe': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Führt aus': '7B- bis 13B-Modelle',
            'Netzteil': '650 W',
            'Gesamt (Juli 2026)': 'ca. 1.250 €',
          },
          {
            'Build-Stufe': 'Mittelklasse',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Führt aus': '14B bequem, leichte 22B-33B',
            'Netzteil': '850 W',
            'Gesamt (Juli 2026)': 'ca. 2.500 €',
          },
          {
            'Build-Stufe': 'Enthusiast',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Führt aus': '33B bequem, 70B bei Q4',
            'Netzteil': '1000 W',
            'Gesamt (Juli 2026)': 'ca. 5.200 €',
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
          { 'Ihre Situation': 'Ich führe 7B- bis 13B-Modelle aus und will die günstigste vollständige Maschine', 'Dieser Build': 'Budget-Build (ca. 1.250 €)' },
          { 'Ihre Situation': 'Ich will einen ersten Lokal-KI-PC und bin unsicher, wie weit ich gehen werde', 'Dieser Build': 'Budget-Build, oder Mittelklasse-Build für Reserven' },
          { 'Ihre Situation': 'Ich führe ständig 14B-Modelle aus und will sie sofort verfügbar haben', 'Dieser Build': 'Mittelklasse-Build (ca. 2.500 €)' },
          { 'Ihre Situation': 'Ich mache leichte 22B- bis 33B-Arbeit und will eine Maschine, die hält', 'Dieser Build': 'Mittelklasse-Build (ca. 2.500 €)' },
          { 'Ihre Situation': 'Ich führe 33B-Modelle intensiv aus oder will starke Zukunftsreserven', 'Dieser Build': 'Enthusiasten-Build (ca. 5.200 €)' },
          { 'Ihre Situation': 'Ich brauche eine Single-GPU-Maschine, die 70B-Modelle bei Q4 ausführt', 'Dieser Build': 'Enthusiasten-Build (ca. 5.200 €)' },
          { 'Ihre Situation': 'Ich will die Summe trotz des Preisanstiegs 2026 niedrig halten', 'Dieser Build': 'Jede Stufe — kaufen Sie die GPU gebraucht' },
          { 'Ihre Situation': 'Ich bin unschlüssig und will den sichersten Build für viele Jahre', 'Dieser Build': 'Mittelklasse-Build — die Redaktionsempfehlung' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Budget-Build (ca. 1.250 €): RTX 4060 Ti 16 GB',
        content:
          '**Der Budget-Build ist der günstigste vollständige Lokal-KI-PC und führt jedes 7B-Modell sowie die meisten 13B-Modelle aus — genug Leistungsfähigkeit für die meisten Erstnutzer.** Er ist um die RTX 4060 Ti 16 GB aufgebaut, die vom Preisanstieg 2026 am wenigsten betroffene GPU, was die Summe vertretbar hält.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB (ca. 530-600 €):** 16 GB VRAM, 165 W. Führt 7B-Modelle mit rund 20-25 Tok/s aus und nimmt 14B-Modelle mit Kontextreserve auf. Die 16-GB-Kapazität ist der Grund, sie der 8-GB-Version vorzuziehen.',
          '**CPU — AMD Ryzen 7 7700 (ca. 210-240 €):** 8 Kerne, geringe Leistungsaufnahme. Die CPU leistet während der GPU-Inferenz wenig, daher ist ein Mittelklasse-Chip hier richtig — geben Sie in dieser Stufe nicht zu viel für die CPU aus.',
          '**Mainboard — B650-Chipsatz (ca. 130-170 €):** unterstützt die Ryzen 7 und eine einzelne Vollformat-GPU auf PCIe. Eine hochwertige Spannungsversorgung ist auf dieser Stufe nicht nötig.',
          '**RAM — 32 GB DDR5 (ca. 250-320 €):** genug für Betriebssystem, Werkzeuge und ein im VRAM laufendes 7B- bis 13B-Modell. RAM ist kein VRAM-Ersatz — 32 GB reichen hier. Die Speicherknappheit 2026 hat DDR5 spürbar verteuert.',
          '**Speicher — 1 TB NVMe-SSD (ca. 130-180 €):** fasst das Betriebssystem und mehrere Modelle (ein 7B-Q4-Modell ist rund 4-5 GB groß).',
          '**Netzteil — 650 W 80+ Gold (ca. 80-110 €):** komfortabler Spielraum für eine 165-W-GPU und eine 8-Kern-CPU.',
          '**Gehäuse und Kühlung — Midi-Tower mit einem Tower-Luftkühler (ca. 80-120 €):** die Budget-Stufe erzeugt wenig Hitze; Luftkühlung genügt.',
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
            priceRange: '420-450',
            label: 'RTX 4060 Ti 16GB-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'Ryzen 7 7700-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: '32-GB-DDR5-RAM-Preis bei Amazon prüfen',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Mittelklasse-Build (ca. 2.500 €): RTX 4070 Ti Super 16 GB',
        content:
          '**Der Mittelklasse-Build ist die Empfehlung der Redaktion — er führt 14B-Modelle sofort aus, bewältigt leichte 22B- bis 33B-Arbeit und ist die Stufe, die Sie zum Behalten bauen.** Er ist um die RTX 4070 Ti Super 16 GB aufgebaut, schnell genug, dass die Antwortlatenz bei Modellen der 14B-Klasse nicht mehr spürbar ist.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB (ca. 1.300-1.400 €):** 16 GB VRAM, 285 W. Dieselbe Modellkapazität wie die Budget-Stufe, aber deutlich schneller — 7B- bis 14B-Modelle reagieren sofort, und leichte 22B- bis 33B-Arbeit ist brauchbar.',
          '**CPU — AMD Ryzen 9 7900X (ca. 280-330 €):** 12 Kerne. Mehr Reserven als die Budget-CPU für Datenaufbereitung und das Ausführen von Werkzeugen neben der Inferenz.',
          '**Mainboard — B650- oder X670-Chipsatz (ca. 180-260 €):** solide Spannungsversorgung für die 12-Kern-CPU und eine 285-W-GPU.',
          '**RAM — 64 GB DDR5 (ca. 480-620 €):** Platz für Betriebssystem, größere Kontextfenster und Werkzeuge wie eine RAG-Pipeline, die neben dem Modell läuft. Die Speicherknappheit 2026 hat DDR5 stark verteuert.',
          '**Speicher — 2 TB NVMe-SSD (ca. 220-300 €):** fasst eine ansehnliche Modellbibliothek — ein 33B-Q4-Modell ist rund 18-20 GB groß.',
          '**Netzteil — 850 W 80+ Gold (ca. 120-160 €):** komfortabler Spielraum für die 285-W-GPU und die 12-Kern-CPU unter Dauerlast.',
          '**Gehäuse und Kühlung — Midi-Tower mit einer 240-280-mm-AIO oder hochwertigem Luftkühler (ca. 150-220 €):** die Mittelklasse-Stufe erzeugt moderate Hitze; ein hochwertiger Kühler hält die CPU bei langen Inferenzläufen stabil.',
          '**Warum diese Stufe bauen:** Sie führen ständig 14B-Modelle aus und wollen sie sofort verfügbar haben, oder Sie machen leichte 22B- bis 33B-Arbeit und wollen Reserven. **Warum darauf verzichten:** wenn 7B bis 13B reichen, spart der Budget-Build über 1.000 €; wenn Sie 70B brauchen, passt keine 16-GB-GPU dafür — gehen Sie zum Enthusiasten-Build.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der Mittelklasse-Build nimmt dieselben Modelle auf wie der Budget-Build — Sie bezahlen für Geschwindigkeit, nicht für Kapazität. Bauen Sie diese Stufe, wenn 14B-Modelle ein tägliches Arbeitspensum sein werden und das Warten darauf Sie stören würde.',
          },
          {
            type: 'note',
            text: 'Eine gebrauchte RTX 4090 24 GB wird nach dem Preisanstieg 2026 manchmal nahe am Preis einer neuen RTX 4070 Ti Super verkauft. Finden Sie eine geprüft funktionierende, bringt sie 8 GB zusätzliches VRAM und erreicht 33B-Modelle — vor dem Kauf der 4070 Ti Super prüfenswert.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'RTX 4070 Ti Super-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'Ryzen 9 7900X-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: '64-GB-DDR5-RAM-Preis bei Amazon prüfen',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Enthusiasten-Build (ca. 5.200 €): RTX 5090 32 GB',
        content:
          '**Der Enthusiasten-Build ist die einzige Single-GPU-Maschine, in die ein 70B-Modell bei Q4 passt — die RTX 5090 32 GB ist das Schlüsselbauteil.** Bauen Sie diese Stufe für VRAM-Kapazität, nicht für rohe Geschwindigkeit; die Geschwindigkeit ist ein Nebeneffekt. Der Preisanstieg 2026 traf diese Stufe am härtesten, daher dominiert die GPU-Zeile und bewegt sich von Woche zu Woche.',
        items: [
          '**GPU — RTX 5090 32 GB (ca. 3.500-3.900 €):** 32 GB GDDR7-VRAM, 575 W. Die einzige einzelne Consumer-Karte, die ein 70B-Modell bei Q4 ohne Dual-GPU-Build ausführt. Sie führt 33B-Modelle bequem und mit Reserve aus.',
          '**CPU — AMD Ryzen 9 7950X (ca. 340-400 €):** 16 Kerne. Genug, um Datenaufbereitung, Fine-Tuning-Experimente und Werkzeuge neben intensiver Inferenz auszuführen.',
          '**Mainboard — X670E-Chipsatz (ca. 280-380 €):** starke Spannungsversorgung und PCIe 5.0, ausgelegt für eine 575-W-GPU und die 16-Kern-CPU.',
          '**RAM — 128 GB DDR5 (ca. 950-1.200 €):** Platz für große Kontextfenster, mehrere gleichzeitig geladene Modelle und Werkzeuge — sowie die Reserve, ein Modell bei Bedarf teilweise ins RAM auszulagern. Die Speicherknappheit 2026 hat DDR5 stark verteuert.',
          '**Speicher — 4 TB NVMe-SSD (ca. 450-600 €):** ein 70B-Q4-Modell ist rund 40 GB groß; ein 4-TB-Laufwerk fasst eine große Bibliothek großer Modelle.',
          '**Netzteil — 1000 W 80+ Platinum (ca. 180-240 €):** erforderlich, weil die RTX 5090 allein 575 W zieht — ein 750-W-Gerät würde unter Last einbrechen. Dimensionieren Sie dieses Teil nicht zu klein.',
          '**Gehäuse und Kühlung — Big-Tower mit einer 360-mm-AIO (ca. 280-380 €):** die 575-W-GPU und die 16-Kern-CPU erzeugen echte Hitze; eine 360-mm-Wasserkühlung hält die CPU bei anhaltender 70B-Inferenz stabil.',
          '**Warum diese Stufe bauen:** Sie brauchen 33B- oder 70B-Modelle, führen intensive Batch-Inferenz aus oder wollen eine Maschine, die jahrelang nicht ersetzt werden muss. **Warum darauf verzichten:** für 7B- bis 14B-Modelle ist sie überdimensioniert — der Mittelklasse-Build liefert auf diesen Größen sofortige Antworten zu weniger als der Hälfte der Kosten.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Die RTX 5090 zieht allein 575 W. Kombinieren Sie sie mit dem 1000-W-Netzteil aus dieser Teileliste — ein kleineres Gerät bricht unter Last ein. Prüfen Sie vor dem Bau, ob Ihr Stromkreis die volle Leistungsaufnahme liefern kann.',
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
            priceRange: '3650-3900',
            label: 'RTX 5090-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'Ryzen 9 7950X-Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: '1000-W-Netzteilpreis bei Amazon prüfen',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Wie der Preisanstieg 2026 die Build-Rechnung verändert',
        content:
          '**Die Speicherchip-Knappheit von 2026 hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben, und da die GPU die größte Position in jedem Build ist, hat sie jede Summe gegenüber dem Vorjahr angehoben.** Planen Sie den Build um aktuelle Preise, nicht um Launch-Preise.',
        items: [
          '**Die GPU dominiert die Summe.** In allen drei Stufen ist die GPU die einzelne größte Kostenposition — der Preisanstieg verändert die Build-Summe stärker als jedes andere Teil.',
          '**Die Ursache ist Speicher, nicht GPUs.** Eine Knappheit bei GDDR- und HBM-Speicher hat die Kosten jeder Karte mit schnellem Speicher erhöht; je höher das VRAM, desto härter wurde die Karte getroffen. Die RTX 5090 stieg von einem Launch-Preis von rund 2.300 € auf ca. 3.500-3.900 €.',
          '**Schwächere GPUs hielten sich besser.** Die RTX 4060 Ti 16 GB liegt nahe ihrer UVP, weshalb sich die Summe des Budget-Builds am wenigsten bewegte.',
          '**Gebrauchte GPUs sind die Preis-Leistungs-Wahl.** Eine gebrauchte RTX 4060 Ti oder RTX 4090 entgeht dem größten Teil des Preisanstiegs — der Kauf einer geprüft funktionierenden Gebrauchtkarte ist der einfachste Weg, die Build-Summe zu senken.',
          '**Nicht-GPU-Teile bewegten sich weniger.** CPU-, Mainboard- und Netzteilpreise stiegen moderat; DDR5-RAM und NVMe-SSDs verteuerten sich mit der Speicherknappheit ebenfalls deutlich, doch die GPU bleibt die Position, die im Blick zu behalten ist.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Die Speicherknappheit 2026 hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben und damit jede Lokal-KI-Build-Summe angehoben, weil die GPU die größte Einzelposition der Teileliste ist.',
          },
          {
            type: 'plain-terms',
            text: 'Die GPU ist das teuerste Teil der Maschine, und 2026 ist die GPU das Teil, das teuer geworden ist. Bis sich die Speicherknappheit entspannt, behandeln Sie Launch-Preise als Vergangenheit, kaufen Sie die GPU gebraucht, wo es geht, und kaufen Sie nicht mehr VRAM, als Ihr Modell braucht.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Entscheidungsdiagramm: Wählen Sie Ihren Build in vier Fragen',
        content:
          '**Vier Fragen, der Reihe nach, leiten die meisten Bauenden zu einer Stufe.**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: 'Entscheidungsbaum für den Local-AI-PC-Build nach Modellgröße: 7B-13B-Modelle führen zum Budget-Build (~1.100 $), 14B-33B-Modelle zum Mittelklasse-Build (~2.400 $), 70B-Modelle zum Enthusiasten-Build (~5.000 $).',
        items: [
          '**1. Was ist das größte Modell, das Sie ausführen möchten?** 7B-13B: Budget-Build. 14B-33B: Mittelklasse-Build. 70B: Enthusiasten-Build.',
          '**2. Was ist Ihre harte Budget-Obergrenze?** Rund 1.250 €: Budget-Build. Rund 2.500 €: Mittelklasse-Build. Rund 5.200 €: Enthusiasten-Build.',
          '**3. Neue oder gebrauchte GPU?** Eine geprüft funktionierende Gebraucht-GPU entgeht dem größten Teil des Preisanstiegs 2026 — wählen Sie gebraucht, um die Summe jeder Stufe zu senken.',
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
          '**Große Händler führen jedes Teil dieser Builds; der Gebrauchtmarkt ist die Preis-Leistungs-Quelle gezielt für die GPU.** Die untenstehenden Links sind reine Produktsuch-Links; sie tragen keine Affiliate-Kennungen und bringen keine Provision ein.',
        items: [
          '**Amazon und Newegg:** das breiteste Angebot an CPUs, RAM, SSDs, Netzteilen und Gehäusen. Der Lagerbestand neuer GPUs ist dünner und auf dem Niveau des Preisanstiegs 2026 bepreist.',
          '**Gebrauchtmarkt für GPUs:** das beste Preis-Leistungs-Verhältnis für die GPU-Position — eine geprüft funktionierende gebrauchte RTX 4060 Ti, RTX 4070 Ti Super oder RTX 4090 entgeht dem größten Teil des Preisanstiegs.',
          '**Mindfactory und Alternate (DE):** zuverlässige Quellen für CPUs, Mainboards und Netzteile sowie häufig für CPU-plus-Mainboard-Bundles, die teure DDR5-Aufpreise umgehen.',
          '**Kaufen Sie die GPU zuerst.** Sie ist die größte, schwankungsanfälligste Position — sichern Sie die GPU zu einem Preis, den Sie akzeptieren, und kaufen Sie dann die unterstützenden Teile darum herum.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wegen des GPU-Preisanstiegs 2026 ist jede Summe in dieser Anleitung eine schnelllebige Momentaufnahme vom Juli 2026. Öffnen Sie vor dem Bau stets das aktuelle Händlerangebot für die GPU — ihr Preis hat sich von Woche zu Woche bewegt und dominiert die Build-Kosten.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'GPUs bei Amazon durchsuchen',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'Ryzen-CPUs bei Newegg durchsuchen',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'DDR5-RAM bei Amazon durchsuchen',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'NVMe-SSDs bei Amazon durchsuchen',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**Sich an der GPU-UVP orientieren.** Der Preisanstieg 2026 bedeutet, dass Launch-Preise die Realität nicht mehr abbilden. Kalkulieren Sie die GPU gegen den Live-Händlerpreis und ziehen Sie den Gebrauchtmarkt in Betracht.',
          '**Die 8-GB-RTX 4060 Ti für den Budget-Build kaufen.** Sie teilt einen Namen mit der 16-GB-Version, kann aber kein 14B-Modell aufnehmen. Bestätigen Sie die 16-GB-Variante im Angebot.',
          '**Für 7B-Modelle überdimensionieren.** Wenn 7B-Modelle Ihren Anwendungsfall abdecken, verschwendet der Enthusiasten-Build Tausende Euro und Hunderte Watt. Passen Sie die Stufe an das Modell an, nicht an das Budget, das Sie zufällig haben.',
          '**Gehäuse- und Kühlungsplanung überspringen.** Eine 575-W-GPU plus eine 16-Kern-CPU erzeugt echte Hitze. Bestätigen Sie, dass das Gehäuse GPU und Kühler aufnimmt und über Luftstrom verfügt, bevor Sie Teile bestellen.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Bester GPU-Kaufratgeber für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: GPU-Preise vom Juli 2026 und der 1,5- bis 2-fache Anstieg über die UVP, der hier für die Build-Summen verwendet wird.',
          '[Lokale-LLM-Workstation bauen](/de/local-llms/local-llm-workstation-build) — PromptQuorum: Teileliste, Kühlung und Netzteilhinweise für eine Dual-GPU-70B-Workstation hinter der Enthusiasten-Stufe.',
          '[NVIDIA GeForce RTX 40- und 50-Serie Spezifikationen](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Offizielle VRAM-Kapazitäts- und Leistungswerte (TGP) für RTX 4060 Ti, 4070 Ti Super und 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live-Komponentenpreise für AMD-Ryzen-CPUs, DDR5-RAM, NVMe-SSDs und Netzteile mit Stand Juli 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was kostet es 2026, einen PC für lokale KI zu bauen?',
            a: 'Ein Budget-Lokal-KI-PC kostet rund 1.250 €, ein Mittelklasse-Build rund 2.500 € und ein Enthusiasten-70B-Build rund 5.200 €. Das sind Momentaufnahmen vom Juli 2026 — die Speicherchip-Knappheit 2026 hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben, und da die GPU die größte Position in jedem Build ist, hat sie jede Summe gegenüber demselben Teilesatz vor einem Jahr angehoben.',
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
            a: 'Kaufen Sie die GPU gebraucht, wo es geht, und andere Teile neu. Der Preisanstieg 2026 hat die Preise neuer GPUs auf das 1,5- bis 2-Fache der UVP getrieben, doch der Gebrauchtmarkt entging dem größten Teil davon — eine geprüft funktionierende gebrauchte RTX 4060 Ti, RTX 4070 Ti Super oder RTX 4090 senkt die Build-Summe erheblich. CPUs, RAM, SSDs und Netzteile kauft man am besten neu.',
          },
          {
            q: 'Kann ein Single-GPU-Build ein 70B-Modell ausführen?',
            a: 'Ja, der Enthusiasten-Build kann es. Eine RTX 5090 32 GB ist die einzige einzelne Consumer-Karte, in die ein 70B-Modell bei Q4 passt, das rund 39-42 GB VRAM benötigt — sie führt 70B also mit aggressiver Quantisierung oder teilweiser Auslagerung ins System-RAM aus. Die 128 GB RAM im Enthusiasten-Build geben dieser Auslagerung den nötigen Spielraum.',
          },
          {
            q: 'Lohnt sich der Mittelklasse-Build gegenüber dem Budget-Build?',
            a: 'Ja, wenn Sie Modelle der 14B-Klasse regelmäßig ausführen. Der Budget- und der Mittelklasse-Build nehmen ähnliche Modelle auf, doch die RTX 4070 Ti Super des Mittelklasse-Builds ist deutlich schneller — 14B-Modelle reagieren sofort statt träge, und leichte 22B- bis 33B-Arbeit wird brauchbar. Wenn Ihre Obergrenze fest bei 7B- bis 13B-Modellen liegt, spart der Budget-Build über 1.000 € und ist das bessere Preis-Leistungs-Verhältnis.',
          },
          {
            q: 'Brauche ich eine Threadripper-CPU für einen Lokal-KI-PC?',
            a: 'Nein. Eine Consumer-Ryzen-CPU reicht für alle drei Builds dieser Anleitung — eine Ryzen 7 für die Budget-Stufe, eine Ryzen 9 für die Mittelklasse- und die Enthusiasten-Stufe. Eine Threadripper lohnt ihre Kosten nur für eine Dual-GPU-Maschine, die Fine-Tuning und Inferenz gleichzeitig ausführt, was über einen Single-GPU-Build hinausgeht.',
          },
          {
            q: 'Bleiben meine Daten bei einer Lokal-KI-Workstation DSGVO-konform?',
            a: 'Ja, und das ist einer der stärksten Gründe, lokal zu bauen. Eine Lokal-KI-Workstation führt die Modellinferenz vollständig auf dem Gerät aus — Prompts, Dokumente und Antworten verlassen die Maschine nie und werden nicht an einen Cloud-Anbieter übertragen. Damit entfallen die Auftragsverarbeitung nach Art. 28 DSGVO und die Risiken einer Drittlandübermittlung, die bei Cloud-KI-Diensten anfallen. Sie behalten die volle Kontrolle über personenbezogene Daten, was die Verarbeitung sensibler oder vertraulicher Inhalte deutlich vereinfacht. Für die DSGVO-Konformität bleiben dennoch organisatorische Maßnahmen wie Zugriffskontrolle und Datenträgerverschlüsselung der Workstation erforderlich.',
          },
          {
            q: 'Eignet sich eine Lokal-KI-Workstation für den deutschen Mittelstand?',
            a: 'Ja. Für viele Mittelständler ist eine Lokal-KI-Workstation eine kalkulierbare Einmalinvestition statt laufender, nutzungsabhängiger Cloud-Kosten, und sie hält sensible Geschäftsdaten im eigenen Haus. Der Mittelklasse-Build (ca. 2.500 €) deckt die meisten betrieblichen Aufgaben ab — Dokumentenzusammenfassung, Coding-Hilfe und interne RAG-Pipelines mit 14B- bis 33B-Modellen — ohne Vertrag mit einem Cloud-Anbieter. Da die Inferenz vor Ort läuft, entfällt die Sorge um Datenabfluss an Dritte, was die Einführung in regulierten Branchen wie Fertigung, Recht oder Gesundheitswesen erleichtert. Für den Einstieg oder einzelne Arbeitsplätze genügt der Budget-Build (ca. 1.250 €); den Enthusiasten-Build wählt man nur, wenn 70B-Modelle gebraucht werden.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Wählen Sie die GPU für Ihren Build mit dem vollständigen Kaufratgeber](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — acht GPUs über vier Budget-Stufen, mit Preisen vom Juli 2026 und der Rechnung zum Preisanstieg.',
          '[Sehen Sie den Dual-GPU-70B-Workstation-Build für den Produktiveinsatz](/de/local-llms/local-llm-workstation-build) — die 4.000-6.000-€-Mehrnutzer-Stufe jenseits des Enthusiasten-Builds dieser Anleitung.',
          '[Vergleichen Sie den PC-Bau mit der Miete von Cloud-GPUs](/de/power-local-llm/cloud-gpu-rental-guide-2026) — wann Mieten den Hardwarekauf für gelegentliche Rechenlast schlägt.',
          '[Ermitteln Sie das VRAM jeder Modellgröße vor dem Bau](/de/local-llms/how-much-vram-local-llm) — die vollständige VRAM-nach-Modellgröße-Methode hinter den Stufenwahlen hier.',
          '[Ziehen Sie einen Mac als Alternative zu einem PC-Build in Betracht](/de/power-local-llm/best-mac-for-local-ai-2026) — wann Apple Silicon mit vereinheitlichtem Speicher einen PC mit dedizierter GPU für lokale KI schlägt.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: 'Monter une station IA locale en 2026 : 3 niveaux de budget',
    seoTitle: 'PC pour IA locale 2026 : du budget à la station 70B',
    intro:
      'La plupart des guides de montage pour IA locale commencent par le processeur, mais ce sont le GPU et sa VRAM qui déterminent les modèles que la machine peut exécuter — chaque autre pièce est choisie pour soutenir ce GPU. Ce guide fournit trois listes de pièces complètes pour un PC dédié aux LLM locaux : une configuration budget pour les modèles 7B-13B, une configuration intermédiaire pour les modèles 14B-33B et une configuration enthousiaste pour le travail sur des modèles 70B. Chaque niveau précise les composants exacts, les performances attendues et un coût total. Une réserve sur les prix : la pénurie de puces mémoire de 2026 a poussé les prix des GPU à 1,5-2 fois au-dessus du tarif conseillé, ce qui renchérit chaque configuration ici par rapport aux mêmes pièces il y a un an — considérez chaque chiffre comme un instantané de juillet 2026 et appuyez-vous sur le marché de l\'occasion pour les GPU lorsque c\'est possible.',
    metaDescription:
      'Construire une station IA locale 2026 : CPU, GPU, RAM et stockage pour l\'inférence LLM. Guides de build complets par budget, du débutant à la RTX 5090.',
    twitterDescription:
      'Guide de montage d\'un PC pour IA locale : trois niveaux de budget avec listes de pièces complètes pour les modèles 7B à 70B. La hausse des prix des GPU en 2026 a renchéri chaque configuration — voici les totaux de juillet 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**La meilleure configuration PC pour l\'IA locale est le niveau dont la VRAM du GPU correspond au modèle visé. Une configuration budget à env. 1 250 € exécute les modèles 7B-13B, une configuration intermédiaire à env. 2 550 € couvre les modèles 14B-33B et une configuration enthousiaste à env. 5 300 € prend en charge les modèles 70B — les prix des GPU en 2026 relevant chaque total par rapport à l\'an dernier.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment monter un PC pour exécuter des LLM locaux en 2026 ?',
        answer:
          'Choisissez votre niveau selon le plus grand modèle que vous voulez exécuter, puis montez autour du GPU. Une configuration budget (env. 1 250 €) associe une RTX 4060 Ti 16 GB à un processeur Ryzen 7 pour les modèles 7B-13B. Une configuration intermédiaire (env. 2 550 €) utilise une RTX 4070 Ti Super 16 GB pour les modèles 14B-33B. Une configuration enthousiaste (env. 5 300 €) emploie une RTX 5090 32 GB pour le travail 70B. La pénurie de mémoire de 2026 a poussé les prix des GPU bien au-dessus du tarif conseillé, donc chaque total est un instantané de juillet 2026.',
        bullets: [
          'Configuration budget env. 1 250 € : RTX 4060 Ti 16 GB, exécute les modèles 7B-13B',
          'Configuration intermédiaire env. 2 550 € : RTX 4070 Ti Super 16 GB, exécute les modèles 14B-33B',
          'Configuration enthousiaste env. 5 300 € : RTX 5090 32 GB, exécute les modèles 70B en Q4',
          'Les prix des GPU en 2026 sont à 1,5-2 fois le tarif conseillé — achetez les GPU d\'occasion lorsque c\'est possible',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Choix de la rédaction', anchor: '#editors-choice' },
      { label: 'Comparaison des niveaux', anchor: '#comparison-table' },
      { label: 'Quelle configuration choisir ?', anchor: '#which-build' },
      { label: 'Configuration budget (env. 1 250 €)', anchor: '#budget-build' },
      { label: 'Configuration intermédiaire (env. 2 550 €)', anchor: '#mid-build' },
      { label: 'Configuration enthousiaste (env. 5 300 €)', anchor: '#enthusiast-build' },
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
          '**Les prix des GPU en 2026 ont renchéri chaque configuration.** Une pénurie de puces mémoire a poussé les prix des GPU à 1,5-2 fois au-dessus du tarif conseillé. Les totaux ici sont des instantanés de juillet 2026 et dépassent ce que coûtaient les mêmes pièces il y a un an — appuyez-vous sur le marché de l\'occasion pour les GPU.',
          '**Configuration budget (env. 1 250 €) :** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD 1 To, alimentation 650 W — exécute les modèles 7B-13B à vitesse utilisable. La machine complète la moins chère pour l\'IA locale.',
          '**Configuration intermédiaire (env. 2 550 €) :** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD 2 To, alimentation 850 W — exécute les modèles 14B-33B et rend les modèles 7B-14B instantanés.',
          '**Configuration enthousiaste (env. 5 300 €) :** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD 4 To, alimentation 1000 W — la seule configuration mono-GPU dans laquelle un modèle 70B tient en Q4.',
          '**La RAM ne remplace pas la VRAM.** La mémoire système permet à un modèle de déborder de la VRAM, mais un modèle exécuté depuis la RAM est trop lent pour un usage interactif. Achetez assez de VRAM pour le modèle ; achetez de la RAM pour le système d\'exploitation et l\'outillage.',
          '**L\'alimentation évolue avec le GPU.** Une configuration budget exige 650 W, l\'intermédiaire 850 W et l\'enthousiaste 1000 W, car la seule RTX 5090 consomme 575 W. Budgétez l\'alimentation en même temps que la carte.',
          '**Les GPU d\'occasion sont le bon plan en 2026.** Une RTX 4090 ou une RTX 4060 Ti d\'occasion échappe à l\'essentiel de la hausse — achetez une carte d\'occasion vérifiée pour contenir le total de la configuration.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Configuration budget (env. 1 250 €) :** GPU RTX 4060 Ti 16 GB — exécute les modèles 7B et la plupart des 13B.',
          '**Configuration intermédiaire (env. 2 550 €) :** GPU RTX 4070 Ti Super 16 GB — exécute aisément le 14B, travail léger en 22B-33B.',
          '**Configuration enthousiaste (env. 5 300 €) :** GPU RTX 5090 32 GB — exécute aisément le 33B et le 70B en Q4.',
          '**Règle empirique de VRAM en Q4_K_M :** environ 0,6 GB par milliard de paramètres, plus 2-4 GB pour le contexte et l\'outillage.',
          '**Recommandation de RAM système :** 32 GB pour la configuration budget, 64 GB pour l\'intermédiaire, 128 GB pour l\'enthousiaste.',
          '**Alimentation par niveau :** 650 W budget, 850 W intermédiaire, 1000 W enthousiaste — la RTX 5090 consomme 575 W à elle seule.',
          '**Réalité tarifaire de 2026 :** les prix des GPU sont à 1,5-2 fois le tarif conseillé sur fond de pénurie mémoire — vérifiez les prix en direct et envisagez les cartes d\'occasion.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Choix de la rédaction : la configuration intermédiaire (env. 2 550 €)',
        sponsoredSlot: true,
        content:
          '**Pour la plupart des acheteurs montant un PC pour l\'IA locale, la configuration intermédiaire est le niveau qui équilibre capacité, coût et marge.** Bâtie autour d\'une RTX 4070 Ti Super 16 GB, elle exécute chaque modèle 14B avec de la marge de contexte, gère le travail léger en 22B-33B et rend les modèles 7B-14B instantanés — pour environ 2 550 € au total. C\'est la configuration qui ne vous frustrera pas en quelques mois et ne nécessitera pas d\'être remplacée en un an. Ne descendez à la configuration budget que si votre plafond est fermement les modèles 7B-13B ; ne montez à la configuration enthousiaste que si vous avez spécifiquement besoin du travail 70B. La configuration intermédiaire est le choix par défaut sûr pour une machine que vous voulez garder.',
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
            priceRange: '1150-1200',
            label: 'Vérifier le prix de la RTX 4070 Ti Super sur Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Vérifier le prix de la RTX 4070 Ti Super sur Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comment se comparent les trois niveaux en 2026',
        content:
          'Les chiffres de VRAM et de puissance du GPU sont des spécifications constructeur. Les vitesses d\'inférence sont des estimations au niveau de la famille de modèles, issues des tests GPU de PromptQuorum pour le GPU du niveau concerné. Les totaux sont des instantanés américains de juillet 2026 — la hausse des prix des GPU en 2026 a poussé les cartes à 1,5-2 fois le tarif conseillé, si bien que la ligne GPU domine chaque total et bouge d\'une semaine à l\'autre. Acheter le GPU d\'occasion abaisse chaque total.',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: 'Comparatif des configurations PC IA locale 2026 : configuration économique RTX 4060 Ti 16 Go (~1 100 $) pour modèles 7B-13B, configuration intermédiaire RTX 4070 Ti Super 16 Go (~2 400 $) pour modèles 14B-33B, configuration enthousiaste RTX 5090 32 Go (~5 000 $) pour modèles 33B-70B.',
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
        columns: ['Niveau', 'GPU', 'VRAM', 'Exécute', 'Alimentation', 'Total (juillet 2026)'],
        rows: [
          {
            'Niveau': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Exécute': 'modèles 7B-13B',
            'Alimentation': '650 W',
            'Total (juillet 2026)': 'env. 1 250 €',
          },
          {
            'Niveau': 'Intermédiaire',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Exécute': '14B aisément, 22B-33B léger',
            'Alimentation': '850 W',
            'Total (juillet 2026)': 'env. 2 550 €',
          },
          {
            'Niveau': 'Enthousiaste',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Exécute': '33B aisément, 70B en Q4',
            'Alimentation': '1000 W',
            'Total (juillet 2026)': 'env. 5 300 €',
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
          { 'Votre situation': 'J\'exécute des modèles 7B-13B et je veux la machine complète la moins chère', 'Montez ceci': 'Configuration budget (env. 1 250 €)' },
          { 'Votre situation': 'Je veux un premier PC pour l\'IA locale sans savoir jusqu\'où j\'irai', 'Montez ceci': 'Configuration budget, ou intermédiaire pour la marge' },
          { 'Votre situation': 'J\'exécute des modèles 14B en permanence et je les veux instantanés', 'Montez ceci': 'Configuration intermédiaire (env. 2 550 €)' },
          { 'Votre situation': 'Je fais du travail léger en 22B-33B et je veux une machine durable', 'Montez ceci': 'Configuration intermédiaire (env. 2 550 €)' },
          { 'Votre situation': 'J\'exécute intensivement des modèles 33B ou je veux une forte marge d\'avenir', 'Montez ceci': 'Configuration enthousiaste (env. 5 300 €)' },
          { 'Votre situation': 'J\'ai besoin d\'une machine mono-GPU qui exécute des modèles 70B en Q4', 'Montez ceci': 'Configuration enthousiaste (env. 5 300 €)' },
          { 'Votre situation': 'Je veux contenir le total malgré la hausse de 2026', 'Montez ceci': 'N\'importe quel niveau — achetez le GPU d\'occasion' },
          { 'Votre situation': 'Je suis indécis et je veux la configuration la plus sûre à garder des années', 'Montez ceci': 'Configuration intermédiaire — le choix de la rédaction' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuration budget (env. 1 250 €) : RTX 4060 Ti 16 GB',
        content:
          '**La configuration budget est le PC complet pour IA locale le moins cher et exécute chaque modèle 7B ainsi que la plupart des 13B — assez de capacité pour la plupart des nouveaux venus.** Elle est bâtie autour de la RTX 4060 Ti 16 GB, le GPU le moins gonflé par la hausse de 2026, ce qui maintient le total raisonnable.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB (env. 470-560 €) :** 16 GB de VRAM, 165 W. Exécute les modèles 7B à environ 20-25 tok/s et accueille les modèles 14B avec de la marge de contexte. La capacité de 16 GB est la raison de la préférer à la version 8 GB.',
          '**Processeur — AMD Ryzen 7 7700 (env. 230-270 €) :** 8 cœurs, consommation modeste. Le processeur travaille peu pendant l\'inférence GPU, donc une puce de milieu de gamme est correcte ici — ne dépensez pas trop pour le processeur à ce niveau.',
          '**Carte mère — chipset B650 (env. 130-170 €) :** prend en charge le Ryzen 7 et un seul GPU pleine taille en PCIe. Pas besoin d\'une alimentation électrique haut de gamme à ce niveau.',
          '**RAM — 32 GB DDR5 (env. 290-380 €) :** assez pour le système d\'exploitation, l\'outillage et un modèle 7B-13B exécuté en VRAM. La RAM ne remplace pas la VRAM — 32 GB suffisent ici. La pénurie mémoire de 2026 a nettement renchéri la DDR5.',
          '**Stockage — SSD NVMe 1 To (env. 130-190 €) :** contient le système d\'exploitation et plusieurs modèles (un modèle 7B Q4 fait environ 4-5 GB).',
          '**Alimentation — 650 W 80+ Gold (env. 80-110 €) :** marge confortable pour un GPU de 165 W et un processeur 8 cœurs.',
          '**Boîtier et refroidissement — moyen-tour avec un ventirad tour (env. 80-120 €) :** le niveau budget produit peu de chaleur ; le refroidissement par air suffit.',
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
            priceRange: '420-450',
            label: 'Vérifier le prix de la RTX 4060 Ti 16GB sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'Vérifier le prix du Ryzen 7 7700 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: 'Vérifier le prix de la RAM DDR5 32 GB sur Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Configuration intermédiaire (env. 2 550 €) : RTX 4070 Ti Super 16 GB',
        content:
          '**La configuration intermédiaire est le choix de la rédaction — elle exécute les modèles 14B instantanément, gère le travail léger en 22B-33B et c\'est le niveau que l\'on monte pour garder.** Elle est bâtie autour de la RTX 4070 Ti Super 16 GB, assez rapide pour que la latence de réponse cesse d\'être perceptible sur les modèles de classe 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB (env. 1 300-1 450 €) :** 16 GB de VRAM, 285 W. Même capacité de modèle que le niveau budget mais bien plus rapide — les modèles 7B-14B sont instantanés et le travail léger en 22B-33B est utilisable.',
          '**Processeur — AMD Ryzen 9 7900X (env. 280-330 €) :** 12 cœurs. Plus de marge que le processeur budget pour la préparation des données et l\'exécution d\'outils en parallèle de l\'inférence.',
          '**Carte mère — chipset B650 ou X670 (env. 180-260 €) :** alimentation électrique solide pour le processeur 12 cœurs et un GPU de 285 W.',
          '**RAM — 64 GB DDR5 (env. 560-720 €) :** de la place pour le système d\'exploitation, des fenêtres de contexte plus grandes et l\'outillage tel qu\'un pipeline RAG exécuté à côté du modèle. La pénurie mémoire de 2026 a fortement renchéri la DDR5.',
          '**Stockage — SSD NVMe 2 To (env. 230-310 €) :** contient une bibliothèque de modèles conséquente — un modèle 33B Q4 fait environ 18-20 GB.',
          '**Alimentation — 850 W 80+ Gold (env. 120-160 €) :** marge confortable pour le GPU de 285 W et le processeur 12 cœurs sous charge soutenue.',
          '**Boîtier et refroidissement — moyen-tour avec un AIO 240-280 mm ou un ventirad air haut de gamme (env. 150-220 €) :** le niveau intermédiaire produit une chaleur modérée ; un refroidisseur de qualité maintient le processeur stable lors de longues sessions d\'inférence.',
          '**Pourquoi monter ce niveau :** vous exécutez des modèles 14B en permanence et les voulez instantanés, ou vous faites du travail léger en 22B-33B et voulez de la marge. **Pourquoi l\'éviter :** si 7B-13B suffit, la configuration budget économise plus de 1 000 € ; si vous avez besoin du 70B, aucun GPU 16 GB ne le tient — passez à l\'enthousiaste.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuration intermédiaire accueille les mêmes modèles que la configuration budget — vous payez pour la vitesse, pas pour la capacité. Montez ce niveau si les modèles 14B seront une charge de travail quotidienne et que les attendre vous agacerait.',
          },
          {
            type: 'note',
            text: 'Une RTX 4090 24 GB d\'occasion se vend parfois proche du prix d\'une RTX 4070 Ti Super neuve après la hausse de 2026. Si vous en trouvez une vérifiée fonctionnelle, elle ajoute 8 GB de VRAM et atteint les modèles 33B — à vérifier avant d\'acheter la 4070 Ti Super.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Vérifier le prix de la RTX 4070 Ti Super sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'Vérifier le prix du Ryzen 9 7900X sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: 'Vérifier le prix de la RAM DDR5 64 GB sur Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Configuration enthousiaste (env. 5 300 €) : RTX 5090 32 GB',
        content:
          '**La configuration enthousiaste est la seule machine mono-GPU dans laquelle un modèle 70B tient en Q4 — sa RTX 5090 32 GB est la pièce maîtresse.** Montez ce niveau pour la capacité de VRAM, pas pour la vitesse brute ; la vitesse est un effet secondaire. La hausse de 2026 a frappé ce niveau le plus durement, donc la ligne GPU domine et bouge d\'une semaine à l\'autre.',
        items: [
          '**GPU — RTX 5090 32 GB (env. 3 500-3 900 €) :** 32 GB de VRAM GDDR7, 575 W. La seule carte grand public unique qui exécute un modèle 70B en Q4 sans configuration bi-GPU. Elle exécute les modèles 33B aisément, avec de la marge.',
          '**Processeur — AMD Ryzen 9 7950X (env. 340-420 €) :** 16 cœurs. Assez pour exécuter la préparation des données, les expériences de fine-tuning et l\'outillage en parallèle d\'une inférence intensive.',
          '**Carte mère — chipset X670E (env. 280-380 €) :** alimentation électrique robuste et PCIe 5.0, dimensionnées pour un GPU de 575 W et le processeur 16 cœurs.',
          '**RAM — 128 GB DDR5 (env. 1 100-1 400 €) :** de la place pour de grandes fenêtres de contexte, plusieurs modèles chargés à la fois et l\'outillage — et la marge pour décharger partiellement un modèle vers la RAM si besoin. La pénurie mémoire de 2026 a fortement renchéri la DDR5.',
          '**Stockage — SSD NVMe 4 To (env. 450-600 €) :** un modèle 70B Q4 fait environ 40 GB ; un disque de 4 To contient une grande bibliothèque de grands modèles.',
          '**Alimentation — 1000 W 80+ Platinum (env. 180-240 €) :** nécessaire car la RTX 5090 consomme 575 W à elle seule — un bloc de 750 W s\'effondrerait sous charge. Ne sous-dimensionnez pas cette pièce.',
          '**Boîtier et refroidissement — grand boîtier avec un AIO 360 mm (env. 280-380 €) :** le GPU de 575 W et le processeur 16 cœurs produisent une vraie chaleur ; un refroidissement liquide 360 mm maintient le processeur stable lors d\'une inférence 70B soutenue.',
          '**Pourquoi monter ce niveau :** vous avez besoin de modèles 33B ou 70B, vous exécutez une inférence par lots intensive ou vous voulez une machine qui n\'aura pas besoin d\'être remplacée pendant des années. **Pourquoi l\'éviter :** pour des modèles 7B-14B, c\'est surdimensionné — la configuration intermédiaire offre des réponses instantanées sur ces tailles pour moins de la moitié du coût.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La RTX 5090 consomme 575 W à elle seule. Associez-la à l\'alimentation 1000 W de cette liste de pièces — un bloc plus petit chuterait sous charge. Vérifiez que votre circuit électrique mural peut fournir la consommation totale avant de monter.',
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
            priceRange: '3650-3900',
            label: 'Vérifier le prix de la RTX 5090 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'Vérifier le prix du Ryzen 9 7950X sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: 'Vérifier le prix de l\'alimentation 1000 W sur Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Comment la hausse des prix de 2026 modifie le calcul',
        content:
          '**La pénurie de puces mémoire de 2026 a poussé les prix des GPU à 1,5-2 fois au-dessus du tarif conseillé et, comme le GPU est la plus grande ligne de chaque configuration, elle a relevé chaque total par rapport à l\'an dernier.** Planifiez la configuration autour des prix actuels, pas des prix de lancement.',
        items: [
          '**Le GPU domine le total.** Dans les trois niveaux, le GPU est le coût unique le plus élevé — la hausse modifie le total de la configuration plus que toute autre pièce.',
          '**La cause est la mémoire, pas les GPU.** Une pénurie d\'approvisionnement en mémoire GDDR et HBM a renchéri chaque carte dotée de mémoire rapide ; plus la VRAM est élevée, plus la carte a été touchée. La RTX 5090 est passée d\'un prix de lancement d\'environ 2 300 € à env. 3 500-3 900 €.',
          '**Les GPU d\'entrée de gamme ont mieux tenu.** La RTX 4060 Ti 16 GB reste proche de son tarif conseillé, ce qui explique que le total de la configuration budget ait le moins bougé.',
          '**Les GPU d\'occasion sont le bon plan.** Une RTX 4060 Ti ou une RTX 4090 d\'occasion échappe à l\'essentiel de la hausse — acheter une carte d\'occasion vérifiée fonctionnelle est le moyen le plus simple de réduire le total.',
          '**Les pièces hors GPU ont moins bougé.** Les prix du processeur, de la carte mère et de l\'alimentation ont augmenté modérément ; la RAM DDR5 et les SSD NVMe se sont eux aussi nettement renchéris avec la pénurie mémoire, mais le GPU reste la ligne à surveiller.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La pénurie mémoire de 2026 a poussé les prix des GPU à 1,5-2 fois le tarif conseillé, relevant le total de chaque configuration pour IA locale parce que le GPU est la plus grande ligne unique de la liste de pièces.',
          },
          {
            type: 'plain-terms',
            text: 'Le GPU est la pièce la plus chère de la machine, et en 2026 le GPU est la pièce qui a renchéri. Tant que la pénurie mémoire ne s\'apaise pas, considérez les prix de lancement comme de l\'histoire ancienne, achetez le GPU d\'occasion quand vous le pouvez et n\'achetez pas plus de VRAM que ce dont votre modèle a besoin.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Logigramme de décision : choisissez votre configuration en quatre questions',
        content:
          '**Quatre questions, dans l\'ordre, orientent la plupart des monteurs vers un niveau.**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: 'Arbre de décision pour choisir une configuration PC IA locale selon la taille du modèle : les modèles 7B-13B orientent vers la configuration économique (~1 100 $), les modèles 14B-33B vers la configuration intermédiaire (~2 400 $), les modèles 70B vers la configuration enthousiaste (~5 000 $).',
        items: [
          '**1. Quel est le plus grand modèle que vous voulez exécuter ?** 7B-13B : configuration budget. 14B-33B : configuration intermédiaire. 70B : configuration enthousiaste.',
          '**2. Quel est votre plafond de budget ferme ?** Environ 1 250 € : configuration budget. Environ 2 550 € : configuration intermédiaire. Environ 5 300 € : configuration enthousiaste.',
          '**3. GPU neuf ou d\'occasion ?** Un GPU d\'occasion vérifié fonctionnel échappe à l\'essentiel de la hausse de 2026 — choisissez l\'occasion pour abaisser le total de n\'importe quel niveau.',
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
          '**Les grandes enseignes proposent chaque pièce de ces configurations ; le marché de l\'occasion est la source du bon plan spécifiquement pour le GPU.** Les liens ci-dessous sont de simples liens de recherche de produits ; ils ne portent aucune balise affiliée et ne génèrent aucune commission.',
        items: [
          '**Amazon et Newegg :** le plus large stock de processeurs, RAM, SSD, alimentations et boîtiers. Le stock de GPU neufs est plus mince et affiché au niveau de la hausse de 2026.',
          '**Marché du GPU d\'occasion :** le meilleur rapport qualité-prix pour la ligne GPU — une RTX 4060 Ti, une RTX 4070 Ti Super ou une RTX 4090 d\'occasion vérifiée fonctionnelle échappe à l\'essentiel de la hausse.',
          '**LDLC et Materiel.net (France) :** sources fiables pour les processeurs, cartes mères et alimentations, et utiles aussi pour les offres groupées processeur-plus-carte-mère.',
          '**Achetez le GPU en premier.** C\'est la ligne la plus grande et la plus volatile — verrouillez le GPU à un prix que vous acceptez, puis achetez les pièces de soutien autour de lui.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'En raison de la hausse des prix des GPU en 2026, chaque total de ce guide est un instantané de juillet 2026 qui évolue vite. Ouvrez toujours l\'annonce actuelle du revendeur pour le GPU avant de monter — son prix a bougé d\'une semaine à l\'autre et il domine le coût de la configuration.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'Parcourir les GPU sur Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'Parcourir les processeurs Ryzen sur Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'Parcourir la RAM DDR5 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'Parcourir les SSD NVMe sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**S\'ancrer sur le tarif conseillé du GPU.** La hausse de 2026 fait que les prix de lancement ne reflètent plus la réalité. Budgétez le GPU par rapport au prix revendeur en direct et envisagez le marché de l\'occasion.',
          '**Acheter la RTX 4060 Ti 8 GB pour la configuration budget.** Elle partage un nom avec la version 16 GB mais ne peut pas accueillir un modèle 14B. Confirmez la variante 16 GB dans l\'annonce.',
          '**Surdimensionner pour des modèles 7B.** Si les modèles 7B couvrent votre cas d\'usage, la configuration enthousiaste gaspille des milliers d\'euros et des centaines de watts. Adaptez le niveau au modèle, pas au budget dont vous disposez par hasard.',
          '**Négliger la planification du boîtier et du refroidissement.** Un GPU de 575 W plus un processeur 16 cœurs produisent une vraie chaleur. Confirmez que le boîtier accueille le GPU et le refroidisseur et dispose d\'un flux d\'air avant de commander les pièces.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Meilleur guide d\'achat de GPU pour LLM locaux 2026](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum : prix des GPU de juillet 2026 et hausse de 1,5-2 fois au-dessus du tarif conseillé, utilisés ici pour les totaux des configurations.',
          '[Monter une station de travail LLM locale](/fr/local-llms/local-llm-workstation-build) — PromptQuorum : liste de pièces, refroidissement et conseils d\'alimentation pour une station 70B bi-GPU au-delà du niveau enthousiaste.',
          '[Spécifications des séries NVIDIA GeForce RTX 40 et 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Capacité de VRAM et puissance (TGP) officielles pour les RTX 4060 Ti, 4070 Ti Super et 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Tarifs de composants en direct pour les processeurs AMD Ryzen, la RAM DDR5, les SSD NVMe et les alimentations en juillet 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Combien coûte le montage d\'un PC pour IA locale en 2026 ?',
            a: 'Un PC budget pour IA locale coûte environ 1 250 €, une configuration intermédiaire environ 2 550 € et une configuration enthousiaste 70B environ 5 300 €. Ce sont des instantanés de juillet 2026 — la pénurie de puces mémoire de 2026 a poussé les prix des GPU à 1,5-2 fois au-dessus du tarif conseillé et, comme le GPU est la plus grande ligne de chaque configuration, elle a relevé chaque total par rapport aux mêmes pièces il y a un an.',
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
            a: 'Achetez le GPU d\'occasion quand vous le pouvez et les autres pièces neuves. La hausse de 2026 a poussé les prix des GPU neufs à 1,5-2 fois au-dessus du tarif conseillé, mais le marché de l\'occasion y a largement échappé — une RTX 4060 Ti, une RTX 4070 Ti Super ou une RTX 4090 d\'occasion vérifiée fonctionnelle réduit nettement le total. Les processeurs, la RAM, les SSD et les alimentations s\'achètent de préférence neufs.',
          },
          {
            q: 'Une configuration mono-GPU peut-elle exécuter un modèle 70B ?',
            a: 'Oui, la configuration enthousiaste le peut. Une RTX 5090 32 GB est la seule carte grand public unique dans laquelle un modèle 70B tient en Q4, ce qui nécessite environ 39-42 GB de VRAM — elle exécute donc le 70B avec une quantification agressive ou un déchargement partiel vers la RAM système. Les 128 GB de RAM de la configuration enthousiaste donnent à ce déchargement la place nécessaire.',
          },
          {
            q: 'La configuration intermédiaire vaut-elle le surcoût par rapport à la budget ?',
            a: 'Oui, si vous exécutez régulièrement des modèles de classe 14B. Les configurations budget et intermédiaire accueillent des modèles similaires, mais la RTX 4070 Ti Super de l\'intermédiaire est bien plus rapide — les modèles 14B deviennent instantanés au lieu d\'être lents, et le travail léger en 22B-33B devient utilisable. Si votre plafond est fermement les modèles 7B-13B, la configuration budget économise plus de 1 000 € et offre un meilleur rapport qualité-prix.',
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
          '[Choisissez le GPU de votre configuration avec le guide d\'achat complet](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — huit GPU sur quatre niveaux de budget, avec les prix de juillet 2026 et le calcul de la hausse.',
          '[Découvrez la configuration de station 70B bi-GPU pour un usage en production](/fr/local-llms/local-llm-workstation-build) — le niveau multi-utilisateur à 4 000-6 000 € au-delà de la configuration enthousiaste de ce guide.',
          '[Comparez le montage d\'un PC à la location de GPU cloud](/fr/power-local-llm/cloud-gpu-rental-guide-2026) — quand la location bat la possession de matériel pour un calcul occasionnel.',
          '[Calculez la VRAM nécessaire à chaque taille de modèle avant de monter](/fr/local-llms/how-much-vram-local-llm) — la méthode complète de VRAM par taille de modèle derrière les choix de niveau ici.',
          '[Envisagez un Mac comme alternative à un montage PC](/fr/power-local-llm/best-mac-for-local-ai-2026) — quand l\'Apple Silicon à mémoire unifiée bat un PC à GPU dédié pour l\'IA locale.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: 'ローカルAIワークステーション自作ガイド2026：予算別3構成',
    seoTitle: 'ローカルAI PC自作2026：エントリーから70B対応機まで',
    intro:
      'ローカルAI向けの自作ガイドの多くはCPUから始まりますが、マシンが実行できるモデルを決めるのはGPUとそのVRAMであり、他のすべてのパーツはそのGPUを支えるために選ばれます。本ガイドでは、ローカルLLM用PCの完全なパーツリストを3構成示します。7B〜13Bモデル向けのエントリー構成、14B〜33Bモデル向けのミドル構成、70B作業向けのハイエンド構成です。各ティアには正確なコンポーネント、想定される性能、合計コストを記載しています。価格について1点ご注意ください。2026年のメモリチップ不足によりGPU価格は希望小売価格の1.5〜2倍に上昇し、本ガイドのすべての構成コストは1年前の同じパーツより高くなっています。各数値は2026年7月時点のスナップショットとして扱い、可能な範囲で中古GPU市場を活用してください。',
    metaDescription:
      '2026年ローカルAIワークステーション構築：LLM推論向けのCPU、GPU、RAM、ストレージ。予算別の完全ビルドガイド。入門機からRTX 5090搭載ハイエンドまで解説。',
    twitterDescription:
      'ローカルAI PC自作ガイド：7B〜70Bモデル向けの完全パーツリストを備えた予算別3構成。2026年のGPU価格高騰がすべての構成コストを押し上げた——2026年7月の合計はこちら。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**最適なローカルAI PCは、GPUのVRAMが対象モデルに合うティアです。約¥185,000のエントリー構成は7B〜13Bモデルを、約¥400,000のミドル構成は14B〜33Bモデルを、約¥850,000のハイエンド構成は70Bモデルを実行できます——2026年のGPU価格により、いずれの合計も昨年より高くなっています。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にローカルLLMを動かすPCはどう組めばよいですか？',
        answer:
          '実行したい最大のモデルでティアを選び、GPUを中心に組み立てます。エントリー構成（約¥185,000）はRTX 4060 Ti 16 GBとRyzen 7 CPUを組み合わせ、7B〜13Bモデルに対応します。ミドル構成（約¥400,000）はRTX 4070 Ti Super 16 GBを用いて14B〜33Bモデルに対応します。ハイエンド構成（約¥850,000）はRTX 5090 32 GBを用いて70B作業に対応します。2026年のメモリ不足によりGPU価格は希望小売価格を大きく上回っているため、いずれの合計も2026年7月時点のスナップショットです。',
        bullets: [
          'エントリー構成 約¥185,000：RTX 4060 Ti 16 GB、7B〜13Bモデルを実行',
          'ミドル構成 約¥400,000：RTX 4070 Ti Super 16 GB、14B〜33Bモデルを実行',
          'ハイエンド構成 約¥850,000：RTX 5090 32 GB、70BモデルをQ4で実行',
          '2026年のGPU価格は希望小売価格の1.5〜2倍——可能な範囲でGPUは中古を購入',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '要点', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '編集部のおすすめ', anchor: '#editors-choice' },
      { label: '構成ティアの比較', anchor: '#comparison-table' },
      { label: 'どの構成を選ぶべきか？', anchor: '#which-build' },
      { label: 'エントリー構成（約¥185,000）', anchor: '#budget-build' },
      { label: 'ミドル構成（約¥400,000）', anchor: '#mid-build' },
      { label: 'ハイエンド構成（約¥850,000）', anchor: '#enthusiast-build' },
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
          '**2026年のGPU価格はすべての構成コストを押し上げました。** メモリチップ不足によりGPU価格は希望小売価格の1.5〜2倍に上昇しました。本ガイドの構成合計は2026年7月時点のスナップショットで、1年前の同じパーツより高くなっています——中古GPU市場を活用してください。',
          '**エントリー構成（約¥185,000）：** RTX 4060 Ti 16 GB、Ryzen 7 7700、32 GB RAM、1 TB SSD、650 W電源——7B〜13Bモデルを実用的な速度で実行します。ローカルAI向けで最も安価な完成機です。',
          '**ミドル構成（約¥400,000）：** RTX 4070 Ti Super 16 GB、Ryzen 9 7900X、64 GB RAM、2 TB SSD、850 W電源——14B〜33Bモデルを実行し、7B〜14Bモデルを即座に応答させます。',
          '**ハイエンド構成（約¥850,000）：** RTX 5090 32 GB、Ryzen 9 7950X、128 GB RAM、4 TB SSD、1000 W電源——70BモデルをQ4で収められる唯一のシングルGPU構成です。',
          '**RAMはVRAMの代わりにはなりません。** システムRAMはモデルをVRAMから溢れさせることができますが、RAMから動くモデルはインタラクティブな用途には遅すぎます。モデルにはVRAMを十分に、RAMはOSとツール用に購入してください。',
          '**電源はGPUに合わせてスケールします。** エントリー構成は650 W、ミドル構成は850 W、ハイエンド構成は1000 Wが必要です。RTX 5090は単体で575 Wを消費するためです。電源はカードと同時に予算化してください。',
          '**2026年は中古GPUが賢い選択です。** 中古のRTX 4090やRTX 4060 Tiは価格高騰の大部分を回避できます——動作確認済みの中古カードを購入し、構成合計を抑えてください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**エントリー構成（約¥185,000）：** GPU RTX 4060 Ti 16 GB——7Bおよびほとんどの13Bモデルを実行します。',
          '**ミドル構成（約¥400,000）：** GPU RTX 4070 Ti Super 16 GB——14Bを快適に実行し、軽めの22B〜33B作業も可能です。',
          '**ハイエンド構成（約¥850,000）：** GPU RTX 5090 32 GB——33Bを快適に、70BをQ4で実行します。',
          '**Q4_K_MでのVRAMの目安：** 10億パラメータあたりおよそ0.6 GB、加えてコンテキストとツール用に2〜4 GB。',
          '**システムRAMの指針：** エントリー構成は32 GB、ミドル構成は64 GB、ハイエンド構成は128 GB。',
          '**ティア別の電源：** エントリー650 W、ミドル850 W、ハイエンド1000 W——RTX 5090は単体で575 Wを消費します。',
          '**2026年の価格の実情：** メモリ不足によりGPU価格は希望小売価格の1.5〜2倍——実勢価格を確認し、中古カードも検討してください。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '編集部のおすすめ：ミドル構成（約¥400,000）',
        sponsoredSlot: true,
        content:
          '**ローカルAI向けにPCを組むほとんどの購入者にとって、ミドル構成は能力・コスト・余裕のバランスが取れたティアです。** RTX 4070 Ti Super 16 GBを中心に構築され、すべての14Bモデルをコンテキストの余裕をもって実行し、軽めの22B〜33B作業をこなし、7B〜14Bモデルを即座に応答させます——総額でおよそ¥400,000です。数か月で不満が出ることもなく、1年以内に買い替えが必要になることもない構成です。上限が明確に7B〜13Bモデルである場合のみエントリー構成に下げ、70B作業が特に必要な場合のみハイエンド構成に上げてください。ミドル構成は、長く使いたいマシンにとって無難な標準の選択肢です。',
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
            priceRange: '1150-1200',
            label: 'AmazonでRTX 4070 Ti Superの価格を確認',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'NeweggでRTX 4070 Ti Superの価格を確認',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026年の3構成ティアの比較',
        content:
          'GPUのVRAMと電力の数値はメーカー仕様です。推論速度は、各ティアのGPUに対するPromptQuorumのGPUテストに基づくモデルファミリーレベルの推定値です。構成合計は2026年7月時点の米国のスナップショットです——2026年のGPU価格高騰によりカード価格は希望小売価格の1.5〜2倍に上昇したため、GPUの行が各合計を支配し、週ごとに変動します。GPUを中古で購入すると、いずれの合計も下がります。',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: '2026年ローカルAI PC構成比較:RTX 4060 Ti 16GB予算構成(約1,100ドル)は7B-13Bモデル、RTX 4070 Ti Super 16GBミドル構成(約2,400ドル)は14B-33Bモデル、RTX 5090 32GBエンスージアスト構成(約5,000ドル)は33B-70Bモデルに対応。',
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
        columns: ['構成ティア', 'GPU', 'VRAM', '実行可能', '電源', '合計（2026年7月）'],
        rows: [
          {
            '構成ティア': 'エントリー',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '実行可能': '7B〜13Bモデル',
            '電源': '650 W',
            '合計（2026年7月）': '約¥185,000',
          },
          {
            '構成ティア': 'ミドル',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            '実行可能': '14Bを快適に、軽めの22B〜33B',
            '電源': '850 W',
            '合計（2026年7月）': '約¥400,000',
          },
          {
            '構成ティア': 'ハイエンド',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            '実行可能': '33Bを快適に、70BをQ4で',
            '電源': '1000 W',
            '合計（2026年7月）': '約¥850,000',
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
          { 'あなたの状況': '7B〜13Bモデルを動かし、最も安価な完成機が欲しい', 'おすすめの構成': 'エントリー構成（約¥185,000）' },
          { 'あなたの状況': '初めてのローカルAI PCが欲しく、どこまで進むか分からない', 'おすすめの構成': 'エントリー構成、または余裕を見てミドル構成' },
          { 'あなたの状況': '14Bモデルを常時動かし、即座に応答させたい', 'おすすめの構成': 'ミドル構成（約¥400,000）' },
          { 'あなたの状況': '軽めの22B〜33B作業を行い、長く使えるマシンが欲しい', 'おすすめの構成': 'ミドル構成（約¥400,000）' },
          { 'あなたの状況': '33Bモデルを多用する、または将来の余裕を強く求める', 'おすすめの構成': 'ハイエンド構成（約¥850,000）' },
          { 'あなたの状況': '70BモデルをQ4で動かすシングルGPUマシンが必要', 'おすすめの構成': 'ハイエンド構成（約¥850,000）' },
          { 'あなたの状況': '2026年の高騰にもかかわらず合計を抑えたい', 'おすすめの構成': 'いずれのティアも——GPUを中古で購入' },
          { 'あなたの状況': '迷っており、何年も使える最も無難な構成が欲しい', 'おすすめの構成': 'ミドル構成——編集部のおすすめ' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'エントリー構成（約¥185,000）：RTX 4060 Ti 16 GB',
        content:
          '**エントリー構成は最も安価な完成ローカルAI PCで、すべての7Bモデルとほとんどの13Bモデルを実行できます——多くの初めての利用者には十分な能力です。** 2026年の高騰の影響が最も小さいGPUであるRTX 4060 Ti 16 GBを中心に構築されており、合計を妥当な水準に保ちます。',
        items: [
          '**GPU — RTX 4060 Ti 16 GB（約¥68,000〜82,000）：** 16 GB VRAM、165 W。7Bモデルをおよそ20〜25 tok/sで実行し、14Bモデルもコンテキストの余裕をもって収めます。16 GBの容量こそ、8 GB版より本機を選ぶ理由です。',
          '**CPU — AMD Ryzen 7 7700（約¥38,000〜44,000）：** 8コア、消費電力は控えめ。CPUはGPU推論中ほとんど働かないため、ここではミドルレンジのチップが正解です——このティアではCPUに過剰に支出しないでください。',
          '**マザーボード — B650チップセット（約¥20,000〜28,000）：** Ryzen 7とPCIe上のフルサイズGPU 1枚に対応します。このティアではハイエンドの電源回路は不要です。',
          '**RAM — 32 GB DDR5（約¥40,000〜55,000）：** OS、ツール、VRAMで動く7B〜13Bモデルに十分です。RAMはVRAMの代わりにはなりません——ここでは32 GBで足ります。2026年のメモリ不足によりDDR5は大きく値上がりしました。',
          '**ストレージ — 1 TB NVMe SSD（約¥14,000〜20,000）：** OSと複数のモデルを収めます（7B Q4モデルはおよそ4〜5 GB）。',
          '**電源 — 650 W 80+ Gold（約¥10,000〜14,000）：** 165 WのGPUと8コアCPUに十分な余裕があります。',
          '**ケースと冷却 — タワー型空冷クーラー搭載のミドルタワー（約¥10,000〜16,000）：** エントリーティアの発熱は少なく、空冷で十分です。',
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
            priceRange: '420-450',
            label: 'AmazonでRTX 4060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'AmazonでRyzen 7 7700の価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: 'Amazonで32GB DDR5 RAMの価格を確認',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'ミドル構成（約¥400,000）：RTX 4070 Ti Super 16 GB',
        content:
          '**ミドル構成は編集部のおすすめです——14Bモデルを即座に実行し、軽めの22B〜33B作業をこなし、長く使うために組むティアです。** RTX 4070 Ti Super 16 GBを中心に構築され、14Bクラスのモデルでは応答の遅延が感じられなくなるほど高速です。',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB（約¥180,000〜210,000）：** 16 GB VRAM、285 W。エントリーティアと同じモデル容量ですが大幅に高速で——7B〜14Bモデルは即座に応答し、軽めの22B〜33B作業も実用的です。',
          '**CPU — AMD Ryzen 9 7900X（約¥58,000〜68,000）：** 12コア。データ準備や推論と並行したツール実行に、エントリーCPUより余裕があります。',
          '**マザーボード — B650またはX670チップセット（約¥28,000〜42,000）：** 12コアCPUと285 W GPUに見合う堅実な電源回路。',
          '**RAM — 64 GB DDR5（約¥85,000〜115,000）：** OS、より大きなコンテキストウィンドウ、モデルの隣で動くRAGパイプラインなどのツール用の容量があります。2026年のメモリ不足によりDDR5は大きく値上がりしました。',
          '**ストレージ — 2 TB NVMe SSD（約¥26,000〜38,000）：** ある程度のモデルライブラリを収めます——33B Q4モデルはおよそ18〜20 GBです。',
          '**電源 — 850 W 80+ Gold（約¥16,000〜22,000）：** 持続負荷下の285 W GPUと12コアCPUに十分な余裕があります。',
          '**ケースと冷却 — 240〜280 mmのAIOまたはハイエンド空冷クーラー搭載のミドルタワー（約¥20,000〜32,000）：** ミドルティアの発熱は中程度で、品質の高いクーラーが長時間の推論中もCPUを安定させます。',
          '**このティアを組む理由：** 14Bモデルを常時動かして即座に応答させたい、あるいは軽めの22B〜33B作業を行い余裕が欲しい場合。**避けるべき理由：** 7B〜13Bで十分ならエントリー構成が¥150,000以上節約でき、70Bが必要なら16 GBのGPUでは収まりません——ハイエンドへ。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ミドル構成はエントリー構成と同じモデルを収めます——支払っているのは速度であり、容量ではありません。14Bモデルが日常の作業負荷になり、待つことが煩わしいなら、このティアを組んでください。',
          },
          {
            type: 'note',
            text: '2026年の高騰後、中古のRTX 4090 24 GBが新品のRTX 4070 Ti Superに近い価格で売られることがあります。動作確認済みの個体が見つかれば、VRAMが8 GB増え33Bモデルに届きます——4070 Ti Superを買う前に確認する価値があります。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'AmazonでRTX 4070 Ti Superの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'AmazonでRyzen 9 7900Xの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: 'Amazonで64GB DDR5 RAMの価格を確認',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'ハイエンド構成（約¥850,000）：RTX 5090 32 GB',
        content:
          '**ハイエンド構成は、70BモデルをQ4で収められる唯一のシングルGPUマシンです——RTX 5090 32 GBが目玉のパーツです。** このティアは生の速度ではなくVRAM容量のために組みます。速度は副産物です。2026年の高騰はこのティアを最も強く直撃したため、GPUの行が支配的で、週ごとに変動します。',
        items: [
          '**GPU — RTX 5090 32 GB（約¥520,000〜620,000）：** 32 GB GDDR7 VRAM、575 W。デュアルGPU構成なしで70BモデルをQ4で実行できる唯一のシングルコンシューマーカードです。33Bモデルは余裕をもって快適に実行します。',
          '**CPU — AMD Ryzen 9 7950X（約¥78,000〜88,000）：** 16コア。重い推論と並行して、データ準備、ファインチューニング実験、ツール実行を行うのに十分です。',
          '**マザーボード — X670Eチップセット（約¥42,000〜58,000）：** 575 W GPUと16コアCPUに見合う強力な電源回路とPCIe 5.0。',
          '**RAM — 128 GB DDR5（約¥170,000〜230,000）：** 大きなコンテキストウィンドウ、複数モデルの同時ロード、ツールのための容量に加え、必要に応じてモデルを部分的にRAMへ退避させる余裕があります。2026年のメモリ不足によりDDR5は大きく値上がりしました。',
          '**ストレージ — 4 TB NVMe SSD（約¥52,000〜72,000）：** 70B Q4モデルはおよそ40 GBで、4 TBドライブは大型モデルの大規模なライブラリを収めます。',
          '**電源 — 1000 W 80+ Platinum（約¥24,000〜34,000）：** RTX 5090が単体で575 Wを消費するため必須です——750 Wのユニットは負荷下でへたります。このパーツを過小にしないでください。',
          '**ケースと冷却 — 360 mmのAIO搭載のフルサイズケース（約¥40,000〜56,000）：** 575 W GPUと16コアCPUは実際の発熱を生み、360 mmの水冷が持続的な70B推論中もCPUを安定させます。',
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
            priceRange: '3650-3900',
            label: 'AmazonでRTX 5090の価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'AmazonでRyzen 9 7950Xの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: 'Amazonで1000W電源の価格を確認',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026年の価格高騰が構成の計算をどう変えるか',
        content:
          '**2026年のメモリチップ不足によりGPU価格は希望小売価格の1.5〜2倍に上昇し、GPUはすべての構成で最大の項目であるため、いずれの合計も昨年より高くなりました。** 構成は発売時の価格ではなく現在の価格を中心に計画してください。',
        items: [
          '**GPUが合計を支配します。** 3つのティアすべてでGPUが単一最大のコストです——高騰は他のどのパーツよりも構成合計を大きく変えます。',
          '**原因はGPUそのものではなくメモリです。** GDDRとHBMの供給不足が高速メモリを搭載するすべてのカードのコストを押し上げ、VRAMが多いカードほど大きく直撃を受けました。RTX 5090は発売時のおよそ¥298,000から約¥520,000〜620,000に上昇しました。',
          '**下位のGPUはより持ちこたえました。** RTX 4060 Ti 16 GBは希望小売価格に近く、そのためエントリー構成の合計が最も小さく変動しました。',
          '**中古GPUが賢い選択です。** 中古のRTX 4060 TiやRTX 4090は高騰の大部分を回避できます——動作確認済みの中古カードを買うのが、構成合計を下げる最も簡単な方法です。',
          '**GPU以外のパーツはあまり変動しませんでした。** CPU・マザーボード・電源の価格は緩やかに上昇しました。DDR5 RAMとNVMe SSDもメモリ不足で大きく値上がりしましたが、それでも注視すべきはGPUの項目です。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年のメモリ不足はGPU価格を希望小売価格の1.5〜2倍に押し上げ、GPUがパーツリストの単一最大の項目であるため、すべてのローカルAI構成の合計を引き上げました。',
          },
          {
            type: 'plain-terms',
            text: 'GPUはマシンで最も高価なパーツであり、2026年はそのGPUが高くなったパーツです。メモリ不足が和らぐまでは、発売時の価格は過去のものと考え、可能なときはGPUを中古で買い、モデルが必要とする以上のVRAMを買わないでください。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '判断フローチャート：4つの質問で構成を選ぶ',
        content:
          '**順を追った4つの質問が、ほとんどの自作者を1つのティアへ導きます。**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: 'モデルサイズで選ぶローカルAI PC構成の決定木:7B-13Bモデルは予算構成(約1,100ドル)、14B-33Bモデルはミドル構成(約2,400ドル)、70Bモデルはエンスージアスト構成(約5,000ドル)に対応。',
        items: [
          '**1. 実行したい最大のモデルは何ですか？** 7B〜13B：エントリー構成。14B〜33B：ミドル構成。70B：ハイエンド構成。',
          '**2. 譲れない予算の上限は？** 約¥185,000：エントリー構成。約¥400,000：ミドル構成。約¥850,000：ハイエンド構成。',
          '**3. 新品のGPUですか、中古ですか？** 動作確認済みの中古GPUは2026年の高騰の大部分を回避できます——中古を選び、どのティアの合計も下げてください。',
          '**4. 電力とスペースの計画は成り立ちますか？** パーツを注文する前に、電源がティアに合っているか（650 W／850 W／1000 W）、ケースがGPUとクーラーを収められるかを確認してください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルAI PC構成は、最大のモデルサイズを最初に、予算の上限を次に、GPUの新品か中古かを3番目に、電力とスペースの計画を最後に答えて選んでください。',
          },
          {
            type: 'plain-terms',
            text: '実際に実行したい最大のモデルから始め、それにティアを決めさせてください。次に予算を確認し、GPUを中古で買うかを決め、電源とケースがパーツに合うことを確かめます。この順序で進めれば、モデルを実行できない構成を避けられます。',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'コンポーネントの購入先',
        content:
          '**大手の販売店はこれらの構成のすべてのパーツを扱っています。中古市場は、特にGPUに関して賢い価格の入手先です。** 以下のリンクは単なる商品検索リンクで、アフィリエイトタグを含まず報酬を生みません。',
        items: [
          '**AmazonとNewegg：** CPU、RAM、SSD、電源、ケースの在庫が最も豊富です。新品GPUの在庫はより薄く、2026年の高騰水準で値付けされています。',
          '**中古GPU市場：** GPUの項目で最良のコストパフォーマンス——動作確認済みの中古RTX 4060 Ti、RTX 4070 Ti Super、RTX 4090は高騰の大部分を回避します。',
          '**ドスパラやTSUKUMOなど（日本国内）：** CPU、マザーボード、電源の信頼できる入手先で、CPUとマザーボードのセット販売にも便利です。',
          '**GPUを最初に買ってください。** 最も大きく、最も変動の激しい項目です——納得できる価格でGPUを確保してから、それを支えるパーツをその周りで購入してください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年のGPU価格高騰のため、本ガイドのすべての合計は変動の速い2026年7月時点のスナップショットです。組む前に必ずGPUの現在の販売店ページを開いてください——価格は週ごとに動いており、構成コストを支配します。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'AmazonでGPUを探す',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'NeweggでRyzen CPUを探す',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'AmazonでDDR5 RAMを探す',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'AmazonでNVMe SSDを探す',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**GPUの希望小売価格を基準にする。** 2026年の高騰により、発売時の価格はもはや現実を反映しません。GPUは実勢の販売店価格に対して予算化し、中古市場も検討してください。',
          '**エントリー構成に8 GBのRTX 4060 Tiを買う。** 16 GB版と名前を共有しますが、14Bモデルを収められません。販売ページで16 GBバリアントを確認してください。',
          '**7Bモデルのために過剰に組む。** 7Bモデルで用途が足りるなら、ハイエンド構成は数十万円と数百ワットを無駄にします。たまたまある予算ではなく、モデルにティアを合わせてください。',
          '**ケースと冷却の計画を省く。** 575 W GPUと16コアCPUは実際の発熱を生みます。パーツを注文する前に、ケースがGPUとクーラーを収め、エアフローがあることを確認してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[ローカルLLM向け最良のGPU購入ガイド2026](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum：本ガイドの構成合計に用いた2026年7月のGPU価格と、希望小売価格に対する1.5〜2倍の高騰。',
          '[ローカルLLMワークステーションを組む](/ja/local-llms/local-llm-workstation-build) — PromptQuorum：ハイエンドティアの先にあるデュアルGPU 70Bワークステーションのパーツリスト、冷却、電源の指針。',
          '[NVIDIA GeForce RTX 40・50シリーズ仕様](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti、4070 Ti Super、5090の公式VRAM容量と電力（TGP）の数値。',
          '[PCPartPicker](https://pcpartpicker.com) — 2026年7月時点のAMD Ryzen CPU、DDR5 RAM、NVMe SSD、電源のリアルタイム部品価格。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '2026年にローカルAI用のPCを組む費用はいくらですか？',
            a: 'エントリーのローカルAI PCはおよそ¥185,000、ミドル構成はおよそ¥400,000、ハイエンドの70B構成はおよそ¥850,000です。これらは2026年7月時点のスナップショットです——2026年のメモリチップ不足によりGPU価格は希望小売価格の1.5〜2倍に上昇し、GPUはすべての構成で最大の項目であるため、1年前の同じパーツより各合計を引き上げました。',
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
            a: 'GPUは可能なら中古で、他のパーツは新品で買ってください。2026年の高騰により新品GPUの価格は希望小売価格の1.5〜2倍に上昇しましたが、中古市場はその大部分を免れました——動作確認済みの中古RTX 4060 Ti、RTX 4070 Ti Super、RTX 4090は構成合計を大きく下げます。CPU、RAM、SSD、電源は新品での購入が最適です。',
          },
          {
            q: 'シングルGPU構成で70Bモデルを実行できますか？',
            a: 'はい、ハイエンド構成なら可能です。RTX 5090 32 GBは、およそ39〜42 GBのVRAMを必要とする70BモデルをQ4で収められる唯一のシングルコンシューマーカードです——したがって積極的な量子化またはシステムRAMへの部分的なオフロードを伴って70Bを実行します。ハイエンド構成の128 GB RAMが、そのオフロードに必要な余裕を与えます。',
          },
          {
            q: 'ミドル構成はエントリー構成より追加費用に見合いますか？',
            a: 'はい、14Bクラスのモデルを定期的に動かすならそうです。エントリー構成とミドル構成は似たモデルを収めますが、ミドル構成のRTX 4070 Ti Superははるかに高速で——14Bモデルは遅さではなく即時性で応答し、軽めの22B〜33B作業も実用的になります。上限が明確に7B〜13Bモデルなら、エントリー構成が¥150,000以上を節約し、コストパフォーマンスに優れます。',
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
          '[完全な購入ガイドで構成のGPUを選ぶ](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 4つの予算ティアにわたる8つのGPU、2026年7月の価格と高騰の計算付き。',
          '[本番運用向けのデュアルGPU 70Bワークステーション構成を見る](/ja/local-llms/local-llm-workstation-build) — 本ガイドのハイエンド構成の先にある、¥4,000〜6,000相当の多人数向けティア。',
          '[PCを組むこととクラウドGPUのレンタルを比較する](/ja/power-local-llm/cloud-gpu-rental-guide-2026) — たまの計算用途では、レンタルがハードウェア所有を上回る場合。',
          '[組む前に各モデルサイズが必要とするVRAMを算出する](/ja/local-llms/how-much-vram-local-llm) — ここでのティア選択の背景にある、モデルサイズ別VRAMの完全な算出法。',
          '[PC構成の代替としてMacを検討する](/ja/power-local-llm/best-mac-for-local-ai-2026) — 統合メモリのApple Siliconが、ローカルAIで専用GPUのPCを上回る場合。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: '2026 本地 AI 工作站装机指南：三档预算配置',
    seoTitle: '2026 本地 AI PC 装机：从入门到 70B 工作站',
    intro:
      '大多数本地 AI 装机指南都从 CPU 讲起，但真正决定这台机器能跑哪些模型的是 GPU 及其显存——其他每个部件都是为支撑这块 GPU 而选定的。本指南为本地 LLM PC 提供三套完整配置清单：面向 7B-13B 模型的入门配置、面向 14B-33B 模型的中端配置，以及面向 70B 工作负载的发烧配置。每一档都列出确切部件、预期性能和总成本。关于价格有一点提醒：2026 年的存储芯片短缺将 GPU 价格推高至建议零售价的 1.5-2 倍，使本指南中每套配置的成本都高于一年前同样部件的价格——请把每个数字当作 2026 年 7 月的快照，并在可行时尽量利用二手 GPU 市场。',
    metaDescription:
      '2026年本地AI工作站搭建：LLM推理所需的CPU、GPU、内存和存储。按预算的完整搭建指南，从入门级到搭载RTX 5090的高端配置，全面解析硬件选择。',
    twitterDescription:
      '本地 AI PC 装机指南：三档预算配置，附 7B 到 70B 模型的完整部件清单。2026 年 GPU 价格上涨抬高了每套配置的成本——这里是 2026 年 7 月的总价。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**最佳的本地 AI PC 配置，是 GPU 显存与你目标模型相匹配的那一档。约 1,100 美元的入门配置可跑 7B-13B 模型，约 2,400 美元的中端配置可跑 14B-33B 模型，约 5,000 美元的发烧配置可跑 70B 模型——2026 年的 GPU 价格使每套总价都高于去年。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年如何装一台运行本地 LLM 的 PC？',
        answer:
          '按你想运行的最大模型选择档位，然后围绕 GPU 来组装。入门配置（约 1,100 美元）将 RTX 4060 Ti 16 GB 与一颗 Ryzen 7 CPU 搭配，可跑 7B-13B 模型。中端配置（约 2,400 美元）使用 RTX 4070 Ti Super 16 GB，可跑 14B-33B 模型。发烧配置（约 5,000 美元）使用 RTX 5090 32 GB，用于 70B 工作负载。2026 年的存储短缺把 GPU 价格推高至远超建议零售价，因此每套总价都是 2026 年 7 月的快照。',
        bullets: [
          '入门配置约 1,100 美元：RTX 4060 Ti 16 GB，可跑 7B-13B 模型',
          '中端配置约 2,400 美元：RTX 4070 Ti Super 16 GB，可跑 14B-33B 模型',
          '发烧配置约 5,000 美元：RTX 5090 32 GB，以 Q4 跑 70B 模型',
          '2026 年 GPU 价格为建议零售价的 1.5-2 倍——可行时尽量买二手 GPU',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '速览要点', anchor: '#quick-facts' },
      { label: '编辑推荐', anchor: '#editors-choice' },
      { label: '三档配置对比', anchor: '#comparison-table' },
      { label: '你该选哪套配置？', anchor: '#which-build' },
      { label: '入门配置（约 1,100 美元）', anchor: '#budget-build' },
      { label: '中端配置（约 2,400 美元）', anchor: '#mid-build' },
      { label: '发烧配置（约 5,000 美元）', anchor: '#enthusiast-build' },
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
          '**2026 年的 GPU 价格抬高了每套配置成本。** 存储芯片短缺把 GPU 价格推高至建议零售价的 1.5-2 倍。这里的配置总价是 2026 年 7 月的快照，高于一年前同样部件的价格——请利用二手 GPU 市场。',
          '**入门配置（约 1,100 美元）：** RTX 4060 Ti 16 GB、Ryzen 7 7700、32 GB 内存、1 TB SSD、650 W 电源——以可用速度运行 7B-13B 模型。这是本地 AI 最便宜的完整整机。',
          '**中端配置（约 2,400 美元）：** RTX 4070 Ti Super 16 GB、Ryzen 9 7900X、64 GB 内存、2 TB SSD、850 W 电源——可跑 14B-33B 模型，并让 7B-14B 模型即时响应。',
          '**发烧配置（约 5,000 美元）：** RTX 5090 32 GB、Ryzen 9 7950X、128 GB 内存、4 TB SSD、1000 W 电源——唯一能以 Q4 容纳 70B 模型的单 GPU 配置。',
          '**内存不能替代显存。** 系统内存能让模型溢出显存，但从内存运行的模型对交互式使用来说太慢。为模型买足显存,为操作系统和工具链买内存。',
          '**电源随 GPU 等比例提升。** 入门配置需要 650 W,中端配置 850 W,发烧配置 1000 W,因为单是 RTX 5090 就需 575 W。请把电源与显卡一并纳入预算。',
          '**2026 年二手 GPU 是性价比之选。** 一块二手 RTX 4090 或 RTX 4060 Ti 可避开大部分涨价——购买一块经过验证可用的二手卡,把配置总价压低。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览要点',
        items: [
          '**入门配置（约 1,100 美元）：** GPU RTX 4060 Ti 16 GB——可跑 7B 及大多数 13B 模型。',
          '**中端配置（约 2,400 美元）：** GPU RTX 4070 Ti Super 16 GB——从容运行 14B,可做轻量 22B-33B 工作。',
          '**发烧配置（约 5,000 美元）：** GPU RTX 5090 32 GB——从容运行 33B,以 Q4 运行 70B。',
          '**Q4_K_M 下的显存经验法则：** 每十亿参数约 0.6 GB,另加 2-4 GB 用于上下文和工具链。',
          '**系统内存建议：** 入门配置 32 GB,中端配置 64 GB,发烧配置 128 GB。',
          '**各档电源：** 入门 650 W、中端 850 W、发烧 1000 W——RTX 5090 单卡就需 575 W。',
          '**2026 年价格现实：** 受存储短缺影响,GPU 价格为建议零售价的 1.5-2 倍——请确认实时价格并考虑二手卡。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '编辑推荐：中端配置（约 2,400 美元）',
        sponsoredSlot: true,
        content:
          '**对大多数为本地 AI 装机的购买者来说,中端配置是在能力、成本和余量之间取得平衡的那一档。** 它围绕 RTX 4070 Ti Super 16 GB 构建,能在保有上下文空间的情况下运行每个 14B 模型,可应付轻量 22B-33B 工作,并让 7B-14B 模型即时响应——整机约 2,400 美元。这套配置不会在几个月内让你失望,也不需要在一年内更换。只有当你的上限明确停留在 7B-13B 模型时,才降到入门配置;只有当你确实需要 70B 工作负载时,才升到发烧配置。中端配置是一台你想长期保留的机器的稳妥默认选择。',
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
            priceRange: '1150-1200',
            label: '在 Amazon 查看 RTX 4070 Ti Super 价格',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: '在 Newegg 查看 RTX 4070 Ti Super 价格',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026 年三档配置如何对比',
        content:
          'GPU 显存和功耗数字为厂商规格。推理速度是基于 PromptQuorum 对各档 GPU 的测试所得的模型族级别估计值。配置总价为 2026 年 7 月的美国快照——2026 年 GPU 价格上涨把显卡推高至建议零售价的 1.5-2 倍,因此 GPU 这一项主导每套总价,且逐周变动。买二手 GPU 会拉低每套总价。',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: '2026年本地AI主机配置对比:RTX 4060 Ti 16GB入门配置(约1,100美元)运行7B-13B模型,RTX 4070 Ti Super 16GB中端配置(约2,400美元)运行14B-33B模型,RTX 5090 32GB发烧级配置(约5,000美元)运行33B-70B模型。',
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
        columns: ['配置档位', 'GPU', '显存', '可运行', '电源', '总价（2026 年 7 月）'],
        rows: [
          {
            '配置档位': '入门',
            'GPU': 'RTX 4060 Ti 16 GB',
            '显存': '16 GB',
            '可运行': '7B-13B 模型',
            '电源': '650 W',
            '总价（2026 年 7 月）': '约 1,100 美元',
          },
          {
            '配置档位': '中端',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            '显存': '16 GB',
            '可运行': '从容跑 14B,轻量 22B-33B',
            '电源': '850 W',
            '总价（2026 年 7 月）': '约 2,400 美元',
          },
          {
            '配置档位': '发烧',
            'GPU': 'RTX 5090 32 GB',
            '显存': '32 GB',
            '可运行': '从容跑 33B,以 Q4 跑 70B',
            '电源': '1000 W',
            '总价（2026 年 7 月）': '约 5,000 美元',
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
          { '你的情况': '我跑 7B-13B 模型,想要最便宜的完整整机', '装这套': '入门配置（约 1,100 美元）' },
          { '你的情况': '我想要第一台本地 AI PC,不确定会走多远', '装这套': '入门配置,或为留余量选中端配置' },
          { '你的情况': '我持续运行 14B 模型,希望它们即时响应', '装这套': '中端配置（约 2,400 美元）' },
          { '你的情况': '我做轻量 22B-33B 工作,想要一台耐用的机器', '装这套': '中端配置（约 2,400 美元）' },
          { '你的情况': '我大量运行 33B 模型,或想要充裕的未来余量', '装这套': '发烧配置（约 5,000 美元）' },
          { '你的情况': '我需要一台能以 Q4 跑 70B 模型的单 GPU 机器', '装这套': '发烧配置（约 5,000 美元）' },
          { '你的情况': '尽管有 2026 年涨价,我仍想压低总价', '装这套': '任意档位——买二手 GPU' },
          { '你的情况': '我拿不定主意,想要最稳妥、能用多年的配置', '装这套': '中端配置——编辑推荐' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: '入门配置（约 1,100 美元）：RTX 4060 Ti 16 GB',
        content:
          '**入门配置是最便宜的完整本地 AI PC,可运行每个 7B 模型以及大多数 13B 模型——对大多数首次使用者来说能力足够。** 它围绕 RTX 4060 Ti 16 GB 构建,这是受 2026 年涨价影响最小的 GPU,从而把总价控制在合理范围。',
        items: [
          '**GPU——RTX 4060 Ti 16 GB（约 420-450 美元）：** 16 GB 显存,165 W。以约 20-25 tok/s 运行 7B 模型,并能在保有上下文余量的情况下容纳 14B 模型。16 GB 容量正是选它而不选 8 GB 版的理由。',
          '**CPU——AMD Ryzen 7 7700（约 250-280 美元）：** 8 核心,功耗适中。GPU 推理期间 CPU 工作量很小,因此这一档用中端芯片是正确的——不要在这一档的 CPU 上超额花钱。',
          '**主板——B650 芯片组（约 130-160 美元）：** 支持 Ryzen 7 和一块 PCIe 全尺寸 GPU。这一档不需要高端供电。',
          '**内存——32 GB DDR5（约 90-120 美元）：** 足以应付操作系统、工具链和一个在显存中运行的 7B-13B 模型。内存不能替代显存——这一档 32 GB 足够。',
          '**存储——1 TB NVMe SSD（约 70-90 美元）：** 可容纳操作系统和数个模型（一个 7B Q4 模型约 4-5 GB）。',
          '**电源——650 W 80+ 金牌（约 80-100 美元）：** 为一块 165 W 的 GPU 和一颗 8 核 CPU 提供从容余量。',
          '**机箱与散热——配塔式风冷散热器的中塔机箱（约 80-120 美元）：** 入门档发热很少,风冷已足够。',
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
            priceRange: '420-450',
            label: '在 Amazon 查看 RTX 4060 Ti 16GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: '在 Amazon 查看 Ryzen 7 7700 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: '在 Amazon 查看 32GB DDR5 内存价格',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: '中端配置（约 2,400 美元）：RTX 4070 Ti Super 16 GB',
        content:
          '**中端配置是编辑推荐——它即时运行 14B 模型,可应付轻量 22B-33B 工作,是你为长期保留而装的那一档。** 它围绕 RTX 4070 Ti Super 16 GB 构建,速度足够快,以至于在 14B 级别模型上响应延迟不再被察觉。',
        items: [
          '**GPU——RTX 4070 Ti Super 16 GB（约 1,150-1,200 美元）：** 16 GB 显存,285 W。与入门档相同的模型容量,但快得多——7B-14B 模型即时响应,轻量 22B-33B 工作可用。',
          '**CPU——AMD Ryzen 9 7900X（约 330-370 美元）：** 12 核心。在数据准备和推理同时运行工具链方面,比入门 CPU 有更多余量。',
          '**主板——B650 或 X670 芯片组（约 180-240 美元）：** 为 12 核 CPU 和一块 285 W GPU 提供稳固供电。',
          '**内存——64 GB DDR5（约 180-230 美元）：** 为操作系统、更大的上下文窗口以及在模型旁运行的 RAG 流水线等工具链留出空间。',
          '**存储——2 TB NVMe SSD（约 130-170 美元）：** 可容纳相当规模的模型库——一个 33B Q4 模型约 18-20 GB。',
          '**电源——850 W 80+ 金牌（约 120-150 美元）：** 在持续负载下为 285 W GPU 和 12 核 CPU 提供从容余量。',
          '**机箱与散热——配 240-280 mm 一体式水冷或高端风冷散热器的中塔机箱（约 150-220 美元）：** 中端档发热中等,优质散热器在长时间推理中保持 CPU 稳定。',
          '**为何装这一档:** 你持续运行 14B 模型且希望即时响应,或你做轻量 22B-33B 工作且想要余量。**为何跳过它:** 若 7B-13B 已足够,入门配置可省下 1,000 多美元;若你需要 70B,没有 16 GB 的 GPU 装得下它——请上发烧配置。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '中端配置容纳的模型与入门配置相同——你付的是速度,而非容量。如果 14B 模型将成为日常工作负载且等待它会让你恼火,就装这一档。',
          },
          {
            type: 'note',
            text: '在 2026 年涨价之后,一块二手 RTX 4090 24 GB 有时售价接近一块全新 RTX 4070 Ti Super。如果你能找到一块经验证可用的,它会多出 8 GB 显存并能跑到 33B 模型——在买 4070 Ti Super 之前值得查看。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: '在 Amazon 查看 RTX 4070 Ti Super 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: '在 Amazon 查看 Ryzen 9 7900X 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: '在 Amazon 查看 64GB DDR5 内存价格',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: '发烧配置（约 5,000 美元）：RTX 5090 32 GB',
        content:
          '**发烧配置是唯一能以 Q4 容纳 70B 模型的单 GPU 机器——它的 RTX 5090 32 GB 是核心部件。** 装这一档是为了显存容量,而非纯粹的速度;速度只是副产物。2026 年涨价对这一档冲击最重,因此 GPU 这一项占主导且逐周变动。',
        items: [
          '**GPU——RTX 5090 32 GB（约 3,650-3,900 美元）：** 32 GB GDDR7 显存,575 W。这是唯一一块无需双 GPU 配置即可以 Q4 跑 70B 模型的消费级单卡。它从容运行 33B 模型,还有富余。',
          '**CPU——AMD Ryzen 9 7950X（约 450-520 美元）：** 16 核心。足以在繁重推理之外运行数据准备、微调实验和工具链。',
          '**主板——X670E 芯片组（约 280-380 美元）：** 强劲供电和 PCIe 5.0,按一块 575 W GPU 和 16 核 CPU 来定规格。',
          '**内存——128 GB DDR5（约 380-480 美元）：** 为大上下文窗口、同时加载多个模型和工具链留出空间——并在需要时留有把模型部分溢出到内存的余量。',
          '**存储——4 TB NVMe SSD（约 260-340 美元）：** 一个 70B Q4 模型约 40 GB;一块 4 TB 硬盘可容纳一个大型模型的大库。',
          '**电源——1000 W 80+ 白金（约 180-240 美元）：** 必需,因为单是 RTX 5090 就需 575 W——一只 750 W 的电源会在负载下塌陷。不要把这个部件选小。',
          '**机箱与散热——配 360 mm 一体式水冷的全尺寸机箱（约 280-380 美元）：** 575 W GPU 加 16 核 CPU 产生真实的热量;360 mm 液冷在持续 70B 推理中保持 CPU 稳定。',
          '**为何装这一档:** 你需要 33B 或 70B 模型、你运行繁重的批量推理,或你想要一台多年无需更换的机器。**为何跳过它:** 对 7B-14B 模型来说它属于过度配置——中端配置在这些规模上以不到一半的成本提供即时响应。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090 单卡就需 575 W。请把它与本部件清单中的 1000 W 电源搭配——更小的电源会在负载下出现电压骤降。装机前请确认你的墙面电路能够供给全部功耗。',
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
            priceRange: '3650-3900',
            label: '在 Amazon 查看 RTX 5090 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: '在 Amazon 查看 Ryzen 9 7950X 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: '在 Amazon 查看 1000W 电源价格',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026 年价格上涨如何改变装机的算账方式',
        content:
          '**2026 年的存储芯片短缺把 GPU 价格推高至建议零售价的 1.5-2 倍,而由于 GPU 是每套配置中最大的一项,它把每套总价都抬到了高于去年的水平。** 请围绕当前价格而非发布时价格来规划装机。',
        items: [
          '**GPU 主导总价。** 在三档配置中,GPU 都是单项最大的成本——涨价对配置总价的影响超过任何其他部件。',
          '**根源是存储,而非 GPU 本身。** GDDR 和 HBM 的供应短缺抬高了每块配备高速显存的卡的成本;显存越大,卡受冲击越重。RTX 5090 从 1,999 美元的发布价涨到约 3,650-3,900 美元。',
          '**低端 GPU 更扛得住。** RTX 4060 Ti 16 GB 接近其建议零售价,这正是入门配置总价变动最小的原因。',
          '**二手 GPU 是性价比之选。** 一块二手 RTX 4060 Ti 或 RTX 4090 可避开大部分涨价——买一块经验证可用的二手卡,是压低配置总价最简单的办法。',
          '**非 GPU 部件变动较小。** CPU、主板和电源价格涨幅温和;DDR5 内存和 NVMe SSD 也随存储短缺而走紧,但 GPU 仍是要盯紧的一项。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026 年的存储短缺把 GPU 价格推高至建议零售价的 1.5-2 倍,抬高了每套本地 AI 配置的总价,因为 GPU 是部件清单中单项最大的一项。',
          },
          {
            type: 'plain-terms',
            text: 'GPU 是这台机器最贵的部件,而 2026 年 GPU 正是变贵的那个部件。在存储短缺缓解之前,请把发布时价格当作历史,可行时买二手 GPU,并且不要买超过你模型所需的显存。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '决策流程图:用四个问题选定你的配置',
        content:
          '**按顺序回答的四个问题,会把大多数装机者引向某一档。**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: '按模型规模选择本地AI主机配置的决策树:7B-13B模型对应入门配置(约1,100美元),14B-33B模型对应中端配置(约2,400美元),70B模型对应发烧级配置(约5,000美元)。',
        items: [
          '**1. 你想运行的最大模型是多大？** 7B-13B:入门配置。14B-33B:中端配置。70B:发烧配置。',
          '**2. 你的硬性预算上限是多少？** 约 1,100 美元:入门配置。约 2,400 美元:中端配置。约 5,000 美元:发烧配置。',
          '**3. 全新还是二手 GPU？** 一块经验证可用的二手 GPU 可避开 2026 年的大部分涨价——选二手以拉低任意档位的总价。',
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
          '**大型零售商备有这些配置中的每个部件;二手市场是专门针对 GPU 的性价比来源。** 下方链接为普通的产品搜索链接,不带任何联盟标签,也不产生佣金。',
        items: [
          '**Amazon 和 Newegg：** CPU、内存、SSD、电源和机箱的库存最齐全。全新 GPU 库存较少,且按 2026 年涨价水平定价。',
          '**二手 GPU 市场：** GPU 这一项性价比最高——一块经验证可用的二手 RTX 4060 Ti、RTX 4070 Ti Super 或 RTX 4090 可避开大部分涨价。',
          '**Micro Center（美国,实体店）：** 若有门店可达,通常是全新 GPU 和 CPU 价格最优的去处;也适合购买 CPU 加主板的套装。',
          '**先买 GPU。** 它是最大、最易波动的一项——以你能接受的价格锁定 GPU,再围绕它购买辅助部件。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '由于 2026 年 GPU 价格上涨,本指南中每套总价都是变动迅速的 2026 年 7 月快照。装机前请务必打开 GPU 当前的零售商商品页——它的价格逐周变动,且主导着配置成本。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: '在 Amazon 浏览 GPU',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: '在 Newegg 浏览 Ryzen CPU',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: '在 Amazon 浏览 DDR5 内存',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: '在 Amazon 浏览 NVMe SSD',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**死盯 GPU 的建议零售价。** 2026 年的涨价意味着发布时价格不再反映现实。请按 GPU 的实时零售价做预算,并考虑二手市场。',
          '**为入门配置买了 8 GB 版 RTX 4060 Ti。** 它与 16 GB 版同名,却容纳不下 14B 模型。请在商品页确认是 16 GB 版本。',
          '**为 7B 模型过度配置。** 如果 7B 模型已覆盖你的用例,发烧配置会浪费数千美元和数百瓦。把档位与模型匹配,而非与你恰好手头的预算匹配。',
          '**略过机箱与散热的规划。** 一块 575 W GPU 加一颗 16 核 CPU 会产生真实的热量。订购部件前,确认机箱能容纳 GPU 和散热器并具备风道。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[2026 本地 LLM 最佳 GPU 购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum：用于本指南配置总价的 2026 年 7 月 GPU 价格,以及高于建议零售价 1.5-2 倍的涨幅。',
          '[搭建本地 LLM 工作站](/zh/local-llms/local-llm-workstation-build) — PromptQuorum：发烧档之外的双 GPU 70B 工作站部件清单、散热和电源指南。',
          '[NVIDIA GeForce RTX 40 与 50 系列规格](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti、4070 Ti Super 和 5090 的官方显存容量与功耗（TGP）数据。',
          '[PCPartPicker](https://pcpartpicker.com) — 截至 2026 年 7 月,AMD Ryzen CPU、DDR5 内存、NVMe SSD 和电源的实时部件价格。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '2026 年装一台本地 AI PC 要花多少钱？',
            a: '一台入门本地 AI PC 约 1,100 美元,中端配置约 2,400 美元,发烧级 70B 配置约 5,000 美元。这些是 2026 年 7 月的快照——2026 年的存储芯片短缺把 GPU 价格推高至建议零售价的 1.5-2 倍,而由于 GPU 是每套配置中最大的一项,它把每套总价都抬到了高于一年前同样部件的水平。',
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
            a: '可行时买二手 GPU,其他部件买全新。2026 年的涨价把全新 GPU 价格推高至建议零售价的 1.5-2 倍,但二手市场避开了其中大部分——一块经验证可用的二手 RTX 4060 Ti、RTX 4070 Ti Super 或 RTX 4090 能显著拉低配置总价。CPU、内存、SSD 和电源则最好买全新。',
          },
          {
            q: '单 GPU 配置能跑 70B 模型吗？',
            a: '能,发烧配置可以。RTX 5090 32 GB 是唯一一块能以 Q4 容纳 70B 模型的消费级单卡,该模型约需 39-42 GB 显存——因此它在采用激进量化或部分溢出到系统内存的情况下运行 70B。发烧配置中的 128 GB 内存为这种溢出提供了所需空间。',
          },
          {
            q: '中端配置相比入门配置,多花的钱值得吗？',
            a: '值得,如果你经常运行 14B 级别的模型。入门配置和中端配置容纳的模型相近,但中端配置的 RTX 4070 Ti Super 快得多——14B 模型从迟缓变为即时响应,轻量 22B-33B 工作变得可用。如果你的上限明确停留在 7B-13B 模型,入门配置能省下 1,000 多美元,性价比更高。',
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
          '[用完整购买指南为你的配置选 GPU](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 横跨四个预算档位的八块 GPU,附 2026 年 7 月价格和涨价算账。',
          '[查看面向生产用途的双 GPU 70B 工作站配置](/zh/local-llms/local-llm-workstation-build) — 本指南发烧配置之外、4,000-6,000 美元的多用户档位。',
          '[把自己装 PC 与租用云 GPU 做对比](/zh/power-local-llm/cloud-gpu-rental-guide-2026) — 在偶尔需要算力时,租用何时优于自购硬件。',
          '[装机前算清每个模型规模所需的显存](/zh/local-llms/how-much-vram-local-llm) — 这里档位选择背后、按模型规模算显存的完整方法。',
          '[把 Mac 作为 PC 装机的替代方案来考虑](/zh/power-local-llm/best-mac-for-local-ai-2026) — 统一内存的 Apple Silicon 何时在本地 AI 上胜过独立 GPU 的 PC。',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: 'Guía para armar una PC con IA local 2026: 3 niveles de presupuesto',
    seoTitle: 'PC para IA local 2026: del básico a la estación 70B',
    intro:
      'La mayoría de las guías para armar una PC con IA local empiezan por la CPU, pero es la GPU y su VRAM lo que decide qué modelos puede ejecutar la máquina — cada otra parte se elige para dar soporte a esa GPU. Esta guía ofrece tres listas de componentes completas para una PC dedicada a LLM locales: una configuración económica para modelos 7B-13B, una configuración media para modelos 14B-33B y una configuración entusiasta para trabajar con modelos 70B. Cada nivel incluye los componentes exactos, el rendimiento esperado y el costo total. Una advertencia sobre los precios: la escasez de chips de memoria de 2026 empujó los precios de las GPU a 1,5-2 veces por encima del precio de lista, lo que eleva el costo de cada configuración aquí respecto a los mismos componentes de hace un año — toma cada cifra como una instantánea de julio de 2026 y aprovecha el mercado de GPU usadas cuando puedas.',
    metaDescription:
      'Tres PCs para IA local en 2026: económica 7B–13B, media 14B–33B y entusiasta 70B. Listas de componentes exactas, tokens/s esperados y costos totales.',
    twitterDescription:
      'Guía para armar una PC con IA local: tres niveles de presupuesto con listas de componentes completas para modelos de 7B a 70B. El aumento de precios de GPU en 2026 encareció cada configuración — aquí están los totales de julio de 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**La mejor PC para IA local es el nivel cuya VRAM de GPU encaja con tu modelo objetivo. Una configuración económica de ~€1.250 ejecuta modelos 7B-13B, una configuración media de ~€2.500 ejecuta modelos 14B-33B y una configuración entusiasta de ~€5.200 ejecuta modelos 70B — con los precios de GPU de 2026 elevando cada total respecto al año anterior. Los precios son de venta minorista en España (Amazon.es, PcComponentes); en Latinoamérica pueden variar según impuestos locales.**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo armo una PC para ejecutar LLM locales en 2026?',
        answer:
          'Elige tu nivel según el modelo más grande que quieras ejecutar y luego arma la PC alrededor de la GPU. Una configuración económica (~€1.250) combina una RTX 4060 Ti 16 GB con una CPU Ryzen 7 para modelos 7B-13B. Una configuración media (~€2.500) usa una RTX 4070 Ti Super 16 GB para modelos 14B-33B. Una configuración entusiasta (~€5.200) usa una RTX 5090 32 GB para trabajo con 70B. La escasez de memoria de 2026 elevó los precios de GPU muy por encima del precio de lista, así que cada total es una instantánea de julio de 2026 con precios minoristas de España; en Latinoamérica pueden variar según impuestos locales.',
        bullets: [
          'Configuración económica ~€1.250: RTX 4060 Ti 16 GB, ejecuta modelos 7B-13B',
          'Configuración media ~€2.500: RTX 4070 Ti Super 16 GB, ejecuta modelos 14B-33B',
          'Configuración entusiasta ~€5.200: RTX 5090 32 GB, ejecuta modelos 70B en Q4',
          'Los precios de GPU en 2026 son 1,5-2 veces el precio de lista — compra GPU usadas cuando puedas',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Elección del editor', anchor: '#editors-choice' },
      { label: 'Comparación de niveles', anchor: '#comparison-table' },
      { label: '¿Qué configuración elegir?', anchor: '#which-build' },
      { label: 'Configuración económica (~€1.250)', anchor: '#budget-build' },
      { label: 'Configuración media (~€2.500)', anchor: '#mid-build' },
      { label: 'Configuración entusiasta (~€5.200)', anchor: '#enthusiast-build' },
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
          '**Los precios de GPU de 2026 encarecieron cada configuración.** Una escasez de chips de memoria empujó los precios de GPU a 1,5-2 veces por encima del precio de lista. Los totales aquí son instantáneas de julio de 2026 y son más altos que los mismos componentes de hace un año — aprovecha el mercado de GPU usadas.',
          '**Configuración económica (~€1.250):** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD de 1 TB, fuente de 650 W — ejecuta modelos 7B-13B a velocidad usable. La máquina completa más económica para IA local.',
          '**Configuración media (~€2.500):** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD de 2 TB, fuente de 850 W — ejecuta modelos 14B-33B y hace que los modelos 7B-14B respondan al instante.',
          '**Configuración entusiasta (~€5.200):** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD de 4 TB, fuente de 1000 W — la única configuración de GPU única que cabe un modelo 70B en Q4.',
          '**La RAM no es un sustituto de la VRAM.** La RAM del sistema permite que un modelo desborde la VRAM, pero un modelo ejecutándose desde la RAM es demasiado lento para uso interactivo. Compra suficiente VRAM para el modelo; compra RAM para el sistema operativo y las herramientas.',
          '**La fuente de alimentación escala con la GPU.** Una configuración económica necesita 650 W, la media 850 W y la entusiasta 1000 W porque la RTX 5090 sola consume 575 W. Presupuesta la fuente junto con la tarjeta.',
          '**Las GPU usadas son la apuesta de valor en 2026.** Una RTX 4090 o RTX 4060 Ti usada evita la mayor parte del aumento de precios — compra una tarjeta usada con funcionamiento verificado para mantener bajo el total de la configuración.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Configuración económica (~€1.250):** GPU RTX 4060 Ti 16 GB — ejecuta modelos 7B y la mayoría de los 13B.',
          '**Configuración media (~€2.500):** GPU RTX 4070 Ti Super 16 GB — ejecuta 14B con comodidad, trabajo ligero con 22B-33B.',
          '**Configuración entusiasta (~€5.200):** GPU RTX 5090 32 GB — ejecuta 33B con comodidad y 70B en Q4.',
          '**Regla general de VRAM en Q4_K_M:** aproximadamente 0,6 GB por cada mil millones de parámetros, más 2-4 GB para contexto y herramientas.',
          '**Guía de RAM del sistema:** 32 GB para la configuración económica, 64 GB para la media, 128 GB para la entusiasta.',
          '**Fuente de alimentación por nivel:** 650 W económica, 850 W media, 1000 W entusiasta — la RTX 5090 sola consume 575 W.',
          '**Realidad de precios en 2026:** los precios de GPU son 1,5-2 veces el precio de lista por una escasez de memoria — confirma precios actuales y considera tarjetas usadas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Elección del editor: la configuración media (~€2.500)',
        sponsoredSlot: true,
        content:
          '**Para la mayoría de quienes arman una PC para IA local, la configuración media es el nivel que equilibra capacidad, costo y margen.** Construida alrededor de una RTX 4070 Ti Super 16 GB, ejecuta cada modelo 14B con espacio de contexto, maneja trabajo ligero con 22B-33B y hace que los modelos 7B-14B respondan al instante — por alrededor de €2.500 en total. Es la configuración que no te frustrará en meses y no necesitará reemplazarse en un año. Baja a la configuración económica solo si tu techo es firmemente modelos 7B-13B; sube a la configuración entusiasta solo si necesitas específicamente trabajar con 70B. La configuración media es la opción predeterminada segura para una máquina que quieres conservar.',
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
            priceRange: '1150-1200',
            label: 'Ver precio de la RTX 4070 Ti Super en Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Ver precio de la RTX 4070 Ti Super en Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Cómo se comparan los tres niveles de configuración en 2026',
        content:
          'Las cifras de VRAM y potencia de la GPU son especificaciones del fabricante. Las velocidades de inferencia son estimaciones a nivel de familia de modelos de las pruebas de GPU de PromptQuorum para la GPU del nivel correspondiente. Los totales de configuración son instantáneas de venta minorista en España (Amazon.es, PcComponentes) de julio de 2026 — el aumento de precios de GPU de 2026 empujó las tarjetas a 1,5-2 veces el precio de lista, por lo que la línea de GPU domina cada total y varía semana a semana. Comprar la GPU usada reduce cada total. En Latinoamérica, los precios pueden variar según impuestos locales.',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: 'Comparativa de niveles de PC para IA local 2026: configuración económica RTX 4060 Ti 16 GB (~1.100 $) para modelos 7B-13B, configuración media RTX 4070 Ti Super 16 GB (~2.400 $) para modelos 14B-33B, configuración entusiasta RTX 5090 32 GB (~5.000 $) para modelos 33B-70B.',
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
        columns: ['Nivel', 'GPU', 'VRAM', 'Ejecuta', 'Fuente', 'Total (julio 2026)'],
        rows: [
          {
            'Nivel': 'Económica',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Ejecuta': 'modelos 7B-13B',
            'Fuente': '650 W',
            'Total (julio 2026)': '~€1.250',
          },
          {
            'Nivel': 'Media',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Ejecuta': '14B con comodidad, 22B-33B ligero',
            'Fuente': '850 W',
            'Total (julio 2026)': '~€2.500',
          },
          {
            'Nivel': 'Entusiasta',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Ejecuta': '33B con comodidad, 70B en Q4',
            'Fuente': '1000 W',
            'Total (julio 2026)': '~€5.200',
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
          { 'Tu situación': 'Ejecuto modelos 7B-13B y quiero la máquina completa más económica', 'Arma esta': 'Configuración económica (~€1.250)' },
          { 'Tu situación': 'Quiero una primera PC para IA local y no sé hasta dónde llegaré', 'Arma esta': 'Configuración económica, o la media para tener margen' },
          { 'Tu situación': 'Ejecuto modelos 14B constantemente y los quiero al instante', 'Arma esta': 'Configuración media (~€2.500)' },
          { 'Tu situación': 'Hago trabajo ligero con 22B-33B y quiero una máquina duradera', 'Arma esta': 'Configuración media (~€2.500)' },
          { 'Tu situación': 'Ejecuto modelos 33B intensivamente o quiero mucho margen futuro', 'Arma esta': 'Configuración entusiasta (~€5.200)' },
          { 'Tu situación': 'Necesito una máquina de GPU única que ejecute modelos 70B en Q4', 'Arma esta': 'Configuración entusiasta (~€5.200)' },
          { 'Tu situación': 'Quiero mantener el total bajo a pesar del aumento de 2026', 'Arma esta': 'Cualquier nivel — compra la GPU usada' },
          { 'Tu situación': 'No estoy seguro y quiero la configuración más segura para conservar por años', 'Arma esta': 'Configuración media — la elección del editor' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuración económica (~€1.250): RTX 4060 Ti 16 GB',
        content:
          '**La configuración económica es la PC completa para IA local más barata y ejecuta cada modelo 7B y la mayoría de los modelos 13B — suficiente capacidad para la mayoría de los usuarios por primera vez.** Está construida alrededor de la RTX 4060 Ti 16 GB, la GPU menos inflada por el aumento de 2026, lo que mantiene el total en un rango razonable.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB (~€440-480):** 16 GB de VRAM, 165 W. Ejecuta modelos 7B a aproximadamente 20-25 tok/s y cabe modelos 14B con margen de contexto. La capacidad de 16 GB es la razón para elegirla sobre la versión de 8 GB.',
          '**CPU — AMD Ryzen 7 7700 (~€230-260):** 8 núcleos, consumo de energía moderado. La CPU hace poco trabajo durante la inferencia de GPU, por lo que un chip de gama media es correcto aquí — no gastes de más en la CPU en este nivel.',
          '**Placa base — chipset B650 (~€130-170):** soporta el Ryzen 7 y una GPU de tamaño completo en PCIe. No necesitas suministro de energía de gama alta en este nivel.',
          '**RAM — 32 GB DDR5 (~€80-120):** suficiente para el sistema operativo, las herramientas y un modelo 7B-13B ejecutándose en VRAM. La RAM no es un sustituto de la VRAM — 32 GB es suficiente aquí.',
          '**Almacenamiento — SSD NVMe de 1 TB (~€80-110):** contiene el sistema operativo y varios modelos (un modelo 7B Q4 pesa aproximadamente 4-5 GB).',
          '**Fuente de alimentación — 650 W 80+ Gold (~€80-110):** margen cómodo para una GPU de 165 W y una CPU de 8 núcleos.',
          '**Gabinete y refrigeración — torre media con enfriador de aire tipo torre (~€80-120):** el nivel económico genera poco calor; la refrigeración por aire es suficiente.',
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
            priceRange: '420-450',
            label: 'Ver precio de la RTX 4060 Ti 16GB en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'Ver precio del Ryzen 7 7700 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: 'Ver precio de la RAM DDR5 32 GB en Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Configuración media (~€2.500): RTX 4070 Ti Super 16 GB',
        content:
          '**La configuración media es la elección del editor — ejecuta modelos 14B al instante, maneja trabajo ligero con 22B-33B y es el nivel que armas para conservar.** Está construida alrededor de la RTX 4070 Ti Super 16 GB, suficientemente rápida para que la latencia de respuesta deje de ser perceptible en modelos de clase 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB (~€1.150-1.350):** 16 GB de VRAM, 285 W. La misma capacidad de modelo que el nivel económico pero mucho más rápida — los modelos 7B-14B responden al instante y el trabajo ligero con 22B-33B es usable.',
          '**CPU — AMD Ryzen 9 7900X (~€280-330):** 12 núcleos. Más margen que la CPU económica para preparación de datos y ejecución de herramientas junto a la inferencia.',
          '**Placa base — chipset B650 o X670 (~€180-240):** suministro de energía sólido para la CPU de 12 núcleos y una GPU de 285 W.',
          '**RAM — 64 GB DDR5 (~€180-260):** espacio para el sistema operativo, ventanas de contexto más grandes y herramientas como un pipeline RAG corriendo junto al modelo.',
          '**Almacenamiento — SSD NVMe de 2 TB (~€130-180):** contiene una biblioteca de modelos considerable — un modelo 33B Q4 pesa aproximadamente 18-20 GB.',
          '**Fuente de alimentación — 850 W 80+ Gold (~€120-160):** margen cómodo para la GPU de 285 W y la CPU de 12 núcleos bajo carga sostenida.',
          '**Gabinete y refrigeración — torre media con AIO de 240-280 mm o enfriador de aire de alta gama (~€150-220):** el nivel medio genera calor moderado; un enfriador de calidad mantiene la CPU estable durante largas sesiones de inferencia.',
          '**Por qué armar este nivel:** ejecutas modelos 14B constantemente y los quieres al instante, o haces trabajo ligero con 22B-33B y quieres margen. **Por qué saltarlo:** si 7B-13B es suficiente, la configuración económica ahorra más de €1.000; si necesitas 70B, ninguna GPU de 16 GB lo cabe — pasa a la entusiasta.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La configuración media cabe los mismos modelos que la configuración económica — estás pagando por velocidad, no por capacidad. Arma este nivel si los modelos 14B serán una carga de trabajo diaria y esperar en ellos te molestaría.',
          },
          {
            type: 'note',
            text: 'Una RTX 4090 24 GB usada a veces se vende cerca del precio de una RTX 4070 Ti Super nueva después del aumento de 2026. Si encuentras una con funcionamiento verificado, agrega 8 GB de VRAM y alcanza modelos 33B — vale la pena comprobarlo antes de comprar la 4070 Ti Super.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Ver precio de la RTX 4070 Ti Super en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'Ver precio del Ryzen 9 7900X en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: 'Ver precio de la RAM DDR5 64 GB en Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Configuración entusiasta (~€5.200): RTX 5090 32 GB',
        content:
          '**La configuración entusiasta es la única máquina de GPU única que cabe un modelo 70B en Q4 — su RTX 5090 32 GB es la pieza principal.** Arma este nivel por capacidad de VRAM, no por velocidad bruta; la velocidad es un efecto secundario. El aumento de 2026 golpeó este nivel con más fuerza, por lo que la línea de GPU domina y varía semana a semana.',
        items: [
          '**GPU — RTX 5090 32 GB (~€3.500-3.900):** 32 GB de VRAM GDDR7, 575 W. La única tarjeta de consumo que ejecuta un modelo 70B en Q4 sin una configuración de GPU dual. Ejecuta modelos 33B con comodidad y margen.',
          '**CPU — AMD Ryzen 9 7950X (~€450-600):** 16 núcleos. Suficiente para ejecutar preparación de datos, experimentos de fine-tuning y herramientas junto a inferencia pesada.',
          '**Placa base — chipset X670E (~€280-380):** suministro de energía robusto y PCIe 5.0, dimensionado para una GPU de 575 W y la CPU de 16 núcleos.',
          '**RAM — 128 GB DDR5 (~€480-620):** espacio para ventanas de contexto grandes, múltiples modelos cargados a la vez y herramientas — y el margen para descargar un modelo parcialmente a la RAM si es necesario.',
          '**Almacenamiento — SSD NVMe de 4 TB (~€250-320):** un modelo 70B Q4 pesa aproximadamente 40 GB; una unidad de 4 TB contiene una gran biblioteca de modelos grandes.',
          '**Fuente de alimentación — 1000 W 80+ Platinum (~€180-260):** necesaria porque la RTX 5090 sola consume 575 W — una unidad de 750 W se vería superada bajo carga. No subestimes esta parte.',
          '**Gabinete y refrigeración — gabinete de tamaño completo con AIO de 360 mm (~€280-380):** la GPU de 575 W y la CPU de 16 núcleos generan calor real; un enfriador líquido de 360 mm mantiene la CPU estable durante inferencia 70B sostenida.',
          '**Por qué armar este nivel:** necesitas modelos 33B o 70B, ejecutas inferencia por lotes intensa o quieres una máquina que no necesite reemplazarse por años. **Por qué saltarlo:** para modelos 7B-14B es exagerado — la configuración media ofrece respuestas instantáneas en esos tamaños por menos de la mitad del costo.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La RTX 5090 consume 575 W por sí sola. Combínala con la fuente de 1000 W de esta lista de componentes — una unidad más pequeña colapsará bajo carga. Confirma que el circuito de tu pared puede suministrar el consumo total antes de armar.',
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
            priceRange: '3650-3900',
            label: 'Ver precio de la RTX 5090 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'Ver precio del Ryzen 9 7950X en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: 'Ver precio de la fuente 1000 W en Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Cómo el aumento de precios de 2026 cambia los cálculos del armado',
        content:
          '**La escasez de chips de memoria de 2026 empujó los precios de GPU a 1,5-2 veces por encima del precio de lista, y dado que la GPU es la línea más grande en cada configuración, elevó cada total respecto al año anterior.** Planifica la configuración alrededor de los precios actuales, no de los precios de lanzamiento.',
        items: [
          '**La GPU domina el total.** En los tres niveles, la GPU es el costo individual más alto — el aumento cambia el total de la configuración más que cualquier otra parte.',
          '**La causa es la memoria, no las GPU.** Una escasez de suministro de GDDR y HBM elevó el costo de cada tarjeta con memoria rápida; cuanta más VRAM, más fuerte fue el golpe. La RTX 5090 pasó de un precio de lanzamiento de €1.999 a aproximadamente €3.500-3.900.',
          '**Las GPU de gama baja resistieron mejor.** La RTX 4060 Ti 16 GB está cerca de su precio de lista, que es por qué el total de la configuración económica se movió menos.',
          '**Las GPU usadas son la apuesta de valor.** Una RTX 4060 Ti o RTX 4090 usada evita la mayor parte del aumento — comprar una tarjeta usada con funcionamiento verificado es la forma más simple de reducir el total de la configuración.',
          '**Las partes que no son GPU se movieron menos.** Los precios de CPU, placa base, SSD y fuente de alimentación subieron moderadamente; la RAM DDR5 también se tensó con la escasez de memoria, pero la GPU sigue siendo la línea a vigilar.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La escasez de memoria de 2026 empujó los precios de GPU a 1,5-2 veces el precio de lista, elevando el total de cada configuración de IA local porque la GPU es la línea individual más grande en la lista de componentes.',
          },
          {
            type: 'plain-terms',
            text: 'La GPU es la parte más cara de la máquina, y en 2026 la GPU es la parte que se encareció. Hasta que la escasez de memoria se alivie, trata los precios de lanzamiento como historia, compra la GPU de segunda mano cuando puedas y no compres más VRAM de la que necesita tu modelo.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Diagrama de decisión: elige tu configuración en cuatro preguntas',
        content:
          '**Cuatro preguntas, en orden, llevan a la mayoría de los armadores a un nivel.**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: 'Árbol de decisión para elegir una configuración de PC para IA local según el tamaño del modelo: los modelos 7B-13B llevan a la configuración económica (~1.100 $), los modelos 14B-33B a la configuración media (~2.400 $), los modelos 70B a la configuración entusiasta (~5.000 $).',
        items: [
          '**1. ¿Cuál es el modelo más grande que quieres ejecutar?** 7B-13B: configuración económica. 14B-33B: configuración media. 70B: configuración entusiasta.',
          '**2. ¿Cuál es tu techo de presupuesto estricto?** Alrededor de €1.250: configuración económica. Alrededor de €2.500: configuración media. Alrededor de €5.200: configuración entusiasta.',
          '**3. ¿GPU nueva o usada?** Una GPU usada con funcionamiento verificado evita la mayor parte del aumento de 2026 — elige usada para bajar el total de cualquier nivel.',
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
          '**Los grandes minoristas tienen cada pieza de estas configuraciones; el mercado de segunda mano es la fuente de valor específicamente para la GPU.** Los enlaces a continuación son enlaces simples de búsqueda de productos; no llevan etiquetas de afiliado y no generan comisión.',
        items: [
          '**Amazon y Newegg:** el stock más amplio de CPUs, RAM, SSDs, fuentes de alimentación y gabinetes. El stock de GPU nuevas es más escaso y tiene el precio del aumento de 2026.',
          '**Mercado de GPU usadas:** el mejor valor para la línea de GPU — una RTX 4060 Ti, RTX 4070 Ti Super o RTX 4090 usada con funcionamiento verificado evita la mayor parte del aumento.',
          '**MercadoLibre y tiendas locales de tecnología:** buenas fuentes en Latinoamérica para CPUs, placas base y fuentes de alimentación; también útiles para bundles de CPU más placa base.',
          '**Compra la GPU primero.** Es la línea más grande y más volátil — asegura la GPU a un precio que aceptes, luego compra las piezas de soporte alrededor de ella.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Debido al aumento de precios de GPU de 2026, cada total en esta guía es una instantánea de julio de 2026 que se mueve rápidamente. Siempre abre el listado actual del minorista para la GPU antes de armar — su precio ha variado semana a semana y domina el costo de la configuración.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'Explorar GPU en Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'Explorar CPU Ryzen en Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'Explorar RAM DDR5 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'Explorar SSD NVMe en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**Anclarse en el precio de lista de la GPU.** El aumento de 2026 significa que los precios de lanzamiento ya no reflejan la realidad. Presupuesta la GPU contra el precio actual del minorista y considera el mercado de segunda mano.',
          '**Comprar la RTX 4060 Ti de 8 GB para la configuración económica.** Comparte nombre con la versión de 16 GB pero no puede alojar un modelo 14B. Confirma la variante de 16 GB en el listado.',
          '**Sobredimensionar para modelos 7B.** Si los modelos 7B cubren tu caso de uso, la configuración entusiasta desperdicia miles de dólares y cientos de vatios. Ajusta el nivel al modelo, no al presupuesto que casualmente tienes.',
          '**Saltarse la planificación del gabinete y la refrigeración.** Una GPU de 575 W más una CPU de 16 núcleos genera calor real. Confirma que el gabinete cabe la GPU y el enfriador y tiene flujo de aire antes de pedir las piezas.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Mejor guía de compra de GPU para LLM locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: precios de GPU de julio de 2026 y el aumento de 1,5-2 veces sobre el precio de lista usado para los totales de configuración aquí.',
          '[Armado de workstation para LLM local](/es/local-llms/local-llm-workstation-build) — PromptQuorum: lista de componentes, refrigeración y guía de fuente de alimentación para la workstation 70B de GPU dual detrás del nivel entusiasta.',
          '[Especificaciones de NVIDIA GeForce RTX serie 40 y 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Cifras oficiales de capacidad de VRAM y potencia (TGP) para la RTX 4060 Ti, 4070 Ti Super y 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Precios de componentes en vivo para CPU AMD Ryzen, RAM DDR5, SSD NVMe y fuentes de alimentación a julio de 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuánto cuesta armar una PC para IA local en 2026?',
            a: 'Con precios minoristas de España (Amazon.es, PcComponentes), una PC para IA local económica cuesta aproximadamente €1.250, una configuración media aproximadamente €2.500 y una configuración entusiasta 70B aproximadamente €5.200. Estas son instantáneas de julio de 2026 — la escasez de chips de memoria de 2026 empujó los precios de GPU a 1,5-2 veces por encima del precio de lista, y dado que la GPU es la línea más grande en cada configuración, elevó cada total respecto a los mismos componentes de hace un año. En Latinoamérica, los precios pueden variar según impuestos locales.',
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
            a: 'Compra la GPU usada cuando puedas y las demás partes nuevas. El aumento de 2026 empujó los precios de GPU nuevas a 1,5-2 veces por encima del precio de lista, pero el mercado de segunda mano evitó la mayor parte — una RTX 4060 Ti, RTX 4070 Ti Super o RTX 4090 usada con funcionamiento verificado reduce el total de la configuración significativamente. Las CPU, RAM, SSD y fuentes de alimentación es mejor comprarlas nuevas.',
          },
          {
            q: '¿Puede una configuración de GPU única ejecutar un modelo 70B?',
            a: 'Sí, la configuración entusiasta puede. Una RTX 5090 32 GB es la única tarjeta de consumo individual que cabe un modelo 70B en Q4, que necesita aproximadamente 39-42 GB de VRAM — por lo que ejecuta 70B con cuantización agresiva o descarga parcial a la RAM del sistema. Los 128 GB de RAM de la configuración entusiasta le dan a esa descarga el espacio que necesita.',
          },
          {
            q: '¿Vale la pena la configuración media respecto al costo extra sobre la económica?',
            a: 'Sí, si ejecutas modelos de clase 14B con regularidad. Las configuraciones económica y media caben modelos similares, pero la RTX 4070 Ti Super de la configuración media es mucho más rápida — los modelos 14B responden al instante en lugar de lentos, y el trabajo ligero con 22B-33B se vuelve usable. Si tu techo es firmemente modelos 7B-13B, la configuración económica ahorra más de €1.000 y es la mejor relación calidad-precio.',
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
          '[Elige la GPU para tu configuración con la guía de compra completa](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — ocho GPU en cuatro niveles de presupuesto, con precios de julio de 2026 y el cálculo del aumento.',
          '[Ve la configuración de workstation 70B de GPU dual para uso en producción](/es/local-llms/local-llm-workstation-build) — el nivel multiusuario de €4.000-6.000 más allá de la configuración entusiasta de esta guía.',
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
      description: 'Tres configuraciones completas de PC para IA local en 2026: económica 7B-13B, media 14B-33B y entusiasta 70B. Listas de componentes exactas, tokens por segundo esperados y costos totales de julio de 2026.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-ai-workstation-build-guide-2026',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-07-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  pt: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: 'Guia para montar um PC com IA local 2026: 3 níveis de orçamento',
    seoTitle: 'PC para IA local 2026: do básico à estação de trabalho 70B',
    intro:
      'A maioria dos guias para montar um PC com IA local começa pela CPU, mas é a GPU e sua VRAM que decide quais modelos a máquina pode executar — cada outra parte é escolhida para suportar essa GPU. Este guia oferece três listas de componentes completas para um PC dedicado a LLMs locais: uma configuração econômica para modelos 7B–13B, uma configuração intermediária para modelos 14B–33B e uma configuração entusiasta para trabalhar com modelos 70B. Cada nível inclui os componentes exatos, o desempenho esperado e o custo total. Uma ressalva sobre os preços: a escassez de chips de memória de 2026 empurrou os preços de GPUs para 1,5–2 vezes acima do preço de lista, o que eleva o custo de cada configuração aqui em relação aos mesmos componentes do ano passado — tome cada cifra como uma captura de maio de 2026 e aproveite o mercado de GPUs usadas quando puder.',
    metaDescription:
      'Três PCs para IA local em 2026: econômica 7B–13B, intermediária 14B–33B e entusiasta 70B. Listas de componentes exatas, tokens/s esperados e custos totais.',
    twitterDescription:
      'Guia para montar um PC com IA local: três níveis de orçamento com listas de componentes completas para modelos de 7B a 70B. O aumento de preços de GPU em 2026 encareceu cada configuração — aqui estão os totais de maio de 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**O melhor PC para IA local é o nível cuja VRAM de GPU se encaixa no seu modelo alvo. Com preços de varejo no Brasil (KaBuM!, Pichau, Mercado Livre), uma configuração econômica de ~R$ 11.500 executa modelos 7B–13B, uma configuração intermediária de ~R$ 15.000 executa modelos 14B–33B e uma configuração entusiasta de ~R$ 32.000 executa modelos 70B — com os preços de GPU de 2026 elevando cada total em relação ao ano anterior. Os preços no Brasil podem variar bastante devido a impostos de importação.**',
    quickAnswerTop: {
      pt: {
        question: 'Como monto um PC para executar LLMs locais em 2026?',
        answer:
          'Escolha seu nível com base no maior modelo que você quer executar e depois monte o PC ao redor da GPU. Uma configuração econômica (~R$ 11.500) combina uma RTX 4060 Ti 16 GB com uma CPU Ryzen 7 para modelos 7B–13B. Uma configuração intermediária (~R$ 15.000) usa uma RTX 4070 Ti Super 16 GB para modelos 14B–33B. Uma configuração entusiasta (~R$ 32.000) usa uma RTX 5090 32 GB para trabalho com 70B. A escassez de memória de 2026 elevou os preços de GPU bem acima do preço de lista, e os preços no Brasil podem variar bastante devido a impostos de importação, então cada total é uma captura de julho de 2026.',
        bullets: [
          'Configuração econômica ~R$ 11.500: RTX 4060 Ti 16 GB, executa modelos 7B–13B',
          'Configuração intermediária ~R$ 15.000: RTX 4070 Ti Super 16 GB, executa modelos 14B–33B',
          'Configuração entusiasta ~R$ 32.000: RTX 5090 32 GB, executa modelos 70B em Q4',
          'Os preços de GPU em 2026 são 1,5–2x o preço de lista — compre GPUs usadas quando puder',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Escolha do editor', anchor: '#editors-choice' },
      { label: 'Comparação de níveis', anchor: '#comparison-table' },
      { label: 'Qual configuração escolher?', anchor: '#which-build' },
      { label: 'Configuração econômica (~R$ 11.500)', anchor: '#budget-build' },
      { label: 'Configuração intermediária (~R$ 15.000)', anchor: '#mid-build' },
      { label: 'Configuração entusiasta (~R$ 32.000)', anchor: '#enthusiast-build' },
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
          '**Os preços de GPU de 2026 encareceram cada configuração.** Uma escassez de chips de memória empurrou os preços de GPU de 1,5–2 vezes acima do preço de lista. Os totais aqui são capturas de maio de 2026 e são mais altos do que os mesmos componentes do ano passado — aproveite o mercado de GPUs usadas.',
          '**Configuração econômica (~R$ 11.500):** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB de RAM, SSD de 1 TB, fonte de 650 W — executa modelos 7B–13B em velocidade utilizável. A máquina completa mais econômica para IA local.',
          '**Configuração intermediária (~R$ 15.000):** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB de RAM, SSD de 2 TB, fonte de 850 W — executa modelos 14B–33B e faz os modelos 7B–14B responderem instantaneamente.',
          '**Configuração entusiasta (~R$ 32.000):** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB de RAM, SSD de 4 TB, fonte de 1000 W — a única configuração de GPU única que cabe um modelo 70B em Q4.',
          '**A RAM não é um substituto para a VRAM.** A RAM do sistema permite que um modelo ultrapasse a VRAM, mas um modelo rodando a partir da RAM é lento demais para uso interativo. Compre VRAM suficiente para o modelo; compre RAM para o sistema operacional e as ferramentas.',
          '**A fonte de alimentação escala com a GPU.** Uma configuração econômica precisa de 650 W, a intermediária 850 W e a entusiasta 1000 W porque a RTX 5090 sozinha consome 575 W. Inclua a fonte no orçamento junto com a placa.',
          '**As GPUs usadas são a aposta de valor em 2026.** Uma RTX 4090 ou RTX 4060 Ti usada evita a maior parte do aumento de preços — compre uma placa usada com funcionamento verificado para manter o total da configuração baixo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Configuração econômica (~R$ 11.500):** GPU RTX 4060 Ti 16 GB — executa modelos 7B e a maioria dos 13B.',
          '**Configuração intermediária (~R$ 15.000):** GPU RTX 4070 Ti Super 16 GB — executa 14B confortavelmente, trabalho leve com 22B–33B.',
          '**Configuração entusiasta (~R$ 32.000):** GPU RTX 5090 32 GB — executa 33B confortavelmente e 70B em Q4.',
          '**Regra geral de VRAM em Q4_K_M:** aproximadamente 0,6 GB por bilhão de parâmetros, mais 2–4 GB para contexto e ferramentas.',
          '**Guia de RAM do sistema:** 32 GB para a configuração econômica, 64 GB para a intermediária, 128 GB para a entusiasta.',
          '**Fonte de alimentação por nível:** 650 W econômica, 850 W intermediária, 1000 W entusiasta — a RTX 5090 sozinha consome 575 W.',
          '**Realidade de preços em 2026:** os preços de GPU são 1,5–2 vezes o preço de lista por uma escassez de memória — confirme preços atuais e considere placas usadas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Escolha do editor: a configuração intermediária (~R$ 15.000)',
        sponsoredSlot: true,
        content:
          '**Para a maioria de quem monta um PC para IA local, a configuração intermediária é o nível que equilibra capacidade, custo e margem.** Construída ao redor de uma RTX 4070 Ti Super 16 GB, executa cada modelo 14B com espaço de contexto, lida com trabalho leve com 22B–33B e faz os modelos 7B–14B responderem instantaneamente — por cerca de R$ 15.000 no total. É a configuração que não vai te frustrar em meses e não precisará ser substituída em um ano. Desça para a configuração econômica apenas se o seu teto for firmemente modelos 7B–13B; suba para a entusiasta apenas se precisar especificamente de trabalho com 70B.',
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
            priceRange: '1150-1200',
            label: 'Ver preço da RTX 4070 Ti Super na Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Ver preço da RTX 4070 Ti Super na Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Como os três níveis de configuração se comparam em 2026',
        content:
          'As cifras de VRAM e potência da GPU são especificações do fabricante. As velocidades de inferência são estimativas a nível de família de modelos dos testes de GPU do PromptQuorum para a GPU do nível correspondente. Os totais de configuração são capturas de varejo no Brasil (KaBuM!, Pichau, Mercado Livre) de julho de 2026 — o aumento de preços de GPU de 2026 empurrou as placas para 1,5–2 vezes o preço de lista, então a linha de GPU domina cada total e varia semana a semana. Comprar a GPU usada reduz cada total. Os preços no Brasil podem variar bastante devido a impostos de importação.',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: 'Comparação dos níveis de PC para IA local em 2026: configuração econômica RTX 4060 Ti 16 GB (~US$ 1.100) para modelos 7B-13B, configuração intermediária RTX 4070 Ti Super 16 GB (~US$ 2.400) para modelos 14B-33B, configuração entusiasta RTX 5090 32 GB (~US$ 5.000) para modelos 33B-70B.',
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
        columns: ['Nível', 'GPU', 'VRAM', 'Executa', 'Fonte', 'Total (julho 2026)'],
        rows: [
          {
            'Nível': 'Econômica',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Executa': 'modelos 7B–13B',
            'Fonte': '650 W',
            'Total (julho 2026)': '~R$ 11.500',
          },
          {
            'Nível': 'Intermediária',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Executa': '14B confortavelmente, 22B–33B leve',
            'Fonte': '850 W',
            'Total (julho 2026)': '~R$ 15.000',
          },
          {
            'Nível': 'Entusiasta',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Executa': '33B confortavelmente, 70B em Q4',
            'Fonte': '1000 W',
            'Total (julho 2026)': '~R$ 32.000',
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
          { 'Sua situação': 'Executo modelos 7B–13B e quero a máquina completa mais econômica', 'Monte esta': 'Configuração econômica (~R$ 11.500)' },
          { 'Sua situação': 'Quero um primeiro PC para IA local e não sei até onde vou', 'Monte esta': 'Configuração econômica, ou a intermediária para ter margem' },
          { 'Sua situação': 'Executo modelos 14B constantemente e os quero instantâneos', 'Monte esta': 'Configuração intermediária (~R$ 15.000)' },
          { 'Sua situação': 'Faço trabalho leve com 22B–33B e quero uma máquina duradoura', 'Monte esta': 'Configuração intermediária (~R$ 15.000)' },
          { 'Sua situação': 'Executo modelos 33B intensivamente ou quero muita margem futura', 'Monte esta': 'Configuração entusiasta (~R$ 32.000)' },
          { 'Sua situação': 'Preciso de uma máquina de GPU única que execute modelos 70B em Q4', 'Monte esta': 'Configuração entusiasta (~R$ 32.000)' },
          { 'Sua situação': 'Quero manter o total baixo apesar do aumento de 2026', 'Monte esta': 'Qualquer nível — compre a GPU usada' },
          { 'Sua situação': 'Não tenho certeza e quero a configuração mais segura para conservar por anos', 'Monte esta': 'Configuração intermediária — a escolha do editor' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'Configuração econômica (~R$ 11.500): RTX 4060 Ti 16 GB',
        content:
          '**A configuração econômica é o PC completo para IA local mais barato e executa cada modelo 7B e a maioria dos modelos 13B — capacidade suficiente para a maioria dos usuários pela primeira vez.** É construída ao redor da RTX 4060 Ti 16 GB, a GPU menos inflacionada pelo aumento de 2026, o que mantém o total em uma faixa razoável.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB (~R$ 5.900–7.000):** 16 GB de VRAM, 165 W. Executa modelos 7B a aproximadamente 20–25 tok/s e cabe modelos 14B com margem de contexto. A capacidade de 16 GB é a razão para escolhê-la sobre a versão de 8 GB.',
          '**CPU — AMD Ryzen 7 7700 (~R$ 1.500–1.900):** 8 núcleos, consumo de energia moderado. A CPU faz pouco trabalho durante a inferência de GPU, então um chip de gama intermediária é correto aqui.',
          '**Placa-mãe — chipset B650 (~R$ 900–1.400):** suporta o Ryzen 7 e uma GPU de tamanho completo em PCIe.',
          '**RAM — 32 GB DDR5 (~R$ 900–1.400):** suficiente para o sistema operacional, as ferramentas e um modelo 7B–13B rodando na VRAM.',
          '**Armazenamento — SSD NVMe de 1 TB (~R$ 500–800):** contém o sistema operacional e vários modelos (um modelo 7B Q4 pesa aproximadamente 4–5 GB).',
          '**Fonte de alimentação — 650 W 80+ Gold (~R$ 400–650):** margem confortável para uma GPU de 165 W e uma CPU de 8 núcleos.',
          '**Gabinete e resfriamento — torre média com cooler de ar tipo torre (~R$ 450–800):** o nível econômico gera pouco calor; o resfriamento por ar é suficiente.',
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
            priceRange: '420-450',
            label: 'Ver preço da RTX 4060 Ti 16GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'Ver preço do Ryzen 7 7700 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: 'Ver preço da RAM DDR5 32 GB na Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'Configuração intermediária (~R$ 15.000): RTX 4070 Ti Super 16 GB',
        content:
          '**A configuração intermediária é a escolha do editor — executa modelos 14B instantaneamente, lida com trabalho leve com 22B–33B e é o nível que você monta para conservar.** É construída ao redor da RTX 4070 Ti Super 16 GB, rápida o suficiente para que a latência de resposta deixe de ser perceptível em modelos de classe 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB (~R$ 6.500–8.000):** 16 GB de VRAM, 285 W. A mesma capacidade de modelo que o nível econômico, mas muito mais rápida — os modelos 7B–14B respondem instantaneamente e o trabalho leve com 22B–33B é utilizável.',
          '**CPU — AMD Ryzen 9 7900X (~R$ 2.200–2.800):** 12 núcleos. Mais margem que a CPU econômica para preparação de dados e execução de ferramentas junto à inferência.',
          '**Placa-mãe — chipset B650 ou X670 (~R$ 1.400–2.200):** fornecimento de energia sólido para a CPU de 12 núcleos e uma GPU de 285 W.',
          '**RAM — 64 GB DDR5 (~R$ 1.800–2.800):** espaço para o sistema operacional, janelas de contexto maiores e ferramentas como um pipeline RAG rodando junto ao modelo.',
          '**Armazenamento — SSD NVMe de 2 TB (~R$ 900–1.500):** contém uma biblioteca de modelos considerável — um modelo 33B Q4 pesa aproximadamente 18–20 GB.',
          '**Fonte de alimentação — 850 W 80+ Gold (~R$ 700–1.100):** margem confortável para a GPU de 285 W e a CPU de 12 núcleos sob carga sustentada.',
          '**Gabinete e resfriamento — torre média com AIO de 240–280 mm ou cooler de ar de alta qualidade (~R$ 800–1.500):** o nível intermediário gera calor moderado; um cooler de qualidade mantém a CPU estável durante longas sessões de inferência.',
          '**Por que montar este nível:** você executa modelos 14B constantemente e os quer instantâneos, ou faz trabalho leve com 22B–33B e quer margem. **Por que pulá-lo:** se 7B–13B é suficiente, a configuração econômica economiza vários milhares de reais; se você precisar de 70B, nenhuma GPU de 16 GB o cabe — passe para a entusiasta.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'A configuração intermediária cabe nos mesmos modelos que a configuração econômica — você está pagando por velocidade, não por capacidade. Monte este nível se os modelos 14B serão uma carga de trabalho diária e esperar neles te incomodaria.',
          },
          {
            type: 'note',
            text: 'Uma RTX 4090 24 GB usada às vezes é vendida próximo ao preço de uma RTX 4070 Ti Super nova após o aumento de 2026. Se encontrar uma com funcionamento verificado, adiciona 8 GB de VRAM e alcança modelos 33B — vale a pena verificar antes de comprar a 4070 Ti Super.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Ver preço da RTX 4070 Ti Super na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'Ver preço do Ryzen 9 7900X na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: 'Ver preço da RAM DDR5 64 GB na Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'Configuração entusiasta (~R$ 32.000): RTX 5090 32 GB',
        content:
          '**A configuração entusiasta é a única máquina de GPU única que cabe um modelo 70B em Q4 — sua RTX 5090 32 GB é a peça central.** Monte este nível pela capacidade de VRAM, não pela velocidade bruta; a velocidade é um efeito colateral. O aumento de 2026 atingiu este nível com mais força, então a linha de GPU domina e varia semana a semana.',
        items: [
          '**GPU — RTX 5090 32 GB (~R$ 18.000–22.000):** 32 GB de VRAM GDDR7, 575 W. A única placa de consumo que executa um modelo 70B em Q4 sem uma configuração de GPU dupla.',
          '**CPU — AMD Ryzen 9 7950X (~R$ 3.200–4.200):** 16 núcleos. Suficiente para executar preparação de dados, experimentos de fine-tuning e ferramentas junto à inferência pesada.',
          '**Placa-mãe — chipset X670E (~R$ 2.200–3.500):** fornecimento de energia robusto e PCIe 5.0, dimensionado para uma GPU de 575 W e a CPU de 16 núcleos.',
          '**RAM — 128 GB DDR5 (~R$ 3.800–5.500):** espaço para janelas de contexto grandes, múltiplos modelos carregados ao mesmo tempo e ferramentas — e a margem para descarregar um modelo parcialmente para a RAM se necessário.',
          '**Armazenamento — SSD NVMe de 4 TB (~R$ 1.900–3.000):** um modelo 70B Q4 pesa aproximadamente 40 GB; uma unidade de 4 TB contém uma grande biblioteca de modelos grandes.',
          '**Fonte de alimentação — 1000 W 80+ Platinum (~R$ 1.100–1.800):** necessária porque a RTX 5090 sozinha consome 575 W — uma unidade de 750 W seria superada sob carga. Não subestime esta parte.',
          '**Gabinete e resfriamento — gabinete de tamanho completo com AIO de 360 mm (~R$ 1.500–2.800):** a GPU de 575 W e a CPU de 16 núcleos geram calor real; um resfriador líquido de 360 mm mantém a CPU estável durante inferência 70B sustentada.',
          '**Por que montar este nível:** você precisa de modelos 33B ou 70B, executa inferência em lote intensa ou quer uma máquina que não precise ser substituída por anos. **Por que pulá-lo:** para modelos 7B–14B é exagero — a configuração intermediária oferece respostas instantâneas nesses tamanhos por menos da metade do custo.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A RTX 5090 consome 575 W sozinha. Combine-a com a fonte de 1000 W desta lista de componentes — uma unidade menor vai colapsar sob carga. Confirme que o circuito da sua parede consegue fornecer o consumo total antes de montar.',
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
            priceRange: '3650-3900',
            label: 'Ver preço da RTX 5090 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'Ver preço do Ryzen 9 7950X na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: 'Ver preço da fonte 1000 W na Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Como o aumento de preços de 2026 muda os cálculos da montagem',
        content:
          '**A escassez de chips de memória de 2026 empurrou os preços de GPU para 1,5–2 vezes acima do preço de lista, e como a GPU é a linha mais cara em cada configuração, elevou cada total em relação ao ano anterior.** Planeje a configuração ao redor dos preços atuais, não dos preços de lançamento.',
        items: [
          '**A GPU domina o total.** Nos três níveis, a GPU é o custo individual mais alto — o aumento muda o total da configuração mais do que qualquer outra parte.',
          '**A causa é a memória, não as GPUs.** Uma escassez de fornecimento de GDDR e HBM elevou o custo de cada placa com memória rápida; quanto mais VRAM, mais forte foi o impacto. A RTX 5090 tinha preço de lançamento de US$ 1.999 (MSRP nos EUA) e hoje custa aproximadamente R$ 18.000–22.000 no varejo brasileiro. Os preços no Brasil podem variar bastante devido a impostos de importação.',
          '**As GPUs de gama baixa resistiram melhor.** A RTX 4060 Ti 16 GB está próxima do seu preço de lista, por isso o total da configuração econômica se moveu menos.',
          '**As GPUs usadas são a aposta de valor.** Uma RTX 4060 Ti ou RTX 4090 usada evita a maior parte do aumento — comprar uma placa usada com funcionamento verificado é a forma mais simples de reduzir o total da configuração.',
          '**As partes que não são GPU se moveram menos.** Os preços de CPU, placa-mãe, SSD e fonte de alimentação subiram moderadamente; a RAM DDR5 também se apertou com a escassez de memória, mas a GPU continua sendo a linha a observar.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A escassez de memória de 2026 empurrou os preços de GPU para 1,5–2 vezes o preço de lista, elevando o total de cada configuração de IA local porque a GPU é a linha individual mais cara na lista de componentes.',
          },
          {
            type: 'plain-terms',
            text: 'A GPU é a parte mais cara da máquina, e em 2026 a GPU é a parte que ficou mais cara. Até que a escassez de memória diminua, trate os preços de lançamento como história, compre a GPU de segunda mão quando puder e não compre mais VRAM do que o seu modelo precisa.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Fluxograma de decisão: escolha sua configuração em quatro perguntas',
        content:
          '**Quatro perguntas, em ordem, levam a maioria dos montadores a um nível.**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: 'Árvore de decisão para escolher uma configuração de PC para IA local pelo tamanho do modelo: modelos 7B-13B levam à configuração econômica (~US$ 1.100), modelos 14B-33B à configuração intermediária (~US$ 2.400), modelos 70B à configuração entusiasta (~US$ 5.000).',
        items: [
          '**1. Qual é o maior modelo que você quer executar?** 7B–13B: configuração econômica. 14B–33B: configuração intermediária. 70B: configuração entusiasta.',
          '**2. Qual é o seu teto de orçamento estrito?** Em torno de R$ 11.500: configuração econômica. Em torno de R$ 15.000: configuração intermediária. Em torno de R$ 32.000: configuração entusiasta.',
          '**3. GPU nova ou usada?** Uma GPU usada com funcionamento verificado evita a maior parte do aumento de 2026 — escolha usada para baixar o total de qualquer nível.',
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
          '**Os grandes varejistas têm cada peça dessas configurações; o mercado de segunda mão é a fonte de valor especificamente para a GPU.** Os links abaixo são links simples de pesquisa de produtos; não carregam tags de afiliado e não geram comissão.',
        items: [
          '**Amazon e Newegg:** o estoque mais amplo de CPUs, RAMs, SSDs, fontes de alimentação e gabinetes. O estoque de GPU novas é mais escasso e tem o preço do aumento de 2026.',
          '**Mercado de GPUs usadas:** o melhor valor para a linha de GPU — uma RTX 4060 Ti, RTX 4070 Ti Super ou RTX 4090 usada com funcionamento verificado evita a maior parte do aumento.',
          '**Mercado Livre e lojas locais de tecnologia:** boas fontes no Brasil para CPUs, placas-mãe e fontes de alimentação; também úteis para bundles de CPU + placa-mãe.',
          '**Compre a GPU primeiro.** É a linha mais grande e mais volátil — garanta a GPU a um preço que você aceite, depois compre as peças de suporte ao redor dela.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Devido ao aumento de preços de GPU de 2026, cada total neste guia é uma captura de maio de 2026 que se move rapidamente. Sempre abra o anúncio atual do varejista para a GPU antes de montar — seu preço variou semana a semana e domina o custo da configuração.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'Explorar GPUs na Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'Explorar CPUs Ryzen na Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'Explorar RAM DDR5 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'Explorar SSD NVMe na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**Ancorar no preço de lista da GPU.** O aumento de 2026 significa que os preços de lançamento não refletem mais a realidade. Faça o orçamento da GPU com o preço atual do varejista e considere o mercado de segunda mão.',
          '**Comprar a RTX 4060 Ti de 8 GB para a configuração econômica.** Compartilha o nome com a versão de 16 GB, mas não consegue acomodar um modelo 14B. Confirme a variante de 16 GB no anúncio.',
          '**Superdimensionar para modelos 7B.** Se os modelos 7B cobrem seu caso de uso, a configuração entusiasta desperdiça milhares de dólares e centenas de watts. Ajuste o nível ao modelo, não ao orçamento que você acidentalmente tem.',
          '**Pular o planejamento do gabinete e do resfriamento.** Uma GPU de 575 W mais uma CPU de 16 núcleos gera calor real. Confirme que o gabinete cabe a GPU e o cooler e tem fluxo de ar antes de pedir as peças.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Melhor guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: preços de GPU de maio de 2026 e o aumento de 1,5–2 vezes acima do preço de lista usado para os totais de configuração aqui.',
          '[Montagem de workstation para LLM local](/pt/local-llms/local-llm-workstation-build) — PromptQuorum: lista de componentes, resfriamento e guia de fonte de alimentação para a workstation 70B de GPU dupla por trás do nível entusiasta.',
          '[Especificações da NVIDIA GeForce RTX série 40 e 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Cifras oficiais de capacidade de VRAM e potência (TGP) para a RTX 4060 Ti, 4070 Ti Super e 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Preços de componentes ao vivo para CPU AMD Ryzen, RAM DDR5, SSD NVMe e fontes de alimentação em maio de 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Quanto custa montar um PC para IA local em 2026?',
            a: 'Com preços de varejo no Brasil (KaBuM!, Pichau, Mercado Livre), um PC para IA local econômico custa aproximadamente R$ 11.500, uma configuração intermediária aproximadamente R$ 15.000 e uma configuração entusiasta 70B aproximadamente R$ 32.000. Essas são capturas de julho de 2026 — a escassez de chips de memória de 2026 empurrou os preços de GPU para 1,5–2 vezes acima do preço de lista, e como a GPU é a linha mais cara em cada configuração, elevou cada total em relação aos mesmos componentes do ano passado. Os preços no Brasil podem variar bastante devido a impostos de importação.',
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
            a: 'Compre a GPU usada quando puder e as demais partes novas. O aumento de 2026 empurrou os preços de GPU novas para 1,5–2 vezes acima do preço de lista, mas o mercado de segunda mão evitou a maior parte — uma RTX 4060 Ti, RTX 4070 Ti Super ou RTX 4090 usada com funcionamento verificado reduz o total da configuração significativamente. CPUs, RAM, SSDs e fontes de alimentação é melhor comprar novas.',
          },
          {
            q: 'Uma configuração de GPU única pode executar um modelo 70B?',
            a: 'Sim, a configuração entusiasta pode. Uma RTX 5090 32 GB é a única placa de consumo individual que cabe um modelo 70B em Q4, que precisa de aproximadamente 39–42 GB de VRAM — então executa 70B com quantização agressiva ou descarga parcial para a RAM do sistema. Os 128 GB de RAM da configuração entusiasta dão a essa descarga o espaço que ela precisa.',
          },
          {
            q: 'Vale a pena a configuração intermediária em relação ao custo extra sobre a econômica?',
            a: 'Sim, se você executa modelos de classe 14B regularmente. As configurações econômica e intermediária acomodam modelos similares, mas a RTX 4070 Ti Super da configuração intermediária é muito mais rápida — os modelos 14B respondem instantaneamente em vez de lentos, e o trabalho leve com 22B–33B se torna utilizável. Se o seu teto é firmemente modelos 7B–13B, a configuração econômica economiza vários milhares de reais e é o melhor custo-benefício.',
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
          '[Escolha a GPU para sua configuração com o guia de compra completo](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — oito GPUs em quatro níveis de orçamento, com preços de maio de 2026 e o cálculo do aumento.',
          '[Veja a configuração de workstation 70B de GPU dupla para uso em produção](/pt/local-llms/local-llm-workstation-build) — o nível multiusuário de R$ 26.000–40.000 além da configuração entusiasta deste guia.',
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
      description: 'Três configurações completas de PC para IA local em 2026: econômica 7B–13B, intermediária 14B–33B e entusiasta 70B. Listas de componentes exatas, tokens por segundo esperados e custos totais de maio de 2026.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-ai-workstation-build-guide-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-07-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },

  ar: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: 'دليل بناء محطة عمل الذكاء الاصطناعي المحلي ⁨2026⁩: ⁨3⁩ مستويات ميزانية',
    seoTitle: 'بناء حاسوب ⁨LLM⁩ محلي ⁨2026⁩: ⁨3⁩ مستويات من ⁨7B⁩ حتى ⁨70B⁩',
    intro:
      'معظم أدلة بناء حاسوب للذكاء الاصطناعي المحلي تبدأ بالمعالج، لكن الـGPU وذاكرة VRAM الخاصة بها هي التي تحدد النماذج التي يستطيع الجهاز تشغيلها — وكل قطعة أخرى تُختار لدعم تلك الـGPU. يُقدّم هذا الدليل ثلاث قوائم مكوّنات كاملة لحاسوب مخصص لنماذج LLM المحلية: إعداد اقتصادي لنماذج 7B–13B، وإعداد متوسط لنماذج 14B–33B، وإعداد متحمس للعمل مع نماذج 70B. كل مستوى يتضمن المكوّنات الدقيقة والأداء المتوقع والتكلفة الإجمالية.',
    metaDescription:
      '3 قوائم مكوّنات كاملة لحاسوب LLM محلي 2026: مستوى اقتصادي لنماذج 7B–13B ومتوسط لـ 14B–33B ومتحمس لـ 70B. أداء توكن/ثانية وتكاليف يوليو 2026.',
    twitterDescription:
      'دليل بناء حاسوب للذكاء الاصطناعي المحلي: ثلاثة مستويات ميزانية بقوائم مكوّنات كاملة لنماذج من 7B إلى 70B. إليك إجماليات يوليو 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**أفضل حاسوب للذكاء الاصطناعي المحلي هو المستوى الذي تتناسب فيه VRAM الـGPU مع نموذجك المستهدف. الإعداد الاقتصادي بـ~1100 دولار يُشغّل نماذج 7B–13B، والمتوسط بـ~2400 دولار يُشغّل نماذج 14B–33B، والمتحمس بـ~5000 دولار يُشغّل نماذج 70B — مع أسعار GPU 2026 التي رفعت كل إجمالي عن العام السابق.**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبني حاسوباً لتشغيل نماذج LLM المحلية في 2026؟',
        answer:
          'اختر مستواك بناءً على أكبر نموذج تريد تشغيله ثم ابنِ الحاسوب حول الـGPU. الإعداد الاقتصادي (~1100 دولار) يجمع RTX 4060 Ti 16 GB مع معالج Ryzen 7 لنماذج 7B–13B. الإعداد المتوسط (~2400 دولار) يستخدم RTX 4070 Ti Super 16 GB لنماذج 14B–33B. الإعداد المتحمس (~5000 دولار) يستخدم RTX 5090 32 GB للعمل مع 70B. شحّ الذاكرة في 2026 رفع أسعار GPU بشكل كبير، لذا كل إجمالي هو لقطة من يوليو 2026.',
        bullets: [
          'الإعداد الاقتصادي ~1100 دولار: RTX 4060 Ti 16 GB، يُشغّل نماذج 7B–13B.',
          'الإعداد المتوسط ~2400 دولار: RTX 4070 Ti Super 16 GB، يُشغّل نماذج 14B–33B.',
          'الإعداد المتحمس ~5000 دولار: RTX 5090 32 GB، يُشغّل نماذج 70B في Q4.',
          'أسعار GPU في 2026 أضعاف السعر الاسمي — اشتر GPU مستعملة إن أمكن.',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'اختيار المحرر', anchor: '#editors-choice' },
      { label: 'مقارنة المستويات', anchor: '#comparison-table' },
      { label: 'أي إعداد تختار؟', anchor: '#which-build' },
      { label: 'الإعداد الاقتصادي (~1100 دولار)', anchor: '#budget-build' },
      { label: 'الإعداد المتوسط (~2400 دولار)', anchor: '#mid-build' },
      { label: 'الإعداد المتحمس (~5000 دولار)', anchor: '#enthusiast-build' },
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
          '**أسعار GPU في 2026 رفعت كل إعداد.** شحّ رقائق الذاكرة دفع أسعار GPU إلى 1.5–2 ضعف السعر الاسمي. الإجماليات هنا لقطات من يوليو 2026 وأعلى من نفس المكوّنات العام الماضي — استفد من سوق GPU المستعملة.',
          '**الإعداد الاقتصادي (~1100 دولار):** RTX 4060 Ti 16 GB وRyzen 7 7700 و32 جيجابايت RAM وSSD 1 تيرابايت ومزوّد 650 واط — يُشغّل نماذج 7B–13B بسرعة مقبولة.',
          '**الإعداد المتوسط (~2400 دولار):** RTX 4070 Ti Super 16 GB وRyzen 9 7900X و64 جيجابايت RAM وSSD 2 تيرابايت ومزوّد 850 واط — يُشغّل نماذج 14B–33B ويجعل نماذج 7B–14B تستجيب فوراً.',
          '**الإعداد المتحمس (~5000 دولار):** RTX 5090 32 GB وRyzen 9 7950X و128 جيجابايت RAM وSSD 4 تيرابايت ومزوّد 1000 واط — الإعداد الوحيد بـGPU واحدة الذي يستوعب نموذج 70B في Q4.',
          '**RAM النظام ليست بديلاً عن VRAM.** تتيح RAM النظام للنموذج تجاوز VRAM، لكن نموذجاً يعمل من RAM بطيء جداً للاستخدام التفاعلي. اشترِ VRAM كافية في الـGPU للنموذج؛ اشترِ RAM للنظام التشغيلي والأدوات.',
          '**المزوّد يتدرج مع الـGPU.** الإعداد الاقتصادي يحتاج 650 واطاً، والمتوسط 850 واطاً، والمتحمس 1000 واط لأن RTX 5090 وحدها تستهلك 575 واطاً. اشمل المزوّد في الميزانية مع الـGPU.',
          '**GPU المستعملة هي رهان القيمة في 2026.** RTX 4090 أو RTX 4060 Ti مستعملة تتجنب معظم ارتفاع الأسعار — اشترِ GPU مستعملة بعمل مُتحقق منه لإبقاء إجمالي الإعداد منخفضاً.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الإعداد الاقتصادي (~1100 دولار):** GPU RTX 4060 Ti 16 GB — يُشغّل نماذج 7B ومعظم نماذج 13B.',
          '**الإعداد المتوسط (~2400 دولار):** GPU RTX 4070 Ti Super 16 GB — يُشغّل 14B بارتياح وعمل خفيف مع 22B–33B.',
          '**الإعداد المتحمس (~5000 دولار):** GPU RTX 5090 32 GB — يُشغّل 33B بارتياح و70B في Q4.',
          '**قاعدة VRAM في Q4_K_M:** حوالي 0.6 جيجابايت لكل مليار معامل، بالإضافة إلى 2–4 جيجابايت للسياق والأدوات.',
          '**دليل RAM النظام:** 32 جيجابايت للاقتصادي، 64 جيجابايت للمتوسط، 128 جيجابايت للمتحمس.',
          '**المزوّد لكل مستوى:** 650 واط للاقتصادي، 850 واط للمتوسط، 1000 واط للمتحمس — RTX 5090 وحدها تستهلك 575 واطاً.',
          '**واقع أسعار 2026:** أسعار GPU ضعف إلى ضعفين السعر الاسمي بسبب شحّ الذاكرة — تحقق من الأسعار الحالية وفكّر في GPU مستعملة.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'اختيار المحرر: الإعداد المتوسط (~2400 دولار)',
        sponsoredSlot: true,
        content:
          '**لمعظم من يبنون حاسوباً للذكاء الاصطناعي المحلي، الإعداد المتوسط هو المستوى الذي يوازن القدرة والتكلفة والهامش.** مبني حول RTX 4070 Ti Super 16 GB، يُشغّل كل نموذج 14B بمساحة سياق، ويتعامل مع العمل الخفيف مع 22B–33B، ويجعل نماذج 7B–14B تستجيب فوراً — بحوالي 2400 دولار إجمالاً. إنه الإعداد الذي لن يُحبطك خلال أشهر ولن يحتاج استبدالاً خلال عام. انزل للاقتصادي فقط إن كانت نماذج 7B–13B حدّك الصارم؛ ارتفع للمتحمس فقط إن كنت تحتاج تحديداً العمل مع نماذج 70B.',
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
            priceRange: '1150-1200',
            label: 'شاهد سعر RTX 4070 Ti Super على Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'شاهد سعر RTX 4070 Ti Super على Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'كيف تتقاطع المستويات الثلاثة في 2026',
        content:
          'أرقام VRAM وطاقة الـGPU هي مواصفات الشركة المصنّعة. سرعات الاستدلال تقديرات على مستوى عائلة النماذج من اختبارات PromptQuorum للـGPU. الإجماليات لقطات بالدولار الأمريكي من يوليو 2026.',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: 'مقارنة مستويات أجهزة الذكاء الاصطناعي المحلي لعام 2026: الإعداد الاقتصادي RTX 4060 Ti بذاكرة 16 جيجابايت (~1,100 دولار) لنماذج 7B-13B، الإعداد المتوسط RTX 4070 Ti Super بذاكرة 16 جيجابايت (~2,400 دولار) لنماذج 14B-33B، إعداد الهواة RTX 5090 بذاكرة 32 جيجابايت (~5,000 دولار) لنماذج 33B-70B.',
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
        columns: ['المستوى', 'GPU', 'VRAM', 'يُشغّل', 'المزوّد', 'الإجمالي (يوليو 2026)'],
        rows: [
          {
            'المستوى': 'اقتصادي',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 جيجابايت',
            'يُشغّل': 'نماذج 7B–13B',
            'المزوّد': '650 واط',
            'الإجمالي (يوليو 2026)': '~1100 دولار',
          },
          {
            'المستوى': 'متوسط',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 جيجابايت',
            'يُشغّل': '14B بارتياح، 22B–33B خفيف',
            'المزوّد': '850 واط',
            'الإجمالي (يوليو 2026)': '~2400 دولار',
          },
          {
            'المستوى': 'متحمس',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 جيجابايت',
            'يُشغّل': '33B بارتياح، 70B في Q4',
            'المزوّد': '1000 واط',
            'الإجمالي (يوليو 2026)': '~5000 دولار',
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
          { 'وضعك': 'أُشغّل نماذج 7B–13B وأريد أرخص حاسوب كامل', 'ابنِ هذا': 'الإعداد الاقتصادي (~1100 دولار)' },
          { 'وضعك': 'أريد أول حاسوب للذكاء الاصطناعي ولا أعرف إلى أين سأصل', 'ابنِ هذا': 'الاقتصادي، أو المتوسط لهامش أكبر' },
          { 'وضعك': 'أُشغّل نماذج 14B باستمرار وأريدها فورية', 'ابنِ هذا': 'الإعداد المتوسط (~2400 دولار)' },
          { 'وضعك': 'أعمل خفيفاً مع 22B–33B وأريد جهازاً يدوم', 'ابنِ هذا': 'الإعداد المتوسط (~2400 دولار)' },
          { 'وضعك': 'أُشغّل نماذج 33B بكثافة أو أريد هامشاً مستقبلياً كبيراً', 'ابنِ هذا': 'الإعداد المتحمس (~5000 دولار)' },
          { 'وضعك': 'أحتاج جهاز GPU واحد يُشغّل نماذج 70B في Q4', 'ابنِ هذا': 'الإعداد المتحمس (~5000 دولار)' },
          { 'وضعك': 'أريد إبقاء الإجمالي منخفضاً رغم ارتفاع 2026', 'ابنِ هذا': 'أي مستوى — اشترِ الـGPU مستعملة' },
          { 'وضعك': 'لست متأكداً وأريد الإعداد الأكثر أماناً للحفاظ عليه لسنوات', 'ابنِ هذا': 'الإعداد المتوسط — اختيار المحرر' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: 'الإعداد الاقتصادي (~1100 دولار): RTX 4060 Ti 16 GB',
        content:
          '**الإعداد الاقتصادي هو أرخص حاسوب كامل للذكاء الاصطناعي المحلي ويُشغّل كل نموذج 7B ومعظم نماذج 13B — قدرة كافية لمعظم المستخدمين لأول مرة.** مبني حول RTX 4060 Ti 16 GB، أقل GPU تأثراً بارتفاع 2026، مما يُبقي الإجمالي في نطاق معقول.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB (~420–450 دولار):** 16 جيجابايت VRAM، 165 واط. يُشغّل نماذج 7B بـ~20–25 رمز/ثانية ويستوعب نماذج 14B بهامش سياق. سعة 16 جيجابايت هي سبب اختيارها على إصدار 8 جيجابايت.',
          '**المعالج — AMD Ryzen 7 7700 (~250–280 دولار):** 8 أنوية، استهلاك طاقة معتدل. المعالج يؤدي عملاً قليلاً أثناء الاستدلال بالـGPU، لذا شريحة متوسطة المستوى مناسبة هنا.',
          '**اللوحة الأم — شرائح B650 (~130–160 دولار):** تدعم Ryzen 7 وGPU كاملة الحجم عبر PCIe.',
          '**RAM — 32 جيجابايت DDR5 (~90–120 دولار):** كافية للنظام التشغيلي والأدوات ونموذج 7B–13B يعمل في VRAM.',
          '**التخزين — SSD NVMe 1 تيرابايت (~70–90 دولار):** يحتوي النظام التشغيلي ونماذج متعددة (نموذج 7B Q4 يزن حوالي 4–5 جيجابايت).',
          '**المزوّد — 650 واط 80+ Gold (~80–100 دولار):** هامش مريح لـGPU 165 واط ومعالج 8 أنوية.',
          '**الهيكل والتبريد — برج متوسط مع مبرّد هواء (~80–120 دولار):** المستوى الاقتصادي يولّد حرارة قليلة؛ التبريد الهوائي كافٍ.',
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
            priceRange: '420-450',
            label: 'شاهد سعر RTX 4060 Ti 16GB على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'شاهد سعر Ryzen 7 7700 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: 'شاهد سعر RAM DDR5 32 جيجابايت على Amazon',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: 'الإعداد المتوسط (~2400 دولار): RTX 4070 Ti Super 16 GB',
        content:
          '**الإعداد المتوسط هو اختيار المحرر — يُشغّل نماذج 14B فوراً، ويتعامل مع العمل الخفيف مع 22B–33B، وهو المستوى الذي تبنيه للإبقاء عليه.** مبني حول RTX 4070 Ti Super 16 GB، سريع بما يكفي لأن تتوقف كمون الاستجابة عن الملاحظة مع نماذج فئة 14B.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB (~1150–1200 دولار):** 16 جيجابايت VRAM، 285 واط. نفس قدرة النموذج مع المستوى الاقتصادي لكن أسرع بكثير — نماذج 7B–14B تستجيب فوراً والعمل الخفيف مع 22B–33B قابل للاستخدام.',
          '**المعالج — AMD Ryzen 9 7900X (~330–370 دولار):** 12 نواة. هامش أكبر من المعالج الاقتصادي لتحضير البيانات وتشغيل الأدوات جانباً للاستدلال.',
          '**اللوحة الأم — شرائح B650 أو X670 (~180–240 دولار):** إمداد طاقة قوي لمعالج 12 نواة وGPU 285 واط.',
          '**RAM — 64 جيجابايت DDR5 (~180–230 دولار):** مساحة للنظام التشغيلي ونوافذ سياق أكبر وأدوات كـpipeline RAG يعمل جانباً للنموذج.',
          '**التخزين — SSD NVMe 2 تيرابايت (~130–170 دولار):** يحتوي مكتبة نماذج كبيرة — نموذج 33B Q4 يزن حوالي 18–20 جيجابايت.',
          '**المزوّد — 850 واط 80+ Gold (~120–150 دولار):** هامش مريح لـGPU 285 واط ومعالج 12 نواة تحت حمل مستمر.',
          '**الهيكل والتبريد — برج متوسط مع AIO 240–280 مم أو مبرّد هواء عالي الجودة (~150–220 دولار):** المستوى المتوسط يولّد حرارة معتدلة؛ مبرّد جيد يُبقي المعالج مستقراً أثناء جلسات استدلال طويلة.',
          '**لماذا تبني هذا المستوى:** تُشغّل نماذج 14B باستمرار وتريدها فورية، أو تعمل خفيفاً مع 22B–33B وتريد هامشاً. **لماذا تتجاوزه:** إن كانت نماذج 7B–13B كافية، الإعداد الاقتصادي يوفر أكثر من 1000 دولار؛ إن احتجت نماذج 70B، لا GPU 16 جيجابايت تستوعبها — انتقل للمتحمس.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'الإعداد المتوسط يستوعب نفس النماذج مع الإعداد الاقتصادي — أنت تدفع للسرعة لا للقدرة. ابنِ هذا المستوى إن كانت نماذج 14B عبئاً يومياً والانتظار عليها سيزعجك.',
          },
          {
            type: 'note',
            text: 'RTX 4090 24 GB مستعملة تُباع أحياناً بقرب سعر RTX 4070 Ti Super جديدة بعد ارتفاع 2026. إن وجدت واحدة بعمل مُتحقق منه، تُضيف 8 جيجابايت VRAM وتصل لنماذج 33B — تحقق قبل شراء 4070 Ti Super.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'شاهد سعر RTX 4070 Ti Super على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'شاهد سعر Ryzen 9 7900X على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: 'شاهد سعر RAM DDR5 64 جيجابايت على Amazon',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: 'الإعداد المتحمس (~5000 دولار): RTX 5090 32 GB',
        content:
          '**الإعداد المتحمس هو الجهاز الوحيد بـGPU واحدة الذي يستوعب نموذج 70B في Q4 — RTX 5090 32 GB هي القطعة المحورية.** ابنِ هذا المستوى لقدرة VRAM لا للسرعة الخام؛ السرعة هي أثر جانبي.',
        items: [
          '**GPU — RTX 5090 32 GB (~3650–3900 دولار):** 32 جيجابايت VRAM GDDR7، 575 واط. الوحيدة من شرائح المستهلكين التي تُشغّل نموذج 70B في Q4 بدون إعداد GPU مزدوج.',
          '**المعالج — AMD Ryzen 9 7950X (~450–520 دولار):** 16 نواة. كافٍ لتشغيل تحضير البيانات وتجارب الضبط الدقيق والأدوات جانباً للاستدلال المكثّف.',
          '**اللوحة الأم — شرائح X670E (~280–380 دولار):** إمداد طاقة قوي وPCIe 5.0، مُحجَّم لـGPU 575 واط ومعالج 16 نواة.',
          '**RAM — 128 جيجابايت DDR5 (~380–480 دولار):** مساحة لنوافذ سياق كبيرة ونماذج متعددة محمّلة في وقت واحد والأدوات — والهامش لتفريغ نموذج جزئياً إلى RAM عند الحاجة.',
          '**التخزين — SSD NVMe 4 تيرابايت (~260–340 دولار):** نموذج 70B Q4 يزن حوالي 40 جيجابايت؛ وحدة 4 تيرابايت تحتوي مكتبة كبيرة من النماذج الكبيرة.',
          '**المزوّد — 1000 واط 80+ Platinum (~180–240 دولار):** ضرورية لأن RTX 5090 وحدها تستهلك 575 واطاً — وحدة 750 واط ستنهار تحت الحمل. لا تُقلّل من أهمية هذه القطعة.',
          '**الهيكل والتبريد — هيكل كامل الحجم مع AIO 360 مم (~280–380 دولار):** GPU 575 واط ومعالج 16 نواة يولّدان حرارة حقيقية؛ مبرّد سائل 360 مم يُبقي المعالج مستقراً أثناء الاستدلال المستمر بـ70B.',
          '**لماذا تبني هذا المستوى:** تحتاج نماذج 33B أو 70B، أو تُشغّل استدلالاً دفعياً مكثّفاً، أو تريد جهازاً لا يحتاج استبدالاً لسنوات. **لماذا تتجاوزه:** لنماذج 7B–14B إسراف — الإعداد المتوسط يُوفّر إجابات فورية بهذه الأحجام بأقل من نصف التكلفة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090 تستهلك 575 واطاً وحدها. اقرنها بمزوّد 1000 واط من هذه القائمة — وحدة أصغر ستنهار تحت الحمل. تأكد من أن دائرة الجدار الكهربائية تستطيع توفير الاستهلاك الإجمالي قبل البناء.',
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
            priceRange: '3650-3900',
            label: 'شاهد سعر RTX 5090 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'شاهد سعر Ryzen 9 7950X على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: 'شاهد سعر مزوّد 1000 واط على Amazon',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'كيف يغيّر ارتفاع أسعار 2026 حسابات البناء',
        content:
          '**شحّ رقائق الذاكرة في 2026 دفع أسعار GPU إلى 1.5–2 ضعف السعر الاسمي، وبما أن GPU هي السطر الأغلى في كل إعداد، رفعت كل إجمالي عن العام السابق.** خطط للإعداد حول الأسعار الحالية لا أسعار الإطلاق.',
        items: [
          '**الـGPU تهيمن على الإجمالي.** في المستويات الثلاثة، الـGPU هي التكلفة الفردية الأعلى — الارتفاع يغيّر إجمالي الإعداد أكثر من أي قطعة أخرى.',
          '**السبب الذاكرة لا الـGPU.** شحّ إمدادات GDDR وHBM رفع تكلفة كل شريحة بذاكرة سريعة؛ كلما زادت VRAM، كان التأثير أشد. RTX 5090 انتقلت من سعر إطلاق 1999 دولار إلى حوالي 3650–3900 دولار.',
          '**GPU المدى المنخفض صمدت أكثر.** RTX 4060 Ti 16 GB قريبة من سعرها الاسمي، لذا تحرّك إجمالي الإعداد الاقتصادي أقل.',
          '**GPU المستعملة هي رهان القيمة.** RTX 4060 Ti أو RTX 4090 مستعملة تتجنب معظم الارتفاع — شراء شريحة مستعملة بعمل مُتحقق منه هو أبسط طريقة لتخفيض إجمالي الإعداد.',
          '**المكوّنات غير GPU تحركت أقل.** تصاعدت أسعار المعالج واللوحة الأم والـSSD والمزوّد باعتدال؛ RAM DDR5 أيضاً ضاقت مع شحّ الذاكرة، لكن الـGPU تبقى السطر الذي يجب مراقبته.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'شحّ الذاكرة في 2026 دفع أسعار GPU إلى 1.5–2 ضعف السعر الاسمي، رافعاً إجمالي كل إعداد ذكاء اصطناعي محلي لأن الـGPU هي السطر الفردي الأغلى في قائمة المكوّنات.',
          },
          {
            type: 'plain-terms',
            text: 'الـGPU هي أغلى قطعة في الجهاز، وفي 2026 الـGPU هي القطعة التي ارتفع سعرها أكثر. حتى يتحسن شحّ الذاكرة، عامل أسعار الإطلاق كتاريخ، اشترِ الـGPU من السوق الثانوية عند الإمكان، ولا تشترِ VRAM أكثر مما يحتاجه نموذجك.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'مخطط قرار الاختيار: اختر إعدادك في أربعة أسئلة',
        content:
          '**أربعة أسئلة بالترتيب تقود معظم من يبنون إلى مستوى.**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: 'شجرة قرار لاختيار إعداد جهاز الذكاء الاصطناعي المحلي حسب حجم النموذج: نماذج 7B-13B تقود إلى الإعداد الاقتصادي (~1,100 دولار)، نماذج 14B-33B إلى الإعداد المتوسط (~2,400 دولار)، نماذج 70B إلى إعداد الهواة (~5,000 دولار).',
        items: [
          '**1. ما أكبر نموذج تريد تشغيله؟** 7B–13B: الاقتصادي. 14B–33B: المتوسط. 70B: المتحمس.',
          '**2. ما سقف ميزانيتك الصارم؟** حوالي 1100 دولار: الاقتصادي. حوالي 2400 دولار: المتوسط. حوالي 5000 دولار: المتحمس.',
          '**3. GPU جديدة أم مستعملة؟** GPU مستعملة بعمل مُتحقق منه تتجنب معظم ارتفاع 2026 — اختر مستعملة لتخفيض إجمالي أي مستوى.',
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
          '**تجار التجزئة الكبار لديهم كل قطعة من هذه الإعدادات؛ السوق الثانوية هي مصدر القيمة تحديداً للـGPU.** الروابط أدناه روابط بحث منتجات بسيطة؛ لا تحمل علامات تابعة ولا تولّد عمولة.',
        items: [
          '**Amazon وNewegg:** أوسع مخزون للمعالجات والـRAM والـSSD والمزوّدات والهياكل. مخزون GPU الجديدة أشح ومسعَّر بارتفاع 2026.',
          '**سوق GPU المستعملة:** أفضل قيمة لسطر الـGPU — RTX 4060 Ti أو RTX 4070 Ti Super أو RTX 4090 مستعملة بعمل مُتحقق منه تتجنب معظم الارتفاع.',
          '**المتاجر المحلية لقطع الحاسوب:** مصادر جيدة للمعالجات واللوحات الأم والمزوّدات؛ مفيدة أيضاً لحزم المعالج + اللوحة الأم.',
          '**اشترِ الـGPU أولاً.** إنها السطر الأكبر والأكثر تقلباً — احصل على GPU بسعر تقبله، ثم اشترِ قطع الدعم حولها.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'بسبب ارتفاع أسعار GPU في 2026، كل إجمالي في هذا الدليل لقطة من يوليو 2026 تتحرك بسرعة. افتح دائماً إعلان التاجر الحالي للـGPU قبل الطلب — سعرها تغيّر أسبوعاً بعد أسبوع ويهيمن على تكلفة الإعداد.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'استكشف GPU على Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'استكشف معالجات Ryzen على Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'استكشف RAM DDR5 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'استكشف SSD NVMe على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**التعلق بالسعر الاسمي للـGPU.** ارتفاع 2026 يعني أن أسعار الإطلاق لم تعد تعكس الواقع. ضع ميزانية الـGPU بالسعر الحالي لدى التاجر وفكّر في السوق الثانوية.',
          '**شراء RTX 4060 Ti 8 جيجابايت للإعداد الاقتصادي.** تشارك الاسم مع إصدار 16 جيجابايت لكنها لا تستوعب نموذج 14B. تأكد من متغيّر 16 جيجابايت في الإعلان.',
          '**المبالغة في التحجيم لنماذج 7B.** إن كانت نماذج 7B تغطي حالة استخدامك، الإعداد المتحمس يُهدر آلاف الدولارات والواط. طابق المستوى مع النموذج لا مع الميزانية التي تصادف امتلاكها.',
          '**تخطي تخطيط الهيكل والتبريد.** GPU 575 واط بالإضافة إلى معالج 16 نواة يولّد حرارة حقيقية. تأكد من أن الهيكل يستوعب الـGPU والمبرّد ولديه تدفق هواء قبل طلب القطع.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[دليل شراء GPU لـLLMs المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: أسعار GPU من يوليو 2026 وارتفاع 1.5–2 ضعف السعر الاسمي المُستخدَم للإجماليات هنا.',
          '[بناء محطة عمل LLM محلي](/ar/local-llms/local-llm-workstation-build) — PromptQuorum: قائمة مكوّنات ودليل التبريد والمزوّد لمحطة عمل GPU مزدوجة 70B خلف المستوى المتحمس.',
          '[مواصفات NVIDIA GeForce RTX سلسلة 40 و50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — أرقام رسمية لقدرة VRAM والطاقة (TGP) لـRTX 4060 Ti و4070 Ti Super و5090.',
          '[PCPartPicker](https://pcpartpicker.com) — أسعار المكوّنات المباشرة لمعالجات AMD Ryzen وRAM DDR5 وSSD NVMe والمزوّدات في يوليو 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'كم يكلّف بناء حاسوب للذكاء الاصطناعي المحلي في 2026؟',
            a: 'حاسوب اقتصادي للذكاء الاصطناعي المحلي يكلّف حوالي 1100 دولار، وإعداد متوسط حوالي 2400 دولار، وإعداد متحمس بـ70B حوالي 5000 دولار. هذه لقطات من يوليو 2026 — شحّ رقائق الذاكرة دفع أسعار GPU إلى 1.5–2 ضعف السعر الاسمي، ورفع كل إجمالي عن نفس المكوّنات العام الماضي.',
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
            a: 'اشترِ الـGPU مستعملة عند الإمكان وبقية القطع جديدة. ارتفاع 2026 دفع أسعار GPU الجديدة إلى 1.5–2 ضعف السعر الاسمي، لكن السوق الثانوية تجنّبت معظم ذلك — RTX 4060 Ti أو RTX 4070 Ti Super أو RTX 4090 مستعملة بعمل مُتحقق منه يخفض إجمالي الإعداد بشكل كبير. المعالجات والـRAM والـSSD والمزوّدات يُفضَّل شراؤها جديدة.',
          },
          {
            q: 'هل يستطيع إعداد GPU واحد تشغيل نموذج 70B؟',
            a: 'نعم، الإعداد المتحمس يستطيع. RTX 5090 32 GB هي الشريحة المستهلكة الوحيدة التي تستوعب نموذج 70B في Q4، الذي يحتاج حوالي 39–42 جيجابايت VRAM — لذا يُشغّل 70B مع تكميم عدواني أو تفريغ جزئي لـRAM النظام. الـ128 جيجابايت RAM في الإعداد المتحمس تُعطي هذا التفريغ المساحة التي يحتاجها.',
          },
          {
            q: 'هل يستحق الإعداد المتوسط التكلفة الإضافية على الاقتصادي؟',
            a: 'نعم، إن كنت تُشغّل نماذج فئة 14B بانتظام. الإعداد الاقتصادي والمتوسط يستوعبان نماذج مماثلة، لكن RTX 4070 Ti Super في المتوسط أسرع بكثير — نماذج 14B تستجيب فوراً بدلاً من بطء، والعمل الخفيف مع 22B–33B يصبح قابلاً للاستخدام. إن كان سقفك صارماً عند نماذج 7B–13B، الإعداد الاقتصادي يوفر أكثر من 1000 دولار وهو الأفضل قيمةً.',
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
          '[اختر الـGPU لإعدادك مع الدليل الكامل للشراء](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — ثمانية GPU في أربعة مستويات ميزانية، مع أسعار يوليو 2026 وحساب الارتفاع.',
          '[شاهد إعداد محطة عمل 70B بـGPU مزدوجة للاستخدام الإنتاجي](/ar/local-llms/local-llm-workstation-build) — المستوى متعدد المستخدمين 4000–6000 دولار ما وراء الإعداد المتحمس في هذا الدليل.',
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
      description: 'ثلاثة إعدادات كاملة لحاسوب الذكاء الاصطناعي المحلي في 2026: اقتصادي 7B–13B ومتوسط 14B–33B ومتحمس 70B. قوائم مكوّنات دقيقة وتوكن/ثانية متوقع وتكاليف إجمالية من يوليو 2026.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-ai-workstation-build-guide-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-24',
      dateModified: '2026-07-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    freshness_tier: 'monthly',
    publishDate: '2026-05-22',
    dateModified: '2026-07-01',
    next_refresh_due: '2026-12-01',
    theme: 'Overview & Reference',
    title: '로컬 AI 워크스테이션 구성 가이드 2026: 예산별 3단계',
    seoTitle: '로컬 AI PC 2026: 입문부터 70B 워크스테이션까지',
    intro:
      '대부분의 로컬 AI PC 구성 가이드는 CPU부터 시작하지만, 실제로 어떤 모델을 실행할 수 있는지를 결정하는 것은 GPU와 그 VRAM입니다. 나머지 모든 부품은 GPU를 지원하기 위해 선택됩니다. 이 가이드는 로컬 LLM 전용 PC를 위한 세 가지 완전한 부품 목록을 제공합니다. 7B–13B 모델을 위한 보급형 구성, 14B–33B 모델을 위한 중급형 구성, 그리고 70B 모델 작업을 위한 고급형 구성입니다. 각 단계에는 정확한 부품, 예상 성능, 총 비용이 포함되어 있습니다. 가격에 관한 주의 사항: 2026년 메모리 칩 공급 부족으로 GPU 가격이 정가의 1.5~2배까지 상승했으며, 이로 인해 각 구성의 비용이 1년 전 동일한 부품보다 높아졌습니다. 각 수치는 2026년 7월 기준 스냅샷으로 참고하시고, 가능하면 중고 GPU 시장을 활용하시기 바랍니다.',
    metaDescription:
      '2026년 로컬 AI PC 3가지 구성: 보급형 7B–13B, 중급형 14B–33B, 고급형 70B. 정확한 부품 목록, 예상 tokens/s, 총 비용을 확인하십시오.',
    twitterDescription:
      '로컬 AI PC 구성 가이드: 7B부터 70B 모델까지 완전한 부품 목록과 함께 예산별 3단계. 2026년 GPU 가격 급등으로 각 구성 비용이 상승했습니다. 2026년 7월 기준 총액을 확인하십시오.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Qwen3 8B',
      'Mistral Small',
      'Llama 3.3 33B',
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
      '**로컬 AI PC에서 최적의 구성은 목표 모델에 맞는 GPU VRAM을 갖춘 단계입니다. 약 $1,100의 보급형 구성은 7B–13B 모델을 실행하고, 약 $2,400의 중급형 구성은 14B–33B 모델을 실행하며, 약 $5,000의 고급형 구성은 70B 모델을 실행합니다. 2026년 GPU 가격이 전년 대비 각 총액을 높였습니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년에 로컬 LLM을 실행하기 위한 PC를 어떻게 구성합니까?',
        answer:
          '실행하려는 가장 큰 모델에 따라 단계를 선택한 후 GPU를 중심으로 PC를 구성하십시오. 보급형 구성(약 $1,100)은 7B–13B 모델을 위해 RTX 4060 Ti 16 GB와 Ryzen 7 CPU를 조합합니다. 중급형 구성(약 $2,400)은 14B–33B 모델을 위해 RTX 4070 Ti Super 16 GB를 사용합니다. 고급형 구성(약 $5,000)은 70B 작업을 위해 RTX 5090 32 GB를 사용합니다. 2026년 메모리 공급 부족으로 GPU 가격이 정가를 크게 상회하므로, 각 총액은 2026년 7월 기준 스냅샷입니다.',
        bullets: [
          '보급형 약 $1,100: RTX 4060 Ti 16 GB, 7B–13B 모델 실행 가능',
          '중급형 약 $2,400: RTX 4070 Ti Super 16 GB, 14B–33B 모델 실행 가능',
          '고급형 약 $5,000: RTX 5090 32 GB, Q4 양자화로 70B 모델 실행 가능',
          '2026년 GPU 가격은 정가의 1.5~2배입니다. 가능하면 중고 GPU를 구매하십시오.',
        ],
        updatedDate: '2026-07',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '에디터 추천', anchor: '#editors-choice' },
      { label: '단계 비교', anchor: '#comparison-table' },
      { label: '어떤 구성을 선택해야 합니까?', anchor: '#which-build' },
      { label: '보급형 구성 (~$1,100)', anchor: '#budget-build' },
      { label: '중급형 구성 (~$2,400)', anchor: '#mid-build' },
      { label: '고급형 구성 (~$5,000)', anchor: '#enthusiast-build' },
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
          '**2026년 GPU 가격이 각 구성을 더 비싸게 만들었습니다.** 메모리 칩 공급 부족으로 GPU 가격이 정가의 1.5~2배까지 상승했습니다. 여기에 제시된 총액은 2026년 7월 기준 스냅샷이며 1년 전 동일한 부품보다 높습니다. 중고 GPU 시장을 적극 활용하십시오.',
          '**보급형 구성 (~$1,100):** RTX 4060 Ti 16 GB, Ryzen 7 7700, 32 GB RAM, 1 TB SSD, 650 W 파워 서플라이 — 7B–13B 모델을 사용 가능한 속도로 실행합니다. 로컬 AI를 위한 가장 저렴한 완전 구성입니다.',
          '**중급형 구성 (~$2,400):** RTX 4070 Ti Super 16 GB, Ryzen 9 7900X, 64 GB RAM, 2 TB SSD, 850 W 파워 서플라이 — 14B–33B 모델을 실행하고, 7B–14B 모델을 즉각적인 응답 속도로 처리합니다.',
          '**고급형 구성 (~$5,000):** RTX 5090 32 GB, Ryzen 9 7950X, 128 GB RAM, 4 TB SSD, 1000 W 파워 서플라이 — Q4 양자화로 70B 모델을 실행할 수 있는 유일한 단일 GPU 구성입니다.',
          '**RAM은 VRAM의 대체재가 아닙니다.** 시스템 RAM은 모델이 VRAM을 초과할 때 오프로드를 허용하지만, RAM에서 실행 중인 모델은 대화형 사용에 너무 느립니다. 모델에 맞는 충분한 VRAM을 구매하고, RAM은 운영 체제와 도구를 위해 구매하십시오.',
          '**파워 서플라이는 GPU에 맞게 확장됩니다.** 보급형은 650 W, 중급형은 850 W, 고급형은 1000 W가 필요합니다. RTX 5090 단독으로 575 W를 소비하기 때문입니다. GPU와 함께 파워 서플라이 예산을 책정하십시오.',
          '**2026년에는 중고 GPU가 최고의 가치를 제공합니다.** 검증된 작동 상태의 중고 RTX 4090 또는 RTX 4060 Ti는 대부분의 가격 급등을 피할 수 있습니다. 중고 카드를 구매하면 구성 총액을 낮게 유지할 수 있습니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**보급형 구성 (~$1,100):** GPU RTX 4060 Ti 16 GB — 7B 모델 및 대부분의 13B 모델 실행 가능.',
          '**중급형 구성 (~$2,400):** GPU RTX 4070 Ti Super 16 GB — 14B 모델을 편안하게, 22B–33B 모델도 경량 작업 가능.',
          '**고급형 구성 (~$5,000):** GPU RTX 5090 32 GB — 33B 모델을 편안하게, Q4 양자화로 70B 모델도 실행 가능.',
          '**Q4_K_M 양자화 VRAM 기본 규칙:** 매개변수 10억 개당 약 0.6 GB, 컨텍스트 및 도구용 2–4 GB 추가.',
          '**시스템 RAM 가이드:** 보급형 32 GB, 중급형 64 GB, 고급형 128 GB.',
          '**단계별 파워 서플라이:** 보급형 650 W, 중급형 850 W, 고급형 1000 W — RTX 5090 단독으로 575 W 소비.',
          '**2026년 가격 현실:** GPU 가격이 메모리 공급 부족으로 정가의 1.5~2배입니다. 현재 가격을 확인하고 중고 카드를 고려하십시오.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '에디터 추천: 중급형 구성 (~$2,400)',
        sponsoredSlot: true,
        content:
          '**대부분의 로컬 AI PC 구성자에게 중급형 구성은 성능, 비용, 여유 공간을 균형 있게 제공하는 단계입니다.** RTX 4070 Ti Super 16 GB를 중심으로 구성된 이 설정은 충분한 컨텍스트 공간으로 모든 14B 모델을 실행하고, 22B–33B 모델의 경량 작업도 처리하며, 7B–14B 모델을 즉각적인 속도로 응답합니다. 총 약 $2,400으로 몇 달이 지나도 답답하지 않고, 1년 내에 교체할 필요가 없는 구성입니다. 7B–13B 모델만 사용할 계획이라면 보급형으로 내려가고, 70B 작업이 꼭 필요하다면 고급형으로 올라가십시오. 중급형 구성은 오래 유지하고 싶은 기기를 위한 안전한 기본 선택입니다.',
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
            priceRange: '1150-1200',
            label: 'Amazon에서 RTX 4070 Ti Super 가격 확인',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Newegg에서 RTX 4070 Ti Super 가격 확인',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026년 세 가지 구성 단계 비교',
        content:
          'VRAM 및 GPU 전력 수치는 제조사 사양입니다. 추론 속도는 해당 단계 GPU에 대한 PromptQuorum GPU 테스트의 모델 패밀리 수준 추정치입니다. 구성 총액은 2026년 7월 기준 USD 스냅샷입니다. 2026년 GPU 가격 급등으로 카드 가격이 정가의 1.5~2배까지 상승했으므로 GPU 항목이 각 총액을 주도하며 주간 단위로 변동합니다. 중고 GPU를 구입하면 각 총액을 줄일 수 있습니다.',
        image: '/images/local-ai-workstation-build-guide-2026-tier-comparison-en.svg',
        imageCaption: '2026년 로컬 AI PC 구성 단계 비교: RTX 4060 Ti 16GB 보급형 구성(~$1,100)은 7B-13B 모델, RTX 4070 Ti Super 16GB 중급형 구성(~$2,400)은 14B-33B 모델, RTX 5090 32GB 고급형 구성(~$5,000)은 33B-70B 모델을 실행합니다.',
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
        columns: ['단계', 'GPU', 'VRAM', '실행 가능', '파워 서플라이', '총액 (2026년 7월)'],
        rows: [
          {
            '단계': '보급형',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '실행 가능': '7B–13B 모델',
            '파워 서플라이': '650 W',
            '총액 (2026년 7월)': '약 $1,100',
          },
          {
            '단계': '중급형',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            '실행 가능': '14B 편안하게, 22B–33B 경량',
            '파워 서플라이': '850 W',
            '총액 (2026년 7월)': '약 $2,400',
          },
          {
            '단계': '고급형',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            '실행 가능': '33B 편안하게, Q4 양자화 70B',
            '파워 서플라이': '1000 W',
            '총액 (2026년 7월)': '약 $5,000',
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
          { '상황': '7B–13B 모델을 실행하며 가장 저렴한 완전한 기기를 원하는 경우', '선택할 구성': '보급형 구성 (~$1,100)' },
          { '상황': '첫 로컬 AI PC이며 얼마나 멀리 갈지 모르는 경우', '선택할 구성': '보급형, 또는 여유를 위해 중급형' },
          { '상황': '14B 모델을 지속적으로 실행하며 즉각적인 응답을 원하는 경우', '선택할 구성': '중급형 구성 (~$2,400)' },
          { '상황': '22B–33B 경량 작업을 하며 오래 사용할 기기를 원하는 경우', '선택할 구성': '중급형 구성 (~$2,400)' },
          { '상황': '33B 모델을 집중적으로 사용하거나 충분한 미래 여유 공간이 필요한 경우', '선택할 구성': '고급형 구성 (~$5,000)' },
          { '상황': 'Q4 양자화로 70B 모델을 실행할 수 있는 단일 GPU 기기가 필요한 경우', '선택할 구성': '고급형 구성 (~$5,000)' },
          { '상황': '2026년 가격 급등에도 불구하고 총액을 낮게 유지하고 싶은 경우', '선택할 구성': '어떤 단계든 가능 — 중고 GPU 구입' },
          { '상황': '확실하지 않으며 수년간 유지할 가장 안전한 구성을 원하는 경우', '선택할 구성': '중급형 구성 — 에디터 추천' },
        ],
      },
      budgetBuild: {
        id: 'budget-build',
        title: '보급형 구성 (~$1,100): RTX 4060 Ti 16 GB',
        content:
          '**보급형 구성은 가장 저렴한 완전 로컬 AI PC이며, 모든 7B 모델과 대부분의 13B 모델을 실행합니다. 처음 사용하는 대부분의 사용자에게 충분한 성능입니다.** RTX 4060 Ti 16 GB를 중심으로 구성되며, 2026년 가격 급등의 영향을 가장 적게 받은 GPU로 총액을 합리적인 범위 내로 유지합니다.',
        items: [
          '**GPU — RTX 4060 Ti 16 GB (~$420–450):** 16 GB VRAM, 165 W. 7B 모델을 약 20–25 tok/s로 실행하며, 컨텍스트 여유 공간과 함께 14B 모델도 수용합니다. 16 GB 용량이 8 GB 버전을 선택하지 않는 이유입니다.',
          '**CPU — AMD Ryzen 7 7700 (~$250–280):** 8코어, 적당한 전력 소비. CPU는 GPU 추론 중 작업이 거의 없으므로 이 단계에서는 중간급 칩이 적합합니다. 이 단계에서 CPU에 과도하게 지출하지 마십시오.',
          '**메인보드 — B650 칩셋 (~$130–160):** Ryzen 7과 전체 크기 GPU를 PCIe에서 지원합니다. 이 단계에서는 고급 전원 공급이 필요하지 않습니다.',
          '**RAM — 32 GB DDR5 (~$90–120):** 운영 체제, 도구, VRAM에서 실행되는 7B–13B 모델을 위해 충분합니다. RAM은 VRAM의 대체재가 아닙니다. 이 단계에서 32 GB로 충분합니다.',
          '**스토리지 — 1 TB NVMe SSD (~$70–90):** 운영 체제와 여러 모델을 저장합니다. 7B Q4 모델 하나는 약 4–5 GB입니다.',
          '**파워 서플라이 — 650 W 80+ Gold (~$80–100):** 165 W GPU와 8코어 CPU에 대한 편안한 여유 공간.',
          '**케이스 및 쿨링 — 타워형 공냉 쿨러가 있는 미드타워 (~$80–120):** 보급형은 발열이 적습니다. 공냉으로 충분합니다.',
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
            priceRange: '420-450',
            label: 'Amazon에서 RTX 4060 Ti 16GB 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+7+7700',
            productName: 'AMD Ryzen 7 7700',
            productCategory: 'pc-component',
            priceRange: '250-280',
            label: 'Amazon에서 Ryzen 7 7700 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=32GB+DDR5+RAM',
            productName: '32GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '90-120',
            label: 'Amazon에서 32 GB DDR5 RAM 가격 확인',
          },
        ],
      },
      midBuild: {
        id: 'mid-build',
        title: '중급형 구성 (~$2,400): RTX 4070 Ti Super 16 GB',
        content:
          '**중급형 구성은 에디터 추천입니다. 14B 모델을 즉각적으로 실행하고, 22B–33B 경량 작업을 처리하며, 오래 유지할 수 있는 단계입니다.** RTX 4070 Ti Super 16 GB를 중심으로 구성되며, 14B급 모델에서 응답 지연이 감지되지 않을 만큼 충분히 빠릅니다.',
        items: [
          '**GPU — RTX 4070 Ti Super 16 GB (~$1,150–1,200):** 16 GB VRAM, 285 W. 보급형과 동일한 모델 수용 능력이지만 훨씬 빠릅니다. 7B–14B 모델이 즉각 응답하고, 22B–33B 경량 작업도 사용 가능합니다.',
          '**CPU — AMD Ryzen 9 7900X (~$330–370):** 12코어. 추론과 함께 데이터 준비 및 도구 실행을 위한 보급형보다 더 많은 여유 공간.',
          '**메인보드 — B650 또는 X670 칩셋 (~$180–240):** 12코어 CPU와 285 W GPU를 위한 견고한 전원 공급.',
          '**RAM — 64 GB DDR5 (~$180–230):** 운영 체제, 더 큰 컨텍스트 창, 모델과 함께 실행되는 RAG 파이프라인 같은 도구를 위한 공간.',
          '**스토리지 — 2 TB NVMe SSD (~$130–170):** 상당한 모델 라이브러리를 저장합니다. 33B Q4 모델 하나는 약 18–20 GB입니다.',
          '**파워 서플라이 — 850 W 80+ Gold (~$120–150):** 지속적인 부하 하에서 285 W GPU와 12코어 CPU에 대한 편안한 여유 공간.',
          '**케이스 및 쿨링 — 240–280 mm AIO 또는 고급 공냉 쿨러가 있는 미드타워 (~$150–220):** 중급형은 적당한 발열이 있습니다. 품질 쿨러로 장시간 추론 세션 중 CPU를 안정적으로 유지하십시오.',
          '**이 단계를 선택하는 이유:** 14B 모델을 지속적으로 실행하며 즉각적인 응답을 원하거나, 22B–33B 경량 작업을 하며 여유 공간이 필요한 경우. **건너뛰어야 하는 이유:** 7B–13B로 충분하다면 보급형으로 $1,000 이상 절약 가능합니다. 70B가 필요하다면 16 GB GPU로는 불가능하므로 고급형으로 가십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '중급형 구성은 보급형과 동일한 모델을 수용합니다. 속도가 아닌 용량에 대한 비용입니다. 14B 모델이 일상적인 작업 부하가 되고 기다리는 것이 싫다면 이 단계를 선택하십시오.',
          },
          {
            type: 'note',
            text: '2026년 가격 급등 후 중고 RTX 4090 24 GB가 때로는 새 RTX 4070 Ti Super 가격과 비슷하게 팔립니다. 검증된 작동 상태의 제품을 찾는다면 8 GB의 VRAM 추가로 33B 모델까지 도달할 수 있습니다. 4070 Ti Super를 구입하기 전에 확인할 가치가 있습니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'pc-component',
            priceRange: '1150-1200',
            label: 'Amazon에서 RTX 4070 Ti Super 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7900X',
            productName: 'AMD Ryzen 9 7900X',
            productCategory: 'pc-component',
            priceRange: '330-370',
            label: 'Amazon에서 Ryzen 9 7900X 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=64GB+DDR5+RAM',
            productName: '64GB DDR5 RAM kit',
            productCategory: 'pc-component',
            priceRange: '180-230',
            label: 'Amazon에서 64 GB DDR5 RAM 가격 확인',
          },
        ],
      },
      enthusiastBuild: {
        id: 'enthusiast-build',
        title: '고급형 구성 (~$5,000): RTX 5090 32 GB',
        content:
          '**고급형 구성은 Q4 양자화로 70B 모델을 실행할 수 있는 유일한 단일 GPU 기기입니다. RTX 5090 32 GB가 핵심 부품입니다.** 이 단계를 선택하는 이유는 원시 속도가 아닌 VRAM 용량입니다. 속도는 부수적인 효과입니다. 2026년 가격 급등이 이 단계에 가장 강하게 영향을 미쳐 GPU 항목이 총액을 주도하며 주간 단위로 변동합니다.',
        items: [
          '**GPU — RTX 5090 32 GB (~$3,650–3,900):** 32 GB GDDR7 VRAM, 575 W. 이중 GPU 구성 없이 Q4 양자화로 70B 모델을 실행할 수 있는 유일한 소비자용 카드입니다. 33B 모델을 여유 공간과 함께 편안하게 실행합니다.',
          '**CPU — AMD Ryzen 9 7950X (~$450–520):** 16코어. 집중적인 추론과 함께 데이터 준비, 파인튜닝 실험, 도구 실행을 처리하기에 충분합니다.',
          '**메인보드 — X670E 칩셋 (~$280–380):** 575 W GPU와 16코어 CPU를 위해 크기가 맞춰진 강력한 전원 공급 및 PCIe 5.0.',
          '**RAM — 128 GB DDR5 (~$380–480):** 큰 컨텍스트 창, 동시에 로드된 여러 모델, 도구를 위한 공간 — 그리고 필요시 모델을 RAM으로 부분 오프로드할 수 있는 여유 공간.',
          '**스토리지 — 4 TB NVMe SSD (~$260–340):** 70B Q4 모델 하나는 약 40 GB입니다. 4 TB 드라이브는 대형 모델의 큰 라이브러리를 수용합니다.',
          '**파워 서플라이 — 1000 W 80+ Platinum (~$180–240):** RTX 5090 단독으로 575 W를 소비하기 때문에 필요합니다. 750 W 유닛은 부하 하에서 부족할 것입니다. 이 부품을 절약하지 마십시오.',
          '**케이스 및 쿨링 — 360 mm AIO가 있는 풀타워 (~$280–380):** 575 W GPU와 16코어 CPU는 실제 발열을 발생시킵니다. 360 mm 수냉 쿨러는 지속적인 70B 추론 중 CPU를 안정적으로 유지합니다.',
          '**이 단계를 선택하는 이유:** 33B 또는 70B 모델이 필요하거나, 집중적인 배치 추론을 실행하거나, 수년간 교체 없이 사용할 기기를 원하는 경우. **건너뛰어야 하는 이유:** 7B–14B 모델에는 과하게 비쌉니다. 중급형 구성이 해당 크기에서 절반도 안 되는 비용으로 즉각적인 응답을 제공합니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090은 단독으로 575 W를 소비합니다. 이 부품 목록의 1000 W 파워 서플라이와 함께 사용하십시오. 더 작은 유닛은 부하 하에서 제한될 것입니다. 조립 전에 벽면 회로가 총 소비 전력을 공급할 수 있는지 확인하십시오.',
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
            priceRange: '3650-3900',
            label: 'Amazon에서 RTX 5090 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=AMD+Ryzen+9+7950X',
            productName: 'AMD Ryzen 9 7950X',
            productCategory: 'pc-component',
            priceRange: '450-520',
            label: 'Amazon에서 Ryzen 9 7950X 가격 확인',
          },
          {
            url: 'https://www.amazon.com/s?k=1000W+Platinum+power+supply',
            productName: '1000W 80+ Platinum power supply',
            productCategory: 'pc-component',
            priceRange: '180-240',
            label: 'Amazon에서 1000 W 파워 서플라이 가격 확인',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026년 가격 급등이 구성 계획에 미치는 영향',
        content:
          '**2026년 메모리 칩 공급 부족으로 GPU 가격이 정가의 1.5~2배까지 상승했으며, GPU가 각 구성에서 가장 큰 항목이기 때문에 전년도 대비 각 총액이 높아졌습니다.** 출시 가격이 아닌 현재 가격을 기준으로 구성을 계획하십시오.',
        items: [
          '**GPU가 총액을 주도합니다.** 세 단계 모두에서 GPU는 가장 높은 단일 비용 항목입니다. 가격 급등은 다른 어떤 부품보다 구성 총액을 더 많이 변화시킵니다.',
          '**원인은 GPU가 아닌 메모리입니다.** GDDR 및 HBM 공급 부족으로 빠른 메모리가 있는 모든 카드의 비용이 증가했습니다. VRAM이 많을수록 타격이 컸습니다. RTX 5090은 $1,999 출시 가격에서 약 $3,650–3,900으로 상승했습니다.',
          '**저가형 GPU가 더 잘 버텼습니다.** RTX 4060 Ti 16 GB는 정가에 가까우므로 보급형 구성 총액의 변동이 적었습니다.',
          '**중고 GPU가 최고의 가치입니다.** 중고 RTX 4060 Ti 또는 RTX 4090은 대부분의 가격 급등을 피할 수 있습니다. 검증된 작동 상태의 중고 카드를 구입하는 것이 구성 총액을 낮추는 가장 간단한 방법입니다.',
          '**GPU 이외 부품의 가격 변동은 적었습니다.** CPU, 메인보드, SSD, 파워 서플라이 가격은 적당히 상승했습니다. DDR5 RAM도 메모리 공급 부족으로 타이트해졌지만, GPU가 여전히 주시해야 할 항목입니다.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 메모리 공급 부족으로 GPU 가격이 정가의 1.5~2배까지 상승하여, GPU가 부품 목록에서 가장 큰 단일 항목이기 때문에 각 로컬 AI 구성의 총액이 높아졌습니다.',
          },
          {
            type: 'plain-terms',
            text: 'GPU는 기기의 가장 비싼 부품이며, 2026년에는 GPU가 가장 비싸진 부품입니다. 메모리 공급 부족이 해소될 때까지 출시 가격은 역사로 취급하고, 가능하면 중고 GPU를 구입하며, 모델에 필요한 것 이상의 VRAM을 구입하지 마십시오.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '결정 순서도: 네 가지 질문으로 구성 선택',
        content:
          '**네 가지 질문에 순서대로 답하면 대부분의 구성자가 단계에 도달합니다.**',
        image: '/images/local-ai-workstation-build-guide-2026-decision-tree-en.svg',
        imageCaption: '모델 크기별 로컬 AI PC 구성 선택 결정 트리: 7B-13B 모델은 보급형 구성(~$1,100), 14B-33B 모델은 중급형 구성(~$2,400), 70B 모델은 고급형 구성(~$5,000)으로 연결됩니다.',
        items: [
          '**1. 실행하려는 가장 큰 모델은 무엇입니까?** 7B–13B: 보급형 구성. 14B–33B: 중급형 구성. 70B: 고급형 구성.',
          '**2. 엄격한 예산 상한은 얼마입니까?** 약 $1,100: 보급형 구성. 약 $2,400: 중급형 구성. 약 $5,000: 고급형 구성.',
          '**3. 새 GPU를 구입합니까, 중고 GPU를 구입합니까?** 검증된 작동 상태의 중고 GPU는 2026년 가격 급등의 대부분을 피할 수 있습니다. 중고를 선택하면 어떤 단계에서도 총액을 낮출 수 있습니다.',
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
          '**대형 소매업체에는 이 구성의 모든 부품이 있습니다. 중고 시장은 GPU에 특화된 가치 원천입니다.** 아래 링크는 단순 제품 검색 링크입니다. 제휴 태그가 없으며 수수료가 발생하지 않습니다.',
        items: [
          '**Amazon 및 Newegg:** CPU, RAM, SSD, 파워 서플라이, 케이스의 가장 넓은 재고. 새 GPU 재고는 더 부족하며 2026년 가격 급등이 반영되어 있습니다.',
          '**중고 GPU 시장:** GPU 항목에서 최고의 가치 — 검증된 작동 상태의 중고 RTX 4060 Ti, RTX 4070 Ti Super, RTX 4090은 대부분의 가격 급등을 피할 수 있습니다.',
          '**지역 전자 제품 매장 및 PC 전문점:** CPU, 메인보드, 파워 서플라이의 좋은 공급처입니다. CPU와 메인보드 번들도 유용합니다.',
          '**GPU를 먼저 구입하십시오.** GPU가 가장 크고 변동성이 높은 항목입니다. 수용 가능한 가격으로 GPU를 확보한 후, 지원 부품을 그 주변에 구입하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 GPU 가격 급등으로 이 가이드의 모든 총액은 빠르게 변동하는 2026년 7월 스냅샷입니다. 조립하기 전에 항상 GPU의 현재 소매 목록을 여십시오. 가격은 주간 단위로 변동했으며 구성 비용을 주도합니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+AI',
            productName: 'GPUs for local AI builds',
            productCategory: 'pc-component',
            priceRange: '420-3900',
            label: 'Amazon에서 GPU 탐색',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=CPU+AMD+Ryzen',
            productName: 'AMD Ryzen CPUs',
            productCategory: 'pc-component',
            priceRange: '250-520',
            label: 'Newegg에서 Ryzen CPU 탐색',
          },
          {
            url: 'https://www.amazon.com/s?k=DDR5+RAM+kit',
            productName: 'DDR5 RAM kits',
            productCategory: 'pc-component',
            priceRange: '90-480',
            label: 'Amazon에서 DDR5 RAM 탐색',
          },
          {
            url: 'https://www.amazon.com/s?k=NVMe+SSD+2TB',
            productName: 'NVMe SSDs',
            productCategory: 'pc-component',
            priceRange: '70-340',
            label: 'Amazon에서 NVMe SSD 탐색',
          },
          {
            url: 'https://www.amazon.com/s?k=850W+power+supply',
            productName: 'ATX power supplies',
            productCategory: 'pc-component',
            priceRange: '80-240',
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
          '**GPU 출시 가격에 고정되는 것.** 2026년 가격 급등으로 출시 가격이 더 이상 현실을 반영하지 않습니다. GPU를 현재 소매 가격 기준으로 예산을 책정하고 중고 시장을 고려하십시오.',
          '**보급형 구성에 RTX 4060 Ti 8 GB를 구입하는 것.** 16 GB 버전과 같은 이름이지만 14B 모델을 수용할 수 없습니다. 목록에서 16 GB 변형을 확인하십시오.',
          '**7B 모델을 위해 과도하게 지출하는 것.** 7B 모델이 사용 사례를 충족한다면 고급형 구성은 수천 달러와 수백 와트를 낭비합니다. 예산이 아닌 모델에 맞게 단계를 조정하십시오.',
          '**케이스 및 쿨링 계획을 건너뛰는 것.** 575 W GPU와 16코어 CPU는 실제 발열을 발생시킵니다. 부품을 주문하기 전에 케이스가 GPU와 쿨러를 수용하고 공기 흐름이 원활한지 확인하십시오.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[로컬 LLM 최적 GPU 구매 가이드 2026](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: 여기 구성 총액에 사용된 2026년 7월 GPU 가격 및 정가의 1.5~2배 가격 급등.',
          '[로컬 LLM 워크스테이션 구성](/ko/local-llms/local-llm-workstation-build) — PromptQuorum: 고급형 단계 이면의 이중 GPU 70B 워크스테이션을 위한 부품 목록, 쿨링, 파워 서플라이 가이드.',
          '[NVIDIA GeForce RTX 40 및 50 시리즈 사양](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti, 4070 Ti Super, 5090의 공식 VRAM 용량 및 전력(TGP) 수치.',
          '[PCPartPicker](https://pcpartpicker.com) — 2026년 7월 기준 AMD Ryzen CPU, DDR5 RAM, NVMe SSD, 파워 서플라이의 실시간 부품 가격.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '2026년에 로컬 AI PC를 구성하는 데 얼마나 비용이 듭니까?',
            a: '보급형 로컬 AI PC는 약 $1,100, 중급형 구성은 약 $2,400, 고급형 70B 구성은 약 $5,000입니다. 이는 2026년 7월 기준 스냅샷입니다. 2026년 메모리 칩 공급 부족으로 GPU 가격이 정가의 1.5~2배까지 상승했으며, GPU가 각 구성에서 가장 큰 항목이기 때문에 전년도 동일한 부품 대비 각 총액이 높아졌습니다.',
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
            a: '가능하면 중고 GPU를 구입하고, 다른 부품은 새 것으로 구입하십시오. 2026년 가격 급등으로 새 GPU 가격이 정가의 1.5~2배까지 상승했지만, 중고 시장은 대부분의 가격 급등을 피했습니다. 검증된 작동 상태의 중고 RTX 4060 Ti, RTX 4070 Ti Super, RTX 4090은 구성 총액을 크게 줄입니다. CPU, RAM, SSD, 파워 서플라이는 새 것으로 구입하는 것이 좋습니다.',
          },
          {
            q: '단일 GPU 구성으로 70B 모델을 실행할 수 있습니까?',
            a: '네, 고급형 구성으로 가능합니다. RTX 5090 32 GB는 Q4 양자화로 70B 모델을 수용할 수 있는 유일한 단일 소비자용 카드입니다. 70B 모델은 약 39–42 GB의 VRAM이 필요하므로, 적극적인 양자화나 시스템 RAM으로의 부분 오프로드를 통해 70B를 실행합니다. 고급형 구성의 128 GB RAM이 해당 오프로드에 필요한 공간을 제공합니다.',
          },
          {
            q: '보급형 대비 추가 비용을 고려할 때 중급형 구성이 가치가 있습니까?',
            a: '14B급 모델을 정기적으로 실행한다면 그렇습니다. 보급형과 중급형 구성은 비슷한 모델을 수용하지만, 중급형의 RTX 4070 Ti Super가 훨씬 빠릅니다. 14B 모델이 느리게 응답하는 대신 즉각적으로 응답하고, 22B–33B 경량 작업이 사용 가능해집니다. 7B–13B 모델만으로 충분하다면 보급형으로 $1,000 이상 절약하는 것이 최고의 가성비입니다.',
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
          '[전체 구매 가이드로 구성에 맞는 GPU 선택](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 2026년 7월 가격과 가격 급등 계산이 포함된 네 가지 예산 단계의 GPU 8종.',
          '[프로덕션 사용을 위한 이중 GPU 70B 워크스테이션 구성 보기](/ko/local-llms/local-llm-workstation-build) — 이 가이드의 고급형 구성을 넘어서는 $4,000–6,000 다중 사용자 단계.',
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
      description: '2026년 로컬 AI PC 세 가지 완전 구성: 보급형 7B–13B, 중급형 14B–33B, 고급형 70B. 정확한 부품 목록, 예상 tokens/s, 2026년 7월 총 비용.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-ai-workstation-build-guide-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-24',
      dateModified: '2026-07-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: '로컬 AI 워크스테이션 구성 가이드 2026', item: 'https://www.promptquorum.com/ko/power-local-llm/local-ai-workstation-build-guide-2026' },
      ],
    },
  },
}
