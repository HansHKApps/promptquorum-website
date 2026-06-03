// Auto-generated from src/lib/local-llms/content.ts
// Slug: best-amd-gpus-local-llm
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'GPU Buying Guides',
      title: 'Best AMD GPUs for Local LLMs',
      seoTitle: 'Best AMD GPUs for Local LLMs 2026: Comparison Guide',
      intro: '**AMD RX 6800 XT and RX 7900 XTX are solid NVIDIA alternatives, offering 15-20% better compute-per-dollar, but suffer from weaker ONNX Runtime and vLLM driver support.** As of April 2026, AMD ROCm (HIP) has matured, but compatibility layers add friction. NVIDIA CUDA is still the path of least resistance for local LLMs. Use AMD only if you find a great used deal or already own AMD hardware.',
      metaDescription: 'Compare AMD RX 6800 XT, RX 7900 XTX vs NVIDIA RTX. ROCm setup, vLLM performance, cost-per-TFLOP analysis, when to buy AMD. April 2026 updated.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**AMD RX 6800 XT and RX 7900 XTX are solid NVIDIA alternatives, offering 15-20% better compute-per-dollar, but suffer from weaker ONNX Runtime and vLLM driver support.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '7 min',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
schema: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': 'Best AMD GPUs for Local LLMs 2026: RX 7900 XTX',
        'description': 'Compare AMD RX 7900 XTX, 6800 XT vs NVIDIA RTX. ROCm setup, vLLM performance, cost-per-TFLOP analysis. When to buy AMD over CUDA. April 2026.',
        'url': 'https://www.promptquorum.com/local-llms/best-amd-gpus-local-llm',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'AMD GPU' },
          { '@type': 'Thing', 'name': 'ROCm' },
          { '@type': 'Thing', 'name': 'GPU VRAM' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Technically yes, but expect buggy behavior. CPU fallback is common. Use vLLM or llama.cpp instead for AMD.' }
          },
          {
            '@type': 'Question',
            'name': 'What\'s the best AMD path for local LLMs in 2026?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama.cpp (HIP backend) + Text Generation WebUI. Both have solid AMD support. Avoid Ollama.' }
          },
          {
            '@type': 'Question',
            'name': 'Do I need Ubuntu for AMD ROCm, or does Windows work?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Windows support exists (HIP on Windows), but it\'s newer and buggier. Ubuntu is the recommended path.' }
          },
          {
            '@type': 'Question',
            'name': 'Is RX 6700 or 6750 good for 7B models?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'RX 6700 (12GB) works but is 20% slower than RX 6800 XT. Only buy if <$250. Otherwise, stretch to 6800 XT.' }
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'ROCm 6.x (2025) is significantly more stable than ROCm 5.x. For production use, llama.cpp HIP backend on Ubuntu 22.04+ is the most reliable stack. Avoid Ollama on AMD for production workloads.' }
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
          items: [
            'AMD RX 6800 XT (16GB, $300-350 used) and RX 7900 XTX (24GB, $400-500 used) are the only viable options for local LLMs.',
            'Performance-per-dollar: AMD is 20-30% cheaper than NVIDIA, but software friction costs 5-10 hours of setup time.',
            'Ollama: Limited AMD support (ROCm path is buggy, CPU fallback is slow). Not recommended.',
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
            '**Ollama on AMD:** Experimental/buggy as of April 2026. ROCm path works sometimes, CPU fallback is slow. Not recommended.',
            '**vLLM on AMD:** Full ROCm support since v0.6.0. Works well, but requires manual ROCm/HIP driver setup. Good if you\'re past the setup gauntlet.',
            '**Text Generation WebUI:** Excellent AMD ROCm support. Best user experience on AMD. Recommended.',
            '**Llama.cpp:** Native HIP backend. Solid performance. Easiest AMD path. Recommended.',
            '**LM Studio:** NVIDIA only. No AMD support.',
            'As of April 2026: vLLM + llama.cpp are your AMD paths. Ollama is not reliable.',
          ],
        },
        'when-buy-amd': {
          title: 'When Should You Actually Buy AMD Over NVIDIA?',
          content: [
            'Buy AMD if:',
            '- You find a used RX 7900 XTX for <$450 (under-priced vs. RTX 4090 value).',
            '- You already own AMD hardware and want ecosystem consistency.',
            '- You\'re building a cluster and value compute-per-dollar over ease-of-setup.',
            'Don\'t buy AMD if:',
            '- You want a plug-and-play experience. NVIDIA CUDA is faster to get working.',
            '- You need Ollama. AMD support is unreliable.',
            '- You\'re time-constrained. ROCm debugging can eat 10+ hours.',
          ],
        },
        'mistakes': {
          title: 'Common AMD Adoption Mistakes',
          items: [
            'Buying RX 6700 (12GB) thinking it\'s a 3060 12GB equivalent--it\'s 20% slower and often harder to find used.',
            'Assuming ROCm "just works" like CUDA--plan 5-10 hours of troubleshooting driver and kernel compatibility.',
            'Using Ollama with AMD expecting seamless integration--ROCm path is buggy; llama.cpp or vLLM are better bets.',
          ],
        },
        'faqSection': {
          title: 'FAQ',
          faqs: [
            { q: 'Should I buy AMD RX 6800 XT or NVIDIA RTX 3080 for local LLMs?', a: 'RTX 3080 if you value simplicity (CUDA "just works"). RX 6800 XT if you want 25% better value and don\'t mind 5-10 hours ROCm setup.' },
            { q: 'Is AMD RX 7900 XTX better than RTX 4090?', a: 'Similar speed, same VRAM (24GB). RX 7900 XTX is $200-300 cheaper used ($450-550 vs. $1,000-1,300). ROCm setup is the trade-off.' },
            { q: 'Can I use AMD GPUs with Ollama?', a: 'Technically yes, but expect buggy behavior. CPU fallback is common. Use vLLM or llama.cpp instead for AMD.' },
            { q: 'What\'s the best AMD path for local LLMs in 2026?', a: 'Llama.cpp (HIP backend) + Text Generation WebUI. Both have solid AMD support. Avoid Ollama.' },
            { q: 'Do I need Ubuntu for AMD ROCm, or does Windows work?', a: 'Windows support exists (HIP on Windows), but it\'s newer and buggier. Ubuntu is the recommended path.' },
            { q: 'Is RX 6700 or 6750 good for 7B models?', a: 'RX 6700 (12GB) works but is 20% slower than RX 6800 XT. Only buy if <$250. Otherwise, stretch to 6800 XT.' },
            { q: 'Can I mix AMD and NVIDIA GPUs in one system?', a: 'Theoretically yes, but management is a nightmare. Each GPU needs its own CUDA/HIP runtime. Not recommended.' },
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
      publishDate: '2026-04-05',
      leadAnswerBlock: '**La AMD RX 6800 XT y la RX 7900 XTX son alternativas sólidas a NVIDIA, con un rendimiento por dólar 15-20% mejor, pero sufren de menor compatibilidad con ONNX Runtime y los drivers de vLLM.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan sus flujos de trabajo de LLMs locales',
      readTime: '7 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': 'Mejores GPUs AMD para LLMs locales 2026: RX 7900 XTX',
        'description': 'Compara AMD RX 7900 XTX, 6800 XT vs NVIDIA RTX. Configuración de ROCm, rendimiento en vLLM, análisis de coste por TFLOP. Cuándo elegir AMD sobre CUDA. Abril 2026.',
        'url': 'https://www.promptquorum.com/es/local-llms/best-amd-gpus-local-llm?lang=es',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Técnicamente sí, pero espera comportamientos inestables. El fallback a CPU es frecuente. Usa vLLM o llama.cpp en su lugar para AMD.' }
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
            'name': '¿Es la RX 6700 o 6750 buena para modelos de 7B?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'La RX 6700 (12GB) funciona, pero es un 20% más lenta que la RX 6800 XT. Cómprala solo si cuesta menos de $250. Si no, apuesta por la 6800 XT.' }
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
            'Ollama: soporte AMD limitado (el path de ROCm es inestable, el fallback a CPU es lento). No recomendado.',
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
            '**Ollama en AMD:** experimental e inestable a partir de abril de 2026. El path de ROCm a veces funciona, el fallback a CPU es lento. No recomendado.',
            '**vLLM en AMD:** soporte completo para ROCm desde v0.6.0. Funciona bien, pero requiere configuración manual de drivers ROCm/HIP. Buena opción si superas la fase de instalación.',
            '**Text Generation WebUI:** excelente soporte para AMD ROCm. La mejor experiencia de usuario en AMD. Recomendado.',
            '**Llama.cpp:** backend HIP nativo. Rendimiento sólido. El camino AMD más sencillo. Recomendado.',
            '**LM Studio:** solo NVIDIA. Sin soporte para AMD.',
            'A partir de abril de 2026: vLLM + llama.cpp son tus opciones en AMD. Ollama no es fiable.',
          ],
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
            '- Necesitas Ollama. El soporte AMD es poco fiable.',
            '- Tienes poco tiempo. La depuración de ROCm puede consumir más de 10 horas.',
          ],
        },
        'mistakes': {
          title: 'Errores comunes al adoptar AMD',
          items: [
            'Comprar una RX 6700 (12GB) creyendo que equivale a una 3060 12GB — es un 20% más lenta y a menudo difícil de encontrar de segunda mano.',
            'Asumir que ROCm «simplemente funciona» como CUDA — planifica entre 5 y 10 horas de solución de problemas de compatibilidad de drivers y kernel.',
            'Usar Ollama con AMD esperando una integración fluida — el path de ROCm es inestable; llama.cpp o vLLM son mejores opciones.',
          ],
        },
        'faqSection': {
          title: 'Preguntas frecuentes',
          faqs: [
            { q: '¿Debo comprar la AMD RX 6800 XT o la NVIDIA RTX 3080 para LLMs locales?', a: 'RTX 3080 si valoras la simplicidad (CUDA funciona sin problemas). RX 6800 XT si quieres un 25% más de valor y no te importan 5-10 horas de configuración de ROCm.' },
            { q: '¿La AMD RX 7900 XTX es mejor que la RTX 4090?', a: 'Velocidad similar, misma VRAM (24GB). La RX 7900 XTX es $200-300 más barata de segunda mano ($450-550 vs. $1,000-1,300). La configuración de ROCm es el contrapeso.' },
            { q: '¿Puedo usar GPUs AMD con Ollama?', a: 'Técnicamente sí, pero espera comportamientos inestables. El fallback a CPU es frecuente. Usa vLLM o llama.cpp en su lugar para AMD.' },
            { q: '¿Cuál es el mejor camino AMD para LLMs locales en 2026?', a: 'Llama.cpp (backend HIP) + Text Generation WebUI. Ambos tienen buen soporte para AMD. Evita Ollama.' },
            { q: '¿Necesito Ubuntu para AMD ROCm, o Windows funciona también?', a: 'El soporte en Windows existe (HIP on Windows), pero es más reciente y menos estable. Ubuntu es el camino recomendado.' },
            { q: '¿Es la RX 6700 o 6750 buena para modelos de 7B?', a: 'La RX 6700 (12GB) funciona, pero es un 20% más lenta que la RX 6800 XT. Cómprala solo si cuesta menos de $250. Si no, apuesta por la 6800 XT.' },
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
        'url': 'https://www.promptquorum.com/es/local-llms/best-amd-gpus-local-llm?lang=es',
        name: 'Mejores GPUs AMD para LLMs locales',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'La AMD RX 6800 XT (16GB, ~$300-350 de segunda mano) y la RX 7900 XTX (24GB, ~$400-500 de segunda mano) son las únicas opciones viables para LLMs locales.' },
          { '@type': 'ListItem', position: 2, name: 'Rendimiento por dólar: AMD es un 20-30% más barata que NVIDIA, pero la fricción de software cuesta entre 5 y 10 horas de configuración.' },
          { '@type': 'ListItem', position: 3, name: 'Ollama: soporte AMD limitado (el path de ROCm es inestable, el fallback a CPU es lento). No recomendado.' },
          { '@type': 'ListItem', position: 4, name: 'vLLM: soporte completo para AMD ROCm desde v0.6.0, pero la configuración requiere instalar drivers manualmente.' },
          { '@type': 'ListItem', position: 5, name: 'Text Generation WebUI: excelente soporte para AMD vía ROCm. La mejor experiencia de usuario en AMD.' },
          { '@type': 'ListItem', position: 6, name: 'Llama.cpp: soporte nativo para AMD (backend HIP). Rendimiento sólido. El camino recomendado en AMD.' },
          { '@type': 'ListItem', position: 7, name: 'Coste de configuración: planifica 5-10 horas de depuración de drivers ROCm, compilación de HIPCC y compatibilidad de kernel.' },
          { '@type': 'ListItem', position: 8, name: 'Veredicto (abril 2026): usa AMD solo si ya tienes hardware AMD o encuentras una oferta de segunda mano excelente. Si no, NVIDIA CUDA sigue siendo más sencillo.' },
        ],
      },
    },
    // VERIFY: guia comparativo de GPUs com preços de mercado de segunda mão em USD (referência global) — preços mantidos em USD. No varejo brasileiro, com impostos de importação, esses valores ficam ~2-3x maiores em reais. Links de afiliado não há; confirmar disponibilidade/preço BR antes de publicar.
    pt: {
      freshness_tier: 'semi_annual',
      theme: 'GPU Buying Guides',
      title: 'Melhores GPUs AMD para LLMs locais',
      seoTitle: 'Melhores GPUs AMD para LLMs locais 2026: Guia de comparação',
      intro: '**A AMD RX 6800 XT e a RX 7900 XTX são alternativas sólidas à NVIDIA, com desempenho por dólar 15-20% melhor, mas sofrem com a menor compatibilidade com o ONNX Runtime e os drivers do vLLM.** A partir de abril de 2026, o AMD ROCm (HIP) amadureceu, embora as camadas de compatibilidade adicionem fricção. O NVIDIA CUDA continua sendo o caminho mais simples para LLMs locais. Use AMD só se encontrar uma ótima oferta de segunda mão ou já tiver hardware AMD.',
      metaDescription: 'Compare AMD RX 6800 XT e RX 7900 XTX vs NVIDIA RTX: configuração ROCm, desempenho no vLLM, custo por TFLOP e quando comprar AMD. Atualizado 2026.',
      publishDate: '2026-04-05',
      leadAnswerBlock: '**A AMD RX 6800 XT e a RX 7900 XTX são alternativas sólidas à NVIDIA, com desempenho por dólar 15-20% melhor, mas sofrem com a menor compatibilidade com o ONNX Runtime e os drivers do vLLM. No varejo brasileiro, com impostos de importação, os preços em reais ficam bem mais altos.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam seus fluxos de trabalho de LLMs locais',
      readTime: '7 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: 'AMD GPU',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': 'Melhores GPUs AMD para LLMs locais 2026: RX 7900 XTX',
        'description': 'Compare AMD RX 7900 XTX, 6800 XT vs NVIDIA RTX. Configuração de ROCm, desempenho no vLLM, análise de custo por TFLOP. Quando escolher AMD em vez de CUDA. Abril 2026.',
        'url': 'https://www.promptquorum.com/pt/local-llms/best-amd-gpus-local-llm?lang=pt',
        'datePublished': '2026-04-05',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
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
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Tecnicamente sim, mas espere comportamentos instáveis. O fallback para CPU é frequente. Use vLLM ou llama.cpp no lugar para AMD.' }
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
            'name': 'A RX 6700 ou 6750 é boa para modelos de 7B?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'A RX 6700 (12GB) funciona, mas é 20% mais lenta que a RX 6800 XT. Compre-a só se custar menos de US$ 250. Caso contrário, vá de 6800 XT.' }
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
            'Ollama: suporte AMD limitado (o caminho do ROCm é instável, o fallback para CPU é lento). Não recomendado.',
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
            '**Ollama em AMD:** experimental e instável a partir de abril de 2026. O caminho do ROCm às vezes funciona, o fallback para CPU é lento. Não recomendado.',
            '**vLLM em AMD:** suporte completo ao ROCm desde a v0.6.0. Funciona bem, mas exige configuração manual de drivers ROCm/HIP. Boa opção se você superar a fase de instalação.',
            '**Text Generation WebUI:** excelente suporte ao AMD ROCm. A melhor experiência de usuário em AMD. Recomendado.',
            '**Llama.cpp:** backend HIP nativo. Desempenho sólido. O caminho AMD mais simples. Recomendado.',
            '**LM Studio:** só NVIDIA. Sem suporte para AMD.',
            'A partir de abril de 2026: vLLM + llama.cpp são suas opções em AMD. O Ollama não é confiável.',
          ],
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
            'Usar o Ollama com AMD esperando uma integração fluida — o caminho do ROCm é instável; llama.cpp ou vLLM são melhores opções.',
          ],
        },
        'faqSection': {
          title: 'Perguntas frequentes',
          faqs: [
            { q: 'Devo comprar a AMD RX 6800 XT ou a NVIDIA RTX 3080 para LLMs locais?', a: 'RTX 3080 se você valoriza a simplicidade (o CUDA funciona sem problemas). RX 6800 XT se você quer 25% mais valor e não se importa com 5-10 horas de configuração do ROCm.' },
            { q: 'A AMD RX 7900 XTX é melhor que a RTX 4090?', a: 'Velocidade semelhante, mesma VRAM (24GB). A RX 7900 XTX é US$ 200-300 mais barata de segunda mão (US$ 450-550 vs. US$ 1.000-1.300). A configuração do ROCm é o contrapeso.' },
            { q: 'Posso usar GPUs AMD com o Ollama?', a: 'Tecnicamente sim, mas espere comportamentos instáveis. O fallback para CPU é frequente. Use vLLM ou llama.cpp no lugar para AMD.' },
            { q: 'Qual é o melhor caminho AMD para LLMs locais em 2026?', a: 'Llama.cpp (backend HIP) + Text Generation WebUI. Ambos têm bom suporte para AMD. Evite o Ollama.' },
            { q: 'Preciso de Ubuntu para o AMD ROCm, ou o Windows também funciona?', a: 'O suporte no Windows existe (HIP no Windows), mas é mais recente e menos estável. O Ubuntu é o caminho recomendado.' },
            { q: 'A RX 6700 ou 6750 é boa para modelos de 7B?', a: 'A RX 6700 (12GB) funciona, mas é 20% mais lenta que a RX 6800 XT. Compre-a só se custar menos de US$ 250. Caso contrário, vá de 6800 XT.' },
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
        'url': 'https://www.promptquorum.com/pt/local-llms/best-amd-gpus-local-llm?lang=pt',
        name: 'Melhores GPUs AMD para LLMs locais',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'A AMD RX 6800 XT (16GB, ~US$ 300-350 de segunda mão) e a RX 7900 XTX (24GB, ~US$ 400-500 de segunda mão) são as únicas opções viáveis para LLMs locais.' },
          { '@type': 'ListItem', position: 2, name: 'Desempenho por dólar: a AMD é 20-30% mais barata que a NVIDIA, mas a fricção de software custa entre 5 e 10 horas de configuração.' },
          { '@type': 'ListItem', position: 3, name: 'Ollama: suporte AMD limitado (o caminho do ROCm é instável, o fallback para CPU é lento). Não recomendado.' },
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
            'Ollama: Begrenzte AMD-Unterstützung (ROCm-Pfad ist fehlerhaft, CPU-Fallback ist langsam). Nicht empfohlen.',
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
            '**Ollama auf AMD:** Experimentell/fehlerhaft seit April 2026. ROCm-Pfad funktioniert manchmal, CPU-Fallback ist langsam. Nicht empfohlen.',
            '**vLLM auf AMD:** Volle ROCm-Unterstützung seit v0.6.0. Funktioniert gut, erfordert aber manuelle ROCm/HIP-Treibereinrichtung. Gut, wenn Sie das Einrichtungschaos überstanden haben.',
            '**Text Generation WebUI:** Exzellente AMD ROCm-Unterstützung. Beste Benutzererfahrung auf AMD. Empfohlen.',
            '**Llama.cpp:** Native HIP-Backend. Solide Leistung. Einfachster AMD-Pfad. Empfohlen.',
            '**LM Studio:** Nur NVIDIA. Keine AMD-Unterstützung.',
            'Seit April 2026: vLLM + llama.cpp sind Ihre AMD-Pfade. Ollama ist nicht zuverlässig.',
          ],
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
            '- Sie Ollama brauchen. AMD-Unterstützung ist unzuverlässig.',
            '- Sie zeitlich begrenzt sind. ROCm-Debugging kann 10+ Stunden dauern.',
          ],
        },
        'mistakes': {
          title: 'Häufige AMD-Adoptionfehler',
          items: [
            'RX 6700 (12 GB) kaufen, denkend, es ist ein 3060-12GB-Äquivalent - es ist 20% langsamer und oft schwer gebraucht zu finden.',
            'Annahme, dass ROCm „einfach funktioniert" wie CUDA - planen Sie 5-10 Stunden Fehlerbehebung von Treiber- und Kernel-Kompatibilität.',
            'Ollama mit AMD verwenden, erwartet nahtlose Integration - ROCm-Pfad ist fehlerhaft; llama.cpp oder vLLM sind bessere Wetten.',
          ],
        },
        'faqSection': {
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Sollte ich AMD RX 6800 XT oder NVIDIA RTX 3080 für lokale LLMs kaufen?', a: 'RTX 3080, wenn Sie Einfachheit bevorzugen (CUDA „funktioniert einfach"). RX 6800 XT, wenn Sie 25% besseren Wert und 5-10 Stunden ROCm-Einrichtung nicht stört.' },
            { q: 'Ist AMD RX 7900 XTX besser als RTX 4090?', a: 'Ähnliche Geschwindigkeit, gleicher VRAM (24 GB). RX 7900 XTX ist 200-300 € günstiger gebraucht (450-550 € vs. 1.000-1.300 €). ROCm-Einrichtung ist der Kompromiss.' },
            { q: 'Kann ich AMD-GPUs mit Ollama verwenden?', a: 'Technisch ja, aber erwarten Sie fehlerhaftes Verhalten. CPU-Fallback ist häufig. Verwenden Sie stattdessen vLLM oder llama.cpp für AMD.' },
            { q: 'Was ist der beste AMD-Pfad für lokale LLMs 2026?', a: 'Llama.cpp (HIP-Backend) + Text Generation WebUI. Beide haben solide AMD-Unterstützung. Vermeiden Sie Ollama.' },
            { q: 'Brauche ich Ubuntu für AMD ROCm, oder funktioniert Windows?', a: 'Windows-Unterstützung existiert (HIP auf Windows), aber es ist neuere und fehlerhaft. Ubuntu ist der empfohlene Pfad.' },
            { q: 'Ist RX 6700 oder 6750 gut für 7B-Modelle?', a: 'RX 6700 (12 GB) funktioniert, ist aber 20% langsamer als RX 6800 XT. Kaufen Sie nur, wenn <250 €. Andernfalls dehnen Sie auf 6800 XT aus.' },
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
          { '@type': 'ListItem', position: 3, name: 'Ollama: Begrenzte AMD-Unterstützung (ROCm-Pfad ist fehlerhaft, CPU-Fallback ist langsam). Nicht empfohlen.' },
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
            'Ollama : Support AMD limité (chemin ROCm bogue, repli CPU lent). Non recommandé.',
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
            '**Ollama sur AMD** : Expérimental/bugué en avril 2026. Chemin ROCm fonctionne parfois, repli CPU lent. Non recommandé.',
            '**vLLM sur AMD** : Support complet ROCm depuis v0.6.0. Fonctionne bien, mais nécessite configuration ROCm/HIP manuelle. Bon après le démarrage.',
            '**Text Generation WebUI** : Excellent support AMD ROCm. Meilleure expérience sur AMD. Recommandé.',
            '**Llama.cpp** : Backend HIP natif. Performance solide. Chemin AMD le plus simple. Recommandé.',
            '**LM Studio** : NVIDIA uniquement. Pas de support AMD.',
            'Depuis avril 2026 : vLLM + llama.cpp sont vos chemins AMD. Ollama n\'est pas fiable.',
          ],
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
            '- Vous avez besoin Ollama. Support AMD peu fiable.',
            '- Vous êtes contraint en temps. Débogage ROCm peut prendre 10+ heures.',
          ],
        },
        'mistakes': {
          title: 'Erreurs courantes d\'adoption AMD',
          items: [
            'Acheter RX 6700 (12 Go) croyant c\'est équivalent à 3060 12Go - 20% plus lent, difficile à trouver occasion.',
            'Supposer que ROCm « marche juste » comme CUDA - prévoyez 5-10 heures débogage pilotes et kernel.',
            'Utiliser Ollama avec AMD attendant intégration transparente - chemin ROCm bogue; llama.cpp ou vLLM meilleurs choix.',
          ],
        },
        'faqSection': {
          title: 'Questions fréquentes',
          faqs: [
            { q: 'Devrais-je acheter AMD RX 6800 XT ou NVIDIA RTX 3080 pour LLM locaux?', a: 'RTX 3080 si vous privilégiez simplicité (CUDA « marche »). RX 6800 XT si vous voulez 25% meilleur rapport et tolérez 5-10 h configuration ROCm.' },
            { q: 'AMD RX 7900 XTX est-elle meilleure que RTX 4090?', a: 'Vitesse similaire, même VRAM (24 Go). RX 7900 XTX 200-300 € moins cher occasion (450-550 € vs 1.000-1.300 €). Configuration ROCm est le compromis.' },
            { q: 'Puis-je utiliser GPU AMD avec Ollama?', a: 'Techniquement oui, mais attendez-vous à comportement bogue. Repli CPU fréquent. Utilisez plutôt vLLM ou llama.cpp pour AMD.' },
            { q: 'Quel est le meilleur chemin AMD pour LLM locaux 2026?', a: 'Llama.cpp (backend HIP) + Text Generation WebUI. Tous deux ont support AMD solide. Évitez Ollama.' },
            { q: 'Ai-je besoin Ubuntu pour AMD ROCm, ou Windows fonctionne?', a: 'Support Windows existe (HIP sur Windows), mais plus récent et bugué. Ubuntu est le chemin recommandé.' },
            { q: 'RX 6700 ou 6750 bon pour modèles 7B?', a: 'RX 6700 (12 Go) fonctionne mais 20% plus lent que 6800 XT. Achetez seulement si <250 €. Sinon étendez à 6800 XT.' },
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
          { '@type': 'ListItem', position: 3, name: 'Ollama : Support AMD limité (chemin ROCm bogue, repli CPU lent). Non recommandé.' },
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
            'Ollama：AMD サポート限定（ROCm パスにはバグあり、CPU フォールバックが遅い）。非推奨です。',
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
            '**Ollama on AMD：** 2026 年 4 月時点で実験的/バグあり。ROCm パスは機能することもありますが、CPU フォールバックが遅い。非推奨。',
            '**vLLM on AMD：** v0.6.0 以降で完全 ROCm サポート。動作しますが、手動 ROCm/HIP ドライバー設定が必要です。セットアップを乗り越えれば良好です。',
            '**Text Generation WebUI：** 優れた AMD ROCm サポート。AMD 上での最高の体験。推奨。',
            '**Llama.cpp：** ネイティブ HIP バックエンド。堅牢なパフォーマンス。最も簡単な AMD パス。推奨。',
            '**LM Studio：** NVIDIA のみ。AMD サポートなし。',
            '**2026 年 4 月起：** vLLM + llama.cpp があなたの AMD パスです。Ollama は信頼できません。',
          ],
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
            '⚠️ **Ollama で AMD を使用しシームレスな統合を期待** -- ROCm パスはバグあり。llama.cpp または vLLM の方が優れた選択肢です。',
          ],
        },
        'faqSection': {
          title: 'よくある質問',
          faqs: [
            { q: 'ローカル LLM に AMD RX 6800 XT または NVIDIA RTX 3080 を購入すべきか？', a: 'シンプルさを優先する場合は RTX 3080（CUDA「即座に機能」）。25% 優れたコスト・パフォーマンスで 5-10 時間の ROCm セットアップを厭わない場合は RX 6800 XT。' },
            { q: 'AMD RX 7900 XTX は RTX 4090 より優れているか？', a: '速度は同等、VRAM は同じ（24GB）。RX 7900 XTX は中古 ¥55,000-65,000 対 ¥120,000-150,000。ROCm セットアップはトレードオフです。' },
            { q: 'AMD GPU を Ollama で使用できるか？', a: '技術的には可能です。ただしバグのある動作を予期してください。CPU フォールバックが一般的です。AMD には代わりに vLLM または llama.cpp を使用してください。' },
            { q: '2026 年のローカル LLM に最適な AMD パスは何か？', a: 'Llama.cpp（HIP バックエンド）+ Text Generation WebUI。両方とも AMD に堅実なサポートがあります。Ollama を避けてください。' },
            { q: 'AMD ROCm に Ubuntu が必要か、それとも Windows でも機能するか？', a: 'Windows サポートが存在（Windows 上の HIP）しますが、より新しくバグあり。Ubuntu が推奨パスです。' },
            { q: '7B モデル用に RX 6700 または 6750 は適切か？', a: 'RX 6700（12GB）は動作しますが、RX 6800 XT より 20% 遅い。¥25,000 以下の場合のみ購入してください。それ以外は 6800 XT に拡張してください。' },
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
          { '@type': 'ListItem', position: 3, name: 'Ollama：AMD サポート限定（ROCm パスにはバグあり、CPU フォールバックが遅い）。非推奨です。' },
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
            'Ollama：AMD 支持有限（ROCm 路径有 bug，CPU 回退缓慢）。不推荐。',
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
            '**Ollama on AMD：** 2026 年 4 月时点为实验性/有 bug。ROCm 路径有时工作，CPU 回退缓慢。不推荐。',
            '**vLLM on AMD：** v0.6.0 起完全 ROCm 支持。工作，但需手动 ROCm/HIP 驱动程序设置。度过设置期后良好。',
            '**Text Generation WebUI：** 优异 AMD ROCm 支持。AMD 上最佳体验。推荐。',
            '**Llama.cpp：** 原生 HIP 后端。性能稳定。最简单的 AMD 路径。推荐。',
            '**LM Studio：** 仅 NVIDIA。无 AMD 支持。',
            '**2026 年 4 月起：** vLLM + llama.cpp 是您的 AMD 路径。Ollama 不可靠。',
          ],
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
            '⚠️ **在 AMD 用 Ollama 期待无缝集成** -- ROCm 路径有 bug；llama.cpp 或 vLLM 更佳选择。',
          ],
        },
        'faqSection': {
          title: '常见问题',
          faqs: [
            { q: '本地 LLM 应购买 AMD RX 6800 XT 还是 NVIDIA RTX 3080？', a: '优先简单则 RTX 3080（CUDA「即用」）。优先 25% 更优性价比且可承受 5-10 小时 ROCm 设置则 RX 6800 XT。' },
            { q: 'AMD RX 7900 XTX 优于 RTX 4090 吗？', a: '速度相当，VRAM 相同（24GB）。RX 7900 XTX 二手 $450-550 对比 $1,000-1,300。ROCm 设置是权衡。' },
            { q: '能用 Ollama 使用 AMD GPU 吗？', a: '技术上可以。但预期 bug 行为。CPU 回退常见。AMD 改用 vLLM 或 llama.cpp。' },
            { q: '2026 年本地 LLM 最优 AMD 路径？', a: 'Llama.cpp（HIP 后端）+ Text Generation WebUI。两者都对 AMD 有坚实支持。避免 Ollama。' },
            { q: 'AMD ROCm 需要 Ubuntu 还是 Windows 也可？', a: 'Windows 支持存在（Windows 上 HIP）但更新且有 bug。Ubuntu 是推荐路径。' },
            { q: '7B 模型用 RX 6700 或 6750 合适吗？', a: 'RX 6700（12GB）可用但比 6800 XT 慢 20%。仅 $250 以下购买。否则扩展到 6800 XT。' },
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
          { '@type': 'ListItem', position: 3, name: 'Ollama：AMD 支持有限（ROCm 路径有 bug，CPU 回退缓慢）。不推荐。' },
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
  };
