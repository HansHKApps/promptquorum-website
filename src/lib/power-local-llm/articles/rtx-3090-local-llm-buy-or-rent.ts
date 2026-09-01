// Power Local LLM — RTX 3090 for Local LLMs: Should You Buy One or Rent One?
// Slug: rtx-3090-local-llm-buy-or-rent
//
// Affiliate buying guide, Mode B (dual-track local vs cloud) per
// skills/affiliate-writing/SKILL.md. Outbound product links use rel="nofollow"
// (no affiliate tags joined yet) and the neutral third-party-link notice.
// EN block first; other locales render "Coming Soon" until per-market prices
// are sourced — used-GPU pricing must not be USD-converted across markets.
//
// Prices: snapshot verified 1 September 2026, two sources per figure.
//   Used RTX 3090 $750–$950 typical, eBay averages near $1,000 —
//     bestvaluegpu.com price tracker + XDA (which quoted $600–$800 in
//     March 2026, confirming the upward trend during the memory shortage).
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
    next_refresh_due: '2026-10-01',
    last_full_refresh: '2026-09-01',
    current_hardware_mentioned: ['NVIDIA RTX 3090', 'NVIDIA RTX 3090 Ti', 'NVIDIA RTX 4090', 'NVIDIA RTX 5090'],

    theme: 'Overview & Reference',
    heroImage: '/images/rtx-3090-local-llm-buy-or-rent-hero-en.webp',
    title: 'RTX 3090 for Local LLMs: Should You Buy One or Rent One?',
    seoTitle: 'RTX 3090 for Local LLMs: Buy Used or Rent? | PromptQuorum',

    intro: 'The RTX 3090 is the cheapest way to get 24 GB of VRAM under your own desk, and renting the same card in the cloud costs cents per hour. This guide works out where the line between those two options actually falls.',
    metaDescription: 'A used RTX 3090 costs $750–$950; renting one runs $0.12–$0.22/hour. Here is the break-even math on 24 GB of VRAM — and which side of it you are on.',
    publishDate: '2026-09-01',
    dateModified: '2026-09-01',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers and small teams deciding between buying a used 24 GB GPU and renting cloud GPU time for local LLM inference',
    primaryTerm: 'RTX 3090',
    targetKeywords: [
      'rtx 3090 local llm',
      'is the rtx 3090 still worth it',
      'used rtx 3090 price',
      'rtx 3090 vs cloud gpu rental',
      '24gb vram gpu for llm',
    ],

    affiliateDisclosure: true,

    leadAnswerBlock: '**Buy a used RTX 3090 if you will run it more than about four hours a day for the next two years, or if your data cannot leave your building. Rent one otherwise.** At $750–$950 used against $0.12–$0.22 per hour in the cloud, the card only pays for itself under sustained load — and in 2026 it costs more than it did in spring, which pushes the break-even further out than most buying guides admit.',

    quickAnswerTop: {
      en: {
        question: 'Is an RTX 3090 still worth buying for local LLMs?',
        answer: 'Yes, but only for sustained use or privacy-bound work. A used RTX 3090 gives you 24 GB of VRAM for $750–$950, which is still the cheapest route to running 27B-class models entirely on your own hardware. Renting the same GPU costs $0.12–$0.22 per hour, so at light use the cloud is cheaper for years.',
        bullets: [
          '24 GB VRAM, 936 GB/s bandwidth, 350 W — unchanged since 2020, still the cheapest 24 GB card',
          'Used price $750–$950; up from $600–$800 in spring 2026 because of the memory shortage',
          'Cloud rental $0.12/hr (Vast.ai) to $0.22/hr (RunPod Community); median $0.15/hr across 8 providers',
          'Break-even against a $0.15/hr rental at 2 hours a day is roughly 17 years — at 8 hours a day it is about 4',
          'Buy for privacy, latency, always-on agents and constant fine-tuning; rent for bursts and experiments',
        ],
        updatedDate: '2026-09-01',
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'RTX 3090 for Local LLMs: Should You Buy One or Rent One?',
      description: 'Break-even analysis between buying a used NVIDIA RTX 3090 and renting the same GPU from cloud providers for local LLM inference, with 2026 pricing.',
      datePublished: '2026-09-01',
      dateModified: '2026-09-01',
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
        '@id': 'https://www.promptquorum.com/power-local-llm/rtx-3090-local-llm-buy-or-rent',
      },
    },

    sections: {
      tldr: {
        id: 'tldr',
        isTldr: true,
        title: 'Key Takeaways',
        numberedItems: [
          'A used RTX 3090 costs $750–$950 and gives you 24 GB of VRAM — still the cheapest way to own that much video memory.',
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
          'Used price: $750–$950 typical, with eBay averages near $1,000 — up from $600–$800 in spring 2026.',
          'Cloud rental: $0.12/hour (Vast.ai) to $0.50/hour (RunPod Secure); median $0.15/hour across eight providers.',
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

      buyUsed: {
        id: 'buy-used',
        title: 'Buying Used: What to Check Before You Pay',
        sponsoredSlot: true,
        content: [
          '**If you buy, buy used — nobody sells the RTX 3090 new any more, and the used market is where the price advantage lives.** At $750–$950 it is the cheapest 24 GB card available, and it holds resale value well, which materially reduces the real cost of ownership.',
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
            priceRange: '750-950',
            label: 'Check used RTX 3090 prices on eBay',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3090',
            productName: 'NVIDIA RTX 3090 24GB (used/refurbished)',
            productCategory: 'gpu',
            priceRange: '750-950',
            label: 'Check RTX 3090 stock on Newegg',
          },
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

      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is the RTX 3090 still worth buying in 2026?',
            a: 'For sustained local inference, yes — it remains the cheapest 24 GB card at $750–$950 used. For light or occasional use, no: renting the same GPU at $0.12–$0.22 per hour is cheaper for years. The deciding factor is hours of actual use per week, not the specification.',
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
            a: 'A memory shortage pushed GPU prices broadly above their earlier levels during 2026, and demand for 24 GB cards rose among people running models locally rather than among gamers. The card sold for $600–$800 in spring and $750–$950 by September. It is one of the few five-year-old products that got more expensive.',
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
          '[Cheapest Practical Way to Run a 70B Model Locally](/prompt-bites/cheapest-way-to-run-70b-model-locally) — where two RTX 3090s fit into the cheapest 70B setup.',
          '[How Much VRAM for a 70B Model?](/prompt-bites/vram-for-70b-model) — the VRAM arithmetic behind the two-card recommendation above.',
          '[Local LLM Cost Calculator: Build vs Rent](/local-llms/local-llm-cost-calculator-build-vs-rent-2026) — run the break-even calculation with your own numbers and hardware.',
        ],
      },
    },
  },
}
