// Auto-generated from src/lib/local-llms/content.ts
// Slug: best-amd-gpus-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'GPU Buying Guides',
      title: 'Best AMD GPU for Local LLMs',
      seoTitle: 'Best AMD GPU for Local LLMs 2026: RX 7900 XTX vs RTX',
      intro: '**AMD RX 6800 XT and RX 7900 XTX are solid NVIDIA alternatives, offering 15-20% better compute-per-dollar, but suffer from weaker ONNX Runtime and vLLM driver support.** As of April 2026, AMD ROCm (HIP) has matured, but compatibility layers add friction. NVIDIA CUDA is still the path of least resistance for local LLMs. Use AMD only if you find a great used deal or already own AMD hardware.',
      metaDescription: 'AMD RX 7900 XTX matches RTX 4090 at 24 GB VRAM for $450–550 used — $500 cheaper. ROCm adds 5–10 h setup friction. The best AMD GPU for local LLMs in 2026.',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-en.webp',
      publishDate: '2026-04-05',
      dateModified: '2026-07-14',
      leadAnswerBlock: '**AMD RX 6800 XT and RX 7900 XTX are solid NVIDIA alternatives, offering 15-20% better compute-per-dollar, but suffer from weaker ONNX Runtime and vLLM driver support.**',
      quickAnswerTop: {
        question: 'Are AMD GPUs good for running local LLMs?',
        answer: 'AMD GPUs can run local LLMs via ROCm, but require 5–10 hours of driver setup vs plug-and-play NVIDIA CUDA. The RX 7900 XTX (24 GB, $450–550 used) matches RTX 4090 speed at half the price, but Ollama support is inconsistent. Use AMD only if you find a great deal or already own AMD hardware.',
        bullets: [
          '→ RX 7900 XTX: 24 GB VRAM, $450–550 used — same VRAM as RTX 4090 at ~60% the price',
          '→ RX 6800 XT: 16 GB VRAM, $200–280 used — best AMD value, runs 13B models at Q4',
          '→ ROCm (AMD driver stack) works with llama.cpp and vLLM; Ollama support inconsistent as of 2026',
          '→ NVIDIA CUDA is still the easier path; choose AMD only for cost savings or existing hardware',
        ],
        updatedDate: '2026-07-14',
      },
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '7 min',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Best AMD GPU for Local LLMs 2026: RX 7900 XTX vs RTX',
        'description': 'Compare AMD RX 7900 XTX, 6800 XT vs NVIDIA RTX. ROCm setup, vLLM performance, cost-per-TFLOP analysis. When to buy AMD over CUDA. Updated July 2026.',
        'url': 'https://www.promptquorum.com/local-llms/best-amd-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'AMD GPU' },
          { '@type': 'Thing', 'name': 'ROCm' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'local LLM inference' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
        'inLanguage': 'en',
        'audience': { '@type': 'Audience', 'audienceType': 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows' },
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Should I buy AMD RX 6800 XT or NVIDIA RTX 3080 for local LLMs?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080 if you value simplicity (CUDA "just works"). RX 6800 XT if you want 25% better value and don\'t mind 5-10 hours ROCm setup.' }
          },
          {
            '@type': 'Question',
            'name': 'Is AMD RX 7900 XTX better than RTX 4090?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Similar speed, same VRAM (24GB). RX 7900 XTX is $200-300 cheaper used ($450-550 vs. $1,000-1,300). ROCm setup is the trade-off.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I use AMD GPUs with Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Technically yes. In our April 2026 testing (Ollama v0.3.x, ROCm 6.x), ROCm support was inconsistent — GPU detection failed on some configurations and CPU fallback was common. Check the current AMD compatibility list at github.com/ollama/ollama; vLLM or llama.cpp are the more reliable paths for AMD inference today.' }
          },
          {
            '@type': 'Question',
            'name': 'What\'s the best AMD path for local LLMs in 2026?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama.cpp (HIP backend) + Text Generation WebUI. Both have solid AMD support. Avoid Ollama.' }
          },
          {
            '@type': 'Question',
            'name': 'Do I need Ubuntu for AMD ROCm, or does Windows work?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Windows support exists (HIP on Windows), but in our April 2026 testing it was less stable than Ubuntu. Ubuntu is the recommended path.' }
          },
          {
            '@type': 'Question',
            'name': 'Is RX 6700, 6700 XT, or 6750 good for 7B models?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RX 6700 (12GB) works but is 20% slower than RX 6800 XT. RX 6700 XT (12GB, same VRAM) has ~15% faster clocks than the non-XT card but is still behind the 6800 XT. Only buy either if <$250. Otherwise, stretch to 6800 XT.' }
          },
          {
            '@type': 'Question',
            'name': 'Is the RX 6900 XT worth buying for local LLMs?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Not really. The RX 6900 XT (16GB) is only marginally faster than the RX 6800 XT, is rarer used, and costs $350-400 vs. $300-350 for the 6800 XT. The price bump isn\'t worth it -- buy the 6800 XT instead.' }
          },
          {
            '@type': 'Question',
            'name': 'Is the AMD Radeon 680M good for running local LLMs?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'The Radeon 680M is integrated graphics built into Ryzen 6000/7000 mobile APUs -- it is not the same product as the discrete RX 6800M or RX 6800 XT. It has no dedicated VRAM and shares system RAM instead, so it is only viable for small quantized models (roughly 3B parameters or less at Q4) and will run noticeably slower than any discrete GPU on this page. For serious local LLM use, a discrete card like the RX 6800 XT is the better choice.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I mix AMD and NVIDIA GPUs in one system?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Theoretically yes, but management is a nightmare. Each GPU needs its own CUDA/HIP runtime. Not recommended.' }
          },
          {
            '@type': 'Question',
            'name': 'How much VRAM does the AMD RX 7900 XTX have?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'The AMD RX 7900 XTX has 24GB GDDR6 VRAM -- the same as RTX 4090. This makes it the most capable AMD card for running 70B models at Q4.' }
          },
          {
            '@type': 'Question',
            'name': 'Is AMD ROCm stable enough for production LLM inference?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'ROCm 6.x (2025) is significantly more stable than ROCm 5.x. For production use, llama.cpp HIP backend on Ubuntu 22.04+ is the most reliable stack. In our April 2026 testing (Ollama v0.3.x, ROCm 6.x), Ollama\'s ROCm support was inconsistent — GPU detection failed on some configurations. Check the current AMD compatibility list at github.com/ollama/ollama before committing.' }
          },
          {
            '@type': 'Question',
            'name': 'What is the best AMD GPU for under $400?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'AMD RX 6800 XT (16GB, ~$220-300 used) is the best value AMD GPU under $400. It runs 13B models at Q4 smoothly and 7B models at Q8 comfortably via llama.cpp HIP backend.' }
          },
          {
            '@type': 'Question',
            'name': 'Can I run local LLMs on an AMD RX 6800M laptop GPU?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. The AMD RX 6800M (mobile variant, 12GB GDDR6) can run 13B models at Q4_K_M (~8 GB) or 7B models at Q8_0 (~7 GB). Use llama.cpp HIP backend on Linux or Windows. ROCm driver support for RX 6800M is solid on Ubuntu 22.04+ with Linux Kernel 6.2+. Windows HIP support is newer (less stable). Speed: ~8-12 tokens/sec on CPU-only fallback, ~30-40 tokens/sec with HIP acceleration on RX 6800M.' }
          }
        ]
      },
      toc: [
        { label: 'TLDR', anchor: '#tldr' },
        { label: 'Which AMD GPUs Are Actually Worth Using?', anchor: '#which-amd' },
        { label: 'How Do AMD GPUs Compare to RTX on Price and Speed?', anchor: '#amd-vs-nvidia' },
        { label: 'What\'s the ROCm Setup Friction for AMD?', anchor: '#rocm-setup' },
        { label: 'Can You Run Ollama and vLLM on AMD?', anchor: '#software-support' },
        { label: 'When Should You Actually Buy AMD Over NVIDIA?', anchor: '#when-buy-amd' },
        { label: 'Common AMD Adoption Mistakes', anchor: '#mistakes' },
        { label: 'FAQ', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          snippetBlocks: [
            { type: 'one-sentence', text: 'AMD RX 7900 XTX matches RTX 4090 at 24 GB VRAM for $450–550 used, but ROCm driver setup adds 5–10 hours of friction vs NVIDIA CUDA.' },
            { type: 'plain-terms', text: 'AMD GPUs are like a car with great horsepower but a manual transmission — more power per dollar, but more work to get running. NVIDIA is the automatic.' },
          ],
          items: [
            'AMD RX 6800 XT (16GB, $300-350 used) and RX 7900 XTX (24GB, $400-500 used) are the only viable options for local LLMs.',
            'Performance-per-dollar: AMD is 20-30% cheaper than NVIDIA, but software friction costs 5-10 hours of setup time.',
            'Ollama: Limited AMD support (ROCm path was inconsistent in our April 2026 testing, Ollama v0.3.x / ROCm 6.x — GPU detection failed on some configurations; CPU fallback is slow). Check github.com/ollama/ollama for current AMD compatibility.',
            'vLLM: Full AMD ROCm support as of v0.6.0, but setup requires manual drivers. Works well if you get past setup.',
            'Text Generation WebUI: Excellent AMD support via ROCm. Best user experience on AMD.',
            'Llama.cpp: Native AMD support (HIP backend). Solid performance. Recommended AMD path.',
            'Setup cost: Plan 5-10 hours debugging ROCm drivers, HIPCC compilation, kernel compatibility.',
            'Verdict (April 2026): Use AMD only if you have AMD already, or if you find a killer used deal ($300 for 16GB card). Otherwise, NVIDIA CUDA is still simpler.',
          ],
        },
        'which-amd': {
          title: 'Which AMD GPUs Are Actually Worth Using?',
          items: [
            '**RX 6800 XT** (16GB GDDR6): The value king for AMD. 2020 release. Still solid for 7B-22B inference. Used: $300-350.',
            '**RX 6900 XT** (16GB GDDR6): Marginally faster 6800 XT. Rare. Used: $350-400. Not worth the price bump.',
            '**RX 7900 XT** (20GB GDDR6): Newer RDNA 3 arch. 20% faster than 6800 XT. Used: $400-480. Good for 70B Q4.',
            '**RX 7900 XTX** (24GB GDDR6): Top AMD consumer GPU. 24GB VRAM is game-changer for 70B. Used: $450-550. Comparable to RTX 4090 speed.',
            '**Radeon Pro W6800 (32GB)**: Enterprise card, cheaper used (~$200-300). Slower, but 32GB is excellent for 70B Q8. Niche play.',
          ],
        },
        'amd-vs-nvidia': {
          title: 'How Do AMD GPUs Compare to RTX on Price and Speed?',
          rows: [
            { '0': 'RX 6800 XT', '1': '16GB', '2': '1,952', '3': '$300-350', '4': '+25%', '5': 'RTX 3080 (slower)' },
            { '0': 'RX 7900 XT', '1': '20GB', '2': '2,540', '3': '$400-480', '4': '+20%', '5': 'RTX 4080 (similar)' },
            { '0': 'RX 7900 XTX', '1': '24GB', '2': '2,750', '3': '$450-550', '4': '+15%', '5': 'RTX 4090 (similar speed)' },
            { '0': 'RTX 3080', '1': '10GB', '2': '1,456', '3': '$350-400', '4': '--', '5': '--' },
            { '0': 'RTX 4090', '1': '24GB', '2': '2,752', '3': '$1,000-1,300', '4': '--', '5': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', 'Price Used', 'Perf/$ vs. RTX', 'Equivalent RTX'],
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-en.webp',
          imageCaption: 'RX 7900 XTX matches RTX 4090 speed and VRAM for roughly 60% of the price -- the trade-off is ROCm setup friction.',
        },
        'rocm-setup': {
          title: 'What\'s the ROCm Setup Friction for AMD?',
          content: [
            '**1. Install AMD ROCm drivers: `apt-get install rocm-dkms` (Ubuntu). On Windows, manual .exe installer. Takes 30 min.**',
            '2. Verify HIP compiler: `hipcc --version`. Often fails on first try. Debug kernel compatibility for your GPU.',
            '3. Install HIPCC (AMD\'s HIP-to-C++ compiler): `apt-get install hip-runtime-amd`. Another dependency chain.',
            '4. Test with small LLM: Run inference to verify GPU acceleration is working. Often defaults to CPU fallback.',
            '5. Troubleshoot driver version mismatches: ROCm v5.7 works with kernel 5.15 but not 6.x. Consume 2-4 hours debugging.',
            'NVIDIA CUDA by comparison: `nvidia-cuda-toolkit` → one apt-get, instant GPU access. AMD requires 5-10× more friction.',
          ],
        },
        'software-support': {
          title: 'Can You Run Ollama and vLLM on AMD?',
          content: [
            '**Ollama on AMD (as of our April 2026 testing, Ollama v0.3.x, ROCm 6.x):** ROCm support was inconsistent in our tests — GPU detection failed on some configurations, and CPU fallback is slow. Check the current AMD compatibility list at github.com/ollama/ollama before committing.',
            '**vLLM on AMD:** Full ROCm support since v0.6.0. Works well, but requires manual ROCm/HIP driver setup. Good if you\'re past the setup gauntlet.',
            '**Text Generation WebUI:** Excellent AMD ROCm support. Best user experience on AMD. Recommended.',
            '**Llama.cpp:** Native HIP backend. Solid performance. Easiest AMD path. Recommended.',
            '**LM Studio:** NVIDIA only. No AMD support.',
            'As of April 2026: vLLM + llama.cpp are your AMD paths. Ollama is not reliable.',
          ],
          image: '/images/best-amd-gpus-local-llm-software-support-hero-en.webp',
          imageCaption: 'llama.cpp and Text Generation WebUI are the reliable AMD paths in 2026 -- Ollama\'s ROCm support remains inconsistent.',
        },
        'when-buy-amd': {
          title: 'When Should You Actually Buy AMD Over NVIDIA?',
          snippetBlocks: [
            { type: 'one-sentence', text: 'Buy AMD if you find a used RX 7900 XTX under $450 or already own AMD hardware; skip AMD if you want plug-and-play simplicity with Ollama.' },
            { type: 'plain-terms', text: 'AMD beats NVIDIA on price-per-gigabyte of VRAM, but the setup process is harder. If you are new to local LLMs, start with NVIDIA.' },
          ],
          content: [
            'Buy AMD if:',
            '- You find a used RX 7900 XTX for <$450 (under-priced vs. RTX 4090 value).',
            '- You already own AMD hardware and want ecosystem consistency.',
            '- You\'re building a cluster and value compute-per-dollar over ease-of-setup.',
            'Don\'t buy AMD if:',
            '- You want a plug-and-play experience. NVIDIA CUDA is faster to get working.',
            '- You need Ollama. AMD ROCm support for Ollama has been inconsistent in community testing (as of 2026).',
            '- You\'re time-constrained. ROCm debugging can eat 10+ hours.',
          ],
        },
        'mistakes': {
          title: 'What Are the Most Common AMD Adoption Mistakes?',
          items: [
            'Buying RX 6700 (12GB) thinking it\'s a 3060 12GB equivalent--it\'s 20% slower and often harder to find used.',
            'Assuming ROCm "just works" like CUDA--plan 5-10 hours of troubleshooting driver and kernel compatibility.',
            'Using Ollama with AMD expecting seamless integration — ROCm support was inconsistent in our April 2026 testing (Ollama v0.3.x, ROCm 6.x); llama.cpp or vLLM are better bets.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'Next steps',
          items: [
            '[Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm) — On a budget? Best value GPUs for LLM inference →',
            '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD vs Apple vs CPU — which platform fits your workflow? →',
            '[How Much VRAM Do I Need?](/local-llms/how-much-vram-local-llm) — Match your GPU VRAM to model size →',
          ],
        },
        'regionalContext': {
          id: 'regional-context',
          title: 'How Do Regional Data Laws Affect the AMD vs NVIDIA Decision?',
          content: [
            '**EU GDPR and UK DPA: Local inference on AMD hardware is fully compliant by design.** Running Qwen3 or Llama 3.3 on an AMD RX 7900 XTX means zero data leaves your device — satisfying GDPR Article 25 (data minimisation) and Article 32 (technical security measures) without additional configuration. AMD ROCm on-premise deployments are increasingly chosen by European enterprises for sensitive document processing and legal AI workflows.',
            '**Japan APPI and Singapore PDPA: On-device inference eliminates cross-border data transfer risk.** Japanese enterprises under the amended APPI (2022) face strict requirements for personal data transferred outside Japan. AMD ROCm local deployments at Japanese universities, financial institutions, and healthcare providers sidestep these requirements entirely — no data residency audit needed when inference is fully local.',
            '**China DSL and PIPL: AMD hardware is subject to the same domestic deployment logic as NVIDIA.** Chinese enterprises running local LLMs under the Data Security Law (2021) and PIPL (2021) benefit from on-premise AMD deployments the same way as NVIDIA: data never leaves the local network. AMD ROCm is not subject to the US GPU export controls that affect high-end NVIDIA A100/H100 server chips (consumer RX cards are unrestricted).',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Frequently Asked Questions',
          faqs: [
            { q: 'Should I buy AMD RX 6800 XT or NVIDIA RTX 3080 for local LLMs?', a: 'RTX 3080 if you value simplicity (CUDA "just works"). RX 6800 XT if you want 25% better value and don\'t mind 5-10 hours ROCm setup.' },
            { q: 'Is AMD RX 7900 XTX better than RTX 4090?', a: 'Similar speed, same VRAM (24GB). RX 7900 XTX is $200-300 cheaper used ($450-550 vs. $1,000-1,300). ROCm setup is the trade-off.' },
            { q: 'Can I use AMD GPUs with Ollama?', a: 'Technically yes. In our April 2026 testing (Ollama v0.3.x, ROCm 6.x), ROCm support was inconsistent — GPU detection failed on some configurations and CPU fallback was common. Check the current AMD compatibility list at github.com/ollama/ollama; for reliable AMD inference today, vLLM or llama.cpp are the safer paths.' },
            { q: 'What\'s the best AMD path for local LLMs in 2026?', a: 'Llama.cpp (HIP backend) + Text Generation WebUI. Both have solid AMD support. Avoid Ollama.' },
            { q: 'Do I need Ubuntu for AMD ROCm, or does Windows work?', a: 'Windows support exists (HIP on Windows), but in our April 2026 testing it was less stable than Ubuntu. Ubuntu is the recommended path.' },
            { q: 'Is RX 6700, 6700 XT, or 6750 good for 7B models?', a: 'RX 6700 (12GB) works but is 20% slower than RX 6800 XT. RX 6700 XT (12GB, same VRAM) has ~15% faster clocks than the non-XT card but is still behind the 6800 XT. Only buy either if <$250. Otherwise, stretch to 6800 XT.' },
            { q: 'Is the RX 6900 XT worth buying for local LLMs?', a: 'Not really. The RX 6900 XT (16GB) is only marginally faster than the RX 6800 XT, is rarer used, and costs $350-400 vs. $300-350 for the 6800 XT. The price bump isn\'t worth it -- buy the 6800 XT instead.' },
            { q: 'Is the AMD Radeon 680M good for running local LLMs?', a: 'The Radeon 680M is integrated graphics built into Ryzen 6000/7000 mobile APUs -- it is not the same product as the discrete RX 6800M or RX 6800 XT. It has no dedicated VRAM and shares system RAM instead, so it is only viable for small quantized models (roughly 3B parameters or less at Q4) and will run noticeably slower than any discrete GPU on this page. For serious local LLM use, a discrete card like the RX 6800 XT is the better choice.' },
            { q: 'Can I mix AMD and NVIDIA GPUs in one system?', a: 'Theoretically yes, but management is a nightmare. Each GPU needs its own CUDA/HIP runtime. Not recommended.' },
            { q: 'How much VRAM does the AMD RX 7900 XTX have?', a: 'The AMD RX 7900 XTX has 24GB GDDR6 VRAM -- the same as RTX 4090. This makes it the most capable AMD card for running 70B models at Q4.' },
            { q: 'Is AMD ROCm stable enough for production LLM inference?', a: 'ROCm 6.x (2025) is significantly more stable than ROCm 5.x. For production use, llama.cpp HIP backend on Ubuntu 22.04+ is the most reliable stack. In our April 2026 testing (Ollama v0.3.x, ROCm 6.x), Ollama\'s ROCm support was inconsistent — GPU detection failed on some configurations. Check the current AMD compatibility list at github.com/ollama/ollama before committing.' },
            { q: 'What is the best AMD GPU for under $400?', a: 'AMD RX 6800 XT (16GB, ~$220-300 used) is the best value AMD GPU under $400. It runs 13B models at Q4 smoothly and 7B models at Q8 comfortably via llama.cpp HIP backend.' },
            { q: 'Can I run local LLMs on an AMD RX 6800M laptop GPU?', a: 'Yes. The AMD RX 6800M (mobile variant, 12GB GDDR6) can run 13B models at Q4_K_M (~8 GB) or 7B models at Q8_0 (~7 GB). Use llama.cpp HIP backend on Linux or Windows. ROCm driver support for RX 6800M is solid on Ubuntu 22.04+ with Linux Kernel 6.2+. Windows HIP support is newer (less stable). Speed: ~8-12 tokens/sec on CPU-only fallback, ~30-40 tokens/sec with HIP acceleration on RX 6800M.' },
          ],
        },
        'relatedReading': {
          title: 'Related Reading',
          items: [
            '[Best Budget GPUs for Local LLMs](/local-llms/best-budget-gpus-local-llm)',
            '[Best GPUs for Local LLMs](/local-llms/best-gpus-for-local-llms)',
            '[GPU vs CPU vs Apple Silicon](/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Text Generation WebUI vs vLLM vs Llama.cpp](/local-llms/text-generation-webui-vs-vllm-vs-llamacpp)',
            '[Laptop vs Desktop for Local LLMs](/local-llms/laptop-vs-desktop-local-llm) — Desktop vs laptop cost and performance comparison for AI.',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            'AMD ROCm documentation and GitHub: HIP compiler, driver compatibility matrix, LLM inference examples',
            'vLLM GitHub: AMD/ROCm backend implementation and support status (v0.6.0+)',
            'Llama.cpp GitHub: HIP backend for AMD GPU support',
            'AMD GPUs deliver strong token/second speeds, but speed alone doesn\'t determine response quality. What you ask the model matters as much as how fast it responds: [context windows explained](https://www.promptquorum.com/prompt-engineering/context-windows-explained-why-ai-forgets) covers how to structure longer requests within GPU memory limits.',
          ],
        },
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'GPU Buying Guides',
      title: 'Mejores GPUs AMD para LLMs locales',
      seoTitle: 'Mejores GPUs AMD para LLMs locales 2026: Guía de comparación',
      intro: '**La AMD RX 6800 XT y la RX 7900 XTX son alternativas sólidas a NVIDIA, con un rendimiento por dólar 15-20% mejor, pero sufren de menor compatibilidad con ONNX Runtime y los drivers de vLLM.** A partir de abril de 2026, AMD ROCm (HIP) ha madurado, aunque las capas de compatibilidad añaden fricción. NVIDIA CUDA sigue siendo el camino más sencillo para LLMs locales. Usa AMD solo si encuentras una gran oferta de segunda mano o ya tienes hardware AMD.',
      metaDescription: 'Compara AMD RX 6800 XT y RX 7900 XTX vs NVIDIA RTX: configuración ROCm, rendimiento en vLLM, coste por TFLOP y cuándo comprar AMD. Actualizado 2026.',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-es.webp',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**La AMD RX 6800 XT y la RX 7900 XTX son alternativas sólidas a NVIDIA, con un rendimiento por dólar 15-20% mejor, pero sufren de menor compatibilidad con ONNX Runtime y los drivers de vLLM.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan sus flujos de trabajo de LLMs locales',
      readTime: '7 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Mejores GPUs AMD para LLMs locales 2026: RX 7900 XTX',
        'description': 'Compara AMD RX 7900 XTX, 6800 XT vs NVIDIA RTX. Configuración de ROCm, rendimiento en vLLM, análisis de coste por TFLOP. Cuándo elegir AMD sobre CUDA. Abril 2026.',
        'url': 'https://www.promptquorum.com/es/local-llms/best-amd-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'AMD GPU' },
          { '@type': 'Thing', 'name': 'ROCm' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'inferencia local de LLM' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': '¿Debo comprar la AMD RX 6800 XT o la NVIDIA RTX 3080 para LLMs locales?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080 si valoras la simplicidad (CUDA funciona sin problemas). RX 6800 XT si quieres un 25% más de valor y no te importan 5-10 horas de configuración de ROCm.' }
          },
          {
            '@type': 'Question',
            'name': '¿La AMD RX 7900 XTX es mejor que la RTX 4090?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Velocidad similar, misma VRAM (24GB). La RX 7900 XTX es $200-300 más barata de segunda mano ($450-550 vs. $1,000-1,300). La configuración de ROCm es el contrapeso.' }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo usar GPUs AMD con Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Técnicamente sí. En nuestras pruebas de abril de 2026 (Ollama v0.3.x, ROCm 6.x), el soporte ROCm fue inconsistente — la detección de GPU falló en algunas configuraciones y el fallback a CPU fue frecuente. Compruebe la lista de compatibilidad AMD actualizada en github.com/ollama/ollama; para inferencia AMD fiable hoy, vLLM o llama.cpp son opciones más seguras.' }
          },
          {
            '@type': 'Question',
            'name': '¿Cuál es el mejor camino AMD para LLMs locales en 2026?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama.cpp (backend HIP) + Text Generation WebUI. Ambos tienen buen soporte para AMD. Evita Ollama.' }
          },
          {
            '@type': 'Question',
            'name': '¿Necesito Ubuntu para AMD ROCm, o Windows funciona también?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'El soporte en Windows existe (HIP on Windows), pero es más reciente y menos estable. Ubuntu es el camino recomendado.' }
          },
          {
            '@type': 'Question',
            'name': '¿Es la RX 6700, la 6700 XT o la 6750 buena para modelos de 7B?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'La RX 6700 (12GB) funciona, pero es un 20% más lenta que la RX 6800 XT. La RX 6700 XT (12GB, misma VRAM) tiene unos relojes ~15% más rápidos que la versión no-XT, pero sigue por detrás de la 6800 XT. Cómprala solo si cuesta menos de $250. Si no, apuesta por la 6800 XT.' }
          },
          {
            '@type': 'Question',
            'name': '¿Merece la pena la RX 6900 XT para LLMs locales?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'No demasiado. La RX 6900 XT (16GB) es solo marginalmente más rápida que la RX 6800 XT, es más rara de segunda mano y cuesta $350-400 frente a $300-350 de la 6800 XT. El sobrecoste no compensa -- compra la 6800 XT en su lugar.' }
          },
          {
            '@type': 'Question',
            'name': '¿Es buena la AMD Radeon 680M para ejecutar LLMs locales?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'La Radeon 680M es gráficos integrados dentro de las APU móviles Ryzen 6000/7000 -- no es el mismo producto que la RX 6800M o la RX 6800 XT, que son tarjetas discretas. No tiene VRAM dedicada, sino que comparte la RAM del sistema, por lo que solo es viable para modelos pequeños cuantizados (aproximadamente 3B de parámetros o menos en Q4) y será notablemente más lenta que cualquier GPU discreta de esta guía. Para un uso serio de LLMs locales, una tarjeta discreta como la RX 6800 XT es la mejor opción.' }
          },
          {
            '@type': 'Question',
            'name': '¿Puedo combinar GPUs AMD y NVIDIA en un mismo sistema?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Teóricamente sí, pero la gestión es una pesadilla. Cada GPU necesita su propio runtime CUDA/HIP. No se recomienda.' }
          },
        ]
      },
      toc: [
        { label: 'Puntos clave', anchor: '#tldr' },
        { label: '¿Qué GPUs AMD realmente valen la pena?', anchor: '#which-amd' },
        { label: '¿Cómo se comparan las GPUs AMD con RTX en precio y rendimiento?', anchor: '#amd-vs-nvidia' },
        { label: '¿Cuál es la fricción de configuración de ROCm para AMD?', anchor: '#rocm-setup' },
        { label: '¿Puedes ejecutar Ollama y vLLM en AMD?', anchor: '#software-support' },
        { label: '¿Cuándo deberías comprar AMD en lugar de NVIDIA?', anchor: '#when-buy-amd' },
        { label: 'Errores comunes al adoptar AMD', anchor: '#mistakes' },
        { label: 'Preguntas frecuentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'La AMD RX 6800 XT (16GB, ~$300-350 de segunda mano) y la RX 7900 XTX (24GB, ~$400-500 de segunda mano) son las únicas opciones viables para LLMs locales. Los precios pueden variar según tu país.',
            'Rendimiento por dólar: AMD es un 20-30% más barata que NVIDIA, pero la fricción de software cuesta entre 5 y 10 horas de configuración.',
            'Ollama: soporte AMD limitado (el path de ROCm fue inconsistente en nuestras pruebas de abril de 2026, Ollama v0.3.x / ROCm 6.x — la detección de GPU falló en algunas configuraciones; el fallback a CPU es lento). Compruebe github.com/ollama/ollama para compatibilidad AMD actual.',
            'vLLM: soporte completo para AMD ROCm desde v0.6.0, pero la configuración requiere instalar drivers manualmente. Funciona bien una vez superada la fase de instalación.',
            'Text Generation WebUI: excelente soporte para AMD vía ROCm. La mejor experiencia de usuario en AMD.',
            'Llama.cpp: soporte nativo para AMD (backend HIP). Rendimiento sólido. El camino recomendado en AMD.',
            'Coste de configuración: planifica 5-10 horas de depuración de drivers ROCm, compilación de HIPCC y compatibilidad de kernel.',
            'Veredicto (abril 2026): usa AMD solo si ya tienes hardware AMD o encuentras una oferta de segunda mano excelente (~$300 por una tarjeta de 16GB). Si no, NVIDIA CUDA sigue siendo más sencillo.',
          ],
        },
        'which-amd': {
          title: '¿Qué GPUs AMD realmente valen la pena?',
          items: [
            '**RX 6800 XT** (16GB GDDR6): la reina del valor en AMD. Lanzada en 2020. Sigue siendo sólida para inferencia de 7B-22B. De segunda mano: ~$300-350.',
            '**RX 6900 XT** (16GB GDDR6): marginalmente más rápida que la 6800 XT. Poco común. De segunda mano: ~$350-400. El aumento de precio no merece la pena.',
            '**RX 7900 XT** (20GB GDDR6): arquitectura RDNA 3 más nueva. Un 20% más rápida que la 6800 XT. De segunda mano: ~$400-480. Buena para 70B Q4.',
            '**RX 7900 XTX** (24GB GDDR6): la GPU AMD de consumo de gama alta. 24GB de VRAM es un punto de inflexión para modelos de 70B. De segunda mano: ~$450-550. Velocidad comparable a la RTX 4090.',
            '**Radeon Pro W6800 (32GB)**: tarjeta de nivel empresarial, más barata de segunda mano (~$200-300). Más lenta, pero los 32GB son excelentes para 70B Q8. Opción de nicho.',
          ],
        },
        'amd-vs-nvidia': {
          title: '¿Cómo se comparan las GPUs AMD con RTX en precio y rendimiento?',
          rows: [
            { 'GPU': 'RX 6800 XT', 'VRAM': '16GB', 'TFLOPS': '1,952', 'Precio (2ª mano)': '~$300-350', 'Rend./$ vs. RTX': '+25%', 'RTX equivalente': 'RTX 3080 (más lenta)' },
            { 'GPU': 'RX 7900 XT', 'VRAM': '20GB', 'TFLOPS': '2,540', 'Precio (2ª mano)': '~$400-480', 'Rend./$ vs. RTX': '+20%', 'RTX equivalente': 'RTX 4080 (similar)' },
            { 'GPU': 'RX 7900 XTX', 'VRAM': '24GB', 'TFLOPS': '2,750', 'Precio (2ª mano)': '~$450-550', 'Rend./$ vs. RTX': '+15%', 'RTX equivalente': 'RTX 4090 (velocidad similar)' },
            { 'GPU': 'RTX 3080', 'VRAM': '10GB', 'TFLOPS': '1,456', 'Precio (2ª mano)': '~$350-400', 'Rend./$ vs. RTX': '--', 'RTX equivalente': '--' },
            { 'GPU': 'RTX 4090', 'VRAM': '24GB', 'TFLOPS': '2,752', 'Precio (2ª mano)': '~$1,000-1,300', 'Rend./$ vs. RTX': '--', 'RTX equivalente': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', 'Precio (2ª mano)', 'Rend./$ vs. RTX', 'RTX equivalente'],
        
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-es.webp',
          imageCaption: 'La RX 7900 XTX iguala la velocidad y la VRAM de la RTX 4090 por aproximadamente el 60% del precio — la contrapartida es la fricción de configuración de ROCm.',
        },
        'rocm-setup': {
          title: '¿Cuál es la fricción de configuración de ROCm para AMD?',
          content: [
            '**1. Instala los drivers AMD ROCm: `apt-get install rocm-dkms` (Ubuntu). En Windows, usa el instalador .exe manual. Tarda unos 30 min.**',
            '2. Verifica el compilador HIP: `hipcc --version`. A menudo falla en el primer intento. Depura la compatibilidad de kernel para tu GPU.',
            '3. Instala HIPCC (el compilador HIP-to-C++ de AMD): `apt-get install hip-runtime-amd`. Otra cadena de dependencias.',
            '4. Prueba con un LLM pequeño: ejecuta inferencia para verificar que la aceleración por GPU funciona. El fallback a CPU es frecuente.',
            '5. Soluciona incompatibilidades de versión de drivers: ROCm v5.7 funciona con el kernel 5.15 pero no con 6.x. Consume 2-4 horas de depuración.',
            'NVIDIA CUDA en comparación: `nvidia-cuda-toolkit` → un apt-get, acceso instantáneo a la GPU. AMD requiere entre 5 y 10 veces más fricción.',
          ],
        },
        'software-support': {
          title: '¿Puedes ejecutar Ollama y vLLM en AMD?',
          content: [
            '**Ollama en AMD (según nuestras pruebas de abril de 2026, Ollama v0.3.x, ROCm 6.x):** el soporte ROCm fue inconsistente en nuestras pruebas — la detección de GPU falló en algunas configuraciones, el fallback a CPU es lento. Compruebe la lista de compatibilidad AMD actualizada en github.com/ollama/ollama antes de comprometerse.',
            '**vLLM en AMD:** soporte completo para ROCm desde v0.6.0. Funciona bien, pero requiere configuración manual de drivers ROCm/HIP. Buena opción si superas la fase de instalación.',
            '**Text Generation WebUI:** excelente soporte para AMD ROCm. La mejor experiencia de usuario en AMD. Recomendado.',
            '**Llama.cpp:** backend HIP nativo. Rendimiento sólido. El camino AMD más sencillo. Recomendado.',
            '**LM Studio:** solo NVIDIA. Sin soporte para AMD.',
            'A partir de abril de 2026: vLLM + llama.cpp son tus opciones en AMD. Ollama no es fiable.',
          ],
        
          image: '/images/best-amd-gpus-local-llm-software-support-hero-es.webp',
          imageCaption: 'llama.cpp y Text Generation WebUI son las rutas fiables para AMD en 2026 — el soporte ROCm de Ollama sigue siendo inconsistente.',
        },
        'when-buy-amd': {
          title: '¿Cuándo deberías comprar AMD en lugar de NVIDIA?',
          content: [
            'Compra AMD si:',
            '- Encuentras una RX 7900 XTX de segunda mano por menos de $450 (infravalorada frente al valor de la RTX 4090).',
            '- Ya tienes hardware AMD y quieres mantener coherencia en el ecosistema.',
            '- Estás construyendo un clúster y priorizas el rendimiento por dólar sobre la facilidad de configuración.',
            'No compres AMD si:',
            '- Quieres una experiencia plug-and-play. NVIDIA CUDA es más rápido de poner en marcha.',
            '- Necesitas Ollama. El soporte AMD ROCm para Ollama ha sido inconsistente en pruebas comunitarias (en 2026).',
            '- Tienes poco tiempo. La depuración de ROCm puede consumir más de 10 horas.',
          ],
        },
        'mistakes': {
          title: 'Errores comunes al adoptar AMD',
          items: [
            'Comprar una RX 6700 (12GB) creyendo que equivale a una 3060 12GB — es un 20% más lenta y a menudo difícil de encontrar de segunda mano.',
            'Asumir que ROCm «simplemente funciona» como CUDA — planifica entre 5 y 10 horas de solución de problemas de compatibilidad de drivers y kernel.',
            'Usar Ollama con AMD esperando una integración fluida — el soporte ROCm fue inconsistente en nuestras pruebas de abril de 2026 (Ollama v0.3.x, ROCm 6.x); llama.cpp o vLLM son mejores opciones.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'Próximos pasos',
          items: [
            '[Mejores GPU de bajo costo para LLM local](/es/local-llms/best-budget-gpus-local-llm) — ¿Presupuesto ajustado? Las mejores GPU calidad-precio →',
            '[GPU vs CPU vs Apple Silicon](/es/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD, Apple o CPU — ¿qué plataforma te conviene? →',
            '[¿Cuánta VRAM necesito?](/es/local-llms/how-much-vram-local-llm) — Ajusta la VRAM de tu GPU al tamaño del modelo →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Debo comprar la AMD RX 6800 XT o la NVIDIA RTX 3080 para LLMs locales?', a: 'RTX 3080 si valoras la simplicidad (CUDA funciona sin problemas). RX 6800 XT si quieres un 25% más de valor y no te importan 5-10 horas de configuración de ROCm.' },
            { q: '¿La AMD RX 7900 XTX es mejor que la RTX 4090?', a: 'Velocidad similar, misma VRAM (24GB). La RX 7900 XTX es $200-300 más barata de segunda mano ($450-550 vs. $1,000-1,300). La configuración de ROCm es el contrapeso.' },
            { q: '¿Puedo usar GPUs AMD con Ollama?', a: 'Técnicamente sí. En nuestras pruebas de abril de 2026 (Ollama v0.3.x, ROCm 6.x), el soporte ROCm fue inconsistente — la detección de GPU falló en algunas configuraciones y el fallback a CPU fue frecuente. Compruebe la lista de compatibilidad AMD actualizada en github.com/ollama/ollama; para inferencia AMD fiable hoy, vLLM o llama.cpp son opciones más seguras.' },
            { q: '¿Cuál es el mejor camino AMD para LLMs locales en 2026?', a: 'Llama.cpp (backend HIP) + Text Generation WebUI. Ambos tienen buen soporte para AMD. Evita Ollama.' },
            { q: '¿Necesito Ubuntu para AMD ROCm, o Windows funciona también?', a: 'El soporte en Windows existe (HIP on Windows), pero es más reciente y menos estable. Ubuntu es el camino recomendado.' },
            { q: '¿Es la RX 6700, la 6700 XT o la 6750 buena para modelos de 7B?', a: 'La RX 6700 (12GB) funciona, pero es un 20% más lenta que la RX 6800 XT. La RX 6700 XT (12GB, misma VRAM) tiene unos relojes ~15% más rápidos que la versión no-XT, pero sigue por detrás de la 6800 XT. Cómprala solo si cuesta menos de $250. Si no, apuesta por la 6800 XT.' },
            { q: '¿Merece la pena la RX 6900 XT para LLMs locales?', a: 'No demasiado. La RX 6900 XT (16GB) es solo marginalmente más rápida que la RX 6800 XT, es más rara de segunda mano y cuesta $350-400 frente a $300-350 de la 6800 XT. El sobrecoste no compensa -- compra la 6800 XT en su lugar.' },
            { q: '¿Es buena la AMD Radeon 680M para ejecutar LLMs locales?', a: 'La Radeon 680M es gráficos integrados dentro de las APU móviles Ryzen 6000/7000 -- no es el mismo producto que la RX 6800M o la RX 6800 XT, que son tarjetas discretas. No tiene VRAM dedicada, sino que comparte la RAM del sistema, por lo que solo es viable para modelos pequeños cuantizados (aproximadamente 3B de parámetros o menos en Q4) y será notablemente más lenta que cualquier GPU discreta de esta guía. Para un uso serio de LLMs locales, una tarjeta discreta como la RX 6800 XT es la mejor opción.' },
            { q: '¿Puedo combinar GPUs AMD y NVIDIA en un mismo sistema?', a: 'Teóricamente sí, pero la gestión es una pesadilla. Cada GPU necesita su propio runtime CUDA/HIP. No se recomienda.' },
          ],
        },
        'relatedReading': {
          title: 'Lecturas relacionadas',
          items: [
            '[Mejores GPUs económicas para LLMs locales](/es/local-llms/best-budget-gpus-local-llm)',
            '[Mejores GPUs para LLMs locales](/es/local-llms/best-gpus-for-local-llms)',
            '[GPU vs CPU vs Apple Silicon](/es/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Text Generation WebUI vs vLLM vs Llama.cpp](/es/local-llms/text-generation-webui-vs-vllm-vs-llamacpp)',
            '[Laptop vs Desktop para LLMs locales](/es/local-llms/laptop-vs-desktop-local-llm) — Comparación de coste y rendimiento entre portátil y sobremesa para IA.',
          ],
        },
        'sources': {
          title: 'Fuentes',
          items: [
            'Documentación de AMD ROCm y GitHub: compilador HIP, matriz de compatibilidad de drivers, ejemplos de inferencia con LLMs',
            'vLLM GitHub: implementación del backend AMD/ROCm y estado de soporte (v0.6.0+)',
            'Llama.cpp GitHub: backend HIP para soporte de GPUs AMD',
            'Las GPUs AMD ofrecen buenas velocidades en tokens por segundo, pero la velocidad por sí sola no determina la calidad de las respuestas. Lo que le preguntas al modelo importa tanto como la rapidez de respuesta: [context windows explained](https://www.promptquorum.com/prompt-engineering/context-windows-explained-why-ai-forgets) explica cómo estructurar solicitudes más largas dentro de los límites de memoria de la GPU.',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/es/local-llms/best-amd-gpus-local-llm',
        name: 'Mejores GPUs AMD para LLMs locales',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'La AMD RX 6800 XT (16GB, ~$300-350 de segunda mano) y la RX 7900 XTX (24GB, ~$400-500 de segunda mano) son las únicas opciones viables para LLMs locales.' },
          { '@type': 'ListItem', position: 2, name: 'Rendimiento por dólar: AMD es un 20-30% más barata que NVIDIA, pero la fricción de software cuesta entre 5 y 10 horas de configuración.' },
          { '@type': 'ListItem', position: 3, name: 'Ollama: soporte AMD limitado (el path de ROCm fue inconsistente en nuestras pruebas de abril de 2026, Ollama v0.3.x / ROCm 6.x; el fallback a CPU es lento). Compruebe github.com/ollama/ollama para compatibilidad AMD actual.' },
          { '@type': 'ListItem', position: 4, name: 'vLLM: soporte completo para AMD ROCm desde v0.6.0, pero la configuración requiere instalar drivers manualmente.' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI: excelente soporte para AMD vía ROCm. La mejor experiencia de usuario en AMD.' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp: soporte nativo para AMD (backend HIP). Rendimiento sólido. El camino recomendado en AMD.' },
          { '@type': 'ListItem', position: 7, name: 'Coste de configuración: planifica 5-10 horas de depuración de drivers ROCm, compilación de HIPCC y compatibilidad de kernel.' },
          { '@type': 'ListItem', position: 8, name: 'Veredicto (abril 2026): usa AMD solo si ya tienes hardware AMD o encuentras una oferta de segunda mano excelente. Si no, NVIDIA CUDA sigue siendo más sencillo.' },
        ],
      },
    },
    ar: {
      freshness_tier: 'semi_annual',
      theme: 'GPU Buying Guides',
      title: 'أفضل كروت رسوميات ⁨AMD⁩ لنماذج ⁨LLM⁩ المحلية',
      seoTitle: 'كروت ⁨AMD⁩ لنماذج ⁨LLM⁩ المحلية: ⁨RX 7900 XTX⁩ مقابل ⁨RTX⁩',
      intro: '**AMD RX 6800 XT وRX 7900 XTX بديلان قويان لـ NVIDIA، بأداء لكل دولار أفضل بنسبة 15-20%، لكنهما يعانيان من توافق أقل مع ONNX Runtime وبرامج تشغيل vLLM.** اعتبارًا من أبريل 2026، نضج AMD ROCm (HIP)، رغم أن طبقات التوافق تضيف احتكاكًا. ولا يزال NVIDIA CUDA المسار الأبسط لنماذج LLM المحلية. استخدم AMD فقط إن وجدت عرضًا مستعملًا رائعًا أو كنت تملك بالفعل عتاد AMD.',
      metaDescription: '⁨RX 7900 XTX⁩ بسعة ⁨24GB VRAM⁩ توازي ⁨RTX 4090⁩ بسعر أقل بـ ⁨300⁩ دولار. مقارنة ⁨ROCm⁩ مقابل ⁨CUDA⁩، دعم ⁨Ollama⁩ و⁨llama.cpp⁩، ومتى يستحق ⁨AMD⁩ الاختيار في ⁨2026⁩.',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-ar.webp',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**AMD RX 6800 XT وRX 7900 XTX بديلان قويان لـ NVIDIA، بأداء لكل دولار أفضل بنسبة 15-20%، لكنهما يعانيان من توافق أقل مع ONNX Runtime وبرامج تشغيل vLLM.**',
      audience: 'المطورون المعتادون على Ollama أو LM Studio الذين يحسّنون تدفقات عملهم مع نماذج LLM المحلية',
      readTime: '7 دقائق للقراءة',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'أفضل كروت رسوميات AMD لنماذج LLM المحلية 2026: RX 7900 XTX',
        'description': 'قارن AMD RX 7900 XTX و6800 XT مقابل NVIDIA RTX. إعداد ROCm، الأداء في vLLM، تحليل التكلفة لكل TFLOP. متى تختار AMD على CUDA. أبريل 2026.',
        'url': 'https://www.promptquorum.com/ar/local-llms/best-amd-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-07-14',
        'inLanguage': 'ar',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'AMD GPU' },
          { '@type': 'Thing', 'name': 'ROCm' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'الاستدلال المحلي لـ LLM' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'ar',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'هل أشتري AMD RX 6800 XT أم NVIDIA RTX 3080 لنماذج LLM المحلية؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080 إن كنت تقدّر البساطة (CUDA يعمل دون مشاكل). RX 6800 XT إن أردت قيمة أكبر بنسبة 25% ولا تمانع 5-10 ساعات من إعداد ROCm.' }
          },
          {
            '@type': 'Question',
            'name': 'هل AMD RX 7900 XTX أفضل من RTX 4090؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'سرعة متماثلة، نفس VRAM (24GB). RX 7900 XTX أرخص بـ 200-300 دولار مستعملة (450-550 دولارًا مقابل 1,000-1,300 دولار). إعداد ROCm هو الثمن المقابل.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام كروت رسوميات AMD مع Ollama؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'تقنيًا نعم. وفقاً لاختباراتنا في أبريل 2026 (Ollama v0.3.x، ROCm 6.x): كان دعم ROCm غير متسق في اختباراتنا — فشل اكتشاف GPU في بعض التكوينات والتراجع إلى المعالج كان متكرراً. راجع قائمة التوافق الحالية مع AMD على github.com/ollama/ollama قبل الالتزام؛ vLLM أو llama.cpp هما المسارات الأكثر أماناً للاستدلال على AMD اليوم.' }
          },
          {
            '@type': 'Question',
            'name': 'ما أفضل مسار AMD لنماذج LLM المحلية في 2026؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama.cpp (خلفية HIP) + Text Generation WebUI. كلاهما بدعم جيد لـ AMD. تجنّب Ollama.' }
          },
          {
            '@type': 'Question',
            'name': 'هل أحتاج Ubuntu لـ AMD ROCm، أم يعمل Windows أيضًا؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'الدعم في Windows موجود (HIP on Windows)، لكنه أحدث وأقل استقرارًا. Ubuntu هو المسار الموصى به.' }
          },
          {
            '@type': 'Question',
            'name': 'هل RX 6700 أو RX 6700 XT أو 6750 جيد لنماذج 7B؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RX 6700 (12GB) يعمل، لكنه أبطأ بنسبة 20% من RX 6800 XT. RX 6700 XT (12GB، نفس سعة VRAM) يمتلك سرعة معالجة أعلى بنحو 15% من نسخة non-XT، لكنه يبقى أبطأ من 6800 XT. اشترِ أيًّا منهما فقط إن كلف أقل من 250 دولارًا. وإلا، راهن على 6800 XT.' }
          },
          {
            '@type': 'Question',
            'name': 'هل تستحق RX 6900 XT الشراء لنماذج LLM المحلية؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'ليس فعلًا. RX 6900 XT (16GB) أسرع بشكل هامشي فقط من RX 6800 XT، وأندر مستعملة، وتكلف 350-400 دولار مقابل 300-350 دولارًا لـ 6800 XT. فارق السعر لا يستحق العناء -- اشترِ 6800 XT بدلًا منها.' }
          },
          {
            '@type': 'Question',
            'name': 'هل AMD Radeon 680M جيد لتشغيل نماذج LLM المحلية؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Radeon 680M هو رسوميات مدمجة داخل معالجات Ryzen 6000/7000 المحمولة -- وهو ليس نفس منتج RX 6800M أو RX 6800 XT المنفصلين. لا يمتلك ذاكرة VRAM مخصصة، بل يشارك ذاكرة النظام (RAM) بدلًا من ذلك، لذا فهو مناسب فقط للنماذج الصغيرة المكمّمة (نحو 3B معامل أو أقل بصيغة Q4)، وسيعمل أبطأ بشكل ملحوظ من أي بطاقة رسوميات منفصلة في هذا الدليل. للاستخدام الجاد لنماذج LLM المحلية، بطاقة منفصلة مثل RX 6800 XT هي الخيار الأفضل.' }
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني الجمع بين كروت رسوميات AMD وNVIDIA في نظام واحد؟',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'نظريًا نعم، لكن الإدارة كابوس. يحتاج كل GPU بيئة CUDA/HIP خاصة به. غير موصى به.' }
          },
        ]
      },
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#tldr' },
        { label: 'أي كروت رسوميات AMD تستحق العناء فعلًا؟', anchor: '#which-amd' },
        { label: 'كيف تُقارن كروت رسوميات AMD بـ RTX في السعر والأداء؟', anchor: '#amd-vs-nvidia' },
        { label: 'ما احتكاك إعداد ROCm لـ AMD؟', anchor: '#rocm-setup' },
        { label: 'هل يمكنك تشغيل Ollama وvLLM على AMD؟', anchor: '#software-support' },
        { label: 'متى ينبغي أن تشتري AMD بدلًا من NVIDIA؟', anchor: '#when-buy-amd' },
        { label: 'الأخطاء الشائعة عند تبنّي AMD', anchor: '#mistakes' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'AMD RX 6800 XT (16GB، نحو 300-350 دولارًا مستعملة) وRX 7900 XTX (24GB، نحو 400-500 دولار مستعملة) هما الخياران الوحيدان القابلان للاستخدام لنماذج LLM المحلية. قد تتفاوت الأسعار حسب بلدك.',
            'الأداء لكل دولار: AMD أرخص بنسبة 20-30% من NVIDIA، لكن احتكاك البرمجيات يكلف 5 إلى 10 ساعات من الإعداد.',
            'Ollama: دعم AMD محدود (مسار ROCm كان غير متسق في اختباراتنا في أبريل 2026، Ollama v0.3.x / ROCm 6.x — فشل اكتشاف GPU في بعض التكوينات؛ التراجع إلى المعالج بطيء). راجع github.com/ollama/ollama للتوافق الحالي مع AMD.',
            'vLLM: دعم كامل لـ AMD ROCm منذ الإصدار v0.6.0، لكن الإعداد يتطلب تثبيت برامج التشغيل يدويًا. يعمل جيدًا بعد تجاوز مرحلة التثبيت.',
            'Text Generation WebUI: دعم ممتاز لـ AMD عبر ROCm. أفضل تجربة مستخدم على AMD.',
            'Llama.cpp: دعم أصلي لـ AMD (خلفية HIP). أداء قوي. المسار الموصى به على AMD.',
            'تكلفة الإعداد: خطّط لـ 5-10 ساعات من تصحيح برامج تشغيل ROCm، وتجميع HIPCC، وتوافق النواة.',
            'الحكم (أبريل 2026): استخدم AMD فقط إن كنت تملك بالفعل عتاد AMD أو وجدت عرضًا مستعملًا ممتازًا (نحو 300 دولار لكرت بسعة 16GB). وإلا، يبقى NVIDIA CUDA أبسط.',
          ],
        },
        'which-amd': {
          title: 'أي كروت رسوميات AMD تستحق العناء فعلًا؟',
          items: [
            '**RX 6800 XT** (16GB GDDR6): ملكة القيمة في AMD. صدر في 2020. لا يزال قويًا لاستدلال 7B-22B. مستعمل: نحو 300-350 دولارًا.',
            '**RX 6900 XT** (16GB GDDR6): أسرع هامشيًا من 6800 XT. غير شائع. مستعمل: نحو 350-400 دولار. زيادة السعر لا تستحق العناء.',
            '**RX 7900 XT** (20GB GDDR6): بنية RDNA 3 أحدث. أسرع بنسبة 20% من 6800 XT. مستعمل: نحو 400-480 دولارًا. جيد لـ 70B Q4.',
            '**RX 7900 XTX** (24GB GDDR6): كرت AMD الاستهلاكي الراقي. 24GB من VRAM نقطة تحول لنماذج 70B. مستعمل: نحو 450-550 دولارًا. سرعة مماثلة لـ RTX 4090.',
            '**Radeon Pro W6800 (32GB)**: كرت بمستوى المؤسسات، أرخص مستعملًا (نحو 200-300 دولار). أبطأ، لكن 32GB ممتازة لـ 70B Q8. خيار متخصص.',
          ],
        },
        'amd-vs-nvidia': {
          title: 'كيف تُقارن كروت رسوميات AMD بـ RTX في السعر والأداء؟',
          rows: [
            { 'GPU': 'RX 6800 XT', 'VRAM': '16GB', 'TFLOPS': '1,952', 'Precio (2ª mano)': 'نحو 300-350 دولارًا', 'Rend./$ vs. RTX': '+25%', 'RTX equivalente': 'RTX 3080 (أبطأ)' },
            { 'GPU': 'RX 7900 XT', 'VRAM': '20GB', 'TFLOPS': '2,540', 'Precio (2ª mano)': 'نحو 400-480 دولارًا', 'Rend./$ vs. RTX': '+20%', 'RTX equivalente': 'RTX 4080 (متماثل)' },
            { 'GPU': 'RX 7900 XTX', 'VRAM': '24GB', 'TFLOPS': '2,750', 'Precio (2ª mano)': 'نحو 450-550 دولارًا', 'Rend./$ vs. RTX': '+15%', 'RTX equivalente': 'RTX 4090 (سرعة متماثلة)' },
            { 'GPU': 'RTX 3080', 'VRAM': '10GB', 'TFLOPS': '1,456', 'Precio (2ª mano)': 'نحو 350-400 دولار', 'Rend./$ vs. RTX': '--', 'RTX equivalente': '--' },
            { 'GPU': 'RTX 4090', 'VRAM': '24GB', 'TFLOPS': '2,752', 'Precio (2ª mano)': 'نحو 1,000-1,300 دولار', 'Rend./$ vs. RTX': '--', 'RTX equivalente': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', 'Precio (2ª mano)', 'Rend./$ vs. RTX', 'RTX equivalente'],
        
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-ar.webp',
          imageCaption: 'تضاهي RX 7900 XTX سرعة وVRAM بطاقة RTX 4090 بنحو 60% من السعر — والمقابل هو صعوبة إعداد ROCm.',
        },
        'rocm-setup': {
          title: 'ما احتكاك إعداد ROCm لـ AMD؟',
          content: [
            '**1. ثبّت برامج تشغيل AMD ROCm: `apt-get install rocm-dkms` (Ubuntu). في Windows، استخدم مثبّت .exe اليدوي. يستغرق نحو 30 دقيقة.**',
            '2. تحقق من مُجمِّع HIP: `hipcc --version`. غالبًا ما يفشل في المحاولة الأولى. صحّح توافق النواة لكرتك.',
            '3. ثبّت HIPCC (مُجمِّع HIP-to-C++ من AMD): `apt-get install hip-runtime-amd`. سلسلة تبعيات أخرى.',
            '4. اختبر بنموذج LLM صغير: شغّل الاستدلال للتحقق من عمل تسريع GPU. التراجع إلى المعالج متكرر.',
            '5. حلّ تعارضات إصدار برامج التشغيل: ROCm v5.7 يعمل مع النواة 5.15 لكن ليس مع 6.x. يستهلك 2-4 ساعات من التصحيح.',
            'NVIDIA CUDA بالمقارنة: `nvidia-cuda-toolkit` ← أمر apt-get واحد، وصول فوري لـ GPU. تتطلب AMD احتكاكًا أكبر بـ 5 إلى 10 أضعاف.',
          ],
        },
        'software-support': {
          title: 'هل يمكنك تشغيل Ollama وvLLM على AMD؟',
          content: [
            '**Ollama على AMD (وفقاً لاختباراتنا في أبريل 2026، Ollama v0.3.x، ROCm 6.x):** كان دعم ROCm غير متسق في اختباراتنا — فشل اكتشاف GPU في بعض التكوينات، والتراجع إلى المعالج بطيء. راجع قائمة التوافق الحالية مع AMD على github.com/ollama/ollama قبل الالتزام.',
            '**vLLM على AMD:** دعم كامل لـ ROCm منذ الإصدار v0.6.0. يعمل جيدًا، لكنه يتطلب تهيئة يدوية لبرامج تشغيل ROCm/HIP. خيار جيد إن تجاوزت مرحلة التثبيت.',
            '**Text Generation WebUI:** دعم ممتاز لـ AMD ROCm. أفضل تجربة مستخدم على AMD. موصى به.',
            '**Llama.cpp:** خلفية HIP أصلية. أداء قوي. أبسط مسار لـ AMD. موصى به.',
            '**LM Studio:** NVIDIA فقط. دون دعم لـ AMD.',
            'اعتبارًا من أبريل 2026: vLLM + llama.cpp هما خياراك على AMD. وOllama غير موثوق.',
          ],
        
          image: '/images/best-amd-gpus-local-llm-software-support-hero-ar.webp',
          imageCaption: 'يُعد llama.cpp وText Generation WebUI المسارين الموثوقين لـ AMD في 2026 — بينما يظل دعم ROCm في Ollama غير مستقر.',
        },
        'when-buy-amd': {
          title: 'متى ينبغي أن تشتري AMD بدلًا من NVIDIA؟',
          content: [
            'اشترِ AMD إذا:',
            '- وجدت RX 7900 XTX مستعملة بأقل من 450 دولارًا (مُقيَّمة بأقل من قيمتها مقابل قيمة RTX 4090).',
            '- كنت تملك بالفعل عتاد AMD وتريد الحفاظ على اتساق المنظومة.',
            '- كنت تبني عنقودًا وترتّب الأداء لكل دولار فوق سهولة الإعداد.',
            'لا تشترِ AMD إذا:',
            '- أردت تجربة جاهزة للاستخدام. NVIDIA CUDA أسرع في التشغيل.',
            '- احتجت Ollama. دعم AMD غير موثوق.',
            '- كان وقتك ضيقًا. تصحيح ROCm قد يستهلك أكثر من 10 ساعات.',
          ],
        },
        'mistakes': {
          title: 'الأخطاء الشائعة عند تبنّي AMD',
          items: [
            'شراء RX 6700 (12GB) ظنًا أنه يكافئ 3060 12GB — إنه أبطأ بنسبة 20% وغالبًا صعب الإيجاد مستعملًا.',
            'افتراض أن ROCm «يعمل ببساطة» مثل CUDA — خطّط لـ 5 إلى 10 ساعات من حل مشكلات توافق برامج التشغيل والنواة.',
            'استخدام Ollama مع AMD مع توقع تكامل سلس — كان دعم ROCm غير متسق في اختباراتنا في أبريل 2026 (Ollama v0.3.x، ROCm 6.x)؛ llama.cpp أو vLLM خياران أفضل.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'الخطوات التالية',
          items: [
            '[أفضل وحدات GPU الاقتصادية لنماذج LLM المحلية](/ar/local-llms/best-budget-gpus-local-llm) — ميزانية محدودة؟ أفضل وحدات GPU من حيث القيمة →',
            '[GPU مقابل CPU مقابل Apple Silicon](/ar/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD أم Apple أم المعالج؟ اختر المنصة المناسبة →',
            '[كم سعة VRAM أحتاج؟](/ar/local-llms/how-much-vram-local-llm) — طابق سعة VRAM لحجم النموذج →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'الأسئلة الشائعة',
          faqs: [
            { q: 'هل أشتري AMD RX 6800 XT أم NVIDIA RTX 3080 لنماذج LLM المحلية؟', a: 'RTX 3080 إن كنت تقدّر البساطة (CUDA يعمل دون مشاكل). RX 6800 XT إن أردت قيمة أكبر بنسبة 25% ولا تمانع 5-10 ساعات من إعداد ROCm.' },
            { q: 'هل AMD RX 7900 XTX أفضل من RTX 4090؟', a: 'سرعة متماثلة، نفس VRAM (24GB). RX 7900 XTX أرخص بـ 200-300 دولار مستعملة (450-550 دولارًا مقابل 1,000-1,300 دولار). إعداد ROCm هو الثمن المقابل.' },
            { q: 'هل يمكنني استخدام كروت رسوميات AMD مع Ollama؟', a: 'تقنيًا نعم. وفقاً لاختباراتنا في أبريل 2026 (Ollama v0.3.x، ROCm 6.x): كان دعم ROCm غير متسق في اختباراتنا — فشل اكتشاف GPU في بعض التكوينات والتراجع إلى المعالج كان متكرراً. راجع قائمة التوافق الحالية مع AMD على github.com/ollama/ollama قبل الالتزام؛ vLLM أو llama.cpp هما المسارات الأكثر أماناً للاستدلال على AMD اليوم.' },
            { q: 'ما أفضل مسار AMD لنماذج LLM المحلية في 2026؟', a: 'Llama.cpp (خلفية HIP) + Text Generation WebUI. كلاهما بدعم جيد لـ AMD. تجنّب Ollama.' },
            { q: 'هل أحتاج Ubuntu لـ AMD ROCm، أم يعمل Windows أيضًا؟', a: 'الدعم في Windows موجود (HIP on Windows)، لكنه أحدث وأقل استقرارًا. Ubuntu هو المسار الموصى به.' },
            { q: 'هل RX 6700 أو RX 6700 XT أو 6750 جيد لنماذج 7B؟', a: 'RX 6700 (12GB) يعمل، لكنه أبطأ بنسبة 20% من RX 6800 XT. RX 6700 XT (12GB، نفس سعة VRAM) يمتلك سرعة معالجة أعلى بنحو 15% من نسخة non-XT، لكنه يبقى أبطأ من 6800 XT. اشترِ أيًّا منهما فقط إن كلف أقل من 250 دولارًا. وإلا، راهن على 6800 XT.' },
            { q: 'هل تستحق RX 6900 XT الشراء لنماذج LLM المحلية؟', a: 'ليس فعلًا. RX 6900 XT (16GB) أسرع بشكل هامشي فقط من RX 6800 XT، وأندر مستعملة، وتكلف 350-400 دولار مقابل 300-350 دولارًا لـ 6800 XT. فارق السعر لا يستحق العناء -- اشترِ 6800 XT بدلًا منها.' },
            { q: 'هل AMD Radeon 680M جيد لتشغيل نماذج LLM المحلية؟', a: 'Radeon 680M هو رسوميات مدمجة داخل معالجات Ryzen 6000/7000 المحمولة -- وهو ليس نفس منتج RX 6800M أو RX 6800 XT المنفصلين. لا يمتلك ذاكرة VRAM مخصصة، بل يشارك ذاكرة النظام (RAM) بدلًا من ذلك، لذا فهو مناسب فقط للنماذج الصغيرة المكمّمة (نحو 3B معامل أو أقل بصيغة Q4)، وسيعمل أبطأ بشكل ملحوظ من أي بطاقة رسوميات منفصلة في هذا الدليل. للاستخدام الجاد لنماذج LLM المحلية، بطاقة منفصلة مثل RX 6800 XT هي الخيار الأفضل.' },
            { q: 'هل يمكنني الجمع بين كروت رسوميات AMD وNVIDIA في نظام واحد؟', a: 'نظريًا نعم، لكن الإدارة كابوس. يحتاج كل GPU بيئة CUDA/HIP خاصة به. غير موصى به.' },
          ],
        },
        'relatedReading': {
          title: 'قراءات ذات صلة',
          items: [
            '[أفضل كروت الرسوميات الاقتصادية لنماذج LLM المحلية](/ar/local-llms/best-budget-gpus-local-llm)',
            '[أفضل كروت الرسوميات لنماذج LLM المحلية](/ar/local-llms/best-gpus-for-local-llms)',
            '[GPU مقابل CPU مقابل Apple Silicon](/ar/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Text Generation WebUI مقابل vLLM مقابل Llama.cpp](/ar/local-llms/text-generation-webui-vs-vllm-vs-llamacpp)',
            '[لابتوب مقابل سطح المكتب لنماذج LLM المحلية](/ar/local-llms/laptop-vs-desktop-local-llm) — مقارنة التكلفة والأداء بين اللابتوب وسطح المكتب للذكاء الاصطناعي.',
          ],
        },
        'sources': {
          title: 'المصادر',
          items: [
            'توثيق AMD ROCm وGitHub: مُجمِّع HIP، مصفوفة توافق برامج التشغيل، أمثلة استدلال بنماذج LLM',
            'vLLM GitHub: تنفيذ خلفية AMD/ROCm وحالة الدعم (v0.6.0 فأحدث)',
            'Llama.cpp GitHub: خلفية HIP لدعم كروت رسوميات AMD',
            'تقدّم كروت رسوميات AMD سرعات جيدة في الـ tokens في الثانية، لكن السرعة وحدها لا تحدّد جودة الإجابات. ما تسأله للنموذج يهم بقدر سرعة الإجابة: [context windows explained](https://www.promptquorum.com/prompt-engineering/context-windows-explained-why-ai-forgets) يشرح كيفية هيكلة الطلبات الأطول ضمن حدود ذاكرة GPU.',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/ar/local-llms/best-amd-gpus-local-llm',
        'inLanguage': 'ar',
        name: 'أفضل كروت رسوميات AMD لنماذج LLM المحلية',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'AMD RX 6800 XT (16GB، نحو 300-350 دولارًا مستعملة) وRX 7900 XTX (24GB، نحو 400-500 دولار مستعملة) هما الخياران الوحيدان القابلان للاستخدام لنماذج LLM المحلية.' },
          { '@type': 'ListItem', position: 2, name: 'الأداء لكل دولار: AMD أرخص بنسبة 20-30% من NVIDIA، لكن احتكاك البرمجيات يكلف 5 إلى 10 ساعات من الإعداد.' },
          { '@type': 'ListItem', position: 3, name: 'Ollama: دعم AMD محدود (مسار ROCm كان غير متسق في اختباراتنا في أبريل 2026، Ollama v0.3.x / ROCm 6.x؛ التراجع إلى المعالج بطيء). راجع github.com/ollama/ollama للتوافق الحالي مع AMD.' },
          { '@type': 'ListItem', position: 4, name: 'vLLM: دعم كامل لـ AMD ROCm منذ الإصدار v0.6.0، لكن الإعداد يتطلب تثبيت برامج التشغيل يدويًا.' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI: دعم ممتاز لـ AMD عبر ROCm. أفضل تجربة مستخدم على AMD.' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp: دعم أصلي لـ AMD (خلفية HIP). أداء قوي. المسار الموصى به على AMD.' },
          { '@type': 'ListItem', position: 7, name: 'تكلفة الإعداد: خطّط لـ 5-10 ساعات من تصحيح برامج تشغيل ROCm، وتجميع HIPCC، وتوافق النواة.' },
          { '@type': 'ListItem', position: 8, name: 'الحكم (أبريل 2026): استخدم AMD فقط إن كنت تملك بالفعل عتاد AMD أو وجدت عرضًا مستعملًا ممتازًا. وإلا، يبقى NVIDIA CUDA أبسط.' },
        ],
      },
    },
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'GPU Buying Guides',
      title: 'Melhores GPUs AMD para LLMs locais',
      seoTitle: 'Melhores GPUs AMD para LLMs locais 2026: Guia de comparação',
      intro: '**A AMD RX 6800 XT e a RX 7900 XTX são alternativas sólidas à NVIDIA, com desempenho por dólar 15-20% melhor, mas sofrem com a menor compatibilidade com o ONNX Runtime e os drivers do vLLM.** A partir de abril de 2026, o AMD ROCm (HIP) amadureceu, embora as camadas de compatibilidade adicionem fricção. O NVIDIA CUDA continua sendo o caminho mais simples para LLMs locais. Use AMD só se encontrar uma ótima oferta de segunda mão ou já tiver hardware AMD.',
      metaDescription: 'Compare AMD RX 6800 XT e RX 7900 XTX vs NVIDIA RTX: configuração ROCm, desempenho no vLLM, custo por TFLOP e quando comprar AMD. Atualizado 2026.',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-pt.webp',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**A AMD RX 6800 XT e a RX 7900 XTX são alternativas sólidas à NVIDIA, com desempenho por dólar 15-20% melhor, mas sofrem com a menor compatibilidade com o ONNX Runtime e os drivers do vLLM. No varejo brasileiro, com impostos de importação, os preços em reais ficam bem mais altos.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam seus fluxos de trabalho de LLMs locais',
      readTime: '7 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Melhores GPUs AMD para LLMs locais 2026: RX 7900 XTX',
        'description': 'Compare AMD RX 7900 XTX, 6800 XT vs NVIDIA RTX. Configuração de ROCm, desempenho no vLLM, análise de custo por TFLOP. Quando escolher AMD em vez de CUDA. Abril 2026.',
        'url': 'https://www.promptquorum.com/pt/local-llms/best-amd-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-07-14',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'AMD GPU' },
          { '@type': 'Thing', 'name': 'ROCm' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
          { '@type': 'Thing', 'name': 'inferência local de LLM' },
        ],
        'speakable': {
          '@type': 'SpeakableSpecification',
          'cssSelector': ['.article-intro', '.key-takeaways'],
        },
        'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Devo comprar a AMD RX 6800 XT ou a NVIDIA RTX 3080 para LLMs locais?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RTX 3080 se você valoriza a simplicidade (o CUDA funciona sem problemas). RX 6800 XT se você quer 25% mais valor e não se importa com 5-10 horas de configuração do ROCm.' }
          },
          {
            '@type': 'Question',
            'name': 'A AMD RX 7900 XTX é melhor que a RTX 4090?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Velocidade semelhante, mesma VRAM (24GB). A RX 7900 XTX é US$ 200-300 mais barata de segunda mão (US$ 450-550 vs. US$ 1.000-1.300). A configuração do ROCm é o contrapeso.' }
          },
          {
            '@type': 'Question',
            'name': 'Posso usar GPUs AMD com o Ollama?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Tecnicamente sim. Com base nos nossos testes de abril de 2026 (Ollama v0.3.x, ROCm 6.x): o suporte ROCm foi inconsistente nos nossos testes — a deteção de GPU falhou em algumas configurações e o fallback para CPU foi frequente. Verifique a lista de compatibilidade AMD atual em github.com/ollama/ollama antes de decidir; vLLM ou llama.cpp são os caminhos mais fiáveis para inferência AMD hoje.' }
          },
          {
            '@type': 'Question',
            'name': 'Qual é o melhor caminho AMD para LLMs locais em 2026?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama.cpp (backend HIP) + Text Generation WebUI. Ambos têm bom suporte para AMD. Evite o Ollama.' }
          },
          {
            '@type': 'Question',
            'name': 'Preciso de Ubuntu para o AMD ROCm, ou o Windows também funciona?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'O suporte no Windows existe (HIP no Windows), mas é mais recente e menos estável. O Ubuntu é o caminho recomendado.' }
          },
          {
            '@type': 'Question',
            'name': 'A RX 6700, a RX 6700 XT ou a 6750 é boa para modelos de 7B?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'A RX 6700 (12GB) funciona, mas é 20% mais lenta que a RX 6800 XT. A RX 6700 XT (12GB, mesma VRAM) tem clocks cerca de 15% mais rápidos que a versão sem XT, mas ainda fica atrás da 6800 XT. Compre qualquer uma delas só se custar menos de US$ 250. Caso contrário, vá de 6800 XT.' }
          },
          {
            '@type': 'Question',
            'name': 'Vale a pena comprar a RX 6900 XT para LLMs locais?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Não muito. A RX 6900 XT (16GB) é apenas marginalmente mais rápida que a RX 6800 XT, é mais rara de segunda mão e custa US$ 350-400 contra US$ 300-350 da 6800 XT. O aumento de preço não compensa -- compre a 6800 XT em vez dela.' }
          },
          {
            '@type': 'Question',
            'name': 'A AMD Radeon 680M é boa para rodar LLMs locais?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'A Radeon 680M é uma placa de vídeo integrada dentro das APUs móveis Ryzen 6000/7000 -- não é o mesmo produto que a RX 6800M ou a RX 6800 XT, que são placas dedicadas. Ela não tem VRAM dedicada, e sim compartilha a RAM do sistema, então só é viável para modelos pequenos e quantizados (cerca de 3B de parâmetros ou menos em Q4) e vai rodar visivelmente mais devagar que qualquer GPU dedicada deste guia. Para uso sério de LLMs locais, uma placa dedicada como a RX 6800 XT é a melhor escolha.' }
          },
          {
            '@type': 'Question',
            'name': 'Posso combinar GPUs AMD e NVIDIA no mesmo sistema?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Teoricamente sim, mas o gerenciamento é um pesadelo. Cada GPU precisa do seu próprio runtime CUDA/HIP. Não é recomendado.' }
          },
        ]
      },
      toc: [
        { label: 'Pontos principais', anchor: '#tldr' },
        { label: 'Quais GPUs AMD realmente valem a pena?', anchor: '#which-amd' },
        { label: 'Como as GPUs AMD se comparam às RTX em preço e desempenho?', anchor: '#amd-vs-nvidia' },
        { label: 'Qual é a fricção de configuração do ROCm para AMD?', anchor: '#rocm-setup' },
        { label: 'Você pode rodar Ollama e vLLM em AMD?', anchor: '#software-support' },
        { label: 'Quando você deve comprar AMD em vez de NVIDIA?', anchor: '#when-buy-amd' },
        { label: 'Erros comuns ao adotar AMD', anchor: '#mistakes' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'A AMD RX 6800 XT (16GB, ~US$ 300-350 de segunda mão) e a RX 7900 XTX (24GB, ~US$ 400-500 de segunda mão) são as únicas opções viáveis para LLMs locais. Os preços variam conforme o país (no Brasil, bem mais altos por causa dos impostos).',
            'Desempenho por dólar: a AMD é 20-30% mais barata que a NVIDIA, mas a fricção de software custa entre 5 e 10 horas de configuração.',
            'Ollama: suporte AMD limitado (o caminho do ROCm foi inconsistente nos nossos testes de abril de 2026, Ollama v0.3.x / ROCm 6.x — a deteção de GPU falhou em algumas configurações; o fallback para CPU é lento). Verifique github.com/ollama/ollama para compatibilidade AMD atual.',
            'vLLM: suporte completo para AMD ROCm desde a v0.6.0, mas a configuração exige instalar drivers manualmente. Funciona bem depois de superada a fase de instalação.',
            'Text Generation WebUI: excelente suporte para AMD via ROCm. A melhor experiência de usuário em AMD.',
            'Llama.cpp: suporte nativo para AMD (backend HIP). Desempenho sólido. O caminho recomendado em AMD.',
            'Custo de configuração: planeje 5-10 horas de depuração de drivers ROCm, compilação do HIPCC e compatibilidade de kernel.',
            'Veredito (abril 2026): use AMD só se já tiver hardware AMD ou encontrar uma oferta de segunda mão excelente (~US$ 300 por uma placa de 16GB). Caso contrário, o NVIDIA CUDA continua mais simples.',
          ],
        },
        'which-amd': {
          title: 'Quais GPUs AMD realmente valem a pena?',
          items: [
            '**RX 6800 XT** (16GB GDDR6): a rainha do custo-benefício na AMD. Lançada em 2020. Continua sólida para inferência de 7B-22B. De segunda mão: ~US$ 300-350.',
            '**RX 6900 XT** (16GB GDDR6): marginalmente mais rápida que a 6800 XT. Rara. De segunda mão: ~US$ 350-400. O aumento de preço não vale a pena.',
            '**RX 7900 XT** (20GB GDDR6): arquitetura RDNA 3 mais nova. 20% mais rápida que a 6800 XT. De segunda mão: ~US$ 400-480. Boa para 70B Q4.',
            '**RX 7900 XTX** (24GB GDDR6): a GPU AMD de consumo de topo. 24GB de VRAM é um divisor de águas para modelos de 70B. De segunda mão: ~US$ 450-550. Velocidade comparável à RTX 4090.',
            '**Radeon Pro W6800 (32GB)**: placa de nível empresarial, mais barata de segunda mão (~US$ 200-300). Mais lenta, mas os 32GB são excelentes para 70B Q8. Opção de nicho.',
          ],
        },
        'amd-vs-nvidia': {
          title: 'Como as GPUs AMD se comparam às RTX em preço e desempenho?',
          rows: [
            { 'GPU': 'RX 6800 XT', 'VRAM': '16GB', 'TFLOPS': '1.952', 'Preço (2ª mão)': '~US$ 300-350', 'Desemp./$ vs. RTX': '+25%', 'RTX equivalente': 'RTX 3080 (mais lenta)' },
            { 'GPU': 'RX 7900 XT', 'VRAM': '20GB', 'TFLOPS': '2.540', 'Preço (2ª mão)': '~US$ 400-480', 'Desemp./$ vs. RTX': '+20%', 'RTX equivalente': 'RTX 4080 (similar)' },
            { 'GPU': 'RX 7900 XTX', 'VRAM': '24GB', 'TFLOPS': '2.750', 'Preço (2ª mão)': '~US$ 450-550', 'Desemp./$ vs. RTX': '+15%', 'RTX equivalente': 'RTX 4090 (velocidade similar)' },
            { 'GPU': 'RTX 3080', 'VRAM': '10GB', 'TFLOPS': '1.456', 'Preço (2ª mão)': '~US$ 350-400', 'Desemp./$ vs. RTX': '--', 'RTX equivalente': '--' },
            { 'GPU': 'RTX 4090', 'VRAM': '24GB', 'TFLOPS': '2.752', 'Preço (2ª mão)': '~US$ 1.000-1.300', 'Desemp./$ vs. RTX': '--', 'RTX equivalente': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', 'Preço (2ª mão)', 'Desemp./$ vs. RTX', 'RTX equivalente'],
        
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-pt.webp',
          imageCaption: 'A RX 7900 XTX iguala a velocidade e a VRAM da RTX 4090 por cerca de 60% do preço — a contrapartida é o atrito de configuração do ROCm.',
        },
        'rocm-setup': {
          title: 'Qual é a fricção de configuração do ROCm para AMD?',
          content: [
            '**1. Instale os drivers AMD ROCm: `apt-get install rocm-dkms` (Ubuntu). No Windows, use o instalador .exe manual. Leva cerca de 30 min.**',
            '2. Verifique o compilador HIP: `hipcc --version`. Muitas vezes falha na primeira tentativa. Depure a compatibilidade de kernel da sua GPU.',
            '3. Instale o HIPCC (o compilador HIP-to-C++ da AMD): `apt-get install hip-runtime-amd`. Outra cadeia de dependências.',
            '4. Teste com um LLM pequeno: rode a inferência para verificar se a aceleração por GPU funciona. O fallback para CPU é frequente.',
            '5. Resolva incompatibilidades de versão de drivers: o ROCm v5.7 funciona com o kernel 5.15, mas não com o 6.x. Consome 2-4 horas de depuração.',
            'NVIDIA CUDA em comparação: `nvidia-cuda-toolkit` → um apt-get, acesso instantâneo à GPU. A AMD exige de 5 a 10 vezes mais fricção.',
          ],
        },
        'software-support': {
          title: 'Você pode rodar Ollama e vLLM em AMD?',
          content: [
            '**Ollama em AMD (com base nos nossos testes de abril de 2026, Ollama v0.3.x, ROCm 6.x):** o suporte ROCm foi inconsistente nos nossos testes — a deteção de GPU falhou em algumas configurações, o fallback para CPU é lento. Verifique a lista de compatibilidade AMD atual em github.com/ollama/ollama antes de decidir.',
            '**vLLM em AMD:** suporte completo ao ROCm desde a v0.6.0. Funciona bem, mas exige configuração manual de drivers ROCm/HIP. Boa opção se você superar a fase de instalação.',
            '**Text Generation WebUI:** excelente suporte ao AMD ROCm. A melhor experiência de usuário em AMD. Recomendado.',
            '**Llama.cpp:** backend HIP nativo. Desempenho sólido. O caminho AMD mais simples. Recomendado.',
            '**LM Studio:** só NVIDIA. Sem suporte para AMD.',
            'A partir de abril de 2026: vLLM + llama.cpp são suas opções em AMD. O Ollama não é confiável.',
          ],
        
          image: '/images/best-amd-gpus-local-llm-software-support-hero-pt.webp',
          imageCaption: 'llama.cpp e Text Generation WebUI são os caminhos confiáveis para AMD em 2026 — o suporte ROCm do Ollama continua inconsistente.',
        },
        'when-buy-amd': {
          title: 'Quando você deve comprar AMD em vez de NVIDIA?',
          content: [
            'Compre AMD se:',
            '- Você encontrar uma RX 7900 XTX de segunda mão por menos de US$ 450 (subvalorizada frente ao valor da RTX 4090).',
            '- Você já tem hardware AMD e quer manter coerência no ecossistema.',
            '- Você está montando um cluster e prioriza o desempenho por dólar em vez da facilidade de configuração.',
            'Não compre AMD se:',
            '- Você quer uma experiência plug-and-play. O NVIDIA CUDA é mais rápido de colocar para funcionar.',
            '- Você precisa do Ollama. O suporte AMD é pouco confiável.',
            '- Você tem pouco tempo. A depuração do ROCm pode consumir mais de 10 horas.',
          ],
        },
        'mistakes': {
          title: 'Erros comuns ao adotar AMD',
          items: [
            'Comprar uma RX 6700 (12GB) achando que equivale a uma 3060 12GB — ela é 20% mais lenta e muitas vezes difícil de achar de segunda mão.',
            'Supor que o ROCm "simplesmente funciona" como o CUDA — planeje de 5 a 10 horas de solução de problemas de compatibilidade de drivers e kernel.',
            'Usar o Ollama com AMD esperando uma integração fluida — o suporte ROCm foi inconsistente nos nossos testes de abril de 2026 (Ollama v0.3.x, ROCm 6.x); llama.cpp ou vLLM são melhores opções.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'Próximos passos',
          items: [
            '[Melhores GPUs econômicas para LLMs locais](/pt/local-llms/best-budget-gpus-local-llm) — Com orçamento limitado? As melhores GPUs custo-benefício →',
            '[GPU vs CPU vs Apple Silicon](/pt/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD, Apple ou CPU — qual plataforma se encaixa? →',
            '[Quanta VRAM eu preciso?](/pt/local-llms/how-much-vram-local-llm) — Encontre o equilíbrio entre VRAM e tamanho do modelo →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Devo comprar a AMD RX 6800 XT ou a NVIDIA RTX 3080 para LLMs locais?', a: 'RTX 3080 se você valoriza a simplicidade (o CUDA funciona sem problemas). RX 6800 XT se você quer 25% mais valor e não se importa com 5-10 horas de configuração do ROCm.' },
            { q: 'A AMD RX 7900 XTX é melhor que a RTX 4090?', a: 'Velocidade semelhante, mesma VRAM (24GB). A RX 7900 XTX é US$ 200-300 mais barata de segunda mão (US$ 450-550 vs. US$ 1.000-1.300). A configuração do ROCm é o contrapeso.' },
            { q: 'Posso usar GPUs AMD com o Ollama?', a: 'Tecnicamente sim. Com base nos nossos testes de abril de 2026 (Ollama v0.3.x, ROCm 6.x), o suporte ROCm foi inconsistente — a deteção de GPU falhou em algumas configurações e o fallback para CPU foi frequente. Verifique a lista de compatibilidade AMD atual em github.com/ollama/ollama antes de decidir; para inferência AMD fiável hoje, vLLM ou llama.cpp são os caminhos mais seguros.' },
            { q: 'Qual é o melhor caminho AMD para LLMs locais em 2026?', a: 'Llama.cpp (backend HIP) + Text Generation WebUI. Ambos têm bom suporte para AMD. Evite o Ollama.' },
            { q: 'Preciso de Ubuntu para o AMD ROCm, ou o Windows também funciona?', a: 'O suporte no Windows existe (HIP no Windows), mas é mais recente e menos estável. O Ubuntu é o caminho recomendado.' },
            { q: 'A RX 6700, a RX 6700 XT ou a 6750 é boa para modelos de 7B?', a: 'A RX 6700 (12GB) funciona, mas é 20% mais lenta que a RX 6800 XT. A RX 6700 XT (12GB, mesma VRAM) tem clocks cerca de 15% mais rápidos que a versão sem XT, mas ainda fica atrás da 6800 XT. Compre qualquer uma delas só se custar menos de US$ 250. Caso contrário, vá de 6800 XT.' },
            { q: 'Vale a pena comprar a RX 6900 XT para LLMs locais?', a: 'Não muito. A RX 6900 XT (16GB) é apenas marginalmente mais rápida que a RX 6800 XT, é mais rara de segunda mão e custa US$ 350-400 contra US$ 300-350 da 6800 XT. O aumento de preço não compensa -- compre a 6800 XT em vez dela.' },
            { q: 'A AMD Radeon 680M é boa para rodar LLMs locais?', a: 'A Radeon 680M é uma placa de vídeo integrada dentro das APUs móveis Ryzen 6000/7000 -- não é o mesmo produto que a RX 6800M ou a RX 6800 XT, que são placas dedicadas. Ela não tem VRAM dedicada, e sim compartilha a RAM do sistema, então só é viável para modelos pequenos e quantizados (cerca de 3B de parâmetros ou menos em Q4) e vai rodar visivelmente mais devagar que qualquer GPU dedicada deste guia. Para uso sério de LLMs locais, uma placa dedicada como a RX 6800 XT é a melhor escolha.' },
            { q: 'Posso combinar GPUs AMD e NVIDIA no mesmo sistema?', a: 'Teoricamente sim, mas o gerenciamento é um pesadelo. Cada GPU precisa do seu próprio runtime CUDA/HIP. Não é recomendado.' },
          ],
        },
        'relatedReading': {
          title: 'Leituras relacionadas',
          items: [
            '[Melhores GPUs econômicas para LLMs locais](/pt/local-llms/best-budget-gpus-local-llm)',
            '[Melhores GPUs para LLMs locais](/pt/local-llms/best-gpus-for-local-llms)',
            '[GPU vs CPU vs Apple Silicon](/pt/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Text Generation WebUI vs vLLM vs Llama.cpp](/pt/local-llms/text-generation-webui-vs-vllm-vs-llamacpp)',
            '[Notebook vs Desktop para LLMs locais](/pt/local-llms/laptop-vs-desktop-local-llm) — Comparação de custo e desempenho entre notebook e desktop para IA.',
          ],
        },
        'sources': {
          title: 'Fontes',
          items: [
            'Documentação do AMD ROCm e GitHub: compilador HIP, matriz de compatibilidade de drivers, exemplos de inferência com LLMs',
            'vLLM GitHub: implementação do backend AMD/ROCm e estado do suporte (v0.6.0+)',
            'Llama.cpp GitHub: backend HIP para suporte a GPUs AMD',
            'As GPUs AMD oferecem boas velocidades em tokens por segundo, mas a velocidade sozinha não determina a qualidade das respostas. O que você pergunta ao modelo importa tanto quanto a rapidez da resposta: [context windows explained](https://www.promptquorum.com/prompt-engineering/context-windows-explained-why-ai-forgets) explica como estruturar solicitações mais longas dentro dos limites de memória da GPU.',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/pt/local-llms/best-amd-gpus-local-llm',
        name: 'Melhores GPUs AMD para LLMs locais',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'A AMD RX 6800 XT (16GB, ~US$ 300-350 de segunda mão) e a RX 7900 XTX (24GB, ~US$ 400-500 de segunda mão) são as únicas opções viáveis para LLMs locais.' },
          { '@type': 'ListItem', position: 2, name: 'Desempenho por dólar: a AMD é 20-30% mais barata que a NVIDIA, mas a fricção de software custa entre 5 e 10 horas de configuração.' },
          { '@type': 'ListItem', position: 3, name: 'Ollama: suporte AMD limitado (o caminho do ROCm foi inconsistente nos nossos testes de abril de 2026, Ollama v0.3.x / ROCm 6.x; o fallback para CPU é lento). Verifique github.com/ollama/ollama para compatibilidade AMD atual.' },
          { '@type': 'ListItem', position: 4, name: 'vLLM: suporte completo para AMD ROCm desde a v0.6.0, mas a configuração exige instalar drivers manualmente.' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI: excelente suporte para AMD via ROCm. A melhor experiência de usuário em AMD.' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp: suporte nativo para AMD (backend HIP). Desempenho sólido. O caminho recomendado em AMD.' },
          { '@type': 'ListItem', position: 7, name: 'Custo de configuração: planeje 5-10 horas de depuração de drivers ROCm, compilação do HIPCC e compatibilidade de kernel.' },
          { '@type': 'ListItem', position: 8, name: 'Veredito (abril 2026): use AMD só se já tiver hardware AMD ou encontrar uma oferta de segunda mão excelente. Caso contrário, o NVIDIA CUDA continua mais simples.' },
        ],
      },
    },
    de: {
      theme: 'GPU-Kaufleitfäden',
      title: 'Beste AMD-GPUs für lokale LLMs',
      seoTitle: 'AMD GPUs für lokale LLMs 2026: ROCm Setup & vLLM',
      intro: '**AMD RX 6800 XT und RX 7900 XTX sind solide NVIDIA-Alternativen mit 15-20% besserer Rechenleistung pro Dollar, leiden aber unter schwächerer ONNX-Runtime- und vLLM-Treiberunterstützung.** Seit April 2026 hat sich AMD ROCm (HIP) reif entwickelt, aber Kompatibilitätsschichten erzeugen Reibung. NVIDIA CUDA ist immer noch der einfachste Weg für lokale LLMs. Verwenden Sie AMD nur, wenn Sie ein großartiges gebrauchtes Angebot finden oder bereits AMD-Hardware besitzen.',
      metaDescription: 'AMD RX 6800 XT, 7900 XTX für lokale LLMs. ROCm-Einrichtung, vLLM-Unterstützung, Leistung vs. NVIDIA RTX. Entscheidungsleitfaden April 2026.',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-de.webp',
      publishDate: '2026-04-05',
      readTime: '8 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      toc: [
        { label: 'Zusammenfassung', anchor: '#tldr' },
        { label: 'Welche AMD-GPUs lohnen sich wirklich?', anchor: '#which-amd' },
        { label: 'Wie vergleichen sich AMD-GPUs mit RTX bei Preis und Geschwindigkeit?', anchor: '#amd-vs-nvidia' },
        { label: 'Welche ROCm-Einrichtungsherausforderungen gibt es?', anchor: '#rocm-setup' },
        { label: 'Können Sie Ollama und vLLM auf AMD ausführen?', anchor: '#software-support' },
        { label: 'Wann sollten Sie AMD statt NVIDIA kaufen?', anchor: '#when-buy-amd' },
        { label: 'Häufige AMD-Adoptionfehler', anchor: '#mistakes' },
        { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'AMD RX 6800 XT (16GB, 300-350 € gebraucht) und RX 7900 XTX (24GB, 400-500 € gebraucht) sind die einzigen praktikablen Optionen für lokale LLMs.',
            'Rechenleistung pro Euro: AMD ist 20-30% günstiger als NVIDIA, aber die Software-Reibung kostet 5-10 Stunden Einrichtungszeit.',
            'Ollama: Begrenzte AMD-Unterstützung (ROCm-Pfad war in unseren Tests April 2026, Ollama v0.3.x / ROCm 6.x, inkonsistent — GPU-Erkennung schlug bei einigen Konfigurationen fehl; CPU-Fallback ist langsam). Prüfen Sie die aktuelle AMD-Kompatibilitätsliste auf github.com/ollama/ollama.',
            'vLLM: Volle AMD ROCm-Unterstützung seit v0.6.0, aber die Einrichtung erfordert manuelle Treiber. Funktioniert gut, wenn Sie das Einrichtungschaos überstanden haben.',
            'Text Generation WebUI: Exzellente AMD-Unterstützung via ROCm. Beste Benutzererfahrung auf AMD.',
            'Llama.cpp: Native AMD-Unterstützung (HIP-Backend). Solide Leistung. Empfohlener AMD-Pfad.',
            'Einrichtungskosten: Planen Sie 5-10 Stunden Debugging von ROCm-Treibern, HIPCC-Kompilierung und Kernel-Kompatibilität.',
            'Fazit (April 2026): Verwenden Sie AMD nur, wenn Sie bereits AMD-Hardware haben, oder wenn Sie ein großartiges gebrauchtes Angebot finden (€300 für eine 16-GB-Karte). Andernfalls ist NVIDIA CUDA immer noch einfacher.',
          ],
        },
        'which-amd': {
          title: 'Welche AMD-GPUs lohnen sich wirklich?',
          items: [
            '**RX 6800 XT** (16 GB GDDR6): Der Wert-König für AMD. 2020er-Release. Immer noch solide für 7B-22B-Inferenz. Gebraucht: 300-350 €.',
            '**RX 6900 XT** (16 GB GDDR6): Marginal schneller als 6800 XT. Selten. Gebraucht: 350-400 €. Die Preiserhöhung lohnt sich nicht.',
            '**RX 7900 XT** (20 GB GDDR6): Neuere RDNA 3-Architektur. 20% schneller als 6800 XT. Gebraucht: 400-480 €. Gut für 70B Q4.',
            '**RX 7900 XTX** (24 GB GDDR6): Top-AMD-Consumer-GPU. 24 GB VRAM ist spielverändernd für 70B. Gebraucht: 450-550 €. Vergleichbar mit RTX 4090-Geschwindigkeit.',
            '**Radeon Pro W6800 (32 GB)**: Enterprise-Karte, günstiger gebraucht (~200-300 €). Langsamer, aber 32 GB ist hervorragend für 70B Q8. Nische.',
          ],
        },
        'amd-vs-nvidia': {
          title: 'Wie vergleichen sich AMD-GPUs mit RTX bei Preis und Geschwindigkeit?',
          rows: [
            { 'GPU': 'RX 6800 XT', 'VRAM': '16 GB', 'TFLOPS': '1.952', 'Preis gebraucht': '300-350 €', 'Leistung/€ vs. RTX': '+25%', 'Equivalent RTX': 'RTX 3080 (langsamer)' },
            { 'GPU': 'RX 7900 XT', 'VRAM': '20 GB', 'TFLOPS': '2.540', 'Preis gebraucht': '400-480 €', 'Leistung/€ vs. RTX': '+20%', 'Equivalent RTX': 'RTX 4080 (ähnlich)' },
            { 'GPU': 'RX 7900 XTX', 'VRAM': '24 GB', 'TFLOPS': '2.750', 'Preis gebraucht': '450-550 €', 'Leistung/€ vs. RTX': '+15%', 'Equivalent RTX': 'RTX 4090 (ähnliche Geschwindigkeit)' },
            { 'GPU': 'RTX 3080', 'VRAM': '10 GB', 'TFLOPS': '1.456', 'Preis gebraucht': '350-400 €', 'Leistung/€ vs. RTX': '--', 'Equivalent RTX': '--' },
            { 'GPU': 'RTX 4090', 'VRAM': '24 GB', 'TFLOPS': '2.752', 'Preis gebraucht': '1.000-1.300 €', 'Leistung/€ vs. RTX': '--', 'Equivalent RTX': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', 'Preis gebraucht', 'Leistung/€ vs. RTX', 'Equivalent RTX'],
        
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-de.webp',
          imageCaption: 'Die RX 7900 XTX erreicht Geschwindigkeit und VRAM der RTX 4090 für etwa 60 % des Preises — der Kompromiss ist der ROCm-Einrichtungsaufwand.',
        },
        'rocm-setup': {
          title: 'Welche ROCm-Einrichtungsherausforderungen gibt es?',
          content: [
            '1. Installieren Sie AMD ROCm-Treiber: `apt-get install rocm-dkms` (Ubuntu). Unter Windows ist ein manuelles .exe-Installationsprogramm erforderlich. Dauert 30 Minuten.',
            '2. Überprüfen Sie den HIP-Compiler: `hipcc --version`. Fehlgeschlagen beim ersten Versuch. Debuggen Sie die Kernel-Kompatibilität für Ihre GPU.',
            '3. Installieren Sie HIPCC (AMDs HIP-zu-C++-Compiler): `apt-get install hip-runtime-amd`. Eine weitere Abhängigkeitskette.',
            '4. Testen Sie mit einem kleinen LLM: Führen Sie Inferenzen durch, um zu überprüfen, ob die GPU-Beschleunigung funktioniert. Fallback auf CPU ist häufig.',
            '5. Beheben Sie Inkompatibilitäten der Treiberversion: ROCm v5.7 funktioniert mit Kernel 5.15, aber nicht mit 6.x. Verbraucht 2-4 Stunden Debugging.',
            'NVIDIA CUDA zum Vergleich: `nvidia-cuda-toolkit` → ein apt-get, sofortiger GPU-Zugriff. AMD erfordert 5-10× mehr Reibung.',
          ],
        },
        'software-support': {
          title: 'Können Sie Ollama und vLLM auf AMD ausführen?',
          content: [
            '**Ollama auf AMD (Stand: unsere Tests April 2026, Ollama v0.3.x, ROCm 6.x):** Die ROCm-Unterstützung war in unseren Tests inkonsistent — GPU-Erkennung schlug bei einigen Konfigurationen fehl, CPU-Fallback ist langsam. Prüfen Sie die aktuelle AMD-Kompatibilitätsliste auf github.com/ollama/ollama vor dem Einsatz.',
            '**vLLM auf AMD:** Volle ROCm-Unterstützung seit v0.6.0. Funktioniert gut, erfordert aber manuelle ROCm/HIP-Treibereinrichtung. Gut, wenn Sie das Einrichtungschaos überstanden haben.',
            '**Text Generation WebUI:** Exzellente AMD ROCm-Unterstützung. Beste Benutzererfahrung auf AMD. Empfohlen.',
            '**Llama.cpp:** Native HIP-Backend. Solide Leistung. Einfachster AMD-Pfad. Empfohlen.',
            '**LM Studio:** Nur NVIDIA. Keine AMD-Unterstützung.',
            'Seit April 2026: vLLM + llama.cpp sind Ihre AMD-Pfade. Ollama ist nicht zuverlässig.',
          ],
        
          image: '/images/best-amd-gpus-local-llm-software-support-hero-de.webp',
          imageCaption: 'llama.cpp und Text Generation WebUI sind 2026 die zuverlässigen AMD-Pfade — Ollamas ROCm-Unterstützung bleibt inkonsistent.',
        },
        'when-buy-amd': {
          title: 'Wann sollten Sie AMD statt NVIDIA kaufen?',
          content: [
            'AMD kaufen, wenn:',
            '- Sie eine gebrauchte RX 7900 XTX für <450 € finden (unter Preis gegenüber RTX 4090 Wert).',
            '- Sie bereits AMD-Hardware besitzen und Ökosystem-Konsistenz mögen.',
            '- Sie einen Cluster bauen und Rechenleistung pro Euro über Benutzerfreundlichkeit stellen.',
            'AMD nicht kaufen, wenn:',
            '- Sie eine Plug-and-Play-Erfahrung wünschen. NVIDIA CUDA ist schneller funktionsfähig.',
            '- Sie Ollama brauchen. AMD-ROCm-Unterstützung fuer Ollama war in der Praxis unzuverlaessig (Stand 2026).',
            '- Sie zeitlich begrenzt sind. ROCm-Debugging kann 10+ Stunden dauern.',
          ],
        },
        'mistakes': {
          title: 'Häufige AMD-Adoptionfehler',
          items: [
            'RX 6700 (12 GB) kaufen, denkend, es ist ein 3060-12GB-Äquivalent - es ist 20% langsamer und oft schwer gebraucht zu finden.',
            'Annahme, dass ROCm „einfach funktioniert" wie CUDA - planen Sie 5-10 Stunden Fehlerbehebung von Treiber- und Kernel-Kompatibilität.',
            'Ollama mit AMD verwenden, nahtlose Integration erwartet — ROCm-Unterstützung war in unseren Tests April 2026 (Ollama v0.3.x, ROCm 6.x) inkonsistent; llama.cpp oder vLLM sind bessere Wetten.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'Nächste Schritte',
          items: [
            '[Beste Budget-GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm) — Knapp bei Kasse? Die besten GPUs für LLM-Inferenz →',
            '[GPU vs. CPU vs. Apple Silicon](/de/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD vs. Apple vs. CPU — welche Plattform passt? →',
            '[Wie viel VRAM brauche ich?](/de/local-llms/how-much-vram-local-llm) — GPU-VRAM auf Modellgröße abstimmen →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Sollte ich AMD RX 6800 XT oder NVIDIA RTX 3080 für lokale LLMs kaufen?', a: 'RTX 3080, wenn Sie Einfachheit bevorzugen (CUDA „funktioniert einfach"). RX 6800 XT, wenn Sie 25% besseren Wert und 5-10 Stunden ROCm-Einrichtung nicht stört.' },
            { q: 'Ist AMD RX 7900 XTX besser als RTX 4090?', a: 'Ähnliche Geschwindigkeit, gleicher VRAM (24 GB). RX 7900 XTX ist 200-300 € günstiger gebraucht (450-550 € vs. 1.000-1.300 €). ROCm-Einrichtung ist der Kompromiss.' },
            { q: 'Kann ich AMD-GPUs mit Ollama verwenden?', a: 'Technisch ja. In unseren Tests (April 2026, Ollama v0.3.x, ROCm 6.x) war die ROCm-Unterstützung inkonsistent — GPU-Erkennung schlug bei einigen Konfigurationen fehl, CPU-Fallback war häufig. Prüfen Sie die aktuelle AMD-Kompatibilitätsliste auf github.com/ollama/ollama vor dem Einsatz; für zuverlässige AMD-Inferenz heute sind vLLM oder llama.cpp die sichereren Wege.' },
            { q: 'Was ist der beste AMD-Pfad für lokale LLMs 2026?', a: 'Llama.cpp (HIP-Backend) + Text Generation WebUI. Beide haben solide AMD-Unterstützung. Vermeiden Sie Ollama.' },
            { q: 'Brauche ich Ubuntu für AMD ROCm, oder funktioniert Windows?', a: 'Windows-Unterstützung existiert (HIP auf Windows), aber sie war in unseren Tests April 2026 weniger stabil als auf Ubuntu. Ubuntu ist der empfohlene Pfad.' },
            { q: 'Ist RX 6700, RX 6700 XT oder 6750 gut für 7B-Modelle?', a: 'RX 6700 (12 GB) funktioniert, ist aber 20% langsamer als RX 6800 XT. RX 6700 XT (12 GB, gleicher VRAM) hat etwa 15% höhere Taktraten als die Nicht-XT-Version, bleibt aber hinter der 6800 XT zurück. Kaufen Sie beide nur, wenn <250 €. Andernfalls dehnen Sie auf 6800 XT aus.' },
            { q: 'Lohnt sich die RX 6900 XT für lokale LLMs?', a: 'Nicht wirklich. Die RX 6900 XT (16 GB) ist nur marginal schneller als die RX 6800 XT, gebraucht seltener zu finden und kostet 350-400 € gegenüber 300-350 € für die 6800 XT. Der Preisaufschlag lohnt sich nicht — kaufen Sie stattdessen die 6800 XT.' },
            { q: 'Ist die AMD Radeon 680M gut für lokale LLMs?', a: 'Die Radeon 680M ist eine integrierte Grafikeinheit in mobilen Ryzen-6000/7000-APUs — nicht dasselbe Produkt wie die dedizierte RX 6800M oder RX 6800 XT. Sie hat keinen eigenen VRAM, sondern teilt sich den Arbeitsspeicher des Systems, weshalb sie nur für kleine quantisierte Modelle (etwa 3B Parameter oder weniger bei Q4) geeignet ist und spürbar langsamer läuft als jede dedizierte GPU in diesem Ratgeber. Für ernsthafte lokale LLM-Nutzung ist eine dedizierte Karte wie die RX 6800 XT die bessere Wahl.' },
            { q: 'Kann ich AMD- und NVIDIA-GPUs in einem System mischen?', a: 'Theoretisch ja, aber das Management ist ein Albtraum. Jede GPU benötigt ihre eigene CUDA/HIP-Laufzeit. Nicht empfohlen.' },
            { q: 'Erfüllt AMD ROCm die DSGVO-Anforderungen für deutsche Unternehmen?', a: 'Ja. AMD ROCm verarbeitet alle Daten lokal auf Ihrer Hardware, ohne in die Cloud zu gehen. Dies erfüllt die DSGVO Article 28 (Verarbeiter-Anforderungen) und BSI-Grundschutz-Kataloge automatisch, da Daten nicht an Dritte übertragen werden.' },
            { q: 'Ist AMD ROCm für den deutschen Mittelstand geeignet?', a: 'Sehr geeignet. Der Mittelstand profitiert von der Kosteneinsparung (20-30% unter NVIDIA) und der vollständigen Datenkontrolle vor Ort. Die Einrichtungshürde (5-10 Stunden) ist einmalig. Nach dem Setup ist AMD eine solide Wahl für SMBs, die IT-Sicherheit und Kosteneffizienz schätzen.' },
          ],
        },
        'relatedReading': {
          title: 'Weiterführende Literatur',
          items: [
            '[Beste Budget-GPUs für lokale LLMs](/de/local-llms/best-budget-gpus-local-llm)',
            '[Beste GPUs für lokale LLMs](/de/local-llms/best-gpus-for-local-llms)',
            '[GPU vs. CPU vs. Apple Silicon](/de/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Local LLM Hardware Guide 2026](/de/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          title: 'Quellen',
          items: [
            'AMD ROCm-Dokumentation und GitHub: HIP-Compiler, Treiberkompatibilitätsmatrix, LLM-Inferenz-Beispiele',
            'vLLM GitHub: AMD/ROCm Backend-Implementierung und Unterstützungsstatus (v0.6.0+)',
            'Llama.cpp GitHub: HIP-Backend für AMD-GPU-Unterstützung',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/de/local-llms/best-amd-gpus-local-llm',
        name: 'Beste AMD-GPUs für lokale LLMs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'AMD RX 6800 XT (16 GB, 300-350 € gebraucht) und RX 7900 XTX (24 GB, 400-500 € gebraucht) sind die einzigen praktikablen Optionen für lokale LLMs.' },
          { '@type': 'ListItem', position: 2, name: 'Rechenleistung pro Euro: AMD ist 20-30% günstiger als NVIDIA, aber die Software-Reibung kostet 5-10 Stunden Einrichtungszeit.' },
          { '@type': 'ListItem', position: 3, name: 'Ollama: Begrenzte AMD-Unterstützung (ROCm-Pfad war in unseren Tests April 2026, Ollama v0.3.x / ROCm 6.x, inkonsistent; CPU-Fallback ist langsam). Prüfen Sie github.com/ollama/ollama für aktuelle AMD-Kompatibilität.' },
          { '@type': 'ListItem', position: 4, name: 'vLLM: Volle AMD ROCm-Unterstützung seit v0.6.0, aber die Einrichtung erfordert manuelle Treiber. Funktioniert gut, wenn Sie das Einrichtungschaos überstanden haben.' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI: Exzellente AMD-Unterstützung via ROCm. Beste Benutzererfahrung auf AMD.' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp: Native AMD-Unterstützung (HIP-Backend). Solide Leistung. Empfohlener AMD-Pfad.' },
          { '@type': 'ListItem', position: 7, name: 'Einrichtungskosten: Planen Sie 5-10 Stunden Debugging von ROCm-Treibern, HIPCC-Kompilierung und Kernel-Kompatibilität.' },
          { '@type': 'ListItem', position: 8, name: 'Fazit (April 2026): Verwenden Sie AMD nur, wenn Sie bereits AMD-Hardware haben, oder wenn Sie ein großartiges gebrauchtes Angebot finden (€300 für eine 16-GB-Karte). Andernfalls ist NVIDIA CUDA immer noch einfacher.' },
        ],
        regionalContext: {
          title: 'Regionale Akzeptanz und Compliance-Kontext',
          content: [
            '**Deutsche Mittelständler wählen lokale LLM-Tools aufgrund von DSGVO-Compliance-Funktionen.** Tools, die alle Daten lokal verarbeiten (Ollama, LM Studio, llama.cpp), erfüllen EU-Datenresidenz-Anforderungen automatisch. Organisationen in Deutschland, Österreich und der Schweiz bewerten Tools auf deaktivierte Telemetrie, keine Cloud-Synchronisierung und luftgekoppelte Bereitstellungsfähigkeit. PromptQuorum verbindet sich mit lokalen Tool-Endpunkten, ohne Daten durch externe Server zu leiten.',
            '**Europäische Unternehmensrichtlinien beeinflussen die GPU-Auswahl basierend auf BSI-Grundschutz und Ecodesign-Direktiven.** Das Ecodesign Directive beeinflusst die GPU-Verfügbarkeit in europäischen Märkten. Organisationen berücksichtigen die Gesamtkosteneinsparung, einschließlich Energieverbrauches unter EU-Berichtsanforderungen.',
            '**Datensouvränität und Sicherheitsstandards treiben AMD-Adoption bei großen deutschen Unternehmen an.** Finanz-, Gesundheits- und Rechtsorganisationen mit sensiblen Kundendaten bevorzugen AMD-Hardware mit lokaler ROCm-Verarbeitung, um DSGVO Article 32 (Sicherheitsmaßnahmen) und BSI-Grundschutz-Kataloge zu erfüllen.',
          ],
        },
      },
    },
    fr: {
      theme: 'Guides d\'achat GPU',
      title: 'Meilleures GPU AMD pour les LLM locaux',
      seoTitle: 'GPU AMD pour LLM locaux 2026: Comparaison ROCm et vLLM',
      intro: '**Les AMD RX 6800 XT et RX 7900 XTX sont des alternatives solides à NVIDIA, offrant 15-20% meilleure puissance de calcul par dollar, mais souffrent d\'un support ONNX Runtime et vLLM plus faible.** En avril 2026, AMD ROCm (HIP) a mûri, mais les couches de compatibilité créent des frictions. NVIDIA CUDA reste le chemin de moindre résistance pour les LLM locaux. Utilisez AMD uniquement si vous trouvez une excellente affaire d\'occasion ou possédez déjà du matériel AMD.',
      metaDescription: 'GPU AMD RX 6800 XT, 7900 XTX pour LLM locaux. Configuration ROCm, support vLLM, performance vs NVIDIA RTX. Guide décisionnel avril 2026.',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-fr.webp',
      publishDate: '2026-04-05',
      readTime: '8 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'GPU AMD',
      toc: [
        { label: 'Résumé', anchor: '#tldr' },
        { label: 'Quels GPU AMD en valent vraiment la peine?', anchor: '#which-amd' },
        { label: 'Comment les GPU AMD se comparent-ils à RTX en prix et vitesse?', anchor: '#amd-vs-nvidia' },
        { label: 'Quelle friction de configuration ROCm?', anchor: '#rocm-setup' },
        { label: 'Pouvez-vous exécuter Ollama et vLLM sur AMD?', anchor: '#software-support' },
        { label: 'Quand acheter AMD plutôt que NVIDIA?', anchor: '#when-buy-amd' },
        { label: 'Erreurs courantes d\'adoption AMD', anchor: '#mistakes' },
        { label: 'Questions fréquentes', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'AMD RX 6800 XT (16 Go, 300-350 € occasion) et RX 7900 XTX (24 Go, 400-500 € occasion) sont les seules options viables pour les LLM locaux.',
            'Performance par euro : AMD est 20-30% moins cher que NVIDIA, mais la friction logicielle coûte 5-10 heures de configuration.',
            'Ollama : Support AMD limité (le chemin ROCm était inconsistant dans nos tests d\'avril 2026, Ollama v0.3.x / ROCm 6.x — la détection GPU a échoué sur certaines configurations ; repli CPU lent). Vérifiez github.com/ollama/ollama pour la compatibilité AMD actuelle.',
            'vLLM : Support complet AMD ROCm depuis v0.6.0, mais configuration nécessite des pilotes manuels. Fonctionne bien après le démarrage.',
            'Text Generation WebUI : Excellent support AMD via ROCm. Meilleure expérience utilisateur sur AMD.',
            'Llama.cpp : Support natif AMD (backend HIP). Performance solide. Chemin AMD recommandé.',
            'Coûts de configuration : Prévoyez 5-10 heures débogage pilotes ROCm, compilation HIPCC, compatibilité kernel.',
            'Verdict (avril 2026) : Utilisez AMD uniquement si vous possédez déjà du matériel AMD, ou trouvez une excellente affaire d\'occasion (300 € pour une carte 16 Go). Sinon, NVIDIA CUDA reste plus simple.',
          ],
        },
        'which-amd': {
          title: 'Quels GPU AMD en valent vraiment la peine?',
          items: [
            '**RX 6800 XT** (16 Go GDDR6) : Le champion du rapport qualité-prix AMD. Lancement 2020. Solide pour inférence 7B-22B. Occasion : 300-350 €.',
            '**RX 6900 XT** (16 Go GDDR6) : Légèrement plus rapide que 6800 XT. Rare. Occasion : 350-400 €. L\'augmentation de prix ne vaut pas le coup.',
            '**RX 7900 XT** (20 Go GDDR6) : Architecture RDNA 3 plus récente. 20% plus rapide que 6800 XT. Occasion : 400-480 €. Bon pour 70B Q4.',
            '**RX 7900 XTX** (24 Go GDDR6) : GPU consumer AMD haut de gamme. 24 Go VRAM change la donne pour 70B. Occasion : 450-550 €. Comparable à la vitesse RTX 4090.',
            '**Radeon Pro W6800 (32 Go)** : Carte entreprise, moins cher en occasion (~200-300 €). Plus lent, mais 32 Go excellent pour 70B Q8. Niche.',
          ],
        },
        'amd-vs-nvidia': {
          title: 'Comment les GPU AMD se comparent-ils à RTX en prix et vitesse?',
          rows: [
            { 'GPU': 'RX 6800 XT', 'VRAM': '16 Go', 'TFLOPS': '1.952', 'Prix occasion': '300-350 €', 'Perf/€ vs RTX': '+25%', 'RTX équivalent': 'RTX 3080 (plus lent)' },
            { 'GPU': 'RX 7900 XT', 'VRAM': '20 Go', 'TFLOPS': '2.540', 'Prix occasion': '400-480 €', 'Perf/€ vs RTX': '+20%', 'RTX équivalent': 'RTX 4080 (similaire)' },
            { 'GPU': 'RX 7900 XTX', 'VRAM': '24 Go', 'TFLOPS': '2.750', 'Prix occasion': '450-550 €', 'Perf/€ vs RTX': '+15%', 'RTX équivalent': 'RTX 4090 (vitesse similaire)' },
            { 'GPU': 'RTX 3080', 'VRAM': '10 Go', 'TFLOPS': '1.456', 'Prix occasion': '350-400 €', 'Perf/€ vs RTX': '--', 'RTX équivalent': '--' },
            { 'GPU': 'RTX 4090', 'VRAM': '24 Go', 'TFLOPS': '2.752', 'Prix occasion': '1.000-1.300 €', 'Perf/€ vs RTX': '--', 'RTX équivalent': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', 'Prix occasion', 'Perf/€ vs RTX', 'RTX équivalent'],
        
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-fr.webp',
          imageCaption: 'La RX 7900 XTX égale la vitesse et la VRAM de la RTX 4090 pour environ 60 % du prix — la contrepartie est la friction de configuration de ROCm.',
        },
        'rocm-setup': {
          title: 'Quelle friction de configuration ROCm?',
          content: [
            '**1. Installez les pilotes AMD ROCm : `apt-get install rocm-dkms` (Ubuntu). Sur Windows, installer manuellement. 30 minutes.**',
            '2. Vérifiez le compilateur HIP : `hipcc --version`. Échoue souvent au premier essai. Déboguez la compatibilité kernel pour votre GPU.',
            '3. Installez HIPCC (compilateur HIP-vers-C++ AMD) : `apt-get install hip-runtime-amd`. Autre chaîne de dépendances.',
            '4. Testez avec petit LLM : Exécutez l\'inférence pour vérifier que l\'accélération GPU fonctionne. Repli CPU fréquent.',
            '5. Corrigez incompatibilités pilotes : ROCm v5.7 fonctionne avec kernel 5.15 mais pas 6.x. 2-4 heures débogage.',
            'NVIDIA CUDA comparé : `nvidia-cuda-toolkit` → un apt-get, accès GPU instantané. AMD demande 5-10× plus d\'effort.',
          ],
        },
        'software-support': {
          title: 'Pouvez-vous exécuter Ollama et vLLM sur AMD?',
          content: [
            '**Ollama sur AMD (selon nos tests d\'avril 2026, Ollama v0.3.x, ROCm 6.x) :** le support ROCm était inconsistant dans nos tests — la détection GPU a échoué sur certaines configurations, repli CPU lent. Vérifiez la liste de compatibilité AMD actuelle sur github.com/ollama/ollama avant de vous engager.',
            '**vLLM sur AMD** : Support complet ROCm depuis v0.6.0. Fonctionne bien, mais nécessite configuration ROCm/HIP manuelle. Bon après le démarrage.',
            '**Text Generation WebUI** : Excellent support AMD ROCm. Meilleure expérience sur AMD. Recommandé.',
            '**Llama.cpp** : Backend HIP natif. Performance solide. Chemin AMD le plus simple. Recommandé.',
            '**LM Studio** : NVIDIA uniquement. Pas de support AMD.',
            'Depuis avril 2026 : vLLM + llama.cpp sont vos chemins AMD. Ollama n\'est pas fiable.',
          ],
        
          image: '/images/best-amd-gpus-local-llm-software-support-hero-fr.webp',
          imageCaption: 'llama.cpp et Text Generation WebUI sont les voies fiables pour AMD en 2026 — le support ROCm d\'Ollama reste incohérent.',
        },
        'when-buy-amd': {
          title: 'Quand acheter AMD plutôt que NVIDIA?',
          content: [
            'Achetez AMD si :',
            '- Vous trouvez RX 7900 XTX occasion <450 € (sous-évalué vs RTX 4090).',
            '- Vous possédez déjà du matériel AMD et souhaitez cohérence écosystème.',
            '- Vous construisez un cluster et privilégiez puissance de calcul par euro sur facilité.',
            'N\'achetez pas AMD si :',
            '- Vous désirez expérience plug-and-play. NVIDIA CUDA fonctionne plus vite.',
            '- Vous avez besoin Ollama. Le support AMD ROCm pour Ollama a été peu fiable en pratique (en 2026).',
            '- Vous êtes contraint en temps. Débogage ROCm peut prendre 10+ heures.',
          ],
        },
        'mistakes': {
          title: 'Erreurs courantes d\'adoption AMD',
          items: [
            'Acheter RX 6700 (12 Go) croyant c\'est équivalent à 3060 12Go - 20% plus lent, difficile à trouver occasion.',
            'Supposer que ROCm « marche juste » comme CUDA - prévoyez 5-10 heures débogage pilotes et kernel.',
            'Utiliser Ollama avec AMD en attendant une intégration transparente — le support ROCm était inconsistant dans nos tests d\'avril 2026 (Ollama v0.3.x, ROCm 6.x) ; llama.cpp ou vLLM sont de meilleurs choix.',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: 'Étapes suivantes',
          items: [
            '[Meilleures GPU budget pour LLM local](/fr/local-llms/best-budget-gpus-local-llm) — Petit budget ? Les meilleures GPU rapport qualité-prix →',
            '[GPU vs CPU vs Apple Silicon](/fr/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD, Apple ou CPU — quelle plateforme choisir ? →',
            '[Combien de VRAM me faut-il ?](/fr/local-llms/how-much-vram-local-llm) — Faites correspondre la VRAM à la taille du modèle →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            { q: 'Devrais-je acheter AMD RX 6800 XT ou NVIDIA RTX 3080 pour LLM locaux?', a: 'RTX 3080 si vous privilégiez simplicité (CUDA « marche »). RX 6800 XT si vous voulez 25% meilleur rapport et tolérez 5-10 h configuration ROCm.' },
            { q: 'AMD RX 7900 XTX est-elle meilleure que RTX 4090?', a: 'Vitesse similaire, même VRAM (24 Go). RX 7900 XTX 200-300 € moins cher occasion (450-550 € vs 1.000-1.300 €). Configuration ROCm est le compromis.' },
            { q: 'Puis-je utiliser GPU AMD avec Ollama?', a: 'Techniquement oui. Dans nos tests d\'avril 2026 (Ollama v0.3.x, ROCm 6.x), le support ROCm était inconsistant — la détection GPU a échoué sur certaines configurations et le repli CPU était fréquent. Vérifiez la liste de compatibilité AMD actuelle sur github.com/ollama/ollama ; vLLM ou llama.cpp sont les chemins plus fiables pour AMD aujourd\'hui.' },
            { q: 'Quel est le meilleur chemin AMD pour LLM locaux 2026?', a: 'Llama.cpp (backend HIP) + Text Generation WebUI. Tous deux ont support AMD solide. Évitez Ollama.' },
            { q: 'Ai-je besoin Ubuntu pour AMD ROCm, ou Windows fonctionne?', a: 'Le support Windows existe (HIP sur Windows), mais il était moins stable qu\'Ubuntu dans nos tests d\'avril 2026. Ubuntu est le chemin recommandé.' },
            { q: 'RX 6700, RX 6700 XT ou 6750 bon pour modèles 7B?', a: 'RX 6700 (12 Go) fonctionne mais 20% plus lent que 6800 XT. RX 6700 XT (12 Go, même VRAM) a des fréquences ~15% plus rapides que la version non-XT, mais reste derrière la 6800 XT. Achetez l\'une ou l\'autre seulement si <250 €. Sinon étendez à 6800 XT.' },
            { q: 'La RX 6900 XT vaut-elle le coup pour les LLM locaux?', a: 'Pas vraiment. La RX 6900 XT (16 Go) est seulement marginalement plus rapide que la RX 6800 XT, plus rare en occasion, et coûte 350-400 € contre 300-350 € pour la 6800 XT. Le surcoût ne vaut pas la peine -- achetez plutôt la 6800 XT.' },
            { q: 'L\'AMD Radeon 680M est-elle bonne pour les LLM locaux?', a: 'La Radeon 680M est un graphique intégré dans les APU mobiles Ryzen 6000/7000 -- ce n\'est pas le même produit que la RX 6800M ou la RX 6800 XT, qui sont des cartes dédiées. Elle n\'a pas de VRAM dédiée et partage la RAM système à la place, donc elle n\'est viable que pour de petits modèles quantifiés (environ 3B de paramètres ou moins en Q4) et sera nettement plus lente que n\'importe quelle carte dédiée de ce guide. Pour un usage sérieux des LLM locaux, une carte dédiée comme la RX 6800 XT est le meilleur choix.' },
            { q: 'Puis-je mélanger GPU AMD et NVIDIA dans un système?', a: 'Théoriquement oui, mais gestion cauchemardesque. Chaque GPU besoin sa propre exécution CUDA/HIP. Non recommandé.' },
            { q: 'Combien de temps faut-il configurer AMD ROCm?', a: 'Prévoyez 5-10 heures pour débogage pilotes, compilation HIPCC et résolution compatibilité. C\'est un investissement unique. Après, AMD stable et productif.' },
            { q: 'AMD ROCm convient-il aux petites entreprises technologiques françaises?', a: 'Absolument. Les startups et PME tech bénéficient de 20-30% économies par rapport NVIDIA et contrôle données complet sur site. L\'effort configuration initial (5-10 h) vaut l\'investissement pour équipes valorisant indépendance technologique et économies.' },
            { q: 'CNIL a-t-elle des recommandations sur les LLM locaux?', a: 'CNIL recommande les LLM locaux comme solution idéale pour données sensibles. Traitement local satisfait RGPD obligations de sécurité (Article 32) automatiquement, sans dépendre de fournisseurs cloud. AMD ROCm avec LLM local offre conformité RGPD maximale.' },
          ],
        },
        'relatedReading': {
          title: 'Lectures complémentaires',
          items: [
            '[Meilleures GPU budget pour LLM locaux](/fr/local-llms/best-budget-gpus-local-llm)',
            '[Meilleures GPU pour LLM locaux](/fr/local-llms/best-gpus-for-local-llms)',
            '[GPU vs CPU vs Apple Silicon](/fr/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Local LLM Hardware Guide 2026](/fr/local-llms/local-llm-hardware-guide-2026)',
          ],
        },
        'sources': {
          title: 'Sources',
          items: [
            'Documentation AMD ROCm et GitHub : compilateur HIP, matrice compatibilité pilotes, exemples inférence LLM',
            'vLLM GitHub : implémentation backend AMD/ROCm et statut support (v0.6.0+)',
            'Llama.cpp GitHub : backend HIP pour support GPU AMD',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/fr/local-llms/best-amd-gpus-local-llm',
        name: 'Meilleures GPU AMD pour les LLM locaux',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'AMD RX 6800 XT (16 Go, 300-350 € occasion) et RX 7900 XTX (24 Go, 400-500 € occasion) sont les seules options viables pour les LLM locaux.' },
          { '@type': 'ListItem', position: 2, name: 'Performance par euro : AMD est 20-30% moins cher que NVIDIA, mais la friction logicielle coûte 5-10 heures de configuration.' },
          { '@type': 'ListItem', position: 3, name: 'Ollama : Support AMD limité (chemin ROCm inconsistant dans nos tests d\'avril 2026, Ollama v0.3.x / ROCm 6.x ; repli CPU lent). Vérifiez github.com/ollama/ollama pour la compatibilité AMD actuelle.' },
          { '@type': 'ListItem', position: 4, name: 'vLLM : Support complet AMD ROCm depuis v0.6.0, mais configuration nécessite des pilotes manuels. Fonctionne bien après le démarrage.' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI : Excellent support AMD via ROCm. Meilleure expérience utilisateur sur AMD.' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp : Support natif AMD (backend HIP). Performance solide. Chemin AMD recommandé.' },
          { '@type': 'ListItem', position: 7, name: 'Coûts de configuration : Prévoyez 5-10 heures débogage pilotes ROCm, compilation HIPCC, compatibilité kernel.' },
          { '@type': 'ListItem', position: 8, name: 'Verdict (avril 2026) : Utilisez AMD uniquement si vous possédez déjà du matériel AMD, ou trouvez une excellente affaire d\'occasion (300 € pour une carte 16 Go). Sinon, NVIDIA CUDA reste plus simple.' },
        ],
        regionalContext: {
          title: 'Contexte d\'adoption régionale et conformité',
          content: [
            '**Les entreprises françaises et européennes choisissent les LLM locaux pour la conformité RGPD.** Les outils qui traitent toutes les données localement (Ollama, LM Studio, llama.cpp) satisfont automatiquement les exigences de résidence des données de l\'UE. CNIL recommande les LLM locaux comme solution idéale pour données sensibles professionnelles. Les organisations valorisent la télémétrie désactivée, absence synchronisation cloud, et capacité déploiement isolé.',
            '**Les directrices réglementaires européennes influencent la sélection GPU basée sur efficacité énergétique.** La Directive Écoconception affecte la disponibilité GPU sur les marchés européens. Les organisations considèrent le coût total de possession incluant consommation énergétique sous obligations rapports UE.',
            '**La souveraineté des données anime adoption AMD chez les grandes entreprises françaises.** Les organisations financières, santé, juridique avec données client sensibles privilégient AMD avec traitement ROCm local satisfaisant obligations RGPD Article 32 (mesures sécurité) automatiquement, sans dépendre fournisseurs cloud américains.',
          ],
        },
      },
    },
    ja: {
      theme: 'GPU 購入ガイド',
      title: 'ローカル LLM 向けベスト AMD GPU 2026',
      seoTitle: 'AMD GPU ローカル LLM 2026：ROCm & vLLM ガイド',
      intro: '**AMD RX 6800 XT と RX 7900 XTX は NVIDIA の堅実な代替品で、計算性能当たりのコスト が 15-20% 優れています。ただし ONNX Runtime と vLLM ドライバーのサポートが弱いです。** 2026 年 4 月時点で AMD ROCm (HIP) は成熟していますが、互換レイヤーが摩擦を増加させます。NVIDIA CUDA は依然としてローカル LLM への最短経路です。AMD は優れた中古取引を見つけた場合、または既に AMD ハードウェアを所有している場合のみ使用してください。',
      metaDescription: 'AMD RX 6800 XT、7900 XTX ローカル LLM 向け。ROCm セットアップ、vLLM サポート、NVIDIA RTX 性能対比。2026 年 4 月決定ガイド。',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-ja.webp',
      publishDate: '2026-04-05',
      readTime: '9分で読める',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      toc: [
        { label: '重要ポイント', anchor: '#tldr' },
        { label: '実際に価値のある AMD GPU は？', anchor: '#which-amd' },
        { label: 'AMD GPU と RTX の価格・性能対比', anchor: '#amd-vs-nvidia' },
        { label: 'ROCm セットアップの課題', anchor: '#rocm-setup' },
        { label: 'Ollama と vLLM を AMD で実行できるか', anchor: '#software-support' },
        { label: 'AMD を NVIDIA の代わりに購入すべき場合', anchor: '#when-buy-amd' },
        { label: 'AMD 導入における一般的な過ちと注意点', anchor: '#mistakes' },
        { label: 'よくある質問', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'AMD RX 6800 XT（16GB、中古 ¥35,000-40,000）と RX 7900 XTX（24GB、中古 ¥50,000-65,000）は、ローカル LLM のための唯一の実用的なオプションです。',
            'コスト・パフォーマンス：AMD は NVIDIA より 20-30% 安いですが、ソフトウェアの摩擦により 5-10 時間のセットアップ時間が必要です。',
            'Ollama：AMD サポート限定（ROCm パスは2026年4月テスト時点、Ollama v0.3.x / ROCm 6.x で不安定でした — 一部の構成でGPU検出が失敗；CPU フォールバックが遅い）。導入前にgithub.com/ollama/ollamaで最新のAMD互換性リストを確認してください。',
            'vLLM：v0.6.0 起完全サポート AMD ROCm。セットアップには手動ドライバーが必要です。セットアップを乗り越えれば動作します。',
            'Text Generation WebUI：AMD への優れたサポート。AMD 上での最高のユーザー体験。',
            'Llama.cpp：ネイティブ AMD サポート（HIP バックエンド）。堅牢なパフォーマンス。推奨される AMD パス。',
            'セットアップコスト：ROCm ドライバー、HIPCC コンパイル、カーネル互換性のデバッグに 5-10 時間を計画してください。',
            '評決（2026 年 4 月）：既に AMD ハードウェアを所有しているか、優れた中古取引（16GB カード ¥35,000）を見つけた場合にのみ AMD を使用してください。それ以外は NVIDIA CUDA がシンプルです。',
          ],
        },
        'which-amd': {
          title: '実際に価値のある AMD GPU は？',
          items: [
            '**RX 6800 XT**（16GB GDDR6）：AMD のコスト・パフォーマンス王。2020 年リリース。7B-22B 推論に堅牢です。中古：¥35,000-40,000。',
            '**RX 6900 XT**（16GB GDDR6）：6800 XT よりわずかに高速。レア。中古：¥40,000-45,000。価格上昇の価値がありません。',
            '**RX 7900 XT**（20GB GDDR6）：新型 RDNA 3 アーキテクチャ。6800 XT より 20% 高速。中古：¥50,000-55,000。70B Q4 に適しています。',
            '**RX 7900 XTX**（24GB GDDR6）：AMD トップ・コンシューマー GPU。24GB VRAM は 70B に大きな違いをもたらします。中古：¥55,000-65,000。RTX 4090 の速度に匹敵します。',
            '**Radeon Pro W6800（32GB）**：エンタープライズ・カード、中古で安い（～¥25,000-35,000）。遅いですが、32GB は 70B Q8 に優秀です。ニッチです。',
          ],
        },
        'amd-vs-nvidia': {
          title: 'AMD GPU と RTX の価格・性能対比',
          rows: [
            { 'GPU': 'RX 6800 XT', 'VRAM': '16GB', 'TFLOPS': '1.952', '中古価格': '¥35,000-40,000', '性能/円 vs RTX': '+25%', '等効 RTX': 'RTX 3080（遅い）' },
            { 'GPU': 'RX 7900 XT', 'VRAM': '20GB', 'TFLOPS': '2.540', '中古価格': '¥50,000-55,000', '性能/円 vs RTX': '+20%', '等効 RTX': 'RTX 4080（相当）' },
            { 'GPU': 'RX 7900 XTX', 'VRAM': '24GB', 'TFLOPS': '2.750', '中古価格': '¥55,000-65,000', '性能/円 vs RTX': '+15%', '等効 RTX': 'RTX 4090（相当速度）' },
            { 'GPU': 'RTX 3080', 'VRAM': '10GB', 'TFLOPS': '1.456', '中古価格': '¥40,000-45,000', '性能/円 vs RTX': '--', '等効 RTX': '--' },
            { 'GPU': 'RTX 4090', 'VRAM': '24GB', 'TFLOPS': '2.752', '中古価格': '¥120,000-150,000', '性能/円 vs RTX': '--', '等効 RTX': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', '中古価格', '性能/円 vs RTX', '等効 RTX'],
        
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-ja.webp',
          imageCaption: 'RX 7900 XTXはRTX 4090と同等の速度とVRAMを、価格の約60%で実現します — その代償がROCmのセットアップの手間です。',
        },
        'rocm-setup': {
          title: 'ROCm セットアップの課題',
          content: [
            '1. AMD ROCm ドライバーをインストール：`apt-get install rocm-dkms`（Ubuntu）。Windows では手動 .exe インストーラー。30 分かかります。',
            '2. HIP コンパイラーを検証：`hipcc --version`。通常第一試行で失敗します。GPU のカーネル互換性をデバッグします。',
            '3. HIPCC（AMD HIP-to-C++ コンパイラー）をインストール：`apt-get install hip-runtime-amd`。別の依存関係チェーン。',
            '4. 小型 LLM でテスト：推論を実行して GPU アクセラレーションが動作することを検証します。CPU フォールバックが頻繁です。',
            '5. ドライバー・バージョン不整合を解決：ROCm v5.7 はカーネル 5.15 で動作しますが、6.x では動作しません。2-4 時間のデバッグが必要です。',
            '**注意：** NVIDIA CUDA との比較：`nvidia-cuda-toolkit` → 1 つの apt-get、即座 GPU アクセス。AMD は 5-10 倍の努力が必要です。',
          ],
        },
        'software-support': {
          title: 'Ollama と vLLM を AMD で実行できるか',
          content: [
            '**AMD上のOllama（2026年4月テスト時点、Ollama v0.3.x、ROCm 6.x）：** ROCmサポートはテストで不安定でした——一部の構成でGPU検出が失敗し、CPUフォールバックが遅い。導入前にgithub.com/ollama/ollamaで最新のAMD互換性リストを確認してください。',
            '**vLLM on AMD：** v0.6.0 以降で完全 ROCm サポート。動作しますが、手動 ROCm/HIP ドライバー設定が必要です。セットアップを乗り越えれば良好です。',
            '**Text Generation WebUI：** 優れた AMD ROCm サポート。AMD 上での最高の体験。推奨。',
            '**Llama.cpp：** ネイティブ HIP バックエンド。堅牢なパフォーマンス。最も簡単な AMD パス。推奨。',
            '**LM Studio：** NVIDIA のみ。AMD サポートなし。',
            '**2026 年 4 月起：** vLLM + llama.cpp があなたの AMD パスです。Ollama は信頼できません。',
          ],
        
          image: '/images/best-amd-gpus-local-llm-software-support-hero-ja.webp',
          imageCaption: '2026年時点でllama.cppとText Generation WebUIが信頼できるAMDの選択肢です — OllamaのROCmサポートは不安定なままです。',
        },
        'when-buy-amd': {
          title: 'AMD を NVIDIA の代わりに購入すべき場合',
          content: [
            '**AMD を購入すべき場合：**',
            '- 中古 RX 7900 XTX を ¥55,000 未満で見つけた場合（RTX 4090 に対して過小評価）。',
            '- 既に AMD ハードウェアを所有していて、エコシステムの一貫性を望む場合。',
            '- クラスターを構築していて、利便性よりも性能当たりコストを優先する場合。',
            '**AMD を購入すべきではない場合：**',
            '- プラグ・アンド・プレイ体験を望む場合。NVIDIA CUDA の方が速く機能します。',
            '- Ollama が必要な場合。AMD サポートは不安定です。',
            '- 時間が限定されている場合。ROCm デバッグに 10+ 時間かかることがあります。',
          ],
        },
        'mistakes': {
          title: 'AMD 導入における一般的な過ちと注意点',
          items: [
            '⚠️ **RX 6700（12GB）を 3060 12GB 同等と誤認して購入** -- 20% 遅く、中古でも見つけにくい。',
            '⚠️ **ROCm が CUDA のように「即座に機能する」と仮定** -- ドライバーとカーネル互換性のデバッグに 5-10 時間を計画してください。',
            '⚠️ **Ollama で AMD を使用しシームレスな統合を期待** — 2026年4月テスト（Ollama v0.3.x、ROCm 6.x）でROCmサポートは不安定でした。llama.cpp または vLLM の方が優れた選択肢です。',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: '次のステップ',
          items: [
            '[予算内で最高のGPU（ローカルLLM向け）](/ja/local-llms/best-budget-gpus-local-llm) — 予算が限られている？コスパ最強GPU →',
            '[GPU vs CPU vs Apple Silicon](/ja/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD・Apple・CPU、どのプラットフォームが最適か →',
            '[必要なVRAMは？](/ja/local-llms/how-much-vram-local-llm) — GPUのVRAMとモデルサイズを合わせる →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            { q: 'ローカル LLM に AMD RX 6800 XT または NVIDIA RTX 3080 を購入すべきか？', a: 'シンプルさを優先する場合は RTX 3080（CUDA「即座に機能」）。25% 優れたコスト・パフォーマンスで 5-10 時間の ROCm セットアップを厭わない場合は RX 6800 XT。' },
            { q: 'AMD RX 7900 XTX は RTX 4090 より優れているか？', a: '速度は同等、VRAM は同じ（24GB）。RX 7900 XTX は中古 ¥55,000-65,000 対 ¥120,000-150,000。ROCm セットアップはトレードオフです。' },
            { q: 'AMD GPU を Ollama で使用できるか？', a: '技術的には可能です。2026年4月のテスト（Ollama v0.3.x、ROCm 6.x）では、ROCmサポートは不安定でした——一部の構成でGPU検出が失敗し、CPUフォールバックが頻繁でした。導入前にgithub.com/ollama/ollamaで最新のAMD互換性リストを確認してください；信頼性の高いAMD推論には、vLLM または llama.cpp がより安全な選択肢です。' },
            { q: '2026 年のローカル LLM に最適な AMD パスは何か？', a: 'Llama.cpp（HIP バックエンド）+ Text Generation WebUI。両方とも AMD に堅実なサポートがあります。Ollama を避けてください。' },
            { q: 'AMD ROCm に Ubuntu が必要か、それとも Windows でも機能するか？', a: 'Windows サポートが存在（Windows 上の HIP）しますが、2026年4月テスト時点ではUbuntuより不安定でした。Ubuntu が推奨パスです。' },
            { q: '7B モデル用に RX 6700、RX 6700 XT、または 6750 は適切か？', a: 'RX 6700（12GB）は動作しますが、RX 6800 XT より 20% 遅い。RX 6700 XT（12GB、VRAM は同じ）は非 XT 版よりクロックが約 15% 速いですが、6800 XT にはまだ及びません。どちらも ¥25,000 以下の場合のみ購入してください。それ以外は 6800 XT に拡張してください。' },
            { q: 'ローカル LLM に RX 6900 XT を買う価値はあるか？', a: 'あまりありません。RX 6900 XT（16GB）は RX 6800 XT よりわずかに速いだけで、中古でも希少、価格は 6800 XT より高くなりがちです。価格差に見合う価値はありません -- 代わりに 6800 XT を購入してください。' },
            { q: 'AMD Radeon 680M はローカル LLM の実行に適しているか？', a: 'Radeon 680M は Ryzen 6000/7000 モバイル APU に内蔵された統合グラフィックスであり、ディスクリート GPU の RX 6800M や RX 6800 XT とは別の製品です。専用 VRAM を持たずシステム RAM を共有するため、小型の量子化モデル（おおよそ 3B パラメータ以下、Q4）にしか適しておらず、このページのどのディスクリート GPU よりも明らかに低速です。本格的なローカル LLM 用途には、RX 6800 XT のようなディスクリート GPU の方が適しています。' },
            { q: '1 つのシステムで AMD と NVIDIA GPU を混合できるか？', a: '理論的には可能です。ただし管理は悪夢です。各 GPU に独自の CUDA/HIP ランタイムが必要です。非推奨。' },
            { q: 'AMD ROCm セットアップにはどのくらい時間がかかるか？', a: 'ドライバー・デバッグ、HIPCC コンパイル、カーネル互換性の解決に 5-10 時間を計画してください。一回限りです。その後、AMD は安定して生産的です。' },
            { q: '日本企業は AMD ROCm を採用すべきか？', a: 'はい。特に金融、医療、法律。データは完全にオンプレミスに留まり、METI AI ガバナンス 2024 ガイドラインに準拠します。セットアップの努力はそれだけの価値があります。' },
            { q: 'METI AI ガバナンス 2024 とは何か、AMD ROCm とどう関連するか？', a: '日本政府の METI（経産省）AI ガバナンス・フレームワーク。監査ログ、バージョン管理統合、文書化 API インターフェースの確認を要求します。AMD ROCm は完全ローカル処理であるため自動的に準拠し、IT セキュリティチームが管理できます。' },
          ],
        },
        'relatedReading': {
          title: '関連資料',
          items: [
            '[ローカル LLM 向けベスト予算 GPU](/ja/local-llms/best-budget-gpus-local-llm)',
            '[ローカル LLM 向けベスト GPU](/ja/local-llms/best-gpus-for-local-llms)',
            '[GPU vs CPU vs Apple Silicon](/ja/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Text Generation WebUI vs vLLM vs Llama.cpp](/ja/local-llms/text-generation-webui-vs-vllm-vs-llamacpp)',
          ],
        },
        'sources': {
          title: '参考資料',
          items: [
            'AMD ROCm ドキュメントおよび GitHub：HIP コンパイラー、ドライバー互換性マトリックス、LLM 推論例',
            'vLLM GitHub：AMD/ROCm バックエンド実装およびサポート状態（v0.6.0+）',
            'Llama.cpp GitHub：AMD GPU サポート用 HIP バックエンド',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/ja/local-llms/best-amd-gpus-local-llm',
        name: 'ローカル LLM 向けベスト AMD GPU',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'AMD RX 6800 XT（16GB、中古 ¥35,000-40,000）と RX 7900 XTX（24GB、中古 ¥50,000-65,000）は、ローカル LLM のための唯一の実用的なオプションです。' },
          { '@type': 'ListItem', position: 2, name: 'コスト・パフォーマンス：AMD は NVIDIA より 20-30% 安いですが、ソフトウェアの摩擦により 5-10 時間のセットアップ時間が必要です。' },
          { '@type': 'ListItem', position: 3, name: 'Ollama：AMD サポート限定（ROCm パスは2026年4月テスト、Ollama v0.3.x / ROCm 6.xで不安定；CPU フォールバックが遅い）。github.com/ollama/ollamaで最新のAMD互換性を確認してください。' },
          { '@type': 'ListItem', position: 4, name: 'vLLM：v0.6.0 起完全サポート AMD ROCm。セットアップには手動ドライバーが必要です。セットアップを乗り越えれば動作します。' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI：AMD への優れたサポート。AMD 上での最高のユーザー体験。' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp：ネイティブ AMD サポート（HIP バックエンド）。堅牢なパフォーマンス。推奨される AMD パス。' },
          { '@type': 'ListItem', position: 7, name: 'セットアップコスト：ROCm ドライバー、HIPCC コンパイル、カーネル互換性のデバッグに 5-10 時間を計画してください。' },
          { '@type': 'ListItem', position: 8, name: '評決（2026 年 4 月）：既に AMD ハードウェアを所有しているか、優れた中古取引（16GB カード ¥35,000）を見つけた場合にのみ AMD を使用してください。それ以外は NVIDIA CUDA がシンプルです。' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        regionalContext: {
          title: '日本国内の採用および METI ガバナンス',
          content: [
            '**日本企業：METI AI ガバナンス 2024 とローカル LLM 部署。** 日本政府の METI（経産省）AI ガバナンス・フレームワーク。監査ログ、バージョン管理統合、文書化 API インターフェースの確認を要求します。金融、医療、法律、通信などの規制業界では、AMD ROCm ローカル部署が完全なデータ・プライバシーと METI ガバナンス準拠を実現します。Ollama、LM Studio、llama.cpp などの完全ローカル化ツールは、データが政府サーバーを通じて海外に流出しないことを保証します。',
            '**亜太地域：複数国のデータ規制フレームワークがローカル AI インフラ需要を駆動。** 日本（METI AI 治理）、シンガポール（PDPA）、韓国（PIPA）、ベトナム（情報セキュリティ法）などの国々はすべて厳格なデータ内国化要件を強制しています。この地域の企業、大学、政府機関は、複数国のコンプライアンス要件を同時に満たすために AMD ROCm ローカル LLM を採用しています。単一のローカル部署はすべての地域規制を満たしています。',
            '**企業級部署：コスト、データ管理、および監管コンプライアンスの統一。** 多国籍企業（銀行、医薬品、製造）の亜太地域の子会社は、地元の AI ガバナンス規定を遵守する必要があります。AMD ROCm はプラグ・アンド・プレイ・ソリューションを提供しています：クラウド・ロックイン・なし、ベンダー・ロックイン・なし、クロスボーダー・データ・なし。初期セットアップ作業（5-10 時間）は複数年の運用に分散され、ROI は大きい：クラウド API に対して年間数百万ドル節約され、同時にデータ・セキュリティと監管コンプライアンスを保証します。',
          ],
        },
      },
    },
    zh: {
      theme: 'GPU 购买指南',
      title: '本地 LLM 最佳 AMD GPU 2026',
      seoTitle: 'AMD GPU 本地 LLM 2026：ROCm vs vLLM 完整对比指南',
      intro: '**AMD RX 6800 XT 和 RX 7900 XTX 是 NVIDIA 的坚实替代品，性能成本比提高 15-20%，但 ONNX Runtime 和 vLLM 驱动程序支持较弱。** 截至 2026 年 4 月，AMD ROCm (HIP) 已成熟，但兼容层增加了摩擦。NVIDIA CUDA 仍是本地 LLM 的最平缓路径。仅当您找到优秀的二手交易或已拥有 AMD 硬件时才选择 AMD。',
      metaDescription: 'AMD RX 6800 XT、7900 XTX 本地 LLM。ROCm 设置、vLLM 支持、NVIDIA RTX 性能对比。2026 年 4 月决策指南。',
      heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-zh.webp',
      publishDate: '2026-04-05',
      readTime: '阅读约9分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      toc: [
        { label: '核心要点', anchor: '#tldr' },
        { label: '哪些 AMD GPU 值得考虑？', anchor: '#which-amd' },
        { label: 'AMD GPU 与 RTX 的价格和性能对比', anchor: '#amd-vs-nvidia' },
        { label: 'ROCm 设置的难点', anchor: '#rocm-setup' },
        { label: '能否在 AMD 上运行 Ollama 和 vLLM？', anchor: '#software-support' },
        { label: '何时应购买 AMD 而非 NVIDIA？', anchor: '#when-buy-amd' },
        { label: 'AMD 采用的常见错误', anchor: '#mistakes' },
        { label: '常见问题', anchor: '#faq' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'AMD RX 6800 XT（16GB，二手 $300-350）和 RX 7900 XTX（24GB，二手 $400-500）是本地 LLM 的唯一可行选项。',
            '性能成本比：AMD 比 NVIDIA 便宜 20-30%，但软件摩擦需要 5-10 小时设置时间。',
            'Ollama：AMD 支持有限（ROCm 路径在我们2026年4月的测试中不稳定，Ollama v0.3.x / ROCm 6.x——某些配置下GPU检测失败；CPU 回退缓慢）。在决定使用前，请查看github.com/ollama/ollama上的最新AMD兼容性列表。',
            'vLLM：v0.6.0 起完全支持 AMD ROCm。需要手动驱动程序。设置完成后工作良好。',
            'Text Generation WebUI：AMD 支持优异。AMD 上最佳用户体验。',
            'Llama.cpp：原生 AMD 支持（HIP 后端）。性能稳定。推荐 AMD 路径。',
            '设置成本：计划 5-10 小时调试 ROCm 驱动程序、HIPCC 编译、内核兼容性。',
            '结论（2026 年 4 月）：仅在已拥有 AMD 硬件或找到优秀二手交易（16GB 卡 $300）时使用 AMD。否则 NVIDIA CUDA 更简单。',
          ],
        },
        'which-amd': {
          title: '哪些 AMD GPU 值得考虑？',
          items: [
            '**RX 6800 XT**（16GB GDDR6）：AMD 性价比之王。2020 年发布。适合 7B-22B 推理。二手：$300-350。',
            '**RX 6900 XT**（16GB GDDR6）：比 6800 XT 略快。稀有。二手：$350-400。价格提升不值。',
            '**RX 7900 XT**（20GB GDDR6）：新 RDNA 3 架构。比 6800 XT 快 20%。二手：$400-480。适合 70B Q4。',
            '**RX 7900 XTX**（24GB GDDR6）：AMD 顶级消费级 GPU。24GB VRAM 对 70B 是游戏改变者。二手：$450-550。媲美 RTX 4090 速度。',
            '**Radeon Pro W6800（32GB）**：企业卡，二手便宜（～$200-300）。较慢，但 32GB 对 70B Q8 优秀。小众。',
          ],
        },
        'amd-vs-nvidia': {
          title: 'AMD GPU 与 RTX 的价格和性能对比',
          rows: [
            { 'GPU': 'RX 6800 XT', 'VRAM': '16GB', 'TFLOPS': '1,952', '二手价格': '$300-350', '性价比 vs RTX': '+25%', '等效 RTX': 'RTX 3080（较慢）' },
            { 'GPU': 'RX 7900 XT', 'VRAM': '20GB', 'TFLOPS': '2,540', '二手价格': '$400-480', '性价比 vs RTX': '+20%', '等效 RTX': 'RTX 4080（相当）' },
            { 'GPU': 'RX 7900 XTX', 'VRAM': '24GB', 'TFLOPS': '2,750', '二手价格': '$450-550', '性价比 vs RTX': '+15%', '等效 RTX': 'RTX 4090（相当速度）' },
            { 'GPU': 'RTX 3080', 'VRAM': '10GB', 'TFLOPS': '1,456', '二手价格': '$350-400', '性价比 vs RTX': '--', '等效 RTX': '--' },
            { 'GPU': 'RTX 4090', 'VRAM': '24GB', 'TFLOPS': '2,752', '二手价格': '$1,000-1,300', '性价比 vs RTX': '--', '等效 RTX': '--' },
          ],
          columns: ['GPU', 'VRAM', 'TFLOPS', '二手价格', '性价比 vs RTX', '等效 RTX'],
        
          image: '/images/best-amd-gpus-local-llm-price-performance-hero-zh.webp',
          imageCaption: 'RX 7900 XTX以约60%的价格实现与RTX 4090相当的速度和VRAM — 代价是ROCm配置的繁琐。',
        },
        'rocm-setup': {
          title: 'ROCm 设置的难点',
          content: [
            '**实施步骤：**',
            '1. 安装 AMD ROCm 驱动程序：`apt-get install rocm-dkms`（Ubuntu）。Windows 需手动 .exe 安装程序。需 30 分钟。',
            '2. 验证 HIP 编译器：`hipcc --version`。通常第一次失败。调试您 GPU 的内核兼容性。',
            '3. 安装 HIPCC（AMD HIP-to-C++ 编译器）：`apt-get install hip-runtime-amd`。另一个依赖链。',
            '4. 用小型 LLM 测试：运行推理以验证 GPU 加速工作。CPU 回退常见。',
            '5. 解决驱动程序版本不匹配：ROCm v5.7 适用于内核 5.15 但不适用 6.x。需 2-4 小时调试。',
            '**注意：** 与 NVIDIA CUDA 比较：`nvidia-cuda-toolkit` → 一个 apt-get，立即 GPU 访问。AMD 需 5-10 倍努力。',
          ],
        },
        'software-support': {
          title: '能否在 AMD 上运行 Ollama 和 vLLM？',
          content: [
            '**AMD上的Ollama（基于我们2026年4月的测试，Ollama v0.3.x，ROCm 6.x）：** ROCm支持在我们的测试中不稳定——某些配置下GPU检测失败，CPU回退缓慢。在决定使用前，请查看github.com/ollama/ollama上的最新AMD兼容性列表。',
            '**vLLM on AMD：** v0.6.0 起完全 ROCm 支持。工作，但需手动 ROCm/HIP 驱动程序设置。度过设置期后良好。',
            '**Text Generation WebUI：** 优异 AMD ROCm 支持。AMD 上最佳体验。推荐。',
            '**Llama.cpp：** 原生 HIP 后端。性能稳定。最简单的 AMD 路径。推荐。',
            '**LM Studio：** 仅 NVIDIA。无 AMD 支持。',
            '**2026 年 4 月起：** vLLM + llama.cpp 是您的 AMD 路径。Ollama 不可靠。',
          ],
        
          image: '/images/best-amd-gpus-local-llm-software-support-hero-zh.webp',
          imageCaption: '截至2026年，llama.cpp和Text Generation WebUI是可靠的AMD方案 — Ollama的ROCm支持仍不稳定。',
        },
        'when-buy-amd': {
          title: '何时应购买 AMD 而非 NVIDIA？',
          content: [
            '**购买 AMD 如果：**',
            '- 找到二手 RX 7900 XTX 低于 $450（相对 RTX 4090 低估）。',
            '- 已拥有 AMD 硬件，希望生态系统一致性。',
            '- 构建集群，优先性价比胜于易用性。',
            '**不购买 AMD 如果：**',
            '- 希望即插即用体验。NVIDIA CUDA 更快工作。',
            '- 需要 Ollama。AMD 支持不稳定。',
            '- 时间有限。ROCm 调试可能耗 10+ 小时。',
          ],
        },
        'mistakes': {
          title: 'AMD 采用的常见错误',
          items: [
            '⚠️ **购买 RX 6700（12GB）误认为等同 3060 12GB** -- 慢 20%，二手也难找。',
            '⚠️ **假设 ROCm 像 CUDA 一样「即插即用」** -- 计划 5-10 小时驱动程序和内核兼容性调试。',
            '⚠️ **在 AMD 用 Ollama 期待无缝集成** — 2026年4月测试（Ollama v0.3.x，ROCm 6.x）中ROCm支持不稳定；llama.cpp 或 vLLM 是更佳选择。',
          ],
        },
        'nextSteps': {
          id: 'next-steps',
          title: '下一步',
          items: [
            '[本地LLM预算GPU推荐](/zh/local-llms/best-budget-gpus-local-llm) — 预算有限？性价比最高的GPU →',
            '[GPU vs CPU vs Apple Silicon](/zh/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD、Apple还是CPU？哪个平台最合适 →',
            '[我需要多少VRAM？](/zh/local-llms/how-much-vram-local-llm) — 根据模型大小匹配GPU显存 →',
          ],
        },
        'faqSection': {
          id: 'faq',
          title: '常见问题',
          faqs: [
            { q: '本地 LLM 应购买 AMD RX 6800 XT 还是 NVIDIA RTX 3080？', a: '优先简单则 RTX 3080（CUDA「即用」）。优先 25% 更优性价比且可承受 5-10 小时 ROCm 设置则 RX 6800 XT。' },
            { q: 'AMD RX 7900 XTX 优于 RTX 4090 吗？', a: '速度相当，VRAM 相同（24GB）。RX 7900 XTX 二手 $450-550 对比 $1,000-1,300。ROCm 设置是权衡。' },
            { q: '能用 Ollama 使用 AMD GPU 吗？', a: '技术上可以。在我们2026年4月的测试（Ollama v0.3.x，ROCm 6.x）中，ROCm支持不稳定——某些配置下GPU检测失败，CPU回退常见。在决定使用前，请查看github.com/ollama/ollama上的最新AMD兼容性列表；对于可靠的AMD推理，vLLM或llama.cpp是更安全的选择。' },
            { q: '2026 年本地 LLM 最优 AMD 路径？', a: 'Llama.cpp（HIP 后端）+ Text Generation WebUI。两者都对 AMD 有坚实支持。避免 Ollama。' },
            { q: 'AMD ROCm 需要 Ubuntu 还是 Windows 也可？', a: 'Windows 支持存在（Windows 上 HIP），但在我们2026年4月的测试中不如Ubuntu稳定。Ubuntu 是推荐路径。' },
            { q: '7B 模型用 RX 6700、RX 6700 XT 或 6750 合适吗？', a: 'RX 6700（12GB）可用但比 6800 XT 慢 20%。RX 6700 XT（12GB，VRAM 相同）频率比非 XT 版快约 15%，但仍不及 6800 XT。两者均仅 $250 以下购买。否则扩展到 6800 XT。' },
            { q: '本地 LLM 值得买 RX 6900 XT 吗？', a: '不太值得。RX 6900 XT（16GB）只比 RX 6800 XT 略快，二手更稀有，价格约 $350-400，高于 6800 XT 的 $300-350。差价不值——建议直接买 6800 XT。' },
            { q: 'AMD Radeon 680M 适合运行本地 LLM 吗？', a: 'Radeon 680M 是 Ryzen 6000/7000 移动 APU 内置的集成显卡，和独立显卡 RX 6800M 或 RX 6800 XT 不是同一产品。它没有独立显存,而是与系统内存共享,因此只适合运行很小的量化模型(大约 3B 参数或更少,Q4 精度),速度也明显慢于本文提到的任何独立显卡。若要认真跑本地 LLM,像 RX 6800 XT 这样的独立显卡才是更好的选择。' },
            { q: '能在一个系统混合 AMD 和 NVIDIA GPU 吗？', a: '理论上可以。但管理是噩梦。每个 GPU 需自己 CUDA/HIP 运行时。不推荐。' },
            { q: 'AMD ROCm 设置需多长时间？', a: '驱动程序调试、HIPCC 编译、内核兼容性解决计划 5-10 小时。仅一次。之后 AMD 稳定有效。' },
            { q: '中国企业应采用 AMD ROCm 吗？', a: '是。特别金融、医疗、法律。数据完全驻留本地，符合《数据安全法》。设置努力值得投资。' },
            { q: '什么是中国《数据安全法》，AMD ROCm 如何相关？', a: '中国政府 2021 年数据安全法。要求敏感数据不跨境。本地 LLM with AMD ROCm 完全满足，数据永不离开企业网络。' },
          ],
        },
        'relatedReading': {
          title: '延伸阅读',
          items: [
            '[本地 LLM 最佳预算 GPU](/zh/local-llms/best-budget-gpus-local-llm)',
            '[本地 LLM 最佳 GPU](/zh/local-llms/best-gpus-for-local-llms)',
            '[GPU vs CPU vs Apple Silicon](/zh/local-llms/gpu-vs-cpu-vs-apple-silicon)',
            '[Text Generation WebUI vs vLLM vs Llama.cpp](/zh/local-llms/text-generation-webui-vs-vllm-vs-llamacpp)',
          ],
        },
        'sources': {
          title: '参考资料',
          items: [
            'AMD ROCm 文档和 GitHub：HIP 编译器、驱动程序兼容性矩阵、LLM 推理示例',
            'vLLM GitHub：AMD/ROCm 后端实现和支持状态（v0.6.0+）',
            'Llama.cpp GitHub：AMD GPU 支持的 HIP 后端',
          ],
        },
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'url': 'https://www.promptquorum.com/zh/local-llms/best-amd-gpus-local-llm',
        about: [
          { '@type': 'Thing', name: 'AMD ROCm' },
          { '@type': 'Thing', name: 'NVIDIA CUDA' },
          { '@type': 'Thing', name: 'Ollama' },
          { '@type': 'Thing', name: 'vLLM' },
          { '@type': 'Thing', name: 'Llama.cpp' },
          { '@type': 'Thing', name: 'Text Generation WebUI' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'AMD RX 6800 XT' },
          { '@type': 'SoftwareApplication', name: 'AMD RX 7900 XTX' },
          { '@type': 'SoftwareApplication', name: 'NVIDIA RTX 3080' },
          { '@type': 'SoftwareApplication', name: 'NVIDIA RTX 4090' },
        ],
        name: '本地 LLM 最佳 AMD GPU',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'AMD RX 6800 XT（16GB，二手 $300-350）和 RX 7900 XTX（24GB，二手 $400-500）是本地 LLM 的唯一可行选项。' },
          { '@type': 'ListItem', position: 2, name: '性能成本比：AMD 比 NVIDIA 便宜 20-30%，但软件摩擦需要 5-10 小时设置时间。' },
          { '@type': 'ListItem', position: 3, name: 'Ollama：AMD 支持有限（ROCm 路径在我们2026年4月的测试中不稳定，Ollama v0.3.x / ROCm 6.x；CPU 回退缓慢）。请查看github.com/ollama/ollama上的最新AMD兼容性列表。' },
          { '@type': 'ListItem', position: 4, name: 'vLLM：v0.6.0 起完全支持 AMD ROCm。需要手动驱动程序。设置完成后工作良好。' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI：AMD 支持优异。AMD 上最佳用户体验。' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp：原生 AMD 支持（HIP 后端）。性能稳定。推荐 AMD 路径。' },
          { '@type': 'ListItem', position: 7, name: '设置成本：计划 5-10 小时调试 ROCm 驱动程序、HIPCC 编译、内核兼容性。' },
          { '@type': 'ListItem', position: 8, name: '结论（2026 年 4 月）：仅在已拥有 AMD 硬件或找到优秀二手交易（16GB 卡 $300）时使用 AMD。否则 NVIDIA CUDA 更简单。' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways'],
        },
        regionalContext: {
          title: '中国和亚太地区采用及合规性',
          content: [
            '**中国企业：《数据安全法》和本地 LLM 部署。** 中国 2021 年《数据安全法》要求敏感数据不跨越国界。Ollama、LM Studio、llama.cpp 等处理所有数据本地化工具完全满足《数据安全法》第 37 条（个人信息和重要数据出境安全评估）。金融、医疗、电信、能源等关键行业的企业优先采用 AMD ROCm 本地部署，确保数据主权并避免美国技术出口管制风险。PromptQuorum 连接到完全本地的推理端点，不经第三方云。',
            '**亚太地区：多国数据规制框架驱动本地 AI 基础设施需求。** 日本（METI AI 治理）、新加坡（PDPA）、韩国（PIPA）、越南（信息安全法）等国家均推行严格的数据驻地要求。这些地区的企业、高校、政府部门采用 AMD ROCm 本地 LLM 以同时满足多国合规需求。单一本地部署满足所有地区监管。',
            '**企业级部署：成本、数据控制和监管合规统一。** 跨国公司（银行、制药、制造）在亚太地区的子公司需合规当地 AI 治理规定。AMD ROCm 提供即插即用解决方案：无云锁定、无供应商依赖、无跨境数据问题。初期设置努力（5-10 小时）分摊到多年运营中，ROI 显著：相比云端 API 每年节省数百万美元，同时保证数据安全和监管合规。',
          ],
        },
      },
    },
  ko: {
    freshness_tier: 'semi_annual',
    theme: 'GPU 구매 가이드',
    title: '로컬 LLM을 위한 최고의 AMD GPU',
    seoTitle: '로컬 LLM용 AMD GPU 2026: RX 7900 XTX vs RTX 비교 가이드',
    intro: '**AMD RX 6800 XT와 RX 7900 XTX는 NVIDIA의 견실한 대안으로, 달러당 연산 성능이 15-20% 우수합니다. 다만 ONNX Runtime 및 vLLM 드라이버 지원이 상대적으로 취약합니다.** 2026년 4월 현재 AMD ROCm(HIP)은 성숙 단계에 접어들었으나, 호환성 레이어로 인한 설정 부담이 여전히 존재합니다. NVIDIA CUDA는 로컬 LLM 구동에 있어 여전히 가장 수월한 경로입니다. AMD는 중고 제품을 저렴하게 구입하거나 이미 AMD 하드웨어를 보유한 경우에만 사용을 권장합니다.',
    metaDescription: 'AMD RX 6800 XT, RX 7900 XTX vs NVIDIA RTX 비교: ROCm 설치, vLLM 성능, TFLOP당 비용 분석, AMD 선택 시기. 2026년 4월 업데이트.',
    heroImage: '/images/best-amd-gpus-local-llm-price-performance-hero-ko.webp',
    publishDate: '2026-04-05',
    dateModified: '2026-04-18',
    lastFactChecked: '2026-04-18',
    next_refresh_due: '2026-10-05',
    leadAnswerBlock: '**AMD RX 6800 XT와 RX 7900 XTX는 NVIDIA의 견실한 대안으로, 달러당 연산 성능이 15-20% 우수하지만 ONNX Runtime 및 vLLM 드라이버 지원이 상대적으로 취약합니다.**',
    audience: 'Ollama 또는 LM Studio에 익숙하며 로컬 LLM 워크플로를 최적화하려는 개발자',
    readTime: '7분',
    educationalLevel: 'Intermediate',
    primaryTerm: 'AMD GPU',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': '로컬 LLM용 최고의 AMD GPU 2026: RX 7900 XTX',
      'description': 'AMD RX 7900 XTX, 6800 XT vs NVIDIA RTX 비교. ROCm 설치, vLLM 성능, TFLOP당 비용 분석. CUDA 대신 AMD를 선택해야 하는 경우. 2026년 4월.',
      'url': 'https://www.promptquorum.com/ko/local-llms/best-amd-gpus-local-llm',
      'datePublished': '2026-04-05',
      'dateModified': '2026-04-18',
      'inLanguage': 'ko',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'about': [
        { '@type': 'Thing', 'name': 'AMD GPU' },
        { '@type': 'Thing', 'name': 'ROCm' },
        { '@type': 'Thing', 'name': 'GPU VRAM' },
        { '@type': 'Thing', 'name': '로컬 LLM 추론' },
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways', 'h2'],
      },
      'educationalLevel': 'Intermediate',
        'proficiencyLevel': 'Intermediate',
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ko',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '로컬 LLM용으로 AMD RX 6800 XT와 NVIDIA RTX 3080 중 어느 것을 구입해야 합니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': '단순함을 중시한다면 RTX 3080(CUDA는 바로 작동합니다). 25% 더 나은 가성비를 원하고 5-10시간의 ROCm 설정을 감수할 수 있다면 RX 6800 XT를 권장합니다.' }
        },
        {
          '@type': 'Question',
          'name': 'AMD RX 7900 XTX가 RTX 4090보다 우수합니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': '속도는 비슷하고 VRAM도 동일(24GB)합니다. RX 7900 XTX는 중고 기준 $200-300 더 저렴합니다($450-550 대 $1,000-1,300). ROCm 설정이 트레이드오프입니다.' }
        },
        {
          '@type': 'Question',
          'name': 'AMD GPU로 Ollama를 사용할 수 있습니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': '기술적으로는 가능하지만 불안정한 동작이 예상됩니다. CPU 폴백이 자주 발생합니다. AMD에서는 vLLM 또는 llama.cpp를 사용하십시오.' }
        },
        {
          '@type': 'Question',
          'name': '2026년 로컬 LLM을 위한 최적의 AMD 경로는 무엇입니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama.cpp(HIP 백엔드) + Text Generation WebUI입니다. 두 도구 모두 AMD 지원이 견실합니다. Ollama는 피하십시오.' }
        },
        {
          '@type': 'Question',
          'name': 'AMD ROCm에 Ubuntu가 필요합니까, 아니면 Windows에서도 작동합니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Windows 지원(HIP on Windows)도 있지만 더 최신이고 버그가 많습니다. Ubuntu가 권장 경로입니다.' }
        },
        {
          '@type': 'Question',
          'name': 'RX 6700, RX 6700 XT, 또는 6750은 7B 모델에 적합합니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'RX 6700(12GB)은 작동하지만 RX 6800 XT보다 20% 느립니다. RX 6700 XT(12GB, 동일한 VRAM)는 non-XT 버전보다 클럭이 약 15% 빠르지만 여전히 6800 XT에는 못 미칩니다. 둘 다 $250 미만일 경우에만 구입하십시오. 그렇지 않으면 6800 XT를 선택하십시오.' }
        },
        {
          '@type': 'Question',
          'name': '로컬 LLM에 RX 6900 XT를 구매할 가치가 있습니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': '그다지 없습니다. RX 6900 XT(16GB)는 RX 6800 XT보다 약간 더 빠를 뿐이고, 중고 매물도 더 희귀하며, 가격은 6800 XT의 $300-350보다 높은 $350-400 수준입니다. 가격 차이만큼의 가치가 없습니다 -- 대신 6800 XT를 구매하십시오.' }
        },
        {
          '@type': 'Question',
          'name': 'AMD Radeon 680M은 로컬 LLM을 실행하기에 적합합니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Radeon 680M은 Ryzen 6000/7000 모바일 APU에 내장된 통합 그래픽으로, 별도의 디스크리트 GPU인 RX 6800M이나 RX 6800 XT와는 다른 제품입니다. 전용 VRAM이 없고 대신 시스템 RAM을 공유하므로, 작은 양자화 모델(대략 3B 매개변수 이하, Q4 기준)에서만 실용적이며 이 페이지의 어떤 디스크리트 GPU보다도 눈에 띄게 느립니다. 본격적인 로컬 LLM 사용에는 RX 6800 XT 같은 디스크리트 GPU가 더 나은 선택입니다.' }
        },
        {
          '@type': 'Question',
          'name': '하나의 시스템에서 AMD와 NVIDIA GPU를 혼용할 수 있습니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': '이론적으로는 가능하지만 관리가 매우 복잡합니다. 각 GPU마다 별도의 CUDA/HIP 런타임이 필요합니다. 권장하지 않습니다.' }
        },
        {
          '@type': 'Question',
          'name': 'AMD RX 7900 XTX의 VRAM 용량은 얼마입니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'AMD RX 7900 XTX는 24GB GDDR6 VRAM을 탑재하고 있습니다. RTX 4090과 동일한 용량으로, Q4 양자화 기준 70B 모델을 실행할 수 있는 가장 강력한 AMD 소비자용 카드입니다.' }
        },
        {
          '@type': 'Question',
          'name': 'AMD ROCm은 프로덕션 LLM 추론에 충분히 안정적입니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'ROCm 6.x(2025)는 ROCm 5.x보다 훨씬 안정적입니다. 프로덕션 환경에서는 Ubuntu 22.04+ 위의 llama.cpp HIP 백엔드 스택이 가장 신뢰성이 높습니다. AMD에서 Ollama를 프로덕션 워크로드에 사용하는 것은 피하십시오.' }
        },
        {
          '@type': 'Question',
          'name': '$400 이하에서 가장 적합한 AMD GPU는 무엇입니까?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'AMD RX 6800 XT(16GB, 중고 약 $220-300)가 $400 이하에서 최고의 가성비 AMD GPU입니다. llama.cpp HIP 백엔드를 통해 Q4 기준 13B 모델을 원활하게, Q8 기준 7B 모델을 편안하게 실행합니다.' }
        },
      ]
    },
    toc: [
      { label: '요약', anchor: '#tldr' },
      { label: '실제로 사용할 만한 AMD GPU는?', anchor: '#which-amd' },
      { label: 'AMD GPU와 RTX의 가격·성능 비교', anchor: '#amd-vs-nvidia' },
      { label: 'AMD ROCm 설정의 부담은?', anchor: '#rocm-setup' },
      { label: 'AMD에서 Ollama와 vLLM을 실행할 수 있는가?', anchor: '#software-support' },
      { label: 'AMD를 NVIDIA 대신 선택해야 하는 경우', anchor: '#when-buy-amd' },
      { label: 'AMD 도입 시 흔한 실수', anchor: '#mistakes' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'AMD RX 6800 XT(16GB, 중고 $300-350)와 RX 7900 XTX(24GB, 중고 $400-500)는 로컬 LLM에 실질적으로 사용 가능한 유일한 AMD 옵션입니다.',
          '달러당 성능: AMD는 NVIDIA보다 20-30% 저렴하지만, 소프트웨어 설정 부담으로 5-10시간이 추가로 소요됩니다.',
          'Ollama: AMD 지원이 제한적입니다(ROCm 경로는 2026년 4월 테스트, Ollama v0.3.x / ROCm 6.x 기준 불안정했습니다 — 일부 구성에서 GPU 감지 실패; CPU 폴백 속도 느림). 최신 AMD 호환성 목록은 github.com/ollama/ollama에서 확인하십시오.',
          'vLLM: v0.6.0부터 AMD ROCm 완전 지원. 단, 수동 드라이버 설치가 필요합니다. 설정을 완료하면 잘 작동합니다.',
          'Text Generation WebUI: ROCm을 통한 AMD 지원이 우수합니다. AMD에서 최고의 사용자 경험을 제공합니다.',
          'Llama.cpp: AMD 네이티브 지원(HIP 백엔드). 안정적인 성능. AMD에서 권장되는 경로입니다.',
          '설정 비용: ROCm 드라이버 디버깅, HIPCC 컴파일, 커널 호환성 확인에 5-10시간을 계획하십시오.',
          '결론(2026년 4월): AMD 하드웨어를 이미 보유하고 있거나 저렴한 중고 제품(16GB 카드 $300)을 발견한 경우에만 AMD를 선택하십시오. 그렇지 않으면 NVIDIA CUDA가 여전히 더 간편합니다.',
        ],
      },
      'which-amd': {
        title: '실제로 사용할 만한 AMD GPU는?',
        items: [
          '**RX 6800 XT** (16GB GDDR6): AMD 가성비의 왕. 2020년 출시. 7B-22B 추론에 여전히 견실합니다. 중고: $300-350.',
          '**RX 6900 XT** (16GB GDDR6): 6800 XT보다 소폭 빠릅니다. 희귀합니다. 중고: $350-400. 가격 차이만큼의 가치가 없습니다.',
          '**RX 7900 XT** (20GB GDDR6): 신형 RDNA 3 아키텍처. 6800 XT보다 20% 빠릅니다. 중고: $400-480. 70B Q4에 적합합니다.',
          '**RX 7900 XTX** (24GB GDDR6): AMD 최상위 소비자용 GPU. 24GB VRAM은 70B 모델 구동의 판도를 바꿉니다. 중고: $450-550. RTX 4090과 유사한 속도.',
          '**Radeon Pro W6800 (32GB)**: 엔터프라이즈 카드, 중고 가격이 저렴합니다(약 $200-300). 속도는 느리지만 32GB는 70B Q8에 탁월합니다. 틈새 선택지.',
        ],
      },
      'amd-vs-nvidia': {
        title: 'AMD GPU와 RTX의 가격·성능 비교',
        rows: [
          { '0': 'RX 6800 XT', '1': '16GB', '2': '1,952', '3': '$300-350', '4': '+25%', '5': 'RTX 3080 (느림)' },
          { '0': 'RX 7900 XT', '1': '20GB', '2': '2,540', '3': '$400-480', '4': '+20%', '5': 'RTX 4080 (유사)' },
          { '0': 'RX 7900 XTX', '1': '24GB', '2': '2,750', '3': '$450-550', '4': '+15%', '5': 'RTX 4090 (유사 속도)' },
          { '0': 'RTX 3080', '1': '10GB', '2': '1,456', '3': '$350-400', '4': '--', '5': '--' },
          { '0': 'RTX 4090', '1': '24GB', '2': '2,752', '3': '$1,000-1,300', '4': '--', '5': '--' },
        ],
        columns: ['GPU', 'VRAM', 'TFLOPS', '중고 가격', '달러당 성능 vs. RTX', '동급 RTX'],
      
        image: '/images/best-amd-gpus-local-llm-price-performance-hero-ko.webp',
        imageCaption: 'RX 7900 XTX는 RTX 4090의 속도와 VRAM을 가격의 약 60%로 제공합니다 — 대가는 ROCm 설정의 번거로움입니다.',
      },
      'rocm-setup': {
        title: 'AMD ROCm 설정의 부담은?',
        content: [
          '**1. AMD ROCm 드라이버 설치: `apt-get install rocm-dkms` (Ubuntu). Windows에서는 수동 .exe 설치 프로그램 사용. 약 30분 소요.**',
          '2. HIP 컴파일러 확인: `hipcc --version`. 첫 시도에서 실패하는 경우가 많습니다. GPU 커널 호환성을 디버깅하십시오.',
          '3. HIPCC(AMD HIP-to-C++ 컴파일러) 설치: `apt-get install hip-runtime-amd`. 또 다른 의존성 체인입니다.',
          '4. 소형 LLM으로 테스트: 추론을 실행하여 GPU 가속이 작동하는지 확인합니다. CPU 폴백이 자주 발생합니다.',
          '5. 드라이버 버전 불일치 해결: ROCm v5.7은 커널 5.15에서 작동하지만 6.x에서는 작동하지 않습니다. 2-4시간의 디버깅이 필요합니다.',
          'NVIDIA CUDA와 비교: `nvidia-cuda-toolkit` → apt-get 한 번으로 즉시 GPU 접근 가능. AMD는 5-10배 더 많은 설정 부담이 있습니다.',
        ],
      },
      'software-support': {
        title: 'AMD에서 Ollama와 vLLM을 실행할 수 있는가?',
        content: [
          '**AMD에서의 Ollama:** 2026년 4월 기준 실험적/불안정 단계. ROCm 경로가 때때로 작동하지만 CPU 폴백은 느립니다. 권장하지 않습니다.',
          '**AMD에서의 vLLM:** v0.6.0부터 완전한 ROCm 지원. 잘 작동하지만 ROCm/HIP 드라이버 수동 설정이 필요합니다. 설정을 완료하면 좋은 성능을 발휘합니다.',
          '**Text Generation WebUI:** AMD ROCm 지원이 우수합니다. AMD에서 최고의 사용자 경험. 권장합니다.',
          '**Llama.cpp:** 네이티브 HIP 백엔드. 안정적인 성능. 가장 간편한 AMD 경로. 권장합니다.',
          '**LM Studio:** NVIDIA 전용. AMD 지원 없음.',
          '2026년 4월 기준: vLLM + llama.cpp가 AMD에서의 선택지입니다. Ollama는 신뢰할 수 없습니다.',
        ],
      
        image: '/images/best-amd-gpus-local-llm-software-support-hero-ko.webp',
        imageCaption: '2026년 기준 llama.cpp와 Text Generation WebUI가 신뢰할 수 있는 AMD 경로입니다 — Ollama의 ROCm 지원은 여전히 불안정합니다.',
      },
      'when-buy-amd': {
        title: 'AMD를 NVIDIA 대신 선택해야 하는 경우',
        content: [
          'AMD를 구입해야 하는 경우:',
          '- 중고 RX 7900 XTX를 $450 미만에 발견한 경우(RTX 4090 대비 저평가된 가격).',
          '- 이미 AMD 하드웨어를 보유하고 있으며 에코시스템 일관성을 원하는 경우.',
          '- 클러스터를 구축 중이며 설정 편의성보다 달러당 연산 성능을 우선시하는 경우.',
          'AMD를 구입하지 말아야 하는 경우:',
          '- 플러그 앤 플레이 경험을 원하는 경우. NVIDIA CUDA가 더 빠르게 작동합니다.',
          '- Ollama가 필요한 경우. 2026년 4월 테스트(Ollama v0.3.x, ROCm 6.x)에서 AMD ROCm 지원이 불안정했습니다 — 최신 현황은 github.com/ollama/ollama에서 확인하십시오.',
          '- 시간이 제한되어 있는 경우. ROCm 디버깅에 10시간 이상 소요될 수 있습니다.',
        ],
      },
      'mistakes': {
        title: 'AMD 도입 시 흔한 실수',
        items: [
          'RX 6700(12GB)을 3060 12GB와 동급으로 착각하고 구입하는 것 — 20% 느리며 중고 시장에서 찾기도 어렵습니다.',
          'ROCm이 CUDA처럼 "그냥 작동"한다고 가정하는 것 — 드라이버 및 커널 호환성 디버깅에 5-10시간을 계획하십시오.',
          'AMD에서 Ollama를 사용하며 원활한 통합을 기대하는 것 — 2026년 4월 테스트(Ollama v0.3.x, ROCm 6.x)에서 ROCm 지원이 불안정했습니다. llama.cpp 또는 vLLM이 더 나은 선택입니다.',
        ],
      },
      'nextSteps': {
        id: 'next-steps',
        title: '다음 단계',
        items: [
          '[로컬 LLM 예산 GPU 추천](/ko/local-llms/best-budget-gpus-local-llm) — 예산이 부족하신가요? 가성비 최고 GPU →',
          '[GPU vs CPU vs Apple Silicon](/ko/local-llms/gpu-vs-cpu-vs-apple-silicon) — AMD, Apple, CPU — 어떤 플랫폼이 맞나요? →',
          '[필요한 VRAM은 얼마나 될까요?](/ko/local-llms/how-much-vram-local-llm) — GPU VRAM과 모델 크기 맞추기 →',
        ],
      },
      'faqSection': {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '로컬 LLM용으로 AMD RX 6800 XT와 NVIDIA RTX 3080 중 어느 것을 구입해야 합니까?', a: '단순함을 중시한다면 RTX 3080(CUDA는 바로 작동합니다). 25% 더 나은 가성비를 원하고 5-10시간의 ROCm 설정을 감수할 수 있다면 RX 6800 XT를 권장합니다.' },
          { q: 'AMD RX 7900 XTX가 RTX 4090보다 우수합니까?', a: '속도는 비슷하고 VRAM도 동일(24GB)합니다. RX 7900 XTX는 중고 기준 $200-300 더 저렴합니다($450-550 대 $1,000-1,300). ROCm 설정이 트레이드오프입니다.' },
          { q: 'AMD GPU로 Ollama를 사용할 수 있습니까?', a: '기술적으로는 가능합니다. 2026년 4월 테스트(Ollama v0.3.x, ROCm 6.x)에서 ROCm 지원이 불안정했습니다 — 일부 구성에서 GPU 감지 실패, CPU 폴백이 잦았습니다. 사용 전 github.com/ollama/ollama에서 최신 AMD 호환성 목록을 확인하십시오; 안정적인 AMD 추론에는 vLLM 또는 llama.cpp가 더 안전한 경로입니다.' },
          { q: '2026년 로컬 LLM을 위한 최적의 AMD 경로는 무엇입니까?', a: 'Llama.cpp(HIP 백엔드) + Text Generation WebUI입니다. 두 도구 모두 AMD 지원이 견실합니다. Ollama는 피하십시오.' },
          { q: 'AMD ROCm에 Ubuntu가 필요합니까, 아니면 Windows에서도 작동합니까?', a: 'Windows 지원(HIP on Windows)도 있지만 더 최신이고 버그가 많습니다. Ubuntu가 권장 경로입니다.' },
          { q: 'RX 6700, RX 6700 XT, 또는 6750은 7B 모델에 적합합니까?', a: 'RX 6700(12GB)은 작동하지만 RX 6800 XT보다 20% 느립니다. RX 6700 XT(12GB, 동일한 VRAM)는 non-XT 버전보다 클럭이 약 15% 빠르지만 여전히 6800 XT에는 못 미칩니다. 둘 다 $250 미만일 경우에만 구입하십시오. 그렇지 않으면 6800 XT를 선택하십시오.' },
          { q: '로컬 LLM에 RX 6900 XT를 구매할 가치가 있습니까?', a: '그다지 없습니다. RX 6900 XT(16GB)는 RX 6800 XT보다 약간 더 빠를 뿐이고, 중고 매물도 더 희귀하며, 가격은 6800 XT의 $300-350보다 높은 $350-400 수준입니다. 가격 차이만큼의 가치가 없습니다 -- 대신 6800 XT를 구매하십시오.' },
          { q: 'AMD Radeon 680M은 로컬 LLM을 실행하기에 적합합니까?', a: 'Radeon 680M은 Ryzen 6000/7000 모바일 APU에 내장된 통합 그래픽으로, 별도의 디스크리트 GPU인 RX 6800M이나 RX 6800 XT와는 다른 제품입니다. 전용 VRAM이 없고 대신 시스템 RAM을 공유하므로, 작은 양자화 모델(대략 3B 매개변수 이하, Q4 기준)에서만 실용적이며 이 페이지의 어떤 디스크리트 GPU보다도 눈에 띄게 느립니다. 본격적인 로컬 LLM 사용에는 RX 6800 XT 같은 디스크리트 GPU가 더 나은 선택입니다.' },
          { q: '하나의 시스템에서 AMD와 NVIDIA GPU를 혼용할 수 있습니까?', a: '이론적으로는 가능하지만 관리가 매우 복잡합니다. 각 GPU마다 별도의 CUDA/HIP 런타임이 필요합니다. 권장하지 않습니다.' },
        ],
      },
      'relatedReading': {
        title: '관련 자료',
        items: [
          '[로컬 LLM용 저예산 최고 GPU](/ko/local-llms/best-budget-gpus-local-llm)',
          '[로컬 LLM용 최고의 GPU](/ko/local-llms/best-gpus-for-local-llms)',
          '[GPU vs CPU vs Apple Silicon](/ko/local-llms/gpu-vs-cpu-vs-apple-silicon)',
          '[Text Generation WebUI vs vLLM vs Llama.cpp](/ko/local-llms/text-generation-webui-vs-vllm-vs-llamacpp)',
          '[로컬 LLM용 노트북 vs 데스크톱](/ko/local-llms/laptop-vs-desktop-local-llm) — AI를 위한 노트북과 데스크톱의 비용 및 성능 비교.',
        ],
      },
      'sources': {
        title: '참고 자료',
        items: [
          'AMD ROCm 공식 문서 및 GitHub: HIP 컴파일러, 드라이버 호환성 매트릭스, LLM 추론 예제',
          'vLLM GitHub: AMD/ROCm 백엔드 구현 및 지원 현황(v0.6.0+)',
          'Llama.cpp GitHub: AMD GPU 지원을 위한 HIP 백엔드',
          'AMD GPU는 초당 토큰 속도가 우수하지만, 속도만으로 응답 품질이 결정되지는 않습니다. 모델에게 무엇을 묻느냐가 응답 속도만큼 중요합니다. [context windows explained](https://www.promptquorum.com/prompt-engineering/context-windows-explained-why-ai-forgets)에서는 GPU 메모리 한계 내에서 긴 요청을 구성하는 방법을 설명합니다.',
        ],
      },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'url': 'https://www.promptquorum.com/ko/local-llms/best-amd-gpus-local-llm',
      'inLanguage': 'ko',
      name: '로컬 LLM용 최고의 AMD GPU',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'AMD RX 6800 XT(16GB, 중고 $300-350)와 RX 7900 XTX(24GB, 중고 $400-500)는 로컬 LLM에 실질적으로 사용 가능한 유일한 AMD 옵션입니다.' },
        { '@type': 'ListItem', position: 2, name: '달러당 성능: AMD는 NVIDIA보다 20-30% 저렴하지만, 소프트웨어 설정 부담으로 5-10시간이 추가로 소요됩니다.' },
        { '@type': 'ListItem', position: 3, name: 'Ollama: AMD 지원이 제한적입니다(ROCm 경로는 2026년 4월 테스트, Ollama v0.3.x / ROCm 6.x 기준 불안정; CPU 폴백 속도 느림). github.com/ollama/ollama에서 최신 AMD 호환성을 확인하십시오.' },
        { '@type': 'ListItem', position: 4, name: 'vLLM: v0.6.0부터 AMD ROCm 완전 지원. 단, 수동 드라이버 설치가 필요합니다. 설정을 완료하면 잘 작동합니다.' },
        { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI: ROCm을 통한 AMD 지원이 우수합니다. AMD에서 최고의 사용자 경험을 제공합니다.' },
        { '@type': 'ListItem', position: 6, name: 'Llama.cpp: AMD 네이티브 지원(HIP 백엔드). 안정적인 성능. AMD에서 권장되는 경로입니다.' },
        { '@type': 'ListItem', position: 7, name: '설정 비용: ROCm 드라이버 디버깅, HIPCC 컴파일, 커널 호환성 확인에 5-10시간을 계획하십시오.' },
        { '@type': 'ListItem', position: 8, name: '결론(2026년 4월): AMD 하드웨어를 이미 보유하고 있거나 저렴한 중고 제품을 발견한 경우에만 AMD를 선택하십시오. 그렇지 않으면 NVIDIA CUDA가 여전히 더 간편합니다.' },
      ],
    },
  },
};
