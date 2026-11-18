// Power Local LLM — Best GPUs for Local LLMs: Complete Buying Guide 2026
// Slug: best-gpu-buying-guide-local-llm-2026
// Affiliate buying guide. Outbound product links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: snapshot. GPU prices surged in 2026 (sources disagree on the causes) —
// the RTX 5090 runs up to about 2.5x above its original MSRP, the RTX 5060 Ti
// and RTX 5070 Ti about 1.35-1.45x. Most prices: BuySellRAM lowest US asking prices.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Best Graphics Card for Local LLMs: GPU Buying Guide 2026',
    seoTitle: 'Best Graphics Card for Local LLMs 2026: Budget to RTX 5090',
    intro:
      'Most local-LLM GPU advice optimizes for the wrong number. Speed in tokens per second decides how fast a model answers, but VRAM decides whether the model runs at all — and a model that does not fit is infinitely slower than one that does. This guide compares ten consumer graphics cards across four price tiers on the figures that actually bind a purchase: VRAM capacity, inference speed, power draw, and price. One caveat on price: GPU prices surged in 2026 (reported contributors include memory supply and AI-datacenter demand, and the sources disagree on the mix) — an RTX 5090 now lists at roughly 2.5x its MSRP — so most prices here are the lowest US asking prices from the BuySellRAM data linked in Sources, and the RTX 4090 and RTX 5090 ranges also draw on InsiderLLM sold-listing data; confirm current pricing before you buy.',
    metaDescription:
      'Which graphics card for local LLMs? Ten GPUs compared on VRAM, speed, power and 2026 US asking prices, from the cheapest pick to the RTX 5090.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-en.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — ten graphics cards, four budgets, one decision rule: buy for VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      'Buyers choosing a GPU specifically to run local LLMs, deciding by budget tier and target model size. Assumes familiarity with quantization and VRAM as a constraint, but not with specific current GPU SKUs.',
    readTime: '14 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      'best gpu for local llm 2026',
      'gpu buying guide local llm',
      'rtx 3060 vs rtx 4090 local llm',
      'how much vram for local llm',
      'cheapest gpu for local llm',
      'best graphics card for local llm',
      'local llm gpu requirements',
    ],
    leadAnswerBlock:
      '**The best graphics card for local LLMs is the one whose VRAM fits your model, not the fastest card. An RTX 3060 12 GB runs any 7B model, a 16 GB card (RTX 5060 Ti, RTX 4060 Ti or RTX 5070 Ti) handles 14B models, an RTX 4090 24 GB handles 33B models, and of the cards in this guide only the RTX 5090 32 GB comes close to a 70B model, and only with aggressive quantization or partial CPU offload (70B at Q4 is about 43 GB per Ollama).**',
    quickAnswerTop: {
      en: {
        question: 'What is the best graphics card for running local LLMs in 2026?',
        answer:
          'Buy for VRAM, then speed. An RTX 3060 12 GB (~$320-400) is the budget pick and runs any 7B model. A 16 GB card is the mid-tier pick for 14B models — an RTX 5060 Ti 16 GB (~$620 new) or a used RTX 4060 Ti 16 GB (~$650). An RTX 4090 24 GB runs 33B models, and of the cards in this guide only the RTX 5090 32 GB (~$4,500-4,900) comes close to 70B, and only with aggressive quantization or partial CPU offload (70B at Q4 is about 43 GB per Ollama). Note that 2026 prices run well above MSRP.',
        bullets: [
          'Budget: RTX 3060 12 GB, ~$320-400 new or used, runs every 7B model at ~76 tok/s (Llama 2 7B Q4_0, developer-reported)',
          'Mid: RTX 5060 Ti 16 GB, ~$620 new ([MSRP $429](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)), runs 14B models with headroom',
          'Enthusiast: RTX 5090 32 GB, ~$4,500-4,900, the only 32 GB card here; 70B (about 43 GB at Q4) needs aggressive quantization or offload',
          '2026 GPU prices run up to about 2.5x above MSRP (RTX 5090; about 1.35-1.45x on the RTX 5060 Ti and RTX 5070 Ti) — compare new and used before you buy',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Editor\'s Choice', anchor: '#editors-choice' },
      { label: 'GPU Comparison Table', anchor: '#comparison-table' },
      { label: 'Which GPU Should You Buy?', anchor: '#which-gpu' },
      { label: 'Budget Tier ($320-400)', anchor: '#budget-tier' },
      { label: 'Mid Tier ($620-790)', anchor: '#mid-tier' },
      { label: 'High Tier ($900-1200)', anchor: '#high-tier' },
      { label: 'Enthusiast Tier ($2000+)', anchor: '#enthusiast-tier' },
      { label: 'GPU Requirements: How Much VRAM?', anchor: '#vram-needs' },
      { label: 'Why GPU Prices Surged in 2026', anchor: '#price-surge' },
      { label: 'Decision Flowchart', anchor: '#decision-flowchart' },
      { label: 'Regional Pricing & Where to Buy', anchor: '#where-to-buy' },
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
          '**VRAM is the binding constraint.** A model that does not fit in VRAM either fails to load or spills to system RAM and becomes too slow for interactive use. Choose the tier whose VRAM fits your target model, then optimize for speed within that tier.',
          '**Prices surged in 2026.** GPU prices rose up to about 2.5x above MSRP (RTX 5090; about 1.35-1.45x on the RTX 5060 Ti and RTX 5070 Ti). Reported contributors include DRAM/GDDR7 supply, AI-datacenter demand and reported production changes, and the sources disagree on how much each contributes. An RTX 5090 lists at ~$4,500-4,900, not its $1,999 launch price, and prices rose again between August and October. Treat the prices here as a snapshot — most are US asking prices, and the RTX 4090 and RTX 5090 ranges also draw on sold-listing data — and compare new against used before you buy.',
          '**Budget pick: NVIDIA RTX 3060 12 GB** (~$320-400, new and used now cost about the same) — runs every 7B model (~76 tok/s on Llama 2 7B Q4_0, developer-reported) and most 13B models at Q4.',
          '**Mid pick: NVIDIA RTX 5060 Ti 16 GB** (~$618 new, ~$649 used asking) — 16 GB of VRAM clears 14B models with context headroom, and its 448 GB/s memory bandwidth (~91 tok/s, developer-reported) is faster than the older RTX 4060 Ti 16 GB at 288 GB/s (~64 tok/s on the 8 GB card, developer-reported). Used, the two cost about the same (~$650); the ~$790 new floor for the RTX 4060 Ti 16 GB comes from only three listings per BuySellRAM.',
          '**High pick: NVIDIA RTX 4080 Super 16 GB** (~$1,200) — the highest-priced 16 GB card here (~148 tok/s, developer-reported). The RTX 4070 Ti Super (~$900) and RTX 5070 Ti (~$1,008) cost less and may be the better value; the RTX 5070 Ti is faster in the same developer-reported tests (~177 tok/s).',
          '**Enthusiast pick: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — the RTX 4090 (~$2,000+ new, ~$2,575-3,010 used) runs 33B models; of the cards in this guide, only the RTX 5090 (~$4,500-4,900) comes close to 70B, and only with aggressive quantization or partial CPU offload (70B at Q4 is about 43 GB per Ollama).',
          '**AMD is viable but higher-friction.** The RX 6700 XT (12 GB) and RX 7800 XT (16 GB) offer VRAM at competitive prices, but ROCm setup time varies by distro and card.',
          '**Power draw scales with the tier.** An RTX 3060 draws 170 W; an RTX 5090 is rated at 575 W TGP, and [NVIDIA lists](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) 1000 W required system power (Ryzen 9 9950X configuration) and an 850 W minimum in its PSU checker. Budget the power supply alongside the card.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Budget tier ($320-400):** RTX 3060 12 GB or RX 6700 XT 12 GB — runs 7B and most 13B models.',
          '**Mid tier ($620-790):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB or RX 7800 XT 16 GB — runs 14B models comfortably.',
          '**High tier ($900-1,200):** RTX 4080 Super, RTX 5070 Ti or RTX 4070 Ti Super, all 16 GB — fast 14B inference, light 22B work.',
          '**Enthusiast tier ($2,000+):** RTX 4090 24 GB or RTX 5090 32 GB — 33B models, and 70B only with aggressive quantization or partial CPU offload on the 5090.',
          '**VRAM rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**Power draw range:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**2026 price reality:** prices rose up to about 2.5x above MSRP (RTX 5090; about 1.35-1.45x on the RTX 5060 Ti and RTX 5070 Ti), and the sources disagree on the causes; used cards no longer reliably cost less than new, so compare both.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice (Premium 16 GB): RTX 4080 Super',
        highlight: true,
        content:
          '**For buyers who want a premium 16 GB card and can stretch past $1,000, the NVIDIA RTX 4080 Super 16 GB is our Editor\'s Choice — a pick for a premium 16 GB build, not for value.** Its 16 GB of VRAM clears every 14B model with context headroom, it reaches about 148 tok/s on Llama 2 7B Q4_0 (developer-reported), and at ~$1,200 it is the highest-priced 16 GB card here. The RTX 4070 Ti Super (~$900, ~132 tok/s) and the RTX 5070 Ti (~$1,008, ~177 tok/s) cost about $300 and ~$190 less and may be the better value; the RTX 5070 Ti is faster in the same developer-reported tests. If your budget is fixed below $700, the RTX 5060 Ti 16 GB is the value pick. Spend more only if you specifically need 33B or 70B models.',
        callouts: [
          {
            type: 'note',
            text: 'This Editor\'s Choice is a premium 16 GB pick, not a price-to-capability ranking: the RTX 4070 Ti Super and RTX 5070 Ti cost less and may be the better value. PromptQuorum is not enrolled in any affiliate program and the links below carry no affiliate tags — they are plain reference links that earn no commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Check RTX 4080 Super price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Check RTX 4080 Super price on Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Ten GPUs Compare for Local LLMs in 2026',
        content:
          'VRAM and power figures are manufacturer specifications. Speeds marked dev-reported are developer-reported llama-bench results (Llama 2 7B Q4_0, CUDA) from the llama.cpp scoreboard linked in Sources; entries come from different users and builds, and we did not re-measure them. The RTX 4060 Ti 16 GB figure is the 8 GB card\'s result (same GPU die and 288 GB/s memory bandwidth). The RX 6700 XT and RX 7800 XT have no result there, so their speeds are rough estimates (est.) scaled from memory bandwidth against the measured results. Most prices are the lowest US asking prices in the linked BuySellRAM data; the RTX 4090 and RTX 5090 ranges combine those with InsiderLLM retail and sold-listing ranges (updated 2026-10-15). Prices rose up to about 2.5x above MSRP (RTX 5090; about 1.35-1.45x on the RTX 5060 Ti and RTX 5070 Ti), so re-check before buying (see the page update date). The linked budget-GPU page uses earlier estimates for some cards (for example about $290-330 used for the RTX 3060 12 GB), so figures can differ slightly between the two pages.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For local LLMs, a GPU\'s VRAM decides which models you can run and its tokens-per-second decides how fast they answer — buy for the first, then optimize the second.',
          },
          {
            type: 'plain-terms',
            text: 'Think of VRAM as the size of the desk and the model as the thing you put on it. A faster GPU clears the desk quicker, but if the model does not fit on the desk at all, speed never enters the picture. Pick the tier whose desk is big enough first.',
          },
        ],
        columns: ['GPU', 'VRAM', 'Speed (7B Q4)', 'Power', 'Price (US, 2026)', 'Best for'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Speed (7B Q4)': '~76 tok/s (dev-reported)',
            'Power': '170 W',
            'Price (US, 2026)': '$320-400 new / $320-350 used',
            'Best for': 'Budget entry — any 7B model',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Speed (7B Q4)': '~65-80 tok/s (est.)',
            'Power': '230 W',
            'Price (US, 2026)': 'Varies by seller — check live',
            'Best for': 'AMD 12 GB, accepts ROCm setup',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~64 tok/s (8 GB card, dev-reported)',
            'Power': '165 W',
            'Price (US, 2026)': '~$790 new / ~$650 used',
            'Best for': 'Mid tier — 14B models, low power',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~91 tok/s (dev-reported)',
            'Power': '180 W',
            'Price (US, 2026)': '$618 new / $649 used',
            'Best for': 'Mid tier — 14B, current generation',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~90-115 tok/s (est.)',
            'Power': '263 W',
            'Price (US, 2026)': 'AMD prices: check live listings',
            'Best for': '16 GB on AMD, accepts ROCm setup',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~132 tok/s (dev-reported)',
            'Power': '285 W',
            'Price (US, 2026)': '$900 new / $920 used',
            'Best for': 'Fast 14B, lower power draw',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~177 tok/s (dev-reported)',
            'Power': '300 W',
            'Price (US, 2026)': '$1,008 new / $1,050 used',
            'Best for': 'Fast 14B, value 16 GB',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~148 tok/s (dev-reported)',
            'Power': '320 W',
            'Price (US, 2026)': '$1,200 new / $1,149 used',
            'Best for': 'Editor\'s Choice — premium 16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Speed (7B Q4)': '~186 tok/s (dev-reported)',
            'Power': '450 W',
            'Price (US, 2026)': '~$2,000+ new / $2,575-3,010 used',
            'Best for': '33B models, dual-GPU 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Speed (7B Q4)': '~290 tok/s (dev-reported)',
            'Power': '575 W',
            'Price (US, 2026)': '$4,500-4,921 new / $5,880-6,350 used',
            'Best for': '70B only with aggressive quantization or offload',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-en.webp',
        imageCaption:
          'Ten consumer graphics cards for local LLMs compared by VRAM, 7B Q4 inference speed, power draw, and current US price across four budget tiers. VRAM rises from 12 GB (RTX 3060) to 32 GB (RTX 5090); buy for the model size you need before optimizing for speed.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Which GPU Should You Buy?',
        content:
          '**Your largest target model decides your tier; your budget decides NVIDIA versus AMD inside that tier.** Find the row that matches your situation.',
        columns: ['Your situation', 'Buy this'],
        rows: [
          { 'Your situation': 'I have under $400 and want to run 7B models', 'Buy this': 'RTX 3060 12 GB' },
          { 'Your situation': 'I can find a cheap 12 GB AMD card and accept setup work', 'Buy this': 'RX 6700 XT (check live prices)' },
          { 'Your situation': 'I want to run 14B models on a tight power budget', 'Buy this': 'RTX 5060 Ti 16 GB (or a used RTX 4060 Ti 16 GB)' },
          { 'Your situation': 'I want a card that runs 14B fast and lasts several years', 'Buy this': 'RTX 5070 Ti or RTX 4070 Ti Super 16 GB' },
          { 'Your situation': 'I want a premium 16 GB card and price is secondary', 'Buy this': 'RTX 4080 Super 16 GB (5070 Ti costs less)' },
          { 'Your situation': 'I need 33B models or plan a future dual-GPU 70B build', 'Buy this': 'RTX 4090 24 GB' },
          { 'Your situation': 'I need a single card for 70B models (aggressive quantization or partial offload)', 'Buy this': 'RTX 5090 32 GB' },
          { 'Your situation': 'I am unsure and want the safest first GPU', 'Buy this': 'RTX 3060 12 GB — upgrade later if you outgrow it' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Budget Tier ($320-400): RTX 3060 12 GB and RX 6700 XT',
        content:
          '**The budget tier runs every 7B model and most 13B models — and for most first-time local-LLM users, that is all the capability they need.** The RTX 3060 12 GB is the recommended pick; the RX 6700 XT is the AMD alternative if you accept setup friction. Prices in this tier rose through 2026, and a used RTX 3060 now costs about the same as a new one — compare both.',
        items: [
          '**RTX 3060 12 GB (~$320-400 new, ~$320-350 used):** 12 GB VRAM, 170 W, ~76 tok/s on Llama 2 7B Q4_0 (developer-reported). Runs Ministral 3 8B, Qwen3 8B, DeepSeek-R1 7B, and most 13B models. The 12 GB variant is the one to buy — avoid the 6 GB variant, which is limited to 3B models. New stock is limited and a used card no longer saves much, so buy whichever is cheaper with a return window.',
          '**RX 6700 XT (used, price varies by seller):** 12 GB VRAM, 230 W, roughly 65-80 tok/s on 7B models (rough estimate scaled from memory bandwidth, not measured). Check live listings, and note it depends on AMD ROCm, which adds setup time.',
          '**Why buy this tier:** lowest cost of entry, low power draw on the RTX 3060, and enough VRAM for the 7B-13B models that cover general chat, coding assistance, and summarization.',
          '**Why skip this tier:** if you already know you want 14B or larger models, the budget tier will frustrate you within weeks — start at the mid tier instead.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Buy the RTX 3060 in its 12 GB version specifically. The 6 GB RTX 3060 looks similar in listings but only fits 3B models — half the parameter count is the difference between a usable assistant and a toy.',
          },
          {
            type: 'warning',
            text: 'The RX 6700 XT can be a low-cost entry, but ROCm setup time on Linux varies by distro and card, so check AMD\'s supported-GPU list first. If the saving versus an RTX 3060 is small, buy the NVIDIA card.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'Check RTX 3060 12GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'Check RX 6700 XT price on Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Mid Tier ($620-790): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB and RX 7800 XT',
        content:
          '**The mid tier exists for one reason: 16 GB of VRAM clears 14B models that 12 GB cards cannot fit with usable context.** If 14B-class models are your target, this is the cheapest tier that runs them properly. The RTX 5060 Ti 16 GB is the current-generation pick and, at the asking prices used in this guide, also the lowest-priced NVIDIA 16 GB option; the RTX 4060 Ti 16 GB costs about the same used (~$650) and more new (~$790, from only three BuySellRAM listings).',
        items: [
          '**RTX 5060 Ti 16 GB (~$618 new / ~$649 used asking, $429 MSRP):** 16 GB GDDR7, 180 W, 448 GB/s memory bandwidth. We did not benchmark it for this guide; the llama.cpp scoreboard lists about 91 tok/s on Llama 2 7B Q4_0 (developer-reported). It runs Qwen3 14B-class models comfortably. Prices rose about 44% above MSRP in 2026.',
          '**RTX 4060 Ti 16 GB (~$790 new / ~$650 used asking):** 16 GB VRAM, 165 W, about 64 tok/s on 7B models (the llama.cpp scoreboard figure for the 8 GB card, developer-reported). It uses the same GPU die and 288 GB/s memory bandwidth as the 8 GB RTX 4060 Ti, so per-token speed is similar — the 16 GB version buys capacity, not raw speed. Used it costs about the same as the RTX 5060 Ti 16 GB (~$650 vs ~$649); the ~$790 new floor comes from only three BuySellRAM listings.',
          '**RX 7800 XT (AMD price: check live listings — the BuySellRAM data covers NVIDIA only):** 16 GB VRAM, 263 W. It was not individually benchmarked for this guide; expect roughly 90-115 tok/s on 7B Q4 (rough estimate scaled from memory bandwidth, not measured), with AMD ROCm setup as the trade-off.',
          '**Why buy this tier:** you want 14B models, you want low power draw (RTX 4060 Ti), or you want 16 GB at the lowest possible price.',
          '**Why skip this tier:** if 7B models are enough, the budget tier costs $200-300 less; if you want fast 14B inference, the high tier is meaningfully quicker.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The RTX 4060 Ti 16 GB is a capacity upgrade, not a speed upgrade, over the 8 GB version — buy it because you need to fit 14B models, not because you expect more tokens per second. The RTX 5060 Ti 16 GB is the faster option and, at the asking prices used in this guide, costs less new and about the same used.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'Check RTX 5060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'Check RTX 4060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'Check RX 7800 XT price on Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'High Tier ($900-1,200): RTX 4080 Super, RTX 5070 Ti and RTX 4070 Ti Super',
        content:
          '**The high tier keeps 16 GB of VRAM but adds the speed that makes 7B-14B models feel instant and 22B models usable.** All three cards fit the same models as the mid tier — you are paying for tokens per second, not capacity. The 2026 surge widened the gap between this tier and the mid tier.',
        items: [
          '**RTX 4080 Super 16 GB (~$1,200 new / ~$1,149 used):** 16 GB VRAM, 320 W, about 148 tok/s on Llama 2 7B Q4_0 (developer-reported). The Editor\'s Choice as a premium 16 GB option — the highest-priced card here, at roughly $190-300 over the two cards below, and slower than the RTX 5070 Ti in the same tests.',
          '**RTX 5070 Ti 16 GB (~$1,008 new / ~$1,050 used asking, [$749 MSRP](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)):** 16 GB GDDR7, 300 W, 896 GB/s memory bandwidth. Not benchmarked for this guide; the llama.cpp scoreboard lists about 177 tok/s on Llama 2 7B Q4_0 (developer-reported), and 16 GB runs a 24B Q4 model with headroom.',
          '**RTX 4070 Ti Super 16 GB (~$900 new / ~$920 used):** 16 GB VRAM, 285 W, about 132 tok/s (developer-reported). The cheapest new card in this tier, with the lowest power draw of the three.',
          '**Why buy this tier:** you run 14B models constantly and want them instant, or you do light 22B work and want headroom.',
          '**Why skip this tier:** if you need 33B or 70B models, no 16 GB card will fit them — move to the enthusiast tier instead of overspending here.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Within this tier, the RTX 5070 Ti is the fastest in the developer-reported tests (~177 tok/s), the RTX 4070 Ti Super is the cheapest new, and the RTX 4080 Super is the highest-priced. Unless you specifically want the RTX 4080 Super, pick one of the cheaper two.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Check RTX 4080 Super price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'Check RTX 5070 Ti price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Enthusiast Tier ($2,000+): RTX 4090 and RTX 5090',
        content:
          '**The enthusiast tier is the only tier that runs models above 22B — and of the cards in this guide, only the RTX 5090 32 GB comes close to a 70B model: 70B at Q4 is about 43 GB per Ollama, so even it requires aggressive quantization or partial CPU offload.** Buy here for VRAM capacity, not speed; the speed is a side effect. The 2026 surge hit the RTX 5090 hardest, so prices move week to week.',
        items: [
          '**RTX 4090 24 GB (~$2,000+ new / ~$2,575-3,010 used):** 24 GB VRAM, 450 W, about 186 tok/s on Llama 2 7B Q4_0 (developer-reported). Runs 33B models comfortably. New RTX 4090 stock is thin and the new-price floor may be stale — listings range up to ~$3,800.',
          '**RTX 5090 32 GB (~$4,500-4,921 new / ~$5,880-6,350 used, $1,999 MSRP):** 32 GB GDDR7 VRAM, 575 W, about 290 tok/s on Llama 2 7B Q4_0 (developer-reported). The 32 GB capacity is the headline — it is the only card in this guide with 32 GB, though a 70B model at Q4 is about 43 GB per Ollama and so still requires aggressive quantization or partial CPU offload. Asking prices rose about 64% between August and October, and used listings sit above new.',
          '**Why buy this tier:** you need 33B or 70B models, you run batch inference, or you want a card that will not need replacing for years.',
          '**Why skip this tier:** for 7B-14B models it is overkill — the high tier delivers instant responses on those sizes for less than half the price and power draw.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NVIDIA lists the RTX 5090 at 575 W TGP, with 1000 W required system power (Ryzen 9 9950X configuration) and an 850 W minimum in its PSU checker (see its RTX 5090 page in Sources). An undersized power supply may sag under load, so budget the power supply into the purchase. This is not electrical-safety advice; follow the card maker\'s PSU and cable guidance.',
          },
          {
            type: 'note',
            text: 'At observed used prices of ~$2,575-3,010 per RTX 4090 (InsiderLLM sold listings, updated 2026-10-15), a pair costs about $5,150-6,020, more than a single RTX 5090 (~$4,500-4,900 new), so the single card is the simpler 70B build.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'Check RTX 4090 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'Check RTX 5090 price on Amazon',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'GPU Requirements for Local LLMs: How Much VRAM Do You Need?',
        content:
          '**At Q4_K_M quantization, a model needs roughly 0.6 GB of VRAM per billion parameters, plus 2-4 GB for context and tooling overhead.** That formula maps directly onto the four tiers.',
        items: [
          '**7B models — 8-9 GB:** fit any tier. A 12 GB card leaves comfortable headroom.',
          '**13-14B models — 11-13 GB:** need 16 GB in practice once context and tooling are counted. Mid tier and up (RTX 5060 Ti 16 GB or better).',
          '**22B models — 14-16 GB:** tight on a 16 GB card; comfortable from the high tier up.',
          '**33B models — 19-22 GB:** need a 24 GB card. RTX 4090 territory.',
          '**70B models — about 43 GB at Q4 (Llama 3.3 70B, per Ollama):** exceed any single card here; the RTX 5090 32 GB comes close only with aggressive quantization or partial CPU offload, otherwise plan a dual-GPU build. A single 24 GB card cannot fit a 70B model at Q4.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Context length is a hidden VRAM cost — long prompts and large context windows consume VRAM on top of the model weights. Always leave 2-4 GB of headroom. For the full method, see the VRAM requirements guide linked in Related Reading.',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Why GPU Prices Surged in 2026',
        content:
          '**GPU prices rose sharply in 2026, pushing consumer cards up to about 2.5x above their original MSRP (RTX 5090; about 1.35-1.45x on the RTX 5060 Ti and RTX 5070 Ti); the sources disagree on the cause.** This changes the buying math, so plan around it rather than around launch prices.',
        items: [
          '**No single cause is established.** Reported contributors include DRAM/GDDR7 supply, AI-datacenter demand and reported production changes, and the sources disagree on how much each contributes. [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) and [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) both treat memory as part of the story; BuySellRAM says it cannot be most of it, and its data cannot separate memory from supply, allocation and demand.',
          '**The RTX 5090 is the clearest example:** a $1,999 launch price, but ~$4,921 as the lowest US asking price in the BuySellRAM data — about 2.5x, and up 64% since August.',
          '**Smaller cards rose too, by different amounts.** The RTX 5060 Ti 16 GB lists ~44% above its $429 MSRP and the RTX 5070 Ti ~35% above $749, even though both carry 16 GB.',
          '**Used is no longer automatically cheaper.** In the BuySellRAM asking-price data, used RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti and RTX 5070 Ti listings sat at or above new ones, and the used RTX 3060 12 GB rose about 31% since August. Compare both and prefer sellers with returns.',
          '**Do not count on a refresh.** NVIDIA\'s RTX 50 Super cards have been reported as indefinitely delayed over memory supply (NVIDIA has not confirmed this). **Decision:** if you can wait, watch for prices to ease; if you cannot, buy the smallest card that fits your target model.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GPU prices in 2026 run up to about 2.5x above MSRP (RTX 5090; about 1.35-1.45x on the RTX 5060 Ti and RTX 5070 Ti); reported contributors include DRAM/GDDR7 supply and AI-datacenter demand, and the sources disagree on the mix, so a local-LLM buyer should compare new and used prices and buy the smallest card that fits the target model.',
          },
          {
            type: 'plain-terms',
            text: 'The cards did not get better, but they got more expensive, and the sources disagree on how much of that is memory and how much is demand or supply allocation. Until prices ease, treat MSRP as a historical number, compare new and used, and do not pay for more VRAM than your model actually needs.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Decision Flowchart: Pick Your GPU in Four Questions',
        content:
          '**Four questions, in order, route most buyers to one card.**',
        items: [
          '**1. What is the largest model you want to run?** 7B: budget tier. 14B: mid tier (a 16 GB card). 22B: high tier. 33B: RTX 4090. 70B: RTX 5090 or dual-GPU.',
          '**2. What is your hard budget ceiling?** Under ~$400: RTX 3060 12 GB. Under ~$700: RTX 5060 Ti 16 GB or a used RTX 4060 Ti 16 GB. ~$900-1,200: RTX 4070 Ti Super, RTX 5070 Ti or RTX 4080 Super. $2,000+: RTX 4090 or RTX 5090.',
          '**3. NVIDIA or AMD?** Choose NVIDIA unless you already own AMD hardware or find a steep RX 7800 XT discount — CUDA can save setup time compared with ROCm.',
          '**4. Does your power supply have headroom?** Cards above the mid tier need 285-575 W; confirm your PSU and case cooling before buying enthusiast-tier hardware.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick a GPU for local LLMs by answering largest model size first, budget ceiling second, NVIDIA-versus-AMD third, and power-supply headroom last.',
          },
          {
            type: 'plain-terms',
            text: 'Start with the biggest model you actually want to run and let that set your tier. Only then look at price, brand, and whether your power supply can handle the card. Doing it in the other order is how people overspend or buy a card that cannot run their model.',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-en.webp',
        imageCaption:
          'Four-question decision flow for choosing a local-LLM GPU: largest target model size sets the tier, budget ceiling narrows the pick, NVIDIA-versus-AMD decides the brand, and power-supply headroom confirms the enthusiast-tier choice.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Regional Pricing & Where to Buy',
        content:
          '**GPU prices vary by region — US listed prices are often lower than EU prices, which include VAT, and the prices in this guide are US figures.** The links below are plain product-search links per region; they carry no affiliate tags and earn no commission.',
        items: [
          '**United States:** Amazon and Newegg have the widest stock. Used RTX 3060 and RTX 4090 cards are common; new flagship stock is thin, and the RTX 5090 is often sold out at list price.',
          '**Germany:** Amazon.de and Mindfactory.de; expect roughly 19% VAT in listed prices, and German GPU prices that often run above US figures.',
          '**France:** Amazon.fr and LDLC; pricing is similar to Germany with 20% VAT, and flagship stock has been intermittent.',
          '**Japan:** Amazon.co.jp and Kakaku.com for price comparison; new-card pricing tracks the US, with thinner used-card supply.',
          '**China:** JD.com is the reference marketplace; high-end GPU availability and pricing differ substantially from Western markets.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Because of the 2026 surge, every dollar figure in this guide is a fast-moving snapshot. Always open the current retailer listing before buying — prices have moved week to week.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Browse GPUs on Amazon US',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Browse GPUs on Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Browse GPUs on Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Browse GPUs on Amazon.co.jp',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Buying a GPU for Local LLMs',
        items: [
          '**Buying for tokens per second instead of VRAM.** A faster card that cannot fit your model is useless. Confirm the model fits in VRAM with 2-4 GB of headroom first, then compare speed within that tier.',
          '**Buying the 6 GB RTX 3060 instead of the 12 GB version.** They share a name but not a use case — the 6 GB card tops out at 3B models. Always confirm the 12 GB variant in the listing.',
          '**Assuming the RTX 4060 Ti 16 GB is faster than the 8 GB version.** It is not — it is the same GPU die with more memory. Buy it for capacity (14B models), not speed; the RTX 5060 Ti 16 GB is the faster 16 GB option.',
          '**Anchoring on MSRP instead of current price.** The 2026 surge means launch prices no longer reflect reality. Budget against the live retailer price, and compare new against used — used is no longer reliably cheaper.',
          '**Ignoring power supply requirements.** An RTX 5090 is rated at 575 W, and NVIDIA lists 1000 W required system power and an 850 W minimum in its PSU checker. A card that browns out under load is worse than a slower card that runs stably.',
          '**Choosing AMD without budgeting setup time.** The RX 6700 XT and RX 7800 XT are good value, but ROCm setup costs hours. Factor that time against the money saved versus an NVIDIA card.',
          '**Overbuying for 7B models.** If 7B models cover your use case, an RTX 4090 is wasted money and power. Match the tier to the model, not to the budget you happen to have.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          'Seven common mistakes when buying a GPU for local LLMs: buying for speed over VRAM, confusing the 6 GB and 12 GB RTX 3060, expecting the 16 GB RTX 4060 Ti to be faster, anchoring on MSRP, ignoring power-supply needs, underbudgeting AMD setup time, and overbuying for 7B models.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[NVIDIA GeForce RTX 40 Series Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — Official VRAM capacity and power (TGP) figures for the RTX 4060 Ti, 4070 Ti Super, 4080 Super, and 4090.',
          '[NVIDIA GeForce RTX 5090 Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — Official 32 GB GDDR7 VRAM, 575 W TGP, 1000 W required system power (Ryzen 9 9950X configuration) and 850 W minimum in the PSU checker for the RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — lowest US new and used asking prices on October 11, 2026 versus August 8, 2026, used for most prices in this guide (asking prices, not completed sales).',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — retail and eBay sold-listing ranges for the RTX 4090 and RTX 5090 (updated 2026-10-15); the RTX 4090 and RTX 5090 figures in this guide combine these ranges with the BuySellRAM asking prices.',
          '[NVIDIA Newsroom — GeForce RTX 5060 Ti announcement (2025-04-15)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — launch price of $429 for the RTX 5060 Ti 16 GB (8 GB: $379).',
          '[NVIDIA Newsroom — GeForce RTX 50 Series announcement (2025-01-06)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — launch price of $749 for the RTX 5070 Ti.',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — MSRP versus street price for the RTX 5090, RTX 5070 Ti, and RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — report (unconfirmed by NVIDIA) that the RTX 50 Super refresh is postponed over memory supply.',
          '[AMD Radeon Specifications](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Official VRAM and power figures for the RX 7800 XT and RX 6700 XT.',
          '[llama.cpp scoreboard: Llama 2 7B Q4_0 on CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) — developer-reported llama-bench tokens-per-second results for the RTX 3060, 4060 Ti (8 GB), 5060 Ti, 4070 Ti Super, 5070 Ti, 4080 Super, 4090 and 5090; entries come from different users and builds.',
          '[Ollama: Llama 3.3 70B](https://ollama.com/library/llama3.3) — the 70B model download is listed at 43 GB, the basis for the 70B VRAM figure in this guide.',
          '[Best GPUs for Local LLMs 2026](/local-llms/best-gpus-for-local-llms) — the wider GPU benchmark set on this site.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the cheapest GPU for LLM inference in 2026?',
            a: 'The NVIDIA RTX 3060 12 GB, at roughly $320-400, is the lowest-priced new card in this guide that runs local LLM inference well. Its 12 GB of VRAM fits every 7B model and most 13B models at Q4 quantization, at roughly 76 tokens per second on Llama 2 7B Q4_0 (developer-reported). An RX 6700 XT can be cheaper on the used market, but prices vary by seller and it requires AMD ROCm setup. New and used RTX 3060 prices are now close, so compare both.',
          },
          {
            q: 'Why are GPU prices so high in 2026?',
            a: 'No single cause is established. Reported contributors include DRAM/GDDR7 supply, AI-datacenter demand and reported production changes, and the sources (InsiderLLM and BuySellRAM) disagree on how much each contributes; BuySellRAM says memory is part of the story but cannot be most of it. Cards now sell up to about 2.5x above their original MSRP (RTX 5090; about 1.35-1.45x on the RTX 5060 Ti and RTX 5070 Ti) — an RTX 5090 launched at $1,999 but lists near $4,500-4,900. Used cards no longer escape the increase.',
          },
          {
            q: 'What are the GPU requirements for running a local LLM?',
            a: 'At Q4_K_M quantization, plan for roughly 0.6 GB of VRAM per billion parameters plus 2-4 GB of overhead. That means 8-9 GB for 7B models, 11-13 GB for 14B, 19-22 GB for 33B, and about 43 GB for 70B (Llama 3.3 70B at Q4, per Ollama). A 12 GB card covers 7B comfortably, a 16 GB card covers 14B, and 70B exceeds any single card here: an RTX 5090 32 GB comes close only with aggressive quantization or partial CPU offload, otherwise plan a dual-GPU build.',
          },
          {
            q: 'Which graphics card is best for local LLMs?',
            a: 'The best graphics card for local LLMs is the one with enough VRAM for your target model at your budget. For 7B models, an RTX 3060 12 GB (~$320-400) is enough. For 14B models, an RTX 5060 Ti 16 GB (~$618) or a used RTX 4060 Ti 16 GB is the mid-tier pick. For 33B models you need an RTX 4090 24 GB, and for 70B only the RTX 5090 32 GB comes close, with aggressive quantization or partial CPU offload (70B at Q4 is about 43 GB per Ollama). NVIDIA cards are the lowest-friction choice because CUDA usually works without extra setup.',
          },
          {
            q: 'Is the RTX 4060 Ti 16 GB faster than the 8 GB version?',
            a: 'No. The RTX 4060 Ti 16 GB and 8 GB versions use the same GPU die, so per-token inference speed is similar — about 64 tokens per second on 7B models (the llama.cpp scoreboard figure for the 8 GB card, developer-reported). The 16 GB version buys capacity, letting you run 14B models that do not fit in 8 GB. Buy it for VRAM, not speed.',
          },
          {
            q: 'Should I buy NVIDIA or AMD for local LLMs?',
            a: 'Buy NVIDIA unless you already own AMD hardware or find a steep discount. NVIDIA CUDA usually works with Ollama, LM Studio, and llama.cpp without extra setup. AMD cards like the RX 6700 XT and RX 7800 XT offer competitive VRAM per dollar, but ROCm setup time varies by distro and GPU; check AMD\'s supported-GPU list.',
          },
          {
            q: 'Can a single GPU run a 70B model?',
            a: 'Of the cards in this guide, only the RTX 5090 32 GB comes close, and only with aggressive quantization or partial CPU offload — a 70B model at Q4 is about 43 GB per Ollama. A 24 GB RTX 4090 cannot fit a 70B model at Q4 alone; the common solution is two RTX 4090s for combined VRAM, though at the prices used in this guide that pair costs about as much as a single RTX 5090.',
          },
          {
            q: 'Is the RTX 5090 worth it over the RTX 4090 for local LLMs?',
            a: 'Only if you specifically need more than 24 GB on a single card, for example to get closer to 70B models. The RTX 5090 has 32 GB of VRAM versus the RTX 4090\'s 24 GB, which is the deciding factor. For 7B-33B models, the RTX 4090 fits the same models; at the prices used in this guide the RTX 5090 costs roughly 1.8-2.4x an RTX 4090, so pay for it only if the extra 8 GB solves a real problem.',
          },
          {
            q: 'What power supply do I need for these GPUs?',
            a: 'Match the power supply to the tier: a 550 W unit suits the RTX 3060, 650-750 W suits the RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super and RTX 5070 Ti, 850 W suits the RTX 4090, and for the RTX 5090 (575 W TGP) NVIDIA lists 1000 W required system power (Ryzen 9 9950X configuration) and an 850 W minimum in its PSU checker. Undersized power supplies cause instability under load. Follow the card maker\'s and power-supply maker\'s guidance; this is not electrical-safety advice.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Check the full VRAM requirements for every model size](/local-llms/how-much-vram-local-llm) — the complete VRAM-by-model-size method behind the quick formula in this guide.',
          '[Compare 15+ GPUs with published local-LLM benchmarks](/local-llms/best-gpus-for-local-llms) — the wider GPU benchmark set, including older and server cards beyond these ten.',
          '[See which models run on a budget RTX 3060 12 GB](/local-llms/best-budget-gpus-local-llm) — model-by-model speeds for the budget tier, including the 6 GB versus 12 GB split.',
          '[Compare the RTX 5090 and RTX 4090 head-to-head](/local-llms/rtx-5090-vs-rtx-4090-local-llm) — when the RTX 5090 upgrade is worth it and when the RTX 4090 is enough.',
          '[Understand how Q4_K_M quantization sets VRAM cost](/local-llms/llm-quantization-explained) — why Q4_K_M is the default and how quantization changes the VRAM math.',
          '[Guia de Compra de GPU para LLM Local 2026 (Português)](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — versão em português deste guia',
          '[Best GPU Under $1,000 for Local LLM Inference?](/prompt-bites/best-gpu-under-1000-local-llm) — the 24 GB tier: used RTX 4090 vs new RTX 4080 SUPER.',
          '[RTX 4060 vs RTX 3060 12GB: Which Is Better for Local LLMs?](/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — why more VRAM beats a newer generation for this workload.',
          '[Best Intel Arc GPU for Local LLMs?](/prompt-bites/best-intel-arc-gpu-local-llm) — the Arc B580 as a cheaper alternative, and the software tradeoffs that come with it.',
          '[Best RTX 4090 Setup for Running 70B Models?](/prompt-bites/best-rtx-4090-setup-70b-models) — what it actually takes to run a 70B model on this guide\'s top card.',
          '[Best Local LLM for a MacBook Air Without an eGPU?](/prompt-bites/best-local-llm-macbook-air-no-egpu) — why an eGPU can\'t substitute for the GPUs in this guide on Apple Silicon.',
          '[Best Windows Laptop for Local LLMs Under $1,500?](/prompt-bites/best-windows-laptop-local-llm-under-1500) — the mobile-GPU equivalent of this guide\'s desktop tiers.',
          '[What Hardware Do You Need to Fine-Tune a 7B Model Locally?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — which of these GPUs also work for QLoRA fine-tuning, not just inference.',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Beste Grafikkarte für lokale LLMs: GPU-Kaufberatung 2026',
    seoTitle: 'Beste Grafikkarte für lokale LLMs 2026: Budget–RTX 5090',
    intro:
      'Die meisten GPU-Empfehlungen für lokale LLMs optimieren die falsche Kennzahl. Das Tempo in Token pro Sekunde entscheidet, wie schnell ein Modell antwortet — der VRAM entscheidet jedoch, ob das Modell überhaupt läuft. Ein Modell, das nicht in den Speicher passt, ist unendlich langsamer als eines, das passt. Dieser Leitfaden vergleicht zehn Consumer-Grafikkarten über vier Preisklassen anhand der Kennzahlen, die einen Kauf wirklich bestimmen: VRAM-Kapazität, Inferenztempo, Leistungsaufnahme und Preis. Ein Hinweis zum Preis: Die GPU-Preise sind 2026 stark gestiegen (genannte Einflussfaktoren sind Speicherangebot und Nachfrage durch KI-Rechenzentren; die Quellen sind sich über die Gewichtung uneinig) — eine RTX 5090 wird inzwischen zum rund 2,5-Fachen ihrer UVP angeboten. Die meisten Preise hier sind daher die niedrigsten US-Angebotspreise aus den unter Quellen verlinkten BuySellRAM-Daten, und die Spannen für RTX 4090 und RTX 5090 stützen sich zusätzlich auf InsiderLLM-Daten zu verkauften Angeboten; prüfen Sie den aktuellen Preis vor dem Kauf.',
    metaDescription:
      'Welche Grafikkarte für lokale LLMs? Zehn GPUs im Vergleich: VRAM, Tempo, Leistung, Preise 2026 – günstig bis RTX 5090 – plus GPU-Anforderungen je Modell.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-de.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — zehn Grafikkarten, vier Budgets, eine Regel: nach VRAM kaufen.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      'Käufer, die gezielt eine GPU für den Betrieb lokaler LLMs auswählen und nach Preisklasse und Zielmodellgröße entscheiden. Setzt Vertrautheit mit Quantisierung und VRAM als Beschränkung voraus, nicht jedoch mit konkreten aktuellen GPU-Modellen.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      'beste gpu für lokale llm 2026',
      'gpu kaufberatung lokale llm',
      'rtx 3060 vs rtx 4090 lokale llm',
      'wie viel vram für lokale llm',
      'günstigste gpu für lokale llm',
      'beste grafikkarte für lokale llm',
      'lokale llm gpu anforderungen',
    ],
    leadAnswerBlock:
      '**Die beste Grafikkarte für lokale LLMs ist die, deren VRAM zu Ihrem Modell passt — nicht die schnellste Karte. Eine RTX 3060 12 GB führt jedes 7B-Modell aus, eine 16-GB-Karte (RTX 5060 Ti, RTX 4060 Ti oder RTX 5070 Ti) bewältigt 14B-Modelle, eine RTX 4090 24 GB bewältigt 33B-Modelle, und von den Karten in diesem Ratgeber kommt nur die RTX 5090 32 GB an ein 70B-Modell heran, und nur mit aggressiver Quantisierung oder teilweisem CPU-Offloading (70B bei Q4 sind laut Ollama rund 43 GB).**',
    quickAnswerTop: {
      de: {
        question: 'Welche Grafikkarte ist 2026 die beste für lokale LLMs?',
        answer:
          'Kaufen Sie nach VRAM, dann nach Tempo. Eine RTX 3060 12 GB (~320–400 $) ist die Budget-Wahl und führt jedes 7B-Modell aus. Eine 16-GB-Karte ist die Mittelklasse-Wahl für 14B-Modelle — eine RTX 5060 Ti 16 GB (~620 $ neu) oder eine gebrauchte RTX 4060 Ti 16 GB (~650 $). Eine RTX 4090 24 GB bewältigt 33B-Modelle, und von den Karten in diesem Ratgeber kommt nur die RTX 5090 32 GB (~4.500-4.900 $) an 70B heran, und nur mit aggressiver Quantisierung oder teilweisem CPU-Offloading (70B bei Q4 sind laut Ollama rund 43 GB). Beachten Sie: Die Preise 2026 liegen deutlich über der UVP.',
        bullets: [
          'Budget: RTX 3060 12 GB, ~320–400 $ neu oder gebraucht — führt jedes 7B-Modell mit ~76 Token/s aus (Llama 2 7B Q4_0, Entwicklerwert)',
          'Mittelklasse: RTX 5060 Ti 16 GB, ~620 $ neu ([UVP 429 $](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)) — 14B-Modelle mit Reserve',
          'Enthusiast: RTX 5090 32 GB, ~4.500-4.900 $ — die einzige 32-GB-Karte hier; 70B (rund 43 GB bei Q4) erfordert aggressive Quantisierung oder Auslagerung',
          'GPU-Preise liegen 2026 bis zu etwa 2,5-fach über der UVP (RTX 5090; etwa 1,35- bis 1,45-fach bei RTX 5060 Ti und RTX 5070 Ti) — vergleichen Sie Neu- und Gebrauchtpreise vor dem Kauf',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kernpunkte', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Redaktionsempfehlung', anchor: '#editors-choice' },
      { label: 'GPU-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Welche GPU sollten Sie kaufen?', anchor: '#which-gpu' },
      { label: 'Budget-Klasse (320–400 $)', anchor: '#budget-tier' },
      { label: 'Mittelklasse (620–790 $)', anchor: '#mid-tier' },
      { label: 'Oberklasse (900–1.200 $)', anchor: '#high-tier' },
      { label: 'Enthusiast-Klasse (ab 2.000 $)', anchor: '#enthusiast-tier' },
      { label: 'GPU-Anforderungen: Wie viel VRAM?', anchor: '#vram-needs' },
      { label: 'Warum die GPU-Preise 2026 stiegen', anchor: '#price-surge' },
      { label: 'Entscheidungsbaum', anchor: '#decision-flowchart' },
      { label: 'Regionale Preise & Bezugsquellen', anchor: '#where-to-buy' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**VRAM ist die entscheidende Beschränkung.** Ein Modell, das nicht in den VRAM passt, lädt entweder nicht oder weicht in den System-RAM aus und wird zu langsam für den interaktiven Einsatz. Wählen Sie die Klasse, deren VRAM zu Ihrem Zielmodell passt, und optimieren Sie dann innerhalb dieser Klasse auf Tempo.',
          '**Die Preise sind 2026 stark gestiegen.** Die GPU-Preise liegen bis zu etwa 2,5-fach über der UVP (RTX 5090; etwa 1,35- bis 1,45-fach bei RTX 5060 Ti und RTX 5070 Ti). Genannte Einflussfaktoren sind DRAM-/GDDR7-Angebot, Nachfrage durch KI-Rechenzentren und gemeldete Produktionsänderungen; die Quellen sind sich uneinig, wie stark jeder Faktor wiegt. Eine RTX 5090 wird mit ~4.500-4.900 $ gelistet, nicht mit ihrem Einführungspreis von 1.999 $, und die Preise sind zwischen August und Oktober erneut gestiegen. Behandeln Sie die Preise hier als Momentaufnahme — die meisten sind US-Angebotspreise, und die Spannen für RTX 4090 und RTX 5090 stützen sich zusätzlich auf Daten zu verkauften Angeboten — und vergleichen Sie vor dem Kauf Neu- und Gebrauchtpreise.',
          '**Budget-Wahl: NVIDIA RTX 3060 12 GB** (~320–400 $, neu und gebraucht kosten inzwischen etwa gleich viel) — führt jedes 7B-Modell aus (~76 Token/s bei Llama 2 7B Q4_0, Entwicklerwert) und die meisten 13B-Modelle bei Q4.',
          '**Mittelklasse-Wahl: NVIDIA RTX 5060 Ti 16 GB** (~618 $ neu, ~649 $ gebraucht angeboten) — 16 GB VRAM bewältigen 14B-Modelle mit Kontextreserve, und ihre Speicherbandbreite von 448 GB/s (~91 Token/s, Entwicklerwert) ist höher als die 288 GB/s der älteren RTX 4060 Ti 16 GB (~64 Token/s bei der 8-GB-Karte, Entwicklerwert). Gebraucht kosten beide etwa gleich viel (~650 $); der Neupreis-Boden der RTX 4060 Ti 16 GB von ~790 $ stützt sich laut BuySellRAM auf nur drei Angebote.',
          '**Oberklasse-Wahl: NVIDIA RTX 4080 Super 16 GB** (~1.200 $) — die teuerste 16-GB-Karte hier (~148 Token/s, Entwicklerwert). Die RTX 4070 Ti Super (~900 $) und die RTX 5070 Ti (~1.008 $) kosten weniger und sind womöglich das bessere Preis-Leistungs-Verhältnis; die RTX 5070 Ti ist in denselben Entwickler-Messungen schneller (~177 Token/s).',
          '**Enthusiast-Wahl: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — die RTX 4090 (~2.000 $+ neu, ~2.575-3.010 $ gebraucht) bewältigt 33B-Modelle; von den Karten in diesem Ratgeber kommt nur die RTX 5090 (~4.500-4.900 $) an 70B heran, und nur mit aggressiver Quantisierung oder teilweisem CPU-Offloading (70B bei Q4 sind laut Ollama rund 43 GB).',
          '**AMD ist nutzbar, aber aufwendiger.** Die RX 6700 XT (12 GB) und RX 7800 XT (16 GB) bieten VRAM zu konkurrenzfähigen Preisen, aber der ROCm-Einrichtungsaufwand variiert je nach Distribution und Karte.',
          '**Die Leistungsaufnahme skaliert mit der Klasse.** Eine RTX 3060 zieht 170 W; eine RTX 5090 ist mit 575 W TGP angegeben, und [NVIDIA nennt](https://www.nvidia.com/de-de/geforce/graphics-cards/50-series/rtx-5090/) 1000 W erforderliche Systemleistung (Konfiguration mit Ryzen 9 9950X) und 850 W Minimum im PSU-Checker. Kalkulieren Sie das Netzteil zusammen mit der Karte ein.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Budget-Klasse (320–400 $):** RTX 3060 12 GB oder RX 6700 XT 12 GB — führt 7B- und die meisten 13B-Modelle aus.',
          '**Mittelklasse (620–790 $):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB oder RX 7800 XT 16 GB — führt 14B-Modelle bequem aus.',
          '**Oberklasse (900–1.200 $):** RTX 4080 Super, RTX 5070 Ti oder RTX 4070 Ti Super, alle mit 16 GB — schnelle 14B-Inferenz, leichte 22B-Arbeit.',
          '**Enthusiast-Klasse (ab 2.000 $):** RTX 4090 24 GB oder RTX 5090 32 GB — 33B-Modelle, und 70B nur mit aggressiver Quantisierung oder teilweisem CPU-Offload auf der 5090.',
          '**VRAM-Faustregel bei Q4_K_M:** rund 0,6 GB pro Milliarde Parameter, plus 2–4 GB für Kontext und Werkzeuge.',
          '**Leistungsaufnahme:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Preisrealität 2026:** Die Preise liegen bis zu etwa 2,5-fach über der UVP (RTX 5090; etwa 1,35- bis 1,45-fach bei RTX 5060 Ti und RTX 5070 Ti), und die Quellen sind sich über die Ursachen uneinig; gebrauchte Karten sind nicht mehr verlässlich günstiger als neue, vergleichen Sie also beides.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Redaktionsempfehlung (Premium 16 GB): RTX 4080 Super',
        highlight: true,
        content:
          '**Für Käufer, die eine Premium-16-GB-Karte wollen und über 1.000 $ ausgeben können, ist die NVIDIA RTX 4080 Super 16 GB unsere Redaktionsempfehlung — eine Wahl für einen Premium-16-GB-Aufbau, nicht für das beste Preis-Leistungs-Verhältnis.** Ihre 16 GB VRAM bewältigen jedes 14B-Modell mit Kontextreserve, sie erreicht etwa 148 Token/s bei Llama 2 7B Q4_0 (Entwicklerwert), und mit ~1.200 $ ist sie die teuerste 16-GB-Karte hier. Die RTX 4070 Ti Super (~900 $, ~132 Token/s) und die RTX 5070 Ti (~1.008 $, ~177 Token/s) kosten etwa 300 $ bzw. ~190 $ weniger und sind womöglich das bessere Preis-Leistungs-Verhältnis; die RTX 5070 Ti ist in denselben Entwickler-Messungen schneller. Liegt Ihr Budget fest unter 700 $, ist die RTX 5060 Ti 16 GB die Preis-Leistungs-Wahl. Geben Sie nur dann mehr aus, wenn Sie gezielt 33B- oder 70B-Modelle benötigen.',
        callouts: [
          {
            type: 'note',
            text: 'Diese Redaktionsempfehlung ist eine Premium-16-GB-Wahl, kein Preis-Leistungs-Ranking: RTX 4070 Ti Super und RTX 5070 Ti kosten weniger und sind womöglich das bessere Preis-Leistungs-Verhältnis. PromptQuorum nimmt an keinem Affiliate-Programm teil, und die folgenden Links tragen keine Affiliate-Kennungen — es sind reine Verweislinks, für die keine Provision anfällt.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'RTX 4080 Super Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'RTX 4080 Super Preis bei Mindfactory prüfen',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie die zehn GPUs für lokale LLMs 2026 abschneiden',
        content:
          'VRAM- und Leistungsangaben sind Herstellerspezifikationen. Als Entwicklerwert gekennzeichnete Tempi sind von Entwicklern gemeldete llama-bench-Ergebnisse (Llama 2 7B Q4_0, CUDA) aus dem unter Quellen verlinkten llama.cpp-Scoreboard; die Einträge stammen von verschiedenen Nutzern und Builds und wurden von uns nicht erneut gemessen. Der Wert der RTX 4060 Ti 16 GB ist das Ergebnis der 8-GB-Karte (gleicher GPU-Chip und 288 GB/s Speicherbandbreite). Für RX 6700 XT und RX 7800 XT liegt dort kein Ergebnis vor; ihre Tempi sind grobe, aus der Speicherbandbreite abgeleitete Schätzungen (geschätzt) im Vergleich zu den gemessenen Ergebnissen. Die meisten Preise sind die niedrigsten US-Angebotspreise aus den verlinkten BuySellRAM-Daten; die Spannen für RTX 4090 und RTX 5090 kombinieren diese mit den Händler- und Verkaufsspannen von InsiderLLM (aktualisiert am 2026-10-15). Die Preise liegen bis zu etwa 2,5-fach über der UVP (RTX 5090; etwa 1,35- bis 1,45-fach bei RTX 5060 Ti und RTX 5070 Ti), daher vor dem Kauf prüfen (siehe das Aktualisierungsdatum dieser Seite). Die verlinkte Budget-GPU-Seite verwendet für einige Karten frühere Schätzungen (zum Beispiel ca. 290–330 $ gebraucht für die RTX 3060 12 GB), daher können die Werte zwischen den beiden Seiten leicht abweichen.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bei lokalen LLMs entscheidet der VRAM einer GPU, welche Modelle Sie ausführen können, und ihre Token-pro-Sekunde, wie schnell sie antworten — kaufen Sie nach dem Ersten, optimieren Sie dann das Zweite.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich VRAM als die Größe eines Schreibtisches vor und das Modell als das, was Sie darauf legen. Eine schnellere GPU räumt den Tisch zügiger ab, aber wenn das Modell gar nicht auf den Tisch passt, spielt Tempo keine Rolle. Wählen Sie zuerst die Klasse, deren Tisch groß genug ist.',
          },
        ],
        columns: ['GPU', 'VRAM', 'Tempo (7B Q4)', 'Leistungsaufnahme', 'Preis (US, 2026)', 'Am besten für'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Tempo (7B Q4)': '~76 Token/s (Entwicklerwert)',
            'Leistungsaufnahme': '170 W',
            'Preis (US, 2026)': '320–400 $ neu / 320–350 $ gebraucht',
            'Am besten für': 'Budget-Einstieg — jedes 7B-Modell',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Tempo (7B Q4)': '~65–80 Token/s (geschätzt)',
            'Leistungsaufnahme': '230 W',
            'Preis (US, 2026)': 'Je nach Anbieter — live prüfen',
            'Am besten für': 'AMD 12 GB, ROCm-Einrichtung nötig',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~64 Token/s (8-GB-Karte, Entwicklerwert)',
            'Leistungsaufnahme': '165 W',
            'Preis (US, 2026)': '~790 $ neu / ~650 $ gebraucht',
            'Am besten für': 'Mittelklasse — 14B-Modelle, sparsam',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~91 Token/s (Entwicklerwert)',
            'Leistungsaufnahme': '180 W',
            'Preis (US, 2026)': '618 $ neu / 649 $ gebraucht',
            'Am besten für': 'Mittelklasse — 14B, aktuelle Generation',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~90–115 Token/s (geschätzt)',
            'Leistungsaufnahme': '263 W',
            'Preis (US, 2026)': 'AMD-Preise: aktuelle Angebote prüfen',
            'Am besten für': '16 GB bei AMD, ROCm-Einrichtung nötig',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~132 Token/s (Entwicklerwert)',
            'Leistungsaufnahme': '285 W',
            'Preis (US, 2026)': '900 $ neu / 920 $ gebraucht',
            'Am besten für': 'Schnelle 14B, geringere Leistungsaufnahme',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~177 Token/s (Entwicklerwert)',
            'Leistungsaufnahme': '300 W',
            'Preis (US, 2026)': '1.008 $ neu / 1.050 $ gebraucht',
            'Am besten für': 'Schnelle 14B, 16 GB mit gutem Preis',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~148 Token/s (Entwicklerwert)',
            'Leistungsaufnahme': '320 W',
            'Preis (US, 2026)': '1.200 $ neu / 1.149 $ gebraucht',
            'Am besten für': 'Redaktionsempfehlung — Premium 16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Tempo (7B Q4)': '~186 Token/s (Entwicklerwert)',
            'Leistungsaufnahme': '450 W',
            'Preis (US, 2026)': '~2.000 $+ neu / 2.575-3.010 $ gebraucht',
            'Am besten für': '33B-Modelle, Dual-GPU für 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Tempo (7B Q4)': '~290 Token/s (Entwicklerwert)',
            'Leistungsaufnahme': '575 W',
            'Preis (US, 2026)': '4.500-4.921 $ neu / 5.880-6.350 $ gebraucht',
            'Am besten für': '70B nur mit aggressiver Quantisierung oder Offload',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-de.webp',
        imageCaption:
          'Zehn Consumer-Grafikkarten für lokale LLMs im Vergleich nach VRAM, 7B-Q4-Inferenztempo, Leistungsaufnahme und aktuellem US-Preis über vier Preisklassen. Der VRAM steigt von 12 GB (RTX 3060) auf 32 GB (RTX 5090); kaufen Sie nach der benötigten Modellgröße, bevor Sie auf Tempo optimieren.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Welche GPU sollten Sie kaufen?',
        content:
          '**Ihr größtes Zielmodell bestimmt Ihre Klasse; Ihr Budget entscheidet innerhalb dieser Klasse zwischen NVIDIA und AMD.** Suchen Sie die Zeile, die zu Ihrer Situation passt.',
        columns: ['Ihre Situation', 'Das kaufen'],
        rows: [
          { 'Ihre Situation': 'Ich habe unter 400 $ und will 7B-Modelle ausführen', 'Das kaufen': 'RTX 3060 12 GB' },
          { 'Ihre Situation': 'Ich finde eine günstige 12-GB-AMD-Karte und nehme Einrichtungsaufwand in Kauf', 'Das kaufen': 'RX 6700 XT (Preise prüfen)' },
          { 'Ihre Situation': 'Ich will 14B-Modelle bei knappem Strombudget ausführen', 'Das kaufen': 'RTX 5060 Ti 16 GB (oder gebrauchte RTX 4060 Ti 16 GB)' },
          { 'Ihre Situation': 'Ich will eine Karte, die 14B schnell ausführt und mehrere Jahre hält', 'Das kaufen': 'RTX 5070 Ti oder RTX 4070 Ti Super 16 GB' },
          { 'Ihre Situation': 'Ich will eine Premium-16-GB-Karte und der Preis ist zweitrangig', 'Das kaufen': 'RTX 4080 Super 16 GB (5070 Ti kostet weniger)' },
          { 'Ihre Situation': 'Ich brauche 33B-Modelle oder plane einen späteren Dual-GPU-70B-Aufbau', 'Das kaufen': 'RTX 4090 24 GB' },
          { 'Ihre Situation': 'Ich brauche eine einzelne Karte für 70B-Modelle (aggressive Quantisierung oder teilweises Auslagern)', 'Das kaufen': 'RTX 5090 32 GB' },
          { 'Ihre Situation': 'Ich bin unsicher und will die sicherste erste GPU', 'Das kaufen': 'RTX 3060 12 GB — später aufrüsten, falls Sie sie überwachsen' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Budget-Klasse (320–400 $): RTX 3060 12 GB und RX 6700 XT',
        content:
          '**Die Budget-Klasse führt jedes 7B-Modell und die meisten 13B-Modelle aus — und für die meisten Erstnutzer lokaler LLMs ist genau das die gesamte benötigte Leistung.** Die RTX 3060 12 GB ist die empfohlene Wahl; die RX 6700 XT ist die AMD-Alternative, wenn Sie den Einrichtungsaufwand in Kauf nehmen. Die Preise in dieser Klasse sind 2026 gestiegen, und eine gebrauchte RTX 3060 kostet inzwischen etwa so viel wie eine neue — vergleichen Sie beides.',
        items: [
          '**RTX 3060 12 GB (~320–400 $ neu, ~320–350 $ gebraucht):** 12 GB VRAM, 170 W, ~76 Token/s bei Llama 2 7B Q4_0 (Entwicklerwert). Führt Ministral 3 8B, Qwen3 8B, DeepSeek-R1 7B und die meisten 13B-Modelle aus. Kaufen Sie ausdrücklich die 12-GB-Variante — meiden Sie die 6-GB-Variante, die auf 3B-Modelle beschränkt ist. Neuware ist knapp und eine gebrauchte Karte spart kaum noch etwas — kaufen Sie die jeweils günstigere mit Rückgaberecht.',
          '**RX 6700 XT (gebraucht, Preis je nach Anbieter):** 12 GB VRAM, 230 W, grob 65–80 Token/s bei 7B-Modellen (grobe, aus der Speicherbandbreite abgeleitete Schätzung, nicht gemessen). Prüfen Sie aktuelle Angebote; sie ist auf AMD ROCm angewiesen, was Einrichtungszeit kostet.',
          '**Warum diese Klasse kaufen:** niedrigste Einstiegskosten, geringe Leistungsaufnahme bei der RTX 3060 und genug VRAM für die 7B–13B-Modelle, die allgemeinen Chat, Programmierhilfe und Zusammenfassungen abdecken.',
          '**Warum diese Klasse überspringen:** Wenn Sie bereits wissen, dass Sie 14B-Modelle oder größer wollen, wird die Budget-Klasse Sie binnen Wochen frustrieren — beginnen Sie stattdessen in der Mittelklasse.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Kaufen Sie die RTX 3060 ausdrücklich in der 12-GB-Version. Die 6-GB-RTX-3060 sieht in Angeboten ähnlich aus, fasst aber nur 3B-Modelle — die halbe Parameterzahl ist der Unterschied zwischen einem brauchbaren Assistenten und einem Spielzeug.',
          },
          {
            type: 'warning',
            text: 'Die RX 6700 XT kann ein günstiger Einstieg sein, die Dauer der ROCm-Einrichtung unter Linux hängt jedoch von Distribution und Karte ab, prüfen Sie daher zuerst die Liste der von AMD unterstützten GPUs. Wenn die Ersparnis gegenüber einer RTX 3060 gering ist, kaufen Sie die NVIDIA-Karte.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'RTX 3060 12GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'RX 6700 XT Preis bei Mindfactory prüfen',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Mittelklasse (620–790 $): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB und RX 7800 XT',
        content:
          '**Die Mittelklasse existiert aus einem Grund: 16 GB VRAM bewältigen 14B-Modelle, die 12-GB-Karten nicht mit brauchbarem Kontext fassen.** Wenn 14B-Modelle Ihr Ziel sind, ist dies die günstigste Klasse, die sie richtig ausführt. Die RTX 5060 Ti 16 GB ist die Wahl der aktuellen Generation und bei den in diesem Leitfaden verwendeten Angebotspreisen auch die preisgünstigste NVIDIA-Option mit 16 GB; die RTX 4060 Ti 16 GB kostet gebraucht etwa gleich viel (~650 $) und neu mehr (~790 $, laut BuySellRAM aus nur drei Angeboten).',
        items: [
          '**RTX 5060 Ti 16 GB (~618 $ neu / ~649 $ gebraucht angeboten, UVP 429 $):** 16 GB GDDR7, 180 W, 448 GB/s Speicherbandbreite. Wir haben sie für diesen Leitfaden nicht gemessen; das llama.cpp-Scoreboard nennt etwa 91 Token/s bei Llama 2 7B Q4_0 (Entwicklerwert). Sie führt Modelle der Klasse Qwen3 14B bequem aus. Die Preise lagen 2026 rund 44 % über der UVP.',
          '**RTX 4060 Ti 16 GB (~790 $ neu / ~650 $ gebraucht, Angebotspreise):** 16 GB VRAM, 165 W, etwa 64 Token/s bei 7B-Modellen (llama.cpp-Scoreboard-Wert der 8-GB-Karte, Entwicklerwert). Sie nutzt denselben GPU-Chip und dieselben 288 GB/s Speicherbandbreite wie die 8-GB-RTX-4060-Ti, das Tempo pro Token ist also ähnlich — die 16-GB-Version kauft Kapazität, nicht reines Tempo. Gebraucht kostet sie etwa so viel wie die RTX 5060 Ti 16 GB (~650 $ gegenüber ~649 $); der Neupreis-Boden von ~790 $ stützt sich auf nur drei BuySellRAM-Angebote.',
          '**RX 7800 XT (AMD-Preis: aktuelle Angebote prüfen — die BuySellRAM-Daten decken nur NVIDIA ab):** 16 GB VRAM, 263 W. Sie wurde für diesen Leitfaden nicht einzeln gemessen; erwarten Sie grob 90–115 Token/s bei 7B Q4 (grobe, aus der Speicherbandbreite abgeleitete Schätzung, nicht gemessen), mit der AMD-ROCm-Einrichtung als Kompromiss.',
          '**Warum diese Klasse kaufen:** Sie wollen 14B-Modelle, Sie wollen geringe Leistungsaufnahme (RTX 4060 Ti) oder Sie wollen 16 GB zum niedrigstmöglichen Preis.',
          '**Warum diese Klasse überspringen:** Wenn 7B-Modelle genügen, kostet die Budget-Klasse 200–300 $ weniger; wenn Sie schnelle 14B-Inferenz wollen, ist die Oberklasse spürbar zügiger.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die RTX 4060 Ti 16 GB ist ein Kapazitäts-Upgrade, kein Tempo-Upgrade gegenüber der 8-GB-Version — kaufen Sie sie, weil Sie 14B-Modelle fassen müssen, nicht weil Sie mehr Token pro Sekunde erwarten. Die RTX 5060 Ti 16 GB ist die schnellere Option und kostet bei den in diesem Leitfaden verwendeten Angebotspreisen neu weniger und gebraucht etwa gleich viel.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'RTX 5060 Ti 16GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'RTX 4060 Ti 16GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'RX 7800 XT Preis bei Mindfactory prüfen',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'Oberklasse (900–1.200 $): RTX 4080 Super, RTX 5070 Ti und RTX 4070 Ti Super',
        content:
          '**Die Oberklasse behält 16 GB VRAM, ergänzt aber das Tempo, das 7B–14B-Modelle sofort wirken lässt und 22B-Modelle brauchbar macht.** Alle drei Karten fassen dieselben Modelle wie die Mittelklasse — Sie zahlen für Token pro Sekunde, nicht für Kapazität. Der Preisanstieg 2026 hat den Abstand zwischen dieser Klasse und der Mittelklasse vergrößert.',
        items: [
          '**RTX 4080 Super 16 GB (~1.200 $ neu / ~1.149 $ gebraucht):** 16 GB VRAM, 320 W, etwa 148 Token/s bei Llama 2 7B Q4_0 (Entwicklerwert). Die Redaktionsempfehlung als Premium-16-GB-Wahl — die teuerste Karte hier, mit einem Aufpreis von grob 190–300 $ gegenüber den beiden folgenden Karten, und in denselben Messungen langsamer als die RTX 5070 Ti.',
          '**RTX 5070 Ti 16 GB (~1.008 $ neu / ~1.050 $ gebraucht angeboten, [UVP 749 $](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)):** 16 GB GDDR7, 300 W, 896 GB/s Speicherbandbreite. Für diesen Leitfaden nicht gemessen; das llama.cpp-Scoreboard nennt etwa 177 Token/s bei Llama 2 7B Q4_0 (Entwicklerwert), und 16 GB führen ein 24B-Modell bei Q4 mit Reserve aus.',
          '**RTX 4070 Ti Super 16 GB (~900 $ neu / ~920 $ gebraucht):** 16 GB VRAM, 285 W, etwa 132 Token/s (Entwicklerwert). Die günstigste neue Karte dieser Klasse, mit der niedrigsten Leistungsaufnahme der drei.',
          '**Warum diese Klasse kaufen:** Sie führen ständig 14B-Modelle aus und wollen sie sofort, oder Sie machen leichte 22B-Arbeit und wollen Reserve.',
          '**Warum diese Klasse überspringen:** Wenn Sie 33B- oder 70B-Modelle brauchen, fasst keine 16-GB-Karte sie — wechseln Sie in die Enthusiast-Klasse, statt hier zu viel auszugeben.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Innerhalb dieser Klasse ist die RTX 5070 Ti in den Entwickler-Messungen die schnellste (~177 Token/s), die RTX 4070 Ti Super die günstigste neue Karte, und die RTX 4080 Super die teuerste. Wenn Sie die RTX 4080 Super nicht gezielt wollen, wählen Sie eine der beiden günstigeren.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'RTX 4080 Super Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'RTX 5070 Ti Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'RTX 4070 Ti Super Preis bei Amazon.de prüfen',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Enthusiast-Klasse (ab 2.000 $): RTX 4090 und RTX 5090',
        content:
          '**Die Enthusiast-Klasse ist die einzige Klasse, die Modelle über 22B ausführt — und von den Karten in diesem Ratgeber kommt nur die RTX 5090 32 GB an ein 70B-Modell heran: 70B bei Q4 sind laut Ollama rund 43 GB, daher erfordert selbst sie aggressive Quantisierung oder teilweises CPU-Offloading.** Kaufen Sie hier wegen der VRAM-Kapazität, nicht wegen des Tempos; das Tempo ist ein Nebeneffekt. Der Preisanstieg 2026 hat die RTX 5090 am härtesten getroffen, daher bewegen sich die Preise wöchentlich.',
        items: [
          '**RTX 4090 24 GB (~2.000 $+ neu / ~2.575-3.010 $ gebraucht):** 24 GB VRAM, 450 W, etwa 186 Token/s bei Llama 2 7B Q4_0 (Entwicklerwert). Führt 33B-Modelle bequem aus. Neue RTX 4090 sind kaum noch lieferbar, und der Neupreis-Boden kann veraltet sein — Angebote reichen bis ~3.800 $.',
          '**RTX 5090 32 GB (~4.500-4.921 $ neu / ~5.880-6.350 $ gebraucht, UVP 1.999 $):** 32 GB GDDR7-VRAM, 575 W, etwa 290 Token/s bei Llama 2 7B Q4_0 (Entwicklerwert). Die 32 GB Kapazität sind das Hauptargument — es ist die einzige Karte in diesem Ratgeber mit 32 GB, doch ein 70B-Modell bei Q4 sind laut Ollama rund 43 GB und erfordert daher weiterhin aggressive Quantisierung oder teilweises CPU-Offloading. Die Angebotspreise stiegen zwischen August und Oktober um rund 64 %, und Gebrauchtangebote liegen über den Neupreisen.',
          '**Warum diese Klasse kaufen:** Sie brauchen 33B- oder 70B-Modelle, Sie betreiben Batch-Inferenz oder Sie wollen eine Karte, die jahrelang nicht ersetzt werden muss.',
          '**Warum diese Klasse überspringen:** Für 7B–14B-Modelle ist sie überdimensioniert — die Oberklasse liefert sofortige Antworten bei diesen Größen für weniger als die Hälfte des Preises und der Leistungsaufnahme.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NVIDIA gibt die RTX 5090 mit 575 W TGP an, mit 1000 W erforderlicher Systemleistung (Konfiguration mit Ryzen 9 9950X) und 850 W Minimum im PSU-Checker (siehe die RTX-5090-Seite unter Quellen). Ein zu schwach dimensioniertes Netzteil kann unter Last einbrechen, kalkulieren Sie das Netzteil daher in den Kauf ein. Dies ist keine Beratung zur elektrischen Sicherheit; befolgen Sie die Netzteil- und Kabelvorgaben des Kartenherstellers.',
          },
          {
            type: 'note',
            text: 'Bei beobachteten Gebrauchtpreisen von ~2.575–3.010 $ je RTX 4090 (InsiderLLM-Verkaufsangebote, aktualisiert am 2026-10-15) kostet ein Paar etwa 5.150–6.020 $ und damit mehr als eine einzelne RTX 5090 (~4.500–4.900 $ neu), die einzelne Karte ist also der einfachere 70B-Aufbau.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'RTX 4090 Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'RTX 5090 Preis bei Mindfactory prüfen',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'GPU-Anforderungen für lokale LLMs: Wie viel VRAM brauchen Sie?',
        content:
          '**Bei Q4_K_M-Quantisierung benötigt ein Modell rund 0,6 GB VRAM pro Milliarde Parameter, plus 2–4 GB für Kontext und Werkzeug-Overhead.** Diese Formel bildet sich direkt auf die vier Klassen ab.',
        items: [
          '**7B-Modelle — 8–9 GB:** passen in jede Klasse. Eine 12-GB-Karte lässt bequeme Reserve.',
          '**13–14B-Modelle — 11–13 GB:** brauchen in der Praxis 16 GB, sobald Kontext und Werkzeuge mitgezählt sind. Mittelklasse und höher (RTX 5060 Ti 16 GB oder besser).',
          '**22B-Modelle — 14–16 GB:** knapp auf einer 16-GB-Karte; bequem ab der Oberklasse.',
          '**33B-Modelle — 19–22 GB:** brauchen eine 24-GB-Karte. RTX-4090-Bereich.',
          '**70B-Modelle — rund 43 GB bei Q4 (Llama 3.3 70B, laut Ollama):** übersteigen jede einzelne Karte hier; die RTX 5090 32 GB kommt nur mit aggressiver Quantisierung oder teilweisem CPU-Offloading heran, sonst planen Sie einen Dual-GPU-Aufbau. Eine einzelne 24-GB-Karte fasst ein 70B-Modell bei Q4 nicht.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Die Kontextlänge ist ein versteckter VRAM-Kostenpunkt — lange Prompts und große Kontextfenster verbrauchen VRAM zusätzlich zu den Modellgewichten. Lassen Sie immer 2–4 GB Reserve. Die vollständige Methode finden Sie im VRAM-Leitfaden unter „Weiterführende Artikel“.',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Warum die GPU-Preise 2026 stiegen',
        content:
          '**Die GPU-Preise stiegen 2026 stark und drückten Consumer-Karten bis zu etwa 2,5-fach über ihre ursprüngliche UVP (RTX 5090; etwa 1,35- bis 1,45-fach bei RTX 5060 Ti und RTX 5070 Ti); die Quellen sind sich über die Ursache uneinig.** Das verändert die Kaufrechnung, also planen Sie damit statt mit den Einführungspreisen.',
        items: [
          '**Keine einzelne Ursache ist belegt.** Genannte Einflussfaktoren sind DRAM-/GDDR7-Angebot, Nachfrage durch KI-Rechenzentren und gemeldete Produktionsänderungen; die Quellen sind sich uneinig, wie stark jeder Faktor wiegt. [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) und [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) sehen Speicher als Teil der Erklärung; laut BuySellRAM kann er nicht den größten Teil ausmachen, und die Daten trennen Speicher nicht von Angebot, Zuteilung und Nachfrage.',
          '**Die RTX 5090 ist das deutlichste Beispiel:** ein Einführungspreis von 1.999 $, aber ~4.921 $ als niedrigster US-Angebotspreis in den BuySellRAM-Daten — etwa das 2,5-Fache und seit August um 64 % gestiegen.',
          '**Auch kleinere Karten stiegen, unterschiedlich stark.** Die RTX 5060 Ti 16 GB wird rund 44 % über ihrer UVP von 429 $ gelistet, die RTX 5070 Ti rund 35 % über 749 $, obwohl beide 16 GB tragen.',
          '**Gebraucht ist nicht mehr automatisch günstiger.** In den BuySellRAM-Angebotspreisdaten lagen gebrauchte RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti und RTX 5070 Ti auf oder über den Neupreisen, und die gebrauchte RTX 3060 12 GB stieg seit August um rund 31 %. Vergleichen Sie beides und bevorzugen Sie Verkäufer mit Rückgaberecht.',
          '**Rechnen Sie nicht mit einem Refresh.** Die RTX-50-Super-Karten von NVIDIA gelten Berichten zufolge wegen der Speicherversorgung als auf unbestimmte Zeit verschoben (NVIDIA hat das nicht bestätigt). **Entscheidung:** Wenn Sie warten können, beobachten Sie, ob die Preise nachgeben; wenn nicht, kaufen Sie die kleinste Karte, die zu Ihrem Zielmodell passt.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GPU-Preise liegen 2026 bis zu etwa 2,5-fach über der UVP (RTX 5090; etwa 1,35- bis 1,45-fach bei RTX 5060 Ti und RTX 5070 Ti); genannte Einflussfaktoren sind DRAM-/GDDR7-Angebot und Nachfrage durch KI-Rechenzentren, die Quellen sind sich über die Gewichtung uneinig, daher sollte ein Käufer für lokale LLMs Neu- und Gebrauchtpreise vergleichen und die kleinste zum Zielmodell passende Karte kaufen.',
          },
          {
            type: 'plain-terms',
            text: 'Die Karten sind nicht besser geworden, aber teurer, und die Quellen sind sich uneinig, wie viel davon auf Speicher und wie viel auf Nachfrage oder Lieferzuteilung entfällt. Bis die Preise nachgeben, behandeln Sie die UVP als historische Zahl, vergleichen Sie Neu- und Gebrauchtpreise und zahlen Sie nicht für mehr VRAM, als Ihr Modell tatsächlich braucht.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Entscheidungsbaum: Wählen Sie Ihre GPU in vier Fragen',
        content:
          '**Vier Fragen, der Reihe nach, führen die meisten Käufer zu einer Karte.**',
        items: [
          '**1. Was ist das größte Modell, das Sie ausführen wollen?** 7B: Budget-Klasse. 14B: Mittelklasse (eine 16-GB-Karte). 22B: Oberklasse. 33B: RTX 4090. 70B: RTX 5090 oder Dual-GPU.',
          '**2. Was ist Ihre harte Budgetgrenze?** Bis ~400 $: RTX 3060 12 GB. Bis ~700 $: RTX 5060 Ti 16 GB oder eine gebrauchte RTX 4060 Ti 16 GB. ~900–1.200 $: RTX 4070 Ti Super, RTX 5070 Ti oder RTX 4080 Super. Ab 2.000 $: RTX 4090 oder RTX 5090.',
          '**3. NVIDIA oder AMD?** Wählen Sie NVIDIA, außer Sie besitzen bereits AMD-Hardware oder finden einen starken Rabatt auf die RX 7800 XT — CUDA kann Einrichtungszeit gegenüber ROCm sparen.',
          '**4. Hat Ihr Netzteil Reserve?** Karten über der Mittelklasse brauchen 285–575 W; prüfen Sie Netzteil und Gehäusekühlung, bevor Sie Enthusiast-Hardware kaufen.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Wählen Sie eine GPU für lokale LLMs, indem Sie zuerst die größte Modellgröße beantworten, dann die Budgetgrenze, dann NVIDIA gegen AMD und zuletzt die Netzteilreserve.',
          },
          {
            type: 'plain-terms',
            text: 'Beginnen Sie mit dem größten Modell, das Sie wirklich ausführen wollen, und lassen Sie das Ihre Klasse bestimmen. Erst danach schauen Sie auf Preis, Marke und ob Ihr Netzteil die Karte versorgen kann. Die umgekehrte Reihenfolge ist der Weg, zu viel auszugeben oder eine Karte zu kaufen, die Ihr Modell nicht ausführen kann.',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-de.webp',
        imageCaption:
          'Vier-Fragen-Entscheidungsfluss zur Wahl einer GPU für lokale LLMs: Die größte Zielmodellgröße legt die Klasse fest, die Budgetgrenze grenzt die Wahl ein, NVIDIA gegen AMD entscheidet die Marke, und die Netzteilreserve bestätigt die Enthusiast-Wahl.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Regionale Preise & Bezugsquellen',
        content:
          '**GPU-Preise schwanken je Region — die Preise in diesem Leitfaden sind US-Angebotspreise, in Deutschland kommen 19 % MwSt. hinzu.** Die folgenden Links sind reine Produkt-Suchlinks; sie tragen keine Affiliate-Kennungen.',
        items: [
          '**Deutschland:** Mindfactory.de und alternate.de führen GPUs oft günstiger als Amazon.de und sind die erste Anlaufstelle für Grafikkarten; deutsche Preise liegen in der Regel über den US-Werten.',
          '**Gebrauchtmarkt:** eBay Kleinanzeigen ist der größte deutsche Gebrauchtmarkt für GPUs. Gebrauchte Karten sind nicht mehr verlässlich günstiger als neue — vergleichen Sie beide und bevorzugen Sie Verkäufer mit Rückgaberecht.',
          '**Österreich & Schweiz:** Geizhals.at und digitec.ch decken den DACH-Raum ab; Preise und Verfügbarkeit weichen leicht von Deutschland ab.',
          '**Preisvergleich:** Geizhals.de ist der Standard für den Preisvergleich neuer Karten in Deutschland — prüfen Sie dort die aktuell günstigste Bezugsquelle.',
          '**Verfügbarkeit:** High-End-Karten (RTX 4090, RTX 5090) sind 2026 zeitweise knapp, die RTX 5090 ist zum Listenpreis oft ausverkauft; rechnen Sie mit schwankenden Preisen und prüfen Sie mehrere Händler.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wegen des Anstiegs 2026 ist jede Preisangabe in diesem Leitfaden eine schnelllebige Momentaufnahme. Öffnen Sie immer das aktuelle Händlerangebot vor dem Kauf — die Preise haben sich von Woche zu Woche bewegt.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'GPUs für lokale LLMs (Deutschland)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'GPUs bei Amazon.de durchsuchen',
          },
          {
            url: 'https://www.mindfactory.de/Hardware/Grafikkarten+(VGA).html',
            productName: 'GPUs für lokale LLMs (Mindfactory)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'GPUs bei Mindfactory durchsuchen',
          },
          {
            url: 'https://www.alternate.de/Grafikkarten',
            productName: 'GPUs für lokale LLMs (alternate.de)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'GPUs bei alternate.de durchsuchen',
          },
          {
            url: 'https://geizhals.de/?cat=gra16_512',
            productName: 'GPU-Preisvergleich (Geizhals)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'GPU-Preise bei Geizhals vergleichen',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim GPU-Kauf für lokale LLMs',
        items: [
          '**Nach Token pro Sekunde statt nach VRAM kaufen.** Eine schnellere Karte, die Ihr Modell nicht fasst, ist nutzlos. Prüfen Sie zuerst, dass das Modell mit 2–4 GB Reserve in den VRAM passt, und vergleichen Sie dann das Tempo innerhalb dieser Klasse.',
          '**Die 6-GB-RTX-3060 statt der 12-GB-Version kaufen.** Sie teilen einen Namen, aber keinen Einsatzzweck — die 6-GB-Karte endet bei 3B-Modellen. Bestätigen Sie immer die 12-GB-Variante im Angebot.',
          '**Annehmen, die RTX 4060 Ti 16 GB sei schneller als die 8-GB-Version.** Ist sie nicht — es ist derselbe GPU-Chip mit mehr Speicher. Kaufen Sie sie für Kapazität (14B-Modelle), nicht für Tempo; die RTX 5060 Ti 16 GB ist die schnellere 16-GB-Option.',
          '**Sich an der UVP statt am aktuellen Preis orientieren.** Der Anstieg 2026 bedeutet, dass Einführungspreise die Realität nicht mehr abbilden. Kalkulieren Sie mit dem aktuellen Händlerpreis und vergleichen Sie Neu- und Gebrauchtpreise — gebraucht ist nicht mehr verlässlich günstiger.',
          '**Die Netzteilanforderungen ignorieren.** Eine RTX 5090 ist mit 575 W angegeben, und NVIDIA nennt 1000 W erforderliche Systemleistung und 850 W Minimum im PSU-Checker. Eine Karte, die unter Last einbricht, ist schlechter als eine langsamere Karte, die stabil läuft.',
          '**AMD wählen, ohne Einrichtungszeit einzuplanen.** Die RX 6700 XT und RX 7800 XT bieten gutes Preis-Leistungs-Verhältnis, aber die ROCm-Einrichtung kostet Stunden. Rechnen Sie diese Zeit gegen das ersparte Geld gegenüber einer NVIDIA-Karte.',
          '**Für 7B-Modelle überdimensionieren.** Wenn 7B-Modelle Ihren Einsatzzweck abdecken, ist eine RTX 4090 verschwendetes Geld und verschwendeter Strom. Passen Sie die Klasse an das Modell an, nicht an das zufällig vorhandene Budget.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-de.svg',
        imageCaption:
          'Sieben häufige Fehler beim GPU-Kauf für lokale LLMs: nach Tempo statt VRAM kaufen, 6-GB- und 12-GB-RTX-3060 verwechseln, von der 16-GB-RTX-4060-Ti mehr Tempo erwarten, sich an der UVP orientieren, Netzteilbedarf ignorieren, AMD-Einrichtungszeit unterschätzen und für 7B-Modelle überdimensionieren.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[NVIDIA GeForce RTX 40 Series — Spezifikationen](https://www.nvidia.com/de-de/geforce/graphics-cards/40-series/) — Offizielle VRAM-Kapazität und Leistungsaufnahme (TGP) für RTX 4060 Ti, 4070 Ti Super, 4080 Super und 4090.',
          '[NVIDIA GeForce RTX 5090 — Spezifikationen](https://www.nvidia.com/de-de/geforce/graphics-cards/50-series/rtx-5090/) — Offizielle 32 GB GDDR7-VRAM, 575 W TGP, 1000 W erforderliche Systemleistung (Konfiguration mit Ryzen 9 9950X) und 850 W Minimum im PSU-Checker der RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — niedrigste US-Angebotspreise für Neu- und Gebrauchtkarten am 11. Oktober 2026 im Vergleich zum 8. August 2026, Grundlage der meisten Preise in diesem Leitfaden (Angebotspreise, keine abgeschlossenen Verkäufe).',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — Händler- und eBay-Verkaufspreisspannen für RTX 4090 und RTX 5090 (aktualisiert am 2026-10-15); die Werte für RTX 4090 und RTX 5090 in diesem Leitfaden kombinieren diese Spannen mit den Angebotspreisen von BuySellRAM.',
          '[NVIDIA Newsroom — Ankündigung GeForce RTX 5060 Ti (2025-04-15)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — Einführungspreis von 429 $ für die RTX 5060 Ti 16 GB (8 GB: 379 $).',
          '[NVIDIA Newsroom — Ankündigung GeForce RTX 50 Series (2025-01-06)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — Einführungspreis von 749 $ für die RTX 5070 Ti.',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — UVP gegenüber Straßenpreis für RTX 5090, RTX 5070 Ti und RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — Bericht (von NVIDIA nicht bestätigt), dass der Refresh der RTX 50 Super wegen der Speicherversorgung verschoben ist.',
          '[Geizhals Deutschland — Grafikkarten-Preisvergleich](https://geizhals.de/?cat=gra16_512) — Aktuelle deutsche Händlerpreise zum Gegenprüfen; die Preise in diesem Leitfaden sind US-Werte.',
          '[AMD Radeon — Spezifikationen](https://www.amd.com/de/products/graphics/desktops/radeon.html) — Offizielle VRAM- und Leistungsangaben für RX 7800 XT und RX 6700 XT.',
          '[llama.cpp-Scoreboard: Llama 2 7B Q4_0 auf CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) — von Entwicklern gemeldete llama-bench-Ergebnisse in Token pro Sekunde für RTX 3060, 4060 Ti (8 GB), 5060 Ti, 4070 Ti Super, 5070 Ti, 4080 Super, 4090 und 5090; die Einträge stammen von verschiedenen Nutzern und Builds.',
          '[Ollama: Llama 3.3 70B](https://ollama.com/library/llama3.3) — der Download des 70B-Modells wird mit 43 GB angegeben, Grundlage der 70B-VRAM-Angabe in diesem Leitfaden.',
          '[Beste GPUs für lokale LLMs 2026](/de/local-llms/best-gpus-for-local-llms) — der breitere GPU-Benchmark-Satz auf dieser Website.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist die günstigste GPU für LLM-Inferenz im Jahr 2026?',
            a: 'Die NVIDIA RTX 3060 12 GB für rund 320–400 $ ist die preisgünstigste neue Karte in diesem Ratgeber, die lokale LLM-Inferenz gut ausführt. Ihre 12 GB VRAM fassen jedes 7B-Modell und die meisten 13B-Modelle bei Q4-Quantisierung, mit etwa 76 Token pro Sekunde bei Llama 2 7B Q4_0 (Entwicklerwert). Eine RX 6700 XT kann gebraucht günstiger sein, doch die Preise schwanken je Anbieter, und sie braucht AMD-ROCm-Einrichtung. Neu- und Gebrauchtpreise der RTX 3060 liegen inzwischen dicht beieinander, vergleichen Sie also beides.',
          },
          {
            q: 'Warum sind die GPU-Preise 2026 so hoch?',
            a: 'Eine einzelne Ursache ist nicht belegt. Genannte Einflussfaktoren sind DRAM-/GDDR7-Angebot, Nachfrage durch KI-Rechenzentren und gemeldete Produktionsänderungen, und die Quellen (InsiderLLM und BuySellRAM) sind sich uneinig, wie stark jeder Faktor wiegt; laut BuySellRAM ist Speicher Teil der Erklärung, kann aber nicht den größten Teil ausmachen. Verkauft werden Karten bis zu etwa 2,5-fach über ihrer ursprünglichen UVP (RTX 5090; etwa 1,35- bis 1,45-fach bei RTX 5060 Ti und RTX 5070 Ti) — eine RTX 5090 startete bei 1.999 $, wird aber um 4.500-4.900 $ gelistet. Gebrauchte Karten entgehen dem Anstieg nicht mehr.',
          },
          {
            q: 'Welche GPU-Anforderungen gelten für den Betrieb eines lokalen LLMs?',
            a: 'Bei Q4_K_M-Quantisierung rechnen Sie mit rund 0,6 GB VRAM pro Milliarde Parameter plus 2–4 GB Overhead. Das bedeutet 8–9 GB für 7B-Modelle, 11–13 GB für 14B, 19–22 GB für 33B und rund 43 GB für 70B (Llama 3.3 70B bei Q4, laut Ollama). Eine 12-GB-Karte deckt 7B bequem ab, eine 16-GB-Karte deckt 14B ab, und 70B übersteigt jede einzelne Karte hier: Eine RTX 5090 32 GB kommt nur mit aggressiver Quantisierung oder teilweisem CPU-Offloading heran, sonst planen Sie einen Dual-GPU-Aufbau.',
          },
          {
            q: 'Welche Grafikkarte ist am besten für lokale LLMs?',
            a: 'Die beste Grafikkarte für lokale LLMs ist die mit ausreichend VRAM für Ihr Zielmodell bei Ihrem Budget. Für 7B-Modelle genügt eine RTX 3060 12 GB (~320–400 $). Für 14B-Modelle ist eine RTX 5060 Ti 16 GB (~618 $) oder eine gebrauchte RTX 4060 Ti 16 GB die Mittelklasse-Wahl. Für 33B-Modelle brauchen Sie eine RTX 4090 24 GB, für 70B kommt nur die RTX 5090 32 GB heran, mit aggressiver Quantisierung oder teilweisem CPU-Offload (70B bei Q4 sind laut Ollama etwa 43 GB). NVIDIA-Karten sind die reibungsärmste Wahl, weil CUDA in der Regel ohne zusätzliche Einrichtung funktioniert.',
          },
          {
            q: 'Ist die RTX 4060 Ti 16 GB schneller als die 8-GB-Version?',
            a: 'Nein. Die RTX 4060 Ti 16 GB und die 8-GB-Version nutzen denselben GPU-Chip, das Inferenztempo pro Token ist also ähnlich — etwa 64 Token pro Sekunde bei 7B-Modellen (llama.cpp-Scoreboard-Wert der 8-GB-Karte, Entwicklerwert). Die 16-GB-Version kauft Kapazität und lässt Sie 14B-Modelle ausführen, die nicht in 8 GB passen. Kaufen Sie sie für VRAM, nicht für Tempo.',
          },
          {
            q: 'Sollte ich für lokale LLMs NVIDIA oder AMD kaufen?',
            a: 'Kaufen Sie NVIDIA, außer Sie besitzen bereits AMD-Hardware oder finden einen starken Rabatt. NVIDIA CUDA funktioniert mit Ollama, LM Studio und llama.cpp in der Regel ohne zusätzliche Einrichtung. AMD-Karten wie die RX 6700 XT und RX 7800 XT bieten VRAM zu konkurrenzfähigen Preisen, aber der Aufwand für die ROCm-Einrichtung hängt von Distribution und GPU ab; prüfen Sie die Liste der von AMD unterstützten GPUs.',
          },
          {
            q: 'Kann eine einzelne GPU ein 70B-Modell ausführen?',
            a: 'Von den Karten in diesem Ratgeber kommt nur die RTX 5090 32 GB heran, und nur mit aggressiver Quantisierung oder teilweisem CPU-Auslagern — ein 70B-Modell bei Q4 sind laut Ollama rund 43 GB. Eine 24-GB-RTX-4090 fasst ein 70B-Modell bei Q4 nicht allein; die übliche Lösung sind zwei RTX 4090 für kombinierten VRAM, doch zu den in diesem Leitfaden verwendeten Preisen kostet dieses Paar etwa so viel wie eine einzelne RTX 5090.',
          },
          {
            q: 'Lohnt sich die RTX 5090 gegenüber der RTX 4090 für lokale LLMs?',
            a: 'Nur, wenn Sie gezielt mehr als 24 GB auf einer einzelnen Karte brauchen, zum Beispiel um näher an 70B-Modelle heranzukommen. Die RTX 5090 hat 32 GB VRAM gegenüber den 24 GB der RTX 4090, was der entscheidende Faktor ist. Für 7B–33B-Modelle fasst die RTX 4090 dieselben Modelle; zu den in diesem Leitfaden verwendeten Preisen kostet die RTX 5090 etwa das 1,8- bis 2,4-Fache einer RTX 4090, zahlen Sie also nur dann dafür, wenn die zusätzlichen 8 GB ein echtes Problem lösen.',
          },
          {
            q: 'Welches Netzteil brauche ich für diese GPUs?',
            a: 'Passen Sie das Netzteil an die Klasse an: Ein 550-W-Gerät genügt für die RTX 3060, 650–750 W für RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super und RTX 5070 Ti, 850 W für die RTX 4090, und für die RTX 5090 (575 W TGP) nennt NVIDIA 1000 W erforderliche Systemleistung (Konfiguration mit Ryzen 9 9950X) und 850 W Minimum im PSU-Checker. Unterdimensionierte Netzteile verursachen Instabilität unter Last. Befolgen Sie die Angaben des Karten- und Netzteilherstellers; dies ist keine Beratung zur elektrischen Sicherheit.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Den vollständigen VRAM-Bedarf für jede Modellgröße prüfen](/de/local-llms/how-much-vram-local-llm) — die vollständige VRAM-pro-Modellgröße-Methode hinter der Faustformel in diesem Leitfaden.',
          '[15+ GPUs mit veröffentlichten Lokale-LLM-Benchmarks vergleichen](/de/local-llms/best-gpus-for-local-llms) — der erweiterte GPU-Benchmark-Satz, inklusive älterer und Server-Karten über diese zehn hinaus.',
          '[Sehen, welche Modelle auf einer günstigen RTX 3060 12 GB laufen](/de/local-llms/best-budget-gpus-local-llm) — Tempi Modell für Modell in der Budget-Klasse, inklusive der 6-GB- gegen 12-GB-Unterscheidung.',
          '[RTX 5090 und RTX 4090 direkt vergleichen](/de/local-llms/rtx-5090-vs-rtx-4090-local-llm) — wann sich das RTX-5090-Upgrade lohnt und wann die RTX 4090 genügt.',
          '[Verstehen, wie Q4_K_M-Quantisierung den VRAM-Bedarf bestimmt](/de/local-llms/llm-quantization-explained) — warum Q4_K_M der Standard ist und wie Quantisierung die VRAM-Rechnung verändert.',
          '[Beste GPU unter 1.000 $ für lokale LLM-Inferenz?](/de/prompt-bites/best-gpu-under-1000-local-llm) — die 24-GB-Klasse: gebrauchte RTX 4090 gegen neue RTX 4080 SUPER.',
          '[RTX 4060 vs. RTX 3060 12GB: Welche ist besser für lokale LLMs?](/de/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — warum mehr VRAM eine neuere Generation bei dieser Aufgabe schlägt.',
          '[Beste Intel-Arc-GPU für lokale LLMs?](/de/prompt-bites/best-intel-arc-gpu-local-llm) — die Arc B580 als günstigere Alternative und die Software-Kompromisse, die damit einhergehen.',
          '[Bestes RTX-4090-Setup für 70B-Modelle?](/de/prompt-bites/best-rtx-4090-setup-70b-models) — was es wirklich braucht, um ein 70B-Modell auf der Spitzenkarte dieses Leitfadens zu betreiben.',
          '[Bester lokaler LLM für ein MacBook Air ohne eGPU?](/de/prompt-bites/best-local-llm-macbook-air-no-egpu) — warum eine eGPU die GPUs in diesem Leitfaden auf Apple Silicon nicht ersetzen kann.',
          '[Bestes Windows-Notebook für lokale LLMs unter 1.500 $?](/de/prompt-bites/best-windows-laptop-local-llm-under-1500) — das mobile GPU-Äquivalent zu den Desktop-Klassen dieses Leitfadens.',
          '[Welche Hardware brauchen Sie, um ein 7B-Modell lokal zu fine-tunen?](/de/prompt-bites/fine-tuning-7b-model-locally-hardware) — welche dieser GPUs auch für QLoRA-Fine-Tuning geeignet sind, nicht nur für Inferenz.',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Meilleure carte graphique pour LLM locaux : guide GPU 2026',
    seoTitle: 'Meilleure carte graphique LLM local 2026 : guide d\'achat',
    intro:
      'La plupart des conseils sur les GPU pour LLM locaux optimisent le mauvais chiffre. La vitesse en tokens par seconde décide de la rapidité de réponse d\'un modèle, mais c\'est la VRAM qui décide si le modèle s\'exécute tout court — et un modèle qui ne tient pas en mémoire est infiniment plus lent qu\'un modèle qui y tient. Ce guide compare dix cartes graphiques grand public sur quatre gammes de prix selon les chiffres qui pèsent réellement sur un achat : capacité VRAM, vitesse d\'inférence, consommation et prix. Une réserve sur les prix : ils ont flambé en 2026 (les facteurs cités incluent l\'offre de mémoire et la demande des centres de données IA ; les sources divergent sur leur poids) — un RTX 5090 s\'affiche désormais à environ 2,5 fois son tarif de lancement — donc la plupart des prix ici sont les prix demandés les plus bas aux États-Unis tirés des données BuySellRAM liées dans les Sources, et les fourchettes du RTX 4090 et du RTX 5090 s\'appuient aussi sur les données d\'annonces vendues d\'InsiderLLM ; vérifiez le tarif actuel avant d\'acheter.',
    metaDescription:
      'Quelle carte graphique pour LLM locaux ? Dix GPU comparés : VRAM, vitesse, conso et prix 2026, du moins cher au RTX 5090, avec les besoins GPU par modèle.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-fr.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16 Go, RTX 5060 Ti 16 Go, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — dix cartes graphiques, quatre budgets, une règle : achetez pour la VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      'Acheteurs qui choisissent un GPU spécifiquement pour exécuter des LLM locaux et décident selon la gamme de prix et la taille de modèle visée. Suppose une familiarité avec la quantification et la VRAM comme contrainte, mais pas avec les références GPU actuelles précises.',
    readTime: '14 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      'meilleur gpu llm local 2026',
      'guide d\'achat gpu llm local',
      'rtx 3060 vs rtx 4090 llm local',
      'combien de vram pour llm local',
      'gpu llm local pas cher',
      'meilleure carte graphique llm local',
      'gpu requis pour llm local',
    ],
    leadAnswerBlock:
      '**La meilleure carte graphique pour les LLM locaux est celle dont la VRAM correspond à votre modèle, pas la carte la plus rapide. Un RTX 3060 12 Go exécute n\'importe quel modèle 7B, une carte 16 Go (RTX 5060 Ti, RTX 4060 Ti ou RTX 5070 Ti) gère les modèles 14B, un RTX 4090 24 Go gère les modèles 33B, et, parmi les cartes de ce guide, seul le RTX 5090 32 Go s\'approche d\'un modèle 70B, et seulement avec une quantification agressive ou un déchargement partiel sur le CPU (le 70B en Q4 pèse environ 43 Go selon Ollama).**',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure carte graphique pour exécuter des LLM locaux en 2026 ?',
        answer:
          'Achetez d\'abord pour la VRAM, ensuite pour la vitesse. Un RTX 3060 12 Go (env. 320-400 $) est le choix budget et exécute n\'importe quel modèle 7B. Une carte 16 Go est le choix de milieu de gamme pour les modèles 14B — un RTX 5060 Ti 16 Go (env. 620 $ neuf) ou un RTX 4060 Ti 16 Go d\'occasion (env. 650 $). Un RTX 4090 24 Go gère les modèles 33B, et, parmi les cartes de ce guide, seul le RTX 5090 32 Go (env. 4 500-4 900 $) s\'approche du 70B, et seulement avec une quantification agressive ou un déchargement partiel sur le CPU (le 70B en Q4 pèse environ 43 Go selon Ollama). À noter : les prix 2026 sont bien au-dessus des tarifs de lancement.',
        bullets: [
          'Budget : RTX 3060 12 Go, env. 320-400 $ neuf ou d\'occasion — exécute tout modèle 7B à ~76 tok/s (Llama 2 7B Q4_0, valeur rapportée par des développeurs)',
          'Milieu de gamme : RTX 5060 Ti 16 Go, env. 620 $ neuf ([tarif de lancement 429 $](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)) — modèles 14B avec marge',
          'Enthousiaste : RTX 5090 32 Go, env. 4 500-4 900 $ — seule carte de 32 Go ici ; le 70B (environ 43 Go en Q4) exige une quantification agressive ou un déchargement',
          'Les prix GPU 2026 sont jusqu\'à environ 2,5 fois au-dessus du tarif de lancement (RTX 5090 ; environ 1,35 à 1,45 fois pour les RTX 5060 Ti et RTX 5070 Ti) — comparez neuf et occasion avant d\'acheter',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits en bref', anchor: '#quick-facts' },
      { label: 'Choix de la rédaction', anchor: '#editors-choice' },
      { label: 'Tableau comparatif des GPU', anchor: '#comparison-table' },
      { label: 'Quel GPU acheter ?', anchor: '#which-gpu' },
      { label: 'Gamme budget (320-400 $)', anchor: '#budget-tier' },
      { label: 'Milieu de gamme (620-790 $)', anchor: '#mid-tier' },
      { label: 'Haut de gamme (900-1 200 $)', anchor: '#high-tier' },
      { label: 'Gamme enthousiaste (2 000 $+)', anchor: '#enthusiast-tier' },
      { label: 'GPU requis : combien de VRAM ?', anchor: '#vram-needs' },
      { label: 'Pourquoi les prix GPU ont flambé en 2026', anchor: '#price-surge' },
      { label: 'Arbre de décision', anchor: '#decision-flowchart' },
      { label: 'Prix régionaux et où acheter', anchor: '#where-to-buy' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Articles liés', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**La VRAM est la contrainte déterminante.** Un modèle qui ne tient pas en VRAM échoue au chargement ou déborde sur la RAM système et devient trop lent pour un usage interactif. Choisissez la gamme dont la VRAM correspond à votre modèle visé, puis optimisez la vitesse à l\'intérieur de cette gamme.',
          '**Les prix ont flambé en 2026.** Les prix GPU sont jusqu\'à environ 2,5 fois au-dessus du tarif de lancement (RTX 5090 ; environ 1,35 à 1,45 fois pour les RTX 5060 Ti et RTX 5070 Ti). Les facteurs cités incluent l\'offre de DRAM/GDDR7, la demande des centres de données IA et des changements de production rapportés ; les sources divergent sur le poids de chacun. Un RTX 5090 s\'affiche à env. 4 500-4 900 $, pas à son tarif de lancement de 1 999 $, et les prix ont encore monté entre août et octobre. Traitez les prix ici comme un instantané — la plupart sont des prix demandés aux États-Unis, et les fourchettes du RTX 4090 et du RTX 5090 s\'appuient aussi sur des données d\'annonces vendues — et comparez le neuf à l\'occasion avant d\'acheter.',
          '**Choix budget : NVIDIA RTX 3060 12 Go** (env. 320-400 $, neuf et occasion coûtent désormais à peu près autant) — exécute tout modèle 7B (~76 tok/s en Llama 2 7B Q4_0, valeur rapportée par des développeurs) et la plupart des modèles 13B en Q4.',
          '**Choix milieu de gamme : NVIDIA RTX 5060 Ti 16 Go** (env. 618 $ neuf, env. 649 $ d\'occasion demandé) — 16 Go de VRAM dégagent les modèles 14B avec une marge de contexte, et sa bande passante mémoire de 448 Go/s (~91 tok/s, valeur rapportée par des développeurs) est supérieure aux 288 Go/s du RTX 4060 Ti 16 Go, plus ancien (~64 tok/s pour la version 8 Go, valeur rapportée par des développeurs). D\'occasion, les deux coûtent à peu près autant (env. 650 $) ; le plancher de ~790 $ du RTX 4060 Ti 16 Go neuf ne repose que sur trois annonces selon BuySellRAM.',
          '**Choix haut de gamme : NVIDIA RTX 4080 Super 16 Go** (env. 1 200 $) — la carte 16 Go la plus chère ici (~148 tok/s, valeur rapportée par des développeurs). Le RTX 4070 Ti Super (env. 900 $) et le RTX 5070 Ti (env. 1 008 $) coûtent moins cher et offrent peut-être un meilleur rapport qualité-prix ; le RTX 5070 Ti est plus rapide dans les mêmes mesures de développeurs (~177 tok/s).',
          '**Choix enthousiaste : NVIDIA RTX 4090 24 Go / RTX 5090 32 Go** — le RTX 4090 (env. 2 000 $+ neuf, env. 2 575-3 010 $ d\'occasion) exécute les modèles 33B ; parmi les cartes de ce guide, seul le RTX 5090 (env. 4 500-4 900 $) s\'approche du 70B, et seulement avec une quantification agressive ou un déchargement partiel sur le CPU (le 70B en Q4 pèse environ 43 Go selon Ollama).',
          '**AMD est viable mais plus exigeant.** Le RX 6700 XT (12 Go) et le RX 7800 XT (16 Go) offrent de la VRAM à des prix compétitifs, mais la durée de configuration de ROCm varie selon la distribution et la carte.',
          '**La consommation évolue avec la gamme.** Un RTX 3060 tire 170 W ; un RTX 5090 est donné pour 575 W de TGP, et [NVIDIA indique](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) 1000 W de puissance système requise (configuration Ryzen 9 9950X) et 850 W minimum dans son vérificateur d\'alimentation. Budgétez l\'alimentation en même temps que la carte.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits en bref',
        items: [
          '**Gamme budget (320-400 $) :** RTX 3060 12 Go ou RX 6700 XT 12 Go — exécute le 7B et la plupart des modèles 13B.',
          '**Milieu de gamme (620-790 $) :** RTX 5060 Ti 16 Go, RTX 4060 Ti 16 Go ou RX 7800 XT 16 Go — exécute confortablement les modèles 14B.',
          '**Haut de gamme (900-1 200 $) :** RTX 4080 Super, RTX 5070 Ti ou RTX 4070 Ti Super, tous en 16 Go — inférence 14B rapide, travail 22B léger.',
          '**Gamme enthousiaste (2 000 $+) :** RTX 4090 24 Go ou RTX 5090 32 Go — modèles 33B, et 70B uniquement avec une quantification agressive ou un déchargement partiel vers le CPU sur le 5090.',
          '**Règle VRAM pour Q4_K_M :** environ 0,6 Go par milliard de paramètres, plus 2-4 Go pour le contexte et l\'outillage.',
          '**Plage de consommation :** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Réalité des prix 2026 :** les prix sont jusqu\'à environ 2,5 fois au-dessus du tarif de lancement (RTX 5090 ; environ 1,35 à 1,45 fois pour les RTX 5060 Ti et RTX 5070 Ti) et les sources divergent sur les causes ; l\'occasion n\'est plus fiablement moins chère que le neuf, comparez donc les deux.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Choix de la rédaction (16 Go premium) : RTX 4080 Super',
        highlight: true,
        content:
          '**Pour les acheteurs qui veulent une carte 16 Go premium et peuvent dépasser les 1 000 $, le NVIDIA RTX 4080 Super 16 Go est notre choix de la rédaction — un choix pour une configuration 16 Go premium, pas pour le meilleur rapport qualité-prix.** Ses 16 Go de VRAM dégagent tout modèle 14B avec une marge de contexte, elle atteint environ 148 tok/s en Llama 2 7B Q4_0 (valeur rapportée par des développeurs), et à env. 1 200 $ c\'est la carte 16 Go la plus chère ici. Le RTX 4070 Ti Super (env. 900 $, ~132 tok/s) et le RTX 5070 Ti (env. 1 008 $, ~177 tok/s) coûtent environ 300 $ et env. 190 $ de moins et offrent peut-être un meilleur rapport qualité-prix ; le RTX 5070 Ti est plus rapide dans les mêmes mesures de développeurs. Si votre budget est plafonné sous 700 $, le RTX 5060 Ti 16 Go est le choix valeur. Ne dépensez davantage que si vous avez spécifiquement besoin de modèles 33B ou 70B.',
        callouts: [
          {
            type: 'note',
            text: 'Ce choix de la rédaction est un choix 16 Go premium, pas un classement prix-capacité : le RTX 4070 Ti Super et le RTX 5070 Ti coûtent moins cher et offrent peut-être un meilleur rapport qualité-prix. PromptQuorum n\'est inscrit à aucun programme d\'affiliation et les liens ci-dessous ne portent aucune balise d\'affiliation — ce sont de simples liens de référence qui ne génèrent aucune commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Vérifier le prix du RTX 4080 Super sur Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Vérifier le prix du RTX 4080 Super sur Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comment les dix GPU se comparent pour les LLM locaux en 2026',
        content:
          'Les chiffres de VRAM et de consommation sont les spécifications constructeur. Les vitesses marquées « valeur développeurs » sont des résultats llama-bench rapportés par des développeurs (Llama 2 7B Q4_0, CUDA) issus du tableau llama.cpp lié dans les Sources ; les entrées viennent d\'utilisateurs et de versions différents et n\'ont pas été re-mesurées par nos soins. Le chiffre du RTX 4060 Ti 16 Go est celui de la carte 8 Go (même puce GPU et bande passante mémoire de 288 Go/s). Le RX 6700 XT et le RX 7800 XT n\'y figurent pas : leurs vitesses sont des estimations grossières (est.) déduites de la bande passante mémoire par rapport aux résultats mesurés. La plupart des prix sont les prix demandés les plus bas aux États-Unis dans les données BuySellRAM liées ; les fourchettes du RTX 4090 et du RTX 5090 les combinent avec les fourchettes en boutique et d\'annonces vendues d\'InsiderLLM (mises à jour le 2026-10-15). Les prix sont jusqu\'à environ 2,5 fois au-dessus du tarif de lancement (RTX 5090 ; environ 1,35 à 1,45 fois pour les RTX 5060 Ti et RTX 5070 Ti), vérifiez donc avant d\'acheter (voir la date de mise à jour de cette page). La page GPU économiques liée utilise des estimations antérieures pour certaines cartes (par exemple env. 290-330 $ d\'occasion pour le RTX 3060 12 Go) ; les chiffres peuvent donc légèrement différer entre les deux pages.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour les LLM locaux, la VRAM d\'un GPU décide quels modèles vous pouvez exécuter et ses tokens par seconde décident de leur vitesse de réponse — achetez pour la première, puis optimisez la seconde.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez la VRAM comme la taille d\'un bureau et le modèle comme ce que vous posez dessus. Un GPU plus rapide dégage le bureau plus vite, mais si le modèle n\'y tient pas du tout, la vitesse n\'entre jamais en jeu. Choisissez d\'abord la gamme dont le bureau est assez grand.',
          },
        ],
        columns: ['GPU', 'VRAM', 'Vitesse (7B Q4)', 'Consommation', 'Prix (US, 2026)', 'Idéal pour'],
        rows: [
          {
            'GPU': 'RTX 3060 12 Go',
            'VRAM': '12 Go',
            'Vitesse (7B Q4)': '~76 tok/s (valeur dév.)',
            'Consommation': '170 W',
            'Prix (US, 2026)': '320-400 $ neuf / 320-350 $ occasion',
            'Idéal pour': 'Entrée budget — tout modèle 7B',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 Go',
            'Vitesse (7B Q4)': '~65-80 tok/s (est.)',
            'Consommation': '230 W',
            'Prix (US, 2026)': 'Variable selon le vendeur — vérifier',
            'Idéal pour': 'AMD 12 Go, accepte la config ROCm',
          },
          {
            'GPU': 'RTX 4060 Ti 16 Go',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~64 tok/s (carte 8 Go, valeur dév.)',
            'Consommation': '165 W',
            'Prix (US, 2026)': 'env. 790 $ neuf / env. 650 $ occasion',
            'Idéal pour': 'Milieu de gamme — modèles 14B, faible conso',
          },
          {
            'GPU': 'RTX 5060 Ti 16 Go',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~91 tok/s (valeur dév.)',
            'Consommation': '180 W',
            'Prix (US, 2026)': '618 $ neuf / 649 $ occasion',
            'Idéal pour': 'Milieu de gamme — 14B, génération actuelle',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~90-115 tok/s (est.)',
            'Consommation': '263 W',
            'Prix (US, 2026)': 'Prix AMD : consulter les annonces actuelles',
            'Idéal pour': '16 Go chez AMD, accepte la config ROCm',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~132 tok/s (valeur dév.)',
            'Consommation': '285 W',
            'Prix (US, 2026)': '900 $ neuf / 920 $ occasion',
            'Idéal pour': '14B rapide, consommation plus basse',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~177 tok/s (valeur dév.)',
            'Consommation': '300 W',
            'Prix (US, 2026)': '1 008 $ neuf / 1 050 $ occasion',
            'Idéal pour': '14B rapide, 16 Go à bon rapport qualité-prix',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~148 tok/s (valeur dév.)',
            'Consommation': '320 W',
            'Prix (US, 2026)': '1 200 $ neuf / 1 149 $ occasion',
            'Idéal pour': 'Choix de la rédaction — 16 Go premium',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 Go',
            'Vitesse (7B Q4)': '~186 tok/s (valeur dév.)',
            'Consommation': '450 W',
            'Prix (US, 2026)': 'env. 2 000 $+ neuf / 2 575-3 010 $ occasion',
            'Idéal pour': 'Modèles 33B, bi-GPU pour le 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 Go',
            'Vitesse (7B Q4)': '~290 tok/s (valeur dév.)',
            'Consommation': '575 W',
            'Prix (US, 2026)': '4 500-4 921 $ neuf / 5 880-6 350 $ occasion',
            'Idéal pour': '70B uniquement avec quantification agressive ou déchargement',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-fr.webp',
        imageCaption:
          'Dix cartes graphiques grand public pour les LLM locaux comparées par VRAM, vitesse d\'inférence 7B Q4, consommation et prix US actuel sur quatre gammes de budget. La VRAM monte de 12 Go (RTX 3060) à 32 Go (RTX 5090) ; achetez pour la taille de modèle dont vous avez besoin avant d\'optimiser la vitesse.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Quel GPU acheter ?',
        content:
          '**Votre plus gros modèle visé détermine votre gamme ; votre budget tranche entre NVIDIA et AMD à l\'intérieur de cette gamme.** Trouvez la ligne qui correspond à votre situation.',
        columns: ['Votre situation', 'Achetez ceci'],
        rows: [
          { 'Votre situation': 'J\'ai moins de 400 $ et je veux exécuter des modèles 7B', 'Achetez ceci': 'RTX 3060 12 Go' },
          { 'Votre situation': 'Je trouve une carte AMD 12 Go bon marché et j\'accepte la configuration', 'Achetez ceci': 'RX 6700 XT (vérifier les prix)' },
          { 'Votre situation': 'Je veux exécuter des modèles 14B avec un budget énergie serré', 'Achetez ceci': 'RTX 5060 Ti 16 Go (ou RTX 4060 Ti 16 Go d\'occasion)' },
          { 'Votre situation': 'Je veux une carte qui exécute le 14B rapidement et dure plusieurs années', 'Achetez ceci': 'RTX 5070 Ti ou RTX 4070 Ti Super 16 Go' },
          { 'Votre situation': 'Je veux une carte 16 Go premium et le prix est secondaire', 'Achetez ceci': 'RTX 4080 Super 16 Go (le 5070 Ti coûte moins)' },
          { 'Votre situation': 'J\'ai besoin de modèles 33B ou je prévois une future configuration bi-GPU 70B', 'Achetez ceci': 'RTX 4090 24 Go' },
          { 'Votre situation': 'J\'ai besoin d\'une seule carte pour des modèles 70B (quantification agressive ou déchargement partiel)', 'Achetez ceci': 'RTX 5090 32 Go' },
          { 'Votre situation': 'Je ne suis pas sûr et je veux le premier GPU le plus sûr', 'Achetez ceci': 'RTX 3060 12 Go — montez en gamme plus tard si vous la dépassez' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Gamme budget (320-400 $) : RTX 3060 12 Go et RX 6700 XT',
        content:
          '**La gamme budget exécute tout modèle 7B et la plupart des modèles 13B — et pour la plupart des nouveaux utilisateurs de LLM locaux, c\'est toute la capacité dont ils ont besoin.** Le RTX 3060 12 Go est le choix recommandé ; le RX 6700 XT est l\'alternative AMD si vous acceptez la friction de configuration. Les prix de cette gamme ont grimpé tout au long de 2026, et un RTX 3060 d\'occasion coûte désormais à peu près autant qu\'un neuf — comparez les deux.',
        items: [
          '**RTX 3060 12 Go (env. 320-400 $ neuf, env. 320-350 $ d\'occasion) :** 12 Go de VRAM, 170 W, ~76 tok/s en Llama 2 7B Q4_0 (valeur rapportée par des développeurs). Exécute Ministral 3 8B, Qwen3 8B, DeepSeek-R1 7B et la plupart des modèles 13B. La variante 12 Go est celle à acheter — évitez la variante 6 Go, limitée aux modèles 3B. Le stock neuf est limité et une carte d\'occasion n\'économise plus grand-chose : achetez la moins chère des deux, avec un délai de retour.',
          '**RX 6700 XT (d\'occasion, prix variable selon le vendeur) :** 12 Go de VRAM, 230 W, environ 65-80 tok/s sur les modèles 7B (estimation grossière déduite de la bande passante mémoire, non mesurée). Vérifiez les annonces en direct ; elle dépend d\'AMD ROCm, ce qui ajoute du temps de configuration.',
          '**Pourquoi acheter cette gamme :** le coût d\'entrée le plus bas, une faible consommation sur le RTX 3060, et assez de VRAM pour les modèles 7B-13B qui couvrent le chat général, l\'aide au code et le résumé.',
          '**Pourquoi éviter cette gamme :** si vous savez déjà que vous voulez des modèles 14B ou plus, la gamme budget vous frustrera en quelques semaines — commencez plutôt au milieu de gamme.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Achetez le RTX 3060 spécifiquement dans sa version 12 Go. Le RTX 3060 6 Go a une apparence similaire dans les annonces mais ne fait tenir que des modèles 3B — la moitié du nombre de paramètres, c\'est la différence entre un assistant utilisable et un jouet.',
          },
          {
            type: 'warning',
            text: 'Le RX 6700 XT peut être une porte d\'entrée économique, mais la durée de configuration de ROCm sous Linux varie selon la distribution et la carte ; consultez d\'abord la liste des GPU pris en charge par AMD. Si l\'économie face à un RTX 3060 est faible, achetez la carte NVIDIA.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'Vérifier le prix du RTX 3060 12 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'Vérifier le prix du RX 6700 XT sur Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Milieu de gamme (620-790 $) : RTX 5060 Ti 16 Go, RTX 4060 Ti 16 Go et RX 7800 XT',
        content:
          '**Le milieu de gamme existe pour une raison : 16 Go de VRAM dégagent les modèles 14B que les cartes 12 Go ne peuvent pas faire tenir avec un contexte utilisable.** Si les modèles de classe 14B sont votre cible, c\'est la gamme la moins chère qui les exécute correctement. Le RTX 5060 Ti 16 Go est le choix de la génération actuelle et, aux prix demandés utilisés dans ce guide, aussi l\'option NVIDIA 16 Go la moins chère ; le RTX 4060 Ti 16 Go coûte à peu près autant d\'occasion (env. 650 $) et plus cher en neuf (env. 790 $, d\'après seulement trois annonces BuySellRAM).',
        items: [
          '**RTX 5060 Ti 16 Go (env. 618 $ neuf / env. 649 $ d\'occasion demandé, tarif de lancement 429 $) :** 16 Go de GDDR7, 180 W, bande passante mémoire de 448 Go/s. Il n\'a pas été testé pour ce guide ; le tableau llama.cpp indique environ 91 tok/s en Llama 2 7B Q4_0 (valeur rapportée par des développeurs). Il exécute confortablement les modèles de classe Qwen3 14B. Les prix ont grimpé d\'environ 44 % au-dessus du tarif de lancement en 2026.',
          '**RTX 4060 Ti 16 Go (env. 790 $ neuf / env. 650 $ d\'occasion, prix demandés) :** 16 Go de VRAM, 165 W, environ 64 tok/s sur les modèles 7B (valeur du tableau llama.cpp pour la carte 8 Go, rapportée par des développeurs). Il utilise la même puce GPU et la même bande passante mémoire de 288 Go/s que le RTX 4060 Ti 8 Go, la vitesse par token est donc similaire — la version 16 Go achète de la capacité, pas de la vitesse brute. D\'occasion, il coûte à peu près autant que le RTX 5060 Ti 16 Go (env. 650 $ contre env. 649 $) ; le plancher de ~790 $ du neuf ne repose que sur trois annonces BuySellRAM.',
          '**RX 7800 XT (prix AMD : consulter les annonces actuelles — les données BuySellRAM ne couvrent que NVIDIA) :** 16 Go de VRAM, 263 W. Il n\'a pas été testé pour ce guide ; attendez-vous à environ 90-115 tok/s en 7B Q4 (estimation grossière déduite de la bande passante mémoire, non mesurée), avec la configuration AMD ROCm comme contrepartie.',
          '**Pourquoi acheter cette gamme :** vous voulez des modèles 14B, vous voulez une faible consommation (RTX 4060 Ti) ou vous voulez 16 Go au prix le plus bas possible.',
          '**Pourquoi éviter cette gamme :** si les modèles 7B suffisent, la gamme budget coûte 200 à 300 $ de moins ; si vous voulez une inférence 14B rapide, le haut de gamme est nettement plus rapide.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le RTX 4060 Ti 16 Go est une montée en capacité, pas en vitesse, par rapport à la version 8 Go — achetez-le parce que vous devez faire tenir des modèles 14B, pas parce que vous attendez plus de tokens par seconde. Le RTX 5060 Ti 16 Go est l\'option plus rapide et, aux prix demandés utilisés dans ce guide, coûte moins cher en neuf et à peu près autant d\'occasion.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'Vérifier le prix du RTX 5060 Ti 16 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'Vérifier le prix du RTX 4060 Ti 16 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'Vérifier le prix du RX 7800 XT sur Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'Haut de gamme (900-1 200 $) : RTX 4080 Super, RTX 5070 Ti et RTX 4070 Ti Super',
        content:
          '**Le haut de gamme garde 16 Go de VRAM mais ajoute la vitesse qui rend les modèles 7B-14B instantanés et les modèles 22B utilisables.** Les trois cartes font tenir les mêmes modèles que le milieu de gamme — vous payez pour des tokens par seconde, pas pour de la capacité. La flambée de 2026 a creusé l\'écart entre cette gamme et le milieu de gamme.',
        items: [
          '**RTX 4080 Super 16 Go (env. 1 200 $ neuf / env. 1 149 $ d\'occasion) :** 16 Go de VRAM, 320 W, environ 148 tok/s en Llama 2 7B Q4_0 (valeur rapportée par des développeurs). Le choix de la rédaction en 16 Go premium — la carte la plus chère ici, avec une prime d\'environ 190 à 300 $ sur les deux cartes ci-dessous, et plus lente que le RTX 5070 Ti dans les mêmes mesures.',
          '**RTX 5070 Ti 16 Go (env. 1 008 $ neuf / env. 1 050 $ d\'occasion demandé, [tarif de lancement 749 $](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)) :** 16 Go de GDDR7, 300 W, bande passante mémoire de 896 Go/s. Il n\'a pas été testé pour ce guide ; le tableau llama.cpp indique environ 177 tok/s en Llama 2 7B Q4_0 (valeur rapportée par des développeurs), et 16 Go font tourner un modèle 24B Q4 avec de la marge.',
          '**RTX 4070 Ti Super 16 Go (env. 900 $ neuf / env. 920 $ d\'occasion) :** 16 Go de VRAM, 285 W, environ 132 tok/s (valeur rapportée par des développeurs). La carte neuve la moins chère de cette gamme, avec la consommation la plus basse des trois.',
          '**Pourquoi acheter cette gamme :** vous exécutez des modèles 14B en continu et les voulez instantanés, ou vous faites du travail 22B léger et voulez de la marge.',
          '**Pourquoi éviter cette gamme :** si vous avez besoin de modèles 33B ou 70B, aucune carte 16 Go ne les fera tenir — passez à la gamme enthousiaste plutôt que de trop dépenser ici.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Dans cette gamme, le RTX 5070 Ti est le plus rapide dans les mesures de développeurs (~177 tok/s), le RTX 4070 Ti Super est le moins cher en neuf, et le RTX 4080 Super est le plus cher. Sauf si vous voulez précisément le RTX 4080 Super, prenez l\'une des deux moins chères.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Vérifier le prix du RTX 4080 Super sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'Vérifier le prix du RTX 5070 Ti sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'Vérifier le prix du RTX 4070 Ti Super sur Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Gamme enthousiaste (2 000 $+) : RTX 4090 et RTX 5090',
        content:
          '**La gamme enthousiaste est la seule qui exécute des modèles au-delà de 22B — et, parmi les cartes de ce guide, seul le RTX 5090 32 Go s\'approche d\'un modèle 70B : le 70B en Q4 pèse environ 43 Go selon Ollama, donc même lui exige une quantification agressive ou un déchargement partiel sur le CPU.** Achetez ici pour la capacité VRAM, pas pour la vitesse ; la vitesse est un effet secondaire. La flambée de 2026 a frappé le RTX 5090 le plus durement, les prix bougent donc d\'une semaine à l\'autre.',
        items: [
          '**RTX 4090 24 Go (env. 2 000 $+ neuf / env. 2 575-3 010 $ d\'occasion) :** 24 Go de VRAM, 450 W, environ 186 tok/s en Llama 2 7B Q4_0 (valeur rapportée par des développeurs). Exécute confortablement les modèles 33B. Le stock neuf de RTX 4090 est mince et le plancher de prix du neuf peut être périmé — les annonces montent jusqu\'à env. 3 800 $.',
          '**RTX 5090 32 Go (env. 4 500-4 921 $ neuf / env. 5 880-6 350 $ d\'occasion, tarif de lancement 1 999 $) :** 32 Go de VRAM GDDR7, 575 W, environ 290 tok/s en Llama 2 7B Q4_0 (valeur rapportée par des développeurs). La capacité de 32 Go est l\'argument central — c\'est la seule carte de ce guide avec 32 Go, mais un modèle 70B en Q4 pèse environ 43 Go selon Ollama et nécessite donc toujours une quantification agressive ou un déchargement partiel sur le CPU. Les prix demandés ont augmenté d\'environ 64 % entre août et octobre, et les annonces d\'occasion se situent au-dessus du neuf.',
          '**Pourquoi acheter cette gamme :** vous avez besoin de modèles 33B ou 70B, vous faites de l\'inférence par lots, ou vous voulez une carte qui n\'aura pas besoin d\'être remplacée avant des années.',
          '**Pourquoi éviter cette gamme :** pour les modèles 7B-14B, elle est surdimensionnée — le haut de gamme délivre des réponses instantanées sur ces tailles pour moins de la moitié du prix et de la consommation.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NVIDIA donne le RTX 5090 pour 575 W de TGP, avec 1000 W de puissance système requise (configuration Ryzen 9 9950X) et 850 W minimum dans son vérificateur d\'alimentation (voir la page RTX 5090 dans les Sources). Une alimentation sous-dimensionnée peut faiblir en charge : budgétez-la dans l\'achat. Ceci n\'est pas un conseil de sécurité électrique ; suivez les recommandations du fabricant de la carte pour l\'alimentation et les câbles.',
          },
          {
            type: 'note',
            text: 'Aux prix d\'occasion observés, env. 2 575 à 3 010 $ par RTX 4090 (annonces vendues InsiderLLM, mises à jour le 2026-10-15), une paire coûte env. 5 150 à 6 020 $, soit plus qu\'un seul RTX 5090 (env. 4 500 à 4 900 $ neuf), la carte unique est donc la configuration 70B la plus simple.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'Vérifier le prix du RTX 4090 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'Vérifier le prix du RTX 5090 sur Amazon',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'GPU requis pour les LLM locaux : combien de VRAM vous faut-il ?',
        content:
          '**En quantification Q4_K_M, un modèle a besoin d\'environ 0,6 Go de VRAM par milliard de paramètres, plus 2-4 Go pour le contexte et la surcharge d\'outillage.** Cette formule se projette directement sur les quatre gammes.',
        items: [
          '**Modèles 7B — 8-9 Go :** tiennent dans toutes les gammes. Une carte 12 Go laisse une marge confortable.',
          '**Modèles 13-14B — 11-13 Go :** ont besoin de 16 Go en pratique une fois le contexte et l\'outillage comptés. Milieu de gamme et au-dessus (RTX 5060 Ti 16 Go ou mieux).',
          '**Modèles 22B — 14-16 Go :** serrés sur une carte 16 Go ; confortables à partir du haut de gamme.',
          '**Modèles 33B — 19-22 Go :** ont besoin d\'une carte 24 Go. Territoire du RTX 4090.',
          '**Modèles 70B — environ 43 Go en Q4 (Llama 3.3 70B, selon Ollama) :** dépassent toute carte unique ici ; le RTX 5090 32 Go ne s\'en approche qu\'avec une quantification agressive ou un déchargement partiel sur le CPU, sinon prévoyez une configuration bi-GPU. Une seule carte 24 Go ne peut pas faire tenir un modèle 70B en Q4.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La longueur de contexte est un coût VRAM caché — les prompts longs et les grandes fenêtres de contexte consomment de la VRAM en plus des poids du modèle. Laissez toujours 2-4 Go de marge. Pour la méthode complète, voir le guide des besoins en VRAM lié dans les articles liés.',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Pourquoi les prix GPU ont flambé en 2026',
        content:
          '**Les prix GPU ont fortement grimpé en 2026, poussant les cartes grand public jusqu\'à environ 2,5 fois au-dessus de leur tarif de lancement (RTX 5090 ; environ 1,35 à 1,45 fois pour les RTX 5060 Ti et RTX 5070 Ti) ; les sources divergent sur la cause.** Cela modifie le calcul d\'achat, planifiez donc autour de cela plutôt qu\'autour des tarifs de lancement.',
        items: [
          '**Aucune cause unique n\'est établie.** Les facteurs cités incluent l\'offre de DRAM/GDDR7, la demande des centres de données IA et des changements de production rapportés ; les sources divergent sur le poids de chacun. [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) et [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) voient tous deux la mémoire comme une partie de l\'explication ; selon BuySellRAM, elle ne peut pas en être l\'essentiel, et ses données ne distinguent pas la mémoire de l\'offre, de l\'allocation et de la demande.',
          '**Le RTX 5090 est l\'exemple le plus clair :** un tarif de lancement de 1 999 $, mais env. 4 921 $ comme prix demandé le plus bas dans les données BuySellRAM — environ 2,5 fois, et +64 % depuis août.',
          '**Les cartes plus petites ont aussi augmenté, à des degrés différents.** Le RTX 5060 Ti 16 Go s\'affiche env. 44 % au-dessus de son tarif de lancement de 429 $ et le RTX 5070 Ti env. 35 % au-dessus de 749 $, bien que les deux embarquent 16 Go.',
          '**L\'occasion n\'est plus automatiquement moins chère.** Dans les données de prix demandés de BuySellRAM, les annonces d\'occasion des RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti et RTX 5070 Ti se situaient au niveau du neuf ou au-dessus, et le RTX 3060 12 Go d\'occasion a gagné environ 31 % depuis août. Comparez les deux et privilégiez les vendeurs qui acceptent les retours.',
          '**Ne comptez pas sur un renouvellement.** Les RTX 50 Super de NVIDIA seraient repoussées sans date en raison de l\'approvisionnement en mémoire (NVIDIA ne l\'a pas confirmé). **Décision :** si vous pouvez attendre, guettez la baisse des prix ; sinon, prenez la plus petite carte qui correspond à votre modèle visé.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les prix GPU en 2026 sont jusqu\'à environ 2,5 fois au-dessus du tarif de lancement (RTX 5090 ; environ 1,35 à 1,45 fois pour les RTX 5060 Ti et RTX 5070 Ti) ; les facteurs cités incluent l\'offre de DRAM/GDDR7 et la demande des centres de données IA, et les sources divergent sur le poids de chacun, donc un acheteur de LLM locaux devrait comparer le neuf et l\'occasion et prendre la plus petite carte qui correspond au modèle visé.',
          },
          {
            type: 'plain-terms',
            text: 'Les cartes ne sont pas devenues meilleures, mais plus chères, et les sources divergent sur la part due à la mémoire et celle due à la demande ou à l\'allocation de l\'offre. Tant que les prix ne baissent pas, traitez le tarif de lancement comme un chiffre historique, comparez le neuf et l\'occasion et ne payez pas pour plus de VRAM que ce dont votre modèle a réellement besoin.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Arbre de décision : choisissez votre GPU en quatre questions',
        content:
          '**Quatre questions, dans l\'ordre, orientent la plupart des acheteurs vers une seule carte.**',
        items: [
          '**1. Quel est le plus gros modèle que vous voulez exécuter ?** 7B : gamme budget. 14B : milieu de gamme (une carte 16 Go). 22B : haut de gamme. 33B : RTX 4090. 70B : RTX 5090 ou bi-GPU.',
          '**2. Quel est votre plafond budgétaire absolu ?** Sous env. 400 $ : RTX 3060 12 Go. Sous env. 700 $ : RTX 5060 Ti 16 Go ou RTX 4060 Ti 16 Go d\'occasion. Env. 900-1 200 $ : RTX 4070 Ti Super, RTX 5070 Ti ou RTX 4080 Super. À partir de 2 000 $ : RTX 4090 ou RTX 5090.',
          '**3. NVIDIA ou AMD ?** Choisissez NVIDIA sauf si vous possédez déjà du matériel AMD ou trouvez une forte remise sur le RX 7800 XT — CUDA peut faire gagner du temps de configuration par rapport à ROCm.',
          '**4. Votre alimentation a-t-elle de la marge ?** Les cartes au-dessus du milieu de gamme ont besoin de 285 à 575 W ; vérifiez votre alimentation et le refroidissement du boîtier avant d\'acheter du matériel de gamme enthousiaste.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisissez un GPU pour les LLM locaux en répondant d\'abord à la plus grande taille de modèle, ensuite au plafond budgétaire, puis à NVIDIA contre AMD, et enfin à la marge de l\'alimentation.',
          },
          {
            type: 'plain-terms',
            text: 'Commencez par le plus gros modèle que vous voulez réellement exécuter et laissez-le fixer votre gamme. Ce n\'est qu\'ensuite que vous regardez le prix, la marque et si votre alimentation peut gérer la carte. Faire l\'inverse, c\'est ainsi qu\'on dépense trop ou qu\'on achète une carte incapable de faire tourner son modèle.',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-fr.webp',
        imageCaption:
          'Flux de décision en quatre questions pour choisir un GPU de LLM local : la plus grande taille de modèle visée fixe la gamme, le plafond budgétaire affine le choix, NVIDIA contre AMD décide la marque, et la marge de l\'alimentation confirme le choix de gamme enthousiaste.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Prix régionaux et où acheter',
        content:
          '**Les prix GPU varient selon la région — les prix de ce guide sont des prix demandés aux États-Unis ; en France, comptez 20 % de TVA incluse et des écarts.** Les liens ci-dessous sont de simples liens de recherche de produits ; ils ne portent aucune balise d\'affiliation et ne génèrent aucune commission.',
        items: [
          '**France :** Amazon.fr et LDLC offrent le plus large stock ; Materiel.net et Top Achat sont aussi des références pour les cartes graphiques.',
          '**Comparateur de prix :** Idealo.fr et Geizhals.eu sont les standards pour comparer les prix du neuf en France — vérifiez-y la source la moins chère actuellement.',
          '**Belgique et Suisse :** Alternate.be et Digitec.ch couvrent les marchés francophones voisins ; les prix et la disponibilité diffèrent légèrement de la France.',
          '**Occasion :** LeBonCoin est le plus grand marché français de l\'occasion pour les GPU — comparez-y le neuf et l\'occasion, car l\'occasion n\'est plus fiablement moins chère.',
          '**Disponibilité :** les cartes haut de gamme (RTX 4090, RTX 5090) sont par moments en rupture en 2026, et le RTX 5090 est souvent épuisé au prix catalogue ; attendez-vous à des prix fluctuants et vérifiez plusieurs revendeurs.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'À cause de la flambée de 2026, chaque chiffre de ce guide est un instantané mouvant. Ouvrez toujours l\'annonce actuelle du revendeur avant d\'acheter — les prix ont bougé d\'une semaine à l\'autre.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Parcourir les GPU sur Amazon US',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Parcourir les GPU sur Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Parcourir les GPU sur Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Parcourir les GPU sur Amazon.co.jp',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes à l\'achat d\'un GPU pour LLM locaux',
        items: [
          '**Acheter pour les tokens par seconde au lieu de la VRAM.** Une carte plus rapide qui ne fait pas tenir votre modèle est inutile. Confirmez d\'abord que le modèle tient en VRAM avec 2-4 Go de marge, puis comparez la vitesse dans cette gamme.',
          '**Acheter le RTX 3060 6 Go au lieu de la version 12 Go.** Ils partagent un nom mais pas un usage — la carte 6 Go plafonne aux modèles 3B. Confirmez toujours la variante 12 Go dans l\'annonce.',
          '**Supposer que le RTX 4060 Ti 16 Go est plus rapide que la version 8 Go.** Il ne l\'est pas — c\'est la même puce GPU avec plus de mémoire. Achetez-le pour la capacité (modèles 14B), pas pour la vitesse ; le RTX 5060 Ti 16 Go est l\'option 16 Go plus rapide.',
          '**S\'ancrer sur le tarif de lancement au lieu du prix actuel.** La flambée de 2026 signifie que les tarifs de lancement ne reflètent plus la réalité. Budgétez face au prix en direct du revendeur, et comparez le neuf à l\'occasion — l\'occasion n\'est plus fiablement moins chère.',
          '**Ignorer les exigences d\'alimentation.** Un RTX 5090 est donné pour 575 W, et NVIDIA indique 1000 W de puissance système requise et 850 W minimum dans son vérificateur d\'alimentation. Une carte qui s\'effondre en charge est pire qu\'une carte plus lente qui tourne de façon stable.',
          '**Choisir AMD sans budgéter le temps de configuration.** Le RX 6700 XT et le RX 7800 XT offrent un bon rapport qualité-prix, mais la configuration ROCm coûte des heures. Pesez ce temps face à l\'argent économisé par rapport à une carte NVIDIA.',
          '**Surdimensionner pour des modèles 7B.** Si les modèles 7B couvrent votre usage, un RTX 4090 est de l\'argent et de l\'énergie gaspillés. Adaptez la gamme au modèle, pas au budget dont vous disposez.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          'Sept erreurs courantes à l\'achat d\'un GPU pour LLM locaux : acheter pour la vitesse plutôt que la VRAM, confondre les RTX 3060 6 Go et 12 Go, attendre du RTX 4060 Ti 16 Go qu\'il soit plus rapide, s\'ancrer sur le tarif de lancement, ignorer les besoins d\'alimentation, sous-budgéter le temps de configuration AMD et surdimensionner pour des modèles 7B.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Spécifications NVIDIA GeForce RTX série 40](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — Capacité VRAM et consommation (TGP) officielles pour les RTX 4060 Ti, 4070 Ti Super, 4080 Super et 4090.',
          '[Spécifications NVIDIA GeForce RTX 5090](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — VRAM officielle de 32 Go GDDR7, 575 W de TGP, 1000 W de puissance système requise (configuration Ryzen 9 9950X) et 850 W minimum dans le vérificateur d\'alimentation pour le RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — prix demandés US les plus bas, neuf et occasion, au 11 octobre 2026 contre le 8 août 2026, utilisés pour la plupart des prix de ce guide (prix demandés, pas ventes conclues).',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — fourchettes de prix en boutique et d\'annonces vendues sur eBay pour la RTX 4090 et la RTX 5090 (mises à jour le 2026-10-15) ; les chiffres RTX 4090 et RTX 5090 de ce guide combinent ces fourchettes avec les prix demandés de BuySellRAM.',
          '[NVIDIA Newsroom — annonce de la GeForce RTX 5060 Ti (2025-04-15)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — tarif de lancement de 429 $ pour la RTX 5060 Ti 16 Go (8 Go : 379 $).',
          '[NVIDIA Newsroom — annonce de la GeForce RTX série 50 (2025-01-06)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — tarif de lancement de 749 $ pour la RTX 5070 Ti.',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — tarif de lancement contre prix de rue pour les RTX 5090, RTX 5070 Ti et RTX 5060 Ti 16 Go.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — information (non confirmée par NVIDIA) selon laquelle le renouvellement RTX 50 Super est repoussé à cause de l\'approvisionnement en mémoire.',
          '[Spécifications AMD Radeon](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Chiffres officiels de VRAM et de consommation pour les RX 7800 XT et RX 6700 XT.',
          '[Tableau llama.cpp : Llama 2 7B Q4_0 sur CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) — résultats llama-bench en tokens par seconde rapportés par des développeurs pour les RTX 3060, 4060 Ti (8 Go), 5060 Ti, 4070 Ti Super, 5070 Ti, 4080 Super, 4090 et 5090 ; les entrées viennent d\'utilisateurs et de versions différents.',
          '[Ollama : Llama 3.3 70B](https://ollama.com/library/llama3.3) — le téléchargement du modèle 70B est indiqué à 43 Go, base du chiffre de VRAM du 70B dans ce guide.',
          '[Meilleurs GPU pour LLM locaux 2026](/fr/local-llms/best-gpus-for-local-llms) — l\'ensemble plus large de benchmarks GPU sur ce site.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Quel est le GPU le moins cher pour l\'inférence de LLM en 2026 ?',
            a: 'Le NVIDIA RTX 3060 12 Go, à environ 320-400 $, est la carte neuve la moins chère de ce guide qui exécute bien l\'inférence de LLM locaux. Ses 12 Go de VRAM font tenir tout modèle 7B et la plupart des modèles 13B en quantification Q4, à environ 76 tokens par seconde en Llama 2 7B Q4_0 (valeur rapportée par des développeurs). Un RX 6700 XT peut être moins cher d\'occasion, mais les prix varient selon le vendeur et il exige une configuration AMD ROCm. Les prix du RTX 3060 neuf et d\'occasion sont désormais proches, comparez donc les deux.',
          },
          {
            q: 'Pourquoi les prix GPU sont-ils si élevés en 2026 ?',
            a: 'Aucune cause unique n\'est établie. Les facteurs cités incluent l\'offre de DRAM/GDDR7, la demande des centres de données IA et des changements de production rapportés, et les sources (InsiderLLM et BuySellRAM) divergent sur le poids de chacun ; selon BuySellRAM, la mémoire fait partie de l\'explication mais ne peut pas en être l\'essentiel. Les cartes se vendent jusqu\'à environ 2,5 fois au-dessus de leur tarif de lancement (RTX 5090 ; environ 1,35 à 1,45 fois pour les RTX 5060 Ti et RTX 5070 Ti) — un RTX 5090 lancé à 1 999 $ s\'affiche près de 4 500-4 900 $. L\'occasion n\'échappe plus à la hausse.',
          },
          {
            q: 'Quels sont les GPU requis pour exécuter un LLM local ?',
            a: 'En quantification Q4_K_M, comptez environ 0,6 Go de VRAM par milliard de paramètres plus 2-4 Go de surcharge. Cela donne 8-9 Go pour les modèles 7B, 11-13 Go pour le 14B, 19-22 Go pour le 33B et environ 43 Go pour le 70B (Llama 3.3 70B en Q4, selon Ollama). Une carte 12 Go couvre confortablement le 7B, une carte 16 Go couvre le 14B, et le 70B dépasse toute carte unique ici : un RTX 5090 32 Go ne s\'en approche qu\'avec une quantification agressive ou un déchargement partiel sur le CPU, sinon prévoyez une configuration bi-GPU.',
          },
          {
            q: 'Quelle carte graphique est la meilleure pour les LLM locaux ?',
            a: 'La meilleure carte graphique pour les LLM locaux est celle qui a assez de VRAM pour votre modèle visé à votre budget. Pour les modèles 7B, un RTX 3060 12 Go (env. 320-400 $) suffit. Pour les modèles 14B, un RTX 5060 Ti 16 Go (env. 618 $) ou un RTX 4060 Ti 16 Go d\'occasion est le choix de milieu de gamme. Pour les modèles 33B, il faut un RTX 4090 24 Go, et pour le 70B seul le RTX 5090 32 Go s\'en approche, avec une quantification agressive ou un déchargement partiel vers le CPU (le 70B en Q4 pèse environ 43 Go selon Ollama). Les cartes NVIDIA sont le choix le plus simple car CUDA fonctionne généralement sans configuration supplémentaire.',
          },
          {
            q: 'Le RTX 4060 Ti 16 Go est-il plus rapide que la version 8 Go ?',
            a: 'Non. Les RTX 4060 Ti 16 Go et 8 Go utilisent la même puce GPU, la vitesse d\'inférence par token est donc similaire — environ 64 tokens par seconde sur les modèles 7B (valeur du tableau llama.cpp pour la carte 8 Go, rapportée par des développeurs). La version 16 Go achète de la capacité, vous permettant d\'exécuter des modèles 14B qui ne tiennent pas en 8 Go. Achetez-la pour la VRAM, pas pour la vitesse.',
          },
          {
            q: 'Faut-il acheter NVIDIA ou AMD pour des LLM locaux ?',
            a: 'Achetez NVIDIA sauf si vous possédez déjà du matériel AMD ou trouvez une forte remise. NVIDIA CUDA fonctionne généralement avec Ollama, LM Studio et llama.cpp sans configuration supplémentaire. Les cartes AMD comme les RX 6700 XT et RX 7800 XT offrent une VRAM par euro compétitive, mais la durée de configuration de ROCm varie selon la distribution et le GPU ; consultez la liste des GPU pris en charge par AMD.',
          },
          {
            q: 'Un seul GPU peut-il exécuter un modèle 70B ?',
            a: 'Parmi les cartes de ce guide, seul le RTX 5090 32 Go s\'en approche, et uniquement avec une quantification agressive ou un déchargement partiel sur le CPU — un modèle 70B en Q4 pèse environ 43 Go selon Ollama. Un RTX 4090 24 Go ne peut pas faire tenir un modèle 70B en Q4 seul ; la solution courante est deux RTX 4090 pour une VRAM combinée, bien qu\'aux prix retenus dans ce guide cette paire coûte à peu près autant qu\'un seul RTX 5090.',
          },
          {
            q: 'Le RTX 5090 vaut-il la peine face au RTX 4090 pour des LLM locaux ?',
            a: 'Uniquement si vous avez spécifiquement besoin de plus de 24 Go sur une seule carte, par exemple pour vous rapprocher des modèles 70B. Le RTX 5090 a 32 Go de VRAM contre 24 Go pour le RTX 4090, ce qui est le facteur décisif. Pour les modèles 7B-33B, le RTX 4090 fait tenir les mêmes modèles ; aux prix retenus dans ce guide, le RTX 5090 coûte environ 1,8 à 2,4 fois un RTX 4090, ne le payez donc que si les 8 Go supplémentaires résolvent un vrai problème.',
          },
          {
            q: 'Quelle alimentation me faut-il pour ces GPU ?',
            a: 'Adaptez l\'alimentation à la gamme : une unité de 550 W convient au RTX 3060, 650-750 W aux RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super et RTX 5070 Ti, 850 W au RTX 4090, et pour le RTX 5090 (575 W de TGP) NVIDIA indique 1000 W de puissance système requise (configuration Ryzen 9 9950X) et 850 W minimum dans son vérificateur d\'alimentation. Des alimentations sous-dimensionnées causent de l\'instabilité en charge. Suivez les recommandations du fabricant de la carte et de l\'alimentation ; ceci n\'est pas un conseil de sécurité électrique.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Articles liés',
        items: [
          '[Vérifiez les besoins complets en VRAM pour chaque taille de modèle](/fr/local-llms/how-much-vram-local-llm) — la méthode complète de VRAM par taille de modèle derrière la formule rapide de ce guide.',
          '[Comparez plus de 15 GPU avec des benchmarks LLM locaux publiés](/fr/local-llms/best-gpus-for-local-llms) — le jeu de benchmarks GPU élargi, incluant des cartes plus anciennes et serveur au-delà de ces dix.',
          '[Découvrez quels modèles tournent sur un RTX 3060 12 Go budget](/fr/local-llms/best-budget-gpus-local-llm) — les vitesses modèle par modèle de la gamme budget, y compris la distinction 6 Go contre 12 Go.',
          '[Comparez le RTX 5090 et le RTX 4090 face à face](/fr/local-llms/rtx-5090-vs-rtx-4090-local-llm) — quand la montée vers le RTX 5090 vaut la peine et quand le RTX 4090 suffit.',
          '[Comprenez comment la quantification Q4_K_M fixe le coût VRAM](/fr/local-llms/llm-quantization-explained) — pourquoi Q4_K_M est la valeur par défaut et comment la quantification change le calcul de VRAM.',
          '[Meilleur GPU à moins de 1 000 $ pour l\'inférence LLM locale ?](/fr/prompt-bites/best-gpu-under-1000-local-llm) — la classe 24 Go : RTX 4090 d\'occasion contre RTX 4080 SUPER neuve.',
          '[RTX 4060 vs RTX 3060 12 Go : laquelle est meilleure pour les LLM locaux ?](/fr/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — pourquoi plus de VRAM l\'emporte sur une génération plus récente pour cette charge de travail.',
          '[Meilleur GPU Intel Arc pour les LLM locaux ?](/fr/prompt-bites/best-intel-arc-gpu-local-llm) — l\'Arc B580 comme alternative moins chère, et les compromis logiciels qui l\'accompagnent.',
          '[Meilleure configuration RTX 4090 pour les modèles 70B ?](/fr/prompt-bites/best-rtx-4090-setup-70b-models) — ce qu\'il faut réellement pour faire tourner un modèle 70B sur la carte haut de gamme de ce guide.',
          '[Meilleur LLM local pour un MacBook Air sans eGPU ?](/fr/prompt-bites/best-local-llm-macbook-air-no-egpu) — pourquoi une eGPU ne peut pas remplacer les GPU de ce guide sur Apple Silicon.',
          '[Meilleur PC portable Windows pour les LLM locaux à moins de 1 500 $ ?](/fr/prompt-bites/best-windows-laptop-local-llm-under-1500) — l\'équivalent en GPU mobile des paliers de bureau de ce guide.',
          '[Quel matériel faut-il pour affiner un modèle 7B en local ?](/fr/prompt-bites/fine-tuning-7b-model-locally-hardware) — lesquels de ces GPU fonctionnent aussi pour le fine-tuning QLoRA, pas seulement pour l\'inférence.',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'ローカルLLM向けグラフィックカードの選び方：GPU購入ガイド2026',
    seoTitle: 'ローカルLLM向けGPU比較2026：低予算〜RTX 5090',
    intro:
      'ローカルLLM向けのGPUアドバイスの多くは、見るべきでない数値を最適化しています。トークン毎秒の速度はモデルが答える速さを決めますが、VRAMはそもそもモデルが動くかどうかを決めます。そして収まらないモデルは、収まるモデルよりも無限に遅いのです。本ガイドは、購入を実際に左右する数値、つまりVRAM容量・推論速度・消費電力・価格で、4つの価格帯にわたり10枚のコンシューマー向けグラフィックカードを比較します。価格について1点注意があります。GPU価格は2026年に急騰し（要因としてメモリ供給とAIデータセンター需要が挙げられていますが、情報源によって寄与の見方は分かれます）、RTX 5090は現在、メーカー希望小売価格の約2.5倍で掲示されています。そのため本記事の価格の大半は、出典にリンクしたBuySellRAMのデータにある米国の最低掲示価格であり、RTX 4090とRTX 5090の価格帯にはInsiderLLMの落札実績データも使っています。購入前に最新価格を確認してください。',
    metaDescription:
      'ローカルLLMに最適なグラフィックカードは？10枚のGPUをVRAM・速度・消費電力・2026年の価格で比較。最安の1枚からRTX 5090まで、モデルサイズ別のGPU要件も解説。',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ja.webp',
    twitterDescription:
      'RTX 3060、RX 6700 XT、RTX 4060 Ti 16GB、RTX 5060 Ti 16GB、RX 7800 XT、RTX 4070 Ti Super、RTX 5070 Ti、RTX 4080 Super、RTX 4090、RTX 5090 — 10枚のグラフィックカード、4つの予算、ひとつの判断基準：VRAMで選ぶ。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      'ローカルLLMを動かすために特化してGPUを選び、予算帯と対象モデルサイズで判断する購入者向け。量子化とVRAMが制約であることには慣れているが、現行の具体的なGPU製品には詳しくないことを前提とします。',
    readTime: '14分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      'ローカルllm gpu おすすめ 2026',
      'gpu 購入ガイド ローカルllm',
      'rtx 3060 rtx 4090 比較 ローカルllm',
      'ローカルllm vram どれくらい',
      'ローカルllm 安い gpu',
      'ローカルllm グラフィックカード おすすめ',
      'ローカルllm gpu 要件',
    ],
    leadAnswerBlock:
      '**ローカルLLMにとって最良のグラフィックカードは、最速のカードではなく、VRAMが自分のモデルに合うカードです。RTX 3060 12 GBはあらゆる7Bモデルを動かし、16 GBカード（RTX 5060 Ti、RTX 4060 Ti、RTX 5070 Ti）は14Bモデルを扱い、RTX 4090 24 GBは33Bモデルを扱い、本ガイドのカードの中で70Bモデルに近づけるのはRTX 5090 32 GBだけで、それも積極的な量子化かCPUへの部分オフロードが前提です（Q4の70BはOllamaによると約43 GBです）。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にローカルLLMを動かすのに最適なグラフィックカードはどれですか？',
        answer:
          'まずVRAM、次に速度で選びます。RTX 3060 12 GB（約$320～400）は低予算の選択肢で、あらゆる7Bモデルを動かします。中位帯の選択肢は14Bモデル向けの16 GBカードで、RTX 5060 Ti 16 GB（新品で約$620）か、中古のRTX 4060 Ti 16 GB（約$650）です。RTX 4090 24 GBは33Bモデルを動かし、本ガイドのカードの中で70Bに近づけるのはRTX 5090 32 GB（約$4,500-4,900）だけで、それも積極的な量子化かCPUへの部分オフロードが前提です（Q4の70BはOllamaによると約43 GBです）。なお、2026年の価格はメーカー希望小売価格を大きく上回っています。',
        bullets: [
          '低予算：RTX 3060 12 GB、新品・中古とも約$320～400 — あらゆる7Bモデルを約76 tok/s（Llama 2 7B Q4_0、開発者報告値）で動かす',
          '中位：RTX 5060 Ti 16 GB、新品で約$620（[メーカー希望小売価格$429](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)） — 14Bモデルを余裕をもって動かす',
          'エンスージアスト：RTX 5090 32 GB、約$4,500-4,900 — ここで唯一の32 GBカード；70B（Q4で約43 GB）には積極的な量子化かオフロードが必要',
          '2026年のGPU価格はメーカー希望小売価格の最大約2.5倍（RTX 5090。RTX 5060 TiとRTX 5070 Tiは約1.35～1.45倍） — 買う前に新品と中古を比べる',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '編集部の選択', anchor: '#editors-choice' },
      { label: 'GPU比較表', anchor: '#comparison-table' },
      { label: 'どのGPUを買うべきか？', anchor: '#which-gpu' },
      { label: '低予算帯（$320～400）', anchor: '#budget-tier' },
      { label: '中位帯（$620～790）', anchor: '#mid-tier' },
      { label: '上位帯（$900～1,200）', anchor: '#high-tier' },
      { label: 'エンスージアスト帯（$2,000以上）', anchor: '#enthusiast-tier' },
      { label: 'GPU要件：VRAMはどれくらい必要か？', anchor: '#vram-needs' },
      { label: 'なぜGPU価格は2026年に急騰したか', anchor: '#price-surge' },
      { label: '判断フローチャート', anchor: '#decision-flowchart' },
      { label: '地域別価格と購入先', anchor: '#where-to-buy' },
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
          '**VRAMが決定的な制約です。** VRAMに収まらないモデルは読み込みに失敗するか、システムRAMにあふれて対話用途には遅すぎる状態になります。対象モデルにVRAMが合う価格帯を選び、その帯の中で速度を最適化してください。',
          '**価格は2026年に急騰しました。** GPU価格はメーカー希望小売価格の最大約2.5倍（RTX 5090。RTX 5060 TiとRTX 5070 Tiは約1.35～1.45倍）になっています。要因としてDRAM/GDDR7の供給、AIデータセンター需要、報じられている生産計画の変更が挙げられていますが、各要因の寄与については情報源の見解が分かれます。RTX 5090は発売価格の$1,999ではなく約$4,500-4,900で掲示されており、価格は8月から10月にかけてさらに上昇しました。本記事の価格はスナップショットとして扱ってください（大半は米国の掲示価格で、RTX 4090とRTX 5090の価格帯には落札実績も使っています）。買う前に新品と中古を比べてください。',
          '**低予算の選択：NVIDIA RTX 3060 12 GB**（約$320～400、新品と中古の価格は現在ほぼ同じ） — あらゆる7Bモデル（Llama 2 7B Q4_0で約76 tok/s、開発者報告値）とほとんどの13BモデルをQ4で動かします。',
          '**中位の選択：NVIDIA RTX 5060 Ti 16 GB**（新品で約$618、中古の掲示価格は約$649） — 16 GBのVRAMはコンテキストの余裕を残して14Bモデルをこなし、448 GB/sのメモリ帯域（約91 tok/s、開発者報告値）は、旧世代のRTX 4060 Ti 16 GBの288 GB/s（8 GB版で約64 tok/s、開発者報告値）より高速です。中古では両者はほぼ同価格（約$650）で、RTX 4060 Ti 16 GBの新品最安値約$790はBuySellRAMによるとわずか3件の出品に基づいています。',
          '**上位の選択：NVIDIA RTX 4080 Super 16 GB**（約$1,200） — ここで最も高価な16 GBカードです（約148 tok/s、開発者報告値）。RTX 4070 Ti Super（約$900）とRTX 5070 Ti（約$1,008）はより安く、コストパフォーマンスで優れる可能性があります。RTX 5070 Tiは同じ開発者測定でより高速です（約177 tok/s）。',
          '**エンスージアストの選択：NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — RTX 4090（新品で約$2,000以上、中古で約$2,575-3,010）は33Bモデルを動かし、本ガイドのカードの中で70Bに近づけるのはRTX 5090（約$4,500-4,900）だけで、それも積極的な量子化かCPUへの部分オフロードが前提です（Q4の70BはOllamaによると約43 GBです）。',
          '**AMDは選択肢になりますが手間が増えます。** RX 6700 XT（12 GB）とRX 7800 XT（16 GB）は競争力のある価格でVRAMを提供しますが、ROCmのセットアップ時間はディストリビューションやカードによって異なります。',
          '**消費電力は価格帯に比例します。** RTX 3060は170 W、RTX 5090は575 WのTGPで、[NVIDIA](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/)は必要システム電力1000 W（Ryzen 9 9950X構成）、PSUチェッカーの最小値850 Wと記載しています。電源はカードと一緒に予算に入れてください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**低予算帯（$320～400）：** RTX 3060 12 GBまたはRX 6700 XT 12 GB — 7Bとほとんどの13Bモデルを動かす。',
          '**中位帯（$620～790）：** RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GBまたはRX 7800 XT 16 GB — 14Bモデルを余裕をもって動かす。',
          '**上位帯（$900～1,200）：** RTX 4080 Super、RTX 5070 TiまたはRTX 4070 Ti Super（いずれも16 GB） — 高速な14B推論、軽めの22B作業。',
          '**エンスージアスト帯（$2,000以上）：** RTX 4090 24 GBまたはRTX 5090 32 GB — 33Bモデル、70Bは5090でも積極的な量子化かCPUへの部分オフロードが必要。',
          '**Q4_K_MでのVRAMの目安：** パラメータ10億あたり約0.6 GB、加えてコンテキストとツールに2～4 GB。',
          '**消費電力の範囲：** RTX 3060 170 W、RTX 4060 Ti 165 W、RTX 5060 Ti 180 W、RTX 4070 Ti Super 285 W、RTX 5070 Ti 300 W、RTX 4080 Super 320 W、RTX 4090 450 W、RTX 5090 575 W。',
          '**2026年の価格の実情：** 価格はメーカー希望小売価格の最大約2.5倍（RTX 5090。RTX 5060 TiとRTX 5070 Tiは約1.35～1.45倍）になっており、原因については情報源の見解が分かれます。中古カードが新品より確実に安いとは限らなくなったため、両方を比べてください。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '編集部の選択（プレミアム16 GB）：RTX 4080 Super',
        highlight: true,
        content:
          '**プレミアムな16 GBカードを求め、$1,000を超える予算を確保できる購入者には、NVIDIA RTX 4080 Super 16 GBが編集部の選択です。これはコストパフォーマンスではなく、プレミアムな16 GB構成のための選択です。** 16 GBのVRAMはコンテキストの余裕を残してあらゆる14Bモデルをこなし、Llama 2 7B Q4_0で約148 tok/s（開発者報告値）、約$1,200で、ここで最も高価な16 GBカードです。RTX 4070 Ti Super（約$900、約132 tok/s）とRTX 5070 Ti（約$1,008、約177 tok/s）はそれぞれ約$300、約$190安く、コストパフォーマンスで優れる可能性があります。RTX 5070 Tiは同じ開発者測定でより高速です。予算が$700以下に固定されているなら、RTX 5060 Ti 16 GBがコストパフォーマンスの選択です。33Bや70Bモデルが特に必要な場合に限り、さらに支出してください。',
        callouts: [
          {
            type: 'note',
            text: 'この編集部の選択はプレミアムな16 GBカードの選択であり、価格対性能のランキングではありません。RTX 4070 Ti SuperとRTX 5070 Tiはより安く、コストパフォーマンスで優れる可能性があります。PromptQuorumはいかなるアフィリエイトプログラムにも参加しておらず、以下のリンクにはアフィリエイトタグが付いていません。これらは手数料を生まない単なる参照リンクです。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'AmazonでRTX 4080 Superの価格を確認',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'NeweggでRTX 4080 Superの価格を確認',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026年のローカルLLMで10枚のGPUを比較',
        content:
          'VRAMと消費電力の数値はメーカー仕様です。「開発者報告値」と記した速度は、出典にリンクしたllama.cppスコアボードの開発者報告のllama-bench結果（Llama 2 7B Q4_0、CUDA）です。エントリーは異なるユーザーとビルドによるもので、本ガイドのために再測定したものではありません。RTX 4060 Ti 16 GBの数値は8 GB版の結果（同じGPUダイ、メモリ帯域288 GB/s）です。RX 6700 XTとRX 7800 XTにはそこに結果がないため、速度はメモリ帯域から測定結果に対して換算した大まかな推定値（推定）です。価格の大半は、リンクしたBuySellRAMのデータにある米国の最安掲示価格（米ドル）です。RTX 4090とRTX 5090の価格帯は、これにInsiderLLMの小売価格・落札実績の価格帯（2026-10-15更新）を組み合わせています。価格はメーカー希望小売価格の最大約2.5倍（RTX 5090。RTX 5060 TiとRTX 5070 Tiは約1.35～1.45倍）になっているため、購入前に再確認してください（本ページの更新日も参照）。リンク先のバジェットGPUページでは一部のカードに以前の推定値を使用しており（例：RTX 3060 12 GBの中古は約$290～330）、2つのページで数値がわずかに異なる場合があります。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルLLMでは、GPUのVRAMが動かせるモデルを決め、トークン毎秒が答える速さを決めます — まず前者で選び、次に後者を最適化してください。',
          },
          {
            type: 'plain-terms',
            text: 'VRAMを机の広さ、モデルをその上に置くものと考えてください。速いGPUは机を早く片付けますが、モデルがそもそも机に乗らなければ、速度は問題になりません。まず机が十分に大きい価格帯を選んでください。',
          },
        ],
        columns: ['GPU', 'VRAM', '速度（7B Q4）', '消費電力', '価格（米国、2026）', '最適な用途'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            '速度（7B Q4）': '約76 tok/s（開発者報告値）',
            '消費電力': '170 W',
            '価格（米国、2026）': '$320～400（新品）/ $320～350（中古）',
            '最適な用途': '低予算の入口 — あらゆる7Bモデル',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            '速度（7B Q4）': '約65～80 tok/s（推定）',
            '消費電力': '230 W',
            '価格（米国、2026）': '出品者により異なる — 最新を確認',
            '最適な用途': 'AMD 12 GB、ROCm設定を許容',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約64 tok/s（8 GB版、開発者報告値）',
            '消費電力': '165 W',
            '価格（米国、2026）': '約$790（新品）/ 約$650（中古）',
            '最適な用途': '中位帯 — 14Bモデル、低消費電力',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約91 tok/s（開発者報告値）',
            '消費電力': '180 W',
            '価格（米国、2026）': '$618（新品）/ $649（中古）',
            '最適な用途': '中位帯 — 14B、最新世代',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約90～115 tok/s（推定）',
            '消費電力': '263 W',
            '価格（米国、2026）': 'AMDの価格：最新の出品を確認',
            '最適な用途': 'AMDで16 GB、ROCmのセットアップを許容',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約132 tok/s（開発者報告値）',
            '消費電力': '285 W',
            '価格（米国、2026）': '$900（新品）/ $920（中古）',
            '最適な用途': '高速な14B、低めの消費電力',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約177 tok/s（開発者報告値）',
            '消費電力': '300 W',
            '価格（米国、2026）': '$1,008（新品）/ $1,050（中古）',
            '最適な用途': '高速な14B、お得な16 GB',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約148 tok/s（開発者報告値）',
            '消費電力': '320 W',
            '価格（米国、2026）': '$1,200（新品）/ $1,149（中古）',
            '最適な用途': '編集部の選択 — プレミアム16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            '速度（7B Q4）': '約186 tok/s（開発者報告値）',
            '消費電力': '450 W',
            '価格（米国、2026）': '約$2,000以上（新品）/ $2,575-3,010（中古）',
            '最適な用途': '33Bモデル、70B用のデュアルGPU',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            '速度（7B Q4）': '約290 tok/s（開発者報告値）',
            '消費電力': '575 W',
            '価格（米国、2026）': '$4,500-4,921（新品）/ $5,880-6,350（中古）',
            '最適な用途': '70B（積極的な量子化かオフロードが前提）',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ja.webp',
        imageCaption:
          'ローカルLLM向けの10枚のコンシューマー向けグラフィックカードを、VRAM、7B Q4推論速度、消費電力、現在の米国価格で4つの予算帯にわたり比較。VRAMは12 GB（RTX 3060）から32 GB（RTX 5090）まで上がります。速度を最適化する前に、必要なモデルサイズで選んでください。',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'どのGPUを買うべきか？',
        content:
          '**対象とする最大のモデルが価格帯を決め、その帯の中では予算がNVIDIAかAMDかを決めます。** 自分の状況に合う行を見つけてください。',
        columns: ['あなたの状況', 'これを買う'],
        rows: [
          { 'あなたの状況': '予算は$400未満で7Bモデルを動かしたい', 'これを買う': 'RTX 3060 12 GB' },
          { 'あなたの状況': '安い12 GBのAMDカードを見つけられ、セットアップ作業を許容する', 'これを買う': 'RX 6700 XT（価格を確認）' },
          { 'あなたの状況': '電力予算が厳しい中で14Bモデルを動かしたい', 'これを買う': 'RTX 5060 Ti 16 GB（または中古のRTX 4060 Ti 16 GB）' },
          { 'あなたの状況': '14Bを高速に動かし数年もつカードがほしい', 'これを買う': 'RTX 5070 TiまたはRTX 4070 Ti Super 16 GB' },
          { 'あなたの状況': 'プレミアムな16 GBカードがほしく価格は二の次', 'これを買う': 'RTX 4080 Super 16 GB（5070 Tiはより安い）' },
          { 'あなたの状況': '33Bモデルが必要、または将来のデュアルGPU 70B構成を計画している', 'これを買う': 'RTX 4090 24 GB' },
          { 'あなたの状況': '70Bモデル向けの1枚のカードが必要（積極的な量子化か部分オフロード）', 'これを買う': 'RTX 5090 32 GB' },
          { 'あなたの状況': '迷っていて最も無難な最初のGPUがほしい', 'これを買う': 'RTX 3060 12 GB — 物足りなくなったら後で買い替える' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '低予算帯（$320～400）：RTX 3060 12 GBとRX 6700 XT',
        content:
          '**低予算帯はあらゆる7Bモデルとほとんどの13Bモデルを動かします。そして初めてローカルLLMを使う多くの人にとって、それが必要なすべての能力です。** RTX 3060 12 GBが推奨の選択肢で、セットアップの手間を許容できるならRX 6700 XTがAMD側の代替です。この帯の価格は2026年を通じて上昇し、中古のRTX 3060は今や新品とほぼ同じ価格です — 両方を比べてください。',
        items: [
          '**RTX 3060 12 GB（新品で約$320～400、中古で約$320～350）：** 12 GB VRAM、170 W、Llama 2 7B Q4_0で約76 tok/s（開発者報告値）。Ministral 3 8B、Qwen3 8B、DeepSeek-R1 7B、ほとんどの13Bモデルを動かします。買うべきは12 GB版です — 3Bモデルに限られる6 GB版は避けてください。新品在庫は限られ、中古にしてもあまり安くならないため、返品期間のある安いほうを買ってください。',
          '**RX 6700 XT（中古、価格は出品者により異なる）：** 12 GB VRAM、230 W、7Bモデルで約65～80 tok/s（メモリ帯域からの大まかな推定で、実測ではありません）。最新の出品を確認してください。AMD ROCmに依存するためセットアップ時間が加わります。',
          '**この帯を買う理由：** 最も低い導入コスト、RTX 3060の低消費電力、そして一般的なチャット・コーディング支援・要約をカバーする7B～13Bモデルに十分なVRAM。',
          '**この帯を避ける理由：** 14B以上のモデルがほしいとすでに分かっているなら、低予算帯は数週間で物足りなくなります — 代わりに中位帯から始めてください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'RTX 3060は必ず12 GB版を買ってください。6 GB版のRTX 3060は出品では似て見えますが3Bモデルしか収まりません — パラメータ数が半分というのは、使えるアシスタントとおもちゃの違いです。',
          },
          {
            type: 'warning',
            text: 'RX 6700 XTは安価な入口になり得ますが、LinuxでのROCmセットアップにかかる時間はディストリビューションやカードによって異なるため、まずAMDの対応GPU一覧を確認してください。RTX 3060に対して節約できる金額が小さいなら、NVIDIAのカードを買ってください。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'AmazonでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'AmazonでRX 6700 XTの価格を確認',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '中位帯（$620～790）：RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GB、RX 7800 XT',
        content:
          '**中位帯はひとつの理由のために存在します。16 GBのVRAMは、12 GBカードでは実用的なコンテキストとともに収められない14Bモデルをこなします。** 14Bクラスのモデルが対象なら、これがそれらを適切に動かす最も安い帯です。RTX 5060 Ti 16 GBは最新世代の選択肢で、本ガイドで用いた提示価格ではNVIDIAで最も低価格の16 GB選択肢でもあります。RTX 4060 Ti 16 GBは中古ではほぼ同価格（約$650）、新品ではより高価です（約$790、BuySellRAMのわずか3件の出品に基づく）。',
        items: [
          '**RTX 5060 Ti 16 GB（新品で約$618 / 中古の掲示価格で約$649、メーカー希望小売価格$429）：** 16 GB GDDR7、180 W、メモリ帯域448 GB/s。本ガイドでは計測していません。llama.cppスコアボードではLlama 2 7B Q4_0で約91 tok/sです（開発者報告値）。Qwen3 14Bクラスのモデルを余裕をもって動かします。価格は2026年にメーカー希望小売価格を約44%上回りました。',
          '**RTX 4060 Ti 16 GB（新品で約$790 / 中古で約$650、提示価格）：** 16 GB VRAM、165 W、7Bモデルで約64 tok/s（8 GB版のllama.cppスコアボード値、開発者報告値）。8 GB版RTX 4060 Tiと同じGPUダイとメモリ帯域288 GB/sのため、トークンあたりの速度は同等です — 16 GB版は速度ではなく容量を買うものです。中古ではRTX 5060 Ti 16 GBとほぼ同額（約$650対約$649）で、新品最安値約$790はBuySellRAMのわずか3件の出品に基づいています。',
          '**RX 7800 XT（AMDの価格：最新の出品を確認。BuySellRAMのデータはNVIDIAのみ対象）：** 16 GB VRAM、263 W。本ガイドでは計測していません。7B Q4で約90～115 tok/sを見込み（メモリ帯域からの大まかな推定で、実測ではありません）、AMD ROCmのセットアップが引き換えになります。',
          '**この帯を買う理由：** 14Bモデルがほしい、低消費電力がほしい（RTX 4060 Ti）、または可能な限り安く16 GBがほしい。',
          '**この帯を避ける理由：** 7Bモデルで足りるなら低予算帯が$200～300安く、高速な14B推論がほしいなら上位帯のほうが明確に速いです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GBは8 GB版に対する容量のアップグレードであり、速度のアップグレードではありません — トークン毎秒の増加を期待してではなく、14Bモデルを収める必要があるから買ってください。RTX 5060 Ti 16 GBのほうが高速な選択肢で、本ガイドで用いた提示価格では新品でより安価、中古ではほぼ同額です。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'AmazonでRTX 5060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'AmazonでRTX 4060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'AmazonでRX 7800 XTの価格を確認',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: '上位帯（$900～1,200）：RTX 4080 Super、RTX 5070 Ti、RTX 4070 Ti Super',
        content:
          '**上位帯は16 GBのVRAMを保ちつつ、7B～14Bモデルを瞬時に感じさせ22Bモデルを実用的にする速度を加えます。** 3枚とも中位帯と同じモデルを収めます — 容量ではなくトークン毎秒に対して支払っているのです。2026年の急騰はこの帯と中位帯の差を広げました。',
        items: [
          '**RTX 4080 Super 16 GB（新品で約$1,200 / 中古で約$1,149）：** 16 GB VRAM、320 W、Llama 2 7B Q4_0で約148 tok/s（開発者報告値）。プレミアム16 GBとしての編集部の選択 — ここで最も高価なカードで、下の2枚に対して約$190～300の上乗せであり、同じ測定ではRTX 5070 Tiより低速です。',
          '**RTX 5070 Ti 16 GB（新品で約$1,008 / 中古の掲示価格で約$1,050、[メーカー希望小売価格$749](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)）：** 16 GB GDDR7、300 W、メモリ帯域896 GB/s。本ガイドでは計測していません。llama.cppスコアボードではLlama 2 7B Q4_0で約177 tok/sです（開発者報告値）。16 GBなら24B Q4モデルを余裕をもって動かせます。',
          '**RTX 4070 Ti Super 16 GB（新品で約$900 / 中古で約$920）：** 16 GB VRAM、285 W、約132 tok/s（開発者報告値）。この帯で最も安い新品カードで、3枚の中で消費電力が最も低いです。',
          '**この帯を買う理由：** 14Bモデルを常に動かし瞬時の応答がほしい、または軽めの22B作業をして余裕がほしい。',
          '**この帯を避ける理由：** 33Bや70Bモデルが必要なら、どの16 GBカードもそれらを収められません — ここで使いすぎる代わりにエンスージアスト帯へ移ってください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'この帯では、開発者測定でRTX 5070 Tiが最速（約177 tok/s）、RTX 4070 Ti Superが新品で最安、RTX 4080 Superが最も高価です。RTX 4080 Superを特に望まない限り、安い2枚のどちらかを選んでください。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'AmazonでRTX 4080 Superの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'AmazonでRTX 5070 Tiの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'AmazonでRTX 4070 Ti Superの価格を確認',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'エンスージアスト帯（$2,000以上）：RTX 4090とRTX 5090',
        content:
          '**エンスージアスト帯は22Bを超えるモデルを動かせる唯一の帯であり、本ガイドのカードの中で70Bモデルに近づけるのはRTX 5090 32 GBだけです。Q4の70BはOllamaによると約43 GBのため、それでも積極的な量子化かCPUへの部分オフロードが必要です。** ここでは速度ではなくVRAM容量のために買ってください。速度は副産物です。2026年の急騰はRTX 5090を最も激しく直撃したため、価格は週ごとに動きます。',
        items: [
          '**RTX 4090 24 GB（新品で約$2,000以上 / 中古で約$2,575-3,010）：** 24 GB VRAM、450 W、Llama 2 7B Q4_0で約186 tok/s（開発者報告値）。33Bモデルを余裕をもって動かします。新品のRTX 4090は在庫が薄く、新品の最低価格は古い可能性があります — 出品は最大約$3,800まで幅があります。',
          '**RTX 5090 32 GB（新品で約$4,500-4,921 / 中古で約$5,880-6,350、メーカー希望小売価格$1,999）：** 32 GB GDDR7 VRAM、575 W、Llama 2 7B Q4_0で約290 tok/s（開発者報告値）。32 GBの容量が目玉です — 本ガイドで唯一の32 GBカードですが、Q4の70BはOllamaによると約43 GBのため、積極的な量子化かCPUへの部分オフロードが依然として必要です。掲示価格は8月から10月にかけて約64%上昇し、中古の出品は新品を上回っています。',
          '**この帯を買う理由：** 33Bや70Bモデルが必要、バッチ推論を行う、または何年も買い替え不要のカードがほしい。',
          '**この帯を避ける理由：** 7B～14Bモデルには過剰です — 上位帯はそれらのサイズで、価格と消費電力の半分以下で瞬時の応答を提供します。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NVIDIAはRTX 5090を575 WのTGP、必要システム電力1000 W（Ryzen 9 9950X構成）、PSUチェッカーの最小値850 Wと記載しています（出典のRTX 5090ページ参照）。容量不足の電源は負荷時に電圧が不安定になる可能性があるため、電源は購入に組み込んで予算化してください。これは電気安全に関する助言ではありません。カードメーカーの電源・ケーブルに関する指示に従ってください。',
          },
          {
            type: 'note',
            text: '観測された中古価格ではRTX 4090 1枚あたり約$2,575～3,010（InsiderLLMの落札実績、2026-10-15更新）のため、2枚揃えると約$5,150～6,020となりRTX 5090 1枚（新品約$4,500～4,900）より高額で、1枚のカードのほうが70B構成として簡単です。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'AmazonでRTX 4090の価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'AmazonでRTX 5090の価格を確認',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'ローカルLLMのGPU要件：VRAMはどれくらい必要か？',
        content:
          '**Q4_K_M量子化では、モデルはパラメータ10億あたり約0.6 GBのVRAMに加え、コンテキストとツールのオーバーヘッドに2～4 GBを必要とします。** この式は4つの価格帯に直接対応します。',
        items: [
          '**7Bモデル — 8～9 GB：** どの帯にも収まります。12 GBカードなら余裕があります。',
          '**13～14Bモデル — 11～13 GB：** コンテキストとツールを数えると実際には16 GBが必要です。中位帯以上（RTX 5060 Ti 16 GB以上）。',
          '**22Bモデル — 14～16 GB：** 16 GBカードでは厳しく、上位帯以上で余裕があります。',
          '**33Bモデル — 19～22 GB：** 24 GBカードが必要です。RTX 4090の領域です。',
          '**70Bモデル — Q4で約43 GB（Llama 3.3 70B、Ollamaによる）：** ここにある単体カードでは収まりません。RTX 5090 32 GBは積極的な量子化かCPUへの部分オフロードでようやく近づく程度で、そうでなければデュアルGPU構成が必要です。1枚の24 GBカードでは70BモデルをQ4で収められません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'コンテキスト長は隠れたVRAMコストです — 長いプロンプトや大きなコンテキストウィンドウは、モデルの重みに加えてVRAMを消費します。常に2～4 GBの余裕を残してください。完全な方法は関連記事にあるVRAM要件ガイドを参照してください。',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'なぜGPU価格は2026年に急騰したか',
        content:
          '**GPU価格は2026年に急騰し、コンシューマー向けカードを当初のメーカー希望小売価格の最大約2.5倍（RTX 5090。RTX 5060 TiとRTX 5070 Tiは約1.35～1.45倍）に押し上げました。原因については情報源の見解が分かれます。** これは購入の計算を変えるため、発売価格ではなくこれを前提に計画してください。',
        items: [
          '**単一の原因は確定していません。** 要因としてDRAM/GDDR7の供給、AIデータセンター需要、報じられている生産計画の変更が挙げられていますが、各要因の寄与については情報源の見解が分かれます。[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)と[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)はどちらもメモリを要因の一部としています。BuySellRAMは、メモリが大部分を占めることはあり得ず、そのデータではメモリを供給・割り当て・需要から切り分けられないとしています。',
          '**RTX 5090が最も明確な例です：** 発売価格は$1,999でしたが、BuySellRAMのデータでの最低掲示価格は約$4,921 — 約2.5倍で、8月から64%上昇しています。',
          '**小型のカードも、上昇幅は異なるものの上がりました。** RTX 5060 Ti 16 GBはメーカー希望小売価格$429を約44%、RTX 5070 Tiは$749を約35%上回って掲示されています。どちらも16 GBを搭載しています。',
          '**中古が自動的に安いとは限らなくなりました。** BuySellRAMの掲示価格データでは、中古のRTX 5090、RTX 4090、RTX 4070 Ti Super、RTX 5060 Ti、RTX 5070 Tiの出品は新品と同等かそれ以上で、中古のRTX 3060 12 GBは8月から約31%上昇しました。両方を比べ、返品に対応する販売者を優先してください。',
          '**更新版には期待しないでください。** NVIDIAのRTX 50 Superカードはメモリ供給をめぐり無期限に延期されたと報じられています（NVIDIAは確認していません）。**判断：** 待てるなら価格が下がるか見守り、待てないなら対象モデルに合う最小のカードを買ってください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年のGPU価格はメーカー希望小売価格の最大約2.5倍（RTX 5090。RTX 5060 TiとRTX 5070 Tiは約1.35～1.45倍）で、要因としてDRAM/GDDR7の供給とAIデータセンター需要が挙げられていますが寄与は情報源により分かれるため、ローカルLLMの購入者は新品と中古の価格を比べ、対象モデルに合う最小のカードを買うべきです。',
          },
          {
            type: 'plain-terms',
            text: 'カードが良くなったわけではなく、高くなっただけで、そのうちメモリが占める分と需要や供給割り当てが占める分は情報源により見解が分かれます。価格が下がるまで、メーカー希望小売価格は過去の数字として扱い、新品と中古を比べ、モデルが実際に必要とする以上のVRAMにお金を払わないでください。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '判断フローチャート：4つの質問でGPUを選ぶ',
        content:
          '**4つの質問を順に答えると、ほとんどの購入者は1枚のカードに行き着きます。**',
        items: [
          '**1. 動かしたい最大のモデルは何ですか？** 7B：低予算帯。14B：中位帯（16 GBカード）。22B：上位帯。33B：RTX 4090。70B：RTX 5090またはデュアルGPU。',
          '**2. 動かせない予算の上限はいくらですか？** 約$400未満：RTX 3060 12 GB。約$700未満：RTX 5060 Ti 16 GBまたは中古のRTX 4060 Ti 16 GB。約$900～1,200：RTX 4070 Ti Super、RTX 5070 TiまたはRTX 4080 Super。$2,000以上：RTX 4090またはRTX 5090。',
          '**3. NVIDIAかAMDか？** すでにAMDのハードウェアを持っているか、RX 7800 XTの大幅な値引きを見つけた場合を除き、NVIDIAを選んでください — CUDAはROCmに比べてセットアップ時間を節約できる場合があります。',
          '**4. 電源に余裕がありますか？** 中位帯を超えるカードは285～575 Wを必要とします。エンスージアスト帯のハードウェアを買う前に、電源とケースの冷却を確認してください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルLLM向けのGPUは、最初に最大のモデルサイズ、次に予算の上限、次にNVIDIA対AMD、最後に電源の余裕を答えることで選んでください。',
          },
          {
            type: 'plain-terms',
            text: '実際に動かしたい最大のモデルから始め、それに価格帯を決めさせてください。価格・ブランド・電源がカードに対応できるかを見るのは、その後だけです。逆の順序で進めるのが、使いすぎたり、自分のモデルを動かせないカードを買ったりする原因です。',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-ja.webp',
        imageCaption:
          'ローカルLLM向けGPUを選ぶための4つの質問による判断フロー：対象とする最大のモデルサイズが価格帯を決め、予算の上限が選択を絞り、NVIDIA対AMDがブランドを決め、電源の余裕がエンスージアスト帯の選択を確定します。',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '地域別価格と購入先',
        content:
          '**GPU価格は地域によって異なります — 本ガイドの価格は米国の掲示価格（米ドル）であり、日本の価格は為替や消費税の影響で異なります。** 以下のリンクは単なる製品検索リンクで、アフィリエイトタグは付いておらず、手数料を生みません。',
        items: [
          '**日本：** Amazon.co.jpとドスパラ・パソコン工房・TSUKUMOがグラフィックカードの主な購入先です。',
          '**価格比較：** Kakaku.com（価格.com）は日本で新品価格を比較する標準であり、現在最も安い購入先をそこで確認してください。',
          '**自作系ショップ：** アーク（ark）やArkなどの自作PC専門店は、ハイエンドGPUの在庫がオンライン小売より早く入ることがあります。',
          '**中古：** メルカリやヤフオク！は日本のGPUの主な中古市場です — ただし2026年は中古が新品より確実に安いとは限らないため、新品の価格と必ず比べてください。',
          '**在庫状況：** ハイエンドカード（RTX 4090、RTX 5090）は2026年には時折品薄で、価格は変動し、為替の影響も受けます。RTX 5090は定価では売り切れていることも多いため、複数の小売店を確認してください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年の急騰のため、本ガイドのすべての価格は変動の速いスナップショットです。購入前に必ず現在の小売店の出品を開いてください — 価格は週ごとに動いています。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon USでGPUを探す',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon.deでGPUを探す',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon.frでGPUを探す',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon.co.jpでGPUを探す',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ローカルLLM向けGPU購入でよくある間違い',
        items: [
          '**VRAMではなくトークン毎秒で買う。** モデルを収められない速いカードは役に立ちません。まずモデルが2～4 GBの余裕とともにVRAMに収まることを確認し、その帯の中で速度を比較してください。',
          '**12 GB版ではなく6 GB版のRTX 3060を買う。** 名前は共通でも用途は別です — 6 GBカードは3Bモデルが上限です。出品では必ず12 GB版であることを確認してください。',
          '**RTX 4060 Ti 16 GBが8 GB版より速いと思い込む。** 速くありません — メモリが多いだけの同じGPUダイです。速度ではなく容量（14Bモデル）のために買ってください。より高速な16 GBカードはRTX 5060 Ti 16 GBです。',
          '**現在価格ではなくメーカー希望小売価格を基準にする。** 2026年の急騰により、発売価格はもはや実態を反映しません。小売店のリアルタイム価格で予算を組み、新品と中古を比べてください — 中古が確実に安いとは限りません。',
          '**電源要件を無視する。** RTX 5090は575 Wとされ、NVIDIAは必要システム電力1000 WとPSUチェッカーの最小値850 Wを記載しています。負荷時に電圧が落ちるカードは、安定して動く遅いカードより劣ります。',
          '**セットアップ時間を見込まずにAMDを選ぶ。** RX 6700 XTとRX 7800 XTはコストパフォーマンスが良いですが、ROCmのセットアップに数時間かかります。その時間をNVIDIAカードに対して節約できる金額と比べてください。',
          '**7Bモデルのために過剰投資する。** 7Bモデルで用途が足りるなら、RTX 4090はお金と電力の無駄です。たまたまある予算ではなく、モデルに価格帯を合わせてください。',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          'ローカルLLM向けGPU購入でよくある7つの間違い：VRAMより速度で買う、6 GBと12 GBのRTX 3060を混同する、16 GBのRTX 4060 Tiが速いと期待する、メーカー希望小売価格を基準にする、電源要件を無視する、AMDのセットアップ時間を過小評価する、7Bモデルのために過剰投資する。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[NVIDIA GeForce RTX 40シリーズ 仕様](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — RTX 4060 Ti、4070 Ti Super、4080 Super、4090の公式VRAM容量と消費電力（TGP）。',
          '[NVIDIA GeForce RTX 5090 仕様](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — RTX 5090の公式32 GB GDDR7 VRAM、575 W TGP、必要システム電力1000 W（Ryzen 9 9950X構成）、PSUチェッカーの最小値850 W。',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — 2026年10月11日と8月8日時点の米国の新品・中古の最低掲示価格。本ガイドの大半の価格に使用（実際の成約価格ではなく掲示価格）。',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — RTX 4090とRTX 5090の小売価格とeBay落札実績の価格帯（2026-10-15更新）。本ガイドのRTX 4090とRTX 5090の数値は、この価格帯とBuySellRAMの掲示価格を組み合わせています。',
          '[NVIDIA Newsroom — GeForce RTX 5060 Ti 発表（2025-04-15）](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — RTX 5060 Ti 16 GBの発売時価格は$429（8 GBは$379）。',
          '[NVIDIA Newsroom — GeForce RTX 50シリーズ発表（2025-01-06）](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — RTX 5070 Tiの発売時価格は$749。',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — RTX 5090、RTX 5070 Ti、RTX 5060 Ti 16 GBのメーカー希望小売価格と実売価格の比較。',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — RTX 50 Superの更新版がメモリ供給のため延期されたとの報道（NVIDIAは未確認）。',
          '[AMD Radeon 仕様](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XTとRX 6700 XTの公式VRAMと消費電力。',
          '[llama.cppスコアボード：CUDAでのLlama 2 7B Q4_0](https://github.com/ggml-org/llama.cpp/discussions/15013) — RTX 3060、4060 Ti（8 GB）、5060 Ti、4070 Ti Super、5070 Ti、4080 Super、4090、5090の開発者報告によるllama-benchのトークン毎秒結果。エントリーは異なるユーザーとビルドによる。',
          '[Ollama：Llama 3.3 70B](https://ollama.com/library/llama3.3) — 70Bモデルのダウンロードは43 GBと記載されており、本ガイドの70B VRAM数値の根拠。',
          '[ローカルLLM向けベストGPU 2026](/ja/local-llms/best-gpus-for-local-llms) — 本サイトのより広範なGPUベンチマーク集。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '2026年にLLM推論で最も安いGPUは何ですか？',
            a: 'NVIDIA RTX 3060 12 GB（約$320～400）が、このガイドの中でローカルLLM推論をうまく動かせる最も低価格の新品カードです。12 GBのVRAMはあらゆる7Bモデルとほとんどの13BモデルをQ4量子化で、Llama 2 7B Q4_0で約76トークン毎秒（開発者報告値）で動かします。RX 6700 XTは中古市場でより安いことがありますが、価格は出品者により異なり、AMD ROCmのセットアップが必要です。RTX 3060の新品と中古の価格は現在近いため、両方を比べてください。',
          },
          {
            q: 'なぜ2026年のGPU価格はこれほど高いのですか？',
            a: '単一の原因は確定していません。要因としてDRAM/GDDR7の供給、AIデータセンター需要、報じられている生産計画の変更が挙げられていますが、各要因の寄与についてはInsiderLLMとBuySellRAMの見解が分かれ、BuySellRAMはメモリが要因の一部であっても大部分にはなり得ないとしています。カードは当初のメーカー希望小売価格の最大約2.5倍（RTX 5090。RTX 5060 TiとRTX 5070 Tiは約1.35～1.45倍）で売られています — RTX 5090は$1,999で発売されましたが、約$4,500-4,900で掲示されています。中古カードももはや値上がりを免れていません。',
          },
          {
            q: 'ローカルLLMを動かすためのGPU要件は何ですか？',
            a: 'Q4_K_M量子化では、パラメータ10億あたり約0.6 GBのVRAMに2～4 GBのオーバーヘッドを加えて見積もってください。これは7Bモデルで8～9 GB、14Bで11～13 GB、33Bで19～22 GB、70Bで約43 GB（Llama 3.3 70BのQ4、Ollamaによる）を意味します。12 GBカードは7Bを余裕でカバーし、16 GBカードは14Bをカバーしますが、70Bはここにある単体カードでは収まらず、RTX 5090 32 GBは積極的な量子化かCPUへの部分オフロードでようやく近づく程度で、そうでなければデュアルGPU構成が必要です。',
          },
          {
            q: 'ローカルLLMに最適なグラフィックカードはどれですか？',
            a: 'ローカルLLMに最適なグラフィックカードは、予算の範囲で対象モデルに十分なVRAMを持つカードです。7Bモデルには RTX 3060 12 GB（約$320～400）で足ります。14Bモデルの中位帯の選択肢は、RTX 5060 Ti 16 GB（約$618）か中古のRTX 4060 Ti 16 GBです。33BモデルにはRTX 4090 24 GBが、70Bで近づけるのはRTX 5090 32 GBだけで、積極的な量子化かCPUへの部分オフロードが前提です（Q4の70BはOllamaによると約43 GB）。CUDAは通常、追加設定なしで動くため、NVIDIAカードが最も手間の少ない選択です。',
          },
          {
            q: 'RTX 4060 Ti 16 GBは8 GB版より速いですか？',
            a: 'いいえ。RTX 4060 Ti 16 GBと8 GB版は同じGPUダイを使うため、トークンあたりの推論速度は同等です — 7Bモデルで約64トークン毎秒です（8 GB版のllama.cppスコアボード値、開発者報告値）。16 GB版は容量を買うもので、8 GBに収まらない14Bモデルを動かせるようにします。速度ではなくVRAMのために買ってください。',
          },
          {
            q: 'ローカルLLMにはNVIDIAとAMDのどちらを買うべきですか？',
            a: 'すでにAMDのハードウェアを持っているか、大幅な値引きを見つけた場合を除き、NVIDIAを買ってください。NVIDIA CUDAはOllama、LM Studio、llama.cppで通常、追加設定なしで動作します。RX 6700 XTやRX 7800 XTといったAMDカードは競争力のある価格でVRAMを提供しますが、ROCmのセットアップにかかる時間はディストリビューションやGPUによって異なります。AMDの対応GPU一覧を確認してください。',
          },
          {
            q: '1枚のGPUで70Bモデルを動かせますか？',
            a: 'このガイドのカードの中で近づけるのはRTX 5090 32 GBだけで、しかも積極的な量子化またはCPUへの部分的なオフロードが前提です — Q4の70BはOllamaによると約43 GBです。24 GBのRTX 4090は70BモデルをQ4で単独では収められません。一般的な解決策はVRAMを合算するためのRTX 4090 2枚ですが、本ガイドで用いた価格ではこのペアはRTX 5090 1枚とほぼ同額です。',
          },
          {
            q: 'ローカルLLMでRTX 5090はRTX 4090に対して価値がありますか？',
            a: '1枚のカードで24 GBを超えるVRAMが特に必要な場合、たとえば70Bモデルに近づけたい場合に限ります。RTX 5090はRTX 4090の24 GBに対して32 GBのVRAMを持ち、これが決め手です。7B～33BモデルではRTX 4090も同じモデルを収めます。本ガイドで用いた価格ではRTX 5090はRTX 4090の約1.8～2.4倍の価格のため、追加の8 GBが実際の問題を解決する場合にのみ支払ってください。',
          },
          {
            q: 'これらのGPUにはどの電源が必要ですか？',
            a: '電源を価格帯に合わせてください：550 WのユニットはRTX 3060に、650～750 WはRTX 4060 Ti、RTX 5060 Ti、RTX 4070 Ti Super、RTX 5070 Tiに、850 WはRTX 4090に適し、RTX 5090（575 W TGP）についてはNVIDIAが必要システム電力1000 W（Ryzen 9 9950X構成）とPSUチェッカーの最小値850 Wを記載しています。容量不足の電源は負荷時に不安定を引き起こします。カードと電源のメーカーの指示に従ってください。これは電気安全に関する助言ではありません。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[各モデルサイズの完全なVRAM要件を確認する](/ja/local-llms/how-much-vram-local-llm) — 本ガイドの簡易式の背後にある、モデルサイズ別VRAMの完全な手法。',
          '[公表されているローカルLLMベンチマークで15枚以上のGPUを比較する](/ja/local-llms/best-gpus-for-local-llms) — この10枚を超え、より古いカードやサーバーカードも含む広範なGPUベンチマークセット。',
          '[低予算のRTX 3060 12 GBでどのモデルが動くか見る](/ja/local-llms/best-budget-gpus-local-llm) — 6 GB対12 GBの違いを含む、低予算帯のモデル別速度。',
          '[RTX 5090とRTX 4090を直接比較する](/ja/local-llms/rtx-5090-vs-rtx-4090-local-llm) — RTX 5090へのアップグレードに価値があるとき、RTX 4090で足りるとき。',
          '[Q4_K_M量子化がVRAMコストをどう決めるか理解する](/ja/local-llms/llm-quantization-explained) — なぜQ4_K_Mが既定なのか、量子化がVRAMの計算をどう変えるか。',
          '[ローカルLLM推論に最適な1,000ドル以下のGPUは？](/ja/prompt-bites/best-gpu-under-1000-local-llm) — 24GBクラス：中古RTX 4090 対 新品RTX 4080 SUPER。',
          '[RTX 4060 対 RTX 3060 12GB：ローカルLLMに適しているのはどちら？](/ja/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — この用途では新世代よりVRAM容量が勝る理由。',
          '[ローカルLLMに最適なIntel Arc GPUは？](/ja/prompt-bites/best-intel-arc-gpu-local-llm) — 安価な代替としてのArc B580と、それに伴うソフトウェア面のトレードオフ。',
          '[70Bモデル向けの最適なRTX 4090セットアップは？](/ja/prompt-bites/best-rtx-4090-setup-70b-models) — 本ガイドの最上位カードで70Bモデルを実際に動かすために必要なこと。',
          '[eGPUなしのMacBook Airに最適なローカルLLMは？](/ja/prompt-bites/best-local-llm-macbook-air-no-egpu) — Apple SiliconではeGPUが本ガイドのGPUの代わりにならない理由。',
          '[1,500ドル以下でローカルLLMに最適なWindowsノートPCは？](/ja/prompt-bites/best-windows-laptop-local-llm-under-1500) — 本ガイドのデスクトップ向け階層に相当するモバイルGPU版。',
          '[7Bモデルをローカルでファインチューニングするために必要なハードウェアは？](/ja/prompt-bites/fine-tuning-7b-model-locally-hardware) — これらのGPUのうち、推論だけでなくQLoRAファインチューニングにも使えるのはどれか。',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: '本地大模型显卡推荐：显卡选购指南 2026',
    seoTitle: '本地大模型显卡推荐 2026：从入门到 RTX 5090',
    intro:
      '大多数关于本地大模型显卡的建议都在优化错误的数字。每秒 token 的速度决定模型回答的快慢，但显存决定模型能否运行——一个装不下的模型，比一个装得下的模型慢无数倍。本指南在四个价位档次中比较十款消费级显卡，依据真正决定购买的数字：显存容量、推理速度、功耗和价格。关于价格有一点提醒：2026 年显卡价格大涨（已报道的因素包括内存供应和 AI 数据中心需求，各来源对各因素占比看法不一）——RTX 5090 目前的标价约为建议零售价的 2.5 倍——因此本文大多数价格是“来源”中链接的 BuySellRAM 数据里的美国最低挂牌价，RTX 4090 和 RTX 5090 的区间还参考了 InsiderLLM 的成交记录数据；购买前请确认当前价格。',
    metaDescription:
      '本地大模型用什么显卡？十款显卡按显存、速度、功耗和 2026 年美国挂牌价格对比：从入门款到 RTX 5090，并列出各模型规模的显卡要求。',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-zh.webp',
    twitterDescription:
      'RTX 3060、RX 6700 XT、RTX 4060 Ti 16GB、RTX 5060 Ti 16GB、RX 7800 XT、RTX 4070 Ti Super、RTX 5070 Ti、RTX 4080 Super、RTX 4090、RTX 5090——十款显卡，四个预算，一条原则：按显存买。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      '专门为运行本地大模型而选购显卡的买家，按价位档次和目标模型规模做决定。假定读者熟悉量化和显存作为约束的概念，但不熟悉具体的当前显卡型号。',
    readTime: '阅读约14分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      '本地大模型显卡推荐 2026',
      '本地大模型显卡选购指南',
      'rtx 3060 与 rtx 4090 本地大模型',
      '本地大模型需要多少显存',
      '便宜的本地大模型显卡',
      '本地大模型显卡推荐',
      '本地大模型显卡要求',
    ],
    leadAnswerBlock:
      '**本地大模型（开源大模型）最佳显卡是显存与你的模型相匹配的那一款，而不是最快的那一款。RTX 3060 12 GB 能运行任何 7B 模型，16 GB 显卡（RTX 5060 Ti、RTX 4060 Ti 或 RTX 5070 Ti）能处理 14B 模型，RTX 4090 24 GB 能处理 33B 模型，在本指南的显卡中，只有 RTX 5090 32 GB 接近能运行 70B 模型，而且只能靠激进量化或部分 CPU 卸载（70B 以 Q4 运行据 Ollama 约为 43 GB）。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年运行本地大模型最好的显卡是哪款？',
        answer:
          '先按显存买，再看速度。RTX 3060 12 GB（约 $320-400）是预算之选，能运行任何 7B 模型。16 GB 显卡是面向 14B 模型的中端之选——全新 RTX 5060 Ti 16 GB（约 $620）或二手 RTX 4060 Ti 16 GB（约 $650）。RTX 4090 24 GB 能运行 33B 模型，在本指南的显卡中，只有 RTX 5090 32 GB（约 $4,500-4,900）接近能运行 70B，而且只能靠激进量化或部分 CPU 卸载（70B 以 Q4 运行据 Ollama 约为 43 GB）。注意 2026 年价格远高于建议零售价。',
        bullets: [
          '预算：RTX 3060 12 GB，全新或二手约 $320-400，以约 76 tok/s（Llama 2 7B Q4_0，开发者报告）运行任何 7B 模型',
          '中端：RTX 5060 Ti 16 GB，全新约 $620（[建议零售价 $429](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)），运行 14B 模型有余量',
          '发烧级：RTX 5090 32 GB，约 $4,500-4,900，此处唯一的 32 GB 显卡；70B（Q4 约 43 GB）需要激进量化或卸载',
          '2026 年显卡价格为建议零售价的最高约 2.5 倍（RTX 5090；RTX 5060 Ti 和 RTX 5070 Ti 约 1.35 到 1.45 倍）——购买前先比较全新和二手',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点总结', anchor: '#key-takeaways' },
      { label: '速览事实', anchor: '#quick-facts' },
      { label: '编辑推荐', anchor: '#editors-choice' },
      { label: '显卡对比表', anchor: '#comparison-table' },
      { label: '你该买哪款显卡？', anchor: '#which-gpu' },
      { label: '预算档（$320-400）', anchor: '#budget-tier' },
      { label: '中端档（$620-790）', anchor: '#mid-tier' },
      { label: '高端档（$900-1,200）', anchor: '#high-tier' },
      { label: '发烧档（$2,000 起）', anchor: '#enthusiast-tier' },
      { label: '显卡要求：需要多少显存？', anchor: '#vram-needs' },
      { label: '2026 年显卡为何涨价', anchor: '#price-surge' },
      { label: '决策流程图', anchor: '#decision-flowchart' },
      { label: '地区价格与购买渠道', anchor: '#where-to-buy' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**显存是决定性约束。** 装不进显存的模型要么加载失败，要么溢出到系统内存，慢到无法交互使用。先选显存匹配目标模型的档次，再在该档次内优化速度。',
          '**2026 年价格大涨。** 显卡价格最高约为建议零售价的 2.5 倍（RTX 5090；RTX 5060 Ti 和 RTX 5070 Ti 约 1.35 到 1.45 倍）。已报道的因素包括 DRAM/GDDR7 供应、AI 数据中心需求和据报道的生产变化，各来源对各因素占比看法不一。RTX 5090 标价约 $4,500-4,900，而非其 $1,999 的发布价，且 8 月到 10 月间价格再度上涨。把本文价格当作快照（多数为美国挂牌价，RTX 4090 和 RTX 5090 的区间还参考了成交记录），购买前先比较全新和二手。',
          '**预算之选：NVIDIA RTX 3060 12 GB**（约 $320-400，全新和二手如今价格相近）——运行任何 7B 模型（Llama 2 7B Q4_0 下约 76 tok/s，开发者报告），并以 Q4 运行大多数 13B 模型。',
          '**中端之选：NVIDIA RTX 5060 Ti 16 GB**（全新约 $618，二手挂牌约 $649）——16 GB 显存可容纳 14B 模型并留有上下文余量，其 448 GB/s 的显存带宽（约 91 tok/s，开发者报告）高于旧款 RTX 4060 Ti 16 GB 的 288 GB/s（8 GB 版约 64 tok/s，开发者报告）。二手价两者相近（约 $650）；RTX 4060 Ti 16 GB 全新约 $790 的最低价据 BuySellRAM 仅来自三条挂牌。',
          '**高端之选：NVIDIA RTX 4080 Super 16 GB**（约 $1,200）——这里标价最高的 16 GB 显卡（约 148 tok/s，开发者报告）。RTX 4070 Ti Super（约 $900）和 RTX 5070 Ti（约 $1,008）更便宜，性价比可能更好；在同一批开发者测试中 RTX 5070 Ti 更快（约 177 tok/s）。',
          '**发烧之选：NVIDIA RTX 4090 24 GB / RTX 5090 32 GB**——RTX 4090（全新约 $2,000 起，二手约 $2,575-3,010）能运行 33B 模型；在本指南的显卡中，只有 RTX 5090（约 $4,500-4,900）接近能运行 70B，而且只能靠激进量化或部分 CPU 卸载（70B 以 Q4 运行据 Ollama 约为 43 GB）。',
          '**AMD 可行但门槛更高。** RX 6700 XT（12 GB）和 RX 7800 XT（16 GB）价格有竞争力，但 ROCm 配置所需时间因发行版和显卡而异。',
          '**功耗随档次上升。** RTX 3060 功耗 170 W；RTX 5090 的 TGP 为 575 W，[NVIDIA 标注](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/)所需系统功率为 1000 W（Ryzen 9 9950X 配置），其电源检查器的最低值为 850 W。把电源和显卡一起纳入预算。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览事实',
        items: [
          '**预算档（$320-400）：** RTX 3060 12 GB 或 RX 6700 XT 12 GB——运行 7B 和大多数 13B 模型。',
          '**中端档（$620-790）：** RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GB 或 RX 7800 XT 16 GB——轻松运行 14B 模型。',
          '**高端档（$900-1,200）：** RTX 4080 Super、RTX 5070 Ti 或 RTX 4070 Ti Super，均为 16 GB——快速 14B 推理，轻量 22B 工作。',
          '**发烧档（$2,000 起）：** RTX 4090 24 GB 或 RTX 5090 32 GB——33B 模型；70B 即使在 5090 上也需要激进量化或部分 CPU 卸载。',
          '**Q4_K_M 下的显存经验法则：** 每十亿参数约 0.6 GB，外加 2-4 GB 用于上下文和工具。',
          '**功耗范围：** RTX 3060 170 W、RTX 4060 Ti 165 W、RTX 5060 Ti 180 W、RTX 4070 Ti Super 285 W、RTX 5070 Ti 300 W、RTX 4080 Super 320 W、RTX 4090 450 W、RTX 5090 575 W。',
          '**2026 年价格实况：** 价格最高约为建议零售价的 2.5 倍（RTX 5090；RTX 5060 Ti 和 RTX 5070 Ti 约 1.35 到 1.45 倍），各来源对成因看法不一；二手卡已不一定比全新便宜，请两者都比较。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '编辑推荐（高端 16 GB）：RTX 4080 Super',
        highlight: true,
        content:
          '**对于想要高端 16 GB 显卡、且预算能超过 $1,000 的买家，NVIDIA RTX 4080 Super 16 GB 是我们的编辑推荐——这是面向高端 16 GB 配置的选择，而非性价比之选。** 它的 16 GB 显存能容纳每一款 14B 模型并留有上下文余量，在 Llama 2 7B Q4_0 下约 148 tok/s（开发者报告），售价约 $1,200，是这里标价最高的 16 GB 显卡。RTX 4070 Ti Super（约 $900，约 132 tok/s）和 RTX 5070 Ti（约 $1,008，约 177 tok/s）分别便宜约 $300 和约 $190，性价比可能更好；在同一批开发者测试中 RTX 5070 Ti 更快。如果你的预算固定在 $700 以下，RTX 5060 Ti 16 GB 是性价比之选。只有在确实需要 33B 或 70B 模型时才花更多钱。',
        callouts: [
          {
            type: 'note',
            text: '本编辑推荐是高端 16 GB 之选，而非价格与能力之比的排名：RTX 4070 Ti Super 和 RTX 5070 Ti 更便宜，性价比可能更好。PromptQuorum 未加入任何联盟营销计划，下方链接不带任何联盟标签——它们只是不产生佣金的普通参考链接。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: '在 Amazon 查看 RTX 4080 Super 价格',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: '在 Newegg 查看 RTX 4080 Super 价格',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026 年十款显卡运行本地大模型的对比',
        content:
          '显存和功耗数字为厂商规格。标注“开发者报告”的速度是开发者报告的 llama-bench 结果（Llama 2 7B Q4_0，CUDA），取自“来源”中链接的 llama.cpp 排行榜；条目来自不同用户和不同构建版本，我们未重新测量。RTX 4060 Ti 16 GB 的数字是 8 GB 版本的结果（相同的 GPU 核心和 288 GB/s 显存带宽）。RX 6700 XT 和 RX 7800 XT 在该榜单中没有结果，其速度是根据显存带宽对照实测结果换算的粗略估算（估算）。多数价格为所链接 BuySellRAM 数据中的美国最低挂牌价；RTX 4090 和 RTX 5090 的区间将其与 InsiderLLM 的零售价和成交记录区间（2026-10-15 更新）相结合。价格最高约为建议零售价的 2.5 倍（RTX 5090；RTX 5060 Ti 和 RTX 5070 Ti 约 1.35 到 1.45 倍），购买前请重新核对（参见本页更新日期）。链接的入门级显卡页面对部分显卡沿用了此前的估算（例如 RTX 3060 12 GB 二手约 $290-330），因此两页的数字可能略有差异。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '对本地大模型而言，显卡的显存决定你能运行哪些模型，其每秒 token 决定它们回答的快慢——先按前者买，再优化后者。',
          },
          {
            type: 'plain-terms',
            text: '把显存想成桌面的大小，把模型想成你放在桌上的东西。更快的显卡能更快清空桌面，但如果模型根本放不上桌，速度就无从谈起。先选桌面足够大的档次。',
          },
        ],
        columns: ['显卡', '显存', '速度（7B Q4）', '功耗', '价格（美国，2026）', '最适合'],
        rows: [
          {
            '显卡': 'RTX 3060 12 GB',
            '显存': '12 GB',
            '速度（7B Q4）': '约 76 tok/s（开发者报告）',
            '功耗': '170 W',
            '价格（美国，2026）': '全新 $320-400 / 二手 $320-350',
            '最适合': '预算入门——任何 7B 模型',
          },
          {
            '显卡': 'RX 6700 XT',
            '显存': '12 GB',
            '速度（7B Q4）': '约 65-80 tok/s（估算）',
            '功耗': '230 W',
            '价格（美国，2026）': '因卖家而异——请查实时价',
            '最适合': 'AMD 12 GB，接受 ROCm 配置',
          },
          {
            '显卡': 'RTX 4060 Ti 16 GB',
            '显存': '16 GB',
            '速度（7B Q4）': '约 64 tok/s（8 GB 版，开发者报告）',
            '功耗': '165 W',
            '价格（美国，2026）': '全新约 $790 / 二手约 $650',
            '最适合': '中端档——14B 模型，低功耗',
          },
          {
            '显卡': 'RTX 5060 Ti 16 GB',
            '显存': '16 GB',
            '速度（7B Q4）': '约 91 tok/s（开发者报告）',
            '功耗': '180 W',
            '价格（美国，2026）': '全新 $618 / 二手 $649',
            '最适合': '中端档——14B，当代架构',
          },
          {
            '显卡': 'RX 7800 XT',
            '显存': '16 GB',
            '速度（7B Q4）': '约 90-115 tok/s（估算）',
            '功耗': '263 W',
            '价格（美国，2026）': 'AMD 价格：请查看最新挂牌',
            '最适合': 'AMD 平台的 16 GB，接受 ROCm 配置',
          },
          {
            '显卡': 'RTX 4070 Ti Super',
            '显存': '16 GB',
            '速度（7B Q4）': '约 132 tok/s（开发者报告）',
            '功耗': '285 W',
            '价格（美国，2026）': '全新 $900 / 二手 $920',
            '最适合': '快速 14B，较低功耗',
          },
          {
            '显卡': 'RTX 5070 Ti',
            '显存': '16 GB',
            '速度（7B Q4）': '约 177 tok/s（开发者报告）',
            '功耗': '300 W',
            '价格（美国，2026）': '全新 $1,008 / 二手 $1,050',
            '最适合': '快速 14B，高性价比 16 GB',
          },
          {
            '显卡': 'RTX 4080 Super',
            '显存': '16 GB',
            '速度（7B Q4）': '约 148 tok/s（开发者报告）',
            '功耗': '320 W',
            '价格（美国，2026）': '全新 $1,200 / 二手 $1,149',
            '最适合': '编辑推荐——高端 16 GB',
          },
          {
            '显卡': 'RTX 4090',
            '显存': '24 GB',
            '速度（7B Q4）': '约 186 tok/s（开发者报告）',
            '功耗': '450 W',
            '价格（美国，2026）': '全新约 $2,000 起 / 二手 $2,575-3,010',
            '最适合': '33B 模型，双卡 70B',
          },
          {
            '显卡': 'RTX 5090',
            '显存': '32 GB',
            '速度（7B Q4）': '约 290 tok/s（开发者报告）',
            '功耗': '575 W',
            '价格（美国，2026）': '全新 $4,500-4,921 / 二手 $5,880-6,350',
            '最适合': '70B（仅限激进量化或卸载）',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-zh.webp',
        imageCaption:
          '十款消费级显卡在四个预算档次中按显存、7B Q4 推理速度、功耗和当前美国价格对比本地大模型表现。显存从 12 GB（RTX 3060）升至 32 GB（RTX 5090）；优化速度之前，先按你需要的模型规模购买。',
      },
      whichGpu: {
        id: 'which-gpu',
        title: '你该买哪款显卡？',
        content:
          '**你最大的目标模型决定档次；你的预算决定该档次内选 NVIDIA 还是 AMD。** 找到与你情况相符的那一行。',
        columns: ['你的情况', '买这款'],
        rows: [
          { '你的情况': '我预算不到 $400，想运行 7B 模型', '买这款': 'RTX 3060 12 GB' },
          { '你的情况': '我能找到便宜的 12 GB AMD 显卡，并接受配置工作', '买这款': 'RX 6700 XT（查看实时价格）' },
          { '你的情况': '我想在功耗预算紧张的情况下运行 14B 模型', '买这款': 'RTX 5060 Ti 16 GB（或二手 RTX 4060 Ti 16 GB）' },
          { '你的情况': '我想要一款能快速运行 14B 并用上数年的显卡', '买这款': 'RTX 5070 Ti 或 RTX 4070 Ti Super 16 GB' },
          { '你的情况': '我想要高端 16 GB 显卡，价格其次', '买这款': 'RTX 4080 Super 16 GB（5070 Ti 更便宜）' },
          { '你的情况': '我需要 33B 模型，或计划将来做双卡 70B 构建', '买这款': 'RTX 4090 24 GB' },
          { '你的情况': '我需要一张用于 70B 模型的单卡（激进量化或部分卸载）', '买这款': 'RTX 5090 32 GB' },
          { '你的情况': '我拿不定主意，想要最稳妥的第一张显卡', '买这款': 'RTX 3060 12 GB——不够用以后再升级' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '预算档（$320-400）：RTX 3060 12 GB 和 RX 6700 XT',
        content:
          '**预算档能运行任何 7B 模型和大多数 13B 模型——对大多数首次使用本地大模型的用户来说，这就是他们需要的全部能力。** RTX 3060 12 GB 是推荐之选；如果你接受配置的摩擦，RX 6700 XT 是 AMD 一侧的替代。这一档次的价格在 2026 年持续上涨，二手 RTX 3060 如今与全新价格相近——两者都要比较。',
        items: [
          '**RTX 3060 12 GB（全新约 $320-400，二手约 $320-350）：** 12 GB 显存，170 W，Llama 2 7B Q4_0 下约 76 tok/s（开发者报告）。能运行 Ministral 3 8B、Qwen3 8B、DeepSeek-R1 7B 和大多数 13B 模型。要买的是 12 GB 版本——避开 6 GB 版本，它只能运行 3B 模型。全新货源有限，买二手也省不了多少，因此哪个便宜就买哪个，并选有退货期的卖家。',
          '**RX 6700 XT（二手，价格因卖家而异）：** 12 GB 显存，230 W，7B 模型约 65-80 tok/s（根据显存带宽的粗略估算，非实测）。请查看实时挂牌，它依赖 AMD ROCm，会增加配置时间。',
          '**为何买这一档：** 入门成本最低，RTX 3060 功耗低，且有足够显存运行覆盖通用对话、编程辅助和摘要的 7B-13B 模型。',
          '**为何跳过这一档：** 如果你已经知道想要 14B 或更大的模型，预算档会在几周内让你受挫——不如直接从中端档开始。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '务必买 12 GB 版本的 RTX 3060。6 GB 版 RTX 3060 在商品页看起来相似，但只能容纳 3B 模型——参数量减半，就是可用助手和玩具之间的区别。',
          },
          {
            type: 'warning',
            text: 'RX 6700 XT 可能是低成本的入门选择，但 Linux 上 ROCm 的配置耗时因发行版和显卡而异，请先查看 AMD 的受支持 GPU 列表。如果相对 RTX 3060 省下的钱不多，就买 NVIDIA 显卡。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: '在 Amazon 查看 RTX 3060 12GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: '在 Amazon 查看 RX 6700 XT 价格',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '中端档（$620-790）：RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GB 和 RX 7800 XT',
        content:
          '**中端档存在的唯一理由是：16 GB 显存能容纳 12 GB 显卡无法在可用上下文下装下的 14B 模型。** 如果 14B 级别的模型是你的目标，这是能正确运行它们的最便宜档次。RTX 5060 Ti 16 GB 是当代架构之选，按本指南采用的挂牌价，它也是价格最低的 16 GB NVIDIA 选项；RTX 4060 Ti 16 GB 二手价相近（约 $650），全新更贵（约 $790，据 BuySellRAM 仅来自三条挂牌）。',
        items: [
          '**RTX 5060 Ti 16 GB（全新约 $618 / 二手挂牌约 $649，建议零售价 $429）：** 16 GB GDDR7，180 W，448 GB/s 显存带宽。本指南未对它做基准测试；llama.cpp 排行榜显示 Llama 2 7B Q4_0 下约 91 tok/s（开发者报告）。可轻松运行 Qwen3 14B 级别模型。2026 年价格比建议零售价高出约 44%。',
          '**RTX 4060 Ti 16 GB（全新约 $790 / 二手约 $650，挂牌价）：** 16 GB 显存，165 W，7B 模型约 64 tok/s（8 GB 版的 llama.cpp 排行榜数值，开发者报告）。它与 8 GB 版 RTX 4060 Ti 使用同一颗 GPU 核心和 288 GB/s 显存带宽，因此每 token 速度相近——16 GB 版本买的是容量，不是原始速度。二手价与 RTX 5060 Ti 16 GB 相近（约 $650 对约 $649）；全新约 $790 的最低价仅来自三条 BuySellRAM 挂牌。',
          '**RX 7800 XT（AMD 价格：请查看最新挂牌；BuySellRAM 数据仅涵盖 NVIDIA）：** 16 GB 显存，263 W。本指南未对它做基准测试；7B Q4 下预计约 90-115 tok/s（根据显存带宽的粗略估算，非实测），代价是 AMD ROCm 配置。',
          '**为何买这一档：** 你想要 14B 模型、想要低功耗（RTX 4060 Ti），或想以尽可能低的价格获得 16 GB。',
          '**为何跳过这一档：** 如果 7B 模型够用，预算档能省 $200-300；如果你想要快速的 14B 推理，高端档明显更快。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GB 相对 8 GB 版本是容量升级，不是速度升级——买它是因为你需要装下 14B 模型，而不是因为你期待更高的每秒 token。RTX 5060 Ti 16 GB 是更快的选择，且按本指南采用的挂牌价，全新价格更低，二手价格相近。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: '在 Amazon 查看 RTX 5060 Ti 16GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: '在 Amazon 查看 RTX 4060 Ti 16GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: '在 Amazon 查看 RX 7800 XT 价格',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: '高端档（$900-1,200）：RTX 4080 Super、RTX 5070 Ti 和 RTX 4070 Ti Super',
        content:
          '**高端档保持 16 GB 显存，但加上了让 7B-14B 模型感觉即时、让 22B 模型可用的速度。** 三款显卡装下的模型与中端档相同——你为每秒 token 付费，而非容量。2026 年涨价拉开了这一档与中端档的差距。',
        items: [
          '**RTX 4080 Super 16 GB（全新约 $1,200 / 二手约 $1,149）：** 16 GB 显存，320 W，Llama 2 7B Q4_0 下约 148 tok/s（开发者报告）。作为高端 16 GB 之选的编辑推荐——这里标价最高的显卡，比下面两款贵约 $190-300，且在同一批测试中比 RTX 5070 Ti 慢。',
          '**RTX 5070 Ti 16 GB（全新约 $1,008 / 二手挂牌约 $1,050，[建议零售价 $749](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)）：** 16 GB GDDR7，300 W，896 GB/s 显存带宽。本指南未对它做基准测试；llama.cpp 排行榜显示 Llama 2 7B Q4_0 下约 177 tok/s（开发者报告），16 GB 可留有余量地运行 24B Q4 模型。',
          '**RTX 4070 Ti Super 16 GB（全新约 $900 / 二手约 $920）：** 16 GB 显存，285 W，约 132 tok/s（开发者报告）。这一档中最便宜的全新显卡，三款中功耗最低。',
          '**为何买这一档：** 你持续运行 14B 模型并希望它们即时响应，或你做轻量 22B 工作并想要余量。',
          '**为何跳过这一档：** 如果你需要 33B 或 70B 模型，没有任何 16 GB 显卡能装下它们——直接转向发烧档，而不是在这里过度花钱。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在这一档中，开发者测试里 RTX 5070 Ti 最快（约 177 tok/s），RTX 4070 Ti Super 是最便宜的全新款，RTX 4080 Super 标价最高。除非你特别想要 RTX 4080 Super，否则选更便宜的两款。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: '在 Amazon 查看 RTX 4080 Super 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: '在 Amazon 查看 RTX 5070 Ti 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: '在 Amazon 查看 RTX 4070 Ti Super 价格',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: '发烧档（$2,000 起）：RTX 4090 和 RTX 5090',
        content:
          '**发烧档是唯一能运行 22B 以上模型的档次——在本指南的显卡中，只有 RTX 5090 32 GB 接近能运行 70B 模型：70B 以 Q4 运行据 Ollama 约为 43 GB，因此它也需要激进量化或部分 CPU 卸载。** 在这里购买是为显存容量，而非速度；速度是副产品。2026 年涨价对 RTX 5090 冲击最大，价格逐周变动。',
        items: [
          '**RTX 4090 24 GB（全新约 $2,000 起 / 二手约 $2,575-3,010）：** 24 GB 显存，450 W，Llama 2 7B Q4_0 下约 186 tok/s（开发者报告）。轻松运行 33B 模型。全新 RTX 4090 货源稀少，全新最低价可能已过时——挂牌价最高可达约 $3,800。',
          '**RTX 5090 32 GB（全新约 $4,500-4,921 / 二手约 $5,880-6,350，建议零售价 $1,999）：** 32 GB GDDR7 显存，575 W，Llama 2 7B Q4_0 下约 290 tok/s（开发者报告）。32 GB 容量是亮点——它是本指南中唯一的 32 GB 显卡，但 70B 模型以 Q4 运行据 Ollama 约为 43 GB，因此仍需要激进量化或部分 CPU 卸载。8 月到 10 月间挂牌价上涨约 64%，二手挂牌价高于全新。',
          '**为何买这一档：** 你需要 33B 或 70B 模型、你做批量推理，或你想要一款多年无需更换的显卡。',
          '**为何跳过这一档：** 对 7B-14B 模型而言它过剩——高端档以不到一半的价格和功耗就能在这些规模上提供即时响应。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NVIDIA 标注 RTX 5090 的 TGP 为 575 W，所需系统功率 1000 W（Ryzen 9 9950X 配置），其电源检查器的最低值为 850 W（见“来源”中的 RTX 5090 页面）。容量不足的电源在负载下可能会掉压，请把电源纳入购买预算。这不属于电气安全建议；请遵循显卡厂商的电源和线材指引。',
          },
          {
            type: 'note',
            text: '按观测到的二手价，每张 RTX 4090 约 $2,575-3,010（InsiderLLM 成交记录，2026-10-15 更新），一对约 $5,150-6,020，高于单张 RTX 5090（新品约 $4,500-4,900），因此单卡是更简单的 70B 构建。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: '在 Amazon 查看 RTX 4090 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: '在 Amazon 查看 RTX 5090 价格',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: '本地大模型的显卡要求：需要多少显存？',
        content:
          '**在 Q4_K_M 量化下，模型每十亿参数约需 0.6 GB 显存，外加 2-4 GB 用于上下文和工具开销。** 这条公式直接对应四个档次。',
        items: [
          '**7B 模型——8-9 GB：** 适配任何档次。12 GB 显卡留有充裕余量。',
          '**13-14B 模型——11-13 GB：** 计入上下文和工具后，实际需要 16 GB。中端档及以上（RTX 5060 Ti 16 GB 或更好）。',
          '**22B 模型——14-16 GB：** 在 16 GB 显卡上偏紧；高端档及以上较为宽裕。',
          '**33B 模型——19-22 GB：** 需要 24 GB 显卡。RTX 4090 的领域。',
          '**70B 模型——Q4 下约 43 GB（Llama 3.3 70B，据 Ollama）：** 超出这里任何单卡；RTX 5090 32 GB 只有靠激进量化或部分 CPU 卸载才能接近，否则需采用双卡构建。单张 24 GB 显卡无法以 Q4 装下 70B 模型。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '上下文长度是隐藏的显存成本——长提示词和大上下文窗口会在模型权重之外额外占用显存。始终留出 2-4 GB 余量。完整方法见延伸阅读中链接的显存需求指南。',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026 年显卡为何涨价',
        content:
          '**2026 年显卡价格大幅上涨，把消费级显卡推高到原始建议零售价的最高约 2.5 倍（RTX 5090；RTX 5060 Ti 和 RTX 5070 Ti 约 1.35 到 1.45 倍）；各来源对成因看法不一。** 这改变了购买的算账方式，所以要围绕它而非发布价来规划。',
        items: [
          '**成因尚无定论。** 已报道的因素包括 DRAM/GDDR7 供应、AI 数据中心需求和据报道的生产变化，各来源对各因素占比看法不一。[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) 和 [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) 都把内存视为原因的一部分；BuySellRAM 称内存不可能是大部分原因，且其数据无法把内存与供应、配额和需求区分开。',
          '**RTX 5090 是最清晰的例子：** 发布价 $1,999，但 BuySellRAM 数据中的美国最低挂牌价约 $4,921——约 2.5 倍，自 8 月以来上涨 64%。',
          '**较小的显卡也在涨，只是幅度不同。** RTX 5060 Ti 16 GB 的标价比其 $429 建议零售价高约 44%，RTX 5070 Ti 比 $749 高约 35%，尽管两者都是 16 GB。',
          '**二手不再自动更便宜。** 在 BuySellRAM 的挂牌价数据中，二手 RTX 5090、RTX 4090、RTX 4070 Ti Super、RTX 5060 Ti 和 RTX 5070 Ti 的挂牌价与全新持平或更高，二手 RTX 3060 12 GB 自 8 月以来上涨约 31%。请比较两者，并优先选择提供退货的卖家。',
          '**不要指望换代。** 有报道称，NVIDIA 的 RTX 50 Super 系列因内存供应被无限期推迟（NVIDIA 尚未证实）。**决策：** 如果你能等，就关注价格是否回落；如果不能等，买能装下目标模型的最小显卡。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026 年显卡价格最高约为建议零售价的 2.5 倍（RTX 5090；RTX 5060 Ti 和 RTX 5070 Ti 约 1.35 到 1.45 倍），已报道的因素包括 DRAM/GDDR7 供应和 AI 数据中心需求，各来源对占比看法不一，因此本地大模型买家应比较全新和二手价格，并买能装下目标模型的最小显卡。',
          },
          {
            type: 'plain-terms',
            text: '显卡本身并没有变好，只是变贵了，而其中多少来自内存、多少来自需求或供货配额，各来源看法不一。在价格回落之前，把建议零售价当作历史数字，比较全新和二手，不要为超出模型实际所需的显存付费。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '决策流程图：四个问题选定你的显卡',
        content:
          '**按顺序回答四个问题，能把大多数买家引向某一款显卡。**',
        items: [
          '**1. 你想运行的最大模型是什么？** 7B：预算档。14B：中端档（一张 16 GB 显卡）。22B：高端档。33B：RTX 4090。70B：RTX 5090 或双卡。',
          '**2. 你的硬性预算上限是多少？** 约 $400 以下：RTX 3060 12 GB。约 $700 以下：RTX 5060 Ti 16 GB 或二手 RTX 4060 Ti 16 GB。约 $900-1,200：RTX 4070 Ti Super、RTX 5070 Ti 或 RTX 4080 Super。$2,000 起：RTX 4090 或 RTX 5090。',
          '**3. NVIDIA 还是 AMD？** 除非你已拥有 AMD 硬件，或找到 RX 7800 XT 的大幅折扣，否则选 NVIDIA——CUDA 相比 ROCm 可以节省配置时间。',
          '**4. 你的电源有余量吗？** 中端档以上的显卡需要 285-575 W；购买发烧档硬件前，先确认你的电源和机箱散热。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '为本地大模型选显卡时，先回答最大模型规模，其次预算上限，再选 NVIDIA 还是 AMD，最后看电源余量。',
          },
          {
            type: 'plain-terms',
            text: '从你真正想运行的最大模型开始，让它来决定你的档次。只有在那之后，才看价格、品牌和电源能否带动显卡。按相反顺序来做，正是人们花冤枉钱或买到带不动自己模型的显卡的原因。',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-zh.webp',
        imageCaption:
          '为本地大模型选显卡的四问题决策流程：最大目标模型规模确定档次，预算上限缩小选择，NVIDIA 与 AMD 决定品牌，电源余量确认发烧档的选择。',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '地区价格与购买渠道',
        content:
          '**显卡价格因地区而异——中国市场的供货与价格和西方差异显著，本指南的价格为美国价格，欧盟价格含增值税。** 下方链接是按地区的普通商品搜索链接；它们不带联盟标签，也不产生佣金。',
        items: [
          '**美国：** Amazon 和 Newegg 货源最广。二手 RTX 3060 和 RTX 4090 显卡常见；全新旗舰货源稀少，RTX 5090 在标价下常常缺货。',
          '**德国：** Amazon.de 和 Mindfactory.de；标价通常含约 19% 增值税，德国显卡价格高于美国。',
          '**法国：** Amazon.fr 和 LDLC；价格与德国相近，含 20% 增值税，旗舰货源时断时续。',
          '**日本：** Amazon.co.jp 和 Kakaku.com 用于比价；全新显卡价格跟随美国，二手货源较少。',
          '**中国：** 全新显卡看京东和淘宝，二手 RTX 4090 与 RTX 3060 主要在闲鱼成交；高端显卡的供货和价格与西方市场差异显著。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '本指南所有价格以美元（$）计。由于 2026 年涨价，每个数字都是变动迅速的快照；中国市场的实际成交价请以京东、淘宝或闲鱼的当前页面为准。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: '在 Amazon US 浏览显卡',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: '在 Amazon.de 浏览显卡',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: '在 Amazon.fr 浏览显卡',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: '在 Amazon.co.jp 浏览显卡',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '为本地大模型买显卡时的常见错误',
        items: [
          '**按每秒 token 而非显存购买。** 装不下你模型的更快显卡毫无用处。先确认模型能在留有 2-4 GB 余量的情况下装入显存，再在该档次内比较速度。',
          '**买成 6 GB 版 RTX 3060 而非 12 GB 版本。** 它们同名但用途不同——6 GB 显卡的上限是 3B 模型。务必在商品页确认 12 GB 版本。',
          '**以为 RTX 4060 Ti 16 GB 比 8 GB 版本更快。** 并不是——它是同一颗 GPU 核心配更多内存。为容量（14B 模型）而买，不是为速度；RTX 5060 Ti 16 GB 是更快的 16 GB 选择。',
          '**以建议零售价而非当前价格为锚。** 2026 年涨价意味着发布价已不再反映现实。按零售商的实时价格做预算，并比较全新和二手——二手已不一定更便宜。',
          '**忽视电源需求。** RTX 5090 的 TGP 为 575 W，NVIDIA 标注所需系统功率为 1000 W，电源检查器的最低值为 850 W。一张在负载下掉压的显卡，比一张稳定运行的较慢显卡更糟。',
          '**选 AMD 却不为配置时间留预算。** RX 6700 XT 和 RX 7800 XT 性价比不错，但 ROCm 配置要花数小时。把这段时间与相对 NVIDIA 显卡省下的钱放在一起权衡。',
          '**为 7B 模型过度购买。** 如果 7B 模型覆盖你的用途，RTX 4090 就是浪费钱和电。把档次匹配模型，而不是匹配你手头恰好有的预算。',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          '为本地大模型买显卡的七个常见错误：重速度轻显存、混淆 6 GB 与 12 GB 的 RTX 3060、以为 16 GB 的 RTX 4060 Ti 更快、以建议零售价为锚、忽视电源需求、低估 AMD 配置时间、为 7B 模型过度购买。',
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[NVIDIA GeForce RTX 40 系列规格](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — RTX 4060 Ti、4070 Ti Super、4080 Super 和 4090 的官方显存容量与功耗（TGP）数据。',
          '[NVIDIA GeForce RTX 5090 规格](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — RTX 5090 的官方 32 GB GDDR7 显存、575 W TGP、所需系统功率 1000 W（Ryzen 9 9950X 配置）和电源检查器最低值 850 W。',
          '[BuySellRAM — NVIDIA 消费级 GPU 市场更新](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — 2026 年 10 月 11 日与 8 月 8 日美国全新和二手最低挂牌价，本指南多数价格出自此处（挂牌价，非成交价）。',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — RTX 4090 与 RTX 5090 的零售价和 eBay 成交记录区间（2026-10-15 更新）；本指南中 RTX 4090 与 RTX 5090 的数字结合了这些区间与 BuySellRAM 的挂牌价。',
          '[NVIDIA Newsroom — GeForce RTX 5060 Ti 发布公告（2025-04-15）](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — RTX 5060 Ti 16 GB 的发布价为 $429（8 GB 为 $379）。',
          '[NVIDIA Newsroom — GeForce RTX 50 系列发布公告（2025-01-06）](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — RTX 5070 Ti 的发布价为 $749。',
          '[Capital & Compute — Nvidia RTX 50 价格追踪](https://capitalandcompute.net/gpu-prices/nvidia/) — RTX 5090、RTX 5070 Ti 和 RTX 5060 Ti 16 GB 的建议零售价与市场价对比。',
          '[Club386 — Nvidia 无限期推迟 GeForce RTX 50 Super](https://www.club386.com/?p=129641) — 有报道称（NVIDIA 未证实）RTX 50 Super 换代因内存供应而推迟。',
          '[AMD Radeon 规格](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XT 和 RX 6700 XT 的官方显存与功耗数据。',
          '[llama.cpp 排行榜：CUDA 上的 Llama 2 7B Q4_0](https://github.com/ggml-org/llama.cpp/discussions/15013) — RTX 3060、4060 Ti（8 GB）、5060 Ti、4070 Ti Super、5070 Ti、4080 Super、4090 和 5090 的开发者报告 llama-bench 每秒 token 结果；条目来自不同用户和构建版本。',
          '[Ollama：Llama 3.3 70B](https://ollama.com/library/llama3.3) — 70B 模型下载大小标注为 43 GB，是本指南 70B 显存数字的依据。',
          '[本地大模型最佳显卡 2026](/zh/local-llms/best-gpus-for-local-llms) — 本站更广泛的 GPU 基准集合。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本文的价格和中国大陆的实际价格差多少？',
            a: '本文列出的是国际市场参考价，中国大陆的实际成交价通常不同：受渠道、税费和供货影响，同一型号在京东、淘宝等平台的标价与海外零售价可能有明显差距，高端型号尤其如此。请把本文价格当作各档次之间的相对关系来看，购买前在京东或天猫查询当前标价，二手行情参考闲鱼的实际成交价。显存、token/s 和功耗这些硬件参数不随地区变化，可以直接参考。',
          },
          {
            q: '二手 RTX 4090 值得买吗？',
            a: '对本地大模型来说，二手 4090 的 24 GB 显存仍然是性价比很高的选择，尤其在新卡溢价明显的时候。需要注意三点：一是确认是否为矿卡或长期满载使用过的卡，重点检查散热和供电部分；二是要求卖家提供实际跑分或长时间负载测试记录；三是二手卡通常没有保修，出问题只能自行承担。购买前先在闲鱼比对近期成交价，而不是只看挂牌价。',
          },
          {
            q: '有 RTX 5090 Ti 吗？',
            a: '本文对比的是已经上市的 50 系型号。NVIDIA 在过去几代中常在首发之后再推出 Ti 版本，因此这类搜索很常见，但请以官方发布和零售渠道的实际上架情况为准，不要根据传闻做购买决定。如果您在等待尚未上市的型号，本文中 RTX 5090 的显存和 token/s 数据可以作为该档次性能的参考。',
          },
          {
            q: '2026 年 LLM 推理最便宜的显卡是哪款？',
            a: 'NVIDIA RTX 3060 12 GB（约 $320-400）是本指南中能把本地大模型推理跑好的价格最低的新显卡。它的 12 GB 显存能以 Q4 量化装下每一款 7B 模型和大多数 13B 模型，在 Llama 2 7B Q4_0 下约 76 token 每秒（开发者报告）。二手市场上的 RX 6700 XT 可能更便宜，但价格因卖家而异，且需要 AMD ROCm 配置。RTX 3060 的全新和二手价格如今相近，请两者都比较。',
          },
          {
            q: '为什么 2026 年显卡价格这么高？',
            a: '成因尚无定论。已报道的因素包括 DRAM/GDDR7 供应、AI 数据中心需求和据报道的生产变化，InsiderLLM 与 BuySellRAM 对各因素占比看法不一；BuySellRAM 称内存是原因的一部分，但不可能是大部分。显卡售价为原始建议零售价的最高约 2.5 倍（RTX 5090；RTX 5060 Ti 和 RTX 5070 Ti 约 1.35 到 1.45 倍）——RTX 5090 发布价 $1,999，但 10 月标价接近 $4,500-4,900。二手卡也没有躲过涨幅。',
          },
          {
            q: '运行本地大模型有哪些显卡要求？',
            a: '在 Q4_K_M 量化下，按每十亿参数约 0.6 GB 显存加 2-4 GB 开销来规划。这意味着 7B 模型 8-9 GB，14B 为 11-13 GB，33B 为 19-22 GB，70B 约为 43 GB（Llama 3.3 70B 以 Q4 运行，据 Ollama）。12 GB 显卡能宽裕地覆盖 7B，16 GB 显卡覆盖 14B，70B 超出这里任何单卡：RTX 5090 32 GB 只有靠激进量化或部分 CPU 卸载才能接近，否则需采用双卡构建。',
          },
          {
            q: '本地大模型用哪款显卡最好？',
            a: '本地大模型的最佳显卡，是在你的预算内显存足够运行目标模型的那一款。7B 模型用 RTX 3060 12 GB（约 $320-400）就够了。14B 模型的中端之选是 RTX 5060 Ti 16 GB（约 $618）或二手 RTX 4060 Ti 16 GB。33B 模型需要 RTX 4090 24 GB，70B 只有 RTX 5090 32 GB 能接近，且仅限激进量化或部分 CPU 卸载（70B 以 Q4 运行据 Ollama 约为 43 GB）。NVIDIA 显卡的上手门槛最低，因为 CUDA 通常无需额外配置即可使用。',
          },
          {
            q: 'RTX 4060 Ti 16 GB 比 8 GB 版本更快吗？',
            a: '不。RTX 4060 Ti 16 GB 和 8 GB 版本使用同一颗 GPU 核心，因此每 token 推理速度相近——7B 模型约 64 token 每秒（8 GB 版的 llama.cpp 排行榜数值，开发者报告）。16 GB 版本买的是容量，让你能运行 8 GB 装不下的 14B 模型。为显存而买，不是为速度。',
          },
          {
            q: '本地大模型该买 NVIDIA 还是 AMD？',
            a: '除非你已拥有 AMD 硬件或找到大幅折扣，否则买 NVIDIA。NVIDIA CUDA 与 Ollama、LM Studio 和 llama.cpp 通常无需额外配置即可使用。RX 6700 XT 和 RX 7800 XT 等 AMD 显卡价格有竞争力，但 ROCm 配置所需时间因发行版和显卡而异，请查看 AMD 的支持显卡列表。',
          },
          {
            q: '单张显卡能运行 70B 模型吗？',
            a: '在本指南的显卡中，只有 RTX 5090 32 GB 能接近，而且只能靠激进量化或部分 CPU 卸载——70B 模型以 Q4 运行据 Ollama 约为 43 GB。24 GB 的 RTX 4090 无法单卡以 Q4 装下 70B 模型；常见方案是用两张 RTX 4090 合并显存，不过按本指南采用的价格，这一对显卡的总价与单张 RTX 5090 大致相当。',
          },
          {
            q: '对本地大模型而言，RTX 5090 相比 RTX 4090 值得吗？',
            a: '只有在你确实需要单卡超过 24 GB 显存时才值得，例如为了更接近运行 70B 模型。RTX 5090 有 32 GB 显存，对比 RTX 4090 的 24 GB，这是决定性因素。对 7B-33B 模型，RTX 4090 装下的模型相同；按本指南采用的价格，RTX 5090 约为 RTX 4090 的 1.8-2.4 倍，因此只有多出的 8 GB 能解决实际问题时才值得为它付费。',
          },
          {
            q: '这些显卡需要什么电源？',
            a: '把电源与档次匹配：550 W 适合 RTX 3060，650-750 W 适合 RTX 4060 Ti、RTX 5060 Ti、RTX 4070 Ti Super 和 RTX 5070 Ti，850 W 适合 RTX 4090，而对于 TGP 为 575 W 的 RTX 5090，NVIDIA 标注所需系统功率为 1000 W（Ryzen 9 9950X 配置），电源检查器的最低值为 850 W。容量不足的电源会在负载下导致不稳定。请遵循显卡和电源厂商的指引；以上不属于电气安全建议。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[查看每种模型规模的完整显存需求](/zh/local-llms/how-much-vram-local-llm) — 本指南快速公式背后完整的按模型规模算显存的方法。',
          '[用已发布的本地大模型基准对比 15 款以上显卡](/zh/local-llms/best-gpus-for-local-llms) — 更广的显卡基准集合，包括这十款之外更老的显卡和服务器显卡。',
          '[看看预算款 RTX 3060 12 GB 能跑哪些模型](/zh/local-llms/best-budget-gpus-local-llm) — 预算档逐款模型的速度，包括 6 GB 与 12 GB 之分。',
          '[把 RTX 5090 和 RTX 4090 正面对比](/zh/local-llms/rtx-5090-vs-rtx-4090-local-llm) — 何时值得升级到 RTX 5090，何时 RTX 4090 已够用。',
          '[理解 Q4_K_M 量化如何决定显存成本](/zh/local-llms/llm-quantization-explained) — 为什么 Q4_K_M 是默认选择，以及量化如何改变显存计算。',
          '[1000美元以下本地LLM推理最佳GPU是什么？](/zh/prompt-bites/best-gpu-under-1000-local-llm) — 24GB档位：二手RTX 4090对比全新RTX 4080 SUPER。',
          '[RTX 4060对比RTX 3060 12GB：哪个更适合本地LLM？](/zh/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — 为什么更大显存比新一代架构更重要。',
          '[本地LLM最佳Intel Arc GPU是什么？](/zh/prompt-bites/best-intel-arc-gpu-local-llm) — 作为更便宜替代品的Arc B580及其软件方面的权衡。',
          '[运行70B模型的最佳RTX 4090配置是什么？](/zh/prompt-bites/best-rtx-4090-setup-70b-models) — 在本指南的旗舰显卡上实际运行70B模型需要什么。',
          '[没有eGPU的MacBook Air最佳本地LLM是什么？](/zh/prompt-bites/best-local-llm-macbook-air-no-egpu) — 为什么在Apple Silicon上eGPU无法替代本指南中的GPU。',
          '[1500美元以下本地LLM最佳Windows笔记本是什么？](/zh/prompt-bites/best-windows-laptop-local-llm-under-1500) — 相当于本指南桌面档位的移动GPU版本。',
          '[本地微调7B模型需要什么硬件？](/zh/prompt-bites/fine-tuning-7b-model-locally-hardware) — 这些GPU中哪些不仅能用于推理，还能用于QLoRA微调。',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Mejor tarjeta gráfica para LLMs locales: guía de GPUs 2026',
    seoTitle: 'Mejor gráfica para LLMs locales 2026: hasta la RTX 5090',
    intro:
      'La mayoría de los consejos sobre GPUs para LLMs locales optimizan el número equivocado. La velocidad en tokens por segundo decide qué tan rápido responde un modelo, pero la VRAM decide si el modelo puede ejecutarse — y un modelo que no cabe en memoria es infinitamente más lento que uno que sí cabe. Esta guía compara diez tarjetas gráficas de consumo en cuatro rangos de precio según las cifras que realmente determinan una compra: capacidad de VRAM, velocidad de inferencia, consumo energético y precio. Una advertencia sobre los precios: los precios de las GPUs se dispararon en 2026 (entre los factores citados están el suministro de memoria y la demanda de los centros de datos de IA; las fuentes discrepan sobre el peso de cada uno) — una RTX 5090 se anuncia ahora a aproximadamente 2,5 veces su precio de lista — así que la mayoría de los precios aquí son los precios de venta más bajos en EE. UU. de los datos de BuySellRAM enlazados en Fuentes, y los rangos de la RTX 4090 y la RTX 5090 también usan datos de anuncios vendidos de InsiderLLM; verifica el precio actual antes de comprar.',
    metaDescription:
      '¿Qué tarjeta gráfica elegir para LLMs locales? Diez GPUs comparadas: VRAM, velocidad, consumo y precios 2026, más requisitos de GPU por modelo.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-es.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — diez tarjetas gráficas, cuatro presupuestos, una regla: compra por VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      'Compradores que eligen una GPU específicamente para ejecutar LLMs locales, tomando decisiones por rango de precio y tamaño de modelo objetivo. Se asume familiaridad con la cuantización y la VRAM como restricción, pero no con los SKUs de GPU actuales específicos.',
    readTime: '14 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      'mejor gpu para llm local 2026',
      'guia de compra gpu llm local',
      'rtx 3060 vs rtx 4090 llm local',
      'cuanta vram necesito para llm local',
      'gpu mas barata para llm local',
      'mejor tarjeta grafica para llm local',
      'requisitos de gpu para llm local',
    ],
    leadAnswerBlock:
      '**La mejor tarjeta gráfica para LLMs locales es la que tiene la VRAM que encaja con tu modelo, no la tarjeta más rápida. Una RTX 3060 12 GB ejecuta cualquier modelo de 7B, una tarjeta de 16 GB (RTX 5060 Ti, RTX 4060 Ti o RTX 5070 Ti) maneja modelos de 14B, una RTX 4090 24 GB maneja modelos de 33B, y, de las tarjetas de esta guía, solo la RTX 5090 32 GB se acerca a un modelo de 70B, y solo con cuantización agresiva o descarga parcial a la CPU (el 70B en Q4 ocupa unos 43 GB según Ollama).**',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor tarjeta gráfica para ejecutar LLMs locales en 2026?',
        answer:
          'Compra por VRAM, luego por velocidad. Una RTX 3060 12 GB (~$320-400) es la opción de presupuesto y ejecuta cualquier modelo de 7B. Una tarjeta de 16 GB es la opción de gama media para modelos de 14B — una RTX 5060 Ti 16 GB (~$620 nueva) o una RTX 4060 Ti 16 GB de segunda mano (~$650). Una RTX 4090 24 GB ejecuta modelos de 33B, y, de las tarjetas de esta guía, solo la RTX 5090 32 GB (~$4.500-4.900) se acerca al 70B, y solo con cuantización agresiva o descarga parcial a la CPU (el 70B en Q4 ocupa unos 43 GB según Ollama). Ten en cuenta que los precios de 2026 están muy por encima del precio de lista.',
        bullets: [
          'Presupuesto: RTX 3060 12 GB, ~$320-400 nueva o de segunda mano, ejecuta cualquier modelo de 7B a ~76 tok/s (Llama 2 7B Q4_0, dato reportado por desarrolladores)',
          'Media: RTX 5060 Ti 16 GB, ~$620 nueva ([precio de lista $429](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)), ejecuta modelos de 14B con margen',
          'Entusiasta: RTX 5090 32 GB, ~$4.500-4.900, la única tarjeta de 32 GB aquí; 70B (unos 43 GB en Q4) exige cuantización agresiva o descarga',
          'Los precios de GPU en 2026 son hasta unas 2,5x sobre el precio de lista (RTX 5090; unas 1,35-1,45x en la RTX 5060 Ti y la RTX 5070 Ti) — compara nueva y de segunda mano antes de comprar',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Elección del editor', anchor: '#editors-choice' },
      { label: 'Tabla comparativa de GPUs', anchor: '#comparison-table' },
      { label: '¿Qué GPU deberías comprar?', anchor: '#which-gpu' },
      { label: 'Rango de presupuesto ($320-400)', anchor: '#budget-tier' },
      { label: 'Rango medio ($620-790)', anchor: '#mid-tier' },
      { label: 'Rango alto ($900-1200)', anchor: '#high-tier' },
      { label: 'Rango entusiasta ($2000+)', anchor: '#enthusiast-tier' },
      { label: 'Requisitos de GPU: ¿cuánta VRAM necesitas?', anchor: '#vram-needs' },
      { label: 'Por qué subieron los precios de GPU en 2026', anchor: '#price-surge' },
      { label: 'Diagrama de decisión', anchor: '#decision-flowchart' },
      { label: 'Precios regionales y dónde comprar', anchor: '#where-to-buy' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**La VRAM es la restricción determinante.** Un modelo que no cabe en VRAM falla al cargar o se desborda hacia la RAM del sistema y se vuelve demasiado lento para uso interactivo. Elige el rango cuya VRAM encaje con tu modelo objetivo, luego optimiza la velocidad dentro de ese rango.',
          '**Los precios se dispararon en 2026.** Los precios de GPU están hasta unas 2,5 veces por encima del precio de lista (RTX 5090; unas 1,35 a 1,45 veces en la RTX 5060 Ti y la RTX 5070 Ti). Entre los factores citados están el suministro de DRAM/GDDR7, la demanda de los centros de datos de IA y cambios de producción reportados; las fuentes discrepan sobre cuánto aporta cada uno. Una RTX 5090 se anuncia a ~$4.500-4.900, no a su precio de lanzamiento de $1.999, y los precios volvieron a subir entre agosto y octubre. Trata los precios aquí como una instantánea — la mayoría son precios de venta en EE. UU., y los rangos de la RTX 4090 y la RTX 5090 también usan datos de anuncios vendidos — y compara nueva frente a segunda mano antes de comprar.',
          '**Elección de presupuesto: NVIDIA RTX 3060 12 GB** (~$320-400, nueva y de segunda mano cuestan ahora casi lo mismo) — ejecuta cualquier modelo de 7B (~76 tok/s en Llama 2 7B Q4_0, dato reportado por desarrolladores) y la mayoría de los modelos de 13B en Q4.',
          '**Elección de gama media: NVIDIA RTX 5060 Ti 16 GB** (~$618 nueva, ~$649 de segunda mano en precio de venta) — 16 GB de VRAM resuelve los modelos de 14B con margen de contexto, y su ancho de banda de memoria de 448 GB/s (~91 tok/s, dato reportado por desarrolladores) es mayor que los 288 GB/s de la RTX 4060 Ti 16 GB anterior (~64 tok/s en la versión de 8 GB, dato reportado por desarrolladores). De segunda mano las dos cuestan casi lo mismo (~$650); el mínimo de ~$790 de la RTX 4060 Ti 16 GB nueva proviene de solo tres anuncios según BuySellRAM.',
          '**Elección de gama alta: NVIDIA RTX 4080 Super 16 GB** (~$1.200) — la tarjeta de 16 GB de mayor precio de esta guía (~148 tok/s, dato reportado por desarrolladores). La RTX 4070 Ti Super (~$900) y la RTX 5070 Ti (~$1.008) cuestan menos y pueden ofrecer mejor valor; la RTX 5070 Ti es más rápida en las mismas mediciones de desarrolladores (~177 tok/s).',
          '**Elección entusiasta: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — la RTX 4090 (~$2.000+ nueva, ~$2.575-3.010 de segunda mano) ejecuta modelos de 33B; de las tarjetas de esta guía, solo la RTX 5090 (~$4.500-4.900) se acerca al 70B, y solo con cuantización agresiva o descarga parcial a la CPU (el 70B en Q4 ocupa unos 43 GB según Ollama).',
          '**AMD es viable pero con más fricción.** La RX 6700 XT (12 GB) y la RX 7800 XT (16 GB) ofrecen VRAM a precios competitivos, pero el tiempo de configuración de ROCm varía según la distribución y la tarjeta.',
          '**El consumo energético escala con el rango.** Una RTX 3060 consume 170 W; una RTX 5090 tiene un TGP de 575 W, y [NVIDIA indica](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) 1000 W de potencia de sistema requerida (configuración con Ryzen 9 9950X) y 850 W como mínimo en su comprobador de fuentes. Incluye la fuente de alimentación en el presupuesto junto con la tarjeta.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Rango de presupuesto ($320-400):** RTX 3060 12 GB o RX 6700 XT 12 GB — ejecuta modelos de 7B y la mayoría de los de 13B.',
          '**Rango medio ($620-790):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB o RX 7800 XT 16 GB — ejecuta modelos de 14B cómodamente.',
          '**Rango alto ($900-1.200):** RTX 4080 Super, RTX 5070 Ti o RTX 4070 Ti Super, todas de 16 GB — inferencia rápida de 14B, trabajo ligero de 22B.',
          '**Rango entusiasta ($2.000+):** RTX 4090 24 GB o RTX 5090 32 GB — modelos de 33B, y 70B solo con cuantización agresiva o descarga parcial a la CPU en la 5090.',
          '**Regla general de VRAM en Q4_K_M:** aproximadamente 0,6 GB por cada mil millones de parámetros, más 2-4 GB para contexto y herramientas.',
          '**Rango de consumo energético:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Realidad de precios en 2026:** los precios están hasta unas 2,5 veces por encima del precio de lista (RTX 5090; unas 1,35 a 1,45 veces en la RTX 5060 Ti y la RTX 5070 Ti) y las fuentes discrepan sobre las causas; las tarjetas de segunda mano ya no cuestan siempre menos que las nuevas, así que compara ambas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Elección del editor (16 GB premium): RTX 4080 Super',
        highlight: true,
        content:
          '**Para compradores que quieren una tarjeta premium de 16 GB y pueden superar los $1.000, la NVIDIA RTX 4080 Super 16 GB es nuestra elección del editor — una elección para una configuración premium de 16 GB, no por valor.** Sus 16 GB de VRAM resuelven cualquier modelo de 14B con margen de contexto, alcanza unos 148 tok/s en Llama 2 7B Q4_0 (dato reportado por desarrolladores), y a ~$1.200 es la tarjeta de 16 GB de mayor precio aquí. La RTX 4070 Ti Super (~$900, ~132 tok/s) y la RTX 5070 Ti (~$1.008, ~177 tok/s) cuestan unos $300 y ~$190 menos y pueden ofrecer mejor valor; la RTX 5070 Ti es más rápida en las mismas mediciones de desarrolladores. Si tu presupuesto está fijo por debajo de $700, la RTX 5060 Ti 16 GB es la elección de valor. Gasta más solo si específicamente necesitas modelos de 33B o 70B.',
        callouts: [
          {
            type: 'note',
            text: 'Esta elección del editor es una elección premium de 16 GB, no un ranking de precio-capacidad: la RTX 4070 Ti Super y la RTX 5070 Ti cuestan menos y pueden ofrecer mejor valor. PromptQuorum no está inscrito en ningún programa de afiliados y los enlaces de abajo no llevan etiquetas de afiliado — son simples enlaces de referencia que no generan comisión.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Ver precio del RTX 4080 Super en Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Ver precio del RTX 4080 Super en Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Cómo se comparan las diez GPUs para LLMs locales en 2026',
        content:
          'Las cifras de VRAM y consumo energético son especificaciones del fabricante. Las velocidades marcadas «reportado» son resultados de llama-bench reportados por desarrolladores (Llama 2 7B Q4_0, CUDA) del marcador de llama.cpp enlazado en Fuentes; las entradas provienen de distintos usuarios y compilaciones y no las volvimos a medir. La cifra de la RTX 4060 Ti 16 GB es el resultado de la tarjeta de 8 GB (mismo die de GPU y 288 GB/s de ancho de banda). La RX 6700 XT y la RX 7800 XT no tienen resultado allí, así que sus velocidades son estimaciones aproximadas (est.) escaladas a partir del ancho de banda de memoria frente a los resultados medidos. La mayoría de los precios son los precios de venta más bajos en EE. UU. de los datos de BuySellRAM enlazados; los rangos de la RTX 4090 y la RTX 5090 los combinan con los rangos de tienda y de anuncios vendidos de InsiderLLM (actualizado el 2026-10-15). Los precios están hasta unas 2,5 veces por encima del precio de lista (RTX 5090; unas 1,35 a 1,45 veces en la RTX 5060 Ti y la RTX 5070 Ti), así que verifica antes de comprar (consulta la fecha de actualización de esta página). La página enlazada de GPU económicas usa estimaciones anteriores para algunas tarjetas (por ejemplo, unos $290-330 de segunda mano para la RTX 3060 12 GB), así que las cifras pueden diferir ligeramente entre ambas páginas.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para LLMs locales, la VRAM de una GPU decide qué modelos puedes ejecutar y sus tokens por segundo deciden qué tan rápido responden — compra por lo primero, luego optimiza lo segundo.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en la VRAM como el tamaño de un escritorio y en el modelo como lo que pones encima. Una GPU más rápida despeja el escritorio más rápido, pero si el modelo no cabe en el escritorio en absoluto, la velocidad nunca entra en juego. Primero elige el rango cuyo escritorio sea suficientemente grande.',
          },
        ],
        columns: ['GPU', 'VRAM', 'Velocidad (7B Q4)', 'Consumo', 'Precio (EE. UU., 2026)', 'Ideal para'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Velocidad (7B Q4)': '~76 tok/s (reportado)',
            'Consumo': '170 W',
            'Precio (EE. UU., 2026)': '$320-400 nueva / $320-350 segunda mano',
            'Ideal para': 'Entrada de presupuesto — cualquier modelo de 7B',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Velocidad (7B Q4)': '~65-80 tok/s (est.)',
            'Consumo': '230 W',
            'Precio (EE. UU., 2026)': 'Varía según vendedor — consulta en vivo',
            'Ideal para': 'AMD 12 GB, acepta configuración ROCm',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~64 tok/s (tarjeta 8 GB, reportado)',
            'Consumo': '165 W',
            'Precio (EE. UU., 2026)': '~$790 nueva / ~$650 segunda mano',
            'Ideal para': 'Rango medio — modelos de 14B, bajo consumo',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~91 tok/s (reportado)',
            'Consumo': '180 W',
            'Precio (EE. UU., 2026)': '$618 nueva / $649 segunda mano',
            'Ideal para': 'Rango medio — 14B, generación actual',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~90-115 tok/s (est.)',
            'Consumo': '263 W',
            'Precio (EE. UU., 2026)': 'Precios AMD: consulta los anuncios actuales',
            'Ideal para': '16 GB en AMD, acepta configuración ROCm',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~132 tok/s (reportado)',
            'Consumo': '285 W',
            'Precio (EE. UU., 2026)': '$900 nueva / $920 segunda mano',
            'Ideal para': 'Rápida en 14B, menor consumo energético',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~177 tok/s (reportado)',
            'Consumo': '300 W',
            'Precio (EE. UU., 2026)': '$1.008 nueva / $1.050 segunda mano',
            'Ideal para': 'Rápida en 14B, 16 GB de buen valor',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~148 tok/s (reportado)',
            'Consumo': '320 W',
            'Precio (EE. UU., 2026)': '$1.200 nueva / $1.149 segunda mano',
            'Ideal para': 'Elección del editor — 16 GB premium',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Velocidad (7B Q4)': '~186 tok/s (reportado)',
            'Consumo': '450 W',
            'Precio (EE. UU., 2026)': '~$2.000+ nueva / $2.575-3.010 segunda mano',
            'Ideal para': 'Modelos de 33B, doble GPU para 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Velocidad (7B Q4)': '~290 tok/s (reportado)',
            'Consumo': '575 W',
            'Precio (EE. UU., 2026)': '$4.500-4.921 nueva / $5.880-6.350 segunda mano',
            'Ideal para': '70B solo con cuantización agresiva o descarga',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-es.webp',
        imageCaption:
          'Diez tarjetas gráficas de consumo para LLMs locales comparadas por VRAM, velocidad de inferencia 7B Q4, consumo energético y precio actual en EE. UU. en cuatro rangos de presupuesto. La VRAM sube de 12 GB (RTX 3060) a 32 GB (RTX 5090); compra por el tamaño de modelo que necesitas antes de optimizar la velocidad.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: '¿Qué GPU deberías comprar?',
        content:
          '**Tu modelo objetivo más grande decide tu rango; tu presupuesto decide entre NVIDIA y AMD dentro de ese rango.** Encuentra la fila que se corresponde con tu situación.',
        columns: ['Tu situación', 'Compra esto'],
        rows: [
          { 'Tu situación': 'Tengo menos de $400 y quiero ejecutar modelos de 7B', 'Compra esto': 'RTX 3060 12 GB' },
          { 'Tu situación': 'Encuentro una AMD de 12 GB barata y acepto la configuración', 'Compra esto': 'RX 6700 XT (revisa precios)' },
          { 'Tu situación': 'Quiero ejecutar modelos de 14B con un presupuesto de energía ajustado', 'Compra esto': 'RTX 5060 Ti 16 GB (o una RTX 4060 Ti 16 GB de segunda mano)' },
          { 'Tu situación': 'Quiero una tarjeta que ejecute 14B rápido y dure varios años', 'Compra esto': 'RTX 5070 Ti o RTX 4070 Ti Super 16 GB' },
          { 'Tu situación': 'Quiero una tarjeta premium de 16 GB y el precio es secundario', 'Compra esto': 'RTX 4080 Super 16 GB (la 5070 Ti cuesta menos)' },
          { 'Tu situación': 'Necesito modelos de 33B o planeé una futura configuración de doble GPU con 70B', 'Compra esto': 'RTX 4090 24 GB' },
          { 'Tu situación': 'Necesito una sola tarjeta para modelos de 70B (cuantización agresiva o descarga parcial)', 'Compra esto': 'RTX 5090 32 GB' },
          { 'Tu situación': 'No estoy seguro y quiero la primera GPU más segura', 'Compra esto': 'RTX 3060 12 GB — actualiza más adelante si la superas' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Rango de presupuesto ($320-400): RTX 3060 12 GB y RX 6700 XT',
        content:
          '**El rango de presupuesto ejecuta cualquier modelo de 7B y la mayoría de los de 13B — y para la mayoría de los usuarios principiantes en LLMs locales, eso es toda la capacidad que necesitan.** La RTX 3060 12 GB es la elección recomendada; la RX 6700 XT es la alternativa de AMD si aceptas la fricción de configuración. Los precios de este rango subieron a lo largo de 2026, y una RTX 3060 de segunda mano cuesta ahora casi lo mismo que una nueva — compara ambas.',
        items: [
          '**RTX 3060 12 GB (~$320-400 nueva, ~$320-350 de segunda mano):** 12 GB de VRAM, 170 W, ~76 tok/s en Llama 2 7B Q4_0 (dato reportado por desarrolladores). Ejecuta Ministral 3 8B, Qwen3 8B, DeepSeek-R1 7B y la mayoría de los modelos de 13B. La variante de 12 GB es la que hay que comprar — evita la variante de 6 GB, que se limita a modelos de 3B. El stock nuevo es limitado y una tarjeta de segunda mano ya no ahorra mucho, así que compra la que sea más barata con derecho a devolución.',
          '**RX 6700 XT (de segunda mano, el precio varía según el vendedor):** 12 GB de VRAM, 230 W, unos 65-80 tok/s en modelos de 7B (estimación aproximada escalada del ancho de banda de memoria, no medida). Consulta los listados en vivo; depende de AMD ROCm, lo que añade tiempo de configuración.',
          '**Por qué comprar en este rango:** costo de entrada más bajo, bajo consumo energético en la RTX 3060, y suficiente VRAM para los modelos de 7B-13B que cubren chat general, asistencia de código y resumen.',
          '**Por qué saltarse este rango:** si ya sabes que quieres modelos de 14B o más grandes, el rango de presupuesto te frustrará en pocas semanas — empieza en el rango medio en su lugar.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Compra la RTX 3060 específicamente en su versión de 12 GB. La RTX 3060 de 6 GB se ve similar en los listados pero solo cabe modelos de 3B — la mitad del recuento de parámetros es la diferencia entre un asistente funcional y un juguete.',
          },
          {
            type: 'warning',
            text: 'La RX 6700 XT puede ser una entrada económica, pero el tiempo de configuración de ROCm en Linux varía según la distribución y la tarjeta; consulta primero la lista de GPUs compatibles de AMD. Si el ahorro frente a una RTX 3060 es pequeño, compra la tarjeta NVIDIA.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'Ver precio de la RTX 3060 12GB en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'Ver precio de la RX 6700 XT en Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Rango medio ($620-790): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB y RX 7800 XT',
        content:
          '**El rango medio existe por una razón: 16 GB de VRAM resuelve los modelos de 14B que las tarjetas de 12 GB no pueden alojar con contexto utilizable.** Si los modelos de clase 14B son tu objetivo, este es el rango más barato que los ejecuta correctamente. La RTX 5060 Ti 16 GB es la elección de la generación actual y, con los precios pedidos que usa esta guía, también la opción NVIDIA de 16 GB de menor precio; la RTX 4060 Ti 16 GB cuesta casi lo mismo de segunda mano (~$650) y más nueva (~$790, de solo tres anuncios de BuySellRAM).',
        items: [
          '**RTX 5060 Ti 16 GB (~$618 nueva / ~$649 de segunda mano en precio de venta, $429 de precio de lista):** 16 GB GDDR7, 180 W, 448 GB/s de ancho de banda de memoria. No la medimos para esta guía; el marcador de llama.cpp indica unos 91 tok/s en Llama 2 7B Q4_0 (dato reportado por desarrolladores). Ejecuta cómodamente modelos de clase Qwen3 14B. Los precios subieron cerca de un 44 % sobre el precio de lista en 2026.',
          '**RTX 4060 Ti 16 GB (~$790 nueva / ~$650 de segunda mano, precios pedidos):** 16 GB de VRAM, 165 W, unos 64 tok/s en modelos de 7B (cifra del marcador de llama.cpp para la tarjeta de 8 GB, reportada por desarrolladores). Usa el mismo die de GPU y los mismos 288 GB/s de ancho de banda que la RTX 4060 Ti de 8 GB, así que la velocidad por token es similar — la versión de 16 GB compra capacidad, no velocidad bruta. De segunda mano cuesta casi lo mismo que la RTX 5060 Ti 16 GB (~$650 frente a ~$649); el mínimo de ~$790 nueva proviene de solo tres anuncios de BuySellRAM.',
          '**RX 7800 XT (precio AMD: consulta los anuncios actuales; los datos de BuySellRAM solo cubren NVIDIA):** 16 GB de VRAM, 263 W. No la medimos para esta guía; espera unos 90-115 tok/s en 7B Q4 (estimación aproximada escalada del ancho de banda de memoria, no medida), con la configuración de AMD ROCm como contrapartida.',
          '**Por qué comprar en este rango:** quieres modelos de 14B, quieres bajo consumo energético (RTX 4060 Ti) o quieres 16 GB al precio más bajo posible.',
          '**Por qué saltarse este rango:** si con los modelos de 7B es suficiente, el rango de presupuesto cuesta $200-300 menos; si quieres inferencia rápida de 14B, el rango alto es significativamente más rápido.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La RTX 4060 Ti 16 GB es una actualización de capacidad, no de velocidad, sobre la versión de 8 GB — cómprala porque necesitas alojar modelos de 14B, no porque esperes más tokens por segundo. La RTX 5060 Ti 16 GB es la opción más rápida y, con los precios pedidos que usa esta guía, cuesta menos nueva y casi lo mismo de segunda mano.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'Ver precio de la RTX 5060 Ti 16GB en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'Ver precio de la RTX 4060 Ti 16GB en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'Ver precio de la RX 7800 XT en Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'Rango alto ($900-1.200): RTX 4080 Super, RTX 5070 Ti y RTX 4070 Ti Super',
        content:
          '**El rango alto mantiene 16 GB de VRAM pero añade la velocidad que hace que los modelos de 7B-14B se sientan instantáneos y los de 22B sean utilizables.** Las tres tarjetas alojan los mismos modelos que el rango medio — estás pagando por tokens por segundo, no por capacidad. La subida de 2026 amplió la brecha entre este rango y el medio.',
        items: [
          '**RTX 4080 Super 16 GB (~$1.200 nueva / ~$1.149 de segunda mano):** 16 GB de VRAM, 320 W, unos 148 tok/s en Llama 2 7B Q4_0 (dato reportado por desarrolladores). La elección del editor como opción premium de 16 GB — la tarjeta de mayor precio de esta guía, con una prima de unos $190-300 sobre las dos tarjetas siguientes, y más lenta que la RTX 5070 Ti en las mismas mediciones.',
          '**RTX 5070 Ti 16 GB (~$1.008 nueva / ~$1.050 de segunda mano en precio de venta, [$749 de precio de lista](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)):** 16 GB GDDR7, 300 W, 896 GB/s de ancho de banda de memoria. No la medimos para esta guía; el marcador de llama.cpp indica unos 177 tok/s en Llama 2 7B Q4_0 (dato reportado por desarrolladores), y 16 GB ejecutan un modelo de 24B en Q4 con margen.',
          '**RTX 4070 Ti Super 16 GB (~$900 nueva / ~$920 de segunda mano):** 16 GB de VRAM, 285 W, unos 132 tok/s (dato reportado por desarrolladores). La tarjeta nueva más barata de este rango, con el menor consumo energético de las tres.',
          '**Por qué comprar en este rango:** ejecutas modelos de 14B constantemente y los quieres instantáneos, o haces trabajo ligero de 22B y quieres margen.',
          '**Por qué saltarse este rango:** si necesitas modelos de 33B o 70B, ninguna tarjeta de 16 GB los alojará — muévete al rango entusiasta en lugar de gastar de más aquí.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Dentro de este rango, la RTX 5070 Ti es la más rápida en las mediciones de desarrolladores (~177 tok/s), la RTX 4070 Ti Super es la nueva más barata y la RTX 4080 Super es la de mayor precio. Salvo que quieras específicamente la RTX 4080 Super, elige una de las dos más baratas.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Ver precio del RTX 4080 Super en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'Ver precio de la RTX 5070 Ti en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'Ver precio del RTX 4070 Ti Super en Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Rango entusiasta ($2.000+): RTX 4090 y RTX 5090',
        content:
          '**El rango entusiasta es el único que ejecuta modelos por encima de 22B — y, de las tarjetas de esta guía, solo la RTX 5090 32 GB se acerca a un modelo de 70B: el 70B en Q4 ocupa unos 43 GB según Ollama, así que incluso ella requiere cuantización agresiva o descarga parcial a la CPU.** Compra aquí por capacidad de VRAM, no por velocidad; la velocidad es un efecto secundario. La subida de 2026 golpeó con más fuerza a la RTX 5090, así que los precios cambian semana a semana.',
        items: [
          '**RTX 4090 24 GB (~$2.000+ nueva / ~$2.575-3.010 de segunda mano):** 24 GB de VRAM, 450 W, unos 186 tok/s en Llama 2 7B Q4_0 (dato reportado por desarrolladores). Ejecuta modelos de 33B cómodamente. El stock nuevo de la RTX 4090 es escaso y el precio mínimo de las nuevas puede estar desactualizado — los listados llegan hasta ~$3.800.',
          '**RTX 5090 32 GB (~$4.500-4.921 nueva / ~$5.880-6.350 de segunda mano, $1.999 de precio de lista):** 32 GB de VRAM GDDR7, 575 W, unos 290 tok/s en Llama 2 7B Q4_0 (dato reportado por desarrolladores). Los 32 GB de capacidad son el argumento central — es la única tarjeta de esta guía con 32 GB, aunque un modelo de 70B en Q4 ocupa unos 43 GB según Ollama y por eso sigue requiriendo cuantización agresiva o descarga parcial a la CPU. Los precios de venta subieron cerca de un 64 % entre agosto y octubre, y los listados de segunda mano quedan por encima de los de nuevas.',
          '**Por qué comprar en este rango:** necesitas modelos de 33B o 70B, ejecutas inferencia en lotes, o quieres una tarjeta que no necesite reemplazarse en años.',
          '**Por qué saltarse este rango:** para modelos de 7B-14B es excesivo — el rango alto ofrece respuestas instantáneas en esos tamaños por menos de la mitad del precio y el consumo energético.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NVIDIA indica para la RTX 5090 un TGP de 575 W, con 1000 W de potencia de sistema requerida (configuración con Ryzen 9 9950X) y 850 W como mínimo en su comprobador de fuentes (consulta su página de la RTX 5090 en Fuentes). Una fuente de alimentación subdimensionada puede ceder bajo carga, así que inclúyela en el presupuesto de la compra. Esto no es un consejo de seguridad eléctrica; sigue las indicaciones del fabricante de la tarjeta sobre fuente y cables.',
          },
          {
            type: 'note',
            text: 'Con los precios de segunda mano observados de ~$2.575-3.010 por RTX 4090 (anuncios vendidos de InsiderLLM, actualizado el 2026-10-15), un par cuesta unos $5.150-6.020, más que una sola RTX 5090 (~$4.500-4.900 nueva), así que la tarjeta única es la configuración de 70B más sencilla.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'Ver precio de la RTX 4090 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'Ver precio de la RTX 5090 en Amazon',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'Requisitos de GPU para LLMs locales: ¿cuánta VRAM necesitas?',
        content:
          '**En cuantización Q4_K_M, un modelo necesita aproximadamente 0,6 GB de VRAM por cada mil millones de parámetros, más 2-4 GB para contexto y sobrecarga de herramientas.** Esa fórmula se corresponde directamente con los cuatro rangos.',
        items: [
          '**Modelos de 7B — 8-9 GB:** caben en cualquier rango. Una tarjeta de 12 GB deja margen cómodo.',
          '**Modelos de 13-14B — 11-13 GB:** necesitan 16 GB en la práctica una vez contados el contexto y las herramientas. Rango medio y superior (RTX 5060 Ti 16 GB o mejor).',
          '**Modelos de 22B — 14-16 GB:** ajustado en una tarjeta de 16 GB; cómodo desde el rango alto en adelante.',
          '**Modelos de 33B — 19-22 GB:** necesitan una tarjeta de 24 GB. Territorio de la RTX 4090.',
          '**Modelos de 70B — unos 43 GB en Q4 (Llama 3.3 70B, según Ollama):** superan cualquier tarjeta individual de aquí; la RTX 5090 32 GB solo se acerca con cuantización agresiva o descarga parcial a la CPU, de lo contrario planifica una configuración de doble GPU. Una sola tarjeta de 24 GB no puede alojar un modelo de 70B en Q4.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La longitud del contexto es un costo oculto de VRAM — los prompts largos y las ventanas de contexto grandes consumen VRAM además de los pesos del modelo. Deja siempre 2-4 GB de margen. Para el método completo, consulta la guía de requisitos de VRAM enlazada en Lectura relacionada.',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Por qué subieron los precios de GPU en 2026',
        content:
          '**Los precios de GPU subieron marcadamente en 2026, empujando las tarjetas de consumo hasta unas 2,5 veces por encima de su precio de lista original (RTX 5090; unas 1,35 a 1,45 veces en la RTX 5060 Ti y la RTX 5070 Ti); las fuentes discrepan sobre la causa.** Esto cambia el cálculo de compra, así que planifica en torno a ello en lugar de los precios de lanzamiento.',
        items: [
          '**No hay una causa única establecida.** Entre los factores citados están el suministro de DRAM/GDDR7, la demanda de los centros de datos de IA y cambios de producción reportados; las fuentes discrepan sobre cuánto aporta cada uno. [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) y [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) consideran la memoria parte de la explicación; BuySellRAM dice que no puede ser la mayor parte, y que sus datos no separan la memoria del suministro, la asignación y la demanda.',
          '**La RTX 5090 es el ejemplo más claro:** un precio de lanzamiento de $1.999, pero ~$4.921 como precio de venta mínimo en los datos de BuySellRAM — unas 2,5 veces, y un 64 % más que en agosto.',
          '**Las tarjetas más pequeñas también subieron, en distinta medida.** La RTX 5060 Ti 16 GB se anuncia cerca de un 44 % por encima de su precio de lista de $429 y la RTX 5070 Ti cerca de un 35 % por encima de $749, aunque ambas llevan 16 GB.',
          '**La segunda mano ya no es automáticamente más barata.** En los datos de precios de venta de BuySellRAM, los listados de segunda mano de RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti y RTX 5070 Ti estaban al nivel de los nuevos o por encima, y la RTX 3060 12 GB de segunda mano subió cerca de un 31 % desde agosto. Compara ambas y prefiere vendedores con devoluciones.',
          '**No cuentes con un relanzamiento.** Se ha informado de que las RTX 50 Super de NVIDIA están retrasadas indefinidamente por el suministro de memoria (NVIDIA no lo ha confirmado). **Decisión:** si puedes esperar, observa si los precios bajan; si no puedes, adquiere la tarjeta más pequeña que se adapte a tu modelo objetivo.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Los precios de GPU en 2026 son hasta unas 2,5 veces superiores al precio de lista (RTX 5090; unas 1,35 a 1,45 veces en la RTX 5060 Ti y la RTX 5070 Ti); entre los factores citados están el suministro de DRAM/GDDR7 y la demanda de los centros de datos de IA, y las fuentes discrepan sobre el peso de cada uno, por lo que un comprador de LLMs locales debería comparar los precios de nuevas y de segunda mano y comprar la tarjeta más pequeña que se adapte al modelo objetivo.',
          },
          {
            type: 'plain-terms',
            text: 'Las tarjetas no mejoraron, pero se encarecieron, y las fuentes discrepan sobre cuánto se debe a la memoria y cuánto a la demanda o la asignación de suministro. Hasta que los precios bajen, trata el precio de lista como un número histórico, compara nuevas y de segunda mano, y no pagues por más VRAM de la que tu modelo realmente necesita.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Diagrama de decisión: elige tu GPU en cuatro preguntas',
        content:
          '**Cuatro preguntas, en orden, llevan a la mayoría de los compradores a una tarjeta.**',
        items: [
          '**1. ¿Cuál es el modelo más grande que quieres ejecutar?** 7B: rango de presupuesto. 14B: rango medio (una tarjeta de 16 GB). 22B: rango alto. 33B: RTX 4090. 70B: RTX 5090 o doble GPU.',
          '**2. ¿Cuál es tu techo de presupuesto absoluto?** Por debajo de ~$400: RTX 3060 12 GB. Por debajo de ~$700: RTX 5060 Ti 16 GB o una RTX 4060 Ti 16 GB de segunda mano. ~$900-1.200: RTX 4070 Ti Super, RTX 5070 Ti o RTX 4080 Super. $2.000+: RTX 4090 o RTX 5090.',
          '**3. ¿NVIDIA o AMD?** Elige NVIDIA a menos que ya tengas hardware AMD o encuentres un descuento considerable en la RX 7800 XT — CUDA puede ahorrar tiempo de configuración frente a ROCm.',
          '**4. ¿Tu fuente de alimentación tiene margen?** Las tarjetas por encima del rango medio necesitan 285-575 W; confirma tu fuente de alimentación y la refrigeración del chasis antes de comprar hardware de rango entusiasta.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige una GPU para LLMs locales respondiendo primero al tamaño de modelo más grande, segundo al techo de presupuesto, tercero a NVIDIA frente a AMD, y por último al margen de la fuente de alimentación.',
          },
          {
            type: 'plain-terms',
            text: 'Empieza con el modelo más grande que realmente quieres ejecutar y deja que eso establezca tu rango. Solo entonces mira el precio, la marca y si tu fuente de alimentación puede manejar la tarjeta. Hacerlo en el orden contrario es como la gente gasta de más o compra una tarjeta que no puede ejecutar su modelo.',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-es.webp',
        imageCaption:
          'Flujo de decisión de cuatro preguntas para elegir una GPU de LLM local: el tamaño del modelo objetivo más grande establece el rango, el techo de presupuesto acota la elección, NVIDIA frente a AMD decide la marca, y el margen de la fuente de alimentación confirma la elección del rango entusiasta.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Precios regionales y dónde comprar',
        content:
          '**Los precios de GPU varían por región — los precios de esta guía son cifras de EE. UU. y los precios en la UE incluyen IVA.** Los enlaces de abajo son simples enlaces de búsqueda de productos por región; no llevan etiquetas de afiliado y no generan comisión.',
        items: [
          '**España:** Amazon.es y PcComponentes tienen el stock más amplio. Las tarjetas de segunda mano RTX 3060 y RTX 4090 se encuentran en Wallapop y Milanuncios.',
          '**México:** Amazon.com.mx y Mercado Libre son las referencias principales; los precios incluyen IVA y pueden variar por tipo de cambio.',
          '**Argentina, Colombia y resto de Latinoamérica:** Mercado Libre es el marketplace de referencia en toda la región; verifica siempre los precios actualizados ya que el tipo de cambio afecta significativamente el costo final.',
          '**Comparador de precios:** Idealo.es es el estándar para comparar precios de tarjetas nuevas en España — verifica ahí la fuente más barata actualmente.',
          '**Disponibilidad:** las tarjetas de gama alta (RTX 4090, RTX 5090) están intermitentemente agotadas en 2026, y la RTX 5090 suele estar agotada al precio de lista; espera precios fluctuantes y verifica varios distribuidores.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Debido a la subida de 2026, cada cifra de precio en esta guía es un dato en rápido cambio. Abre siempre el listado actual del minorista antes de comprar — los precios han cambiado semana a semana.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'GPUs para LLMs locales (EE. UU.)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs en Amazon EE. UU.',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'GPUs para LLMs locales (Alemania)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs en Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'GPUs para LLMs locales (Francia)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs en Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'GPUs para LLMs locales (Japón)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs en Amazon.co.jp',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al comprar una GPU para LLMs locales',
        items: [
          '**Comprar por tokens por segundo en lugar de VRAM.** Una tarjeta más rápida que no puede alojar tu modelo es inútil. Confirma primero que el modelo cabe en VRAM con 2-4 GB de margen, luego compara la velocidad dentro de ese rango.',
          '**Comprar la RTX 3060 de 6 GB en lugar de la versión de 12 GB.** Comparten nombre pero no caso de uso — la tarjeta de 6 GB tiene un tope de modelos de 3B. Confirma siempre la variante de 12 GB en el listado.',
          '**Asumir que la RTX 4060 Ti 16 GB es más rápida que la versión de 8 GB.** No lo es — es el mismo die de GPU con más memoria. Cómprala por la capacidad (modelos de 14B), no por la velocidad; la RTX 5060 Ti 16 GB es la opción de 16 GB más rápida.',
          '**Anclarse al precio de lista en lugar del precio actual.** La subida de 2026 significa que los precios de lanzamiento ya no reflejan la realidad. Haz el presupuesto con el precio en vivo del minorista, y compara nueva frente a segunda mano — la segunda mano ya no es siempre más barata.',
          '**Ignorar los requisitos de la fuente de alimentación.** Una RTX 5090 tiene un TGP de 575 W, y NVIDIA indica 1000 W de potencia de sistema requerida y 850 W como mínimo en su comprobador de fuentes. Una tarjeta que falla bajo carga es peor que una tarjeta más lenta que funciona establemente.',
          '**Elegir AMD sin presupuestar el tiempo de configuración.** La RX 6700 XT y la RX 7800 XT son buena relación calidad-precio, pero la configuración de ROCm cuesta horas. Pondera ese tiempo frente al dinero ahorrado frente a una tarjeta NVIDIA.',
          '**Comprar en exceso para modelos de 7B.** Si los modelos de 7B cubren tu caso de uso, una RTX 4090 es dinero y energía desperdiciados. Adapta el rango al modelo, no al presupuesto que por casualidad tienes.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          'Siete errores comunes al comprar una GPU para LLMs locales: comprar por velocidad sobre VRAM, confundir la RTX 3060 de 6 GB y 12 GB, esperar que la RTX 4060 Ti de 16 GB sea más rápida, anclarse al precio de lista, ignorar las necesidades de la fuente de alimentación, no presupuestar el tiempo de configuración de AMD y comprar en exceso para modelos de 7B.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Especificaciones NVIDIA GeForce RTX Serie 40](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — Cifras oficiales de capacidad de VRAM y consumo (TGP) para la RTX 4060 Ti, 4070 Ti Super, 4080 Super y 4090.',
          '[Especificaciones NVIDIA GeForce RTX 5090](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — Cifras oficiales de la RTX 5090: 32 GB de VRAM GDDR7, 575 W de TGP, 1000 W de potencia de sistema requerida (configuración con Ryzen 9 9950X) y 850 W como mínimo en el comprobador de fuentes.',
          '[BuySellRAM — Actualización del mercado de GPU de consumo de NVIDIA](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — precios de venta mínimos en EE. UU., nuevos y de segunda mano, del 11 de octubre de 2026 frente al 8 de agosto de 2026, usados para la mayoría de los precios de esta guía (precios de venta, no ventas completadas).',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — rangos de precio de tienda y de anuncios vendidos en eBay para la RTX 4090 y la RTX 5090 (actualizado el 2026-10-15); las cifras de la RTX 4090 y la RTX 5090 de esta guía combinan estos rangos con los precios de venta de BuySellRAM.',
          '[NVIDIA Newsroom — anuncio de la GeForce RTX 5060 Ti (2025-04-15)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — precio de lanzamiento de $429 para la RTX 5060 Ti 16 GB (8 GB: $379).',
          '[NVIDIA Newsroom — anuncio de la serie GeForce RTX 50 (2025-01-06)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — precio de lanzamiento de $749 para la RTX 5070 Ti.',
          '[Capital & Compute — Rastreador de precios Nvidia RTX 50](https://capitalandcompute.net/gpu-prices/nvidia/) — precio de lista frente a precio de mercado para la RTX 5090, RTX 5070 Ti y RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia retrasa indefinidamente las GeForce RTX 50 Super](https://www.club386.com/?p=129641) — informe (sin confirmar por NVIDIA) de que el relanzamiento RTX 50 Super se aplaza por el suministro de memoria.',
          '[Especificaciones AMD Radeon](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Cifras oficiales de VRAM y consumo para la RX 7800 XT y RX 6700 XT.',
          '[Marcador de llama.cpp: Llama 2 7B Q4_0 en CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) — resultados de llama-bench en tokens por segundo reportados por desarrolladores para RTX 3060, 4060 Ti (8 GB), 5060 Ti, 4070 Ti Super, 5070 Ti, 4080 Super, 4090 y 5090; las entradas provienen de distintos usuarios y compilaciones.',
          '[Ollama: Llama 3.3 70B](https://ollama.com/library/llama3.3) — la descarga del modelo de 70B figura con 43 GB, base de la cifra de VRAM del 70B en esta guía.',
          '[Mejores GPUs para LLMs locales 2026](/es/local-llms/best-gpus-for-local-llms) — el conjunto más amplio de benchmarks de GPU de este sitio.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es la GPU más barata para inferencia de LLM en 2026?',
            a: 'La NVIDIA RTX 3060 12 GB, a unos $320-400, es la tarjeta nueva de menor precio de esta guía que ejecuta bien la inferencia de LLMs locales. Sus 12 GB de VRAM alojan cualquier modelo de 7B y la mayoría de los de 13B en cuantización Q4, a unos 76 tokens por segundo en Llama 2 7B Q4_0 (dato reportado por desarrolladores). Una RX 6700 XT puede ser más barata en el mercado de segunda mano, pero el precio varía según el vendedor y requiere configuración de AMD ROCm. Los precios de la RTX 3060 nueva y de segunda mano están ahora cerca, así que compara ambas.',
          },
          {
            q: '¿Por qué los precios de GPU son tan altos en 2026?',
            a: 'No hay una causa única establecida. Entre los factores citados están el suministro de DRAM/GDDR7, la demanda de los centros de datos de IA y cambios de producción reportados, y las fuentes (InsiderLLM y BuySellRAM) discrepan sobre cuánto aporta cada uno; BuySellRAM dice que la memoria es parte de la explicación pero no puede ser la mayor parte. Las tarjetas se venden hasta unas 2,5 veces por encima de su precio de lista original (RTX 5090; unas 1,35 a 1,45 veces en la RTX 5060 Ti y la RTX 5070 Ti) — una RTX 5090 se lanzó a $1.999 pero se anuncia cerca de $4.500-4.900. Las tarjetas de segunda mano ya no escapan al aumento.',
          },
          {
            q: '¿Cuáles son los requisitos de GPU para ejecutar un LLM local?',
            a: 'En cuantización Q4_K_M, planifica aproximadamente 0,6 GB de VRAM por cada mil millones de parámetros más 2-4 GB de sobrecarga. Eso significa 8-9 GB para modelos de 7B, 11-13 GB para 14B, 19-22 GB para 33B, y unos 43 GB para 70B (Llama 3.3 70B en Q4, según Ollama). Una tarjeta de 12 GB cubre 7B cómodamente, una de 16 GB cubre 14B, y el 70B supera cualquier tarjeta individual de aquí: una RTX 5090 32 GB solo se acerca con cuantización agresiva o descarga parcial a la CPU, de lo contrario planifica una configuración de doble GPU.',
          },
          {
            q: '¿Cuál es la mejor tarjeta gráfica para LLMs locales?',
            a: 'La mejor tarjeta gráfica para LLMs locales es la que tiene VRAM suficiente para tu modelo objetivo dentro de tu presupuesto. Para modelos de 7B basta una RTX 3060 12 GB (~$320-400). Para modelos de 14B, una RTX 5060 Ti 16 GB (~$618) o una RTX 4060 Ti 16 GB de segunda mano es la elección de gama media. Para modelos de 33B necesitas una RTX 4090 24 GB, y para 70B solo la RTX 5090 32 GB se acerca, con cuantización agresiva o descarga parcial a la CPU (el 70B en Q4 ocupa unos 43 GB según Ollama). Las tarjetas NVIDIA son la opción con menos fricción porque CUDA suele funcionar sin configuración adicional.',
          },
          {
            q: '¿La RTX 4060 Ti 16 GB es más rápida que la versión de 8 GB?',
            a: 'No. La RTX 4060 Ti de 16 GB y 8 GB usa el mismo die de GPU, así que la velocidad de inferencia por token es similar — unos 64 tokens por segundo en modelos de 7B (cifra del marcador de llama.cpp para la tarjeta de 8 GB, reportada por desarrolladores). La versión de 16 GB compra capacidad, permitiéndote ejecutar modelos de 14B que no caben en 8 GB. Cómprala por VRAM, no por velocidad.',
          },
          {
            q: '¿Debo comprar NVIDIA o AMD para LLMs locales?',
            a: 'Compra NVIDIA a menos que ya tengas hardware AMD o encuentres un descuento considerable. NVIDIA CUDA suele funcionar con Ollama, LM Studio y llama.cpp sin configuración adicional. Las tarjetas AMD como la RX 6700 XT y RX 7800 XT ofrecen VRAM competitiva por dólar, pero el tiempo de configuración de ROCm varía según la distribución y la GPU; consulta la lista de GPUs compatibles de AMD.',
          },
          {
            q: '¿Puede una sola GPU ejecutar un modelo de 70B?',
            a: 'De las tarjetas de esta guía, solo la RTX 5090 32 GB se acerca, y solo con cuantización agresiva o descarga parcial a la CPU — un modelo de 70B en Q4 ocupa unos 43 GB según Ollama. Una RTX 4090 de 24 GB no puede alojar un modelo de 70B en Q4 por sí sola; la solución habitual es dos RTX 4090 para VRAM combinada, aunque con los precios usados en esta guía ese par cuesta aproximadamente lo mismo que una sola RTX 5090.',
          },
          {
            q: '¿Vale la pena la RTX 5090 frente a la RTX 4090 para LLMs locales?',
            a: 'Solo si específicamente necesitas más de 24 GB en una sola tarjeta, por ejemplo para acercarte a los modelos de 70B. La RTX 5090 tiene 32 GB de VRAM frente a los 24 GB de la RTX 4090, que es el factor decisivo. Para modelos de 7B-33B, la RTX 4090 aloja los mismos modelos; con los precios usados en esta guía la RTX 5090 cuesta aproximadamente entre 1,8 y 2,4 veces una RTX 4090, así que págala solo si los 8 GB extra resuelven un problema real.',
          },
          {
            q: '¿Qué fuente de alimentación necesito para estas GPUs?',
            a: 'Adapta la fuente de alimentación al rango: una unidad de 550 W es adecuada para la RTX 3060, 650-750 W para la RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super y RTX 5070 Ti, 850 W para la RTX 4090, y para la RTX 5090 (TGP de 575 W) NVIDIA indica 1000 W de potencia de sistema requerida (configuración con Ryzen 9 9950X) y 850 W como mínimo en su comprobador de fuentes. Las fuentes de alimentación subdimensionadas provocan inestabilidad bajo carga. Sigue las indicaciones del fabricante de la tarjeta y de la fuente; esto no es un consejo de seguridad eléctrica.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Consulta los requisitos completos de VRAM para cada tamaño de modelo](/es/local-llms/how-much-vram-local-llm) — el método completo de VRAM por tamaño de modelo detrás de la fórmula rápida de esta guía.',
          '[Compara más de 15 GPUs con benchmarks publicados de LLMs locales](/es/local-llms/best-gpus-for-local-llms) — el conjunto más amplio de benchmarks de GPU, incluyendo tarjetas más antiguas y de servidor más allá de estas diez.',
          '[Mira qué modelos corren en una RTX 3060 12 GB de presupuesto](/es/local-llms/best-budget-gpus-local-llm) — velocidades modelo por modelo para el rango de presupuesto, incluyendo la distinción entre 6 GB y 12 GB.',
          '[Compara la RTX 5090 y la RTX 4090 cara a cara](/es/local-llms/rtx-5090-vs-rtx-4090-local-llm) — cuándo vale la pena actualizar a la RTX 5090 y cuándo la RTX 4090 es suficiente.',
          '[Entiende cómo la cuantización Q4_K_M determina el costo en VRAM](/es/local-llms/llm-quantization-explained) — por qué Q4_K_M es el valor predeterminado y cómo la cuantización cambia el cálculo de VRAM.',
          '[¿Mejor GPU por menos de $1,000 para inferencia de LLM local?](/es/prompt-bites/best-gpu-under-1000-local-llm) — el nivel de 24 GB: RTX 4090 usada frente a RTX 4080 SUPER nueva.',
          '[RTX 4060 vs RTX 3060 12GB: ¿cuál es mejor para LLMs locales?](/es/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — por qué más VRAM supera a una generación más nueva en esta tarea.',
          '[¿Mejor GPU Intel Arc para LLMs locales?](/es/prompt-bites/best-intel-arc-gpu-local-llm) — la Arc B580 como alternativa más económica y las concesiones de software que conlleva.',
          '[¿Mejor configuración RTX 4090 para modelos de 70B?](/es/prompt-bites/best-rtx-4090-setup-70b-models) — lo que realmente se necesita para ejecutar un modelo de 70B en la tarjeta insignia de esta guía.',
          '[¿Mejor LLM local para un MacBook Air sin eGPU?](/es/prompt-bites/best-local-llm-macbook-air-no-egpu) — por qué una eGPU no puede sustituir a las GPU de esta guía en Apple Silicon.',
          '[¿Mejor portátil Windows para LLMs locales por menos de $1,500?](/es/prompt-bites/best-windows-laptop-local-llm-under-1500) — el equivalente en GPU móvil de los niveles de escritorio de esta guía.',
          '[¿Qué hardware necesitas para hacer fine-tuning de un modelo de 7B localmente?](/es/prompt-bites/fine-tuning-7b-model-locally-hardware) — cuáles de estas GPU también sirven para fine-tuning con QLoRA, no solo para inferencia.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejor tarjeta gráfica para LLMs locales: guía de GPUs 2026',
      description: 'Diez GPUs comparadas para LLMs locales en cuatro presupuestos: de la RTX 3060 a la RTX 5090. VRAM, tokens/s, consumo energético y precios 2026 — con el tamaño de modelo que corre cada rango.',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-gpu-buying-guide-local-llm-2026',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-11-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Melhor placa de vídeo para LLMs locais: guia de GPUs 2026',
    seoTitle: 'Melhor placa de vídeo para LLMs locais 2026: até RTX 5090',
    intro:
      'A maioria dos conselhos sobre GPUs para LLMs locais otimiza o número errado. A velocidade em tokens por segundo decide a rapidez com que um modelo responde, mas a VRAM decide se o modelo executa — e um modelo que não cabe na memória é infinitamente mais lento do que um que cabe. Este guia compara dez placas de vídeo de consumo em quatro faixas de preço pelos números que realmente determinam uma compra: capacidade de VRAM, velocidade de inferência, consumo de energia e preço. Uma ressalva sobre o preço: os preços de GPUs dispararam em 2026 (entre os fatores citados estão o fornecimento de memória e a demanda de data centers de IA; as fontes divergem sobre o peso de cada um) — uma RTX 5090 agora é anunciada por cerca de 2,5 vezes o preço de lista — então a maioria dos preços aqui são os menores preços pedidos nos EUA dos dados da BuySellRAM vinculados em Fontes, e as faixas da RTX 4090 e da RTX 5090 também usam dados de anúncios vendidos da InsiderLLM; confirme o preço atual antes de comprar.',
    metaDescription:
      'Qual placa de vídeo para LLMs locais? Dez GPUs comparadas por VRAM, velocidade, consumo e preços de 2026, da barata à RTX 5090 e requisitos por modelo.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-pt.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — dez placas de vídeo, quatro orçamentos, uma regra: compre pela VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      'Compradores que escolhem uma GPU especificamente para executar LLMs locais, decidindo por faixa de orçamento e tamanho de modelo alvo. Pressupõe familiaridade com quantização e VRAM como restrição, mas não com SKUs de GPU atuais específicos.',
    readTime: '14 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      'melhor gpu para llm local 2026',
      'guia de compra gpu llm local',
      'rtx 3060 vs rtx 4090 llm local',
      'quanta vram preciso para llm local',
      'gpu mais barata para llm local',
      'melhor placa de vídeo para llm local',
      'requisitos de gpu para llm local',
    ],
    leadAnswerBlock:
      '**A melhor placa de vídeo para LLMs locais é aquela cuja VRAM se encaixa no seu modelo, não a placa mais rápida. Uma RTX 3060 12 GB executa qualquer modelo 7B, uma placa de 16 GB (RTX 5060 Ti, RTX 4060 Ti ou RTX 5070 Ti) lida com modelos 14B, uma RTX 4090 24 GB lida com modelos 33B, e, entre as placas deste guia, só a RTX 5090 32 GB chega perto de um modelo 70B, e apenas com quantização agressiva ou descarga parcial para a CPU (o 70B em Q4 tem cerca de 43 GB segundo a Ollama).**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor placa de vídeo para executar LLMs locais em 2026?',
        answer:
          'Compre pela VRAM, depois pela velocidade. Uma RTX 3060 12 GB (~$320–400) é a escolha econômica e executa qualquer modelo 7B. Uma placa de 16 GB é a escolha intermediária para modelos 14B — uma RTX 5060 Ti 16 GB (~$620 nova) ou uma RTX 4060 Ti 16 GB usada (~$650). Uma RTX 4090 24 GB executa modelos 33B, e, entre as placas deste guia, só a RTX 5090 32 GB (~$4.500-4.900) chega perto do 70B, e apenas com quantização agressiva ou descarga parcial para a CPU (o 70B em Q4 tem cerca de 43 GB segundo a Ollama). Observe que os preços de 2026 estão bem acima do preço de lista.',
        bullets: [
          'Econômico: RTX 3060 12 GB, ~$320–400 nova ou usada, executa qualquer modelo 7B a ~76 tok/s (Llama 2 7B Q4_0, dado relatado por desenvolvedores)',
          'Intermediário: RTX 5060 Ti 16 GB, ~$620 nova ([preço de lista $429](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)), executa modelos 14B com folga',
          'Entusiasta: RTX 5090 32 GB, ~$4.500-4.900, única placa de 32 GB aqui; 70B (cerca de 43 GB em Q4) exige quantização agressiva ou descarga',
          'Os preços de GPU em 2026 são até cerca de 2,5x acima do preço de lista (RTX 5090; cerca de 1,35–1,45x na RTX 5060 Ti e na RTX 5070 Ti) — compare nova e usada antes de comprar',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Escolha do editor', anchor: '#editors-choice' },
      { label: 'Tabela comparativa de GPUs', anchor: '#comparison-table' },
      { label: 'Qual GPU você deve comprar?', anchor: '#which-gpu' },
      { label: 'Faixa econômica ($320–400)', anchor: '#budget-tier' },
      { label: 'Faixa intermediária ($620–790)', anchor: '#mid-tier' },
      { label: 'Faixa alta ($900–1200)', anchor: '#high-tier' },
      { label: 'Faixa entusiasta ($2000+)', anchor: '#enthusiast-tier' },
      { label: 'Requisitos de GPU: quanta VRAM você precisa?', anchor: '#vram-needs' },
      { label: 'Por que os preços de GPU subiram em 2026', anchor: '#price-surge' },
      { label: 'Fluxograma de decisão', anchor: '#decision-flowchart' },
      { label: 'Preços regionais e onde comprar', anchor: '#where-to-buy' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**A VRAM é a restrição determinante.** Um modelo que não cabe na VRAM falha ao carregar ou transborda para a RAM do sistema e fica lento demais para uso interativo. Escolha a faixa cuja VRAM se encaixa no seu modelo alvo e depois otimize a velocidade dentro dessa faixa.',
          '**Os preços dispararam em 2026.** Os preços de GPU estão até cerca de 2,5 vezes acima do preço de lista (RTX 5090; cerca de 1,35 a 1,45 vezes na RTX 5060 Ti e na RTX 5070 Ti). Entre os fatores citados estão o fornecimento de DRAM/GDDR7, a demanda de data centers de IA e mudanças de produção noticiadas; as fontes divergem sobre quanto cada um contribui. Uma RTX 5090 é anunciada por ~$4.500-4.900, não pelo preço de lançamento de $1.999, e os preços subiram de novo entre agosto e outubro. Trate os preços aqui como uma captura — a maioria são preços pedidos nos EUA, e as faixas da RTX 4090 e da RTX 5090 também usam dados de anúncios vendidos — e compare nova e usada antes de comprar.',
          '**Escolha econômica: NVIDIA RTX 3060 12 GB** (~$320–400, nova e usada agora custam quase o mesmo) — executa qualquer modelo 7B (~76 tok/s em Llama 2 7B Q4_0, dado relatado por desenvolvedores) e a maioria dos modelos 13B em Q4.',
          '**Escolha intermediária: NVIDIA RTX 5060 Ti 16 GB** (~$618 nova, ~$649 usada pedida) — 16 GB de VRAM lida com modelos 14B com margem de contexto, e sua largura de banda de memória de 448 GB/s (~91 tok/s, dado relatado por desenvolvedores) é maior que os 288 GB/s da RTX 4060 Ti 16 GB mais antiga (~64 tok/s na versão de 8 GB, dado relatado por desenvolvedores). Usadas, as duas custam quase o mesmo (~$650); o piso de ~$790 da RTX 4060 Ti 16 GB nova vem de apenas três anúncios segundo a BuySellRAM.',
          '**Escolha de alta faixa: NVIDIA RTX 4080 Super 16 GB** (~$1.200) — a placa de 16 GB de maior preço aqui (~148 tok/s, dado relatado por desenvolvedores). A RTX 4070 Ti Super (~$900) e a RTX 5070 Ti (~$1.008) custam menos e podem ter melhor custo-benefício; a RTX 5070 Ti é mais rápida nas mesmas medições de desenvolvedores (~177 tok/s).',
          '**Escolha entusiasta: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — a RTX 4090 (~$2.000+ nova, ~$2.575-3.010 usada) executa modelos 33B; entre as placas deste guia, só a RTX 5090 (~$4.500-4.900) chega perto do 70B, e apenas com quantização agressiva ou descarga parcial para a CPU (o 70B em Q4 tem cerca de 43 GB segundo a Ollama).',
          '**A AMD é viável, mas gera mais atrito.** A RX 6700 XT (12 GB) e a RX 7800 XT (16 GB) oferecem VRAM a preços competitivos, mas o tempo de configuração do ROCm varia conforme a distribuição e a placa.',
          '**O consumo de energia escala com a faixa.** Uma RTX 3060 consome 170 W; uma RTX 5090 tem TGP de 575 W, e a [NVIDIA indica](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) 1000 W de potência de sistema exigida (configuração com Ryzen 9 9950X) e 850 W como mínimo no seu verificador de fontes. Inclua a fonte de alimentação no orçamento junto com a placa.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Faixa econômica ($320–400):** RTX 3060 12 GB ou RX 6700 XT 12 GB — executa modelos 7B e a maioria dos 13B.',
          '**Faixa intermediária ($620–790):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB ou RX 7800 XT 16 GB — executa modelos 14B confortavelmente.',
          '**Faixa alta ($900–1.200):** RTX 4080 Super, RTX 5070 Ti ou RTX 4070 Ti Super, todas de 16 GB — inferência rápida de 14B, trabalho leve de 22B.',
          '**Faixa entusiasta ($2.000+):** RTX 4090 24 GB ou RTX 5090 32 GB — modelos 33B, e 70B apenas com quantização agressiva ou offload parcial para a CPU na 5090.',
          '**Regra geral de VRAM em Q4_K_M:** aproximadamente 0,6 GB por bilhão de parâmetros, mais 2–4 GB para contexto e ferramentas.',
          '**Faixa de consumo de energia:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Realidade de preços em 2026:** os preços estão até cerca de 2,5 vezes acima do preço de lista (RTX 5090; cerca de 1,35 a 1,45 vezes na RTX 5060 Ti e na RTX 5070 Ti) e as fontes divergem sobre as causas; placas usadas já não custam menos que as novas de forma confiável, então compare as duas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Escolha do editor (16 GB premium): RTX 4080 Super',
        highlight: true,
        content:
          '**Para compradores que querem uma placa premium de 16 GB e podem gastar mais de $1.000, a NVIDIA RTX 4080 Super 16 GB é a nossa escolha do editor — uma escolha para uma configuração premium de 16 GB, não por custo-benefício.** Seus 16 GB de VRAM lidam com qualquer modelo 14B com margem de contexto, ela chega a cerca de 148 tok/s em Llama 2 7B Q4_0 (dado relatado por desenvolvedores), e a ~$1.200 é a placa de 16 GB de maior preço aqui. A RTX 4070 Ti Super (~$900, ~132 tok/s) e a RTX 5070 Ti (~$1.008, ~177 tok/s) custam cerca de $300 e ~$190 a menos e podem ter melhor custo-benefício; a RTX 5070 Ti é mais rápida nas mesmas medições de desenvolvedores. Se o seu orçamento está fixo abaixo de $700, a RTX 5060 Ti 16 GB é a escolha de custo-benefício. Gaste mais apenas se precisar especificamente de modelos 33B ou 70B.',
        callouts: [
          {
            type: 'note',
            text: 'Esta escolha do editor é uma escolha premium de 16 GB, não um ranking de preço-capacidade: a RTX 4070 Ti Super e a RTX 5070 Ti custam menos e podem ter melhor custo-benefício. O PromptQuorum não está inscrito em nenhum programa de afiliados e os links abaixo não carregam tags de afiliado — são links de referência simples que não geram comissão.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Ver preço do RTX 4080 Super na Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Ver preço do RTX 4080 Super na Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Como as dez GPUs se comparam para LLMs locais em 2026',
        content:
          'As cifras de VRAM e consumo de energia são especificações do fabricante. As velocidades marcadas «relatado» são resultados do llama-bench relatados por desenvolvedores (Llama 2 7B Q4_0, CUDA) do placar do llama.cpp vinculado em Fontes; as entradas vêm de usuários e builds diferentes e não foram medidas novamente por nós. O valor da RTX 4060 Ti 16 GB é o resultado da placa de 8 GB (mesmo die de GPU e 288 GB/s de largura de banda). A RX 6700 XT e a RX 7800 XT não têm resultado lá, então suas velocidades são estimativas aproximadas (est.) escaladas a partir da largura de banda de memória em relação aos resultados medidos. A maioria dos preços são os menores preços pedidos nos EUA dos dados da BuySellRAM vinculados; as faixas da RTX 4090 e da RTX 5090 os combinam com as faixas de varejo e de anúncios vendidos da InsiderLLM (atualizado em 2026-10-15). Os preços estão até cerca de 2,5 vezes acima do preço de lista (RTX 5090; cerca de 1,35 a 1,45 vezes na RTX 5060 Ti e na RTX 5070 Ti), então verifique antes de comprar (veja a data de atualização desta página). A página vinculada de GPUs econômicas usa estimativas anteriores para algumas placas (por exemplo, cerca de $290–330 usada para a RTX 3060 12 GB), então os números podem diferir um pouco entre as duas páginas.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para LLMs locais, a VRAM de uma GPU decide quais modelos você pode executar e seus tokens por segundo decidem a rapidez com que respondem — compre pelo primeiro, depois otimize o segundo.',
          },
          {
            type: 'plain-terms',
            text: 'Pense na VRAM como o tamanho de uma mesa e no modelo como o que você coloca nela. Uma GPU mais rápida limpa a mesa mais depressa, mas se o modelo não cabe na mesa de jeito nenhum, a velocidade nunca entra em cena. Escolha primeiro a faixa cuja mesa é grande o suficiente.',
          },
        ],
        columns: ['GPU', 'VRAM', 'Velocidade (7B Q4)', 'Consumo', 'Preço (EUA, 2026)', 'Melhor para'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Velocidade (7B Q4)': '~76 tok/s (relatado)',
            'Consumo': '170 W',
            'Preço (EUA, 2026)': '$320–400 nova / $320–350 usada',
            'Melhor para': 'Entrada econômica — qualquer modelo 7B',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Velocidade (7B Q4)': '~65–80 tok/s (est.)',
            'Consumo': '230 W',
            'Preço (EUA, 2026)': 'Varia por vendedor — confira ao vivo',
            'Melhor para': 'AMD 12 GB, aceita configuração ROCm',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~64 tok/s (placa 8 GB, relatado)',
            'Consumo': '165 W',
            'Preço (EUA, 2026)': '~$790 nova / ~$650 usada',
            'Melhor para': 'Faixa intermediária — modelos 14B, baixo consumo',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~91 tok/s (relatado)',
            'Consumo': '180 W',
            'Preço (EUA, 2026)': '$618 nova / $649 usada',
            'Melhor para': 'Faixa intermediária — 14B, geração atual',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~90–115 tok/s (est.)',
            'Consumo': '263 W',
            'Preço (EUA, 2026)': 'Preços AMD: consulte as listagens atuais',
            'Melhor para': '16 GB na AMD, aceita configuração ROCm',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~132 tok/s (relatado)',
            'Consumo': '285 W',
            'Preço (EUA, 2026)': '$900 nova / $920 usada',
            'Melhor para': 'Rápida em 14B, menor consumo de energia',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~177 tok/s (relatado)',
            'Consumo': '300 W',
            'Preço (EUA, 2026)': '$1.008 nova / $1.050 usada',
            'Melhor para': 'Rápida em 14B, 16 GB com bom custo-benefício',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~148 tok/s (relatado)',
            'Consumo': '320 W',
            'Preço (EUA, 2026)': '$1.200 nova / $1.149 usada',
            'Melhor para': 'Escolha do editor — 16 GB premium',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Velocidade (7B Q4)': '~186 tok/s (relatado)',
            'Consumo': '450 W',
            'Preço (EUA, 2026)': '~$2.000+ nova / $2.575-3.010 usada',
            'Melhor para': 'Modelos 33B, GPU dupla para 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Velocidade (7B Q4)': '~290 tok/s (relatado)',
            'Consumo': '575 W',
            'Preço (EUA, 2026)': '$4.500-4.921 nova / $5.880-6.350 usada',
            'Melhor para': '70B apenas com quantização agressiva ou offload',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-pt.webp',
        imageCaption:
          'Dez placas de vídeo de consumo para LLMs locais comparadas por VRAM, velocidade de inferência 7B Q4, consumo de energia e preço atual nos EUA em quatro faixas de orçamento. A VRAM sobe de 12 GB (RTX 3060) a 32 GB (RTX 5090); compre pelo tamanho de modelo que você precisa antes de otimizar a velocidade.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Qual GPU você deve comprar?',
        content:
          '**Seu maior modelo alvo decide sua faixa; seu orçamento decide entre NVIDIA e AMD dentro dessa faixa.** Encontre a linha que corresponde à sua situação.',
        columns: ['Sua situação', 'Compre esta'],
        rows: [
          { 'Sua situação': 'Tenho menos de $400 e quero executar modelos 7B', 'Compre esta': 'RTX 3060 12 GB' },
          { 'Sua situação': 'Acho uma AMD de 12 GB barata e aceito a configuração', 'Compre esta': 'RX 6700 XT (confira preços)' },
          { 'Sua situação': 'Quero executar modelos 14B com orçamento de energia apertado', 'Compre esta': 'RTX 5060 Ti 16 GB (ou RTX 4060 Ti 16 GB usada)' },
          { 'Sua situação': 'Quero uma placa que execute 14B rápido e dure vários anos', 'Compre esta': 'RTX 5070 Ti ou RTX 4070 Ti Super 16 GB' },
          { 'Sua situação': 'Quero uma placa premium de 16 GB e o preço é secundário', 'Compre esta': 'RTX 4080 Super 16 GB (a 5070 Ti custa menos)' },
          { 'Sua situação': 'Preciso de modelos 33B ou planejo uma futura configuração de GPU dupla com 70B', 'Compre esta': 'RTX 4090 24 GB' },
          { 'Sua situação': 'Preciso de uma única placa para modelos 70B (quantização agressiva ou descarga parcial)', 'Compre esta': 'RTX 5090 32 GB' },
          { 'Sua situação': 'Estou inseguro e quero a primeira GPU mais segura', 'Compre esta': 'RTX 3060 12 GB — atualize depois se a superar' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Faixa econômica ($320–400): RTX 3060 12 GB e RX 6700 XT',
        content:
          '**A faixa econômica executa qualquer modelo 7B e a maioria dos modelos 13B — e para a maioria dos usuários iniciantes em LLMs locais, essa é toda a capacidade necessária.** A RTX 3060 12 GB é a escolha recomendada; a RX 6700 XT é a alternativa da AMD se você aceitar o atrito de configuração. Os preços nesta faixa subiram ao longo de 2026, e uma RTX 3060 usada agora custa quase o mesmo que uma nova — compare as duas.',
        items: [
          '**RTX 3060 12 GB (~$320–400 nova, ~$320–350 usada):** 12 GB de VRAM, 170 W, ~76 tok/s em Llama 2 7B Q4_0 (dado relatado por desenvolvedores). Executa Ministral 3 8B, Qwen3 8B, DeepSeek-R1 7B e a maioria dos modelos 13B. A variante de 12 GB é a que você deve comprar — evite a variante de 6 GB, que se limita a modelos 3B. O estoque novo é limitado e uma placa usada já não economiza muito, então compre a que sair mais barata, com direito a devolução.',
          '**RX 6700 XT (usada, preço varia por vendedor):** 12 GB de VRAM, 230 W, cerca de 65–80 tok/s em modelos 7B (estimativa aproximada escalada da largura de banda de memória, não medida). Confira os anúncios atuais; ela depende do AMD ROCm, que adiciona tempo de configuração.',
          '**Por que comprar nesta faixa:** menor custo de entrada, baixo consumo de energia na RTX 3060 e VRAM suficiente para modelos 7B–13B que cobrem chat geral, assistência de código e resumo.',
          '**Por que pular esta faixa:** se você já sabe que quer modelos 14B ou maiores, a faixa econômica vai frustrá-lo em semanas — comece pela faixa intermediária.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Compre a RTX 3060 especificamente na versão de 12 GB. A RTX 3060 de 6 GB parece similar nos anúncios, mas só cabe modelos 3B — metade da contagem de parâmetros é a diferença entre um assistente utilizável e um brinquedo.',
          },
          {
            type: 'warning',
            text: 'A RX 6700 XT pode ser uma entrada econômica, mas o tempo de configuração do ROCm no Linux varia conforme a distribuição e a placa; consulte primeiro a lista de GPUs compatíveis da AMD. Se a economia em relação a uma RTX 3060 for pequena, compre a placa NVIDIA.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'Ver preço da RTX 3060 12GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'Ver preço da RX 6700 XT na Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Faixa intermediária ($620–790): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB e RX 7800 XT',
        content:
          '**A faixa intermediária existe por uma razão: 16 GB de VRAM lida com modelos 14B que placas de 12 GB não conseguem acomodar com contexto utilizável.** Se modelos de classe 14B são seu objetivo, esta é a faixa mais barata que os executa adequadamente. A RTX 5060 Ti 16 GB é a escolha da geração atual e, com os preços pedidos usados neste guia, também a opção NVIDIA de 16 GB de menor preço; a RTX 4060 Ti 16 GB custa quase o mesmo usada (~$650) e mais nova (~$790, de apenas três anúncios da BuySellRAM).',
        items: [
          '**RTX 5060 Ti 16 GB (~$618 nova / ~$649 usada pedida, preço de lista $429):** 16 GB GDDR7, 180 W, largura de banda de memória de 448 GB/s. Não a medimos para este guia; o placar do llama.cpp indica cerca de 91 tok/s em Llama 2 7B Q4_0 (dado relatado por desenvolvedores). Executa confortavelmente modelos da classe Qwen3 14B. Os preços ficaram cerca de 44% acima do preço de lista em 2026.',
          '**RTX 4060 Ti 16 GB (~$790 nova / ~$650 usada, preços pedidos):** 16 GB de VRAM, 165 W, cerca de 64 tok/s em modelos 7B (valor do placar do llama.cpp para a placa de 8 GB, relatado por desenvolvedores). Usa o mesmo die de GPU e os mesmos 288 GB/s de largura de banda da RTX 4060 Ti de 8 GB, então a velocidade por token é similar — a versão de 16 GB compra capacidade, não velocidade bruta. Usada, custa quase o mesmo que a RTX 5060 Ti 16 GB (~$650 contra ~$649); o piso de ~$790 nova vem de apenas três anúncios da BuySellRAM.',
          '**RX 7800 XT (preço AMD: consulte as listagens atuais; os dados da BuySellRAM cobrem só NVIDIA):** 16 GB de VRAM, 263 W. Não a medimos para este guia; espere cerca de 90–115 tok/s em 7B Q4 (estimativa aproximada escalada da largura de banda de memória, não medida), com a configuração AMD ROCm como contrapartida.',
          '**Por que comprar nesta faixa:** você quer modelos 14B, quer baixo consumo de energia (RTX 4060 Ti) ou quer 16 GB ao menor preço possível.',
          '**Por que pular esta faixa:** se modelos 7B são suficientes, a faixa econômica custa $200–300 a menos; se você quer inferência 14B rápida, a faixa alta é significativamente mais rápida.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A RTX 4060 Ti 16 GB é uma atualização de capacidade, não de velocidade, em relação à versão de 8 GB — compre-a porque precisa acomodar modelos 14B, não porque espera mais tokens por segundo. A RTX 5060 Ti 16 GB é a opção mais rápida e, com os preços pedidos usados neste guia, custa menos nova e quase o mesmo usada.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'Ver preço da RTX 5060 Ti 16GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'Ver preço da RTX 4060 Ti 16GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'Ver preço da RX 7800 XT na Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'Faixa alta ($900–1.200): RTX 4080 Super, RTX 5070 Ti e RTX 4070 Ti Super',
        content:
          '**A faixa alta mantém 16 GB de VRAM, mas adiciona a velocidade que torna os modelos 7B–14B instantâneos e os modelos 22B utilizáveis.** As três placas acomodam os mesmos modelos que a faixa intermediária — você está pagando por tokens por segundo, não por capacidade. O aumento de 2026 ampliou a lacuna entre esta faixa e a intermediária.',
        items: [
          '**RTX 4080 Super 16 GB (~$1.200 nova / ~$1.149 usada):** 16 GB de VRAM, 320 W, cerca de 148 tok/s em Llama 2 7B Q4_0 (dado relatado por desenvolvedores). A escolha do editor como opção premium de 16 GB — a placa de maior preço aqui, com um prêmio de cerca de $190–300 sobre as duas placas abaixo, e mais lenta que a RTX 5070 Ti nas mesmas medições.',
          '**RTX 5070 Ti 16 GB (~$1.008 nova / ~$1.050 usada pedida, [preço de lista $749](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)):** 16 GB GDDR7, 300 W, largura de banda de memória de 896 GB/s. Não a medimos para este guia; o placar do llama.cpp indica cerca de 177 tok/s em Llama 2 7B Q4_0 (dado relatado por desenvolvedores), e 16 GB executam um modelo 24B Q4 com folga.',
          '**RTX 4070 Ti Super 16 GB (~$900 nova / ~$920 usada):** 16 GB de VRAM, 285 W, cerca de 132 tok/s (dado relatado por desenvolvedores). A placa nova mais barata desta faixa, com o menor consumo das três.',
          '**Por que comprar nesta faixa:** você executa modelos 14B constantemente e os quer instantâneos, ou faz trabalho leve de 22B e quer margem.',
          '**Por que pular esta faixa:** se você precisa de modelos 33B ou 70B, nenhuma placa de 16 GB os acomodará — passe para a faixa entusiasta em vez de gastar demais aqui.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Dentro desta faixa, a RTX 5070 Ti é a mais rápida nas medições de desenvolvedores (~177 tok/s), a RTX 4070 Ti Super é a mais barata nova e a RTX 4080 Super é a de maior preço. A menos que você queira especificamente a RTX 4080 Super, escolha uma das duas mais baratas.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Ver preço do RTX 4080 Super na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'Ver preço da RTX 5070 Ti na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'Ver preço do RTX 4070 Ti Super na Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Faixa entusiasta ($2.000+): RTX 4090 e RTX 5090',
        content:
          '**A faixa entusiasta é a única que executa modelos acima de 22B — e, entre as placas deste guia, só a RTX 5090 32 GB chega perto de um modelo 70B: o 70B em Q4 tem cerca de 43 GB segundo a Ollama, então até ela exige quantização agressiva ou descarga parcial para a CPU.** Compre aqui pela capacidade de VRAM, não pela velocidade; a velocidade é um efeito colateral. O aumento de 2026 atingiu a RTX 5090 com mais força, então os preços se movem semana a semana.',
        items: [
          '**RTX 4090 24 GB (~$2.000+ nova / ~$2.575-3.010 usada):** 24 GB de VRAM, 450 W, cerca de 186 tok/s em Llama 2 7B Q4_0 (dado relatado por desenvolvedores). Executa modelos 33B confortavelmente. O estoque novo da RTX 4090 é escasso e o piso de preço novo pode estar desatualizado — os anúncios chegam a ~$3.800.',
          '**RTX 5090 32 GB (~$4.500-4.921 nova / ~$5.880-6.350 usada, preço de lista $1.999):** 32 GB de VRAM GDDR7, 575 W, cerca de 290 tok/s em Llama 2 7B Q4_0 (dado relatado por desenvolvedores). A capacidade de 32 GB é o argumento central — é a única placa deste guia com 32 GB, embora um modelo 70B em Q4 tenha cerca de 43 GB segundo a Ollama e por isso ainda exija quantização agressiva ou descarga parcial para a CPU. Os preços pedidos subiram cerca de 64% entre agosto e outubro, e os anúncios de usadas ficam acima dos de novas.',
          '**Por que comprar nesta faixa:** você precisa de modelos 33B ou 70B, executa inferência em lote, ou quer uma placa que não precise ser substituída por anos.',
          '**Por que pular esta faixa:** para modelos 7B–14B é exagero — a faixa alta entrega respostas instantâneas nesses tamanhos por menos da metade do preço e do consumo de energia.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A NVIDIA indica para a RTX 5090 um TGP de 575 W, com 1000 W de potência de sistema exigida (configuração com Ryzen 9 9950X) e 850 W como mínimo no seu verificador de fontes (veja a página da RTX 5090 em Fontes). Uma fonte subdimensionada pode ceder sob carga, então inclua a fonte no orçamento de compra. Isto não é aconselhamento de segurança elétrica; siga as orientações do fabricante da placa sobre fonte e cabos.',
          },
          {
            type: 'note',
            text: 'Com os preços de usadas observados, de ~$2.575–3.010 por RTX 4090 (anúncios vendidos da InsiderLLM, atualizado em 2026-10-15), um par custa cerca de $5.150–6.020, mais que uma única RTX 5090 (~$4.500–4.900 nova), então a placa única é a configuração de 70B mais simples.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'Ver preço da RTX 4090 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'Ver preço da RTX 5090 na Amazon',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'Requisitos de GPU para LLMs locais: quanta VRAM você precisa?',
        content:
          '**Na quantização Q4_K_M, um modelo precisa de aproximadamente 0,6 GB de VRAM por bilhão de parâmetros, mais 2–4 GB para contexto e sobrecarga de ferramentas.** Essa fórmula se mapeia diretamente nas quatro faixas.',
        items: [
          '**Modelos 7B — 8–9 GB:** cabem em qualquer faixa. Uma placa de 12 GB deixa margem confortável.',
          '**Modelos 13–14B — 11–13 GB:** precisam de 16 GB na prática quando contexto e ferramentas são contados. Faixa intermediária e acima (RTX 5060 Ti 16 GB ou melhor).',
          '**Modelos 22B — 14–16 GB:** apertados em uma placa de 16 GB; confortáveis a partir da faixa alta.',
          '**Modelos 33B — 19–22 GB:** precisam de uma placa de 24 GB. Território da RTX 4090.',
          '**Modelos 70B — cerca de 43 GB em Q4 (Llama 3.3 70B, segundo a Ollama):** excedem qualquer placa individual daqui; a RTX 5090 32 GB só chega perto com quantização agressiva ou descarga parcial para a CPU, caso contrário planeje uma configuração de GPU dupla. Uma única placa de 24 GB não consegue acomodar um modelo 70B em Q4.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'O comprimento do contexto é um custo oculto de VRAM — prompts longos e janelas de contexto grandes consomem VRAM além dos pesos do modelo. Sempre deixe 2–4 GB de margem. Para o método completo, consulte o guia de requisitos de VRAM linkado em Leitura relacionada.',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'Por que os preços de GPU subiram em 2026',
        content:
          '**Os preços de GPU subiram acentuadamente em 2026, empurrando as placas de consumo até cerca de 2,5 vezes acima do preço de lista original (RTX 5090; cerca de 1,35 a 1,45 vezes na RTX 5060 Ti e na RTX 5070 Ti); as fontes divergem sobre a causa.** Isso muda o cálculo de compra, então planeje em torno disso em vez de em torno dos preços de lançamento.',
        items: [
          '**Não há uma causa única estabelecida.** Entre os fatores citados estão o fornecimento de DRAM/GDDR7, a demanda de data centers de IA e mudanças de produção noticiadas; as fontes divergem sobre quanto cada um contribui. [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) e [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) tratam a memória como parte da explicação; a BuySellRAM diz que ela não pode ser a maior parte, e que seus dados não separam a memória do fornecimento, da alocação e da demanda.',
          '**A RTX 5090 é o exemplo mais claro:** preço de lançamento de $1.999, mas ~$4.921 como menor preço pedido nos dados da BuySellRAM — cerca de 2,5 vezes, e 64% a mais desde agosto.',
          '**As placas menores também subiram, em medidas diferentes.** A RTX 5060 Ti 16 GB é anunciada cerca de 44% acima do preço de lista de $429 e a RTX 5070 Ti cerca de 35% acima de $749, embora ambas tenham 16 GB.',
          '**Usada já não é automaticamente mais barata.** Nos dados de preços pedidos da BuySellRAM, os anúncios de RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti e RTX 5070 Ti usadas ficaram no mesmo patamar ou acima dos de novas, e a RTX 3060 12 GB usada subiu cerca de 31% desde agosto. Compare as duas e prefira vendedores com política de devolução.',
          '**Não conte com uma renovação da linha.** As RTX 50 Super da NVIDIA foram noticiadas como adiadas por tempo indeterminado por causa do fornecimento de memória (a NVIDIA não confirmou). **Decisão:** se você pode esperar, observe se os preços caem; se não pode, compre a menor placa que se encaixe no seu modelo alvo.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Os preços de GPU em 2026 estão até cerca de 2,5 vezes acima do preço de lista (RTX 5090; cerca de 1,35 a 1,45 vezes na RTX 5060 Ti e na RTX 5070 Ti); entre os fatores citados estão o fornecimento de DRAM/GDDR7 e a demanda de data centers de IA, e as fontes divergem sobre o peso de cada um, então um comprador de LLMs locais deve comparar os preços de novas e usadas e comprar a menor placa que se encaixe no modelo alvo.',
          },
          {
            type: 'plain-terms',
            text: 'As placas não melhoraram, mas ficaram mais caras, e as fontes divergem sobre quanto disso se deve à memória e quanto à demanda ou à alocação de fornecimento. Até os preços caírem, trate o preço de lista como um número histórico, compare novas e usadas e não pague por mais VRAM do que seu modelo realmente precisa.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Fluxograma de decisão: escolha sua GPU em quatro perguntas',
        content:
          '**Quatro perguntas, em ordem, levam a maioria dos compradores a uma placa.**',
        items: [
          '**1. Qual é o maior modelo que você quer executar?** 7B: faixa econômica. 14B: faixa intermediária (uma placa de 16 GB). 22B: faixa alta. 33B: RTX 4090. 70B: RTX 5090 ou GPU dupla.',
          '**2. Qual é o seu teto de orçamento absoluto?** Abaixo de ~$400: RTX 3060 12 GB. Abaixo de ~$700: RTX 5060 Ti 16 GB ou uma RTX 4060 Ti 16 GB usada. ~$900–1.200: RTX 4070 Ti Super, RTX 5070 Ti ou RTX 4080 Super. $2.000+: RTX 4090 ou RTX 5090.',
          '**3. NVIDIA ou AMD?** Escolha NVIDIA a menos que você já tenha hardware AMD ou encontre um desconto acentuado na RX 7800 XT — o CUDA pode economizar tempo de configuração em relação ao ROCm.',
          '**4. Sua fonte de alimentação tem margem?** Placas acima da faixa intermediária precisam de 285–575 W; confirme sua fonte e o resfriamento do gabinete antes de comprar hardware da faixa entusiasta.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha uma GPU para LLMs locais respondendo primeiro ao maior tamanho de modelo, segundo ao teto de orçamento, terceiro a NVIDIA versus AMD, e por último à margem da fonte de alimentação.',
          },
          {
            type: 'plain-terms',
            text: 'Comece com o maior modelo que você realmente quer executar e deixe isso definir sua faixa. Só então olhe para o preço, a marca e se sua fonte de alimentação consegue lidar com a placa. Fazer ao contrário é como as pessoas gastam demais ou compram uma placa que não consegue executar seu modelo.',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-pt.webp',
        imageCaption:
          'Fluxo de decisão de quatro perguntas para escolher uma GPU para LLM local: o maior tamanho de modelo alvo define a faixa, o teto de orçamento estreita a escolha, NVIDIA versus AMD decide a marca, e a margem da fonte de alimentação confirma a escolha da faixa entusiasta.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Preços regionais e onde comprar',
        content:
          '**Os preços de GPU variam por região — os preços deste guia são valores dos EUA e os preços na UE incluem IVA.** Os links abaixo são links simples de pesquisa de produtos por região; não carregam tags de afiliado e não geram comissão.',
        items: [
          '**Brasil:** Kabum, Pichau e Terabyteshop têm o estoque mais amplo. As RTX 3060 e RTX 4090 usadas aparecem no Mercado Livre; os preços incluem impostos de importação que elevam os valores acima dos EUA.',
          '**Mercado de usados (Brasil):** O Mercado Livre é o principal marketplace para GPUs usadas no Brasil. Compare sempre o preço de uma placa usada verificada com o de uma nova e prefira vendedores com devolução ou garantia.',
          '**Argentina, Colômbia e restante da América Latina:** O Mercado Livre é a referência em toda a região; verifique sempre os preços atualizados, pois a taxa de câmbio afeta significativamente o custo final.',
          '**Comparador de preços:** O Buscapé e o Zoom são referência para comparar preços de placas novas no Brasil — verifique lá a fonte mais barata atualmente.',
          '**Disponibilidade:** Placas de alta faixa (RTX 4090, RTX 5090) têm disponibilidade intermitente em 2026; a RTX 5090 costuma esgotar pelo preço de lista; espere preços flutuantes e verifique vários distribuidores.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Devido ao aumento de 2026, cada cifra de preço neste guia é uma captura de movimento rápido. Sempre abra o anúncio atual do varejista antes de comprar — os preços se moveram semana a semana.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'GPUs para LLMs locais (EUA)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs na Amazon EUA',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'GPUs para LLMs locais (Alemanha)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs na Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'GPUs para LLMs locais (França)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs na Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'GPUs para LLMs locais (Japão)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Ver GPUs na Amazon.co.jp',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao comprar uma GPU para LLMs locais',
        items: [
          '**Comprar por tokens por segundo em vez de VRAM.** Uma placa mais rápida que não consegue acomodar seu modelo é inútil. Confirme primeiro que o modelo cabe na VRAM com 2–4 GB de margem e depois compare a velocidade dentro dessa faixa.',
          '**Comprar a RTX 3060 de 6 GB em vez da versão de 12 GB.** Elas compartilham um nome, mas não um caso de uso — a placa de 6 GB topa nos modelos 3B. Confirme sempre a variante de 12 GB no anúncio.',
          '**Assumir que a RTX 4060 Ti 16 GB é mais rápida que a versão de 8 GB.** Não é — é o mesmo die de GPU com mais memória. Compre-a pela capacidade (modelos 14B), não pela velocidade; a RTX 5060 Ti 16 GB é a opção de 16 GB mais rápida.',
          '**Ancorar no preço de lista em vez do preço atual.** O aumento de 2026 significa que os preços de lançamento não refletem mais a realidade. Faça o orçamento com o preço ao vivo do varejista e compare nova com usada — usada já não é, de forma confiável, mais barata.',
          '**Ignorar os requisitos da fonte de alimentação.** Uma RTX 5090 tem TGP de 575 W, e a NVIDIA indica 1000 W de potência de sistema exigida e 850 W como mínimo no seu verificador de fontes. Uma placa que falha sob carga é pior do que uma placa mais lenta que funciona de forma estável.',
          '**Escolher AMD sem orçar o tempo de configuração.** A RX 6700 XT e a RX 7800 XT são bom custo-benefício, mas a configuração ROCm custa horas. Pese esse tempo em relação ao dinheiro economizado em comparação a uma placa NVIDIA.',
          '**Comprar demais para modelos 7B.** Se modelos 7B cobrem seu caso de uso, uma RTX 4090 é dinheiro e energia desperdiçados. Combine a faixa com o modelo, não com o orçamento que você acidentalmente tem.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          'Sete erros comuns ao comprar uma GPU para LLMs locais: comprar por velocidade em vez de VRAM, confundir a RTX 3060 de 6 GB e 12 GB, esperar que a RTX 4060 Ti de 16 GB seja mais rápida, ancorar no preço de lista, ignorar as necessidades da fonte de alimentação, não orçar o tempo de configuração AMD e comprar demais para modelos 7B.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Especificações NVIDIA GeForce RTX Série 40](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — Cifras oficiais de capacidade de VRAM e consumo (TGP) para a RTX 4060 Ti, 4070 Ti Super, 4080 Super e 4090.',
          '[Especificações NVIDIA GeForce RTX 5090](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — Cifras oficiais da RTX 5090: 32 GB de VRAM GDDR7, 575 W de TGP, 1000 W de potência de sistema exigida (configuração com Ryzen 9 9950X) e 850 W como mínimo no verificador de fontes.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — menores preços pedidos nos EUA, novos e usados, em 11 de outubro de 2026 versus 8 de agosto de 2026, usados para a maioria dos preços deste guia (preços pedidos, não vendas concluídas).',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — faixas de preço de varejo e de anúncios vendidos no eBay para a RTX 4090 e a RTX 5090 (atualizado em 2026-10-15); os valores da RTX 4090 e da RTX 5090 neste guia combinam essas faixas com os preços pedidos da BuySellRAM.',
          '[NVIDIA Newsroom — anúncio da GeForce RTX 5060 Ti (2025-04-15)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — preço de lançamento de $429 para a RTX 5060 Ti 16 GB (8 GB: $379).',
          '[NVIDIA Newsroom — anúncio da série GeForce RTX 50 (2025-01-06)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — preço de lançamento de $749 para a RTX 5070 Ti.',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — preço de lista versus preço de rua da RTX 5090, RTX 5070 Ti e RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — reportagem (não confirmada pela NVIDIA) de que a renovação RTX 50 Super foi adiada por causa do fornecimento de memória.',
          '[Especificações AMD Radeon](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Cifras oficiais de VRAM e consumo para a RX 7800 XT e RX 6700 XT.',
          '[Placar do llama.cpp: Llama 2 7B Q4_0 em CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) — resultados do llama-bench em tokens por segundo relatados por desenvolvedores para RTX 3060, 4060 Ti (8 GB), 5060 Ti, 4070 Ti Super, 5070 Ti, 4080 Super, 4090 e 5090; as entradas vêm de usuários e builds diferentes.',
          '[Ollama: Llama 3.3 70B](https://ollama.com/library/llama3.3) — o download do modelo 70B consta com 43 GB, base do valor de VRAM do 70B neste guia.',
          '[Melhores GPUs para LLMs locais 2026](/local-llms/best-gpus-for-local-llms) — o conjunto mais amplo de benchmarks de GPU deste site.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é a GPU mais barata para inferência de LLM em 2026?',
            a: 'A NVIDIA RTX 3060 12 GB, por cerca de $320–400, é a placa nova de menor preço deste guia que executa bem a inferência de LLMs locais. Seus 12 GB de VRAM acomodam qualquer modelo 7B e a maioria dos modelos 13B em quantização Q4, a cerca de 76 tokens por segundo em Llama 2 7B Q4_0 (dado relatado por desenvolvedores). Uma RX 6700 XT pode sair mais barata no mercado de usados, mas o preço varia por vendedor e requer configuração AMD ROCm. Os preços da RTX 3060 nova e usada agora são próximos, então compare as duas.',
          },
          {
            q: 'Por que os preços de GPU estão tão altos em 2026?',
            a: 'Não há uma causa única estabelecida. Entre os fatores citados estão o fornecimento de DRAM/GDDR7, a demanda de data centers de IA e mudanças de produção noticiadas, e as fontes (InsiderLLM e BuySellRAM) divergem sobre quanto cada um contribui; a BuySellRAM diz que a memória é parte da explicação, mas não pode ser a maior parte. As placas são vendidas até cerca de 2,5 vezes acima do preço de lista original (RTX 5090; cerca de 1,35 a 1,45 vezes na RTX 5060 Ti e na RTX 5070 Ti) — uma RTX 5090 foi lançada a $1.999, mas é anunciada perto de $4.500-4.900. As placas usadas já não escapam do aumento.',
          },
          {
            q: 'Quais são os requisitos de GPU para executar um LLM local?',
            a: 'Na quantização Q4_K_M, planeje aproximadamente 0,6 GB de VRAM por bilhão de parâmetros mais 2–4 GB de sobrecarga. Isso significa 8–9 GB para modelos 7B, 11–13 GB para 14B, 19–22 GB para 33B e cerca de 43 GB para 70B (Llama 3.3 70B em Q4, segundo a Ollama). Uma placa de 12 GB cobre 7B confortavelmente, uma placa de 16 GB cobre 14B, e o 70B excede qualquer placa individual daqui: uma RTX 5090 32 GB só chega perto com quantização agressiva ou descarga parcial para a CPU, caso contrário planeje uma configuração de GPU dupla.',
          },
          {
            q: 'Qual placa de vídeo é a melhor para LLMs locais?',
            a: 'A melhor placa de vídeo para LLMs locais é aquela com VRAM suficiente para o seu modelo alvo dentro do seu orçamento. Para modelos 7B, uma RTX 3060 12 GB (~$320–400) é suficiente. Para modelos 14B, uma RTX 5060 Ti 16 GB (~$618) ou uma RTX 4060 Ti 16 GB usada é a escolha intermediária. Para modelos 33B você precisa de uma RTX 4090 24 GB, e para 70B só a RTX 5090 32 GB chega perto, com quantização agressiva ou offload parcial para a CPU (o 70B em Q4 tem cerca de 43 GB segundo a Ollama). As placas NVIDIA são a escolha de menor atrito porque o CUDA costuma funcionar sem configuração extra.',
          },
          {
            q: 'A RTX 4060 Ti 16 GB é mais rápida que a versão de 8 GB?',
            a: 'Não. A RTX 4060 Ti de 16 GB e 8 GB usa o mesmo die de GPU, então a velocidade de inferência por token é similar — cerca de 64 tokens por segundo em modelos 7B (valor do placar do llama.cpp para a placa de 8 GB, relatado por desenvolvedores). A versão de 16 GB compra capacidade, permitindo executar modelos 14B que não cabem em 8 GB. Compre-a pela VRAM, não pela velocidade.',
          },
          {
            q: 'Devo comprar NVIDIA ou AMD para LLMs locais?',
            a: 'Compre NVIDIA a menos que você já tenha hardware AMD ou encontre um desconto considerável. O CUDA da NVIDIA costuma funcionar com Ollama, LM Studio e llama.cpp sem configuração extra. As placas AMD como a RX 6700 XT e RX 7800 XT oferecem VRAM competitiva por dólar, mas o tempo de configuração do ROCm varia conforme a distribuição e a GPU; consulte a lista de GPUs compatíveis da AMD.',
          },
          {
            q: 'Uma única GPU consegue executar um modelo 70B?',
            a: 'Entre as placas deste guia, só a RTX 5090 32 GB chega perto, e apenas com quantização agressiva ou descarga parcial para a CPU — um modelo 70B em Q4 tem cerca de 43 GB segundo a Ollama. Uma RTX 4090 de 24 GB não consegue acomodar um modelo 70B em Q4 sozinha; a solução comum é duas RTX 4090 para VRAM combinada, embora, com os preços usados neste guia, esse par custe aproximadamente o mesmo que uma única RTX 5090.',
          },
          {
            q: 'A RTX 5090 vale a pena em relação à RTX 4090 para LLMs locais?',
            a: 'Apenas se você precisar especificamente de mais de 24 GB em uma única placa, por exemplo para chegar mais perto de modelos 70B. A RTX 5090 tem 32 GB de VRAM versus os 24 GB da RTX 4090, que é o fator decisivo. Para modelos 7B–33B, a RTX 4090 acomoda os mesmos modelos; com os preços usados neste guia, a RTX 5090 custa aproximadamente 1,8–2,4x uma RTX 4090, então só pague por ela se os 8 GB extras resolverem um problema real.',
          },
          {
            q: 'Qual fonte de alimentação preciso para essas GPUs?',
            a: 'Combine a fonte com a faixa: uma unidade de 550 W serve para a RTX 3060, 650–750 W serve para a RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super e RTX 5070 Ti, 850 W serve para a RTX 4090, e para a RTX 5090 (TGP de 575 W) a NVIDIA indica 1000 W de potência de sistema exigida (configuração com Ryzen 9 9950X) e 850 W como mínimo no seu verificador de fontes. Fontes de alimentação subdimensionadas causam instabilidade sob carga. Siga as orientações do fabricante da placa e da fonte; isto não é aconselhamento de segurança elétrica.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Veja os requisitos completos de VRAM para cada tamanho de modelo](/local-llms/how-much-vram-local-llm) — o método completo de VRAM por tamanho de modelo por trás da fórmula rápida neste guia.',
          '[Compare mais de 15 GPUs com benchmarks publicados de LLMs locais](/local-llms/best-gpus-for-local-llms) — o conjunto mais amplo de benchmarks de GPU, incluindo placas mais antigas e de servidor além dessas dez.',
          '[Veja quais modelos rodam em uma RTX 3060 12 GB econômica](/local-llms/best-budget-gpus-local-llm) — velocidades modelo a modelo para a faixa econômica, incluindo a diferença de 6 GB versus 12 GB.',
          '[Compare a RTX 5090 e a RTX 4090 frente a frente](/local-llms/rtx-5090-vs-rtx-4090-local-llm) — quando o upgrade para a RTX 5090 vale a pena e quando a RTX 4090 é suficiente.',
          '[Entenda como a quantização Q4_K_M define o custo de VRAM](/local-llms/llm-quantization-explained) — por que Q4_K_M é o padrão e como a quantização muda o cálculo de VRAM.',
          '[Melhor GPU abaixo de US$ 1.000 para inferência de LLM local?](/pt/prompt-bites/best-gpu-under-1000-local-llm) — a faixa de 24 GB: RTX 4090 usada vs. RTX 4080 SUPER nova.',
          '[RTX 4060 vs RTX 3060 12GB: qual é melhor para LLMs locais?](/pt/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — por que mais VRAM vence uma geração mais nova nessa tarefa.',
          '[Melhor GPU Intel Arc para LLMs locais?](/pt/prompt-bites/best-intel-arc-gpu-local-llm) — a Arc B580 como alternativa mais barata, e as concessões de software que ela exige.',
          '[Melhor configuração RTX 4090 para modelos de 70B?](/pt/prompt-bites/best-rtx-4090-setup-70b-models) — o que realmente é necessário para rodar um modelo de 70B na placa principal deste guia.',
          '[Melhor LLM local para um MacBook Air sem eGPU?](/pt/prompt-bites/best-local-llm-macbook-air-no-egpu) — por que uma eGPU não pode substituir as GPUs deste guia em Apple Silicon.',
          '[Melhor notebook Windows para LLMs locais por menos de US$ 1.500?](/pt/prompt-bites/best-windows-laptop-local-llm-under-1500) — o equivalente em GPU móvel das faixas de desktop deste guia.',
          '[Qual hardware você precisa para fazer fine-tuning de um modelo de 7B localmente?](/pt/prompt-bites/fine-tuning-7b-model-locally-hardware) — quais dessas GPUs também funcionam para fine-tuning com QLoRA, não apenas para inferência.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhor placa de vídeo para LLMs locais: guia de GPUs 2026',
      description: 'Qual placa de vídeo para LLMs locais? Dez GPUs comparadas por VRAM, velocidade, consumo e preços de 2026, da barata à RTX 5090 e requisitos por modelo.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-22',
      dateModified: '2026-11-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'أفضل بطاقة رسومات لتشغيل النماذج اللغوية المحلية: دليل شراء GPU 2026',
    seoTitle: 'أفضل بطاقة رسومات لـ LLM المحلية 2026: حتى RTX 5090',
    intro:
      'تُحسِّن معظم النصائح المتعلقة ببطاقات الرسومات للنماذج اللغوية المحلية الرقم الخاطئ. سرعة الرموز في الثانية تحدد مدى سرعة استجابة النموذج، لكن VRAM تحدد ما إذا كان النموذج يُشغَّل أصلاً — ونموذج لا يناسب الذاكرة أبطأ من نموذج يناسبها بما لا يُقاس. يقارن هذا الدليل عشر بطاقات رسومات استهلاكية في أربع فئات سعرية من حيث الأرقام التي تُحدد الشراء فعلاً: سعة VRAM وسرعة الاستدلال واستهلاك الطاقة والسعر. تحذير بشأن الأسعار: ارتفعت أسعار بطاقات GPU بشكل حاد في 2026 (من العوامل المذكورة إمداد الذاكرة والطلب من مراكز بيانات الذكاء الاصطناعي، وتختلف المصادر في وزن كل عامل) — فبطاقة RTX 5090 تُعرض الآن بنحو 2.5 ضعف سعر قائمتها (MSRP) — لذا فإن معظم الأسعار هنا هي أدنى أسعار العرض الأمريكية من بيانات BuySellRAM المرتبطة في المصادر، وتعتمد نطاقات RTX 4090 وRTX 5090 أيضاً على بيانات قوائم البيع من InsiderLLM؛ تأكد من السعر الحالي قبل الشراء.',
    metaDescription:
      'أي بطاقة رسومات لنماذج LLM المحلية؟ مقارنة عشر بطاقات GPU من حيث VRAM والسرعة والطاقة وأسعار 2026، من الأرخص إلى RTX 5090، مع متطلبات GPU لكل نموذج.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ar.webp',
    twitterDescription:
      'RTX 3060 وRX 6700 XT وRTX 4060 Ti 16GB وRTX 5060 Ti 16GB وRX 7800 XT وRTX 4070 Ti Super وRTX 5070 Ti وRTX 4080 Super وRTX 4090 وRTX 5090 — عشر بطاقات رسومات وأربع ميزانيات وقاعدة واحدة: اشترِ بحسب VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      'مشترون يختارون بطاقة رسومات تحديداً لتشغيل نماذج لغوية محلية، يقررون بحسب الفئة السعرية وحجم النموذج المستهدف. يفترض الإلمام بالتكمية وVRAM كقيد، لكن ليس بـ SKUs بطاقات GPU الحالية تحديداً.',
    readTime: '14 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      'أفضل GPU للنماذج اللغوية المحلية 2026',
      'دليل شراء GPU لنماذج لغوية محلية',
      'RTX 3060 مقابل RTX 4090 نموذج لغوي محلي',
      'كم VRAM أحتاج للنموذج اللغوي المحلي',
      'أرخص GPU لنموذج لغوي محلي',
      'أفضل بطاقة رسومات للنماذج اللغوية المحلية',
      'متطلبات GPU لتشغيل LLM محلياً',
    ],
    leadAnswerBlock:
      '**أفضل بطاقة رسومات للنماذج اللغوية المحلية هي التي تناسب VRAM نموذجك، لا الأسرع. RTX 3060 بـ12 جيجابايت تُشغّل أي نموذج 7B، وبطاقة 16 جيجابايت (RTX 5060 Ti أو RTX 4060 Ti أو RTX 5070 Ti) تتعامل مع نماذج 14B، وRTX 4090 بـ24 جيجابايت تتعامل مع نماذج 33B، ومن بطاقات هذا الدليل لا تقترب من نموذج 70B إلا RTX 5090 بـ32 جيجابايت، وذلك فقط بتكمية عدوانية أو نقل جزئي إلى المعالج (نموذج 70B بـQ4 نحو 43 جيجابايت وفق Ollama).**',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل بطاقة رسومات لتشغيل النماذج اللغوية المحلية في 2026؟',
        answer:
          'اشترِ بحسب VRAM أولاً ثم بحسب السرعة. RTX 3060 بـ12 جيجابايت (نحو 320–400 دولار) هي الخيار الاقتصادي وتُشغّل أي نموذج 7B. أما بطاقة 16 جيجابايت فهي الخيار المتوسط لنماذج 14B — RTX 5060 Ti 16 GB (نحو 620 دولاراً جديدة) أو RTX 4060 Ti 16 GB مستعملة (نحو 650 دولاراً). RTX 4090 بـ24 جيجابايت تُشغّل نماذج 33B، ومن بطاقات هذا الدليل لا تقترب من 70B إلا RTX 5090 بـ32 جيجابايت (نحو 4500-4900 دولار)، وذلك فقط بتكمية عدوانية أو نقل جزئي إلى المعالج (نموذج 70B بـQ4 نحو 43 جيجابايت وفق Ollama). لاحظ أن أسعار 2026 أعلى بكثير من سعر القائمة.',
        bullets: [
          'اقتصادي: RTX 3060 12GB، نحو 320–400 دولار جديدة أو مستعملة، تُشغّل أي نموذج 7B بنحو 76 رمز/ثانية (Llama 2 7B Q4_0، مُبلَّغ من مطوّرين)',
          'متوسط: RTX 5060 Ti 16GB، نحو 620 دولاراً جديدة ([سعر القائمة 429 دولاراً](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299))، تُشغّل نماذج 14B بهامش مريح',
          'متحمس: RTX 5090 32GB، نحو 4500-4900 دولار، البطاقة الوحيدة بذاكرة 32 جيجابايت هنا؛ 70B (نحو 43 جيجابايت بـQ4) يتطلب تكمية عدوانية أو نقلاً جزئياً',
          'أسعار GPU في 2026 أعلى بنحو 2.5× كحد أقصى من سعر القائمة (RTX 5090؛ ونحو 1.35–1.45× لـ RTX 5060 Ti وRTX 5070 Ti) — قارن الجديدة بالمستعملة قبل الشراء',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'اختيار المحرر', anchor: '#editors-choice' },
      { label: 'جدول مقارنة بطاقات الرسومات', anchor: '#comparison-table' },
      { label: 'أي بطاقة رسومات يجب أن تشتري؟', anchor: '#which-gpu' },
      { label: 'الفئة الاقتصادية (320–400 دولار)', anchor: '#budget-tier' },
      { label: 'الفئة المتوسطة (620–790 دولاراً)', anchor: '#mid-tier' },
      { label: 'الفئة العالية (900–1200 دولار)', anchor: '#high-tier' },
      { label: 'فئة المتحمسين (2000 دولاراً+)', anchor: '#enthusiast-tier' },
      { label: 'متطلبات GPU: كم VRAM تحتاج؟', anchor: '#vram-needs' },
      { label: 'لماذا ارتفعت أسعار بطاقات الرسومات في 2026؟', anchor: '#price-surge' },
      { label: 'مخطط قرار', anchor: '#decision-flowchart' },
      { label: 'الأسعار الإقليمية وأين تشتري', anchor: '#where-to-buy' },
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
          '**VRAM هو القيد الحاسم.** نموذج لا يناسب VRAM يفشل في التحميل أو يفيض إلى RAM النظام ويصبح بطيئاً جداً للاستخدام التفاعلي. اختر الفئة التي تناسب VRAM نموذجك المستهدف ثم حسّن السرعة ضمن تلك الفئة.',
          '**الأسعار ارتفعت بشكل حاد في 2026.** أسعار GPU أعلى بنحو 2.5 ضعف سعر القائمة كحد أقصى (RTX 5090؛ ونحو 1.35–1.45 ضعف لـ RTX 5060 Ti وRTX 5070 Ti). من العوامل المذكورة إمداد DRAM/GDDR7 والطلب من مراكز بيانات الذكاء الاصطناعي وتغييرات إنتاج مُبلَّغ عنها، وتختلف المصادر في مدى إسهام كل منها. RTX 5090 تُعرض بنحو 4500-4900 دولار لا سعر إطلاقها البالغ 1999 دولاراً، وارتفعت الأسعار مجدداً بين أغسطس وأكتوبر. تعامل مع الأسعار هنا كلقطة — معظمها أسعار عرض أمريكية، وتعتمد نطاقات RTX 4090 وRTX 5090 أيضاً على بيانات قوائم البيع — وقارن الجديدة بالمستعملة قبل الشراء.',
          '**الاختيار الاقتصادي: NVIDIA RTX 3060 12 GB** (نحو 320–400 دولار، والجديدة والمستعملة تكلفان الآن تقريباً المبلغ نفسه) — تُشغّل أي نموذج 7B (نحو 76 رمز/ثانية على Llama 2 7B Q4_0، مُبلَّغ من مطوّرين) ومعظم نماذج 13B بـQ4.',
          '**الاختيار المتوسط: NVIDIA RTX 5060 Ti 16 GB** (نحو 618 دولاراً جديدة، ونحو 649 دولاراً سعر عرض مستعملة) — 16 جيجابايت VRAM تتعامل مع نماذج 14B بهامش للسياق، وعرض نطاقها 448 GB/s (نحو 91 رمز/ثانية، مُبلَّغ من مطوّرين) أعلى من 288 GB/s في RTX 4060 Ti 16 GB الأقدم (نحو 64 رمز/ثانية لإصدار 8 جيجابايت، مُبلَّغ من مطوّرين). مستعملتين تكلّفان تقريباً المبلغ نفسه (نحو 650 دولاراً)؛ وأدنى سعر جديد لـRTX 4060 Ti 16 GB (نحو 790 دولاراً) يستند وفق BuySellRAM إلى ثلاثة عروض فقط.',
          '**الاختيار عالي الفئة: NVIDIA RTX 4080 Super 16 GB** (نحو 1200 دولار) — أعلى بطاقة 16 جيجابايت سعراً هنا (نحو 148 رمز/ثانية، مُبلَّغ من مطوّرين). أما RTX 4070 Ti Super (نحو 900 دولار) وRTX 5070 Ti (نحو 1008 دولارات) فأرخص وقد تكونان أفضل قيمة؛ وRTX 5070 Ti أسرع في قياسات المطورين نفسها (نحو 177 رمز/ثانية).',
          '**اختيار المتحمسين: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — RTX 4090 (نحو 2000 دولاراً+ جديدة، ونحو 2575-3010 دولار مستعملة) تُشغّل نماذج 33B؛ ومن بطاقات هذا الدليل لا تقترب من 70B إلا RTX 5090 (نحو 4500-4900 دولار)، وذلك فقط بتكمية عدوانية أو نقل جزئي إلى المعالج (نموذج 70B بـQ4 نحو 43 جيجابايت وفق Ollama).',
          '**AMD قابلة للتطبيق لكن تولّد احتكاكاً أكثر.** RX 6700 XT (12 جيجابايت) وRX 7800 XT (16 جيجابايت) تقدمان VRAM بأسعار تنافسية، لكن مدة إعداد ROCm تختلف حسب التوزيعة والبطاقة.',
          '**استهلاك الطاقة يتصاعد مع الفئة.** RTX 3060 تستهلك 170 واط؛ RTX 5090 بقدرة TGP تبلغ 575 واط، و[تذكر NVIDIA](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) أن طاقة النظام المطلوبة 1000 واط (تكوين Ryzen 9 9950X) وأن الحد الأدنى 850 واط في أداة فحص وحدات الطاقة لديها. أدرج وحدة الطاقة في الميزانية مع البطاقة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الفئة الاقتصادية (320–400 دولار):** RTX 3060 12GB أو RX 6700 XT 12GB — تُشغّل نماذج 7B ومعظم 13B.',
          '**الفئة المتوسطة (620–790 دولاراً):** RTX 5060 Ti 16GB أو RTX 4060 Ti 16GB أو RX 7800 XT 16GB — تُشغّل نماذج 14B براحة.',
          '**الفئة العالية (900–1200 دولار):** RTX 4080 Super أو RTX 5070 Ti أو RTX 4070 Ti Super، وكلها 16GB — استدلال سريع لنماذج 14B وعمل خفيف مع 22B.',
          '**فئة المتحمسين (2000 دولاراً+):** RTX 4090 24GB أو RTX 5090 32GB — نماذج 33B، و70B فقط بتكميم مكثّف أو تفريغ جزئي إلى CPU على 5090.',
          '**حسابة VRAM المرجعية بـQ4_K_M:** نحو 0.6 جيجابايت لكل مليار معامل، بالإضافة إلى 2–4 جيجابايت للسياق والأدوات.',
          '**نطاق استهلاك الطاقة:** RTX 3060 170 واط، RTX 4060 Ti 165 واط، RTX 5060 Ti 180 واط، RTX 4070 Ti Super 285 واط، RTX 5070 Ti 300 واط، RTX 4080 Super 320 واط، RTX 4090 450 واط، RTX 5090 575 واط.',
          '**واقع أسعار 2026:** الأسعار أعلى بنحو 2.5× كحد أقصى من سعر القائمة (RTX 5090؛ ونحو 1.35–1.45× لـ RTX 5060 Ti وRTX 5070 Ti) وتختلف المصادر في الأسباب؛ لم تعد البطاقات المستعملة أرخص من الجديدة بشكل موثوق، لذا قارن الاثنتين.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'اختيار المحرر (16 جيجابايت مميزة): RTX 4080 Super',
        highlight: true,
        content:
          '**لمن يريد بطاقة 16 جيجابايت مميزة ويمكنه تجاوز 1000 دولار، فإن NVIDIA RTX 4080 Super 16 GB هي اختيار المحرر — اختيار لبناء مميز بذاكرة 16 جيجابايت، لا لأفضل قيمة.** تتعامل 16 جيجابايت VRAM فيها مع أي نموذج 14B بهامش للسياق، وتبلغ نحو 148 رمز/ثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين)، وبنحو 1200 دولار هي أعلى بطاقة 16 جيجابايت سعراً هنا. أما RTX 4070 Ti Super (نحو 900 دولار، نحو 132 رمز/ثانية) وRTX 5070 Ti (نحو 1008 دولارات، نحو 177 رمز/ثانية) فأرخص بنحو 300 دولار ونحو 190 دولاراً وقد تكونان أفضل قيمة؛ وRTX 5070 Ti أسرع في قياسات المطورين نفسها. وإن كانت ميزانيتك ثابتة تحت 700 دولار، فـRTX 5060 Ti 16 GB هي الخيار الأوفر قيمة. لا تنفق أكثر إلا إذا كنت تحتاج تحديداً نماذج 33B أو 70B.',
        callouts: [
          {
            type: 'note',
            text: 'اختيار المحرر هو خيار مميز بذاكرة 16 جيجابايت وليس ترتيباً لنسبة السعر إلى القدرة: فبطاقتا RTX 4070 Ti Super وRTX 5070 Ti أرخص وقد تكونان أفضل قيمة. لا تشارك PromptQuorum في أي برنامج تابع والروابط التالية لا تحمل علامات تابعة — هي روابط مرجعية عادية لا تدرّ أي عمولة.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'ابحث عن سعر RTX 4080 Super على Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'ابحث عن سعر RTX 4080 Super على Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'كيف تتقارن البطاقات العشر للنماذج اللغوية المحلية في 2026؟',
        content:
          'أرقام VRAM والطاقة هي مواصفات المصنّع. السرعات الموسومة «مُبلَّغ» هي نتائج llama-bench أبلغ عنها مطورون (Llama 2 7B Q4_0، CUDA) من لوحة نتائج llama.cpp المرتبطة في المصادر؛ وتأتي الإدخالات من مستخدمين وإصدارات بناء مختلفة ولم نعد قياسها. رقم RTX 4060 Ti 16 GB هو نتيجة إصدار 8 جيجابايت (رقاقة GPU نفسها وعرض نطاق 288 GB/s). ولا توجد نتائج لـRX 6700 XT وRX 7800 XT هناك، فسرعتاهما تقديرات تقريبية (تقدير) مُحتسبة من عرض نطاق الذاكرة قياساً إلى النتائج المقيسة. معظم الأسعار هي أدنى أسعار العرض الأمريكية في بيانات BuySellRAM المرتبطة؛ وتجمع نطاقات RTX 4090 وRTX 5090 بينها وبين نطاقات التجزئة وقوائم البيع من InsiderLLM (محدّثة في 2026-10-15). الأسعار أعلى بنحو 2.5× كحد أقصى من سعر القائمة (RTX 5090؛ ونحو 1.35–1.45× لـ RTX 5060 Ti وRTX 5070 Ti)، فأعد التحقق قبل الشراء (راجع تاريخ تحديث هذه الصفحة). تستخدم صفحة بطاقات GPU الاقتصادية المرتبطة تقديرات سابقة لبعض البطاقات (مثلاً نحو 290–330 دولاراً مستعملة لـ RTX 3060 12 GB)، لذا قد تختلف الأرقام قليلاً بين الصفحتين.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'للنماذج اللغوية المحلية، تحدد VRAM في بطاقة GPU أي النماذج تستطيع تشغيلها، وتحدد الرموز في الثانية مدى سرعة إجابتها — اشترِ للأولى ثم حسّن الثانية.',
          },
          {
            type: 'plain-terms',
            text: 'تخيّل VRAM بحجم المكتب والنموذج هو ما تضعه عليه. البطاقة الأسرع تُخلي المكتب أسرع، لكن إن لم يتسع المكتب للنموذج أصلاً فلا معنى للسرعة. اختر أولاً الفئة التي يكفي مكتبها.',
          },
        ],
        columns: ['وحدة GPU', 'VRAM', 'السرعة (7B Q4)', 'الطاقة', 'السعر (أمريكا، 2026)', 'الأنسب لـ'],
        rows: [
          {
            'وحدة GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'السرعة (7B Q4)': '~76 tok/s (مُبلَّغ)',
            'الطاقة': '170 W',
            'السعر (أمريكا، 2026)': '$320-400 جديدة / $320-350 مستعملة',
            'الأنسب لـ': 'بداية اقتصادية — أي نموذج 7B',
          },
          {
            'وحدة GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'السرعة (7B Q4)': '~65-80 tok/s (تقدير)',
            'الطاقة': '230 W',
            'السعر (أمريكا، 2026)': 'يختلف بحسب البائع — تحقق مباشرة',
            'الأنسب لـ': 'AMD بـ12GB، مع قبول إعداد ROCm',
          },
          {
            'وحدة GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~64 tok/s (إصدار 8GB، مُبلَّغ)',
            'الطاقة': '165 W',
            'السعر (أمريكا، 2026)': '~$790 جديدة / ~$650 مستعملة',
            'الأنسب لـ': 'فئة متوسطة — نماذج 14B وطاقة منخفضة',
          },
          {
            'وحدة GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~91 tok/s (مُبلَّغ)',
            'الطاقة': '180 W',
            'السعر (أمريكا، 2026)': '$618 جديدة / $649 مستعملة',
            'الأنسب لـ': 'فئة متوسطة — 14B، الجيل الحالي',
          },
          {
            'وحدة GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~90-115 tok/s (تقدير)',
            'الطاقة': '263 W',
            'السعر (أمريكا، 2026)': 'أسعار AMD: راجع القوائم الحالية',
            'الأنسب لـ': '16 GB على AMD، مع قبول إعداد ROCm',
          },
          {
            'وحدة GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~132 tok/s (مُبلَّغ)',
            'الطاقة': '285 W',
            'السعر (أمريكا، 2026)': '$900 جديدة / $920 مستعملة',
            'الأنسب لـ': '14B سريع، استهلاك طاقة أقل',
          },
          {
            'وحدة GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~177 tok/s (مُبلَّغ)',
            'الطاقة': '300 W',
            'السعر (أمريكا، 2026)': '$1,008 جديدة / $1,050 مستعملة',
            'الأنسب لـ': '14B سريع، 16 GB بقيمة جيدة',
          },
          {
            'وحدة GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~148 tok/s (مُبلَّغ)',
            'الطاقة': '320 W',
            'السعر (أمريكا، 2026)': '$1,200 جديدة / $1,149 مستعملة',
            'الأنسب لـ': 'اختيار المحرر — 16 GB مميزة',
          },
          {
            'وحدة GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'السرعة (7B Q4)': '~186 tok/s (مُبلَّغ)',
            'الطاقة': '450 W',
            'السعر (أمريكا، 2026)': '~$2,000+ جديدة / $2,575-3,010 مستعملة',
            'الأنسب لـ': 'نماذج 33B، و70B بـGPU مزدوج',
          },
          {
            'وحدة GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'السرعة (7B Q4)': '~290 tok/s (مُبلَّغ)',
            'الطاقة': '575 W',
            'السعر (أمريكا، 2026)': '$4,500-4,921 جديدة / $5,880-6,350 مستعملة',
            'الأنسب لـ': '70B فقط بتكميم مكثّف أو تفريغ',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ar.webp',
        imageCaption:
          'عشر بطاقات رسومات استهلاكية للنماذج اللغوية المحلية مقارَنة بحسب VRAM وسرعة استدلال 7B Q4 واستهلاك الطاقة والسعر الأمريكي الحالي عبر أربع فئات سعرية. ترتفع VRAM من 12 جيجابايت (RTX 3060) إلى 32 جيجابايت (RTX 5090)؛ اشترِ بحسب حجم النموذج الذي تحتاجه قبل تحسين السرعة.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'أي بطاقة رسومات يجب أن تشتري؟',
        content:
          '**أكبر نموذج مستهدف يحدد فئتك؛ وميزانيتك تحدد الاختيار بين NVIDIA وAMD داخل تلك الفئة.** ابحث عن السطر الذي يناسب حالتك.',
        columns: ['حالتك', 'اشترِ هذه'],
        rows: [
          { 'حالتك': 'لدي أقل من 400 دولار وأريد تشغيل نماذج 7B', 'اشترِ هذه': 'RTX 3060 12 GB' },
          { 'حالتك': 'أجد بطاقة AMD بـ12GB رخيصة وأقبل جهد الإعداد', 'اشترِ هذه': 'RX 6700 XT (راجع الأسعار)' },
          { 'حالتك': 'أريد تشغيل نماذج 14B بميزانية طاقة محدودة', 'اشترِ هذه': 'RTX 5060 Ti 16 GB (أو RTX 4060 Ti 16 GB مستعملة)' },
          { 'حالتك': 'أريد بطاقة تُشغّل 14B بسرعة وتدوم سنوات', 'اشترِ هذه': 'RTX 5070 Ti أو RTX 4070 Ti Super 16 GB' },
          { 'حالتك': 'أريد بطاقة 16 GB مميزة والسعر ثانوي', 'اشترِ هذه': 'RTX 4080 Super 16 GB (5070 Ti أرخص)' },
          { 'حالتك': 'أحتاج نماذج 33B أو أخطط لبناء 70B بـGPU مزدوج لاحقاً', 'اشترِ هذه': 'RTX 4090 24 GB' },
          { 'حالتك': 'أحتاج بطاقة واحدة لنماذج 70B (تكمية عدوانية أو نقل جزئي)', 'اشترِ هذه': 'RTX 5090 32 GB' },
          { 'حالتك': 'لست متأكداً وأريد أأمن أول بطاقة', 'اشترِ هذه': 'RTX 3060 12 GB — وطوّر لاحقاً إن تجاوزتها' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'الفئة الاقتصادية (320–400 دولار): RTX 3060 12GB وRX 6700 XT',
        content:
          '**تُشغّل الفئة الاقتصادية أي نموذج 7B ومعظم نماذج 13B — ولمعظم مستخدمي النماذج المحلية لأول مرة، هذه هي القدرة التي يحتاجونها.** RTX 3060 12GB هي الاختيار الموصى به؛ وRX 6700 XT هي بديل AMD إن قبلت احتكاك الإعداد. ارتفعت أسعار هذه الفئة طوال 2026، وأصبحت RTX 3060 المستعملة تكلّف تقريباً مثل الجديدة — فقارن الاثنتين.',
        items: [
          '**RTX 3060 12GB (نحو 320–400 دولار جديدة، ونحو 320–350 دولاراً مستعملة):** 12 جيجابايت VRAM و170 واط ونحو 76 رمز/ثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين). تُشغّل Ministral 3 8B وQwen3 8B وDeepSeek-R1 7B ومعظم نماذج 13B. إصدار 12 جيجابايت هو الذي يجب شراؤه — تجنب إصدار 6 جيجابايت المحدود بنماذج 3B. المخزون الجديد محدود والبطاقة المستعملة لم تعد توفّر الكثير، فاشترِ الأرخص منهما مع فترة إرجاع.',
          '**RX 6700 XT (مستعملة، السعر يختلف بحسب البائع):** 12 جيجابايت VRAM و230 واط ونحو 65–80 رمز/ثانية على نماذج 7B (تقدير تقريبي مُحتسب من عرض نطاق الذاكرة، غير مقيس). تحقق من العروض الحالية؛ وهي تعتمد على AMD ROCm الذي يضيف وقتاً للإعداد.',
          '**لماذا تشتري هذه الفئة:** أقل تكلفة دخول، واستهلاك طاقة منخفض في RTX 3060، وVRAM كافية لنماذج 7B–13B التي تغطي الدردشة العامة والمساعدة في البرمجة والتلخيص.',
          '**لماذا تتجاوز هذه الفئة:** إن كنت تعرف مسبقاً أنك تريد نماذج 14B أو أكبر، فستُحبطك الفئة الاقتصادية خلال أسابيع — ابدأ من الفئة المتوسطة.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'اشترِ RTX 3060 بإصدار 12 جيجابايت تحديداً. إصدار 6 جيجابايت يبدو مشابهاً في القوائم لكنه يناسب نماذج 3B فقط — نصف عدد المعاملات هو الفرق بين مساعد قابل للاستخدام ولعبة.',
          },
          {
            type: 'warning',
            text: 'RX 6700 XT قد تكون مدخلاً اقتصادياً، لكن مدة إعداد ROCm على Linux تختلف بحسب التوزيعة والبطاقة، فراجع أولاً قائمة وحدات GPU المدعومة من AMD. إن كان الفرق في السعر عن RTX 3060 صغيراً، فاشترِ بطاقة NVIDIA.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'ابحث عن سعر RTX 3060 12GB على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'ابحث عن سعر RX 6700 XT على Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'الفئة المتوسطة (620–790 دولاراً): RTX 5060 Ti 16GB وRTX 4060 Ti 16GB وRX 7800 XT',
        content:
          '**الفئة المتوسطة موجودة لسبب واحد: 16 جيجابايت VRAM تتسع لنماذج 14B التي لا تستطيع بطاقات 12 جيجابايت استيعابها مع سياق صالح للاستخدام.** إن كانت نماذج 14B هدفك، فهذه أرخص فئة تُشغّلها بشكل سليم. RTX 5060 Ti 16GB هي خيار الجيل الحالي، وبأسعار الطلب المستخدمة في هذا الدليل هي أيضاً أقل خيارات NVIDIA بذاكرة 16 جيجابايت سعراً؛ أما RTX 4060 Ti 16GB فتكلّف تقريباً المبلغ نفسه مستعملة (نحو 650 دولاراً) وأكثر جديدة (نحو 790 دولاراً، من ثلاثة عروض فقط في BuySellRAM).',
        items: [
          '**RTX 5060 Ti 16GB (نحو 618 دولاراً جديدة / نحو 649 دولاراً سعر عرض مستعملة، سعر القائمة 429 دولاراً):** 16 جيجابايت GDDR7 و180 واط وعرض نطاق ذاكرة 448 GB/s. لم نقِس أداءها في هذا الدليل؛ وتذكر لوحة نتائج llama.cpp نحو 91 رمز/ثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين). تُشغّل نماذج من فئة Qwen3 14B براحة. ارتفعت أسعارها نحو 44% فوق سعر القائمة في 2026.',
          '**RTX 4060 Ti 16GB (نحو 790 دولاراً جديدة / نحو 650 دولاراً مستعملة، أسعار طلب):** 16 جيجابايت VRAM و165 واط ونحو 64 رمز/ثانية على نماذج 7B (رقم لوحة نتائج llama.cpp لإصدار 8 جيجابايت، مُبلَّغ من مطوّرين). تستخدم نفس رقاقة GPU وعرض النطاق 288 GB/s لإصدار 8 جيجابايت من RTX 4060 Ti، لذا سرعة الرمز متشابهة — إصدار 16 جيجابايت يشتري السعة لا السرعة الخام. مستعملة تكلّف تقريباً مثل RTX 5060 Ti 16 GB (نحو 650 دولاراً مقابل نحو 649 دولاراً)؛ وأدنى سعر جديد (نحو 790 دولاراً) من ثلاثة عروض فقط في BuySellRAM.',
          '**RX 7800 XT (سعر AMD: راجع القوائم الحالية؛ بيانات BuySellRAM تغطي NVIDIA فقط):** 16 جيجابايت VRAM و263 واط. لم نقِس أداءها في هذا الدليل؛ توقّع نحو 90–115 رمز/ثانية على 7B Q4 (تقدير تقريبي مُحتسب من عرض نطاق الذاكرة، غير مقيس)، مع إعداد AMD ROCm كمقايضة.',
          '**لماذا تشتري هذه الفئة:** تريد نماذج 14B، أو تريد استهلاك طاقة منخفضاً (RTX 4060 Ti)، أو تريد 16 جيجابايت بأقل سعر ممكن.',
          '**لماذا تتجاوز هذه الفئة:** إن كانت نماذج 7B كافية، فالفئة الاقتصادية أرخص بـ200–300 دولار؛ وإن أردت استدلال 14B سريعاً، فالفئة العالية أسرع بوضوح.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16GB ترقية في السعة لا في السرعة مقارنةً بإصدار 8 جيجابايت — اشترِها لأنك تحتاج استيعاب نماذج 14B لا لأنك تتوقع رموزاً أكثر في الثانية. RTX 5060 Ti 16GB هي الخيار الأسرع، وبأسعار الطلب المستخدمة في هذا الدليل تكلّف أقل جديدة وتقريباً المبلغ نفسه مستعملة.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'ابحث عن سعر RTX 5060 Ti 16GB على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'ابحث عن سعر RTX 4060 Ti 16GB على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'ابحث عن سعر RX 7800 XT على Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'الفئة العالية (900–1200 دولار): RTX 4080 Super وRTX 5070 Ti وRTX 4070 Ti Super',
        content:
          '**تحتفظ الفئة العالية بـ16 جيجابايت VRAM لكنها تضيف السرعة التي تجعل نماذج 7B–14B فورية ونماذج 22B قابلة للاستخدام.** تناسب البطاقات الثلاث النماذج نفسها التي تناسبها الفئة المتوسطة — أنت تدفع مقابل الرموز في الثانية لا السعة. وسّع ارتفاع أسعار 2026 الفجوة بين هذه الفئة والفئة المتوسطة.',
        items: [
          '**RTX 4080 Super 16GB (نحو 1200 دولار جديدة / نحو 1149 دولاراً مستعملة):** 16 جيجابايت VRAM و320 واط ونحو 148 رمز/ثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين). اختيار المحرر كخيار مميز بذاكرة 16 جيجابايت — أعلى بطاقة سعراً هنا، بعلاوة سعرية تبلغ نحو 190–300 دولار فوق البطاقتين التاليتين، وهي أبطأ من RTX 5070 Ti في القياسات نفسها.',
          '**RTX 5070 Ti 16GB (نحو 1008 دولارات جديدة / نحو 1050 دولاراً سعر عرض مستعملة، [سعر القائمة 749 دولاراً](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)):** 16 جيجابايت GDDR7 و300 واط وعرض نطاق ذاكرة 896 GB/s. لم نقِس أداءها في هذا الدليل؛ وتذكر لوحة نتائج llama.cpp نحو 177 رمز/ثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين)، وتُشغّل 16 جيجابايت نموذج 24B بـQ4 بهامش مريح.',
          '**RTX 4070 Ti Super 16GB (نحو 900 دولار جديدة / نحو 920 دولاراً مستعملة):** 16 جيجابايت VRAM و285 واط ونحو 132 رمز/ثانية (مُبلَّغ من مطوّرين). أرخص بطاقة جديدة في هذه الفئة، وبأقل استهلاك للطاقة بين الثلاث.',
          '**لماذا تشتري هذه الفئة:** تُشغّل نماذج 14B باستمرار وتريدها فورية، أو تقوم بعمل خفيف مع 22B وتريد هامشاً.',
          '**لماذا تتجاوز هذه الفئة:** إن كنت تحتاج نماذج 33B أو 70B فلن تتسع لها أي بطاقة 16 جيجابايت — انتقل إلى فئة المتحمسين بدل الإنفاق الزائد هنا.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'داخل هذه الفئة، RTX 5070 Ti هي الأسرع في قياسات المطورين (نحو 177 رمز/ثانية)، وRTX 4070 Ti Super هي الأرخص جديدة، وRTX 4080 Super هي الأعلى سعراً. ما لم ترغب تحديداً في RTX 4080 Super، فاختر إحدى البطاقتين الأرخص.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'ابحث عن سعر RTX 4080 Super على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'ابحث عن سعر RTX 5070 Ti على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'ابحث عن سعر RTX 4070 Ti Super على Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'فئة المتحمسين (2000 دولاراً+): RTX 4090 وRTX 5090',
        content:
          '**فئة المتحمسين هي الوحيدة التي تُشغّل نماذج أكبر من 22B — ومن بطاقات هذا الدليل لا تقترب من نموذج 70B إلا RTX 5090 بـ32 جيجابايت: فنموذج 70B بـQ4 نحو 43 جيجابايت وفق Ollama، لذا تتطلب هي أيضاً تكمية عدوانية أو نقلاً جزئياً إلى المعالج.** اشترِ هنا من أجل سعة VRAM لا السرعة؛ فالسرعة أثر جانبي. ضربت موجة الارتفاع في 2026 بطاقة RTX 5090 أشد من غيرها، لذا تتحرك الأسعار من أسبوع لآخر.',
        items: [
          '**RTX 4090 24GB (نحو 2000 دولاراً+ جديدة / نحو 2575-3010 دولار مستعملة):** 24 جيجابايت VRAM و450 واط ونحو 186 رمز/ثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين). تُشغّل نماذج 33B براحة. المخزون الجديد من RTX 4090 شحيح وقد يكون أدنى سعر جديد مسجّلاً قديماً — تمتد العروض حتى نحو 3800 دولار.',
          '**RTX 5090 32GB (نحو 4500-4921 دولاراً جديدة / نحو 5880-6350 دولاراً مستعملة، سعر القائمة 1999 دولاراً):** 32 جيجابايت GDDR7 VRAM و575 واط ونحو 290 رمز/ثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين). السعة 32 جيجابايت هي العنوان — هي البطاقة الوحيدة في هذا الدليل بذاكرة 32 جيجابايت، مع أن نموذج 70B بـQ4 نحو 43 جيجابايت وفق Ollama ولذا يظل يتطلب تكمية عدوانية أو نقلاً جزئياً إلى المعالج. ارتفعت أسعار العرض نحو 64% بين أغسطس وأكتوبر، وتقع عروض المستعملة فوق الجديدة.',
          '**لماذا تشتري هذه الفئة:** تحتاج نماذج 33B أو 70B، أو تُشغّل استدلالاً دفعياً، أو تريد بطاقة لا تحتاج استبدالاً لسنوات.',
          '**لماذا تتجاوز هذه الفئة:** لنماذج 7B–14B هي مبالغة — فالفئة العالية تقدم استجابات فورية لهذه الأحجام بأقل من نصف السعر واستهلاك الطاقة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'تذكر NVIDIA أن RTX 5090 بقدرة TGP تبلغ 575 واط، وأن طاقة النظام المطلوبة 1000 واط (تكوين Ryzen 9 9950X) وأن الحد الأدنى 850 واط في أداة فحص وحدات الطاقة لديها (راجع صفحة RTX 5090 في المصادر). وقد تتراخى وحدة طاقة أضعف من اللازم تحت الحمل، فأدرجها في ميزانية الشراء. هذا ليس نصيحة للسلامة الكهربائية؛ اتبع إرشادات مصنّع البطاقة بشأن وحدة الطاقة والكابلات.',
          },
          {
            type: 'note',
            text: 'وبأسعار المستعمل المرصودة البالغة نحو 2575–3010 دولار لكل RTX 4090 (قوائم بيع InsiderLLM، محدّثة في 2026-10-15)، يكلّف الزوج نحو 5150–6020 دولاراً، أي أكثر من RTX 5090 واحدة (نحو 4500–4900 دولار جديدة)، فتصبح البطاقة الواحدة أبسط لبناء 70B.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'ابحث عن سعر RTX 4090 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'ابحث عن سعر RTX 5090 على Amazon',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'متطلبات GPU للنماذج اللغوية المحلية: كم VRAM تحتاج؟',
        content:
          '**بتكمية Q4_K_M يحتاج النموذج إلى نحو 0.6 جيجابايت VRAM لكل مليار معامل، بالإضافة إلى 2–4 جيجابايت للسياق وأعباء الأدوات.** هذه الصيغة تنطبق مباشرة على الفئات الأربع.',
        items: [
          '**نماذج 7B — 8–9 جيجابايت:** تناسب أي فئة. بطاقة 12 جيجابايت تترك هامشاً مريحاً.',
          '**نماذج 13–14B — 11–13 جيجابايت:** تحتاج عملياً إلى 16 جيجابايت بعد احتساب السياق والأدوات. الفئة المتوسطة فما فوق (RTX 5060 Ti 16 GB أو أفضل).',
          '**نماذج 22B — 14–16 جيجابايت:** ضيقة على بطاقة 16 جيجابايت؛ مريحة من الفئة العالية فما فوق.',
          '**نماذج 33B — 19–22 جيجابايت:** تحتاج بطاقة 24 جيجابايت. نطاق RTX 4090.',
          '**نماذج 70B — نحو 43 جيجابايت بـQ4 (Llama 3.3 70B، وفق Ollama):** تتجاوز أي بطاقة منفردة هنا؛ وRTX 5090 بـ32 جيجابايت لا تقترب منها إلا بتكمية عدوانية أو نقل جزئي إلى المعالج، وإلا فخطط لبناء GPU مزدوج. بطاقة 24 جيجابايت واحدة لا تستوعب نموذج 70B بـQ4.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'طول السياق تكلفة VRAM خفية — الأوامر الطويلة ونوافذ السياق الكبيرة تستهلك VRAM فوق أوزان النموذج. اترك دائماً 2–4 جيجابايت هامشاً. للاطلاع على الطريقة الكاملة، راجع دليل متطلبات VRAM المرتبط في قراءة ذات صلة.',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: 'لماذا ارتفعت أسعار بطاقات الرسومات في 2026؟',
        content:
          '**ارتفعت أسعار GPU بحدة في 2026، فدفعت البطاقات الاستهلاكية إلى نحو 2.5 ضعف سعر قائمتها الأصلي كحد أقصى (RTX 5090؛ ونحو 1.35–1.45 ضعف لـ RTX 5060 Ti وRTX 5070 Ti)؛ وتختلف المصادر في السبب.** يغيّر هذا حسابات الشراء، فخطط بناءً عليه لا على أسعار الإطلاق.',
        items: [
          '**لا يوجد سبب واحد مثبت.** من العوامل المذكورة إمداد DRAM/GDDR7 والطلب من مراكز بيانات الذكاء الاصطناعي وتغييرات إنتاج مُبلَّغ عنها، وتختلف المصادر في مدى إسهام كل منها. يعدّ [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) و[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) الذاكرة جزءاً من التفسير؛ وتقول BuySellRAM إنها لا يمكن أن تكون الجزء الأكبر، وإن بياناتها لا تفصل الذاكرة عن الإمداد والتخصيص والطلب.',
          '**RTX 5090 أوضح مثال:** سعر إطلاق 1999 دولاراً، لكن أدنى سعر عرض نحو 4921 دولاراً في بيانات BuySellRAM — نحو 2.5 ضعف، وبزيادة 64% منذ أغسطس.',
          '**البطاقات الأصغر ارتفعت أيضاً، بنسب مختلفة.** تُعرض RTX 5060 Ti 16GB بنحو 44% فوق سعر قائمتها البالغ 429 دولاراً وRTX 5070 Ti بنحو 35% فوق 749 دولاراً، رغم أن كلتيهما بذاكرة 16 جيجابايت.',
          '**المستعملة لم تعد أرخص تلقائياً.** في بيانات أسعار العرض من BuySellRAM، جاءت عروض RTX 5090 وRTX 4090 وRTX 4070 Ti Super وRTX 5060 Ti وRTX 5070 Ti المستعملة عند مستوى الجديدة أو فوقها، وارتفعت RTX 3060 12GB المستعملة نحو 31% منذ أغسطس. قارن الاثنتين وفضّل البائعين الذين يتيحون الإرجاع.',
          '**لا تعوّل على تحديث قريب.** أُفيد بأن بطاقات RTX 50 Super من NVIDIA مؤجلة إلى أجل غير مسمى بسبب إمدادات الذاكرة (لم تؤكد NVIDIA ذلك). **القرار:** إن استطعت الانتظار فراقب تراجع الأسعار؛ وإن لم تستطع فاشترِ أصغر بطاقة تناسب نموذجك المستهدف.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تبلغ أسعار GPU في 2026 نحو 2.5 ضعف سعر القائمة كحد أقصى (RTX 5090؛ ونحو 1.35–1.45 ضعف لـ RTX 5060 Ti وRTX 5070 Ti)؛ ومن العوامل المذكورة إمداد DRAM/GDDR7 والطلب من مراكز بيانات الذكاء الاصطناعي وتختلف المصادر في وزن كل منها، لذا ينبغي لمشتري النماذج اللغوية المحلية أن يقارن الأسعار الجديدة والمستعملة وأن يشتري أصغر بطاقة تناسب النموذج المستهدف.',
          },
          {
            type: 'plain-terms',
            text: 'البطاقات لم تتحسن، لكنها غلت، وتختلف المصادر في مقدار ما يعود منه إلى الذاكرة وما يعود إلى الطلب أو تخصيص الإمداد. إلى أن تتراجع الأسعار، عامل سعر القائمة كرقم تاريخي، وقارن الجديدة والمستعملة، ولا تدفع مقابل VRAM أكثر مما يحتاجه نموذجك فعلاً.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'مخطط قرار: اختر بطاقة رسومات للنماذج اللغوية المحلية في أربعة أسئلة',
        content:
          '**أربعة أسئلة، بالترتيب، توجّه معظم المشترين إلى بطاقة واحدة.**',
        items: [
          '**1. ما أكبر نموذج تريد تشغيله؟** 7B: الفئة الاقتصادية. 14B: الفئة المتوسطة (بطاقة 16 جيجابايت). 22B: الفئة العالية. 33B: RTX 4090. 70B: RTX 5090 أو GPU مزدوج.',
          '**2. ما سقف ميزانيتك الصارم؟** أقل من نحو 400 دولار: RTX 3060 12 GB. أقل من نحو 700 دولاراً: RTX 5060 Ti 16 GB أو RTX 4060 Ti 16 GB مستعملة. نحو 900–1200 دولار: RTX 4070 Ti Super أو RTX 5070 Ti أو RTX 4080 Super. 2000 دولاراً+: RTX 4090 أو RTX 5090.',
          '**3. NVIDIA أم AMD؟** اختر NVIDIA ما لم تكن تملك أجهزة AMD بالفعل أو تجد خصماً كبيراً على RX 7800 XT — فـCUDA قد يوفر وقت الإعداد مقارنة بـROCm.',
          '**4. هل لدى وحدة الطاقة لديك هامش كافٍ؟** البطاقات فوق الفئة المتوسطة تحتاج 285–575 واط؛ تأكد من وحدة الطاقة وتبريد الصندوق قبل شراء عتاد فئة المتحمسين.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر GPU للنماذج اللغوية المحلية بالإجابة عن حجم أكبر نموذج أولاً، ثم سقف الميزانية، ثم NVIDIA مقابل AMD، وأخيراً هامش وحدة الطاقة.',
          },
          {
            type: 'plain-terms',
            text: 'ابدأ بأكبر نموذج تريد تشغيله فعلاً ودعه يحدد فئتك. وبعد ذلك فقط انظر إلى السعر والعلامة التجارية وقدرة وحدة الطاقة على تحمّل البطاقة. بالترتيب المعاكس يُنفق الناس أكثر من اللازم أو يشترون بطاقة لا تُشغّل نموذجهم.',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-ar.webp',
        imageCaption:
          'مسار قرار من أربعة أسئلة لاختيار GPU للنماذج اللغوية المحلية: حجم أكبر نموذج مستهدف يحدد الفئة، وسقف الميزانية يضيّق الاختيار، وNVIDIA مقابل AMD يحدد العلامة، وهامش وحدة الطاقة يؤكد اختيار فئة المتحمسين.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'الأسعار الإقليمية وأين تشتري',
        content:
          '**تتفاوت أسعار GPU بين المناطق — أسعار هذا الدليل أمريكية، والأسعار الأوروبية تتضمن ضريبة القيمة المضافة.** الروابط أدناه روابط بحث عن المنتجات لكل منطقة، ولا تحمل علامات تابعة ولا تدرّ عمولة.',
        items: [
          '**الولايات المتحدة:** Amazon وNewegg لديهما أوسع مخزون. بطاقات RTX 3060 وRTX 4090 المستعملة شائعة؛ مخزون الطرازات الرائدة الجديد شحيح، وRTX 5090 غالباً ما تنفد بسعر القائمة.',
          '**ألمانيا:** Amazon.de وMindfactory.de؛ توقّع نحو 19% ضريبة قيمة مضافة ضمن الأسعار المعروضة، وأسعار GPU الألمانية تفوق الأرقام الأمريكية.',
          '**فرنسا:** Amazon.fr وLDLC؛ الأسعار مشابهة لألمانيا مع ضريبة 20%، ومخزون الطرازات الرائدة متقطع.',
          '**اليابان:** Amazon.co.jp وKakaku.com لمقارنة الأسعار؛ أسعار البطاقات الجديدة تتبع الأسعار الأمريكية، مع عرض أضيق من البطاقات المستعملة.',
          '**الصين:** JD.com هو السوق المرجعي؛ توافر GPU الراقية وأسعارها يختلفان كثيراً عن الأسواق الغربية.',
          '**الشرق الأوسط وشمال إفريقيا:** Amazon.ae والمستوردون المحليون. الأسعار عادةً أعلى من الأسعار الأمريكية؛ لم نرصد أسعاراً محلية لهذا الدليل، فتحقق من عروض البائعين مباشرة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'بسبب موجة 2026، كل رقم بالدولار في هذا الدليل لقطة سريعة التغير. افتح دائماً عرض البائع الحالي قبل الشراء — فالأسعار تتحرك من أسبوع لآخر.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'بطاقات GPU للنماذج اللغوية المحلية (الولايات المتحدة)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'تصفح بطاقات GPU على Amazon الأمريكي',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'بطاقات GPU للنماذج اللغوية المحلية (ألمانيا)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'تصفح بطاقات GPU على Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'بطاقات GPU للنماذج اللغوية المحلية (فرنسا)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'تصفح بطاقات GPU على Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'بطاقات GPU للنماذج اللغوية المحلية (اليابان)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'تصفح بطاقات GPU على Amazon.co.jp',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة عند شراء GPU للنماذج اللغوية المحلية',
        items: [
          '**الشراء بحسب الرموز في الثانية بدلاً من VRAM.** بطاقة أسرع لا تتسع لنموذجك عديمة الفائدة. تأكد أولاً أن النموذج يناسب VRAM مع هامش 2–4 جيجابايت، ثم قارن السرعة داخل تلك الفئة.',
          '**شراء RTX 3060 بـ6 جيجابايت بدلاً من إصدار 12 جيجابايت.** يشتركان في الاسم لا في الاستخدام — بطاقة 6 جيجابايت تقف عند نماذج 3B. تأكد دائماً من إصدار 12 جيجابايت في القائمة.',
          '**افتراض أن RTX 4060 Ti 16GB أسرع من إصدار 8 جيجابايت.** ليست كذلك — هي رقاقة GPU نفسها بذاكرة أكبر. اشترِها من أجل السعة (نماذج 14B) لا السرعة؛ وRTX 5060 Ti 16GB هي خيار 16 جيجابايت الأسرع.',
          '**التمسك بسعر القائمة بدل السعر الحالي.** تعني موجة 2026 أن أسعار الإطلاق لم تعد تعكس الواقع. ضع ميزانيتك على سعر البائع الحي، وقارن الجديدة بالمستعملة — فالمستعملة لم تعد أرخص بشكل موثوق.',
          '**تجاهل متطلبات وحدة الطاقة.** RTX 5090 بقدرة TGP تبلغ 575 واط، وتذكر NVIDIA أن طاقة النظام المطلوبة 1000 واط وأن الحد الأدنى 850 واط في أداة فحص وحدات الطاقة لديها. بطاقة تنطفئ تحت الحمل أسوأ من بطاقة أبطأ تعمل باستقرار.',
          '**اختيار AMD دون حساب وقت الإعداد.** RX 6700 XT وRX 7800 XT قيمتهما جيدة، لكن إعداد ROCm يستغرق ساعات. قارن ذلك الوقت بالمال الموفَّر مقابل بطاقة NVIDIA.',
          '**الإفراط في الشراء لنماذج 7B.** إن كانت نماذج 7B تغطي حالتك، فـRTX 4090 مال وطاقة مهدرة. طابق الفئة مع النموذج، لا مع الميزانية التي تملكها.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          'سبعة أخطاء شائعة عند شراء GPU للنماذج اللغوية المحلية: الشراء للسرعة قبل VRAM، والخلط بين RTX 3060 بـ6 و12 جيجابايت، وتوقع أن تكون RTX 4060 Ti 16GB أسرع، والتمسك بسعر القائمة، وتجاهل احتياجات وحدة الطاقة، وإغفال وقت إعداد AMD، والإفراط في الشراء لنماذج 7B.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[NVIDIA GeForce RTX 40 Series Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — أرقام رسمية لسعة VRAM والطاقة (TGP) لبطاقات RTX 4060 Ti وRTX 4070 Ti Super وRTX 4080 Super وRTX 4090.',
          '[NVIDIA GeForce RTX 5090 Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — أرقام رسمية لبطاقة RTX 5090: VRAM بسعة 32 جيجابايت GDDR7، وTGP بقدرة 575 واط، وطاقة نظام مطلوبة 1000 واط (تكوين Ryzen 9 9950X)، وحد أدنى 850 واط في أداة فحص وحدات الطاقة.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — أدنى أسعار العرض الأمريكية للجديدة والمستعملة في 11 أكتوبر 2026 مقابل 8 أغسطس 2026، استُخدمت لمعظم الأسعار في هذا الدليل (أسعار عرض لا مبيعات مكتملة).',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — نطاقات أسعار التجزئة وقوائم البيع على eBay لبطاقتي RTX 4090 وRTX 5090 (محدّث في 2026-10-15)؛ وأرقام RTX 4090 وRTX 5090 في هذا الدليل تجمع بين هذه النطاقات وأسعار العرض من BuySellRAM.',
          '[NVIDIA Newsroom — إعلان GeForce RTX 5060 Ti (2025-04-15)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — سعر الإطلاق 429 دولاراً لبطاقة RTX 5060 Ti 16GB (و379 دولاراً لنسخة 8GB).',
          '[NVIDIA Newsroom — إعلان سلسلة GeForce RTX 50 (2025-01-06)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — سعر الإطلاق 749 دولاراً لبطاقة RTX 5070 Ti.',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — سعر القائمة مقابل سعر السوق لبطاقات RTX 5090 وRTX 5070 Ti وRTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — تقرير (لم تؤكده NVIDIA) بتأجيل تحديث RTX 50 Super بسبب إمدادات الذاكرة.',
          '[AMD Radeon Specifications](https://www.amd.com/en/products/graphics/desktops/radeon.html) — أرقام رسمية لـVRAM والطاقة لبطاقتي RX 7800 XT وRX 6700 XT.',
          '[لوحة نتائج llama.cpp: Llama 2 7B Q4_0 على CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) — نتائج llama-bench بالرموز في الثانية أبلغ عنها مطورون لبطاقات RTX 3060 وRTX 4060 Ti (8 جيجابايت) وRTX 5060 Ti وRTX 4070 Ti Super وRTX 5070 Ti وRTX 4080 Super وRTX 4090 وRTX 5090؛ والإدخالات من مستخدمين وإصدارات بناء مختلفة.',
          '[Ollama: Llama 3.3 70B](https://ollama.com/library/llama3.3) — حجم تنزيل نموذج 70B مذكور بـ43 جيجابايت، وهو أساس رقم VRAM لنموذج 70B في هذا الدليل.',
          '[أفضل وحدات GPU للنماذج اللغوية المحلية 2026](/ar/local-llms/best-gpus-for-local-llms) — المجموعة الأوسع لاختبارات GPU في هذا الموقع.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما أرخص GPU لاستدلال النماذج اللغوية في 2026؟',
            a: 'NVIDIA RTX 3060 12GB، بنحو 320–400 دولار، هي أرخص بطاقة جديدة في هذا الدليل تُشغّل استدلال النماذج اللغوية المحلية بشكل جيد. 12 جيجابايت VRAM فيها تتسع لأي نموذج 7B ومعظم نماذج 13B بتكمية Q4، بنحو 76 رمزاً في الثانية على Llama 2 7B Q4_0 (مُبلَّغ من مطوّرين). قد تكون RX 6700 XT أرخص في سوق المستعمل، لكن السعر يختلف بحسب البائع وتتطلب إعداد AMD ROCm. أسعار RTX 3060 الجديدة والمستعملة متقاربة الآن، فقارن الاثنتين.',
          },
          {
            q: 'لماذا أسعار GPU مرتفعة جداً في 2026؟',
            a: 'لا يوجد سبب واحد مثبت. من العوامل المذكورة إمداد DRAM/GDDR7 والطلب من مراكز بيانات الذكاء الاصطناعي وتغييرات إنتاج مُبلَّغ عنها، وتختلف المصادر (InsiderLLM وBuySellRAM) في مدى إسهام كل منها؛ وتقول BuySellRAM إن الذاكرة جزء من التفسير لكنها لا يمكن أن تكون الجزء الأكبر. تُباع RTX 5090 الآن بنحو 2.5 ضعف سعر قائمتها الأصلي، وتُباع RTX 5060 Ti وRTX 5070 Ti بنحو 1.35–1.45 ضعف — أُطلقت RTX 5090 بـ1999 دولاراً لكنها تُعرض بنحو 4500-4900 دولار. ولم تعد البطاقات المستعملة بمنأى عن الارتفاع.',
          },
          {
            q: 'ما متطلبات GPU لتشغيل نموذج لغوي محلي؟',
            a: 'بتكمية Q4_K_M، خطط لنحو 0.6 جيجابايت VRAM لكل مليار معامل بالإضافة إلى 2–4 جيجابايت للأعباء. أي: 8–9 جيجابايت لنماذج 7B، و11–13 جيجابايت لـ14B، و19–22 جيجابايت لـ33B، ونحو 43 جيجابايت لـ70B (Llama 3.3 70B بـQ4، وفق Ollama). بطاقة 12 جيجابايت تغطي 7B براحة، وبطاقة 16 جيجابايت تغطي 14B، ونموذج 70B يتجاوز أي بطاقة منفردة هنا: فـRTX 5090 بـ32 جيجابايت لا تقترب منه إلا بتكمية عدوانية أو نقل جزئي إلى المعالج، وإلا فبناء GPU مزدوج.',
          },
          {
            q: 'ما أفضل بطاقة رسومات للنماذج اللغوية المحلية؟',
            a: 'أفضل بطاقة رسومات للنماذج اللغوية المحلية هي التي تملك VRAM كافية لنموذجك المستهدف ضمن ميزانيتك. لنماذج 7B تكفي RTX 3060 12GB (نحو 320–400 دولار). ولنماذج 14B فإن RTX 5060 Ti 16GB (نحو 618 دولاراً) أو RTX 4060 Ti 16GB مستعملة هي الخيار المتوسط. ولنماذج 33B تحتاج RTX 4090 بـ24 جيجابايت، ولنموذج 70B لا تقترب إلا RTX 5090 بـ32 جيجابايت، وذلك فقط بتكميم مكثّف أو تفريغ جزئي إلى CPU (نموذج 70B بـQ4 نحو 43 جيجابايت وفق Ollama). وبطاقات NVIDIA هي الخيار الأقل احتكاكاً لأن CUDA يعمل عادةً دون إعداد إضافي.',
          },
          {
            q: 'هل RTX 4060 Ti 16GB أسرع من إصدار 8GB؟',
            a: 'لا. RTX 4060 Ti بـ16 جيجابايت وبـ8 جيجابايت تستخدمان رقاقة GPU نفسها، لذا سرعة الاستدلال لكل رمز متشابهة — نحو 64 رمزاً في الثانية على نماذج 7B (رقم لوحة نتائج llama.cpp لإصدار 8 جيجابايت، مُبلَّغ من مطوّرين). إصدار 16 جيجابايت يُضيف السعة، مما يتيح تشغيل نماذج 14B التي لا تناسب 8 جيجابايت. اشترِه لـVRAM، لا للسرعة.',
          },
          {
            q: 'هل أختار NVIDIA أم AMD للنماذج اللغوية المحلية؟',
            a: 'اختر NVIDIA ما لم تكن تملك أجهزة AMD بالفعل أو وجدت خصماً كبيراً. CUDA من NVIDIA يعمل عادةً مع Ollama وLM Studio وllama.cpp دون إعداد إضافي. بطاقات AMD كـRX 6700 XT وRX 7800 XT تقدم VRAM تنافسية مقابل الدولار، لكن يختلف وقت إعداد ROCm حسب التوزيعة ووحدة GPU؛ راجع قائمة وحدات GPU المدعومة من AMD.',
          },
          {
            q: 'هل GPU واحدة تستطيع تشغيل نموذج 70B؟',
            a: 'من بطاقات هذا الدليل لا تقترب إلا RTX 5090 32GB، وذلك فقط بتكمية عدوانية أو نقل جزئي إلى المعالج — فنموذج 70B بـQ4 نحو 43 جيجابايت وفق Ollama. RTX 4090 بـ24 جيجابايت لا تستطيع استيعاب نموذج 70B بـQ4 وحدها؛ الحل الشائع بطاقتا RTX 4090 للـVRAM المجمّعة، وإن كان هذا الزوج بالأسعار المستخدمة في هذا الدليل يكلّف تقريباً مثل RTX 5090 واحدة.',
          },
          {
            q: 'هل تستحق RTX 5090 مقارنةً بـRTX 4090 للنماذج اللغوية المحلية؟',
            a: 'فقط إذا كنت تحتاج تحديداً أكثر من 24 جيجابايت على بطاقة واحدة، مثلاً للاقتراب من نماذج 70B. RTX 5090 لديها 32 جيجابايت VRAM مقابل 24 جيجابايت في RTX 4090، وهذا هو العامل الحاسم. لنماذج 7B–33B، تستوعب RTX 4090 النماذج نفسها؛ وبالأسعار المستخدمة في هذا الدليل تكلّف RTX 5090 نحو 1.8–2.4 ضعف RTX 4090، فلا تدفع فيها إلا إذا كانت الجيجابايتات الثمانية الإضافية تحل مشكلة حقيقية.',
          },
          {
            q: 'ما وحدة الطاقة التي أحتاجها لهذه البطاقات؟',
            a: 'اجعل وحدة الطاقة تناسب الفئة: وحدة 550 واط تناسب RTX 3060، و650–750 واط تناسب RTX 4060 Ti وRTX 5060 Ti وRTX 4070 Ti Super وRTX 5070 Ti، و850 واط تناسب RTX 4090، وبالنسبة لـRTX 5090 (TGP بقدرة 575 واط) تذكر NVIDIA أن طاقة النظام المطلوبة 1000 واط (تكوين Ryzen 9 9950X) وأن الحد الأدنى 850 واط في أداة فحص وحدات الطاقة لديها. وحدات الطاقة الضعيفة تسبب عدم الاستقرار تحت الحمل. اتبع إرشادات الشركة المصنّعة للبطاقة ولمصدر الطاقة؛ وهذا ليس نصيحة للسلامة الكهربائية.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[اطّلع على متطلبات VRAM الكاملة لكل حجم نموذج](/ar/local-llms/how-much-vram-local-llm) — الطريقة الكاملة لـVRAM حسب حجم النموذج وراء الصيغة السريعة في هذا الدليل.',
          '[قارن أكثر من 15 GPU ببيانات قياسية منشورة للنماذج اللغوية المحلية](/ar/local-llms/best-gpus-for-local-llms) — المجموعة الأوسع من البيانات القياسية بما فيها البطاقات الأقدم وبطاقات الخادم خارج هذه البطاقات العشر.',
          '[اطّلع على النماذج التي تعمل على RTX 3060 12GB الاقتصادية](/ar/local-llms/best-budget-gpus-local-llm) — السرعات نموذجاً بنموذج للفئة الاقتصادية، بما فيها الفرق بين 6 و12 جيجابايت.',
          '[قارن RTX 5090 وRTX 4090 وجهاً لوجه](/ar/local-llms/rtx-5090-vs-rtx-4090-local-llm) — متى تستحق الترقية إلى RTX 5090 ومتى تكفي RTX 4090.',
          '[افهم كيف يُحدد Q4_K_M تكلفة VRAM](/ar/local-llms/llm-quantization-explained) — لماذا Q4_K_M هو المعيار وكيف تُغيّر التكمية حساب VRAM.',
          '[أفضل GPU بأقل من 1,000 دولار لاستدلال LLM محليًا؟](/ar/prompt-bites/best-gpu-under-1000-local-llm) — فئة 24 جيجابايت: RTX 4090 مستعملة مقابل RTX 4080 SUPER جديدة.',
          '[RTX 4060 مقابل RTX 3060 12GB: أيهما أفضل لتشغيل LLM محليًا؟](/ar/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — لماذا يتفوق المزيد من VRAM على جيل أحدث في هذا الاستخدام.',
          '[أفضل بطاقة Intel Arc لتشغيل LLM محليًا؟](/ar/prompt-bites/best-intel-arc-gpu-local-llm) — بطاقة Arc B580 كبديل أرخص، والتنازلات البرمجية المصاحبة لها.',
          '[أفضل إعداد RTX 4090 لتشغيل نماذج 70B؟](/ar/prompt-bites/best-rtx-4090-setup-70b-models) — ما يتطلبه فعليًا تشغيل نموذج 70B على البطاقة الأعلى في هذا الدليل.',
          '[أفضل LLM محلي لجهاز MacBook Air بدون eGPU؟](/ar/prompt-bites/best-local-llm-macbook-air-no-egpu) — لماذا لا يمكن لبطاقة eGPU أن تحل محل بطاقات GPU في هذا الدليل على شرائح Apple Silicon.',
          '[أفضل حاسوب محمول يعمل بـ Windows لتشغيل LLM محليًا بأقل من 1,500 دولار؟](/ar/prompt-bites/best-windows-laptop-local-llm-under-1500) — النظير المتنقل لفئات سطح المكتب في هذا الدليل.',
          '[ما الأجهزة التي تحتاجها لضبط نموذج 7B محليًا؟](/ar/prompt-bites/fine-tuning-7b-model-locally-hardware) — أي هذه البطاقات تصلح أيضًا لضبط QLoRA وليس فقط للاستدلال.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل بطاقة رسومات لتشغيل النماذج اللغوية المحلية: دليل شراء GPU 2026',
      description: 'عشر بطاقات رسومات مقارَنة للنماذج اللغوية المحلية في أربع ميزانيات: من RTX 3060 إلى RTX 5090. VRAM والسرعة واستهلاك الطاقة وأسعار 2026، مع متطلبات GPU لكل نموذج.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-22',
      dateModified: '2026-11-15',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-11-15',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: '로컬 LLM용 최고의 그래픽카드: 2026년 GPU 구매 가이드',
    seoTitle: '로컬 LLM 그래픽카드 추천 2026: 보급형부터 RTX 5090까지',
    intro:
      '로컬 LLM용 GPU 관련 조언의 대부분은 잘못된 수치를 최적화하고 있습니다. 초당 토큰 속도는 모델이 얼마나 빠르게 응답하는지를 결정하지만, VRAM은 모델이 실행될 수 있는지 여부를 결정합니다. 메모리에 맞지 않는 모델은 맞는 모델보다 무한히 느립니다. 이 가이드는 실제 구매 결정을 좌우하는 수치인 VRAM 용량, 추론 속도, 전력 소비, 가격에 따라 네 가지 가격대에서 10종의 소비자용 그래픽카드를 비교합니다. 가격에 관한 주의 사항: 2026년에는 GPU 가격이 급등했으며(거론되는 요인으로는 메모리 공급과 AI 데이터센터 수요가 있고, 출처마다 각 요인의 비중에 대한 의견이 다릅니다) RTX 5090은 현재 출시 가격의 약 2.5배에 판매되고 있습니다. 따라서 여기의 가격 대부분은 출처에 링크된 BuySellRAM 데이터의 미국 최저 호가이며, RTX 4090과 RTX 5090의 가격대는 InsiderLLM의 낙찰 기록 데이터도 함께 사용했습니다. 구매 전 현재 가격을 반드시 확인하십시오.',
    metaDescription:
      '로컬 LLM용 그래픽카드 추천: GPU 10종을 VRAM, 속도, 전력, 2026년 가격으로 비교. 최저가 모델부터 RTX 5090까지, 모델 크기별 GPU 요구 사양 포함.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ko.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — 10종의 그래픽카드, 4가지 예산, 하나의 규칙: VRAM으로 구매하십시오.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Ministral 3 8B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 5060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
      'NVIDIA RTX 5070 Ti',
      'NVIDIA RTX 4080 Super',
      'NVIDIA RTX 4090',
      'NVIDIA RTX 5090',
    ],
    audience:
      '로컬 LLM 실행을 위해 특정 GPU를 선택하는 구매자로, 가격대와 목표 모델 크기를 기준으로 결정을 내리는 분들입니다. 양자화와 VRAM 제약에 대한 기본 지식이 있으나 현재 GPU 제품군에는 익숙하지 않은 분들을 대상으로 합니다.',
    readTime: '14분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'GPU for local LLMs',
    targetKeywords: [
      '로컬 llm gpu 추천 2026',
      '로컬 llm gpu 구매 가이드',
      'rtx 3060 vs rtx 4090 로컬 llm',
      '로컬 llm vram 얼마나 필요한가',
      '로컬 llm 가성비 gpu',
      '로컬 llm 그래픽카드 추천',
      '로컬 llm gpu 요구 사양',
    ],
    leadAnswerBlock:
      '**로컬 LLM용 최고의 그래픽카드는 가장 빠른 카드가 아니라 모델에 맞는 VRAM을 갖춘 카드입니다. RTX 3060 12 GB는 7B 모델을 실행하고, 16 GB 카드(RTX 5060 Ti, RTX 4060 Ti 또는 RTX 5070 Ti)는 14B 모델을 처리하며, RTX 4090 24 GB는 33B 모델을 처리하고, 이 가이드의 카드 중 70B 모델에 근접하는 것은 RTX 5090 32 GB뿐이며, 그것도 공격적인 양자화나 CPU로의 부분 오프로드를 전제로 합니다 (Q4의 70B는 Ollama 기준 약 43 GB입니다).**',
    quickAnswerTop: {
      ko: {
        question: '2026년 로컬 LLM 실행에 가장 좋은 그래픽카드는 무엇입니까?',
        answer:
          'VRAM 기준으로 먼저 구매하고, 그 다음 속도를 고려하십시오. RTX 3060 12 GB (~$320-400)는 보급형 선택지로 7B 모델을 실행합니다. 16 GB 카드는 14B 모델을 위한 중급 선택지로, RTX 5060 Ti 16 GB (신품 ~$620) 또는 중고 RTX 4060 Ti 16 GB (~$650)가 있습니다. RTX 4090 24 GB는 33B 모델을 실행하고, 이 가이드의 카드 중 70B에 근접하는 것은 RTX 5090 32 GB (~$4,500-4,900)뿐이며, 그것도 공격적인 양자화나 CPU로의 부분 오프로드를 전제로 합니다 (Q4의 70B는 Ollama 기준 약 43 GB입니다). 2026년 가격은 출시 가격을 크게 상회하고 있음을 유의하십시오.',
        bullets: [
          '보급형: RTX 3060 12 GB, 신품·중고 모두 ~$320-400, 7B 모델을 ~76 토큰/초(Llama 2 7B Q4_0, 개발자 보고)로 실행',
          '중급형: RTX 5060 Ti 16 GB, 신품 ~$620 ([출시 가격 $429](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299)), 여유 있게 14B 모델 실행 가능',
          '고급형: RTX 5090 32 GB, ~$4,500-4,900, 여기서 유일한 32 GB 카드; 70B(Q4 약 43 GB)에는 공격적인 양자화나 오프로드 필요',
          '2026년 GPU 가격은 출시 가격의 최대 약 2.5배(RTX 5090, RTX 5060 Ti·RTX 5070 Ti는 약 1.35~1.45배) — 구매 전 신품과 중고를 비교하십시오',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '편집자 추천', anchor: '#editors-choice' },
      { label: 'GPU 비교표', anchor: '#comparison-table' },
      { label: '어떤 GPU를 구매해야 합니까?', anchor: '#which-gpu' },
      { label: '보급형 ($320-400)', anchor: '#budget-tier' },
      { label: '중급형 ($620-790)', anchor: '#mid-tier' },
      { label: '고급형 ($900-1200)', anchor: '#high-tier' },
      { label: '최고급형 ($2000+)', anchor: '#enthusiast-tier' },
      { label: 'GPU 요구 사양: VRAM은 얼마나 필요합니까?', anchor: '#vram-needs' },
      { label: '2026년 GPU 가격이 오른 이유', anchor: '#price-surge' },
      { label: '결정 흐름도', anchor: '#decision-flowchart' },
      { label: '지역별 가격 및 구매처', anchor: '#where-to-buy' },
      { label: '일반적인 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽기 자료', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**VRAM이 결정적인 제약 조건입니다.** VRAM에 맞지 않는 모델은 로드에 실패하거나 시스템 RAM으로 넘쳐 대화형 사용에 너무 느려집니다. 목표 모델에 맞는 VRAM을 가진 등급을 선택한 후, 해당 등급 내에서 속도를 최적화하십시오.',
          '**2026년에 가격이 급등했습니다.** GPU 가격이 출시 가격보다 최대 약 2.5배(RTX 5090, RTX 5060 Ti·RTX 5070 Ti는 약 1.35~1.45배) 높습니다. 거론되는 요인으로는 DRAM/GDDR7 공급, AI 데이터센터 수요, 보도된 생산 변화가 있으며, 각 요인의 비중에 대해서는 출처마다 의견이 다릅니다. RTX 5090은 ~$4,500-4,900에 판매되고 있으며 출시 가격인 $1,999가 아니고, 8월과 10월 사이에 가격이 다시 올랐습니다. 여기의 가격을 스냅샷으로 취급하십시오(대부분 미국 호가이며 RTX 4090과 RTX 5090의 가격대에는 낙찰 기록도 사용했습니다). 구매 전 신품과 중고를 비교하십시오.',
          '**보급형 추천: NVIDIA RTX 3060 12 GB** (~$320-400, 신품과 중고 가격이 이제 거의 같음) — 7B 모델(Llama 2 7B Q4_0에서 ~76 토큰/초, 개발자 보고)을 실행하고 Q4에서 대부분의 13B 모델도 처리합니다.',
          '**중급형 추천: NVIDIA RTX 5060 Ti 16 GB** (신품 ~$618, 중고 호가 ~$649) — 16 GB VRAM으로 여유 있는 컨텍스트와 함께 14B 모델을 해결하며, 448 GB/s 메모리 대역폭(~91 토큰/초, 개발자 보고)은 구형 RTX 4060 Ti 16 GB의 288 GB/s(8 GB 버전 ~64 토큰/초, 개발자 보고)보다 높습니다. 중고로는 둘이 거의 같은 가격(~$650)이며, RTX 4060 Ti 16 GB 신품 최저가 ~$790은 BuySellRAM에 따르면 단 3건의 매물에 근거합니다.',
          '**고급형 추천: NVIDIA RTX 4080 Super 16 GB** (~$1,200) — 여기서 가장 비싼 16 GB 카드입니다 (~148 토큰/초, 개발자 보고). RTX 4070 Ti Super (~$900)와 RTX 5070 Ti (~$1,008)는 더 저렴하고 가성비가 더 좋을 수 있으며, RTX 5070 Ti는 같은 개발자 측정에서 더 빠릅니다 (~177 토큰/초).',
          '**최고급형 추천: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — RTX 4090 (신품 ~$2,000 이상, 중고 ~$2,575-3,010)은 33B 모델을 실행하고, 이 가이드의 카드 중 70B에 근접하는 것은 RTX 5090 (~$4,500-4,900)뿐이며, 그것도 공격적인 양자화나 CPU로의 부분 오프로드를 전제로 합니다 (Q4의 70B는 Ollama 기준 약 43 GB입니다).',
          '**AMD는 실행 가능하지만 설정 작업이 더 많습니다.** RX 6700 XT (12 GB)와 RX 7800 XT (16 GB)는 경쟁력 있는 가격에 VRAM을 제공하지만, ROCm 설정 시간은 배포판과 카드에 따라 다릅니다.',
          '**전력 소비는 등급에 따라 증가합니다.** RTX 3060은 170 W를 사용하고, RTX 5090의 TGP는 575 W이며, [NVIDIA는](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) 필요 시스템 전력 1000 W(Ryzen 9 9950X 구성)와 PSU 검사기 최소값 850 W를 제시합니다. 카드 가격과 함께 파워 서플라이 비용도 예산에 포함하십시오.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**보급형 ($320-400):** RTX 3060 12 GB 또는 RX 6700 XT 12 GB — 7B 모델과 대부분의 13B 모델을 실행합니다.',
          '**중급형 ($620-790):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB 또는 RX 7800 XT 16 GB — 14B 모델을 편안하게 실행합니다.',
          '**고급형 ($900-1,200):** RTX 4080 Super, RTX 5070 Ti 또는 RTX 4070 Ti Super (모두 16 GB) — 14B 추론 고속화, 22B 경량 작업 가능.',
          '**최고급형 ($2,000+):** RTX 4090 24 GB 또는 RTX 5090 32 GB — 33B 모델, 70B는 RTX 5090에서도 공격적인 양자화나 부분 CPU 오프로드가 필요.',
          '**Q4_K_M VRAM 기본 규칙:** 파라미터 10억 개당 약 0.6 GB, 여기에 컨텍스트와 도구를 위한 2-4 GB 추가.',
          '**전력 소비 범위:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**2026년 가격 현실:** 가격은 출시 가격의 최대 약 2.5배(RTX 5090, RTX 5060 Ti·RTX 5070 Ti는 약 1.35~1.45배)이며 원인에 대해서는 출처마다 의견이 다르고, 중고 카드가 더 이상 신품보다 항상 저렴하지는 않으므로 둘 다 비교하십시오.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '편집자 추천 (프리미엄 16 GB): RTX 4080 Super',
        highlight: true,
        content:
          '**$1,000 이상을 지출할 수 있고 프리미엄 16 GB 카드를 원하는 구매자에게 NVIDIA RTX 4080 Super 16 GB는 편집자 추천입니다. 가성비가 아니라 프리미엄 16 GB 구성을 위한 선택입니다.** 16 GB VRAM으로 여유 있는 컨텍스트와 함께 14B 모델을 처리하고, Llama 2 7B Q4_0에서 약 148 토큰/초(개발자 보고)를 제공하며, ~$1,200로 여기서 가장 비싼 16 GB 카드입니다. RTX 4070 Ti Super (~$900, ~132 토큰/초)와 RTX 5070 Ti (~$1,008, ~177 토큰/초)는 각각 약 $300, 약 $190 더 저렴하며 가성비가 더 좋을 수 있고, RTX 5070 Ti는 같은 개발자 측정에서 더 빠릅니다. 예산이 $700 이하로 고정되어 있다면, RTX 5060 Ti 16 GB가 가성비 선택입니다. 구체적으로 33B 또는 70B 모델이 필요한 경우에만 더 많이 지출하십시오.',
        callouts: [
          {
            type: 'note',
            text: '이 편집자 추천은 프리미엄 16 GB 선택이며 가격 대비 용량 순위가 아닙니다. RTX 4070 Ti Super와 RTX 5070 Ti는 더 저렴하고 가성비가 더 좋을 수 있습니다. PromptQuorum은 어떠한 제휴 프로그램에도 등록되어 있지 않으며 아래 링크에는 제휴 태그가 없습니다 — 커미션이 발생하지 않는 단순 참조 링크입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Amazon에서 RTX 4080 Super 가격 보기',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Newegg에서 RTX 4080 Super 가격 보기',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026년 로컬 LLM용 10종 GPU 비교',
        content:
          'VRAM과 전력 소비 수치는 제조사 사양입니다. 「개발자 보고」로 표시한 속도는 출처에 링크된 llama.cpp 스코어보드의 개발자 보고 llama-bench 결과(Llama 2 7B Q4_0, CUDA)입니다. 항목은 서로 다른 사용자와 빌드에서 나온 것이며 이 가이드를 위해 다시 측정하지 않았습니다. RTX 4060 Ti 16 GB 수치는 8 GB 버전의 결과입니다(동일한 GPU 다이, 288 GB/s 메모리 대역폭). RX 6700 XT와 RX 7800 XT는 해당 스코어보드에 결과가 없으므로 속도는 메모리 대역폭에서 측정 결과에 비례해 환산한 대략적인 추정치(추정)입니다. 가격 대부분은 링크된 BuySellRAM 데이터의 미국 최저 호가이며, RTX 4090과 RTX 5090의 가격대는 여기에 InsiderLLM의 소매가 및 낙찰 기록 가격대(2026-10-15 갱신)를 결합한 것입니다. 가격이 출시 가격의 최대 약 2.5배(RTX 5090, RTX 5060 Ti·RTX 5070 Ti는 약 1.35~1.45배)이므로 구매 전 반드시 다시 확인하십시오(이 페이지의 갱신 날짜 참조). 연결된 보급형 GPU 페이지는 일부 카드에 이전 추정치를 사용하므로(예: RTX 3060 12 GB 중고 약 $290-330) 두 페이지의 수치가 약간 다를 수 있습니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 LLM의 경우 GPU의 VRAM이 실행 가능한 모델을 결정하고 초당 토큰이 응답 속도를 결정합니다. VRAM을 먼저 구매하고 그 다음 속도를 최적화하십시오.',
          },
          {
            type: 'plain-terms',
            text: 'VRAM을 책상 크기로, 모델을 그 위에 올려놓는 것으로 생각하십시오. 더 빠른 GPU는 책상을 더 빨리 정리하지만, 모델이 책상에 전혀 맞지 않으면 속도는 아무 의미가 없습니다. 먼저 충분히 큰 책상을 가진 등급을 선택하십시오.',
          },
        ],
        columns: ['GPU', 'VRAM', '속도 (7B Q4)', '전력 소비', '가격 (미국, 2026)', '적합 용도'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            '속도 (7B Q4)': '~76 토큰/초 (개발자 보고)',
            '전력 소비': '170 W',
            '가격 (미국, 2026)': '신품 $320-400 / 중고 $320-350',
            '적합 용도': '보급형 입문 — 7B 모델',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            '속도 (7B Q4)': '~65-80 토큰/초 (추정)',
            '전력 소비': '230 W',
            '가격 (미국, 2026)': '판매자별 상이 — 실시간 확인',
            '적합 용도': 'AMD 12 GB, ROCm 설정 감수',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~64 토큰/초 (8 GB 버전, 개발자 보고)',
            '전력 소비': '165 W',
            '가격 (미국, 2026)': '신품 ~$790 / 중고 ~$650',
            '적합 용도': '중급형 — 14B 모델, 저전력',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~91 토큰/초 (개발자 보고)',
            '전력 소비': '180 W',
            '가격 (미국, 2026)': '신품 $618 / 중고 $649',
            '적합 용도': '중급형 — 14B, 최신 세대',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~90-115 토큰/초 (추정)',
            '전력 소비': '263 W',
            '가격 (미국, 2026)': 'AMD 가격: 최신 매물 확인',
            '적합 용도': 'AMD에서 16 GB, ROCm 설정 감수',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~132 토큰/초 (개발자 보고)',
            '전력 소비': '285 W',
            '가격 (미국, 2026)': '신품 $900 / 중고 $920',
            '적합 용도': '14B 고속, 저전력 소비',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~177 토큰/초 (개발자 보고)',
            '전력 소비': '300 W',
            '가격 (미국, 2026)': '신품 $1,008 / 중고 $1,050',
            '적합 용도': '14B 고속, 가성비 16 GB',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~148 토큰/초 (개발자 보고)',
            '전력 소비': '320 W',
            '가격 (미국, 2026)': '신품 $1,200 / 중고 $1,149',
            '적합 용도': '편집자 추천 — 프리미엄 16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            '속도 (7B Q4)': '~186 토큰/초 (개발자 보고)',
            '전력 소비': '450 W',
            '가격 (미국, 2026)': '신품 ~$2,000+ / 중고 $2,575-3,010',
            '적합 용도': '33B 모델, 70B용 이중 GPU',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            '속도 (7B Q4)': '~290 토큰/초 (개발자 보고)',
            '전력 소비': '575 W',
            '가격 (미국, 2026)': '신품 $4,500-4,921 / 중고 $5,880-6,350',
            '적합 용도': '70B (공격적인 양자화나 오프로드 전제)',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ko.webp',
        imageCaption:
          '4가지 예산 등급에서 VRAM, 7B Q4 추론 속도, 전력 소비, 현재 미국 가격으로 비교한 로컬 LLM용 10종 소비자용 그래픽카드. VRAM은 12 GB (RTX 3060)에서 32 GB (RTX 5090)까지 증가합니다. 속도를 최적화하기 전에 필요한 모델 크기에 맞는 카드를 먼저 구매하십시오.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: '어떤 GPU를 구매해야 합니까?',
        content:
          '**가장 큰 목표 모델이 등급을 결정하고, 예산이 그 등급 내에서 NVIDIA와 AMD 중 하나를 결정합니다.** 자신의 상황에 맞는 행을 찾으십시오.',
        columns: ['상황', '구매 권장'],
        rows: [
          { '상황': '$400 미만으로 7B 모델을 실행하고 싶습니다', '구매 권장': 'RTX 3060 12 GB' },
          { '상황': '저렴한 12 GB AMD 카드를 구할 수 있고 설정 작업을 감수합니다', '구매 권장': 'RX 6700 XT (가격 확인)' },
          { '상황': '전력 예산이 타이트한 상태에서 14B 모델을 실행하고 싶습니다', '구매 권장': 'RTX 5060 Ti 16 GB (또는 중고 RTX 4060 Ti 16 GB)' },
          { '상황': '14B를 빠르게 실행하고 몇 년간 오래 쓸 카드를 원합니다', '구매 권장': 'RTX 5070 Ti 또는 RTX 4070 Ti Super 16 GB' },
          { '상황': '프리미엄 16 GB 카드를 원하고 가격은 부차적입니다', '구매 권장': 'RTX 4080 Super 16 GB (5070 Ti가 더 저렴)' },
          { '상황': '33B 모델이 필요하거나 70B용 이중 GPU 구성을 계획하고 있습니다', '구매 권장': 'RTX 4090 24 GB' },
          { '상황': '70B 모델용 단일 카드가 필요합니다 (공격적인 양자화 또는 부분 오프로드)', '구매 권장': 'RTX 5090 32 GB' },
          { '상황': '확신이 없고 가장 안전한 첫 번째 GPU를 원합니다', '구매 권장': 'RTX 3060 12 GB — 나중에 필요하면 업그레이드하십시오' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '보급형 ($320-400): RTX 3060 12 GB와 RX 6700 XT',
        content:
          '**보급형은 7B 모델과 대부분의 13B 모델을 실행할 수 있습니다. 로컬 LLM 초보자 대부분에게는 이것으로 충분합니다.** RTX 3060 12 GB가 추천 선택이고, RX 6700 XT는 설정 작업을 감수할 경우 AMD 쪽 대안입니다. 이 등급의 가격은 2026년 내내 올랐으며, 중고 RTX 3060은 이제 신품과 거의 같은 가격이므로 둘 다 비교하십시오.',
        items: [
          '**RTX 3060 12 GB (신품 ~$320-400, 중고 ~$320-350):** VRAM 12 GB, 170 W, Llama 2 7B Q4_0에서 ~76 토큰/초(개발자 보고). Ministral 3 8B, Qwen3 8B, DeepSeek-R1 7B, 대부분의 13B 모델을 실행합니다. 12 GB 버전을 구매하십시오 — 6 GB 버전은 3B 모델로 제한됩니다. 신품 재고가 제한적이고 중고로 구매해도 절약 폭이 크지 않으므로, 반품이 가능한 쪽 중 더 저렴한 것을 구매하십시오.',
          '**RX 6700 XT (중고, 판매자별 가격 상이):** VRAM 12 GB, 230 W, 7B 모델 약 65-80 토큰/초(메모리 대역폭에서 환산한 대략적 추정치이며 실측 아님). 실시간 목록을 확인하십시오. AMD ROCm 설정이 필요하여 설정 시간이 추가됩니다.',
          '**이 등급을 선택하는 이유:** 가장 낮은 초기 비용, RTX 3060의 낮은 전력 소비, 일반 채팅, 코드 지원, 요약을 포괄하는 7B-13B 모델에 충분한 VRAM.',
          '**이 등급을 건너뛰는 이유:** 14B 이상의 모델을 원한다는 것을 이미 알고 있다면, 보급형은 몇 주 내에 불만족스러울 것입니다. 대신 중급형에서 시작하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'RTX 3060은 반드시 12 GB 버전을 구매하십시오. RTX 3060 6 GB는 목록에서 비슷해 보이지만 3B 모델만 수용합니다 — 파라미터 수가 절반이라는 것은 작동하는 어시스턴트와 장난감의 차이입니다.',
          },
          {
            type: 'warning',
            text: 'RX 6700 XT는 저렴한 입문 선택이 될 수 있지만, Linux에서 ROCm 설정 시간은 배포판과 카드에 따라 다르므로 먼저 AMD의 지원 GPU 목록을 확인하십시오. RTX 3060 대비 절약 폭이 작다면 NVIDIA 카드를 구매하십시오.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '320-400',
            label: 'Amazon에서 RTX 3060 12GB 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            label: 'Amazon에서 RX 6700 XT 가격 보기',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '중급형 ($620-790): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB와 RX 7800 XT',
        content:
          '**중급형이 존재하는 이유는 하나입니다: 16 GB VRAM이 12 GB 카드가 수용할 수 없는 14B 모델을 해결하기 때문입니다.** 14B급 모델이 목표라면 이것이 가장 저렴하게 올바르게 실행할 수 있는 등급입니다. RTX 5060 Ti 16 GB는 최신 세대 선택이며, 이 가이드에서 사용한 호가 기준으로는 NVIDIA에서 가장 저렴한 16 GB 선택지이기도 합니다. RTX 4060 Ti 16 GB는 중고로는 거의 같은 가격(~$650)이고 신품은 더 비쌉니다(~$790, BuySellRAM의 단 3건 매물 기준).',
        items: [
          '**RTX 5060 Ti 16 GB (신품 ~$618 / 중고 호가 ~$649, 출시 가격 $429):** 16 GB GDDR7, 180 W, 448 GB/s 메모리 대역폭. 이 가이드를 위해 측정하지 않았으며, llama.cpp 스코어보드에는 Llama 2 7B Q4_0에서 약 91 토큰/초로 나와 있습니다(개발자 보고). Qwen3 14B급 모델을 편안하게 실행합니다. 2026년에 가격이 출시 가격보다 약 44% 올랐습니다.',
          '**RTX 4060 Ti 16 GB (신품 ~$790 / 중고 ~$650, 호가):** VRAM 16 GB, 165 W, 7B 모델 약 64 토큰/초(8 GB 버전의 llama.cpp 스코어보드 값, 개발자 보고). 8 GB 버전과 동일한 GPU 다이와 288 GB/s 메모리 대역폭을 사용하므로 토큰당 속도는 비슷합니다. 16 GB 버전은 용량을 구매하는 것이지 순수 속도를 구매하는 것이 아닙니다. 중고로는 RTX 5060 Ti 16 GB와 거의 같은 가격(~$650 대 ~$649)이며, 신품 최저가 ~$790은 BuySellRAM의 단 3건 매물에 근거합니다.',
          '**RX 7800 XT (AMD 가격: 최신 매물 확인, BuySellRAM 데이터는 NVIDIA만 포함):** VRAM 16 GB, 263 W. 이 가이드를 위해 측정하지 않았습니다. 7B Q4에서 약 90-115 토큰/초를 예상하며(메모리 대역폭에서 환산한 대략적 추정치이며 실측 아님), AMD ROCm 설정이 단점입니다.',
          '**이 등급을 선택하는 이유:** 14B 모델을 원하거나, 낮은 전력 소비를 원하거나 (RTX 4060 Ti), 가능한 가장 낮은 가격에 16 GB를 원합니다.',
          '**이 등급을 건너뛰는 이유:** 7B 모델로 충분하다면 보급형이 $200-300 더 저렴합니다. 14B의 빠른 추론을 원한다면 고급형이 훨씬 더 빠릅니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GB는 8 GB 버전에 비해 용량 업그레이드이지 속도 업그레이드가 아닙니다. 14B 모델을 수용해야 하기 때문에 구매하는 것이지, 초당 토큰이 더 많기를 기대하는 것이 아닙니다. RTX 5060 Ti 16 GB가 더 빠른 선택이며, 이 가이드에서 사용한 호가 기준으로 신품은 더 저렴하고 중고는 거의 같습니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-649',
            label: 'Amazon에서 RTX 5060 Ti 16GB 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '650-790',
            label: 'Amazon에서 RTX 4060 Ti 16GB 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            label: 'Amazon에서 RX 7800 XT 가격 보기',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: '고급형 ($900-1,200): RTX 4080 Super, RTX 5070 Ti와 RTX 4070 Ti Super',
        content:
          '**고급형은 16 GB VRAM을 유지하지만 7B-14B 모델을 즉각적으로 느끼게 하고 22B를 사용 가능하게 만드는 속도를 추가합니다.** 세 카드 모두 중급형과 동일한 모델을 수용합니다. 초당 토큰에 비용을 지불하는 것이지 용량에 지불하는 것이 아닙니다. 2026년 가격 급등으로 이 등급과 중급형 사이의 격차가 벌어졌습니다.',
        items: [
          '**RTX 4080 Super 16 GB (신품 ~$1,200 / 중고 ~$1,149):** VRAM 16 GB, 320 W, Llama 2 7B Q4_0에서 약 148 토큰/초(개발자 보고). 프리미엄 16 GB 선택으로서의 편집자 추천 — 여기서 가장 비싼 카드이며, 아래 두 카드보다 약 $190-300의 프리미엄이 붙고 같은 측정에서 RTX 5070 Ti보다 느립니다.',
          '**RTX 5070 Ti 16 GB (신품 ~$1,008 / 중고 호가 ~$1,050, [출시 가격 $749](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics)):** 16 GB GDDR7, 300 W, 896 GB/s 메모리 대역폭. 이 가이드를 위해 측정하지 않았으며, llama.cpp 스코어보드에는 Llama 2 7B Q4_0에서 약 177 토큰/초로 나와 있습니다(개발자 보고). 16 GB로 24B Q4 모델을 여유 있게 실행합니다.',
          '**RTX 4070 Ti Super 16 GB (신품 ~$900 / 중고 ~$920):** VRAM 16 GB, 285 W, 약 132 토큰/초 (개발자 보고). 이 등급에서 가장 저렴한 신품 카드이며, 세 카드 중 전력 소비가 가장 낮습니다.',
          '**이 등급을 선택하는 이유:** 14B 모델을 지속적으로 실행하며 즉각적으로 원하거나, 경량 22B 작업을 수행하며 여유를 원합니다.',
          '**이 등급을 건너뛰는 이유:** 33B 또는 70B 모델이 필요하다면 어떤 16 GB 카드도 수용할 수 없습니다. 여기에 과다 지출하는 대신 최고급형으로 이동하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '이 등급에서는 개발자 측정 기준으로 RTX 5070 Ti가 가장 빠르고(~177 토큰/초), RTX 4070 Ti Super는 신품 중 가장 저렴하며, RTX 4080 Super가 가장 비쌉니다. RTX 4080 Super를 특별히 원하지 않는다면 더 저렴한 두 카드 중 하나를 선택하십시오.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1149-1200',
            label: 'Amazon에서 RTX 4080 Super 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1050',
            label: 'Amazon에서 RTX 5070 Ti 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-920',
            label: 'Amazon에서 RTX 4070 Ti Super 가격 보기',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: '최고급형 ($2,000+): RTX 4090과 RTX 5090',
        content:
          '**최고급형만이 22B 이상의 모델을 실행할 수 있으며, 이 가이드의 카드 중 70B 모델에 근접하는 것은 RTX 5090 32 GB뿐입니다. Q4의 70B는 Ollama 기준 약 43 GB이므로 이 카드도 공격적인 양자화나 CPU로의 부분 오프로드가 필요합니다.** 속도가 아닌 VRAM 용량을 위해 여기에서 구매하십시오. 속도는 부수적인 효과입니다. 2026년 가격 급등은 RTX 5090을 가장 크게 타격했으며, 가격은 주별로 변동됩니다.',
        items: [
          '**RTX 4090 24 GB (신품 ~$2,000 이상 / 중고 ~$2,575-3,010):** VRAM 24 GB, 450 W, Llama 2 7B Q4_0에서 약 186 토큰/초(개발자 보고). 33B 모델을 편안하게 실행합니다. 신품 RTX 4090 재고는 얇고 신품 최저가는 오래된 값일 수 있으며, 목록 가격은 최대 ~$3,800까지 분포합니다.',
          '**RTX 5090 32 GB (신품 ~$4,500-4,921 / 중고 ~$5,880-6,350, 출시 가격 $1,999):** VRAM 32 GB GDDR7, 575 W, Llama 2 7B Q4_0에서 약 290 토큰/초(개발자 보고). 32 GB 용량이 핵심 논거입니다 — 이 가이드에서 유일한 32 GB 카드이지만, Q4의 70B 모델은 Ollama 기준 약 43 GB이므로 여전히 공격적인 양자화나 CPU로의 부분 오프로드가 필요합니다. 호가는 8월과 10월 사이에 약 64% 올랐으며, 중고 목록이 신품 가격을 상회합니다.',
          '**이 등급을 선택하는 이유:** 33B 또는 70B 모델이 필요하거나, 배치 추론을 실행하거나, 몇 년간 교체 없이 사용할 카드를 원합니다.',
          '**이 등급을 건너뛰는 이유:** 7B-14B 모델에는 과도합니다 — 고급형은 해당 크기에서 즉각적인 응답을 제공하며 절반 미만의 가격과 전력 소비로 이용할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'NVIDIA는 RTX 5090의 TGP를 575 W로, 필요 시스템 전력을 1000 W(Ryzen 9 9950X 구성)로, PSU 검사기 최소값을 850 W로 제시합니다(출처의 RTX 5090 페이지 참조). 용량이 부족한 파워 서플라이는 부하 시 전압이 불안정해질 수 있으므로 구매 예산에 포함하십시오. 이는 전기 안전에 관한 조언이 아니며, 카드 제조사의 PSU 및 케이블 지침을 따르십시오.',
          },
          {
            type: 'note',
            text: '관측된 중고 가격 기준으로 RTX 4090 한 장당 ~$2,575-3,010(InsiderLLM 낙찰 기록, 2026-10-15 갱신)이면 한 쌍은 약 $5,150-6,020으로 단일 RTX 5090(신품 ~$4,500-4,900)보다 비싸므로, 단일 카드가 더 간단한 70B 구성입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2000-3010',
            label: 'Amazon에서 RTX 4090 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4500-6350',
            label: 'Amazon에서 RTX 5090 가격 보기',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: '로컬 LLM의 GPU 요구 사양: VRAM은 얼마나 필요합니까?',
        content:
          '**Q4_K_M 양자화에서 모델은 파라미터 10억 개당 약 0.6 GB의 VRAM이 필요하며, 컨텍스트와 도구 오버헤드를 위해 2-4 GB가 추가됩니다.** 이 공식은 네 가지 등급에 직접 매핑됩니다.',
        items: [
          '**7B 모델 — 8-9 GB:** 모든 등급에서 실행 가능합니다. 12 GB 카드는 여유 있는 공간을 제공합니다.',
          '**13-14B 모델 — 11-13 GB:** 컨텍스트와 도구를 고려하면 실제로 16 GB가 필요합니다. 중급형 이상 (RTX 5060 Ti 16 GB 이상).',
          '**22B 모델 — 14-16 GB:** 16 GB 카드에서 타이트합니다. 고급형 이상에서 편안합니다.',
          '**33B 모델 — 19-22 GB:** 24 GB 카드가 필요합니다. RTX 4090 영역.',
          '**70B 모델 — Q4에서 약 43 GB(Llama 3.3 70B, Ollama 기준):** 여기 있는 단일 카드로는 수용할 수 없으며, RTX 5090 32 GB는 공격적인 양자화나 CPU로의 부분 오프로드로만 근접하고 그렇지 않으면 이중 GPU 구성을 계획하십시오. 단일 24 GB 카드는 Q4에서 70B 모델을 수용할 수 없습니다.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '컨텍스트 길이는 숨겨진 VRAM 비용입니다 — 긴 프롬프트와 큰 컨텍스트 창은 모델 가중치 위에 추가로 VRAM을 소비합니다. 항상 2-4 GB의 여유를 남겨두십시오. 전체 방법론은 관련 읽기 자료에 연결된 VRAM 요구 사항 가이드를 참조하십시오.',
          },
        ],
      },
      priceSurge: {
        id: 'price-surge',
        title: '2026년 GPU 가격이 오른 이유',
        content:
          '**2026년에 GPU 가격이 크게 상승하여 소비자용 카드가 원래 출시 가격보다 최대 약 2.5배(RTX 5090, RTX 5060 Ti·RTX 5070 Ti는 약 1.35~1.45배) 높게 판매되고 있으며, 원인에 대해서는 출처마다 의견이 다릅니다.** 이로 인해 구매 계산이 달라지므로, 출시 가격이 아닌 현실적인 가격을 기준으로 계획하십시오.',
        items: [
          '**단일 원인은 확정되지 않았습니다.** 거론되는 요인으로는 DRAM/GDDR7 공급, AI 데이터센터 수요, 보도된 생산 변화가 있으며, 각 요인의 비중에 대해서는 출처마다 의견이 다릅니다. [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)과 [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)은 모두 메모리를 원인의 일부로 봅니다. BuySellRAM은 메모리가 대부분일 수는 없다고 하며, 해당 데이터로는 메모리를 공급, 할당, 수요와 구분할 수 없다고 밝힙니다.',
          '**RTX 5090이 가장 명확한 사례입니다:** 출시 가격 $1,999이지만 BuySellRAM 데이터의 최저 호가는 ~$4,921입니다 — 약 2.5배이며 8월 이후 64% 올랐습니다.',
          '**소형 카드도 올랐으며 상승폭은 서로 다릅니다.** RTX 5060 Ti 16 GB는 출시 가격 $429보다 약 44%, RTX 5070 Ti는 $749보다 약 35% 높게 판매되며, 두 카드 모두 16 GB입니다.',
          '**중고가 더 이상 자동으로 저렴하지는 않습니다.** BuySellRAM 호가 데이터에서 중고 RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti, RTX 5070 Ti 목록은 신품과 같거나 더 높았고, 중고 RTX 3060 12 GB는 8월 이후 약 31% 올랐습니다. 둘 다 비교하고 반품이 가능한 판매자를 선호하십시오.',
          '**갱신 제품을 기대하지 마십시오.** NVIDIA의 RTX 50 Super 카드는 메모리 공급 문제로 무기한 연기되었다고 보도되었습니다 (NVIDIA는 확인하지 않았습니다). **결정:** 기다릴 수 있다면 가격이 내려가는지 지켜보십시오. 그렇지 않다면 목표 모델에 맞는 가장 작은 카드를 구매하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 GPU 가격은 출시 가격보다 최대 약 2.5배(RTX 5090, RTX 5060 Ti·RTX 5070 Ti는 약 1.35~1.45배) 높고, 거론되는 요인으로는 DRAM/GDDR7 공급과 AI 데이터센터 수요가 있으나 비중은 출처마다 다르므로, 로컬 LLM 구매자는 신품과 중고 가격을 비교하고 목표 모델에 맞는 가장 작은 카드를 구매해야 합니다.',
          },
          {
            type: 'plain-terms',
            text: '카드가 개선된 것이 아니라 비싸졌을 뿐이며, 그중 메모리가 차지하는 몫과 수요 또는 공급 할당이 차지하는 몫은 출처마다 의견이 다릅니다. 가격이 내려갈 때까지 출시 가격을 역사적 수치로 취급하고, 신품과 중고를 비교하며, 모델이 실제로 필요한 것보다 더 많은 VRAM을 위해 비용을 지불하지 마십시오.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '결정 흐름도: 네 가지 질문으로 GPU 선택하기',
        content:
          '**네 가지 순서대로 묻는 질문이 대부분의 구매자를 하나의 카드로 안내합니다.**',
        items: [
          '**1. 실행하고 싶은 가장 큰 모델은 무엇입니까?** 7B: 보급형. 14B: 중급형 (16 GB 카드). 22B: 고급형. 33B: RTX 4090. 70B: RTX 5090 또는 이중 GPU.',
          '**2. 절대적인 예산 상한선은 얼마입니까?** ~$400 미만: RTX 3060 12 GB. ~$700 미만: RTX 5060 Ti 16 GB 또는 중고 RTX 4060 Ti 16 GB. ~$900-1,200: RTX 4070 Ti Super, RTX 5070 Ti 또는 RTX 4080 Super. $2,000+: RTX 4090 또는 RTX 5090.',
          '**3. NVIDIA입니까 AMD입니까?** 이미 AMD 하드웨어를 보유하고 있거나 RX 7800 XT에서 상당한 할인을 찾지 않는 한 NVIDIA를 선택하십시오 — CUDA는 ROCm 대비 설정 시간을 줄여 줄 수 있습니다.',
          '**4. 파워 서플라이에 여유가 있습니까?** 중급형 이상의 카드는 285-575 W가 필요합니다. 최고급형 하드웨어를 구매하기 전에 파워 서플라이와 케이스 냉각을 확인하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '로컬 LLM용 GPU는 가장 큰 모델 크기를 먼저, 예산 상한선을 두 번째, NVIDIA 대 AMD를 세 번째, 마지막으로 파워 서플라이 여유를 순서대로 고려하여 선택하십시오.',
          },
          {
            type: 'plain-terms',
            text: '실제로 실행하고 싶은 가장 큰 모델부터 시작하여 등급을 설정하십시오. 그 후에만 가격, 브랜드, 파워 서플라이가 처리할 수 있는지를 확인하십시오. 반대 순서로 하는 것이 사람들이 과다 지출하거나 모델을 실행할 수 없는 카드를 구매하는 이유입니다.',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-hero-ko.webp',
        imageCaption:
          '로컬 LLM GPU 선택을 위한 네 가지 질문 결정 흐름: 목표 모델 크기가 등급을 설정하고, 예산 상한선이 선택을 좁히며, NVIDIA 대 AMD가 브랜드를 결정하고, 파워 서플라이 여유가 최고급형 선택을 확인합니다.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '지역별 가격 및 구매처',
        content:
          '**GPU 가격은 지역에 따라 다릅니다 — 이 가이드의 가격은 미국 가격이며 EU 가격에는 VAT가 포함됩니다.** 아래 링크는 지역별 제품 검색 링크입니다. 제휴 태그가 없으며 커미션이 발생하지 않습니다.',
        items: [
          '**한국:** 다나와, 에누리, Auction, 11번가가 광범위한 재고를 보유하고 있습니다. 중고 RTX 3060과 RTX 4090은 중고나라와 당근마켓에서 구할 수 있습니다.',
          '**일본:** Amazon.co.jp와 Yodobashi Camera, Ark PC가 주요 참고처입니다. 가격에 소비세가 포함됩니다.',
          '**미국:** Amazon.com과 Newegg는 가장 광범위한 재고를 보유하고 있으며, 중고는 eBay를 확인하십시오. RTX 5090은 출시 가격으로는 자주 품절됩니다.',
          '**가격 비교:** 다나와 (한국)나 Idealo (EU)는 현재 최저가를 확인하기 위한 표준입니다.',
          '**가용성:** 고급형 카드 (RTX 4090, RTX 5090)는 2026년에 간헐적으로 품절 상태입니다. 변동하는 가격을 예상하고 여러 유통업체를 확인하십시오.',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026년 급등으로 인해 이 가이드의 모든 가격 수치는 미국 호가 기준으로 빠르게 변하는 데이터입니다. 구매 전 항상 소매업체의 현재 목록을 열어 확인하십시오 — 가격은 주별로 변동되었습니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: '로컬 LLM용 GPU (미국)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon 미국에서 GPU 보기',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: '로컬 LLM용 GPU (독일)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon.de에서 GPU 보기',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: '로컬 LLM용 GPU (프랑스)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon.fr에서 GPU 보기',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: '로컬 LLM용 GPU (일본)',
            productCategory: 'gpu',
            priceRange: '320-4921',
            label: 'Amazon.co.jp에서 GPU 보기',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '로컬 LLM용 GPU 구매 시 일반적인 실수',
        items: [
          '**VRAM 대신 초당 토큰으로 구매하기.** 모델을 수용할 수 없는 더 빠른 카드는 쓸모없습니다. 먼저 모델이 2-4 GB 여유를 가지고 VRAM에 맞는지 확인한 후, 해당 등급 내에서 속도를 비교하십시오.',
          '**RTX 3060 12 GB 대신 6 GB 버전 구매하기.** 이름은 같지만 용도가 다릅니다 — 6 GB 카드는 3B 모델로 제한됩니다. 목록에서 항상 12 GB 버전을 확인하십시오.',
          '**RTX 4060 Ti 16 GB가 8 GB 버전보다 빠를 것이라고 가정하기.** 그렇지 않습니다 — 동일한 GPU 다이에 더 많은 메모리가 탑재되어 있습니다. 용량 (14B 모델)을 위해 구매하는 것이지 속도를 위해 구매하는 것이 아닙니다. 더 빠른 16 GB 카드는 RTX 5060 Ti 16 GB입니다.',
          '**현재 가격 대신 출시 가격을 기준으로 하기.** 2026년 급등으로 출시 가격이 현실을 반영하지 않습니다. 소매업체의 실시간 가격으로 예산을 세우고 신품과 중고를 비교하십시오 — 중고가 더 이상 항상 저렴하지는 않습니다.',
          '**파워 서플라이 요구 사항 무시하기.** RTX 5090의 TGP는 575 W이며, NVIDIA는 필요 시스템 전력 1000 W와 PSU 검사기 최소값 850 W를 제시합니다. 부하 시 전압이 불안정해지는 카드는 느리게 실행되는 카드보다 나쁩니다.',
          '**AMD를 선택하면서 설정 시간을 예산에 포함하지 않기.** RX 6700 XT와 RX 7800 XT는 좋은 가성비이지만, ROCm 설정은 몇 시간이 걸립니다. 절약된 금액 대비 NVIDIA 카드와 비교하여 그 시간을 고려하십시오.',
          '**7B 모델에 과다 구매하기.** 7B 모델이 사용 사례를 커버한다면 RTX 4090은 낭비된 돈과 에너지입니다. 우연히 가진 예산이 아닌 모델에 맞게 등급을 조정하십시오.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          '로컬 LLM용 GPU 구매 시 7가지 일반적인 실수: VRAM보다 속도로 구매, RTX 3060 6 GB와 12 GB 혼동, RTX 4060 Ti 16 GB가 더 빠를 것이라는 기대, 출시 가격 기준, 파워 서플라이 요구 사항 무시, AMD 설정 시간 미예산, 7B 모델에 과다 구매.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[NVIDIA GeForce RTX 40 시리즈 사양](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — RTX 4060 Ti, 4070 Ti Super, 4080 Super, 4090의 공식 VRAM 용량 및 전력 소비 (TGP) 수치.',
          '[NVIDIA GeForce RTX 5090 사양](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — RTX 5090의 공식 32 GB GDDR7 VRAM, 575 W TGP, 필요 시스템 전력 1000 W(Ryzen 9 9950X 구성), PSU 검사기 최소값 850 W.',
          '[BuySellRAM — NVIDIA 소비자용 GPU 시장 업데이트](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — 2026년 10월 11일과 8월 8일의 미국 신품 및 중고 최저 호가로, 이 가이드의 대부분의 가격에 사용되었습니다 (완료된 거래가 아닌 호가).',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) — RTX 4090과 RTX 5090의 소매가 및 eBay 낙찰 기록 가격대(2026-10-15 갱신). 이 가이드의 RTX 4090·RTX 5090 수치는 이 가격대와 BuySellRAM 호가를 함께 반영합니다.',
          '[NVIDIA Newsroom — GeForce RTX 5060 Ti 발표 (2025-04-15)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-arrives-for-every-gamer-starting-at-299) — RTX 5060 Ti 16 GB 출시 가격은 $429 (8 GB는 $379).',
          '[NVIDIA Newsroom — GeForce RTX 50 시리즈 발표 (2025-01-06)](https://nvidianews.nvidia.com/news/nvidia-blackwell-geforce-rtx-50-series-opens-new-world-of-ai-computer-graphics) — RTX 5070 Ti 출시 가격은 $749.',
          '[Capital & Compute — Nvidia RTX 50 가격 추적기](https://capitalandcompute.net/gpu-prices/nvidia/) — RTX 5090, RTX 5070 Ti, RTX 5060 Ti 16 GB의 출시 가격 대비 실거래 가격.',
          '[Club386 — Nvidia, GeForce RTX 50 Super 무기한 연기](https://www.club386.com/?p=129641) — 메모리 공급 문제로 RTX 50 Super 갱신이 연기되었다는 보도 (NVIDIA는 확인하지 않음).',
          '[AMD Radeon 사양](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XT 및 RX 6700 XT의 공식 VRAM 및 전력 수치.',
          '[llama.cpp 스코어보드: CUDA에서의 Llama 2 7B Q4_0](https://github.com/ggml-org/llama.cpp/discussions/15013) — RTX 3060, 4060 Ti(8 GB), 5060 Ti, 4070 Ti Super, 5070 Ti, 4080 Super, 4090, 5090에 대한 개발자 보고 llama-bench 초당 토큰 결과. 항목은 서로 다른 사용자와 빌드에서 나온 것입니다.',
          '[Ollama: Llama 3.3 70B](https://ollama.com/library/llama3.3) — 70B 모델 다운로드 크기가 43 GB로 표기되어 있으며, 이 가이드의 70B VRAM 수치의 근거입니다.',
          '[2026년 로컬 LLM 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms) — 이 사이트의 더 폭넓은 GPU 벤치마크 모음.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '2026년 LLM 추론용으로 가장 저렴한 GPU는 무엇입니까?',
            a: '약 $320-400의 NVIDIA RTX 3060 12 GB가 이 가이드에서 로컬 LLM 추론을 잘 실행하는 가장 저렴한 신제품 카드입니다. 12 GB VRAM으로 Q4 양자화에서 7B 모델과 대부분의 13B 모델을 Llama 2 7B Q4_0에서 초당 약 76 토큰(개발자 보고)으로 실행합니다. RX 6700 XT는 중고 시장에서 더 저렴할 수 있지만 가격은 판매자별로 다르며 AMD ROCm 설정이 필요합니다. 신품과 중고 RTX 3060 가격이 이제 가까우므로 둘 다 비교하십시오.',
          },
          {
            q: '2026년에 GPU 가격이 왜 이렇게 높습니까?',
            a: '단일 원인은 확정되지 않았습니다. 거론되는 요인으로는 DRAM/GDDR7 공급, AI 데이터센터 수요, 보도된 생산 변화가 있으며, 각 요인의 비중에 대해서는 InsiderLLM과 BuySellRAM의 의견이 다르고 BuySellRAM은 메모리가 원인의 일부일 수는 있어도 대부분일 수는 없다고 말합니다. 카드가 원래 출시 가격의 최대 약 2.5배(RTX 5090, RTX 5060 Ti·RTX 5070 Ti는 약 1.35~1.45배)에 판매됩니다 — RTX 5090은 $1,999에 출시되었지만 ~$4,500-4,900에 올라와 있습니다. 중고 카드도 더 이상 가격 인상을 피하지 못합니다.',
          },
          {
            q: '로컬 LLM 실행에 필요한 GPU 요구 사양은 무엇입니까?',
            a: 'Q4_K_M 양자화에서 파라미터 10억 개당 약 0.6 GB VRAM에 오버헤드를 위한 2-4 GB를 계획하십시오. 즉, 7B 모델에 8-9 GB, 14B에 11-13 GB, 33B에 19-22 GB, 70B에 약 43 GB(Llama 3.3 70B Q4, Ollama 기준)입니다. 12 GB 카드는 7B를 편안하게 커버하고, 16 GB 카드는 14B를 커버하며, 70B는 여기 있는 단일 카드로는 수용할 수 없고 RTX 5090 32 GB는 공격적인 양자화나 부분 CPU 오프로드로만 근접하며 그렇지 않으면 이중 GPU 구성이 필요합니다.',
          },
          {
            q: '로컬 LLM에 가장 좋은 그래픽카드는 무엇입니까?',
            a: '로컬 LLM에 가장 좋은 그래픽카드는 예산 내에서 목표 모델에 충분한 VRAM을 갖춘 카드입니다. 7B 모델에는 RTX 3060 12 GB (~$320-400)로 충분합니다. 14B 모델에는 RTX 5060 Ti 16 GB (~$618) 또는 중고 RTX 4060 Ti 16 GB가 중급 선택입니다. 33B 모델에는 RTX 4090 24 GB가, 70B에는 RTX 5090 32 GB만 근접하며, 공격적인 양자화나 부분 CPU 오프로드를 전제로 합니다 (70B Q4는 Ollama 기준 약 43 GB). CUDA는 일반적으로 추가 설정 없이 작동하므로 NVIDIA 카드가 마찰이 가장 적은 선택입니다.',
          },
          {
            q: 'RTX 4060 Ti 16 GB가 8 GB 버전보다 빠릅니까?',
            a: '아니요. RTX 4060 Ti 16 GB와 8 GB는 동일한 GPU 다이를 사용하므로 토큰당 추론 속도는 비슷합니다 — 7B 모델에서 약 64 토큰/초(8 GB 버전의 llama.cpp 스코어보드 값, 개발자 보고). 16 GB 버전은 8 GB에 맞지 않는 14B 모델을 실행할 수 있는 용량을 제공합니다. 속도가 아닌 VRAM을 위해 구매하십시오.',
          },
          {
            q: '로컬 LLM용으로 NVIDIA와 AMD 중 무엇을 구매해야 합니까?',
            a: '이미 AMD 하드웨어를 보유하고 있거나 상당한 할인을 찾지 않는 한 NVIDIA를 구매하십시오. NVIDIA CUDA는 Ollama, LM Studio, llama.cpp와 일반적으로 추가 설정 없이 작동합니다. RX 6700 XT 및 RX 7800 XT와 같은 AMD 카드는 경쟁력 있는 가격에 VRAM을 제공하지만, ROCm 설정 시간은 배포판과 GPU에 따라 다르므로 AMD의 지원 GPU 목록을 확인하십시오.',
          },
          {
            q: '단일 GPU로 70B 모델을 실행할 수 있습니까?',
            a: '이 가이드의 카드 중에서는 RTX 5090 32 GB만 근접하며, 공격적인 양자화나 CPU로의 부분 오프로드로만 가능합니다 — Q4의 70B 모델은 Ollama 기준 약 43 GB입니다. RTX 4090 24 GB는 단독으로 Q4에서 70B 모델을 수용할 수 없습니다. 일반적인 해결책은 결합된 VRAM을 위해 두 개의 RTX 4090을 사용하는 것이지만 이 가이드에서 사용한 가격 기준으로 그 쌍은 단일 RTX 5090과 거의 같은 비용입니다.',
          },
          {
            q: '로컬 LLM용으로 RTX 5090이 RTX 4090보다 가치가 있습니까?',
            a: '단일 카드에서 24 GB를 넘는 VRAM이 꼭 필요한 경우, 예를 들어 70B 모델에 더 가까이 가려는 경우에만 해당됩니다. RTX 5090은 RTX 4090의 24 GB에 비해 32 GB VRAM을 가지며, 이것이 결정적 요소입니다. 7B-33B 모델의 경우 RTX 4090은 동일한 모델을 수용합니다. 이 가이드에서 사용한 가격 기준으로 RTX 5090은 RTX 4090의 약 1.8-2.4배 비용이므로, 추가 8 GB가 실제 문제를 해결할 때만 비용을 지불하십시오.',
          },
          {
            q: '이 GPU들에 어떤 파워 서플라이가 필요합니까?',
            a: '등급에 맞게 파워 서플라이를 조정하십시오: RTX 3060에는 550 W 유닛이 적합하고, RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super, RTX 5070 Ti에는 650-750 W, RTX 4090에는 850 W, RTX 5090(TGP 575 W)에 대해 NVIDIA는 필요 시스템 전력 1000 W(Ryzen 9 9950X 구성)와 PSU 검사기 최소값 850 W를 제시합니다. 용량이 부족한 파워 서플라이는 부하 시 불안정을 유발합니다. 카드와 전원공급장치 제조사의 지침을 따르십시오. 전기 안전에 관한 조언이 아닙니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기 자료',
        items: [
          '[각 모델 크기에 대한 전체 VRAM 요구 사항 확인](/ko/local-llms/how-much-vram-local-llm) — 이 가이드의 빠른 공식 뒤에 있는 모델 크기별 VRAM 전체 방법론.',
          '[공개된 로컬 LLM 벤치마크로 15개 이상의 GPU 비교](/ko/local-llms/best-gpus-for-local-llms) — 여기 10종을 넘어 구형 및 서버 카드를 포함한 더 광범위한 GPU 벤치마크 세트.',
          '[보급형 RTX 3060 12 GB에서 실행되는 모델 확인](/ko/local-llms/best-budget-gpus-local-llm) — 6 GB와 12 GB 구분을 포함한 보급형의 모델별 속도.',
          '[RTX 5090과 RTX 4090을 정면 비교](/ko/local-llms/rtx-5090-vs-rtx-4090-local-llm) — RTX 5090으로 업그레이드할 가치가 있는 경우와 RTX 4090으로 충분한 경우.',
          '[Q4_K_M 양자화가 VRAM 비용을 어떻게 결정하는지 이해하기](/ko/local-llms/llm-quantization-explained) — Q4_K_M이 기본값인 이유와 양자화가 VRAM 계산을 어떻게 변경하는지.',
          '[로컬 LLM 추론을 위한 1,000달러 이하 최적의 GPU는?](/ko/prompt-bites/best-gpu-under-1000-local-llm) — 24GB 등급: 중고 RTX 4090 대 신품 RTX 4080 SUPER.',
          '[RTX 4060 대 RTX 3060 12GB: 로컬 LLM에 더 나은 것은?](/ko/prompt-bites/rtx-4060-vs-rtx-3060-12gb) — 이 작업에서 최신 세대보다 VRAM 용량이 더 중요한 이유.',
          '[로컬 LLM을 위한 최고의 Intel Arc GPU는?](/ko/prompt-bites/best-intel-arc-gpu-local-llm) — 더 저렴한 대안인 Arc B580과 그에 따른 소프트웨어 절충점.',
          '[70B 모델 구동을 위한 최적의 RTX 4090 설정은?](/ko/prompt-bites/best-rtx-4090-setup-70b-models) — 이 가이드의 최상위 카드로 70B 모델을 실제로 구동하는 데 필요한 것.',
          '[eGPU 없는 MacBook Air를 위한 최고의 로컬 LLM은?](/ko/prompt-bites/best-local-llm-macbook-air-no-egpu) — Apple Silicon에서 eGPU가 이 가이드의 GPU를 대체할 수 없는 이유.',
          '[1,500달러 이하 로컬 LLM을 위한 최고의 Windows 노트북은?](/ko/prompt-bites/best-windows-laptop-local-llm-under-1500) — 이 가이드의 데스크톱 등급에 해당하는 모바일 GPU 버전.',
          '[7B 모델을 로컬에서 파인튜닝하려면 어떤 하드웨어가 필요한가?](/ko/prompt-bites/fine-tuning-7b-model-locally-hardware) — 이 GPU 중 추론뿐 아니라 QLoRA 파인튜닝에도 사용할 수 있는 것.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 LLM용 최고의 그래픽카드: 2026년 GPU 구매 가이드',
      description: '로컬 LLM용 그래픽카드 추천: GPU 10종을 VRAM, 속도, 전력, 2026년 가격으로 비교. 최저가 모델부터 RTX 5090까지, 모델 크기별 GPU 요구 사양 포함.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-22',
      dateModified: '2026-11-15',
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
        { '@type': 'ListItem', position: 3, name: '로컬 LLM용 최고의 그래픽카드: 2026년 GPU 구매 가이드', item: '[www.promptquorum.com/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026](https://www.promptquorum.com/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026)' },
      ],
    },
  },
}
