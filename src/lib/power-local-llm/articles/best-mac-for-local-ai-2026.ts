// Power Local LLM — Best Mac for Local AI: Mac Mini M4 Pro vs Mac Studio vs MacBook Pro
// Slug: best-mac-for-local-ai-2026
// Affiliate buying guide. Outbound product links use rel="nofollow" (no affiliate
// tags joined yet) and a neutral third-party-link notice. EN block first;
// DE/FR/JA/ZH render as "Coming Soon" until translated.
//
// Prices: May 2026 snapshot. Apple raised configured-memory pricing in 2026 on the
// same memory-chip shortage that pushed GPU prices up. Mac Studio M5 is UNRELEASED
// as of May 2026 — all M5 Mac Studio specs/prices are projected and flagged.
// Figures sourced from existing audited PromptQuorum hardware articles.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'Best Mac for Local AI 2026: Mac Mini vs Mac Studio vs MacBook Pro',
    seoTitle: 'Best Mac for Local AI 2026: Mac Mini vs Studio vs MBP',
    intro:
      'Most Mac-for-AI advice fixates on the chip name when the number that actually binds the decision is unified memory. On Apple Silicon the model lives in the same memory pool as everything else, so a 64 GB Mac Mini runs a 34B model that a faster 24 GB MacBook Pro cannot fit. This guide compares three Macs for running local LLMs — the Mac Mini M5 Pro as an always-on server, the MacBook Pro 16" M5 Max as a portable workstation, and the Mac Studio as the desktop option — on the figures that decide a purchase: unified memory, memory bandwidth, measured tokens per second, and price. One caveat on price: Apple raised configured-memory pricing in 2026 on the same memory shortage that hit GPUs, so every price here is a May 2026 snapshot. And one caveat on availability: the Mac Studio M5 is not yet released — its specs and prices below are projected and clearly flagged.',
    metaDescription:
      'Three Macs compared for local LLMs: Mac Mini M5 Pro, MacBook Pro 16" M5 Max, Mac Studio. Unified memory, tokens/sec, power draw, and May 2026 prices by model size.',
    twitterDescription:
      'Mac Mini M5 Pro vs MacBook Pro 16" M5 Max vs Mac Studio for local AI — three Macs, one decision rule: buy for unified memory, then bandwidth. May 2026 prices.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Llama 3.3 34B',
      'Llama 3.3 70B',
      'Mistral Small',
      'Qwen 3 32B',
    ],
    current_hardware_mentioned: [
      'Apple Mac Mini M5 Pro',
      'Apple MacBook Pro 16" M5 Max',
      'Apple Mac Studio M4 Max',
      'Apple Mac Studio M5 Max (unreleased)',
      'Apple M5 Pro',
      'Apple M5 Max',
    ],
    audience:
      'Buyers choosing a Mac specifically to run local LLMs, deciding between an always-on Mac Mini server, a portable MacBook Pro, and a desktop Mac Studio. Assumes familiarity with quantization and unified memory as a constraint, not with current Mac SKUs.',
    readTime: '13 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac for local AI',
    targetKeywords: [
      'best mac for local ai 2026',
      'mac mini vs mac studio local llm',
      'macbook pro m5 max local llm',
      'how much unified memory for local llm',
      'mac for running local llms',
    ],
    leadAnswerBlock:
      '**The best Mac for local AI is the one whose unified memory fits your model. A 64 GB Mac Mini M5 Pro runs 34B models, a MacBook Pro 16" M5 Max 64 GB runs 70B models portably, and a 128 GB Mac Studio is the desktop option for 70B at higher quality — though the M5 Mac Studio is not yet released.**',
    quickAnswerTop: {
      en: {
        question: 'Which Mac should I buy for running local LLMs in 2026?',
        answer:
          'Buy for unified memory, then bandwidth. A Mac Mini M5 Pro 64 GB (~$1,199) is the value pick and runs 34B models silently as an always-on server. A MacBook Pro 16" M5 Max 64 GB (~$3,499) is the portable pick and runs 70B models. A 128 GB Mac Studio is the desktop pick for 70B at Q5, but the M5 Mac Studio is unreleased — the M4 Max Mac Studio ships today as the available alternative.',
        bullets: [
          'Value / always-on server: Mac Mini M5 Pro 64 GB, ~$1,199, runs 34B models at 15-25 tok/s',
          'Portable: MacBook Pro 16" M5 Max 64 GB, ~$3,499, runs 70B Q4 at 7-11 tok/s',
          'Desktop 70B: 128 GB Mac Studio — M5 version unreleased (expected late 2026); M4 Max ships today',
          'Apple Silicon memory cannot be upgraded after purchase — buy the size you need',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Editor\'s Choice', anchor: '#editors-choice' },
      { label: 'Mac Comparison Table', anchor: '#comparison-table' },
      { label: 'Which Mac Should You Buy?', anchor: '#which-mac' },
      { label: 'Mac Mini M5 Pro: The Server', anchor: '#mac-mini' },
      { label: 'MacBook Pro 16" M5 Max: The Portable', anchor: '#macbook-pro' },
      { label: 'Mac Studio: The Desktop', anchor: '#mac-studio' },
      { label: 'How Much Unified Memory Do You Need?', anchor: '#memory-needs' },
      { label: 'Decision Flowchart', anchor: '#decision-flowchart' },
      { label: 'Where to Buy', anchor: '#where-to-buy' },
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
          '**Unified memory is the binding constraint.** On Apple Silicon the model shares one memory pool with the system — a model that does not fit in unified memory cannot run. Choose the Mac whose memory fits your target model, then optimize for bandwidth and form factor.',
          '**Memory cannot be upgraded after purchase.** Apple Silicon unified memory is soldered. Whatever you buy is permanent — size for the model you will want in two years, not just today.',
          '**Value / server pick: Mac Mini M5 Pro 64 GB (~$1,199)** — silent, 25-55 W under load, ~$26-39/year electricity, and 64 GB runs 34B models. The cheapest serious entry into Apple Silicon local AI.',
          '**Portable pick: MacBook Pro 16" M5 Max 64 GB (~$3,499)** — the only shipping M5 Max machine, 460 GB/s bandwidth, runs 70B Q4 at 7-11 tok/s. Accepts a 10-15% sustained-load thermal throttle for portability.',
          '**Desktop 70B pick: 128 GB Mac Studio** — 614 GB/s bandwidth runs 70B at Q5. The M5 Mac Studio is unreleased (expected late 2026); the M4 Max Mac Studio ships today as the available stand-in.',
          '**Bandwidth, not chip name, sets speed.** The M5 Max at 460-614 GB/s generates roughly 2x the tokens per second of the M5 Pro at 307 GB/s on the same model.',
          '**Apple Silicon trades raw speed for capacity and quiet.** A desktop RTX GPU is faster on 7B-13B models, but its 24-32 GB VRAM cannot fit a 70B model that a 128 GB Mac runs comfortably.',
          '**Power draw is low across the line.** A Mac Mini draws 25-55 W under LLM load and an M5 Max 60-100 W — versus 300-450 W for a desktop RTX card doing comparable work.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Server tier (~$999-1,399):** Mac Mini M5 Pro 64 GB — silent, always-on, runs up to 34B models.',
          '**Portable tier (~$3,499-4,499):** MacBook Pro 16" M5 Max 64-128 GB — runs 70B models on the move.',
          '**Desktop tier (~$2,000+):** Mac Studio 128 GB — runs 70B at Q5; M5 version unreleased, M4 Max ships now.',
          '**Unified memory rule of thumb at Q4_K_M:** roughly 0.6 GB per billion parameters, plus 2-4 GB for context and tooling.',
          '**Memory bandwidth:** M5 Pro 307 GB/s, M5 Max 460 GB/s (64 GB) to 614 GB/s (128 GB) — speed scales with bandwidth.',
          '**Power draw range:** Mac Mini M5 Pro 25-55 W, MacBook Pro M5 Max 60-100 W under LLM load.',
          '**2026 price reality:** Apple raised configured-memory pricing on a memory shortage — confirm current Apple Store pricing before buying.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Editor\'s Choice: Mac Mini M5 Pro 64 GB',
        sponsoredSlot: true,
        content:
          '**For most buyers choosing a Mac specifically for local AI, the Mac Mini M5 Pro with 64 GB of unified memory is the pick that balances capability, price, and running cost.** Its 64 GB clears every model up to 34B with context headroom, it runs silently and draws only 25-55 W under inference load, and at roughly $1,199 it is the cheapest serious entry into Apple Silicon local AI. It also makes an ideal always-on home or office AI server. Step up to the MacBook Pro 16" M5 Max only if you need portability or 70B models; step up to a 128 GB Mac Studio only if you need 70B at higher quality on the desktop. The M5 Mac Studio is not yet released, so buyers who want a 70B desktop today must choose the M4 Max Mac Studio or wait.',
        callouts: [
          {
            type: 'note',
            text: 'This Editor\'s Choice reflects price-to-capability only. PromptQuorum is not enrolled in any affiliate program and the links below carry no affiliate tags — they are plain reference links that earn no commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Check Mac Mini M5 Pro price on Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Check Mac Mini M5 Pro price on Amazon',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How the Three Macs Compare for Local AI in 2026',
        content:
          'Memory and bandwidth figures are Apple specifications. Inference speeds are measured 8B and 70B Q4 figures from PromptQuorum Apple Silicon testing on the M5 Pro and M5 Max; Mac Studio M5 figures are projected because that model is not yet released. Prices are a May 2026 US snapshot — Apple raised configured-memory pricing in 2026, so confirm current Apple Store pricing before buying.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For a Mac running local LLMs, unified memory decides which models you can load and memory bandwidth decides how fast they answer — buy for the first, then optimize the second.',
          },
          {
            type: 'plain-terms',
            text: 'Think of unified memory as one shared table that the model, the app, and the system all share. A higher-bandwidth chip clears the table faster, but if the model does not fit on the table at all, speed never matters. Pick the Mac whose table is big enough first.',
          },
        ],
        columns: ['Mac', 'Unified memory', 'Bandwidth', 'Speed (8B Q4)', 'Speed (70B Q4)', 'Price (May 2026)', 'Best for'],
        rows: [
          {
            'Mac': '[Mac Mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)',
            'Unified memory': '64 GB',
            'Bandwidth': '307 GB/s',
            'Speed (8B Q4)': '50-60 tok/s',
            'Speed (70B Q4)': '8-12 tok/s',
            'Price (May 2026)': '~$1,199',
            'Best for': 'Silent always-on server, 34B models',
          },
          {
            'Mac': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)',
            'Unified memory': '64 GB',
            'Bandwidth': '460 GB/s',
            'Speed (8B Q4)': '~100-110 tok/s',
            'Speed (70B Q4)': '7-11 tok/s',
            'Price (May 2026)': '~$3,499',
            'Best for': 'Portable 70B workstation',
          },
          {
            'Mac': 'MacBook Pro 16" M5 Max 128 GB',
            'Unified memory': '128 GB',
            'Bandwidth': '614 GB/s',
            'Speed (8B Q4)': '~110-120 tok/s',
            'Speed (70B Q4)': '12-16 tok/s',
            'Price (May 2026)': '~$4,499',
            'Best for': 'Portable 70B Q5, multi-model',
          },
          {
            'Mac': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)',
            'Unified memory': '128 GB',
            'Bandwidth': '~410-546 GB/s',
            'Speed (8B Q4)': 'family-level est.',
            'Speed (70B Q4)': 'family-level est.',
            'Price (May 2026)': '~$2,000+ (configured)',
            'Best for': 'Desktop 70B, available today',
          },
          {
            'Mac': 'Mac Studio M5 Max 128 GB (unreleased)',
            'Unified memory': '128 GB (projected)',
            'Bandwidth': '614 GB/s (projected)',
            'Speed (8B Q4)': 'not yet measurable',
            'Speed (70B Q4)': 'not yet measurable',
            'Price (May 2026)': 'not announced',
            'Best for': 'Expected late 2026 — not yet for sale',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'Which Mac Should You Buy?',
        content:
          '**Your largest target model and your form factor decide the Mac; your budget decides the memory tier inside it.** Find the row that matches your situation.',
        columns: ['Your situation', 'Buy this'],
        rows: [
          { 'Your situation': 'I want a silent always-on AI server for home or office', 'Buy this': '[Mac Mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)' },
          { 'Your situation': 'I run 8B-13B models and want the cheapest capable Mac', 'Buy this': 'Mac Mini M5 Pro (32-64 GB)' },
          { 'Your situation': 'I run 34B models on a desk and value low running cost', 'Buy this': 'Mac Mini M5 Pro 64 GB' },
          { 'Your situation': 'I need to run 70B models and travel with the machine', 'Buy this': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)' },
          { 'Your situation': 'I want 70B at Q5 quality and run multiple models at once', 'Buy this': 'MacBook Pro 16" M5 Max 128 GB' },
          { 'Your situation': 'I want a 70B desktop machine and want to buy today', 'Buy this': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)' },
          { 'Your situation': 'I want the M5 Mac Studio specifically', 'Buy this': 'Wait — expected late 2026, not yet released' },
          { 'Your situation': 'I am unsure and want the safest first Mac for local AI', 'Buy this': 'Mac Mini M5 Pro 64 GB — upgrade later if you outgrow it' },
        ],
      },
      macMini: {
        id: 'mac-mini',
        title: 'Mac Mini M5 Pro: The Silent Always-On Server',
        content:
          '**The Mac Mini M5 Pro is the value pick and the best Mac for an always-on local AI server — silent, low-power, and able to run models up to 34B.** For most first-time Apple Silicon AI users, the 64 GB configuration is all the capability they need, and its 25-55 W draw makes 24/7 operation cheap.',
        items: [
          '**Mac Mini M5 (base, ~$599, 16 GB):** runs 7B models at Q4 only. Adequate for light single-user chat, but 16 GB is too small for a serious AI machine — skip it for AI use.',
          '**Mac Mini M5 (~$799, 32 GB):** handles models up to 13B at Q4. A reasonable entry if you only run small models, but 32 GB is outgrown quickly.',
          '**Mac Mini M5 Pro 64 GB (~$1,199):** the recommended pick. 307 GB/s bandwidth, runs 8B models at 50-60 tok/s and 34B models at 15-25 tok/s. Enough memory to run an LLM, Whisper speech-to-text, and a RAG pipeline at the same time.',
          '**Why buy this Mac:** lowest cost of entry to Apple Silicon AI, silent operation, 25-55 W power draw (~$26-39/year electricity), and a 5x5-inch footprint that fits in a closet as a server.',
          '**Why skip this Mac:** it cannot fit a 70B model and it is not portable. If 70B is your target, choose a MacBook Pro M5 Max or a 128 GB Mac Studio instead.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Buy the 64 GB M5 Pro, not the 32 GB M5. The extra memory is the difference between topping out at 13B models and comfortably running 34B models — and Apple Silicon memory cannot be added later.',
          },
          {
            type: 'note',
            text: 'The Mac Mini M5 Pro makes an excellent headless AI server: install Ollama, expose the API on the LAN, and every device in the house can use it. Running it 24/7 for a year costs less than one month of a cloud chat subscription.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Check Mac Mini M5 Pro price on Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5',
            productName: 'Apple Mac Mini M5',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Check Mac Mini M5 price on Amazon',
          },
        ],
      },
      macbookPro: {
        id: 'macbook-pro',
        title: 'MacBook Pro 16" M5 Max: The Portable 70B Workstation',
        content:
          '**The MacBook Pro 16" M5 Max is the only shipping Mac that runs 70B models, and it does so in a portable form factor.** It is the pick for buyers who need 70B-class models and want to carry the machine. The trade-off is a 10-15% thermal throttle under sustained inference and a higher price than a desktop with the same chip.',
        items: [
          '**MacBook Pro 16" M5 Max 64 GB (~$3,499):** 32-core GPU, 460 GB/s bandwidth. Runs 8B models at roughly 100-110 tok/s and Llama 3.3 70B Q4 at 7-11 tok/s. The portable entry point to 70B local AI.',
          '**MacBook Pro 16" M5 Max 128 GB (~$4,499):** 40-core GPU, 614 GB/s bandwidth. Runs 70B at Q5 (higher quality) and supports running two models at once — for example a 70B model plus a 13B model.',
          '**Why buy this Mac:** you need 70B models and portability, you want a single machine for creative work and AI, or you present and travel and cannot leave a desktop behind.',
          '**Why skip this Mac:** if the machine never leaves a desk, a Mac Studio with the same memory costs less and runs cooler; if 34B models are enough, the Mac Mini M5 Pro saves over $2,000.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The MacBook Pro 16" M5 Max throttles roughly 10-15% under sustained inference once the chassis heats up — typically after a few hours of continuous load. For 24/7 inference, a Mac Studio is the better tool; for portable bursts of 70B work, the MacBook Pro is fine.',
          },
          {
            type: 'note',
            text: 'The 64 GB and 128 GB MacBook Pro M5 Max share the same chip family. The 128 GB version buys capacity — 70B at Q5 and concurrent models — and higher bandwidth, not a different class of machine.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/macbook-pro/',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'Check MacBook Pro 16" M5 Max price on Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+16+M5+Max',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'Check MacBook Pro 16" M5 Max price on Amazon',
          },
        ],
      },
      macStudio: {
        id: 'mac-studio',
        title: 'Mac Studio: The Desktop 70B Option',
        content:
          '**The Mac Studio is the desktop pick for running 70B models — but the M5 Mac Studio is not yet released, so buyers today choose the M4 Max version or wait.** A 128 GB Mac Studio runs 70B at Q5 quality and stays quieter under sustained load than a MacBook Pro, because the desktop chassis has no laptop thermal ceiling.',
        items: [
          '**Mac Studio M4 Max 128 GB (~$2,000+ configured, available today):** the current shipping option. It runs 70B models and is the right buy if you want a 70B desktop now and do not want to wait for the M5 refresh.',
          '**Mac Studio M5 Max (UNRELEASED — expected late 2026):** Apple has not announced the M5 Mac Studio. Any M5 Mac Studio spec or price you see is a projection. A reasonable expectation, based on the M5 Max chip in the MacBook Pro, is 128 GB unified memory at roughly 614 GB/s bandwidth — but this is not confirmed and there is no price.',
          '**Why buy a Mac Studio:** you want a 70B desktop machine, you want quieter sustained operation than a MacBook Pro, or you want a shared desktop AI server with no laptop battery or thermal limits.',
          '**Why skip a Mac Studio:** if you need portability, buy the MacBook Pro M5 Max; if 34B models are enough, the Mac Mini M5 Pro is far cheaper; if you specifically want the M5 Mac Studio, you must wait until it is released.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The Mac Studio M5 is not for sale as of May 2026. Do not pay a premium expecting M5 specs — if you need a 70B desktop today, the M4 Max Mac Studio ships now and is verified to run 70B models.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-studio/',
            productName: 'Apple Mac Studio M4 Max 128GB',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Check Mac Studio price on Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M4+Max',
            productName: 'Apple Mac Studio M4 Max',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Check Mac Studio price on Amazon',
          },
        ],
      },
      memoryNeeds: {
        id: 'memory-needs',
        title: 'How Much Unified Memory Do You Need?',
        content:
          '**At Q4_K_M quantization a model needs roughly 0.6 GB of unified memory per billion parameters, plus 2-4 GB for context and tooling — and on a Mac that memory is also shared with macOS itself.** Leave headroom for the operating system: a 16 GB Mac is not a 16 GB model budget.',
        items: [
          '**8B models — 8-9 GB:** fit any Mac with 16 GB or more. A 32 GB Mac leaves comfortable headroom.',
          '**13-14B models — 11-13 GB:** need 32 GB once macOS and context overhead are counted. Mac Mini 32 GB and up.',
          '**34B models — 21-25 GB:** need 64 GB in practice. Mac Mini M5 Pro 64 GB is the value pick here.',
          '**70B models at Q4 — 39-42 GB:** need 64 GB minimum, with 64 GB tight once context is added. MacBook Pro M5 Max 64 GB is the floor.',
          '**70B models at Q5 or concurrent models — 50-70 GB+:** need 128 GB. MacBook Pro M5 Max 128 GB or a 128 GB Mac Studio.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Silicon memory is soldered and cannot be upgraded. Buy one tier above your current need: if you run 34B models today, 64 GB is the floor, not the comfortable choice. For the full method, see the unified memory guide in Related Reading.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Decision Flowchart: Pick Your Mac in Four Questions',
        content:
          '**Four questions, in order, route most buyers to one Mac.**',
        items: [
          '**1. What is the largest model you want to run?** 8-13B: Mac Mini 32-64 GB. 34B: Mac Mini M5 Pro 64 GB. 70B Q4: MacBook Pro M5 Max 64 GB. 70B Q5 or concurrent: 128 GB MacBook Pro or Mac Studio.',
          '**2. Does the machine need to move?** Yes: MacBook Pro 16" M5 Max. No: Mac Mini (up to 34B) or Mac Studio (70B).',
          '**3. Is it an always-on server?** Yes: Mac Mini M5 Pro 64 GB — silent, 25-55 W, cheapest to run 24/7. No: pick by model size above.',
          '**4. Do you need the machine today?** If you want a 70B desktop now, buy the M4 Max Mac Studio — the M5 Mac Studio is unreleased and expected only late 2026.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick a Mac for local AI by answering largest model size first, portability second, always-on server use third, and availability last.',
          },
          {
            type: 'plain-terms',
            text: 'Start with the biggest model you actually want to run and let that set the memory you need. Then decide whether it must travel, whether it runs around the clock, and whether you can wait for the M5 Mac Studio. Doing it in that order is how people avoid buying a Mac that cannot fit their model.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Where to Buy',
        content:
          '**Apple sells every configuration directly; Amazon and other retailers stock common configurations, sometimes below Apple list price.** The links below are plain product-search links; they carry no affiliate tags and earn no commission.',
        items: [
          '**Apple Store (apple.com):** the only source for every memory and storage configuration, including build-to-order. Required if you want a non-standard config.',
          '**Amazon:** stocks popular fixed configurations of the Mac Mini and MacBook Pro, sometimes discounted below Apple list. Selection of high-memory build-to-order configs is limited.',
          '**Apple refurbished:** previous-generation Macs (M4 Max Mac Studio, earlier MacBook Pros) at a discount with full warranty — a sensible option for a 70B desktop today.',
          '**B&H Photo and authorized resellers:** carry common configs and occasionally beat Apple pricing; useful for the MacBook Pro 16" M5 Max.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Apple raised configured-memory pricing in 2026 on the same memory shortage that hit GPUs. The dollar figures here are a May 2026 snapshot — open the current Apple Store listing before buying, and check whether the memory upgrade you need has moved.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/shop/buy-mac',
            productName: 'Macs for local AI (Apple Store)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Browse Macs on Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+for+local+AI',
            productName: 'Macs for local AI (Amazon)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Browse Macs on Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Buying a Mac for Local AI',
        items: [
          '**Buying for the chip name instead of unified memory.** A faster M5 Max with too little memory cannot fit your model. Confirm the model fits in unified memory with 2-4 GB of headroom first, then compare bandwidth.',
          '**Buying a 16 GB Mac for AI work.** 16 GB tops out at 7B models and is shared with macOS. For a serious AI machine, 64 GB is the practical floor.',
          '**Forgetting that Apple Silicon memory cannot be upgraded.** The memory is soldered. Underbuy and the only fix is a new Mac — size one tier above today\'s need.',
          '**Assuming the M5 Mac Studio is available.** It is unreleased as of May 2026. If a listing promises M5 Mac Studio specs, treat it as a projection — buy the M4 Max Mac Studio or wait.',
          '**Buying a MacBook Pro for a desk-bound 24/7 server.** It throttles under sustained load. For an always-on server, the Mac Mini M5 Pro or a Mac Studio runs cooler and quieter.',
          '**Overbuying for 8B models.** If 8B models cover your use case, a 128 GB Mac is wasted money. Match the memory tier to the model, not to the budget you happen to have.',
          '**Anchoring on last year\'s Apple pricing.** Apple raised configured-memory pricing in 2026 — budget against the live Apple Store price, not a remembered figure.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Apple Mac Mini Specifications](https://www.apple.com/mac-mini/specs/) — Official unified memory, chip, and power figures for the Mac Mini M5 line.',
          '[Apple MacBook Pro Specifications](https://www.apple.com/macbook-pro/specs/) — Official M5 Max unified memory, GPU core, and memory bandwidth figures.',
          '[Apple Mac Studio](https://www.apple.com/mac-studio/) — Current Mac Studio lineup and configuration options (M4 Max generation as of May 2026).',
          '[M5 Pro vs M5 Max LLM Benchmarks 2026](/local-llms/m5-pro-max-llm-benchmarks-2026) — PromptQuorum hardware testing: measured tokens-per-second for 8B and 70B models on the M5 Pro and M5 Max.',
          '[Mac Mini M5 as Local AI Server](/local-llms/mac-mini-m5-local-ai-server) — PromptQuorum testing: Mac Mini M5 Pro power draw, electricity cost, and always-on server performance.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is the cheapest Mac that can run local LLMs well?',
            a: 'The Mac Mini M5 Pro 64 GB at roughly $1,199 is the cheapest Mac that runs local LLMs well. Its 64 GB of unified memory fits every model up to 34B at Q4 quantization, it runs 8B models at 50-60 tokens per second, and it draws only 25-55 W. The 16 GB and 32 GB Mac Mini models are cheaper but outgrown quickly — 64 GB is the practical floor for serious AI use.',
          },
          {
            q: 'Is the Mac Studio M5 available yet?',
            a: 'No. As of May 2026 the M5 Mac Studio is unreleased and Apple has not announced specs or pricing. Any M5 Mac Studio figures you see are projections. If you need a 70B desktop Mac today, the M4 Max Mac Studio ships now and is verified to run 70B models; otherwise the M5 Mac Studio is expected later in 2026.',
          },
          {
            q: 'How much unified memory do I need for local LLMs on a Mac?',
            a: 'At Q4_K_M quantization, plan for roughly 0.6 GB per billion parameters plus 2-4 GB of overhead, and remember macOS shares the same pool. That means about 8-9 GB for 8B models, 21-25 GB for 34B, and 39-42 GB for 70B. A 64 GB Mac comfortably runs 34B and just fits 70B Q4; 128 GB is needed for 70B at Q5 or running multiple models.',
          },
          {
            q: 'Mac Mini or MacBook Pro for local AI?',
            a: 'Choose the Mac Mini M5 Pro if the machine stays on a desk and 34B models are your ceiling — it is far cheaper, silent, and ideal as an always-on server. Choose the MacBook Pro 16" M5 Max if you need to run 70B models or carry the machine. The MacBook Pro is the only shipping Mac that runs 70B, but it throttles under sustained load.',
          },
          {
            q: 'Can a Mac run 70B models?',
            a: 'Yes. A MacBook Pro 16" M5 Max with 64 GB runs Llama 3.3 70B Q4 at 7-11 tokens per second, and the 128 GB version runs 70B at Q5 at 8-12 tokens per second. A 128 GB Mac Studio also runs 70B comfortably. The Mac Mini M5 Pro cannot — 64 GB is too tight for 70B once macOS overhead is counted.',
          },
          {
            q: 'Is a Mac faster than an NVIDIA GPU for local LLMs?',
            a: 'No, not on raw speed for small models — a desktop RTX card generates more tokens per second on 7B-13B models. The Mac advantage is capacity and efficiency: a 128 GB Mac fits a 70B model that a 24-32 GB RTX card cannot, and it does so silently at 60-100 W versus 300-450 W. Buy a Mac for capacity, quiet, and low running cost, not for raw speed.',
          },
          {
            q: 'Can I upgrade the memory in a Mac later?',
            a: 'No. Apple Silicon unified memory is soldered to the chip package and cannot be changed after purchase. Whatever memory you buy is permanent for the life of the machine. Size for the largest model you expect to run in the next two to three years, not just today.',
          },
          {
            q: 'How much does it cost to run a Mac as an AI server?',
            a: 'Very little. A Mac Mini M5 Pro draws 25-55 W under LLM load and idles around 8 W. Running it 24/7 for a full year costs roughly $26-39 in US electricity — less than one month of a typical cloud AI subscription. That low running cost is a core reason the Mac Mini is the value pick for an always-on server.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[See the full M5 Pro vs M5 Max benchmark set](/local-llms/m5-pro-max-llm-benchmarks-2026) — measured tokens-per-second, time-to-first-token, and power draw behind the figures in this guide.',
          '[Set up a Mac Mini M5 as an always-on AI server](/local-llms/mac-mini-m5-local-ai-server) — the full server build, power-cost analysis, and 24/7 reliability testing.',
          '[Compare Apple Silicon across the whole M-series line](/local-llms/apple-silicon-local-llm-guide-2026) — how M1 through M5 Max compare on unified memory and bandwidth.',
          '[Work out how much unified memory each model size needs](/local-llms/how-much-unified-memory-for-local-llm) — the complete memory-by-model-size method behind the quick formula here.',
          '[Compare Apple Silicon against NVIDIA GPUs for local LLMs](/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — when a Mac wins on capacity and when an NVIDIA card wins on raw speed.',
        ],
      },
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'El mejor Mac para IA local 2026: Mac Mini vs Mac Studio vs MacBook Pro',
    seoTitle: 'El mejor Mac para IA local 2026: Mini vs Studio vs MBP',
    intro:
      'La mayoría de los consejos sobre Mac para IA se centran en el nombre del chip, cuando el número que realmente define la decisión es la memoria unificada. En Apple Silicon el modelo vive en el mismo pool de memoria que todo lo demás, por lo que un Mac Mini de 64 GB puede ejecutar un modelo 34B que un MacBook Pro más rápido con 24 GB no puede cargar. Esta guía compara tres Mac para ejecutar LLMs locales — el Mac Mini M5 Pro como servidor siempre activo, el MacBook Pro 16" M5 Max como estación de trabajo portátil y el Mac Studio como opción de escritorio — en las cifras que deciden una compra: memoria unificada, ancho de banda de memoria, tokens por segundo medidos y precio. Una advertencia sobre el precio: Apple subió los precios de la memoria configurada en 2026 debido a la misma escasez de memoria que afectó a las GPU, por lo que cada precio aquí es una instantánea de mayo de 2026. Y una advertencia sobre disponibilidad: el Mac Studio M5 aún no ha sido lanzado — sus especificaciones y precios a continuación son proyecciones y están claramente señalados como tales.',
    metaDescription:
      'Tres Mac comparados para LLMs locales: Mac Mini M5 Pro, MacBook Pro M5 Max y Mac Studio. Memoria unificada, tokens/s, consumo y precios 2026 por modelo.',
    twitterDescription:
      'Mac Mini M5 Pro vs MacBook Pro 16" M5 Max vs Mac Studio para IA local — tres Mac, una regla de decisión: compra por memoria unificada, luego optimiza el ancho de banda. Precios de mayo 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Llama 3.3 34B',
      'Llama 3.3 70B',
      'Mistral Small',
      'Qwen 3 32B',
    ],
    current_hardware_mentioned: [
      'Apple Mac Mini M5 Pro',
      'Apple MacBook Pro 16" M5 Max',
      'Apple Mac Studio M4 Max',
      'Apple Mac Studio M5 Max (unreleased)',
      'Apple M5 Pro',
      'Apple M5 Max',
    ],
    audience:
      'Compradores que eligen un Mac específicamente para ejecutar LLMs locales y deciden entre un servidor Mac Mini siempre activo, un MacBook Pro portátil y un Mac Studio de escritorio. Se asume familiaridad con la cuantización y con la memoria unificada como restricción, pero no con los modelos actuales de Mac.',
    readTime: '13 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac para IA local',
    targetKeywords: [
      'mejor mac para ia local 2026',
      'mac mini vs mac studio llm local',
      'macbook pro m5 max llm local',
      'cuanta memoria unificada para llm local',
      'mac para ejecutar llms locales',
    ],
    leadAnswerBlock:
      '**El mejor Mac para IA local es aquel cuya memoria unificada se ajusta a tu modelo. Un Mac Mini M5 Pro de 64 GB ejecuta modelos 34B, un MacBook Pro 16" M5 Max de 64 GB ejecuta modelos 70B de forma portátil, y un Mac Studio de 128 GB es la opción de escritorio para 70B con mayor calidad — aunque el Mac Studio M5 aún no ha sido lanzado.**',
    quickAnswerTop: {
      es: {
        question: '¿Qué Mac debo comprar para ejecutar LLMs locales en 2026?',
        answer:
          'Compra por memoria unificada, luego por ancho de banda. Un Mac Mini M5 Pro de 64 GB (~$1,199) es la opción con mejor relación precio-prestaciones y ejecuta modelos 34B silenciosamente como servidor siempre activo. Un MacBook Pro 16" M5 Max de 64 GB (~$3,499) es la opción portátil y ejecuta modelos 70B. Un Mac Studio de 128 GB es la opción de escritorio para 70B en Q5, pero el Mac Studio M5 no está disponible — el Mac Studio M4 Max se vende hoy como alternativa disponible.',
        bullets: [
          'Valor / servidor siempre activo: Mac Mini M5 Pro 64 GB, ~$1,199, ejecuta modelos 34B a 15-25 tok/s',
          'Portátil: MacBook Pro 16" M5 Max 64 GB, ~$3,499, ejecuta 70B Q4 a 7-11 tok/s',
          'Escritorio 70B: Mac Studio 128 GB — versión M5 no lanzada aún (esperada para finales de 2026); M4 Max disponible hoy',
          'La memoria de Apple Silicon no se puede actualizar después de la compra — compra el tamaño que necesitas desde el principio',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Elección del editor', anchor: '#editors-choice' },
      { label: 'Tabla comparativa de Mac', anchor: '#comparison-table' },
      { label: '¿Qué Mac deberías comprar?', anchor: '#which-mac' },
      { label: 'Mac Mini M5 Pro: El servidor', anchor: '#mac-mini' },
      { label: 'MacBook Pro 16" M5 Max: El portátil', anchor: '#macbook-pro' },
      { label: 'Mac Studio: El escritorio', anchor: '#mac-studio' },
      { label: '¿Cuánta memoria unificada necesitas?', anchor: '#memory-needs' },
      { label: 'Diagrama de decisión', anchor: '#decision-flowchart' },
      { label: 'Dónde comprar', anchor: '#where-to-buy' },
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
          '**La memoria unificada es la restricción determinante.** En Apple Silicon el modelo comparte un único pool de memoria con el sistema — un modelo que no cabe en la memoria unificada no puede ejecutarse. Elige el Mac cuya memoria se ajuste a tu modelo objetivo, luego optimiza el ancho de banda y el factor de forma.',
          '**La memoria no se puede actualizar después de la compra.** La memoria unificada de Apple Silicon está soldada. Lo que compras es permanente — dimensiona para el modelo que querrás en dos años, no solo para hoy.',
          '**Mejor relación precio-prestaciones / servidor: Mac Mini M5 Pro 64 GB (~$1,199)** — silencioso, 25-55 W bajo carga, ~$26-39/año en electricidad, y 64 GB ejecutan modelos 34B. La entrada más asequible al mundo de la IA local en Apple Silicon.',
          '**Opción portátil: MacBook Pro 16" M5 Max 64 GB (~$3,499)** — el único equipo M5 Max disponible, 460 GB/s de ancho de banda, ejecuta 70B Q4 a 7-11 tok/s. Acepta una reducción térmica del 10-15% bajo carga sostenida a cambio de portabilidad.',
          '**Escritorio 70B: Mac Studio 128 GB** — 614 GB/s de ancho de banda ejecuta 70B en Q5. El Mac Studio M5 no está lanzado (esperado para finales de 2026); el Mac Studio M4 Max se vende hoy como alternativa disponible.',
          '**El ancho de banda, no el nombre del chip, determina la velocidad.** El M5 Max a 460-614 GB/s genera aproximadamente el doble de tokens por segundo que el M5 Pro a 307 GB/s en el mismo modelo.',
          '**Apple Silicon cambia velocidad bruta por capacidad y silencio.** Una GPU RTX de escritorio es más rápida en modelos 7B-13B, pero sus 24-32 GB de VRAM no pueden cargar un modelo 70B que un Mac de 128 GB ejecuta sin problemas.',
          '**El consumo energético es bajo en toda la gama.** Un Mac Mini consume 25-55 W bajo carga LLM y un M5 Max 60-100 W — frente a 300-450 W de una tarjeta RTX de escritorio realizando trabajo comparable.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Nivel servidor (~$999-1,399):** Mac Mini M5 Pro 64 GB — silencioso, siempre activo, ejecuta modelos de hasta 34B.',
          '**Nivel portátil (~$3,499-4,499):** MacBook Pro 16" M5 Max 64-128 GB — ejecuta modelos 70B en movimiento.',
          '**Nivel escritorio (~$2,000+):** Mac Studio 128 GB — ejecuta 70B en Q5; versión M5 no lanzada, M4 Max disponible ahora.',
          '**Regla general de memoria unificada en Q4_K_M:** aproximadamente 0.6 GB por cada mil millones de parámetros, más 2-4 GB para contexto y herramientas.',
          '**Ancho de banda de memoria:** M5 Pro 307 GB/s, M5 Max 460 GB/s (64 GB) a 614 GB/s (128 GB) — la velocidad escala con el ancho de banda.',
          '**Rango de consumo:** Mac Mini M5 Pro 25-55 W, MacBook Pro M5 Max 60-100 W bajo carga LLM.',
          '**Realidad de precios en 2026:** Apple subió los precios de la memoria configurada por la escasez de memoria — confirma el precio actual en la Apple Store antes de comprar.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Elección del editor: Mac Mini M5 Pro 64 GB',
        sponsoredSlot: true,
        content:
          '**Para la mayoría de los compradores que eligen un Mac específicamente para IA local, el Mac Mini M5 Pro con 64 GB de memoria unificada es la opción que equilibra capacidad, precio y costo operativo.** Sus 64 GB acomodan todos los modelos hasta 34B con margen de contexto, funciona en silencio y consume solo 25-55 W bajo carga de inferencia, y con aproximadamente $1,199 es la entrada más asequible al mundo de la IA local en Apple Silicon. También es un servidor de IA siempre activo ideal para el hogar o la oficina. Sube al MacBook Pro 16" M5 Max solo si necesitas portabilidad o modelos 70B; sube a un Mac Studio de 128 GB solo si necesitas 70B con mayor calidad en el escritorio. El Mac Studio M5 aún no ha sido lanzado, por lo que los compradores que quieren un escritorio 70B hoy deben elegir el Mac Studio M4 Max o esperar.',
        callouts: [
          {
            type: 'note',
            text: 'Esta elección del editor refleja únicamente la relación precio-capacidad. PromptQuorum no está inscrito en ningún programa de afiliados y los enlaces a continuación no llevan etiquetas de afiliado — son enlaces de referencia sencillos que no generan comisión alguna.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Ver precio del Mac Mini M5 Pro en Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Ver precio del Mac Mini M5 Pro en Amazon',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Cómo se comparan los tres Mac para IA local en 2026',
        content:
          'Las cifras de memoria y ancho de banda son especificaciones de Apple. Las velocidades de inferencia son valores medidos de 8B y 70B Q4 de las pruebas de Apple Silicon de PromptQuorum en el M5 Pro y el M5 Max; las cifras del Mac Studio M5 son proyecciones porque ese modelo aún no ha sido lanzado. Los precios son una instantánea de mayo de 2026 en EE. UU. — Apple subió los precios de la memoria configurada en 2026, así que confirma el precio actual en la Apple Store antes de comprar.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para un Mac que ejecuta LLMs locales, la memoria unificada decide qué modelos puedes cargar y el ancho de banda de memoria decide qué tan rápido responden — compra por el primero, luego optimiza el segundo.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en la memoria unificada como una mesa compartida que el modelo, la aplicación y el sistema utilizan juntos. Un chip con mayor ancho de banda despeja la mesa más rápido, pero si el modelo no cabe en la mesa, la velocidad nunca importa. Elige primero el Mac cuya mesa sea suficientemente grande.',
          },
        ],
        columns: ['Mac', 'Memoria unificada', 'Ancho de banda', 'Velocidad (8B Q4)', 'Velocidad (70B Q4)', 'Precio (mayo 2026)', 'Ideal para'],
        rows: [
          {
            'Mac': '[Mac Mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)',
            'Memoria unificada': '64 GB',
            'Ancho de banda': '307 GB/s',
            'Velocidad (8B Q4)': '50-60 tok/s',
            'Velocidad (70B Q4)': '8-12 tok/s',
            'Precio (mayo 2026)': '~$1,199',
            'Ideal para': 'Servidor siempre activo silencioso, modelos 34B',
          },
          {
            'Mac': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)',
            'Memoria unificada': '64 GB',
            'Ancho de banda': '460 GB/s',
            'Velocidad (8B Q4)': '~100-110 tok/s',
            'Velocidad (70B Q4)': '7-11 tok/s',
            'Precio (mayo 2026)': '~$3,499',
            'Ideal para': 'Estación de trabajo 70B portátil',
          },
          {
            'Mac': 'MacBook Pro 16" M5 Max 128 GB',
            'Memoria unificada': '128 GB',
            'Ancho de banda': '614 GB/s',
            'Velocidad (8B Q4)': '~110-120 tok/s',
            'Velocidad (70B Q4)': '12-16 tok/s',
            'Precio (mayo 2026)': '~$4,499',
            'Ideal para': '70B Q5 portátil, multi-modelo',
          },
          {
            'Mac': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)',
            'Memoria unificada': '128 GB',
            'Ancho de banda': '~410-546 GB/s',
            'Velocidad (8B Q4)': 'estimación a nivel de familia',
            'Velocidad (70B Q4)': 'estimación a nivel de familia',
            'Precio (mayo 2026)': '~$2,000+ (configurado)',
            'Ideal para': 'Escritorio 70B, disponible hoy',
          },
          {
            'Mac': 'Mac Studio M5 Max 128 GB (unreleased)',
            'Memoria unificada': '128 GB (proyectado)',
            'Ancho de banda': '614 GB/s (proyectado)',
            'Velocidad (8B Q4)': 'aún no medible',
            'Velocidad (70B Q4)': 'aún no medible',
            'Precio (mayo 2026)': 'no anunciado',
            'Ideal para': 'Esperado para finales de 2026 — aún no disponible',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: '¿Qué Mac deberías comprar?',
        content:
          '**Tu modelo objetivo más grande y tu factor de forma deciden el Mac; tu presupuesto decide el nivel de memoria dentro de él.** Encuentra la fila que coincide con tu situación.',
        columns: ['Tu situación', 'Compra este'],
        rows: [
          { 'Tu situación': 'Quiero un servidor de IA siempre activo y silencioso para casa u oficina', 'Compra este': '[Mac Mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)' },
          { 'Tu situación': 'Ejecuto modelos 8B-13B y quiero el Mac más económico capaz', 'Compra este': 'Mac Mini M5 Pro (32-64 GB)' },
          { 'Tu situación': 'Ejecuto modelos 34B en un escritorio y valoro el bajo costo operativo', 'Compra este': 'Mac Mini M5 Pro 64 GB' },
          { 'Tu situación': 'Necesito ejecutar modelos 70B y viajar con el equipo', 'Compra este': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)' },
          { 'Tu situación': 'Quiero 70B en calidad Q5 y ejecutar varios modelos a la vez', 'Compra este': 'MacBook Pro 16" M5 Max 128 GB' },
          { 'Tu situación': 'Quiero un equipo de escritorio 70B y comprar hoy', 'Compra este': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)' },
          { 'Tu situación': 'Quiero específicamente el Mac Studio M5', 'Compra este': 'Esperar — esperado para finales de 2026, aún no lanzado' },
          { 'Tu situación': 'Estoy indeciso y quiero el primer Mac más seguro para IA local', 'Compra este': 'Mac Mini M5 Pro 64 GB — actualiza después si lo superas' },
        ],
      },
      macMini: {
        id: 'mac-mini',
        title: 'Mac Mini M5 Pro: El servidor siempre activo y silencioso',
        content:
          '**El Mac Mini M5 Pro es la opción con mejor relación precio-prestaciones y el mejor Mac para un servidor de IA local siempre activo — silencioso, de bajo consumo y capaz de ejecutar modelos de hasta 34B.** Para la mayoría de los usuarios que se inician en la IA con Apple Silicon, la configuración de 64 GB tiene toda la capacidad que necesitan, y su consumo de 25-55 W hace que la operación 24/7 sea económica.',
        items: [
          '**Mac Mini M5 (base, ~$599, 16 GB):** ejecuta modelos 7B solo en Q4. Adecuado para chat ligero de un solo usuario, pero 16 GB es demasiado pequeño para un equipo de IA serio — descártalo para uso de IA.',
          '**Mac Mini M5 (~$799, 32 GB):** maneja modelos de hasta 13B en Q4. Una entrada razonable si solo ejecutas modelos pequeños, pero los 32 GB se quedan cortos rápidamente.',
          '**Mac Mini M5 Pro 64 GB (~$1,199):** la opción recomendada. 307 GB/s de ancho de banda, ejecuta modelos 8B a 50-60 tok/s y modelos 34B a 15-25 tok/s. Memoria suficiente para ejecutar un LLM, transcripción de voz con Whisper y un pipeline RAG al mismo tiempo.',
          '**Por qué comprar este Mac:** el menor costo de entrada a la IA en Apple Silicon, operación silenciosa, consumo de 25-55 W (~$26-39/año en electricidad), y una huella de 5x5 pulgadas que cabe en un armario como servidor.',
          '**Por qué descartarlo:** no puede cargar un modelo 70B y no es portátil. Si el 70B es tu objetivo, elige un MacBook Pro M5 Max o un Mac Studio de 128 GB en su lugar.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Compra el M5 Pro de 64 GB, no el M5 de 32 GB. La memoria adicional es la diferencia entre quedarte en modelos 13B y ejecutar cómodamente modelos 34B — y la memoria de Apple Silicon no se puede añadir después.',
          },
          {
            type: 'note',
            text: 'El Mac Mini M5 Pro es un excelente servidor de IA headless: instala Ollama, expone la API en la LAN y todos los dispositivos de casa pueden usarlo. Operarlo 24/7 durante un año cuesta menos que un mes de suscripción a un chat en la nube.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Ver precio del Mac Mini M5 Pro en Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5',
            productName: 'Apple Mac Mini M5',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Ver precio del Mac Mini M5 en Amazon',
          },
        ],
      },
      macbookPro: {
        id: 'macbook-pro',
        title: 'MacBook Pro 16" M5 Max: La estación de trabajo 70B portátil',
        content:
          '**El MacBook Pro 16" M5 Max es el único Mac disponible que ejecuta modelos 70B, y lo hace en un factor de forma portátil.** Es la opción para compradores que necesitan modelos de clase 70B y quieren llevar el equipo consigo. El compromiso es una reducción térmica del 10-15% bajo inferencia sostenida y un precio más alto que un equipo de escritorio con el mismo chip.',
        items: [
          '**MacBook Pro 16" M5 Max 64 GB (~$3,499):** GPU de 32 núcleos, 460 GB/s de ancho de banda. Ejecuta modelos 8B a aproximadamente 100-110 tok/s y Llama 3.3 70B Q4 a 7-11 tok/s. El punto de entrada portátil a la IA local 70B.',
          '**MacBook Pro 16" M5 Max 128 GB (~$4,499):** GPU de 40 núcleos, 614 GB/s de ancho de banda. Ejecuta 70B en Q5 (mayor calidad) y permite ejecutar dos modelos a la vez — por ejemplo un modelo 70B más un modelo 13B.',
          '**Por qué comprar este Mac:** necesitas modelos 70B y portabilidad, quieres un único equipo para trabajo creativo e IA, o viajas y presentas y no puedes dejar un equipo de escritorio.',
          '**Por qué descartarlo:** si el equipo nunca abandona el escritorio, un Mac Studio con la misma memoria cuesta menos y funciona más frío; si los modelos 34B son suficientes, el Mac Mini M5 Pro ahorra más de $2,000.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El MacBook Pro 16" M5 Max reduce su rendimiento alrededor de un 10-15% bajo inferencia sostenida una vez que la carcasa se calienta — típicamente después de varias horas de carga continua. Para inferencia 24/7, un Mac Studio es la mejor herramienta; para ráfagas portátiles de trabajo 70B, el MacBook Pro funciona bien.',
          },
          {
            type: 'note',
            text: 'El MacBook Pro M5 Max de 64 GB y el de 128 GB comparten la misma familia de chips. La versión de 128 GB compra capacidad — 70B en Q5 y modelos concurrentes — y mayor ancho de banda, no un equipo de otra clase.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/macbook-pro/',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'Ver precio del MacBook Pro 16" M5 Max en Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+16+M5+Max',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'Ver precio del MacBook Pro 16" M5 Max en Amazon',
          },
        ],
      },
      macStudio: {
        id: 'mac-studio',
        title: 'Mac Studio: La opción de escritorio para 70B',
        content:
          '**El Mac Studio es la opción de escritorio para ejecutar modelos 70B — pero el Mac Studio M5 aún no ha sido lanzado, así que los compradores de hoy eligen la versión M4 Max o esperan.** Un Mac Studio de 128 GB ejecuta 70B en calidad Q5 y permanece más silencioso bajo carga sostenida que un MacBook Pro, porque la carcasa de escritorio no tiene el límite térmico de un portátil.',
        items: [
          '**Mac Studio M4 Max 128 GB (~$2,000+ configurado, disponible hoy):** la opción actualmente disponible. Ejecuta modelos 70B y es la compra correcta si quieres un escritorio 70B ahora y no quieres esperar la actualización M5.',
          '**Mac Studio M5 Max (NO LANZADO — esperado para finales de 2026):** Apple no ha anunciado el Mac Studio M5. Cualquier especificación o precio de Mac Studio M5 que veas es una proyección. Una expectativa razonable, basada en el chip M5 Max del MacBook Pro, es 128 GB de memoria unificada a aproximadamente 614 GB/s de ancho de banda — pero esto no está confirmado y no hay precio.',
          '**Por qué comprar un Mac Studio:** quieres un equipo de escritorio 70B, quieres una operación sostenida más silenciosa que un MacBook Pro, o quieres un servidor de IA de escritorio compartido sin batería ni límites térmicos de portátil.',
          '**Por qué descartarlo:** si necesitas portabilidad, compra el MacBook Pro M5 Max; si los modelos 34B son suficientes, el Mac Mini M5 Pro es mucho más económico; si específicamente quieres el Mac Studio M5, debes esperar hasta que sea lanzado.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'El Mac Studio M5 no está a la venta a mayo de 2026. No pagues un precio premium esperando especificaciones M5 — si necesitas un escritorio 70B hoy, el Mac Studio M4 Max se vende ahora y está verificado para ejecutar modelos 70B.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-studio/',
            productName: 'Apple Mac Studio M4 Max 128GB',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Ver precio del Mac Studio en Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M4+Max',
            productName: 'Apple Mac Studio M4 Max',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Ver precio del Mac Studio en Amazon',
          },
        ],
      },
      memoryNeeds: {
        id: 'memory-needs',
        title: '¿Cuánta memoria unificada necesitas?',
        content:
          '**Con cuantización Q4_K_M un modelo necesita aproximadamente 0.6 GB de memoria unificada por cada mil millones de parámetros, más 2-4 GB para contexto y herramientas — y en un Mac esa memoria también se comparte con el propio macOS.** Deja margen para el sistema operativo: un Mac de 16 GB no es un presupuesto de modelo de 16 GB.',
        items: [
          '**Modelos 8B — 8-9 GB:** caben en cualquier Mac con 16 GB o más. Un Mac de 32 GB deja un margen cómodo.',
          '**Modelos 13-14B — 11-13 GB:** necesitan 32 GB una vez contados macOS y el overhead de contexto. Mac Mini de 32 GB en adelante.',
          '**Modelos 34B — 21-25 GB:** necesitan 64 GB en la práctica. El Mac Mini M5 Pro de 64 GB es la opción con mejor relación precio-prestaciones aquí.',
          '**Modelos 70B en Q4 — 39-42 GB:** necesitan 64 GB como mínimo, y con el contexto añadido los 64 GB quedan ajustados. El MacBook Pro M5 Max de 64 GB es el piso.',
          '**Modelos 70B en Q5 o modelos concurrentes — 50-70 GB+:** necesitan 128 GB. MacBook Pro M5 Max de 128 GB o un Mac Studio de 128 GB.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La memoria de Apple Silicon está soldada y no se puede actualizar. Compra un nivel por encima de tu necesidad actual: si ejecutas modelos 34B hoy, 64 GB es el piso, no la opción cómoda. Para el método completo, consulta la guía de memoria unificada en la sección de Lectura relacionada.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Diagrama de decisión: Elige tu Mac en cuatro preguntas',
        content:
          '**Cuatro preguntas, en orden, llevan a la mayoría de los compradores a un Mac.**',
        items: [
          '**1. ¿Cuál es el modelo más grande que quieres ejecutar?** 8-13B: Mac Mini 32-64 GB. 34B: Mac Mini M5 Pro 64 GB. 70B Q4: MacBook Pro M5 Max 64 GB. 70B Q5 o concurrente: MacBook Pro de 128 GB o Mac Studio.',
          '**2. ¿El equipo necesita moverse?** Sí: MacBook Pro 16" M5 Max. No: Mac Mini (hasta 34B) o Mac Studio (70B).',
          '**3. ¿Es un servidor siempre activo?** Sí: Mac Mini M5 Pro 64 GB — silencioso, 25-55 W, el más económico para operar 24/7. No: elige por tamaño de modelo según lo anterior.',
          '**4. ¿Necesitas el equipo hoy?** Si quieres un escritorio 70B ahora, compra el Mac Studio M4 Max — el Mac Studio M5 no está lanzado y se espera solo para finales de 2026.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige un Mac para IA local respondiendo primero el tamaño del modelo más grande, luego la portabilidad, en tercer lugar el uso como servidor siempre activo y por último la disponibilidad.',
          },
          {
            type: 'plain-terms',
            text: 'Empieza por el modelo más grande que realmente quieres ejecutar y deja que eso fije la memoria que necesitas. Luego decide si debe viajar, si funciona las 24 horas y si puedes esperar el Mac Studio M5. Hacerlo en ese orden es cómo las personas evitan comprar un Mac que no puede cargar su modelo.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Dónde comprar',
        content:
          '**Apple vende cada configuración directamente; Amazon y otros minoristas tienen configuraciones comunes, a veces por debajo del precio de lista de Apple.** Los enlaces a continuación son simples enlaces de búsqueda de productos; no llevan etiquetas de afiliado y no generan comisión.',
        items: [
          '**Apple Store (apple.com):** la única fuente para cada configuración de memoria y almacenamiento, incluidas las personalizadas. Necesaria si quieres una configuración no estándar.',
          '**Amazon:** tiene configuraciones fijas populares del Mac Mini y MacBook Pro, a veces con descuento por debajo del precio de lista de Apple. La selección de configuraciones personalizadas con mucha memoria es limitada.',
          '**Apple reacondicionado:** Mac de generaciones anteriores (Mac Studio M4 Max, MacBook Pro anteriores) a precio reducido con garantía completa — una opción sensata para un escritorio 70B hoy.',
          '**B&H Photo y distribuidores autorizados:** tienen configuraciones comunes y ocasionalmente superan el precio de Apple; útil para el MacBook Pro 16" M5 Max.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Apple subió los precios de la memoria configurada en 2026 por la misma escasez de memoria que afectó a las GPU. Las cifras en dólares aquí son una instantánea de mayo de 2026 — abre el listado actual de la Apple Store antes de comprar y comprueba si la actualización de memoria que necesitas ha cambiado de precio.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/shop/buy-mac',
            productName: 'Macs for local AI (Apple Store)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Explorar Mac en Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+for+local+AI',
            productName: 'Macs for local AI (Amazon)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Explorar Mac en Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al comprar un Mac para IA local',
        items: [
          '**Comprar por el nombre del chip en lugar de la memoria unificada.** Un M5 Max más rápido con poca memoria no puede cargar tu modelo. Confirma primero que el modelo cabe en la memoria unificada con 2-4 GB de margen, luego compara el ancho de banda.',
          '**Comprar un Mac de 16 GB para trabajo de IA.** Los 16 GB se agotan en modelos 7B y se comparten con macOS. Para un equipo de IA serio, 64 GB es el piso práctico.',
          '**Olvidar que la memoria de Apple Silicon no se puede actualizar.** La memoria está soldada. Comprar con poca memoria y la única solución es un Mac nuevo — dimensiona un nivel por encima de tu necesidad actual.',
          '**Asumir que el Mac Studio M5 está disponible.** No está lanzado a mayo de 2026. Si un anuncio promete especificaciones de Mac Studio M5, trátalo como una proyección — compra el Mac Studio M4 Max o espera.',
          '**Comprar un MacBook Pro para un servidor fijo en escritorio 24/7.** Se reduce bajo carga sostenida. Para un servidor siempre activo, el Mac Mini M5 Pro o un Mac Studio funciona más frío y silencioso.',
          '**Sobredimensionar para modelos 8B.** Si los modelos 8B cubren tu caso de uso, un Mac de 128 GB es dinero malgastado. Ajusta el nivel de memoria al modelo, no al presupuesto que tengas.',
          '**Anclar en los precios de Apple del año pasado.** Apple subió los precios de la memoria configurada en 2026 — presupuesta contra el precio actual de la Apple Store, no contra una cifra recordada.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Especificaciones Apple Mac Mini](https://www.apple.com/mac-mini/specs/) — Cifras oficiales de memoria unificada, chip y consumo de energía para la línea Mac Mini M5.',
          '[Especificaciones Apple MacBook Pro](https://www.apple.com/macbook-pro/specs/) — Cifras oficiales de memoria unificada, núcleos GPU y ancho de banda de memoria del M5 Max.',
          '[Apple Mac Studio](https://www.apple.com/mac-studio/) — Línea actual de Mac Studio y opciones de configuración (generación M4 Max a mayo de 2026).',
          '[Benchmarks LLM M5 Pro vs M5 Max 2026](/es/local-llms/m5-pro-max-llm-benchmarks-2026) — Pruebas de hardware de PromptQuorum: tokens por segundo medidos para modelos 8B y 70B en el M5 Pro y el M5 Max.',
          '[Mac Mini M5 como servidor de IA local](/es/local-llms/mac-mini-m5-local-ai-server) — Pruebas de PromptQuorum: consumo de energía del Mac Mini M5 Pro, costo de electricidad y rendimiento como servidor siempre activo.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Cuál es el Mac más económico que puede ejecutar LLMs locales correctamente?',
            a: 'El Mac Mini M5 Pro de 64 GB a aproximadamente $1,199 es el Mac más económico que ejecuta LLMs locales correctamente. Sus 64 GB de memoria unificada acomodan todos los modelos de hasta 34B con cuantización Q4, ejecuta modelos 8B a 50-60 tokens por segundo y consume solo 25-55 W. Los modelos Mac Mini de 16 GB y 32 GB son más económicos pero se quedan cortos rápidamente — 64 GB es el piso práctico para uso de IA serio.',
          },
          {
            q: '¿Ya está disponible el Mac Studio M5?',
            a: 'No. A mayo de 2026 el Mac Studio M5 no ha sido lanzado y Apple no ha anunciado especificaciones ni precios. Cualquier cifra de Mac Studio M5 que veas es una proyección. Si necesitas un Mac de escritorio 70B hoy, el Mac Studio M4 Max se vende ahora y está verificado para ejecutar modelos 70B; de lo contrario, el Mac Studio M5 se espera para más adelante en 2026.',
          },
          {
            q: '¿Cuánta memoria unificada necesito para LLMs locales en un Mac?',
            a: 'Con cuantización Q4_K_M, planifica aproximadamente 0.6 GB por cada mil millones de parámetros más 2-4 GB de overhead, y recuerda que macOS comparte el mismo pool. Eso significa aproximadamente 8-9 GB para modelos 8B, 21-25 GB para 34B y 39-42 GB para 70B. Un Mac de 64 GB ejecuta cómodamente 34B y apenas cabe el 70B Q4; se necesitan 128 GB para 70B en Q5 o para ejecutar varios modelos.',
          },
          {
            q: '¿Mac Mini o MacBook Pro para IA local?',
            a: 'Elige el Mac Mini M5 Pro si el equipo permanece en un escritorio y los modelos 34B son tu techo — es mucho más económico, silencioso e ideal como servidor siempre activo. Elige el MacBook Pro 16" M5 Max si necesitas ejecutar modelos 70B o llevar el equipo contigo. El MacBook Pro es el único Mac disponible que ejecuta 70B, pero se reduce bajo carga sostenida.',
          },
          {
            q: '¿Puede un Mac ejecutar modelos 70B?',
            a: 'Sí. Un MacBook Pro 16" M5 Max de 64 GB ejecuta Llama 3.3 70B Q4 a 7-11 tokens por segundo, y la versión de 128 GB ejecuta 70B en Q5 a 8-12 tokens por segundo. Un Mac Studio de 128 GB también ejecuta 70B cómodamente. El Mac Mini M5 Pro no puede — los 64 GB son demasiado justos para 70B una vez contado el overhead de macOS.',
          },
          {
            q: '¿Es un Mac más rápido que una GPU NVIDIA para LLMs locales?',
            a: 'No, no en velocidad bruta para modelos pequeños — una tarjeta RTX de escritorio genera más tokens por segundo en modelos 7B-13B. La ventaja del Mac es capacidad y eficiencia: un Mac de 128 GB carga un modelo 70B que una tarjeta RTX de 24-32 GB no puede, y lo hace en silencio a 60-100 W frente a 300-450 W. Compra un Mac por capacidad, silencio y bajo costo operativo, no por velocidad bruta.',
          },
          {
            q: '¿Puedo actualizar la memoria de un Mac después?',
            a: 'No. La memoria unificada de Apple Silicon está soldada al paquete del chip y no puede cambiarse después de la compra. La memoria que compras es permanente durante toda la vida del equipo. Dimensiona para el modelo más grande que esperas ejecutar en los próximos dos o tres años, no solo para hoy.',
          },
          {
            q: '¿Cuánto cuesta operar un Mac como servidor de IA?',
            a: 'Muy poco. Un Mac Mini M5 Pro consume 25-55 W bajo carga LLM y alrededor de 8 W en reposo. Operarlo 24/7 durante un año completo cuesta aproximadamente $26-39 en electricidad en EE. UU. — menos que un mes de una suscripción típica de IA en la nube. Ese bajo costo operativo es una razón central por la que el Mac Mini es la opción con mejor relación precio-prestaciones para un servidor siempre activo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Ver el conjunto completo de benchmarks M5 Pro vs M5 Max](/es/local-llms/m5-pro-max-llm-benchmarks-2026) — tokens por segundo medidos, tiempo hasta el primer token y consumo de energía detrás de las cifras de esta guía.',
          '[Configurar un Mac Mini M5 como servidor de IA siempre activo](/es/local-llms/mac-mini-m5-local-ai-server) — la construcción completa del servidor, el análisis del costo de electricidad y las pruebas de fiabilidad 24/7.',
          '[Comparar Apple Silicon en toda la línea de la serie M](/es/local-llms/apple-silicon-local-llm-guide-2026) — cómo se comparan M1 hasta M5 Max en memoria unificada y ancho de banda.',
          '[Calcular cuánta memoria unificada necesita cada tamaño de modelo](/es/local-llms/how-much-unified-memory-for-local-llm) — el método completo por tamaño de modelo detrás de la fórmula rápida aquí.',
          '[Comparar Apple Silicon contra GPU NVIDIA para LLMs locales](/es/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — cuándo un Mac gana en capacidad y cuándo una tarjeta NVIDIA gana en velocidad bruta.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'El mejor Mac para IA local 2026: Mac Mini vs Mac Studio vs MacBook Pro',
      description: 'Tres Mac comparados para LLMs locales: Mac Mini M5 Pro, MacBook Pro 16',
      url: 'https://www.promptquorum.com/es/power-local-llm/best-mac-for-local-ai-2026?lang=es',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
},
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    next_refresh_due: '2026-11-22',
    theme: 'Overview & Reference',
    title: 'Bester Mac für lokale KI 2026: Mac Mini vs. Mac Studio vs. MacBook Pro',
    seoTitle: 'Bester Mac für lokale KI 2026: Mini vs. Studio vs. MBP',
    intro:
      'Die meisten Mac-für-KI-Empfehlungen fixieren sich auf den Chipnamen, dabei ist die Zahl, die die Entscheidung tatsächlich bindet, der Unified Memory. Auf Apple Silicon liegt das Modell im selben Speicherpool wie alles andere — ein Mac Mini mit 64 GB führt daher ein 34B-Modell aus, das in ein schnelleres MacBook Pro mit 24 GB schlicht nicht passt. Dieser Leitfaden vergleicht drei Macs für den Betrieb lokaler LLMs — den Mac Mini M5 Pro als Always-on-Server, das MacBook Pro 16" M5 Max als portable Workstation und den Mac Studio als Desktop-Option — anhand der Kennzahlen, die einen Kauf entscheiden: Unified Memory, Speicherbandbreite, gemessene Tokens pro Sekunde und Preis. Ein Hinweis zum Preis: Apple hat 2026 die Preise für konfigurierten Speicher angehoben, ausgelöst durch dieselbe Speicherknappheit, die auch GPUs verteuert hat — jeder Preis hier ist eine Momentaufnahme vom Mai 2026. Und ein Hinweis zur Verfügbarkeit: Der Mac Studio M5 ist noch nicht erschienen — die unten genannten Spezifikationen und Preise sind Prognosen und klar als solche gekennzeichnet.',
    metaDescription:
      'Welcher Mac für lokale KI 2026: M5 Pro, M5 Max oder M5 Ultra? Unified Memory, Bandbreite und reale LLM-Geschwindigkeiten. Mac mini, Studio, MacBook Pro im Test.',
    twitterDescription:
      'Mac Mini M5 Pro vs. MacBook Pro 16" M5 Max vs. Mac Studio für lokale KI — drei Macs, eine Entscheidungsregel: zuerst nach Unified Memory kaufen, dann nach Bandbreite. Preise vom Mai 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Llama 3.3 34B',
      'Llama 3.3 70B',
      'Mistral Small',
      'Qwen 3 32B',
    ],
    current_hardware_mentioned: [
      'Apple Mac Mini M5 Pro',
      'Apple MacBook Pro 16" M5 Max',
      'Apple Mac Studio M4 Max',
      'Apple Mac Studio M5 Max (unreleased)',
      'Apple M5 Pro',
      'Apple M5 Max',
    ],
    audience:
      'Käuferinnen und Käufer, die gezielt einen Mac für den Betrieb lokaler LLMs auswählen und zwischen einem Always-on-Server (Mac Mini), einem portablen MacBook Pro und einem Desktop-Mac-Studio entscheiden. Vertrautheit mit Quantisierung und mit Unified Memory als limitierender Größe wird vorausgesetzt, Kenntnis der aktuellen Mac-Modellpalette nicht.',
    readTime: '13 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac für lokale KI',
    targetKeywords: [
      'bester mac für lokale ki 2026',
      'mac mini vs mac studio lokales llm',
      'macbook pro m5 max lokales llm',
      'wie viel unified memory für lokales llm',
      'mac für lokale llms',
    ],
    leadAnswerBlock:
      '**Der beste Mac für lokale KI ist der, dessen Unified Memory zu Ihrem Modell passt. Ein Mac Mini M5 Pro mit 64 GB führt 34B-Modelle aus, ein MacBook Pro 16" M5 Max mit 64 GB führt 70B-Modelle portabel aus, und ein Mac Studio mit 128 GB ist die Desktop-Option für 70B in höherer Qualität — wobei der M5-Mac-Studio noch nicht erschienen ist.**',
    quickAnswerTop: {
      de: {
        question: 'Welchen Mac sollte ich 2026 für den Betrieb lokaler LLMs kaufen?',
        answer:
          'Kaufen Sie nach Unified Memory, dann nach Bandbreite. Ein Mac Mini M5 Pro mit 64 GB (ca. 1.699 €) ist die Preis-Leistungs-Empfehlung und führt 34B-Modelle lautlos als Always-on-Server aus. Ein MacBook Pro 16" M5 Max mit 64 GB (ca. 4.179 €) ist die portable Wahl und führt 70B-Modelle aus. Ein Mac Studio mit 128 GB ist die Desktop-Wahl für 70B bei Q5, doch der M5-Mac-Studio ist noch nicht erschienen — der Mac Studio M4 Max ist heute als verfügbare Alternative lieferbar.',
        bullets: [
          'Preis-Leistung / Always-on-Server: Mac Mini M5 Pro 64 GB, ca. 1.699 €, führt 34B-Modelle mit 15-25 Tok/s aus',
          'Portabel: MacBook Pro 16" M5 Max 64 GB, ca. 4.179 €, führt 70B Q4 mit 7-11 Tok/s aus',
          'Desktop 70B: Mac Studio mit 128 GB — M5-Version noch nicht erschienen (erwartet Ende 2026); M4 Max heute lieferbar',
          'Der Speicher von Apple Silicon lässt sich nach dem Kauf nicht aufrüsten — kaufen Sie die Größe, die Sie brauchen',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Das Wichtigste in Kürze', anchor: '#key-takeaways' },
      { label: 'Kurzfakten', anchor: '#quick-facts' },
      { label: 'Empfehlung der Redaktion', anchor: '#editors-choice' },
      { label: 'Mac-Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Welchen Mac sollten Sie kaufen?', anchor: '#which-mac' },
      { label: 'Mac Mini M5 Pro: Der Server', anchor: '#mac-mini' },
      { label: 'MacBook Pro 16" M5 Max: Die portable Wahl', anchor: '#macbook-pro' },
      { label: 'Mac Studio: Der Desktop', anchor: '#mac-studio' },
      { label: 'Wie viel Unified Memory brauchen Sie?', anchor: '#memory-needs' },
      { label: 'Entscheidungsdiagramm', anchor: '#decision-flowchart' },
      { label: 'Wo kaufen', anchor: '#where-to-buy' },
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
          '**Unified Memory ist die bindende Beschränkung.** Auf Apple Silicon teilt sich das Modell einen einzigen Speicherpool mit dem System — ein Modell, das nicht in den Unified Memory passt, lässt sich nicht ausführen. Wählen Sie den Mac, dessen Speicher zu Ihrem Zielmodell passt, und optimieren Sie erst danach auf Bandbreite und Bauform.',
          '**Der Speicher lässt sich nach dem Kauf nicht aufrüsten.** Der Unified Memory von Apple Silicon ist verlötet. Was Sie kaufen, ist endgültig — dimensionieren Sie für das Modell, das Sie in zwei Jahren ausführen wollen, nicht nur für heute.',
          '**Preis-Leistungs- / Server-Empfehlung: Mac Mini M5 Pro 64 GB (ca. 1.699 €)** — lautlos, 25-55 W unter Last, rund 26-39 € Strom pro Jahr, und 64 GB führen 34B-Modelle aus. Der günstigste ernsthafte Einstieg in lokale KI auf Apple Silicon.',
          '**Portable Empfehlung: MacBook Pro 16" M5 Max 64 GB (ca. 4.179 €)** — die einzige ausgelieferte M5-Max-Maschine, 460 GB/s Bandbreite, führt 70B Q4 mit 7-11 Tok/s aus. Akzeptiert für die Portabilität eine thermische Drosselung von 10-15 % unter Dauerlast.',
          '**Desktop-70B-Empfehlung: Mac Studio mit 128 GB** — 614 GB/s Bandbreite führen 70B bei Q5 aus. Der M5-Mac-Studio ist noch nicht erschienen (erwartet Ende 2026); der Mac Studio M4 Max ist heute als verfügbare Alternative lieferbar.',
          '**Die Bandbreite, nicht der Chipname, bestimmt das Tempo.** Der M5 Max mit 460-614 GB/s erzeugt beim selben Modell rund doppelt so viele Tokens pro Sekunde wie der M5 Pro mit 307 GB/s.',
          '**Apple Silicon tauscht reine Geschwindigkeit gegen Kapazität und Ruhe.** Eine Desktop-RTX-GPU ist bei 7B-13B-Modellen schneller, aber ihre 24-32 GB VRAM fassen kein 70B-Modell, das ein Mac mit 128 GB problemlos ausführt.',
          '**Der Stromverbrauch ist über die ganze Reihe niedrig.** Ein Mac Mini zieht unter LLM-Last 25-55 W und ein M5 Max 60-100 W — gegenüber 300-450 W für eine Desktop-RTX-Karte bei vergleichbarer Arbeit.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Kurzfakten',
        items: [
          '**Server-Klasse (ca. 1.399-1.949 €):** Mac Mini M5 Pro 64 GB — lautlos, Always-on, führt Modelle bis 34B aus.',
          '**Portable Klasse (ca. 4.179-5.299 €):** MacBook Pro 16" M5 Max 64-128 GB — führt 70B-Modelle unterwegs aus.',
          '**Desktop-Klasse (ca. 2.499 €+):** Mac Studio mit 128 GB — führt 70B bei Q5 aus; M5-Version noch nicht erschienen, M4 Max jetzt lieferbar.',
          '**Faustregel für Unified Memory bei Q4_K_M:** rund 0,6 GB pro Milliarde Parameter, plus 2-4 GB für Kontext und Tooling.',
          '**Speicherbandbreite:** M5 Pro 307 GB/s, M5 Max 460 GB/s (64 GB) bis 614 GB/s (128 GB) — die Geschwindigkeit skaliert mit der Bandbreite.',
          '**Spanne des Stromverbrauchs:** Mac Mini M5 Pro 25-55 W, MacBook Pro M5 Max 60-100 W unter LLM-Last.',
          '**Preisrealität 2026:** Apple hat die Preise für konfigurierten Speicher wegen einer Speicherknappheit angehoben — prüfen Sie vor dem Kauf den aktuellen Apple-Store-Preis.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Empfehlung der Redaktion: Mac Mini M5 Pro 64 GB',
        sponsoredSlot: true,
        content:
          '**Für die meisten Käuferinnen und Käufer, die gezielt einen Mac für lokale KI wählen, ist der Mac Mini M5 Pro mit 64 GB Unified Memory die Wahl, die Leistungsfähigkeit, Preis und Betriebskosten ausbalanciert.** Seine 64 GB fassen jedes Modell bis 34B mit Kontext-Reserve, er arbeitet lautlos und zieht unter Inferenzlast nur 25-55 W, und bei rund 1.699 € ist er der günstigste ernsthafte Einstieg in lokale KI auf Apple Silicon. Er gibt zudem einen idealen Always-on-KI-Server für Zuhause oder das Büro ab. Wechseln Sie nur dann zum MacBook Pro 16" M5 Max, wenn Sie Portabilität oder 70B-Modelle brauchen; wechseln Sie nur dann zu einem Mac Studio mit 128 GB, wenn Sie 70B in höherer Qualität auf dem Desktop brauchen. Der M5-Mac-Studio ist noch nicht erschienen — wer heute einen 70B-Desktop möchte, muss den Mac Studio M4 Max wählen oder warten.',
        callouts: [
          {
            type: 'note',
            text: 'Diese Redaktionsempfehlung berücksichtigt ausschließlich das Preis-Leistungs-Verhältnis. PromptQuorum nimmt an keinem Affiliate-Programm teil, und die untenstehenden Links tragen keine Affiliate-Kennungen — es sind schlichte Referenzlinks, die keine Provision einbringen.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Mac Mini M5 Pro Preis bei Apple prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Mac Mini M5 Pro Preis bei Amazon prüfen',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie die drei Macs für lokale KI 2026 abschneiden',
        content:
          'Die Angaben zu Speicher und Bandbreite sind Apple-Spezifikationen. Die Inferenzgeschwindigkeiten sind gemessene 8B- und 70B-Q4-Werte aus PromptQuorum-Tests auf Apple Silicon mit dem M5 Pro und dem M5 Max; die Werte für den Mac Studio M5 sind Prognosen, da dieses Modell noch nicht erschienen ist. Die Preise sind eine Momentaufnahme vom Mai 2026 (Apple-Store Deutschland) — Apple hat 2026 die Preise für konfigurierten Speicher angehoben, prüfen Sie also vor dem Kauf den aktuellen Apple-Store-Preis.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Bei einem Mac für lokale LLMs entscheidet der Unified Memory, welche Modelle Sie laden können, und die Speicherbandbreite, wie schnell sie antworten — kaufen Sie nach dem Ersten und optimieren Sie das Zweite.',
          },
          {
            type: 'plain-terms',
            text: 'Stellen Sie sich den Unified Memory als einen gemeinsamen Tisch vor, den Modell, App und System zusammen nutzen. Ein Chip mit höherer Bandbreite räumt den Tisch schneller ab, aber wenn das Modell gar nicht auf den Tisch passt, spielt die Geschwindigkeit keine Rolle. Wählen Sie zuerst den Mac, dessen Tisch groß genug ist.',
          },
        ],
        columns: ['Mac', 'Unified Memory', 'Bandbreite', 'Tempo (8B Q4)', 'Tempo (70B Q4)', 'Preis (Mai 2026)', 'Am besten für'],
        rows: [
          {
            'Mac': '[Mac Mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)',
            'Unified Memory': '64 GB',
            'Bandbreite': '307 GB/s',
            'Tempo (8B Q4)': '50-60 Tok/s',
            'Tempo (70B Q4)': '8-12 Tok/s',
            'Preis (Mai 2026)': 'ca. 1.699 €',
            'Am besten für': 'Lautloser Always-on-Server, 34B-Modelle',
          },
          {
            'Mac': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)',
            'Unified Memory': '64 GB',
            'Bandbreite': '460 GB/s',
            'Tempo (8B Q4)': 'ca. 100-110 Tok/s',
            'Tempo (70B Q4)': '7-11 Tok/s',
            'Preis (Mai 2026)': 'ca. 4.179 €',
            'Am besten für': 'Portable 70B-Workstation',
          },
          {
            'Mac': 'MacBook Pro 16" M5 Max 128 GB',
            'Unified Memory': '128 GB',
            'Bandbreite': '614 GB/s',
            'Tempo (8B Q4)': 'ca. 110-120 Tok/s',
            'Tempo (70B Q4)': '12-16 Tok/s',
            'Preis (Mai 2026)': 'ca. 5.299 €',
            'Am besten für': 'Portable 70B Q5, mehrere Modelle',
          },
          {
            'Mac': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)',
            'Unified Memory': '128 GB',
            'Bandbreite': 'ca. 410-546 GB/s',
            'Tempo (8B Q4)': 'Schätzung auf Familienebene',
            'Tempo (70B Q4)': 'Schätzung auf Familienebene',
            'Preis (Mai 2026)': 'ca. 2.499 €+ (konfiguriert)',
            'Am besten für': 'Desktop-70B, heute verfügbar',
          },
          {
            'Mac': 'Mac Studio M5 Max 128 GB (unreleased)',
            'Unified Memory': '128 GB (prognostiziert)',
            'Bandbreite': '614 GB/s (prognostiziert)',
            'Tempo (8B Q4)': 'noch nicht messbar',
            'Tempo (70B Q4)': 'noch nicht messbar',
            'Preis (Mai 2026)': 'nicht angekündigt',
            'Am besten für': 'Erwartet Ende 2026 — noch nicht im Handel',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'Welchen Mac sollten Sie kaufen?',
        content:
          '**Ihr größtes Zielmodell und Ihre Bauform entscheiden über den Mac; Ihr Budget entscheidet über die Speicherklasse innerhalb davon.** Suchen Sie die Zeile, die zu Ihrer Situation passt.',
        columns: ['Ihre Situation', 'Kaufen Sie dies'],
        rows: [
          { 'Ihre Situation': 'Ich möchte einen lautlosen Always-on-KI-Server für Zuhause oder das Büro', 'Kaufen Sie dies': '[Mac Mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)' },
          { 'Ihre Situation': 'Ich nutze 8B-13B-Modelle und möchte den günstigsten leistungsfähigen Mac', 'Kaufen Sie dies': 'Mac Mini M5 Pro (32-64 GB)' },
          { 'Ihre Situation': 'Ich nutze 34B-Modelle am Schreibtisch und lege Wert auf niedrige Betriebskosten', 'Kaufen Sie dies': 'Mac Mini M5 Pro 64 GB' },
          { 'Ihre Situation': 'Ich muss 70B-Modelle ausführen und das Gerät mit mir tragen', 'Kaufen Sie dies': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)' },
          { 'Ihre Situation': 'Ich möchte 70B in Q5-Qualität und mehrere Modelle gleichzeitig betreiben', 'Kaufen Sie dies': 'MacBook Pro 16" M5 Max 128 GB' },
          { 'Ihre Situation': 'Ich möchte einen 70B-Desktop-Rechner und heute kaufen', 'Kaufen Sie dies': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)' },
          { 'Ihre Situation': 'Ich möchte gezielt den M5-Mac-Studio', 'Kaufen Sie dies': 'Warten — erwartet Ende 2026, noch nicht erschienen' },
          { 'Ihre Situation': 'Ich bin unsicher und möchte den sichersten ersten Mac für lokale KI', 'Kaufen Sie dies': 'Mac Mini M5 Pro 64 GB — später aufrüsten, falls er Ihnen zu klein wird' },
        ],
      },
      macMini: {
        id: 'mac-mini',
        title: 'Mac Mini M5 Pro: Der lautlose Always-on-Server',
        content:
          '**Der Mac Mini M5 Pro ist die Preis-Leistungs-Empfehlung und der beste Mac für einen Always-on-Server für lokale KI — lautlos, stromsparend und fähig, Modelle bis 34B auszuführen.** Für die meisten Erstanwenderinnen und Erstanwender von Apple-Silicon-KI ist die 64-GB-Konfiguration die gesamte Leistungsfähigkeit, die sie benötigen, und ihr Verbrauch von 25-55 W macht den 24/7-Betrieb günstig.',
        items: [
          '**Mac Mini M5 (Basis, ca. 899 €, 16 GB):** führt 7B-Modelle nur bei Q4 aus. Ausreichend für leichten Einzelnutzer-Chat, aber 16 GB sind für eine ernsthafte KI-Maschine zu klein — für den KI-Einsatz überspringen.',
          '**Mac Mini M5 (ca. 1.199 €, 32 GB):** bewältigt Modelle bis 13B bei Q4. Ein vertretbarer Einstieg, wenn Sie nur kleine Modelle ausführen, doch 32 GB sind schnell zu klein.',
          '**Mac Mini M5 Pro 64 GB (ca. 1.699 €):** die empfohlene Wahl. 307 GB/s Bandbreite, führt 8B-Modelle mit 50-60 Tok/s und 34B-Modelle mit 15-25 Tok/s aus. Genug Speicher, um ein LLM, Whisper-Spracherkennung und eine RAG-Pipeline gleichzeitig zu betreiben.',
          '**Warum diesen Mac kaufen:** günstigster Einstieg in Apple-Silicon-KI, lautloser Betrieb, 25-55 W Stromverbrauch (ca. 26-39 € Strom pro Jahr) und eine Stellfläche von rund 12,7 x 12,7 cm, die als Server in einen Schrank passt.',
          '**Warum diesen Mac überspringen:** Er fasst kein 70B-Modell und ist nicht portabel. Wenn 70B Ihr Ziel ist, wählen Sie stattdessen ein MacBook Pro M5 Max oder einen Mac Studio mit 128 GB.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Kaufen Sie den M5 Pro mit 64 GB, nicht den M5 mit 32 GB. Der zusätzliche Speicher ist der Unterschied zwischen einer Obergrenze bei 13B-Modellen und dem komfortablen Betrieb von 34B-Modellen — und der Speicher von Apple Silicon lässt sich später nicht ergänzen.',
          },
          {
            type: 'note',
            text: 'Der Mac Mini M5 Pro gibt einen ausgezeichneten Headless-KI-Server ab: Ollama installieren, die API im LAN bereitstellen, und jedes Gerät im Haus kann ihn nutzen. Ihn ein Jahr lang im 24/7-Betrieb laufen zu lassen kostet weniger als einen Monat eines Cloud-Chat-Abos.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Mac Mini M5 Pro Preis bei Apple prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5',
            productName: 'Apple Mac Mini M5',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Mac Mini M5 Preis bei Amazon prüfen',
          },
        ],
      },
      macbookPro: {
        id: 'macbook-pro',
        title: 'MacBook Pro 16" M5 Max: Die portable 70B-Workstation',
        content:
          '**Das MacBook Pro 16" M5 Max ist der einzige ausgelieferte Mac, der 70B-Modelle ausführt, und er tut dies in einer portablen Bauform.** Es ist die Wahl für Käuferinnen und Käufer, die Modelle der 70B-Klasse brauchen und das Gerät mit sich tragen wollen. Der Kompromiss ist eine thermische Drosselung von 10-15 % unter Dauerinferenz und ein höherer Preis als bei einem Desktop mit demselben Chip.',
        items: [
          '**MacBook Pro 16" M5 Max 64 GB (ca. 4.179 €):** 32-Core-GPU, 460 GB/s Bandbreite. Führt 8B-Modelle mit rund 100-110 Tok/s und Llama 3.3 70B Q4 mit 7-11 Tok/s aus. Der portable Einstieg in lokale 70B-KI.',
          '**MacBook Pro 16" M5 Max 128 GB (ca. 5.299 €):** 40-Core-GPU, 614 GB/s Bandbreite. Führt 70B bei Q5 (höhere Qualität) aus und unterstützt den Betrieb von zwei Modellen gleichzeitig — etwa ein 70B-Modell plus ein 13B-Modell.',
          '**Warum diesen Mac kaufen:** Sie brauchen 70B-Modelle und Portabilität, Sie möchten eine einzige Maschine für Kreativarbeit und KI, oder Sie präsentieren und reisen und können keinen Desktop zurücklassen.',
          '**Warum diesen Mac überspringen:** Wenn die Maschine den Schreibtisch nie verlässt, kostet ein Mac Studio mit demselben Speicher weniger und läuft kühler; wenn 34B-Modelle genügen, spart der Mac Mini M5 Pro über 2.000 €.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Das MacBook Pro 16" M5 Max drosselt unter Dauerinferenz um rund 10-15 %, sobald sich das Gehäuse erwärmt — typischerweise nach einigen Stunden Dauerlast. Für 24/7-Inferenz ist ein Mac Studio das bessere Werkzeug; für portable Schübe an 70B-Arbeit ist das MacBook Pro in Ordnung.',
          },
          {
            type: 'note',
            text: 'Das MacBook Pro M5 Max mit 64 GB und mit 128 GB teilen dieselbe Chip-Familie. Die 128-GB-Version kauft Kapazität — 70B bei Q5 und parallele Modelle — sowie höhere Bandbreite, keine andere Geräteklasse.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/macbook-pro/',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'MacBook Pro 16" M5 Max Preis bei Apple prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+16+M5+Max',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'MacBook Pro 16" M5 Max Preis bei Amazon prüfen',
          },
        ],
      },
      macStudio: {
        id: 'mac-studio',
        title: 'Mac Studio: Die Desktop-Option für 70B',
        content:
          '**Der Mac Studio ist die Desktop-Empfehlung für den Betrieb von 70B-Modellen — doch der M5-Mac-Studio ist noch nicht erschienen, sodass Käuferinnen und Käufer heute die M4-Max-Version wählen oder warten.** Ein Mac Studio mit 128 GB führt 70B in Q5-Qualität aus und bleibt unter Dauerlast leiser als ein MacBook Pro, weil das Desktop-Gehäuse keine Laptop-Wärmegrenze hat.',
        items: [
          '**Mac Studio M4 Max 128 GB (ca. 2.499 €+ konfiguriert, heute verfügbar):** die aktuell ausgelieferte Option. Er führt 70B-Modelle aus und ist der richtige Kauf, wenn Sie jetzt einen 70B-Desktop möchten und nicht auf die M5-Auffrischung warten wollen.',
          '**Mac Studio M5 Max (NOCH NICHT ERSCHIENEN — erwartet Ende 2026):** Apple hat den M5-Mac-Studio nicht angekündigt. Jede Spezifikation oder jeder Preis zum M5-Mac-Studio ist eine Prognose. Eine vernünftige Erwartung, gestützt auf den M5-Max-Chip im MacBook Pro, sind 128 GB Unified Memory bei rund 614 GB/s Bandbreite — doch das ist nicht bestätigt, und es gibt keinen Preis.',
          '**Warum einen Mac Studio kaufen:** Sie möchten einen 70B-Desktop-Rechner, Sie möchten einen leiseren Dauerbetrieb als bei einem MacBook Pro, oder Sie möchten einen gemeinsam genutzten Desktop-KI-Server ohne Laptop-Akku- oder Wärmegrenzen.',
          '**Warum einen Mac Studio überspringen:** Wenn Sie Portabilität brauchen, kaufen Sie das MacBook Pro M5 Max; wenn 34B-Modelle genügen, ist der Mac Mini M5 Pro weit günstiger; wenn Sie gezielt den M5-Mac-Studio möchten, müssen Sie bis zu seinem Erscheinen warten.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Der Mac Studio M5 ist Stand Mai 2026 nicht im Handel. Zahlen Sie keinen Aufpreis in Erwartung von M5-Spezifikationen — wenn Sie heute einen 70B-Desktop brauchen, ist der Mac Studio M4 Max jetzt lieferbar und nachweislich in der Lage, 70B-Modelle auszuführen.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-studio/',
            productName: 'Apple Mac Studio M4 Max 128GB',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Mac Studio Preis bei Apple prüfen',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M4+Max',
            productName: 'Apple Mac Studio M4 Max',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Mac Studio Preis bei Amazon prüfen',
          },
        ],
      },
      memoryNeeds: {
        id: 'memory-needs',
        title: 'Wie viel Unified Memory brauchen Sie?',
        content:
          '**Bei Q4_K_M-Quantisierung braucht ein Modell rund 0,6 GB Unified Memory pro Milliarde Parameter, plus 2-4 GB für Kontext und Tooling — und auf einem Mac teilt sich dieser Speicher zusätzlich mit macOS selbst.** Lassen Sie dem Betriebssystem Reserve: Ein Mac mit 16 GB ist kein Modellbudget von 16 GB.',
        items: [
          '**8B-Modelle — 8-9 GB:** passen in jeden Mac mit 16 GB oder mehr. Ein Mac mit 32 GB lässt komfortable Reserve.',
          '**13-14B-Modelle — 11-13 GB:** brauchen 32 GB, sobald macOS und der Kontext-Overhead mitgezählt werden. Mac Mini mit 32 GB und mehr.',
          '**34B-Modelle — 21-25 GB:** brauchen in der Praxis 64 GB. Der Mac Mini M5 Pro 64 GB ist hier die Preis-Leistungs-Empfehlung.',
          '**70B-Modelle bei Q4 — 39-42 GB:** brauchen mindestens 64 GB, wobei 64 GB knapp werden, sobald Kontext hinzukommt. Das MacBook Pro M5 Max 64 GB ist die Untergrenze.',
          '**70B-Modelle bei Q5 oder parallele Modelle — 50-70 GB+:** brauchen 128 GB. MacBook Pro M5 Max 128 GB oder ein Mac Studio mit 128 GB.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Der Speicher von Apple Silicon ist verlötet und lässt sich nicht aufrüsten. Kaufen Sie eine Klasse über Ihrem aktuellen Bedarf: Wenn Sie heute 34B-Modelle ausführen, sind 64 GB die Untergrenze, nicht die komfortable Wahl. Die vollständige Methode finden Sie im Unified-Memory-Leitfaden unter Weiterführende Artikel.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Entscheidungsdiagramm: Wählen Sie Ihren Mac in vier Fragen',
        content:
          '**Vier Fragen, in dieser Reihenfolge, leiten die meisten Käuferinnen und Käufer zu einem Mac.**',
        items: [
          '**1. Was ist das größte Modell, das Sie ausführen möchten?** 8-13B: Mac Mini 32-64 GB. 34B: Mac Mini M5 Pro 64 GB. 70B Q4: MacBook Pro M5 Max 64 GB. 70B Q5 oder parallel: MacBook Pro mit 128 GB oder Mac Studio.',
          '**2. Muss die Maschine sich bewegen?** Ja: MacBook Pro 16" M5 Max. Nein: Mac Mini (bis 34B) oder Mac Studio (70B).',
          '**3. Ist es ein Always-on-Server?** Ja: Mac Mini M5 Pro 64 GB — lautlos, 25-55 W, am günstigsten im 24/7-Betrieb. Nein: nach Modellgröße oben wählen.',
          '**4. Brauchen Sie die Maschine heute?** Wenn Sie jetzt einen 70B-Desktop möchten, kaufen Sie den Mac Studio M4 Max — der M5-Mac-Studio ist noch nicht erschienen und erst Ende 2026 erwartet.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Wählen Sie einen Mac für lokale KI, indem Sie zuerst die größte Modellgröße, zweitens die Portabilität, drittens den Always-on-Server-Einsatz und zuletzt die Verfügbarkeit beantworten.',
          },
          {
            type: 'plain-terms',
            text: 'Beginnen Sie mit dem größten Modell, das Sie tatsächlich ausführen wollen, und lassen Sie dies den benötigten Speicher festlegen. Entscheiden Sie dann, ob es reisen muss, ob es rund um die Uhr läuft und ob Sie auf den M5-Mac-Studio warten können. In dieser Reihenfolge vorzugehen ist der Weg, mit dem man vermeidet, einen Mac zu kaufen, in den das eigene Modell nicht passt.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Wo kaufen',
        content:
          '**Apple verkauft jede Konfiguration direkt; Amazon und andere Händler führen gängige Konfigurationen, mitunter unter dem Apple-Listenpreis.** Die untenstehenden Links sind schlichte Produktsuch-Links; sie tragen keine Affiliate-Kennungen und bringen keine Provision ein.',
        items: [
          '**Apple Store (apple.com):** die einzige Quelle für jede Speicher- und Festplattenkonfiguration, einschließlich Build-to-Order. Erforderlich, wenn Sie eine nicht standardmäßige Konfiguration wünschen.',
          '**Amazon:** führt beliebte feste Konfigurationen von Mac Mini und MacBook Pro, mitunter unter dem Apple-Listenpreis rabattiert. Die Auswahl an Build-to-Order-Konfigurationen mit viel Speicher ist begrenzt.',
          '**Apple Refurbished:** Macs der Vorgenerationen (Mac Studio M4 Max, ältere MacBook Pros) mit Rabatt und voller Garantie — eine sinnvolle Option für einen 70B-Desktop heute.',
          '**Fachhändler und autorisierte Wiederverkäufer:** führen gängige Konfigurationen und unterbieten gelegentlich den Apple-Preis; nützlich für das MacBook Pro 16" M5 Max.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Apple hat 2026 die Preise für konfigurierten Speicher angehoben, ausgelöst durch dieselbe Speicherknappheit, die GPUs verteuert hat. Die Euro-Beträge hier sind eine Momentaufnahme vom Mai 2026 — öffnen Sie vor dem Kauf das aktuelle Apple-Store-Angebot und prüfen Sie, ob sich das benötigte Speicher-Upgrade verschoben hat.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/shop/buy-mac',
            productName: 'Macs for local AI (Apple Store)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Macs bei Apple durchsuchen',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+for+local+AI',
            productName: 'Macs for local AI (Amazon)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Macs bei Amazon durchsuchen',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Kauf eines Macs für lokale KI',
        items: [
          '**Nach dem Chipnamen statt nach Unified Memory kaufen.** Ein schnellerer M5 Max mit zu wenig Speicher fasst Ihr Modell nicht. Bestätigen Sie zuerst, dass das Modell mit 2-4 GB Reserve in den Unified Memory passt, und vergleichen Sie erst dann die Bandbreite.',
          '**Einen Mac mit 16 GB für KI-Arbeit kaufen.** 16 GB enden bei 7B-Modellen und werden mit macOS geteilt. Für eine ernsthafte KI-Maschine sind 64 GB die praktische Untergrenze.',
          '**Vergessen, dass sich der Speicher von Apple Silicon nicht aufrüsten lässt.** Der Speicher ist verlötet. Wer zu klein kauft, dem bleibt als einzige Lösung ein neuer Mac — dimensionieren Sie eine Klasse über dem heutigen Bedarf.',
          '**Annehmen, dass der M5-Mac-Studio verfügbar ist.** Er ist Stand Mai 2026 nicht erschienen. Wenn ein Angebot M5-Mac-Studio-Spezifikationen verspricht, behandeln Sie es als Prognose — kaufen Sie den Mac Studio M4 Max oder warten Sie.',
          '**Ein MacBook Pro für einen schreibtischgebundenen 24/7-Server kaufen.** Es drosselt unter Dauerlast. Für einen Always-on-Server laufen der Mac Mini M5 Pro oder ein Mac Studio kühler und leiser.',
          '**Für 8B-Modelle überdimensionieren.** Wenn 8B-Modelle Ihren Anwendungsfall abdecken, ist ein Mac mit 128 GB verschwendetes Geld. Passen Sie die Speicherklasse an das Modell an, nicht an das gerade verfügbare Budget.',
          '**Sich an Apples Preisen aus dem Vorjahr orientieren.** Apple hat 2026 die Preise für konfigurierten Speicher angehoben — budgetieren Sie gegen den aktuellen Apple-Store-Preis, nicht gegen eine erinnerte Zahl.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Apple Mac Mini Technische Daten](https://www.apple.com/mac-mini/specs/) — Offizielle Angaben zu Unified Memory, Chip und Stromverbrauch der Mac-Mini-M5-Reihe.',
          '[Apple MacBook Pro Technische Daten](https://www.apple.com/macbook-pro/specs/) — Offizielle Angaben zu Unified Memory, GPU-Kernen und Speicherbandbreite des M5 Max.',
          '[Apple Mac Studio](https://www.apple.com/mac-studio/) — Aktuelle Mac-Studio-Palette und Konfigurationsoptionen (M4-Max-Generation Stand Mai 2026).',
          '[M5 Pro vs. M5 Max LLM-Benchmarks 2026](/de/local-llms/m5-pro-max-llm-benchmarks-2026) — PromptQuorum-Hardwaretests: gemessene Tokens pro Sekunde für 8B- und 70B-Modelle auf dem M5 Pro und dem M5 Max.',
          '[Mac Mini M5 als Server für lokale KI](/de/local-llms/mac-mini-m5-local-ai-server) — PromptQuorum-Tests: Stromverbrauch, Stromkosten und Always-on-Server-Leistung des Mac Mini M5 Pro.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Was ist der günstigste Mac, der lokale LLMs gut ausführt?',
            a: 'Der Mac Mini M5 Pro 64 GB für rund 1.699 € ist der günstigste Mac, der lokale LLMs gut ausführt. Seine 64 GB Unified Memory fassen jedes Modell bis 34B bei Q4-Quantisierung, er führt 8B-Modelle mit 50-60 Tokens pro Sekunde aus und zieht nur 25-55 W. Die Mac-Mini-Modelle mit 16 GB und 32 GB sind günstiger, werden aber schnell zu klein — 64 GB sind die praktische Untergrenze für ernsthaften KI-Einsatz.',
          },
          {
            q: 'Ist der Mac Studio M5 schon verfügbar?',
            a: 'Nein. Stand Mai 2026 ist der M5-Mac-Studio nicht erschienen, und Apple hat weder Spezifikationen noch Preise angekündigt. Alle Angaben zum M5-Mac-Studio, die Sie sehen, sind Prognosen. Wenn Sie heute einen 70B-Desktop-Mac brauchen, ist der Mac Studio M4 Max jetzt lieferbar und nachweislich in der Lage, 70B-Modelle auszuführen; andernfalls wird der M5-Mac-Studio später im Jahr 2026 erwartet.',
          },
          {
            q: 'Wie viel Unified Memory brauche ich für lokale LLMs auf einem Mac?',
            a: 'Bei Q4_K_M-Quantisierung planen Sie rund 0,6 GB pro Milliarde Parameter plus 2-4 GB Overhead ein und bedenken, dass macOS denselben Pool teilt. Das bedeutet etwa 8-9 GB für 8B-Modelle, 21-25 GB für 34B und 39-42 GB für 70B. Ein Mac mit 64 GB führt 34B komfortabel aus und fasst 70B Q4 gerade so; für 70B bei Q5 oder den Betrieb mehrerer Modelle sind 128 GB nötig.',
          },
          {
            q: 'Mac Mini oder MacBook Pro für lokale KI?',
            a: 'Wählen Sie den Mac Mini M5 Pro, wenn die Maschine am Schreibtisch bleibt und 34B-Modelle Ihre Obergrenze sind — er ist weit günstiger, lautlos und ideal als Always-on-Server. Wählen Sie das MacBook Pro 16" M5 Max, wenn Sie 70B-Modelle ausführen oder das Gerät tragen müssen. Das MacBook Pro ist der einzige ausgelieferte Mac, der 70B ausführt, aber es drosselt unter Dauerlast.',
          },
          {
            q: 'Kann ein Mac 70B-Modelle ausführen?',
            a: 'Ja. Ein MacBook Pro 16" M5 Max mit 64 GB führt Llama 3.3 70B Q4 mit 7-11 Tokens pro Sekunde aus, und die 128-GB-Version führt 70B bei Q5 mit 8-12 Tokens pro Sekunde aus. Ein Mac Studio mit 128 GB führt 70B ebenfalls komfortabel aus. Der Mac Mini M5 Pro kann das nicht — 64 GB sind für 70B zu knapp, sobald der macOS-Overhead mitgezählt wird.',
          },
          {
            q: 'Ist ein Mac schneller als eine NVIDIA-GPU für lokale LLMs?',
            a: 'Nein, nicht bei der reinen Geschwindigkeit für kleine Modelle — eine Desktop-RTX-Karte erzeugt bei 7B-13B-Modellen mehr Tokens pro Sekunde. Der Vorteil des Macs ist Kapazität und Effizienz: Ein Mac mit 128 GB fasst ein 70B-Modell, das eine RTX-Karte mit 24-32 GB nicht fasst, und tut dies lautlos bei 60-100 W gegenüber 300-450 W. Kaufen Sie einen Mac für Kapazität, Ruhe und niedrige Betriebskosten, nicht für reine Geschwindigkeit.',
          },
          {
            q: 'Kann ich den Speicher in einem Mac später aufrüsten?',
            a: 'Nein. Der Unified Memory von Apple Silicon ist mit dem Chip-Package verlötet und lässt sich nach dem Kauf nicht ändern. Welcher Speicher auch immer verbaut ist, er ist für die Lebensdauer der Maschine endgültig. Dimensionieren Sie für das größte Modell, das Sie in den nächsten zwei bis drei Jahren ausführen erwarten, nicht nur für heute.',
          },
          {
            q: 'Wie viel kostet der Betrieb eines Macs als KI-Server?',
            a: 'Sehr wenig. Ein Mac Mini M5 Pro zieht unter LLM-Last 25-55 W und im Leerlauf rund 8 W. Ihn ein volles Jahr im 24/7-Betrieb laufen zu lassen kostet bei deutschen Strompreisen rund 26-39 € — weniger als einen Monat eines typischen Cloud-KI-Abos. Diese niedrigen Betriebskosten sind ein Kerngrund, warum der Mac Mini die Preis-Leistungs-Empfehlung für einen Always-on-Server ist.',
          },
          {
            q: 'Erfüllt lokale KI auf einem Mac die Anforderungen der DSGVO an den Datenstandort?',
            a: 'Ja, in einer entscheidenden Hinsicht. Wenn ein LLM lokal auf einem Mac läuft, verlassen Prompts, Dokumente und Ausgaben das Gerät nicht — es findet keine Übermittlung an einen Cloud-Anbieter und keine Drittlandübermittlung statt. Damit entfällt die rechtliche Komplexität rund um Art. 44 ff. DSGVO und Standardvertragsklauseln, und personenbezogene Daten bleiben physisch im eigenen Verantwortungsbereich. Ein Mac Mini M5 Pro als Headless-Server hält die Verarbeitung vollständig im eigenen Netz, was die Erfüllung von Pflichten zur Datenresidenz und die Auftragsverarbeitungs-Dokumentation deutlich vereinfacht. Die übrigen DSGVO-Pflichten — Rechtsgrundlage, Löschkonzept, Betroffenenrechte — bleiben davon unberührt; lokale Inferenz löst den Aspekt der Datenübermittlung, nicht den gesamten Datenschutz.',
          },
          {
            q: 'Ist ein Mac eine sinnvolle Lokale-KI-Maschine für den deutschen Mittelstand?',
            a: 'Für viele mittelständische Unternehmen ja. Ein Mac Mini M5 Pro 64 GB für rund 1.699 € ist eine einmalige Investition, die einen Always-on-KI-Server für ein ganzes Team bereitstellt — installiert man Ollama und stellt die API im Firmennetz bereit, nutzen alle Arbeitsplätze 34B-Modelle ohne laufende Pro-Nutzer-Lizenzkosten. Bei rund 26-39 € Strom pro Jahr und lautlosem Betrieb passt das Gerät in jedes Büro und benötigt kein Rechenzentrum. Für den Mittelstand sind die ausschlaggebenden Vorteile die kalkulierbaren Gesamtkosten und die Tatsache, dass sensible Geschäfts- und Kundendaten das Haus nicht verlassen. Erst wenn 70B-Modelle oder hohe Parallellast gefragt sind, lohnt der Schritt zu einem Mac Studio mit 128 GB.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Den vollständigen M5 Pro vs. M5 Max Benchmark-Satz ansehen](/de/local-llms/m5-pro-max-llm-benchmarks-2026) — gemessene Tokens pro Sekunde, Zeit bis zum ersten Token und Stromverbrauch hinter den Zahlen in diesem Leitfaden.',
          '[Einen Mac Mini M5 als Always-on-KI-Server einrichten](/de/local-llms/mac-mini-m5-local-ai-server) — der vollständige Server-Aufbau, die Stromkostenanalyse und die 24/7-Zuverlässigkeitstests.',
          '[Apple Silicon über die gesamte M-Serie vergleichen](/de/local-llms/apple-silicon-local-llm-guide-2026) — wie M1 bis M5 Max bei Unified Memory und Bandbreite abschneiden.',
          '[Ausrechnen, wie viel Unified Memory jede Modellgröße braucht](/de/local-llms/how-much-unified-memory-for-local-llm) — die vollständige Methode pro Modellgröße hinter der schnellen Formel hier.',
          '[Apple Silicon gegen NVIDIA-GPUs für lokale LLMs vergleichen](/de/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — wann ein Mac bei Kapazität gewinnt und wann eine NVIDIA-Karte bei reiner Geschwindigkeit gewinnt.',
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
    title: 'Meilleur Mac pour l\'IA locale 2026 : Mac mini vs Mac Studio vs MacBook Pro',
    seoTitle: 'Meilleur Mac pour l\'IA locale 2026 : mini vs Studio vs MBP',
    intro:
      'La plupart des conseils sur les Mac pour l\'IA se fixent sur le nom de la puce, alors que le chiffre qui détermine réellement le choix est la mémoire unifiée. Sur Apple Silicon, le modèle réside dans le même pool mémoire que tout le reste : un Mac mini de 64 Go fait donc tourner un modèle 34B qu\'un MacBook Pro de 24 Go, pourtant plus rapide, ne peut pas charger. Ce guide compare trois Mac pour exécuter des LLM en local — le Mac mini M5 Pro comme serveur toujours actif, le MacBook Pro 16" M5 Max comme station de travail portable et le Mac Studio comme option de bureau — sur les chiffres qui décident d\'un achat : mémoire unifiée, bande passante mémoire, tokens par seconde mesurés et prix. Une réserve sur le prix : Apple a relevé en 2026 le tarif de la mémoire configurée, sous l\'effet de la même pénurie de mémoire qui a frappé les GPU ; chaque prix indiqué ici est un relevé de mai 2026. Et une réserve sur la disponibilité : le Mac Studio M5 n\'est pas encore sorti — ses spécifications et ses prix ci-dessous sont des projections clairement signalées.',
    metaDescription:
      'Quel Mac pour l\'IA locale 2026 : M5 Pro, M5 Max ou M5 Ultra ? Mémoire unifiée, bande passante et vitesses LLM réelles. Mac mini, Studio et MacBook Pro testés.',
    twitterDescription:
      'Mac mini M5 Pro vs MacBook Pro 16" M5 Max vs Mac Studio pour l\'IA locale — trois Mac, une règle : acheter selon la mémoire unifiée, puis la bande passante. Prix de mai 2026.',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Llama 3.3 34B',
      'Llama 3.3 70B',
      'Mistral Small',
      'Qwen 3 32B',
    ],
    current_hardware_mentioned: [
      'Apple Mac Mini M5 Pro',
      'Apple MacBook Pro 16" M5 Max',
      'Apple Mac Studio M4 Max',
      'Apple Mac Studio M5 Max (unreleased)',
      'Apple M5 Pro',
      'Apple M5 Max',
    ],
    audience:
      'Acheteurs choisissant un Mac spécifiquement pour exécuter des LLM en local, qui hésitent entre un serveur Mac mini toujours actif, un MacBook Pro portable et un Mac Studio de bureau. Le guide suppose une familiarité avec la quantification et avec la mémoire unifiée comme contrainte, mais pas avec la gamme Mac actuelle.',
    readTime: '13 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Mac pour l\'IA locale',
    targetKeywords: [
      'meilleur mac pour ia locale 2026',
      'mac mini vs mac studio llm local',
      'macbook pro m5 max llm local',
      'combien de mémoire unifiée pour llm local',
      'mac pour exécuter llm en local',
    ],
    leadAnswerBlock:
      '**Le meilleur Mac pour l\'IA locale est celui dont la mémoire unifiée correspond à votre modèle. Un Mac mini M5 Pro de 64 Go fait tourner les modèles 34B, un MacBook Pro 16" M5 Max de 64 Go exécute les modèles 70B en mobilité, et un Mac Studio de 128 Go est l\'option de bureau pour le 70B en meilleure qualité — sachant que le Mac Studio M5 n\'est pas encore sorti.**',
    quickAnswerTop: {
      fr: {
        question: 'Quel Mac acheter pour exécuter des LLM en local en 2026 ?',
        answer:
          'Achetez selon la mémoire unifiée, puis la bande passante. Un Mac mini M5 Pro 64 Go (env. 1 699 €) est le choix rapport qualité-prix et fait tourner les modèles 34B en silence comme serveur toujours actif. Un MacBook Pro 16" M5 Max 64 Go (env. 4 179 €) est le choix portable et exécute les modèles 70B. Un Mac Studio de 128 Go est le choix de bureau pour le 70B en Q5, mais le Mac Studio M5 n\'est pas sorti — le Mac Studio M4 Max est livrable aujourd\'hui comme alternative disponible.',
        bullets: [
          'Rapport qualité-prix / serveur toujours actif : Mac mini M5 Pro 64 Go, env. 1 699 €, exécute les modèles 34B à 15-25 tok/s',
          'Portable : MacBook Pro 16" M5 Max 64 Go, env. 4 179 €, exécute le 70B Q4 à 7-11 tok/s',
          'Bureau 70B : Mac Studio 128 Go — version M5 pas encore sortie (attendue fin 2026) ; M4 Max livrable aujourd\'hui',
          'La mémoire d\'Apple Silicon n\'est pas évolutive après l\'achat — choisissez d\'emblée la taille nécessaire',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Choix de la rédaction', anchor: '#editors-choice' },
      { label: 'Tableau comparatif des Mac', anchor: '#comparison-table' },
      { label: 'Quel Mac acheter ?', anchor: '#which-mac' },
      { label: 'Mac mini M5 Pro : le serveur', anchor: '#mac-mini' },
      { label: 'MacBook Pro 16" M5 Max : le portable', anchor: '#macbook-pro' },
      { label: 'Mac Studio : le bureau', anchor: '#mac-studio' },
      { label: 'Combien de mémoire unifiée vous faut-il ?', anchor: '#memory-needs' },
      { label: 'Logigramme de décision', anchor: '#decision-flowchart' },
      { label: 'Où acheter', anchor: '#where-to-buy' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'À lire également', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**La mémoire unifiée est la contrainte déterminante.** Sur Apple Silicon, le modèle partage un seul pool mémoire avec le système — un modèle qui n\'y tient pas ne peut pas s\'exécuter. Choisissez le Mac dont la mémoire correspond à votre modèle cible, puis optimisez la bande passante et le format.',
          '**La mémoire n\'est pas évolutive après l\'achat.** La mémoire unifiée d\'Apple Silicon est soudée. Ce que vous achetez est définitif — dimensionnez pour le modèle que vous voudrez dans deux ans, pas seulement aujourd\'hui.',
          '**Choix rapport qualité-prix / serveur : Mac mini M5 Pro 64 Go (env. 1 699 €)** — silencieux, 25-55 W en charge, environ 26-39 € d\'électricité par an, et 64 Go font tourner les modèles 34B. L\'entrée sérieuse la moins chère dans l\'IA locale sur Apple Silicon.',
          '**Choix portable : MacBook Pro 16" M5 Max 64 Go (env. 4 179 €)** — la seule machine M5 Max livrée, 460 Go/s de bande passante, exécute le 70B Q4 à 7-11 tok/s. Accepte un throttling thermique de 10-15 % en charge soutenue pour la portabilité.',
          '**Choix bureau 70B : Mac Studio 128 Go** — 614 Go/s de bande passante font tourner le 70B en Q5. Le Mac Studio M5 n\'est pas sorti (attendu fin 2026) ; le Mac Studio M4 Max est livrable aujourd\'hui comme solution de remplacement disponible.',
          '**C\'est la bande passante, pas le nom de la puce, qui fixe la vitesse.** Le M5 Max à 460-614 Go/s génère environ deux fois plus de tokens par seconde que le M5 Pro à 307 Go/s sur le même modèle.',
          '**Apple Silicon échange la vitesse brute contre la capacité et le silence.** Un GPU RTX de bureau est plus rapide sur les modèles 7B-13B, mais ses 24-32 Go de VRAM ne peuvent pas charger un modèle 70B qu\'un Mac de 128 Go exécute sans peine.',
          '**La consommation est faible sur toute la gamme.** Un Mac mini consomme 25-55 W sous charge LLM et un M5 Max 60-100 W — contre 300-450 W pour une carte RTX de bureau effectuant un travail comparable.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Catégorie serveur (env. 1 399-1 949 €) :** Mac mini M5 Pro 64 Go — silencieux, toujours actif, exécute les modèles jusqu\'à 34B.',
          '**Catégorie portable (env. 4 179-5 299 €) :** MacBook Pro 16" M5 Max 64-128 Go — exécute les modèles 70B en déplacement.',
          '**Catégorie bureau (env. 2 499 €+) :** Mac Studio 128 Go — exécute le 70B en Q5 ; version M5 pas encore sortie, M4 Max livrable maintenant.',
          '**Règle empirique de mémoire unifiée en Q4_K_M :** environ 0,6 Go par milliard de paramètres, plus 2-4 Go pour le contexte et l\'outillage.',
          '**Bande passante mémoire :** M5 Pro 307 Go/s, M5 Max 460 Go/s (64 Go) à 614 Go/s (128 Go) — la vitesse évolue avec la bande passante.',
          '**Plage de consommation :** Mac mini M5 Pro 25-55 W, MacBook Pro M5 Max 60-100 W sous charge LLM.',
          '**Réalité tarifaire 2026 :** Apple a relevé le prix de la mémoire configurée sur fond de pénurie — vérifiez le tarif actuel de l\'Apple Store avant d\'acheter.',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: 'Choix de la rédaction : Mac mini M5 Pro 64 Go',
        sponsoredSlot: true,
        content:
          '**Pour la plupart des acheteurs qui choisissent un Mac spécifiquement pour l\'IA locale, le Mac mini M5 Pro doté de 64 Go de mémoire unifiée est le choix qui équilibre capacité, prix et coût d\'exploitation.** Ses 64 Go absorbent tous les modèles jusqu\'à 34B avec de la marge de contexte, il fonctionne en silence et ne consomme que 25-55 W sous charge d\'inférence, et à environ 1 699 € c\'est l\'entrée sérieuse la moins chère dans l\'IA locale sur Apple Silicon. Il fait aussi un serveur d\'IA toujours actif idéal pour la maison ou le bureau. Passez au MacBook Pro 16" M5 Max uniquement si vous avez besoin de portabilité ou des modèles 70B ; passez à un Mac Studio de 128 Go uniquement si vous avez besoin du 70B en meilleure qualité sur le bureau. Le Mac Studio M5 n\'est pas encore sorti : les acheteurs voulant un bureau 70B dès aujourd\'hui doivent choisir le Mac Studio M4 Max ou attendre.',
        callouts: [
          {
            type: 'note',
            text: 'Ce choix de la rédaction reflète uniquement le rapport prix-capacité. PromptQuorum n\'est inscrit à aucun programme d\'affiliation et les liens ci-dessous ne portent aucune balise d\'affiliation — ce sont de simples liens de référence qui ne génèrent aucune commission.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Vérifier le prix du Mac mini M5 Pro sur Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'Vérifier le prix du Mac mini M5 Pro sur Amazon',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comparaison des trois Mac pour l\'IA locale en 2026',
        content:
          'Les chiffres de mémoire et de bande passante sont les spécifications Apple. Les vitesses d\'inférence sont des valeurs 8B et 70B Q4 mesurées lors des tests Apple Silicon de PromptQuorum sur le M5 Pro et le M5 Max ; les chiffres du Mac Studio M5 sont des projections, ce modèle n\'étant pas encore sorti. Les prix sont un relevé de mai 2026 (Apple Store France) — Apple a relevé en 2026 le tarif de la mémoire configurée, vérifiez donc le prix actuel de l\'Apple Store avant d\'acheter.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour un Mac exécutant des LLM en local, la mémoire unifiée décide quels modèles vous pouvez charger et la bande passante mémoire décide à quelle vitesse ils répondent — achetez selon la première, puis optimisez la seconde.',
          },
          {
            type: 'plain-terms',
            text: 'Voyez la mémoire unifiée comme une table commune que le modèle, l\'application et le système partagent. Une puce à plus haute bande passante débarrasse la table plus vite, mais si le modèle ne tient pas sur la table, la vitesse n\'a aucune importance. Choisissez d\'abord le Mac dont la table est assez grande.',
          },
        ],
        columns: ['Mac', 'Mémoire unifiée', 'Bande passante', 'Vitesse (8B Q4)', 'Vitesse (70B Q4)', 'Prix (mai 2026)', 'Idéal pour'],
        rows: [
          {
            'Mac': '[Mac mini M5 Pro 64 Go](https://www.apple.com/mac-mini/)',
            'Mémoire unifiée': '64 Go',
            'Bande passante': '307 Go/s',
            'Vitesse (8B Q4)': '50-60 tok/s',
            'Vitesse (70B Q4)': '8-12 tok/s',
            'Prix (mai 2026)': 'env. 1 699 €',
            'Idéal pour': 'Serveur toujours actif silencieux, modèles 34B',
          },
          {
            'Mac': '[MacBook Pro 16" M5 Max 64 Go](https://www.apple.com/macbook-pro/)',
            'Mémoire unifiée': '64 Go',
            'Bande passante': '460 Go/s',
            'Vitesse (8B Q4)': 'env. 100-110 tok/s',
            'Vitesse (70B Q4)': '7-11 tok/s',
            'Prix (mai 2026)': 'env. 4 179 €',
            'Idéal pour': 'Station de travail 70B portable',
          },
          {
            'Mac': 'MacBook Pro 16" M5 Max 128 Go',
            'Mémoire unifiée': '128 Go',
            'Bande passante': '614 Go/s',
            'Vitesse (8B Q4)': 'env. 110-120 tok/s',
            'Vitesse (70B Q4)': '12-16 tok/s',
            'Prix (mai 2026)': 'env. 5 299 €',
            'Idéal pour': '70B Q5 portable, multi-modèle',
          },
          {
            'Mac': '[Mac Studio M4 Max 128 Go](https://www.apple.com/mac-studio/)',
            'Mémoire unifiée': '128 Go',
            'Bande passante': 'env. 410-546 Go/s',
            'Vitesse (8B Q4)': 'est. au niveau de la famille',
            'Vitesse (70B Q4)': 'est. au niveau de la famille',
            'Prix (mai 2026)': 'env. 2 499 €+ (configuré)',
            'Idéal pour': 'Bureau 70B, disponible aujourd\'hui',
          },
          {
            'Mac': 'Mac Studio M5 Max 128 Go (unreleased)',
            'Mémoire unifiée': '128 Go (projeté)',
            'Bande passante': '614 Go/s (projeté)',
            'Vitesse (8B Q4)': 'pas encore mesurable',
            'Vitesse (70B Q4)': 'pas encore mesurable',
            'Prix (mai 2026)': 'non annoncé',
            'Idéal pour': 'Attendu fin 2026 — pas encore en vente',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'Quel Mac acheter ?',
        content:
          '**Votre plus gros modèle cible et votre format décident du Mac ; votre budget décide de la catégorie de mémoire à l\'intérieur.** Trouvez la ligne qui correspond à votre situation.',
        columns: ['Votre situation', 'Achetez ceci'],
        rows: [
          { 'Votre situation': 'Je veux un serveur d\'IA toujours actif et silencieux pour la maison ou le bureau', 'Achetez ceci': '[Mac mini M5 Pro 64 Go](https://www.apple.com/mac-mini/)' },
          { 'Votre situation': 'J\'exécute des modèles 8B-13B et veux le Mac capable le moins cher', 'Achetez ceci': 'Mac mini M5 Pro (32-64 Go)' },
          { 'Votre situation': 'J\'exécute des modèles 34B sur un bureau et tiens à un faible coût d\'exploitation', 'Achetez ceci': 'Mac mini M5 Pro 64 Go' },
          { 'Votre situation': 'J\'ai besoin d\'exécuter des modèles 70B et de voyager avec la machine', 'Achetez ceci': '[MacBook Pro 16" M5 Max 64 Go](https://www.apple.com/macbook-pro/)' },
          { 'Votre situation': 'Je veux du 70B en qualité Q5 et exécuter plusieurs modèles à la fois', 'Achetez ceci': 'MacBook Pro 16" M5 Max 128 Go' },
          { 'Votre situation': 'Je veux une machine de bureau 70B et acheter aujourd\'hui', 'Achetez ceci': '[Mac Studio M4 Max 128 Go](https://www.apple.com/mac-studio/)' },
          { 'Votre situation': 'Je veux spécifiquement le Mac Studio M5', 'Achetez ceci': 'Attendez — attendu fin 2026, pas encore sorti' },
          { 'Votre situation': 'Je suis indécis et veux le premier Mac le plus sûr pour l\'IA locale', 'Achetez ceci': 'Mac mini M5 Pro 64 Go — montez en gamme plus tard s\'il devient trop juste' },
        ],
      },
      macMini: {
        id: 'mac-mini',
        title: 'Mac mini M5 Pro : le serveur silencieux toujours actif',
        content:
          '**Le Mac mini M5 Pro est le choix rapport qualité-prix et le meilleur Mac pour un serveur d\'IA locale toujours actif — silencieux, peu énergivore et capable d\'exécuter des modèles jusqu\'à 34B.** Pour la plupart des nouveaux venus dans l\'IA sur Apple Silicon, la configuration 64 Go offre toute la capacité nécessaire, et sa consommation de 25-55 W rend le fonctionnement 24/7 économique.',
        items: [
          '**Mac mini M5 (base, env. 899 €, 16 Go) :** exécute les modèles 7B en Q4 uniquement. Adéquat pour un chat léger à un seul utilisateur, mais 16 Go sont trop justes pour une machine d\'IA sérieuse — à écarter pour un usage IA.',
          '**Mac mini M5 (env. 1 199 €, 32 Go) :** gère les modèles jusqu\'à 13B en Q4. Une entrée raisonnable si vous n\'exécutez que de petits modèles, mais 32 Go sont vite dépassés.',
          '**Mac mini M5 Pro 64 Go (env. 1 699 €) :** le choix recommandé. 307 Go/s de bande passante, exécute les modèles 8B à 50-60 tok/s et les modèles 34B à 15-25 tok/s. Assez de mémoire pour exécuter en même temps un LLM, la reconnaissance vocale Whisper et un pipeline RAG.',
          '**Pourquoi acheter ce Mac :** coût d\'entrée le plus bas dans l\'IA Apple Silicon, fonctionnement silencieux, consommation de 25-55 W (env. 26-39 € d\'électricité par an) et un encombrement d\'environ 12,7 x 12,7 cm qui se loge dans un placard comme serveur.',
          '**Pourquoi écarter ce Mac :** il ne peut pas charger un modèle 70B et n\'est pas portable. Si le 70B est votre objectif, choisissez plutôt un MacBook Pro M5 Max ou un Mac Studio de 128 Go.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Achetez le M5 Pro 64 Go, pas le M5 32 Go. La mémoire supplémentaire fait la différence entre plafonner aux modèles 13B et exécuter sans peine les modèles 34B — et la mémoire d\'Apple Silicon ne peut pas être ajoutée plus tard.',
          },
          {
            type: 'note',
            text: 'Le Mac mini M5 Pro fait un excellent serveur d\'IA headless : installez Ollama, exposez l\'API sur le réseau local, et chaque appareil de la maison peut l\'utiliser. Le faire tourner 24/7 pendant un an coûte moins qu\'un mois d\'abonnement à un chat cloud.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Vérifier le prix du Mac mini M5 Pro sur Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5',
            productName: 'Apple Mac Mini M5',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'Vérifier le prix du Mac mini M5 sur Amazon',
          },
        ],
      },
      macbookPro: {
        id: 'macbook-pro',
        title: 'MacBook Pro 16" M5 Max : la station de travail 70B portable',
        content:
          '**Le MacBook Pro 16" M5 Max est le seul Mac livré qui exécute les modèles 70B, et il le fait dans un format portable.** C\'est le choix des acheteurs qui ont besoin de modèles de classe 70B et veulent emporter la machine. Le compromis : un throttling thermique de 10-15 % en inférence soutenue et un prix plus élevé qu\'un bureau doté de la même puce.',
        items: [
          '**MacBook Pro 16" M5 Max 64 Go (env. 4 179 €) :** GPU 32 cœurs, 460 Go/s de bande passante. Exécute les modèles 8B à environ 100-110 tok/s et Llama 3.3 70B Q4 à 7-11 tok/s. Le point d\'entrée portable dans l\'IA locale 70B.',
          '**MacBook Pro 16" M5 Max 128 Go (env. 5 299 €) :** GPU 40 cœurs, 614 Go/s de bande passante. Exécute le 70B en Q5 (meilleure qualité) et permet d\'exécuter deux modèles à la fois — par exemple un modèle 70B et un modèle 13B.',
          '**Pourquoi acheter ce Mac :** vous avez besoin de modèles 70B et de portabilité, vous voulez une seule machine pour le travail créatif et l\'IA, ou vous présentez et voyagez et ne pouvez pas laisser un bureau derrière vous.',
          '**Pourquoi écarter ce Mac :** si la machine ne quitte jamais un bureau, un Mac Studio doté de la même mémoire coûte moins cher et chauffe moins ; si les modèles 34B suffisent, le Mac mini M5 Pro économise plus de 2 000 €.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le MacBook Pro 16" M5 Max subit un throttling d\'environ 10-15 % en inférence soutenue une fois le châssis chaud — généralement après quelques heures de charge continue. Pour de l\'inférence 24/7, un Mac Studio est le meilleur outil ; pour des pointes portables de travail 70B, le MacBook Pro convient.',
          },
          {
            type: 'note',
            text: 'Les MacBook Pro M5 Max 64 Go et 128 Go partagent la même famille de puce. La version 128 Go achète de la capacité — 70B en Q5 et modèles simultanés — et plus de bande passante, pas une autre classe de machine.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/macbook-pro/',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'Vérifier le prix du MacBook Pro 16" M5 Max sur Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+16+M5+Max',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'Vérifier le prix du MacBook Pro 16" M5 Max sur Amazon',
          },
        ],
      },
      macStudio: {
        id: 'mac-studio',
        title: 'Mac Studio : l\'option de bureau pour le 70B',
        content:
          '**Le Mac Studio est le choix de bureau pour exécuter des modèles 70B — mais le Mac Studio M5 n\'est pas encore sorti, les acheteurs d\'aujourd\'hui choisissent donc la version M4 Max ou attendent.** Un Mac Studio de 128 Go exécute le 70B en qualité Q5 et reste plus silencieux qu\'un MacBook Pro en charge soutenue, car le châssis de bureau n\'a pas le plafond thermique d\'un portable.',
        items: [
          '**Mac Studio M4 Max 128 Go (env. 2 499 €+ configuré, disponible aujourd\'hui) :** l\'option actuellement livrée. Il exécute les modèles 70B et c\'est le bon achat si vous voulez un bureau 70B maintenant sans attendre la refonte M5.',
          '**Mac Studio M5 Max (PAS ENCORE SORTI — attendu fin 2026) :** Apple n\'a pas annoncé le Mac Studio M5. Toute spécification ou tout prix de Mac Studio M5 que vous voyez est une projection. Une attente raisonnable, fondée sur la puce M5 Max du MacBook Pro, est 128 Go de mémoire unifiée à environ 614 Go/s de bande passante — mais ce n\'est pas confirmé et il n\'y a pas de prix.',
          '**Pourquoi acheter un Mac Studio :** vous voulez une machine de bureau 70B, vous voulez un fonctionnement soutenu plus silencieux qu\'un MacBook Pro, ou vous voulez un serveur d\'IA de bureau partagé sans batterie ni limite thermique de portable.',
          '**Pourquoi écarter un Mac Studio :** si vous avez besoin de portabilité, achetez le MacBook Pro M5 Max ; si les modèles 34B suffisent, le Mac mini M5 Pro est bien moins cher ; si vous voulez spécifiquement le Mac Studio M5, vous devez attendre sa sortie.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Le Mac Studio M5 n\'est pas en vente en mai 2026. Ne payez pas de prime en espérant des spécifications M5 — si vous avez besoin d\'un bureau 70B aujourd\'hui, le Mac Studio M4 Max est livrable maintenant et vérifié pour exécuter les modèles 70B.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-studio/',
            productName: 'Apple Mac Studio M4 Max 128GB',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Vérifier le prix du Mac Studio sur Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M4+Max',
            productName: 'Apple Mac Studio M4 Max',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'Vérifier le prix du Mac Studio sur Amazon',
          },
        ],
      },
      memoryNeeds: {
        id: 'memory-needs',
        title: 'Combien de mémoire unifiée vous faut-il ?',
        content:
          '**En quantification Q4_K_M, un modèle a besoin d\'environ 0,6 Go de mémoire unifiée par milliard de paramètres, plus 2-4 Go pour le contexte et l\'outillage — et sur un Mac cette mémoire est aussi partagée avec macOS lui-même.** Laissez de la marge au système d\'exploitation : un Mac de 16 Go n\'est pas un budget modèle de 16 Go.',
        items: [
          '**Modèles 8B — 8-9 Go :** tiennent sur tout Mac doté de 16 Go ou plus. Un Mac de 32 Go laisse une marge confortable.',
          '**Modèles 13-14B — 11-13 Go :** nécessitent 32 Go une fois macOS et la surcharge de contexte comptés. Mac mini 32 Go et au-delà.',
          '**Modèles 34B — 21-25 Go :** nécessitent 64 Go en pratique. Le Mac mini M5 Pro 64 Go est le choix rapport qualité-prix ici.',
          '**Modèles 70B en Q4 — 39-42 Go :** nécessitent 64 Go au minimum, 64 Go devenant juste une fois le contexte ajouté. Le MacBook Pro M5 Max 64 Go est le plancher.',
          '**Modèles 70B en Q5 ou modèles simultanés — 50-70 Go+ :** nécessitent 128 Go. MacBook Pro M5 Max 128 Go ou un Mac Studio de 128 Go.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La mémoire d\'Apple Silicon est soudée et ne peut pas être mise à niveau. Achetez une catégorie au-dessus de votre besoin actuel : si vous exécutez des modèles 34B aujourd\'hui, 64 Go sont le plancher, pas le choix confortable. Pour la méthode complète, voir le guide de la mémoire unifiée dans À lire également.',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: 'Logigramme de décision : choisissez votre Mac en quatre questions',
        content:
          '**Quatre questions, dans l\'ordre, orientent la plupart des acheteurs vers un seul Mac.**',
        items: [
          '**1. Quel est le plus gros modèle que vous voulez exécuter ?** 8-13B : Mac mini 32-64 Go. 34B : Mac mini M5 Pro 64 Go. 70B Q4 : MacBook Pro M5 Max 64 Go. 70B Q5 ou simultané : MacBook Pro 128 Go ou Mac Studio.',
          '**2. La machine doit-elle se déplacer ?** Oui : MacBook Pro 16" M5 Max. Non : Mac mini (jusqu\'à 34B) ou Mac Studio (70B).',
          '**3. Est-ce un serveur toujours actif ?** Oui : Mac mini M5 Pro 64 Go — silencieux, 25-55 W, le moins cher à faire tourner 24/7. Non : choisissez selon la taille du modèle ci-dessus.',
          '**4. Avez-vous besoin de la machine aujourd\'hui ?** Si vous voulez un bureau 70B maintenant, achetez le Mac Studio M4 Max — le Mac Studio M5 n\'est pas sorti et attendu seulement fin 2026.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisissez un Mac pour l\'IA locale en répondant d\'abord à la taille du plus gros modèle, puis à la portabilité, puis à l\'usage en serveur toujours actif, et enfin à la disponibilité.',
          },
          {
            type: 'plain-terms',
            text: 'Commencez par le plus gros modèle que vous voulez réellement exécuter et laissez-le fixer la mémoire nécessaire. Décidez ensuite s\'il doit voyager, s\'il tourne en continu et si vous pouvez attendre le Mac Studio M5. Procéder dans cet ordre est la façon d\'éviter d\'acheter un Mac incapable de charger son modèle.',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: 'Où acheter',
        content:
          '**Apple vend chaque configuration en direct ; Amazon et d\'autres revendeurs stockent les configurations courantes, parfois sous le prix catalogue Apple.** Les liens ci-dessous sont de simples liens de recherche produit ; ils ne portent aucune balise d\'affiliation et ne génèrent aucune commission.',
        items: [
          '**Apple Store (apple.com) :** la seule source pour chaque configuration de mémoire et de stockage, y compris la personnalisation à la commande. Indispensable si vous voulez une configuration non standard.',
          '**Amazon :** stocke les configurations fixes populaires du Mac mini et du MacBook Pro, parfois remisées sous le prix catalogue Apple. Le choix de configurations personnalisées à forte mémoire est limité.',
          '**Apple reconditionné :** des Mac de génération précédente (Mac Studio M4 Max, MacBook Pro plus anciens) avec remise et garantie complète — une option sensée pour un bureau 70B aujourd\'hui.',
          '**Revendeurs agréés et spécialisés :** proposent les configurations courantes et battent parfois le tarif Apple ; utile pour le MacBook Pro 16" M5 Max.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Apple a relevé en 2026 le tarif de la mémoire configurée, sous l\'effet de la même pénurie de mémoire qui a frappé les GPU. Les montants en euros indiqués ici sont un relevé de mai 2026 — ouvrez la fiche actuelle de l\'Apple Store avant d\'acheter et vérifiez si l\'option de mémoire dont vous avez besoin a évolué.',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/shop/buy-mac',
            productName: 'Macs for local AI (Apple Store)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Parcourir les Mac sur Apple',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+for+local+AI',
            productName: 'Macs for local AI (Amazon)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'Parcourir les Mac sur Amazon',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes à l\'achat d\'un Mac pour l\'IA locale',
        items: [
          '**Acheter pour le nom de la puce plutôt que pour la mémoire unifiée.** Un M5 Max plus rapide avec trop peu de mémoire ne peut pas charger votre modèle. Confirmez d\'abord que le modèle tient dans la mémoire unifiée avec 2-4 Go de marge, puis comparez la bande passante.',
          '**Acheter un Mac de 16 Go pour un travail d\'IA.** 16 Go plafonnent aux modèles 7B et sont partagés avec macOS. Pour une machine d\'IA sérieuse, 64 Go sont le plancher pratique.',
          '**Oublier que la mémoire d\'Apple Silicon n\'est pas évolutive.** La mémoire est soudée. Sous-dimensionnez et la seule solution est un nouveau Mac — dimensionnez une catégorie au-dessus du besoin actuel.',
          '**Supposer que le Mac Studio M5 est disponible.** Il n\'est pas sorti en mai 2026. Si une annonce promet des spécifications de Mac Studio M5, traitez-la comme une projection — achetez le Mac Studio M4 Max ou attendez.',
          '**Acheter un MacBook Pro pour un serveur 24/7 fixe.** Il subit un throttling en charge soutenue. Pour un serveur toujours actif, le Mac mini M5 Pro ou un Mac Studio chauffe moins et reste plus silencieux.',
          '**Surdimensionner pour des modèles 8B.** Si les modèles 8B couvrent votre cas d\'usage, un Mac de 128 Go est de l\'argent gaspillé. Adaptez la catégorie de mémoire au modèle, pas au budget dont vous disposez.',
          '**S\'ancrer sur les prix Apple de l\'an dernier.** Apple a relevé en 2026 le tarif de la mémoire configurée — budgétisez sur le prix Apple Store en vigueur, pas sur un chiffre mémorisé.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Spécifications Apple Mac mini](https://www.apple.com/mac-mini/specs/) — Chiffres officiels de mémoire unifiée, de puce et de consommation pour la gamme Mac mini M5.',
          '[Spécifications Apple MacBook Pro](https://www.apple.com/macbook-pro/specs/) — Chiffres officiels de mémoire unifiée, de cœurs GPU et de bande passante mémoire du M5 Max.',
          '[Apple Mac Studio](https://www.apple.com/mac-studio/) — Gamme Mac Studio actuelle et options de configuration (génération M4 Max en mai 2026).',
          '[Benchmarks LLM M5 Pro vs M5 Max 2026](/fr/local-llms/m5-pro-max-llm-benchmarks-2026) — Tests matériels PromptQuorum : tokens par seconde mesurés pour les modèles 8B et 70B sur le M5 Pro et le M5 Max.',
          '[Le Mac mini M5 comme serveur d\'IA locale](/fr/local-llms/mac-mini-m5-local-ai-server) — Tests PromptQuorum : consommation, coût d\'électricité et performance en serveur toujours actif du Mac mini M5 Pro.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quel est le Mac le moins cher capable de bien exécuter des LLM locaux ?',
            a: 'Le Mac mini M5 Pro 64 Go, à environ 1 699 €, est le Mac le moins cher qui exécute bien les LLM locaux. Ses 64 Go de mémoire unifiée absorbent tous les modèles jusqu\'à 34B en quantification Q4, il exécute les modèles 8B à 50-60 tokens par seconde et ne consomme que 25-55 W. Les Mac mini de 16 Go et 32 Go sont moins chers mais vite dépassés — 64 Go sont le plancher pratique pour un usage IA sérieux.',
          },
          {
            q: 'Le Mac Studio M5 est-il déjà disponible ?',
            a: 'Non. En mai 2026, le Mac Studio M5 n\'est pas sorti et Apple n\'a annoncé ni spécifications ni prix. Tout chiffre de Mac Studio M5 que vous voyez est une projection. Si vous avez besoin d\'un Mac de bureau 70B aujourd\'hui, le Mac Studio M4 Max est livrable maintenant et vérifié pour exécuter les modèles 70B ; sinon, le Mac Studio M5 est attendu plus tard en 2026.',
          },
          {
            q: 'Combien de mémoire unifiée faut-il pour des LLM locaux sur un Mac ?',
            a: 'En quantification Q4_K_M, prévoyez environ 0,6 Go par milliard de paramètres plus 2-4 Go de surcharge, et rappelez-vous que macOS partage le même pool. Cela représente environ 8-9 Go pour les modèles 8B, 21-25 Go pour le 34B et 39-42 Go pour le 70B. Un Mac de 64 Go exécute le 34B sans peine et fait tout juste tenir le 70B Q4 ; 128 Go sont nécessaires pour le 70B en Q5 ou pour exécuter plusieurs modèles.',
          },
          {
            q: 'Mac mini ou MacBook Pro pour l\'IA locale ?',
            a: 'Choisissez le Mac mini M5 Pro si la machine reste sur un bureau et que les modèles 34B sont votre plafond — il est bien moins cher, silencieux et idéal comme serveur toujours actif. Choisissez le MacBook Pro 16" M5 Max si vous devez exécuter des modèles 70B ou emporter la machine. Le MacBook Pro est le seul Mac livré qui exécute le 70B, mais il subit un throttling en charge soutenue.',
          },
          {
            q: 'Un Mac peut-il exécuter des modèles 70B ?',
            a: 'Oui. Un MacBook Pro 16" M5 Max de 64 Go exécute Llama 3.3 70B Q4 à 7-11 tokens par seconde, et la version 128 Go exécute le 70B en Q5 à 8-12 tokens par seconde. Un Mac Studio de 128 Go exécute aussi le 70B sans peine. Le Mac mini M5 Pro ne le peut pas — 64 Go sont trop justes pour le 70B une fois la surcharge de macOS comptée.',
          },
          {
            q: 'Un Mac est-il plus rapide qu\'un GPU NVIDIA pour les LLM locaux ?',
            a: 'Non, pas en vitesse brute pour les petits modèles — une carte RTX de bureau génère plus de tokens par seconde sur les modèles 7B-13B. L\'avantage du Mac est la capacité et l\'efficacité : un Mac de 128 Go charge un modèle 70B qu\'une carte RTX de 24-32 Go ne peut pas, et il le fait en silence à 60-100 W contre 300-450 W. Achetez un Mac pour la capacité, le silence et le faible coût d\'exploitation, pas pour la vitesse brute.',
          },
          {
            q: 'Puis-je mettre à niveau la mémoire d\'un Mac plus tard ?',
            a: 'Non. La mémoire unifiée d\'Apple Silicon est soudée au package de la puce et ne peut pas être changée après l\'achat. La mémoire que vous achetez est définitive pour toute la durée de vie de la machine. Dimensionnez pour le plus gros modèle que vous prévoyez d\'exécuter dans les deux à trois prochaines années, pas seulement aujourd\'hui.',
          },
          {
            q: 'Combien coûte l\'exploitation d\'un Mac comme serveur d\'IA ?',
            a: 'Très peu. Un Mac mini M5 Pro consomme 25-55 W sous charge LLM et environ 8 W au repos. Le faire tourner 24/7 pendant une année entière coûte environ 26-39 € d\'électricité — moins qu\'un mois d\'un abonnement IA cloud typique. Ce faible coût d\'exploitation est une raison centrale qui fait du Mac mini le choix rapport qualité-prix pour un serveur toujours actif.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'À lire également',
        items: [
          '[Voir l\'ensemble complet des benchmarks M5 Pro vs M5 Max](/fr/local-llms/m5-pro-max-llm-benchmarks-2026) — tokens par seconde mesurés, temps jusqu\'au premier token et consommation derrière les chiffres de ce guide.',
          '[Configurer un Mac mini M5 comme serveur d\'IA toujours actif](/fr/local-llms/mac-mini-m5-local-ai-server) — la construction complète du serveur, l\'analyse du coût d\'électricité et les tests de fiabilité 24/7.',
          '[Comparer Apple Silicon sur toute la gamme M](/fr/local-llms/apple-silicon-local-llm-guide-2026) — comment M1 à M5 Max se comparent en mémoire unifiée et bande passante.',
          '[Calculer la mémoire unifiée nécessaire à chaque taille de modèle](/fr/local-llms/how-much-unified-memory-for-local-llm) — la méthode complète par taille de modèle derrière la formule rapide donnée ici.',
          '[Comparer Apple Silicon aux GPU NVIDIA pour les LLM locaux](/fr/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — quand un Mac gagne sur la capacité et quand une carte NVIDIA gagne sur la vitesse brute.',
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
    title: 'ローカルAIに最適なMac 2026：Mac mini vs Mac Studio vs MacBook Pro',
    seoTitle: 'ローカルAIに最適なMac 2026：mini vs Studio vs MBP',
    intro:
      'Mac選びの多くのアドバイスはチップ名にとらわれがちですが、購入判断を実際に左右する数値はunified memoryです。Apple Siliconではモデルが他のすべてと同じメモリプールに置かれるため、64GBのMac miniは34Bモデルを動かせますが、より高速でも24GBのMacBook Proには収まりません。本ガイドでは、ローカルLLMを動かすための3台のMac——常時稼働サーバーとしてのMac mini M5 Pro、ポータブルワークステーションとしてのMacBook Pro 16" M5 Max、デスクトップ選択肢としてのMac Studio——を、購入を決める数値、すなわちunified memory、メモリ帯域幅、実測のtokens per second、価格で比較します。価格について一点注意があります。Appleは2026年、GPUを直撃したのと同じメモリ不足を受けて構成メモリの価格を引き上げたため、ここに示す価格はすべて2026年5月時点のスナップショットです。そして入手性について一点注意があります。Mac Studio M5は未発売です——以下の仕様と価格は予測であり、その旨を明示しています。',
    metaDescription:
      'ローカルLLM向けの3台のMacを比較：Mac mini M5 Pro、MacBook Pro 16" M5 Max、Mac Studio。unified memory、tokens/秒、消費電力、2026年5月時点のモデルサイズ別価格。',
    twitterDescription:
      'ローカルAI向けMac mini M5 Pro vs MacBook Pro 16" M5 Max vs Mac Studio——3台のMac、判断ルールは一つ：まずunified memoryで選び、次に帯域幅。2026年5月時点の価格。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Llama 3.3 34B',
      'Llama 3.3 70B',
      'Mistral Small',
      'Qwen 3 32B',
    ],
    current_hardware_mentioned: [
      'Apple Mac Mini M5 Pro',
      'Apple MacBook Pro 16" M5 Max',
      'Apple Mac Studio M4 Max',
      'Apple Mac Studio M5 Max (unreleased)',
      'Apple M5 Pro',
      'Apple M5 Max',
    ],
    audience:
      'ローカルLLMを動かすために専用のMacを選び、常時稼働のMac miniサーバー、ポータブルなMacBook Pro、デスクトップのMac Studioのいずれかを検討している購入者向けです。量子化、および制約としてのunified memoryには習熟していることを前提とし、現行のMac SKUへの精通は前提としません。',
    readTime: '13分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルAI向けMac',
    targetKeywords: [
      'ローカルai 最適なmac 2026',
      'mac mini vs mac studio ローカルllm',
      'macbook pro m5 max ローカルllm',
      'ローカルllm unified memory どれくらい',
      'ローカルllm 実行 mac',
    ],
    leadAnswerBlock:
      '**ローカルAIに最適なMacは、unified memoryがあなたのモデルに合うものです。64GBのMac mini M5 Proは34Bモデルを、64GBのMacBook Pro 16" M5 Maxは70Bモデルをポータブルに、128GBのMac Studioはより高品質な70B向けのデスクトップ選択肢として動かします——ただしM5 Mac Studioはまだ未発売です。**',
    quickAnswerTop: {
      ja: {
        question: '2026年にローカルLLMを動かすにはどのMacを買うべきですか？',
        answer:
          'まずunified memoryで、次に帯域幅で選びます。Mac mini M5 Pro 64GB（約¥184,800）はコストパフォーマンスの選択肢で、常時稼働サーバーとして34Bモデルを静かに動かします。MacBook Pro 16" M5 Max 64GB（約¥554,800）はポータブルの選択肢で、70Bモデルを動かします。128GBのMac StudioはQ5での70B向けのデスクトップ選択肢ですが、M5 Mac Studioは未発売です——M4 Max Mac Studioが入手可能な代替として現在出荷されています。',
        bullets: [
          'コスパ／常時稼働サーバー：Mac mini M5 Pro 64GB、約¥184,800、34Bモデルを15-25 tok/sで実行',
          'ポータブル：MacBook Pro 16" M5 Max 64GB、約¥554,800、70B Q4を7-11 tok/sで実行',
          'デスクトップ70B：128GB Mac Studio——M5版は未発売（2026年後半に予想）；M4 Maxは現在出荷中',
          'Apple Siliconのメモリは購入後にアップグレードできません——必要な容量を最初から選んでください',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: '要点', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '編集部の選択', anchor: '#editors-choice' },
      { label: 'Mac比較表', anchor: '#comparison-table' },
      { label: 'どのMacを買うべきか？', anchor: '#which-mac' },
      { label: 'Mac mini M5 Pro：サーバー', anchor: '#mac-mini' },
      { label: 'MacBook Pro 16" M5 Max：ポータブル', anchor: '#macbook-pro' },
      { label: 'Mac Studio：デスクトップ', anchor: '#mac-studio' },
      { label: 'unified memoryはどれくらい必要か？', anchor: '#memory-needs' },
      { label: '判断フローチャート', anchor: '#decision-flowchart' },
      { label: '購入先', anchor: '#where-to-buy' },
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
          '**unified memoryが拘束的な制約です。** Apple Siliconではモデルがシステムと一つのメモリプールを共有します——unified memoryに収まらないモデルは動きません。ターゲットモデルにメモリが合うMacを選び、その後で帯域幅とフォームファクターを最適化してください。',
          '**メモリは購入後にアップグレードできません。** Apple Siliconのunified memoryは基板に直付けされています。買ったものが恒久的な構成です——今だけでなく2年後に動かしたいモデルに合わせて容量を決めてください。',
          '**コスパ／サーバーの選択：Mac mini M5 Pro 64GB（約¥184,800）** ——静音、負荷時25-55W、電気代は年間約¥4,000-6,000、64GBで34Bモデルを動かせます。Apple SiliconでのローカルAIへの本格的な参入として最も安価です。',
          '**ポータブルの選択：MacBook Pro 16" M5 Max 64GB（約¥554,800）** ——出荷中の唯一のM5 Maxマシン、460GB/sの帯域幅、70B Q4を7-11 tok/sで実行。ポータビリティのために持続負荷時10-15%のサーマルスロットリングを受け入れます。',
          '**デスクトップ70Bの選択：128GB Mac Studio** ——614GB/sの帯域幅でQ5の70Bを動かします。M5 Mac Studioは未発売（2026年後半に予想）；M4 Max Mac Studioが入手可能な代替として現在出荷されています。',
          '**速度を決めるのはチップ名ではなく帯域幅です。** 460-614GB/sのM5 Maxは、同じモデルで307GB/sのM5 Proのおよそ2倍のtokens per secondを生成します。',
          '**Apple Siliconは生の速度を容量と静音性と引き換えにしています。** デスクトップのRTX GPUは7B-13Bモデルでは高速ですが、その24-32GBのVRAMには、128GBのMacが余裕で動かす70Bモデルが収まりません。',
          '**消費電力はラインアップ全体で低く抑えられています。** Mac miniはLLM負荷時25-55W、M5 Maxは60-100Wを消費します——同等の作業をするデスクトップRTXカードの300-450Wに対してです。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**サーバー帯（約¥154,800-204,800）：** Mac mini M5 Pro 64GB——静音、常時稼働、最大34Bモデルを実行。',
          '**ポータブル帯（約¥554,800-718,800）：** MacBook Pro 16" M5 Max 64-128GB——移動先で70Bモデルを実行。',
          '**デスクトップ帯（約¥358,800〜）：** 128GB Mac Studio——Q5で70Bを実行；M5版は未発売、M4 Maxは現在出荷中。',
          '**Q4_K_Mでのunified memoryの目安：** パラメータ10億あたり約0.6GB、加えてコンテキストとツール用に2-4GB。',
          '**メモリ帯域幅：** M5 Pro 307GB/s、M5 Max 460GB/s（64GB）から614GB/s（128GB）——速度は帯域幅に比例します。',
          '**消費電力の範囲：** Mac mini M5 Pro 25-55W、MacBook Pro M5 Max 60-100W（LLM負荷時）。',
          '**2026年の価格事情：** Appleはメモリ不足を受けて構成メモリの価格を引き上げました——購入前に現在のApple Storeの価格を確認してください。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '編集部の選択：Mac mini M5 Pro 64GB',
        sponsoredSlot: true,
        content:
          '**ローカルAI専用にMacを選ぶ大半の購入者にとって、64GBのunified memoryを備えたMac mini M5 Proが、能力・価格・運用コストのバランスが取れた選択肢です。** 64GBは34Bまでのあらゆるモデルをコンテキストの余裕とともに収め、静音で動作し、推論負荷時の消費電力はわずか25-55W、約¥184,800でApple SiliconのローカルAIへの本格的な参入として最も安価です。家庭やオフィスの常時稼働AIサーバーとしても理想的です。ポータビリティや70Bモデルが必要な場合のみMacBook Pro 16" M5 Maxへ、デスクトップでより高品質な70Bが必要な場合のみ128GB Mac Studioへステップアップしてください。M5 Mac Studioはまだ未発売のため、今日70Bデスクトップが欲しい購入者はM4 Max Mac Studioを選ぶか、待つ必要があります。',
        callouts: [
          {
            type: 'note',
            text: 'この編集部の選択は価格対能力のみを反映しています。PromptQuorumはいかなるアフィリエイトプログラムにも参加しておらず、以下のリンクにはアフィリエイトタグが付いていません——コミッションを得ない単なる参照リンクです。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'AppleでMac mini M5 Proの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: 'AmazonでMac mini M5 Proの価格を確認',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026年のローカルAIで3台のMacはどう比較されるか',
        content:
          'メモリと帯域幅の数値はApple仕様です。推論速度はM5 ProとM5 MaxでのPromptQuorumのApple Siliconテストによる8Bおよび70B Q4の実測値です；Mac Studio M5の数値は、このモデルがまだ未発売のため予測です。価格は2026年5月時点の米国スナップショットです——Appleは2026年に構成メモリの価格を引き上げたため、購入前に現在のApple Storeの価格を確認してください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルLLMを動かすMacでは、unified memoryがどのモデルをロードできるかを決め、メモリ帯域幅がどれだけ速く答えるかを決めます——まず前者で買い、次に後者を最適化してください。',
          },
          {
            type: 'plain-terms',
            text: 'unified memoryは、モデルとアプリとシステムが共有する一つのテーブルだと考えてください。帯域幅が高いチップはテーブルをより速く片付けますが、モデルがそもそもテーブルに乗らなければ速度は問題になりません。まずテーブルが十分大きいMacを選んでください。',
          },
        ],
        columns: ['Mac', 'unified memory', '帯域幅', '速度（8B Q4）', '速度（70B Q4）', '価格（2026年5月）', '最適な用途'],
        rows: [
          {
            'Mac': '[Mac mini M5 Pro 64GB](https://www.apple.com/mac-mini/)',
            'unified memory': '64GB',
            '帯域幅': '307GB/s',
            '速度（8B Q4）': '50-60 tok/s',
            '速度（70B Q4）': '8-12 tok/s',
            '価格（2026年5月）': '約¥184,800',
            '最適な用途': '静音の常時稼働サーバー、34Bモデル',
          },
          {
            'Mac': '[MacBook Pro 16" M5 Max 64GB](https://www.apple.com/macbook-pro/)',
            'unified memory': '64GB',
            '帯域幅': '460GB/s',
            '速度（8B Q4）': '約100-110 tok/s',
            '速度（70B Q4）': '7-11 tok/s',
            '価格（2026年5月）': '約¥554,800',
            '最適な用途': 'ポータブル70Bワークステーション',
          },
          {
            'Mac': 'MacBook Pro 16" M5 Max 128GB',
            'unified memory': '128GB',
            '帯域幅': '614GB/s',
            '速度（8B Q4）': '約110-120 tok/s',
            '速度（70B Q4）': '12-16 tok/s',
            '価格（2026年5月）': '約¥718,800',
            '最適な用途': 'ポータブル70B Q5、マルチモデル',
          },
          {
            'Mac': '[Mac Studio M4 Max 128GB](https://www.apple.com/mac-studio/)',
            'unified memory': '128GB',
            '帯域幅': '約410-546GB/s',
            '速度（8B Q4）': 'ファミリーレベルの推定',
            '速度（70B Q4）': 'ファミリーレベルの推定',
            '価格（2026年5月）': '約¥358,800〜（構成）',
            '最適な用途': 'デスクトップ70B、現在入手可能',
          },
          {
            'Mac': 'Mac Studio M5 Max 128GB (unreleased)',
            'unified memory': '128GB（予測）',
            '帯域幅': '614GB/s（予測）',
            '速度（8B Q4）': 'まだ測定不可',
            '速度（70B Q4）': 'まだ測定不可',
            '価格（2026年5月）': '未発表',
            '最適な用途': '2026年後半に予想——まだ販売されていない',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: 'どのMacを買うべきか？',
        content:
          '**最大のターゲットモデルとフォームファクターがMacを決め、予算がその中のメモリ帯を決めます。** あなたの状況に合う行を見つけてください。',
        columns: ['あなたの状況', 'これを買う'],
        rows: [
          { 'あなたの状況': '家庭やオフィス向けに静音の常時稼働AIサーバーが欲しい', 'これを買う': '[Mac mini M5 Pro 64GB](https://www.apple.com/mac-mini/)' },
          { 'あなたの状況': '8B-13Bモデルを動かし、最も安価で能力のあるMacが欲しい', 'これを買う': 'Mac mini M5 Pro（32-64GB）' },
          { 'あなたの状況': 'デスクで34Bモデルを動かし、低い運用コストを重視する', 'これを買う': 'Mac mini M5 Pro 64GB' },
          { 'あなたの状況': '70Bモデルを動かす必要があり、マシンを持ち運ぶ', 'これを買う': '[MacBook Pro 16" M5 Max 64GB](https://www.apple.com/macbook-pro/)' },
          { 'あなたの状況': 'Q5品質の70Bが欲しく、複数モデルを同時に動かす', 'これを買う': 'MacBook Pro 16" M5 Max 128GB' },
          { 'あなたの状況': '70Bのデスクトップマシンが欲しく、今日購入したい', 'これを買う': '[Mac Studio M4 Max 128GB](https://www.apple.com/mac-studio/)' },
          { 'あなたの状況': 'M5 Mac Studioを特に欲しい', 'これを買う': '待つ——2026年後半に予想、まだ未発売' },
          { 'あなたの状況': '迷っていて、ローカルAIに最も安全な最初のMacが欲しい', 'これを買う': 'Mac mini M5 Pro 64GB——足りなくなったら後でアップグレード' },
        ],
      },
      macMini: {
        id: 'mac-mini',
        title: 'Mac mini M5 Pro：静音の常時稼働サーバー',
        content:
          '**Mac mini M5 Proはコストパフォーマンスの選択肢であり、常時稼働のローカルAIサーバーに最適なMacです——静音、低消費電力で、最大34Bのモデルを動かせます。** Apple SiliconでのAI利用が初めての大半のユーザーにとって、64GB構成は必要な能力のすべてであり、25-55Wの消費電力は24時間365日の運用を安価にします。',
        items: [
          '**Mac mini M5（ベース、約¥94,800、16GB）：** 7BモデルをQ4でのみ動かします。軽い単一ユーザーのチャットには十分ですが、16GBは本格的なAIマシンには小さすぎます——AI用途では見送ってください。',
          '**Mac mini M5（約¥124,800、32GB）：** 最大13BまでのモデルをQ4で扱います。小さなモデルしか動かさないなら妥当な入門ですが、32GBはすぐに足りなくなります。',
          '**Mac mini M5 Pro 64GB（約¥184,800）：** 推奨の選択肢。307GB/sの帯域幅で、8Bモデルを50-60 tok/s、34Bモデルを15-25 tok/sで動かします。LLM、Whisperの音声認識、RAGパイプラインを同時に動かすのに十分なメモリです。',
          '**このMacを買う理由：** Apple SiliconのAIへの最も安い参入コスト、静音動作、25-55Wの消費電力（年間約¥4,000-6,000の電気代）、そしてサーバーとしてクローゼットに収まる約12.7×12.7cmの設置面積。',
          '**このMacを見送る理由：** 70Bモデルを収められず、ポータブルでもありません。70Bがターゲットなら、代わりにMacBook Pro M5 Maxか128GB Mac Studioを選んでください。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '32GBのM5ではなく64GBのM5 Proを買ってください。追加のメモリは、13Bモデルで頭打ちになるか34Bモデルを余裕で動かすかの違いです——そしてApple Siliconのメモリは後から追加できません。',
          },
          {
            type: 'note',
            text: 'Mac mini M5 Proは優れたヘッドレスAIサーバーになります：Ollamaをインストールし、APIをLANに公開すれば、家中のすべてのデバイスが利用できます。1年間24時間365日稼働させても、クラウドチャットのサブスクリプション1か月分より安く済みます。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'AppleでMac mini M5 Proの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5',
            productName: 'Apple Mac Mini M5',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: 'AmazonでMac mini M5の価格を確認',
          },
        ],
      },
      macbookPro: {
        id: 'macbook-pro',
        title: 'MacBook Pro 16" M5 Max：ポータブル70Bワークステーション',
        content:
          '**MacBook Pro 16" M5 Maxは70Bモデルを動かせる唯一の出荷中Macであり、しかもそれをポータブルなフォームファクターで実現します。** 70Bクラスのモデルが必要で、マシンを持ち運びたい購入者向けの選択肢です。トレードオフは、持続的な推論での10-15%のサーマルスロットリングと、同じチップを積むデスクトップより高い価格です。',
        items: [
          '**MacBook Pro 16" M5 Max 64GB（約¥554,800）：** 32コアGPU、460GB/sの帯域幅。8Bモデルをおよそ100-110 tok/s、Llama 3.3 70B Q4を7-11 tok/sで動かします。ローカル70B AIへのポータブルな入口です。',
          '**MacBook Pro 16" M5 Max 128GB（約¥718,800）：** 40コアGPU、614GB/sの帯域幅。Q5（より高品質）で70Bを動かし、2つのモデルを同時に動かすこと——たとえば70Bモデルと13Bモデル——をサポートします。',
          '**このMacを買う理由：** 70Bモデルとポータビリティが必要、クリエイティブ作業とAIに1台のマシンが欲しい、あるいはプレゼンや出張でデスクトップを置いていけない。',
          '**このMacを見送る理由：** マシンがデスクを離れないなら、同じメモリのMac Studioのほうが安く、より冷えて動きます；34Bモデルで十分なら、Mac mini M5 Proで¥300,000以上節約できます。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MacBook Pro 16" M5 Maxは、筐体が熱くなると持続的な推論でおよそ10-15%スロットリングします——通常は連続負荷の数時間後です。24時間365日の推論にはMac Studioのほうが適したツールです；70B作業のポータブルな短時間バーストにはMacBook Proで問題ありません。',
          },
          {
            type: 'note',
            text: '64GBと128GBのMacBook Pro M5 Maxは同じチップファミリーを共有します。128GB版が買うのは容量——Q5の70Bと同時実行モデル——と高い帯域幅であり、別クラスのマシンではありません。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/macbook-pro/',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'AppleでMacBook Pro 16" M5 Maxの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+16+M5+Max',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: 'AmazonでMacBook Pro 16" M5 Maxの価格を確認',
          },
        ],
      },
      macStudio: {
        id: 'mac-studio',
        title: 'Mac Studio：70Bのデスクトップ選択肢',
        content:
          '**Mac Studioは70Bモデルを動かすためのデスクトップの選択肢です——ただしM5 Mac Studioはまだ未発売のため、今日の購入者はM4 Max版を選ぶか待つことになります。** 128GBのMac StudioはQ5品質で70Bを動かし、デスクトップ筐体にラップトップの熱的上限がないため、MacBook Proより持続負荷時に静かさを保ちます。',
        items: [
          '**Mac Studio M4 Max 128GB（約¥358,800〜、構成、現在入手可能）：** 現在出荷中の選択肢。70Bモデルを動かし、M5のリフレッシュを待たずに今70Bデスクトップが欲しいなら正しい買い物です。',
          '**Mac Studio M5 Max（未発売——2026年後半に予想）：** AppleはM5 Mac Studioを発表していません。目にするM5 Mac Studioの仕様や価格はすべて予測です。MacBook ProのM5 Maxチップに基づく妥当な予想は、約614GB/sの帯域幅で128GBのunified memoryですが——これは確定しておらず、価格もありません。',
          '**Mac Studioを買う理由：** 70Bのデスクトップマシンが欲しい、MacBook Proより静かな持続動作が欲しい、あるいはラップトップのバッテリーや熱の制限がない共有デスクトップAIサーバーが欲しい。',
          '**Mac Studioを見送る理由：** ポータビリティが必要ならMacBook Pro M5 Maxを買ってください；34Bモデルで十分なら、Mac mini M5 Proのほうがはるかに安いです；M5 Mac Studioを特に欲しいなら、発売まで待つ必要があります。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Mac Studio M5は2026年5月時点で販売されていません。M5の仕様を期待してプレミアムを払わないでください——今日70Bデスクトップが必要なら、M4 Max Mac Studioが現在出荷中で、70Bモデルを動かせることが検証済みです。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-studio/',
            productName: 'Apple Mac Studio M4 Max 128GB',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'AppleでMac Studioの価格を確認',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M4+Max',
            productName: 'Apple Mac Studio M4 Max',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: 'AmazonでMac Studioの価格を確認',
          },
        ],
      },
      memoryNeeds: {
        id: 'memory-needs',
        title: 'unified memoryはどれくらい必要か？',
        content:
          '**Q4_K_M量子化では、モデルはパラメータ10億あたり約0.6GBのunified memoryに加え、コンテキストとツール用に2-4GBを必要とします——そしてMacではそのメモリはmacOS自体とも共有されます。** OS用に余裕を残してください：16GBのMacは16GBのモデル予算ではありません。',
        items: [
          '**8Bモデル——8-9GB：** 16GB以上のあらゆるMacに収まります。32GBのMacなら快適な余裕が残ります。',
          '**13-14Bモデル——11-13GB：** macOSとコンテキストのオーバーヘッドを数えると32GBが必要です。Mac mini 32GB以上。',
          '**34Bモデル——21-25GB：** 実際には64GBが必要です。ここではMac mini M5 Pro 64GBがコスパの選択肢です。',
          '**Q4の70Bモデル——39-42GB：** 最低64GBが必要で、コンテキストを加えると64GBは厳しくなります。MacBook Pro M5 Max 64GBが下限です。',
          '**Q5の70Bモデルまたは同時実行モデル——50-70GB以上：** 128GBが必要です。MacBook Pro M5 Max 128GBまたは128GBのMac Studio。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Siliconのメモリは直付けされており、アップグレードできません。現在の必要量より1段階上を買ってください：今日34Bモデルを動かすなら、64GBは下限であって快適な選択ではありません。完全な方法は、関連記事のunified memoryガイドを参照してください。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '判断フローチャート：4つの質問でMacを選ぶ',
        content:
          '**4つの質問を順番に答えれば、大半の購入者は1台のMacに行き着きます。**',
        items: [
          '**1. 動かしたい最大のモデルは何ですか？** 8-13B：Mac mini 32-64GB。34B：Mac mini M5 Pro 64GB。70B Q4：MacBook Pro M5 Max 64GB。70B Q5または同時実行：128GBのMacBook ProまたはMac Studio。',
          '**2. マシンは動く必要がありますか？** はい：MacBook Pro 16" M5 Max。いいえ：Mac mini（34Bまで）またはMac Studio（70B）。',
          '**3. 常時稼働サーバーですか？** はい：Mac mini M5 Pro 64GB——静音、25-55W、24時間365日稼働で最も安価。いいえ：上記のモデルサイズで選んでください。',
          '**4. マシンが今日必要ですか？** 今70Bデスクトップが欲しいなら、M4 Max Mac Studioを買ってください——M5 Mac Studioは未発売で、2026年後半にのみ予想されています。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ローカルAI向けのMacは、まず最大のモデルサイズ、次にポータビリティ、3番目に常時稼働サーバーとしての用途、最後に入手性に答えることで選びます。',
          },
          {
            type: 'plain-terms',
            text: '実際に動かしたい最大のモデルから始め、それに必要なメモリを決めさせてください。次に、それが移動する必要があるか、24時間稼働するか、M5 Mac Studioを待てるかを判断します。この順序で進めることが、自分のモデルが収まらないMacを買ってしまうのを避ける方法です。',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '購入先',
        content:
          '**Appleはあらゆる構成を直接販売しています；Amazonやその他の小売店は一般的な構成を在庫し、Appleの定価を下回ることもあります。** 以下のリンクは単なる製品検索リンクであり、アフィリエイトタグは付いておらず、コミッションを得ません。',
        items: [
          '**Apple Store（apple.com）：** 受注生産を含む、あらゆるメモリとストレージの構成の唯一の入手先。標準外の構成が欲しい場合に必要です。',
          '**Amazon：** Mac miniとMacBook Proの人気の固定構成を在庫し、Appleの定価を下回って割引されることもあります。大容量メモリの受注生産構成の品揃えは限られます。',
          '**Apple認定整備済製品：** 前世代のMac（M4 Max Mac Studio、より古いMacBook Pro）を割引価格でフル保証付きで——今日70Bデスクトップを得る賢明な選択肢です。',
          '**家電量販店および正規販売店：** 一般的な構成を扱い、時にAppleの価格を下回ります；MacBook Pro 16" M5 Maxに有用です。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Appleは2026年、GPUを直撃したのと同じメモリ不足を受けて構成メモリの価格を引き上げました。ここの円の数値は2026年5月時点のスナップショットです——購入前に現在のApple Storeの掲載を開き、必要なメモリのアップグレードが変動していないか確認してください。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/shop/buy-mac',
            productName: 'Macs for local AI (Apple Store)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'AppleでMacを見る',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+for+local+AI',
            productName: 'Macs for local AI (Amazon)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: 'AmazonでMacを見る',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ローカルAI向けMacを買うときのよくある間違い',
        items: [
          '**unified memoryではなくチップ名で買う。** メモリが少なすぎる高速なM5 Maxは、あなたのモデルを収められません。まずモデルが2-4GBの余裕とともにunified memoryに収まることを確認し、それから帯域幅を比較してください。',
          '**AI作業に16GBのMacを買う。** 16GBは7Bモデルで頭打ちになり、macOSと共有されます。本格的なAIマシンには64GBが実用的な下限です。',
          '**Apple Siliconのメモリがアップグレードできないことを忘れる。** メモリは直付けされています。少なく買ってしまうと唯一の解決策は新しいMacです——今日の必要より1段階上の容量にしてください。',
          '**M5 Mac Studioが入手可能だと思い込む。** 2026年5月時点で未発売です。掲載がM5 Mac Studioの仕様を約束していたら、それは予測として扱ってください——M4 Max Mac Studioを買うか待ってください。',
          '**デスクに固定の24時間365日サーバーにMacBook Proを買う。** 持続負荷でスロットリングします。常時稼働サーバーには、Mac mini M5 ProかMac Studioのほうが冷えて静かに動きます。',
          '**8Bモデルのためにオーバースペックを買う。** 8Bモデルでユースケースが足りるなら、128GBのMacは無駄な出費です。たまたまある予算ではなく、モデルにメモリ帯を合わせてください。',
          '**昨年のApple価格を基準にする。** Appleは2026年に構成メモリの価格を引き上げました——記憶している数値ではなく、現在のApple Storeの価格に対して予算を組んでください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Apple Mac mini 技術仕様](https://www.apple.com/mac-mini/specs/) — Mac mini M5ラインのunified memory、チップ、消費電力の公式数値。',
          '[Apple MacBook Pro 技術仕様](https://www.apple.com/macbook-pro/specs/) — M5 Maxのunified memory、GPUコア、メモリ帯域幅の公式数値。',
          '[Apple Mac Studio](https://www.apple.com/mac-studio/) — 現在のMac Studioラインアップと構成オプション（2026年5月時点でM4 Max世代）。',
          '[M5 Pro vs M5 Max LLMベンチマーク 2026](/ja/local-llms/m5-pro-max-llm-benchmarks-2026) — PromptQuorumのハードウェアテスト：M5 ProとM5 Maxでの8Bおよび70Bモデルの実測tokens per second。',
          '[ローカルAIサーバーとしてのMac mini M5](/ja/local-llms/mac-mini-m5-local-ai-server) — PromptQuorumのテスト：Mac mini M5 Proの消費電力、電気代、常時稼働サーバー性能。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'ローカルLLMをうまく動かせる最も安いMacは何ですか？',
            a: '約¥184,800のMac mini M5 Pro 64GBが、ローカルLLMをうまく動かせる最も安いMacです。64GBのunified memoryはQ4量子化で34Bまでのあらゆるモデルを収め、8Bモデルを毎秒50-60トークンで動かし、消費電力はわずか25-55Wです。16GBと32GBのMac miniモデルはより安価ですが、すぐに足りなくなります——64GBが本格的なAI利用の実用的な下限です。',
          },
          {
            q: 'Mac Studio M5はもう入手できますか？',
            a: 'いいえ。2026年5月時点でM5 Mac Studioは未発売で、Appleは仕様も価格も発表していません。目にするM5 Mac Studioの数値はすべて予測です。今日70BのデスクトップMacが必要なら、M4 Max Mac Studioが現在出荷中で、70Bモデルを動かせることが検証済みです；そうでなければ、M5 Mac Studioは2026年後半に予想されています。',
          },
          {
            q: 'MacでローカルLLMを動かすにはunified memoryがどれくらい必要ですか？',
            a: 'Q4_K_M量子化では、パラメータ10億あたり約0.6GBに加えて2-4GBのオーバーヘッドを見込み、macOSが同じプールを共有することを忘れないでください。これは8Bモデルで約8-9GB、34Bで21-25GB、70Bで39-42GBを意味します。64GBのMacは34Bを余裕で動かし、70B Q4はぎりぎり収まります；70B Q5や複数モデルの実行には128GBが必要です。',
          },
          {
            q: 'ローカルAIにはMac miniとMacBook Proのどちらですか？',
            a: 'マシンがデスクに留まり34Bモデルが上限なら、Mac mini M5 Proを選んでください——はるかに安く、静音で、常時稼働サーバーとして理想的です。70Bモデルを動かす必要があるか、マシンを持ち運ぶ必要があるなら、MacBook Pro 16" M5 Maxを選んでください。MacBook Proは70Bを動かせる唯一の出荷中Macですが、持続負荷でスロットリングします。',
          },
          {
            q: 'Macは70Bモデルを動かせますか？',
            a: 'はい。64GBのMacBook Pro 16" M5 MaxはLlama 3.3 70B Q4を毎秒7-11トークンで動かし、128GB版は70B Q5を毎秒8-12トークンで動かします。128GBのMac Studioも70Bを余裕で動かします。Mac mini M5 Proはできません——macOSのオーバーヘッドを数えると64GBは70Bには厳しすぎます。',
          },
          {
            q: 'ローカルLLMではMacはNVIDIA GPUより速いですか？',
            a: 'いいえ、小さなモデルの生の速度ではそうではありません——デスクトップのRTXカードは7B-13Bモデルでより多くのtokens per secondを生成します。Macの利点は容量と効率です：128GBのMacは24-32GBのRTXカードが収められない70Bモデルを収め、しかも300-450Wに対して60-100Wで静かにそれを行います。生の速度ではなく、容量、静音性、低い運用コストのためにMacを買ってください。',
          },
          {
            q: '後でMacのメモリをアップグレードできますか？',
            a: 'いいえ。Apple Siliconのunified memoryはチップパッケージに直付けされており、購入後に変更できません。買ったメモリはマシンの寿命を通じて恒久的な構成です。今日だけでなく、今後2〜3年で動かすと予想する最大のモデルに合わせて容量を決めてください。',
          },
          {
            q: 'MacをAIサーバーとして運用するのにいくらかかりますか？',
            a: 'ごくわずかです。Mac mini M5 ProはLLM負荷時に25-55Wを消費し、アイドル時は約8Wです。1年間まるごと24時間365日稼働させても電気代は約¥4,000-6,000——一般的なクラウドAIサブスクリプションの1か月分より安く済みます。この低い運用コストが、Mac miniが常時稼働サーバーのコスパの選択肢である中心的な理由です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[M5 Pro vs M5 Maxのベンチマーク一式を見る](/ja/local-llms/m5-pro-max-llm-benchmarks-2026) — 本ガイドの数値の裏にある、実測のtokens per second、最初のトークンまでの時間、消費電力。',
          '[Mac mini M5を常時稼働AIサーバーとしてセットアップする](/ja/local-llms/mac-mini-m5-local-ai-server) — サーバー構築の全工程、電気代の分析、24時間365日の信頼性テスト。',
          '[Apple SiliconをMシリーズ全体で比較する](/ja/local-llms/apple-silicon-local-llm-guide-2026) — M1からM5 Maxまでがunified memoryと帯域幅でどう比較されるか。',
          '[各モデルサイズに必要なunified memoryを計算する](/ja/local-llms/how-much-unified-memory-for-local-llm) — ここでの簡易式の裏にある、モデルサイズ別の完全な方法。',
          '[Apple SiliconとNVIDIA GPUをローカルLLMで比較する](/ja/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Macが容量で勝つのはいつか、NVIDIAカードが生の速度で勝つのはいつか。',
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
    title: '2026 年最适合本地 AI 的 Mac：Mac mini vs Mac Studio vs MacBook Pro',
    seoTitle: '2026 年最适合本地 AI 的 Mac：mini vs Studio vs MBP',
    intro:
      '大多数关于「Mac 跑 AI」的建议都盯着芯片型号，但真正决定选择的数字是统一内存。在 Apple Silicon 上，模型与其他一切共用同一个内存池，因此一台 64 GB 的 Mac mini 能跑 34B 模型，而一台速度更快但只有 24 GB 的 MacBook Pro 却装不下。本指南从决定购买的几个数字——统一内存、内存带宽、实测的每秒 token 数和价格——比较三台用于运行本地 LLM 的 Mac：作为常开服务器的 Mac mini M5 Pro、作为便携工作站的 MacBook Pro 16" M5 Max，以及作为桌面选择的 Mac Studio。关于价格有一点提醒：Apple 在 2026 年因同一波冲击 GPU 的内存短缺而上调了配置内存的价格，因此这里的每个价格都是 2026 年 5 月的快照。关于供货还有一点提醒：Mac Studio M5 尚未发布——下文的规格和价格都是预测，并已明确标注。',
    metaDescription:
      '三台 Mac 对比本地 LLM：Mac mini M5 Pro、MacBook Pro 16" M5 Max、Mac Studio。统一内存、token/秒、功耗，以及按模型规模划分的 2026 年 5 月价格。',
    twitterDescription:
      'Mac mini M5 Pro vs MacBook Pro 16" M5 Max vs Mac Studio 跑本地 AI——三台 Mac，一条决策规则：先按统一内存买，再优化带宽。2026 年 5 月价格。',
    affiliateDisclosure: true,
    current_models_mentioned: [
      'Llama 3.3 8B',
      'Llama 3.3 34B',
      'Llama 3.3 70B',
      'Mistral Small',
      'Qwen 3 32B',
    ],
    current_hardware_mentioned: [
      'Apple Mac Mini M5 Pro',
      'Apple MacBook Pro 16" M5 Max',
      'Apple Mac Studio M4 Max',
      'Apple Mac Studio M5 Max (unreleased)',
      'Apple M5 Pro',
      'Apple M5 Max',
    ],
    audience:
      '专门为运行本地 LLM 而挑选 Mac 的购买者，正在常开的 Mac mini 服务器、便携的 MacBook Pro 和桌面的 Mac Studio 之间做决定。假设读者熟悉量化以及作为约束条件的统一内存，但不熟悉当前的 Mac 型号。',
    readTime: '阅读约 13 分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: '用于本地 AI 的 Mac',
    targetKeywords: [
      '2026 最适合本地 ai 的 mac',
      'mac mini vs mac studio 本地 llm',
      'macbook pro m5 max 本地 llm',
      '本地 llm 需要多少统一内存',
      '运行本地 llm 的 mac',
    ],
    leadAnswerBlock:
      '**最适合本地 AI 的 Mac，是统一内存能装下你模型的那一台。64 GB 的 Mac mini M5 Pro 能跑 34B 模型，64 GB 的 MacBook Pro 16" M5 Max 能便携地跑 70B 模型，128 GB 的 Mac Studio 是以更高质量跑 70B 的桌面选择——不过 M5 版 Mac Studio 尚未发布。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年运行本地 LLM 应该买哪台 Mac？',
        answer:
          '先按统一内存买，再看带宽。Mac mini M5 Pro 64 GB（约 $1,199）是性价比之选，作为常开服务器静音运行 34B 模型。MacBook Pro 16" M5 Max 64 GB（约 $3,499）是便携之选，能跑 70B 模型。128 GB 的 Mac Studio 是以 Q5 跑 70B 的桌面之选，但 M5 版 Mac Studio 尚未发布——M4 Max Mac Studio 目前在售，是可用的替代方案。',
        bullets: [
          '性价比 / 常开服务器：Mac mini M5 Pro 64 GB，约 $1,199，以 15-25 tok/s 运行 34B 模型',
          '便携：MacBook Pro 16" M5 Max 64 GB，约 $3,499，以 7-11 tok/s 运行 70B Q4',
          '桌面 70B：128 GB Mac Studio——M5 版尚未发布（预计 2026 年底）；M4 Max 目前在售',
          'Apple Silicon 的内存购买后无法升级——一开始就买够你需要的容量',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: '要点', anchor: '#key-takeaways' },
      { label: '速览', anchor: '#quick-facts' },
      { label: '编辑推荐', anchor: '#editors-choice' },
      { label: 'Mac 对比表', anchor: '#comparison-table' },
      { label: '你应该买哪台 Mac？', anchor: '#which-mac' },
      { label: 'Mac mini M5 Pro：服务器', anchor: '#mac-mini' },
      { label: 'MacBook Pro 16" M5 Max：便携之选', anchor: '#macbook-pro' },
      { label: 'Mac Studio：桌面之选', anchor: '#mac-studio' },
      { label: '你需要多少统一内存？', anchor: '#memory-needs' },
      { label: '决策流程图', anchor: '#decision-flowchart' },
      { label: '购买渠道', anchor: '#where-to-buy' },
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
          '**统一内存是决定性约束。** 在 Apple Silicon 上，模型与系统共用一个内存池——装不进统一内存的模型根本无法运行。先选统一内存匹配目标模型的 Mac，再针对带宽和外形优化。',
          '**内存购买后无法升级。** Apple Silicon 的统一内存是焊死的。你买到的就是永久配置——按两年后想跑的模型来确定容量，而不是只看当下。',
          '**性价比 / 服务器之选：Mac mini M5 Pro 64 GB（约 $1,199）** ——静音，满载 25-55 W，每年电费约 $26-39，64 GB 可跑 34B 模型。这是进入 Apple Silicon 本地 AI 的最便宜的认真选择。',
          '**便携之选：MacBook Pro 16" M5 Max 64 GB（约 $3,499）** ——唯一在售的 M5 Max 机型，460 GB/s 带宽，以 7-11 tok/s 运行 70B Q4。为了便携而接受持续负载下 10-15% 的热降频。',
          '**桌面 70B 之选：128 GB Mac Studio** ——614 GB/s 带宽可以 Q5 运行 70B。M5 版 Mac Studio 尚未发布（预计 2026 年底）；M4 Max Mac Studio 目前在售，是可用的替代方案。',
          '**决定速度的是带宽，不是芯片名称。** 460-614 GB/s 的 M5 Max 在同一模型上生成的每秒 token 数约为 307 GB/s 的 M5 Pro 的两倍。',
          '**Apple Silicon 用原始速度换取容量与安静。** 桌面 RTX GPU 在 7B-13B 模型上更快，但其 24-32 GB 显存装不下 128 GB Mac 能从容运行的 70B 模型。',
          '**整条产品线的功耗都很低。** Mac mini 在 LLM 负载下功耗 25-55 W，M5 Max 为 60-100 W——而做同等工作的桌面 RTX 显卡需要 300-450 W。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '速览',
        items: [
          '**服务器级（约 $999-1,399）：** Mac mini M5 Pro 64 GB——静音、常开，最高可跑 34B 模型。',
          '**便携级（约 $3,499-4,499）：** MacBook Pro 16" M5 Max 64-128 GB——可在移动中跑 70B 模型。',
          '**桌面级（约 $2,000+）：** 128 GB Mac Studio——可以 Q5 跑 70B；M5 版尚未发布，M4 Max 现已在售。',
          '**Q4_K_M 下的统一内存经验法则：** 每十亿参数约 0.6 GB，再加上 2-4 GB 用于上下文和工具链。',
          '**内存带宽：** M5 Pro 307 GB/s，M5 Max 460 GB/s（64 GB）到 614 GB/s（128 GB）——速度随带宽提升。',
          '**功耗范围：** Mac mini M5 Pro 25-55 W，MacBook Pro M5 Max 60-100 W（LLM 负载下）。',
          '**2026 年价格现实：** Apple 因内存短缺上调了配置内存的价格——购买前请确认当前 Apple Store 的价格。',
        ],
      },
      editorsChoice: {
        id: 'editors-choice',
        title: '编辑推荐：Mac mini M5 Pro 64 GB',
        sponsoredSlot: true,
        content:
          '**对于大多数专门为本地 AI 挑选 Mac 的购买者来说，配备 64 GB 统一内存的 Mac mini M5 Pro 是在能力、价格和运行成本之间取得平衡的选择。** 它的 64 GB 能装下最高 34B 的所有模型并留有上下文余量，运行静音，推理负载下功耗仅 25-55 W，约 $1,199 的价格是进入 Apple Silicon 本地 AI 的最便宜的认真选择。它也是理想的家用或办公常开 AI 服务器。只有当你需要便携性或 70B 模型时，才升级到 MacBook Pro 16" M5 Max；只有当你需要在桌面以更高质量跑 70B 时，才升级到 128 GB Mac Studio。M5 版 Mac Studio 尚未发布，因此今天就想要 70B 桌面机的购买者必须选择 M4 Max Mac Studio 或等待。',
        callouts: [
          {
            type: 'note',
            text: '此编辑推荐仅反映价格与能力之比。PromptQuorum 未加入任何联盟营销计划，下方链接不含任何联盟标签——它们只是普通参考链接，不赚取任何佣金。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: '在 Apple 查看 Mac mini M5 Pro 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5+Pro',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '999-1399',
            label: '在 Amazon 查看 Mac mini M5 Pro 价格',
          },
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '2026 年三台 Mac 在本地 AI 上的对比',
        content:
          '内存和带宽数字为 Apple 官方规格。推理速度是 PromptQuorum 在 M5 Pro 和 M5 Max 上进行 Apple Silicon 测试得到的 8B 和 70B Q4 实测值；Mac Studio M5 的数字为预测，因为该型号尚未发布。价格为 2026 年 5 月的美国快照——Apple 在 2026 年上调了配置内存的价格，因此购买前请确认当前 Apple Store 的价格。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '对于运行本地 LLM 的 Mac，统一内存决定你能加载哪些模型，内存带宽决定它们回答多快——先按前者买，再优化后者。',
          },
          {
            type: 'plain-terms',
            text: '把统一内存想象成一张模型、应用和系统共用的桌子。带宽更高的芯片清理桌子更快，但如果模型根本放不上桌子，速度就毫无意义。先选桌子足够大的 Mac。',
          },
        ],
        columns: ['Mac', '统一内存', '带宽', '速度（8B Q4）', '速度（70B Q4）', '价格（2026 年 5 月）', '最适合'],
        rows: [
          {
            'Mac': '[Mac mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)',
            '统一内存': '64 GB',
            '带宽': '307 GB/s',
            '速度（8B Q4）': '50-60 tok/s',
            '速度（70B Q4）': '8-12 tok/s',
            '价格（2026 年 5 月）': '约 $1,199',
            '最适合': '静音常开服务器，34B 模型',
          },
          {
            'Mac': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)',
            '统一内存': '64 GB',
            '带宽': '460 GB/s',
            '速度（8B Q4）': '约 100-110 tok/s',
            '速度（70B Q4）': '7-11 tok/s',
            '价格（2026 年 5 月）': '约 $3,499',
            '最适合': '便携 70B 工作站',
          },
          {
            'Mac': 'MacBook Pro 16" M5 Max 128 GB',
            '统一内存': '128 GB',
            '带宽': '614 GB/s',
            '速度（8B Q4）': '约 110-120 tok/s',
            '速度（70B Q4）': '12-16 tok/s',
            '价格（2026 年 5 月）': '约 $4,499',
            '最适合': '便携 70B Q5，多模型',
          },
          {
            'Mac': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)',
            '统一内存': '128 GB',
            '带宽': '约 410-546 GB/s',
            '速度（8B Q4）': '系列级估算',
            '速度（70B Q4）': '系列级估算',
            '价格（2026 年 5 月）': '约 $2,000+（配置后）',
            '最适合': '桌面 70B，今日可购',
          },
          {
            'Mac': 'Mac Studio M5 Max 128 GB (unreleased)',
            '统一内存': '128 GB（预测）',
            '带宽': '614 GB/s（预测）',
            '速度（8B Q4）': '尚无法测量',
            '速度（70B Q4）': '尚无法测量',
            '价格（2026 年 5 月）': '未公布',
            '最适合': '预计 2026 年底——尚未发售',
          },
        ],
      },
      whichMac: {
        id: 'which-mac',
        title: '你应该买哪台 Mac？',
        content:
          '**你最大的目标模型和外形决定选哪台 Mac；你的预算决定其中的内存档位。** 找到与你情况匹配的那一行。',
        columns: ['你的情况', '买这台'],
        rows: [
          { '你的情况': '我想要一台用于家庭或办公的静音常开 AI 服务器', '买这台': '[Mac mini M5 Pro 64 GB](https://www.apple.com/mac-mini/)' },
          { '你的情况': '我跑 8B-13B 模型，想要最便宜又够用的 Mac', '买这台': 'Mac mini M5 Pro（32-64 GB）' },
          { '你的情况': '我在桌面上跑 34B 模型，看重低运行成本', '买这台': 'Mac mini M5 Pro 64 GB' },
          { '你的情况': '我需要运行 70B 模型并随机器移动', '买这台': '[MacBook Pro 16" M5 Max 64 GB](https://www.apple.com/macbook-pro/)' },
          { '你的情况': '我想要 Q5 质量的 70B 并同时运行多个模型', '买这台': 'MacBook Pro 16" M5 Max 128 GB' },
          { '你的情况': '我想要一台 70B 桌面机，并且今天就买', '买这台': '[Mac Studio M4 Max 128 GB](https://www.apple.com/mac-studio/)' },
          { '你的情况': '我就是想要 M5 版 Mac Studio', '买这台': '等待——预计 2026 年底，尚未发布' },
          { '你的情况': '我拿不定主意，想要最稳妥的第一台本地 AI Mac', '买这台': 'Mac mini M5 Pro 64 GB——不够用时再升级' },
        ],
      },
      macMini: {
        id: 'mac-mini',
        title: 'Mac mini M5 Pro：静音常开服务器',
        content:
          '**Mac mini M5 Pro 是性价比之选，也是用作常开本地 AI 服务器的最佳 Mac——静音、低功耗，最高可跑 34B 模型。** 对于大多数首次接触 Apple Silicon AI 的用户来说，64 GB 配置就是他们所需的全部能力，而 25-55 W 的功耗让 7×24 小时运行变得便宜。',
        items: [
          '**Mac mini M5（基础款，约 $599，16 GB）：** 只能以 Q4 跑 7B 模型。对轻度单用户对话够用，但 16 GB 对认真的 AI 机器来说太小——AI 用途请跳过。',
          '**Mac mini M5（约 $799，32 GB）：** 可以 Q4 处理最高 13B 的模型。如果你只跑小模型，这是合理的入门，但 32 GB 很快就会不够用。',
          '**Mac mini M5 Pro 64 GB（约 $1,199）：** 推荐之选。307 GB/s 带宽，以 50-60 tok/s 跑 8B 模型，以 15-25 tok/s 跑 34B 模型。内存足以同时运行一个 LLM、Whisper 语音转文字和一条 RAG 流水线。',
          '**为什么买这台 Mac：** 进入 Apple Silicon AI 的最低成本、静音运行、25-55 W 功耗（每年电费约 $26-39），以及约 12.7×12.7 厘米的占地面积，可作为服务器塞进柜子。',
          '**为什么跳过这台 Mac：** 它装不下 70B 模型，也不便携。如果 70B 是你的目标，请改选 MacBook Pro M5 Max 或 128 GB 的 Mac Studio。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '买 64 GB 的 M5 Pro，而不是 32 GB 的 M5。多出的内存是「止步于 13B 模型」与「从容运行 34B 模型」的区别——而且 Apple Silicon 的内存以后无法添加。',
          },
          {
            type: 'note',
            text: 'Mac mini M5 Pro 是出色的无头 AI 服务器：安装 Ollama，把 API 暴露在局域网上，家里的每台设备都能使用它。让它 7×24 小时运行一整年的成本，比一个月的云端对话订阅还低。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-mini/',
            productName: 'Apple Mac Mini M5 Pro 64GB',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: '在 Apple 查看 Mac mini M5 Pro 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Mini+M5',
            productName: 'Apple Mac Mini M5',
            productCategory: 'mac',
            priceRange: '599-1399',
            label: '在 Amazon 查看 Mac mini M5 价格',
          },
        ],
      },
      macbookPro: {
        id: 'macbook-pro',
        title: 'MacBook Pro 16" M5 Max：便携 70B 工作站',
        content:
          '**MacBook Pro 16" M5 Max 是唯一在售且能跑 70B 模型的 Mac，而且它以便携外形做到这一点。** 它适合需要 70B 级模型并想随身携带机器的购买者。代价是持续推理下 10-15% 的热降频，以及比同芯片桌面机更高的价格。',
        items: [
          '**MacBook Pro 16" M5 Max 64 GB（约 $3,499）：** 32 核 GPU，460 GB/s 带宽。以约 100-110 tok/s 跑 8B 模型，以 7-11 tok/s 跑 Llama 3.3 70B Q4。这是进入本地 70B AI 的便携入口。',
          '**MacBook Pro 16" M5 Max 128 GB（约 $4,499）：** 40 核 GPU，614 GB/s 带宽。可以 Q5（更高质量）跑 70B，并支持同时运行两个模型——例如一个 70B 模型加一个 13B 模型。',
          '**为什么买这台 Mac：** 你需要 70B 模型且要便携，你想要一台机器同时用于创意工作和 AI，或者你经常演示和出差，无法把桌面机留在原地。',
          '**为什么跳过这台 Mac：** 如果机器从不离开桌面，同样内存的 Mac Studio 更便宜也更凉快；如果 34B 模型就够用，Mac mini M5 Pro 能省下 $2,000 以上。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'MacBook Pro 16" M5 Max 在机身发热后，持续推理时会降频约 10-15%——通常在连续负载几小时后。对于 7×24 小时推理，Mac Studio 是更合适的工具；对于便携式的 70B 工作短时爆发，MacBook Pro 没问题。',
          },
          {
            type: 'note',
            text: '64 GB 和 128 GB 的 MacBook Pro M5 Max 共用同一芯片系列。128 GB 版本买到的是容量——Q5 的 70B 和并行模型——以及更高带宽，而不是另一类机器。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/macbook-pro/',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: '在 Apple 查看 MacBook Pro 16" M5 Max 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+16+M5+Max',
            productName: 'Apple MacBook Pro 16" M5 Max',
            productCategory: 'mac',
            priceRange: '3499-4499',
            label: '在 Amazon 查看 MacBook Pro 16" M5 Max 价格',
          },
        ],
      },
      macStudio: {
        id: 'mac-studio',
        title: 'Mac Studio：70B 的桌面选择',
        content:
          '**Mac Studio 是运行 70B 模型的桌面之选——但 M5 版 Mac Studio 尚未发布，所以今天的购买者要么选 M4 Max 版本，要么等待。** 128 GB 的 Mac Studio 能以 Q5 质量跑 70B，并在持续负载下比 MacBook Pro 更安静，因为桌面机身没有笔记本的散热上限。',
        items: [
          '**Mac Studio M4 Max 128 GB（约 $2,000+，配置后，今日可购）：** 当前在售的选择。它能跑 70B 模型，如果你想现在就要一台 70B 桌面机、不想等 M5 换代，它就是正确的选择。',
          '**Mac Studio M5 Max（尚未发布——预计 2026 年底）：** Apple 尚未发布 M5 Mac Studio。你看到的任何 M5 Mac Studio 规格或价格都是预测。基于 MacBook Pro 中的 M5 Max 芯片，一个合理的预期是 128 GB 统一内存、约 614 GB/s 带宽——但这未经证实，也没有价格。',
          '**为什么买 Mac Studio：** 你想要一台 70B 桌面机，你想要比 MacBook Pro 更安静的持续运行，或者你想要一台没有笔记本电池和散热限制的共享桌面 AI 服务器。',
          '**为什么跳过 Mac Studio：** 如果你需要便携性，请买 MacBook Pro M5 Max；如果 34B 模型就够用，Mac mini M5 Pro 便宜得多；如果你就是想要 M5 版 Mac Studio，你必须等它发布。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '截至 2026 年 5 月，Mac Studio M5 尚未发售。不要因期待 M5 规格而支付溢价——如果你今天就需要 70B 桌面机，M4 Max Mac Studio 现已在售，且已验证可运行 70B 模型。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/mac-studio/',
            productName: 'Apple Mac Studio M4 Max 128GB',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: '在 Apple 查看 Mac Studio 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M4+Max',
            productName: 'Apple Mac Studio M4 Max',
            productCategory: 'mac',
            priceRange: '2000-4000',
            label: '在 Amazon 查看 Mac Studio 价格',
          },
        ],
      },
      memoryNeeds: {
        id: 'memory-needs',
        title: '你需要多少统一内存？',
        content:
          '**在 Q4_K_M 量化下，一个模型每十亿参数大约需要 0.6 GB 统一内存，再加上 2-4 GB 用于上下文和工具链——而在 Mac 上，这块内存还要与 macOS 本身共用。** 给操作系统留出余量：一台 16 GB 的 Mac 并不等于 16 GB 的模型预算。',
        items: [
          '**8B 模型——8-9 GB：** 适用于任何 16 GB 或以上的 Mac。32 GB 的 Mac 留有宽裕余量。',
          '**13-14B 模型——11-13 GB：** 计入 macOS 和上下文开销后需要 32 GB。Mac mini 32 GB 及以上。',
          '**34B 模型——21-25 GB：** 实际需要 64 GB。Mac mini M5 Pro 64 GB 在这一档是性价比之选。',
          '**Q4 的 70B 模型——39-42 GB：** 至少需要 64 GB，而加上上下文后 64 GB 会很紧。MacBook Pro M5 Max 64 GB 是底线。',
          '**Q5 的 70B 模型或并行模型——50-70 GB+：** 需要 128 GB。MacBook Pro M5 Max 128 GB 或一台 128 GB 的 Mac Studio。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Apple Silicon 的内存是焊死的，无法升级。买比当前需求高一档：如果你今天跑 34B 模型，64 GB 是底线，而不是从容的选择。完整方法请参见延伸阅读中的统一内存指南。',
          },
        ],
      },
      decisionFlowchart: {
        id: 'decision-flowchart',
        title: '决策流程图：四个问题选出你的 Mac',
        content:
          '**按顺序回答四个问题，大多数购买者都会被引导到一台 Mac。**',
        items: [
          '**1. 你想运行的最大模型是什么？** 8-13B：Mac mini 32-64 GB。34B：Mac mini M5 Pro 64 GB。70B Q4：MacBook Pro M5 Max 64 GB。70B Q5 或并行：128 GB 的 MacBook Pro 或 Mac Studio。',
          '**2. 机器需要移动吗？** 需要：MacBook Pro 16" M5 Max。不需要：Mac mini（最高 34B）或 Mac Studio（70B）。',
          '**3. 它是常开服务器吗？** 是：Mac mini M5 Pro 64 GB——静音、25-55 W、7×24 小时运行最便宜。否：按上面的模型规模选择。',
          '**4. 你今天就需要这台机器吗？** 如果你现在就想要 70B 桌面机，请买 M4 Max Mac Studio——M5 版 Mac Studio 尚未发布，预计要到 2026 年底。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '为本地 AI 选 Mac，先回答最大模型规模，其次便携性，再次常开服务器用途，最后回答供货情况。',
          },
          {
            type: 'plain-terms',
            text: '从你真正想运行的最大模型开始，让它决定所需内存。然后判断它是否需要随身携带、是否全天候运行、你能否等 M5 版 Mac Studio。按这个顺序来，正是人们避免买到装不下自己模型的 Mac 的方法。',
          },
        ],
      },
      whereToBuy: {
        id: 'where-to-buy',
        title: '购买渠道',
        content:
          '**Apple 直接销售每一种配置；Amazon 和其他零售商备有常见配置，有时低于 Apple 标价。** 下方链接是普通的产品搜索链接；它们不含联盟标签，也不赚取佣金。',
        items: [
          '**Apple Store（apple.com）：** 唯一能买到每一种内存和存储配置的渠道，包括定制订购。如果你想要非标准配置，必须走这里。',
          '**Amazon：** 备有 Mac mini 和 MacBook Pro 的热门固定配置，有时折价低于 Apple 标价。大内存定制订购配置的选择有限。',
          '**Apple 翻新机：** 上一代 Mac（M4 Max Mac Studio、更早的 MacBook Pro）以折扣价出售并提供完整保修——对今天想要 70B 桌面机来说是明智的选择。',
          '**授权经销商和专业零售商：** 备有常见配置，偶尔比 Apple 价格更低；对 MacBook Pro 16" M5 Max 很有用。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Apple 在 2026 年因同一波冲击 GPU 的内存短缺而上调了配置内存的价格。这里的美元数字是 2026 年 5 月的快照——购买前请打开当前的 Apple Store 页面，并查看你需要的内存升级是否有变动。',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.apple.com/shop/buy-mac',
            productName: 'Macs for local AI (Apple Store)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: '在 Apple 浏览 Mac',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+for+local+AI',
            productName: 'Macs for local AI (Amazon)',
            productCategory: 'mac',
            priceRange: '599-4499',
            label: '在 Amazon 浏览 Mac',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '购买本地 AI Mac 时的常见错误',
        items: [
          '**按芯片名称而不是统一内存来买。** 一颗更快但内存太少的 M5 Max 装不下你的模型。先确认模型能装进统一内存并留有 2-4 GB 余量，再比较带宽。',
          '**为 AI 工作买 16 GB 的 Mac。** 16 GB 止步于 7B 模型，而且要与 macOS 共用。对认真的 AI 机器来说，64 GB 是实际底线。',
          '**忘记 Apple Silicon 的内存无法升级。** 内存是焊死的。买少了，唯一的补救就是换一台新 Mac——按比今天需求高一档来配置。',
          '**以为 M5 版 Mac Studio 已经上市。** 截至 2026 年 5 月它尚未发布。如果某个商品页面承诺 M5 Mac Studio 规格，请把它当作预测——买 M4 Max Mac Studio 或等待。',
          '**为固定在桌面的 7×24 小时服务器买 MacBook Pro。** 它在持续负载下会降频。对于常开服务器，Mac mini M5 Pro 或 Mac Studio 更凉快也更安静。',
          '**为 8B 模型买过头。** 如果 8B 模型覆盖你的使用场景，128 GB 的 Mac 是浪费钱。把内存档位匹配模型，而不是匹配你恰好有的预算。',
          '**锚定去年的 Apple 价格。** Apple 在 2026 年上调了配置内存的价格——按当前 Apple Store 的实时价格做预算，而不是凭记忆中的数字。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[Apple Mac mini 技术规格](https://www.apple.com/mac-mini/specs/) — Mac mini M5 系列的统一内存、芯片和功耗官方数据。',
          '[Apple MacBook Pro 技术规格](https://www.apple.com/macbook-pro/specs/) — M5 Max 的统一内存、GPU 核心数和内存带宽官方数据。',
          '[Apple Mac Studio](https://www.apple.com/mac-studio/) — 当前 Mac Studio 产品线和配置选项（截至 2026 年 5 月为 M4 Max 一代）。',
          '[M5 Pro vs M5 Max LLM 基准测试 2026](/zh/local-llms/m5-pro-max-llm-benchmarks-2026) — PromptQuorum 硬件测试：M5 Pro 和 M5 Max 上 8B 与 70B 模型的实测每秒 token 数。',
          '[作为本地 AI 服务器的 Mac mini M5](/zh/local-llms/mac-mini-m5-local-ai-server) — PromptQuorum 测试：Mac mini M5 Pro 的功耗、电费和常开服务器性能。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '能很好运行本地 LLM 的最便宜 Mac 是哪台？',
            a: '约 $1,199 的 Mac mini M5 Pro 64 GB 是能很好运行本地 LLM 的最便宜 Mac。它的 64 GB 统一内存在 Q4 量化下能装下最高 34B 的所有模型，以每秒 50-60 token 跑 8B 模型，功耗仅 25-55 W。16 GB 和 32 GB 的 Mac mini 更便宜，但很快就不够用——64 GB 是认真做 AI 用途的实际底线。',
          },
          {
            q: 'Mac Studio M5 已经上市了吗？',
            a: '没有。截至 2026 年 5 月，M5 版 Mac Studio 尚未发布，Apple 也未公布规格或价格。你看到的任何 M5 Mac Studio 数字都是预测。如果你今天就需要一台 70B 桌面 Mac，M4 Max Mac Studio 现已在售，且已验证可运行 70B 模型；否则 M5 版 Mac Studio 预计在 2026 年晚些时候推出。',
          },
          {
            q: '在 Mac 上跑本地 LLM 需要多少统一内存？',
            a: '在 Q4_K_M 量化下，按每十亿参数约 0.6 GB 加上 2-4 GB 开销来规划，并记住 macOS 共用同一个内存池。这意味着 8B 模型约需 8-9 GB，34B 需 21-25 GB，70B 需 39-42 GB。一台 64 GB 的 Mac 能从容运行 34B 并勉强装下 70B Q4；以 Q5 跑 70B 或同时跑多个模型则需要 128 GB。',
          },
          {
            q: '本地 AI 选 Mac mini 还是 MacBook Pro？',
            a: '如果机器固定在桌面上、34B 模型是你的上限，就选 Mac mini M5 Pro——它便宜得多、静音，作为常开服务器很理想。如果你需要运行 70B 模型或随身携带机器，就选 MacBook Pro 16" M5 Max。MacBook Pro 是唯一在售且能跑 70B 的 Mac，但它在持续负载下会降频。',
          },
          {
            q: 'Mac 能跑 70B 模型吗？',
            a: '能。64 GB 的 MacBook Pro 16" M5 Max 以每秒 7-11 token 跑 Llama 3.3 70B Q4，128 GB 版本以每秒 8-12 token 跑 70B Q5。128 GB 的 Mac Studio 也能从容跑 70B。Mac mini M5 Pro 不行——计入 macOS 开销后，64 GB 对 70B 来说太紧。',
          },
          {
            q: '本地 LLM 上 Mac 比 NVIDIA GPU 快吗？',
            a: '不，在小模型的原始速度上并不快——桌面 RTX 显卡在 7B-13B 模型上每秒生成更多 token。Mac 的优势在于容量和能效：一台 128 GB 的 Mac 能装下 24-32 GB RTX 显卡装不下的 70B 模型，并且以 60-100 W 安静地完成，而 RTX 需要 300-450 W。买 Mac 是为了容量、安静和低运行成本，而不是为了原始速度。',
          },
          {
            q: '我以后能升级 Mac 的内存吗？',
            a: '不能。Apple Silicon 的统一内存焊接在芯片封装上，购买后无法更改。你买到的内存就是机器整个生命周期的永久配置。按你预计未来两到三年要运行的最大模型来配置容量，而不是只看今天。',
          },
          {
            q: '把 Mac 当 AI 服务器运行要花多少钱？',
            a: '很少。Mac mini M5 Pro 在 LLM 负载下功耗 25-55 W，空闲时约 8 W。让它 7×24 小时运行整整一年，按美国电价约花 $26-39——比一个月典型的云端 AI 订阅还便宜。这种低运行成本正是 Mac mini 成为常开服务器性价比之选的核心原因。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[查看完整的 M5 Pro vs M5 Max 基准测试集](/zh/local-llms/m5-pro-max-llm-benchmarks-2026) — 本指南数字背后的实测每秒 token 数、首 token 时间和功耗。',
          '[把 Mac mini M5 配置为常开 AI 服务器](/zh/local-llms/mac-mini-m5-local-ai-server) — 完整的服务器搭建、电费分析和 7×24 小时可靠性测试。',
          '[在整条 M 系列产品线上对比 Apple Silicon](/zh/local-llms/apple-silicon-local-llm-guide-2026) — M1 到 M5 Max 在统一内存和带宽上的对比。',
          '[算出每种模型规模需要多少统一内存](/zh/local-llms/how-much-unified-memory-for-local-llm) — 本文快速公式背后按模型规模划分的完整方法。',
          '[在本地 LLM 上对比 Apple Silicon 与 NVIDIA GPU](/zh/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026) — Mac 何时在容量上取胜，NVIDIA 显卡何时在原始速度上取胜。',
        ],
      },
    },
  },
}
