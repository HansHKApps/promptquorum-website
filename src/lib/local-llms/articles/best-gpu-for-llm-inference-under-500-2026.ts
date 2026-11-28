import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Best GPU for LLM Inference Under $500 (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-en.webp',
    seoTitle: 'Best GPU Under $500 for Local LLMs (2026): RTX 3060 12GB',
    metaDescription: 'Our under-$500 GPU pick for local LLMs: a used RTX 3060 12GB, sold for $310–350 in the US. Intel Arc B580 prices conflict, so check live listings.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB (used)', productCategory: 'gpu', priceRange: '$310–350 used (US sold, Nov 2026)', label: 'Check RTX 3060 12GB price →' },
      {
        url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
        productName: 'Intel Arc B580 12GB',
        productCategory: 'gpu',
        priceRange: 'sources disagree; check the listing',
        label: 'Check Intel Arc B580 12GB price →',
      },
      {
        url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB',
        productName: 'RX 7800 XT 16GB (used)',
        productCategory: 'gpu',
        priceRange: '$485–560 used (US sold, Nov 2026)',
        label: 'Check RX 7800 XT 16GB price →',
      },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Our pick under $500 for local LLM inference is a used RTX 3060 12GB: 12 GB of VRAM, the CUDA toolchain, and $310–350 (median $330) in 209 eBay US sold listings, 17–26 November 2026, excluding shipping ([InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). This is an editorial pick, not a benchmark result. We do not rank the Intel Arc B580 12GB first because November price sources disagree widely. A used RX 7800 XT 16GB has more VRAM, but its sold median of $525 is above $500.**',
    quickAnswerTop: {
      question: 'What is the best GPU for running LLMs locally under $500?',
      answer: '**Our pick is a used RTX 3060 12GB.** It sold for $310–350 (median $330) in 209 eBay US sold listings, 17–26 November 2026, excluding shipping ([InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), and brings 12 GB of VRAM plus CUDA. The Intel Arc B580 12GB is a new-card option whose current price we cannot confirm. A used RX 7800 XT 16GB sold for $485–560 (median $525).',
      bullets: [
        '**Our pick:** used RTX 3060 12GB — sold $310–350 (US, 17–26 Nov 2026), CUDA',
        '**New-card option:** Intel Arc B580 12GB — price sources disagree; check the seller',
        '**More VRAM:** used RX 7800 XT 16GB — sold median $525; only the lower end fits $500',
        '⚠️ Used RTX 3090: sold $1,500–1,725 (US, 13–23 Nov 2026) — far above $500',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**A used RTX 3060 12GB is our pick: 12 GB of VRAM, CUDA, and sold for $310–350 (median $330) in the US, 17–26 November 2026**',
          'Intel Arc B580 12GB: November figures run from a $399 eBay-listing average to an $851.16 Amazon US listing',
          'Used RX 7800 XT 16GB: sold $485–560 (median $525), so only the lower end fits $500',
          '⚠️ RTX 4060 Ti 16GB: price sources disagree, so it is not ranked',
          '⚠️ Used RTX 3090: sold $1,500–1,725 — far above $500',
          'All prices are US and use different bases (sold, asking, retail); we name the basis. PromptQuorum has not benchmarked these cards.',
        ],
      },
      rankedList: {
        title: 'Best GPUs for LLM Inference Under $500 — Ranked',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Our pick for local LLM inference under $500 is a used RTX 3060 12GB, because it has 12 GB of VRAM, CUDA support and recent US sold prices that sit wholly below $500.' },
          {
            type: 'plain-terms',
            text: 'GPU VRAM determines which AI models you can run. A 16 GB GPU runs 14B models at high quality. A 24 GB GPU (like a used RTX 3090) runs 30B-class models at Q4. Under 12 GB limits you to 7B models or smaller.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'RTX 3060 12GB Used — Our Pick',
            content: 'The used NVIDIA GeForce RTX 3060 12GB is our editorial pick. It sold for $310–350 (median $330) in 209 eBay US sold listings, 17–26 November 2026, excluding shipping ([InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). A 14B model at Q4 fits in its 12 GB; a 14B at Q8 does not. In our view CUDA gives it the simplest tool support of the three cards, including for LoRA fine-tuning; check each project\'s docs. The [Ollama GPU docs](https://docs.ollama.com/gpu) list it as supported. Used cards carry condition and warranty risk, so test within the return window. New cards are a separate market: [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listed US asking prices of $320–400 on 11 October 2026. For used cards, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) showed a higher median asking price of $400 (95 listings, 7 November 2026); asking prices are not completed sales.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB on Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB on Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — New-Card Option, Check the Price',
            content: 'We rank the Intel Arc B580 12GB second because we cannot confirm a current price. On 27 November, [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) listed it new on Amazon US at $851.16 (its tracked listing had been $369.99 from June to October) and used on eBay at $499. [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) showed a November lowest average of $399 from eBay listings (current figure $431). [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) found only reseller listings of $851–1,263 on 7 November. Treat reseller figures with care and compare the seller before you buy. The [Ollama GPU docs](https://docs.ollama.com/gpu) do not list Arc cards by name; they describe Vulkan as additional GPU support, so confirm that your tool works.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB on Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB on Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 3,
            title: 'RX 7800 XT 16GB Used — More VRAM, Often Above $500',
            content: 'A used AMD Radeon RX 7800 XT gives you 16 GB of VRAM. It sold for $485–560 (median $525) in 218 eBay US sold listings pulled on 26 November 2026 ([InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), so only the lower end fits this budget. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) showed a higher median asking price of $650 (11 listings, 7 November). The [Ollama GPU docs](https://docs.ollama.com/gpu) list the card for Linux and Windows with a ROCm driver. AMD uses ROCm rather than NVIDIA\'s CUDA, so check that each tool you plan to use, including for fine-tuning, supports your card.',
            affiliateLinks: [
              { label: 'RX 7800 XT 16GB on Amazon', url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB' },
              { label: 'RX 7800 XT 16GB on Newegg', url: 'https://www.newegg.com/p/pl?d=RX+7800+XT+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU Comparison — Price Evidence and Capacity',
        content: 'PromptQuorum has not benchmarked these cards, so the table shows VRAM, price evidence and model capacity. The RTX 3060 and RX 7800 XT figures are eBay US sold listings ([InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). We have no sold data for the Arc B580, and its listing figures disagree, so do not compare them like for like. Not ranked because the evidence puts them above $500: used RTX 3090 (sold $1,500–1,725), RTX 5060 Ti 16GB new ($617.99 lowest asking, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 October; $769.99 on Amazon US, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 November) and RTX 4070 (from $569.99 asking, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)).',
        columns: ['GPU', 'VRAM', 'Typical price', 'Max Model'],
        rows: [
          { GPU: 'RTX 3060 12GB (used) ★', VRAM: '12 GB', 'Typical price': '$310–350 sold (used)', 'Max Model': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12 GB', 'Typical price': '$399–851, sources disagree', 'Max Model': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB (used)', VRAM: '16 GB', 'Typical price': '$485–560 sold (used)', 'Max Model': '14B (Q4, more context)' },
        ],
      },
      methodology: {
        title: 'How We Selected These GPUs',
        content: 'Selection: at least 12 GB of VRAM, a documented or reported way to run local models, and price evidence at or near $500. PromptQuorum did not benchmark the cards. The order is an editorial pick based on VRAM, software support and the strength of the price evidence; sold-listing data counts for more than asking or retail listings. All prices are US, accessed 2026-11-28: [InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) (sold), [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) (lowest asking, 11 October, NVIDIA only), [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) (median eBay asking and Amazon new, 7 November), [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) and [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) (Arc B580 listing trackers). The RTX 4060 Ti 16GB is not ranked: [InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) gives $450–550 without a stated basis, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) $649.99 used and $790 new asking, and [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) a $745 median used asking price. Market reports link the 2026 price rises to memory shortages ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)).',
      },
      vramGuide: {
        title: 'VRAM Requirements by Model Size',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM requirements: 7B model needs ~4–5 GB (Q4) or ~7–8 GB (Q8); 14B model needs ~8–9 GB (Q4) or ~16 GB (Q8); 30B model needs ~18–20 GB (Q4); 70B model needs ~40–42 GB (Q4).',
          },
          {
            type: 'plain-terms',
            text: 'Think of VRAM like RAM for AI models. The model must fit entirely in VRAM for fast inference. If it spills to CPU RAM (called "offloading"), speed typically drops sharply, often by a large factor, depending on how much spills over. Q4 quantization halves the size vs Q8 at a small quality cost.',
          },
        ],
        items: [
          '7B model at Q4: ~4.5 GB VRAM — any GPU on this list handles it easily',
          '7B model at Q8: ~7.5 GB VRAM — fits all GPUs here',
          '13B model at Q4: ~8.5 GB VRAM — fits all GPUs on this list',
          '14B model at Q8: [Ollama lists Qwen3 14B](https://ollama.com/library/qwen3/tags) at 16 GB — with context it needs more than 16 GB, so none of the three cards here holds it fully in VRAM',
          '30B model at Q4: ~18 GB VRAM — needs a 24 GB card, such as a used RTX 3090, for comfortable use',
          '70B model at Q4: ~40 GB — requires two GPUs or CPU offloading',
        ],
      },
      decisionMatrix: {
        title: 'Which GPU Should You Buy?',
        content: 'Use this decision guide based on your primary use case:',
        items: [
          '**CUDA within budget** → used RTX 3060 12GB, sold $310–350 (US, 17–26 November 2026).',
          '**Want a new card** → Intel Arc B580 12GB, if a reputable seller lists it within your budget and your tool supports it.',
          '**Need 16 GB** → used RX 7800 XT; the sold median is $525, so you may have to go past $500.',
          '**Need 30B model capability?** → A 24 GB card such as a used RTX 3090, sold $1,500–1,725 — far above $500.',
          '**Windows user** → In our view the used RTX 3060 12GB with CUDA is the simpler path.',
          '**Need more than 12 GB for a test?** Instead of stretching the budget, [rent a 24 GB card for a few dollars](/power-local-llm/best-cloud-gpu-providers) and see whether the larger models are worth it.',
        ],
      },
      softwareCompat: {
        title: 'Software Compatibility by GPU',
        content: 'Support changes quickly, so check each project\'s docs. The [Ollama GPU docs](https://docs.ollama.com/gpu) list the RTX 3060 and RX 7800 XT and do not list Arc cards by name.',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA Fine-Tuning'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA Fine-Tuning': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ check docs', vLLM: '⚠️ partial', 'Text Gen WebUI': '⚠️ check docs', 'CUDA Fine-Tuning': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ check docs', vLLM: '⚠️ check docs', 'Text Gen WebUI': '⚠️ check docs', 'CUDA Fine-Tuning': '❌' },
        ],
      },
      powerAndCooling: {
        title: 'Power Draw and System Requirements',
        content: 'GPU power draw determines what PSU and case you need. Running LLMs often keeps GPUs at 80–100% utilization — unlike gaming, there are few idle frames. Check the card maker\'s recommended PSU wattage and connectors for your exact model.',
        items: [
          'RTX 3060 12GB: 170 W — typically a 550 W+ PSU; one 8-pin connector; check the maker\'s recommendation',
          'Intel Arc B580 12GB: 190 W; [Intel lists](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html) a 600 W minimum PSU and one 8-pin connector; partner cards can differ',
          'RX 7800 XT 16GB: check the card maker\'s power draw, PSU and connector requirements',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Is 8 GB VRAM enough for running LLMs locally?',
            a: '8 GB VRAM limits you to 7B models at Q4 quantization — the full model barely fits. You cannot run 13B models at full quality, and 14B models will partially offload to CPU RAM, and speed typically drops sharply, often by a large factor, depending on how much spills over. For meaningful local LLM use in 2026, 12 GB is the practical minimum, 16 GB is recommended.',
          },
          {
            q: 'Can I still buy a used RTX 3090 for under $500 in 2026?',
            a: 'No. Used RTX 3090 cards sold for $1,500–1,725 (median $1,650) in 225 eBay US sold listings, 13–23 November 2026, excluding shipping ([InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), so the card is not a sub-$500 option. These are listing data, not a price quote. The 24 GB of VRAM is what keeps it attractive: it is a CUDA route to 30B-class models, which need roughly 18–20 GB at Q4. It is not the only 24 GB card: on 7 November, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) showed a $1,499 median asking price for a used AMD RX 7900 XTX on eBay US (29 listings) and $2,099 new on Amazon US; the card has no CUDA. Asking prices are not directly comparable with the sold prices above.',
          },
          {
            q: 'Does AMD work for running LLMs locally?',
            a: 'Yes, with caveats. The [Ollama GPU docs](https://docs.ollama.com/gpu) list the RX 7800 XT for Linux and Windows with a ROCm driver. AMD uses ROCm rather than NVIDIA\'s CUDA, so check that each tool you plan to use, including for fine-tuning, supports your card. Used RX 7800 XT cards sold for $485–560 (median $525; eBay US, pulled 26 November 2026), so many cost more than $500. For fine-tuning or less setup, we would pick a used RTX 3060 12GB.',
          },
          {
            q: 'What about Intel Arc GPUs for AI?',
            a: 'It is a 12 GB option, but check the price first. November figures ranged from a $399 eBay-listing average ([GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)) to an $851.16 Amazon US listing ([VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/), 27 November). Software is the other limit: the [Ollama GPU docs](https://docs.ollama.com/gpu) do not list Arc by name, and the [vLLM docs](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/) describe Intel GPU support as initial. For LoRA fine-tuning, we would pick a used RTX 3060 12GB.',
          },
          {
            q: 'Can I run a 70B model on a single GPU under $500?',
            a: 'Not at full speed. Even the RTX 3090 (24 GB) cannot hold 70B Q4 (~40 GB) entirely in VRAM. You can use CPU offloading with llama.cpp to split the model between GPU VRAM and system RAM, but generation then runs far below the speed of a model that fits in VRAM, which makes interactive use impractical. To run 70B models on GPUs, you need two 24 GB cards (2× RTX 3090 totaling 48 GB) or cloud inference.',
          },
          {
            q: 'Will newer GPUs (RTX 5060 Ti) make these obsolete?',
            a: 'Not at this budget on the prices we checked. The lowest new asking price for the RTX 5060 Ti 16GB was $617.99 ([BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 October), and Amazon US showed $769.99 ([GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 November). It has 16 GB of VRAM and a $429 list price. If a reputable seller offers one under $500, it is worth considering. Listings on 27–28 November were higher still: about $800 on [gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb) (28 November) and $849.99 on Amazon US per [BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti) (27 November).',
          },
          {
            q: 'How much does a used RTX 4060 Ti 16GB cost?',
            a: 'Sources disagree. [InsiderLLM used GPU buying guide](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) gives $450–550 without stating the basis. [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listed a lowest used asking price of $649.99, and $790 new (only 3 new listings), on 11 October. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) showed a $745 median used asking price (16 listings, 7 November). Check sold (not active) eBay listings, and confirm it is the 16 GB variant.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[RTX 3090 for Local LLMs: Buy Used or Rent?](/power-local-llm/rtx-3090-local-llm-buy-or-rent) -- is the 24GB card worth buying used, or cheaper to rent by the hour?',
          '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms) -- best GPUs for local LLMs',
          '[Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm) -- best budget GPUs for local LLMs',
          '[How Much VRAM Do You Need for Local LLMs?](/local-llms/how-much-vram-local-llm) -- how much VRAM do you need?',
          '[VRAM Calculator for Local LLMs](/local-llms/vram-calculator-local-llm) -- VRAM calculator for local LLMs',
          '[Buying Used GPUs for Local LLMs](/local-llms/used-gpus-for-local-llms) -- buying used GPUs for local LLMs',
          '[Rent a 24 GB card for a few dollars](/power-local-llm/best-cloud-gpu-providers) -- GPU rental providers compared, for trying a larger card before you buy.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is 8 GB VRAM enough for running LLMs locally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '8 GB VRAM limits you to 7B models at Q4 quantization — the full model barely fits. You cannot run 13B models at full quality, and 14B models will partially offload to CPU RAM, and speed typically drops sharply, often by a large factor, depending on how much spills over. For meaningful local LLM use in 2026, 12 GB is the practical minimum, 16 GB is recommended.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I still buy a used RTX 3090 for under $500 in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Used RTX 3090 cards sold for $1,500–1,725 (median $1,650) in 225 eBay US sold listings, 13–23 November 2026, excluding shipping (InsiderLLM used GPU buying guide), so the card is not a sub-$500 option. These are listing data, not a price quote. The 24 GB of VRAM is what keeps it attractive: it is a CUDA route to 30B-class models, which need roughly 18–20 GB at Q4. It is not the only 24 GB card: on 7 November, GeekyInc showed a $1,499 median asking price for a used AMD RX 7900 XTX on eBay US (29 listings) and $2,099 new on Amazon US; the card has no CUDA. Asking prices are not directly comparable with the sold prices above.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does AMD work for running LLMs locally?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, with caveats. The Ollama GPU docs list the RX 7800 XT for Linux and Windows with a ROCm driver. AMD uses ROCm rather than NVIDIA\'s CUDA, so check that each tool you plan to use, including for fine-tuning, supports your card. Used RX 7800 XT cards sold for $485–560 (median $525; eBay US, pulled 26 November 2026), so many cost more than $500. For fine-tuning or less setup, we would pick a used RTX 3060 12GB.',
          },
        },
        {
          '@type': 'Question',
          name: 'What about Intel Arc GPUs for AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is a 12 GB option, but check the price first. November figures ranged from a $399 eBay-listing average (GPU Poet) to an $851.16 Amazon US listing (VideoCardPrices, 27 November). Software is the other limit: the Ollama GPU docs do not list Arc by name, and the vLLM docs describe Intel GPU support as initial. For LoRA fine-tuning, we would pick a used RTX 3060 12GB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I run a 70B model on a single GPU under $500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not at full speed. Even the RTX 3090 (24 GB) cannot hold 70B Q4 (~40 GB) entirely in VRAM. You can use CPU offloading with llama.cpp to split the model between GPU VRAM and system RAM, but generation then runs far below the speed of a model that fits in VRAM, which makes interactive use impractical. To run 70B models on GPUs, you need two 24 GB cards (2× RTX 3090 totaling 48 GB) or cloud inference.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will newer GPUs (RTX 5060 Ti) make these obsolete?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not at this budget on the prices we checked. The lowest new asking price for the RTX 5060 Ti 16GB was $617.99 (BuySellRAM, 11 October), and Amazon US showed $769.99 (GeekyInc, 7 November). It has 16 GB of VRAM and a $429 list price. If a reputable seller offers one under $500, it is worth considering. Listings on 27–28 November were higher still: about $800 on gpuprix (28 November) and $849.99 on Amazon US per BasketPrice (27 November).',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a used RTX 4060 Ti 16GB cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sources disagree. InsiderLLM used GPU buying guide gives $450–550 without stating the basis. BuySellRAM listed a lowest used asking price of $649.99, and $790 new (only 3 new listings), on 11 October. GeekyInc showed a $745 median used asking price (16 listings, 7 November). Check sold (not active) eBay listings, and confirm it is the 16 GB variant.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Best GPUs for LLM Inference Under $500 (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB (used)', description: 'Editorial pick — 12 GB VRAM, CUDA, US sold prices below $500' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: 'New-card option with 12 GB — current price sources disagree' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB (used)', description: '16 GB of VRAM — US sold median $525, above the budget' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Best GPU for LLM Inference Under $500 (2026)',
      description: 'GPUs for local LLM inference under $500: a used RTX 3060 12GB as the editorial pick, plus the Intel Arc B580 12GB and a used RX 7800 XT 16GB, with the basis of every price.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'en',
      proficiencyLevel: 'Intermediate',
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Mejor GPU para inferencia LLM por menos de $500 (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-es.webp',
    seoTitle: 'Mejor GPU por menos de $500 para LLM locales (2026)',
    metaDescription: 'Nuestra GPU por menos de $500 para LLM locales: una RTX 3060 12GB usada, vendida a $310–350 en EE. UU. Los precios de la Arc B580 no coinciden.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
        productName: 'RTX 3060 12GB (usada)',
        productCategory: 'gpu',
        priceRange: '$310–350 usada (ventas EE. UU., nov. 2026)',
        label: 'Ver precio de la RTX 3060 12GB →',
      },
      {
        url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
        productName: 'Intel Arc B580 12GB',
        productCategory: 'gpu',
        priceRange: 'las fuentes discrepan; revisa el anuncio',
        label: 'Ver precio de la Intel Arc B580 12GB →',
      },
      {
        url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB',
        productName: 'RX 7800 XT 16GB (usada)',
        productCategory: 'gpu',
        priceRange: '$485–560 usada (ventas EE. UU., nov. 2026)',
        label: 'Ver precio de la RX 7800 XT 16GB →',
      },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Nuestra elección por menos de $500 para inferencia LLM local es una RTX 3060 12GB usada: 12 GB de VRAM, la cadena CUDA y $310–350 (mediana $330) en 209 ventas cerradas en eBay EE. UU., 17–26 de noviembre de 2026, sin envío ([guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Es una elección editorial, no el resultado de un benchmark. No ponemos primera a la Intel Arc B580 12GB porque las fuentes de precio de noviembre discrepan mucho. Una RX 7800 XT 16GB usada tiene más VRAM, pero su mediana de venta de $525 supera los $500.** Precios en dólares; en tu país pueden variar.',
    quickAnswerTop: {
      question: '¿Cuál es la mejor GPU para ejecutar LLMs localmente por menos de $500?',
      answer: '**Nuestra elección es una RTX 3060 12GB usada.** Se vendió a $310–350 (mediana $330) en 209 ventas cerradas en eBay EE. UU., 17–26 de noviembre de 2026, sin envío ([guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), y aporta 12 GB de VRAM con CUDA. La Intel Arc B580 12GB es una opción nueva cuyo precio actual no podemos confirmar. La RX 7800 XT 16GB usada se vendió a $485–560 (mediana $525).',
      bullets: [
        '**Nuestra elección:** RTX 3060 12GB usada — vendida a $310–350 (EE. UU., 17–26 nov. 2026), CUDA',
        '**Opción nueva:** Intel Arc B580 12GB — las fuentes de precio discrepan; revisa el vendedor',
        '**Más VRAM:** RX 7800 XT 16GB usada — mediana de venta $525; solo la parte baja cabe en $500',
        '⚠️ RTX 3090 usada: vendida a $1,500–1,725 (EE. UU., 13–23 nov. 2026) — muy por encima de $500',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Elegimos una RTX 3060 12GB usada: 12 GB de VRAM, CUDA y vendida a $310–350 (mediana $330) en EE. UU., 17–26 de noviembre de 2026**',
          'Intel Arc B580 12GB: las cifras de noviembre van de un promedio de anuncios de eBay de $399 a un anuncio de Amazon EE. UU. de $851.16',
          'RX 7800 XT 16GB usada: vendida a $485–560 (mediana $525); solo la parte baja cabe en $500',
          '⚠️ RTX 4060 Ti 16GB: las fuentes de precio discrepan, así que no la clasificamos',
          '⚠️ RTX 3090 usada: vendida a $1,500–1,725 — muy por encima de $500',
          'Todos los precios son de EE. UU. y tienen bases distintas (venta, precio pedido, tienda); indicamos cuál. PromptQuorum no ha hecho benchmarks de estas tarjetas.',
        ],
      },
      rankedList: {
        title: 'Mejores GPU para inferencia LLM por menos de $500 — Clasificadas',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nuestra elección para inferencia LLM local por menos de $500 es una RTX 3060 12GB usada, porque tiene 12 GB de VRAM, admite CUDA y sus precios de venta recientes en EE. UU. quedan por debajo de $500.',
          },
          {
            type: 'plain-terms',
            text: 'El VRAM de la GPU determina qué modelos de IA puedes ejecutar. Una GPU de 16 GB ejecuta modelos 14B en alta calidad. Una GPU de 24 GB (como una RTX 3090 de segunda mano) ejecuta modelos de clase 30B en Q4. Con menos de 12 GB estás limitado a modelos 7B o más pequeños.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'RTX 3060 12GB usada — Nuestra elección',
            content: 'La NVIDIA GeForce RTX 3060 12GB usada es nuestra elección editorial. Se vendió a $310–350 (mediana $330) en 209 ventas cerradas en eBay EE. UU., 17–26 de noviembre de 2026, sin envío ([guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Un modelo 14B en Q4 cabe en sus 12 GB; un 14B en Q8 no. En nuestra opinión, CUDA le da el soporte de herramientas más sencillo de las tres, también para el ajuste fino LoRA; consulta la documentación de cada proyecto. La [documentación de GPU de Ollama](https://docs.ollama.com/gpu) la incluye como compatible. Las tarjetas usadas tienen riesgos de estado y garantía, así que pruébala dentro del plazo de devolución. Las nuevas son otro mercado: [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listaba el 11 de octubre de 2026 precios pedidos en EE. UU. de $320–400. Para las usadas, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostró una mediana pedida más alta, de $400 (95 anuncios, 7 de noviembre de 2026); un precio pedido no es una venta cerrada.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB en Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB en Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — Opción nueva, revisa el precio',
            content: 'Ponemos segunda a la Intel Arc B580 12GB porque no podemos confirmar un precio actual. El 27 de noviembre, [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) la listaba nueva en Amazon EE. UU. a $851.16 (el anuncio seguido había estado en $369.99 de junio a octubre) y usada en eBay a $499. [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) mostraba para noviembre un promedio mínimo de $399 a partir de anuncios de eBay (cifra actual $431). [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) solo encontró el 7 de noviembre anuncios de revendedores a $851–1,263. Toma con cautela las cifras de revendedores y revisa el vendedor antes de comprar. La [documentación de GPU de Ollama](https://docs.ollama.com/gpu) no menciona las tarjetas Arc por su nombre; describe Vulkan como soporte de GPU adicional, así que confirma que tu herramienta funciona.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB en Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB en Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 3,
            title: 'RX 7800 XT 16GB usada — Más VRAM, a menudo sobre $500',
            content: 'Una AMD Radeon RX 7800 XT usada ofrece 16 GB de VRAM. Se vendió a $485–560 (mediana $525) en 218 ventas cerradas en eBay EE. UU., consultadas el 26 de noviembre de 2026 ([guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), así que solo la parte baja entra en este presupuesto. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostraba una mediana de precio pedido más alta, de $650 (11 anuncios, 7 de noviembre). La [documentación de GPU de Ollama](https://docs.ollama.com/gpu) incluye la tarjeta para Linux y Windows con controlador ROCm. AMD usa ROCm en lugar de CUDA de NVIDIA, así que comprueba que cada herramienta que vayas a usar, también para ajuste fino, admite tu tarjeta.',
            affiliateLinks: [
              { label: 'RX 7800 XT 16GB en Amazon', url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB' },
              { label: 'RX 7800 XT 16GB en Newegg', url: 'https://www.newegg.com/p/pl?d=RX+7800+XT+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparativa de GPU — Datos de precio y capacidad',
        content: 'PromptQuorum no ha hecho benchmarks de estas tarjetas, así que la tabla muestra VRAM, datos de precio y capacidad de modelos. Las cifras de la RTX 3060 y la RX 7800 XT son ventas cerradas en eBay EE. UU. ([guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). No tenemos datos de venta de la Arc B580 y sus cifras de anuncios discrepan, así que no las compares como equivalentes. Fuera de la clasificación porque los datos las sitúan por encima de $500: RTX 3090 usada (vendida a $1,500–1,725), RTX 5060 Ti 16GB nueva (precio pedido mínimo $617.99, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 de octubre; $769.99 en Amazon EE. UU., [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 de noviembre) y RTX 4070 (desde $569.99 pedidos, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)). Precios en dólares; en tu país pueden variar.',
        columns: ['GPU', 'VRAM', 'Precio habitual', 'Modelo máximo'],
        rows: [
          { GPU: 'RTX 3060 12GB (usada) ★', VRAM: '12 GB', 'Precio habitual': '$310–350 vendida (usada)', 'Modelo máximo': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12 GB', 'Precio habitual': '$399–851, fuentes discrepan', 'Modelo máximo': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB (usada)', VRAM: '16 GB', 'Precio habitual': '$485–560 vendida (usada)', 'Modelo máximo': '14B (Q4, más contexto)' },
        ],
      },
      methodology: {
        title: 'Cómo seleccionamos estas GPU',
        content: 'Selección: al menos 12 GB de VRAM, una forma documentada o reportada de ejecutar modelos locales y datos de precio en torno a $500. PromptQuorum no ha hecho benchmarks. El orden es una elección editorial según VRAM, soporte de software y solidez de los datos de precio; las ventas cerradas pesan más que los precios pedidos o de tienda. Todos los precios son de EE. UU., consultados el 2026-11-28: [guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) (ventas), [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) (precios pedidos mínimos, 11 de octubre, solo NVIDIA), [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) (mediana pedida en eBay y precio nuevo en Amazon, 7 de noviembre), [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) y [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) (seguimientos de anuncios de la Arc B580). La RTX 4060 Ti 16GB no se clasifica: [guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) da $450–550 sin indicar la base, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) $649.99 usada y $790 nueva como precios pedidos, y [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) una mediana pedida de $745 en usadas. Informes de mercado relacionan las subidas de 2026 con la escasez de memoria ([seguimiento de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)).',
      },
      vramGuide: {
        title: 'Requisitos de VRAM por tamaño de modelo',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Requisitos de VRAM: el modelo 7B necesita ~4–5 GB (Q4) o ~7–8 GB (Q8); el modelo 14B necesita ~8–9 GB (Q4) o ~16 GB (Q8); el modelo 30B necesita ~18–20 GB (Q4); el modelo 70B necesita ~40–42 GB (Q4).',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en el VRAM como la RAM para los modelos de IA. El modelo debe caber completamente en VRAM para una inferencia rápida. Si se desborda a la RAM del sistema (llamado "offloading"), la velocidad suele caer de forma brusca, a menudo por un factor grande, según cuánto se desborde. La cuantización Q4 reduce el tamaño a la mitad respecto a Q8 con un pequeño coste en calidad.',
          },
        ],
        items: [
          'Modelo 7B en Q4: ~4.5 GB VRAM — cualquier GPU de esta lista lo maneja fácilmente',
          'Modelo 7B en Q8: ~7.5 GB VRAM — cabe en todas las GPU aquí',
          'Modelo 13B en Q4: ~8.5 GB VRAM — cabe en todas las GPU de esta lista',
          'Modelo 14B en Q8: [Ollama indica 16 GB para Qwen3 14B](https://ollama.com/library/qwen3/tags); con el contexto requiere más de 16 GB, así que ninguna de las tres tarjetas lo aloja entero en VRAM',
          'Modelo 30B en Q4: ~18 GB VRAM — requiere 24 GB (RTX 3090 usada)',
          'Modelo 70B en Q4: ~40 GB — requiere dos GPU o descarga a CPU',
        ],
      },
      decisionMatrix: {
        title: '¿Qué GPU deberías comprar?',
        content: 'Usa esta guía de decisión según tu caso de uso principal:',
        items: [
          '**CUDA dentro del presupuesto** → RTX 3060 12GB usada, vendida a $310–350 (EE. UU., 17–26 de noviembre de 2026).',
          '**Quieres una tarjeta nueva** → Intel Arc B580 12GB, si un vendedor fiable la ofrece dentro de tu presupuesto y tu herramienta la admite.',
          '**Necesitas 16 GB** → RX 7800 XT usada; la mediana de venta es $525, así que quizá debas pasar de $500.',
          '**¿Necesitas capacidad para modelos 30B?** → Una tarjeta de 24 GB como la RTX 3090 usada, vendida a $1,500–1,725 — muy por encima de $500.',
          '**Usuario de Windows** → En nuestra opinión, la RTX 3060 12GB usada con CUDA es el camino más sencillo.',
          '**¿Necesitas más de 12 GB para una prueba?** En lugar de estirar el presupuesto, puedes [alquilar una tarjeta de 24 GB por unos pocos dólares](/es/power-local-llm/best-cloud-gpu-providers) y comprobar si los modelos más grandes valen la pena.',
        ],
      },
      softwareCompat: {
        title: 'Compatibilidad de software por GPU',
        content: 'El soporte cambia rápido, así que consulta la documentación de cada proyecto. La [documentación de GPU de Ollama](https://docs.ollama.com/gpu) incluye la RTX 3060 y la RX 7800 XT y no menciona las tarjetas Arc por su nombre.',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ ver docs', vLLM: '⚠️ parcial', 'Text Gen WebUI': '⚠️ ver docs', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ ver docs', vLLM: '⚠️ ver docs', 'Text Gen WebUI': '⚠️ ver docs', 'Fine-Tuning CUDA': '❌' },
        ],
      },
      powerAndCooling: {
        title: 'Consumo energético y requisitos del sistema',
        content: 'El consumo de la GPU determina qué fuente de alimentación y chasis necesitas. Ejecutar LLMs suele mantener las GPU al 80–100% de utilización — a diferencia del gaming, hay pocos fotogramas inactivos. Comprueba la potencia de fuente y los conectores que recomienda el fabricante para tu modelo exacto.',
        items: [
          'RTX 3060 12GB: 170 W — normalmente fuente de 550 W o más; un conector de 8 pines; comprueba la recomendación del fabricante',
          'Intel Arc B580 12GB: 190 W; [Intel indica](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html) una fuente de al menos 600 W y un conector de 8 pines; las tarjetas de otros ensambladores pueden variar',
          'RX 7800 XT 16GB: consulta el consumo, la fuente y los conectores que indica el fabricante',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Son suficientes 8 GB de VRAM para ejecutar LLMs localmente?',
            a: '8 GB de VRAM te limitan a modelos 7B en cuantización Q4 — el modelo apenas cabe. No puedes ejecutar modelos 13B en calidad completa, y los modelos 14B se descargarán parcialmente a la RAM del sistema, y la velocidad suele caer de forma brusca, a menudo por un factor grande, según cuánto se desborde. Para un uso local de LLM significativo en 2026, 12 GB es el mínimo práctico; se recomienda 16 GB.',
          },
          {
            q: '¿Puedo comprar una RTX 3090 de segunda mano por menos de $500 en 2026?',
            a: 'No. La RTX 3090 usada se vendió por $1,500–1,725 USD (mediana $1,650) en 225 ventas cerradas en eBay EE. UU., 13–23 de noviembre de 2026, sin envío ([guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/); precios en dólares sin convertir, en tu país pueden variar según impuestos locales), así que no es una opción por debajo de $500. Son datos de anuncios, no una cotización. Sus 24 GB de VRAM la mantienen atractiva: es una vía con CUDA hacia modelos de clase 30B, que necesitan unos 18–20 GB en Q4. No es la única tarjeta de 24 GB: el 7 de noviembre, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostraba una mediana de precio pedido de $1,499 para una AMD RX 7900 XTX usada en eBay EE. UU. (29 anuncios) y $2,099 nueva en Amazon EE. UU.; la tarjeta no tiene CUDA. Los precios pedidos no son directamente comparables con las ventas cerradas de arriba.',
          },
          {
            q: '¿Funciona AMD para ejecutar LLMs localmente?',
            a: 'Sí, con matices. La [documentación de GPU de Ollama](https://docs.ollama.com/gpu) incluye la RX 7800 XT para Linux y Windows con controlador ROCm. AMD usa ROCm en lugar de CUDA de NVIDIA, así que comprueba que cada herramienta que vayas a usar, también para ajuste fino, admite tu tarjeta. La RX 7800 XT usada se vendió a $485–560 (mediana $525; eBay EE. UU., consultado el 26 de noviembre de 2026), así que muchas cuestan más de $500. Para ajuste fino o menos configuración, elegiríamos una RTX 3060 12GB usada.',
          },
          {
            q: '¿Qué hay de las GPU Intel Arc para IA?',
            a: 'Es una opción de 12 GB, pero revisa primero el precio. Las cifras de noviembre iban de un promedio de anuncios de eBay de $399 ([GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)) a un anuncio de Amazon EE. UU. de $851.16 ([VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/), 27 de noviembre). El otro límite es el software: la [documentación de GPU de Ollama](https://docs.ollama.com/gpu) no menciona Arc por su nombre y la [documentación de vLLM](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/) describe el soporte para GPU Intel como inicial. Para ajuste fino LoRA, elegiríamos una RTX 3060 12GB usada.',
          },
          {
            q: '¿Puedo ejecutar un modelo de 70B en una sola GPU por menos de $500?',
            a: 'No a plena velocidad. Incluso la RTX 3090 (24 GB) no puede almacenar 70B Q4 (~40 GB) completamente en VRAM. Puedes usar descarga a CPU con llama.cpp para dividir el modelo entre VRAM y RAM del sistema, pero entonces la generación va muy por debajo de la velocidad de un modelo que cabe en la VRAM, lo que hace poco práctico el uso interactivo. Para ejecutar modelos 70B en GPU, necesitas dos tarjetas de 24 GB (2× RTX 3090 con 48 GB en total) o inferencia en la nube.',
          },
          {
            q: '¿Los nuevos modelos (RTX 5060 Ti) harán obsoletas estas GPU?',
            a: 'Con los precios que revisamos, no entra en este presupuesto. El precio pedido mínimo de la RTX 5060 Ti 16GB nueva era de $617.99 ([BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 de octubre) y Amazon EE. UU. mostraba $769.99 ([GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 de noviembre). Tiene 16 GB de VRAM y un precio de lista de $429. Si un vendedor fiable la ofrece por menos de $500, merece la pena considerarla. Los anuncios del 27–28 de noviembre eran aún más caros: unos $800 en [gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb) (28 de noviembre) y $849.99 en Amazon EE. UU. según [BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti) (27 de noviembre).',
          },
          {
            q: '¿Cuánto cuesta una RTX 4060 Ti 16GB de segunda mano?',
            a: 'Las fuentes discrepan. [guía de GPU usadas de InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) da $450–550 sin indicar la base. [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listaba el 11 de octubre un precio pedido mínimo de $649.99 usada y $790 nueva (solo 3 anuncios de nuevas). [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostraba una mediana pedida de $745 en usadas (16 anuncios, 7 de noviembre). Consulta los anuncios vendidos (no activos) de eBay y confirma que es la variante de 16 GB.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Mejores GPUs para LLMs locales](/es/local-llms/best-gpus-for-local-llms) -- mejores GPUs para LLMs locales',
          '[Mejores GPUs económicas para LLMs locales](/es/local-llms/best-budget-gpus-local-llm) -- mejores GPUs económicas para LLMs locales',
          '[¿Cuánta VRAM necesitas para LLMs locales?](/es/local-llms/how-much-vram-local-llm) -- ¿cuánta VRAM necesitas?',
          '[Calculadora de VRAM para LLMs locales](/es/local-llms/vram-calculator-local-llm) -- calculadora de VRAM para LLMs locales',
          '[Comprar GPUs de segunda mano para LLMs locales](/es/local-llms/used-gpus-for-local-llms) -- comprar GPUs de segunda mano para LLMs locales',
          '[Alquilar una tarjeta de 24 GB por unos pocos dólares](/es/power-local-llm/best-cloud-gpu-providers) -- Proveedores de alquiler de GPU comparados, para probar una tarjeta más grande antes de comprar.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Son suficientes 8 GB de VRAM para ejecutar LLMs localmente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '8 GB de VRAM te limitan a modelos 7B en cuantización Q4 — el modelo apenas cabe. No puedes ejecutar modelos 13B en calidad completa, y los modelos 14B se descargarán parcialmente a la RAM del sistema, y la velocidad suele caer de forma brusca, a menudo por un factor grande, según cuánto se desborde. Para un uso local de LLM significativo en 2026, 12 GB es el mínimo práctico; se recomienda 16 GB.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo comprar una RTX 3090 de segunda mano por menos de $500 en 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. La RTX 3090 usada se vendió por $1,500–1,725 USD (mediana $1,650) en 225 ventas cerradas en eBay EE. UU., 13–23 de noviembre de 2026, sin envío (guía de GPU usadas de InsiderLLM; precios en dólares sin convertir, en tu país pueden variar según impuestos locales), así que no es una opción por debajo de $500. Son datos de anuncios, no una cotización. Sus 24 GB de VRAM la mantienen atractiva: es una vía con CUDA hacia modelos de clase 30B, que necesitan unos 18–20 GB en Q4. No es la única tarjeta de 24 GB: el 7 de noviembre, GeekyInc mostraba una mediana de precio pedido de $1,499 para una AMD RX 7900 XTX usada en eBay EE. UU. (29 anuncios) y $2,099 nueva en Amazon EE. UU.; la tarjeta no tiene CUDA. Los precios pedidos no son directamente comparables con las ventas cerradas de arriba.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Funciona AMD para ejecutar LLMs localmente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, con matices. La documentación de GPU de Ollama incluye la RX 7800 XT para Linux y Windows con controlador ROCm. AMD usa ROCm en lugar de CUDA de NVIDIA, así que comprueba que cada herramienta que vayas a usar, también para ajuste fino, admite tu tarjeta. La RX 7800 XT usada se vendió a $485–560 (mediana $525; eBay EE. UU., consultado el 26 de noviembre de 2026), así que muchas cuestan más de $500. Para ajuste fino o menos configuración, elegiríamos una RTX 3060 12GB usada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué hay de las GPU Intel Arc para IA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Es una opción de 12 GB, pero revisa primero el precio. Las cifras de noviembre iban de un promedio de anuncios de eBay de $399 (GPU Poet) a un anuncio de Amazon EE. UU. de $851.16 (VideoCardPrices, 27 de noviembre). El otro límite es el software: la documentación de GPU de Ollama no menciona Arc por su nombre y la documentación de vLLM describe el soporte para GPU Intel como inicial. Para ajuste fino LoRA, elegiríamos una RTX 3060 12GB usada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo ejecutar un modelo de 70B en una sola GPU por menos de $500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No a plena velocidad. Incluso la RTX 3090 (24 GB) no puede almacenar 70B Q4 (~40 GB) completamente en VRAM. Puedes usar descarga a CPU con llama.cpp para dividir el modelo entre VRAM y RAM del sistema, pero entonces la generación va muy por debajo de la velocidad de un modelo que cabe en la VRAM, lo que hace poco práctico el uso interactivo. Para ejecutar modelos 70B en GPU, necesitas dos tarjetas de 24 GB (2× RTX 3090 con 48 GB en total) o inferencia en la nube.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Los nuevos modelos (RTX 5060 Ti) harán obsoletas estas GPU?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Con los precios que revisamos, no entra en este presupuesto. El precio pedido mínimo de la RTX 5060 Ti 16GB nueva era de $617.99 (BuySellRAM, 11 de octubre) y Amazon EE. UU. mostraba $769.99 (GeekyInc, 7 de noviembre). Tiene 16 GB de VRAM y un precio de lista de $429. Si un vendedor fiable la ofrece por menos de $500, merece la pena considerarla. Los anuncios del 27–28 de noviembre eran aún más caros: unos $800 en gpuprix (28 de noviembre) y $849.99 en Amazon EE. UU. según BasketPrice (27 de noviembre).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta una RTX 4060 Ti 16GB de segunda mano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las fuentes discrepan. guía de GPU usadas de InsiderLLM da $450–550 sin indicar la base. BuySellRAM listaba el 11 de octubre un precio pedido mínimo de $649.99 usada y $790 nueva (solo 3 anuncios de nuevas). GeekyInc mostraba una mediana pedida de $745 en usadas (16 anuncios, 7 de noviembre). Consulta los anuncios vendidos (no activos) de eBay y confirma que es la variante de 16 GB.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mejores GPU para inferencia LLM por menos de $500 (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB (usada)', description: 'Elección editorial — 12 GB de VRAM, CUDA, precios de venta en EE. UU. por debajo de $500' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: 'Opción nueva de 12 GB — las fuentes de precio actuales discrepan' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB (usada)', description: '16 GB de VRAM — mediana de venta en EE. UU. $525, sobre el presupuesto' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Mejor GPU para inferencia LLM por menos de $500 (2026)',
      description: 'GPU para inferencia LLM local por menos de $500: una RTX 3060 12GB usada como elección editorial, además de la Intel Arc B580 12GB y la RX 7800 XT 16GB usada, con la base de cada precio.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/es/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      about: [
        { '@type': 'Thing', name: 'GPU para inferencia LLM' },
        { '@type': 'Thing', name: 'Inteligencia Artificial local' },
        { '@type': 'Thing', name: 'NVIDIA GeForce RTX 3060' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'LM Studio' },
        { '@type': 'SoftwareApplication', name: 'llama.cpp' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'أفضل ⁨GPU⁩ للاستدلال على نماذج ⁨LLM⁩ بأقل من $⁨500⁩ (⁨2026⁩)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ar.webp',
    seoTitle: 'أفضل GPU بأقل من $500 للنماذج المحلية (2026)',
    metaDescription: 'اختيارنا بأقل من $500 للنماذج المحلية: RTX 3060 12GB مستعملة، بيعت بين $310–350 في الولايات المتحدة. أسعار Arc B580 متضاربة، فتحقق من العروض.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
        productName: 'RTX 3060 12GB (مستعملة)',
        productCategory: 'gpu',
        priceRange: '$310–350 مستعملة (مبيعات أمريكية، نوفمبر 2026)',
        label: 'تحقق من سعر RTX 3060 12GB ←',
      },
      {
        url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
        productName: 'Intel Arc B580 12GB',
        productCategory: 'gpu',
        priceRange: 'المصادر متضاربة؛ تحقق من العرض',
        label: 'تحقق من سعر Intel Arc B580 12GB ←',
      },
      {
        url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB',
        productName: 'RX 7800 XT 16GB (مستعملة)',
        productCategory: 'gpu',
        priceRange: '$485–560 مستعملة (مبيعات أمريكية، نوفمبر 2026)',
        label: 'تحقق من سعر RX 7800 XT 16GB ←',
      },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**اختيارنا بأقل من $500 للاستدلال المحلي على نماذج LLM هو RTX 3060 12GB مستعملة: 12 GB من VRAM وسلسلة أدوات CUDA وسعر $310–350 (الوسيط $330) في 209 عمليات بيع مكتملة على eBay الأمريكي، 17–26 نوفمبر 2026، دون الشحن ([دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). هذا اختيار تحريري وليس نتيجة اختبار أداء. لا نضع Intel Arc B580 12GB في المرتبة الأولى لأن مصادر أسعار نوفمبر متباينة كثيراً. أما RX 7800 XT 16GB المستعملة ففيها VRAM أكبر لكن وسيط بيعها $525 يتجاوز $500.** الأسعار بالدولار الأمريكي وقد تختلف في بلدك.',
    quickAnswerTop: {
      question: 'ما أفضل GPU لتشغيل نماذج LLM محليًا بأقل من $500؟',
      answer: '**اختيارنا هو RTX 3060 12GB مستعملة.** بيعت بين $310–350 (الوسيط $330) في 209 عمليات بيع مكتملة على eBay الأمريكي، 17–26 نوفمبر 2026، دون الشحن ([دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/))، وتوفر 12 GB من VRAM مع CUDA. أما Intel Arc B580 12GB فخيار جديد لا نستطيع تأكيد سعره الحالي. وبيعت RX 7800 XT 16GB المستعملة بين $485–560 (الوسيط $525). الأسعار بالدولار الأمريكي وقد تختلف في بلدك.',
      bullets: [
        '**اختيارنا:** RTX 3060 12GB مستعملة — بيعت بين $310–350 (أمريكا، 17–26 نوفمبر 2026)، مع CUDA',
        '**خيار جديد:** Intel Arc B580 12GB — مصادر السعر متضاربة؛ تحقق من البائع',
        '**VRAM أكبر:** RX 7800 XT 16GB مستعملة — وسيط البيع $525؛ الطرف الأدنى فقط ضمن $500',
        '⚠️ RTX 3090 مستعملة: بيعت بين $1,500–1,725 (أمريكا، 13–23 نوفمبر 2026) — أعلى بكثير من $500',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**نختار RTX 3060 12GB مستعملة: 12 GB من VRAM مع CUDA، وبيعت بين $310–350 (الوسيط $330) في الولايات المتحدة، 17–26 نوفمبر 2026**',
          'Intel Arc B580 12GB: أرقام نوفمبر تمتد من متوسط إعلانات eBay قدره $399 إلى إعلان على Amazon الأمريكي بسعر $851.16',
          'RX 7800 XT 16GB مستعملة: بيعت بين $485–560 (الوسيط $525)، والطرف الأدنى فقط ضمن $500',
          '⚠️ RTX 4060 Ti 16GB: مصادر السعر متضاربة، فلا نرتّبها',
          '⚠️ RTX 3090 مستعملة: بيعت بين $1,500–1,725 — أعلى بكثير من $500',
          'جميع الأسعار أمريكية وبأسس مختلفة (بيع، طلب، تجزئة) ونذكر الأساس. لم تُجرِ PromptQuorum اختبارات أداء لهذه البطاقات.',
        ],
      },
      rankedList: {
        title: 'أفضل بطاقات GPU للاستدلال على نماذج LLM بأقل من $500 — مصنّفة',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختيارنا للاستدلال المحلي على نماذج LLM بأقل من $500 هو RTX 3060 12GB مستعملة، لأنها توفر 12 GB من VRAM ودعم CUDA، وأسعار بيعها الأخيرة في الولايات المتحدة تقع كلها تحت $500.',
          },
          {
            type: 'plain-terms',
            text: 'تحدد VRAM في GPU أي نماذج ذكاء اصطناعي يمكنك تشغيلها. بطاقة بسعة 16 GB تشغّل نماذج 14B بجودة عالية. بطاقة بسعة 24 GB (مثل RTX 3090 مستعملة) تشغّل نماذج فئة 30B بتكميم Q4. بأقل من 12 GB تكون محدوداً بنماذج 7B أو أصغر.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'RTX 3060 12GB مستعملة — اختيارنا',
            content: 'بطاقة NVIDIA GeForce RTX 3060 12GB المستعملة هي اختيارنا التحريري. بيعت بين $310–350 (الوسيط $330) في 209 عمليات بيع مكتملة على eBay الأمريكي، 17–26 نوفمبر 2026، دون الشحن ([دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). يتسع نموذج 14B بتكميم Q4 في 12 GB، أما 14B بتكميم Q8 فلا. وفي رأينا تمنحها CUDA أبسط دعم للأدوات بين البطاقات الثلاث، بما في ذلك الضبط الدقيق LoRA؛ راجع وثائق كل مشروع. وتدرجها [وثائق GPU الخاصة بـ Ollama](https://docs.ollama.com/gpu) ضمن المدعومة. للبطاقات المستعملة مخاطر في الحالة والضمان، فاختبرها خلال مهلة الإرجاع. والبطاقات الجديدة سوق منفصلة: أدرجت [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) في 11 أكتوبر 2026 أسعار طلب أمريكية بين $320–400. أما للمستعملة فقد أظهر [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) وسيط سعر مطلوب أعلى قدره $400 (95 عرضاً، 7 نوفمبر 2026)، والسعر المطلوب ليس عملية بيع مكتملة.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB على Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB على Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — خيار جديد، تحقق من السعر',
            content: 'نضع Intel Arc B580 12GB ثانيةً لأننا لا نستطيع تأكيد سعر حالي. في 27 نوفمبر أدرجها [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) جديدة على Amazon الأمريكي بسعر $851.16 (وكان العرض المتتبَّع عند $369.99 من يونيو إلى أكتوبر)، ومستعملة على eBay بسعر $499. وأظهر [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) لشهر نوفمبر أدنى متوسط قدره $399 من إعلانات eBay (الرقم الحالي $431). ولم تجد [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) في 7 نوفمبر سوى عروض بائعين وسطاء بين $851–1,263. تعامل بحذر مع أرقام الوسطاء وتحقق من البائع قبل الشراء. ولا تذكر [وثائق GPU الخاصة بـ Ollama](https://docs.ollama.com/gpu) بطاقات Arc بالاسم؛ بل تصف Vulkan بأنه دعم GPU إضافي، فتأكد من أن أداتك تعمل.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB على Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB على Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 3,
            title: 'RX 7800 XT 16GB مستعملة — VRAM أكبر وغالباً فوق $500',
            content: 'توفر AMD Radeon RX 7800 XT المستعملة 16 GB من VRAM. بيعت بين $485–560 (الوسيط $525) في 218 عملية بيع مكتملة على eBay الأمريكي، سُحبت في 26 نوفمبر 2026 ([دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/))، فالطرف الأدنى فقط ضمن هذه الميزانية. وأظهرت [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) وسيط سعر طلب أعلى قدره $650 (11 إعلاناً، 7 نوفمبر). وتدرج [وثائق GPU الخاصة بـ Ollama](https://docs.ollama.com/gpu) البطاقة على Linux وWindows مع تعريف ROCm. تستخدم AMD منصة ROCm بدلاً من CUDA من NVIDIA، فتحقق من أن كل أداة ستستخدمها، بما فيها أدوات الضبط الدقيق، تدعم بطاقتك.',
            affiliateLinks: [
              { label: 'RX 7800 XT 16GB على Amazon', url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB' },
              { label: 'RX 7800 XT 16GB على Newegg', url: 'https://www.newegg.com/p/pl?d=RX+7800+XT+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'مقارنة GPU — أدلة السعر والسعة',
        content: 'لم تُجرِ PromptQuorum اختبارات أداء لهذه البطاقات، لذا يعرض الجدول VRAM وأدلة السعر وسعة النماذج. أرقام RTX 3060 وRX 7800 XT هي مبيعات مكتملة على eBay الأمريكي ([دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). ليست لدينا بيانات بيع لـ Arc B580 وأرقام إعلاناتها متضاربة، فلا تقارنها كأنها من الأساس نفسه. خارج الترتيب لأن الأدلة تضعها فوق $500: RTX 3090 المستعملة (بيعت بين $1,500–1,725)، وRTX 5060 Ti 16GB الجديدة (أدنى سعر طلب $617.99 لدى [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) في 11 أكتوبر؛ و$769.99 على Amazon الأمريكي وفق [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) في 7 نوفمبر)، وRTX 4070 (من $569.99 سعر طلب وفق [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)). الأسعار بالدولار الأمريكي وقد تختلف في بلدك.',
        columns: ['GPU', 'VRAM', 'السعر النموذجي', 'أقصى نموذج'],
        rows: [
          { GPU: 'RTX 3060 12GB (مستعملة) ★', VRAM: '12 GB', 'السعر النموذجي': '$310–350 بيع (مستعملة)', 'أقصى نموذج': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12 GB', 'السعر النموذجي': '$399–851، المصادر متضاربة', 'أقصى نموذج': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB (مستعملة)', VRAM: '16 GB', 'السعر النموذجي': '$485–560 بيع (مستعملة)', 'أقصى نموذج': '14B (Q4، سياق أوسع)' },
        ],
      },
      methodology: {
        title: 'كيف اخترنا هذه البطاقات',
        content: 'معايير الاختيار: 12 GB من VRAM على الأقل، وطريقة موثقة أو مذكورة لتشغيل النماذج المحلية، وأدلة سعر قرب $500. لم تُجرِ PromptQuorum اختبارات أداء. الترتيب اختيار تحريري يستند إلى VRAM ودعم البرمجيات وقوة أدلة السعر؛ وتُرجَّح المبيعات المكتملة على أسعار الطلب والتجزئة. كل الأسعار أمريكية وتاريخ الاطلاع 2026-11-28: [دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) (مبيعات)، و[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) (أدنى أسعار طلب، 11 أكتوبر، NVIDIA فقط)، و[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) (وسيط الطلب على eBay وسعر الجديد على Amazon، 7 نوفمبر)، و[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) و[VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) (متتبعا إعلانات Arc B580). لا نرتّب RTX 4060 Ti 16GB: يعطي [دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) نطاق $450–550 دون ذكر الأساس، وتعطي [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) سعر طلب $649.99 للمستعملة و$790 للجديدة، و[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) وسيط طلب $745 للمستعملة. وتربط تقارير السوق ارتفاع أسعار 2026 بنقص الذاكرة ([متتبّع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)).',
      },
      vramGuide: {
        title: 'متطلبات VRAM حسب حجم النموذج',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'متطلبات VRAM: نموذج 7B يحتاج ~4–5 GB (Q4) أو ~7–8 GB (Q8)؛ نموذج 14B يحتاج ~8–9 GB (Q4) أو ~16 GB (Q8)؛ نموذج 30B يحتاج ~18–20 GB (Q4)؛ نموذج 70B يحتاج ~40–42 GB (Q4).',
          },
          {
            type: 'plain-terms',
            text: 'فكّر في VRAM كذاكرة RAM لنماذج الذكاء الاصطناعي. يجب أن يناسب النموذج بالكامل في VRAM لاستدلال سريع. إذا فاض إلى RAM النظام (يُسمى "offloading")، تنخفض السرعة عادةً بشكل حاد، وغالباً بعامل كبير، بحسب مقدار ما يفيض. تكميم Q4 يقلّص الحجم إلى النصف مقارنة بـ Q8 بتكلفة صغيرة في الجودة.',
          },
        ],
        items: [
          'نموذج 7B بتكميم Q4: ~4.5 GB VRAM — أي GPU في هذه القائمة تتعامل معه بسهولة',
          'نموذج 7B بتكميم Q8: ~7.5 GB VRAM — يناسب كل بطاقات GPU هنا',
          'نموذج 13B بتكميم Q4: ~8.5 GB VRAM — يناسب كل بطاقات GPU في هذه القائمة',
          'نموذج 14B بتكميم Q8: [يذكر Ollama أن حجم Qwen3 14B هو 16 GB](https://ollama.com/library/qwen3/tags)، ومع السياق يحتاج إلى أكثر من 16 GB، لذا لا تستوعبه أي من البطاقات الثلاث بالكامل في VRAM',
          'نموذج 30B بتكميم Q4: ~18 GB VRAM — يتطلب 24 GB (RTX 3090 مستعملة)',
          'نموذج 70B بتكميم Q4: ~40 GB — يتطلب بطاقتي GPU أو تفريغاً إلى CPU',
        ],
      },
      decisionMatrix: {
        title: 'أي GPU يجب أن تشتري؟',
        content: 'استخدم دليل القرار هذا وفقاً لحالة استخدامك الرئيسية:',
        items: [
          '**CUDA ضمن الميزانية** ← RTX 3060 12GB مستعملة، بيعت بين $310–350 (أمريكا، 17–26 نوفمبر 2026).',
          '**تريد بطاقة جديدة** ← Intel Arc B580 12GB، إن عرضها بائع موثوق ضمن ميزانيتك وكانت أداتك تدعمها.',
          '**تحتاج 16 GB** ← RX 7800 XT مستعملة؛ وسيط البيع $525، فقد تضطر لتجاوز $500.',
          '**تحتاج قدرة نماذج 30B؟** ← بطاقة بسعة 24 GB مثل RTX 3090 المستعملة، بيعت بين $1,500–1,725 — أعلى بكثير من $500.',
          '**مستخدم Windows** ← في رأينا، RTX 3060 12GB المستعملة مع CUDA هي الطريق الأبسط.',
          '**هل تحتاج إلى أكثر من 12 GB لاختبار؟** بدلًا من توسيع الميزانية، يمكنك [استئجار بطاقة 24 GB مقابل بضعة دولارات](/ar/power-local-llm/best-cloud-gpu-providers) ومعرفة ما إذا كانت النماذج الأكبر تستحق ذلك.',
        ],
      },
      softwareCompat: {
        title: 'توافق البرمجيات حسب GPU',
        content: 'يتغير الدعم بسرعة، فراجع وثائق كل مشروع. تدرج [وثائق GPU الخاصة بـ Ollama](https://docs.ollama.com/gpu) بطاقتي RTX 3060 وRX 7800 XT ولا تذكر بطاقات Arc بالاسم.',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ راجع الوثائق', vLLM: '⚠️ جزئي', 'Text Gen WebUI': '⚠️ راجع الوثائق', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ راجع الوثائق', vLLM: '⚠️ راجع الوثائق', 'Text Gen WebUI': '⚠️ راجع الوثائق', 'Fine-Tuning CUDA': '❌' },
        ],
      },
      powerAndCooling: {
        title: 'استهلاك الطاقة ومتطلبات النظام',
        content: 'يحدد استهلاك GPU أي مزود طاقة وصندوق تحتاج. غالباً ما يبقي تشغيل نماذج LLM بطاقات GPU عند 80–100% من الاستخدام — على خلاف الألعاب، قلّما توجد إطارات خاملة. تحقق من قدرة مزود الطاقة والموصلات التي توصي بها الشركة المصنّعة لطرازك بالتحديد.',
        items: [
          'RTX 3060 12GB: 170 W — عادةً مزود طاقة بسعة 550 W أو أكثر؛ موصّل 8 سنون واحد؛ راجع توصية الشركة المصنّعة',
          'Intel Arc B580 12GB: 190 W؛ [تذكر Intel](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html) مزود طاقة بحد أدنى 600 W وموصلاً واحداً بثمانية سنون، وقد تختلف بطاقات الشركات الشريكة',
          'RX 7800 XT 16GB: تحقق من استهلاك الطاقة ومزود الطاقة والموصلات وفق الشركة المصنّعة',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل 8 GB من VRAM كافية لتشغيل نماذج LLM محلياً؟',
            a: '8 GB من VRAM تحدّك بنماذج 7B بتكميم Q4 — النموذج بالكاد يناسب. لا يمكنك تشغيل نماذج 13B بجودة كاملة، ونماذج 14B ستُفرَّغ جزئياً إلى RAM النظام، وتنخفض السرعة عادةً بشكل حاد، وغالباً بعامل كبير، بحسب مقدار ما يفيض. لاستخدام محلي ذي معنى لنماذج LLM في 2026، 12 GB هو الحد الأدنى العملي؛ ويُنصح بـ 16 GB.',
          },
          {
            q: 'هل لا يزال بإمكاني شراء RTX 3090 مستعملة بأقل من $500 في 2026؟',
            a: 'لا. بيعت RTX 3090 المستعملة بين $1,500–1,725 (الوسيط $1,650) في 225 عملية بيع مكتملة على eBay الأمريكي، 13–23 نوفمبر 2026، دون الشحن ([دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/))، لذا ليست خياراً بأقل من $500. هذه بيانات إعلانات وليست عرض سعر، وهي بالدولار الأمريكي وقد تختلف في بلدك بحسب الضرائب والرسوم الجمركية. وتبقى سعة 24 GB VRAM هي ما يجعلها جذابة: فهي طريق مع CUDA إلى نماذج فئة 30B التي تحتاج نحو 18–20 GB بتكميم Q4. وليست البطاقة الوحيدة بسعة 24 GB: في 7 نوفمبر أظهر [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) وسيط سعر طلب قدره $1,499 لبطاقة AMD RX 7900 XTX المستعملة على eBay الأمريكي (29 إعلاناً)، وسعر $2,099 للجديدة على Amazon الأمريكي؛ وهي لا تدعم CUDA. ولا تصح مقارنة أسعار الطلب مباشرةً بأسعار البيع المذكورة أعلاه.',
          },
          {
            q: 'هل تعمل AMD لتشغيل نماذج LLM محلياً؟',
            a: 'نعم، مع تحفظات. تدرج [وثائق GPU الخاصة بـ Ollama](https://docs.ollama.com/gpu) بطاقة RX 7800 XT على Linux وWindows مع تعريف ROCm. تستخدم AMD منصة ROCm بدلاً من CUDA من NVIDIA، فتحقق من أن كل أداة ستستخدمها، بما فيها أدوات الضبط الدقيق، تدعم بطاقتك. بيعت RX 7800 XT المستعملة بين $485–560 (الوسيط $525؛ eBay الأمريكي، سُحبت في 26 نوفمبر 2026)، فكثير منها يتجاوز $500. وللضبط الدقيق أو لإعداد أقل نختار RTX 3060 12GB مستعملة.',
          },
          {
            q: 'ماذا عن بطاقات Intel Arc للذكاء الاصطناعي؟',
            a: 'هي خيار بسعة 12 GB، لكن تحقق من السعر أولاً. امتدت أرقام نوفمبر من متوسط إعلانات eBay قدره $399 ([GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)) إلى إعلان على Amazon الأمريكي بسعر $851.16 ([VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)، 27 نوفمبر). والقيد الآخر هو البرمجيات: لا تذكر [وثائق GPU الخاصة بـ Ollama](https://docs.ollama.com/gpu) بطاقات Arc بالاسم، وتصف [وثائق vLLM](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/) دعم بطاقات Intel بأنه أولي. وللضبط الدقيق LoRA نختار RTX 3060 12GB مستعملة.',
          },
          {
            q: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بأقل من $500؟',
            a: 'ليس بكامل السرعة. حتى RTX 3090 (24 GB) لا تستطيع تخزين 70B Q4 (~40 GB) بالكامل في VRAM. يمكنك استخدام التفريغ إلى CPU مع llama.cpp لتقسيم النموذج بين VRAM وRAM النظام، لكن التوليد حينها يجري بسرعة أقل بكثير من نموذج يتسع في VRAM، ما يجعل الاستخدام التفاعلي غير عملي. لتشغيل نماذج 70B على GPU، تحتاج إلى بطاقتين بسعة 24 GB (2× RTX 3090 بسعة 48 GB إجمالاً) أو استدلال سحابي.',
          },
          {
            q: 'هل ستجعل البطاقات الجديدة (RTX 5060 Ti) هذه البطاقات قديمة؟',
            a: 'ليست ضمن هذه الميزانية وفق الأسعار التي تحققنا منها. كان أدنى سعر طلب للجديدة من RTX 5060 Ti 16GB هو $617.99 ([BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)، 11 أكتوبر)، وعرض Amazon الأمريكي $769.99 ([GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)، 7 نوفمبر). فيها 16 GB من VRAM وسعرها المُعلن $429. إن عرضها بائع موثوق بأقل من $500 فهي تستحق النظر. وكانت عروض 27–28 نوفمبر أعلى من ذلك: نحو $800 في [gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb) (28 نوفمبر) و$849.99 على Amazon الأمريكي وفق [BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti) (27 نوفمبر).',
          },
          {
            q: 'كم يكلّف RTX 4060 Ti 16GB مستعملة؟',
            a: 'المصادر متضاربة. يعطي [دليل InsiderLLM لبطاقات GPU المستعملة](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) نطاق $450–550 دون ذكر الأساس. وأدرجت [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) في 11 أكتوبر أدنى سعر طلب $649.99 للمستعملة و$790 للجديدة (3 إعلانات للجديدة فقط). وأظهرت [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) وسيط طلب $745 للمستعملة (16 إعلاناً، 7 نوفمبر). راجع الإعلانات المباعة (لا النشطة) على eBay وتأكد من أنها نسخة 16 GB.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مزيد من القراءة',
        items: [
          '[أفضل وحدات معالجة الرسومات للنماذج اللغوية المحلية](/ar/local-llms/best-gpus-for-local-llms) -- أفضل وحدات معالجة الرسومات للنماذج اللغوية المحلية',
          '[أفضل وحدات معالجة الرسومات الاقتصادية للنماذج اللغوية المحلية](/ar/local-llms/best-budget-gpus-local-llm) -- أفضل وحدات معالجة الرسومات الاقتصادية',
          '[كم تحتاج من VRAM للنماذج اللغوية المحلية؟](/ar/local-llms/how-much-vram-local-llm) -- كم تحتاج من VRAM؟',
          '[حاسبة VRAM للنماذج اللغوية المحلية](/ar/local-llms/vram-calculator-local-llm) -- حاسبة VRAM للنماذج اللغوية المحلية',
          '[شراء وحدات معالجة الرسومات المستعملة للنماذج اللغوية المحلية](/ar/local-llms/used-gpus-for-local-llms) -- شراء وحدات معالجة الرسومات المستعملة',
          '[استئجار بطاقة 24 GB مقابل بضعة دولارات](/ar/power-local-llm/best-cloud-gpu-providers) -- مقارنة بين مزوّدي تأجير GPU لتجربة بطاقة أكبر قبل الشراء.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'هل 8 GB من VRAM كافية لتشغيل نماذج LLM محلياً؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '8 GB من VRAM تحدّك بنماذج 7B بتكميم Q4 — النموذج بالكاد يناسب. لا يمكنك تشغيل نماذج 13B بجودة كاملة، ونماذج 14B ستُفرَّغ جزئياً إلى RAM النظام، وتنخفض السرعة عادةً بشكل حاد، وغالباً بعامل كبير، بحسب مقدار ما يفيض. لاستخدام محلي ذي معنى لنماذج LLM في 2026، 12 GB هو الحد الأدنى العملي؛ ويُنصح بـ 16 GB.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل لا يزال بإمكاني شراء RTX 3090 مستعملة بأقل من $500 في 2026؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا. بيعت RTX 3090 المستعملة بين $1,500–1,725 (الوسيط $1,650) في 225 عملية بيع مكتملة على eBay الأمريكي، 13–23 نوفمبر 2026، دون الشحن (دليل InsiderLLM لبطاقات GPU المستعملة)، لذا ليست خياراً بأقل من $500. هذه بيانات إعلانات وليست عرض سعر، وهي بالدولار الأمريكي وقد تختلف في بلدك بحسب الضرائب والرسوم الجمركية. وتبقى سعة 24 GB VRAM هي ما يجعلها جذابة: فهي طريق مع CUDA إلى نماذج فئة 30B التي تحتاج نحو 18–20 GB بتكميم Q4. وليست البطاقة الوحيدة بسعة 24 GB: في 7 نوفمبر أظهر GeekyInc وسيط سعر طلب قدره $1,499 لبطاقة AMD RX 7900 XTX المستعملة على eBay الأمريكي (29 إعلاناً)، وسعر $2,099 للجديدة على Amazon الأمريكي؛ وهي لا تدعم CUDA. ولا تصح مقارنة أسعار الطلب مباشرةً بأسعار البيع المذكورة أعلاه.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل تعمل AMD لتشغيل نماذج LLM محلياً؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'نعم، مع تحفظات. تدرج وثائق GPU الخاصة بـ Ollama بطاقة RX 7800 XT على Linux وWindows مع تعريف ROCm. تستخدم AMD منصة ROCm بدلاً من CUDA من NVIDIA، فتحقق من أن كل أداة ستستخدمها، بما فيها أدوات الضبط الدقيق، تدعم بطاقتك. بيعت RX 7800 XT المستعملة بين $485–560 (الوسيط $525؛ eBay الأمريكي، سُحبت في 26 نوفمبر 2026)، فكثير منها يتجاوز $500. وللضبط الدقيق أو لإعداد أقل نختار RTX 3060 12GB مستعملة.',
          },
        },
        {
          '@type': 'Question',
          name: 'ماذا عن بطاقات Intel Arc للذكاء الاصطناعي؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'هي خيار بسعة 12 GB، لكن تحقق من السعر أولاً. امتدت أرقام نوفمبر من متوسط إعلانات eBay قدره $399 (GPU Poet) إلى إعلان على Amazon الأمريكي بسعر $851.16 (VideoCardPrices، 27 نوفمبر). والقيد الآخر هو البرمجيات: لا تذكر وثائق GPU الخاصة بـ Ollama بطاقات Arc بالاسم، وتصف وثائق vLLM دعم بطاقات Intel بأنه أولي. وللضبط الدقيق LoRA نختار RTX 3060 12GB مستعملة.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بأقل من $500؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ليس بكامل السرعة. حتى RTX 3090 (24 GB) لا تستطيع تخزين 70B Q4 (~40 GB) بالكامل في VRAM. يمكنك استخدام التفريغ إلى CPU مع llama.cpp لتقسيم النموذج بين VRAM وRAM النظام، لكن التوليد حينها يجري بسرعة أقل بكثير من نموذج يتسع في VRAM، ما يجعل الاستخدام التفاعلي غير عملي. لتشغيل نماذج 70B على GPU، تحتاج إلى بطاقتين بسعة 24 GB (2× RTX 3090 بسعة 48 GB إجمالاً) أو استدلال سحابي.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل ستجعل البطاقات الجديدة (RTX 5060 Ti) هذه البطاقات قديمة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ليست ضمن هذه الميزانية وفق الأسعار التي تحققنا منها. كان أدنى سعر طلب للجديدة من RTX 5060 Ti 16GB هو $617.99 (BuySellRAM، 11 أكتوبر)، وعرض Amazon الأمريكي $769.99 (GeekyInc، 7 نوفمبر). فيها 16 GB من VRAM وسعرها المُعلن $429. إن عرضها بائع موثوق بأقل من $500 فهي تستحق النظر. وكانت عروض 27–28 نوفمبر أعلى من ذلك: نحو $800 في gpuprix (28 نوفمبر) و$849.99 على Amazon الأمريكي وفق BasketPrice (27 نوفمبر).',
          },
        },
        {
          '@type': 'Question',
          name: 'كم يكلّف RTX 4060 Ti 16GB مستعملة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'المصادر متضاربة. يعطي دليل InsiderLLM لبطاقات GPU المستعملة نطاق $450–550 دون ذكر الأساس. وأدرجت BuySellRAM في 11 أكتوبر أدنى سعر طلب $649.99 للمستعملة و$790 للجديدة (3 إعلانات للجديدة فقط). وأظهرت GeekyInc وسيط طلب $745 للمستعملة (16 إعلاناً، 7 نوفمبر). راجع الإعلانات المباعة (لا النشطة) على eBay وتأكد من أنها نسخة 16 GB.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'ar',
      name: 'أفضل بطاقات GPU للاستدلال على نماذج LLM بأقل من $500 (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB (مستعملة)', description: 'اختيار تحريري — 12 GB VRAM مع CUDA، وأسعار البيع الأمريكية تحت $500' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: 'خيار جديد بسعة 12 GB — مصادر السعر الحالية متضاربة' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB (مستعملة)', description: '16 GB من VRAM — وسيط البيع الأمريكي $525، فوق الميزانية' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'أفضل GPU للاستدلال على نماذج LLM بأقل من $500 (2026)',
      description: 'بطاقات GPU للاستدلال المحلي على نماذج LLM بأقل من $500: RTX 3060 12GB مستعملة اختياراً تحريرياً، إضافة إلى Intel Arc B580 12GB وRX 7800 XT 16GB مستعملة، مع أساس كل سعر.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/ar/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      about: [
        { '@type': 'Thing', name: 'GPU للاستدلال على نماذج LLM' },
        { '@type': 'Thing', name: 'الذكاء الاصطناعي المحلي' },
        { '@type': 'Thing', name: 'NVIDIA GeForce RTX 3060' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'LM Studio' },
        { '@type': 'SoftwareApplication', name: 'llama.cpp' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Melhor GPU para inferência de LLM por menos de US$ 500 (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-pt.webp',
    seoTitle: 'Melhor GPU até US$ 500 para LLMs locais (2026): RTX 3060',
    metaDescription: 'Nossa GPU até US$ 500 para LLMs locais: uma RTX 3060 12GB usada, vendida por US$ 310–350 nos EUA. Os preços da Arc B580 não batem; confira os anúncios.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
        productName: 'RTX 3060 12GB (usada)',
        productCategory: 'gpu',
        priceRange: 'US$ 310–350 usada (vendas nos EUA, nov. 2026)',
        label: 'Ver preço da RTX 3060 12GB →',
      },
      {
        url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
        productName: 'Intel Arc B580 12GB',
        productCategory: 'gpu',
        priceRange: 'fontes divergem; confira o anúncio',
        label: 'Ver preço da Intel Arc B580 12GB →',
      },
      {
        url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB',
        productName: 'RX 7800 XT 16GB (usada)',
        productCategory: 'gpu',
        priceRange: 'US$ 485–560 usada (vendas nos EUA, nov. 2026)',
        label: 'Ver preço da RX 7800 XT 16GB →',
      },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Nossa escolha até US$ 500 para inferência de LLM local é uma RTX 3060 12GB usada: 12 GB de VRAM, a cadeia CUDA e US$ 310–350 (mediana US$ 330) em 209 vendas concluídas no eBay dos EUA, 17–26 de novembro de 2026, sem frete ([guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). É uma escolha editorial, não um resultado de benchmark. Não colocamos a Intel Arc B580 12GB em primeiro porque as fontes de preço de novembro divergem muito. Uma RX 7800 XT 16GB usada tem mais VRAM, mas a mediana de venda de US$ 525 passa de US$ 500.** No Brasil os preços podem variar (impostos de importação e câmbio).',
    quickAnswerTop: {
      question: 'Qual é a melhor GPU para rodar LLMs localmente por menos de US$ 500?',
      answer: '**Nossa escolha é uma RTX 3060 12GB usada.** Ela foi vendida por US$ 310–350 (mediana US$ 330) em 209 vendas concluídas no eBay dos EUA, 17–26 de novembro de 2026, sem frete ([guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), com 12 GB de VRAM e CUDA. A Intel Arc B580 12GB é uma opção nova cujo preço atual não conseguimos confirmar. A RX 7800 XT 16GB usada foi vendida por US$ 485–560 (mediana US$ 525). No Brasil os preços podem variar.',
      bullets: [
        '**Nossa escolha:** RTX 3060 12GB usada — vendida por US$ 310–350 (EUA, 17–26 nov. 2026), CUDA',
        '**Opção nova:** Intel Arc B580 12GB — fontes de preço divergem; confira o vendedor',
        '**Mais VRAM:** RX 7800 XT 16GB usada — mediana de venda US$ 525; só a parte baixa cabe em US$ 500',
        '⚠️ RTX 3090 usada: vendida por US$ 1.500–1.725 (EUA, 13–23 nov. 2026) — muito acima de US$ 500',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Escolhemos uma RTX 3060 12GB usada: 12 GB de VRAM, CUDA e vendida por US$ 310–350 (mediana US$ 330) nos EUA, 17–26 de novembro de 2026**',
          'Intel Arc B580 12GB: os números de novembro vão de uma média de anúncios do eBay de US$ 399 a um anúncio da Amazon dos EUA de US$ 851,16',
          'RX 7800 XT 16GB usada: vendida por US$ 485–560 (mediana US$ 525); só a parte baixa cabe em US$ 500',
          '⚠️ RTX 4060 Ti 16GB: as fontes de preço divergem, então não a classificamos',
          '⚠️ RTX 3090 usada: vendida por US$ 1.500–1.725 — muito acima de US$ 500',
          'Todos os preços são dos EUA e têm bases diferentes (venda, preço pedido, varejo); informamos qual. A PromptQuorum não fez benchmarks dessas placas.',
        ],
      },
      rankedList: {
        title: 'Melhores GPUs para inferência de LLM por menos de US$ 500 — Classificadas',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Nossa escolha para inferência de LLM local até US$ 500 é uma RTX 3060 12GB usada, porque tem 12 GB de VRAM, suporta CUDA e os preços recentes de venda nos EUA ficam inteiramente abaixo de US$ 500.',
          },
          {
            type: 'plain-terms',
            text: 'A VRAM da GPU determina quais modelos de IA você consegue rodar. Uma GPU de 16 GB roda modelos 14B em alta qualidade. Uma GPU de 24 GB (como uma RTX 3090 de segunda mão) roda modelos da classe 30B em Q4. Com menos de 12 GB você fica limitado a modelos 7B ou menores.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'RTX 3060 12GB usada — Nossa escolha',
            content: 'A NVIDIA GeForce RTX 3060 12GB usada é nossa escolha editorial. Ela foi vendida por US$ 310–350 (mediana US$ 330) em 209 vendas concluídas no eBay dos EUA, 17–26 de novembro de 2026, sem frete ([guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Um modelo 14B em Q4 cabe nos 12 GB; um 14B em Q8 não. Na nossa avaliação, o CUDA dá a ela o suporte de ferramentas mais simples das três, inclusive para ajuste fino LoRA; confira a documentação de cada projeto. A [documentação de GPU do Ollama](https://docs.ollama.com/gpu) a lista como compatível. Placas usadas têm riscos de estado e garantia, então teste dentro do prazo de devolução. Placas novas são outro mercado: a [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listava em 11 de outubro de 2026 preços pedidos nos EUA de US$ 320–400. Para usadas, a [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostrou uma mediana pedida maior, de US$ 400 (95 anúncios, 7 de novembro de 2026); preço pedido não é venda concluída.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB na Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB na Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — Opção nova, confira o preço',
            content: 'Colocamos a Intel Arc B580 12GB em segundo porque não conseguimos confirmar um preço atual. Em 27 de novembro, o [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) a listava nova na Amazon dos EUA por US$ 851,16 (o anúncio acompanhado ficou em US$ 369,99 de junho a outubro) e usada no eBay por US$ 499. O [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) mostrava para novembro uma média mínima de US$ 399 a partir de anúncios do eBay (valor atual US$ 431). A [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) só encontrou em 7 de novembro anúncios de revendedores a US$ 851–1.263. Veja com cautela os preços de revendedores e confira o vendedor antes de comprar. A [documentação de GPU do Ollama](https://docs.ollama.com/gpu) não cita placas Arc pelo nome; descreve o Vulkan como suporte adicional a GPUs, então confirme se a sua ferramenta funciona.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB na Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB na Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 3,
            title: 'RX 7800 XT 16GB usada — Mais VRAM, muitas vezes acima de US$ 500',
            content: 'Uma AMD Radeon RX 7800 XT usada oferece 16 GB de VRAM. Foi vendida por US$ 485–560 (mediana US$ 525) em 218 vendas concluídas no eBay dos EUA, consultadas em 26 de novembro de 2026 ([guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)); só a parte baixa cabe neste orçamento. A [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostrava uma mediana de preço pedido maior, de US$ 650 (11 anúncios, 7 de novembro). A [documentação de GPU do Ollama](https://docs.ollama.com/gpu) lista a placa para Linux e Windows com driver ROCm. A AMD usa ROCm em vez do CUDA da NVIDIA, então confira se cada ferramenta que você pretende usar, inclusive para ajuste fino, dá suporte à sua placa.',
            affiliateLinks: [
              { label: 'RX 7800 XT 16GB na Amazon', url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB' },
              { label: 'RX 7800 XT 16GB na Newegg', url: 'https://www.newegg.com/p/pl?d=RX+7800+XT+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparação de GPUs — Dados de preço e capacidade',
        content: 'A PromptQuorum não fez benchmarks dessas placas, então a tabela mostra VRAM, dados de preço e capacidade de modelos. Os números da RTX 3060 e da RX 7800 XT são vendas concluídas no eBay dos EUA ([guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Não temos dados de venda da Arc B580 e os preços de anúncios divergem, então não os compare como equivalentes. Fora da classificação porque os dados as colocam acima de US$ 500: RTX 3090 usada (vendida por US$ 1.500–1.725), RTX 5060 Ti 16GB nova (menor preço pedido US$ 617,99, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 de outubro; US$ 769,99 na Amazon dos EUA, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 de novembro) e RTX 4070 (a partir de US$ 569,99 pedidos, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)). No Brasil os preços podem variar.',
        columns: ['GPU', 'VRAM', 'Preço típico', 'Modelo máximo'],
        rows: [
          { GPU: 'RTX 3060 12GB (usada) ★', VRAM: '12 GB', 'Preço típico': 'US$ 310–350 vendida (usada)', 'Modelo máximo': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12 GB', 'Preço típico': 'US$ 399–851, fontes divergem', 'Modelo máximo': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB (usada)', VRAM: '16 GB', 'Preço típico': 'US$ 485–560 vendida (usada)', 'Modelo máximo': '14B (Q4, mais contexto)' },
        ],
      },
      methodology: {
        title: 'Como selecionamos estas GPUs',
        content: 'Seleção: pelo menos 12 GB de VRAM, uma forma documentada ou relatada de rodar modelos locais e dados de preço em torno de US$ 500. A PromptQuorum não fez benchmarks. A ordem é uma escolha editorial com base em VRAM, suporte de software e força dos dados de preço; vendas concluídas pesam mais que preços pedidos ou de varejo. Todos os preços são dos EUA, acessados em 2026-11-28: [guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) (vendas), [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) (menores preços pedidos, 11 de outubro, só NVIDIA), [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) (mediana pedida no eBay e preço novo na Amazon, 7 de novembro), [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) e [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) (rastreadores de anúncios da Arc B580). A RTX 4060 Ti 16GB não é classificada: o [guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) dá US$ 450–550 sem informar a base, a [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) US$ 649,99 usada e US$ 790 nova como preços pedidos, e a [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) uma mediana pedida de US$ 745 em usadas. Relatórios de mercado ligam as altas de 2026 à escassez de memória ([rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)).',
      },
      vramGuide: {
        title: 'Requisitos de VRAM por tamanho de modelo',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Requisitos de VRAM: o modelo 7B precisa de ~4–5 GB (Q4) ou ~7–8 GB (Q8); o modelo 14B precisa de ~8–9 GB (Q4) ou ~16 GB (Q8); o modelo 30B precisa de ~18–20 GB (Q4); o modelo 70B precisa de ~40–42 GB (Q4).',
          },
          {
            type: 'plain-terms',
            text: 'Pense na VRAM como a RAM para os modelos de IA. O modelo precisa caber inteiramente na VRAM para uma inferência rápida. Se transbordar para a RAM do sistema (chamado de "offloading"), a velocidade normalmente cai de forma acentuada, muitas vezes por um fator grande, dependendo de quanto transborda. A quantização Q4 reduz o tamanho pela metade em relação ao Q8 com um pequeno custo em qualidade.',
          },
        ],
        items: [
          'Modelo 7B em Q4: ~4,5 GB de VRAM — qualquer GPU desta lista dá conta facilmente',
          'Modelo 7B em Q8: ~7,5 GB de VRAM — cabe em todas as GPUs aqui',
          'Modelo 13B em Q4: ~8,5 GB de VRAM — cabe em todas as GPUs desta lista',
          'Modelo 14B em Q8: o [Ollama lista o Qwen3 14B](https://ollama.com/library/qwen3/tags) com 16 GB; com o contexto, precisa de mais de 16 GB, então nenhuma das três placas o mantém inteiro na VRAM',
          'Modelo 30B em Q4: ~18 GB de VRAM — requer 24 GB (RTX 3090 de segunda mão)',
          'Modelo 70B em Q4: ~40 GB — exige duas GPUs ou offload para CPU',
        ],
      },
      decisionMatrix: {
        title: 'Qual GPU você deve comprar?',
        content: 'Use este guia de decisão conforme seu caso de uso principal:',
        items: [
          '**CUDA dentro do orçamento** → RTX 3060 12GB usada, vendida por US$ 310–350 (EUA, 17–26 de novembro de 2026).',
          '**Quer uma placa nova** → Intel Arc B580 12GB, se um vendedor confiável a oferecer no seu orçamento e sua ferramenta der suporte.',
          '**Precisa de 16 GB** → RX 7800 XT usada; a mediana de venda é US$ 525, então talvez seja preciso passar de US$ 500.',
          '**Precisa rodar modelos 30B?** → Uma placa de 24 GB como a RTX 3090 usada, vendida por US$ 1.500–1.725 — muito acima de US$ 500.',
          '**Usuário de Windows** → Na nossa avaliação, a RTX 3060 12GB usada com CUDA é o caminho mais simples.',
          '**Precisa de mais de 12 GB para um teste?** Em vez de esticar o orçamento, você pode [alugar uma placa de 24 GB por poucos dólares](/pt/power-local-llm/best-cloud-gpu-providers) e ver se os modelos maiores valem a pena.',
        ],
      },
      softwareCompat: {
        title: 'Compatibilidade de software por GPU',
        content: 'O suporte muda rápido, então confira a documentação de cada projeto. A [documentação de GPU do Ollama](https://docs.ollama.com/gpu) lista a RTX 3060 e a RX 7800 XT e não cita placas Arc pelo nome.',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ ver docs', vLLM: '⚠️ parcial', 'Text Gen WebUI': '⚠️ ver docs', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ ver docs', vLLM: '⚠️ ver docs', 'Text Gen WebUI': '⚠️ ver docs', 'Fine-Tuning CUDA': '❌' },
        ],
      },
      powerAndCooling: {
        title: 'Consumo de energia e requisitos do sistema',
        content: 'O consumo da GPU determina qual fonte de alimentação e gabinete você precisa. Rodar LLMs costuma manter as GPUs a 80–100% de utilização — diferente de jogos, há poucos frames ociosos. Confira a potência de fonte e os conectores recomendados pelo fabricante para o seu modelo exato.',
        items: [
          'RTX 3060 12GB: 170 W — normalmente fonte de 550 W ou mais; um conector de 8 pinos; confira a recomendação do fabricante',
          'Intel Arc B580 12GB: 190 W; a [Intel indica](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html) fonte de no mínimo 600 W e um conector de 8 pinos; placas de parceiras podem variar',
          'RX 7800 XT 16GB: confira consumo, fonte e conectores indicados pelo fabricante',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '8 GB de VRAM são suficientes para rodar LLMs localmente?',
            a: '8 GB de VRAM limitam você a modelos 7B em quantização Q4 — o modelo mal cabe. Você não consegue rodar modelos 13B em qualidade completa, e os modelos 14B serão parcialmente descarregados para a RAM do sistema, e a velocidade normalmente cai de forma acentuada, muitas vezes por um fator grande, dependendo de quanto transborda. Para um uso local de LLM significativo em 2026, 12 GB é o mínimo prático; 16 GB é o recomendado.',
          },
          {
            q: 'Ainda posso comprar uma RTX 3090 de segunda mão por menos de US$ 500 em 2026?',
            a: 'Não. A RTX 3090 usada foi vendida por US$ 1.500–1.725 (mediana US$ 1.650) em 225 vendas concluídas no eBay dos EUA, 13–23 de novembro de 2026, sem frete ([guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/); em dólares, sem conversão), então ela não é uma opção sub-US$ 500. São dados de anúncios, não uma cotação. Os preços no Brasil podem variar bastante devido a impostos de importação. Os 24 GB de VRAM mantêm a placa atraente: é um caminho com CUDA para modelos da classe 30B, que precisam de cerca de 18–20 GB em Q4. Não é a única placa de 24 GB: em 7 de novembro, a [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostrava uma mediana de preço pedido de US$ 1.499 para uma AMD RX 7900 XTX usada no eBay dos EUA (29 anúncios) e US$ 2.099 pela nova na Amazon dos EUA; a placa não tem CUDA. Preços pedidos não são diretamente comparáveis com as vendas concluídas acima.',
          },
          {
            q: 'A AMD funciona para rodar LLMs localmente?',
            a: 'Sim, com ressalvas. A [documentação de GPU do Ollama](https://docs.ollama.com/gpu) lista a RX 7800 XT para Linux e Windows com driver ROCm. A AMD usa ROCm em vez do CUDA da NVIDIA, então confira se cada ferramenta que você pretende usar, inclusive para ajuste fino, dá suporte à sua placa. A RX 7800 XT usada foi vendida por US$ 485–560 (mediana US$ 525; eBay EUA, consultado em 26 de novembro de 2026), então muitas custam mais de US$ 500. Para ajuste fino ou menos configuração, escolheríamos uma RTX 3060 12GB usada.',
          },
          {
            q: 'E as GPUs Intel Arc para IA?',
            a: 'É uma opção de 12 GB, mas confira o preço primeiro. Os números de novembro iam de uma média de anúncios do eBay de US$ 399 ([GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)) a um anúncio da Amazon dos EUA de US$ 851,16 ([VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/), 27 de novembro). O outro limite é o software: a [documentação de GPU do Ollama](https://docs.ollama.com/gpu) não cita a Arc pelo nome e a [documentação do vLLM](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/) descreve o suporte a GPUs Intel como inicial. Para ajuste fino LoRA, escolheríamos uma RTX 3060 12GB usada.',
          },
          {
            q: 'Posso rodar um modelo 70B em uma única GPU por menos de US$ 500?',
            a: 'Não em velocidade plena. Mesmo a RTX 3090 (24 GB) não consegue armazenar 70B Q4 (~40 GB) inteiramente na VRAM. Você pode usar offload para CPU com o llama.cpp para dividir o modelo entre VRAM e RAM do sistema, mas a geração fica muito abaixo da velocidade de um modelo que cabe na VRAM, o que torna o uso interativo impraticável. Para rodar modelos 70B em GPU, você precisa de duas placas de 24 GB (2× RTX 3090 com 48 GB no total) ou inferência na nuvem.',
          },
          {
            q: 'As novas placas (RTX 5060 Ti) vão tornar essas GPUs obsoletas?',
            a: 'Pelos preços que verificamos, não cabe neste orçamento. O menor preço pedido da RTX 5060 Ti 16GB nova era US$ 617,99 ([BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 de outubro), e a Amazon dos EUA mostrava US$ 769,99 ([GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 de novembro). Ela tem 16 GB de VRAM e preço de tabela de US$ 429. Se um vendedor confiável oferecer uma abaixo de US$ 500, vale considerar. Anúncios de 27–28 de novembro estavam ainda mais caros: cerca de US$ 800 no [gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb) (28 de novembro) e US$ 849,99 na Amazon dos EUA segundo o [BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti) (27 de novembro).',
          },
          {
            q: 'Quanto custa uma RTX 4060 Ti 16GB usada?',
            a: 'As fontes divergem. O [guia de GPUs usadas da InsiderLLM](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) dá US$ 450–550 sem informar a base. A [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listava em 11 de outubro um menor preço pedido de US$ 649,99 usada e US$ 790 nova (só 3 anúncios de novas). A [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) mostrava uma mediana pedida de US$ 745 em usadas (16 anúncios, 7 de novembro). Confira anúncios vendidos (não ativos) no eBay e confirme que é a versão de 16 GB.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Melhores GPUs para LLMs locais](/pt/local-llms/best-gpus-for-local-llms) -- melhores GPUs para LLMs locais',
          '[Melhores GPUs econômicas para LLMs locais](/pt/local-llms/best-budget-gpus-local-llm) -- melhores GPUs econômicas para LLMs locais',
          '[Quanta VRAM você precisa para LLMs locais?](/pt/local-llms/how-much-vram-local-llm) -- quanta VRAM você precisa?',
          '[Calculadora de VRAM para LLMs locais](/pt/local-llms/vram-calculator-local-llm) -- calculadora de VRAM para LLMs locais',
          '[Comprar GPUs usadas para LLMs locais](/pt/local-llms/used-gpus-for-local-llms) -- comprar GPUs usadas para LLMs locais',
          '[Alugar uma placa de 24 GB por poucos dólares](/pt/power-local-llm/best-cloud-gpu-providers) -- Provedores de aluguel de GPU comparados, para testar uma placa maior antes de comprar.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '8 GB de VRAM são suficientes para rodar LLMs localmente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '8 GB de VRAM limitam você a modelos 7B em quantização Q4 — o modelo mal cabe. Você não consegue rodar modelos 13B em qualidade completa, e os modelos 14B serão parcialmente descarregados para a RAM do sistema, e a velocidade normalmente cai de forma acentuada, muitas vezes por um fator grande, dependendo de quanto transborda. Para um uso local de LLM significativo em 2026, 12 GB é o mínimo prático; 16 GB é o recomendado.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ainda posso comprar uma RTX 3090 de segunda mão por menos de US$ 500 em 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não. A RTX 3090 usada foi vendida por US$ 1.500–1.725 (mediana US$ 1.650) em 225 vendas concluídas no eBay dos EUA, 13–23 de novembro de 2026, sem frete (guia de GPUs usadas da InsiderLLM; em dólares, sem conversão), então ela não é uma opção sub-US$ 500. São dados de anúncios, não uma cotação. Os preços no Brasil podem variar bastante devido a impostos de importação. Os 24 GB de VRAM mantêm a placa atraente: é um caminho com CUDA para modelos da classe 30B, que precisam de cerca de 18–20 GB em Q4. Não é a única placa de 24 GB: em 7 de novembro, a GeekyInc mostrava uma mediana de preço pedido de US$ 1.499 para uma AMD RX 7900 XTX usada no eBay dos EUA (29 anúncios) e US$ 2.099 pela nova na Amazon dos EUA; a placa não tem CUDA. Preços pedidos não são diretamente comparáveis com as vendas concluídas acima.',
          },
        },
        {
          '@type': 'Question',
          name: 'A AMD funciona para rodar LLMs localmente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim, com ressalvas. A documentação de GPU do Ollama lista a RX 7800 XT para Linux e Windows com driver ROCm. A AMD usa ROCm em vez do CUDA da NVIDIA, então confira se cada ferramenta que você pretende usar, inclusive para ajuste fino, dá suporte à sua placa. A RX 7800 XT usada foi vendida por US$ 485–560 (mediana US$ 525; eBay EUA, consultado em 26 de novembro de 2026), então muitas custam mais de US$ 500. Para ajuste fino ou menos configuração, escolheríamos uma RTX 3060 12GB usada.',
          },
        },
        {
          '@type': 'Question',
          name: 'E as GPUs Intel Arc para IA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'É uma opção de 12 GB, mas confira o preço primeiro. Os números de novembro iam de uma média de anúncios do eBay de US$ 399 (GPU Poet) a um anúncio da Amazon dos EUA de US$ 851,16 (VideoCardPrices, 27 de novembro). O outro limite é o software: a documentação de GPU do Ollama não cita a Arc pelo nome e a documentação do vLLM descreve o suporte a GPUs Intel como inicial. Para ajuste fino LoRA, escolheríamos uma RTX 3060 12GB usada.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso rodar um modelo 70B em uma única GPU por menos de US$ 500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não em velocidade plena. Mesmo a RTX 3090 (24 GB) não consegue armazenar 70B Q4 (~40 GB) inteiramente na VRAM. Você pode usar offload para CPU com o llama.cpp para dividir o modelo entre VRAM e RAM do sistema, mas a geração fica muito abaixo da velocidade de um modelo que cabe na VRAM, o que torna o uso interativo impraticável. Para rodar modelos 70B em GPU, você precisa de duas placas de 24 GB (2× RTX 3090 com 48 GB no total) ou inferência na nuvem.',
          },
        },
        {
          '@type': 'Question',
          name: 'As novas placas (RTX 5060 Ti) vão tornar essas GPUs obsoletas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pelos preços que verificamos, não cabe neste orçamento. O menor preço pedido da RTX 5060 Ti 16GB nova era US$ 617,99 (BuySellRAM, 11 de outubro), e a Amazon dos EUA mostrava US$ 769,99 (GeekyInc, 7 de novembro). Ela tem 16 GB de VRAM e preço de tabela de US$ 429. Se um vendedor confiável oferecer uma abaixo de US$ 500, vale considerar. Anúncios de 27–28 de novembro estavam ainda mais caros: cerca de US$ 800 no gpuprix (28 de novembro) e US$ 849,99 na Amazon dos EUA segundo o BasketPrice (27 de novembro).',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto custa uma RTX 4060 Ti 16GB usada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As fontes divergem. O guia de GPUs usadas da InsiderLLM dá US$ 450–550 sem informar a base. A BuySellRAM listava em 11 de outubro um menor preço pedido de US$ 649,99 usada e US$ 790 nova (só 3 anúncios de novas). A GeekyInc mostrava uma mediana pedida de US$ 745 em usadas (16 anúncios, 7 de novembro). Confira anúncios vendidos (não ativos) no eBay e confirme que é a versão de 16 GB.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Melhores GPUs para inferência de LLM por menos de US$ 500 (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB (usada)', description: 'Escolha editorial — 12 GB de VRAM, CUDA, preços de venda nos EUA abaixo de US$ 500' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: 'Opção nova com 12 GB — as fontes de preço atuais divergem' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB (usada)', description: '16 GB de VRAM — mediana de venda nos EUA US$ 525, acima do orçamento' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Melhor GPU para inferência de LLM por menos de US$ 500 (2026)',
      description: 'GPUs para inferência de LLM local até US$ 500: uma RTX 3060 12GB usada como escolha editorial, além da Intel Arc B580 12GB e da RX 7800 XT 16GB usada, com a base de cada preço.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/pt/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      about: [
        { '@type': 'Thing', name: 'GPU para inferência de LLM' },
        { '@type': 'Thing', name: 'Inteligência Artificial local' },
        { '@type': 'Thing', name: 'NVIDIA GeForce RTX 3060' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'LM Studio' },
        { '@type': 'SoftwareApplication', name: 'llama.cpp' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Beste GPU für LLM-Inferenz unter 500 $ (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-de.webp',
    seoTitle: 'Beste GPU unter 500 $ für lokale LLMs (2026): RTX 3060',
    metaDescription: 'Unsere GPU-Wahl unter 500 $ für lokale LLMs: eine gebrauchte RTX 3060 12GB, in den USA für 310–350 $ verkauft. Zum Arc B580 widersprechen sich die Preise.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
        productName: 'RTX 3060 12GB (gebraucht)',
        productCategory: 'gpu',
        priceRange: '310–350 $ gebraucht (US-Verkäufe, Nov. 2026)',
        label: 'Preis der RTX 3060 12GB ansehen →',
      },
      {
        url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
        productName: 'Intel Arc B580 12GB',
        productCategory: 'gpu',
        priceRange: 'Quellen uneins; Angebot prüfen',
        label: 'Preis der Intel Arc B580 12GB ansehen →',
      },
      {
        url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB',
        productName: 'RX 7800 XT 16GB (gebraucht)',
        productCategory: 'gpu',
        priceRange: '485–560 $ gebraucht (US-Verkäufe, Nov. 2026)',
        label: 'Preis der RX 7800 XT 16GB ansehen →',
      },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Unsere Wahl unter 500 $ für lokale LLM-Inferenz ist eine gebrauchte RTX 3060 12GB: 12 GB VRAM, die CUDA-Toolchain und 310–350 $ (Median 330 $) in 209 abgeschlossenen Verkäufen auf eBay US, 17.–26. November 2026, ohne Versand ([InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Das ist eine redaktionelle Wahl, kein Benchmark-Ergebnis. Den Intel Arc B580 12GB setzen wir nicht auf Platz 1, weil sich die Preisquellen im November stark widersprechen. Eine gebrauchte RX 7800 XT 16GB hat mehr VRAM, ihr Verkaufsmedian von 525 $ liegt aber über 500 $.** Preise in US-Dollar; in Deutschland können sie abweichen.',
    quickAnswerTop: {
      question: 'Welche GPU ist am besten für lokale KI-Modelle unter 500 $?',
      answer: '**Unsere Wahl ist eine gebrauchte RTX 3060 12GB.** Sie wurde in 209 abgeschlossenen Verkäufen auf eBay US (17.–26. November 2026, ohne Versand) für 310–350 $ verkauft, Median 330 $ ([InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), und bietet 12 GB VRAM mit CUDA. Der Intel Arc B580 12GB ist eine Neukarten-Option, deren aktuellen Preis wir nicht bestätigen können. Gebrauchte RX 7800 XT 16GB wurden für 485–560 $ verkauft (Median 525 $). Preise in US-Dollar; in Deutschland können sie abweichen.',
      bullets: [
        '**Unsere Wahl:** RTX 3060 12GB gebraucht — verkauft für 310–350 $ (USA, 17.–26. Nov. 2026), CUDA',
        '**Neukarten-Option:** Intel Arc B580 12GB — Preisquellen uneins; Händler prüfen',
        '**Mehr VRAM:** RX 7800 XT 16GB gebraucht — Verkaufsmedian 525 $; nur das untere Ende passt unter 500 $',
        '⚠️ RTX 3090 gebraucht: verkauft für 1.500–1.725 $ (USA, 13.–23. Nov. 2026) — weit über 500 $',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Unsere Wahl ist eine gebrauchte RTX 3060 12GB: 12 GB VRAM, CUDA, in den USA für 310–350 $ verkauft (Median 330 $), 17.–26. November 2026**',
          'Intel Arc B580 12GB: Die Novemberwerte reichen von einem eBay-Angebotsschnitt von 399 $ bis zu einem Amazon-US-Angebot von 851,16 $',
          'RX 7800 XT 16GB gebraucht: verkauft für 485–560 $ (Median 525 $), nur das untere Ende passt unter 500 $',
          '⚠️ RTX 4060 Ti 16GB: Die Preisquellen widersprechen sich, daher steht sie nicht in der Rangliste',
          '⚠️ RTX 3090 gebraucht: verkauft für 1.500–1.725 $ — weit über 500 $',
          'Alle Preise sind US-Preise auf unterschiedlicher Basis (Verkauf, Angebot, Handel); wir nennen die Basis. PromptQuorum hat diese Karten nicht gebenchmarkt.',
        ],
      },
      rankedList: {
        title: 'Beste GPUs für LLM-Inferenz unter 500 $ — Rangfolge',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Unsere Wahl für lokale LLM-Inferenz unter 500 $ ist eine gebrauchte RTX 3060 12GB, weil sie 12 GB VRAM und CUDA bietet und ihre jüngsten US-Verkaufspreise vollständig unter 500 $ liegen.',
          },
          {
            type: 'plain-terms',
            text: 'VRAM bestimmt, welche KI-Modelle du lokal ausführen kannst. 16 GB reichen für 14B-Modelle. 24 GB (gebrauchte RTX 3090) ermöglichen 30B-Modelle. Unter 12 GB bist du auf 7B-Modelle beschränkt.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'RTX 3060 12GB gebraucht — Unsere Wahl',
            content: 'Die gebrauchte NVIDIA GeForce RTX 3060 12GB ist unsere redaktionelle Wahl. Sie wurde in 209 abgeschlossenen Verkäufen auf eBay US (17.–26. November 2026, ohne Versand) für 310–350 $ verkauft, Median 330 $ ([InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Ein 14B-Modell in Q4 passt in ihre 12 GB, ein 14B in Q8 nicht. Aus unserer Sicht hat sie dank CUDA die unkomplizierteste Werkzeugunterstützung der drei Karten, auch für LoRA-Fine-Tuning; prüfen Sie die Dokumentation des jeweiligen Projekts. Die [Ollama-GPU-Dokumentation](https://docs.ollama.com/gpu) führt sie als unterstützt. Gebrauchte Karten bergen Zustands- und Garantierisiken, also innerhalb der Rückgabefrist testen. Neuware ist ein eigener Markt: [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listete am 11. Oktober 2026 US-Angebotspreise von 320–400 $. Für Gebrauchtkarten zeigte [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) am 7. November 2026 einen höheren Median der Angebotspreise von 400 $ (95 Angebote); Angebotspreise sind keine abgeschlossenen Verkäufe.',
            affiliateLinks: [{ label: 'RTX 3060 12GB bei Amazon.de', url: 'https://www.amazon.de/s?k=RTX+3060+12GB' }],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — Neukarten-Option, Preis prüfen',
            content: 'Den Intel Arc B580 12GB führen wir auf Platz 2, weil wir keinen aktuellen Preis bestätigen können. Am 27. November listete [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) ihn neu auf Amazon US für 851,16 $ (das erfasste Angebot hatte von Juni bis Oktober bei 369,99 $ gelegen) und gebraucht auf eBay für 499 $. [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) zeigte für November einen niedrigsten Durchschnitt von 399 $ aus eBay-Angeboten (aktueller Wert 431 $). [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) fand am 7. November nur Wiederverkäufer-Angebote von 851–1.263 $. Behandeln Sie Wiederverkäuferpreise mit Vorsicht und prüfen Sie vor dem Kauf den Händler. Die [Ollama-GPU-Dokumentation](https://docs.ollama.com/gpu) nennt keine Arc-Karten namentlich; sie beschreibt Vulkan als zusätzliche GPU-Unterstützung. Prüfen Sie daher, ob Ihr Tool läuft.',
            affiliateLinks: [{ label: 'Intel Arc B580 12GB bei Amazon.de', url: 'https://www.amazon.de/s?k=Intel+Arc+B580' }],
          },
          {
            rank: 3,
            title: 'RX 7800 XT 16GB gebraucht — Mehr VRAM, oft über 500 $',
            content: 'Eine gebrauchte AMD Radeon RX 7800 XT bietet 16 GB VRAM. Sie wurde in 218 abgeschlossenen Verkäufen auf eBay US (abgerufen am 26. November 2026) für 485–560 $ verkauft, Median 525 $ ([InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)); nur das untere Ende passt in dieses Budget. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) zeigte mit 650 $ einen höheren Median der Angebotspreise (11 Angebote, 7. November). Die [Ollama-GPU-Dokumentation](https://docs.ollama.com/gpu) führt die Karte für Linux und Windows mit ROCm-Treiber. AMD nutzt ROCm statt CUDA von NVIDIA; prüfen Sie daher, ob jedes geplante Tool, auch fürs Fine-Tuning, Ihre Karte unterstützt.',
            affiliateLinks: [{ label: 'RX 7800 XT 16GB bei Amazon.de', url: 'https://www.amazon.de/s?k=RX+7800+XT+16GB' }],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU-Vergleich — Preisbelege und Kapazität',
        content: 'PromptQuorum hat diese Karten nicht gebenchmarkt; die Tabelle zeigt daher VRAM, Preisbelege und Modellkapazität. Die Werte zu RTX 3060 und RX 7800 XT sind abgeschlossene Verkäufe auf eBay US ([InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Für den Arc B580 haben wir keine Verkaufsdaten, und seine Angebotswerte widersprechen sich; vergleichen Sie sie daher nicht eins zu eins. Nicht in der Rangliste, weil sie laut den Belegen über 500 $ liegen: gebrauchte RTX 3090 (verkauft für 1.500–1.725 $), RTX 5060 Ti 16GB neu (niedrigster Angebotspreis 617,99 $, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11. Oktober; 769,99 $ auf Amazon US, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7. November) und RTX 4070 (ab 569,99 $ Angebotspreis, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)). Preise in US-Dollar; in Deutschland können sie abweichen.',
        columns: ['GPU', 'VRAM', 'Typischer Preis', 'Max. Modell'],
        rows: [
          { GPU: 'RTX 3060 12GB (gebraucht) ★', VRAM: '12 GB', 'Typischer Preis': '310–350 $ verkauft (gebraucht)', 'Max. Modell': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12 GB', 'Typischer Preis': '399–851 $, Quellen uneins', 'Max. Modell': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB (gebraucht)', VRAM: '16 GB', 'Typischer Preis': '485–560 $ verkauft (gebraucht)', 'Max. Modell': '14B (Q4, mehr Kontext)' },
        ],
      },
      methodology: {
        title: 'Wie wir diese GPUs ausgewählt haben',
        content: 'Auswahl: mindestens 12 GB VRAM, ein dokumentierter oder berichteter Weg für lokale Modelle und Preisbelege bei oder nahe 500 $. PromptQuorum hat die Karten nicht gebenchmarkt. Die Reihenfolge ist eine redaktionelle Wahl nach VRAM, Softwareunterstützung und Belastbarkeit der Preisbelege; Verkaufsdaten zählen mehr als Angebots- oder Handelspreise. Alle Preise sind US-Preise, Abrufdatum 2026-11-28: [InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) (Verkäufe), [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) (niedrigste Angebotspreise, 11. Oktober, nur NVIDIA), [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) (Median der eBay-Angebote und Amazon-Neupreise, 7. November), [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) und [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) (Angebots-Tracker zum Arc B580). Die RTX 4060 Ti 16GB steht nicht in der Rangliste: [InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) nennt 450–550 $ ohne Angabe der Basis, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) Angebotspreise von 649,99 $ gebraucht und 790 $ neu, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) einen Median der Gebraucht-Angebote von 745 $. Marktberichte bringen die Preissteigerungen 2026 mit Speicherknappheit in Verbindung ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)).',
      },
      vramGuide: {
        title: 'VRAM-Anforderungen nach Modellgröße',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM-Anforderungen: 7B-Modell benötigt ~4–5 GB (Q4) oder ~7–8 GB (Q8); 14B-Modell benötigt ~8–9 GB (Q4) oder ~16 GB (Q8); 30B-Modell benötigt ~18–20 GB (Q4); 70B-Modell benötigt ~40–42 GB (Q4).',
          },
          {
            type: 'plain-terms',
            text: 'VRAM funktioniert wie RAM für KI-Modelle. Das Modell muss vollständig in den VRAM passen, um schnell zu laufen. Fließt es in den System-RAM über ("Offloading"), sinkt die Geschwindigkeit typischerweise stark, oft um ein Vielfaches, je nachdem, wie viel überläuft. Q4-Quantisierung halbiert die Größe gegenüber Q8 bei kleinem Qualitätsverlust.',
          },
        ],
        items: [
          '7B-Modell mit Q4: ~4,5 GB VRAM — jede GPU auf dieser Liste bewältigt das mühelos',
          '7B-Modell mit Q8: ~7,5 GB VRAM — passt auf alle GPUs hier',
          '13B-Modell mit Q4: ~8,5 GB VRAM — passt auf alle GPUs dieser Liste',
          '14B-Modell mit Q8: [Ollama nennt für Qwen3 14B](https://ollama.com/library/qwen3/tags) 16 GB — mit Kontext sind mehr als 16 GB nötig, sodass keine der drei Karten es vollständig im VRAM hält',
          '30B-Modell mit Q4: ~18 GB VRAM — braucht für komfortables Arbeiten eine 24-GB-Karte, etwa eine gebrauchte RTX 3090',
          '70B-Modell mit Q4: ~40 GB — erfordert zwei GPUs oder CPU-Offloading',
        ],
      },
      decisionMatrix: {
        title: 'Welche GPU solltest du kaufen?',
        content: 'Nutze diesen Entscheidungsleitfaden je nach Haupteinsatzzweck:',
        items: [
          '**CUDA im Budget** → RTX 3060 12GB gebraucht, verkauft für 310–350 $ (USA, 17.–26. November 2026).',
          '**Neue Karte gewünscht** → Intel Arc B580 12GB, wenn ein seriöser Händler ihn in Ihrem Budget anbietet und Ihr Tool ihn unterstützt.',
          '**16 GB nötig** → gebrauchte RX 7800 XT; der Verkaufsmedian liegt bei 525 $, womöglich also über 500 $.',
          '**30B-Modell-Fähigkeit gewünscht?** → Eine 24-GB-Karte wie die gebrauchte RTX 3090, verkauft für 1.500–1.725 $ — weit über 500 $.',
          '**Windows-Nutzer** → Aus unserer Sicht ist die gebrauchte RTX 3060 12GB mit CUDA der einfachere Weg.',
          '**Mehr als 12 GB für einen Test nötig?** Statt das Budget zu sprengen, lässt sich [eine 24-GB-Karte für wenige Dollar mieten](/de/power-local-llm/best-cloud-gpu-providers), um zu prüfen, ob sich die größeren Modelle lohnen.',
        ],
      },
      softwareCompat: {
        title: 'Software-Kompatibilität nach GPU',
        content: 'Die Unterstützung ändert sich schnell, daher die Dokumentation des jeweiligen Projekts prüfen. Die [Ollama-GPU-Dokumentation](https://docs.ollama.com/gpu) führt RTX 3060 und RX 7800 XT und nennt keine Arc-Karten namentlich.',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA-Fine-Tuning'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA-Fine-Tuning': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ Doku prüfen', vLLM: '⚠️ teilweise', 'Text Gen WebUI': '⚠️ Doku prüfen', 'CUDA-Fine-Tuning': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ Doku prüfen', vLLM: '⚠️ Doku prüfen', 'Text Gen WebUI': '⚠️ Doku prüfen', 'CUDA-Fine-Tuning': '❌' },
        ],
      },
      powerAndCooling: {
        title: 'Stromverbrauch und Systemanforderungen',
        content: 'Der Stromverbrauch der GPU bestimmt, welches Netzteil und Gehäuse nötig sind. LLMs halten die GPU oft bei 80–100 % Auslastung — anders als beim Gaming gibt es kaum Leerlauf-Frames. Empfohlene Netzteilleistung und Anschlüsse laut Hersteller für das genaue Modell prüfen.',
        items: [
          'RTX 3060 12GB: 170 W — typisch ein 550-W+-Netzteil; ein 8-Pin-Anschluss; Herstellerempfehlung prüfen',
          'Intel Arc B580 12GB: 190 W; [Intel nennt](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html) ein Netzteil mit mindestens 600 W und einen 8-Pin-Anschluss; Partnerkarten können abweichen',
          'RX 7800 XT 16GB: Leistungsaufnahme, Netzteil und Anschlüsse laut Kartenhersteller prüfen',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Reichen 8 GB VRAM für lokale KI-Modelle?',
            a: '8 GB VRAM beschränken auf 7B-Modelle bei Q4-Quantisierung. 13B-Modelle passen nicht vollständig in VRAM, 14B-Modelle werden auf CPU-RAM ausgelagert, wobei die Geschwindigkeit typischerweise stark sinkt, oft um ein Vielfaches, je nachdem, wie viel überläuft. Für sinnvolle lokale LLM-Nutzung 2026 sind 12 GB das praktische Minimum, 16 GB empfohlen.',
          },
          {
            q: 'Kann ich AMD GPUs für lokale KI verwenden?',
            a: 'Ja, mit Einschränkungen. Die [Ollama-GPU-Dokumentation](https://docs.ollama.com/gpu) führt die RX 7800 XT für Linux und Windows mit ROCm-Treiber. AMD nutzt ROCm statt CUDA von NVIDIA; prüfen Sie daher, ob jedes geplante Tool, auch fürs Fine-Tuning, Ihre Karte unterstützt. Gebrauchte RX 7800 XT wurden für 485–560 $ verkauft (Median 525 $; eBay US, abgerufen am 26. November 2026), viele kosten also mehr als 500 $. Für Fine-Tuning oder weniger Einrichtung würden wir eine gebrauchte RTX 3060 12GB wählen.',
          },
          {
            q: 'Kann ich eine gebrauchte RTX 3090 noch für unter 500 $ kaufen?',
            a: 'Nein. Gebrauchte RTX 3090 wurden für 1.500–1.725 $ verkauft (Median 1.650 $; 225 abgeschlossene Verkäufe auf eBay US, 13.–23. November 2026, ohne Versand; [InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/); Preise in US-Dollar, in Deutschland können sie abweichen). Damit ist sie keine Sub-500-$-Option. Das sind Angebotsdaten, keine Preisauskunft. Die 24 GB VRAM machen sie weiterhin interessant: Sie ist ein CUDA-Weg zu Modellen der 30B-Klasse, die in Q4 etwa 18–20 GB brauchen. Sie ist nicht die einzige 24-GB-Karte: Am 7. November zeigte [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) für die gebrauchte AMD RX 7900 XTX auf eBay US einen Median der Angebotspreise von 1.499 $ (29 Angebote) und neu auf Amazon US 2.099 $; die Karte hat kein CUDA. Angebotspreise sind nicht direkt mit den oben genannten Verkaufspreisen vergleichbar.',
          },
          {
            q: 'Was ist mit Intel-Arc-GPUs für KI?',
            a: 'Er ist eine 12-GB-Option, aber prüfen Sie zuerst den Preis. Die Novemberwerte reichten von einem eBay-Angebotsschnitt von 399 $ ([GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)) bis zu einem Amazon-US-Angebot von 851,16 $ ([VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/), 27. November). Die zweite Grenze ist die Software: Die [Ollama-GPU-Dokumentation](https://docs.ollama.com/gpu) nennt Arc nicht namentlich, und die [vLLM-Dokumentation](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/) beschreibt die Unterstützung für Intel-GPUs als anfänglich. Für LoRA-Fine-Tuning würden wir eine gebrauchte RTX 3060 12GB wählen.',
          },
          {
            q: 'Kann ich ein 70B-Modell auf einer einzigen GPU unter 500 $ ausführen?',
            a: 'Nicht mit voller Geschwindigkeit. Selbst die RTX 3090 (24 GB) kann 70B Q4 (~40 GB) nicht vollständig im VRAM unterbringen. Mit CPU-Offloading über llama.cpp lässt sich das Modell zwischen GPU-VRAM und System-RAM aufteilen, aber die Erzeugung läuft dann weit unter der Geschwindigkeit eines Modells, das ins VRAM passt, was interaktive Nutzung unpraktisch macht. Für 70B-Modelle auf GPUs brauchst du zwei 24-GB-Karten (2× RTX 3090 mit insgesamt 48 GB) oder Cloud-Inferenz.',
          },
          {
            q: 'Machen neuere GPUs (RTX 5060 Ti) diese Karten überflüssig?',
            a: 'Nach den von uns geprüften Preisen nicht in diesem Budget. Der niedrigste Neu-Angebotspreis der RTX 5060 Ti 16GB lag bei 617,99 $ ([BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11. Oktober), Amazon US zeigte 769,99 $ ([GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7. November). Sie hat 16 GB VRAM und eine UVP von 429 $. Bietet ein seriöser Händler eine unter 500 $ an, ist sie eine Überlegung wert. Angebote vom 27.–28. November lagen noch höher: rund 800 $ bei [gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb) (28. November) und 849,99 $ auf Amazon US laut [BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti) (27. November).',
          },
          {
            q: 'Was kostet eine gebrauchte RTX 4060 Ti 16GB?',
            a: 'Die Quellen widersprechen sich. [InsiderLLM-Ratgeber zu Gebraucht-GPUs](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) nennt 450–550 $ ohne Angabe der Basis. [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) listete am 11. Oktober einen niedrigsten Gebraucht-Angebotspreis von 649,99 $ und neu 790 $ (nur 3 Neuangebote). [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) zeigte einen Median der Gebraucht-Angebote von 745 $ (16 Angebote, 7. November). Prüfen Sie verkaufte (nicht aktive) eBay-Angebote und ob es die 16-GB-Variante ist.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms) -- beste GPUs für lokale LLMs',
          '[Beste Budget-GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm) -- beste Budget-GPUs für lokale LLMs',
          '[Wie viel VRAM benötigst du für lokale LLMs?](/de/local-llms/how-much-vram-local-llm) -- wie viel VRAM benötigst du?',
          '[VRAM-Rechner für lokale LLMs](/de/local-llms/vram-calculator-local-llm) -- VRAM-Rechner für lokale LLMs',
          '[Gebrauchte GPUs für lokale LLMs kaufen](/de/local-llms/used-gpus-for-local-llms) -- gebrauchte GPUs für lokale LLMs kaufen',
          '[Eine 24-GB-Karte für wenige Dollar mieten](/de/power-local-llm/best-cloud-gpu-providers) -- Anbieter für GPU-Miete im Vergleich, um eine größere Karte vor dem Kauf auszuprobieren.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Reichen 8 GB VRAM für lokale KI-Modelle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '8 GB VRAM beschränken auf 7B-Modelle bei Q4-Quantisierung. 13B-Modelle passen nicht vollständig in VRAM, 14B-Modelle werden auf CPU-RAM ausgelagert, wobei die Geschwindigkeit typischerweise stark sinkt, oft um ein Vielfaches, je nachdem, wie viel überläuft. Für sinnvolle lokale LLM-Nutzung 2026 sind 12 GB das praktische Minimum, 16 GB empfohlen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich AMD GPUs für lokale KI verwenden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, mit Einschränkungen. Die Ollama-GPU-Dokumentation führt die RX 7800 XT für Linux und Windows mit ROCm-Treiber. AMD nutzt ROCm statt CUDA von NVIDIA; prüfen Sie daher, ob jedes geplante Tool, auch fürs Fine-Tuning, Ihre Karte unterstützt. Gebrauchte RX 7800 XT wurden für 485–560 $ verkauft (Median 525 $; eBay US, abgerufen am 26. November 2026), viele kosten also mehr als 500 $. Für Fine-Tuning oder weniger Einrichtung würden wir eine gebrauchte RTX 3060 12GB wählen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich eine gebrauchte RTX 3090 noch für unter 500 $ kaufen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. Gebrauchte RTX 3090 wurden für 1.500–1.725 $ verkauft (Median 1.650 $; 225 abgeschlossene Verkäufe auf eBay US, 13.–23. November 2026, ohne Versand; InsiderLLM-Ratgeber zu Gebraucht-GPUs; Preise in US-Dollar, in Deutschland können sie abweichen). Damit ist sie keine Sub-500-$-Option. Das sind Angebotsdaten, keine Preisauskunft. Die 24 GB VRAM machen sie weiterhin interessant: Sie ist ein CUDA-Weg zu Modellen der 30B-Klasse, die in Q4 etwa 18–20 GB brauchen. Sie ist nicht die einzige 24-GB-Karte: Am 7. November zeigte GeekyInc für die gebrauchte AMD RX 7900 XTX auf eBay US einen Median der Angebotspreise von 1.499 $ (29 Angebote) und neu auf Amazon US 2.099 $; die Karte hat kein CUDA. Angebotspreise sind nicht direkt mit den oben genannten Verkaufspreisen vergleichbar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist mit Intel-Arc-GPUs für KI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Er ist eine 12-GB-Option, aber prüfen Sie zuerst den Preis. Die Novemberwerte reichten von einem eBay-Angebotsschnitt von 399 $ (GPU Poet) bis zu einem Amazon-US-Angebot von 851,16 $ (VideoCardPrices, 27. November). Die zweite Grenze ist die Software: Die Ollama-GPU-Dokumentation nennt Arc nicht namentlich, und die vLLM-Dokumentation beschreibt die Unterstützung für Intel-GPUs als anfänglich. Für LoRA-Fine-Tuning würden wir eine gebrauchte RTX 3060 12GB wählen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich ein 70B-Modell auf einer einzigen GPU unter 500 $ ausführen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nicht mit voller Geschwindigkeit. Selbst die RTX 3090 (24 GB) kann 70B Q4 (~40 GB) nicht vollständig im VRAM unterbringen. Mit CPU-Offloading über llama.cpp lässt sich das Modell zwischen GPU-VRAM und System-RAM aufteilen, aber die Erzeugung läuft dann weit unter der Geschwindigkeit eines Modells, das ins VRAM passt, was interaktive Nutzung unpraktisch macht. Für 70B-Modelle auf GPUs brauchst du zwei 24-GB-Karten (2× RTX 3090 mit insgesamt 48 GB) oder Cloud-Inferenz.',
          },
        },
        {
          '@type': 'Question',
          name: 'Machen neuere GPUs (RTX 5060 Ti) diese Karten überflüssig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nach den von uns geprüften Preisen nicht in diesem Budget. Der niedrigste Neu-Angebotspreis der RTX 5060 Ti 16GB lag bei 617,99 $ (BuySellRAM, 11. Oktober), Amazon US zeigte 769,99 $ (GeekyInc, 7. November). Sie hat 16 GB VRAM und eine UVP von 429 $. Bietet ein seriöser Händler eine unter 500 $ an, ist sie eine Überlegung wert. Angebote vom 27.–28. November lagen noch höher: rund 800 $ bei gpuprix (28. November) und 849,99 $ auf Amazon US laut BasketPrice (27. November).',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet eine gebrauchte RTX 4060 Ti 16GB?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Die Quellen widersprechen sich. InsiderLLM-Ratgeber zu Gebraucht-GPUs nennt 450–550 $ ohne Angabe der Basis. BuySellRAM listete am 11. Oktober einen niedrigsten Gebraucht-Angebotspreis von 649,99 $ und neu 790 $ (nur 3 Neuangebote). GeekyInc zeigte einen Median der Gebraucht-Angebote von 745 $ (16 Angebote, 7. November). Prüfen Sie verkaufte (nicht aktive) eBay-Angebote und ob es die 16-GB-Variante ist.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste GPUs für LLM-Inferenz unter 500 $ (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB (gebraucht)', description: 'Redaktionelle Wahl — 12 GB VRAM, CUDA, US-Verkaufspreise unter 500 $' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: 'Neukarten-Option mit 12 GB — aktuelle Preisquellen widersprechen sich' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB (gebraucht)', description: '16 GB VRAM — US-Verkaufsmedian 525 $, über dem Budget' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Beste GPU für LLM-Inferenz unter 500 $ (2026)',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/de/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'de',
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Meilleure GPU pour l\'inférence LLM à moins de 500 $ (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-fr.webp',
    seoTitle: 'Meilleure GPU sous 500 $ pour LLM locaux (2026)',
    metaDescription: 'Notre GPU sous 500 $ pour les LLM locaux : une RTX 3060 12 Go d’occasion, vendue 310–350 $ aux États-Unis. Les prix de l’Arc B580 se contredisent.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      {
        url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
        productName: 'RTX 3060 12 Go (occasion)',
        productCategory: 'gpu',
        priceRange: '310–350 $ d’occasion (ventes US, nov. 2026)',
        label: 'Voir le prix de la RTX 3060 12 Go →',
      },
      {
        url: 'https://www.amazon.com/s?k=Intel+Arc+B580',
        productName: 'Intel Arc B580 12 Go',
        productCategory: 'gpu',
        priceRange: 'sources divergentes ; vérifiez l’annonce',
        label: 'Voir le prix de l\'Intel Arc B580 12 Go →',
      },
      {
        url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB',
        productName: 'RX 7800 XT 16GB (occasion)',
        productCategory: 'gpu',
        priceRange: '485–560 $ d’occasion (ventes US, nov. 2026)',
        label: 'Voir le prix de la RX 7800 XT 16Go →',
      },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Notre choix sous 500 $ pour l’inférence LLM locale est une RTX 3060 12 Go d’occasion : 12 Go de VRAM, la chaîne CUDA et 310–350 $ (médiane 330 $) sur 209 ventes conclues sur eBay US, 17–26 novembre 2026, hors livraison ([guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). C’est un choix éditorial, pas un résultat de benchmark. Nous ne classons pas l’Intel Arc B580 12 Go en tête car les sources de prix de novembre divergent fortement. Une RX 7800 XT 16 Go d’occasion offre plus de VRAM, mais sa médiane de vente de 525 $ dépasse 500 $.** Prix en dollars américains ; en France ils peuvent différer.',
    quickAnswerTop: {
      question: 'Quelle est la meilleure GPU pour faire tourner des LLMs en local à moins de 500 $ ?',
      answer: '**Notre choix est une RTX 3060 12 Go d’occasion.** Elle s’est vendue 310–350 $ (médiane 330 $) sur 209 ventes conclues sur eBay US, 17–26 novembre 2026, hors livraison ([guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), avec 12 Go de VRAM et CUDA. L’Intel Arc B580 12 Go est une option neuve dont nous ne pouvons pas confirmer le prix actuel. La RX 7800 XT 16 Go d’occasion s’est vendue 485–560 $ (médiane 525 $). Prix en dollars américains ; en France ils peuvent différer.',
      bullets: [
        '**Notre choix :** RTX 3060 12 Go d’occasion — vendue 310–350 $ (US, 17–26 nov. 2026), CUDA',
        '**Option neuve :** Intel Arc B580 12 Go — sources de prix divergentes ; vérifiez le vendeur',
        '**Plus de VRAM :** RX 7800 XT 16 Go d’occasion — médiane de vente 525 $ ; seul le bas de la fourchette tient sous 500 $',
        '⚠️ RTX 3090 d’occasion : vendue 1 500–1 725 $ (US, 13–23 nov. 2026) — très au-dessus de 500 $',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Nous choisissons une RTX 3060 12 Go d’occasion : 12 Go de VRAM, CUDA, vendue 310–350 $ (médiane 330 $) aux États-Unis, 17–26 novembre 2026**',
          'Intel Arc B580 12 Go : les chiffres de novembre vont d’une moyenne d’annonces eBay de 399 $ à une annonce Amazon US à 851,16 $',
          'RX 7800 XT 16 Go d’occasion : vendue 485–560 $ (médiane 525 $), seul le bas tient sous 500 $',
          '⚠️ RTX 4060 Ti 16 Go : les sources de prix divergent, nous ne la classons pas',
          '⚠️ RTX 3090 d’occasion : vendue 1 500–1 725 $ — très au-dessus de 500 $',
          'Tous les prix sont américains et de bases différentes (ventes, prix demandés, commerce) ; nous précisons la base. PromptQuorum n’a pas testé les performances de ces cartes.',
        ],
      },
      rankedList: {
        title: 'Meilleures GPU pour l\'inférence LLM sous 500 $ — Classement',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Notre choix pour l’inférence LLM locale sous 500 $ est une RTX 3060 12 Go d’occasion, car elle offre 12 Go de VRAM et CUDA, et ses prix de vente récents aux États-Unis restent entièrement sous 500 $.',
          },
          {
            type: 'plain-terms',
            text: 'Le VRAM de la GPU détermine quels modèles d\'IA vous pouvez faire tourner. 16 Go suffisent pour les modèles 14B. 24 Go (RTX 3090 occasion) permettent les modèles 30B. En dessous de 12 Go, vous êtes limité aux modèles 7B.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'RTX 3060 12 Go d’occasion — Notre choix',
            content: 'La NVIDIA GeForce RTX 3060 12 Go d’occasion est notre choix éditorial. Elle s’est vendue 310–350 $ (médiane 330 $) sur 209 ventes conclues sur eBay US, 17–26 novembre 2026, hors livraison ([guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Un modèle 14B en Q4 tient dans ses 12 Go ; un 14B en Q8 non. À notre avis, CUDA lui donne la prise en charge logicielle la plus simple des trois cartes, y compris pour le fine-tuning LoRA ; consultez la documentation de chaque projet. La [documentation GPU d’Ollama](https://docs.ollama.com/gpu) la liste comme prise en charge. Une carte d’occasion comporte des risques d’état et de garantie : testez-la pendant le délai de retour. Le neuf est un marché distinct : [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) relevait au 11 octobre 2026 des prix demandés aux États-Unis de 320–400 $. Pour l’occasion, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) relevait un prix demandé médian plus élevé, 400 $ (95 annonces, 7 novembre 2026) ; un prix demandé n’est pas une vente conclue.',
            affiliateLinks: [{ label: 'RTX 3060 12 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=RTX+3060+12GB' }],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12 Go — Option neuve, vérifiez le prix',
            content: 'Nous classons l’Intel Arc B580 12 Go deuxième, faute de pouvoir confirmer un prix actuel. Le 27 novembre, [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) l’affichait neuve sur Amazon US à 851,16 $ (l’annonce suivie était restée à 369,99 $ de juin à octobre) et d’occasion sur eBay à 499 $. [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) indiquait pour novembre une moyenne basse de 399 $ tirée d’annonces eBay (chiffre actuel 431 $). [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) n’a trouvé le 7 novembre que des annonces de revendeurs à 851–1 263 $. Prenez les chiffres de revendeurs avec prudence et vérifiez le vendeur avant d’acheter. La [documentation GPU d’Ollama](https://docs.ollama.com/gpu) ne cite pas les cartes Arc par leur nom ; elle décrit Vulkan comme une prise en charge GPU supplémentaire : vérifiez que votre outil fonctionne.',
            affiliateLinks: [{ label: 'Intel Arc B580 12 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Intel+Arc+B580' }],
          },
          {
            rank: 3,
            title: 'RX 7800 XT 16 Go d’occasion — Plus de VRAM, souvent plus de 500 $',
            content: 'Une AMD Radeon RX 7800 XT d’occasion offre 16 Go de VRAM. Elle s’est vendue 485–560 $ (médiane 525 $) sur 218 ventes conclues sur eBay US, relevées le 26 novembre 2026 ([guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)) : seul le bas de la fourchette entre dans ce budget. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) indiquait une médiane demandée plus élevée, 650 $ (11 annonces, 7 novembre). La [documentation GPU d’Ollama](https://docs.ollama.com/gpu) liste la carte pour Linux et Windows avec un pilote ROCm. AMD utilise ROCm et non CUDA de NVIDIA : vérifiez que chaque outil prévu, y compris pour le fine-tuning, prend en charge votre carte.',
            affiliateLinks: [{ label: 'RX 7800 XT 16Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=RX+7800+XT+16GB' }],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparatif GPU — Données de prix et capacité',
        content: 'PromptQuorum n’a pas testé les performances de ces cartes : le tableau indique la VRAM, les données de prix et la capacité en modèles. Les chiffres RTX 3060 et RX 7800 XT sont des ventes conclues sur eBay US ([guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Nous n’avons pas de données de vente pour l’Arc B580 et ses prix d’annonces divergent : ne les comparez pas comme équivalents. Non classées car les données les placent au-dessus de 500 $ : RTX 3090 d’occasion (vendue 1 500–1 725 $), RTX 5060 Ti 16 Go neuve (prix demandé le plus bas 617,99 $, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 octobre ; 769,99 $ sur Amazon US, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 novembre) et RTX 4070 (à partir de 569,99 $ demandés, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)). Prix en dollars américains ; en France ils peuvent différer.',
        columns: ['GPU', 'VRAM', 'Prix habituel', 'Modèle max'],
        rows: [
          { GPU: 'RTX 3060 12 Go (occasion) ★', VRAM: '12 Go', 'Prix habituel': '310–350 $ vendue (occasion)', 'Modèle max': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12 Go', VRAM: '12 Go', 'Prix habituel': '399–851 $, sources divergentes', 'Modèle max': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16 Go (occasion)', VRAM: '16 Go', 'Prix habituel': '485–560 $ vendue (occasion)', 'Modèle max': '14B (Q4, plus de contexte)' },
        ],
      },
      methodology: {
        title: 'Comment nous avons sélectionné ces GPU',
        content: 'Sélection : au moins 12 Go de VRAM, un moyen documenté ou rapporté d’exécuter des modèles locaux et des données de prix autour de 500 $. PromptQuorum n’a pas testé les performances. L’ordre est un choix éditorial fondé sur la VRAM, la prise en charge logicielle et la solidité des données de prix ; les ventes conclues comptent plus que les prix demandés ou en magasin. Tous les prix sont américains, consultés le 2026-11-28 : [guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) (ventes), [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) (prix demandés les plus bas, 11 octobre, NVIDIA seulement), [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) (médiane demandée sur eBay et neuf sur Amazon, 7 novembre), [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580) et [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/) (suivis d’annonces Arc B580). La RTX 4060 Ti 16 Go n’est pas classée : [guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) donne 450–550 $ sans préciser la base, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) des prix demandés de 649,99 $ d’occasion et 790 $ en neuf, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) une médiane demandée de 745 $ en occasion. Des rapports de marché lient les hausses de 2026 à la pénurie de mémoire ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)).',
      },
      vramGuide: {
        title: 'Besoins en VRAM selon la taille du modèle',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Besoins en VRAM : un modèle 7B nécessite ~4–5 Go (Q4) ou ~7–8 Go (Q8) ; un modèle 14B nécessite ~8–9 Go (Q4) ou ~16 Go (Q8) ; un modèle 30B nécessite ~18–20 Go (Q4) ; un modèle 70B nécessite ~40–42 Go (Q4).',
          },
          {
            type: 'plain-terms',
            text: 'Pensez au VRAM comme à la RAM des modèles d\'IA. Le modèle doit tenir entièrement dans le VRAM pour une inférence rapide. S\'il déborde vers la RAM système (le « offloading »), la vitesse chute généralement fortement, souvent d\'un facteur important, selon l\'ampleur du débordement. La quantification Q4 divise la taille par deux par rapport au Q8, pour une légère perte de qualité.',
          },
        ],
        items: [
          'Modèle 7B en Q4 : ~4,5 Go de VRAM — toutes les GPU de cette liste gèrent cela facilement',
          'Modèle 7B en Q8 : ~7,5 Go de VRAM — convient à toutes les GPU ici',
          'Modèle 13B en Q4 : ~8,5 Go de VRAM — convient à toutes les GPU de cette liste',
          'Modèle 14B en Q8 : [Ollama indique 16 Go pour Qwen3 14B](https://ollama.com/library/qwen3/tags) ; avec le contexte, il faut plus de 16 Go, donc aucune des trois cartes ne le garde entièrement en VRAM',
          'Modèle 30B en Q4 : ~18 Go de VRAM — une carte de 24 Go, comme une RTX 3090 d\'occasion, est nécessaire pour être à l\'aise',
          'Modèle 70B en Q4 : ~40 Go — nécessite deux GPU ou un offloading CPU',
        ],
      },
      decisionMatrix: {
        title: 'Quelle GPU devriez-vous acheter ?',
        content: 'Utilisez ce guide de décision selon votre usage principal :',
        items: [
          '**CUDA dans le budget** → RTX 3060 12 Go d’occasion, vendue 310–350 $ (US, 17–26 novembre 2026).',
          '**Vous voulez du neuf** → Intel Arc B580 12 Go, si un vendeur fiable la propose dans votre budget et que votre outil la prend en charge.',
          '**Besoin de 16 Go** → RX 7800 XT d’occasion ; la médiane de vente est de 525 $, il faudra peut-être dépasser 500 $.',
          '**Besoin de modèles 30B ?** → Une carte de 24 Go comme la RTX 3090 d’occasion, vendue 1 500–1 725 $ — très au-dessus de 500 $.',
          '**Utilisateur Windows** → À notre avis, la RTX 3060 12 Go d’occasion avec CUDA est la voie la plus simple.',
          '**Besoin de plus de 12 Go pour un test ?** Plutôt que de dépasser votre budget, vous pouvez [louer une carte de 24 Go pour quelques dollars](/fr/power-local-llm/best-cloud-gpu-providers) et voir si les modèles plus grands en valent la peine.',
        ],
      },
      softwareCompat: {
        title: 'Compatibilité logicielle par GPU',
        content: 'La prise en charge évolue vite : consultez la documentation de chaque projet. La [documentation GPU d’Ollama](https://docs.ollama.com/gpu) liste la RTX 3060 et la RX 7800 XT et ne cite pas les cartes Arc par leur nom.',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'RTX 3060 12 Go', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'Intel Arc B580 12 Go', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ voir doc', vLLM: '⚠️ partiel', 'Text Gen WebUI': '⚠️ voir doc', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ voir doc', vLLM: '⚠️ voir doc', 'Text Gen WebUI': '⚠️ voir doc', 'Fine-Tuning CUDA': '❌' },
        ],
      },
      powerAndCooling: {
        title: 'Consommation électrique et exigences système',
        content: 'La consommation de la GPU détermine l\'alimentation et le boîtier nécessaires. Faire tourner des LLM maintient souvent la GPU à 80–100 % d\'utilisation — contrairement au jeu vidéo, il y a peu d\'images inactives. Vérifiez la puissance d\'alimentation et les connecteurs recommandés par le fabricant pour votre modèle exact.',
        items: [
          'RTX 3060 12 Go : 170 W — généralement une alimentation 550 W+ ; un connecteur 8 broches ; vérifiez la recommandation du fabricant',
          'Intel Arc B580 12 Go : 190 W ; [Intel indique](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html) une alimentation de 600 W minimum et un connecteur 8 broches ; les cartes partenaires peuvent différer',
          'RX 7800 XT 16 Go : vérifiez la consommation, l’alimentation et les connecteurs indiqués par le fabricant',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '8 Go de VRAM suffisent-ils pour les LLMs en local ?',
            a: '8 Go de VRAM limitent aux modèles 7B en quantification Q4. Pour une utilisation locale sérieuse en 2026, 12 Go est le minimum pratique, 16 Go est recommandé.',
          },
          {
            q: 'Peut-on encore acheter une RTX 3090 occasion pour moins de 500 $ ?',
            a: 'Non. La RTX 3090 d\'occasion s\'est vendue 1 500–1 725 $ USD (médiane 1 650 $) sur 225 ventes conclues sur eBay US, 13–23 novembre 2026, hors livraison ([guide InsiderLLM des GPU d\'occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) ; non converti en EUR, les prix en France peuvent différer), donc ce n\'est pas une option sous 500 $. Ce sont des données d\'annonces, pas un devis. Ses 24 Go de VRAM la gardent intéressante : c\'est une voie CUDA vers les modèles de classe 30B, qui demandent environ 18–20 Go en Q4. Ce n’est pas la seule carte de 24 Go : le 7 novembre, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) relevait un prix demandé médian de 1 499 $ pour une AMD RX 7900 XTX d’occasion sur eBay US (29 annonces) et 2 099 $ en neuf sur Amazon US ; la carte n’a pas CUDA. Les prix demandés ne sont pas directement comparables aux ventes conclues ci-dessus.',
          },
          {
            q: 'Les GPU AMD fonctionnent-elles pour l\'IA locale ?',
            a: 'Oui, avec des réserves. La [documentation GPU d’Ollama](https://docs.ollama.com/gpu) liste la RX 7800 XT pour Linux et Windows avec un pilote ROCm. AMD utilise ROCm et non CUDA de NVIDIA : vérifiez que chaque outil prévu, y compris pour le fine-tuning, prend en charge votre carte. La RX 7800 XT d’occasion s’est vendue 485–560 $ (médiane 525 $ ; eBay US, relevé le 26 novembre 2026) : beaucoup coûtent plus de 500 $. Pour le fine-tuning ou moins de configuration, nous choisirions une RTX 3060 12 Go d’occasion.',
          },
          {
            q: 'Qu\'en est-il des GPU Intel Arc pour l\'IA ?',
            a: 'C’est une option de 12 Go, mais vérifiez d’abord le prix. Les chiffres de novembre allaient d’une moyenne d’annonces eBay de 399 $ ([GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)) à une annonce Amazon US à 851,16 $ ([VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/), 27 novembre). L’autre limite est logicielle : la [documentation GPU d’Ollama](https://docs.ollama.com/gpu) ne cite pas Arc par son nom et la [documentation de vLLM](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/) décrit la prise en charge des GPU Intel comme initiale. Pour le fine-tuning LoRA, nous choisirions une RTX 3060 12 Go d’occasion.',
          },
          {
            q: 'Puis-je faire tourner un modèle 70B sur une seule GPU sous 500 $ ?',
            a: 'Pas à pleine vitesse. Même la RTX 3090 (24 Go) ne peut pas contenir 70B Q4 (~40 Go) entièrement en VRAM. Vous pouvez utiliser l\'offloading CPU avec llama.cpp pour répartir le modèle entre la VRAM et la RAM système, mais la génération tourne alors bien en dessous de la vitesse d\'un modèle qui tient en VRAM, ce qui rend l\'usage interactif peu pratique. Pour faire tourner des modèles 70B sur GPU, il faut deux cartes de 24 Go (2× RTX 3090, soit 48 Go au total) ou de l\'inférence cloud.',
          },
          {
            q: 'Les nouvelles GPU (RTX 5060 Ti) rendront-elles ces cartes obsolètes ?',
            a: 'Pas dans ce budget aux prix que nous avons vérifiés. Le prix demandé le plus bas en neuf pour la RTX 5060 Ti 16 Go était de 617,99 $ ([BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 11 octobre) et Amazon US affichait 769,99 $ ([GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 7 novembre). Elle a 16 Go de VRAM et un prix conseillé de 429 $. Si un vendeur fiable la propose sous 500 $, elle mérite réflexion. Les annonces des 27–28 novembre étaient encore plus chères : environ 800 $ sur [gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb) (28 novembre) et 849,99 $ sur Amazon US selon [BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti) (27 novembre).',
          },
          {
            q: 'Combien coûte une RTX 4060 Ti 16 Go d\'occasion ?',
            a: 'Les sources divergent. [guide InsiderLLM des GPU d’occasion](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/) donne 450–550 $ sans préciser la base. [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/) relevait le 11 octobre un prix demandé le plus bas de 649,99 $ d’occasion et 790 $ en neuf (3 annonces de neuf seulement). [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/) indiquait une médiane demandée de 745 $ en occasion (16 annonces, 7 novembre). Consultez les ventes conclues (et non les annonces actives) sur eBay et vérifiez qu’il s’agit de la version 16 Go.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleures GPU pour LLM locaux](/fr/local-llms/best-gpus-for-local-llms) -- meilleures GPU pour LLM locaux',
          '[Meilleures GPU économiques pour LLM locaux](/fr/local-llms/best-budget-gpus-local-llm) -- meilleures GPU économiques pour LLM locaux',
          '[Quelle quantité de VRAM pour les LLM locaux ?](/fr/local-llms/how-much-vram-local-llm) -- quelle quantité de VRAM vous faut-il ?',
          '[Calculateur de VRAM pour LLM locaux](/fr/local-llms/vram-calculator-local-llm) -- calculateur de VRAM pour LLM locaux',
          '[Acheter des GPU d\'occasion pour les LLM locaux](/fr/local-llms/used-gpus-for-local-llms) -- acheter des GPU d\'occasion pour les LLM locaux',
          '[Louer une carte de 24 Go pour quelques dollars](/fr/power-local-llm/best-cloud-gpu-providers) -- Comparatif des fournisseurs de location de GPU pour essayer une carte plus puissante avant l\'achat.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '8 Go de VRAM suffisent-ils pour les LLMs en local ?',
          acceptedAnswer: { '@type': 'Answer', text: '8 Go de VRAM limitent aux modèles 7B en quantification Q4. Pour une utilisation locale sérieuse en 2026, 12 Go est le minimum pratique, 16 Go est recommandé.' },
        },
        {
          '@type': 'Question',
          name: 'Peut-on encore acheter une RTX 3090 occasion pour moins de 500 $ ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. La RTX 3090 d\'occasion s\'est vendue 1 500–1 725 $ USD (médiane 1 650 $) sur 225 ventes conclues sur eBay US, 13–23 novembre 2026, hors livraison (guide InsiderLLM des GPU d\'occasion ; non converti en EUR, les prix en France peuvent différer), donc ce n\'est pas une option sous 500 $. Ce sont des données d\'annonces, pas un devis. Ses 24 Go de VRAM la gardent intéressante : c\'est une voie CUDA vers les modèles de classe 30B, qui demandent environ 18–20 Go en Q4. Ce n’est pas la seule carte de 24 Go : le 7 novembre, GeekyInc relevait un prix demandé médian de 1 499 $ pour une AMD RX 7900 XTX d’occasion sur eBay US (29 annonces) et 2 099 $ en neuf sur Amazon US ; la carte n’a pas CUDA. Les prix demandés ne sont pas directement comparables aux ventes conclues ci-dessus.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les GPU AMD fonctionnent-elles pour l\'IA locale ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, avec des réserves. La documentation GPU d’Ollama liste la RX 7800 XT pour Linux et Windows avec un pilote ROCm. AMD utilise ROCm et non CUDA de NVIDIA : vérifiez que chaque outil prévu, y compris pour le fine-tuning, prend en charge votre carte. La RX 7800 XT d’occasion s’est vendue 485–560 $ (médiane 525 $ ; eBay US, relevé le 26 novembre 2026) : beaucoup coûtent plus de 500 $. Pour le fine-tuning ou moins de configuration, nous choisirions une RTX 3060 12 Go d’occasion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qu\'en est-il des GPU Intel Arc pour l\'IA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'C’est une option de 12 Go, mais vérifiez d’abord le prix. Les chiffres de novembre allaient d’une moyenne d’annonces eBay de 399 $ (GPU Poet) à une annonce Amazon US à 851,16 $ (VideoCardPrices, 27 novembre). L’autre limite est logicielle : la documentation GPU d’Ollama ne cite pas Arc par son nom et la documentation de vLLM décrit la prise en charge des GPU Intel comme initiale. Pour le fine-tuning LoRA, nous choisirions une RTX 3060 12 Go d’occasion.',
          },
        },
        {
          '@type': 'Question',
          name: 'Puis-je faire tourner un modèle 70B sur une seule GPU sous 500 $ ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pas à pleine vitesse. Même la RTX 3090 (24 Go) ne peut pas contenir 70B Q4 (~40 Go) entièrement en VRAM. Vous pouvez utiliser l\'offloading CPU avec llama.cpp pour répartir le modèle entre la VRAM et la RAM système, mais la génération tourne alors bien en dessous de la vitesse d\'un modèle qui tient en VRAM, ce qui rend l\'usage interactif peu pratique. Pour faire tourner des modèles 70B sur GPU, il faut deux cartes de 24 Go (2× RTX 3090, soit 48 Go au total) ou de l\'inférence cloud.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les nouvelles GPU (RTX 5060 Ti) rendront-elles ces cartes obsolètes ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pas dans ce budget aux prix que nous avons vérifiés. Le prix demandé le plus bas en neuf pour la RTX 5060 Ti 16 Go était de 617,99 $ (BuySellRAM, 11 octobre) et Amazon US affichait 769,99 $ (GeekyInc, 7 novembre). Elle a 16 Go de VRAM et un prix conseillé de 429 $. Si un vendeur fiable la propose sous 500 $, elle mérite réflexion. Les annonces des 27–28 novembre étaient encore plus chères : environ 800 $ sur gpuprix (28 novembre) et 849,99 $ sur Amazon US selon BasketPrice (27 novembre).',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte une RTX 4060 Ti 16 Go d\'occasion ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les sources divergent. guide InsiderLLM des GPU d’occasion donne 450–550 $ sans préciser la base. BuySellRAM relevait le 11 octobre un prix demandé le plus bas de 649,99 $ d’occasion et 790 $ en neuf (3 annonces de neuf seulement). GeekyInc indiquait une médiane demandée de 745 $ en occasion (16 annonces, 7 novembre). Consultez les ventes conclues (et non les annonces actives) sur eBay et vérifiez qu’il s’agit de la version 16 Go.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleures GPU pour l\'inférence LLM sous 500 $ (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12 Go (occasion)', description: 'Choix éditorial — 12 Go de VRAM, CUDA, prix de vente US sous 500 $' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12 Go', description: 'Option neuve de 12 Go — les sources de prix actuelles divergent' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16 Go (occasion)', description: '16 Go de VRAM — médiane de vente US 525 $, au-dessus du budget' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Meilleure GPU pour l\'inférence LLM à moins de 500 $ (2026)',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/fr/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'fr',
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '500ドル以下のLLM推論向けGPUおすすめランキング（2026年）',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ja.webp',
    seoTitle: '$500以下のローカルLLM向けGPU（2026年）：中古RTX 3060',
    metaDescription: '$500以下のローカルLLM向けに当サイトが選ぶのは中古RTX 3060 12GB。米国の成約価格は$310〜350。Arc B580の価格は情報源で食い違うため要確認。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB（中古）', productCategory: 'gpu', priceRange: '中古$310〜350（米国成約、2026年11月）', label: 'RTX 3060 12GBの価格を見る →' },
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: '情報源が食い違うため出品を確認', label: 'Intel Arc B580 12GBの価格を見る →' },
      { url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB', productName: 'RX 7800 XT 16GB（中古）', productCategory: 'gpu', priceRange: '中古$485〜560（米国成約、2026年11月）', label: 'RX 7800 XT 16GBの価格を見る →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500以下のローカルLLM推論向けに当サイトが選ぶのは中古のRTX 3060 12GBです。12GBのVRAMとCUDAツールチェーンがあり、eBay米国の成約209件（2026年11月17〜26日、送料別）で$310〜350（中央値$330）でした（[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。これは編集上の選定で、ベンチマーク結果ではありません。Intel Arc B580 12GBは11月の価格情報が大きく食い違うため、1位にしていません。中古RX 7800 XT 16GBはVRAMが多いものの、成約中央値$525は$500を超えます。**価格は米ドルで、日本での価格は異なる場合があります。',
    quickAnswerTop: {
      question: '$500以下でローカルAIモデルを動かす最高のGPUは何ですか？',
      answer: '**当サイトが選ぶのは中古のRTX 3060 12GBです。**eBay米国の成約209件（2026年11月17〜26日、送料別）で$310〜350（中央値$330）でした（[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。12GBのVRAMとCUDAを備えます。Intel Arc B580 12GBは新品の選択肢ですが、現在の価格を確認できません。中古RX 7800 XT 16GBの成約価格は$485〜560（中央値$525）でした。日本での価格は異なる場合があります。',
      bullets: [
        '**当サイトの選定：**中古RTX 3060 12GB — 成約$310〜350（米国、2026年11月17〜26日）、CUDA対応',
        '**新品の選択肢：**Intel Arc B580 12GB — 価格情報が食い違うため販売元を確認',
        '**VRAM重視：**中古RX 7800 XT 16GB — 成約中央値$525。$500に収まるのは下限付近のみ',
        '⚠️ 中古RTX 3090：成約$1,500〜1,725（米国、11月13〜23日）— $500を大きく超過',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**当サイトは中古RTX 3060 12GBを選びます。12GB VRAM、CUDA対応で、米国の成約価格は$310〜350（中央値$330、2026年11月17〜26日）です**',
          'Intel Arc B580 12GB：11月の数値はeBay出品の平均$399からAmazon米国の出品$851.16まで開きがあります',
          '中古RX 7800 XT 16GB：成約$485〜560（中央値$525）。$500に収まるのは下限付近のみです',
          '⚠️ RTX 4060 Ti 16GB：価格情報が食い違うため、順位に含めていません',
          '⚠️ 中古RTX 3090：成約$1,500〜1,725で、$500を大きく超えます',
          '価格はすべて米国のもので、基準（成約・提示・小売）が異なるため明記しています。PromptQuorumはこれらのカードのベンチマークを行っていません。',
        ],
      },
      rankedList: {
        title: '500ドル以下LLM推論GPUランキング',
        snippetBlocks: [
          { type: 'one-sentence', text: '$500以下のローカルLLM推論向けに当サイトが選ぶのは中古のRTX 3060 12GBです。12GBのVRAMとCUDA対応があり、直近の米国の成約価格がすべて$500未満だからです。' },
          { type: 'plain-terms', text: 'GPU VRAMはどのAIモデルをローカルで実行できるかを決定します。16GBで14Bモデル対応。24GB（中古RTX 3090）で30Bモデル対応。12GB未満だと7Bモデルのみです。' },
        ],
        rankedItems: [
          {
            rank: 1,
            title: '中古RTX 3060 12GB — 当サイトの選定',
            content: '中古のNVIDIA GeForce RTX 3060 12GBは編集上の選定です。eBay米国の成約209件（2026年11月17〜26日、送料別）で$310〜350（中央値$330）でした（[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。14BモデルのQ4は12GBに収まりますが、14BのQ8は収まりません。当サイトの見解では、CUDAにより3枚の中でツール対応が最も扱いやすく、LoRAファインチューニングも同様です。各プロジェクトのドキュメントを確認してください。[OllamaのGPUドキュメント](https://docs.ollama.com/gpu)では対応製品に含まれます。中古品は状態と保証のリスクがあるため、返品期間内に動作確認してください。新品は別の市場で、[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)は2026年10月11日時点の米国提示価格を$320〜400としていました。中古品については、[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)の提示価格の中央値はより高い$400でした（95件、2026年11月7日）。提示価格は成約価格ではありません。',
            affiliateLinks: [{ label: 'RTX 3060 12GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB' }],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — 新品の選択肢、価格を要確認',
            content: '現在の価格を確認できないため、Intel Arc B580 12GBは2位としています。11月27日時点で[VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)は、Amazon米国の新品を$851.16（追跡中の出品は6月から10月まで$369.99）、eBayの中古を$499としていました。[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)はeBay出品に基づく11月の最安平均を$399（現在値$431）としていました。[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)が11月7日に見つけたのは$851〜1,263の転売出品のみでした。転売業者の価格は慎重に扱い、購入前に販売元を確認してください。[OllamaのGPUドキュメント](https://docs.ollama.com/gpu)はArcのカード名を挙げておらず、VulkanをGPUの追加対応手段として説明しているため、使うツールが動くか確認してください。',
            affiliateLinks: [{ label: 'Intel Arc B580 12GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=Intel+Arc+B580' }],
          },
          {
            rank: 3,
            title: '中古RX 7800 XT 16GB — VRAMは多いが$500超が多い',
            content: '中古のAMD Radeon RX 7800 XTは16GBのVRAMを備えます。eBay米国の成約218件（2026年11月26日取得）で$485〜560（中央値$525）だったため（[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）、この予算に収まるのは下限付近のみです。[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)の提示価格の中央値はより高い$650でした（11件、11月7日）。[OllamaのGPUドキュメント](https://docs.ollama.com/gpu)ではLinuxとWindowsでROCmドライバーによる対応が示されています。AMDはNVIDIAのCUDAではなくROCmを使うため、ファインチューニング用も含め、使う予定の各ツールがお使いのカードに対応するか確認してください。',
            affiliateLinks: [{ label: 'RX 7800 XT 16GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=RX+7800+XT+16GB' }],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU比較 — 価格の根拠と容量',
        content: 'PromptQuorumはこれらのカードのベンチマークを行っていないため、表にはVRAM、価格の根拠、対応モデル規模を示します。RTX 3060とRX 7800 XTの数値はeBay米国の成約データです（[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。Arc B580の成約データはなく、出品価格は食い違うため、同じ基準として比較しないでください。根拠上$500を超えるため順位に含めないもの：中古RTX 3090（成約$1,500〜1,725）、新品RTX 5060 Ti 16GB（最低提示価格$617.99、[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)、10月11日／Amazon米国$769.99、[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)、11月7日）、RTX 4070（提示価格$569.99から、[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)）。価格は米ドルで、日本では異なる場合があります。',
        columns: ['GPU', 'VRAM', '一般的な価格', '最大モデル'],
        rows: [
          { GPU: 'RTX 3060 12GB（中古） ★', VRAM: '12GB', '一般的な価格': '成約$310〜350（中古）', '最大モデル': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12GB', '一般的な価格': '$399〜851（情報源で差）', '最大モデル': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB（中古）', VRAM: '16GB', '一般的な価格': '成約$485〜560（中古）', '最大モデル': '14B (Q4、長めの文脈)' },
        ],
      },
      methodology: {
        title: 'これらのGPUを選定した方法',
        content: '選定条件：VRAMが12GB以上で、ローカルモデルを動かす方法が文書化または報告されており、$500前後の価格根拠があること。PromptQuorumはベンチマークを行っていません。順位はVRAM、ソフトウェア対応、価格根拠の確かさに基づく編集上の選定で、成約データを提示価格や小売価格より重視します。価格はすべて米国のもので、参照日は2026-11-28です：[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)（成約）、[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)（最低提示価格、10月11日、NVIDIAのみ）、[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)（eBay提示価格の中央値とAmazon新品価格、11月7日）、[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)と[VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)（Arc B580の出品トラッカー）。RTX 4060 Ti 16GBは順位に含めていません。[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)は基準を示さず$450〜550、[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)は提示価格で中古$649.99・新品$790、[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)は中古提示価格の中央値$745です。市場レポートは2026年の値上がりをメモリ不足と関連づけています（[InsiderLLMトラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)）。',
      },
      vramGuide: {
        title: 'モデルサイズ別のVRAM要件',
        snippetBlocks: [
          { type: 'one-sentence', text: 'VRAM要件：7Bモデルは約4〜5GB（Q4）または約7〜8GB（Q8）；14Bモデルは約8〜9GB（Q4）または約16GB（Q8）；30Bモデルは約18〜20GB（Q4）；70Bモデルは約40〜42GB（Q4）が必要です。' },
          { type: 'plain-terms', text: 'VRAMはAIモデル用のRAMのようなものと考えてください。高速な推論には、モデル全体がVRAMに収まる必要があります。CPU RAMに溢れる場合（「オフロード」と呼ばれます）、速度は大幅に低下します（溢れる量によって異なります）。Q4量子化はQ8と比べてサイズを半分にし、品質への影響はわずかです。' },
        ],
        items: [
          '7BモデルのQ4：約4.5GB VRAM——このリストのどのGPUでも簡単に扱えます',
          '7BモデルのQ8：約7.5GB VRAM——ここに挙げたすべてのGPUに収まります',
          '13BモデルのQ4：約8.5GB VRAM——このリストのすべてのGPUに収まります',
          '14BモデルのQ8：[OllamaはQwen3 14Bを16GBと掲載](https://ollama.com/library/qwen3/tags)——コンテキストを含めると16GB超が必要で、ここの3枚はいずれもVRAMに収めきれません',
          '30BモデルのQ4：約18GB VRAM——余裕を持って使うには中古RTX 3090などの24GBカードが必要',
          '70BモデルのQ4：約40GB——GPU2枚またはCPUオフロードが必要',
        ],
      },
      decisionMatrix: {
        title: 'どのGPUを買うべきですか？',
        content: '主な用途に応じてこの選択ガイドを活用してください：',
        items: [
          '**予算内でCUDA** → 中古RTX 3060 12GB（成約$310〜350、米国、2026年11月17〜26日）。',
          '**新品が欲しい** → Intel Arc B580 12GB。信頼できる販売元が予算内で出していて、使うツールが対応する場合に。',
          '**16GBが必要** → 中古RX 7800 XT。成約中央値は$525のため、$500を超える場合があります。',
          '**30Bモデルが必要？** → 中古RTX 3090などの24GBカード。成約$1,500〜1,725で、$500を大きく超えます。',
          '**Windowsユーザー** → 当サイトの見解では、CUDAが使える中古RTX 3060 12GBが手軽です。',
          '**テストに12 GB以上が必要ですか？** 予算を広げる代わりに、[24 GBカードを数ドルでレンタル](/ja/power-local-llm/best-cloud-gpu-providers)して、大きなモデルが価値に見合うかを確かめられます。',
        ],
      },
      softwareCompat: {
        title: 'GPU別ソフトウェア互換性',
        content: '対応状況は変わりやすいため、各プロジェクトのドキュメントを確認してください。[OllamaのGPUドキュメント](https://docs.ollama.com/gpu)にはRTX 3060とRX 7800 XTが掲載され、Arcのカード名はありません。',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDAファインチューニング'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDAファインチューニング': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ 要確認', vLLM: '⚠️ 一部対応', 'Text Gen WebUI': '⚠️ 要確認', 'CUDAファインチューニング': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ 要確認', vLLM: '⚠️ 要確認', 'Text Gen WebUI': '⚠️ 要確認', 'CUDAファインチューニング': '❌' },
        ],
      },
      powerAndCooling: {
        title: '消費電力とシステム要件',
        content: 'GPUの消費電力によって必要な電源とケースが決まります。LLM実行中はGPUが80〜100%の使用率になることが多く、ゲームと異なりアイドルフレームはほとんどありません。必要な電源容量とコネクタは、お使いのモデルについてメーカーの推奨を確認してください。',
        items: [
          'RTX 3060 12GB：170W——一般的に550W以上の電源；8ピンコネクタ1本；メーカーの推奨を確認',
          'Intel Arc B580 12GB：190W——[Intelの仕様](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html)では電源は最低600W、8ピンコネクタ1本です。他社製モデルは異なる場合があります',
          'RX 7800 XT 16GB：消費電力、電源容量、電源コネクタはカードメーカーの情報を確認',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '8GB VRAMはローカルLLMに十分ですか？', a: '8GB VRAMはQ4量子化で7Bモデルに限定されます。13Bモデルは完全にVRAMに収まらず、14BモデルはCPU RAMへのオフロードが発生し速度は大幅に低下します（溢れる量によって異なります）。2026年の実用的なローカルLLM利用には12GBが最低限、16GBが推奨です。' },
          {
            q: '中古RTX 3090は今でも$500以下で買えますか？',
            a: 'いいえ。中古RTX 3090の成約価格は$1,500〜1,725でした（中央値$1,650、eBay米国の成約225件、2026年11月13〜23日、送料別、[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。したがって$500以下の選択肢ではありません（米ドル表記。日本での価格は異なる場合があります）。これは出品データであり、価格の見積もりではありません。24GB VRAMが引き続き魅力で、30Bクラスのモデル（Q4で約18〜20GB必要）にCUDAで手が届く選択肢です。24GBのカードはほかにもあります。[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)の11月7日の調査では、中古のAMD RX 7900 XTXの提示価格の中央値はeBay米国で$1,499（29件）、新品はAmazon米国で$2,099でした。このカードはCUDAを使えません。提示価格は上記の成約価格と直接比較できません。',
          },
          {
            q: 'AMD GPUはローカルAIに使えますか？',
            a: '条件付きで使えます。[OllamaのGPUドキュメント](https://docs.ollama.com/gpu)ではRX 7800 XTがLinuxとWindowsでROCmドライバーにより対応と示されています。AMDはNVIDIAのCUDAではなくROCmを使うため、ファインチューニング用も含め、使う予定の各ツールがお使いのカードに対応するか確認してください。中古RX 7800 XTの成約価格は$485〜560（中央値$525、eBay米国、11月26日取得）で、$500を超えるものが多くあります。ファインチューニングや設定の手軽さを重視するなら、当サイトは中古RTX 3060 12GBを選びます。',
          },
          {
            q: 'AI用のIntel Arc GPUはどうですか？',
            a: '12GBの選択肢ですが、まず価格を確認してください。11月の数値はeBay出品の平均$399（[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)）からAmazon米国の出品$851.16（[VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)、11月27日）まで開きがありました。もう一つの制約はソフトウェアです。[OllamaのGPUドキュメント](https://docs.ollama.com/gpu)はArcの名前を挙げておらず、[vLLMのドキュメント](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/)はIntel GPU対応を初期段階と説明しています。LoRAファインチューニングには、当サイトは中古RTX 3060 12GBを選びます。',
          },
          {
            q: '$500以下のGPU1枚で70Bモデルを実行できますか？',
            a: 'フル速度では不可能です。RTX 3090（24GB）でさえ、70B Q4（約40GB）を完全にVRAMに収めることはできません。llama.cppのCPUオフロードを使えばGPU VRAMとシステムRAMにモデルを分割できますが、その場合の生成速度はVRAMに収まるモデルを大きく下回り、対話的な用途には実用的ではありません。70Bモデルは、24GBカード2枚（RTX 3090×2枚で計48GB）またはクラウド推論で動かすのが現実的です。',
          },
          {
            q: '新しいGPU（RTX 5060 Ti）はこれらを時代遅れにしますか？',
            a: '確認した価格では、この予算には収まりません。新品RTX 5060 Ti 16GBの最低提示価格は$617.99（[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)、10月11日）、Amazon米国は$769.99（[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)、11月7日）でした。VRAMは16GB、希望小売価格は$429です。信頼できる販売元が$500未満で出していれば、検討する価値があります。11月27〜28日の掲載はさらに高く、[gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb)で約$800（11月28日）、[BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti)によるとAmazon米国で$849.99（11月27日）でした。',
          },
          {
            q: '中古のRTX 4060 Ti 16GBはいくらですか？',
            a: '情報源が食い違っています。[InsiderLLMの中古GPU購入ガイド](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)は基準を示さず$450〜550としています。[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)は10月11日時点の最低提示価格を中古$649.99、新品$790（新品は3件のみ）としていました。[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)の中古提示価格の中央値は$745でした（16件、11月7日）。eBayの（出品中ではなく）売却済み出品を確認し、16GB版であることも確かめてください。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLM向けベストGPU](/ja/local-llms/best-gpus-for-local-llms) -- ローカルLLM向けベストGPU',
          '[ローカルLLM向けベスト低価格GPU](/ja/local-llms/best-budget-gpus-local-llm) -- ローカルLLM向けベスト低価格GPU',
          '[ローカルLLMに必要なVRAM量は？](/ja/local-llms/how-much-vram-local-llm) -- 必要なVRAM量の目安',
          '[ローカルLLM VRAMカリキュレーター](/ja/local-llms/vram-calculator-local-llm) -- ローカルLLM VRAMカリキュレーター',
          '[ローカルLLM向け中古GPU購入ガイド](/ja/local-llms/used-gpus-for-local-llms) -- ローカルLLM向け中古GPU購入ガイド',
          '[24 GBカードを数ドルでレンタル](/ja/power-local-llm/best-cloud-gpu-providers) -- GPUレンタル事業者の比較。購入前に大きなカードを試すために。',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '8GB VRAMはローカルLLMに十分ですか？',
          acceptedAnswer: { '@type': 'Answer', text: '8GB VRAMはQ4量子化で7Bモデルに限定されます。13Bモデルは完全にVRAMに収まらず、14BモデルはCPU RAMへのオフロードが発生し速度は大幅に低下します（溢れる量によって異なります）。2026年の実用的なローカルLLM利用には12GBが最低限、16GBが推奨です。' },
        },
        {
          '@type': 'Question',
          name: '中古RTX 3090は今でも$500以下で買えますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'いいえ。中古RTX 3090の成約価格は$1,500〜1,725でした（中央値$1,650、eBay米国の成約225件、2026年11月13〜23日、送料別、InsiderLLMの中古GPU購入ガイド）。したがって$500以下の選択肢ではありません（米ドル表記。日本での価格は異なる場合があります）。これは出品データであり、価格の見積もりではありません。24GB VRAMが引き続き魅力で、30Bクラスのモデル（Q4で約18〜20GB必要）にCUDAで手が届く選択肢です。24GBのカードはほかにもあります。GeekyIncの11月7日の調査では、中古のAMD RX 7900 XTXの提示価格の中央値はeBay米国で$1,499（29件）、新品はAmazon米国で$2,099でした。このカードはCUDAを使えません。提示価格は上記の成約価格と直接比較できません。',
          },
        },
        {
          '@type': 'Question',
          name: 'AMD GPUはローカルAIに使えますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '条件付きで使えます。OllamaのGPUドキュメントではRX 7800 XTがLinuxとWindowsでROCmドライバーにより対応と示されています。AMDはNVIDIAのCUDAではなくROCmを使うため、ファインチューニング用も含め、使う予定の各ツールがお使いのカードに対応するか確認してください。中古RX 7800 XTの成約価格は$485〜560（中央値$525、eBay米国、11月26日取得）で、$500を超えるものが多くあります。ファインチューニングや設定の手軽さを重視するなら、当サイトは中古RTX 3060 12GBを選びます。',
          },
        },
        {
          '@type': 'Question',
          name: 'AI用のIntel Arc GPUはどうですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '12GBの選択肢ですが、まず価格を確認してください。11月の数値はeBay出品の平均$399（GPU Poet）からAmazon米国の出品$851.16（VideoCardPrices、11月27日）まで開きがありました。もう一つの制約はソフトウェアです。OllamaのGPUドキュメントはArcの名前を挙げておらず、vLLMのドキュメントはIntel GPU対応を初期段階と説明しています。LoRAファインチューニングには、当サイトは中古RTX 3060 12GBを選びます。',
          },
        },
        {
          '@type': 'Question',
          name: '$500以下のGPU1枚で70Bモデルを実行できますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'フル速度では不可能です。RTX 3090（24GB）でさえ、70B Q4（約40GB）を完全にVRAMに収めることはできません。llama.cppのCPUオフロードを使えばGPU VRAMとシステムRAMにモデルを分割できますが、その場合の生成速度はVRAMに収まるモデルを大きく下回り、対話的な用途には実用的ではありません。70Bモデルは、24GBカード2枚（RTX 3090×2枚で計48GB）またはクラウド推論で動かすのが現実的です。',
          },
        },
        {
          '@type': 'Question',
          name: '新しいGPU（RTX 5060 Ti）はこれらを時代遅れにしますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '確認した価格では、この予算には収まりません。新品RTX 5060 Ti 16GBの最低提示価格は$617.99（BuySellRAM、10月11日）、Amazon米国は$769.99（GeekyInc、11月7日）でした。VRAMは16GB、希望小売価格は$429です。信頼できる販売元が$500未満で出していれば、検討する価値があります。11月27〜28日の掲載はさらに高く、gpuprixで約$800（11月28日）、BasketPriceによるとAmazon米国で$849.99（11月27日）でした。',
          },
        },
        {
          '@type': 'Question',
          name: '中古のRTX 4060 Ti 16GBはいくらですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '情報源が食い違っています。InsiderLLMの中古GPU購入ガイドは基準を示さず$450〜550としています。BuySellRAMは10月11日時点の最低提示価格を中古$649.99、新品$790（新品は3件のみ）としていました。GeekyIncの中古提示価格の中央値は$745でした（16件、11月7日）。eBayの（出品中ではなく）売却済み出品を確認し、16GB版であることも確かめてください。',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '500ドル以下のLLM推論向けGPUランキング（2026年）',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB（中古）', description: '編集上の選定 — 12GB VRAM、CUDA、米国の成約価格は$500未満' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: '12GBの新品の選択肢 — 現在の価格情報は食い違い' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB（中古）', description: '16GB VRAM — 米国の成約中央値$525で予算超過' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '500ドル以下のLLM推論向けGPUおすすめランキング（2026年）',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/ja/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'ja',
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '2026年500美元以下LLM推理最佳GPU排行',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-zh.webp',
    seoTitle: '$500以下本地LLM显卡推荐（2026）：二手RTX 3060 12GB',
    metaDescription: '$500以下本地LLM显卡，本站首选二手RTX 3060 12GB：美国成交价$310–350。Intel Arc B580的价格各来源不一致，购买前请查看实时挂牌信息。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB（二手）', productCategory: 'gpu', priceRange: '二手$310–350（美国成交，2026年11月）', label: '查看RTX 3060 12GB价格 →' },
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: '各来源不一致，请查看挂牌', label: '查看Intel Arc B580 12GB价格 →' },
      { url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB', productName: 'RX 7800 XT 16GB（二手）', productCategory: 'gpu', priceRange: '二手$485–560（美国成交，2026年11月）', label: '查看RX 7800 XT 16GB价格 →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500以下本地LLM推理，本站首选二手RTX 3060 12GB：12GB显存、CUDA工具链，在eBay美国站209笔成交中为$310–350（中位数$330，2026年11月17–26日，不含运费，[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。这是编辑选择，并非基准测试结果。由于11月价格来源差异很大，本站未将Intel Arc B580 12GB排在第一。二手RX 7800 XT 16GB显存更大，但成交中位数$525超过$500。**价格以美元计，各地区价格可能不同。',
    quickAnswerTop: {
      question: '$500以下跑本地大模型最好的GPU是什么？',
      answer: '**本站首选二手RTX 3060 12GB。**它在eBay美国站209笔成交中为$310–350（中位数$330，2026年11月17–26日，不含运费，[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)），配12GB显存和CUDA。Intel Arc B580 12GB是全新卡选项，但我们无法确认其当前价格。二手RX 7800 XT 16GB成交价为$485–560（中位数$525）。各地区价格可能不同。',
      bullets: [
        '**本站首选：**二手RTX 3060 12GB——成交$310–350（美国，2026年11月17–26日），支持CUDA',
        '**全新卡选项：**Intel Arc B580 12GB——价格来源不一致，请核实卖家',
        '**更大显存：**二手RX 7800 XT 16GB——成交中位数$525，仅低端价位在$500以内',
        '⚠️ 二手RTX 3090：成交$1,500–1,725（美国，11月13–23日）——远超$500',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**本站首选二手RTX 3060 12GB：12GB显存、支持CUDA，美国成交价$310–350（中位数$330，2026年11月17–26日）**',
          'Intel Arc B580 12GB：11月数据从eBay挂牌均价$399到Amazon美国挂牌$851.16不等',
          '二手RX 7800 XT 16GB：成交$485–560（中位数$525），仅低端价位在$500以内',
          '⚠️ RTX 4060 Ti 16GB：价格来源不一致，本站未将其列入排名',
          '⚠️ 二手RTX 3090：成交$1,500–1,725——远超$500',
          '所有价格均为美国价格，依据不同（成交、挂牌、零售），文中逐一注明。PromptQuorum未对这些显卡做基准测试。',
        ],
      },
      rankedList: {
        title: '500美元以下LLM推理GPU排名',
        snippetBlocks: [
          { type: 'one-sentence', text: '$500以下本地LLM推理，本站首选二手RTX 3060 12GB，因为它有12GB显存、支持CUDA，且近期美国成交价全部低于$500。' },
          { type: 'plain-terms', text: 'GPU显存决定了你能在本地运行哪些AI模型。16GB显存支持14B模型。24GB（二手RTX 3090）支持30B模型。12GB以下只能运行7B或更小的模型。' },
        ],
        rankedItems: [
          {
            rank: 1,
            title: '二手RTX 3060 12GB — 本站首选',
            content: '二手NVIDIA GeForce RTX 3060 12GB是本站的编辑选择。它在eBay美国站209笔成交中为$310–350（中位数$330，2026年11月17–26日，不含运费，[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。14B模型的Q4能装进12GB，14B的Q8装不下。我们认为，凭借CUDA，它在三张卡中工具支持最省心，LoRA微调也是如此；请查看各项目文档。[Ollama GPU文档](https://docs.ollama.com/gpu)将其列为受支持型号。二手卡有成色和保修风险，请在退货期内测试。全新卡是另一个市场：[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)在2026年10月11日列出的美国挂牌价为$320–400。二手卡方面，[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)显示的挂牌中位价更高，为$400（95条，2026年11月7日）；挂牌价不等于成交价。',
            affiliateLinks: [
              { label: '在京东查看RTX 3060 12GB', url: 'https://search.jd.com/Search?keyword=RTX+3060+12GB' },
              { label: '在淘宝查看RTX 3060 12GB', url: 'https://s.taobao.com/search?q=RTX+3060+12GB' },
            ],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — 全新卡选项，请核实价格',
            content: '由于无法确认当前价格，本站将Intel Arc B580 12GB排在第二。11月27日，[VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)列出Amazon美国全新价$851.16（所追踪的挂牌在6月至10月一直为$369.99），eBay二手价$499。[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)显示11月基于eBay挂牌的最低均价为$399（当前$431）。[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)在11月7日只找到$851–1,263的转售商挂牌。请谨慎看待转售商价格，购买前核实卖家。[Ollama GPU文档](https://docs.ollama.com/gpu)未按名称列出Arc显卡，仅称Vulkan提供额外的GPU支持，请先确认你的工具能运行。',
            affiliateLinks: [
              { label: '在京东查看Intel Arc B580 12GB', url: 'https://search.jd.com/Search?keyword=Intel+Arc+B580' },
              { label: '在淘宝查看Intel Arc B580 12GB', url: 'https://s.taobao.com/search?q=Intel+Arc+B580' },
            ],
          },
          {
            rank: 3,
            title: '二手RX 7800 XT 16GB — 显存更大，常超$500',
            content: '二手AMD Radeon RX 7800 XT提供16GB显存。在eBay美国站218笔成交（2026年11月26日获取）中为$485–560（中位数$525，[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)），因此只有低端价位符合本预算。[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)显示的挂牌中位价更高，为$650（11条，11月7日）。[Ollama GPU文档](https://docs.ollama.com/gpu)列出该卡在Linux和Windows上通过ROCm驱动受支持。AMD使用ROCm而非NVIDIA的CUDA，请确认你打算使用的每个工具（包括微调工具）都支持你的显卡。',
            affiliateLinks: [{ label: '在京东查看RX 7800 XT 16GB', url: 'https://search.jd.com/Search?keyword=RX+7800+XT+16GB' }],
          },
        ],
      },
      benchmarkTable: {
        title: '显卡对比——价格依据与容量',
        content: 'PromptQuorum未对这些显卡做基准测试，因此表格只列出显存、价格依据和可运行的模型规模。RTX 3060和RX 7800 XT的数字来自eBay美国站成交数据（[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)）。Arc B580没有成交数据，挂牌价也相互矛盾，请勿按同一口径比较。依据显示超过$500而未列入排名：二手RTX 3090（成交$1,500–1,725）、全新RTX 5060 Ti 16GB（最低挂牌价$617.99，[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)，10月11日；Amazon美国$769.99，[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)，11月7日）以及RTX 4070（挂牌价$569.99起，[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)）。价格以美元计，各地区价格可能不同。',
        columns: ['GPU', '显存', '常见价格', '最大模型'],
        rows: [
          { GPU: 'RTX 3060 12GB（二手） ★', '显存': '12GB', '常见价格': '成交$310–350（二手）', '最大模型': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', '显存': '12GB', '常见价格': '$399–851，来源不一', '最大模型': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB（二手）', '显存': '16GB', '常见价格': '成交$485–560（二手）', '最大模型': '14B (Q4，上下文更充裕)' },
        ],
      },
      methodology: {
        title: '我们如何挑选这些GPU',
        content: '入选条件：至少12GB显存、有文档记载或有人报告可运行本地模型的方式，以及$500上下的价格依据。PromptQuorum未做基准测试。排序是基于显存、软件支持和价格依据可靠程度的编辑选择，成交数据的权重高于挂牌价和零售价。所有价格均为美国价格，访问日期2026-11-28：[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)（成交）、[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)（最低挂牌价，10月11日，仅NVIDIA）、[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)（eBay挂牌中位价与Amazon全新价，11月7日）、[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)和[VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)（Arc B580挂牌追踪）。RTX 4060 Ti 16GB未列入排名：[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)给出$450–550但未说明依据，[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)挂牌价二手$649.99、全新$790，[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)二手挂牌中位价$745。市场报道将2026年的涨价与存储器短缺联系起来（[InsiderLLM价格追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)）。',
      },
      vramGuide: {
        title: '按模型规模划分的显存需求',
        snippetBlocks: [
          { type: 'one-sentence', text: '显存需求：7B模型需要约4–5GB（Q4）或约7–8GB（Q8）；14B模型需要约8–9GB（Q4）或约16GB（Q8）；30B模型需要约18–20GB（Q4）；70B模型需要约40–42GB（Q4）。' },
          { type: 'plain-terms', text: '可以把显存理解为AI模型专用的内存。模型必须完全放入显存才能快速推理。如果溢出到CPU内存（称为"卸载"），速度通常会大幅下降，降幅往往很大，具体取决于溢出多少。Q4量化相比Q8体积减半，质量损失很小。' },
        ],
        items: [
          '7B模型Q4：约4.5GB显存——本榜单任意一款GPU都能轻松运行',
          '7B模型Q8：约7.5GB显存——本榜单所有GPU均可运行',
          '13B模型Q4：约8.5GB显存——本榜单所有GPU均可运行',
          '14B模型Q8：[Ollama标注Qwen3 14B为16GB](https://ollama.com/library/qwen3/tags)——加上上下文需要超过16GB，本页三张卡都无法将其完全装入显存',
          '30B模型Q4：约18GB显存——要轻松运行需要24GB显卡，如二手RTX 3090',
          '70B模型Q4：约40GB——需要双GPU或CPU卸载',
        ],
      },
      decisionMatrix: {
        title: '你应该买哪款GPU？',
        content: '根据你的主要用途参考以下决策指南：',
        items: [
          '**预算内要CUDA** → 二手RTX 3060 12GB，成交$310–350（美国，2026年11月17–26日）。',
          '**想买全新卡** → Intel Arc B580 12GB，前提是可靠卖家的价格在预算内且你的工具支持它。',
          '**需要16GB** → 二手RX 7800 XT；成交中位数$525，可能需要超出$500。',
          '**需要30B模型能力？** → 二手RTX 3090等24GB显卡，成交$1,500–1,725，远超$500。',
          '**Windows用户** → 我们认为带CUDA的二手RTX 3060 12GB更省心。',
          '**测试需要超过12 GB显存？** 与其放宽预算，不如[花几美元租用24 GB显卡](/zh/power-local-llm/best-cloud-gpu-providers)，看看更大的模型是否值得。',
        ],
      },
      softwareCompat: {
        title: '各GPU的软件兼容性',
        content: '支持情况变化很快，请查看各项目文档。[Ollama GPU文档](https://docs.ollama.com/gpu)列出了RTX 3060和RX 7800 XT，未按名称列出Arc显卡。',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA微调'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA微调': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ 请查文档', vLLM: '⚠️ 部分支持', 'Text Gen WebUI': '⚠️ 请查文档', 'CUDA微调': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ 请查文档', vLLM: '⚠️ 请查文档', 'Text Gen WebUI': '⚠️ 请查文档', 'CUDA微调': '❌' },
        ],
      },
      powerAndCooling: {
        title: '功耗与系统要求',
        content: 'GPU功耗决定了你需要的电源和机箱。运行LLM常会让GPU保持80–100%的利用率——与游戏不同，几乎没有空闲帧。具体电源功率和接口请以厂商对你所购型号的推荐为准。',
        items: ['RTX 3060 12GB：170W——通常550W以上电源即可；单8针接口；请以厂商推荐为准', 'Intel Arc B580 12GB：190W——[Intel规格](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html)标明电源至少600W、一个8针接口；各品牌型号可能不同', 'RX 7800 XT 16GB：功耗、电源和供电接口请以显卡厂商说明为准'],
      },
      faq: {
        id: 'faq',
        faqs: [
          { q: '8GB显存跑本地大模型够用吗？', a: '8GB显存只能运行7B模型的Q4量化版本。13B模型无法完全放入显存，14B模型需要卸载到CPU内存，速度通常会大幅下降，降幅往往很大，具体取决于溢出多少。2026年本地LLM实际使用中，12GB是最低要求，推荐16GB。' },
          {
            q: '二手RTX 3090还能以$500以下买到吗？',
            a: '不能。二手RTX 3090成交价为$1,500–1,725（中位数$1,650；eBay 美国站 225 笔成交，2026 年 11 月 13–23 日，不含运费，[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)），因此它不是$500以下的选项。这是挂牌数据，不是报价。24GB显存是它的吸引力所在：它是通往30B级模型（Q4约需18–20GB）的一条CUDA路线。它并非唯一的24GB显卡：[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)在11月7日显示，二手AMD RX 7900 XTX在eBay美国站的挂牌中位价为$1,499（29条），全新卡在Amazon美国为$2,099；该卡不支持CUDA。挂牌价不能与上述成交价直接比较。',
          },
          {
            q: 'AMD显卡能用于本地AI吗？',
            a: '可以，但有限制。[Ollama GPU文档](https://docs.ollama.com/gpu)列出RX 7800 XT在Linux和Windows上通过ROCm驱动受支持。AMD使用ROCm而非NVIDIA的CUDA，请确认你打算使用的每个工具（包括微调工具）都支持你的显卡。二手RX 7800 XT成交价为$485–560（中位数$525；eBay美国站，11月26日获取），很多超过$500。若要微调或少折腾，我们会选二手RTX 3060 12GB。',
          },
          {
            q: 'AI用的Intel Arc显卡怎么样？',
            a: '它是一个12GB选项，但请先核实价格。11月数据从eBay挂牌均价$399（[GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)）到Amazon美国挂牌$851.16（[VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)，11月27日）不等。另一个限制是软件：[Ollama GPU文档](https://docs.ollama.com/gpu)未按名称列出Arc，[vLLM文档](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/)称对Intel GPU仅为初步支持。做LoRA微调，我们会选二手RTX 3060 12GB。',
          },
          { q: '单块500美元以下的GPU能跑70B模型吗？', a: '无法流畅运行。即使是RTX 3090（24GB）也无法将70B Q4（约40GB）完全装入显存。用llama.cpp进行CPU卸载可以分割模型，但此时生成速度远低于完全放进显存的模型，交互使用并不实用。在GPU上运行70B模型需要两张24GB显卡（如2×RTX 3090共48GB）或云推理服务。' },
          {
            q: '新款GPU（RTX 5060 Ti）会让这些显卡过时吗？',
            a: '按我们核实的价格，不在本预算内。全新RTX 5060 Ti 16GB最低挂牌价为$617.99（[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)，10月11日），Amazon美国为$769.99（[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)，11月7日）。它有16GB显存，建议零售价$429。如果可靠卖家报价低于$500，值得考虑。11月27–28日的挂牌价更高：[gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb)约$800（11月28日），[BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti)显示美国亚马逊为$849.99（11月27日）。',
          },
          {
            q: '二手RTX 4060 Ti 16GB多少钱？',
            a: '各来源不一致。[InsiderLLM 二手 GPU 选购指南](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)给出$450–550但未说明依据。[BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)在10月11日列出的最低挂牌价为二手$649.99、全新$790（全新仅3条）。[GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)显示二手挂牌中位价$745（16条，11月7日）。请查看eBay已售出（而非在售）记录，并确认是16GB版本。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地LLM最佳GPU](/zh/local-llms/best-gpus-for-local-llms) -- 本地LLM最佳GPU',
          '[本地LLM最佳低价GPU](/zh/local-llms/best-budget-gpus-local-llm) -- 本地LLM最佳低价GPU',
          '[本地LLM需要多少VRAM？](/zh/local-llms/how-much-vram-local-llm) -- 本地LLM需要多少VRAM？',
          '[本地LLM VRAM计算器](/zh/local-llms/vram-calculator-local-llm) -- 本地LLM VRAM计算器',
          '[为本地LLM购买二手GPU](/zh/local-llms/used-gpus-for-local-llms) -- 为本地LLM购买二手GPU',
          '[花几美元租用24 GB显卡](/zh/power-local-llm/best-cloud-gpu-providers) -- GPU租用服务商对比，可在购买前试用更大的显卡。',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '8GB显存跑本地大模型够用吗？',
          acceptedAnswer: { '@type': 'Answer', text: '8GB显存只能运行7B模型的Q4量化版本。13B模型无法完全放入显存，14B模型需要卸载到CPU内存，速度通常会大幅下降，降幅往往很大，具体取决于溢出多少。2026年本地LLM实际使用中，12GB是最低要求，推荐16GB。' },
        },
        {
          '@type': 'Question',
          name: '二手RTX 3090还能以$500以下买到吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '不能。二手RTX 3090成交价为$1,500–1,725（中位数$1,650；eBay 美国站 225 笔成交，2026 年 11 月 13–23 日，不含运费，InsiderLLM 二手 GPU 选购指南），因此它不是$500以下的选项。这是挂牌数据，不是报价。24GB显存是它的吸引力所在：它是通往30B级模型（Q4约需18–20GB）的一条CUDA路线。它并非唯一的24GB显卡：GeekyInc在11月7日显示，二手AMD RX 7900 XTX在eBay美国站的挂牌中位价为$1,499（29条），全新卡在Amazon美国为$2,099；该卡不支持CUDA。挂牌价不能与上述成交价直接比较。',
          },
        },
        {
          '@type': 'Question',
          name: 'AMD显卡能用于本地AI吗？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '可以，但有限制。Ollama GPU文档列出RX 7800 XT在Linux和Windows上通过ROCm驱动受支持。AMD使用ROCm而非NVIDIA的CUDA，请确认你打算使用的每个工具（包括微调工具）都支持你的显卡。二手RX 7800 XT成交价为$485–560（中位数$525；eBay美国站，11月26日获取），很多超过$500。若要微调或少折腾，我们会选二手RTX 3060 12GB。',
          },
        },
        {
          '@type': 'Question',
          name: 'AI用的Intel Arc显卡怎么样？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '它是一个12GB选项，但请先核实价格。11月数据从eBay挂牌均价$399（GPU Poet）到Amazon美国挂牌$851.16（VideoCardPrices，11月27日）不等。另一个限制是软件：Ollama GPU文档未按名称列出Arc，vLLM文档称对Intel GPU仅为初步支持。做LoRA微调，我们会选二手RTX 3060 12GB。',
          },
        },
        {
          '@type': 'Question',
          name: '单块500美元以下的GPU能跑70B模型吗？',
          acceptedAnswer: { '@type': 'Answer', text: '无法流畅运行。即使是RTX 3090（24GB）也无法将70B Q4（约40GB）完全装入显存。用llama.cpp进行CPU卸载可以分割模型，但此时生成速度远低于完全放进显存的模型，交互使用并不实用。在GPU上运行70B模型需要两张24GB显卡（如2×RTX 3090共48GB）或云推理服务。' },
        },
        {
          '@type': 'Question',
          name: '新款GPU（RTX 5060 Ti）会让这些显卡过时吗？',
          acceptedAnswer: { '@type': 'Answer', text: '按我们核实的价格，不在本预算内。全新RTX 5060 Ti 16GB最低挂牌价为$617.99（BuySellRAM，10月11日），Amazon美国为$769.99（GeekyInc，11月7日）。它有16GB显存，建议零售价$429。如果可靠卖家报价低于$500，值得考虑。11月27–28日的挂牌价更高：gpuprix约$800（11月28日），BasketPrice显示美国亚马逊为$849.99（11月27日）。' },
        },
        {
          '@type': 'Question',
          name: '二手RTX 4060 Ti 16GB多少钱？',
          acceptedAnswer: { '@type': 'Answer', text: '各来源不一致。InsiderLLM 二手 GPU 选购指南给出$450–550但未说明依据。BuySellRAM在10月11日列出的最低挂牌价为二手$649.99、全新$790（全新仅3条）。GeekyInc显示二手挂牌中位价$745（16条，11月7日）。请查看eBay已售出（而非在售）记录，并确认是16GB版本。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年500美元以下LLM推理最佳GPU排行',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB（二手）', description: '编辑选择——12GB显存、CUDA，美国成交价低于$500' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: '12GB全新卡选项——当前价格来源不一致' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB（二手）', description: '16GB显存——美国成交中位数$525，超出预算' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '2026年500美元以下LLM推理最佳GPU排行',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/zh/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'zh',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: '하드웨어 & 성능',
    title: '500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ko.webp',
    seoTitle: '$500 이하 로컬 LLM GPU (2026): 중고 RTX 3060',
    metaDescription: '$500 이하 로컬 LLM용으로 저희는 중고 RTX 3060 12GB를 선택합니다. 미국 체결가 $310–350. Arc B580 가격은 출처마다 달라 매물 확인이 필요합니다.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB(중고)', productCategory: 'gpu', priceRange: '중고 $310–350 (미국 체결, 2026년 11월)', label: 'RTX 3060 12GB 가격 확인 →' },
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: '출처마다 달라 매물 확인', label: 'Intel Arc B580 12GB 가격 확인 →' },
      { url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB', productName: 'RX 7800 XT 16GB (중고)', productCategory: 'gpu', priceRange: '중고 $485–560 (미국 체결, 2026년 11월)', label: 'RX 7800 XT 16GB 가격 확인 →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500 이하 로컬 LLM 추론용으로 저희가 선택하는 것은 중고 RTX 3060 12GB입니다. 12GB VRAM과 CUDA 도구 체인을 갖췄고, eBay 미국 체결 209건(2026년 11월 17~26일, 배송비 제외)에서 $310–350(중앙값 $330)이었습니다([InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). 이는 편집상의 선택이며 벤치마크 결과가 아닙니다. Intel Arc B580 12GB는 11월 가격 출처가 크게 엇갈려 1위로 두지 않았습니다. 중고 RX 7800 XT 16GB는 VRAM이 더 많지만 체결 중앙값 $525가 $500을 넘습니다.** 가격은 미국 달러 기준이며 한국 내 가격은 다를 수 있습니다.',
    quickAnswerTop: {
      question: '$500 이하에서 LLM을 로컬로 실행하기에 가장 좋은 GPU는 무엇입니까?',
      answer: '**저희의 선택은 중고 RTX 3060 12GB입니다.** eBay 미국 체결 209건(2026년 11월 17~26일, 배송비 제외)에서 $310–350(중앙값 $330)이었고([InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)), 12GB VRAM과 CUDA를 제공합니다. Intel Arc B580 12GB는 신품 선택지이지만 현재 가격을 확인할 수 없습니다. 중고 RX 7800 XT 16GB의 체결가는 $485–560(중앙값 $525)이었습니다. 한국 내 가격은 다를 수 있습니다.',
      bullets: [
        '**저희의 선택:** 중고 RTX 3060 12GB — 체결 $310–350 (미국, 2026년 11월 17~26일), CUDA',
        '**신품 선택지:** Intel Arc B580 12GB — 가격 출처가 엇갈리므로 판매자 확인',
        '**더 많은 VRAM:** 중고 RX 7800 XT 16GB — 체결 중앙값 $525, 하단 가격대만 $500 이내',
        '⚠️ 중고 RTX 3090: 체결 $1,500–1,725 (미국, 11월 13~23일) — $500을 크게 초과',
      ],
      updatedDate: '2026-11-28',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**저희의 선택은 중고 RTX 3060 12GB입니다. 12GB VRAM과 CUDA를 갖췄고 미국 체결가는 $310–350(중앙값 $330, 2026년 11월 17~26일)입니다**',
          'Intel Arc B580 12GB: 11월 수치는 eBay 매물 평균 $399부터 Amazon 미국 매물 $851.16까지 벌어집니다',
          '중고 RX 7800 XT 16GB: 체결 $485–560(중앙값 $525), 하단 가격대만 $500 이내입니다',
          '⚠️ RTX 4060 Ti 16GB: 가격 출처가 엇갈려 순위에 넣지 않았습니다',
          '⚠️ 중고 RTX 3090: 체결 $1,500–1,725 — $500을 크게 초과합니다',
          '모든 가격은 미국 기준이며 근거(체결, 호가, 소매)가 달라 각각 명시합니다. PromptQuorum은 이 카드들의 벤치마크를 수행하지 않았습니다.',
        ],
      },
      rankedList: {
        title: '500달러 이하 LLM 추론 GPU 순위',
        snippetBlocks: [
          { type: 'one-sentence', text: '$500 이하 로컬 LLM 추론용으로 저희가 중고 RTX 3060 12GB를 선택하는 이유는 12GB VRAM과 CUDA 지원이 있고, 최근 미국 체결가가 모두 $500 미만이기 때문입니다.' },
          { type: 'plain-terms', text: 'GPU VRAM은 어떤 AI 모델을 실행할 수 있는지 결정합니다. 16GB GPU는 14B 모델을 고품질로 실행합니다. 24GB GPU(중고 RTX 3090 등)는 30B급 모델을 Q4로 실행합니다. 12GB 미만이면 7B 이하 모델로 제한됩니다.' },
        ],
        rankedItems: [
          {
            rank: 1,
            title: '중고 RTX 3060 12GB — 저희의 선택',
            content: '중고 NVIDIA GeForce RTX 3060 12GB는 저희의 편집상 선택입니다. eBay 미국 체결 209건(2026년 11월 17~26일, 배송비 제외)에서 $310–350(중앙값 $330)이었습니다([InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). 14B 모델 Q4는 12GB에 들어가지만 14B Q8은 들어가지 않습니다. 저희가 보기에 CUDA 덕분에 세 카드 중 도구 지원이 가장 간편하며 LoRA 파인튜닝도 마찬가지입니다. 각 프로젝트 문서를 확인하십시오. [Ollama GPU 문서](https://docs.ollama.com/gpu)는 이 카드를 지원 목록에 올리고 있습니다. 중고 카드는 상태와 보증 위험이 있으므로 반품 기간 안에 시험하십시오. 신품은 별도 시장입니다. [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)는 2026년 10월 11일 기준 미국 호가를 $320–400으로 게재했습니다. 중고의 경우 [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)의 호가 중앙값은 더 높은 $400이었습니다(95건, 2026년 11월 7일). 호가는 체결가가 아닙니다.',
            affiliateLinks: [
              { label: 'Amazon에서 RTX 3060 12GB 보기', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'Newegg에서 RTX 3060 12GB 보기', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — 신품 선택지, 가격 확인 필요',
            content: '현재 가격을 확인할 수 없어 Intel Arc B580 12GB를 2위로 둡니다. 11월 27일 [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)는 Amazon 미국 신품을 $851.16(추적 매물은 6월부터 10월까지 $369.99였음), eBay 중고를 $499로 표시했습니다. [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)는 eBay 매물 기준 11월 최저 평균을 $399(현재 수치 $431)로 보여 주었습니다. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)는 11월 7일에 $851–1,263의 리셀러 매물만 확인했습니다. 리셀러 가격은 신중히 보고 구매 전에 판매자를 확인하십시오. [Ollama GPU 문서](https://docs.ollama.com/gpu)는 Arc 카드를 이름으로 나열하지 않고 Vulkan을 추가 GPU 지원으로 설명하므로, 사용하려는 도구가 동작하는지 확인하십시오.',
            affiliateLinks: [
              { label: 'Amazon에서 Intel Arc B580 12GB 보기', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Newegg에서 Intel Arc B580 12GB 보기', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 3,
            title: '중고 RX 7800 XT 16GB — VRAM은 많지만 $500 초과가 많음',
            content: '중고 AMD Radeon RX 7800 XT는 16GB VRAM을 제공합니다. eBay 미국 체결 218건(2026년 11월 26일 수집)에서 $485–560(중앙값 $525)이었으므로([InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)) 하단 가격대만 이 예산에 들어옵니다. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)의 호가 중앙값은 더 높은 $650이었습니다(11건, 11월 7일). [Ollama GPU 문서](https://docs.ollama.com/gpu)는 이 카드를 Linux와 Windows에서 ROCm 드라이버로 지원한다고 나열합니다. AMD는 NVIDIA의 CUDA가 아닌 ROCm을 사용하므로, 파인튜닝용을 포함해 사용하려는 각 도구가 카드를 지원하는지 확인하십시오.',
            affiliateLinks: [
              { label: 'Amazon에서 RX 7800 XT 16GB 보기', url: 'https://www.amazon.com/s?k=RX+7800+XT+16GB' },
              { label: 'Newegg에서 RX 7800 XT 16GB 보기', url: 'https://www.newegg.com/p/pl?d=RX+7800+XT+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU 비교 — 가격 근거와 용량',
        content: 'PromptQuorum은 이 카드들의 벤치마크를 수행하지 않았으므로 표에는 VRAM, 가격 근거, 실행 가능한 모델 규모만 담았습니다. RTX 3060과 RX 7800 XT 수치는 eBay 미국 체결 데이터입니다([InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). Arc B580은 체결 데이터가 없고 매물 가격도 서로 어긋나므로 같은 기준으로 비교하지 마십시오. 근거상 $500을 넘어 순위에서 제외: 중고 RTX 3090(체결 $1,500–1,725), 신품 RTX 5060 Ti 16GB(최저 호가 $617.99, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 10월 11일; Amazon 미국 $769.99, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 11월 7일), RTX 4070(호가 $569.99부터, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)). 가격은 미국 달러 기준이며 한국 내 가격은 다를 수 있습니다.',
        columns: ['GPU', 'VRAM', '일반적인 가격', '최대 모델'],
        rows: [
          { GPU: 'RTX 3060 12GB (중고) ★', VRAM: '12 GB', '일반적인 가격': '체결 $310–350 (중고)', '최대 모델': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12 GB', '일반적인 가격': '$399–851, 출처 상이', '최대 모델': '14B (Q4)' },
          { GPU: 'RX 7800 XT 16GB (중고)', VRAM: '16 GB', '일반적인 가격': '체결 $485–560 (중고)', '최대 모델': '14B (Q4, 긴 컨텍스트)' },
        ],
      },
      methodology: {
        title: 'GPU 선정 방법',
        content: '선정 기준: VRAM 12GB 이상, 로컬 모델을 실행하는 방법이 문서화되었거나 보고된 것, $500 안팎의 가격 근거. PromptQuorum은 벤치마크를 수행하지 않았습니다. 순위는 VRAM, 소프트웨어 지원, 가격 근거의 신뢰도에 따른 편집상 선택이며, 체결 데이터를 호가나 소매가보다 중시합니다. 모든 가격은 미국 기준이며 접속일은 2026-11-28입니다: [InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)(체결), [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)(최저 호가, 10월 11일, NVIDIA만), [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)(eBay 호가 중앙값과 Amazon 신품가, 11월 7일), [GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580)와 [VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/)(Arc B580 매물 추적). RTX 4060 Ti 16GB는 순위에 넣지 않았습니다. [InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)는 근거를 밝히지 않고 $450–550, [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)는 호가로 중고 $649.99·신품 $790, [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)는 중고 호가 중앙값 $745입니다. 시장 보도는 2026년 가격 상승을 메모리 공급 부족과 연결합니다([InsiderLLM 추적](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)).',
      },
      vramGuide: {
        title: '모델 크기별 VRAM 요구량',
        snippetBlocks: [
          { type: 'one-sentence', text: 'VRAM 요구량: 7B 모델은 약 4~5GB(Q4) 또는 약 7~8GB(Q8); 14B 모델은 약 8~9GB(Q4) 또는 약 16GB(Q8); 30B 모델은 약 18~20GB(Q4); 70B 모델은 약 40~42GB(Q4)가 필요합니다.' },
          { type: 'plain-terms', text: 'VRAM을 AI 모델용 RAM으로 생각하십시오. 빠른 추론을 위해 모델 전체가 VRAM에 들어가야 합니다. 시스템 RAM으로 넘치면(이를 "오프로딩"이라 함) 속도가 보통 크게 떨어지며, 그 폭은 넘치는 양에 따라 달라집니다. Q4 양자화는 약간의 품질 손실로 Q8 대비 크기를 절반으로 줄입니다.' },
        ],
        items: [
          '7B 모델 Q4: 약 4.5GB VRAM — 이 목록의 모든 GPU에서 쉽게 처리 가능',
          '7B 모델 Q8: 약 7.5GB VRAM — 여기 있는 모든 GPU에 맞음',
          '13B 모델 Q4: 약 8.5GB VRAM — 이 목록의 모든 GPU에 맞음',
          '14B 모델 Q8: [Ollama는 Qwen3 14B를 16GB로 표기](https://ollama.com/library/qwen3/tags)합니다. 컨텍스트까지 고려하면 16GB 넘게 필요하므로 여기의 세 카드 중 어느 것도 VRAM에 모두 담지 못합니다',
          '30B 모델 Q4: 약 18GB VRAM — 24GB 필요 (중고 RTX 3090)',
          '70B 모델 Q4: 약 40GB — GPU 2개 또는 CPU 오프로딩 필요',
        ],
      },
      decisionMatrix: {
        title: '어떤 GPU를 구매해야 합니까?',
        content: '주요 용도에 따라 이 결정 가이드를 활용하십시오:',
        items: [
          '**예산 안의 CUDA** → 중고 RTX 3060 12GB, 체결 $310–350 (미국, 2026년 11월 17~26일).',
          '**신품을 원한다면** → Intel Arc B580 12GB. 믿을 만한 판매자가 예산 안에 팔고 사용할 도구가 지원할 때.',
          '**16GB가 필요하면** → 중고 RX 7800 XT. 체결 중앙값이 $525이므로 $500을 넘길 수 있습니다.',
          '**30B 모델이 필요하다면?** → 중고 RTX 3090 같은 24GB 카드. 체결 $1,500–1,725로 $500을 크게 넘습니다.',
          '**Windows 사용자** → 저희가 보기에 CUDA를 쓰는 중고 RTX 3060 12GB가 더 간편합니다.',
          '**테스트에 12 GB보다 많은 용량이 필요하십니까?** 예산을 늘리는 대신 [24 GB 카드를 몇 달러에 대여](/ko/power-local-llm/best-cloud-gpu-providers)하여 더 큰 모델이 그만한 가치가 있는지 확인할 수 있습니다.',
        ],
      },
      softwareCompat: {
        title: 'GPU별 소프트웨어 호환성',
        content: '지원 상황은 빠르게 바뀌므로 각 프로젝트 문서를 확인하십시오. [Ollama GPU 문서](https://docs.ollama.com/gpu)에는 RTX 3060과 RX 7800 XT가 있고 Arc 카드는 이름으로 나오지 않습니다.',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA 파인튜닝'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA 파인튜닝': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '⚠️ Vulkan', 'LM Studio': '⚠️ 문서 확인', vLLM: '⚠️ 부분', 'Text Gen WebUI': '⚠️ 문서 확인', 'CUDA 파인튜닝': '❌' },
          { GPU: 'RX 7800 XT 16GB', Ollama: '✅ (ROCm)', 'LM Studio': '⚠️ 문서 확인', vLLM: '⚠️ 문서 확인', 'Text Gen WebUI': '⚠️ 문서 확인', 'CUDA 파인튜닝': '❌' },
        ],
      },
      powerAndCooling: {
        title: '소비 전력 및 시스템 요구 사항',
        content: 'GPU 소비 전력은 필요한 파워서플라이와 케이스를 결정합니다. LLM 실행 시 GPU는 80~100% 부하 상태가 이어지는 경우가 많으며, 게임과 달리 유휴 프레임이 거의 없습니다. 필요한 파워서플라이 용량과 커넥터는 사용하시는 모델에 대한 제조사 권장 사항을 확인하십시오.',
        items: [
          'RTX 3060 12GB: 170W — 일반적으로 550W 이상 파워서플라이; 8핀 커넥터 1개; 제조사 권장 사항 확인',
          'Intel Arc B580 12GB: 190W. [Intel 사양](https://www.intel.com/content/www/us/en/products/sku/241598/intel-arc-b580-graphics/specifications.html)은 최소 600W 파워서플라이와 8핀 커넥터 1개를 명시합니다. 제조사별 모델은 다를 수 있습니다',
          'RX 7800 XT 16GB: 소비 전력, 파워서플라이, 커넥터는 카드 제조사 안내를 확인',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '8GB VRAM으로 로컬에서 LLM을 실행하기에 충분합니까?',
            a: '8GB VRAM은 Q4 양자화 기준 7B 모델로 제한됩니다. 모델이 겨우 맞는 수준입니다. 13B 모델은 전체 품질로 실행할 수 없으며, 14B 모델은 CPU RAM으로 부분 오프로드되어 속도가 보통 크게 저하되며, 그 폭은 넘치는 양에 따라 달라집니다. 2026년 의미 있는 로컬 LLM 사용을 위해 최소 12GB, 권장 16GB가 필요합니다.',
          },
          {
            q: '2026년에 중고 RTX 3090을 $500 이하로 구매할 수 있습니까?',
            a: '아니요. 중고 RTX 3090의 체결가는 $1,500~1,725였습니다(중앙값 $1,650, eBay 미국 체결 225건, 2026년 11월 13~23일, 배송비 제외, [InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)). 따라서 $500 이하 선택지가 아닙니다. 이는 매물 데이터이며 가격 견적이 아닙니다. 24GB VRAM이 이 카드의 매력으로, 30B급 모델(Q4에서 약 18–20GB 필요)로 가는 CUDA 경로입니다. 24GB 카드가 이것만 있는 것은 아닙니다. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)의 11월 7일 조사에서 중고 AMD RX 7900 XTX의 eBay 미국 호가 중앙값은 $1,499(29건), 신품은 Amazon 미국에서 $2,099였으며, 이 카드는 CUDA를 지원하지 않습니다. 호가는 위의 체결가와 직접 비교할 수 없습니다.',
          },
          {
            q: 'AMD GPU로 로컬 LLM을 실행할 수 있습니까?',
            a: '가능하지만 제약이 있습니다. [Ollama GPU 문서](https://docs.ollama.com/gpu)는 RX 7800 XT를 Linux와 Windows에서 ROCm 드라이버로 지원한다고 나열합니다. AMD는 NVIDIA의 CUDA가 아닌 ROCm을 사용하므로, 파인튜닝용을 포함해 사용하려는 각 도구가 카드를 지원하는지 확인하십시오. 중고 RX 7800 XT 체결가는 $485–560(중앙값 $525, eBay 미국, 11월 26일 수집)이어서 $500을 넘는 매물이 많습니다. 파인튜닝이나 간편한 설정이 필요하면 저희는 중고 RTX 3060 12GB를 고릅니다.',
          },
          {
            q: 'AI용 Intel Arc GPU는 어떻습니까?',
            a: '12GB 선택지이지만 가격부터 확인하십시오. 11월 수치는 eBay 매물 평균 $399([GPU Poet](https://gpupoet.com/gpu/learn/price/november-2026/intel-arc-b580))부터 Amazon 미국 매물 $851.16([VideoCardPrices](https://videocardprices.com/card/intel-arc-b580/), 11월 27일)까지였습니다. 또 다른 제약은 소프트웨어입니다. [Ollama GPU 문서](https://docs.ollama.com/gpu)는 Arc를 이름으로 나열하지 않으며, [vLLM 문서](https://docs.vllm.ai/en/latest/getting_started/installation/gpu/)는 Intel GPU 지원을 초기 단계로 설명합니다. LoRA 파인튜닝에는 저희는 중고 RTX 3060 12GB를 고릅니다.',
          },
          {
            q: '500달러 이하 GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
            a: '전체 속도로는 불가능합니다. RTX 3090(24GB)조차 70B Q4(약 40GB)를 VRAM에 완전히 담을 수 없습니다. llama.cpp의 CPU 오프로드로 모델을 GPU VRAM과 시스템 RAM에 나눌 수 있지만, 이 경우 생성 속도가 VRAM에 완전히 올린 모델보다 크게 낮아 대화형 사용에는 실용적이지 않습니다. GPU에서 70B 모델을 실행하려면 24GB 카드 2장(RTX 3090 ×2, 48GB 합산) 또는 클라우드 추론이 필요합니다.',
          },
          {
            q: '새로운 GPU(RTX 5060 Ti)가 이 GPU들을 구식으로 만들 것입니까?',
            a: '저희가 확인한 가격으로는 이 예산에 들어오지 않습니다. 신품 RTX 5060 Ti 16GB의 최저 호가는 $617.99([BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/), 10월 11일)였고 Amazon 미국은 $769.99([GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/), 11월 7일)였습니다. VRAM 16GB, 권장가 $429입니다. 믿을 만한 판매자가 $500 미만에 판다면 고려할 만합니다. 11월 27~28일 매물은 더 비쌌습니다. [gpuprix](https://gpuprix.com/us/gpus/geforce-rtx-5060-ti-16gb)에서 약 $800(11월 28일), [BasketPrice](https://www.basketprice.com/gpu/rtx-5060-ti) 기준 Amazon 미국 $849.99(11월 27일)였습니다.',
          },
          {
            q: '중고 RTX 4060 Ti 16GB의 가격은 얼마입니까?',
            a: '출처가 엇갈립니다. [InsiderLLM 중고 GPU 구매 가이드](https://insiderllm.com/guides/used-gpu-buying-guide-local-ai/)는 근거를 밝히지 않고 $450–550을 제시합니다. [BuySellRAM](https://www.buysellram.com/blog/nvidia-consumer-gpu-market-update/)는 10월 11일 최저 호가를 중고 $649.99, 신품 $790(신품 매물 3건)로 게재했습니다. [GeekyInc](https://www.geekyinc.com/best-graphics-cards-2026/)의 중고 호가 중앙값은 $745였습니다(16건, 11월 7일). eBay의 (판매 중이 아닌) 판매 완료 매물을 확인하고 16GB 모델인지 확인하십시오.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[로컬 LLM을 위한 최고 GPU](/ko/local-llms/best-gpus-for-local-llms) -- 로컬 LLM을 위한 최고 GPU',
          '[로컬 LLM을 위한 최고 보급형 GPU](/ko/local-llms/best-budget-gpus-local-llm) -- 로컬 LLM을 위한 최고 보급형 GPU',
          '[로컬 LLM에 필요한 VRAM 용량은?](/ko/local-llms/how-much-vram-local-llm) -- 필요한 VRAM 용량은?',
          '[로컬 LLM VRAM 계산기](/ko/local-llms/vram-calculator-local-llm) -- 로컬 LLM VRAM 계산기',
          '[로컬 LLM을 위한 중고 GPU 구매 가이드](/ko/local-llms/used-gpus-for-local-llms) -- 로컬 LLM을 위한 중고 GPU 구매 가이드',
          '[24 GB 카드를 몇 달러에 대여](/ko/power-local-llm/best-cloud-gpu-providers) -- 구매 전에 더 큰 카드를 시험해 볼 수 있는 GPU 대여 업체 비교.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: '8GB VRAM으로 로컬에서 LLM을 실행하기에 충분합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '8GB VRAM은 Q4 양자화 기준 7B 모델로 제한됩니다. 모델이 겨우 맞는 수준입니다. 13B 모델은 전체 품질로 실행할 수 없으며, 14B 모델은 CPU RAM으로 부분 오프로드되어 속도가 보통 크게 저하되며, 그 폭은 넘치는 양에 따라 달라집니다. 2026년 의미 있는 로컬 LLM 사용을 위해 최소 12GB, 권장 16GB가 필요합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '2026년에 중고 RTX 3090을 $500 이하로 구매할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요. 중고 RTX 3090의 체결가는 $1,500~1,725였습니다(중앙값 $1,650, eBay 미국 체결 225건, 2026년 11월 13~23일, 배송비 제외, InsiderLLM 중고 GPU 구매 가이드). 따라서 $500 이하 선택지가 아닙니다. 이는 매물 데이터이며 가격 견적이 아닙니다. 24GB VRAM이 이 카드의 매력으로, 30B급 모델(Q4에서 약 18–20GB 필요)로 가는 CUDA 경로입니다. 24GB 카드가 이것만 있는 것은 아닙니다. GeekyInc의 11월 7일 조사에서 중고 AMD RX 7900 XTX의 eBay 미국 호가 중앙값은 $1,499(29건), 신품은 Amazon 미국에서 $2,099였으며, 이 카드는 CUDA를 지원하지 않습니다. 호가는 위의 체결가와 직접 비교할 수 없습니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'AMD GPU로 로컬 LLM을 실행할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '가능하지만 제약이 있습니다. Ollama GPU 문서는 RX 7800 XT를 Linux와 Windows에서 ROCm 드라이버로 지원한다고 나열합니다. AMD는 NVIDIA의 CUDA가 아닌 ROCm을 사용하므로, 파인튜닝용을 포함해 사용하려는 각 도구가 카드를 지원하는지 확인하십시오. 중고 RX 7800 XT 체결가는 $485–560(중앙값 $525, eBay 미국, 11월 26일 수집)이어서 $500을 넘는 매물이 많습니다. 파인튜닝이나 간편한 설정이 필요하면 저희는 중고 RTX 3060 12GB를 고릅니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'AI용 Intel Arc GPU는 어떻습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '12GB 선택지이지만 가격부터 확인하십시오. 11월 수치는 eBay 매물 평균 $399(GPU Poet)부터 Amazon 미국 매물 $851.16(VideoCardPrices, 11월 27일)까지였습니다. 또 다른 제약은 소프트웨어입니다. Ollama GPU 문서는 Arc를 이름으로 나열하지 않으며, vLLM 문서는 Intel GPU 지원을 초기 단계로 설명합니다. LoRA 파인튜닝에는 저희는 중고 RTX 3060 12GB를 고릅니다.',
          },
        },
        {
          '@type': 'Question',
          name: '500달러 이하 GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '전체 속도로는 불가능합니다. RTX 3090(24GB)조차 70B Q4(약 40GB)를 VRAM에 완전히 담을 수 없습니다. llama.cpp의 CPU 오프로드로 모델을 GPU VRAM과 시스템 RAM에 나눌 수 있지만, 이 경우 생성 속도가 VRAM에 완전히 올린 모델보다 크게 낮아 대화형 사용에는 실용적이지 않습니다. GPU에서 70B 모델을 실행하려면 24GB 카드 2장(RTX 3090 ×2, 48GB 합산) 또는 클라우드 추론이 필요합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '새로운 GPU(RTX 5060 Ti)가 이 GPU들을 구식으로 만들 것입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '저희가 확인한 가격으로는 이 예산에 들어오지 않습니다. 신품 RTX 5060 Ti 16GB의 최저 호가는 $617.99(BuySellRAM, 10월 11일)였고 Amazon 미국은 $769.99(GeekyInc, 11월 7일)였습니다. VRAM 16GB, 권장가 $429입니다. 믿을 만한 판매자가 $500 미만에 판다면 고려할 만합니다. 11월 27~28일 매물은 더 비쌌습니다. gpuprix에서 약 $800(11월 28일), BasketPrice 기준 Amazon 미국 $849.99(11월 27일)였습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '중고 RTX 4060 Ti 16GB의 가격은 얼마입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '출처가 엇갈립니다. InsiderLLM 중고 GPU 구매 가이드는 근거를 밝히지 않고 $450–550을 제시합니다. BuySellRAM는 10월 11일 최저 호가를 중고 $649.99, 신품 $790(신품 매물 3건)로 게재했습니다. GeekyInc의 중고 호가 중앙값은 $745였습니다(16건, 11월 7일). eBay의 (판매 중이 아닌) 판매 완료 매물을 확인하고 16GB 모델인지 확인하십시오.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'ko',
      name: '500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB (중고)', description: '편집상 선택 — 12GB VRAM, CUDA, 미국 체결가 $500 미만' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: '12GB 신품 선택지 — 현재 가격 출처가 엇갈림' },
        { '@type': 'ListItem', position: 3, name: 'AMD Radeon RX 7800 XT 16GB (중고)', description: '16GB VRAM — 미국 체결 중앙값 $525로 예산 초과' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)',
      description: '$500 이하 로컬 LLM 추론용 GPU: 편집상 선택은 중고 RTX 3060 12GB이며, Intel Arc B580 12GB와 중고 RX 7800 XT 16GB도 각 가격의 근거와 함께 정리했습니다.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-28',
      url: 'https://www.promptquorum.com/ko/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
      about: [{ '@type': 'Thing', name: 'LLM 추론용 GPU' }, { '@type': 'Thing', name: '로컬 인공지능' }, { '@type': 'Thing', name: 'NVIDIA GeForce RTX 3060' }],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'LM Studio' },
        { '@type': 'SoftwareApplication', name: 'llama.cpp' },
      ],
    },
  },
}
