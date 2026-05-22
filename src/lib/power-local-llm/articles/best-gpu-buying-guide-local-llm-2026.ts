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
}
