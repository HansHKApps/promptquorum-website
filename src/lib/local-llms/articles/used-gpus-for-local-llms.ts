// Auto-generated from src/lib/local-llms/content.ts
// Slug: used-gpus-for-local-llms
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'annual',
      theme: 'GPU Buying Guides',
      title: 'Used GPUs for Local LLMs: Best Value Picks',
      seoTitle: 'Best Used GPUs for Local LLMs: RTX 3060, 3080, 4090 Buying Guide',
      intro: '**Used GPUs offer 30-50% savings over new, with minimal performance risk on reputable models like RTX 3060 12GB and RTX 3080.** As of April 2026, the used market is flooded with ex-mining and ex-gaming cards at stable prices. Buying used makes sense for your first rig or when upgrading; mining cards are risky unless you can test on-site.',
      metaDescription: 'Best used GPUs for local LLMs: RTX 3060, 3080, 3090, 4090. Where to buy, risk assessment, how to bench-test.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**Used GPUs offer 30-50% savings over new, with minimal performance risk on reputable models like RTX 3060 12GB and RTX 3080. As of April 2026, the used market is flooded with ex-mining and ex-gaming cards at stable prices.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '8 min',
      educationalLevel: 'Intermediate',
      primaryTerm: 'Used GPU',
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Which Used GPUs Are Safest to Buy?', anchor: '#safest-cards' },
        { label: 'How Much Should You Pay for Used GPUs?', anchor: '#pricing' },
        { label: 'Mining Cards vs. Gaming Cards: What\'s the Difference?', anchor: '#mining-vs-gaming' },
        { label: 'Where Should You Buy Used GPUs?', anchor: '#where-to-buy' },
        { label: 'How Do You Test a Used GPU Before Committing?', anchor: '#testing' },
        { label: 'Common Used GPU Buying Mistakes', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'RTX 3060 12GB used ($200-250) and RTX 3080 10GB used ($350-400) are the safest bets--high volume, stable pricing, proven VRAM health.',
            'Mining cards are 30% cheaper but carry 10-20% risk of VRAM degradation. Only buy if you can stress-test on-site for 2+ hours.',
            'Gaming cards (ex-gaming rig resales) are safer than mining cards. Casual gaming doesn\'t stress VRAM like 24/7 mining.',
            'eBay with buyer protection, Facebook Marketplace with in-person testing, and Craigslist (local only, test on-site) are your best sources.',
            'Before closing, run MemtestG80 (GPU memory test) for 1-2 hours. Bad VRAM shows up immediately.',
            'Budget 5-10% price discount for unknown-history cards. If a deal seems too good, the card likely has issues.',
            'Avoid ex-server/data-center cards (RTX A100, L40S) unless you\'re sure of their condition--they run hot and may have thermal throttling damage.',
          ],
        },
        'safest-cards': {
          id: 'safest-cards',
          title: 'Which Used GPUs Are Safest to Buy?',
          items: [
            '**RTX 3060 12GB** ($200-250): Huge volume on used market. Reliable VRAM. Older architecture means fewer failures. Safe pick.',
            '**RTX 3080 10GB** ($350-400): Popular gaming card. Solid VRAM history. 10GB is usable (tight for some 70B models). Safe.',
            '**RTX 4090 24GB** ($1,000-1,300): Premium pricing, but high resale volume = data on failure rates. Rare VRAM failures. Safe if priced right.',
            '**RTX 3090 24GB** ($400-600): High-end, expensive, fewer failures proportionally. Good if you find one under $500.',
          ],
        },
        'pricing': {
          id: 'pricing',
          title: 'How Much Should You Pay for Used GPUs?',
          content: [
            '**Benchmark: Retail MSRP vs.** used market (April 2026).',
          ],
          items: [
            'RTX 3060 12GB: MSRP $329 → Used $200-250 (39-62% discount)',
            'RTX 3080 10GB: MSRP $699 → Used $350-400 (50-55% discount)',
            'RTX 4090 24GB: MSRP $1,499 → Used $1,000-1,300 (13-33% discount, less discount because newer)',
          ],
        },
        'mining-vs-gaming': {
          id: 'mining-vs-gaming',
          title: 'Mining Cards vs. Gaming Cards: What\'s the Difference?',
          content: [
            '**Mining cards** ran 24/7 for 1-3 years at full compute load. Thermal cycling stress is brutal on VRAM. 10-20% chance of VRAM errors by now.',
            '**Gaming cards** ran intermittently (4-8 hrs/day) at varying load. Less stress. VRAM lasts longer. Safer.',
            'Visually: Mining cards often have signs of heavy use (dust, thermal damage, peeling labels). Gaming cards look cleaner.',
            'Price: Mining cards are $50-100 cheaper for same model. Not worth the risk unless you test on-site.',
          ],
        },
        'where-to-buy': {
          id: 'where-to-buy',
          title: 'Where Should You Buy Used GPUs?',
          items: [
            '**eBay**: Best buyer protection. Seller ratings visible. Shipping included. Can return if dead on arrival (DOA). Takes 1-2 weeks.',
            '**Facebook Marketplace**: Local sales, test on-site before payment. No shipping risk. Instant availability. Larger pool than Craigslist.',
            '**Craigslist**: Cheapest prices. Local only. Highest scam risk. Only use if you can meet in safe public place and test immediately.',
            '**Local computer repair shops**: Often have used inventory. Can ask about return policy. Prices 10-15% higher than eBay, but more trust.',
          ],
        },
        'testing': {
          id: 'testing',
          title: 'How Do You Test a Used GPU Before Committing?',
          content: [
            '**1. Visual inspection: Check for physical damage, burnt components, leaking capacitors.**',
            '2. Install in test system: Boot into OS, run GPU-Z. Check clock speeds (should match spec), temperature readings.',
            '3. Run MemtestG80 (free): Allocate 90% of VRAM, run 1-2 hours. Bad memory shows up as errors.',
            '4. Run FurMark (stress test): 30 minutes at full load. Card should not crash or throttle severely.',
            '5. Check VRAM bandwidth (CrystalDiskInfo or GPU-Z): Compare to spec. Significantly lower = potential degradation.',
            'If buying used on eBay/Craigslist, insist on seller doing this test and providing screenshot proof.',
          ],
        },
        'mistakes': {
          id: 'mistakes',
          title: 'Common Used GPU Buying Mistakes',
          items: [
            'Buying a mining RTX 3080 at "$250 off MSRP" without testing--VRAM is often degraded, shows errors under load.',
            'Assuming "like new condition" means healthy VRAM--cosmetics ≠ component health. Always stress-test.',
            'Paying for shipping on a GPU without buyer protection (not eBay)--if it arrives dead, you\'re stuck.',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            { q: 'Is a used mining GPU worth buying at a steep discount?', a: 'Only if you can test it in person for 2+ hours with MemtestG80. Otherwise, no. The discount ($50-100) isn\'t worth the 20% failure risk.' },
            { q: 'How can I tell if a used GPU was a mining card?', a: 'Often you can\'t from photos alone. Ask the seller. Look for thermal damage (discoloration near capacitors) or unusually heavy dust. Request their mining pool address if they used it.' },
            { q: 'What\'s the oldest RTX generation I should buy used?', a: 'RTX 2000-series (2060, 2080) are very old (2018). Only buy if under $80. RTX 3000-series (2020-2021) is the safe baseline.' },
            { q: 'Should I buy a used RTX 4070 or RTX 3080?', a: 'RTX 3080 (10GB, $350-400 used) is better value for local LLMs than 4070 (12GB, $450-550 used). 4070 is newer but only 15% faster.' },
            { q: 'Can I return a used GPU on eBay if it fails after 1 month?', a: 'Depends on seller\'s policy. Most allow 14-day returns. After 30 days, you\'re on your own unless there\'s a manufacturer defect (rare on used cards).' },
            { q: 'Is it worth paying 20% more for a GPU with return protection?', a: 'Yes. Costs ~$30-50 on a $250 GPU, but saves you from a $250 loss if the card dies post-purchase.' },
            { q: 'Should I buy a used RTX 3090 or RTX 4090?', a: 'RTX 4090 if you can afford it ($1,000-1,300). Better power efficiency, newer architecture. RTX 3090 is overkill for 7B models and not much cheaper used (~$500-600).' },
          ],
        },
        'relatedReading': {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm)',
            '[RTX 5090 vs RTX 4090](/local-llms/rtx-5090-vs-rtx-4090-local-llm)',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms)',
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          id: 'sources',
          title: 'Sources',
          items: [
            'eBay GPU price history and market data (April 2026)',
            'MemtestG80 and GPU stress-testing tool documentation for VRAM validation',
            'GPU-Z specification database for thermal and clock speed baselines',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Best Used GPUs for Local LLMs: RTX 3060, 3080, 4090 Buying Guide',
        'description': 'Best used GPUs for local LLMs: RTX 3060, 3080, 3090, 4090. Where to buy, risk assessment, how to bench-test.',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'inLanguage': 'en',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-19',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'Used GPUs' },
          { '@type': 'Thing', 'name': 'GPU buying guide' },
          { '@type': 'Thing', 'name': 'GPU testing' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
        },
        'educationalLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'en',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Is a used mining GPU worth buying at a steep discount?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Only if you can test it in person for 2+ hours with MemtestG80. Otherwise, no. The discount ($50-100) isn\'t worth the 20% failure risk.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How can I tell if a used GPU was a mining card?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Often you can\'t from photos alone. Ask the seller. Look for thermal damage (discoloration near capacitors) or unusually heavy dust. Request their mining pool address if they used it.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What\'s the oldest RTX generation I should buy used?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 2000-series (2060, 2080) are very old (2018). Only buy if under $80. RTX 3000-series (2020-2021) is the safe baseline.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy a used RTX 4070 or RTX 3080?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 3080 (10GB, $350-400 used) is better value for local LLMs than 4070 (12GB, $450-550 used). 4070 is newer but only 15% faster.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I return a used GPU on eBay if it fails after 1 month?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Depends on seller\'s policy. Most allow 14-day returns. After 30 days, you\'re on your own unless there\'s a manufacturer defect (rare on used cards).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is it worth paying 20% more for a GPU with return protection?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. Costs ~$30-50 on a $250 GPU, but saves you from a $250 loss if the card dies post-purchase.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Should I buy a used RTX 3090 or RTX 4090?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 4090 if you can afford it ($1,000-1,300). Better power efficiency, newer architecture. RTX 3090 is overkill for 7B models and not much cheaper used (~$500-600).'
            }
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/local-llms/used-gpus-for-local-llms',
        'inLanguage': 'en',
        'name': 'Used GPUs for Local LLMs: Cost Comparison & Reliability',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Cost Comparison: RTX 3060 ($200-250 used) vs RTX 3080 ($350-400) vs RTX 4090 ($1,000-1,300)—30-50% savings over new.' },
          { '@type': 'ListItem', position: 2, name: 'Reliability Data: RTX 3060 12GB and RTX 3080 10GB have high resale volume and proven VRAM health. Mining cards carry 10-20% failure risk.' },
          { '@type': 'ListItem', position: 3, name: 'Recommended Used GPU Models: RTX 3060 12GB (safest entry), RTX 3080 10GB (solid VRAM), RTX 4090 24GB (premium, rare failures).' },
        ],
      },
    },
  };
