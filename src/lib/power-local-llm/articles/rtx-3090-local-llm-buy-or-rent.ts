// Power Local LLM — RTX 3090 for Local LLMs: Should You Buy One or Rent One?
// Slug: rtx-3090-local-llm-buy-or-rent
//
// Affiliate buying guide, Mode B (dual-track local vs cloud) per
// skills/affiliate-writing/SKILL.md. Outbound product links use rel="nofollow"
// (no affiliate tags joined yet) and the neutral third-party-link notice.
// EN block first; other locales render "Coming Soon" until per-market prices
// are sourced — used-GPU pricing must not be USD-converted across markets.
//
// Prices: snapshot verified 1 September 2026, cross-checked across three
// independent used-GPU trackers (bestvaluegpu.com, gpudojo.com, plus the
// getdeploying.com/eBay-derived figures) and reconciled site-wide — this
// figure is now the canonical current-price reference used across every
// article on the site that prices a used RTX 3090; if you touch this
// number here, check for drift in the other ~12 files (search '3090' +
// '$') rather than letting one page diverge again.
//   Used RTX 3090 $850–$1,050, eBay averaging near $1,000 — up from
//     $600–$800 in spring 2026 (XDA, March 2026) during the memory shortage.
//   Cloud RTX 3090 — getdeploying.com provider table (8 providers, updated
//     1 September 2026) cross-checked against runpod.io's own model page.
//   Electricity $0.18/kWh — EIA US residential average 2026.
// freshness_tier is 'monthly': the affiliate guide caps price tables at 90
// days and used-GPU pricing moves faster than that.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-en.webp',
    title: 'RTX 3090 for Local LLMs in 2026: Should You Buy One or Rent One?',
    seoTitle: 'RTX 3090 for Local LLMs in 2026: Buy Used or Rent?',

    intro: 'The RTX 3090 is the cheapest way to get 24 GB of VRAM under your own desk, and renting the same card in the cloud costs cents per hour. This guide works out where the line between those two options actually falls.',
    metaDescription: 'A used RTX 3090 costs $850–$1,050 in 2026; renting one runs $0.12–$0.22/hour. Here is the buy-vs-rent break-even math on 24 GB of VRAM for local LLMs.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers and small teams deciding between buying a used 24 GB GPU and renting cloud GPU time for local LLM inference',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 local llm',
      'is the rtx 3090 still worth it',
      'used rtx 3090 price',
      'rtx 3090 vs cloud gpu rental',
      '24gb vram gpu for llm',
      'rtx 3090 ollama',
      'rtx 3090 70b model',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**Buy a used RTX 3090 if you will run it more than about four hours a day for the next two years, or if your data cannot leave your building. Rent one otherwise.** At $850–$1,050 used against $0.12–$0.22 per hour in the cloud, the card only pays for itself under sustained load — and in 2026 it costs more than it did in spring, which pushes the break-even further out than most buying guides admit.',

    quickAnswerTop: {
      en: {
        question: 'Is an RTX 3090 still worth buying for local LLMs?',
        answer: 'Yes, but only for sustained use or privacy-bound work. A used RTX 3090 gives you 24 GB of VRAM for $850–$1,050, which is still the cheapest route to running 27B-class models entirely on your own hardware. Renting the same GPU costs $0.12–$0.22 per hour, so at light use the cloud is cheaper for years.',
        bullets: [
          '24 GB VRAM, 936 GB/s bandwidth, 350 W — unchanged since 2020, still the cheapest 24 GB card',
          'Used price $850–$1,050; up from $600–$800 in spring 2026 because of the memory shortage',
          'Cloud rental $0.12/hr ([Vast.ai](https://Vast.ai)) to $0.22/hr (RunPod Community); median $0.15/hr across 8 providers',
          'Break-even against a $0.15/hr rental at 2 hours a day is roughly 17 years — at 8 hours a day it is about 4',
          'Buy for privacy, latency, always-on agents and constant fine-tuning; rent for bursts and experiments',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RTX 3090 for Local LLMs in 2026: Should You Buy One or Rent One?',
      description: 'Break-even analysis between buying a used NVIDIA RTX 3090 and renting the same GPU from cloud providers for local LLM inference, with 2026 pricing.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'en',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Developers and small teams running local LLM inference',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: 'Local Large Language Models' },
        { '@type': 'Thing', name: 'Cloud GPU Rental' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: 'Key Takeaways',
        numberedItems: [
          'A used RTX 3090 costs $850–$1,050 and gives you 24 GB of VRAM — still the cheapest way to own that much video memory.',
          'Renting the identical GPU costs $0.12/hour on Vast.ai and $0.22/hour on RunPod Community, with a median of $0.15/hour across eight providers.',
          'Once you subtract about $0.08/hour in electricity, buying only wins after roughly 12,000 GPU-hours against a median rental — about four years at eight hours a day.',
          'The card got more expensive during 2026, not cheaper: it was $600–$800 in spring. That moves the break-even further away, which is the opposite of what most buying guides assume.',
          'Buy for privacy, offline work, always-on agents and constant fine-tuning. Rent for bursts, experiments and anything you would otherwise leave idle.',
          'Resale value is the buy case\'s strongest argument: a 3090 that still sells for hundreds in two years turns most of the purchase into a deposit rather than a cost.',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: 'Decide in 30 Seconds',
        content: 'Both paths give you the same GPU and the same 24 GB of VRAM. The only real question is how many hours you will actually use it, and whether your data is allowed to leave your network.',
        decisionBlock: {
          title: 'Buy a used RTX 3090, or rent one?',
          localIf: [
            'You will use it more than about 4 hours a day, consistently',
            'Your data cannot leave your building — health, legal, client or regulated work',
            'You want an always-on agent, home assistant or overnight batch job',
            'You are fine-tuning or embedding regularly, not occasionally',
            'You already have a case, a 750 W+ PSU and somewhere to put the heat',
          ],
          cloudIf: [
            'You are still working out whether local inference suits you at all',
            'Your usage is bursty — a heavy weekend, then two quiet weeks',
            'You want to test a 70B-class model without buying two cards',
            'You do not want to own hardware that depreciates',
            'You need a different GPU next month than you need today',
          ],
          quick: [
            'Under 2 hours a day → rent, and revisit in six months',
            '4+ hours a day, every day → buy, the card pays back',
            'Any data you cannot upload → buy, cost is not the deciding factor',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A used RTX 3090 is worth buying for local LLMs when you will run it more than about four hours a day for two years or your data cannot be uploaded; otherwise renting the same card at $0.12–$0.22 per hour is cheaper.',
          },
          {
            type: 'plain-terms',
            text: 'Owning the card is like buying a car; renting is like taking taxis. Taxis are cheaper until you start driving every day — and the card, unlike the car, holds its value well enough that you get much of the money back when you sell it.',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          'VRAM: 24 GB GDDR6X — enough for a 27B-class model at 4-bit quantization with room for context.',
          'Memory bandwidth: 936 GB/s, which is what actually sets token generation speed on a memory-bound workload.',
          'Power: 350 W card TDP; budget roughly 450 W at the wall for the whole system under inference load.',
          'Used price: $850–$1,050 typical, with eBay averages near $1,000 — up from $600–$800 in spring 2026.',
          'Cloud rental: $0.12/hour ([Vast.ai](https://Vast.ai)) to $0.50/hour (RunPod Secure); median $0.15/hour across eight providers.',
          'Electricity: at the 2026 US residential average of $0.18/kWh, running it costs about $0.08/hour.',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'What the RTX 3090 Actually Buys You',
        content: [
          '**The RTX 3090 matters for one reason: 24 GB of VRAM at the lowest price anyone sells it.** Everything else about the card is unremarkable in 2026 — it is a 2020 design, it draws 350 W, and a current-generation card beats it on every efficiency metric. None of that changes the fact that model weights either fit in video memory or they do not.',
          'VRAM is a cliff, not a slope. A model that fits runs at full speed; a model that overflows by even a gigabyte spills into system RAM and collapses to a fraction of the speed. That makes 24 GB a capability threshold rather than a performance number, and the 3090 is the cheapest card that clears it.',
          'The second number that matters is memory bandwidth. Token generation on a quantized model is memory-bound, not compute-bound, so 936 GB/s is a better predictor of how fast it will feel than any CUDA-core count. This is also why the 3090 stays competitive with newer mid-range cards that have more compute but narrower memory buses.',
          'What you get in practice: comfortable headroom for a 27B-class model at 4-bit quantization, fast inference on 7B–14B models with long context, and — with a second card — the ability to hold a 70B-class model in VRAM without offloading.',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: 'What 24 GB Actually Runs: Model Sizes and Quantization',
        content: [
          '**"Fits in 24 GB" and "runs comfortably for interactive use" are two different claims, and buying guides that conflate them set the wrong expectation.** A model can technically load and still leave no room for context, which means it works for a single short prompt and breaks the moment a conversation gets long. The table below separates the two.',
          'The variable that moves a model between these columns is context length: every token of conversation history and every generated token needs space in the KV cache, on top of the weights themselves. A 27B model at 4-bit quantization with a 4K context comfortably fits; the same model pushed to 32K context can crowd out the headroom the quantization bought you.',
        ],
        columns: ['Model class', 'Fits in 24 GB (4-bit)', 'Interactive use'],
        rows: [
          { 'Model class': '7B–8B', 'Fits in 24 GB (4-bit)': 'Yes, with room to spare', 'Interactive use': 'Fast, long context comfortable' },
          { 'Model class': '13B–14B', 'Fits in 24 GB (4-bit)': 'Yes', 'Interactive use': 'Fast, generous context' },
          { 'Model class': '27B–34B', 'Fits in 24 GB (4-bit)': 'Yes', 'Interactive use': 'Comfortable / watch KV cache at long context' },
          { 'Model class': '70B (4-bit, single card)', 'Fits in 24 GB (4-bit)': 'Technically, with CPU offload', 'Interactive use': 'Slow — offloaded layers bottleneck generation' },
          { 'Model class': '70B (4-bit, two cards)', 'Fits in 24 GB (4-bit)': 'Yes, 48 GB combined', 'Interactive use': 'Comfortable, no offloading' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'A 70B-class model at 4-bit quantization needs roughly 40–45 GB of VRAM for weights alone, before context. A single 24 GB card gets there only by offloading part of the model to system RAM, which is why the single-card row above is listed as technically possible rather than comfortable.',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090 with Ollama and LM Studio',
        content: [
          '**The RTX 3090\'s 24 GB is particularly relevant for Ollama and LM Studio, because both default to loading a model entirely in GPU memory when it fits, and fall back to slower CPU/GPU offloading when it does not.** With 24 GB available, both tools can run 27B-class models fully on the card instead of splitting them.',
          'Actual tokens-per-second depends on the specific model, the quantization level, context length, which backend build is in use (llama.cpp under the hood for both), how much of the prompt still needs processing versus how much is cached, and what else is running on the same machine. Neither tool publishes official RTX 3090 benchmarks, so treat any single "X tokens/sec" figure you see elsewhere as one person\'s setup, not a guarantee for yours.',
          'Practically: install either tool, pull a 27B-class model at 4-bit quantization, and check GPU memory usage in `nvidia-smi` (or the tool\'s own display) while it runs — if usage sits comfortably under 24 GB, the model is fully on the card and you are getting the RTX 3090\'s full memory bandwidth.',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: 'Buying Used: What to Check Before You Pay',
        sponsoredSlot: true,
        content: [
          '**If you buy, buy used — nobody sells the RTX 3090 new any more, and the used market is where the price advantage lives.** At $850–$1,050 it is the cheapest 24 GB card available, and it holds resale value well, which materially reduces the real cost of ownership.',
          'The honest caveat: these are five-year-old cards, many of them ex-mining or ex-gaming, sold without warranty by strangers. The failure modes are known and checkable, so the risk is manageable — but it is real, and it is the reason to buy from a seller with returns rather than the cheapest listing you can find.',
        ],
        items: [
          'Ask for a photo of the card running a load test with temperatures visible — memory junction temperature above roughly 100 °C under load points at dried-out thermal pads.',
          'GDDR6X on this card runs hot by design; a seller who has replaced the thermal pads is a good sign, not a red flag.',
          'Confirm it is the 24 GB RTX 3090 and not an RTX 3080 — the listing title is not proof, ask for a GPU-Z screenshot.',
          'Prefer a platform with buyer protection and returns. The $50 you save on a no-returns listing is not worth the risk on a five-year-old card.',
          'Check the card physically fits: the 3090 is a three-slot card in most designs and needs a 750 W or larger power supply.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum is not enrolled in any affiliate program. The links below carry no affiliate tags and earn no commission — they are plain reference links, provided so you can check the current price yourself.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB (used)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Check used RTX 3090 prices on eBay',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB (used/refurbished)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Check RTX 3090 stock on Newegg',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: 'Choosing a Card: Cooling, Size and Power Connectors',
        itemHeadings: true,
        content: [
          '**Every RTX 3090 has the same 24 GB of VRAM, so the model-fitting question is settled the moment you pick "RTX 3090." What differs between cards is how bearable it is to own one.** No single manufacturer cooler design is objectively best across every listing — used-market condition varies more than the design does — but these are the factors worth checking before you buy.',
        ],
        columns: ['Factor', 'What to check'],
        rows: [
          { Factor: 'Cooling design', 'What to check': 'Triple-fan open-air coolers run quieter under sustained load than blower-style cards; ask how loud it is at idle vs. under inference.' },
          { Factor: 'Physical size', 'What to check': 'Most RTX 3090s are three-slot, 30+ cm long cards — measure your case before buying, not after.' },
          { Factor: 'Power connectors', 'What to check': 'Standard 8-pin PCIe (two or three) on most models; confirm your PSU has enough native connectors before relying on adapters.' },
          { Factor: 'Warranty', 'What to check': 'Original manufacturer warranties on this generation have mostly expired — treat any used 3090 as sold as-is unless the seller states otherwise.' },
          { Factor: 'Used condition', 'What to check': 'Prior mining use is not disqualifying (see the buying checklist above); prior heavy overclocking with poor cooling is a bigger risk signal.' },
          { Factor: 'Price vs. risk', 'What to check': 'The cheapest listing is not the best deal if it has no returns — a $50–100 premium for buyer protection is usually worth it on a five-year-old card.' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: 'Why Renting Is the Better Answer More Often Than People Expect',
        content: [
          '**The case for renting is not that it is always cheaper — it is that an idle GPU costs you the same as a busy one.** A card sitting in a desktop that gets used on weekends has already cost its full purchase price. A rented GPU costs nothing between sessions.',
          'The reasons to rent are concrete rather than philosophical: no upfront outlay, no depreciation risk on a five-year-old card, no PSU or case or cooling constraints, no dead weekend when a fan fails. You can also rent a card you would never buy — testing a 70B-class model on two rented GPUs for an afternoon costs a few dollars, against roughly $1,700 for a second-hand pair.',
          'The honest counter-argument is that renting has real friction. You upload data to somebody else\'s machine, you wait for an instance, and on marketplace providers you occasionally get a host that disappears mid-job. Those are not reasons to dismiss it — they are reasons the decision depends on your workload rather than on the hourly rate alone.',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'Renting an RTX 3090: What It Costs and Where',
        sponsoredSlot: true,
        content: [
          '**Vast.ai is the cheapest way to rent an RTX 3090 at around $0.12 per hour, and RunPod is the more reliable one at $0.22 per hour on its Community tier.** That difference is the entire trade-off: Vast.ai is a marketplace of privately owned GPUs, so pricing is lower and host quality varies; RunPod runs its own capacity, so it costs more and behaves more predictably.',
          'For a first try, the cheap tier is genuinely fine — a failed instance on an experiment costs you nothing but the restart. For anything on a deadline, or any job longer than a few hours, the extra ten cents an hour buys you the thing you actually want, which is for the job to still be running when you come back.',
        ],
        columns: ['Provider', 'Price/hour', 'Best for'],
        rows: [
          { Provider: 'Vast.ai', 'Price/hour': '$0.12', 'Best for': 'Cheapest hourly rate; experiments and burst work' },
          { Provider: 'RunPod Community', 'Price/hour': '$0.22', 'Best for': 'Predictable capacity at a modest premium' },
          { Provider: 'RunPod Secure', 'Price/hour': '$0.50', 'Best for': 'Enterprise reliability and support' },
          { Provider: 'Median of 8 providers', 'Price/hour': '$0.15', 'Best for': 'The figure to use for your own break-even math' },
        ],
        items: [
          'Setup complexity: Vast.ai and similar marketplaces require picking a host and template yourself; RunPod and other managed providers offer one-click templates with Ollama or a web UI pre-installed.',
          'Persistence: a stopped instance on most providers still bills for attached storage; check whether a provider charges for storage while the GPU itself is paused before leaving a large model cached between sessions.',
          'Minimum rental: marketplace listings are typically billed by the minute with no minimum; some managed-capacity tiers require a minimum block — check the pricing page of the specific provider before committing to a job.',
          'Geographic availability: marketplace GPUs are wherever their owners are, so a specific region is not guaranteed; managed providers publish fixed data-center regions, which matters if you have data-residency requirements.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Prices verified 1 September 2026 against a multi-provider pricing table and RunPod\'s own model page. Cloud GPU rates move weekly — check current pricing before committing.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai RTX 3090 GPU rental',
            productCategory: 'cloud-gpu',
            priceRange: 'From $0.12/hr',
            label: 'See RTX 3090 pricing on Vast.ai',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'RunPod RTX 3090 GPU rental',
            productCategory: 'cloud-gpu',
            priceRange: 'From $0.22/hr',
            label: 'See RTX 3090 pricing on RunPod',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: 'The Break-Even Math',
        content: [
          '**Against a median $0.15/hour rental, an $850 card takes roughly 12,300 GPU-hours to pay for itself — about four years at eight hours a day, or seventeen years at two.** That is the number most buying guides skip, and it is the one that should decide the purchase.',
          'The calculation subtracts what the card costs you to run. At 450 W at the wall and the 2026 US average of $0.18/kWh, local inference costs about $0.08 per hour in electricity, so you are not comparing $850 against $0.15/hour — you are comparing it against the roughly $0.07/hour you save.',
          'Assumptions: $850 card, 450 W system draw, $0.18/kWh. Substitute your own electricity rate — it moves the answer more than anything else in the table, and in markets above $0.30/kWh the buy case largely disappears.',
        ],
        columns: ['Usage', 'vs $0.12/h', 'vs $0.15/h', 'vs $0.22/h'],
        rows: [
          { Usage: '2 hours a day', 'vs $0.12/h': '~30 years', 'vs $0.15/h': '~17 years', 'vs $0.22/h': '~8 years' },
          { Usage: '4 hours a day', 'vs $0.12/h': '~15 years', 'vs $0.15/h': '~8 years', 'vs $0.22/h': '~4 years' },
          { Usage: '8 hours a day', 'vs $0.12/h': '~7.5 years', 'vs $0.15/h': '~4 years', 'vs $0.22/h': '~2 years' },
          { Usage: 'Always on (24/7)', 'vs $0.12/h': '~2.5 years', 'vs $0.15/h': '~1.4 years', 'vs $0.22/h': '~8 months' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'This table makes buying look worse than it is in one specific way: it ignores resale. A used RTX 3090 has held its value for five years, so if you sell it on, much of the purchase price comes back and every number above shortens considerably.',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: 'Which Side You Are On',
        itemHeadings: true,
        columns: ['Reader', 'Verdict', 'Why'],
        rows: [
          {
            Reader: 'Weekend hobbyist',
            Verdict: 'Rent',
            Why: 'A few hours a week against a $850 outlay is decades from break-even. Rent for a year, and if you find yourself renting daily, buy then — you will also know exactly which card you need.',
          },
          {
            Reader: 'Daily heavy user',
            Verdict: 'Buy',
            Why: 'At four or more hours a day the card pays back inside a few years, and resale recovers much of the rest. The bigger win is behavioural: an owned GPU has no meter running, so you stop rationing experiments.',
          },
          {
            Reader: 'Small team or startup',
            Verdict: 'Rent first, then buy',
            Why: 'Rent while your workload is still changing shape — you do not yet know whether you need 24 GB or 80 GB. Buy once usage is steady and predictable enough to forecast, which is usually the point where the monthly bill starts to sting.',
          },
          {
            Reader: 'Privacy or compliance bound',
            Verdict: 'Buy',
            Why: 'Cost is not the deciding factor. If client data, health records or regulated material cannot be uploaded to a third-party host, the rental option does not exist regardless of price, and the 3090 is the cheapest way to satisfy the requirement.',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: 'Skip the RTX 3090 If',
        content: [
          '**Skip it if your models fit in 16 GB.** If you are running 7B and 14B models at 4-bit and never touching anything larger, a cheaper current-generation 16 GB card is quieter, draws far less power and comes with a warranty. Paying the 24 GB premium for headroom you never use is the most common mistake on this purchase.',
          'Skip it too if you are buying to train rather than to run inference. Fine-tuning anything substantial on a single 24 GB card means aggressive quantization and long waits; renting a larger card for a few hours is both faster and cheaper.',
          'And skip it if your electricity is expensive. At $0.30/kWh or above, the running cost alone approaches the cheaper cloud rates, and the case for owning the card mostly evaporates.',
        ],
      },

      verdict: {
        id: 'verdict',
        title: 'Our Verdict',
        content: [
          '**Buy a used RTX 3090 if you will use it more than about four hours a day for the next two years, or if your data cannot leave your building — it is still the cheapest way to own 24 GB of VRAM. Rent one if your usage is occasional, bursty or you are still finding out whether local inference suits your workload. If you are unsure which you are, rent first.**',
          'For frequent local LLM use and privacy: buy. For occasional experimentation: rent. For uncertain or changing usage: rent first, and revisit the decision in six months once you know your actual hours. For anyone specifically chasing inexpensive 24 GB VRAM, a good-condition used RTX 3090 remains compelling in 2026 — the memory-shortage price increase has not changed that, only pushed the break-even further out. For a new purchase where efficiency, warranty and current-generation features matter more than upfront price, compare against a [current-generation card](/power-local-llm/best-gpu-buying-guide-local-llm-2026) instead.',
          'Bottom line: the RTX 3090\'s advantage is 24 GB of VRAM at used-market prices. Its costs are age, high power draw, heat, noise and the lack of a warranty. Neither side of that trade-off has changed in 2026 — only the purchase price has, and it moved against buying.',
        ],
      },

      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is the RTX 3090 still worth buying in 2026?',
            a: 'For sustained local inference, yes — it remains the cheapest 24 GB card at $850–$1,050 used. For light or occasional use, no: renting the same GPU at $0.12–$0.22 per hour is cheaper for years. The deciding factor is hours of actual use per week, not the specification.',
          },
          {
            q: 'Is the RTX 3090 good for Ollama?',
            a: 'Yes. Ollama loads a model fully into GPU memory when it fits, and 24 GB is enough to run 27B-class models at 4-bit quantization entirely on the card rather than splitting across CPU and GPU. Confirm full GPU residency with `nvidia-smi` while a model is loaded.',
          },
          {
            q: 'Is the RTX 3090 good for LM Studio?',
            a: 'Yes, for the same reason as Ollama — both run on a llama.cpp-based backend and benefit equally from 24 GB of VRAM. LM Studio shows GPU memory usage directly in its interface, which makes it easy to confirm a model is fully loaded rather than partially offloaded.',
          },
          {
            q: 'RTX 3090 or RTX 4090 for local LLMs?',
            a: 'Both have 24 GB, so they run the same models. The 4090 is meaningfully faster and much more power-efficient, but costs roughly twice as much used. If the models you run already fit, the 3090 gives you the same capability for less money; the 4090 is worth it when generation speed is what limits your work.',
          },
          {
            q: 'How many tokens per second does an RTX 3090 produce?',
            a: 'It depends on model size and quantization, and any single number would be misleading. The useful rule is that token generation on a quantized model is memory-bandwidth-bound, so the 3090\'s 936 GB/s is the figure that predicts it — smaller models and heavier quantization move more tokens per second.',
          },
          {
            q: 'Can two RTX 3090s run a 70B model?',
            a: 'Yes. Two cards give you 48 GB of VRAM, which holds a 70B-class model at 4-bit quantization without offloading to system RAM. Budget for a power supply of 1,000 W or more and a motherboard with two suitable slots — and rent a two-GPU cloud instance for an afternoon first, to confirm the setup does what you need before spending roughly $1,700.',
          },
          {
            q: 'Why did used RTX 3090 prices go up in 2026?',
            a: 'A memory shortage pushed GPU prices broadly above their earlier levels during 2026, and demand for 24 GB cards rose among people running models locally rather than among gamers. The card sold for $600–$800 in spring and $850–$1,050 by September. It is one of the few five-year-old products that got more expensive.',
          },
          {
            q: 'Is it safe to buy a used mining GPU?',
            a: 'Usually, with checks. Mining cards ran at constant moderate load, which is gentler than the thermal cycling of gaming, but they often need new thermal pads. Ask for a load-test photo showing memory junction temperature, buy from a seller offering returns, and treat any listing without both as a card you cannot verify.',
          },
          {
            q: 'What power supply does an RTX 3090 need?',
            a: 'NVIDIA specifies 750 W for a single-card system, and that is the right minimum. The card draws 350 W on its own and has short transient spikes well above that, so an undersized or low-quality supply will shut down under load even when the arithmetic looks fine.',
          },
          {
            q: 'Does renting a GPU mean my data leaves my machine?',
            a: 'Yes — that is the fundamental trade-off. Anything you process on a rented GPU is uploaded to hardware you do not control, and on marketplace platforms that hardware is privately owned. For regulated, confidential or client data this rules the rental option out regardless of cost, which is why the privacy case for buying does not depend on the break-even math at all.',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[RTX 3090 price tracker — new and used price history, Best Value GPU.](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[RTX 3090 cloud pricing across 8 providers, GetDeploying (updated 1 September 2026).](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[RTX 3090 GPU rental pricing, RunPod.](https://www.runpod.io/gpu-models/rtx-3090)',
          '[A used RTX 3090 is still the best GPU for local AI, XDA Developers.](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — average residential electricity price, US Energy Information Administration.](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best GPUs for Local LLMs: Complete Buying Guide](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — compare the RTX 3090 against current-generation cards across every price tier.',
          '[Used GPUs for Local LLMs: Best Value Picks](/local-llms/used-gpus-for-local-llms) — the wider used-market guide covering the RTX 3060, 3080 and 4090 alongside this card.',
          '[Ollama vs LM Studio](/local-llms/ollama-vs-lm-studio) — how the two tools this GPU pairs with actually differ, beyond both sharing a llama.cpp backend.',
          '[Cheapest Practical Way to Run a 70B Model Locally](/prompt-bites/cheapest-way-to-run-70b-model-locally) — where two RTX 3090s fit into the cheapest 70B setup.',
          '[How Much VRAM for a 70B Model?](/prompt-bites/vram-for-70b-model) — the VRAM arithmetic behind the two-card recommendation above.',
          '[Local LLM Cost Calculator: Build vs Rent](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — run the break-even calculation with your own numbers and hardware.',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-de.webp',
    title: 'RTX 3090 für lokale LLMs 2026: Kaufen oder mieten?',
    seoTitle: 'RTX 3090 für lokale LLMs 2026: Gebraucht kaufen oder mieten?',

    intro: 'Die RTX 3090 ist der günstigste Weg zu 24 GB VRAM unter dem eigenen Schreibtisch — dieselbe Karte in der Cloud zu mieten kostet nur Cent pro Stunde. Dieser Leitfaden zeigt, wo die Grenze zwischen beiden Optionen tatsächlich verläuft.',
    metaDescription: 'Eine gebrauchte RTX 3090 kostet 2026 850–1.050 $, Mieten kostet 0,12–0,22 $/Stunde. Hier die Kauf-oder-Miete-Break-even-Rechnung für 24 GB VRAM bei lokalen LLMs.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler und kleine Teams, die zwischen dem Kauf einer gebrauchten 24-GB-GPU und dem Mieten von Cloud-GPU-Zeit für lokale LLM-Inferenz entscheiden müssen',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 lokales llm',
      'lohnt sich die rtx 3090 noch',
      'rtx 3090 gebraucht preis',
      'rtx 3090 vs cloud gpu mieten',
      '24gb vram gpu für llm',
      'rtx 3090 ollama',
      'rtx 3090 70b modell',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**Kaufen Sie eine gebrauchte RTX 3090, wenn Sie sie über die nächsten zwei Jahre mehr als etwa vier Stunden täglich nutzen — oder wenn Ihre Daten das Gebäude nicht verlassen dürfen. Andernfalls mieten Sie.** Bei 850–1.050 $ gebraucht gegen 0,12–0,22 $ pro Stunde in der Cloud rechnet sich die Karte nur bei dauerhafter Auslastung — und 2026 kostet sie mehr als im Frühjahr, was den Break-even weiter nach hinten verschiebt, als die meisten Kaufratgeber zugeben.',

    quickAnswerTop: {
      de: {
        question: 'Lohnt sich der Kauf einer RTX 3090 für lokale LLMs noch?',
        answer: 'Ja, aber nur bei dauerhafter Nutzung oder datenschutzgebundener Arbeit. Eine gebrauchte RTX 3090 liefert 24 GB VRAM für 850–1.050 $ — immer noch der günstigste Weg, Modelle der 27B-Klasse vollständig auf eigener Hardware zu betreiben. Dieselbe GPU zu mieten kostet 0,12–0,22 $ pro Stunde, sodass die Cloud bei geringer Nutzung über Jahre günstiger bleibt.',
        bullets: [
          '24 GB VRAM, 936 GB/s Bandbreite, 350 W — unverändert seit 2020, immer noch die günstigste 24-GB-Karte',
          'Gebrauchtpreis 850–1.050 $; gestiegen von 600–800 $ im Frühjahr 2026 wegen der Speicherknappheit',
          'Cloud-Miete 0,12 $/h ([Vast.ai](https://Vast.ai)) bis 0,22 $/h (RunPod Community); Median 0,15 $/h bei 8 Anbietern',
          'Break-even gegen eine 0,15-$/h-Miete bei 2 Stunden täglich liegt bei rund 17 Jahren — bei 8 Stunden täglich bei etwa 4',
          'Kaufen für Datenschutz, Latenz, dauerhaft laufende Agenten und ständiges Fine-Tuning; mieten für Spitzenlast und Experimente',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RTX 3090 für lokale LLMs 2026: Kaufen oder mieten?',
      description: 'Break-even-Analyse zwischen dem Kauf einer gebrauchten NVIDIA RTX 3090 und dem Mieten derselben GPU bei Cloud-Anbietern für lokale LLM-Inferenz, mit Preisen von 2026.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/de/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'de',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Entwickler und kleine Teams, die lokale LLM-Inferenz betreiben',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: 'Lokale Large Language Models' },
        { '@type': 'Thing', name: 'Cloud-GPU-Vermietung' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/de/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/de/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: 'Zusammenfassung',
        numberedItems: [
          'Eine gebrauchte RTX 3090 kostet 850–1.050 $ und liefert 24 GB VRAM — immer noch der günstigste Weg, so viel Grafikspeicher zu besitzen.',
          'Dieselbe GPU zu mieten kostet 0,12 $/Stunde bei Vast.ai und 0,22 $/Stunde bei RunPod Community, mit einem Median von 0,15 $/Stunde bei acht Anbietern.',
          'Nach Abzug von etwa 0,08 $/Stunde Stromkosten gewinnt der Kauf erst nach rund 12.300 GPU-Stunden gegenüber einer Median-Miete — etwa vier Jahre bei acht Stunden täglich.',
          'Die Karte wurde 2026 teurer, nicht billiger: im Frühjahr kostete sie 600–800 $. Das verschiebt den Break-even weiter nach hinten, entgegen der Annahme der meisten Kaufratgeber.',
          'Kaufen für Datenschutz, Offline-Arbeit, dauerhaft laufende Agenten und ständiges Fine-Tuning. Mieten für Spitzenlast, Experimente und alles, was sonst ungenutzt bliebe.',
          'Der Wiederverkaufswert ist das stärkste Argument fürs Kaufen: Eine 3090, die in zwei Jahren noch mehrere hundert Dollar einbringt, macht aus dem Kauf eher eine Anzahlung als eine Ausgabe.',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: 'Entscheidung in 30 Sekunden',
        content: 'Beide Wege liefern dieselbe GPU und dieselben 24 GB VRAM. Die eigentliche Frage ist, wie viele Stunden Sie sie tatsächlich nutzen werden — und ob Ihre Daten das Netzwerk verlassen dürfen.',
        decisionBlock: {
          title: 'Gebrauchte RTX 3090 kaufen oder mieten?',
          localIf: [
            'Sie nutzen sie durchgehend mehr als etwa 4 Stunden täglich',
            'Ihre Daten dürfen das Gebäude nicht verlassen — Gesundheits-, Rechts-, Kunden- oder regulierte Daten',
            'Sie wollen einen dauerhaft laufenden Agenten, Home-Assistant oder nächtliche Batch-Jobs',
            'Sie fine-tunen oder embedden regelmäßig, nicht nur gelegentlich',
            'Sie haben bereits Gehäuse, ein Netzteil ab 750 W und einen Platz für die Abwärme',
          ],
          cloudIf: [
            'Sie prüfen noch, ob lokale Inferenz überhaupt zu Ihnen passt',
            'Ihre Nutzung ist stoßweise — ein intensives Wochenende, dann zwei ruhige Wochen',
            'Sie wollen ein Modell der 70B-Klasse testen, ohne zwei Karten zu kaufen',
            'Sie wollen keine Hardware besitzen, die an Wert verliert',
            'Sie brauchen nächsten Monat eine andere GPU als heute',
          ],
          quick: [
            'Unter 2 Stunden täglich → mieten, in sechs Monaten neu bewerten',
            '4+ Stunden täglich, jeden Tag → kaufen, die Karte zahlt sich aus',
            'Jegliche Daten, die Sie nicht hochladen dürfen → kaufen, Kosten sind nicht entscheidend',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Eine gebrauchte RTX 3090 lohnt sich für lokale LLMs, wenn Sie sie zwei Jahre lang mehr als etwa vier Stunden täglich nutzen oder Ihre Daten nicht hochgeladen werden dürfen; andernfalls ist das Mieten derselben Karte für 0,12–0,22 $ pro Stunde günstiger.',
          },
          {
            type: 'plain-terms',
            text: 'Die Karte zu besitzen ist wie ein Auto zu kaufen; mieten ist wie Taxifahren. Taxis sind günstiger, bis man täglich fährt — und die Karte behält, anders als das Auto, ihren Wert gut genug, dass beim Verkauf viel Geld zurückkommt.',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          'VRAM: 24 GB GDDR6X — genug für ein Modell der 27B-Klasse bei 4-Bit-Quantisierung mit Spielraum für Kontext.',
          'Speicherbandbreite: 936 GB/s — das bestimmt bei speicherbandbreitenlimitierten Aufgaben tatsächlich die Token-Generierungsgeschwindigkeit.',
          'Leistung: 350 W TDP der Karte; rechnen Sie mit rund 450 W am Netzteil für das ganze System unter Inferenzlast.',
          'Gebrauchtpreis: typisch 850–1.050 $, eBay-Durchschnitt nahe 1.000 $ — gestiegen von 600–800 $ im Frühjahr 2026.',
          'Cloud-Miete: 0,12 $/Stunde ([Vast.ai](https://Vast.ai)) bis 0,50 $/Stunde (RunPod Secure); Median 0,15 $/Stunde bei acht Anbietern.',
          'Strom: beim US-Wohnstrom-Durchschnitt von 0,18 $/kWh im Jahr 2026 kostet der Betrieb etwa 0,08 $ pro Stunde.',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'Was die RTX 3090 wirklich bietet',
        content: [
          '**Die RTX 3090 überzeugt aus einem Grund: 24 GB VRAM zum niedrigsten Preis, den irgendjemand dafür verlangt.** Alles andere an der Karte ist 2026 unspektakulär — sie ist ein Design von 2020, zieht 350 W, und eine aktuelle Karte schlägt sie bei jeder Effizienzkennzahl. Das ändert nichts daran, dass Modellgewichte entweder in den Grafikspeicher passen oder nicht.',
          'VRAM ist eine Klippe, keine Steigung. Ein Modell, das passt, läuft mit voller Geschwindigkeit; ein Modell, das auch nur um ein Gigabyte überläuft, weicht in den Systemspeicher aus und bricht auf einen Bruchteil der Geschwindigkeit ein. Das macht 24 GB zu einer Fähigkeitsschwelle statt zu einer Leistungszahl — und die 3090 ist die günstigste Karte, die sie erreicht.',
          'Die zweite wichtige Zahl ist die Speicherbandbreite. Die Token-Generierung bei einem quantisierten Modell ist speicherbandbreiten-, nicht rechenlimitiert, weshalb 936 GB/s ein besserer Indikator für das gefühlte Tempo ist als jede CUDA-Core-Zahl. Deshalb bleibt die 3090 auch gegenüber neueren Mittelklassekarten mit mehr Rechenleistung, aber schmalerem Speicherbus konkurrenzfähig.',
          'In der Praxis bedeutet das: komfortabler Spielraum für ein Modell der 27B-Klasse bei 4-Bit-Quantisierung, schnelle Inferenz bei 7B–14B-Modellen mit langem Kontext — und mit einer zweiten Karte die Möglichkeit, ein Modell der 70B-Klasse ohne Offloading vollständig im VRAM zu halten.',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: 'Was 24 GB tatsächlich leisten: Modellgrößen und Quantisierung',
        content: [
          '**"Passt in 24 GB" und "läuft komfortabel im interaktiven Betrieb" sind zwei verschiedene Aussagen — Kaufratgeber, die das vermischen, wecken falsche Erwartungen.** Ein Modell kann technisch laden und trotzdem keinen Platz für Kontext lassen, was bedeutet, dass es für einen kurzen einzelnen Prompt funktioniert und bei längeren Gesprächen zusammenbricht. Die folgende Tabelle trennt beide Aussagen.',
          'Die Variable, die ein Modell zwischen diesen Spalten verschiebt, ist die Kontextlänge: Jedes Token des Gesprächsverlaufs und jedes generierte Token braucht Platz im KV-Cache, zusätzlich zu den eigentlichen Gewichten. Ein 27B-Modell bei 4-Bit-Quantisierung mit 4K Kontext passt komfortabel; dasselbe Modell mit 32K Kontext kann den durch die Quantisierung gewonnenen Spielraum wieder aufbrauchen.',
        ],
        columns: ['Modellklasse', 'Passt in 24 GB (4-Bit)', 'Interaktive Nutzung'],
        rows: [
          { 'Modellklasse': '7B–8B', 'Passt in 24 GB (4-Bit)': 'Ja, mit Reserve', 'Interaktive Nutzung': 'Schnell, langer Kontext komfortabel' },
          { 'Modellklasse': '13B–14B', 'Passt in 24 GB (4-Bit)': 'Ja', 'Interaktive Nutzung': 'Schnell, großzügiger Kontext' },
          { 'Modellklasse': '27B–34B', 'Passt in 24 GB (4-Bit)': 'Ja', 'Interaktive Nutzung': 'Komfortabel / KV-Cache bei langem Kontext beachten' },
          { 'Modellklasse': '70B (4-Bit, eine Karte)', 'Passt in 24 GB (4-Bit)': 'Technisch, mit CPU-Offload', 'Interaktive Nutzung': 'Langsam — ausgelagerte Layer bremsen die Generierung' },
          { 'Modellklasse': '70B (4-Bit, zwei Karten)', 'Passt in 24 GB (4-Bit)': 'Ja, 48 GB kombiniert', 'Interaktive Nutzung': 'Komfortabel, kein Offloading' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ein Modell der 70B-Klasse bei 4-Bit-Quantisierung braucht allein für die Gewichte rund 40–45 GB VRAM, vor jeglichem Kontext. Eine einzelne 24-GB-Karte erreicht das nur durch Auslagern eines Teils des Modells in den Systemspeicher — deshalb ist die Ein-Karten-Zeile oben als "technisch möglich" statt "komfortabel" gelistet.',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090 mit Ollama und LM Studio',
        content: [
          '**Die 24 GB der RTX 3090 sind besonders relevant für Ollama und LM Studio, da beide standardmäßig ein Modell vollständig in den GPU-Speicher laden, wenn es passt, und bei Nichtpassen auf langsameres CPU/GPU-Offloading zurückfallen.** Mit 24 GB verfügbar können beide Tools Modelle der 27B-Klasse vollständig auf der Karte laufen lassen, statt sie aufzuteilen.',
          'Die tatsächliche Geschwindigkeit in Token pro Sekunde hängt vom konkreten Modell, der Quantisierungsstufe, der Kontextlänge, dem verwendeten Backend-Build (bei beiden läuft im Hintergrund llama.cpp), dem Anteil des Prompts, der noch verarbeitet werden muss gegenüber dem, was bereits im Cache liegt, sowie davon ab, was sonst noch auf derselben Maschine läuft. Keines der beiden Tools veröffentlicht offizielle RTX-3090-Benchmarks — behandeln Sie jede einzelne "X Token/Sek."-Angabe, die Sie anderswo sehen, als das Setup einer einzelnen Person, nicht als Garantie für Ihr eigenes.',
          'Praktisch: Installieren Sie eines der beiden Tools, laden Sie ein Modell der 27B-Klasse bei 4-Bit-Quantisierung, und prüfen Sie die GPU-Speichernutzung in `nvidia-smi` (oder der eigenen Anzeige des Tools) während des Betriebs — liegt die Nutzung komfortabel unter 24 GB, läuft das Modell vollständig auf der Karte und Sie erhalten die volle Speicherbandbreite der RTX 3090.',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: 'Gebraucht kaufen: Worauf Sie vor dem Kauf achten sollten',
        sponsoredSlot: true,
        content: [
          '**Wenn Sie kaufen, kaufen Sie gebraucht — die RTX 3090 wird nicht mehr neu verkauft, und der Preisvorteil liegt im Gebrauchtmarkt.** Bei 850–1.050 $ ist sie die günstigste verfügbare 24-GB-Karte, und sie hält ihren Wiederverkaufswert gut, was die tatsächlichen Besitzkosten spürbar senkt.',
          'Der ehrliche Vorbehalt: Das sind fünf Jahre alte Karten, viele davon ex-Mining oder ex-Gaming, ohne Garantie von Privatverkäufern verkauft. Die Fehlerbilder sind bekannt und prüfbar, das Risiko also beherrschbar — aber real, und genau deshalb sollte man bei einem Verkäufer mit Rückgaberecht kaufen statt beim billigsten Angebot.',
        ],
        items: [
          'Bitten Sie um ein Foto der Karte während eines Lasttests mit sichtbaren Temperaturen — eine Speicher-Junction-Temperatur über etwa 100 °C unter Last deutet auf ausgetrocknete Thermal-Pads hin.',
          'GDDR6X wird bei dieser Karte konstruktionsbedingt heiß; ein Verkäufer, der die Thermal-Pads bereits erneuert hat, ist ein gutes Zeichen, kein Warnsignal.',
          'Bestätigen Sie, dass es sich um die 24-GB-RTX-3090 handelt und nicht um eine RTX 3080 — der Titel des Angebots ist kein Beweis, fragen Sie nach einem GPU-Z-Screenshot.',
          'Bevorzugen Sie eine Plattform mit Käuferschutz und Rückgaberecht. Die 50 $, die Sie bei einem Angebot ohne Rückgabe sparen, sind das Risiko bei einer fünf Jahre alten Karte nicht wert.',
          'Prüfen Sie, ob die Karte physisch passt: Die 3090 ist bei den meisten Designs eine Drei-Slot-Karte und braucht ein Netzteil ab 750 W.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum ist an keinem Affiliate-Programm beteiligt. Die untenstehenden Links tragen keine Affiliate-Tags und generieren keine Provision — es sind reine Referenzlinks, damit Sie den aktuellen Preis selbst prüfen können.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB (gebraucht)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Gebrauchtpreise der RTX 3090 bei eBay prüfen',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB (gebraucht/generalüberholt)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'RTX-3090-Bestand bei Newegg prüfen',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: 'Die richtige Karte wählen: Kühlung, Größe und Stromanschlüsse',
        itemHeadings: true,
        content: [
          '**Jede RTX 3090 hat dieselben 24 GB VRAM, die Frage der Modellkompatibilität ist also mit der Wahl "RTX 3090" bereits geklärt. Was sich zwischen den Karten unterscheidet, ist, wie erträglich der Besitz ist.** Kein einzelnes Kühlerdesign eines Herstellers ist über alle Angebote hinweg objektiv das beste — der Zustand im Gebrauchtmarkt variiert stärker als das Design —, aber das sind die Faktoren, die einen Blick wert sind, bevor Sie kaufen.',
        ],
        columns: ['Faktor', 'Worauf achten'],
        rows: [
          { Faktor: 'Kühlungsdesign', 'Worauf achten': 'Offene Triple-Fan-Kühler laufen unter Dauerlast leiser als Blower-Karten; fragen Sie nach der Lautstärke im Leerlauf und bei Inferenz.' },
          { Faktor: 'Physische Größe', 'Worauf achten': 'Die meisten RTX 3090 sind Drei-Slot-Karten mit über 30 cm Länge — messen Sie Ihr Gehäuse vor, nicht nach dem Kauf.' },
          { Faktor: 'Stromanschlüsse', 'Worauf achten': 'Standard 8-Pin-PCIe (zwei oder drei) bei den meisten Modellen; prüfen Sie, ob Ihr Netzteil genug native Anschlüsse hat, bevor Sie sich auf Adapter verlassen.' },
          { Faktor: 'Garantie', 'Worauf achten': 'Herstellergarantien dieser Generation sind größtenteils abgelaufen — behandeln Sie jede gebrauchte 3090 als "wie besehen" verkauft, sofern der Verkäufer nichts anderes angibt.' },
          { Faktor: 'Gebrauchtzustand', 'Worauf achten': 'Frühere Mining-Nutzung ist kein Ausschlusskriterium (siehe Kauf-Checkliste oben); starkes Übertakten mit schlechter Kühlung ist das größere Risikosignal.' },
          { Faktor: 'Preis vs. Risiko', 'Worauf achten': 'Das billigste Angebot ist nicht das beste, wenn es keine Rückgabe erlaubt — ein Aufpreis von 50–100 $ für Käuferschutz lohnt sich bei einer fünf Jahre alten Karte meist.' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: 'Warum Mieten häufiger die bessere Antwort ist, als man denkt',
        content: [
          '**Das Argument fürs Mieten ist nicht, dass es immer günstiger ist — es ist, dass eine untätige GPU genauso viel kostet wie eine ausgelastete.** Eine Karte, die in einem Desktop steckt und nur am Wochenende genutzt wird, hat ihren vollen Kaufpreis bereits gekostet. Eine gemietete GPU kostet zwischen den Sitzungen nichts.',
          'Die Gründe fürs Mieten sind konkret, nicht philosophisch: keine Vorabkosten, kein Wertverlustrisiko bei einer fünf Jahre alten Karte, keine Einschränkungen durch Netzteil, Gehäuse oder Kühlung, kein verlorenes Wochenende, wenn ein Lüfter ausfällt. Man kann auch eine Karte mieten, die man nie kaufen würde — ein Modell der 70B-Klasse für einen Nachmittag auf zwei gemieteten GPUs zu testen kostet ein paar Dollar, gegenüber rund 1.700 $ für ein gebrauchtes Paar.',
          'Das ehrliche Gegenargument: Mieten bringt echte Reibungsverluste. Sie laden Daten auf fremde Rechner hoch, warten auf eine Instanz, und bei Marktplatz-Anbietern erwischt man gelegentlich einen Host, der mitten im Job verschwindet. Das sind keine Gründe, es abzutun — es sind Gründe, warum die Entscheidung von Ihrer Arbeitslast abhängt, nicht allein vom Stundenpreis.',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'Eine RTX 3090 mieten: Was es kostet und wo',
        sponsoredSlot: true,
        content: [
          '**Vast.ai ist der günstigste Weg, eine RTX 3090 zu mieten, für rund 0,12 $ pro Stunde, und RunPod ist die zuverlässigere Option für 0,22 $ pro Stunde im Community-Tarif.** Dieser Unterschied ist der gesamte Trade-off: Vast.ai ist ein Marktplatz privat besessener GPUs, daher niedrigere Preise bei variierender Host-Qualität; RunPod betreibt eigene Kapazität, kostet daher mehr und verhält sich vorhersehbarer.',
          'Für einen ersten Versuch ist der günstige Tarif wirklich in Ordnung — eine fehlgeschlagene Instanz bei einem Experiment kostet nur den Neustart. Bei allem mit Deadline oder jedem Job über wenige Stunden hinaus kaufen die zusätzlichen zehn Cent pro Stunde genau das, was Sie wollen: dass der Job noch läuft, wenn Sie zurückkommen.',
        ],
        columns: ['Anbieter', 'Preis/Stunde', 'Am besten für'],
        rows: [
          { Anbieter: 'Vast.ai', 'Preis/Stunde': '0,12 $', 'Am besten für': 'Günstigster Stundenpreis; Experimente und Spitzenlast' },
          { Anbieter: 'RunPod Community', 'Preis/Stunde': '0,22 $', 'Am besten für': 'Verlässliche Kapazität bei moderatem Aufpreis' },
          { Anbieter: 'RunPod Secure', 'Preis/Stunde': '0,50 $', 'Am besten für': 'Unternehmenszuverlässigkeit und Support' },
          { Anbieter: 'Median von 8 Anbietern', 'Preis/Stunde': '0,15 $', 'Am besten für': 'Die Zahl für Ihre eigene Break-even-Rechnung' },
        ],
        items: [
          'Setup-Aufwand: Vast.ai und ähnliche Marktplätze erfordern die eigene Wahl von Host und Template; RunPod und andere gemanagte Anbieter bieten One-Click-Templates mit vorinstalliertem Ollama oder einer Web-UI.',
          'Persistenz: Eine gestoppte Instanz wird bei den meisten Anbietern weiterhin für angehängten Speicher berechnet; prüfen Sie, ob ein Anbieter Speicher berechnet, während die GPU pausiert ist, bevor Sie ein großes Modell zwischen Sitzungen im Cache lassen.',
          'Mindestmietdauer: Marktplatz-Angebote werden typischerweise minutengenau ohne Mindestdauer abgerechnet; einige gemanagte Kapazitäts-Tarife verlangen einen Mindestblock — prüfen Sie die Preisseite des konkreten Anbieters, bevor Sie sich auf einen Job festlegen.',
          'Geografische Verfügbarkeit: Marktplatz-GPUs stehen dort, wo ihre Besitzer sind, eine bestimmte Region ist also nicht garantiert; gemanagte Anbieter veröffentlichen feste Rechenzentrums-Regionen, was bei Anforderungen an Datenresidenz relevant ist.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Preise geprüft am 1. September 2026 anhand einer Multi-Anbieter-Preistabelle und der eigenen Modellseite von RunPod. Cloud-GPU-Preise ändern sich wöchentlich — prüfen Sie aktuelle Preise, bevor Sie sich festlegen.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai RTX 3090 GPU-Miete',
            productCategory: 'cloud-gpu',
            priceRange: 'Ab 0,12 $/h',
            label: 'RTX-3090-Preise bei Vast.ai ansehen',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'RunPod RTX 3090 GPU-Miete',
            productCategory: 'cloud-gpu',
            priceRange: 'Ab 0,22 $/h',
            label: 'RTX-3090-Preise bei RunPod ansehen',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: 'Die Break-even-Rechnung',
        content: [
          '**Gegen eine Median-Miete von 0,15 $/Stunde braucht eine 850-$-Karte rund 12.300 GPU-Stunden, um sich zu amortisieren — etwa vier Jahre bei acht Stunden täglich oder siebzehn Jahre bei zwei.** Das ist die Zahl, die die meisten Kaufratgeber auslassen, und sie sollte den Kauf entscheiden.',
          'Die Rechnung zieht ab, was der Betrieb der Karte kostet. Bei 450 W am Netzteil und dem US-Durchschnitt von 0,18 $/kWh im Jahr 2026 kostet lokale Inferenz etwa 0,08 $ pro Stunde an Strom — Sie vergleichen also nicht 850 $ gegen 0,15 $/Stunde, sondern gegen die rund 0,07 $/Stunde, die Sie tatsächlich sparen.',
          'Annahmen: 850-$-Karte, 450 W Systemverbrauch, 0,18 $/kWh. Setzen Sie Ihren eigenen Strompreis ein — er verändert das Ergebnis stärker als alles andere in der Tabelle, und in Märkten über 0,30 $/kWh verschwindet das Kaufargument weitgehend.',
        ],
        columns: ['Nutzung', 'vs 0,12 $/h', 'vs 0,15 $/h', 'vs 0,22 $/h'],
        rows: [
          { Nutzung: '2 Stunden täglich', 'vs 0,12 $/h': '~30 Jahre', 'vs 0,15 $/h': '~17 Jahre', 'vs 0,22 $/h': '~8 Jahre' },
          { Nutzung: '4 Stunden täglich', 'vs 0,12 $/h': '~15 Jahre', 'vs 0,15 $/h': '~8 Jahre', 'vs 0,22 $/h': '~4 Jahre' },
          { Nutzung: '8 Stunden täglich', 'vs 0,12 $/h': '~7,5 Jahre', 'vs 0,15 $/h': '~4 Jahre', 'vs 0,22 $/h': '~2 Jahre' },
          { Nutzung: 'Dauerbetrieb (24/7)', 'vs 0,12 $/h': '~2,5 Jahre', 'vs 0,15 $/h': '~1,4 Jahre', 'vs 0,22 $/h': '~8 Monate' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Diese Tabelle lässt den Kauf in einem bestimmten Punkt schlechter aussehen, als er ist: Sie ignoriert den Wiederverkauf. Eine gebrauchte RTX 3090 hat fünf Jahre lang ihren Wert gehalten — verkaufen Sie sie weiter, kommt ein großer Teil des Kaufpreises zurück, und jede Zahl oben verkürzt sich deutlich.',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: 'Auf welcher Seite Sie stehen',
        itemHeadings: true,
        columns: ['Leser', 'Urteil', 'Warum'],
        rows: [
          {
            Leser: 'Wochenend-Hobbyist',
            Urteil: 'Mieten',
            Warum: 'Ein paar Stunden pro Woche gegen 850 $ Ausgaben sind Jahrzehnte vom Break-even entfernt. Mieten Sie ein Jahr — wenn Sie sich dabei ertappen, täglich zu mieten, kaufen Sie dann, und wissen bereits genau, welche Karte Sie brauchen.',
          },
          {
            Leser: 'Täglicher Vielnutzer',
            Urteil: 'Kaufen',
            Warum: 'Bei vier oder mehr Stunden täglich amortisiert sich die Karte innerhalb weniger Jahre, und der Wiederverkauf holt einen großen Teil des Rests zurück. Der größere Gewinn ist verhaltensbezogen: Eine eigene GPU hat keinen laufenden Zähler, man hört auf, Experimente zu rationieren.',
          },
          {
            Leser: 'Kleines Team oder Startup',
            Urteil: 'Erst mieten, dann kaufen',
            Warum: 'Mieten, solange sich die Arbeitslast noch verändert — man weiß noch nicht, ob 24 GB oder 80 GB nötig sind. Kaufen, sobald die Nutzung stabil und planbar genug ist, meist der Punkt, an dem die monatliche Rechnung zu wehtun beginnt.',
          },
          {
            Leser: 'Datenschutz- oder Compliance-gebunden',
            Urteil: 'Kaufen',
            Warum: 'Kosten sind nicht entscheidend. Wenn Kundendaten, Gesundheitsdaten oder reguliertes Material nicht zu einem Drittanbieter hochgeladen werden dürfen, existiert die Mietoption unabhängig vom Preis nicht — und die 3090 ist der günstigste Weg, diese Anforderung zu erfüllen.',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: 'Verzichten Sie auf die RTX 3090, wenn',
        content: [
          '**Verzichten Sie darauf, wenn Ihre Modelle in 16 GB passen.** Wenn Sie 7B- und 14B-Modelle bei 4-Bit fahren und nie etwas Größeres anfassen, ist eine günstigere aktuelle 16-GB-Karte leiser, zieht deutlich weniger Strom und kommt mit Garantie. Den 24-GB-Aufpreis für Spielraum zu zahlen, den man nie nutzt, ist der häufigste Fehler bei diesem Kauf.',
          'Verzichten Sie auch darauf, wenn Sie zum Trainieren statt zum Inferenzieren kaufen. Substanzielles Fine-Tuning auf einer einzelnen 24-GB-Karte bedeutet aggressive Quantisierung und lange Wartezeiten; eine größere Karte für ein paar Stunden zu mieten ist sowohl schneller als auch günstiger.',
          'Und verzichten Sie darauf, wenn Ihr Strom teuer ist. Ab 0,30 $/kWh nähern sich die reinen Betriebskosten den günstigeren Cloud-Preisen an, und das Argument fürs Besitzen verschwindet weitgehend.',
        ],
      },

      verdict: {
        id: 'verdict',
        title: 'Unser Fazit',
        content: [
          '**Kaufen Sie eine gebrauchte RTX 3090, wenn Sie sie über die nächsten zwei Jahre mehr als etwa vier Stunden täglich nutzen — oder wenn Ihre Daten das Gebäude nicht verlassen dürfen: Sie ist immer noch der günstigste Weg, 24 GB VRAM zu besitzen. Mieten Sie, wenn Ihre Nutzung gelegentlich oder stoßweise ist oder Sie noch herausfinden, ob lokale Inferenz zu Ihrer Arbeitslast passt. Sind Sie unsicher, mieten Sie zuerst.**',
          'Für häufige lokale LLM-Nutzung und Datenschutz: kaufen. Für gelegentliches Experimentieren: mieten. Bei unsicherer oder sich verändernder Nutzung: erst mieten und die Entscheidung in sechs Monaten neu bewerten, sobald Sie Ihre tatsächlichen Stunden kennen. Für alle, die speziell günstiges 24-GB-VRAM suchen, bleibt eine gebrauchte RTX 3090 in gutem Zustand 2026 überzeugend — der Preisanstieg durch die Speicherknappheit hat daran nichts geändert, nur den Break-even weiter hinausgeschoben. Für einen Neukauf, bei dem Effizienz, Garantie und aktuelle Funktionen wichtiger sind als der Anschaffungspreis, vergleichen Sie stattdessen mit einer [aktuellen Karte](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026).',
          'Fazit: Der Vorteil der RTX 3090 sind 24 GB VRAM zu Gebrauchtmarktpreisen. Ihre Kosten sind Alter, hoher Stromverbrauch, Wärme, Lautstärke und fehlende Garantie. Keine Seite dieses Trade-offs hat sich 2026 geändert — nur der Kaufpreis, und der hat sich gegen den Kauf entwickelt.',
        ],
      },

      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Lohnt sich die RTX 3090 2026 noch als Kauf?',
            a: 'Für dauerhafte lokale Inferenz ja — sie bleibt gebraucht die günstigste 24-GB-Karte bei 850–1.050 $. Bei geringer oder gelegentlicher Nutzung nein: Dieselbe GPU für 0,12–0,22 $ pro Stunde zu mieten ist über Jahre günstiger. Entscheidend sind die tatsächlichen Nutzungsstunden pro Woche, nicht die Spezifikation.',
          },
          {
            q: 'Ist die RTX 3090 gut für Ollama?',
            a: 'Ja. Ollama lädt ein Modell vollständig in den GPU-Speicher, wenn es passt, und 24 GB reichen, um Modelle der 27B-Klasse bei 4-Bit-Quantisierung vollständig auf der Karte statt aufgeteilt auf CPU und GPU laufen zu lassen. Bestätigen Sie die volle GPU-Belegung mit `nvidia-smi`, während ein Modell geladen ist.',
          },
          {
            q: 'Ist die RTX 3090 gut für LM Studio?',
            a: 'Ja, aus demselben Grund wie bei Ollama — beide laufen auf einem llama.cpp-basierten Backend und profitieren gleichermaßen von 24 GB VRAM. LM Studio zeigt die GPU-Speichernutzung direkt in der Oberfläche an, was es einfach macht zu prüfen, ob ein Modell vollständig geladen statt teilweise ausgelagert ist.',
          },
          {
            q: 'RTX 3090 oder RTX 4090 für lokale LLMs?',
            a: 'Beide haben 24 GB, laufen also mit denselben Modellen. Die 4090 ist spürbar schneller und deutlich stromeffizienter, kostet gebraucht aber etwa doppelt so viel. Wenn die genutzten Modelle bereits passen, liefert die 3090 dieselbe Fähigkeit für weniger Geld; die 4090 lohnt sich, wenn die Generierungsgeschwindigkeit der limitierende Faktor ist.',
          },
          {
            q: 'Wie viele Token pro Sekunde liefert eine RTX 3090?',
            a: 'Das hängt von Modellgröße und Quantisierung ab, und jede einzelne Zahl wäre irreführend. Die brauchbare Faustregel: Token-Generierung bei einem quantisierten Modell ist speicherbandbreitenlimitiert, weshalb die 936 GB/s der 3090 die aussagekräftigste Zahl sind — kleinere Modelle und stärkere Quantisierung bewegen mehr Token pro Sekunde.',
          },
          {
            q: 'Können zwei RTX 3090 ein 70B-Modell betreiben?',
            a: 'Ja. Zwei Karten liefern 48 GB VRAM, genug für ein Modell der 70B-Klasse bei 4-Bit-Quantisierung ohne Auslagerung in den Systemspeicher. Kalkulieren Sie ein Netzteil ab 1.000 W und ein Mainboard mit zwei passenden Slots — und mieten Sie zunächst für einen Nachmittag eine Zwei-GPU-Cloud-Instanz, um zu prüfen, ob das Setup das leistet, was Sie brauchen, bevor Sie rund 1.700 $ ausgeben.',
          },
          {
            q: 'Warum sind gebrauchte RTX-3090-Preise 2026 gestiegen?',
            a: 'Eine Speicherknappheit trieb die GPU-Preise 2026 breit über ihr früheres Niveau, und die Nachfrage nach 24-GB-Karten stieg unter Nutzern lokaler Modelle stärker als unter Gamern. Die Karte kostete im Frühjahr 600–800 $ und bis September 850–1.050 $. Sie ist eines der wenigen fünf Jahre alten Produkte, das teurer geworden ist.',
          },
          {
            q: 'Ist der Kauf einer gebrauchten Mining-GPU sicher?',
            a: 'Meist ja, mit Prüfung. Mining-Karten liefen unter konstant moderater Last, was schonender ist als das thermische Zyklen beim Gaming, brauchen aber oft neue Thermal-Pads. Fragen Sie nach einem Lasttest-Foto mit sichtbarer Speicher-Junction-Temperatur, kaufen Sie bei einem Verkäufer mit Rückgaberecht, und behandeln Sie jedes Angebot ohne beides als nicht überprüfbar.',
          },
          {
            q: 'Welches Netzteil braucht eine RTX 3090?',
            a: 'NVIDIA gibt 750 W für ein Ein-Karten-System an, und das ist das richtige Minimum. Die Karte zieht allein 350 W und hat kurze Lastspitzen deutlich darüber, sodass ein zu klein dimensioniertes oder minderwertiges Netzteil unter Last abschaltet, selbst wenn die Rechnung stimmt.',
          },
          {
            q: 'Bedeutet Mieten einer GPU, dass meine Daten meinen Rechner verlassen?',
            a: 'Ja — das ist der grundlegende Trade-off. Alles, was Sie auf einer gemieteten GPU verarbeiten, wird auf Hardware hochgeladen, die Sie nicht kontrollieren, und bei Marktplatz-Plattformen ist diese Hardware privat im Besitz. Bei regulierten, vertraulichen oder Kundendaten schließt das die Mietoption unabhängig von den Kosten aus, weshalb das Datenschutzargument fürs Kaufen gar nicht von der Break-even-Rechnung abhängt.',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[RTX-3090-Preistracker — Preisverlauf neu und gebraucht, Best Value GPU.](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[RTX-3090-Cloud-Preise bei 8 Anbietern, GetDeploying (aktualisiert 1. September 2026).](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[RTX-3090-GPU-Mietpreise, RunPod.](https://www.runpod.io/gpu-models/rtx-3090)',
          '[Eine gebrauchte RTX 3090 ist noch immer die beste GPU für lokale KI, XDA Developers.](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — durchschnittlicher Strompreis für Privathaushalte, US Energy Information Administration.](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Beste GPUs für lokale LLMs: Kompletter Kaufratgeber](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — die RTX 3090 gegen aktuelle Karten in jeder Preisklasse vergleichen.',
          '[Gebrauchte GPUs für lokale LLMs: Beste Preis-Leistungs-Tipps](/de/local-llms/used-gpus-for-local-llms) — der umfassendere Gebrauchtmarkt-Leitfaden zur RTX 3060, 3080 und 4090 neben dieser Karte.',
          '[Ollama vs. LM Studio](/de/local-llms/ollama-vs-lm-studio) — wie sich die beiden Tools, mit denen diese GPU zusammenarbeitet, tatsächlich unterscheiden, jenseits des gemeinsamen llama.cpp-Backends.',
          '[Günstigster praktischer Weg, ein 70B-Modell lokal zu betreiben](/de/prompt-bites/cheapest-way-to-run-70b-model-locally) — wo zwei RTX 3090 im günstigsten 70B-Setup ihren Platz finden.',
          '[Wie viel VRAM braucht ein 70B-Modell?](/de/prompt-bites/vram-for-70b-model) — die VRAM-Rechnung hinter der obigen Zwei-Karten-Empfehlung.',
          '[Local-LLM-Kostenrechner: Kaufen vs. mieten](/de/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — die Break-even-Rechnung mit Ihren eigenen Zahlen und Ihrer Hardware durchführen.',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-fr.webp',
    title: 'RTX 3090 pour LLM local en 2026 : acheter ou louer ?',
    seoTitle: 'RTX 3090 pour LLM local 2026 : acheter d\'occasion ou louer ?',

    intro: 'La RTX 3090 est le moyen le moins cher d\'avoir 24 Go de VRAM chez soi, et louer cette même carte dans le cloud coûte quelques centimes par heure. Ce guide détermine où se situe réellement la limite entre ces deux options.',
    metaDescription: 'Une RTX 3090 d\'occasion coûte 850–1 050 $ en 2026 ; la location revient à 0,12–0,22 $/heure. Voici le calcul du seuil de rentabilité achat vs location pour 24 Go de VRAM en LLM local.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs et petites équipes hésitant entre acheter un GPU 24 Go d\'occasion et louer du temps GPU cloud pour l\'inférence LLM locale',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 llm local',
      'la rtx 3090 vaut-elle encore le coup',
      'prix rtx 3090 occasion',
      'rtx 3090 vs location gpu cloud',
      'gpu 24 go vram pour llm',
      'rtx 3090 ollama',
      'rtx 3090 modèle 70b',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**Achetez une RTX 3090 d\'occasion si vous comptez l\'utiliser plus de quatre heures par jour environ pendant les deux prochaines années, ou si vos données ne peuvent pas quitter vos locaux. Louez-en une sinon.** À 850–1 050 $ d\'occasion contre 0,12–0,22 $ de l\'heure dans le cloud, la carte ne se rentabilise qu\'en usage soutenu — et en 2026 elle coûte plus cher qu\'au printemps, ce qui repousse le seuil de rentabilité plus loin que ce que la plupart des guides d\'achat admettent.',

    quickAnswerTop: {
      fr: {
        question: 'La RTX 3090 vaut-elle encore le coup pour les LLM locaux ?',
        answer: 'Oui, mais uniquement pour un usage soutenu ou des besoins liés à la confidentialité. Une RTX 3090 d\'occasion offre 24 Go de VRAM pour 850–1 050 $, ce qui reste le moyen le moins cher de faire tourner des modèles de classe 27B entièrement sur son propre matériel. Louer le même GPU coûte 0,12–0,22 $ de l\'heure, donc en usage léger le cloud reste moins cher pendant des années.',
        bullets: [
          '24 Go de VRAM, bande passante de 936 Go/s, 350 W — inchangés depuis 2020, toujours la carte 24 Go la moins chère',
          'Prix d\'occasion 850–1 050 $ ; en hausse depuis 600–800 $ au printemps 2026 à cause de la pénurie de mémoire',
          'Location cloud 0,12 $/h ([Vast.ai](https://Vast.ai)) à 0,22 $/h (RunPod Community) ; médiane 0,15 $/h sur 8 fournisseurs',
          'Le seuil de rentabilité face à une location à 0,15 $/h à raison de 2 h/jour est d\'environ 17 ans — à 8 h/jour, environ 4 ans',
          'Achetez pour la confidentialité, la latence, les agents actifs en permanence et le fine-tuning régulier ; louez pour les pics d\'usage et les expérimentations',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RTX 3090 pour LLM local en 2026 : acheter ou louer ?',
      description: 'Analyse du seuil de rentabilité entre acheter une NVIDIA RTX 3090 d\'occasion et louer le même GPU chez des fournisseurs cloud pour l\'inférence LLM locale, avec les prix 2026.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/fr/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'fr',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Développeurs et petites équipes faisant de l\'inférence LLM locale',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: 'Grands modèles de langage locaux' },
        { '@type': 'Thing', name: 'Location de GPU cloud' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/fr/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/fr/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: 'Points clés',
        numberedItems: [
          'Une RTX 3090 d\'occasion coûte 850–1 050 $ et offre 24 Go de VRAM — toujours le moyen le moins cher de posséder autant de mémoire vidéo.',
          'Louer le même GPU coûte 0,12 $/h sur Vast.ai et 0,22 $/h sur RunPod Community, avec une médiane de 0,15 $/h sur huit fournisseurs.',
          'Après déduction d\'environ 0,08 $/h d\'électricité, l\'achat ne l\'emporte qu\'après environ 12 300 heures GPU face à une location médiane — environ quatre ans à raison de huit heures par jour.',
          'La carte est devenue plus chère en 2026, pas moins chère : elle coûtait 600–800 $ au printemps. Cela éloigne le seuil de rentabilité, à l\'inverse de ce que supposent la plupart des guides d\'achat.',
          'Achetez pour la confidentialité, le travail hors ligne, les agents actifs en permanence et le fine-tuning régulier. Louez pour les pics d\'usage, les expérimentations et tout ce qui resterait inutilisé.',
          'La valeur de revente est le meilleur argument en faveur de l\'achat : une 3090 qui se revend encore plusieurs centaines de dollars dans deux ans transforme l\'achat en acompte plutôt qu\'en dépense.',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: 'Décidez en 30 secondes',
        content: 'Les deux options offrent le même GPU et les mêmes 24 Go de VRAM. La seule vraie question est le nombre d\'heures que vous utiliserez réellement, et si vos données peuvent quitter votre réseau.',
        decisionBlock: {
          title: 'Acheter une RTX 3090 d\'occasion, ou en louer une ?',
          localIf: [
            'Vous l\'utiliserez plus de 4 heures par jour environ, de façon régulière',
            'Vos données ne peuvent pas quitter vos locaux — santé, juridique, client ou secteur réglementé',
            'Vous voulez un agent actif en permanence, un assistant domestique ou des tâches nocturnes',
            'Vous faites du fine-tuning ou de l\'embedding régulièrement, pas occasionnellement',
            'Vous avez déjà un boîtier, une alimentation 750 W ou plus et un endroit pour évacuer la chaleur',
          ],
          cloudIf: [
            'Vous êtes encore en train de déterminer si l\'inférence locale vous convient',
            'Votre usage est irrégulier — un week-end chargé, puis deux semaines calmes',
            'Vous voulez tester un modèle de classe 70B sans acheter deux cartes',
            'Vous ne voulez pas posséder de matériel qui se déprécie',
            'Vous aurez besoin d\'un GPU différent le mois prochain',
          ],
          quick: [
            'Moins de 2 h/jour → louez, et réévaluez dans six mois',
            '4 h/jour ou plus, tous les jours → achetez, la carte se rentabilise',
            'Toute donnée que vous ne pouvez pas téléverser → achetez, le coût n\'est pas le facteur décisif',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Une RTX 3090 d\'occasion vaut l\'achat pour les LLM locaux si vous l\'utiliserez plus de quatre heures par jour environ pendant deux ans, ou si vos données ne peuvent pas être téléversées ; sinon, louer la même carte à 0,12–0,22 $ de l\'heure est plus économique.',
          },
          {
            type: 'plain-terms',
            text: 'Posséder la carte, c\'est comme acheter une voiture ; louer, c\'est comme prendre des taxis. Les taxis sont moins chers jusqu\'à ce qu\'on roule tous les jours — et la carte, contrairement à la voiture, conserve assez sa valeur pour qu\'on récupère une bonne partie de l\'argent à la revente.',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: 'En bref',
        items: [
          'VRAM : 24 Go GDDR6X — suffisant pour un modèle de classe 27B en quantification 4 bits avec de la marge pour le contexte.',
          'Bande passante mémoire : 936 Go/s, ce qui détermine en réalité la vitesse de génération de tokens sur une charge limitée par la mémoire.',
          'Puissance : TDP de 350 W pour la carte ; prévoyez environ 450 W à la prise pour l\'ensemble du système en charge d\'inférence.',
          'Prix d\'occasion : typiquement 850–1 050 $, moyenne eBay proche de 1 000 $ — en hausse depuis 600–800 $ au printemps 2026.',
          'Location cloud : 0,12 $/heure ([Vast.ai](https://Vast.ai)) à 0,50 $/heure (RunPod Secure) ; médiane 0,15 $/heure sur huit fournisseurs.',
          'Électricité : à la moyenne résidentielle US 2026 de 0,18 $/kWh, l\'exploitation coûte environ 0,08 $ de l\'heure.',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'Ce que la RTX 3090 apporte réellement',
        content: [
          '**La RTX 3090 se justifie pour une seule raison : 24 Go de VRAM au prix le plus bas du marché.** Le reste de la carte n\'a rien d\'exceptionnel en 2026 — conception de 2020, consommation de 350 W, et une carte actuelle la bat sur chaque indicateur d\'efficacité. Cela ne change rien au fait que les poids d\'un modèle tiennent en mémoire vidéo, ou pas.',
          'La VRAM est une falaise, pas une pente. Un modèle qui tient tourne à pleine vitesse ; un modèle qui déborde, même d\'un gigaoctet, bascule dans la mémoire système et s\'effondre à une fraction de la vitesse. Cela fait des 24 Go un seuil de capacité plutôt qu\'un chiffre de performance, et la 3090 est la carte la moins chère qui l\'atteint.',
          'Le second chiffre important est la bande passante mémoire. La génération de tokens d\'un modèle quantifié est limitée par la mémoire, pas par le calcul, donc 936 Go/s prédit mieux la sensation de vitesse que n\'importe quel nombre de cœurs CUDA. C\'est aussi pourquoi la 3090 reste compétitive face à des cartes milieu de gamme plus récentes, avec plus de calcul mais un bus mémoire plus étroit.',
          'En pratique : une marge confortable pour un modèle de classe 27B en quantification 4 bits, une inférence rapide sur des modèles 7B–14B avec long contexte, et — avec une seconde carte — la capacité de tenir un modèle de classe 70B en VRAM sans déchargement.',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: 'Ce que 24 Go permettent vraiment : tailles de modèles et quantification',
        content: [
          '**« Tient en 24 Go » et « tourne confortablement en usage interactif » sont deux affirmations différentes, et les guides d\'achat qui les confondent créent de fausses attentes.** Un modèle peut techniquement charger sans laisser aucune place au contexte, ce qui fonctionne pour un seul prompt court mais s\'effondre dès qu\'une conversation s\'allonge. Le tableau ci-dessous distingue les deux.',
          'La variable qui déplace un modèle entre ces colonnes est la longueur du contexte : chaque token d\'historique et chaque token généré occupe de la place dans le cache KV, en plus des poids eux-mêmes. Un modèle 27B en quantification 4 bits avec un contexte de 4K tient confortablement ; le même modèle poussé à 32K de contexte peut absorber la marge gagnée par la quantification.',
        ],
        columns: ['Classe de modèle', 'Tient en 24 Go (4 bits)', 'Usage interactif'],
        rows: [
          { 'Classe de modèle': '7B–8B', 'Tient en 24 Go (4 bits)': 'Oui, avec marge', 'Usage interactif': 'Rapide, long contexte confortable' },
          { 'Classe de modèle': '13B–14B', 'Tient en 24 Go (4 bits)': 'Oui', 'Usage interactif': 'Rapide, contexte généreux' },
          { 'Classe de modèle': '27B–34B', 'Tient en 24 Go (4 bits)': 'Oui', 'Usage interactif': 'Confortable / surveiller le cache KV en long contexte' },
          { 'Classe de modèle': '70B (4 bits, une carte)', 'Tient en 24 Go (4 bits)': 'Techniquement, avec déchargement CPU', 'Usage interactif': 'Lent — les couches déchargées bloquent la génération' },
          { 'Classe de modèle': '70B (4 bits, deux cartes)', 'Tient en 24 Go (4 bits)': 'Oui, 48 Go combinés', 'Usage interactif': 'Confortable, sans déchargement' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un modèle de classe 70B en quantification 4 bits demande environ 40–45 Go de VRAM rien que pour les poids, avant tout contexte. Une seule carte 24 Go n\'y arrive qu\'en déchargeant une partie du modèle vers la mémoire système, d\'où la mention « techniquement possible » plutôt que « confortable » pour la ligne à une carte ci-dessus.',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090 avec Ollama et LM Studio',
        content: [
          '**Les 24 Go de la RTX 3090 sont particulièrement pertinents pour Ollama et LM Studio, car les deux chargent par défaut un modèle entièrement en mémoire GPU quand il tient, et basculent vers un déchargement CPU/GPU plus lent sinon.** Avec 24 Go disponibles, les deux outils peuvent faire tourner des modèles de classe 27B entièrement sur la carte plutôt que de les répartir.',
          'La vitesse réelle en tokens par seconde dépend du modèle précis, du niveau de quantification, de la longueur du contexte, du backend utilisé (llama.cpp en coulisses pour les deux), de la part du prompt encore à traiter par rapport à ce qui est déjà en cache, et de ce qui tourne par ailleurs sur la même machine. Aucun des deux outils ne publie de benchmarks officiels pour la RTX 3090 — considérez donc tout chiffre isolé de « X tokens/s » vu ailleurs comme la configuration d\'une seule personne, pas une garantie pour la vôtre.',
          'En pratique : installez l\'un des deux outils, chargez un modèle de classe 27B en quantification 4 bits, et vérifiez l\'utilisation de la mémoire GPU avec `nvidia-smi` (ou l\'affichage propre à l\'outil) pendant l\'exécution — si l\'utilisation reste confortablement sous 24 Go, le modèle tourne entièrement sur la carte et vous bénéficiez de toute la bande passante mémoire de la RTX 3090.',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: 'Acheter d\'occasion : ce qu\'il faut vérifier avant de payer',
        sponsoredSlot: true,
        content: [
          '**Si vous achetez, achetez d\'occasion — personne ne vend plus la RTX 3090 neuve, et l\'avantage de prix se trouve sur le marché de l\'occasion.** À 850–1 050 $, c\'est la carte 24 Go la moins chère disponible, et elle conserve bien sa valeur de revente, ce qui réduit sensiblement le coût réel de possession.',
          'La réserve honnête : ce sont des cartes vieilles de cinq ans, souvent issues du minage ou du gaming, vendues sans garantie par des particuliers. Les modes de défaillance sont connus et vérifiables, le risque est donc gérable — mais il est réel, et c\'est pourquoi il vaut mieux acheter chez un vendeur qui accepte les retours plutôt que sur l\'annonce la moins chère trouvée.',
        ],
        items: [
          'Demandez une photo de la carte pendant un test de charge avec les températures visibles — une température de jonction mémoire au-delà d\'environ 100 °C sous charge indique des pads thermiques desséchés.',
          'Le GDDR6X de cette carte chauffe fort par conception ; un vendeur qui a remplacé les pads thermiques est bon signe, pas un signal d\'alerte.',
          'Confirmez qu\'il s\'agit bien de la RTX 3090 24 Go et non d\'une RTX 3080 — le titre de l\'annonce n\'est pas une preuve, demandez une capture d\'écran GPU-Z.',
          'Préférez une plateforme avec protection acheteur et retours possibles. Les 50 $ économisés sur une annonce sans retour ne valent pas le risque sur une carte de cinq ans.',
          'Vérifiez que la carte tient physiquement : la 3090 occupe trois slots sur la plupart des modèles et nécessite une alimentation de 750 W ou plus.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum ne participe à aucun programme d\'affiliation. Les liens ci-dessous ne portent aucun tag d\'affiliation et ne génèrent aucune commission — ce sont de simples liens de référence, fournis pour que vous puissiez vérifier le prix actuel vous-même.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24 Go (occasion)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Vérifier les prix de la RTX 3090 d\'occasion sur eBay',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24 Go (occasion/reconditionné)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Vérifier le stock de RTX 3090 sur Newegg',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: 'Choisir une carte : refroidissement, taille et connecteurs d\'alimentation',
        itemHeadings: true,
        content: [
          '**Chaque RTX 3090 offre les mêmes 24 Go de VRAM, la question de la compatibilité des modèles est donc réglée dès qu\'on choisit « RTX 3090 ». Ce qui diffère entre les cartes, c\'est le confort d\'usage au quotidien.** Aucun design de refroidissement d\'un fabricant n\'est objectivement meilleur sur toutes les annonces — l\'état sur le marché de l\'occasion varie plus que le design lui-même — mais voici les points à vérifier avant d\'acheter.',
        ],
        columns: ['Facteur', 'À vérifier'],
        rows: [
          { Facteur: 'Refroidissement', 'À vérifier': 'Les coolers triple ventilateur à air libre sont plus silencieux en charge soutenue que les cartes blower ; demandez le niveau sonore au repos et en inférence.' },
          { Facteur: 'Taille physique', 'À vérifier': 'La plupart des RTX 3090 occupent trois slots et dépassent 30 cm — mesurez votre boîtier avant l\'achat, pas après.' },
          { Facteur: 'Connecteurs d\'alimentation', 'À vérifier': 'PCIe 8 broches standard (deux ou trois) sur la plupart des modèles ; vérifiez que votre alimentation a assez de connecteurs natifs avant de compter sur des adaptateurs.' },
          { Facteur: 'Garantie', 'À vérifier': 'Les garanties constructeur de cette génération ont pour la plupart expiré — considérez toute 3090 d\'occasion comme vendue en l\'état, sauf indication contraire du vendeur.' },
          { Facteur: 'État d\'occasion', 'À vérifier': 'Un usage minier antérieur n\'est pas rédhibitoire (voir la checklist d\'achat ci-dessus) ; un overclocking intensif avec mauvais refroidissement est un signal de risque plus important.' },
          { Facteur: 'Prix vs risque', 'À vérifier': 'L\'annonce la moins chère n\'est pas la meilleure affaire sans retours possibles — un surcoût de 50–100 $ pour la protection acheteur vaut généralement le coup sur une carte de cinq ans.' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: 'Pourquoi louer est plus souvent la bonne réponse qu\'on ne le pense',
        content: [
          '**L\'argument en faveur de la location n\'est pas qu\'elle est toujours moins chère — c\'est qu\'un GPU inactif coûte autant qu\'un GPU occupé.** Une carte dans un poste utilisé le week-end a déjà coûté son prix d\'achat complet. Un GPU loué ne coûte rien entre deux sessions.',
          'Les raisons de louer sont concrètes, pas philosophiques : aucun débours initial, aucun risque de dépréciation sur une carte de cinq ans, aucune contrainte d\'alimentation, de boîtier ou de refroidissement, aucun week-end perdu quand un ventilateur tombe en panne. On peut aussi louer une carte qu\'on n\'achèterait jamais — tester un modèle de classe 70B sur deux GPU loués pendant un après-midi coûte quelques dollars, contre environ 1 700 $ pour une paire d\'occasion.',
          'Le contre-argument honnête : louer implique de vraies frictions. On téléverse des données sur la machine de quelqu\'un d\'autre, on attend une instance, et sur les plateformes de marché on tombe parfois sur un hôte qui disparaît en cours de travail. Ce ne sont pas des raisons d\'écarter la location — ce sont des raisons pour lesquelles la décision dépend de votre charge de travail, pas seulement du tarif horaire.',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'Louer une RTX 3090 : ce que ça coûte et où',
        sponsoredSlot: true,
        content: [
          '**Vast.ai est le moyen le moins cher de louer une RTX 3090, autour de 0,12 $ de l\'heure, et RunPod est l\'option la plus fiable à 0,22 $ de l\'heure sur son offre Community.** Cette différence résume tout l\'arbitrage : Vast.ai est un marché de GPU appartenant à des particuliers, donc des prix plus bas et une qualité d\'hôte variable ; RunPod gère sa propre capacité, donc coûte plus cher mais se comporte plus prévisiblement.',
          'Pour un premier essai, l\'offre bon marché convient parfaitement — une instance qui échoue sur une expérimentation ne coûte que le redémarrage. Pour tout ce qui a une échéance, ou tout travail dépassant quelques heures, les dix centimes supplémentaires par heure achètent exactement ce qu\'on veut : que le travail tourne encore à votre retour.',
        ],
        columns: ['Fournisseur', 'Prix/heure', 'Idéal pour'],
        rows: [
          { Fournisseur: 'Vast.ai', 'Prix/heure': '0,12 $', 'Idéal pour': 'Tarif horaire le plus bas ; expérimentations et pics d\'usage' },
          { Fournisseur: 'RunPod Community', 'Prix/heure': '0,22 $', 'Idéal pour': 'Capacité prévisible à léger surcoût' },
          { Fournisseur: 'RunPod Secure', 'Prix/heure': '0,50 $', 'Idéal pour': 'Fiabilité et support de niveau entreprise' },
          { Fournisseur: 'Médiane sur 8 fournisseurs', 'Prix/heure': '0,15 $', 'Idéal pour': 'Le chiffre à utiliser pour votre propre calcul de rentabilité' },
        ],
        items: [
          'Complexité de mise en place : Vast.ai et marchés similaires demandent de choisir soi-même un hôte et un template ; RunPod et autres fournisseurs gérés proposent des templates en un clic avec Ollama ou une interface web préinstallés.',
          'Persistance : une instance arrêtée reste souvent facturée pour le stockage associé chez la plupart des fournisseurs ; vérifiez si un fournisseur facture le stockage pendant que le GPU est en pause avant de laisser un gros modèle en cache entre deux sessions.',
          'Durée minimale de location : les annonces de marché sont généralement facturées à la minute sans minimum ; certaines offres de capacité gérée exigent un bloc minimum — vérifiez la page tarifaire du fournisseur concerné avant de vous engager.',
          'Disponibilité géographique : les GPU de marché se trouvent là où sont leurs propriétaires, une région précise n\'est donc pas garantie ; les fournisseurs gérés publient des régions de datacenter fixes, ce qui compte en cas d\'exigences de résidence des données.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Prix vérifiés le 1er septembre 2026 sur un tableau tarifaire multi-fournisseurs et la page produit de RunPod. Les tarifs GPU cloud changent chaque semaine — vérifiez les prix actuels avant de vous engager.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Location GPU RTX 3090 Vast.ai',
            productCategory: 'cloud-gpu',
            priceRange: 'À partir de 0,12 $/h',
            label: 'Voir les prix RTX 3090 sur Vast.ai',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'Location GPU RTX 3090 RunPod',
            productCategory: 'cloud-gpu',
            priceRange: 'À partir de 0,22 $/h',
            label: 'Voir les prix RTX 3090 sur RunPod',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: 'Le calcul du seuil de rentabilité',
        content: [
          '**Face à une location médiane à 0,15 $/heure, une carte à 850 $ met environ 12 300 heures GPU à se rentabiliser — environ quatre ans à huit heures par jour, ou dix-sept ans à deux heures.** C\'est le chiffre que la plupart des guides d\'achat omettent, et c\'est celui qui devrait guider l\'achat.',
          'Le calcul déduit ce que coûte l\'exploitation de la carte. À 450 W à la prise et à la moyenne US 2026 de 0,18 $/kWh, l\'inférence locale coûte environ 0,08 $ de l\'heure en électricité — vous ne comparez donc pas 850 $ à 0,15 $/heure, mais aux environ 0,07 $/heure que vous économisez réellement.',
          'Hypothèses : carte à 850 $, consommation système de 450 W, 0,18 $/kWh. Substituez votre propre tarif d\'électricité — il fait bouger le résultat plus que tout autre paramètre du tableau, et sur les marchés au-delà de 0,30 $/kWh, l\'argument de l\'achat disparaît largement.',
        ],
        columns: ['Usage', 'vs 0,12 $/h', 'vs 0,15 $/h', 'vs 0,22 $/h'],
        rows: [
          { Usage: '2 heures/jour', 'vs 0,12 $/h': '~30 ans', 'vs 0,15 $/h': '~17 ans', 'vs 0,22 $/h': '~8 ans' },
          { Usage: '4 heures/jour', 'vs 0,12 $/h': '~15 ans', 'vs 0,15 $/h': '~8 ans', 'vs 0,22 $/h': '~4 ans' },
          { Usage: '8 heures/jour', 'vs 0,12 $/h': '~7,5 ans', 'vs 0,15 $/h': '~4 ans', 'vs 0,22 $/h': '~2 ans' },
          { Usage: 'Allumé en permanence (24/7)', 'vs 0,12 $/h': '~2,5 ans', 'vs 0,15 $/h': '~1,4 an', 'vs 0,22 $/h': '~8 mois' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Ce tableau fait paraître l\'achat pire qu\'il ne l\'est réellement sur un point précis : il ignore la revente. Une RTX 3090 d\'occasion a conservé sa valeur pendant cinq ans, donc si vous la revendez, une bonne partie du prix d\'achat revient et chaque chiffre ci-dessus se réduit considérablement.',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: 'De quel côté vous êtes',
        itemHeadings: true,
        columns: ['Profil', 'Verdict', 'Pourquoi'],
        rows: [
          {
            Profil: 'Amateur du week-end',
            Verdict: 'Louer',
            Pourquoi: 'Quelques heures par semaine contre une dépense de 850 $, c\'est à des décennies du seuil de rentabilité. Louez pendant un an, et si vous vous surprenez à louer quotidiennement, achetez alors — vous saurez aussi exactement quelle carte il vous faut.',
          },
          {
            Profil: 'Utilisateur intensif quotidien',
            Verdict: 'Acheter',
            Pourquoi: 'À quatre heures par jour ou plus, la carte se rentabilise en quelques années, et la revente récupère une bonne partie du reste. Le vrai gain est comportemental : un GPU possédé n\'a pas de compteur qui tourne, on arrête de rationner ses expérimentations.',
          },
          {
            Profil: 'Petite équipe ou startup',
            Verdict: 'Louer d\'abord, acheter ensuite',
            Pourquoi: 'Louez tant que votre charge de travail évolue encore — vous ne savez pas encore si vous avez besoin de 24 Go ou de 80 Go. Achetez une fois l\'usage stable et assez prévisible pour être budgété, généralement le moment où la facture mensuelle commence à piquer.',
          },
          {
            Profil: 'Confidentialité ou conformité',
            Verdict: 'Acheter',
            Pourquoi: 'Le coût n\'est pas le facteur décisif. Si les données clients, dossiers de santé ou matériel réglementé ne peuvent pas être téléversés vers un hébergeur tiers, l\'option location n\'existe pas quel que soit le prix, et la 3090 est le moyen le moins cher de répondre à cette exigence.',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: 'Évitez la RTX 3090 si',
        content: [
          '**Évitez-la si vos modèles tiennent en 16 Go.** Si vous faites tourner des modèles 7B et 14B en 4 bits sans jamais toucher à plus gros, une carte 16 Go actuelle moins chère est plus silencieuse, consomme bien moins et bénéficie d\'une garantie. Payer le surcoût des 24 Go pour une marge jamais utilisée est l\'erreur la plus fréquente sur cet achat.',
          'Évitez-la aussi si vous achetez pour entraîner plutôt que pour faire de l\'inférence. Un fine-tuning substantiel sur une seule carte 24 Go implique une quantification agressive et de longues attentes ; louer une carte plus grosse pour quelques heures est à la fois plus rapide et moins cher.',
          'Et évitez-la si votre électricité est chère. À 0,30 $/kWh ou plus, le seul coût d\'exploitation se rapproche des tarifs cloud les moins chers, et l\'argument de la possession s\'efface largement.',
        ],
      },

      verdict: {
        id: 'verdict',
        title: 'Notre verdict',
        content: [
          '**Achetez une RTX 3090 d\'occasion si vous l\'utiliserez plus de quatre heures par jour environ pendant les deux prochaines années, ou si vos données ne peuvent pas quitter vos locaux — c\'est toujours le moyen le moins cher de posséder 24 Go de VRAM. Louez-en une si votre usage est occasionnel, irrégulier, ou si vous cherchez encore à savoir si l\'inférence locale convient à votre charge de travail. En cas de doute, louez d\'abord.**',
          'Pour un usage LLM local fréquent et la confidentialité : achetez. Pour une expérimentation occasionnelle : louez. En cas d\'usage incertain ou changeant : louez d\'abord, et réévaluez la décision dans six mois une fois vos heures réelles connues. Pour quiconque cherche spécifiquement de la VRAM 24 Go à bas prix, une RTX 3090 d\'occasion en bon état reste convaincante en 2026 — la hausse de prix due à la pénurie de mémoire n\'a rien changé à cela, elle a seulement repoussé le seuil de rentabilité. Pour un achat neuf où l\'efficacité, la garantie et les fonctionnalités actuelles comptent plus que le prix initial, comparez plutôt avec une [carte actuelle](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026).',
          'En résumé : l\'avantage de la RTX 3090 est ses 24 Go de VRAM à prix de marché d\'occasion. Ses coûts sont l\'âge, la forte consommation, la chaleur, le bruit et l\'absence de garantie. Aucun des deux côtés de cet arbitrage n\'a changé en 2026 — seul le prix d\'achat a bougé, et dans le sens défavorable à l\'achat.',
        ],
      },

      faqSection: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'La RTX 3090 vaut-elle encore l\'achat en 2026 ?',
            a: 'Pour une inférence locale soutenue, oui — elle reste la carte 24 Go d\'occasion la moins chère à 850–1 050 $. Pour un usage léger ou occasionnel, non : louer le même GPU à 0,12–0,22 $ de l\'heure est moins cher pendant des années. Le facteur décisif est le nombre d\'heures d\'usage réel par semaine, pas la fiche technique.',
          },
          {
            q: 'La RTX 3090 est-elle adaptée à Ollama ?',
            a: 'Oui. Ollama charge un modèle entièrement en mémoire GPU quand il tient, et 24 Go suffisent pour faire tourner des modèles de classe 27B en quantification 4 bits entièrement sur la carte plutôt que répartis entre CPU et GPU. Confirmez la résidence GPU complète avec `nvidia-smi` pendant le chargement d\'un modèle.',
          },
          {
            q: 'La RTX 3090 est-elle adaptée à LM Studio ?',
            a: 'Oui, pour la même raison qu\'Ollama — les deux s\'appuient sur un backend basé sur llama.cpp et bénéficient également des 24 Go de VRAM. LM Studio affiche directement l\'utilisation de la mémoire GPU dans son interface, ce qui facilite la vérification qu\'un modèle est entièrement chargé plutôt que partiellement déchargé.',
          },
          {
            q: 'RTX 3090 ou RTX 4090 pour les LLM locaux ?',
            a: 'Les deux ont 24 Go, elles font donc tourner les mêmes modèles. La 4090 est nettement plus rapide et bien plus économe en énergie, mais coûte environ le double d\'occasion. Si les modèles utilisés tiennent déjà, la 3090 offre la même capacité pour moins cher ; la 4090 vaut le coup quand la vitesse de génération est le facteur limitant.',
          },
          {
            q: 'Combien de tokens par seconde produit une RTX 3090 ?',
            a: 'Cela dépend de la taille du modèle et de la quantification, et tout chiffre unique serait trompeur. La règle utile : la génération de tokens d\'un modèle quantifié est limitée par la bande passante mémoire, donc les 936 Go/s de la 3090 sont le chiffre prédictif — modèles plus petits et quantification plus poussée déplacent plus de tokens par seconde.',
          },
          {
            q: 'Deux RTX 3090 peuvent-elles faire tourner un modèle 70B ?',
            a: 'Oui. Deux cartes offrent 48 Go de VRAM, suffisant pour un modèle de classe 70B en quantification 4 bits sans déchargement vers la mémoire système. Prévoyez une alimentation de 1 000 W ou plus et une carte mère avec deux emplacements adaptés — et louez d\'abord une instance cloud à deux GPU pour un après-midi, afin de confirmer que la configuration répond à vos besoins avant de dépenser environ 1 700 $.',
          },
          {
            q: 'Pourquoi les prix des RTX 3090 d\'occasion ont-ils augmenté en 2026 ?',
            a: 'Une pénurie de mémoire a fait grimper largement les prix des GPU en 2026, et la demande de cartes 24 Go a augmenté davantage chez les utilisateurs de modèles locaux que chez les joueurs. La carte se vendait 600–800 $ au printemps et 850–1 050 $ en septembre. C\'est l\'un des rares produits de cinq ans à être devenu plus cher.',
          },
          {
            q: 'Est-il prudent d\'acheter un GPU de minage d\'occasion ?',
            a: 'Généralement oui, avec vérifications. Les cartes de minage tournaient sous charge modérée constante, ce qui est plus doux que les cycles thermiques du gaming, mais nécessitent souvent de nouveaux pads thermiques. Demandez une photo de test de charge montrant la température de jonction mémoire, achetez chez un vendeur proposant des retours, et considérez toute annonce sans les deux comme invérifiable.',
          },
          {
            q: 'De quelle alimentation a besoin une RTX 3090 ?',
            a: 'NVIDIA spécifie 750 W pour un système à une carte, et c\'est le bon minimum. La carte consomme 350 W à elle seule et connaît de courtes pointes transitoires bien au-delà, donc une alimentation sous-dimensionnée ou de mauvaise qualité s\'arrêtera sous charge même si le calcul semble correct.',
          },
          {
            q: 'Louer un GPU signifie-t-il que mes données quittent ma machine ?',
            a: 'Oui — c\'est l\'arbitrage fondamental. Tout ce que vous traitez sur un GPU loué est téléversé vers du matériel que vous ne contrôlez pas, et sur les plateformes de marché, ce matériel appartient à des particuliers. Pour des données réglementées, confidentielles ou clients, cela exclut l\'option location quel que soit le coût, ce pour quoi l\'argument confidentialité en faveur de l\'achat ne dépend absolument pas du calcul de rentabilité.',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Suivi des prix de la RTX 3090 — historique des prix neuf et occasion, Best Value GPU.](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[Prix cloud de la RTX 3090 chez 8 fournisseurs, GetDeploying (mis à jour le 1er septembre 2026).](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[Tarifs de location GPU RTX 3090, RunPod.](https://www.runpod.io/gpu-models/rtx-3090)',
          '[Une RTX 3090 d\'occasion reste le meilleur GPU pour l\'IA locale, XDA Developers.](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — prix moyen de l\'électricité résidentielle, US Energy Information Administration.](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'À lire aussi',
        items: [
          '[Meilleurs GPU pour LLM locaux : guide d\'achat complet](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — comparez la RTX 3090 aux cartes actuelles à chaque niveau de prix.',
          '[GPU d\'occasion pour LLM locaux : meilleurs rapports qualité-prix](/fr/local-llms/used-gpus-for-local-llms) — le guide plus large du marché de l\'occasion couvrant la RTX 3060, la 3080 et la 4090 aux côtés de cette carte.',
          '[Ollama vs LM Studio](/fr/local-llms/ollama-vs-lm-studio) — en quoi les deux outils avec lesquels ce GPU fonctionne diffèrent réellement, au-delà du backend llama.cpp commun.',
          '[Le moyen le plus économique de faire tourner un modèle 70B en local](/fr/prompt-bites/cheapest-way-to-run-70b-model-locally) — où deux RTX 3090 s\'intègrent dans la configuration 70B la moins chère.',
          '[Combien de VRAM pour un modèle 70B ?](/fr/prompt-bites/vram-for-70b-model) — le calcul de VRAM derrière la recommandation à deux cartes ci-dessus.',
          '[Calculateur de coût LLM local : construire vs louer](/fr/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — effectuez le calcul de rentabilité avec vos propres chiffres et votre matériel.',
        ],
      },
    },
  },

  es: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-es.webp',
    title: 'RTX 3090 para LLM local en 2026: ¿comprar o alquilar?',
    seoTitle: 'RTX 3090 para LLM local 2026: ¿comprar usada o alquilar?',

    intro: 'La RTX 3090 es la forma más barata de tener 24 GB de VRAM en tu propio equipo, y alquilar la misma tarjeta en la nube cuesta céntimos por hora. Esta guía calcula dónde está realmente el límite entre ambas opciones.',
    metaDescription: 'Una RTX 3090 usada cuesta 850–1.050 $ en 2026; alquilarla cuesta 0,12–0,22 $/hora. Aquí el cálculo de punto de equilibrio comprar vs alquilar para 24 GB de VRAM en LLM local.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores y equipos pequeños que deciden entre comprar una GPU usada de 24 GB o alquilar tiempo de GPU en la nube para inferencia de LLM local',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 llm local',
      'vale la pena la rtx 3090',
      'precio rtx 3090 usada',
      'rtx 3090 vs alquiler gpu en la nube',
      'gpu 24gb vram para llm',
      'rtx 3090 ollama',
      'rtx 3090 modelo 70b',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**Compra una RTX 3090 usada si vas a usarla más de unas cuatro horas al día durante los próximos dos años, o si tus datos no pueden salir de tu edificio. Alquila en cualquier otro caso.** A 850–1.050 $ usada frente a 0,12–0,22 $ por hora en la nube, la tarjeta solo se amortiza con uso sostenido — y en 2026 cuesta más que en primavera, lo que aleja el punto de equilibrio más de lo que admiten la mayoría de las guías de compra.',

    quickAnswerTop: {
      es: {
        question: '¿Aún vale la pena comprar una RTX 3090 para LLM local?',
        answer: 'Sí, pero solo para uso sostenido o trabajo con restricciones de privacidad. Una RTX 3090 usada ofrece 24 GB de VRAM por 850–1.050 $, la forma más barata de ejecutar modelos de clase 27B enteramente en tu propio hardware. Alquilar la misma GPU cuesta 0,12–0,22 $ por hora, así que con uso ligero la nube es más barata durante años.',
        bullets: [
          '24 GB de VRAM, 936 GB/s de ancho de banda, 350 W — sin cambios desde 2020, sigue siendo la tarjeta de 24 GB más barata',
          'Precio usada 850–1.050 $; en aumento desde 600–800 $ en primavera de 2026 por la escasez de memoria',
          'Alquiler en la nube de 0,12 $/h ([Vast.ai](https://Vast.ai)) a 0,22 $/h (RunPod Community); mediana de 0,15 $/h entre 8 proveedores',
          'El punto de equilibrio frente a un alquiler de 0,15 $/h con 2 horas al día es de unos 17 años — con 8 horas al día, unos 4',
          'Compra para privacidad, latencia, agentes activos permanentemente y ajuste fino constante; alquila para picos de uso y experimentos',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RTX 3090 para LLM local en 2026: ¿comprar o alquilar?',
      description: 'Análisis de punto de equilibrio entre comprar una NVIDIA RTX 3090 usada y alquilar la misma GPU en proveedores de nube para inferencia de LLM local, con precios de 2026.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/es/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'es',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desarrolladores y equipos pequeños que ejecutan inferencia de LLM local',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: 'Modelos de lenguaje grandes locales' },
        { '@type': 'Thing', name: 'Alquiler de GPU en la nube' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/es/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/es/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: 'Puntos clave',
        numberedItems: [
          'Una RTX 3090 usada cuesta 850–1.050 $ y ofrece 24 GB de VRAM — sigue siendo la forma más barata de tener tanta memoria de video.',
          'Alquilar la misma GPU cuesta 0,12 $/hora en Vast.ai y 0,22 $/hora en RunPod Community, con una mediana de 0,15 $/hora entre ocho proveedores.',
          'Tras restar unos 0,08 $/hora de electricidad, comprar solo gana después de unas 12.300 horas de GPU frente a un alquiler mediano — unos cuatro años con ocho horas al día.',
          'La tarjeta se encareció en 2026, no se abarató: costaba 600–800 $ en primavera. Eso aleja el punto de equilibrio, justo lo contrario de lo que asumen la mayoría de las guías de compra.',
          'Compra para privacidad, trabajo sin conexión, agentes activos permanentemente y ajuste fino constante. Alquila para picos de uso, experimentos y todo lo que de otro modo quedaría inactivo.',
          'El valor de reventa es el argumento más fuerte a favor de comprar: una 3090 que aún se vende por cientos de dólares en dos años convierte gran parte de la compra en un depósito, no en un gasto.',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: 'Decide en 30 segundos',
        content: 'Ambos caminos dan la misma GPU y los mismos 24 GB de VRAM. La única pregunta real es cuántas horas la usarás realmente, y si tus datos pueden salir de tu red.',
        decisionBlock: {
          title: '¿Comprar una RTX 3090 usada o alquilar una?',
          localIf: [
            'La usarás más de unas 4 horas al día, de forma constante',
            'Tus datos no pueden salir de tu edificio — salud, legal, cliente o trabajo regulado',
            'Quieres un agente activo permanentemente, un asistente doméstico o trabajos por lotes nocturnos',
            'Haces ajuste fino o embeddings con regularidad, no ocasionalmente',
            'Ya tienes una caja, una fuente de 750 W o más y dónde disipar el calor',
          ],
          cloudIf: [
            'Todavía estás determinando si la inferencia local te conviene',
            'Tu uso es irregular — un fin de semana intenso, luego dos semanas tranquilas',
            'Quieres probar un modelo de clase 70B sin comprar dos tarjetas',
            'No quieres tener hardware que se deprecia',
            'Necesitarás una GPU distinta el mes que viene',
          ],
          quick: [
            'Menos de 2 horas al día → alquila, y revísalo en seis meses',
            '4+ horas al día, todos los días → compra, la tarjeta se amortiza',
            'Cualquier dato que no puedas subir → compra, el coste no es el factor decisivo',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Una RTX 3090 usada vale la pena para LLM local si vas a usarla más de unas cuatro horas al día durante dos años o tus datos no pueden subirse; de lo contrario, alquilar la misma tarjeta a 0,12–0,22 $ por hora es más barato.',
          },
          {
            type: 'plain-terms',
            text: 'Tener la tarjeta es como comprar un coche; alquilar es como tomar taxis. Los taxis son más baratos hasta que conduces todos los días — y la tarjeta, a diferencia del coche, mantiene su valor lo suficiente como para recuperar buena parte del dinero al venderla.',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          'VRAM: 24 GB GDDR6X — suficiente para un modelo de clase 27B en cuantización de 4 bits con margen para contexto.',
          'Ancho de banda de memoria: 936 GB/s, lo que realmente determina la velocidad de generación de tokens en una carga limitada por memoria.',
          'Potencia: TDP de 350 W de la tarjeta; calcula unos 450 W en el enchufe para todo el sistema bajo carga de inferencia.',
          'Precio usada: típicamente 850–1.050 $, con promedios en eBay cerca de 1.000 $ — en aumento desde 600–800 $ en primavera de 2026.',
          'Alquiler en la nube: 0,12 $/hora ([Vast.ai](https://Vast.ai)) a 0,50 $/hora (RunPod Secure); mediana de 0,15 $/hora entre ocho proveedores.',
          'Electricidad: con la media residencial de EE. UU. de 2026 de 0,18 $/kWh, operarla cuesta unos 0,08 $ por hora.',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'Qué te da realmente la RTX 3090',
        content: [
          '**La RTX 3090 importa por una razón: 24 GB de VRAM al precio más bajo que nadie ofrece.** Todo lo demás de la tarjeta es poco destacable en 2026 — es un diseño de 2020, consume 350 W, y una tarjeta actual la supera en cada métrica de eficiencia. Nada de eso cambia el hecho de que los pesos de un modelo caben en la memoria de video o no caben.',
          'La VRAM es un precipicio, no una pendiente. Un modelo que cabe funciona a máxima velocidad; un modelo que se desborda aunque sea un gigabyte se vuelca en la RAM del sistema y se derrumba a una fracción de la velocidad. Eso hace de los 24 GB un umbral de capacidad, no un número de rendimiento, y la 3090 es la tarjeta más barata que lo cruza.',
          'El segundo número importante es el ancho de banda de memoria. La generación de tokens de un modelo cuantizado está limitada por memoria, no por cómputo, así que 936 GB/s predicen mejor la sensación de velocidad que cualquier recuento de núcleos CUDA. Por eso la 3090 sigue siendo competitiva frente a tarjetas de gama media más nuevas con más cómputo pero un bus de memoria más estrecho.',
          'En la práctica: margen cómodo para un modelo de clase 27B en cuantización de 4 bits, inferencia rápida en modelos de 7B–14B con contexto largo, y — con una segunda tarjeta — la capacidad de mantener un modelo de clase 70B en VRAM sin offloading.',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: 'Qué se puede ejecutar realmente con 24 GB: tamaños de modelo y cuantización',
        content: [
          '**"Cabe en 24 GB" y "funciona cómodamente para uso interactivo" son dos afirmaciones distintas, y las guías de compra que las mezclan generan expectativas equivocadas.** Un modelo puede cargar técnicamente y aun así no dejar espacio para contexto, lo que significa que funciona para un solo prompt corto y falla en cuanto una conversación se alarga. La siguiente tabla separa ambas afirmaciones.',
          'La variable que mueve un modelo entre estas columnas es la longitud del contexto: cada token del historial de conversación y cada token generado necesita espacio en la caché KV, además de los propios pesos. Un modelo 27B en cuantización de 4 bits con contexto de 4K cabe cómodamente; el mismo modelo llevado a 32K de contexto puede consumir el margen que ganó la cuantización.',
        ],
        columns: ['Clase de modelo', 'Cabe en 24 GB (4 bits)', 'Uso interactivo'],
        rows: [
          { 'Clase de modelo': '7B–8B', 'Cabe en 24 GB (4 bits)': 'Sí, con margen de sobra', 'Uso interactivo': 'Rápido, contexto largo cómodo' },
          { 'Clase de modelo': '13B–14B', 'Cabe en 24 GB (4 bits)': 'Sí', 'Uso interactivo': 'Rápido, contexto generoso' },
          { 'Clase de modelo': '27B–34B', 'Cabe en 24 GB (4 bits)': 'Sí', 'Uso interactivo': 'Cómodo / vigilar la caché KV en contexto largo' },
          { 'Clase de modelo': '70B (4 bits, una tarjeta)', 'Cabe en 24 GB (4 bits)': 'Técnicamente, con offload a CPU', 'Uso interactivo': 'Lento — las capas descargadas ralentizan la generación' },
          { 'Clase de modelo': '70B (4 bits, dos tarjetas)', 'Cabe en 24 GB (4 bits)': 'Sí, 48 GB combinados', 'Uso interactivo': 'Cómodo, sin offloading' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un modelo de clase 70B en cuantización de 4 bits necesita unos 40–45 GB de VRAM solo para los pesos, antes de cualquier contexto. Una sola tarjeta de 24 GB lo logra únicamente descargando parte del modelo a la RAM del sistema, por lo que la fila de una sola tarjeta arriba figura como "técnicamente posible" y no "cómodo".',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090 con Ollama y LM Studio',
        content: [
          '**Los 24 GB de la RTX 3090 son especialmente relevantes para Ollama y LM Studio, porque ambos cargan un modelo por completo en memoria de GPU por defecto cuando cabe, y recurren a un offloading CPU/GPU más lento cuando no cabe.** Con 24 GB disponibles, ambas herramientas pueden ejecutar modelos de clase 27B enteramente en la tarjeta en lugar de dividirlos.',
          'La velocidad real en tokens por segundo depende del modelo concreto, el nivel de cuantización, la longitud del contexto, qué build del backend se usa (llama.cpp por debajo en ambos casos), cuánto del prompt aún necesita procesarse frente a lo que ya está en caché, y qué más corre en la misma máquina. Ninguna de las dos herramientas publica benchmarks oficiales de la RTX 3090, así que trata cualquier cifra suelta de "X tokens/seg" que veas en otro lugar como la configuración de una sola persona, no una garantía para la tuya.',
          'En la práctica: instala una de las dos herramientas, carga un modelo de clase 27B en cuantización de 4 bits, y comprueba el uso de memoria de GPU con `nvidia-smi` (o el propio indicador de la herramienta) mientras funciona — si el uso queda cómodamente por debajo de 24 GB, el modelo está completamente en la tarjeta y obtienes todo el ancho de banda de memoria de la RTX 3090.',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: 'Comprar usada: qué revisar antes de pagar',
        sponsoredSlot: true,
        content: [
          '**Si compras, compra usada — ya nadie vende la RTX 3090 nueva, y la ventaja de precio está en el mercado de segunda mano.** A 850–1.050 $ es la tarjeta de 24 GB más barata disponible, y mantiene bien su valor de reventa, lo que reduce de forma notable el coste real de propiedad.',
          'La advertencia honesta: son tarjetas de cinco años, muchas ex-minería o ex-gaming, vendidas sin garantía por particulares. Los modos de fallo son conocidos y verificables, así que el riesgo es manejable — pero es real, y por eso conviene comprar a un vendedor con devoluciones en lugar del anuncio más barato que encuentres.',
        ],
        items: [
          'Pide una foto de la tarjeta durante una prueba de carga con las temperaturas visibles — una temperatura de unión de memoria por encima de unos 100 °C bajo carga indica pads térmicos resecos.',
          'El GDDR6X de esta tarjeta se calienta mucho por diseño; un vendedor que ha reemplazado los pads térmicos es buena señal, no una alerta.',
          'Confirma que es la RTX 3090 de 24 GB y no una RTX 3080 — el título del anuncio no es prueba, pide una captura de GPU-Z.',
          'Prefiere una plataforma con protección al comprador y devoluciones. Los 50 $ que ahorras en un anuncio sin devoluciones no compensan el riesgo en una tarjeta de cinco años.',
          'Comprueba que la tarjeta encaja físicamente: la 3090 ocupa tres ranuras en la mayoría de los diseños y necesita una fuente de 750 W o más.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum no participa en ningún programa de afiliados. Los enlaces de abajo no llevan etiquetas de afiliado ni generan comisión — son enlaces de referencia simples, para que puedas comprobar el precio actual por ti mismo.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB (usada)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Comprobar precios de RTX 3090 usada en eBay',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB (usada/reacondicionada)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Comprobar stock de RTX 3090 en Newegg',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: 'Elegir una tarjeta: refrigeración, tamaño y conectores de alimentación',
        itemHeadings: true,
        content: [
          '**Toda RTX 3090 tiene los mismos 24 GB de VRAM, así que la cuestión de qué modelos caben queda resuelta en cuanto eliges "RTX 3090". Lo que varía entre tarjetas es lo cómodo que resulta tenerla.** Ningún diseño de refrigeración de un fabricante concreto es objetivamente el mejor en todos los anuncios — el estado en el mercado de segunda mano varía más que el diseño —, pero estos son los factores que vale la pena revisar antes de comprar.',
        ],
        columns: ['Factor', 'Qué revisar'],
        rows: [
          { Factor: 'Diseño de refrigeración', 'Qué revisar': 'Los disipadores de triple ventilador abierto son más silenciosos bajo carga sostenida que las tarjetas tipo blower; pregunta cuánto ruido hace en reposo frente a inferencia.' },
          { Factor: 'Tamaño físico', 'Qué revisar': 'La mayoría de las RTX 3090 ocupan tres ranuras y superan los 30 cm — mide tu caja antes de comprar, no después.' },
          { Factor: 'Conectores de alimentación', 'Qué revisar': 'PCIe de 8 pines estándar (dos o tres) en la mayoría de los modelos; confirma que tu fuente tiene suficientes conectores nativos antes de depender de adaptadores.' },
          { Factor: 'Garantía', 'Qué revisar': 'Las garantías originales del fabricante para esta generación en su mayoría han expirado — trata cualquier 3090 usada como vendida tal cual, salvo que el vendedor indique lo contrario.' },
          { Factor: 'Estado de uso', 'Qué revisar': 'El uso previo en minería no descalifica (ver la lista de comprobación de compra arriba); un overclock intenso con mala refrigeración es una señal de riesgo mayor.' },
          { Factor: 'Precio vs. riesgo', 'Qué revisar': 'El anuncio más barato no es la mejor oferta si no admite devoluciones — un sobreprecio de 50–100 $ por protección al comprador suele valer la pena en una tarjeta de cinco años.' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: 'Por qué alquilar es la mejor respuesta con más frecuencia de la esperada',
        content: [
          '**El argumento a favor del alquiler no es que siempre sea más barato — es que una GPU inactiva cuesta lo mismo que una ocupada.** Una tarjeta en un escritorio que se usa los fines de semana ya ha costado su precio de compra completo. Una GPU alquilada no cuesta nada entre sesiones.',
          'Las razones para alquilar son concretas, no filosóficas: sin desembolso inicial, sin riesgo de depreciación en una tarjeta de cinco años, sin restricciones de fuente, caja o refrigeración, sin fines de semana perdidos cuando falla un ventilador. También puedes alquilar una tarjeta que nunca comprarías — probar un modelo de clase 70B en dos GPU alquiladas durante una tarde cuesta unos dólares, frente a unos 1.700 $ por un par usado.',
          'El contraargumento honesto es que alquilar tiene fricción real. Subes datos a la máquina de otra persona, esperas una instancia, y en proveedores de marketplace a veces te toca un host que desaparece a mitad de trabajo. Esas no son razones para descartarlo — son razones por las que la decisión depende de tu carga de trabajo, no solo de la tarifa por hora.',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'Alquilar una RTX 3090: qué cuesta y dónde',
        sponsoredSlot: true,
        content: [
          '**Vast.ai es la forma más barata de alquilar una RTX 3090, a unos 0,12 $ por hora, y RunPod es la opción más fiable a 0,22 $ por hora en su nivel Community.** Esa diferencia resume todo el compromiso: Vast.ai es un marketplace de GPU de propiedad privada, así que los precios son más bajos y la calidad del host varía; RunPod gestiona su propia capacidad, así que cuesta más pero se comporta de forma más predecible.',
          'Para una primera prueba, el nivel barato está bien — una instancia fallida en un experimento solo cuesta el reinicio. Para cualquier cosa con plazo, o cualquier trabajo de más de unas pocas horas, los diez céntimos extra por hora compran justo lo que quieres: que el trabajo siga corriendo cuando vuelvas.',
        ],
        columns: ['Proveedor', 'Precio/hora', 'Mejor para'],
        rows: [
          { Proveedor: 'Vast.ai', 'Precio/hora': '0,12 $', 'Mejor para': 'Tarifa por hora más barata; experimentos y picos de uso' },
          { Proveedor: 'RunPod Community', 'Precio/hora': '0,22 $', 'Mejor para': 'Capacidad predecible con un ligero sobreprecio' },
          { Proveedor: 'RunPod Secure', 'Precio/hora': '0,50 $', 'Mejor para': 'Fiabilidad y soporte de nivel empresarial' },
          { Proveedor: 'Mediana de 8 proveedores', 'Precio/hora': '0,15 $', 'Mejor para': 'La cifra a usar en tu propio cálculo de punto de equilibrio' },
        ],
        items: [
          'Complejidad de configuración: Vast.ai y marketplaces similares requieren elegir un host y una plantilla tú mismo; RunPod y otros proveedores gestionados ofrecen plantillas de un clic con Ollama o una interfaz web preinstalados.',
          'Persistencia: una instancia detenida en la mayoría de proveedores sigue facturando el almacenamiento asociado; comprueba si un proveedor cobra almacenamiento mientras la GPU está en pausa antes de dejar un modelo grande en caché entre sesiones.',
          'Alquiler mínimo: los anuncios de marketplace suelen facturarse por minuto sin mínimo; algunos niveles de capacidad gestionada exigen un bloque mínimo — comprueba la página de precios del proveedor concreto antes de comprometerte a un trabajo.',
          'Disponibilidad geográfica: las GPU de marketplace están donde estén sus propietarios, así que una región específica no está garantizada; los proveedores gestionados publican regiones de centro de datos fijas, lo cual importa si tienes requisitos de residencia de datos.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Precios verificados el 1 de septiembre de 2026 con una tabla de precios multi-proveedor y la propia página de modelo de RunPod. Las tarifas de GPU en la nube cambian semanalmente — comprueba los precios actuales antes de comprometerte.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Alquiler de GPU RTX 3090 en Vast.ai',
            productCategory: 'cloud-gpu',
            priceRange: 'Desde 0,12 $/h',
            label: 'Ver precios de RTX 3090 en Vast.ai',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'Alquiler de GPU RTX 3090 en RunPod',
            productCategory: 'cloud-gpu',
            priceRange: 'Desde 0,22 $/h',
            label: 'Ver precios de RTX 3090 en RunPod',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: 'El cálculo del punto de equilibrio',
        content: [
          '**Frente a un alquiler mediano de 0,15 $/hora, una tarjeta de 850 $ tarda unas 12.300 horas de GPU en amortizarse — unos cuatro años con ocho horas al día, o diecisiete años con dos.** Esa es la cifra que la mayoría de las guías de compra omite, y la que debería decidir la compra.',
          'El cálculo resta lo que cuesta operar la tarjeta. A 450 W en el enchufe y la media de EE. UU. de 2026 de 0,18 $/kWh, la inferencia local cuesta unos 0,08 $ por hora en electricidad, así que no estás comparando 850 $ contra 0,15 $/hora, sino contra los aproximadamente 0,07 $/hora que realmente ahorras.',
          'Supuestos: tarjeta de 850 $, consumo del sistema de 450 W, 0,18 $/kWh. Sustituye tu propia tarifa eléctrica — mueve el resultado más que cualquier otra cosa en la tabla, y en mercados por encima de 0,30 $/kWh el argumento de comprar prácticamente desaparece.',
        ],
        columns: ['Uso', 'vs 0,12 $/h', 'vs 0,15 $/h', 'vs 0,22 $/h'],
        rows: [
          { Uso: '2 horas al día', 'vs 0,12 $/h': '~30 años', 'vs 0,15 $/h': '~17 años', 'vs 0,22 $/h': '~8 años' },
          { Uso: '4 horas al día', 'vs 0,12 $/h': '~15 años', 'vs 0,15 $/h': '~8 años', 'vs 0,22 $/h': '~4 años' },
          { Uso: '8 horas al día', 'vs 0,12 $/h': '~7,5 años', 'vs 0,15 $/h': '~4 años', 'vs 0,22 $/h': '~2 años' },
          { Uso: 'Encendida siempre (24/7)', 'vs 0,12 $/h': '~2,5 años', 'vs 0,15 $/h': '~1,4 años', 'vs 0,22 $/h': '~8 meses' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Esta tabla hace que comprar parezca peor de lo que es en un punto concreto: ignora la reventa. Una RTX 3090 usada ha mantenido su valor durante cinco años, así que si la revendes, buena parte del precio de compra vuelve y cada cifra de arriba se reduce considerablemente.',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: 'En qué lado estás',
        itemHeadings: true,
        columns: ['Lector', 'Veredicto', 'Por qué'],
        rows: [
          {
            Lector: 'Aficionado de fin de semana',
            Veredicto: 'Alquilar',
            'Por qué': 'Unas horas a la semana frente a un desembolso de 850 $ están a décadas del punto de equilibrio. Alquila durante un año, y si te encuentras alquilando a diario, compra entonces — también sabrás exactamente qué tarjeta necesitas.',
          },
          {
            Lector: 'Usuario intensivo diario',
            Veredicto: 'Comprar',
            'Por qué': 'Con cuatro o más horas al día la tarjeta se amortiza en pocos años, y la reventa recupera buena parte del resto. La mayor ganancia es de comportamiento: una GPU propia no tiene contador corriendo, así que dejas de racionar experimentos.',
          },
          {
            Lector: 'Equipo pequeño o startup',
            Veredicto: 'Alquilar primero, comprar después',
            'Por qué': 'Alquila mientras tu carga de trabajo aún cambia de forma — todavía no sabes si necesitas 24 GB u 80 GB. Compra una vez que el uso sea lo bastante estable y predecible para presupuestar, que suele ser el momento en que la factura mensual empieza a doler.',
          },
          {
            Lector: 'Vinculado a privacidad o cumplimiento',
            Veredicto: 'Comprar',
            'Por qué': 'El coste no es el factor decisivo. Si los datos de clientes, historiales médicos o material regulado no pueden subirse a un host externo, la opción de alquiler no existe sin importar el precio, y la 3090 es la forma más barata de cumplir ese requisito.',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: 'Evita la RTX 3090 si',
        content: [
          '**Evítala si tus modelos caben en 16 GB.** Si ejecutas modelos 7B y 14B en 4 bits y nunca tocas nada más grande, una tarjeta actual de 16 GB más barata es más silenciosa, consume mucho menos y tiene garantía. Pagar el sobreprecio de los 24 GB por un margen que nunca usas es el error más común en esta compra.',
          'Evítala también si compras para entrenar en lugar de para inferencia. Un ajuste fino sustancial en una sola tarjeta de 24 GB implica cuantización agresiva y esperas largas; alquilar una tarjeta más grande por unas horas es a la vez más rápido y más barato.',
          'Y evítala si tu electricidad es cara. A 0,30 $/kWh o más, el coste de operación por sí solo se acerca a las tarifas de nube más baratas, y el argumento de tener la tarjeta prácticamente desaparece.',
        ],
      },

      verdict: {
        id: 'verdict',
        title: 'Nuestro veredicto',
        content: [
          '**Compra una RTX 3090 usada si vas a usarla más de unas cuatro horas al día durante los próximos dos años, o si tus datos no pueden salir de tu edificio — sigue siendo la forma más barata de tener 24 GB de VRAM. Alquila una si tu uso es ocasional, irregular, o todavía estás averiguando si la inferencia local le conviene a tu carga de trabajo. Si tienes dudas, alquila primero.**',
          'Para uso frecuente de LLM local y privacidad: compra. Para experimentación ocasional: alquila. Para uso incierto o cambiante: alquila primero, y revisa la decisión en seis meses cuando conozcas tus horas reales. Para quien busque específicamente VRAM de 24 GB barata, una RTX 3090 usada en buen estado sigue siendo convincente en 2026 — el aumento de precio por la escasez de memoria no ha cambiado eso, solo ha alejado el punto de equilibrio. Para una compra nueva donde la eficiencia, la garantía y las funciones actuales importan más que el precio inicial, compara en su lugar con una [tarjeta actual](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026).',
          'En resumen: la ventaja de la RTX 3090 son 24 GB de VRAM a precios de mercado usado. Sus costes son la antigüedad, el alto consumo, el calor, el ruido y la falta de garantía. Ningún lado de ese compromiso ha cambiado en 2026 — solo el precio de compra, y se movió en contra de comprar.',
        ],
      },

      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Aún vale la pena comprar la RTX 3090 en 2026?',
            a: 'Para inferencia local sostenida, sí — sigue siendo la tarjeta de 24 GB usada más barata a 850–1.050 $. Para uso ligero u ocasional, no: alquilar la misma GPU a 0,12–0,22 $ por hora es más barato durante años. El factor decisivo son las horas de uso real por semana, no la ficha técnica.',
          },
          {
            q: '¿Es buena la RTX 3090 para Ollama?',
            a: 'Sí. Ollama carga un modelo por completo en la memoria de GPU cuando cabe, y 24 GB bastan para ejecutar modelos de clase 27B en cuantización de 4 bits enteramente en la tarjeta en lugar de dividirlos entre CPU y GPU. Confirma la residencia completa en GPU con `nvidia-smi` mientras un modelo está cargado.',
          },
          {
            q: '¿Es buena la RTX 3090 para LM Studio?',
            a: 'Sí, por la misma razón que Ollama — ambos funcionan sobre un backend basado en llama.cpp y se benefician igualmente de los 24 GB de VRAM. LM Studio muestra el uso de memoria de GPU directamente en su interfaz, lo que facilita confirmar si un modelo está totalmente cargado en lugar de parcialmente descargado.',
          },
          {
            q: '¿RTX 3090 o RTX 4090 para LLM locales?',
            a: 'Ambas tienen 24 GB, así que ejecutan los mismos modelos. La 4090 es notablemente más rápida y mucho más eficiente en energía, pero cuesta aproximadamente el doble usada. Si los modelos que usas ya caben, la 3090 da la misma capacidad por menos dinero; la 4090 vale la pena cuando la velocidad de generación es lo que limita tu trabajo.',
          },
          {
            q: '¿Cuántos tokens por segundo produce una RTX 3090?',
            a: 'Depende del tamaño del modelo y la cuantización, y cualquier cifra única sería engañosa. La regla útil es que la generación de tokens en un modelo cuantizado está limitada por el ancho de banda de memoria, así que los 936 GB/s de la 3090 son la cifra que lo predice — modelos más pequeños y cuantización más agresiva mueven más tokens por segundo.',
          },
          {
            q: '¿Pueden dos RTX 3090 ejecutar un modelo de 70B?',
            a: 'Sí. Dos tarjetas dan 48 GB de VRAM, suficiente para un modelo de clase 70B en cuantización de 4 bits sin descargar a la RAM del sistema. Prevé una fuente de 1.000 W o más y una placa base con dos ranuras adecuadas — y alquila primero una instancia en la nube con dos GPU durante una tarde para confirmar que la configuración hace lo que necesitas antes de gastar unos 1.700 $.',
          },
          {
            q: '¿Por qué subieron los precios de la RTX 3090 usada en 2026?',
            a: 'Una escasez de memoria elevó ampliamente los precios de GPU durante 2026, y la demanda de tarjetas de 24 GB creció más entre quienes ejecutan modelos localmente que entre jugadores. La tarjeta se vendía por 600–800 $ en primavera y 850–1.050 $ hacia septiembre. Es uno de los pocos productos de cinco años que se encareció.',
          },
          {
            q: '¿Es seguro comprar una GPU de minería usada?',
            a: 'Generalmente sí, con comprobaciones. Las tarjetas de minería funcionaban con carga moderada constante, más suave que los ciclos térmicos del gaming, pero suelen necesitar pads térmicos nuevos. Pide una foto de prueba de carga que muestre la temperatura de unión de memoria, compra a un vendedor que ofrezca devoluciones, y trata cualquier anuncio sin ambas cosas como imposible de verificar.',
          },
          {
            q: '¿Qué fuente de alimentación necesita una RTX 3090?',
            a: 'NVIDIA especifica 750 W para un sistema de una sola tarjeta, y ese es el mínimo correcto. La tarjeta consume 350 W por sí sola y tiene picos transitorios breves muy por encima, así que una fuente insuficiente o de baja calidad se apagará bajo carga aunque la aritmética parezca correcta.',
          },
          {
            q: '¿Alquilar una GPU significa que mis datos salen de mi equipo?',
            a: 'Sí — ese es el compromiso fundamental. Todo lo que proceses en una GPU alquilada se sube a hardware que no controlas, y en plataformas de marketplace ese hardware es de propiedad privada. Para datos regulados, confidenciales o de clientes, eso descarta la opción de alquiler sin importar el coste, por lo que el argumento de privacidad a favor de comprar no depende en absoluto del cálculo de punto de equilibrio.',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Rastreador de precios de la RTX 3090 — historial de precios nueva y usada, Best Value GPU.](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[Precios en la nube de la RTX 3090 entre 8 proveedores, GetDeploying (actualizado el 1 de septiembre de 2026).](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[Precios de alquiler de GPU RTX 3090, RunPod.](https://www.runpod.io/gpu-models/rtx-3090)',
          '[Una RTX 3090 usada sigue siendo la mejor GPU para IA local, XDA Developers.](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — precio medio de electricidad residencial, US Energy Information Administration.](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores GPU para LLM locales: guía de compra completa](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — compara la RTX 3090 con tarjetas actuales en cada rango de precio.',
          '[GPU usadas para LLM locales: mejores opciones por valor](/es/local-llms/used-gpus-for-local-llms) — la guía más amplia del mercado usado, que cubre la RTX 3060, 3080 y 4090 junto a esta tarjeta.',
          '[Ollama vs LM Studio](/es/local-llms/ollama-vs-lm-studio) — en qué se diferencian realmente las dos herramientas con las que trabaja esta GPU, más allá de compartir un backend llama.cpp.',
          '[La forma práctica más barata de ejecutar un modelo 70B localmente](/es/prompt-bites/cheapest-way-to-run-70b-model-locally) — dónde encajan dos RTX 3090 en la configuración 70B más económica.',
          '[¿Cuánta VRAM necesita un modelo 70B?](/es/prompt-bites/vram-for-70b-model) — la aritmética de VRAM detrás de la recomendación de dos tarjetas anterior.',
          '[Calculadora de coste de LLM local: comprar vs alquilar](/es/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — ejecuta el cálculo de punto de equilibrio con tus propias cifras y tu hardware.',
        ],
      },
    },
  },

  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-pt.webp',
    title: 'RTX 3090 para LLM local em 2026: comprar ou alugar?',
    seoTitle: 'RTX 3090 para LLM local 2026: comprar usada ou alugar?',

    intro: 'A RTX 3090 é a forma mais barata de ter 24 GB de VRAM na sua própria máquina, e alugar a mesma placa na nuvem custa centavos por hora. Este guia calcula onde realmente fica a fronteira entre as duas opções.',
    metaDescription: 'Uma RTX 3090 usada custa US$ 850–1.050 em 2026; alugar custa US$ 0,12–0,22/hora. Veja o cálculo de ponto de equilíbrio entre comprar e alugar 24 GB de VRAM para LLM local.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores e pequenas equipes decidindo entre comprar uma GPU usada de 24 GB e alugar tempo de GPU na nuvem para inferência de LLM local',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 llm local',
      'rtx 3090 ainda vale a pena',
      'preço rtx 3090 usada',
      'rtx 3090 vs aluguel de gpu na nuvem',
      'gpu 24gb vram para llm',
      'rtx 3090 ollama',
      'rtx 3090 modelo 70b',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**Compre uma RTX 3090 usada se você for usá-la mais de cerca de quatro horas por dia nos próximos dois anos, ou se seus dados não puderem sair do seu prédio. Alugue nos demais casos.** A US$ 850–1.050 usada contra US$ 0,12–0,22 por hora na nuvem, a placa só se paga com uso sustentado — e em 2026 ela custa mais do que na primavera, o que empurra o ponto de equilíbrio mais adiante do que a maioria dos guias de compra admite.',

    quickAnswerTop: {
      pt: {
        question: 'A RTX 3090 ainda vale a pena comprar para LLM local?',
        answer: 'Sim, mas só para uso sustentado ou trabalho ligado à privacidade. Uma RTX 3090 usada oferece 24 GB de VRAM por US$ 850–1.050, ainda o caminho mais barato para rodar modelos de classe 27B inteiramente no seu próprio hardware. Alugar a mesma GPU custa US$ 0,12–0,22 por hora, então em uso leve a nuvem sai mais barata por anos.',
        bullets: [
          '24 GB de VRAM, 936 GB/s de largura de banda, 350 W — sem mudanças desde 2020, ainda a placa de 24 GB mais barata',
          'Preço usada US$ 850–1.050; subiu de US$ 600–800 na primavera de 2026 por causa da escassez de memória',
          'Aluguel na nuvem de US$ 0,12/h ([Vast.ai](https://Vast.ai)) a US$ 0,22/h (RunPod Community); mediana de US$ 0,15/h entre 8 provedores',
          'O ponto de equilíbrio contra um aluguel de US$ 0,15/h com 2 horas por dia é de cerca de 17 anos — com 8 horas por dia, cerca de 4',
          'Compre para privacidade, latência, agentes sempre ativos e ajuste fino constante; alugue para picos de uso e experimentos',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RTX 3090 para LLM local em 2026: comprar ou alugar?',
      description: 'Análise de ponto de equilíbrio entre comprar uma NVIDIA RTX 3090 usada e alugar a mesma GPU em provedores de nuvem para inferência de LLM local, com preços de 2026.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
        sameAs: 'https://www.linkedin.com/in/hanskuepper/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/pt/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'pt-BR',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'Desenvolvedores e pequenas equipes que rodam inferência de LLM local',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: 'Modelos de linguagem grandes locais' },
        { '@type': 'Thing', name: 'Aluguel de GPU na nuvem' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/pt/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/pt/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: 'Pontos principais',
        numberedItems: [
          'Uma RTX 3090 usada custa US$ 850–1.050 e oferece 24 GB de VRAM — ainda a forma mais barata de ter tanta memória de vídeo.',
          'Alugar a mesma GPU custa US$ 0,12/hora na Vast.ai e US$ 0,22/hora na RunPod Community, com mediana de US$ 0,15/hora entre oito provedores.',
          'Depois de descontar cerca de US$ 0,08/hora de energia elétrica, comprar só vence após cerca de 12.300 horas de GPU contra um aluguel mediano — cerca de quatro anos com oito horas por dia.',
          'A placa ficou mais cara em 2026, não mais barata: custava US$ 600–800 na primavera. Isso afasta o ponto de equilíbrio, o oposto do que a maioria dos guias de compra assume.',
          'Compre para privacidade, trabalho offline, agentes sempre ativos e ajuste fino constante. Alugue para picos de uso, experimentos e qualquer coisa que ficaria ociosa.',
          'O valor de revenda é o argumento mais forte a favor da compra: uma 3090 que ainda vende por várias centenas de dólares em dois anos transforma boa parte da compra em um depósito, não em um custo.',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: 'Decida em 30 segundos',
        content: 'Os dois caminhos dão a mesma GPU e os mesmos 24 GB de VRAM. A única pergunta real é quantas horas você vai realmente usá-la, e se seus dados podem sair da sua rede.',
        decisionBlock: {
          title: 'Comprar uma RTX 3090 usada ou alugar uma?',
          localIf: [
            'Você vai usá-la mais de cerca de 4 horas por dia, de forma constante',
            'Seus dados não podem sair do seu prédio — saúde, jurídico, cliente ou trabalho regulado',
            'Você quer um agente sempre ativo, um assistente doméstico ou tarefas em lote durante a noite',
            'Você faz ajuste fino ou embeddings regularmente, não ocasionalmente',
            'Você já tem gabinete, fonte de 750 W ou mais e um lugar para dissipar o calor',
          ],
          cloudIf: [
            'Você ainda está avaliando se a inferência local combina com você',
            'Seu uso é irregular — um fim de semana intenso, depois duas semanas tranquilas',
            'Você quer testar um modelo de classe 70B sem comprar duas placas',
            'Você não quer possuir hardware que se deprecia',
            'Você vai precisar de uma GPU diferente no mês que vem',
          ],
          quick: [
            'Menos de 2 horas por dia → alugue, e reavalie em seis meses',
            '4+ horas por dia, todos os dias → compre, a placa se paga',
            'Qualquer dado que você não possa enviar para fora → compre, o custo não é o fator decisivo',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Uma RTX 3090 usada vale a compra para LLM local se você for usá-la mais de cerca de quatro horas por dia durante dois anos ou seus dados não puderem ser enviados para fora; caso contrário, alugar a mesma placa por US$ 0,12–0,22 por hora é mais barato.',
          },
          {
            type: 'plain-terms',
            text: 'Ter a placa é como comprar um carro; alugar é como pegar táxis. Táxis são mais baratos até você rodar todos os dias — e a placa, ao contrário do carro, mantém bem o valor, então você recupera boa parte do dinheiro ao revendê-la.',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          'VRAM: 24 GB GDDR6X — suficiente para um modelo de classe 27B em quantização de 4 bits com espaço para contexto.',
          'Largura de banda de memória: 936 GB/s, o que realmente define a velocidade de geração de tokens numa carga limitada por memória.',
          'Potência: TDP de 350 W da placa; conte com cerca de 450 W na tomada para o sistema todo sob carga de inferência.',
          'Preço usada: tipicamente US$ 850–1.050, com médias no eBay perto de US$ 1.000 — subiu de US$ 600–800 na primavera de 2026.',
          'Aluguel na nuvem: US$ 0,12/hora ([Vast.ai](https://Vast.ai)) a US$ 0,50/hora (RunPod Secure); mediana de US$ 0,15/hora entre oito provedores.',
          'Eletricidade: na média residencial dos EUA de 2026 de US$ 0,18/kWh, rodá-la custa cerca de US$ 0,08 por hora.',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'O que a RTX 3090 realmente oferece',
        content: [
          '**A RTX 3090 importa por um motivo: 24 GB de VRAM pelo preço mais baixo que alguém cobra por isso.** Tudo mais na placa é comum em 2026 — é um projeto de 2020, consome 350 W, e uma placa atual a supera em toda métrica de eficiência. Nada disso muda o fato de que os pesos de um modelo cabem na memória de vídeo ou não cabem.',
          'VRAM é um precipício, não uma rampa. Um modelo que cabe roda em velocidade total; um modelo que ultrapassa mesmo em um gigabyte transborda para a RAM do sistema e desaba para uma fração da velocidade. Isso faz dos 24 GB um limiar de capacidade, não um número de desempenho, e a 3090 é a placa mais barata que o alcança.',
          'O segundo número importante é a largura de banda de memória. A geração de tokens de um modelo quantizado é limitada por memória, não por processamento, então 936 GB/s prevê melhor a sensação de velocidade do que qualquer contagem de núcleos CUDA. É também por isso que a 3090 permanece competitiva com placas intermediárias mais novas que têm mais poder de processamento, mas barramento de memória mais estreito.',
          'Na prática: folga confortável para um modelo de classe 27B em quantização de 4 bits, inferência rápida em modelos de 7B–14B com contexto longo, e — com uma segunda placa — a capacidade de manter um modelo de classe 70B na VRAM sem offloading.',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: 'O que 24 GB realmente rodam: tamanhos de modelo e quantização',
        content: [
          '**"Cabe em 24 GB" e "roda com conforto para uso interativo" são duas afirmações diferentes, e guias de compra que misturam as duas criam expectativas erradas.** Um modelo pode tecnicamente carregar e ainda assim não deixar espaço para contexto, o que significa que funciona para um único prompt curto e falha assim que a conversa fica longa. A tabela abaixo separa as duas afirmações.',
          'A variável que move um modelo entre essas colunas é o comprimento do contexto: cada token do histórico de conversa e cada token gerado precisa de espaço no cache KV, além dos próprios pesos. Um modelo 27B em quantização de 4 bits com contexto de 4K cabe com conforto; o mesmo modelo levado a 32K de contexto pode consumir a folga que a quantização ganhou.',
        ],
        columns: ['Classe de modelo', 'Cabe em 24 GB (4 bits)', 'Uso interativo'],
        rows: [
          { 'Classe de modelo': '7B–8B', 'Cabe em 24 GB (4 bits)': 'Sim, com folga de sobra', 'Uso interativo': 'Rápido, contexto longo confortável' },
          { 'Classe de modelo': '13B–14B', 'Cabe em 24 GB (4 bits)': 'Sim', 'Uso interativo': 'Rápido, contexto generoso' },
          { 'Classe de modelo': '27B–34B', 'Cabe em 24 GB (4 bits)': 'Sim', 'Uso interativo': 'Confortável / observe o cache KV em contexto longo' },
          { 'Classe de modelo': '70B (4 bits, uma placa)', 'Cabe em 24 GB (4 bits)': 'Tecnicamente, com offload para CPU', 'Uso interativo': 'Lento — camadas descarregadas travam a geração' },
          { 'Classe de modelo': '70B (4 bits, duas placas)', 'Cabe em 24 GB (4 bits)': 'Sim, 48 GB combinados', 'Uso interativo': 'Confortável, sem offloading' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Um modelo de classe 70B em quantização de 4 bits precisa de cerca de 40–45 GB de VRAM só para os pesos, antes de qualquer contexto. Uma única placa de 24 GB chega lá apenas descarregando parte do modelo para a RAM do sistema, por isso a linha de uma placa acima está listada como "tecnicamente possível" e não "confortável".',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090 com Ollama e LM Studio',
        content: [
          '**Os 24 GB da RTX 3090 são especialmente relevantes para Ollama e LM Studio, porque ambos carregam um modelo inteiramente na memória da GPU por padrão quando ele cabe, e recorrem a um offloading CPU/GPU mais lento quando não cabe.** Com 24 GB disponíveis, as duas ferramentas conseguem rodar modelos de classe 27B inteiramente na placa em vez de dividi-los.',
          'A velocidade real em tokens por segundo depende do modelo específico, do nível de quantização, do comprimento do contexto, de qual build do backend está em uso (llama.cpp por trás dos dois), de quanto do prompt ainda precisa ser processado versus o que já está em cache, e do que mais está rodando na mesma máquina. Nenhuma das duas ferramentas publica benchmarks oficiais da RTX 3090, então trate qualquer número isolado de "X tokens/s" visto em outro lugar como a configuração de uma pessoa, não uma garantia para a sua.',
          'Na prática: instale uma das duas ferramentas, carregue um modelo de classe 27B em quantização de 4 bits, e verifique o uso de memória da GPU no `nvidia-smi` (ou no próprio indicador da ferramenta) enquanto ele roda — se o uso ficar confortavelmente abaixo de 24 GB, o modelo está totalmente na placa e você está obtendo toda a largura de banda de memória da RTX 3090.',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: 'Comprando usada: o que verificar antes de pagar',
        sponsoredSlot: true,
        content: [
          '**Se você comprar, compre usada — ninguém mais vende a RTX 3090 nova, e a vantagem de preço está no mercado usado.** A US$ 850–1.050, é a placa de 24 GB mais barata disponível, e mantém bem o valor de revenda, o que reduz de forma real o custo total de propriedade.',
          'A ressalva honesta: são placas de cinco anos, muitas ex-mineração ou ex-gaming, vendidas sem garantia por particulares. Os modos de falha são conhecidos e verificáveis, então o risco é administrável — mas é real, e por isso vale comprar de um vendedor com política de devolução em vez do anúncio mais barato que você encontrar.',
        ],
        items: [
          'Peça uma foto da placa durante um teste de carga com as temperaturas visíveis — temperatura de junção de memória acima de cerca de 100 °C sob carga indica pads térmicos ressecados.',
          'O GDDR6X desta placa esquenta bastante por projeto; um vendedor que já trocou os pads térmicos é um bom sinal, não um alerta.',
          'Confirme que é a RTX 3090 de 24 GB e não uma RTX 3080 — o título do anúncio não é prova, peça um print do GPU-Z.',
          'Prefira uma plataforma com proteção ao comprador e devoluções. Os US$ 50 que você economiza num anúncio sem devolução não valem o risco numa placa de cinco anos.',
          'Verifique se a placa cabe fisicamente: a 3090 ocupa três slots na maioria dos modelos e precisa de uma fonte de 750 W ou mais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A PromptQuorum não participa de nenhum programa de afiliados. Os links abaixo não têm tags de afiliado e não geram comissão — são links de referência simples, para você conferir o preço atual por conta própria.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB (usada)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Conferir preços da RTX 3090 usada no eBay',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB (usada/recondicionada)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Conferir estoque da RTX 3090 na Newegg',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: 'Escolhendo uma placa: refrigeração, tamanho e conectores de energia',
        itemHeadings: true,
        content: [
          '**Toda RTX 3090 tem os mesmos 24 GB de VRAM, então a questão de quais modelos cabem já está resolvida no momento em que você escolhe "RTX 3090". O que muda entre as placas é o quanto é suportável possuir uma.** Nenhum design de cooler de um fabricante é objetivamente o melhor em todos os anúncios — o estado no mercado usado varia mais que o design — mas estes são os fatores que vale a pena checar antes de comprar.',
        ],
        columns: ['Fator', 'O que verificar'],
        rows: [
          { Fator: 'Design de refrigeração', 'O que verificar': 'Coolers de triplo ventilador a ar aberto rodam mais silenciosos sob carga sustentada do que placas tipo blower; pergunte o quão alto fica em repouso vs. sob inferência.' },
          { Fator: 'Tamanho físico', 'O que verificar': 'A maioria das RTX 3090 ocupa três slots e passa de 30 cm de comprimento — meça seu gabinete antes de comprar, não depois.' },
          { Fator: 'Conectores de energia', 'O que verificar': 'PCIe de 8 pinos padrão (dois ou três) na maioria dos modelos; confirme se sua fonte tem conectores nativos suficientes antes de depender de adaptadores.' },
          { Fator: 'Garantia', 'O que verificar': 'Garantias originais do fabricante desta geração em geral já expiraram — trate qualquer 3090 usada como vendida no estado, a menos que o vendedor diga o contrário.' },
          { Fator: 'Estado de uso', 'O que verificar': 'Uso prévio em mineração não é motivo de exclusão (veja a lista de checagem de compra acima); overclock intenso com refrigeração ruim é um sinal de risco maior.' },
          { Fator: 'Preço vs. risco', 'O que verificar': 'O anúncio mais barato não é o melhor negócio se não tiver devolução — um valor a mais de US$ 50–100 por proteção ao comprador geralmente vale a pena numa placa de cinco anos.' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: 'Por que alugar é a melhor resposta com mais frequência do que se imagina',
        content: [
          '**O argumento a favor do aluguel não é que ele seja sempre mais barato — é que uma GPU ociosa custa o mesmo que uma ocupada.** Uma placa num desktop usado nos fins de semana já custou o preço de compra inteiro. Uma GPU alugada não custa nada entre as sessões.',
          'As razões para alugar são concretas, não filosóficas: sem desembolso inicial, sem risco de depreciação numa placa de cinco anos, sem restrições de fonte, gabinete ou refrigeração, sem fim de semana perdido quando uma ventoinha falha. Você também pode alugar uma placa que nunca compraria — testar um modelo de classe 70B em duas GPUs alugadas por uma tarde custa alguns dólares, contra cerca de US$ 1.700 por um par usado.',
          'O contra-argumento honesto é que alugar tem atrito real. Você envia dados para a máquina de outra pessoa, espera por uma instância, e em provedores de marketplace às vezes você pega um host que some no meio do trabalho. Isso não são motivos para descartar — são motivos pelos quais a decisão depende da sua carga de trabalho, não só da tarifa por hora.',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'Alugando uma RTX 3090: quanto custa e onde',
        sponsoredSlot: true,
        content: [
          '**A Vast.ai é a forma mais barata de alugar uma RTX 3090, a cerca de US$ 0,12 por hora, e a RunPod é a opção mais confiável a US$ 0,22 por hora no plano Community.** Essa diferença resume todo o trade-off: a Vast.ai é um marketplace de GPUs de propriedade privada, então os preços são menores e a qualidade do host varia; a RunPod opera sua própria capacidade, então custa mais, mas se comporta de forma mais previsível.',
          'Para uma primeira tentativa, o plano barato serve bem — uma instância que falha num experimento custa apenas o reinício. Para qualquer coisa com prazo, ou qualquer trabalho de mais de poucas horas, os dez centavos extras por hora compram exatamente o que você quer: que o trabalho ainda esteja rodando quando você voltar.',
        ],
        columns: ['Provedor', 'Preço/hora', 'Melhor para'],
        rows: [
          { Provedor: 'Vast.ai', 'Preço/hora': 'US$ 0,12', 'Melhor para': 'Tarifa por hora mais barata; experimentos e picos de uso' },
          { Provedor: 'RunPod Community', 'Preço/hora': 'US$ 0,22', 'Melhor para': 'Capacidade previsível com um leve acréscimo' },
          { Provedor: 'RunPod Secure', 'Preço/hora': 'US$ 0,50', 'Melhor para': 'Confiabilidade e suporte de nível empresarial' },
          { Provedor: 'Mediana de 8 provedores', 'Preço/hora': 'US$ 0,15', 'Melhor para': 'O número a usar no seu próprio cálculo de ponto de equilíbrio' },
        ],
        items: [
          'Complexidade de configuração: Vast.ai e marketplaces parecidos exigem escolher host e template você mesmo; RunPod e outros provedores gerenciados oferecem templates de um clique com Ollama ou uma interface web pré-instalados.',
          'Persistência: uma instância parada continua sendo cobrada pelo armazenamento anexado na maioria dos provedores; verifique se um provedor cobra armazenamento enquanto a GPU está pausada antes de deixar um modelo grande em cache entre sessões.',
          'Aluguel mínimo: anúncios de marketplace costumam ser cobrados por minuto sem mínimo; alguns planos de capacidade gerenciada exigem um bloco mínimo — verifique a página de preços do provedor específico antes de se comprometer com um trabalho.',
          'Disponibilidade geográfica: GPUs de marketplace estão onde estiverem seus donos, então uma região específica não é garantida; provedores gerenciados publicam regiões fixas de data center, o que importa se você tem exigências de residência de dados.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Preços verificados em 1º de setembro de 2026 com base numa tabela de preços multi-provedor e na própria página de modelo da RunPod. Tarifas de GPU na nuvem mudam semanalmente — verifique os preços atuais antes de se comprometer.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Aluguel de GPU RTX 3090 na Vast.ai',
            productCategory: 'cloud-gpu',
            priceRange: 'A partir de US$ 0,12/h',
            label: 'Ver preços da RTX 3090 na Vast.ai',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'Aluguel de GPU RTX 3090 na RunPod',
            productCategory: 'cloud-gpu',
            priceRange: 'A partir de US$ 0,22/h',
            label: 'Ver preços da RTX 3090 na RunPod',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: 'O cálculo do ponto de equilíbrio',
        content: [
          '**Contra um aluguel mediano de US$ 0,15/hora, uma placa de US$ 850 leva cerca de 12.300 horas de GPU para se pagar — cerca de quatro anos com oito horas por dia, ou dezessete anos com duas.** Esse é o número que a maioria dos guias de compra ignora, e é o que deveria decidir a compra.',
          'O cálculo subtrai o que custa operar a placa. A 450 W na tomada e na média dos EUA de 2026 de US$ 0,18/kWh, a inferência local custa cerca de US$ 0,08 por hora em eletricidade, então você não está comparando US$ 850 contra US$ 0,15/hora, mas contra os cerca de US$ 0,07/hora que realmente economiza.',
          'Premissas: placa de US$ 850, consumo do sistema de 450 W, US$ 0,18/kWh. Substitua pela sua própria tarifa de energia — ela move o resultado mais do que qualquer outra coisa na tabela, e em mercados acima de US$ 0,30/kWh o argumento de comprar praticamente desaparece.',
        ],
        columns: ['Uso', 'vs US$ 0,12/h', 'vs US$ 0,15/h', 'vs US$ 0,22/h'],
        rows: [
          { Uso: '2 horas por dia', 'vs US$ 0,12/h': '~30 anos', 'vs US$ 0,15/h': '~17 anos', 'vs US$ 0,22/h': '~8 anos' },
          { Uso: '4 horas por dia', 'vs US$ 0,12/h': '~15 anos', 'vs US$ 0,15/h': '~8 anos', 'vs US$ 0,22/h': '~4 anos' },
          { Uso: '8 horas por dia', 'vs US$ 0,12/h': '~7,5 anos', 'vs US$ 0,15/h': '~4 anos', 'vs US$ 0,22/h': '~2 anos' },
          { Uso: 'Sempre ligada (24/7)', 'vs US$ 0,12/h': '~2,5 anos', 'vs US$ 0,15/h': '~1,4 ano', 'vs US$ 0,22/h': '~8 meses' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Esta tabela faz a compra parecer pior do que é num ponto específico: ela ignora a revenda. Uma RTX 3090 usada manteve seu valor por cinco anos, então se você a revender, boa parte do preço de compra volta e cada número acima diminui bastante.',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: 'De que lado você está',
        itemHeadings: true,
        columns: ['Leitor', 'Veredito', 'Por quê'],
        rows: [
          {
            Leitor: 'Hobbysta de fim de semana',
            Veredito: 'Alugar',
            'Por quê': 'Algumas horas por semana contra um gasto de US$ 850 estão a décadas do ponto de equilíbrio. Alugue por um ano, e se você perceber que está alugando todo dia, compre então — você também vai saber exatamente qual placa precisa.',
          },
          {
            Leitor: 'Usuário intenso diário',
            Veredito: 'Comprar',
            'Por quê': 'Com quatro horas ou mais por dia, a placa se paga em poucos anos, e a revenda recupera boa parte do resto. O maior ganho é comportamental: uma GPU própria não tem contador rodando, então você para de racionar experimentos.',
          },
          {
            Leitor: 'Time pequeno ou startup',
            Veredito: 'Alugar primeiro, comprar depois',
            'Por quê': 'Alugue enquanto sua carga de trabalho ainda está mudando de forma — você ainda não sabe se precisa de 24 GB ou 80 GB. Compre quando o uso estiver estável e previsível o bastante para planejar orçamento, geralmente o ponto em que a fatura mensal começa a incomodar.',
          },
          {
            Leitor: 'Ligado a privacidade ou compliance',
            Veredito: 'Comprar',
            'Por quê': 'Custo não é o fator decisivo. Se dados de clientes, registros de saúde ou material regulado não podem ser enviados a um host terceiro, a opção de aluguel não existe independentemente do preço, e a 3090 é a forma mais barata de atender a essa exigência.',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: 'Pule a RTX 3090 se',
        content: [
          '**Pule se seus modelos cabem em 16 GB.** Se você roda modelos 7B e 14B em 4 bits e nunca toca em nada maior, uma placa atual de 16 GB mais barata é mais silenciosa, consome bem menos energia e vem com garantia. Pagar o acréscimo dos 24 GB por uma folga que você nunca usa é o erro mais comum nessa compra.',
          'Pule também se você está comprando para treinar em vez de para inferência. Um ajuste fino substancial numa única placa de 24 GB significa quantização agressiva e longas esperas; alugar uma placa maior por algumas horas é ao mesmo tempo mais rápido e mais barato.',
          'E pule se sua eletricidade é cara. A US$ 0,30/kWh ou mais, só o custo de operação já se aproxima das tarifas mais baratas da nuvem, e o argumento de possuir a placa praticamente desaparece.',
        ],
      },

      verdict: {
        id: 'verdict',
        title: 'Nosso veredito',
        content: [
          '**Compre uma RTX 3090 usada se for usá-la mais de cerca de quatro horas por dia nos próximos dois anos, ou se seus dados não puderem sair do seu prédio — ainda é a forma mais barata de possuir 24 GB de VRAM. Alugue uma se seu uso for ocasional, irregular, ou você ainda estiver descobrindo se a inferência local combina com sua carga de trabalho. Na dúvida, alugue primeiro.**',
          'Para uso frequente de LLM local e privacidade: compre. Para experimentação ocasional: alugue. Para uso incerto ou em mudança: alugue primeiro, e reavalie a decisão em seis meses, quando conhecer suas horas reais. Para quem busca especificamente VRAM de 24 GB barata, uma RTX 3090 usada em bom estado continua atraente em 2026 — o aumento de preço pela escassez de memória não mudou isso, só empurrou o ponto de equilíbrio mais adiante. Para uma compra nova em que eficiência, garantia e recursos atuais importam mais que o preço inicial, compare em vez disso com uma [placa atual](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026).',
          'Resumindo: a vantagem da RTX 3090 são 24 GB de VRAM a preços de mercado usado. Seus custos são idade, alto consumo de energia, calor, ruído e falta de garantia. Nenhum dos dois lados dessa troca mudou em 2026 — só o preço de compra mudou, e foi contra a compra.',
        ],
      },

      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'A RTX 3090 ainda vale a pena comprar em 2026?',
            a: 'Para inferência local sustentada, sim — continua sendo a placa de 24 GB usada mais barata a US$ 850–1.050. Para uso leve ou ocasional, não: alugar a mesma GPU a US$ 0,12–0,22 por hora é mais barato por anos. O fator decisivo são as horas de uso real por semana, não a ficha técnica.',
          },
          {
            q: 'A RTX 3090 é boa para Ollama?',
            a: 'Sim. O Ollama carrega um modelo inteiramente na memória da GPU quando ele cabe, e 24 GB são suficientes para rodar modelos de classe 27B em quantização de 4 bits totalmente na placa em vez de dividir entre CPU e GPU. Confirme a residência total na GPU com `nvidia-smi` enquanto um modelo está carregado.',
          },
          {
            q: 'A RTX 3090 é boa para LM Studio?',
            a: 'Sim, pelo mesmo motivo que o Ollama — ambos rodam sobre um backend baseado em llama.cpp e se beneficiam igualmente dos 24 GB de VRAM. O LM Studio mostra o uso de memória da GPU diretamente na interface, o que facilita confirmar se um modelo está totalmente carregado em vez de parcialmente descarregado.',
          },
          {
            q: 'RTX 3090 ou RTX 4090 para LLMs locais?',
            a: 'Ambas têm 24 GB, então rodam os mesmos modelos. A 4090 é significativamente mais rápida e muito mais eficiente em energia, mas custa cerca do dobro usada. Se os modelos que você roda já cabem, a 3090 entrega a mesma capacidade por menos dinheiro; a 4090 vale a pena quando a velocidade de geração é o que limita seu trabalho.',
          },
          {
            q: 'Quantos tokens por segundo uma RTX 3090 produz?',
            a: 'Depende do tamanho do modelo e da quantização, e qualquer número único seria enganoso. A regra útil é que a geração de tokens num modelo quantizado é limitada pela largura de banda de memória, então os 936 GB/s da 3090 são o número que prevê isso — modelos menores e quantização mais forte movem mais tokens por segundo.',
          },
          {
            q: 'Duas RTX 3090 conseguem rodar um modelo de 70B?',
            a: 'Sim. Duas placas dão 48 GB de VRAM, suficiente para um modelo de classe 70B em quantização de 4 bits sem descarregar para a RAM do sistema. Planeje uma fonte de 1.000 W ou mais e uma placa-mãe com dois slots adequados — e alugue primeiro uma instância na nuvem com duas GPUs por uma tarde, para confirmar que a configuração faz o que você precisa antes de gastar cerca de US$ 1.700.',
          },
          {
            q: 'Por que os preços da RTX 3090 usada subiram em 2026?',
            a: 'Uma escassez de memória empurrou os preços de GPU amplamente acima dos níveis anteriores durante 2026, e a demanda por placas de 24 GB cresceu mais entre quem roda modelos localmente do que entre gamers. A placa era vendida por US$ 600–800 na primavera e US$ 850–1.050 até setembro. É um dos poucos produtos de cinco anos que ficou mais caro.',
          },
          {
            q: 'É seguro comprar uma GPU de mineração usada?',
            a: 'Geralmente sim, com checagens. Placas de mineração rodavam com carga moderada constante, o que é mais suave que os ciclos térmicos do gaming, mas costumam precisar de pads térmicos novos. Peça uma foto do teste de carga mostrando a temperatura de junção de memória, compre de um vendedor que ofereça devolução, e trate qualquer anúncio sem os dois como uma placa que você não consegue verificar.',
          },
          {
            q: 'Que fonte de alimentação a RTX 3090 precisa?',
            a: 'A NVIDIA especifica 750 W para um sistema com uma placa, e esse é o mínimo correto. A placa consome 350 W sozinha e tem picos transitórios curtos bem acima disso, então uma fonte subdimensionada ou de baixa qualidade vai desligar sob carga mesmo quando a conta parece fechar.',
          },
          {
            q: 'Alugar uma GPU significa que meus dados saem da minha máquina?',
            a: 'Sim — essa é a troca fundamental. Tudo que você processa numa GPU alugada é enviado para hardware que você não controla, e em plataformas de marketplace esse hardware é de propriedade privada. Para dados regulados, confidenciais ou de clientes, isso descarta a opção de aluguel independentemente do custo, por isso o argumento de privacidade a favor da compra não depende em nada do cálculo de ponto de equilíbrio.',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Rastreador de preços da RTX 3090 — histórico de preços novo e usado, Best Value GPU.](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[Preços na nuvem da RTX 3090 entre 8 provedores, GetDeploying (atualizado em 1º de setembro de 2026).](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[Preços de aluguel de GPU RTX 3090, RunPod.](https://www.runpod.io/gpu-models/rtx-3090)',
          '[Uma RTX 3090 usada ainda é a melhor GPU para IA local, XDA Developers.](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — preço médio de eletricidade residencial, US Energy Information Administration.](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores GPUs para LLMs locais: guia de compra completo](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — compare a RTX 3090 com placas atuais em cada faixa de preço.',
          '[GPUs usadas para LLMs locais: melhores escolhas por custo-benefício](/pt/local-llms/used-gpus-for-local-llms) — o guia mais amplo do mercado usado, cobrindo a RTX 3060, 3080 e 4090 ao lado desta placa.',
          '[Ollama vs LM Studio](/pt/local-llms/ollama-vs-lm-studio) — como as duas ferramentas com que esta GPU trabalha realmente se diferenciam, além de compartilharem um backend llama.cpp.',
          '[A forma prática mais barata de rodar um modelo 70B localmente](/pt/prompt-bites/cheapest-way-to-run-70b-model-locally) — onde duas RTX 3090 se encaixam na configuração 70B mais barata.',
          '[Quanta VRAM um modelo 70B precisa?](/pt/prompt-bites/vram-for-70b-model) — a aritmética de VRAM por trás da recomendação de duas placas acima.',
          '[Calculadora de custo de LLM local: montar vs alugar](/pt/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — rode o cálculo de ponto de equilíbrio com seus próprios números e hardware.',
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-ar.webp',
    title: 'بطاقة RTX 3090 لتشغيل نماذج LLM محليًا في 2026: هل تشتري أم تستأجر؟',
    seoTitle: 'RTX 3090 لنماذج LLM المحلية 2026: شراء مستعملة أم استئجار؟',

    intro: 'بطاقة RTX 3090 هي أرخص طريقة للحصول على 24 GB من VRAM تحت مكتبك، واستئجار البطاقة نفسها عبر السحابة يكلف سنتات قليلة في الساعة. يوضح هذا الدليل أين يقع الخط الفاصل فعليًا بين هذين الخيارين.',
    metaDescription: 'تكلف بطاقة RTX 3090 المستعملة 850–1,050 $ في 2026؛ استئجارها يكلف 0.12–0.22 $ في الساعة. إليك حساب نقطة التعادل بين الشراء والاستئجار لـ 24 GB من VRAM لنماذج LLM المحلية.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المطورون والفرق الصغيرة الذين يقررون بين شراء وحدة معالجة رسومية مستعملة بسعة 24 GB واستئجار وقت GPU سحابي لاستدلال LLM محلي',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 llm محلي',
      'هل ما زالت rtx 3090 تستحق الشراء',
      'سعر rtx 3090 مستعملة',
      'rtx 3090 مقابل استئجار gpu سحابي',
      'gpu بسعة 24 غيغابايت vram لـ llm',
      'rtx 3090 ollama',
      'rtx 3090 نموذج 70b',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**اشترِ بطاقة RTX 3090 مستعملة إذا كنت ستستخدمها أكثر من نحو أربع ساعات يوميًا خلال السنتين القادمتين، أو إذا كانت بياناتك لا يمكنها مغادرة مبناك. استأجر خلاف ذلك.** بسعر 850–1,050 $ مستعملة مقابل 0.12–0.22 $ في الساعة عبر السحابة، لا تُجدي البطاقة اقتصاديًا إلا مع الاستخدام المستمر — وفي 2026 أصبحت أغلى مما كانت عليه في الربيع، ما يدفع نقطة التعادل إلى وقت أبعد مما يعترف به معظم أدلة الشراء.',

    quickAnswerTop: {
      ar: {
        question: 'هل ما زالت RTX 3090 تستحق الشراء لتشغيل نماذج LLM محليًا؟',
        answer: 'نعم، لكن فقط للاستخدام المستمر أو العمل المرتبط بالخصوصية. توفر بطاقة RTX 3090 المستعملة 24 GB من VRAM مقابل 850–1,050 $، وهي ما تزال أرخص طريقة لتشغيل نماذج من فئة 27B بالكامل على عتادك الخاص. استئجار نفس الـ GPU يكلف 0.12–0.22 $ في الساعة، لذا في حالات الاستخدام الخفيف تبقى السحابة أرخص لسنوات.',
        bullets: [
          '24 GB من VRAM، وعرض نطاق ترددي 936 GB/s، واستهلاك 350 W — دون تغيير منذ 2020، وما زالت أرخص بطاقة بسعة 24 GB',
          'السعر المستعمل 850–1,050 $؛ ارتفع من 600–800 $ في ربيع 2026 بسبب نقص الذاكرة',
          'استئجار سحابي من 0.12 $/ساعة ([Vast.ai](https://Vast.ai)) إلى 0.22 $/ساعة (RunPod Community)؛ الوسيط 0.15 $/ساعة عبر 8 مزوّدين',
          'نقطة التعادل مقابل استئجار بسعر 0.15 $/ساعة عند ساعتين يوميًا تبلغ نحو 17 عامًا — وعند 8 ساعات يوميًا نحو 4 أعوام',
          'اشترِ من أجل الخصوصية، وزمن الاستجابة، والوكلاء الدائمي التشغيل، والضبط الدقيق المستمر؛ استأجر من أجل الاستخدام المتقطع والتجارب',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'بطاقة RTX 3090 لتشغيل نماذج LLM محليًا في 2026: هل تشتري أم تستأجر؟',
      description: 'تحليل نقطة التعادل بين شراء بطاقة NVIDIA RTX 3090 مستعملة واستئجار نفس الـ GPU من مزوّدي السحابة لاستدلال LLM المحلي، مع أسعار 2026.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/ar/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'ar',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'المطورون والفرق الصغيرة التي تشغّل استدلال LLM محليًا',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: 'نماذج اللغة الكبيرة المحلية' },
        { '@type': 'Thing', name: 'استئجار GPU السحابي' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/ar/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/ar/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: 'النقاط الرئيسية',
        numberedItems: [
          'تكلف بطاقة RTX 3090 المستعملة 850–1,050 $ وتوفر 24 GB من VRAM — ما زالت أرخص طريقة لامتلاك هذا القدر من ذاكرة الفيديو.',
          'استئجار نفس الـ GPU يكلف 0.12 $/ساعة على Vast.ai و0.22 $/ساعة على RunPod Community، بوسيط قدره 0.15 $/ساعة عبر ثمانية مزوّدين.',
          'بعد خصم نحو 0.08 $/ساعة تكلفة كهرباء، لا يتفوق الشراء إلا بعد نحو 12,300 ساعة GPU مقارنةً باستئجار بالسعر الوسيط — أي نحو أربع سنوات عند ثماني ساعات يوميًا.',
          'أصبحت البطاقة أغلى في 2026 وليس أرخص: كانت 600–800 $ في الربيع. هذا يدفع نقطة التعادل بعيدًا، عكس ما تفترضه معظم أدلة الشراء.',
          'اشترِ من أجل الخصوصية، والعمل دون اتصال، والوكلاء الدائمي التشغيل، والضبط الدقيق المستمر. استأجر من أجل الاستخدام المتقطع والتجارب وأي شيء سيبقى خاملًا لولا ذلك.',
          'قيمة إعادة البيع هي أقوى حجة لصالح الشراء: بطاقة 3090 ما تزال تُباع بمئات الدولارات بعد عامين تحوّل جزءًا كبيرًا من الشراء إلى عربون لا إلى تكلفة.',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: 'قرر خلال 30 ثانية',
        content: 'كلا المسارين يمنحانك نفس الـ GPU ونفس 24 GB من VRAM. السؤال الحقيقي الوحيد هو عدد الساعات التي ستستخدمها فعليًا، وهل يمكن لبياناتك مغادرة شبكتك.',
        decisionBlock: {
          title: 'هل تشتري بطاقة RTX 3090 مستعملة أم تستأجر واحدة؟',
          localIf: [
            'ستستخدمها أكثر من نحو 4 ساعات يوميًا، وباستمرار',
            'بياناتك لا يمكنها مغادرة مبناك — عمل صحي أو قانوني أو خاص بالعملاء أو منظم',
            'تريد وكيلًا دائمي التشغيل، أو مساعدًا منزليًا، أو مهام دفعية ليلية',
            'تقوم بالضبط الدقيق أو التضمين بانتظام، لا بشكل عرضي',
            'لديك بالفعل هيكل، ومزود طاقة 750 W أو أكثر، ومكان لتصريف الحرارة',
          ],
          cloudIf: [
            'ما زلت تحدد ما إذا كان الاستدلال المحلي يناسبك أصلًا',
            'استخدامك متقطع — عطلة نهاية أسبوع مكثفة، ثم أسبوعان هادئان',
            'تريد تجربة نموذج من فئة 70B دون شراء بطاقتين',
            'لا تريد امتلاك عتاد يفقد قيمته',
            'ستحتاج GPU مختلفة الشهر القادم عما تحتاجه اليوم',
          ],
          quick: [
            'أقل من ساعتين يوميًا ← استأجر، وأعد التقييم بعد ستة أشهر',
            '4+ ساعات يوميًا، كل يوم ← اشترِ، البطاقة تُسدد تكلفتها',
            'أي بيانات لا يمكنك رفعها ← اشترِ، التكلفة ليست العامل الحاسم',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'تستحق بطاقة RTX 3090 المستعملة الشراء لتشغيل نماذج LLM محليًا عندما ستستخدمها أكثر من نحو أربع ساعات يوميًا لمدة عامين أو عندما لا يمكن رفع بياناتك؛ وإلا فاستئجار نفس البطاقة بـ 0.12–0.22 $ في الساعة أرخص.',
          },
          {
            type: 'plain-terms',
            text: 'امتلاك البطاقة أشبه بشراء سيارة؛ الاستئجار أشبه بركوب سيارات الأجرة. سيارات الأجرة أرخص إلى أن تبدأ بالقيادة يوميًا — والبطاقة، خلافًا للسيارة، تحتفظ بقيمتها بما يكفي لاسترداد جزء كبير من المال عند بيعها.',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          'VRAM: 24 GB من GDDR6X — كافية لنموذج من فئة 27B بتكميم 4-bit مع مساحة للسياق.',
          'عرض النطاق الترددي للذاكرة: 936 GB/s، وهو ما يحدد فعليًا سرعة توليد الرموز في أعباء محدودة بالذاكرة.',
          'الطاقة: قدرة تصميمية 350 W للبطاقة؛ احسب نحو 450 W من المقبس للنظام كاملًا تحت حمل الاستدلال.',
          'السعر المستعمل: عادةً 850–1,050 $، بمتوسطات eBay قريبة من 1,000 $ — ارتفع من 600–800 $ في ربيع 2026.',
          'الاستئجار السحابي: 0.12 $/ساعة ([Vast.ai](https://Vast.ai)) إلى 0.50 $/ساعة (RunPod Secure)؛ الوسيط 0.15 $/ساعة عبر ثمانية مزوّدين.',
          'الكهرباء: عند متوسط الاستخدام السكني الأمريكي لعام 2026 البالغ 0.18 $/kWh، يكلف التشغيل نحو 0.08 $ في الساعة.',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'ما الذي تقدمه RTX 3090 فعليًا',
        content: [
          '**تكتسب RTX 3090 أهميتها لسبب واحد: 24 GB من VRAM بأقل سعر يعرضه أي أحد.** كل شيء آخر في البطاقة عادي في 2026 — فهي تصميم من عام 2020، وتستهلك 350 W، وأي بطاقة حديثة تتفوق عليها في كل مقياس كفاءة. لا شيء من ذلك يغيّر حقيقة أن أوزان النموذج إما تسع في ذاكرة الفيديو أو لا تسع.',
          'الـ VRAM أشبه بجرف وليس منحدرًا. النموذج الذي يسع يعمل بأقصى سرعة؛ والنموذج الذي يتجاوز الحد ولو بغيغابايت واحد ينتقل إلى ذاكرة النظام وينهار إلى جزء بسيط من السرعة. هذا يجعل الـ 24 GB عتبة قدرة لا رقم أداء، وRTX 3090 هي أرخص بطاقة تتجاوز هذه العتبة.',
          'الرقم المهم الثاني هو عرض النطاق الترددي للذاكرة. توليد الرموز في نموذج مكمَّم محدود بالذاكرة لا بالحساب، لذا فإن 936 GB/s مؤشر أفضل على سرعة التجربة من أي عدد لأنوية CUDA. وهذا أيضًا سبب بقاء RTX 3090 منافِسة لبطاقات متوسطة أحدث تملك حسابًا أكبر لكن ناقل ذاكرة أضيق.',
          'من الناحية العملية: هامش مريح لنموذج من فئة 27B بتكميم 4-bit، واستدلال سريع لنماذج 7B–14B بسياق طويل، ومع بطاقة ثانية القدرة على تشغيل نموذج من فئة 70B بالكامل في VRAM دون تفريغ.',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: 'ما الذي تشغّله 24 GB فعليًا: أحجام النماذج والتكميم',
        content: [
          '**"يسع في 24 GB" و"يعمل بشكل مريح في الاستخدام التفاعلي" ادّعاءان مختلفان، وأدلة الشراء التي تخلط بينهما تُنشئ توقعات خاطئة.** قد يُحمَّل النموذج تقنيًا دون أن يترك أي مساحة للسياق، ما يعني أنه يعمل لمُحث قصير واحد وينهار بمجرد أن تطول المحادثة. يفصل الجدول أدناه بين الادّعاءين.',
          'المتغير الذي ينقل النموذج بين هذه الأعمدة هو طول السياق: كل رمز من سجل المحادثة وكل رمز مولَّد يحتاج مساحة في ذاكرة KV، بالإضافة إلى الأوزان نفسها. نموذج 27B بتكميم 4-bit وسياق 4K يسع بارتياح؛ نفس النموذج مع سياق 32K قد يستهلك الهامش الذي وفّره التكميم.',
        ],
        columns: ['فئة النموذج', 'يسع في 24 GB (4-bit)', 'الاستخدام التفاعلي'],
        rows: [
          { 'فئة النموذج': '7B–8B', 'يسع في 24 GB (4-bit)': 'نعم، مع فائض', 'الاستخدام التفاعلي': 'سريع، سياق طويل مريح' },
          { 'فئة النموذج': '13B–14B', 'يسع في 24 GB (4-bit)': 'نعم', 'الاستخدام التفاعلي': 'سريع، سياق سخي' },
          { 'فئة النموذج': '27B–34B', 'يسع في 24 GB (4-bit)': 'نعم', 'الاستخدام التفاعلي': 'مريح / راقب ذاكرة KV في السياق الطويل' },
          { 'فئة النموذج': '70B (4-bit، بطاقة واحدة)', 'يسع في 24 GB (4-bit)': 'تقنيًا، مع تفريغ إلى المعالج', 'الاستخدام التفاعلي': 'بطيء — الطبقات المفرّغة تعيق التوليد' },
          { 'فئة النموذج': '70B (4-bit، بطاقتان)', 'يسع في 24 GB (4-bit)': 'نعم، 48 GB مجتمعة', 'الاستخدام التفاعلي': 'مريح، دون تفريغ' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'يحتاج نموذج من فئة 70B بتكميم 4-bit إلى نحو 40–45 GB من VRAM للأوزان وحدها، قبل أي سياق. تصل بطاقة واحدة بسعة 24 GB إلى ذلك فقط بتفريغ جزء من النموذج إلى ذاكرة النظام، لذا صُنّف صف البطاقة الواحدة أعلاه بأنه "ممكن تقنيًا" لا "مريح".',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090 مع Ollama وLM Studio',
        content: [
          '**تكتسب الـ 24 GB في RTX 3090 أهمية خاصة لـ Ollama وLM Studio، لأن كليهما يحمّل النموذج افتراضيًا بالكامل في ذاكرة GPU عندما يسع، ويلجأ إلى تفريغ أبطأ بين CPU وGPU عندما لا يسع.** مع توفر 24 GB، تستطيع كلتا الأداتين تشغيل نماذج من فئة 27B بالكامل على البطاقة بدلًا من تقسيمها.',
          'تعتمد السرعة الفعلية بالرموز في الثانية على النموذج نفسه، ومستوى التكميم، وطول السياق، ونسخة الواجهة الخلفية المستخدمة (llama.cpp في الخلفية لكليهما)، ومقدار المُحث الذي ما زال بحاجة إلى معالجة مقابل ما هو مخزَّن بالفعل، وما يعمل أيضًا على نفس الجهاز. لا تنشر أي من الأداتين قياسات أداء رسمية لـ RTX 3090، لذا تعامل مع أي رقم منفرد لـ"X رمز/ثانية" تراه في مكان آخر على أنه إعداد شخص واحد، لا ضمانة لإعدادك.',
          'من الناحية العملية: ثبّت إحدى الأداتين، وحمّل نموذجًا من فئة 27B بتكميم 4-bit، وتحقق من استخدام ذاكرة GPU عبر `nvidia-smi` (أو مؤشر الأداة نفسها) أثناء التشغيل — إذا بقي الاستخدام بارتياح دون 24 GB، فالنموذج بالكامل على البطاقة وتحصل على كامل عرض النطاق الترددي للذاكرة في RTX 3090.',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: 'الشراء المستعمل: ما يجب التحقق منه قبل الدفع',
        sponsoredSlot: true,
        content: [
          '**إذا اشتريت، فاشترِ مستعملة — لم يعد أحد يبيع RTX 3090 جديدة، وميزة السعر موجودة في السوق المستعملة.** بسعر 850–1,050 $ هي أرخص بطاقة متوفرة بسعة 24 GB، وتحافظ على قيمتها عند إعادة البيع بشكل جيد، ما يقلل فعليًا تكلفة الامتلاك الحقيقية.',
          'التحفظ الصادق: هذه بطاقات عمرها خمس سنوات، كثير منها سبق استخدامها في التعدين أو الألعاب، وتُباع دون ضمان من أفراد. أنماط الأعطال معروفة وقابلة للفحص، لذا فإن المخاطرة قابلة للإدارة — لكنها حقيقية، ولهذا يجدر الشراء من بائع يقبل الإرجاع بدلًا من أرخص إعلان تجده.',
        ],
        items: [
          'اطلب صورة للبطاقة أثناء اختبار حمل مع إظهار درجات الحرارة — درجة حرارة وصلة الذاكرة فوق نحو 100 °C تحت الحمل تشير إلى وسائد حرارية جافة.',
          'ذاكرة GDDR6X في هذه البطاقة ترتفع حرارتها بطبيعة التصميم؛ البائع الذي استبدل الوسائد الحرارية إشارة جيدة، لا علامة تحذير.',
          'تأكد أنها بطاقة RTX 3090 بسعة 24 GB وليست RTX 3080 — عنوان الإعلان ليس دليلًا، اطلب لقطة شاشة من GPU-Z.',
          'فضّل منصة توفر حماية للمشتري وإمكانية إرجاع. الـ 50 $ التي توفرها في إعلان بلا إرجاع لا تستحق المخاطرة في بطاقة عمرها خمس سنوات.',
          'تحقق من أن البطاقة تناسب الهيكل فعليًا: تشغل RTX 3090 ثلاث فتحات في معظم التصاميم وتحتاج مزود طاقة 750 W أو أكثر.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum ليست مشتركة في أي برنامج تسويق بالعمولة. الروابط أدناه لا تحمل علامات إحالة ولا تُدرّ أي عمولة — هي روابط مرجعية بسيطة، لتتمكن من التحقق من السعر الحالي بنفسك.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB (مستعملة)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'تحقق من أسعار RTX 3090 المستعملة على eBay',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB (مستعملة/مُجدَّدة)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'تحقق من مخزون RTX 3090 على Newegg',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: 'اختيار بطاقة: التبريد والحجم ووصلات الطاقة',
        itemHeadings: true,
        content: [
          '**تملك كل بطاقة RTX 3090 نفس الـ 24 GB من VRAM، لذا فإن مسألة توافق النماذج محسومة بمجرد اختيار "RTX 3090". ما يختلف بين البطاقات هو مدى احتمالية امتلاكها.** لا يوجد تصميم تبريد واحد من مصنّع بعينه أفضل موضوعيًا عبر كل الإعلانات — تتفاوت حالة السوق المستعملة أكثر من التصميم نفسه — لكن هذه هي العوامل التي تستحق الفحص قبل الشراء.',
        ],
        columns: ['العامل', 'ما يجب فحصه'],
        rows: [
          { العامل: 'تصميم التبريد', 'ما يجب فحصه': 'مبردات ثلاثية المروحة مفتوحة الهواء أهدأ تحت الحمل المستمر من البطاقات ذات النفاخة؛ اسأل عن مستوى الضجيج عند الخمول مقابل الاستدلال.' },
          { العامل: 'الحجم الفعلي', 'ما يجب فحصه': 'معظم بطاقات RTX 3090 تشغل ثلاث فتحات ويتجاوز طولها 30 سم — قِس هيكلك قبل الشراء لا بعده.' },
          { العامل: 'وصلات الطاقة', 'ما يجب فحصه': 'موصلات PCIe قياسية بـ 8 دبابيس (اثنان أو ثلاثة) في معظم الطرازات؛ تأكد من أن مزود الطاقة لديه موصلات أصلية كافية قبل الاعتماد على المحولات.' },
          { العامل: 'الضمان', 'ما يجب فحصه': 'انتهت ضمانات الشركة المصنّعة الأصلية لهذا الجيل في معظمها — تعامل مع أي RTX 3090 مستعملة على أنها تُباع كما هي، ما لم يذكر البائع خلاف ذلك.' },
          { العامل: 'حالة الاستخدام', 'ما يجب فحصه': 'الاستخدام السابق في التعدين ليس مانعًا (راجع قائمة فحص الشراء أعلاه)؛ الإفراط في رفع التردد مع تبريد ضعيف إشارة خطر أكبر.' },
          { العامل: 'السعر مقابل المخاطرة', 'ما يجب فحصه': 'أرخص إعلان ليس أفضل صفقة إن لم يسمح بالإرجاع — علاوة سعرية 50–100 $ مقابل حماية المشتري تستحق عادةً على بطاقة عمرها خمس سنوات.' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: 'لماذا يكون الاستئجار الإجابة الأفضل أكثر مما يتوقع الناس',
        content: [
          '**الحجة لصالح الاستئجار ليست أنه أرخص دائمًا — بل أن الـ GPU الخامل يكلف مثل الـ GPU المشغول.** بطاقة موضوعة في جهاز مكتبي يُستخدم في عطل نهاية الأسبوع قد كلّفت بالفعل سعر شرائها الكامل. الـ GPU المستأجر لا يكلف شيئًا بين الجلسات.',
          'أسباب الاستئجار ملموسة لا فلسفية: لا نفقات مسبقة، ولا مخاطر انخفاض قيمة على بطاقة عمرها خمس سنوات، ولا قيود مزود طاقة أو هيكل أو تبريد، ولا عطلة نهاية أسبوع ضائعة عند تعطل مروحة. يمكنك أيضًا استئجار بطاقة لن تشتريها أبدًا — تجربة نموذج من فئة 70B على GPU مستأجرتين لبعد ظهر واحد تكلف بضعة دولارات، مقابل نحو 1,700 $ لزوج مستعمل.',
          'الحجة المضادة الصادقة أن الاستئجار يحمل احتكاكًا حقيقيًا. أنت ترفع بياناتك إلى جهاز شخص آخر، وتنتظر توفر نسخة، وفي منصات السوق تصادف أحيانًا مضيفًا يختفي في منتصف المهمة. هذه ليست أسبابًا لرفض الفكرة — بل أسباب لكون القرار يعتمد على عبء عملك لا على السعر بالساعة وحده.',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'استئجار RTX 3090: التكلفة والمكان',
        sponsoredSlot: true,
        content: [
          '**Vast.ai هي أرخص طريقة لاستئجار RTX 3090 بنحو 0.12 $ في الساعة، وRunPod هي الخيار الأكثر موثوقية بـ 0.22 $ في الساعة في مستواها Community.** يلخّص هذا الفرق المفاضلة بأكملها: Vast.ai سوق لـ GPU مملوكة بشكل خاص، لذا الأسعار أقل وجودة المضيف متفاوتة؛ أما RunPod فتدير سعتها الخاصة، لذا تكلف أكثر لكنها تتصرف بشكل أكثر قابلية للتنبؤ.',
          'للمحاولة الأولى، المستوى الرخيص مناسب فعلًا — نسخة فاشلة في تجربة ما تكلف فقط إعادة التشغيل. لأي عمل له موعد نهائي، أو أي مهمة تتجاوز بضع ساعات، تشتري العشرة سنتات الإضافية في الساعة بالضبط ما تريده: أن تظل المهمة تعمل عندما تعود.',
        ],
        columns: ['المزوّد', 'السعر/الساعة', 'الأفضل لـ'],
        rows: [
          { المزوّد: 'Vast.ai', 'السعر/الساعة': '0.12 $', 'الأفضل لـ': 'أرخص سعر بالساعة؛ التجارب والاستخدام المتقطع' },
          { المزوّد: 'RunPod Community', 'السعر/الساعة': '0.22 $', 'الأفضل لـ': 'سعة يمكن التنبؤ بها مقابل علاوة متواضعة' },
          { المزوّد: 'RunPod Secure', 'السعر/الساعة': '0.50 $', 'الأفضل لـ': 'موثوقية ودعم على مستوى المؤسسات' },
          { المزوّد: 'وسيط 8 مزوّدين', 'السعر/الساعة': '0.15 $', 'الأفضل لـ': 'الرقم الذي تستخدمه في حساب نقطة التعادل الخاص بك' },
        ],
        items: [
          'تعقيد الإعداد: تتطلب Vast.ai والأسواق المشابهة اختيار المضيف والقالب بنفسك؛ توفر RunPod وغيرها من المزوّدين المُدارين قوالب بنقرة واحدة مع Ollama أو واجهة ويب مثبّتة مسبقًا.',
          'الاستمرارية: تستمر معظم المزوّدين في محاسبتك على التخزين المرفق حتى بعد إيقاف النسخة؛ تحقق مما إذا كان المزوّد يحاسبك على التخزين أثناء إيقاف الـ GPU مؤقتًا قبل ترك نموذج كبير مخزَّنًا مؤقتًا بين الجلسات.',
          'الحد الأدنى للاستئجار: عادةً ما تُحاسب إعلانات الأسواق بالدقيقة دون حد أدنى؛ تتطلب بعض مستويات السعة المُدارة كتلة دنيا — تحقق من صفحة أسعار المزوّد المحدد قبل الالتزام بمهمة.',
          'التوفر الجغرافي: توجد GPU السوق أينما وُجد مالكوها، لذا فإن منطقة محددة غير مضمونة؛ ينشر المزوّدون المُدارون مناطق مراكز بيانات ثابتة، وهو أمر مهم إذا كانت لديك متطلبات إقامة بيانات.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'الأسعار مُتحقَّق منها في 1 سبتمبر 2026 مقابل جدول أسعار متعدد المزوّدين وصفحة موديل RunPod نفسها. تتغير أسعار GPU السحابي أسبوعيًا — تحقق من الأسعار الحالية قبل الالتزام.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'استئجار GPU RTX 3090 عبر Vast.ai',
            productCategory: 'cloud-gpu',
            priceRange: 'ابتداءً من 0.12 $/ساعة',
            label: 'اطّلع على أسعار RTX 3090 على Vast.ai',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'استئجار GPU RTX 3090 عبر RunPod',
            productCategory: 'cloud-gpu',
            priceRange: 'ابتداءً من 0.22 $/ساعة',
            label: 'اطّلع على أسعار RTX 3090 على RunPod',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: 'حساب نقطة التعادل',
        content: [
          '**مقارنة باستئجار بالسعر الوسيط 0.15 $/ساعة، تحتاج بطاقة بـ 850 $ نحو 12,300 ساعة GPU لتسترد تكلفتها — نحو أربع سنوات عند ثماني ساعات يوميًا، أو سبعة عشر عامًا عند ساعتين.** هذا هو الرقم الذي تتجاهله معظم أدلة الشراء، وهو ما ينبغي أن يحسم قرار الشراء.',
          'يخصم الحساب ما تكلفه تشغيل البطاقة. عند 450 W من المقبس ومتوسط الولايات المتحدة لعام 2026 البالغ 0.18 $/kWh، يكلف الاستدلال المحلي نحو 0.08 $ في الساعة كهرباءً، لذا فأنت لا تقارن 850 $ بـ 0.15 $/ساعة، بل بما توفره فعليًا، أي نحو 0.07 $/ساعة.',
          'الافتراضات: بطاقة بـ 850 $، استهلاك نظام 450 W، 0.18 $/kWh. استبدل سعر الكهرباء لديك — فهو يغيّر النتيجة أكثر من أي عامل آخر في الجدول، وفي الأسواق التي تتجاوز 0.30 $/kWh تتلاشى حجة الشراء إلى حد كبير.',
        ],
        columns: ['الاستخدام', 'مقابل 0.12 $/س', 'مقابل 0.15 $/س', 'مقابل 0.22 $/س'],
        rows: [
          { الاستخدام: 'ساعتان يوميًا', 'مقابل 0.12 $/س': '~30 عامًا', 'مقابل 0.15 $/س': '~17 عامًا', 'مقابل 0.22 $/س': '~8 أعوام' },
          { الاستخدام: '4 ساعات يوميًا', 'مقابل 0.12 $/س': '~15 عامًا', 'مقابل 0.15 $/س': '~8 أعوام', 'مقابل 0.22 $/س': '~4 أعوام' },
          { الاستخدام: '8 ساعات يوميًا', 'مقابل 0.12 $/س': '~7.5 أعوام', 'مقابل 0.15 $/س': '~4 أعوام', 'مقابل 0.22 $/س': '~عامان' },
          { الاستخدام: 'تشغيل دائم (24/7)', 'مقابل 0.12 $/س': '~2.5 عام', 'مقابل 0.15 $/س': '~1.4 عام', 'مقابل 0.22 $/س': '~8 أشهر' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'يجعل هذا الجدول الشراء يبدو أسوأ مما هو عليه في نقطة واحدة محددة: فهو يتجاهل إعادة البيع. حافظت بطاقة RTX 3090 المستعملة على قيمتها خمس سنوات، لذا إذا بعتها لاحقًا يعود جزء كبير من سعر الشراء، وتنخفض كل الأرقام أعلاه بشكل كبير.',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: 'في أي جانب أنت',
        itemHeadings: true,
        columns: ['القارئ', 'الحكم', 'السبب'],
        rows: [
          {
            القارئ: 'هاوٍ في عطلة نهاية الأسبوع',
            الحكم: 'استأجر',
            السبب: 'بضع ساعات أسبوعيًا مقابل إنفاق 850 $ تبعدك عقودًا عن نقطة التعادل. استأجر لمدة عام، وإذا وجدت نفسك تستأجر يوميًا فاشترِ حينها — وستعرف أيضًا بالضبط أي بطاقة تحتاجها.',
          },
          {
            القارئ: 'مستخدم مكثف يوميًا',
            الحكم: 'اشترِ',
            السبب: 'عند أربع ساعات أو أكثر يوميًا، تسترد البطاقة تكلفتها خلال بضع سنوات، وتستعيد إعادة البيع جزءًا كبيرًا من الباقي. المكسب الأكبر سلوكي: الـ GPU المملوك لا يحمل عدّادًا يعمل، فتتوقف عن ترشيد تجاربك.',
          },
          {
            القارئ: 'فريق صغير أو شركة ناشئة',
            الحكم: 'استأجر أولًا ثم اشترِ',
            السبب: 'استأجر ما دام عبء عملك ما يزال يتغير شكله — لا تعرف بعد إن كنت تحتاج 24 GB أم 80 GB. اشترِ بمجرد أن يصبح الاستخدام مستقرًا وقابلًا للتنبؤ بما يكفي للتخطيط له، وهي عادةً النقطة التي تبدأ فيها الفاتورة الشهرية بالإزعاج.',
          },
          {
            القارئ: 'مرتبط بالخصوصية أو الامتثال',
            الحكم: 'اشترِ',
            السبب: 'التكلفة ليست العامل الحاسم. إذا كانت بيانات العملاء أو السجلات الصحية أو المواد المنظَّمة لا يمكن رفعها إلى مضيف خارجي، فخيار الاستئجار غير موجود بصرف النظر عن السعر، وRTX 3090 أرخص طريقة لتلبية هذا الشرط.',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: 'تجاوز RTX 3090 إذا',
        content: [
          '**تجاوزها إذا كانت نماذجك تسع في 16 GB.** إذا كنت تشغّل نماذج 7B و14B بتكميم 4-bit ولا تلمس أبدًا أي شيء أكبر، فإن بطاقة حديثة أرخص بسعة 16 GB أكثر هدوءًا وتستهلك طاقة أقل بكثير وتأتي بضمان. دفع علاوة الـ 24 GB مقابل هامش لن تستخدمه أبدًا هو الخطأ الأكثر شيوعًا في هذا الشراء.',
          'تجاوزها أيضًا إذا كنت تشتري للتدريب لا للاستدلال. الضبط الدقيق الجوهري على بطاقة واحدة بسعة 24 GB يعني تكميمًا شديدًا وانتظارًا طويلًا؛ استئجار بطاقة أكبر لبضع ساعات أسرع وأرخص في آن واحد.',
          'وتجاوزها إذا كانت كهرباؤك باهظة. عند 0.30 $/kWh أو أكثر، تقترب تكلفة التشغيل وحدها من أرخص أسعار السحابة، وتتلاشى حجة الامتلاك إلى حد كبير.',
        ],
      },

      verdict: {
        id: 'verdict',
        title: 'حكمنا',
        content: [
          '**اشترِ بطاقة RTX 3090 مستعملة إذا كنت ستستخدمها أكثر من نحو أربع ساعات يوميًا خلال السنتين القادمتين، أو إذا كانت بياناتك لا يمكنها مغادرة مبناك — فهي ما تزال أرخص طريقة لامتلاك 24 GB من VRAM. استأجر واحدة إذا كان استخدامك عرضيًا أو متقطعًا، أو ما زلت تكتشف إن كان الاستدلال المحلي يناسب عبء عملك. إذا لم تكن متأكدًا، استأجر أولًا.**',
          'للاستخدام المتكرر لنماذج LLM المحلية والخصوصية: اشترِ. للتجريب العرضي: استأجر. للاستخدام غير المؤكد أو المتغير: استأجر أولًا، وأعد تقييم القرار بعد ستة أشهر عندما تعرف ساعاتك الفعلية. لمن يبحث تحديدًا عن VRAM رخيصة بسعة 24 GB، تبقى بطاقة RTX 3090 المستعملة بحالة جيدة مغرية في 2026 — ارتفاع السعر بسبب نقص الذاكرة لم يغيّر ذلك، بل دفع نقطة التعادل إلى وقت أبعد فقط. لشراء جديد حيث تكون الكفاءة والضمان والميزات الحديثة أهم من السعر الأولي، قارن بدلًا من ذلك مع [بطاقة حديثة](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026).',
          'الخلاصة: ميزة RTX 3090 هي 24 GB من VRAM بأسعار السوق المستعملة. تكاليفها هي العمر، والاستهلاك العالي للطاقة، والحرارة، والضجيج، وغياب الضمان. لم يتغير أي جانب من هذه المفاضلة في 2026 — تغيّر سعر الشراء فقط، وتحرك في غير صالح الشراء.',
        ],
      },

      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل ما زالت RTX 3090 تستحق الشراء في 2026؟',
            a: 'للاستدلال المحلي المستمر، نعم — تبقى أرخص بطاقة مستعملة بسعة 24 GB عند 850–1,050 $. للاستخدام الخفيف أو العرضي، لا: استئجار نفس الـ GPU بـ 0.12–0.22 $ في الساعة أرخص لسنوات. العامل الحاسم هو ساعات الاستخدام الفعلي أسبوعيًا، لا المواصفات.',
          },
          {
            q: 'هل RTX 3090 جيدة لـ Ollama؟',
            a: 'نعم. يحمّل Ollama النموذج بالكامل في ذاكرة GPU عندما يسع، وتكفي 24 GB لتشغيل نماذج من فئة 27B بتكميم 4-bit بالكامل على البطاقة بدلًا من تقسيمها بين CPU وGPU. تأكد من الإقامة الكاملة على GPU عبر `nvidia-smi` أثناء تحميل نموذج.',
          },
          {
            q: 'هل RTX 3090 جيدة لـ LM Studio؟',
            a: 'نعم، للسبب نفسه الخاص بـ Ollama — يعمل كلاهما على واجهة خلفية مبنية على llama.cpp ويستفيدان بالتساوي من 24 GB من VRAM. يعرض LM Studio استخدام ذاكرة GPU مباشرة في واجهته، ما يسهّل التأكد من أن النموذج محمَّل بالكامل لا مفرَّغًا جزئيًا.',
          },
          {
            q: 'RTX 3090 أم RTX 4090 لنماذج LLM المحلية؟',
            a: 'كلتاهما تملك 24 GB، فتشغّلان نفس النماذج. RTX 4090 أسرع بشكل ملموس وأكثر كفاءة في الطاقة بكثير، لكنها تكلف نحو ضعف السعر مستعملة. إذا كانت النماذج التي تشغّلها تسع بالفعل، تمنحك 3090 نفس القدرة بمال أقل؛ وتستحق 4090 الاستثمار عندما تكون سرعة التوليد هي العامل المحدِّد لعملك.',
          },
          {
            q: 'كم رمزًا في الثانية تنتج RTX 3090؟',
            a: 'يعتمد ذلك على حجم النموذج والتكميم، وأي رقم واحد سيكون مضللًا. القاعدة المفيدة أن توليد الرموز في نموذج مكمَّم محدود بعرض النطاق الترددي للذاكرة، لذا فإن 936 GB/s في 3090 هي الرقم الأدق للتنبؤ — النماذج الأصغر والتكميم الأقوى يحركان رموزًا أكثر في الثانية.',
          },
          {
            q: 'هل يمكن لبطاقتَي RTX 3090 تشغيل نموذج 70B؟',
            a: 'نعم. تمنحك البطاقتان 48 GB من VRAM، وهو ما يكفي لنموذج من فئة 70B بتكميم 4-bit دون تفريغ إلى ذاكرة النظام. خطّط لمزود طاقة بقدرة 1,000 W أو أكثر ولوحة أم بها فتحتان مناسبتان — واستأجر أولًا نسخة سحابية بوحدتَي GPU لبعد ظهر واحد للتأكد من أن الإعداد يفعل ما تحتاجه قبل إنفاق نحو 1,700 $.',
          },
          {
            q: 'لماذا ارتفعت أسعار RTX 3090 المستعملة في 2026؟',
            a: 'دفع نقص في الذاكرة أسعار GPU على نطاق واسع فوق مستوياتها السابقة خلال 2026، وارتفع الطلب على بطاقات 24 GB بين مستخدمي النماذج المحلية أكثر من اللاعبين. كانت البطاقة تُباع بـ 600–800 $ في الربيع وبـ 850–1,050 $ بحلول سبتمبر. إنها أحد المنتجات القليلة التي عمرها خمس سنوات وأصبحت أغلى.',
          },
          {
            q: 'هل شراء GPU تعدين مستعملة آمن؟',
            a: 'عادةً نعم، مع الفحص. عملت بطاقات التعدين تحت حمل معتدل ثابت، وهو أخف وطأة من دورات الحرارة في الألعاب، لكنها غالبًا ما تحتاج وسائد حرارية جديدة. اطلب صورة اختبار حمل تُظهر درجة حرارة وصلة الذاكرة، واشترِ من بائع يقدّم إمكانية الإرجاع، وتعامل مع أي إعلان يفتقر إلى الاثنين كبطاقة لا يمكن التحقق منها.',
          },
          {
            q: 'ما مزود الطاقة الذي تحتاجه RTX 3090؟',
            a: 'تحدد NVIDIA 750 W لنظام ببطاقة واحدة، وهذا هو الحد الأدنى الصحيح. تستهلك البطاقة 350 W وحدها ولديها ارتفاعات لحظية قصيرة أعلى من ذلك بكثير، لذا فإن مزود الطاقة الأصغر من اللازم أو منخفض الجودة سيُغلق تحت الحمل حتى لو بدا الحساب صحيحًا.',
          },
          {
            q: 'هل يعني استئجار GPU أن بياناتي تغادر جهازي؟',
            a: 'نعم — هذه هي المفاضلة الأساسية. كل ما تعالجه على GPU مستأجر يُرفع إلى عتاد لا تتحكم فيه، وفي منصات السوق يكون هذا العتاد مملوكًا بشكل خاص. بالنسبة للبيانات المنظَّمة أو السرية أو الخاصة بالعملاء، هذا يستبعد خيار الاستئجار بصرف النظر عن التكلفة، ولهذا فإن حجة الخصوصية لصالح الشراء لا تعتمد إطلاقًا على حساب نقطة التعادل.',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[متتبع أسعار RTX 3090 — سجل الأسعار الجديدة والمستعملة، Best Value GPU.](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[أسعار RTX 3090 السحابية عبر 8 مزوّدين، GetDeploying (محدَّث في 1 سبتمبر 2026).](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[أسعار استئجار GPU RTX 3090، RunPod.](https://www.runpod.io/gpu-models/rtx-3090)',
          '[ما تزال RTX 3090 المستعملة أفضل GPU للذكاء الاصطناعي المحلي، XDA Developers.](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — متوسط سعر الكهرباء السكنية، US Energy Information Administration.](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل وحدات GPU لنماذج LLM المحلية: دليل شراء كامل](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — قارن RTX 3090 ببطاقات حديثة عبر كل فئة سعرية.',
          '[وحدات GPU مستعملة لنماذج LLM المحلية: أفضل الخيارات من حيث القيمة](/ar/local-llms/used-gpus-for-local-llms) — الدليل الأوسع للسوق المستعملة، ويغطي RTX 3060 و3080 و4090 إلى جانب هذه البطاقة.',
          '[Ollama مقابل LM Studio](/ar/local-llms/ollama-vs-lm-studio) — كيف تختلف فعليًا الأداتان اللتان تعمل معهما هذه الـ GPU، بخلاف مشاركتهما واجهة خلفية llama.cpp.',
          '[أرخص طريقة عملية لتشغيل نموذج 70B محليًا](/ar/prompt-bites/cheapest-way-to-run-70b-model-locally) — أين تناسب بطاقتا RTX 3090 أرخص إعداد لنموذج 70B.',
          '[كم VRAM يحتاجه نموذج 70B؟](/ar/prompt-bites/vram-for-70b-model) — حساب VRAM وراء توصية البطاقتين أعلاه.',
          '[حاسبة تكلفة LLM المحلية: بناء مقابل استئجار](/ar/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — شغّل حساب نقطة التعادل بأرقامك وعتادك الخاص.',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-ja.webp',
    title: 'ローカルLLM向けRTX 3090（2026年）：購入かレンタルか',
    seoTitle: 'RTX 3090でローカルLLM 2026：中古購入かレンタルか',

    intro: 'RTX 3090は、自宅のデスクの下に24GBのVRAMを持つ最も安い方法です。同じカードをクラウドでレンタルすると1時間あたり数セントで済みます。このガイドでは、両者の境界線が実際どこにあるのかを計算します。',
    metaDescription: '中古のRTX 3090は2026年に850〜1,050ドル。レンタルなら1時間0.12〜0.22ドル。ローカルLLM向け24GB VRAMの購入とレンタルの損益分岐点を計算します。',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13分で読める',
    educationalLevel: 'Intermediate',
    audience: '中古の24GB GPUを購入するか、ローカルLLM推論のためにクラウドGPU時間をレンタルするかを検討する開発者や小規模チーム',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 ローカルllm',
      'rtx 3090 まだ買う価値',
      'rtx 3090 中古 価格',
      'rtx 3090 クラウドgpuレンタル比較',
      '24gb vram gpu llm',
      'rtx 3090 ollama',
      'rtx 3090 70bモデル',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**今後2年間、1日約4時間以上使う予定がある、またはデータを建物の外に出せない場合は、中古のRTX 3090を購入してください。それ以外はレンタルが向いています。** 中古850〜1,050ドルに対しクラウドは1時間0.12〜0.22ドルなので、継続的に使い続けて初めて元が取れます。しかも2026年は春より値上がりしており、多くの購入ガイドが認める以上に損益分岐点は遠のいています。',

    quickAnswerTop: {
      ja: {
        question: 'ローカルLLM向けにRTX 3090はまだ買う価値がありますか？',
        answer: 'はい、ただし継続利用やプライバシー制約のある作業に限ります。中古のRTX 3090は850〜1,050ドルで24GBのVRAMを提供し、27Bクラスのモデルを自前のハードウェアだけで完全に動かす最も安い方法であることは変わりません。同じGPUのレンタルは1時間0.12〜0.22ドルで、軽い用途では何年もクラウドの方が安く済みます。',
        bullets: [
          '24GB VRAM、936GB/sの帯域幅、350W — 2020年から変わらず、依然として最も安い24GBカード',
          '中古価格は850〜1,050ドル。メモリ不足の影響で2026年春の600〜800ドルから上昇',
          'クラウドレンタルは1時間0.12ドル（[Vast.ai](https://Vast.ai)）〜0.22ドル（RunPod Community）。8社の中央値は1時間0.15ドル',
          '1時間0.15ドルのレンタルに対する損益分岐点は、1日2時間利用で約17年、1日8時間利用で約4年',
          'プライバシー、レイテンシ、常時稼働エージェント、継続的なファインチューニングには購入を。突発的な利用や実験にはレンタルを',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルLLM向けRTX 3090（2026年）：購入かレンタルか',
      description: 'ローカルLLM推論のために中古のNVIDIA RTX 3090を購入する場合と、クラウドプロバイダーで同じGPUをレンタルする場合の損益分岐点分析。2026年の価格を反映。',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/ja/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'ja',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: 'ローカルLLM推論を行う開発者や小規模チーム',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: 'ローカル大規模言語モデル' },
        { '@type': 'Thing', name: 'クラウドGPUレンタル' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/ja/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/ja/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: '重要ポイント',
        numberedItems: [
          '中古のRTX 3090は850〜1,050ドルで24GBのVRAMを提供 — これだけのビデオメモリを持つ最も安い方法であることは変わりません。',
          '同じGPUのレンタルはVast.aiで1時間0.12ドル、RunPod Communityで1時間0.22ドル。8社の中央値は1時間0.15ドルです。',
          '電気代（約1時間0.08ドル）を差し引くと、中央値のレンタルに対して購入が有利になるのは約12,300 GPU時間後 — 1日8時間利用で約4年です。',
          'このカードは2026年に値下がりではなく値上がりしました。春は600〜800ドルでした。これは多くの購入ガイドの前提とは逆に、損益分岐点を遠ざけます。',
          'プライバシー、オフライン作業、常時稼働エージェント、継続的なファインチューニングには購入を。突発的な利用、実験、そうしなければ遊ばせておくだけの用途にはレンタルを。',
          '転売価値は購入を後押しする最大の論拠です。2年後も数百ドルで売れる3090であれば、購入額の多くはコストではなく預け金に近くなります。',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: '30秒で決める',
        content: 'どちらの道でも同じGPU、同じ24GBのVRAMが手に入ります。本当に重要な問いは、実際に何時間使うか、そしてデータをネットワークの外に出せるかどうかです。',
        decisionBlock: {
          title: '中古のRTX 3090を購入するか、レンタルするか',
          localIf: [
            '継続的に1日約4時間以上使う',
            'データを建物の外に出せない — 医療、法務、顧客関連、規制業務',
            '常時稼働エージェント、ホームアシスタント、夜間バッチ処理が必要',
            'ファインチューニングやエンベディングを定期的に行う（たまにではなく）',
            'ケース、750W以上の電源、排熱先がすでにある',
          ],
          cloudIf: [
            'ローカル推論が自分に合うかどうかをまだ検討している',
            '利用が突発的 — 忙しい週末の後、静かな2週間が続く',
            'カード2枚を買わずに70Bクラスのモデルを試したい',
            '価値が下がるハードウェアを所有したくない',
            '来月には今日とは違うGPUが必要になる',
          ],
          quick: [
            '1日2時間未満 → レンタルし、半年後に再検討',
            '毎日4時間以上 → 購入。カードは元が取れる',
            'アップロードできないデータがある → 購入。コストは決め手ではない',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2年間、1日約4時間以上使う予定がある、またはデータをアップロードできない場合、ローカルLLM向けに中古のRTX 3090を購入する価値があります。それ以外は同じカードを1時間0.12〜0.22ドルでレンタルする方が安く済みます。',
          },
          {
            type: 'plain-terms',
            text: 'カードを所有するのは車を買うようなもの、レンタルはタクシーに乗るようなものです。毎日乗るようになるまではタクシーの方が安いですが、カードは車と違って十分な価値を保つため、売却時にお金の多くが戻ってきます。',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          'VRAM: 24GB GDDR6X — 4bit量子化の27Bクラスモデルをコンテキストの余裕を持って動かせる容量。',
          'メモリ帯域幅: 936GB/s。メモリ律速のワークロードではトークン生成速度を実質的に決める数値。',
          '消費電力: カード単体のTDPは350W。推論負荷時はシステム全体でコンセント側約450Wを見込む。',
          '中古価格: 一般的に850〜1,050ドル、eBay平均は1,000ドル前後 — 2026年春の600〜800ドルから上昇。',
          'クラウドレンタル: 1時間0.12ドル（[Vast.ai](https://Vast.ai)）〜0.50ドル（RunPod Secure）。8社の中央値は1時間0.15ドル。',
          '電気代: 2026年の米国住宅用平均0.18ドル/kWhでは、稼働コストは1時間約0.08ドル。',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'RTX 3090が本当に提供するもの',
        content: [
          '**RTX 3090が重要な理由はひとつだけです。24GBのVRAMを、誰よりも安い価格で提供している点です。** それ以外の点では、2026年時点でこのカードに特筆すべきところはありません。2020年設計で350Wを消費し、効率面では現行世代のカードすべてに劣ります。しかし、それでもモデルの重みがビデオメモリに収まるかどうかという事実は変わりません。',
          'VRAMは坂道ではなく崖です。収まるモデルはフルスピードで動きますが、1GBでもオーバーすればシステムRAMにあふれ出し、速度は一気に落ち込みます。これにより24GBはパフォーマンスの数値ではなく能力のしきい値となり、3090はそのしきい値を超える最も安いカードです。',
          '2つ目に重要な数値はメモリ帯域幅です。量子化モデルのトークン生成はコンピュート律速ではなくメモリ律速なので、CUDAコア数よりも936GB/sの方が体感速度を予測しやすい指標です。これが、コンピュート性能は高いがメモリバスが狭い新しいミドルレンジカードに対して、3090が依然として競争力を保てる理由でもあります。',
          '実際には: 4bit量子化の27Bクラスモデルには余裕があり、長いコンテキストの7B〜14Bモデルは高速に推論でき、さらにカードを2枚使えば70BクラスモデルをオフロードなしでフルにVRAM内に収められます。',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: '24GBで実際に何が動くか：モデルサイズと量子化',
        content: [
          '**「24GBに収まる」と「対話的な用途で快適に動く」は別の主張であり、両者を混同する購入ガイドは誤った期待を抱かせます。** モデルは技術的にはロードできてもコンテキストの余地がまったく残らないことがあり、その場合は短い単発プロンプトでは動いても、会話が長くなった瞬間に破綻します。以下の表はこの2つを区別しています。',
          'モデルをこれらの列の間で動かす変数はコンテキスト長です。会話履歴のトークンも生成されるトークンも、重み自体に加えてKVキャッシュに空間を必要とします。4Kコンテキストの4bit量子化27Bモデルは快適に収まりますが、同じモデルを32Kコンテキストまで押し上げると、量子化で得た余裕を食いつぶすことがあります。',
        ],
        columns: ['モデルクラス', '24GBに収まるか（4bit）', '対話的用途'],
        rows: [
          { 'モデルクラス': '7B〜8B', '24GBに収まるか（4bit）': '余裕を持って収まる', '対話的用途': '高速、長いコンテキストも快適' },
          { 'モデルクラス': '13B〜14B', '24GBに収まるか（4bit）': '収まる', '対話的用途': '高速、コンテキストも十分' },
          { 'モデルクラス': '27B〜34B', '24GBに収まるか（4bit）': '収まる', '対話的用途': '快適／長いコンテキストではKVキャッシュに注意' },
          { 'モデルクラス': '70B（4bit、カード1枚）', '24GBに収まるか（4bit）': '技術的には可能、CPUオフロード併用', '対話的用途': '遅い — オフロードされた層が生成のボトルネックに' },
          { 'モデルクラス': '70B（4bit、カード2枚）', '24GBに収まるか（4bit）': '収まる、合計48GB', '対話的用途': '快適、オフロードなし' },
        ],
        callouts: [
          {
            type: 'note',
            text: '4bit量子化の70Bクラスモデルは、コンテキストを含めずに重みだけで約40〜45GBのVRAMを必要とします。24GBカード1枚でこれを実現するには、モデルの一部をシステムRAMにオフロードするしかありません。そのため上表のカード1枚の行は「快適」ではなく「技術的には可能」としています。',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090とOllama・LM Studio',
        content: [
          '**RTX 3090の24GBはOllamaとLM Studioに特に有効です。両方とも、モデルが収まる場合はデフォルトでGPUメモリに全体をロードし、収まらない場合はより遅いCPU/GPUオフロードにフォールバックするためです。** 24GBあれば、どちらのツールも27Bクラスのモデルを分割せずカード上で完全に動かせます。',
          '実際のトークン毎秒の速度は、モデルそのもの、量子化レベル、コンテキスト長、使用中のバックエンドビルド（どちらも内部はllama.cpp）、プロンプトのうちまだ処理が必要な部分とすでにキャッシュ済みの部分の割合、同じマシン上で他に何が動いているかに左右されます。どちらのツールも公式のRTX 3090ベンチマークは公開していないため、他所で見かける単発の「X トークン/秒」という数値は、あくまで一人の環境の結果であり自分の環境を保証するものではないと考えてください。',
          '実際には: どちらかのツールをインストールし、4bit量子化の27Bクラスモデルをロードし、実行中に`nvidia-smi`（またはツール自体の表示）でGPUメモリ使用量を確認してください。使用量が24GBを余裕を持って下回っていれば、モデルは完全にカード上にあり、RTX 3090のメモリ帯域幅をフルに活用できています。',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: '中古購入：支払う前に確認すべきこと',
        sponsoredSlot: true,
        content: [
          '**購入するなら中古を選んでください。RTX 3090はもう新品では販売されておらず、価格の優位性は中古市場にあります。** 850〜1,050ドルという価格は入手可能な24GBカードの中で最も安く、転売価値もよく保たれるため、実質的な所有コストを大きく下げます。',
          '正直な留意点として、これらは5年前のカードであり、多くはマイニングやゲーミングの中古であり、個人から保証なしで販売されます。故障モードは既知で確認可能なのでリスクは管理できますが、実在するリスクです。だからこそ、最安値の出品より返品を受け付ける販売者から買う方がよいのです。',
        ],
        items: [
          '負荷テスト中の温度が見える写真を要求してください。負荷時にメモリジャンクション温度が約100°Cを超える場合は、サーマルパッドの乾燥を示唆します。',
          'このカードのGDDR6Xは設計上高温になりやすいものです。サーマルパッドを交換済みの販売者は好材料であり、警戒すべきサインではありません。',
          '24GBのRTX 3090であり、RTX 3080ではないことを確認してください。出品タイトルは証拠にならないため、GPU-Zのスクリーンショットを求めましょう。',
          '買い手保護と返品制度があるプラットフォームを選んでください。返品不可の出品で浮く50ドルは、5年前のカードのリスクに見合いません。',
          'カードが物理的に収まるか確認してください。3090はほとんどの設計で3スロットを占有し、750W以上の電源が必要です。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorumはいかなるアフィリエイトプログラムにも加盟していません。以下のリンクにはアフィリエイトタグがなく、報酬も発生しません。単なる参照リンクとして、現在の価格を自分で確認できるよう提供しています。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB（中古）',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'eBayで中古RTX 3090の価格を確認',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB（中古／整備済み）',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'NeweggでRTX 3090の在庫を確認',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: 'カード選び：冷却、サイズ、電源コネクタ',
        itemHeadings: true,
        content: [
          '**どのRTX 3090も同じ24GBのVRAMを搭載しているため、モデル対応の問題は「RTX 3090」を選んだ時点で解決しています。カードごとに違うのは、所有していてどれだけ快適かという点です。** 特定メーカーの冷却設計がすべての出品にわたって客観的に最良ということはなく、中古市場での状態は設計そのものより大きくばらつきます。ただし購入前に確認する価値がある要素は次のとおりです。',
        ],
        columns: ['要素', '確認すべきこと'],
        rows: [
          { 要素: '冷却設計', '確認すべきこと': 'オープンエア式の3ファンクーラーは持続負荷時にブロワー型より静かです。アイドル時と推論時の騒音レベルを確認しましょう。' },
          { 要素: '物理サイズ', '確認すべきこと': 'ほとんどのRTX 3090は3スロット、全長30cm超です。購入前にケースを測ってください、後からではなく。' },
          { 要素: '電源コネクタ', '確認すべきこと': 'ほとんどのモデルは標準の8ピンPCIe（2本または3本）です。アダプタに頼る前に、電源に十分なネイティブコネクタがあるか確認してください。' },
          { 要素: '保証', '確認すべきこと': 'この世代のメーカー保証はほとんど失効しています。販売者が明記していない限り、中古の3090は現状渡しとして扱ってください。' },
          { 要素: '中古状態', '確認すべきこと': '過去のマイニング利用は除外理由にはなりません（上記の購入チェックリスト参照）。冷却不十分な過度なオーバークロックの方がより大きなリスク信号です。' },
          { 要素: '価格とリスク', '確認すべきこと': '返品不可なら最安値の出品が最良の取引とは限りません。5年前のカードでは買い手保護のために50〜100ドル多く払う方が通常は割に合います。' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: 'レンタルの方が想像以上に良い答えになる理由',
        content: [
          '**レンタルを推す理由は「常に安いから」ではなく、「アイドル状態のGPUも稼働中のGPUと同じコストがかかるから」です。** 週末しか使わないデスクトップに入ったカードは、すでに購入価格全額を消費しています。レンタルしたGPUはセッションの合間には何もコストがかかりません。',
          'レンタルする理由は哲学的ではなく具体的です。初期費用なし、5年前のカードの値下がりリスクなし、電源やケースや冷却の制約なし、ファンが壊れて週末を無駄にすることもありません。決して買わないようなカードもレンタルできます。70Bクラスのモデルをレンタルした2枚のGPUで半日試すコストは数ドルですが、中古2枚を買えば約1,700ドルかかります。',
          '正直な反論は、レンタルには実際の摩擦があるということです。他人のマシンにデータをアップロードし、インスタンスの確保を待ち、マーケットプレイス型のプロバイダーでは作業途中にホストが消えることもあります。これはレンタルを退ける理由ではなく、時間単価だけでなくワークロード次第で判断すべき理由です。',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'RTX 3090をレンタルする：費用とどこで',
        sponsoredSlot: true,
        content: [
          '**Vast.aiは約1時間0.12ドルでRTX 3090をレンタルできる最も安い方法で、RunPodはCommunity階層で1時間0.22ドルとより信頼性の高い選択肢です。** この差がトレードオフのすべてを表しています。Vast.aiは個人所有GPUのマーケットプレイスなので価格は安くホストの品質にばらつきがあり、RunPodは自前のキャパシティを運用するため価格は高いもののより予測しやすく動作します。',
          '最初の試みなら安い階層で十分です。実験でインスタンスが失敗しても再起動のコストしかかかりません。締め切りがある作業や数時間を超える作業では、追加の1時間10セントで「戻ってきたときも作業がまだ動いている」という本当に欲しいものが手に入ります。',
        ],
        columns: ['プロバイダー', '価格/時間', '向いている用途'],
        rows: [
          { プロバイダー: 'Vast.ai', '価格/時間': '0.12ドル', '向いている用途': '最安の時間単価。実験や突発的な利用' },
          { プロバイダー: 'RunPod Community', '価格/時間': '0.22ドル', '向いている用途': 'わずかな上乗せで予測可能なキャパシティ' },
          { プロバイダー: 'RunPod Secure', '価格/時間': '0.50ドル', '向いている用途': 'エンタープライズ級の信頼性とサポート' },
          { プロバイダー: '8社の中央値', '価格/時間': '0.15ドル', '向いている用途': '自分の損益分岐点計算に使うべき数値' },
        ],
        items: [
          'セットアップの複雑さ: Vast.aiなどのマーケットプレイスはホストとテンプレートを自分で選ぶ必要があります。RunPodなどマネージド型プロバイダーはOllamaやWeb UIをプリインストールしたワンクリックテンプレートを提供します。',
          '永続性: ほとんどのプロバイダーでは停止したインスタンスでも紐づくストレージの課金は続きます。セッション間で大きなモデルをキャッシュに残す前に、GPUが一時停止中もストレージ課金があるか確認してください。',
          '最低レンタル期間: マーケットプレイスの出品は通常、最低利用時間なしで分単位課金です。一部のマネージドキャパシティ階層は最低ブロックを要求するため、作業を確定する前に該当プロバイダーの価格ページを確認してください。',
          '地理的な可用性: マーケットプレイス型GPUは所有者のいる場所にあるため、特定地域は保証されません。マネージド型プロバイダーは固定のデータセンター地域を公開しており、データレジデンシー要件がある場合に重要です。',
        ],
        callouts: [
          {
            type: 'note',
            text: '価格は2026年9月1日時点で、複数プロバイダーの価格表とRunPod自身のモデルページに照らして確認済みです。クラウドGPUの料金は週単位で変動するため、確定前に最新価格を確認してください。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Vast.aiのRTX 3090 GPUレンタル',
            productCategory: 'cloud-gpu',
            priceRange: '0.12ドル/時〜',
            label: 'Vast.aiでRTX 3090の価格を見る',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'RunPodのRTX 3090 GPUレンタル',
            productCategory: 'cloud-gpu',
            priceRange: '0.22ドル/時〜',
            label: 'RunPodでRTX 3090の価格を見る',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: '損益分岐点の計算',
        content: [
          '**1時間0.15ドルの中央値レンタルと比較すると、850ドルのカードは元を取るのに約12,300 GPU時間かかります。1日8時間利用で約4年、1日2時間利用で約17年です。** これは多くの購入ガイドが省略する数字であり、購入を決めるべき数字です。',
          'この計算はカードの運用コストを差し引いています。コンセント側450W、2026年の米国平均0.18ドル/kWhでは、ローカル推論の電気代は1時間約0.08ドルです。つまり850ドルと1時間0.15ドルを比較しているのではなく、実際に節約できる約1時間0.07ドルと比較しているのです。',
          '前提条件: 850ドルのカード、システム消費450W、0.18ドル/kWh。自分の電気料金に置き換えてください。表の中で他のどの要素よりも結果を左右し、0.30ドル/kWhを超える市場では購入の根拠はほぼ消えます。',
        ],
        columns: ['利用時間', 'vs 0.12ドル/h', 'vs 0.15ドル/h', 'vs 0.22ドル/h'],
        rows: [
          { '利用時間': '1日2時間', 'vs 0.12ドル/h': '約30年', 'vs 0.15ドル/h': '約17年', 'vs 0.22ドル/h': '約8年' },
          { '利用時間': '1日4時間', 'vs 0.12ドル/h': '約15年', 'vs 0.15ドル/h': '約8年', 'vs 0.22ドル/h': '約4年' },
          { '利用時間': '1日8時間', 'vs 0.12ドル/h': '約7.5年', 'vs 0.15ドル/h': '約4年', 'vs 0.22ドル/h': '約2年' },
          { '利用時間': '常時稼働（24/7）', 'vs 0.12ドル/h': '約2.5年', 'vs 0.15ドル/h': '約1.4年', 'vs 0.22ドル/h': '約8ヶ月' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'この表はある一点で購入を実際より不利に見せています。転売を無視している点です。中古のRTX 3090は5年間価値を保ってきたので、転売すれば購入価格のかなりの部分が戻り、上記の数字はすべて大きく短縮されます。',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: 'あなたはどちら側か',
        itemHeadings: true,
        columns: ['読者タイプ', '結論', '理由'],
        rows: [
          {
            '読者タイプ': '週末だけの趣味利用者',
            結論: 'レンタル',
            理由: '週に数時間の利用に850ドルの支出は、損益分岐点から数十年離れています。まず1年レンタルし、毎日レンタルしていると気づいたらその時に購入しましょう。その頃には必要なカードも正確にわかっているはずです。',
          },
          {
            '読者タイプ': '毎日ヘビーに使うユーザー',
            結論: '購入',
            理由: '1日4時間以上なら数年で元が取れ、転売で残りの多くも回収できます。より大きな利点は行動面です。所有するGPUには稼働中のメーターがないため、実験を節約する必要がなくなります。',
          },
          {
            '読者タイプ': '小規模チームやスタートアップ',
            結論: 'まずレンタル、その後購入',
            理由: 'ワークロードの形がまだ変わり続けている間はレンタルしてください。24GBと80GBのどちらが必要かまだわかりません。利用が安定し予測可能になり予算化できる段階、通常は月額請求が痛み始める頃に購入しましょう。',
          },
          {
            '読者タイプ': 'プライバシーやコンプライアンス制約がある',
            結論: '購入',
            理由: 'コストは決め手ではありません。顧客データ、医療記録、規制対象の資料をサードパーティのホストにアップロードできない場合、価格に関係なくレンタルという選択肢自体が存在せず、3090はこの要件を満たす最も安い方法です。',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: 'こんな場合はRTX 3090を避ける',
        content: [
          '**モデルが16GBに収まるなら避けてください。** 4bitの7Bや14Bモデルを使い、それより大きなものに触れないのであれば、より安い現行世代の16GBカードの方が静かで消費電力もはるかに少なく、保証も付きます。使わない余裕のために24GBの上乗せ費用を払うのは、この購入で最もよくある失敗です。',
          '推論ではなく学習用に購入するなら、それも避けてください。24GB単体カードでの本格的なファインチューニングは積極的な量子化と長い待ち時間を意味します。数時間だけ大きなカードをレンタルする方が速く、かつ安く済みます。',
          '電気代が高い場合も避けてください。0.30ドル/kWh以上では、運用コストだけで安いクラウド料金に近づき、所有の根拠はほぼ消えます。',
        ],
      },

      verdict: {
        id: 'verdict',
        title: '結論',
        content: [
          '**今後2年間、1日約4時間以上使う予定がある、またはデータを建物の外に出せない場合は、中古のRTX 3090を購入してください。24GBのVRAMを所有する最も安い方法であることは変わりません。利用が単発的・突発的な場合、またはローカル推論が自分のワークロードに合うかまだ検討中の場合はレンタルしてください。迷ったらまずレンタルしましょう。**',
          '頻繁なローカルLLM利用とプライバシーには購入を。時々の実験にはレンタルを。不確かな、または変化する利用状況には、まずレンタルし、実際の利用時間がわかった半年後に判断を見直してください。特に安価な24GB VRAMを求める人にとって、状態の良い中古RTX 3090は2026年も依然として魅力的な選択です。メモリ不足による値上がりはその点を変えず、損益分岐点を先送りしただけです。効率、保証、現行世代の機能が初期価格より重要な新規購入なら、代わりに[現行世代のカード](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026)と比較してください。',
          '結論として、RTX 3090の強みは中古市場価格での24GBのVRAMです。コストは経年、高い消費電力、発熱、騒音、保証の欠如です。このトレードオフのどちらの側も2026年に変わっていません。変わったのは購入価格だけで、それは購入に不利な方向に動きました。',
        ],
      },

      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '2026年にRTX 3090はまだ買う価値がありますか？',
            a: '継続的なローカル推論なら、はい。850〜1,050ドルの中古24GBカードとして依然最安です。軽度や一時的な用途なら、いいえ。同じGPUを1時間0.12〜0.22ドルでレンタルする方が何年も安く済みます。決め手はスペックではなく、週あたりの実際の利用時間です。',
          },
          {
            q: 'RTX 3090はOllamaに向いていますか？',
            a: 'はい。Ollamaはモデルが収まる場合、GPUメモリに完全にロードします。24GBあれば、4bit量子化の27BクラスモデルをCPUとGPUに分割せずカード上で完全に動かせます。モデルロード中に`nvidia-smi`でGPUへの完全な常駐を確認してください。',
          },
          {
            q: 'RTX 3090はLM Studioに向いていますか？',
            a: 'はい、Ollamaと同じ理由です。どちらもllama.cpp系バックエンドで動作し、24GBのVRAMから同様に恩恵を受けます。LM StudioはインターフェースにGPUメモリ使用量を直接表示するため、モデルが完全にロードされているか一部オフロードされているかを確認しやすくなっています。',
          },
          {
            q: 'ローカルLLMにはRTX 3090とRTX 4090のどちらが良いですか？',
            a: 'どちらも24GBなので同じモデルを動かせます。4090は明確に高速で消費電力もはるかに効率的ですが、中古価格は約2倍します。使うモデルがすでに収まるなら、3090の方が安く同じ能力を得られます。生成速度が制約になるなら4090の価値があります。',
          },
          {
            q: 'RTX 3090は1秒あたり何トークン生成できますか？',
            a: 'モデルサイズと量子化次第であり、単一の数字は誤解を招きます。有用な目安は、量子化モデルのトークン生成はメモリ帯域幅律速だということです。したがって3090の936GB/sがそれを予測する指標になります。モデルが小さいほど、量子化が強いほど、1秒あたりのトークン数は増えます。',
          },
          {
            q: 'RTX 3090を2枚で70Bモデルを動かせますか？',
            a: 'はい。カード2枚で48GBのVRAMが得られ、システムRAMへのオフロードなしで4bit量子化の70Bクラスモデルを収められます。1,000W以上の電源と適切な2スロットを備えたマザーボードを用意してください。約1,700ドルを費やす前に、まず2GPUのクラウドインスタンスを半日レンタルして構成が要件を満たすか確認することをおすすめします。',
          },
          {
            q: '2026年に中古RTX 3090の価格が上昇したのはなぜですか？',
            a: '2026年にメモリ不足がGPU価格全般をこれまでの水準より押し上げ、24GBカードへの需要はゲーマーよりもローカルでモデルを動かす人々の間で高まりました。このカードは春に600〜800ドルで販売されていましたが、9月までに850〜1,050ドルになりました。値上がりした数少ない5年前の製品のひとつです。',
          },
          {
            q: '中古のマイニングGPUを買っても安全ですか？',
            a: '確認を行えば概ね安全です。マイニング用カードは一定の中程度負荷で稼働しており、ゲーミングの温度サイクルより穏やかですが、サーマルパッドの新品交換が必要なことが多いです。メモリジャンクション温度が見える負荷テストの写真を求め、返品可能な販売者から購入し、両方がない出品は確認できないカードとして扱ってください。',
          },
          {
            q: 'RTX 3090にはどの程度の電源が必要ですか？',
            a: 'NVIDIAはカード1枚のシステムに750Wを規定しており、それが正しい最低ラインです。カード単体で350Wを消費し、それを大きく上回る短時間の過渡的スパイクもあるため、計算上は問題なさそうでも容量不足や低品質の電源は負荷時にシャットダウンします。',
          },
          {
            q: 'GPUをレンタルすると自分のデータが機器の外に出ますか？',
            a: 'はい、それが根本的なトレードオフです。レンタルしたGPUで処理するものはすべて、自分が管理しないハードウェアにアップロードされます。マーケットプレイス型プラットフォームでは、そのハードウェアは個人所有です。規制対象、機密、顧客データにはコストに関係なくレンタルという選択肢が使えないため、購入を支持するプライバシー面の論拠は損益分岐点計算にまったく左右されません。',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[RTX 3090価格トラッカー — 新品・中古の価格推移、Best Value GPU。](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[8社にわたるRTX 3090クラウド価格、GetDeploying（2026年9月1日更新）。](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[RTX 3090 GPUレンタル価格、RunPod。](https://www.runpod.io/gpu-models/rtx-3090)',
          '[中古RTX 3090は依然としてローカルAI向け最良のGPU、XDA Developers。](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — 住宅用電気料金の平均、US Energy Information Administration。](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLM向けベストGPU：完全購入ガイド](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 価格帯ごとにRTX 3090と現行世代カードを比較。',
          '[ローカルLLM向け中古GPU：コスパの良い選択肢](/ja/local-llms/used-gpus-for-local-llms) — RTX 3060、3080、4090も含めた中古市場の幅広いガイド。',
          '[Ollama対LM Studio](/ja/local-llms/ollama-vs-lm-studio) — 共通のllama.cppバックエンドを超えて、このGPUと組み合わせる2つのツールが実際どう異なるか。',
          '[70Bモデルをローカルで動かす最も安い実用的な方法](/ja/prompt-bites/cheapest-way-to-run-70b-model-locally) — 最も安い70B構成にRTX 3090 2枚がどう当てはまるか。',
          '[70Bモデルにはどれだけのvramが必要か](/ja/prompt-bites/vram-for-70b-model) — 上記の2枚構成の推奨の背景にあるVRAM計算。',
          '[ローカルLLMコスト計算機：構築か、レンタルか](/ja/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 自分の数字とハードウェアで損益分岐点計算を実行。',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-zh.webp',
    title: '2026年本地LLM用RTX 3090：买还是租？',
    seoTitle: '2026年RTX 3090跑本地LLM：买二手还是租？',

    intro: 'RTX 3090是在自己桌面下获得24GB VRAM最便宜的方式，而在云端租用同款显卡每小时只需几美分。本指南计算出这两个选项之间的真实分界线在哪里。',
    metaDescription: '2026年二手RTX 3090售价850–1,050美元；租用价格为每小时0.12–0.22美元。这是本地LLM所需24GB VRAM的买卖平衡点计算。',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '阅读约13分钟',
    educationalLevel: 'Intermediate',
    audience: '在购买二手24GB GPU和租用云端GPU时间以进行本地LLM推理之间做决定的开发者与小团队',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 本地llm',
      'rtx 3090 还值得买吗',
      'rtx 3090 二手价格',
      'rtx 3090 对比云gpu租用',
      '24gb vram gpu 跑llm',
      'rtx 3090 ollama',
      'rtx 3090 70b模型',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**如果未来两年内你每天使用超过约四小时，或者数据不能离开你的场所，就购买一块二手RTX 3090；否则就租用。** 二手价格850–1,050美元，对比云端每小时0.12–0.22美元，这张卡只有在持续高负载使用下才能回本——而2026年它比春季更贵，这把回本点推得比大多数购买指南承认的更远。',

    quickAnswerTop: {
      zh: {
        question: '本地LLM还值得买RTX 3090吗？',
        answer: '值得，但仅限于持续使用或有隐私限制的场景。一块二手RTX 3090以850–1,050美元提供24GB VRAM，仍是在自有硬件上完整运行27B级模型最便宜的方式。租用同款GPU每小时0.12–0.22美元，因此在轻度使用下云端多年内都更便宜。',
        bullets: [
          '24GB VRAM、936GB/s带宽、350W——自2020年以来未变，仍是最便宜的24GB显卡',
          '二手价格850–1,050美元；受内存短缺影响，从2026年春季的600–800美元上涨',
          '云端租用价格从0.12美元/小时（[Vast.ai](https://Vast.ai)）到0.22美元/小时（RunPod Community）；8家供应商的中位数为0.15美元/小时',
          '相对0.15美元/小时的租用，每天2小时使用的回本时间约17年——每天8小时约4年',
          '为隐私、延迟、常驻代理和持续微调而购买；为突发需求和实验而租用',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026年本地LLM用RTX 3090：买还是租？',
      description: '针对本地LLM推理，购买二手NVIDIA RTX 3090与在云服务商处租用同款GPU之间的回本点分析，包含2026年价格。',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/zh/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'zh',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: '运行本地LLM推理的开发者与小团队',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: '本地大语言模型' },
        { '@type': 'Thing', name: '云端GPU租用' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/zh/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/zh/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: '核心要点',
        numberedItems: [
          '一块二手RTX 3090售价850–1,050美元，提供24GB VRAM——仍是获得这么多显存最便宜的方式。',
          '租用同款GPU在Vast.ai上每小时0.12美元，在RunPod Community上每小时0.22美元，8家供应商的中位数为每小时0.15美元。',
          '扣除约每小时0.08美元的电费后，购买要在约12,300个GPU小时之后才能相对中位数租金胜出——按每天8小时计算约需四年。',
          '这张卡在2026年变贵了，而不是变便宜：春季售价600–800美元。这使回本点更远，与大多数购买指南的假设相反。',
          '为隐私、离线工作、常驻代理和持续微调而购买；为突发需求、实验以及原本会闲置不用的场景而租用。',
          '转售价值是支持购买的最有力论据：一块两年后仍能卖出数百美元的3090，能把购买行为的大部分变成一笔押金，而不是纯粹的支出。',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: '30秒做决定',
        content: '两条路径给你的都是同一块GPU和同样的24GB VRAM。真正的问题只有一个：你实际会用多少小时，以及数据是否能离开你的网络。',
        decisionBlock: {
          title: '购买二手RTX 3090，还是租一块？',
          localIf: [
            '你会持续地每天使用超过约4小时',
            '数据不能离开你的场所——医疗、法律、客户或受监管业务',
            '你想要常驻代理、家庭助手或夜间批处理任务',
            '你会定期而非偶尔进行微调或嵌入操作',
            '你已经有机箱、750W以上电源和散热排放条件',
          ],
          cloudIf: [
            '你还在判断本地推理是否适合你',
            '你的使用是突发式的——一个忙碌的周末，然后是两周的平静',
            '你想在不买两块卡的情况下测试70B级模型',
            '你不想拥有会贬值的硬件',
            '下个月你需要的GPU可能和今天不同',
          ],
          quick: [
            '每天少于2小时→租用，六个月后重新评估',
            '每天4小时以上，天天如此→购买，这张卡能回本',
            '任何不能上传的数据→购买，成本不是决定因素',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '如果未来两年内你每天使用二手RTX 3090超过约四小时，或者数据无法上传，购买它值得；否则以每小时0.12–0.22美元租用同款卡更划算。',
          },
          {
            type: 'plain-terms',
            text: '拥有这张卡就像买车；租用就像打车。打车更便宜，直到你每天都要用车——而这张卡与车不同，它保值能力足够强,转售时能拿回很大一部分钱。',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: '快速要点',
        items: [
          'VRAM：24GB GDDR6X——足以在4-bit量化下运行27B级模型,并为上下文留出空间。',
          '显存带宽：936GB/s,在受显存带宽限制的负载中,这实际决定了token生成速度。',
          '功耗：显卡本身TDP为350W；推理负载下,整机墙上功耗预算约450W。',
          '二手价格：通常850–1,050美元,eBay均价接近1,000美元——较2026年春季的600–800美元上涨。',
          '云端租用：从每小时0.12美元（[Vast.ai](https://Vast.ai)）到每小时0.50美元（RunPod Secure）；8家供应商中位数为每小时0.15美元。',
          '电费：按2026年美国住宅电价均值0.18美元/kWh计算,运行成本约每小时0.08美元。',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'RTX 3090真正提供了什么',
        content: [
          '**RTX 3090重要的原因只有一个：以任何人能给出的最低价格提供24GB VRAM。** 到2026年,这张卡的其他方面都不算突出——它是2020年的设计,功耗350W,当前一代显卡在每项能效指标上都能超过它。但这些都改变不了一个事实：模型权重要么能装进显存,要么装不进。',
          'VRAM是一道悬崖,不是斜坡。能装下的模型以全速运行；哪怕只超出1GB,模型也会溢出到系统内存,速度骤降到原来的一小部分。这使得24GB成为一个能力门槛,而非性能数字,而3090是跨过这道门槛最便宜的卡。',
          '第二个重要数字是显存带宽。量化模型的token生成受显存带宽限制,而非算力限制,所以936GB/s比任何CUDA核心数都更能预测体感速度。这也是为什么面对算力更强但显存位宽更窄的新款中端显卡,3090依然保持竞争力的原因。',
          '实际效果是：4-bit量化的27B级模型有充裕余量,长上下文的7B–14B模型推理速度快,而加上第二块卡后,还能在无需offload的情况下将70B级模型完整放入显存。',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: '24GB实际能跑什么：模型规模与量化',
        content: [
          '**"能装进24GB"和"交互使用体验流畅"是两个不同的说法,混淆两者的购买指南会给出错误的预期。** 一个模型技术上可以加载,却可能没有留下任何上下文空间,这意味着它对单条短提示词有效,但对话一旦变长就会崩溃。下表区分了这两种说法。',
          '让模型在这些列之间移动的变量是上下文长度：每一条对话历史token和每一个生成的token,除了权重本身之外,都需要在KV缓存中占用空间。一个使用4K上下文的4-bit量化27B模型能舒适地装下；把同一个模型的上下文推到32K,则可能吃掉量化省下的那部分余量。',
        ],
        columns: ['模型规模', '能否装进24GB（4-bit）', '交互式使用'],
        rows: [
          { '模型规模': '7B–8B', '能否装进24GB（4-bit）': '可以，还有余量', '交互式使用': '快，长上下文也舒适' },
          { '模型规模': '13B–14B', '能否装进24GB（4-bit）': '可以', '交互式使用': '快，上下文充裕' },
          { '模型规模': '27B–34B', '能否装进24GB（4-bit）': '可以', '交互式使用': '舒适／长上下文需留意KV缓存' },
          { '模型规模': '70B（4-bit，单卡）', '能否装进24GB（4-bit）': '技术上可行，需CPU offload', '交互式使用': '慢——被offload的层拖慢生成' },
          { '模型规模': '70B（4-bit，双卡）', '能否装进24GB（4-bit）': '可以，合计48GB', '交互式使用': '舒适，无需offload' },
        ],
        callouts: [
          {
            type: 'note',
            text: '一个4-bit量化的70B级模型,仅权重就大约需要40–45GB VRAM,还不算上下文。单张24GB显卡要达到这一点,只能靠把部分模型offload到系统内存,这就是上表中单卡那一行被标注为"技术上可行"而非"舒适"的原因。',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090搭配Ollama和LM Studio',
        content: [
          '**RTX 3090的24GB对Ollama和LM Studio尤为重要,因为在模型能装下时,两者默认都会将其完整加载到GPU显存中,装不下时则回退到更慢的CPU/GPU offload。** 有了24GB可用空间,两款工具都能把27B级模型完整放在显卡上运行,而不必拆分。',
          '实际的每秒token数取决于具体模型、量化级别、上下文长度、所用的后端构建版本（两者底层都是llama.cpp）、提示词中还有多少需要处理与已经缓存的比例,以及同一台机器上还在运行什么。这两款工具都没有发布官方的RTX 3090基准测试,所以你在别处看到的任何单一"每秒X个token"数字,都只是某个人的具体配置,不是对你设置的保证。',
          '实际操作：安装其中一款工具,加载一个4-bit量化的27B级模型,并在运行时通过`nvidia-smi`（或工具自身的显示）检查显存占用——如果占用舒适地低于24GB,说明模型完全在显卡上,你获得的是RTX 3090的全部显存带宽。',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: '购买二手：付款前该检查什么',
        sponsoredSlot: true,
        content: [
          '**如果要买,就买二手——已经没有人在卖全新的RTX 3090了,价格优势就在二手市场。** 850–1,050美元的价格使它成为可买到的最便宜的24GB显卡,并且转售价值保持得不错,这实质上降低了真实持有成本。',
          '一个诚实的提醒：这些是已有五年历史的显卡,很多来自矿卡或游戏卡,由个人卖家在无保修的情况下出售。故障模式是已知且可检查的,因此风险是可控的——但风险确实存在,这也是为什么应该向接受退货的卖家购买,而不是找最便宜的那条listing。',
        ],
        items: [
          '要求提供负载测试中的照片,能看到温度——负载下显存结点温度高于约100°C，说明散热垫可能已经干裂。',
          '这张卡的GDDR6X按设计运行温度本来就高；已经更换过散热垫的卖家是个好信号,不是警示信号。',
          '确认这确实是24GB的RTX 3090,而不是RTX 3080——listing标题不是证据,要求提供GPU-Z截图。',
          '优先选择有买家保护和退货政策的平台。在不可退货listing上省下的50美元,不值得为一张五年历史的显卡承担风险。',
          '确认物理尺寸能装下：大多数设计中3090占用三个插槽,需要750W及以上电源。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum未加入任何联盟营销计划。以下链接不带联盟标签,也不产生佣金——它们只是普通的参考链接,方便你自行核对当前价格。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB（二手）',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: '在eBay查看二手RTX 3090价格',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB（二手／翻新）',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: '在Newegg查看RTX 3090库存',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: '选卡：散热、尺寸和电源接口',
        itemHeadings: true,
        content: [
          '**每一块RTX 3090都拥有相同的24GB VRAM,所以选定"RTX 3090"的那一刻,模型能否装下的问题就已经确定了。真正在各卡之间不同的,是拥有它的舒适程度。** 没有哪一家厂商的散热设计在所有listing中客观上最优——二手市场的成色差异比设计本身更大——但以下是购买前值得检查的因素。',
        ],
        columns: ['因素', '需要检查的内容'],
        rows: [
          { 因素: '散热设计', '需要检查的内容': '开放式三风扇散热器在持续负载下比涡轮式安静；询问空闲和推理状态下的噪音水平。' },
          { 因素: '物理尺寸', '需要检查的内容': '大多数RTX 3090占三个插槽、长度超过30厘米——购买前先量好机箱,而不是事后再量。' },
          { 因素: '电源接口', '需要检查的内容': '大多数型号使用标准8针PCIe（两个或三个）；在依赖转接头之前,先确认电源有足够的原生接口。' },
          { 因素: '保修', '需要检查的内容': '这一代显卡的原厂保修大多已过期——除非卖家另有说明,否则应将任何二手3090视为"概不保修"出售。' },
          { 因素: '使用状态', '需要检查的内容': '曾用于挖矿本身不是排除理由（见上文购买清单）；散热不佳下的重度超频才是更大的风险信号。' },
          { 因素: '价格与风险', '需要检查的内容': '如果不支持退货,最便宜的listing未必是最划算的——对于一张五年历史的显卡,为买家保护多付50–100美元通常是值得的。' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: '为什么租用比想象中更常是更好的选择',
        content: [
          '**支持租用的理由不是它总是更便宜——而是一块闲置的GPU和一块繁忙的GPU花费相同。** 一张只在周末使用的桌面显卡,已经付出了全部购买成本。租用的GPU在会话之间不产生任何费用。',
          '租用的理由是具体的,而非哲学性的：没有前期支出,没有五年历史显卡的贬值风险,没有电源、机箱或散热的限制,风扇故障也不会毁掉一个周末。你还可以租用一块你永远不会购买的显卡——用两块租来的GPU测试70B级模型一个下午只需几美元,而买一对二手卡大约需要1,700美元。',
          '诚实的反对意见是,租用确实存在实际摩擦。你要把数据上传到别人的机器上,要等待实例可用,而在市场型平台上有时会遇到工作到一半就消失的主机。这些都不是否定租用的理由——而是这个决定应该取决于你的工作负载,而不仅仅是小时费率的理由。',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: '租用RTX 3090：费用与渠道',
        sponsoredSlot: true,
        content: [
          '**Vast.ai是租用RTX 3090最便宜的方式,约每小时0.12美元,而RunPod在其Community层级上以每小时0.22美元提供更可靠的选择。** 这一差异概括了全部权衡：Vast.ai是私人拥有GPU的市场,因此价格更低,但主机质量参差不齐；RunPod运营自有算力,因此价格更高,但表现更可预测。',
          '对于第一次尝试,便宜的层级完全够用——一次实验中失败的实例,损失的只是重启的时间。对于有截止日期的任务,或者超过几个小时的任何工作,每小时多付的十美分买到的正是你真正想要的：当你回来时,任务仍在运行。',
        ],
        columns: ['供应商', '价格/小时', '最适合'],
        rows: [
          { 供应商: 'Vast.ai', '价格/小时': '0.12美元', '最适合': '最低小时费率；实验和突发需求' },
          { 供应商: 'RunPod Community', '价格/小时': '0.22美元', '最适合': '以适度溢价换取可预测的算力' },
          { 供应商: 'RunPod Secure', '价格/小时': '0.50美元', '最适合': '企业级可靠性与支持' },
          { 供应商: '8家供应商中位数', '价格/小时': '0.15美元', '最适合': '用于你自己回本计算的数字' },
        ],
        items: [
          '设置复杂度：Vast.ai及类似市场需要你自己选择主机和模板；RunPod等托管供应商提供预装Ollama或Web UI的一键模板。',
          '持久性：在大多数供应商处,已停止的实例仍会为附加的存储计费；在跨会话缓存大模型之前,先确认GPU暂停期间供应商是否仍对存储收费。',
          '最短租期：市场型listing通常按分钟计费,没有最低要求；部分托管算力层级要求最低时长区块——在确定任务之前,请查看具体供应商的定价页面。',
          '地理可用性：市场型GPU位于其所有者所在的地方,因此不保证特定区域；托管供应商公布固定的数据中心区域,这在有数据驻留要求时很重要。',
        ],
        callouts: [
          {
            type: 'note',
            text: '价格已于2026年9月1日对照多供应商价格表及RunPod自身的机型页面核实。云端GPU价格每周都会变动——确定之前请核实当前价格。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai上的RTX 3090 GPU租用',
            productCategory: 'cloud-gpu',
            priceRange: '起价0.12美元/小时',
            label: '在Vast.ai查看RTX 3090价格',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'RunPod上的RTX 3090 GPU租用',
            productCategory: 'cloud-gpu',
            priceRange: '起价0.22美元/小时',
            label: '在RunPod查看RTX 3090价格',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: '回本点计算',
        content: [
          '**相对每小时0.15美元的中位数租金,一张850美元的显卡大约需要12,300个GPU小时才能回本——按每天8小时计算约需四年,按每天2小时计算约需十七年。** 这是大多数购买指南跳过的数字,也是应该用来决定购买与否的数字。',
          '这个计算扣除了运行这张卡的成本。以墙上功耗450W和2026年美国平均电价0.18美元/kWh计算,本地推理的电费约为每小时0.08美元,所以你比较的不是850美元对0.15美元/小时,而是850美元对你实际节省的约0.07美元/小时。',
          '前提假设：850美元的显卡、系统功耗450W、电价0.18美元/kWh。请代入你自己的电价——它比表中任何其他因素都更能左右结果,在电价高于0.30美元/kWh的市场,购买的理由基本上就消失了。',
        ],
        columns: ['使用量', '对比0.12美元/h', '对比0.15美元/h', '对比0.22美元/h'],
        rows: [
          { 使用量: '每天2小时', '对比0.12美元/h': '约30年', '对比0.15美元/h': '约17年', '对比0.22美元/h': '约8年' },
          { 使用量: '每天4小时', '对比0.12美元/h': '约15年', '对比0.15美元/h': '约8年', '对比0.22美元/h': '约4年' },
          { 使用量: '每天8小时', '对比0.12美元/h': '约7.5年', '对比0.15美元/h': '约4年', '对比0.22美元/h': '约2年' },
          { 使用量: '全天候运行（24/7）', '对比0.12美元/h': '约2.5年', '对比0.15美元/h': '约1.4年', '对比0.22美元/h': '约8个月' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '这张表在一个具体方面让购买显得比实际更差：它忽略了转售。一块二手RTX 3090五年来一直保值,所以如果你之后转售,购买价格中的很大一部分会回来,上面所有数字都会大幅缩短。',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: '你属于哪一类',
        itemHeadings: true,
        columns: ['读者类型', '结论', '原因'],
        rows: [
          {
            读者类型: '周末爱好者',
            结论: '租用',
            原因: '每周几小时的使用相对850美元的支出,离回本点还差几十年。先租一年,如果发现自己天天在租,那时再买——你也会清楚自己到底需要哪张卡。',
          },
          {
            读者类型: '每日重度用户',
            结论: '购买',
            原因: '每天四小时以上,这张卡几年内就能回本,转售还能收回剩余成本中的大部分。更大的收益是行为层面的：自有的GPU没有计时器在跑,你就不再需要节制实验。',
          },
          {
            读者类型: '小团队或初创公司',
            结论: '先租后买',
            原因: '在工作负载形态仍在变化时先租用——你还不知道自己需要24GB还是80GB。等使用变得稳定、可预测到足以做预算时再购买,那通常也是每月账单开始让人心疼的时刻。',
          },
          {
            读者类型: '受隐私或合规约束',
            结论: '购买',
            原因: '成本不是决定因素。如果客户数据、医疗记录或受监管资料不能上传到第三方主机,无论价格多少,租用选项都不存在,而3090是满足这一要求最便宜的方式。',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: '在这些情况下应跳过RTX 3090',
        content: [
          '**如果你的模型能装进16GB,就跳过它。** 如果你运行的是4-bit的7B和14B模型,从不触碰更大的模型,一张更便宜的当代16GB显卡更安静、功耗低得多,还带保修。为你永远用不到的余量支付24GB的溢价,是这笔购买中最常见的错误。',
          '如果你是为训练而非推理购买,也应跳过。在单张24GB显卡上进行实质性微调意味着激进的量化和漫长的等待；租用几小时更大的显卡,既更快也更便宜。',
          '如果你的电价昂贵,也应跳过。在0.30美元/kWh及以上,仅运行成本就接近更便宜的云端费率,拥有这张卡的理由基本消失。',
        ],
      },

      verdict: {
        id: 'verdict',
        title: '我们的结论',
        content: [
          '**如果未来两年内你每天使用超过约四小时,或者数据不能离开你的场所,就购买一块二手RTX 3090——它仍是拥有24GB VRAM最便宜的方式。如果你的使用是偶尔的、突发式的,或者你还在判断本地推理是否适合你的工作负载,就选择租用。如果不确定,先租用。**',
          '对于频繁的本地LLM使用和隐私需求：购买。对于偶尔的实验：租用。对于不确定或变化中的使用：先租用,等六个月后了解了实际使用时长再重新评估。对于专门寻求便宜24GB VRAM的人来说,一块状态良好的二手RTX 3090在2026年依然有吸引力——内存短缺导致的价格上涨并没有改变这一点,只是把回本点推得更远。如果是新购买,而效率、保修和当代功能比初始价格更重要,可以改为对比[当代显卡](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026)。',
          '总结：RTX 3090的优势是以二手市场价格获得24GB VRAM。它的成本是使用年限、高功耗、发热、噪音以及没有保修。这场权衡的两端在2026年都没有改变——唯一变化的是购买价格,而且是朝着不利于购买的方向变化的。',
        ],
      },

      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '2026年RTX 3090还值得购买吗？',
            a: '对于持续的本地推理来说,值得——它仍是最便宜的24GB二手显卡,售价850–1,050美元。对于轻度或偶尔使用来说,不值得：以每小时0.12–0.22美元租用同款GPU,多年内都更便宜。决定因素是每周实际使用的小时数,而不是规格本身。',
          },
          {
            q: 'RTX 3090适合用于Ollama吗？',
            a: '适合。当模型能装下时,Ollama会将其完整加载到GPU显存中,而24GB足以让4-bit量化的27B级模型完全运行在显卡上,而不必拆分到CPU和GPU之间。加载模型时,可以用`nvidia-smi`确认模型完全驻留在GPU上。',
          },
          {
            q: 'RTX 3090适合用于LM Studio吗？',
            a: '适合,原因与Ollama相同——两者都基于llama.cpp后端运行,同样能从24GB VRAM中获益。LM Studio直接在界面中显示GPU显存占用,便于确认模型是完全加载还是部分offload。',
          },
          {
            q: '本地LLM该选RTX 3090还是RTX 4090？',
            a: '两者都有24GB,因此能运行相同的模型。4090明显更快、能效也高得多,但二手价格大约是3090的两倍。如果你运行的模型本来就能装下,3090能以更低的花费提供相同的能力；如果生成速度是限制你工作的因素,4090则物有所值。',
          },
          {
            q: 'RTX 3090每秒能生成多少token？',
            a: '这取决于模型大小和量化程度,任何单一数字都可能有误导性。有用的经验法则是：量化模型的token生成受显存带宽限制,因此3090的936GB/s是预测速度的关键数字——模型越小、量化越激进,每秒生成的token就越多。',
          },
          {
            q: '两块RTX 3090能运行70B模型吗？',
            a: '可以。两张卡合计提供48GB VRAM,足以在不offload到系统内存的情况下容纳一个4-bit量化的70B级模型。请准备1,000W及以上的电源,以及带有两个合适插槽的主板——在花费约1,700美元之前,建议先租用一个双GPU云实例试用一个下午,确认这套配置能满足你的需求。',
          },
          {
            q: '为什么2026年二手RTX 3090价格上涨了？',
            a: '2026年内存短缺普遍推高了GPU价格,而对24GB显卡的需求在本地跑模型的人群中的增长,超过了游戏玩家群体。这张卡春季售价600–800美元,到9月已涨至850–1,050美元。它是少数几款变贵的五年历史产品之一。',
          },
          {
            q: '购买二手矿卡安全吗？',
            a: '经过检查通常是安全的。矿卡在恒定的中等负载下运行,比游戏的热循环更温和,但往往需要更换新的散热垫。要求提供显示显存结点温度的负载测试照片,向提供退货的卖家购买,并将同时缺少这两项的listing视为无法验证的显卡。',
          },
          {
            q: 'RTX 3090需要多大功率的电源？',
            a: 'NVIDIA为单卡系统规定的是750W,这是正确的最低标准。显卡本身消耗350W,还有远高于此的短暂瞬时功耗峰值,因此即使计算上看起来没问题,功率不足或质量较差的电源在负载下也会关机。',
          },
          {
            q: '租用GPU是否意味着我的数据会离开我的设备？',
            a: '是的——这是根本性的权衡。你在租用的GPU上处理的任何内容,都会上传到你不掌控的硬件上,而在市场型平台上,这些硬件属于私人所有。对于受监管、机密或客户数据而言,无论成本如何,这都排除了租用这一选项,这也是为什么支持购买的隐私理由完全不取决于回本点计算。',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[RTX 3090价格追踪——新品与二手价格历史,Best Value GPU。](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[8家供应商的RTX 3090云端价格,GetDeploying（2026年9月1日更新）。](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[RTX 3090 GPU租用价格,RunPod。](https://www.runpod.io/gpu-models/rtx-3090)',
          '[二手RTX 3090仍是本地AI最佳GPU,XDA Developers。](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly——住宅平均电价,US Energy Information Administration。](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地LLM最佳GPU：完整购买指南](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 在每个价位段将RTX 3090与当代显卡进行比较。',
          '[本地LLM二手GPU：高性价比之选](/zh/local-llms/used-gpus-for-local-llms) — 更全面的二手市场指南,涵盖RTX 3060、3080和4090与本卡的对比。',
          '[Ollama对比LM Studio](/zh/local-llms/ollama-vs-lm-studio) — 除了共享llama.cpp后端之外,这块GPU搭配的两款工具究竟有何不同。',
          '[本地运行70B模型最便宜的实用方式](/zh/prompt-bites/cheapest-way-to-run-70b-model-locally) — 两块RTX 3090在最便宜的70B配置中的定位。',
          '[70B模型需要多少VRAM？](/zh/prompt-bites/vram-for-70b-model) — 上述双卡建议背后的VRAM计算。',
          '[本地LLM成本计算器：自建还是租用](/zh/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 用你自己的数字和硬件运行回本点计算。',
        ],
      },
    },
  },

  ko: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-10-03',
    last_full_refresh: '2026-09-03',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-ko.webp',
    title: '2026년 로컬 LLM용 RTX 3090: 구매해야 할까, 대여해야 할까',
    seoTitle: '2026년 RTX 3090 로컬 LLM: 중고 구매 vs 대여',

    intro: 'RTX 3090은 자신의 책상 아래에 24GB VRAM을 두는 가장 저렴한 방법이며, 클라우드에서 같은 카드를 대여하면 시간당 몇 센트면 충분합니다. 이 가이드는 두 선택지 사이의 경계가 실제로 어디에 있는지 계산합니다.',
    metaDescription: '2026년 중고 RTX 3090 가격은 850–1,050달러이며, 대여는 시간당 0.12–0.22달러입니다. 로컬 LLM용 24GB VRAM의 구매 대 대여 손익분기점을 계산합니다.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-03',
    readTime: '13분 읽기',
    educationalLevel: 'Intermediate',
    audience: '중고 24GB GPU 구매와 로컬 LLM 추론을 위한 클라우드 GPU 시간 대여 사이에서 결정을 내려야 하는 개발자 및 소규모 팀',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 로컬llm',
      'rtx 3090 아직 살만한가',
      'rtx 3090 중고 가격',
      'rtx 3090 대 클라우드gpu 대여',
      '24gb vram gpu llm용',
      'rtx 3090 ollama',
      'rtx 3090 70b모델',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**향후 2년간 하루 약 4시간 이상 사용할 예정이거나, 데이터가 건물 밖으로 나갈 수 없다면 중고 RTX 3090을 구매하십시오. 그렇지 않다면 대여하십시오.** 중고 850–1,050달러 대 클라우드 시간당 0.12–0.22달러를 비교하면, 이 카드는 지속적인 부하에서만 본전을 뽑을 수 있습니다. 게다가 2026년에는 봄보다 가격이 올라, 대부분의 구매 가이드가 인정하는 것보다 손익분기점이 더 멀어졌습니다.',

    quickAnswerTop: {
      ko: {
        question: '로컬 LLM용으로 RTX 3090은 아직 구매할 가치가 있습니까?',
        answer: '네, 다만 지속적인 사용이나 개인정보 보호가 필요한 작업에 한합니다. 중고 RTX 3090은 850–1,050달러에 24GB VRAM을 제공하며, 이는 27B급 모델을 자신의 하드웨어에서만 완전히 구동하는 가장 저렴한 방법입니다. 같은 GPU를 대여하면 시간당 0.12–0.22달러이므로, 가벼운 사용에서는 클라우드가 수년간 더 저렴합니다.',
        bullets: [
          '24GB VRAM, 936GB/s 대역폭, 350W — 2020년 이후 변화 없이 여전히 가장 저렴한 24GB 카드',
          '중고 가격 850–1,050달러; 메모리 부족으로 2026년 봄 600–800달러에서 상승',
          '클라우드 대여는 시간당 0.12달러([Vast.ai](https://Vast.ai))부터 0.22달러(RunPod Community)까지; 8개 공급업체 중앙값은 시간당 0.15달러',
          '시간당 0.15달러 대여 대비 하루 2시간 사용 시 손익분기점은 약 17년, 하루 8시간이면 약 4년',
          '개인정보 보호, 지연 시간, 상시 실행 에이전트, 지속적인 파인튜닝을 위해서는 구매하고, 일시적 사용과 실험을 위해서는 대여하십시오',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026년 로컬 LLM용 RTX 3090: 구매해야 할까, 대여해야 할까',
      description: '로컬 LLM 추론을 위해 중고 NVIDIA RTX 3090을 구매하는 경우와 클라우드 공급업체에서 같은 GPU를 대여하는 경우의 손익분기점 분석, 2026년 가격 기준.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-03',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/ko/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      inLanguage: 'ko',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: {
        '@type': 'Audience',
        audienceType: '로컬 LLM 추론을 실행하는 개발자 및 소규모 팀',
      },
      about: [
        { '@type': 'Thing', name: 'NVIDIA RTX 3090' },
        { '@type': 'Thing', name: '로컬 대규모 언어 모델' },
        { '@type': 'Thing', name: '클라우드 GPU 대여' },
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': '[www.promptquorum.com/ko/power-local-llm/rtx-3090-local-llm-buy-or-rent](https://www.promptquorum.com/ko/power-local-llm/rtx-3090-local-llm-buy-or-rent)',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: '핵심 내용',
        numberedItems: [
          '중고 RTX 3090은 850–1,050달러에 24GB VRAM을 제공합니다 — 이만큼의 비디오 메모리를 확보하는 가장 저렴한 방법이라는 사실은 변하지 않았습니다.',
          '같은 GPU를 대여하면 Vast.ai에서 시간당 0.12달러, RunPod Community에서 시간당 0.22달러이며, 8개 공급업체의 중앙값은 시간당 0.15달러입니다.',
          '시간당 약 0.08달러의 전기료를 제외하면, 구매는 중앙값 대여 대비 약 12,300 GPU 시간이 지나야 앞서기 시작합니다 — 하루 8시간 기준 약 4년입니다.',
          '이 카드는 2026년에 더 저렴해진 것이 아니라 더 비싸졌습니다: 봄에는 600–800달러였습니다. 이는 대부분의 구매 가이드가 가정하는 것과 반대로 손익분기점을 더 멀리 밀어냅니다.',
          '개인정보 보호, 오프라인 작업, 상시 실행 에이전트, 지속적인 파인튜닝을 위해서는 구매하고, 일시적 사용, 실험, 그리고 그렇지 않으면 방치될 용도를 위해서는 대여하십시오.',
          '재판매 가치는 구매를 뒷받침하는 가장 강력한 근거입니다: 2년 후에도 수백 달러에 팔리는 3090은 구매 비용의 상당 부분을 비용이 아니라 보증금에 가깝게 만듭니다.',
        ],
      },

      decideFast: {
        id: 'decide-fast',
        title: '30초 만에 결정하기',
        content: '두 경로 모두 같은 GPU와 같은 24GB VRAM을 제공합니다. 실제 질문은 오직 실제로 몇 시간을 사용할 것인지, 그리고 데이터가 네트워크를 벗어날 수 있는지입니다.',
        decisionBlock: {
          title: '중고 RTX 3090을 구매할까, 대여할까?',
          localIf: [
            '꾸준히 하루 약 4시간 이상 사용할 예정입니다',
            '데이터가 건물 밖으로 나갈 수 없습니다 — 의료, 법률, 고객 또는 규제 대상 업무',
            '상시 실행 에이전트, 홈 어시스턴트, 야간 배치 작업이 필요합니다',
            '파인튜닝이나 임베딩을 가끔이 아니라 정기적으로 수행합니다',
            '이미 케이스, 750W 이상의 전원 공급장치, 발열 배출 공간이 있습니다',
          ],
          cloudIf: [
            '로컬 추론이 자신에게 맞는지 아직 파악 중입니다',
            '사용 패턴이 불규칙합니다 — 바쁜 주말 이후 조용한 2주',
            '카드 두 개를 사지 않고 70B급 모델을 테스트하고 싶습니다',
            '가치가 하락하는 하드웨어를 소유하고 싶지 않습니다',
            '다음 달에는 오늘과 다른 GPU가 필요할 것입니다',
          ],
          quick: [
            '하루 2시간 미만 → 대여하고 6개월 후 재검토',
            '매일 4시간 이상 → 구매, 카드가 본전을 뽑습니다',
            '업로드할 수 없는 데이터가 있다면 → 구매, 비용이 결정 요인이 아닙니다',
          ],
        },
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '2년간 하루 약 4시간 이상 사용하거나 데이터를 업로드할 수 없다면 로컬 LLM용 중고 RTX 3090 구매가 가치 있습니다. 그렇지 않다면 같은 카드를 시간당 0.12–0.22달러에 대여하는 것이 더 저렴합니다.',
          },
          {
            type: 'plain-terms',
            text: '카드를 소유하는 것은 자동차를 사는 것과 같고, 대여는 택시를 타는 것과 같습니다. 매일 운전하기 전까지는 택시가 더 저렴하지만, 이 카드는 자동차와 달리 가치를 충분히 유지하므로 되팔 때 상당한 금액을 돌려받습니다.',
          },
        ],
      },

      quickFacts: {
        id: 'quick-facts',
        title: '핵심 정보',
        items: [
          'VRAM: 24GB GDDR6X — 4비트 양자화로 27B급 모델을 컨텍스트 여유를 두고 실행하기에 충분합니다.',
          '메모리 대역폭: 936GB/s로, 메모리 대역폭에 제약받는 워크로드에서 토큰 생성 속도를 실질적으로 결정합니다.',
          '전력: 카드 자체 TDP는 350W; 추론 부하 시 시스템 전체 콘센트 기준 약 450W를 예상하십시오.',
          '중고 가격: 일반적으로 850–1,050달러, eBay 평균은 1,000달러 안팎 — 2026년 봄 600–800달러에서 상승.',
          '클라우드 대여: 시간당 0.12달러([Vast.ai](https://Vast.ai))부터 시간당 0.50달러(RunPod Secure)까지; 8개 공급업체 중앙값은 시간당 0.15달러.',
          '전기료: 2026년 미국 주거용 평균 0.18달러/kWh 기준, 운영 비용은 시간당 약 0.08달러.',
        ],
      },

      whyThisCard: {
        id: 'why-this-card',
        title: 'RTX 3090이 실제로 제공하는 것',
        content: [
          '**RTX 3090이 중요한 이유는 단 하나입니다: 누구보다 저렴한 가격에 24GB VRAM을 제공한다는 점입니다.** 2026년 기준으로 이 카드의 다른 모든 면은 평범합니다 — 2020년 설계이며 350W를 소비하고, 현세대 카드가 모든 효율성 지표에서 이를 능가합니다. 하지만 그렇다고 해서 모델 가중치가 비디오 메모리에 들어가느냐 마느냐의 사실이 바뀌지는 않습니다.',
          'VRAM은 완만한 경사가 아니라 절벽입니다. 딱 맞는 모델은 최대 속도로 실행되지만, 단 1GB라도 넘치면 시스템 RAM으로 흘러넘쳐 속도가 급격히 떨어집니다. 이 때문에 24GB는 성능 수치가 아니라 능력의 임계값이 되며, 3090은 이 임계값을 넘는 가장 저렴한 카드입니다.',
          '두 번째로 중요한 수치는 메모리 대역폭입니다. 양자화된 모델의 토큰 생성은 연산이 아니라 메모리 대역폭에 제약받으므로, 936GB/s가 CUDA 코어 수보다 체감 속도를 더 잘 예측합니다. 이는 또한 연산량은 더 많지만 메모리 버스가 더 좁은 최신 중급 카드들 사이에서도 3090이 경쟁력을 유지하는 이유입니다.',
          '실제로는: 4비트 양자화된 27B급 모델에 여유로운 공간, 긴 컨텍스트에서도 빠른 7B–14B 모델 추론, 그리고 카드를 한 장 더 추가하면 오프로드 없이 70B급 모델을 VRAM에 완전히 유지할 수 있는 능력을 얻습니다.',
        ],
      },

      modelCapacity: {
        id: 'model-capacity',
        title: '24GB가 실제로 실행하는 것: 모델 크기와 양자화',
        content: [
          '**"24GB에 들어간다"와 "인터랙티브 사용에 쾌적하게 작동한다"는 서로 다른 주장이며, 이 둘을 혼동하는 구매 가이드는 잘못된 기대를 심어줍니다.** 모델은 기술적으로 로드되더라도 컨텍스트를 위한 공간이 전혀 남지 않을 수 있으며, 이는 짧은 단일 프롬프트에는 작동하지만 대화가 길어지는 순간 무너진다는 뜻입니다. 아래 표는 이 둘을 구분합니다.',
          '모델을 이 열들 사이에서 움직이게 하는 변수는 컨텍스트 길이입니다: 대화 기록의 모든 토큰과 생성되는 모든 토큰은 가중치 자체 외에 KV 캐시에 공간이 필요합니다. 4K 컨텍스트의 4비트 양자화 27B 모델은 쾌적하게 들어가지만, 같은 모델을 32K 컨텍스트로 밀어붙이면 양자화로 확보한 여유 공간을 다시 잠식할 수 있습니다.',
        ],
        columns: ['모델 등급', '24GB에 들어가는가 (4비트)', '인터랙티브 사용'],
        rows: [
          { '모델 등급': '7B–8B', '24GB에 들어가는가 (4비트)': '예, 여유 있음', '인터랙티브 사용': '빠름, 긴 컨텍스트도 쾌적' },
          { '모델 등급': '13B–14B', '24GB에 들어가는가 (4비트)': '예', '인터랙티브 사용': '빠름, 넉넉한 컨텍스트' },
          { '모델 등급': '27B–34B', '24GB에 들어가는가 (4비트)': '예', '인터랙티브 사용': '쾌적함 / 긴 컨텍스트에서는 KV 캐시 주의' },
          { '모델 등급': '70B (4비트, 카드 1개)', '24GB에 들어가는가 (4비트)': '기술적으로 가능, CPU 오프로드 필요', '인터랙티브 사용': '느림 — 오프로드된 레이어가 생성을 지연' },
          { '모델 등급': '70B (4비트, 카드 2개)', '24GB에 들어가는가 (4비트)': '예, 합계 48GB', '인터랙티브 사용': '쾌적함, 오프로드 없음' },
        ],
        callouts: [
          {
            type: 'note',
            text: '4비트 양자화된 70B급 모델은 컨텍스트를 제외한 가중치만으로도 약 40–45GB의 VRAM이 필요합니다. 24GB 카드 한 장으로 이를 달성하려면 모델 일부를 시스템 RAM으로 오프로드하는 방법밖에 없으며, 이것이 위 표에서 카드 1개 행이 "쾌적함"이 아니라 "기술적으로 가능"으로 표시된 이유입니다.',
          },
        ],
      },

      ollamaLmStudio: {
        id: 'ollama-lm-studio',
        title: 'RTX 3090과 Ollama, LM Studio',
        content: [
          '**RTX 3090의 24GB는 Ollama와 LM Studio에 특히 중요합니다. 두 도구 모두 모델이 들어갈 경우 기본적으로 GPU 메모리에 전체를 로드하고, 들어가지 않으면 더 느린 CPU/GPU 오프로드로 전환하기 때문입니다.** 24GB를 사용할 수 있으면, 두 도구 모두 27B급 모델을 분할하지 않고 카드에서 완전히 실행할 수 있습니다.',
          '실제 초당 토큰 수는 구체적인 모델, 양자화 수준, 컨텍스트 길이, 사용 중인 백엔드 빌드(두 도구 모두 내부적으로 llama.cpp를 사용), 이미 캐시된 부분 대비 아직 처리해야 할 프롬프트의 비율, 그리고 같은 기기에서 함께 실행 중인 다른 작업에 따라 달라집니다. 두 도구 모두 공식 RTX 3090 벤치마크를 공개하지 않으므로, 다른 곳에서 보는 단일 "초당 X 토큰" 수치는 한 사람의 설정일 뿐 여러분의 설정에 대한 보장이 아님을 염두에 두십시오.',
          '실제로는: 두 도구 중 하나를 설치하고, 4비트 양자화된 27B급 모델을 불러온 뒤, 실행 중 `nvidia-smi`(또는 도구 자체의 표시)로 GPU 메모리 사용량을 확인하십시오 — 사용량이 24GB보다 여유롭게 낮다면 모델이 완전히 카드에 있으며 RTX 3090의 전체 메모리 대역폭을 얻고 있는 것입니다.',
        ],
      },

      buyUsed: {
        id: 'buy-used',
        title: '중고 구매: 결제 전 확인해야 할 사항',
        sponsoredSlot: true,
        content: [
          '**구매한다면 중고를 사십시오 — RTX 3090을 신품으로 판매하는 곳은 더 이상 없으며, 가격 이점은 중고 시장에 있습니다.** 850–1,050달러라는 가격은 구할 수 있는 가장 저렴한 24GB 카드이며, 재판매 가치도 잘 유지되어 실질적인 소유 비용을 크게 낮춰줍니다.',
          '솔직한 유의점: 이들은 5년 된 카드이며, 상당수가 채굴 또는 게이밍용으로 사용되었고, 개인 판매자로부터 보증 없이 판매됩니다. 고장 유형은 알려져 있고 점검 가능하므로 위험은 관리할 수 있지만 실재하며, 그렇기 때문에 가장 저렴한 매물보다는 반품이 가능한 판매자에게서 구매해야 합니다.',
        ],
        items: [
          '온도가 보이는 부하 테스트 사진을 요청하십시오 — 부하 상태에서 메모리 접합 온도가 약 100°C를 넘으면 서멀 패드가 말라붙었다는 신호일 수 있습니다.',
          '이 카드의 GDDR6X는 설계상 발열이 높습니다; 서멀 패드를 이미 교체한 판매자는 경고 신호가 아니라 좋은 신호입니다.',
          '24GB RTX 3090이 맞는지, RTX 3080이 아닌지 확인하십시오 — 판매글 제목은 증거가 아니므로 GPU-Z 스크린샷을 요청하십시오.',
          '구매자 보호와 반품이 가능한 플랫폼을 선호하십시오. 반품 불가 매물에서 아끼는 50달러는 5년 된 카드에 대한 위험을 감수할 가치가 없습니다.',
          '물리적으로 장착 가능한지 확인하십시오: 대부분의 설계에서 3090은 3슬롯 카드이며 750W 이상의 전원 공급장치가 필요합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'PromptQuorum은 어떠한 제휴 프로그램에도 가입되어 있지 않습니다. 아래 링크는 제휴 태그가 없으며 수수료도 발생하지 않습니다 — 현재 가격을 직접 확인할 수 있도록 제공하는 단순한 참고 링크입니다.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.ebay.com/sch/i.html?_nkw=rtx+3090+24gb',
            productName: 'NVIDIA RTX 3090 24GB (중고)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'eBay에서 중고 RTX 3090 가격 확인',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB (중고/리퍼비시)',
            productCategory: 'gpu',
            priceRange: '850-1050',
            label: 'Newegg에서 RTX 3090 재고 확인',
          },
        ],
      },

      bestVariants: {
        id: 'best-variants',
        title: '카드 선택하기: 냉각, 크기, 전원 커넥터',
        itemHeadings: true,
        content: [
          '**모든 RTX 3090은 동일한 24GB VRAM을 갖추고 있으므로, 어떤 모델이 들어가는지의 문제는 "RTX 3090"을 선택한 순간 이미 해결됩니다. 카드마다 다른 것은 소유하기에 얼마나 견딜 만한가입니다.** 특정 제조사의 쿨러 설계가 모든 매물에서 객관적으로 최고인 것은 아닙니다 — 중고 시장의 상태는 설계 자체보다 더 크게 편차가 있습니다 — 하지만 구매 전 확인할 가치가 있는 요소들은 다음과 같습니다.',
        ],
        columns: ['요소', '확인할 사항'],
        rows: [
          { 요소: '냉각 설계', '확인할 사항': '개방형 3팬 쿨러는 지속 부하에서 블로워형보다 조용합니다; 유휴 상태와 추론 상태에서의 소음 수준을 물어보십시오.' },
          { 요소: '물리적 크기', '확인할 사항': '대부분의 RTX 3090은 3슬롯이며 길이가 30cm를 넘습니다 — 구매 후가 아니라 구매 전에 케이스를 측정하십시오.' },
          { 요소: '전원 커넥터', '확인할 사항': '대부분 모델은 표준 8핀 PCIe(2개 또는 3개)를 사용합니다; 어댑터에 의존하기 전에 전원 공급장치에 충분한 네이티브 커넥터가 있는지 확인하십시오.' },
          { 요소: '보증', '확인할 사항': '이 세대의 제조사 보증은 대부분 만료되었습니다 — 판매자가 달리 명시하지 않는 한 중고 3090은 현상태 판매로 취급하십시오.' },
          { 요소: '중고 상태', '확인할 사항': '이전 채굴 사용은 제외 사유가 아닙니다(위의 구매 체크리스트 참조); 냉각이 부실한 상태에서의 과도한 오버클럭이 더 큰 위험 신호입니다.' },
          { 요소: '가격 대 위험', '확인할 사항': '반품이 불가능하다면 가장 저렴한 매물이 최선의 거래가 아닙니다 — 5년 된 카드에서는 구매자 보호를 위한 50–100달러의 추가 비용이 보통 그만한 가치가 있습니다.' },
        ],
      },

      whyRentInstead: {
        id: 'why-rent-instead',
        title: '대여가 생각보다 더 자주 더 나은 답인 이유',
        content: [
          '**대여를 지지하는 논거는 항상 더 저렴해서가 아니라, 유휴 상태의 GPU가 바쁜 GPU와 같은 비용이 든다는 점입니다.** 주말에만 사용되는 데스크톱 안의 카드는 이미 전체 구매 가격만큼의 비용을 치른 셈입니다. 대여한 GPU는 세션 사이에 아무 비용도 들지 않습니다.',
          '대여의 이유는 철학적이지 않고 구체적입니다: 초기 지출 없음, 5년 된 카드의 감가상각 위험 없음, 전원·케이스·냉각 제약 없음, 팬이 고장 나도 주말을 날릴 일 없음. 절대 구매하지 않을 카드도 대여할 수 있습니다 — 70B급 모델을 대여한 GPU 두 대로 하루 오후 동안 테스트하는 데는 몇 달러면 되지만, 중고 두 대를 구매하면 약 1,700달러가 듭니다.',
          '솔직한 반론은 대여에 실질적인 마찰이 있다는 것입니다. 다른 누군가의 기기에 데이터를 업로드해야 하고, 인스턴스를 기다려야 하며, 마켓플레이스형 공급업체에서는 작업 도중 호스트가 사라지는 경우도 가끔 있습니다. 이는 대여를 무시할 이유가 아니라, 결정이 시간당 요금만이 아니라 워크로드에 달려 있다는 이유입니다.',
        ],
      },

      cloudOptions: {
        id: 'cloud-options',
        title: 'RTX 3090 대여하기: 비용과 장소',
        sponsoredSlot: true,
        content: [
          '**Vast.ai는 시간당 약 0.12달러로 RTX 3090을 대여하는 가장 저렴한 방법이며, RunPod는 Community 등급에서 시간당 0.22달러로 더 신뢰할 수 있는 선택지입니다.** 이 차이가 전체 트레이드오프를 요약합니다: Vast.ai는 개인 소유 GPU의 마켓플레이스이므로 가격이 낮은 대신 호스트 품질이 제각각이고, RunPod는 자체 용량을 운영하므로 비용은 더 들지만 더 예측 가능하게 작동합니다.',
          '처음 시도해보는 것이라면 저렴한 등급으로도 충분합니다 — 실험에서 인스턴스가 실패해도 재시작 비용밖에 들지 않습니다. 마감이 있는 작업이나 몇 시간을 넘는 작업이라면, 시간당 추가되는 10센트가 여러분이 진짜로 원하는 것, 즉 돌아왔을 때 작업이 여전히 실행 중인 상태를 사줍니다.',
        ],
        columns: ['공급업체', '가격/시간', '적합한 용도'],
        rows: [
          { 공급업체: 'Vast.ai', '가격/시간': '0.12달러', '적합한 용도': '가장 저렴한 시간당 요금; 실험과 일시적 사용' },
          { 공급업체: 'RunPod Community', '가격/시간': '0.22달러', '적합한 용도': '약간의 프리미엄으로 예측 가능한 용량' },
          { 공급업체: 'RunPod Secure', '가격/시간': '0.50달러', '적합한 용도': '엔터프라이즈급 신뢰성과 지원' },
          { 공급업체: '8개 공급업체 중앙값', '가격/시간': '0.15달러', '적합한 용도': '본인의 손익분기점 계산에 사용할 수치' },
        ],
        items: [
          '설정 복잡성: Vast.ai 및 유사한 마켓플레이스는 호스트와 템플릿을 직접 선택해야 합니다; RunPod 등 관리형 공급업체는 Ollama나 웹 UI가 사전 설치된 원클릭 템플릿을 제공합니다.',
          '지속성: 대부분의 공급업체에서 중지된 인스턴스도 연결된 스토리지에 대해서는 계속 과금됩니다; 세션 사이에 대형 모델을 캐시로 남겨두기 전에 GPU가 일시 중지된 동안 스토리지 요금이 부과되는지 확인하십시오.',
          '최소 대여 기간: 마켓플레이스 매물은 보통 최소 기준 없이 분 단위로 과금됩니다; 일부 관리형 용량 등급은 최소 블록을 요구하므로, 작업을 확정하기 전에 해당 공급업체의 가격 페이지를 확인하십시오.',
          '지리적 가용성: 마켓플레이스 GPU는 소유자가 있는 곳 어디든 위치하므로 특정 지역이 보장되지 않습니다; 관리형 공급업체는 고정된 데이터센터 지역을 공개하며, 이는 데이터 거주지 요구 사항이 있을 때 중요합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '가격은 2026년 9월 1일 기준으로 다중 공급업체 가격표와 RunPod 자체 모델 페이지를 대조하여 확인되었습니다. 클라우드 GPU 요금은 매주 변동하므로 결정하기 전에 현재 가격을 확인하십시오.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai의 RTX 3090 GPU 대여',
            productCategory: 'cloud-gpu',
            priceRange: '시간당 0.12달러부터',
            label: 'Vast.ai에서 RTX 3090 가격 보기',
          },
          {
            url: 'https://www.runpod.io/gpu-models/rtx-3090',
            productName: 'RunPod의 RTX 3090 GPU 대여',
            productCategory: 'cloud-gpu',
            priceRange: '시간당 0.22달러부터',
            label: 'RunPod에서 RTX 3090 가격 보기',
          },
        ],
      },

      breakEven: {
        id: 'break-even',
        title: '손익분기점 계산',
        content: [
          '**시간당 0.15달러의 중앙값 대여와 비교하면, 850달러 카드는 본전을 뽑는 데 약 12,300 GPU 시간이 필요합니다 — 하루 8시간이면 약 4년, 하루 2시간이면 약 17년입니다.** 이것이 대부분의 구매 가이드가 생략하는 수치이며, 구매를 결정해야 할 수치입니다.',
          '이 계산은 카드를 운영하는 비용을 차감합니다. 콘센트 기준 450W와 2026년 미국 평균 0.18달러/kWh를 적용하면, 로컬 추론은 전기료로 시간당 약 0.08달러가 듭니다. 따라서 850달러와 시간당 0.15달러를 비교하는 것이 아니라, 실제로 절약되는 시간당 약 0.07달러와 비교하는 것입니다.',
          '가정: 850달러 카드, 시스템 소비전력 450W, 0.18달러/kWh. 본인의 전기 요금으로 대체해 보십시오 — 표의 다른 어떤 요소보다 결과를 크게 좌우하며, 0.30달러/kWh를 넘는 시장에서는 구매 논거가 대체로 사라집니다.',
        ],
        columns: ['사용량', '0.12달러/h 대비', '0.15달러/h 대비', '0.22달러/h 대비'],
        rows: [
          { 사용량: '하루 2시간', '0.12달러/h 대비': '약 30년', '0.15달러/h 대비': '약 17년', '0.22달러/h 대비': '약 8년' },
          { 사용량: '하루 4시간', '0.12달러/h 대비': '약 15년', '0.15달러/h 대비': '약 8년', '0.22달러/h 대비': '약 4년' },
          { 사용량: '하루 8시간', '0.12달러/h 대비': '약 7.5년', '0.15달러/h 대비': '약 4년', '0.22달러/h 대비': '약 2년' },
          { 사용량: '상시 가동 (24/7)', '0.12달러/h 대비': '약 2.5년', '0.15달러/h 대비': '약 1.4년', '0.22달러/h 대비': '약 8개월' },
        ],
        callouts: [
          {
            type: 'warning',
            text: '이 표는 한 가지 구체적인 측면에서 구매를 실제보다 나쁘게 보이게 합니다: 재판매를 무시하고 있습니다. 중고 RTX 3090은 5년간 가치를 유지해 왔으므로, 다시 판매하면 구매 가격의 상당 부분이 돌아오고 위의 모든 수치가 크게 줄어듭니다.',
          },
        ],
      },

      byProfile: {
        id: 'by-profile',
        title: '당신은 어느 쪽인가',
        itemHeadings: true,
        columns: ['독자 유형', '결론', '이유'],
        rows: [
          {
            '독자 유형': '주말 취미 사용자',
            결론: '대여',
            이유: '주당 몇 시간의 사용은 850달러 지출과 비교하면 손익분기점에서 수십 년 떨어져 있습니다. 1년간 대여해 보고, 매일 대여하고 있다는 것을 깨달으면 그때 구매하십시오 — 그때쯤이면 어떤 카드가 필요한지도 정확히 알게 될 것입니다.',
          },
          {
            '독자 유형': '매일 사용하는 헤비 유저',
            결론: '구매',
            이유: '하루 4시간 이상이면 카드는 몇 년 안에 본전을 뽑고, 재판매가 나머지 비용의 상당 부분을 회수해 줍니다. 더 큰 이득은 행동적인 측면입니다: 소유한 GPU에는 돌아가는 계량기가 없으므로 실험을 아낄 필요가 없어집니다.',
          },
          {
            '독자 유형': '소규모 팀 또는 스타트업',
            결론: '먼저 대여하고 나중에 구매',
            이유: '워크로드의 형태가 아직 바뀌고 있는 동안에는 대여하십시오 — 24GB가 필요한지 80GB가 필요한지 아직 모릅니다. 사용량이 안정적이고 예산을 세울 수 있을 만큼 예측 가능해지면 구매하십시오. 보통 월간 청구서가 아프기 시작하는 시점입니다.',
          },
          {
            '독자 유형': '개인정보 보호 또는 컴플라이언스 제약',
            결론: '구매',
            이유: '비용은 결정 요인이 아닙니다. 고객 데이터, 의료 기록, 규제 대상 자료를 제3자 호스트에 업로드할 수 없다면 가격과 무관하게 대여 옵션 자체가 존재하지 않으며, 3090은 이 요구 사항을 충족하는 가장 저렴한 방법입니다.',
          },
        ],
      },

      skipThisIf: {
        id: 'skip-this-if',
        title: '다음의 경우 RTX 3090을 건너뛰십시오',
        content: [
          '**모델이 16GB에 들어간다면 건너뛰십시오.** 4비트로 7B와 14B 모델을 실행하며 그보다 큰 모델은 전혀 다루지 않는다면, 더 저렴한 최신 16GB 카드가 더 조용하고 전력 소비가 훨씬 적으며 보증도 딸려 옵니다. 절대 쓰지 않을 여유를 위해 24GB의 프리미엄을 지불하는 것은 이 구매에서 가장 흔한 실수입니다.',
          '추론이 아니라 학습을 위해 구매하는 경우에도 건너뛰십시오. 단일 24GB 카드에서의 상당한 규모의 파인튜닝은 공격적인 양자화와 긴 대기 시간을 의미합니다; 몇 시간 동안 더 큰 카드를 대여하는 편이 더 빠르고 더 저렴합니다.',
          '전기료가 비싼 경우에도 건너뛰십시오. 0.30달러/kWh 이상에서는 운영 비용만으로도 더 저렴한 클라우드 요금에 근접하며, 소유의 논거가 대체로 사라집니다.',
        ],
      },

      verdict: {
        id: 'verdict',
        title: '결론',
        content: [
          '**향후 2년간 하루 약 4시간 이상 사용할 예정이거나 데이터가 건물 밖으로 나갈 수 없다면 중고 RTX 3090을 구매하십시오 — 여전히 24GB VRAM을 소유하는 가장 저렴한 방법입니다. 사용이 일시적이거나 불규칙하거나, 로컬 추론이 워크로드에 맞는지 아직 파악 중이라면 대여하십시오. 확신이 서지 않는다면 먼저 대여하십시오.**',
          '빈번한 로컬 LLM 사용과 개인정보 보호를 위해서는 구매하십시오. 가끔의 실험을 위해서는 대여하십시오. 불확실하거나 변화하는 사용 패턴이라면 먼저 대여하고, 실제 사용 시간을 알게 되는 6개월 후에 결정을 재검토하십시오. 저렴한 24GB VRAM을 구체적으로 찾는 사람에게는 상태 좋은 중고 RTX 3090이 2026년에도 여전히 매력적입니다 — 메모리 부족으로 인한 가격 상승이 이를 바꾸지는 않았고, 단지 손익분기점을 더 멀리 밀어냈을 뿐입니다. 효율성, 보증, 최신 기능이 초기 가격보다 중요한 신규 구매라면 대신 [최신 카드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026)와 비교해 보십시오.',
          '요약하면: RTX 3090의 강점은 중고 시장 가격의 24GB VRAM입니다. 비용은 노후화, 높은 전력 소비, 발열, 소음, 보증 부재입니다. 이 트레이드오프의 어느 쪽도 2026년에 바뀌지 않았습니다 — 바뀐 것은 구매 가격뿐이며, 그마저도 구매에 불리한 방향으로 움직였습니다.',
        ],
      },

      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '2026년에도 RTX 3090은 구매할 가치가 있습니까?',
            a: '지속적인 로컬 추론이라면 그렇습니다 — 여전히 850–1,050달러에 가장 저렴한 중고 24GB 카드입니다. 가볍거나 일시적인 사용이라면 아닙니다: 같은 GPU를 시간당 0.12–0.22달러에 대여하는 것이 수년간 더 저렴합니다. 결정 요인은 사양이 아니라 주당 실제 사용 시간입니다.',
          },
          {
            q: 'RTX 3090은 Ollama에 적합합니까?',
            a: '예. Ollama는 모델이 들어갈 경우 GPU 메모리에 전체를 로드하며, 24GB면 4비트 양자화된 27B급 모델을 CPU와 GPU로 나누지 않고 카드에서 완전히 실행하기에 충분합니다. 모델이 로드된 동안 `nvidia-smi`로 GPU에 완전히 상주하는지 확인하십시오.',
          },
          {
            q: 'RTX 3090은 LM Studio에 적합합니까?',
            a: '예, Ollama와 같은 이유입니다 — 두 도구 모두 llama.cpp 기반 백엔드에서 작동하며 24GB VRAM의 혜택을 동일하게 받습니다. LM Studio는 인터페이스에서 GPU 메모리 사용량을 직접 보여주므로, 모델이 부분적으로 오프로드된 것이 아니라 완전히 로드되었는지 확인하기 쉽습니다.',
          },
          {
            q: '로컬 LLM에는 RTX 3090과 RTX 4090 중 무엇이 나을까요?',
            a: '둘 다 24GB이므로 같은 모델을 실행할 수 있습니다. 4090은 눈에 띄게 더 빠르고 전력 효율도 훨씬 좋지만, 중고 가격은 약 두 배입니다. 사용하는 모델이 이미 들어간다면 3090이 더 적은 비용으로 같은 능력을 제공합니다; 생성 속도가 작업의 제약이라면 4090이 그만한 가치가 있습니다.',
          },
          {
            q: 'RTX 3090은 초당 몇 토큰을 생성합니까?',
            a: '모델 크기와 양자화에 따라 달라지며, 단일 수치는 오해를 부를 수 있습니다. 유용한 원칙은 양자화된 모델의 토큰 생성이 메모리 대역폭에 제약받는다는 것이므로, 3090의 936GB/s가 이를 예측하는 수치입니다 — 모델이 작을수록, 양자화가 강할수록 초당 더 많은 토큰이 생성됩니다.',
          },
          {
            q: 'RTX 3090 두 장으로 70B 모델을 실행할 수 있습니까?',
            a: '예. 카드 두 장은 48GB VRAM을 제공하며, 이는 시스템 RAM으로 오프로드하지 않고도 4비트 양자화된 70B급 모델을 담기에 충분합니다. 1,000W 이상의 전원 공급장치와 적합한 슬롯 두 개가 있는 메인보드를 준비하십시오 — 그리고 약 1,700달러를 지출하기 전에 먼저 듀얼 GPU 클라우드 인스턴스를 하루 오후 동안 대여해 이 구성이 필요한 작업을 수행하는지 확인해 보십시오.',
          },
          {
            q: '2026년에 중고 RTX 3090 가격이 왜 올랐습니까?',
            a: '2026년 동안 메모리 부족이 GPU 가격을 전반적으로 이전 수준보다 끌어올렸고, 24GB 카드에 대한 수요는 게이머보다 로컬에서 모델을 실행하는 사람들 사이에서 더 크게 늘었습니다. 이 카드는 봄에 600–800달러에, 9월 무렵에는 850–1,050달러에 판매되었습니다. 더 비싸진 몇 안 되는 5년 된 제품 중 하나입니다.',
          },
          {
            q: '중고 채굴용 GPU를 구매해도 안전합니까?',
            a: '점검을 거치면 대체로 안전합니다. 채굴용 카드는 일정하고 중간 정도의 부하에서 작동했으며, 이는 게이밍의 열 순환보다 완만하지만 새로운 서멀 패드가 필요한 경우가 많습니다. 메모리 접합 온도가 보이는 부하 테스트 사진을 요청하고, 반품이 가능한 판매자에게서 구매하며, 둘 다 없는 매물은 확인할 수 없는 카드로 취급하십시오.',
          },
          {
            q: 'RTX 3090에는 어떤 전원 공급장치가 필요합니까?',
            a: 'NVIDIA는 단일 카드 시스템에 750W를 규정하며, 이것이 올바른 최소치입니다. 카드 자체가 350W를 소비하며 그보다 훨씬 높은 짧은 순간적 전류 스파이크도 발생하므로, 계산상 문제가 없어 보여도 용량이 부족하거나 품질이 낮은 전원 공급장치는 부하 상태에서 꺼질 수 있습니다.',
          },
          {
            q: 'GPU를 대여하면 내 데이터가 내 기기를 벗어난다는 의미입니까?',
            a: '예 — 이것이 근본적인 트레이드오프입니다. 대여한 GPU에서 처리하는 모든 것은 여러분이 통제하지 않는 하드웨어에 업로드되며, 마켓플레이스 플랫폼에서는 그 하드웨어가 개인 소유입니다. 규제 대상, 기밀, 고객 데이터의 경우 비용과 무관하게 대여 옵션이 배제되므로, 구매를 뒷받침하는 개인정보 보호 논거는 손익분기점 계산과 전혀 무관합니다.',
          },
        ],
      },

      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[RTX 3090 가격 추적기 — 신품 및 중고 가격 이력, Best Value GPU.](https://bestvaluegpu.com/history/new-and-used-rtx-3090-price-history-and-specs/)',
          '[8개 공급업체의 RTX 3090 클라우드 가격, GetDeploying (2026년 9월 1일 업데이트).](https://getdeploying.com/gpus/nvidia-rtx-3090)',
          '[RTX 3090 GPU 대여 가격, RunPod.](https://www.runpod.io/gpu-models/rtx-3090)',
          '[중고 RTX 3090은 여전히 로컬 AI를 위한 최고의 GPU다, XDA Developers.](https://www.xda-developers.com/used-rtx-3090-still-best-for-local-ai-in-value/)',
          '[Electric Power Monthly — 주거용 평균 전기 요금, US Energy Information Administration.](https://www.eia.gov/electricity/monthly/)',
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 LLM을 위한 최고의 GPU: 완전 구매 가이드](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 모든 가격대에서 RTX 3090을 최신 카드와 비교합니다.',
          '[로컬 LLM용 중고 GPU: 최고의 가성비 선택](/ko/local-llms/used-gpus-for-local-llms) — 이 카드와 함께 RTX 3060, 3080, 4090을 다루는 더 폭넓은 중고 시장 가이드입니다.',
          '[Ollama 대 LM Studio](/ko/local-llms/ollama-vs-lm-studio) — 두 도구가 공통된 llama.cpp 백엔드를 넘어 실제로 어떻게 다른지 다룹니다.',
          '[70B 모델을 로컬에서 실행하는 가장 저렴하고 실용적인 방법](/ko/prompt-bites/cheapest-way-to-run-70b-model-locally) — 가장 저렴한 70B 구성에 RTX 3090 두 장이 어떻게 들어맞는지 다룹니다.',
          '[70B 모델에는 VRAM이 얼마나 필요한가?](/ko/prompt-bites/vram-for-70b-model) — 위의 듀얼 카드 권장 사항 뒤에 있는 VRAM 계산입니다.',
          '[로컬 LLM 비용 계산기: 구축 대 대여](/ko/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — 본인의 수치와 하드웨어로 손익분기점 계산을 실행해 보십시오.',
        ],
      },
    },
  },
}
