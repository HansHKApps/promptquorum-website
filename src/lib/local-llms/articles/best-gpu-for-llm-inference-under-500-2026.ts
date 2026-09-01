import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: 'Best GPU for LLM Inference Under $500 (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-en.webp',
    seoTitle: 'Best GPU Under $500 for LLM Inference: Intel Arc B580',
    metaDescription: 'The best GPU under $500 for local LLM inference is now the Intel Arc B580 12GB (~$250-290) — the 2026 memory shortage pushed the RTX 4060 Ti 16GB and new RTX 3060 above $500.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**The best GPU under $500 for local LLM inference is now the Intel Arc B580 12GB ($250–290): 12 GB VRAM for 7B–13B models at Q4, ~31 tok/s on Llama 3.1 8B Q4, and the only new 12 GB card still reliably in stock below $500. For the CUDA toolchain, a used RTX 3060 12GB ($270–300) is the runner-up. The previous winner, the RTX 4060 Ti 16GB, has left the window: its $399 MSRP listings sit out of stock and in-stock cards trade near $562. The RTX 3060 12GB has risen 45% since its relaunch and now costs $474–599 new. The 2026 DRAM/GDDR7 shortage, driven by AI datacenter demand, is what moved all of them. For 30B model capability, budget $850+.**',
    quickAnswerTop: {
      question: 'What is the best GPU for running LLMs locally under $500?',
      answer: '**The Intel Arc B580 12GB ($250–290) is the best GPU under $500 for local LLM inference.** Its 12 GB VRAM runs 7B–13B models at Q4, it works with Ollama through the SYCL/oneAPI backend on Windows and Linux, and it is the only new 12 GB card still dependably available below $500. A used RTX 3060 12GB ($270–300) is the runner-up if you need the CUDA toolchain. The 2026 memory shortage has pushed the rest of this list out of the window: the RTX 4060 Ti 16GB now trades near $562 when in stock, the new RTX 3060 12GB is $474–599, the used RTX 3090 is $850–1,050, the RTX 4070 12GB is $560–705, and the RX 7800 XT 16GB is ~$832.',
      bullets: [
        '**Winner:** Intel Arc B580 12GB ($250–290) — 12 GB VRAM, ~31 tok/s on Llama 3.1 8B Q4, the only new 12 GB card reliably under $500',
        '**Runner-up:** RTX 3060 12GB used ($270–300) — the cheapest route to the full CUDA toolchain',
        '⚠️ RTX 4060 Ti 16GB: $399 MSRP listings out of stock, in-stock cards near $562 — no longer dependably sub-$500',
        '⚠️ RTX 3060 12GB new: $474–599, up 45% since its relaunch — buy this one used instead',
        '⚠️ RTX 3090 used: now $850–1,050 — no longer sub-$500',
        '⚠️ RTX 4070 12GB: now $560–705 — no longer sub-$500',
        '⚠️ RX 7800 XT 16GB: ~$832 — no longer sub-$500',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB wins for most users: 12 GB VRAM, $250–290, ~31 tok/s on Llama 3.1 8B Q4 — the only new 12 GB card still reliably under $500**',
          'RTX 3060 12GB used ($270–300) is the runner-up — the cheapest way to get the full CUDA toolchain',
          '⚠️ Price alert: RTX 4060 Ti 16GB, the previous winner, is out of stock at its $399 MSRP and trades near $562 when available — removed from the sub-$500 list',
          '⚠️ Price alert: new RTX 3060 12GB is $474–599, up 45% since its relaunch — the used market is the sane route to this card',
          '⚠️ Price alert: used RTX 3090 is now $850–1,050 — removed from sub-$500 list',
          '⚠️ Price alert: RTX 4070 12GB is now $560–705 — removed from sub-$500 list',
          '⚠️ Price alert: RX 7800 XT 16GB is now ~$832 — removed from sub-$500 list',
          'Why everything moved: a worldwide DRAM and GDDR7 shortage, driven by AI datacenter demand, has pushed graphics-card street prices well above list across the whole market. Nothing about the hardware changed — only what it costs.',
          'Need 30B+ model capability? Budget at least $850 for a used RTX 3090 (24 GB) or save for an RTX 4080 SUPER (16 GB, ~$850)',
          'All three GPUs on this list run Ollama, LM Studio, and llama.cpp out of the box',
        ],
      },
      rankedList: {
        title: 'Best GPUs for LLM Inference Under $500 — Ranked',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'The Intel Arc B580 12GB is the best GPU under $500 for local LLM inference because it is the only new 12 GB card still reliably in stock below $500 after the 2026 memory shortage.',
          },
          {
            type: 'plain-terms',
            text: 'GPU VRAM determines which AI models you can run. A 16 GB GPU runs 14B models at high quality. A 24 GB GPU (like a used RTX 3090) runs 30B+ models. Under 12 GB limits you to 7B models or smaller.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — Best Overall ($250–290)',
            content: '**The Intel Arc B580 12GB is the best GPU under $500 for local LLM inference, largely because it is the last one reliably left in the window.** It launched at $249 and still sells at $249.99 at Best Buy and around $290 at Newegg, while every NVIDIA card that used to occupy this list has been pushed above $500 by the 2026 memory shortage. It runs Ollama via the SYCL/oneAPI backend on both Linux and Windows, delivering ~28–35 tok/s on Llama 3.1 8B Q4. The 12 GB VRAM cap limits you to 13B models at Q4 — it will not hold a 14B at Q8. Intel\'s driver support has improved substantially since launch, though it remains a step behind CUDA in tooling breadth: expect Ollama and llama.cpp to work well, and LoRA fine-tuning to be awkward.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB on Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB on Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB Used — Best CUDA Option ($270–300)',
            content: 'The NVIDIA GeForce RTX 3060 12GB is the cheapest route to the full CUDA toolchain, but buy it **used**. Its retail relaunch at $339 did not hold: new cards have risen roughly 45% to $474–599, which puts the new card at or past the $500 ceiling this page is about. The used market has moved far less, at $270–300. Its 12 GB GDDR6 runs 7B–13B models at Q4/Q8 comfortably; it cannot hold a 14B model at Q8, but a 14B at Q4 (~8.5 GB) fits. Benchmark: ~32–40 tok/s on Llama 3.1 8B Q4 with Ollama. The full CUDA toolchain means Ollama, LM Studio, vLLM, and LoRA fine-tuning all work out of the box on Windows and Linux — the one thing the Arc B580 cannot match.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB on Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB on Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — Best Card, If You Can Find It at List (~$399 MSRP, ~$562 in stock)',
            content: 'The RTX 4060 Ti 16GB is still the best *hardware* on this list and was this page\'s winner until the 2026 memory shortage. Its 16 GB GDDR6 runs Qwen3 14B and Mistral 12B at Q4 fully in-GPU — and at Q8 with no swapping — at 45–60 tok/s on 7B Q4 and 18–25 tok/s on 14B Q8 with Ollama, all at a 165 W TDP that any 650 W PSU handles. The problem is buying one. Listings at the $399 MSRP sit out of stock at major retailers, and the cheapest verifiable in-stock card is around $562, roughly 41% over list. If you find one at or near MSRP it is the best purchase on this page by a wide margin; at $562 it is outside the budget this page is written for. Watch it rather than plan around it.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB on Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB on Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Performance Comparison — Current Prices + Test Results',
        content: 'Benchmarks measured with Ollama 0.30.x, llama.cpp server, models from HuggingFace. Test system: Ryzen 9 7950X, 64 GB DDR5, NVMe SSD. Speeds are unchanged from previous testing — the hardware did not move, the prices did. Excluded for exceeding $500: used RTX 3090 ($850–1,050), RTX 4070 12GB ($560–705), RX 7800 XT 16GB (~$832), and new RTX 3060 12GB ($474–599).',
        columns: ['GPU', 'VRAM', 'Price', 'Llama 3.1 8B Q4 tok/s', 'Qwen3 14B Q8 tok/s', 'Max Model (Q4)'],
        rows: [
          { GPU: 'Intel Arc B580 12GB ★', VRAM: '12 GB', 'Price': '$250–290', 'Llama 3.1 8B Q4 tok/s': '31 tok/s', 'Qwen3 14B Q8 tok/s': 'VRAM limited', 'Max Model (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12GB (used)', VRAM: '12 GB', 'Price': '$270–300', 'Llama 3.1 8B Q4 tok/s': '36 tok/s', 'Qwen3 14B Q8 tok/s': 'VRAM limited', 'Max Model (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', VRAM: '16 GB', 'Price': '~$562 in stock', 'Llama 3.1 8B Q4 tok/s': '55 tok/s', 'Qwen3 14B Q8 tok/s': '22 tok/s', 'Max Model (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-en.svg',
        imageCaption: 'Budget GPU comparison for local LLM inference under $500: Intel Arc B580 12GB ($250–290, 31 tok/s), used RTX 3060 12GB ($270–300, 36 tok/s), and RTX 4060 Ti 16GB (~$562 in stock, 55 tok/s, 30B max) benchmarked with Ollama.',
      },
      methodology: {
        title: 'How We Selected and Tested These GPUs',
        content: 'Selection criteria: available to purchase new or used under $500; supported by at least one major inference runtime (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (8 GB cards excluded — insufficient for meaningful local LLM use). Several cards have been removed from this list on price: used RTX 3090 (24 GB) now trades at $850–1,050; RTX 4070 12GB lists at $560–705; RX 7800 XT 16GB at ~$832; and the new RTX 3060 12GB, which relaunched at $339, has risen about 45% to $474–599. The RTX 4060 Ti 16GB is retained but flagged — its $399 MSRP listings are out of stock and in-stock cards sit near $562. The cause is common to all of them: a worldwide DRAM and GDDR7 shortage driven by AI datacenter demand has pushed graphics-card street prices well above list across the market, with NVIDIA RTX 50-series cards trading roughly 36–39% over MSRP and AMD raising Radeon prices about 10%. All benchmarks are tok/s (tokens per second) generation speed, averaged over 10 runs at batch size 1, measured with Ollama 0.30.x on Ubuntu 22.04 LTS. GPU prices verified against retailer listings and eBay sold listings.',
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
            text: 'Think of VRAM like RAM for AI models. The model must fit entirely in VRAM for fast inference. If it spills to CPU RAM (called "offloading"), speed drops 80–95%. Q4 quantization halves the size vs Q8 at a small quality cost.',
          },
        ],
        items: [
          '7B model at Q4: ~4.5 GB VRAM — any GPU on this list handles it easily',
          '7B model at Q8: ~7.5 GB VRAM — fits all GPUs here',
          '13B model at Q4: ~8.5 GB VRAM — fits all GPUs on this list',
          '14B model at Q8: ~14 GB VRAM — only RTX 4060 Ti 16GB and RTX 3090 (used); neither is under $500 now',
          '30B model at Q4: ~18 GB VRAM — only RTX 3090 (24 GB) handles this comfortably',
          '70B model at Q4: ~40 GB — requires two GPUs or CPU offloading',
        ],
      },
      decisionMatrix: {
        title: 'Which GPU Should You Buy?',
        content: 'Use this decision guide based on your primary use case:',
        items: [
          '**Best all-around under $500** → Intel Arc B580 12GB ($250–290). The only new 12 GB card still dependably in stock below $500. 7B–13B models at Q4, ~31 tok/s on Llama 3.1 8B Q4, Ollama via SYCL on Windows and Linux.',
          '**Cheapest CUDA card that works** → RTX 3060 12GB used ($270–300). The full CUDA toolchain — Ollama, LM Studio, vLLM, LoRA fine-tuning — for roughly the same money as the Arc. Buy used: the new card is now $474–599.',
          '**Best hardware, if you can find it at list** → RTX 4060 Ti 16GB. At its $399 MSRP it beats everything else here, running 14B at Q8 in-GPU. But MSRP listings are out of stock and in-stock cards run ~$562, which is outside this page\'s budget.',
          '**Need 30B model capability?** → The sub-$500 window closed in mid-2026 and has not reopened. Used RTX 3090 (24 GB) now trades at $850–1,050. Budget $850+ for a used RTX 3090 or $850+ for an RTX 4080 SUPER (16 GB).',
          '**Windows user, no fuss** → RTX 3060 12GB used. NVIDIA CUDA has the broadest Windows toolchain support for LLMs, fine-tuning, and multimodal runtimes, and the used 3060 is the cheapest way into it.',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-en.svg',
        imageCaption: 'Decision tree for choosing a budget GPU under $500 for local LLM inference: routes to Intel Arc B580 12GB ($250–290) as the default pick, used RTX 3060 12GB ($270–300) if you need CUDA, and a $850+ used RTX 3090 (24 GB) for 30B models.',
      },
      softwareCompat: {
        title: 'Software Compatibility by GPU',
        content: 'All three GPUs run Ollama and llama.cpp. Differences emerge in advanced tools:',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA Fine-Tuning'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ partial', 'CUDA Fine-Tuning': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA Fine-Tuning': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA Fine-Tuning': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Power Draw and System Requirements',
        content: 'GPU power draw determines what PSU and case you need. Running LLMs keeps GPUs at 80–100% utilization continuously — unlike gaming, there are no idle frames.',
        items: [
          'Intel Arc B580 12GB: 190 W — 650 W+ PSU; standard 8-pin',
          'RTX 3060 12GB: 170 W — works with 550 W+ PSU; one 8-pin connector',
          'RTX 4060 Ti 16GB: 165 W — works with 550 W+ PSU; one 8-pin connector',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Is 8 GB VRAM enough for running LLMs locally?',
            a: '8 GB VRAM limits you to 7B models at Q4 quantization — the full model barely fits. You cannot run 13B models at full quality, and 14B models will partially offload to CPU RAM, dropping speed by 80–95%. For meaningful local LLM use in 2026, 12 GB is the practical minimum, 16 GB is recommended.',
          },
          {
            q: 'Can I still buy a used RTX 3090 for under $500 in 2026?',
            a: 'No. Used RTX 3090 cards trade at $850–1,050 on eBay. The price rose first as LLM enthusiasts recognised the 24 GB VRAM value, then again during the 2026 memory shortage. It is no longer a sub-$500 option and has not been for some time. If you need 30B model capability (which requires 24 GB VRAM), budget $850+ for a used RTX 3090 or consider an RTX 4080 SUPER (16 GB, ~$850 new) for faster 14B Q8 performance.',
          },
          {
            q: 'Does AMD work for running LLMs locally?',
            a: 'Yes, with caveats. Ollama on Linux with ROCm works well on cards like the RX 7800 XT. Windows ROCm support has improved but still requires manual steps, and fine-tuning (LoRA) on AMD hardware is not supported by most tools. Note on pricing: the RX 7800 XT 16GB has risen to ~$832, so it no longer fits a sub-$500 budget — in that price range a used RTX 3060 12GB ($270–300, CUDA) or an Intel Arc B580 12GB ($250–290) are the picks. For Windows or fine-tuning, stick with NVIDIA.',
          },
          {
            q: 'What about Intel Arc GPUs for AI?',
            a: 'Intel Arc B580 12GB is the best Arc option in 2026 and, after the memory shortage repriced the NVIDIA field, the best card on this page overall. It runs Ollama on both Windows and Linux via the SYCL backend, though performance is 30–40% below NVIDIA in raw tok/s. The value case is now decisive rather than merely strong: 12 GB VRAM at $250–290 while comparable NVIDIA cards sit at $474–599. The main limitation is still software — vLLM, fine-tuning tools, and multimodal runtimes do not support Arc well yet, so if you need LoRA fine-tuning, buy a used RTX 3060 12GB instead.',
          },
          {
            q: 'Can I run a 70B model on a single GPU under $500?',
            a: 'Not at full speed. Even the RTX 3090 (24 GB) cannot hold 70B Q4 (~40 GB) entirely in VRAM. You can use CPU offloading with llama.cpp to split the model between GPU VRAM and system RAM, but speed drops to 2–5 tok/s — too slow for interactive use. To run 70B models at usable speeds, you need two GPUs (2× RTX 3090 totaling 48 GB) or cloud inference.',
          },
          {
            q: 'Will newer GPUs (RTX 5060 Ti) make these obsolete?',
            a: 'The RTX 5060 Ti 16GB has shipped, and it did not undercut the RTX 4060 Ti — it went the other way. It launched at a $429 MSRP and now sells at $570–600, roughly 40% over list, because the same memory shortage that repriced this whole list hit it hardest as a current-generation card. It is a genuinely better GPU than anything here, with 16 GB of VRAM and faster inference, but it is not a sub-$500 card and waiting for it to become one is not a plan worth making. Buy on what is available now: the Intel Arc B580 12GB at $250–290, or a used RTX 3060 12GB at $270–300 if you need CUDA.',
          },
          {
            q: 'How much does a used RTX 4060 Ti 16GB cost?',
            a: 'Used RTX 4060 Ti 16GB cards have tracked the new-card rise: with in-stock new cards near $562, used listings now run roughly $420–$480 on eBay and other secondhand marketplaces, depending on condition and remaining warranty. This is one of the few cards where used is not a large saving, because supply of new cards at MSRP dried up. Because the card is relatively recent and demand from LLM users has kept resale value strong, the savings versus new are smaller than with older cards like the RTX 3090. Check sold (not active) eBay listings for the real market price, and confirm the listing is the 16 GB variant — an 8 GB RTX 4060 Ti also exists and cannot run 14B models at Q4.',
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
            text: 'No — used RTX 3090 cards now trade at $850–1,050 on eBay, up from ~$440 in early 2025. For 30B model capability you need a $850+ budget for a used RTX 3090 or ~$850 for an RTX 4080 SUPER (16 GB).',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I run a 70B model on a single GPU under $500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not at full speed. Even the RTX 3090 (24 GB) cannot hold 70B Q4 entirely in VRAM. CPU offloading drops speed to 2–5 tok/s. Two GPUs or cloud inference is required for usable 70B performance.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a used RTX 4060 Ti 16GB cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Used RTX 4060 Ti 16GB cards have tracked the new-card rise: with in-stock new cards near $562, used listings run roughly $420–$480 on eBay, depending on condition. Confirm the listing is the 16 GB variant, since an 8 GB RTX 4060 Ti also exists.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'Best overall — 12 GB VRAM, the only new 12 GB card reliably under $500, $250–290' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (used)', description: 'Best CUDA option — 12 GB VRAM, full CUDA toolchain, $270–300 used' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'Best hardware, but out of stock at its $399 MSRP and ~$562 when in stock' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Best GPU for LLM Inference Under $500 (2026)',
      description: 'Ranked comparison of GPUs under $500 for local AI inference: Intel Arc B580 12GB, used RTX 3060 12GB, RTX 4060 Ti 16GB. The 2026 memory shortage pushed the RTX 3090, RTX 4070, RX 7800 XT and new RTX 3060 above $500.',
      datePublished: '2026-05-26',
      dateModified: '2026-09-01',
      url: 'https://www.promptquorum.com/local-llms/best-gpu-for-llm-inference-under-500-2026',
      inLanguage: 'en',
      'proficiencyLevel': 'Intermediate',
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: 'Mejor GPU para inferencia LLM por menos de 500 € (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-es.webp',
    seoTitle: 'Mejor GPU menos de 500 € para LLM: Intel Arc B580',
    metaDescription: 'La mejor GPU por menos de 500 € para inferencia LLM local es ahora la Intel Arc B580 12GB (250-290 €) — la escasez de memoria de 2026 empujó la RTX 4060 Ti 16GB y la RTX 3060 nueva por encima de 500 €.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**La mejor GPU por menos de 500 € para inferencia LLM local es ahora la Intel Arc B580 12GB (250–290 €): 12 GB de VRAM para modelos 7B–13B en Q4, ~31 tok/s en Llama 3.1 8B Q4, y la única tarjeta nueva de 12 GB que sigue disponible de forma fiable por debajo de 500 €. Para la cadena de herramientas CUDA, una RTX 3060 12GB de segunda mano (270–300 €) es la segunda opción. La ganadora anterior, la RTX 4060 Ti 16GB, ha salido de la ventana: sus anuncios al PVP de 399 € están sin stock y las unidades disponibles rondan los 560 €. La RTX 3060 12GB ha subido un 45 % desde su relanzamiento y cuesta 470–600 € nueva. La escasez mundial de DRAM y GDDR7 de 2026, impulsada por la demanda de los centros de datos de IA, es lo que ha movido a todas ellas. Para capacidad de modelos 30B, presupuesta 900 €+. Precios de referencia para España (PVP con IVA); en Latinoamérica los precios varían por impuestos de importación y tipo de cambio.**',
    quickAnswerTop: {
      question: '¿Cuál es la mejor GPU para ejecutar LLMs localmente por menos de 500 €?',
      answer: '**La Intel Arc B580 12GB (250–290 €) es la mejor GPU por menos de 500 € para inferencia LLM local.** Sus 12 GB de VRAM ejecutan modelos 7B–13B en Q4, funciona con Ollama mediante el backend SYCL/oneAPI en Windows y Linux, y es la única tarjeta nueva de 12 GB que sigue estando disponible de forma fiable por debajo de 500 €. Una RTX 3060 12GB de segunda mano (270–300 €) es la segunda opción si necesitas la cadena de herramientas CUDA. La escasez de memoria de 2026 ha sacado al resto de esta lista de la ventana: la RTX 4060 Ti 16GB ronda los 560 € cuando hay stock, la RTX 3060 12GB nueva está a 470–600 €, la RTX 3090 usada a 850–1.050 €, la RTX 4070 12GB a 560–705 € y la RX 7800 XT 16GB a ~682 €.',
      bullets: [
        '**Ganadora:** Intel Arc B580 12GB (250–290 €) — 12 GB VRAM, ~31 tok/s en Llama 3.1 8B Q4, la única tarjeta nueva de 12 GB fiablemente por debajo de 500 €',
        '**Segunda opción:** RTX 3060 12GB de segunda mano (270–300 €) — la vía más barata a la cadena de herramientas CUDA completa',
        '⚠️ RTX 4060 Ti 16GB: sin stock a su PVP de 399 €, ~560 € cuando aparece — ya no es fiablemente sub-500 €',
        '⚠️ RTX 3060 12GB nueva: 470–600 €, un 45 % más desde su relanzamiento — cómprala de segunda mano',
        '⚠️ RTX 3090 de segunda mano: ahora 850–1.050 € — ya no es sub-500 €',
        '⚠️ RTX 4070 12GB: ahora 560–705 € — ya no es sub-500 €. RX 7800 XT 16GB: ~682 € — tampoco.',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**La Intel Arc B580 12GB gana para la mayoría: 12 GB VRAM, 250–290 €, ~31 tok/s en Llama 3.1 8B Q4 — la única tarjeta nueva de 12 GB fiablemente por debajo de 500 €**',
          'La RTX 3060 12GB de segunda mano (270–300 €) es la segunda opción — la vía más barata a la cadena de herramientas CUDA completa',
          '⚠️ Alerta de precio: la RTX 4060 Ti 16GB, la ganadora anterior, está sin stock a su PVP de 399 € y ronda los 560 € cuando aparece — eliminada de la lista sub-500 €',
          '⚠️ Alerta de precio: la RTX 3060 12GB nueva está a 470–600 €, un 45 % más desde su relanzamiento — el mercado de segunda mano es la vía sensata para esta tarjeta',
          '⚠️ Alerta de precio: la RTX 3090 de segunda mano ahora vale 850–1.050 €; la RTX 4070 12GB, 560–705 € — ambas eliminadas de la lista sub-500 €',
          'Por qué se movió todo: una escasez mundial de DRAM y GDDR7, impulsada por la demanda de los centros de datos de IA, ha empujado los precios de calle muy por encima del precio de lista en todo el mercado. El hardware no ha cambiado; solo lo que cuesta.',
          '¿Necesitas capacidad para modelos 30B? Presupuesta al menos 850 € para una RTX 3090 usada (24 GB) o ahorra para una RTX 4080 SUPER (16 GB, ~999 €)',
          'Las tres GPU de esta lista funcionan con Ollama, LM Studio y llama.cpp de fábrica',
        ],
      },
      rankedList: {
        title: 'Mejores GPU para inferencia LLM por menos de 500 € — Clasificadas',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'La Intel Arc B580 12GB es la mejor GPU por menos de 500 € para inferencia LLM local porque es la única tarjeta nueva de 12 GB que sigue disponible de forma fiable por debajo de 500 € tras la escasez de memoria de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'El VRAM de la GPU determina qué modelos de IA puedes ejecutar. Una GPU de 16 GB ejecuta modelos 14B en alta calidad. Una GPU de 24 GB (como una RTX 3090 de segunda mano) ejecuta modelos de 30B o más. Con menos de 12 GB estás limitado a modelos 7B o más pequeños.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — Mejor opción global (250–290 €)',
            content: '**La Intel Arc B580 12GB es la mejor GPU por menos de 500 € para inferencia LLM local, en buena medida porque es la última que queda de forma fiable dentro de esa ventana.** Se lanzó a 249 € y sigue vendiéndose entre 250 y 290 €, mientras que todas las tarjetas NVIDIA que solían ocupar esta lista han superado los 500 € por la escasez de memoria de 2026. Ejecuta Ollama mediante el backend SYCL/oneAPI en Linux y Windows, con ~28–35 tok/s en Llama 3.1 8B Q4. El límite de 12 GB de VRAM te restringe a modelos 13B en Q4 — no alojará un 14B en Q8. El soporte de controladores de Intel ha mejorado mucho desde el lanzamiento, aunque sigue por detrás de CUDA en amplitud de herramientas: espera que Ollama y llama.cpp funcionen bien y que el ajuste fino LoRA sea incómodo.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB en Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB en Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB usada — Mejor opción CUDA (270–300 €)',
            content: 'La NVIDIA GeForce RTX 3060 12GB es la vía más barata a la cadena de herramientas CUDA completa, pero cómprala **de segunda mano**. Su relanzamiento minorista a 334 € no se sostuvo: las unidades nuevas han subido en torno a un 45 % hasta 470–600 €, lo que sitúa la tarjeta nueva en el techo de 500 € del que trata esta página, o por encima. El mercado de segunda mano se ha movido mucho menos, entre 270 y 300 €. Sus 12 GB GDDR6 ejecutan modelos 7B–13B en Q4/Q8 con comodidad; no puede alojar un 14B en Q8, pero un 14B en Q4 (~8.5 GB) cabe. Benchmark: ~32–40 tok/s en Llama 3.1 8B Q4 con Ollama. La cadena CUDA completa significa que Ollama, LM Studio, vLLM y el ajuste fino LoRA funcionan de fábrica en Windows y Linux — lo único que la Arc B580 no puede igualar.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB en Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB en Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — La mejor tarjeta, si la encuentras a PVP (399 € PVP, ~560 € con stock)',
            content: 'La RTX 4060 Ti 16GB sigue siendo el mejor *hardware* de esta lista y fue la ganadora de esta página hasta la escasez de memoria de 2026. Sus 16 GB GDDR6 ejecutan Qwen3 14B y Mistral 12B en Q4 completamente en GPU — y en Q8 sin intercambio — a 45–60 tok/s en 7B Q4 y 18–25 tok/s en 14B Q8 con Ollama, con un TDP de 165 W que cualquier fuente de 650 W asume. El problema es comprarla. Los anuncios al PVP de 399 € están sin stock en los grandes minoristas, y la unidad disponible más barata que se puede verificar ronda los 560 €, alrededor de un 41 % por encima del precio de lista. Si encuentras una a PVP o cerca, es con diferencia la mejor compra de esta página; a 560 € queda fuera del presupuesto para el que está escrita. Vigílala, pero no planifiques contando con ella.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB en Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB en Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparación de rendimiento — Precios actuales + Resultados de pruebas',
        content: 'Benchmarks medidos con Ollama 0.30.x, servidor llama.cpp, modelos de HuggingFace. Sistema de prueba: Ryzen 9 7950X, 64 GB DDR5, NVMe SSD. Las velocidades no han cambiado respecto a pruebas anteriores: el hardware no se ha movido, los precios sí. Excluidas por superar los 500 €: RTX 3090 usada (850–1.050 €), RTX 4070 12GB (560–705 €), RX 7800 XT 16GB (~682 €) y RTX 3060 12GB nueva (470–600 €).',
        columns: ['GPU', 'VRAM', 'Precio', 'Llama 3.1 8B Q4 tok/s', 'Qwen3 14B Q8 tok/s', 'Modelo máximo (Q4)'],
        rows: [
          { GPU: 'Intel Arc B580 12GB ★', VRAM: '12 GB', 'Precio': '250–290 €', 'Llama 3.1 8B Q4 tok/s': '31 tok/s', 'Qwen3 14B Q8 tok/s': 'Limitado por VRAM', 'Modelo máximo (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12GB (usada)', VRAM: '12 GB', 'Precio': '270–300 €', 'Llama 3.1 8B Q4 tok/s': '36 tok/s', 'Qwen3 14B Q8 tok/s': 'Limitado por VRAM', 'Modelo máximo (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', VRAM: '16 GB', 'Precio': '~560 € con stock', 'Llama 3.1 8B Q4 tok/s': '55 tok/s', 'Qwen3 14B Q8 tok/s': '22 tok/s', 'Modelo máximo (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-es.svg',
        imageCaption: 'Comparativa de GPU económicas para inferencia LLM local por menos de 500 €: Intel Arc B580 12GB (250–290 €, 31 tok/s), RTX 3060 12GB usada (270–300 €, 36 tok/s) y RTX 4060 Ti 16GB (~560 € con stock, 55 tok/s, 30B máx.), medidas con Ollama.',
      },
      methodology: {
        title: 'Cómo seleccionamos y probamos estas GPU',
        content: 'Criterios de selección: disponibles para compra nueva o usada por menos de 500 €; compatibles con al menos un runtime de inferencia principal (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (tarjetas de 8 GB excluidas). Varias tarjetas han salido de la lista por precio: la RTX 3090 usada (24 GB) cotiza ahora a 850–1.050 €; la RTX 4070 12GB a 560–705 €; la RX 7800 XT 16GB a ~682 €; y la RTX 3060 12GB nueva, que se relanzó a 334 €, ha subido en torno a un 45 % hasta 470–600 €. La RTX 4060 Ti 16GB se mantiene, pero con advertencia: sus anuncios al PVP de 399 € están sin stock y las unidades disponibles rondan los 560 €. La causa es común a todas: una escasez mundial de DRAM y GDDR7 impulsada por la demanda de los centros de datos de IA ha empujado los precios de calle muy por encima del precio de lista en todo el mercado, con las RTX 50 de NVIDIA en torno a un 36–39 % por encima del PVP y AMD subiendo Radeon alrededor de un 10 %. Todos los benchmarks son tok/s, promediados sobre 10 ejecuciones con batch size 1, medidos con Ollama 0.30.x en Ubuntu 22.04 LTS.',
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
            text: 'Piensa en el VRAM como la RAM para los modelos de IA. El modelo debe caber completamente en VRAM para una inferencia rápida. Si se desborda a la RAM del sistema (llamado "offloading"), la velocidad cae un 80–95%. La cuantización Q4 reduce el tamaño a la mitad respecto a Q8 con un pequeño coste en calidad.',
          },
        ],
        items: [
          'Modelo 7B en Q4: ~4.5 GB VRAM — cualquier GPU de esta lista lo maneja fácilmente',
          'Modelo 7B en Q8: ~7.5 GB VRAM — cabe en todas las GPU aquí',
          'Modelo 13B en Q4: ~8.5 GB VRAM — cabe en todas las GPU de esta lista',
          'Modelo 14B en Q8: ~14 GB VRAM — solo RTX 4060 Ti 16GB y RTX 3090 (usada)',
          'Modelo 30B en Q4: ~18 GB VRAM — requiere 24 GB (RTX 3090 usada, ahora 850 €+)',
          'Modelo 70B en Q4: ~40 GB — requiere dos GPU o descarga a CPU',
        ],
      },
      decisionMatrix: {
        title: '¿Qué GPU deberías comprar?',
        content: 'Usa esta guía de decisión según tu caso de uso principal. Precios verificados:',
        items: [
          '**Mejor opción general por menos de 500 €** → Intel Arc B580 12GB (250–290 €). La única tarjeta nueva de 12 GB fiablemente disponible por debajo de 500 €. Modelos 7B–13B en Q4, ~31 tok/s en Llama 3.1 8B Q4, Ollama vía SYCL en Windows y Linux.',
          '**Tarjeta CUDA más barata que funciona** → RTX 3060 12GB de segunda mano (270–300 €). La cadena CUDA completa — Ollama, LM Studio, vLLM, ajuste fino LoRA — por aproximadamente el mismo dinero que la Arc. Cómprala usada: la nueva está a 470–600 €.',
          '**El mejor hardware, si lo encuentras a PVP** → RTX 4060 Ti 16GB. A su PVP de 399 € supera a todo lo demás aquí, ejecutando 14B en Q8 en GPU. Pero los anuncios a PVP están sin stock y las unidades disponibles rondan los 560 €, fuera del presupuesto de esta página.',
          '**¿Necesitas capacidad para modelos 30B?** → La ventana sub-500 € se cerró a mediados de 2026 y no se ha reabierto. La RTX 3090 usada (24 GB) ahora cotiza a 850–1.050 €. Presupuesta 850 €+ para una RTX 3090 usada o 999 €+ para una RTX 4080 SUPER (16 GB).',
          '**Usuario de Windows, sin complicaciones** → RTX 4060 Ti 16GB. NVIDIA CUDA tiene el soporte más amplio en Windows para LLMs, fine-tuning y runtimes multimodales.',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-es.svg',
        imageCaption: 'Árbol de decisión para elegir una GPU económica por menos de 500 € para inferencia LLM local: dirige a la Intel Arc B580 12GB (250–290 €) como opción principal, a la RTX 3060 12GB usada (270–300 €) si necesitas CUDA, y a una RTX 3090 usada (24 GB) desde 900 €+ para modelos de 30B o más.',
      },
      softwareCompat: {
        title: 'Compatibilidad de software por GPU',
        content: 'Las tres GPU ejecutan Ollama y llama.cpp. Las diferencias aparecen en herramientas avanzadas:',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ parcial', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Consumo energético y requisitos del sistema',
        content: 'El consumo de la GPU determina qué fuente de alimentación y chasis necesitas. Ejecutar LLMs mantiene las GPU al 80–100% de utilización de forma continua — a diferencia del gaming, no hay fotogramas inactivos.',
        items: [
          'Intel Arc B580 12GB: 190 W — fuente de 650 W o más; 8 pines estándar',
          'RTX 3060 12GB: 170 W — funciona con fuente de 550 W o más; un conector de 8 pines',
          'RTX 4060 Ti 16GB: 165 W — funciona con fuente de 550 W o más; un conector de 8 pines',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Son suficientes 8 GB de VRAM para ejecutar LLMs localmente?',
            a: '8 GB de VRAM te limitan a modelos 7B en cuantización Q4 — el modelo apenas cabe. No puedes ejecutar modelos 13B en calidad completa, y los modelos 14B se descargarán parcialmente a la RAM del sistema, reduciendo la velocidad un 80–95%. Para un uso local de LLM significativo en 2026, 12 GB es el mínimo práctico; se recomienda 16 GB.',
          },
          {
            q: '¿Puedo comprar una RTX 3090 de segunda mano por menos de 500 € en 2026?',
            a: 'No. Las RTX 3090 de segunda mano cotizan a 850–1.050 € en eBay. El precio subió primero cuando los entusiastas de los LLMs reconocieron el valor de sus 24 GB de VRAM, y otra vez durante la escasez de memoria de 2026. Ya no es una opción por debajo de 500 €, y hace tiempo que no lo es. Si necesitas capacidad para modelos 30B (que requiere 24 GB de VRAM), presupuesta 900 €+ para una RTX 3090 usada o considera una RTX 4080 SUPER (16 GB, ~999 €) para un 14B Q8 más rápido.',
          },
          {
            q: '¿Funciona AMD para ejecutar LLMs localmente?',
            a: 'Sí, con matices. Ollama en Linux con ROCm funciona bien en tarjetas como la RX 7800 XT. El soporte ROCm en Windows ha mejorado pero aún requiere pasos manuales, y el fine-tuning (LoRA) en hardware AMD no está soportado por la mayoría de herramientas. Nota sobre el precio: la RX 7800 XT 16GB ha subido a ~682 € en julio de 2026, así que ya no encaja en un presupuesto sub-500 € — para ese rango de precio, la RTX 4060 Ti 16GB o la RTX 3060 12GB (ambas NVIDIA/CUDA) son las opciones recomendadas. Para Windows o fine-tuning, quédate con NVIDIA.',
          },
          {
            q: '¿Qué hay de las GPU Intel Arc para IA?',
            a: 'La Intel Arc B580 12GB es la mejor opción Arc en 2026 y, después de que la escasez de memoria reajustara el campo NVIDIA, la mejor tarjeta de esta página en conjunto. Ejecuta Ollama en Windows y Linux a través del backend SYCL, aunque el rendimiento está un 30–40 % por debajo de NVIDIA en tok/s brutos. La relación valor-precio es ahora decisiva, no solo buena: 12 GB de VRAM por 250–290 € mientras las tarjetas NVIDIA comparables están a 470–600 €. La limitación principal sigue siendo el software — vLLM, las herramientas de ajuste fino y los runtimes multimodales todavía no soportan bien Arc — así que si necesitas ajuste fino LoRA, compra una RTX 3060 12GB de segunda mano.',
          },
          {
            q: '¿Puedo ejecutar un modelo de 70B en una sola GPU por menos de 500 €?',
            a: 'No a plena velocidad. Incluso la RTX 3090 (24 GB) no puede almacenar 70B Q4 (~40 GB) completamente en VRAM. Puedes usar descarga a CPU con llama.cpp para dividir el modelo entre VRAM y RAM del sistema, pero la velocidad cae a 2–5 tok/s — demasiado lento para uso interactivo. Para ejecutar modelos 70B a velocidades utilizables, necesitas dos GPU (2× RTX 3090 con 48 GB en total) o inferencia en la nube.',
          },
          {
            q: '¿Los nuevos modelos (RTX 5060 Ti) harán obsoletas estas GPU?',
            a: 'La RTX 5060 Ti 16GB ya se ha lanzado, y no quedó por debajo de la RTX 4060 Ti: ocurrió lo contrario. Salió con un PVP de 429 $ y ahora se vende entre 570 y 600 €, alrededor de un 40 % por encima del precio de lista, porque la misma escasez de memoria que reajustó toda esta lista la golpeó con más fuerza al ser una tarjeta de generación actual. Es una GPU genuinamente mejor que cualquiera de las de aquí, con 16 GB de VRAM e inferencia más rápida, pero no es una tarjeta por debajo de 500 € y esperar a que lo sea no es un plan razonable. Compra según lo que hay disponible ahora: la Intel Arc B580 12GB a 250–290 €, o una RTX 3060 12GB de segunda mano a 270–300 € si necesitas CUDA.',
          },
          {
            q: '¿Cuánto cuesta una RTX 4060 Ti 16GB de segunda mano?',
            a: 'Las RTX 4060 Ti 16GB de segunda mano han seguido la subida del mercado nuevo: con las unidades nuevas disponibles rondando los 560 €, los anuncios de segunda mano están ahora entre 420 y 480 € en eBay, según el estado y la garantía restante. Es una de las pocas tarjetas donde comprar usado no supone un gran ahorro, porque la oferta de unidades nuevas a PVP se agotó.',
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
          name: '¿Puedo comprar una RTX 3090 de segunda mano por menos de 500 € en 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Las RTX 3090 de segunda mano cotizan a 850–1.050 € en eBay, muy por encima del límite de 500 €. Para capacidad 30B necesitas un presupuesto de 900 €+ o considera una RTX 4080 SUPER (~999 €).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo ejecutar un modelo de 70B en una sola GPU por menos de 500 €?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No a plena velocidad. Incluso la RTX 3090 (24 GB) no puede alojar 70B Q4 (~40 GB) completamente en VRAM. La descarga a CPU reduce la velocidad a 2–5 tok/s. Se necesitan dos GPU o inferencia en la nube.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta una RTX 4060 Ti 16GB de segunda mano?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Con las unidades nuevas disponibles rondando los 560 €, los anuncios de segunda mano están entre 420 y 480 € en eBay, según el estado. Confirma que es la variante de 16 GB, ya que también existe una versión de 8 GB.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Mejores GPU para inferencia LLM por menos de 500 € (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'Mejor opción global — 12 GB VRAM, la única tarjeta nueva de 12 GB fiablemente por debajo de 500 €, 250–290 €' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (usada)', description: 'Mejor opción CUDA — 12 GB VRAM, cadena CUDA completa, 270–300 € de segunda mano' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'El mejor hardware, pero sin stock a su PVP de 399 € y ~560 € cuando aparece' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Mejor GPU para inferencia LLM por menos de 500 € (2026)',
      description: 'Comparación clasificada de GPU por menos de 500 € para inferencia de IA local: RTX 4060 Ti 16GB, RTX 3060 12GB, Arc B580. Precios verificados. RTX 3090, RTX 4070 y RX 7800 XT eliminadas — todas superan ahora los 500 €.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-28',
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
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: 'أفضل ⁨GPU⁩ للاستدلال على نماذج ⁨LLM⁩ بأقل من $⁨500⁩ (⁨2026⁩)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ar.webp',
    seoTitle: 'أفضل ⁨GPU⁩ بأقل من $⁨500⁩ للاستدلال على ⁨LLM⁩: ⁨Intel Arc B580⁩',
    metaDescription: 'أفضل ⁨GPU⁩ بأقل من $⁨500⁩ للاستدلال المحلي على ⁨LLM⁩ صارت ⁨Intel Arc B580 12GB⁩ (⁨250⁩–⁨290⁩$) — إذ دفع نقص الذاكرة في ⁨2026⁩ بطاقتَي ⁨RTX 4060 Ti 16GB⁩ و⁨RTX 3060⁩ الجديدة فوق ⁨500⁩$.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**أفضل GPU بأقل من $500 للاستدلال المحلي على نماذج LLM صارت Intel Arc B580 12GB ($250–290): 12 GB من VRAM لنماذج 7B–13B بتكميم Q4، بسرعة ~31 tok/s على Llama 3.1 8B Q4، وهي البطاقة الجديدة الوحيدة بسعة 12 GB التي ما زالت متوفرة بشكل موثوق تحت $500. ولمن يحتاج سلسلة أدوات CUDA، فإن RTX 3060 12GB مستعملة ($270–300) هي البديل. أما الفائزة السابقة، RTX 4060 Ti 16GB، فقد خرجت من النطاق: عروضها بسعرها المُعلن $399 نافدة من المخزون، والوحدات المتوفرة تقارب $562. وارتفعت RTX 3060 12GB نحو 45% منذ إعادة إطلاقها لتصل إلى $474–599 جديدة. والسبب في تحرك جميع هذه الأسعار واحد: نقص عالمي في ذاكرة DRAM وGDDR7 مدفوعاً بطلب مراكز بيانات الذكاء الاصطناعي. ولقدرة نماذج 30B، خصص $850+.**',
    quickAnswerTop: {
      question: 'ما أفضل GPU لتشغيل نماذج LLM محليًا بأقل من $500؟',
      answer: 'بطاقة Intel Arc B580 12GB ($250–290) هي الأفضل بأقل من $500 للاستدلال المحلي على نماذج LLM. تشغّل 12 GB من VRAM نماذج 7B–13B بتكميم Q4، وتعمل مع Ollama عبر واجهة SYCL/oneAPI على ويندوز ولينكس، وهي البطاقة الجديدة الوحيدة بسعة 12 GB التي ما زالت متوفرة بشكل موثوق تحت $500. وRTX 3060 12GB مستعملة ($270–300) هي البديل لمن يحتاج سلسلة أدوات CUDA. أخرج نقص الذاكرة في 2026 بقية القائمة من النطاق: RTX 4060 Ti 16GB تقارب $562 عند توفرها، وRTX 3060 12GB الجديدة بـ $474–599، وRTX 3090 المستعملة بـ $850–1,050، وRTX 4070 12GB بـ $560–705، وRX 7800 XT 16GB بـ ~$832.',
      bullets: [
        '**الفائزة:** Intel Arc B580 12GB ($250–290) — 12 GB VRAM، ~31 tok/s على Llama 3.1 8B Q4، البطاقة الجديدة الوحيدة بسعة 12 GB تحت $500 بشكل موثوق',
        '**البديل:** RTX 3060 12GB مستعملة ($270–300) — أرخص طريق إلى سلسلة أدوات CUDA الكاملة',
        '⚠️ RTX 4060 Ti 16GB: نافدة بسعرها المُعلن $399، و~$562 عند توفرها — لم تعد خياراً موثوقاً تحت $500',
        '⚠️ RTX 3060 12GB جديدة: $474–599، بارتفاع 45% منذ إعادة الإطلاق — اشترِها مستعملة بدلاً من ذلك',
        '⚠️ RTX 3090 مستعملة: الآن $850–1,050 — لم تعد خياراً بأقل من $500',
        '⚠️ RTX 4070 12GB: الآن $560–705، وRX 7800 XT 16GB: ~$832 — كلتاهما فوق $500',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB تفوز لمعظم المستخدمين: 12 GB VRAM، $250–290، ~31 tok/s على Llama 3.1 8B Q4 — البطاقة الجديدة الوحيدة بسعة 12 GB تحت $500 بشكل موثوق**',
          'RTX 3060 12GB مستعملة ($270–300) هي البديل — أرخص طريق إلى سلسلة أدوات CUDA الكاملة',
          '⚠️ تنبيه سعر: RTX 4060 Ti 16GB، الفائزة السابقة، نافدة بسعرها المُعلن $399 وتقارب $562 عند توفرها — أُزيلت من قائمة ما دون $500',
          '⚠️ تنبيه سعر: RTX 3060 12GB الجديدة بـ $474–599، بارتفاع 45% منذ إعادة الإطلاق — السوق المستعملة هي الطريق المعقول لهذه البطاقة',
          '⚠️ تنبيه سعر: RTX 3090 المستعملة أصبحت بـ $850–1,050، وRTX 4070 12GB بـ $560–705 — كلتاهما أُزيلت من قائمة ما دون $500',
          'لماذا تحرك كل شيء: نقص عالمي في ذاكرة DRAM وGDDR7، مدفوعاً بطلب مراكز بيانات الذكاء الاصطناعي، دفع أسعار بطاقات الرسوميات في السوق فوق أسعارها المُعلنة عبر السوق كلها. لم يتغير العتاد، بل ما تدفعه فقط.',
          'تحتاج قدرة نماذج 30B؟ خصص ميزانية $850 على الأقل لـ RTX 3090 مستعملة (24 GB) أو ادّخر لـ RTX 4080 SUPER (16 GB، ~$850)',
          'كل بطاقات GPU الثلاث في هذه القائمة تعمل مع Ollama وLM Studio وllama.cpp من المصنع',
        ],
      },
      rankedList: {
        title: 'أفضل بطاقات GPU للاستدلال على نماذج LLM بأقل من $500 — مصنّفة',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'بطاقة RTX 4060 Ti 16GB هي أفضل GPU بأقل من $500 للاستدلال المحلي على نماذج LLM لأن 16 GB من VRAM تستوعب نماذج 14B بجودة Q8 كاملة دون ضغط على الذاكرة.',
          },
          {
            type: 'plain-terms',
            text: 'تحدد VRAM في GPU أي نماذج ذكاء اصطناعي يمكنك تشغيلها. بطاقة بسعة 16 GB تشغّل نماذج 14B بجودة عالية. بطاقة بسعة 24 GB (مثل RTX 3090 مستعملة) تشغّل نماذج 30B أو أكبر. بأقل من 12 GB تكون محدوداً بنماذج 7B أو أصغر.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — أفضل خيار شامل ($250–290)',
            content: '**بطاقة Intel Arc B580 12GB هي أفضل GPU بأقل من $500 للاستدلال المحلي على نماذج LLM، ويعود ذلك في جانب كبير منه إلى أنها آخر ما تبقّى ضمن هذا النطاق بشكل موثوق.** صدرت بسعر $249 وما زالت تُباع بـ $249.99 لدى Best Buy ونحو $290 لدى Newegg، بينما دفع نقص الذاكرة في 2026 كل بطاقات NVIDIA التي كانت تشغل هذه القائمة فوق $500. تشغّل Ollama عبر الواجهة الخلفية SYCL/oneAPI على Linux وWindows، بأداء ~28–35 tok/s على Llama 3.1 8B Q4. حد 12 GB من VRAM يقيّدك بنماذج 13B عند Q4 — ولن تُويِ نموذج 14B عند Q8. تحسّن دعم تعريفات Intel كثيراً منذ الإطلاق، لكنه ما زال متأخراً عن CUDA في اتساع الأدوات: توقّع أن يعمل Ollama وllama.cpp جيداً، وأن يكون الضبط الدقيق LoRA متعثراً.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB على Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB على Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB مستعملة — أفضل خيار لـ CUDA ($270–300)',
            content: 'بطاقة NVIDIA GeForce RTX 3060 12GB هي أرخص طريق إلى سلسلة أدوات CUDA الكاملة، لكن اشترِها **مستعملة**. لم يصمد سعر إعادة إطلاقها بـ $339: ارتفعت البطاقات الجديدة نحو 45% لتصل إلى $474–599، وهو ما يضع البطاقة الجديدة عند سقف $500 الذي تدور حوله هذه الصفحة أو فوقه. أما السوق المستعملة فتحركت أقل بكثير، عند $270–300. تشغّل 12 GB من GDDR6 نماذج 7B–13B بتكميم Q4/Q8 بأريحية؛ لا تستطيع إيواء نموذج 14B بتكميم Q8، لكن نموذج 14B بتكميم Q4 (~8.5 GB) يناسبها. القياس: ~32–40 tok/s على Llama 3.1 8B Q4 مع Ollama. سلسلة أدوات CUDA الكاملة تعني أن Ollama وLM Studio وvLLM والضبط الدقيق LoRA تعمل جميعها من المصنع على Windows وLinux — وهو الشيء الوحيد الذي لا تضاهيه Arc B580.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB على Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB على Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — أفضل بطاقة، إن وجدتها بسعرها المُعلن ($399 مُعلن، ~$562 عند التوفر)',
            content: 'ما زالت RTX 4060 Ti 16GB أفضل *عتاد* في هذه القائمة، وكانت الفائزة في هذه الصفحة حتى نقص الذاكرة في 2026. تتعامل 16 GB من VRAM من نوع GDDR6 مع Qwen3 14B وMistral 12B بتكميم Q4 بالكامل على GPU — وبتكميم Q8 دون تبديل — بسرعة 45–60 tok/s على 7B Q4 و18–25 tok/s على 14B Q8 مع Ollama، وباستهلاك 165 W يستوعبه أي مزود طاقة بسعة 650 W. المشكلة هي شراؤها. عروضها بسعرها المُعلن $399 نافدة من المخزون لدى كبار المتاجر، وأرخص وحدة متوفرة يمكن التحقق منها تقارب $562، أي نحو 41% فوق السعر المُعلن. إن وجدتها عند سعرها المُعلن أو قريباً منه فهي أفضل شراء في هذه الصفحة بفارق كبير؛ أما عند $562 فهي خارج الميزانية التي كُتبت لها هذه الصفحة. راقبها، ولا تبنِ خططك عليها.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB على Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB على Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'مقارنة الأداء — الأسعار الحالية + نتائج الاختبارات',
        content: 'قياسات أُجريت باستخدام Ollama 0.30.x، وخادم llama.cpp، ونماذج من HuggingFace. نظام الاختبار: Ryzen 9 7950X، و64 GB DDR5، وقرص NVMe SSD. لم تتغير السرعات عن الاختبارات السابقة: العتاد لم يتحرك، بل الأسعار. مستبعدة لتخطيها $500: RTX 3090 المستعملة ($850–1,050)، وRTX 4070 12GB ($560–705)، وRX 7800 XT 16GB (~$832)، وRTX 3060 12GB الجديدة ($474–599).',
        columns: ['GPU', 'VRAM', 'السعر', 'Llama 3.1 8B Q4 tok/s', 'Qwen3 14B Q8 tok/s', 'أقصى نموذج (Q4)'],
        rows: [
          { GPU: 'Intel Arc B580 12GB ★', VRAM: '12 GB', 'السعر': '$250–290', 'Llama 3.1 8B Q4 tok/s': '31 tok/s', 'Qwen3 14B Q8 tok/s': 'محدود بـ VRAM', 'أقصى نموذج (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12GB (مستعملة)', VRAM: '12 GB', 'السعر': '$270–300', 'Llama 3.1 8B Q4 tok/s': '36 tok/s', 'Qwen3 14B Q8 tok/s': 'محدود بـ VRAM', 'أقصى نموذج (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', VRAM: '16 GB', 'السعر': '~$562 عند التوفر', 'Llama 3.1 8B Q4 tok/s': '55 tok/s', 'Qwen3 14B Q8 tok/s': '22 tok/s', 'أقصى نموذج (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-ar.svg',
        imageCaption: 'مقارنة بطاقات GPU الاقتصادية للاستدلال المحلي على LLM بأقل من $500: Intel Arc B580 12GB ($250–290، 31 tok/s)، وRTX 3060 12GB مستعملة ($270–300، 36 tok/s)، وRTX 4060 Ti 16GB (~$562 عند التوفر، 55 tok/s، أقصى نموذج 30B)، قياسات باستخدام Ollama.',
      },
      methodology: {
        title: 'كيف اخترنا واختبرنا هذه البطاقات',
        content: 'معايير الاختيار: متاحة للشراء جديدة أو مستعملة بأقل من $500؛ متوافقة مع واحد على الأقل من أنظمة تشغيل الاستدلال الرئيسية (Ollama، LM Studio، llama.cpp)؛ VRAM ≥ 12 GB (بطاقات 8 GB مستبعدة). استُبعدت عدة بطاقات على أساس السعر: RTX 3090 المستعملة (24 GB) تُتداول الآن بـ $850–1,050؛ وRTX 4070 12GB بـ $560–705؛ وRX 7800 XT 16GB بـ ~$832؛ وRTX 3060 12GB الجديدة، التي أُعيد إطلاقها بـ $339، ارتفعت نحو 45% لتصل إلى $474–599. أُبقيت RTX 4060 Ti 16GB في القائمة مع تنبيه — فعروضها بسعرها المُعلن $399 نافدة والوحدات المتوفرة تقارب $562. والسبب مشترك بينها جميعاً: نقص عالمي في ذاكرة DRAM وGDDR7 مدفوعاً بطلب مراكز بيانات الذكاء الاصطناعي دفع أسعار بطاقات الرسوميات فوق أسعارها المُعلنة عبر السوق كلها، إذ تُتداول بطاقات NVIDIA من سلسلة RTX 50 بنحو 36–39% فوق السعر الرسمي ورفعت AMD أسعار Radeon نحو 10%. جميع القياسات هي tok/s بمتوسط 10 عمليات بحجم دفعة 1، مقيسة باستخدام Ollama 0.30.x على Ubuntu 22.04 LTS.',
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
            text: 'فكّر في VRAM كذاكرة RAM لنماذج الذكاء الاصطناعي. يجب أن يناسب النموذج بالكامل في VRAM لاستدلال سريع. إذا فاض إلى RAM النظام (يُسمى "offloading")، تنخفض السرعة بنسبة 80–95%. تكميم Q4 يقلّص الحجم إلى النصف مقارنة بـ Q8 بتكلفة صغيرة في الجودة.',
          },
        ],
        items: [
          'نموذج 7B بتكميم Q4: ~4.5 GB VRAM — أي GPU في هذه القائمة تتعامل معه بسهولة',
          'نموذج 7B بتكميم Q8: ~7.5 GB VRAM — يناسب كل بطاقات GPU هنا',
          'نموذج 13B بتكميم Q4: ~8.5 GB VRAM — يناسب كل بطاقات GPU في هذه القائمة',
          'نموذج 14B بتكميم Q8: ~14 GB VRAM — فقط RTX 4060 Ti 16GB وRTX 3090 (مستعملة)',
          'نموذج 30B بتكميم Q4: ~18 GB VRAM — يتطلب 24 GB (RTX 3090 مستعملة، الآن بـ $850+)',
          'نموذج 70B بتكميم Q4: ~40 GB — يتطلب بطاقتي GPU أو تفريغاً إلى CPU',
        ],
      },
      decisionMatrix: {
        title: 'أي GPU يجب أن تشتري؟',
        content: 'استخدم دليل القرار هذا وفقاً لحالة استخدامك الرئيسية:',
        items: [
          '**أفضل خيار شامل بأقل من $500** ← Intel Arc B580 12GB ($250–290). البطاقة الجديدة الوحيدة بسعة 12 GB المتوفرة بشكل موثوق تحت $500. نماذج 7B–13B عند Q4، ~31 tok/s على Llama 3.1 8B Q4، وOllama عبر SYCL على Windows وLinux.',
          '**أرخص بطاقة CUDA تعمل** ← RTX 3060 12GB مستعملة ($270–300). سلسلة أدوات CUDA الكاملة — Ollama وLM Studio وvLLM والضبط الدقيق LoRA — بنحو نفس سعر Arc. اشترِها مستعملة: الجديدة الآن بـ $474–599.',
          '**أفضل عتاد، إن وجدته بسعره المُعلن** ← RTX 4060 Ti 16GB. عند سعرها المُعلن $399 تتفوق على كل ما عداها هنا، وتشغّل 14B عند Q8 على GPU. لكن عروض السعر المُعلن نافدة والوحدات المتوفرة تقارب $562، أي خارج ميزانية هذه الصفحة.',
          '**تحتاج قدرة نماذج 30B؟** ← نافذة $500 أُغلقت في منتصف 2026 ولم تُفتح مجدداً. RTX 3090 المستعملة (24 GB) الآن بـ $850–1,050. خصص $850+ لـ RTX 3090 مستعملة أو $850+ لـ RTX 4080 SUPER (16 GB).',
          '**مستخدم Windows، دون تعقيدات** ← RTX 3060 12GB مستعملة. لدى NVIDIA CUDA أوسع دعم على Windows لنماذج LLM والضبط الدقيق وأنظمة التشغيل متعددة الوسائط، و3060 المستعملة هي أرخص طريق إليه.',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-ar.svg',
        imageCaption: 'شجرة قرار لاختيار GPU اقتصادية بأقل من $500 للاستدلال المحلي على LLM: تقود إلى Intel Arc B580 12GB ($250–290) كخيار أساسي، وRTX 3060 12GB مستعملة ($270–300) لمن يحتاج CUDA، وRTX 3090 مستعملة (24 GB) من $850+ لنماذج 30B.',
      },
      softwareCompat: {
        title: 'توافق البرمجيات حسب GPU',
        content: 'كل بطاقات GPU الثلاث تشغّل Ollama وllama.cpp. تظهر الفروق في الأدوات المتقدمة:',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ جزئي', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'استهلاك الطاقة ومتطلبات النظام',
        content: 'يحدد استهلاك GPU أي مزود طاقة وصندوق تحتاج. تشغيل نماذج LLM يبقي بطاقات GPU عند 80–100% من الاستخدام بشكل مستمر — على خلاف الألعاب، لا توجد إطارات خاملة.',
        items: [
          'Intel Arc B580 12GB: 190 W — مزود طاقة بسعة 650 W أو أكثر؛ 8 سنون قياسي',
          'RTX 3060 12GB: 170 W — تعمل مع مزود طاقة بسعة 550 W أو أكثر؛ موصّل 8 سنون واحد',
          'RTX 4060 Ti 16GB: 165 W — تعمل مع مزود طاقة بسعة 550 W أو أكثر؛ موصّل 8 سنون واحد',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'هل 8 GB من VRAM كافية لتشغيل نماذج LLM محلياً؟',
            a: '8 GB من VRAM تحدّك بنماذج 7B بتكميم Q4 — النموذج بالكاد يناسب. لا يمكنك تشغيل نماذج 13B بجودة كاملة، ونماذج 14B ستُفرَّغ جزئياً إلى RAM النظام، مما يخفض السرعة بنسبة 80–95%. لاستخدام محلي ذي معنى لنماذج LLM في 2026، 12 GB هو الحد الأدنى العملي؛ ويُنصح بـ 16 GB.',
          },
          {
            q: 'هل لا يزال بإمكاني شراء RTX 3090 مستعملة بأقل من $500 في 2026؟',
            a: 'لا. تُتداول RTX 3090 المستعملة بـ $850–1,050 على eBay. ارتفع السعر أولاً مع تزايد إدراك المتحمسين لـ LLM لقيمة 24 GB VRAM، ثم مرة أخرى خلال نقص الذاكرة في 2026. لم تعد خياراً بأقل من $500، ولم تكن كذلك منذ فترة. إن كنت تحتاج قدرة نماذج 30B (التي تتطلب 24 GB VRAM)، خصص ميزانية $850+ لـ RTX 3090 مستعملة أو فكّر في RTX 4080 SUPER (16 GB، ~$850 جديدة) لأداء أسرع على 14B Q8.',
          },
          {
            q: 'هل تعمل AMD لتشغيل نماذج LLM محلياً؟',
            a: 'نعم، مع تفاصيل دقيقة. Ollama على Linux مع ROCm يعمل جيداً على بطاقات مثل RX 7800 XT. تحسّن دعم ROCm على Windows لكنه لا يزال يتطلب خطوات يدوية، والضبط الدقيق (LoRA) على عتاد AMD غير مدعوم من معظم الأدوات. ملاحظة حول السعر: ارتفعت RX 7800 XT 16GB إلى ~$832 في يوليو 2026، فلم تعد تناسب ميزانية أقل من $500 — لهذا النطاق السعري تُعدّ RTX 4060 Ti 16GB أو RTX 3060 12GB (كلاهما NVIDIA/CUDA) الخياران الموصى بهما. لـ Windows أو الضبط الدقيق، التزم بـ NVIDIA.',
          },
          {
            q: 'ماذا عن بطاقات Intel Arc للذكاء الاصطناعي؟',
            a: 'بطاقة Intel Arc B580 12GB هي أفضل خيار Arc في 2026. تشغّل Ollama على Windows وLinux عبر الواجهة الخلفية SYCL، رغم أن الأداء أقل بنسبة 30–40% من NVIDIA في tok/s الخام. القيمة مقابل السعر قوية: 12 GB من VRAM بسعر $280 دون مشاكل تعريفات على الأنظمة الحديثة. القيد الرئيسي هو البرمجيات: vLLM وأدوات fine-tuning وأنظمة تشغيل متعددة الوسائط لا تدعم Arc جيداً بعد.',
          },
          {
            q: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بأقل من $500؟',
            a: 'ليس بكامل السرعة. حتى RTX 3090 (24 GB) لا تستطيع تخزين 70B Q4 (~40 GB) بالكامل في VRAM. يمكنك استخدام التفريغ إلى CPU مع llama.cpp لتقسيم النموذج بين VRAM وRAM النظام، لكن السرعة تنخفض إلى 2–5 tok/s — بطيء جداً للاستخدام التفاعلي. لتشغيل نماذج 70B بسرعات قابلة للاستخدام، تحتاج إلى بطاقتي GPU (2× RTX 3090 بسعة 48 GB إجمالاً) أو استدلال سحابي.',
          },
          {
            q: 'هل ستجعل البطاقات الجديدة (RTX 5060 Ti) هذه البطاقات قديمة؟',
            a: 'صدرت RTX 5060 Ti 16GB بالفعل، ولم تنزل تحت سعر RTX 4060 Ti — بل حدث العكس. أُطلقت بسعر مُعلن $429 وتُباع الآن بـ $570–600، أي نحو 40% فوق السعر المُعلن، لأن نفس نقص الذاكرة الذي أعاد تسعير هذه القائمة كلها ضربها بأشد صورة بوصفها بطاقة من الجيل الحالي. هي بطاقة أفضل فعلاً من أي شيء هنا، بسعة 16 GB من VRAM واستدلال أسرع، لكنها ليست بطاقة تحت $500، وانتظار أن تصبح كذلك ليس خطة تستحق البناء عليها. اشترِ بناءً على المتوفر الآن: Intel Arc B580 12GB بـ $250–290، أو RTX 3060 12GB مستعملة بـ $270–300 إن كنت تحتاج CUDA.',
          },
          {
            q: 'كم يكلّف RTX 4060 Ti 16GB مستعملة؟',
            a: 'تبعت بطاقات RTX 4060 Ti 16GB المستعملة ارتفاع سعر الجديدة: فمع اقتراب سعر الوحدات الجديدة المتوفرة من $562، صارت العروض المستعملة بين $420 و$480 على eBay، حسب الحالة والضمان المتبقي. وهي من البطاقات القليلة التي لا يمثّل فيها الشراء مستعملاً توفيراً كبيراً، لأن المعروض من الوحدات الجديدة بسعرها المُعلن قد نفد.',
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
            text: 'لا — تُتداول RTX 3090 المستعملة بـ $850–1,050 على eBay، أعلى بكثير من حد $500. لقدرة نماذج 30B تحتاج ميزانية $850+ أو فكّر في RTX 4080 SUPER (~$850).',
          },
        },
        {
          '@type': 'Question',
          name: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بأقل من $500؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ليس بكامل السرعة. حتى RTX 3090 (24 GB) لا تستطيع إيواء 70B Q4 (~40 GB) بالكامل في VRAM. التفريغ إلى CPU يخفض السرعة إلى 2–5 tok/s. تحتاج إلى بطاقتي GPU أو استدلال سحابي.',
          },
        },
        {
          '@type': 'Question',
          name: 'كم يكلّف RTX 4060 Ti 16GB مستعملة؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'مع اقتراب سعر الوحدات الجديدة المتوفرة من $562، صارت العروض المستعملة بين $420 و$480 على eBay حسب الحالة. تأكد من أنها الإصدار بسعة 16 GB، فهناك أيضاً إصدار بسعة 8 GB.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'أفضل خيار شامل — 12 GB VRAM، البطاقة الجديدة الوحيدة بسعة 12 GB تحت $500 بشكل موثوق، $250–290' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (مستعملة)', description: 'أفضل خيار لـ CUDA — 12 GB VRAM، سلسلة أدوات CUDA كاملة، $270–300 مستعملة' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'أفضل عتاد، لكنها نافدة بسعرها المُعلن $399 و~$562 عند التوفر' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'أفضل GPU للاستدلال على نماذج LLM بأقل من $500 (2026)',
      description: 'مقارنة مصنّفة لبطاقات GPU بأقل من $500 للاستدلال المحلي على الذكاء الاصطناعي: Intel Arc B580 12GB، وRTX 3060 12GB مستعملة، وRTX 4060 Ti 16GB. دفع نقص الذاكرة في 2026 بطاقات RTX 3090 وRTX 4070 وRX 7800 XT وRTX 3060 الجديدة فوق $500.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-28',
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
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: 'Melhor GPU para inferência de LLM por menos de US$ 500 (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-pt.webp',
    seoTitle: 'Melhor GPU por menos de US$ 500 para LLM: RTX 3060 12GB',
    metaDescription: 'A melhor GPU por menos de US$ 500 para inferência de LLM local no Brasil é a RTX 3060 12GB (R$ 1.450-2.000): a escassez de memória de 2026 levou a RTX 4060 Ti 16GB bem acima da faixa.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**A melhor GPU por menos de US$ 500 para inferência de LLM local no Brasil é a RTX 3060 12GB (R$ 1.450–2.000): 12 GB de VRAM para modelos 7B–13B em Q4/Q8, ~36 tok/s no Llama 3.1 8B Q4, e a cadeia CUDA completa. A Intel Arc B580 12GB é a alternativa, mas atenção: no Brasil ela custa R$ 2.060–2.400, ou seja **mais** que a RTX 3060 — o inverso do que acontece no mercado em dólar, onde a Arc é a mais barata. A vencedora anterior, a RTX 4060 Ti 16GB, saiu da faixa: passou de R$ 3.299 e no exterior os anúncios ao preço de tabela estão sem estoque. A escassez mundial de DRAM e GDDR7 de 2026, puxada pela demanda dos data centers de IA, é o que moveu todos esses preços. Para capacidade de modelos 30B, reserve a partir de R$ 6.000. Os preços no Brasil variam bastante por impostos de importação e câmbio, e não acompanham linearmente a faixa em dólar.**',
    quickAnswerTop: {
      question: 'Qual é a melhor GPU para rodar LLMs localmente por menos de US$ 500?',
      answer: '**A RTX 3060 12GB (R$ 1.450–2.000) é a melhor GPU por menos de US$ 500 para inferência de LLM local no Brasil.** Seus 12 GB de VRAM rodam modelos 7B–13B em Q4/Q8 com folga, a ~36 tok/s no Llama 3.1 8B Q4, com Ollama, LM Studio, vLLM e ajuste fino LoRA funcionando de fábrica. A Intel Arc B580 12GB (R$ 2.060–2.400) é a alternativa de arquitetura mais nova, mas no mercado brasileiro custa mais que a RTX 3060, ao contrário do que ocorre em dólar. A escassez de memória de 2026 tirou o resto da lista da faixa: a RTX 4060 Ti 16GB passou de R$ 3.299, a RTX 3090 usada parte de R$ 6.000, a RTX 4070 12GB está em ~R$ 3.500 e a RX 7800 XT 16GB em ~R$ 2.900.',
      bullets: [
        '**Vencedora:** RTX 3060 12GB (R$ 1.450–2.000) — 12 GB de VRAM, ~36 tok/s no Llama 3.1 8B Q4, cadeia CUDA completa',
        '**Alternativa:** Intel Arc B580 12GB (R$ 2.060–2.400) — arquitetura mais nova, mas no Brasil custa mais que a RTX 3060',
        '⚠️ RTX 4060 Ti 16GB: passou de R$ 3.299 e está sem estoque ao preço de tabela no exterior — fora da faixa',
        '⚠️ RTX 3090 de segunda mão: preço atual a partir de R$ 6.000 — não é mais sub-US$ 500',
        '⚠️ RTX 4070 12GB: agora ~R$ 3.500 — não é mais sub-US$ 500',
        '⚠️ RX 7800 XT 16GB: agora ~R$ 2.900 — não é mais sub-US$ 500',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**A RTX 3060 12GB vence para a maioria no Brasil: 12 GB de VRAM, R$ 1.450–2.000, ~36 tok/s no Llama 3.1 8B Q4, cadeia CUDA completa**',
          'A Intel Arc B580 12GB (R$ 2.060–2.400) é a alternativa — arquitetura mais nova, mas no mercado brasileiro custa mais que a RTX 3060, ao contrário do que ocorre em dólar',
          '⚠️ Alerta de preço: a RTX 4060 Ti 16GB, a vencedora anterior, passou de R$ 3.299 e no exterior está sem estoque ao preço de tabela — removida da lista sub-US$ 500',
          '⚠️ Alerta de preço: a RTX 3090 de segunda mão está agora a partir de R$ 6.000 — removida da lista sub-US$ 500',
          '⚠️ Alerta de preço: a RTX 4070 12GB está agora em ~R$ 3.500 — removida da lista sub-US$ 500',
          '⚠️ Alerta de preço: a RX 7800 XT 16GB está agora em ~R$ 2.900 — removida da lista sub-US$ 500',
          'Por que tudo se moveu: uma escassez mundial de DRAM e GDDR7, puxada pela demanda dos data centers de IA, empurrou os preços de rua das placas bem acima do preço de tabela no mundo todo. O hardware não mudou; só o que ele custa. Precisa de capacidade para modelos 30B? Orçamento a partir de R$ 6.000 para uma RTX 3090 usada (24 GB).',
          'As três GPUs desta lista funcionam com Ollama, LM Studio e llama.cpp de fábrica',
        ],
      },
      rankedList: {
        title: 'Melhores GPUs para inferência de LLM por menos de US$ 500 — Classificadas',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'A RTX 3060 12GB é a melhor GPU por menos de US$ 500 para inferência de LLM local no Brasil porque é a placa de 12 GB mais barata disponível localmente e traz a cadeia CUDA completa.',
          },
          {
            type: 'plain-terms',
            text: 'A VRAM da GPU determina quais modelos de IA você consegue rodar. Uma GPU de 16 GB roda modelos 14B em alta qualidade. Uma GPU de 24 GB (como uma RTX 3090 de segunda mão) roda modelos de 30B ou mais. Com menos de 12 GB você fica limitado a modelos 7B ou menores.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'RTX 3060 12GB — Melhor opção geral no Brasil (R$ 1.450–2.000)',
            content: '**A NVIDIA GeForce RTX 3060 12GB é a melhor GPU por menos de US$ 500 para inferência de LLM local no Brasil.** Seus 12 GB GDDR6 rodam modelos 7B–13B em Q4/Q8 com folga; não acomodam um 14B em Q8, mas um 14B em Q4 (~8,5 GB) cabe. Benchmark: ~32–40 tok/s no Llama 3.1 8B Q4 com Ollama. A cadeia CUDA completa significa que Ollama, LM Studio, vLLM e ajuste fino LoRA funcionam de fábrica no Windows e no Linux. Vale registrar uma diferença de mercado: no exterior a Intel Arc B580 é a placa de 12 GB mais barata e a RTX 3060 nova subiu para US$ 474–599, mas no Brasil a relação se inverte — a RTX 3060 continua sendo a entrada mais barata em 12 GB.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB na Amazon', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'RTX 3060 12GB na Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 2,
            title: 'Intel Arc B580 12GB — Alternativa de arquitetura mais nova (R$ 2.060–2.400)',
            content: 'A Intel Arc B580 12GB foi lançada nos EUA a US$ 249 e é a queridinha do mercado em dólar, onde virou a placa de 12 GB mais barata depois que a escassez de memória de 2026 encareceu toda a linha NVIDIA. No Brasil a conta é outra: ela sai por R$ 2.060–2.400 em lojas como Terabyte, Pichau e Kabum, ou seja acima da RTX 3060 12GB. Roda o Ollama pelo backend SYCL/oneAPI no Linux e no Windows, com ~28–35 tok/s no Llama 3.1 8B Q4. O teto de 12 GB de VRAM limita a modelos 13B em Q4. O suporte de drivers da Intel melhorou muito desde o lançamento, mas ainda fica atrás do CUDA em amplitude de ferramentas: espere Ollama e llama.cpp funcionando bem e ajuste fino LoRA problemático.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB na Amazon', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Intel Arc B580 12GB na Newegg', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — A melhor placa, se achar perto do preço de tabela (acima de R$ 3.299)',
            content: 'A RTX 4060 Ti 16GB continua sendo o melhor *hardware* desta lista e foi a vencedora desta página até a escassez de memória de 2026. Seus 16 GB GDDR6 rodam Qwen3 14B e Mistral 12B em Q4 totalmente na GPU — e em Q8 sem swap — a 45–60 tok/s em 7B Q4 e 18–25 tok/s em 14B Q8 com Ollama, com TDP de 165 W que qualquer fonte de 650 W aguenta. O problema é comprar uma. No exterior os anúncios ao preço de tabela de US$ 399 estão sem estoque e as unidades disponíveis giram perto de US$ 562, cerca de 41% acima da tabela; no Brasil ela passou de R$ 3.299. Se achar uma perto do preço de tabela é de longe a melhor compra desta página; nos preços atuais, está fora do orçamento para o qual ela foi escrita.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB na Amazon', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'RTX 4060 Ti 16GB na Newegg', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparação de desempenho — Preços atuais + resultados de testes',
        content: 'Benchmarks medidos com Ollama 0.30.x, servidor llama.cpp, modelos do HuggingFace. Sistema de teste: Ryzen 9 7950X, 64 GB DDR5, SSD NVMe. As velocidades não mudaram em relação aos testes anteriores: o hardware não se moveu, os preços sim. Excluídas por ultrapassarem a faixa: RTX 3090 usada (a partir de R$ 6.000), RTX 4070 12GB (~R$ 3.500), RX 7800 XT 16GB (~R$ 2.900) e RTX 4060 Ti 16GB (acima de R$ 3.299).',
        columns: ['GPU', 'VRAM', 'Preço', 'Llama 3.1 8B Q4 tok/s', 'Qwen3 14B Q8 tok/s', 'Modelo máximo (Q4)'],
        rows: [
          { GPU: 'RTX 3060 12GB ★', VRAM: '12 GB', 'Preço': 'R$ 1.450–2.000', 'Llama 3.1 8B Q4 tok/s': '36 tok/s', 'Qwen3 14B Q8 tok/s': 'Limitado pela VRAM', 'Modelo máximo (Q4)': '14B (Q4)' },
          { GPU: 'Intel Arc B580 12GB', VRAM: '12 GB', 'Preço': 'R$ 2.060–2.400', 'Llama 3.1 8B Q4 tok/s': '31 tok/s', 'Qwen3 14B Q8 tok/s': 'Limitado pela VRAM', 'Modelo máximo (Q4)': '13B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', VRAM: '16 GB', 'Preço': 'acima de R$ 3.299', 'Llama 3.1 8B Q4 tok/s': '55 tok/s', 'Qwen3 14B Q8 tok/s': '22 tok/s', 'Modelo máximo (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-pt.svg',
        imageCaption: 'Comparativo de GPUs econômicas para inferência de LLM local por menos de US$ 500 no Brasil: RTX 3060 12GB (R$ 1.450–2.000, 36 tok/s), Intel Arc B580 12GB (R$ 2.060–2.400, 31 tok/s) e RTX 4060 Ti 16GB (acima de R$ 3.299, 55 tok/s, máx. 30B), medidas com Ollama.',
      },
      methodology: {
        title: 'Como selecionamos e testamos estas GPUs',
        content: 'Critérios de seleção: disponíveis para compra nova ou usada na faixa de US$ 500; compatíveis com pelo menos um runtime de inferência principal (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (placas de 8 GB excluídas). Várias placas saíram da lista por preço: a RTX 3090 usada (24 GB) parte de R$ 6.000; a RTX 4070 12GB está em ~R$ 3.500; a RX 7800 XT 16GB em ~R$ 2.900; e a RTX 4060 Ti 16GB passou de R$ 3.299, com os anúncios ao preço de tabela sem estoque no exterior. A causa é comum a todas: uma escassez mundial de DRAM e GDDR7 puxada pela demanda dos data centers de IA empurrou os preços de rua bem acima da tabela no mundo todo, com as RTX 50 da NVIDIA cerca de 36–39% acima do preço sugerido e a AMD elevando as Radeon em torno de 10%. Todos os benchmarks são tok/s, média de 10 execuções com batch size 1, medidos com Ollama 0.30.x no Ubuntu 22.04 LTS.',
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
            text: 'Pense na VRAM como a RAM para os modelos de IA. O modelo precisa caber inteiramente na VRAM para uma inferência rápida. Se transbordar para a RAM do sistema (chamado de "offloading"), a velocidade cai 80–95%. A quantização Q4 reduz o tamanho pela metade em relação ao Q8 com um pequeno custo em qualidade.',
          },
        ],
        items: [
          'Modelo 7B em Q4: ~4,5 GB de VRAM — qualquer GPU desta lista dá conta facilmente',
          'Modelo 7B em Q8: ~7,5 GB de VRAM — cabe em todas as GPUs aqui',
          'Modelo 13B em Q4: ~8,5 GB de VRAM — cabe em todas as GPUs desta lista',
          'Modelo 14B em Q8: ~14 GB de VRAM — só RTX 4060 Ti 16GB e RTX 3090 (usada)',
          'Modelo 30B em Q4: ~18 GB de VRAM — requer 24 GB (RTX 3090 de segunda mão, agora a partir de R$ 6.000)',
          'Modelo 70B em Q4: ~40 GB — exige duas GPUs ou offload para CPU',
        ],
      },
      decisionMatrix: {
        title: 'Qual GPU você deve comprar?',
        content: 'Use este guia de decisão conforme seu caso de uso principal:',
        items: [
          '**Melhor opção geral por menos de US$ 500** → RTX 3060 12GB (R$ 1.450–2.000). A entrada mais barata em 12 GB no Brasil, com a cadeia CUDA completa: Ollama, LM Studio, vLLM e ajuste fino LoRA.',
          '**Alternativa de arquitetura mais nova** → Intel Arc B580 12GB (R$ 2.060–2.400). Boa placa, mas no Brasil custa mais que a RTX 3060 — o inverso do mercado em dólar. Escolha-a se preferir arquitetura nova e não precisar de LoRA.',
          '**Melhor hardware, se achar perto da tabela** → RTX 4060 Ti 16GB. Roda 14B em Q8 na GPU e supera tudo aqui, mas passou de R$ 3.299 e está sem estoque ao preço de tabela no exterior.',
          '**Precisa de capacidade para modelos 30B?** → A janela sub-US$ 500 fechou em meados de 2026 e não reabriu. A RTX 3090 usada (24 GB) agora está a partir de R$ 6.000.',
          '**Usuário de Windows, sem complicação** → RTX 4060 Ti 16GB. A NVIDIA CUDA tem o suporte mais amplo no Windows para LLMs, fine-tuning e runtimes multimodais.',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-pt.svg',
        imageCaption: 'Árvore de decisão para escolher uma GPU econômica por menos de US$ 500 para inferência de LLM local no Brasil: leva à RTX 3060 12GB (R$ 1.450–2.000) como opção padrão, à Intel Arc B580 12GB (R$ 2.060–2.400) como alternativa, e a uma RTX 3090 usada (24 GB) a partir de R$ 6.000 para modelos 30B.',
      },
      softwareCompat: {
        title: 'Compatibilidade de software por GPU',
        content: 'As três GPUs rodam Ollama e llama.cpp. As diferenças aparecem nas ferramentas avançadas:',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ parcial', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Consumo de energia e requisitos do sistema',
        content: 'O consumo da GPU determina qual fonte de alimentação e gabinete você precisa. Rodar LLMs mantém as GPUs a 80–100% de utilização continuamente — diferente de jogos, não há frames ociosos.',
        items: [
          'RTX 3060 12GB: 170 W — funciona com fonte de 550 W ou mais; um conector de 8 pinos',
          'Intel Arc B580 12GB: 190 W — fonte de 650 W ou mais; 8 pinos padrão',
          'RTX 4060 Ti 16GB: 165 W — funciona com fonte de 550 W ou mais; um conector de 8 pinos',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '8 GB de VRAM são suficientes para rodar LLMs localmente?',
            a: '8 GB de VRAM limitam você a modelos 7B em quantização Q4 — o modelo mal cabe. Você não consegue rodar modelos 13B em qualidade completa, e os modelos 14B serão parcialmente descarregados para a RAM do sistema, reduzindo a velocidade em 80–95%. Para um uso local de LLM significativo em 2026, 12 GB é o mínimo prático; 16 GB é o recomendado.',
          },
          {
            q: 'Ainda posso comprar uma RTX 3090 de segunda mão por menos de US$ 500 em 2026?',
            a: 'Não. As RTX 3090 de segunda mão estão sendo negociadas a partir de R$ 6.000 no Mercado Livre. O preço subiu primeiro quando os entusiastas de LLM reconheceram o valor dos 24 GB de VRAM, e de novo durante a escassez de memória de 2026. Não é mais uma opção dentro da faixa, e já não é há um bom tempo. Se você precisa de capacidade para modelos 30B (que exige 24 GB de VRAM), reserve a partir de R$ 6.000 para uma RTX 3090 usada.',
          },
          {
            q: 'A AMD funciona para rodar LLMs localmente?',
            a: 'Sim, com ressalvas. O Ollama no Linux com ROCm funciona bem em placas como a RX 7800 XT. O suporte a ROCm no Windows melhorou, mas ainda exige passos manuais, e o fine-tuning (LoRA) em hardware AMD não é suportado pela maioria das ferramentas. Nota sobre preço: a RX 7800 XT 16GB subiu para ~R$ 2.900 em julho de 2026, então não cabe mais na faixa sub-US$ 500 — para essa faixa de preço, a RTX 4060 Ti 16GB ou a RTX 3060 12GB (ambas NVIDIA/CUDA) são as escolhas recomendadas. Para Windows ou fine-tuning, fique com a NVIDIA.',
          },
          {
            q: 'E as GPUs Intel Arc para IA?',
            a: 'A Intel Arc B580 12GB é a melhor opção Arc em 2026 e, no mercado em dólar, virou a melhor placa desta página depois que a escassez de memória reprecificou a linha NVIDIA. No Brasil, porém, ela sai por R$ 2.060–2.400, acima da RTX 3060 12GB, então aqui ela é alternativa e não a primeira escolha. Roda o Ollama no Windows e no Linux pelo backend SYCL, com desempenho 30–40% abaixo da NVIDIA em tok/s brutos. A limitação principal continua sendo software: vLLM, ferramentas de ajuste fino e runtimes multimodais ainda não dão bom suporte à Arc, então se você precisa de LoRA, fique com a RTX 3060 12GB.',
          },
          {
            q: 'Posso rodar um modelo 70B em uma única GPU por menos de US$ 500?',
            a: 'Não em velocidade plena. Mesmo a RTX 3090 (24 GB) não consegue armazenar 70B Q4 (~40 GB) inteiramente na VRAM. Você pode usar offload para CPU com o llama.cpp para dividir o modelo entre VRAM e RAM do sistema, mas a velocidade cai para 2–5 tok/s — lento demais para uso interativo. Para rodar modelos 70B em velocidades utilizáveis, você precisa de duas GPUs (2× RTX 3090 com 48 GB no total) ou inferência na nuvem.',
          },
          {
            q: 'As novas placas (RTX 5060 Ti) vão tornar essas GPUs obsoletas?',
            a: 'A RTX 5060 Ti 16GB já foi lançada, e não ficou abaixo da RTX 4060 Ti — foi o contrário. Saiu com preço de tabela de US$ 429 e hoje é vendida por US$ 570–600, cerca de 40% acima da tabela, porque a mesma escassez de memória que reprecificou toda esta lista bateu mais forte nela por ser placa de geração atual. É uma GPU genuinamente melhor que qualquer uma daqui, com 16 GB de VRAM e inferência mais rápida, mas não é uma placa dentro da faixa, e esperar que ela entre não é um plano que se sustente. Compre pelo que está disponível agora: no Brasil, a RTX 3060 12GB por R$ 1.450–2.000.',
          },
          {
            q: 'Quanto custa uma RTX 4060 Ti 16GB usada?',
            a: 'As RTX 4060 Ti 16GB usadas acompanharam a alta das novas: com as unidades novas passando de R$ 3.299, os anúncios de usadas ficam em torno de R$ 2.900–3.100 no Mercado Livre, dependendo do estado e da garantia restante. É uma das poucas placas em que comprar usada não representa grande economia, porque a oferta de unidades novas ao preço de tabela secou.',
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
            text: 'Não — as RTX 3090 de segunda mão estão a partir de R$ 6.000 no Mercado Livre, bem acima da faixa de US$ 500. Para capacidade de modelos 30B você precisa de a partir de R$ 6.000.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso rodar um modelo 70B em uma única GPU por menos de US$ 500?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não em velocidade plena. Mesmo a RTX 3090 (24 GB) não consegue alojar 70B Q4 (~40 GB) inteiramente na VRAM. O offload para CPU reduz a velocidade para 2–5 tok/s. São necessárias duas GPUs ou inferência na nuvem.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanto custa uma RTX 4060 Ti 16GB usada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Com as unidades novas passando de R$ 3.299, os anúncios de usadas ficam em torno de R$ 2.900–3.100 no Mercado Livre, dependendo do estado. Confirme que é a variante de 16 GB, pois também existe uma versão de 8 GB.',
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
        { '@type': 'ListItem', position: 1, name: 'NVIDIA RTX 3060 12GB', description: 'Melhor opção geral no Brasil — 12 GB de VRAM, cadeia CUDA completa, R$ 1.450–2.000' },
        { '@type': 'ListItem', position: 2, name: 'Intel Arc B580 12GB', description: 'Alternativa de arquitetura mais nova — 12 GB, R$ 2.060–2.400 no Brasil' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'Melhor hardware, mas passou de R$ 3.299 e sem estoque ao preço de tabela no exterior' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: 'Melhor GPU para inferência de LLM por menos de US$ 500 (2026)',
      description: 'Comparação classificada de GPUs por menos de US$ 500 para inferência de IA local: RTX 4060 Ti 16GB, RTX 3060 12GB, Arc B580. Preços verificados. RTX 3090, RTX 4070 e RX 7800 XT removidas — todas excedem US$ 500 agora.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-28',
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
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: 'Beste GPU für LLM-Inferenz unter 500 € (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-de.webp',
    seoTitle: 'Beste GPU unter 500 € für LLM-Inferenz: Intel Arc B580',
    metaDescription: 'Die beste GPU unter 500 € für lokale LLM-Inferenz ist jetzt der Intel Arc B580 12GB (250-290 €) — die Speicherknappheit 2026 hat RTX 4060 Ti 16GB und neue RTX 3060 über 500 € gehoben.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**Die beste GPU unter 500 € für lokale LLM-Inferenz ist jetzt der Intel Arc B580 12GB (250–290 €): 12 GB VRAM für 7B–13B-Modelle mit Q4, ~31 Tok/s bei Llama 3.1 8B Q4, und die einzige neue 12-GB-Karte, die verlässlich unter 500 € zu bekommen ist. Wer die CUDA-Toolchain braucht, nimmt eine gebrauchte RTX 3060 12GB (270–300 €). Die bisherige Siegerin, die RTX 4060 Ti 16GB, ist aus dem Fenster gefallen: Angebote zur UVP von 399 € sind nicht lieferbar, verfügbare Karten liegen bei rund 560 €. Die RTX 3060 12GB ist seit ihrer Neuauflage um etwa 45 % gestiegen und kostet neu 470–600 €. Bewegt hat sie alle dieselbe Ursache: eine weltweite DRAM- und GDDR7-Knappheit, getrieben von der Nachfrage der KI-Rechenzentren. Für 30B-Modell-Fähigkeit rechne mit 850 €+.**',
    quickAnswerTop: {
      question: 'Welche GPU ist am besten für lokale KI-Modelle unter 500 €?',
      answer: '**Der Intel Arc B580 12GB (250–290 €) ist die beste GPU unter 500 € für lokale LLM-Inferenz.** Seine 12 GB VRAM führen 7B–13B-Modelle mit Q4 aus, er läuft mit Ollama über das SYCL/oneAPI-Backend unter Windows und Linux, und er ist die einzige neue 12-GB-Karte, die verlässlich unter 500 € verfügbar bleibt. Eine gebrauchte RTX 3060 12GB (270–300 €) ist die Zweitwahl, wenn du die CUDA-Toolchain brauchst. Die Speicherknappheit 2026 hat den Rest dieser Liste aus dem Fenster gehoben: Die RTX 4060 Ti 16GB liegt lieferbar bei rund 560 €, die neue RTX 3060 12GB bei 470–600 €, die gebrauchte RTX 3090 bei 850–1.050 €, die RTX 4070 12GB bei 560–705 € und die RX 7800 XT 16GB bei ~682 €.',
      bullets: [
        '**Sieger:** Intel Arc B580 12GB (250–290 €) — 12 GB VRAM, ~31 Tok/s bei Llama 3.1 8B Q4, einzige neue 12-GB-Karte verlässlich unter 500 €',
        '**Zweitplatzierte:** RTX 3060 12GB gebraucht (270–300 €) — günstigster Weg zur vollen CUDA-Toolchain',
        '⚠️ RTX 4060 Ti 16GB: zur UVP von 399 € nicht lieferbar, ~560 € wenn verfügbar — keine verlässliche Sub-500-€-Option mehr',
        '⚠️ RTX 3060 12GB neu: 470–600 €, seit der Neuauflage um 45 % gestiegen — kauf sie stattdessen gebraucht',
        '⚠️ RTX 3090 gebraucht: jetzt 850–1.050 € — keine Sub-500-€-Option mehr',
        '⚠️ RTX 4070 12GB: jetzt 560–705 €, RX 7800 XT 16GB: ~682 € — beide über 500 €',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB gewinnt für die meisten Nutzer: 12 GB VRAM, 250–290 €, ~31 Tok/s bei Llama 3.1 8B Q4 — die einzige neue 12-GB-Karte verlässlich unter 500 €**',
          'RTX 3060 12GB gebraucht (270–300 €) ist die Zweitplatzierte — günstigster Weg zur vollen CUDA-Toolchain',
          '⚠️ Preisalarm: Die RTX 4060 Ti 16GB, die bisherige Siegerin, ist zur UVP von 399 € nicht lieferbar und kostet verfügbar rund 560 € — aus der Sub-500-€-Liste entfernt',
          '⚠️ Preisalarm: Die neue RTX 3060 12GB kostet 470–600 €, seit der Neuauflage um 45 % gestiegen — der Gebrauchtmarkt ist der vernünftige Weg zu dieser Karte',
          '⚠️ Preisalarm: Gebrauchte RTX 3090 kostet jetzt 850–1.050 €, RTX 4070 12GB 560–705 € — beide aus der Sub-500-€-Liste entfernt',
          '⚠️ Preisalarm: RX 7800 XT 16GB kostet jetzt ~682 € — aus der Sub-500-€-Liste entfernt',
          'Warum sich alles bewegt hat: Eine weltweite DRAM- und GDDR7-Knappheit, getrieben von der Nachfrage der KI-Rechenzentren, hat die Straßenpreise für Grafikkarten marktweit deutlich über die Listenpreise gehoben. Die Hardware hat sich nicht verändert, nur was sie kostet. Für 30B-Modelle rechne mit mindestens 900 € für eine gebrauchte RTX 3090 (24 GB).',
          'Alle drei GPUs auf dieser Liste laufen mit Ollama, LM Studio und llama.cpp sofort einsatzbereit',
        ],
      },
      rankedList: {
        title: 'Beste GPUs für LLM-Inferenz unter 500 € — Rangfolge',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Der Intel Arc B580 12GB ist die beste GPU unter 500 € für lokale LLM-Inferenz, weil er nach der Speicherknappheit 2026 die einzige neue 12-GB-Karte ist, die verlässlich unter 500 € verfügbar bleibt.',
          },
          {
            type: 'plain-terms',
            text: 'VRAM bestimmt, welche KI-Modelle du lokal ausführen kannst. 16 GB reichen für 14B-Modelle. 24 GB (gebrauchte RTX 3090) ermöglichen 30B-Modelle. Unter 12 GB bist du auf 7B-Modelle beschränkt.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — Bestes Gesamtpaket (250–290 €)',
            content: '**Der Intel Arc B580 12GB ist die beste GPU unter 500 € für lokale LLM-Inferenz — nicht zuletzt, weil er als Einziger verlässlich in diesem Fenster übrig geblieben ist.** Er startete bei 249 € und liegt weiterhin bei 250–290 €, während die Speicherknappheit 2026 jede NVIDIA-Karte, die früher diese Liste füllte, über 500 € gehoben hat. Ollama läuft über das SYCL/oneAPI-Backend unter Linux und Windows mit ~28–35 Tok/s bei Llama 3.1 8B Q4. Die 12-GB-Grenze beschränkt dich auf 13B-Modelle mit Q4 — ein 14B mit Q8 passt nicht. Intels Treiberunterstützung hat sich seit dem Start deutlich verbessert, bleibt aber in der Breite der Werkzeuge hinter CUDA zurück: Ollama und llama.cpp laufen gut, LoRA-Fine-Tuning bleibt umständlich.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB bei Amazon.de', url: 'https://www.amazon.de/s?k=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12GB gebraucht — Beste CUDA-Option (270–300 €)',
            content: 'Die NVIDIA GeForce RTX 3060 12GB ist der günstigste Weg zur vollen CUDA-Toolchain — aber kauf sie **gebraucht**. Ihre Neuauflage für 334 € hat nicht gehalten: Neukarten sind um rund 45 % auf 470–600 € gestiegen und liegen damit an oder über der 500-€-Grenze, um die es auf dieser Seite geht. Der Gebrauchtmarkt hat sich weit weniger bewegt, bei 270–300 €. Ihre 12 GB GDDR6 führen 7B–13B-Modelle mit Q4/Q8 komfortabel aus; ein 14B mit Q8 passt nicht, ein 14B mit Q4 (~8,5 GB) schon. Benchmark: ~32–40 Tok/s bei Llama 3.1 8B Q4 mit Ollama. Die volle CUDA-Toolchain bedeutet, dass Ollama, LM Studio, vLLM und LoRA-Fine-Tuning unter Windows und Linux sofort laufen — das Einzige, was der Arc B580 nicht bieten kann.',
            affiliateLinks: [
              { label: 'RTX 3060 12GB bei Amazon.de', url: 'https://www.amazon.de/s?k=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — Beste Karte, falls du sie zur UVP findest (399 € UVP, ~560 € lieferbar)',
            content: 'Die RTX 4060 Ti 16GB ist weiterhin die beste *Hardware* dieser Liste und war bis zur Speicherknappheit 2026 die Siegerin dieser Seite. Ihre 16 GB GDDR6 führen Qwen3 14B und Mistral 12B mit Q4 komplett in-GPU aus — und mit Q8 ohne Auslagern — bei 45–60 Tok/s auf 7B Q4 und 18–25 Tok/s auf 14B Q8 mit Ollama, bei 165 W TDP, die jedes 650-W-Netzteil verkraftet. Das Problem ist, eine zu bekommen. Angebote zur UVP von 399 € sind bei den großen Händlern nicht lieferbar, und die günstigste nachweisbar verfügbare Karte liegt bei rund 560 €, etwa 41 % über Liste. Findest du eine zur UVP oder nahe daran, ist sie mit Abstand der beste Kauf auf dieser Seite; bei 560 € liegt sie außerhalb des Budgets, für das diese Seite geschrieben ist.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB bei Amazon.de', url: 'https://www.amazon.de/s?k=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Leistungsvergleich — Aktuelle Preise + Testergebnisse',
        content: 'Benchmarks gemessen mit Ollama 0.30.x, llama.cpp-Server, Modelle von HuggingFace. Testsystem: Ryzen 9 7950X, 64 GB DDR5, NVMe-SSD. Die Geschwindigkeiten haben sich gegenüber früheren Tests nicht verändert: Die Hardware hat sich nicht bewegt, die Preise schon. Wegen Überschreitung der 500 € ausgeschlossen: gebrauchte RTX 3090 (850–1.050 €), RTX 4070 12GB (560–705 €), RX 7800 XT 16GB (~682 €) und neue RTX 3060 12GB (470–600 €).',
        columns: ['GPU', 'VRAM', 'Preis', 'Llama 3.1 8B Q4 Tok/s', 'Qwen3 14B Q8 Tok/s', 'Max. Modell (Q4)'],
        rows: [
          { GPU: 'Intel Arc B580 12GB ★', VRAM: '12 GB', 'Preis': '250–290 €', 'Llama 3.1 8B Q4 Tok/s': '31 Tok/s', 'Qwen3 14B Q8 Tok/s': 'VRAM-limitiert', 'Max. Modell (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12GB (gebraucht)', VRAM: '12 GB', 'Preis': '270–300 €', 'Llama 3.1 8B Q4 Tok/s': '36 Tok/s', 'Qwen3 14B Q8 Tok/s': 'VRAM-limitiert', 'Max. Modell (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', VRAM: '16 GB', 'Preis': '~560 € lieferbar', 'Llama 3.1 8B Q4 Tok/s': '55 Tok/s', 'Qwen3 14B Q8 Tok/s': '22 Tok/s', 'Max. Modell (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-de.svg',
        imageCaption: 'Budget-GPU-Vergleich für lokale LLM-Inferenz unter 500 €: Intel Arc B580 12GB (250–290 €, 31 Tok/s), gebrauchte RTX 3060 12GB (270–300 €, 36 Tok/s) und RTX 4060 Ti 16GB (~560 € lieferbar, 55 Tok/s, 30B max.), gemessen mit Ollama.',
      },
      methodology: {
        title: 'Wie wir diese GPUs ausgewählt und getestet haben',
        content: 'Auswahlkriterien: neu oder gebraucht für unter 500 € erhältlich; unterstützt von mindestens einer wichtigen Inferenz-Laufzeitumgebung (Ollama, LM Studio, llama.cpp); VRAM ≥ 12 GB (8-GB-Karten ausgeschlossen). Mehrere Karten sind wegen des Preises aus der Liste geflogen: Die gebrauchte RTX 3090 (24 GB) liegt jetzt bei 850–1.050 €; die RTX 4070 12GB bei 560–705 €; die RX 7800 XT 16GB bei ~682 €; und die neue RTX 3060 12GB, die für 334 € neu aufgelegt wurde, ist um rund 45 % auf 470–600 € gestiegen. Die RTX 4060 Ti 16GB bleibt in der Liste, aber mit Warnhinweis — Angebote zur UVP von 399 € sind nicht lieferbar, verfügbare Karten liegen bei rund 560 €. Die Ursache ist bei allen dieselbe: Eine weltweite DRAM- und GDDR7-Knappheit, getrieben von der Nachfrage der KI-Rechenzentren, hat die Straßenpreise marktweit deutlich über die Listenpreise gehoben, wobei NVIDIAs RTX-50-Serie rund 36–39 % über UVP gehandelt wird und AMD die Radeon-Preise um etwa 10 % angehoben hat. Alle Benchmarks sind Tok/s, gemittelt über 10 Durchläufe bei Batch-Größe 1, gemessen mit Ollama 0.30.x auf Ubuntu 22.04 LTS.',
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
            text: 'VRAM funktioniert wie RAM für KI-Modelle. Das Modell muss vollständig in den VRAM passen, um schnell zu laufen. Fließt es in den System-RAM über ("Offloading"), sinkt die Geschwindigkeit um 80–95 %. Q4-Quantisierung halbiert die Größe gegenüber Q8 bei kleinem Qualitätsverlust.',
          },
        ],
        items: [
          '7B-Modell mit Q4: ~4,5 GB VRAM — jede GPU auf dieser Liste bewältigt das mühelos',
          '7B-Modell mit Q8: ~7,5 GB VRAM — passt auf alle GPUs hier',
          '13B-Modell mit Q4: ~8,5 GB VRAM — passt auf alle GPUs dieser Liste',
          '14B-Modell mit Q8: ~14 GB VRAM — nur RTX 4060 Ti 16GB und RTX 3090 (gebraucht); beide liegen inzwischen über 500 €',
          '30B-Modell mit Q4: ~18 GB VRAM — nur die RTX 3090 (24 GB) bewältigt das komfortabel',
          '70B-Modell mit Q4: ~40 GB — erfordert zwei GPUs oder CPU-Offloading',
        ],
      },
      decisionMatrix: {
        title: 'Welche GPU solltest du kaufen?',
        content: 'Nutze diesen Entscheidungsleitfaden je nach Haupteinsatzzweck:',
        items: [
          '**Bester Allrounder unter 500 €** → Intel Arc B580 12GB (250–290 €). Die einzige neue 12-GB-Karte, die verlässlich unter 500 € verfügbar ist. 7B–13B-Modelle mit Q4, ~31 Tok/s bei Llama 3.1 8B Q4, Ollama über SYCL unter Windows und Linux.',
          '**Günstigste funktionierende CUDA-Karte** → RTX 3060 12GB gebraucht (270–300 €). Die volle CUDA-Toolchain — Ollama, LM Studio, vLLM, LoRA-Fine-Tuning — für ungefähr denselben Preis wie der Arc. Kauf sie gebraucht: neu kostet sie 470–600 €.',
          '**Beste Hardware, falls zur UVP zu finden** → RTX 4060 Ti 16GB. Zur UVP von 399 € schlägt sie alles andere hier und führt 14B mit Q8 in-GPU aus. Angebote zur UVP sind aber nicht lieferbar, verfügbare Karten kosten rund 560 € — außerhalb des Budgets dieser Seite.',
          '**Brauchst du 30B-Modell-Fähigkeit?** → Das Sub-500-€-Fenster hat sich Mitte 2026 geschlossen und ist nicht wieder aufgegangen. Gebrauchte RTX 3090 (24 GB) liegt jetzt bei 850–1.050 €. Rechne mit 850 €+ oder ~999 € für eine RTX 4080 SUPER (16 GB).',
          '**Windows-Nutzer, ohne Aufwand** → RTX 3060 12GB gebraucht. NVIDIA CUDA bietet die breiteste Windows-Toolchain-Unterstützung für LLMs, Fine-Tuning und multimodale Laufzeiten, und die gebrauchte 3060 ist der günstigste Einstieg.',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-de.svg',
        imageCaption: 'Entscheidungsbaum zur Wahl einer Budget-GPU unter 500 € für lokale LLM-Inferenz: führt zum Intel Arc B580 12GB (250–290 €) als Standardwahl, zur gebrauchten RTX 3060 12GB (270–300 €) wenn CUDA gebraucht wird, und zu einer gebrauchten RTX 3090 (24 GB) ab 900 € für 30B-Modelle.',
      },
      softwareCompat: {
        title: 'Software-Kompatibilität nach GPU',
        content: 'Alle drei GPUs laufen mit Ollama und llama.cpp. Unterschiede zeigen sich bei fortgeschrittenen Tools:',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA-Fine-Tuning'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ Beta', vLLM: '❌', 'Text Gen WebUI': '⚠️ teilweise', 'CUDA-Fine-Tuning': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA-Fine-Tuning': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA-Fine-Tuning': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Stromverbrauch und Systemanforderungen',
        content: 'Der Stromverbrauch der GPU bestimmt, welches Netzteil und Gehäuse du brauchst. LLMs halten die GPU dauerhaft bei 80–100 % Auslastung — anders als beim Gaming gibt es keine Leerlauf-Frames.',
        items: [
          'Intel Arc B580 12GB: 190 W — 650-W+-Netzteil; Standard-8-Pin',
          'RTX 3060 12GB: 170 W — funktioniert mit 550-W+-Netzteil; ein 8-Pin-Anschluss',
          'RTX 4060 Ti 16GB: 165 W — funktioniert mit 550-W+-Netzteil; ein 8-Pin-Anschluss',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Reichen 8 GB VRAM für lokale KI-Modelle?',
            a: '8 GB VRAM beschränken auf 7B-Modelle bei Q4-Quantisierung. 13B-Modelle passen nicht vollständig in VRAM, 14B-Modelle werden auf CPU-RAM ausgelagert, was die Geschwindigkeit um 80–95 % reduziert. Für sinnvolle lokale LLM-Nutzung 2026 sind 12 GB das praktische Minimum, 16 GB empfohlen.',
          },
          {
            q: 'Kann ich AMD GPUs für lokale KI verwenden?',
            a: 'Ja, mit Einschränkungen. Ollama mit ROCm funktioniert gut unter Linux auf Karten wie der RX 7800 XT. Windows-ROCm-Support hat sich verbessert, erfordert aber weiterhin manuelle Schritte, und Fine-Tuning (LoRA) auf AMD-Hardware wird von den meisten Tools nicht unterstützt. Hinweis zum Preis: Die RX 7800 XT 16GB ist im Juli 2026 auf ~682 € gestiegen und passt daher nicht mehr in ein Sub-500-€-Budget — für diese Preisklasse sind die RTX 4060 Ti 16GB oder die RTX 3060 12GB (beide NVIDIA/CUDA) die empfohlenen Optionen. Für Windows oder Fine-Tuning bleib bei NVIDIA.',
          },
          {
            q: 'Kann ich eine gebrauchte RTX 3090 noch für unter 500 € kaufen?',
            a: 'Nein. Gebrauchte RTX 3090 werden für 850–1.050 € auf eBay.de gehandelt. Der Preis stieg zuerst, als LLM-Enthusiasten den Wert der 24 GB VRAM erkannten, und dann noch einmal während der Speicherknappheit 2026. Sie ist keine Sub-500-€-Option mehr und war es schon länger nicht. Wenn du 30B-Modell-Fähigkeit brauchst (die 24 GB VRAM voraussetzt), rechne mit 850 €+ für eine gebrauchte RTX 3090 oder ~999 € für eine RTX 4080 SUPER (16 GB).',
          },
          {
            q: 'Was ist mit Intel-Arc-GPUs für KI?',
            a: 'Der Intel Arc B580 12GB ist 2026 die beste Arc-Option — und nachdem die Speicherknappheit das NVIDIA-Feld neu bepreist hat, insgesamt die beste Karte auf dieser Seite. Er führt Ollama über das SYCL-Backend unter Windows und Linux aus, wobei die Leistung 30–40 % unter NVIDIA in reinen Tok/s liegt. Das Preis-Leistungs-Verhältnis ist inzwischen nicht nur gut, sondern ausschlaggebend: 12 GB VRAM für 250–290 €, während vergleichbare NVIDIA-Karten bei 470–600 € liegen. Die Hauptbeschränkung bleibt die Software — vLLM, Fine-Tuning-Werkzeuge und multimodale Laufzeiten unterstützen Arc noch nicht gut. Wer LoRA-Fine-Tuning braucht, kauft stattdessen eine gebrauchte RTX 3060 12GB.',
          },
          {
            q: 'Kann ich ein 70B-Modell auf einer einzigen GPU unter 500 € ausführen?',
            a: 'Nicht mit voller Geschwindigkeit. Selbst die RTX 3090 (24 GB) kann 70B Q4 (~40 GB) nicht vollständig im VRAM unterbringen. Mit CPU-Offloading über llama.cpp lässt sich das Modell zwischen GPU-VRAM und System-RAM aufteilen, aber die Geschwindigkeit sinkt auf 2–5 Tok/s — zu langsam für interaktive Nutzung. Für nutzbare Geschwindigkeiten bei 70B-Modellen brauchst du zwei GPUs (2× RTX 3090 mit insgesamt 48 GB) oder Cloud-Inferenz.',
          },
          {
            q: 'Machen neuere GPUs (RTX 5060 Ti) diese Karten überflüssig?',
            a: 'Die RTX 5060 Ti 16GB ist erschienen — und sie hat die RTX 4060 Ti nicht unterboten, sondern das Gegenteil. Sie startete mit einer UVP von 429 $ und kostet jetzt 570–600 €, rund 40 % über Liste, weil dieselbe Speicherknappheit, die diese ganze Liste neu bepreist hat, sie als Karte der aktuellen Generation am härtesten getroffen hat. Sie ist eine echt bessere GPU als alles hier, mit 16 GB VRAM und schnellerer Inferenz, aber sie ist keine Sub-500-€-Karte, und darauf zu warten, dass sie eine wird, ist kein tragfähiger Plan. Kauf nach dem, was jetzt verfügbar ist: Intel Arc B580 12GB für 250–290 € oder eine gebrauchte RTX 3060 12GB für 270–300 €, wenn du CUDA brauchst.',
          },
          {
            q: 'Was kostet eine gebrauchte RTX 4060 Ti 16GB?',
            a: 'Gebrauchte RTX 4060 Ti 16GB-Karten sind mit den Neupreisen mitgestiegen: Da lieferbare Neukarten bei rund 560 € liegen, rufen Gebrauchtangebote auf eBay.de inzwischen etwa 420–480 € auf, abhängig von Zustand und Restgarantie. Sie ist eine der wenigen Karten, bei denen gebraucht keine große Ersparnis bedeutet, weil das Angebot an Neukarten zur UVP versiegt ist.',
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
        { '@type': 'Question', name: 'Kann ich eine gebrauchte RTX 3090 noch für unter 500 € kaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein — gebrauchte RTX 3090 werden für 850–1.050 € auf eBay.de gehandelt, weit über der 500-€-Grenze. Für 30B-Modell-Fähigkeit rechne mit 850 €+ oder ~999 € für eine RTX 4080 SUPER (16 GB).' } },
        { '@type': 'Question', name: 'Was ist mit Intel-Arc-GPUs für KI?', acceptedAnswer: { '@type': 'Answer', text: 'Der Intel Arc B580 12GB ist die beste Arc-Option 2026 und inzwischen die beste Karte auf dieser Seite: 12 GB VRAM für 250–290 €, rund 30–40 % langsamer als NVIDIA in reinen Tok/s, aber die einzige neue 12-GB-Karte verlässlich unter 500 €. Für LoRA-Fine-Tuning stattdessen eine gebrauchte RTX 3060 12GB.' } },
        { '@type': 'Question', name: 'Kann ich ein 70B-Modell auf einer einzigen GPU unter 500 € ausführen?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht mit voller Geschwindigkeit. Selbst die RTX 3090 (24 GB) kann 70B Q4 (~40 GB) nicht vollständig im VRAM unterbringen. CPU-Offloading senkt die Geschwindigkeit auf 2–5 Tok/s. Zwei GPUs oder Cloud-Inferenz sind nötig.' } },
        { '@type': 'Question', name: 'Machen neuere GPUs (RTX 5060 Ti) diese Karten überflüssig?', acceptedAnswer: { '@type': 'Answer', text: 'Die RTX 5060 Ti 16GB ist erschienen und hat die RTX 4060 Ti nicht unterboten: Sie startete mit 429 $ UVP und kostet jetzt 570–600 €, rund 40 % über Liste. Sie ist die bessere GPU, aber keine Sub-500-€-Karte.' } },
        { '@type': 'Question', name: 'Was kostet eine gebrauchte RTX 4060 Ti 16GB?', acceptedAnswer: { '@type': 'Answer', text: 'Da lieferbare Neukarten bei rund 560 € liegen, rufen Gebrauchtangebote auf eBay.de etwa 420–480 € auf, abhängig vom Zustand. Achte darauf, dass es die 16-GB-Variante ist — es gibt auch eine mit 8 GB.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Beste GPUs für LLM-Inferenz unter 500 € (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: 'Bestes Gesamtpaket — 12 GB VRAM, einzige neue 12-GB-Karte verlässlich unter 500 €, 250–290 €' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (gebraucht)', description: 'Beste CUDA-Option — 12 GB VRAM, volle CUDA-Toolchain, 270–300 € gebraucht' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: 'Beste Hardware, aber zur UVP von 399 € nicht lieferbar und ~560 € wenn verfügbar' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Beste GPU für LLM-Inferenz unter 500 € (2026)', datePublished: '2026-05-26', dateModified: '2026-08-28', url: 'https://www.promptquorum.com/de/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'de' },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: 'Meilleure GPU pour l\'inférence LLM à moins de 500 € (2026)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-fr.webp',
    seoTitle: 'Meilleure GPU sous 500 € pour LLM : Intel Arc B580',
    metaDescription: 'La meilleure GPU sous 500 € pour l\'inférence LLM locale est désormais l\'Intel Arc B580 12 Go (250-290 €) — la pénurie de mémoire de 2026 a fait passer la RTX 4060 Ti 16 Go au-dessus de 500 €.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**La meilleure GPU sous 500 € pour l\'inférence LLM locale est désormais l\'Intel Arc B580 12 Go (250–290 €) : 12 Go de VRAM pour les modèles 7B–13B en Q4, ~31 tok/s sur Llama 3.1 8B Q4, et la seule carte neuve de 12 Go encore disponible de façon fiable sous 500 €. Pour la chaîne d\'outils CUDA, une RTX 3060 12 Go d\'occasion (270–300 €) est l\'alternative. La gagnante précédente, la RTX 4060 Ti 16 Go, est sortie de la fenêtre : ses annonces au tarif conseillé de 399 € sont en rupture et les cartes disponibles tournent autour de 560 €. La RTX 3060 12 Go a grimpé d\'environ 45 % depuis sa relance et coûte 470–600 € neuve. Une même cause les a toutes déplacées : une pénurie mondiale de DRAM et de GDDR7, tirée par la demande des centres de données IA. Pour la capacité 30B, prévoyez 850 €+.**',
    quickAnswerTop: {
      question: 'Quelle est la meilleure GPU pour faire tourner des LLMs en local à moins de 500 € ?',
      answer: 'L\'Intel Arc B580 12 Go (250–290 €) est la meilleure GPU sous 500 € pour l\'inférence LLM locale. Ses 12 Go de VRAM font tourner les modèles 7B–13B en Q4, il fonctionne avec Ollama via le backend SYCL/oneAPI sous Windows et Linux, et c\'est la seule carte neuve de 12 Go encore disponible de façon fiable sous 500 €. Une RTX 3060 12 Go d\'occasion (270–300 €) est l\'alternative si vous avez besoin de la chaîne CUDA. La pénurie de mémoire de 2026 a sorti le reste de cette liste de la fenêtre : la RTX 4060 Ti 16 Go tourne autour de 560 € quand elle est en stock, la RTX 3060 12 Go neuve est à 470–600 €, la RTX 3090 d\'occasion à 850–1 050 €, la RTX 4070 12 Go à 560–705 € et la RX 7800 XT 16 Go à ~682 €.',
      bullets: [
        '**Gagnante :** Intel Arc B580 12 Go (250–290 €) — 12 Go VRAM, ~31 tok/s sur Llama 3.1 8B Q4, seule carte neuve de 12 Go fiablement sous 500 €',
        '**Alternative :** RTX 3060 12 Go d\'occasion (270–300 €) — la voie la moins chère vers la chaîne CUDA complète',
        '⚠️ RTX 4060 Ti 16 Go : en rupture au tarif conseillé de 399 €, ~560 € quand disponible — plus une option fiable sous 500 €',
        '⚠️ RTX 3060 12 Go neuve : 470–600 €, +45 % depuis sa relance — achetez-la d\'occasion',
        '⚠️ RTX 3090 occasion : 850–1 050 €, RTX 4070 12 Go : 560–705 € — plus des options sous 500 €',
        '⚠️ RX 7800 XT 16 Go : maintenant ~682 € — plus une option sous 500 €',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**L\'Intel Arc B580 12 Go gagne pour la plupart des utilisateurs : 12 Go VRAM, 250–290 €, ~31 tok/s sur Llama 3.1 8B Q4 — seule carte neuve de 12 Go fiablement sous 500 €**',
          'La RTX 3060 12 Go d\'occasion (270–300 €) est l\'alternative — la voie la moins chère vers la chaîne CUDA complète',
          '⚠️ Alerte prix : la RTX 4060 Ti 16 Go, gagnante précédente, est en rupture au tarif conseillé de 399 € et coûte ~560 € quand disponible — retirée de la liste sous 500 €',
          '⚠️ Alerte prix : la RTX 3060 12 Go neuve est à 470–600 €, +45 % depuis sa relance — le marché de l\'occasion est la voie raisonnable pour cette carte',
          '⚠️ Alerte prix : RTX 3090 occasion à 850–1 050 € et RTX 4070 12 Go à 560–705 € — retirées de la liste sous 500 €',
          '⚠️ Alerte prix : RX 7800 XT 16 Go coûte maintenant ~682 € — retirée de la liste sous 500 €',
          'Pourquoi tout a bougé : une pénurie mondiale de DRAM et de GDDR7, tirée par la demande des centres de données IA, a poussé les prix de rue des cartes graphiques nettement au-dessus des tarifs catalogue sur tout le marché. Le matériel n\'a pas changé, seulement son prix. Besoin de modèles 30B ? Prévoyez au moins 900 € pour une RTX 3090 occasion (24 Go).',
          'Les trois GPU de cette liste fonctionnent avec Ollama, LM Studio et llama.cpp sans configuration',
        ],
      },
      rankedList: {
        title: 'Meilleures GPU pour l\'inférence LLM sous 500 € — Classement',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'L\'Intel Arc B580 12 Go est la meilleure GPU sous 500 € pour l\'inférence LLM locale car c\'est la seule carte neuve de 12 Go encore disponible de façon fiable sous 500 € après la pénurie de mémoire de 2026.',
          },
          {
            type: 'plain-terms',
            text: 'Le VRAM de la GPU détermine quels modèles d\'IA vous pouvez faire tourner. 16 Go suffisent pour les modèles 14B. 24 Go (RTX 3090 occasion) permettent les modèles 30B. En dessous de 12 Go, vous êtes limité aux modèles 7B.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12 Go — Meilleur choix global (250–290 €)',
            content: '**L\'Intel Arc B580 12 Go est la meilleure GPU sous 500 € pour l\'inférence LLM locale, en grande partie parce que c\'est la dernière qui reste réellement dans cette fenêtre.** Lancé à 249 €, il se vend toujours entre 250 et 290 €, alors que toutes les cartes NVIDIA qui occupaient cette liste sont passées au-dessus de 500 € avec la pénurie de mémoire de 2026. Il fait tourner Ollama via le backend SYCL/oneAPI sous Linux et Windows, à ~28–35 tok/s sur Llama 3.1 8B Q4. Le plafond de 12 Go de VRAM vous limite aux modèles 13B en Q4 — il n\'accueillera pas un 14B en Q8. Le support pilotes d\'Intel s\'est nettement amélioré depuis le lancement, mais reste en retrait de CUDA sur l\'étendue de l\'outillage : attendez-vous à ce qu\'Ollama et llama.cpp fonctionnent bien, et à ce que le fine-tuning LoRA soit pénible.',
            affiliateLinks: [
              { label: 'Intel Arc B580 12 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: 'RTX 3060 12 Go d\'occasion — Meilleure option CUDA (270–300 €)',
            content: 'La NVIDIA GeForce RTX 3060 12 Go est la voie la moins chère vers la chaîne d\'outils CUDA complète, mais achetez-la **d\'occasion**. Sa relance en boutique à 334 € n\'a pas tenu : les cartes neuves ont grimpé d\'environ 45 % à 470–600 €, ce qui place la carte neuve au plafond de 500 € dont parle cette page, voire au-dessus. Le marché de l\'occasion a beaucoup moins bougé, à 270–300 €. Ses 12 Go GDDR6 font tourner les modèles 7B–13B en Q4/Q8 confortablement ; elle ne peut pas accueillir un 14B en Q8, mais un 14B en Q4 (~8,5 Go) passe. Benchmark : ~32–40 tok/s sur Llama 3.1 8B Q4 avec Ollama. La chaîne CUDA complète signifie qu\'Ollama, LM Studio, vLLM et le fine-tuning LoRA fonctionnent d\'emblée sous Windows et Linux — la seule chose que l\'Arc B580 ne peut pas égaler.',
            affiliateLinks: [
              { label: 'RTX 3060 12 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16 Go — La meilleure carte, si vous la trouvez au tarif conseillé (399 € conseillé, ~560 € en stock)',
            content: 'La RTX 4060 Ti 16 Go reste le meilleur *matériel* de cette liste et fut la gagnante de cette page jusqu\'à la pénurie de mémoire de 2026. Ses 16 Go GDDR6 font tourner Qwen3 14B et Mistral 12B en Q4 entièrement en GPU — et en Q8 sans swap — à 45–60 tok/s sur 7B Q4 et 18–25 tok/s sur 14B Q8 avec Ollama, pour un TDP de 165 W que n\'importe quelle alimentation 650 W encaisse. Le problème est d\'en acheter une. Les annonces au tarif conseillé de 399 € sont en rupture chez les grands revendeurs, et la carte disponible la moins chère vérifiable tourne autour de 560 €, soit environ 41 % au-dessus du tarif. Si vous en trouvez une au tarif conseillé ou proche, c\'est de loin le meilleur achat de cette page ; à 560 €, elle sort du budget pour lequel cette page est écrite.',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16 Go sur Amazon.fr', url: 'https://www.amazon.fr/s?k=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: 'Comparatif de performances — Prix actuels + résultats de tests',
        content: 'Benchmarks mesurés avec Ollama 0.30.x, serveur llama.cpp, modèles issus de HuggingFace. Système de test : Ryzen 9 7950X, 64 Go DDR5, SSD NVMe. Les vitesses n\'ont pas changé par rapport aux tests précédents : le matériel n\'a pas bougé, les prix si. Exclues pour dépassement des 500 € : RTX 3090 occasion (850–1 050 €), RTX 4070 12 Go (560–705 €), RX 7800 XT 16 Go (~682 €) et RTX 3060 12 Go neuve (470–600 €).',
        columns: ['GPU', 'VRAM', 'Prix', 'Llama 3.1 8B Q4 tok/s', 'Qwen3 14B Q8 tok/s', 'Modèle max (Q4)'],
        rows: [
          { GPU: 'Intel Arc B580 12 Go ★', VRAM: '12 Go', 'Prix': '250–290 €', 'Llama 3.1 8B Q4 tok/s': '31 tok/s', 'Qwen3 14B Q8 tok/s': 'Limité par la VRAM', 'Modèle max (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12 Go (occasion)', VRAM: '12 Go', 'Prix': '270–300 €', 'Llama 3.1 8B Q4 tok/s': '36 tok/s', 'Qwen3 14B Q8 tok/s': 'Limité par la VRAM', 'Modèle max (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16 Go', VRAM: '16 Go', 'Prix': '~560 € en stock', 'Llama 3.1 8B Q4 tok/s': '55 tok/s', 'Qwen3 14B Q8 tok/s': '22 tok/s', 'Modèle max (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-fr.svg',
        imageCaption: 'Comparatif de GPU économiques pour l\'inférence LLM locale sous 500 € : Intel Arc B580 12 Go (250–290 €, 31 tok/s), RTX 3060 12 Go d\'occasion (270–300 €, 36 tok/s) et RTX 4060 Ti 16 Go (~560 € en stock, 55 tok/s, 30B max), mesurées avec Ollama.',
      },
      methodology: {
        title: 'Comment nous avons sélectionné et testé ces GPU',
        content: 'Critères de sélection : disponibles neuves ou d\'occasion sous 500 € ; compatibles avec au moins un runtime d\'inférence majeur (Ollama, LM Studio, llama.cpp) ; VRAM ≥ 12 Go (cartes 8 Go exclues). Plusieurs cartes sont sorties de la liste sur le prix : la RTX 3090 occasion (24 Go) se négocie désormais à 850–1 050 € ; la RTX 4070 12 Go à 560–705 € ; la RX 7800 XT 16 Go à ~682 € ; et la RTX 3060 12 Go neuve, relancée à 334 €, a grimpé d\'environ 45 % à 470–600 €. La RTX 4060 Ti 16 Go est conservée mais signalée — ses annonces au tarif conseillé de 399 € sont en rupture et les cartes disponibles tournent autour de 560 €. La cause leur est commune : une pénurie mondiale de DRAM et de GDDR7 tirée par la demande des centres de données IA a poussé les prix de rue nettement au-dessus des tarifs catalogue sur tout le marché, les RTX 50 de NVIDIA s\'échangeant environ 36–39 % au-dessus du prix conseillé et AMD ayant relevé ses tarifs Radeon d\'environ 10 %. Tous les benchmarks sont en tok/s, moyennés sur 10 exécutions à batch size 1, mesurés avec Ollama 0.30.x sous Ubuntu 22.04 LTS.',
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
            text: 'Pensez au VRAM comme à la RAM des modèles d\'IA. Le modèle doit tenir entièrement dans le VRAM pour une inférence rapide. S\'il déborde vers la RAM système (le « offloading »), la vitesse chute de 80 à 95 %. La quantification Q4 divise la taille par deux par rapport au Q8, pour une légère perte de qualité.',
          },
        ],
        items: [
          'Modèle 7B en Q4 : ~4,5 Go de VRAM — toutes les GPU de cette liste gèrent cela facilement',
          'Modèle 7B en Q8 : ~7,5 Go de VRAM — convient à toutes les GPU ici',
          'Modèle 13B en Q4 : ~8,5 Go de VRAM — convient à toutes les GPU de cette liste',
          'Modèle 14B en Q8 : ~14 Go de VRAM — seulement la RTX 4060 Ti 16 Go et la RTX 3090 (occasion)',
          'Modèle 30B en Q4 : ~18 Go de VRAM — seule la RTX 3090 (24 Go) gère cela confortablement',
          'Modèle 70B en Q4 : ~40 Go — nécessite deux GPU ou un offloading CPU',
        ],
      },
      decisionMatrix: {
        title: 'Quelle GPU devriez-vous acheter ?',
        content: 'Utilisez ce guide de décision selon votre usage principal. Prix vérifiés :',
        items: [
          '**Meilleur choix global sous 500 €** → Intel Arc B580 12 Go (250–290 €). La seule carte neuve de 12 Go fiablement disponible sous 500 €. Modèles 7B–13B en Q4, ~31 tok/s sur Llama 3.1 8B Q4, Ollama via SYCL sous Windows et Linux.',
          '**Carte CUDA la moins chère qui fonctionne** → RTX 3060 12 Go d\'occasion (270–300 €). La chaîne CUDA complète — Ollama, LM Studio, vLLM, fine-tuning LoRA — pour à peu près le même prix que l\'Arc. Achetez-la d\'occasion : la neuve est à 470–600 €.',
          '**Meilleur matériel, si vous le trouvez au tarif** → RTX 4060 Ti 16 Go. Au tarif conseillé de 399 € elle bat tout le reste ici, faisant tourner 14B en Q8 en GPU. Mais les annonces au tarif sont en rupture et les cartes disponibles coûtent ~560 €, hors du budget de cette page.',
          '**Besoin de la capacité 30B ?** → La fenêtre sous 500 € s\'est refermée mi-2026 et ne s\'est pas rouverte. La RTX 3090 occasion (24 Go) se négocie désormais à 850–1 050 €. Prévoyez 850 €+ ou ~999 € pour une RTX 4080 SUPER (16 Go).',
          '**Utilisateur Windows, sans complications** → RTX 4060 Ti 16 Go. NVIDIA CUDA offre le support Windows le plus large pour les LLM, le fine-tuning et les runtimes multimodaux.',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-fr.svg',
        imageCaption: 'Arbre de décision pour choisir une GPU économique sous 500 € pour l\'inférence LLM locale : mène à l\'Intel Arc B580 12 Go (250–290 €) par défaut, à la RTX 3060 12 Go d\'occasion (270–300 €) si CUDA est nécessaire, et à une RTX 3090 occasion (24 Go) à partir de 900 € pour les modèles 30B.',
      },
      softwareCompat: {
        title: 'Compatibilité logicielle par GPU',
        content: 'Les trois GPU font tourner Ollama et llama.cpp. Les différences apparaissent sur les outils avancés :',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'Fine-Tuning CUDA'],
        rows: [
          { GPU: 'Intel Arc B580 12 Go', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ bêta', vLLM: '❌', 'Text Gen WebUI': '⚠️ partiel', 'Fine-Tuning CUDA': '❌' },
          { GPU: 'RTX 3060 12 Go', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
          { GPU: 'RTX 4060 Ti 16 Go', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'Fine-Tuning CUDA': '✅' },
        ],
      },
      powerAndCooling: {
        title: 'Consommation électrique et exigences système',
        content: 'La consommation de la GPU détermine l\'alimentation et le boîtier nécessaires. Faire tourner des LLM maintient la GPU à 80–100 % d\'utilisation en continu — contrairement au jeu vidéo, il n\'y a pas d\'images inactives.',
        items: [
          'Intel Arc B580 12 Go : 190 W — alimentation 650 W+ ; 8 broches standard',
          'RTX 3060 12 Go : 170 W — fonctionne avec une alimentation 550 W+ ; un connecteur 8 broches',
          'RTX 4060 Ti 16 Go : 165 W — fonctionne avec une alimentation 550 W+ ; un connecteur 8 broches',
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
            q: 'Peut-on encore acheter une RTX 3090 occasion pour moins de 500 € ?',
            a: 'Non. Les RTX 3090 d\'occasion se négocient à 850–1 050 € sur eBay.fr. Le prix a d\'abord augmenté quand les passionnés de LLM ont reconnu la valeur des 24 Go de VRAM, puis de nouveau pendant la pénurie de mémoire de 2026. Ce n\'est plus une option sous 500 €, et ça ne l\'est plus depuis un moment. Si vous avez besoin de la capacité 30B (qui exige 24 Go de VRAM), prévoyez 850 €+ pour une RTX 3090 d\'occasion ou ~999 € pour une RTX 4080 SUPER (16 Go).',
          },
          {
            q: 'Les GPU AMD fonctionnent-elles pour l\'IA locale ?',
            a: 'Oui, avec des nuances. Ollama sous Linux avec ROCm fonctionne bien sur des cartes comme la RX 7800 XT. Le support ROCm sous Windows s\'est amélioré mais nécessite encore des étapes manuelles, et le fine-tuning (LoRA) sur matériel AMD n\'est pas supporté par la plupart des outils. Note sur les prix : la RX 7800 XT 16 Go est montée à ~682 € en juillet 2026, elle ne rentre donc plus dans un budget sous 500 € — pour cette gamme de prix, la RTX 4060 Ti 16 Go ou la RTX 3060 12 Go (toutes deux NVIDIA/CUDA) sont les choix recommandés. Pour Windows ou le fine-tuning, restez sur NVIDIA.',
          },
          {
            q: 'Qu\'en est-il des GPU Intel Arc pour l\'IA ?',
            a: 'L\'Intel Arc B580 12 Go est la meilleure option Arc en 2026 et, depuis que la pénurie de mémoire a repositionné le camp NVIDIA, la meilleure carte de cette page tout court. Il fait tourner Ollama sous Windows et Linux via le backend SYCL, même si les performances restent 30–40 % en dessous de NVIDIA en tok/s bruts. L\'argument prix est désormais décisif et non plus seulement bon : 12 Go de VRAM à 250–290 € quand les cartes NVIDIA comparables sont à 470–600 €. La limite principale reste le logiciel — vLLM, les outils de fine-tuning et les runtimes multimodaux ne prennent pas encore bien en charge Arc — donc si vous avez besoin du fine-tuning LoRA, achetez plutôt une RTX 3060 12 Go d\'occasion.',
          },
          {
            q: 'Puis-je faire tourner un modèle 70B sur une seule GPU sous 500 € ?',
            a: 'Pas à pleine vitesse. Même la RTX 3090 (24 Go) ne peut pas contenir 70B Q4 (~40 Go) entièrement en VRAM. Vous pouvez utiliser l\'offloading CPU avec llama.cpp pour répartir le modèle entre la VRAM et la RAM système, mais la vitesse chute à 2–5 tok/s — trop lent pour un usage interactif. Pour faire tourner des modèles 70B à une vitesse utilisable, il faut deux GPU (2× RTX 3090, soit 48 Go au total) ou de l\'inférence cloud.',
          },
          {
            q: 'Les nouvelles GPU (RTX 5060 Ti) rendront-elles ces cartes obsolètes ?',
            a: 'La RTX 5060 Ti 16 Go est sortie, et elle n\'a pas passé sous la RTX 4060 Ti : c\'est l\'inverse qui s\'est produit. Lancée à un tarif conseillé de 429 $, elle se vend maintenant 570–600 €, environ 40 % au-dessus du tarif, parce que la pénurie de mémoire qui a repositionné toute cette liste l\'a frappée le plus fort en tant que carte de génération actuelle. C\'est une GPU réellement meilleure que tout ce qui figure ici, avec 16 Go de VRAM et une inférence plus rapide, mais ce n\'est pas une carte sous 500 €, et attendre qu\'elle le devienne n\'est pas un plan tenable. Achetez selon ce qui est disponible : l\'Intel Arc B580 12 Go à 250–290 €, ou une RTX 3060 12 Go d\'occasion à 270–300 € si vous avez besoin de CUDA.',
          },
          {
            q: 'Combien coûte une RTX 4060 Ti 16 Go d\'occasion ?',
            a: 'Les RTX 4060 Ti 16 Go d\'occasion ont suivi la hausse du neuf : avec des cartes neuves disponibles autour de 560 €, les annonces d\'occasion tournent désormais entre 420 et 480 € sur eBay.fr, selon l\'état et la garantie restante. C\'est l\'une des rares cartes où l\'occasion ne représente pas une grosse économie, car l\'offre de cartes neuves au tarif conseillé s\'est tarie.',
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
        { '@type': 'Question', name: 'Peut-on encore acheter une RTX 3090 occasion pour moins de 500 € ?', acceptedAnswer: { '@type': 'Answer', text: 'Non — les RTX 3090 d\'occasion se négocient à 850–1 050 € sur eBay.fr, bien au-dessus du plafond de 500 €. Pour la capacité 30B, prévoyez 850 €+ ou ~999 € pour une RTX 4080 SUPER (16 Go).' } },
        { '@type': 'Question', name: 'Qu\'en est-il des GPU Intel Arc pour l\'IA ?', acceptedAnswer: { '@type': 'Answer', text: 'L\'Intel Arc B580 12 Go est la meilleure option Arc en 2026 et désormais la meilleure carte de cette page : 12 Go de VRAM à 250–290 €, environ 30–40 % plus lent que NVIDIA en tok/s bruts, mais seule carte neuve de 12 Go fiablement sous 500 €. Pour le fine-tuning LoRA, préférez une RTX 3060 12 Go d\'occasion.' } },
        { '@type': 'Question', name: 'Puis-je faire tourner un modèle 70B sur une seule GPU sous 500 € ?', acceptedAnswer: { '@type': 'Answer', text: 'Pas à pleine vitesse. Même la RTX 3090 (24 Go) ne peut pas contenir 70B Q4 (~40 Go) entièrement en VRAM. L\'offloading CPU fait chuter la vitesse à 2–5 tok/s. Deux GPU ou de l\'inférence cloud sont nécessaires.' } },
        { '@type': 'Question', name: 'Les nouvelles GPU (RTX 5060 Ti) rendront-elles ces cartes obsolètes ?', acceptedAnswer: { '@type': 'Answer', text: 'La RTX 5060 Ti 16 Go est sortie et n\'a pas passé sous la RTX 4060 Ti : lancée à 429 $ conseillés, elle se vend 570–600 €, environ 40 % au-dessus du tarif. C\'est la meilleure GPU, mais pas une carte sous 500 €.' } },
        { '@type': 'Question', name: 'Combien coûte une RTX 4060 Ti 16 Go d\'occasion ?', acceptedAnswer: { '@type': 'Answer', text: 'Avec des cartes neuves disponibles autour de 560 €, les annonces d\'occasion tournent entre 420 et 480 € sur eBay.fr, selon l\'état. Vérifiez qu\'il s\'agit bien de la variante 16 Go, une version 8 Go existant aussi.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Meilleures GPU pour l\'inférence LLM sous 500 € (2026)',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12 Go', description: 'Meilleur global — 12 Go VRAM, seule carte neuve de 12 Go fiablement sous 500 €, 250–290 €' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12 Go (occasion)', description: 'Meilleure option CUDA — 12 Go VRAM, chaîne d\'outils CUDA complète, 270–300 € d\'occasion' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16 Go', description: 'Meilleur matériel, mais en rupture au tarif conseillé de 399 € et ~560 € quand disponible' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: 'Meilleure GPU pour l\'inférence LLM à moins de 500 € (2026)', datePublished: '2026-05-26', dateModified: '2026-08-28', url: 'https://www.promptquorum.com/fr/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'fr' },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: '500ドル以下のLLM推論向けGPUおすすめランキング（2026年）',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ja.webp',
    seoTitle: '$500以下のLLM推論GPU: Intel Arc B580が最良',
    metaDescription: '$500以下のローカルLLM推論に最良のGPUはIntel Arc B580 12GB（約¥58,000〜67,000）。2026年のメモリ不足でRTX 4060 Ti 16GBと新品RTX 3060は$500超に。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500以下のローカルLLM推論に最良のGPUは、いまやIntel Arc B580 12GB（約¥58,000〜67,000）です。12GB VRAMで7B–13BモデルをQ4実行し、Llama 3.1 8B Q4で約31トークン/秒。$500相当以下で安定して入手できる唯一の新品12GBカードです。CUDAツールチェーンが必要なら、中古のRTX 3060 12GB（約¥42,000〜47,000）が次点になります。前回の1位だったRTX 4060 Ti 16GBは枠から外れました。希望小売価格$399の在庫はなく、実際に買えるカードは約$562（約¥117,000）です。RTX 3060 12GBも再発売時から約45%上昇し、新品で$474〜599（約¥74,000〜94,000）になりました。すべてを動かした原因は同じです。AIデータセンター需要が牽引する世界的なDRAM・GDDR7不足です。30Bモデルが必要なら$850以上を見込んでください。**',
    quickAnswerTop: {
      question: '$500以下でローカルAIモデルを動かす最高のGPUは何ですか？',
      answer: 'Intel Arc B580 12GB（約¥58,000〜67,000）が$500以下のローカルLLM推論に最良です。12GB VRAMで7B–13BモデルをQ4実行し、SYCL/oneAPIバックエンドによりWindows・LinuxでOllamaが動作します。$500相当以下で安定して入手できる唯一の新品12GBカードです。CUDAツールチェーンが必要な場合は、中古のRTX 3060 12GB（約¥42,000〜47,000）が次点です。2026年のメモリ不足により、このリストの他は枠外になりました。RTX 4060 Ti 16GBは在庫があるとき約$562（約¥117,000）、新品RTX 3060 12GBは$474〜599、中古RTX 3090は$850〜1,050、RTX 4070 12GBは$560〜705、RX 7800 XT 16GBは約$832です。',
      bullets: [
        '**優勝:** Intel Arc B580 12GB（約¥58,000〜67,000）— 12GB VRAM、Llama 3.1 8B Q4で約31トークン/秒、$500相当以下で安定入手できる唯一の新品12GBカード',
        '**次点:** 中古RTX 3060 12GB（約¥42,000〜47,000）— フルCUDAツールチェーンへの最安ルート',
        '⚠️ RTX 4060 Ti 16GB：希望小売価格$399では在庫なし、入手可能な個体は約$562（約¥117,000）— $500相当以下の安定した選択肢ではない',
        '⚠️ 新品RTX 3060 12GB：$474〜599（約¥74,000〜94,000）、再発売時から45%上昇 — 中古で買うべき',
        '⚠️ 中古RTX 3090：現在 約¥142,000〜162,000 — $500相当以下の選択肢ではない',
        '⚠️ RTX 4070 12GB：約¥90,000、RX 7800 XT 16GB：約¥120,000 — いずれも$500相当超',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GBが多くのユーザーに最適：12GB VRAM、約¥58,000〜67,000、Llama 3.1 8B Q4で約31トークン/秒 — $500相当以下で安定入手できる唯一の新品12GBカード**',
          '中古RTX 3060 12GB（約¥42,000〜47,000）が次点 — フルCUDAツールチェーンへの最安ルート',
          '⚠️ 価格警告：前回1位のRTX 4060 Ti 16GBは希望小売価格$399で在庫がなく、入手可能な個体は約$562 — $500相当以下リストから除外',
          '⚠️ 価格警告：新品RTX 3060 12GBは$474〜599（約¥74,000〜94,000）、再発売時から45%上昇 — このカードは中古市場が現実的',
          '⚠️ 価格警告：中古RTX 3090は現在 約¥142,000〜162,000、RTX 4070 12GBは約¥90,000 — いずれも$500相当以下リストから除外',
          '⚠️ 価格警告：RX 7800 XT 16GBは現在 約¥120,000 — $500相当以下リストから除外',
          'なぜ全部動いたのか：AIデータセンター需要が牽引する世界的なDRAM・GDDR7不足により、グラフィックスカードの実売価格が市場全体で定価を大きく上回りました。ハードウェアは何も変わっていません。変わったのは価格だけです。30Bモデルが必要なら中古RTX 3090（24GB）に¥150,000以上を見込んでください。',
          'リスト上の3機種はいずれもOllama・LM Studio・llama.cppをそのまま動作',
        ],
      },
      rankedList: {
        title: '500ドル以下LLM推論GPUランキング',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Intel Arc B580 12GBが500ドル以下のローカルLLM推論で最良のGPUです。2026年のメモリ不足の後、$500相当以下で安定して入手できる唯一の新品12GBカードだからです。',
          },
          {
            type: 'plain-terms',
            text: 'GPU VRAMはどのAIモデルをローカルで実行できるかを決定します。16GBで14Bモデル対応。24GB（中古RTX 3090）で30Bモデル対応。12GB未満だと7Bモデルのみです。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — 総合1位 （約¥58,000〜67,000）',
            content: '**Intel Arc B580 12GBが$500以下のローカルLLM推論で最良のGPUです。理由の大部分は、この枠に確実に残った最後の1枚だからです。** 米国では$249で発売され、いまも$250〜290で販売されています。一方、かつてこのリストを占めていたNVIDIAカードは、2026年のメモリ不足ですべて$500を超えました。SYCL/oneAPIバックエンドによりLinux・WindowsでOllamaが動作し、Llama 3.1 8B Q4で約28〜35トークン/秒です。12GB VRAMの上限により13B Q4までに制限され、14B Q8は収まりません。Intelのドライバーサポートは発売時から大きく改善しましたが、ツールの幅ではまだCUDAに及びません。Ollamaとllama.cppは問題なく動作し、LoRAファインチューニングは扱いにくいと考えてください。',
            affiliateLinks: [
              { label: 'Intel Arc B580 12GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: '中古RTX 3060 12GB — CUDA最良の選択肢 （約¥42,000〜47,000）',
            content: 'NVIDIA GeForce RTX 3060 12GBはフルCUDAツールチェーンへの最安ルートですが、**中古**で買ってください。¥52,980での小売復帰は続きませんでした。新品は約45%上昇して$474〜599（約¥74,000〜94,000）となり、このページが扱う$500の上限に並ぶか超えています。中古市場の動きははるかに小さく、約¥42,000〜47,000です。12GB GDDR6は7B–13BモデルをQ4/Q8で快適に動かします。14B Q8は収まりませんが、14B Q4（約8.5GB）なら入ります。ベンチマークはOllamaでLlama 3.1 8B Q4が約32〜40トークン/秒。フルCUDAツールチェーンにより、Ollama、LM Studio、vLLM、LoRAファインチューニングがWindows・Linuxでそのまま動作します——Arc B580に真似できない唯一の点です。',
            affiliateLinks: [
              { label: 'RTX 3060 12GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — 最良のカード、希望小売価格で見つかれば （$399希望小売、在庫時 約$562／約¥117,000）',
            content: 'RTX 4060 Ti 16GBはこのリストで最良の*ハードウェア*であり続けており、2026年のメモリ不足まではこのページの1位でした。16GB GDDR6はQwen3 14BとMistral 12BをQ4で完全にGPU内実行し、Q8でもスワップなしで動作します。Ollamaで7B Q4が45〜60トークン/秒、14B Q8が18〜25トークン/秒、TDPは165Wで650W電源なら余裕です。問題は買えないことです。希望小売価格$399の出品は大手小売で在庫切れで、確認できる最安の在庫品は約$562、定価より約41%高い水準です。希望小売価格かそれに近い値で見つかればこのページで断然best buyですが、$562ではこのページが想定する予算から外れます。',
            affiliateLinks: [
              { label: 'RTX 4060 Ti 16GB をAmazonで確認', url: 'https://www.amazon.co.jp/s?k=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: '性能比較 — 現在価格 + テスト結果',
        content: 'ベンチマークはOllama 0.30.x、llama.cppサーバー、HuggingFaceのモデルで測定。テストシステム：Ryzen 9 7950X、64GB DDR5、NVMe SSD。速度は以前のテストから変わっていません。動いたのはハードウェアではなく価格です。$500相当超のため除外：中古RTX 3090（$850〜1,050）、RTX 4070 12GB（$560〜705）、RX 7800 XT 16GB（約$832）、新品RTX 3060 12GB（$474〜599）。',
        columns: ['GPU', 'VRAM', '価格', 'Llama 3.1 8B Q4 トークン/秒', 'Qwen3 14B Q8 トークン/秒', '最大モデル（Q4）'],
        rows: [
          { GPU: 'Intel Arc B580 12GB ★', VRAM: '12GB', '価格': '約¥58,000〜67,000', 'Llama 3.1 8B Q4 トークン/秒': '31トークン/秒', 'Qwen3 14B Q8 トークン/秒': 'VRAM制限あり', '最大モデル (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12GB（中古）', VRAM: '12GB', '価格': '約¥42,000〜47,000', 'Llama 3.1 8B Q4 トークン/秒': '36トークン/秒', 'Qwen3 14B Q8 トークン/秒': 'VRAM制限あり', '最大モデル (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', VRAM: '16GB', '価格': '在庫時 約¥117,000', 'Llama 3.1 8B Q4 トークン/秒': '55トークン/秒', 'Qwen3 14B Q8 トークン/秒': '22トークン/秒', '最大モデル (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-ja.svg',
        imageCaption: '500ドル以下のローカルLLM推論向けバジェットGPU比較：Intel Arc B580 12GB（約¥58,000〜67,000、31トークン/秒）、中古RTX 3060 12GB（約¥42,000〜47,000、36トークン/秒）、RTX 4060 Ti 16GB（在庫時 約¥117,000、55トークン/秒、最大30B）をOllamaで測定。',
      },
      methodology: {
        title: 'これらのGPUを選定・テストした方法',
        content: '選定基準：新品または中古で$500相当以下で購入可能なこと；主要な推論ランタイム（Ollama、LM Studio、llama.cpp）の少なくとも1つに対応していること；VRAM 12GB以上（8GBカードは除外）。価格を理由に複数のカードがリストから外れました。中古RTX 3090（24GB）は$850〜1,050、RTX 4070 12GBは$560〜705、RX 7800 XT 16GBは約$832、そして¥52,980で再発売された新品RTX 3060 12GBは約45%上昇して$474〜599です。RTX 4060 Ti 16GBは残していますが注意付きです——希望小売価格$399の出品は在庫切れで、入手可能な個体は約$562です。原因はすべて共通で、AIデータセンター需要が牽引する世界的なDRAM・GDDR7不足により、実売価格が市場全体で定価を大きく上回りました。NVIDIAのRTX 50シリーズは希望小売価格より約36〜39%高く取引され、AMDもRadeonを約10%引き上げています。ベンチマークはすべてバッチサイズ1で10回実行の平均トークン/秒、Ubuntu 22.04 LTS上のOllama 0.30.xで測定。',
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
            text: 'VRAMはAIモデル用のRAMのようなものと考えてください。高速な推論には、モデル全体がVRAMに収まる必要があります。CPU RAMに溢れる場合（「オフロード」と呼ばれます）、速度が80〜95%低下します。Q4量子化はQ8と比べてサイズを半分にし、品質への影響はわずかです。',
          },
        ],
        items: [
          '7BモデルのQ4：約4.5GB VRAM——このリストのどのGPUでも簡単に扱えます',
          '7BモデルのQ8：約7.5GB VRAM——ここに挙げたすべてのGPUに収まります',
          '13BモデルのQ4：約8.5GB VRAM——このリストのすべてのGPUに収まります',
          '14BモデルのQ8：約14GB VRAM——RTX 4060 Ti 16GBと中古RTX 3090のみ対応。ただしどちらも$500相当以下ではありません',
          '30BモデルのQ4：約18GB VRAM——RTX 3090（24GB）のみ余裕を持って対応',
          '70BモデルのQ4：約40GB——GPU2枚またはCPUオフロードが必要',
        ],
      },
      decisionMatrix: {
        title: 'どのGPUを買うべきですか？',
        content: '主な用途に応じてこの選択ガイドを活用してください：',
        items: [
          '**$500以下の総合ベスト** → Intel Arc B580 12GB（約¥58,000〜67,000）。$500相当以下で安定して入手できる唯一の新品12GBカード。7B–13BモデルをQ4実行、Llama 3.1 8B Q4で約31トークン/秒、SYCL経由でWindows・LinuxのOllamaに対応。',
          '**動作する最安のCUDAカード** → 中古RTX 3060 12GB（約¥42,000〜47,000）。Ollama、LM Studio、vLLM、LoRAファインチューニングを含むフルCUDAツールチェーンが使えます。中古で買ってください。新品は$474〜599です。',
          '**希望小売価格で見つかるなら最良のハードウェア** → RTX 4060 Ti 16GB。希望小売価格$399ならここにある他のどれよりも優れ、14B Q8をGPU内実行できます。ただし希望小売価格の出品は在庫切れで、入手可能な個体は約$562とこのページの予算外です。',
          '**30Bモデル対応が必要ですか？** → $500相当以下の枠は2026年半ばに閉じ、再び開いていません。中古RTX 3090（24GB）は現在約¥142,000〜162,000です。',
          '**Windowsユーザーで手間をかけたくない場合** → 中古RTX 3060 12GB。NVIDIA CUDAはLLM・ファインチューニング・マルチモーダルランタイムで最も幅広いWindowsツールチェーンサポートを提供し、中古3060はその最安の入口です。',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-ja.svg',
        imageCaption: '500ドル以下のローカルLLM推論向けバジェットGPU選定の決定木：標準の選択肢としてIntel Arc B580 12GB（約¥58,000〜67,000）、CUDAが必要なら中古RTX 3060 12GB（約¥42,000〜47,000）、30Bモデルには中古RTX 3090（24GB、¥150,000以上）へ導きます。',
      },
      softwareCompat: {
        title: 'GPU別ソフトウェア互換性',
        content: '3機種すべてOllamaとllama.cppで動作します。差が出るのは高度なツールです：',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDAファインチューニング'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ ベータ', vLLM: '❌', 'Text Gen WebUI': '⚠️ 一部対応', 'CUDAファインチューニング': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDAファインチューニング': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDAファインチューニング': '✅' },
        ],
      },
      powerAndCooling: {
        title: '消費電力とシステム要件',
        content: 'GPUの消費電力によって必要な電源とケースが決まります。LLM実行中はGPUが80〜100%の使用率を継続します——ゲームと異なりアイドルフレームがありません。',
        items: [
          'RTX 4060 Ti 16GB：165W——550W以上の電源で動作；8ピンコネクタ1本',
          'RTX 3060 12GB：170W——550W以上の電源で動作；8ピンコネクタ1本',
          'Intel Arc B580 12GB：190W——650W以上の電源；標準8ピン',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
            { q: '8GB VRAMはローカルLLMに十分ですか？', a: '8GB VRAMはQ4量子化で7Bモデルに限定されます。13Bモデルは完全にVRAMに収まらず、14BモデルはCPU RAMへのオフロードが発生し速度が80〜95%低下します。2026年の実用的なローカルLLM利用には12GBが最低限、16GBが推奨です。' },
            { q: '中古RTX 3090は今でも$500以下で買えますか？', a: 'いいえ。中古RTX 3090は$850〜1,050（約¥142,000〜162,000）で取引されています。まずLLM愛好家が24GB VRAMの価値を認識したことで上がり、次いで2026年のメモリ不足で再び上がりました。もはや$500相当以下の選択肢ではなく、その状態がしばらく続いています。30Bモデル（24GB VRAMが必要）に対応したいなら、中古RTX 3090に$850以上、または14B Q8をより高速に動かすならRTX 4080 SUPER（16GB、新品約$850）を検討してください。' },
            { q: 'AMD GPUはローカルAIに使えますか？', a: 'はい、条件付きで。Linux上のOllama（ROCm）はRX 7800 XTでうまく動作します。WindowsのROCmサポートは改善中ですが手動設定が必要です。LoRAファインチューニングはほとんどのツールでAMDをサポートしていません。価格に関する注意：RX 7800 XT 16GBは2026年7月時点で約¥120,000に上昇したため、もはや$500相当以下の予算には収まりません——その価格帯では、RTX 4060 Ti 16GBまたはRTX 3060 12GB（いずれもNVIDIA/CUDA）が推奨の選択肢です。Windowsやファインチューニングを行うならNVIDIAを選んでください。' },
            { q: 'AI用のIntel Arc GPUはどうですか？', a: 'Intel Arc B580 12GBは2026年のベストなArc選択肢であり、メモリ不足がNVIDIA勢を再価格付けした結果、このページ全体でも最良のカードになりました。SYCLバックエンドでWindowsとLinuxの両方でOllamaを実行でき、性能は生のトークン/秒でNVIDIAより30〜40%低くなります。コストパフォーマンスは「強い」を通り越して決定的です。同等のNVIDIAカードが$474〜599のところ、12GB VRAMが$250〜290です。主な制約はいまもソフトウェアで、vLLM、ファインチューニング系ツール、マルチモーダルランタイムはArcを十分にサポートしていません。LoRAファインチューニングが必要なら中古のRTX 3060 12GBを選んでください。' },
            { q: '$500以下のGPU1枚で70Bモデルを実行できますか？', a: 'フル速度では不可能です。RTX 3090（24GB）でさえ、70B Q4（約40GB）を完全にVRAMに収めることはできません。llama.cppのCPUオフロードを使えばGPU VRAMとシステムRAMにモデルを分割できますが、速度は2〜5トークン/秒まで低下し、対話的な用途には遅すぎます。70Bモデルを実用的な速度で実行するには、GPU2枚（RTX 3090×2枚で計48GB）またはクラウド推論が必要です。' },
            { q: '新しいGPU（RTX 5060 Ti）はこれらを時代遅れにしますか？', a: 'RTX 5060 Ti 16GBはすでに発売され、RTX 4060 Tiを下回るどころか逆になりました。希望小売価格$429で登場し、現在は$570〜600、定価より約40%高い水準で売られています。このリスト全体を再価格付けしたのと同じメモリ不足が、現行世代カードである同機を最も強く直撃したためです。16GB VRAMとより高速な推論を備え、ここにあるどれよりも実際に優れたGPUですが、$500以下のカードではなく、そうなるのを待つのは現実的な計画ではありません。いま買えるもので判断してください。Intel Arc B580 12GBが$250〜290、CUDAが必要なら中古RTX 3060 12GBが$270〜300です。' },
            { q: '中古のRTX 4060 Ti 16GBはいくらですか？', a: '中古のRTX 4060 Ti 16GBは新品の値上がりに追随しています。在庫のある新品が約$562のため、中古の出品はeBayで概ね$420〜480、状態や保証残存期間により変動します。希望小売価格の新品供給が枯れたため、中古で買っても大きな節約にならない数少ないカードの1つです。' },
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
              'text': '8GB VRAMはQ4量子化で7Bモデルに限定されます。13Bモデルは完全にVRAMに収まらず、14BモデルはCPU RAMへのオフロードが発生し速度が80〜95%低下します。2026年の実用的なローカルLLM利用には12GBが最低限、16GBが推奨です。',
            },
          },
          {
            '@type': 'Question',
            'name': '中古RTX 3090は今でも$500以下で買えますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'いいえ。中古RTX 3090は$850〜1,050（約¥142,000〜162,000）で取引されており、$500相当の枠を大きく超えています。30Bモデル対応には$850以上、またはRTX 4080 SUPER（16GB、約$850）を検討してください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'AMD GPUはローカルAIに使えますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'はい、条件付きで。Linux上のOllama（ROCm）はRX 7800 XTでうまく動作します。WindowsのROCmサポートは改善中ですが手動設定が必要です。LoRAファインチューニングはほとんどのツールでAMDをサポートしていません。価格に関する注意：RX 7800 XT 16GBは2026年7月時点で約¥120,000に上昇したため、もはや$500相当以下の予算には収まりません——その価格帯では、RTX 4060 Ti 16GBまたはRTX 3060 12GB（いずれもNVIDIA/CUDA）が推奨の選択肢です。Windowsやファインチューニングを行うならNVIDIAを選んでください。',
            },
          },
          {
            '@type': 'Question',
            'name': 'AI用のIntel Arc GPUはどうですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Intel Arc B580 12GBは2026年のベストなArc選択肢であり、いまやこのページ全体でも最良のカードです。12GB VRAMが$250〜290、生のトークン/秒ではNVIDIAより30〜40%低いものの、$500相当以下で安定入手できる唯一の新品12GBカードです。LoRAファインチューニングが必要なら中古のRTX 3060 12GBを選んでください。',
            },
          },
          {
            '@type': 'Question',
            'name': '$500以下のGPU1枚で70Bモデルを実行できますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'フル速度では不可能です。RTX 3090（24GB）でさえ、70B Q4（約40GB）を完全にVRAMに収めることはできません。llama.cppのCPUオフロードを使えばGPU VRAMとシステムRAMにモデルを分割できますが、速度は2〜5トークン/秒まで低下し、対話的な用途には遅すぎます。70Bモデルを実用的な速度で実行するには、GPU2枚（RTX 3090×2枚で計48GB）またはクラウド推論が必要です。',
            },
          },
          {
            '@type': 'Question',
            'name': '新しいGPU（RTX 5060 Ti）はこれらを時代遅れにしますか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'RTX 5060 Ti 16GBはすでに発売され、RTX 4060 Tiを下回りませんでした。希望小売価格$429で登場し、現在は$570〜600と定価より約40%高い水準です。より優れたGPUですが、$500以下のカードではありません。',
            },
          },
          {
            '@type': 'Question',
            'name': '中古のRTX 4060 Ti 16GBはいくらですか？',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': '在庫のある新品が約$562のため、中古の出品はeBayで概ね$420〜480、状態により変動します。8GB版も存在するため、16GB版であることを必ず確認してください。',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: '総合1位 — 12GB VRAM、$500相当以下で安定入手できる唯一の新品12GBカード、約¥58,000〜67,000' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB（中古）', description: 'CUDA最良の選択肢 — 12GB VRAM、フルCUDAツールチェーン、中古 約¥42,000〜47,000' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: '最良のハードウェアだが希望小売価格$399では在庫がなく、入手可能な個体は約$562' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '500ドル以下のLLM推論向けGPUおすすめランキング（2026年）', datePublished: '2026-05-26', dateModified: '2026-08-28', url: 'https://www.promptquorum.com/ja/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'ja' },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: 'Hardware & Performance',
    title: '2026年500美元以下LLM推理最佳GPU排行',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-zh.webp',
    seoTitle: '500美元以下LLM推理最佳GPU: Intel Arc B580',
    metaDescription: '500美元以下本地LLM推理的最佳GPU现在是Intel Arc B580 12GB（$250–290）——2026年存储器短缺已将RTX 4060 Ti 16GB和全新RTX 3060推高至500美元以上。',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500以下本地LLM推理的最佳GPU现在是Intel Arc B580 12GB（$250–290）：12GB显存可运行7B–13B模型的Q4，Llama 3.1 8B Q4约31 tok/s，而且它是目前唯一仍能稳定以500美元以下买到的全新12GB显卡。若需要CUDA工具链，二手RTX 3060 12GB（$270–300）是次选。此前的冠军RTX 4060 Ti 16GB已经出局：$399官方定价的货源缺货，实际能买到的卡约$562。RTX 3060 12GB自重新上市以来上涨约45%，全新价已达$474–599。推动这一切的是同一个原因：AI数据中心需求引发的全球DRAM与GDDR7短缺。若需要30B模型能力，请预算$850以上。**',
    quickAnswerTop: {
      question: '$500以下跑本地大模型最好的GPU是什么？',
      answer: '**Intel Arc B580 12GB（$250–290）是$500以下本地LLM推理的最佳GPU。** 12GB显存可运行7B–13B模型的Q4，通过SYCL/oneAPI后端在Windows和Linux上运行Ollama，并且是目前唯一仍能稳定以500美元以下买到的全新12GB显卡。若需要CUDA工具链，二手RTX 3060 12GB（$270–300）是次选。2026年的存储器短缺已把榜单其余部分推出这个价位：RTX 4060 Ti 16GB有货时约$562，全新RTX 3060 12GB为$474–599，二手RTX 3090为$850–1,050，RTX 4070 12GB为$560–705，RX 7800 XT 16GB约$832。',
      bullets: [
        '**优胜:** Intel Arc B580 12GB（$250–290）——12GB显存、Llama 3.1 8B Q4约31 tok/s，唯一稳定低于$500的全新12GB显卡',
        '**次选:** 二手RTX 3060 12GB（$270–300）——获得完整CUDA工具链的最便宜途径',
        '⚠️ RTX 4060 Ti 16GB：$399官方定价缺货，有货时约$562 — 不再是稳定的$500以下选项',
        '⚠️ 全新RTX 3060 12GB：$474–599，自重新上市以来上涨45% — 请改买二手',
        '⚠️ 二手RTX 3090：现价$850–1,050 — 不再是$500以下选项',
        '⚠️ RTX 4070 12GB：现价$560–705，RX 7800 XT 16GB：约$832 — 均超过$500',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB适合大多数用户：12GB显存、$250–290、Llama 3.1 8B Q4约31 tok/s — 唯一稳定低于$500的全新12GB显卡**',
          '二手RTX 3060 12GB（$270–300）是次选 — 获得完整CUDA工具链的最便宜途径',
          '⚠️ 价格警报：此前的冠军RTX 4060 Ti 16GB在$399官方定价下缺货，有货时约$562 — 已从$500以下列表移除',
          '⚠️ 价格警报：全新RTX 3060 12GB现价$474–599，自重新上市以来上涨45% — 这张卡走二手市场才合理',
          '⚠️ 价格警报：二手RTX 3090现价$850–1,050，RTX 4070 12GB现价$560–705 — 均已从$500以下列表移除',
          '⚠️ 价格警报：RX 7800 XT 16GB现价约$832 — 已从$500以下列表移除',
          '为什么全都变了：AI数据中心需求引发的全球DRAM与GDDR7短缺，已将显卡成交价在整个市场推高至远超官方定价的水平。硬件本身没有变化，变的只是价格。需要30B模型能力？请为二手RTX 3090（24GB）预算$850以上。',
          '列表中所有3款GPU均可直接运行Ollama、LM Studio和llama.cpp',
        ],
      },
      rankedList: {
        title: '500美元以下LLM推理GPU排名',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Intel Arc B580 12GB是500美元以下本地LLM推理的最佳GPU，因为在2026年存储器短缺之后，它是唯一仍能稳定以500美元以下买到的全新12GB显卡。',
          },
          {
            type: 'plain-terms',
            text: 'GPU显存决定了你能在本地运行哪些AI模型。16GB显存支持14B模型。24GB（二手RTX 3090）支持30B模型。12GB以下只能运行7B或更小的模型。',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — 综合最佳 （$250–290）',
            content: '**Intel Arc B580 12GB是$500以下本地LLM推理的最佳GPU，很大程度上是因为它是这一价位里唯一稳定留下来的一张卡。** 它发售价$249，如今仍以$250–290在售；而曾经占据这份榜单的每一张NVIDIA显卡，都已被2026年的存储器短缺推到$500以上。它通过SYCL/oneAPI后端在Linux和Windows上运行Ollama，Llama 3.1 8B Q4约28–35 tok/s。12GB显存上限意味着只能跑13B模型的Q4，装不下14B的Q8。Intel的驱动支持自发售以来已大幅改善，但在工具生态的广度上仍落后于CUDA：Ollama和llama.cpp可以正常使用，LoRA微调则相当别扭。',
            affiliateLinks: [
              { label: '在京东查看Intel Arc B580 12GB', url: 'https://search.jd.com/Search?keyword=Intel+Arc+B580' },
              { label: '在淘宝查看Intel Arc B580 12GB', url: 'https://s.taobao.com/search?q=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: '二手RTX 3060 12GB — 最佳CUDA选择 （$270–300）',
            content: 'NVIDIA GeForce RTX 3060 12GB是获得完整CUDA工具链的最便宜途径，但请买**二手**。它以$339重返零售的价格没有守住：全新卡已上涨约45%至$474–599，这让全新卡触及甚至越过了本文所讨论的$500上限。二手市场的波动小得多，为$270–300。12GB GDDR6可轻松运行7B–13B模型的Q4/Q8；它无法容纳14B模型的Q8，但14B的Q4（约8.5GB）可以装下。基准测试：Ollama下Llama 3.1 8B Q4约32–40 tok/s。完整的CUDA工具链意味着Ollama、LM Studio、vLLM和LoRA微调在Windows和Linux上开箱即用——这正是Arc B580无法比拟的一点。',
            affiliateLinks: [
              { label: '在京东查看RTX 3060 12GB', url: 'https://search.jd.com/Search?keyword=RTX+3060+12GB' },
              { label: '在淘宝查看RTX 3060 12GB', url: 'https://s.taobao.com/search?q=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — 最强的卡，前提是能按官方定价买到 （$399官方定价，有货时约$562）',
            content: 'RTX 4060 Ti 16GB依然是本榜单中最好的*硬件*，在2026年存储器短缺之前一直是本文的冠军。16GB GDDR6可将Qwen3 14B和Mistral 12B的Q4完全放入GPU运行，Q8也无需交换；Ollama下7B Q4为45–60 tok/s，14B Q8为18–25 tok/s，165W的TDP任何650W电源都能应付。问题在于买不到。$399官方定价的货源在主流零售商处缺货，可查证的最便宜现货约$562，比官方定价高约41%。如果你能以官方定价或接近的价格买到，它是本文中最值得的选择；但在$562的价位，它已经超出了本文所面向的预算。',
            affiliateLinks: [
              { label: '在京东查看RTX 4060 Ti 16GB', url: 'https://search.jd.com/Search?keyword=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: '性能对比 — 当前价格与测试结果',
        content: '基准测试使用Ollama 0.30.x、llama.cpp服务端，模型来自HuggingFace。测试系统：Ryzen 9 7950X、64GB DDR5、NVMe SSD。速度与此前测试相比没有变化：变的不是硬件，而是价格。因超出$500而排除：二手RTX 3090（$850–1,050）、RTX 4070 12GB（$560–705）、RX 7800 XT 16GB（约$832）以及全新RTX 3060 12GB（$474–599）。',
        columns: ['GPU', '显存', '价格', 'Llama 3.1 8B Q4 tok/s', 'Qwen3 14B Q8 tok/s', '最大模型（Q4）'],
        rows: [
          { GPU: 'Intel Arc B580 12GB ★', '显存': '12GB', '价格': '$250–290', 'Llama 3.1 8B Q4 tok/s': '31 tok/s', 'Qwen3 14B Q8 tok/s': '显存受限', '最大模型 (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12GB（二手）', '显存': '12GB', '价格': '$270–300', 'Llama 3.1 8B Q4 tok/s': '36 tok/s', 'Qwen3 14B Q8 tok/s': '显存受限', '最大模型 (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', '显存': '16GB', '价格': '有货时约$562', 'Llama 3.1 8B Q4 tok/s': '55 tok/s', 'Qwen3 14B Q8 tok/s': '22 tok/s', '最大模型 (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-zh.svg',
        imageCaption: '500美元以下本地LLM推理预算GPU对比：Intel Arc B580 12GB（$250–290，31 tok/s）、二手RTX 3060 12GB（$270–300，36 tok/s）、RTX 4060 Ti 16GB（有货时约$562，55 tok/s，最大30B），均使用Ollama测试。',
      },
      methodology: {
        title: '我们如何挑选并测试这些GPU',
        content: '筛选标准：能以新品或二手价格在$500以下购得；至少支持一种主流推理运行时（Ollama、LM Studio、llama.cpp）；显存≥12GB（8GB显卡已排除）。多款显卡因价格被移出榜单：二手RTX 3090（24GB）现价$850–1,050；RTX 4070 12GB为$560–705；RX 7800 XT 16GB约$832；以$339重新上市的全新RTX 3060 12GB已上涨约45%至$474–599。RTX 4060 Ti 16GB予以保留但加注提醒——$399官方定价缺货，现货约$562。原因是共通的：AI数据中心需求引发的全球DRAM与GDDR7短缺，已将成交价在整个市场推高至远超官方定价的水平，NVIDIA RTX 50系列成交价约高出建议零售价36–39%，AMD也将Radeon上调约10%。所有基准均为tok/s，批大小为1、取10次运行平均，在Ubuntu 22.04 LTS上使用Ollama 0.30.x测得。',
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
            text: '可以把显存理解为AI模型专用的内存。模型必须完全放入显存才能快速推理。如果溢出到CPU内存（称为"卸载"），速度会下降80–95%。Q4量化相比Q8体积减半，质量损失很小。',
          },
        ],
        items: [
          '7B模型Q4：约4.5GB显存——本榜单任意一款GPU都能轻松运行',
          '7B模型Q8：约7.5GB显存——本榜单所有GPU均可运行',
          '13B模型Q4：约8.5GB显存——本榜单所有GPU均可运行',
          '14B模型Q8：约14GB显存——仅RTX 4060 Ti 16GB和二手RTX 3090支持，但两者现在都不在$500以下',
          '30B模型Q4：约18GB显存——仅RTX 3090（24GB）可轻松胜任',
          '70B模型Q4：约40GB——需要双GPU或CPU卸载',
        ],
      },
      decisionMatrix: {
        title: '你应该买哪款GPU？',
        content: '根据你的主要用途参考以下决策指南：',
        items: [
          '**$500以下综合最佳** → Intel Arc B580 12GB（$250–290）。唯一稳定低于$500的全新12GB显卡。7B–13B模型Q4，Llama 3.1 8B Q4约31 tok/s，通过SYCL在Windows和Linux上运行Ollama。',
          '**能用的最便宜CUDA显卡** → 二手RTX 3060 12GB（$270–300）。以与Arc相近的价格获得完整CUDA工具链——Ollama、LM Studio、vLLM和LoRA微调。请买二手：全新已是$474–599。',
          '**最强硬件，前提是能按官方定价买到** → RTX 4060 Ti 16GB。在$399官方定价下它胜过这里的一切，可将14B的Q8放入GPU运行。但官方定价缺货，现货约$562，超出本文预算。',
          '**需要30B模型能力？** → $500以下窗口已在2026年年中关闭且未再打开。二手RTX 3090（24GB）现价$850–1,050。请预算$850以上，或为RTX 4080 SUPER（16GB）预算$850以上。',
          '**Windows用户，追求省心** → 二手RTX 3060 12GB。NVIDIA CUDA在LLM、微调和多模态运行时方面拥有最广泛的Windows工具链支持，而二手3060是进入这一生态最便宜的方式。',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-zh.svg',
        imageCaption: '选择500美元以下预算GPU用于本地LLM推理的决策树：默认指向Intel Arc B580 12GB（$250–290），需要CUDA则指向二手RTX 3060 12GB（$270–300），30B模型则指向$850以上的二手RTX 3090（24GB）。',
      },
      softwareCompat: {
        title: '各GPU的软件兼容性',
        content: '三款GPU均可运行Ollama和llama.cpp，差异体现在高级工具上：',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA微调'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅（SYCL）', 'LM Studio': '⚠️ 测试版', vLLM: '❌', 'Text Gen WebUI': '⚠️ 部分支持', 'CUDA微调': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA微调': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA微调': '✅' },
        ],
      },
      powerAndCooling: {
        title: '功耗与系统要求',
        content: 'GPU功耗决定了你需要的电源和机箱。运行LLM会让GPU持续保持80–100%的利用率——与游戏不同，没有空闲帧。',
        items: [
          'RTX 4060 Ti 16GB：165W——550W以上电源即可；单8针接口',
          'RTX 3060 12GB：170W——550W以上电源即可；单8针接口',
          'Intel Arc B580 12GB：190W——需650W以上电源；标准8针',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '8GB显存跑本地大模型够用吗？',
            a: '8GB显存只能运行7B模型的Q4量化版本。13B模型无法完全放入显存，14B模型需要卸载到CPU内存，速度下降80–95%。2026年本地LLM实际使用中，12GB是最低要求，推荐16GB。',
          },
          {
            q: '二手RTX 3090还能以$500以下买到吗？',
            a: '不能。eBay上的二手RTX 3090交易价格为$850–1,050。价格先是在LLM爱好者认识到24GB显存的价值后上涨，随后又在2026年的存储器短缺中再度上涨。它早已不是$500以下的选项。需要30B模型能力（需24GB显存），请预算$850以上购买二手RTX 3090，或考虑RTX 4080 SUPER（16GB，新品约$850）以获得更快的14B Q8性能。',
          },
          {
            q: 'AMD显卡能用于本地AI吗？',
            a: '可以，但有条件。Linux上Ollama的ROCm后端对RX 7800 XT等显卡效果良好。Windows ROCm支持在改善中，但仍需手动步骤，且大多数工具不支持在AMD硬件上进行LoRA微调。价格提示：RX 7800 XT 16GB已涨至约$832，因此不再符合$500以下预算——在这个价位应选二手RTX 3060 12GB（$270–300，CUDA）或Intel Arc B580 12GB（$250–290）。若使用Windows或需要微调，请坚持选择NVIDIA。',
          },
          {
            q: 'AI用的Intel Arc显卡怎么样？',
            a: 'Intel Arc B580 12GB是2026年最佳的Arc选择；在存储器短缺重新定价了NVIDIA阵营之后，它也成了本文整体上最好的一张卡。它通过SYCL后端在Windows和Linux上运行Ollama，但原始tok/s性能比NVIDIA低30–40%。性价比如今已不只是有吸引力，而是决定性的：12GB显存$250–290，而同级NVIDIA显卡要$474–599。主要限制仍在软件层面：vLLM、微调工具和多模态运行时对Arc的支持仍不完善，因此若需要LoRA微调，请改买二手RTX 3060 12GB。',
          },
          {
            q: '单块500美元以下的GPU能跑70B模型吗？',
            a: '无法流畅运行。即使是RTX 3090（24GB）也无法将70B Q4（约40GB）完全装入显存。用llama.cpp进行CPU卸载可以分割模型，但速度降至2–5 tok/s，无法交互使用。流畅运行70B模型需要双GPU（如2×RTX 3090共48GB）或云推理服务。',
          },
          {
            q: '新款GPU（RTX 5060 Ti）会让这些显卡过时吗？',
            a: 'RTX 5060 Ti 16GB已经上市，而且并没有低于RTX 4060 Ti，反而相反。它以$429官方定价发布，如今售价$570–600，比官方定价高约40%——因为让整份榜单重新定价的那场存储器短缺，对身为当代产品的它冲击最大。它确实是比这里任何一张都更好的GPU，拥有16GB显存和更快的推理速度，但它不是$500以下的显卡，而等待它降到那个价位并不是一个值得依赖的计划。请按现在买得到的东西决策：Intel Arc B580 12GB为$250–290，若需要CUDA则选二手RTX 3060 12GB（$270–300）。',
          },
          {
            q: '二手RTX 4060 Ti 16GB多少钱？',
            a: '二手RTX 4060 Ti 16GB的价格跟随新品一起上涨：由于有货的新品约$562，二手在eBay上的报价现在大约是$420–480，具体取决于成色和剩余保修。这是少数几张买二手也省不了多少钱的显卡，因为按官方定价供应的新品已经断货。查看eBay上已售出（而非在售）的成交记录更准确。',
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
          acceptedAnswer: { '@type': 'Answer', text: '无法流畅运行。即使RTX 3090（24GB）也装不下70B Q4（约40GB）。CPU卸载会让速度降至2–5 tok/s。需要双GPU或云推理。' },
        },
        { '@type': 'Question', name: '二手RTX 3090还能以$500以下买到吗？', acceptedAnswer: { '@type': 'Answer', text: '不能——eBay上的二手RTX 3090交易价格为$850–1,050，已远超$500。需要30B模型能力请预算$850以上，或考虑RTX 4080 SUPER（16GB，约$850）。' } },
        { '@type': 'Question', name: 'AI用的Intel Arc显卡怎么样？', acceptedAnswer: { '@type': 'Answer', text: 'Intel Arc B580 12GB是2026年最佳Arc选择，也是本文整体最佳：12GB显存$250–290，原始tok/s性能比NVIDIA低30–40%，但它是唯一稳定低于$500的全新12GB显卡。若需要LoRA微调请改买二手RTX 3060 12GB。' } },
        { '@type': 'Question', name: '新款GPU（RTX 5060 Ti）会让这些显卡过时吗？', acceptedAnswer: { '@type': 'Answer', text: 'RTX 5060 Ti 16GB已上市，并未低于RTX 4060 Ti：它以$429官方定价发布，现售$570–600，高出约40%。它是更好的GPU，但不是$500以下的显卡。' } },
        { '@type': 'Question', name: '二手RTX 4060 Ti 16GB多少钱？', acceptedAnswer: { '@type': 'Answer', text: '由于有货的新品约$562，二手在eBay上大约是$420–480，取决于成色。请确认是16GB版本，因为也存在8GB版的RTX 4060 Ti。' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: '2026年500美元以下LLM推理最佳GPU排行',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: '综合最佳 — 12GB显存、唯一稳定低于$500的全新12GB显卡、$250–290' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB（二手）', description: '最佳CUDA选择 — 12GB显存、完整CUDA工具链、二手$270–300' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: '最强硬件，但$399官方定价缺货，有货时约$562' },
      ],
    },
    schema: { '@type': 'TechArticle', headline: '2026年500美元以下LLM推理最佳GPU排行', datePublished: '2026-05-26', dateModified: '2026-08-28', url: 'https://www.promptquorum.com/zh/local-llms/best-gpu-for-llm-inference-under-500-2026', inLanguage: 'zh' },
  },

  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-19',
    last_full_refresh: '2026-09-01',
    theme: '하드웨어 & 성능',
    title: '500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)',
    heroImage: '/images/best-gpu-for-llm-inference-under-500-2026-overview-hero-ko.webp',
    seoTitle: 'LLM 추론용 $500 이하 최고 GPU: Intel Arc B580',
    metaDescription: '$500 이하 로컬 LLM 추론에 가장 좋은 GPU는 이제 Intel Arc B580 12GB($250–290)입니다. 2026년 메모리 공급 부족으로 RTX 4060 Ti 16GB와 신품 RTX 3060은 $500을 넘었습니다.',
    educationalLevel: 'Intermediate',
    affiliateDisclosure: true,
    publishDate: '2026-05-26',
    leadAnswerBlock: '**$500 이하 로컬 LLM 추론에 가장 적합한 GPU는 이제 Intel Arc B580 12GB($250–290)입니다. 12GB VRAM으로 7B–13B 모델을 Q4로 실행하며 Llama 3.1 8B Q4에서 약 31 tok/s를 냅니다. $500 아래에서 안정적으로 구할 수 있는 유일한 신품 12GB 카드입니다. CUDA 도구 체인이 필요하다면 중고 RTX 3060 12GB($270–300)가 차선책입니다. 직전 1위였던 RTX 4060 Ti 16GB는 이 범위에서 벗어났습니다. $399 권장소비자가격 매물은 품절이고 실제로 구할 수 있는 카드는 약 $562입니다. RTX 3060 12GB도 재출시 이후 약 45% 올라 신품 $474–599가 되었습니다. 이 모두를 움직인 원인은 하나입니다. AI 데이터센터 수요가 견인한 전 세계 DRAM 및 GDDR7 공급 부족입니다. 30B 모델이 필요하다면 $850 이상을 예산으로 잡으십시오.**',
    quickAnswerTop: {
      question: '$500 이하에서 LLM을 로컬로 실행하기에 가장 좋은 GPU는 무엇입니까?',
      answer: '**Intel Arc B580 12GB($250–290)는 $500 이하 로컬 LLM 추론에서 최고의 GPU입니다.** 12GB VRAM으로 7B–13B 모델을 Q4로 실행하고, SYCL/oneAPI 백엔드를 통해 Windows와 Linux에서 Ollama가 동작하며, $500 아래에서 안정적으로 구할 수 있는 유일한 신품 12GB 카드입니다. CUDA 도구 체인이 필요하면 중고 RTX 3060 12GB($270–300)가 차선책입니다. 2026년 메모리 공급 부족으로 나머지는 모두 이 범위를 벗어났습니다. RTX 4060 Ti 16GB는 재고가 있을 때 약 $562, 신품 RTX 3060 12GB는 $474–599, 중고 RTX 3090은 $850–1,050, RTX 4070 12GB는 $560–705, RX 7800 XT 16GB는 약 $832입니다.',
      bullets: [
        '**우승:** Intel Arc B580 12GB($250–290) — 12GB VRAM, Llama 3.1 8B Q4에서 약 31 tok/s, $500 아래에서 안정적으로 구할 수 있는 유일한 신품 12GB 카드',
        '**차선책:** 중고 RTX 3060 12GB($270–300) — 완전한 CUDA 도구 체인으로 가는 가장 저렴한 경로',
        '⚠️ RTX 4060 Ti 16GB: $399 권장가 매물 품절, 재고 시 약 $562 — 더 이상 안정적인 $500 이하 선택지 아님',
        '⚠️ 신품 RTX 3060 12GB: $474–599, 재출시 이후 45% 상승 — 중고로 구매하십시오',
        '⚠️ 중고 RTX 3090: 현재 $850–1,050 — $500 이하 선택지 아님',
        '⚠️ RTX 4070 12GB: 현재 $560–705, RX 7800 XT 16GB: 약 $832 — 모두 $500 초과',
      ],
      updatedDate: '2026-09-01',
    },
    sections: {
      tldr: {
        isTldr: true,
        items: [
          '**Intel Arc B580 12GB가 대부분의 사용자에게 최적: 12GB VRAM, $250–290, Llama 3.1 8B Q4에서 약 31 tok/s — $500 아래에서 안정적으로 구할 수 있는 유일한 신품 12GB 카드**',
          '중고 RTX 3060 12GB($270–300)가 차선책 — 완전한 CUDA 도구 체인으로 가는 가장 저렴한 경로',
          '⚠️ 가격 경고: 직전 1위였던 RTX 4060 Ti 16GB는 $399 권장가에 품절이며 재고 시 약 $562 — $500 이하 목록에서 제거',
          '⚠️ 가격 경고: 신품 RTX 3060 12GB는 $474–599로 재출시 이후 45% 상승 — 이 카드는 중고 시장이 합리적입니다',
          '⚠️ 가격 경고: 중고 RTX 3090이 $850–1,050, RTX 4070 12GB가 $560–705로 상승 — 모두 $500 이하 목록에서 제거',
          '⚠️ 가격 경고: RX 7800 XT 16GB가 약 $832로 상승 — $500 이하 목록에서 제거',
          '왜 전부 움직였나: AI 데이터센터 수요가 견인한 전 세계 DRAM 및 GDDR7 공급 부족으로 그래픽카드 실거래가가 시장 전반에서 정가를 크게 웃돌게 되었습니다. 하드웨어는 그대로이고 가격만 바뀌었습니다. 30B 모델이 필요하다면 중고 RTX 3090(24GB)에 최소 $850을 예산으로 잡으십시오.',
          '이 목록의 GPU 3개 모두 Ollama, LM Studio, llama.cpp를 즉시 사용 가능',
        ],
      },
      rankedList: {
        title: '500달러 이하 LLM 추론 GPU 순위',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Intel Arc B580 12GB는 500달러 이하 로컬 LLM 추론에서 최고의 GPU입니다. 2026년 메모리 공급 부족 이후 $500 아래에서 안정적으로 구할 수 있는 유일한 신품 12GB 카드이기 때문입니다.',
          },
          {
            type: 'plain-terms',
            text: 'GPU VRAM은 어떤 AI 모델을 실행할 수 있는지 결정합니다. 16GB GPU는 14B 모델을 고품질로 실행합니다. 24GB GPU(중고 RTX 3090 등)는 30B 이상 모델을 실행합니다. 12GB 미만이면 7B 이하 모델로 제한됩니다.',
          },
        ],
        rankedItems: [
          {
            rank: 1,
            title: 'Intel Arc B580 12GB — 종합 1위 ($250–290)',
            content: '**Intel Arc B580 12GB는 $500 이하 로컬 LLM 추론에서 최고의 GPU입니다. 상당 부분은 이 범위에 확실히 남은 마지막 카드이기 때문입니다.** $249에 출시되어 지금도 $250–290에 판매되는 반면, 이 목록을 채우던 NVIDIA 카드는 2026년 메모리 공급 부족으로 모두 $500을 넘었습니다. SYCL/oneAPI 백엔드를 통해 Linux와 Windows에서 Ollama가 동작하며 Llama 3.1 8B Q4에서 약 28~35 tok/s를 냅니다. 12GB VRAM 상한 때문에 13B 모델 Q4까지만 가능하고 14B Q8은 들어가지 않습니다. Intel의 드라이버 지원은 출시 이후 크게 개선되었지만 도구 생태계의 폭에서는 여전히 CUDA에 못 미칩니다. Ollama와 llama.cpp는 잘 동작하고 LoRA 파인튜닝은 번거롭다고 보시면 됩니다.',
            affiliateLinks: [
              { label: 'Amazon에서 Intel Arc B580 12GB 보기', url: 'https://www.amazon.com/s?k=Intel+Arc+B580' },
              { label: 'Newegg에서 Intel Arc B580 12GB 보기', url: 'https://www.newegg.com/p/pl?d=Intel+Arc+B580' },
            ],
          },
          {
            rank: 2,
            title: '중고 RTX 3060 12GB — 최고의 CUDA 선택지 ($270–300)',
            content: 'NVIDIA GeForce RTX 3060 12GB는 완전한 CUDA 도구 체인으로 가는 가장 저렴한 경로이지만 **중고**로 사십시오. $339 소매 재출시 가격은 유지되지 않았습니다. 신품은 약 45% 올라 $474–599가 되었고, 이는 이 문서가 다루는 $500 상한선에 걸치거나 그것을 넘어섭니다. 중고 시장은 훨씬 덜 움직여 $270–300 수준입니다. 12GB GDDR6는 7B–13B 모델을 Q4/Q8로 여유 있게 실행합니다. 14B Q8은 담을 수 없지만 14B Q4(약 8.5GB)는 들어갑니다. 벤치마크: Ollama에서 Llama 3.1 8B Q4 약 32~40 tok/s. 완전한 CUDA 도구 체인 덕분에 Ollama, LM Studio, vLLM, LoRA 파인튜닝이 Windows와 Linux에서 바로 동작합니다. Arc B580이 따라올 수 없는 유일한 지점입니다.',
            affiliateLinks: [
              { label: 'Amazon에서 RTX 3060 12GB 보기', url: 'https://www.amazon.com/s?k=RTX+3060+12GB' },
              { label: 'Newegg에서 RTX 3060 12GB 보기', url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB' },
            ],
          },
          {
            rank: 3,
            title: 'RTX 4060 Ti 16GB — 최고의 카드, 권장가에 구할 수 있다면 ($399 권장가, 재고 시 약 $562)',
            content: 'RTX 4060 Ti 16GB는 여전히 이 목록에서 최고의 *하드웨어*이며, 2026년 메모리 공급 부족 전까지 이 문서의 1위였습니다. 16GB GDDR6는 Qwen3 14B와 Mistral 12B를 Q4로 GPU 내에서 완전히 실행하고 Q8에서도 스왑 없이 동작합니다. Ollama 기준 7B Q4에서 45~60 tok/s, 14B Q8에서 18~25 tok/s이며 165W TDP는 650W 파워서플라이면 충분합니다. 문제는 구매입니다. $399 권장가 매물은 주요 소매점에서 품절이고, 확인 가능한 최저 재고 가격은 약 $562로 정가보다 약 41% 높습니다. 권장가나 그에 가까운 값에 찾는다면 이 문서에서 단연 최고의 구매이지만, $562에서는 이 문서가 상정한 예산을 벗어납니다.',
            affiliateLinks: [
              { label: 'Amazon에서 RTX 4060 Ti 16GB 보기', url: 'https://www.amazon.com/s?k=RTX+4060+Ti+16GB' },
              { label: 'Newegg에서 RTX 4060 Ti 16GB 보기', url: 'https://www.newegg.com/p/pl?d=RTX+4060+Ti+16GB' },
            ],
          },
        ],
      },
      benchmarkTable: {
        title: '성능 비교 — 현재 가격 + 테스트 결과',
        content: 'Ollama 0.30.x, llama.cpp 서버, HuggingFace 모델로 측정한 벤치마크입니다. 테스트 시스템: Ryzen 9 7950X, 64GB DDR5, NVMe SSD. 속도는 이전 테스트와 동일합니다. 움직인 것은 하드웨어가 아니라 가격입니다. $500 초과로 제외: 중고 RTX 3090($850–1,050), RTX 4070 12GB($560–705), RX 7800 XT 16GB(약 $832), 신품 RTX 3060 12GB($474–599).',
        columns: ['GPU', 'VRAM', '가격', 'Llama 3.1 8B Q4 tok/s', 'Qwen3 14B Q8 tok/s', '최대 모델 (Q4)'],
        rows: [
          { GPU: 'Intel Arc B580 12GB ★', VRAM: '12 GB', '가격': '$250–290', 'Llama 3.1 8B Q4 tok/s': '31 tok/s', 'Qwen3 14B Q8 tok/s': 'VRAM 부족', '최대 모델 (Q4)': '13B (Q4)' },
          { GPU: 'RTX 3060 12GB (중고)', VRAM: '12 GB', '가격': '$270–300', 'Llama 3.1 8B Q4 tok/s': '36 tok/s', 'Qwen3 14B Q8 tok/s': 'VRAM 부족', '최대 모델 (Q4)': '14B (Q4)' },
          { GPU: 'RTX 4060 Ti 16GB', VRAM: '16 GB', '가격': '재고 시 약 $562', 'Llama 3.1 8B Q4 tok/s': '55 tok/s', 'Qwen3 14B Q8 tok/s': '22 tok/s', '최대 모델 (Q4)': '30B (Q4)' },
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-benchmark-comparison-ko.svg',
        imageCaption: '500달러 이하 로컬 LLM 추론용 보급형 GPU 비교: Intel Arc B580 12GB($250–290, 31 tok/s), 중고 RTX 3060 12GB($270–300, 36 tok/s), RTX 4060 Ti 16GB(재고 시 약 $562, 55 tok/s, 최대 30B)를 Ollama로 측정.',
      },
      methodology: {
        title: 'GPU 선정 및 테스트 방법',
        content: '선정 기준: 신품 또는 중고로 $500 이하 구매 가능; 주요 추론 런타임(Ollama, LM Studio, llama.cpp) 중 하나 이상 지원; VRAM 12GB 이상(8GB 카드 제외). 여러 카드가 가격 때문에 목록에서 빠졌습니다. 중고 RTX 3090(24GB)은 현재 $850–1,050, RTX 4070 12GB는 $560–705, RX 7800 XT 16GB는 약 $832이며, $339에 재출시된 신품 RTX 3060 12GB는 약 45% 올라 $474–599가 되었습니다. RTX 4060 Ti 16GB는 목록에 남기되 주의 표시를 달았습니다. $399 권장가 매물은 품절이고 재고품은 약 $562입니다. 원인은 모두 같습니다. AI 데이터센터 수요가 견인한 전 세계 DRAM 및 GDDR7 공급 부족으로 실거래가가 시장 전반에서 정가를 크게 웃돌게 되었고, NVIDIA RTX 50 시리즈는 권장가보다 약 36~39% 높게 거래되며 AMD도 Radeon 가격을 약 10% 인상했습니다. 모든 벤치마크는 배치 크기 1로 10회 실행한 평균 tok/s이며 Ubuntu 22.04 LTS에서 Ollama 0.30.x로 측정했습니다.',
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
            text: 'VRAM을 AI 모델용 RAM으로 생각하십시오. 빠른 추론을 위해 모델 전체가 VRAM에 들어가야 합니다. 시스템 RAM으로 넘치면(이를 "오프로딩"이라 함) 속도가 80~95% 떨어집니다. Q4 양자화는 약간의 품질 손실로 Q8 대비 크기를 절반으로 줄입니다.',
          },
        ],
        items: [
          '7B 모델 Q4: 약 4.5GB VRAM — 이 목록의 모든 GPU에서 쉽게 처리 가능',
          '7B 모델 Q8: 약 7.5GB VRAM — 여기 있는 모든 GPU에 맞음',
          '13B 모델 Q4: 약 8.5GB VRAM — 이 목록의 모든 GPU에 맞음',
          '14B 모델 Q8: 약 14GB VRAM — RTX 4060 Ti 16GB와 중고 RTX 3090만 가능하지만 둘 다 현재 $500 이하가 아닙니다',
          '30B 모델 Q4: 약 18GB VRAM — 24GB 필요 (중고 RTX 3090, 현재 $850+)',
          '70B 모델 Q4: 약 40GB — GPU 2개 또는 CPU 오프로딩 필요',
        ],
      },
      decisionMatrix: {
        title: '어떤 GPU를 구매해야 합니까?',
        content: '주요 용도에 따라 이 결정 가이드를 활용하십시오:',
        items: [
          '**$500 이하 최고 올라운더** → Intel Arc B580 12GB($250–290). $500 아래에서 안정적으로 구할 수 있는 유일한 신품 12GB 카드. 7B–13B 모델 Q4, Llama 3.1 8B Q4에서 약 31 tok/s, SYCL을 통해 Windows와 Linux에서 Ollama 동작.',
          '**가장 저렴한 작동하는 CUDA 카드** → 중고 RTX 3060 12GB($270–300). Arc와 거의 같은 가격으로 Ollama, LM Studio, vLLM, LoRA 파인튜닝을 포함한 완전한 CUDA 도구 체인을 얻습니다. 중고로 사십시오. 신품은 $474–599입니다.',
          '**권장가에 구할 수 있다면 최고의 하드웨어** → RTX 4060 Ti 16GB. $399 권장가라면 여기 있는 어떤 것보다 낫고 14B Q8을 GPU 내에서 실행합니다. 다만 권장가 매물은 품절이고 재고품은 약 $562로 이 문서의 예산을 벗어납니다.',
          '**30B 모델 기능이 필요하다면?** → $500 이하 선택지는 2026년 중반에 사라졌고 다시 열리지 않았습니다. 중고 RTX 3090(24GB)은 현재 $850–1,050입니다. $850 이상 또는 RTX 4080 SUPER(16GB, 약 $850)를 예산으로 잡으십시오.',
          '**Windows 사용자, 간편 설정** → 중고 RTX 3060 12GB. NVIDIA CUDA가 LLM, 파인튜닝, 멀티모달 런타임에서 가장 넓은 Windows 지원을 제공하며, 중고 3060이 그 생태계로 들어가는 가장 저렴한 방법입니다.',
        ],
        image: '/images/best-gpu-for-llm-inference-under-500-2026-decision-tree-ko.svg',
        imageCaption: '500달러 이하 예산 GPU를 선택하기 위한 로컬 LLM 추론 결정 트리: 기본 선택지는 Intel Arc B580 12GB($250–290), CUDA가 필요하면 중고 RTX 3060 12GB($270–300), 30B 모델에는 $850 이상의 중고 RTX 3090(24GB).',
      },
      softwareCompat: {
        title: 'GPU별 소프트웨어 호환성',
        content: '3개 GPU 모두 Ollama와 llama.cpp를 실행합니다. 차이는 고급 도구에서 나타납니다:',
        columns: ['GPU', 'Ollama', 'LM Studio', 'vLLM', 'Text Gen WebUI', 'CUDA 파인튜닝'],
        rows: [
          { GPU: 'Intel Arc B580 12GB', Ollama: '✅ (SYCL)', 'LM Studio': '⚠️ 베타', vLLM: '❌', 'Text Gen WebUI': '⚠️ 부분', 'CUDA 파인튜닝': '❌' },
          { GPU: 'RTX 3060 12GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA 파인튜닝': '✅' },
          { GPU: 'RTX 4060 Ti 16GB', Ollama: '✅', 'LM Studio': '✅', vLLM: '✅', 'Text Gen WebUI': '✅', 'CUDA 파인튜닝': '✅' },
        ],
      },
      powerAndCooling: {
        title: '소비 전력 및 시스템 요구 사항',
        content: 'GPU 소비 전력은 필요한 파워서플라이와 케이스를 결정합니다. LLM 실행 시 GPU는 지속적으로 80~100% 부하 상태를 유지합니다. 게임과 달리 유휴 프레임이 없기 때문입니다.',
        items: [
          'Intel Arc B580 12GB: 190W — 650W 이상 파워서플라이; 표준 8핀',
          'RTX 3060 12GB: 170W — 550W 이상 파워서플라이; 8핀 커넥터 1개',
          'RTX 4060 Ti 16GB: 165W — 550W 이상 파워서플라이; 8핀 커넥터 1개',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '8GB VRAM으로 로컬에서 LLM을 실행하기에 충분합니까?',
            a: '8GB VRAM은 Q4 양자화 기준 7B 모델로 제한됩니다. 모델이 겨우 맞는 수준입니다. 13B 모델은 전체 품질로 실행할 수 없으며, 14B 모델은 CPU RAM으로 부분 오프로드되어 속도가 80~95% 저하됩니다. 2026년 의미 있는 로컬 LLM 사용을 위해 최소 12GB, 권장 16GB가 필요합니다.',
          },
          {
            q: '2026년에 중고 RTX 3090을 $500 이하로 구매할 수 있습니까?',
            a: '아니요. 중고 RTX 3090은 eBay에서 $850–1,050에 거래됩니다. LLM 애호가들이 24GB VRAM의 가치를 인식하면서 먼저 오르고, 2026년 메모리 공급 부족으로 다시 올랐습니다. 더 이상 $500 이하 선택지가 아니며 그렇게 된 지 한참 되었습니다. 30B 모델 기능(24GB VRAM 필요)이 필요하다면 중고 RTX 3090에 $850 이상을 예산으로 잡거나, 더 빠른 14B Q8 성능을 원한다면 RTX 4080 SUPER(16GB, 신품 약 $850)를 고려하십시오.',
          },
          {
            q: 'AMD GPU로 로컬 LLM을 실행할 수 있습니까?',
            a: '가능하지만 제약이 있습니다. Linux에서 ROCm을 사용하는 Ollama는 RX 7800 XT 같은 카드에서 잘 동작합니다. Windows ROCm 지원은 개선되었지만 여전히 수동 설정이 필요하며, AMD 하드웨어에서의 파인튜닝(LoRA)은 대부분의 도구에서 지원되지 않습니다. 가격 참고: RX 7800 XT 16GB는 약 $832로 올라 $500 이하 예산에 맞지 않습니다. 그 가격대라면 중고 RTX 3060 12GB($270–300, CUDA) 또는 Intel Arc B580 12GB($250–290)가 선택지입니다. Windows를 쓰거나 파인튜닝이 필요하면 NVIDIA를 유지하십시오.',
          },
          {
            q: 'AI용 Intel Arc GPU는 어떻습니까?',
            a: 'Intel Arc B580 12GB는 2026년 최고의 Arc 선택지이며, 메모리 공급 부족이 NVIDIA 진영의 가격을 다시 매긴 뒤로는 이 문서 전체에서 가장 좋은 카드가 되었습니다. SYCL 백엔드를 통해 Windows와 Linux 모두에서 Ollama를 실행하지만 원시 tok/s 성능은 NVIDIA 대비 30~40% 낮습니다. 가성비는 이제 단순히 좋은 수준이 아니라 결정적입니다. 동급 NVIDIA 카드가 $474–599인데 12GB VRAM을 $250–290에 얻습니다. 주된 한계는 여전히 소프트웨어입니다. vLLM, 파인튜닝 도구, 멀티모달 런타임은 아직 Arc를 제대로 지원하지 않으므로 LoRA 파인튜닝이 필요하면 중고 RTX 3060 12GB를 사십시오.',
          },
          {
            q: '500달러 이하 GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
            a: '전체 속도로는 불가능합니다. RTX 3090(24GB)조차 70B Q4(약 40GB)를 VRAM에 완전히 담을 수 없습니다. llama.cpp의 CPU 오프로드로 모델을 GPU VRAM과 시스템 RAM에 나눌 수 있지만, 속도가 2~5 tok/s로 떨어져 대화형 사용에는 너무 느립니다. 70B 모델을 사용 가능한 속도로 실행하려면 GPU 2개(RTX 3090 ×2, 48GB 합산) 또는 클라우드 추론이 필요합니다.',
          },
          {
            q: '새로운 GPU(RTX 5060 Ti)가 이 GPU들을 구식으로 만들 것입니까?',
            a: 'RTX 5060 Ti 16GB는 이미 출시되었고, RTX 4060 Ti보다 낮은 가격이 되기는커녕 반대가 되었습니다. $429 권장소비자가격으로 출시되었지만 현재 $570–600에 판매되어 정가보다 약 40% 높습니다. 이 목록 전체의 가격을 다시 매긴 바로 그 메모리 공급 부족이, 현세대 카드인 이 제품을 가장 강하게 때렸기 때문입니다. 16GB VRAM과 더 빠른 추론을 갖춘, 여기 있는 어떤 것보다도 실제로 더 나은 GPU이지만 $500 이하 카드는 아니며, 그렇게 되기를 기다리는 것은 세울 만한 계획이 아닙니다. 지금 구할 수 있는 것으로 결정하십시오. Intel Arc B580 12GB가 $250–290, CUDA가 필요하면 중고 RTX 3060 12GB가 $270–300입니다.',
          },
          {
            q: '중고 RTX 4060 Ti 16GB의 가격은 얼마입니까?',
            a: '중고 RTX 4060 Ti 16GB 가격은 신품 상승을 따라갔습니다. 재고가 있는 신품이 약 $562이다 보니, 중고 매물은 상태와 남은 보증 기간에 따라 eBay에서 대략 $420–480 수준입니다. 권장가 신품 공급이 말라붙었기 때문에 중고로 사도 크게 절약되지 않는 몇 안 되는 카드 중 하나입니다.',
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
            text: '아니요 — 중고 RTX 3090은 eBay에서 $850–1,050에 거래되어 $500을 크게 넘습니다. 30B 기능이 필요하다면 $850 이상 예산 또는 RTX 4080 SUPER(약 $850)를 고려하십시오.',
          },
        },
        {
          '@type': 'Question',
          name: '500달러 이하 GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '전체 속도로는 불가능합니다. RTX 3090(24GB)조차 70B Q4(약 40GB)를 VRAM에 담을 수 없습니다. CPU 오프로드 시 속도가 2~5 tok/s로 떨어집니다. GPU 2개 또는 클라우드 추론이 필요합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '중고 RTX 4060 Ti 16GB의 가격은 얼마입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '재고가 있는 신품이 약 $562이다 보니 중고는 eBay에서 약 $420–480 수준이며 상태에 따라 다릅니다. 8GB 버전이 아닌 16GB 버전인지 확인하십시오.',
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
        { '@type': 'ListItem', position: 1, name: 'Intel Arc B580 12GB', description: '종합 1위 — 12GB VRAM, $500 아래에서 안정적으로 구할 수 있는 유일한 신품 12GB 카드, $250–290' },
        { '@type': 'ListItem', position: 2, name: 'NVIDIA RTX 3060 12GB (중고)', description: '최고의 CUDA 선택지 — 12GB VRAM, 완전한 CUDA 도구 체인, 중고 $270–300' },
        { '@type': 'ListItem', position: 3, name: 'NVIDIA RTX 4060 Ti 16GB', description: '최고의 하드웨어이지만 $399 권장가에 품절, 재고 시 약 $562' },
      ],
    },
    schema: {
      '@type': 'TechArticle',
      headline: '500달러 이하 LLM 추론용 최고 GPU 순위 (2026년)',
      description: '500달러 이하 로컬 AI 추론 GPU 비교 순위: Intel Arc B580 12GB, 중고 RTX 3060 12GB, RTX 4060 Ti 16GB. 2026년 메모리 공급 부족으로 RTX 3090, RTX 4070, RX 7800 XT, 신품 RTX 3060이 $500을 넘었습니다.',
      datePublished: '2026-05-26',
      dateModified: '2026-08-28',
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
