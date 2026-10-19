// Power Local LLM — Best GPUs for Local LLMs: Complete Buying Guide 2026
// Slug: best-gpu-buying-guide-local-llm-2026
// Affiliate buying guide. Outbound product links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: snapshot. GPU prices surged in 2026 on a memory shortage —
// cards run 1.5-2x above original MSRP. Figures sourced from Best Value GPU,
// Newegg, geizhals.de, LDLC, and kakaku.com.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Best Graphics Card for Local LLMs: GPU Buying Guide 2026',
    seoTitle: 'Best Graphics Card for Local LLMs 2026: Budget to RTX 5090',
    intro:
      'Most local-LLM GPU advice optimizes for the wrong number. Speed in tokens per second decides how fast a model answers, but VRAM decides whether the model runs at all — and a model that does not fit is infinitely slower than one that does. This guide compares ten consumer graphics cards across four price tiers on the figures that actually bind a purchase: VRAM capacity, inference speed, power draw, and price. One caveat on price: GPU prices surged in 2026 on a memory shortage — an RTX 5090 now lists at roughly 2.5x its MSRP — so every price here is a snapshot of US asking prices; confirm current pricing before you buy.',
    metaDescription:
      'Which graphics card for local LLMs? Ten GPUs compared on VRAM, speed, power and 2026 prices, from the cheapest pick to the RTX 5090.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-en.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — ten graphics cards, four budgets, one decision rule: buy for VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**The best graphics card for local LLMs is the one whose VRAM fits your model, not the fastest card. An RTX 3060 12 GB runs any 7B model, a 16 GB card (RTX 5060 Ti, RTX 4060 Ti or RTX 5070 Ti) handles 14B models, an RTX 4090 24 GB handles 33B models, and an RTX 5090 32 GB is the only single consumer card for 70B work.**',
    quickAnswerTop: {
      en: {
        question: 'What is the best graphics card for running local LLMs in 2026?',
        answer:
          'Buy for VRAM, then speed. An RTX 3060 12 GB (~$320-400) is the budget pick and runs any 7B model. A 16 GB card is the mid-tier pick for 14B models — an RTX 5060 Ti 16 GB (~$620 new) or a used RTX 4060 Ti 16 GB (~$380-490). An RTX 4090 24 GB runs 33B models, and an RTX 5090 32 GB (~$4,900) is the only single consumer card that handles 70B work without a dual-GPU build. Note that 2026 prices run well above MSRP.',
        bullets: [
          'Budget: RTX 3060 12 GB, ~$320-400 new or used, runs every 7B model at 15-20 tok/s',
          'Mid: RTX 5060 Ti 16 GB, ~$620 new (MSRP $429), runs 14B models with headroom',
          'Enthusiast: RTX 5090 32 GB, ~$4,900, the only consumer card for single-GPU 70B',
          '2026 GPU prices run 1.5-2.5x above MSRP — compare new and used before you buy',
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
      { label: 'Mid Tier ($380-720)', anchor: '#mid-tier' },
      { label: 'High Tier ($900-1200)', anchor: '#high-tier' },
      { label: 'Enthusiast Tier ($2080+)', anchor: '#enthusiast-tier' },
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
          '**Prices surged in 2026.** A memory shortage pushed GPU prices 1.5-2.5x above MSRP — an RTX 5090 lists at ~$4,900, not its $1,999 launch price, and prices rose again between August and October. Treat every price here as a snapshot of US asking prices, and compare new against used before you buy.',
          '**Budget pick: NVIDIA RTX 3060 12 GB** (~$320-400, new and used now cost about the same) — runs every 7B model at 15-20 tok/s and most 13B models at Q4. The best value entry point for local LLMs in 2026.',
          '**Mid pick: NVIDIA RTX 5060 Ti 16 GB** (~$618 new, ~$649 used asking) — 16 GB of VRAM clears 14B models with context headroom, and its 448 GB/s memory bandwidth is much faster than the older RTX 4060 Ti 16 GB (~$380-490 used), which is now mostly a used-market buy.',
          '**High pick: NVIDIA RTX 4080 Super 16 GB** (~$1,200) — the fastest 16 GB card here. The RTX 4070 Ti Super (~$900) and RTX 5070 Ti (~$1,008) cost less and are the better value if you can accept slightly lower speed.',
          '**Enthusiast pick: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — the RTX 4090 (~$2,083+ new, ~$2,800 used) runs 33B models; the RTX 5090 (~$4,900) is the only single consumer card that fits a 70B model at Q4 without a dual-GPU build.',
          '**AMD is viable but higher-friction.** The RX 6700 XT (12 GB) and RX 7800 XT (16 GB) offer VRAM at competitive prices, but ROCm setup adds hours of work versus NVIDIA CUDA.',
          '**Power draw scales with the tier.** An RTX 3060 draws 170 W; an RTX 5090 draws 575 W and needs an 850-1000 W power supply. Budget the power supply alongside the card.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Budget tier ($320-400):** RTX 3060 12 GB or RX 6700 XT 12 GB — runs 7B and most 13B models.',
          '**Mid tier ($380-720):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB or RX 7800 XT 16 GB — runs 14B models comfortably.',
          '**High tier ($900-1,200):** RTX 4080 Super, RTX 5070 Ti or RTX 4070 Ti Super, all 16 GB — fast 14B inference, light 22B work.',
          '**Enthusiast tier ($2,080+):** RTX 4090 24 GB or RTX 5090 32 GB — 33B models, and 70B at Q4 on the 5090.',
          '**VRAM rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**Power draw range:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**2026 price reality:** a memory shortage pushed prices 1.5-2.5x above MSRP; used cards no longer reliably cost less than new, so compare both.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**For buyers who want a card that lasts and can stretch past $1,000, the NVIDIA RTX 4080 Super 16 GB is the pick that balances VRAM, speed, and price.** Its 16 GB of VRAM clears every 14B model with context headroom, it is the fastest 16 GB card here at roughly 120 tok/s, and at ~$1,200 it is the premium 16 GB choice. It costs about $300 more than the RTX 4070 Ti Super (~$900) and ~$190 more than the RTX 5070 Ti (~$1,008), so if price matters more than the last 20-30% of speed, pick one of those instead. If your budget is fixed below $700, the RTX 5060 Ti 16 GB is the value pick. Spend more only if you specifically need 33B or 70B models.',
        callouts: [
          {
            type: 'note',
            text: 'This Editor\'s Choice reflects price-to-capability only. PromptQuorum is not enrolled in any affiliate program and the links below carry no affiliate tags — they are plain reference links that earn no commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Check RTX 4080 Super price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Check RTX 4080 Super price on Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Ten GPUs Compare for Local LLMs in 2026',
        content:
          'VRAM and power figures are manufacturer specifications. Inference speeds for the RTX 3060, RTX 4080 Super, RTX 4090, and RTX 5090 are measured 7B Q4 figures from PromptQuorum hardware testing; figures for the RTX 4060 Ti 16 GB, RTX 5060 Ti 16 GB, RX 7800 XT, RTX 4070 Ti Super, and RTX 5070 Ti are family-level estimates. Prices are the lowest US asking prices seen in October 2026 — the memory shortage pushed them 1.5-2.5x above MSRP, so re-check before buying.',
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
            'Speed (7B Q4)': '15-20 tok/s',
            'Power': '170 W',
            'Price (US, 2026)': '$320-400 new / $320-350 used',
            'Best for': 'Budget entry — any 7B model',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Speed (7B Q4)': '10-14 tok/s',
            'Power': '230 W',
            'Price (US, 2026)': 'Varies by seller — check live',
            'Best for': 'Cheapest VRAM, accepts AMD setup',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~20-25 tok/s',
            'Power': '165 W',
            'Price (US, 2026)': '~$550+ new / $380-490 used',
            'Best for': 'Mid tier — 14B models, low power',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~65-75 tok/s (est.)',
            'Power': '180 W',
            'Price (US, 2026)': '$618 new / $649 used',
            'Best for': 'Mid tier — 14B, current generation',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~18-24 tok/s (est.)',
            'Power': '263 W',
            'Price (US, 2026)': '~$500-720 (trackers differ)',
            'Best for': '16 GB on AMD, accepts ROCm setup',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~80-90 tok/s (est.)',
            'Power': '285 W',
            'Price (US, 2026)': '$900 new / $920 used',
            'Best for': 'Fast 14B, lower power draw',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~100-125 tok/s (est.)',
            'Power': '300 W',
            'Price (US, 2026)': '$1,008 new / $1,050 used',
            'Best for': 'Fast 14B, value 16 GB',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~120 tok/s',
            'Power': '320 W',
            'Price (US, 2026)': '$1,200 new / $1,149 used',
            'Best for': 'Editor\'s Choice — fastest 16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Speed (7B Q4)': '~150 tok/s',
            'Power': '450 W',
            'Price (US, 2026)': '~$2,083+ new / $2,800 used',
            'Best for': '33B models, dual-GPU 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Speed (7B Q4)': '~160 tok/s',
            'Power': '575 W',
            'Price (US, 2026)': '$4,921 new / $5,880 used',
            'Best for': 'Single-GPU 70B at Q4',
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
          { 'Your situation': 'I want the cheapest card that runs LLMs at all and accept setup work', 'Buy this': 'RX 6700 XT (if you find one cheap)' },
          { 'Your situation': 'I want to run 14B models on a tight power budget', 'Buy this': 'RTX 5060 Ti 16 GB (or a used RTX 4060 Ti 16 GB)' },
          { 'Your situation': 'I want a card that runs 14B fast and lasts several years', 'Buy this': 'RTX 5070 Ti or RTX 4070 Ti Super 16 GB' },
          { 'Your situation': 'I want the fastest 16 GB card and price is secondary', 'Buy this': 'RTX 4080 Super 16 GB' },
          { 'Your situation': 'I need 33B models or plan a future dual-GPU 70B build', 'Buy this': 'RTX 4090 24 GB' },
          { 'Your situation': 'I need a single card that runs 70B models at Q4', 'Buy this': 'RTX 5090 32 GB' },
          { 'Your situation': 'I am unsure and want the safest first GPU', 'Buy this': 'RTX 3060 12 GB — upgrade later if you outgrow it' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Budget Tier ($320-400): RTX 3060 12 GB and RX 6700 XT',
        content:
          '**The budget tier runs every 7B model and most 13B models — and for most first-time local-LLM users, that is all the capability they need.** The RTX 3060 12 GB is the recommended pick; the RX 6700 XT is the cheaper alternative if you accept AMD setup friction. Prices in this tier rose through 2026, and a used RTX 3060 now costs about the same as a new one — compare both.',
        items: [
          '**RTX 3060 12 GB (~$320-400 new, ~$320-350 used):** 12 GB VRAM, 170 W, 15-20 tok/s on 7B models at Q4. Runs Mistral Small, Qwen3 8B, DeepSeek-R1 7B, and most 13B models. The 12 GB variant is the one to buy — avoid the 6 GB variant, which is limited to 3B models. New stock is limited and a used card no longer saves much, so buy whichever is cheaper with a return window. (DeepSeek has since released DeepSeek-V4 — Flash/Pro — as a newer open-weight generation; R1/V3 remain valid to run locally.)',
          '**RX 6700 XT (used, price varies by seller):** 12 GB VRAM, 230 W, 10-14 tok/s on 7B models. It is discontinued new and no longer reliably the cheapest way in — check live listings — and it is slower than the RTX 3060 and dependent on AMD ROCm, which adds setup time.',
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
            text: 'The RX 6700 XT is the cheapest card here, but budget 3-5 hours for ROCm setup on Linux. If the saving versus an RTX 3060 is small, buy the NVIDIA card.',
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
            priceRange: '320-700',
            label: 'Check RX 6700 XT price on Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Mid Tier ($380-720): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB and RX 7800 XT',
        content:
          '**The mid tier exists for one reason: 16 GB of VRAM clears 14B models that 12 GB cards cannot fit with usable context.** If 14B-class models are your target, this is the cheapest tier that runs them properly. The RTX 5060 Ti 16 GB is the current-generation pick, and a used RTX 4060 Ti 16 GB is the cheapest way to get 16 GB.',
        items: [
          '**RTX 5060 Ti 16 GB (~$618 new / ~$649 used asking, $429 MSRP):** 16 GB GDDR7, 180 W, 448 GB/s memory bandwidth. It was not individually benchmarked for this guide; independent estimates put it around 65-75 tok/s on 7B Q4 — roughly 3x the older RTX 4060 Ti 16 GB. It runs Qwen3 14B-class models comfortably. Prices rose about 44% above MSRP in 2026.',
          '**RTX 4060 Ti 16 GB (~$550+ new, scarce / $380-490 used):** 16 GB VRAM, 165 W, roughly 20-25 tok/s on 7B models. It uses the same GPU die as the 8 GB RTX 4060 Ti, so per-token speed is similar — the 16 GB version buys capacity, not raw speed. It is now mostly a used-market buy.',
          '**RX 7800 XT (~$500-720 new, trackers differ):** 16 GB VRAM, 263 W. It was not individually benchmarked for this guide; expect speed in the RTX 4060 Ti range, with AMD ROCm setup as the trade-off.',
          '**Why buy this tier:** you want 14B models, you want low power draw (RTX 4060 Ti), or you want 16 GB at the lowest possible price.',
          '**Why skip this tier:** if 7B models are enough, the budget tier costs $200-300 less; if you want fast 14B inference, the high tier is meaningfully quicker.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The RTX 4060 Ti 16 GB is a capacity upgrade, not a speed upgrade, over the 8 GB version — buy it because you need to fit 14B models, not because you expect more tokens per second. The RTX 5060 Ti 16 GB is the faster option if the price gap is acceptable.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'Check RTX 5060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'Check RTX 4060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 GB (~$1,200 new / ~$1,149 used):** 16 GB VRAM, 320 W, roughly 120 tok/s on 7B models. The Editor\'s Choice — the fastest 16 GB card here, at a premium of roughly $190-300 over the two cards below.',
          '**RTX 5070 Ti 16 GB (~$1,008 new / ~$1,050 used asking, $749 MSRP):** 16 GB GDDR7, 300 W, 896 GB/s memory bandwidth. Not individually benchmarked for this guide; estimates put it around 100-125 tok/s on 7B Q4, and 16 GB runs a 24B Q4 model with headroom.',
          '**RTX 4070 Ti Super 16 GB (~$900 new / ~$920 used):** 16 GB VRAM, 285 W, roughly 80-90 tok/s (estimate). The cheapest new card in this tier, with the lowest power draw of the three.',
          '**Why buy this tier:** you run 14B models constantly and want them instant, or you do light 22B work and want headroom.',
          '**Why skip this tier:** if you need 33B or 70B models, no 16 GB card will fit them — move to the enthusiast tier instead of overspending here.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Within this tier, the RTX 4080 Super is the fastest, the RTX 4070 Ti Super is the cheapest new, and the RTX 5070 Ti sits between them on price with the newest architecture. If you do not need the last 20-30% of speed, pick the cheaper two.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Check RTX 4080 Super price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'Check RTX 5070 Ti price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Enthusiast Tier ($2,080+): RTX 4090 and RTX 5090',
        content:
          '**The enthusiast tier is the only tier that runs models above 22B — and the RTX 5090 32 GB is the only single consumer card that fits a 70B model at Q4.** Buy here for VRAM capacity, not speed; the speed is a side effect. The 2026 surge hit this tier hardest, so prices move week to week.',
        items: [
          '**RTX 4090 24 GB (~$2,083+ new / ~$2,800 used asking):** 24 GB VRAM, 450 W, roughly 150 tok/s on 7B models and 36 tok/s on a 70B Q4 model. Runs 33B models comfortably. New RTX 4090 stock is thin and the new-price floor may be stale — listings range up to ~$3,800.',
          '**RTX 5090 32 GB (~$4,921 new / ~$5,880 used asking, $1,999 MSRP):** 32 GB GDDR7 VRAM, 575 W, roughly 160 tok/s on 7B and 45 tok/s on 70B Q4. The 32 GB capacity is the headline — it is the only consumer card that runs a 70B model at Q4 without a second GPU. Asking prices rose about 64% between August and October, and used listings sit above new.',
          '**Why buy this tier:** you need 33B or 70B models, you run batch inference, or you want a card that will not need replacing for years.',
          '**Why skip this tier:** for 7B-14B models it is overkill — the high tier delivers instant responses on those sizes for less than half the price and power draw.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The RTX 5090 draws 575 W on its own. Pair it with an 850-1000 W power supply — a 750 W unit will sag under load. Budget the power supply upgrade into the purchase, not as an afterthought.',
          },
          {
            type: 'note',
            text: 'Before the 2026 surge, two used RTX 4090s were cheaper than one RTX 5090. At October asking prices of ~$2,083-2,800 per RTX 4090, a pair costs roughly the same as a single RTX 5090 (~$4,921), so the single card is the simpler 70B build.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'Check RTX 4090 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**70B models — 39-42 GB at Q4:** need an RTX 5090 32 GB pushed hard, or a dual-GPU build. A single 24 GB card cannot fit a 70B model at Q4.',
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
          '**GPU prices rose sharply in 2026 because of a memory shortage, pushing consumer cards 1.5-2.5x above their original MSRP.** This changes the buying math, so plan around it rather than around launch prices.',
        items: [
          '**The cause is memory, not GPUs.** A GDDR and HBM supply shortage raised the cost of every card with fast memory — and LLM-capable GPUs are exactly the high-VRAM cards affected most.',
          '**The RTX 5090 is the clearest example:** a $1,999 launch price, but ~$4,921 in asking-price floors in October — about 2.5x, and up 64% since August.',
          '**Lower-end cards rose less, but still rose.** The RTX 5060 Ti 16 GB lists ~44% above its $429 MSRP and the RTX 5070 Ti ~35% above $749; the surge scales with how much fast memory a card carries.',
          '**Used is no longer automatically cheaper.** In October asking-price data, used RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti and RTX 5070 Ti listings sat at or above new ones, and the used RTX 3060 12 GB rose about 31% since August. Compare both and prefer sellers with returns.',
          '**Do not count on a refresh.** NVIDIA\'s RTX 50 Super cards have been reported as indefinitely delayed because of the memory shortage (NVIDIA has not confirmed this). **Decision:** if you can wait, watch for the shortage to ease; if you cannot, buy the smallest card that fits your target model.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GPU prices in 2026 run 1.5-2.5x above MSRP because of a memory-chip shortage, so a local-LLM buyer should compare new and used prices and buy the smallest card that fits the target model.',
          },
          {
            type: 'plain-terms',
            text: 'The cards did not get better — the memory inside them got scarce and expensive. Until that eases, treat MSRP as a historical number, compare new and used, and do not pay for more VRAM than your model actually needs.',
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
          '**2. What is your hard budget ceiling?** Under ~$400: RTX 3060 12 GB. Under ~$650: RTX 5060 Ti 16 GB or a used RTX 4060 Ti 16 GB. ~$900-1,200: RTX 4070 Ti Super, RTX 5070 Ti or RTX 4080 Super. $2,080+: RTX 4090 or RTX 5090.',
          '**3. NVIDIA or AMD?** Choose NVIDIA unless you already own AMD hardware or find a steep RX 7800 XT discount — CUDA removes hours of ROCm setup.',
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
          '**GPU prices vary by region — US prices are usually the lowest, EU prices add VAT, and the 2026 surge has hit every market.** The links below are plain product-search links per region; they carry no affiliate tags and earn no commission.',
        items: [
          '**United States:** Amazon and Newegg have the widest stock. Used RTX 3060 and RTX 4090 cards are common; new flagship stock is thin, and the RTX 5090 is often sold out at list price.',
          '**Germany:** Amazon.de and Mindfactory.de; expect roughly 19% VAT in listed prices, and German GPU prices that run above US figures.',
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
            priceRange: '320-4900',
            label: 'Browse GPUs on Amazon US',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Browse GPUs on Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Browse GPUs on Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**Ignoring power supply requirements.** An RTX 5090 draws 575 W and needs an 850-1000 W PSU. A card that browns out under load is worse than a slower card that runs stably.',
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
          '[NVIDIA GeForce RTX 5090 Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — Official 32 GB GDDR7 VRAM and 575 W power figures for the RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — lowest US new and used asking prices on October 11, 2026 versus August 8, 2026, used for every price in this guide (asking prices, not completed sales).',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — MSRP versus street price for the RTX 5090, RTX 5070 Ti, and RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — report (unconfirmed by NVIDIA) that the RTX 50 Super refresh is postponed over memory supply.',
          '[AMD Radeon Specifications](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Official VRAM and power figures for the RX 7800 XT and RX 6700 XT.',
          '[Best GPUs for Local LLMs 2026](/local-llms/best-gpus-for-local-llms) — PromptQuorum hardware testing: measured 7B Q4 inference speeds for the RTX 3060, 4080, 4090, and 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the cheapest GPU for LLM inference in 2026?',
            a: 'The NVIDIA RTX 3060 12 GB, at roughly $320-400, is the cheapest GPU that runs local LLM inference well. Its 12 GB of VRAM fits every 7B model and most 13B models at Q4 quantization, at 15-20 tokens per second. An RX 6700 XT can be cheaper on the used market, but it is slower and requires AMD ROCm setup. New and used RTX 3060 prices are now close, so compare both.',
          },
          {
            q: 'Why are GPU prices so high in 2026?',
            a: 'A memory-chip shortage drove the 2026 GPU price surge. GDDR and HBM supply tightened, raising the cost of every graphics card with fast memory, and high-VRAM LLM-capable cards were hit hardest. Most cards now sell 1.5-2.5x above their original MSRP — an RTX 5090 launched at $1,999 but lists near $4,900 in October. Used cards no longer escape the increase.',
          },
          {
            q: 'What are the GPU requirements for running a local LLM?',
            a: 'At Q4_K_M quantization, plan for roughly 0.6 GB of VRAM per billion parameters plus 2-4 GB of overhead. That means 8-9 GB for 7B models, 11-13 GB for 14B, 19-22 GB for 33B, and 39-42 GB for 70B. A 12 GB card covers 7B comfortably, a 16 GB card covers 14B, and 70B needs an RTX 5090 32 GB or a dual-GPU build.',
          },
          {
            q: 'Which graphics card is best for local LLMs?',
            a: 'The best graphics card for local LLMs is the one with enough VRAM for your target model at your budget. For 7B models, an RTX 3060 12 GB (~$320-400) is enough. For 14B models, an RTX 5060 Ti 16 GB (~$618) or a used RTX 4060 Ti 16 GB is the mid-tier pick. For 33B models you need an RTX 4090 24 GB, and for single-card 70B an RTX 5090 32 GB. NVIDIA cards are the lowest-friction choice because CUDA works out of the box.',
          },
          {
            q: 'Is the RTX 4060 Ti 16 GB faster than the 8 GB version?',
            a: 'No. The RTX 4060 Ti 16 GB and 8 GB versions use the same GPU die, so per-token inference speed is similar — roughly 20-25 tokens per second on 7B models. The 16 GB version buys capacity, letting you run 14B models that do not fit in 8 GB. Buy it for VRAM, not speed.',
          },
          {
            q: 'Should I buy NVIDIA or AMD for local LLMs?',
            a: 'Buy NVIDIA unless you already own AMD hardware or find a steep discount. NVIDIA CUDA works out of the box with Ollama, LM Studio, and llama.cpp. AMD cards like the RX 6700 XT and RX 7800 XT offer competitive VRAM per dollar, but ROCm setup typically costs several hours on Linux.',
          },
          {
            q: 'Can a single GPU run a 70B model?',
            a: 'Only the RTX 5090 32 GB, and only at Q4 quantization where a 70B model needs roughly 39-42 GB — meaning aggressive quantization or partial offload. A 24 GB RTX 4090 cannot fit a 70B model at Q4 alone; the common solution is two RTX 4090s for combined VRAM, though at October asking prices that pair costs about as much as a single RTX 5090.',
          },
          {
            q: 'Is the RTX 5090 worth it over the RTX 4090 for local LLMs?',
            a: 'Only if you specifically need to run 70B models on a single card. The RTX 5090 has 32 GB of VRAM versus the RTX 4090\'s 24 GB, which is the deciding factor. For 7B-33B models, the RTX 4090 fits the same models; at October asking prices the RTX 5090 costs roughly 1.8-2.4x an RTX 4090, so pay for it only if the extra 8 GB solves a real problem.',
          },
          {
            q: 'What power supply do I need for these GPUs?',
            a: 'Match the power supply to the tier: a 550 W unit suits the RTX 3060, 650-750 W suits the RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super and RTX 5070 Ti, 850 W suits the RTX 4090, and 850-1000 W is needed for the RTX 5090, which draws 575 W on its own. Undersized power supplies cause instability under load.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Check the full VRAM requirements for every model size](/local-llms/how-much-vram-local-llm) — the complete VRAM-by-model-size method behind the quick formula in this guide.',
          '[Compare 15+ GPUs with measured local-LLM benchmarks](/local-llms/best-gpus-for-local-llms) — the wider GPU benchmark set, including older and server cards beyond these ten.',
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
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Beste Grafikkarte für lokale LLMs: GPU-Kaufberatung 2026',
    seoTitle: 'Beste Grafikkarte für lokale LLMs 2026: Budget bis RTX 5090',
    intro:
      'Die meisten GPU-Empfehlungen für lokale LLMs optimieren die falsche Kennzahl. Das Tempo in Token pro Sekunde entscheidet, wie schnell ein Modell antwortet — der VRAM entscheidet jedoch, ob das Modell überhaupt läuft. Ein Modell, das nicht in den Speicher passt, ist unendlich langsamer als eines, das passt. Dieser Leitfaden vergleicht zehn Consumer-Grafikkarten über vier Preisklassen anhand der Kennzahlen, die einen Kauf wirklich bestimmen: VRAM-Kapazität, Inferenztempo, Leistungsaufnahme und Preis. Ein Hinweis zum Preis: Die GPU-Preise sind 2026 wegen einer Speicherknappheit stark gestiegen — eine RTX 5090 wird inzwischen zum rund 2,5-Fachen ihrer UVP angeboten. Alle Preise hier sind daher eine Momentaufnahme US-amerikanischer Angebotspreise; prüfen Sie den aktuellen Preis vor dem Kauf.',
    metaDescription:
      'Welche Grafikkarte für lokale LLMs? Zehn GPUs im Vergleich: VRAM, Tempo, Leistung, Preise 2026 – günstig bis RTX 5090 – plus GPU-Anforderungen je Modell.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-de.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — zehn Grafikkarten, vier Budgets, eine Regel: nach VRAM kaufen.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**Die beste Grafikkarte für lokale LLMs ist die, deren VRAM zu Ihrem Modell passt — nicht die schnellste Karte. Eine RTX 3060 12 GB führt jedes 7B-Modell aus, eine 16-GB-Karte (RTX 5060 Ti, RTX 4060 Ti oder RTX 5070 Ti) bewältigt 14B-Modelle, eine RTX 4090 24 GB bewältigt 33B-Modelle, und eine RTX 5090 32 GB ist die einzige einzelne Consumer-Karte für 70B-Arbeit.**',
    quickAnswerTop: {
      de: {
        question: 'Welche Grafikkarte ist 2026 die beste für lokale LLMs?',
        answer:
          'Kaufen Sie nach VRAM, dann nach Tempo. Eine RTX 3060 12 GB (~320–400 $) ist die Budget-Wahl und führt jedes 7B-Modell aus. Eine 16-GB-Karte ist die Mittelklasse-Wahl für 14B-Modelle — eine RTX 5060 Ti 16 GB (~620 $ neu) oder eine gebrauchte RTX 4060 Ti 16 GB (~380–490 $). Eine RTX 4090 24 GB bewältigt 33B-Modelle, und eine RTX 5090 32 GB (~4.900 $) ist die einzige einzelne Consumer-Karte für 70B-Arbeit ohne Dual-GPU-Aufbau. Beachten Sie: Die Preise 2026 liegen deutlich über der UVP.',
        bullets: [
          'Budget: RTX 3060 12 GB, ~320–400 $ neu oder gebraucht — führt jedes 7B-Modell mit 15–20 Token/s aus',
          'Mittelklasse: RTX 5060 Ti 16 GB, ~620 $ neu (UVP 429 $) — 14B-Modelle mit Reserve',
          'Enthusiast: RTX 5090 32 GB, ~4.900 $ — einzige Consumer-Karte für 70B auf einer GPU',
          'GPU-Preise liegen 2026 1,5- bis 2,5-fach über der UVP — vergleichen Sie Neu- und Gebrauchtpreise vor dem Kauf',
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
      { label: 'Mittelklasse (380–720 $)', anchor: '#mid-tier' },
      { label: 'Oberklasse (900–1.200 $)', anchor: '#high-tier' },
      { label: 'Enthusiast-Klasse (ab 2.080 $)', anchor: '#enthusiast-tier' },
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
          '**Die Preise sind 2026 stark gestiegen.** Eine Speicherknappheit hat die GPU-Preise 1,5- bis 2,5-fach über die UVP getrieben — eine RTX 5090 wird mit ~4.900 $ gelistet, nicht mit ihrem Einführungspreis von 1.999 $, und die Preise sind zwischen August und Oktober erneut gestiegen. Behandeln Sie jeden Preis hier als Momentaufnahme US-amerikanischer Angebotspreise und vergleichen Sie vor dem Kauf Neu- und Gebrauchtpreise.',
          '**Budget-Wahl: NVIDIA RTX 3060 12 GB** (~320–400 $, neu und gebraucht kosten inzwischen etwa gleich viel) — führt jedes 7B-Modell mit 15–20 Token/s aus und die meisten 13B-Modelle bei Q4. Der beste Einstiegspunkt für lokale LLMs 2026.',
          '**Mittelklasse-Wahl: NVIDIA RTX 5060 Ti 16 GB** (~618 $ neu, ~649 $ gebraucht angeboten) — 16 GB VRAM bewältigen 14B-Modelle mit Kontextreserve, und ihre Speicherbandbreite von 448 GB/s ist deutlich höher als bei der älteren RTX 4060 Ti 16 GB (~380–490 $ gebraucht), die inzwischen vor allem ein Gebrauchtkauf ist.',
          '**Oberklasse-Wahl: NVIDIA RTX 4080 Super 16 GB** (~1.200 $) — die schnellste 16-GB-Karte hier. Die RTX 4070 Ti Super (~900 $) und die RTX 5070 Ti (~1.008 $) kosten weniger und sind das bessere Preis-Leistungs-Verhältnis, wenn Sie etwas weniger Tempo akzeptieren.',
          '**Enthusiast-Wahl: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — die RTX 4090 (~2.083 $+ neu, ~2.800 $ gebraucht) bewältigt 33B-Modelle; die RTX 5090 (~4.900 $) ist die einzige einzelne Consumer-Karte, die ein 70B-Modell bei Q4 ohne Dual-GPU-Aufbau fasst.',
          '**AMD ist nutzbar, aber aufwendiger.** Die RX 6700 XT (12 GB) und RX 7800 XT (16 GB) bieten VRAM zu konkurrenzfähigen Preisen, aber die ROCm-Einrichtung kostet Stunden Arbeit gegenüber NVIDIA CUDA.',
          '**Die Leistungsaufnahme skaliert mit der Klasse.** Eine RTX 3060 zieht 170 W; eine RTX 5090 zieht 575 W und benötigt ein 850–1000-W-Netzteil. Kalkulieren Sie das Netzteil zusammen mit der Karte ein.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Budget-Klasse (320–400 $):** RTX 3060 12 GB oder RX 6700 XT 12 GB — führt 7B- und die meisten 13B-Modelle aus.',
          '**Mittelklasse (380–720 $):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB oder RX 7800 XT 16 GB — führt 14B-Modelle bequem aus.',
          '**Oberklasse (900–1.200 $):** RTX 4080 Super, RTX 5070 Ti oder RTX 4070 Ti Super, alle mit 16 GB — schnelle 14B-Inferenz, leichte 22B-Arbeit.',
          '**Enthusiast-Klasse (ab 2.080 $):** RTX 4090 24 GB oder RTX 5090 32 GB — 33B-Modelle, und 70B bei Q4 auf der 5090.',
          '**VRAM-Faustregel bei Q4_K_M:** rund 0,6 GB pro Milliarde Parameter, plus 2–4 GB für Kontext und Werkzeuge.',
          '**Leistungsaufnahme:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Stromkosten:** Bei deutschem Strompreis (~0,35 €/kWh) und 4 Stunden Betrieb täglich kostet das von ~7 €/Monat (RTX 3060) bis ~24 €/Monat (RTX 5090).',
          '**Preisrealität 2026:** Eine Speicherknappheit trieb die Preise 1,5- bis 2,5-fach über die UVP; gebrauchte Karten sind nicht mehr verlässlich günstiger als neue, vergleichen Sie also beides.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Redaktionsempfehlung: RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**Für Käufer, die eine langlebige Karte wollen und über 1.000 $ ausgeben können, ist die NVIDIA RTX 4080 Super 16 GB die Wahl, die VRAM, Tempo und Preis ausbalanciert.** Ihre 16 GB VRAM bewältigen jedes 14B-Modell mit Kontextreserve, sie ist mit rund 120 Token/s die schnellste 16-GB-Karte hier, und mit ~1.200 $ ist sie die Premium-Wahl unter den 16-GB-Karten. Sie kostet etwa 300 $ mehr als die RTX 4070 Ti Super (~900 $) und ~190 $ mehr als die RTX 5070 Ti (~1.008 $) — wenn der Preis wichtiger ist als die letzten 20–30 % Tempo, wählen Sie stattdessen eine von diesen. Liegt Ihr Budget fest unter 700 $, ist die RTX 5060 Ti 16 GB die Preis-Leistungs-Wahl. Geben Sie nur dann mehr aus, wenn Sie gezielt 33B- oder 70B-Modelle benötigen.',
        callouts: [
          {
            type: 'note',
            text: 'Diese Redaktionsempfehlung beruht ausschließlich auf dem Verhältnis von Preis zu Leistung. Die folgenden Links sind reine Verweislinks zu Händlern.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'RTX 4080 Super Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'RTX 4080 Super Preis bei Mindfactory prüfen',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie die zehn GPUs für lokale LLMs 2026 abschneiden',
        content:
          'VRAM- und Leistungsangaben sind Herstellerspezifikationen. Inferenztempo für RTX 3060, RTX 4080 Super, RTX 4090 und RTX 5090 sind gemessene 7B-Q4-Werte aus PromptQuorum-Hardwaretests; Werte für RTX 4060 Ti 16 GB, RTX 5060 Ti 16 GB, RX 7800 XT, RTX 4070 Ti Super und RTX 5070 Ti sind Schätzungen auf Modellreihen-Ebene. Preise sind die niedrigsten im Oktober 2026 gesehenen US-Angebotspreise — die Speicherknappheit trieb sie 1,5- bis 2,5-fach über die UVP, daher vor dem Kauf prüfen.',
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
            'Tempo (7B Q4)': '15–20 Token/s',
            'Leistungsaufnahme': '170 W',
            'Preis (US, 2026)': '320–400 $ neu / 320–350 $ gebraucht',
            'Am besten für': 'Budget-Einstieg — jedes 7B-Modell',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Tempo (7B Q4)': '10–14 Token/s',
            'Leistungsaufnahme': '230 W',
            'Preis (US, 2026)': 'Je nach Anbieter — live prüfen',
            'Am besten für': 'Günstiger VRAM, AMD-Einrichtung nötig',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~20–25 Token/s',
            'Leistungsaufnahme': '165 W',
            'Preis (US, 2026)': '~550 $+ neu / 380–490 $ gebraucht',
            'Am besten für': 'Mittelklasse — 14B-Modelle, sparsam',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~65–75 Token/s (geschätzt)',
            'Leistungsaufnahme': '180 W',
            'Preis (US, 2026)': '618 $ neu / 649 $ gebraucht',
            'Am besten für': 'Mittelklasse — 14B, aktuelle Generation',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~18–24 Token/s (geschätzt)',
            'Leistungsaufnahme': '263 W',
            'Preis (US, 2026)': '~500–720 $ (Preisportale weichen ab)',
            'Am besten für': '16 GB bei AMD, ROCm-Einrichtung nötig',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~80–90 Token/s (geschätzt)',
            'Leistungsaufnahme': '285 W',
            'Preis (US, 2026)': '900 $ neu / 920 $ gebraucht',
            'Am besten für': 'Schnelle 14B, geringere Leistungsaufnahme',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~100–125 Token/s (geschätzt)',
            'Leistungsaufnahme': '300 W',
            'Preis (US, 2026)': '1.008 $ neu / 1.050 $ gebraucht',
            'Am besten für': 'Schnelle 14B, 16 GB mit gutem Preis',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~120 Token/s',
            'Leistungsaufnahme': '320 W',
            'Preis (US, 2026)': '1.200 $ neu / 1.149 $ gebraucht',
            'Am besten für': 'Redaktionsempfehlung — schnellste 16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Tempo (7B Q4)': '~150 Token/s',
            'Leistungsaufnahme': '450 W',
            'Preis (US, 2026)': '~2.083 $+ neu / 2.800 $ gebraucht',
            'Am besten für': '33B-Modelle, Dual-GPU für 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Tempo (7B Q4)': '~160 Token/s',
            'Leistungsaufnahme': '575 W',
            'Preis (US, 2026)': '4.921 $ neu / 5.880 $ gebraucht',
            'Am besten für': '70B bei Q4 auf einer GPU',
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
          { 'Ihre Situation': 'Ich will die günstigste Karte, die LLMs überhaupt ausführt, und nehme Einrichtungsaufwand in Kauf', 'Das kaufen': 'RX 6700 XT (falls günstig zu finden)' },
          { 'Ihre Situation': 'Ich will 14B-Modelle bei knappem Strombudget ausführen', 'Das kaufen': 'RTX 5060 Ti 16 GB (oder gebrauchte RTX 4060 Ti 16 GB)' },
          { 'Ihre Situation': 'Ich will eine Karte, die 14B schnell ausführt und mehrere Jahre hält', 'Das kaufen': 'RTX 5070 Ti oder RTX 4070 Ti Super 16 GB' },
          { 'Ihre Situation': 'Ich will die schnellste 16-GB-Karte und der Preis ist zweitrangig', 'Das kaufen': 'RTX 4080 Super 16 GB' },
          { 'Ihre Situation': 'Ich brauche 33B-Modelle oder plane einen späteren Dual-GPU-70B-Aufbau', 'Das kaufen': 'RTX 4090 24 GB' },
          { 'Ihre Situation': 'Ich brauche eine einzelne Karte, die 70B-Modelle bei Q4 ausführt', 'Das kaufen': 'RTX 5090 32 GB' },
          { 'Ihre Situation': 'Ich bin unsicher und will die sicherste erste GPU', 'Das kaufen': 'RTX 3060 12 GB — später aufrüsten, falls Sie sie überwachsen' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Budget-Klasse (320–400 $): RTX 3060 12 GB und RX 6700 XT',
        content:
          '**Die Budget-Klasse führt jedes 7B-Modell und die meisten 13B-Modelle aus — und für die meisten Erstnutzer lokaler LLMs ist genau das die gesamte benötigte Leistung.** Die RTX 3060 12 GB ist die empfohlene Wahl; die RX 6700 XT ist die günstigere Alternative, wenn Sie den AMD-Einrichtungsaufwand in Kauf nehmen. Die Preise in dieser Klasse sind 2026 gestiegen, und eine gebrauchte RTX 3060 kostet inzwischen etwa so viel wie eine neue — vergleichen Sie beides.',
        items: [
          '**RTX 3060 12 GB (~320–400 $ neu, ~320–350 $ gebraucht):** 12 GB VRAM, 170 W, 15–20 Token/s bei 7B-Modellen mit Q4. Führt Mistral Small, Qwen3 8B, DeepSeek-R1 7B und die meisten 13B-Modelle aus. Kaufen Sie ausdrücklich die 12-GB-Variante — meiden Sie die 6-GB-Variante, die auf 3B-Modelle beschränkt ist. Neuware ist knapp und eine gebrauchte Karte spart kaum noch etwas — kaufen Sie die jeweils günstigere mit Rückgaberecht. (DeepSeek hat inzwischen DeepSeek-V4 — Flash/Pro — als neuere offene Generation veröffentlicht; R1/V3 bleiben weiterhin lokal nutzbar.)',
          '**RX 6700 XT (gebraucht, Preis je nach Anbieter):** 12 GB VRAM, 230 W, 10–14 Token/s bei 7B-Modellen. Sie ist neu nicht mehr erhältlich und nicht mehr verlässlich der günstigste Einstieg — prüfen Sie aktuelle Angebote —, außerdem langsamer als die RTX 3060 und auf AMD ROCm angewiesen, was Einrichtungszeit kostet.',
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
            text: 'Die RX 6700 XT ist die günstigste Karte hier, planen Sie aber 3–5 Stunden für die ROCm-Einrichtung unter Linux ein. Wenn die Ersparnis gegenüber einer RTX 3060 gering ist, kaufen Sie die NVIDIA-Karte.',
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
            priceRange: '320-700',
            label: 'RX 6700 XT Preis bei Mindfactory prüfen',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Mittelklasse (380–720 $): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB und RX 7800 XT',
        content:
          '**Die Mittelklasse existiert aus einem Grund: 16 GB VRAM bewältigen 14B-Modelle, die 12-GB-Karten nicht mit brauchbarem Kontext fassen.** Wenn 14B-Modelle Ihr Ziel sind, ist dies die günstigste Klasse, die sie richtig ausführt. Die RTX 5060 Ti 16 GB ist die Wahl der aktuellen Generation, und eine gebrauchte RTX 4060 Ti 16 GB ist der günstigste Weg zu 16 GB.',
        items: [
          '**RTX 5060 Ti 16 GB (~618 $ neu / ~649 $ gebraucht angeboten, UVP 429 $):** 16 GB GDDR7, 180 W, 448 GB/s Speicherbandbreite. Sie wurde für diesen Leitfaden nicht einzeln gemessen; unabhängige Schätzungen liegen bei etwa 65–75 Token/s bei 7B Q4 — grob das Dreifache der älteren RTX 4060 Ti 16 GB. Sie führt Modelle der Klasse Qwen3 14B bequem aus. Die Preise lagen 2026 rund 44 % über der UVP.',
          '**RTX 4060 Ti 16 GB (~550 $+ neu, knapp / 380–490 $ gebraucht):** 16 GB VRAM, 165 W, rund 20–25 Token/s bei 7B-Modellen. Sie nutzt denselben GPU-Chip wie die 8-GB-RTX-4060-Ti, das Tempo pro Token ist also ähnlich — die 16-GB-Version kauft Kapazität, nicht reines Tempo. Sie ist inzwischen vor allem ein Gebrauchtkauf.',
          '**RX 7800 XT (~500–720 $ neu, Preisportale weichen ab):** 16 GB VRAM, 263 W. Sie wurde für diesen Leitfaden nicht einzeln gemessen; erwarten Sie ein Tempo im Bereich der RTX 4060 Ti, mit der AMD-ROCm-Einrichtung als Kompromiss.',
          '**Warum diese Klasse kaufen:** Sie wollen 14B-Modelle, Sie wollen geringe Leistungsaufnahme (RTX 4060 Ti) oder Sie wollen 16 GB zum niedrigstmöglichen Preis.',
          '**Warum diese Klasse überspringen:** Wenn 7B-Modelle genügen, kostet die Budget-Klasse 200–300 $ weniger; wenn Sie schnelle 14B-Inferenz wollen, ist die Oberklasse spürbar zügiger.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die RTX 4060 Ti 16 GB ist ein Kapazitäts-Upgrade, kein Tempo-Upgrade gegenüber der 8-GB-Version — kaufen Sie sie, weil Sie 14B-Modelle fassen müssen, nicht weil Sie mehr Token pro Sekunde erwarten. Die RTX 5060 Ti 16 GB ist die schnellere Option, wenn der Preisabstand akzeptabel ist.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'RTX 5060 Ti 16GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'RTX 4060 Ti 16GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 GB (~1.200 $ neu / ~1.149 $ gebraucht):** 16 GB VRAM, 320 W, rund 120 Token/s bei 7B-Modellen. Die Redaktionsempfehlung — die schnellste 16-GB-Karte hier, mit einem Aufpreis von grob 190–300 $ gegenüber den beiden folgenden Karten.',
          '**RTX 5070 Ti 16 GB (~1.008 $ neu / ~1.050 $ gebraucht angeboten, UVP 749 $):** 16 GB GDDR7, 300 W, 896 GB/s Speicherbandbreite. Für diesen Leitfaden nicht einzeln gemessen; Schätzungen liegen bei etwa 100–125 Token/s bei 7B Q4, und 16 GB führen ein 24B-Modell bei Q4 mit Reserve aus.',
          '**RTX 4070 Ti Super 16 GB (~900 $ neu / ~920 $ gebraucht):** 16 GB VRAM, 285 W, rund 80–90 Token/s (Schätzung). Die günstigste neue Karte dieser Klasse, mit der niedrigsten Leistungsaufnahme der drei.',
          '**Warum diese Klasse kaufen:** Sie führen ständig 14B-Modelle aus und wollen sie sofort, oder Sie machen leichte 22B-Arbeit und wollen Reserve.',
          '**Warum diese Klasse überspringen:** Wenn Sie 33B- oder 70B-Modelle brauchen, fasst keine 16-GB-Karte sie — wechseln Sie in die Enthusiast-Klasse, statt hier zu viel auszugeben.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Innerhalb dieser Klasse ist die RTX 4080 Super die schnellste, die RTX 4070 Ti Super die günstigste neue Karte, und die RTX 5070 Ti liegt preislich dazwischen, mit der neuesten Architektur. Wenn Sie die letzten 20–30 % Tempo nicht brauchen, wählen Sie eine der beiden günstigeren.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'RTX 4080 Super Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'RTX 5070 Ti Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'RTX 4070 Ti Super Preis bei Amazon.de prüfen',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Enthusiast-Klasse (ab 2.080 $): RTX 4090 und RTX 5090',
        content:
          '**Die Enthusiast-Klasse ist die einzige Klasse, die Modelle über 22B ausführt — und die RTX 5090 32 GB ist die einzige einzelne Consumer-Karte, die ein 70B-Modell bei Q4 fasst.** Kaufen Sie hier wegen der VRAM-Kapazität, nicht wegen des Tempos; das Tempo ist ein Nebeneffekt. Der Preisanstieg 2026 hat diese Klasse am härtesten getroffen, daher bewegen sich die Preise wöchentlich.',
        items: [
          '**RTX 4090 24 GB (~2.083 $+ neu / ~2.800 $ gebraucht angeboten):** 24 GB VRAM, 450 W, rund 150 Token/s bei 7B-Modellen und 36 Token/s bei einem 70B-Q4-Modell. Führt 33B-Modelle bequem aus. Neue RTX 4090 sind kaum noch lieferbar, und der Neupreis-Boden kann veraltet sein — Angebote reichen bis ~3.800 $.',
          '**RTX 5090 32 GB (~4.921 $ neu / ~5.880 $ gebraucht angeboten, UVP 1.999 $):** 32 GB GDDR7-VRAM, 575 W, rund 160 Token/s bei 7B und 45 Token/s bei 70B Q4. Die 32 GB Kapazität sind das Hauptargument — es ist die einzige Consumer-Karte, die ein 70B-Modell bei Q4 ohne zweite GPU ausführt. Die Angebotspreise stiegen zwischen August und Oktober um rund 64 %, und Gebrauchtangebote liegen über den Neupreisen.',
          '**Warum diese Klasse kaufen:** Sie brauchen 33B- oder 70B-Modelle, Sie betreiben Batch-Inferenz oder Sie wollen eine Karte, die jahrelang nicht ersetzt werden muss.',
          '**Warum diese Klasse überspringen:** Für 7B–14B-Modelle ist sie überdimensioniert — die Oberklasse liefert sofortige Antworten bei diesen Größen für weniger als die Hälfte des Preises und der Leistungsaufnahme.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Die RTX 5090 zieht allein 575 W. Kombinieren Sie sie mit einem 850–1000-W-Netzteil — ein 750-W-Gerät bricht unter Last ein. Kalkulieren Sie das Netzteil-Upgrade in den Kauf ein, nicht als Nachgedanken.',
          },
          {
            type: 'note',
            text: 'Vor dem Preisanstieg 2026 waren zwei gebrauchte RTX 4090 günstiger als eine RTX 5090. Bei den Angebotspreisen vom Oktober von ~2.083–2.800 $ je RTX 4090 kostet ein Paar etwa so viel wie eine einzelne RTX 5090 (~4.921 $), die einzelne Karte ist also der einfachere 70B-Aufbau.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'RTX 4090 Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**70B-Modelle — 39–42 GB bei Q4:** brauchen eine RTX 5090 32 GB am Limit oder einen Dual-GPU-Aufbau. Eine einzelne 24-GB-Karte fasst ein 70B-Modell bei Q4 nicht.',
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
          '**Die GPU-Preise stiegen 2026 stark wegen einer Speicherknappheit und drückten Consumer-Karten 1,5- bis 2,5-fach über ihre ursprüngliche UVP.** Das verändert die Kaufrechnung, also planen Sie damit statt mit den Einführungspreisen.',
        items: [
          '**Die Ursache ist der Speicher, nicht die GPUs.** Eine GDDR- und HBM-Lieferknappheit verteuerte jede Karte mit schnellem Speicher — und LLM-fähige GPUs sind genau die Karten mit viel VRAM, die am stärksten betroffen sind.',
          '**Die RTX 5090 ist das deutlichste Beispiel:** ein Einführungspreis von 1.999 $, aber ~4.921 $ als Angebotspreis-Boden im Oktober — etwa das 2,5-Fache und seit August um 64 % gestiegen.',
          '**Karten der unteren Klassen stiegen weniger, aber sie stiegen.** Die RTX 5060 Ti 16 GB wird rund 44 % über ihrer UVP von 429 $ gelistet, die RTX 5070 Ti rund 35 % über 749 $; der Anstieg skaliert damit, wie viel schneller Speicher eine Karte trägt.',
          '**Gebraucht ist nicht mehr automatisch günstiger.** In den Angebotspreisdaten vom Oktober lagen gebrauchte RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti und RTX 5070 Ti auf oder über den Neupreisen, und die gebrauchte RTX 3060 12 GB stieg seit August um rund 31 %. Vergleichen Sie beides und bevorzugen Sie Verkäufer mit Rückgaberecht.',
          '**Rechnen Sie nicht mit einem Refresh.** Die RTX-50-Super-Karten von NVIDIA gelten Berichten zufolge wegen der Speicherknappheit als auf unbestimmte Zeit verschoben (NVIDIA hat das nicht bestätigt). **Entscheidung:** Wenn Sie warten können, beobachten Sie, ob sich die Knappheit löst; wenn nicht, kaufen Sie die kleinste Karte, die zu Ihrem Zielmodell passt.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GPU-Preise liegen 2026 wegen einer Speicherchip-Knappheit 1,5- bis 2,5-fach über der UVP, daher sollte ein Käufer für lokale LLMs Neu- und Gebrauchtpreise vergleichen und die kleinste zum Zielmodell passende Karte kaufen.',
          },
          {
            type: 'plain-terms',
            text: 'Die Karten sind nicht besser geworden — der Speicher in ihnen wurde knapp und teuer. Bis sich das löst, behandeln Sie die UVP als historische Zahl, vergleichen Sie Neu- und Gebrauchtpreise und zahlen Sie nicht für mehr VRAM, als Ihr Modell tatsächlich braucht.',
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
          '**2. Was ist Ihre harte Budgetgrenze?** Bis ~400 $: RTX 3060 12 GB. Bis ~650 $: RTX 5060 Ti 16 GB oder eine gebrauchte RTX 4060 Ti 16 GB. ~900–1.200 $: RTX 4070 Ti Super, RTX 5070 Ti oder RTX 4080 Super. Ab 2.080 $: RTX 4090 oder RTX 5090.',
          '**3. NVIDIA oder AMD?** Wählen Sie NVIDIA, außer Sie besitzen bereits AMD-Hardware oder finden einen starken Rabatt auf die RX 7800 XT — CUDA erspart Stunden ROCm-Einrichtung.',
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
          '**GPU-Preise schwanken je Region — die Preise in diesem Leitfaden sind US-Angebotspreise, in Deutschland kommen 19 % MwSt. hinzu, und der Anstieg 2026 hat jeden Markt getroffen.** Die folgenden Links sind reine Produkt-Suchlinks; sie tragen keine Affiliate-Kennungen.',
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
            priceRange: '320-4900',
            label: 'GPUs bei Amazon.de durchsuchen',
          },
          {
            url: 'https://www.mindfactory.de/Hardware/Grafikkarten+(VGA).html',
            productName: 'GPUs für lokale LLMs (Mindfactory)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'GPUs bei Mindfactory durchsuchen',
          },
          {
            url: 'https://www.alternate.de/Grafikkarten',
            productName: 'GPUs für lokale LLMs (alternate.de)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'GPUs bei alternate.de durchsuchen',
          },
          {
            url: 'https://geizhals.de/?cat=gra16_512',
            productName: 'GPU-Preisvergleich (Geizhals)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**Die Netzteilanforderungen ignorieren.** Eine RTX 5090 zieht 575 W und braucht ein 850–1000-W-Netzteil. Eine Karte, die unter Last einbricht, ist schlechter als eine langsamere Karte, die stabil läuft.',
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
          '[NVIDIA GeForce RTX 5090 — Spezifikationen](https://www.nvidia.com/de-de/geforce/graphics-cards/50-series/rtx-5090/) — Offizielle 32 GB GDDR7-VRAM und 575 W Leistungsaufnahme der RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — niedrigste US-Angebotspreise für Neu- und Gebrauchtkarten am 11. Oktober 2026 im Vergleich zum 8. August 2026, Grundlage aller Preise in diesem Leitfaden (Angebotspreise, keine abgeschlossenen Verkäufe).',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — UVP gegenüber Straßenpreis für RTX 5090, RTX 5070 Ti und RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — Bericht (von NVIDIA nicht bestätigt), dass der Refresh der RTX 50 Super wegen der Speicherversorgung verschoben ist.',
          '[Geizhals Deutschland — Grafikkarten-Preisvergleich](https://geizhals.de/?cat=gra16_512) — Aktuelle deutsche Händlerpreise zum Gegenprüfen; die Preise in diesem Leitfaden sind US-Werte.',
          '[AMD Radeon — Spezifikationen](https://www.amd.com/de/products/graphics/desktops/radeon.html) — Offizielle VRAM- und Leistungsangaben für RX 7800 XT und RX 6700 XT.',
          '[Beste GPUs für lokale LLMs 2026](/de/local-llms/best-gpus-for-local-llms) — PromptQuorum-Hardwaretests: gemessene 7B-Q4-Inferenztempi für RTX 3060, 4080, 4090 und 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist die günstigste GPU für LLM-Inferenz im Jahr 2026?',
            a: 'Die NVIDIA RTX 3060 12 GB für rund 320–400 $ ist die günstigste GPU, die lokale LLM-Inferenz gut ausführt. Ihre 12 GB VRAM fassen jedes 7B-Modell und die meisten 13B-Modelle bei Q4-Quantisierung, mit 15–20 Token pro Sekunde. Eine RX 6700 XT kann gebraucht günstiger sein, ist aber langsamer und braucht AMD-ROCm-Einrichtung. Neu- und Gebrauchtpreise der RTX 3060 liegen inzwischen dicht beieinander, vergleichen Sie also beides.',
          },
          {
            q: 'Warum sind die GPU-Preise 2026 so hoch?',
            a: 'Eine Speicherchip-Knappheit trieb den GPU-Preisanstieg 2026. Das GDDR- und HBM-Angebot wurde knapp, was die Kosten jeder Grafikkarte mit schnellem Speicher erhöhte, und LLM-fähige Karten mit viel VRAM traf es am härtesten. Verkauft werden die meisten Karten 1,5- bis 2,5-fach über ihrer ursprünglichen UVP — eine RTX 5090 startete bei 1.999 $, wird im Oktober aber um 4.900 $ gelistet. Gebrauchte Karten entgehen dem Anstieg nicht mehr.',
          },
          {
            q: 'Welche GPU-Anforderungen gelten für den Betrieb eines lokalen LLMs?',
            a: 'Bei Q4_K_M-Quantisierung rechnen Sie mit rund 0,6 GB VRAM pro Milliarde Parameter plus 2–4 GB Overhead. Das bedeutet 8–9 GB für 7B-Modelle, 11–13 GB für 14B, 19–22 GB für 33B und 39–42 GB für 70B. Eine 12-GB-Karte deckt 7B bequem ab, eine 16-GB-Karte deckt 14B ab, und 70B braucht eine RTX 5090 32 GB oder einen Dual-GPU-Aufbau.',
          },
          {
            q: 'Welche Grafikkarte ist am besten für lokale LLMs?',
            a: 'Die beste Grafikkarte für lokale LLMs ist die mit ausreichend VRAM für Ihr Zielmodell bei Ihrem Budget. Für 7B-Modelle genügt eine RTX 3060 12 GB (~320–400 $). Für 14B-Modelle ist eine RTX 5060 Ti 16 GB (~618 $) oder eine gebrauchte RTX 4060 Ti 16 GB die Mittelklasse-Wahl. Für 33B-Modelle brauchen Sie eine RTX 4090 24 GB, für 70B auf einer Karte eine RTX 5090 32 GB. NVIDIA-Karten sind die reibungsärmste Wahl, weil CUDA sofort funktioniert.',
          },
          {
            q: 'Ist die RTX 4060 Ti 16 GB schneller als die 8-GB-Version?',
            a: 'Nein. Die RTX 4060 Ti 16 GB und die 8-GB-Version nutzen denselben GPU-Chip, das Inferenztempo pro Token ist also ähnlich — rund 20–25 Token pro Sekunde bei 7B-Modellen. Die 16-GB-Version kauft Kapazität und lässt Sie 14B-Modelle ausführen, die nicht in 8 GB passen. Kaufen Sie sie für VRAM, nicht für Tempo.',
          },
          {
            q: 'Sollte ich für lokale LLMs NVIDIA oder AMD kaufen?',
            a: 'Kaufen Sie NVIDIA, außer Sie besitzen bereits AMD-Hardware oder finden einen starken Rabatt. NVIDIA CUDA funktioniert sofort mit Ollama, LM Studio und llama.cpp. AMD-Karten wie die RX 6700 XT und RX 7800 XT bieten VRAM zu konkurrenzfähigen Preisen, aber die ROCm-Einrichtung kostet typischerweise mehrere Stunden unter Linux.',
          },
          {
            q: 'Kann eine einzelne GPU ein 70B-Modell ausführen?',
            a: 'Nur die RTX 5090 32 GB, und nur bei Q4-Quantisierung, wo ein 70B-Modell rund 39–42 GB braucht — also aggressive Quantisierung oder teilweises Auslagern. Eine 24-GB-RTX-4090 fasst ein 70B-Modell bei Q4 nicht allein; die übliche Lösung sind zwei RTX 4090 für kombinierten VRAM, doch zu den Angebotspreisen vom Oktober kostet dieses Paar etwa so viel wie eine einzelne RTX 5090.',
          },
          {
            q: 'Lohnt sich die RTX 5090 gegenüber der RTX 4090 für lokale LLMs?',
            a: 'Nur, wenn Sie gezielt 70B-Modelle auf einer einzelnen Karte ausführen müssen. Die RTX 5090 hat 32 GB VRAM gegenüber den 24 GB der RTX 4090, was der entscheidende Faktor ist. Für 7B–33B-Modelle fasst die RTX 4090 dieselben Modelle; zu den Angebotspreisen vom Oktober kostet die RTX 5090 etwa das 1,8- bis 2,4-Fache einer RTX 4090, zahlen Sie also nur dann dafür, wenn die zusätzlichen 8 GB ein echtes Problem lösen.',
          },
          {
            q: 'Welches Netzteil brauche ich für diese GPUs?',
            a: 'Passen Sie das Netzteil an die Klasse an: Ein 550-W-Gerät genügt für die RTX 3060, 650–750 W für RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super und RTX 5070 Ti, 850 W für die RTX 4090, und 850–1000 W sind für die RTX 5090 nötig, die allein 575 W zieht. Unterdimensionierte Netzteile verursachen Instabilität unter Last.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Den vollständigen VRAM-Bedarf für jede Modellgröße prüfen](/de/local-llms/how-much-vram-local-llm) — die vollständige VRAM-pro-Modellgröße-Methode hinter der Faustformel in diesem Leitfaden.',
          '[15+ GPUs mit gemessenen Lokale-LLM-Benchmarks vergleichen](/de/local-llms/best-gpus-for-local-llms) — der erweiterte GPU-Benchmark-Satz, inklusive älterer und Server-Karten über diese zehn hinaus.',
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
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Meilleure carte graphique pour LLM locaux : guide GPU 2026',
    seoTitle: 'Meilleure carte graphique LLM local 2026 : guide d\'achat',
    intro:
      'La plupart des conseils sur les GPU pour LLM locaux optimisent le mauvais chiffre. La vitesse en tokens par seconde décide de la rapidité de réponse d\'un modèle, mais c\'est la VRAM qui décide si le modèle s\'exécute tout court — et un modèle qui ne tient pas en mémoire est infiniment plus lent qu\'un modèle qui y tient. Ce guide compare dix cartes graphiques grand public sur quatre gammes de prix selon les chiffres qui pèsent réellement sur un achat : capacité VRAM, vitesse d\'inférence, consommation et prix. Une réserve sur les prix : ils ont flambé en 2026 à cause d\'une pénurie de mémoire — un RTX 5090 s\'affiche désormais à environ 2,5 fois son tarif de lancement — donc chaque prix ici est un instantané des prix demandés aux États-Unis ; vérifiez le tarif actuel avant d\'acheter.',
    metaDescription:
      'Quelle carte graphique pour LLM locaux ? Dix GPU comparés : VRAM, vitesse, conso et prix 2026, du moins cher au RTX 5090, avec les besoins GPU par modèle.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-fr.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16 Go, RTX 5060 Ti 16 Go, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — dix cartes graphiques, quatre budgets, une règle : achetez pour la VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**La meilleure carte graphique pour les LLM locaux est celle dont la VRAM correspond à votre modèle, pas la carte la plus rapide. Un RTX 3060 12 Go exécute n\'importe quel modèle 7B, une carte 16 Go (RTX 5060 Ti, RTX 4060 Ti ou RTX 5070 Ti) gère les modèles 14B, un RTX 4090 24 Go gère les modèles 33B, et un RTX 5090 32 Go est la seule carte grand public capable de faire tourner un modèle 70B seule.**',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la meilleure carte graphique pour exécuter des LLM locaux en 2026 ?',
        answer:
          'Achetez d\'abord pour la VRAM, ensuite pour la vitesse. Un RTX 3060 12 Go (env. 320-400 $) est le choix budget et exécute n\'importe quel modèle 7B. Une carte 16 Go est le choix de milieu de gamme pour les modèles 14B — un RTX 5060 Ti 16 Go (env. 620 $ neuf) ou un RTX 4060 Ti 16 Go d\'occasion (env. 380-490 $). Un RTX 4090 24 Go gère les modèles 33B, et un RTX 5090 32 Go (env. 4 900 $) est la seule carte grand public capable de faire tourner un modèle 70B sans configuration bi-GPU. À noter : les prix 2026 sont bien au-dessus des tarifs de lancement.',
        bullets: [
          'Budget : RTX 3060 12 Go, env. 320-400 $ neuf ou d\'occasion — exécute tout modèle 7B à 15-20 tok/s',
          'Milieu de gamme : RTX 5060 Ti 16 Go, env. 620 $ neuf (tarif de lancement 429 $) — modèles 14B avec marge',
          'Enthousiaste : RTX 5090 32 Go, env. 4 900 $ — seule carte grand public pour le 70B sur un seul GPU',
          'Les prix GPU 2026 sont 1,5 à 2,5 fois au-dessus du tarif de lancement — comparez neuf et occasion avant d\'acheter',
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
      { label: 'Milieu de gamme (380-720 $)', anchor: '#mid-tier' },
      { label: 'Haut de gamme (900-1 200 $)', anchor: '#high-tier' },
      { label: 'Gamme enthousiaste (2 080 $+)', anchor: '#enthusiast-tier' },
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
          '**Les prix ont flambé en 2026.** Une pénurie de mémoire a poussé les prix GPU 1,5 à 2,5 fois au-dessus du tarif de lancement — un RTX 5090 s\'affiche à env. 4 900 $, pas à son tarif de lancement de 1 999 $, et les prix ont encore monté entre août et octobre. Traitez chaque prix ici comme un instantané des prix demandés aux États-Unis, et comparez le neuf à l\'occasion avant d\'acheter.',
          '**Choix budget : NVIDIA RTX 3060 12 Go** (env. 320-400 $, neuf et occasion coûtent désormais à peu près autant) — exécute tout modèle 7B à 15-20 tok/s et la plupart des modèles 13B en Q4. Le meilleur rapport qualité-prix pour débuter avec les LLM locaux en 2026.',
          '**Choix milieu de gamme : NVIDIA RTX 5060 Ti 16 Go** (env. 618 $ neuf, env. 649 $ d\'occasion demandé) — 16 Go de VRAM dégagent les modèles 14B avec une marge de contexte, et sa bande passante mémoire de 448 Go/s est bien supérieure à celle du RTX 4060 Ti 16 Go, plus ancien (env. 380-490 $ d\'occasion), désormais surtout un achat d\'occasion.',
          '**Choix haut de gamme : NVIDIA RTX 4080 Super 16 Go** (env. 1 200 $) — la carte 16 Go la plus rapide ici. Le RTX 4070 Ti Super (env. 900 $) et le RTX 5070 Ti (env. 1 008 $) coûtent moins cher et offrent un meilleur rapport qualité-prix si vous acceptez une vitesse légèrement inférieure.',
          '**Choix enthousiaste : NVIDIA RTX 4090 24 Go / RTX 5090 32 Go** — le RTX 4090 (env. 2 083 $+ neuf, env. 2 800 $ d\'occasion) exécute les modèles 33B ; le RTX 5090 (env. 4 900 $) est la seule carte grand public capable de faire tenir un modèle 70B en Q4 sans configuration bi-GPU.',
          '**AMD est viable mais plus exigeant.** Le RX 6700 XT (12 Go) et le RX 7800 XT (16 Go) offrent de la VRAM à des prix compétitifs, mais la configuration ROCm ajoute des heures de travail face à NVIDIA CUDA.',
          '**La consommation évolue avec la gamme.** Un RTX 3060 tire 170 W ; un RTX 5090 tire 575 W et exige une alimentation de 850 à 1000 W. Budgétez l\'alimentation en même temps que la carte.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits en bref',
        items: [
          '**Gamme budget (320-400 $) :** RTX 3060 12 Go ou RX 6700 XT 12 Go — exécute le 7B et la plupart des modèles 13B.',
          '**Milieu de gamme (380-720 $) :** RTX 5060 Ti 16 Go, RTX 4060 Ti 16 Go ou RX 7800 XT 16 Go — exécute confortablement les modèles 14B.',
          '**Haut de gamme (900-1 200 $) :** RTX 4080 Super, RTX 5070 Ti ou RTX 4070 Ti Super, tous en 16 Go — inférence 14B rapide, travail 22B léger.',
          '**Gamme enthousiaste (2 080 $+) :** RTX 4090 24 Go ou RTX 5090 32 Go — modèles 33B, et 70B en Q4 sur le 5090.',
          '**Règle VRAM pour Q4_K_M :** environ 0,6 Go par milliard de paramètres, plus 2-4 Go pour le contexte et l\'outillage.',
          '**Plage de consommation :** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Réalité des prix 2026 :** une pénurie de mémoire a poussé les prix 1,5 à 2,5 fois au-dessus du tarif de lancement ; l\'occasion n\'est plus fiablement moins chère que le neuf, comparez donc les deux.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Choix de la rédaction : RTX 4080 Super 16 Go',
        sponsoredSlot: true,
        content:
          '**Pour les acheteurs qui veulent une carte durable et peuvent dépasser les 1 000 $, le NVIDIA RTX 4080 Super 16 Go est le choix qui équilibre VRAM, vitesse et prix.** Ses 16 Go de VRAM dégagent tout modèle 14B avec une marge de contexte, c\'est la carte 16 Go la plus rapide ici à environ 120 tok/s, et à env. 1 200 $ c\'est le choix 16 Go premium. Elle coûte environ 300 $ de plus que le RTX 4070 Ti Super (env. 900 $) et env. 190 $ de plus que le RTX 5070 Ti (env. 1 008 $) ; si le prix compte plus que les derniers 20-30 % de vitesse, choisissez plutôt l\'une de ces deux cartes. Si votre budget est plafonné sous 700 $, le RTX 5060 Ti 16 Go est le choix valeur. Ne dépensez davantage que si vous avez spécifiquement besoin de modèles 33B ou 70B.',
        callouts: [
          {
            type: 'note',
            text: 'Ce choix de la rédaction reflète uniquement le rapport prix-capacité. PromptQuorum n\'est inscrit à aucun programme d\'affiliation et les liens ci-dessous ne portent aucune balise d\'affiliation — ce sont de simples liens de référence qui ne génèrent aucune commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Vérifier le prix du RTX 4080 Super sur Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Vérifier le prix du RTX 4080 Super sur Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comment les dix GPU se comparent pour les LLM locaux en 2026',
        content:
          'Les chiffres de VRAM et de consommation sont les spécifications constructeur. Les vitesses d\'inférence du RTX 3060, RTX 4080 Super, RTX 4090 et RTX 5090 sont des valeurs 7B Q4 mesurées par les tests matériels de PromptQuorum ; les chiffres du RTX 4060 Ti 16 Go, du RTX 5060 Ti 16 Go, du RX 7800 XT, du RTX 4070 Ti Super et du RTX 5070 Ti sont des estimations à l\'échelle de la gamme. Les prix sont les prix demandés les plus bas observés aux États-Unis en octobre 2026 — la pénurie de mémoire les a poussés 1,5 à 2,5 fois au-dessus du tarif de lancement, vérifiez donc avant d\'acheter.',
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
            'Vitesse (7B Q4)': '15-20 tok/s',
            'Consommation': '170 W',
            'Prix (US, 2026)': '320-400 $ neuf / 320-350 $ occasion',
            'Idéal pour': 'Entrée budget — tout modèle 7B',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 Go',
            'Vitesse (7B Q4)': '10-14 tok/s',
            'Consommation': '230 W',
            'Prix (US, 2026)': 'Variable selon le vendeur — vérifier',
            'Idéal pour': 'VRAM la moins chère, accepte la config AMD',
          },
          {
            'GPU': 'RTX 4060 Ti 16 Go',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~20-25 tok/s',
            'Consommation': '165 W',
            'Prix (US, 2026)': 'env. 550 $+ neuf / 380-490 $ occasion',
            'Idéal pour': 'Milieu de gamme — modèles 14B, faible conso',
          },
          {
            'GPU': 'RTX 5060 Ti 16 Go',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~65-75 tok/s (est.)',
            'Consommation': '180 W',
            'Prix (US, 2026)': '618 $ neuf / 649 $ occasion',
            'Idéal pour': 'Milieu de gamme — 14B, génération actuelle',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~18-24 tok/s (est.)',
            'Consommation': '263 W',
            'Prix (US, 2026)': 'env. 500-720 $ (les suivis divergent)',
            'Idéal pour': '16 Go chez AMD, accepte la config ROCm',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~80-90 tok/s (est.)',
            'Consommation': '285 W',
            'Prix (US, 2026)': '900 $ neuf / 920 $ occasion',
            'Idéal pour': '14B rapide, consommation plus basse',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~100-125 tok/s (est.)',
            'Consommation': '300 W',
            'Prix (US, 2026)': '1 008 $ neuf / 1 050 $ occasion',
            'Idéal pour': '14B rapide, 16 Go à bon rapport qualité-prix',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~120 tok/s',
            'Consommation': '320 W',
            'Prix (US, 2026)': '1 200 $ neuf / 1 149 $ occasion',
            'Idéal pour': 'Choix de la rédaction — la 16 Go la plus rapide',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 Go',
            'Vitesse (7B Q4)': '~150 tok/s',
            'Consommation': '450 W',
            'Prix (US, 2026)': 'env. 2 083 $+ neuf / 2 800 $ occasion',
            'Idéal pour': 'Modèles 33B, bi-GPU pour le 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 Go',
            'Vitesse (7B Q4)': '~160 tok/s',
            'Consommation': '575 W',
            'Prix (US, 2026)': '4 921 $ neuf / 5 880 $ occasion',
            'Idéal pour': '70B en Q4 sur un seul GPU',
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
          { 'Votre situation': 'Je veux la carte la moins chère qui exécute des LLM et j\'accepte le travail de configuration', 'Achetez ceci': 'RX 6700 XT (si vous en trouvez une pas chère)' },
          { 'Votre situation': 'Je veux exécuter des modèles 14B avec un budget énergie serré', 'Achetez ceci': 'RTX 5060 Ti 16 Go (ou RTX 4060 Ti 16 Go d\'occasion)' },
          { 'Votre situation': 'Je veux une carte qui exécute le 14B rapidement et dure plusieurs années', 'Achetez ceci': 'RTX 5070 Ti ou RTX 4070 Ti Super 16 Go' },
          { 'Votre situation': 'Je veux la carte 16 Go la plus rapide et le prix est secondaire', 'Achetez ceci': 'RTX 4080 Super 16 Go' },
          { 'Votre situation': 'J\'ai besoin de modèles 33B ou je prévois une future configuration bi-GPU 70B', 'Achetez ceci': 'RTX 4090 24 Go' },
          { 'Votre situation': 'J\'ai besoin d\'une seule carte qui exécute des modèles 70B en Q4', 'Achetez ceci': 'RTX 5090 32 Go' },
          { 'Votre situation': 'Je ne suis pas sûr et je veux le premier GPU le plus sûr', 'Achetez ceci': 'RTX 3060 12 Go — montez en gamme plus tard si vous la dépassez' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Gamme budget (320-400 $) : RTX 3060 12 Go et RX 6700 XT',
        content:
          '**La gamme budget exécute tout modèle 7B et la plupart des modèles 13B — et pour la plupart des nouveaux utilisateurs de LLM locaux, c\'est toute la capacité dont ils ont besoin.** Le RTX 3060 12 Go est le choix recommandé ; le RX 6700 XT est l\'alternative moins chère si vous acceptez la friction de configuration AMD. Les prix de cette gamme ont grimpé tout au long de 2026, et un RTX 3060 d\'occasion coûte désormais à peu près autant qu\'un neuf — comparez les deux.',
        items: [
          '**RTX 3060 12 Go (env. 320-400 $ neuf, env. 320-350 $ d\'occasion) :** 12 Go de VRAM, 170 W, 15-20 tok/s sur les modèles 7B en Q4. Exécute Mistral Small, Qwen3 8B, DeepSeek-R1 7B et la plupart des modèles 13B. La variante 12 Go est celle à acheter — évitez la variante 6 Go, limitée aux modèles 3B. Le stock neuf est limité et une carte d\'occasion n\'économise plus grand-chose : achetez la moins chère des deux, avec un délai de retour. (DeepSeek a depuis publié DeepSeek-V4 — Flash/Pro — comme nouvelle génération à poids ouverts ; R1/V3 restent utilisables en local.)',
          '**RX 6700 XT (d\'occasion, prix variable selon le vendeur) :** 12 Go de VRAM, 230 W, 10-14 tok/s sur les modèles 7B. Elle n\'est plus vendue neuve et n\'est plus fiablement la façon la moins chère d\'entrer — vérifiez les annonces en direct — et elle est plus lente que le RTX 3060 et dépendante d\'AMD ROCm, ce qui ajoute du temps de configuration.',
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
            text: 'Le RX 6700 XT est la carte la moins chère ici, mais prévoyez 3 à 5 heures pour la configuration ROCm sous Linux. Si l\'économie face à un RTX 3060 est faible, achetez la carte NVIDIA.',
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
            priceRange: '320-700',
            label: 'Vérifier le prix du RX 6700 XT sur Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Milieu de gamme (380-720 $) : RTX 5060 Ti 16 Go, RTX 4060 Ti 16 Go et RX 7800 XT',
        content:
          '**Le milieu de gamme existe pour une raison : 16 Go de VRAM dégagent les modèles 14B que les cartes 12 Go ne peuvent pas faire tenir avec un contexte utilisable.** Si les modèles de classe 14B sont votre cible, c\'est la gamme la moins chère qui les exécute correctement. Le RTX 5060 Ti 16 Go est le choix de la génération actuelle, et un RTX 4060 Ti 16 Go d\'occasion est la façon la moins chère d\'obtenir 16 Go.',
        items: [
          '**RTX 5060 Ti 16 Go (env. 618 $ neuf / env. 649 $ d\'occasion demandé, tarif de lancement 429 $) :** 16 Go de GDDR7, 180 W, bande passante mémoire de 448 Go/s. Il n\'a pas été testé individuellement pour ce guide ; des estimations indépendantes le situent autour de 65-75 tok/s en 7B Q4 — environ 3 fois le RTX 4060 Ti 16 Go plus ancien. Il exécute confortablement les modèles de classe Qwen3 14B. Les prix ont grimpé d\'environ 44 % au-dessus du tarif de lancement en 2026.',
          '**RTX 4060 Ti 16 Go (env. 550 $+ neuf, rare / 380-490 $ d\'occasion) :** 16 Go de VRAM, 165 W, environ 20-25 tok/s sur les modèles 7B. Il utilise la même puce GPU que le RTX 4060 Ti 8 Go, la vitesse par token est donc similaire — la version 16 Go achète de la capacité, pas de la vitesse brute. C\'est désormais surtout un achat d\'occasion.',
          '**RX 7800 XT (env. 500-720 $ neuf, les suivis divergent) :** 16 Go de VRAM, 263 W. Il n\'a pas été testé individuellement pour ce guide ; attendez-vous à une vitesse dans la plage du RTX 4060 Ti, avec la configuration AMD ROCm comme contrepartie.',
          '**Pourquoi acheter cette gamme :** vous voulez des modèles 14B, vous voulez une faible consommation (RTX 4060 Ti) ou vous voulez 16 Go au prix le plus bas possible.',
          '**Pourquoi éviter cette gamme :** si les modèles 7B suffisent, la gamme budget coûte 200 à 300 $ de moins ; si vous voulez une inférence 14B rapide, le haut de gamme est nettement plus rapide.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le RTX 4060 Ti 16 Go est une montée en capacité, pas en vitesse, par rapport à la version 8 Go — achetez-le parce que vous devez faire tenir des modèles 14B, pas parce que vous attendez plus de tokens par seconde. Le RTX 5060 Ti 16 Go est l\'option plus rapide si l\'écart de prix est acceptable.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'Vérifier le prix du RTX 5060 Ti 16 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'Vérifier le prix du RTX 4060 Ti 16 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 Go (env. 1 200 $ neuf / env. 1 149 $ d\'occasion) :** 16 Go de VRAM, 320 W, environ 120 tok/s sur les modèles 7B. Le choix de la rédaction — la carte 16 Go la plus rapide ici, avec une prime d\'environ 190 à 300 $ sur les deux cartes ci-dessous.',
          '**RTX 5070 Ti 16 Go (env. 1 008 $ neuf / env. 1 050 $ d\'occasion demandé, tarif de lancement 749 $) :** 16 Go de GDDR7, 300 W, bande passante mémoire de 896 Go/s. Il n\'a pas été testé individuellement pour ce guide ; les estimations le situent autour de 100-125 tok/s en 7B Q4, et 16 Go font tourner un modèle 24B Q4 avec de la marge.',
          '**RTX 4070 Ti Super 16 Go (env. 900 $ neuf / env. 920 $ d\'occasion) :** 16 Go de VRAM, 285 W, environ 80-90 tok/s (estimation). La carte neuve la moins chère de cette gamme, avec la consommation la plus basse des trois.',
          '**Pourquoi acheter cette gamme :** vous exécutez des modèles 14B en continu et les voulez instantanés, ou vous faites du travail 22B léger et voulez de la marge.',
          '**Pourquoi éviter cette gamme :** si vous avez besoin de modèles 33B ou 70B, aucune carte 16 Go ne les fera tenir — passez à la gamme enthousiaste plutôt que de trop dépenser ici.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Dans cette gamme, le RTX 4080 Super est le plus rapide, le RTX 4070 Ti Super le moins cher en neuf, et le RTX 5070 Ti se place entre les deux pour le prix avec l\'architecture la plus récente. Si vous n\'avez pas besoin des derniers 20-30 % de vitesse, prenez l\'une des deux moins chères.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Vérifier le prix du RTX 4080 Super sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'Vérifier le prix du RTX 5070 Ti sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'Vérifier le prix du RTX 4070 Ti Super sur Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Gamme enthousiaste (2 080 $+) : RTX 4090 et RTX 5090',
        content:
          '**La gamme enthousiaste est la seule qui exécute des modèles au-delà de 22B — et le RTX 5090 32 Go est la seule carte grand public capable de faire tenir un modèle 70B en Q4.** Achetez ici pour la capacité VRAM, pas pour la vitesse ; la vitesse est un effet secondaire. La flambée de 2026 a frappé cette gamme le plus durement, les prix bougent donc d\'une semaine à l\'autre.',
        items: [
          '**RTX 4090 24 Go (env. 2 083 $+ neuf / env. 2 800 $ d\'occasion demandé) :** 24 Go de VRAM, 450 W, environ 150 tok/s sur les modèles 7B et 36 tok/s sur un modèle 70B Q4. Exécute confortablement les modèles 33B. Le stock neuf de RTX 4090 est mince et le plancher de prix du neuf peut être périmé — les annonces montent jusqu\'à env. 3 800 $.',
          '**RTX 5090 32 Go (env. 4 921 $ neuf / env. 5 880 $ d\'occasion demandé, tarif de lancement 1 999 $) :** 32 Go de VRAM GDDR7, 575 W, environ 160 tok/s sur le 7B et 45 tok/s sur le 70B Q4. La capacité de 32 Go est l\'argument central — c\'est la seule carte grand public qui exécute un modèle 70B en Q4 sans second GPU. Les prix demandés ont augmenté d\'environ 64 % entre août et octobre, et les annonces d\'occasion se situent au-dessus du neuf.',
          '**Pourquoi acheter cette gamme :** vous avez besoin de modèles 33B ou 70B, vous faites de l\'inférence par lots, ou vous voulez une carte qui n\'aura pas besoin d\'être remplacée avant des années.',
          '**Pourquoi éviter cette gamme :** pour les modèles 7B-14B, elle est surdimensionnée — le haut de gamme délivre des réponses instantanées sur ces tailles pour moins de la moitié du prix et de la consommation.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le RTX 5090 tire 575 W à lui seul. Associez-le à une alimentation de 850 à 1000 W — une unité de 750 W faiblira en charge. Budgétez la mise à niveau de l\'alimentation dans l\'achat, pas après coup.',
          },
          {
            type: 'note',
            text: 'Avant la flambée de 2026, deux RTX 4090 d\'occasion coûtaient moins cher qu\'un RTX 5090. Aux prix demandés d\'octobre, env. 2 083 à 2 800 $ par RTX 4090, une paire coûte à peu près autant qu\'un seul RTX 5090 (env. 4 921 $), la carte unique est donc la configuration 70B la plus simple.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'Vérifier le prix du RTX 4090 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**Modèles 70B — 39-42 Go en Q4 :** ont besoin d\'un RTX 5090 32 Go poussé à fond, ou d\'une configuration bi-GPU. Une seule carte 24 Go ne peut pas faire tenir un modèle 70B en Q4.',
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
          '**Les prix GPU ont fortement grimpé en 2026 à cause d\'une pénurie de mémoire, poussant les cartes grand public 1,5 à 2,5 fois au-dessus de leur tarif de lancement.** Cela modifie le calcul d\'achat, planifiez donc autour de cela plutôt qu\'autour des tarifs de lancement.',
        items: [
          '**La cause est la mémoire, pas les GPU.** Une pénurie d\'approvisionnement en GDDR et HBM a renchéri toute carte dotée de mémoire rapide — et les GPU aptes aux LLM sont précisément les cartes à forte VRAM les plus touchées.',
          '**Le RTX 5090 est l\'exemple le plus clair :** un tarif de lancement de 1 999 $, mais env. 4 921 $ de plancher de prix demandés en octobre — environ 2,5 fois, et +64 % depuis août.',
          '**Les cartes d\'entrée de gamme ont moins augmenté, mais ont augmenté.** Le RTX 5060 Ti 16 Go s\'affiche env. 44 % au-dessus de son tarif de lancement de 429 $ et le RTX 5070 Ti env. 35 % au-dessus de 749 $ ; la flambée évolue avec la quantité de mémoire rapide qu\'une carte embarque.',
          '**L\'occasion n\'est plus automatiquement moins chère.** Dans les données de prix demandés d\'octobre, les annonces d\'occasion des RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti et RTX 5070 Ti se situaient au niveau du neuf ou au-dessus, et le RTX 3060 12 Go d\'occasion a gagné environ 31 % depuis août. Comparez les deux et privilégiez les vendeurs qui acceptent les retours.',
          '**Ne comptez pas sur un renouvellement.** Les RTX 50 Super de NVIDIA seraient repoussées sans date à cause de la pénurie de mémoire (NVIDIA ne l\'a pas confirmé). **Décision :** si vous pouvez attendre, guettez l\'apaisement de la pénurie ; sinon, prenez la plus petite carte qui correspond à votre modèle visé.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les prix GPU en 2026 sont 1,5 à 2,5 fois au-dessus du tarif de lancement à cause d\'une pénurie de puces mémoire, donc un acheteur de LLM locaux devrait comparer le neuf et l\'occasion et prendre la plus petite carte qui correspond au modèle visé.',
          },
          {
            type: 'plain-terms',
            text: 'Les cartes ne sont pas devenues meilleures — la mémoire qu\'elles contiennent est devenue rare et chère. Tant que cela ne s\'apaise pas, traitez le tarif de lancement comme un chiffre historique, comparez le neuf et l\'occasion et ne payez pas pour plus de VRAM que ce dont votre modèle a réellement besoin.',
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
          '**2. Quel est votre plafond budgétaire absolu ?** Sous env. 400 $ : RTX 3060 12 Go. Sous env. 650 $ : RTX 5060 Ti 16 Go ou RTX 4060 Ti 16 Go d\'occasion. Env. 900-1 200 $ : RTX 4070 Ti Super, RTX 5070 Ti ou RTX 4080 Super. À partir de 2 080 $ : RTX 4090 ou RTX 5090.',
          '**3. NVIDIA ou AMD ?** Choisissez NVIDIA sauf si vous possédez déjà du matériel AMD ou trouvez une forte remise sur le RX 7800 XT — CUDA supprime des heures de configuration ROCm.',
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
          '**Les prix GPU varient selon la région — les prix de ce guide sont des prix demandés aux États-Unis ; en France, comptez 20 % de TVA incluse et des écarts, et la flambée de 2026 a touché chaque marché.** Les liens ci-dessous sont de simples liens de recherche de produits ; ils ne portent aucune balise d\'affiliation et ne génèrent aucune commission.',
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
            priceRange: '320-4900',
            label: 'Parcourir les GPU sur Amazon US',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Parcourir les GPU sur Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Parcourir les GPU sur Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**Ignorer les exigences d\'alimentation.** Un RTX 5090 tire 575 W et a besoin d\'une alimentation de 850 à 1000 W. Une carte qui s\'effondre en charge est pire qu\'une carte plus lente qui tourne de façon stable.',
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
          '[Spécifications NVIDIA GeForce RTX 5090](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — VRAM officielle de 32 Go GDDR7 et consommation de 575 W du RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — prix demandés US les plus bas, neuf et occasion, au 11 octobre 2026 contre le 8 août 2026, utilisés pour chaque prix de ce guide (prix demandés, pas ventes conclues).',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — tarif de lancement contre prix de rue pour les RTX 5090, RTX 5070 Ti et RTX 5060 Ti 16 Go.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — information (non confirmée par NVIDIA) selon laquelle le renouvellement RTX 50 Super est repoussé à cause de l\'approvisionnement en mémoire.',
          '[Spécifications AMD Radeon](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Chiffres officiels de VRAM et de consommation pour les RX 7800 XT et RX 6700 XT.',
          '[Meilleurs GPU pour LLM locaux 2026](/fr/local-llms/best-gpus-for-local-llms) — tests matériels PromptQuorum : vitesses d\'inférence 7B Q4 mesurées pour les RTX 3060, 4080, 4090 et 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Quel est le GPU le moins cher pour l\'inférence de LLM en 2026 ?',
            a: 'Le NVIDIA RTX 3060 12 Go, à environ 320-400 $, est le GPU le moins cher qui exécute bien l\'inférence de LLM locaux. Ses 12 Go de VRAM font tenir tout modèle 7B et la plupart des modèles 13B en quantification Q4, à 15-20 tokens par seconde. Un RX 6700 XT peut être moins cher d\'occasion, mais il est plus lent et exige une configuration AMD ROCm. Les prix du RTX 3060 neuf et d\'occasion sont désormais proches, comparez donc les deux.',
          },
          {
            q: 'Pourquoi les prix GPU sont-ils si élevés en 2026 ?',
            a: 'Une pénurie de puces mémoire a provoqué la flambée des prix GPU de 2026. L\'approvisionnement en GDDR et HBM s\'est resserré, renchérissant chaque carte graphique dotée de mémoire rapide, et les cartes à forte VRAM aptes aux LLM ont été les plus touchées. La plupart des cartes se vendent 1,5 à 2,5 fois au-dessus de leur tarif de lancement — un RTX 5090 lancé à 1 999 $ s\'affiche près de 4 900 $ en octobre. L\'occasion n\'échappe plus à la hausse.',
          },
          {
            q: 'Quels sont les GPU requis pour exécuter un LLM local ?',
            a: 'En quantification Q4_K_M, comptez environ 0,6 Go de VRAM par milliard de paramètres plus 2-4 Go de surcharge. Cela donne 8-9 Go pour les modèles 7B, 11-13 Go pour le 14B, 19-22 Go pour le 33B et 39-42 Go pour le 70B. Une carte 12 Go couvre confortablement le 7B, une carte 16 Go couvre le 14B, et le 70B exige un RTX 5090 32 Go ou une configuration bi-GPU.',
          },
          {
            q: 'Quelle carte graphique est la meilleure pour les LLM locaux ?',
            a: 'La meilleure carte graphique pour les LLM locaux est celle qui a assez de VRAM pour votre modèle visé à votre budget. Pour les modèles 7B, un RTX 3060 12 Go (env. 320-400 $) suffit. Pour les modèles 14B, un RTX 5060 Ti 16 Go (env. 618 $) ou un RTX 4060 Ti 16 Go d\'occasion est le choix de milieu de gamme. Pour les modèles 33B, il faut un RTX 4090 24 Go, et pour le 70B sur une seule carte un RTX 5090 32 Go. Les cartes NVIDIA sont le choix le plus simple car CUDA fonctionne d\'emblée.',
          },
          {
            q: 'Le RTX 4060 Ti 16 Go est-il plus rapide que la version 8 Go ?',
            a: 'Non. Les RTX 4060 Ti 16 Go et 8 Go utilisent la même puce GPU, la vitesse d\'inférence par token est donc similaire — environ 20-25 tokens par seconde sur les modèles 7B. La version 16 Go achète de la capacité, vous permettant d\'exécuter des modèles 14B qui ne tiennent pas en 8 Go. Achetez-la pour la VRAM, pas pour la vitesse.',
          },
          {
            q: 'Faut-il acheter NVIDIA ou AMD pour des LLM locaux ?',
            a: 'Achetez NVIDIA sauf si vous possédez déjà du matériel AMD ou trouvez une forte remise. NVIDIA CUDA fonctionne d\'emblée avec Ollama, LM Studio et llama.cpp. Les cartes AMD comme les RX 6700 XT et RX 7800 XT offrent une VRAM par euro compétitive, mais la configuration ROCm coûte généralement plusieurs heures sous Linux.',
          },
          {
            q: 'Un seul GPU peut-il exécuter un modèle 70B ?',
            a: 'Seul le RTX 5090 32 Go, et uniquement en quantification Q4 où un modèle 70B a besoin d\'environ 39-42 Go — ce qui implique une quantification agressive ou un déchargement partiel. Un RTX 4090 24 Go ne peut pas faire tenir un modèle 70B en Q4 seul ; la solution courante est deux RTX 4090 pour une VRAM combinée, bien qu\'aux prix demandés d\'octobre cette paire coûte à peu près autant qu\'un seul RTX 5090.',
          },
          {
            q: 'Le RTX 5090 vaut-il la peine face au RTX 4090 pour des LLM locaux ?',
            a: 'Uniquement si vous avez spécifiquement besoin d\'exécuter des modèles 70B sur une seule carte. Le RTX 5090 a 32 Go de VRAM contre 24 Go pour le RTX 4090, ce qui est le facteur décisif. Pour les modèles 7B-33B, le RTX 4090 fait tenir les mêmes modèles ; aux prix demandés d\'octobre, le RTX 5090 coûte environ 1,8 à 2,4 fois un RTX 4090, ne le payez donc que si les 8 Go supplémentaires résolvent un vrai problème.',
          },
          {
            q: 'Quelle alimentation me faut-il pour ces GPU ?',
            a: 'Adaptez l\'alimentation à la gamme : une unité de 550 W convient au RTX 3060, 650-750 W aux RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super et RTX 5070 Ti, 850 W au RTX 4090, et 850-1000 W sont nécessaires pour le RTX 5090, qui tire 575 W à lui seul. Des alimentations sous-dimensionnées causent de l\'instabilité en charge.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Articles liés',
        items: [
          '[Vérifiez les besoins complets en VRAM pour chaque taille de modèle](/fr/local-llms/how-much-vram-local-llm) — la méthode complète de VRAM par taille de modèle derrière la formule rapide de ce guide.',
          '[Comparez plus de 15 GPU avec des benchmarks LLM locaux mesurés](/fr/local-llms/best-gpus-for-local-llms) — le jeu de benchmarks GPU élargi, incluant des cartes plus anciennes et serveur au-delà de ces dix.',
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
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'ローカルLLM向けグラフィックカードの選び方：GPU購入ガイド2026',
    seoTitle: 'ローカルLLM向けベストグラフィックカード2026：低予算からRTX 5090',
    intro:
      'ローカルLLM向けのGPUアドバイスの多くは、見るべきでない数値を最適化しています。トークン毎秒の速度はモデルが答える速さを決めますが、VRAMはそもそもモデルが動くかどうかを決めます。そして収まらないモデルは、収まるモデルよりも無限に遅いのです。本ガイドは、購入を実際に左右する数値、つまりVRAM容量・推論速度・消費電力・価格で、4つの価格帯にわたり10枚のコンシューマー向けグラフィックカードを比較します。価格について1点注意があります。GPU価格はメモリ不足により2026年に急騰し、RTX 5090は現在、メーカー希望小売価格の約2.5倍で掲示されています。そのため本記事の価格はすべて米国の掲示価格のスナップショットです。購入前に最新価格を確認してください。',
    metaDescription:
      'ローカルLLMに最適なグラフィックカードは？10枚のGPUをVRAM・速度・消費電力・2026年の価格で比較。最安の1枚からRTX 5090まで、モデルサイズ別のGPU要件も解説。',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ja.webp',
    twitterDescription:
      'RTX 3060、RX 6700 XT、RTX 4060 Ti 16GB、RTX 5060 Ti 16GB、RX 7800 XT、RTX 4070 Ti Super、RTX 5070 Ti、RTX 4080 Super、RTX 4090、RTX 5090 — 10枚のグラフィックカード、4つの予算、ひとつの判断基準：VRAMで選ぶ。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**ローカルLLMにとって最良のグラフィックカードは、最速のカードではなく、VRAMが自分のモデルに合うカードです。RTX 3060 12 GBはあらゆる7Bモデルを動かし、16 GBカード（RTX 5060 Ti、RTX 4060 Ti、RTX 5070 Ti）は14Bモデルを扱い、RTX 4090 24 GBは33Bモデルを扱い、RTX 5090 32 GBは70B作業を1枚でこなせる唯一のコンシューマー向けカードです。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にローカルLLMを動かすのに最適なグラフィックカードはどれですか？',
        answer:
          'まずVRAM、次に速度で選びます。RTX 3060 12 GB（約$320～400）は低予算の選択肢で、あらゆる7Bモデルを動かします。中位帯の選択肢は14Bモデル向けの16 GBカードで、RTX 5060 Ti 16 GB（新品で約$620）か、中古のRTX 4060 Ti 16 GB（約$380～490）です。RTX 4090 24 GBは33Bモデルを動かし、RTX 5090 32 GB（約$4,900）はデュアルGPU構成なしで70B作業をこなせる唯一のコンシューマー向けカードです。なお、2026年の価格はメーカー希望小売価格を大きく上回っています。',
        bullets: [
          '低予算：RTX 3060 12 GB、新品・中古とも約$320～400 — あらゆる7Bモデルを15～20 tok/sで動かす',
          '中位：RTX 5060 Ti 16 GB、新品で約$620（メーカー希望小売価格$429） — 14Bモデルを余裕をもって動かす',
          'エンスージアスト：RTX 5090 32 GB、約$4,900 — 70Bを1枚でこなせる唯一のコンシューマー向けカード',
          '2026年のGPU価格はメーカー希望小売価格の1.5～2.5倍 — 買う前に新品と中古を比べる',
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
      { label: '中位帯（$380～720）', anchor: '#mid-tier' },
      { label: '上位帯（$900～1,200）', anchor: '#high-tier' },
      { label: 'エンスージアスト帯（$2,080以上）', anchor: '#enthusiast-tier' },
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
          '**価格は2026年に急騰しました。** メモリ不足がGPU価格をメーカー希望小売価格の1.5～2.5倍に押し上げました。RTX 5090は発売価格の$1,999ではなく約$4,900で掲示されており、価格は8月から10月にかけてさらに上昇しました。本記事の価格はすべて米国の掲示価格のスナップショットとして扱い、買う前に新品と中古を比べてください。',
          '**低予算の選択：NVIDIA RTX 3060 12 GB**（約$320～400、新品と中古の価格は現在ほぼ同じ） — あらゆる7Bモデルを15～20 tok/sで動かし、ほとんどの13BモデルをQ4で動かします。2026年にローカルLLMを始める入口として最良のコストパフォーマンスです。',
          '**中位の選択：NVIDIA RTX 5060 Ti 16 GB**（新品で約$618、中古の掲示価格は約$649） — 16 GBのVRAMはコンテキストの余裕を残して14Bモデルをこなし、448 GB/sのメモリ帯域は旧世代のRTX 4060 Ti 16 GB（中古で約$380～490）よりはるかに高速です。RTX 4060 Ti 16 GBは今では主に中古市場での購入になります。',
          '**上位の選択：NVIDIA RTX 4080 Super 16 GB**（約$1,200） — ここで最速の16 GBカードです。RTX 4070 Ti Super（約$900）とRTX 5070 Ti（約$1,008）はより安く、速度が少し落ちても構わないならコストパフォーマンスで優れます。',
          '**エンスージアストの選択：NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — RTX 4090（新品で約$2,083以上、中古で約$2,800）は33Bモデルを動かし、RTX 5090（約$4,900）はデュアルGPU構成なしで70BモデルをQ4で収められる唯一のコンシューマー向けカードです。',
          '**AMDは選択肢になりますが手間が増えます。** RX 6700 XT（12 GB）とRX 7800 XT（16 GB）は競争力のある価格でVRAMを提供しますが、ROCmのセットアップはNVIDIA CUDAに比べて数時間の作業が加わります。',
          '**消費電力は価格帯に比例します。** RTX 3060は170 W、RTX 5090は575 Wを消費し、850～1000 Wの電源が必要です。電源はカードと一緒に予算に入れてください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**低予算帯（$320～400）：** RTX 3060 12 GBまたはRX 6700 XT 12 GB — 7Bとほとんどの13Bモデルを動かす。',
          '**中位帯（$380～720）：** RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GBまたはRX 7800 XT 16 GB — 14Bモデルを余裕をもって動かす。',
          '**上位帯（$900～1,200）：** RTX 4080 Super、RTX 5070 TiまたはRTX 4070 Ti Super（いずれも16 GB） — 高速な14B推論、軽めの22B作業。',
          '**エンスージアスト帯（$2,080以上）：** RTX 4090 24 GBまたはRTX 5090 32 GB — 33Bモデル、5090ではQ4で70B。',
          '**Q4_K_MでのVRAMの目安：** パラメータ10億あたり約0.6 GB、加えてコンテキストとツールに2～4 GB。',
          '**消費電力の範囲：** RTX 3060 170 W、RTX 4060 Ti 165 W、RTX 5060 Ti 180 W、RTX 4070 Ti Super 285 W、RTX 5070 Ti 300 W、RTX 4080 Super 320 W、RTX 4090 450 W、RTX 5090 575 W。',
          '**2026年の価格の実情：** メモリ不足が価格をメーカー希望小売価格の1.5～2.5倍に押し上げました。中古カードが新品より確実に安いとは限らなくなったため、両方を比べてください。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '編集部の選択：RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**長く使えるカードを求め、$1,000を超える予算を確保できる購入者には、NVIDIA RTX 4080 Super 16 GBがVRAM・速度・価格のバランスを取った選択肢です。** 16 GBのVRAMはコンテキストの余裕を残してあらゆる14Bモデルをこなし、ここで最速の16 GBカードで約120 tok/s、約$1,200で、16 GBカードの上位モデルにあたります。RTX 4070 Ti Super（約$900）より約$300、RTX 5070 Ti（約$1,008）より約$190高いため、最後の20～30%の速度より価格を重視するなら、そちらを選んでください。予算が$700以下に固定されているなら、RTX 5060 Ti 16 GBがコストパフォーマンスの選択です。33Bや70Bモデルが特に必要な場合に限り、さらに支出してください。',
        callouts: [
          {
            type: 'note',
            text: 'この編集部の選択は価格対性能のみを反映しています。PromptQuorumはいかなるアフィリエイトプログラムにも参加しておらず、以下のリンクにはアフィリエイトタグが付いていません。これらは手数料を生まない単なる参照リンクです。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'AmazonでRTX 4080 Superの価格を確認',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'NeweggでRTX 4080 Superの価格を確認',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026年のローカルLLMで10枚のGPUを比較',
        content:
          'VRAMと消費電力の数値はメーカー仕様です。RTX 3060、RTX 4080 Super、RTX 4090、RTX 5090の推論速度はPromptQuorumのハードウェアテストによる実測7B Q4の値で、RTX 4060 Ti 16 GB、RTX 5060 Ti 16 GB、RX 7800 XT、RTX 4070 Ti Super、RTX 5070 Tiの数値はファミリー単位の推定値です。価格は2026年秋に確認できた米国の最安掲示価格（米ドル）です — メモリ不足がメーカー希望小売価格の1.5～2.5倍に押し上げているため、購入前に再確認してください。',
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
            '速度（7B Q4）': '15～20 tok/s',
            '消費電力': '170 W',
            '価格（米国、2026）': '$320～400（新品）/ $320～350（中古）',
            '最適な用途': '低予算の入口 — あらゆる7Bモデル',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            '速度（7B Q4）': '10～14 tok/s',
            '消費電力': '230 W',
            '価格（米国、2026）': '出品者により異なる — 最新を確認',
            '最適な用途': '安価なVRAM、AMDのセットアップを許容',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約20～25 tok/s',
            '消費電力': '165 W',
            '価格（米国、2026）': '約$550以上（新品）/ $380～490（中古）',
            '最適な用途': '中位帯 — 14Bモデル、低消費電力',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約65～75 tok/s（推定）',
            '消費電力': '180 W',
            '価格（米国、2026）': '$618（新品）/ $649（中古）',
            '最適な用途': '中位帯 — 14B、最新世代',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約18～24 tok/s（推定）',
            '消費電力': '263 W',
            '価格（米国、2026）': '約$500～720（トラッカーにより差）',
            '最適な用途': 'AMDで16 GB、ROCmのセットアップを許容',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約80～90 tok/s（推定）',
            '消費電力': '285 W',
            '価格（米国、2026）': '$900（新品）/ $920（中古）',
            '最適な用途': '高速な14B、低めの消費電力',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約100～125 tok/s（推定）',
            '消費電力': '300 W',
            '価格（米国、2026）': '$1,008（新品）/ $1,050（中古）',
            '最適な用途': '高速な14B、お得な16 GB',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約120 tok/s',
            '消費電力': '320 W',
            '価格（米国、2026）': '$1,200（新品）/ $1,149（中古）',
            '最適な用途': '編集部の選択 — 最速の16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            '速度（7B Q4）': '約150 tok/s',
            '消費電力': '450 W',
            '価格（米国、2026）': '約$2,083以上（新品）/ $2,800（中古）',
            '最適な用途': '33Bモデル、70B用のデュアルGPU',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            '速度（7B Q4）': '約160 tok/s',
            '消費電力': '575 W',
            '価格（米国、2026）': '$4,921（新品）/ $5,880（中古）',
            '最適な用途': '1枚のGPUでQ4の70B',
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
          { 'あなたの状況': 'LLMを動かせる最も安いカードがほしく、セットアップ作業を許容する', 'これを買う': 'RX 6700 XT（安く見つかった場合）' },
          { 'あなたの状況': '電力予算が厳しい中で14Bモデルを動かしたい', 'これを買う': 'RTX 5060 Ti 16 GB（または中古のRTX 4060 Ti 16 GB）' },
          { 'あなたの状況': '14Bを高速に動かし数年もつカードがほしい', 'これを買う': 'RTX 5070 TiまたはRTX 4070 Ti Super 16 GB' },
          { 'あなたの状況': '最速の16 GBカードがほしく価格は二の次', 'これを買う': 'RTX 4080 Super 16 GB' },
          { 'あなたの状況': '33Bモデルが必要、または将来のデュアルGPU 70B構成を計画している', 'これを買う': 'RTX 4090 24 GB' },
          { 'あなたの状況': '70BモデルをQ4で動かす1枚のカードが必要', 'これを買う': 'RTX 5090 32 GB' },
          { 'あなたの状況': '迷っていて最も無難な最初のGPUがほしい', 'これを買う': 'RTX 3060 12 GB — 物足りなくなったら後で買い替える' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '低予算帯（$320～400）：RTX 3060 12 GBとRX 6700 XT',
        content:
          '**低予算帯はあらゆる7Bモデルとほとんどの13Bモデルを動かします。そして初めてローカルLLMを使う多くの人にとって、それが必要なすべての能力です。** RTX 3060 12 GBが推奨の選択肢で、AMDのセットアップの手間を許容できるならRX 6700 XTがより安い代替です。この帯の価格は2026年を通じて上昇し、中古のRTX 3060は今や新品とほぼ同じ価格です — 両方を比べてください。',
        items: [
          '**RTX 3060 12 GB（新品で約$320～400、中古で約$320～350）：** 12 GB VRAM、170 W、7BモデルをQ4で15～20 tok/s。Mistral Small、Qwen3 8B、DeepSeek-R1 7B、ほとんどの13Bモデルを動かします。買うべきは12 GB版です — 3Bモデルに限られる6 GB版は避けてください。新品在庫は限られ、中古にしてもあまり安くならないため、返品期間のある安いほうを買ってください。 (DeepSeekはその後、オープンウェイトの新世代としてDeepSeek-V4—Flash/Pro—をリリースしました。R1/V3は引き続きローカルで利用可能です。)',
          '**RX 6700 XT（中古、価格は出品者により異なる）：** 12 GB VRAM、230 W、7Bモデルで10～14 tok/s。新品は生産終了で、もはや最も安い入口とは限りません — 最新の出品を確認してください。RTX 3060より遅く、AMD ROCmに依存するためセットアップ時間が加わります。',
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
            text: 'RX 6700 XTはここで最も安いカードですが、LinuxでのROCmセットアップに3～5時間を見込んでください。RTX 3060に対して節約できる金額が小さいなら、NVIDIAのカードを買ってください。',
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
            priceRange: '320-700',
            label: 'AmazonでRX 6700 XTの価格を確認',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '中位帯（$380～720）：RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GB、RX 7800 XT',
        content:
          '**中位帯はひとつの理由のために存在します。16 GBのVRAMは、12 GBカードでは実用的なコンテキストとともに収められない14Bモデルをこなします。** 14Bクラスのモデルが対象なら、これがそれらを適切に動かす最も安い帯です。RTX 5060 Ti 16 GBは最新世代の選択肢で、中古のRTX 4060 Ti 16 GBは16 GBを手に入れる最も安い方法です。',
        items: [
          '**RTX 5060 Ti 16 GB（新品で約$618 / 中古の掲示価格で約$649、メーカー希望小売価格$429）：** 16 GB GDDR7、180 W、メモリ帯域448 GB/s。本ガイドでは個別に計測していません。第三者の推定では7B Q4で約65～75 tok/sで、旧世代のRTX 4060 Ti 16 GBのおよそ3倍です。Qwen3 14Bクラスのモデルを余裕をもって動かします。価格は2026年にメーカー希望小売価格を約44%上回りました。',
          '**RTX 4060 Ti 16 GB（新品で約$550以上、在庫わずか / 中古で$380～490）：** 16 GB VRAM、165 W、7Bモデルで約20～25 tok/s。8 GB版RTX 4060 Tiと同じGPUダイを使うため、トークンあたりの速度は同等です — 16 GB版は速度ではなく容量を買うものです。今では主に中古市場での購入になります。',
          '**RX 7800 XT（新品で約$500～720、トラッカーにより差）：** 16 GB VRAM、263 W。本ガイドでは個別に計測していません。速度はRTX 4060 Tiの範囲を見込み、AMD ROCmのセットアップが引き換えになります。',
          '**この帯を買う理由：** 14Bモデルがほしい、低消費電力がほしい（RTX 4060 Ti）、または可能な限り安く16 GBがほしい。',
          '**この帯を避ける理由：** 7Bモデルで足りるなら低予算帯が$200～300安く、高速な14B推論がほしいなら上位帯のほうが明確に速いです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GBは8 GB版に対する容量のアップグレードであり、速度のアップグレードではありません — トークン毎秒の増加を期待してではなく、14Bモデルを収める必要があるから買ってください。価格差を許容できるなら、RTX 5060 Ti 16 GBのほうが高速な選択肢です。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'AmazonでRTX 5060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'AmazonでRTX 4060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 GB（新品で約$1,200 / 中古で約$1,149）：** 16 GB VRAM、320 W、7Bモデルで約120 tok/s。編集部の選択 — ここで最速の16 GBカードで、下の2枚に対して約$190～300の上乗せです。',
          '**RTX 5070 Ti 16 GB（新品で約$1,008 / 中古の掲示価格で約$1,050、メーカー希望小売価格$749）：** 16 GB GDDR7、300 W、メモリ帯域896 GB/s。本ガイドでは個別に計測していません。推定では7B Q4で約100～125 tok/sで、16 GBなら24B Q4モデルを余裕をもって動かせます。',
          '**RTX 4070 Ti Super 16 GB（新品で約$900 / 中古で約$920）：** 16 GB VRAM、285 W、約80～90 tok/s（推定）。この帯で最も安い新品カードで、3枚の中で消費電力が最も低いです。',
          '**この帯を買う理由：** 14Bモデルを常に動かし瞬時の応答がほしい、または軽めの22B作業をして余裕がほしい。',
          '**この帯を避ける理由：** 33Bや70Bモデルが必要なら、どの16 GBカードもそれらを収められません — ここで使いすぎる代わりにエンスージアスト帯へ移ってください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'この帯では、RTX 4080 Superが最速、RTX 4070 Ti Superが新品で最安で、RTX 5070 Tiは価格がその中間にあり最新アーキテクチャです。最後の20～30%の速度が不要なら、安い2枚のどちらかを選んでください。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'AmazonでRTX 4080 Superの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'AmazonでRTX 5070 Tiの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'AmazonでRTX 4070 Ti Superの価格を確認',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'エンスージアスト帯（$2,080以上）：RTX 4090とRTX 5090',
        content:
          '**エンスージアスト帯は22Bを超えるモデルを動かせる唯一の帯であり、RTX 5090 32 GBは70BモデルをQ4で収められる唯一のコンシューマー向けカードです。** ここでは速度ではなくVRAM容量のために買ってください。速度は副産物です。2026年の急騰はこの帯を最も激しく直撃したため、価格は週ごとに動きます。',
        items: [
          '**RTX 4090 24 GB（新品で約$2,083以上 / 中古の掲示価格で約$2,800）：** 24 GB VRAM、450 W、7Bモデルで約150 tok/s、70B Q4モデルで36 tok/s。33Bモデルを余裕をもって動かします。新品のRTX 4090は在庫が薄く、新品の最低価格は古い可能性があります — 出品は最大約$3,800まで幅があります。',
          '**RTX 5090 32 GB（新品で約$4,921 / 中古の掲示価格で約$5,880、メーカー希望小売価格$1,999）：** 32 GB GDDR7 VRAM、575 W、7Bで約160 tok/s、70B Q4で45 tok/s。32 GBの容量が目玉です — 2枚目のGPUなしで70BモデルをQ4で動かせる唯一のコンシューマー向けカードです。掲示価格は8月から10月にかけて約64%上昇し、中古の出品は新品を上回っています。',
          '**この帯を買う理由：** 33Bや70Bモデルが必要、バッチ推論を行う、または何年も買い替え不要のカードがほしい。',
          '**この帯を避ける理由：** 7B～14Bモデルには過剰です — 上位帯はそれらのサイズで、価格と消費電力の半分以下で瞬時の応答を提供します。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090は単体で575 Wを消費します。850～1000 Wの電源と組み合わせてください — 750 Wのユニットは負荷時にへたります。電源のアップグレードは後回しではなく購入に組み込んで予算化してください。',
          },
          {
            type: 'note',
            text: '2026年の急騰前は、中古RTX 4090を2枚買うほうがRTX 5090 1枚より安価でした。10月の掲示価格ではRTX 4090 1枚あたり約$2,083～2,800のため、2枚揃えるとRTX 5090 1枚（約$4,921）とほぼ同額になり、1枚のカードのほうが70B構成として簡単です。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'AmazonでRTX 4090の価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**70Bモデル — Q4で39～42 GB：** RTX 5090 32 GBを限界まで使うか、デュアルGPU構成が必要です。1枚の24 GBカードでは70BモデルをQ4で収められません。',
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
          '**GPU価格はメモリ不足のため2026年に急騰し、コンシューマー向けカードを当初のメーカー希望小売価格の1.5～2.5倍に押し上げました。** これは購入の計算を変えるため、発売価格ではなくこれを前提に計画してください。',
        items: [
          '**原因はGPUではなくメモリです。** GDDRとHBMの供給不足が、高速メモリを積むあらゆるカードのコストを上げました — そしてLLM対応GPUは、まさに最も影響を受ける高VRAMカードです。',
          '**RTX 5090が最も明確な例です：** 発売価格は$1,999でしたが、10月の掲示価格の最低ラインは約$4,921 — 約2.5倍で、8月から64%上昇しています。',
          '**下位のカードは上昇が小さいものの、それでも上がりました。** RTX 5060 Ti 16 GBはメーカー希望小売価格$429を約44%、RTX 5070 Tiは$749を約35%上回って掲示されています。急騰はカードが積む高速メモリの量に比例します。',
          '**中古が自動的に安いとは限らなくなりました。** 10月の掲示価格データでは、中古のRTX 5090、RTX 4090、RTX 4070 Ti Super、RTX 5060 Ti、RTX 5070 Tiの出品は新品と同等かそれ以上で、中古のRTX 3060 12 GBは8月から約31%上昇しました。両方を比べ、返品に対応する販売者を優先してください。',
          '**更新版には期待しないでください。** NVIDIAのRTX 50 Superカードはメモリ不足のため無期限に延期されたと報じられています（NVIDIAは確認していません）。**判断：** 待てるなら不足の緩和を見守り、待てないなら対象モデルに合う最小のカードを買ってください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年のGPU価格はメモリチップ不足のためメーカー希望小売価格の1.5～2.5倍であり、ローカルLLMの購入者は新品と中古の価格を比べ、対象モデルに合う最小のカードを買うべきです。',
          },
          {
            type: 'plain-terms',
            text: 'カードが良くなったわけではありません — その中のメモリが希少で高価になったのです。これが緩和するまで、メーカー希望小売価格は過去の数字として扱い、新品と中古を比べ、モデルが実際に必要とする以上のVRAMにお金を払わないでください。',
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
          '**2. 動かせない予算の上限はいくらですか？** 約$400未満：RTX 3060 12 GB。約$650未満：RTX 5060 Ti 16 GBまたは中古のRTX 4060 Ti 16 GB。約$900～1,200：RTX 4070 Ti Super、RTX 5070 TiまたはRTX 4080 Super。$2,080以上：RTX 4090またはRTX 5090。',
          '**3. NVIDIAかAMDか？** すでにAMDのハードウェアを持っているか、RX 7800 XTの大幅な値引きを見つけた場合を除き、NVIDIAを選んでください — CUDAは数時間のROCmセットアップを省きます。',
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
          '**GPU価格は地域によって異なります — 本ガイドの価格は米国の掲示価格（米ドル）であり、日本の価格は為替や消費税の影響で異なります。2026年の急騰はあらゆる市場を直撃しました。** 以下のリンクは単なる製品検索リンクで、アフィリエイトタグは付いておらず、手数料を生みません。',
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
            priceRange: '320-4900',
            label: 'Amazon USでGPUを探す',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Amazon.deでGPUを探す',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Amazon.frでGPUを探す',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**電源要件を無視する。** RTX 5090は575 Wを消費し、850～1000 Wの電源が必要です。負荷時に電圧が落ちるカードは、安定して動く遅いカードより劣ります。',
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
          '[NVIDIA GeForce RTX 5090 仕様](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — RTX 5090の公式32 GB GDDR7 VRAMと575 W消費電力。',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — 2026年10月11日と8月8日時点の米国の新品・中古の最低掲示価格。本ガイドのすべての価格に使用（実際の成約価格ではなく掲示価格）。',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — RTX 5090、RTX 5070 Ti、RTX 5060 Ti 16 GBのメーカー希望小売価格と実売価格の比較。',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — RTX 50 Superの更新版がメモリ供給のため延期されたとの報道（NVIDIAは未確認）。',
          '[AMD Radeon 仕様](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XTとRX 6700 XTの公式VRAMと消費電力。',
          '[ローカルLLM向けベストGPU 2026](/ja/local-llms/best-gpus-for-local-llms) — PromptQuorumのハードウェアテスト：RTX 3060、4080、4090、5090の実測7B Q4推論速度。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '2026年にLLM推論で最も安いGPUは何ですか？',
            a: 'NVIDIA RTX 3060 12 GB（約$320～400）が、ローカルLLM推論をうまく動かせる最も安いGPUです。12 GBのVRAMはあらゆる7Bモデルとほとんどの13BモデルをQ4量子化で、15～20トークン毎秒で収めます。RX 6700 XTは中古市場でより安いことがありますが、より遅く、AMD ROCmのセットアップが必要です。RTX 3060の新品と中古の価格は現在近いため、両方を比べてください。',
          },
          {
            q: 'なぜ2026年のGPU価格はこれほど高いのですか？',
            a: 'メモリチップ不足が2026年のGPU価格急騰を引き起こしました。GDDRとHBMの供給が逼迫し、高速メモリを積むあらゆるグラフィックカードのコストが上がり、高VRAMでLLM対応のカードが最も激しく直撃されました。ほとんどのカードは当初のメーカー希望小売価格の1.5～2.5倍で売られています — RTX 5090は$1,999で発売されましたが、10月には約$4,900で掲示されています。中古カードももはや値上がりを免れていません。',
          },
          {
            q: 'ローカルLLMを動かすためのGPU要件は何ですか？',
            a: 'Q4_K_M量子化では、パラメータ10億あたり約0.6 GBのVRAMに2～4 GBのオーバーヘッドを加えて見積もってください。これは7Bモデルで8～9 GB、14Bで11～13 GB、33Bで19～22 GB、70Bで39～42 GBを意味します。12 GBカードは7Bを余裕でカバーし、16 GBカードは14Bをカバーし、70BにはRTX 5090 32 GBかデュアルGPU構成が必要です。',
          },
          {
            q: 'ローカルLLMに最適なグラフィックカードはどれですか？',
            a: 'ローカルLLMに最適なグラフィックカードは、予算の範囲で対象モデルに十分なVRAMを持つカードです。7Bモデルには RTX 3060 12 GB（約$320～400）で足ります。14Bモデルの中位帯の選択肢は、RTX 5060 Ti 16 GB（約$618）か中古のRTX 4060 Ti 16 GBです。33BモデルにはRTX 4090 24 GBが、1枚で70BならRTX 5090 32 GBが必要です。CUDAがそのまま動くため、NVIDIAカードが最も手間の少ない選択です。',
          },
          {
            q: 'RTX 4060 Ti 16 GBは8 GB版より速いですか？',
            a: 'いいえ。RTX 4060 Ti 16 GBと8 GB版は同じGPUダイを使うため、トークンあたりの推論速度は同等です — 7Bモデルで約20～25トークン毎秒です。16 GB版は容量を買うもので、8 GBに収まらない14Bモデルを動かせるようにします。速度ではなくVRAMのために買ってください。',
          },
          {
            q: 'ローカルLLMにはNVIDIAとAMDのどちらを買うべきですか？',
            a: 'すでにAMDのハードウェアを持っているか、大幅な値引きを見つけた場合を除き、NVIDIAを買ってください。NVIDIA CUDAはOllama、LM Studio、llama.cppですぐに動きます。RX 6700 XTやRX 7800 XTといったAMDカードは競争力のある価格でVRAMを提供しますが、ROCmのセットアップはLinuxで通常数時間かかります。',
          },
          {
            q: '1枚のGPUで70Bモデルを動かせますか？',
            a: 'RTX 5090 32 GBのみで、しかも70Bモデルが約39～42 GBを必要とするQ4量子化でのみです — つまり積極的な量子化または部分的なオフロードを意味します。24 GBのRTX 4090は70BモデルをQ4で単独では収められません。一般的な解決策はVRAMを合算するためのRTX 4090 2枚ですが、10月の掲示価格ではこのペアはRTX 5090 1枚とほぼ同額です。',
          },
          {
            q: 'ローカルLLMでRTX 5090はRTX 4090に対して価値がありますか？',
            a: '70Bモデルを1枚のカードで動かす必要が特にある場合に限ります。RTX 5090はRTX 4090の24 GBに対して32 GBのVRAMを持ち、これが決め手です。7B～33BモデルではRTX 4090も同じモデルを収めます。10月の掲示価格ではRTX 5090はRTX 4090の約1.8～2.4倍の価格のため、追加の8 GBが実際の問題を解決する場合にのみ支払ってください。',
          },
          {
            q: 'これらのGPUにはどの電源が必要ですか？',
            a: '電源を価格帯に合わせてください：550 WのユニットはRTX 3060に、650～750 WはRTX 4060 Ti、RTX 5060 Ti、RTX 4070 Ti Super、RTX 5070 Tiに、850 WはRTX 4090に適し、単体で575 Wを消費するRTX 5090には850～1000 Wが必要です。容量不足の電源は負荷時に不安定を引き起こします。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[各モデルサイズの完全なVRAM要件を確認する](/ja/local-llms/how-much-vram-local-llm) — 本ガイドの簡易式の背後にある、モデルサイズ別VRAMの完全な手法。',
          '[実測したローカルLLMベンチマークで15枚以上のGPUを比較する](/ja/local-llms/best-gpus-for-local-llms) — この10枚を超え、より古いカードやサーバーカードも含む広範なGPUベンチマークセット。',
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
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: '本地大模型显卡推荐：显卡选购指南 2026',
    seoTitle: '本地大模型显卡推荐 2026：从入门到 RTX 5090',
    intro:
      '大多数关于本地大模型显卡的建议都在优化错误的数字。每秒 token 的速度决定模型回答的快慢，但显存决定模型能否运行——一个装不下的模型，比一个装得下的模型慢无数倍。本指南在四个价位档次中比较十款消费级显卡，依据真正决定购买的数字：显存容量、推理速度、功耗和价格。关于价格有一点提醒：2026 年因内存短缺，显卡价格大涨——RTX 5090 目前的标价约为建议零售价的 2.5 倍——因此本文每个价格都是美国挂牌价的快照，购买前请确认当前价格。',
    metaDescription:
      '本地大模型用什么显卡？十款显卡按显存、速度、功耗和 2026 年价格对比：从入门款到 RTX 5090，并列出各模型规模的显卡要求。',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-zh.webp',
    twitterDescription:
      'RTX 3060、RX 6700 XT、RTX 4060 Ti 16GB、RTX 5060 Ti 16GB、RX 7800 XT、RTX 4070 Ti Super、RTX 5070 Ti、RTX 4080 Super、RTX 4090、RTX 5090——十款显卡，四个预算，一条原则：按显存买。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**本地大模型（开源大模型）最佳显卡是显存与你的模型相匹配的那一款，而不是最快的那一款。RTX 3060 12 GB 能运行任何 7B 模型，16 GB 显卡（RTX 5060 Ti、RTX 4060 Ti 或 RTX 5070 Ti）能处理 14B 模型，RTX 4090 24 GB 能处理 33B 模型，RTX 5090 32 GB 是唯一能单卡运行 70B 工作的消费级显卡。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年运行本地大模型最好的显卡是哪款？',
        answer:
          '先按显存买，再看速度。RTX 3060 12 GB（约 $320-400）是预算之选，能运行任何 7B 模型。16 GB 显卡是面向 14B 模型的中端之选——全新 RTX 5060 Ti 16 GB（约 $620）或二手 RTX 4060 Ti 16 GB（约 $380-490）。RTX 4090 24 GB 能运行 33B 模型，RTX 5090 32 GB（约 $4,900）是唯一无需双卡构建就能处理 70B 工作的消费级显卡。注意 2026 年价格远高于建议零售价。',
        bullets: [
          '预算：RTX 3060 12 GB，全新或二手约 $320-400，以 15-20 tok/s 运行任何 7B 模型',
          '中端：RTX 5060 Ti 16 GB，全新约 $620（建议零售价 $429），运行 14B 模型有余量',
          '发烧级：RTX 5090 32 GB，约 $4,900，唯一能单卡运行 70B 的消费级显卡',
          '2026 年显卡价格为建议零售价的 1.5 到 2.5 倍——购买前先比较全新和二手',
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
      { label: '中端档（$380-720）', anchor: '#mid-tier' },
      { label: '高端档（$900-1,200）', anchor: '#high-tier' },
      { label: '发烧档（$2,080 起）', anchor: '#enthusiast-tier' },
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
          '**2026 年价格大涨。** 内存短缺把显卡价格推高到建议零售价的 1.5 到 2.5 倍——RTX 5090 标价约 $4,900，而非其 $1,999 的发布价，且 8 月到 10 月间价格再度上涨。把本文每个价格当作美国挂牌价的快照，购买前先比较全新和二手。',
          '**预算之选：NVIDIA RTX 3060 12 GB**（约 $320-400，全新和二手如今价格相近）——以 15-20 tok/s 运行任何 7B 模型，并以 Q4 运行大多数 13B 模型。2026 年入门本地大模型的最佳性价比。',
          '**中端之选：NVIDIA RTX 5060 Ti 16 GB**（全新约 $618，二手挂牌约 $649）——16 GB 显存可容纳 14B 模型并留有上下文余量，其 448 GB/s 的显存带宽远高于旧款 RTX 4060 Ti 16 GB（二手约 $380-490），后者如今主要是二手市场的选择。',
          '**高端之选：NVIDIA RTX 4080 Super 16 GB**（约 $1,200）——这里最快的 16 GB 显卡。RTX 4070 Ti Super（约 $900）和 RTX 5070 Ti（约 $1,008）更便宜，如果能接受稍低的速度，它们性价比更好。',
          '**发烧之选：NVIDIA RTX 4090 24 GB / RTX 5090 32 GB**——RTX 4090（全新约 $2,083 起，二手约 $2,800）能运行 33B 模型；RTX 5090（约 $4,900）是唯一无需双卡构建就能以 Q4 容纳 70B 模型的消费级显卡。',
          '**AMD 可行但门槛更高。** RX 6700 XT（12 GB）和 RX 7800 XT（16 GB）价格有竞争力，但 ROCm 配置比 NVIDIA CUDA 多花数小时。',
          '**功耗随档次上升。** RTX 3060 功耗 170 W；RTX 5090 功耗 575 W，需要 850-1000 W 电源。把电源和显卡一起纳入预算。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览事实',
        items: [
          '**预算档（$320-400）：** RTX 3060 12 GB 或 RX 6700 XT 12 GB——运行 7B 和大多数 13B 模型。',
          '**中端档（$380-720）：** RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GB 或 RX 7800 XT 16 GB——轻松运行 14B 模型。',
          '**高端档（$900-1,200）：** RTX 4080 Super、RTX 5070 Ti 或 RTX 4070 Ti Super，均为 16 GB——快速 14B 推理，轻量 22B 工作。',
          '**发烧档（$2,080 起）：** RTX 4090 24 GB 或 RTX 5090 32 GB——33B 模型，5090 上可 Q4 运行 70B。',
          '**Q4_K_M 下的显存经验法则：** 每十亿参数约 0.6 GB，外加 2-4 GB 用于上下文和工具。',
          '**功耗范围：** RTX 3060 170 W、RTX 4060 Ti 165 W、RTX 5060 Ti 180 W、RTX 4070 Ti Super 285 W、RTX 5070 Ti 300 W、RTX 4080 Super 320 W、RTX 4090 450 W、RTX 5090 575 W。',
          '**2026 年价格实况：** 内存短缺把价格推高到建议零售价的 1.5 到 2.5 倍；二手卡已不一定比全新便宜，请两者都比较。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '编辑推荐：RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**对于想要一款耐用、且预算能超过 $1,000 的买家，NVIDIA RTX 4080 Super 16 GB 是兼顾显存、速度和价格的选择。** 它的 16 GB 显存能容纳每一款 14B 模型并留有上下文余量，是这里最快的 16 GB 显卡，约 120 tok/s，售价约 $1,200，是高端的 16 GB 之选。它比 RTX 4070 Ti Super（约 $900）贵约 $300，比 RTX 5070 Ti（约 $1,008）贵约 $190，因此如果价格比最后 20-30% 的速度更重要，请选那两款。如果你的预算固定在 $700 以下，RTX 5060 Ti 16 GB 是性价比之选。只有在确实需要 33B 或 70B 模型时才花更多钱。',
        callouts: [
          {
            type: 'note',
            text: '本编辑推荐仅反映价格与能力之比。PromptQuorum 未加入任何联盟营销计划，下方链接不带任何联盟标签——它们只是不产生佣金的普通参考链接。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: '在 Amazon 查看 RTX 4080 Super 价格',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: '在 Newegg 查看 RTX 4080 Super 价格',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026 年十款显卡运行本地大模型的对比',
        content:
          '显存和功耗数字为厂商规格。RTX 3060、RTX 4080 Super、RTX 4090、RTX 5090 的推理速度为 PromptQuorum 硬件测试实测的 7B Q4 数值；RTX 4060 Ti 16 GB、RTX 5060 Ti 16 GB、RX 7800 XT、RTX 4070 Ti Super、RTX 5070 Ti 的数字为系列级别估算。价格为 2026 年 10 月观察到的美国最低挂牌价——内存短缺把价格推高到建议零售价的 1.5 到 2.5 倍，购买前请重新核对。',
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
            '速度（7B Q4）': '15-20 tok/s',
            '功耗': '170 W',
            '价格（美国，2026）': '全新 $320-400 / 二手 $320-350',
            '最适合': '预算入门——任何 7B 模型',
          },
          {
            '显卡': 'RX 6700 XT',
            '显存': '12 GB',
            '速度（7B Q4）': '10-14 tok/s',
            '功耗': '230 W',
            '价格（美国，2026）': '因卖家而异——请查实时价',
            '最适合': '最便宜的显存，接受 AMD 配置',
          },
          {
            '显卡': 'RTX 4060 Ti 16 GB',
            '显存': '16 GB',
            '速度（7B Q4）': '约 20-25 tok/s',
            '功耗': '165 W',
            '价格（美国，2026）': '全新约 $550 起 / 二手 $380-490',
            '最适合': '中端档——14B 模型，低功耗',
          },
          {
            '显卡': 'RTX 5060 Ti 16 GB',
            '显存': '16 GB',
            '速度（7B Q4）': '约 65-75 tok/s（估算）',
            '功耗': '180 W',
            '价格（美国，2026）': '全新 $618 / 二手 $649',
            '最适合': '中端档——14B，当代架构',
          },
          {
            '显卡': 'RX 7800 XT',
            '显存': '16 GB',
            '速度（7B Q4）': '约 18-24 tok/s（估算）',
            '功耗': '263 W',
            '价格（美国，2026）': '约 $500-720（各追踪站不一）',
            '最适合': 'AMD 平台的 16 GB，接受 ROCm 配置',
          },
          {
            '显卡': 'RTX 4070 Ti Super',
            '显存': '16 GB',
            '速度（7B Q4）': '约 80-90 tok/s（估算）',
            '功耗': '285 W',
            '价格（美国，2026）': '全新 $900 / 二手 $920',
            '最适合': '快速 14B，较低功耗',
          },
          {
            '显卡': 'RTX 5070 Ti',
            '显存': '16 GB',
            '速度（7B Q4）': '约 100-125 tok/s（估算）',
            '功耗': '300 W',
            '价格（美国，2026）': '全新 $1,008 / 二手 $1,050',
            '最适合': '快速 14B，高性价比 16 GB',
          },
          {
            '显卡': 'RTX 4080 Super',
            '显存': '16 GB',
            '速度（7B Q4）': '约 120 tok/s',
            '功耗': '320 W',
            '价格（美国，2026）': '全新 $1,200 / 二手 $1,149',
            '最适合': '编辑推荐——最快的 16 GB',
          },
          {
            '显卡': 'RTX 4090',
            '显存': '24 GB',
            '速度（7B Q4）': '约 150 tok/s',
            '功耗': '450 W',
            '价格（美国，2026）': '全新约 $2,083 起 / 二手 $2,800',
            '最适合': '33B 模型，双卡 70B',
          },
          {
            '显卡': 'RTX 5090',
            '显存': '32 GB',
            '速度（7B Q4）': '约 160 tok/s',
            '功耗': '575 W',
            '价格（美国，2026）': '全新 $4,921 / 二手 $5,880',
            '最适合': '单卡 Q4 运行 70B',
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
          { '你的情况': '我想要能运行大模型的最便宜显卡，并接受配置工作', '买这款': 'RX 6700 XT（如果能找到便宜的）' },
          { '你的情况': '我想在功耗预算紧张的情况下运行 14B 模型', '买这款': 'RTX 5060 Ti 16 GB（或二手 RTX 4060 Ti 16 GB）' },
          { '你的情况': '我想要一款能快速运行 14B 并用上数年的显卡', '买这款': 'RTX 5070 Ti 或 RTX 4070 Ti Super 16 GB' },
          { '你的情况': '我想要最快的 16 GB 显卡，价格其次', '买这款': 'RTX 4080 Super 16 GB' },
          { '你的情况': '我需要 33B 模型，或计划将来做双卡 70B 构建', '买这款': 'RTX 4090 24 GB' },
          { '你的情况': '我需要一张能以 Q4 运行 70B 模型的单卡', '买这款': 'RTX 5090 32 GB' },
          { '你的情况': '我拿不定主意，想要最稳妥的第一张显卡', '买这款': 'RTX 3060 12 GB——不够用以后再升级' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '预算档（$320-400）：RTX 3060 12 GB 和 RX 6700 XT',
        content:
          '**预算档能运行任何 7B 模型和大多数 13B 模型——对大多数首次使用本地大模型的用户来说，这就是他们需要的全部能力。** RTX 3060 12 GB 是推荐之选；如果你接受 AMD 配置的摩擦，RX 6700 XT 是更便宜的替代。这一档次的价格在 2026 年持续上涨，二手 RTX 3060 如今与全新价格相近——两者都要比较。',
        items: [
          '**RTX 3060 12 GB（全新约 $320-400，二手约 $320-350）：** 12 GB 显存，170 W，7B 模型以 Q4 运行 15-20 tok/s。能运行 Mistral Small、Qwen3 8B、DeepSeek-R1 7B 和大多数 13B 模型。要买的是 12 GB 版本——避开 6 GB 版本，它只能运行 3B 模型。全新货源有限，买二手也省不了多少，因此哪个便宜就买哪个，并选有退货期的卖家。 (DeepSeek 此后发布了开源权重新一代模型 DeepSeek-V4——Flash/Pro；R1/V3 仍可在本地正常使用。)',
          '**RX 6700 XT（二手，价格因卖家而异）：** 12 GB 显存，230 W，7B 模型 10-14 tok/s。全新已停产，也不再一定是最便宜的入门方式——请查看实时挂牌——且它比 RTX 3060 慢，依赖 AMD ROCm，会增加配置时间。',
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
            text: 'RX 6700 XT 是这里最便宜的显卡，但要为 Linux 上的 ROCm 配置留出 3-5 小时。如果相对 RTX 3060 省下的钱不多，就买 NVIDIA 显卡。',
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
            priceRange: '320-700',
            label: '在 Amazon 查看 RX 6700 XT 价格',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '中端档（$380-720）：RTX 5060 Ti 16 GB、RTX 4060 Ti 16 GB 和 RX 7800 XT',
        content:
          '**中端档存在的唯一理由是：16 GB 显存能容纳 12 GB 显卡无法在可用上下文下装下的 14B 模型。** 如果 14B 级别的模型是你的目标，这是能正确运行它们的最便宜档次。RTX 5060 Ti 16 GB 是当代架构之选，二手 RTX 4060 Ti 16 GB 是获得 16 GB 最便宜的方式。',
        items: [
          '**RTX 5060 Ti 16 GB（全新约 $618 / 二手挂牌约 $649，建议零售价 $429）：** 16 GB GDDR7，180 W，448 GB/s 显存带宽。本指南未对它单独做基准测试；独立估算在 7B Q4 下约 65-75 tok/s——约为旧款 RTX 4060 Ti 16 GB 的 3 倍。可轻松运行 Qwen3 14B 级别模型。2026 年价格比建议零售价高出约 44%。',
          '**RTX 4060 Ti 16 GB（全新约 $550 起，货源紧张 / 二手 $380-490）：** 16 GB 显存，165 W，7B 模型约 20-25 tok/s。它与 8 GB 版 RTX 4060 Ti 使用同一颗 GPU 核心，因此每 token 速度相近——16 GB 版本买的是容量，不是原始速度。如今主要是二手市场的选择。',
          '**RX 7800 XT（全新约 $500-720，各追踪站不一）：** 16 GB 显存，263 W。本指南未对它单独做基准测试；速度预计在 RTX 4060 Ti 范围内，代价是 AMD ROCm 配置。',
          '**为何买这一档：** 你想要 14B 模型、想要低功耗（RTX 4060 Ti），或想以尽可能低的价格获得 16 GB。',
          '**为何跳过这一档：** 如果 7B 模型够用，预算档能省 $200-300；如果你想要快速的 14B 推理，高端档明显更快。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GB 相对 8 GB 版本是容量升级，不是速度升级——买它是因为你需要装下 14B 模型，而不是因为你期待更高的每秒 token。如果价差可以接受，RTX 5060 Ti 16 GB 是更快的选择。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: '在 Amazon 查看 RTX 5060 Ti 16GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: '在 Amazon 查看 RTX 4060 Ti 16GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 GB（全新约 $1,200 / 二手约 $1,149）：** 16 GB 显存，320 W，7B 模型约 120 tok/s。编辑推荐——这里最快的 16 GB 显卡，比下面两款贵约 $190-300。',
          '**RTX 5070 Ti 16 GB（全新约 $1,008 / 二手挂牌约 $1,050，建议零售价 $749）：** 16 GB GDDR7，300 W，896 GB/s 显存带宽。本指南未对它单独做基准测试；估算在 7B Q4 下约 100-125 tok/s，16 GB 可留有余量地运行 24B Q4 模型。',
          '**RTX 4070 Ti Super 16 GB（全新约 $900 / 二手约 $920）：** 16 GB 显存，285 W，约 80-90 tok/s（估算）。这一档中最便宜的全新显卡，三款中功耗最低。',
          '**为何买这一档：** 你持续运行 14B 模型并希望它们即时响应，或你做轻量 22B 工作并想要余量。',
          '**为何跳过这一档：** 如果你需要 33B 或 70B 模型，没有任何 16 GB 显卡能装下它们——直接转向发烧档，而不是在这里过度花钱。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在这一档中，RTX 4080 Super 最快，RTX 4070 Ti Super 是最便宜的全新款，RTX 5070 Ti 价格居中且架构最新。如果你不需要最后 20-30% 的速度，就选更便宜的两款。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: '在 Amazon 查看 RTX 4080 Super 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: '在 Amazon 查看 RTX 5070 Ti 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: '在 Amazon 查看 RTX 4070 Ti Super 价格',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: '发烧档（$2,080 起）：RTX 4090 和 RTX 5090',
        content:
          '**发烧档是唯一能运行 22B 以上模型的档次——而 RTX 5090 32 GB 是唯一能以 Q4 容纳 70B 模型的消费级单卡。** 在这里购买是为显存容量，而非速度；速度是副产品。2026 年涨价对这一档冲击最大，价格逐周变动。',
        items: [
          '**RTX 4090 24 GB（全新约 $2,083 起 / 二手挂牌约 $2,800）：** 24 GB 显存，450 W，7B 模型约 150 tok/s，70B Q4 模型 36 tok/s。轻松运行 33B 模型。全新 RTX 4090 货源稀少，全新最低价可能已过时——挂牌价最高可达约 $3,800。',
          '**RTX 5090 32 GB（全新约 $4,921 / 二手挂牌约 $5,880，建议零售价 $1,999）：** 32 GB GDDR7 显存，575 W，7B 约 160 tok/s，70B Q4 为 45 tok/s。32 GB 容量是亮点——它是唯一无需第二张 GPU 就能以 Q4 运行 70B 模型的消费级显卡。8 月到 10 月间挂牌价上涨约 64%，二手挂牌价高于全新。',
          '**为何买这一档：** 你需要 33B 或 70B 模型、你做批量推理，或你想要一款多年无需更换的显卡。',
          '**为何跳过这一档：** 对 7B-14B 模型而言它过剩——高端档以不到一半的价格和功耗就能在这些规模上提供即时响应。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090 单卡功耗 575 W。请搭配 850-1000 W 电源——750 W 的电源在负载下会掉压。把电源升级纳入购买预算，而非事后补救。',
          },
          {
            type: 'note',
            text: '在 2026 年涨价之前，两张二手 RTX 4090 比一张 RTX 5090 便宜。按 10 月的挂牌价，每张 RTX 4090 约 $2,083-2,800，一对的总价与单张 RTX 5090（约 $4,921）大致相当，因此单卡是更简单的 70B 构建。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: '在 Amazon 查看 RTX 4090 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**70B 模型——Q4 下 39-42 GB：** 需要把 RTX 5090 32 GB 用到极限，或采用双卡构建。单张 24 GB 显卡无法以 Q4 装下 70B 模型。',
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
          '**2026 年显卡价格因内存短缺大幅上涨，把消费级显卡推高到原始建议零售价的 1.5 到 2.5 倍。** 这改变了购买的算账方式，所以要围绕它而非发布价来规划。',
        items: [
          '**根源是内存，不是 GPU。** GDDR 和 HBM 供应短缺抬高了每一张配有高速内存的显卡的成本——而具备本地大模型能力的 GPU，正是受影响最大的高显存显卡。',
          '**RTX 5090 是最清晰的例子：** 发布价 $1,999，但 10 月挂牌最低价约 $4,921——约 2.5 倍，自 8 月以来上涨 64%。',
          '**低端显卡涨幅较小，但也在涨。** RTX 5060 Ti 16 GB 的标价比其 $429 建议零售价高约 44%，RTX 5070 Ti 比 $749 高约 35%；涨幅与显卡搭载的高速内存数量成正比。',
          '**二手不再自动更便宜。** 在 10 月的挂牌价数据中，二手 RTX 5090、RTX 4090、RTX 4070 Ti Super、RTX 5060 Ti 和 RTX 5070 Ti 的挂牌价与全新持平或更高，二手 RTX 3060 12 GB 自 8 月以来上涨约 31%。请比较两者，并优先选择提供退货的卖家。',
          '**不要指望换代。** 有报道称，NVIDIA 的 RTX 50 Super 系列因内存短缺被无限期推迟（NVIDIA 尚未证实）。**决策：** 如果你能等，就关注短缺缓解的迹象；如果不能等，买能装下目标模型的最小显卡。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026 年显卡价格因内存芯片短缺为建议零售价的 1.5 到 2.5 倍，因此本地大模型买家应比较全新和二手价格，并买能装下目标模型的最小显卡。',
          },
          {
            type: 'plain-terms',
            text: '显卡本身并没有变好——是里面的内存变得稀缺且昂贵。在情况缓解之前，把建议零售价当作历史数字，比较全新和二手，不要为超出模型实际所需的显存付费。',
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
          '**2. 你的硬性预算上限是多少？** 约 $400 以下：RTX 3060 12 GB。约 $650 以下：RTX 5060 Ti 16 GB 或二手 RTX 4060 Ti 16 GB。约 $900-1,200：RTX 4070 Ti Super、RTX 5070 Ti 或 RTX 4080 Super。$2,080 起：RTX 4090 或 RTX 5090。',
          '**3. NVIDIA 还是 AMD？** 除非你已拥有 AMD 硬件，或找到 RX 7800 XT 的大幅折扣，否则选 NVIDIA——CUDA 省去数小时的 ROCm 配置。',
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
          '**显卡价格因地区而异——中国市场的供货与价格和西方差异显著，美国价格通常最低，欧盟价格含增值税，2026 年涨价已波及每个市场。** 下方链接是按地区的普通商品搜索链接；它们不带联盟标签，也不产生佣金。',
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
            priceRange: '320-4900',
            label: '在 Amazon US 浏览显卡',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: '在 Amazon.de 浏览显卡',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: '在 Amazon.fr 浏览显卡',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**忽视电源需求。** RTX 5090 功耗 575 W，需要 850-1000 W 电源。一张在负载下掉压的显卡，比一张稳定运行的较慢显卡更糟。',
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
          '[NVIDIA GeForce RTX 5090 规格](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — RTX 5090 的官方 32 GB GDDR7 显存与 575 W 功耗数据。',
          '[BuySellRAM — NVIDIA 消费级 GPU 市场更新](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — 2026 年 10 月 11 日与 8 月 8 日美国全新和二手最低挂牌价，本指南所有价格均出自此处（挂牌价，非成交价）。',
          '[Capital & Compute — Nvidia RTX 50 价格追踪](https://capitalandcompute.net/gpu-prices/nvidia/) — RTX 5090、RTX 5070 Ti 和 RTX 5060 Ti 16 GB 的建议零售价与市场价对比。',
          '[Club386 — Nvidia 无限期推迟 GeForce RTX 50 Super](https://www.club386.com/?p=129641) — 有报道称（NVIDIA 未证实）RTX 50 Super 换代因内存供应而推迟。',
          '[AMD Radeon 规格](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XT 和 RX 6700 XT 的官方显存与功耗数据。',
          '[本地大模型最佳显卡 2026](/zh/local-llms/best-gpus-for-local-llms) — PromptQuorum 硬件测试：RTX 3060、4080、4090 和 5090 的实测 7B Q4 推理速度。',
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
            a: 'NVIDIA RTX 3060 12 GB（约 $320-400）是能把本地大模型推理跑好的最便宜显卡。它的 12 GB 显存能以 Q4 量化装下每一款 7B 模型和大多数 13B 模型，达到 15-20 token 每秒。二手市场上的 RX 6700 XT 可能更便宜，但更慢且需要 AMD ROCm 配置。RTX 3060 的全新和二手价格如今相近，请两者都比较。',
          },
          {
            q: '为什么 2026 年显卡价格这么高？',
            a: '内存芯片短缺推动了 2026 年的显卡涨价。GDDR 和 HBM 供应收紧，抬高了每一张配有高速内存的显卡的成本，而具备本地大模型能力的高显存显卡受冲击最大。大多数显卡售价为原始建议零售价的 1.5 到 2.5 倍——RTX 5090 发布价 $1,999，但 10 月标价接近 $4,900。二手卡也没有躲过涨幅。',
          },
          {
            q: '运行本地大模型有哪些显卡要求？',
            a: '在 Q4_K_M 量化下，按每十亿参数约 0.6 GB 显存加 2-4 GB 开销来规划。这意味着 7B 模型 8-9 GB，14B 为 11-13 GB，33B 为 19-22 GB，70B 为 39-42 GB。12 GB 显卡能宽裕地覆盖 7B，16 GB 显卡覆盖 14B，70B 需要 RTX 5090 32 GB 或双卡构建。',
          },
          {
            q: '本地大模型用哪款显卡最好？',
            a: '本地大模型的最佳显卡，是在你的预算内显存足够运行目标模型的那一款。7B 模型用 RTX 3060 12 GB（约 $320-400）就够了。14B 模型的中端之选是 RTX 5060 Ti 16 GB（约 $618）或二手 RTX 4060 Ti 16 GB。33B 模型需要 RTX 4090 24 GB，单卡 70B 需要 RTX 5090 32 GB。NVIDIA 显卡的上手门槛最低，因为 CUDA 开箱即用。',
          },
          {
            q: 'RTX 4060 Ti 16 GB 比 8 GB 版本更快吗？',
            a: '不。RTX 4060 Ti 16 GB 和 8 GB 版本使用同一颗 GPU 核心，因此每 token 推理速度相近——7B 模型约 20-25 token 每秒。16 GB 版本买的是容量，让你能运行 8 GB 装不下的 14B 模型。为显存而买，不是为速度。',
          },
          {
            q: '本地大模型该买 NVIDIA 还是 AMD？',
            a: '除非你已拥有 AMD 硬件或找到大幅折扣，否则买 NVIDIA。NVIDIA CUDA 与 Ollama、LM Studio 和 llama.cpp 开箱即用。RX 6700 XT 和 RX 7800 XT 等 AMD 显卡价格有竞争力，但 ROCm 配置在 Linux 上通常要花数小时。',
          },
          {
            q: '单张显卡能运行 70B 模型吗？',
            a: '只有 RTX 5090 32 GB 可以，而且只在 Q4 量化下——此时 70B 模型约需 39-42 GB，意味着激进量化或部分卸载。24 GB 的 RTX 4090 无法单卡以 Q4 装下 70B 模型；常见方案是用两张 RTX 4090 合并显存，不过按 10 月的挂牌价，这一对显卡的总价与单张 RTX 5090 大致相当。',
          },
          {
            q: '对本地大模型而言，RTX 5090 相比 RTX 4090 值得吗？',
            a: '只有在你确实需要单卡运行 70B 模型时才值得。RTX 5090 有 32 GB 显存，对比 RTX 4090 的 24 GB，这是决定性因素。对 7B-33B 模型，RTX 4090 装下的模型相同；按 10 月的挂牌价，RTX 5090 约为 RTX 4090 的 1.8-2.4 倍，因此只有多出的 8 GB 能解决实际问题时才值得为它付费。',
          },
          {
            q: '这些显卡需要什么电源？',
            a: '把电源与档次匹配：550 W 适合 RTX 3060，650-750 W 适合 RTX 4060 Ti、RTX 5060 Ti、RTX 4070 Ti Super 和 RTX 5070 Ti，850 W 适合 RTX 4090，而单卡功耗 575 W 的 RTX 5090 需要 850-1000 W。容量不足的电源会在负载下导致不稳定。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[查看每种模型规模的完整显存需求](/zh/local-llms/how-much-vram-local-llm) — 本指南快速公式背后完整的按模型规模算显存的方法。',
          '[用实测本地大模型基准对比 15 款以上显卡](/zh/local-llms/best-gpus-for-local-llms) — 更广的显卡基准集合，包括这十款之外更老的显卡和服务器显卡。',
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
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Mejor tarjeta gráfica para LLMs locales: guía de GPUs 2026',
    seoTitle: 'Mejor tarjeta gráfica para LLMs locales 2026: hasta RTX 5090',
    intro:
      'La mayoría de los consejos sobre GPUs para LLMs locales optimizan el número equivocado. La velocidad en tokens por segundo decide qué tan rápido responde un modelo, pero la VRAM decide si el modelo puede ejecutarse — y un modelo que no cabe en memoria es infinitamente más lento que uno que sí cabe. Esta guía compara diez tarjetas gráficas de consumo en cuatro rangos de precio según las cifras que realmente determinan una compra: capacidad de VRAM, velocidad de inferencia, consumo energético y precio. Una advertencia sobre los precios: los precios de las GPUs se dispararon en 2026 debido a una escasez de memoria — una RTX 5090 se anuncia ahora a aproximadamente 2,5 veces su precio de lista — así que cada precio aquí es una instantánea de precios de venta en EE. UU.; verifica el precio actual antes de comprar.',
    metaDescription:
      '¿Qué tarjeta gráfica elegir para LLMs locales? Diez GPUs comparadas: VRAM, velocidad, consumo y precios 2026, más requisitos de GPU por modelo.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-es.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — diez tarjetas gráficas, cuatro presupuestos, una regla: compra por VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**La mejor tarjeta gráfica para LLMs locales es la que tiene la VRAM que encaja con tu modelo, no la tarjeta más rápida. Una RTX 3060 12 GB ejecuta cualquier modelo de 7B, una tarjeta de 16 GB (RTX 5060 Ti, RTX 4060 Ti o RTX 5070 Ti) maneja modelos de 14B, una RTX 4090 24 GB maneja modelos de 33B, y una RTX 5090 32 GB es la única tarjeta de consumo individual para trabajo con 70B.**',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la mejor tarjeta gráfica para ejecutar LLMs locales en 2026?',
        answer:
          'Compra por VRAM, luego por velocidad. Una RTX 3060 12 GB (~$320-400) es la opción de presupuesto y ejecuta cualquier modelo de 7B. Una tarjeta de 16 GB es la opción de gama media para modelos de 14B — una RTX 5060 Ti 16 GB (~$620 nueva) o una RTX 4060 Ti 16 GB de segunda mano (~$380-490). Una RTX 4090 24 GB ejecuta modelos de 33B, y una RTX 5090 32 GB (~$4.900) es la única tarjeta de consumo individual que maneja trabajo con 70B sin una configuración de doble GPU. Ten en cuenta que los precios de 2026 están muy por encima del precio de lista.',
        bullets: [
          'Presupuesto: RTX 3060 12 GB, ~$320-400 nueva o de segunda mano, ejecuta cualquier modelo de 7B a 15-20 tok/s',
          'Media: RTX 5060 Ti 16 GB, ~$620 nueva (precio de lista $429), ejecuta modelos de 14B con margen',
          'Entusiasta: RTX 5090 32 GB, ~$4.900, la única tarjeta de consumo para 70B en una sola GPU',
          'Los precios de GPU en 2026 son 1,5-2,5x sobre el precio de lista — compara nueva y de segunda mano antes de comprar',
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
      { label: 'Rango medio ($380-720)', anchor: '#mid-tier' },
      { label: 'Rango alto ($900-1200)', anchor: '#high-tier' },
      { label: 'Rango entusiasta ($2080+)', anchor: '#enthusiast-tier' },
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
          '**Los precios se dispararon en 2026.** Una escasez de memoria empujó los precios de GPU entre 1,5 y 2,5 veces por encima del precio de lista — una RTX 5090 se anuncia a ~$4.900, no a su precio de lanzamiento de $1.999, y los precios volvieron a subir entre agosto y octubre. Trata cada precio aquí como una instantánea de precios de venta en EE. UU., y compara nueva frente a segunda mano antes de comprar.',
          '**Elección de presupuesto: NVIDIA RTX 3060 12 GB** (~$320-400, nueva y de segunda mano cuestan ahora casi lo mismo) — ejecuta cualquier modelo de 7B a 15-20 tok/s y la mayoría de los modelos de 13B en Q4. El mejor punto de entrada en términos de valor para LLMs locales en 2026.',
          '**Elección de gama media: NVIDIA RTX 5060 Ti 16 GB** (~$618 nueva, ~$649 de segunda mano en precio de venta) — 16 GB de VRAM resuelve los modelos de 14B con margen de contexto, y su ancho de banda de memoria de 448 GB/s es mucho mayor que el de la RTX 4060 Ti 16 GB anterior (~$380-490 de segunda mano), que ahora es sobre todo una compra del mercado de segunda mano.',
          '**Elección de gama alta: NVIDIA RTX 4080 Super 16 GB** (~$1.200) — la tarjeta de 16 GB más rápida de esta guía. La RTX 4070 Ti Super (~$900) y la RTX 5070 Ti (~$1.008) cuestan menos y son mejor valor si aceptas una velocidad algo menor.',
          '**Elección entusiasta: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — la RTX 4090 (~$2.083+ nueva, ~$2.800 de segunda mano) ejecuta modelos de 33B; la RTX 5090 (~$4.900) es la única tarjeta de consumo individual que cabe un modelo de 70B en Q4 sin una configuración de doble GPU.',
          '**AMD es viable pero con más fricción.** La RX 6700 XT (12 GB) y la RX 7800 XT (16 GB) ofrecen VRAM a precios competitivos, pero la configuración de ROCm añade horas de trabajo frente a NVIDIA CUDA.',
          '**El consumo energético escala con el rango.** Una RTX 3060 consume 170 W; una RTX 5090 consume 575 W y necesita una fuente de alimentación de 850-1000 W. Incluye la fuente de alimentación en el presupuesto junto con la tarjeta.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Rango de presupuesto ($320-400):** RTX 3060 12 GB o RX 6700 XT 12 GB — ejecuta modelos de 7B y la mayoría de los de 13B.',
          '**Rango medio ($380-720):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB o RX 7800 XT 16 GB — ejecuta modelos de 14B cómodamente.',
          '**Rango alto ($900-1.200):** RTX 4080 Super, RTX 5070 Ti o RTX 4070 Ti Super, todas de 16 GB — inferencia rápida de 14B, trabajo ligero de 22B.',
          '**Rango entusiasta ($2.080+):** RTX 4090 24 GB o RTX 5090 32 GB — modelos de 33B, y 70B en Q4 en la 5090.',
          '**Regla general de VRAM en Q4_K_M:** aproximadamente 0,6 GB por cada mil millones de parámetros, más 2-4 GB para contexto y herramientas.',
          '**Rango de consumo energético:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Realidad de precios en 2026:** una escasez de memoria empujó los precios entre 1,5 y 2,5 veces por encima del precio de lista; las tarjetas de segunda mano ya no cuestan siempre menos que las nuevas, así que compara ambas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Elección del editor: RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**Para compradores que quieren una tarjeta duradera y pueden superar los $1.000, la NVIDIA RTX 4080 Super 16 GB es la elección que equilibra VRAM, velocidad y precio.** Sus 16 GB de VRAM resuelven cualquier modelo de 14B con margen de contexto, es la tarjeta de 16 GB más rápida aquí a aproximadamente 120 tok/s, y a ~$1.200 es la opción premium de 16 GB. Cuesta unos $300 más que la RTX 4070 Ti Super (~$900) y ~$190 más que la RTX 5070 Ti (~$1.008), así que si el precio importa más que el último 20-30 % de velocidad, elige una de esas. Si tu presupuesto está fijo por debajo de $700, la RTX 5060 Ti 16 GB es la elección de valor. Gasta más solo si específicamente necesitas modelos de 33B o 70B.',
        callouts: [
          {
            type: 'note',
            text: 'Esta elección del editor refleja únicamente la relación precio-capacidad. PromptQuorum no está inscrito en ningún programa de afiliados y los enlaces de abajo no llevan etiquetas de afiliado — son simples enlaces de referencia que no generan comisión.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Ver precio del RTX 4080 Super en Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Ver precio del RTX 4080 Super en Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Cómo se comparan las diez GPUs para LLMs locales en 2026',
        content:
          'Las cifras de VRAM y consumo energético son especificaciones del fabricante. Las velocidades de inferencia para la RTX 3060, RTX 4080 Super, RTX 4090 y RTX 5090 son valores medidos de 7B Q4 de las pruebas de hardware de PromptQuorum; las cifras para la RTX 4060 Ti 16 GB, RTX 5060 Ti 16 GB, RX 7800 XT, RTX 4070 Ti Super y RTX 5070 Ti son estimaciones a nivel de familia. Los precios son los precios de venta más bajos en EE. UU. observados en octubre de 2026 — la escasez de memoria los empujó entre 1,5 y 2,5 veces por encima del precio de lista, así que verifica antes de comprar.',
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
            'Velocidad (7B Q4)': '15-20 tok/s',
            'Consumo': '170 W',
            'Precio (EE. UU., 2026)': '$320-400 nueva / $320-350 segunda mano',
            'Ideal para': 'Entrada de presupuesto — cualquier modelo de 7B',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Velocidad (7B Q4)': '10-14 tok/s',
            'Consumo': '230 W',
            'Precio (EE. UU., 2026)': 'Varía según vendedor — consulta en vivo',
            'Ideal para': 'VRAM barata, acepta configuración AMD',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~20-25 tok/s',
            'Consumo': '165 W',
            'Precio (EE. UU., 2026)': '~$550+ nueva / $380-490 segunda mano',
            'Ideal para': 'Rango medio — modelos de 14B, bajo consumo',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~65-75 tok/s (est.)',
            'Consumo': '180 W',
            'Precio (EE. UU., 2026)': '$618 nueva / $649 segunda mano',
            'Ideal para': 'Rango medio — 14B, generación actual',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~18-24 tok/s (est.)',
            'Consumo': '263 W',
            'Precio (EE. UU., 2026)': '~$500-720 (los rastreadores difieren)',
            'Ideal para': '16 GB en AMD, acepta configuración ROCm',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~80-90 tok/s (est.)',
            'Consumo': '285 W',
            'Precio (EE. UU., 2026)': '$900 nueva / $920 segunda mano',
            'Ideal para': 'Rápida en 14B, menor consumo energético',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~100-125 tok/s (est.)',
            'Consumo': '300 W',
            'Precio (EE. UU., 2026)': '$1.008 nueva / $1.050 segunda mano',
            'Ideal para': 'Rápida en 14B, 16 GB de buen valor',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Velocidad (7B Q4)': '~120 tok/s',
            'Consumo': '320 W',
            'Precio (EE. UU., 2026)': '$1.200 nueva / $1.149 segunda mano',
            'Ideal para': 'Elección del editor — la 16 GB más rápida',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Velocidad (7B Q4)': '~150 tok/s',
            'Consumo': '450 W',
            'Precio (EE. UU., 2026)': '~$2.083+ nueva / $2.800 segunda mano',
            'Ideal para': 'Modelos de 33B, doble GPU para 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Velocidad (7B Q4)': '~160 tok/s',
            'Consumo': '575 W',
            'Precio (EE. UU., 2026)': '$4.921 nueva / $5.880 segunda mano',
            'Ideal para': 'GPU única para 70B en Q4',
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
          { 'Tu situación': 'Quiero la tarjeta más barata que ejecute LLMs y acepto el trabajo de configuración', 'Compra esto': 'RX 6700 XT (si encuentras una barata)' },
          { 'Tu situación': 'Quiero ejecutar modelos de 14B con un presupuesto de energía ajustado', 'Compra esto': 'RTX 5060 Ti 16 GB (o una RTX 4060 Ti 16 GB de segunda mano)' },
          { 'Tu situación': 'Quiero una tarjeta que ejecute 14B rápido y dure varios años', 'Compra esto': 'RTX 5070 Ti o RTX 4070 Ti Super 16 GB' },
          { 'Tu situación': 'Quiero la tarjeta de 16 GB más rápida y el precio es secundario', 'Compra esto': 'RTX 4080 Super 16 GB' },
          { 'Tu situación': 'Necesito modelos de 33B o planeé una futura configuración de doble GPU con 70B', 'Compra esto': 'RTX 4090 24 GB' },
          { 'Tu situación': 'Necesito una sola tarjeta que ejecute modelos de 70B en Q4', 'Compra esto': 'RTX 5090 32 GB' },
          { 'Tu situación': 'No estoy seguro y quiero la primera GPU más segura', 'Compra esto': 'RTX 3060 12 GB — actualiza más adelante si la superas' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Rango de presupuesto ($320-400): RTX 3060 12 GB y RX 6700 XT',
        content:
          '**El rango de presupuesto ejecuta cualquier modelo de 7B y la mayoría de los de 13B — y para la mayoría de los usuarios principiantes en LLMs locales, eso es toda la capacidad que necesitan.** La RTX 3060 12 GB es la elección recomendada; la RX 6700 XT es la alternativa más barata si aceptas la fricción de configuración de AMD. Los precios de este rango subieron a lo largo de 2026, y una RTX 3060 de segunda mano cuesta ahora casi lo mismo que una nueva — compara ambas.',
        items: [
          '**RTX 3060 12 GB (~$320-400 nueva, ~$320-350 de segunda mano):** 12 GB de VRAM, 170 W, 15-20 tok/s en modelos de 7B en Q4. Ejecuta Mistral Small, Qwen3 8B, DeepSeek-R1 7B y la mayoría de los modelos de 13B. La variante de 12 GB es la que hay que comprar — evita la variante de 6 GB, que se limita a modelos de 3B. El stock nuevo es limitado y una tarjeta de segunda mano ya no ahorra mucho, así que compra la que sea más barata con derecho a devolución. (DeepSeek ha lanzado desde entonces DeepSeek-V4 —Flash/Pro— como nueva generación de pesos abiertos; R1/V3 siguen siendo válidos para ejecutar en local.)',
          '**RX 6700 XT (de segunda mano, el precio varía según el vendedor):** 12 GB de VRAM, 230 W, 10-14 tok/s en modelos de 7B. Está descontinuada nueva y ya no es siempre la forma más barata de entrar — consulta los listados en vivo — además es más lenta que la RTX 3060 y depende de AMD ROCm, lo que añade tiempo de configuración.',
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
            text: 'La RX 6700 XT es la tarjeta más barata aquí, pero presupuesta 3-5 horas para la configuración de ROCm en Linux. Si el ahorro frente a una RTX 3060 es pequeño, compra la tarjeta NVIDIA.',
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
            priceRange: '320-700',
            label: 'Ver precio de la RX 6700 XT en Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Rango medio ($380-720): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB y RX 7800 XT',
        content:
          '**El rango medio existe por una razón: 16 GB de VRAM resuelve los modelos de 14B que las tarjetas de 12 GB no pueden alojar con contexto utilizable.** Si los modelos de clase 14B son tu objetivo, este es el rango más barato que los ejecuta correctamente. La RTX 5060 Ti 16 GB es la elección de la generación actual, y una RTX 4060 Ti 16 GB de segunda mano es la forma más barata de conseguir 16 GB.',
        items: [
          '**RTX 5060 Ti 16 GB (~$618 nueva / ~$649 de segunda mano en precio de venta, $429 de precio de lista):** 16 GB GDDR7, 180 W, 448 GB/s de ancho de banda de memoria. No se midió individualmente para esta guía; estimaciones independientes la sitúan en torno a 65-75 tok/s en 7B Q4 — aproximadamente 3 veces la RTX 4060 Ti 16 GB anterior. Ejecuta cómodamente modelos de clase Qwen3 14B. Los precios subieron cerca de un 44 % sobre el precio de lista en 2026.',
          '**RTX 4060 Ti 16 GB (~$550+ nueva, escasa / $380-490 de segunda mano):** 16 GB de VRAM, 165 W, aproximadamente 20-25 tok/s en modelos de 7B. Usa el mismo die de GPU que la RTX 4060 Ti de 8 GB, así que la velocidad por token es similar — la versión de 16 GB compra capacidad, no velocidad bruta. Ahora es sobre todo una compra del mercado de segunda mano.',
          '**RX 7800 XT (~$500-720 nueva, los rastreadores difieren):** 16 GB de VRAM, 263 W. No se midió individualmente para esta guía; espera velocidad en el rango de la RTX 4060 Ti, con la configuración de AMD ROCm como contrapartida.',
          '**Por qué comprar en este rango:** quieres modelos de 14B, quieres bajo consumo energético (RTX 4060 Ti) o quieres 16 GB al precio más bajo posible.',
          '**Por qué saltarse este rango:** si con los modelos de 7B es suficiente, el rango de presupuesto cuesta $200-300 menos; si quieres inferencia rápida de 14B, el rango alto es significativamente más rápido.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La RTX 4060 Ti 16 GB es una actualización de capacidad, no de velocidad, sobre la versión de 8 GB — cómprala porque necesitas alojar modelos de 14B, no porque esperes más tokens por segundo. La RTX 5060 Ti 16 GB es la opción más rápida si la diferencia de precio es aceptable.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'Ver precio de la RTX 5060 Ti 16GB en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'Ver precio de la RTX 4060 Ti 16GB en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 GB (~$1.200 nueva / ~$1.149 de segunda mano):** 16 GB de VRAM, 320 W, aproximadamente 120 tok/s en modelos de 7B. La elección del editor — la tarjeta de 16 GB más rápida de esta guía, con una prima de unos $190-300 sobre las dos tarjetas siguientes.',
          '**RTX 5070 Ti 16 GB (~$1.008 nueva / ~$1.050 de segunda mano en precio de venta, $749 de precio de lista):** 16 GB GDDR7, 300 W, 896 GB/s de ancho de banda de memoria. No se midió individualmente para esta guía; las estimaciones la sitúan en torno a 100-125 tok/s en 7B Q4, y 16 GB ejecutan un modelo de 24B en Q4 con margen.',
          '**RTX 4070 Ti Super 16 GB (~$900 nueva / ~$920 de segunda mano):** 16 GB de VRAM, 285 W, aproximadamente 80-90 tok/s (estimación). La tarjeta nueva más barata de este rango, con el menor consumo energético de las tres.',
          '**Por qué comprar en este rango:** ejecutas modelos de 14B constantemente y los quieres instantáneos, o haces trabajo ligero de 22B y quieres margen.',
          '**Por qué saltarse este rango:** si necesitas modelos de 33B o 70B, ninguna tarjeta de 16 GB los alojará — muévete al rango entusiasta en lugar de gastar de más aquí.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Dentro de este rango, la RTX 4080 Super es la más rápida, la RTX 4070 Ti Super es la nueva más barata y la RTX 5070 Ti queda entre ambas en precio con la arquitectura más reciente. Si no necesitas el último 20-30 % de velocidad, elige una de las dos más baratas.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Ver precio del RTX 4080 Super en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'Ver precio de la RTX 5070 Ti en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'Ver precio del RTX 4070 Ti Super en Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Rango entusiasta ($2.080+): RTX 4090 y RTX 5090',
        content:
          '**El rango entusiasta es el único que ejecuta modelos por encima de 22B — y la RTX 5090 32 GB es la única tarjeta de consumo individual que aloja un modelo de 70B en Q4.** Compra aquí por capacidad de VRAM, no por velocidad; la velocidad es un efecto secundario. La subida de 2026 golpeó este rango con más fuerza, así que los precios cambian semana a semana.',
        items: [
          '**RTX 4090 24 GB (~$2.083+ nueva / ~$2.800 de segunda mano en precio de venta):** 24 GB de VRAM, 450 W, aproximadamente 150 tok/s en modelos de 7B y 36 tok/s en un modelo de 70B Q4. Ejecuta modelos de 33B cómodamente. El stock nuevo de la RTX 4090 es escaso y el precio mínimo de las nuevas puede estar desactualizado — los listados llegan hasta ~$3.800.',
          '**RTX 5090 32 GB (~$4.921 nueva / ~$5.880 de segunda mano en precio de venta, $1.999 de precio de lista):** 32 GB de VRAM GDDR7, 575 W, aproximadamente 160 tok/s en 7B y 45 tok/s en 70B Q4. Los 32 GB de capacidad son el argumento central — es la única tarjeta de consumo que ejecuta un modelo de 70B en Q4 sin una segunda GPU. Los precios de venta subieron cerca de un 64 % entre agosto y octubre, y los listados de segunda mano quedan por encima de los de nuevas.',
          '**Por qué comprar en este rango:** necesitas modelos de 33B o 70B, ejecutas inferencia en lotes, o quieres una tarjeta que no necesite reemplazarse en años.',
          '**Por qué saltarse este rango:** para modelos de 7B-14B es excesivo — el rango alto ofrece respuestas instantáneas en esos tamaños por menos de la mitad del precio y el consumo energético.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'La RTX 5090 consume 575 W por sí sola. Combínala con una fuente de alimentación de 850-1000 W — una unidad de 750 W fallará bajo carga. Incluye la actualización de la fuente de alimentación en la compra, no como idea posterior.',
          },
          {
            type: 'note',
            text: 'Antes de la subida de 2026, dos RTX 4090 de segunda mano eran más baratas que una RTX 5090. Con los precios de venta de octubre de ~$2.083-2.800 por RTX 4090, un par cuesta aproximadamente lo mismo que una sola RTX 5090 (~$4.921), así que la tarjeta única es la configuración de 70B más sencilla.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'Ver precio de la RTX 4090 en Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**Modelos de 70B — 39-42 GB en Q4:** necesitan una RTX 5090 32 GB al límite, o una configuración de doble GPU. Una sola tarjeta de 24 GB no puede alojar un modelo de 70B en Q4.',
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
          '**Los precios de GPU subieron marcadamente en 2026 debido a una escasez de memoria, empujando las tarjetas de consumo entre 1,5 y 2,5 veces por encima de su precio de lista original.** Esto cambia el cálculo de compra, así que planifica en torno a ello en lugar de los precios de lanzamiento.',
        items: [
          '**La causa es la memoria, no las GPUs.** Una escasez de suministro de GDDR y HBM elevó el costo de cada tarjeta con memoria rápida — y las GPUs capaces de LLMs son exactamente las tarjetas de alta VRAM más afectadas.',
          '**La RTX 5090 es el ejemplo más claro:** un precio de lanzamiento de $1.999, pero ~$4.921 como precio de venta mínimo en octubre — unas 2,5 veces, y un 64 % más que en agosto.',
          '**Las tarjetas de gama baja subieron menos, pero subieron.** La RTX 5060 Ti 16 GB se anuncia cerca de un 44 % por encima de su precio de lista de $429 y la RTX 5070 Ti cerca de un 35 % por encima de $749; la subida escala con la cantidad de memoria rápida que lleva una tarjeta.',
          '**La segunda mano ya no es automáticamente más barata.** En los datos de precios de venta de octubre, los listados de segunda mano de RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti y RTX 5070 Ti estaban al nivel de los nuevos o por encima, y la RTX 3060 12 GB de segunda mano subió cerca de un 31 % desde agosto. Compara ambas y prefiere vendedores con devoluciones.',
          '**No cuentes con un relanzamiento.** Se ha informado de que las RTX 50 Super de NVIDIA están retrasadas indefinidamente por la escasez de memoria (NVIDIA no lo ha confirmado). **Decisión:** si puedes esperar, observa si la escasez se mitiga; si no puedes, adquiere la tarjeta más pequeña que se adapte a tu modelo objetivo.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Los precios de GPU en 2026 son entre 1,5 y 2,5 veces superiores al precio de lista debido a una escasez de chips de memoria, por lo que un comprador de LLMs locales debería comparar los precios de nuevas y de segunda mano y comprar la tarjeta más pequeña que se adapte al modelo objetivo.',
          },
          {
            type: 'plain-terms',
            text: 'Las tarjetas no mejoraron — la memoria dentro de ellas se volvió escasa y cara. Hasta que eso cambie, trata el precio de lista como un número histórico, compara nuevas y de segunda mano, y no pagues por más VRAM de la que tu modelo realmente necesita.',
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
          '**2. ¿Cuál es tu techo de presupuesto absoluto?** Por debajo de ~$400: RTX 3060 12 GB. Por debajo de ~$650: RTX 5060 Ti 16 GB o una RTX 4060 Ti 16 GB de segunda mano. ~$900-1.200: RTX 4070 Ti Super, RTX 5070 Ti o RTX 4080 Super. $2.080+: RTX 4090 o RTX 5090.',
          '**3. ¿NVIDIA o AMD?** Elige NVIDIA a menos que ya tengas hardware AMD o encuentres un descuento considerable en la RX 7800 XT — CUDA elimina horas de configuración de ROCm.',
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
          '**Los precios de GPU varían por región — los precios en EE. UU. suelen ser los más bajos, los precios en la UE incluyen IVA, y la subida de 2026 ha afectado a todos los mercados.** Los enlaces de abajo son simples enlaces de búsqueda de productos por región; no llevan etiquetas de afiliado y no generan comisión.',
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
            priceRange: '320-4900',
            label: 'Ver GPUs en Amazon EE. UU.',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'GPUs para LLMs locales (Alemania)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Ver GPUs en Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'GPUs para LLMs locales (Francia)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Ver GPUs en Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'GPUs para LLMs locales (Japón)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**Ignorar los requisitos de la fuente de alimentación.** Una RTX 5090 consume 575 W y necesita una fuente de 850-1000 W. Una tarjeta que falla bajo carga es peor que una tarjeta más lenta que funciona establemente.',
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
          '[Especificaciones NVIDIA GeForce RTX 5090](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — Cifras oficiales de 32 GB de VRAM GDDR7 y 575 W de consumo para la RTX 5090.',
          '[BuySellRAM — Actualización del mercado de GPU de consumo de NVIDIA](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — precios de venta mínimos en EE. UU., nuevos y de segunda mano, del 11 de octubre de 2026 frente al 8 de agosto de 2026, usados para todos los precios de esta guía (precios de venta, no ventas completadas).',
          '[Capital & Compute — Rastreador de precios Nvidia RTX 50](https://capitalandcompute.net/gpu-prices/nvidia/) — precio de lista frente a precio de mercado para la RTX 5090, RTX 5070 Ti y RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia retrasa indefinidamente las GeForce RTX 50 Super](https://www.club386.com/?p=129641) — informe (sin confirmar por NVIDIA) de que el relanzamiento RTX 50 Super se aplaza por el suministro de memoria.',
          '[Especificaciones AMD Radeon](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Cifras oficiales de VRAM y consumo para la RX 7800 XT y RX 6700 XT.',
          '[Mejores GPUs para LLMs locales 2026](/es/local-llms/best-gpus-for-local-llms) — Pruebas de hardware de PromptQuorum: velocidades de inferencia medidas de 7B Q4 para la RTX 3060, 4080, 4090 y 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es la GPU más barata para inferencia de LLM en 2026?',
            a: 'La NVIDIA RTX 3060 12 GB, a unos $320-400, es la GPU más barata que ejecuta bien la inferencia de LLMs locales. Sus 12 GB de VRAM alojan cualquier modelo de 7B y la mayoría de los de 13B en cuantización Q4, a 15-20 tokens por segundo. Una RX 6700 XT puede ser más barata en el mercado de segunda mano, pero es más lenta y requiere configuración de AMD ROCm. Los precios de la RTX 3060 nueva y de segunda mano están ahora cerca, así que compara ambas.',
          },
          {
            q: '¿Por qué los precios de GPU son tan altos en 2026?',
            a: 'Una escasez de chips de memoria impulsó la subida de precios de GPU de 2026. El suministro de GDDR y HBM se ajustó, elevando el costo de cada tarjeta gráfica con memoria rápida, y las tarjetas de alta VRAM capaces de LLMs fueron las más afectadas. La mayoría de las tarjetas se venden entre 1,5 y 2,5 veces por encima de su precio de lista original — una RTX 5090 se lanzó a $1.999 pero se anuncia cerca de $4.900 en octubre. Las tarjetas de segunda mano ya no escapan al aumento.',
          },
          {
            q: '¿Cuáles son los requisitos de GPU para ejecutar un LLM local?',
            a: 'En cuantización Q4_K_M, planifica aproximadamente 0,6 GB de VRAM por cada mil millones de parámetros más 2-4 GB de sobrecarga. Eso significa 8-9 GB para modelos de 7B, 11-13 GB para 14B, 19-22 GB para 33B, y 39-42 GB para 70B. Una tarjeta de 12 GB cubre 7B cómodamente, una de 16 GB cubre 14B, y el 70B necesita una RTX 5090 32 GB o una configuración de doble GPU.',
          },
          {
            q: '¿Cuál es la mejor tarjeta gráfica para LLMs locales?',
            a: 'La mejor tarjeta gráfica para LLMs locales es la que tiene VRAM suficiente para tu modelo objetivo dentro de tu presupuesto. Para modelos de 7B basta una RTX 3060 12 GB (~$320-400). Para modelos de 14B, una RTX 5060 Ti 16 GB (~$618) o una RTX 4060 Ti 16 GB de segunda mano es la elección de gama media. Para modelos de 33B necesitas una RTX 4090 24 GB, y para 70B en una sola tarjeta una RTX 5090 32 GB. Las tarjetas NVIDIA son la opción con menos fricción porque CUDA funciona de forma inmediata.',
          },
          {
            q: '¿La RTX 4060 Ti 16 GB es más rápida que la versión de 8 GB?',
            a: 'No. La RTX 4060 Ti de 16 GB y 8 GB usa el mismo die de GPU, así que la velocidad de inferencia por token es similar — aproximadamente 20-25 tokens por segundo en modelos de 7B. La versión de 16 GB compra capacidad, permitiéndote ejecutar modelos de 14B que no caben en 8 GB. Cómprala por VRAM, no por velocidad.',
          },
          {
            q: '¿Debo comprar NVIDIA o AMD para LLMs locales?',
            a: 'Compra NVIDIA a menos que ya tengas hardware AMD o encuentres un descuento considerable. NVIDIA CUDA funciona de forma inmediata con Ollama, LM Studio y llama.cpp. Las tarjetas AMD como la RX 6700 XT y RX 7800 XT ofrecen VRAM competitiva por dólar, pero la configuración de ROCm suele costar varias horas en Linux.',
          },
          {
            q: '¿Puede una sola GPU ejecutar un modelo de 70B?',
            a: 'Solo la RTX 5090 32 GB, y solo en cuantización Q4 donde un modelo de 70B necesita aproximadamente 39-42 GB — lo que implica cuantización agresiva o descarga parcial. Una RTX 4090 de 24 GB no puede alojar un modelo de 70B en Q4 por sí sola; la solución habitual es dos RTX 4090 para VRAM combinada, aunque con los precios de venta de octubre ese par cuesta aproximadamente lo mismo que una sola RTX 5090.',
          },
          {
            q: '¿Vale la pena la RTX 5090 frente a la RTX 4090 para LLMs locales?',
            a: 'Solo si específicamente necesitas ejecutar modelos de 70B en una sola tarjeta. La RTX 5090 tiene 32 GB de VRAM frente a los 24 GB de la RTX 4090, que es el factor decisivo. Para modelos de 7B-33B, la RTX 4090 aloja los mismos modelos; con los precios de venta de octubre la RTX 5090 cuesta aproximadamente entre 1,8 y 2,4 veces una RTX 4090, así que págala solo si los 8 GB extra resuelven un problema real.',
          },
          {
            q: '¿Qué fuente de alimentación necesito para estas GPUs?',
            a: 'Adapta la fuente de alimentación al rango: una unidad de 550 W es adecuada para la RTX 3060, 650-750 W para la RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super y RTX 5070 Ti, 850 W para la RTX 4090, y se necesitan 850-1000 W para la RTX 5090, que consume 575 W por sí sola. Las fuentes de alimentación sobredimensionadas hacia abajo provocan inestabilidad bajo carga.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Consulta los requisitos completos de VRAM para cada tamaño de modelo](/es/local-llms/how-much-vram-local-llm) — el método completo de VRAM por tamaño de modelo detrás de la fórmula rápida de esta guía.',
          '[Compara más de 15 GPUs con benchmarks medidos de LLMs locales](/es/local-llms/best-gpus-for-local-llms) — el conjunto más amplio de benchmarks de GPU, incluyendo tarjetas más antiguas y de servidor más allá de estas diez.',
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
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'Melhor placa de vídeo para LLMs locais: guia de GPUs 2026',
    seoTitle: 'Melhor placa de vídeo para LLMs locais 2026: até a RTX 5090',
    intro:
      'A maioria dos conselhos sobre GPUs para LLMs locais otimiza o número errado. A velocidade em tokens por segundo decide a rapidez com que um modelo responde, mas a VRAM decide se o modelo executa — e um modelo que não cabe na memória é infinitamente mais lento do que um que cabe. Este guia compara dez placas de vídeo de consumo em quatro faixas de preço pelos números que realmente determinam uma compra: capacidade de VRAM, velocidade de inferência, consumo de energia e preço. Uma ressalva sobre o preço: os preços de GPUs dispararam em 2026 devido a uma escassez de memória — uma RTX 5090 agora é anunciada por cerca de 2,5 vezes o preço de lista — então cada preço aqui é uma captura de preços pedidos nos EUA; confirme o preço atual antes de comprar.',
    metaDescription:
      'Qual placa de vídeo para LLMs locais? Dez GPUs comparadas por VRAM, velocidade, consumo e preços de 2026, da barata à RTX 5090 e requisitos por modelo.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-pt.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — dez placas de vídeo, quatro orçamentos, uma regra: compre pela VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**A melhor placa de vídeo para LLMs locais é aquela cuja VRAM se encaixa no seu modelo, não a placa mais rápida. Uma RTX 3060 12 GB executa qualquer modelo 7B, uma placa de 16 GB (RTX 5060 Ti, RTX 4060 Ti ou RTX 5070 Ti) lida com modelos 14B, uma RTX 4090 24 GB lida com modelos 33B, e uma RTX 5090 32 GB é a única placa de consumo individual para trabalho com 70B.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a melhor placa de vídeo para executar LLMs locais em 2026?',
        answer:
          'Compre pela VRAM, depois pela velocidade. Uma RTX 3060 12 GB (~$320–400) é a escolha econômica e executa qualquer modelo 7B. Uma placa de 16 GB é a escolha intermediária para modelos 14B — uma RTX 5060 Ti 16 GB (~$620 nova) ou uma RTX 4060 Ti 16 GB usada (~$380–490). Uma RTX 4090 24 GB executa modelos 33B, e uma RTX 5090 32 GB (~$4.900) é a única placa de consumo individual que lida com trabalho 70B sem configuração de GPU dupla. Observe que os preços de 2026 estão bem acima do preço de lista.',
        bullets: [
          'Econômico: RTX 3060 12 GB, ~$320–400 nova ou usada, executa qualquer modelo 7B a 15–20 tok/s',
          'Intermediário: RTX 5060 Ti 16 GB, ~$620 nova (preço de lista $429), executa modelos 14B com folga',
          'Entusiasta: RTX 5090 32 GB, ~$4.900, única placa de consumo para 70B em uma única GPU',
          'Os preços de GPU em 2026 são 1,5–2,5x acima do preço de lista — compare nova e usada antes de comprar',
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
      { label: 'Faixa intermediária ($380–720)', anchor: '#mid-tier' },
      { label: 'Faixa alta ($900–1200)', anchor: '#high-tier' },
      { label: 'Faixa entusiasta ($2080+)', anchor: '#enthusiast-tier' },
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
          '**Os preços dispararam em 2026.** Uma escassez de memória empurrou os preços de GPU de 1,5 a 2,5 vezes acima do preço de lista — uma RTX 5090 é anunciada por ~$4.900, não pelo preço de lançamento de $1.999, e os preços subiram de novo entre agosto e outubro. Trate cada preço aqui como uma captura de preços pedidos nos EUA e compare nova e usada antes de comprar.',
          '**Escolha econômica: NVIDIA RTX 3060 12 GB** (~$320–400, nova e usada agora custam quase o mesmo) — executa qualquer modelo 7B a 15–20 tok/s e a maioria dos modelos 13B em Q4. O melhor ponto de entrada em termos de custo-benefício para LLMs locais em 2026.',
          '**Escolha intermediária: NVIDIA RTX 5060 Ti 16 GB** (~$618 nova, ~$649 usada pedida) — 16 GB de VRAM lida com modelos 14B com margem de contexto, e sua largura de banda de memória de 448 GB/s é muito maior que a da RTX 4060 Ti 16 GB mais antiga (~$380–490 usada), que hoje é sobretudo uma compra no mercado de usados.',
          '**Escolha de alta faixa: NVIDIA RTX 4080 Super 16 GB** (~$1.200) — a placa de 16 GB mais rápida aqui. A RTX 4070 Ti Super (~$900) e a RTX 5070 Ti (~$1.008) custam menos e são o melhor custo-benefício se você aceitar uma velocidade um pouco menor.',
          '**Escolha entusiasta: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — a RTX 4090 (~$2.083+ nova, ~$2.800 usada) executa modelos 33B; a RTX 5090 (~$4.900) é a única placa de consumo individual que cabe um modelo 70B em Q4 sem configuração de GPU dupla.',
          '**A AMD é viável, mas gera mais atrito.** A RX 6700 XT (12 GB) e a RX 7800 XT (16 GB) oferecem VRAM a preços competitivos, mas a configuração ROCm adiciona horas de trabalho em relação ao CUDA da NVIDIA.',
          '**O consumo de energia escala com a faixa.** Uma RTX 3060 consome 170 W; uma RTX 5090 consome 575 W e precisa de uma fonte de 850–1000 W. Inclua a fonte de alimentação no orçamento junto com a placa.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Faixa econômica ($320–400):** RTX 3060 12 GB ou RX 6700 XT 12 GB — executa modelos 7B e a maioria dos 13B.',
          '**Faixa intermediária ($380–720):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB ou RX 7800 XT 16 GB — executa modelos 14B confortavelmente.',
          '**Faixa alta ($900–1.200):** RTX 4080 Super, RTX 5070 Ti ou RTX 4070 Ti Super, todas de 16 GB — inferência rápida de 14B, trabalho leve de 22B.',
          '**Faixa entusiasta ($2.080+):** RTX 4090 24 GB ou RTX 5090 32 GB — modelos 33B, e 70B em Q4 na 5090.',
          '**Regra geral de VRAM em Q4_K_M:** aproximadamente 0,6 GB por bilhão de parâmetros, mais 2–4 GB para contexto e ferramentas.',
          '**Faixa de consumo de energia:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Realidade de preços em 2026:** uma escassez de memória empurrou os preços de 1,5 a 2,5 vezes acima do preço de lista; placas usadas já não custam menos que as novas de forma confiável, então compare as duas.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Escolha do editor: RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**Para compradores que querem uma placa duradoura e podem gastar mais de $1.000, a NVIDIA RTX 4080 Super 16 GB é a escolha que equilibra VRAM, velocidade e preço.** Seus 16 GB de VRAM lidam com qualquer modelo 14B com margem de contexto, é a placa de 16 GB mais rápida aqui com cerca de 120 tok/s, e a ~$1.200 é a escolha premium de 16 GB. Custa cerca de $300 a mais que a RTX 4070 Ti Super (~$900) e ~$190 a mais que a RTX 5070 Ti (~$1.008); se o preço importa mais que os últimos 20–30% de velocidade, escolha uma dessas. Se o seu orçamento está fixo abaixo de $700, a RTX 5060 Ti 16 GB é a escolha de custo-benefício. Gaste mais apenas se precisar especificamente de modelos 33B ou 70B.',
        callouts: [
          {
            type: 'note',
            text: 'Esta escolha do editor reflete apenas a relação preço-capacidade. O PromptQuorum não está inscrito em nenhum programa de afiliados e os links abaixo não carregam tags de afiliado — são links de referência simples que não geram comissão.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Ver preço do RTX 4080 Super na Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Ver preço do RTX 4080 Super na Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Como as dez GPUs se comparam para LLMs locais em 2026',
        content:
          'As cifras de VRAM e consumo de energia são especificações do fabricante. As velocidades de inferência para a RTX 3060, RTX 4080 Super, RTX 4090 e RTX 5090 são valores medidos de 7B Q4 dos testes de hardware do PromptQuorum; os valores para a RTX 4060 Ti 16 GB, RTX 5060 Ti 16 GB, RX 7800 XT, RTX 4070 Ti Super e RTX 5070 Ti são estimativas a nível de família. Os preços são os menores preços pedidos nos EUA vistos em outubro de 2026 — a escassez de memória os empurrou de 1,5 a 2,5 vezes acima do preço de lista, então verifique antes de comprar.',
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
            'Velocidade (7B Q4)': '15–20 tok/s',
            'Consumo': '170 W',
            'Preço (EUA, 2026)': '$320–400 nova / $320–350 usada',
            'Melhor para': 'Entrada econômica — qualquer modelo 7B',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Velocidade (7B Q4)': '10–14 tok/s',
            'Consumo': '230 W',
            'Preço (EUA, 2026)': 'Varia por vendedor — confira ao vivo',
            'Melhor para': 'VRAM barata, aceita configuração AMD',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~20–25 tok/s',
            'Consumo': '165 W',
            'Preço (EUA, 2026)': '~$550+ nova / $380–490 usada',
            'Melhor para': 'Faixa intermediária — modelos 14B, baixo consumo',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~65–75 tok/s (est.)',
            'Consumo': '180 W',
            'Preço (EUA, 2026)': '$618 nova / $649 usada',
            'Melhor para': 'Faixa intermediária — 14B, geração atual',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~18–24 tok/s (est.)',
            'Consumo': '263 W',
            'Preço (EUA, 2026)': '~$500–720 (rastreadores diferem)',
            'Melhor para': '16 GB na AMD, aceita configuração ROCm',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~80–90 tok/s (est.)',
            'Consumo': '285 W',
            'Preço (EUA, 2026)': '$900 nova / $920 usada',
            'Melhor para': 'Rápida em 14B, menor consumo de energia',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~100–125 tok/s (est.)',
            'Consumo': '300 W',
            'Preço (EUA, 2026)': '$1.008 nova / $1.050 usada',
            'Melhor para': 'Rápida em 14B, 16 GB com bom custo-benefício',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Velocidade (7B Q4)': '~120 tok/s',
            'Consumo': '320 W',
            'Preço (EUA, 2026)': '$1.200 nova / $1.149 usada',
            'Melhor para': 'Escolha do editor — a 16 GB mais rápida',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Velocidade (7B Q4)': '~150 tok/s',
            'Consumo': '450 W',
            'Preço (EUA, 2026)': '~$2.083+ nova / $2.800 usada',
            'Melhor para': 'Modelos 33B, GPU dupla para 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Velocidade (7B Q4)': '~160 tok/s',
            'Consumo': '575 W',
            'Preço (EUA, 2026)': '$4.921 nova / $5.880 usada',
            'Melhor para': 'GPU única para 70B em Q4',
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
          { 'Sua situação': 'Quero a placa mais barata que execute LLMs e aceito o trabalho de configuração', 'Compre esta': 'RX 6700 XT (se achar barata)' },
          { 'Sua situação': 'Quero executar modelos 14B com orçamento de energia apertado', 'Compre esta': 'RTX 5060 Ti 16 GB (ou RTX 4060 Ti 16 GB usada)' },
          { 'Sua situação': 'Quero uma placa que execute 14B rápido e dure vários anos', 'Compre esta': 'RTX 5070 Ti ou RTX 4070 Ti Super 16 GB' },
          { 'Sua situação': 'Quero a placa de 16 GB mais rápida e o preço é secundário', 'Compre esta': 'RTX 4080 Super 16 GB' },
          { 'Sua situação': 'Preciso de modelos 33B ou planejo uma futura configuração de GPU dupla com 70B', 'Compre esta': 'RTX 4090 24 GB' },
          { 'Sua situação': 'Preciso de uma única placa que execute modelos 70B em Q4', 'Compre esta': 'RTX 5090 32 GB' },
          { 'Sua situação': 'Estou inseguro e quero a primeira GPU mais segura', 'Compre esta': 'RTX 3060 12 GB — atualize depois se a superar' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Faixa econômica ($320–400): RTX 3060 12 GB e RX 6700 XT',
        content:
          '**A faixa econômica executa qualquer modelo 7B e a maioria dos modelos 13B — e para a maioria dos usuários iniciantes em LLMs locais, essa é toda a capacidade necessária.** A RTX 3060 12 GB é a escolha recomendada; a RX 6700 XT é a alternativa mais barata se você aceitar o atrito de configuração da AMD. Os preços nesta faixa subiram ao longo de 2026, e uma RTX 3060 usada agora custa quase o mesmo que uma nova — compare as duas.',
        items: [
          '**RTX 3060 12 GB (~$320–400 nova, ~$320–350 usada):** 12 GB de VRAM, 170 W, 15–20 tok/s em modelos 7B em Q4. Executa Mistral Small, Qwen3 8B, DeepSeek-R1 7B e a maioria dos modelos 13B. A variante de 12 GB é a que você deve comprar — evite a variante de 6 GB, que se limita a modelos 3B. O estoque novo é limitado e uma placa usada já não economiza muito, então compre a que sair mais barata, com direito a devolução. (Desde então, a DeepSeek lançou o DeepSeek-V4 — Flash/Pro — como nova geração de pesos abertos; R1/V3 continuam válidos para uso local.)',
          '**RX 6700 XT (usada, preço varia por vendedor):** 12 GB de VRAM, 230 W, 10–14 tok/s em modelos 7B. Está descontinuada nova e já não é, de forma confiável, a entrada mais barata — confira os anúncios atuais —, além de ser mais lenta que a RTX 3060 e depender do AMD ROCm, que adiciona tempo de configuração.',
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
            text: 'A RX 6700 XT é a placa mais barata aqui, mas reserve 3–5 horas para a configuração ROCm no Linux. Se a economia em relação a uma RTX 3060 for pequena, compre a placa NVIDIA.',
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
            priceRange: '320-700',
            label: 'Ver preço da RX 6700 XT na Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Faixa intermediária ($380–720): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB e RX 7800 XT',
        content:
          '**A faixa intermediária existe por uma razão: 16 GB de VRAM lida com modelos 14B que placas de 12 GB não conseguem acomodar com contexto utilizável.** Se modelos de classe 14B são seu objetivo, esta é a faixa mais barata que os executa adequadamente. A RTX 5060 Ti 16 GB é a escolha da geração atual, e uma RTX 4060 Ti 16 GB usada é a forma mais barata de ter 16 GB.',
        items: [
          '**RTX 5060 Ti 16 GB (~$618 nova / ~$649 usada pedida, preço de lista $429):** 16 GB GDDR7, 180 W, largura de banda de memória de 448 GB/s. Não foi medida individualmente para este guia; estimativas independentes apontam cerca de 65–75 tok/s em 7B Q4 — aproximadamente 3x a RTX 4060 Ti 16 GB mais antiga. Executa confortavelmente modelos da classe Qwen3 14B. Os preços ficaram cerca de 44% acima do preço de lista em 2026.',
          '**RTX 4060 Ti 16 GB (~$550+ nova, escassa / $380–490 usada):** 16 GB de VRAM, 165 W, aproximadamente 20–25 tok/s em modelos 7B. Usa o mesmo die de GPU que a RTX 4060 Ti de 8 GB, então a velocidade por token é similar — a versão de 16 GB compra capacidade, não velocidade bruta. Hoje é sobretudo uma compra no mercado de usados.',
          '**RX 7800 XT (~$500–720 nova, rastreadores diferem):** 16 GB de VRAM, 263 W. Não foi medida individualmente para este guia; espere velocidade na faixa da RTX 4060 Ti, com a configuração AMD ROCm como contrapartida.',
          '**Por que comprar nesta faixa:** você quer modelos 14B, quer baixo consumo de energia (RTX 4060 Ti) ou quer 16 GB ao menor preço possível.',
          '**Por que pular esta faixa:** se modelos 7B são suficientes, a faixa econômica custa $200–300 a menos; se você quer inferência 14B rápida, a faixa alta é significativamente mais rápida.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A RTX 4060 Ti 16 GB é uma atualização de capacidade, não de velocidade, em relação à versão de 8 GB — compre-a porque precisa acomodar modelos 14B, não porque espera mais tokens por segundo. A RTX 5060 Ti 16 GB é a opção mais rápida se a diferença de preço for aceitável.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'Ver preço da RTX 5060 Ti 16GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'Ver preço da RTX 4060 Ti 16GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 GB (~$1.200 nova / ~$1.149 usada):** 16 GB de VRAM, 320 W, aproximadamente 120 tok/s em modelos 7B. A escolha do editor — a placa de 16 GB mais rápida aqui, com um prêmio de cerca de $190–300 sobre as duas placas abaixo.',
          '**RTX 5070 Ti 16 GB (~$1.008 nova / ~$1.050 usada pedida, preço de lista $749):** 16 GB GDDR7, 300 W, largura de banda de memória de 896 GB/s. Não foi medida individualmente para este guia; estimativas apontam cerca de 100–125 tok/s em 7B Q4, e 16 GB executam um modelo 24B Q4 com folga.',
          '**RTX 4070 Ti Super 16 GB (~$900 nova / ~$920 usada):** 16 GB de VRAM, 285 W, aproximadamente 80–90 tok/s (estimativa). A placa nova mais barata desta faixa, com o menor consumo das três.',
          '**Por que comprar nesta faixa:** você executa modelos 14B constantemente e os quer instantâneos, ou faz trabalho leve de 22B e quer margem.',
          '**Por que pular esta faixa:** se você precisa de modelos 33B ou 70B, nenhuma placa de 16 GB os acomodará — passe para a faixa entusiasta em vez de gastar demais aqui.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Dentro desta faixa, a RTX 4080 Super é a mais rápida, a RTX 4070 Ti Super é a mais barata nova e a RTX 5070 Ti fica entre as duas no preço, com a arquitetura mais recente. Se você não precisa dos últimos 20–30% de velocidade, escolha uma das duas mais baratas.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Ver preço do RTX 4080 Super na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'Ver preço da RTX 5070 Ti na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'Ver preço do RTX 4070 Ti Super na Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Faixa entusiasta ($2.080+): RTX 4090 e RTX 5090',
        content:
          '**A faixa entusiasta é a única que executa modelos acima de 22B — e a RTX 5090 32 GB é a única placa de consumo individual que acomoda um modelo 70B em Q4.** Compre aqui pela capacidade de VRAM, não pela velocidade; a velocidade é um efeito colateral. O aumento de 2026 atingiu esta faixa com mais força, então os preços se movem semana a semana.',
        items: [
          '**RTX 4090 24 GB (~$2.083+ nova / ~$2.800 usada pedida):** 24 GB de VRAM, 450 W, aproximadamente 150 tok/s em modelos 7B e 36 tok/s em um modelo 70B Q4. Executa modelos 33B confortavelmente. O estoque novo da RTX 4090 é escasso e o piso de preço novo pode estar desatualizado — os anúncios chegam a ~$3.800.',
          '**RTX 5090 32 GB (~$4.921 nova / ~$5.880 usada pedida, preço de lista $1.999):** 32 GB de VRAM GDDR7, 575 W, aproximadamente 160 tok/s em 7B e 45 tok/s em 70B Q4. A capacidade de 32 GB é o argumento central — é a única placa de consumo que executa um modelo 70B em Q4 sem uma segunda GPU. Os preços pedidos subiram cerca de 64% entre agosto e outubro, e os anúncios de usadas ficam acima dos de novas.',
          '**Por que comprar nesta faixa:** você precisa de modelos 33B ou 70B, executa inferência em lote, ou quer uma placa que não precise ser substituída por anos.',
          '**Por que pular esta faixa:** para modelos 7B–14B é exagero — a faixa alta entrega respostas instantâneas nesses tamanhos por menos da metade do preço e do consumo de energia.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'A RTX 5090 consome 575 W sozinha. Combine-a com uma fonte de alimentação de 850–1000 W — uma unidade de 750 W vai afundar sob carga. Inclua a atualização da fonte no orçamento de compra, não como uma reflexão tardia.',
          },
          {
            type: 'note',
            text: 'Antes do aumento de 2026, duas RTX 4090 usadas eram mais baratas que uma RTX 5090. Com os preços pedidos de outubro, de ~$2.083–2.800 por RTX 4090, um par custa aproximadamente o mesmo que uma única RTX 5090 (~$4.921), então a placa única é a configuração de 70B mais simples.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'Ver preço da RTX 4090 na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**Modelos 70B — 39–42 GB em Q4:** precisam de uma RTX 5090 32 GB no limite, ou de uma configuração de GPU dupla. Uma única placa de 24 GB não consegue acomodar um modelo 70B em Q4.',
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
          '**Os preços de GPU subiram acentuadamente em 2026 devido a uma escassez de memória, empurrando as placas de consumo de 1,5 a 2,5 vezes acima do preço de lista original.** Isso muda o cálculo de compra, então planeje em torno disso em vez de em torno dos preços de lançamento.',
        items: [
          '**A causa é a memória, não as GPUs.** Uma escassez de fornecimento de GDDR e HBM elevou o custo de cada placa com memória rápida — e as GPUs capazes de LLMs são exatamente as placas de alta VRAM mais afetadas.',
          '**A RTX 5090 é o exemplo mais claro:** preço de lançamento de $1.999, mas ~$4.921 nos pisos de preço pedido em outubro — cerca de 2,5 vezes, e 64% a mais desde agosto.',
          '**As placas de gama baixa subiram menos, mas subiram.** A RTX 5060 Ti 16 GB é anunciada cerca de 44% acima do preço de lista de $429 e a RTX 5070 Ti cerca de 35% acima de $749; o aumento escala com a quantidade de memória rápida que uma placa carrega.',
          '**Usada já não é automaticamente mais barata.** Nos dados de preços pedidos de outubro, os anúncios de RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti e RTX 5070 Ti usadas ficaram no mesmo patamar ou acima dos de novas, e a RTX 3060 12 GB usada subiu cerca de 31% desde agosto. Compare as duas e prefira vendedores com política de devolução.',
          '**Não conte com uma renovação da linha.** As RTX 50 Super da NVIDIA foram noticiadas como adiadas por tempo indeterminado por causa da escassez de memória (a NVIDIA não confirmou). **Decisão:** se você pode esperar, observe se a escassez diminui; se não pode, compre a menor placa que se encaixe no seu modelo alvo.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Os preços de GPU em 2026 estão de 1,5 a 2,5 vezes acima do preço de lista devido a uma escassez de chips de memória, então um comprador de LLMs locais deve comparar os preços de novas e usadas e comprar a menor placa que se encaixe no modelo alvo.',
          },
          {
            type: 'plain-terms',
            text: 'As placas não melhoraram — a memória dentro delas ficou escassa e cara. Até isso mudar, trate o preço de lista como um número histórico, compare novas e usadas e não pague por mais VRAM do que seu modelo realmente precisa.',
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
          '**2. Qual é o seu teto de orçamento absoluto?** Abaixo de ~$400: RTX 3060 12 GB. Abaixo de ~$650: RTX 5060 Ti 16 GB ou uma RTX 4060 Ti 16 GB usada. ~$900–1.200: RTX 4070 Ti Super, RTX 5070 Ti ou RTX 4080 Super. $2.080+: RTX 4090 ou RTX 5090.',
          '**3. NVIDIA ou AMD?** Escolha NVIDIA a menos que você já tenha hardware AMD ou encontre um desconto acentuado na RX 7800 XT — o CUDA elimina horas de configuração ROCm.',
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
          '**Os preços de GPU variam por região — os preços nos EUA costumam ser os mais baixos, os preços na UE incluem IVA, e o aumento de 2026 afetou todos os mercados.** Os links abaixo são links simples de pesquisa de produtos por região; não carregam tags de afiliado e não geram comissão.',
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
            priceRange: '320-4900',
            label: 'Ver GPUs na Amazon EUA',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'GPUs para LLMs locais (Alemanha)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Ver GPUs na Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'GPUs para LLMs locais (França)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Ver GPUs na Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'GPUs para LLMs locais (Japão)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**Ignorar os requisitos da fonte de alimentação.** Uma RTX 5090 consome 575 W e precisa de uma fonte de 850–1000 W. Uma placa que falha sob carga é pior do que uma placa mais lenta que funciona de forma estável.',
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
          '[Especificações NVIDIA GeForce RTX 5090](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — Cifras oficiais de 32 GB de VRAM GDDR7 e 575 W de consumo para a RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — menores preços pedidos nos EUA, novos e usados, em 11 de outubro de 2026 versus 8 de agosto de 2026, usados para todos os preços deste guia (preços pedidos, não vendas concluídas).',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — preço de lista versus preço de rua da RTX 5090, RTX 5070 Ti e RTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — reportagem (não confirmada pela NVIDIA) de que a renovação RTX 50 Super foi adiada por causa do fornecimento de memória.',
          '[Especificações AMD Radeon](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Cifras oficiais de VRAM e consumo para a RX 7800 XT e RX 6700 XT.',
          '[Melhores GPUs para LLMs locais 2026](/local-llms/best-gpus-for-local-llms) — Testes de hardware do PromptQuorum: velocidades de inferência medidas de 7B Q4 para a RTX 3060, 4080, 4090 e 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é a GPU mais barata para inferência de LLM em 2026?',
            a: 'A NVIDIA RTX 3060 12 GB, por cerca de $320–400, é a GPU mais barata que executa bem a inferência de LLMs locais. Seus 12 GB de VRAM acomodam qualquer modelo 7B e a maioria dos modelos 13B em quantização Q4, a 15–20 tokens por segundo. Uma RX 6700 XT pode sair mais barata no mercado de usados, mas é mais lenta e requer configuração AMD ROCm. Os preços da RTX 3060 nova e usada agora são próximos, então compare as duas.',
          },
          {
            q: 'Por que os preços de GPU estão tão altos em 2026?',
            a: 'Uma escassez de chips de memória impulsionou o aumento de preços de GPU de 2026. O fornecimento de GDDR e HBM ficou restrito, elevando o custo de cada placa gráfica com memória rápida, e as placas de alta VRAM capazes de LLMs foram as mais afetadas. A maioria das placas é vendida de 1,5 a 2,5 vezes acima do preço de lista original — uma RTX 5090 foi lançada a $1.999, mas é anunciada perto de $4.900 em outubro. As placas usadas já não escapam do aumento.',
          },
          {
            q: 'Quais são os requisitos de GPU para executar um LLM local?',
            a: 'Na quantização Q4_K_M, planeje aproximadamente 0,6 GB de VRAM por bilhão de parâmetros mais 2–4 GB de sobrecarga. Isso significa 8–9 GB para modelos 7B, 11–13 GB para 14B, 19–22 GB para 33B e 39–42 GB para 70B. Uma placa de 12 GB cobre 7B confortavelmente, uma placa de 16 GB cobre 14B, e o 70B precisa de uma RTX 5090 32 GB ou de uma configuração de GPU dupla.',
          },
          {
            q: 'Qual placa de vídeo é a melhor para LLMs locais?',
            a: 'A melhor placa de vídeo para LLMs locais é aquela com VRAM suficiente para o seu modelo alvo dentro do seu orçamento. Para modelos 7B, uma RTX 3060 12 GB (~$320–400) é suficiente. Para modelos 14B, uma RTX 5060 Ti 16 GB (~$618) ou uma RTX 4060 Ti 16 GB usada é a escolha intermediária. Para modelos 33B você precisa de uma RTX 4090 24 GB, e para 70B em uma única placa, de uma RTX 5090 32 GB. As placas NVIDIA são a escolha de menor atrito porque o CUDA funciona sem configuração extra.',
          },
          {
            q: 'A RTX 4060 Ti 16 GB é mais rápida que a versão de 8 GB?',
            a: 'Não. A RTX 4060 Ti de 16 GB e 8 GB usa o mesmo die de GPU, então a velocidade de inferência por token é similar — aproximadamente 20–25 tokens por segundo em modelos 7B. A versão de 16 GB compra capacidade, permitindo executar modelos 14B que não cabem em 8 GB. Compre-a pela VRAM, não pela velocidade.',
          },
          {
            q: 'Devo comprar NVIDIA ou AMD para LLMs locais?',
            a: 'Compre NVIDIA a menos que você já tenha hardware AMD ou encontre um desconto considerável. O CUDA da NVIDIA funciona imediatamente com Ollama, LM Studio e llama.cpp. As placas AMD como a RX 6700 XT e RX 7800 XT oferecem VRAM competitiva por dólar, mas a configuração ROCm normalmente custa várias horas no Linux.',
          },
          {
            q: 'Uma única GPU consegue executar um modelo 70B?',
            a: 'Apenas a RTX 5090 32 GB, e apenas com quantização Q4, onde um modelo 70B precisa de aproximadamente 39–42 GB — o que significa quantização agressiva ou descarga parcial. Uma RTX 4090 de 24 GB não consegue acomodar um modelo 70B em Q4 sozinha; a solução comum é duas RTX 4090 para VRAM combinada, embora, com os preços pedidos de outubro, esse par custe aproximadamente o mesmo que uma única RTX 5090.',
          },
          {
            q: 'A RTX 5090 vale a pena em relação à RTX 4090 para LLMs locais?',
            a: 'Apenas se você precisar especificamente executar modelos 70B em uma única placa. A RTX 5090 tem 32 GB de VRAM versus os 24 GB da RTX 4090, que é o fator decisivo. Para modelos 7B–33B, a RTX 4090 acomoda os mesmos modelos; com os preços pedidos de outubro, a RTX 5090 custa aproximadamente 1,8–2,4x uma RTX 4090, então só pague por ela se os 8 GB extras resolverem um problema real.',
          },
          {
            q: 'Qual fonte de alimentação preciso para essas GPUs?',
            a: 'Combine a fonte com a faixa: uma unidade de 550 W serve para a RTX 3060, 650–750 W serve para a RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super e RTX 5070 Ti, 850 W serve para a RTX 4090, e são necessários 850–1000 W para a RTX 5090, que consome 575 W sozinha. Fontes de alimentação subdimensionadas causam instabilidade sob carga.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Veja os requisitos completos de VRAM para cada tamanho de modelo](/local-llms/how-much-vram-local-llm) — o método completo de VRAM por tamanho de modelo por trás da fórmula rápida neste guia.',
          '[Compare mais de 15 GPUs com benchmarks medidos de LLMs locais](/local-llms/best-gpus-for-local-llms) — o conjunto mais amplo de benchmarks de GPU, incluindo placas mais antigas e de servidor além dessas dez.',
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
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: 'أفضل بطاقة رسومات لتشغيل النماذج اللغوية المحلية: دليل شراء GPU 2026',
    seoTitle: 'أفضل بطاقة رسومات لـ LLM المحلية 2026: من الاقتصادية إلى RTX 5090',
    intro:
      'تُحسِّن معظم النصائح المتعلقة ببطاقات الرسومات للنماذج اللغوية المحلية الرقم الخاطئ. سرعة الرموز في الثانية تحدد مدى سرعة استجابة النموذج، لكن VRAM تحدد ما إذا كان النموذج يُشغَّل أصلاً — ونموذج لا يناسب الذاكرة أبطأ من نموذج يناسبها بما لا يُقاس. يقارن هذا الدليل عشر بطاقات رسومات استهلاكية في أربع فئات سعرية من حيث الأرقام التي تُحدد الشراء فعلاً: سعة VRAM وسرعة الاستدلال واستهلاك الطاقة والسعر. تحذير بشأن الأسعار: ارتفعت أسعار بطاقات GPU بشكل حاد في 2026 بسبب نقص الذاكرة — فبطاقة RTX 5090 تُعرض الآن بنحو 2.5 ضعف سعر قائمتها (MSRP) — لذا فكل سعر هنا هو لقطة لأسعار العرض في السوق الأمريكية؛ تأكد من السعر الحالي قبل الشراء.',
    metaDescription:
      'أي بطاقة رسومات لنماذج LLM المحلية؟ مقارنة عشر بطاقات GPU من حيث VRAM والسرعة والطاقة وأسعار 2026، من الأرخص إلى RTX 5090، مع متطلبات GPU لكل حجم نموذج.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ar.webp',
    twitterDescription:
      'RTX 3060 وRX 6700 XT وRTX 4060 Ti 16GB وRTX 5060 Ti 16GB وRX 7800 XT وRTX 4070 Ti Super وRTX 5070 Ti وRTX 4080 Super وRTX 4090 وRTX 5090 — عشر بطاقات رسومات وأربع ميزانيات وقاعدة واحدة: اشترِ بحسب VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**أفضل بطاقة رسومات للنماذج اللغوية المحلية هي التي تناسب VRAM نموذجك، لا الأسرع. RTX 3060 بـ12 جيجابايت تُشغّل أي نموذج 7B، وبطاقة 16 جيجابايت (RTX 5060 Ti أو RTX 4060 Ti أو RTX 5070 Ti) تتعامل مع نماذج 14B، وRTX 4090 بـ24 جيجابايت تتعامل مع نماذج 33B، وRTX 5090 بـ32 جيجابايت هي البطاقة الاستهلاكية الفردية الوحيدة لعمل 70B.**',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل بطاقة رسومات لتشغيل النماذج اللغوية المحلية في 2026؟',
        answer:
          'اشترِ بحسب VRAM أولاً ثم بحسب السرعة. RTX 3060 بـ12 جيجابايت (نحو 320–400 دولار) هي الخيار الاقتصادي وتُشغّل أي نموذج 7B. أما بطاقة 16 جيجابايت فهي الخيار المتوسط لنماذج 14B — RTX 5060 Ti 16 GB (نحو 620 دولاراً جديدة) أو RTX 4060 Ti 16 GB مستعملة (نحو 380–490 دولاراً). RTX 4090 بـ24 جيجابايت تُشغّل نماذج 33B، وRTX 5090 بـ32 جيجابايت (نحو 4900 دولار) هي البطاقة الاستهلاكية الفردية الوحيدة لعمل 70B بدون إعداد GPU مزدوج. لاحظ أن أسعار 2026 أعلى بكثير من سعر القائمة.',
        bullets: [
          'اقتصادي: RTX 3060 12GB، نحو 320–400 دولار جديدة أو مستعملة، تُشغّل أي نموذج 7B بـ15–20 رمز/ثانية',
          'متوسط: RTX 5060 Ti 16GB، نحو 620 دولاراً جديدة (سعر القائمة 429 دولاراً)، تُشغّل نماذج 14B بهامش مريح',
          'متحمس: RTX 5090 32GB، نحو 4900 دولار، البطاقة الاستهلاكية الوحيدة لـ70B على GPU واحدة',
          'أسعار GPU في 2026 أعلى بـ1.5–2.5× من سعر القائمة — قارن الجديدة بالمستعملة قبل الشراء',
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
      { label: 'الفئة المتوسطة (380–720 دولاراً)', anchor: '#mid-tier' },
      { label: 'الفئة العالية (900–1200 دولار)', anchor: '#high-tier' },
      { label: 'فئة المتحمسين (2080 دولاراً+)', anchor: '#enthusiast-tier' },
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
          '**الأسعار ارتفعت بشكل حاد في 2026.** دفع نقص الذاكرة أسعار GPU إلى ما بين 1.5 و2.5 ضعف سعر القائمة — RTX 5090 تُعرض بنحو 4900 دولار لا سعر إطلاقها البالغ 1999 دولاراً، وارتفعت الأسعار مجدداً بين أغسطس وأكتوبر. تعامل مع كل سعر هنا كلقطة لأسعار العرض الأمريكية، وقارن الجديدة بالمستعملة قبل الشراء.',
          '**الاختيار الاقتصادي: NVIDIA RTX 3060 12 GB** (نحو 320–400 دولار، والجديدة والمستعملة تكلفان الآن تقريباً المبلغ نفسه) — تُشغّل أي نموذج 7B بـ15–20 رمز/ثانية ومعظم نماذج 13B بـQ4. أفضل نقطة دخول من حيث القيمة للنماذج اللغوية المحلية في 2026.',
          '**الاختيار المتوسط: NVIDIA RTX 5060 Ti 16 GB** (نحو 618 دولاراً جديدة، ونحو 649 دولاراً سعر عرض مستعملة) — 16 جيجابايت VRAM تتعامل مع نماذج 14B بهامش للسياق، وعرض نطاقها 448 GB/s أسرع بكثير من RTX 4060 Ti 16 GB الأقدم (نحو 380–490 دولاراً مستعملة)، التي أصبحت الآن شراءً من سوق المستعمل في الغالب.',
          '**الاختيار عالي الفئة: NVIDIA RTX 4080 Super 16 GB** (نحو 1200 دولار) — أسرع بطاقة 16 جيجابايت هنا. أما RTX 4070 Ti Super (نحو 900 دولار) وRTX 5070 Ti (نحو 1008 دولارات) فأرخص، وهما الأفضل قيمة إن قبلت سرعة أقل قليلاً.',
          '**اختيار المتحمسين: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — RTX 4090 (نحو 2083 دولاراً+ جديدة، ونحو 2800 دولار مستعملة) تُشغّل نماذج 33B؛ RTX 5090 (نحو 4900 دولار) هي البطاقة الاستهلاكية الفردية الوحيدة لنموذج 70B بـQ4 بدون إعداد GPU مزدوج.',
          '**AMD قابلة للتطبيق لكن تولّد احتكاكاً أكثر.** RX 6700 XT (12 جيجابايت) وRX 7800 XT (16 جيجابايت) تقدمان VRAM بأسعار تنافسية، لكن إعداد ROCm يضيف ساعات عمل مقارنةً بـCUDA من NVIDIA.',
          '**استهلاك الطاقة يتصاعد مع الفئة.** RTX 3060 تستهلك 170 واط؛ RTX 5090 تستهلك 575 واطاً وتحتاج إلى وحدة طاقة 850–1000 واط. أدرج وحدة الطاقة في الميزانية مع البطاقة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الفئة الاقتصادية (320–400 دولار):** RTX 3060 12GB أو RX 6700 XT 12GB — تُشغّل نماذج 7B ومعظم 13B.',
          '**الفئة المتوسطة (380–720 دولاراً):** RTX 5060 Ti 16GB أو RTX 4060 Ti 16GB أو RX 7800 XT 16GB — تُشغّل نماذج 14B براحة.',
          '**الفئة العالية (900–1200 دولار):** RTX 4080 Super أو RTX 5070 Ti أو RTX 4070 Ti Super، وكلها 16GB — استدلال سريع لنماذج 14B وعمل خفيف مع 22B.',
          '**فئة المتحمسين (2080 دولاراً+):** RTX 4090 24GB أو RTX 5090 32GB — نماذج 33B، و70B بـQ4 على 5090.',
          '**حسابة VRAM المرجعية بـQ4_K_M:** نحو 0.6 جيجابايت لكل مليار معامل، بالإضافة إلى 2–4 جيجابايت للسياق والأدوات.',
          '**نطاق استهلاك الطاقة:** RTX 3060 170 واط، RTX 4060 Ti 165 واط، RTX 5060 Ti 180 واط، RTX 4070 Ti Super 285 واط، RTX 5070 Ti 300 واط، RTX 4080 Super 320 واط، RTX 4090 450 واط، RTX 5090 575 واط.',
          '**واقع أسعار 2026:** دفع نقص الذاكرة الأسعار إلى 1.5–2.5× فوق سعر القائمة؛ لم تعد البطاقات المستعملة أرخص من الجديدة بشكل موثوق، لذا قارن الاثنتين.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'اختيار المحرر: RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**لمن يريد بطاقة تدوم ويمكنه تجاوز 1000 دولار، فإن NVIDIA RTX 4080 Super 16 GB هي الخيار الذي يوازن بين VRAM والسرعة والسعر.** تتعامل 16 جيجابايت VRAM فيها مع أي نموذج 14B بهامش للسياق، وهي أسرع بطاقة 16 جيجابايت هنا بنحو 120 رمز/ثانية، وبنحو 1200 دولار هي الخيار المميز في فئة 16 جيجابايت. تكلّف أكثر بنحو 300 دولار من RTX 4070 Ti Super (نحو 900 دولار) وبنحو 190 دولاراً من RTX 5070 Ti (نحو 1008 دولارات)، فإن كان السعر أهم من آخر 20–30% من السرعة فاختر إحداهما. وإن كانت ميزانيتك ثابتة تحت 700 دولار، فـRTX 5060 Ti 16 GB هي الخيار الأوفر قيمة. لا تنفق أكثر إلا إذا كنت تحتاج تحديداً نماذج 33B أو 70B.',
        callouts: [
          {
            type: 'note',
            text: 'اختيار المحرر يعكس نسبة السعر إلى القدرة فحسب. لا تشارك PromptQuorum في أي برنامج تابع والروابط التالية لا تحمل علامات تابعة — هي روابط مرجعية عادية لا تدرّ أي عمولة.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'ابحث عن سعر RTX 4080 Super على Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'ابحث عن سعر RTX 4080 Super على Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'كيف تتقارن البطاقات العشر للنماذج اللغوية المحلية في 2026؟',
        content:
          'أرقام VRAM والطاقة هي مواصفات المصنّع. سرعات الاستدلال لـRTX 3060 وRTX 4080 Super وRTX 4090 وRTX 5090 هي أرقام 7B Q4 مقاسة من اختبارات PromptQuorum للأجهزة؛ أما أرقام RTX 4060 Ti 16 GB وRTX 5060 Ti 16 GB وRX 7800 XT وRTX 4070 Ti Super وRTX 5070 Ti فهي تقديرات على مستوى العائلة. الأسعار هي أدنى أسعار العرض الأمريكية المرصودة في أكتوبر 2026 — دفع نقص الذاكرة بها إلى 1.5–2.5× فوق سعر القائمة، فأعد التحقق قبل الشراء.',
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
            'السرعة (7B Q4)': '15-20 tok/s',
            'الطاقة': '170 W',
            'السعر (أمريكا، 2026)': '$320-400 جديدة / $320-350 مستعملة',
            'الأنسب لـ': 'بداية اقتصادية — أي نموذج 7B',
          },
          {
            'وحدة GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'السرعة (7B Q4)': '10-14 tok/s',
            'الطاقة': '230 W',
            'السعر (أمريكا، 2026)': 'يختلف بحسب البائع — تحقق مباشرة',
            'الأنسب لـ': 'VRAM الأرخص، مع قبول إعداد AMD',
          },
          {
            'وحدة GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~20-25 tok/s',
            'الطاقة': '165 W',
            'السعر (أمريكا، 2026)': '~$550+ جديدة / $380-490 مستعملة',
            'الأنسب لـ': 'فئة متوسطة — نماذج 14B وطاقة منخفضة',
          },
          {
            'وحدة GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~65-75 tok/s (تقدير)',
            'الطاقة': '180 W',
            'السعر (أمريكا، 2026)': '$618 جديدة / $649 مستعملة',
            'الأنسب لـ': 'فئة متوسطة — 14B، الجيل الحالي',
          },
          {
            'وحدة GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~18-24 tok/s (تقدير)',
            'الطاقة': '263 W',
            'السعر (أمريكا، 2026)': '~$500-720 (المتتبعات تختلف)',
            'الأنسب لـ': '16 GB على AMD، مع قبول إعداد ROCm',
          },
          {
            'وحدة GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~80-90 tok/s (تقدير)',
            'الطاقة': '285 W',
            'السعر (أمريكا، 2026)': '$900 جديدة / $920 مستعملة',
            'الأنسب لـ': '14B سريع، استهلاك طاقة أقل',
          },
          {
            'وحدة GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~100-125 tok/s (تقدير)',
            'الطاقة': '300 W',
            'السعر (أمريكا، 2026)': '$1,008 جديدة / $1,050 مستعملة',
            'الأنسب لـ': '14B سريع، 16 GB بقيمة جيدة',
          },
          {
            'وحدة GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'السرعة (7B Q4)': '~120 tok/s',
            'الطاقة': '320 W',
            'السعر (أمريكا، 2026)': '$1,200 جديدة / $1,149 مستعملة',
            'الأنسب لـ': 'اختيار المحرر — أسرع 16 GB',
          },
          {
            'وحدة GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'السرعة (7B Q4)': '~150 tok/s',
            'الطاقة': '450 W',
            'السعر (أمريكا، 2026)': '~$2,083+ جديدة / $2,800 مستعملة',
            'الأنسب لـ': 'نماذج 33B، و70B بـGPU مزدوج',
          },
          {
            'وحدة GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'السرعة (7B Q4)': '~160 tok/s',
            'الطاقة': '575 W',
            'السعر (أمريكا، 2026)': '$4,921 جديدة / $5,880 مستعملة',
            'الأنسب لـ': '70B بـQ4 على GPU واحدة',
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
          { 'حالتك': 'أريد أرخص بطاقة تُشغّل النماذج وأقبل جهد الإعداد', 'اشترِ هذه': 'RX 6700 XT (إن وجدتها بسعر رخيص)' },
          { 'حالتك': 'أريد تشغيل نماذج 14B بميزانية طاقة محدودة', 'اشترِ هذه': 'RTX 5060 Ti 16 GB (أو RTX 4060 Ti 16 GB مستعملة)' },
          { 'حالتك': 'أريد بطاقة تُشغّل 14B بسرعة وتدوم سنوات', 'اشترِ هذه': 'RTX 5070 Ti أو RTX 4070 Ti Super 16 GB' },
          { 'حالتك': 'أريد أسرع بطاقة 16 GB والسعر ثانوي', 'اشترِ هذه': 'RTX 4080 Super 16 GB' },
          { 'حالتك': 'أحتاج نماذج 33B أو أخطط لبناء 70B بـGPU مزدوج لاحقاً', 'اشترِ هذه': 'RTX 4090 24 GB' },
          { 'حالتك': 'أحتاج بطاقة واحدة تُشغّل نماذج 70B بـQ4', 'اشترِ هذه': 'RTX 5090 32 GB' },
          { 'حالتك': 'لست متأكداً وأريد أأمن أول بطاقة', 'اشترِ هذه': 'RTX 3060 12 GB — وطوّر لاحقاً إن تجاوزتها' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'الفئة الاقتصادية (320–400 دولار): RTX 3060 12GB وRX 6700 XT',
        content:
          '**تُشغّل الفئة الاقتصادية أي نموذج 7B ومعظم نماذج 13B — ولمعظم مستخدمي النماذج المحلية لأول مرة، هذه هي القدرة التي يحتاجونها.** RTX 3060 12GB هي الاختيار الموصى به؛ وRX 6700 XT بديل أرخص إن قبلت احتكاك إعداد AMD. ارتفعت أسعار هذه الفئة طوال 2026، وأصبحت RTX 3060 المستعملة تكلّف تقريباً مثل الجديدة — فقارن الاثنتين.',
        items: [
          '**RTX 3060 12GB (نحو 320–400 دولار جديدة، ونحو 320–350 دولاراً مستعملة):** 12 جيجابايت VRAM و170 واط و15–20 رمز/ثانية على نماذج 7B بـQ4. تُشغّل Mistral Small وQwen3 8B وDeepSeek-R1 7B ومعظم نماذج 13B. إصدار 12 جيجابايت هو الذي يجب شراؤه — تجنب إصدار 6 جيجابايت المحدود بنماذج 3B. المخزون الجديد محدود والبطاقة المستعملة لم تعد توفّر الكثير، فاشترِ الأرخص منهما مع فترة إرجاع.',
          '**RX 6700 XT (مستعملة، السعر يختلف بحسب البائع):** 12 جيجابايت VRAM و230 واط و10–14 رمز/ثانية على نماذج 7B. توقف إنتاجها جديدة ولم تعد بالضرورة أرخص طريق للدخول — تحقق من العروض الحالية — وهي أبطأ من RTX 3060 وتعتمد على AMD ROCm الذي يضيف وقتاً للإعداد.',
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
            text: 'RX 6700 XT هي أرخص بطاقة هنا، لكن خصص 3–5 ساعات لإعداد ROCm على Linux. إن كان الفرق في السعر عن RTX 3060 صغيراً، فاشترِ بطاقة NVIDIA.',
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
            priceRange: '320-700',
            label: 'ابحث عن سعر RX 6700 XT على Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'الفئة المتوسطة (380–720 دولاراً): RTX 5060 Ti 16GB وRTX 4060 Ti 16GB وRX 7800 XT',
        content:
          '**الفئة المتوسطة موجودة لسبب واحد: 16 جيجابايت VRAM تتسع لنماذج 14B التي لا تستطيع بطاقات 12 جيجابايت استيعابها مع سياق صالح للاستخدام.** إن كانت نماذج 14B هدفك، فهذه أرخص فئة تُشغّلها بشكل سليم. RTX 5060 Ti 16GB هي خيار الجيل الحالي، وRTX 4060 Ti 16GB المستعملة أرخص طريق للحصول على 16 جيجابايت.',
        items: [
          '**RTX 5060 Ti 16GB (نحو 618 دولاراً جديدة / نحو 649 دولاراً سعر عرض مستعملة، سعر القائمة 429 دولاراً):** 16 جيجابايت GDDR7 و180 واط وعرض نطاق ذاكرة 448 GB/s. لم تُقِس هذا الدليل أداءها بشكل مستقل؛ تضعها التقديرات المستقلة عند نحو 65–75 رمز/ثانية على 7B Q4 — أي نحو 3 أضعاف RTX 4060 Ti 16GB الأقدم. تُشغّل نماذج من فئة Qwen3 14B براحة. ارتفعت أسعارها نحو 44% فوق سعر القائمة في 2026.',
          '**RTX 4060 Ti 16GB (نحو 550 دولاراً+ جديدة وشحيحة / 380–490 دولاراً مستعملة):** 16 جيجابايت VRAM و165 واط ونحو 20–25 رمز/ثانية على نماذج 7B. تستخدم نفس رقاقة GPU لإصدار 8 جيجابايت من RTX 4060 Ti، لذا سرعة الرمز متشابهة — إصدار 16 جيجابايت يشتري السعة لا السرعة الخام. أصبحت الآن شراءً من سوق المستعمل في الغالب.',
          '**RX 7800 XT (نحو 500–720 دولاراً جديدة، والمتتبعات تختلف):** 16 جيجابايت VRAM و263 واط. لم تُقِس هذا الدليل أداءها بشكل مستقل؛ توقّع سرعة في نطاق RTX 4060 Ti، مع إعداد AMD ROCm كمقايضة.',
          '**لماذا تشتري هذه الفئة:** تريد نماذج 14B، أو تريد استهلاك طاقة منخفضاً (RTX 4060 Ti)، أو تريد 16 جيجابايت بأقل سعر ممكن.',
          '**لماذا تتجاوز هذه الفئة:** إن كانت نماذج 7B كافية، فالفئة الاقتصادية أرخص بـ200–300 دولار؛ وإن أردت استدلال 14B سريعاً، فالفئة العالية أسرع بوضوح.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16GB ترقية في السعة لا في السرعة مقارنةً بإصدار 8 جيجابايت — اشترِها لأنك تحتاج استيعاب نماذج 14B لا لأنك تتوقع رموزاً أكثر في الثانية. RTX 5060 Ti 16GB هي الخيار الأسرع إن كان فارق السعر مقبولاً.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'ابحث عن سعر RTX 5060 Ti 16GB على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'ابحث عن سعر RTX 4060 Ti 16GB على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16GB (نحو 1200 دولار جديدة / نحو 1149 دولاراً مستعملة):** 16 جيجابايت VRAM و320 واط ونحو 120 رمز/ثانية على نماذج 7B. اختيار المحرر — أسرع بطاقة 16 جيجابايت هنا، بعلاوة سعرية تبلغ نحو 190–300 دولار فوق البطاقتين التاليتين.',
          '**RTX 5070 Ti 16GB (نحو 1008 دولارات جديدة / نحو 1050 دولاراً سعر عرض مستعملة، سعر القائمة 749 دولاراً):** 16 جيجابايت GDDR7 و300 واط وعرض نطاق ذاكرة 896 GB/s. لم يُقَس أداؤها بشكل مستقل لهذا الدليل؛ تضعها التقديرات عند نحو 100–125 رمز/ثانية على 7B Q4، وتُشغّل 16 جيجابايت نموذج 24B بـQ4 بهامش مريح.',
          '**RTX 4070 Ti Super 16GB (نحو 900 دولار جديدة / نحو 920 دولاراً مستعملة):** 16 جيجابايت VRAM و285 واط ونحو 80–90 رمز/ثانية (تقدير). أرخص بطاقة جديدة في هذه الفئة، وبأقل استهلاك للطاقة بين الثلاث.',
          '**لماذا تشتري هذه الفئة:** تُشغّل نماذج 14B باستمرار وتريدها فورية، أو تقوم بعمل خفيف مع 22B وتريد هامشاً.',
          '**لماذا تتجاوز هذه الفئة:** إن كنت تحتاج نماذج 33B أو 70B فلن تتسع لها أي بطاقة 16 جيجابايت — انتقل إلى فئة المتحمسين بدل الإنفاق الزائد هنا.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'داخل هذه الفئة، RTX 4080 Super هي الأسرع، وRTX 4070 Ti Super هي الأرخص جديدة، وRTX 5070 Ti تقع بينهما سعراً بأحدث معمارية. إن لم تكن بحاجة إلى آخر 20–30% من السرعة، فاختر الأرخص من الاثنتين.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'ابحث عن سعر RTX 4080 Super على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'ابحث عن سعر RTX 5070 Ti على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'ابحث عن سعر RTX 4070 Ti Super على Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'فئة المتحمسين (2080 دولاراً+): RTX 4090 وRTX 5090',
        content:
          '**فئة المتحمسين هي الوحيدة التي تُشغّل نماذج أكبر من 22B — وRTX 5090 بـ32 جيجابايت هي البطاقة الاستهلاكية الفردية الوحيدة التي تتسع لنموذج 70B بـQ4.** اشترِ هنا من أجل سعة VRAM لا السرعة؛ فالسرعة أثر جانبي. ضربت موجة الارتفاع في 2026 هذه الفئة أشد من غيرها، لذا تتحرك الأسعار من أسبوع لآخر.',
        items: [
          '**RTX 4090 24GB (نحو 2083 دولاراً+ جديدة / نحو 2800 دولار سعر عرض مستعملة):** 24 جيجابايت VRAM و450 واط ونحو 150 رمز/ثانية على نماذج 7B و36 رمز/ثانية على نموذج 70B بـQ4. تُشغّل نماذج 33B براحة. المخزون الجديد من RTX 4090 شحيح وقد يكون أدنى سعر جديد مسجّلاً قديماً — تمتد العروض حتى نحو 3800 دولار.',
          '**RTX 5090 32GB (نحو 4921 دولاراً جديدة / نحو 5880 دولاراً سعر عرض مستعملة، سعر القائمة 1999 دولاراً):** 32 جيجابايت GDDR7 VRAM و575 واط ونحو 160 رمز/ثانية على 7B و45 رمز/ثانية على 70B بـQ4. السعة 32 جيجابايت هي العنوان — هي البطاقة الاستهلاكية الوحيدة التي تُشغّل نموذج 70B بـQ4 بدون GPU ثانية. ارتفعت أسعار العرض نحو 64% بين أغسطس وأكتوبر، وتقع عروض المستعملة فوق الجديدة.',
          '**لماذا تشتري هذه الفئة:** تحتاج نماذج 33B أو 70B، أو تُشغّل استدلالاً دفعياً، أو تريد بطاقة لا تحتاج استبدالاً لسنوات.',
          '**لماذا تتجاوز هذه الفئة:** لنماذج 7B–14B هي مبالغة — فالفئة العالية تقدم استجابات فورية لهذه الأحجام بأقل من نصف السعر واستهلاك الطاقة.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090 تستهلك 575 واطاً وحدها. اقرنها بوحدة طاقة 850–1000 واط — وحدة 750 واط ستتراخى تحت الحمل. أدرج ترقية وحدة الطاقة في الشراء لا كفكرة لاحقة.',
          },
          {
            type: 'note',
            text: 'قبل موجة 2026، كانت RTX 4090 مستعملتان أرخص من RTX 5090 واحدة. وبأسعار العرض في أكتوبر البالغة نحو 2083–2800 دولار لكل RTX 4090، يكلّف الزوج تقريباً مثل RTX 5090 واحدة (نحو 4921 دولاراً)، فتصبح البطاقة الواحدة أبسط لبناء 70B.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'ابحث عن سعر RTX 4090 على Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**نماذج 70B — 39–42 جيجابايت بـQ4:** تحتاج RTX 5090 بـ32 جيجابايت مضغوطة بشدة، أو بناء GPU مزدوج. بطاقة 24 جيجابايت واحدة لا تستوعب نموذج 70B بـQ4.',
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
          '**ارتفعت أسعار GPU بحدة في 2026 بسبب نقص الذاكرة، فدفعت البطاقات الاستهلاكية إلى 1.5–2.5 ضعف سعر قائمتها الأصلي.** يغيّر هذا حسابات الشراء، فخطط بناءً عليه لا على أسعار الإطلاق.',
        items: [
          '**السبب هو الذاكرة لا وحدات GPU.** أدى نقص إمدادات GDDR وHBM إلى رفع تكلفة كل بطاقة بذاكرة سريعة — وبطاقات GPU القادرة على النماذج اللغوية هي بالضبط البطاقات عالية VRAM الأكثر تأثراً.',
          '**RTX 5090 أوضح مثال:** سعر إطلاق 1999 دولاراً، لكن أدنى أسعار العرض نحو 4921 دولاراً في أكتوبر — نحو 2.5 ضعف، وبزيادة 64% منذ أغسطس.',
          '**البطاقات الأدنى ارتفعت أقل، لكنها ارتفعت.** تُعرض RTX 5060 Ti 16GB بنحو 44% فوق سعر قائمتها البالغ 429 دولاراً وRTX 5070 Ti بنحو 35% فوق 749 دولاراً؛ ويتناسب الارتفاع مع كمية الذاكرة السريعة في البطاقة.',
          '**المستعملة لم تعد أرخص تلقائياً.** في بيانات أسعار العرض لشهر أكتوبر، جاءت عروض RTX 5090 وRTX 4090 وRTX 4070 Ti Super وRTX 5060 Ti وRTX 5070 Ti المستعملة عند مستوى الجديدة أو فوقها، وارتفعت RTX 3060 12GB المستعملة نحو 31% منذ أغسطس. قارن الاثنتين وفضّل البائعين الذين يتيحون الإرجاع.',
          '**لا تعوّل على تحديث قريب.** أُفيد بأن بطاقات RTX 50 Super من NVIDIA مؤجلة إلى أجل غير مسمى بسبب نقص الذاكرة (لم تؤكد NVIDIA ذلك). **القرار:** إن استطعت الانتظار فراقب تراجع النقص؛ وإن لم تستطع فاشترِ أصغر بطاقة تناسب نموذجك المستهدف.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تبلغ أسعار GPU في 2026 نحو 1.5–2.5 ضعف سعر القائمة بسبب نقص رقائق الذاكرة، لذا ينبغي لمشتري النماذج اللغوية المحلية أن يقارن الأسعار الجديدة والمستعملة وأن يشتري أصغر بطاقة تناسب النموذج المستهدف.',
          },
          {
            type: 'plain-terms',
            text: 'البطاقات لم تتحسن — الذاكرة بداخلها هي التي شحّت وغلت. إلى أن يخف ذلك، عامل سعر القائمة كرقم تاريخي، وقارن الجديدة والمستعملة، ولا تدفع مقابل VRAM أكثر مما يحتاجه نموذجك فعلاً.',
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
          '**2. ما سقف ميزانيتك الصارم؟** أقل من نحو 400 دولار: RTX 3060 12 GB. أقل من نحو 650 دولاراً: RTX 5060 Ti 16 GB أو RTX 4060 Ti 16 GB مستعملة. نحو 900–1200 دولار: RTX 4070 Ti Super أو RTX 5070 Ti أو RTX 4080 Super. 2080 دولاراً+: RTX 4090 أو RTX 5090.',
          '**3. NVIDIA أم AMD؟** اختر NVIDIA ما لم تكن تملك أجهزة AMD بالفعل أو تجد خصماً كبيراً على RX 7800 XT — فـCUDA يوفر ساعات من إعداد ROCm.',
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
          '**تتفاوت أسعار GPU بين المناطق — الأسعار الأمريكية هي الأدنى عادةً، والأسعار الأوروبية تتضمن ضريبة القيمة المضافة، وقد أثّرت موجة 2026 في كل الأسواق.** الروابط أدناه روابط بحث عن المنتجات لكل منطقة، ولا تحمل علامات تابعة ولا تدرّ عمولة.',
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
            priceRange: '320-4900',
            label: 'تصفح بطاقات GPU على Amazon الأمريكي',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'بطاقات GPU للنماذج اللغوية المحلية (ألمانيا)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'تصفح بطاقات GPU على Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'بطاقات GPU للنماذج اللغوية المحلية (فرنسا)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'تصفح بطاقات GPU على Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'بطاقات GPU للنماذج اللغوية المحلية (اليابان)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**تجاهل متطلبات وحدة الطاقة.** RTX 5090 تستهلك 575 واطاً وتحتاج وحدة طاقة 850–1000 واط. بطاقة تنطفئ تحت الحمل أسوأ من بطاقة أبطأ تعمل باستقرار.',
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
          '[NVIDIA GeForce RTX 5090 Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — أرقام رسمية لـVRAM بسعة 32 جيجابايت GDDR7 وطاقة 575 واط لبطاقة RTX 5090.',
          '[BuySellRAM — NVIDIA Consumer GPU Market Update](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — أدنى أسعار العرض الأمريكية للجديدة والمستعملة في 11 أكتوبر 2026 مقابل 8 أغسطس 2026، استُخدمت لكل سعر في هذا الدليل (أسعار عرض لا مبيعات مكتملة).',
          '[Capital & Compute — Nvidia RTX 50 Price Tracker](https://capitalandcompute.net/gpu-prices/nvidia/) — سعر القائمة مقابل سعر السوق لبطاقات RTX 5090 وRTX 5070 Ti وRTX 5060 Ti 16 GB.',
          '[Club386 — Nvidia indefinitely delays GeForce RTX 50 Super](https://www.club386.com/?p=129641) — تقرير (لم تؤكده NVIDIA) بتأجيل تحديث RTX 50 Super بسبب إمدادات الذاكرة.',
          '[AMD Radeon Specifications](https://www.amd.com/en/products/graphics/desktops/radeon.html) — أرقام رسمية لـVRAM والطاقة لبطاقتي RX 7800 XT وRX 6700 XT.',
          '[أفضل وحدات GPU للنماذج اللغوية المحلية 2026](/ar/local-llms/best-gpus-for-local-llms) — اختبارات PromptQuorum للأجهزة: سرعات استدلال 7B Q4 المقاسة لبطاقات RTX 3060 وRTX 4080 وRTX 4090 وRTX 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما أرخص GPU لاستدلال النماذج اللغوية في 2026؟',
            a: 'NVIDIA RTX 3060 12GB، بنحو 320–400 دولار، هي أرخص GPU تُشغّل استدلال النماذج اللغوية المحلية بشكل جيد. 12 جيجابايت VRAM فيها تتسع لأي نموذج 7B ومعظم نماذج 13B بتكمية Q4، بسرعة 15–20 رمزاً في الثانية. قد تكون RX 6700 XT أرخص في سوق المستعمل، لكنها أبطأ وتتطلب إعداد AMD ROCm. أسعار RTX 3060 الجديدة والمستعملة متقاربة الآن، فقارن الاثنتين.',
          },
          {
            q: 'لماذا أسعار GPU مرتفعة جداً في 2026؟',
            a: 'أدى نقص رقائق الذاكرة إلى ارتفاع أسعار GPU في 2026. تقلص إمداد GDDR وHBM مما رفع تكلفة كل بطاقة رسومات بذاكرة سريعة، وكانت البطاقات عالية VRAM القادرة على النماذج اللغوية الأكثر تأثراً. تُباع معظم البطاقات الآن بما بين 1.5 و2.5 ضعف سعر قائمتها الأصلي — أُطلقت RTX 5090 بـ1999 دولاراً لكنها تُعرض بنحو 4900 دولار في أكتوبر. ولم تعد البطاقات المستعملة بمنأى عن الارتفاع.',
          },
          {
            q: 'ما متطلبات GPU لتشغيل نموذج لغوي محلي؟',
            a: 'بتكمية Q4_K_M، خطط لنحو 0.6 جيجابايت VRAM لكل مليار معامل بالإضافة إلى 2–4 جيجابايت للأعباء. أي: 8–9 جيجابايت لنماذج 7B، و11–13 جيجابايت لـ14B، و19–22 جيجابايت لـ33B، و39–42 جيجابايت لـ70B. بطاقة 12 جيجابايت تغطي 7B براحة، وبطاقة 16 جيجابايت تغطي 14B، ونموذج 70B يحتاج RTX 5090 بـ32 جيجابايت أو بناء GPU مزدوج.',
          },
          {
            q: 'ما أفضل بطاقة رسومات للنماذج اللغوية المحلية؟',
            a: 'أفضل بطاقة رسومات للنماذج اللغوية المحلية هي التي تملك VRAM كافية لنموذجك المستهدف ضمن ميزانيتك. لنماذج 7B تكفي RTX 3060 12GB (نحو 320–400 دولار). ولنماذج 14B فإن RTX 5060 Ti 16GB (نحو 618 دولاراً) أو RTX 4060 Ti 16GB مستعملة هي الخيار المتوسط. ولنماذج 33B تحتاج RTX 4090 بـ24 جيجابايت، ولنموذج 70B على بطاقة واحدة RTX 5090 بـ32 جيجابايت. وبطاقات NVIDIA هي الخيار الأقل احتكاكاً لأن CUDA يعمل مباشرة دون إعداد.',
          },
          {
            q: 'هل RTX 4060 Ti 16GB أسرع من إصدار 8GB؟',
            a: 'لا. RTX 4060 Ti بـ16 جيجابايت وبـ8 جيجابايت تستخدمان رقاقة GPU نفسها، لذا سرعة الاستدلال لكل رمز متشابهة — نحو 20–25 رمزاً في الثانية على نماذج 7B. إصدار 16 جيجابايت يُضيف السعة، مما يتيح تشغيل نماذج 14B التي لا تناسب 8 جيجابايت. اشترِه لـVRAM، لا للسرعة.',
          },
          {
            q: 'هل أختار NVIDIA أم AMD للنماذج اللغوية المحلية؟',
            a: 'اختر NVIDIA ما لم تكن تملك أجهزة AMD بالفعل أو وجدت خصماً كبيراً. CUDA من NVIDIA يعمل فوراً مع Ollama وLM Studio وllama.cpp. بطاقات AMD كـRX 6700 XT وRX 7800 XT تقدم VRAM تنافسية مقابل الدولار، لكن إعداد ROCm يستغرق عادةً عدة ساعات في Linux.',
          },
          {
            q: 'هل GPU واحدة تستطيع تشغيل نموذج 70B؟',
            a: 'RTX 5090 32GB فحسب، وفقط بتكمية Q4، حيث يحتاج نموذج 70B إلى نحو 39–42 جيجابايت — أي تكمية عدوانية أو نقلاً جزئياً. RTX 4090 بـ24 جيجابايت لا تستطيع استيعاب نموذج 70B بـQ4 وحدها؛ الحل الشائع بطاقتا RTX 4090 للـVRAM المجمّعة، وإن كان هذا الزوج بأسعار العرض في أكتوبر يكلّف تقريباً مثل RTX 5090 واحدة.',
          },
          {
            q: 'هل تستحق RTX 5090 مقارنةً بـRTX 4090 للنماذج اللغوية المحلية؟',
            a: 'فقط إذا كنت تحتاج تحديداً تشغيل نماذج 70B على بطاقة واحدة. RTX 5090 لديها 32 جيجابايت VRAM مقابل 24 جيجابايت في RTX 4090، وهذا هو العامل الحاسم. لنماذج 7B–33B، تستوعب RTX 4090 النماذج نفسها؛ وبأسعار العرض في أكتوبر تكلّف RTX 5090 نحو 1.8–2.4 ضعف RTX 4090، فلا تدفع فيها إلا إذا كانت الجيجابايتات الثمانية الإضافية تحل مشكلة حقيقية.',
          },
          {
            q: 'ما وحدة الطاقة التي أحتاجها لهذه البطاقات؟',
            a: 'اجعل وحدة الطاقة تناسب الفئة: وحدة 550 واط تناسب RTX 3060، و650–750 واط تناسب RTX 4060 Ti وRTX 5060 Ti وRTX 4070 Ti Super وRTX 5070 Ti، و850 واط تناسب RTX 4090، ويلزم 850–1000 واط لـRTX 5090 التي تستهلك 575 واطاً وحدها. وحدات الطاقة الضعيفة تسبب عدم الاستقرار تحت الحمل.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[اطّلع على متطلبات VRAM الكاملة لكل حجم نموذج](/ar/local-llms/how-much-vram-local-llm) — الطريقة الكاملة لـVRAM حسب حجم النموذج وراء الصيغة السريعة في هذا الدليل.',
          '[قارن أكثر من 15 GPU ببيانات قياسية مقاسة للنماذج اللغوية المحلية](/ar/local-llms/best-gpus-for-local-llms) — المجموعة الأوسع من البيانات القياسية بما فيها البطاقات الأقدم وبطاقات الخادم خارج هذه البطاقات العشر.',
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
      description: 'عشر بطاقات رسومات مقارَنة للنماذج اللغوية المحلية في أربع ميزانيات: من RTX 3060 إلى RTX 5090. VRAM والسرعة واستهلاك الطاقة وأسعار 2026، مع متطلبات GPU لكل حجم نموذج.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-22',
      dateModified: '2026-10-19',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Overview & Reference',
    title: '로컬 LLM용 최고의 그래픽카드: 2026년 GPU 구매 가이드',
    seoTitle: '로컬 LLM 그래픽카드 추천 2026: 보급형부터 RTX 5090까지',
    intro:
      '로컬 LLM용 GPU 관련 조언의 대부분은 잘못된 수치를 최적화하고 있습니다. 초당 토큰 속도는 모델이 얼마나 빠르게 응답하는지를 결정하지만, VRAM은 모델이 실행될 수 있는지 여부를 결정합니다. 메모리에 맞지 않는 모델은 맞는 모델보다 무한히 느립니다. 이 가이드는 실제 구매 결정을 좌우하는 수치인 VRAM 용량, 추론 속도, 전력 소비, 가격에 따라 네 가지 가격대에서 10종의 소비자용 그래픽카드를 비교합니다. 가격에 관한 주의 사항: 2026년에는 메모리 공급 부족으로 GPU 가격이 급등하여 RTX 5090은 현재 출시 가격의 약 2.5배에 판매되고 있습니다. 따라서 여기의 모든 가격은 미국 호가를 기준으로 한 스냅샷이며, 구매 전 현재 가격을 반드시 확인하십시오.',
    metaDescription:
      '로컬 LLM용 그래픽카드 추천: GPU 10종을 VRAM, 속도, 전력, 2026년 가격으로 비교. 최저가 모델부터 RTX 5090까지, 모델 크기별 GPU 요구 사양 포함.',
    heroImage: '/images/best-gpu-buying-guide-local-llm-2026-comparison-hero-ko.webp',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RTX 5060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti, RTX 4080 Super, RTX 4090, RTX 5090 — 10종의 그래픽카드, 4가지 예산, 하나의 규칙: VRAM으로 구매하십시오.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral Small',
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
      '**로컬 LLM용 최고의 그래픽카드는 가장 빠른 카드가 아니라 모델에 맞는 VRAM을 갖춘 카드입니다. RTX 3060 12 GB는 7B 모델을 실행하고, 16 GB 카드(RTX 5060 Ti, RTX 4060 Ti 또는 RTX 5070 Ti)는 14B 모델을 처리하며, RTX 4090 24 GB는 33B 모델을 처리하고, RTX 5090 32 GB는 70B 작업을 위한 유일한 단일 소비자용 카드입니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년 로컬 LLM 실행에 가장 좋은 그래픽카드는 무엇입니까?',
        answer:
          'VRAM 기준으로 먼저 구매하고, 그 다음 속도를 고려하십시오. RTX 3060 12 GB (~$320-400)는 보급형 선택지로 7B 모델을 실행합니다. 16 GB 카드는 14B 모델을 위한 중급 선택지로, RTX 5060 Ti 16 GB (신품 ~$620) 또는 중고 RTX 4060 Ti 16 GB (~$380-490)가 있습니다. RTX 4090 24 GB는 33B 모델을 실행하고, RTX 5090 32 GB (~$4,900)는 이중 GPU 구성 없이 70B 작업을 처리할 수 있는 유일한 단일 소비자용 카드입니다. 2026년 가격은 출시 가격을 크게 상회하고 있음을 유의하십시오.',
        bullets: [
          '보급형: RTX 3060 12 GB, 신품·중고 모두 ~$320-400, 7B 모델을 15-20 토큰/초로 실행',
          '중급형: RTX 5060 Ti 16 GB, 신품 ~$620 (출시 가격 $429), 여유 있게 14B 모델 실행 가능',
          '고급형: RTX 5090 32 GB, ~$4,900, 단일 GPU로 70B를 실행할 수 있는 유일한 소비자용 카드',
          '2026년 GPU 가격은 출시 가격의 1.5~2.5배 — 구매 전 신품과 중고를 비교하십시오',
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
      { label: '중급형 ($380-720)', anchor: '#mid-tier' },
      { label: '고급형 ($900-1200)', anchor: '#high-tier' },
      { label: '최고급형 ($2080+)', anchor: '#enthusiast-tier' },
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
          '**2026년에 가격이 급등했습니다.** 메모리 공급 부족으로 GPU 가격이 출시 가격보다 1.5~2.5배 상승했습니다. RTX 5090은 ~$4,900에 판매되고 있으며 출시 가격인 $1,999가 아니고, 8월과 10월 사이에 가격이 다시 올랐습니다. 여기의 모든 가격을 미국 호가 기준의 스냅샷으로 취급하고, 구매 전 신품과 중고를 비교하십시오.',
          '**보급형 추천: NVIDIA RTX 3060 12 GB** (~$320-400, 신품과 중고 가격이 이제 거의 같음) — 7B 모델을 15-20 토큰/초로 실행하고 Q4에서 대부분의 13B 모델도 처리합니다. 2026년 로컬 LLM 입문으로 최고의 가성비입니다.',
          '**중급형 추천: NVIDIA RTX 5060 Ti 16 GB** (신품 ~$618, 중고 호가 ~$649) — 16 GB VRAM으로 여유 있는 컨텍스트와 함께 14B 모델을 해결하며, 448 GB/s 메모리 대역폭은 구형 RTX 4060 Ti 16 GB (중고 ~$380-490)보다 훨씬 빠릅니다. RTX 4060 Ti 16 GB는 이제 대부분 중고 시장에서 구매하는 카드입니다.',
          '**고급형 추천: NVIDIA RTX 4080 Super 16 GB** (~$1,200) — 여기서 가장 빠른 16 GB 카드입니다. 속도가 약간 낮아도 괜찮다면 RTX 4070 Ti Super (~$900)와 RTX 5070 Ti (~$1,008)가 더 저렴하여 가성비가 더 좋습니다.',
          '**최고급형 추천: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — RTX 4090 (신품 ~$2,083 이상, 중고 ~$2,800)은 33B 모델을 실행하고, RTX 5090 (~$4,900)은 이중 GPU 구성 없이 Q4에서 70B 모델을 수용하는 유일한 단일 소비자용 카드입니다.',
          '**AMD는 실행 가능하지만 설정 작업이 더 많습니다.** RX 6700 XT (12 GB)와 RX 7800 XT (16 GB)는 경쟁력 있는 가격에 VRAM을 제공하지만, ROCm 설정이 NVIDIA CUDA에 비해 몇 시간이 더 걸립니다.',
          '**전력 소비는 등급에 따라 증가합니다.** RTX 3060은 170 W를 사용하고, RTX 5090은 575 W를 사용하며 850-1000 W 파워 서플라이가 필요합니다. 카드 가격과 함께 파워 서플라이 비용도 예산에 포함하십시오.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**보급형 ($320-400):** RTX 3060 12 GB 또는 RX 6700 XT 12 GB — 7B 모델과 대부분의 13B 모델을 실행합니다.',
          '**중급형 ($380-720):** RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB 또는 RX 7800 XT 16 GB — 14B 모델을 편안하게 실행합니다.',
          '**고급형 ($900-1,200):** RTX 4080 Super, RTX 5070 Ti 또는 RTX 4070 Ti Super (모두 16 GB) — 14B 추론 고속화, 22B 경량 작업 가능.',
          '**최고급형 ($2,080+):** RTX 4090 24 GB 또는 RTX 5090 32 GB — 33B 모델, RTX 5090에서 Q4로 70B도 가능.',
          '**Q4_K_M VRAM 기본 규칙:** 파라미터 10억 개당 약 0.6 GB, 여기에 컨텍스트와 도구를 위한 2-4 GB 추가.',
          '**전력 소비 범위:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 5060 Ti 180 W, RTX 4070 Ti Super 285 W, RTX 5070 Ti 300 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**2026년 가격 현실:** 메모리 공급 부족으로 가격이 출시 가격의 1.5~2.5배 상승했으며, 중고 카드가 더 이상 신품보다 항상 저렴하지는 않으므로 둘 다 비교하십시오.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '편집자 추천: RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**$1,000 이상을 지출할 수 있고 오래 사용할 카드를 원하는 구매자에게 NVIDIA RTX 4080 Super 16 GB는 VRAM, 속도, 가격의 균형을 맞추는 선택입니다.** 16 GB VRAM으로 여유 있는 컨텍스트와 함께 14B 모델을 처리하고, 여기서 16 GB 카드 중 가장 빠른 약 120 토큰/초를 제공하며, ~$1,200에 판매되는 프리미엄 16 GB 선택입니다. RTX 4070 Ti Super (~$900)보다 약 $300, RTX 5070 Ti (~$1,008)보다 약 $190 더 비싸므로, 마지막 20-30%의 속도보다 가격이 더 중요하다면 이 둘 중 하나를 선택하십시오. 예산이 $700 이하로 고정되어 있다면, RTX 5060 Ti 16 GB가 가성비 선택입니다. 구체적으로 33B 또는 70B 모델이 필요한 경우에만 더 많이 지출하십시오.',
        callouts: [
          {
            type: 'note',
            text: '이 편집자 추천은 가격 대비 용량 비율만을 반영합니다. PromptQuorum은 어떠한 제휴 프로그램에도 등록되어 있지 않으며 아래 링크에는 제휴 태그가 없습니다 — 커미션이 발생하지 않는 단순 참조 링크입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Amazon에서 RTX 4080 Super 가격 보기',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Newegg에서 RTX 4080 Super 가격 보기',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026년 로컬 LLM용 10종 GPU 비교',
        content:
          'VRAM과 전력 소비 수치는 제조사 사양입니다. RTX 3060, RTX 4080 Super, RTX 4090, RTX 5090의 추론 속도는 PromptQuorum 하드웨어 테스트에서 측정된 7B Q4 값이며, RTX 4060 Ti 16 GB, RTX 5060 Ti 16 GB, RX 7800 XT, RTX 4070 Ti Super, RTX 5070 Ti의 수치는 제품군 수준 추정치입니다. 가격은 2026년 10월에 확인된 미국 최저 호가이며, 메모리 공급 부족으로 출시 가격의 1.5~2.5배에 판매되고 있으므로 구매 전 반드시 다시 확인하십시오.',
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
            '속도 (7B Q4)': '15-20 토큰/초',
            '전력 소비': '170 W',
            '가격 (미국, 2026)': '신품 $320-400 / 중고 $320-350',
            '적합 용도': '보급형 입문 — 7B 모델',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            '속도 (7B Q4)': '10-14 토큰/초',
            '전력 소비': '230 W',
            '가격 (미국, 2026)': '판매자별 상이 — 실시간 확인',
            '적합 용도': '저렴한 VRAM, AMD 설정 감수',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~20-25 토큰/초',
            '전력 소비': '165 W',
            '가격 (미국, 2026)': '신품 ~$550+ / 중고 $380-490',
            '적합 용도': '중급형 — 14B 모델, 저전력',
          },
          {
            'GPU': 'RTX 5060 Ti 16 GB',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~65-75 토큰/초 (추정)',
            '전력 소비': '180 W',
            '가격 (미국, 2026)': '신품 $618 / 중고 $649',
            '적합 용도': '중급형 — 14B, 최신 세대',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~18-24 토큰/초 (추정)',
            '전력 소비': '263 W',
            '가격 (미국, 2026)': '~$500-720 (추적 사이트별 상이)',
            '적합 용도': 'AMD에서 16 GB, ROCm 설정 감수',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~80-90 토큰/초 (추정)',
            '전력 소비': '285 W',
            '가격 (미국, 2026)': '신품 $900 / 중고 $920',
            '적합 용도': '14B 고속, 저전력 소비',
          },
          {
            'GPU': 'RTX 5070 Ti',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~100-125 토큰/초 (추정)',
            '전력 소비': '300 W',
            '가격 (미국, 2026)': '신품 $1,008 / 중고 $1,050',
            '적합 용도': '14B 고속, 가성비 16 GB',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            '속도 (7B Q4)': '~120 토큰/초',
            '전력 소비': '320 W',
            '가격 (미국, 2026)': '신품 $1,200 / 중고 $1,149',
            '적합 용도': '편집자 추천 — 가장 빠른 16 GB 카드',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            '속도 (7B Q4)': '~150 토큰/초',
            '전력 소비': '450 W',
            '가격 (미국, 2026)': '신품 ~$2,083+ / 중고 $2,800',
            '적합 용도': '33B 모델, 70B용 이중 GPU',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            '속도 (7B Q4)': '~160 토큰/초',
            '전력 소비': '575 W',
            '가격 (미국, 2026)': '신품 $4,921 / 중고 $5,880',
            '적합 용도': '단일 GPU로 Q4에서 70B 실행',
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
          { '상황': '설정 작업을 감수하고 LLM을 실행할 가장 저렴한 카드를 원합니다', '구매 권장': 'RX 6700 XT (저렴하게 구할 수 있다면)' },
          { '상황': '전력 예산이 타이트한 상태에서 14B 모델을 실행하고 싶습니다', '구매 권장': 'RTX 5060 Ti 16 GB (또는 중고 RTX 4060 Ti 16 GB)' },
          { '상황': '14B를 빠르게 실행하고 몇 년간 오래 쓸 카드를 원합니다', '구매 권장': 'RTX 5070 Ti 또는 RTX 4070 Ti Super 16 GB' },
          { '상황': '가장 빠른 16 GB 카드를 원하고 가격은 부차적입니다', '구매 권장': 'RTX 4080 Super 16 GB' },
          { '상황': '33B 모델이 필요하거나 70B용 이중 GPU 구성을 계획하고 있습니다', '구매 권장': 'RTX 4090 24 GB' },
          { '상황': '단일 카드로 Q4에서 70B 모델을 실행해야 합니다', '구매 권장': 'RTX 5090 32 GB' },
          { '상황': '확신이 없고 가장 안전한 첫 번째 GPU를 원합니다', '구매 권장': 'RTX 3060 12 GB — 나중에 필요하면 업그레이드하십시오' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '보급형 ($320-400): RTX 3060 12 GB와 RX 6700 XT',
        content:
          '**보급형은 7B 모델과 대부분의 13B 모델을 실행할 수 있습니다. 로컬 LLM 초보자 대부분에게는 이것으로 충분합니다.** RTX 3060 12 GB가 추천 선택이고, RX 6700 XT는 AMD 설정 작업을 감수할 경우 더 저렴한 대안입니다. 이 등급의 가격은 2026년 내내 올랐으며, 중고 RTX 3060은 이제 신품과 거의 같은 가격이므로 둘 다 비교하십시오.',
        items: [
          '**RTX 3060 12 GB (신품 ~$320-400, 중고 ~$320-350):** VRAM 12 GB, 170 W, Q4에서 7B 모델 15-20 토큰/초. Mistral Small, Qwen3 8B, DeepSeek-R1 7B, 대부분의 13B 모델을 실행합니다. 12 GB 버전을 구매하십시오 — 6 GB 버전은 3B 모델로 제한됩니다. 신품 재고가 제한적이고 중고로 구매해도 절약 폭이 크지 않으므로, 반품이 가능한 쪽 중 더 저렴한 것을 구매하십시오. (DeepSeek는 이후 오픈 웨이트 신세대 모델인 DeepSeek-V4—Flash/Pro—를 출시했습니다. R1/V3는 계속 로컬에서 사용할 수 있습니다.)',
          '**RX 6700 XT (중고, 판매자별 가격 상이):** VRAM 12 GB, 230 W, 7B 모델 10-14 토큰/초. 신품은 단종되었고 더 이상 항상 가장 저렴한 입문 방법은 아니므로 실시간 목록을 확인하십시오. RTX 3060보다 느리고 AMD ROCm 설정이 필요하여 설정 시간이 추가됩니다.',
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
            text: 'RX 6700 XT는 여기서 가장 저렴한 카드이지만, Linux에서 ROCm 설정에 3-5시간을 예산으로 잡으십시오. RTX 3060 대비 절약 폭이 작다면 NVIDIA 카드를 구매하십시오.',
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
            priceRange: '320-700',
            label: 'Amazon에서 RX 6700 XT 가격 보기',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '중급형 ($380-720): RTX 5060 Ti 16 GB, RTX 4060 Ti 16 GB와 RX 7800 XT',
        content:
          '**중급형이 존재하는 이유는 하나입니다: 16 GB VRAM이 12 GB 카드가 수용할 수 없는 14B 모델을 해결하기 때문입니다.** 14B급 모델이 목표라면 이것이 가장 저렴하게 올바르게 실행할 수 있는 등급입니다. RTX 5060 Ti 16 GB는 최신 세대 선택이고, 중고 RTX 4060 Ti 16 GB는 16 GB를 얻는 가장 저렴한 방법입니다.',
        items: [
          '**RTX 5060 Ti 16 GB (신품 ~$618 / 중고 호가 ~$649, 출시 가격 $429):** 16 GB GDDR7, 180 W, 448 GB/s 메모리 대역폭. 이 가이드를 위해 개별적으로 측정되지 않았습니다. 독립 추정치에 따르면 7B Q4에서 약 65-75 토큰/초로, 구형 RTX 4060 Ti 16 GB의 약 3배입니다. Qwen3 14B급 모델을 편안하게 실행합니다. 2026년에 가격이 출시 가격보다 약 44% 올랐습니다.',
          '**RTX 4060 Ti 16 GB (신품 ~$550+, 재고 부족 / 중고 $380-490):** VRAM 16 GB, 165 W, 7B 모델 약 20-25 토큰/초. 8 GB 버전과 동일한 GPU 다이를 사용하므로 토큰당 속도는 비슷합니다. 16 GB 버전은 용량을 구매하는 것이지 순수 속도를 구매하는 것이 아닙니다. 이제 대부분 중고 시장에서 구매하는 카드입니다.',
          '**RX 7800 XT (신품 ~$500-720, 추적 사이트별 상이):** VRAM 16 GB, 263 W. 이 가이드를 위해 개별적으로 측정되지 않았습니다. RTX 4060 Ti 범위의 속도를 예상하며, AMD ROCm 설정이 단점입니다.',
          '**이 등급을 선택하는 이유:** 14B 모델을 원하거나, 낮은 전력 소비를 원하거나 (RTX 4060 Ti), 가능한 가장 낮은 가격에 16 GB를 원합니다.',
          '**이 등급을 건너뛰는 이유:** 7B 모델로 충분하다면 보급형이 $200-300 더 저렴합니다. 14B의 빠른 추론을 원한다면 고급형이 훨씬 더 빠릅니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GB는 8 GB 버전에 비해 용량 업그레이드이지 속도 업그레이드가 아닙니다. 14B 모델을 수용해야 하기 때문에 구매하는 것이지, 초당 토큰이 더 많기를 기대하는 것이 아닙니다. 가격 차이를 감수할 수 있다면 RTX 5060 Ti 16 GB가 더 빠른 선택입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+5060+Ti+16GB',
            productName: 'NVIDIA RTX 5060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '618-761',
            label: 'Amazon에서 RTX 5060 Ti 16GB 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '380-550',
            label: 'Amazon에서 RTX 4060 Ti 16GB 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '500-720',
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
          '**RTX 4080 Super 16 GB (신품 ~$1,200 / 중고 ~$1,149):** VRAM 16 GB, 320 W, 7B 모델 약 120 토큰/초. 편집자 추천 — 여기서 가장 빠른 16 GB 카드이며, 아래 두 카드보다 약 $190-300의 프리미엄이 붙습니다.',
          '**RTX 5070 Ti 16 GB (신품 ~$1,008 / 중고 호가 ~$1,050, 출시 가격 $749):** 16 GB GDDR7, 300 W, 896 GB/s 메모리 대역폭. 이 가이드를 위해 개별적으로 측정되지 않았습니다. 추정치에 따르면 7B Q4에서 약 100-125 토큰/초이며, 16 GB로 24B Q4 모델을 여유 있게 실행합니다.',
          '**RTX 4070 Ti Super 16 GB (신품 ~$900 / 중고 ~$920):** VRAM 16 GB, 285 W, 약 80-90 토큰/초 (추정). 이 등급에서 가장 저렴한 신품 카드이며, 세 카드 중 전력 소비가 가장 낮습니다.',
          '**이 등급을 선택하는 이유:** 14B 모델을 지속적으로 실행하며 즉각적으로 원하거나, 경량 22B 작업을 수행하며 여유를 원합니다.',
          '**이 등급을 건너뛰는 이유:** 33B 또는 70B 모델이 필요하다면 어떤 16 GB 카드도 수용할 수 없습니다. 여기에 과다 지출하는 대신 최고급형으로 이동하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '이 등급에서 RTX 4080 Super는 가장 빠르고, RTX 4070 Ti Super는 신품 중 가장 저렴하며, RTX 5070 Ti는 가격이 그 사이에 있고 가장 최신 아키텍처를 갖추고 있습니다. 마지막 20-30%의 속도가 필요하지 않다면 더 저렴한 두 카드를 선택하십시오.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super+16GB',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1100-1200',
            label: 'Amazon에서 RTX 4080 Super 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5070+Ti+16GB',
            productName: 'NVIDIA RTX 5070 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '1008-1170',
            label: 'Amazon에서 RTX 5070 Ti 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '900-1179',
            label: 'Amazon에서 RTX 4070 Ti Super 가격 보기',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: '최고급형 ($2,080+): RTX 4090과 RTX 5090',
        content:
          '**최고급형만이 22B 이상의 모델을 실행할 수 있으며, RTX 5090 32 GB는 Q4에서 70B 모델을 수용하는 유일한 단일 소비자용 카드입니다.** 속도가 아닌 VRAM 용량을 위해 여기에서 구매하십시오. 속도는 부수적인 효과입니다. 2026년 가격 급등이 이 등급을 가장 크게 타격했으며, 가격은 주별로 변동됩니다.',
        items: [
          '**RTX 4090 24 GB (신품 ~$2,083 이상 / 중고 호가 ~$2,800):** VRAM 24 GB, 450 W, 7B 모델 약 150 토큰/초, 70B Q4 모델 36 토큰/초. 33B 모델을 편안하게 실행합니다. 신품 RTX 4090 재고는 얇고 신품 최저가는 오래된 값일 수 있으며, 목록 가격은 최대 ~$3,800까지 분포합니다.',
          '**RTX 5090 32 GB (신품 ~$4,921 / 중고 호가 ~$5,880, 출시 가격 $1,999):** VRAM 32 GB GDDR7, 575 W, 7B 모델 약 160 토큰/초, 70B Q4 45 토큰/초. 32 GB 용량이 핵심 논거입니다 — 두 번째 GPU 없이 Q4에서 70B 모델을 실행하는 유일한 소비자용 카드입니다. 호가는 8월과 10월 사이에 약 64% 올랐으며, 중고 목록이 신품 가격을 상회합니다.',
          '**이 등급을 선택하는 이유:** 33B 또는 70B 모델이 필요하거나, 배치 추론을 실행하거나, 몇 년간 교체 없이 사용할 카드를 원합니다.',
          '**이 등급을 건너뛰는 이유:** 7B-14B 모델에는 과도합니다 — 고급형은 해당 크기에서 즉각적인 응답을 제공하며 절반 미만의 가격과 전력 소비로 이용할 수 있습니다.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'RTX 5090은 단독으로 575 W를 소비합니다. 850-1000 W 파워 서플라이와 함께 사용하십시오 — 750 W 유닛은 부하 시 실패할 것입니다. 파워 서플라이 업그레이드를 나중에 추가할 사항이 아닌 구매 비용에 포함하십시오.',
          },
          {
            type: 'note',
            text: '2026년 가격 급등 이전에는 중고 RTX 4090 두 개가 RTX 5090 하나보다 저렴했습니다. 10월 호가 기준으로 RTX 4090 한 장당 ~$2,083-2,800이면 한 쌍은 단일 RTX 5090 (~$4,921)과 거의 같은 비용이므로, 단일 카드가 더 간단한 70B 구성입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2083-2800',
            label: 'Amazon에서 RTX 4090 가격 보기',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '4921-5880',
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
          '**70B 모델 — Q4에서 39-42 GB:** RTX 5090 32 GB가 한계에서 필요하거나 이중 GPU 구성이 필요합니다. 단일 24 GB 카드는 Q4에서 70B 모델을 수용할 수 없습니다.',
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
          '**2026년에 메모리 공급 부족으로 GPU 가격이 크게 상승하여 소비자용 카드가 원래 출시 가격보다 1.5~2.5배 높게 판매되고 있습니다.** 이로 인해 구매 계산이 달라지므로, 출시 가격이 아닌 현실적인 가격을 기준으로 계획하십시오.',
        items: [
          '**원인은 GPU가 아니라 메모리입니다.** GDDR과 HBM 공급 부족으로 빠른 메모리를 탑재한 모든 카드의 비용이 상승했습니다. LLM 가능 GPU는 정확히 가장 많이 타격 받은 고VRAM 카드들입니다.',
          '**RTX 5090이 가장 명확한 사례입니다:** 출시 가격 $1,999이지만 10월 호가 최저가는 ~$4,921입니다 — 약 2.5배이며 8월 이후 64% 올랐습니다.',
          '**저가형 카드는 덜 올랐지만 그래도 올랐습니다.** RTX 5060 Ti 16 GB는 출시 가격 $429보다 약 44%, RTX 5070 Ti는 $749보다 약 35% 높게 판매됩니다. 가격 급등은 카드가 탑재한 빠른 메모리 양에 비례합니다.',
          '**중고가 더 이상 자동으로 저렴하지는 않습니다.** 10월 호가 데이터에서 중고 RTX 5090, RTX 4090, RTX 4070 Ti Super, RTX 5060 Ti, RTX 5070 Ti 목록은 신품과 같거나 더 높았고, 중고 RTX 3060 12 GB는 8월 이후 약 31% 올랐습니다. 둘 다 비교하고 반품이 가능한 판매자를 선호하십시오.',
          '**갱신 제품을 기대하지 마십시오.** NVIDIA의 RTX 50 Super 카드는 메모리 부족으로 무기한 연기되었다고 보도되었습니다 (NVIDIA는 확인하지 않았습니다). **결정:** 기다릴 수 있다면 공급 부족이 완화되는지 지켜보십시오. 그렇지 않다면 목표 모델에 맞는 가장 작은 카드를 구매하십시오.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026년 GPU 가격은 메모리 칩 공급 부족으로 인해 출시 가격보다 1.5~2.5배 높으므로, 로컬 LLM 구매자는 신품과 중고 가격을 비교하고 목표 모델에 맞는 가장 작은 카드를 구매해야 합니다.',
          },
          {
            type: 'plain-terms',
            text: '카드가 개선된 것이 아닙니다 — 카드 내부의 메모리가 희귀하고 비싸졌습니다. 이것이 바뀔 때까지 출시 가격을 역사적 수치로 취급하고, 신품과 중고를 비교하며, 모델이 실제로 필요한 것보다 더 많은 VRAM을 위해 비용을 지불하지 마십시오.',
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
          '**2. 절대적인 예산 상한선은 얼마입니까?** ~$400 미만: RTX 3060 12 GB. ~$650 미만: RTX 5060 Ti 16 GB 또는 중고 RTX 4060 Ti 16 GB. ~$900-1,200: RTX 4070 Ti Super, RTX 5070 Ti 또는 RTX 4080 Super. $2,080+: RTX 4090 또는 RTX 5090.',
          '**3. NVIDIA입니까 AMD입니까?** 이미 AMD 하드웨어를 보유하고 있거나 RX 7800 XT에서 상당한 할인을 찾지 않는 한 NVIDIA를 선택하십시오 — CUDA는 ROCm 설정의 수시간을 절약합니다.',
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
          '**GPU 가격은 지역에 따라 다릅니다 — 미국 가격이 일반적으로 가장 낮고, EU 가격에는 VAT가 포함되며, 2026년 급등은 모든 시장에 영향을 미쳤습니다.** 아래 링크는 지역별 제품 검색 링크입니다. 제휴 태그가 없으며 커미션이 발생하지 않습니다.',
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
            priceRange: '320-4900',
            label: 'Amazon 미국에서 GPU 보기',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: '로컬 LLM용 GPU (독일)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Amazon.de에서 GPU 보기',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: '로컬 LLM용 GPU (프랑스)',
            productCategory: 'gpu',
            priceRange: '320-4900',
            label: 'Amazon.fr에서 GPU 보기',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: '로컬 LLM용 GPU (일본)',
            productCategory: 'gpu',
            priceRange: '320-4900',
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
          '**파워 서플라이 요구 사항 무시하기.** RTX 5090은 575 W를 소비하며 850-1000 W 파워 서플라이가 필요합니다. 부하 시 실패하는 카드는 느리게 실행되는 카드보다 나쁩니다.',
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
          '[NVIDIA GeForce RTX 5090 사양](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — RTX 5090의 공식 32 GB GDDR7 VRAM 및 575 W 전력 소비 수치.',
          '[BuySellRAM — NVIDIA 소비자용 GPU 시장 업데이트](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) — 2026년 10월 11일과 8월 8일의 미국 신품 및 중고 최저 호가로, 이 가이드의 모든 가격에 사용되었습니다 (완료된 거래가 아닌 호가).',
          '[Capital & Compute — Nvidia RTX 50 가격 추적기](https://capitalandcompute.net/gpu-prices/nvidia/) — RTX 5090, RTX 5070 Ti, RTX 5060 Ti 16 GB의 출시 가격 대비 실거래 가격.',
          '[Club386 — Nvidia, GeForce RTX 50 Super 무기한 연기](https://www.club386.com/?p=129641) — 메모리 공급 문제로 RTX 50 Super 갱신이 연기되었다는 보도 (NVIDIA는 확인하지 않음).',
          '[AMD Radeon 사양](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XT 및 RX 6700 XT의 공식 VRAM 및 전력 수치.',
          '[2026년 로컬 LLM 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms) — PromptQuorum 하드웨어 테스트: RTX 3060, 4080, 4090, 5090의 7B Q4 추론 속도 측정값.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '2026년 LLM 추론용으로 가장 저렴한 GPU는 무엇입니까?',
            a: '약 $320-400의 NVIDIA RTX 3060 12 GB가 로컬 LLM 추론을 잘 실행하는 가장 저렴한 GPU입니다. 12 GB VRAM으로 Q4 양자화에서 7B 모델과 대부분의 13B 모델을 초당 15-20 토큰으로 실행합니다. RX 6700 XT는 중고 시장에서 더 저렴할 수 있지만 더 느리고 AMD ROCm 설정이 필요합니다. 신품과 중고 RTX 3060 가격이 이제 가까우므로 둘 다 비교하십시오.',
          },
          {
            q: '2026년에 GPU 가격이 왜 이렇게 높습니까?',
            a: '메모리 칩 공급 부족이 2026년 GPU 가격 급등을 이끌었습니다. GDDR 및 HBM 공급이 타이트해져 빠른 메모리를 탑재한 모든 그래픽 카드의 비용이 상승했으며, LLM 가능 고VRAM 카드가 가장 많이 영향을 받았습니다. 대부분의 카드가 원래 출시 가격의 1.5~2.5배에 판매됩니다 — RTX 5090은 $1,999에 출시되었지만 10월에 ~$4,900에 올라와 있습니다. 중고 카드도 더 이상 가격 인상을 피하지 못합니다.',
          },
          {
            q: '로컬 LLM 실행에 필요한 GPU 요구 사양은 무엇입니까?',
            a: 'Q4_K_M 양자화에서 파라미터 10억 개당 약 0.6 GB VRAM에 오버헤드를 위한 2-4 GB를 계획하십시오. 즉, 7B 모델에 8-9 GB, 14B에 11-13 GB, 33B에 19-22 GB, 70B에 39-42 GB입니다. 12 GB 카드는 7B를 편안하게 커버하고, 16 GB 카드는 14B를 커버하며, 70B는 RTX 5090 32 GB나 이중 GPU 구성이 필요합니다.',
          },
          {
            q: '로컬 LLM에 가장 좋은 그래픽카드는 무엇입니까?',
            a: '로컬 LLM에 가장 좋은 그래픽카드는 예산 내에서 목표 모델에 충분한 VRAM을 갖춘 카드입니다. 7B 모델에는 RTX 3060 12 GB (~$320-400)로 충분합니다. 14B 모델에는 RTX 5060 Ti 16 GB (~$618) 또는 중고 RTX 4060 Ti 16 GB가 중급 선택입니다. 33B 모델에는 RTX 4090 24 GB가, 단일 카드 70B에는 RTX 5090 32 GB가 필요합니다. CUDA가 바로 작동하므로 NVIDIA 카드가 마찰이 가장 적은 선택입니다.',
          },
          {
            q: 'RTX 4060 Ti 16 GB가 8 GB 버전보다 빠릅니까?',
            a: '아니요. RTX 4060 Ti 16 GB와 8 GB는 동일한 GPU 다이를 사용하므로 토큰당 추론 속도는 비슷합니다 — 7B 모델에서 약 20-25 토큰/초. 16 GB 버전은 8 GB에 맞지 않는 14B 모델을 실행할 수 있는 용량을 제공합니다. 속도가 아닌 VRAM을 위해 구매하십시오.',
          },
          {
            q: '로컬 LLM용으로 NVIDIA와 AMD 중 무엇을 구매해야 합니까?',
            a: '이미 AMD 하드웨어를 보유하고 있거나 상당한 할인을 찾지 않는 한 NVIDIA를 구매하십시오. NVIDIA CUDA는 Ollama, LM Studio, llama.cpp와 즉시 작동합니다. RX 6700 XT 및 RX 7800 XT와 같은 AMD 카드는 경쟁력 있는 가격에 VRAM을 제공하지만, ROCm 설정은 Linux에서 보통 몇 시간이 소요됩니다.',
          },
          {
            q: '단일 GPU로 70B 모델을 실행할 수 있습니까?',
            a: 'RTX 5090 32 GB만 가능하며, Q4 양자화에서만 가능합니다. 70B 모델은 약 39-42 GB가 필요합니다 — 공격적인 양자화나 부분 오프로드가 필요합니다. RTX 4090 24 GB는 단독으로 Q4에서 70B 모델을 수용할 수 없습니다. 일반적인 해결책은 결합된 VRAM을 위해 두 개의 RTX 4090을 사용하는 것이지만 10월 호가 기준으로 그 쌍은 단일 RTX 5090과 거의 같은 비용입니다.',
          },
          {
            q: '로컬 LLM용으로 RTX 5090이 RTX 4090보다 가치가 있습니까?',
            a: '단일 카드로 70B 모델을 실행해야 하는 경우에만 해당됩니다. RTX 5090은 RTX 4090의 24 GB에 비해 32 GB VRAM을 가지며, 이것이 결정적 요소입니다. 7B-33B 모델의 경우 RTX 4090은 동일한 모델을 수용합니다. 10월 호가 기준으로 RTX 5090은 RTX 4090의 약 1.8-2.4배 비용이므로, 추가 8 GB가 실제 문제를 해결할 때만 비용을 지불하십시오.',
          },
          {
            q: '이 GPU들에 어떤 파워 서플라이가 필요합니까?',
            a: '등급에 맞게 파워 서플라이를 조정하십시오: RTX 3060에는 550 W 유닛이 적합하고, RTX 4060 Ti, RTX 5060 Ti, RTX 4070 Ti Super, RTX 5070 Ti에는 650-750 W, RTX 4090에는 850 W, RTX 5090에는 850-1000 W가 필요합니다 (단독으로 575 W 소비). 하향 과도한 파워 서플라이는 부하 시 불안정을 유발합니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기 자료',
        items: [
          '[각 모델 크기에 대한 전체 VRAM 요구 사항 확인](/ko/local-llms/how-much-vram-local-llm) — 이 가이드의 빠른 공식 뒤에 있는 모델 크기별 VRAM 전체 방법론.',
          '[측정된 로컬 LLM 벤치마크로 15개 이상의 GPU 비교](/ko/local-llms/best-gpus-for-local-llms) — 여기 10종을 넘어 구형 및 서버 카드를 포함한 더 광범위한 GPU 벤치마크 세트.',
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
      dateModified: '2026-10-19',
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
