// Power Local LLM — Best GPUs for Local LLMs: Complete Buying Guide 2026
// Slug: best-gpu-buying-guide-local-llm-2026
// Affiliate buying guide. Outbound product links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: May 2026 snapshot. GPU prices surged in 2026 on a memory shortage —
// cards run 1.5-2x above original MSRP. Figures sourced from Best Value GPU,
// Newegg, geizhals.de, LDLC, and kakaku.com.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'Best GPUs for Local LLMs: Complete Buying Guide 2026',
    seoTitle: 'Best GPU for Local LLMs 2026: Budget to RTX 5090 Guide',
    intro:
      'Most local-LLM GPU advice optimizes for the wrong number. Speed in tokens per second decides how fast a model answers, but VRAM decides whether the model runs at all — and a model that does not fit is infinitely slower than one that does. This guide compares eight consumer GPUs across four price tiers on the figures that actually bind a purchase: VRAM capacity, measured inference speed, power draw, and price. One caveat on price: GPU prices surged in 2026 on a memory shortage, and cards now sell 1.5-2x above original MSRP — every price here is a May 2026 snapshot, so confirm current pricing before you buy.',
    metaDescription:
      'Eight GPUs compared for local LLMs across four budgets: RTX 3060 to RTX 5090. VRAM, tokens/sec, power draw, and May 2026 prices — with the model size each tier runs.',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 4080 Super, RTX 4090, RTX 5090 — eight GPUs, four budgets, one decision rule: buy for VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral 7B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
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
    ],
    leadAnswerBlock:
      '**The best GPU for local LLMs is the one whose VRAM fits your model, not the fastest card. An RTX 3060 12 GB runs any 7B model, an RTX 4090 24 GB handles 33B models, and an RTX 5090 32 GB is the only single consumer card for 70B work.**',
    quickAnswerTop: {
      en: {
        question: 'What GPU should I buy for running local LLMs in 2026?',
        answer:
          'Buy for VRAM, then speed. A used RTX 3060 12 GB ($150-250) is the budget pick and runs any 7B model. An RTX 4060 Ti 16 GB (~$424) is the mid-tier pick for 14B models. An RTX 4090 24 GB runs 33B models, and an RTX 5090 32 GB is the only single consumer card that handles 70B work without a dual-GPU build. Note that 2026 prices run well above MSRP.',
        bullets: [
          'Budget: RTX 3060 12 GB, $150-250 used (~$350-680 new), runs every 7B model at 15-20 tok/s',
          'Mid: RTX 4060 Ti 16 GB, ~$424, runs 14B models with headroom',
          'Enthusiast: RTX 5090 32 GB, ~$3,949, the only consumer card for single-GPU 70B',
          '2026 GPU prices run 1.5-2x above MSRP — buy used where you can',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Editor\'s Choice', anchor: '#editors-choice' },
      { label: 'GPU Comparison Table', anchor: '#comparison-table' },
      { label: 'Which GPU Should You Buy?', anchor: '#which-gpu' },
      { label: 'Budget Tier ($130-680)', anchor: '#budget-tier' },
      { label: 'Mid Tier ($420-520)', anchor: '#mid-tier' },
      { label: 'High Tier ($1100-1200)', anchor: '#high-tier' },
      { label: 'Enthusiast Tier ($2480+)', anchor: '#enthusiast-tier' },
      { label: 'How Much VRAM Do You Need?', anchor: '#vram-needs' },
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
          '**Prices surged in 2026.** A memory shortage pushed GPU prices 1.5-2x above MSRP across every market — an RTX 5090 is ~$3,949, not its $1,999 launch price. Treat every price here as a May 2026 snapshot and lean on the used market.',
          '**Budget pick: NVIDIA RTX 3060 12 GB** ($150-250 used, $350-680 new) — runs every 7B model at 15-20 tok/s and most 13B models at Q4. The best value entry point for local LLMs in 2026.',
          '**Mid pick: NVIDIA RTX 4060 Ti 16 GB** (~$424 new, $290 used) — 16 GB of VRAM clears 14B models with context headroom, and it is the GPU closest to its MSRP, so the surge hit it least.',
          '**High pick: NVIDIA RTX 4080 Super 16 GB** (~$1,100-1,200) — the fastest 16 GB card, and after 2026 price moves it costs about the same as the slower RTX 4070 Ti Super ($1,179).',
          '**Enthusiast pick: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — the RTX 4090 ($2,480-2,755) runs 33B models; the RTX 5090 (~$3,949) is the only single consumer card that fits a 70B model at Q4 without a dual-GPU build.',
          '**AMD is viable but higher-friction.** The RX 6700 XT (12 GB) and RX 7800 XT (16 GB) deliver competitive VRAM per dollar, but ROCm setup adds hours of work versus NVIDIA CUDA.',
          '**Power draw scales with the tier.** An RTX 3060 draws 170 W; an RTX 5090 draws 575 W and needs an 850-1000 W power supply. Budget the power supply alongside the card.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Budget tier ($130-680):** RTX 3060 12 GB or RX 6700 XT 12 GB — runs 7B and most 13B models.',
          '**Mid tier ($420-520):** RTX 4060 Ti 16 GB or RX 7800 XT 16 GB — runs 14B models comfortably.',
          '**High tier ($1,100-1,200):** RTX 4080 Super 16 GB or RTX 4070 Ti Super 16 GB — fast 14B inference, light 22B work.',
          '**Enthusiast tier ($2,480+):** RTX 4090 24 GB or RTX 5090 32 GB — 33B models, and 70B at Q4 on the 5090.',
          '**VRAM rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**Power draw range:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 4070 Ti Super 285 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**2026 price reality:** a memory shortage pushed prices 1.5-2x above MSRP; the used market is often the better value.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**For buyers who want a card that lasts and can stretch past $1,000, the NVIDIA RTX 4080 Super 16 GB is the pick that balances VRAM, speed, and price.** Its 16 GB of VRAM clears every 14B model with context headroom, it is the fastest 16 GB card here at roughly 120 tok/s, and at ~$1,100-1,200 it costs about the same as the slower RTX 4070 Ti Super ($1,179) after 2026 price moves — making it the clear high-tier value. If your budget is fixed below $600, the RTX 4060 Ti 16 GB is the value pick — it was hit least by the 2026 surge. Spend more only if you specifically need 33B or 70B models.',
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
        title: 'How the Eight GPUs Compare for Local LLMs in 2026',
        content:
          'VRAM and power figures are manufacturer specifications. Inference speeds for the RTX 3060, RTX 4080 Super, RTX 4090, and RTX 5090 are measured 7B Q4 figures from PromptQuorum hardware testing; figures for the RTX 4060 Ti 16 GB, RX 7800 XT, and RTX 4070 Ti Super are family-level estimates. Prices are a May 2026 US snapshot — the 2026 memory shortage pushed them 1.5-2x above MSRP, so re-check before buying.',
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
        columns: ['GPU', 'VRAM', 'Speed (7B Q4)', 'Power', 'Price (May 2026)', 'Best for'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Speed (7B Q4)': '15-20 tok/s',
            'Power': '170 W',
            'Price (May 2026)': '$350-680 new / $150-250 used',
            'Best for': 'Budget entry — any 7B model',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Speed (7B Q4)': '10-14 tok/s',
            'Power': '230 W',
            'Price (May 2026)': '$130-200 used (discontinued new)',
            'Best for': 'Cheapest VRAM, accepts AMD setup',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~20-25 tok/s',
            'Power': '165 W',
            'Price (May 2026)': '$424 new / $290 used',
            'Best for': 'Mid tier — 14B models, low power',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~18-24 tok/s (est.)',
            'Power': '263 W',
            'Price (May 2026)': '~$480-520 new',
            'Best for': '16 GB on AMD, accepts ROCm setup',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~80-90 tok/s (est.)',
            'Power': '285 W',
            'Price (May 2026)': '$1,179 new / $770 used',
            'Best for': 'Fast 14B, lower power draw',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~120 tok/s',
            'Power': '320 W',
            'Price (May 2026)': '~$1,100-1,200 new / ~$900 used',
            'Best for': 'Editor\'s Choice — fastest 16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Speed (7B Q4)': '~150 tok/s',
            'Power': '450 W',
            'Price (May 2026)': '$2,755 new / $2,480 used',
            'Best for': '33B models, dual-GPU 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Speed (7B Q4)': '~160 tok/s',
            'Power': '575 W',
            'Price (May 2026)': '$3,949 new / $3,999 used',
            'Best for': 'Single-GPU 70B at Q4',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-en.svg',
        imageCaption:
          'Eight consumer GPUs for local LLMs compared by VRAM, 7B Q4 inference speed, power draw, and May 2026 price across four budget tiers. VRAM rises from 12 GB (RTX 3060) to 32 GB (RTX 5090); buy for the model size you need before optimizing for speed.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Which GPU Should You Buy?',
        content:
          '**Your largest target model decides your tier; your budget decides NVIDIA versus AMD inside that tier.** Find the row that matches your situation.',
        columns: ['Your situation', 'Buy this'],
        rows: [
          { 'Your situation': 'I have under $400 and want to run 7B models', 'Buy this': 'RTX 3060 12 GB (used)' },
          { 'Your situation': 'I want the cheapest card that runs LLMs at all and accept setup work', 'Buy this': 'RX 6700 XT (used)' },
          { 'Your situation': 'I want to run 14B models on a tight power budget', 'Buy this': 'RTX 4060 Ti 16 GB' },
          { 'Your situation': 'I want a card that runs 14B fast and lasts several years', 'Buy this': 'RTX 4070 Ti Super 16 GB' },
          { 'Your situation': 'I want the fastest 16 GB card and price is secondary', 'Buy this': 'RTX 4080 Super 16 GB' },
          { 'Your situation': 'I need 33B models or plan a future dual-GPU 70B build', 'Buy this': 'RTX 4090 24 GB' },
          { 'Your situation': 'I need a single card that runs 70B models at Q4', 'Buy this': 'RTX 5090 32 GB' },
          { 'Your situation': 'I am unsure and want the safest first GPU', 'Buy this': 'RTX 3060 12 GB — upgrade later if you outgrow it' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Budget Tier ($130-680): RTX 3060 12 GB and RX 6700 XT',
        content:
          '**The budget tier runs every 7B model and most 13B models — and for most first-time local-LLM users, that is all the capability they need.** The RTX 3060 12 GB is the recommended pick; the RX 6700 XT is the cheaper alternative if you accept AMD setup friction. The used market matters most in this tier — new prices have risen sharply with the 2026 surge.',
        items: [
          '**RTX 3060 12 GB ($150-250 used, $350-680 new):** 12 GB VRAM, 170 W, 15-20 tok/s on 7B models at Q4. Runs Mistral 7B, Qwen3 8B, DeepSeek-R1 7B, and most 13B models. The 12 GB variant is the one to buy — avoid the 6 GB variant, which is limited to 3B models. Buy used — new stock is discontinued and inflated.',
          '**RX 6700 XT ($130-200 used, discontinued new):** 12 GB VRAM, 230 W, 10-14 tok/s on 7B models. The cheapest way into local LLMs, but slower than the RTX 3060 and dependent on AMD ROCm, which adds setup time.',
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
            text: 'The RX 6700 XT is the cheapest card here, but budget 3-5 hours for ROCm setup on Linux. If your time is worth more than the $30-80 you save versus a used RTX 3060, buy the NVIDIA card.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-680',
            label: 'Check RTX 3060 12GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'Check RX 6700 XT price on Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Mid Tier ($420-520): RTX 4060 Ti 16 GB and RX 7800 XT',
        content:
          '**The mid tier exists for one reason: 16 GB of VRAM clears 14B models that 12 GB cards cannot fit with usable context.** If 14B-class models are your target, this is the cheapest tier that runs them properly — and the RTX 4060 Ti 16 GB is notable for staying close to its MSRP through the 2026 surge.',
        items: [
          '**RTX 4060 Ti 16 GB ($424 new / $290 used):** 16 GB VRAM, 165 W, roughly 20-25 tok/s on 7B models. It uses the same GPU die as the 8 GB RTX 4060 Ti, so per-token speed is similar — the 16 GB version buys capacity, not raw speed. Its 165 W draw is the lowest in this guide relative to capability, and it is the GPU least inflated by the surge.',
          '**RX 7800 XT (~$480-520 new):** 16 GB VRAM, 263 W. It was not individually benchmarked for this guide; expect speed in the RTX 4060 Ti range, with AMD ROCm setup as the trade-off.',
          '**Why buy this tier:** you want 14B models, you want low power draw (RTX 4060 Ti), or you want 16 GB at the lowest possible price.',
          '**Why skip this tier:** if 7B models are enough, the budget tier saves $200; if you want fast 14B inference, the high tier is meaningfully quicker.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The RTX 4060 Ti 16 GB is a capacity upgrade, not a speed upgrade, over the 8 GB version. Buy it because you need to fit 14B models, not because you expect more tokens per second.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: 'Check RTX 4060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: 'Check RX 7800 XT price on Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'High Tier ($1,100-1,200): RTX 4080 Super and RTX 4070 Ti Super',
        content:
          '**The high tier keeps 16 GB of VRAM but adds the speed that makes 7B-14B models feel instant and 22B models usable.** Both cards fit the same models as the mid tier — you are paying for tokens per second, not capacity. The 2026 surge widened the gap between this tier and the mid tier sharply.',
        items: [
          '**RTX 4080 Super 16 GB (~$1,100-1,200):** 16 GB VRAM, 320 W, roughly 120 tok/s on 7B models. The Editor\'s Choice — the fastest 16 GB card, and after 2026 price moves it costs about the same as the slower RTX 4070 Ti Super.',
          '**RTX 4070 Ti Super 16 GB ($1,179 new / $770 used):** 16 GB VRAM, 285 W. Slightly slower than the RTX 4080 Super at a near-identical new price — pick it for the lower 285 W power draw, or buy it used at ~$770 for the cheapest fast 16 GB card.',
          '**Why buy this tier:** you run 14B models constantly and want them instant, or you do light 22B work and want headroom.',
          '**Why skip this tier:** if you need 33B or 70B models, no 16 GB card will fit them — move to the enthusiast tier instead of overspending here.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Within this tier, default to the RTX 4080 Super — at a near-identical new price it is meaningfully faster than the RTX 4070 Ti Super. Pick the 4070 Ti Super only to save ~35 W of power draw, or buy it used at a discount.',
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
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '770-1179',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Enthusiast Tier ($2,480+): RTX 4090 and RTX 5090',
        content:
          '**The enthusiast tier is the only tier that runs models above 22B — and the RTX 5090 32 GB is the only single consumer card that fits a 70B model at Q4.** Buy here for VRAM capacity, not speed; the speed is a side effect. The 2026 surge hit this tier hardest, so prices move week to week.',
        items: [
          '**RTX 4090 24 GB ($2,755 new / $2,480 used):** 24 GB VRAM, 450 W, roughly 150 tok/s on 7B models and 36 tok/s on a 70B Q4 model. Runs 33B models comfortably. Note that the surge has pushed used RTX 4090 prices close to a new RTX 5090.',
          '**RTX 5090 32 GB ($3,949 new / $3,999 used):** 32 GB GDDR7 VRAM, 575 W, roughly 160 tok/s on 7B and 45 tok/s on 70B Q4. The 32 GB capacity is the headline — it is the only consumer card that runs a 70B model at Q4 without a second GPU. Used prices currently sit above new because of scalping.',
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
            text: 'Before the 2026 surge, two used RTX 4090s were cheaper than one RTX 5090. That has reversed: at $2,480-2,755 each, a pair of RTX 4090s now costs well above a single RTX 5090. For a new 70B build, the single RTX 5090 is now both simpler and cheaper.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2480-2755',
            label: 'Check RTX 4090 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '3949-3999',
            label: 'Check RTX 5090 price on Amazon',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'How Much VRAM Do You Need?',
        content:
          '**At Q4_K_M quantization, a model needs roughly 0.6 GB of VRAM per billion parameters, plus 2-4 GB for context and tooling overhead.** That formula maps directly onto the four tiers.',
        items: [
          '**7B models — 8-9 GB:** fit any tier. A 12 GB card leaves comfortable headroom.',
          '**13-14B models — 11-13 GB:** need 16 GB in practice once context and tooling are counted. Mid tier and up.',
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
          '**GPU prices rose sharply in 2026 because of a memory shortage, pushing consumer cards 1.5-2x above their original MSRP.** This changes the buying math, so plan around it rather than around launch prices.',
        items: [
          '**The cause is memory, not GPUs.** A GDDR and HBM supply shortage raised the cost of every card with fast memory — and LLM-capable GPUs are exactly the high-VRAM cards affected most.',
          '**The RTX 5090 is the clearest example:** a $1,999 launch price, but ~$3,949 in retail by May 2026 — nearly double.',
          '**Lower-end cards held up better.** The RTX 4060 Ti 16 GB sits near its $399 MSRP; the surge scales with how much fast memory a card carries.',
          '**The used market is now the value play.** A used RTX 3060 12 GB or RX 6700 XT escapes most of the surge — used pricing rose far less than new.',
          '**Decision:** if you can wait, watch for the shortage to ease; if you cannot, buy used where possible and buy the smallest card that fits your target model.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GPU prices in 2026 run 1.5-2x above MSRP because of a memory-chip shortage, so a local-LLM buyer should favor the used market and the smallest card that fits the target model.',
          },
          {
            type: 'plain-terms',
            text: 'The cards did not get better — the memory inside them got scarce and expensive. Until that eases, treat MSRP as a historical number, buy second-hand when you can, and do not pay for more VRAM than your model actually needs.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Decision Flowchart: Pick Your GPU in Four Questions',
        content:
          '**Four questions, in order, route most buyers to one card.**',
        items: [
          '**1. What is the largest model you want to run?** 7B: budget tier. 14B: mid tier. 22B: high tier. 33B: RTX 4090. 70B: RTX 5090 or dual-GPU.',
          '**2. What is your hard budget ceiling?** Under ~$250 (used): RTX 3060 12 GB. Under $520: RTX 4060 Ti 16 GB. ~$1,100-1,200: RTX 4080 Super or 4070 Ti Super. $2,480+: RTX 4090 or RTX 5090.',
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
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-en.svg',
        imageCaption:
          'Four-question decision flow for choosing a local-LLM GPU: largest target model size sets the tier, budget ceiling narrows the pick, NVIDIA-versus-AMD decides the brand, and power-supply headroom confirms the enthusiast-tier choice.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Regional Pricing & Where to Buy',
        content:
          '**GPU prices vary by region — US prices are usually the lowest, EU prices add VAT, and the 2026 surge has hit every market.** The links below are plain product-search links per region; they carry no affiliate tags and earn no commission.',
        items: [
          '**United States:** Amazon and Newegg have the widest stock. Used RTX 3060 and RTX 4090 cards are common; new flagship stock is thin.',
          '**Germany:** Amazon.de and Mindfactory.de; expect roughly 19% VAT in listed prices, and German GPU prices that run above US figures.',
          '**France:** Amazon.fr and LDLC; pricing is similar to Germany with 20% VAT, and flagship stock has been intermittent.',
          '**Japan:** Amazon.co.jp and Kakaku.com for price comparison; new-card pricing tracks the US, with thinner used-card supply.',
          '**China:** JD.com is the reference marketplace; high-end GPU availability and pricing differ substantially from Western markets.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Because of the 2026 surge, every dollar figure in this guide is a fast-moving May 2026 snapshot. Always open the current retailer listing before buying — prices have moved week to week.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Browse GPUs on Amazon US',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Browse GPUs on Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Browse GPUs on Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '150-3900',
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
          '**Assuming the RTX 4060 Ti 16 GB is faster than the 8 GB version.** It is not — it is the same GPU die with more memory. Buy it for capacity (14B models), not speed.',
          '**Anchoring on MSRP instead of current price.** The 2026 surge means launch prices no longer reflect reality. Budget against the live retailer price, and prefer the used market where it escapes the surge.',
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
          '[Best Value GPU — RTX 5090 / 4090 / 4080 Super price trackers](https://bestvaluegpu.com/history/new-and-used-rtx-5090-price-history-and-specs/) — US new and used price history used for the May 2026 price snapshot.',
          '[AMD Radeon Specifications](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Official VRAM and power figures for the RX 7800 XT and RX 6700 XT.',
          '[Best GPUs for Local LLMs 2026](/local-llms/best-gpus-for-local-llms) — PromptQuorum hardware testing: measured 7B Q4 inference speeds for the RTX 3060, 4080, 4090, and 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is the cheapest GPU that can run local LLMs well?',
            a: 'A used NVIDIA RTX 3060 12 GB at $150-250 is the cheapest GPU that runs local LLMs well. Its 12 GB of VRAM fits every 7B model and most 13B models at Q4 quantization, at 15-20 tokens per second. The cheaper RX 6700 XT works too, but it is slower and requires AMD ROCm setup. Buy used — new prices roughly doubled in the 2026 surge.',
          },
          {
            q: 'Why are GPU prices so high in 2026?',
            a: 'A memory-chip shortage drove the 2026 GPU price surge. GDDR and HBM supply tightened, raising the cost of every graphics card with fast memory, and high-VRAM LLM-capable cards were hit hardest. By May 2026 most cards sell 1.5-2x above their original MSRP — an RTX 5090 launched at $1,999 but retails near $3,950. The used market escaped most of the increase.',
          },
          {
            q: 'How much VRAM do I need for local LLMs?',
            a: 'At Q4_K_M quantization, plan for roughly 0.6 GB of VRAM per billion parameters plus 2-4 GB of overhead. That means 8-9 GB for 7B models, 11-13 GB for 14B, 19-22 GB for 33B, and 39-42 GB for 70B. A 12 GB card covers 7B comfortably; 70B needs an RTX 5090 32 GB or a dual-GPU build.',
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
            a: 'Only the RTX 5090 32 GB, and only at Q4 quantization where a 70B model needs roughly 39-42 GB — meaning aggressive quantization or partial offload. A 24 GB RTX 4090 cannot fit a 70B model at Q4 alone; the common solution is two RTX 4090s for combined VRAM, though the 2026 price surge has made that pair more expensive than a single RTX 5090.',
          },
          {
            q: 'Is the RTX 5090 worth it over the RTX 4090 for local LLMs?',
            a: 'Only if you specifically need to run 70B models on a single card. The RTX 5090 has 32 GB of VRAM versus the RTX 4090\'s 24 GB, which is the deciding factor. For 7B-33B models, the RTX 4090 fits the same models; after the 2026 surge the two are priced close, so the 5090\'s extra 8 GB and slightly higher speed make it the better new buy if budget allows.',
          },
          {
            q: 'What power supply do I need for these GPUs?',
            a: 'Match the power supply to the tier: a 550 W unit suits the RTX 3060, 650-750 W suits the RTX 4060 Ti and 4070 Ti Super, 850 W suits the RTX 4090, and 850-1000 W is needed for the RTX 5090, which draws 575 W on its own. Undersized power supplies cause instability under load.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Check the full VRAM requirements for every model size](/local-llms/how-much-vram-local-llm) — the complete VRAM-by-model-size method behind the quick formula in this guide.',
          '[Compare 15+ GPUs with measured local-LLM benchmarks](/local-llms/best-gpus-for-local-llms) — the wider GPU benchmark set, including older and server cards beyond these eight.',
          '[See which models run on a budget RTX 3060 12 GB](/local-llms/best-budget-gpus-local-llm) — model-by-model speeds for the budget tier, including the 6 GB versus 12 GB split.',
          '[Compare the RTX 5090 and RTX 4090 head-to-head](/local-llms/rtx-5090-vs-rtx-4090-local-llm) — when the RTX 5090 upgrade is worth it and when the RTX 4090 is enough.',
          '[Understand how Q4_K_M quantization sets VRAM cost](/local-llms/llm-quantization-explained) — why Q4_K_M is the default and how quantization changes the VRAM math.',
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
    title: 'Beste GPUs für lokale LLMs: Kaufberatung 2026',
    seoTitle: 'Beste GPU für lokale LLMs 2026: Kaufberatung & Vergleich',
    intro:
      'Die meisten GPU-Empfehlungen für lokale LLMs optimieren die falsche Kennzahl. Das Tempo in Token pro Sekunde entscheidet, wie schnell ein Modell antwortet — der VRAM entscheidet jedoch, ob das Modell überhaupt läuft. Ein Modell, das nicht in den Speicher passt, ist unendlich langsamer als eines, das passt. Dieser Leitfaden vergleicht acht Consumer-GPUs über vier Preisklassen anhand der Kennzahlen, die einen Kauf wirklich bestimmen: VRAM-Kapazität, gemessenes Inferenztempo, Leistungsaufnahme und Preis. Ein Hinweis zum Preis: Die GPU-Preise sind 2026 wegen einer Speicherknappheit stark gestiegen und liegen 1,5- bis 2-fach über der ursprünglichen UVP — alle Preise hier sind eine Momentaufnahme von Mai 2026, prüfen Sie also den aktuellen Preis vor dem Kauf.',
    metaDescription:
      'Acht GPUs für lokale LLMs im Vergleich über vier Preisklassen: RTX 3060 bis RTX 5090. VRAM, Token/s, Leistungsaufnahme und Preise (Mai 2026) je Modellgröße.',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16GB, RX 7800 XT, RTX 4070 Ti Super, RTX 4080 Super, RTX 4090, RTX 5090 — acht GPUs, vier Budgets, eine Regel: nach VRAM kaufen.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral 7B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
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
    ],
    leadAnswerBlock:
      '**Die beste GPU für lokale LLMs ist die, deren VRAM zu Ihrem Modell passt — nicht die schnellste Karte. Eine RTX 3060 12 GB führt jedes 7B-Modell aus, eine RTX 4090 24 GB bewältigt 33B-Modelle, und eine RTX 5090 32 GB ist die einzige einzelne Consumer-Karte für 70B-Arbeit.**',
    quickAnswerTop: {
      de: {
        question: 'Welche GPU sollte ich 2026 für lokale LLMs kaufen?',
        answer:
          'Kaufen Sie nach VRAM, dann nach Tempo. Eine gebrauchte RTX 3060 12 GB ist die Budget-Wahl und führt jedes 7B-Modell aus. Eine RTX 4060 Ti 16 GB ist die Mittelklasse-Wahl für 14B-Modelle. Eine RTX 4090 24 GB bewältigt 33B-Modelle, und eine RTX 5090 32 GB ist die einzige einzelne Consumer-Karte für 70B-Arbeit ohne Dual-GPU-Aufbau. Beachten Sie: Die Preise 2026 liegen deutlich über der UVP.',
        bullets: [
          'Budget: RTX 3060 12 GB, gebraucht — führt jedes 7B-Modell mit 15–20 Token/s aus',
          'Mittelklasse: RTX 4060 Ti 16 GB, ~450–500 € — 14B-Modelle mit Reserve',
          'Enthusiast: RTX 5090 32 GB, 3.659–3.889 € — einzige Consumer-Karte für 70B auf einer GPU',
          'GPU-Preise liegen 2026 1,5- bis 2-fach über der UVP — wo möglich gebraucht kaufen',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Kernpunkte', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Redaktionsempfehlung', anchor: '#editors-choice' },
      { label: 'GPU-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Welche GPU sollten Sie kaufen?', anchor: '#which-gpu' },
      { label: 'Budget-Klasse', anchor: '#budget-tier' },
      { label: 'Mittelklasse', anchor: '#mid-tier' },
      { label: 'Oberklasse', anchor: '#high-tier' },
      { label: 'Enthusiast-Klasse', anchor: '#enthusiast-tier' },
      { label: 'Wie viel VRAM brauchen Sie?', anchor: '#vram-needs' },
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
          '**Die Preise sind 2026 stark gestiegen.** Eine Speicherknappheit hat die GPU-Preise in allen Märkten 1,5- bis 2-fach über die UVP getrieben — eine RTX 5090 kostet ~3.700 €, nicht ihren UVP-Wert. Behandeln Sie jeden Preis hier als Momentaufnahme von Mai 2026 und setzen Sie auf den Gebrauchtmarkt.',
          '**Budget-Wahl: NVIDIA RTX 3060 12 GB** (gebraucht günstiger, neu 545–575 €) — führt jedes 7B-Modell mit 15–20 Token/s aus und die meisten 13B-Modelle bei Q4. Der beste Einstiegspunkt für lokale LLMs 2026.',
          '**Mittelklasse-Wahl: NVIDIA RTX 4060 Ti 16 GB** (~450–500 €) — 16 GB VRAM bewältigen 14B-Modelle mit Kontextreserve, und es ist die GPU, die der UVP am nächsten blieb, also vom Preisanstieg am wenigsten betroffen.',
          '**Oberklasse-Wahl: NVIDIA RTX 4070 Ti Super 16 GB** (ab 1.390 €) — schnell genug, dass sich 7B–14B-Modelle sofort anfühlen; 16 GB entsprechen der RTX 4080 Super bei der Kapazität für mehrere Hundert Euro weniger.',
          '**Enthusiast-Wahl: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — die RTX 4090 bewältigt 33B-Modelle; die RTX 5090 (3.659–3.889 €) ist die einzige einzelne Consumer-Karte, die ein 70B-Modell bei Q4 ohne Dual-GPU-Aufbau fasst.',
          '**AMD ist nutzbar, aber aufwendiger.** Die RX 6700 XT (12 GB) und RX 7800 XT (16 GB) bieten konkurrenzfähigen VRAM pro Euro, aber die ROCm-Einrichtung kostet Stunden Arbeit gegenüber NVIDIA CUDA.',
          '**Die Leistungsaufnahme skaliert mit der Klasse.** Eine RTX 3060 zieht 170 W; eine RTX 5090 zieht 575 W und benötigt ein 850–1000-W-Netzteil. Kalkulieren Sie das Netzteil zusammen mit der Karte ein.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Budget-Klasse:** RTX 3060 12 GB oder RX 6700 XT 12 GB — führt 7B- und die meisten 13B-Modelle aus.',
          '**Mittelklasse:** RTX 4060 Ti 16 GB oder RX 7800 XT 16 GB — führt 14B-Modelle bequem aus.',
          '**Oberklasse:** RTX 4070 Ti Super 16 GB oder RTX 4080 Super 16 GB — schnelle 14B-Inferenz, leichte 22B-Arbeit.',
          '**Enthusiast-Klasse:** RTX 4090 24 GB oder RTX 5090 32 GB — 33B-Modelle, und 70B bei Q4 auf der 5090.',
          '**VRAM-Faustregel bei Q4_K_M:** rund 0,6 GB pro Milliarde Parameter, plus 2–4 GB für Kontext und Werkzeuge.',
          '**Leistungsaufnahme & Stromkosten:** RTX 3060 170 W bis RTX 5090 575 W. Bei deutschem Strompreis (~0,35 €/kWh) und 4 Stunden Betrieb täglich kostet das von ~7 €/Monat (RTX 3060) bis ~24 €/Monat (RTX 5090).',
          '**Preisrealität 2026:** Eine Speicherknappheit trieb die Preise 1,5- bis 2-fach über die UVP; der Gebrauchtmarkt ist oft das bessere Preis-Leistungs-Verhältnis.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Redaktionsempfehlung: RTX 4070 Ti Super 16 GB',
        sponsoredSlot: true,
        content:
          '**Für Käufer, die eine langlebige Karte wollen und über 1.000 € ausgeben können, ist die NVIDIA RTX 4070 Ti Super 16 GB die Wahl, die VRAM, Tempo und Preis ausbalanciert.** Ihre 16 GB VRAM bewältigen jedes 14B-Modell mit Kontextreserve, ihr Inferenztempo lässt 7B–14B-Modelle sofort wirken, und ab ~1.390 € kostet sie mehrere Hundert Euro weniger als die RTX 4080 Super bei gleicher Kapazität. Liegt Ihr Budget fest unter 600 €, ist die RTX 4060 Ti 16 GB die Preis-Leistungs-Wahl — sie wurde vom Preisanstieg 2026 am wenigsten getroffen. Geben Sie nur dann mehr aus, wenn Sie gezielt 33B- oder 70B-Modelle benötigen.',
        callouts: [
          {
            type: 'note',
            text: 'Diese Redaktionsempfehlung beruht ausschließlich auf dem Verhältnis von Preis zu Leistung. Die folgenden Links sind reine Verweislinks zu Händlern.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '1390-1600',
            label: 'RTX 4070 Ti Super Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '1390-1600',
            label: 'RTX 4070 Ti Super Preis bei Mindfactory prüfen',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie die acht GPUs für lokale LLMs 2026 abschneiden',
        content:
          'VRAM- und Leistungsangaben sind Herstellerspezifikationen. Inferenztempo für RTX 3060, RTX 4080 Super, RTX 4090 und RTX 5090 sind gemessene 7B-Q4-Werte aus PromptQuorum-Hardwaretests; Werte für RTX 4060 Ti 16 GB, RX 7800 XT und RTX 4070 Ti Super sind Schätzungen auf Modellreihen-Ebene. Preise sind eine Momentaufnahme aus Deutschland von Mai 2026 (inkl. MwSt.) — die Speicherknappheit 2026 trieb sie 1,5- bis 2-fach über die UVP, daher vor dem Kauf prüfen.',
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
        columns: ['GPU', 'VRAM', 'Tempo (7B Q4)', 'Leistungsaufnahme', 'Preis (Mai 2026)', 'Am besten für'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Tempo (7B Q4)': '15–20 Token/s',
            'Leistungsaufnahme': '170 W',
            'Preis (Mai 2026)': '545–575 € neu / gebraucht günstiger',
            'Am besten für': 'Budget-Einstieg — jedes 7B-Modell',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Tempo (7B Q4)': '10–14 Token/s',
            'Leistungsaufnahme': '230 W',
            'Preis (Mai 2026)': '530–550 € neu',
            'Am besten für': 'Günstigster VRAM, AMD-Einrichtung nötig',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~20–25 Token/s',
            'Leistungsaufnahme': '165 W',
            'Preis (Mai 2026)': '~800 €',
            'Am besten für': 'Mittelklasse — 14B-Modelle, sparsam',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~18–24 Token/s (geschätzt)',
            'Leistungsaufnahme': '263 W',
            'Preis (Mai 2026)': '~550 € neu',
            'Am besten für': '16 GB bei AMD, ROCm-Einrichtung nötig',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~80–90 Token/s (geschätzt)',
            'Leistungsaufnahme': '285 W',
            'Preis (Mai 2026)': 'ab 1.390 €',
            'Am besten für': 'Redaktionsempfehlung — schnelle 14B',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Tempo (7B Q4)': '~120 Token/s',
            'Leistungsaufnahme': '320 W',
            'Preis (Mai 2026)': '~1.500 €',
            'Am besten für': 'Schnellste 16-GB-Karte',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Tempo (7B Q4)': '~150 Token/s',
            'Leistungsaufnahme': '450 W',
            'Preis (Mai 2026)': '~2.990–3.190 €',
            'Am besten für': '33B-Modelle, Dual-GPU für 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Tempo (7B Q4)': '~160 Token/s',
            'Leistungsaufnahme': '575 W',
            'Preis (Mai 2026)': '3.659–3.889 €',
            'Am besten für': '70B bei Q4 auf einer GPU',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-de.svg',
        imageCaption:
          'Acht Consumer-GPUs für lokale LLMs im Vergleich nach VRAM, 7B-Q4-Inferenztempo, Leistungsaufnahme und Preis (Mai 2026) über vier Preisklassen. Der VRAM steigt von 12 GB (RTX 3060) auf 32 GB (RTX 5090); kaufen Sie nach der benötigten Modellgröße, bevor Sie auf Tempo optimieren.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Welche GPU sollten Sie kaufen?',
        content:
          '**Ihr größtes Zielmodell bestimmt Ihre Klasse; Ihr Budget entscheidet innerhalb dieser Klasse zwischen NVIDIA und AMD.** Suchen Sie die Zeile, die zu Ihrer Situation passt.',
        columns: ['Ihre Situation', 'Das kaufen'],
        rows: [
          { 'Ihre Situation': 'Ich habe ein knappes Budget und will 7B-Modelle ausführen', 'Das kaufen': 'RTX 3060 12 GB (gebraucht)' },
          { 'Ihre Situation': 'Ich will die günstigste Karte, die LLMs überhaupt ausführt, und nehme Einrichtungsaufwand in Kauf', 'Das kaufen': 'RX 6700 XT (gebraucht)' },
          { 'Ihre Situation': 'Ich will 14B-Modelle bei knappem Strombudget ausführen', 'Das kaufen': 'RTX 4060 Ti 16 GB' },
          { 'Ihre Situation': 'Ich will eine Karte, die 14B schnell ausführt und mehrere Jahre hält', 'Das kaufen': 'RTX 4070 Ti Super 16 GB' },
          { 'Ihre Situation': 'Ich will die schnellste 16-GB-Karte und der Preis ist zweitrangig', 'Das kaufen': 'RTX 4080 Super 16 GB' },
          { 'Ihre Situation': 'Ich brauche 33B-Modelle oder plane einen späteren Dual-GPU-70B-Aufbau', 'Das kaufen': 'RTX 4090 24 GB' },
          { 'Ihre Situation': 'Ich brauche eine einzelne Karte, die 70B-Modelle bei Q4 ausführt', 'Das kaufen': 'RTX 5090 32 GB' },
          { 'Ihre Situation': 'Ich bin unsicher und will die sicherste erste GPU', 'Das kaufen': 'RTX 3060 12 GB — später aufrüsten, falls Sie sie überwachsen' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Budget-Klasse: RTX 3060 12 GB und RX 6700 XT',
        content:
          '**Die Budget-Klasse führt jedes 7B-Modell und die meisten 13B-Modelle aus — und für die meisten Erstnutzer lokaler LLMs ist genau das die gesamte benötigte Leistung.** Die RTX 3060 12 GB ist die empfohlene Wahl; die RX 6700 XT ist die günstigere Alternative, wenn Sie den AMD-Einrichtungsaufwand in Kauf nehmen. In dieser Klasse zählt der Gebrauchtmarkt am meisten — die Neupreise sind mit dem Anstieg 2026 stark gestiegen, der Gebrauchtmarkt läuft in Deutschland vor allem über eBay Kleinanzeigen.',
        items: [
          '**RTX 3060 12 GB (neu 545–575 €, gebraucht deutlich günstiger):** 12 GB VRAM, 170 W, 15–20 Token/s bei 7B-Modellen mit Q4. Führt Mistral 7B, Qwen3 8B, DeepSeek-R1 7B und die meisten 13B-Modelle aus. Kaufen Sie ausdrücklich die 12-GB-Variante — meiden Sie die 6-GB-Variante, die auf 3B-Modelle beschränkt ist. Kaufen Sie gebraucht, wo möglich; der Neupreis hat sich im Preisanstieg ungefähr verdoppelt.',
          '**RX 6700 XT (gebraucht — Preis prüfen):** 12 GB VRAM, 230 W, 10–14 Token/s bei 7B-Modellen. Der günstigste Einstieg in lokale LLMs, aber langsamer als die RTX 3060 und auf AMD ROCm angewiesen, was Einrichtungszeit kostet.',
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
            text: 'Die RX 6700 XT ist die günstigste Karte hier, planen Sie aber 3–5 Stunden für die ROCm-Einrichtung unter Linux ein. Wenn Ihre Zeit mehr wert ist als die ersparten 100–200 €, kaufen Sie die NVIDIA-Karte.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '300-580',
            label: 'RTX 3060 12GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            priceRange: '200-350',
            label: 'RX 6700 XT Preis bei Mindfactory prüfen',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Mittelklasse: RTX 4060 Ti 16 GB und RX 7800 XT',
        content:
          '**Die Mittelklasse existiert aus einem Grund: 16 GB VRAM bewältigen 14B-Modelle, die 12-GB-Karten nicht mit brauchbarem Kontext fassen.** Wenn 14B-Modelle Ihr Ziel sind, ist dies die günstigste Klasse, die sie richtig ausführt — und die RTX 4060 Ti 16 GB ist bemerkenswert nah an ihrer UVP durch den Preisanstieg 2026 geblieben.',
        items: [
          '**RTX 4060 Ti 16 GB (ca. 450–500 €):** 16 GB VRAM, 165 W, rund 20–25 Token/s bei 7B-Modellen. Sie nutzt denselben GPU-Chip wie die 8-GB-RTX-4060-Ti, das Tempo pro Token ist also ähnlich — die 16-GB-Version kauft Kapazität, nicht reines Tempo. Ihre 165 W sind die niedrigste Aufnahme in diesem Leitfaden im Verhältnis zur Leistung, und sie ist die vom Anstieg am wenigsten betroffene GPU.',
          '**RX 7800 XT (ca. 500–560 €):** 16 GB VRAM, 263 W. Sie wurde für diesen Leitfaden nicht einzeln gemessen; erwarten Sie ein Tempo im Bereich der RTX 4060 Ti, mit der AMD-ROCm-Einrichtung als Kompromiss.',
          '**Warum diese Klasse kaufen:** Sie wollen 14B-Modelle, Sie wollen geringe Leistungsaufnahme (RTX 4060 Ti) oder Sie wollen 16 GB zum niedrigstmöglichen Preis.',
          '**Warum diese Klasse überspringen:** Wenn 7B-Modelle genügen, spart die Budget-Klasse Geld; wenn Sie schnelle 14B-Inferenz wollen, ist die Oberklasse spürbar zügiger.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die RTX 4060 Ti 16 GB ist ein Kapazitäts-Upgrade, kein Tempo-Upgrade gegenüber der 8-GB-Version. Kaufen Sie sie, weil Sie 14B-Modelle fassen müssen, nicht weil Sie mehr Token pro Sekunde erwarten.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '450-560',
            label: 'RTX 4060 Ti 16GB Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '450-560',
            label: 'RX 7800 XT Preis bei Mindfactory prüfen',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'Oberklasse: RTX 4070 Ti Super und RTX 4080 Super',
        content:
          '**Die Oberklasse behält 16 GB VRAM, ergänzt aber das Tempo, das 7B–14B-Modelle sofort wirken lässt und 22B-Modelle brauchbar macht.** Beide Karten fassen dieselben Modelle wie die Mittelklasse — Sie zahlen für Token pro Sekunde, nicht für Kapazität. Der Preisanstieg 2026 hat den Abstand zwischen dieser Klasse und der Mittelklasse stark vergrößert.',
        items: [
          '**RTX 4070 Ti Super 16 GB (ab 1.390 €):** 16 GB VRAM, 285 W. Die Redaktionsempfehlung — schnell genug, dass Antwortverzögerung bei 14B-Modellen nicht mehr auffällt, für rund mehrere Hundert Euro weniger als die RTX 4080 Super.',
          '**RTX 4080 Super 16 GB (Preis prüfen):** 16 GB VRAM, 320 W, rund 120 Token/s bei 7B-Modellen. Die schnellste verfügbare 16-GB-Karte; der Aufpreis gegenüber der 4070 Ti Super lohnt nur, wenn Sie Batch-Inferenz betreiben oder das zusätzliche Tempo hoch gewichten.',
          '**Warum diese Klasse kaufen:** Sie führen ständig 14B-Modelle aus und wollen sie sofort, oder Sie machen leichte 22B-Arbeit und wollen Reserve.',
          '**Warum diese Klasse überspringen:** Wenn Sie 33B- oder 70B-Modelle brauchen, fasst keine 16-GB-Karte sie — wechseln Sie in die Enthusiast-Klasse, statt hier zu viel auszugeben.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wählen Sie innerhalb dieser Klasse standardmäßig die RTX 4070 Ti Super. Die RTX 4080 Super ist schneller, aber beide fassen identische Modelle — der Tempovorsprung zählt bei Batch-Lasten und fällt im interaktiven Chat kaum auf.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '1390-1600',
            label: 'RTX 4070 Ti Super Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '1390-1900',
            label: 'RTX 4080 Super Preis bei Mindfactory prüfen',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Enthusiast-Klasse: RTX 4090 und RTX 5090',
        content:
          '**Die Enthusiast-Klasse ist die einzige Klasse, die Modelle über 22B ausführt — und die RTX 5090 32 GB ist die einzige einzelne Consumer-Karte, die ein 70B-Modell bei Q4 fasst.** Kaufen Sie hier wegen der VRAM-Kapazität, nicht wegen des Tempos; das Tempo ist ein Nebeneffekt. Der Preisanstieg 2026 hat diese Klasse am härtesten getroffen, daher bewegen sich die Preise wöchentlich.',
        items: [
          '**RTX 4090 24 GB (knapp verfügbar — Preis prüfen):** 24 GB VRAM, 450 W, rund 150 Token/s bei 7B-Modellen und 36 Token/s bei einem 70B-Q4-Modell. Führt 33B-Modelle bequem aus. Beachten Sie: Der Anstieg hat die Gebrauchtpreise der RTX 4090 nahe an eine neue RTX 5090 gedrückt.',
          '**RTX 5090 32 GB (3.659–3.889 €):** 32 GB GDDR7-VRAM, 575 W, rund 160 Token/s bei 7B und 45 Token/s bei 70B Q4. Die 32 GB Kapazität sind das Hauptargument — es ist die einzige Consumer-Karte, die ein 70B-Modell bei Q4 ohne zweite GPU ausführt.',
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
            text: 'Vor dem Preisanstieg 2026 waren zwei gebrauchte RTX 4090 günstiger als eine RTX 5090. Das hat sich umgekehrt: Ein Paar RTX 4090 kostet jetzt deutlich mehr als eine einzelne RTX 5090. Für einen neuen 70B-Aufbau ist die einzelne RTX 5090 jetzt sowohl einfacher als auch günstiger.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2500-3500',
            label: 'RTX 4090 Preis bei Amazon.de prüfen',
          },
          {
            url: 'https://www.mindfactory.de/search_result.php?search_query=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '3659-3889',
            label: 'RTX 5090 Preis bei Mindfactory prüfen',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'Wie viel VRAM brauchen Sie?',
        content:
          '**Bei Q4_K_M-Quantisierung benötigt ein Modell rund 0,6 GB VRAM pro Milliarde Parameter, plus 2–4 GB für Kontext und Werkzeug-Overhead.** Diese Formel bildet sich direkt auf die vier Klassen ab.',
        items: [
          '**7B-Modelle — 8–9 GB:** passen in jede Klasse. Eine 12-GB-Karte lässt bequeme Reserve.',
          '**13–14B-Modelle — 11–13 GB:** brauchen in der Praxis 16 GB, sobald Kontext und Werkzeuge mitgezählt sind. Mittelklasse und höher.',
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
          '**Die GPU-Preise stiegen 2026 stark wegen einer Speicherknappheit und drückten Consumer-Karten 1,5- bis 2-fach über ihre ursprüngliche UVP.** Das verändert die Kaufrechnung, also planen Sie damit statt mit den Einführungspreisen.',
        items: [
          '**Die Ursache ist der Speicher, nicht die GPUs.** Eine GDDR- und HBM-Lieferknappheit verteuerte jede Karte mit schnellem Speicher — und LLM-fähige GPUs sind genau die Karten mit viel VRAM, die am stärksten betroffen sind.',
          '**Die RTX 5090 ist das deutlichste Beispiel:** ein UVP von 1.999 $, aber rund 3.659–3.889 € im Handel bis Mai 2026 — nahezu das Doppelte.',
          '**Karten der unteren Klassen hielten sich besser.** Die RTX 4060 Ti 16 GB liegt nahe ihrer UVP; der Anstieg skaliert damit, wie viel schnellen Speicher eine Karte trägt.',
          '**Der Gebrauchtmarkt ist jetzt das Preis-Leistungs-Argument.** Eine gebrauchte RTX 3060 12 GB oder RX 6700 XT entgeht dem Großteil des Anstiegs — Gebrauchtpreise stiegen weit weniger als Neupreise.',
          '**Entscheidung:** Wenn Sie warten können, beobachten Sie, ob sich die Knappheit löst; wenn nicht, kaufen Sie wo möglich gebraucht und die kleinste Karte, die zu Ihrem Zielmodell passt.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'GPU-Preise liegen 2026 wegen einer Speicherchip-Knappheit 1,5- bis 2-fach über der UVP, daher sollte ein Käufer für lokale LLMs den Gebrauchtmarkt und die kleinste zum Zielmodell passende Karte bevorzugen.',
          },
          {
            type: 'plain-terms',
            text: 'Die Karten sind nicht besser geworden — der Speicher in ihnen wurde knapp und teuer. Bis sich das löst, behandeln Sie die UVP als historische Zahl, kaufen Sie wo möglich gebraucht und zahlen Sie nicht für mehr VRAM, als Ihr Modell tatsächlich braucht.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Entscheidungsbaum: Wählen Sie Ihre GPU in vier Fragen',
        content:
          '**Vier Fragen, der Reihe nach, führen die meisten Käufer zu einer Karte.**',
        items: [
          '**1. Was ist das größte Modell, das Sie ausführen wollen?** 7B: Budget-Klasse. 14B: Mittelklasse. 22B: Oberklasse. 33B: RTX 4090. 70B: RTX 5090 oder Dual-GPU.',
          '**2. Was ist Ihre harte Budgetgrenze?** Knappes Budget: RTX 3060 12 GB. Bis ~600 €: RTX 4060 Ti 16 GB. ~1.390–1.900 €: RTX 4070 Ti Super oder 4080 Super. Ab ~3.000 €: RTX 4090 oder RTX 5090.',
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
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-de.svg',
        imageCaption:
          'Vier-Fragen-Entscheidungsfluss zur Wahl einer GPU für lokale LLMs: Die größte Zielmodellgröße legt die Klasse fest, die Budgetgrenze grenzt die Wahl ein, NVIDIA gegen AMD entscheidet die Marke, und die Netzteilreserve bestätigt die Enthusiast-Wahl.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Regionale Preise & Bezugsquellen',
        content:
          '**GPU-Preise schwanken je Region — die Preise hier sind eine Momentaufnahme aus Deutschland (inkl. 19 % MwSt.), und der Anstieg 2026 hat jeden Markt getroffen.** Die folgenden Links sind reine Produkt-Suchlinks; sie tragen keine Affiliate-Kennungen.',
        items: [
          '**Deutschland:** Mindfactory.de und alternate.de führen GPUs oft günstiger als Amazon.de und sind die erste Anlaufstelle für Grafikkarten.',
          '**Gebrauchtmarkt:** eBay Kleinanzeigen ist der größte deutsche Gebrauchtmarkt für GPUs — vor allem für ältere Karten wie die RTX 3060 oft die deutlich günstigere Wahl.',
          '**Österreich & Schweiz:** Geizhals.at und digitec.ch decken den DACH-Raum ab; Preise und Verfügbarkeit weichen leicht von Deutschland ab.',
          '**Preisvergleich:** Geizhals.de ist der Standard für den Preisvergleich neuer Karten in Deutschland — prüfen Sie dort die aktuell günstigste Bezugsquelle.',
          '**Verfügbarkeit:** High-End-Karten (RTX 4090, RTX 5090) sind 2026 zeitweise knapp; rechnen Sie mit schwankenden Preisen und prüfen Sie mehrere Händler.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wegen des Anstiegs 2026 ist jede Preisangabe in diesem Leitfaden eine schnelllebige Momentaufnahme von Mai 2026. Öffnen Sie immer das aktuelle Händlerangebot vor dem Kauf — die Preise haben sich von Woche zu Woche bewegt.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'GPUs für lokale LLMs (Deutschland)',
            productCategory: 'gpu',
            priceRange: '200-3900',
            label: 'GPUs bei Amazon.de durchsuchen',
          },
          {
            url: 'https://www.mindfactory.de/Hardware/Grafikkarten+(VGA).html',
            productName: 'GPUs für lokale LLMs (Mindfactory)',
            productCategory: 'gpu',
            priceRange: '200-3900',
            label: 'GPUs bei Mindfactory durchsuchen',
          },
          {
            url: 'https://www.alternate.de/Grafikkarten',
            productName: 'GPUs für lokale LLMs (alternate.de)',
            productCategory: 'gpu',
            priceRange: '200-3900',
            label: 'GPUs bei alternate.de durchsuchen',
          },
          {
            url: 'https://geizhals.de/?cat=gra16_512',
            productName: 'GPU-Preisvergleich (Geizhals)',
            productCategory: 'gpu',
            priceRange: '200-3900',
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
          '**Annehmen, die RTX 4060 Ti 16 GB sei schneller als die 8-GB-Version.** Ist sie nicht — es ist derselbe GPU-Chip mit mehr Speicher. Kaufen Sie sie für Kapazität (14B-Modelle), nicht für Tempo.',
          '**Sich an der UVP statt am aktuellen Preis orientieren.** Der Anstieg 2026 bedeutet, dass Einführungspreise die Realität nicht mehr abbilden. Kalkulieren Sie mit dem aktuellen Händlerpreis und bevorzugen Sie den Gebrauchtmarkt, wo er dem Anstieg entgeht.',
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
          '[Geizhals Deutschland — Grafikkarten-Preisvergleich](https://geizhals.de/?cat=gra16_512) — Aktuelle deutsche Händlerpreise, Grundlage der Mai-2026-Preismomentaufnahme.',
          '[AMD Radeon — Spezifikationen](https://www.amd.com/de/products/graphics/desktops/radeon.html) — Offizielle VRAM- und Leistungsangaben für RX 7800 XT und RX 6700 XT.',
          '[Beste GPUs für lokale LLMs 2026](/local-llms/best-gpus-for-local-llms?lang=de) — PromptQuorum-Hardwaretests: gemessene 7B-Q4-Inferenztempi für RTX 3060, 4080, 4090 und 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Was ist die günstigste GPU, die lokale LLMs gut ausführt?',
            a: 'Eine gebrauchte NVIDIA RTX 3060 12 GB ist die günstigste GPU, die lokale LLMs gut ausführt. Ihre 12 GB VRAM fassen jedes 7B-Modell und die meisten 13B-Modelle bei Q4-Quantisierung, mit 15–20 Token pro Sekunde. Die günstigere RX 6700 XT funktioniert ebenfalls, ist aber langsamer und braucht AMD-ROCm-Einrichtung. Kaufen Sie gebraucht — die Neupreise haben sich im Anstieg 2026 ungefähr verdoppelt.',
          },
          {
            q: 'Warum sind die GPU-Preise 2026 so hoch?',
            a: 'Eine Speicherchip-Knappheit trieb den GPU-Preisanstieg 2026. Das GDDR- und HBM-Angebot wurde knapp, was die Kosten jeder Grafikkarte mit schnellem Speicher erhöhte, und LLM-fähige Karten mit viel VRAM traf es am härtesten. Bis Mai 2026 verkaufen sich die meisten Karten 1,5- bis 2-fach über ihrer ursprünglichen UVP — eine RTX 5090 startete bei 1.999 $, kostet aber im Handel um 3.700 €. Der Gebrauchtmarkt entging dem Großteil des Anstiegs.',
          },
          {
            q: 'Wie viel VRAM brauche ich für lokale LLMs?',
            a: 'Bei Q4_K_M-Quantisierung rechnen Sie mit rund 0,6 GB VRAM pro Milliarde Parameter plus 2–4 GB Overhead. Das bedeutet 8–9 GB für 7B-Modelle, 11–13 GB für 14B, 19–22 GB für 33B und 39–42 GB für 70B. Eine 12-GB-Karte deckt 7B bequem ab; 70B braucht eine RTX 5090 32 GB oder einen Dual-GPU-Aufbau.',
          },
          {
            q: 'Ist die RTX 4060 Ti 16 GB schneller als die 8-GB-Version?',
            a: 'Nein. Die RTX 4060 Ti 16 GB und die 8-GB-Version nutzen denselben GPU-Chip, das Inferenztempo pro Token ist also ähnlich — rund 20–25 Token pro Sekunde bei 7B-Modellen. Die 16-GB-Version kauft Kapazität und lässt Sie 14B-Modelle ausführen, die nicht in 8 GB passen. Kaufen Sie sie für VRAM, nicht für Tempo.',
          },
          {
            q: 'Sollte ich für lokale LLMs NVIDIA oder AMD kaufen?',
            a: 'Kaufen Sie NVIDIA, außer Sie besitzen bereits AMD-Hardware oder finden einen starken Rabatt. NVIDIA CUDA funktioniert sofort mit Ollama, LM Studio und llama.cpp. AMD-Karten wie die RX 6700 XT und RX 7800 XT bieten konkurrenzfähigen VRAM pro Euro, aber die ROCm-Einrichtung kostet typischerweise mehrere Stunden unter Linux.',
          },
          {
            q: 'Kann eine einzelne GPU ein 70B-Modell ausführen?',
            a: 'Nur die RTX 5090 32 GB, und nur bei Q4-Quantisierung, wo ein 70B-Modell rund 39–42 GB braucht — also aggressive Quantisierung oder teilweises Auslagern. Eine 24-GB-RTX-4090 fasst ein 70B-Modell bei Q4 nicht allein; die übliche Lösung sind zwei RTX 4090 für kombinierten VRAM, doch der Preisanstieg 2026 hat dieses Paar teurer gemacht als eine einzelne RTX 5090.',
          },
          {
            q: 'Lohnt sich die RTX 5090 gegenüber der RTX 4090 für lokale LLMs?',
            a: 'Nur, wenn Sie gezielt 70B-Modelle auf einer einzelnen Karte ausführen müssen. Die RTX 5090 hat 32 GB VRAM gegenüber den 24 GB der RTX 4090, was der entscheidende Faktor ist. Für 7B–33B-Modelle fasst die RTX 4090 dieselben Modelle; nach dem Anstieg 2026 liegen beide preislich nah beieinander, daher machen die zusätzlichen 8 GB und das etwas höhere Tempo der 5090 sie zum besseren Neukauf, sofern es das Budget erlaubt.',
          },
          {
            q: 'Welches Netzteil brauche ich für diese GPUs?',
            a: 'Passen Sie das Netzteil an die Klasse an: Ein 550-W-Gerät genügt für die RTX 3060, 650–750 W für RTX 4060 Ti und 4070 Ti Super, 850 W für die RTX 4090, und 850–1000 W sind für die RTX 5090 nötig, die allein 575 W zieht. Unterdimensionierte Netzteile verursachen Instabilität unter Last.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Den vollständigen VRAM-Bedarf für jede Modellgröße prüfen](/local-llms/how-much-vram-local-llm?lang=de) — die vollständige VRAM-pro-Modellgröße-Methode hinter der Faustformel in diesem Leitfaden.',
          '[15+ GPUs mit gemessenen Lokale-LLM-Benchmarks vergleichen](/local-llms/best-gpus-for-local-llms?lang=de) — der erweiterte GPU-Benchmark-Satz, inklusive älterer und Server-Karten über diese acht hinaus.',
          '[Sehen, welche Modelle auf einer günstigen RTX 3060 12 GB laufen](/local-llms/best-budget-gpus-local-llm?lang=de) — Tempi Modell für Modell in der Budget-Klasse, inklusive der 6-GB- gegen 12-GB-Unterscheidung.',
          '[RTX 5090 und RTX 4090 direkt vergleichen](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=de) — wann sich das RTX-5090-Upgrade lohnt und wann die RTX 4090 genügt.',
          '[Verstehen, wie Q4_K_M-Quantisierung den VRAM-Bedarf bestimmt](/local-llms/llm-quantization-explained?lang=de) — warum Q4_K_M der Standard ist und wie Quantisierung die VRAM-Rechnung verändert.',
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
    title: 'Meilleurs GPU pour LLM locaux : guide d\'achat 2026',
    seoTitle: 'Meilleur GPU pour LLM locaux 2026 : du budget au RTX 5090',
    intro:
      'La plupart des conseils sur les GPU pour LLM locaux optimisent le mauvais chiffre. La vitesse en tokens par seconde décide de la rapidité de réponse d\'un modèle, mais c\'est la VRAM qui décide si le modèle s\'exécute tout court — et un modèle qui ne tient pas en mémoire est infiniment plus lent qu\'un modèle qui y tient. Ce guide compare huit GPU grand public sur quatre gammes de prix selon les chiffres qui pèsent réellement sur un achat : capacité VRAM, vitesse d\'inférence mesurée, consommation et prix. Une réserve sur les prix : ils ont flambé en 2026 à cause d\'une pénurie de mémoire, et les cartes se vendent désormais 1,5 à 2 fois au-dessus de leur tarif de lancement — chaque prix ici est un instantané de mai 2026, vérifiez donc le tarif actuel avant d\'acheter.',
    metaDescription:
      'Huit GPU comparés pour les LLM locaux sur quatre budgets : du RTX 3060 au RTX 5090. VRAM, tokens/s, consommation et prix de mai 2026 — avec la taille de modèle de chaque gamme.',
    twitterDescription:
      'RTX 3060, RX 6700 XT, RTX 4060 Ti 16 Go, RX 7800 XT, RTX 4070 Ti Super, RTX 4080 Super, RTX 4090, RTX 5090 — huit GPU, quatre budgets, une règle : achetez pour la VRAM.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral 7B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
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
    ],
    leadAnswerBlock:
      '**Le meilleur GPU pour les LLM locaux est celui dont la VRAM correspond à votre modèle, pas la carte la plus rapide. Un RTX 3060 12 Go exécute n\'importe quel modèle 7B, un RTX 4090 24 Go gère les modèles 33B, et un RTX 5090 32 Go est la seule carte grand public capable de faire tourner un modèle 70B seule.**',
    quickAnswerTop: {
      fr: {
        question: 'Quel GPU acheter pour exécuter des LLM locaux en 2026 ?',
        answer:
          'Achetez d\'abord pour la VRAM, ensuite pour la vitesse. Un RTX 3060 12 Go d\'occasion est le choix budget et exécute n\'importe quel modèle 7B. Un RTX 4060 Ti 16 Go est le choix de milieu de gamme pour les modèles 14B. Un RTX 4090 24 Go gère les modèles 33B, et un RTX 5090 32 Go est la seule carte grand public capable de faire tourner un modèle 70B sans configuration bi-GPU. À noter : les prix 2026 sont bien au-dessus des tarifs de lancement.',
        bullets: [
          'Budget : RTX 3060 12 Go, d\'occasion — exécute tout modèle 7B à 15-20 tok/s',
          'Milieu de gamme : RTX 4060 Ti 16 Go, env. 780-820 € — modèles 14B avec marge',
          'Enthousiaste : RTX 5090 32 Go, 3 499-3 949 € — seule carte grand public pour le 70B sur un seul GPU',
          'Les prix GPU 2026 sont 1,5 à 2 fois au-dessus du tarif de lancement — achetez d\'occasion quand vous le pouvez',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits en bref', anchor: '#quick-facts' },
      { label: 'Choix de la rédaction', anchor: '#editors-choice' },
      { label: 'Tableau comparatif des GPU', anchor: '#comparison-table' },
      { label: 'Quel GPU acheter ?', anchor: '#which-gpu' },
      { label: 'Gamme budget', anchor: '#budget-tier' },
      { label: 'Milieu de gamme', anchor: '#mid-tier' },
      { label: 'Haut de gamme', anchor: '#high-tier' },
      { label: 'Gamme enthousiaste', anchor: '#enthusiast-tier' },
      { label: 'Combien de VRAM vous faut-il ?', anchor: '#vram-needs' },
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
          '**Les prix ont flambé en 2026.** Une pénurie de mémoire a poussé les prix GPU 1,5 à 2 fois au-dessus du tarif de lancement sur tous les marchés — un RTX 5090 coûte env. 3 800 €, pas son tarif de lancement. Traitez chaque prix ici comme un instantané de mai 2026 et appuyez-vous sur le marché de l\'occasion.',
          '**Choix budget : NVIDIA RTX 3060 12 Go** (neuf env. 340-400 €, moins cher d\'occasion) — exécute tout modèle 7B à 15-20 tok/s et la plupart des modèles 13B en Q4. Le meilleur rapport qualité-prix pour débuter avec les LLM locaux en 2026.',
          '**Choix milieu de gamme : NVIDIA RTX 4060 Ti 16 Go** (env. 780-820 €) — 16 Go de VRAM dégagent les modèles 14B avec une marge de contexte, et c\'est le GPU le plus proche de son tarif de lancement, donc le moins touché par la flambée.',
          '**Choix haut de gamme : NVIDIA RTX 4080 Super 16 Go** (env. 1 500-1 700 €) — la carte 16 Go la plus rapide, et après les mouvements de prix de 2026 elle coûte à peu près autant que le RTX 4070 Ti Super, plus lent.',
          '**Choix enthousiaste : NVIDIA RTX 4090 24 Go / RTX 5090 32 Go** — le RTX 4090 (env. 2 900-3 200 €) exécute les modèles 33B ; le RTX 5090 (3 499-3 949 €) est la seule carte grand public capable de faire tenir un modèle 70B en Q4 sans configuration bi-GPU.',
          '**AMD est viable mais plus exigeant.** Le RX 6700 XT (12 Go) et le RX 7800 XT (16 Go) offrent une VRAM par euro compétitive, mais la configuration ROCm ajoute des heures de travail face à NVIDIA CUDA.',
          '**La consommation évolue avec la gamme.** Un RTX 3060 tire 170 W ; un RTX 5090 tire 575 W et exige une alimentation de 850 à 1000 W. Budgétez l\'alimentation en même temps que la carte.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits en bref',
        items: [
          '**Gamme budget :** RTX 3060 12 Go ou RX 6700 XT 12 Go — exécute le 7B et la plupart des modèles 13B.',
          '**Milieu de gamme :** RTX 4060 Ti 16 Go ou RX 7800 XT 16 Go — exécute confortablement les modèles 14B.',
          '**Haut de gamme :** RTX 4080 Super 16 Go ou RTX 4070 Ti Super 16 Go — inférence 14B rapide, travail 22B léger.',
          '**Gamme enthousiaste :** RTX 4090 24 Go ou RTX 5090 32 Go — modèles 33B, et 70B en Q4 sur le 5090.',
          '**Règle VRAM pour Q4_K_M :** environ 0,6 Go par milliard de paramètres, plus 2-4 Go pour le contexte et l\'outillage.',
          '**Plage de consommation :** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 4070 Ti Super 285 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Réalité des prix 2026 :** une pénurie de mémoire a poussé les prix 1,5 à 2 fois au-dessus du tarif de lancement ; le marché de l\'occasion offre souvent le meilleur rapport qualité-prix.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Choix de la rédaction : RTX 4080 Super 16 Go',
        sponsoredSlot: true,
        content:
          '**Pour les acheteurs qui veulent une carte durable et peuvent dépasser les 1 000 €, le NVIDIA RTX 4080 Super 16 Go est le choix qui équilibre VRAM, vitesse et prix.** Ses 16 Go de VRAM dégagent tout modèle 14B avec une marge de contexte, c\'est la carte 16 Go la plus rapide ici à environ 120 tok/s, et à env. 1 500-1 700 € elle coûte à peu près autant que le RTX 4070 Ti Super, plus lent, après les mouvements de prix de 2026 — ce qui en fait le meilleur rapport qualité-prix du haut de gamme. Si votre budget est plafonné sous 600 €, le RTX 4060 Ti 16 Go est le choix valeur — c\'est lui que la flambée de 2026 a le moins touché. Ne dépensez davantage que si vous avez spécifiquement besoin de modèles 33B ou 70B.',
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
        title: 'Comment les huit GPU se comparent pour les LLM locaux en 2026',
        content:
          'Les chiffres de VRAM et de consommation sont les spécifications constructeur. Les vitesses d\'inférence du RTX 3060, RTX 4080 Super, RTX 4090 et RTX 5090 sont des valeurs 7B Q4 mesurées par les tests matériels de PromptQuorum ; les chiffres du RTX 4060 Ti 16 Go, du RX 7800 XT et du RTX 4070 Ti Super sont des estimations à l\'échelle de la gamme. Les prix sont un instantané français de mai 2026 (TTC) — la pénurie de mémoire de 2026 les a poussés 1,5 à 2 fois au-dessus du tarif de lancement, vérifiez donc avant d\'acheter.',
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
        columns: ['GPU', 'VRAM', 'Vitesse (7B Q4)', 'Consommation', 'Prix (mai 2026)', 'Idéal pour'],
        rows: [
          {
            'GPU': 'RTX 3060 12 Go',
            'VRAM': '12 Go',
            'Vitesse (7B Q4)': '15-20 tok/s',
            'Consommation': '170 W',
            'Prix (mai 2026)': 'env. 340-400 € neuf / moins cher d\'occasion',
            'Idéal pour': 'Entrée budget — tout modèle 7B',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 Go',
            'Vitesse (7B Q4)': '10-14 tok/s',
            'Consommation': '230 W',
            'Prix (mai 2026)': 'env. 430-490 € (fin de production)',
            'Idéal pour': 'VRAM la moins chère, accepte la config AMD',
          },
          {
            'GPU': 'RTX 4060 Ti 16 Go',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~20-25 tok/s',
            'Consommation': '165 W',
            'Prix (mai 2026)': 'env. 780-820 €',
            'Idéal pour': 'Milieu de gamme — modèles 14B, faible conso',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~18-24 tok/s (est.)',
            'Consommation': '263 W',
            'Prix (mai 2026)': 'env. 510-560 € neuf',
            'Idéal pour': '16 Go chez AMD, accepte la config ROCm',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~80-90 tok/s (est.)',
            'Consommation': '285 W',
            'Prix (mai 2026)': 'env. 1 450-1 630 €',
            'Idéal pour': '14B rapide, consommation plus basse',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 Go',
            'Vitesse (7B Q4)': '~120 tok/s',
            'Consommation': '320 W',
            'Prix (mai 2026)': 'env. 1 500-1 700 € neuf',
            'Idéal pour': 'Choix de la rédaction — la 16 Go la plus rapide',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 Go',
            'Vitesse (7B Q4)': '~150 tok/s',
            'Consommation': '450 W',
            'Prix (mai 2026)': 'env. 2 900-3 200 € neuf / env. 2 600 € d\'occasion',
            'Idéal pour': 'Modèles 33B, bi-GPU pour le 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 Go',
            'Vitesse (7B Q4)': '~160 tok/s',
            'Consommation': '575 W',
            'Prix (mai 2026)': '3 499-3 949 € neuf',
            'Idéal pour': '70B en Q4 sur un seul GPU',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-en.svg',
        imageCaption:
          'Huit GPU grand public pour les LLM locaux comparés par VRAM, vitesse d\'inférence 7B Q4, consommation et prix de mai 2026 sur quatre gammes de budget. La VRAM monte de 12 Go (RTX 3060) à 32 Go (RTX 5090) ; achetez pour la taille de modèle dont vous avez besoin avant d\'optimiser la vitesse.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Quel GPU acheter ?',
        content:
          '**Votre plus gros modèle visé détermine votre gamme ; votre budget tranche entre NVIDIA et AMD à l\'intérieur de cette gamme.** Trouvez la ligne qui correspond à votre situation.',
        columns: ['Votre situation', 'Achetez ceci'],
        rows: [
          { 'Votre situation': 'J\'ai moins de 400 € et je veux exécuter des modèles 7B', 'Achetez ceci': 'RTX 3060 12 Go (d\'occasion)' },
          { 'Votre situation': 'Je veux la carte la moins chère qui exécute des LLM et j\'accepte le travail de configuration', 'Achetez ceci': 'RX 6700 XT (d\'occasion)' },
          { 'Votre situation': 'Je veux exécuter des modèles 14B avec un budget énergie serré', 'Achetez ceci': 'RTX 4060 Ti 16 Go' },
          { 'Votre situation': 'Je veux une carte qui exécute le 14B rapidement et dure plusieurs années', 'Achetez ceci': 'RTX 4070 Ti Super 16 Go' },
          { 'Votre situation': 'Je veux la carte 16 Go la plus rapide et le prix est secondaire', 'Achetez ceci': 'RTX 4080 Super 16 Go' },
          { 'Votre situation': 'J\'ai besoin de modèles 33B ou je prévois une future configuration bi-GPU 70B', 'Achetez ceci': 'RTX 4090 24 Go' },
          { 'Votre situation': 'J\'ai besoin d\'une seule carte qui exécute des modèles 70B en Q4', 'Achetez ceci': 'RTX 5090 32 Go' },
          { 'Votre situation': 'Je ne suis pas sûr et je veux le premier GPU le plus sûr', 'Achetez ceci': 'RTX 3060 12 Go — montez en gamme plus tard si vous la dépassez' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: 'Gamme budget : RTX 3060 12 Go et RX 6700 XT',
        content:
          '**La gamme budget exécute tout modèle 7B et la plupart des modèles 13B — et pour la plupart des nouveaux utilisateurs de LLM locaux, c\'est toute la capacité dont ils ont besoin.** Le RTX 3060 12 Go est le choix recommandé ; le RX 6700 XT est l\'alternative moins chère si vous acceptez la friction de configuration AMD. Le marché de l\'occasion compte le plus dans cette gamme — les prix du neuf ont fortement grimpé avec la flambée de 2026.',
        items: [
          '**RTX 3060 12 Go (env. 340-400 € neuf, moins cher d\'occasion) :** 12 Go de VRAM, 170 W, 15-20 tok/s sur les modèles 7B en Q4. Exécute Mistral 7B, Qwen3 8B, DeepSeek-R1 7B et la plupart des modèles 13B. La variante 12 Go est celle à acheter — évitez la variante 6 Go, limitée aux modèles 3B. Achetez d\'occasion — le stock neuf est en fin de production et gonflé.',
          '**RX 6700 XT (env. 430-490 €, fin de production) :** 12 Go de VRAM, 230 W, 10-14 tok/s sur les modèles 7B. La façon la moins chère d\'entrer dans les LLM locaux, mais plus lente que le RTX 3060 et dépendante d\'AMD ROCm, ce qui ajoute du temps de configuration.',
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
            text: 'Le RX 6700 XT est la carte la moins chère ici, mais prévoyez 3 à 5 heures pour la configuration ROCm sous Linux. Si votre temps vaut plus que les quelques dizaines d\'euros économisés face à un RTX 3060 d\'occasion, achetez la carte NVIDIA.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-680',
            label: 'Vérifier le prix du RTX 3060 12 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'Vérifier le prix du RX 6700 XT sur Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Milieu de gamme : RTX 4060 Ti 16 Go et RX 7800 XT',
        content:
          '**Le milieu de gamme existe pour une raison : 16 Go de VRAM dégagent les modèles 14B que les cartes 12 Go ne peuvent pas faire tenir avec un contexte utilisable.** Si les modèles de classe 14B sont votre cible, c\'est la gamme la moins chère qui les exécute correctement — et le RTX 4060 Ti 16 Go se distingue en restant proche de son tarif de lancement à travers la flambée de 2026.',
        items: [
          '**RTX 4060 Ti 16 Go (env. 780-820 €) :** 16 Go de VRAM, 165 W, environ 20-25 tok/s sur les modèles 7B. Il utilise la même puce GPU que le RTX 4060 Ti 8 Go, la vitesse par token est donc similaire — la version 16 Go achète de la capacité, pas de la vitesse brute. Ses 165 W sont la consommation la plus basse de ce guide rapportée à la capacité, et c\'est le GPU le moins gonflé par la flambée.',
          '**RX 7800 XT (env. 510-560 € neuf) :** 16 Go de VRAM, 263 W. Il n\'a pas été testé individuellement pour ce guide ; attendez-vous à une vitesse dans la plage du RTX 4060 Ti, avec la configuration AMD ROCm comme contrepartie.',
          '**Pourquoi acheter cette gamme :** vous voulez des modèles 14B, vous voulez une faible consommation (RTX 4060 Ti) ou vous voulez 16 Go au prix le plus bas possible.',
          '**Pourquoi éviter cette gamme :** si les modèles 7B suffisent, la gamme budget économise 200 € ; si vous voulez une inférence 14B rapide, le haut de gamme est nettement plus rapide.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Le RTX 4060 Ti 16 Go est une montée en capacité, pas en vitesse, par rapport à la version 8 Go. Achetez-le parce que vous devez faire tenir des modèles 14B, pas parce que vous attendez plus de tokens par seconde.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: 'Vérifier le prix du RTX 4060 Ti 16 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: 'Vérifier le prix du RX 7800 XT sur Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'Haut de gamme : RTX 4080 Super et RTX 4070 Ti Super',
        content:
          '**Le haut de gamme garde 16 Go de VRAM mais ajoute la vitesse qui rend les modèles 7B-14B instantanés et les modèles 22B utilisables.** Les deux cartes font tenir les mêmes modèles que le milieu de gamme — vous payez pour des tokens par seconde, pas pour de la capacité. La flambée de 2026 a fortement creusé l\'écart entre cette gamme et le milieu de gamme.',
        items: [
          '**RTX 4080 Super 16 Go (env. 1 500-1 700 €) :** 16 Go de VRAM, 320 W, environ 120 tok/s sur les modèles 7B. Le choix de la rédaction — la carte 16 Go la plus rapide, et après les mouvements de prix de 2026 elle coûte à peu près autant que le RTX 4070 Ti Super, plus lent.',
          '**RTX 4070 Ti Super 16 Go (env. 1 450-1 630 €) :** 16 Go de VRAM, 285 W. Légèrement plus lent que le RTX 4080 Super à un prix neuf quasi identique — choisissez-le pour sa consommation plus basse de 285 W, ou achetez-le d\'occasion pour la carte 16 Go rapide la moins chère.',
          '**Pourquoi acheter cette gamme :** vous exécutez des modèles 14B en continu et les voulez instantanés, ou vous faites du travail 22B léger et voulez de la marge.',
          '**Pourquoi éviter cette gamme :** si vous avez besoin de modèles 33B ou 70B, aucune carte 16 Go ne les fera tenir — passez à la gamme enthousiaste plutôt que de trop dépenser ici.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Dans cette gamme, optez par défaut pour le RTX 4080 Super — à un prix neuf quasi identique, il est nettement plus rapide que le RTX 4070 Ti Super. Ne choisissez le 4070 Ti Super que pour économiser environ 35 W de consommation, ou achetez-le d\'occasion à prix réduit.',
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
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '770-1179',
            label: 'Vérifier le prix du RTX 4070 Ti Super sur Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Gamme enthousiaste : RTX 4090 et RTX 5090',
        content:
          '**La gamme enthousiaste est la seule qui exécute des modèles au-delà de 22B — et le RTX 5090 32 Go est la seule carte grand public capable de faire tenir un modèle 70B en Q4.** Achetez ici pour la capacité VRAM, pas pour la vitesse ; la vitesse est un effet secondaire. La flambée de 2026 a frappé cette gamme le plus durement, les prix bougent donc d\'une semaine à l\'autre.',
        items: [
          '**RTX 4090 24 Go (env. 2 900-3 200 € neuf / env. 2 600 € d\'occasion) :** 24 Go de VRAM, 450 W, environ 150 tok/s sur les modèles 7B et 36 tok/s sur un modèle 70B Q4. Exécute confortablement les modèles 33B. À noter : la flambée a poussé les prix d\'occasion du RTX 4090 près d\'un RTX 5090 neuf.',
          '**RTX 5090 32 Go (3 499-3 949 € neuf) :** 32 Go de VRAM GDDR7, 575 W, environ 160 tok/s sur le 7B et 45 tok/s sur le 70B Q4. La capacité de 32 Go est l\'argument central — c\'est la seule carte grand public qui exécute un modèle 70B en Q4 sans second GPU.',
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
            text: 'Avant la flambée de 2026, deux RTX 4090 d\'occasion coûtaient moins cher qu\'un RTX 5090. La situation s\'est inversée : à env. 2 600-3 200 € pièce, une paire de RTX 4090 coûte désormais bien plus qu\'un seul RTX 5090. Pour une nouvelle configuration 70B, le RTX 5090 seul est désormais à la fois plus simple et moins cher.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2480-2755',
            label: 'Vérifier le prix du RTX 4090 sur Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '3949-3999',
            label: 'Vérifier le prix du RTX 5090 sur Amazon',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'Combien de VRAM vous faut-il ?',
        content:
          '**En quantification Q4_K_M, un modèle a besoin d\'environ 0,6 Go de VRAM par milliard de paramètres, plus 2-4 Go pour le contexte et la surcharge d\'outillage.** Cette formule se projette directement sur les quatre gammes.',
        items: [
          '**Modèles 7B — 8-9 Go :** tiennent dans toutes les gammes. Une carte 12 Go laisse une marge confortable.',
          '**Modèles 13-14B — 11-13 Go :** ont besoin de 16 Go en pratique une fois le contexte et l\'outillage comptés. Milieu de gamme et au-dessus.',
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
          '**Les prix GPU ont fortement grimpé en 2026 à cause d\'une pénurie de mémoire, poussant les cartes grand public 1,5 à 2 fois au-dessus de leur tarif de lancement.** Cela modifie le calcul d\'achat, planifiez donc autour de cela plutôt qu\'autour des tarifs de lancement.',
        items: [
          '**La cause est la mémoire, pas les GPU.** Une pénurie d\'approvisionnement en GDDR et HBM a renchéri toute carte dotée de mémoire rapide — et les GPU aptes aux LLM sont précisément les cartes à forte VRAM les plus touchées.',
          '**Le RTX 5090 est l\'exemple le plus clair :** un tarif de lancement de 1 999 $, mais env. 3 800 € en magasin en mai 2026 — presque le double.',
          '**Les cartes d\'entrée de gamme ont mieux résisté.** Le RTX 4060 Ti 16 Go reste proche de son tarif de lancement ; la flambée évolue avec la quantité de mémoire rapide qu\'une carte embarque.',
          '**Le marché de l\'occasion est désormais le bon plan.** Un RTX 3060 12 Go ou un RX 6700 XT d\'occasion échappe à l\'essentiel de la flambée — les prix d\'occasion ont bien moins augmenté que ceux du neuf.',
          '**Décision :** si vous pouvez attendre, guettez l\'apaisement de la pénurie ; sinon, achetez d\'occasion quand c\'est possible et prenez la plus petite carte qui correspond à votre modèle visé.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Les prix GPU en 2026 sont 1,5 à 2 fois au-dessus du tarif de lancement à cause d\'une pénurie de puces mémoire, donc un acheteur de LLM locaux devrait privilégier le marché de l\'occasion et la plus petite carte qui correspond au modèle visé.',
          },
          {
            type: 'plain-terms',
            text: 'Les cartes ne sont pas devenues meilleures — la mémoire qu\'elles contiennent est devenue rare et chère. Tant que cela ne s\'apaise pas, traitez le tarif de lancement comme un chiffre historique, achetez d\'occasion quand vous le pouvez et ne payez pas pour plus de VRAM que ce dont votre modèle a réellement besoin.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Arbre de décision : choisissez votre GPU en quatre questions',
        content:
          '**Quatre questions, dans l\'ordre, orientent la plupart des acheteurs vers une seule carte.**',
        items: [
          '**1. Quel est le plus gros modèle que vous voulez exécuter ?** 7B : gamme budget. 14B : milieu de gamme. 22B : haut de gamme. 33B : RTX 4090. 70B : RTX 5090 ou bi-GPU.',
          '**2. Quel est votre plafond budgétaire absolu ?** Sous env. 250 € (d\'occasion) : RTX 3060 12 Go. Sous 600 € : RTX 4060 Ti 16 Go. Env. 1 450-1 700 € : RTX 4080 Super ou 4070 Ti Super. À partir de 2 600 € : RTX 4090 ou RTX 5090.',
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
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-en.svg',
        imageCaption:
          'Flux de décision en quatre questions pour choisir un GPU de LLM local : la plus grande taille de modèle visée fixe la gamme, le plafond budgétaire affine le choix, NVIDIA contre AMD décide la marque, et la marge de l\'alimentation confirme le choix de gamme enthousiaste.',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Prix régionaux et où acheter',
        content:
          '**Les prix GPU varient selon la région — les prix ici sont un instantané français (TVA 20 % incluse), et la flambée de 2026 a touché chaque marché.** Les liens ci-dessous sont de simples liens de recherche de produits ; ils ne portent aucune balise d\'affiliation et ne génèrent aucune commission.',
        items: [
          '**France :** Amazon.fr et LDLC offrent le plus large stock ; Materiel.net et Top Achat sont aussi des références pour les cartes graphiques.',
          '**Comparateur de prix :** Idealo.fr et Geizhals.eu sont les standards pour comparer les prix du neuf en France — vérifiez-y la source la moins chère actuellement.',
          '**Belgique et Suisse :** Alternate.be et Digitec.ch couvrent les marchés francophones voisins ; les prix et la disponibilité diffèrent légèrement de la France.',
          '**Occasion :** LeBonCoin est le plus grand marché français de l\'occasion pour les GPU — souvent le choix nettement moins cher, surtout pour les cartes plus anciennes comme le RTX 3060.',
          '**Disponibilité :** les cartes haut de gamme (RTX 4090, RTX 5090) sont par moments en rupture en 2026 ; attendez-vous à des prix fluctuants et vérifiez plusieurs revendeurs.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'À cause de la flambée de 2026, chaque chiffre de ce guide est un instantané mouvant de mai 2026. Ouvrez toujours l\'annonce actuelle du revendeur avant d\'acheter — les prix ont bougé d\'une semaine à l\'autre.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Parcourir les GPU sur Amazon US',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Parcourir les GPU sur Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Parcourir les GPU sur Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '150-3900',
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
          '**Supposer que le RTX 4060 Ti 16 Go est plus rapide que la version 8 Go.** Il ne l\'est pas — c\'est la même puce GPU avec plus de mémoire. Achetez-le pour la capacité (modèles 14B), pas pour la vitesse.',
          '**S\'ancrer sur le tarif de lancement au lieu du prix actuel.** La flambée de 2026 signifie que les tarifs de lancement ne reflètent plus la réalité. Budgétez face au prix en direct du revendeur, et privilégiez le marché de l\'occasion là où il échappe à la flambée.',
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
          '[Best Value GPU — suivis de prix RTX 5090 / 4090 / 4080 Super](https://bestvaluegpu.com/history/new-and-used-rtx-5090-price-history-and-specs/) — historique des prix US neuf et occasion utilisé pour l\'instantané de prix de mai 2026.',
          '[Spécifications AMD Radeon](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Chiffres officiels de VRAM et de consommation pour les RX 7800 XT et RX 6700 XT.',
          '[Meilleurs GPU pour LLM locaux 2026](/local-llms/best-gpus-for-local-llms?lang=fr) — tests matériels PromptQuorum : vitesses d\'inférence 7B Q4 mesurées pour les RTX 3060, 4080, 4090 et 5090.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quel est le GPU le moins cher capable de bien exécuter des LLM locaux ?',
            a: 'Un NVIDIA RTX 3060 12 Go d\'occasion est le GPU le moins cher qui exécute bien les LLM locaux. Ses 12 Go de VRAM font tenir tout modèle 7B et la plupart des modèles 13B en quantification Q4, à 15-20 tokens par seconde. Le RX 6700 XT, moins cher, fonctionne aussi, mais il est plus lent et exige une configuration AMD ROCm. Achetez d\'occasion — les prix du neuf ont environ doublé dans la flambée de 2026.',
          },
          {
            q: 'Pourquoi les prix GPU sont-ils si élevés en 2026 ?',
            a: 'Une pénurie de puces mémoire a provoqué la flambée des prix GPU de 2026. L\'approvisionnement en GDDR et HBM s\'est resserré, renchérissant chaque carte graphique dotée de mémoire rapide, et les cartes à forte VRAM aptes aux LLM ont été les plus touchées. En mai 2026, la plupart des cartes se vendent 1,5 à 2 fois au-dessus de leur tarif de lancement — un RTX 5090 lancé à 1 999 $ se vend autour de 3 800 €. Le marché de l\'occasion a échappé à l\'essentiel de la hausse.',
          },
          {
            q: 'Combien de VRAM me faut-il pour des LLM locaux ?',
            a: 'En quantification Q4_K_M, comptez environ 0,6 Go de VRAM par milliard de paramètres plus 2-4 Go de surcharge. Cela donne 8-9 Go pour les modèles 7B, 11-13 Go pour le 14B, 19-22 Go pour le 33B et 39-42 Go pour le 70B. Une carte 12 Go couvre confortablement le 7B ; le 70B exige un RTX 5090 32 Go ou une configuration bi-GPU.',
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
            a: 'Seul le RTX 5090 32 Go, et uniquement en quantification Q4 où un modèle 70B a besoin d\'environ 39-42 Go — ce qui implique une quantification agressive ou un déchargement partiel. Un RTX 4090 24 Go ne peut pas faire tenir un modèle 70B en Q4 seul ; la solution courante est deux RTX 4090 pour une VRAM combinée, bien que la flambée de prix de 2026 ait rendu cette paire plus chère qu\'un seul RTX 5090.',
          },
          {
            q: 'Le RTX 5090 vaut-il la peine face au RTX 4090 pour des LLM locaux ?',
            a: 'Uniquement si vous avez spécifiquement besoin d\'exécuter des modèles 70B sur une seule carte. Le RTX 5090 a 32 Go de VRAM contre 24 Go pour le RTX 4090, ce qui est le facteur décisif. Pour les modèles 7B-33B, le RTX 4090 fait tenir les mêmes modèles ; après la flambée de 2026 les deux sont proches en prix, donc les 8 Go supplémentaires et la vitesse légèrement plus élevée du 5090 en font le meilleur achat neuf si le budget le permet.',
          },
          {
            q: 'Quelle alimentation me faut-il pour ces GPU ?',
            a: 'Adaptez l\'alimentation à la gamme : une unité de 550 W convient au RTX 3060, 650-750 W aux RTX 4060 Ti et 4070 Ti Super, 850 W au RTX 4090, et 850-1000 W sont nécessaires pour le RTX 5090, qui tire 575 W à lui seul. Des alimentations sous-dimensionnées causent de l\'instabilité en charge.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Articles liés',
        items: [
          '[Vérifiez les besoins complets en VRAM pour chaque taille de modèle](/local-llms/how-much-vram-local-llm?lang=fr) — la méthode complète de VRAM par taille de modèle derrière la formule rapide de ce guide.',
          '[Comparez plus de 15 GPU avec des benchmarks LLM locaux mesurés](/local-llms/best-gpus-for-local-llms?lang=fr) — le jeu de benchmarks GPU élargi, incluant des cartes plus anciennes et serveur au-delà de ces huit.',
          '[Découvrez quels modèles tournent sur un RTX 3060 12 Go budget](/local-llms/best-budget-gpus-local-llm?lang=fr) — les vitesses modèle par modèle de la gamme budget, y compris la distinction 6 Go contre 12 Go.',
          '[Comparez le RTX 5090 et le RTX 4090 face à face](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=fr) — quand la montée vers le RTX 5090 vaut la peine et quand le RTX 4090 suffit.',
          '[Comprenez comment la quantification Q4_K_M fixe le coût VRAM](/local-llms/llm-quantization-explained?lang=fr) — pourquoi Q4_K_M est la valeur par défaut et comment la quantification change le calcul de VRAM.',
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
    title: 'ローカルLLM向けGPUの選び方：完全購入ガイド2026',
    seoTitle: 'ローカルLLM向けベストGPU 2026：低予算からRTX 5090まで',
    intro:
      'ローカルLLM向けのGPUアドバイスの多くは、見るべきでない数値を最適化しています。トークン毎秒の速度はモデルが答える速さを決めますが、VRAMはそもそもモデルが動くかどうかを決めます。そして収まらないモデルは、収まるモデルよりも無限に遅いのです。本ガイドは、購入を実際に左右する数値、つまりVRAM容量・実測した推論速度・消費電力・価格で、4つの価格帯にわたり8枚のコンシューマーGPUを比較します。価格について1点注意があります。GPU価格はメモリ不足により2026年に急騰し、カードは現在、当初のメーカー希望小売価格の1.5～2倍で売られています。本記事の価格はすべて2026年5月時点のスナップショットですので、購入前に最新価格を確認してください。',
    metaDescription:
      'ローカルLLM向けに8枚のGPUを4つの予算帯で比較：RTX 3060からRTX 5090まで。VRAM、トークン毎秒、消費電力、2026年5月の価格、各価格帯が動かせるモデルサイズを掲載。',
    twitterDescription:
      'RTX 3060、RX 6700 XT、RTX 4060 Ti 16GB、RX 7800 XT、RTX 4070 Ti Super、RTX 4080 Super、RTX 4090、RTX 5090 — 8枚のGPU、4つの予算、ひとつの判断基準：VRAMで選ぶ。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral 7B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
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
    ],
    leadAnswerBlock:
      '**ローカルLLMにとって最良のGPUは、最速のカードではなく、VRAMが自分のモデルに合うカードです。RTX 3060 12 GBはあらゆる7Bモデルを動かし、RTX 4090 24 GBは33Bモデルを扱い、RTX 5090 32 GBは70B作業を1枚でこなせる唯一のコンシューマーカードです。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にローカルLLMを動かすにはどのGPUを買うべきですか？',
        answer:
          'まずVRAM、次に速度で選びます。中古のRTX 3060 12 GBは低予算の選択肢で、あらゆる7Bモデルを動かします。RTX 4060 Ti 16 GBは14Bモデル向けの中位帯の選択肢です。RTX 4090 24 GBは33Bモデルを動かし、RTX 5090 32 GBはデュアルGPU構成なしで70B作業をこなせる唯一のコンシューマーカードです。なお、2026年の価格はメーカー希望小売価格を大きく上回っています。',
        bullets: [
          '低予算：RTX 3060 12 GB、中古 — あらゆる7Bモデルを15～20 tok/sで動かす',
          '中位：RTX 4060 Ti 16 GB、¥69,800 — 14Bモデルを余裕をもって動かす',
          'エンスージアスト：RTX 5090 32 GB、¥659,800 — 70Bを1枚でこなせる唯一のコンシューマーカード',
          '2026年のGPU価格はメーカー希望小売価格の1.5～2倍 — 可能なら中古で買う',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: '要点', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '編集部の選択', anchor: '#editors-choice' },
      { label: 'GPU比較表', anchor: '#comparison-table' },
      { label: 'どのGPUを買うべきか？', anchor: '#which-gpu' },
      { label: '低予算帯', anchor: '#budget-tier' },
      { label: '中位帯', anchor: '#mid-tier' },
      { label: '上位帯', anchor: '#high-tier' },
      { label: 'エンスージアスト帯', anchor: '#enthusiast-tier' },
      { label: 'VRAMはどれくらい必要か？', anchor: '#vram-needs' },
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
          '**価格は2026年に急騰しました。** メモリ不足がすべての市場でGPU価格をメーカー希望小売価格の1.5～2倍に押し上げました。RTX 5090は当初の発売価格ではなく約¥659,800です。本記事の価格はすべて2026年5月時点のスナップショットとして扱い、中古市場を活用してください。',
          '**低予算の選択：NVIDIA RTX 3060 12 GB**（新品¥40,000前後、中古はさらに安い） — あらゆる7Bモデルを15～20 tok/sで動かし、ほとんどの13BモデルをQ4で動かします。2026年にローカルLLMを始める入口として最良のコストパフォーマンスです。',
          '**中位の選択：NVIDIA RTX 4060 Ti 16 GB**（¥69,800前後） — 16 GBのVRAMはコンテキストの余裕を残して14Bモデルをこなし、メーカー希望小売価格に最も近いGPUであり、急騰の影響を最も受けていません。',
          '**上位の選択：NVIDIA RTX 4080 Super 16 GB**（約¥290,000） — 最速の16 GBカードで、2026年の価格変動後はより遅いRTX 4070 Ti Superとほぼ同価格です。',
          '**エンスージアストの選択：NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — RTX 4090（新品¥375,000）は33Bモデルを動かし、RTX 5090（¥659,800）はデュアルGPU構成なしで70BモデルをQ4で収められる唯一のコンシューマーカードです。',
          '**AMDは選択肢になりますが手間が増えます。** RX 6700 XT（12 GB）とRX 7800 XT（16 GB）は1円あたりのVRAMで競争力がありますが、ROCmのセットアップはNVIDIA CUDAに比べて数時間の作業が加わります。',
          '**消費電力は価格帯に比例します。** RTX 3060は170 W、RTX 5090は575 Wを消費し、850～1000 Wの電源が必要です。電源はカードと一緒に予算に入れてください。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**低予算帯：** RTX 3060 12 GBまたはRX 6700 XT 12 GB — 7Bとほとんどの13Bモデルを動かす。',
          '**中位帯：** RTX 4060 Ti 16 GBまたはRX 7800 XT 16 GB — 14Bモデルを余裕をもって動かす。',
          '**上位帯：** RTX 4080 Super 16 GBまたはRTX 4070 Ti Super 16 GB — 高速な14B推論、軽めの22B作業。',
          '**エンスージアスト帯：** RTX 4090 24 GBまたはRTX 5090 32 GB — 33Bモデル、5090ではQ4で70B。',
          '**Q4_K_MでのVRAMの目安：** パラメータ10億あたり約0.6 GB、加えてコンテキストとツールに2～4 GB。',
          '**消費電力の範囲：** RTX 3060 170 W、RTX 4060 Ti 165 W、RTX 4070 Ti Super 285 W、RTX 4080 Super 320 W、RTX 4090 450 W、RTX 5090 575 W。',
          '**2026年の価格の実情：** メモリ不足が価格をメーカー希望小売価格の1.5～2倍に押し上げ、中古市場のほうがコストパフォーマンスで優れることが多い。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '編集部の選択：RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**長く使えるカードを求め、¥150,000を超える予算を確保できる購入者には、NVIDIA RTX 4080 Super 16 GBがVRAM・速度・価格のバランスを取った選択肢です。** 16 GBのVRAMはコンテキストの余裕を残してあらゆる14Bモデルをこなし、ここで最速の16 GBカードで約120 tok/s、約¥290,000で、2026年の価格変動後はより遅いRTX 4070 Ti Superとほぼ同価格です。これが上位帯で明確なコストパフォーマンスの選択となります。予算が¥90,000以下に固定されているなら、RTX 4060 Ti 16 GBがコストパフォーマンスの選択です — 2026年の急騰の影響が最も小さかったカードです。33Bや70Bモデルが特に必要な場合に限り、さらに支出してください。',
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
        title: '2026年のローカルLLMで8枚のGPUを比較',
        content:
          'VRAMと消費電力の数値はメーカー仕様です。RTX 3060、RTX 4080 Super、RTX 4090、RTX 5090の推論速度はPromptQuorumのハードウェアテストによる実測7B Q4の値で、RTX 4060 Ti 16 GB、RX 7800 XT、RTX 4070 Ti Superの数値はファミリー単位の推定値です。価格は2026年5月時点の日本のスナップショット（税込）です — 2026年のメモリ不足がメーカー希望小売価格の1.5～2倍に押し上げているため、購入前に再確認してください。',
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
        columns: ['GPU', 'VRAM', '速度（7B Q4）', '消費電力', '価格（2026年5月）', '最適な用途'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            '速度（7B Q4）': '15～20 tok/s',
            '消費電力': '170 W',
            '価格（2026年5月）': '新品¥40,000前後 / 中古はさらに安い',
            '最適な用途': '低予算の入口 — あらゆる7Bモデル',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            '速度（7B Q4）': '10～14 tok/s',
            '消費電力': '230 W',
            '価格（2026年5月）': '新品¥44,000前後',
            '最適な用途': '最も安いVRAM、AMDのセットアップを許容',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約20～25 tok/s',
            '消費電力': '165 W',
            '価格（2026年5月）': '¥69,800前後',
            '最適な用途': '中位帯 — 14Bモデル、低消費電力',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約18～24 tok/s（推定）',
            '消費電力': '263 W',
            '価格（2026年5月）': '新品¥56,000～75,000',
            '最適な用途': 'AMDで16 GB、ROCmのセットアップを許容',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約80～90 tok/s（推定）',
            '消費電力': '285 W',
            '価格（2026年5月）': '約¥300,000',
            '最適な用途': '高速な14B、低めの消費電力',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            '速度（7B Q4）': '約120 tok/s',
            '消費電力': '320 W',
            '価格（2026年5月）': '約¥290,000（新品）',
            '最適な用途': '編集部の選択 — 最速の16 GB',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            '速度（7B Q4）': '約150 tok/s',
            '消費電力': '450 W',
            '価格（2026年5月）': '新品¥375,000 / 中古約¥290,000',
            '最適な用途': '33Bモデル、70B用のデュアルGPU',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            '速度（7B Q4）': '約160 tok/s',
            '消費電力': '575 W',
            '価格（2026年5月）': '新品¥659,800',
            '最適な用途': '1枚のGPUでQ4の70B',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-en.svg',
        imageCaption:
          'ローカルLLM向けの8枚のコンシューマーGPUを、VRAM、7B Q4推論速度、消費電力、2026年5月の価格で4つの予算帯にわたり比較。VRAMは12 GB（RTX 3060）から32 GB（RTX 5090）まで上がります。速度を最適化する前に、必要なモデルサイズで選んでください。',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'どのGPUを買うべきか？',
        content:
          '**対象とする最大のモデルが価格帯を決め、その帯の中では予算がNVIDIAかAMDかを決めます。** 自分の状況に合う行を見つけてください。',
        columns: ['あなたの状況', 'これを買う'],
        rows: [
          { 'あなたの状況': '予算は¥60,000未満で7Bモデルを動かしたい', 'これを買う': 'RTX 3060 12 GB（中古）' },
          { 'あなたの状況': 'LLMを動かせる最も安いカードがほしく、セットアップ作業を許容する', 'これを買う': 'RX 6700 XT（中古）' },
          { 'あなたの状況': '電力予算が厳しい中で14Bモデルを動かしたい', 'これを買う': 'RTX 4060 Ti 16 GB' },
          { 'あなたの状況': '14Bを高速に動かし数年もつカードがほしい', 'これを買う': 'RTX 4070 Ti Super 16 GB' },
          { 'あなたの状況': '最速の16 GBカードがほしく価格は二の次', 'これを買う': 'RTX 4080 Super 16 GB' },
          { 'あなたの状況': '33Bモデルが必要、または将来のデュアルGPU 70B構成を計画している', 'これを買う': 'RTX 4090 24 GB' },
          { 'あなたの状況': '70BモデルをQ4で動かす1枚のカードが必要', 'これを買う': 'RTX 5090 32 GB' },
          { 'あなたの状況': '迷っていて最も無難な最初のGPUがほしい', 'これを買う': 'RTX 3060 12 GB — 物足りなくなったら後で買い替える' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '低予算帯：RTX 3060 12 GBとRX 6700 XT',
        content:
          '**低予算帯はあらゆる7Bモデルとほとんどの13Bモデルを動かします。そして初めてローカルLLMを使う多くの人にとって、それが必要なすべての能力です。** RTX 3060 12 GBが推奨の選択肢で、AMDのセットアップの手間を許容できるならRX 6700 XTがより安い代替です。この帯では中古市場が最も重要です — 新品価格は2026年の急騰で大きく上がりました。',
        items: [
          '**RTX 3060 12 GB（新品¥40,000前後、中古はさらに安い）：** 12 GB VRAM、170 W、7BモデルをQ4で15～20 tok/s。Mistral 7B、Qwen3 8B、DeepSeek-R1 7B、ほとんどの13Bモデルを動かします。買うべきは12 GB版です — 3Bモデルに限られる6 GB版は避けてください。中古で買ってください — 新品在庫は生産終了で価格も高騰しています。',
          '**RX 6700 XT（新品¥44,000前後）：** 12 GB VRAM、230 W、7Bモデルで10～14 tok/s。ローカルLLMへの最も安い入口ですが、RTX 3060より遅く、AMD ROCmに依存するためセットアップ時間が加わります。',
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
            text: 'RX 6700 XTはここで最も安いカードですが、LinuxでのROCmセットアップに3～5時間を見込んでください。中古RTX 3060に対して節約できる金額より自分の時間のほうが価値があるなら、NVIDIAのカードを買ってください。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-680',
            label: 'AmazonでRTX 3060 12GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'AmazonでRX 6700 XTの価格を確認',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '中位帯：RTX 4060 Ti 16 GBとRX 7800 XT',
        content:
          '**中位帯はひとつの理由のために存在します。16 GBのVRAMは、12 GBカードでは実用的なコンテキストとともに収められない14Bモデルをこなします。** 14Bクラスのモデルが対象なら、これがそれらを適切に動かす最も安い帯です — そしてRTX 4060 Ti 16 GBは、2026年の急騰を通じてもメーカー希望小売価格に近いままという点で注目に値します。',
        items: [
          '**RTX 4060 Ti 16 GB（¥69,800前後）：** 16 GB VRAM、165 W、7Bモデルで約20～25 tok/s。8 GB版RTX 4060 Tiと同じGPUダイを使うため、トークンあたりの速度は同等です — 16 GB版は速度ではなく容量を買うものです。165 Wという消費電力は、能力に対して本ガイドで最も低く、急騰の影響も最も小さいGPUです。',
          '**RX 7800 XT（新品¥56,000～75,000）：** 16 GB VRAM、263 W。本ガイドでは個別に計測していません。速度はRTX 4060 Tiの範囲を見込み、AMD ROCmのセットアップが引き換えになります。',
          '**この帯を買う理由：** 14Bモデルがほしい、低消費電力がほしい（RTX 4060 Ti）、または可能な限り安く16 GBがほしい。',
          '**この帯を避ける理由：** 7Bモデルで足りるなら低予算帯が¥30,000ほど節約でき、高速な14B推論がほしいなら上位帯のほうが明確に速いです。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GBは8 GB版に対する容量のアップグレードであり、速度のアップグレードではありません。トークン毎秒の増加を期待してではなく、14Bモデルを収める必要があるから買ってください。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: 'AmazonでRTX 4060 Ti 16GBの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: 'AmazonでRX 7800 XTの価格を確認',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: '上位帯：RTX 4080 SuperとRTX 4070 Ti Super',
        content:
          '**上位帯は16 GBのVRAMを保ちつつ、7B～14Bモデルを瞬時に感じさせ22Bモデルを実用的にする速度を加えます。** 両カードとも中位帯と同じモデルを収めます — 容量ではなくトークン毎秒に対して支払っているのです。2026年の急騰はこの帯と中位帯の差を大きく広げました。',
        items: [
          '**RTX 4080 Super 16 GB（約¥290,000）：** 16 GB VRAM、320 W、7Bモデルで約120 tok/s。編集部の選択 — 最速の16 GBカードで、2026年の価格変動後はより遅いRTX 4070 Ti Superとほぼ同価格です。',
          '**RTX 4070 Ti Super 16 GB（約¥300,000）：** 16 GB VRAM、285 W。ほぼ同じ新品価格でRTX 4080 Superよりわずかに遅いです — 285 Wという低めの消費電力のために選ぶか、最も安い高速16 GBカードとして中古で買ってください。',
          '**この帯を買う理由：** 14Bモデルを常に動かし瞬時の応答がほしい、または軽めの22B作業をして余裕がほしい。',
          '**この帯を避ける理由：** 33Bや70Bモデルが必要なら、どの16 GBカードもそれらを収められません — ここで使いすぎる代わりにエンスージアスト帯へ移ってください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'この帯では既定でRTX 4080 Superを選んでください — ほぼ同じ新品価格で、RTX 4070 Ti Superより明確に速いです。約35 Wの消費電力を節約したい場合、または中古で割安に買える場合に限り4070 Ti Superを選んでください。',
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
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '770-1179',
            label: 'AmazonでRTX 4070 Ti Superの価格を確認',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'エンスージアスト帯：RTX 4090とRTX 5090',
        content:
          '**エンスージアスト帯は22Bを超えるモデルを動かせる唯一の帯であり、RTX 5090 32 GBは70BモデルをQ4で収められる唯一のコンシューマーカードです。** ここでは速度ではなくVRAM容量のために買ってください。速度は副産物です。2026年の急騰はこの帯を最も激しく直撃したため、価格は週ごとに動きます。',
        items: [
          '**RTX 4090 24 GB（新品¥375,000 / 中古約¥290,000）：** 24 GB VRAM、450 W、7Bモデルで約150 tok/s、70B Q4モデルで36 tok/s。33Bモデルを余裕をもって動かします。なお、急騰により中古RTX 4090の価格は新品RTX 5090に近づいています。',
          '**RTX 5090 32 GB（新品¥659,800）：** 32 GB GDDR7 VRAM、575 W、7Bで約160 tok/s、70B Q4で45 tok/s。32 GBの容量が目玉です — 2枚目のGPUなしで70BモデルをQ4で動かせる唯一のコンシューマーカードです。',
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
            text: '2026年の急騰前は、中古RTX 4090を2枚買うほうがRTX 5090 1枚より安価でした。それが逆転しました。1枚あたり約¥290,000～375,000のため、RTX 4090を2枚揃えると今ではRTX 5090 1枚をかなり上回ります。新規の70B構成では、RTX 5090 1枚のほうが今や簡単で安価です。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2480-2755',
            label: 'AmazonでRTX 4090の価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '3949-3999',
            label: 'AmazonでRTX 5090の価格を確認',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: 'VRAMはどれくらい必要か？',
        content:
          '**Q4_K_M量子化では、モデルはパラメータ10億あたり約0.6 GBのVRAMに加え、コンテキストとツールのオーバーヘッドに2～4 GBを必要とします。** この式は4つの価格帯に直接対応します。',
        items: [
          '**7Bモデル — 8～9 GB：** どの帯にも収まります。12 GBカードなら余裕があります。',
          '**13～14Bモデル — 11～13 GB：** コンテキストとツールを数えると実際には16 GBが必要です。中位帯以上。',
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
          '**GPU価格はメモリ不足のため2026年に急騰し、コンシューマーカードを当初のメーカー希望小売価格の1.5～2倍に押し上げました。** これは購入の計算を変えるため、発売価格ではなくこれを前提に計画してください。',
        items: [
          '**原因はGPUではなくメモリです。** GDDRとHBMの供給不足が、高速メモリを積むあらゆるカードのコストを上げました — そしてLLM対応GPUは、まさに最も影響を受ける高VRAMカードです。',
          '**RTX 5090が最も明確な例です：** 発売価格は1,999ドルでしたが、2026年5月の店頭では約¥659,800 — ほぼ倍です。',
          '**下位のカードはより持ちこたえました。** RTX 4060 Ti 16 GBはメーカー希望小売価格に近い水準にあります。急騰はカードが積む高速メモリの量に比例します。',
          '**今や中古市場がコストパフォーマンスの選択です。** 中古のRTX 3060 12 GBやRX 6700 XTは急騰の大半を免れます — 中古価格は新品価格よりはるかに上昇が小さいです。',
          '**判断：** 待てるなら不足の緩和を見守り、待てないなら可能な限り中古で買い、対象モデルに合う最小のカードを買ってください。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026年のGPU価格はメモリチップ不足のためメーカー希望小売価格の1.5～2倍であり、ローカルLLMの購入者は中古市場と、対象モデルに合う最小のカードを優先すべきです。',
          },
          {
            type: 'plain-terms',
            text: 'カードが良くなったわけではありません — その中のメモリが希少で高価になったのです。これが緩和するまで、メーカー希望小売価格は過去の数字として扱い、可能なら中古で買い、モデルが実際に必要とする以上のVRAMにお金を払わないでください。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '判断フローチャート：4つの質問でGPUを選ぶ',
        content:
          '**4つの質問を順に答えると、ほとんどの購入者は1枚のカードに行き着きます。**',
        items: [
          '**1. 動かしたい最大のモデルは何ですか？** 7B：低予算帯。14B：中位帯。22B：上位帯。33B：RTX 4090。70B：RTX 5090またはデュアルGPU。',
          '**2. 動かせない予算の上限はいくらですか？** 約¥40,000未満（中古）：RTX 3060 12 GB。¥90,000未満：RTX 4060 Ti 16 GB。約¥290,000～300,000：RTX 4080 SuperまたはRTX 4070 Ti Super。¥375,000以上：RTX 4090またはRTX 5090。',
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
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-en.svg',
        imageCaption:
          'ローカルLLM向けGPUを選ぶための4つの質問による判断フロー：対象とする最大のモデルサイズが価格帯を決め、予算の上限が選択を絞り、NVIDIA対AMDがブランドを決め、電源の余裕がエンスージアスト帯の選択を確定します。',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '地域別価格と購入先',
        content:
          '**GPU価格は地域によって異なります — ここでの価格は2026年5月時点の日本のスナップショット（消費税込）であり、2026年の急騰はあらゆる市場を直撃しました。** 以下のリンクは単なる製品検索リンクで、アフィリエイトタグは付いておらず、手数料を生みません。',
        items: [
          '**日本：** Amazon.co.jpとドスパラ・パソコン工房・TSUKUMOがグラフィックカードの主な購入先です。',
          '**価格比較：** Kakaku.com（価格.com）は日本で新品価格を比較する標準であり、現在最も安い購入先をそこで確認してください。',
          '**自作系ショップ：** アーク（ark）やArkなどの自作PC専門店は、ハイエンドGPUの在庫がオンライン小売より早く入ることがあります。',
          '**中古：** メルカリやヤフオク！は日本のGPUの主な中古市場です — 特にRTX 3060のような古いカードでは大幅に安い選択肢になることが多いです。',
          '**在庫状況：** ハイエンドカード（RTX 4090、RTX 5090）は2026年には時折品薄で、価格は変動し、為替の影響も受けます。複数の小売店を確認してください。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '2026年の急騰のため、本ガイドのすべての価格は変動の速い2026年5月時点のスナップショットです。購入前に必ず現在の小売店の出品を開いてください — 価格は週ごとに動いています。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Amazon USでGPUを探す',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Amazon.deでGPUを探す',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: 'Amazon.frでGPUを探す',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '150-3900',
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
          '**RTX 4060 Ti 16 GBが8 GB版より速いと思い込む。** 速くありません — メモリが多いだけの同じGPUダイです。速度ではなく容量（14Bモデル）のために買ってください。',
          '**現在価格ではなくメーカー希望小売価格を基準にする。** 2026年の急騰により、発売価格はもはや実態を反映しません。小売店のリアルタイム価格で予算を組み、急騰を免れる中古市場を優先してください。',
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
          '[Best Value GPU — RTX 5090 / 4090 / 4080 Super 価格トラッカー](https://bestvaluegpu.com/history/new-and-used-rtx-5090-price-history-and-specs/) — 2026年5月の価格スナップショットに使用した米国の新品・中古価格履歴。',
          '[AMD Radeon 仕様](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XTとRX 6700 XTの公式VRAMと消費電力。',
          '[ローカルLLM向けベストGPU 2026](/local-llms/best-gpus-for-local-llms?lang=ja) — PromptQuorumのハードウェアテスト：RTX 3060、4080、4090、5090の実測7B Q4推論速度。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'ローカルLLMをうまく動かせる最も安いGPUは何ですか？',
            a: '中古のNVIDIA RTX 3060 12 GBが、ローカルLLMをうまく動かせる最も安いGPUです。12 GBのVRAMはあらゆる7Bモデルとほとんどの13BモデルをQ4量子化で、15～20トークン毎秒で収めます。より安いRX 6700 XTでも動きますが、より遅く、AMD ROCmのセットアップが必要です。中古で買ってください — 新品価格は2026年の急騰でおよそ倍になりました。',
          },
          {
            q: 'なぜ2026年のGPU価格はこれほど高いのですか？',
            a: 'メモリチップ不足が2026年のGPU価格急騰を引き起こしました。GDDRとHBMの供給が逼迫し、高速メモリを積むあらゆるグラフィックカードのコストが上がり、高VRAMでLLM対応のカードが最も激しく直撃されました。2026年5月時点で、ほとんどのカードは当初のメーカー希望小売価格の1.5～2倍で売られています — RTX 5090は1,999ドルで発売されましたが約¥659,800で取引されています。中古市場は値上がりの大半を免れました。',
          },
          {
            q: 'ローカルLLMにはどれくらいのVRAMが必要ですか？',
            a: 'Q4_K_M量子化では、パラメータ10億あたり約0.6 GBのVRAMに2～4 GBのオーバーヘッドを加えて見積もってください。これは7Bモデルで8～9 GB、14Bで11～13 GB、33Bで19～22 GB、70Bで39～42 GBを意味します。12 GBカードは7Bを余裕でカバーし、70BにはRTX 5090 32 GBかデュアルGPU構成が必要です。',
          },
          {
            q: 'RTX 4060 Ti 16 GBは8 GB版より速いですか？',
            a: 'いいえ。RTX 4060 Ti 16 GBと8 GB版は同じGPUダイを使うため、トークンあたりの推論速度は同等です — 7Bモデルで約20～25トークン毎秒です。16 GB版は容量を買うもので、8 GBに収まらない14Bモデルを動かせるようにします。速度ではなくVRAMのために買ってください。',
          },
          {
            q: 'ローカルLLMにはNVIDIAとAMDのどちらを買うべきですか？',
            a: 'すでにAMDのハードウェアを持っているか、大幅な値引きを見つけた場合を除き、NVIDIAを買ってください。NVIDIA CUDAはOllama、LM Studio、llama.cppですぐに動きます。RX 6700 XTやRX 7800 XTといったAMDカードは1円あたりのVRAMで競争力がありますが、ROCmのセットアップはLinuxで通常数時間かかります。',
          },
          {
            q: '1枚のGPUで70Bモデルを動かせますか？',
            a: 'RTX 5090 32 GBのみで、しかも70Bモデルが約39～42 GBを必要とするQ4量子化でのみです — つまり積極的な量子化または部分的なオフロードを意味します。24 GBのRTX 4090は70BモデルをQ4で単独では収められません。一般的な解決策はVRAMを合算するためのRTX 4090 2枚ですが、2026年の価格急騰によりこのペアはRTX 5090 1枚より高くなっています。',
          },
          {
            q: 'ローカルLLMでRTX 5090はRTX 4090に対して価値がありますか？',
            a: '70Bモデルを1枚のカードで動かす必要が特にある場合に限ります。RTX 5090はRTX 4090の24 GBに対して32 GBのVRAMを持ち、これが決め手です。7B～33BモデルではRTX 4090も同じモデルを収めます。2026年の急騰後は両者の価格が近いため、予算が許すなら5090の追加8 GBとわずかに高い速度が新規購入としてより良い選択になります。',
          },
          {
            q: 'これらのGPUにはどの電源が必要ですか？',
            a: '電源を価格帯に合わせてください：550 WのユニットはRTX 3060に、650～750 WはRTX 4060 Tiと4070 Ti Superに、850 WはRTX 4090に適し、単体で575 Wを消費するRTX 5090には850～1000 Wが必要です。容量不足の電源は負荷時に不安定を引き起こします。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[各モデルサイズの完全なVRAM要件を確認する](/local-llms/how-much-vram-local-llm?lang=ja) — 本ガイドの簡易式の背後にある、モデルサイズ別VRAMの完全な手法。',
          '[実測したローカルLLMベンチマークで15枚以上のGPUを比較する](/local-llms/best-gpus-for-local-llms?lang=ja) — この8枚を超え、より古いカードやサーバーカードも含む広範なGPUベンチマークセット。',
          '[低予算のRTX 3060 12 GBでどのモデルが動くか見る](/local-llms/best-budget-gpus-local-llm?lang=ja) — 6 GB対12 GBの違いを含む、低予算帯のモデル別速度。',
          '[RTX 5090とRTX 4090を直接比較する](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=ja) — RTX 5090へのアップグレードに価値があるとき、RTX 4090で足りるとき。',
          '[Q4_K_M量子化がVRAMコストをどう決めるか理解する](/local-llms/llm-quantization-explained?lang=ja) — なぜQ4_K_Mが既定なのか、量子化がVRAMの計算をどう変えるか。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: '本地大模型显卡选购指南 2026',
    seoTitle: '2026 本地大模型最佳显卡：从入门到 RTX 5090',
    intro:
      '大多数关于本地大模型显卡的建议都在优化错误的数字。每秒 token 的速度决定模型回答的快慢，但显存决定模型能否运行——一个装不下的模型，比一个装得下的模型慢无数倍。本指南在四个价位档次中比较八款消费级显卡，依据真正决定购买的数字：显存容量、实测推理速度、功耗和价格。关于价格有一点提醒：2026 年因内存短缺，显卡价格大涨，目前售价为原始建议零售价的 1.5 到 2 倍——本文每个价格都是 2026 年 5 月的快照，购买前请确认当前价格。',
    metaDescription:
      '八款显卡在四个预算档次中对比本地大模型表现：从 RTX 3060 到 RTX 5090。显存、token/s、功耗和 2026 年 5 月价格，附每档可运行的模型规模。',
    twitterDescription:
      'RTX 3060、RX 6700 XT、RTX 4060 Ti 16GB、RX 7800 XT、RTX 4070 Ti Super、RTX 4080 Super、RTX 4090、RTX 5090——八款显卡，四个预算，一条原则：按显存买。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 4 Scout',
      'Qwen3 8B',
      'Mistral 7B',
      'DeepSeek-R1 7B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'AMD RX 6700 XT',
      'NVIDIA RTX 4060 Ti 16 GB',
      'AMD RX 7800 XT',
      'NVIDIA RTX 4070 Ti Super',
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
    ],
    leadAnswerBlock:
      '**本地大模型最佳显卡是显存与你的模型相匹配的那一款，而不是最快的那一款。RTX 3060 12 GB 能运行任何 7B 模型，RTX 4090 24 GB 能处理 33B 模型，RTX 5090 32 GB 是唯一能单卡运行 70B 工作的消费级显卡。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年运行本地大模型应该买哪款显卡？',
        answer:
          '先按显存买，再看速度。二手 RTX 3060 12 GB（$150-250）是预算之选，能运行任何 7B 模型。RTX 4060 Ti 16 GB（约 $424）是面向 14B 模型的中端之选。RTX 4090 24 GB 能运行 33B 模型，RTX 5090 32 GB 是唯一无需双卡构建就能处理 70B 工作的消费级显卡。注意 2026 年价格远高于建议零售价。',
        bullets: [
          '预算：RTX 3060 12 GB，二手 $150-250（全新约 $350-680），以 15-20 tok/s 运行任何 7B 模型',
          '中端：RTX 4060 Ti 16 GB，约 $424，运行 14B 模型有余量',
          '发烧级：RTX 5090 32 GB，约 $3,949，唯一能单卡运行 70B 的消费级显卡',
          '2026 年显卡价格为建议零售价的 1.5 到 2 倍——能买二手就买二手',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: '要点总结', anchor: '#key-takeaways' },
      { label: '速览事实', anchor: '#quick-facts' },
      { label: '编辑推荐', anchor: '#editors-choice' },
      { label: '显卡对比表', anchor: '#comparison-table' },
      { label: '你该买哪款显卡？', anchor: '#which-gpu' },
      { label: '预算档', anchor: '#budget-tier' },
      { label: '中端档', anchor: '#mid-tier' },
      { label: '高端档', anchor: '#high-tier' },
      { label: '发烧档', anchor: '#enthusiast-tier' },
      { label: '你需要多少显存？', anchor: '#vram-needs' },
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
          '**2026 年价格大涨。** 内存短缺把所有市场的显卡价格推高到建议零售价的 1.5 到 2 倍——RTX 5090 售价约 $3,949，而非其 $1,999 的发布价。把本文每个价格当作 2026 年 5 月的快照，并依靠二手市场。',
          '**预算之选：NVIDIA RTX 3060 12 GB**（二手 $150-250，全新 $350-680）——以 15-20 tok/s 运行任何 7B 模型，并以 Q4 运行大多数 13B 模型。2026 年入门本地大模型的最佳性价比。',
          '**中端之选：NVIDIA RTX 4060 Ti 16 GB**（全新约 $424，二手 $290）——16 GB 显存可容纳 14B 模型并留有上下文余量，也是最接近建议零售价的显卡，受涨价影响最小。',
          '**高端之选：NVIDIA RTX 4080 Super 16 GB**（约 $1,100-1,200）——最快的 16 GB 显卡，经 2026 年价格变动后，其售价与更慢的 RTX 4070 Ti Super（$1,179）大致相当。',
          '**发烧之选：NVIDIA RTX 4090 24 GB / RTX 5090 32 GB**——RTX 4090（$2,480-2,755）能运行 33B 模型；RTX 5090（约 $3,949）是唯一无需双卡构建就能以 Q4 容纳 70B 模型的消费级显卡。',
          '**AMD 可行但门槛更高。** RX 6700 XT（12 GB）和 RX 7800 XT（16 GB）在每美元显存上有竞争力，但 ROCm 配置比 NVIDIA CUDA 多花数小时。',
          '**功耗随档次上升。** RTX 3060 功耗 170 W；RTX 5090 功耗 575 W，需要 850-1000 W 电源。把电源和显卡一起纳入预算。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览事实',
        items: [
          '**预算档（$130-680）：** RTX 3060 12 GB 或 RX 6700 XT 12 GB——运行 7B 和大多数 13B 模型。',
          '**中端档（$420-520）：** RTX 4060 Ti 16 GB 或 RX 7800 XT 16 GB——轻松运行 14B 模型。',
          '**高端档（$1,100-1,200）：** RTX 4080 Super 16 GB 或 RTX 4070 Ti Super 16 GB——快速 14B 推理，轻量 22B 工作。',
          '**发烧档（$2,480 起）：** RTX 4090 24 GB 或 RTX 5090 32 GB——33B 模型，5090 上可 Q4 运行 70B。',
          '**Q4_K_M 下的显存经验法则：** 每十亿参数约 0.6 GB，外加 2-4 GB 用于上下文和工具。',
          '**功耗范围：** RTX 3060 170 W、RTX 4060 Ti 165 W、RTX 4070 Ti Super 285 W、RTX 4080 Super 320 W、RTX 4090 450 W、RTX 5090 575 W。',
          '**2026 年价格实况：** 内存短缺把价格推高到建议零售价的 1.5 到 2 倍；二手市场往往性价比更高。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '编辑推荐：RTX 4080 Super 16 GB',
        sponsoredSlot: true,
        content:
          '**对于想要一款耐用、且预算能超过 $1,000 的买家，NVIDIA RTX 4080 Super 16 GB 是兼顾显存、速度和价格的选择。** 它的 16 GB 显存能容纳每一款 14B 模型并留有上下文余量，是这里最快的 16 GB 显卡，约 120 tok/s，售价约 $1,100-1,200，经 2026 年价格变动后与更慢的 RTX 4070 Ti Super（$1,179）大致相当——是高端档明确的性价比之选。如果你的预算固定在 $600 以下，RTX 4060 Ti 16 GB 是性价比之选——它受 2026 年涨价冲击最小。只有在确实需要 33B 或 70B 模型时才花更多钱。',
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
        title: '2026 年八款显卡运行本地大模型的对比',
        content:
          '显存和功耗数字为厂商规格。RTX 3060、RTX 4080 Super、RTX 4090、RTX 5090 的推理速度为 PromptQuorum 硬件测试实测的 7B Q4 数值；RTX 4060 Ti 16 GB、RX 7800 XT、RTX 4070 Ti Super 的数字为系列级别估算。价格为 2026 年 5 月美国快照——2026 年内存短缺把价格推高到建议零售价的 1.5 到 2 倍，购买前请重新核对。',
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
        columns: ['显卡', '显存', '速度（7B Q4）', '功耗', '价格（2026 年 5 月）', '最适合'],
        rows: [
          {
            '显卡': 'RTX 3060 12 GB',
            '显存': '12 GB',
            '速度（7B Q4）': '15-20 tok/s',
            '功耗': '170 W',
            '价格（2026 年 5 月）': '全新 $350-680 / 二手 $150-250',
            '最适合': '预算入门——任何 7B 模型',
          },
          {
            '显卡': 'RX 6700 XT',
            '显存': '12 GB',
            '速度（7B Q4）': '10-14 tok/s',
            '功耗': '230 W',
            '价格（2026 年 5 月）': '二手 $130-200（全新已停产）',
            '最适合': '最便宜的显存，接受 AMD 配置',
          },
          {
            '显卡': 'RTX 4060 Ti 16 GB',
            '显存': '16 GB',
            '速度（7B Q4）': '约 20-25 tok/s',
            '功耗': '165 W',
            '价格（2026 年 5 月）': '全新 $424 / 二手 $290',
            '最适合': '中端档——14B 模型，低功耗',
          },
          {
            '显卡': 'RX 7800 XT',
            '显存': '16 GB',
            '速度（7B Q4）': '约 18-24 tok/s（估算）',
            '功耗': '263 W',
            '价格（2026 年 5 月）': '全新约 $480-520',
            '最适合': 'AMD 平台的 16 GB，接受 ROCm 配置',
          },
          {
            '显卡': 'RTX 4070 Ti Super',
            '显存': '16 GB',
            '速度（7B Q4）': '约 80-90 tok/s（估算）',
            '功耗': '285 W',
            '价格（2026 年 5 月）': '全新 $1,179 / 二手 $770',
            '最适合': '快速 14B，较低功耗',
          },
          {
            '显卡': 'RTX 4080 Super',
            '显存': '16 GB',
            '速度（7B Q4）': '约 120 tok/s',
            '功耗': '320 W',
            '价格（2026 年 5 月）': '全新约 $1,100-1,200 / 二手约 $900',
            '最适合': '编辑推荐——最快的 16 GB',
          },
          {
            '显卡': 'RTX 4090',
            '显存': '24 GB',
            '速度（7B Q4）': '约 150 tok/s',
            '功耗': '450 W',
            '价格（2026 年 5 月）': '全新 $2,755 / 二手 $2,480',
            '最适合': '33B 模型，双卡 70B',
          },
          {
            '显卡': 'RTX 5090',
            '显存': '32 GB',
            '速度（7B Q4）': '约 160 tok/s',
            '功耗': '575 W',
            '价格（2026 年 5 月）': '全新 $3,949 / 二手 $3,999',
            '最适合': '单卡 Q4 运行 70B',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-en.svg',
        imageCaption:
          '八款消费级显卡在四个预算档次中按显存、7B Q4 推理速度、功耗和 2026 年 5 月价格对比本地大模型表现。显存从 12 GB（RTX 3060）升至 32 GB（RTX 5090）；优化速度之前，先按你需要的模型规模购买。',
      },
      whichGpu: {
        id: 'which-gpu',
        title: '你该买哪款显卡？',
        content:
          '**你最大的目标模型决定档次；你的预算决定该档次内选 NVIDIA 还是 AMD。** 找到与你情况相符的那一行。',
        columns: ['你的情况', '买这款'],
        rows: [
          { '你的情况': '我预算不到 $400，想运行 7B 模型', '买这款': 'RTX 3060 12 GB（二手）' },
          { '你的情况': '我想要能运行大模型的最便宜显卡，并接受配置工作', '买这款': 'RX 6700 XT（二手）' },
          { '你的情况': '我想在功耗预算紧张的情况下运行 14B 模型', '买这款': 'RTX 4060 Ti 16 GB' },
          { '你的情况': '我想要一款能快速运行 14B 并用上数年的显卡', '买这款': 'RTX 4070 Ti Super 16 GB' },
          { '你的情况': '我想要最快的 16 GB 显卡，价格其次', '买这款': 'RTX 4080 Super 16 GB' },
          { '你的情况': '我需要 33B 模型，或计划将来做双卡 70B 构建', '买这款': 'RTX 4090 24 GB' },
          { '你的情况': '我需要一张能以 Q4 运行 70B 模型的单卡', '买这款': 'RTX 5090 32 GB' },
          { '你的情况': '我拿不定主意，想要最稳妥的第一张显卡', '买这款': 'RTX 3060 12 GB——不够用以后再升级' },
        ],
      },
      budgetTier: {
        id: 'budget-tier',
        title: '预算档（$130-680）：RTX 3060 12 GB 和 RX 6700 XT',
        content:
          '**预算档能运行任何 7B 模型和大多数 13B 模型——对大多数首次使用本地大模型的用户来说，这就是他们需要的全部能力。** RTX 3060 12 GB 是推荐之选；如果你接受 AMD 配置的摩擦，RX 6700 XT 是更便宜的替代。这一档次中二手市场最为重要——全新价格随 2026 年涨价大幅上升。',
        items: [
          '**RTX 3060 12 GB（二手 $150-250，全新 $350-680）：** 12 GB 显存，170 W，7B 模型以 Q4 运行 15-20 tok/s。能运行 Mistral 7B、Qwen3 8B、DeepSeek-R1 7B 和大多数 13B 模型。要买的是 12 GB 版本——避开 6 GB 版本，它只能运行 3B 模型。买二手——全新货源已停产且价格虚高。',
          '**RX 6700 XT（二手 $130-200，全新已停产）：** 12 GB 显存，230 W，7B 模型 10-14 tok/s。进入本地大模型最便宜的方式，但比 RTX 3060 慢，且依赖 AMD ROCm，会增加配置时间。',
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
            text: 'RX 6700 XT 是这里最便宜的显卡，但要为 Linux 上的 ROCm 配置留出 3-5 小时。如果你的时间比省下的 $30-80 更值钱，就买 NVIDIA 显卡。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-680',
            label: '在 Amazon 查看 RTX 3060 12GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: '在 Amazon 查看 RX 6700 XT 价格',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: '中端档（$420-520）：RTX 4060 Ti 16 GB 和 RX 7800 XT',
        content:
          '**中端档存在的唯一理由是：16 GB 显存能容纳 12 GB 显卡无法在可用上下文下装下的 14B 模型。** 如果 14B 级别的模型是你的目标，这是能正确运行它们的最便宜档次——而且 RTX 4060 Ti 16 GB 值得注意的一点是，它在 2026 年涨价中仍接近建议零售价。',
        items: [
          '**RTX 4060 Ti 16 GB（全新 $424 / 二手 $290）：** 16 GB 显存，165 W，7B 模型约 20-25 tok/s。它与 8 GB 版 RTX 4060 Ti 使用同一颗 GPU 核心，因此每 token 速度相近——16 GB 版本买的是容量，不是原始速度。其 165 W 功耗相对于能力是本指南中最低的，也是受涨价虚高最小的显卡。',
          '**RX 7800 XT（全新约 $480-520）：** 16 GB 显存，263 W。本指南未对它单独做基准测试；速度预计在 RTX 4060 Ti 范围内，代价是 AMD ROCm 配置。',
          '**为何买这一档：** 你想要 14B 模型、想要低功耗（RTX 4060 Ti），或想以尽可能低的价格获得 16 GB。',
          '**为何跳过这一档：** 如果 7B 模型够用，预算档能省 $200；如果你想要快速的 14B 推理，高端档明显更快。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'RTX 4060 Ti 16 GB 相对 8 GB 版本是容量升级，不是速度升级。买它是因为你需要装下 14B 模型，而不是因为你期待更高的每秒 token。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB',
            productName: 'NVIDIA RTX 4060 Ti 16GB',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: '在 Amazon 查看 RTX 4060 Ti 16GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '420-520',
            label: '在 Amazon 查看 RX 7800 XT 价格',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: '高端档（$1,100-1,200）：RTX 4080 Super 和 RTX 4070 Ti Super',
        content:
          '**高端档保持 16 GB 显存，但加上了让 7B-14B 模型感觉即时、让 22B 模型可用的速度。** 两款显卡装下的模型与中端档相同——你为每秒 token 付费，而非容量。2026 年涨价大幅拉开了这一档与中端档的差距。',
        items: [
          '**RTX 4080 Super 16 GB（约 $1,100-1,200）：** 16 GB 显存，320 W，7B 模型约 120 tok/s。编辑推荐——最快的 16 GB 显卡，经 2026 年价格变动后与更慢的 RTX 4070 Ti Super 大致同价。',
          '**RTX 4070 Ti Super 16 GB（全新 $1,179 / 二手 $770）：** 16 GB 显存，285 W。在几乎相同的全新价格下略慢于 RTX 4080 Super——为其更低的 285 W 功耗而选它，或以约 $770 二手买入，作为最便宜的快速 16 GB 显卡。',
          '**为何买这一档：** 你持续运行 14B 模型并希望它们即时响应，或你做轻量 22B 工作并想要余量。',
          '**为何跳过这一档：** 如果你需要 33B 或 70B 模型，没有任何 16 GB 显卡能装下它们——直接转向发烧档，而不是在这里过度花钱。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在这一档中默认选 RTX 4080 Super——在几乎相同的全新价格下，它明显快于 RTX 4070 Ti Super。只有为省约 35 W 功耗，或想以折扣价买二手时，才选 4070 Ti Super。',
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
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '770-1179',
            label: '在 Amazon 查看 RTX 4070 Ti Super 价格',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: '发烧档（$2,480 起）：RTX 4090 和 RTX 5090',
        content:
          '**发烧档是唯一能运行 22B 以上模型的档次——而 RTX 5090 32 GB 是唯一能以 Q4 容纳 70B 模型的消费级单卡。** 在这里购买是为显存容量，而非速度；速度是副产品。2026 年涨价对这一档冲击最大，价格逐周变动。',
        items: [
          '**RTX 4090 24 GB（全新 $2,755 / 二手 $2,480）：** 24 GB 显存，450 W，7B 模型约 150 tok/s，70B Q4 模型 36 tok/s。轻松运行 33B 模型。注意涨价已把二手 RTX 4090 价格推到接近全新 RTX 5090。',
          '**RTX 5090 32 GB（全新 $3,949 / 二手 $3,999）：** 32 GB GDDR7 显存，575 W，7B 约 160 tok/s，70B Q4 为 45 tok/s。32 GB 容量是亮点——它是唯一无需第二张 GPU 就能以 Q4 运行 70B 模型的消费级显卡。由于黄牛炒作，目前二手价高于全新。',
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
            text: '在 2026 年涨价之前，两张二手 RTX 4090 比一张 RTX 5090 便宜。如今情况反转：每张 $2,480-2,755，一对 RTX 4090 现在的总价远超一张 RTX 5090。对于新的 70B 构建，单张 RTX 5090 现在既更简单也更便宜。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '2480-2755',
            label: '在 Amazon 查看 RTX 4090 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '3949-3999',
            label: '在 Amazon 查看 RTX 5090 价格',
          },
        ],
      },
      vramNeeds: {
        id: 'vram-needs',
        title: '你需要多少显存？',
        content:
          '**在 Q4_K_M 量化下，模型每十亿参数约需 0.6 GB 显存，外加 2-4 GB 用于上下文和工具开销。** 这条公式直接对应四个档次。',
        items: [
          '**7B 模型——8-9 GB：** 适配任何档次。12 GB 显卡留有充裕余量。',
          '**13-14B 模型——11-13 GB：** 计入上下文和工具后，实际需要 16 GB。中端档及以上。',
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
          '**2026 年显卡价格因内存短缺大幅上涨，把消费级显卡推高到原始建议零售价的 1.5 到 2 倍。** 这改变了购买的算账方式，所以要围绕它而非发布价来规划。',
        items: [
          '**根源是内存，不是 GPU。** GDDR 和 HBM 供应短缺抬高了每一张配有高速内存的显卡的成本——而具备本地大模型能力的 GPU，正是受影响最大的高显存显卡。',
          '**RTX 5090 是最清晰的例子：** 发布价 $1,999，但到 2026 年 5 月零售价约 $3,949——几乎翻倍。',
          '**低端显卡撑得更好。** RTX 4060 Ti 16 GB 接近其 $399 建议零售价；涨幅与显卡搭载的高速内存数量成正比。',
          '**二手市场如今才是性价比之选。** 二手 RTX 3060 12 GB 或 RX 6700 XT 躲过了大部分涨价——二手价的涨幅远小于全新价。',
          '**决策：** 如果你能等，就关注短缺缓解的迹象；如果不能等，尽量买二手，并买能装下目标模型的最小显卡。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2026 年显卡价格因内存芯片短缺为建议零售价的 1.5 到 2 倍，因此本地大模型买家应优先考虑二手市场和能装下目标模型的最小显卡。',
          },
          {
            type: 'plain-terms',
            text: '显卡本身并没有变好——是里面的内存变得稀缺且昂贵。在情况缓解之前，把建议零售价当作历史数字，能买二手就买二手，不要为超出模型实际所需的显存付费。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '决策流程图：四个问题选定你的显卡',
        content:
          '**按顺序回答四个问题，能把大多数买家引向某一款显卡。**',
        items: [
          '**1. 你想运行的最大模型是什么？** 7B：预算档。14B：中端档。22B：高端档。33B：RTX 4090。70B：RTX 5090 或双卡。',
          '**2. 你的硬性预算上限是多少？** 约 $250 以下（二手）：RTX 3060 12 GB。$520 以下：RTX 4060 Ti 16 GB。约 $1,100-1,200：RTX 4080 Super 或 4070 Ti Super。$2,480 起：RTX 4090 或 RTX 5090。',
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
        image: '/images/best-gpu-buying-guide-local-llm-2026-decision-flowchart-en.svg',
        imageCaption:
          '为本地大模型选显卡的四问题决策流程：最大目标模型规模确定档次，预算上限缩小选择，NVIDIA 与 AMD 决定品牌，电源余量确认发烧档的选择。',
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '地区价格与购买渠道',
        content:
          '**显卡价格因地区而异——美国价格通常最低，欧盟价格含增值税，2026 年涨价已波及每个市场。** 下方链接是按地区的普通商品搜索链接；它们不带联盟标签，也不产生佣金。',
        items: [
          '**美国：** Amazon 和 Newegg 货源最广。二手 RTX 3060 和 RTX 4090 显卡常见；全新旗舰货源稀少。',
          '**德国：** Amazon.de 和 Mindfactory.de；标价通常含约 19% 增值税，德国显卡价格高于美国。',
          '**法国：** Amazon.fr 和 LDLC；价格与德国相近，含 20% 增值税，旗舰货源时断时续。',
          '**日本：** Amazon.co.jp 和 Kakaku.com 用于比价；全新显卡价格跟随美国，二手货源较少。',
          '**中国：** 京东是参考市场；高端显卡的供货和价格与西方市场差异显著。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '由于 2026 年涨价，本指南中每个价格数字都是变动迅速的 2026 年 5 月快照。购买前请始终打开当前的零售商商品页——价格逐周变动。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: '在 Amazon US 浏览显卡',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: '在 Amazon.de 浏览显卡',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '150-3900',
            label: '在 Amazon.fr 浏览显卡',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '150-3900',
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
          '**以为 RTX 4060 Ti 16 GB 比 8 GB 版本更快。** 并不是——它是同一颗 GPU 核心配更多内存。为容量（14B 模型）而买，不是为速度。',
          '**以建议零售价而非当前价格为锚。** 2026 年涨价意味着发布价已不再反映现实。按零售商的实时价格做预算，并在二手市场躲过涨价的地方优先考虑它。',
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
          '[Best Value GPU — RTX 5090 / 4090 / 4080 Super 价格追踪](https://bestvaluegpu.com/history/new-and-used-rtx-5090-price-history-and-specs/) — 用于 2026 年 5 月价格快照的美国全新与二手价格历史。',
          '[AMD Radeon 规格](https://www.amd.com/en/products/graphics/desktops/radeon.html) — RX 7800 XT 和 RX 6700 XT 的官方显存与功耗数据。',
          '[本地大模型最佳显卡 2026](/local-llms/best-gpus-for-local-llms?lang=zh) — PromptQuorum 硬件测试：RTX 3060、4080、4090 和 5090 的实测 7B Q4 推理速度。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '能把本地大模型跑好的最便宜显卡是哪款？',
            a: '二手 NVIDIA RTX 3060 12 GB（$150-250）是能把本地大模型跑好的最便宜显卡。它的 12 GB 显存能以 Q4 量化装下每一款 7B 模型和大多数 13B 模型，达到 15-20 token 每秒。更便宜的 RX 6700 XT 也可以用，但更慢且需要 AMD ROCm 配置。买二手——全新价格在 2026 年涨价中大约翻了一番。',
          },
          {
            q: '为什么 2026 年显卡价格这么高？',
            a: '内存芯片短缺推动了 2026 年的显卡涨价。GDDR 和 HBM 供应收紧，抬高了每一张配有高速内存的显卡的成本，而具备本地大模型能力的高显存显卡受冲击最大。到 2026 年 5 月，大多数显卡售价为原始建议零售价的 1.5 到 2 倍——RTX 5090 发布价 $1,999，但零售价接近 $3,950。二手市场躲过了大部分涨幅。',
          },
          {
            q: '本地大模型需要多少显存？',
            a: '在 Q4_K_M 量化下，按每十亿参数约 0.6 GB 显存加 2-4 GB 开销来规划。这意味着 7B 模型 8-9 GB，14B 为 11-13 GB，33B 为 19-22 GB，70B 为 39-42 GB。12 GB 显卡能宽裕地覆盖 7B；70B 需要 RTX 5090 32 GB 或双卡构建。',
          },
          {
            q: 'RTX 4060 Ti 16 GB 比 8 GB 版本更快吗？',
            a: '不。RTX 4060 Ti 16 GB 和 8 GB 版本使用同一颗 GPU 核心，因此每 token 推理速度相近——7B 模型约 20-25 token 每秒。16 GB 版本买的是容量，让你能运行 8 GB 装不下的 14B 模型。为显存而买，不是为速度。',
          },
          {
            q: '本地大模型该买 NVIDIA 还是 AMD？',
            a: '除非你已拥有 AMD 硬件或找到大幅折扣，否则买 NVIDIA。NVIDIA CUDA 与 Ollama、LM Studio 和 llama.cpp 开箱即用。RX 6700 XT 和 RX 7800 XT 等 AMD 显卡在每美元显存上有竞争力，但 ROCm 配置在 Linux 上通常要花数小时。',
          },
          {
            q: '单张显卡能运行 70B 模型吗？',
            a: '只有 RTX 5090 32 GB 可以，而且只在 Q4 量化下——此时 70B 模型约需 39-42 GB，意味着激进量化或部分卸载。24 GB 的 RTX 4090 无法单卡以 Q4 装下 70B 模型；常见方案是用两张 RTX 4090 合并显存，不过 2026 年的涨价已使这一对显卡比单张 RTX 5090 更贵。',
          },
          {
            q: '对本地大模型而言，RTX 5090 相比 RTX 4090 值得吗？',
            a: '只有在你确实需要单卡运行 70B 模型时才值得。RTX 5090 有 32 GB 显存，对比 RTX 4090 的 24 GB，这是决定性因素。对 7B-33B 模型，RTX 4090 装下的模型相同；2026 年涨价后两者价格接近，因此如果预算允许，5090 多出的 8 GB 和略高的速度使它成为更好的全新购买选择。',
          },
          {
            q: '这些显卡需要什么电源？',
            a: '把电源与档次匹配：550 W 适合 RTX 3060，650-750 W 适合 RTX 4060 Ti 和 4070 Ti Super，850 W 适合 RTX 4090，而单卡功耗 575 W 的 RTX 5090 需要 850-1000 W。容量不足的电源会在负载下导致不稳定。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[查看每种模型规模的完整显存需求](/local-llms/how-much-vram-local-llm?lang=zh) — 本指南快速公式背后完整的按模型规模算显存的方法。',
          '[用实测本地大模型基准对比 15 款以上显卡](/local-llms/best-gpus-for-local-llms?lang=zh) — 更广的显卡基准集合，包括这八款之外更老的显卡和服务器显卡。',
          '[看看预算款 RTX 3060 12 GB 能跑哪些模型](/local-llms/best-budget-gpus-local-llm?lang=zh) — 预算档逐款模型的速度，包括 6 GB 与 12 GB 之分。',
          '[把 RTX 5090 和 RTX 4090 正面对比](/local-llms/rtx-5090-vs-rtx-4090-local-llm?lang=zh) — 何时值得升级到 RTX 5090，何时 RTX 4090 已够用。',
          '[理解 Q4_K_M 量化如何决定显存成本](/local-llms/llm-quantization-explained?lang=zh) — 为什么 Q4_K_M 是默认选择，以及量化如何改变显存计算。',
        ],
      },
    },
  },
}
