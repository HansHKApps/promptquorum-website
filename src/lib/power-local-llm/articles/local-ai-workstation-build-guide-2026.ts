// Power Local LLM — Local AI Workstation Build Guide: 3 Budget Tiers
// Slug: local-ai-workstation-build-guide-2026
// Affiliate buying guide. Outbound component links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: May 2026 snapshot. The 2026 memory-chip shortage pushed GPU prices
// 1.5-2x above MSRP, which raises every build cost in this guide above earlier
// figures. Component prices sourced from the audited PromptQuorum GPU buying
// guide and workstation build articles.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'Local AI Workstation Build Guide 2026: 3 Budget Tiers',
    seoTitle: 'Local AI PC Build 2026: Budget to 70B Workstation',
    intro:
      'Most local-AI build guides start with the CPU, but the GPU and its VRAM are what decide which models the machine can run — every other part is chosen to support that GPU. This guide gives three complete parts lists for a local-LLM PC: a budget build for 7B-13B models, a mid build for 14B-33B models, and an enthusiast build for 70B work. Each tier lists exact components, expected performance, and a total cost. One caveat on price: the 2026 memory-chip shortage pushed GPU prices 1.5-2x above MSRP, which raises every build cost here above what the same parts cost a year ago — treat each figure as a May 2026 snapshot and lean on the used GPU market where you can.',
    metaDescription:
      'Three complete local-AI PC builds for 2026: budget 7B-13B, mid 14B-33B, and enthusiast 70B tiers. Exact parts lists, expected tokens/sec, and May 2026 total costs.',
    twitterDescription:
      'Local AI PC build guide: three budget tiers with full parts lists for 7B to 70B models. The 2026 GPU price surge raised every build cost — here are May 2026 totals.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Mistral 7B',
      'Llama 3.1 33B',
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
          'Choose your tier by the largest model you want to run, then build around the GPU. A budget build (~$1,100) pairs an RTX 4060 Ti 16 GB with a Ryzen 7 CPU for 7B-13B models. A mid build (~$2,400) uses an RTX 4070 Ti Super 16 GB for 14B-33B models. An enthusiast build (~$5,000) uses an RTX 5090 32 GB for 70B work. The 2026 memory shortage pushed GPU prices well above MSRP, so every total is a May 2026 snapshot.',
        bullets: [
          'Budget build ~$1,100: RTX 4060 Ti 16 GB, runs 7B-13B models',
          'Mid build ~$2,400: RTX 4070 Ti Super 16 GB, runs 14B-33B models',
          'Enthusiast build ~$5,000: RTX 5090 32 GB, runs 70B models at Q4',
          '2026 GPU prices run 1.5-2x above MSRP — buy GPUs used where you can',
        ],
        updatedDate: '2026-05',
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
          '**2026 GPU prices raised every build cost.** A memory-chip shortage pushed GPU prices 1.5-2x above MSRP. The build totals here are May 2026 snapshots and run higher than the same parts cost a year ago — lean on the used GPU market.',
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
          'GPU VRAM and power figures are manufacturer specifications. Inference speeds are family-level estimates from PromptQuorum GPU testing for the tier\'s GPU. Build totals are May 2026 US snapshots — the 2026 GPU price surge pushed cards 1.5-2x above MSRP, so the GPU line dominates each total and moves week to week. Buying the GPU used lowers every total.',
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
        columns: ['Build tier', 'GPU', 'VRAM', 'Runs', 'PSU', 'Total (May 2026)'],
        rows: [
          {
            'Build tier': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Runs': '7B-13B models',
            'PSU': '650 W',
            'Total (May 2026)': '~$1,100',
          },
          {
            'Build tier': 'Mid',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Runs': '14B comfortably, light 22B-33B',
            'PSU': '850 W',
            'Total (May 2026)': '~$2,400',
          },
          {
            'Build tier': 'Enthusiast',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Runs': '33B comfortably, 70B at Q4',
            'PSU': '1000 W',
            'Total (May 2026)': '~$5,000',
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
            text: 'Because of the 2026 GPU price surge, every total in this guide is a fast-moving May 2026 snapshot. Always open the current retailer listing for the GPU before building — its price has moved week to week and it dominates the build cost.',
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
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — PromptQuorum: May 2026 GPU prices and the 1.5-2x surge over MSRP used for the build totals here.',
          '[Local LLM Workstation Build](/local-llms/local-llm-workstation-build) — PromptQuorum: dual-GPU 70B workstation parts list, cooling, and power-supply guidance behind the enthusiast tier.',
          '[NVIDIA GeForce RTX 40 and 50 Series Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Official VRAM capacity and power (TGP) figures for the RTX 4060 Ti, 4070 Ti Super, and 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live component pricing for AMD Ryzen CPUs, DDR5 RAM, NVMe SSDs, and power supplies as of May 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'How much does it cost to build a PC for local AI in 2026?',
            a: 'A budget local-AI PC costs roughly $1,100, a mid build roughly $2,400, and an enthusiast 70B build roughly $5,000. These are May 2026 snapshots — the 2026 memory-chip shortage pushed GPU prices 1.5-2x above MSRP, and since the GPU is the largest line in every build, it raised each total above what the same parts cost a year ago.',
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
          '[Choose the GPU for your build with the full buying guide](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — eight GPUs across four budget tiers, with May 2026 prices and the surge math.',
          '[See the dual-GPU 70B workstation build for production use](/local-llms/local-llm-workstation-build) — the $4,000-6,000 multi-user tier beyond this guide\'s enthusiast build.',
          '[Compare building a PC against renting cloud GPUs](/power-local-llm/cloud-gpu-rental-guide-2026) — when renting beats owning hardware for occasional compute.',
          '[Work out the VRAM each model size needs before you build](/local-llms/how-much-vram-local-llm) — the complete VRAM-by-model-size method behind the tier choices here.',
          '[Consider a Mac as an alternative to a PC build](/power-local-llm/best-mac-for-local-ai-2026) — when unified-memory Apple Silicon beats a discrete-GPU PC for local AI.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'Lokale-KI-Workstation 2026 selbst bauen: 3 Budget-Stufen',
    seoTitle: 'Lokaler-KI-PC 2026: vom Budget-Build zur 70B-Workstation',
    intro:
      'Die meisten Bauanleitungen für lokale KI beginnen mit der CPU, doch GPU und VRAM entscheiden darüber, welche Modelle die Maschine ausführen kann — jede andere Komponente wird so gewählt, dass sie diese GPU unterstützt. Diese Anleitung liefert drei vollständige Teilelisten für einen Lokal-LLM-PC: einen Budget-Build für 7B- bis 13B-Modelle, einen Mittelklasse-Build für 14B- bis 33B-Modelle und einen Enthusiasten-Build für die Arbeit mit 70B-Modellen. Jede Stufe nennt exakte Komponenten, die erwartete Leistung und die Gesamtkosten. Ein Hinweis zum Preis: Die Speicherchip-Knappheit von 2026 hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben, was jeden Build hier teurer macht als dieselben Teile vor einem Jahr — behandeln Sie jede Zahl als Momentaufnahme vom Mai 2026 und nutzen Sie den Gebrauchtmarkt für GPUs, wo es geht.',
    metaDescription:
      'Drei vollständige Lokal-KI-PCs für 2026: Budget 7B-13B, Mittelklasse 14B-33B und Enthusiast 70B. Exakte Teilelisten, erwartete Tokens/Sek. und Gesamtkosten von Mai 2026.',
    twitterDescription:
      'Bauanleitung für einen Lokal-KI-PC: drei Budget-Stufen mit vollständigen Teilelisten für 7B- bis 70B-Modelle. Der GPU-Preisanstieg 2026 hat jeden Build verteuert — hier die Mai-2026-Summen.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Mistral 7B',
      'Llama 3.1 33B',
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
          'Wählen Sie Ihre Stufe nach dem größten Modell, das Sie ausführen möchten, und bauen Sie dann um die GPU herum. Ein Budget-Build (ca. 1.250 €) kombiniert eine RTX 4060 Ti 16 GB mit einer Ryzen-7-CPU für 7B- bis 13B-Modelle. Ein Mittelklasse-Build (ca. 2.500 €) nutzt eine RTX 4070 Ti Super 16 GB für 14B- bis 33B-Modelle. Ein Enthusiasten-Build (ca. 5.200 €) setzt eine RTX 5090 32 GB für 70B-Arbeit ein. Die Speicherknappheit 2026 hat die GPU-Preise weit über die UVP getrieben, daher ist jede Summe eine Momentaufnahme vom Mai 2026.',
        bullets: [
          'Budget-Build ca. 1.250 €: RTX 4060 Ti 16 GB, führt 7B- bis 13B-Modelle aus',
          'Mittelklasse-Build ca. 2.500 €: RTX 4070 Ti Super 16 GB, führt 14B- bis 33B-Modelle aus',
          'Enthusiasten-Build ca. 5.200 €: RTX 5090 32 GB, führt 70B-Modelle bei Q4 aus',
          'GPU-Preise 2026 liegen beim 1,5- bis 2-Fachen der UVP — kaufen Sie GPUs gebraucht, wo es geht',
        ],
        updatedDate: '2026-05',
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
          '**Die GPU-Preise 2026 haben jeden Build verteuert.** Eine Speicherchip-Knappheit hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben. Die Build-Summen hier sind Momentaufnahmen vom Mai 2026 und liegen höher als dieselben Teile vor einem Jahr — nutzen Sie den Gebrauchtmarkt für GPUs.',
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
          'GPU-VRAM- und Leistungsangaben sind Herstellerspezifikationen. Inferenzgeschwindigkeiten sind Schätzungen auf Modellfamilien-Ebene aus PromptQuorum-GPU-Tests für die GPU der jeweiligen Stufe. Die Build-Summen sind US-Momentaufnahmen vom Mai 2026 — der GPU-Preisanstieg 2026 hat die Karten auf das 1,5- bis 2-Fache der UVP getrieben, sodass die GPU-Zeile jede Summe dominiert und sich von Woche zu Woche bewegt. Der Gebrauchtkauf der GPU senkt jede Summe.',
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
        columns: ['Build-Stufe', 'GPU', 'VRAM', 'Führt aus', 'Netzteil', 'Gesamt (Mai 2026)'],
        rows: [
          {
            'Build-Stufe': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Führt aus': '7B- bis 13B-Modelle',
            'Netzteil': '650 W',
            'Gesamt (Mai 2026)': 'ca. 1.250 €',
          },
          {
            'Build-Stufe': 'Mittelklasse',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Führt aus': '14B bequem, leichte 22B-33B',
            'Netzteil': '850 W',
            'Gesamt (Mai 2026)': 'ca. 2.500 €',
          },
          {
            'Build-Stufe': 'Enthusiast',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Führt aus': '33B bequem, 70B bei Q4',
            'Netzteil': '1000 W',
            'Gesamt (Mai 2026)': 'ca. 5.200 €',
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
            text: 'Wegen des GPU-Preisanstiegs 2026 ist jede Summe in dieser Anleitung eine schnelllebige Momentaufnahme vom Mai 2026. Öffnen Sie vor dem Bau stets das aktuelle Händlerangebot für die GPU — ihr Preis hat sich von Woche zu Woche bewegt und dominiert die Build-Kosten.',
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
          '[Bester GPU-Kaufratgeber für lokale LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=de) — PromptQuorum: GPU-Preise vom Mai 2026 und der 1,5- bis 2-fache Anstieg über die UVP, der hier für die Build-Summen verwendet wird.',
          '[Lokale-LLM-Workstation bauen](/local-llms/local-llm-workstation-build?lang=de) — PromptQuorum: Teileliste, Kühlung und Netzteilhinweise für eine Dual-GPU-70B-Workstation hinter der Enthusiasten-Stufe.',
          '[NVIDIA GeForce RTX 40- und 50-Serie Spezifikationen](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Offizielle VRAM-Kapazitäts- und Leistungswerte (TGP) für RTX 4060 Ti, 4070 Ti Super und 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Live-Komponentenpreise für AMD-Ryzen-CPUs, DDR5-RAM, NVMe-SSDs und Netzteile mit Stand Mai 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Was kostet es 2026, einen PC für lokale KI zu bauen?',
            a: 'Ein Budget-Lokal-KI-PC kostet rund 1.250 €, ein Mittelklasse-Build rund 2.500 € und ein Enthusiasten-70B-Build rund 5.200 €. Das sind Momentaufnahmen vom Mai 2026 — die Speicherchip-Knappheit 2026 hat die GPU-Preise auf das 1,5- bis 2-Fache der UVP getrieben, und da die GPU die größte Position in jedem Build ist, hat sie jede Summe gegenüber demselben Teilesatz vor einem Jahr angehoben.',
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
          '[Wählen Sie die GPU für Ihren Build mit dem vollständigen Kaufratgeber](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=de) — acht GPUs über vier Budget-Stufen, mit Preisen vom Mai 2026 und der Rechnung zum Preisanstieg.',
          '[Sehen Sie den Dual-GPU-70B-Workstation-Build für den Produktiveinsatz](/local-llms/local-llm-workstation-build?lang=de) — die 4.000-6.000-€-Mehrnutzer-Stufe jenseits des Enthusiasten-Builds dieser Anleitung.',
          '[Vergleichen Sie den PC-Bau mit der Miete von Cloud-GPUs](/power-local-llm/cloud-gpu-rental-guide-2026?lang=de) — wann Mieten den Hardwarekauf für gelegentliche Rechenlast schlägt.',
          '[Ermitteln Sie das VRAM jeder Modellgröße vor dem Bau](/local-llms/how-much-vram-local-llm?lang=de) — die vollständige VRAM-nach-Modellgröße-Methode hinter den Stufenwahlen hier.',
          '[Ziehen Sie einen Mac als Alternative zu einem PC-Build in Betracht](/power-local-llm/best-mac-for-local-ai-2026?lang=de) — wann Apple Silicon mit vereinheitlichtem Speicher einen PC mit dedizierter GPU für lokale KI schlägt.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'Monter une station IA locale en 2026 : 3 niveaux de budget',
    seoTitle: 'PC pour IA locale 2026 : du budget à la station 70B',
    intro:
      'La plupart des guides de montage pour IA locale commencent par le processeur, mais ce sont le GPU et sa VRAM qui déterminent les modèles que la machine peut exécuter — chaque autre pièce est choisie pour soutenir ce GPU. Ce guide fournit trois listes de pièces complètes pour un PC dédié aux LLM locaux : une configuration budget pour les modèles 7B-13B, une configuration intermédiaire pour les modèles 14B-33B et une configuration enthousiaste pour le travail sur des modèles 70B. Chaque niveau précise les composants exacts, les performances attendues et un coût total. Une réserve sur les prix : la pénurie de puces mémoire de 2026 a poussé les prix des GPU à 1,5-2 fois au-dessus du tarif conseillé, ce qui renchérit chaque configuration ici par rapport aux mêmes pièces il y a un an — considérez chaque chiffre comme un instantané de mai 2026 et appuyez-vous sur le marché de l\'occasion pour les GPU lorsque c\'est possible.',
    metaDescription:
      'Trois configurations PC complètes pour l\'IA locale en 2026 : budget 7B-13B, intermédiaire 14B-33B et enthousiaste 70B. Listes de pièces exactes, débit attendu et coûts totaux de mai 2026.',
    twitterDescription:
      'Guide de montage d\'un PC pour IA locale : trois niveaux de budget avec listes de pièces complètes pour les modèles 7B à 70B. La hausse des prix des GPU en 2026 a renchéri chaque configuration — voici les totaux de mai 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Mistral 7B',
      'Llama 3.1 33B',
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
          'Choisissez votre niveau selon le plus grand modèle que vous voulez exécuter, puis montez autour du GPU. Une configuration budget (env. 1 250 €) associe une RTX 4060 Ti 16 GB à un processeur Ryzen 7 pour les modèles 7B-13B. Une configuration intermédiaire (env. 2 550 €) utilise une RTX 4070 Ti Super 16 GB pour les modèles 14B-33B. Une configuration enthousiaste (env. 5 300 €) emploie une RTX 5090 32 GB pour le travail 70B. La pénurie de mémoire de 2026 a poussé les prix des GPU bien au-dessus du tarif conseillé, donc chaque total est un instantané de mai 2026.',
        bullets: [
          'Configuration budget env. 1 250 € : RTX 4060 Ti 16 GB, exécute les modèles 7B-13B',
          'Configuration intermédiaire env. 2 550 € : RTX 4070 Ti Super 16 GB, exécute les modèles 14B-33B',
          'Configuration enthousiaste env. 5 300 € : RTX 5090 32 GB, exécute les modèles 70B en Q4',
          'Les prix des GPU en 2026 sont à 1,5-2 fois le tarif conseillé — achetez les GPU d\'occasion lorsque c\'est possible',
        ],
        updatedDate: '2026-05',
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
          '**Les prix des GPU en 2026 ont renchéri chaque configuration.** Une pénurie de puces mémoire a poussé les prix des GPU à 1,5-2 fois au-dessus du tarif conseillé. Les totaux ici sont des instantanés de mai 2026 et dépassent ce que coûtaient les mêmes pièces il y a un an — appuyez-vous sur le marché de l\'occasion pour les GPU.',
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
          'Les chiffres de VRAM et de puissance du GPU sont des spécifications constructeur. Les vitesses d\'inférence sont des estimations au niveau de la famille de modèles, issues des tests GPU de PromptQuorum pour le GPU du niveau concerné. Les totaux sont des instantanés américains de mai 2026 — la hausse des prix des GPU en 2026 a poussé les cartes à 1,5-2 fois le tarif conseillé, si bien que la ligne GPU domine chaque total et bouge d\'une semaine à l\'autre. Acheter le GPU d\'occasion abaisse chaque total.',
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
        columns: ['Niveau', 'GPU', 'VRAM', 'Exécute', 'Alimentation', 'Total (mai 2026)'],
        rows: [
          {
            'Niveau': 'Budget',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Exécute': 'modèles 7B-13B',
            'Alimentation': '650 W',
            'Total (mai 2026)': 'env. 1 250 €',
          },
          {
            'Niveau': 'Intermédiaire',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            'Exécute': '14B aisément, 22B-33B léger',
            'Alimentation': '850 W',
            'Total (mai 2026)': 'env. 2 550 €',
          },
          {
            'Niveau': 'Enthousiaste',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            'Exécute': '33B aisément, 70B en Q4',
            'Alimentation': '1000 W',
            'Total (mai 2026)': 'env. 5 300 €',
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
            text: 'En raison de la hausse des prix des GPU en 2026, chaque total de ce guide est un instantané de mai 2026 qui évolue vite. Ouvrez toujours l\'annonce actuelle du revendeur pour le GPU avant de monter — son prix a bougé d\'une semaine à l\'autre et il domine le coût de la configuration.',
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
          '[Meilleur guide d\'achat de GPU pour LLM locaux 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=fr) — PromptQuorum : prix des GPU de mai 2026 et hausse de 1,5-2 fois au-dessus du tarif conseillé, utilisés ici pour les totaux des configurations.',
          '[Monter une station de travail LLM locale](/local-llms/local-llm-workstation-build?lang=fr) — PromptQuorum : liste de pièces, refroidissement et conseils d\'alimentation pour une station 70B bi-GPU au-delà du niveau enthousiaste.',
          '[Spécifications des séries NVIDIA GeForce RTX 40 et 50](https://www.nvidia.com/en-us/geforce/graphics-cards/) — Capacité de VRAM et puissance (TGP) officielles pour les RTX 4060 Ti, 4070 Ti Super et 5090.',
          '[PCPartPicker](https://pcpartpicker.com) — Tarifs de composants en direct pour les processeurs AMD Ryzen, la RAM DDR5, les SSD NVMe et les alimentations en mai 2026.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Combien coûte le montage d\'un PC pour IA locale en 2026 ?',
            a: 'Un PC budget pour IA locale coûte environ 1 250 €, une configuration intermédiaire environ 2 550 € et une configuration enthousiaste 70B environ 5 300 €. Ce sont des instantanés de mai 2026 — la pénurie de puces mémoire de 2026 a poussé les prix des GPU à 1,5-2 fois au-dessus du tarif conseillé et, comme le GPU est la plus grande ligne de chaque configuration, elle a relevé chaque total par rapport aux mêmes pièces il y a un an.',
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
          '[Choisissez le GPU de votre configuration avec le guide d\'achat complet](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=fr) — huit GPU sur quatre niveaux de budget, avec les prix de mai 2026 et le calcul de la hausse.',
          '[Découvrez la configuration de station 70B bi-GPU pour un usage en production](/local-llms/local-llm-workstation-build?lang=fr) — le niveau multi-utilisateur à 4 000-6 000 € au-delà de la configuration enthousiaste de ce guide.',
          '[Comparez le montage d\'un PC à la location de GPU cloud](/power-local-llm/cloud-gpu-rental-guide-2026?lang=fr) — quand la location bat la possession de matériel pour un calcul occasionnel.',
          '[Calculez la VRAM nécessaire à chaque taille de modèle avant de monter](/local-llms/how-much-vram-local-llm?lang=fr) — la méthode complète de VRAM par taille de modèle derrière les choix de niveau ici.',
          '[Envisagez un Mac comme alternative à un montage PC](/power-local-llm/best-mac-for-local-ai-2026?lang=fr) — quand l\'Apple Silicon à mémoire unifiée bat un PC à GPU dédié pour l\'IA locale.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'ローカルAIワークステーション自作ガイド2026：予算別3構成',
    seoTitle: 'ローカルAI PC自作2026：エントリーから70B対応機まで',
    intro:
      'ローカルAI向けの自作ガイドの多くはCPUから始まりますが、マシンが実行できるモデルを決めるのはGPUとそのVRAMであり、他のすべてのパーツはそのGPUを支えるために選ばれます。本ガイドでは、ローカルLLM用PCの完全なパーツリストを3構成示します。7B〜13Bモデル向けのエントリー構成、14B〜33Bモデル向けのミドル構成、70B作業向けのハイエンド構成です。各ティアには正確なコンポーネント、想定される性能、合計コストを記載しています。価格について1点ご注意ください。2026年のメモリチップ不足によりGPU価格は希望小売価格の1.5〜2倍に上昇し、本ガイドのすべての構成コストは1年前の同じパーツより高くなっています。各数値は2026年5月時点のスナップショットとして扱い、可能な範囲で中古GPU市場を活用してください。',
    metaDescription:
      '2026年のローカルAI向けPC完全自作構成3種：エントリー7B〜13B、ミドル14B〜33B、ハイエンド70B。正確なパーツリスト、想定トークン/秒、2026年5月の合計コストを掲載。',
    twitterDescription:
      'ローカルAI PC自作ガイド：7B〜70Bモデル向けの完全パーツリストを備えた予算別3構成。2026年のGPU価格高騰がすべての構成コストを押し上げた——2026年5月の合計はこちら。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.1 8B',
      'Qwen3 8B',
      'Mistral 7B',
      'Llama 3.1 33B',
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
          '実行したい最大のモデルでティアを選び、GPUを中心に組み立てます。エントリー構成（約¥185,000）はRTX 4060 Ti 16 GBとRyzen 7 CPUを組み合わせ、7B〜13Bモデルに対応します。ミドル構成（約¥400,000）はRTX 4070 Ti Super 16 GBを用いて14B〜33Bモデルに対応します。ハイエンド構成（約¥850,000）はRTX 5090 32 GBを用いて70B作業に対応します。2026年のメモリ不足によりGPU価格は希望小売価格を大きく上回っているため、いずれの合計も2026年5月時点のスナップショットです。',
        bullets: [
          'エントリー構成 約¥185,000：RTX 4060 Ti 16 GB、7B〜13Bモデルを実行',
          'ミドル構成 約¥400,000：RTX 4070 Ti Super 16 GB、14B〜33Bモデルを実行',
          'ハイエンド構成 約¥850,000：RTX 5090 32 GB、70BモデルをQ4で実行',
          '2026年のGPU価格は希望小売価格の1.5〜2倍——可能な範囲でGPUは中古を購入',
        ],
        updatedDate: '2026-05',
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
          '**2026年のGPU価格はすべての構成コストを押し上げました。** メモリチップ不足によりGPU価格は希望小売価格の1.5〜2倍に上昇しました。本ガイドの構成合計は2026年5月時点のスナップショットで、1年前の同じパーツより高くなっています——中古GPU市場を活用してください。',
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
          'GPUのVRAMと電力の数値はメーカー仕様です。推論速度は、各ティアのGPUに対するPromptQuorumのGPUテストに基づくモデルファミリーレベルの推定値です。構成合計は2026年5月時点の米国のスナップショットです——2026年のGPU価格高騰によりカード価格は希望小売価格の1.5〜2倍に上昇したため、GPUの行が各合計を支配し、週ごとに変動します。GPUを中古で購入すると、いずれの合計も下がります。',
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
        columns: ['構成ティア', 'GPU', 'VRAM', '実行可能', '電源', '合計（2026年5月）'],
        rows: [
          {
            '構成ティア': 'エントリー',
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '実行可能': '7B〜13Bモデル',
            '電源': '650 W',
            '合計（2026年5月）': '約¥185,000',
          },
          {
            '構成ティア': 'ミドル',
            'GPU': 'RTX 4070 Ti Super 16 GB',
            'VRAM': '16 GB',
            '実行可能': '14Bを快適に、軽めの22B〜33B',
            '電源': '850 W',
            '合計（2026年5月）': '約¥400,000',
          },
          {
            '構成ティア': 'ハイエンド',
            'GPU': 'RTX 5090 32 GB',
            'VRAM': '32 GB',
            '実行可能': '33Bを快適に、70BをQ4で',
            '電源': '1000 W',
            '合計（2026年5月）': '約¥850,000',
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
            text: '2026年のGPU価格高騰のため、本ガイドのすべての合計は変動の速い2026年5月時点のスナップショットです。組む前に必ずGPUの現在の販売店ページを開いてください——価格は週ごとに動いており、構成コストを支配します。',
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
          '[ローカルLLM向け最良のGPU購入ガイド2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=ja) — PromptQuorum：本ガイドの構成合計に用いた2026年5月のGPU価格と、希望小売価格に対する1.5〜2倍の高騰。',
          '[ローカルLLMワークステーションを組む](/local-llms/local-llm-workstation-build?lang=ja) — PromptQuorum：ハイエンドティアの先にあるデュアルGPU 70Bワークステーションのパーツリスト、冷却、電源の指針。',
          '[NVIDIA GeForce RTX 40・50シリーズ仕様](https://www.nvidia.com/en-us/geforce/graphics-cards/) — RTX 4060 Ti、4070 Ti Super、5090の公式VRAM容量と電力（TGP）の数値。',
          '[PCPartPicker](https://pcpartpicker.com) — 2026年5月時点のAMD Ryzen CPU、DDR5 RAM、NVMe SSD、電源のリアルタイム部品価格。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '2026年にローカルAI用のPCを組む費用はいくらですか？',
            a: 'エントリーのローカルAI PCはおよそ¥185,000、ミドル構成はおよそ¥400,000、ハイエンドの70B構成はおよそ¥850,000です。これらは2026年5月時点のスナップショットです——2026年のメモリチップ不足によりGPU価格は希望小売価格の1.5〜2倍に上昇し、GPUはすべての構成で最大の項目であるため、1年前の同じパーツより各合計を引き上げました。',
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
          '[完全な購入ガイドで構成のGPUを選ぶ](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=ja) — 4つの予算ティアにわたる8つのGPU、2026年5月の価格と高騰の計算付き。',
          '[本番運用向けのデュアルGPU 70Bワークステーション構成を見る](/local-llms/local-llm-workstation-build?lang=ja) — 本ガイドのハイエンド構成の先にある、¥4,000〜6,000相当の多人数向けティア。',
          '[PCを組むこととクラウドGPUのレンタルを比較する](/power-local-llm/cloud-gpu-rental-guide-2026?lang=ja) — たまの計算用途では、レンタルがハードウェア所有を上回る場合。',
          '[組む前に各モデルサイズが必要とするVRAMを算出する](/local-llms/how-much-vram-local-llm?lang=ja) — ここでのティア選択の背景にある、モデルサイズ別VRAMの完全な算出法。',
          '[PC構成の代替としてMacを検討する](/power-local-llm/best-mac-for-local-ai-2026?lang=ja) — 統合メモリのApple Siliconが、ローカルAIで専用GPUのPCを上回る場合。',
        ],
      },
    },
  },
}
