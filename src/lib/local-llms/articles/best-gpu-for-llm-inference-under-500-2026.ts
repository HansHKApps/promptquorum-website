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
    seoTitle: 'Best GPU Under $500 for LLM Inference (2026) + 4060 Ti Price',
    metaDescription: 'Best GPU under $500 for local LLM inference: Intel Arc B580 12GB first, used RTX 3060 12GB for CUDA. Why the RTX 4060 Ti 16GB no longer fits the budget.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: 'typically $250–290', label: 'Check Intel Arc B580 12GB price →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB (used)', productCategory: 'gpu', priceRange: 'typically $270–300 used', label: 'Check RTX 3060 12GB price →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: 'seen near $562 at the last refresh', label: 'Check RTX 4060 Ti 16GB price →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**The best GPU under $500 for local LLM inference is now the Intel Arc B580 12GB: 12 GB VRAM for 7B–13B models at Q4, and one of the few new 12 GB cards listed below $500 at major US retailers when this page was last refreshed (last full price refresh: 2026-11-22; check current listings). For the CUDA toolchain, a used RTX 3060 12GB is the runner-up. Typical street prices at the last refresh were $250–290 for the Arc B580 and $270–300 for a used RTX 3060 12GB (not tracked by PromptQuorum; check the retailer links for today\'s price). The previous winner, the RTX 4060 Ti 16GB, has left the window: list-price listings were out of stock and in-stock cards were seen near $562 at the last refresh. The new RTX 3060 12GB was seen at about $474–599. Market reports attribute the 2026 increases to DRAM and GDDR shortages tied to AI datacenter demand ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source updated 2026-10-15). PromptQuorum has not benchmarked these cards: speed on small models depends mainly on memory bandwidth and driver. For 30B model capability, one route is a used RTX 3090 (24 GB), at about $1,500–1,725 in sold listings ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), figure dated 2026-11-23).**',
    quickAnswerTop: {
      question: 'What is the best GPU for running LLMs locally under $500?',
      answer: '**The Intel Arc B580 12GB is the best GPU under $500 for local LLM inference.** Its 12 GB VRAM runs 7B–13B models at Q4, it works with Ollama through the SYCL/oneAPI backend on Windows and Linux, and it is one of the few new 12 GB cards listed below $500 at major US retailers when this page was last refreshed (typically around $250–290; last full price refresh: 2026-11-22; check current listings). A used RTX 3060 12GB (typically $270–300) is the runner-up if you need the CUDA toolchain. The 2026 memory shortage pushed most of the rest of this list out of the window. At the last refresh we saw the RTX 4060 Ti 16GB near $562 when in stock, the new RTX 3060 12GB at $474–599, the RTX 4070 12GB at $560–705 and the RX 7800 XT 16GB at about $832 (typical street prices, not tracked by PromptQuorum), while the used RTX 3090 sold at about $1,500–1,725 ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), figure dated 2026-11-23).',
      bullets: [
        '**Winner:** Intel Arc B580 12GB — 12 GB VRAM, typically $250–290 at the last refresh, one of the few new 12 GB cards listed below $500 at major US retailers when this page was last refreshed',
        '**Runner-up:** RTX 3060 12GB used (typically $270–300) — the cheapest route to the full CUDA toolchain',
        '⚠️ RTX 4060 Ti 16GB: list-price listings out of stock, in-stock cards seen near $562 at the last refresh — no longer dependably sub-$500',
        '⚠️ RTX 3060 12GB new: seen at $474–599 at the last refresh — buy this one used instead',
        '⚠️ RTX 3090 used: about $1,500–1,725 in sold listings (InsiderLLM, figure dated 2026-11-23) — no longer sub-$500',
        '⚠️ RTX 4070 12GB: seen at $560–705 at the last refresh — no longer sub-$500',
        '⚠️ RX 7800 XT 16GB: seen at about $832 at the last refresh — no longer sub-$500',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB wins for most users: 12 GB VRAM and one of the few new 12 GB cards listed below $500 at major US retailers when this page was last refreshed (typically $250–290; last full price refresh: 2026-11-22; check current listings)**',
          'RTX 3060 12GB used (typically $270–300) is the runner-up — the cheapest way to get the full CUDA toolchain',
          '⚠️ Price alert: RTX 4060 Ti 16GB, the previous winner, was out of stock at list price and seen near $562 when available — removed from the sub-$500 list',
          '⚠️ Price alert: new RTX 3060 12GB was seen at $474–599 — the used market is the sane route to this card',
          '⚠️ Price alert: used RTX 3090 sold listings run about $1,500–1,725 (InsiderLLM, figure dated 2026-11-23) — removed from sub-$500 list',
          '⚠️ Price alert: RTX 4070 12GB was seen at $560–705 — removed from sub-$500 list',
          '⚠️ Price alert: RX 7800 XT 16GB was seen at about $832 — removed from sub-$500 list',
          'Why prices moved: market reports attribute the increases to DRAM and GDDR shortages tied to AI datacenter demand (see the InsiderLLM tracker). Nothing about the hardware changed — only what it costs. Prices other than the InsiderLLM figures are typical street prices at the last refresh, not tracked by PromptQuorum.',
          'PromptQuorum has not benchmarked these cards; on small models, speed depends mainly on memory bandwidth and driver',
          'Need 30B+ model capability? A used RTX 3090 (24 GB) is one route, at about $1,500–1,725 in sold listings (InsiderLLM, figure dated 2026-11-23)',
          'All three GPUs on this list run Ollama and llama.cpp; LM Studio on the Arc B580 was still in beta at the last refresh (check current status)',
        ],
      },
      rankedList: {
        title: 'Best GPUs for LLM Inference Under $500 — Ranked',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The Intel Arc B580 12GB is the best GPU under $500 for local LLM inference because it is one of the few new 12 GB cards listed below $500 at major US retailers when this page was last refreshed (last full price refresh: 2026-11-22), after the 2026 memory shortage.',
          },
          {
            type: 'plain-terms',
            text: 'GPU VRAM determines which AI models you can run. A 16 GB GPU runs 14B models at high quality. A 24 GB GPU (like a used RTX 3090) runs 30B+ models. Under 12 GB limits you to 7B models or smaller.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — Best Overall',
            content: '**The Intel Arc B580 12GB is the best GPU under $500 for local LLM inference, largely because it is one of the few such cards listed in the window at major US retailers when this page was last refreshed (last full price refresh: 2026-11-22; check current listings).** It was typically around $250–290 at major US retailers (typical street price, not tracked by PromptQuorum; check the retailer links), while most new NVIDIA cards that used to occupy this list had been pushed above $500 by the 2026 memory shortage. It runs Ollama via the SYCL/oneAPI backend on both Linux and Windows. PromptQuorum has not benchmarked it; Arc results vary by model, driver and backend and may trail comparable NVIDIA cards. The 12 GB VRAM cap limits you to models up to about 14B at Q4 — it will not hold a 14B at Q8. Intel\'s driver support has improved substantially since launch, though it remains a step behind CUDA in tooling breadth: expect Ollama and llama.cpp to work well, and LoRA fine-tuning to be awkward.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB on Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB on Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB Used — Best CUDA Option',
            content: 'The NVIDIA GeForce RTX 3060 12GB is the cheapest route to the full CUDA toolchain, but buy it **used**. New cards were seen at $474–599 at the last refresh, which puts the new card at or past the $500 ceiling this page is about. Used cards were typically $270–300 (typical street prices, not tracked by PromptQuorum; check the retailer links). Its 12 GB GDDR6 runs 7B–13B models at Q4/Q8 comfortably; it cannot hold a 14B model at Q8, but a 14B at Q4 (~8.5 GB) fits. Speed on small models depends mainly on memory bandwidth and driver, and PromptQuorum has not benchmarked this card. The full CUDA toolchain means Ollama, LM Studio, vLLM, and LoRA fine-tuning all work out of the box on Windows and Linux (at the last refresh; check each project\'s docs) — the one thing the Arc B580 cannot match.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB on Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB on Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — Best Card, If You Can Find It at List Price',
            content: 'The RTX 4060 Ti 16GB is still the best *hardware* on this list and was this page\'s winner until the 2026 memory shortage. Its 16 GB GDDR6 runs Qwen3 14B and Mistral 12B at Q4 fully in-GPU — and at Q8 with no swapping — at a 165 W TDP; check the card maker\'s recommended PSU wattage and connectors for your exact model. The problem is buying one. List-price listings were out of stock at major retailers at the last refresh, and in-stock cards were seen near $562 (listings we saw at the last refresh; check current retailer prices). If you find one at or near list price it is a strong purchase; at the higher street price it is outside the budget this page is written for. Watch it rather than plan around it.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB on Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB on Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU Comparison — Typical Prices and Capacity',
        content: 'PromptQuorum has not benchmarked these cards, so this table lists VRAM, typical price and model capacity only. Speed on small models depends mainly on memory bandwidth, driver and backend; for developer-reported numbers on high-end cards, see the [llama.cpp performance scoreboard](https://github.com/ggml-org/llama.cpp/discussions/15013) (developer-reported; it lists high-end cards only). Prices are typical street prices at the last refresh, not tracked by PromptQuorum; check the retailer links for today\'s price. Excluded for being at or above the $500 ceiling: used RTX 3090 (about $1,500–1,725 in sold listings, InsiderLLM, figure dated 2026-11-23), RTX 4070 12GB ($560–705), RX 7800 XT 16GB (about $832), and new RTX 3060 12GB ($474–599).',
        columns: ['GPU', 'VRAM', 'Typical price', 'Max Model'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', 'VRAM': '12 GB', 'Typical price': '$250–290', 'Max Model': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB (used)', 'VRAM': '12 GB', 'Typical price': '$270–300', 'Max Model': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', 'VRAM': '16 GB', 'Typical price': 'seen near $562 when in stock', 'Max Model': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'How We Selected These GPUs',
        content: 'Selection criteria: available to purchase new or used under $500; supported by at least one major inference runtime (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (8 GB cards excluded — insufficient for meaningful local LLM use). PromptQuorum did not benchmark these cards. Price ranges are approximate and checked against public listings at the last refresh; they are not tracked by PromptQuorum, so check the retailer links for today\'s price. Prices were read from public retailer listings at the last refresh. That full refresh was on 2026-11-22; since then only the used RTX 3090 figure has been updated (dated 2026-11-23). Several cards have been removed from this list on price: used RTX 3090 (24 GB) sold listings run about $1,500–1,725 ([InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), figure dated 2026-11-23); the RTX 4070 12GB was seen at $560–705; the RX 7800 XT 16GB at about $832; and the new RTX 3060 12GB at $474–599. The RTX 4060 Ti 16GB is retained but flagged — list-price listings were out of stock and in-stock cards were seen near $562. Market reports attribute the increases to DRAM and GDDR shortages tied to AI datacenter demand, with the RTX 5090 at around $4,500–4,700 new against a $1,999 MSRP and the RTX 5080 at $1,200–1,600 against $999 (InsiderLLM tracker, source updated 2026-10-15). Speed on small models depends mainly on memory bandwidth, driver and backend; the developer-reported [llama.cpp scoreboard](https://github.com/ggml-org/llama.cpp/discussions/15013) lists high-end cards only.',
      },
      vramGuide: {
        title: 'VRAM Requirements by Model Size',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM requirements: 7B model needs ~4–5 GB (Q4) or ~7–8 GB (Q8); 14B model needs ~8–9 GB (Q4) or ~14–15 GB (Q8); 30B model needs ~18–20 GB (Q4); 70B model needs ~40–42 GB (Q4).',
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
          '14B model at Q8: ~14 GB VRAM — needs a 16 GB or larger card, such as the RTX 4060 Ti 16GB or a used RTX 3090; neither is under $500 now',
          '30B model at Q4: ~18 GB VRAM — needs a 24 GB card, such as a used RTX 3090',
          '70B model at Q4: ~40 GB — requires two GPUs or CPU offloading',
        ],
      },
      decisionMatrix: {
        title: 'Which GPU Should You Buy?',
        content: 'Use this decision guide based on your primary use case:',
        items: [
          '**Best all-around under $500** → Intel Arc B580 12GB (typically $250–290 at the last refresh). One of the few new 12 GB cards listed below $500 at major US retailers when this page was last refreshed (last full price refresh: 2026-11-22; check current listings). 7B–13B models at Q4, Ollama via SYCL on Windows and Linux.',
          '**Cheapest CUDA card that works** → RTX 3060 12GB used (typically $270–300). The full CUDA toolchain — Ollama, LM Studio, vLLM, LoRA fine-tuning — for roughly the same money as the Arc. Buy used: the new card was seen at $474–599.',
          '**Best hardware, if you can find it at list** → RTX 4060 Ti 16GB. At list price it is a strong purchase, running 14B at Q8 in-GPU. But list-price listings were out of stock and in-stock cards were seen near $562 at the last refresh, which is outside this page\'s budget.',
          '**Need 30B model capability?** → A used RTX 3090 (24 GB) is one route, but sold listings run about $1,500–1,725 (InsiderLLM, figure dated 2026-11-23), well above $500.',
          '**Windows user, no fuss** → RTX 3060 12GB used. NVIDIA CUDA has the broadest Windows toolchain support for LLMs, fine-tuning, and multimodal runtimes, and the used 3060 is the cheapest way into it.',
          '**Need more than 12 GB for a test?** Instead of stretching the budget, [rent a 24 GB card for a few dollars](/power-local-llm/best-cloud-gpu-providers) and see whether the larger models are worth it.',
        ],
      },
      softwareCompat: {
        title: 'Software Compatibility by GPU',
        content: 'All three GPUs run Ollama and llama.cpp. Differences emerge in advanced tools (support as of the last refresh; support changes quickly, so check each project\'s docs):',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA Fine-Tuning'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ partial', 'CUDA Fine-Tuning': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA Fine-Tuning': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA Fine-Tuning': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Power Draw and System Requirements',
        content: 'GPU power draw determines what PSU and case you need. Running LLMs often keeps GPUs at 80–100% utilization — unlike gaming, there are few idle frames. Check the card maker\'s recommended PSU wattage and connectors for your exact model.',
        items: [
          'Intel Arc B580 12GB: 190 W — typically a 650 W+ PSU; standard 8-pin; check the maker\'s recommendation',
          'RTX 3060 12GB: 170 W — typically a 550 W+ PSU; one 8-pin connector; check the maker\'s recommendation',
          'RTX 4060 Ti 16GB: 165 W — typically a 550 W+ PSU; one 8-pin connector; check the maker\'s recommendation',
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
            a: 'No. The [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (figure dated 2026-11-23) lists used RTX 3090 sold listings at about $1,500–1,725, so the card is no longer a sub-$500 option. These are listing data, not a price quote. The 24 GB of VRAM is what keeps it attractive: it is a 24 GB route to 30B-class models, which need roughly 18–20 GB at Q4.',
          },
          {
            q: 'Does AMD work for running LLMs locally?',
            a: 'Yes, with caveats. Ollama on Linux with ROCm works well on cards like the RX 7800 XT. Windows ROCm support has improved but still requires manual steps, and fine-tuning (LoRA) on AMD hardware was not supported by most tools at the last refresh; support changes quickly, so check each project\'s docs. Note on pricing: the RX 7800 XT 16GB was seen at about $832, so it no longer fits a sub-$500 budget — in that price range a used RTX 3060 12GB (typically $270–300, CUDA) or an Intel Arc B580 12GB (typically $250–290) are the picks. For Windows or fine-tuning, stick with NVIDIA.',
          },
          {
            q: 'What about Intel Arc GPUs for AI?',
            a: 'Intel Arc B580 12GB is the best Arc option in 2026 and, after the memory shortage repriced the NVIDIA field, the best card on this page overall. It runs Ollama on both Windows and Linux via the SYCL backend. PromptQuorum has not benchmarked it; Arc results vary by model, driver and backend and may trail comparable NVIDIA cards. The value case is now strong: 12 GB VRAM at typically $250–290 (check current listings) while the new RTX 3060 12GB was seen at $474–599. The main limitation is still software — at the last refresh vLLM, fine-tuning tools, and multimodal runtimes did not support Arc well, so if you need LoRA fine-tuning, buy a used RTX 3060 12GB instead. Support changes quickly; check each project\'s docs.',
          },
          {
            q: 'Can I run a 70B model on a single GPU under $500?',
            a: 'Not at full speed. Even the RTX 3090 (24 GB) cannot hold 70B Q4 (~40 GB) entirely in VRAM. You can use CPU offloading with llama.cpp to split the model between GPU VRAM and system RAM, but generation then runs far below the speed of a model that fits in VRAM, which makes interactive use impractical. To run 70B models on GPUs, you need two 24 GB cards (2× RTX 3090 totaling 48 GB) or cloud inference.',
          },
          {
            q: 'Will newer GPUs (RTX 5060 Ti) make these obsolete?',
            a: 'The RTX 5060 Ti 16GB has shipped, and it did not undercut the RTX 4060 Ti — it went the other way. Retail listings from $679 were reported on Amazon US ([Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/), 2026-01-27), well above list — the same direction as the memory-shortage repricing of this whole list. It is a genuinely better GPU than anything here, with 16 GB of VRAM and faster inference, but it is not a sub-$500 card and waiting for it to become one is not a plan worth making. Buy on what is available now: the Intel Arc B580 12GB, or a used RTX 3060 12GB if you need CUDA (check current listings).',
          },
          {
            q: 'How much does a used RTX 4060 Ti 16GB cost?',
            a: 'With new cards seen near $562 when in stock at the last refresh, used listings we saw at the last refresh were roughly in the $420–$480 range on eBay (check sold listings for today\'s price), depending on condition and remaining warranty. Resale prices appear to have followed the new-card rise. This is one of the few cards where used is not a large saving, because supply of new cards at list price dried up. Check sold (not active) eBay listings for the real market price, and confirm the listing is the 16 GB variant — an 8 GB RTX 4060 Ti also exists and cannot run 14B models at Q4.',
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
            text: '8 GB VRAM limits you to 7B models at Q4 quantization. For meaningful local LLM use in 2026, 12 GB is the practical minimum, 16 GB is recommended.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I still buy a used RTX 3090 for under $500 in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No — the InsiderLLM tracker (figure dated 2026-11-23) lists used RTX 3090 sold listings at about $1,500–1,725. For 30B model capability, a used RTX 3090 (24 GB) is a 24 GB route.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I run a 70B model on a single GPU under $500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not at full speed. Even the RTX 3090 (24 GB) cannot hold 70B Q4 entirely in VRAM. CPU offloading runs far below the speed of a model that fits in VRAM. Two 24 GB GPUs or cloud inference are the practical routes for 70B models.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a used RTX 4060 Ti 16GB cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Resale prices of used RTX 4060 Ti 16GB cards appear to have followed the new-card rise; check sold (not active) eBay listings for today\'s price, as it depends on condition. Confirm the listing is the 16 GB variant, since an 8 GB RTX 4060 Ti also exists.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'Best overall — 12 GB VRAM, one of the few new 12 GB cards listed below $500 at major US retailers when this page was last refreshed' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (used)', description: 'Best CUDA option — 12 GB VRAM, full CUDA toolchain, best bought used' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'Best hardware, but list-price listings were out of stock at the last refresh and in-stock cards were seen above $500' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Best GPU for LLM Inference Under $500 (2026)',
      description: 'Ranked comparison of GPUs under $500 for local AI inference: Intel Arc B580 12GB, used RTX 3060 12GB, RTX 4060 Ti 16GB. The 2026 memory shortage pushed the RTX 3090, RTX 4070, RX 7800 XT and new RTX 3060 above $500.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      url: 'https://www.promptquorum.com/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'en',
      'proficiencyLevel': 'Intermediate',
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
    seoTitle: 'Mejor GPU bajo $500 para LLM (2026) + precio RTX 4060 Ti',
    metaDescription: 'La mejor GPU por menos de $500 para LLM local: Intel Arc B580 12GB y, para CUDA, RTX 3060 12GB usada. Por qué la RTX 4060 Ti 16GB sale del presupuesto.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: 'normalmente $250–290', label: 'Ver precio de la Intel Arc B580 12GB →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB (usada)', productCategory: 'gpu', priceRange: 'normalmente $270–300 usada', label: 'Ver precio de la RTX 3060 12GB →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: 'vista cerca de $562 en la última revisión', label: 'Ver precio de la RTX 4060 Ti 16GB →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**La mejor GPU por menos de $500 para inferencia LLM local es ahora la Intel Arc B580 12GB: 12 GB de VRAM para modelos 7B–13B en Q4 y una de las pocas tarjetas nuevas de 12 GB listadas por debajo de $500 en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez (última revisión completa de precios: 2026-11-22; revisa los anuncios actuales). Para la cadena de herramientas CUDA, una RTX 3060 12GB de segunda mano es la segunda opción. Los precios de calle habituales en la última revisión fueron $250–290 para la Arc B580 y $270–300 para una RTX 3060 12GB usada (no seguidos por PromptQuorum; consulta los enlaces de los minoristas para el precio de hoy). La ganadora anterior, la RTX 4060 Ti 16GB, ha salido de la ventana: los anuncios a precio de lista estaban sin stock y las unidades con stock se vieron cerca de $562 en la última revisión. La RTX 3060 12GB nueva se vio en torno a $474–599. Los informes del mercado atribuyen las subidas de 2026 a la escasez de DRAM y GDDR vinculada a la demanda de los centros de datos de IA ([tracker de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fuente actualizada el 2026-10-15). PromptQuorum no ha medido el rendimiento de estas tarjetas: la velocidad en modelos pequeños depende sobre todo del ancho de banda de memoria y del controlador. Para capacidad de modelos 30B, una vía es una RTX 3090 usada (24 GB), con unos $1,500–1,725 en anuncios vendidos ([tracker de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), dato con fecha 2026-11-23). Precios en dólares (USD); en tu país pueden variar según impuestos locales y tipo de cambio.**',
    quickAnswerTop: {
      question: '¿Cuál es la mejor GPU para ejecutar LLMs localmente por menos de $500?',
      answer: '**La Intel Arc B580 12GB es la mejor GPU por menos de $500 para inferencia LLM local.** Sus 12 GB de VRAM ejecutan modelos 7B–13B en Q4, funciona con Ollama mediante el backend SYCL/oneAPI en Windows y Linux, y es una de las pocas tarjetas nuevas de 12 GB listadas por debajo de $500 en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez (normalmente en torno a $250–290; última revisión completa de precios: 2026-11-22; consulta los anuncios actuales). Una RTX 3060 12GB de segunda mano (normalmente $270–300) es la segunda opción si necesitas la cadena CUDA. La escasez de memoria de 2026 sacó de la ventana a casi todo el resto de esta lista. En la última revisión vimos la RTX 4060 Ti 16GB cerca de $562 cuando había stock, la RTX 3060 12GB nueva a $474–599, la RTX 4070 12GB a $560–705 y la RX 7800 XT 16GB a unos $832 (precios de calle habituales, no seguidos por PromptQuorum), mientras que la RTX 3090 usada se vendía por unos $1,500–1,725 ([tracker de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), dato con fecha 2026-11-23). Precios en dólares (USD); en tu país pueden variar según impuestos locales y tipo de cambio.',
      bullets: [
        '**Ganadora:** Intel Arc B580 12GB — 12 GB de VRAM, normalmente $250–290 en la última revisión, una de las pocas tarjetas nuevas de 12 GB listadas por debajo de $500 en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez',
        '**Segunda opción:** RTX 3060 12GB de segunda mano (normalmente $270–300) — la vía más barata a la cadena de herramientas CUDA completa',
        '⚠️ RTX 4060 Ti 16GB: anuncios a precio de lista sin stock, unidades con stock vistas cerca de $562 en la última revisión — ya no es fiablemente sub-$500',
        '⚠️ RTX 3060 12GB nueva: vista a $474–599 en la última revisión — cómprala de segunda mano',
        '⚠️ RTX 3090 de segunda mano: unos $1,500–1,725 en anuncios vendidos (InsiderLLM, dato con fecha 2026-11-23) — ya no es sub-$500',
        '⚠️ RTX 4070 12GB: vista a $560–705 en la última revisión — ya no es sub-$500',
        '⚠️ RX 7800 XT 16GB: vista a unos $832 en la última revisión — ya no es sub-$500',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**La Intel Arc B580 12GB gana para la mayoría: 12 GB de VRAM y una de las pocas tarjetas nuevas de 12 GB listadas por debajo de $500 en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez (normalmente $250–290; última revisión completa de precios: 2026-11-22; consulta los anuncios actuales)**',
          'La RTX 3060 12GB de segunda mano (normalmente $270–300) es la segunda opción — la vía más barata a la cadena de herramientas CUDA completa',
          '⚠️ Alerta de precio: la RTX 4060 Ti 16GB, la ganadora anterior, estaba sin stock a precio de lista y se vio cerca de $562 cuando había unidades — eliminada de la lista sub-$500',
          '⚠️ Alerta de precio: la RTX 3060 12GB nueva se vio a $474–599 — el mercado de segunda mano es la vía sensata para esta tarjeta',
          '⚠️ Alerta de precio: los anuncios vendidos de la RTX 3090 usada rondan los $1,500–1,725 (InsiderLLM, dato con fecha 2026-11-23) — eliminada de la lista sub-$500',
          '⚠️ Alerta de precio: la RTX 4070 12GB se vio a $560–705 — eliminada de la lista sub-$500',
          '⚠️ Alerta de precio: la RX 7800 XT 16GB se vio a unos $832 — eliminada de la lista sub-$500',
          'Por qué se movieron los precios: los informes del mercado atribuyen las subidas a la escasez de DRAM y GDDR vinculada a la demanda de los centros de datos de IA (consulta el tracker de InsiderLLM). El hardware no ha cambiado; solo lo que cuesta. Los precios que no proceden de InsiderLLM son precios de calle habituales en la última revisión, no seguidos por PromptQuorum.',
          'PromptQuorum no ha medido el rendimiento de estas tarjetas; en modelos pequeños, la velocidad depende sobre todo del ancho de banda de memoria y del controlador',
          '¿Necesitas capacidad para modelos 30B o más? Una vía es una RTX 3090 usada (24 GB), con unos $1,500–1,725 en anuncios vendidos (InsiderLLM, dato con fecha 2026-11-23)',
          'Las tres GPU de esta lista funcionan con Ollama y llama.cpp; LM Studio en la Arc B580 seguía en beta en la última revisión (comprueba el estado actual)',
        ],
      },
      rankedList: {
        title: 'Mejores GPU para inferencia LLM por menos de $500 — Clasificadas',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La Intel Arc B580 12GB es la mejor GPU por menos de $500 para inferencia LLM local porque es una de las pocas tarjetas nuevas de 12 GB listadas por debajo de $500 en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez (última revisión completa de precios: 2026-11-22), tras la escasez de memoria de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'El VRAM de la GPU determina qué modelos de IA puedes ejecutar. Una GPU de 16 GB ejecuta modelos 14B en alta calidad. Una GPU de 24 GB (como una RTX 3090 de segunda mano) ejecuta modelos de 30B o más. Con menos de 12 GB estás limitado a modelos 7B o más pequeños.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — Mejor opción global',
            content: '**La Intel Arc B580 12GB es la mejor GPU por menos de $500 para inferencia LLM local, en buena medida porque es una de las pocas tarjetas de este tipo listadas dentro de esa ventana en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez (última revisión completa de precios: 2026-11-22; consulta los anuncios actuales).** Normalmente rondaba los $250–290 en grandes minoristas de EE. UU. (precio de calle habitual, no seguido por PromptQuorum; consulta los enlaces de los minoristas), mientras que la mayoría de las tarjetas NVIDIA nuevas que solían ocupar esta lista habían superado los $500 por la escasez de memoria de 2026. Ejecuta Ollama mediante el backend SYCL/oneAPI en Linux y Windows. PromptQuorum no la ha medido; los resultados de Arc varían según el modelo, el controlador y el backend, y pueden quedar por detrás de tarjetas NVIDIA comparables. El límite de 12 GB de VRAM te restringe a modelos de hasta unos 14B en Q4 — no alojará un 14B en Q8. El soporte de controladores de Intel ha mejorado mucho desde el lanzamiento, aunque sigue por detrás de CUDA en amplitud de herramientas: espera que Ollama y llama.cpp funcionen bien y que el ajuste fino LoRA sea incómodo.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB en Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB en Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB usada — Mejor opción CUDA',
            content: 'La NVIDIA GeForce RTX 3060 12GB es la vía más barata a la cadena de herramientas CUDA completa, pero cómprala **de segunda mano**. Las unidades nuevas se vieron a $474–599 en la última revisión, lo que sitúa la tarjeta nueva en el techo de $500 del que trata esta página, o por encima. Las usadas costaban normalmente $270–300 (precios de calle habituales, no seguidos por PromptQuorum; consulta los enlaces de los minoristas). Sus 12 GB GDDR6 ejecutan modelos 7B–13B en Q4/Q8 con comodidad; no puede alojar un 14B en Q8, pero un 14B en Q4 (~8.5 GB) cabe. La velocidad en modelos pequeños depende sobre todo del ancho de banda de memoria y del controlador, y PromptQuorum no ha medido esta tarjeta. La cadena CUDA completa significa que Ollama, LM Studio, vLLM y el ajuste fino LoRA funcionan de fábrica en Windows y Linux (en la última revisión; consulta la documentación de cada proyecto) — lo único que la Arc B580 no puede igualar.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB en Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB en Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — La mejor tarjeta, si la encuentras a precio de lista',
            content: 'La RTX 4060 Ti 16GB sigue siendo el mejor *hardware* de esta lista y fue la ganadora de esta página hasta la escasez de memoria de 2026. Sus 16 GB GDDR6 ejecutan Qwen3 14B y Mistral 12B en Q4 completamente en GPU — y en Q8 sin intercambio — con un TDP de 165 W; comprueba la potencia de fuente y los conectores que recomienda el fabricante para tu modelo exacto. El problema es comprarla. Los anuncios a precio de lista estaban sin stock en los grandes minoristas en la última revisión, y las unidades con stock se vieron cerca de $562 (anuncios que vimos en la última revisión; consulta los precios actuales de los minoristas). Si encuentras una a precio de lista o cerca, es una compra sólida; al precio de calle más alto queda fuera del presupuesto para el que está escrita. Vigílala, pero no planifiques contando con ella.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB en Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB en Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparación de GPU — Precios habituales y capacidad',
        content: 'PromptQuorum no ha medido el rendimiento de estas tarjetas, así que esta tabla recoge solo VRAM, precio habitual y capacidad de modelos. La velocidad en modelos pequeños depende sobre todo del ancho de banda de memoria, del controlador y del backend; para cifras reportadas por desarrolladores sobre tarjetas de gama alta, consulta el [marcador de rendimiento de llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013) (reportado por desarrolladores; solo incluye tarjetas de gama alta). Los precios son precios de calle habituales en la última revisión, no seguidos por PromptQuorum; consulta los enlaces de los minoristas para el precio de hoy. Precios en dólares (USD); en tu país pueden variar según impuestos locales y tipo de cambio. Excluidas por estar en o por encima del techo de $500: RTX 3090 usada (unos $1,500–1,725 en anuncios vendidos, InsiderLLM, dato con fecha 2026-11-23), RTX 4070 12GB ($560–705), RX 7800 XT 16GB (unos $832) y RTX 3060 12GB nueva ($474–599).',
        columns: ['GPU', 'VRAM', 'Precio habitual', 'Modelo máximo'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', 'VRAM': '12 GB', 'Precio habitual': '$250–290', 'Modelo máximo': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB (usada)', 'VRAM': '12 GB', 'Precio habitual': '$270–300', 'Modelo máximo': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', 'VRAM': '16 GB', 'Precio habitual': 'vista cerca de $562 con stock', 'Modelo máximo': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'Cómo seleccionamos estas GPU',
        content: 'Criterios de selección: disponibles para compra nueva o usada por menos de $500; compatibles con al menos un runtime de inferencia principal (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (tarjetas de 8 GB excluidas). PromptQuorum no midió el rendimiento de estas tarjetas. Los rangos de precio son aproximados y se contrastaron con anuncios públicos en la última revisión; PromptQuorum no los sigue, así que consulta los enlaces de los minoristas para el precio de hoy. Los precios se leyeron de anuncios públicos de minoristas en la última revisión. Esa revisión completa fue el 2026-11-22; desde entonces solo se ha actualizado la cifra de la RTX 3090 usada (con fecha 2026-11-23). Varias tarjetas han salido de la lista por precio: la RTX 3090 usada (24 GB) ronda los $1,500–1,725 en anuncios vendidos ([tracker de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), dato con fecha 2026-11-23); la RTX 4070 12GB se vio a $560–705; la RX 7800 XT 16GB a unos $832; y la RTX 3060 12GB nueva a $474–599. La RTX 4060 Ti 16GB se mantiene, pero con advertencia: los anuncios a precio de lista estaban sin stock y las unidades con stock se vieron cerca de $562. Los informes del mercado atribuyen las subidas a la escasez de DRAM y GDDR vinculada a la demanda de los centros de datos de IA, con la RTX 5090 en torno a $4,500–4,700 nueva frente a un PVP de $1,999 y la RTX 5080 a $1,200–1,600 frente a $999 (tracker de InsiderLLM, fuente actualizada el 2026-10-15). La velocidad en modelos pequeños depende sobre todo del ancho de banda de memoria, del controlador y del backend; el [marcador de llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013), reportado por desarrolladores, solo incluye tarjetas de gama alta.',
      },
      vramGuide: {
        title: 'Requisitos de VRAM por tamaño de modelo',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Requisitos de VRAM: el modelo 7B necesita ~4–5 GB (Q4) o ~7–8 GB (Q8); el modelo 14B necesita ~8–9 GB (Q4) o ~14–15 GB (Q8); el modelo 30B necesita ~18–20 GB (Q4); el modelo 70B necesita ~40–42 GB (Q4).',
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
          'Modelo 14B en Q8: ~14 GB VRAM — requiere 16 GB o más, p. ej. RTX 4060 Ti 16GB o RTX 3090 (usada)',
          'Modelo 30B en Q4: ~18 GB VRAM — requiere 24 GB (RTX 3090 usada)',
          'Modelo 70B en Q4: ~40 GB — requiere dos GPU o descarga a CPU',
        ],
      },
      decisionMatrix: {
        title: '¿Qué GPU deberías comprar?',
        content: 'Usa esta guía de decisión según tu caso de uso principal:',
        items: [
          '**Mejor opción general por menos de $500** → Intel Arc B580 12GB (normalmente $250–290 en la última revisión). Una de las pocas tarjetas nuevas de 12 GB listadas por debajo de $500 en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez (última revisión completa de precios: 2026-11-22; consulta los anuncios actuales). Modelos 7B–13B en Q4, Ollama vía SYCL en Windows y Linux.',
          '**Tarjeta CUDA más barata que funciona** → RTX 3060 12GB de segunda mano (normalmente $270–300). La cadena CUDA completa — Ollama, LM Studio, vLLM, ajuste fino LoRA — por aproximadamente el mismo dinero que la Arc. Cómprala usada: la nueva se vio a $474–599.',
          '**El mejor hardware, si lo encuentras a precio de lista** → RTX 4060 Ti 16GB. A precio de lista es una compra sólida, ejecutando 14B en Q8 en GPU. Pero los anuncios a precio de lista estaban sin stock y las unidades con stock se vieron cerca de $562 en la última revisión, fuera del presupuesto de esta página.',
          '**¿Necesitas capacidad para modelos 30B?** → Una vía es una RTX 3090 usada (24 GB), pero los anuncios vendidos rondan los $1,500–1,725 (InsiderLLM, dato con fecha 2026-11-23), muy por encima de $500.',
          '**Usuario de Windows, sin complicaciones** → RTX 3060 12GB de segunda mano. NVIDIA CUDA tiene el soporte más amplio en Windows para LLMs, fine-tuning y runtimes multimodales, y la 3060 usada es la forma más barata de entrar.',
          '**¿Necesitas más de 12 GB para una prueba?** En lugar de estirar el presupuesto, puedes [alquilar una tarjeta de 24 GB por unos pocos dólares](/es/power-local-llm/best-cloud-gpu-providers) y comprobar si los modelos más grandes valen la pena.',
        ],
      },
      softwareCompat: {
        title: 'Compatibilidad de software por GPU',
        content: 'Las tres GPU ejecutan Ollama y llama.cpp. Las diferencias aparecen en herramientas avanzadas (soporte en la última revisión; cambia rápido, así que consulta la documentación de cada proyecto):',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ parcial', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Consumo energético y requisitos del sistema',
        content: 'El consumo de la GPU determina qué fuente de alimentación y chasis necesitas. Ejecutar LLMs suele mantener las GPU al 80–100% de utilización — a diferencia del gaming, hay pocos fotogramas inactivos. Comprueba la potencia de fuente y los conectores que recomienda el fabricante para tu modelo exacto.',
        items: [
          'Intel Arc B580 12GB: 190 W — normalmente fuente de 650 W o más; 8 pines estándar; comprueba la recomendación del fabricante',
          'RTX 3060 12GB: 170 W — normalmente fuente de 550 W o más; un conector de 8 pines; comprueba la recomendación del fabricante',
          'RTX 4060 Ti 16GB: 165 W — normalmente fuente de 550 W o más; un conector de 8 pines; comprueba la recomendación del fabricante',
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
            a: 'No. El [tracker de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (dato con fecha 2026-11-23) recoge anuncios vendidos de la RTX 3090 usada a unos $1,500–1,725 USD (en dólares, sin convertir; los precios en tu país pueden variar según impuestos locales), así que ya no es una opción por debajo de $500. Son datos de anuncios, no una cotización. Sus 24 GB de VRAM la mantienen atractiva: es una vía de 24 GB hacia modelos de clase 30B, que necesitan unos 18–20 GB en Q4.',
          },
          {
            q: '¿Funciona AMD para ejecutar LLMs localmente?',
            a: 'Sí, con matices. Ollama en Linux con ROCm funciona bien en tarjetas como la RX 7800 XT. El soporte ROCm en Windows ha mejorado pero aún requiere pasos manuales, y el fine-tuning (LoRA) en hardware AMD no estaba soportado por la mayoría de herramientas en la última revisión; el soporte cambia rápido, así que consulta la documentación de cada proyecto. Nota sobre el precio: la RX 7800 XT 16GB se vio a unos $832, así que ya no encaja en un presupuesto sub-$500 — para ese rango de precio, una RTX 3060 12GB usada (normalmente $270–300, CUDA) o una Intel Arc B580 12GB (normalmente $250–290) son las opciones. Para Windows o fine-tuning, quédate con NVIDIA.',
          },
          {
            q: '¿Qué hay de las GPU Intel Arc para IA?',
            a: 'La Intel Arc B580 12GB es la mejor opción Arc en 2026 y, después de que la escasez de memoria reajustara el campo NVIDIA, la mejor tarjeta de esta página en conjunto. Ejecuta Ollama en Windows y Linux a través del backend SYCL. PromptQuorum no la ha medido; los resultados de Arc varían según el modelo, el controlador y el backend, y pueden quedar por detrás de tarjetas NVIDIA comparables. La relación valor-precio es ahora sólida: 12 GB de VRAM por normalmente $250–290 (consulta los anuncios actuales) mientras la RTX 3060 12GB nueva se vio a $474–599. La limitación principal sigue siendo el software — en la última revisión vLLM, las herramientas de ajuste fino y los runtimes multimodales no soportaban bien Arc — así que si necesitas ajuste fino LoRA, compra una RTX 3060 12GB de segunda mano. El soporte cambia rápido; consulta la documentación de cada proyecto.',
          },
          {
            q: '¿Puedo ejecutar un modelo de 70B en una sola GPU por menos de $500?',
            a: 'No a plena velocidad. Incluso la RTX 3090 (24 GB) no puede almacenar 70B Q4 (~40 GB) completamente en VRAM. Puedes usar descarga a CPU con llama.cpp para dividir el modelo entre VRAM y RAM del sistema, pero entonces la generación va muy por debajo de la velocidad de un modelo que cabe en la VRAM, lo que hace poco práctico el uso interactivo. Para ejecutar modelos 70B en GPU, necesitas dos tarjetas de 24 GB (2× RTX 3090 con 48 GB en total) o inferencia en la nube.',
          },
          {
            q: '¿Los nuevos modelos (RTX 5060 Ti) harán obsoletas estas GPU?',
            a: 'La RTX 5060 Ti 16GB ya se ha lanzado, y no quedó por debajo de la RTX 4060 Ti: ocurrió lo contrario. Se reportaron listados minoristas desde $679 en Amazon EE. UU. ([Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/), 2026-01-27), muy por encima del precio de lista: en la misma dirección que el reajuste de precios por la escasez de memoria de toda esta lista. Es una GPU genuinamente mejor que cualquiera de las de aquí, con 16 GB de VRAM e inferencia más rápida, pero no es una tarjeta por debajo de $500 y esperar a que lo sea no es un plan razonable. Compra según lo que hay disponible ahora: la Intel Arc B580 12GB, o una RTX 3060 12GB de segunda mano si necesitas CUDA (consulta los anuncios actuales).',
          },
          {
            q: '¿Cuánto cuesta una RTX 4060 Ti 16GB de segunda mano?',
            a: 'Con las unidades nuevas vistas cerca de $562 cuando había stock en la última revisión, los anuncios de segunda mano que vimos en la última revisión rondaban el rango de $420–480 en eBay (consulta los anuncios vendidos para el precio de hoy), según el estado y la garantía restante. Los precios de reventa parecen haber seguido la subida de las tarjetas nuevas. Es una de las pocas tarjetas donde comprar usado no supone un gran ahorro, porque la oferta de unidades nuevas a precio de lista se agotó. Comprueba los anuncios vendidos (no los activos) de eBay y confirma que es la variante de 16 GB: también existe una RTX 4060 Ti de 8 GB.',
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
            text: '8 GB de VRAM te limitan a modelos 7B en cuantización Q4. Para un uso local de LLM significativo en 2026, 12 GB es el mínimo práctico; se recomienda 16 GB.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo comprar una RTX 3090 de segunda mano por menos de $500 en 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. El tracker de InsiderLLM (dato con fecha 2026-11-23) recoge anuncios vendidos de la RTX 3090 usada a unos $1,500–1,725 USD. Para capacidad 30B, una RTX 3090 usada (24 GB) es una vía de 24 GB.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo ejecutar un modelo de 70B en una sola GPU por menos de $500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No a plena velocidad. Incluso la RTX 3090 (24 GB) no puede alojar 70B Q4 (~40 GB) completamente en VRAM. La descarga a CPU queda muy por debajo de la velocidad de un modelo que cabe en la VRAM. Para 70B, las vías prácticas son dos GPU de 24 GB o inferencia en la nube.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta una RTX 4060 Ti 16GB de segunda mano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los precios de reventa de las RTX 4060 Ti 16GB de segunda mano parecen haber seguido la subida del mercado nuevo; consulta los anuncios vendidos (no los activos) de eBay para el precio de hoy, que depende del estado. Confirma que es la variante de 16 GB, ya que también existe una versión de 8 GB.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'Mejor opción global — 12 GB de VRAM, una de las pocas tarjetas nuevas de 12 GB listadas por debajo de $500 en grandes minoristas de EE. UU. cuando se actualizó esta página por última vez' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (usada)', description: 'Mejor opción CUDA — 12 GB de VRAM, cadena CUDA completa, mejor comprarla de segunda mano' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'El mejor hardware, pero los anuncios a precio de lista estaban sin stock en la última revisión y las unidades con stock se vieron por encima de $500' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Mejor GPU para inferencia LLM por menos de $500 (2026)',
      description: 'Comparación clasificada de GPU por menos de $500 para inferencia de IA local: Intel Arc B580 12GB, RTX 3060 12GB usada y RTX 4060 Ti 16GB. La escasez de memoria de 2026 sacó del presupuesto a la RTX 3090, la RTX 4070, la RX 7800 XT y la RTX 3060 nueva.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      url: 'https://www.promptquorum.com/es/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      about: [
        { '@type': 'Thing', name: 'GPU para inferencia LLM' },
        { '@type': 'Thing', name: 'Inteligencia Artificial local' },
        { '@type': 'Thing', name: 'NVIDIA GeForce RTX 4060 Ti' },
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
    seoTitle: 'أفضل ⁨GPU⁩ بأقل من $⁨500⁩ لـ⁨LLM⁩ (⁨2026⁩) + سعر ⁨RTX 4060 Ti⁩',
    metaDescription: 'أفضل GPU بأقل من $500 للاستدلال المحلي على LLM: Intel Arc B580 12GB أولاً، وRTX 3060 12GB مستعملة لـ CUDA. وسبب خروج RTX 4060 Ti من الميزانية.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: 'عادةً $250–290', label: 'تحقق من سعر Intel Arc B580 12GB ←' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB (مستعملة)', productCategory: 'gpu', priceRange: 'عادةً $270–300 مستعملة', label: 'تحقق من سعر RTX 3060 12GB ←' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: 'شوهدت قرب $562 عند آخر مراجعة', label: 'تحقق من سعر RTX 4060 Ti 16GB ←' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**أفضل GPU بأقل من $500 للاستدلال المحلي على نماذج LLM صارت Intel Arc B580 12GB: 12 GB من VRAM لنماذج 7B–13B بتكميم Q4، وهي من البطاقات الجديدة القليلة بسعة 12 GB المعروضة بأقل من $500 لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة (آخر مراجعة كاملة للأسعار: 2026-11-22؛ وتحقق من العروض الحالية). ولمن يحتاج سلسلة أدوات CUDA، فإن RTX 3060 12GB مستعملة هي البديل. كانت الأسعار النموذجية في السوق عند آخر مراجعة $250–290 لبطاقة Arc B580 و$270–300 لبطاقة RTX 3060 12GB مستعملة (لا يتتبعها PromptQuorum؛ تحقق من روابط المتاجر لمعرفة سعر اليوم). أما الفائزة السابقة، RTX 4060 Ti 16GB، فقد خرجت من النطاق: كانت عروضها بسعرها المُعلن نافدة من المخزون، وشوهدت الوحدات المتوفرة قرب $562 عند آخر مراجعة. وشوهدت RTX 3060 12GB الجديدة بنحو $474–599. وتنسب تقارير السوق ارتفاعات 2026 إلى نقص ذاكرتَي DRAM وGDDR المرتبط بطلب مراكز بيانات الذكاء الاصطناعي ([متتبّع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، المصدر محدّث في 2026-10-15). ولم يختبر PromptQuorum أداء هذه البطاقات: تعتمد السرعة في النماذج الصغيرة أساساً على عرض نطاق الذاكرة والتعريف. ولقدرة نماذج 30B، أحد الطرق هو RTX 3090 مستعملة (24 GB) بنحو $1,500–1,725 في الإعلانات المباعة ([متتبّع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، بيانات السعر بتاريخ 2026-11-23). الأسعار بالدولار الأمريكي وقد تختلف في بلدك بحسب الضرائب والرسوم الجمركية.**',
    quickAnswerTop: {
      question: 'ما أفضل GPU لتشغيل نماذج LLM محليًا بأقل من $500؟',
      answer: '**بطاقة Intel Arc B580 12GB هي الأفضل بأقل من $500 للاستدلال المحلي على نماذج LLM.** تشغّل 12 GB من VRAM نماذج 7B–13B بتكميم Q4، وتعمل مع Ollama عبر واجهة SYCL/oneAPI على ويندوز ولينكس، وهي من البطاقات الجديدة القليلة بسعة 12 GB المعروضة بأقل من $500 لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة (عادةً نحو $250–290؛ آخر مراجعة كاملة للأسعار: 2026-11-22؛ تحقق من العروض الحالية). وRTX 3060 12GB مستعملة (عادةً $270–300) هي البديل لمن يحتاج سلسلة أدوات CUDA. أخرج نقص الذاكرة في 2026 معظم بقية القائمة من النطاق. عند آخر مراجعة شاهدنا RTX 4060 Ti 16GB قرب $562 عند توفرها، وRTX 3060 12GB الجديدة بـ $474–599، وRTX 4070 12GB بـ $560–705، وRX 7800 XT 16GB بنحو $832 (أسعار سوق نموذجية لا يتتبعها PromptQuorum)، بينما بيعت RTX 3090 المستعملة بنحو $1,500–1,725 ([متتبّع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، بيانات السعر بتاريخ 2026-11-23). الأسعار بالدولار الأمريكي وقد تختلف في بلدك بحسب الضرائب والرسوم الجمركية.',
      bullets: [
        '**الفائزة:** Intel Arc B580 12GB — 12 GB VRAM، عادةً $250–290 عند آخر مراجعة، ومن البطاقات الجديدة القليلة بسعة 12 GB المعروضة بأقل من $500 لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة',
        '**البديل:** RTX 3060 12GB مستعملة (عادةً $270–300) — أرخص طريق إلى سلسلة أدوات CUDA الكاملة',
        '⚠️ RTX 4060 Ti 16GB: العروض بسعرها المُعلن نافدة، وشوهدت الوحدات المتوفرة قرب $562 عند آخر مراجعة — لم تعد خياراً موثوقاً تحت $500',
        '⚠️ RTX 3060 12GB جديدة: شوهدت بـ $474–599 عند آخر مراجعة — اشترِها مستعملة بدلاً من ذلك',
        '⚠️ RTX 3090 مستعملة: نحو $1,500–1,725 في الإعلانات المباعة (InsiderLLM، بيانات السعر بتاريخ 2026-11-23) — لم تعد خياراً بأقل من $500',
        '⚠️ RTX 4070 12GB: شوهدت بـ $560–705 عند آخر مراجعة — لم تعد خياراً بأقل من $500',
        '⚠️ RX 7800 XT 16GB: شوهدت بنحو $832 عند آخر مراجعة — لم تعد خياراً بأقل من $500',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB تفوز لمعظم المستخدمين: 12 GB VRAM ومن البطاقات الجديدة القليلة بسعة 12 GB المعروضة بأقل من $500 لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة (عادةً $250–290؛ آخر مراجعة كاملة للأسعار: 2026-11-22؛ تحقق من العروض الحالية)**',
          'RTX 3060 12GB مستعملة (عادةً $270–300) هي البديل — أرخص طريق إلى سلسلة أدوات CUDA الكاملة',
          '⚠️ تنبيه سعر: RTX 4060 Ti 16GB، الفائزة السابقة، كانت نافدة بسعرها المُعلن وشوهدت قرب $562 عند توفرها — أُزيلت من قائمة ما دون $500',
          '⚠️ تنبيه سعر: شوهدت RTX 3060 12GB الجديدة بـ $474–599 — السوق المستعملة هي الطريق المعقول لهذه البطاقة',
          '⚠️ تنبيه سعر: الإعلانات المباعة لـ RTX 3090 المستعملة نحو $1,500–1,725 (InsiderLLM، بيانات السعر بتاريخ 2026-11-23) — أُزيلت من قائمة ما دون $500',
          '⚠️ تنبيه سعر: شوهدت RTX 4070 12GB بـ $560–705 — أُزيلت من قائمة ما دون $500',
          '⚠️ تنبيه سعر: شوهدت RX 7800 XT 16GB بنحو $832 — أُزيلت من قائمة ما دون $500',
          'لماذا تحركت الأسعار: تنسب تقارير السوق الارتفاعات إلى نقص ذاكرتَي DRAM وGDDR المرتبط بطلب مراكز بيانات الذكاء الاصطناعي (راجع متتبّع InsiderLLM). لم يتغير العتاد، بل ما تدفعه فقط. الأسعار غير المأخوذة من InsiderLLM هي أسعار سوق نموذجية عند آخر مراجعة ولا يتتبعها PromptQuorum.',
          'لم يختبر PromptQuorum أداء هذه البطاقات؛ في النماذج الصغيرة تعتمد السرعة أساساً على عرض نطاق الذاكرة والتعريف',
          'تحتاج قدرة نماذج 30B أو أكبر؟ أحد الطرق هو RTX 3090 مستعملة (24 GB) بنحو $1,500–1,725 في الإعلانات المباعة (InsiderLLM، بيانات السعر بتاريخ 2026-11-23)',
          'كل بطاقات GPU الثلاث في هذه القائمة تعمل مع Ollama وllama.cpp؛ أما LM Studio على Arc B580 فكان لا يزال في مرحلة beta عند آخر مراجعة (تحقق من الحالة الحالية)',
        ],
      },
      rankedList: {
        title: 'أفضل بطاقات GPU للاستدلال على نماذج LLM بأقل من $500 — مصنّفة',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'بطاقة Intel Arc B580 12GB هي أفضل GPU بأقل من $500 للاستدلال المحلي على نماذج LLM لأنها من البطاقات الجديدة القليلة بسعة 12 GB المعروضة بأقل من $500 لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة (آخر مراجعة كاملة للأسعار: 2026-11-22)، بعد نقص الذاكرة في 2026.',
          },
          {
            type: 'plain-terms',
            text: 'تحدد VRAM في GPU أي نماذج ذكاء اصطناعي يمكنك تشغيلها. بطاقة بسعة 16 GB تشغّل نماذج 14B بجودة عالية. بطاقة بسعة 24 GB (مثل RTX 3090 مستعملة) تشغّل نماذج 30B أو أكبر. بأقل من 12 GB تكون محدوداً بنماذج 7B أو أصغر.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — أفضل خيار شامل',
            content: '**بطاقة Intel Arc B580 12GB هي أفضل GPU بأقل من $500 للاستدلال المحلي على نماذج LLM، ويعود ذلك في جانب كبير منه إلى أنها من البطاقات القليلة من هذا النوع المعروضة ضمن هذا النطاق لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة (آخر مراجعة كاملة للأسعار: 2026-11-22؛ وتحقق من العروض الحالية).** كان سعرها عادةً نحو $250–290 لدى كبار المتاجر الأمريكية (سعر سوق نموذجي لا يتتبعه PromptQuorum؛ تحقق من روابط المتاجر)، بينما دفع نقص الذاكرة في 2026 معظم بطاقات NVIDIA الجديدة التي كانت تشغل هذه القائمة فوق $500. تشغّل Ollama عبر الواجهة الخلفية SYCL/oneAPI على Linux وWindows. لم يختبرها PromptQuorum؛ تتفاوت نتائج Arc بحسب النموذج والتعريف والواجهة الخلفية وقد تتأخر عن بطاقات NVIDIA المماثلة. حد 12 GB من VRAM يقيّدك بنماذج حتى نحو 14B عند Q4 — ولن تُويِ نموذج 14B عند Q8. تحسّن دعم تعريفات Intel كثيراً منذ الإطلاق، لكنه ما زال متأخراً عن CUDA في اتساع الأدوات: توقّع أن يعمل Ollama وllama.cpp جيداً، وأن يكون الضبط الدقيق LoRA متعثراً.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB على Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB على Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB مستعملة — أفضل خيار لـ CUDA',
            content: 'بطاقة NVIDIA GeForce RTX 3060 12GB هي أرخص طريق إلى سلسلة أدوات CUDA الكاملة، لكن اشترِها **مستعملة**. شوهدت البطاقات الجديدة بـ $474–599 عند آخر مراجعة، وهو ما يضع البطاقة الجديدة عند سقف $500 الذي تدور حوله هذه الصفحة أو فوقه. أما المستعملة فكانت عادةً $270–300 (أسعار سوق نموذجية لا يتتبعها PromptQuorum؛ تحقق من روابط المتاجر). تشغّل 12 GB من GDDR6 نماذج 7B–13B بتكميم Q4/Q8 بأريحية؛ لا تستطيع إيواء نموذج 14B بتكميم Q8، لكن نموذج 14B بتكميم Q4 (~8.5 GB) يناسبها. تعتمد السرعة في النماذج الصغيرة أساساً على عرض نطاق الذاكرة والتعريف، ولم يختبر PromptQuorum هذه البطاقة. سلسلة أدوات CUDA الكاملة تعني أن Ollama وLM Studio وvLLM والضبط الدقيق LoRA تعمل جميعها من المصنع على Windows وLinux (عند آخر مراجعة؛ راجع وثائق كل مشروع) — وهو الشيء الوحيد الذي لا تضاهيه Arc B580.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB على Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB على Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — أفضل بطاقة، إن وجدتها بسعرها المُعلن',
            content: 'ما زالت RTX 4060 Ti 16GB أفضل *عتاد* في هذه القائمة، وكانت الفائزة في هذه الصفحة حتى نقص الذاكرة في 2026. تتعامل 16 GB من VRAM من نوع GDDR6 مع Qwen3 14B وMistral 12B بتكميم Q4 بالكامل على GPU — وبتكميم Q8 دون تبديل — وباستهلاك 165 W؛ تحقق من قدرة مزود الطاقة والموصلات التي توصي بها الشركة المصنّعة لطرازك بالتحديد. المشكلة هي شراؤها. كانت عروضها بسعرها المُعلن نافدة من المخزون لدى كبار المتاجر عند آخر مراجعة، وشوهدت الوحدات المتوفرة قرب $562 (عروض شاهدناها عند آخر مراجعة؛ تحقق من الأسعار الحالية لدى المتاجر). إن وجدتها بسعرها المُعلن أو قريباً منه فهي صفقة قوية؛ أما بسعر السوق الأعلى فهي خارج الميزانية التي كُتبت لها هذه الصفحة. راقبها، ولا تبنِ خططك عليها.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB على Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB على Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'مقارنة بطاقات GPU — الأسعار النموذجية والسعة',
        content: 'لم يختبر PromptQuorum أداء هذه البطاقات، لذا يعرض هذا الجدول سعة VRAM والسعر النموذجي وقدرة النماذج فقط. تعتمد السرعة في النماذج الصغيرة أساساً على عرض نطاق الذاكرة والتعريف والواجهة الخلفية؛ وللاطلاع على أرقام أبلغ عنها المطورون لبطاقات الفئة العليا، راجع [لوحة أداء llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013) (أبلغ عنها المطورون؛ تشمل بطاقات الفئة العليا فقط). الأسعار هي أسعار السوق النموذجية عند آخر مراجعة، ولا يتتبعها PromptQuorum؛ تحقق من روابط المتاجر لمعرفة سعر اليوم. الأسعار بالدولار الأمريكي وقد تختلف في بلدك بحسب الضرائب والرسوم الجمركية. مستبعدة لأنها عند سقف $500 أو فوقه: RTX 3090 المستعملة (نحو $1,500–1,725 في الإعلانات المباعة، InsiderLLM، بيانات السعر بتاريخ 2026-11-23)، وRTX 4070 12GB ($560–705)، وRX 7800 XT 16GB (نحو $832)، وRTX 3060 12GB الجديدة ($474–599).',
        columns: ['GPU', 'VRAM', 'السعر النموذجي', 'أقصى نموذج'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', 'VRAM': '12 GB', 'السعر النموذجي': '$250–290', 'أقصى نموذج': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB (مستعملة)', 'VRAM': '12 GB', 'السعر النموذجي': '$270–300', 'أقصى نموذج': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', 'VRAM': '16 GB', 'السعر النموذجي': 'شوهدت قرب $562 عند التوفر', 'أقصى نموذج': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'كيف اخترنا هذه البطاقات',
        content: 'معايير الاختيار: متاحة للشراء جديدة أو مستعملة بأقل من $500؛ متوافقة مع واحد على الأقل من أنظمة تشغيل الاستدلال الرئيسية (Ollama، LM Studio، llama.cpp)؛ VRAM ≥ 12 GB (بطاقات 8 GB مستبعدة). لم يختبر PromptQuorum أداء هذه البطاقات. نطاقات الأسعار تقريبية وقد قورنت بإعلانات عامة عند آخر مراجعة؛ ولا يتتبعها PromptQuorum، لذا تحقق من روابط المتاجر لمعرفة سعر اليوم. قُرئت الأسعار من إعلانات المتاجر العامة عند آخر مراجعة. جرت تلك المراجعة الكاملة في 2026-11-22؛ ولم يُحدَّث منذئذٍ سوى رقم RTX 3090 المستعملة (بتاريخ 2026-11-23). استُبعدت عدة بطاقات على أساس السعر: RTX 3090 المستعملة (24 GB) تبلغ إعلاناتها المباعة نحو $1,500–1,725 ([متتبّع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)، بيانات السعر بتاريخ 2026-11-23)؛ وشوهدت RTX 4070 12GB بـ $560–705؛ وRX 7800 XT 16GB بنحو $832؛ وRTX 3060 12GB الجديدة بـ $474–599. أُبقيت RTX 4060 Ti 16GB في القائمة مع تنبيه — فقد كانت عروضها بسعرها المُعلن نافدة وشوهدت الوحدات المتوفرة قرب $562. وتنسب تقارير السوق الارتفاعات إلى نقص ذاكرتَي DRAM وGDDR المرتبط بطلب مراكز بيانات الذكاء الاصطناعي، إذ تبلغ RTX 5090 الجديدة نحو $4,500–4,700 مقابل سعر رسمي $1,999، وRTX 5080 نحو $1,200–1,600 مقابل $999 (متتبّع InsiderLLM، المصدر محدّث في 2026-10-15). تعتمد السرعة في النماذج الصغيرة أساساً على عرض نطاق الذاكرة والتعريف والواجهة الخلفية؛ و[لوحة llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013) التي أبلغ عنها المطورون تشمل بطاقات الفئة العليا فقط.',
      },
      vramGuide: {
        title: 'متطلبات VRAM حسب حجم النموذج',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'متطلبات VRAM: نموذج 7B يحتاج ~4–5 GB (Q4) أو ~7–8 GB (Q8)؛ نموذج 14B يحتاج ~8–9 GB (Q4) أو ~14–15 GB (Q8)؛ نموذج 30B يحتاج ~18–20 GB (Q4)؛ نموذج 70B يحتاج ~40–42 GB (Q4).',
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
          'نموذج 14B بتكميم Q8: ~14 GB VRAM — يتطلب 16 GB أو أكثر، مثل RTX 4060 Ti 16GB أو RTX 3090 (مستعملة)',
          'نموذج 30B بتكميم Q4: ~18 GB VRAM — يتطلب 24 GB (RTX 3090 مستعملة)',
          'نموذج 70B بتكميم Q4: ~40 GB — يتطلب بطاقتي GPU أو تفريغاً إلى CPU',
        ],
      },
      decisionMatrix: {
        title: 'أي GPU يجب أن تشتري؟',
        content: 'استخدم دليل القرار هذا وفقاً لحالة استخدامك الرئيسية:',
        items: [
          '**أفضل خيار شامل بأقل من $500** ← Intel Arc B580 12GB (عادةً $250–290 عند آخر مراجعة). من البطاقات الجديدة القليلة بسعة 12 GB المعروضة بأقل من $500 لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة؛ آخر مراجعة كاملة للأسعار: 2026-11-22؛ تحقق من العروض الحالية. نماذج 7B–13B عند Q4، وOllama عبر SYCL على Windows وLinux.',
          '**أرخص بطاقة CUDA تعمل** ← RTX 3060 12GB مستعملة (عادةً $270–300). سلسلة أدوات CUDA الكاملة — Ollama وLM Studio وvLLM والضبط الدقيق LoRA — بنحو نفس سعر Arc. اشترِها مستعملة: شوهدت الجديدة بـ $474–599.',
          '**أفضل عتاد، إن وجدته بسعره المُعلن** ← RTX 4060 Ti 16GB. بسعرها المُعلن هي صفقة قوية، وتشغّل 14B عند Q8 على GPU. لكن عروض السعر المُعلن كانت نافدة وشوهدت الوحدات المتوفرة قرب $562 عند آخر مراجعة، أي خارج ميزانية هذه الصفحة.',
          '**تحتاج قدرة نماذج 30B؟** ← أحد الطرق هو RTX 3090 مستعملة (24 GB)، لكن إعلاناتها المباعة نحو $1,500–1,725 (InsiderLLM، بيانات السعر بتاريخ 2026-11-23)، أي أعلى بكثير من $500.',
          '**مستخدم Windows، دون تعقيدات** ← RTX 3060 12GB مستعملة. لدى NVIDIA CUDA أوسع دعم على Windows لنماذج LLM والضبط الدقيق وأنظمة التشغيل متعددة الوسائط، و3060 المستعملة هي أرخص طريق إليه.',
          '**هل تحتاج إلى أكثر من 12 GB لاختبار؟** بدلًا من توسيع الميزانية، يمكنك [استئجار بطاقة 24 GB مقابل بضعة دولارات](/ar/power-local-llm/best-cloud-gpu-providers) ومعرفة ما إذا كانت النماذج الأكبر تستحق ذلك.',
        ],
      },
      softwareCompat: {
        title: 'توافق البرمجيات حسب GPU',
        content: 'كل بطاقات GPU الثلاث تشغّل Ollama وllama.cpp. تظهر الفروق في الأدوات المتقدمة (الدعم عند آخر مراجعة؛ يتغير بسرعة، فراجع وثائق كل مشروع):',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ جزئي', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'استهلاك الطاقة ومتطلبات النظام',
        content: 'يحدد استهلاك GPU أي مزود طاقة وصندوق تحتاج. غالباً ما يبقي تشغيل نماذج LLM بطاقات GPU عند 80–100% من الاستخدام — على خلاف الألعاب، قلّما توجد إطارات خاملة. تحقق من قدرة مزود الطاقة والموصلات التي توصي بها الشركة المصنّعة لطرازك بالتحديد.',
        items: [
          'Intel Arc B580 12GB: 190 W — عادةً مزود طاقة بسعة 650 W أو أكثر؛ 8 سنون قياسي؛ راجع توصية الشركة المصنّعة',
          'RTX 3060 12GB: 170 W — عادةً مزود طاقة بسعة 550 W أو أكثر؛ موصّل 8 سنون واحد؛ راجع توصية الشركة المصنّعة',
          'RTX 4060 Ti 16GB: 165 W — عادةً مزود طاقة بسعة 550 W أو أكثر؛ موصّل 8 سنون واحد؛ راجع توصية الشركة المصنّعة',
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
            a: 'لا. يسجّل [متتبّع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (بيانات السعر بتاريخ 2026-11-23) إعلانات مباعة لـ RTX 3090 المستعملة بنحو $1,500–1,725، لذا لم تعد خياراً بأقل من $500. هذه بيانات إعلانات وليست عرض سعر، وهي بالدولار الأمريكي وقد تختلف في بلدك بحسب الضرائب والرسوم الجمركية. وتبقى سعة 24 GB VRAM هي ما يجعلها جذابة: فهي طريق بسعة 24 GB إلى نماذج فئة 30B التي تحتاج نحو 18–20 GB بتكميم Q4.',
          },
          {
            q: 'هل تعمل AMD لتشغيل نماذج LLM محلياً؟',
            a: 'نعم، مع تفاصيل دقيقة. Ollama على Linux مع ROCm يعمل جيداً على بطاقات مثل RX 7800 XT. تحسّن دعم ROCm على Windows لكنه لا يزال يتطلب خطوات يدوية، وكان الضبط الدقيق (LoRA) على عتاد AMD غير مدعوم من معظم الأدوات عند آخر مراجعة؛ يتغير الدعم بسرعة، فراجع وثائق كل مشروع. ملاحظة حول السعر: شوهدت RX 7800 XT 16GB بنحو $832، فلم تعد تناسب ميزانية أقل من $500 — لهذا النطاق السعري تُعدّ RTX 3060 12GB مستعملة (عادةً $270–300، CUDA) أو Intel Arc B580 12GB (عادةً $250–290) الخيارين المناسبين. لـ Windows أو الضبط الدقيق، التزم بـ NVIDIA.',
          },
          {
            q: 'ماذا عن بطاقات Intel Arc للذكاء الاصطناعي؟',
            a: 'بطاقة Intel Arc B580 12GB هي أفضل خيار Arc في 2026، وبعد أن أعاد نقص الذاكرة تسعير مجال NVIDIA بأكمله، صارت أفضل بطاقة في هذه الصفحة على الإطلاق. تشغّل Ollama على Windows وLinux عبر الواجهة الخلفية SYCL. لم يختبرها PromptQuorum؛ تتفاوت نتائج Arc بحسب النموذج والتعريف والواجهة الخلفية وقد تتأخر عن بطاقات NVIDIA المماثلة. القيمة مقابل السعر قوية الآن: 12 GB من VRAM بسعر عادةً $250–290 (تحقق من العروض الحالية) بينما شوهدت RTX 3060 12GB الجديدة بـ $474–599. القيد الرئيسي لا يزال البرمجيات — فعند آخر مراجعة لم تكن vLLM وأدوات الضبط الدقيق وأنظمة التشغيل متعددة الوسائط تدعم بطاقات Arc جيداً، فإن كنت تحتاج الضبط الدقيق LoRA، اشترِ بدلاً من ذلك RTX 3060 12GB مستعملة. يتغير الدعم بسرعة؛ راجع وثائق كل مشروع.',
          },
          {
            q: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بأقل من $500؟',
            a: 'ليس بكامل السرعة. حتى RTX 3090 (24 GB) لا تستطيع تخزين 70B Q4 (~40 GB) بالكامل في VRAM. يمكنك استخدام التفريغ إلى CPU مع llama.cpp لتقسيم النموذج بين VRAM وRAM النظام، لكن التوليد حينها يجري بسرعة أقل بكثير من نموذج يتسع في VRAM، ما يجعل الاستخدام التفاعلي غير عملي. لتشغيل نماذج 70B على GPU، تحتاج إلى بطاقتين بسعة 24 GB (2× RTX 3090 بسعة 48 GB إجمالاً) أو استدلال سحابي.',
          },
          {
            q: 'هل ستجعل البطاقات الجديدة (RTX 5060 Ti) هذه البطاقات قديمة؟',
            a: 'صدرت RTX 5060 Ti 16GB بالفعل، ولم تنزل تحت سعر RTX 4060 Ti — بل حدث العكس. أُفيد بإعلانات تجزئة تبدأ من $679 على Amazon الأمريكي ([Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/)، 2026-01-27)، أي أعلى بكثير من السعر المُعلن، وهو الاتجاه نفسه لإعادة التسعير بسبب نقص الذاكرة في هذه القائمة كلها. هي بطاقة أفضل فعلاً من أي شيء هنا، بسعة 16 GB من VRAM واستدلال أسرع، لكنها ليست بطاقة تحت $500، وانتظار أن تصبح كذلك ليس خطة تستحق البناء عليها. اشترِ بناءً على المتوفر الآن: Intel Arc B580 12GB، أو RTX 3060 12GB مستعملة إن كنت تحتاج CUDA (تحقق من العروض الحالية).',
          },
          {
            q: 'كم يكلّف RTX 4060 Ti 16GB مستعملة؟',
            a: 'شوهدت الوحدات الجديدة قرب $562 عند توفرها في آخر مراجعة؛ وكانت العروض المستعملة التي شاهدناها عند آخر مراجعة تقع تقريباً في نطاق $420–480 على eBay (تحقق من الإعلانات المباعة لمعرفة سعر اليوم)، حسب الحالة والضمان المتبقي. ويبدو أن أسعار إعادة البيع تبعت ارتفاع أسعار البطاقات الجديدة. وهي من البطاقات القليلة التي لا يمثّل فيها الشراء مستعملاً توفيراً كبيراً، لأن المعروض من الوحدات الجديدة بسعرها المُعلن قد نفد. تحقق من الإعلانات المباعة (لا النشطة) على eBay، وتأكد من أنها الإصدار بسعة 16 GB — فهناك أيضاً RTX 4060 Ti بسعة 8 GB.',
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
            text: '8 GB من VRAM تحدّك بنماذج 7B بتكميم Q4. لاستخدام محلي ذي معنى لنماذج LLM في 2026، 12 GB هو الحد الأدنى العملي؛ ويُنصح بـ 16 GB.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل لا يزال بإمكاني شراء RTX 3090 مستعملة بأقل من $500 في 2026؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'لا — يسجّل متتبّع InsiderLLM (بيانات السعر بتاريخ 2026-11-23) إعلانات مباعة لـ RTX 3090 المستعملة بنحو $1,500–1,725. لقدرة نماذج 30B، RTX 3090 مستعملة (24 GB) هي طريق بسعة 24 GB.',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بأقل من $500؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ليس بكامل السرعة. حتى RTX 3090 (24 GB) لا تستطيع إيواء 70B Q4 (~40 GB) بالكامل في VRAM. التفريغ إلى CPU يبقي السرعة أقل بكثير من نموذج يتسع في VRAM. الطريقان العمليان لنماذج 70B هما بطاقتا GPU بسعة 24 GB أو استدلال سحابي.',
          },
        },
        {
          '@type': 'Question',
          name: 'كم يكلّف RTX 4060 Ti 16GB مستعملة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'يبدو أن أسعار إعادة بيع بطاقات RTX 4060 Ti 16GB المستعملة تبعت ارتفاع سعر الجديدة؛ تحقق من الإعلانات المباعة (لا النشطة) على eBay لمعرفة سعر اليوم، فهو يعتمد على الحالة. تأكد من أنها الإصدار بسعة 16 GB، فهناك أيضاً إصدار بسعة 8 GB.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'أفضل خيار شامل — 12 GB VRAM، من البطاقات الجديدة القليلة بسعة 12 GB المعروضة بأقل من $500 لدى كبار المتاجر الأمريكية عند آخر تحديث لهذه الصفحة' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (مستعملة)', description: 'أفضل خيار لـ CUDA — 12 GB VRAM، سلسلة أدوات CUDA كاملة، والأفضل شراؤها مستعملة' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'أفضل عتاد، لكن عروضها بسعرها المُعلن كانت نافدة عند آخر مراجعة وشوهدت الوحدات المتوفرة فوق $500' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'أفضل GPU للاستدلال على نماذج LLM بأقل من $500 (2026)',
      description: 'مقارنة مصنّفة لبطاقات GPU بأقل من $500 للاستدلال المحلي على الذكاء الاصطناعي: Intel Arc B580 12GB، وRTX 3060 12GB مستعملة، وRTX 4060 Ti 16GB. دفع نقص الذاكرة في 2026 بطاقات RTX 3090 وRTX 4070 وRX 7800 XT وRTX 3060 الجديدة فوق $500.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      url: 'https://www.promptquorum.com/ar/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      about: [
        { '@type': 'Thing', name: 'GPU للاستدلال على نماذج LLM' },
        { '@type': 'Thing', name: 'الذكاء الاصطناعي المحلي' },
        { '@type': 'Thing', name: 'NVIDIA GeForce RTX 4060 Ti' },
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
    seoTitle: 'Melhor GPU até US$ 500 para LLM (2026) + preço RTX 4060 Ti',
    metaDescription: 'A melhor GPU até US$ 500 para LLM local: Intel Arc B580 12GB em primeiro e RTX 3060 12GB usada para CUDA. Por que a RTX 4060 Ti 16GB saiu do orçamento.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: 'normalmente US$ 250–290', label: 'Ver preço da Intel Arc B580 12GB →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB (usada)', productCategory: 'gpu', priceRange: 'normalmente US$ 270–300 usada', label: 'Ver preço da RTX 3060 12GB →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: 'vista perto de US$ 562 na última revisão', label: 'Ver preço da RTX 4060 Ti 16GB →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**A melhor GPU por menos de US$ 500 para inferência de LLM local é agora a Intel Arc B580 12GB: 12 GB de VRAM para modelos 7B–13B em Q4 e uma das poucas placas novas de 12 GB listadas abaixo de US$ 500 em grandes lojas dos EUA quando esta página foi atualizada pela última vez (última revisão completa de preços: 2026-11-22; confira os anúncios atuais). Para a cadeia CUDA, uma RTX 3060 12GB usada é a alternativa. Os preços de rua típicos na última revisão foram US$ 250–290 para a Arc B580 e US$ 270–300 para uma RTX 3060 12GB usada (não acompanhados pela PromptQuorum; consulte os links das lojas para o preço de hoje). A vencedora anterior, a RTX 4060 Ti 16GB, saiu da faixa: os anúncios ao preço de tabela estavam sem estoque e as unidades em estoque foram vistas perto de US$ 562 na última revisão. A RTX 3060 12GB nova foi vista em cerca de US$ 474–599. Relatórios de mercado atribuem as altas de 2026 à escassez de DRAM e GDDR ligada à demanda dos data centers de IA ([tracker da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), fonte atualizada em 2026-10-15). A PromptQuorum não fez benchmark dessas placas: a velocidade em modelos pequenos depende sobretudo da largura de banda da memória e do driver. Para capacidade de modelos 30B, um caminho é uma RTX 3090 usada (24 GB), a cerca de US$ 1.500–1.725 em anúncios vendidos ([tracker da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), dado com data de 2026-11-23). Preços em dólares; no Brasil os preços podem variar (impostos de importação e câmbio).**',
    quickAnswerTop: {
      question: 'Qual é a melhor GPU para rodar LLMs localmente por menos de US$ 500?',
      answer: '**A Intel Arc B580 12GB é a melhor GPU por menos de US$ 500 para inferência de LLM local.** Seus 12 GB de VRAM rodam modelos 7B–13B em Q4, ela funciona com o Ollama pelo backend SYCL/oneAPI no Windows e no Linux, e é uma das poucas placas novas de 12 GB listadas abaixo de US$ 500 em grandes lojas dos EUA quando esta página foi atualizada pela última vez (normalmente em torno de US$ 250–290; última revisão completa de preços: 2026-11-22; confira os anúncios atuais). Uma RTX 3060 12GB usada (normalmente US$ 270–300) é a alternativa se você precisa da cadeia CUDA. A escassez de memória de 2026 tirou quase todo o resto desta lista da faixa. Na última revisão vimos a RTX 4060 Ti 16GB perto de US$ 562 quando havia estoque, a RTX 3060 12GB nova a US$ 474–599, a RTX 4070 12GB a US$ 560–705 e a RX 7800 XT 16GB a cerca de US$ 832 (preços de rua típicos, não acompanhados pela PromptQuorum), enquanto a RTX 3090 usada foi vendida a cerca de US$ 1.500–1.725 ([tracker da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), dado com data de 2026-11-23). Preços em dólares; no Brasil os preços podem variar (impostos de importação e câmbio).',
      bullets: [
        '**Vencedora:** Intel Arc B580 12GB — 12 GB de VRAM, normalmente US$ 250–290 na última revisão, uma das poucas placas novas de 12 GB listadas abaixo de US$ 500 em grandes lojas dos EUA quando esta página foi atualizada pela última vez',
        '**Alternativa:** RTX 3060 12GB usada (normalmente US$ 270–300) — o caminho mais barato para a cadeia CUDA completa',
        '⚠️ RTX 4060 Ti 16GB: anúncios ao preço de tabela sem estoque, unidades em estoque vistas perto de US$ 562 na última revisão — não é mais sub-US$ 500 de forma confiável',
        '⚠️ RTX 3060 12GB nova: vista a US$ 474–599 na última revisão — compre usada',
        '⚠️ RTX 3090 de segunda mão: cerca de US$ 1.500–1.725 em anúncios vendidos (InsiderLLM, dado com data de 2026-11-23) — não é mais sub-US$ 500',
        '⚠️ RTX 4070 12GB: vista a US$ 560–705 na última revisão — não é mais sub-US$ 500',
        '⚠️ RX 7800 XT 16GB: vista a cerca de US$ 832 na última revisão — não é mais sub-US$ 500',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**A Intel Arc B580 12GB vence para a maioria: 12 GB de VRAM e uma das poucas placas novas de 12 GB listadas abaixo de US$ 500 em grandes lojas dos EUA quando esta página foi atualizada pela última vez (normalmente US$ 250–290; última revisão completa de preços: 2026-11-22; confira os anúncios atuais)**',
          'A RTX 3060 12GB usada (normalmente US$ 270–300) é a alternativa — o caminho mais barato para a cadeia CUDA completa',
          '⚠️ Alerta de preço: a RTX 4060 Ti 16GB, a vencedora anterior, estava sem estoque ao preço de tabela e foi vista perto de US$ 562 quando havia unidades — removida da lista sub-US$ 500',
          '⚠️ Alerta de preço: a RTX 3060 12GB nova foi vista a US$ 474–599 — o mercado de usadas é o caminho sensato para esta placa',
          '⚠️ Alerta de preço: os anúncios vendidos da RTX 3090 usada ficam em cerca de US$ 1.500–1.725 (InsiderLLM, dado com data de 2026-11-23) — removida da lista sub-US$ 500',
          '⚠️ Alerta de preço: a RTX 4070 12GB foi vista a US$ 560–705 — removida da lista sub-US$ 500',
          '⚠️ Alerta de preço: a RX 7800 XT 16GB foi vista a cerca de US$ 832 — removida da lista sub-US$ 500',
          'Por que os preços se moveram: relatórios de mercado atribuem as altas à escassez de DRAM e GDDR ligada à demanda dos data centers de IA (veja o tracker da InsiderLLM). O hardware não mudou; só o que ele custa. Os preços que não vêm da InsiderLLM são preços de rua típicos na última revisão, não acompanhados pela PromptQuorum.',
          'A PromptQuorum não fez benchmark dessas placas; em modelos pequenos, a velocidade depende sobretudo da largura de banda da memória e do driver',
          'Precisa de capacidade para modelos 30B ou mais? Um caminho é uma RTX 3090 usada (24 GB), a cerca de US$ 1.500–1.725 em anúncios vendidos (InsiderLLM, dado com data de 2026-11-23)',
          'As três GPUs desta lista rodam Ollama e llama.cpp; o LM Studio na Arc B580 ainda estava em beta na última revisão (confira o status atual)',
        ],
      },
      rankedList: {
        title: 'Melhores GPUs para inferência de LLM por menos de US$ 500 — Classificadas',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A Intel Arc B580 12GB é a melhor GPU por menos de US$ 500 para inferência de LLM local porque é uma das poucas placas novas de 12 GB listadas abaixo de US$ 500 em grandes lojas dos EUA quando esta página foi atualizada pela última vez (última revisão completa de preços: 2026-11-22), depois da escassez de memória de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'A VRAM da GPU determina quais modelos de IA você consegue rodar. Uma GPU de 16 GB roda modelos 14B em alta qualidade. Uma GPU de 24 GB (como uma RTX 3090 de segunda mão) roda modelos de 30B ou mais. Com menos de 12 GB você fica limitado a modelos 7B ou menores.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — Melhor opção geral',
            content: '**A Intel Arc B580 12GB é a melhor GPU por menos de US$ 500 para inferência de LLM local, em boa parte porque é uma das poucas placas desse tipo listadas dentro da faixa em grandes lojas dos EUA quando esta página foi atualizada pela última vez (última revisão completa de preços: 2026-11-22; confira os anúncios atuais).** Normalmente ficava em torno de US$ 250–290 nas grandes lojas dos EUA (preço de rua típico, não acompanhado pela PromptQuorum; consulte os links das lojas), enquanto a maioria das placas NVIDIA novas que ocupavam esta lista passou de US$ 500 com a escassez de memória de 2026. Roda o Ollama pelo backend SYCL/oneAPI no Linux e no Windows. A PromptQuorum não fez benchmark dela; os resultados da Arc variam conforme o modelo, o driver e o backend e podem ficar atrás de placas NVIDIA comparáveis. O teto de 12 GB de VRAM limita a modelos de até cerca de 14B em Q4 — ela não comporta um 14B em Q8. O suporte de drivers da Intel melhorou muito desde o lançamento, mas ainda fica atrás do CUDA em amplitude de ferramentas: espere Ollama e llama.cpp funcionando bem e ajuste fino LoRA problemático.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB na Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB na Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB usada — Melhor opção CUDA',
            content: 'A NVIDIA GeForce RTX 3060 12GB é o caminho mais barato para a cadeia CUDA completa, mas compre **usada**. As unidades novas foram vistas a US$ 474–599 na última revisão, o que coloca a placa nova no teto de US$ 500 de que trata esta página, ou acima. As usadas custavam normalmente US$ 270–300 (preços de rua típicos, não acompanhados pela PromptQuorum; consulte os links das lojas). Seus 12 GB GDDR6 rodam modelos 7B–13B em Q4/Q8 com folga; não acomodam um 14B em Q8, mas um 14B em Q4 (~8,5 GB) cabe. A velocidade em modelos pequenos depende sobretudo da largura de banda da memória e do driver, e a PromptQuorum não fez benchmark desta placa. A cadeia CUDA completa significa que Ollama, LM Studio, vLLM e ajuste fino LoRA funcionam de fábrica no Windows e no Linux (na última revisão; confira a documentação de cada projeto) — a única coisa que a Arc B580 não consegue igualar.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB na Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB na Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — A melhor placa, se achar ao preço de tabela',
            content: 'A RTX 4060 Ti 16GB continua sendo o melhor *hardware* desta lista e foi a vencedora desta página até a escassez de memória de 2026. Seus 16 GB GDDR6 rodam Qwen3 14B e Mistral 12B em Q4 totalmente na GPU — e em Q8 sem swap — com TDP de 165 W; confira a potência de fonte e os conectores recomendados pelo fabricante para o seu modelo exato. O problema é comprar uma. Os anúncios ao preço de tabela estavam sem estoque nas grandes lojas na última revisão, e as unidades em estoque foram vistas perto de US$ 562 (anúncios que vimos na última revisão; confira os preços atuais nas lojas). Se achar uma ao preço de tabela ou perto dele, é uma compra sólida; ao preço de rua mais alto, está fora do orçamento para o qual ela foi escrita. Acompanhe, mas não planeje em cima dela.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB na Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB na Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparação de GPUs — Preços típicos e capacidade',
        content: 'A PromptQuorum não fez benchmark dessas placas, então esta tabela lista apenas VRAM, preço típico e capacidade de modelos. A velocidade em modelos pequenos depende sobretudo da largura de banda da memória, do driver e do backend; para números relatados por desenvolvedores em placas de topo, veja o [placar de desempenho do llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013) (relatado por desenvolvedores; lista apenas placas de topo). Os preços são preços de rua típicos na última revisão, não acompanhados pela PromptQuorum; consulte os links das lojas para o preço de hoje. Preços em dólares; no Brasil os preços podem variar (impostos de importação e câmbio). Excluídas por estarem no teto de US$ 500 ou acima dele: RTX 3090 usada (cerca de US$ 1.500–1.725 em anúncios vendidos, InsiderLLM, dado com data de 2026-11-23), RTX 4070 12GB (US$ 560–705), RX 7800 XT 16GB (cerca de US$ 832) e RTX 3060 12GB nova (US$ 474–599).',
        columns: ['GPU', 'VRAM', 'Preço típico', 'Modelo máximo'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', 'VRAM': '12 GB', 'Preço típico': 'US$ 250–290', 'Modelo máximo': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB (usada)', 'VRAM': '12 GB', 'Preço típico': 'US$ 270–300', 'Modelo máximo': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', 'VRAM': '16 GB', 'Preço típico': 'vista perto de US$ 562 com estoque', 'Modelo máximo': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'Como selecionamos estas GPUs',
        content: 'Critérios de seleção: disponíveis para compra nova ou usada por menos de US$ 500; compatíveis com pelo menos um runtime de inferência principal (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (placas de 8 GB excluídas). A PromptQuorum não fez benchmark dessas placas. As faixas de preço são aproximadas e foram conferidas com anúncios públicos na última revisão; a PromptQuorum não as acompanha, então consulte os links das lojas para o preço de hoje. Os preços foram lidos de anúncios públicos de lojas na última revisão. Essa revisão completa foi em 2026-11-22; desde então, só o valor da RTX 3090 usada foi atualizado (com data de 2026-11-23). Várias placas saíram da lista por preço: a RTX 3090 usada (24 GB) tem anúncios vendidos em cerca de US$ 1.500–1.725 ([tracker da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), dado com data de 2026-11-23); a RTX 4070 12GB foi vista a US$ 560–705; a RX 7800 XT 16GB a cerca de US$ 832; e a RTX 3060 12GB nova a US$ 474–599. A RTX 4060 Ti 16GB é mantida, mas sinalizada: os anúncios ao preço de tabela estavam sem estoque e as unidades em estoque foram vistas perto de US$ 562. Relatórios de mercado atribuem as altas à escassez de DRAM e GDDR ligada à demanda dos data centers de IA, com a RTX 5090 em torno de US$ 4.500–4.700 nova frente a um preço sugerido de US$ 1.999 e a RTX 5080 a US$ 1.200–1.600 frente a US$ 999 (tracker da InsiderLLM, fonte atualizada em 2026-10-15). A velocidade em modelos pequenos depende sobretudo da largura de banda da memória, do driver e do backend; o [placar do llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013), relatado por desenvolvedores, lista apenas placas de topo.',
      },
      vramGuide: {
        title: 'Requisitos de VRAM por tamanho de modelo',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Requisitos de VRAM: o modelo 7B precisa de ~4–5 GB (Q4) ou ~7–8 GB (Q8); o modelo 14B precisa de ~8–9 GB (Q4) ou ~14–15 GB (Q8); o modelo 30B precisa de ~18–20 GB (Q4); o modelo 70B precisa de ~40–42 GB (Q4).',
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
          'Modelo 14B em Q8: ~14 GB de VRAM — requer 16 GB ou mais, p. ex. RTX 4060 Ti 16GB ou RTX 3090 (usada)',
          'Modelo 30B em Q4: ~18 GB de VRAM — requer 24 GB (RTX 3090 de segunda mão)',
          'Modelo 70B em Q4: ~40 GB — exige duas GPUs ou offload para CPU',
        ],
      },
      decisionMatrix: {
        title: 'Qual GPU você deve comprar?',
        content: 'Use este guia de decisão conforme seu caso de uso principal:',
        items: [
          '**Melhor opção geral por menos de US$ 500** → Intel Arc B580 12GB (normalmente US$ 250–290 na última revisão). Uma das poucas placas novas de 12 GB listadas abaixo de US$ 500 em grandes lojas dos EUA quando esta página foi atualizada pela última vez (última revisão completa de preços: 2026-11-22; confira os anúncios atuais). Modelos 7B–13B em Q4, Ollama via SYCL no Windows e no Linux.',
          '**Placa CUDA mais barata que funciona** → RTX 3060 12GB usada (normalmente US$ 270–300). A cadeia CUDA completa — Ollama, LM Studio, vLLM, ajuste fino LoRA — por aproximadamente o mesmo dinheiro da Arc. Compre usada: a nova foi vista a US$ 474–599.',
          '**Melhor hardware, se achar ao preço de tabela** → RTX 4060 Ti 16GB. Ao preço de tabela é uma compra sólida, rodando 14B em Q8 na GPU. Mas os anúncios ao preço de tabela estavam sem estoque e as unidades em estoque foram vistas perto de US$ 562 na última revisão, fora do orçamento desta página.',
          '**Precisa de capacidade para modelos 30B?** → Um caminho é uma RTX 3090 usada (24 GB), mas os anúncios vendidos ficam em cerca de US$ 1.500–1.725 (InsiderLLM, dado com data de 2026-11-23), bem acima de US$ 500.',
          '**Usuário de Windows, sem complicação** → RTX 3060 12GB usada. A NVIDIA CUDA tem o suporte mais amplo no Windows para LLMs, fine-tuning e runtimes multimodais, e a 3060 usada é a forma mais barata de entrar.',
          '**Precisa de mais de 12 GB para um teste?** Em vez de esticar o orçamento, você pode [alugar uma placa de 24 GB por poucos dólares](/pt/power-local-llm/best-cloud-gpu-providers) e ver se os modelos maiores valem a pena.',
        ],
      },
      softwareCompat: {
        title: 'Compatibilidade de software por GPU',
        content: 'As três GPUs rodam Ollama e llama.cpp. As diferenças aparecem nas ferramentas avançadas (suporte na última revisão; muda rápido, então confira a documentação de cada projeto):',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ parcial', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Consumo de energia e requisitos do sistema',
        content: 'O consumo da GPU determina qual fonte de alimentação e gabinete você precisa. Rodar LLMs costuma manter as GPUs a 80–100% de utilização — diferente de jogos, há poucos frames ociosos. Confira a potência de fonte e os conectores recomendados pelo fabricante para o seu modelo exato.',
        items: [
          'Intel Arc B580 12GB: 190 W — normalmente fonte de 650 W ou mais; 8 pinos padrão; confira a recomendação do fabricante',
          'RTX 3060 12GB: 170 W — normalmente fonte de 550 W ou mais; um conector de 8 pinos; confira a recomendação do fabricante',
          'RTX 4060 Ti 16GB: 165 W — normalmente fonte de 550 W ou mais; um conector de 8 pinos; confira a recomendação do fabricante',
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
            a: 'Não. O [tracker da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (dado com data de 2026-11-23) registra anúncios vendidos da RTX 3090 usada em cerca de US$ 1.500–1.725 (em dólares, sem conversão), então ela não é mais uma opção sub-US$ 500. São dados de anúncios, não uma cotação. Os preços no Brasil podem variar bastante devido a impostos de importação. Os 24 GB de VRAM mantêm a placa atraente: é um caminho de 24 GB para modelos da classe 30B, que precisam de cerca de 18–20 GB em Q4.',
          },
          {
            q: 'A AMD funciona para rodar LLMs localmente?',
            a: 'Sim, com ressalvas. O Ollama no Linux com ROCm funciona bem em placas como a RX 7800 XT. O suporte a ROCm no Windows melhorou, mas ainda exige passos manuais, e o fine-tuning (LoRA) em hardware AMD não era suportado pela maioria das ferramentas na última revisão; o suporte muda rápido, então confira a documentação de cada projeto. Nota sobre preço: a RX 7800 XT 16GB foi vista a cerca de US$ 832, então não cabe mais na faixa sub-US$ 500 — para essa faixa de preço, uma RTX 3060 12GB usada (normalmente US$ 270–300, CUDA) ou uma Intel Arc B580 12GB (normalmente US$ 250–290) são as escolhas. Para Windows ou fine-tuning, fique com a NVIDIA.',
          },
          {
            q: 'E as GPUs Intel Arc para IA?',
            a: 'A Intel Arc B580 12GB é a melhor opção Arc em 2026 e, depois que a escassez de memória reprecificou a linha NVIDIA, a melhor placa desta página no geral. Roda o Ollama no Windows e no Linux pelo backend SYCL. A PromptQuorum não fez benchmark dela; os resultados da Arc variam conforme o modelo, o driver e o backend e podem ficar atrás de placas NVIDIA comparáveis. O argumento de custo-benefício é agora forte: 12 GB de VRAM por normalmente US$ 250–290 (confira os anúncios atuais) enquanto a RTX 3060 12GB nova foi vista a US$ 474–599. A limitação principal continua sendo software — na última revisão, vLLM, ferramentas de ajuste fino e runtimes multimodais não davam bom suporte à Arc — então se você precisa de LoRA, compre uma RTX 3060 12GB usada. O suporte muda rápido; confira a documentação de cada projeto.',
          },
          {
            q: 'Posso rodar um modelo 70B em uma única GPU por menos de US$ 500?',
            a: 'Não em velocidade plena. Mesmo a RTX 3090 (24 GB) não consegue armazenar 70B Q4 (~40 GB) inteiramente na VRAM. Você pode usar offload para CPU com o llama.cpp para dividir o modelo entre VRAM e RAM do sistema, mas a geração fica muito abaixo da velocidade de um modelo que cabe na VRAM, o que torna o uso interativo impraticável. Para rodar modelos 70B em GPU, você precisa de duas placas de 24 GB (2× RTX 3090 com 48 GB no total) ou inferência na nuvem.',
          },
          {
            q: 'As novas placas (RTX 5060 Ti) vão tornar essas GPUs obsoletas?',
            a: 'A RTX 5060 Ti 16GB já foi lançada, e não ficou abaixo da RTX 4060 Ti — foi o contrário. Foram relatados anúncios de varejo a partir de US$ 679 na Amazon dos EUA ([Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/), 2026-01-27), bem acima da tabela: na mesma direção da reprecificação por escassez de memória de toda esta lista. É uma GPU genuinamente melhor que qualquer uma daqui, com 16 GB de VRAM e inferência mais rápida, mas não é uma placa abaixo de US$ 500, e esperar que ela entre na faixa não é um plano que se sustente. Compre pelo que está disponível agora: a Intel Arc B580 12GB, ou uma RTX 3060 12GB usada se você precisa de CUDA (confira os anúncios atuais).',
          },
          {
            q: 'Quanto custa uma RTX 4060 Ti 16GB usada?',
            a: 'Com as unidades novas vistas perto de US$ 562 quando havia estoque na última revisão, os anúncios de usadas que vimos na última revisão ficavam na faixa de US$ 420–480 no eBay (confira os anúncios vendidos para o preço de hoje), dependendo do estado e da garantia restante. Os preços de revenda parecem ter acompanhado a alta das placas novas. É uma das poucas placas em que comprar usada não representa grande economia, porque a oferta de unidades novas ao preço de tabela secou. Confira os anúncios vendidos (não os ativos) do eBay e confirme que é a variante de 16 GB — também existe uma RTX 4060 Ti de 8 GB.',
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
            text: '8 GB de VRAM limitam você a modelos 7B em quantização Q4. Para um uso local de LLM significativo em 2026, 12 GB é o mínimo prático; 16 GB é o recomendado.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ainda posso comprar uma RTX 3090 de segunda mão por menos de US$ 500 em 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não — o tracker da InsiderLLM (dado com data de 2026-11-23) registra anúncios vendidos da RTX 3090 usada em cerca de US$ 1.500–1.725. Para capacidade de modelos 30B, uma RTX 3090 usada (24 GB) é um caminho de 24 GB.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso rodar um modelo 70B em uma única GPU por menos de US$ 500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não em velocidade plena. Mesmo a RTX 3090 (24 GB) não consegue alojar 70B Q4 (~40 GB) inteiramente na VRAM. O offload para CPU deixa a velocidade muito abaixo da de um modelo que cabe na VRAM. Para 70B, os caminhos práticos são duas GPUs de 24 GB ou inferência na nuvem.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto custa uma RTX 4060 Ti 16GB usada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Os preços de revenda das RTX 4060 Ti 16GB usadas parecem ter acompanhado a alta das novas; confira os anúncios vendidos (não os ativos) do eBay para o preço de hoje, que depende do estado. Confirme que é a variante de 16 GB, pois também existe uma versão de 8 GB.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'Melhor opção geral — 12 GB de VRAM, uma das poucas placas novas de 12 GB listadas abaixo de US$ 500 em grandes lojas dos EUA quando esta página foi atualizada pela última vez' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (usada)', description: 'Melhor opção CUDA — 12 GB de VRAM, cadeia CUDA completa, melhor comprada usada' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'Melhor hardware, mas os anúncios ao preço de tabela estavam sem estoque na última revisão e as unidades em estoque foram vistas acima de US$ 500' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Melhor GPU para inferência de LLM por menos de US$ 500 (2026)',
      description: 'Comparação classificada de GPUs por menos de US$ 500 para inferência de IA local: Intel Arc B580 12GB, RTX 3060 12GB usada e RTX 4060 Ti 16GB. A escassez de memória de 2026 tirou do orçamento a RTX 3090, a RTX 4070, a RX 7800 XT e a RTX 3060 nova.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      url: 'https://www.promptquorum.com/pt/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      about: [
        { '@type': 'Thing', name: 'GPU para inferência de LLM' },
        { '@type': 'Thing', name: 'Inteligência Artificial local' },
        { '@type': 'Thing', name: 'NVIDIA GeForce RTX 4060 Ti' },
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
    seoTitle: 'Beste GPU unter 500 $ für LLM (2026) + RTX 4060 Ti Preis',
    metaDescription: 'Beste GPU unter 500 $ für lokale LLM-Inferenz: Intel Arc B580 12GB vorn, gebrauchte RTX 3060 12GB für CUDA. Warum die RTX 4060 Ti 16GB nicht mehr passt.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: 'typisch 250–290 $', label: 'Preis der Intel Arc B580 12GB ansehen →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB (gebraucht)', productCategory: 'gpu', priceRange: 'typisch 270–300 $ gebraucht', label: 'Preis der RTX 3060 12GB ansehen →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: 'zuletzt bei rund 562 $ gesehen', label: 'Preis der RTX 4060 Ti 16GB ansehen →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Die beste GPU unter 500 $ für lokale LLM-Inferenz ist jetzt der Intel Arc B580 12GB: 12 GB VRAM für 7B–13B-Modelle mit Q4 und eine der wenigen neuen 12-GB-Karten, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern unter 500 $ gelistet waren (letzte vollständige Preisprüfung: 2026-11-22; aktuelle Angebote prüfen). Wer die CUDA-Toolchain braucht, nimmt eine gebrauchte RTX 3060 12GB. Typische Straßenpreise zum Zeitpunkt der letzten Aktualisierung: 250–290 $ für den Arc B580 und 270–300 $ für eine gebrauchte RTX 3060 12GB (von PromptQuorum nicht laufend erfasst; den aktuellen Preis zeigen die Händler-Links). Die bisherige Siegerin, die RTX 4060 Ti 16GB, ist aus dem Fenster gefallen: Angebote zum Listenpreis waren nicht lieferbar, lieferbare Karten wurden bei der letzten Aktualisierung bei rund 562 $ gesehen. Die neue RTX 3060 12GB wurde bei etwa 474–599 $ gesehen. Marktberichte führen die Preissteigerungen 2026 auf DRAM- und GDDR-Engpässe im Zuge der Nachfrage der KI-Rechenzentren zurück ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Quelle aktualisiert am 2026-10-15). PromptQuorum hat diese Karten nicht gebenchmarkt: Die Geschwindigkeit bei kleinen Modellen hängt vor allem von Speicherbandbreite und Treiber ab. Für 30B-Modell-Fähigkeit ist eine gebrauchte RTX 3090 (24 GB) ein möglicher Weg, mit rund 1.500–1.725 $ in verkauften Angeboten ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Preisstand: 2026-11-23). Preise in US-Dollar; in Deutschland können sie abweichen.**',
    quickAnswerTop: {
      question: 'Welche GPU ist am besten für lokale KI-Modelle unter 500 $?',
      answer: '**Der Intel Arc B580 12GB ist die beste GPU unter 500 $ für lokale LLM-Inferenz.** Seine 12 GB VRAM führen 7B–13B-Modelle mit Q4 aus, er läuft mit Ollama über das SYCL/oneAPI-Backend unter Windows und Linux, und er ist eine der wenigen neuen 12-GB-Karten, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern unter 500 $ gelistet waren (typisch rund 250–290 $; letzte vollständige Preisprüfung: 2026-11-22; aktuelle Angebote prüfen). Eine gebrauchte RTX 3060 12GB (typisch 270–300 $) ist die Zweitwahl, wenn die CUDA-Toolchain gebraucht wird. Die Speicherknappheit 2026 hat den Großteil des Rests dieser Liste aus dem Fenster gehoben. Bei der letzten Aktualisierung sahen wir die RTX 4060 Ti 16GB bei rund 562 $, wenn lieferbar, die neue RTX 3060 12GB bei 474–599 $, die RTX 4070 12GB bei 560–705 $ und die RX 7800 XT 16GB bei etwa 832 $ (typische Straßenpreise, von PromptQuorum nicht laufend erfasst), während die gebrauchte RTX 3090 für rund 1.500–1.725 $ verkauft wurde ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Preisstand: 2026-11-23). Preise in US-Dollar; in Deutschland können sie abweichen.',
      bullets: [
        '**Sieger:** Intel Arc B580 12GB — 12 GB VRAM, typisch 250–290 $ bei der letzten Aktualisierung, eine der wenigen neuen 12-GB-Karten, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern unter 500 $ gelistet waren',
        '**Zweitplatzierte:** RTX 3060 12GB gebraucht (typisch 270–300 $) — günstigster Weg zur vollen CUDA-Toolchain',
        '⚠️ RTX 4060 Ti 16GB: Angebote zum Listenpreis nicht lieferbar, lieferbare Karten bei der letzten Aktualisierung bei rund 562 $ gesehen — keine verlässliche Sub-500-$-Option mehr',
        '⚠️ RTX 3060 12GB neu: bei der letzten Aktualisierung bei 474–599 $ gesehen — besser gebraucht kaufen',
        '⚠️ RTX 3090 gebraucht: rund 1.500–1.725 $ in verkauften Angeboten (InsiderLLM, Preisstand: 2026-11-23) — keine Sub-500-$-Option mehr',
        '⚠️ RTX 4070 12GB: bei der letzten Aktualisierung bei 560–705 $ gesehen — keine Sub-500-$-Option mehr',
        '⚠️ RX 7800 XT 16GB: bei der letzten Aktualisierung bei etwa 832 $ gesehen — keine Sub-500-$-Option mehr',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB gewinnt für die meisten Nutzer: 12 GB VRAM und eine der wenigen neuen 12-GB-Karten, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern unter 500 $ gelistet waren (typisch 250–290 $; letzte vollständige Preisprüfung: 2026-11-22; aktuelle Angebote prüfen)**',
          'RTX 3060 12GB gebraucht (typisch 270–300 $) ist die Zweitplatzierte — günstigster Weg zur vollen CUDA-Toolchain',
          '⚠️ Preisalarm: Die RTX 4060 Ti 16GB, die bisherige Siegerin, war zum Listenpreis nicht lieferbar und wurde bei rund 562 $ gesehen, wenn verfügbar — aus der Sub-500-$-Liste entfernt',
          '⚠️ Preisalarm: Die neue RTX 3060 12GB wurde bei 474–599 $ gesehen — der Gebrauchtmarkt ist der vernünftige Weg zu dieser Karte',
          '⚠️ Preisalarm: Verkaufte Angebote der gebrauchten RTX 3090 liegen bei rund 1.500–1.725 $ (InsiderLLM, Preisstand: 2026-11-23) — aus der Sub-500-$-Liste entfernt',
          '⚠️ Preisalarm: Die RTX 4070 12GB wurde bei 560–705 $ gesehen — aus der Sub-500-$-Liste entfernt',
          '⚠️ Preisalarm: Die RX 7800 XT 16GB wurde bei etwa 832 $ gesehen — aus der Sub-500-$-Liste entfernt',
          'Warum sich die Preise bewegt haben: Marktberichte führen die Steigerungen auf DRAM- und GDDR-Engpässe im Zuge der Nachfrage der KI-Rechenzentren zurück (siehe InsiderLLM-Tracker). Die Hardware hat sich nicht verändert, nur was sie kostet. Preise, die nicht von InsiderLLM stammen, sind typische Straßenpreise zum Zeitpunkt der letzten Aktualisierung und von PromptQuorum nicht laufend erfasst.',
          'PromptQuorum hat diese Karten nicht gebenchmarkt; bei kleinen Modellen hängt die Geschwindigkeit vor allem von Speicherbandbreite und Treiber ab',
          '30B-Modelle oder mehr gewünscht? Eine gebrauchte RTX 3090 (24 GB) ist ein möglicher Weg, mit rund 1.500–1.725 $ in verkauften Angeboten (InsiderLLM, Preisstand: 2026-11-23)',
          'Alle drei GPUs auf dieser Liste laufen mit Ollama und llama.cpp; LM Studio auf dem Arc B580 war bei der letzten Aktualisierung noch in der Beta (aktuellen Stand prüfen)',
        ],
      },
      rankedList: {
        title: 'Beste GPUs für LLM-Inferenz unter 500 $ — Rangfolge',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Der Intel Arc B580 12GB ist die beste GPU unter 500 $ für lokale LLM-Inferenz, weil er nach der Speicherknappheit 2026 eine der wenigen neuen 12-GB-Karten ist, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern unter 500 $ gelistet waren (letzte vollständige Preisprüfung: 2026-11-22).',
          },
          {
            type: 'plain-terms',
            text: 'VRAM bestimmt, welche KI-Modelle du lokal ausführen kannst. 16 GB reichen für 14B-Modelle. 24 GB (gebrauchte RTX 3090) ermöglichen 30B-Modelle. Unter 12 GB bist du auf 7B-Modelle beschränkt.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — Bestes Gesamtpaket',
            content: '**Der Intel Arc B580 12GB ist die beste GPU unter 500 $ für lokale LLM-Inferenz — nicht zuletzt, weil er zu den wenigen Karten dieser Art gehört, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern in diesem Fenster gelistet waren (letzte vollständige Preisprüfung: 2026-11-22; aktuelle Angebote prüfen).** Er lag typisch bei etwa 250–290 $ bei großen US-Händlern (typischer Straßenpreis, von PromptQuorum nicht laufend erfasst; die Händler-Links zeigen den aktuellen Preis), während die Speicherknappheit 2026 die meisten neuen NVIDIA-Karten, die früher diese Liste füllten, über 500 $ gehoben hat. Ollama läuft über das SYCL/oneAPI-Backend unter Linux und Windows. PromptQuorum hat ihn nicht gebenchmarkt; Arc-Ergebnisse schwanken je nach Modell, Treiber und Backend und können hinter vergleichbaren NVIDIA-Karten zurückliegen. Die 12-GB-Grenze beschränkt auf Modelle bis etwa 14B mit Q4 — ein 14B mit Q8 passt nicht. Intels Treiberunterstützung hat sich seit dem Start deutlich verbessert, bleibt aber in der Breite der Werkzeuge hinter CUDA zurück: Ollama und llama.cpp laufen gut, LoRA-Fine-Tuning bleibt umständlich.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB bei Amazon.de', url: 'https://www.amazon.de/s?k=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB gebraucht — Beste CUDA-Option',
            content: 'Die NVIDIA GeForce RTX 3060 12GB ist der günstigste Weg zur vollen CUDA-Toolchain — aber gebraucht kaufen. Neue Karten wurden bei der letzten Aktualisierung bei 474–599 $ gesehen und liegen damit an oder über der 500-$-Grenze, um die es auf dieser Seite geht. Gebrauchte kosteten typisch 270–300 $ (typische Straßenpreise, von PromptQuorum nicht laufend erfasst; die Händler-Links zeigen den aktuellen Preis). Ihre 12 GB GDDR6 führen 7B–13B-Modelle mit Q4/Q8 komfortabel aus; ein 14B mit Q8 passt nicht, ein 14B mit Q4 (~8,5 GB) schon. Die Geschwindigkeit bei kleinen Modellen hängt vor allem von Speicherbandbreite und Treiber ab; PromptQuorum hat diese Karte nicht gebenchmarkt. Die volle CUDA-Toolchain bedeutet, dass Ollama, LM Studio, vLLM und LoRA-Fine-Tuning unter Windows und Linux sofort laufen (Stand der letzten Aktualisierung; die Dokumentation des jeweiligen Projekts prüfen) — das Einzige, was der Arc B580 nicht bieten kann.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB bei Amazon.de', url: 'https://www.amazon.de/s?k=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — Beste Karte, falls zum Listenpreis zu finden',
            content: 'Die RTX 4060 Ti 16GB ist weiterhin die beste *Hardware* dieser Liste und war bis zur Speicherknappheit 2026 die Siegerin dieser Seite. Ihre 16 GB GDDR6 führen Qwen3 14B und Mistral 12B mit Q4 komplett in-GPU aus — und mit Q8 ohne Auslagern — bei 165 W TDP; empfohlene Netzteilleistung und Anschlüsse laut Hersteller für das genaue Modell prüfen. Das Problem ist, eine zu bekommen. Angebote zum Listenpreis waren bei den großen Händlern bei der letzten Aktualisierung nicht lieferbar, lieferbare Karten wurden bei rund 562 $ gesehen (Angebote, die wir bei der letzten Aktualisierung sahen; aktuelle Händlerpreise prüfen). Findet sich eine zum Listenpreis oder nahe daran, ist sie ein starker Kauf; zum höheren Straßenpreis liegt sie außerhalb des Budgets, für das diese Seite geschrieben ist. Beobachten, aber nicht darauf bauen.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB bei Amazon.de', url: 'https://www.amazon.de/s?k=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU-Vergleich — Typische Preise und Kapazität',
        content: 'PromptQuorum hat diese Karten nicht gebenchmarkt; die Tabelle nennt daher nur VRAM, typischen Preis und Modellkapazität. Die Geschwindigkeit bei kleinen Modellen hängt vor allem von Speicherbandbreite, Treiber und Backend ab; für von Entwicklern gemeldete Werte zu High-End-Karten siehe das [llama.cpp-Leistungsranking](https://github.com/ggml-org/llama.cpp/discussions/15013) (von Entwicklern gemeldet; es listet nur High-End-Karten). Die Preise sind typische Straßenpreise zum Zeitpunkt der letzten Aktualisierung, von PromptQuorum nicht laufend erfasst; den aktuellen Preis zeigen die Händler-Links. Preise in US-Dollar; in Deutschland können sie abweichen. Ausgeschlossen, weil an oder über der 500-$-Grenze: gebrauchte RTX 3090 (rund 1.500–1.725 $ in verkauften Angeboten, InsiderLLM, Preisstand: 2026-11-23), RTX 4070 12GB (560–705 $), RX 7800 XT 16GB (etwa 832 $) und neue RTX 3060 12GB (474–599 $).',
        columns: ['GPU', 'VRAM', 'Typischer Preis', 'Max. Modell'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', 'VRAM': '12 GB', 'Typischer Preis': '250–290 $', 'Max. Modell': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB (gebraucht)', 'VRAM': '12 GB', 'Typischer Preis': '270–300 $', 'Max. Modell': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', 'VRAM': '16 GB', 'Typischer Preis': 'bei rund 562 $ gesehen, wenn lieferbar', 'Max. Modell': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'Wie wir diese GPUs ausgewählt haben',
        content: 'Auswahlkriterien: neu oder gebraucht für unter 500 $ erhältlich; unterstützt von mindestens einer wichtigen Inferenz-Laufzeitumgebung (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (8-GB-Karten ausgeschlossen). PromptQuorum hat diese Karten nicht gebenchmarkt. Die Preisspannen sind Näherungswerte und wurden zum Zeitpunkt der letzten Aktualisierung mit öffentlichen Angeboten abgeglichen; PromptQuorum erfasst sie nicht laufend, den aktuellen Preis zeigen die Händler-Links. Die Preise wurden bei der letzten Aktualisierung aus öffentlichen Händlerangeboten abgelesen. Diese vollständige Preisprüfung erfolgte am 2026-11-22; seitdem wurde nur der Wert der gebrauchten RTX 3090 aktualisiert (Stand 2026-11-23). Mehrere Karten sind wegen des Preises aus der Liste geflogen: Die gebrauchte RTX 3090 (24 GB) liegt in verkauften Angeboten bei rund 1.500–1.725 $ ([InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), Preisstand: 2026-11-23); die RTX 4070 12GB wurde bei 560–705 $ gesehen, die RX 7800 XT 16GB bei etwa 832 $ und die neue RTX 3060 12GB bei 474–599 $. Die RTX 4060 Ti 16GB bleibt in der Liste, aber mit Warnhinweis — Angebote zum Listenpreis waren nicht lieferbar, lieferbare Karten wurden bei rund 562 $ gesehen. Marktberichte führen die Steigerungen auf DRAM- und GDDR-Engpässe im Zuge der Nachfrage der KI-Rechenzentren zurück, wobei die RTX 5090 neu bei rund 4.500–4.700 $ gegenüber 1.999 $ UVP liegt und die RTX 5080 bei 1.200–1.600 $ gegenüber 999 $ (InsiderLLM-Tracker, Quelle aktualisiert am 2026-10-15). Die Geschwindigkeit bei kleinen Modellen hängt vor allem von Speicherbandbreite, Treiber und Backend ab; das von Entwicklern gemeldete [llama.cpp-Ranking](https://github.com/ggml-org/llama.cpp/discussions/15013) listet nur High-End-Karten.',
      },
      vramGuide: {
        title: 'VRAM-Anforderungen nach Modellgröße',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM-Anforderungen: 7B-Modell benötigt ~4–5 GB (Q4) oder ~7–8 GB (Q8); 14B-Modell benötigt ~8–9 GB (Q4) oder ~14–15 GB (Q8); 30B-Modell benötigt ~18–20 GB (Q4); 70B-Modell benötigt ~40–42 GB (Q4).',
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
          '14B-Modell mit Q8: ~14 GB VRAM — braucht eine Karte ab 16 GB, etwa die RTX 4060 Ti 16GB oder eine gebrauchte RTX 3090; beide liegen inzwischen über 500 $',
          '30B-Modell mit Q4: ~18 GB VRAM — braucht eine 24-GB-Karte, etwa eine gebrauchte RTX 3090',
          '70B-Modell mit Q4: ~40 GB — erfordert zwei GPUs oder CPU-Offloading',
        ],
      },
      decisionMatrix: {
        title: 'Welche GPU solltest du kaufen?',
        content: 'Nutze diesen Entscheidungsleitfaden je nach Haupteinsatzzweck:',
        items: [
          '**Bester Allrounder unter 500 $** → Intel Arc B580 12GB (typisch 250–290 $ bei der letzten Aktualisierung). Eine der wenigen neuen 12-GB-Karten, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern unter 500 $ gelistet waren (letzte vollständige Preisprüfung: 2026-11-22; aktuelle Angebote prüfen). 7B–13B-Modelle mit Q4, Ollama über SYCL unter Windows und Linux.',
          '**Günstigste funktionierende CUDA-Karte** → RTX 3060 12GB gebraucht (typisch 270–300 $). Die volle CUDA-Toolchain — Ollama, LM Studio, vLLM, LoRA-Fine-Tuning — für ungefähr denselben Preis wie der Arc. Gebraucht kaufen: Neu wurde sie bei 474–599 $ gesehen.',
          '**Beste Hardware, falls zum Listenpreis zu finden** → RTX 4060 Ti 16GB. Zum Listenpreis ist sie ein starker Kauf und führt 14B mit Q8 in-GPU aus. Angebote zum Listenpreis waren aber nicht lieferbar, lieferbare Karten wurden bei der letzten Aktualisierung bei rund 562 $ gesehen — außerhalb des Budgets dieser Seite.',
          '**30B-Modell-Fähigkeit gewünscht?** → Eine gebrauchte RTX 3090 (24 GB) ist ein möglicher Weg, doch verkaufte Angebote liegen bei rund 1.500–1.725 $ (InsiderLLM, Preisstand: 2026-11-23) — weit über 500 $.',
          '**Windows-Nutzer, ohne Aufwand** → RTX 3060 12GB gebraucht. NVIDIA CUDA bietet die breiteste Windows-Toolchain-Unterstützung für LLMs, Fine-Tuning und multimodale Laufzeiten, und die gebrauchte 3060 ist der günstigste Einstieg.',
          '**Mehr als 12 GB für einen Test nötig?** Statt das Budget zu sprengen, lässt sich [eine 24-GB-Karte für wenige Dollar mieten](/de/power-local-llm/best-cloud-gpu-providers), um zu prüfen, ob sich die größeren Modelle lohnen.',
        ],
      },
      softwareCompat: {
        title: 'Software-Kompatibilität nach GPU',
        content: 'Alle drei GPUs laufen mit Ollama und llama.cpp. Unterschiede zeigen sich bei fortgeschrittenen Tools (Stand der letzten Aktualisierung; die Unterstützung ändert sich schnell, daher die Dokumentation des jeweiligen Projekts prüfen):',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA-Fine-Tuning'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ Beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ teilweise', 'CUDA-Fine-Tuning': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA-Fine-Tuning': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA-Fine-Tuning': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Stromverbrauch und Systemanforderungen',
        content: 'Der Stromverbrauch der GPU bestimmt, welches Netzteil und Gehäuse nötig sind. LLMs halten die GPU oft bei 80–100 % Auslastung — anders als beim Gaming gibt es kaum Leerlauf-Frames. Empfohlene Netzteilleistung und Anschlüsse laut Hersteller für das genaue Modell prüfen.',
        items: [
          'Intel Arc B580 12GB: 190 W — typisch ein 650-W+-Netzteil; Standard-8-Pin; Herstellerempfehlung prüfen',
          'RTX 3060 12GB: 170 W — typisch ein 550-W+-Netzteil; ein 8-Pin-Anschluss; Herstellerempfehlung prüfen',
          'RTX 4060 Ti 16GB: 165 W — typisch ein 550-W+-Netzteil; ein 8-Pin-Anschluss; Herstellerempfehlung prüfen',
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
            a: 'Ja, mit Einschränkungen. Ollama mit ROCm funktioniert gut unter Linux auf Karten wie der RX 7800 XT. Windows-ROCm-Support hat sich verbessert, erfordert aber weiterhin manuelle Schritte, und Fine-Tuning (LoRA) auf AMD-Hardware wurde bei der letzten Aktualisierung von den meisten Tools nicht unterstützt; die Unterstützung ändert sich schnell, daher die Dokumentation des jeweiligen Projekts prüfen. Hinweis zum Preis: Die RX 7800 XT 16GB wurde bei etwa 832 $ gesehen und passt daher nicht mehr in ein Sub-500-$-Budget — für diese Preisklasse sind eine gebrauchte RTX 3060 12GB (typisch 270–300 $, CUDA) oder ein Intel Arc B580 12GB (typisch 250–290 $) die Wahl. Für Windows oder Fine-Tuning ist NVIDIA meist die unkompliziertere Wahl.',
          },
          {
            q: 'Kann ich eine gebrauchte RTX 3090 noch für unter 500 $ kaufen?',
            a: 'Nein. Der [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (Preisstand: 2026-11-23) verzeichnet verkaufte Angebote der gebrauchten RTX 3090 bei rund 1.500–1.725 $ (Preise in US-Dollar; in Deutschland können sie abweichen). Damit ist sie keine Sub-500-$-Option mehr. Das sind Angebotsdaten, keine Preisauskunft. Die 24 GB VRAM machen sie weiterhin interessant: Sie ist ein 24-GB-Weg zu Modellen der 30B-Klasse, die in Q4 etwa 18–20 GB brauchen.',
          },
          {
            q: 'Was ist mit Intel-Arc-GPUs für KI?',
            a: 'Der Intel Arc B580 12GB ist 2026 die beste Arc-Option — und nachdem die Speicherknappheit das NVIDIA-Feld neu bepreist hat, insgesamt die beste Karte auf dieser Seite. Er führt Ollama über das SYCL-Backend unter Windows und Linux aus. PromptQuorum hat ihn nicht gebenchmarkt; Arc-Ergebnisse schwanken je nach Modell, Treiber und Backend und können hinter vergleichbaren NVIDIA-Karten zurückliegen. Das Preis-Leistungs-Verhältnis ist inzwischen stark: 12 GB VRAM für typisch 250–290 $ (aktuelle Angebote prüfen), während die neue RTX 3060 12GB bei 474–599 $ gesehen wurde. Die Hauptbeschränkung bleibt die Software — bei der letzten Aktualisierung unterstützten vLLM, Fine-Tuning-Werkzeuge und multimodale Laufzeiten Arc noch nicht gut. Wer LoRA-Fine-Tuning braucht, kauft stattdessen eine gebrauchte RTX 3060 12GB. Die Unterstützung ändert sich schnell; die Dokumentation des jeweiligen Projekts prüfen.',
          },
          {
            q: 'Kann ich ein 70B-Modell auf einer einzigen GPU unter 500 $ ausführen?',
            a: 'Nicht mit voller Geschwindigkeit. Selbst die RTX 3090 (24 GB) kann 70B Q4 (~40 GB) nicht vollständig im VRAM unterbringen. Mit CPU-Offloading über llama.cpp lässt sich das Modell zwischen GPU-VRAM und System-RAM aufteilen, aber die Erzeugung läuft dann weit unter der Geschwindigkeit eines Modells, das ins VRAM passt, was interaktive Nutzung unpraktisch macht. Für 70B-Modelle auf GPUs brauchst du zwei 24-GB-Karten (2× RTX 3090 mit insgesamt 48 GB) oder Cloud-Inferenz.',
          },
          {
            q: 'Machen neuere GPUs (RTX 5060 Ti) diese Karten überflüssig?',
            a: 'Die RTX 5060 Ti 16GB ist erschienen — und sie hat die RTX 4060 Ti nicht unterboten, sondern das Gegenteil. Für Amazon US wurden Händlerangebote ab 679 $ gemeldet ([Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/), 2026-01-27), deutlich über Liste — in dieselbe Richtung wie die Neubepreisung dieser ganzen Liste durch die Speicherknappheit. Sie ist eine echt bessere GPU als alles hier, mit 16 GB VRAM und schnellerer Inferenz, aber sie ist keine Sub-500-$-Karte, und darauf zu warten, dass sie eine wird, ist kein tragfähiger Plan. Kauf nach dem, was jetzt verfügbar ist: Intel Arc B580 12GB oder eine gebrauchte RTX 3060 12GB, wenn CUDA gebraucht wird (aktuelle Angebote prüfen).',
          },
          {
            q: 'Was kostet eine gebrauchte RTX 4060 Ti 16GB?',
            a: 'Lieferbare Neukarten wurden bei der letzten Aktualisierung bei rund 562 $ gesehen; die Gebrauchtangebote, die wir bei der letzten Aktualisierung sahen, lagen grob im Bereich von 420–480 $ auf eBay (für den heutigen Preis verkaufte Angebote prüfen), abhängig von Zustand und Restgarantie. Die Wiederverkaufspreise scheinen dem Anstieg der Neupreise gefolgt zu sein. Sie ist eine der wenigen Karten, bei denen gebraucht keine große Ersparnis bedeutet, weil das Angebot an Neukarten zum Listenpreis versiegt ist. Verkaufte (nicht aktive) eBay-Angebote prüfen und sicherstellen, dass es die 16-GB-Variante ist — es gibt auch eine RTX 4060 Ti mit 8 GB.',
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
          acceptedAnswer: { '@type': 'Answer', text: '8 GB VRAM beschränken auf 7B-Modelle bei Q4. Für sinnvolle lokale LLM-Nutzung 2026 sind 12 GB das Minimum, 16 GB empfohlen.' },
        },
        { '@type': 'Question', name: 'Kann ich eine gebrauchte RTX 3090 noch für unter 500 $ kaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — der InsiderLLM-Tracker (Preisstand: 2026-11-23) verzeichnet verkaufte Angebote der gebrauchten RTX 3090 bei rund 1.500–1.725 USD. Für 30B-Modell-Fähigkeit ist eine gebrauchte RTX 3090 (24 GB) ein Weg mit 24 GB.' } },
        { '@type': 'Question', name: 'Was ist mit Intel-Arc-GPUs für KI?', acceptedAnswer: { '@type': 'Answer', text: 'Der Intel Arc B580 12GB ist die beste Arc-Option 2026 und inzwischen die beste Karte auf dieser Seite: 12 GB VRAM zu einem typischen Preis von 250–290 $ (aktuelle Angebote prüfen). PromptQuorum hat ihn nicht gebenchmarkt; Arc-Ergebnisse schwanken je nach Modell, Treiber und Backend. Für LoRA-Fine-Tuning stattdessen eine gebrauchte RTX 3060 12GB.' } },
        { '@type': 'Question', name: 'Kann ich ein 70B-Modell auf einer einzigen GPU unter 500 $ ausführen?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht mit voller Geschwindigkeit. Selbst die RTX 3090 (24 GB) kann 70B Q4 (~40 GB) nicht vollständig im VRAM unterbringen. CPU-Offloading liegt weit unter der Geschwindigkeit eines Modells, das ins VRAM passt. Praktische Wege für 70B-Modelle sind zwei 24-GB-GPUs oder Cloud-Inferenz.' } },
        { '@type': 'Question', name: 'Machen neuere GPUs (RTX 5060 Ti) diese Karten überflüssig?', acceptedAnswer: { '@type': 'Answer', text: 'Die RTX 5060 Ti 16GB ist erschienen und hat die RTX 4060 Ti nicht unterboten: Für Amazon US wurden Händlerangebote ab 679 $ gemeldet (Wccftech, 2026-01-27). Sie ist die bessere GPU, aber keine Sub-500-$-Karte.' } },
        { '@type': 'Question', name: 'Was kostet eine gebrauchte RTX 4060 Ti 16GB?', acceptedAnswer: { '@type': 'Answer', text: 'Die Wiederverkaufspreise gebrauchter RTX 4060 Ti 16GB-Karten scheinen den Neupreisen gefolgt zu sein; für den heutigen Preis verkaufte (nicht aktive) eBay-Angebote prüfen, er hängt vom Zustand ab. Achte darauf, dass es die 16-GB-Variante ist — es gibt auch eine mit 8 GB.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste GPUs für LLM-Inferenz unter 500 $ (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'Bestes Gesamtpaket — 12 GB VRAM, eine der wenigen neuen 12-GB-Karten, die bei der letzten Aktualisierung dieser Seite bei großen US-Händlern unter 500 $ gelistet waren' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (gebraucht)', description: 'Beste CUDA-Option — 12 GB VRAM, volle CUDA-Toolchain, am besten gebraucht zu kaufen' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'Beste Hardware, aber Angebote zum Listenpreis waren bei der letzten Aktualisierung nicht lieferbar und lieferbare Karten wurden über 500 $ gesehen' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Beste GPU für LLM-Inferenz unter 500 $ (2026)', datePublished: '2026-05-26', dateModified: '2026-11-27', url: 'https://www.promptquorum.com/de/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'de' },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'Meilleure GPU pour l\'inférence LLM à moins de 500 $ (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-fr.webp',
    seoTitle: 'Meilleure GPU sous 500 $ pour LLM (2026) + prix RTX 4060 Ti',
    metaDescription: 'Meilleure GPU sous 500 $ pour l\'inférence LLM locale : Intel Arc B580 12 Go, RTX 3060 12 Go d\'occasion pour CUDA. Pourquoi la RTX 4060 Ti sort du budget.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12 Go', productCategory: 'gpu', priceRange: 'généralement 250–290 $', label: 'Voir le prix de l\'Intel Arc B580 12 Go →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12 Go (occasion)', productCategory: 'gpu', priceRange: 'généralement 270–300 $ d\'occasion', label: 'Voir le prix de la RTX 3060 12 Go →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16 Go', productCategory: 'gpu', priceRange: 'vue autour de 562 $ lors de la dernière mise à jour', label: 'Voir le prix de la RTX 4060 Ti 16 Go →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**La meilleure GPU sous 500 $ pour l\'inférence LLM locale est désormais l\'Intel Arc B580 12 Go : 12 Go de VRAM pour les modèles 7B–13B en Q4, et l\'une des rares cartes neuves de 12 Go listées sous 500 $ chez les grands revendeurs américains lors de la dernière mise à jour de cette page (dernière vérification complète des prix : 2026-11-22 ; vérifiez les annonces actuelles). Pour la chaîne d\'outils CUDA, une RTX 3060 12 Go d\'occasion est l\'alternative. Prix de rue habituels lors de la dernière mise à jour : 250–290 $ pour l\'Arc B580 et 270–300 $ pour une RTX 3060 12 Go d\'occasion (non suivis par PromptQuorum ; les liens vers les revendeurs donnent le prix du jour). La gagnante précédente, la RTX 4060 Ti 16 Go, est sortie de la fenêtre : les annonces au tarif catalogue étaient en rupture et les cartes en stock ont été vues autour de 562 $ lors de la dernière mise à jour. La RTX 3060 12 Go neuve a été vue à environ 474–599 $. Les rapports de marché attribuent les hausses de 2026 aux pénuries de DRAM et de GDDR liées à la demande des centres de données IA ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), source mise à jour le 2026-10-15). PromptQuorum n\'a pas testé ces cartes : la vitesse sur les petits modèles dépend surtout de la bande passante mémoire et du pilote. Pour la capacité 30B, une voie possible est une RTX 3090 d\'occasion (24 Go), à environ 1 500–1 725 $ en annonces vendues ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), données datées du 2026-11-23). Prix en dollars américains ; en France ils peuvent différer.**',
    quickAnswerTop: {
      question: 'Quelle est la meilleure GPU pour faire tourner des LLMs en local à moins de 500 $ ?',
      answer: '**L\'Intel Arc B580 12 Go est la meilleure GPU sous 500 $ pour l\'inférence LLM locale.** Ses 12 Go de VRAM font tourner les modèles 7B–13B en Q4, il fonctionne avec Ollama via le backend SYCL/oneAPI sous Windows et Linux, et c\'est l\'une des rares cartes neuves de 12 Go listées sous 500 $ chez les grands revendeurs américains lors de la dernière mise à jour de cette page (généralement autour de 250–290 $ ; dernière vérification complète des prix : 2026-11-22 ; vérifiez les annonces actuelles). Une RTX 3060 12 Go d\'occasion (généralement 270–300 $) est l\'alternative si vous avez besoin de la chaîne CUDA. La pénurie de mémoire de 2026 a sorti la plupart du reste de cette liste de la fenêtre. Lors de la dernière mise à jour, nous avons vu la RTX 4060 Ti 16 Go autour de 562 $ quand elle était en stock, la RTX 3060 12 Go neuve à 474–599 $, la RTX 4070 12 Go à 560–705 $ et la RX 7800 XT 16 Go à environ 832 $ (prix de rue habituels, non suivis par PromptQuorum), tandis que la RTX 3090 d\'occasion se vendait à environ 1 500–1 725 $ ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), données datées du 2026-11-23). Prix en dollars américains ; en France ils peuvent différer.',
      bullets: [
        '**Gagnante :** Intel Arc B580 12 Go — 12 Go VRAM, généralement 250–290 $ lors de la dernière mise à jour, l\'une des rares cartes neuves de 12 Go listées sous 500 $ chez les grands revendeurs américains lors de la dernière mise à jour de cette page',
        '**Alternative :** RTX 3060 12 Go d\'occasion (généralement 270–300 $) — la voie la moins chère vers la chaîne CUDA complète',
        '⚠️ RTX 4060 Ti 16 Go : annonces au tarif catalogue en rupture, cartes en stock vues autour de 562 $ lors de la dernière mise à jour — plus une option fiable sous 500 $',
        '⚠️ RTX 3060 12 Go neuve : vue à 474–599 $ lors de la dernière mise à jour — achetez-la d\'occasion',
        '⚠️ RTX 3090 occasion : environ 1 500–1 725 $ en annonces vendues (InsiderLLM, données datées du 2026-11-23) — plus une option sous 500 $',
        '⚠️ RTX 4070 12 Go : vue à 560–705 $ lors de la dernière mise à jour — plus une option sous 500 $',
        '⚠️ RX 7800 XT 16 Go : vue à environ 832 $ lors de la dernière mise à jour — plus une option sous 500 $',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**L\'Intel Arc B580 12 Go gagne pour la plupart des utilisateurs : 12 Go VRAM et l\'une des rares cartes neuves de 12 Go listées sous 500 $ chez les grands revendeurs américains lors de la dernière mise à jour de cette page (généralement 250–290 $ ; dernière vérification complète des prix : 2026-11-22 ; vérifiez les annonces actuelles)**',
          'La RTX 3060 12 Go d\'occasion (généralement 270–300 $) est l\'alternative — la voie la moins chère vers la chaîne CUDA complète',
          '⚠️ Alerte prix : la RTX 4060 Ti 16 Go, gagnante précédente, était en rupture au tarif catalogue et a été vue autour de 562 $ quand disponible — retirée de la liste sous 500 $',
          '⚠️ Alerte prix : la RTX 3060 12 Go neuve a été vue à 474–599 $ — le marché de l\'occasion est la voie raisonnable pour cette carte',
          '⚠️ Alerte prix : les annonces vendues de RTX 3090 d\'occasion tournent autour de 1 500–1 725 $ (InsiderLLM, données datées du 2026-11-23) — retirée de la liste sous 500 $',
          '⚠️ Alerte prix : la RTX 4070 12 Go a été vue à 560–705 $ — retirée de la liste sous 500 $',
          '⚠️ Alerte prix : la RX 7800 XT 16 Go a été vue à environ 832 $ — retirée de la liste sous 500 $',
          'Pourquoi les prix ont bougé : les rapports de marché attribuent les hausses aux pénuries de DRAM et de GDDR liées à la demande des centres de données IA (voir le suivi InsiderLLM). Le matériel n\'a pas changé, seulement son prix. Les prix qui ne viennent pas d\'InsiderLLM sont des prix de rue habituels lors de la dernière mise à jour, non suivis par PromptQuorum.',
          'PromptQuorum n\'a pas testé ces cartes ; sur les petits modèles, la vitesse dépend surtout de la bande passante mémoire et du pilote',
          'Besoin de modèles 30B ou plus ? Une voie possible est une RTX 3090 d\'occasion (24 Go), à environ 1 500–1 725 $ en annonces vendues (InsiderLLM, données datées du 2026-11-23)',
          'Les trois GPU de cette liste fonctionnent avec Ollama et llama.cpp ; LM Studio sur l\'Arc B580 était encore en bêta lors de la dernière mise à jour (vérifiez l\'état actuel)',
        ],
      },
      rankedList: {
        title: 'Meilleures GPU pour l\'inférence LLM sous 500 $ — Classement',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'L\'Intel Arc B580 12 Go est la meilleure GPU sous 500 $ pour l\'inférence LLM locale car c\'est l\'une des rares cartes neuves de 12 Go listées sous 500 $ chez les grands revendeurs américains lors de la dernière mise à jour de cette page (dernière vérification complète des prix : 2026-11-22), après la pénurie de mémoire de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Le VRAM de la GPU détermine quels modèles d\'IA vous pouvez faire tourner. 16 Go suffisent pour les modèles 14B. 24 Go (RTX 3090 occasion) permettent les modèles 30B. En dessous de 12 Go, vous êtes limité aux modèles 7B.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12 Go — Meilleur choix global',
            content: '**L\'Intel Arc B580 12 Go est la meilleure GPU sous 500 $ pour l\'inférence LLM locale, en grande partie parce que c\'est l\'une des rares cartes de ce type listées dans cette fenêtre chez les grands revendeurs américains lors de la dernière mise à jour de cette page (dernière vérification complète des prix : 2026-11-22 ; vérifiez les annonces actuelles).** Elle se situait généralement autour de 250–290 $ chez les grands revendeurs américains (prix de rue habituel, non suivi par PromptQuorum ; les liens vers les revendeurs donnent le prix du jour), alors que la plupart des cartes NVIDIA neuves qui occupaient cette liste étaient passées au-dessus de 500 $ avec la pénurie de mémoire de 2026. Elle fait tourner Ollama via le backend SYCL/oneAPI sous Linux et Windows. PromptQuorum ne l\'a pas testée ; les résultats d\'Arc varient selon le modèle, le pilote et le backend et peuvent rester en retrait de cartes NVIDIA comparables. Le plafond de 12 Go de VRAM vous limite aux modèles jusqu\'à environ 14B en Q4 — elle n\'accueillera pas un 14B en Q8. Le support pilotes d\'Intel s\'est nettement amélioré depuis le lancement, mais reste en retrait de CUDA sur l\'étendue de l\'outillage : attendez-vous à ce qu\'Ollama et llama.cpp fonctionnent bien, et à ce que le fine-tuning LoRA soit pénible.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12 Go d\'occasion — Meilleure option CUDA',
            content: 'La NVIDIA GeForce RTX 3060 12 Go est la voie la moins chère vers la chaîne d\'outils CUDA complète, mais achetez-la **d\'occasion**. Les cartes neuves ont été vues à 474–599 $ lors de la dernière mise à jour, ce qui place la carte neuve au plafond de 500 $ dont parle cette page, voire au-dessus. Les cartes d\'occasion coûtaient généralement 270–300 $ (prix de rue habituels, non suivis par PromptQuorum ; les liens vers les revendeurs donnent le prix du jour). Ses 12 Go GDDR6 font tourner les modèles 7B–13B en Q4/Q8 confortablement ; elle ne peut pas accueillir un 14B en Q8, mais un 14B en Q4 (~8,5 Go) passe. La vitesse sur les petits modèles dépend surtout de la bande passante mémoire et du pilote, et PromptQuorum n\'a pas testé cette carte. La chaîne CUDA complète signifie qu\'Ollama, LM Studio, vLLM et le fine-tuning LoRA fonctionnent d\'emblée sous Windows et Linux (lors de la dernière mise à jour ; consultez la documentation de chaque projet) — la seule chose que l\'Arc B580 ne peut pas égaler.',
            affiliateLinks: [
              { label: 'RTX 3060 12 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16 Go — La meilleure carte, si vous la trouvez au tarif catalogue',
            content: 'La RTX 4060 Ti 16 Go reste le meilleur *matériel* de cette liste et fut la gagnante de cette page jusqu\'à la pénurie de mémoire de 2026. Ses 16 Go GDDR6 font tourner Qwen3 14B et Mistral 12B en Q4 entièrement en GPU — et en Q8 sans swap — pour un TDP de 165 W ; vérifiez la puissance d\'alimentation et les connecteurs recommandés par le fabricant pour votre modèle exact. Le problème est d\'en acheter une. Les annonces au tarif catalogue étaient en rupture chez les grands revendeurs lors de la dernière mise à jour, et les cartes en stock ont été vues autour de 562 $ (annonces vues lors de la dernière mise à jour ; vérifiez les prix actuels chez les revendeurs). Si vous en trouvez une au tarif catalogue ou proche, c\'est un achat solide ; au prix de rue plus élevé, elle sort du budget pour lequel cette page est écrite. À surveiller, sans bâtir de plan dessus.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparatif de GPU — Prix habituels et capacité',
        content: 'PromptQuorum n\'a pas testé ces cartes ; ce tableau ne donne donc que la VRAM, le prix habituel et la capacité en modèles. La vitesse sur les petits modèles dépend surtout de la bande passante mémoire, du pilote et du backend ; pour des chiffres rapportés par des développeurs sur des cartes haut de gamme, voir le [classement de performances de llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013) (rapporté par des développeurs ; il ne liste que des cartes haut de gamme). Les prix sont des prix de rue habituels lors de la dernière mise à jour, non suivis par PromptQuorum ; les liens vers les revendeurs donnent le prix du jour. Prix en dollars américains ; en France ils peuvent différer. Exclues car au plafond de 500 $ ou au-dessus : RTX 3090 d\'occasion (environ 1 500–1 725 $ en annonces vendues, InsiderLLM, données datées du 2026-11-23), RTX 4070 12 Go (560–705 $), RX 7800 XT 16 Go (environ 832 $) et RTX 3060 12 Go neuve (474–599 $).',
        columns: ['GPU', 'VRAM', 'Prix habituel', 'Modèle max'],
        rows: [
          { 'GPU': 'Intel Arc B580 12 Go ★', 'VRAM': '12 Go', 'Prix habituel': '250–290 $', 'Modèle max': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12 Go (occasion)', 'VRAM': '12 Go', 'Prix habituel': '270–300 $', 'Modèle max': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16 Go', 'VRAM': '16 Go', 'Prix habituel': 'vue autour de 562 $ en stock', 'Modèle max': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'Comment nous avons sélectionné ces GPU',
        content: 'Critères de sélection : disponibles neuves ou d\'occasion sous 500 $ ; compatibles avec au moins un runtime d\'inférence majeur (Ollama, LM Studio, llama.cpp) ; VRAM ≥ 12 Go (cartes 8 Go exclues). PromptQuorum n\'a pas testé ces cartes. Les fourchettes de prix sont approximatives et ont été comparées à des annonces publiques lors de la dernière mise à jour ; PromptQuorum ne les suit pas, les liens vers les revendeurs donnent le prix du jour. Les prix ont été relevés dans les annonces publiques des revendeurs lors de la dernière mise à jour. Cette vérification complète date du 2026-11-22 ; depuis, seule la valeur de la RTX 3090 d\'occasion a été actualisée (datée du 2026-11-23). Plusieurs cartes sont sorties de la liste sur le prix : la RTX 3090 d\'occasion (24 Go) se situe autour de 1 500–1 725 $ en annonces vendues ([suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), données datées du 2026-11-23) ; la RTX 4070 12 Go a été vue à 560–705 $, la RX 7800 XT 16 Go à environ 832 $ et la RTX 3060 12 Go neuve à 474–599 $. La RTX 4060 Ti 16 Go est conservée mais signalée — les annonces au tarif catalogue étaient en rupture et les cartes en stock ont été vues autour de 562 $. Les rapports de marché attribuent les hausses aux pénuries de DRAM et de GDDR liées à la demande des centres de données IA, la RTX 5090 neuve se situant autour de 4 500–4 700 $ pour un prix conseillé de 1 999 $ et la RTX 5080 à 1 200–1 600 $ pour 999 $ (suivi InsiderLLM, source mise à jour le 2026-10-15). La vitesse sur les petits modèles dépend surtout de la bande passante mémoire, du pilote et du backend ; le [classement llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013), rapporté par des développeurs, ne liste que des cartes haut de gamme.',
      },
      vramGuide: {
        title: 'Besoins en VRAM selon la taille du modèle',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Besoins en VRAM : un modèle 7B nécessite ~4–5 Go (Q4) ou ~7–8 Go (Q8) ; un modèle 14B nécessite ~8–9 Go (Q4) ou ~14–15 Go (Q8) ; un modèle 30B nécessite ~18–20 Go (Q4) ; un modèle 70B nécessite ~40–42 Go (Q4).',
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
          'Modèle 14B en Q8 : ~14 Go de VRAM — il faut 16 Go ou plus, p. ex. la RTX 4060 Ti 16 Go ou la RTX 3090 (occasion)',
          'Modèle 30B en Q4 : ~18 Go de VRAM — il faut une carte de 24 Go, p. ex. une RTX 3090 d\'occasion',
          'Modèle 70B en Q4 : ~40 Go — nécessite deux GPU ou un offloading CPU',
        ],
      },
      decisionMatrix: {
        title: 'Quelle GPU devriez-vous acheter ?',
        content: 'Utilisez ce guide de décision selon votre usage principal :',
        items: [
          '**Meilleur choix global sous 500 $** → Intel Arc B580 12 Go (généralement 250–290 $ lors de la dernière mise à jour). L\'une des rares cartes neuves de 12 Go listées sous 500 $ chez les grands revendeurs américains lors de la dernière mise à jour de cette page (dernière vérification complète des prix : 2026-11-22 ; vérifiez les annonces actuelles). Modèles 7B–13B en Q4, Ollama via SYCL sous Windows et Linux.',
          '**Carte CUDA la moins chère qui fonctionne** → RTX 3060 12 Go d\'occasion (généralement 270–300 $). La chaîne CUDA complète — Ollama, LM Studio, vLLM, fine-tuning LoRA — pour à peu près le même prix que l\'Arc. Achetez-la d\'occasion : la neuve a été vue à 474–599 $.',
          '**Meilleur matériel, si vous le trouvez au tarif catalogue** → RTX 4060 Ti 16 Go. Au tarif catalogue c\'est un achat solide, faisant tourner 14B en Q8 en GPU. Mais les annonces au tarif catalogue étaient en rupture et les cartes en stock ont été vues autour de 562 $ lors de la dernière mise à jour, hors du budget de cette page.',
          '**Besoin de la capacité 30B ?** → Une voie possible est une RTX 3090 d\'occasion (24 Go), mais les annonces vendues se situent autour de 1 500–1 725 $ (InsiderLLM, données datées du 2026-11-23), bien au-dessus de 500 $.',
          '**Utilisateur Windows, sans complications** → RTX 3060 12 Go d\'occasion. NVIDIA CUDA offre le support Windows le plus large pour les LLM, le fine-tuning et les runtimes multimodaux, et la 3060 d\'occasion est l\'entrée la moins chère.',
          '**Besoin de plus de 12 Go pour un test ?** Plutôt que de dépasser votre budget, vous pouvez [louer une carte de 24 Go pour quelques dollars](/fr/power-local-llm/best-cloud-gpu-providers) et voir si les modèles plus grands en valent la peine.',
        ],
      },
      softwareCompat: {
        title: 'Compatibilité logicielle par GPU',
        content: 'Les trois GPU font tourner Ollama et llama.cpp. Les différences apparaissent sur les outils avancés (support lors de la dernière mise à jour ; il évolue vite, consultez la documentation de chaque projet) :',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'Intel Arc B580 12 Go', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ bêta', vLLM: '❌', 'Text Gen WebUI': '⚠️ partiel', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 3060 12 Go', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'RTX 4060 Ti 16 Go', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Consommation électrique et exigences système',
        content: 'La consommation de la GPU détermine l\'alimentation et le boîtier nécessaires. Faire tourner des LLM maintient souvent la GPU à 80–100 % d\'utilisation — contrairement au jeu vidéo, il y a peu d\'images inactives. Vérifiez la puissance d\'alimentation et les connecteurs recommandés par le fabricant pour votre modèle exact.',
        items: [
          'Intel Arc B580 12 Go : 190 W — généralement une alimentation 650 W+ ; 8 broches standard ; vérifiez la recommandation du fabricant',
          'RTX 3060 12 Go : 170 W — généralement une alimentation 550 W+ ; un connecteur 8 broches ; vérifiez la recommandation du fabricant',
          'RTX 4060 Ti 16 Go : 165 W — généralement une alimentation 550 W+ ; un connecteur 8 broches ; vérifiez la recommandation du fabricant',
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
            a: 'Non. Le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (données datées du 2026-11-23) relève des annonces vendues de RTX 3090 d\'occasion autour de 1 500–1 725 $ USD (non converti en EUR ; les prix en France peuvent différer), donc ce n\'est plus une option sous 500 $. Ce sont des données d\'annonces, pas un devis. Ses 24 Go de VRAM la gardent intéressante : c\'est une voie à 24 Go vers les modèles de classe 30B, qui demandent environ 18–20 Go en Q4.',
          },
          {
            q: 'Les GPU AMD fonctionnent-elles pour l\'IA locale ?',
            a: 'Oui, avec des nuances. Ollama sous Linux avec ROCm fonctionne bien sur des cartes comme la RX 7800 XT. Le support ROCm sous Windows s\'est amélioré mais nécessite encore des étapes manuelles, et le fine-tuning (LoRA) sur matériel AMD n\'était pas supporté par la plupart des outils lors de la dernière mise à jour ; le support évolue vite, consultez la documentation de chaque projet. Note sur les prix : la RX 7800 XT 16 Go a été vue à environ 832 $, elle ne rentre donc plus dans un budget sous 500 $ — pour cette gamme de prix, une RTX 3060 12 Go d\'occasion (généralement 270–300 $, CUDA) ou une Intel Arc B580 12 Go (généralement 250–290 $) sont les choix. Pour Windows ou le fine-tuning, restez sur NVIDIA.',
          },
          {
            q: 'Qu\'en est-il des GPU Intel Arc pour l\'IA ?',
            a: 'L\'Intel Arc B580 12 Go est la meilleure option Arc en 2026 et, depuis que la pénurie de mémoire a repositionné le camp NVIDIA, la meilleure carte de cette page tout court. Il fait tourner Ollama sous Windows et Linux via le backend SYCL. PromptQuorum ne l\'a pas testé ; les résultats d\'Arc varient selon le modèle, le pilote et le backend et peuvent rester en retrait de cartes NVIDIA comparables. L\'argument prix est désormais fort : 12 Go de VRAM à généralement 250–290 $ (vérifiez les annonces actuelles) alors que la RTX 3060 12 Go neuve a été vue à 474–599 $. La limite principale reste le logiciel — lors de la dernière mise à jour, vLLM, les outils de fine-tuning et les runtimes multimodaux ne prenaient pas bien en charge Arc — donc si vous avez besoin du fine-tuning LoRA, achetez plutôt une RTX 3060 12 Go d\'occasion. Le support évolue vite ; consultez la documentation de chaque projet.',
          },
          {
            q: 'Puis-je faire tourner un modèle 70B sur une seule GPU sous 500 $ ?',
            a: 'Pas à pleine vitesse. Même la RTX 3090 (24 Go) ne peut pas contenir 70B Q4 (~40 Go) entièrement en VRAM. Vous pouvez utiliser l\'offloading CPU avec llama.cpp pour répartir le modèle entre la VRAM et la RAM système, mais la génération tourne alors bien en dessous de la vitesse d\'un modèle qui tient en VRAM, ce qui rend l\'usage interactif peu pratique. Pour faire tourner des modèles 70B sur GPU, il faut deux cartes de 24 Go (2× RTX 3090, soit 48 Go au total) ou de l\'inférence cloud.',
          },
          {
            q: 'Les nouvelles GPU (RTX 5060 Ti) rendront-elles ces cartes obsolètes ?',
            a: 'La RTX 5060 Ti 16 Go est sortie, et elle n\'a pas passé sous la RTX 4060 Ti : c\'est l\'inverse qui s\'est produit. Des annonces de détail à partir de 679 $ ont été signalées sur Amazon US ([Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/), 2026-01-27), bien au-dessus du tarif : dans le même sens que le repositionnement de toute cette liste par la pénurie de mémoire. C\'est une GPU réellement meilleure que tout ce qui figure ici, avec 16 Go de VRAM et une inférence plus rapide, mais ce n\'est pas une carte sous 500 $, et attendre qu\'elle le devienne n\'est pas un plan tenable. Achetez selon ce qui est disponible : l\'Intel Arc B580 12 Go, ou une RTX 3060 12 Go d\'occasion si vous avez besoin de CUDA (vérifiez les annonces actuelles).',
          },
          {
            q: 'Combien coûte une RTX 4060 Ti 16 Go d\'occasion ?',
            a: 'Des cartes neuves ont été vues autour de 562 $ en stock lors de la dernière mise à jour ; les annonces d\'occasion que nous avons vues lors de la dernière mise à jour se situaient dans une fourchette d\'environ 420–480 $ sur eBay (vérifiez les annonces vendues pour le prix du jour), selon l\'état et la garantie restante. Les prix de revente semblent avoir suivi la hausse du neuf. C\'est l\'une des rares cartes où l\'occasion ne représente pas une grosse économie, car l\'offre de cartes neuves au tarif catalogue s\'est tarie. Vérifiez les annonces vendues (et non actives) sur eBay et confirmez qu\'il s\'agit bien de la variante 16 Go — une RTX 4060 Ti 8 Go existe aussi.',
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
          acceptedAnswer: { '@type': 'Answer', text: '8 Go limitent aux modèles 7B en Q4. Pour une utilisation sérieuse, 12 Go est le minimum, 16 Go est recommandé.' },
        },
        { '@type': 'Question', name: 'Peut-on encore acheter une RTX 3090 occasion pour moins de 500 $ ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — le suivi InsiderLLM (données datées du 2026-11-23) relève des annonces vendues de RTX 3090 d\'occasion autour de 1 500–1 725 $ USD. Pour la capacité 30B, une RTX 3090 d\'occasion (24 Go) est une voie à 24 Go.' } },
        { '@type': 'Question', name: 'Qu\'en est-il des GPU Intel Arc pour l\'IA ?', acceptedAnswer: { '@type': 'Answer', text: 'L\'Intel Arc B580 12 Go est la meilleure option Arc en 2026 et désormais la meilleure carte de cette page : 12 Go de VRAM à un prix habituel de 250–290 $ (vérifiez les annonces actuelles). PromptQuorum ne l\'a pas testé ; les résultats d\'Arc varient selon le modèle, le pilote et le backend. Pour le fine-tuning LoRA, préférez une RTX 3060 12 Go d\'occasion.' } },
        { '@type': 'Question', name: 'Puis-je faire tourner un modèle 70B sur une seule GPU sous 500 $ ?', acceptedAnswer: { '@type': 'Answer', text: 'Pas à pleine vitesse. Même la RTX 3090 (24 Go) ne peut pas contenir 70B Q4 (~40 Go) entièrement en VRAM. L\'offloading CPU reste bien en dessous de la vitesse d\'un modèle qui tient en VRAM. Les voies pratiques pour le 70B sont deux GPU de 24 Go ou l\'inférence cloud.' } },
        { '@type': 'Question', name: 'Les nouvelles GPU (RTX 5060 Ti) rendront-elles ces cartes obsolètes ?', acceptedAnswer: { '@type': 'Answer', text: 'La RTX 5060 Ti 16 Go est sortie et n\'a pas passé sous la RTX 4060 Ti : des annonces de détail à partir de 679 $ ont été signalées sur Amazon US (Wccftech, 2026-01-27). C\'est la meilleure GPU, mais pas une carte sous 500 $.' } },
        { '@type': 'Question', name: 'Combien coûte une RTX 4060 Ti 16 Go d\'occasion ?', acceptedAnswer: { '@type': 'Answer', text: 'Les prix de revente des RTX 4060 Ti 16 Go d\'occasion semblent avoir suivi la hausse du neuf ; vérifiez les annonces vendues (et non actives) sur eBay pour le prix du jour, qui dépend de l\'état. Vérifiez qu\'il s\'agit bien de la variante 16 Go, une version 8 Go existant aussi.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleures GPU pour l\'inférence LLM sous 500 $ (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12 Go', description: 'Meilleur global — 12 Go VRAM, l\'une des rares cartes neuves de 12 Go listées sous 500 $ chez les grands revendeurs américains lors de la dernière mise à jour de cette page' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12 Go (occasion)', description: 'Meilleure option CUDA — 12 Go VRAM, chaîne d\'outils CUDA complète, à acheter plutôt d\'occasion' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16 Go', description: 'Meilleur matériel, mais annonces au tarif catalogue en rupture lors de la dernière mise à jour et cartes en stock vues au-dessus de 500 $' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Meilleure GPU pour l\'inférence LLM à moins de 500 $ (2026)', datePublished: '2026-05-26', dateModified: '2026-11-27', url: 'https://www.promptquorum.com/fr/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'fr' },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '500ドル以下のLLM推論向けGPUおすすめランキング（2026年）',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ja.webp',
    seoTitle: '2026年$500以下LLM推論GPU + RTX 4060 Ti価格',
    metaDescription: '$500以下のローカルLLM推論GPUはIntel Arc B580 12GBが首位、CUDAなら中古RTX 3060 12GB。RTX 4060 Ti 16GBが予算外になった理由も解説します。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: '一般的に$250–290', label: 'Intel Arc B580 12GBの価格を見る →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB（中古）', productCategory: 'gpu', priceRange: '一般的に$270–300（中古）', label: 'RTX 3060 12GBの価格を見る →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: '前回更新時に約$562を確認', label: 'RTX 4060 Ti 16GBの価格を見る →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500以下のローカルLLM推論に最良のGPUは、いまやIntel Arc B580 12GBです。12GB VRAMで7B–13BモデルをQ4実行でき、このページの前回更新時に米国の大手小売で$500以下で掲載されていた数少ない新品12GBカードの1つです（価格の全面確認日：2026-11-22。現在の出品を確認してください）。CUDAツールチェーンが必要なら、中古のRTX 3060 12GBが次点です。前回更新時点の一般的な実売価格は、Arc B580が$250–290、中古RTX 3060 12GBが$270–300でした（PromptQuorumは継続的に追跡していません。当日の価格は各販売店のリンクで確認してください）。前回の1位だったRTX 4060 Ti 16GBは枠から外れました。定価の出品は在庫がなく、在庫のあるカードは前回更新時に約$562で確認されました。新品RTX 3060 12GBは約$474〜599で確認されました。市場レポートは、2026年の値上がりをAIデータセンター需要に伴うDRAMとGDDRの不足によるものとしています（[InsiderLLMトラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、出典更新日2026-10-15）。PromptQuorumはこれらのカードのベンチマークを行っていません。小型モデルでの速度は主にメモリ帯域幅とドライバーに左右されます。30Bモデルが必要なら、中古RTX 3090（24GB）が現実的な選択肢で、売却済み出品で約$1,500〜1,725です（[InsiderLLMトラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、価格データの日付2026-11-23）。価格は米ドル表記です。日本での価格は異なる場合があります。**',
    quickAnswerTop: {
      question: '$500以下でローカルAIモデルを動かす最高のGPUは何ですか？',
      answer: 'Intel Arc B580 12GBが$500以下のローカルLLM推論に最良です。12GB VRAMで7B–13BモデルをQ4実行し、SYCL/oneAPIバックエンドによりWindows・LinuxでOllamaが動作します。このページの前回更新時に米国の大手小売で$500以下で掲載されていた数少ない新品12GBカードの1つです（一般的に$250–290前後。価格の全面確認日は2026-11-22。現在の出品を確認してください）。CUDAツールチェーンが必要な場合は、中古のRTX 3060 12GB（一般的に$270–300）が次点です。2026年のメモリ不足により、このリストの残りの大半は枠外になりました。前回更新時には、RTX 4060 Ti 16GBは在庫があるとき約$562、新品RTX 3060 12GBは$474〜599、RTX 4070 12GBは$560〜705、RX 7800 XT 16GBは約$832で確認されました（一般的な実売価格で、PromptQuorumは追跡していません）。中古RTX 3090は売却済み出品で約$1,500〜1,725です（[InsiderLLMトラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、価格データの日付2026-11-23）。価格は米ドル表記です。日本での価格は異なる場合があります。',
      bullets: [
        '**優勝:** Intel Arc B580 12GB — 12GB VRAM、前回更新時に一般的に$250–290、このページの前回更新時に米国の大手小売で$500以下で掲載されていた数少ない新品12GBカードの1つ',
        '**次点:** 中古RTX 3060 12GB（一般的に$270–300）— フルCUDAツールチェーンへの最安ルート',
        '⚠️ RTX 4060 Ti 16GB：定価の出品は在庫なし、在庫のある個体は前回更新時に約$562を確認 — $500以下の安定した選択肢ではない',
        '⚠️ 新品RTX 3060 12GB：前回更新時に$474〜599を確認 — 中古で買うべき',
        '⚠️ 中古RTX 3090：売却済み出品で約$1,500〜1,725（InsiderLLM、価格データの日付2026-11-23）— $500以下の選択肢ではない',
        '⚠️ RTX 4070 12GB：前回更新時に$560〜705を確認 — $500以下の選択肢ではない',
        '⚠️ RX 7800 XT 16GB：前回更新時に約$832を確認 — $500以下の選択肢ではない',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GBが多くのユーザーに最適：12GB VRAMで、このページの前回更新時に米国の大手小売で$500以下で掲載されていた数少ない新品12GBカードの1つ（一般的に$250–290。価格の全面確認日は2026-11-22。現在の出品を確認してください）**',
          '中古RTX 3060 12GB（一般的に$270–300）が次点 — フルCUDAツールチェーンへの最安ルート',
          '⚠️ 価格警告：前回1位のRTX 4060 Ti 16GBは定価で在庫がなく、在庫のある個体は約$562で確認 — $500以下リストから除外',
          '⚠️ 価格警告：新品RTX 3060 12GBは$474〜599で確認 — このカードは中古市場が現実的',
          '⚠️ 価格警告：中古RTX 3090は売却済み出品で約$1,500〜1,725（InsiderLLM、価格データの日付2026-11-23）— $500以下リストから除外',
          '⚠️ 価格警告：RTX 4070 12GBは$560〜705で確認 — $500以下リストから除外',
          '⚠️ 価格警告：RX 7800 XT 16GBは約$832で確認 — $500以下リストから除外',
          'なぜ価格が動いたのか：市場レポートは、値上がりの要因をAIデータセンター需要に伴うDRAMとGDDRの不足としています（InsiderLLMトラッカーを参照）。ハードウェアは何も変わっていません。変わったのは価格だけです。InsiderLLM以外の価格は前回更新時点の一般的な実売価格で、PromptQuorumは追跡していません。',
          'PromptQuorumはこれらのカードのベンチマークを行っていません。小型モデルでは、速度は主にメモリ帯域幅とドライバーに左右されます',
          '30Bモデル以上が必要なら、中古RTX 3090（24GB）が現実的な選択肢で、売却済み出品で約$1,500〜1,725です（InsiderLLM、価格データの日付2026-11-23）',
          'リスト上の3機種はいずれもOllamaとllama.cppで動作します。Arc B580のLM Studioは前回更新時点ではまだベータ版でした（現在の状況を確認してください）',
        ],
      },
      rankedList: {
        title: '500ドル以下LLM推論GPUランキング',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Intel Arc B580 12GBが500ドル以下のローカルLLM推論で最良のGPUです。2026年のメモリ不足の後も、このページの前回更新時に米国の大手小売で$500以下で掲載されていた数少ない新品12GBカードの1つだからです（価格の全面確認日：2026-11-22）。',
          },
          {
            type: 'plain-terms',
            text: 'GPU VRAMはどのAIモデルをローカルで実行できるかを決定します。16GBで14Bモデル対応。24GB（中古RTX 3090）で30Bモデル対応。12GB未満だと7Bモデルのみです。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — 総合1位',
            content: '**Intel Arc B580 12GBが$500以下のローカルLLM推論で最良のGPUです。理由の大部分は、このページの前回更新時に米国の大手小売でこの枠に掲載されていた数少ない同種のカードの1つだからです（価格の全面確認日：2026-11-22。現在の出品を確認してください）。** 米国の大手小売で一般的に$250–290前後でした（一般的な実売価格で、PromptQuorumは追跡していません。各販売店のリンクで確認してください）。一方、かつてこのリストを占めていた新品NVIDIAカードの大半は、2026年のメモリ不足で$500を超えました。SYCL/oneAPIバックエンドによりLinux・WindowsでOllamaが動作します。PromptQuorumはベンチマークを行っていません。Arcの結果はモデル、ドライバー、バックエンドによって異なり、同等のNVIDIAカードに及ばない場合があります。12GB VRAMの上限により、Q4で約14Bまでのモデルに制限され、14B Q8は収まりません。Intelのドライバーサポートは発売時から大きく改善しましたが、ツールの幅ではまだCUDAに及びません。Ollamaとllama.cppは問題なく動作し、LoRAファインチューニングは扱いにくいと考えてください。',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: '中古RTX 3060 12GB — CUDA最良の選択肢',
            content: 'NVIDIA GeForce RTX 3060 12GBはフルCUDAツールチェーンへの最安ルートですが、**中古**で買ってください。新品は前回更新時に$474〜599で確認され、このページが扱う$500の上限に並ぶか超えています。中古は一般的に$270–300でした（一般的な実売価格で、PromptQuorumは追跡していません。各販売店のリンクで確認してください）。12GB GDDR6は7B–13BモデルをQ4/Q8で快適に動かします。14B Q8は収まりませんが、14B Q4（約8.5GB）なら入ります。小型モデルでの速度は主にメモリ帯域幅とドライバーに左右され、PromptQuorumはこのカードのベンチマークを行っていません。フルCUDAツールチェーンにより、Ollama、LM Studio、vLLM、LoRAファインチューニングがWindows・Linuxでそのまま動作します（前回更新時点。各プロジェクトのドキュメントで確認してください）——Arc B580に真似できない唯一の点です。',
            affiliateLinks: [
              { label: 'RTX 3060 12GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — 最良のカード、定価で見つかれば',
            content: 'RTX 4060 Ti 16GBはこのリストで最良の*ハードウェア*であり続けており、2026年のメモリ不足まではこのページの1位でした。16GB GDDR6はQwen3 14BとMistral 12BをQ4で完全にGPU内実行し、Q8でもスワップなしで動作します。TDPは165Wです。必要な電源容量とコネクタは、お使いのモデルについてメーカーの推奨を確認してください。問題は買えないことです。定価の出品は前回更新時に大手小売で在庫切れで、在庫のある個体は約$562で確認されました（前回更新時に確認した出品。現在の小売価格を確認してください）。定価かそれに近い値で見つかれば有力な購入候補ですが、高い実売価格ではこのページが想定する予算から外れます。注視しつつ、これを前提に計画しないでください。',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU比較 — 一般的な価格と対応モデル',
        content: 'PromptQuorumはこれらのカードのベンチマークを行っていないため、この表にはVRAM、一般的な価格、対応モデルのみを掲載しています。小型モデルでの速度は主にメモリ帯域幅、ドライバー、バックエンドに左右されます。ハイエンドカードの開発者報告値は[llama.cppのパフォーマンス一覧](https://github.com/ggml-org/llama.cpp/discussions/15013)を参照してください（開発者報告。ハイエンドカードのみ掲載）。価格は前回更新時点の一般的な実売価格で、PromptQuorumは継続的に追跡していません。当日の価格は各販売店のリンクで確認してください。価格は米ドル表記です。日本での価格は異なる場合があります。$500の上限に達するか超えるため除外：中古RTX 3090（売却済み出品で約$1,500〜1,725、InsiderLLM、価格データの日付2026-11-23）、RTX 4070 12GB（$560〜705）、RX 7800 XT 16GB（約$832）、新品RTX 3060 12GB（$474〜599）。',
        columns: ['GPU', 'VRAM', '一般的な価格', '最大モデル'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', 'VRAM': '12GB', '一般的な価格': '$250–290', '最大モデル': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB（中古）', 'VRAM': '12GB', '一般的な価格': '$270–300', '最大モデル': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', 'VRAM': '16GB', '一般的な価格': '在庫時に約$562を確認', '最大モデル': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'これらのGPUを選定した方法',
        content: '選定基準：新品または中古で$500以下で購入可能なこと；主要な推論ランタイム（Ollama、LM Studio、llama.cpp）の少なくとも1つに対応していること；VRAM 12GB以上（8GBカードは除外）。PromptQuorumはこれらのカードのベンチマークを行っていません。価格帯は概算で、前回更新時点で公開されている出品と照合したものです。PromptQuorumは継続的に追跡していないため、当日の価格は各販売店のリンクで確認してください。価格は前回更新時に小売店の公開出品から読み取りました。この全面確認は2026-11-22に行ったもので、その後に更新したのは中古RTX 3090の数値（2026-11-23付）のみです。価格を理由に複数のカードがリストから外れました。中古RTX 3090（24GB）は売却済み出品で約$1,500〜1,725（[InsiderLLMトラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)、価格データの日付2026-11-23）、RTX 4070 12GBは$560〜705、RX 7800 XT 16GBは約$832、新品RTX 3060 12GBは$474〜599で確認されました。RTX 4060 Ti 16GBは残していますが注意付きです——定価の出品は在庫切れで、在庫のある個体は約$562で確認されました。市場レポートは、値上がりの要因をAIデータセンター需要に伴うDRAMとGDDRの不足としており、RTX 5090の新品は希望小売価格$1,999に対して約$4,500〜4,700、RTX 5080は$999に対して$1,200〜1,600です（InsiderLLMトラッカー、出典更新日2026-10-15）。小型モデルでの速度は主にメモリ帯域幅、ドライバー、バックエンドに左右されます。開発者報告の[llama.cppスコアボード](https://github.com/ggml-org/llama.cpp/discussions/15013)はハイエンドカードのみを掲載しています。',
      },
      vramGuide: {
        title: 'モデルサイズ別のVRAM要件',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM要件：7Bモデルは約4〜5GB（Q4）または約7〜8GB（Q8）；14Bモデルは約8〜9GB（Q4）または約14〜15GB（Q8）；30Bモデルは約18〜20GB（Q4）；70Bモデルは約40〜42GB（Q4）が必要です。',
          },
          {
            type: 'plain-terms',
            text: 'VRAMはAIモデル用のRAMのようなものと考えてください。高速な推論には、モデル全体がVRAMに収まる必要があります。CPU RAMに溢れる場合（「オフロード」と呼ばれます）、速度は大幅に低下します（溢れる量によって異なります）。Q4量子化はQ8と比べてサイズを半分にし、品質への影響はわずかです。',
          },
        ],
        items: [
          '7BモデルのQ4：約4.5GB VRAM——このリストのどのGPUでも簡単に扱えます',
          '7BモデルのQ8：約7.5GB VRAM——ここに挙げたすべてのGPUに収まります',
          '13BモデルのQ4：約8.5GB VRAM——このリストのすべてのGPUに収まります',
          '14BモデルのQ8：約14GB VRAM——RTX 4060 Ti 16GBや中古RTX 3090など16GB以上のカードが必要。ただしどちらも$500相当以下ではありません',
          '30BモデルのQ4：約18GB VRAM——中古RTX 3090など24GBのカードが必要',
          '70BモデルのQ4：約40GB——GPU2枚またはCPUオフロードが必要',
        ],
      },
      decisionMatrix: {
        title: 'どのGPUを買うべきですか？',
        content: '主な用途に応じてこの選択ガイドを活用してください：',
        items: [
          '**$500以下の総合ベスト** → Intel Arc B580 12GB（前回更新時に一般的に$250–290）。このページの前回更新時に米国の大手小売で$500以下で掲載されていた数少ない新品12GBカードの1つ。価格の全面確認日は2026-11-22。現在の出品を確認してください。7B–13BモデルをQ4実行、SYCL経由でWindows・LinuxのOllamaに対応。',
          '**動作する最安のCUDAカード** → 中古RTX 3060 12GB（一般的に$270–300）。Ollama、LM Studio、vLLM、LoRAファインチューニングを含むフルCUDAツールチェーンが使えます。中古で買ってください。新品は$474〜599で確認されました。',
          '**定価で見つかるなら最良のハードウェア** → RTX 4060 Ti 16GB。定価なら有力な購入候補で、14B Q8をGPU内実行できます。ただし定価の出品は在庫切れで、在庫のある個体は前回更新時に約$562と、このページの予算外です。',
          '**30Bモデル対応が必要ですか？** → 中古RTX 3090（24GB）が現実的な選択肢ですが、売却済み出品は約$1,500〜1,725（InsiderLLM、価格データの日付2026-11-23）と$500を大きく上回ります。',
          '**Windowsユーザーで手間をかけたくない場合** → 中古RTX 3060 12GB。NVIDIA CUDAはLLM・ファインチューニング・マルチモーダルランタイムで最も幅広いWindowsツールチェーンサポートを提供し、中古3060はその最安の入口です。',
          '**テストに12 GB以上が必要ですか？** 予算を広げる代わりに、[24 GBカードを数ドルでレンタル](/ja/power-local-llm/best-cloud-gpu-providers)して、大きなモデルが価値に見合うかを確かめられます。',
        ],
      },
      softwareCompat: {
        title: 'GPU別ソフトウェア互換性',
        content: '3機種すべてOllamaとllama.cppで動作します。差が出るのは高度なツールです（前回更新時点のサポート状況。変化が速いため、各プロジェクトのドキュメントで確認してください）：',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDAファインチューニング'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ ベータ', vLLM: '❌', 'Text Gen WebUI': '⚠️ 一部対応', 'CUDAファインチューニング': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDAファインチューニング': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDAファインチューニング': '✅' },
        ],
      },
      powerAndCooling: {
        title: '消費電力とシステム要件',
        content: 'GPUの消費電力によって必要な電源とケースが決まります。LLM実行中はGPUが80〜100%の使用率になることが多く、ゲームと異なりアイドルフレームはほとんどありません。必要な電源容量とコネクタは、お使いのモデルについてメーカーの推奨を確認してください。',
        items: [
          'Intel Arc B580 12GB：190W——一般的に650W以上の電源；標準8ピン；メーカーの推奨を確認',
          'RTX 3060 12GB：170W——一般的に550W以上の電源；8ピンコネクタ1本；メーカーの推奨を確認',
          'RTX 4060 Ti 16GB：165W——一般的に550W以上の電源；8ピンコネクタ1本；メーカーの推奨を確認',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
            { q: '8GB VRAMはローカルLLMに十分ですか？', a: '8GB VRAMはQ4量子化で7Bモデルに限定されます。13Bモデルは完全にVRAMに収まらず、14BモデルはCPU RAMへのオフロードが発生し速度は大幅に低下します（溢れる量によって異なります）。2026年の実用的なローカルLLM利用には12GBが最低限、16GBが推奨です。' },
            { q: '中古RTX 3090は今でも$500以下で買えますか？', a: 'いいえ。[InsiderLLMトラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（価格データの日付2026-11-23）は、中古RTX 3090の売却済み出品を約$1,500〜1,725と記録しており、$500相当以下の選択肢ではありません（米ドル表記。日本での価格は異なる場合があります）。これは出品データであり、価格の見積もりではありません。24GB VRAMにより、30Bクラスのモデル（Q4で約18〜20GB必要）に手が届く24GBの選択肢であり続けています。' },
            { q: 'AMD GPUはローカルAIに使えますか？', a: 'はい、条件付きで。Linux上のOllama（ROCm）はRX 7800 XTでうまく動作します。WindowsのROCmサポートは改善中ですが手動設定が必要です。AMDハードウェアでのLoRAファインチューニングは、前回更新時点でほとんどのツールが対応していませんでした。サポートは変化が速いため、各プロジェクトのドキュメントで確認してください。価格に関する注意：RX 7800 XT 16GBは約$832で確認されたため、もはや$500以下の予算には収まりません——その価格帯では、中古RTX 3060 12GB（一般的に$270–300、CUDA）またはIntel Arc B580 12GB（一般的に$250–290）が選択肢です。Windowsやファインチューニングを行うならNVIDIAを選んでください。' },
            { q: 'AI用のIntel Arc GPUはどうですか？', a: 'Intel Arc B580 12GBは2026年のベストなArc選択肢であり、メモリ不足がNVIDIA勢を再価格付けした結果、このページ全体でも最良のカードになりました。SYCLバックエンドでWindowsとLinuxの両方でOllamaを実行できます。PromptQuorumはベンチマークを行っていません。Arcの結果はモデル、ドライバー、バックエンドによって異なり、同等のNVIDIAカードに及ばない場合があります。コストパフォーマンスはいまや強力です。12GB VRAMが一般的に$250–290（現在の出品を確認してください）で、新品RTX 3060 12GBは$474〜599で確認されました。主な制約はいまもソフトウェアで、前回更新時点では、vLLM、ファインチューニング系ツール、マルチモーダルランタイムはArcを十分にサポートしていませんでした。LoRAファインチューニングが必要なら中古のRTX 3060 12GBを選んでください。サポートは変化が速いため、各プロジェクトのドキュメントで確認してください。' },
            { q: '$500以下のGPU1枚で70Bモデルを実行できますか？', a: 'フル速度では不可能です。RTX 3090（24GB）でさえ、70B Q4（約40GB）を完全にVRAMに収めることはできません。llama.cppのCPUオフロードを使えばGPU VRAMとシステムRAMにモデルを分割できますが、その場合の生成速度はVRAMに収まるモデルを大きく下回り、対話的な用途には実用的ではありません。70Bモデルは、24GBカード2枚（RTX 3090×2枚で計48GB）またはクラウド推論で動かすのが現実的です。' },
            { q: '新しいGPU（RTX 5060 Ti）はこれらを時代遅れにしますか？', a: 'RTX 5060 Ti 16GBはすでに発売され、RTX 4060 Tiを下回るどころか逆になりました。米国Amazonでは$679からの小売出品が報告されており（[Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/)、2026-01-27）、定価を大きく上回っています。このリスト全体を再価格付けしたメモリ不足と同じ方向の動きです。16GB VRAMとより高速な推論を備え、ここにあるどれよりも実際に優れたGPUですが、$500以下のカードではなく、そうなるのを待つのは現実的な計画ではありません。いま買えるもので判断してください。Intel Arc B580 12GB、CUDAが必要なら中古RTX 3060 12GBです（現在の出品を確認してください）。' },
            { q: '中古のRTX 4060 Ti 16GBはいくらですか？', a: '前回更新時に在庫のある新品が約$562で確認されました。前回更新時に確認できた中古の出品は、eBayで概ね$420〜480の範囲で、状態や保証残存期間により変動します（当日の価格は売却済み出品で確認してください）。中古の価格も新品の値上がりに追随しているようです。定価の新品供給が枯れたため、中古で買っても大きな節約にならない数少ないカードの1つです。eBayでは売却済み（出品中ではなく）の履歴を確認し、16GB版であることを必ず確認してください。8GB版のRTX 4060 Tiも存在します。' },
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
            'name': '8GB VRAMはローカルLLMに十分ですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '8GB VRAMはQ4量子化で7Bモデルに限定されます。13Bモデルは完全にVRAMに収まらず、14BモデルはCPU RAMへのオフロードが発生し速度は大幅に低下します（溢れる量によって異なります）。2026年の実用的なローカルLLM利用には12GBが最低限、16GBが推奨です。',
            },
          },
          {
            '@type': 'Question',
            'name': '中古RTX 3090は今でも$500以下で買えますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'いいえ。InsiderLLMトラッカー（価格データの日付2026-11-23）は、中古RTX 3090の売却済み出品を約$1,500〜1,725と記録しています。30Bモデル対応には、中古RTX 3090（24GB）が24GBの選択肢です。',
            },
          },
          {
            '@type': 'Question',
            'name': 'AMD GPUはローカルAIに使えますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい、条件付きで。Linux上のOllama（ROCm）はRX 7800 XTでうまく動作します。WindowsのROCmサポートは改善中ですが手動設定が必要です。AMDでのLoRAファインチューニングは、前回更新時点でほとんどのツールが対応していませんでした。価格面では、$500以下の予算なら中古RTX 3060 12GBまたはIntel Arc B580 12GBが選択肢です。Windowsやファインチューニングを行うならNVIDIAを選んでください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'AI用のIntel Arc GPUはどうですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Intel Arc B580 12GBは2026年のベストなArc選択肢であり、いまやこのページ全体でも最良のカードです。12GB VRAMが一般的に$250–290（現在の出品を確認してください）。PromptQuorumはベンチマークを行っておらず、Arcの結果はモデル、ドライバー、バックエンドによって異なります。LoRAファインチューニングが必要なら中古のRTX 3060 12GBを選んでください。',
            },
          },
          {
            '@type': 'Question',
            'name': '$500以下のGPU1枚で70Bモデルを実行できますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'フル速度では不可能です。RTX 3090（24GB）でさえ、70B Q4（約40GB）を完全にVRAMに収めることはできません。llama.cppのCPUオフロードを使えばGPU VRAMとシステムRAMにモデルを分割できますが、その場合の生成速度はVRAMに収まるモデルを大きく下回り、対話的な用途には実用的ではありません。70Bモデルは、24GBカード2枚（RTX 3090×2枚で計48GB）またはクラウド推論で動かすのが現実的です。',
            },
          },
          {
            '@type': 'Question',
            'name': '新しいGPU（RTX 5060 Ti）はこれらを時代遅れにしますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 5060 Ti 16GBはすでに発売され、RTX 4060 Tiを下回りませんでした。米国Amazonでは$679からの小売出品が報告されています（Wccftech、2026-01-27）。より優れたGPUですが、$500以下のカードではありません。',
            },
          },
          {
            '@type': 'Question',
            'name': '中古のRTX 4060 Ti 16GBはいくらですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '中古のRTX 4060 Ti 16GBの価格も新品の値上がりに追随しているようです。当日の価格はeBayの売却済み（出品中ではなく）の履歴で確認してください。状態により変動します。8GB版も存在するため、16GB版であることを必ず確認してください。',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: '総合1位 — 12GB VRAM、このページの前回更新時に米国の大手小売で$500以下で掲載されていた数少ない新品12GBカードの1つ' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB（中古）', description: 'CUDA最良の選択肢 — 12GB VRAM、フルCUDAツールチェーン、中古での購入がおすすめ' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: '最良のハードウェアだが、定価の出品は前回更新時に在庫がなく、在庫のある個体は$500超で確認された' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '500ドル以下のLLM推論向けGPUおすすめランキング（2026年）', datePublished: '2026-05-26', dateModified: '2026-11-27', url: 'https://www.promptquorum.com/ja/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'ja' },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '2026年500美元以下LLM推理最佳GPU排行',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-zh.webp',
    seoTitle: '2026年500美元以下LLM推理最佳GPU + RTX 4060 Ti价格',
    metaDescription: '500美元以下本地LLM推理最佳GPU：Intel Arc B580 12GB居首，需要CUDA则选二手RTX 3060 12GB。并说明RTX 4060 Ti 16GB为何已超出预算。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: '通常$250–290', label: '查看Intel Arc B580 12GB价格 →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB（二手）', productCategory: 'gpu', priceRange: '通常$270–300（二手）', label: '查看RTX 3060 12GB价格 →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: '上次更新时见约$562', label: '查看RTX 4060 Ti 16GB价格 →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500以下本地LLM推理的最佳GPU现在是Intel Arc B580 12GB：12GB显存可运行7B–13B模型的Q4，并且是在本页上次更新时于美国主流零售商处挂牌价低于$500的少数全新12GB显卡之一（价格全面核查日期：2026-11-22；请查看当前挂牌）。若需要CUDA工具链，二手RTX 3060 12GB是次选。上次更新时的常见成交价：Arc B580为$250–290，二手RTX 3060 12GB为$270–300（PromptQuorum并未持续跟踪；当日价格请查看各零售商链接）。此前的冠军RTX 4060 Ti 16GB已经出局：官方定价的货源缺货，有货的卡在上次更新时约$562。全新RTX 3060 12GB则见到约$474–599。市场报道将2026年的涨价归因于与AI数据中心需求相关的DRAM和GDDR短缺（[InsiderLLM追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，来源更新于2026-10-15）。PromptQuorum并未对这些显卡做基准测试：小模型上的速度主要取决于显存带宽和驱动。若需要30B模型能力，二手RTX 3090（24GB）是可行路线，已售出挂牌价约$1,500–1,725（[InsiderLLM追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，价格数据日期2026-11-23）。价格以美元计，各地区价格可能不同。**',
    quickAnswerTop: {
      question: '$500以下跑本地大模型最好的GPU是什么？',
      answer: '**Intel Arc B580 12GB是$500以下本地LLM推理的最佳GPU。** 12GB显存可运行7B–13B模型的Q4，通过SYCL/oneAPI后端在Windows和Linux上运行Ollama，并且是在本页上次更新时于美国主流零售商处挂牌价低于$500的少数全新12GB显卡之一（通常约$250–290；价格全面核查日期2026-11-22；请查看当前挂牌）。若需要CUDA工具链，二手RTX 3060 12GB（通常$270–300）是次选。2026年的存储器短缺已把榜单其余部分的大部分推出这个价位。上次更新时我们见到：RTX 4060 Ti 16GB有货时约$562，全新RTX 3060 12GB为$474–599，RTX 4070 12GB为$560–705，RX 7800 XT 16GB约$832（均为常见成交价，PromptQuorum并未跟踪）；二手RTX 3090已售出挂牌价约$1,500–1,725（[InsiderLLM追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，价格数据日期2026-11-23）。价格以美元计，各地区价格可能不同。',
      bullets: [
        '**优胜:** Intel Arc B580 12GB——12GB显存，上次更新时通常$250–290，在本页上次更新时于美国主流零售商处挂牌价低于$500的少数全新12GB显卡之一',
        '**次选:** 二手RTX 3060 12GB（通常$270–300）——获得完整CUDA工具链的最便宜途径',
        '⚠️ RTX 4060 Ti 16GB：官方定价的货源缺货，上次更新时有货的卡约$562 — 不再是稳定的$500以下选项',
        '⚠️ 全新RTX 3060 12GB：上次更新时见$474–599 — 请改买二手',
        '⚠️ 二手RTX 3090：已售出挂牌价约$1,500–1,725（InsiderLLM，价格数据日期2026-11-23）— 不再是$500以下选项',
        '⚠️ RTX 4070 12GB：上次更新时见$560–705 — 不再是$500以下选项',
        '⚠️ RX 7800 XT 16GB：上次更新时见约$832 — 不再是$500以下选项',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB适合大多数用户：12GB显存，并且是在本页上次更新时于美国主流零售商处挂牌价低于$500的少数全新12GB显卡之一（通常$250–290；价格全面核查日期2026-11-22；请查看当前挂牌）**',
          '二手RTX 3060 12GB（通常$270–300）是次选 — 获得完整CUDA工具链的最便宜途径',
          '⚠️ 价格警报：此前的冠军RTX 4060 Ti 16GB在官方定价下缺货，有货时见约$562 — 已从$500以下列表移除',
          '⚠️ 价格警报：全新RTX 3060 12GB见$474–599 — 这张卡走二手市场才合理',
          '⚠️ 价格警报：二手RTX 3090已售出挂牌价约$1,500–1,725（InsiderLLM，价格数据日期2026-11-23）— 已从$500以下列表移除',
          '⚠️ 价格警报：RTX 4070 12GB见$560–705 — 已从$500以下列表移除',
          '⚠️ 价格警报：RX 7800 XT 16GB见约$832 — 已从$500以下列表移除',
          '为什么价格会变：市场报道将涨价归因于与AI数据中心需求相关的DRAM和GDDR短缺（见InsiderLLM追踪）。硬件本身没有变化，变的只是价格。InsiderLLM之外的价格是上次更新时的常见成交价，PromptQuorum并未跟踪。',
          'PromptQuorum并未对这些显卡做基准测试；小模型上的速度主要取决于显存带宽和驱动',
          '需要30B及以上模型能力？二手RTX 3090（24GB）是可行路线，已售出挂牌价约$1,500–1,725（InsiderLLM，价格数据日期2026-11-23）',
          '列表中所有3款GPU均可运行Ollama和llama.cpp；Arc B580上的LM Studio在上次更新时仍处于测试版（请查看当前状态）',
        ],
      },
      rankedList: {
        title: '500美元以下LLM推理GPU排名',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Intel Arc B580 12GB是500美元以下本地LLM推理的最佳GPU，因为在2026年存储器短缺之后，它是在本页上次更新时于美国主流零售商处挂牌价低于$500的少数全新12GB显卡之一（价格全面核查日期：2026-11-22）。',
          },
          {
            type: 'plain-terms',
            text: 'GPU显存决定了你能在本地运行哪些AI模型。16GB显存支持14B模型。24GB（二手RTX 3090）支持30B模型。12GB以下只能运行7B或更小的模型。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — 综合最佳',
            content: '**Intel Arc B580 12GB是$500以下本地LLM推理的最佳GPU，很大程度上是因为它是本页上次更新时在美国主流零售商处这一价位挂牌的少数同类显卡之一（价格全面核查日期：2026-11-22；请查看当前挂牌）。** 它在美国大型零售商处通常约$250–290（常见成交价，PromptQuorum并未跟踪；请查看零售商链接）；而曾经占据这份榜单的大多数全新NVIDIA显卡，都已被2026年的存储器短缺推到$500以上。它通过SYCL/oneAPI后端在Linux和Windows上运行Ollama。PromptQuorum并未对其做基准测试；Arc的表现因模型、驱动和后端而异，可能落后于同级NVIDIA显卡。12GB显存上限意味着Q4下最多约14B的模型，装不下14B的Q8。Intel的驱动支持自发售以来已大幅改善，但在工具生态的广度上仍落后于CUDA：Ollama和llama.cpp可以正常使用，LoRA微调则相当别扭。',
            affiliateLinks: [
              { label: '在京东查看Intel Arc B580 12GB', url: 'https://search.jd.com/Search?keyword=Intel+Arc+B580' },
              { label: '在淘宝查看Intel Arc B580 12GB', url: 'https://s.taobao.com/search?q=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: '二手RTX 3060 12GB — 最佳CUDA选择',
            content: 'NVIDIA GeForce RTX 3060 12GB是获得完整CUDA工具链的最便宜途径，但请买**二手**。全新卡在上次更新时见$474–599，这让全新卡触及甚至越过了本文所讨论的$500上限。二手卡通常为$270–300（常见成交价，PromptQuorum并未跟踪；请查看零售商链接）。12GB GDDR6可轻松运行7B–13B模型的Q4/Q8；它无法容纳14B模型的Q8，但14B的Q4（约8.5GB）可以装下。小模型上的速度主要取决于显存带宽和驱动，PromptQuorum并未对这张卡做基准测试。完整的CUDA工具链意味着Ollama、LM Studio、vLLM和LoRA微调在Windows和Linux上开箱即用（截至上次更新；请查看各项目文档）——这正是Arc B580无法比拟的一点。',
            affiliateLinks: [
              { label: '在京东查看RTX 3060 12GB', url: 'https://search.jd.com/Search?keyword=RTX+3060+12GB' },
              { label: '在淘宝查看RTX 3060 12GB', url: 'https://s.taobao.com/search?q=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — 最强的卡，前提是能按官方定价买到',
            content: 'RTX 4060 Ti 16GB依然是本榜单中最好的*硬件*，在2026年存储器短缺之前一直是本文的冠军。16GB GDDR6可将Qwen3 14B和Mistral 12B的Q4完全放入GPU运行，Q8也无需交换；TDP为165W。具体电源功率和接口请以厂商对你所购型号的推荐为准。问题在于买不到。官方定价的货源在上次更新时于主流零售商处缺货，有货的卡约$562（上次更新时见到的挂牌；请查看零售商当前价格）。如果你能以官方定价或接近的价格买到，它是一个不错的选择；但在较高的成交价下，它已经超出了本文所面向的预算。可以关注，但不要围绕它制定计划。',
            affiliateLinks: [
              { label: '在京东查看RTX 4060 Ti 16GB', url: 'https://search.jd.com/Search?keyword=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU对比 — 常见价格与可运行模型',
        content: 'PromptQuorum并未对这些显卡做基准测试，因此本表只列出显存、常见价格和可运行的模型规模。小模型上的速度主要取决于显存带宽、驱动和后端；高端显卡的开发者上报数据请参阅[llama.cpp性能榜](https://github.com/ggml-org/llama.cpp/discussions/15013)（开发者上报；仅列出高端显卡）。价格为上次更新时的常见成交价，PromptQuorum并未持续跟踪；当日价格请查看各零售商链接。价格以美元计，各地区价格可能不同。因达到或超出$500上限而排除：二手RTX 3090（已售出挂牌价约$1,500–1,725，InsiderLLM，价格数据日期2026-11-23）、RTX 4070 12GB（$560–705）、RX 7800 XT 16GB（约$832）以及全新RTX 3060 12GB（$474–599）。',
        columns: ['GPU', '显存', '常见价格', '最大模型'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', '显存': '12GB', '常见价格': '$250–290', '最大模型': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB（二手）', '显存': '12GB', '常见价格': '$270–300', '最大模型': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', '显存': '16GB', '常见价格': '有货时见约$562', '最大模型': '14B (Q8)' },
        ],
      },
      methodology: {
        title: '我们如何挑选这些GPU',
        content: '筛选标准：能以新品或二手价格在$500以下购得；至少支持一种主流推理运行时（Ollama、LM Studio、llama.cpp）；显存≥12GB（8GB显卡已排除）。PromptQuorum并未对这些显卡做基准测试。价格区间为近似值，已在上次更新时与公开挂牌核对；PromptQuorum并未持续跟踪，当日价格请查看零售商链接。价格取自上次更新时零售商的公开挂牌。该次全面核查日期为2026-11-22；此后仅更新了二手RTX 3090的数据（日期2026-11-23）。多款显卡因价格被移出榜单：二手RTX 3090（24GB）已售出挂牌价约$1,500–1,725（[InsiderLLM追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)，价格数据日期2026-11-23）；RTX 4070 12GB见$560–705；RX 7800 XT 16GB见约$832；全新RTX 3060 12GB见$474–599。RTX 4060 Ti 16GB予以保留但加注提醒——官方定价的货源缺货，有货的卡约$562。市场报道将涨价归因于与AI数据中心需求相关的DRAM和GDDR短缺，RTX 5090全新价约$4,500–4,700（建议零售价$1,999），RTX 5080为$1,200–1,600（建议零售价$999）（InsiderLLM追踪，来源更新于2026-10-15）。小模型上的速度主要取决于显存带宽、驱动和后端；开发者上报的[llama.cpp性能榜](https://github.com/ggml-org/llama.cpp/discussions/15013)仅列出高端显卡。',
      },
      vramGuide: {
        title: '按模型规模划分的显存需求',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '显存需求：7B模型需要约4–5GB（Q4）或约7–8GB（Q8）；14B模型需要约8–9GB（Q4）或约14–15GB（Q8）；30B模型需要约18–20GB（Q4）；70B模型需要约40–42GB（Q4）。',
          },
          {
            type: 'plain-terms',
            text: '可以把显存理解为AI模型专用的内存。模型必须完全放入显存才能快速推理。如果溢出到CPU内存（称为"卸载"），速度通常会大幅下降，降幅往往很大，具体取决于溢出多少。Q4量化相比Q8体积减半，质量损失很小。',
          },
        ],
        items: [
          '7B模型Q4：约4.5GB显存——本榜单任意一款GPU都能轻松运行',
          '7B模型Q8：约7.5GB显存——本榜单所有GPU均可运行',
          '13B模型Q4：约8.5GB显存——本榜单所有GPU均可运行',
          '14B模型Q8：约14GB显存——需要16GB及以上显卡，如RTX 4060 Ti 16GB或二手RTX 3090，但两者现在都不在$500以下',
          '30B模型Q4：约18GB显存——需要24GB显卡，如二手RTX 3090',
          '70B模型Q4：约40GB——需要双GPU或CPU卸载',
        ],
      },
      decisionMatrix: {
        title: '你应该买哪款GPU？',
        content: '根据你的主要用途参考以下决策指南：',
        items: [
          '**$500以下综合最佳** → Intel Arc B580 12GB（上次更新时通常$250–290）。在本页上次更新时于美国主流零售商处挂牌价低于$500的少数全新12GB显卡之一；价格全面核查日期2026-11-22；请查看当前挂牌。7B–13B模型Q4，通过SYCL在Windows和Linux上运行Ollama。',
          '**能用的最便宜CUDA显卡** → 二手RTX 3060 12GB（通常$270–300）。以与Arc相近的价格获得完整CUDA工具链——Ollama、LM Studio、vLLM和LoRA微调。请买二手：全新卡见$474–599。',
          '**最强硬件，前提是能按官方定价买到** → RTX 4060 Ti 16GB。在官方定价下它是一个不错的选择，可将14B的Q8放入GPU运行。但官方定价的货源缺货，上次更新时有货的卡约$562，超出本文预算。',
          '**需要30B模型能力？** → 二手RTX 3090（24GB）是可行路线，但已售出挂牌价约$1,500–1,725（InsiderLLM，价格数据日期2026-11-23），远高于$500。',
          '**Windows用户，追求省心** → 二手RTX 3060 12GB。NVIDIA CUDA在LLM、微调和多模态运行时方面拥有最广泛的Windows工具链支持，而二手3060是进入这一生态最便宜的方式。',
          '**测试需要超过12 GB显存？** 与其放宽预算，不如[花几美元租用24 GB显卡](/zh/power-local-llm/best-cloud-gpu-providers)，看看更大的模型是否值得。',
        ],
      },
      softwareCompat: {
        title: '各GPU的软件兼容性',
        content: '三款GPU均可运行Ollama和llama.cpp，差异体现在高级工具上（截至上次更新的支持情况；变化很快，请查看各项目文档）：',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA微调'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅（SYCL）', 'LM Studio': '⚠️ 测试版', vLLM: '❌', 'Text Gen WebUI': '⚠️ 部分支持', 'CUDA微调': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA微调': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA微调': '✅' },
        ],
      },
      powerAndCooling: {
        title: '功耗与系统要求',
        content: 'GPU功耗决定了你需要的电源和机箱。运行LLM常会让GPU保持80–100%的利用率——与游戏不同，几乎没有空闲帧。具体电源功率和接口请以厂商对你所购型号的推荐为准。',
        items: [
          'Intel Arc B580 12GB：190W——通常需650W以上电源；标准8针；请以厂商推荐为准',
          'RTX 3060 12GB：170W——通常550W以上电源即可；单8针接口；请以厂商推荐为准',
          'RTX 4060 Ti 16GB：165W——通常550W以上电源即可；单8针接口；请以厂商推荐为准',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '8GB显存跑本地大模型够用吗？',
            a: '8GB显存只能运行7B模型的Q4量化版本。13B模型无法完全放入显存，14B模型需要卸载到CPU内存，速度通常会大幅下降，降幅往往很大，具体取决于溢出多少。2026年本地LLM实际使用中，12GB是最低要求，推荐16GB。',
          },
          {
            q: '二手RTX 3090还能以$500以下买到吗？',
            a: '不能。[InsiderLLM追踪](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（价格数据日期2026-11-23）记录的二手RTX 3090已售出挂牌价约$1,500–1,725，因此它已不是$500以下的选项。这是挂牌数据，不是报价。24GB显存使它仍是通往30B级模型（Q4约需18–20GB）的24GB路线。',
          },
          {
            q: 'AMD显卡能用于本地AI吗？',
            a: '可以，但有条件。Linux上Ollama的ROCm后端对RX 7800 XT等显卡效果良好。Windows ROCm支持在改善中，但仍需手动步骤；截至上次更新，大多数工具不支持在AMD硬件上进行LoRA微调，而支持变化很快，请查看各项目文档。价格提示：RX 7800 XT 16GB见约$832，因此不再符合$500以下预算——在这个价位应选二手RTX 3060 12GB（通常$270–300，CUDA）或Intel Arc B580 12GB（通常$250–290）。若使用Windows或需要微调，请坚持选择NVIDIA。',
          },
          {
            q: 'AI用的Intel Arc显卡怎么样？',
            a: 'Intel Arc B580 12GB是2026年最佳的Arc选择；在存储器短缺重新定价了NVIDIA阵营之后，它也成了本文整体上最好的一张卡。它通过SYCL后端在Windows和Linux上运行Ollama。PromptQuorum并未对其做基准测试；Arc的表现因模型、驱动和后端而异，可能落后于同级NVIDIA显卡。性价比如今很突出：12GB显存通常$250–290（请查看当前挂牌），而全新RTX 3060 12GB见$474–599。主要限制仍在软件层面：截至上次更新，vLLM、微调工具和多模态运行时对Arc的支持仍不完善，因此若需要LoRA微调，请改买二手RTX 3060 12GB。支持变化很快，请查看各项目文档。',
          },
          {
            q: '单块500美元以下的GPU能跑70B模型吗？',
            a: '无法流畅运行。即使是RTX 3090（24GB）也无法将70B Q4（约40GB）完全装入显存。用llama.cpp进行CPU卸载可以分割模型，但此时生成速度远低于完全放进显存的模型，交互使用并不实用。在GPU上运行70B模型需要两张24GB显卡（如2×RTX 3090共48GB）或云推理服务。',
          },
          {
            q: '新款GPU（RTX 5060 Ti）会让这些显卡过时吗？',
            a: 'RTX 5060 Ti 16GB已经上市，而且并没有低于RTX 4060 Ti，反而相反。美国亚马逊曾报道有$679起的零售挂牌（[Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/)，2026-01-27），远高于官方定价——与让整份榜单重新定价的存储器短缺方向一致。它确实是比这里任何一张都更好的GPU，拥有16GB显存和更快的推理速度，但它不是$500以下的显卡，而等待它降到那个价位并不是一个值得依赖的计划。请按现在买得到的东西决策：Intel Arc B580 12GB，若需要CUDA则选二手RTX 3060 12GB（请查看当前挂牌）。',
          },
          {
            q: '二手RTX 4060 Ti 16GB多少钱？',
            a: '上次更新时有货的新品见约$562；我们在上次更新时见到的二手挂牌在eBay上大致处于$420–480区间（当日价格请查看已售出记录），具体取决于成色和剩余保修。二手转售价格似乎也跟随新品一起上涨。这是少数几张买二手也省不了多少钱的显卡，因为按官方定价供应的新品已经断货。查看eBay上已售出（而非在售）的成交记录更准确，并请确认是16GB版本，因为也存在8GB版的RTX 4060 Ti。',
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
          acceptedAnswer: { '@type': 'Answer', text: '8GB显存只能运行7B模型Q4量化版。12GB是最低要求，推荐16GB用于2026年本地LLM实际应用。' },
        },
        {
          '@type': 'Question',
          name: '单块500美元以下的GPU能跑70B模型吗？',
          acceptedAnswer: { '@type': 'Answer', text: '无法流畅运行。即使RTX 3090（24GB）也装不下70B Q4（约40GB）。CPU卸载的速度远低于完全放进显存的模型。实用路线是两张24GB显卡或云推理。' },
        },
        { '@type': 'Question', name: '二手RTX 3090还能以$500以下买到吗？', acceptedAnswer: { '@type': 'Answer', text: '不能——InsiderLLM追踪（价格数据日期2026-11-23）记录的二手RTX 3090已售出挂牌价约$1,500–1,725，已远超$500。需要30B模型能力，二手RTX 3090（24GB）是一条24GB路线。' } },
        { '@type': 'Question', name: 'AI用的Intel Arc显卡怎么样？', acceptedAnswer: { '@type': 'Answer', text: 'Intel Arc B580 12GB是2026年最佳Arc选择，也是本文整体最佳：12GB显存通常$250–290（请查看当前挂牌）。PromptQuorum并未对其做基准测试，Arc的表现因模型、驱动和后端而异。若需要LoRA微调请改买二手RTX 3060 12GB。' } },
        { '@type': 'Question', name: '新款GPU（RTX 5060 Ti）会让这些显卡过时吗？', acceptedAnswer: { '@type': 'Answer', text: 'RTX 5060 Ti 16GB已上市，并未低于RTX 4060 Ti：美国亚马逊曾报道有$679起的零售挂牌（Wccftech，2026-01-27）。它是更好的GPU，但不是$500以下的显卡。' } },
        { '@type': 'Question', name: '二手RTX 4060 Ti 16GB多少钱？', acceptedAnswer: { '@type': 'Answer', text: '二手RTX 4060 Ti 16GB的转售价格似乎跟随新品一起上涨；当日价格请查看eBay上已售出（而非在售）的成交记录，具体取决于成色。请确认是16GB版本，因为也存在8GB版的RTX 4060 Ti。' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年500美元以下LLM推理最佳GPU排行',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: '综合最佳 — 12GB显存，在本页上次更新时于美国主流零售商处挂牌价低于$500的少数全新12GB显卡之一' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB（二手）', description: '最佳CUDA选择 — 12GB显存、完整CUDA工具链，最好买二手' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: '最强硬件，但官方定价的货源在上次更新时缺货，有货的卡见于$500以上' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '2026年500美元以下LLM推理最佳GPU排行', datePublished: '2026-05-26', dateModified: '2026-11-27', url: 'https://www.promptquorum.com/zh/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'zh' },
  },

  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-05-22',
    last_full_refresh: '2026-11-22',
    designSkin: 'hub',
    theme: '하드웨어 & 성능',
    title: '500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ko.webp',
    seoTitle: '2026년 $500 이하 LLM 추론 GPU + RTX 4060 Ti 가격',
    metaDescription: '$500 이하 로컬 LLM 추론 GPU는 Intel Arc B580 12GB가 1순위, CUDA는 중고 RTX 3060 12GB입니다. RTX 4060 Ti 16GB가 빠진 이유도 설명합니다.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    affiliateLinks: [
      { url: 'https://www.amazon.com/s?k=Intel+Arc+B580', productName: 'Intel Arc B580 12GB', productCategory: 'gpu', priceRange: '일반적으로 $250–290', label: 'Intel Arc B580 12GB 가격 확인 →' },
      { url: 'https://www.amazon.com/s?k=RTX+3060+12GB', productName: 'RTX 3060 12GB(중고)', productCategory: 'gpu', priceRange: '일반적으로 $270–300 중고', label: 'RTX 3060 12GB 가격 확인 →' },
      { url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: '마지막 갱신 시 약 $562 확인', label: 'RTX 4060 Ti 16GB 가격 확인 →' },
    ],
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500 이하 로컬 LLM 추론에 가장 적합한 GPU는 이제 Intel Arc B580 12GB입니다. 12GB VRAM으로 7B–13B 모델을 Q4로 실행하며, 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 $500 미만으로 등록되어 있던 몇 안 되는 신품 12GB 카드 중 하나입니다(마지막 전체 가격 확인일 2026-11-22). 현재 매물을 확인하십시오. CUDA 도구 체인이 필요하다면 중고 RTX 3060 12GB가 차선책입니다. 마지막 갱신 시점의 일반적인 실거래가는 Arc B580이 $250–290, 중고 RTX 3060 12GB가 $270–300이었습니다(PromptQuorum이 지속적으로 추적하지 않습니다. 오늘 가격은 판매처 링크에서 확인하십시오). 직전 1위였던 RTX 4060 Ti 16GB는 이 범위에서 벗어났습니다. 정가 매물은 품절이었고 재고가 있는 카드는 마지막 갱신 시 약 $562로 확인되었습니다. 신품 RTX 3060 12GB는 약 $474–599로 확인되었습니다. 시장 보고서는 2026년 가격 상승의 원인을 AI 데이터센터 수요와 맞물린 DRAM 및 GDDR 공급 부족으로 설명합니다([InsiderLLM 추적](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 출처 갱신일 2026-10-15). PromptQuorum은 이 카드들의 벤치마크를 수행하지 않았습니다. 소형 모델의 속도는 주로 메모리 대역폭과 드라이버에 좌우됩니다. 30B 모델이 필요하다면 중고 RTX 3090(24GB)이 현실적인 선택이며, 판매 완료 매물 기준 약 $1,500–1,725입니다([InsiderLLM 추적](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 가격 데이터 기준일 2026-11-23). 가격은 미국 달러 기준이며 한국 내 가격은 다를 수 있습니다.**',
    quickAnswerTop: {
      question: '$500 이하에서 LLM을 로컬로 실행하기에 가장 좋은 GPU는 무엇입니까?',
      answer: '**Intel Arc B580 12GB는 $500 이하 로컬 LLM 추론에서 최고의 GPU입니다.** 12GB VRAM으로 7B–13B 모델을 Q4로 실행하고, SYCL/oneAPI 백엔드를 통해 Windows와 Linux에서 Ollama가 동작하며, 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 $500 미만으로 등록되어 있던 몇 안 되는 신품 12GB 카드 중 하나입니다(일반적으로 $250–290 안팎이며, 마지막 전체 가격 확인일은 2026-11-22이며 현재 매물을 확인하십시오). CUDA 도구 체인이 필요하면 중고 RTX 3060 12GB(일반적으로 $270–300)가 차선책입니다. 2026년 메모리 공급 부족으로 이 목록의 나머지 대부분은 이 범위를 벗어났습니다. 마지막 갱신 시점에 RTX 4060 Ti 16GB는 재고가 있을 때 약 $562, 신품 RTX 3060 12GB는 $474–599, RTX 4070 12GB는 $560–705, RX 7800 XT 16GB는 약 $832로 확인되었습니다(일반적인 실거래가이며 PromptQuorum이 추적하지 않습니다). 중고 RTX 3090은 판매 완료 매물 기준 약 $1,500–1,725입니다([InsiderLLM 추적](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 가격 데이터 기준일 2026-11-23). 가격은 미국 달러 기준이며 한국 내 가격은 다를 수 있습니다.',
      bullets: [
        '**우승:** Intel Arc B580 12GB — 12GB VRAM, 마지막 갱신 시 일반적으로 $250–290, 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 $500 미만으로 등록되어 있던 몇 안 되는 신품 12GB 카드 중 하나',
        '**차선책:** 중고 RTX 3060 12GB(일반적으로 $270–300) — 완전한 CUDA 도구 체인으로 가는 가장 저렴한 경로',
        '⚠️ RTX 4060 Ti 16GB: 정가 매물 품절, 재고 있는 카드는 마지막 갱신 시 약 $562 확인 — 더 이상 안정적인 $500 이하 선택지 아님',
        '⚠️ 신품 RTX 3060 12GB: 마지막 갱신 시 $474–599 확인 — 중고로 구매하십시오',
        '⚠️ 중고 RTX 3090: 판매 완료 매물 기준 약 $1,500–1,725(InsiderLLM, 가격 데이터 기준일 2026-11-23) — $500 이하 선택지 아님',
        '⚠️ RTX 4070 12GB: 마지막 갱신 시 $560–705 확인 — $500 이하 선택지 아님',
        '⚠️ RX 7800 XT 16GB: 마지막 갱신 시 약 $832 확인 — $500 이하 선택지 아님',
      ],
      updatedDate: '2026-11-27',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB가 대부분의 사용자에게 최적: 12GB VRAM이며, 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 $500 미만으로 등록되어 있던 몇 안 되는 신품 12GB 카드 중 하나(일반적으로 $250–290, 마지막 전체 가격 확인일 2026-11-22, 현재 매물 확인 필요)**',
          '중고 RTX 3060 12GB(일반적으로 $270–300)가 차선책 — 완전한 CUDA 도구 체인으로 가는 가장 저렴한 경로',
          '⚠️ 가격 경고: 직전 1위였던 RTX 4060 Ti 16GB는 정가에 품절이었고 재고가 있을 때 약 $562로 확인 — $500 이하 목록에서 제거',
          '⚠️ 가격 경고: 신품 RTX 3060 12GB는 $474–599로 확인 — 이 카드는 중고 시장이 합리적입니다',
          '⚠️ 가격 경고: 중고 RTX 3090은 판매 완료 매물 기준 약 $1,500–1,725(InsiderLLM, 가격 데이터 기준일 2026-11-23) — $500 이하 목록에서 제거',
          '⚠️ 가격 경고: RTX 4070 12GB는 $560–705로 확인 — $500 이하 목록에서 제거',
          '⚠️ 가격 경고: RX 7800 XT 16GB는 약 $832로 확인 — $500 이하 목록에서 제거',
          '가격이 움직인 이유: 시장 보고서는 가격 상승의 원인을 AI 데이터센터 수요와 맞물린 DRAM 및 GDDR 공급 부족으로 설명합니다(InsiderLLM 추적 참조). 하드웨어는 그대로이고 가격만 바뀌었습니다. InsiderLLM 외의 가격은 마지막 갱신 시점의 일반적인 실거래가이며 PromptQuorum이 추적하지 않습니다.',
          'PromptQuorum은 이 카드들의 벤치마크를 수행하지 않았습니다. 소형 모델에서는 속도가 주로 메모리 대역폭과 드라이버에 좌우됩니다',
          '30B 이상 모델이 필요하다면 중고 RTX 3090(24GB)이 현실적인 선택이며, 판매 완료 매물 기준 약 $1,500–1,725입니다(InsiderLLM, 가격 데이터 기준일 2026-11-23)',
          '이 목록의 GPU 3개 모두 Ollama와 llama.cpp를 실행합니다. Arc B580의 LM Studio는 마지막 갱신 시점에 아직 베타였습니다(현재 상태를 확인하십시오)',
        ],
      },
      rankedList: {
        title: '500달러 이하 LLM 추론 GPU 순위',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Intel Arc B580 12GB는 500달러 이하 로컬 LLM 추론에서 최고의 GPU입니다. 2026년 메모리 공급 부족 이후에도 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 $500 미만으로 등록되어 있던 몇 안 되는 신품 12GB 카드 중 하나이기 때문입니다(마지막 전체 가격 확인일 2026-11-22).',
          },
          {
            type: 'plain-terms',
            text: 'GPU VRAM은 어떤 AI 모델을 실행할 수 있는지 결정합니다. 16GB GPU는 14B 모델을 고품질로 실행합니다. 24GB GPU(중고 RTX 3090 등)는 30B 이상 모델을 실행합니다. 12GB 미만이면 7B 이하 모델로 제한됩니다.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — 종합 1위',
            content: '**Intel Arc B580 12GB는 $500 이하 로컬 LLM 추론에서 최고의 GPU입니다. 상당 부분은 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 이 범위에 등록되어 있던 몇 안 되는 같은 종류의 카드 중 하나이기 때문입니다(마지막 전체 가격 확인일 2026-11-22, 현재 매물 확인).** 미국 주요 소매점에서 일반적으로 $250–290 안팎이었습니다(일반적인 실거래가이며 PromptQuorum이 추적하지 않습니다. 판매처 링크에서 확인하십시오). 반면 이 목록을 채우던 신품 NVIDIA 카드 대부분은 2026년 메모리 공급 부족으로 $500을 넘었습니다. SYCL/oneAPI 백엔드를 통해 Linux와 Windows에서 Ollama가 동작합니다. PromptQuorum은 벤치마크를 수행하지 않았으며, Arc의 결과는 모델, 드라이버, 백엔드에 따라 다르고 동급 NVIDIA 카드에 못 미칠 수 있습니다. 12GB VRAM 상한 때문에 Q4 기준 약 14B 모델까지로 제한되고 14B Q8은 들어가지 않습니다. Intel의 드라이버 지원은 출시 이후 크게 개선되었지만 도구 생태계의 폭에서는 여전히 CUDA에 못 미칩니다. Ollama와 llama.cpp는 잘 동작하고 LoRA 파인튜닝은 번거롭다고 보시면 됩니다.',
            affiliateLinks: [
              { label: 'Amazon에서 Intel Arc B580 12GB 보기', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Newegg에서 Intel Arc B580 12GB 보기', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: '중고 RTX 3060 12GB — 최고의 CUDA 선택지',
            content: 'NVIDIA GeForce RTX 3060 12GB는 완전한 CUDA 도구 체인으로 가는 가장 저렴한 경로이지만 **중고**로 사십시오. 신품은 마지막 갱신 시 $474–599로 확인되었고, 이는 이 문서가 다루는 $500 상한선에 걸치거나 그것을 넘어섭니다. 중고는 일반적으로 $270–300이었습니다(일반적인 실거래가이며 PromptQuorum이 추적하지 않습니다. 판매처 링크에서 확인하십시오). 12GB GDDR6는 7B–13B 모델을 Q4/Q8로 여유 있게 실행합니다. 14B Q8은 담을 수 없지만 14B Q4(약 8.5GB)는 들어갑니다. 소형 모델의 속도는 주로 메모리 대역폭과 드라이버에 좌우되며, PromptQuorum은 이 카드의 벤치마크를 수행하지 않았습니다. 완전한 CUDA 도구 체인 덕분에 Ollama, LM Studio, vLLM, LoRA 파인튜닝이 Windows와 Linux에서 바로 동작합니다(마지막 갱신 시점 기준이며 각 프로젝트 문서를 확인하십시오). Arc B580이 따라올 수 없는 유일한 지점입니다.',
            affiliateLinks: [
              { label: 'Amazon에서 RTX 3060 12GB 보기', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'Newegg에서 RTX 3060 12GB 보기', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — 최고의 카드, 정가에 구할 수 있다면',
            content: 'RTX 4060 Ti 16GB는 여전히 이 목록에서 최고의 *하드웨어*이며, 2026년 메모리 공급 부족 전까지 이 문서의 1위였습니다. 16GB GDDR6는 Qwen3 14B와 Mistral 12B를 Q4로 GPU 내에서 완전히 실행하고 Q8에서도 스왑 없이 동작합니다. TDP는 165W이며, 필요한 파워서플라이 용량과 커넥터는 사용하시는 모델에 대한 제조사 권장 사항을 확인하십시오. 문제는 구매입니다. 정가 매물은 마지막 갱신 시점에 주요 소매점에서 품절이었고, 재고가 있는 카드는 약 $562로 확인되었습니다(마지막 갱신 시 확인한 매물이며 현재 소매 가격을 확인하십시오). 정가나 그에 가까운 값에 찾는다면 이 문서에서 강력한 구매 후보이지만, 높은 실거래가에서는 이 문서가 상정한 예산을 벗어납니다. 지켜보되 이를 전제로 계획하지는 마십시오.',
            affiliateLinks: [
              { label: 'Amazon에서 RTX 4060 Ti 16GB 보기', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'Newegg에서 RTX 4060 Ti 16GB 보기', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'GPU 비교 — 일반적인 가격과 지원 모델',
        content: 'PromptQuorum은 이 카드들의 벤치마크를 수행하지 않았으므로 이 표에는 VRAM, 일반적인 가격, 지원 모델 규모만 담았습니다. 소형 모델의 속도는 주로 메모리 대역폭, 드라이버, 백엔드에 좌우됩니다. 하이엔드 카드의 개발자 보고 수치는 [llama.cpp 성능 목록](https://github.com/ggml-org/llama.cpp/discussions/15013)을 참조하십시오(개발자 보고, 하이엔드 카드만 수록). 가격은 마지막 갱신 시점의 일반적인 실거래가이며 PromptQuorum이 지속적으로 추적하지 않습니다. 오늘 가격은 판매처 링크에서 확인하십시오. 가격은 미국 달러 기준이며 한국 내 가격은 다를 수 있습니다. $500 상한선에 이르거나 초과하여 제외: 중고 RTX 3090(판매 완료 매물 기준 약 $1,500–1,725, InsiderLLM, 가격 데이터 기준일 2026-11-23), RTX 4070 12GB($560–705), RX 7800 XT 16GB(약 $832), 신품 RTX 3060 12GB($474–599).',
        columns: ['GPU', 'VRAM', '일반적인 가격', '최대 모델'],
        rows: [
          { 'GPU': 'Intel Arc B580 12GB ★', 'VRAM': '12 GB', '일반적인 가격': '$250–290', '최대 모델': '14B (Q4)' },
          { 'GPU': 'RTX 3060 12GB (중고)', 'VRAM': '12 GB', '일반적인 가격': '$270–300', '최대 모델': '14B (Q4)' },
          { 'GPU': 'RTX 4060 Ti 16GB', 'VRAM': '16 GB', '일반적인 가격': '재고 시 약 $562 확인', '최대 모델': '14B (Q8)' },
        ],
      },
      methodology: {
        title: 'GPU 선정 방법',
        content: '선정 기준: 신품 또는 중고로 $500 이하 구매 가능; 주요 추론 런타임(Ollama, LM Studio, llama.cpp) 중 하나 이상 지원; VRAM 12GB 이상(8GB 카드 제외). PromptQuorum은 이 카드들의 벤치마크를 수행하지 않았습니다. 가격 범위는 대략적이며 마지막 갱신 시점에 공개 매물과 대조했습니다. PromptQuorum이 지속적으로 추적하지 않으므로 오늘 가격은 판매처 링크에서 확인하십시오. 가격은 마지막 갱신 시점에 소매점의 공개 매물에서 확인했습니다. 해당 전체 확인일은 2026-11-22이며, 이후에는 중고 RTX 3090 수치(2026-11-23 기준)만 갱신했습니다. 여러 카드가 가격 때문에 목록에서 빠졌습니다. 중고 RTX 3090(24GB)은 판매 완료 매물 기준 약 $1,500–1,725([InsiderLLM 추적](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 가격 데이터 기준일 2026-11-23), RTX 4070 12GB는 $560–705, RX 7800 XT 16GB는 약 $832, 신품 RTX 3060 12GB는 $474–599로 확인되었습니다. RTX 4060 Ti 16GB는 목록에 남기되 주의 표시를 달았습니다. 정가 매물은 품절이었고 재고품은 약 $562로 확인되었습니다. 시장 보고서는 가격 상승의 원인을 AI 데이터센터 수요와 맞물린 DRAM 및 GDDR 공급 부족으로 설명하며, RTX 5090 신품은 권장가 $1,999 대비 약 $4,500–4,700, RTX 5080은 $999 대비 $1,200–1,600입니다(InsiderLLM 추적, 출처 갱신일 2026-10-15). 소형 모델의 속도는 주로 메모리 대역폭, 드라이버, 백엔드에 좌우됩니다. 개발자 보고 기반의 [llama.cpp 스코어보드](https://github.com/ggml-org/llama.cpp/discussions/15013)는 하이엔드 카드만 수록합니다.',
      },
      vramGuide: {
        title: '모델 크기별 VRAM 요구량',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM 요구량: 7B 모델은 약 4~5GB(Q4) 또는 약 7~8GB(Q8); 14B 모델은 약 8~9GB(Q4) 또는 약 14~15GB(Q8); 30B 모델은 약 18~20GB(Q4); 70B 모델은 약 40~42GB(Q4)가 필요합니다.',
          },
          {
            type: 'plain-terms',
            text: 'VRAM을 AI 모델용 RAM으로 생각하십시오. 빠른 추론을 위해 모델 전체가 VRAM에 들어가야 합니다. 시스템 RAM으로 넘치면(이를 "오프로딩"이라 함) 속도가 보통 크게 떨어지며, 그 폭은 넘치는 양에 따라 달라집니다. Q4 양자화는 약간의 품질 손실로 Q8 대비 크기를 절반으로 줄입니다.',
          },
        ],
        items: [
          '7B 모델 Q4: 약 4.5GB VRAM — 이 목록의 모든 GPU에서 쉽게 처리 가능',
          '7B 모델 Q8: 약 7.5GB VRAM — 여기 있는 모든 GPU에 맞음',
          '13B 모델 Q4: 약 8.5GB VRAM — 이 목록의 모든 GPU에 맞음',
          '14B 모델 Q8: 약 14GB VRAM — RTX 4060 Ti 16GB나 중고 RTX 3090처럼 16GB 이상 카드가 필요하지만 둘 다 현재 $500 이하가 아닙니다',
          '30B 모델 Q4: 약 18GB VRAM — 24GB 필요 (중고 RTX 3090)',
          '70B 모델 Q4: 약 40GB — GPU 2개 또는 CPU 오프로딩 필요',
        ],
      },
      decisionMatrix: {
        title: '어떤 GPU를 구매해야 합니까?',
        content: '주요 용도에 따라 이 결정 가이드를 활용하십시오:',
        items: [
          '**$500 이하 최고 올라운더** → Intel Arc B580 12GB(마지막 갱신 시 일반적으로 $250–290). 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 $500 미만으로 등록되어 있던 몇 안 되는 신품 12GB 카드 중 하나이며, 마지막 전체 가격 확인일은 2026-11-22이며 현재 매물을 확인하십시오. 7B–13B 모델 Q4, SYCL을 통해 Windows와 Linux에서 Ollama 동작.',
          '**가장 저렴한 작동하는 CUDA 카드** → 중고 RTX 3060 12GB(일반적으로 $270–300). Arc와 거의 같은 가격으로 Ollama, LM Studio, vLLM, LoRA 파인튜닝을 포함한 완전한 CUDA 도구 체인을 얻습니다. 중고로 사십시오. 신품은 $474–599로 확인되었습니다.',
          '**정가에 구할 수 있다면 최고의 하드웨어** → RTX 4060 Ti 16GB. 정가라면 강력한 구매 후보이며 14B Q8을 GPU 내에서 실행합니다. 다만 정가 매물은 품절이었고 재고품은 마지막 갱신 시 약 $562로 이 문서의 예산을 벗어납니다.',
          '**30B 모델 기능이 필요하다면?** → 중고 RTX 3090(24GB)이 현실적인 선택이지만, 판매 완료 매물은 약 $1,500–1,725(InsiderLLM, 가격 데이터 기준일 2026-11-23)로 $500을 크게 웃돕니다.',
          '**Windows 사용자, 간편 설정** → 중고 RTX 3060 12GB. NVIDIA CUDA가 LLM, 파인튜닝, 멀티모달 런타임에서 가장 넓은 Windows 지원을 제공하며, 중고 3060이 그 생태계로 들어가는 가장 저렴한 방법입니다.',
          '**테스트에 12 GB보다 많은 용량이 필요하십니까?** 예산을 늘리는 대신 [24 GB 카드를 몇 달러에 대여](/ko/power-local-llm/best-cloud-gpu-providers)하여 더 큰 모델이 그만한 가치가 있는지 확인할 수 있습니다.',
        ],
      },
      softwareCompat: {
        title: 'GPU별 소프트웨어 호환성',
        content: '3개 GPU 모두 Ollama와 llama.cpp를 실행합니다. 차이는 고급 도구에서 나타납니다(마지막 갱신 시점 기준 지원 현황이며 변화가 빠르므로 각 프로젝트 문서를 확인하십시오):',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA 파인튜닝'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ 베타', vLLM: '❌', 'Text Gen WebUI': '⚠️ 부분', 'CUDA 파인튜닝': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA 파인튜닝': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA 파인튜닝': '✅' },
        ],
      },
      powerAndCooling: {
        title: '소비 전력 및 시스템 요구 사항',
        content: 'GPU 소비 전력은 필요한 파워서플라이와 케이스를 결정합니다. LLM 실행 시 GPU는 80~100% 부하 상태가 이어지는 경우가 많으며, 게임과 달리 유휴 프레임이 거의 없습니다. 필요한 파워서플라이 용량과 커넥터는 사용하시는 모델에 대한 제조사 권장 사항을 확인하십시오.',
        items: [
          'Intel Arc B580 12GB: 190W — 일반적으로 650W 이상 파워서플라이; 표준 8핀; 제조사 권장 사항 확인',
          'RTX 3060 12GB: 170W — 일반적으로 550W 이상 파워서플라이; 8핀 커넥터 1개; 제조사 권장 사항 확인',
          'RTX 4060 Ti 16GB: 165W — 일반적으로 550W 이상 파워서플라이; 8핀 커넥터 1개; 제조사 권장 사항 확인',
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
            a: '아니요. [InsiderLLM 추적](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(가격 데이터 기준일 2026-11-23)은 중고 RTX 3090의 판매 완료 매물을 약 $1,500–1,725로 기록하고 있어, 더 이상 $500 이하 선택지가 아닙니다. 이는 매물 데이터이며 가격 견적이 아닙니다. 24GB VRAM 덕분에 30B급 모델(Q4에서 약 18–20GB 필요)로 가는 24GB 경로로 남아 있습니다.',
          },
          {
            q: 'AMD GPU로 로컬 LLM을 실행할 수 있습니까?',
            a: '가능하지만 제약이 있습니다. Linux에서 ROCm을 사용하는 Ollama는 RX 7800 XT 같은 카드에서 잘 동작합니다. Windows ROCm 지원은 개선되었지만 여전히 수동 설정이 필요하며, AMD 하드웨어에서의 파인튜닝(LoRA)은 마지막 갱신 시점에 대부분의 도구에서 지원되지 않았습니다. 지원은 빠르게 바뀌므로 각 프로젝트 문서를 확인하십시오. 가격 참고: RX 7800 XT 16GB는 약 $832로 확인되어 $500 이하 예산에 맞지 않습니다. 그 가격대라면 중고 RTX 3060 12GB(일반적으로 $270–300, CUDA) 또는 Intel Arc B580 12GB(일반적으로 $250–290)가 선택지입니다. Windows를 쓰거나 파인튜닝이 필요하면 NVIDIA를 유지하십시오.',
          },
          {
            q: 'AI용 Intel Arc GPU는 어떻습니까?',
            a: 'Intel Arc B580 12GB는 2026년 최고의 Arc 선택지이며, 메모리 공급 부족이 NVIDIA 진영의 가격을 다시 매긴 뒤로는 이 문서 전체에서 가장 좋은 카드가 되었습니다. SYCL 백엔드를 통해 Windows와 Linux 모두에서 Ollama를 실행합니다. PromptQuorum은 벤치마크를 수행하지 않았으며, Arc의 결과는 모델, 드라이버, 백엔드에 따라 다르고 동급 NVIDIA 카드에 못 미칠 수 있습니다. 가성비는 이제 강력합니다. 12GB VRAM이 일반적으로 $250–290(현재 매물 확인 필요)인 반면 신품 RTX 3060 12GB는 $474–599로 확인되었습니다. 주된 한계는 여전히 소프트웨어입니다. 마지막 갱신 시점에 vLLM, 파인튜닝 도구, 멀티모달 런타임은 Arc를 제대로 지원하지 않았으므로 LoRA 파인튜닝이 필요하면 중고 RTX 3060 12GB를 사십시오. 지원은 빠르게 바뀌므로 각 프로젝트 문서를 확인하십시오.',
          },
          {
            q: '500달러 이하 GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
            a: '전체 속도로는 불가능합니다. RTX 3090(24GB)조차 70B Q4(약 40GB)를 VRAM에 완전히 담을 수 없습니다. llama.cpp의 CPU 오프로드로 모델을 GPU VRAM과 시스템 RAM에 나눌 수 있지만, 이 경우 생성 속도가 VRAM에 완전히 올린 모델보다 크게 낮아 대화형 사용에는 실용적이지 않습니다. GPU에서 70B 모델을 실행하려면 24GB 카드 2장(RTX 3090 ×2, 48GB 합산) 또는 클라우드 추론이 필요합니다.',
          },
          {
            q: '새로운 GPU(RTX 5060 Ti)가 이 GPU들을 구식으로 만들 것입니까?',
            a: 'RTX 5060 Ti 16GB는 이미 출시되었고, RTX 4060 Ti보다 낮은 가격이 되기는커녕 반대가 되었습니다. 미국 Amazon에서 $679부터 시작하는 소매 매물이 보고되었습니다([Wccftech](https://wccftech.com/gamers-ditch-geforce-rtx-5060-ti-16-gb-as-the-gpu-soars-in-price-significantly/), 2026-01-27). 정가를 크게 웃도는 수준이며, 이 목록 전체의 가격을 다시 매긴 메모리 공급 부족과 같은 방향입니다. 16GB VRAM과 더 빠른 추론을 갖춘, 여기 있는 어떤 것보다도 실제로 더 나은 GPU이지만 $500 이하 카드는 아니며, 그렇게 되기를 기다리는 것은 세울 만한 계획이 아닙니다. 지금 구할 수 있는 것으로 결정하십시오. Intel Arc B580 12GB, CUDA가 필요하면 중고 RTX 3060 12GB입니다(현재 매물을 확인하십시오).',
          },
          {
            q: '중고 RTX 4060 Ti 16GB의 가격은 얼마입니까?',
            a: '마지막 갱신 시점에 재고가 있는 신품이 약 $562로 확인되었고, 마지막 갱신 시점에 확인한 중고 매물은 상태와 남은 보증 기간에 따라 eBay에서 대략 $420–480 범위였습니다(오늘 가격은 판매 완료 매물에서 확인하십시오). 중고 재판매 가격도 신품 상승을 따라간 것으로 보입니다. 정가 신품 공급이 말라붙었기 때문에 중고로 사도 크게 절약되지 않는 몇 안 되는 카드 중 하나입니다. eBay에서는 판매 완료(진행 중이 아닌) 매물을 확인하고 16GB 버전인지 확인하십시오. 8GB 버전의 RTX 4060 Ti도 존재합니다.',
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
            text: '8GB VRAM은 Q4 양자화 기준 7B 모델로 제한됩니다. 2026년 의미 있는 로컬 LLM 사용을 위해 최소 12GB, 권장 16GB가 필요합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '2026년에 중고 RTX 3090을 $500 이하로 구매할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '아니요 — InsiderLLM 추적(가격 데이터 기준일 2026-11-23)은 중고 RTX 3090의 판매 완료 매물을 약 $1,500–1,725로 기록하고 있어 $500을 크게 넘습니다. 30B 기능이 필요하다면 중고 RTX 3090(24GB)이 24GB 경로입니다.',
          },
        },
        {
          '@type': 'Question',
          name: '500달러 이하 GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '전체 속도로는 불가능합니다. RTX 3090(24GB)조차 70B Q4(약 40GB)를 VRAM에 담을 수 없습니다. CPU 오프로드 시 속도는 VRAM에 완전히 올린 모델보다 크게 낮습니다. 실용적인 경로는 24GB GPU 2개 또는 클라우드 추론입니다.',
          },
        },
        {
          '@type': 'Question',
          name: '중고 RTX 4060 Ti 16GB의 가격은 얼마입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '중고 RTX 4060 Ti 16GB 재판매 가격은 신품 상승을 따라간 것으로 보입니다. 오늘 가격은 eBay의 판매 완료(진행 중이 아닌) 매물에서 확인하십시오. 상태에 따라 다릅니다. 8GB 버전이 아닌 16GB 버전인지 확인하십시오.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: '종합 1위 — 12GB VRAM, 이 문서의 마지막 갱신 시점에 미국 주요 소매점에서 $500 미만으로 등록되어 있던 몇 안 되는 신품 12GB 카드 중 하나' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (중고)', description: '최고의 CUDA 선택지 — 12GB VRAM, 완전한 CUDA 도구 체인, 중고 구매 권장' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: '최고의 하드웨어이지만 정가 매물은 마지막 갱신 시 품절이었고 재고품은 $500 이상으로 확인됨' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)',
      description: '500달러 이하 로컬 AI 추론 GPU 비교 순위: Intel Arc B580 12GB, 중고 RTX 3060 12GB, RTX 4060 Ti 16GB. 2026년 메모리 공급 부족으로 RTX 3090, RTX 4070, RX 7800 XT, 신품 RTX 3060이 $500을 넘었습니다.',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      url: 'https://www.promptquorum.com/ko/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
      about: [
        { '@type': 'Thing', name: 'LLM 추론용 GPU' },
        { '@type': 'Thing', name: '로컬 인공지능' },
        { '@type': 'Thing', name: 'NVIDIA GeForce RTX 4060 Ti' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'LM Studio' },
        { '@type': 'SoftwareApplication', name: 'llama.cpp' },
      ],
    },
  },
}
