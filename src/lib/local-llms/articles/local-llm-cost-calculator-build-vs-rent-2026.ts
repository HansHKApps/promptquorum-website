import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-22',
    last_full_refresh: '2026-11-22',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-22',
    current_hardware_mentioned: ['RTX 3090', 'RTX 4090', 'Ryzen mini PC', 'Apple Silicon (unified memory)'],
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-en.webp',
    title: 'Local AI vs Cloud AI: Cost Calculator (Build vs Rent) 2026',
    seoTitle: 'Local AI vs Cloud AI: Cost Calculator (Build vs Rent) 2026',
    metaDescription: 'Compare owning a local GPU with renting a cloud GPU for LLMs: worked break-even example, RunPod and Vast.ai prices, and a calculator for your own numbers.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Local hardware or a rented cloud GPU: the cheaper option depends mainly on your hours per month. Enter your own numbers in the calculator below for the break-even.**',
    quickAnswerTop: {
      question: 'Is it cheaper to build a local LLM server or rent cloud GPU?',
      answer: 'It depends on usage volume, not a fixed rule. As rules of thumb: under 100 hours/month, cloud GPU rental (RunPod, Vast.ai) is usually cheaper because there is no upfront cost. Above roughly 500 hours/month or for 24/7 workloads, owning hardware can win once electricity and eventual resale value are factored in. Use the calculator below with your own hours, hardware price, and electricity rate for an exact break-even.',
      bullets: [
        'Under 20 hr/month: rent — local is unlikely to pay back',
        '20–100 hr/month: usually rent — local rarely pays back in time',
        '100–250 hr/month: compare carefully, hardware price and electricity rate decide it',
        '250–500 hr/month: local hardware starts becoming attractive',
        '500+ hr/month or 24/7: local usually wins on total cost of ownership',
        'Full TCO = hardware price + electricity − resale value, not just purchase price ÷ cloud rate',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'The break-even depends on your hours. In this page\'s example ($3,300 RTX 4090 system, no resale value, 36 months), local pays off from about 113 hours a month against $0.89/hr and about 350 against $0.34/hr. Enter your own numbers in the calculator.',
      },
      {
        type: 'plain-terms',
        text: 'This page has a calculator where you enter your monthly usage hours, your local hardware price, your electricity rate, and how long you plan to keep the hardware — it then tells you whether renting a cloud GPU or buying local hardware costs less for you specifically.',
      },
    ],
    affiliateLinks: [
      {
        productName: 'RunPod GPU Rental',
        url: 'https://www.runpod.io',
        productCategory: 'cloud-gpu',
      },
      {
        productName: 'Vast.ai GPU Rental',
        url: 'https://vast.ai',
        productCategory: 'cloud-gpu',
      },
      {
        productName: 'RTX 4090 (Amazon)',
        url: 'https://www.amazon.com/s?k=RTX+4090',
        productCategory: 'gpu',
      },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'The core question is hours per month, not a fixed rule',
          'RunPod lists an RTX 4090 at $0.34/hr (Community) and $0.89/hr (Secure); Vast.ai interruptible offers ran $0.26–0.60/hr (read 22 November 2026)',
          'Example inputs: a $3,300 local RTX 4090 system, 450 W and $0.17/kWh, about $0.08/hr in electricity — replace them with your own',
          'Break-even in that example: about 4,060 hours (17 months at 240 hr/month) against $0.89/hr and about 12,520 hours (52 months) against $0.34/hr',
          'With $1,000 of resale value, the same example breaks even after about 2,830 and 8,730 hours',
          'Electricity for a 450 W system costs about $18/month at $0.17/kWh and 240 hr/month',
          'Cloud is usually cheaper for spiky, occasional or experimental use below about 100 hr/month',
          'Local can make sense for sustained daily inference, sensitive data or 500+ hr/month, if the hardware stays busy',
        ],
      },
      usageTiers: {
        title: 'Quick Answer: Which One Fits Your Usage?',
        content: 'The hour bands are editorial rules of thumb, not a hard rule — hardware price, your cloud rate, your electricity price, and resale value all shift the real break-even. The calculator below gives you an exact answer for your own numbers.',
        columns: ['Monthly Hours', 'Recommendation'],
        rows: [
          { 'Monthly Hours': 'Under 20 hr/mo', Recommendation: 'Rent cloud — local is unlikely to pay back' },
          { 'Monthly Hours': '20–100 hr/mo', Recommendation: 'Usually rent cloud' },
          { 'Monthly Hours': '100–250 hr/mo', Recommendation: 'Compare carefully — depends on hardware price' },
          { 'Monthly Hours': '250–500 hr/mo', Recommendation: 'Local hardware becomes attractive' },
          { 'Monthly Hours': '500+ hr/mo', Recommendation: 'Local usually wins on total cost' },
          { 'Monthly Hours': '24/7 continuous', Recommendation: 'Local often pays off: run your numbers' },
        ],
      },
      costCalculatorTool: {
        title: 'Interactive Cost Calculator: Local vs Cloud',
        content: 'Enter your own monthly usage hours, cloud GPU rate, local hardware price, electricity rate, expected resale value, and ownership period. The calculator below computes your cloud cost per month, your local operating cost, your total local cost of ownership, and your break-even point — live, as you change the numbers. All figures are calculated estimates from the inputs you provide plus researched reference prices, not measurements PromptQuorum has run itself.',
        component: 'CostCalculator',
      },
      workedExample: {
        title: 'Worked Example: Break-Even for an RTX 4090 System',
        content: '**Break-even hours = (hardware price − resale value) ÷ (cloud rate per hour − electricity per hour).** Electricity per hour = watts ÷ 1,000 × price per kWh.\n\nExample inputs, to replace with your own: $3,300 for an RTX 4090 system ([InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) gives an undated US figure of $2,000–3,000 for the new card alone, read 27 November 2026), 450 W at $0.17/kWh (0.45 × 0.17 = $0.0765/hr) and 240 hours of use per month. Cloud rates are RunPod list prices for an RTX 4090, read on 22 November 2026.\n\nAt 240 hours a month the cloud bill is about $214 (Secure) or $82 (Community), against about $18 of electricity for the local system. The result ignores repairs, your time and price changes on either side; the calculator above runs the same formula with your numbers.',
        columns: ['Cloud rate', 'Break-even', 'At 240 hr/month', 'With $1,000 resale'],
        rows: [
          { 'Cloud rate': '$0.89/hr (RunPod Secure Cloud)', 'Break-even': '≈4,060 hours', 'At 240 hr/month': '≈17 months', 'With $1,000 resale': '≈2,830 hours (≈12 months)' },
          { 'Cloud rate': '$0.34/hr (RunPod Community Cloud)', 'Break-even': '≈12,520 hours', 'At 240 hr/month': '≈52 months', 'With $1,000 resale': '≈8,730 hours (≈36 months)' },
        ],
      },
      hardwareDecision: {
        title: 'Hardware Decision Table',
        content: 'Match your target model size and usage pattern to a hardware tier before pricing out a specific build. Price classes for mini PCs and Macs are example USD system prices, not quotes. The GPU rows show US-market prices for the card alone, not a full system, read 27 November 2026. Used RTX 3090: eBay US sold listings, 13–23 November 2026, 225 sales, excluding shipping ([InsiderLLM used-GPU guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Used RTX 4090: 216 eBay sold listings, October 2026; the new RTX 4090 figure is undated ([InsiderLLM GPU price page](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)). The 48 GB row is two used RTX 3090 cards (2 × $1,500–1,725 = $3,000–3,450); the rest of the system comes on top. Local prices differ with taxes and import duties.',
        columns: ['Tier', 'VRAM / RAM', 'Best For', 'Price Class'],
        rows: [
          { Tier: 'N150 mini PC', 'VRAM / RAM': '16GB RAM', 'Best For': 'Light chat, models up to 7B', 'Price Class': 'Under $500' },
          { Tier: 'Ryzen mini PC', 'VRAM / RAM': '32–64GB RAM', 'Best For': '7B–14B daily use, 24/7 server', 'Price Class': '$500–1,000' },
          { Tier: 'RTX 3090 (used)', 'VRAM / RAM': '24GB VRAM', 'Best For': 'Up to 30B Q4, lowest-priced 24 GB card here', 'Price Class': '$1,500–1,725 (card only, US sold, 13–23 Nov 2026)' },
          { Tier: 'RTX 4090', 'VRAM / RAM': '24GB VRAM', 'Best For': 'Up to 34B Q4, faster than the RTX 3090', 'Price Class': '$2,575–3,010 used, $2,000–3,000 new (card only)' },
          { Tier: '48GB GPU setup (2× used RTX 3090)', 'VRAM / RAM': '48GB VRAM', 'Best For': 'Up to 70B Q4, dev/research', 'Price Class': '≈$3,000–3,450 (2 cards only)' },
          { Tier: 'Mac (unified memory)', 'VRAM / RAM': '48–128GB unified', 'Best For': '70B-class via MLX (64GB+), low power', 'Price Class': '$2,000–4,000+' },
        ],
      },
      rentPath: {
        title: 'Path 1 — Low Usage: Rent a Cloud GPU',
        content: 'Renting is the right call for experimentation, occasional fine-tuning runs, variable workloads, or testing a model before you commit to hardware. You pay only for the hours you use, with no maintenance and instant access to GPU tiers (H100, A100 80GB) that would cost thousands to own.\n\nCompare current cloud GPU prices before renting: [RunPod pricing](https://www.runpod.io/pricing) and [Vast.ai pricing](https://vast.ai/pricing) are editorial references, not affiliate links — PromptQuorum has no commission relationship with either provider.',
      },
      miniPcPath: {
        title: 'Path 2 — Medium Usage: A Mini PC May Beat a GPU Workstation',
        content: 'For 7B–14B models used daily — chat, Home Assistant automations, Ollama running 24/7 — a Ryzen mini PC often draws less power and takes less space than a discrete-GPU system. The [Beelink SER8 review](/smart-home/beelink-ser8-local-ai-review) looks at it as a 24/7 Ollama server (spec-based estimates, not a PromptQuorum benchmark); also see the [best mini PCs for local LLMs guide](/local-llms/best-mini-pcs-local-llm) and [best AMD mini PC for local LLMs](/local-llms/best-amd-mini-pc-local-llm-2026) for the current lineup, including the [Minisforum UM890 Pro](/smart-home/minisforum-um890-pro-local-ai-review) and [GMKtec G3 Plus](/smart-home/gmktec-g3-plus-local-ai-review).',
      },
      gpuPath: {
        title: 'Path 3 — Heavy Local AI: GPU Workstation',
        content: 'Once you need 30B+ models, fine-tuning, or fast multi-user inference, a discrete GPU workstation is the right tier. The metric that matters is VRAM per dollar, not raw benchmark speed — VRAM determines which model sizes you can even load. See the [local LLM workstation build guide](/local-llms/local-llm-workstation-build) and [PromptQuorum\'s GPU workstation build guide](/power-local-llm/best-workstation-build-local-ai-2026) for current parts lists and pricing.',
      },
      whatToBuy: {
        title: '"What Should I Buy?" By Price Tier',
        content: '**Under $500** — Do not buy dedicated AI hardware. Use what you already own, or rent a cloud GPU for occasional needs.\n\n**$500–1,000** — A Ryzen mini PC with 32 GB+ of RAM. See the [best AMD mini PC for local LLMs](/local-llms/best-amd-mini-pc-local-llm-2026) and the [Beelink SER8 review](/smart-home/beelink-ser8-local-ai-review).\n\n**$1,000–1,800** — A more powerful mini PC. See the [best mini PCs for local LLMs guide](/local-llms/best-mini-pcs-local-llm) and the [best GPU under $500 guide](/local-llms/best-gpu-for-llm-inference-under-500-2026) for entry GPU context.\n\n**$1,800–2,500** — A used RTX 3090 build, as an illustrative budget band: the card alone was listed at $1,500–1,725 by [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (sold listings, data dated 2026-11-23). That leaves about $75–1,000 of this band for the rest of the system, so the lower end may not cover a complete new build. See the [local LLM workstation build guide](/local-llms/local-llm-workstation-build).\n\n**$3,000–4,500** — An RTX 4090 workstation, as an illustrative budget band (card alone per [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/): $2,575–3,010 in used sold listings, October 2026, and an undated $2,000–3,000 new, plus the rest of the system), or a Mac with large unified memory. See the [workstation build guide](/local-llms/local-llm-workstation-build) and the [Apple Silicon local LLM guide](/local-llms/apple-silicon-local-llm-guide-2026).\n\n**$5,000+** — 48 GB+ of VRAM, multi-GPU or workstation-class builds (two used RTX 3090 cards alone come to about $3,000–3,450 at the InsiderLLM sold-listing range; one RTX PRO 6000 Blackwell 96 GB was listed at about $16,000 per [TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html) on 2026-08-13). Calculate your utilization first: this tier only pays back at sustained, heavy usage. See [PromptQuorum\'s GPU workstation build guide](/power-local-llm/best-workstation-build-local-ai-2026).\n\nNot ready to buy yet? You can rent instead: [compare cloud GPU providers](/power-local-llm/best-cloud-gpu-providers), read the [RunPod review](/power-local-llm/runpod-review), the [Vast.ai review](/power-local-llm/vast-ai-review) or the [Clore.ai review](/power-local-llm/clore-ai-review), or look at [GPU server hosting providers](/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart).',
      },
      hardwarePicks: {
        title: 'Hardware Picks by Category',
        content: '- **Budget:** [GMKtec G3 Plus](/smart-home/gmktec-g3-plus-local-ai-review) — entry mini PC for 7B-class models\n- **Mid-range:** [Beelink SER8](/smart-home/beelink-ser8-local-ai-review) — 7B–14B experimentation, Home Assistant, 24/7 Ollama server; [Minisforum UM890 Pro](/smart-home/minisforum-um890-pro-local-ai-review) as a Ryzen alternative\n- **GPU value:** RTX 3090 (used card listed at $1,500–1,725 by [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), data dated 2026-11-23) — 24 GB of VRAM at a lower card price than the RTX 4090\n- **GPU performance:** RTX 4090 (new $2,000–3,000, undated; used sold listings $2,575–3,010, October 2026; per InsiderLLM, US market) — faster than the RTX 3090 at a higher price, see the [workstation build guide](/local-llms/local-llm-workstation-build)\n- **Apple option:** a Mac with high unified memory for 70B+ models at low power draw — see the [Apple Silicon local LLM guide](/local-llms/apple-silicon-local-llm-guide-2026)\n\nThe RTX 3090/4090 and Apple hardware links above are plain product/editorial references — PromptQuorum has no affiliate program and earns no commission on any hardware purchase.',
      },
      dontBuy: {
        title: 'When You Should NOT Buy Local AI Hardware',
        content: '- **Occasional use** (~10 hours/month or less) — the hardware will sit idle most of the time\n- **Highly variable workload** — some months heavy, some months nothing\n- **Need different GPU tiers per project** — cloud lets you switch instantly between a 24GB and an 80GB GPU\n- **Do not want hardware maintenance** — drivers, cooling, upgrades, eventual failure are all on you with local hardware\n- **Only occasionally need very large models** — renting an H100 for one week beats owning one',
      },
      whenLocalWins: {
        title: 'When Local AI Wins',
        content: '- **Daily, predictable use** — the hours add up fast; see the usage-tier table above\n- **Cost predictability** — a fixed hardware cost is easier to budget than variable cloud bills\n- **Sensitive data or offline requirement** — prompts are processed on your own machine instead of a provider\'s servers; model downloads and update checks still use the network\n- **No per-request fees for models you run yourself** — local models use your own hardware, while Ollama\'s separate cloud service has plan-based session and weekly usage limits ([Ollama pricing](https://ollama.com/pricing))\n- **Multi-year usage horizon** with hardware you can keep well-utilized',
      },
      electricity: {
        title: 'Electricity Costs by Country',
        content: 'A 450 W system running 240 hours a month (8 hr/day) uses 108 kWh. At the example rates below it costs about $18 a month (US) to about $40 (Germany). The rates are example inputs that match the calculator presets, not sourced averages: use your own tariff.',
        columns: ['Country', 'Example rate', '450 W, 240 hr/month'],
        rows: [
          { 'Country': 'United States', 'Example rate': '$0.17/kWh', '450 W, 240 hr/month': '$18/month' },
          { 'Country': 'Germany', 'Example rate': '$0.37/kWh', '450 W, 240 hr/month': '$40/month' },
          { 'Country': 'United Kingdom', 'Example rate': '$0.33/kWh', '450 W, 240 hr/month': '$36/month' },
          { 'Country': 'France', 'Example rate': '$0.22/kWh', '450 W, 240 hr/month': '$24/month' },
        ],
      },
      cloudProviders: {
        title: 'Cloud GPU Rental Comparison',
        content: 'List prices for an RTX 4090, read on 22 November 2026. Vast.ai figures are single-GPU offers from its public offers API and change by the minute.',
        columns: ['Provider', 'RTX 4090', 'Billing', 'Note'],
        rows: [
          { 'Provider': 'RunPod', 'RTX 4090': '$0.34–0.89/hr (Community–Secure)', 'Billing': 'per second', 'Note': 'Consumer and data-center GPUs in one list' },
          { 'Provider': 'Vast.ai', 'RTX 4090': '$0.26–0.60/hr interruptible, $0.38–2.34/hr on-demand', 'Billing': 'per second', 'Note': 'Marketplace; host quality varies per offer' },
          { 'Provider': 'Lambda', 'RTX 4090': 'not listed', 'Billing': 'per minute', 'Note': 'H100 $3.79–4.89/hr, A100 40 GB $1.99/hr' },
        ],
      },
      finalVerdict: {
        title: 'Final Verdict: There Is No Universal Winner',
        content: 'The usage-hour rules of thumb in this article are guidance, not hard laws. Your actual break-even depends on your cloud rate, your hardware price, your electricity price, and your resale value — the calculator above computes the real answer for your inputs, not a fixed threshold.',
        decisionBlock: {
          title: 'Choose Based On',
          localIf: [
            'Your hours are above your calculated break-even, for example continuous use',
            'You need cost predictability over a multi-year horizon',
            'Data privacy or offline capability is a requirement',
            'You can keep the hardware well-utilized, not idle',
          ],
          cloudIf: [
            'You use LLMs under 100 hours/month',
            'Your workload is spiky or experimental',
            'You need GPU tiers too expensive to own (H100, A100 80GB)',
            'You do not want hardware maintenance or upfront capital cost',
          ],
          quick: [
            'Run the calculator above with your real numbers',
            'Under 100 hr/month → rent cloud',
            '500+ hr/month or 24/7 → local often pays off',
            '100–500 hr/month → hardware price and electricity rate decide it',
          ],
        },
      },
      finalCta: {
        title: 'Next Steps by What You Calculated',
        content: '- **Low usage (under 100 hr/month):** [compare current cloud GPU pricing](/local-llms/cloud-gpu-rental-comparison-2026)\n- **Small models, daily use:** [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm)\n- **7B–14B, 24/7 server:** [Beelink SER8 review](/smart-home/beelink-ser8-local-ai-review) or [best AMD mini PC for local LLMs](/local-llms/best-amd-mini-pc-local-llm-2026)\n- **30B+ models, heavy local use:** [local LLM workstation build guide](/local-llms/local-llm-workstation-build)\n- **70B-class, sustained use:** [PromptQuorum\'s GPU workstation build guide](/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Is local AI always cheaper than cloud?',
            a: 'No. Local hardware is only cheaper above a usage threshold that depends on hardware price, electricity rate and cloud rate. In this page\'s example ($3,300 RTX 4090 system, no resale value, 36 months of use) it is about 113 hours a month against $0.89/hr and about 350 against $0.34/hr. Below your own threshold, cloud rental is cheaper.',
          },
          {
            q: 'How many hours before buying local hardware makes sense?',
            a: 'For the example $3,300 RTX 4090 system, break-even against RunPod Secure Cloud ($0.89/hr) is about 4,060 hours (17 months at 240 hr/month); against Community Cloud ($0.34/hr) it is about 12,520 hours (52 months). A $1,000 resale value shortens that to about 2,830 and 8,730 hours. Hardware price, wattage and electricity are example inputs, so run the calculator above with your own.',
          },
          {
            q: 'Is electricity included in local AI cost estimates?',
            a: 'It should be, and often is not in simple comparisons. A 450 W system running 8 hours/day adds about $18/month at an example $0.17/kWh, or about $40/month at $0.37/kWh. The calculator above lets you enter your own rate.',
          },
          {
            q: 'What does it cost to run a local LLM compared with the cloud?',
            a: 'In the worked example, renting an RTX 4090 on RunPod costs about $82 a month at $0.34/hr or $214 at $0.89/hr for 240 hours, with no upfront cost. The local system costs $3,300 upfront plus about $18 a month in electricity. Which is cheaper depends on how long you keep using it: see the break-even table above.',
          },
          {
            q: 'Is an AI subscription cheaper than renting or buying a GPU?',
            a: 'A subscription charges a fixed monthly fee under the provider\'s usage limits, while a rented GPU bills by the hour and a bought GPU costs money upfront. For the buy-versus-subscribe maths, see [GPU vs ChatGPT Plus 2026](/local-llms/gpu-vs-ai-subscription-roi) and [Local LLMs vs ChatGPT Plus](/local-llms/local-llms-vs-chatgpt-plus).',
          },
          {
            q: 'Is a Mac good for local LLMs?',
            a: 'Macs with high unified memory can run large models (70B-class) at low power draw, which helps their cost-of-ownership case, especially in high-electricity-price countries. See the Apple Silicon local LLM guide linked above for current model-size and performance specifics.',
          },
          {
            q: 'Is 24 GB of VRAM enough for local LLMs?',
            a: '24 GB (RTX 3090 or RTX 4090) runs models up to roughly 30–34B parameters at 4-bit quantization, which covers most single-user local AI use cases. 70B-class models need roughly 48 GB, reached with dual-GPU setups or high-unified-memory Macs.',
          },
          {
            q: 'Should I buy an RTX 4090 or rent cloud GPU time?',
            a: 'Buy if you expect sustained usage above your own break-even over a multi-year period and can keep the hardware busy; in this page\'s 36-month example without resale value that is about 113 hours a month against $0.89/hr and about 350 against $0.34/hr. Rent if your usage is occasional, spiky or you are still validating the workload: renting avoids the upfront cost of an RTX 4090 (new $2,000–3,000 in the US per InsiderLLM, undated, read 27 November 2026) entirely.',
          },
          {
            q: 'What is the cheapest way to run a local LLM?',
            a: 'For the lowest upfront cost, a small mini PC (an N150 class under $500 for light 7B use, or a Ryzen class at an example $500–1,000 for 7B–14B models) is usually the least expensive dedicated local setup. For the lowest cost at low volume, cloud GPU rental with no hardware purchase at all costs less.',
          },
          {
            q: 'Does running AI locally mean my data never leaves my computer?',
            a: 'With local inference through tools like Ollama, your prompts are processed by a model on your own hardware instead of a cloud provider. Ollama documents that you can use local models only and disable its cloud features. Model downloads, update checks and other software on the machine can still use the network.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: 'Related Reading',
        items: [
          '[Local LLM vs Cloud GPU: What Is Cheaper?](/local-llms/local-llm-vs-cloud-gpu-cost) -- break-even hours and cost per token',
          '[RunPod vs Vast.ai vs Lambda Labs for LLM Inference 2026](/local-llms/cloud-gpu-rental-comparison-2026) -- hourly prices, billing and regions',
          '[Local LLM Workstation Build Guide](/local-llms/local-llm-workstation-build) -- parts lists for a local GPU system',
          '[Best GPU for LLM Inference Under $500 (2026)](/local-llms/best-gpu-for-llm-inference-under-500-2026) -- entry GPU options',
          '[GPU vs ChatGPT Plus 2026: When Buying a GPU Pays Back the Subscription](/local-llms/gpu-vs-ai-subscription-roi) -- buy versus subscribe',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) -- low-power options for a 24/7 server',
          '[Apple Silicon Local LLM Guide 2026](/local-llms/apple-silicon-local-llm-guide-2026) -- Macs with unified memory',
          'Rent instead of buy: [compare cloud GPU providers](/power-local-llm/best-cloud-gpu-providers), [RunPod review](/power-local-llm/runpod-review), [Vast.ai review](/power-local-llm/vast-ai-review), [Clore.ai review](/power-local-llm/clore-ai-review) and [GPU server hosting providers](/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[RunPod pricing](https://www.runpod.io/pricing), read 22 November 2026',
          '[Vast.ai pricing](https://vast.ai/pricing) and its public offers API (single-GPU RTX 4090 offers), read 22 November 2026',
          '[Lambda pricing](https://lambda.com/pricing), read 22 November 2026',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), RTX 4090 prices (used: sold, October 2026; new: undated), read 27 November 2026',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/), used RTX 3090 from 225 eBay US sold listings, 13–23 November 2026, read 27 November 2026',
          '[Ollama pricing](https://ollama.com/pricing) and [Ollama cloud docs](https://docs.ollama.com/cloud), read 22 November 2026',
        ],
      },
    },
  },
  de: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-de.webp',
    title: 'Lokale KI vs. Cloud-KI: Kostenrechner (Kaufen vs. Mieten) 2026',
    seoTitle: 'Lokale KI vs. Cloud-KI: Kostenrechner Kaufen vs. Mieten',
    metaDescription: 'Lokale GPU kaufen oder Cloud-GPU mieten? Rechenbeispiel zum Break-even, RunPod- und Vast.ai-Preise sowie ein Rechner für Ihre eigenen Zahlen.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Lokale Hardware oder gemietete Cloud-GPU: Was günstiger ist, hängt vor allem von Ihren Stunden pro Monat ab. Geben Sie im Rechner unten Ihre eigenen Zahlen ein.**',
    quickAnswerTop: {
      question: 'Ist es günstiger, eine lokale LLM-Workstation zu bauen oder Cloud-GPUs zu mieten?',
      answer: 'Das hängt vom Nutzungsvolumen ab, nicht von einer festen Regel. Als Faustregel: Unter 100 Std./Monat ist Cloud-GPU-Miete (RunPod, Vast.ai) meist günstiger, da keine Anfangsinvestition anfällt. Über etwa 500 Std./Monat oder bei Dauerbetrieb kann sich eigene Hardware durchsetzen, sobald Strom und Wiederverkaufswert eingerechnet werden. Nutzen Sie den Rechner unten mit Ihren eigenen Stunden, Hardwarepreis und Strompreis für den genauen Break-even.',
      bullets: [
        'Unter 20 Std./Monat: Cloud mieten — lokal amortisiert sich kaum',
        '20–100 Std./Monat: meist Cloud mieten',
        '100–250 Std./Monat: genau vergleichen — Hardwarepreis und Strompreis entscheiden',
        '250–500 Std./Monat: lokale Hardware wird attraktiv',
        '500+ Std./Monat oder Dauerbetrieb: lokal gewinnt meist bei Gesamtkosten',
        'Vollständige TCO = Hardwarepreis + Strom − Wiederverkaufswert, nicht nur Kaufpreis ÷ Cloud-Rate',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Der Break-even hängt von Ihren Stunden ab. Im Beispiel dieser Seite (RTX-4090-System für 3.300 $, ohne Wiederverkaufswert, 36 Monate) lohnt sich lokal ab etwa 113 Stunden im Monat gegenüber 0,89 $/Std. und ab etwa 350 gegenüber 0,34 $/Std. Rechnen Sie mit Ihren Zahlen nach.',
      },
      {
        type: 'plain-terms',
        text: 'Diese Seite enthält einen Rechner: Sie geben Ihre monatlichen Nutzungsstunden, Ihren Cloud-GPU-Tarif, Ihren Hardwarepreis, Ihren Strompreis und den geplanten Nutzungszeitraum ein — der Rechner zeigt live, ob Mieten oder Kaufen für Sie günstiger ist.',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090 (Amazon)', url: 'https://www.amazon.de/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'Die Kernfrage lautet: Stunden pro Monat, keine feste Regel',
          'RunPod listet eine RTX 4090 mit 0,34 $/Std. (Community) und 0,89 $/Std. (Secure); unterbrechbare Vast.ai-Angebote lagen bei 0,26–0,60 $/Std. (gelesen am 22. November 2026)',
          'Beispielwerte: lokales RTX-4090-System für 3.300 $, 450 W und 0,17 $/kWh, etwa 0,08 $/Std. Strom — ersetzen Sie sie durch Ihre eigenen',
          'Break-even im Beispiel: etwa 4.060 Stunden (17 Monate bei 240 Std./Monat) gegenüber 0,89 $/Std. und etwa 12.520 Stunden (52 Monate) gegenüber 0,34 $/Std.',
          'Mit 1.000 $ Wiederverkaufswert liegt der Break-even im selben Beispiel bei etwa 2.830 bzw. 8.730 Stunden',
          'Strom für ein 450-W-System kostet etwa 18 $/Monat bei 0,17 $/kWh und 240 Std./Monat',
          'Bei sporadischer, gelegentlicher oder experimenteller Nutzung unter ca. 100 Std./Monat ist die Cloud meist günstiger',
          'Lokal kann sich bei täglichem Dauerbetrieb, sensiblen Daten oder 500+ Std./Monat lohnen, sofern die Hardware ausgelastet bleibt',
        ],
      },
      usageTiers: {
        title: 'Kurzantwort: Was passt zu Ihrer Nutzung?',
        content: 'Die Stundenbänder sind redaktionelle Faustregeln, keine feste Regel — Hardwarepreis, Ihre Cloud-Rate, Ihr Strompreis und der Wiederverkaufswert verschieben den tatsächlichen Break-even. Der Rechner unten liefert die exakte Antwort für Ihre Zahlen.',
        columns: ['Std./Monat', 'Empfehlung'],
        rows: [
          { 'Std./Monat': 'Unter 20 Std.', Empfehlung: 'Cloud mieten — lokal zahlt sich kaum aus' },
          { 'Std./Monat': '20–100 Std.', Empfehlung: 'Meist Cloud mieten' },
          { 'Std./Monat': '100–250 Std.', Empfehlung: 'Genau vergleichen — Hardwarepreis entscheidet' },
          { 'Std./Monat': '250–500 Std.', Empfehlung: 'Lokale Hardware wird attraktiv' },
          { 'Std./Monat': '500+ Std.', Empfehlung: 'Lokal gewinnt meist bei Gesamtkosten' },
          { 'Std./Monat': 'Dauerbetrieb 24/7', Empfehlung: 'Lokal lohnt sich oft: nachrechnen' },
        ],
      },
      costCalculatorTool: {
        title: 'Interaktiver Kostenrechner: Lokal vs. Cloud',
        content: 'Geben Sie Ihre monatlichen Nutzungsstunden, Cloud-GPU-Tarif, Hardwarepreis, Strompreis, erwarteten Wiederverkaufswert und Nutzungsdauer ein. Der Rechner unten berechnet live Ihre Cloud-Kosten pro Monat, Ihre lokalen Betriebskosten, Ihre Gesamtkosten und Ihren Break-even-Punkt. Alle Werte sind berechnete Schätzungen aus Ihren Eingaben plus recherchierten Referenzpreisen — keine von PromptQuorum selbst gemessenen Werte.',
        component: 'CostCalculator',
      },
      workedExample: {
        title: 'Rechenbeispiel: Break-even für ein RTX-4090-System',
        content: '**Break-even-Stunden = (Hardwarepreis − Wiederverkaufswert) ÷ (Cloud-Preis pro Stunde − Stromkosten pro Stunde).** Stromkosten pro Stunde = Watt ÷ 1.000 × Preis pro kWh.\n\nBeispielwerte, die Sie durch Ihre eigenen ersetzen sollten: 3.300 $ für ein RTX-4090-System ([InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) nennt für die neue Karte allein ohne Datumsangabe 2.000–3.000 $ im US-Markt, abgerufen am 27. November 2026), 450 W bei 0,17 $/kWh (0,45 × 0,17 = 0,0765 $/Std.) und 240 Nutzungsstunden pro Monat. Die Cloud-Preise sind RunPod-Listenpreise für eine RTX 4090, gelesen am 22. November 2026.\n\nBei 240 Stunden im Monat beträgt die Cloud-Rechnung etwa 214 $ (Secure) bzw. 82 $ (Community), gegenüber etwa 18 $ Strom für das lokale System. Das Ergebnis ignoriert Reparaturen, Ihre Zeit und Preisänderungen auf beiden Seiten; der Rechner oben nutzt dieselbe Formel mit Ihren Zahlen.',
        columns: ['Cloud-Preis', 'Break-even', 'Bei 240 Std./Monat', 'Mit 1.000 $ Wiederverkauf'],
        rows: [
          { 'Cloud-Preis': '0,89 $/Std. (RunPod Secure Cloud)', 'Break-even': '≈4.060 Stunden', 'Bei 240 Std./Monat': '≈17 Monate', 'Mit 1.000 $ Wiederverkauf': '≈2.830 Std. (≈12 Monate)' },
          { 'Cloud-Preis': '0,34 $/Std. (RunPod Community Cloud)', 'Break-even': '≈12.520 Stunden', 'Bei 240 Std./Monat': '≈52 Monate', 'Mit 1.000 $ Wiederverkauf': '≈8.730 Std. (≈36 Monate)' },
        ],
      },
      hardwareDecision: {
        title: 'Hardware-Entscheidungstabelle',
        content: 'Ordnen Sie Ihre Zielmodellgröße und Ihr Nutzungsmuster einer Hardware-Stufe zu, bevor Sie einen konkreten Build kalkulieren. Die Preisklassen für Mini-PCs und Macs sind beispielhafte Systempreise in US-Dollar, keine Angebote. Die GPU-Zeilen zeigen US-Marktpreise für die Karte allein, nicht für ein Gesamtsystem, abgerufen am 27. November 2026. Gebrauchte RTX 3090: verkaufte eBay-US-Angebote vom 13. bis 23. November 2026, 225 Verkäufe, ohne Versand ([InsiderLLM-Ratgeber für gebrauchte GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Gebrauchte RTX 4090: 216 verkaufte eBay-Angebote, Oktober 2026; der Neupreis der RTX 4090 ist ohne Datum ([InsiderLLM-Preisseite](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)). Die Zeile mit 48 GB sind zwei gebrauchte RTX 3090 (2 × 1.500–1.725 $ = 3.000–3.450 $). Das übrige System kommt hinzu. Lokale Preise weichen wegen Steuern und Einfuhrzöllen ab.',
        columns: ['Stufe', 'VRAM / RAM', 'Am besten für', 'Preisklasse'],
        rows: [
          { Stufe: 'N150 Mini-PC', 'VRAM / RAM': '16 GB RAM', 'Am besten für': 'Leichter Chat, bis 7B', Preisklasse: 'Unter 500 $' },
          { Stufe: 'Ryzen Mini-PC', 'VRAM / RAM': '32–64 GB RAM', 'Am besten für': '7B–14B täglich, 24/7-Server', Preisklasse: '500–1.000 $' },
          { Stufe: 'RTX 3090 (gebraucht)', 'VRAM / RAM': '24 GB VRAM', 'Am besten für': 'Bis 30B Q4, günstigste 24-GB-Karte hier', Preisklasse: '1.500–1.725 $ (nur Karte, US verkauft, 13.–23.11.2026)' },
          { Stufe: 'RTX 4090', 'VRAM / RAM': '24 GB VRAM', 'Am besten für': 'Bis 34B Q4, schneller als die RTX 3090', Preisklasse: '2.575–3.010 $ gebraucht, 2.000–3.000 $ neu (nur Karte)' },
          { Stufe: '48-GB-GPU-Setup (2× RTX 3090 gebraucht)', 'VRAM / RAM': '48 GB VRAM', 'Am besten für': 'Bis 70B Q4, Entwicklung', Preisklasse: 'ca. 3.000–3.450 $ (nur 2 Karten)' },
          { Stufe: 'Mac (Unified Memory)', 'VRAM / RAM': '48–128 GB unified', 'Am besten für': '70B-Klasse via MLX (64 GB+), sparsam', Preisklasse: '2.000–4.000 $+' },
        ],
      },
      rentPath: {
        title: 'Weg 1 — Geringe Nutzung: Cloud-GPU mieten',
        content: 'Mieten ist richtig für Experimente, gelegentliches Fine-Tuning, wechselnde Workloads oder zum Testen vor der Anschaffung. Sie zahlen nur genutzte Stunden, ohne Wartung und mit sofortigem Zugriff auf GPU-Klassen (H100, A100 80GB), die im Kauf tausende Dollar kosten würden.\n\nAktuelle Cloud-GPU-Preise vergleichen: [RunPod-Preise](https://www.runpod.io/pricing) und [Vast.ai-Preise](https://vast.ai/pricing) sind redaktionelle Referenzlinks, keine Affiliate-Links — PromptQuorum hat mit keinem der beiden Anbieter eine Provisionsbeziehung.',
      },
      miniPcPath: {
        title: 'Weg 2 — Mittlere Nutzung: Ein Mini-PC schlägt oft die GPU-Workstation',
        content: 'Für täglich genutzte 7B–14B-Modelle — Chat, Home-Assistant-Automatisierungen, Ollama im Dauerbetrieb — braucht ein Ryzen-Mini-PC oft weniger Strom und Platz als ein System mit diskreter GPU. Der [Beelink-SER8-Test](/de/smart-home/beelink-ser8-local-ai-review) betrachtet ihn als 24/7-Ollama-Server (Schätzungen auf Basis der Spezifikationen, kein PromptQuorum-Benchmark); siehe außerdem den [Guide zu den besten Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm) und [besten AMD-Mini-PC für lokale LLMs](/de/local-llms/best-amd-mini-pc-local-llm-2026), einschließlich [Minisforum UM890 Pro](/de/smart-home/minisforum-um890-pro-local-ai-review) und [GMKtec G3 Plus](/de/smart-home/gmktec-g3-plus-local-ai-review).',
      },
      gpuPath: {
        title: 'Weg 3 — Intensive lokale KI: GPU-Workstation',
        content: 'Ab 30B+ Modellen, Fine-Tuning oder schneller Multi-User-Inferenz ist eine diskrete GPU-Workstation die richtige Stufe. Entscheidend ist VRAM pro Dollar, nicht die reine Benchmark-Geschwindigkeit — VRAM bestimmt, welche Modellgrößen überhaupt laden. Siehe den [Guide zum Bau einer lokalen LLM-Workstation](/de/local-llms/local-llm-workstation-build) und [PromptQuorums GPU-Workstation-Build-Guide](/de/power-local-llm/best-workstation-build-local-ai-2026).',
      },
      whatToBuy: {
        title: '"Was soll ich kaufen?" nach Preisklasse',
        content: '**Unter 500 $** — Keine dedizierte KI-Hardware kaufen. Nutzen Sie vorhandene Geräte oder mieten Sie für gelegentlichen Bedarf eine Cloud-GPU.\n\n**500–1.000 $** — Ein Ryzen-Mini-PC mit 32 GB+ RAM. Siehe den [besten AMD-Mini-PC für lokale LLMs](/de/local-llms/best-amd-mini-pc-local-llm-2026) und den [Beelink-SER8-Test](/de/smart-home/beelink-ser8-local-ai-review).\n\n**1.000–1.800 $** — Ein leistungsstärkerer Mini-PC. Siehe den [Guide zu den besten Mini-PCs](/de/local-llms/best-mini-pcs-local-llm) und die [beste GPU unter 500 $](/de/local-llms/best-gpu-for-llm-inference-under-500-2026) als Einstiegskontext.\n\n**1.800–2.500 $** — Ein Build mit gebrauchter RTX 3090 als beispielhaftes Budgetband: Die Karte allein wurde bei [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) mit 1.500–1.725 $ gelistet (verkaufte Angebote, Datenstand 2026-11-23). Damit bleiben in diesem Band etwa 75–1.000 $ für das übrige System, sodass das untere Ende möglicherweise nicht für einen vollständigen neuen Build reicht. Siehe den [Guide zum Bau einer lokalen LLM-Workstation](/de/local-llms/local-llm-workstation-build).\n\n**3.000–4.500 $** — Eine RTX-4090-Workstation als beispielhaftes Budgetband (Karte allein laut [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/): 2.575–3.010 $ in verkauften gebrauchten Angeboten, Oktober 2026, und neu 2.000–3.000 $ ohne Datumsangabe, dazu das übrige System) oder ein Mac mit großem Unified Memory. Siehe den [Workstation-Build-Guide](/de/local-llms/local-llm-workstation-build) und den [Apple-Silicon-Guide](/de/local-llms/apple-silicon-local-llm-guide-2026).\n\n**5.000 $+** — 48 GB+ VRAM, Multi-GPU oder Workstation-Klasse (zwei gebrauchte RTX 3090 allein kommen im verkauften Angebotsbereich von InsiderLLM auf etwa 3.000–3.450 $; eine RTX PRO 6000 Blackwell mit 96 GB wurde laut [TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html) am 2026-08-13 mit rund 16.000 $ gelistet). Kalkulieren Sie die Auslastung zuerst: Diese Stufe rechnet sich nur bei intensiver Dauernutzung. Siehe [PromptQuorums GPU-Workstation-Build-Guide](/de/power-local-llm/best-workstation-build-local-ai-2026).\n\nNoch nicht zum Kauf bereit? Dann können Sie stattdessen mieten: Sie können [Cloud-GPU-Anbieter vergleichen](/de/power-local-llm/best-cloud-gpu-providers), die [RunPod-Bewertung](/de/power-local-llm/runpod-review), die [Vast.ai-Bewertung](/de/power-local-llm/vast-ai-review) oder die [Clore.ai-Bewertung](/de/power-local-llm/clore-ai-review) lesen oder sich [GPU-Server-Hosting-Anbieter](/de/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart) ansehen.',
      },
      hardwarePicks: {
        title: 'Hardware-Empfehlungen nach Kategorie',
        content: '- **Budget:** [GMKtec G3 Plus](/de/smart-home/gmktec-g3-plus-local-ai-review) — Einstiegs-Mini-PC für 7B-Modelle\n- **Mittelklasse:** [Beelink SER8](/de/smart-home/beelink-ser8-local-ai-review) — 7B–14B, Home Assistant, 24/7-Ollama-Server; [Minisforum UM890 Pro](/de/smart-home/minisforum-um890-pro-local-ai-review) als Ryzen-Alternative\n- **GPU-Preis-Leistung:** RTX 3090 (gebrauchte Karte bei [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) mit 1.500–1.725 $ gelistet, Datenstand 2026-11-23) — 24 GB VRAM zu einem niedrigeren Kartenpreis als die RTX 4090\n- **GPU-Leistung:** RTX 4090 (neu 2.000–3.000 $ ohne Datum; verkaufte gebrauchte Angebote 2.575–3.010 $, Oktober 2026; laut InsiderLLM, US-Markt) — schneller als die RTX 3090, aber teurer, siehe [Workstation-Build-Guide](/de/local-llms/local-llm-workstation-build)\n- **Apple-Option:** Mac mit viel Unified Memory für 70B+ Modelle bei geringem Verbrauch — siehe [Apple-Silicon-Guide](/de/local-llms/apple-silicon-local-llm-guide-2026)\n\nDie RTX-3090/4090- und Apple-Links oben sind reine Produkt-/Referenzlinks — PromptQuorum hat kein Partnerprogramm und erhält keine Provision auf Hardware-Käufe.',
      },
      dontBuy: {
        title: 'Wann Sie KEINE lokale KI-Hardware kaufen sollten',
        content: '- **Gelegentliche Nutzung** (ca. 10 Std./Monat oder weniger) — die Hardware steht meist ungenutzt\n- **Stark schwankender Bedarf** — mal intensiv, mal gar nicht\n- **Verschiedene GPU-Klassen je Projekt nötig** — Cloud erlaubt sofortigen Wechsel zwischen 24GB und 80GB\n- **Keine Wartung gewünscht** — Treiber, Kühlung, Upgrades, Ausfälle liegen bei lokaler Hardware bei Ihnen\n- **Nur gelegentlich sehr große Modelle nötig** — ein H100 für eine Woche mieten schlägt den Kauf',
      },
      whenLocalWins: {
        title: 'Wann lokale KI gewinnt',
        content: '- **Tägliche, planbare Nutzung** — die Stunden summieren sich schnell, siehe Nutzungstabelle oben\n- **Kostenplanbarkeit** — ein fixer Hardwarepreis lässt sich leichter budgetieren als variable Cloud-Rechnungen\n- **Sensible Daten oder Offline-Pflicht** — Prompts werden auf Ihrem eigenen Rechner statt auf den Servern eines Anbieters verarbeitet; Modell-Downloads und Update-Prüfungen nutzen weiterhin das Netzwerk\n- **Keine Gebühr pro Anfrage für selbst betriebene Modelle** — lokale Modelle nutzen Ihre eigene Hardware, während Ollamas separater Cloud-Dienst planabhängige Sitzungs- und Wochenlimits hat ([Ollama-Preise](https://ollama.com/pricing))\n- **Mehrjähriger Nutzungshorizont** mit gut ausgelasteter Hardware',
      },
      electricity: {
        title: 'Strompreise nach Land',
        content: 'Ein 450-W-System mit 240 Betriebsstunden im Monat (8 Std./Tag) verbraucht 108 kWh. Bei den Beispieltarifen unten kostet das etwa 18 $ im Monat (USA) bis etwa 40 $ (Deutschland). Die Tarife sind Beispielwerte passend zu den Rechner-Voreinstellungen, keine belegten Durchschnitte: Nutzen Sie Ihren eigenen Tarif.',
        columns: ['Land', 'Beispieltarif', '450 W, 240 Std./Monat'],
        rows: [
          { 'Land': 'USA', 'Beispieltarif': '0,17 $/kWh', '450 W, 240 Std./Monat': '18 $/Monat' },
          { 'Land': 'Deutschland', 'Beispieltarif': '0,37 $/kWh', '450 W, 240 Std./Monat': '40 $/Monat' },
          { 'Land': 'Vereinigtes Königreich', 'Beispieltarif': '0,33 $/kWh', '450 W, 240 Std./Monat': '36 $/Monat' },
          { 'Land': 'Frankreich', 'Beispieltarif': '0,22 $/kWh', '450 W, 240 Std./Monat': '24 $/Monat' },
        ],
      },
      cloudProviders: {
        title: 'Vergleich Cloud-GPU-Anbieter',
        content: 'Listenpreise für eine RTX 4090, gelesen am 22. November 2026. Die Vast.ai-Werte sind Einzel-GPU-Angebote aus der öffentlichen Offers-API und ändern sich minütlich.',
        columns: ['Anbieter', 'RTX 4090', 'Abrechnung', 'Hinweis'],
        rows: [
          { 'Anbieter': 'RunPod', 'RTX 4090': '0,34–0,89 $/Std. (Community–Secure)', 'Abrechnung': 'pro Sekunde', 'Hinweis': 'Consumer- und Rechenzentrums-GPUs in einer Liste' },
          { 'Anbieter': 'Vast.ai', 'RTX 4090': '0,26–0,60 $/Std. unterbrechbar, 0,38–2,34 $/Std. on-demand', 'Abrechnung': 'pro Sekunde', 'Hinweis': 'Marktplatz; Hostqualität variiert je Angebot' },
          { 'Anbieter': 'Lambda', 'RTX 4090': 'nicht gelistet', 'Abrechnung': 'pro Minute', 'Hinweis': 'H100 3,79–4,89 $/Std., A100 40 GB 1,99 $/Std.' },
        ],
      },
      finalVerdict: {
        title: 'Fazit: Es gibt keinen universellen Gewinner',
        content: 'Die Faustregeln zu Nutzungsstunden in diesem Artikel sind Orientierung, keine feste Regel. Ihr tatsächlicher Break-even hängt von Ihrer Cloud-Rate, Ihrem Hardwarepreis, Ihrem Strompreis und Ihrem Wiederverkaufswert ab — der Rechner oben berechnet die reale Antwort für Ihre Eingaben, nicht eine feste Schwelle.',
        decisionBlock: {
          title: 'Entscheiden Sie anhand von',
          localIf: [
            'Ihre Stunden liegen über Ihrem berechneten Break-even, etwa im Dauerbetrieb',
            'Sie brauchen Kostenplanbarkeit über mehrere Jahre',
            'Datenschutz oder Offline-Fähigkeit ist Pflicht',
            'Sie können die Hardware gut auslasten, nicht ungenutzt lassen',
          ],
          cloudIf: [
            'Sie nutzen LLMs unter 100 Std./Monat',
            'Ihr Workload ist sporadisch oder experimentell',
            'Sie brauchen zu teure GPU-Klassen (H100, A100 80GB)',
            'Sie wollen keine Wartung oder Anfangsinvestition',
          ],
          quick: [
            'Rechner oben mit Ihren echten Zahlen nutzen',
            'Unter 100 Std./Monat → Cloud mieten',
            '500+ Std./Monat oder Dauerbetrieb → lokal lohnt sich oft',
            '100–500 Std./Monat → Hardwarepreis und Strompreis entscheiden',
          ],
        },
      },
      finalCta: {
        title: 'Nächste Schritte nach Ihrem Ergebnis',
        content: '- **Geringe Nutzung (unter 100 Std./Monat):** [aktuelle Cloud-GPU-Preise vergleichen](/de/local-llms/cloud-gpu-rental-comparison-2026)\n- **Kleine Modelle, tägliche Nutzung:** [beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm)\n- **7B–14B, 24/7-Server:** [Beelink-SER8-Test](/de/smart-home/beelink-ser8-local-ai-review) oder [bester AMD-Mini-PC](/de/local-llms/best-amd-mini-pc-local-llm-2026)\n- **30B+ Modelle, intensive lokale Nutzung:** [Workstation-Build-Guide](/de/local-llms/local-llm-workstation-build)\n- **70B-Klasse, Dauerbetrieb:** [PromptQuorums GPU-Workstation-Build-Guide](/de/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Ist lokale KI immer günstiger als Cloud?',
            a: 'Nein. Lokale Hardware ist erst ab einer Nutzungsschwelle günstiger, die von Hardwarepreis, Strompreis und Cloud-Preis abhängt. Im Beispiel dieser Seite (RTX-4090-System für 3.300 $, ohne Wiederverkaufswert, 36 Monate Nutzung) liegt sie bei etwa 113 Stunden im Monat gegenüber 0,89 $/Std. und bei etwa 350 gegenüber 0,34 $/Std. Unterhalb Ihrer eigenen Schwelle ist Cloud-Miete günstiger.',
          },
          {
            q: 'Ab wie vielen Stunden lohnt sich der Kauf lokaler Hardware?',
            a: 'Für das Beispielsystem mit RTX 4090 für 3.300 $ liegt der Break-even gegenüber RunPod Secure Cloud (0,89 $/Std.) bei etwa 4.060 Stunden (17 Monate bei 240 Std./Monat), gegenüber Community Cloud (0,34 $/Std.) bei etwa 12.520 Stunden (52 Monate). Mit 1.000 $ Wiederverkaufswert sinkt er auf etwa 2.830 bzw. 8.730 Stunden. Hardwarepreis, Leistungsaufnahme und Strompreis sind Beispielwerte; nutzen Sie den Rechner oben mit Ihren eigenen.',
          },
          {
            q: 'Sind Stromkosten in Kostenschätzungen für lokale KI enthalten?',
            a: 'Sie sollten es sein, fehlen aber oft in einfachen Vergleichen. Ein 450-W-System im Betrieb von 8 Std./Tag kostet bei einem Beispielwert von 0,17 $/kWh etwa 18 $/Monat, bei 0,37 $/kWh etwa 40 $/Monat. Im Rechner oben können Sie Ihren eigenen Tarif eingeben.',
          },
          {
            q: 'Was kostet der Betrieb eines lokalen LLM im Vergleich zur Cloud?',
            a: 'Im Rechenbeispiel kostet die Miete einer RTX 4090 bei RunPod für 240 Stunden etwa 82 $ im Monat bei 0,34 $/Std. oder 214 $ bei 0,89 $/Std., ohne Anfangsinvestition. Das lokale System kostet 3.300 $ im Voraus plus etwa 18 $ Strom im Monat. Was günstiger ist, hängt davon ab, wie lange Sie es nutzen: siehe die Break-even-Tabelle oben.',
          },
          {
            q: 'Ist ein KI-Abo günstiger als eine gemietete oder gekaufte GPU?',
            a: 'Ein Abo kostet eine feste Monatsgebühr mit Nutzungslimits des Anbieters, eine gemietete GPU wird stundenweise abgerechnet und eine gekaufte GPU kostet im Voraus. Zur Rechnung Kaufen gegen Abo siehe [GPU vs. ChatGPT Plus 2026](/de/local-llms/gpu-vs-ai-subscription-roi) und [Lokale LLMs vs ChatGPT Plus](/de/local-llms/local-llms-vs-chatgpt-plus).',
          },
          {
            q: 'Ist ein Mac für lokale LLMs geeignet?',
            a: 'Macs mit viel Unified Memory können große Modelle (70B-Klasse) bei geringem Stromverbrauch betreiben, was ihre Kostenbilanz verbessert, besonders in Ländern mit hohen Strompreisen. Details im oben verlinkten Apple-Silicon-Guide.',
          },
          {
            q: 'Reichen 24 GB VRAM für lokale LLMs?',
            a: 'Mit 24 GB (RTX 3090 oder RTX 4090) laufen Modelle bis etwa 30–34B Parameter bei 4-Bit-Quantisierung, was die meisten Einzelnutzer-Fälle abdeckt. 70B-Modelle brauchen etwa 48 GB, erreichbar mit Dual-GPU-Setups oder Macs mit viel Unified Memory.',
          },
          {
            q: 'RTX 4090 kaufen oder Cloud-GPU-Zeit mieten?',
            a: 'Kaufen, wenn Sie über mehrere Jahre eine Nutzung oberhalb Ihres eigenen Break-even erwarten und die Hardware auslasten können; im 36-Monats-Beispiel dieser Seite ohne Wiederverkaufswert sind das etwa 113 Stunden im Monat gegenüber 0,89 $/Std. und etwa 350 gegenüber 0,34 $/Std. Mieten, wenn Ihre Nutzung gelegentlich oder sporadisch ist oder Sie den Workload noch prüfen: Mieten vermeidet die Anfangsinvestition für eine RTX 4090 (neu 2.000–3.000 $ im US-Markt laut InsiderLLM, ohne Datum, abgerufen am 27. November 2026) vollständig.',
          },
          {
            q: 'Was ist der günstigste Weg, ein lokales LLM zu betreiben?',
            a: 'Bei den niedrigsten Anfangskosten ist meist ein kleiner Mini-PC das günstigste dedizierte lokale Setup (N150-Klasse unter 500 $ für leichte 7B-Nutzung, Ryzen-Klasse mit einer beispielhaften Spanne von 500–1.000 $ für 7B–14B-Modelle). Bei geringem Volumen kostet Cloud-GPU-Miete ganz ohne Hardwarekauf weniger.',
          },
          {
            q: 'Bedeutet lokale KI, dass meine Daten den Rechner nie verlassen?',
            a: 'Bei lokaler Inferenz mit Tools wie Ollama verarbeitet ein Modell auf Ihrer eigenen Hardware Ihre Prompts, statt eines Cloud-Anbieters. Ollama dokumentiert, dass Sie nur lokale Modelle nutzen und die Cloud-Funktionen deaktivieren können. Modell-Downloads, Update-Prüfungen und andere Software auf dem Rechner können weiterhin das Netzwerk nutzen.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: 'Weiterführende Artikel',
        items: [
          '[Lokale LLM vs Cloud-GPU Kostenvergleich](/de/local-llms/local-llm-vs-cloud-gpu-cost) -- Break-even-Stunden und Kosten pro Token',
          '[Cloud-GPU-Mietvergleich 2026](/de/local-llms/cloud-gpu-rental-comparison-2026) -- Stundenpreise, Abrechnung und Regionen',
          '[Lokale LLM Workstation Build-Anleitung](/de/local-llms/local-llm-workstation-build) -- Stücklisten für ein lokales GPU-System',
          '[Beste GPU für lokale LLM-Inferenz unter $500 (2026)](/de/local-llms/best-gpu-for-llm-inference-under-500-2026) -- Einstiegs-GPUs',
          '[GPU vs KI-Abonnement ROI](/de/local-llms/gpu-vs-ai-subscription-roi) -- Kaufen oder abonnieren',
          '[Beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm) -- Stromsparende Optionen für einen 24/7-Server',
          '[Apple Silicon Local LLM Guide 2026](/de/local-llms/apple-silicon-local-llm-guide-2026) -- Macs mit Unified Memory',
          'Mieten statt kaufen: [Cloud-GPU-Anbieter vergleichen](/de/power-local-llm/best-cloud-gpu-providers), [RunPod-Bewertung](/de/power-local-llm/runpod-review), [Vast.ai-Bewertung](/de/power-local-llm/vast-ai-review), [Clore.ai-Bewertung](/de/power-local-llm/clore-ai-review) und [GPU-Server-Hosting-Anbieter](/de/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[RunPod-Preise](https://www.runpod.io/pricing), gelesen am 22. November 2026',
          '[Vast.ai-Preise](https://vast.ai/pricing) und die öffentliche Offers-API (Einzel-GPU-Angebote für RTX 4090), gelesen am 22. November 2026',
          '[Lambda-Preise](https://lambda.com/pricing), gelesen am 22. November 2026',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), RTX-4090-Preise (gebraucht: verkauft, Oktober 2026; neu: ohne Datum), abgerufen am 27. November 2026',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/), gebrauchte RTX 3090 aus 225 verkauften eBay-US-Angeboten, 13.–23. November 2026, abgerufen am 27. November 2026',
          '[Ollama-Preise](https://ollama.com/pricing) und [Ollama-Cloud-Doku](https://docs.ollama.com/cloud), gelesen am 22. November 2026',
        ],
      },
    },
  },
  fr: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-fr.webp',
    title: 'IA locale vs IA cloud : calculateur de coût (construire vs louer) 2026',
    seoTitle: 'IA locale vs cloud : calculateur de coût, acheter ou louer',
    metaDescription: 'Acheter un GPU local ou louer un GPU cloud ? Exemple de seuil de rentabilité, prix RunPod et Vast.ai et calculateur pour vos propres chiffres.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Matériel local ou GPU cloud loué : le moins cher dépend surtout de vos heures par mois. Saisissez vos propres chiffres dans le calculateur ci-dessous.**',
    quickAnswerTop: {
      question: 'Est-il moins cher de construire un serveur LLM local ou de louer un GPU cloud ?',
      answer: 'Cela dépend du volume d\'utilisation, pas d\'une règle fixe. En règle empirique, en dessous de 100 h/mois, la location de GPU cloud (RunPod, Vast.ai) est généralement moins chère, car sans investissement initial. Au-delà d\'environ 500 h/mois ou en usage continu, posséder le matériel peut l\'emporter une fois l\'électricité et la valeur de revente prises en compte. Utilisez le calculateur ci-dessous avec vos propres chiffres pour un seuil de rentabilité exact.',
      bullets: [
        'Moins de 20 h/mois : louer — le local se rentabilise difficilement',
        '20–100 h/mois : généralement louer',
        '100–250 h/mois : comparer précisément — prix du matériel et tarif électrique décident',
        '250–500 h/mois : le matériel local devient intéressant',
        '500+ h/mois ou usage continu : le local gagne généralement en coût total',
        'TCO complet = prix du matériel + électricité − revente, pas seulement prix ÷ tarif cloud',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'Le seuil dépend de vos heures. Dans l\'exemple de cette page (système RTX 4090 à 3 300 $, sans revente, 36 mois), le local devient rentable dès environ 113 heures par mois face à 0,89 $/h et environ 350 face à 0,34 $/h. Saisissez vos chiffres dans le calculateur.',
      },
      {
        type: 'plain-terms',
        text: 'Cette page contient un calculateur : entrez vos heures d\'utilisation mensuelles, votre tarif GPU cloud, le prix de votre matériel local, votre tarif électrique et la durée de possession prévue — il indique si louer un GPU cloud ou acheter du matériel local coûte moins cher pour vous.',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090 (Amazon)', url: 'https://www.amazon.fr/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'La question clé : les heures par mois, pas une règle fixe',
          'RunPod liste une RTX 4090 à 0,34 $/h (Community) et 0,89 $/h (Secure) ; les offres interruptibles de Vast.ai allaient de 0,26 à 0,60 $/h (relevé le 22 novembre 2026)',
          'Valeurs d\'exemple : système RTX 4090 local à 3 300 $, 450 W et 0,17 $/kWh, soit environ 0,08 $/h d\'électricité — remplacez-les par les vôtres',
          'Seuil de rentabilité dans cet exemple : environ 4 060 heures (17 mois à 240 h/mois) face à 0,89 $/h et environ 12 520 heures (52 mois) face à 0,34 $/h',
          'Avec 1 000 $ de valeur de revente, le même exemple devient rentable après environ 2 830 et 8 730 heures',
          'L\'électricité d\'un système de 450 W coûte environ 18 $/mois à 0,17 $/kWh et 240 h/mois',
          'Le cloud est généralement moins cher pour un usage ponctuel, irrégulier ou expérimental sous environ 100 h/mois',
          'Le local peut se justifier pour une inférence quotidienne soutenue, des données sensibles ou 500+ h/mois, si le matériel reste occupé',
        ],
      },
      usageTiers: {
        title: 'Réponse rapide : quelle option correspond à votre usage ?',
        content: 'Ces tranches horaires sont des repères éditoriaux, pas une règle stricte — prix du matériel, votre tarif cloud, votre tarif électrique et la valeur de revente déplacent le seuil réel. Le calculateur ci-dessous donne la réponse exacte pour vos chiffres.',
        columns: ['Heures/mois', 'Recommandation'],
        rows: [
          { 'Heures/mois': 'Moins de 20 h', Recommandation: 'Louer — le local se rentabilise difficilement' },
          { 'Heures/mois': '20–100 h', Recommandation: 'Généralement louer' },
          { 'Heures/mois': '100–250 h', Recommandation: 'Comparer précisément selon le matériel' },
          { 'Heures/mois': '250–500 h', Recommandation: 'Le matériel local devient intéressant' },
          { 'Heures/mois': '500+ h', Recommandation: 'Le local gagne généralement au total' },
          { 'Heures/mois': 'Continu 24/7', Recommandation: 'Local souvent rentable : à calculer' },
        ],
      },
      costCalculatorTool: {
        title: 'Calculateur de coût interactif : local vs cloud',
        content: 'Entrez vos heures d\'utilisation mensuelles, votre tarif GPU cloud, le prix de votre matériel local, votre tarif électrique, la valeur de revente attendue et la durée de possession. Le calculateur ci-dessous calcule en direct votre coût cloud mensuel, votre coût d\'exploitation local, votre coût total de possession et votre seuil de rentabilité. Toutes les valeurs sont des estimations calculées à partir de vos données et de prix de référence recherchés, pas des mesures effectuées par PromptQuorum.',
        component: 'CostCalculator',
      },
      workedExample: {
        title: 'Exemple chiffré : seuil de rentabilité d\'un système RTX 4090',
        content: '**Heures de rentabilité = (prix du matériel − valeur de revente) ÷ (tarif cloud par heure − électricité par heure).** Électricité par heure = watts ÷ 1 000 × prix du kWh.\n\nValeurs d\'exemple, à remplacer par les vôtres : 3 300 $ pour un système RTX 4090 ([InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) indique, sans date, 2 000–3 000 $ pour la carte neuve seule sur le marché américain, consulté le 27 novembre 2026), 450 W à 0,17 $/kWh (0,45 × 0,17 = 0,0765 $/h) et 240 heures d\'usage par mois. Les tarifs cloud sont les prix catalogue RunPod pour une RTX 4090, relevés le 22 novembre 2026.\n\nÀ 240 heures par mois, la facture cloud est d\'environ 214 $ (Secure) ou 82 $ (Community), contre environ 18 $ d\'électricité pour le système local. Le résultat ignore les réparations, votre temps et les variations de prix des deux côtés ; le calculateur ci-dessus applique la même formule à vos chiffres.',
        columns: ['Tarif cloud', 'Seuil de rentabilité', 'À 240 h/mois', 'Avec 1 000 $ de revente'],
        rows: [
          { 'Tarif cloud': '0,89 $/h (RunPod Secure Cloud)', 'Seuil de rentabilité': '≈4 060 heures', 'À 240 h/mois': '≈17 mois', 'Avec 1 000 $ de revente': '≈2 830 h (≈12 mois)' },
          { 'Tarif cloud': '0,34 $/h (RunPod Community Cloud)', 'Seuil de rentabilité': '≈12 520 heures', 'À 240 h/mois': '≈52 mois', 'Avec 1 000 $ de revente': '≈8 730 h (≈36 mois)' },
        ],
      },
      hardwareDecision: {
        title: 'Tableau de décision matériel',
        content: 'Associez la taille de modèle visée et votre usage à un niveau de matériel avant de chiffrer une configuration précise. Les gammes de prix des mini PC et des Mac sont des prix de système d\'exemple en dollars américains, pas des devis. Les lignes GPU indiquent des prix du marché américain pour la carte seule, pas pour un système complet, consultés le 27 novembre 2026. RTX 3090 d\'occasion : ventes conclues sur eBay US du 13 au 23 novembre 2026, 225 ventes, hors frais de port ([guide InsiderLLM des GPU d\'occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). RTX 4090 d\'occasion : 216 ventes eBay conclues, octobre 2026 ; le prix neuf de la RTX 4090 n\'est pas daté ([page de prix InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)). La ligne 48 Go correspond à deux RTX 3090 d\'occasion (2 × 1 500–1 725 $ = 3 000–3 450 $). Le reste du système s\'ajoute. Les prix locaux varient selon les taxes et droits d\'importation.',
        columns: ['Niveau', 'VRAM / RAM', 'Idéal pour', 'Gamme de prix'],
        rows: [
          { Niveau: 'Mini PC N150', 'VRAM / RAM': '16 Go RAM', 'Idéal pour': 'Chat léger, jusqu\'à 7B', 'Gamme de prix': 'Moins de 500 $' },
          { Niveau: 'Mini PC Ryzen', 'VRAM / RAM': '32–64 Go RAM', 'Idéal pour': '7B–14B quotidien, serveur 24/7', 'Gamme de prix': '500–1 000 $' },
          { Niveau: 'RTX 3090 (occasion)', 'VRAM / RAM': '24 Go VRAM', 'Idéal pour': 'Jusqu\'à 30B Q4, carte 24 Go la moins chère ici', 'Gamme de prix': '1 500–1 725 $ (carte seule, vendue aux US, 13–23/11/2026)' },
          { Niveau: 'RTX 4090', 'VRAM / RAM': '24 Go VRAM', 'Idéal pour': 'Jusqu\'à 34B Q4, plus rapide que la RTX 3090', 'Gamme de prix': '2 575–3 010 $ d\'occasion, 2 000–3 000 $ neuve (carte seule)' },
          { Niveau: 'Setup GPU 48 Go (2× RTX 3090 d\'occasion)', 'VRAM / RAM': '48 Go VRAM', 'Idéal pour': 'Jusqu\'à 70B Q4, R&D', 'Gamme de prix': 'env. 3 000–3 450 $ (2 cartes seulement)' },
          { Niveau: 'Mac (mémoire unifiée)', 'VRAM / RAM': '48–128 Go unifié', 'Idéal pour': 'Classe 70B via MLX (64 Go+), sobre', 'Gamme de prix': '2 000–4 000 $+' },
        ],
      },
      rentPath: {
        title: 'Voie 1 — Usage faible : louer un GPU cloud',
        content: 'La location convient à l\'expérimentation, au fine-tuning occasionnel, aux charges variables ou aux tests avant achat. Vous ne payez que les heures utilisées, sans entretien, avec un accès immédiat à des GPU (H100, A100 80 Go) qui coûteraient des milliers de dollars à l\'achat.\n\nComparez les prix cloud actuels : [tarifs RunPod](https://www.runpod.io/pricing) et [tarifs Vast.ai](https://vast.ai/pricing) sont des liens éditoriaux de référence, non des liens d\'affiliation — PromptQuorum n\'a de relation de commission avec aucun des deux fournisseurs.',
      },
      miniPcPath: {
        title: 'Voie 2 — Usage moyen : un mini PC peut battre une workstation GPU',
        content: 'Pour des modèles 7B–14B utilisés quotidiennement — chat, automatisations Home Assistant, Ollama en continu — un mini PC Ryzen consomme souvent moins et prend moins de place qu\'un système à GPU dédiée. Le [test du Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) l\'examine comme serveur Ollama 24/7 (estimations d\'après les spécifications, pas un benchmark PromptQuorum) ; voir aussi le [guide des meilleurs mini PC pour LLM local](/fr/local-llms/best-mini-pcs-local-llm) et le [meilleur mini PC AMD pour LLM local](/fr/local-llms/best-amd-mini-pc-local-llm-2026), incluant le [Minisforum UM890 Pro](/fr/smart-home/minisforum-um890-pro-local-ai-review) et le [GMKtec G3 Plus](/fr/smart-home/gmktec-g3-plus-local-ai-review).',
      },
      gpuPath: {
        title: 'Voie 3 — IA locale intensive : workstation GPU',
        content: 'Dès que vous avez besoin de modèles 30B+, de fine-tuning ou d\'une inférence multi-utilisateurs rapide, une workstation GPU dédiée est le bon niveau. La métrique qui compte est le VRAM par dollar, pas la vitesse brute — le VRAM détermine quelles tailles de modèle peuvent même se charger. Voir le [guide de construction de workstation LLM locale](/fr/local-llms/local-llm-workstation-build) et le [guide de build workstation GPU de PromptQuorum](/fr/power-local-llm/best-workstation-build-local-ai-2026).',
      },
      whatToBuy: {
        title: '« Que dois-je acheter ? » par gamme de prix',
        content: '**Moins de 500 $** — N\'achetez pas de matériel IA dédié. Utilisez ce que vous avez déjà ou louez un GPU cloud pour des besoins occasionnels.\n\n**500–1 000 $** — Un mini PC Ryzen avec 32 Go+ de RAM. Voir le [meilleur mini PC AMD pour LLM local](/fr/local-llms/best-amd-mini-pc-local-llm-2026) et le [test Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review).\n\n**1 000–1 800 $** — Un mini PC plus puissant. Voir le [guide des meilleurs mini PC](/fr/local-llms/best-mini-pcs-local-llm) et le [guide meilleur GPU sous 500 $](/fr/local-llms/best-gpu-for-llm-inference-under-500-2026) pour le contexte des GPU d\'entrée.\n\n**1 800–2 500 $** — Une configuration avec RTX 3090 d\'occasion, comme tranche de budget d\'exemple : la carte seule était listée à 1 500–1 725 $ par [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (annonces vendues, données datées du 2026-11-23). Il reste ainsi environ 75–1 000 $ de cette tranche pour le reste du système : le bas de la tranche peut donc ne pas suffire pour une configuration neuve complète. Voir le [guide de build workstation](/fr/local-llms/local-llm-workstation-build).\n\n**3 000–4 500 $** — Une workstation RTX 4090, comme tranche de budget d\'exemple (carte seule selon [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) : 2 575–3 010 $ en ventes d\'occasion conclues, octobre 2026, et 2 000–3 000 $ neuve sans date, plus le reste du système), ou un Mac à grande mémoire unifiée. Voir le [guide de build workstation](/fr/local-llms/local-llm-workstation-build) et le [guide Apple Silicon](/fr/local-llms/apple-silicon-local-llm-guide-2026).\n\n**5 000 $+** — 48 Go+ de VRAM, multi-GPU ou classe workstation (deux RTX 3090 d\'occasion seules représentent environ 3 000–3 450 $ dans la fourchette d\'annonces vendues d\'InsiderLLM ; une RTX PRO 6000 Blackwell 96 Go était listée à environ 16 000 $ selon [TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html) le 2026-08-13). Calculez d\'abord votre taux d\'utilisation : ce niveau ne se rentabilise qu\'en usage intensif soutenu. Voir le [guide de build workstation GPU de PromptQuorum](/fr/power-local-llm/best-workstation-build-local-ai-2026).\n\nPas encore prêt à acheter ? Vous pouvez louer à la place : [comparer les fournisseurs de GPU cloud](/fr/power-local-llm/best-cloud-gpu-providers), lisez l\'[avis sur RunPod](/fr/power-local-llm/runpod-review), l\'[avis sur Vast.ai](/fr/power-local-llm/vast-ai-review) ou l\'[avis sur Clore.ai](/fr/power-local-llm/clore-ai-review), ou consultez les [hébergeurs de serveurs GPU](/fr/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart).',
      },
      hardwarePicks: {
        title: 'Sélections matérielles par catégorie',
        content: '- **Budget :** [GMKtec G3 Plus](/fr/smart-home/gmktec-g3-plus-local-ai-review) — mini PC d\'entrée pour modèles 7B\n- **Milieu de gamme :** [Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) — 7B–14B, Home Assistant, serveur Ollama 24/7 ; [Minisforum UM890 Pro](/fr/smart-home/minisforum-um890-pro-local-ai-review) en alternative Ryzen\n- **Rapport qualité-prix GPU :** RTX 3090 (carte d\'occasion listée à 1 500–1 725 $ par [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), données datées du 2026-11-23) — 24 Go de VRAM à un prix de carte inférieur à la RTX 4090\n- **Performance GPU :** RTX 4090 (neuve 2 000–3 000 $ sans date ; ventes d\'occasion conclues 2 575–3 010 $, octobre 2026 ; selon InsiderLLM, marché américain) — plus rapide que la RTX 3090, mais plus chère, voir le [guide de build workstation](/fr/local-llms/local-llm-workstation-build)\n- **Option Apple :** Mac à grande mémoire unifiée pour modèles 70B+ à faible consommation — voir le [guide Apple Silicon](/fr/local-llms/apple-silicon-local-llm-guide-2026)\n\nLes liens RTX 3090/4090 et Apple ci-dessus sont de simples liens produit/éditoriaux — PromptQuorum n\'a aucun programme d\'affiliation et ne perçoit aucune commission sur un achat matériel.',
      },
      dontBuy: {
        title: 'Quand NE PAS acheter de matériel IA local',
        content: '- **Usage occasionnel** (~10 h/mois ou moins) — le matériel restera inactif la plupart du temps\n- **Charge très variable** — parfois intensive, parfois nulle\n- **Besoin de GPU différents par projet** — le cloud permet de passer instantanément de 24 Go à 80 Go\n- **Refus de la maintenance matérielle** — pilotes, refroidissement, mises à niveau, pannes sont à votre charge en local\n- **Besoin occasionnel de très grands modèles** — louer un H100 une semaine bat l\'achat',
      },
      whenLocalWins: {
        title: 'Quand l\'IA locale gagne',
        content: '- **Usage quotidien et prévisible** — les heures s\'additionnent vite, voir le tableau d\'usage ci-dessus\n- **Prévisibilité des coûts** — un coût matériel fixe se budgète plus facilement que des factures cloud variables\n- **Données sensibles ou besoin hors ligne** — les prompts sont traités sur votre propre machine plutôt que sur les serveurs d\'un fournisseur ; les téléchargements de modèles et les vérifications de mise à jour utilisent toujours le réseau\n- **Pas de frais par requête pour les modèles que vous exécutez vous-même** — les modèles locaux utilisent votre propre matériel, alors que le service cloud distinct d\'Ollama applique des limites de session et hebdomadaires selon le forfait ([tarifs Ollama](https://ollama.com/pricing))\n- **Horizon d\'usage pluriannuel** avec un matériel bien utilisé',
      },
      electricity: {
        title: 'Coût de l\'électricité par pays',
        content: 'Un système de 450 W utilisé 240 heures par mois (8 h/jour) consomme 108 kWh. Aux tarifs d\'exemple ci-dessous, cela coûte environ 18 $ par mois (États-Unis) à environ 40 $ (Allemagne). Ces tarifs sont des valeurs d\'exemple identiques aux préréglages du calculateur, pas des moyennes sourcées : utilisez votre propre tarif.',
        columns: ['Pays', 'Tarif d\'exemple', '450 W, 240 h/mois'],
        rows: [
          { 'Pays': 'États-Unis', 'Tarif d\'exemple': '0,17 $/kWh', '450 W, 240 h/mois': '18 $/mois' },
          { 'Pays': 'Allemagne', 'Tarif d\'exemple': '0,37 $/kWh', '450 W, 240 h/mois': '40 $/mois' },
          { 'Pays': 'Royaume-Uni', 'Tarif d\'exemple': '0,33 $/kWh', '450 W, 240 h/mois': '36 $/mois' },
          { 'Pays': 'France', 'Tarif d\'exemple': '0,22 $/kWh', '450 W, 240 h/mois': '24 $/mois' },
        ],
      },
      cloudProviders: {
        title: 'Comparatif de location de GPU cloud',
        content: 'Prix catalogue pour une RTX 4090, relevés le 22 novembre 2026. Les chiffres Vast.ai sont des offres à un seul GPU issues de son API publique d\'offres et changent à la minute.',
        columns: ['Fournisseur', 'RTX 4090', 'Facturation', 'Remarque'],
        rows: [
          { 'Fournisseur': 'RunPod', 'RTX 4090': '0,34–0,89 $/h (Community–Secure)', 'Facturation': 'à la seconde', 'Remarque': 'GPU grand public et datacenter dans une liste' },
          { 'Fournisseur': 'Vast.ai', 'RTX 4090': '0,26–0,60 $/h interruptible, 0,38–2,34 $/h à la demande', 'Facturation': 'à la seconde', 'Remarque': 'Place de marché ; qualité d\'hôte variable' },
          { 'Fournisseur': 'Lambda', 'RTX 4090': 'non listée', 'Facturation': 'à la minute', 'Remarque': 'H100 3,79–4,89 $/h, A100 40 Go 1,99 $/h' },
        ],
      },
      finalVerdict: {
        title: 'Verdict final : pas de gagnant universel',
        content: 'Les règles empiriques d\'heures d\'usage de cet article sont des repères, pas des lois strictes. Votre seuil de rentabilité réel dépend de votre tarif cloud, du prix de votre matériel, de votre tarif électrique et de la valeur de revente — le calculateur ci-dessus calcule la réponse réelle pour vos données, pas un seuil fixe.',
        decisionBlock: {
          title: 'Décidez selon',
          localIf: [
            'Vos heures dépassent votre seuil calculé, par exemple en usage continu',
            'Vous avez besoin de prévisibilité des coûts sur plusieurs années',
            'La confidentialité des données ou le hors ligne est requis',
            'Vous pouvez bien utiliser le matériel, sans le laisser inactif',
          ],
          cloudIf: [
            'Vous utilisez des LLM moins de 100 h/mois',
            'Votre charge est sporadique ou expérimentale',
            'Vous avez besoin de GPU trop coûteux à posséder (H100, A100 80 Go)',
            'Vous ne voulez ni maintenance ni investissement initial',
          ],
          quick: [
            'Utilisez le calculateur ci-dessus avec vos vrais chiffres',
            'Moins de 100 h/mois → louer',
            '500+ h/mois ou continu → le local est souvent rentable',
            '100–500 h/mois → prix du matériel et tarif électrique décident',
          ],
        },
      },
      finalCta: {
        title: 'Prochaines étapes selon votre résultat',
        content: '- **Usage faible (moins de 100 h/mois) :** [comparer les prix GPU cloud actuels](/fr/local-llms/cloud-gpu-rental-comparison-2026)\n- **Petits modèles, usage quotidien :** [meilleurs mini PC pour LLM local](/fr/local-llms/best-mini-pcs-local-llm)\n- **7B–14B, serveur 24/7 :** [test Beelink SER8](/fr/smart-home/beelink-ser8-local-ai-review) ou [meilleur mini PC AMD](/fr/local-llms/best-amd-mini-pc-local-llm-2026)\n- **Modèles 30B+, usage local intensif :** [guide de build workstation](/fr/local-llms/local-llm-workstation-build)\n- **Classe 70B, usage continu :** [guide de build workstation GPU de PromptQuorum](/fr/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'L\'IA locale est-elle toujours moins chère que le cloud ?',
            a: 'Non. Le matériel local n\'est moins cher qu\'au-dessus d\'un seuil d\'usage qui dépend du prix du matériel, du tarif d\'électricité et du tarif cloud. Dans l\'exemple de cette page (système RTX 4090 à 3 300 $, sans revente, 36 mois d\'usage), il est d\'environ 113 heures par mois face à 0,89 $/h et d\'environ 350 face à 0,34 $/h. Sous votre propre seuil, la location cloud est moins chère.',
          },
          {
            q: 'À partir de combien d\'heures l\'achat de matériel local devient-il rentable ?',
            a: 'Pour le système d\'exemple RTX 4090 à 3 300 $, le seuil de rentabilité face à RunPod Secure Cloud (0,89 $/h) est d\'environ 4 060 heures (17 mois à 240 h/mois) ; face à Community Cloud (0,34 $/h), il est d\'environ 12 520 heures (52 mois). Avec 1 000 $ de valeur de revente, il passe à environ 2 830 et 8 730 heures. Prix du matériel, puissance et électricité sont des valeurs d\'exemple : utilisez le calculateur ci-dessus avec les vôtres.',
          },
          {
            q: 'L\'électricité est-elle incluse dans les estimations de coût de l\'IA locale ?',
            a: 'Elle devrait l\'être, mais manque souvent dans les comparaisons simples. Un système de 450 W utilisé 8 heures par jour ajoute environ 18 $/mois à un tarif d\'exemple de 0,17 $/kWh, ou environ 40 $/mois à 0,37 $/kWh. Le calculateur ci-dessus vous permet de saisir votre propre tarif.',
          },
          {
            q: 'Combien coûte l\'exécution d\'un LLM local par rapport au cloud ?',
            a: 'Dans l\'exemple chiffré, la location d\'une RTX 4090 chez RunPod coûte environ 82 $ par mois à 0,34 $/h ou 214 $ à 0,89 $/h pour 240 heures, sans coût initial. Le système local coûte 3 300 $ au départ plus environ 18 $ d\'électricité par mois. Le moins cher dépend de la durée d\'utilisation : voir le tableau de seuil de rentabilité ci-dessus.',
          },
          {
            q: 'Un abonnement IA est-il moins cher que louer ou acheter un GPU ?',
            a: 'Un abonnement facture un tarif mensuel fixe avec les limites d\'usage du fournisseur, un GPU loué est facturé à l\'heure et un GPU acheté coûte au départ. Pour le calcul acheter ou s\'abonner, voir [GPU vs ChatGPT Plus 2026](/fr/local-llms/gpu-vs-ai-subscription-roi) et [LLMs locaux vs ChatGPT Plus](/fr/local-llms/local-llms-vs-chatgpt-plus).',
          },
          {
            q: 'Un Mac convient-il aux LLM locaux ?',
            a: 'Les Mac à grande mémoire unifiée peuvent exécuter de grands modèles (classe 70B) avec une faible consommation, ce qui améliore leur bilan de coût, surtout dans les pays où l\'électricité est chère. Voir le guide Apple Silicon ci-dessus pour les détails.',
          },
          {
            q: '24 Go de VRAM suffisent-ils pour les LLM locaux ?',
            a: '24 Go (RTX 3090 ou RTX 4090) exécutent des modèles jusqu\'à environ 30–34B paramètres en quantification 4 bits, ce qui couvre la plupart des usages mono-utilisateur. Les modèles de classe 70B demandent environ 48 Go, atteints avec des configurations double GPU ou des Mac à grande mémoire unifiée.',
          },
          {
            q: 'Faut-il acheter une RTX 4090 ou louer du temps de GPU cloud ?',
            a: 'Achetez si vous prévoyez sur plusieurs années un usage soutenu au-dessus de votre propre seuil de rentabilité et pouvez garder le matériel occupé ; dans l\'exemple sur 36 mois sans revente, cela représente environ 113 heures par mois face à 0,89 $/h et environ 350 face à 0,34 $/h. Louez si votre usage est occasionnel, irrégulier ou si vous validez encore la charge de travail : la location évite entièrement le coût initial d\'une RTX 4090 (neuve 2 000–3 000 $ sur le marché américain selon InsiderLLM, sans date, consulté le 27 novembre 2026).',
          },
          {
            q: 'Quel est le moyen le moins cher d\'exécuter un LLM local ?',
            a: 'Pour le coût initial le plus bas, un petit mini PC est généralement la configuration locale dédiée la moins chère (classe N150 à moins de 500 $ pour un usage 7B léger, ou classe Ryzen dans une gamme d\'exemple de 500–1 000 $ pour des modèles 7B–14B). À faible volume, la location de GPU cloud sans aucun achat de matériel coûte moins.',
          },
          {
            q: 'Exécuter l\'IA en local signifie-t-il que mes données ne quittent jamais mon ordinateur ?',
            a: 'Avec l\'inférence locale via des outils comme Ollama, vos prompts sont traités par un modèle sur votre propre matériel plutôt que par un fournisseur cloud. Ollama documente que vous pouvez n\'utiliser que des modèles locaux et désactiver ses fonctions cloud. Les téléchargements de modèles, les vérifications de mise à jour et d\'autres logiciels de la machine peuvent toujours utiliser le réseau.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: 'Lectures recommandées',
        items: [
          '[Comparaison coûts LLM local vs GPU cloud](/fr/local-llms/local-llm-vs-cloud-gpu-cost) -- heures de rentabilité et coût par token',
          '[Comparaison location GPU cloud 2026](/fr/local-llms/cloud-gpu-rental-comparison-2026) -- prix horaires, facturation et régions',
          '[Guide de construction workstation LLM local](/fr/local-llms/local-llm-workstation-build) -- listes de pièces pour un système GPU local',
          '[Meilleure GPU LLM local sous $500 (2026)](/fr/local-llms/best-gpu-for-llm-inference-under-500-2026) -- GPU d\'entrée de gamme',
          '[GPU vs abonnement IA ROI](/fr/local-llms/gpu-vs-ai-subscription-roi) -- acheter ou s\'abonner',
          '[Meilleurs mini PC pour LLM local](/fr/local-llms/best-mini-pcs-local-llm) -- options basse consommation pour un serveur 24/7',
          '[Guide Apple Silicon pour LLM local 2026](/fr/local-llms/apple-silicon-local-llm-guide-2026) -- Mac à mémoire unifiée',
          'Louer plutôt qu\'acheter : [comparer les fournisseurs de GPU cloud](/fr/power-local-llm/best-cloud-gpu-providers), [avis sur RunPod](/fr/power-local-llm/runpod-review), [avis sur Vast.ai](/fr/power-local-llm/vast-ai-review), [avis sur Clore.ai](/fr/power-local-llm/clore-ai-review) et [hébergeurs de serveurs GPU](/fr/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Tarifs RunPod](https://www.runpod.io/pricing), relevés le 22 novembre 2026',
          '[Tarifs Vast.ai](https://vast.ai/pricing) et son API publique d\'offres (offres RTX 4090 à un seul GPU), relevés le 22 novembre 2026',
          '[Tarifs Lambda](https://lambda.com/pricing), relevés le 22 novembre 2026',
          '[InsiderLLM : NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), prix de la RTX 4090 (occasion : ventes, octobre 2026 ; neuf : sans date), consulté le 27 novembre 2026',
          '[InsiderLLM : Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/), RTX 3090 d\'occasion d\'après 225 ventes eBay US, 13–23 novembre 2026, consulté le 27 novembre 2026',
          '[Tarifs Ollama](https://ollama.com/pricing) et [documentation cloud d\'Ollama](https://docs.ollama.com/cloud), relevés le 22 novembre 2026',
        ],
      },
    },
  },
  ja: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-ja.webp',
    title: 'ローカルAI vs クラウドAI：コスト計算機（購入 vs レンタル）2026年版',
    seoTitle: 'ローカルAI vs クラウドAI：コスト計算機 2026',
    metaDescription: 'ローカルGPUを買うかクラウドGPUを借りるか。損益分岐の計算例、RunPodとVast.aiの料金、自分の数値で試せる計算機をまとめました。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**ローカルGPUかクラウドGPUのどちらが安いかは、月間の利用時間で決まります。下の計算機に自分の数値を入れて損益分岐を確認してください。**',
    quickAnswerTop: {
      question: 'ローカルLLMサーバーを構築するのとクラウドGPUを借りるのはどちらが安いですか？',
      answer: '固定ルールではなく使用量次第です。目安として、月100時間未満なら、初期費用のかからないクラウドGPUレンタル（RunPod、Vast.ai）が通常は安くなります。月500時間程度を超える、または常時稼働の場合、電気代と将来の売却価値を考慮するとハードウェア購入が有利になる場合があります。正確な損益分岐点は、以下の計算機にご自身の使用時間・ハードウェア価格・電気料金を入力してください。',
      bullets: [
        '月20時間未満：レンタル——ローカルは元が取りにくいです',
        '月20〜100時間：通常はレンタルが有利',
        '月100〜250時間：慎重に比較——ハードウェア価格と電気料金が決め手',
        '月250〜500時間：ローカルハードウェアが魅力的になる',
        '月500時間以上または常時稼働：総所有コストではローカルが有利になることが多い',
        '完全なTCO＝ハードウェア価格＋電気代−売却価値。購入価格÷クラウド料金だけでは不十分',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: '損益分岐は利用時間で決まります。このページの例（RTX 4090システム3,300ドル、売却価値なし、36ヶ月）では、0.89ドル/時に対して月約113時間、0.34ドル/時に対して月約350時間からローカルが得になります。自分の数値は計算機で確認してください。',
      },
      {
        type: 'plain-terms',
        text: 'このページには計算機があります。月間使用時間、クラウドGPU料金、ローカルハードウェア価格、電気料金、想定利用期間を入力すると、クラウドGPUレンタルとローカルハードウェア購入のどちらが自分にとって安いかがわかります。',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090（Amazon）', url: 'https://www.amazon.co.jp/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '決め手は月間の利用時間です',
          'RunPodのRTX 4090は0.34ドル/時（Community）と0.89ドル/時（Secure）、Vast.aiの中断可能オファーは0.26〜0.60ドル/時でした（2026年11月22日確認）',
          '例の前提：ローカルRTX 4090システム3,300ドル、450W、0.17ドル/kWh（電気代は約0.08ドル/時）——自分の値に置き換えてください',
          'この例の損益分岐：0.89ドル/時に対して約4,060時間（月240時間で17ヶ月）、0.34ドル/時に対して約12,520時間（52ヶ月）',
          '売却価値1,000ドルを見込むと、同じ例の損益分岐は約2,830時間と約8,730時間になります',
          '450Wシステムの電気代は、0.17ドル/kWhで月240時間利用の場合、月約18ドルです',
          '月約100時間未満の断続的・単発・実験的な利用ではクラウドの方が通常は安くなります',
          '毎日の継続利用、機密データ、月500時間以上で、ハードウェアが稼働し続けるならローカルが選択肢になります',
        ],
      },
      usageTiers: {
        title: 'クイックアンサー：あなたの使用量に合うのは？',
        content: '時間の区分は編集上の目安であり、厳密なルールではありません——ハードウェア価格、クラウド料金、電気料金、売却価値が実際の損益分岐点を左右します。正確な答えは以下の計算機で確認してください。',
        columns: ['月間時間', '推奨'],
        rows: [
          { '月間時間': '月20時間未満', '推奨': 'レンタル——ローカルは元が取りにくい' },
          { '月間時間': '月20〜100時間', '推奨': '通常はレンタル' },
          { '月間時間': '月100〜250時間', '推奨': '慎重に比較——ハードウェア価格次第' },
          { '月間時間': '月250〜500時間', '推奨': 'ローカルハードウェアが魅力的に' },
          { '月間時間': '月500時間以上', '推奨': '総コストではローカルが有利に' },
          { '月間時間': '常時稼働（24/7）', '推奨': 'ローカルが得になりやすい（要計算）' },
        ],
      },
      costCalculatorTool: {
        title: 'インタラクティブコスト計算機：ローカル vs クラウド',
        content: '月間使用時間、クラウドGPU料金、ローカルハードウェア価格、電気料金、想定売却価値、利用期間を入力してください。以下の計算機が、クラウド月額費用、ローカル運用費用、ローカル総所有コスト、損益分岐点をリアルタイムで計算します。すべての数値は入力値と調査済みの参考価格から算出した推定値であり、PromptQuorum自身が測定した結果ではありません。',
        component: 'CostCalculator',
      },
      workedExample: {
        title: '計算例：RTX 4090システムの損益分岐',
        content: '**損益分岐時間＝（ハードウェア価格－売却価値）÷（クラウド料金/時－電気代/時）。** 電気代/時＝ワット数÷1,000×1kWhあたりの料金。\n\n例の前提（自分の値に置き換えてください）：RTX 4090システム3,300ドル（新品カード単体について[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)は米国市場で2,000〜3,000ドルと記載。掲載日の記載はなし、2026年11月27日確認）、450W・0.17ドル/kWh（0.45×0.17＝0.0765ドル/時）、月240時間の利用。クラウド料金はRunPodのRTX 4090の定価で、2026年11月22日に確認しました。\n\n月240時間の利用では、クラウドの請求は約214ドル（Secure）または約82ドル（Community）、ローカルの電気代は約18ドルです。結果には修理費、あなたの時間、両側の価格変動は含まれません。上の計算機は同じ式を自分の数値で計算します。',
        columns: ['クラウド料金', '損益分岐', '月240時間の場合', '売却1,000ドル見込み'],
        rows: [
          { 'クラウド料金': '0.89ドル/時（RunPod Secure Cloud）', '損益分岐': '約4,060時間', '月240時間の場合': '約17ヶ月', '売却1,000ドル見込み': '約2,830時間（約12ヶ月）' },
          { 'クラウド料金': '0.34ドル/時（RunPod Community Cloud）', '損益分岐': '約12,520時間', '月240時間の場合': '約52ヶ月', '売却1,000ドル見込み': '約8,730時間（約36ヶ月）' },
        ],
      },
      hardwareDecision: {
        title: 'ハードウェア選定表',
        content: '具体的な構成を検討する前に、目標モデルサイズと使用パターンをハードウェア階層に当てはめてください。 ミニPCとMacの価格帯はシステム価格の例（米ドル）であり、見積りではありません。GPU行はシステム全体ではなくカード単体の米国市場価格です（2026年11月27日確認）。中古RTX 3090：2026年11月13〜23日のeBay US成約225件、送料別（[InsiderLLM中古GPUガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。中古RTX 4090：2026年10月のeBay成約216件。RTX 4090の新品価格は日付の記載がありません（[InsiderLLM価格ページ](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)）。48GBの行は中古RTX 3090を2枚（2×1,500〜1,725ドル＝3,000〜3,450ドル）にした場合です。残りのシステム費用は別途かかります。国内の価格は税金や輸入コストで異なります。',
        columns: ['階層', 'VRAM／RAM', '最適用途', '価格帯'],
        rows: [
          { '階層': 'N150ミニPC', 'VRAM／RAM': '16GB RAM', '最適用途': '軽いチャット、7Bまで', '価格帯': '500ドル未満' },
          { '階層': 'Ryzenミニ PC', 'VRAM／RAM': '32〜64GB RAM', '最適用途': '7B〜14B常用、24/7サーバー', '価格帯': '500〜1,000ドル' },
          { '階層': 'RTX 3090（中古）', 'VRAM／RAM': '24GB VRAM', '最適用途': '30B Q4まで、ここで最も安い24GBカード', '価格帯': '1,500〜1,725ドル（カード単体、米国成約 2026/11/13〜23）' },
          { '階層': 'RTX 4090', 'VRAM／RAM': '24GB VRAM', '最適用途': '34B Q4まで、RTX 3090より高速', '価格帯': '中古2,575〜3,010ドル、新品2,000〜3,000ドル（カード単体）' },
          { '階層': '48GB GPU構成（中古RTX 3090×2）', 'VRAM／RAM': '48GB VRAM', '最適用途': '70B Q4まで、開発・研究', '価格帯': '約3,000〜3,450ドル（カード2枚のみ）' },
          { '階層': 'Mac（統合メモリ）', 'VRAM／RAM': '48〜128GB統合', '最適用途': 'MLXで70B級（64GB以上）、省電力', '価格帯': '2,000〜4,000ドル以上' },
        ],
      },
      rentPath: {
        title: 'パス1 — 少ない使用量：クラウドGPUをレンタル',
        content: '実験、たまのファインチューニング、変動するワークロード、購入前のテストにはレンタルが適しています。使った時間分だけ支払い、メンテナンス不要で、購入すれば数千ドルするGPU（H100、A100 80GB）にも即座にアクセスできます。\n\n現在のクラウドGPU価格を比較：[RunPod料金](https://www.runpod.io/pricing)と[Vast.ai料金](https://vast.ai/pricing)は編集上の参考リンクであり、アフィリエイトリンクではありません——PromptQuorumはどちらのプロバイダーとも報酬関係はありません。',
      },
      miniPcPath: {
        title: 'パス2 — 中程度の使用量：ミニPCがGPUワークステーションを上回る場合',
        content: '毎日利用する7B〜14Bモデル——チャット、Home Assistant連携、常時稼働のOllama——では、RyzenミニPCはディスクリートGPU搭載システムより消費電力と設置面積が小さいことが多いです。24/7のOllamaサーバーとしての検討は[Beelink SER8レビュー](/ja/smart-home/beelink-ser8-local-ai-review)（仕様に基づく推定で、PromptQuorumのベンチマークではありません）を、現行ラインナップは[ローカルLLM向けベストミニPCガイド](/ja/local-llms/best-mini-pcs-local-llm)と[ローカルLLM向けベストAMDミニPC](/ja/local-llms/best-amd-mini-pc-local-llm-2026)（[Minisforum UM890 Pro](/ja/smart-home/minisforum-um890-pro-local-ai-review)、[GMKtec G3 Plus](/ja/smart-home/gmktec-g3-plus-local-ai-review)を含む）をご覧ください。',
      },
      gpuPath: {
        title: 'パス3 — 本格的なローカルAI：GPUワークステーション',
        content: '30B以上のモデル、ファインチューニング、高速なマルチユーザー推論が必要になったら、ディスクリートGPUワークステーションが適切な階層です。重要な指標は生のベンチマーク速度ではなくドル当たりVRAM——VRAMがそもそも読み込めるモデルサイズを決めます。[ローカルLLMワークステーション構築ガイド](/ja/local-llms/local-llm-workstation-build)と[PromptQuorumのGPUワークステーション構築ガイド](/ja/power-local-llm/best-workstation-build-local-ai-2026)をご覧ください。',
      },
      whatToBuy: {
        title: '「何を買うべきか」価格帯別',
        content: '**500ドル未満** — 専用AIハードウェアは購入しないでください。手持ちの機材を使うか、たまの用途にはクラウドGPUをレンタルしてください。\n\n**500〜1,000ドル** — 32GB以上のRAMを積んだRyzenミニPC。[ローカルLLM向けベストAMDミニPC](/ja/local-llms/best-amd-mini-pc-local-llm-2026)と[Beelink SER8レビュー](/ja/smart-home/beelink-ser8-local-ai-review)を参照。\n\n**1,000〜1,800ドル** — より強力なミニPC。[ベストミニPCガイド](/ja/local-llms/best-mini-pcs-local-llm)と、エントリーGPUの参考として[500ドル未満ベストGPUガイド](/ja/local-llms/best-gpu-for-llm-inference-under-500-2026)を参照。\n\n**1,800〜2,500ドル** — 中古RTX 3090構成（予算帯の例。カード単体は[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)で1,500〜1,725ドルと掲載、売却済み出品、2026-11-23時点のデータ）。この予算帯で残りのシステムに回せるのは約75〜1,000ドルのため、下限では新品一式を組めない可能性があります。[ローカルLLMワークステーション構築ガイド](/ja/local-llms/local-llm-workstation-build)を参照。\n\n**3,000〜4,500ドル** — RTX 4090ワークステーション（予算帯の例。[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)によるカード単体価格は、中古の成約が2,575〜3,010ドル（2026年10月）、新品が2,000〜3,000ドル（日付の記載なし）。残りのシステム費用は別途）、または大容量の統合メモリを持つMac。[ワークステーション構築ガイド](/ja/local-llms/local-llm-workstation-build)と[Apple Silicon ローカルLLMガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)を参照。\n\n**5,000ドル以上** — 48GB以上のVRAM、マルチGPU、ワークステーション級の構成（中古RTX 3090を2枚だけでもInsiderLLMの売却済み出品範囲で約3,000〜3,450ドル。RTX PRO 6000 Blackwell 96GBは[TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html)によると2026-08-13時点で約16,000ドルで掲載）。先に稼働率を計算してください。この階層は継続的な高負荷利用でのみ元が取れます。[PromptQuorumのGPUワークステーション構築ガイド](/ja/power-local-llm/best-workstation-build-local-ai-2026)を参照。\n\nまだ購入する段階ではない場合は、代わりにレンタルという選択肢があります。[クラウドGPUプロバイダーを比較](/ja/power-local-llm/best-cloud-gpu-providers)したり、[RunPodレビュー](/ja/power-local-llm/runpod-review)、[Vast.aiレビュー](/ja/power-local-llm/vast-ai-review)、[Clore.aiレビュー](/ja/power-local-llm/clore-ai-review)を読んだり、[GPUサーバーホスティング事業者](/ja/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)を確認したりできます。',
      },
      hardwarePicks: {
        title: 'カテゴリ別ハードウェアのおすすめ',
        content: '- **予算重視：** [GMKtec G3 Plus](/ja/smart-home/gmktec-g3-plus-local-ai-review) — 7Bクラス向けエントリーミニPC\n- **ミドルレンジ：** [Beelink SER8](/ja/smart-home/beelink-ser8-local-ai-review) — 7B〜14B、Home Assistant、24/7 Ollamaサーバー。Ryzen代替として[Minisforum UM890 Pro](/ja/smart-home/minisforum-um890-pro-local-ai-review)\n- **GPUコスパ：** RTX 3090（中古カードは[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)で1,500〜1,725ドルと掲載、2026-11-23時点のデータ）— RTX 4090よりカード価格が低い24GB VRAM\n- **GPU性能：** RTX 4090（新品2,000〜3,000ドル（日付なし）、中古の成約は2,575〜3,010ドル（2026年10月）、InsiderLLMによる米国市場価格）— RTX 3090より高速だが高価。[ワークステーション構築ガイド](/ja/local-llms/local-llm-workstation-build)を参照\n- **Appleという選択肢：** 大容量の統合メモリを持つMacで、70B以上のモデルを低消費電力で — [Apple Silicon ローカルLLMガイド](/ja/local-llms/apple-silicon-local-llm-guide-2026)を参照\n\n上記のRTX 3090/4090とAppleのリンクは製品・編集上の参照であり、PromptQuorumにはアフィリエイトプログラムはなく、ハードウェア購入による手数料も受け取っていません。',
      },
      dontBuy: {
        title: 'ローカルAIハードウェアを購入すべきでない場合',
        content: '- **たまの利用**（月10時間程度以下）——ハードウェアはほとんどの時間アイドル状態になる\n- **利用が大きく変動する**——ある月は多忙、ある月はゼロ\n- **プロジェクトごとに異なるGPUが必要**——クラウドなら24GBと80GBを即座に切り替え可能\n- **ハードウェアの保守をしたくない**——ドライバー、冷却、アップグレード、故障はすべて自己責任\n- **たまにしか超大型モデルが不要**——H100を1週間借りる方が購入より得',
      },
      whenLocalWins: {
        title: 'ローカルAIが有利なとき',
        content: '- **毎日の予測可能な利用** — 時間はすぐに積み上がります。上の利用時間別の表を参照\n- **コストの予測しやすさ** — 固定のハードウェア費用は、変動するクラウド請求より予算を組みやすい\n- **機密データやオフライン要件** — プロンプトは事業者のサーバーではなく自分のマシンで処理されます。モデルのダウンロードや更新確認ではネットワークを使います\n- **自分で動かすモデルにはリクエスト単位の料金がない** — ローカルモデルは自分のハードウェアを使い、Ollamaの別サービスであるクラウドにはプランごとのセッション上限と週間上限があります（[Ollamaの料金](https://ollama.com/pricing)）\n- **複数年の利用期間** — ハードウェアを十分に稼働させ続けられる場合',
      },
      electricity: {
        title: '国別の電気料金',
        content: '450Wのシステムを月240時間（1日8時間）使うと108kWhを消費します。下の例の料金では、月約18ドル（米国）から約40ドル（ドイツ）です。これらの料金は計算機のプリセットに合わせた例の値であり、出典付きの平均ではありません。自分の契約料金を使ってください。',
        columns: ['国', '例の料金', '450W、月240時間'],
        rows: [
          { '国': '米国', '例の料金': '0.17ドル/kWh', '450W、月240時間': '18ドル/月' },
          { '国': 'ドイツ', '例の料金': '0.37ドル/kWh', '450W、月240時間': '40ドル/月' },
          { '国': '英国', '例の料金': '0.33ドル/kWh', '450W、月240時間': '36ドル/月' },
          { '国': 'フランス', '例の料金': '0.22ドル/kWh', '450W、月240時間': '24ドル/月' },
        ],
      },
      cloudProviders: {
        title: 'クラウドGPUレンタルの比較',
        content: 'RTX 4090の定価で、2026年11月22日に確認しました。Vast.aiの値は公開オファーAPIの単一GPUオファーで、分単位で変動します。',
        columns: ['プロバイダー', 'RTX 4090', '課金単位', '備考'],
        rows: [
          { 'プロバイダー': 'RunPod', 'RTX 4090': '0.34〜0.89ドル/時（Community〜Secure）', '課金単位': '秒単位', '備考': '一般向けとデータセンター用GPUを同じ一覧で提供' },
          { 'プロバイダー': 'Vast.ai', 'RTX 4090': '中断可能0.26〜0.60ドル/時、オンデマンド0.38〜2.34ドル/時', '課金単位': '秒単位', '備考': 'マーケットプレイス。ホストの品質はオファーごとに異なる' },
          { 'プロバイダー': 'Lambda', 'RTX 4090': '掲載なし', '課金単位': '分単位', '備考': 'H100 3.79〜4.89ドル/時、A100 40GB 1.99ドル/時' },
        ],
      },
      finalVerdict: {
        title: '最終結論：万能の勝者はいない',
        content: 'この記事の使用時間の目安は指針であり、厳密な法則ではありません。実際の損益分岐点はクラウド料金、ハードウェア価格、電気料金、売却価値によって決まります——上の計算機が、固定の閾値ではなく、あなたの入力に対する実際の答えを算出します。',
        decisionBlock: {
          title: '判断基準',
          localIf: [
            '利用時間が計算した損益分岐を超える（常時稼働など）',
            '複数年にわたるコストの予測可能性が必要',
            'データプライバシーやオフライン要件が必須',
            'ハードウェアをアイドルにせず十分に稼働させられる',
          ],
          cloudIf: [
            '月100時間未満のLLM利用',
            'ワークロードが断続的・実験的',
            '所有には高価すぎるGPU階層が必要（H100、A100 80GB）',
            '保守や初期投資を望まない',
          ],
          quick: [
            '実際の数値で上の計算機を使う',
            '月100時間未満 → クラウドをレンタル',
            '月500時間以上または常時稼働 → ローカルが得になりやすい',
            '月100〜500時間 → ハードウェア価格と電気料金が決め手',
          ],
        },
      },
      finalCta: {
        title: '計算結果に基づく次のステップ',
        content: '- **少ない使用量（月100時間未満）：** [現在のクラウドGPU価格を比較](/ja/local-llms/cloud-gpu-rental-comparison-2026)\n- **小型モデル、毎日利用：** [ローカルLLM向けベストミニPC](/ja/local-llms/best-mini-pcs-local-llm)\n- **7B〜14B、24/7サーバー：** [Beelink SER8レビュー](/ja/smart-home/beelink-ser8-local-ai-review)または[ベストAMDミニPC](/ja/local-llms/best-amd-mini-pc-local-llm-2026)\n- **30B以上のモデル、ローカル高負荷利用：** [ワークステーション構築ガイド](/ja/local-llms/local-llm-workstation-build)\n- **70Bクラス、常時稼働：** [PromptQuorumのGPUワークステーション構築ガイド](/ja/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'ローカルAIは常にクラウドより安いのですか？',
            a: 'いいえ。ローカルのハードウェアは、ハードウェア価格・電気料金・クラウド料金で決まる利用量のしきい値を超えて初めて安くなります。このページの例（RTX 4090システム3,300ドル、売却価値なし、36ヶ月利用）では、しきい値は0.89ドル/時に対して月約113時間、0.34ドル/時に対して月約350時間です。ご自身のしきい値未満ならクラウドレンタルの方が安くなります。',
          },
          {
            q: '何時間使えばローカルハードウェアを買う意味がありますか？',
            a: '例のRTX 4090システム（3,300ドル）の損益分岐は、RunPod Secure Cloud（0.89ドル/時）に対して約4,060時間（月240時間で17ヶ月）、Community Cloud（0.34ドル/時）に対して約12,520時間（52ヶ月）です。売却価値1,000ドルを見込むと、約2,830時間と約8,730時間に短縮されます。ハードウェア価格・消費電力・電気料金は例の値なので、上の計算機に自分の数値を入れてください。',
          },
          {
            q: 'ローカルAIのコスト見積もりに電気代は含まれていますか？',
            a: '含めるべきですが、簡単な比較では抜けていることが多いです。450Wのシステムを1日8時間使うと、例の0.17ドル/kWhで月約18ドル、0.37ドル/kWhで月約40ドルが加わります。上の計算機では自分の料金を入力できます。',
          },
          {
            q: 'ローカルLLMの運用費用はクラウドと比べてどうですか？',
            a: '計算例では、RunPodでRTX 4090を240時間借りると、0.34ドル/時で月約82ドル、0.89ドル/時で月約214ドルで、初期費用はかかりません。ローカルシステムは初期費用3,300ドルに加えて電気代が月約18ドルです。どちらが安いかは使い続ける期間次第です。上の損益分岐の表を参照してください。',
          },
          {
            q: 'AIのサブスクリプションは、GPUのレンタルや購入より安いですか？',
            a: 'サブスクリプションは事業者の利用上限の範囲で月額固定、レンタルGPUは時間課金、購入したGPUは初期費用がかかります。購入とサブスクの比較は[GPU vs ChatGPT Plus 2026](/ja/local-llms/gpu-vs-ai-subscription-roi)と[ローカルLLM vs ChatGPT Plus](/ja/local-llms/local-llms-vs-chatgpt-plus)を参照してください。',
          },
          {
            q: 'MacはローカルLLMに向いていますか？',
            a: '大容量の統合メモリを持つMacは、大きなモデル（70B級）を低消費電力で動かせるため、特に電気料金が高い国では所有コストの面で有利になることがあります。詳しくは上のApple Siliconガイドを参照してください。',
          },
          {
            q: '24GBのVRAMはローカルLLMに十分ですか？',
            a: '24GB（RTX 3090またはRTX 4090）なら、4ビット量子化で約30〜34Bパラメータまでのモデルを動かせ、個人利用の大半をカバーします。70B級のモデルには約48GBが必要で、デュアルGPU構成や大容量統合メモリのMacで実現できます。',
          },
          {
            q: 'RTX 4090を買うべきですか、それともクラウドGPUを借りるべきですか？',
            a: '数年にわたりご自身の損益分岐を超える継続利用が見込め、ハードウェアを稼働させ続けられるなら購入してください。売却価値なしの36ヶ月の例では、0.89ドル/時に対して月約113時間、0.34ドル/時に対して月約350時間が目安です。利用がたまにしかない、断続的、またはまだワークロードを検証中ならレンタルしてください。レンタルならRTX 4090の初期費用（米国市場の新品2,000〜3,000ドル、InsiderLLM、日付の記載なし、2026年11月27日確認）を完全に避けられます。',
          },
          {
            q: 'ローカルLLMを動かす最も安い方法は何ですか？',
            a: '初期費用を最も抑えるなら、小型のミニPCが通常は最も安価な専用ローカル構成です（軽い7B利用ならN150クラスで500ドル未満、7B〜14Bモデルなら例の価格帯500〜1,000ドルのRyzenクラス）。利用量が少ない場合は、ハードウェアを買わないクラウドGPUレンタルの方が安くなります。',
          },
          {
            q: 'AIをローカルで動かせば、データはパソコンの外に出ませんか？',
            a: 'Ollamaなどでローカル推論を行う場合、プロンプトはクラウド事業者ではなく自分のハードウェア上のモデルで処理されます。Ollamaは、ローカルモデルだけを使いクラウド機能を無効にできると説明しています。モデルのダウンロード、更新確認、マシン上の他のソフトウェアはネットワークを使うことがあります。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: '関連記事',
        items: [
          '[ローカルLLM vs クラウドGPUコスト比較](/ja/local-llms/local-llm-vs-cloud-gpu-cost) -- 損益分岐時間とトークン単価',
          '[クラウドGPUレンタル比較2026](/ja/local-llms/cloud-gpu-rental-comparison-2026) -- 時間単価、課金、リージョン',
          '[ローカルLLMワークステーション構築ガイド](/ja/local-llms/local-llm-workstation-build) -- ローカルGPUシステムの部品リスト',
          '[$500未満のローカルLLM推論向けベストGPU（2026）](/ja/local-llms/best-gpu-for-llm-inference-under-500-2026) -- エントリーGPUの選択肢',
          '[GPU vs AIサブスクリプション ROI](/ja/local-llms/gpu-vs-ai-subscription-roi) -- 購入かサブスクか',
          '[ローカルLLM向けベストミニPC](/ja/local-llms/best-mini-pcs-local-llm) -- 24/7サーバー向けの省電力な選択肢',
          '[Apple Siliconローカルllmガイド2026](/ja/local-llms/apple-silicon-local-llm-guide-2026) -- 統合メモリのMac',
          '購入ではなくレンタル：[クラウドGPUプロバイダーを比較](/ja/power-local-llm/best-cloud-gpu-providers)、[RunPodレビュー](/ja/power-local-llm/runpod-review)、[Vast.aiレビュー](/ja/power-local-llm/vast-ai-review)、[Clore.aiレビュー](/ja/power-local-llm/clore-ai-review)、[GPUサーバーホスティング事業者](/ja/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[RunPodの料金](https://www.runpod.io/pricing)（2026年11月22日確認）',
          '[Vast.aiの料金](https://vast.ai/pricing)と公開オファーAPI（RTX 4090の単一GPUオファー）（2026年11月22日確認）',
          '[Lambdaの料金](https://lambda.com/pricing)（2026年11月22日確認）',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、RTX 4090の価格（中古は2026年10月の成約、新品は日付なし）（2026年11月27日確認）',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)、中古RTX 3090（2026年11月13〜23日のeBay US成約225件）（2026年11月27日確認）',
          '[Ollamaの料金](https://ollama.com/pricing)と[Ollamaクラウドのドキュメント](https://docs.ollama.com/cloud)（2026年11月22日確認）',
        ],
      },
    },
  },
  es: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-es.webp',
    title: 'IA Local vs IA en la Nube: Calculadora de Costos (Comprar vs Rentar) 2026',
    seoTitle: 'IA local vs nube: calculadora de costos, comprar o rentar',
    metaDescription: '¿Comprar una GPU local o alquilar una en la nube? Ejemplo de punto de equilibrio, precios de RunPod y Vast.ai y una calculadora para tus propias cifras.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Hardware local o GPU en la nube alquilada: lo más barato depende sobre todo de tus horas al mes. Introduce tus propios números en la calculadora de abajo.**',
    quickAnswerTop: {
      question: '¿Es más barato construir un servidor LLM local o alquilar GPU en el cloud?',
      answer: 'Depende del volumen de uso, no es una regla fija. Como regla práctica, por debajo de 100 horas/mes el alquiler de GPU en la nube (RunPod, Vast.ai) normalmente es más barato porque no hay costo inicial. Por encima de unas 500 horas/mes o en uso continuo, poseer hardware puede ganar una vez que se incluyen electricidad y valor de reventa. Usa la calculadora de abajo con tus propias horas, precio de hardware y tarifa eléctrica para un punto de equilibrio exacto.',
      bullets: [
        'Menos de 20 hr/mes: alquilar — lo local difícilmente se amortiza',
        '20–100 hr/mes: normalmente alquilar',
        '100–250 hr/mes: comparar con cuidado — precio del hardware y tarifa eléctrica deciden',
        '250–500 hr/mes: el hardware local empieza a ser atractivo',
        '500+ hr/mes o continuo: lo local suele ganar en costo total',
        'TCO completo = precio del hardware + electricidad − reventa, no solo precio ÷ tarifa cloud',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'El punto de equilibrio depende de tus horas. En el ejemplo de esta página (sistema RTX 4090 de 3.300 $, sin reventa, 36 meses), lo local compensa desde unas 113 horas al mes frente a 0,89 $/h y unas 350 frente a 0,34 $/h. Haz tus cuentas en la calculadora.',
      },
      {
        type: 'plain-terms',
        text: 'Esta página tiene una calculadora: introduce tus horas de uso mensuales, tu tarifa de GPU en la nube, el precio de tu hardware local, tu tarifa eléctrica y cuánto tiempo planeas usar el hardware — te dice si alquilar o comprar es más barato para ti.',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090 (Amazon)', url: 'https://www.amazon.es/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'La pregunta clave son las horas al mes, no una regla fija',
          'RunPod lista una RTX 4090 a 0,34 $/h (Community) y 0,89 $/h (Secure); las ofertas interrumpibles de Vast.ai iban de 0,26 a 0,60 $/h (leídas el 22 de noviembre de 2026)',
          'Valores de ejemplo: sistema RTX 4090 local de 3.300 $, 450 W y 0,17 $/kWh, unos 0,08 $/h de electricidad — sustitúyelos por los tuyos',
          'Punto de equilibrio en el ejemplo: unas 4.060 horas (17 meses a 240 h/mes) frente a 0,89 $/h y unas 12.520 horas (52 meses) frente a 0,34 $/h',
          'Con 1.000 $ de valor de reventa, el mismo ejemplo se amortiza tras unas 2.830 y 8.730 horas',
          'La electricidad de un sistema de 450 W cuesta unos 18 $/mes a 0,17 $/kWh y 240 h/mes',
          'La nube suele ser más barata en uso esporádico, ocasional o experimental por debajo de unas 100 h/mes',
          'Lo local puede convenir en inferencia diaria sostenida, datos sensibles o 500+ h/mes, si el hardware se mantiene ocupado',
        ],
      },
      usageTiers: {
        title: 'Respuesta rápida: ¿qué opción se ajusta a tu uso?',
        content: 'Los tramos de horas son reglas prácticas editoriales, no una regla estricta — el precio del hardware, tu tarifa cloud, tu tarifa eléctrica y el valor de reventa desplazan el punto de equilibrio real. La calculadora de abajo da la respuesta exacta para tus números.',
        columns: ['Horas/mes', 'Recomendación'],
        rows: [
          { 'Horas/mes': 'Menos de 20 hr', Recomendación: 'Alquilar — lo local difícilmente se amortiza' },
          { 'Horas/mes': '20–100 hr', Recomendación: 'Normalmente alquilar' },
          { 'Horas/mes': '100–250 hr', Recomendación: 'Comparar con cuidado según el hardware' },
          { 'Horas/mes': '250–500 hr', Recomendación: 'El hardware local se vuelve atractivo' },
          { 'Horas/mes': '500+ hr', Recomendación: 'Lo local suele ganar en costo total' },
          { 'Horas/mes': 'Continuo 24/7', Recomendación: 'Lo local suele compensar: calcúlalo' },
        ],
      },
      costCalculatorTool: {
        title: 'Calculadora de costos interactiva: local vs nube',
        content: 'Introduce tus horas de uso mensuales, tarifa de GPU en la nube, precio del hardware local, tarifa eléctrica, valor de reventa esperado y período de uso. La calculadora de abajo calcula en vivo tu costo cloud mensual, tu costo operativo local, tu costo total de propiedad y tu punto de equilibrio. Todos los valores son estimaciones calculadas a partir de tus datos y precios de referencia investigados, no mediciones realizadas por PromptQuorum.',
        component: 'CostCalculator',
      },
      workedExample: {
        title: 'Ejemplo práctico: punto de equilibrio de un sistema RTX 4090',
        content: '**Horas de equilibrio = (precio del hardware − valor de reventa) ÷ (tarifa en la nube por hora − electricidad por hora).** Electricidad por hora = vatios ÷ 1.000 × precio por kWh.\n\nValores de ejemplo, para sustituir por los tuyos: 3.300 $ por un sistema RTX 4090 ([InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) indica, sin fecha, 2.000–3.000 $ para la tarjeta nueva sola en el mercado de EE. UU., consultado el 27 de noviembre de 2026), 450 W a 0,17 $/kWh (0,45 × 0,17 = 0,0765 $/h) y 240 horas de uso al mes. Las tarifas en la nube son precios de lista de RunPod para una RTX 4090, leídos el 22 de noviembre de 2026.\n\nCon 240 horas al mes, la factura en la nube es de unos 214 $ (Secure) o 82 $ (Community), frente a unos 18 $ de electricidad del sistema local. El resultado ignora reparaciones, tu tiempo y los cambios de precio en ambos lados; la calculadora de arriba aplica la misma fórmula con tus números.',
        columns: ['Tarifa en la nube', 'Punto de equilibrio', 'A 240 h/mes', 'Con 1.000 $ de reventa'],
        rows: [
          { 'Tarifa en la nube': '0,89 $/h (RunPod Secure Cloud)', 'Punto de equilibrio': '≈4.060 horas', 'A 240 h/mes': '≈17 meses', 'Con 1.000 $ de reventa': '≈2.830 h (≈12 meses)' },
          { 'Tarifa en la nube': '0,34 $/h (RunPod Community Cloud)', 'Punto de equilibrio': '≈12.520 horas', 'A 240 h/mes': '≈52 meses', 'Con 1.000 $ de reventa': '≈8.730 h (≈36 meses)' },
        ],
      },
      hardwareDecision: {
        title: 'Tabla de decisión de hardware',
        content: 'Relaciona el tamaño de modelo objetivo y tu patrón de uso con un nivel de hardware antes de calcular una configuración concreta. Los rangos de precio de los mini PC y los Mac son precios de sistema de ejemplo en dólares estadounidenses, no cotizaciones. Las filas de GPU muestran precios del mercado de EE. UU. solo de la tarjeta, no de un sistema completo, consultados el 27 de noviembre de 2026. RTX 3090 usada: ventas cerradas en eBay US del 13 al 23 de noviembre de 2026, 225 ventas, sin envío ([guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). RTX 4090 usada: 216 ventas cerradas en eBay, octubre de 2026; el precio nuevo de la RTX 4090 no tiene fecha ([página de precios de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)). La fila de 48 GB son dos RTX 3090 usadas (2 × 1.500–1.725 $ = 3.000–3.450 $). El resto del sistema se suma. Los precios en tu país pueden variar según impuestos locales.',
        columns: ['Nivel', 'VRAM / RAM', 'Mejor para', 'Rango de precio'],
        rows: [
          { Nivel: 'Mini PC N150', 'VRAM / RAM': '16GB RAM', 'Mejor para': 'Chat ligero, hasta 7B', 'Rango de precio': 'Menos de 500 $' },
          { Nivel: 'Mini PC Ryzen', 'VRAM / RAM': '32–64GB RAM', 'Mejor para': '7B–14B diario, servidor 24/7', 'Rango de precio': '500–1.000 $' },
          { Nivel: 'RTX 3090 (usada)', 'VRAM / RAM': '24GB VRAM', 'Mejor para': 'Hasta 30B Q4, la tarjeta de 24 GB más barata aquí', 'Rango de precio': '1.500–1.725 $ (solo tarjeta, vendida en EE. UU., 13–23/11/26)' },
          { Nivel: 'RTX 4090', 'VRAM / RAM': '24GB VRAM', 'Mejor para': 'Hasta 34B Q4, más rápida que la RTX 3090', 'Rango de precio': '2.575–3.010 $ usada, 2.000–3.000 $ nueva (solo tarjeta)' },
          { Nivel: 'Setup GPU 48GB (2× RTX 3090 usadas)', 'VRAM / RAM': '48GB VRAM', 'Mejor para': 'Hasta 70B Q4, desarrollo', 'Rango de precio': 'unos 3.000–3.450 $ (solo 2 tarjetas)' },
          { Nivel: 'Mac (memoria unificada)', 'VRAM / RAM': '48–128GB unificada', 'Mejor para': 'Clase 70B vía MLX (64 GB+), bajo consumo', 'Rango de precio': '2.000–4.000 $+' },
        ],
      },
      rentPath: {
        title: 'Camino 1 — Uso bajo: alquilar GPU en la nube',
        content: 'Alquilar es lo correcto para experimentación, fine-tuning ocasional, cargas variables o probar antes de comprometerte con hardware. Solo pagas las horas usadas, sin mantenimiento y con acceso instantáneo a niveles de GPU (H100, A100 80GB) que costarían miles de dólares comprar.\n\nCompara precios actuales de GPU en la nube: [precios de RunPod](https://www.runpod.io/pricing) y [precios de Vast.ai](https://vast.ai/pricing) son enlaces editoriales de referencia, no enlaces de afiliado — PromptQuorum no tiene relación de comisión con ninguno de los dos proveedores.',
      },
      miniPcPath: {
        title: 'Camino 2 — Uso medio: un mini PC puede superar a una workstation GPU',
        content: 'Para modelos 7B–14B de uso diario — chat, automatizaciones de Home Assistant, Ollama 24/7 — un mini PC Ryzen suele consumir menos y ocupar menos que un sistema con GPU discreta. La [reseña del Beelink SER8](/es/smart-home/beelink-ser8-local-ai-review) lo analiza como servidor Ollama 24/7 (estimaciones basadas en especificaciones, no un benchmark de PromptQuorum); consulta también la [guía de los mejores mini PCs para LLM local](/es/local-llms/best-mini-pcs-local-llm) y el [mejor mini PC AMD para LLM local](/es/local-llms/best-amd-mini-pc-local-llm-2026), incluyendo el [Minisforum UM890 Pro](/es/smart-home/minisforum-um890-pro-local-ai-review) y el [GMKtec G3 Plus](/es/smart-home/gmktec-g3-plus-local-ai-review).',
      },
      gpuPath: {
        title: 'Camino 3 — IA local intensiva: workstation GPU',
        content: 'Cuando necesitas modelos de 30B+, fine-tuning o inferencia multiusuario rápida, una workstation GPU discreta es el nivel adecuado. La métrica que importa es VRAM por dólar, no la velocidad de benchmark bruta — el VRAM determina qué tamaños de modelo se pueden cargar. Ve la [guía de construcción de workstation LLM local](/es/local-llms/local-llm-workstation-build) y la [guía de construcción de workstation GPU de PromptQuorum](/es/power-local-llm/best-workstation-build-local-ai-2026).',
      },
      whatToBuy: {
        title: '"¿Qué debo comprar?" por rango de precio',
        content: '**Menos de 500 $** — No compres hardware de IA dedicado. Usa lo que ya tienes o alquila una GPU en la nube para necesidades ocasionales.\n\n**500–1.000 $** — Un mini PC Ryzen con 32 GB+ de RAM. Ve el [mejor mini PC AMD para LLM local](/es/local-llms/best-amd-mini-pc-local-llm-2026) y la [reseña del Beelink SER8](/es/smart-home/beelink-ser8-local-ai-review).\n\n**1.000–1.800 $** — Un mini PC más potente. Ve la [guía de los mejores mini PCs](/es/local-llms/best-mini-pcs-local-llm) y la [guía de mejor GPU bajo 500 $](/es/local-llms/best-gpu-for-llm-inference-under-500-2026) para el contexto de las GPU de entrada.\n\n**1.800–2.500 $** — Una configuración con RTX 3090 usada como banda de presupuesto de ejemplo: la tarjeta sola figuraba a 1.500–1.725 $ según [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (anuncios vendidos, datos con fecha 2026-11-23). Eso deja unos 75–1.000 $ de esta banda para el resto del sistema, así que el extremo inferior puede no alcanzar para un equipo nuevo completo. Ve la [guía de construcción de workstation](/es/local-llms/local-llm-workstation-build).\n\n**3.000–4.500 $** — Una workstation con RTX 4090 como banda de presupuesto de ejemplo (tarjeta sola según [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/): 2.575–3.010 $ en ventas de usadas, octubre de 2026, y 2.000–3.000 $ nueva sin fecha, más el resto del sistema) o un Mac con memoria unificada grande. Ve la [guía de construcción de workstation](/es/local-llms/local-llm-workstation-build) y la [guía de Apple Silicon](/es/local-llms/apple-silicon-local-llm-guide-2026).\n\n**5.000 $+** — 48 GB+ de VRAM, multi-GPU o clase workstation (dos RTX 3090 usadas solas suman unos 3.000–3.450 $ en el rango de anuncios vendidos de InsiderLLM; una RTX PRO 6000 Blackwell de 96 GB figuraba a unos 16.000 $ según [TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html) el 2026-08-13). Calcula primero tu utilización: este nivel solo se amortiza con uso intensivo sostenido. Ve la [guía de construcción de workstation GPU de PromptQuorum](/es/power-local-llm/best-workstation-build-local-ai-2026).\n\n¿Aún no estás listo para comprar? Puedes alquilar en su lugar: puedes [comparar proveedores de GPU en la nube](/es/power-local-llm/best-cloud-gpu-providers), leer la [reseña de RunPod](/es/power-local-llm/runpod-review), la [reseña de Vast.ai](/es/power-local-llm/vast-ai-review) o la [reseña de Clore.ai](/es/power-local-llm/clore-ai-review), o echar un vistazo a los [proveedores de alojamiento de servidores GPU](/es/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart).',
      },
      hardwarePicks: {
        title: 'Selecciones de hardware por categoría',
        content: '- **Económico:** [GMKtec G3 Plus](/es/smart-home/gmktec-g3-plus-local-ai-review) — mini PC de entrada para modelos 7B\n- **Gama media:** [Beelink SER8](/es/smart-home/beelink-ser8-local-ai-review) — 7B–14B, Home Assistant, servidor Ollama 24/7; [Minisforum UM890 Pro](/es/smart-home/minisforum-um890-pro-local-ai-review) como alternativa Ryzen\n- **GPU valor:** RTX 3090 (tarjeta usada a 1.500–1.725 $ según [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), datos con fecha 2026-11-23) — 24 GB de VRAM a un precio de tarjeta menor que la RTX 4090\n- **GPU rendimiento:** RTX 4090 (nueva 2.000–3.000 $ sin fecha; ventas de usadas 2.575–3.010 $, octubre de 2026; según InsiderLLM, mercado de EE. UU.) — más rápida que la RTX 3090, pero más cara, ve la [guía de construcción de workstation](/es/local-llms/local-llm-workstation-build)\n- **Opción Apple:** Mac con mucha memoria unificada para modelos 70B+ a bajo consumo — ve la [guía de Apple Silicon](/es/local-llms/apple-silicon-local-llm-guide-2026)\n\nLos enlaces de RTX 3090/4090 y Apple de arriba son enlaces de producto/editoriales — PromptQuorum no tiene programa de afiliados y no gana comisión en ninguna compra de hardware.',
      },
      dontBuy: {
        title: 'Cuándo NO deberías comprar hardware de IA local',
        content: '- **Uso ocasional** (~10 horas/mes o menos) — el hardware estará inactivo la mayor parte del tiempo\n- **Carga de trabajo muy variable** — algunos meses intensa, otros nula\n- **Necesitas GPUs distintas por proyecto** — el cloud permite cambiar al instante entre 24GB y 80GB\n- **No quieres mantenimiento de hardware** — drivers, refrigeración, actualizaciones y fallos son tu responsabilidad en local\n- **Solo necesitas ocasionalmente modelos muy grandes** — alquilar un H100 una semana supera comprar uno',
      },
      whenLocalWins: {
        title: 'Cuándo gana la IA local',
        content: '- **Uso diario y predecible** — las horas suman rápido, ve la tabla de uso de arriba\n- **Previsibilidad de costos** — un costo de hardware fijo es más fácil de presupuestar que facturas cloud variables\n- **Datos sensibles o requisito sin conexión** — los prompts se procesan en tu propio equipo en lugar de en los servidores de un proveedor; las descargas de modelos y las comprobaciones de actualizaciones siguen usando la red\n- **Sin tarifa por solicitud en los modelos que ejecutas tú** — los modelos locales usan tu propio hardware, mientras que el servicio cloud aparte de Ollama tiene límites de sesión y semanales según el plan ([precios de Ollama](https://ollama.com/pricing))\n- **Horizonte de uso plurianual** con hardware que puedas mantener bien utilizado',
      },
      electricity: {
        title: 'Costo de electricidad por país',
        content: 'Un sistema de 450 W usado 240 horas al mes (8 h/día) consume 108 kWh. Con las tarifas de ejemplo de abajo cuesta unos 18 $ al mes (EE. UU.) hasta unos 40 $ (Alemania). Las tarifas son valores de ejemplo que coinciden con los ajustes predefinidos de la calculadora, no promedios con fuente: usa tu propia tarifa.',
        columns: ['País', 'Tarifa de ejemplo', '450 W, 240 h/mes'],
        rows: [
          { 'País': 'Estados Unidos', 'Tarifa de ejemplo': '0,17 $/kWh', '450 W, 240 h/mes': '18 $/mes' },
          { 'País': 'Alemania', 'Tarifa de ejemplo': '0,37 $/kWh', '450 W, 240 h/mes': '40 $/mes' },
          { 'País': 'Reino Unido', 'Tarifa de ejemplo': '0,33 $/kWh', '450 W, 240 h/mes': '36 $/mes' },
          { 'País': 'Francia', 'Tarifa de ejemplo': '0,22 $/kWh', '450 W, 240 h/mes': '24 $/mes' },
        ],
      },
      cloudProviders: {
        title: 'Comparativa de alquiler de GPU en la nube',
        content: 'Precios de lista para una RTX 4090, leídos el 22 de noviembre de 2026. Las cifras de Vast.ai son ofertas de una sola GPU de su API pública de ofertas y cambian por minuto.',
        columns: ['Proveedor', 'RTX 4090', 'Facturación', 'Nota'],
        rows: [
          { 'Proveedor': 'RunPod', 'RTX 4090': '0,34–0,89 $/h (Community–Secure)', 'Facturación': 'por segundo', 'Nota': 'GPU de consumo y de centro de datos en una lista' },
          { 'Proveedor': 'Vast.ai', 'RTX 4090': '0,26–0,60 $/h interrumpible, 0,38–2,34 $/h bajo demanda', 'Facturación': 'por segundo', 'Nota': 'Marketplace; la calidad del host varía según la oferta' },
          { 'Proveedor': 'Lambda', 'RTX 4090': 'no listada', 'Facturación': 'por minuto', 'Nota': 'H100 3,79–4,89 $/h, A100 40 GB 1,99 $/h' },
        ],
      },
      finalVerdict: {
        title: 'Veredicto final: no hay un ganador universal',
        content: 'Las reglas prácticas de horas de uso en este artículo son orientativas, no leyes fijas. Tu punto de equilibrio real depende de tu tarifa cloud, tu precio de hardware, tu tarifa eléctrica y tu valor de reventa — la calculadora de arriba calcula la respuesta real para tus datos, no un umbral fijo.',
        decisionBlock: {
          title: 'Decide según',
          localIf: [
            'Tus horas superan tu punto de equilibrio calculado, por ejemplo en uso continuo',
            'Necesitas previsibilidad de costos a varios años',
            'La privacidad de datos o la capacidad sin conexión es un requisito',
            'Puedes mantener el hardware bien utilizado, no inactivo',
          ],
          cloudIf: [
            'Usas LLMs menos de 100 horas/mes',
            'Tu carga de trabajo es esporádica o experimental',
            'Necesitas niveles de GPU demasiado caros para poseer (H100, A100 80GB)',
            'No quieres mantenimiento ni costo de capital inicial',
          ],
          quick: [
            'Usa la calculadora de arriba con tus números reales',
            'Menos de 100 hr/mes → alquilar en la nube',
            '500+ hr/mes o continuo → lo local suele compensar',
            '100–500 hr/mes → precio del hardware y tarifa eléctrica deciden',
          ],
        },
      },
      finalCta: {
        title: 'Siguientes pasos según lo que calculaste',
        content: '- **Uso bajo (menos de 100 hr/mes):** [compara precios actuales de GPU en la nube](/es/local-llms/cloud-gpu-rental-comparison-2026)\n- **Modelos pequeños, uso diario:** [mejores mini PCs para LLM local](/es/local-llms/best-mini-pcs-local-llm)\n- **7B–14B, servidor 24/7:** [reseña del Beelink SER8](/es/smart-home/beelink-ser8-local-ai-review) o [mejor mini PC AMD](/es/local-llms/best-amd-mini-pc-local-llm-2026)\n- **Modelos 30B+, uso local intensivo:** [guía de construcción de workstation](/es/local-llms/local-llm-workstation-build)\n- **Clase 70B, uso continuo:** [guía de construcción de workstation GPU de PromptQuorum](/es/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿La IA local es siempre más barata que la nube?',
            a: 'No. El hardware local solo es más barato por encima de un umbral de uso que depende del precio del hardware, la tarifa eléctrica y la tarifa en la nube. En el ejemplo de esta página (sistema RTX 4090 de 3.300 $, sin reventa, 36 meses de uso) es de unas 113 horas al mes frente a 0,89 $/h y unas 350 frente a 0,34 $/h. Por debajo de tu propio umbral, alquilar en la nube es más barato.',
          },
          {
            q: '¿Cuántas horas hacen falta para que compense comprar hardware local?',
            a: 'Para el sistema de ejemplo con RTX 4090 de 3.300 $, el punto de equilibrio frente a RunPod Secure Cloud (0,89 $/h) es de unas 4.060 horas (17 meses a 240 h/mes); frente a Community Cloud (0,34 $/h), unas 12.520 horas (52 meses). Con 1.000 $ de reventa baja a unas 2.830 y 8.730 horas. Precio del hardware, potencia y electricidad son valores de ejemplo: usa la calculadora de arriba con los tuyos.',
          },
          {
            q: '¿La electricidad está incluida en las estimaciones de coste de la IA local?',
            a: 'Debería estarlo, y a menudo falta en comparaciones simples. Un sistema de 450 W usado 8 horas al día añade unos 18 $/mes con un valor de ejemplo de 0,17 $/kWh, o unos 40 $/mes a 0,37 $/kWh. La calculadora de arriba te permite introducir tu propia tarifa.',
          },
          {
            q: '¿Cuánto cuesta ejecutar un LLM local en comparación con la nube?',
            a: 'En el ejemplo práctico, alquilar una RTX 4090 en RunPod cuesta unos 82 $ al mes a 0,34 $/h o 214 $ a 0,89 $/h durante 240 horas, sin coste inicial. El sistema local cuesta 3.300 $ de entrada más unos 18 $ de electricidad al mes. Qué sale más barato depende de cuánto tiempo lo uses: consulta la tabla de punto de equilibrio de arriba.',
          },
          {
            q: '¿Una suscripción de IA es más barata que alquilar o comprar una GPU?',
            a: 'Una suscripción cobra una cuota mensual fija con los límites de uso del proveedor, una GPU alquilada se factura por hora y una GPU comprada cuesta dinero de entrada. Para las cuentas de comprar frente a suscribirse, consulta [GPU vs ChatGPT Plus 2026](/es/local-llms/gpu-vs-ai-subscription-roi) y [LLMs locales vs ChatGPT Plus](/es/local-llms/local-llms-vs-chatgpt-plus).',
          },
          {
            q: '¿Un Mac es bueno para LLMs locales?',
            a: 'Los Mac con mucha memoria unificada pueden ejecutar modelos grandes (clase 70B) con bajo consumo, lo que mejora su caso de coste de propiedad, sobre todo en países con electricidad cara. Consulta la guía de Apple Silicon enlazada arriba para más detalles.',
          },
          {
            q: '¿Bastan 24 GB de VRAM para LLMs locales?',
            a: '24 GB (RTX 3090 o RTX 4090) ejecutan modelos de hasta unos 30–34B parámetros con cuantización de 4 bits, lo que cubre la mayoría de casos de un solo usuario. Los modelos de clase 70B necesitan unos 48 GB, que se logran con configuraciones de doble GPU o Mac con mucha memoria unificada.',
          },
          {
            q: '¿Debo comprar una RTX 4090 o alquilar tiempo de GPU en la nube?',
            a: 'Compra si esperas durante varios años un uso sostenido por encima de tu propio punto de equilibrio y puedes mantener el hardware ocupado; en el ejemplo a 36 meses sin reventa son unas 113 horas al mes frente a 0,89 $/h y unas 350 frente a 0,34 $/h. Alquila si tu uso es ocasional o irregular, o si aún estás validando la carga de trabajo: alquilar evita por completo el coste inicial de una RTX 4090 (nueva a 2.000–3.000 $ en EE. UU. según InsiderLLM, sin fecha, consultado el 27 de noviembre de 2026).',
          },
          {
            q: '¿Cuál es la forma más barata de ejecutar un LLM local?',
            a: 'Para el menor coste inicial, un mini PC pequeño suele ser la configuración local dedicada más económica (clase N150 por menos de 500 $ para un uso ligero de 7B, o clase Ryzen en una gama de ejemplo de 500–1.000 $ para modelos de 7B–14B). Con poco volumen, alquilar GPU en la nube sin comprar hardware cuesta menos.',
          },
          {
            q: '¿Ejecutar IA en local significa que mis datos nunca salen de mi ordenador?',
            a: 'Con inferencia local mediante herramientas como Ollama, tus prompts los procesa un modelo en tu propio hardware en lugar de un proveedor en la nube. Ollama documenta que puedes usar solo modelos locales y desactivar sus funciones en la nube. Las descargas de modelos, las comprobaciones de actualizaciones y otro software del equipo pueden seguir usando la red.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: 'Lecturas relacionadas',
        items: [
          '[Comparación de costos LLM local vs GPU en la nube](/es/local-llms/local-llm-vs-cloud-gpu-cost) -- horas de equilibrio y costo por token',
          '[Comparación de alquiler de GPU en la nube 2026](/es/local-llms/cloud-gpu-rental-comparison-2026) -- precios por hora, facturación y regiones',
          '[Guía de construcción de workstation LLM local](/es/local-llms/local-llm-workstation-build) -- listas de piezas para un sistema GPU local',
          '[Mejor GPU para inferencia LLM local bajo $500 (2026)](/es/local-llms/best-gpu-for-llm-inference-under-500-2026) -- opciones de GPU de entrada',
          '[GPU vs suscripción IA ROI](/es/local-llms/gpu-vs-ai-subscription-roi) -- comprar o suscribirse',
          '[Mejores mini PCs para LLM local](/es/local-llms/best-mini-pcs-local-llm) -- opciones de bajo consumo para un servidor 24/7',
          '[Guía Apple Silicon para LLM local 2026](/es/local-llms/apple-silicon-local-llm-guide-2026) -- Mac con memoria unificada',
          'Alquilar en lugar de comprar: [comparar proveedores de GPU en la nube](/es/power-local-llm/best-cloud-gpu-providers), [reseña de RunPod](/es/power-local-llm/runpod-review), [reseña de Vast.ai](/es/power-local-llm/vast-ai-review), [reseña de Clore.ai](/es/power-local-llm/clore-ai-review) y [proveedores de alojamiento de servidores GPU](/es/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Precios de RunPod](https://www.runpod.io/pricing), leídos el 22 de noviembre de 2026',
          '[Precios de Vast.ai](https://vast.ai/pricing) y su API pública de ofertas (ofertas de RTX 4090 de una sola GPU), leídos el 22 de noviembre de 2026',
          '[Precios de Lambda](https://lambda.com/pricing), leídos el 22 de noviembre de 2026',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), precios de la RTX 4090 (usada: ventas, octubre de 2026; nueva: sin fecha), consultado el 27 de noviembre de 2026',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/), RTX 3090 usada según 225 ventas en eBay US, 13–23 de noviembre de 2026, consultado el 27 de noviembre de 2026',
          '[Precios de Ollama](https://ollama.com/pricing) y [documentación cloud de Ollama](https://docs.ollama.com/cloud), leídos el 22 de noviembre de 2026',
        ],
      },
    },
  },
  ar: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-ar.webp',
    title: 'الذكاء الاصطناعي المحلي مقابل السحابي: حاسبة التكلفة (شراء مقابل استئجار) 2026',
    seoTitle: 'حاسبة تكلفة الذكاء الاصطناعي: محلي مقابل سحابي 2026',
    metaDescription: 'هل تشتري GPU محلية أم تستأجر GPU سحابية؟ مثال حساب نقطة التعادل، وأسعار RunPod وVast.ai، وحاسبة لأرقامك الخاصة.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**عتاد محلي أم وحدة GPU سحابية مستأجرة: الأرخص منهما يعتمد غالباً على عدد ساعات استخدامك شهرياً. أدخل أرقامك الخاصة في الحاسبة أدناه لمعرفة نقطة التعادل لديك.**',
    quickAnswerTop: {
      question: 'هل بناء خادم LLM محلي أرخص أم استئجار GPU في السحابة؟',
      answer: 'يعتمد ذلك على حجم الاستخدام لا على قاعدة ثابتة. وكقاعدة تقريبية: دون 100 ساعة/شهر، يكون استئجار GPU السحابي (RunPod، Vast.ai) أرخص عادةً لعدم وجود تكلفة أولية. وفوق نحو 500 ساعة/شهر أو في التشغيل المستمر، قد يتفوق امتلاك الأجهزة بعد احتساب الكهرباء وقيمة إعادة البيع. استخدم الحاسبة أدناه بساعاتك الخاصة وسعر الأجهزة وتعرفة الكهرباء لنقطة تعادل دقيقة.',
      bullets: [
        'دون 20 ساعة/شهر: استأجر — يصعب أن يسترد الخيار المحلي تكلفته',
        '20–100 ساعة/شهر: الاستئجار عادةً هو الأفضل',
        '100–250 ساعة/شهر: قارن بعناية — سعر الأجهزة وتعرفة الكهرباء هما الحاسمان',
        '250–500 ساعة/شهر: تصبح الأجهزة المحلية جذابة',
        '500+ ساعة/شهر أو تشغيل مستمر: يتفوق المحلي عادةً في التكلفة الإجمالية',
        'التكلفة الإجمالية الكاملة = سعر الأجهزة + الكهرباء − إعادة البيع، وليس فقط السعر ÷ تعرفة السحابة',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'تعتمد نقطة التعادل على ساعات استخدامك. في مثال هذه الصفحة (نظام RTX 4090 بسعر 3,300 دولار، دون إعادة بيع، على 36 شهراً) يصبح الخيار المحلي مجدياً من نحو 113 ساعة شهرياً مقابل 0.89 دولار/ساعة ومن نحو 350 ساعة مقابل 0.34 دولار/ساعة. أدخل أرقامك في الحاسبة.',
      },
      {
        type: 'plain-terms',
        text: 'تحتوي هذه الصفحة على حاسبة: أدخل ساعات استخدامك الشهرية، وتعرفة GPU السحابي، وسعر أجهزتك المحلية، وتعرفة الكهرباء، ومدة الاستخدام المخطط لها — فتُظهر لك ما إذا كان استئجار GPU سحابي أم شراء أجهزة محلية أرخص لك تحديدًا.',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090 (Amazon)', url: 'https://www.amazon.com/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'السؤال الجوهري هو ساعات الاستخدام شهرياً لا قاعدة ثابتة',
          'تعرض RunPod بطاقة RTX 4090 بسعر 0.34 دولار/ساعة (Community) و0.89 دولار/ساعة (Secure)، وعروض Vast.ai القابلة للمقاطعة بين 0.26 و0.60 دولار/ساعة (قُرئت في 22 نوفمبر 2026)',
          'قيم المثال: نظام RTX 4090 محلي بسعر 3,300 دولار، و450 واط، و0.17 دولار/كيلوواط ساعة، أي نحو 0.08 دولار/ساعة كهرباء — استبدلها بقيمك',
          'التعادل في هذا المثال: نحو 4,060 ساعة (17 شهراً عند 240 ساعة/شهر) مقابل 0.89 دولار/ساعة، ونحو 12,520 ساعة (52 شهراً) مقابل 0.34 دولار/ساعة',
          'مع قيمة إعادة بيع 1,000 دولار يتعادل المثال نفسه بعد نحو 2,830 و8,730 ساعة',
          'تكلف كهرباء نظام 450 واط نحو 18 دولاراً شهرياً عند 0.17 دولار/كيلوواط ساعة و240 ساعة/شهر',
          'السحابة أرخص عادةً في الاستخدام المتقطع أو العرضي أو التجريبي دون نحو 100 ساعة/شهر',
          'قد يكون المحلي مناسباً للاستدلال اليومي المستمر والبيانات الحساسة وأكثر من 500 ساعة/شهر، إذا بقي العتاد مشغولاً',
        ],
      },
      usageTiers: {
        title: 'إجابة سريعة: ما الذي يناسب استخدامك؟',
        content: 'فئات الساعات قواعد تقريبية من تقدير التحرير لا قاعدة صارمة — سعر الأجهزة وتعرفة السحابة وتعرفة الكهرباء وقيمة إعادة البيع تُغيّر نقطة التعادل الفعلية. تمنحك الحاسبة أدناه الإجابة الدقيقة لأرقامك.',
        columns: ['ساعات/شهر', 'التوصية'],
        rows: [
          { 'ساعات/شهر': 'أقل من 20 ساعة', 'التوصية': 'استأجر — يصعب أن يسترد المحلي تكلفته' },
          { 'ساعات/شهر': '20–100 ساعة', 'التوصية': 'الاستئجار عادةً هو الأفضل' },
          { 'ساعات/شهر': '100–250 ساعة', 'التوصية': 'قارن بعناية حسب سعر الأجهزة' },
          { 'ساعات/شهر': '250–500 ساعة', 'التوصية': 'تصبح الأجهزة المحلية جذابة' },
          { 'ساعات/شهر': '500+ ساعة', 'التوصية': 'يتفوق المحلي عادةً بالتكلفة الإجمالية' },
          { 'ساعات/شهر': 'تشغيل مستمر 24/7', 'التوصية': 'المحلي مجدٍ غالباً: احسب أرقامك' },
        ],
      },
      costCalculatorTool: {
        title: 'حاسبة التكلفة التفاعلية: محلي مقابل سحابي',
        content: 'أدخل ساعات استخدامك الشهرية، وتعرفة GPU السحابي، وسعر الأجهزة المحلية، وتعرفة الكهرباء، وقيمة إعادة البيع المتوقعة، ومدة الامتلاك. تحسب الحاسبة أدناه حيًا تكلفة السحابة الشهرية، وتكلفة التشغيل المحلي، وإجمالي تكلفة الملكية المحلية، ونقطة التعادل. جميع الأرقام تقديرات محسوبة من مدخلاتك وأسعار مرجعية تم بحثها، وليست قياسات أجرتها PromptQuorum نفسها.',
        component: 'CostCalculator',
      },
      workedExample: {
        title: 'مثال عملي: نقطة التعادل لنظام RTX 4090',
        content: '**ساعات التعادل = (سعر العتاد − قيمة إعادة البيع) ÷ (سعر السحابة في الساعة − كهرباء الساعة).** كهرباء الساعة = الواط ÷ 1,000 × سعر الكيلوواط ساعة.\n\nقيم المثال، استبدلها بقيمك: 3,300 دولار لنظام RTX 4090 (يذكر [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) دون تاريخ 2,000–3,000 دولار للبطاقة الجديدة وحدها في السوق الأمريكية، اطُّلع عليه في 27 نوفمبر 2026)، و450 واط بسعر 0.17 دولار/كيلوواط ساعة (0.45 × 0.17 = 0.0765 دولار/ساعة)، و240 ساعة استخدام شهرياً. أسعار السحابة هي أسعار القائمة في RunPod لبطاقة RTX 4090، قُرئت في 22 نوفمبر 2026.\n\nعند 240 ساعة شهرياً تبلغ فاتورة السحابة نحو 214 دولاراً (Secure) أو 82 دولاراً (Community)، مقابل نحو 18 دولاراً كهرباء للنظام المحلي. تتجاهل النتيجة الإصلاحات ووقتك وتغيّر الأسعار من الجانبين؛ تطبّق الحاسبة أعلاه المعادلة نفسها على أرقامك.',
        columns: ['سعر السحابة', 'التعادل', 'عند 240 ساعة/شهر', 'مع إعادة بيع 1,000 دولار'],
        rows: [
          { 'سعر السحابة': '0.89 دولار/ساعة (RunPod Secure Cloud)', 'التعادل': '≈4,060 ساعة', 'عند 240 ساعة/شهر': '≈17 شهراً', 'مع إعادة بيع 1,000 دولار': '≈2,830 ساعة (≈12 شهراً)' },
          { 'سعر السحابة': '0.34 دولار/ساعة (RunPod Community Cloud)', 'التعادل': '≈12,520 ساعة', 'عند 240 ساعة/شهر': '≈52 شهراً', 'مع إعادة بيع 1,000 دولار': '≈8,730 ساعة (≈36 شهراً)' },
        ],
      },
      hardwareDecision: {
        title: 'جدول قرار الأجهزة',
        content: 'اربط حجم النموذج المستهدف ونمط استخدامك بفئة أجهزة قبل تسعير تكوين محدد. فئات أسعار الحواسيب المصغّرة وأجهزة Mac أمثلة على أسعار الأنظمة بالدولار الأمريكي وليست عروض أسعار. تعرض صفوف GPU أسعار السوق الأمريكية للبطاقة وحدها لا لنظام كامل، واطُّلع عليها في 27 نوفمبر 2026. بطاقة RTX 3090 المستعملة: عمليات بيع مكتملة على eBay US من 13 إلى 23 نوفمبر 2026، وعددها 225، دون الشحن ([دليل InsiderLLM للبطاقات المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). بطاقة RTX 4090 المستعملة: 216 عملية بيع مكتملة على eBay في أكتوبر 2026، أما سعر RTX 4090 الجديدة فبلا تاريخ ([صفحة أسعار InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)). وصف 48 GB هو بطاقتا RTX 3090 مستعملتان (2 × 1,500–1,725 = 3,000–3,450 دولار). ويُضاف إلى ذلك بقية النظام. تختلف الأسعار المحلية بحسب الضرائب ورسوم الاستيراد.',
        columns: ['الفئة', 'VRAM / RAM', 'الأفضل لـ', 'فئة السعر'],
        rows: [
          { 'الفئة': 'ميني PC بمعالج N150', 'VRAM / RAM': '16 GB RAM', 'الأفضل لـ': 'محادثة خفيفة، حتى 7B', 'فئة السعر': 'أقل من 500 دولار' },
          { 'الفئة': 'ميني PC بمعالج Ryzen', 'VRAM / RAM': '32–64 GB RAM', 'الأفضل لـ': '7B–14B يوميًا، خادم 24/7', 'فئة السعر': '500–1,000 دولار' },
          { 'الفئة': 'RTX 3090 (مستعملة)', 'VRAM / RAM': '24GB VRAM', 'الأفضل لـ': 'حتى 30B Q4، أرخص بطاقة 24 GB هنا', 'فئة السعر': '1,500–1,725 دولار (البطاقة فقط، مبيعات أمريكية 13–23/11/2026)' },
          { 'الفئة': 'RTX 4090', 'VRAM / RAM': '24GB VRAM', 'الأفضل لـ': 'حتى 34B Q4، أسرع من RTX 3090', 'فئة السعر': '2,575–3,010 دولار مستعملة، 2,000–3,000 دولار جديدة (البطاقة وحدها)' },
          { 'الفئة': 'تكوين GPU بـ 48GB (بطاقتا RTX 3090 مستعملتان)', 'VRAM / RAM': '48GB VRAM', 'الأفضل لـ': 'حتى 70B Q4، تطوير وبحث', 'فئة السعر': 'نحو 3,000–3,450 دولار (البطاقتان فقط)' },
          { 'الفئة': 'Mac (ذاكرة موحَّدة)', 'VRAM / RAM': '48–128GB موحدة', 'الأفضل لـ': 'فئة 70B عبر MLX (‏64GB فأكثر)، استهلاك منخفض', 'فئة السعر': '2,000–4,000 دولار فأكثر' },
        ],
      },
      rentPath: {
        title: 'المسار 1 — استخدام منخفض: استئجار GPU سحابي',
        content: 'الاستئجار هو الخيار الصحيح للتجريب، والضبط الدقيق العَرَضي، وأحمال العمل المتغيرة، أو اختبار قبل الالتزام بأجهزة. تدفع فقط الساعات المستخدمة، بلا صيانة، وبوصول فوري لفئات GPU (H100، A100 80GB) قد تكلف آلاف الدولارات عند الشراء.\n\nقارن أسعار GPU السحابي الحالية: [أسعار RunPod](https://www.runpod.io/pricing) و[أسعار Vast.ai](https://vast.ai/pricing) هي روابط تحريرية مرجعية وليست روابط أفلييت — لا توجد لـ PromptQuorum علاقة عمولة مع أي من المزودين.',
      },
      miniPcPath: {
        title: 'المسار 2 — استخدام متوسط: الميني PC قد يتفوق على محطة عمل GPU',
        content: 'لنماذج 7B–14B المستخدمة يوميًا — محادثة، أتمتة Home Assistant، تشغيل Ollama على مدار الساعة — يستهلك الميني PC بمعالج Ryzen غالبًا طاقة أقل ويشغل مساحة أصغر من نظام ببطاقة GPU منفصلة. تتناول [مراجعة Beelink SER8](/ar/smart-home/beelink-ser8-local-ai-review) الجهاز بوصفه خادم Ollama على مدار الساعة (تقديرات مبنية على المواصفات وليست اختبار أداء من PromptQuorum)؛ وراجع أيضاً دليل [أفضل أجهزة ميني PC لـ LLM المحلي](/ar/local-llms/best-mini-pcs-local-llm) و[أفضل ميني PC بمعالج AMD لـ LLM المحلي](/ar/local-llms/best-amd-mini-pc-local-llm-2026)، بما في ذلك [Minisforum UM890 Pro](/ar/smart-home/minisforum-um890-pro-local-ai-review) و[GMKtec G3 Plus](/ar/smart-home/gmktec-g3-plus-local-ai-review).',
      },
      gpuPath: {
        title: 'المسار 3 — ذكاء اصطناعي محلي مكثف: محطة عمل GPU',
        content: 'عند الحاجة إلى نماذج 30B+ أو الضبط الدقيق أو الاستدلال السريع متعدد المستخدمين، تكون محطة عمل GPU منفصلة الفئة المناسبة. المقياس المهم هو VRAM لكل دولار، لا سرعة المعيار الخام — فـVRAM يحدد أحجام النماذج التي يمكن تحميلها أصلًا. راجع [دليل بناء محطة عمل LLM المحلية](/ar/local-llms/local-llm-workstation-build) و[دليل بناء محطة عمل GPU من PromptQuorum](/ar/power-local-llm/best-workstation-build-local-ai-2026).',
      },
      whatToBuy: {
        title: '"ماذا أشتري؟" حسب فئة السعر',
        content: '**أقل من 500 دولار** — لا تشترِ عتاداً مخصصاً للذكاء الاصطناعي. استخدم ما تملكه، أو استأجر GPU سحابية للاحتياجات العرضية.\n\n**500–1,000 دولار** — حاسوب Ryzen مصغّر بذاكرة 32 GB أو أكثر. راجع [أفضل حاسوب AMD مصغّر للنماذج المحلية](/ar/local-llms/best-amd-mini-pc-local-llm-2026) و[مراجعة Beelink SER8](/ar/smart-home/beelink-ser8-local-ai-review).\n\n**1,000–1,800 دولار** — حاسوب مصغّر أقوى. راجع [دليل أفضل الحواسيب المصغّرة](/ar/local-llms/best-mini-pcs-local-llm) و[دليل أفضل GPU تحت 500 دولار](/ar/local-llms/best-gpu-for-llm-inference-under-500-2026) لسياق بطاقات الدخول.\n\n**1,800–2,500 دولار** — تجميعة بطاقة RTX 3090 مستعملة كنطاق ميزانية توضيحي: البطاقة وحدها أُدرجت بـ 1,500–1,725 دولار لدى [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (إعلانات مباعة، بيانات مؤرخة في 2026-11-23). وبذلك يتبقى من هذا النطاق نحو 75–1,000 دولار لبقية النظام، فقد لا يكفي حدّه الأدنى لتجميعة جديدة كاملة. راجع [دليل بناء محطة عمل للنماذج المحلية](/ar/local-llms/local-llm-workstation-build).\n\n**3,000–4,500 دولار** — محطة عمل RTX 4090 كنطاق ميزانية توضيحي (البطاقة وحدها وفق [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/): 2,575–3,010 دولار في مبيعات المستعمل المكتملة في أكتوبر 2026، و2,000–3,000 دولار للجديدة دون تاريخ، إضافة إلى بقية النظام) أو Mac بذاكرة موحّدة كبيرة. راجع [دليل بناء محطة العمل](/ar/local-llms/local-llm-workstation-build) و[دليل Apple Silicon](/ar/local-llms/apple-silicon-local-llm-guide-2026).\n\n**5,000 دولار فأكثر** — ذاكرة VRAM بسعة 48 GB أو أكثر أو عدة بطاقات GPU أو تجميعات بفئة محطات العمل (بطاقتا RTX 3090 مستعملتان وحدهما تبلغان نحو 3,000–3,450 دولار ضمن نطاق الإعلانات المباعة لدى InsiderLLM؛ وأُدرجت RTX PRO 6000 Blackwell بسعة 96 GB بنحو 16,000 دولار وفق [TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html) في 2026-08-13). احسب نسبة الاستخدام أولاً: لا تسترد هذه الفئة كلفتها إلا مع استخدام مكثف ومستمر. راجع [دليل PromptQuorum لبناء محطة عمل GPU](/ar/power-local-llm/best-workstation-build-local-ai-2026).\n\nإن لم تكن مستعداً للشراء بعد، فالاستئجار بديل متاح: يمكنك [المقارنة بين مزودي GPU السحابية](/ar/power-local-llm/best-cloud-gpu-providers)، أو قراءة [مراجعة RunPod](/ar/power-local-llm/runpod-review) أو [مراجعة Vast.ai](/ar/power-local-llm/vast-ai-review) أو [مراجعة Clore.ai](/ar/power-local-llm/clore-ai-review)، أو الاطّلاع على [مزودي استضافة خوادم GPU](/ar/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart).',
      },
      hardwarePicks: {
        title: 'اختيارات العتاد حسب الفئة',
        content: '- **اقتصادي:** [GMKtec G3 Plus](/ar/smart-home/gmktec-g3-plus-local-ai-review) — حاسوب مصغّر للدخول لنماذج 7B\n- **متوسط:** [Beelink SER8](/ar/smart-home/beelink-ser8-local-ai-review) — 7B–14B وHome Assistant وخادم Ollama على مدار الساعة؛ [Minisforum UM890 Pro](/ar/smart-home/minisforum-um890-pro-local-ai-review) بديل Ryzen\n- **قيمة GPU:** RTX 3090 (بطاقة مستعملة أُدرجت بـ 1,500–1,725 دولار لدى [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، بيانات مؤرخة في 2026-11-23) — ذاكرة 24 GB بسعر بطاقة أقل من RTX 4090\n- **أداء GPU:** RTX 4090 (جديدة 2,000–3,000 دولار دون تاريخ؛ ومبيعات المستعمل 2,575–3,010 دولار في أكتوبر 2026؛ حسب InsiderLLM، السوق الأمريكية) — أسرع من RTX 3090 لكنها أغلى، راجع [دليل بناء محطة العمل](/ar/local-llms/local-llm-workstation-build)\n- **خيار Apple:** Mac بذاكرة موحّدة كبيرة لنماذج 70B وأكبر باستهلاك منخفض للطاقة — راجع [دليل Apple Silicon](/ar/local-llms/apple-silicon-local-llm-guide-2026)\n\nروابط RTX 3090/4090 وApple أعلاه مراجع منتجات وتحريرية فقط — ليس لدى PromptQuorum برنامج إحالة ولا تحصل على عمولة على أي شراء عتاد.',
      },
      dontBuy: {
        title: 'متى لا يجب عليك شراء أجهزة ذكاء اصطناعي محلية',
        content: '- **استخدام عَرَضي** (نحو 10 ساعات/شهر أو أقل) — ستبقى الأجهزة خاملة معظم الوقت\n- **حِمل عمل شديد التغير** — أشهر مكثفة وأخرى بلا استخدام\n- **الحاجة إلى فئات GPU مختلفة لكل مشروع** — تتيح السحابة التبديل الفوري بين 24GB و80GB\n- **عدم الرغبة في صيانة الأجهزة** — التعريفات والتبريد والترقيات والأعطال كلها مسؤوليتك محليًا\n- **الحاجة العَرَضية فقط لنماذج ضخمة جدًا** — استئجار H100 لأسبوع أفضل من شرائه',
      },
      whenLocalWins: {
        title: 'متى يفوز الذكاء الاصطناعي المحلي',
        content: '- **استخدام يومي يمكن توقعه** — تتراكم الساعات بسرعة، راجع جدول فئات الاستخدام أعلاه\n- **إمكانية توقع التكلفة** — تكلفة العتاد الثابتة أسهل في وضع الميزانية من فواتير السحابة المتغيرة\n- **بيانات حساسة أو اشتراط العمل دون إنترنت** — تُعالَج المطالبات على جهازك بدلاً من خوادم مزوّد الخدمة؛ أما تنزيل النماذج وفحص التحديثات فتستخدم الشبكة\n- **لا رسوم لكل طلب للنماذج التي تشغّلها بنفسك** — النماذج المحلية تستخدم عتادك، بينما لخدمة Ollama السحابية المنفصلة حدود جلسة وحدود أسبوعية بحسب الخطة ([أسعار Ollama](https://ollama.com/pricing))\n- **أفق استخدام لسنوات** مع عتاد يمكنك إبقاؤه مشغولاً',
      },
      electricity: {
        title: 'تكلفة الكهرباء حسب الدولة',
        content: 'نظام 450 واط يعمل 240 ساعة شهرياً (8 ساعات يومياً) يستهلك 108 كيلوواط ساعة. بالأسعار التجريبية أدناه يكلف نحو 18 دولاراً شهرياً (الولايات المتحدة) إلى نحو 40 دولاراً (ألمانيا). هذه الأسعار قيم مثال تطابق الإعدادات المسبقة في الحاسبة، وليست متوسطات موثقة: استخدم تعرفتك الخاصة.',
        columns: ['الدولة', 'سعر مثال', '450 واط، 240 ساعة/شهر'],
        rows: [
          { 'الدولة': 'الولايات المتحدة', 'سعر مثال': '0.17 دولار/ك.و.س', '450 واط، 240 ساعة/شهر': '18 دولاراً/شهر' },
          { 'الدولة': 'ألمانيا', 'سعر مثال': '0.37 دولار/ك.و.س', '450 واط، 240 ساعة/شهر': '40 دولاراً/شهر' },
          { 'الدولة': 'المملكة المتحدة', 'سعر مثال': '0.33 دولار/ك.و.س', '450 واط، 240 ساعة/شهر': '36 دولاراً/شهر' },
          { 'الدولة': 'فرنسا', 'سعر مثال': '0.22 دولار/ك.و.س', '450 واط، 240 ساعة/شهر': '24 دولاراً/شهر' },
        ],
      },
      cloudProviders: {
        title: 'مقارنة تأجير GPU السحابية',
        content: 'أسعار القائمة لبطاقة RTX 4090، قُرئت في 22 نوفمبر 2026. أرقام Vast.ai عروض بطاقة GPU واحدة من واجهة العروض العامة وتتغير كل دقيقة.',
        columns: ['المزوّد', 'RTX 4090', 'الفوترة', 'ملاحظة'],
        rows: [
          { 'المزوّد': 'RunPod', 'RTX 4090': '0.34–0.89 دولار/ساعة (Community–Secure)', 'الفوترة': 'بالثانية', 'ملاحظة': 'بطاقات استهلاكية ومراكز بيانات في قائمة واحدة' },
          { 'المزوّد': 'Vast.ai', 'RTX 4090': '0.26–0.60 دولار/ساعة قابل للمقاطعة، 0.38–2.34 دولار/ساعة عند الطلب', 'الفوترة': 'بالثانية', 'ملاحظة': 'سوق؛ تختلف جودة المضيف حسب العرض' },
          { 'المزوّد': 'Lambda', 'RTX 4090': 'غير مدرجة', 'الفوترة': 'بالدقيقة', 'ملاحظة': 'H100 3.79–4.89 دولار/ساعة، A100 40 GB 1.99 دولار/ساعة' },
        ],
      },
      finalVerdict: {
        title: 'الحكم النهائي: لا يوجد فائز عام',
        content: 'قواعد الإبهام الخاصة بساعات الاستخدام في هذا المقال هي إرشاد لا قانون صارم. تعتمد نقطة تعادلك الفعلية على تعرفة السحابة وسعر الأجهزة وتعرفة الكهرباء وقيمة إعادة البيع — تحسب الحاسبة أعلاه الإجابة الحقيقية لمدخلاتك، لا عتبة ثابتة.',
        decisionBlock: {
          title: 'قرر بناءً على',
          localIf: [
            'ساعاتك تتجاوز نقطة التعادل المحسوبة لديك، كالاستخدام المستمر',
            'تحتاج إلى إمكانية التنبؤ بالتكلفة على أفق متعدد السنوات',
            'خصوصية البيانات أو القدرة على العمل دون اتصال متطلَّبة',
            'يمكنك إبقاء الأجهزة مستغلة جيدًا لا خاملة',
          ],
          cloudIf: [
            'تستخدم نماذج LLM أقل من 100 ساعة/شهر',
            'حِمل عملك متقطع أو تجريبي',
            'تحتاج إلى فئات GPU باهظة الثمن لامتلاكها (H100، A100 80GB)',
            'لا ترغب في الصيانة أو تكلفة رأسمالية أولية',
          ],
          quick: [
            'استخدم الحاسبة أعلاه بأرقامك الحقيقية',
            'دون 100 ساعة/شهر ← استأجر سحابيًا',
            '500+ ساعة/شهر أو تشغيل مستمر ← المحلي مجدٍ غالبًا',
            '100–500 ساعة/شهر ← سعر الأجهزة وتعرفة الكهرباء هما الحاسمان',
          ],
        },
      },
      finalCta: {
        title: 'الخطوات التالية حسب ما احتسبته',
        content: '- **استخدام منخفض (أقل من 100 ساعة/شهر):** [قارن أسعار GPU السحابي الحالية](/ar/local-llms/cloud-gpu-rental-comparison-2026)\n- **نماذج صغيرة، استخدام يومي:** [أفضل أجهزة ميني PC لـ LLM المحلي](/ar/local-llms/best-mini-pcs-local-llm)\n- **7B–14B، خادم على مدار الساعة:** [مراجعة Beelink SER8](/ar/smart-home/beelink-ser8-local-ai-review) أو [أفضل ميني PC بمعالج AMD](/ar/local-llms/best-amd-mini-pc-local-llm-2026)\n- **نماذج 30B+، استخدام محلي مكثف:** [دليل بناء محطة العمل](/ar/local-llms/local-llm-workstation-build)\n- **فئة 70B، تشغيل مستمر:** [دليل بناء محطة عمل GPU من PromptQuorum](/ar/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل الذكاء الاصطناعي المحلي أرخص دائماً من السحابة؟',
            a: 'لا. العتاد المحلي أرخص فقط فوق حد استخدام يعتمد على سعر العتاد وتعرفة الكهرباء وسعر السحابة. في مثال هذه الصفحة (نظام RTX 4090 بسعر 3,300 دولار، دون إعادة بيع، على 36 شهراً) يبلغ الحد نحو 113 ساعة شهرياً مقابل 0.89 دولار/ساعة ونحو 350 مقابل 0.34 دولار/ساعة. ودون حدّك الخاص يكون تأجير السحابة أرخص.',
          },
          {
            q: 'كم ساعة تلزم ليستحق شراء العتاد المحلي؟',
            a: 'بالنسبة لنظام RTX 4090 في المثال بسعر 3,300 دولار، يبلغ التعادل أمام RunPod Secure Cloud (0.89 دولار/ساعة) نحو 4,060 ساعة (17 شهراً عند 240 ساعة/شهر)، وأمام Community Cloud (0.34 دولار/ساعة) نحو 12,520 ساعة (52 شهراً). ومع قيمة إعادة بيع 1,000 دولار ينخفض إلى نحو 2,830 و8,730 ساعة. سعر العتاد والقدرة والكهرباء قيم مثال، فاستخدم الحاسبة أعلاه بأرقامك.',
          },
          {
            q: 'هل الكهرباء مشمولة في تقديرات تكلفة الذكاء الاصطناعي المحلي؟',
            a: 'ينبغي أن تكون مشمولة، وكثيراً ما تغيب عن المقارنات البسيطة. نظام 450 واط يعمل 8 ساعات يومياً يضيف نحو 18 دولاراً شهرياً عند 0.17 دولار/كيلوواط ساعة (قيمة مثال)، أو نحو 40 دولاراً شهرياً عند 0.37 دولار. تتيح لك الحاسبة أعلاه إدخال تعرفتك الخاصة.',
          },
          {
            q: 'كم يكلف تشغيل LLM محلي مقارنة بالسحابة؟',
            a: 'في المثال العملي، يكلف استئجار RTX 4090 على RunPod لمدة 240 ساعة نحو 82 دولاراً شهرياً بسعر 0.34 دولار/ساعة أو 214 دولاراً بسعر 0.89 دولار/ساعة، دون تكلفة أولية. أما النظام المحلي فيكلف 3,300 دولار مقدماً إضافة إلى نحو 18 دولاراً كهرباء شهرياً. الأرخص يعتمد على مدة استخدامك: راجع جدول التعادل أعلاه.',
          },
          {
            q: 'هل اشتراك الذكاء الاصطناعي أرخص من استئجار GPU أو شرائها؟',
            a: 'يفرض الاشتراك رسماً شهرياً ثابتاً ضمن حدود استخدام المزوّد، وتُفوتر GPU المستأجرة بالساعة، وتكلّف GPU المشتراة مبلغاً مقدماً. لحسابات الشراء مقابل الاشتراك راجع [GPU vs ChatGPT Plus 2026](/ar/local-llms/gpu-vs-ai-subscription-roi) و[النماذج المحلية vs ChatGPT Plus](/ar/local-llms/local-llms-vs-chatgpt-plus).',
          },
          {
            q: 'هل جهاز Mac مناسب للنماذج المحلية؟',
            a: 'يمكن لأجهزة Mac ذات الذاكرة الموحّدة الكبيرة تشغيل نماذج كبيرة (فئة 70B) باستهلاك منخفض للطاقة، ما يحسّن تكلفة الملكية خاصة في الدول ذات أسعار الكهرباء المرتفعة. راجع دليل Apple Silicon المرتبط أعلاه للتفاصيل.',
          },
          {
            q: 'هل تكفي ذاكرة VRAM بسعة 24 GB للنماذج المحلية؟',
            a: 'تشغّل ذاكرة 24 GB (RTX 3090 أو RTX 4090) نماذج حتى نحو 30–34B معامل بتكميم 4 بت، وهذا يغطي معظم حالات المستخدم الفرد. تحتاج نماذج فئة 70B إلى نحو 48 GB، ويمكن بلوغها بإعدادات GPU مزدوجة أو أجهزة Mac ذات ذاكرة موحّدة كبيرة.',
          },
          {
            q: 'هل أشتري RTX 4090 أم أستأجر وقت GPU سحابية؟',
            a: 'اشترِ إذا توقعت لسنوات استخداماً مستمراً يتجاوز نقطة التعادل الخاصة بك وكنت قادراً على إبقاء العتاد مشغولاً؛ وفي مثال الأشهر الستة والثلاثين دون إعادة بيع يعادل ذلك نحو 113 ساعة شهرياً مقابل 0.89 دولار/ساعة ونحو 350 مقابل 0.34 دولار/ساعة. استأجر إذا كان استخدامك عرضياً أو متقطعاً أو كنت ما زلت تختبر عبء العمل: فالاستئجار يتجنب تماماً التكلفة الأولية لبطاقة RTX 4090 (جديدة 2,000–3,000 دولار في السوق الأمريكية حسب InsiderLLM، دون تاريخ، اطُّلع عليه في 27 نوفمبر 2026).',
          },
          {
            q: 'ما أرخص طريقة لتشغيل LLM محلي؟',
            a: 'لأقل تكلفة أولية، يُعد حاسوب مصغّر صغير عادةً أرخص إعداد محلي مخصص (فئة N150 بأقل من 500 دولار للاستخدام الخفيف مع 7B، أو فئة Ryzen بنطاق مثال 500–1,000 دولار لنماذج 7B–14B). وعند الحجم المنخفض يكلف استئجار GPU سحابية دون شراء أي عتاد أقل.',
          },
          {
            q: 'هل تشغيل الذكاء الاصطناعي محلياً يعني ألا تغادر بياناتي حاسوبي؟',
            a: 'عند الاستدلال المحلي بأدوات مثل Ollama، تعالج مطالباتك نماذج على عتادك بدلاً من مزوّد سحابي. توثّق Ollama أنه يمكنك استخدام النماذج المحلية فقط وتعطيل ميزاتها السحابية. أما تنزيل النماذج وفحص التحديثات والبرامج الأخرى على الجهاز فقد تستخدم الشبكة.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: 'قراءات ذات صلة',
        items: [
          '[مقارنة تكلفة LLM المحلي مقابل GPU السحابي](/ar/local-llms/local-llm-vs-cloud-gpu-cost) -- ساعات التعادل والتكلفة لكل token',
          '[مقارنة استئجار GPU السحابي 2026](/ar/local-llms/cloud-gpu-rental-comparison-2026) -- الأسعار بالساعة والفوترة والمناطق',
          '[دليل بناء محطة عمل LLM المحلية](/ar/local-llms/local-llm-workstation-build) -- قوائم قطع لنظام GPU محلي',
          '[أفضل GPU لاستدلال LLM المحلي دون $500 (2026)](/ar/local-llms/best-gpu-for-llm-inference-under-500-2026) -- خيارات GPU للدخول',
          '[GPU مقابل اشتراك الذكاء الاصطناعي العائد على الاستثمار](/ar/local-llms/gpu-vs-ai-subscription-roi) -- الشراء أم الاشتراك',
          '[أفضل أجهزة ميني PC لـ LLM المحلي](/ar/local-llms/best-mini-pcs-local-llm) -- خيارات منخفضة الاستهلاك لخادم على مدار الساعة',
          '[دليل Apple Silicon لـ LLM المحلي 2026](/ar/local-llms/apple-silicon-local-llm-guide-2026) -- أجهزة Mac بذاكرة موحّدة',
          'الاستئجار بدلاً من الشراء: [المقارنة بين مزودي GPU السحابية](/ar/power-local-llm/best-cloud-gpu-providers)، [مراجعة RunPod](/ar/power-local-llm/runpod-review)، [مراجعة Vast.ai](/ar/power-local-llm/vast-ai-review)، [مراجعة Clore.ai](/ar/power-local-llm/clore-ai-review)، [مزودي استضافة خوادم GPU](/ar/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[أسعار RunPod](https://www.runpod.io/pricing)، قُرئت في 22 نوفمبر 2026',
          '[أسعار Vast.ai](https://vast.ai/pricing) وواجهة العروض العامة (عروض RTX 4090 ببطاقة GPU واحدة)، قُرئت في 22 نوفمبر 2026',
          '[أسعار Lambda](https://lambda.com/pricing)، قُرئت في 22 نوفمبر 2026',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، أسعار RTX 4090 (المستعملة: مبيعات أكتوبر 2026؛ الجديدة: دون تاريخ)، اطُّلع عليه في 27 نوفمبر 2026',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)، بطاقة RTX 3090 المستعملة من 225 عملية بيع على eBay US بين 13 و23 نوفمبر 2026، اطُّلع عليه في 27 نوفمبر 2026',
          '[أسعار Ollama](https://ollama.com/pricing) و[وثائق Ollama السحابية](https://docs.ollama.com/cloud)، قُرئت في 22 نوفمبر 2026',
        ],
      },
    },
  },
  zh: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-zh.webp',
    title: '本地AI vs 云端AI：成本计算器（自建 vs 租用）2026',
    seoTitle: '本地AI vs 云端AI：成本计算器（自建 vs 租用）2026',
    metaDescription: '购买本地GPU还是租用云GPU？含盈亏平衡计算示例、RunPod和Vast.ai的价格对比，以及可输入自己数据的计算器，帮你算清哪种方式更划算。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**本地硬件还是租用云GPU更便宜，主要取决于你每月的使用小时数。请在下方计算器中输入自己的数据，查看盈亏平衡点。**',
    quickAnswerTop: {
      question: '自建本地LLM服务器和租用云GPU哪个更便宜？',
      answer: '这取决于使用量而非固定规则。按经验法则，每月不足100小时时，云GPU租用（RunPod、Vast.ai）通常更便宜，因为没有前期成本。超过约500小时/月或全天候使用时，计入电费和最终转售价值后，自建硬件可能更划算。请在下方计算器中输入您的使用时长、硬件价格和电费，获得精确的损益平衡点。',
      bullets: [
        '每月不足20小时：租用——本地很难回本',
        '每月20–100小时：通常租用更划算',
        '每月100–250小时：需仔细比较——硬件价格和电费是关键',
        '每月250–500小时：本地硬件开始具有吸引力',
        '每月500小时以上或全天候：总成本上本地通常更划算',
        '完整TCO＝硬件价格＋电费−转售价值，而非仅用购买价格÷云端费率',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: '盈亏平衡取决于使用时长。在本页示例中（3,300美元的RTX 4090整机、无转售价值、36个月），对比0.89美元/小时，每月约113小时起本地更划算；对比0.34美元/小时约为350小时。请在计算器中输入您自己的数值。',
      },
      {
        type: 'plain-terms',
        text: '本页包含一个计算器：输入每月使用时长、云GPU费率、本地硬件价格、电费和计划使用期限，即可判断租用云GPU还是购买本地硬件对您来说更便宜。',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090（Amazon）', url: 'https://www.amazon.com/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '关键是每月使用小时数',
          'RunPod的RTX 4090标价为0.34美元/小时（Community）和0.89美元/小时（Secure）；Vast.ai可中断报价为0.26–0.60美元/小时（2026年11月22日读取）',
          '示例输入：本地RTX 4090整机3,300美元、450W、0.17美元/kWh，电费约0.08美元/小时——请换成你自己的数值',
          '该示例的盈亏平衡：对比0.89美元/小时约4,060小时（每月240小时约17个月），对比0.34美元/小时约12,520小时（52个月）',
          '若计入1,000美元转售价值，同一示例的盈亏平衡约为2,830小时和8,730小时',
          '450W系统在0.17美元/kWh、每月240小时的条件下，电费约每月18美元',
          '每月低于约100小时的间歇、偶尔或实验性使用，云通常更划算',
          '日常持续推理、敏感数据或每月500小时以上，且硬件保持忙碌时，本地可能更合适',
        ],
      },
      usageTiers: {
        title: '快速解答：哪种方式适合您的使用量？',
        content: '时长分档是编辑部的经验法则，并非硬性规则——硬件价格、您的云端费率、电费和转售价值都会改变实际的损益平衡点。下方计算器可根据您的数字给出精确答案。',
        columns: ['月使用时长', '建议'],
        rows: [
          { '月使用时长': '不足20小时', '建议': '租用——本地很难回本' },
          { '月使用时长': '20–100小时', '建议': '通常租用更划算' },
          { '月使用时长': '100–250小时', '建议': '需仔细比较，取决于硬件价格' },
          { '月使用时长': '250–500小时', '建议': '本地硬件开始具有吸引力' },
          { '月使用时长': '500小时以上', '建议': '总成本上本地通常更划算' },
          { '月使用时长': '全天候24/7', '建议': '本地常能回本，请先计算' },
        ],
      },
      costCalculatorTool: {
        title: '交互式成本计算器：本地 vs 云端',
        content: '输入您的每月使用时长、云GPU费率、本地硬件价格、电费、预期转售价值和使用期限。下方计算器会实时计算您的云端月成本、本地运营成本、本地总拥有成本以及损益平衡点。所有数字均为根据您的输入及经研究的参考价格计算出的估算值，而非PromptQuorum自行测量的结果。',
        component: 'CostCalculator',
      },
      workedExample: {
        title: '计算示例：RTX 4090整机的盈亏平衡',
        content: '**盈亏平衡小时数 =（硬件价格 − 转售价值）÷（云每小时费率 − 每小时电费）。** 每小时电费 = 瓦数 ÷ 1,000 × 每kWh电价。\n\n示例输入（请换成你自己的数值）：RTX 4090整机3,300美元（[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)给出的美国市场新卡单卡价格为2,000–3,000美元，未标日期，2026年11月27日读取）、450W、0.17美元/kWh（0.45 × 0.17 = 0.0765美元/小时），每月使用240小时。云费率为RunPod的RTX 4090标价，2026年11月22日读取。\n\n每月240小时，云账单约为214美元（Secure）或82美元（Community），本地系统电费约18美元。结果未计入维修、你的时间以及两边的价格变动；上方计算器用同一公式处理你的数据。',
        columns: ['云费率', '盈亏平衡', '每月240小时', '转售1,000美元时'],
        rows: [
          { '云费率': '0.89美元/小时（RunPod Secure Cloud）', '盈亏平衡': '约4,060小时', '每月240小时': '约17个月', '转售1,000美元时': '约2,830小时（约12个月）' },
          { '云费率': '0.34美元/小时（RunPod Community Cloud）', '盈亏平衡': '约12,520小时', '每月240小时': '约52个月', '转售1,000美元时': '约8,730小时（约36个月）' },
        ],
      },
      hardwareDecision: {
        title: '硬件决策表',
        content: '在计算具体配置成本之前，先根据目标模型大小和使用模式匹配硬件等级。 迷你主机和Mac的价格档位为系统价格示例（美元），并非报价。GPU行是美国市场的单卡价格，并非整机价格，2026年11月27日读取。二手RTX 3090：2026年11月13–23日eBay US成交225笔，不含运费（[InsiderLLM二手GPU指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。二手RTX 4090：2026年10月eBay成交216笔；RTX 4090新品价格未标日期（[InsiderLLM价格页面](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)）。48GB一行为两张二手RTX 3090（2×1,500–1,725 = 3,000–3,450美元）。其余系统部件费用另计。各地价格会因税费和进口成本而不同。',
        columns: ['等级', 'VRAM／RAM', '最适合', '价格区间'],
        rows: [
          { '等级': 'N150迷你主机', 'VRAM／RAM': '16GB RAM', '最适合': '轻量聊天，7B以下', '价格区间': '低于500美元' },
          { '等级': 'Ryzen迷你主机', 'VRAM／RAM': '32–64GB RAM', '最适合': '7B–14B日常使用，24/7服务器', '价格区间': '500–1,000美元' },
          { '等级': 'RTX 3090（二手）', 'VRAM／RAM': '24GB VRAM', '最适合': '30B Q4以下，此处价格最低的24GB显卡', '价格区间': '1,500–1,725美元（仅显卡，美国成交价，2026/11/13–23）' },
          { '等级': 'RTX 4090', 'VRAM／RAM': '24GB VRAM', '最适合': '34B Q4以下，比RTX 3090更快', '价格区间': '二手2,575–3,010美元，新品2,000–3,000美元（仅显卡）' },
          { '等级': '48GB GPU配置（2×二手RTX 3090）', 'VRAM／RAM': '48GB VRAM', '最适合': '70B Q4以下，开发研究', '价格区间': '约3,000–3,450美元（仅2张显卡）' },
          { '等级': 'Mac（统一内存）', 'VRAM／RAM': '48–128GB统一', '最适合': '通过MLX运行70B级（64GB以上），低功耗', '价格区间': '2,000–4,000美元以上' },
        ],
      },
      rentPath: {
        title: '路径一 — 使用量低：租用云GPU',
        content: '租用适合实验、偶尔的微调、变化的工作负载，或在投入硬件前先测试。您只需为实际使用的时长付费，无需维护，还能即时获得购买需数千美元的GPU等级（H100、A100 80GB）的访问权限。\n\n比较当前云GPU价格：[RunPod价格](https://www.runpod.io/pricing)和[Vast.ai价格](https://vast.ai/pricing)为编辑参考链接，不是联盟链接——PromptQuorum与这两家提供商均无佣金关系。',
      },
      miniPcPath: {
        title: '路径二 — 使用量中等：迷你主机可能优于GPU工作站',
        content: '对于每天使用的7B–14B模型——聊天、Home Assistant自动化、全天候运行Ollama——Ryzen迷你主机在每瓦成本和占地面积上往往优于独立GPU。将其用作24/7 Ollama服务器的分析见[Beelink SER8评测](/zh/smart-home/beelink-ser8-local-ai-review)（基于规格的估算，并非PromptQuorum基准测试），当前产品线见[本地LLM最佳迷你主机指南](/zh/local-llms/best-mini-pcs-local-llm)和[本地LLM最佳AMD迷你主机](/zh/local-llms/best-amd-mini-pc-local-llm-2026)，包括[Minisforum UM890 Pro](/zh/smart-home/minisforum-um890-pro-local-ai-review)和[GMKtec G3 Plus](/zh/smart-home/gmktec-g3-plus-local-ai-review)。',
      },
      gpuPath: {
        title: '路径三 — 重度本地AI：GPU工作站',
        content: '一旦需要30B以上模型、微调或快速多用户推理，独立GPU工作站就是合适的等级。关键指标是每美元VRAM，而非原始跑分速度——VRAM决定了能加载哪些模型大小。请参阅[本地LLM工作站构建指南](/zh/local-llms/local-llm-workstation-build)和[PromptQuorum的GPU工作站构建指南](/zh/power-local-llm/best-workstation-build-local-ai-2026)。',
      },
      whatToBuy: {
        title: '“我该买什么？”按价格档位',
        content: '**低于500美元** — 不要购买专用AI硬件。使用现有设备，偶尔需要时租用云GPU。\n\n**500–1,000美元** — 配备32GB以上内存的Ryzen迷你主机。参见[本地LLM最佳AMD迷你主机](/zh/local-llms/best-amd-mini-pc-local-llm-2026)和[Beelink SER8评测](/zh/smart-home/beelink-ser8-local-ai-review)。\n\n**1,000–1,800美元** — 性能更强的迷你主机。参见[最佳迷你主机指南](/zh/local-llms/best-mini-pcs-local-llm)，入门GPU背景参见[500美元以下最佳GPU指南](/zh/local-llms/best-gpu-for-llm-inference-under-500-2026)。\n\n**1,800–2,500美元** — 二手RTX 3090整机（预算区间示例：单卡在[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)上标价1,500–1,725美元，为已售出挂牌价，数据日期2026-11-23）。这样该预算区间内留给其余部件的只有约75–1,000美元，区间下限可能不够组装一台完整的新机。参见[本地LLM工作站搭建指南](/zh/local-llms/local-llm-workstation-build)。\n\n**3,000–4,500美元** — RTX 4090工作站（预算区间示例：据[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，单卡二手成交价2,575–3,010美元（2026年10月），新品2,000–3,000美元（未标日期）；其余系统部件费用另计），或大容量统一内存的Mac。参见[工作站搭建指南](/zh/local-llms/local-llm-workstation-build)和[Apple Silicon本地LLM指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)。\n\n**5,000美元以上** — 48GB以上显存、多GPU或工作站级配置（仅两张二手RTX 3090，按InsiderLLM已售出挂牌价范围约3,000–3,450美元；据[TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html)报道，一张RTX PRO 6000 Blackwell 96GB于2026-08-13标价约16,000美元）。请先计算利用率：这一档只有在持续高负载使用时才能回本。参见[PromptQuorum的GPU工作站搭建指南](/zh/power-local-llm/best-workstation-build-local-ai-2026)。\n\n如果暂时不打算购买，也可以选择租用：可以[对比云GPU提供商](/zh/power-local-llm/best-cloud-gpu-providers)，阅读[RunPod评测](/zh/power-local-llm/runpod-review)、[Vast.ai评测](/zh/power-local-llm/vast-ai-review)或[Clore.ai评测](/zh/power-local-llm/clore-ai-review)，也可以查看[GPU服务器托管提供商](/zh/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)。',
      },
      hardwarePicks: {
        title: '按类别的硬件推荐',
        content: '- **预算型：** [GMKtec G3 Plus](/zh/smart-home/gmktec-g3-plus-local-ai-review) — 面向7B级模型的入门迷你主机\n- **中端：** [Beelink SER8](/zh/smart-home/beelink-ser8-local-ai-review) — 7B–14B、Home Assistant、24/7 Ollama服务器；Ryzen备选为[Minisforum UM890 Pro](/zh/smart-home/minisforum-um890-pro-local-ai-review)\n- **GPU性价比：** RTX 3090（二手单卡在[InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)上标价1,500–1,725美元，数据日期2026-11-23）— 24GB显存，单卡价格低于RTX 4090\n- **GPU性能：** RTX 4090（新品2,000–3,000美元，未标日期；二手成交2,575–3,010美元，2026年10月；来自InsiderLLM，美国市场）— 比RTX 3090更快但更贵，参见[工作站搭建指南](/zh/local-llms/local-llm-workstation-build)\n- **Apple方案：** 大容量统一内存的Mac，低功耗运行70B以上模型 — 参见[Apple Silicon本地LLM指南](/zh/local-llms/apple-silicon-local-llm-guide-2026)\n\n以上RTX 3090/4090和Apple链接均为普通的产品或编辑性参考——PromptQuorum没有联盟计划，也不会从任何硬件购买中获得佣金。',
      },
      dontBuy: {
        title: '何时不应购买本地AI硬件',
        content: '- **偶尔使用**（约每月10小时以下）——硬件大部分时间处于闲置状态\n- **使用量高度波动**——有些月份高强度使用，有些月份完全不用\n- **每个项目需要不同GPU等级**——云端可在24GB和80GB之间即时切换\n- **不想承担硬件维护**——驱动、散热、升级和最终故障在本地方案下都由您负责\n- **只是偶尔需要超大模型**——租用H100一周比购买划算',
      },
      whenLocalWins: {
        title: '本地AI何时更划算',
        content: '- **日常、可预测的使用** — 小时数累积很快，参见上方的使用时长表\n- **成本可预测** — 固定的硬件成本比波动的云账单更容易做预算\n- **敏感数据或离线需求** — 提示词在你自己的机器上处理，而不是在服务商的服务器上；模型下载和更新检查仍会使用网络\n- **自己运行的模型没有按请求计费** — 本地模型使用你自己的硬件，而Ollama单独的云服务按套餐设有会话和每周用量限制（[Ollama价格](https://ollama.com/pricing)）\n- **多年的使用周期** — 硬件能够长期保持较高利用率',
      },
      electricity: {
        title: '各国电费',
        content: '450W系统每月运行240小时（每天8小时）耗电108kWh。按下方示例电价，每月约18美元（美国）到约40美元（德国）。这些电价是与计算器预设一致的示例输入，并非带来源的平均值：请使用你自己的电价。',
        columns: ['国家', '示例电价', '450W，每月240小时'],
        rows: [
          { '国家': '美国', '示例电价': '0.17美元/kWh', '450W，每月240小时': '18美元/月' },
          { '国家': '德国', '示例电价': '0.37美元/kWh', '450W，每月240小时': '40美元/月' },
          { '国家': '英国', '示例电价': '0.33美元/kWh', '450W，每月240小时': '36美元/月' },
          { '国家': '法国', '示例电价': '0.22美元/kWh', '450W，每月240小时': '24美元/月' },
        ],
      },
      cloudProviders: {
        title: '云GPU租赁对比',
        content: 'RTX 4090的标价，2026年11月22日读取。Vast.ai的数字来自其公开报价API的单GPU报价，按分钟变动。',
        columns: ['服务商', 'RTX 4090', '计费', '备注'],
        rows: [
          { '服务商': 'RunPod', 'RTX 4090': '0.34–0.89美元/小时（Community–Secure）', '计费': '按秒', '备注': '消费级和数据中心GPU在同一列表' },
          { '服务商': 'Vast.ai', 'RTX 4090': '可中断0.26–0.60美元/小时，按需0.38–2.34美元/小时', '计费': '按秒', '备注': '交易市场；主机质量因报价而异' },
          { '服务商': 'Lambda', 'RTX 4090': '未列出', '计费': '按分钟', '备注': 'H100 3.79–4.89美元/小时，A100 40GB 1.99美元/小时' },
        ],
      },
      finalVerdict: {
        title: '最终结论：没有放之四海而皆准的答案',
        content: '本文中关于使用时长的经验法则仅供参考，并非硬性规则。您的实际损益平衡点取决于云端费率、硬件价格、电费和转售价值——上方计算器会根据您的输入计算出真实答案，而非固定的阈值。',
        decisionBlock: {
          title: '据此判断',
          localIf: [
            '使用时长超过你算出的盈亏平衡点（例如持续运行）',
            '需要多年周期内的成本可预测性',
            '数据隐私或离线能力是硬性要求',
            '能让硬件保持充分利用而非闲置',
          ],
          cloudIf: [
            '每月使用LLM不足100小时',
            '工作负载间歇或处于实验阶段',
            '需要购买成本过高的GPU等级（H100、A100 80GB）',
            '不想承担维护或前期资本支出',
          ],
          quick: [
            '用您的真实数字使用上方计算器',
            '每月不足100小时 → 租用云端',
            '每月500小时以上或全天候 → 本地常能回本',
            '每月100–500小时 → 硬件价格和电费是关键',
          ],
        },
      },
      finalCta: {
        title: '根据计算结果的下一步行动',
        content: '- **使用量低（每月不足100小时）：** [比较当前云GPU价格](/zh/local-llms/cloud-gpu-rental-comparison-2026)\n- **小模型、每日使用：** [本地LLM最佳迷你主机](/zh/local-llms/best-mini-pcs-local-llm)\n- **7B–14B、24/7服务器：** [Beelink SER8评测](/zh/smart-home/beelink-ser8-local-ai-review)或[最佳AMD迷你主机](/zh/local-llms/best-amd-mini-pc-local-llm-2026)\n- **30B以上模型、重度本地使用：** [本地LLM工作站构建指南](/zh/local-llms/local-llm-workstation-build)\n- **70B级别、持续使用：** [PromptQuorum的GPU工作站构建指南](/zh/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '本地AI总是比云更便宜吗？',
            a: '不是。本地硬件只有超过某个使用量阈值才更便宜，阈值取决于硬件价格、电价和云费率。在本页示例中（3,300美元的RTX 4090整机、无转售价值、使用36个月），对比0.89美元/小时约为每月113小时，对比0.34美元/小时约为350小时。低于你自己的阈值时，云租赁更便宜。',
          },
          {
            q: '用多少小时购买本地硬件才划算？',
            a: '对示例的RTX 4090整机（3,300美元），对比RunPod Secure Cloud（0.89美元/小时）盈亏平衡约4,060小时（每月240小时约17个月）；对比Community Cloud（0.34美元/小时）约12,520小时（52个月）。若计入1,000美元转售价值，则缩短到约2,830小时和8,730小时。硬件价格、功耗和电价是示例输入，请在上方计算器中输入你自己的数值。',
          },
          {
            q: '本地AI的成本估算包含电费吗？',
            a: '应该包含，但简单对比里常常漏掉。450W系统每天运行8小时，按示例的0.17美元/kWh每月增加约18美元，按0.37美元/kWh则约40美元。上方计算器可以输入你自己的电价。',
          },
          {
            q: '运行本地LLM与云相比要花多少钱？',
            a: '在计算示例中，在RunPod上租用RTX 4090运行240小时，按0.34美元/小时约每月82美元，按0.89美元/小时约214美元，没有前期成本。本地系统前期3,300美元，另加每月约18美元电费。哪个更便宜取决于你使用多久：见上方的盈亏平衡表。',
          },
          {
            q: 'AI订阅比租用或购买GPU更便宜吗？',
            a: '订阅按服务商的用量限制收取固定月费，租用GPU按小时计费，购买GPU则需要前期投入。关于购买与订阅的比较，参见[GPU vs ChatGPT Plus 2026](/zh/local-llms/gpu-vs-ai-subscription-roi)和[本地LLM vs ChatGPT Plus](/zh/local-llms/local-llms-vs-chatgpt-plus)。',
          },
          {
            q: 'Mac适合本地LLM吗？',
            a: '大容量统一内存的Mac可以低功耗运行大模型（70B级），这有利于总拥有成本，尤其是在电价较高的国家。详情参见上方链接的Apple Silicon指南。',
          },
          {
            q: '24GB显存够用于本地LLM吗？',
            a: '24GB（RTX 3090或RTX 4090）可在4位量化下运行约30–34B参数的模型，覆盖大多数单用户场景。70B级模型需要约48GB，可通过双GPU配置或大容量统一内存的Mac实现。',
          },
          {
            q: '应该买RTX 4090还是租用云GPU？',
            a: '如果预计多年内持续使用量高于你自己的盈亏平衡点，并且能让硬件保持忙碌，就购买；在36个月、无转售价值的示例中，对比0.89美元/小时约为每月113小时，对比0.34美元/小时约为350小时。如果使用偶尔、断续，或仍在验证工作负载，就租用：租用可以完全避开RTX 4090的前期成本（美国市场新品2,000–3,000美元，来自InsiderLLM，未标日期，2026年11月27日读取）。',
          },
          {
            q: '运行本地LLM最便宜的方式是什么？',
            a: '前期成本最低的通常是小型迷你主机，这是最便宜的专用本地方案（轻量7B使用选N150档，低于500美元；7B–14B模型选Ryzen档，示例档位500–1,000美元）。使用量很低时，完全不买硬件的云GPU租赁更省钱。',
          },
          {
            q: '在本地运行AI就意味着数据永远不会离开我的电脑吗？',
            a: '通过Ollama等工具做本地推理时，你的提示词由你自己硬件上的模型处理，而不是云服务商。Ollama说明你可以只使用本地模型并关闭其云功能。模型下载、更新检查以及机器上的其他软件仍可能使用网络。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: '相关阅读',
        items: [
          '[本地LLM与云GPU成本比较](/zh/local-llms/local-llm-vs-cloud-gpu-cost) — 盈亏平衡小时数与每token成本',
          '[云GPU租用比较2026](/zh/local-llms/cloud-gpu-rental-comparison-2026) — 每小时价格、计费与区域',
          '[本地LLM工作站构建指南](/zh/local-llms/local-llm-workstation-build) — 本地GPU系统的配件清单',
          '[$500以下最佳本地LLM推理GPU（2026）](/zh/local-llms/best-gpu-for-llm-inference-under-500-2026) — 入门GPU选择',
          '[GPU vs AI订阅ROI](/zh/local-llms/gpu-vs-ai-subscription-roi) — 购买还是订阅',
          '[本地LLM最佳迷你主机](/zh/local-llms/best-mini-pcs-local-llm) — 适合24/7服务器的低功耗选择',
          '[Apple Silicon本地LLM指南2026](/zh/local-llms/apple-silicon-local-llm-guide-2026) — 统一内存的Mac',
          '租用而非购买：[对比云GPU提供商](/zh/power-local-llm/best-cloud-gpu-providers)、[RunPod评测](/zh/power-local-llm/runpod-review)、[Vast.ai评测](/zh/power-local-llm/vast-ai-review)、[Clore.ai评测](/zh/power-local-llm/clore-ai-review)和[GPU服务器托管提供商](/zh/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[RunPod价格](https://www.runpod.io/pricing)，读取于2026年11月22日',
          '[Vast.ai价格](https://vast.ai/pricing)及其公开报价API（RTX 4090单GPU报价），读取于2026年11月22日',
          '[Lambda价格](https://lambda.com/pricing)，读取于2026年11月22日',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，RTX 4090价格（二手为2026年10月成交价；新品未标日期），读取于2026年11月27日',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)，二手RTX 3090（2026年11月13–23日eBay US成交225笔），读取于2026年11月27日',
          '[Ollama价格](https://ollama.com/pricing)和[Ollama云文档](https://docs.ollama.com/cloud)，读取于2026年11月22日',
        ],
      },
    },
  },
  pt: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-pt.webp',
    title: 'IA Local vs IA na Nuvem: Calculadora de Custo (Montar vs Alugar) 2026',
    seoTitle: 'IA local vs nuvem: calculadora de custo (montar vs alugar)',
    metaDescription: 'Comprar uma GPU local ou alugar uma na nuvem? Exemplo de ponto de equilíbrio, preços da RunPod e Vast.ai e uma calculadora para seus próprios números.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**Hardware local ou GPU na nuvem alugada: o mais barato depende sobretudo das suas horas por mês. Informe os seus próprios números na calculadora abaixo.**',
    quickAnswerTop: {
      question: 'É mais barato montar um servidor de LLM local ou alugar GPU na nuvem?',
      answer: 'Depende do volume de uso, não de uma regra fixa. Como regra prática, abaixo de 100 horas/mês o aluguel de GPU na nuvem (RunPod, Vast.ai) geralmente é mais barato, pois não há custo inicial. Acima de cerca de 500 horas/mês ou em uso contínuo, possuir o hardware pode vencer depois de incluir eletricidade e valor de revenda. Use a calculadora abaixo com suas próprias horas, preço do hardware e tarifa de energia para um ponto de equilíbrio exato.',
      bullets: [
        'Menos de 20 h/mês: alugar — o local dificilmente se paga',
        '20–100 h/mês: geralmente alugar',
        '100–250 h/mês: comparar com cuidado — preço do hardware e tarifa de energia decidem',
        '250–500 h/mês: o hardware local começa a ficar atrativo',
        '500+ h/mês ou contínuo: o local costuma vencer no custo total',
        'TCO completo = preço do hardware + eletricidade − revenda, não apenas preço ÷ tarifa da nuvem',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'O ponto de equilíbrio depende das suas horas. No exemplo desta página (sistema RTX 4090 de US$ 3.300, sem revenda, 36 meses), o local compensa a partir de cerca de 113 horas por mês contra US$ 0,89/h e de cerca de 350 contra US$ 0,34/h. Faça suas contas na calculadora.',
      },
      {
        type: 'plain-terms',
        text: 'Esta página tem uma calculadora: informe suas horas de uso mensais, sua tarifa de GPU na nuvem, o preço do seu hardware local, sua tarifa de energia e por quanto tempo planeja usar o hardware — ela mostra se alugar ou comprar é mais barato para você.',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090 (Amazon)', url: 'https://www.amazon.com.br/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          'A pergunta central são as horas por mês, não uma regra fixa',
          'A RunPod lista uma RTX 4090 a US$ 0,34/h (Community) e US$ 0,89/h (Secure); as ofertas interrompíveis da Vast.ai ficaram em US$ 0,26–0,60/h (lidas em 22 de novembro de 2026)',
          'Valores de exemplo: sistema local com RTX 4090 por US$ 3.300, 450 W e US$ 0,17/kWh, cerca de US$ 0,08/h de energia — troque pelos seus',
          'Ponto de equilíbrio no exemplo: cerca de 4.060 horas (17 meses a 240 h/mês) contra US$ 0,89/h e cerca de 12.520 horas (52 meses) contra US$ 0,34/h',
          'Com US$ 1.000 de valor de revenda, o mesmo exemplo se paga após cerca de 2.830 e 8.730 horas',
          'A energia de um sistema de 450 W custa cerca de US$ 18/mês a US$ 0,17/kWh e 240 h/mês',
          'A nuvem costuma ser mais barata no uso esporádico, ocasional ou experimental abaixo de cerca de 100 h/mês',
          'O local pode compensar na inferência diária contínua, com dados sensíveis ou com 500+ h/mês, se o hardware ficar ocupado',
        ],
      },
      usageTiers: {
        title: 'Resposta rápida: qual opção combina com seu uso?',
        content: 'As faixas de horas são regras práticas editoriais, não uma regra rígida — preço do hardware, sua tarifa de nuvem, sua tarifa de energia e o valor de revenda deslocam o ponto de equilíbrio real. A calculadora abaixo dá a resposta exata para seus números.',
        columns: ['Horas/mês', 'Recomendação'],
        rows: [
          { 'Horas/mês': 'Menos de 20 h', Recomendação: 'Alugar — o local dificilmente se paga' },
          { 'Horas/mês': '20–100 h', Recomendação: 'Geralmente alugar' },
          { 'Horas/mês': '100–250 h', Recomendação: 'Comparar com cuidado conforme o hardware' },
          { 'Horas/mês': '250–500 h', Recomendação: 'O hardware local fica atrativo' },
          { 'Horas/mês': '500+ h', Recomendação: 'O local costuma vencer no custo total' },
          { 'Horas/mês': 'Contínuo 24/7', Recomendação: 'Local costuma compensar: calcule' },
        ],
      },
      costCalculatorTool: {
        title: 'Calculadora de custo interativa: local vs nuvem',
        content: 'Informe suas horas de uso mensais, tarifa de GPU na nuvem, preço do hardware local, tarifa de energia, valor de revenda esperado e período de posse. A calculadora abaixo computa em tempo real seu custo mensal na nuvem, seu custo operacional local, seu custo total de propriedade e seu ponto de equilíbrio. Todos os valores são estimativas calculadas a partir dos seus dados e de preços de referência pesquisados, não medições feitas pela PromptQuorum.',
        component: 'CostCalculator',
      },
      workedExample: {
        title: 'Exemplo prático: ponto de equilíbrio de um sistema RTX 4090',
        content: '**Horas de equilíbrio = (preço do hardware − valor de revenda) ÷ (tarifa da nuvem por hora − energia por hora).** Energia por hora = watts ÷ 1.000 × preço por kWh.\n\nValores de exemplo, para trocar pelos seus: US$ 3.300 por um sistema RTX 4090 (a [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) indica, sem data, US$ 2.000–3.000 para a placa nova sozinha no mercado dos EUA, consultado em 27 de novembro de 2026), 450 W a US$ 0,17/kWh (0,45 × 0,17 = US$ 0,0765/h) e 240 horas de uso por mês. As tarifas da nuvem são preços de tabela da RunPod para uma RTX 4090, lidos em 22 de novembro de 2026.\n\nCom 240 horas por mês, a conta da nuvem fica em cerca de US$ 214 (Secure) ou US$ 82 (Community), contra cerca de US$ 18 de energia do sistema local. O resultado ignora reparos, o seu tempo e variações de preço dos dois lados; a calculadora acima aplica a mesma fórmula com os seus números.',
        columns: ['Tarifa da nuvem', 'Ponto de equilíbrio', 'A 240 h/mês', 'Com US$ 1.000 de revenda'],
        rows: [
          { 'Tarifa da nuvem': 'US$ 0,89/h (RunPod Secure Cloud)', 'Ponto de equilíbrio': '≈4.060 horas', 'A 240 h/mês': '≈17 meses', 'Com US$ 1.000 de revenda': '≈2.830 h (≈12 meses)' },
          { 'Tarifa da nuvem': 'US$ 0,34/h (RunPod Community Cloud)', 'Ponto de equilíbrio': '≈12.520 horas', 'A 240 h/mês': '≈52 meses', 'Com US$ 1.000 de revenda': '≈8.730 h (≈36 meses)' },
        ],
      },
      hardwareDecision: {
        title: 'Tabela de decisão de hardware',
        content: 'Relacione o tamanho de modelo desejado e seu padrão de uso a um nível de hardware antes de precificar uma configuração específica. As faixas de preço de mini PCs e Macs são preços de sistema de exemplo em dólares americanos, não cotações. As linhas de GPU mostram preços do mercado dos EUA só da placa, não de um sistema completo, consultados em 27 de novembro de 2026. RTX 3090 usada: vendas concluídas no eBay US de 13 a 23 de novembro de 2026, 225 vendas, sem frete ([guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). RTX 4090 usada: 216 vendas concluídas no eBay, outubro de 2026; o preço da RTX 4090 nova não tem data ([página de preços da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)). A linha de 48 GB são duas RTX 3090 usadas (2 × US$ 1.500–1.725 = US$ 3.000–3.450). O restante do sistema vem à parte. Os preços no Brasil podem variar bastante devido a impostos de importação.',
        columns: ['Nível', 'VRAM / RAM', 'Melhor para', 'Faixa de preço'],
        rows: [
          { Nível: 'Mini PC N150', 'VRAM / RAM': '16GB RAM', 'Melhor para': 'Chat leve, até 7B', 'Faixa de preço': 'Menos de US$ 500' },
          { Nível: 'Mini PC Ryzen', 'VRAM / RAM': '32–64GB RAM', 'Melhor para': '7B–14B diário, servidor 24/7', 'Faixa de preço': 'US$ 500–1.000' },
          { Nível: 'RTX 3090 (usada)', 'VRAM / RAM': '24GB VRAM', 'Melhor para': 'Até 30B Q4, a placa de 24 GB mais barata aqui', 'Faixa de preço': 'US$ 1.500–1.725 (só a placa, vendida nos EUA, 13–23/11/26)' },
          { Nível: 'RTX 4090', 'VRAM / RAM': '24GB VRAM', 'Melhor para': 'Até 34B Q4, mais rápida que a RTX 3090', 'Faixa de preço': 'US$ 2.575–3.010 usada, US$ 2.000–3.000 nova (só a placa)' },
          { Nível: 'Setup GPU 48GB (2× RTX 3090 usadas)', 'VRAM / RAM': '48GB VRAM', 'Melhor para': 'Até 70B Q4, desenvolvimento', 'Faixa de preço': 'cerca de US$ 3.000–3.450 (só 2 placas)' },
          { Nível: 'Mac (memória unificada)', 'VRAM / RAM': '48–128GB unificada', 'Melhor para': 'Classe 70B via MLX (64 GB+), econômico', 'Faixa de preço': 'US$ 2.000–4.000+' },
        ],
      },
      rentPath: {
        title: 'Caminho 1 — Uso baixo: alugar GPU na nuvem',
        content: 'Alugar é a escolha certa para experimentação, fine-tuning ocasional, cargas variáveis ou testar antes de investir em hardware. Você paga só as horas usadas, sem manutenção, com acesso imediato a níveis de GPU (H100, A100 80GB) que custariam milhares de dólares para comprar.\n\nCompare preços atuais de GPU na nuvem: [preços do RunPod](https://www.runpod.io/pricing) e [preços do Vast.ai](https://vast.ai/pricing) são links editoriais de referência, não links de afiliado — a PromptQuorum não tem relação de comissão com nenhum dos dois provedores.',
      },
      miniPcPath: {
        title: 'Caminho 2 — Uso médio: um mini PC pode superar uma workstation GPU',
        content: 'Para modelos 7B–14B de uso diário — chat, automações do Home Assistant, Ollama 24/7 — um mini PC Ryzen costuma gastar menos energia e ocupar menos espaço que um sistema com GPU dedicada. A [análise do Beelink SER8](/pt/smart-home/beelink-ser8-local-ai-review) o avalia como servidor Ollama 24/7 (estimativas com base nas especificações, não um benchmark da PromptQuorum); veja também o [guia dos melhores mini PCs para LLM local](/pt/local-llms/best-mini-pcs-local-llm) e [melhor mini PC AMD para LLM local](/pt/local-llms/best-amd-mini-pc-local-llm-2026), incluindo o [Minisforum UM890 Pro](/pt/smart-home/minisforum-um890-pro-local-ai-review) e o [GMKtec G3 Plus](/pt/smart-home/gmktec-g3-plus-local-ai-review).',
      },
      gpuPath: {
        title: 'Caminho 3 — IA local intensa: workstation GPU',
        content: 'Ao precisar de modelos de 30B+, fine-tuning ou inferência rápida multiusuário, uma workstation GPU dedicada é o nível certo. A métrica que importa é VRAM por dólar, não a velocidade bruta de benchmark — o VRAM determina quais tamanhos de modelo sequer carregam. Veja o [guia de construção de workstation LLM local](/pt/local-llms/local-llm-workstation-build) e o [guia de construção de workstation GPU da PromptQuorum](/pt/power-local-llm/best-workstation-build-local-ai-2026).',
      },
      whatToBuy: {
        title: '"O que devo comprar?" por faixa de preço',
        content: '**Menos de US$ 500** — Não compre hardware de IA dedicado. Use o que você já tem ou alugue uma GPU na nuvem para necessidades ocasionais.\n\n**US$ 500–1.000** — Um mini PC Ryzen com 32 GB+ de RAM. Veja o [melhor mini PC AMD para LLM local](/pt/local-llms/best-amd-mini-pc-local-llm-2026) e a [análise do Beelink SER8](/pt/smart-home/beelink-ser8-local-ai-review).\n\n**US$ 1.000–1.800** — Um mini PC mais potente. Veja o [guia dos melhores mini PCs](/pt/local-llms/best-mini-pcs-local-llm) e o [guia da melhor GPU abaixo de US$ 500](/pt/local-llms/best-gpu-for-llm-inference-under-500-2026) para o contexto das GPUs de entrada.\n\n**US$ 1.800–2.500** — Uma montagem com RTX 3090 usada como faixa de orçamento de exemplo: a placa sozinha constava a US$ 1.500–1.725 segundo a [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (anúncios vendidos, dados de 2026-11-23). Sobram assim cerca de US$ 75–1.000 desta faixa para o restante do sistema, então o limite inferior pode não bastar para uma montagem nova completa. Veja o [guia de montagem de workstation](/pt/local-llms/local-llm-workstation-build).\n\n**US$ 3.000–4.500** — Uma workstation com RTX 4090 como faixa de orçamento de exemplo (placa sozinha segundo a [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/): US$ 2.575–3.010 em vendas de usadas, outubro de 2026, e US$ 2.000–3.000 nova, sem data, mais o restante do sistema) ou um Mac com memória unificada grande. Veja o [guia de montagem de workstation](/pt/local-llms/local-llm-workstation-build) e o [guia de Apple Silicon](/pt/local-llms/apple-silicon-local-llm-guide-2026).\n\n**US$ 5.000+** — 48 GB+ de VRAM, multi-GPU ou classe workstation (duas RTX 3090 usadas sozinhas somam cerca de US$ 3.000–3.450 na faixa de anúncios vendidos da InsiderLLM; uma RTX PRO 6000 Blackwell de 96 GB constava a cerca de US$ 16.000 segundo a [TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html) em 2026-08-13). Calcule antes a sua utilização: essa faixa só se paga com uso intenso e contínuo. Veja o [guia de montagem de workstation GPU da PromptQuorum](/pt/power-local-llm/best-workstation-build-local-ai-2026).\n\nAinda não está pronto para comprar? Você pode alugar em vez disso: pode [comparar provedores de GPU na nuvem](/pt/power-local-llm/best-cloud-gpu-providers), ler a [análise do RunPod](/pt/power-local-llm/runpod-review), a [análise do Vast.ai](/pt/power-local-llm/vast-ai-review) ou a [análise do Clore.ai](/pt/power-local-llm/clore-ai-review), ou ver os [provedores de hospedagem de servidores GPU](/pt/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart).',
      },
      hardwarePicks: {
        title: 'Seleções de hardware por categoria',
        content: '- **Econômico:** [GMKtec G3 Plus](/pt/smart-home/gmktec-g3-plus-local-ai-review) — mini PC de entrada para modelos 7B\n- **Faixa intermediária:** [Beelink SER8](/pt/smart-home/beelink-ser8-local-ai-review) — 7B–14B, Home Assistant, servidor Ollama 24/7; [Minisforum UM890 Pro](/pt/smart-home/minisforum-um890-pro-local-ai-review) como alternativa Ryzen\n- **GPU custo-benefício:** RTX 3090 (placa usada a US$ 1.500–1.725 segundo a [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), dados de 2026-11-23) — 24 GB de VRAM por um preço de placa menor que o da RTX 4090\n- **GPU desempenho:** RTX 4090 (nova US$ 2.000–3.000, sem data; vendas de usadas US$ 2.575–3.010, outubro de 2026; segundo a InsiderLLM, mercado dos EUA) — mais rápida que a RTX 3090, porém mais cara, veja o [guia de montagem de workstation](/pt/local-llms/local-llm-workstation-build)\n- **Opção Apple:** Mac com muita memória unificada para modelos 70B+ com baixo consumo — veja o [guia de Apple Silicon](/pt/local-llms/apple-silicon-local-llm-guide-2026)\n\nOs links de RTX 3090/4090 e Apple acima são links de produto/editoriais — a PromptQuorum não tem programa de afiliados e não ganha comissão em nenhuma compra de hardware.',
      },
      dontBuy: {
        title: 'Quando você NÃO deve comprar hardware de IA local',
        content: '- **Uso ocasional** (~10 horas/mês ou menos) — o hardware ficará ocioso na maior parte do tempo\n- **Carga de trabalho muito variável** — alguns meses intensos, outros nulos\n- **Precisa de GPUs diferentes por projeto** — a nuvem permite trocar instantaneamente entre 24GB e 80GB\n- **Não quer manutenção de hardware** — drivers, refrigeração, upgrades e falhas ficam por sua conta no local\n- **Só precisa ocasionalmente de modelos muito grandes** — alugar uma H100 por uma semana supera comprar uma',
      },
      whenLocalWins: {
        title: 'Quando a IA local vence',
        content: '- **Uso diário e previsível** — as horas somam rápido, veja a tabela de uso acima\n- **Previsibilidade de custos** — um custo fixo de hardware é mais fácil de orçar do que contas de nuvem variáveis\n- **Dados sensíveis ou exigência offline** — os prompts são processados na sua própria máquina em vez de nos servidores de um provedor; downloads de modelos e verificações de atualização ainda usam a rede\n- **Sem tarifa por requisição nos modelos que você mesmo executa** — modelos locais usam o seu hardware, enquanto o serviço de nuvem separado do Ollama tem limites de sessão e semanais conforme o plano ([preços do Ollama](https://ollama.com/pricing))\n- **Horizonte de uso de vários anos** com hardware que você consiga manter bem utilizado',
      },
      electricity: {
        title: 'Custo de eletricidade por país',
        content: 'Um sistema de 450 W usado 240 horas por mês (8 h/dia) consome 108 kWh. Nas tarifas de exemplo abaixo, custa cerca de US$ 18 por mês (EUA) a cerca de US$ 40 (Alemanha). As tarifas são valores de exemplo iguais às predefinições da calculadora, não médias com fonte: use a sua própria tarifa.',
        columns: ['País', 'Tarifa de exemplo', '450 W, 240 h/mês'],
        rows: [
          { 'País': 'Estados Unidos', 'Tarifa de exemplo': 'US$ 0,17/kWh', '450 W, 240 h/mês': 'US$ 18/mês' },
          { 'País': 'Alemanha', 'Tarifa de exemplo': 'US$ 0,37/kWh', '450 W, 240 h/mês': 'US$ 40/mês' },
          { 'País': 'Reino Unido', 'Tarifa de exemplo': 'US$ 0,33/kWh', '450 W, 240 h/mês': 'US$ 36/mês' },
          { 'País': 'França', 'Tarifa de exemplo': 'US$ 0,22/kWh', '450 W, 240 h/mês': 'US$ 24/mês' },
        ],
      },
      cloudProviders: {
        title: 'Comparativo de aluguel de GPU na nuvem',
        content: 'Preços de tabela para uma RTX 4090, lidos em 22 de novembro de 2026. Os números da Vast.ai são ofertas de uma única GPU da sua API pública de ofertas e mudam a cada minuto.',
        columns: ['Provedor', 'RTX 4090', 'Cobrança', 'Observação'],
        rows: [
          { 'Provedor': 'RunPod', 'RTX 4090': 'US$ 0,34–0,89/h (Community–Secure)', 'Cobrança': 'por segundo', 'Observação': 'GPUs de consumo e de data center numa lista' },
          { 'Provedor': 'Vast.ai', 'RTX 4090': 'US$ 0,26–0,60/h interrompível, US$ 0,38–2,34/h sob demanda', 'Cobrança': 'por segundo', 'Observação': 'Marketplace; qualidade do host varia por oferta' },
          { 'Provedor': 'Lambda', 'RTX 4090': 'não listada', 'Cobrança': 'por minuto', 'Observação': 'H100 US$ 3,79–4,89/h, A100 40 GB US$ 1,99/h' },
        ],
      },
      finalVerdict: {
        title: 'Veredito final: não há um vencedor universal',
        content: 'As regras práticas de horas de uso deste artigo são orientativas, não leis fixas. Seu ponto de equilíbrio real depende da sua tarifa de nuvem, do preço do seu hardware, da sua tarifa de energia e do seu valor de revenda — a calculadora acima calcula a resposta real para os seus dados, não um limiar fixo.',
        decisionBlock: {
          title: 'Decida com base em',
          localIf: [
            'Suas horas passam do ponto de equilíbrio calculado, por exemplo em uso contínuo',
            'Precisa de previsibilidade de custo em um horizonte de vários anos',
            'Privacidade de dados ou capacidade offline é obrigatória',
            'Consegue manter o hardware bem utilizado, não ocioso',
          ],
          cloudIf: [
            'Você usa LLMs menos de 100 horas/mês',
            'Sua carga de trabalho é esporádica ou experimental',
            'Precisa de níveis de GPU caros demais para possuir (H100, A100 80GB)',
            'Não quer manutenção nem custo de capital inicial',
          ],
          quick: [
            'Use a calculadora acima com seus números reais',
            'Abaixo de 100 h/mês → alugar na nuvem',
            '500+ h/mês ou contínuo → o local costuma compensar',
            '100–500 h/mês → preço do hardware e tarifa de energia decidem',
          ],
        },
      },
      finalCta: {
        title: 'Próximos passos conforme o que você calculou',
        content: '- **Uso baixo (abaixo de 100 h/mês):** [compare preços atuais de GPU na nuvem](/pt/local-llms/cloud-gpu-rental-comparison-2026)\n- **Modelos pequenos, uso diário:** [melhores mini PCs para LLM local](/pt/local-llms/best-mini-pcs-local-llm)\n- **7B–14B, servidor 24/7:** [análise do Beelink SER8](/pt/smart-home/beelink-ser8-local-ai-review) ou [melhor mini PC AMD](/pt/local-llms/best-amd-mini-pc-local-llm-2026)\n- **Modelos 30B+, uso local intenso:** [guia de construção de workstation](/pt/local-llms/local-llm-workstation-build)\n- **Classe 70B, uso contínuo:** [guia de construção de workstation GPU da PromptQuorum](/pt/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'A IA local é sempre mais barata que a nuvem?',
            a: 'Não. O hardware local só é mais barato acima de um limite de uso que depende do preço do hardware, da tarifa de energia e da tarifa da nuvem. No exemplo desta página (sistema RTX 4090 de US$ 3.300, sem revenda, 36 meses de uso), ele fica em cerca de 113 horas por mês contra US$ 0,89/h e cerca de 350 contra US$ 0,34/h. Abaixo do seu próprio limite, alugar na nuvem é mais barato.',
          },
          {
            q: 'Quantas horas são necessárias para comprar hardware local compensar?',
            a: 'Para o sistema de exemplo com RTX 4090 de US$ 3.300, o ponto de equilíbrio contra a RunPod Secure Cloud (US$ 0,89/h) é de cerca de 4.060 horas (17 meses a 240 h/mês); contra a Community Cloud (US$ 0,34/h), cerca de 12.520 horas (52 meses). Com US$ 1.000 de revenda, cai para cerca de 2.830 e 8.730 horas. Preço do hardware, potência e energia são valores de exemplo: use a calculadora acima com os seus.',
          },
          {
            q: 'A energia elétrica está incluída nas estimativas de custo da IA local?',
            a: 'Deveria estar, e muitas vezes falta em comparações simples. Um sistema de 450 W usado 8 horas por dia soma cerca de US$ 18/mês com um valor de exemplo de US$ 0,17/kWh, ou cerca de US$ 40/mês a US$ 0,37/kWh. A calculadora acima permite informar a sua própria tarifa.',
          },
          {
            q: 'Quanto custa rodar um LLM local em comparação com a nuvem?',
            a: 'No exemplo prático, alugar uma RTX 4090 na RunPod custa cerca de US$ 82 por mês a US$ 0,34/h ou US$ 214 a US$ 0,89/h por 240 horas, sem custo inicial. O sistema local custa US$ 3.300 de entrada mais cerca de US$ 18 de energia por mês. O que sai mais barato depende de quanto tempo você o usar: veja a tabela de ponto de equilíbrio acima.',
          },
          {
            q: 'Uma assinatura de IA é mais barata que alugar ou comprar uma GPU?',
            a: 'Uma assinatura cobra uma mensalidade fixa com os limites de uso do provedor, uma GPU alugada é cobrada por hora e uma GPU comprada custa dinheiro de entrada. Para as contas de comprar versus assinar, veja [GPU vs ChatGPT Plus 2026](/pt/local-llms/gpu-vs-ai-subscription-roi) e [LLMs locais vs ChatGPT Plus](/pt/local-llms/local-llms-vs-chatgpt-plus).',
          },
          {
            q: 'Um Mac é bom para LLMs locais?',
            a: 'Macs com muita memória unificada conseguem rodar modelos grandes (classe 70B) com baixo consumo, o que melhora o custo de propriedade, sobretudo em países com energia cara. Veja o guia de Apple Silicon linkado acima para mais detalhes.',
          },
          {
            q: '24 GB de VRAM bastam para LLMs locais?',
            a: '24 GB (RTX 3090 ou RTX 4090) rodam modelos de até cerca de 30–34B parâmetros com quantização de 4 bits, o que cobre a maioria dos casos de um único usuário. Modelos de classe 70B precisam de cerca de 48 GB, obtidos com configurações de GPU dupla ou Macs com muita memória unificada.',
          },
          {
            q: 'Devo comprar uma RTX 4090 ou alugar tempo de GPU na nuvem?',
            a: 'Compre se você espera por vários anos um uso contínuo acima do seu próprio ponto de equilíbrio e consegue manter o hardware ocupado; no exemplo de 36 meses sem revenda, isso dá cerca de 113 horas por mês contra US$ 0,89/h e cerca de 350 contra US$ 0,34/h. Alugue se o seu uso for ocasional ou irregular, ou se você ainda estiver validando a carga de trabalho: alugar evita por completo o custo inicial de uma RTX 4090 (nova US$ 2.000–3.000 no mercado dos EUA segundo a InsiderLLM, sem data, consultado em 27 de novembro de 2026).',
          },
          {
            q: 'Qual é a forma mais barata de rodar um LLM local?',
            a: 'Para o menor custo inicial, um mini PC pequeno costuma ser a configuração local dedicada mais econômica (classe N150 por menos de US$ 500 para uso leve de 7B, ou classe Ryzen em uma faixa de exemplo de US$ 500–1.000 para modelos de 7B–14B). Com pouco volume, alugar GPU na nuvem sem comprar hardware custa menos.',
          },
          {
            q: 'Rodar IA localmente significa que meus dados nunca saem do meu computador?',
            a: 'Com inferência local por meio de ferramentas como o Ollama, os seus prompts são processados por um modelo no seu próprio hardware em vez de um provedor de nuvem. O Ollama documenta que você pode usar apenas modelos locais e desativar os recursos de nuvem. Downloads de modelos, verificações de atualização e outros programas da máquina ainda podem usar a rede.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: 'Leitura Relacionada',
        items: [
          '[Comparação de Custos: LLM Local vs GPU na Nuvem](/pt/local-llms/local-llm-vs-cloud-gpu-cost) -- horas de equilíbrio e custo por token',
          '[Comparação de Aluguel de GPU na Nuvem 2026](/pt/local-llms/cloud-gpu-rental-comparison-2026) -- preços por hora, cobrança e regiões',
          '[Guia de Construção de Workstation LLM Local](/pt/local-llms/local-llm-workstation-build) -- listas de peças para um sistema GPU local',
          '[Melhor GPU para Inferência LLM Local Abaixo de $500 (2026)](/pt/local-llms/best-gpu-for-llm-inference-under-500-2026) -- opções de GPU de entrada',
          '[GPU vs Assinatura de IA ROI](/pt/local-llms/gpu-vs-ai-subscription-roi) -- comprar ou assinar',
          '[Melhores Mini PCs para LLM Local](/pt/local-llms/best-mini-pcs-local-llm) -- opções de baixo consumo para um servidor 24/7',
          '[Guia de Apple Silicon para LLM Local 2026](/pt/local-llms/apple-silicon-local-llm-guide-2026) -- Macs com memória unificada',
          'Alugar em vez de comprar: [comparar provedores de GPU na nuvem](/pt/power-local-llm/best-cloud-gpu-providers), [análise do RunPod](/pt/power-local-llm/runpod-review), [análise do Vast.ai](/pt/power-local-llm/vast-ai-review), [análise do Clore.ai](/pt/power-local-llm/clore-ai-review) e [provedores de hospedagem de servidores GPU](/pt/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Preços da RunPod](https://www.runpod.io/pricing), lidos em 22 de novembro de 2026',
          '[Preços da Vast.ai](https://vast.ai/pricing) e a sua API pública de ofertas (ofertas de RTX 4090 de uma única GPU), lidos em 22 de novembro de 2026',
          '[Preços da Lambda](https://lambda.com/pricing), lidos em 22 de novembro de 2026',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), preços da RTX 4090 (usada: vendas, outubro de 2026; nova: sem data), consultado em 27 de novembro de 2026',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/), RTX 3090 usada a partir de 225 vendas no eBay US, 13–23 de novembro de 2026, consultado em 27 de novembro de 2026',
          '[Preços do Ollama](https://ollama.com/pricing) e [documentação de nuvem do Ollama](https://docs.ollama.com/cloud), lidos em 22 de novembro de 2026',
        ],
      },
    },
  },
  ko: {
    designSkin: 'hub',
    theme: 'Cost & Comparisons',
    heroImage: '/images/local-llm-cost-calculator-build-vs-rent-2026-overview-hero-ko.webp',
    title: '로컬 AI vs 클라우드 AI: 비용 계산기(구매 vs 렌탈) 2026',
    seoTitle: '로컬 AI vs 클라우드 AI: 비용 계산기(구매 vs 렌탈)',
    metaDescription: '로컬 GPU 구매와 클라우드 GPU 임대 비용 비교: 손익분기 계산 예시, RunPod·Vast.ai 가격, 직접 입력하는 계산기.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    dateModified: '2026-11-28',
    leadAnswerBlock: '**로컬 GPU와 클라우드 GPU 중 무엇이 저렴한지는 월 사용 시간이 좌우합니다. 아래 계산기에 직접 숫자를 넣어 손익분기를 확인하십시오.**',
    quickAnswerTop: {
      question: '로컬 LLM 서버를 직접 구축하는 것과 클라우드 GPU를 렌탈하는 것 중 어느 쪽이 더 저렴합니까?',
      answer: '고정된 규칙이 아니라 사용량에 달려 있습니다. 경험칙으로, 월 100시간 미만이라면 클라우드 GPU 렌탈(RunPod, Vast.ai)이 초기 비용이 없어 대체로 더 저렴합니다. 월 약 500시간을 초과하거나 상시 가동하는 경우, 전기 요금과 향후 재판매 가치를 반영하면 하드웨어 구매가 유리할 수 있습니다. 정확한 손익분기점을 알려면 아래 계산기에 본인의 사용 시간, 하드웨어 가격, 전기 요금을 입력하세요.',
      bullets: [
        '월 20시간 미만: 렌탈 — 로컬은 회수하기 어렵습니다',
        '월 20~100시간: 대체로 렌탈이 유리',
        '월 100~250시간: 신중히 비교 — 하드웨어 가격과 전기 요금이 관건',
        '월 250~500시간: 로컬 하드웨어가 매력적이기 시작함',
        '월 500시간 이상 또는 상시 가동: 총비용 기준으로 로컬이 보통 유리',
        '완전한 TCO = 하드웨어 가격 + 전기 요금 − 재판매 가치, 단순히 가격 ÷ 클라우드 요금이 아님',
      ],
      updatedDate: '2026-11-28',
    },
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: '손익분기는 사용 시간에 달려 있습니다. 이 페이지의 예시(3,300달러 RTX 4090 시스템, 재판매 가치 없음, 36개월)에서는 0.89달러/시간 대비 월 약 113시간, 0.34달러/시간 대비 월 약 350시간부터 로컬이 유리합니다. 계산기에 본인 수치를 입력하십시오.',
      },
      {
        type: 'plain-terms',
        text: '이 페이지에는 계산기가 있습니다. 월간 사용 시간, 클라우드 GPU 요금, 로컬 하드웨어 가격, 전기 요금, 예상 사용 기간을 입력하면 클라우드 GPU 렌탈과 로컬 하드웨어 구매 중 어느 쪽이 본인에게 더 저렴한지 알려줍니다.',
      },
    ],
    affiliateLinks: [
      { productName: 'RunPod GPU Rental', url: 'https://www.runpod.io', productCategory: 'cloud-gpu' },
      { productName: 'Vast.ai GPU Rental', url: 'https://vast.ai', productCategory: 'cloud-gpu' },
      { productName: 'RTX 4090 (Amazon)', url: 'https://www.amazon.com/s?k=RTX+4090', productCategory: 'gpu' },
    ],
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '핵심은 월 사용 시간입니다',
          'RunPod는 RTX 4090을 0.34달러/시간(Community)과 0.89달러/시간(Secure)에 올려 두었고, Vast.ai의 중단 가능 오퍼는 0.26~0.60달러/시간이었습니다(2026년 11월 22일 확인)',
          '예시 입력: 로컬 RTX 4090 시스템 3,300달러, 450W, 0.17달러/kWh(전기료 약 0.08달러/시간) — 본인 값으로 바꾸십시오',
          '이 예시의 손익분기: 0.89달러/시간 대비 약 4,060시간(월 240시간 기준 17개월), 0.34달러/시간 대비 약 12,520시간(52개월)',
          '재판매 가치 1,000달러를 반영하면 같은 예시의 손익분기는 약 2,830시간과 8,730시간입니다',
          '450W 시스템의 전기료는 0.17달러/kWh, 월 240시간 기준 월 약 18달러입니다',
          '월 약 100시간 미만의 간헐적·일회성·실험적 사용에서는 클라우드가 대체로 더 저렴합니다',
          '매일 꾸준한 추론, 민감한 데이터, 월 500시간 이상이며 하드웨어가 계속 가동되면 로컬이 적합할 수 있습니다',
        ],
      },
      usageTiers: {
        title: '빠른 답변: 어떤 방식이 내 사용량에 맞을까?',
        content: '시간 구간은 편집상의 경험칙이며 엄격한 규칙이 아닙니다 — 하드웨어 가격, 클라우드 요금, 전기 요금, 재판매 가치가 실제 손익분기점을 좌우합니다. 정확한 답은 아래 계산기에서 확인하세요.',
        columns: ['월간 시간', '권장 사항'],
        rows: [
          { '월간 시간': '20시간 미만', '권장 사항': '렌탈 — 로컬은 회수하기 어려움' },
          { '월간 시간': '20~100시간', '권장 사항': '대체로 렌탈이 유리' },
          { '월간 시간': '100~250시간', '권장 사항': '하드웨어 가격에 따라 신중히 비교' },
          { '월간 시간': '250~500시간', '권장 사항': '로컬 하드웨어가 매력적이 됨' },
          { '월간 시간': '500시간 이상', '권장 사항': '총비용 기준 로컬이 보통 유리' },
          { '월간 시간': '상시 가동(24/7)', '권장 사항': '로컬이 유리한 경우가 많음: 직접 계산' },
        ],
      },
      costCalculatorTool: {
        title: '인터랙티브 비용 계산기: 로컬 vs 클라우드',
        content: '월간 사용 시간, 클라우드 GPU 요금, 로컬 하드웨어 가격, 전기 요금, 예상 재판매 가치, 사용 기간을 입력하세요. 아래 계산기가 클라우드 월 비용, 로컬 운영 비용, 로컬 총소유비용, 손익분기점을 실시간으로 계산합니다. 모든 수치는 입력값과 조사된 참고 가격을 바탕으로 산출한 추정치이며, PromptQuorum이 직접 측정한 결과가 아닙니다.',
        component: 'CostCalculator',
      },
      workedExample: {
        title: '계산 예시: RTX 4090 시스템의 손익분기',
        content: '**손익분기 시간 = (하드웨어 가격 − 재판매 가치) ÷ (클라우드 시간당 요금 − 시간당 전기료).** 시간당 전기료 = 와트 ÷ 1,000 × kWh당 요금.\n\n예시 입력(본인 값으로 바꾸십시오): RTX 4090 시스템 3,300달러([InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)은 미국 시장의 신품 카드 단품을 날짜 표기 없이 2,000~3,000달러로 제시합니다. 2026년 11월 27일 확인), 450W, 0.17달러/kWh(0.45 × 0.17 = 0.0765달러/시간), 월 240시간 사용. 클라우드 요금은 RunPod의 RTX 4090 정가이며 2026년 11월 22일에 확인했습니다.\n\n월 240시간 기준 클라우드 청구액은 약 214달러(Secure) 또는 약 82달러(Community)이고, 로컬 시스템의 전기료는 약 18달러입니다. 이 결과에는 수리비, 본인의 시간, 양쪽의 가격 변동이 포함되지 않습니다. 위 계산기는 같은 공식으로 본인의 숫자를 계산합니다.',
        columns: ['클라우드 요금', '손익분기', '월 240시간 기준', '재판매 1,000달러 반영'],
        rows: [
          { '클라우드 요금': '0.89달러/시간 (RunPod Secure Cloud)', '손익분기': '약 4,060시간', '월 240시간 기준': '약 17개월', '재판매 1,000달러 반영': '약 2,830시간(약 12개월)' },
          { '클라우드 요금': '0.34달러/시간 (RunPod Community Cloud)', '손익분기': '약 12,520시간', '월 240시간 기준': '약 52개월', '재판매 1,000달러 반영': '약 8,730시간(약 36개월)' },
        ],
      },
      hardwareDecision: {
        title: '하드웨어 결정 표',
        content: '구체적인 구성 가격을 산출하기 전에 목표 모델 크기와 사용 패턴을 하드웨어 등급에 맞춰보세요. 미니 PC와 Mac의 가격대는 시스템 가격의 예시(미국 달러)이며 견적이 아닙니다. GPU 행은 시스템 전체가 아닌 카드 단품의 미국 시장 가격이며 2026년 11월 27일에 확인했습니다. 중고 RTX 3090: 2026년 11월 13~23일 eBay US 판매 완료 225건, 배송비 제외([InsiderLLM 중고 GPU 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). 중고 RTX 4090: 2026년 10월 eBay 판매 완료 216건이며, RTX 4090 신품 가격은 날짜 표기가 없습니다([InsiderLLM 가격 페이지](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)). 48GB 행은 중고 RTX 3090 2장(2 × 1,500~1,725달러 = 3,000~3,450달러)입니다. 나머지 시스템 비용은 별도입니다. 국내 가격은 세금과 수입 비용에 따라 다릅니다.',
        columns: ['등급', 'VRAM / RAM', '최적 용도', '가격대'],
        rows: [
          { '등급': 'N150 미니 PC', 'VRAM / RAM': '16GB RAM', '최적 용도': '가벼운 채팅, 7B 이하', '가격대': '500달러 미만' },
          { '등급': 'Ryzen 미니 PC', 'VRAM / RAM': '32~64GB RAM', '최적 용도': '7B~14B 일상 사용, 24/7 서버', '가격대': '500~1,000달러' },
          { '등급': 'RTX 3090(중고)', 'VRAM / RAM': '24GB VRAM', '최적 용도': '30B Q4까지, 여기서 가장 저렴한 24GB 카드', '가격대': '1,500~1,725달러(카드 단품, 미국 판매 완료, 2026.11.13~23)' },
          { '등급': 'RTX 4090', 'VRAM / RAM': '24GB VRAM', '최적 용도': '34B Q4까지, RTX 3090보다 빠름', '가격대': '중고 2,575~3,010달러, 신품 2,000~3,000달러(카드 단품)' },
          { '등급': '48GB GPU 구성(중고 RTX 3090 2장)', 'VRAM / RAM': '48GB VRAM', '최적 용도': '70B Q4까지, 개발·연구', '가격대': '약 3,000~3,450달러(카드 2장만)' },
          { '등급': 'Mac(통합 메모리)', 'VRAM / RAM': '48~128GB 통합', '최적 용도': 'MLX로 70B급(64GB 이상), 저전력', '가격대': '2,000~4,000달러 이상' },
        ],
      },
      rentPath: {
        title: '경로 1 — 낮은 사용량: 클라우드 GPU 렌탈',
        content: '실험, 가끔 하는 파인튜닝, 변동성 있는 워크로드, 또는 하드웨어 투자 전 테스트에는 렌탈이 적합합니다. 사용한 시간만큼만 비용을 지불하며 유지 관리가 필요 없고, 구매 시 수천 달러가 드는 GPU 등급(H100, A100 80GB)에도 즉시 접근할 수 있습니다.\n\n현재 클라우드 GPU 가격 비교: [RunPod 가격](https://www.runpod.io/pricing)과 [Vast.ai 가격](https://vast.ai/pricing)은 편집상 참고 링크이며 제휴 링크가 아닙니다 — PromptQuorum은 두 제공업체 어디와도 수수료 관계가 없습니다.',
      },
      miniPcPath: {
        title: '경로 2 — 중간 사용량: 미니 PC가 GPU 워크스테이션을 능가할 수 있음',
        content: '매일 사용하는 7B~14B 모델 — 채팅, Home Assistant 자동화, 24/7 Ollama 운영 — 에는 Ryzen 미니 PC가 개별 GPU 시스템보다 전력을 덜 쓰고 공간을 덜 차지하는 경우가 많습니다. 24/7 Ollama 서버로서의 검토는 [Beelink SER8 리뷰](/ko/smart-home/beelink-ser8-local-ai-review)(사양 기반 추정이며 PromptQuorum 벤치마크가 아닙니다)를, 현재 라인업은 [로컬 LLM 최고의 미니 PC 가이드](/ko/local-llms/best-mini-pcs-local-llm)와 [로컬 LLM 최고의 AMD 미니 PC](/ko/local-llms/best-amd-mini-pc-local-llm-2026)를 참고하세요. [Minisforum UM890 Pro](/ko/smart-home/minisforum-um890-pro-local-ai-review), [GMKtec G3 Plus](/ko/smart-home/gmktec-g3-plus-local-ai-review)도 포함됩니다.',
      },
      gpuPath: {
        title: '경로 3 — 집중적인 로컬 AI: GPU 워크스테이션',
        content: '30B 이상 모델, 파인튜닝, 빠른 다중 사용자 추론이 필요하다면 개별 GPU 워크스테이션이 적합한 등급입니다. 중요한 지표는 단순 벤치마크 속도가 아니라 달러당 VRAM입니다 — VRAM이 애초에 어떤 모델 크기를 로드할 수 있는지를 결정합니다. [로컬 LLM 워크스테이션 구축 가이드](/ko/local-llms/local-llm-workstation-build)와 [PromptQuorum의 GPU 워크스테이션 구축 가이드](/ko/power-local-llm/best-workstation-build-local-ai-2026)를 참고하세요.',
      },
      whatToBuy: {
        title: '"무엇을 사야 할까?" 가격대별',
        content: '**500달러 미만** — 전용 AI 하드웨어는 사지 마십시오. 이미 가진 장비를 쓰거나, 가끔 필요할 때 클라우드 GPU를 임대하십시오.\n\n**500~1,000달러** — RAM 32GB 이상의 Ryzen 미니 PC. [로컬 LLM용 최고의 AMD 미니 PC](/ko/local-llms/best-amd-mini-pc-local-llm-2026)와 [Beelink SER8 리뷰](/ko/smart-home/beelink-ser8-local-ai-review)를 참고하십시오.\n\n**1,000~1,800달러** — 더 강력한 미니 PC. [최고의 미니 PC 가이드](/ko/local-llms/best-mini-pcs-local-llm)와 입문용 GPU 배경으로 [500달러 미만 최고의 GPU 가이드](/ko/local-llms/best-gpu-for-llm-inference-under-500-2026)를 참고하십시오.\n\n**1,800~2,500달러** — 중고 RTX 3090 구성(예산대 예시. 카드 단품은 [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)에서 1,500~1,725달러로 게재, 판매 완료 매물, 2026-11-23 기준 데이터). 따라서 이 예산대에서 나머지 시스템에 남는 금액은 약 75~1,000달러이므로, 하한선으로는 완전한 새 구성을 마련하지 못할 수 있습니다. [로컬 LLM 워크스테이션 구축 가이드](/ko/local-llms/local-llm-workstation-build)를 참고하십시오.\n\n**3,000~4,500달러** — RTX 4090 워크스테이션(예산대 예시. [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) 기준 카드 단품은 중고 판매 완료 2,575~3,010달러(2026년 10월), 신품 2,000~3,000달러(날짜 표기 없음)이며 나머지 시스템 비용은 별도) 또는 대용량 통합 메모리 Mac. [워크스테이션 구축 가이드](/ko/local-llms/local-llm-workstation-build)와 [Apple Silicon 로컬 LLM 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026)를 참고하십시오.\n\n**5,000달러 이상** — VRAM 48GB 이상, 멀티 GPU 또는 워크스테이션급 구성(중고 RTX 3090 2장만으로도 InsiderLLM 판매 완료 매물 범위에서 약 3,000~3,450달러이며, RTX PRO 6000 Blackwell 96GB는 [TweakTown](https://www.tweaktown.com/news/113098/nvidias-rtx-pro-6000-blackwell-gpu-price-almost-doubles-reaching-16-000/index.html)에 따르면 2026-08-13 기준 약 16,000달러로 게재). 먼저 가동률을 계산하십시오. 이 구간은 꾸준하고 높은 사용에서만 본전을 뽑습니다. [PromptQuorum의 GPU 워크스테이션 구축 가이드](/ko/power-local-llm/best-workstation-build-local-ai-2026)를 참고하십시오.\n\n아직 구매할 준비가 되지 않았다면 대신 대여할 수 있습니다. [클라우드 GPU 제공업체 비교](/ko/power-local-llm/best-cloud-gpu-providers)를 보시거나 [RunPod 리뷰](/ko/power-local-llm/runpod-review), [Vast.ai 리뷰](/ko/power-local-llm/vast-ai-review), [Clore.ai 리뷰](/ko/power-local-llm/clore-ai-review)를 읽어 보시고, [GPU 서버 호스팅 제공업체](/ko/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)도 확인해 보십시오.',
      },
      hardwarePicks: {
        title: '카테고리별 하드웨어 추천',
        content: '- **예산형:** [GMKtec G3 Plus](/ko/smart-home/gmktec-g3-plus-local-ai-review) — 7B급 모델용 입문 미니 PC\n- **중급:** [Beelink SER8](/ko/smart-home/beelink-ser8-local-ai-review) — 7B~14B, Home Assistant, 24/7 Ollama 서버. Ryzen 대안으로 [Minisforum UM890 Pro](/ko/smart-home/minisforum-um890-pro-local-ai-review)\n- **GPU 가성비:** RTX 3090(중고 카드는 [InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)에서 1,500~1,725달러로 게재, 2026-11-23 기준 데이터) — RTX 4090보다 카드 가격이 낮은 24GB VRAM\n- **GPU 성능:** RTX 4090(신품 2,000~3,000달러(날짜 없음), 중고 판매 완료 2,575~3,010달러(2026년 10월), InsiderLLM 기준 미국 시장) — RTX 3090보다 빠르지만 더 비쌉니다. [워크스테이션 구축 가이드](/ko/local-llms/local-llm-workstation-build)를 참고하십시오\n- **Apple 옵션:** 대용량 통합 메모리 Mac으로 70B 이상 모델을 낮은 전력으로 — [Apple Silicon 로컬 LLM 가이드](/ko/local-llms/apple-silicon-local-llm-guide-2026)를 참고하십시오\n\n위 RTX 3090/4090 및 Apple 링크는 제품·편집상의 참고 링크이며, PromptQuorum에는 제휴 프로그램이 없고 하드웨어 구매에 대한 수수료도 받지 않습니다.',
      },
      dontBuy: {
        title: '로컬 AI 하드웨어를 구매하지 말아야 할 때',
        content: '- **가끔 사용**(월 약 10시간 이하) — 하드웨어가 대부분 유휴 상태로 있게 됩니다\n- **매우 변동성 있는 워크로드** — 어떤 달은 집중적, 어떤 달은 전혀 없음\n- **프로젝트마다 다른 GPU 등급 필요** — 클라우드는 24GB와 80GB 사이를 즉시 전환할 수 있습니다\n- **하드웨어 유지 관리를 원하지 않음** — 드라이버, 냉각, 업그레이드, 고장 대응이 모두 로컬에서는 본인 몫입니다\n- **아주 큰 모델이 가끔만 필요함** — H100을 일주일 렌탈하는 편이 구매보다 낫습니다',
      },
      whenLocalWins: {
        title: '로컬 AI가 유리한 경우',
        content: '- **매일의 예측 가능한 사용** — 시간이 빠르게 쌓입니다. 위의 사용 시간별 표를 참고하십시오\n- **비용 예측 가능성** — 고정된 하드웨어 비용은 변동하는 클라우드 청구서보다 예산을 세우기 쉽습니다\n- **민감한 데이터 또는 오프라인 요구** — 프롬프트는 사업자의 서버가 아니라 본인의 기기에서 처리됩니다. 모델 다운로드와 업데이트 확인은 여전히 네트워크를 사용합니다\n- **직접 실행하는 모델에는 요청당 요금이 없음** — 로컬 모델은 본인의 하드웨어를 쓰며, Ollama의 별도 클라우드 서비스에는 플랜별 세션·주간 사용 한도가 있습니다([Ollama 가격](https://ollama.com/pricing))\n- **여러 해에 걸친 사용 기간** — 하드웨어를 충분히 가동시킬 수 있는 경우',
      },
      electricity: {
        title: '국가별 전기 요금',
        content: '450W 시스템을 월 240시간(하루 8시간) 사용하면 108kWh를 소비합니다. 아래 예시 요금에서는 월 약 18달러(미국)에서 약 40달러(독일)입니다. 이 요금은 계산기 프리셋과 같은 예시 입력이며 출처가 있는 평균값이 아닙니다. 본인의 요금을 사용하십시오.',
        columns: ['국가', '예시 요금', '450W, 월 240시간'],
        rows: [
          { '국가': '미국', '예시 요금': '0.17달러/kWh', '450W, 월 240시간': '18달러/월' },
          { '국가': '독일', '예시 요금': '0.37달러/kWh', '450W, 월 240시간': '40달러/월' },
          { '국가': '영국', '예시 요금': '0.33달러/kWh', '450W, 월 240시간': '36달러/월' },
          { '국가': '프랑스', '예시 요금': '0.22달러/kWh', '450W, 월 240시간': '24달러/월' },
        ],
      },
      cloudProviders: {
        title: '클라우드 GPU 임대 비교',
        content: 'RTX 4090 정가이며 2026년 11월 22일에 확인했습니다. Vast.ai 수치는 공개 오퍼 API의 단일 GPU 오퍼이며 분 단위로 바뀝니다.',
        columns: ['제공업체', 'RTX 4090', '과금 단위', '비고'],
        rows: [
          { '제공업체': 'RunPod', 'RTX 4090': '0.34~0.89달러/시간(Community~Secure)', '과금 단위': '초 단위', '비고': '일반용과 데이터센터용 GPU를 한 목록에 제공' },
          { '제공업체': 'Vast.ai', 'RTX 4090': '중단 가능 0.26~0.60달러/시간, 온디맨드 0.38~2.34달러/시간', '과금 단위': '초 단위', '비고': '마켓플레이스. 호스트 품질은 오퍼마다 다름' },
          { '제공업체': 'Lambda', 'RTX 4090': '목록에 없음', '과금 단위': '분 단위', '비고': 'H100 3.79~4.89달러/시간, A100 40GB 1.99달러/시간' },
        ],
      },
      finalVerdict: {
        title: '최종 결론: 보편적인 승자는 없습니다',
        content: '이 글의 사용 시간 기준 경험칙은 참고용이지 절대적인 법칙이 아닙니다. 실제 손익분기점은 클라우드 요금, 하드웨어 가격, 전기 요금, 재판매 가치에 따라 달라집니다 — 위 계산기는 고정된 임계값이 아니라 본인의 입력값에 대한 실제 답을 계산합니다.',
        decisionBlock: {
          title: '다음 기준으로 결정하세요',
          localIf: [
            '사용 시간이 계산한 손익분기를 넘음(예: 상시 가동)',
            '수년에 걸친 비용 예측 가능성이 필요함',
            '데이터 프라이버시 또는 오프라인 기능이 필수임',
            '하드웨어를 유휴 상태가 아닌 충분히 활용할 수 있음',
          ],
          cloudIf: [
            'LLM을 월 100시간 미만 사용함',
            '워크로드가 산발적이거나 실험적임',
            '소유하기에는 너무 비싼 GPU 등급이 필요함(H100, A100 80GB)',
            '유지 관리나 초기 자본 지출을 원하지 않음',
          ],
          quick: [
            '실제 수치로 위 계산기를 사용하세요',
            '월 100시간 미만 → 클라우드 렌탈',
            '월 500시간 이상 또는 상시 가동 → 로컬이 유리한 경우가 많음',
            '월 100~500시간 → 하드웨어 가격과 전기 요금이 관건',
          ],
        },
      },
      finalCta: {
        title: '계산 결과에 따른 다음 단계',
        content: '- **낮은 사용량(월 100시간 미만):** [현재 클라우드 GPU 가격 비교](/ko/local-llms/cloud-gpu-rental-comparison-2026)\n- **소형 모델, 매일 사용:** [로컬 LLM 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm)\n- **7B~14B, 24/7 서버:** [Beelink SER8 리뷰](/ko/smart-home/beelink-ser8-local-ai-review) 또는 [최고의 AMD 미니 PC](/ko/local-llms/best-amd-mini-pc-local-llm-2026)\n- **30B 이상 모델, 집중적인 로컬 사용:** [워크스테이션 구축 가이드](/ko/local-llms/local-llm-workstation-build)\n- **70B급, 상시 가동:** [PromptQuorum의 GPU 워크스테이션 구축 가이드](/ko/power-local-llm/best-workstation-build-local-ai-2026)',
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '로컬 AI가 항상 클라우드보다 저렴합니까?',
            a: '아닙니다. 로컬 하드웨어는 하드웨어 가격, 전기 요금, 클라우드 요금에 따라 정해지는 사용량 기준선을 넘어야 저렴해집니다. 이 페이지의 예시(3,300달러 RTX 4090 시스템, 재판매 가치 없음, 36개월 사용)에서 기준선은 0.89달러/시간 대비 월 약 113시간, 0.34달러/시간 대비 월 약 350시간입니다. 본인의 기준선 아래에서는 클라우드 임대가 더 저렴합니다.',
          },
          {
            q: '몇 시간을 써야 로컬 하드웨어를 사는 것이 이득입니까?',
            a: '예시 RTX 4090 시스템(3,300달러)의 손익분기는 RunPod Secure Cloud(0.89달러/시간) 대비 약 4,060시간(월 240시간 기준 17개월), Community Cloud(0.34달러/시간) 대비 약 12,520시간(52개월)입니다. 재판매 가치 1,000달러를 반영하면 약 2,830시간과 8,730시간으로 줄어듭니다. 하드웨어 가격, 소비 전력, 전기 요금은 예시 입력이므로 위 계산기에 본인의 숫자를 넣어 보십시오.',
          },
          {
            q: '로컬 AI 비용 추정에 전기료가 포함됩니까?',
            a: '포함되어야 하지만 단순 비교에서는 빠지는 경우가 많습니다. 450W 시스템을 하루 8시간 사용하면 예시 0.17달러/kWh에서 월 약 18달러, 0.37달러/kWh에서 월 약 40달러가 더해집니다. 위 계산기에서 본인의 요금을 입력할 수 있습니다.',
          },
          {
            q: '로컬 LLM 운영 비용은 클라우드와 비교하면 어떻습니까?',
            a: '계산 예시에서 RunPod의 RTX 4090을 240시간 임대하면 0.34달러/시간일 때 월 약 82달러, 0.89달러/시간일 때 약 214달러이며 초기 비용은 없습니다. 로컬 시스템은 초기 3,300달러에 월 약 18달러의 전기료가 듭니다. 어느 쪽이 저렴한지는 얼마나 오래 쓰느냐에 달려 있습니다. 위의 손익분기 표를 참고하십시오.',
          },
          {
            q: 'AI 구독이 GPU 임대나 구매보다 저렴합니까?',
            a: '구독은 사업자의 사용 한도 안에서 고정 월 요금을 받고, 임대 GPU는 시간 단위로 청구되며, 구매한 GPU는 초기 비용이 듭니다. 구매와 구독의 비교는 [GPU vs ChatGPT Plus 2026](/ko/local-llms/gpu-vs-ai-subscription-roi)과 [로컬 LLM vs ChatGPT Plus](/ko/local-llms/local-llms-vs-chatgpt-plus)를 참고하십시오.',
          },
          {
            q: 'Mac은 로컬 LLM에 적합합니까?',
            a: '대용량 통합 메모리 Mac은 큰 모델(70B급)을 낮은 전력으로 실행할 수 있어 특히 전기 요금이 높은 나라에서 소유 비용 측면에서 유리할 수 있습니다. 자세한 내용은 위에 링크한 Apple Silicon 가이드를 참고하십시오.',
          },
          {
            q: '로컬 LLM에 VRAM 24GB로 충분합니까?',
            a: '24GB(RTX 3090 또는 RTX 4090)는 4비트 양자화에서 약 30~34B 파라미터까지의 모델을 실행할 수 있어 개인 사용 사례 대부분을 다룹니다. 70B급 모델에는 약 48GB가 필요하며 듀얼 GPU 구성이나 대용량 통합 메모리 Mac으로 가능합니다.',
          },
          {
            q: 'RTX 4090을 사야 합니까, 클라우드 GPU를 임대해야 합니까?',
            a: '여러 해에 걸쳐 본인의 손익분기를 넘는 꾸준한 사용이 예상되고 하드웨어를 계속 가동시킬 수 있다면 구매하십시오. 재판매 가치 없는 36개월 예시에서는 0.89달러/시간 대비 월 약 113시간, 0.34달러/시간 대비 월 약 350시간입니다. 사용이 가끔이거나 간헐적이거나 아직 워크로드를 검증하는 단계라면 임대하십시오. 임대하면 RTX 4090의 초기 비용(미국 시장 신품 2,000~3,000달러, InsiderLLM, 날짜 표기 없음, 2026년 11월 27일 확인)을 완전히 피할 수 있습니다.',
          },
          {
            q: '로컬 LLM을 돌리는 가장 저렴한 방법은 무엇입니까?',
            a: '초기 비용을 가장 낮추려면 보통 소형 미니 PC가 가장 저렴한 전용 로컬 구성입니다(가벼운 7B 사용에는 500달러 미만의 N150급, 7B~14B 모델에는 예시 가격대 500~1,000달러의 Ryzen급). 사용량이 적다면 하드웨어를 전혀 사지 않는 클라우드 GPU 임대가 더 저렴합니다.',
          },
          {
            q: 'AI를 로컬에서 실행하면 데이터가 내 컴퓨터 밖으로 나가지 않습니까?',
            a: 'Ollama 같은 도구로 로컬 추론을 하면 프롬프트는 클라우드 사업자가 아니라 본인 하드웨어의 모델이 처리합니다. Ollama는 로컬 모델만 사용하고 클라우드 기능을 끌 수 있다고 설명합니다. 모델 다운로드, 업데이트 확인, 기기의 다른 소프트웨어는 여전히 네트워크를 사용할 수 있습니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        heading: '관련 읽을거리',
        items: [
          '[로컬 LLM vs 클라우드 GPU 비용 비교](/ko/local-llms/local-llm-vs-cloud-gpu-cost) -- 손익분기 시간과 token당 비용',
          '[클라우드 GPU 렌탈 비교 2026](/ko/local-llms/cloud-gpu-rental-comparison-2026) -- 시간당 가격, 과금, 리전',
          '[로컬 LLM 워크스테이션 구축 가이드](/ko/local-llms/local-llm-workstation-build) -- 로컬 GPU 시스템 부품 목록',
          '[$500 이하 로컬 LLM 추론 최고의 GPU (2026)](/ko/local-llms/best-gpu-for-llm-inference-under-500-2026) -- 입문용 GPU 선택지',
          '[GPU vs AI 구독 ROI](/ko/local-llms/gpu-vs-ai-subscription-roi) -- 구매할까 구독할까',
          '[로컬 LLM 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm) -- 24/7 서버용 저전력 선택지',
          '[Apple Silicon 로컬 LLM 가이드 2026](/ko/local-llms/apple-silicon-local-llm-guide-2026) -- 통합 메모리 Mac',
          '구매 대신 대여: [클라우드 GPU 제공업체 비교](/ko/power-local-llm/best-cloud-gpu-providers), [RunPod 리뷰](/ko/power-local-llm/runpod-review), [Vast.ai 리뷰](/ko/power-local-llm/vast-ai-review), [Clore.ai 리뷰](/ko/power-local-llm/clore-ai-review), [GPU 서버 호스팅 제공업체](/ko/power-local-llm/gpu-server-hosting-cudo-cherry-database-mart)',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[RunPod 가격](https://www.runpod.io/pricing), 2026년 11월 22일 확인',
          '[Vast.ai 가격](https://vast.ai/pricing) 및 공개 오퍼 API(RTX 4090 단일 GPU 오퍼), 2026년 11월 22일 확인',
          '[Lambda 가격](https://lambda.com/pricing), 2026년 11월 22일 확인',
          '[InsiderLLM: NVIDIA GPU Prices Are Rising](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), RTX 4090 가격(중고: 2026년 10월 판매 완료가, 신품: 날짜 없음), 2026년 11월 27일 확인',
          '[InsiderLLM: Used GPU Buying Guide for Local AI](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/), 중고 RTX 3090(2026년 11월 13~23일 eBay US 판매 완료 225건), 2026년 11월 27일 확인',
          '[Ollama 가격](https://ollama.com/pricing) 및 [Ollama 클라우드 문서](https://docs.ollama.com/cloud), 2026년 11월 22일 확인',
        ],
      },
    },
  },
}
