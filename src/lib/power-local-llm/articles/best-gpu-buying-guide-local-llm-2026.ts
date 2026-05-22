// Power Local LLM — Best GPUs for Local LLMs: Complete Buying Guide 2026
// Slug: best-gpu-buying-guide-local-llm-2026
// Affiliate buying guide. Outbound product links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.

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
      'Most local-LLM GPU advice optimizes for the wrong number. Speed in tokens per second decides how fast a model answers, but VRAM decides whether the model runs at all — and a model that does not fit is infinitely slower than one that does. This guide compares eight consumer GPUs across four price tiers on the figures that actually bind a purchase: VRAM capacity, measured inference speed, power draw, and price. Every recommendation is tied to a model size you can actually run, and every product link is a plain reference link with no affiliate relationship.',
    metaDescription:
      'Eight GPUs compared for local LLMs across four budgets: RTX 3060 to RTX 5090. VRAM, tokens/sec, power draw, and price — with the model size each tier actually runs.',
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
    readTime: '13 min read',
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
          'Buy for VRAM, then speed. A used RTX 3060 12 GB ($200-250) is the budget pick and runs any 7B model. An RTX 4060 Ti 16 GB is the mid-tier pick for 14B models. An RTX 4090 24 GB runs 33B models, and an RTX 5090 32 GB is the only single consumer card that handles 70B work without a dual-GPU build.',
        bullets: [
          'Budget: RTX 3060 12 GB, $200-250 used, runs every 7B model at 15-20 tok/s',
          'Mid: RTX 4060 Ti 16 GB, ~$450, runs 14B models with headroom',
          'Enthusiast: RTX 5090 32 GB, ~$1,999, the only consumer card for single-GPU 70B',
          'NVIDIA CUDA is lower-friction than AMD ROCm for local inference',
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
      { label: 'Budget Tier ($200-350)', anchor: '#budget-tier' },
      { label: 'Mid Tier ($350-600)', anchor: '#mid-tier' },
      { label: 'High Tier ($600-1200)', anchor: '#high-tier' },
      { label: 'Enthusiast Tier ($1200+)', anchor: '#enthusiast-tier' },
      { label: 'How Much VRAM Do You Need?', anchor: '#vram-needs' },
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
          '**Budget pick: NVIDIA RTX 3060 12 GB** ($200-250 used) — runs every 7B model at 15-20 tok/s and most 13B models at Q4. The best value entry point for local LLMs in 2026.',
          '**Mid pick: NVIDIA RTX 4060 Ti 16 GB** (~$450) — 16 GB of VRAM clears 14B models with context headroom; the same GPU die as the 8 GB variant, so speed is similar but capacity doubles.',
          '**High pick: NVIDIA RTX 4070 Ti Super 16 GB** (~$800-850) — fast enough that 7B-14B models feel instant; 16 GB matches the RTX 4080 Super on capacity at a lower price.',
          '**Enthusiast pick: NVIDIA RTX 4090 24 GB / RTX 5090 32 GB** — the RTX 4090 runs 33B models; the RTX 5090 is the only single consumer card that fits a 70B model at Q4 without a dual-GPU build.',
          '**AMD is viable but higher-friction.** The RX 6700 XT (12 GB) and RX 7800 XT (16 GB) deliver competitive VRAM per dollar, but ROCm setup adds hours of work versus NVIDIA CUDA.',
          '**Power draw scales with the tier.** An RTX 3060 draws 170 W; an RTX 5090 draws 575 W and needs an 850-1000 W power supply. Budget the power supply alongside the card.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Budget tier ($200-350):** RTX 3060 12 GB or RX 6700 XT 12 GB — runs 7B and most 13B models.',
          '**Mid tier ($350-600):** RTX 4060 Ti 16 GB or RX 7800 XT 16 GB — runs 14B models comfortably.',
          '**High tier ($600-1200):** RTX 4070 Ti Super 16 GB or RTX 4080 Super 16 GB — fast 14B inference, light 22B work.',
          '**Enthusiast tier ($1200+):** RTX 4090 24 GB or RTX 5090 32 GB — 33B models, and 70B at Q4 on the 5090.',
          '**VRAM rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**Power draw range:** RTX 3060 170 W, RTX 4060 Ti 165 W, RTX 4070 Ti Super 285 W, RTX 4080 Super 320 W, RTX 4090 450 W, RTX 5090 575 W.',
          '**Software friction:** NVIDIA CUDA works out of the box; AMD ROCm typically needs additional setup on Linux.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: RTX 4070 Ti Super 16 GB',
        sponsoredSlot: true,
        content:
          '**For most buyers who want a card that lasts, the NVIDIA RTX 4070 Ti Super 16 GB is the pick that balances VRAM, speed, and price.** Its 16 GB of VRAM clears every 14B model with context headroom, its inference speed makes 7B-14B models feel instant, and it costs several hundred dollars less than the RTX 4080 Super while matching it on capacity. Buy a cheaper card only if your budget is fixed below $600; buy a more expensive card only if you specifically need to run 33B or 70B models.',
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
            productCategory: 'gpu',
            priceRange: '800-850',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+4070+Ti+Super',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '800-850',
            label: 'Check RTX 4070 Ti Super price on Newegg',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Eight GPUs Compare for Local LLMs in 2026',
        content:
          'VRAM and power figures are manufacturer specifications. Inference speeds for the RTX 3060, RTX 4080 Super, RTX 4090, and RTX 5090 are measured 7B Q4 figures from PromptQuorum hardware testing; figures for the RTX 4060 Ti 16 GB, RX 7800 XT, and RTX 4070 Ti Super are family-level estimates because those exact SKUs were not individually benchmarked — treat them as ranges, not precise numbers.',
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
        columns: ['GPU', 'VRAM', 'Speed (7B Q4)', 'Power', 'Price', 'Best for'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Speed (7B Q4)': '15-20 tok/s',
            'Power': '170 W',
            'Price': '$200-250 used',
            'Best for': 'Budget entry — any 7B model',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Speed (7B Q4)': '10-14 tok/s',
            'Power': '230 W',
            'Price': '$150-220 used',
            'Best for': 'Cheapest VRAM, accepts AMD setup',
          },
          {
            'GPU': 'RTX 4060 Ti 16 GB',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~20-25 tok/s',
            'Power': '165 W',
            'Price': '~$430-480',
            'Best for': 'Mid tier — 14B models, low power',
          },
          {
            'GPU': 'RX 7800 XT',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~18-24 tok/s (est.)',
            'Power': '263 W',
            'Price': '~$480-520',
            'Best for': '16 GB on AMD, accepts ROCm setup',
          },
          {
            'GPU': 'RTX 4070 Ti Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~80-90 tok/s (est.)',
            'Power': '285 W',
            'Price': '~$800-850',
            'Best for': 'Editor\'s Choice — fast 14B',
          },
          {
            'GPU': 'RTX 4080 Super',
            'VRAM': '16 GB',
            'Speed (7B Q4)': '~120 tok/s',
            'Power': '320 W',
            'Price': '~$1,000-1,100',
            'Best for': 'Fastest 16 GB card',
          },
          {
            'GPU': 'RTX 4090',
            'VRAM': '24 GB',
            'Speed (7B Q4)': '~150 tok/s',
            'Power': '450 W',
            'Price': '$1,000-1,300 used',
            'Best for': '33B models, dual-GPU 70B',
          },
          {
            'GPU': 'RTX 5090',
            'VRAM': '32 GB',
            'Speed (7B Q4)': '~160 tok/s',
            'Power': '575 W',
            'Price': '~$1,999',
            'Best for': 'Single-GPU 70B at Q4',
          },
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-comparison-en.svg',
        imageCaption:
          'Eight consumer GPUs for local LLMs compared by VRAM, 7B Q4 inference speed, power draw, and price across four budget tiers. VRAM rises from 12 GB (RTX 3060) to 32 GB (RTX 5090); buy for the model size you need before optimizing for speed.',
      },
      whichGpu: {
        id: 'which-gpu',
        title: 'Which GPU Should You Buy?',
        content:
          '**Your largest target model decides your tier; your budget decides NVIDIA versus AMD inside that tier.** Find the row that matches your situation.',
        columns: ['Your situation', 'Buy this'],
        rows: [
          { 'Your situation': 'I have under $300 and want to run 7B models', 'Buy this': 'RTX 3060 12 GB (used)' },
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
        title: 'Budget Tier ($200-350): RTX 3060 12 GB and RX 6700 XT',
        content:
          '**The budget tier runs every 7B model and most 13B models — and for most first-time local-LLM users, that is all the capability they need.** The RTX 3060 12 GB is the recommended pick; the RX 6700 XT is the cheaper alternative if you accept AMD setup friction.',
        items: [
          '**RTX 3060 12 GB ($200-250 used):** 12 GB VRAM, 170 W, 15-20 tok/s on 7B models at Q4. Runs Mistral 7B, Qwen3 8B, DeepSeek-R1 7B, and most 13B models. The 12 GB variant is the one to buy — avoid the 6 GB variant, which is limited to 3B models.',
          '**RX 6700 XT ($150-220 used):** 12 GB VRAM, 230 W, 10-14 tok/s on 7B models. The cheapest way into local LLMs, but slower than the RTX 3060 and dependent on AMD ROCm, which adds setup time.',
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
            text: 'The RX 6700 XT is the cheapest card here, but budget 3-5 hours for ROCm setup on Linux. If your time is worth more than the $50-80 you save versus an RTX 3060, buy the NVIDIA card.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '200-350',
            label: 'Check RTX 3060 12GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT',
            productName: 'AMD RX 6700 XT',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Check RX 6700 XT price on Amazon',
          },
        ],
      },
      midTier: {
        id: 'mid-tier',
        title: 'Mid Tier ($350-600): RTX 4060 Ti 16 GB and RX 7800 XT',
        content:
          '**The mid tier exists for one reason: 16 GB of VRAM clears 14B models that 12 GB cards cannot fit with usable context.** If 14B-class models are your target, this is the cheapest tier that runs them properly.',
        items: [
          '**RTX 4060 Ti 16 GB (~$430-480):** 16 GB VRAM, 165 W, roughly 20-25 tok/s on 7B models. It uses the same GPU die as the 8 GB RTX 4060 Ti, so per-token speed is similar — the 16 GB version buys capacity, not raw speed. The low 165 W draw is the lowest in this guide relative to capability.',
          '**RX 7800 XT (~$480-520):** 16 GB VRAM, 263 W. It was not individually benchmarked for this guide; expect speed in the RTX 4060 Ti range, with AMD ROCm setup as the trade-off.',
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
            priceRange: '350-600',
            label: 'Check RTX 4060 Ti 16GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+7800+XT',
            productName: 'AMD RX 7800 XT',
            productCategory: 'gpu',
            priceRange: '350-600',
            label: 'Check RX 7800 XT price on Amazon',
          },
        ],
      },
      highTier: {
        id: 'high-tier',
        title: 'High Tier ($600-1200): RTX 4070 Ti Super and RTX 4080 Super',
        content:
          '**The high tier keeps 16 GB of VRAM but adds the speed that makes 7B-14B models feel instant and 22B models usable.** Both cards fit the same models as the mid tier — you are paying for tokens per second, not capacity.',
        items: [
          '**RTX 4070 Ti Super 16 GB (~$800-850):** 16 GB VRAM, 285 W. The Editor\'s Choice — fast enough that response latency stops being noticeable on 14B models, at several hundred dollars less than the RTX 4080 Super.',
          '**RTX 4080 Super 16 GB (~$1,000-1,100):** 16 GB VRAM, 320 W, roughly 120 tok/s on 7B models. The fastest 16 GB card available; worth the premium over the 4070 Ti Super only if you run batch inference or value the extra speed highly.',
          '**Why buy this tier:** you run 14B models constantly and want them instant, or you do light 22B work and want headroom.',
          '**Why skip this tier:** if you need 33B or 70B models, no 16 GB card will fit them — move to the enthusiast tier instead of overspending here.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Within this tier, default to the RTX 4070 Ti Super. The RTX 4080 Super is faster, but both fit identical models — the speed gap matters for batch workloads and barely registers in interactive chat.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4070+Ti+Super+16GB',
            productName: 'NVIDIA RTX 4070 Ti Super 16GB',
            productCategory: 'gpu',
            priceRange: '600-1200',
            label: 'Check RTX 4070 Ti Super price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+4080+Super',
            productName: 'NVIDIA RTX 4080 Super 16GB',
            productCategory: 'gpu',
            priceRange: '600-1200',
            label: 'Check RTX 4080 Super price on Amazon',
          },
        ],
      },
      enthusiastTier: {
        id: 'enthusiast-tier',
        title: 'Enthusiast Tier ($1200+): RTX 4090 and RTX 5090',
        content:
          '**The enthusiast tier is the only tier that runs models above 22B — and the RTX 5090 32 GB is the only single consumer card that fits a 70B model at Q4.** Buy here for VRAM capacity, not speed; the speed is a side effect.',
        items: [
          '**RTX 4090 24 GB ($1,000-1,300 used, ~$1,800 new):** 24 GB VRAM, 450 W, roughly 150 tok/s on 7B models and 36 tok/s on a 70B Q4 model. Runs 33B models comfortably; a pair of RTX 4090s is a common 70B build.',
          '**RTX 5090 32 GB (~$1,999):** 32 GB GDDR7 VRAM, 575 W, roughly 160 tok/s on 7B and 45 tok/s on 70B Q4. The 32 GB capacity is the headline — it is the only consumer card that runs a 70B model at Q4 without a second GPU.',
          '**Why buy this tier:** you need 33B or 70B models, you run batch inference, or you want a card that will not need replacing for years.',
          '**Why skip this tier:** for 7B-14B models it is overkill — the high tier delivers instant responses on those sizes for half the price and half the power draw.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The RTX 5090 draws 575 W on its own. Pair it with an 850-1000 W power supply — a 750 W unit will sag under load. Budget the power supply upgrade into the purchase, not as an afterthought.',
          },
          {
            type: 'tip',
            text: 'If 70B is your goal but the RTX 5090 is out of budget, two used RTX 4090s (~$2,200-2,600) run 70B models with more total VRAM than one 5090. The trade-off is a more complex build and higher combined power draw.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+4090',
            productName: 'NVIDIA RTX 4090 24GB',
            productCategory: 'gpu',
            priceRange: '1000-1800',
            label: 'Check RTX 4090 price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=RTX+5090',
            productName: 'NVIDIA RTX 5090 32GB',
            productCategory: 'gpu',
            priceRange: '1900-2200',
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
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Decision Flowchart: Pick Your GPU in Four Questions',
        content:
          '**Four questions, in order, route most buyers to one card.**',
        items: [
          '**1. What is the largest model you want to run?** 7B: budget tier. 14B: mid tier. 22B: high tier. 33B: RTX 4090. 70B: RTX 5090 or dual-GPU.',
          '**2. What is your hard budget ceiling?** Under $350: RTX 3060 12 GB. Under $600: RTX 4060 Ti 16 GB. Under $1,200: RTX 4070 Ti Super. Above $1,200: RTX 4090 or RTX 5090.',
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
          '**GPU prices vary by region — US prices are the lowest, EU prices add VAT, and Japan prices track the US closely.** The links below are plain product-search links per region; they carry no affiliate tags and earn no commission.',
        items: [
          '**United States:** Amazon and Newegg have the widest stock and lowest prices. Used RTX 3060 and RTX 4090 cards are common.',
          '**Germany:** Amazon.de and Mindfactory; expect roughly 19% VAT included in listed prices versus US figures.',
          '**France:** Amazon.fr and LDLC; pricing is similar to Germany with 20% VAT.',
          '**Japan:** Amazon.co.jp; new-card pricing tracks the US, with thinner used-card supply.',
          '**China:** JD.com is the reference marketplace; GPU availability and pricing differ substantially from Western markets.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Used-card pricing for the RTX 3060 and RTX 4090 changes month to month. Treat the dollar figures in this guide as a May 2026 snapshot and re-check current listings before buying.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=GPU+for+local+LLM',
            productName: 'Local-LLM GPUs (US)',
            productCategory: 'gpu',
            priceRange: '200-2000',
            label: 'Browse GPUs on Amazon US',
          },
          {
            url: 'https://www.amazon.de/s?k=Grafikkarte+RTX',
            productName: 'Local-LLM GPUs (Germany)',
            productCategory: 'gpu',
            priceRange: '200-2000',
            label: 'Browse GPUs on Amazon.de',
          },
          {
            url: 'https://www.amazon.fr/s?k=carte+graphique+RTX',
            productName: 'Local-LLM GPUs (France)',
            productCategory: 'gpu',
            priceRange: '200-2000',
            label: 'Browse GPUs on Amazon.fr',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=RTX+GPU',
            productName: 'Local-LLM GPUs (Japan)',
            productCategory: 'gpu',
            priceRange: '200-2000',
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
          '**Ignoring power supply requirements.** An RTX 5090 draws 575 W and needs an 850-1000 W PSU. A card that browns out under load is worse than a slower card that runs stably.',
          '**Choosing AMD without budgeting setup time.** The RX 6700 XT and RX 7800 XT are good value, but ROCm setup costs hours. Factor that time against the money saved versus an NVIDIA card.',
          '**Overbuying for 7B models.** If 7B models cover your use case, an RTX 4090 is wasted money and power. Match the tier to the model, not to the budget you happen to have.',
        ],
        image: '/images/best-gpu-buying-guide-local-llm-2026-common-mistakes-en.svg',
        imageCaption:
          'Six common mistakes when buying a GPU for local LLMs: buying for speed over VRAM, confusing the 6 GB and 12 GB RTX 3060, expecting the 16 GB RTX 4060 Ti to be faster, ignoring power-supply needs, underbudgeting AMD setup time, and overbuying for 7B models.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[NVIDIA GeForce RTX 40 Series Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/) — Official VRAM capacity and power (TGP) figures for the RTX 4060 Ti, 4070 Ti Super, 4080 Super, and 4090.',
          '[NVIDIA GeForce RTX 5090 Specifications](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/) — Official 32 GB GDDR7 VRAM and 575 W power figures for the RTX 5090.',
          '[AMD Radeon RX 7800 XT Specifications](https://www.amd.com/en/products/graphics/desktops/radeon.html) — Official VRAM and power figures for the RX 7800 XT and RX 6700 XT.',
          '[Best GPUs for Local LLMs 2026](/local-llms/best-gpus-for-local-llms) — PromptQuorum hardware testing: measured 7B Q4 inference speeds for the RTX 3060, 4080, 4090, and 5090.',
          '[Ollama Model Library](https://ollama.com/library) — Quantization variants and file sizes used for the VRAM math in this guide.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is the cheapest GPU that can run local LLMs well?',
            a: 'The NVIDIA RTX 3060 12 GB at $200-250 used is the cheapest GPU that runs local LLMs well. Its 12 GB of VRAM fits every 7B model and most 13B models at Q4 quantization, at 15-20 tokens per second. The cheaper RX 6700 XT works too, but it is slower and requires AMD ROCm setup.',
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
            a: 'Only the RTX 5090 32 GB, and only at Q4 quantization where a 70B model needs roughly 39-42 GB — meaning aggressive quantization or partial offload. A 24 GB RTX 4090 cannot fit a 70B model at Q4 alone; the common solution is two RTX 4090s for combined VRAM.',
          },
          {
            q: 'Is the RTX 5090 worth it over the RTX 4090 for local LLMs?',
            a: 'Only if you specifically need to run 70B models on a single card. The RTX 5090 has 32 GB of VRAM versus the RTX 4090\'s 24 GB, which is the deciding factor. For 7B-33B models, the RTX 4090 fits the same models and costs less; the 5090 also draws 575 W and needs a larger power supply.',
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
}
