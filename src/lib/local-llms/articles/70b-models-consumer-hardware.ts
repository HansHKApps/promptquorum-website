// Auto-generated from src/lib/local-llms/content.ts
// Slug: 70b-models-consumer-hardware
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Run 70B LLMs on Consumer Hardware 2026: RAM & GPU Setup',
      seoTitle: '70B on Consumer Hardware 2026: RAM, GPU Setup Guide',
      intro: 'Running a 70B parameter model locally requires 40-48 GB of RAM at Q4_K_M quantization. This is achievable on: Apple Silicon Macs with 64 GB unified memory, workstations with 64 GB DDR5, or machines combining a 24 GB NVIDIA GPU with 32 GB system RAM using layer offloading. As of April 2026, Llama 3.3 70B and Qwen3 72B are the two primary 70B models available.',
      metaDescription: 'Run Llama 3.3 and Qwen3 70B models locally: RAM requirements, NVIDIA vs Apple Silicon, layer offloading, benchmarks. Complete hardware guide -- April 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Running a 70B parameter model locally requires 40-48 GB of RAM at Q4_K_M quantization. This is achievable on: Apple Silicon Macs with 64 GB unified memory, workstations with 64 GB DDR5, or machines combining a 24 GB NVIDIA GPU with 32 GB system RAM using layer offloading.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '9 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B local LLM consumer hardware',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Hardware Can Run a 70B Model?', anchor: '#what-hardware' },
        { label: 'RAM Requirements by Quantization', anchor: '#ram-requirements' },
        { label: 'Apple Silicon: Best Consumer Option', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark: 128GB Unified Option', anchor: '#dgx-spark' },
        { label: 'NVIDIA GPU + Layer Offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'CPU-Only 70B Inference', anchor: '#cpu-only' },
        { label: 'Which 70B Model Should You Run?', anchor: '#which-model' },
        { label: 'Regional Context', anchor: '#regional-context' },
        { label: 'Common Mistakes', anchor: '#common-mistakes' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',

          isTldr: true,
          items: [
            'Q4_K_M quantization: Llama 3.3 70B requires ~40 GB RAM; Qwen3 72B requires ~43 GB RAM.',
            '**Easiest consumer hardware**: Apple Mac Studio M2 Ultra (64 GB unified) or M5 Max MacBook Pro (64 GB) -- full GPU acceleration, no layer offloading needed.',
            '**NVIDIA option**: RTX 4090 (24 GB VRAM) + 32 GB system RAM with layer offloading in Ollama handles most 70B models, though 20-30% of layers run on CPU.',
            '**CPU-only 70B**: possible on 64 GB RAM but produces 1-3 tok/sec -- marginally usable for batch tasks, not for interactive chat.',
            'As of April 2026, a 70B model locally matches GPT-4 (2023) quality and is the only consumer-accessible path to that quality tier without cloud costs.',
          ],
        },
        whatHardware: {
          title: 'What Hardware Can Actually Run a 70B Local LLM?',
          content: [
            '**A 70B model at Q4_K_M quantization requires approximately 40-43 GB of memory that is accessible to the inference engine.** This can come from GPU VRAM, unified system memory (Apple Silicon), system RAM, or a combination via layer offloading.',
          ],
          image: '/images/70b-hardware-comparison.svg',
          imageCaption: 'Hardware comparison: Apple Silicon M5 Max achieves 25-35 tok/sec with no offloading, while NVIDIA RTX 4090 with layer offloading reaches 10-18 tok/sec, and CPU-only 70B inference produces just 1-3 tok/sec.',
          rows: [
            { 'Hardware': 'Apple M5 Max (64 GB unified)', 'Can Run 70B?': 'Yes -- full GPU', 'Speed (70B Q4)': '20-30 tok/sec', 'Notes': 'Best consumer laptop option' },
            { 'Hardware': 'Apple M2 Ultra (64 GB unified)', 'Can Run 70B?': 'Yes -- full GPU', 'Speed (70B Q4)': '25-35 tok/sec', 'Notes': 'Mac Studio baseline config' },
            { 'Hardware': 'Apple M2 Ultra (192 GB unified)', 'Can Run 70B?': 'Yes -- full GPU', 'Speed (70B Q4)': '30-40 tok/sec', 'Notes': 'Runs Q8_0 with room to spare' },
            { 'Hardware': 'NVIDIA DGX Spark (128 GB unified)', 'Can Run 70B?': 'Yes -- full GPU', 'Speed (70B Q4)': '18-28 tok/sec', 'Notes': 'Q8_0 fits (70 GB). Best for CUDA workflows.' },
            { 'Hardware': 'NVIDIA RTX 4090 (24 GB) + 32 GB RAM', 'Can Run 70B?': 'Yes -- with offload', 'Speed (70B Q4)': '10-18 tok/sec', 'Notes': '~60% layers on GPU, ~40% on CPU' },
            { 'Hardware': 'NVIDIA RTX 4080 (16 GB) + 32 GB RAM', 'Can Run 70B?': 'Partial offload only', 'Speed (70B Q4)': '5-10 tok/sec', 'Notes': 'Only ~35% layers on GPU' },
            { 'Hardware': '64 GB RAM, CPU only', 'Can Run 70B?': 'Yes -- CPU only', 'Speed (70B Q4)': '1-3 tok/sec', 'Notes': 'Impractical for interactive use' },
          ],
          columns: ['Hardware', 'Can Run 70B?', 'Speed (70B Q4)', 'Notes'],
        },
        ramByQuant: {
          title: 'How Much RAM Does a 70B Model Need at Each Quantization Level?',
          image: '/images/70b-quantization-tradeoff.svg',
          imageCaption: 'Quantization trade-off curve: Q4_K_M (recommended) requires 40-43 GB RAM with only 1-3% quality loss versus FP16, balancing practicality and performance for consumer hardware.',
          rows: [
            { 'Quantization': 'FP16 (full precision)', 'RAM Required': '~140 GB', 'Quality': 'Reference quality', 'Practical?': 'No -- server only' },
            { 'Quantization': 'Q8_0', 'RAM Required': '~70 GB', 'Quality': 'Near-lossless', 'Practical?': 'Mac Ultra 192 GB only' },
            { 'Quantization': 'Q5_K_M', 'RAM Required': '~50 GB', 'Quality': 'Minimal loss', 'Practical?': 'Mac Ultra 64 GB, tight' },
            { 'Quantization': 'Q4_K_M', 'RAM Required': '~40-43 GB', 'Quality': 'Low loss -- recommended', 'Practical?': 'Yes -- most viable option' },
            { 'Quantization': 'Q3_K_S', 'RAM Required': '~30 GB', 'Quality': 'Moderate loss', 'Practical?': 'Yes -- 32 GB machines possible' },
            { 'Quantization': 'Q2_K', 'RAM Required': '~22 GB', 'Quality': 'High loss', 'Practical?': 'Not recommended' },
          ],
          columns: ['Quantization', 'RAM Required', 'Quality', 'Practical?'],
        },
        appleSilicon: {
          title: 'Why Is Apple Silicon the Best Consumer Option for 70B Models?',
          content: [
            '**Apple Silicon uses unified memory -- the CPU and GPU share the same physical memory pool.** An M5 Max MacBook Pro with 64 GB of unified memory can run a 70B model at Q4_K_M entirely on GPU, achieving 20-30 tok/sec with no layer offloading overhead.',
            'On NVIDIA hardware, the GPU and system RAM are separate. A 24 GB VRAM GPU can only hold ~60% of a Q4_K_M 70B model; the remaining layers run on CPU, creating a memory bandwidth bottleneck that reduces speed to 10-18 tok/sec.',
            'As of April 2026, the Mac Studio M2 Ultra (64 GB, ~$2,000 refurbished) is the most cost-effective path to 70B local inference at usable speed. A new M5 Max MacBook Pro 64 GB costs approximately $3,500.',
          ],
        },
        dgxSpark: {
          title: 'NVIDIA DGX Spark: 128GB Unified Memory for 70B Models',
          content: [
            '**The NVIDIA DGX Spark ($3,999) is a compact desktop AI computer launched in October 2025, built on the GB10 Grace Blackwell Superchip with 128GB of unified LPDDR5x memory.** Its unified memory architecture means GPU and CPU share the same 128GB pool -- similar to Apple Silicon but with CUDA acceleration.',
            'At 128GB unified memory, the DGX Spark runs Llama 3.3 70B and Qwen3 72B at Q8_0 (70GB -- near-lossless quality). Inference speed for 70B at Q8_0 is approximately 18-28 tok/sec.',
          ],
          rows: [
            { 'Spec': 'Memory', 'Value': '128 GB unified LPDDR5x' },
            { 'Spec': '70B at Q8_0', 'Value': 'Yes -- near-lossless quality' },
            { 'Spec': '70B inference speed', 'Value': '18-28 tok/sec' },
            { 'Spec': 'Max model size', 'Value': '~200B parameters at FP4' },
            { 'Spec': 'Price', 'Value': '$3,999 (NVIDIA direct / Amazon)' },
            { 'Spec': 'Ollama command', 'Value': 'ollama run llama3.3:70b' },
          ],
          columns: ['Spec', 'Value'],
        },
        nvidiaOffload: {
          title: 'How Does NVIDIA GPU + Layer Offloading Work for 70B Models?',
          content: 'Ollama and llama.cpp support splitting a model across GPU VRAM and system RAM. Layers loaded in VRAM run at GPU speed; layers in system RAM run at CPU speed:',
          image: '/images/70b-layer-offloading.svg',
          imageCaption: 'Layer offloading architecture: RTX 4090 GPU (24 GB) holds ~60% of layers (1-48) at 10-18 tok/sec, while system RAM (32 GB) holds remaining layers (49-80) running at CPU speed (2-5 tok/sec), achieving 10-18 tok/sec overall.',
          codeBlock: '# Ollama automatically offloads as many layers as fit in VRAM\n# To explicitly control layers:\nollama run llama3.3:70b\n\n# Check how many layers are on GPU:\nollama ps\n# Output shows: llama3.3:70b  ...  23/80 GPU layers\n\n# For llama.cpp directly:\n./llama-cli -m llama-3.3-70b-q4_k_m.gguf \\\n  -ngl 40   # number of layers to offload to GPU\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        cpuOnly: {
          title: 'Is CPU-Only 70B Inference Practical?',
          content: [
            '**A 70B model at Q4_K_M on a high-core-count CPU (AMD Threadripper, Intel Xeon) with 64 GB RAM produces 1-3 tokens/sec.** At 2 tok/sec, a 200-word response takes approximately 75 seconds.',
            'This is impractical for interactive chat but usable for batch processing -- summarizing documents, generating reports, or processing files overnight. For interactive use, the minimum practical hardware is a machine that can achieve 8+ tok/sec, which requires either Apple Silicon or NVIDIA GPU offloading.',
          ],
        },
        which70b: {
          title: 'Which 70B Model Should You Run Locally?',
          rows: [
            { 'Model': 'Llama 3.3 70B', 'MMLU': '82%', 'HumanEval': '88%', 'Best For': 'General English tasks, instruction-following' },
            { 'Model': 'Qwen3 72B', 'MMLU': '84%', 'HumanEval': '87%', 'Best For': 'Coding, multilingual (29 languages)' },
            { 'Model': 'Mistral Large 123B', 'MMLU': '84%', 'HumanEval': '80%', 'Best For': 'Requires 80+ GB -- workstation only' },
          ],
          columns: ['Model', 'MMLU', 'HumanEval', 'Best For'],
        },
        regionalContext: {
          title: 'Running 70B Models Locally: Regional Context',
          content: [
            '**EU / GDPR**: A 70B local model represents the practical ceiling of privately-runnable AI quality. For EU enterprises processing sensitive data -- legal documents, medical records, financial analysis -- a 70B model running on-premises delivers GPT-4 2023 quality with full GDPR compliance. No prompt content, context, or output leaves the organization\'s infrastructure.',
            'For German BSI and French CNIL compliance: the Mac Studio M2 Ultra (Apple, USA) and NVIDIA DGX Spark (NVIDIA, USA) are both from non-EU vendors. For organizations requiring EU-supply-chain hardware, NVIDIA OEM partners (Dell, HP, Lenovo) produce DGX Spark-compatible GB10 systems with EU support.',
            'Model selection for EU compliance: Mistral Large 123B (Mistral AI, France, Apache 2.0) is the only 70B+ model from an EU-based developer. It requires 80+ GB RAM (workstation only) but provides the strongest EU IP and compliance narrative.',
            '**Japan (METI)**: For Japanese enterprises, Qwen3 72B is the recommended 70B model -- its native Japanese tokenization is 30-40% more efficient than Llama for Japanese text. On a Mac Studio M2 Ultra (64 GB): `ollama run qwen2.5:72b`. METI AI governance requires documenting hardware and model versions. The `ollama ps` output provides exact model identification for compliance records.',
            '**China**: Qwen3 72B (Alibaba) running locally satisfies data localization under China\'s Data Security Law (数据安全法) while delivering 84% MMLU quality. Enterprise teams commonly deploy on dual-GPU servers (2× RTX 4090, 48 GB VRAM combined). For CAC compliance: a locally-hosted Qwen3 72B serving internal users is outside the CAC provider definition -- it is not offered as a public service.',
          ],
        },
        commonMistakes: {
          title: 'What Are the Common Mistakes When Running 70B Models on Consumer Hardware?',
          faqs: [
            {
              q: 'Buying a GPU with less than 24 GB VRAM and expecting full 70B performance',
              a: 'An RTX 4070 Ti (12 GB VRAM) can only hold ~30% of a Q4_K_M 70B model in VRAM. The remaining 70% runs on CPU, resulting in 3-5 tok/sec -- barely faster than CPU-only inference. For 70B models, 24 GB VRAM (RTX 4090) is the practical minimum for useful GPU acceleration. Below this, consider running a 34B model instead.',
            },
            {
              q: 'Not using layer offloading in Ollama',
              a: 'By default, if a 70B model does not fit entirely in VRAM, Ollama falls back to CPU-only inference. Set the GPU layers explicitly with `OLLAMA_GPU_LAYERS=999` -- Ollama will offload as many layers as fit in VRAM and run the remainder on CPU, which is significantly faster than all-CPU inference.',
            },
            {
              q: 'Using Q4_K_M when Q3_K_S would fit better on available hardware',
              a: 'On machines with 32-40 GB RAM, Q4_K_M for a 70B model may be too tight (leaving insufficient headroom for the OS). Q3_K_S reduces RAM to ~30 GB at moderate quality loss. Run `ollama ps` after loading the model -- if you see swap usage, drop to Q3_K_S.',
            },
            {
              q: 'Expecting the same speed as Apple Silicon from an NVIDIA offloaded setup',
              a: 'Layer offloading on NVIDIA creates a memory bandwidth bottleneck between VRAM and system RAM. RTX 4090 with offloading produces 10-18 tok/sec vs 20-30 tok/sec on M5 Max. For equal speed, Apple Silicon is the better consumer choice. For CUDA workflows (fine-tuning, custom kernels), NVIDIA is required.',
            },
            {
              q: 'Running Q4_K_M on DGX Spark instead of Q8_0',
              a: 'The DGX Spark has 128GB -- enough for Q8_0 (70 GB). Using Q4_K_M wastes available quality. On any machine with ≥80 GB, run Q8_0 for 70B models.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) -- full GPU and RAM tier table for every model size including 70B hardware requirements',
            '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) -- benchmark rankings for both 70B models plus mid-range alternatives under 40 GB RAM',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- complete setup including layer offloading configuration for NVIDIA GPUs',
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- understand Q4_K_M vs Q8_0 and why Q8_0 is the right choice on 128 GB machines',
            '[Local LLM PC Build Under $1000](/local-llms/local-llm-pc-build-1000) -- budget hardware guide for 7B-13B models when 70B hardware is out of budget',
            '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) -- detailed benchmark comparison of both 70B models across every task category',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Running 70B Models on Consumer Hardware',
          faqs: [
            {
              q: 'What is the cheapest hardware that can run a 70B model usably?',
              a: 'As of April 2026, a used Mac Studio M2 Ultra (64 GB unified memory) for ~$2,000 is the cheapest path to 70B inference at 25+ tok/sec. A new machine equivalent would be the M5 Max MacBook Pro 64 GB (~$3,500). An NVIDIA RTX 4090 desktop build (24 GB VRAM + 32 GB RAM) costs ~$3,000-$4,000 total but produces slower inference due to layer offloading.',
            },
            {
              q: 'Can I run a 70B model on two GPUs?',
              a: 'Yes -- llama.cpp and Ollama support multi-GPU inference on NVIDIA hardware. Two RTX 4090s (48 GB total VRAM) fit a Q4_K_M 70B model entirely in VRAM. Ollama handles multi-GPU automatically when multiple GPUs are present. Tensor parallelism in llama.cpp (`--tensor-split`) controls how layers are distributed.',
            },
            {
              q: 'How does 70B local quality compare to GPT-5.5?',
              a: 'On MMLU and HumanEval benchmarks, Llama 3.3 70B (82%, 88%) and Qwen3 72B (84%, 87%) match or slightly exceed GPT-4 (2023) scores. GPT-5.5 (2024) scores higher on reasoning-heavy tasks. For general instruction-following, summarization, and code generation, 70B local models are competitive with GPT-5.5 on most tasks.',
            },
            {
              q: 'Does Ollama support running 70B models automatically?',
              a: 'Yes. Running `ollama run llama3.3:70b` downloads and runs the model with automatic GPU layer offloading. Ollama detects available VRAM and system RAM, offloads as many layers as possible to GPU, and runs the rest on CPU. No manual configuration is required for basic use.',
            },
            {
              q: 'How much electricity does running a 70B model use?',
              a: 'A Mac Studio M2 Ultra running 70B inference draws approximately 30-50 W. An NVIDIA RTX 4090 desktop under load draws 350-450 W. At $0.15 per kWh, continuous 70B inference on an RTX 4090 costs approximately $0.05-0.07 per hour. Apple Silicon is 7-10× more energy-efficient for this workload.',
            },
            {
              q: 'Are 70B models worth it compared to 13B models for everyday tasks?',
              a: 'For complex reasoning, long-document analysis, and nuanced writing, yes -- the quality difference is noticeable. For simple summarization, Q&A, and classification, a 13B or even 7B model produces nearly identical output. Run both on your specific use case with [PromptQuorum](/) to quantify the quality difference before investing in 70B hardware.',
            },
            {
              q: 'What is the NVIDIA DGX Spark and is it worth it for 70B inference?',
              a: 'The DGX Spark ($3,999) is NVIDIA\'s compact desktop AI computer with 128GB unified memory. It runs 70B models at Q8_0 (near-lossless quality) without quantization constraints. Speed: 18-28 tok/sec. Compared to a Mac Studio M2 Ultra (~$2,000 refurb, 64GB): DGX Spark is ~$2,000 more for higher-quality inference and CUDA support. For pure 70B inference, Mac Studio is cheaper. For CUDA workflows (fine-tuning, custom kernels), DGX Spark is better.',
            },
            {
              q: 'Can I fine-tune a 70B model on consumer hardware?',
              a: 'Full fine-tuning requires roughly 3× the inference memory for LoRA fine-tuning (~120-130 GB VRAM). This exceeds all consumer hardware except the DGX Spark (128 GB -- barely feasible for small LoRA runs with 4-bit quantization). For 70B fine-tuning, cloud GPU providers (RunPod, Lambda Labs, Vast.ai) are more practical. Consumer hardware handles 7B-13B fine-tuning reliably.',
            },
            {
              q: 'What is the best quantization for 70B on Apple Silicon?',
              a: 'On 64 GB Mac (M5 Max or M2 Ultra): Q4_K_M (~40 GB) leaves 24 GB for the OS -- comfortable. Q5_K_M (~50 GB) leaves 14 GB -- tight but feasible. Q8_0 (~70 GB) exceeds 64 GB -- only feasible on 96 GB or 128 GB configurations. On 128 GB Mac: Q8_0 is recommended for near-lossless quality at no speed penalty.',
            },
            {
              q: 'Does Ollama automatically choose the best quantization?',
              a: 'No. `ollama run llama3.3:70b` downloads the default Q4_K_M. Specify explicitly for better quality: `ollama run llama3.3:70b:q5_k_m` or `ollama run llama3.3:70b:q8_0`. Check available memory with `ollama ps` after loading -- if the model fits comfortably, upgrade to the next quantization level.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            'llama.cpp GPU Offloading Documentation -- github.com/ggerganov/llama.cpp/blob/master/docs/backend/CUDA.md',
            'Ollama Model Library -- ollama.com/library/llama3.3',
            'Apple M5 Max Inference Benchmarks -- github.com/ggerganov/llama.cpp/discussions (community benchmarks thread)',
            'Meta Llama 3.3 Model Card -- huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
            'NVIDIA DGX Spark -- nvidia.com/en-us/products/workstations/dgx-spark/',
          ],
        },
      },
schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Run 70B LLMs on Consumer Hardware 2026: RAM & GPU Setup',
        'description': 'Run Llama 3.3 and Qwen3 70B models locally: RAM requirements, NVIDIA vs Apple Silicon, layer offloading, benchmarks. Complete hardware guide -- April 2026.',
        'url': 'https://www.promptquorum.com/local-llms/70b-models-consumer-hardware',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': '70B language model' },
          { '@type': 'Thing', 'name': 'Apple Silicon inference' },
          { '@type': 'Thing', 'name': 'NVIDIA RTX 4090' },
          { '@type': 'Thing', 'name': 'Layer offloading' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'Qwen3 72B' },
          { '@type': 'Thing', 'name': 'NVIDIA DGX Spark' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'How to Run a 70B Model on Consumer Hardware with Ollama',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Verify you have 40+ GB available RAM or unified memory' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Install Ollama from ollama.com' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Run: ollama run llama3.3:70b' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Check GPU layer usage with: ollama ps' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Adjust quantization if RAM is tight: use q3_k_s variant' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Consumer Hardware for 70B Local LLM Inference 2026',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Apple M5 Max 64GB', 'description': 'Full GPU. 20-30 tok/sec. Best laptop. ~$3,500.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Apple Mac Studio M2 Ultra 64GB', 'description': 'Full GPU. 25-35 tok/sec. Best value. ~$2,000 refurb.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Apple Mac Studio M2 Ultra 192GB', 'description': 'Full GPU. 30-40 tok/sec. Runs Q8_0.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'NVIDIA DGX Spark 128GB', 'description': 'Full GPU CUDA. 18-28 tok/sec. Runs Q8_0. $3,999.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'NVIDIA RTX 4090 24GB + 32GB RAM', 'description': 'Layer offloading. 10-18 tok/sec. ~$3,000-4,000 total.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'NVIDIA RTX 4080 16GB + 32GB RAM', 'description': 'Partial offload. 5-10 tok/sec.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'CPU only 64GB RAM', 'description': '1-3 tok/sec. Batch processing only.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': 'What is the cheapest hardware that can run a 70B model usably?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'As of April 2026, a used Mac Studio M2 Ultra (64 GB unified memory) for ~$2,000 is the cheapest path to 70B inference at 25+ tok/sec. A new machine equivalent would be the M5 Max MacBook Pro 64 GB (~$3,500). An NVIDIA RTX 4090 desktop build (24 GB VRAM + 32 GB RAM) costs ~$3,000-$4,000 total but produces slower inference due to layer offloading.' } },
          { '@type': 'Question', 'name': 'Can I run a 70B model on two GPUs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes -- llama.cpp and Ollama support multi-GPU inference on NVIDIA hardware. Two RTX 4090s (48 GB total VRAM) fit a Q4_K_M 70B model entirely in VRAM. Ollama handles multi-GPU automatically when multiple GPUs are present. Tensor parallelism in llama.cpp (`--tensor-split`) controls how layers are distributed.' } },
          { '@type': 'Question', 'name': 'How does 70B local quality compare to GPT-5.5?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'On MMLU and HumanEval benchmarks, Llama 3.3 70B (82%, 88%) and Qwen3 72B (84%, 87%) match or slightly exceed GPT-4 (2023) scores. GPT-5.5 (2024) scores higher on reasoning-heavy tasks. For general instruction-following, summarization, and code generation, 70B local models are competitive with GPT-5.5 on most tasks.' } },
          { '@type': 'Question', 'name': 'Does Ollama support running 70B models automatically?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Running `ollama run llama3.3:70b` downloads and runs the model with automatic GPU layer offloading. Ollama detects available VRAM and system RAM, offloads as many layers as possible to GPU, and runs the rest on CPU. No manual configuration is required for basic use.' } },
          { '@type': 'Question', 'name': 'How much electricity does running a 70B model use?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A Mac Studio M2 Ultra running 70B inference draws approximately 30-50 W. An NVIDIA RTX 4090 desktop under load draws 350-450 W. At $0.15 per kWh, continuous 70B inference on an RTX 4090 costs approximately $0.05-0.07 per hour. Apple Silicon is 7-10× more energy-efficient for this workload.' } },
          { '@type': 'Question', 'name': 'Are 70B models worth it compared to 13B models for everyday tasks?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'For complex reasoning, long-document analysis, and nuanced writing, yes -- the quality difference is noticeable. For simple summarization, Q&A, and classification, a 13B or even 7B model produces nearly identical output. Run both on your specific use case with [PromptQuorum](/) to quantify the quality difference before investing in 70B hardware.' } },
          { '@type': 'Question', 'name': 'What is the NVIDIA DGX Spark and is it worth it for 70B inference?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'The DGX Spark ($3,999) is NVIDIA\'s compact desktop AI computer with 128GB unified memory. It runs 70B models at Q8_0 (near-lossless quality) without quantization constraints. Speed: 18-28 tok/sec. Compared to a Mac Studio M2 Ultra (~$2,000 refurb, 64GB): DGX Spark is ~$2,000 more for higher-quality inference and CUDA support. For pure 70B inference, Mac Studio is cheaper. For CUDA workflows (fine-tuning, custom kernels), DGX Spark is better.' } },
          { '@type': 'Question', 'name': 'Can I fine-tune a 70B model on consumer hardware?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Full fine-tuning requires roughly 3× the inference memory for LoRA fine-tuning (~120-130 GB VRAM). This exceeds all consumer hardware except the DGX Spark (128 GB -- barely feasible for small LoRA runs with 4-bit quantization). For 70B fine-tuning, cloud GPU providers (RunPod, Lambda Labs, Vast.ai) are more practical. Consumer hardware handles 7B-13B fine-tuning reliably.' } },
          { '@type': 'Question', 'name': 'What is the best quantization for 70B on Apple Silicon?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'On 64 GB Mac (M5 Max or M2 Ultra): Q4_K_M (~40 GB) leaves 24 GB for the OS -- comfortable. Q5_K_M (~50 GB) leaves 14 GB -- tight but feasible. Q8_0 (~70 GB) exceeds 64 GB -- only feasible on 96 GB or 128 GB configurations. On 128 GB Mac: Q8_0 is recommended for near-lossless quality at no speed penalty.' } },
          { '@type': 'Question', 'name': 'Does Ollama automatically choose the best quantization?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. `ollama run llama3.3:70b` downloads the default Q4_K_M. Specify explicitly for better quality: `ollama run llama3.3:70b:q5_k_m` or `ollama run llama3.3:70b:q8_0`. Check available memory with `ollama ps` after loading -- if the model fits comfortably, upgrade to the next quantization level.' } },
        ],
      },
    },
    es: {
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Cómo ejecutar modelos 70B en hardware de consumo 2026: RAM y GPU',
      seoTitle: '70B en hardware de consumo 2026: guía de RAM y GPU',
      intro: 'Ejecutar un modelo de 70B parámetros localmente requiere 40-48 GB de RAM con cuantización Q4_K_M. Esto es posible en: Macs Apple Silicon con 64 GB de memoria unificada, estaciones de trabajo con 64 GB DDR5, o máquinas que combinan una GPU NVIDIA de 24 GB con 32 GB de RAM del sistema usando layer offloading. En abril de 2026, Llama 3.3 70B y Qwen3 72B son los dos modelos 70B principales disponibles.',
      metaDescription: 'Ejecuta Llama 3.3 y Qwen3 70B en local: requisitos de RAM, NVIDIA vs Apple Silicon, layer offloading y benchmarks. Guía de hardware completa 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ejecutar un modelo de 70B parámetros localmente requiere 40-48 GB de RAM con cuantización Q4_K_M. Esto es posible en: Macs Apple Silicon con 64 GB de memoria unificada, estaciones de trabajo con 64 GB DDR5, o máquinas que combinan una GPU NVIDIA de 24 GB con 32 GB de RAM del sistema usando layer offloading.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan flujos de trabajo con LLMs locales',
      readTime: '9 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B LLM local hardware de consumo',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: '¿Qué hardware puede ejecutar un modelo 70B?', anchor: '#what-hardware' },
        { label: 'Requisitos de RAM por cuantización', anchor: '#ram-requirements' },
        { label: 'Apple Silicon: la mejor opción de consumo', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark: opción con 128 GB unificados', anchor: '#dgx-spark' },
        { label: 'GPU NVIDIA + Layer Offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'Inferencia 70B solo con CPU', anchor: '#cpu-only' },
        { label: '¿Qué modelo 70B deberías ejecutar?', anchor: '#which-model' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Errores comunes', anchor: '#common-mistakes' },
        { label: 'Lecturas relacionadas', anchor: '#related-reading' },
        { label: 'Preguntas frecuentes', anchor: '#faq' },
        { label: 'Fuentes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Cuantización Q4_K_M: Llama 3.3 70B requiere ~40 GB de RAM; Qwen3 72B requiere ~43 GB de RAM.',
            '**Hardware de consumo más sencillo**: Apple Mac Studio M2 Ultra (64 GB unificados) o MacBook Pro M5 Max (64 GB) -- aceleración GPU completa, sin layer offloading necesario.',
            '**Opción NVIDIA**: RTX 4090 (24 GB VRAM) + 32 GB de RAM del sistema con layer offloading en Ollama funciona con la mayoría de modelos 70B, aunque el 20-30% de las capas se ejecutan en CPU.',
            '**70B solo con CPU**: posible con 64 GB de RAM pero produce 1-3 tok/seg -- marginalmente usable para tareas por lotes, no para chat interactivo.',
            'En abril de 2026, un modelo 70B local iguala la calidad de GPT-4 (2023) y es el único camino accesible al consumidor hacia ese nivel de calidad sin costos en la nube.',
          ],
        },
        whatHardware: {
          title: '¿Qué hardware puede realmente ejecutar un LLM local 70B?',
          content: [
            '**Un modelo 70B con cuantización Q4_K_M requiere aproximadamente 40-43 GB de memoria accesible para el motor de inferencia.** Esto puede provenir de VRAM de la GPU, memoria unificada del sistema (Apple Silicon), RAM del sistema, o una combinación mediante layer offloading.',
          ],
          image: '/images/70b-hardware-comparison.svg',
          imageCaption: 'Comparación de hardware: Apple Silicon M5 Max alcanza 25-35 tok/seg sin offloading, mientras que NVIDIA RTX 4090 con layer offloading llega a 10-18 tok/seg, y la inferencia 70B solo con CPU produce apenas 1-3 tok/seg.',
          rows: [
            { 'Hardware': 'Apple M5 Max (64 GB unificados)', '¿Puede ejecutar 70B?': 'Sí -- GPU completa', 'Velocidad (70B Q4)': '20-30 tok/seg', 'Notas': 'Mejor opción de laptop de consumo' },
            { 'Hardware': 'Apple M2 Ultra (64 GB unificados)', '¿Puede ejecutar 70B?': 'Sí -- GPU completa', 'Velocidad (70B Q4)': '25-35 tok/seg', 'Notas': 'Configuración base del Mac Studio' },
            { 'Hardware': 'Apple M2 Ultra (192 GB unificados)', '¿Puede ejecutar 70B?': 'Sí -- GPU completa', 'Velocidad (70B Q4)': '30-40 tok/seg', 'Notas': 'Ejecuta Q8_0 con margen amplio' },
            { 'Hardware': 'NVIDIA DGX Spark (128 GB unificados)', '¿Puede ejecutar 70B?': 'Sí -- GPU completa', 'Velocidad (70B Q4)': '18-28 tok/seg', 'Notas': 'Q8_0 cabe (70 GB). Ideal para flujos CUDA.' },
            { 'Hardware': 'NVIDIA RTX 4090 (24 GB) + 32 GB RAM', '¿Puede ejecutar 70B?': 'Sí -- con offloading', 'Velocidad (70B Q4)': '10-18 tok/seg', 'Notas': '~60% capas en GPU, ~40% en CPU' },
            { 'Hardware': 'NVIDIA RTX 4080 (16 GB) + 32 GB RAM', '¿Puede ejecutar 70B?': 'Solo offloading parcial', 'Velocidad (70B Q4)': '5-10 tok/seg', 'Notas': 'Solo ~35% de capas en GPU' },
            { 'Hardware': '64 GB RAM, solo CPU', '¿Puede ejecutar 70B?': 'Sí -- solo CPU', 'Velocidad (70B Q4)': '1-3 tok/seg', 'Notas': 'Impracticable para uso interactivo' },
          ],
          columns: ['Hardware', '¿Puede ejecutar 70B?', 'Velocidad (70B Q4)', 'Notas'],
        },
        ramByQuant: {
          title: '¿Cuánta RAM necesita un modelo 70B en cada nivel de cuantización?',
          image: '/images/70b-quantization-tradeoff.svg',
          imageCaption: 'Curva de compromiso de cuantización: Q4_K_M (recomendado) requiere 40-43 GB de RAM con solo 1-3% de pérdida de calidad frente a FP16, equilibrando practicidad y rendimiento para hardware de consumo.',
          rows: [
            { 'Cuantización': 'FP16 (precisión completa)', 'RAM requerida': '~140 GB', 'Calidad': 'Calidad de referencia', '¿Práctico?': 'No -- solo servidores' },
            { 'Cuantización': 'Q8_0', 'RAM requerida': '~70 GB', 'Calidad': 'Casi sin pérdida', '¿Práctico?': 'Solo Mac Ultra 192 GB' },
            { 'Cuantización': 'Q5_K_M', 'RAM requerida': '~50 GB', 'Calidad': 'Pérdida mínima', '¿Práctico?': 'Mac Ultra 64 GB, ajustado' },
            { 'Cuantización': 'Q4_K_M', 'RAM requerida': '~40-43 GB', 'Calidad': 'Pérdida baja -- recomendado', '¿Práctico?': 'Sí -- opción más viable' },
            { 'Cuantización': 'Q3_K_S', 'RAM requerida': '~30 GB', 'Calidad': 'Pérdida moderada', '¿Práctico?': 'Sí -- posible en máquinas de 32 GB' },
            { 'Cuantización': 'Q2_K', 'RAM requerida': '~22 GB', 'Calidad': 'Pérdida alta', '¿Práctico?': 'No recomendado' },
          ],
          columns: ['Cuantización', 'RAM requerida', 'Calidad', '¿Práctico?'],
        },
        appleSilicon: {
          title: '¿Por qué Apple Silicon es la mejor opción de consumo para modelos 70B?',
          content: [
            '**Apple Silicon usa memoria unificada -- la CPU y la GPU comparten el mismo grupo de memoria física.** Un MacBook Pro M5 Max con 64 GB de memoria unificada puede ejecutar un modelo 70B en Q4_K_M completamente en la GPU, alcanzando 20-30 tok/seg sin el overhead del layer offloading.',
            'En hardware NVIDIA, la GPU y la RAM del sistema están separadas. Una GPU con 24 GB de VRAM solo puede alojar el ~60% de un modelo 70B en Q4_K_M; las capas restantes se ejecutan en CPU, creando un cuello de botella de ancho de banda de memoria que reduce la velocidad a 10-18 tok/seg.',
            'En abril de 2026, el Mac Studio M2 Ultra (64 GB, ~$2,000 reacondicionado) es el camino más rentable hacia la inferencia local 70B a velocidad utilizable. Un nuevo MacBook Pro M5 Max de 64 GB cuesta aproximadamente $3,500.',
          ],
        },
        dgxSpark: {
          title: 'NVIDIA DGX Spark: 128 GB de memoria unificada para modelos 70B',
          content: [
            '**El NVIDIA DGX Spark ($3,999) es un ordenador de escritorio de IA compacto lanzado en octubre de 2025, basado en el GB10 Grace Blackwell Superchip con 128 GB de memoria unificada LPDDR5x.** Su arquitectura de memoria unificada significa que la GPU y la CPU comparten el mismo pool de 128 GB -- similar a Apple Silicon pero con aceleración CUDA.',
            'Con 128 GB de memoria unificada, el DGX Spark ejecuta Llama 3.3 70B y Qwen3 72B en Q8_0 (70 GB -- calidad casi sin pérdida). La velocidad de inferencia para 70B en Q8_0 es aproximadamente 18-28 tok/seg.',
          ],
          rows: [
            { 'Especificación': 'Memoria', 'Valor': '128 GB unificados LPDDR5x' },
            { 'Especificación': '70B en Q8_0', 'Valor': 'Sí -- calidad casi sin pérdida' },
            { 'Especificación': 'Velocidad de inferencia 70B', 'Valor': '18-28 tok/seg' },
            { 'Especificación': 'Tamaño máximo de modelo', 'Valor': '~200B parámetros en FP4' },
            { 'Especificación': 'Precio', 'Valor': '$3,999 (NVIDIA directo / Amazon)' },
            { 'Especificación': 'Comando Ollama', 'Valor': 'ollama run llama3.3:70b' },
          ],
          columns: ['Especificación', 'Valor'],
        },
        nvidiaOffload: {
          title: '¿Cómo funciona la GPU NVIDIA + layer offloading para modelos 70B?',
          content: 'Ollama y llama.cpp permiten dividir un modelo entre la VRAM de la GPU y la RAM del sistema. Las capas cargadas en VRAM se ejecutan a velocidad GPU; las capas en RAM del sistema se ejecutan a velocidad CPU:',
          image: '/images/70b-layer-offloading.svg',
          imageCaption: 'Arquitectura de layer offloading: la GPU RTX 4090 (24 GB) almacena ~60% de las capas (1-48) a 10-18 tok/seg, mientras que la RAM del sistema (32 GB) almacena las capas restantes (49-80) ejecutándose a velocidad CPU (2-5 tok/seg), logrando 10-18 tok/seg en total.',
          codeBlock: '# Ollama automatically offloads as many layers as fit in VRAM\n# To explicitly control layers:\nollama run llama3.3:70b\n\n# Check how many layers are on GPU:\nollama ps\n# Output shows: llama3.3:70b  ...  23/80 GPU layers\n\n# For llama.cpp directly:\n./llama-cli -m llama-3.3-70b-q4_k_m.gguf \\\n  -ngl 40   # number of layers to offload to GPU\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        cpuOnly: {
          title: '¿Es práctica la inferencia 70B solo con CPU?',
          content: [
            '**Un modelo 70B en Q4_K_M en una CPU de alto número de núcleos (AMD Threadripper, Intel Xeon) con 64 GB de RAM produce 1-3 tokens/seg.** A 2 tok/seg, una respuesta de 200 palabras tarda aproximadamente 75 segundos.',
            'Esto es impracticable para chat interactivo, pero utilizable para procesamiento por lotes -- resumir documentos, generar informes o procesar archivos durante la noche. Para uso interactivo, el hardware mínimo práctico es una máquina que pueda alcanzar 8+ tok/seg, lo que requiere Apple Silicon o layer offloading con GPU NVIDIA.',
          ],
        },
        which70b: {
          title: '¿Qué modelo 70B deberías ejecutar localmente?',
          rows: [
            { 'Modelo': 'Llama 3.3 70B', 'MMLU': '82%', 'HumanEval': '88%', 'Ideal para': 'Tareas generales en inglés, seguimiento de instrucciones' },
            { 'Modelo': 'Qwen3 72B', 'MMLU': '84%', 'HumanEval': '87%', 'Ideal para': 'Codificación, multilingüe (29 idiomas)' },
            { 'Modelo': 'Mistral Large 123B', 'MMLU': '84%', 'HumanEval': '80%', 'Ideal para': 'Requiere 80+ GB -- solo estaciones de trabajo' },
          ],
          columns: ['Modelo', 'MMLU', 'HumanEval', 'Ideal para'],
        },
        regionalContext: {
          title: 'Ejecutar modelos 70B localmente: contexto regional',
          content: [
            '**UE / RGPD**: Un modelo local 70B representa el límite práctico de la calidad de IA ejecutable de forma privada. Para empresas de la UE que procesan datos sensibles -- documentos legales, registros médicos, análisis financiero -- un modelo 70B en local entrega calidad GPT-4 2023 con pleno cumplimiento del RGPD. Ningún prompt, contexto ni salida abandona la infraestructura de la organización.',
            'Para el cumplimiento de BSI alemán y CNIL francesa: el Mac Studio M2 Ultra (Apple, EE.UU.) y el NVIDIA DGX Spark (NVIDIA, EE.UU.) son de proveedores no europeos. Para organizaciones que requieran hardware de cadena de suministro europea, los partners OEM de NVIDIA (Dell, HP, Lenovo) producen sistemas compatibles con DGX Spark y GB10 con soporte en la UE.',
            'Selección de modelos para cumplimiento en la UE: Mistral Large 123B (Mistral AI, Francia, Apache 2.0) es el único modelo de 70B+ desarrollado por una empresa europea. Requiere más de 80 GB de RAM (solo estaciones de trabajo), pero ofrece la narrativa más sólida en términos de propiedad intelectual y cumplimiento en la UE.',
            '**Japón (METI)**: Para empresas japonesas, Qwen3 72B es el modelo 70B recomendado -- su tokenización nativa para japonés es un 30-40% más eficiente que Llama para texto en japonés. En un Mac Studio M2 Ultra (64 GB): `ollama run qwen2.5:72b`. La gobernanza de IA del METI requiere documentar las versiones de hardware y modelo. La salida de `ollama ps` proporciona la identificación exacta del modelo para los registros de cumplimiento.',
            '**China**: Qwen3 72B (Alibaba) ejecutado localmente satisface la localización de datos bajo la Ley de Seguridad de Datos de China (数据安全法) mientras ofrece un 84% de calidad MMLU. Los equipos empresariales comúnmente despliegan en servidores de doble GPU (2× RTX 4090, 48 GB de VRAM combinados). Para el cumplimiento del CAC: un Qwen3 72B alojado localmente que atiende usuarios internos está fuera de la definición de proveedor del CAC -- no se ofrece como servicio público.',
          ],
        },
        commonMistakes: {
          title: '¿Cuáles son los errores comunes al ejecutar modelos 70B en hardware de consumo?',
          faqs: [
            {
              q: 'Comprar una GPU con menos de 24 GB de VRAM esperando rendimiento 70B completo',
              a: 'Una RTX 4070 Ti (12 GB de VRAM) solo puede alojar el ~30% de un modelo 70B en Q4_K_M en VRAM. El 70% restante se ejecuta en CPU, resultando en 3-5 tok/seg -- apenas más rápido que la inferencia solo con CPU. Para modelos 70B, 24 GB de VRAM (RTX 4090) es el mínimo práctico para una aceleración GPU útil. Por debajo de esto, considera ejecutar un modelo de 34B en su lugar.',
            },
            {
              q: 'No usar layer offloading en Ollama',
              a: 'Por defecto, si un modelo 70B no cabe completamente en VRAM, Ollama recurre a la inferencia solo con CPU. Establece las capas GPU explícitamente con `OLLAMA_GPU_LAYERS=999` -- Ollama hará offloading de tantas capas como quepan en VRAM y ejecutará el resto en CPU, lo cual es significativamente más rápido que la inferencia con solo CPU.',
            },
            {
              q: 'Usar Q4_K_M cuando Q3_K_S encajaría mejor en el hardware disponible',
              a: 'En máquinas con 32-40 GB de RAM, Q4_K_M para un modelo 70B puede ser demasiado ajustado (dejando margen insuficiente para el sistema operativo). Q3_K_S reduce la RAM a ~30 GB con una pérdida de calidad moderada. Ejecuta `ollama ps` después de cargar el modelo -- si ves uso de swap, baja a Q3_K_S.',
            },
            {
              q: 'Esperar la misma velocidad de Apple Silicon con una configuración NVIDIA con offloading',
              a: 'El layer offloading en NVIDIA crea un cuello de botella de ancho de banda de memoria entre VRAM y RAM del sistema. La RTX 4090 con offloading produce 10-18 tok/seg frente a 20-30 tok/seg en el M5 Max. Para velocidad equivalente, Apple Silicon es la mejor opción de consumo. Para flujos de trabajo CUDA (ajuste fino, kernels personalizados), NVIDIA es necesario.',
            },
            {
              q: 'Ejecutar Q4_K_M en el DGX Spark en lugar de Q8_0',
              a: 'El DGX Spark tiene 128 GB -- suficiente para Q8_0 (70 GB). Usar Q4_K_M desperdicia la calidad disponible. En cualquier máquina con más de 80 GB, ejecuta Q8_0 para modelos 70B.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Guía de hardware para LLM locales 2026](/es/local-llms/local-llm-hardware-guide-2026) -- tabla completa de GPU y RAM por tamaño de modelo, incluyendo requisitos de hardware para 70B',
            '[Mejores LLMs locales 2026](/es/local-llms/best-local-llms-2026) -- rankings de benchmarks para ambos modelos 70B y alternativas intermedias con menos de 40 GB de RAM',
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- configuración completa incluyendo layer offloading para GPUs NVIDIA',
            '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) -- entiende Q4_K_M vs Q8_0 y por qué Q8_0 es la elección correcta en máquinas de 128 GB',
            '[PC para LLM local por menos de $1000](/es/local-llms/local-llm-pc-build-1000) -- guía de hardware económico para modelos 7B-13B cuando el hardware para 70B está fuera del presupuesto',
            '[Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral) -- comparación detallada de benchmarks de ambos modelos 70B en cada categoría de tarea',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes sobre ejecutar modelos 70B en hardware de consumo',
          faqs: [
            {
              q: '¿Cuál es el hardware más barato que puede ejecutar un modelo 70B de forma utilizable?',
              a: 'En abril de 2026, un Mac Studio M2 Ultra de segunda mano (64 GB de memoria unificada) por ~$2,000 es el camino más económico hacia la inferencia 70B a 25+ tok/seg. Un equipo nuevo equivalente sería el MacBook Pro M5 Max de 64 GB (~$3,500). Un escritorio con NVIDIA RTX 4090 (24 GB VRAM + 32 GB RAM) cuesta ~$3,000-$4,000 en total, pero produce una inferencia más lenta debido al layer offloading.',
            },
            {
              q: '¿Puedo ejecutar un modelo 70B en dos GPUs?',
              a: 'Sí -- llama.cpp y Ollama admiten inferencia multi-GPU en hardware NVIDIA. Dos RTX 4090 (48 GB de VRAM total) caben un modelo 70B en Q4_K_M completamente en VRAM. Ollama gestiona el multi-GPU automáticamente cuando hay múltiples GPUs presentes. El paralelismo de tensores en llama.cpp (`--tensor-split`) controla cómo se distribuyen las capas.',
            },
            {
              q: '¿Cómo se compara la calidad local 70B con GPT-5.5?',
              a: 'En los benchmarks MMLU y HumanEval, Llama 3.3 70B (82%, 88%) y Qwen3 72B (84%, 87%) igualan o superan ligeramente los puntajes de GPT-4 (2023). GPT-5.5 (2024) puntúa más alto en tareas intensivas en razonamiento. Para seguimiento general de instrucciones, resumen y generación de código, los modelos locales 70B son competitivos con GPT-5.5 en la mayoría de tareas.',
            },
            {
              q: '¿Admite Ollama la ejecución automática de modelos 70B?',
              a: 'Sí. Ejecutar `ollama run llama3.3:70b` descarga y ejecuta el modelo con layer offloading automático de GPU. Ollama detecta la VRAM disponible y la RAM del sistema, hace offloading de tantas capas como sea posible a la GPU y ejecuta el resto en CPU. No se requiere configuración manual para el uso básico.',
            },
            {
              q: '¿Cuánta electricidad consume ejecutar un modelo 70B?',
              a: 'Un Mac Studio M2 Ultra ejecutando inferencia 70B consume aproximadamente 30-50 W. Un escritorio con NVIDIA RTX 4090 bajo carga consume 350-450 W. A $0.15 por kWh, la inferencia 70B continua en una RTX 4090 cuesta aproximadamente $0.05-0.07 por hora. Apple Silicon es 7-10 veces más eficiente energéticamente para esta carga de trabajo.',
            },
            {
              q: '¿Valen la pena los modelos 70B comparados con los modelos 13B para tareas cotidianas?',
              a: 'Para razonamiento complejo, análisis de documentos extensos y escritura matizada, sí -- la diferencia de calidad es notable. Para resumen simple, preguntas y respuestas, y clasificación, un modelo de 13B o incluso 7B produce una salida prácticamente idéntica. Ejecuta ambos en tu caso de uso específico con [PromptQuorum](/) para cuantificar la diferencia de calidad antes de invertir en hardware para 70B.',
            },
            {
              q: '¿Qué es el NVIDIA DGX Spark y vale la pena para inferencia 70B?',
              a: 'El DGX Spark ($3,999) es el ordenador de IA de escritorio compacto de NVIDIA con 128 GB de memoria unificada. Ejecuta modelos 70B en Q8_0 (calidad casi sin pérdida) sin restricciones de cuantización. Velocidad: 18-28 tok/seg. Comparado con un Mac Studio M2 Ultra (~$2,000 reacondicionado, 64 GB): el DGX Spark cuesta ~$2,000 más por inferencia de mayor calidad y soporte CUDA. Para inferencia 70B pura, el Mac Studio es más económico. Para flujos de trabajo CUDA (ajuste fino, kernels personalizados), el DGX Spark es mejor.',
            },
            {
              q: '¿Puedo ajustar un modelo 70B en hardware de consumo?',
              a: 'El ajuste fino completo requiere aproximadamente 3 veces la memoria de inferencia para ajuste LoRA (~120-130 GB de VRAM). Esto supera todo el hardware de consumo excepto el DGX Spark (128 GB -- apenas factible para ejecuciones pequeñas de LoRA con cuantización de 4 bits). Para el ajuste fino de 70B, los proveedores de GPU en la nube (RunPod, Lambda Labs, Vast.ai) son más prácticos. El hardware de consumo maneja el ajuste fino de 7B-13B de forma confiable.',
            },
            {
              q: '¿Cuál es la mejor cuantización para 70B en Apple Silicon?',
              a: 'En un Mac de 64 GB (M5 Max o M2 Ultra): Q4_K_M (~40 GB) deja 24 GB para el sistema operativo -- cómodo. Q5_K_M (~50 GB) deja 14 GB -- ajustado pero factible. Q8_0 (~70 GB) supera los 64 GB -- solo factible en configuraciones de 96 GB o 128 GB. En un Mac de 128 GB: se recomienda Q8_0 para calidad casi sin pérdida sin penalización de velocidad.',
            },
            {
              q: '¿Elige Ollama automáticamente la mejor cuantización?',
              a: 'No. `ollama run llama3.3:70b` descarga el Q4_K_M predeterminado. Especifica explícitamente para mayor calidad: `ollama run llama3.3:70b:q5_k_m` o `ollama run llama3.3:70b:q8_0`. Verifica la memoria disponible con `ollama ps` después de cargar -- si el modelo cabe cómodamente, sube al siguiente nivel de cuantización.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            'Documentación de GPU Offloading de llama.cpp -- github.com/ggerganov/llama.cpp/blob/master/docs/backend/CUDA.md',
            'Biblioteca de modelos de Ollama -- ollama.com/library/llama3.3',
            'Benchmarks de inferencia Apple M5 Max -- github.com/ggerganov/llama.cpp/discussions (hilo de benchmarks de la comunidad)',
            'Tarjeta de modelo Meta Llama 3.3 -- huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
            'NVIDIA DGX Spark -- nvidia.com/en-us/products/workstations/dgx-spark/',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Cómo ejecutar modelos 70B en hardware de consumo 2026: RAM y GPU',
        'description': 'Ejecuta modelos Llama 3.3 y Qwen3 70B localmente: requisitos de RAM, NVIDIA vs Apple Silicon, layer offloading, benchmarks. Guía de hardware completa -- abril 2026.',
        'url': 'https://www.promptquorum.com/es/local-llms/70b-models-consumer-hardware?lang=es',
        'datePublished': '2026-04-04',
        'dateModified': '2026-04-18',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'modelo de lenguaje 70B' },
          { '@type': 'Thing', 'name': 'inferencia Apple Silicon' },
          { '@type': 'Thing', 'name': 'NVIDIA RTX 4090' },
          { '@type': 'Thing', 'name': 'Layer offloading' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'Qwen3 72B' },
          { '@type': 'Thing', 'name': 'NVIDIA DGX Spark' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Cómo ejecutar un modelo 70B en hardware de consumo con Ollama',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Verifica que tienes más de 40 GB de RAM disponible o memoria unificada' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Instala Ollama desde ollama.com' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Ejecuta: ollama run llama3.3:70b' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Comprueba el uso de capas en GPU con: ollama ps' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Ajusta la cuantización si la RAM es escasa: usa la variante q3_k_s' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Hardware de consumo para inferencia local de LLM 70B en 2026',
        'numberOfItems': 7,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Apple M5 Max 64 GB', 'description': 'GPU completa. 20-30 tok/seg. Mejor laptop. ~$3,500.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Apple Mac Studio M2 Ultra 64 GB', 'description': 'GPU completa. 25-35 tok/seg. Mejor relación calidad-precio. ~$2,000 reacondicionado.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Apple Mac Studio M2 Ultra 192 GB', 'description': 'GPU completa. 30-40 tok/seg. Ejecuta Q8_0.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'NVIDIA DGX Spark 128 GB', 'description': 'GPU completa CUDA. 18-28 tok/seg. Ejecuta Q8_0. $3,999.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'NVIDIA RTX 4090 24 GB + 32 GB RAM', 'description': 'Layer offloading. 10-18 tok/seg. ~$3,000-4,000 en total.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'NVIDIA RTX 4080 16 GB + 32 GB RAM', 'description': 'Offloading parcial. 5-10 tok/seg.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'Solo CPU 64 GB RAM', 'description': '1-3 tok/seg. Solo para procesamiento por lotes.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          { '@type': 'Question', 'name': '¿Cuál es el hardware más barato que puede ejecutar un modelo 70B de forma utilizable?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'En abril de 2026, un Mac Studio M2 Ultra de segunda mano (64 GB de memoria unificada) por ~$2,000 es el camino más económico hacia la inferencia 70B a 25+ tok/seg. Un equipo nuevo equivalente sería el MacBook Pro M5 Max de 64 GB (~$3,500). Un escritorio con NVIDIA RTX 4090 (24 GB VRAM + 32 GB RAM) cuesta ~$3,000-$4,000 en total, pero produce una inferencia más lenta debido al layer offloading.' } },
          { '@type': 'Question', 'name': '¿Puedo ejecutar un modelo 70B en dos GPUs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí -- llama.cpp y Ollama admiten inferencia multi-GPU en hardware NVIDIA. Dos RTX 4090 (48 GB de VRAM total) caben un modelo 70B en Q4_K_M completamente en VRAM. Ollama gestiona el multi-GPU automáticamente cuando hay múltiples GPUs presentes. El paralelismo de tensores en llama.cpp (`--tensor-split`) controla cómo se distribuyen las capas.' } },
          { '@type': 'Question', 'name': '¿Cómo se compara la calidad local 70B con GPT-5.5?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'En los benchmarks MMLU y HumanEval, Llama 3.3 70B (82%, 88%) y Qwen3 72B (84%, 87%) igualan o superan ligeramente los puntajes de GPT-4 (2023). GPT-5.5 (2024) puntúa más alto en tareas intensivas en razonamiento. Para seguimiento general de instrucciones, resumen y generación de código, los modelos locales 70B son competitivos con GPT-5.5 en la mayoría de tareas.' } },
          { '@type': 'Question', 'name': '¿Admite Ollama la ejecución automática de modelos 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Ejecutar `ollama run llama3.3:70b` descarga y ejecuta el modelo con layer offloading automático de GPU. Ollama detecta la VRAM disponible y la RAM del sistema, hace offloading de tantas capas como sea posible a la GPU y ejecuta el resto en CPU. No se requiere configuración manual para el uso básico.' } },
          { '@type': 'Question', 'name': '¿Cuánta electricidad consume ejecutar un modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Un Mac Studio M2 Ultra ejecutando inferencia 70B consume aproximadamente 30-50 W. Un escritorio con NVIDIA RTX 4090 bajo carga consume 350-450 W. A $0.15 por kWh, la inferencia 70B continua en una RTX 4090 cuesta aproximadamente $0.05-0.07 por hora. Apple Silicon es 7-10 veces más eficiente energéticamente para esta carga de trabajo.' } },
          { '@type': 'Question', 'name': '¿Valen la pena los modelos 70B comparados con los modelos 13B para tareas cotidianas?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para razonamiento complejo, análisis de documentos extensos y escritura matizada, sí -- la diferencia de calidad es notable. Para resumen simple, preguntas y respuestas, y clasificación, un modelo de 13B o incluso 7B produce una salida prácticamente idéntica. Ejecuta ambos en tu caso de uso específico con [PromptQuorum](/) para cuantificar la diferencia de calidad antes de invertir en hardware para 70B.' } },
          { '@type': 'Question', 'name': '¿Qué es el NVIDIA DGX Spark y vale la pena para inferencia 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El DGX Spark ($3,999) es el ordenador de IA de escritorio compacto de NVIDIA con 128 GB de memoria unificada. Ejecuta modelos 70B en Q8_0 (calidad casi sin pérdida) sin restricciones de cuantización. Velocidad: 18-28 tok/seg. Comparado con un Mac Studio M2 Ultra (~$2,000 reacondicionado, 64 GB): el DGX Spark cuesta ~$2,000 más por inferencia de mayor calidad y soporte CUDA. Para inferencia 70B pura, el Mac Studio es más económico. Para flujos de trabajo CUDA (ajuste fino, kernels personalizados), el DGX Spark es mejor.' } },
          { '@type': 'Question', 'name': '¿Puedo ajustar un modelo 70B en hardware de consumo?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El ajuste fino completo requiere aproximadamente 3 veces la memoria de inferencia para ajuste LoRA (~120-130 GB de VRAM). Esto supera todo el hardware de consumo excepto el DGX Spark (128 GB -- apenas factible para ejecuciones pequeñas de LoRA con cuantización de 4 bits). Para el ajuste fino de 70B, los proveedores de GPU en la nube (RunPod, Lambda Labs, Vast.ai) son más prácticos. El hardware de consumo maneja el ajuste fino de 7B-13B de forma confiable.' } },
          { '@type': 'Question', 'name': '¿Cuál es la mejor cuantización para 70B en Apple Silicon?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'En un Mac de 64 GB (M5 Max o M2 Ultra): Q4_K_M (~40 GB) deja 24 GB para el sistema operativo -- cómodo. Q5_K_M (~50 GB) deja 14 GB -- ajustado pero factible. Q8_0 (~70 GB) supera los 64 GB -- solo factible en configuraciones de 96 GB o 128 GB. En un Mac de 128 GB: se recomienda Q8_0 para calidad casi sin pérdida sin penalización de velocidad.' } },
          { '@type': 'Question', 'name': '¿Elige Ollama automáticamente la mejor cuantización?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. `ollama run llama3.3:70b` descarga el Q4_K_M predeterminado. Especifica explícitamente para mayor calidad: `ollama run llama3.3:70b:q5_k_m` o `ollama run llama3.3:70b:q8_0`. Verifica la memoria disponible con `ollama ps` después de cargar -- si el modelo cabe cómodamente, sube al siguiente nivel de cuantización.' } },
        ],
      },
    },
    pt: {
      theme: 'Best Models',
      title: 'Como rodar LLMs de 70B em hardware de consumo 2026: RAM e GPU',
      seoTitle: '70B em hardware de consumo 2026: guia de RAM e GPU',
      intro: 'Rodar um modelo de 70B parâmetros localmente requer 40-48 GB de RAM com quantização Q4_K_M. Isso é possível em: Macs Apple Silicon com 64 GB de memória unificada, estações de trabalho com 64 GB DDR5, ou máquinas que combinam uma GPU NVIDIA de 24 GB com 32 GB de RAM do sistema usando layer offloading. Em abril de 2026, Llama 3.3 70B e Qwen3 72B são os dois principais modelos 70B disponíveis.',
      metaDescription: 'Rode Llama 3.3 e Qwen3 70B localmente: requisitos de RAM, NVIDIA vs Apple Silicon, layer offloading e benchmarks. Guia de hardware completo — abril 2026.',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Rodar um modelo de 70B parâmetros localmente requer 40-48 GB de RAM com quantização Q4_K_M. Isso é possível em: Macs Apple Silicon com 64 GB de memória unificada, estações de trabalho com 64 GB DDR5, ou máquinas que combinam uma GPU NVIDIA de 24 GB com 32 GB de RAM do sistema usando layer offloading.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam fluxos de trabalho com LLMs locais',
      readTime: '9 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B LLM local hardware de consumo',
      toc: [
        { label: 'Pontos-chave', anchor: '#key-takeaways' },
        { label: 'Qual hardware pode rodar um modelo 70B?', anchor: '#what-hardware' },
        { label: 'Requisitos de RAM por quantização', anchor: '#ram-requirements' },
        { label: 'Apple Silicon: melhor opção de consumo', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark: opção com 128 GB unificados', anchor: '#dgx-spark' },
        { label: 'GPU NVIDIA + Layer Offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'Inferência 70B somente com CPU', anchor: '#cpu-only' },
        { label: 'Qual modelo 70B você deve rodar?', anchor: '#which-model' },
        { label: 'Contexto regional', anchor: '#regional-context' },
        { label: 'Erros comuns', anchor: '#common-mistakes' },
        { label: 'Leitura relacionada', anchor: '#related-reading' },
        { label: 'Perguntas frequentes', anchor: '#faq' },
        { label: 'Fontes', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          items: [
            'Quantização Q4_K_M: Llama 3.3 70B requer ~40 GB de RAM; Qwen3 72B requer ~43 GB de RAM.',
            '**Hardware de consumo mais simples**: Apple Mac Studio M2 Ultra (64 GB unificados) ou MacBook Pro M5 Max (64 GB) -- aceleração GPU completa, sem layer offloading necessário.',
            '**Opção NVIDIA**: RTX 4090 (24 GB VRAM) + 32 GB de RAM do sistema com layer offloading no Ollama funciona com a maioria dos modelos 70B, embora 20-30% das camadas rodem na CPU.',
            '**70B somente com CPU**: possível com 64 GB de RAM, mas produz 1-3 tok/s -- marginalmente utilizável para tarefas em lote, não para chat interativo.',
            'Em abril de 2026, um modelo 70B local iguala a qualidade do GPT-4 (2023) e é o único caminho acessível ao consumidor para esse nível de qualidade sem custos de nuvem.',
          ],
        },
        whatHardware: {
          title: 'Qual hardware pode rodar um LLM local de 70B?',
          content: [
            '**Um modelo 70B com quantização Q4_K_M requer aproximadamente 40-43 GB de memória acessível ao mecanismo de inferência.** Isso pode vir de VRAM da GPU, memória unificada do sistema (Apple Silicon), RAM do sistema, ou uma combinação via layer offloading.',
          ],
          image: '/images/70b-hardware-comparison.svg',
          imageCaption: 'Comparação de hardware: Apple Silicon M5 Max atinge 25-35 tok/s sem offloading, enquanto NVIDIA RTX 4090 com layer offloading chega a 10-18 tok/s, e a inferência 70B somente com CPU produz apenas 1-3 tok/s.',
          rows: [
            { 'Hardware': 'Apple M5 Max (64 GB unificados)', 'Pode rodar 70B?': 'Sim -- GPU completa', 'Velocidade (70B Q4)': '20-30 tok/s', 'Notas': 'Melhor opção de laptop de consumo' },
            { 'Hardware': 'Apple M2 Ultra (64 GB unificados)', 'Pode rodar 70B?': 'Sim -- GPU completa', 'Velocidade (70B Q4)': '25-35 tok/s', 'Notas': 'Configuração base do Mac Studio' },
            { 'Hardware': 'Apple M2 Ultra (192 GB unificados)', 'Pode rodar 70B?': 'Sim -- GPU completa', 'Velocidade (70B Q4)': '30-40 tok/s', 'Notas': 'Roda Q8_0 com folga' },
            { 'Hardware': 'NVIDIA DGX Spark (128 GB unificados)', 'Pode rodar 70B?': 'Sim -- GPU completa', 'Velocidade (70B Q4)': '18-28 tok/s', 'Notas': 'Q8_0 cabe (70 GB). Ideal para fluxos CUDA.' },
            { 'Hardware': 'NVIDIA RTX 4090 (24 GB) + 32 GB RAM', 'Pode rodar 70B?': 'Sim -- com offloading', 'Velocidade (70B Q4)': '10-18 tok/s', 'Notas': '~60% camadas na GPU, ~40% na CPU' },
            { 'Hardware': 'NVIDIA RTX 4080 (16 GB) + 32 GB RAM', 'Pode rodar 70B?': 'Apenas offloading parcial', 'Velocidade (70B Q4)': '5-10 tok/s', 'Notas': 'Apenas ~35% das camadas na GPU' },
            { 'Hardware': '64 GB RAM, somente CPU', 'Pode rodar 70B?': 'Sim -- somente CPU', 'Velocidade (70B Q4)': '1-3 tok/s', 'Notas': 'Impraticável para uso interativo' },
          ],
          columns: ['Hardware', 'Pode rodar 70B?', 'Velocidade (70B Q4)', 'Notas'],
        },
        ramByQuant: {
          title: 'Quanta RAM um modelo 70B precisa em cada nível de quantização?',
          image: '/images/70b-quantization-tradeoff.svg',
          imageCaption: 'Curva de compromisso de quantização: Q4_K_M (recomendado) requer 40-43 GB de RAM com apenas 1-3% de perda de qualidade em relação ao FP16, equilibrando praticidade e desempenho para hardware de consumo.',
          rows: [
            { 'Quantização': 'FP16 (precisão completa)', 'RAM necessária': '~140 GB', 'Qualidade': 'Qualidade de referência', 'Prático?': 'Não -- apenas servidores' },
            { 'Quantização': 'Q8_0', 'RAM necessária': '~70 GB', 'Qualidade': 'Quase sem perda', 'Prático?': 'Apenas Mac Ultra 192 GB' },
            { 'Quantização': 'Q5_K_M', 'RAM necessária': '~50 GB', 'Qualidade': 'Perda mínima', 'Prático?': 'Mac Ultra 64 GB, apertado' },
            { 'Quantização': 'Q4_K_M', 'RAM necessária': '~40-43 GB', 'Qualidade': 'Perda baixa -- recomendado', 'Prático?': 'Sim -- opção mais viável' },
            { 'Quantização': 'Q3_K_S', 'RAM necessária': '~30 GB', 'Qualidade': 'Perda moderada', 'Prático?': 'Sim -- possível em máquinas de 32 GB' },
            { 'Quantização': 'Q2_K', 'RAM necessária': '~22 GB', 'Qualidade': 'Perda alta', 'Prático?': 'Não recomendado' },
          ],
          columns: ['Quantização', 'RAM necessária', 'Qualidade', 'Prático?'],
        },
        appleSilicon: {
          title: 'Por que o Apple Silicon é a melhor opção de consumo para modelos 70B?',
          content: [
            '**O Apple Silicon usa memória unificada -- a CPU e a GPU compartilham o mesmo pool de memória física.** Um MacBook Pro M5 Max com 64 GB de memória unificada pode rodar um modelo 70B em Q4_K_M inteiramente na GPU, atingindo 20-30 tok/s sem o overhead do layer offloading.',
            'Em hardware NVIDIA, a GPU e a RAM do sistema são separadas. Uma GPU com 24 GB de VRAM só pode alojar ~60% de um modelo 70B em Q4_K_M; as camadas restantes rodam na CPU, criando um gargalo de largura de banda de memória que reduz a velocidade para 10-18 tok/s.',
            'Em abril de 2026, o Mac Studio M2 Ultra (64 GB, ~R$ 10.000 ou US$ 2.000 recondicionado) é o caminho mais econômico para inferência 70B local em velocidade utilizável. Um novo MacBook Pro M5 Max de 64 GB custa aproximadamente US$ 3.500.',
          ],
        },
        dgxSpark: {
          title: 'NVIDIA DGX Spark: 128 GB de memória unificada para modelos 70B',
          content: [
            '**O NVIDIA DGX Spark (US$ 3.999) é um computador de IA compacto lançado em outubro de 2025, baseado no GB10 Grace Blackwell Superchip com 128 GB de memória unificada LPDDR5x.** Sua arquitetura de memória unificada significa que GPU e CPU compartilham o mesmo pool de 128 GB -- semelhante ao Apple Silicon, mas com aceleração CUDA.',
            'Com 128 GB de memória unificada, o DGX Spark roda Llama 3.3 70B e Qwen3 72B em Q8_0 (70 GB -- qualidade quase sem perda). A velocidade de inferência para 70B em Q8_0 é de aproximadamente 18-28 tok/s.',
          ],
          rows: [
            { 'Especificação': 'Memória', 'Valor': '128 GB unificados LPDDR5x' },
            { 'Especificação': '70B em Q8_0', 'Valor': 'Sim -- qualidade quase sem perda' },
            { 'Especificação': 'Velocidade de inferência 70B', 'Valor': '18-28 tok/s' },
            { 'Especificação': 'Tamanho máximo de modelo', 'Valor': '~200B parâmetros em FP4' },
            { 'Especificação': 'Preço', 'Valor': 'US$ 3.999 (NVIDIA direto / Amazon)' },
            { 'Especificação': 'Comando Ollama', 'Valor': 'ollama run llama3.3:70b' },
          ],
          columns: ['Especificação', 'Valor'],
        },
        nvidiaOffload: {
          title: 'Como funciona GPU NVIDIA + layer offloading para modelos 70B?',
          content: 'Ollama e llama.cpp suportam dividir um modelo entre a VRAM da GPU e a RAM do sistema. Camadas carregadas na VRAM rodam em velocidade GPU; camadas na RAM do sistema rodam em velocidade CPU:',
          image: '/images/70b-layer-offloading.svg',
          imageCaption: 'Arquitetura de layer offloading: GPU RTX 4090 (24 GB) armazena ~60% das camadas (1-48) a 10-18 tok/s, enquanto a RAM do sistema (32 GB) armazena as camadas restantes (49-80) rodando em velocidade CPU (2-5 tok/s), atingindo 10-18 tok/s no total.',
          codeBlock: '# Ollama automatically offloads as many layers as fit in VRAM\n# To explicitly control layers:\nollama run llama3.3:70b\n\n# Check how many layers are on GPU:\nollama ps\n# Output shows: llama3.3:70b  ...  23/80 GPU layers\n\n# For llama.cpp directly:\n./llama-cli -m llama-3.3-70b-q4_k_m.gguf \\\n  -ngl 40   # number of layers to offload to GPU\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        cpuOnly: {
          title: 'A inferência 70B somente com CPU é prática?',
          content: [
            '**Um modelo 70B em Q4_K_M em uma CPU de muitos núcleos (AMD Threadripper, Intel Xeon) com 64 GB de RAM produz 1-3 tokens/s.** A 2 tok/s, uma resposta de 200 palavras leva aproximadamente 75 segundos.',
            'Isso é impraticável para chat interativo, mas utilizável para processamento em lote -- resumir documentos, gerar relatórios ou processar arquivos durante a noite. Para uso interativo, o hardware mínimo prático é uma máquina capaz de atingir 8+ tok/s, o que requer Apple Silicon ou layer offloading com GPU NVIDIA.',
          ],
        },
        which70b: {
          title: 'Qual modelo 70B você deve rodar localmente?',
          rows: [
            { 'Modelo': 'Llama 3.3 70B', 'MMLU': '82%', 'HumanEval': '88%', 'Ideal para': 'Tarefas gerais em inglês, seguimento de instruções' },
            { 'Modelo': 'Qwen3 72B', 'MMLU': '84%', 'HumanEval': '87%', 'Ideal para': 'Código, multilíngue (29 idiomas)' },
            { 'Modelo': 'Mistral Large 123B', 'MMLU': '84%', 'HumanEval': '80%', 'Ideal para': 'Requer 80+ GB -- apenas estações de trabalho' },
          ],
          columns: ['Modelo', 'MMLU', 'HumanEval', 'Ideal para'],
        },
        regionalContext: {
          title: 'Rodar modelos 70B localmente: contexto regional',
          content: [
            '**Brasil / LGPD**: Um modelo local de 70B representa o teto prático de qualidade de IA executável de forma privada. Para empresas brasileiras que processam dados sensíveis -- documentos jurídicos, prontuários médicos, análises financeiras -- um modelo 70B rodando localmente entrega qualidade GPT-4 2023 com conformidade total com a LGPD (Lei Geral de Proteção de Dados, Lei nº 13.709/2018). Nenhum prompt, contexto ou saída sai da infraestrutura da organização. A ANPD (Autoridade Nacional de Proteção de Dados) recomenda minimização de transferências internacionais de dados.',
            '**UE / RGPD**: Para empresas europeias que processam dados sensíveis, um modelo 70B local entrega qualidade GPT-4 2023 com conformidade RGPD completa. Nenhum dado sai da infraestrutura da organização.',
            '**China**: Qwen3 72B (Alibaba) rodando localmente satisfaz a localização de dados sob a Lei de Segurança de Dados da China (数据安全法) com 84% de qualidade MMLU.',
          ],
        },
        commonMistakes: {
          title: 'Quais são os erros comuns ao rodar modelos 70B em hardware de consumo?',
          faqs: [
            {
              q: 'Comprar uma GPU com menos de 24 GB de VRAM esperando desempenho 70B completo',
              a: 'Uma RTX 4070 Ti (12 GB de VRAM) só pode alojar ~30% de um modelo 70B em Q4_K_M na VRAM. Os 70% restantes rodam na CPU, resultando em 3-5 tok/s -- quase tão lento quanto inferência apenas com CPU. Para modelos 70B, 24 GB de VRAM (RTX 4090) é o mínimo prático para aceleração GPU útil. Abaixo disso, considere rodar um modelo de 34B.',
            },
            {
              q: 'Não usar layer offloading no Ollama',
              a: 'Por padrão, se um modelo 70B não cabe inteiramente na VRAM, o Ollama recorre à inferência somente com CPU. Configure as camadas GPU explicitamente com `OLLAMA_GPU_LAYERS=999` -- o Ollama fará offloading de quantas camadas couberem na VRAM e rodará o restante na CPU, o que é significativamente mais rápido do que inferência totalmente na CPU.',
            },
            {
              q: 'Usar Q4_K_M quando Q3_K_S se encaixaria melhor no hardware disponível',
              a: 'Em máquinas com 32-40 GB de RAM, Q4_K_M para um modelo 70B pode ser muito apertado (deixando margem insuficiente para o SO). Q3_K_S reduz a RAM para ~30 GB com perda de qualidade moderada. Execute `ollama ps` após carregar o modelo -- se você ver uso de swap, reduza para Q3_K_S.',
            },
            {
              q: 'Esperar a mesma velocidade do Apple Silicon de uma configuração NVIDIA com offloading',
              a: 'O layer offloading no NVIDIA cria um gargalo de largura de banda de memória entre VRAM e RAM do sistema. RTX 4090 com offloading produz 10-18 tok/s vs 20-30 tok/s no M5 Max. Para velocidade equivalente, o Apple Silicon é a melhor escolha de consumo. Para fluxos de trabalho CUDA (ajuste fino, kernels personalizados), o NVIDIA é necessário.',
            },
            {
              q: 'Rodar Q4_K_M no DGX Spark em vez de Q8_0',
              a: 'O DGX Spark tem 128 GB -- suficiente para Q8_0 (70 GB). Usar Q4_K_M desperdiça qualidade disponível. Em qualquer máquina com 80 GB ou mais, rode Q8_0 para modelos 70B.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leitura relacionada',
          items: [
            '[Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) -- tabela completa de GPU e RAM por tamanho de modelo, incluindo requisitos de hardware para 70B',
            '[Melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) -- rankings de benchmarks para ambos os modelos 70B e alternativas intermediárias com menos de 40 GB de RAM',
            '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- configuração completa incluindo layer offloading para GPUs NVIDIA',
            '[Quantização de LLM explicada](/pt/local-llms/llm-quantization-explained) -- entenda Q4_K_M vs Q8_0 e por que Q8_0 é a escolha certa em máquinas de 128 GB',
            '[PC para LLM local por menos de US$ 1.000](/pt/local-llms/local-llm-pc-build-1000) -- guia de hardware econômico para modelos 7B-13B quando o hardware para 70B está fora do orçamento',
            '[Qwen vs Llama vs Mistral](/pt/local-llms/qwen-vs-llama-vs-mistral) -- comparação detalhada de benchmarks de ambos os modelos 70B em cada categoria de tarefa',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes sobre rodar modelos 70B em hardware de consumo',
          faqs: [
            {
              q: 'Qual é o hardware mais barato que pode rodar um modelo 70B de forma utilizável?',
              a: 'Em abril de 2026, um Mac Studio M2 Ultra usado (64 GB de memória unificada) por ~US$ 2.000 é o caminho mais econômico para inferência 70B a 25+ tok/s. Uma máquina nova equivalente seria o MacBook Pro M5 Max de 64 GB (~US$ 3.500). Um desktop com NVIDIA RTX 4090 (24 GB VRAM + 32 GB RAM) custa ~US$ 3.000-4.000 no total, mas produz inferência mais lenta devido ao layer offloading.',
            },
            {
              q: 'Posso rodar um modelo 70B em duas GPUs?',
              a: 'Sim -- llama.cpp e Ollama suportam inferência multi-GPU em hardware NVIDIA. Duas RTX 4090 (48 GB de VRAM total) cabem um modelo 70B em Q4_K_M inteiramente na VRAM. O Ollama gerencia multi-GPU automaticamente quando várias GPUs estão presentes. O paralelismo de tensor no llama.cpp (`--tensor-split`) controla como as camadas são distribuídas.',
            },
            {
              q: 'Como a qualidade local 70B se compara ao GPT-5.5?',
              a: 'Nos benchmarks MMLU e HumanEval, Llama 3.3 70B (82%, 88%) e Qwen3 72B (84%, 87%) igualam ou superam ligeiramente as pontuações do GPT-4 (2023). GPT-5.5 (2024) pontua mais alto em tarefas de raciocínio intensivo. Para seguimento geral de instruções, resumo e geração de código, os modelos locais 70B são competitivos com o GPT-5.5 na maioria das tarefas.',
            },
            {
              q: 'O Ollama suporta rodar modelos 70B automaticamente?',
              a: 'Sim. Rodar `ollama run llama3.3:70b` baixa e executa o modelo com layer offloading automático de GPU. O Ollama detecta a VRAM disponível e a RAM do sistema, faz offloading de quantas camadas for possível para a GPU e roda o restante na CPU. Nenhuma configuração manual é necessária para uso básico.',
            },
            {
              q: 'Quanto de eletricidade o rodar de um modelo 70B consome?',
              a: 'Um Mac Studio M2 Ultra rodando inferência 70B consome aproximadamente 30-50 W. Um desktop NVIDIA RTX 4090 sob carga consome 350-450 W. A R$ 0,75/kWh (tarifa média brasileira), a inferência 70B contínua em uma RTX 4090 custa aproximadamente R$ 0,26-0,34 por hora. O Apple Silicon é 7-10× mais eficiente energeticamente para essa carga de trabalho.',
            },
            {
              q: 'Modelos 70B valem a pena em comparação com modelos 13B para tarefas do dia a dia?',
              a: 'Para raciocínio complexo, análise de documentos longos e escrita refinada, sim -- a diferença de qualidade é perceptível. Para resumo simples, perguntas e respostas e classificação, um modelo de 13B ou até 7B produz saída praticamente idêntica. Rode ambos no seu caso de uso específico com o [PromptQuorum](/) para quantificar a diferença de qualidade antes de investir em hardware para 70B.',
            },
            {
              q: 'O que é o NVIDIA DGX Spark e vale a pena para inferência 70B?',
              a: 'O DGX Spark (US$ 3.999) é o computador de IA compacto de mesa da NVIDIA com 128 GB de memória unificada. Roda modelos 70B em Q8_0 (qualidade quase sem perda) sem restrições de quantização. Velocidade: 18-28 tok/s. Comparado a um Mac Studio M2 Ultra (~US$ 2.000 recondicionado, 64 GB): o DGX Spark custa ~US$ 2.000 a mais por inferência de maior qualidade e suporte CUDA. Para inferência 70B pura, o Mac Studio é mais econômico. Para fluxos de trabalho CUDA (ajuste fino, kernels personalizados), o DGX Spark é melhor.',
            },
            {
              q: 'Posso fazer fine-tuning de um modelo 70B em hardware de consumo?',
              a: 'O fine-tuning completo requer aproximadamente 3× a memória de inferência para ajuste LoRA (~120-130 GB de VRAM). Isso supera todo o hardware de consumo, exceto o DGX Spark (128 GB -- apenas viável para runs pequenos de LoRA com quantização de 4 bits). Para fine-tuning de 70B, provedores de GPU na nuvem (RunPod, Lambda Labs, Vast.ai) são mais práticos. O hardware de consumo lida com fine-tuning de 7B-13B de forma confiável.',
            },
            {
              q: 'Qual é a melhor quantização para 70B no Apple Silicon?',
              a: 'Em um Mac de 64 GB (M5 Max ou M2 Ultra): Q4_K_M (~40 GB) deixa 24 GB para o SO -- confortável. Q5_K_M (~50 GB) deixa 14 GB -- apertado, mas viável. Q8_0 (~70 GB) excede 64 GB -- apenas viável em configurações de 96 GB ou 128 GB. Em um Mac de 128 GB: Q8_0 é recomendado para qualidade quase sem perda sem penalidade de velocidade.',
            },
            {
              q: 'O Ollama escolhe automaticamente a melhor quantização?',
              a: 'Não. `ollama run llama3.3:70b` baixa o Q4_K_M padrão. Especifique explicitamente para melhor qualidade: `ollama run llama3.3:70b:q5_k_m` ou `ollama run llama3.3:70b:q8_0`. Verifique a memória disponível com `ollama ps` após carregar -- se o modelo couber confortavelmente, atualize para o próximo nível de quantização.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            'Documentação de GPU Offloading do llama.cpp -- github.com/ggerganov/llama.cpp/blob/master/docs/backend/CUDA.md',
            'Biblioteca de modelos do Ollama -- ollama.com/library/llama3.3',
            'Benchmarks de inferência Apple M5 Max -- github.com/ggerganov/llama.cpp/discussions (thread de benchmarks da comunidade)',
            'Meta Llama 3.3 Model Card -- huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
            'NVIDIA DGX Spark -- nvidia.com/en-us/products/workstations/dgx-spark/',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Como rodar LLMs de 70B em hardware de consumo 2026: RAM e GPU',
        'description': 'Rode Llama 3.3 e Qwen3 70B localmente: requisitos de RAM, NVIDIA vs Apple Silicon, layer offloading, benchmarks. Guia de hardware completo -- abril 2026.',
        'url': 'https://www.promptquorum.com/pt/local-llms/70b-models-consumer-hardware',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-04',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      },
    },
    de: {
  theme: 'Beste Modelle',
  title: 'So führst du 70B Local LLM Modelle auf Consumer Hardware 2026 aus',
  seoTitle: '70B Modelle auf Consumer-Hardware 2026: RAM & GPU',
  intro: 'Ein 70B Parameter Modell lokal auszuführen benötigt 40-48 GB RAM bei Q4_K_M Quantisierung. Dies ist erreichbar auf: Apple Silicon Macs mit 64 GB unified memory, Workstations mit 64 GB DDR5, oder Maschinen, die eine 24 GB NVIDIA GPU mit 32 GB System RAM kombinieren, unter Verwendung von Layer Offloading. Ab April 2026 sind Llama 3.3 70B und Qwen3 72B die beiden primären 70B Modelle verfügbar.',
  metaDescription: 'Betreibe Llama 3.3 und Qwen3 70B lokal: RAM-Anforderungen, NVIDIA vs Apple Silicon, Layer-Offloading, Benchmarks. Kompletter Hardware-Leitfaden -- April 2026.',
  publishDate: '2026-04-04',
  readTime: '9 Min. Lesezeit',
  educationalLevel: 'Intermediate',
  primaryTerm: '70B lokales LLM Consumer Hardware',
  toc: [
    { label: 'Zusammenfassung', anchor: '#key-takeaways' },
    { label: 'Welche Hardware kann ein 70B Modell ausführen?', anchor: '#what-hardware-can-run-70b' },
    { label: 'RAM-Anforderungen nach Quantisierung', anchor: '#ram-requirements-by-quantization' },
    { label: 'Apple Silicon: beste Consumer Option für 70B', anchor: '#apple-silicon' },
    { label: 'NVIDIA GPU + Layer Offloading', anchor: '#nvidia-gpu-layer-offloading' },
    { label: 'CPU-only 70B Inferenz: Ist es praktisch?', anchor: '#cpu-only-70b' },
    { label: 'Welches 70B Modell solltest du ausführen?', anchor: '#which-70b-model' },
    { label: 'Häufige Fehler beim Ausführen von 70B Modellen', anchor: '#common-mistakes' },
    { label: 'Häufig gestellte Fragen', anchor: '#common-questions' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': 'So führst du 70B Local LLM Modelle auf Consumer Hardware 2026 aus',
    'description': '70B Local LLMs auf Consumer Hardware ausführen: RAM-Anforderungen, GPU-Optionen, Layer Offloading und Quantisierung. Was Du für Llama 3.3 benötigst -- kostenlos April 2026.',
    'url': 'https://www.promptquorum.com/de/local-llms/70b-models-consumer-hardware',
    'datePublished': '2026-04-04',
    'author': { '@type': 'Person', 'name': 'Hans Kuepper' },
    'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
    'about': [
      { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
      { '@type': 'Thing', 'name': 'Qwen3 72B' },
      { '@type': 'Thing', 'name': 'Q4_K_M Quantisierung' },
      { '@type': 'Thing', 'name': 'Layer Offloading' },
      { '@type': 'Thing', 'name': 'NVIDIA GPU' },
      { '@type': 'Thing', 'name': 'Apple Silicon' },
    ],
    'mentions': [
      { '@type': 'SoftwareApplication', 'name': 'Ollama' },
      { '@type': 'SoftwareApplication', 'name': 'llama.cpp' },
    ],
    'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': 'So führst du 70B Modelle auf Consumer Hardware aus',
    'step': [
      { '@type': 'HowToStep', 'position': 1, 'name': 'Überprüfe deine Hardware-Anforderungen', 'text': 'Bestimme, ob deine Hardware 40-48 GB RAM insgesamt bereitstellen kann. Apple Silicon Macs mit 64 GB, NVIDIA RTX 4090 mit 32 GB System RAM oder CPU-only Systeme mit 64 GB sind alle machbar.' },
      { '@type': 'HowToStep', 'position': 2, 'name': 'Wähle dein 70B Modell', 'text': 'Entscheide zwischen Llama 3.3 70B für Englisch oder Qwen3 72B für Multilingual und Coding.' },
      { '@type': 'HowToStep', 'position': 3, 'name': 'Installiere Ollama oder llama.cpp', 'text': 'Lade Ollama von ollama.com herunter oder kompiliere llama.cpp für Layer Offloading Support.' },
      { '@type': 'HowToStep', 'position': 4, 'name': 'Ziehe das Modell herunter', 'text': 'Führe `ollama pull llama3.3:70b` aus. Dieser Download benötigt 30-40 GB Speicherplatz und 10-30 Minuten.' },
      { '@type': 'HowToStep', 'position': 5, 'name': 'Starten und teste', 'text': 'Führe `ollama run llama3.3:70b` aus und überprüfe die Inferenzgeschwindigkeit und Ausgabebqualität.' },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Hardware-Optionen für 70B Modelle',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Apple M5 Max (64 GB unified)', 'description': 'Kann 70B ausführen -- vollständig auf GPU, 20-30 tok/sec' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Apple M2 Ultra (64 GB unified)', 'description': 'Kann 70B ausführen -- vollständig auf GPU, 25-35 tok/sec' },
      { '@type': 'ListItem', 'position': 3, 'name': 'NVIDIA RTX 4090 (24 GB) + 32 GB RAM', 'description': 'Kann 70B mit Offloading ausführen, 10-18 tok/sec' },
      { '@type': 'ListItem', 'position': 4, 'name': 'NVIDIA RTX 4080 (16 GB) + 32 GB RAM', 'description': 'Partielles Offloading möglich, 5-10 tok/sec' },
      { '@type': 'ListItem', 'position': 5, 'name': '64 GB RAM, nur CPU', 'description': 'Kann 70B ausführen, 1-3 tok/sec -- unpraktisch für interaktive Verwendung' },
    ],
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Was ist die billigste Hardware, auf der ein 70B Modell praktisch ausführbar ist?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Ab April 2026 ist ein gebrauchter Mac Studio M2 Ultra (64 GB unified memory) für etwa 2.000 € der günstigste Weg zu 70B Inferenz mit 25+ tok/sec. Ein neues äquivalentes Gerät wäre das M5 Max MacBook Pro 64 GB (etwa 3.500 €). Ein NVIDIA RTX 4090 Desktop-Setup (24 GB VRAM + 32 GB RAM) kostet etwa 3.000-4.000 € insgesamt, erzeugt aber langsamere Inferenz wegen Layer Offloading.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Kann ich ein 70B Modell auf zwei GPUs ausführen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Ja -- llama.cpp und Ollama unterstützen Multi-GPU Inferenz auf NVIDIA Hardware. Zwei RTX 4090s (48 GB insgesamt VRAM) passen ein Q4_K_M 70B Modell vollständig in VRAM. Ollama verwaltet Multi-GPU automatisch, wenn mehrere GPUs vorhanden sind. Tensor Parallelism in llama.cpp (`--tensor-split`) kontrolliert, wie Layers verteilt werden.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Wie vergleicht sich 70B lokale Qualität mit GPT-5.5?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Bei MMLU und HumanEval Benchmarks entspricht Llama 3.3 70B (82%, 88%) und Qwen3 72B (84%, 87%) oder übertrifft leicht GPT-4 (2023) Scores. GPT-5.5 (2024) schneidet höher bei reasoningintensiven Aufgaben ab. Für allgemeine Anweisung-Befolgung, Zusammenfassung und Code-Generierung sind 70B lokale Modelle bei den meisten Aufgaben konkurrenzfähig mit GPT-5.5.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Unterstützt Ollama die automatische Ausführung von 70B Modellen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Ja. Das Ausführen von `ollama run llama3.3:70b` lädt das Modell herunter und führt es mit automatischem GPU Layer Offloading aus. Ollama erkennt verfügbare VRAM und System RAM, verlagert so viele Layers wie möglich zur GPU und führt die Reste auf der CPU aus. Keine manuelle Konfiguration erforderlich für grundlegende Nutzung.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Wie viel Strom verbraucht die Ausführung eines 70B Modells?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Ein Mac Studio M2 Ultra, der 70B Inferenz ausführt, verbraucht etwa 30-50 W. Ein NVIDIA RTX 4090 Desktop unter Last verbraucht 350-450 W. Bei 0,15 € pro kWh kostet kontinuierliche 70B Inferenz auf einem RTX 4090 etwa 0,05-0,07 € pro Stunde. Apple Silicon ist 7-10× energieeffizienter für diesen Workload.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Lohnen sich 70B Modelle im Vergleich zu 13B Modellen für alltägliche Aufgaben?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Bei komplexem Reasoning, Analyse längerer Dokumente und nuanciertem Schreiben ja -- der Qualitätsunterschied ist spürbar. Bei einfacher Zusammenfassung, Fragen beantworten und Klassifizierung erzeugt ein 13B oder sogar 7B Modell fast identische Ausgaben. Führe beide auf deinen spezifischen Use-Case mit [PromptQuorum](/?lang=de) durch, um den Qualitätsunterschied zu quantifizieren, bevor du in 70B Hardware investierst.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Ist die Q4_K_M Quantisierung für 70B Modelle ausreichend?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Ja, Q4_K_M ist die Standard-Empfehlung für 70B Modelle bei Verbraucher-Hardware. Der Qualitätsverlust beträgt 1-3% bei MMLU Benchmarks im Vergleich zu FP16 und ist bei praktischen Aufgaben imperceptible. Q5_K_M und Q8_0 bieten bessere Qualität, benötigen aber erheblich mehr RAM und sind auf Consumer Hardware nicht praktisch.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Sollte ich 70B oder 34B Modelle auf meinem System laufen lassen?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Wenn du mindestens 48 GB RAM hast (dediziert für das Modell), wähle 70B -- der Qualitätssprung ist erheblich und rechtfertigt die zusätzliche Hardware-Anforderung. Mit 32-48 GB RAM ist ein 34B Modell eine praktischere Option mit noch respektabler Qualität (ähnlich GPT-4o mini). Teste beide mit [PromptQuorum](/?lang=de) auf deinen speziellen Aufgaben.',
        }
      },
      {
        '@type': 'Question',
        'name': 'DSGVO: Muss ich bei der Verwendung von lokalen 70B Modellen die DSGVO beachten?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Bei lokaler Inferenz werden keine Daten an externe Server übertragen, was lokale LLMs unter der DSGVO vorteilhaft macht. Sie sind jedoch kein automatischer DSGVO-Compliance-Garant. Unter Artikel 28 (Datenverarbeitervertrag) musst du dokumentieren, wie Eingaben verarbeitet werden und wie lange Sie verwahrt werden. Beachte die BSI-Grundschutz-Kataloge für Klassifikation sensibler Daten (Kundeninfo, Finanzakten, Patientenakten). Lokale Systeme können für Verarbeitung vertraulicher Unternehmensdaten vorteilhaft sein, benötigen aber für regulierte Sektoren (Finanzwesen, Gesundheitswesen, Recht) explizite Compliance-Dokumentation mit Datenschutz- und Sicherheitsauditoren.',
        }
      },
      {
        '@type': 'Question',
        'name': 'Ist ein 70B Modell für den deutschen Mittelstand geeignet?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Für KMU und Mittelstand-Unternehmen (50-500 Mitarbeiter) können lokale 70B Modelle strategisch sinnvoll sein. Sie ermöglichen Datenbeschaffenheit: keine Übertragung sensibler Geschäftsdaten an US-Cloud-Provider (Compliance mit BSI-Grundschutz). Typische Anwendungsfälle: Analyse von Kundenanfragen, Automatisierung von Dokumentation, interne Wissensdatenbank-Abfrage. Hardware-Kosten (Mac Studio oder RTX 4090 Workstation) von 2.000-4.000 € einmaliges Kapital amortisiert sich schnell bei größeren Teams. Empfehlung: Konsultiere mit Datenschutz- und IT-Sicherheitsberatern für Umsetzung unter DSGVO und BSI-Standard.',
        }
      },
    ],
  },
  sections: {
    tldr: {
      id: 'key-takeaways',

      isTldr: true,
      items: [
        'Q4_K_M Quantisierung: Llama 3.3 70B benötigt etwa 40 GB RAM; Qwen3 72B benötigt etwa 43 GB RAM.',
        '**Einfachste Consumer Hardware**: Apple Mac Studio M2 Ultra (64 GB unified) oder M5 Max MacBook Pro (64 GB) -- vollständige GPU Beschleunigung, kein Layer Offloading erforderlich.',
        '**NVIDIA Option**: RTX 4090 (24 GB VRAM) + 32 GB System RAM mit Layer Offloading in Ollama bewältigt die meisten 70B Modelle, obwohl 20-30% der Layers auf der CPU laufen.',
        '**CPU-only 70B**: möglich auf 64 GB RAM, erzeugt aber 1-3 tok/sec -- marginal nutzbar für Batch-Aufgaben, nicht für interaktiven Chat.',
        'Ab April 2026 entspricht ein lokal ausgeführtes 70B Modell der GPT-4 (2023) Qualität und ist der einzige verbraucherzugängliche Weg zu dieser Qualitätsstufe ohne Cloud-Kosten.',
      ],
    },
    whatHardware: {
      title: 'Welche Hardware kann ein 70B Local LLM tatsächlich ausführen?',
      content: [
        '**Ein 70B Modell bei Q4_K_M Quantisierung benötigt etwa 40-43 GB Speicher, der für die Inferenz-Engine zugänglich ist.** Dies kann von GPU VRAM, unified System Memory (Apple Silicon), System RAM oder einer Kombination über Layer Offloading stammen.',
      ],
      image: '/images/70b-hardware-comparison.svg',
      imageCaption: 'Hardware comparison: Apple Silicon M5 Max achieves 25-35 tok/sec with no offloading, while NVIDIA RTX 4090 with layer offloading reaches 10-18 tok/sec, and CPU-only 70B inference produces just 1-3 tok/sec.',
      rows: [
        { 'Hardware': 'Apple M5 Max (64 GB unified)', 'Kann 70B ausführen?': 'Ja -- vollständig GPU', 'Speed (70B Q4)': '20-30 tok/sec', 'Notizen': 'Beste Consumer Laptop Option' },
        { 'Hardware': 'Apple M2 Ultra (64 GB unified)', 'Kann 70B ausführen?': 'Ja -- vollständig GPU', 'Speed (70B Q4)': '25-35 tok/sec', 'Notizen': 'Mac Studio Basis-Config' },
        { 'Hardware': 'Apple M2 Ultra (192 GB unified)', 'Kann 70B ausführen?': 'Ja -- vollständig GPU', 'Speed (70B Q4)': '30-40 tok/sec', 'Notizen': 'Läuft Q8_0 mit Platz übrig' },
        { 'Hardware': 'NVIDIA RTX 4090 (24 GB) + 32 GB RAM', 'Kann 70B ausführen?': 'Ja -- mit Offload', 'Speed (70B Q4)': '10-18 tok/sec', 'Notizen': 'etwa 60% Layers auf GPU, etwa 40% auf CPU' },
        { 'Hardware': 'NVIDIA RTX 4080 (16 GB) + 32 GB RAM', 'Kann 70B ausführen?': 'Partielles Offload nur', 'Speed (70B Q4)': '5-10 tok/sec', 'Notizen': 'Nur etwa 35% Layers auf GPU' },
        { 'Hardware': '64 GB RAM, nur CPU', 'Kann 70B ausführen?': 'Ja -- nur CPU', 'Speed (70B Q4)': '1-3 tok/sec', 'Notizen': 'Unpraktisch für interaktive Verwendung' },
      ],
      columns: ['Hardware', 'Kann 70B ausführen?', 'Speed (70B Q4)', 'Notizen'],
    },
    ramByQuant: {
      title: 'Wie viel RAM benötigt ein 70B Modell bei jedem Quantisierungs-Level?',
      image: '/images/70b-quantization-tradeoff.svg',
      imageCaption: 'Quantization trade-off curve: Q4_K_M (recommended) requires 40-43 GB RAM with only 1-3% quality loss versus FP16, balancing practicality and performance for consumer hardware.',
      rows: [
        { 'Quantisierung': 'FP16 (vollständige Präzision)', 'RAM erforderlich': 'etwa 140 GB', 'Qualität': 'Referenz-Qualität', 'Praktisch?': 'Nein -- nur Server' },
        { 'Quantisierung': 'Q8_0', 'RAM erforderlich': 'etwa 70 GB', 'Qualität': 'Nahezu verlustfrei', 'Praktisch?': 'Nur Mac Ultra 192 GB' },
        { 'Quantisierung': 'Q5_K_M', 'RAM erforderlich': 'etwa 50 GB', 'Qualität': 'Minimaler Verlust', 'Praktisch?': 'Mac Ultra 64 GB, eng' },
        { 'Quantisierung': 'Q4_K_M', 'RAM erforderlich': 'etwa 40-43 GB', 'Qualität': 'Niedriger Verlust -- empfohlen', 'Praktisch?': 'Ja -- praktischste Option' },
        { 'Quantisierung': 'Q3_K_S', 'RAM erforderlich': 'etwa 30 GB', 'Qualität': 'Moderater Verlust', 'Praktisch?': 'Ja -- 32 GB Maschinen möglich' },
        { 'Quantisierung': 'Q2_K', 'RAM erforderlich': 'etwa 22 GB', 'Qualität': 'Hoher Verlust', 'Praktisch?': 'Nicht empfohlen' },
      ],
      columns: ['Quantisierung', 'RAM erforderlich', 'Qualität', 'Praktisch?'],
    },
    appleSilicon: {
      title: 'Warum ist Apple Silicon die beste Consumer Option für 70B Modelle?',
      content: [
        '**Apple Silicon nutzt unified memory -- die CPU und GPU teilen denselben physikalischen Speicherpool.** Ein M5 Max MacBook Pro mit 64 GB unified memory kann ein 70B Modell bei Q4_K_M vollständig auf der GPU ausführen, erreicht 20-30 tok/sec ohne Layer Offloading Overhead.',
        'Bei NVIDIA Hardware sind GPU und System RAM getrennt. Eine 24 GB VRAM GPU kann nur etwa 60% eines Q4_K_M 70B Modells halten; die verbleibenden Layers laufen auf der CPU, schaffen einen Memory Bandwidth Engpass, der die Geschwindigkeit auf 10-18 tok/sec reduziert.',
        'Ab April 2026 ist der Mac Studio M2 Ultra (64 GB, etwa 2.000 € gebraucht) der kostengünstigste Weg zu 70B lokaler Inferenz mit praktischer Geschwindigkeit. Ein neuer M5 Max MacBook Pro 64 GB kostet etwa 3.500 €.',
      ],
    },
    nvidiaOffload: {
      title: 'Wie funktioniert NVIDIA GPU + Layer Offloading für 70B Modelle?',
      content: 'Ollama und llama.cpp unterstützen das Aufteilen eines Modells über GPU VRAM und System RAM. Layers geladen in VRAM laufen mit GPU-Geschwindigkeit; Layers in System RAM laufen mit CPU-Geschwindigkeit:',
      image: '/images/70b-layer-offloading.svg',
      imageCaption: 'Layer offloading architecture: RTX 4090 GPU (24 GB) holds ~60% of layers (1-48) at 10-18 tok/sec, while system RAM (32 GB) holds remaining layers (49-80) running at CPU speed (2-5 tok/sec), achieving 10-18 tok/sec overall.',
      codeBlock: '# Ollama verlagert automatisch so viele Layers wie möglich in VRAM\n# Um Layers explizit zu kontrollieren:\nollama run llama3.3:70b\n\n# Überprüfe wie viele Layers auf GPU sind:\nollama ps\n# Ausgabe zeigt: llama3.3:70b  ...  23/80 GPU layers\n\n# Für llama.cpp direkt:\n./llama-cli -m llama-3.3-70b-q4_k_m.gguf \\\n  -ngl 40   # Anzahl der zu GPU zu verlagernden Layers\n  --ctx-size 4096',
      codeLanguage: 'bash',
    },
    cpuOnly: {
      title: 'Ist CPU-Only 70B Inferenz praktisch?',
      content: [
        '**Ein 70B Modell bei Q4_K_M auf einer hochkern-CPU (AMD Threadripper, Intel Xeon) mit 64 GB RAM erzeugt 1-3 tokens/sec.** Bei 2 tok/sec dauert eine 200-Wort-Antwort etwa 75 Sekunden.',
        'Dies ist unpraktisch für interaktiven Chat, aber brauchbar für Batch-Verarbeitung -- Zusammenfassung von Dokumenten, Generierung von Berichten oder Verarbeitung von Dateien über Nacht. Für interaktive Verwendung ist die Minimum praktische Hardware eine Maschine, die 8+ tok/sec erreichen kann, was entweder Apple Silicon oder NVIDIA GPU Offloading benötigt.',
      ],
    },
    which70b: {
      title: 'Welches 70B Modell solltest du lokal ausführen?',
      rows: [
        { 'Modell': 'Llama 3.3 70B', 'MMLU': '82%', 'HumanEval': '88%', 'Beste für': 'Allgemeine Englisch Aufgaben, Anweisung-Befolgung' },
        { 'Modell': 'Qwen3 72B', 'MMLU': '84%', 'HumanEval': '87%', 'Beste für': 'Coding, Mehrsprachigkeit (29 Sprachen)' },
        { 'Modell': 'Mistral Large 123B', 'MMLU': '84%', 'HumanEval': '80%', 'Beste für': 'Benötigt 80+ GB -- nur Workstation' },
      ],
      columns: ['Modell', 'MMLU', 'HumanEval', 'Beste für'],
    },
    commonMistakes: {
      title: 'Was sind die häufigen Fehler beim Ausführen von 70B Modellen auf Consumer Hardware?',
      items: [
        '**Unterschätzung des VRAM-Bedarfs**: Eine GPU mit weniger als 24 GB VRAM ist zu klein. Eine RTX 4070 Ti (12 GB VRAM) kann nur etwa 30% eines Q4_K_M 70B Modells in VRAM halten. Der Rest lauft auf der CPU, was zu 3-5 tok/sec führt -- kaum schneller als reine CPU-Inferenz.',
        '**Layer Offloading nicht aktiviert**: Standardmäßig fällt Ollama zur reinen CPU-Inferenz zurück, wenn ein 70B Modell nicht vollständig in VRAM passt. Setze GPU Layers explizit mit `OLLAMA_GPU_LAYERS=999` -- Ollama verlagert dann so viele Layers wie möglich zu GPU, was erheblich schneller ist.',
        '**Falsche Quantisierungs-Auswahl**: Bei Maschinen mit 32-40 GB RAM kann Q4_K_M für ein 70B Modell zu eng sein (zu wenig Headroom für das OS). Q3_K_S reduziert RAM auf etwa 30 GB mit moderatem Qualitätsverlust. Führe `ollama ps` aus -- wenn Du Swap-Nutzung siehst, wechsle zu Q3_K_S.',
      ],
    },
    faqSection: {
      title: 'Häufig gestellte Fragen zu 70B Modellen auf Consumer Hardware',
      faqs: [
        {
          q: 'Was ist die billigste Hardware, auf der ein 70B Modell praktisch brauchbar ist?',
          a: 'Ab April 2026 ist ein gebrauchter Mac Studio M2 Ultra (64 GB unified memory) für etwa 2.000 € der günstigste Weg zu 70B Inferenz mit 25+ tok/sec. Ein neues äquivalentes Gerät wäre das M5 Max MacBook Pro 64 GB (etwa 3.500 €). Ein NVIDIA RTX 4090 Desktop-Setup (24 GB VRAM + 32 GB RAM) kostet etwa 3.000-4.000 € insgesamt, erzeugt aber wegen Layer Offloading langsamere Inferenz.',
        },
        {
          q: 'Kann ich ein 70B Modell auf zwei GPUs ausführen?',
          a: 'Ja -- llama.cpp und Ollama unterstützen Multi-GPU Inferenz auf NVIDIA Hardware. Zwei RTX 4090s (48 GB insgesamt VRAM) passen ein Q4_K_M 70B Modell vollständig in VRAM. Ollama verwaltet Multi-GPU automatisch, wenn mehrere GPUs vorhanden sind. Tensor Parallelism in llama.cpp (`--tensor-split`) kontrolliert, wie Layers verteilt werden.',
        },
        {
          q: 'Wie vergleicht sich 70B lokale Qualität mit GPT-5.5?',
          a: 'Bei MMLU und HumanEval Benchmarks entspricht Llama 3.3 70B (82%, 88%) und Qwen3 72B (84%, 87%) oder übertrifft leicht GPT-4 (2023) Scores. GPT-5.5 (2024) schneidet höher bei reasoning-intensiven Aufgaben ab. Für allgemeine Anweisung-Befolgung, Zusammenfassung und Code-Generierung sind 70B lokale Modelle bei den meisten Aufgaben konkurrenzfähig mit GPT-5.5.',
        },
        {
          q: 'Unterstützt Ollama die automatische Ausführung von 70B Modellen?',
          a: 'Ja. Das Ausführen von `ollama run llama3.3:70b` lädt das Modell herunter und führt es mit automatischem GPU Layer Offloading aus. Ollama erkennt verfügbare VRAM und System RAM, verlagert so viele Layers wie möglich zur GPU und führt die Reste auf der CPU aus. Keine manuelle Konfiguration erforderlich für grundlegende Nutzung.',
        },
        {
          q: 'Wie viel Strom verbraucht die Ausführung eines 70B Modells?',
          a: 'Ein Mac Studio M2 Ultra, der 70B Inferenz ausführt, verbraucht etwa 30-50 W. Ein NVIDIA RTX 4090 Desktop unter Last verbraucht 350-450 W. Bei 0,15 € pro kWh kostet kontinuierliche 70B Inferenz auf einem RTX 4090 etwa 0,05-0,07 € pro Stunde. Apple Silicon ist 7-10× energieeffizienter für diesen Workload.',
        },
        {
          q: 'Lohnen sich 70B Modelle im Vergleich zu 13B Modellen für alltägliche Aufgaben?',
          a: 'Bei komplexem Reasoning, Analyse längerer Dokumente und nuanciertem Schreiben ja -- der Qualitätsunterschied ist spürbar. Bei einfacher Zusammenfassung, Fragen beantworten und Klassifizierung erzeugt ein 13B oder sogar 7B Modell fast identische Ausgaben. Führe beide auf deinen spezifischen Use-Case mit [PromptQuorum](/?lang=de) durch, um den Qualitätsunterschied zu quantifizieren, bevor du in 70B Hardware investierst.',
        },
        {
          q: 'Ist die Q4_K_M Quantisierung für 70B Modelle ausreichend?',
          a: 'Ja, Q4_K_M ist die Standard-Empfehlung für 70B Modelle bei Verbraucher-Hardware. Der Qualitätsverlust beträgt 1-3% bei MMLU Benchmarks im Vergleich zu FP16 und ist bei praktischen Aufgaben imperceptible. Q5_K_M und Q8_0 bieten bessere Qualität, benötigen aber erheblich mehr RAM und sind auf Consumer Hardware nicht praktisch.',
        },
        {
          q: 'Sollte ich 70B oder 34B Modelle auf meinem System laufen lassen?',
          a: 'Wenn du mindestens 48 GB RAM hast (dediziert für das Modell), wähle 70B -- der Qualitätssprung ist erheblich und rechtfertigt die zusätzliche Hardware-Anforderung. Mit 32-48 GB RAM ist ein 34B Modell eine praktischere Option mit noch respektabler Qualität (ähnlich GPT-4o mini). Teste beide mit [PromptQuorum](/?lang=de) auf deinen speziellen Aufgaben.',
        },
        {
          q: 'DSGVO: Muss ich bei der Verwendung von lokalen 70B Modellen die DSGVO beachten?',
          a: 'Bei lokaler Inferenz werden keine Daten an externe Server übertragen, was lokale LLMs unter der DSGVO vorteilhaft macht. Sie sind jedoch kein automatischer DSGVO-Compliance-Garant. Unter Artikel 28 (Datenverarbeitervertrag) musst du dokumentieren, wie Eingaben verarbeitet werden und wie lange Sie verwahrt werden. Beachte die BSI-Grundschutz-Kataloge für Klassifikation sensibler Daten (Kundeninfo, Finanzakten, Patientenakten). Lokale Systeme können für Verarbeitung vertraulicher Unternehmensdaten vorteilhaft sein, benötigen aber für regulierte Sektoren (Finanzwesen, Gesundheitswesen, Recht) explizite Compliance-Dokumentation mit Datenschutz- und Sicherheitsauditoren.',
        },
        {
          q: 'Ist ein 70B Modell für den deutschen Mittelstand geeignet?',
          a: 'Für KMU und Mittelstand-Unternehmen (50-500 Mitarbeiter) können lokale 70B Modelle strategisch sinnvoll sein. Sie ermöglichen Datenbeschaffenheit: keine Übertragung sensibler Geschäftsdaten an US-Cloud-Provider (Compliance mit BSI-Grundschutz). Typische Anwendungsfälle: Analyse von Kundenanfragen, Automatisierung von Dokumentation, interne Wissensdatenbank-Abfrage. Hardware-Kosten (Mac Studio oder RTX 4090 Workstation) von 2.000-4.000 € einmaliges Kapital amortisiert sich schnell bei größeren Teams. Empfehlung: Konsultiere mit Datenschutz- und IT-Sicherheitsberatern für Umsetzung unter DSGVO und BSI-Standard.',
        },
      ],
    },
    sources: {
      title: 'Quellen',
      items: [
        'llama.cpp GPU Offloading Dokumentation -- github.com/ggerganov/llama.cpp/blob/master/docs/backend/CUDA.md',
        'Ollama Modellbibliothek -- ollama.com/library/llama3.3',
        'Apple M5 Max Inferenz Benchmarks -- github.com/ggerganov/llama.cpp/discussions (Community Benchmarks Thread)',
        'Meta Llama 3.3 Modell-Karte -- huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
      ],
    },
  },
}
,
    fr: {
  theme: 'Meilleurs modèles',
  title: 'Comment exécuter un modèle LLM 70B local sur du matériel grand public en 2026',
  seoTitle: 'Modèles 70B sur Matériel Grand Public 2026: Guide',
  intro: 'Exécuter un modèle 70B localement nécessite 40-48 Go de RAM en quantification Q4_K_M. C\'est réalisable sur : les Mac Apple Silicon avec 64 Go de mémoire unifiée, les stations de travail avec 64 Go DDR5, ou les machines combinant un GPU NVIDIA 24 Go avec 32 Go de RAM système via déchargement de couches. En avril 2026, Llama 3.3 70B et Qwen3 72B sont les deux principaux modèles 70B disponibles.',
  metaDescription: 'Exécutez Llama 3.3 et Qwen3 70B localement : exigences RAM, NVIDIA vs Apple Silicon, déchargement de couches, benchmarks. Guide matériel complet -- avril 2026.',
  publishDate: '2026-04-04',
  readTime: '8 min de lecture',
  educationalLevel: 'Intermediate',
  primaryTerm: 'LLM 70B matériel grand public',
  toc: [
    { label: 'Points clés', anchor: '#key-takeaways' },
    { label: 'Quel matériel peut exécuter un modèle 70B ?', anchor: '#what-hardware-can-run-70b' },
    { label: 'Exigences RAM par quantification', anchor: '#ram-requirements-by-quantization' },
    { label: 'Apple Silicon : la meilleure option grand public pour 70B', anchor: '#apple-silicon' },
    { label: 'GPU NVIDIA + déchargement de couches', anchor: '#nvidia-gpu-layer-offloading' },
    { label: 'Inférence 70B sur CPU uniquement : est-ce pratique ?', anchor: '#cpu-only-70b' },
    { label: 'Quel modèle 70B devriez-vous exécuter ?', anchor: '#which-70b-model' },
    { label: 'Erreurs courantes avec les modèles 70B', anchor: '#common-mistakes' },
    { label: 'Questions fréquentes', anchor: '#common-questions' },
  ],
  sections: {
    tldr: {
      id: 'key-takeaways',

      isTldr: true,
      items: [
        'Quantification Q4_K_M : Llama 3.3 70B nécessite ~40 Go RAM ; Qwen3 72B nécessite ~43 Go RAM.',
        '**Matériel grand public le plus facile** : Mac Studio M2 Ultra (64 Go unifiée) ou MacBook Pro M5 Max 64 Go -- accélération GPU complète, pas de déchargement nécessaire.',
        '**Option NVIDIA** : RTX 4090 (24 Go VRAM) + 32 Go RAM système avec déchargement de couches dans Ollama. Environ 20-30 % des couches s\'exécutent sur CPU.',
        '**70B sur CPU uniquement** : possible sur 64 Go RAM, mais produit 1-3 tok/sec -- à peine utilisable pour les tâches batch, pas pour le chat interactif.',
        'Depuis avril 2026, un modèle 70B local égale la qualité de GPT-4 (2023) et est le seul chemin grand public vers ce niveau sans coûts cloud.',
      ],
    },
    whatHardware: {
      title: 'Quel matériel peut réellement exécuter un modèle 70B ?',
      content: [
        '**Un modèle 70B en quantification Q4_K_M nécessite environ 40-43 Go de mémoire accessible au moteur d\'inférence.** Cela peut provenir de VRAM GPU, de mémoire système unifiée (Apple Silicon), de RAM système, ou d\'une combinaison via déchargement de couches.',
      ],
      image: '/images/70b-hardware-comparison.svg',
      imageCaption: 'Hardware comparison: Apple Silicon M5 Max achieves 25-35 tok/sec with no offloading, while NVIDIA RTX 4090 with layer offloading reaches 10-18 tok/sec, and CPU-only 70B inference produces just 1-3 tok/sec.',
      rows: [
        { 'Matériel': 'Apple M5 Max (64 Go unifiée)', 'Peut exécuter 70B ?': 'Oui -- GPU complet', 'Vitesse (70B Q4)': '20-30 tok/sec', 'Notes': 'Meilleure option laptop grand public' },
        { 'Matériel': 'Apple M2 Ultra (64 Go unifiée)', 'Peut exécuter 70B ?': 'Oui -- GPU complet', 'Vitesse (70B Q4)': '25-35 tok/sec', 'Notes': 'Configuration de base Mac Studio' },
        { 'Matériel': 'Apple M2 Ultra (192 Go unifiée)', 'Peut exécuter 70B ?': 'Oui -- GPU complet', 'Vitesse (70B Q4)': '30-40 tok/sec', 'Notes': 'Exécute Q8_0 avec marge' },
        { 'Matériel': 'NVIDIA RTX 4090 (24 Go) + 32 Go RAM', 'Peut exécuter 70B ?': 'Oui -- avec déchargement', 'Vitesse (70B Q4)': '10-18 tok/sec', 'Notes': '~60% couches GPU, ~40% CPU' },
        { 'Matériel': 'NVIDIA RTX 4080 (16 Go) + 32 Go RAM', 'Peut exécuter 70B ?': 'Déchargement partiel uniquement', 'Vitesse (70B Q4)': '5-10 tok/sec', 'Notes': 'Seulement ~35% couches GPU' },
        { 'Matériel': '64 Go RAM, CPU uniquement', 'Peut exécuter 70B ?': 'Oui -- CPU uniquement', 'Vitesse (70B Q4)': '1-3 tok/sec', 'Notes': 'Impratique pour usage interactif' },
      ],
      columns: ['Matériel', 'Peut exécuter 70B ?', 'Vitesse (70B Q4)', 'Notes'],
    },
    ramByQuant: {
      title: 'Combien de RAM un modèle 70B nécessite-t-il à chaque niveau de quantification ?',
      image: '/images/70b-quantization-tradeoff.svg',
      imageCaption: 'Quantization trade-off curve: Q4_K_M (recommended) requires 40-43 GB RAM with only 1-3% quality loss versus FP16, balancing practicality and performance for consumer hardware.',
      rows: [
        { 'Quantification': 'FP16 (précision complète)', 'RAM requise': '~140 Go', 'Qualité': 'Qualité de référence', 'Pratique ?': 'Non -- serveurs uniquement' },
        { 'Quantification': 'Q8_0', 'RAM requise': '~70 Go', 'Qualité': 'Quasi-sans perte', 'Pratique ?': 'Mac Ultra 192 Go uniquement' },
        { 'Quantification': 'Q5_K_M', 'RAM requise': '~50 Go', 'Qualité': 'Perte minimale', 'Pratique ?': 'Mac Ultra 64 Go, serré' },
        { 'Quantification': 'Q4_K_M', 'RAM requise': '~40-43 Go', 'Qualité': 'Perte faible -- recommandé', 'Pratique ?': 'Oui -- option la plus viable' },
        { 'Quantification': 'Q3_K_S', 'RAM requise': '~30 Go', 'Qualité': 'Perte modérée', 'Pratique ?': 'Oui -- machines 32 Go possibles' },
        { 'Quantification': 'Q2_K', 'RAM requise': '~22 Go', 'Qualité': 'Perte élevée', 'Pratique ?': 'Non recommandé' },
      ],
      columns: ['Quantification', 'RAM requise', 'Qualité', 'Pratique ?'],
    },
    appleSilicon: {
      title: 'Pourquoi Apple Silicon est-il la meilleure option grand public pour les modèles 70B ?',
      content: [
        '**Apple Silicon utilise la mémoire unifiée -- le CPU et le GPU partagent le même pool mémoire physique.** Un MacBook Pro M5 Max avec 64 Go de mémoire unifiée peut exécuter un modèle 70B en Q4_K_M entièrement sur GPU, atteignant 20-30 tok/sec sans surcharge de déchargement de couches.',
        'Sur le matériel NVIDIA, le GPU et la RAM système sont séparés. Un GPU VRAM 24 Go ne peut contenir que ~60 % d\'un modèle 70B Q4_K_M ; les couches restantes s\'exécutent sur CPU, créant un goulot d\'étranglement de bande passante mémoire qui réduit la vitesse à 10-18 tok/sec.',
        'En avril 2026, le Mac Studio M2 Ultra (64 Go, ~2 000 euros d\'occasion) est le chemin le plus rentable vers une inférence 70B locale à vitesse utilisable. Un nouveau MacBook Pro M5 Max 64 Go coûte environ 3 500 euros.',
      ],
    },
    nvidiaOffload: {
      title: 'Comment fonctionne le déchargement de couches NVIDIA GPU + pour les modèles 70B ?',
      content: 'Ollama et llama.cpp supportent la division d\'un modèle entre VRAM GPU et RAM système. Les couches chargées en VRAM s\'exécutent à la vitesse GPU ; les couches en RAM système s\'exécutent à la vitesse CPU :',
      image: '/images/70b-layer-offloading.svg',
      imageCaption: 'Layer offloading architecture: RTX 4090 GPU (24 GB) holds ~60% of layers (1-48) at 10-18 tok/sec, while system RAM (32 GB) holds remaining layers (49-80) running at CPU speed (2-5 tok/sec), achieving 10-18 tok/sec overall.',
      codeBlock: '# Ollama décharge automatiquement autant de couches que possible en VRAM\n# Pour contrôler explicitement les couches :\nollama run llama3.3:70b\n\n# Vérifiez combien de couches sont sur GPU :\nollama ps\n# Affiche : llama3.3:70b  ...  23/80 couches GPU\n\n# Pour llama.cpp directement :\n./llama-cli -m llama-3.3-70b-q4_k_m.gguf \\\n  -ngl 40   # nombre de couches à décharger sur GPU\n  --ctx-size 4096',
      codeLanguage: 'bash',
    },
    cpuOnly: {
      title: 'L\'inférence 70B sur CPU uniquement est-elle pratique ?',
      content: [
        '**Un modèle 70B en Q4_K_M sur un CPU multi-cœur (AMD Threadripper, Intel Xeon) avec 64 Go RAM produit 1-3 tokens/sec.** À 2 tok/sec, une réponse de 200 mots prend environ 75 secondes.',
        'C\'est impratique pour le chat interactif mais utilisable pour le traitement batch -- résumé de documents, génération de rapports, ou traitement de fichiers de nuit. Pour un usage interactif, le matériel minimum pratique est une machine capable de 8+ tok/sec, ce qui nécessite soit Apple Silicon soit un déchargement GPU NVIDIA.',
      ],
    },
    which70b: {
      title: 'Quel modèle 70B devriez-vous exécuter localement ?',
      rows: [
        { 'Modèle': 'Llama 3.3 70B', 'MMLU': '82 %', 'HumanEval': '88 %', 'Meilleur pour': 'Tâches anglais générales, suivi d\'instructions' },
        { 'Modèle': 'Qwen3 72B', 'MMLU': '84 %', 'HumanEval': '87 %', 'Meilleur pour': 'Codage, multilingue (29 langues)' },
        { 'Modèle': 'Mistral Large 123B', 'MMLU': '84 %', 'HumanEval': '80 %', 'Meilleur pour': 'Nécessite 80+ Go -- stations de travail uniquement' },
      ],
      columns: ['Modèle', 'MMLU', 'HumanEval', 'Meilleur pour'],
    },
    commonMistakes: {
      title: 'Quelles sont les erreurs courantes lors de l\'exécution de modèles 70B sur matériel grand public ?',
      faqs: [
        {
          q: 'Acheter un GPU avec moins de 24 Go VRAM et s\'attendre à une performance 70B complète',
          a: 'Un RTX 4070 Ti (12 Go VRAM) ne peut contenir que ~30 % d\'un modèle 70B Q4_K_M en VRAM. Les 70 % restants s\'exécutent sur CPU, résultant en 3-5 tok/sec -- à peine plus rapide que l\'inférence CPU uniquement. Pour les modèles 70B, 24 Go VRAM (RTX 4090) est le minimum pratique pour une accélération GPU utile. En dessous, envisagez d\'exécuter un modèle 34B à la place.',
        },
        {
          q: 'Ne pas utiliser le déchargement de couches dans Ollama',
          a: 'Par défaut, si un modèle 70B ne rentre pas entièrement en VRAM, Ollama bascule à l\'inférence CPU uniquement. Définissez explicitement les couches GPU avec `OLLAMA_GPU_LAYERS=999` -- Ollama déchargera autant de couches que possible en VRAM et exécutera le reste sur CPU, ce qui est nettement plus rapide que l\'inférence CPU-seul.',
        },
        {
          q: 'Utiliser Q4_K_M quand Q3_K_S conviendrait mieux au matériel disponible',
          a: 'Sur les machines avec 32-40 Go RAM, Q4_K_M pour un modèle 70B peut être trop serré (laissant une marge insuffisante pour l\'OS). Q3_K_S réduit la RAM à ~30 Go avec une perte de qualité modérée. Exécutez `ollama ps` après avoir chargé le modèle -- si vous voyez l\'usage swap, passez à Q3_K_S.',
        },
      ],
    },
    faqSection: {
      title: 'Questions fréquentes sur l\'exécution de modèles 70B sur matériel grand public',
      faqs: [
        {
          q: 'Quel est le matériel le moins cher qui peut exécuter un modèle 70B de manière utilisable ?',
          a: 'En avril 2026, un Mac Studio M2 Ultra d\'occasion (64 Go mémoire unifiée) à ~2 000 euros est le chemin le moins cher vers une inférence 70B à 25+ tok/sec. Une machine neuve équivalente serait le MacBook Pro M5 Max 64 Go (~3 500 euros). Un assemblage de bureau NVIDIA RTX 4090 (24 Go VRAM + 32 Go RAM) coûte ~3 000-4 000 euros mais produit une inférence plus lente en raison du déchargement de couches.',
        },
        {
          q: 'Puis-je exécuter un modèle 70B sur deux GPU ?',
          a: 'Oui -- llama.cpp et Ollama supportent l\'inférence multi-GPU sur matériel NVIDIA. Deux RTX 4090 (48 Go VRAM total) rentrent entièrement dans VRAM un modèle 70B Q4_K_M. Ollama gère multi-GPU automatiquement quand plusieurs GPU sont présents. Le parallélisme de tenseur dans llama.cpp (`--tensor-split`) contrôle comment les couches sont distribuées.',
        },
        {
          q: 'Comment la qualité 70B locale se compare-t-elle à GPT-5.5 ?',
          a: 'Sur les benchmarks MMLU et HumanEval, Llama 3.3 70B (82 %, 88 %) et Qwen3 72B (84 %, 87 %) égalent ou dépassent légèrement les scores GPT-4 (2023). GPT-5.5 (2024) obtient des scores plus élevés sur les tâches lourdes en raisonnement. Pour le suivi d\'instructions général, résumé et génération de code, les modèles 70B locaux sont compétitifs avec GPT-5.5 sur la plupart des tâches.',
        },
        {
          q: 'Ollama supporte-t-il l\'exécution automatique de modèles 70B ?',
          a: 'Oui. Exécuter `ollama run llama3.3:70b` télécharge et exécute le modèle avec déchargement automatique de couches GPU. Ollama détecte la VRAM disponible et la RAM système, décharge autant de couches que possible en GPU, et exécute le reste sur CPU. Aucune configuration manuelle requise pour l\'usage basique.',
        },
        {
          q: 'Combien d\'électricité consomme l\'exécution d\'un modèle 70B ?',
          a: 'Un Mac Studio M2 Ultra exécutant l\'inférence 70B consomme environ 30-50 W. Un ordinateur de bureau NVIDIA RTX 4090 sous charge consomme 350-450 W. À 0,15 euro par kWh, l\'inférence 70B continue sur un RTX 4090 coûte environ 0,05-0,07 euro par heure. Apple Silicon est 7-10× plus économe en énergie pour cette charge de travail.',
        },
        {
          q: 'Les modèles 70B en valent-ils la peine par rapport aux modèles 13B pour les tâches quotidiennes ?',
          a: 'Pour le raisonnement complexe, l\'analyse de documents longs et l\'écriture nuancée, oui -- la différence de qualité est notable. Pour la résumé simple, les questions-réponses et la classification, un modèle 13B ou même 7B produit une sortie quasi-identique. Exécutez les deux sur votre cas d\'usage spécifique avec [PromptQuorum](/?lang=fr) pour quantifier la différence de qualité avant d\'investir dans du matériel 70B.',
        },
        {
          q: 'Quel est l\'intérêt pour un utilisateur français ou belge d\'exécuter 70B localement ?',
          a: 'Pour les entreprises et professionnels en France, Belgique ou Suisse, l\'exécution de 70B localement offre : conformité RGPD complète (zéro données vers des serveurs tiers), coûts prévisibles (pas d\'abonnements API), et confidentialité commerciale (vos documents restent locaux). Les agences créatives, cabinets d\'avocats, banques et PME de la région DACH apprécient particulièrement cette garantie de données.',
        },
        {
          q: 'Combien de temps faut-il pour télécharger et configurer un modèle 70B ?',
          a: 'Avec Ollama sur une connexion ADSL/fibre standard (10-100 Mbps), le téléchargement prend 10-30 minutes. Une fois téléchargé, la première exécution initialise le GPU ou CPU en 5-10 secondes. Après cela, les appels API consécutifs ne nécessitent que du temps d\'inférence (pas de rechargement). Pour une configuration robuste avec plusieurs modèles, allouez 1-2 heures au total.',
        },
      ],
    },
    sources: {
      title: 'Sources',
      items: [
        'Documentation GPU Offloading llama.cpp -- github.com/ggerganov/llama.cpp/blob/master/docs/backend/CUDA.md',
        'Bibliothèque de modèles Ollama -- ollama.com/library/llama3.3',
        'Benchmarks d\'inférence Apple M5 Max -- github.com/ggerganov/llama.cpp/discussions (fil de discussion benchmarks communautaires)',
        'Carte de modèle Meta Llama 3.3 -- huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
      ],
    },
  },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Comment exécuter un modèle LLM 70B local sur du matériel grand public en 2026',
      description: 'Guide d\'exécution de modèles 70B locaux: besoins RAM, GPU, déchargement de couches et quantification. Déployer Llama 3.3 et Qwen3 -- avril 2026.',
      url: 'https://www.promptquorum.com/fr/local-llms/70b-models-consumer-hardware',
      inLanguage: 'fr',
      datePublished: '2026-04-04',
      author: { '@type': 'Person', 'name': 'Hans Kuepper' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      about: [
        { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
        { '@type': 'Thing', 'name': 'Qwen3 72B' },
        { '@type': 'Thing', 'name': 'Q4_K_M Quantification' },
        { '@type': 'Thing', 'name': 'Déchargement de couches' },
        { '@type': 'Thing', 'name': 'GPU NVIDIA' },
        { '@type': 'Thing', 'name': 'Apple Silicon' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', 'name': 'Ollama' },
        { '@type': 'SoftwareApplication', 'name': 'llama.cpp' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'fr',
      name: 'Options matérielles pour exécuter des modèles 70B',
      itemListElement: [
        { '@type': 'ListItem', 'position': 1, 'name': 'Apple M5 Max (64 Go unifiée)', 'description': 'Peut exécuter 70B -- GPU complet, 20-30 tok/sec' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Apple M2 Ultra (64 Go unifiée)', 'description': 'Peut exécuter 70B -- GPU complet, 25-35 tok/sec' },
        { '@type': 'ListItem', 'position': 3, 'name': 'NVIDIA RTX 4090 (24 Go) + 32 Go RAM', 'description': 'Peut exécuter 70B avec déchargement, 10-18 tok/sec' },
        { '@type': 'ListItem', 'position': 4, 'name': 'NVIDIA RTX 4080 (16 Go) + 32 Go RAM', 'description': 'Déchargement partiel uniquement, 5-10 tok/sec' },
        { '@type': 'ListItem', 'position': 5, 'name': '64 Go RAM, CPU seul', 'description': 'Peut exécuter 70B, 1-3 tok/sec -- impratique pour usage interactif' },
      ],
    },
},
    ja: {
  theme: 'Best Models',
  title: '2026年：コンシューマーハードウェアで70Bローカルモデルを実行する方法',
  seoTitle: '2026年：コンシューマーハードで70B実行ガイド',
  intro: 'ローカルで70Bパラメータモデルを実行するには、Q4_K_M量化で40～48GBのRAMが必要です。これは以下のハードウェアで実現可能です：64GB統合メモリを持つApple Silicon Mac、64GB DDR5を搭載したワークステーション、またはレイヤーオフロードを使用して24GB NVIDIA GPUと32GB システムRAMを組み合わせたマシン。2026年4月時点では、Llama 3.3 70BとQwen3 72Bが利用可能な主要な70Bモデルです。',
  metaDescription: 'Llama 3.3とQwen3 70Bモデルをローカルで実行：RAM要件、NVIDIAとApple Siliconの比較、レイヤーオフロード、ベンチマーク。完全なハードウェアガイド -- 2026年4月。',
  publishDate: '2026-04-04',
  readTime: '9分',
  educationalLevel: 'Intermediate',
  primaryTerm: '70B ローカルLLM コンシューマーハードウェア',
  toc: [
    { label: '主要ポイント', anchor: '#key-takeaways' },
    { label: '70Bモデルを実際に実行できるハードウェアとは', anchor: '#what-hardware-can-run-70b' },
    { label: '量化ごとのRAM要件', anchor: '#ram-requirements-by-quantization' },
    { label: 'Apple Silicon：70Bの最高のコンシューマーオプション', anchor: '#apple-silicon' },
    { label: 'NVIDIA GPU + レイヤーオフロード', anchor: '#nvidia-gpu-layer-offloading' },
    { label: 'CPU専用70B推論：現実的か', anchor: '#cpu-only-70b' },
    { label: '実行する70Bモデルはどれか', anchor: '#which-70b-model' },
    { label: '70Bモデル実行の注意点と一般的な過ち', anchor: '#common-mistakes' },
    { label: '実践Tips：ハードウェア選定ガイド', anchor: '#practical-tips' },
    { label: 'よくある質問', anchor: '#common-questions' },
  ],
  schema: {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '2026年：コンシューマーハードウェアで70Bローカルモデルを実行する方法',
    description: '70B ローカルLLMをコンシューマーハードウェアで実行：RAM要件、GPUオプション、レイヤーオフロード、量化 -- 2026年4月。',
    datePublished: '2026-04-04',
    dateModified: '2026-04-04',
    url: 'https://www.promptquorum.com/ja/local-llms/70b-models-consumer-hardware',
    inLanguage: 'ja',
    author: { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.promptquorum.com/author/hans-kuepper' },
    publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    about: [
      { '@type': 'Thing', name: 'Llama 3.3 70B' },
      { '@type': 'Thing', name: 'Qwen3 72B' },
      { '@type': 'Thing', name: 'Apple M5 Max' },
      { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
    ],
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: '70Bモデルを実行するには最小限のハードウェアは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '2026年4月時点では、使用可能で実用的な最小限は64GB統合メモリを備えたApple M5 Max MacBook Pro、またはレイヤーオフロード機能を備えたNVIDIA RTX 4090（24GB VRAM）+ 32GB システムRAMです。CPU専用70B推論は技術的には可能（64GB RAM）ですが、1～3 tok/secしか生成しないため、対話的な使用には現実的ではありません。' } },
      { '@type': 'Question', name: 'Apple SiliconとNVIDIA GPUで70Bモデルを実行する場合、なぜ速度に違いがあるのですか？', acceptedAnswer: { '@type': 'Answer', text: 'Apple Siliconは統合メモリを使用します。CPU と GPU は同じ物理メモリプールを共有するため、メモリ帯域幅の制限がありません。NVIDIA GPUは独立したVRAMを持つため、24GBのVRAMには70Bモデルの約60％しか格納できず、残りのレイヤーはCPU上で実行され、メモリ帯域幅のボトルネックが生じます。' } },
      { '@type': 'Question', name: 'RTX 4090で70Bモデルを完全に実行できますか？', acceptedAnswer: { '@type': 'Answer', text: '直接ではありません。RTX 4090は24GB VRAMで、Q4_K_Mで量化された70Bモデルには約40～43GBが必要です。Ollamaまたはllama.cppのレイヤーオフロード機能を使用して、約60％のレイヤーをGPU上で実行し、残りの40％をシステムRAM上で実行できます。これにより10～18 tok/secが得られます。' } },
      { '@type': 'Question', name: '「レイヤーオフロード」とは正確には何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'レイヤーオフロード（層オフロード）は、LLMの計算レイヤーを GPU VRAM とシステムRAMに分割する手法です。VRAMに格納されたレイヤーはGPU速度で実行され、システムRAMのレイヤーはCPU速度で実行されます。Ollamaで自動的に処理されます：OLLAMA_GPU_LAYERS=999 を設定すると、VRAMに収まるだけ多くのレイヤーをオフロードします。' } },
      { '@type': 'Question', name: 'CPU専用で70Bモデルを実行することは実際に可能ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、64GB RAMを備えたハイコアCPU（AMD Threadripper、Intel Xeon）では可能ですが、1～3 tok/secしか生成しません。200語の応答は約75秒かかります。バッチ処理（文書の要約、レポート生成）には使用できますが、対話的なチャットには不適切です。対話的な使用には最低8+ tok/secの処理速度が必要です。' } },
      { '@type': 'Question', name: '70Bモデルの質は GPT-5.5 と比較してどうですか？', acceptedAnswer: { '@type': 'Answer', text: 'Llama 3.3 70B（MMLU 82%、HumanEval 88%）と Qwen3 72B（MMLU 84%、HumanEval 87%）は、ベンチマークスコアで GPT-4（2023年）を一致または僅かに上回ります。GPT-5.5（2024年）は推論の多い作業ではスコアが高くなりますが、一般的な指示遵行、要約、コード生成では、70Bのローカルモデルはほとんどのタスクで GPT-5.5 と同等です。' } },
      { '@type': 'Question', name: '2026年4月時点での最も費用対効果の高い70B セットアップは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '中古 Mac Studio M2 Ultra（64GB統合メモリ）で約2,000ドル、25+ tok/secで動作することが最も費用対効果の高い選択肢です。新品相当品（M5 Max MacBook Pro 64GB）は約3,500ドルです。NVIDIA RTX 4090デスクトップ構成（24GB VRAM + 32GB RAM）は3,000～4,000ドルかかりますが、レイヤーオフロードのため速度が低下します。' } },
      { '@type': 'Question', name: '複数のGPUで70Bモデルを実行できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい、NVIDIA ハードウェアでは llama.cpp と Ollama がマルチGPU推論をサポートしています。2つのRTX 4090s（合計48GB VRAM）は Q4_K_M 70B モデルを完全にVRAM内に適合させることができます。Ollamaは複数GPUが存在する場合、自動的にマルチGPU処理を行います。llama.cpp では tensor parallelism（--tensor-split）がレイヤー分配を制御します。' } },
      { '@type': 'Question', name: '70Bモデルを実行する場合、電力消費はどのくらいですか？', acceptedAnswer: { '@type': 'Answer', text: 'Mac Studio M2 Ultra は70B推論で約30～50W消費します。NVIDIA RTX 4090 デスクトップは負荷時に350～450W消費します。1kWh あたり0.15ドルで、RTX 4090での継続的な70B推論は時間あたり約0.05～0.07ドルのコストがかかります。Apple Siliconはこのワークロードで7～10倍エネルギー効率が優れています。' } },
      { '@type': 'Question', name: '日本で70Bモデルを実行する場合、METI規制を遵守する必要がありますか？', acceptedAnswer: { '@type': 'Answer', text: '2026年4月時点では、Open-Weight LLM（Llama 3.3、Qwen3など）の個人使用に対する直接的な METI 規制はありません。ただし、組織として機密データを処理する場合は、データ保護とプライバシー要件を確認してください。日本国内の機械学習規制については、デジタル庁のガイドラインを参照してください。' } },
      { '@type': 'Question', name: '日本語で70Bモデルを使用する場合、どのモデルが最適ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 72B は日本語を含む29言語にネイティブに対応しており、70Bクラスで最良の選択肢です。Llama 3.3 70B は 日本語をサポートしていますが、英語にはやや劣ります。動的トークン化とBPE（バイトペア符号化）のため、日本語は英語より多くのトークンを消費します。同じコンテキストでも日本語の方が多くのトークンが必要です。' } },
    ],
  },
  sections: {
    tldr: {
      id: 'key-takeaways',

      isTldr: true,
      items: [
        'Q4_K_M 量化：Llama 3.3 70B は ~40GB RAM が必要。Qwen3 72B は ~43GB RAM が必要です。',
        '**最も容易なコンシューマーハードウェア**：Apple Mac Studio M2 Ultra（64GB統合メモリ）または M5 Max MacBook Pro（64GB）-- 完全GPU加速、レイヤーオフロード不要。',
        '**NVIDIA オプション**：RTX 4090（24GB VRAM）+ 32GB システムRAM、Ollama のレイヤーオフロード機能で大ほどんどの70Bモデルに対応、ただし20～30％のレイヤーはCPU上で実行。',
        '**CPU専用70B**：64GB RAMで可能ですが、1～3 tok/sec 生成 -- バッチタスクではかろうじて使用可能、対話的チャットには不適切。',
        '2026年4月時点では、ローカル70Bモデルは GPT-4（2023年）の品質に相当し、クラウドコストなしでそのクオリティティア に到達できる唯一のコンシューマーアクセス可能なパスです。',
      ],
    },
    whatHardware: {
      title: '70B ローカルLLM を実際に実行できるハードウェアとは',
      content: [
        '**Q4_K_M 量化の70Bモデルは、推論エンジンがアクセス可能なメモリ約40～43GBが必要です。** これはGPU VRAM、統合システムメモリ（Apple Silicon）、システムRAM、またはレイヤーオフロード経由の組み合わせから提供できます。',
      ],
      rows: [
        { 'ハードウェア': 'Apple M5 Max（64GB統合）', '70B実行可能？': 'はい -- フルGPU', '速度（70B Q4）': '20～30 tok/sec', '注釈': '最高のコンシューマーノートパック オプション' },
        { 'ハードウェア': 'Apple M2 Ultra（64GB統合）', '70B実行可能？': 'はい -- フルGPU', '速度（70B Q4）': '25～35 tok/sec', '注釈': 'Mac Studio ベースラインconfig' },
        { 'ハードウェア': 'Apple M2 Ultra（192GB統合）', '70B実行可能？': 'はい -- フルGPU', '速度（70B Q4）': '30～40 tok/sec', '注釈': 'Q8_0を実行でき余裕がある' },
        { 'ハードウェア': 'NVIDIA RTX 4090（24GB）+ 32GB RAM', '70B実行可能？': 'はい -- オフロード使用', '速度（70B Q4）': '10～18 tok/sec', '注釈': '~60% のレイヤーはGPU上、~40% はCPU上' },
        { 'ハードウェア': 'NVIDIA RTX 4080（16GB）+ 32GB RAM', '70B実行可能？': '部分的オフロードのみ', '速度（70B Q4）': '5～10 tok/sec', '注釈': '~35% のレイヤーのみGPU上' },
        { 'ハードウェア': '64GB RAM、CPU専用', '70B実行可能？': 'はい -- CPU専用', '速度（70B Q4）': '1～3 tok/sec', '注釈': '対話的使用には不実用的' },
      ],
      columns: ['ハードウェア', '70B実行可能？', '速度（70B Q4）', '注釈'],
    },
    注意点_量化: {
      title: '注意点：量化レベルを理解する',
      content: [
        '**Q4_K_M 量化を使用してください -- これはほとんどのコンシューマーハードウェアで最適です。** FP16 や Q8_0 のような高い精度が必要な場合、より多くの RAM が必要になります。',
        '量化レベル：FP16（140GB）> Q8_0（70GB）> Q5_K_M（50GB）> Q4_K_M（40GB）> Q3_K_S（30GB）',
        'より低い量化（Q3_K_S、Q2_K）は品質の喪失が大きくなります。特に数学的推論とコード生成では著しい低下が見られます。',
      ],
    },
    ramByQuant: {
      title: '各量化レベルで70Bモデルには どれだけの RAM が必要ですか？',
      rows: [
        { '量化': 'FP16（フル精度）', 'RAM 必要量': '~140GB', '品質': '参照品質', '実用的？': 'いいえ -- サーバー専用' },
        { '量化': 'Q8_0', 'RAM 必要量': '~70GB', '品質': 'ほぼ無損失', '実用的？': 'Mac Ultra 192GB のみ' },
        { '量化': 'Q5_K_M', 'RAM 必要量': '~50GB', '品質': '最小限の喪失', '実用的？': 'Mac Ultra 64GB、逼迫状態' },
        { '量化': 'Q4_K_M', 'RAM 必要量': '~40～43GB', '品質': '低喪失 -- 推奨', '実用的？': 'はい -- 最も実用的なオプション' },
        { '量化': 'Q3_K_S', 'RAM 必要量': '~30GB', '品質': '適度な喪失', '実用的？': 'はい -- 32GB マシン可能' },
        { '量化': 'Q2_K', 'RAM 必要量': '~22GB', '品質': '高い喪失', '実用的？': '推奨されない' },
      ],
      columns: ['量化', 'RAM 必要量', '品質', '実用的？'],
    },
    appleSilicon: {
      title: 'Apple Silicon が70Bモデルのための最高のコンシューマーオプションである理由',
      content: [
        '**Apple Silicon は統合メモリを使用します -- CPU と GPU は同じ物理メモリプールを共有します。** 64GB の統合メモリを持つ M5 Max MacBook Pro は、70Bモデルを Q4_K_M で完全にGPU上で実行し、20～30 tok/sec を達成でき、レイヤーオフロードのオーバーヘッドがありません。',
        'NVIDIA ハードウェアでは、GPU とシステムRAMは分離しています。24GB VRAM の GPU は Q4_K_M 70B モデルの約60％しか保持できません。残りのレイヤーはCPU上で実行され、メモリ帯域幅のボトルネックが生じ、速度が 10～18 tok/sec に低下します。',
        '2026年4月時点では、Mac Studio M2 Ultra（64GB、約2,000ドル・中古）が、使用可能な速度での70Bローカル推論への最も費用対効果の高いパスです。新しい M5 Max MacBook Pro 64GB は約3,500ドルです。',
      ],
    },
    実践Tips_AppleSilicon: {
      title: '実践Tips：Apple Silicon で70Bを選ぶ場合',
      items: [
        '64GB は下限です。複数のモデルやタブを開く場合は、より多いメモリを考慮してください。',
        '192GB M2 Ultra は Q8_0 で動作でき、最高品質が必要な場合に理想的です。',
        'メモリ帯域幅は Apple Silicon で優れているため、複数のモデルをシーケンシャルロードしても速度低下がほとんどありません。',
      ],
    },
    nvidiaOffload: {
      title: 'NVIDIA GPU + レイヤーオフロードはどのように70Bモデルで機能しますか？',
      content: 'Ollama と llama.cpp はモデルを GPU VRAM とシステムRAM に分割することをサポートします。VRAM に読み込まれたレイヤーは GPU 速度で実行され、システムRAM のレイヤーは CPU 速度で実行されます：',
      image: '/images/70b-layer-offloading.svg',
      imageCaption: 'Layer offloading architecture: RTX 4090 GPU (24 GB) holds ~60% of layers (1-48) at 10-18 tok/sec, while system RAM (32 GB) holds remaining layers (49-80) running at CPU speed (2-5 tok/sec), achieving 10-18 tok/sec overall.',
      codeBlock: '# Ollama は自動的に VRAM に収まるだけ多くのレイヤーをオフロードします\n# レイヤーを明示的に制御するには：\nollama run llama3.3:70b\n\n# GPU上にあるレイヤー数を確認：\nollama ps\n# 出力は以下を示します：llama3.3:70b  ...  23/80 GPU layers\n\n# llama.cpp 直接：\n./llama-cli -m llama-3.3-70b-q4_k_m.gguf \\\n  -ngl 40   # オフロードするレイヤー数\n  --ctx-size 4096',
      codeLanguage: 'bash',
    },
    注意点_オフロード: {
      title: '注意点：レイヤーオフロード設定',
      items: [
        'デフォルトでは、Ollama はモデルが VRAM に完全に適合しない場合、CPU 専用推論にフォールバックします。これは遅くなります。',
        'OLLAMA_GPU_LAYERS=999 を設定して、VRAM に収まるだけ多くのレイヤーをオフロードします。',
        'llama.cpp では -ngl フラグを使用して、オフロードするレイヤー数を指定します。実験を通じて最適な設定を見つけてください。',
        'CPU + GPU のハイブリッド実行は、完全な GPU 実行よりも 30～50% 遅くなります。これを心に留めておいてください。',
      ],
    },
    cpuOnly: {
      title: 'CPU 専用70B推論は実用的ですか？',
      content: [
        '**ハイコアカウント CPU（AMD Threadripper、Intel Xeon）を備えた 64GB RAM 上の 70B モデルは 1～3 トークン/秒 を生成します。** 2 tok/sec では、200語の応答は約75秒かかります。',
        'これは対話的チャットには不実用的ですが、バッチ処理（文書の要約、レポート生成、ファイルの一晩処理）には使用可能です。対話的な使用には、8+ tok/sec を実現できるマシン、つまり Apple Silicon または NVIDIA GPU オフロードが最小限の実用的なハードウェアが必要です。',
      ],
    },
    実践Tips_ハードウェア選定: {
      title: '実践Tips：ハードウェア選定ガイド',
      items: [
        '予算が ¥370,000 未満の場合：中古 Mac Studio M2 Ultra（64GB）を探してください。',
        '予算が ¥520,000 の場合：新しい M5 Max MacBook Pro（64GB）を検討してください。ポータビリティが必要な場合。',
        '予算が ¥600,000 の場合：RTX 4090（中古）+ 良質なワークステーションビルドは可能ですが、Apple と比較して遅い（10～18 vs 25+ tok/sec）。',
        '複数のモデルを並行実行する予定の場合：Apple Silicon（統合メモリ）の方が優れています。レイヤーオフロードは複雑になります。',
      ],
    },
    which70b: {
      title: 'どの70B モデルをローカルで実行すべきですか？',
      rows: [
        { 'モデル': 'Llama 3.3 70B', 'MMLU': '82%', 'HumanEval': '88%', '最適用途': '一般英語タスク、指示遵行' },
        { 'モデル': 'Qwen3 72B', 'MMLU': '84%', 'HumanEval': '87%', '最適用途': 'コーディング、多言語（29言語）' },
        { 'モデル': 'Mistral Large 123B', 'MMLU': '84%', 'HumanEval': '80%', '最適用途': '80GB以上が必要 -- ワークステーション専用' },
      ],
      columns: ['モデル', 'MMLU', 'HumanEval', '最適用途'],
    },
    commonMistakes: {
      title: 'コンシューマーハードウェアで70Bモデルを実行する場合の一般的な過ちは何ですか？',
      faqs: [
        {
          q: '24GB未満の VRAM を備えた GPU を購入し、完全な70B パフォーマンスを期待する',
          a: 'RTX 4070 Ti（12GB VRAM）は Q4_K_M 70B モデルの約30% しか VRAM に保持できません。残りの70% は CPU 上で実行され、3～5 tok/sec という結果が得られます -- CPU 専用推論ほぼ並のレベルです。70B モデルの場合、24GB VRAM（RTX 4090）が有用な GPU 加速の実用的な最小値です。これ以下の場合は、代わりに 34B モデルの実行を検討してください。',
        },
        {
          q: 'Ollama でレイヤーオフロードを使用しない',
          a: 'デフォルトでは、70B モデルが VRAM に完全に適合しない場合、Ollama は CPU 専用推論にフォールバックします。GPU レイヤーを OLLAMA_GPU_LAYERS=999 で明示的に設定してください -- Ollama は VRAM に収まるだけ多くのレイヤーをオフロードし、残りを CPU で実行します。これは完全な CPU 推論よりもはるかに高速です。',
        },
        {
          q: 'Q4_K_M を使用すべき時に Q3_K_S を使用できた',
          a: '32～40GB RAM のマシンでは、70B モデルの Q4_K_M は厳しすぎる可能性があります（OS 用に十分なヘッドルームがありません）。Q3_K_S は RAM を ~30GB に削減し、品質をやや失います。モデルをロードした後、ollama ps を実行してください -- スワップ使用が表示される場合は、Q3_K_S にドロップしてください。',
        },
      ],
    },
    faqSection: {
      title: 'コンシューマーハードウェアで70Bモデルを実行することについてのよくある質問',
      faqs: [
        {
          q: '70Bモデルを実用的に実行できる最も安いハードウェアは何ですか？',
          a: '2026年4月時点では、中古 Mac Studio M2 Ultra（64GB 統合メモリ）（約2,000ドル）が、25+ tok/sec での 70B 推論への最も安いパスです。新しいマシン相当品は M5 Max MacBook Pro 64GB（約3,500ドル）です。NVIDIA RTX 4090 デスクトップビルド（24GB VRAM + 32GB RAM）は3,000～4,000ドルかかりますが、レイヤーオフロードのため推論が遅くなります。',
        },
        {
          q: '2つの GPU で70Bモデルを実行できますか？',
          a: 'はい -- llama.cpp と Ollama は NVIDIA ハードウェアでマルチ GPU 推論をサポートしています。2つの RTX 4090s（合計48GB VRAM）は Q4_K_M 70B モデルを完全に VRAM に適合させることができます。Ollama は複数の GPU が存在する場合、自動的にマルチ GPU 処理を行います。llama.cpp では tensor parallelism（--tensor-split）がレイヤーをどのように分配するかを制御します。',
        },
        {
          q: '70B ローカル品質は GPT-5.5 とどう比較されますか？',
          a: 'MMLU と HumanEval ベンチマークでは、Llama 3.3 70B（82%, 88%）と Qwen3 72B（84%, 87%）は GPT-4（2023年）スコアに一致またはやや上回ります。GPT-5.5（2024年）は推論が多いタスクではより高いスコアを示します。一般的な指示遵行、要約、コード生成では、70B ローカルモデルはほとんどのタスクで GPT-5.5 と同等です。',
        },
        {
          q: 'Ollama は70Bモデルを自動的に実行できますか？',
          a: 'はい。ollama run llama3.3:70b を実行すると、自動 GPU レイヤーオフロード機能でモデルをダウンロードして実行します。Ollama は利用可能な VRAM とシステムRAM を検出し、GPU にできるだけ多くのレイヤーをオフロードして、残りを CPU で実行します。基本的な使用には手動設定が不要です。',
        },
        {
          q: '70Bモデルを実行するのに どれだけの電力を使用しますか？',
          a: 'Mac Studio M2 Ultra が 70B 推論を実行している場合、約 30～50 W を消費します。NVIDIA RTX 4090 デスクトップは負荷時に 350～450 W を消費します。¥25/kWh で、RTX 4090 での継続的な 70B 推論の電力コストは時間あたり約 ¥7.5～10.5 です。Apple Silicon はこのワークロードで 7～10 倍エネルギー効率が優れています。',
        },
        {
          q: '70Bモデルは日常的なタスクに対して13Bモデルの価値があるのですか？',
          a: '複雑な推論、長いドキュメント分析、微妙な作成には、はい -- 品質の違いは目立ちます。単純な要約、Q&A、分類では、13B または 7B モデルでも実質的に同じ出力を生成します。70B ハードウェアに投資する前に、[PromptQuorum](/?lang=ja) で両方を特定のユースケースで実行して、品質差を量化してください。',
        },
        {
          q: '日本語で70Bモデルを使用する場合、どのモデルが推奨されますか？',
          a: 'Qwen3 72B は日本語を含む29言語にネイティブに対応しており、70B クラスでの最適な選択肢です。Llama 3.3 70B は日本語をサポートしていますが、英語にはやや劣ります。日本語はトークン化が英語より多くのトークンを必要とします -- 同じコンテンツでも日本語の方が多くのトークンを消費します。',
        },
        {
          q: '日本で組織として70Bモデルを使用する場合、法的な制限はありますか？',
          a: '2026年4月時点では、個人使用向けのオープンウェイト LLM（Llama、Qwen など）に対する直接的な METI 規制はありません。ただし、組織として機密データを処理する場合は、データ保護とプライバシー要件を確認してください。日本国内のデータ保護については、デジタル庁のガイドラインと個人情報保護法（APPI）を参照してください。',
        },
        {
          q: 'Ollama をインストールして70Bモデルを実行する最初のステップは何ですか？',
          a: 'ollama.com/download から Ollama をダウンロードしてインストールしてください。その後、ollama run llama3.3:70b を実行してください。Ollama はモデルをダウンロードし、自動 GPU レイヤーオフロードでそれを実行します。初回ダウンロードは 15～30 分かかる可能性があります（モデルサイズと接続速度による）。ollama ps でステータスを確認してください。',
        },
      ],
    },
    sources: {
      title: '出典',
      items: [
        'llama.cpp GPU オフロードドキュメント -- github.com/ggerganov/llama.cpp/blob/master/docs/backend/CUDA.md',
        'Ollama モデルライブラリ -- ollama.com/library/llama3.3',
        'Apple M5 Max 推論ベンチマーク -- github.com/ggerganov/llama.cpp/discussions（コミュニティベンチマークスレッド）',
        'Meta Llama 3.3 モデルカード -- huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
        'NVIDIA RTX 4090 公式仕様 -- nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-40-series',
      ],
    },
  },
}
,
    zh: {
  theme: '最佳模型',
  title: '如何在消费级硬件上运行 70B 本地大模型 (2026)',
  seoTitle: '2026消费级硬件运行70B完整指南',
  intro: '在 Q4_K_M 量化下，运行 70B 参数模型需要 40-48 GB 内存。这可以通过以下方式实现：1) 配置 64 GB 统一内存的 Apple Silicon Mac；2) 配置 64 GB DDR5 的工作站；3) 通过层卸载技术结合 24 GB NVIDIA GPU 与 32 GB 系统内存的机器。截至 2026 年 4 月，Llama 3.3 70B 和 Qwen3 72B 是两款主要可用的 70B 模型。',
  metaDescription: '本地运行Llama 3.3和Qwen3 70B模型：RAM需求、NVIDIA与Apple Silicon对比、层卸载技术、基准测试。完整硬件部署指南 -- 2026年4月。',
  publishDate: '2026-04-04',
  dateModified: '2026-04-10',
  readTime: '9 分钟阅读',
  educationalLevel: 'Intermediate',
  primaryTerm: '70B 本地大模型消费级硬件',
  toc: [
    { label: '关键要点', anchor: '#key-takeaways' },
    { label: '哪些硬件可以运行 70B 模型？', anchor: '#what-hardware-can-run-70b' },
    { label: '按量化等级划分的内存需求', anchor: '#ram-requirements-by-quantization' },
    { label: 'Apple Silicon：70B 模型的最佳消费级方案', anchor: '#apple-silicon' },
    { label: 'NVIDIA GPU + 层卸载技术', anchor: '#nvidia-gpu-layer-offloading' },
    { label: '纯 CPU 运行 70B 模型：是否实用？', anchor: '#cpu-only-70b' },
    { label: '应该运行哪个 70B 模型？', anchor: '#which-70b-model' },
    { label: '运行 70B 模型的常见误区', anchor: '#common-mistakes' },
    { label: '常见问题', anchor: '#common-questions' },
  ],
  sections: {
    tldr: {
      id: 'key-takeaways',

      isTldr: true,
      numberedItems: [
        'Q4_K_M 量化：Llama 3.3 70B 需要约 40 GB 内存；Qwen3 72B 需要约 43 GB 内存。',
        '最简单的消费级硬件方案：Mac Studio M2 Ultra (64 GB 统一内存) 或 M5 Max MacBook Pro (64 GB) -- 完整 GPU 加速，无需层卸载。',
        'NVIDIA 方案：RTX 4090 (24 GB VRAM) + 32 GB 系统内存配合 Ollama 层卸载技术可以处理大多数 70B 模型，尽管 20-30% 的层会在 CPU 上运行。',
        '纯 CPU 运行 70B：可行但只能产生 1-3 tok/秒 -- 边际可用于批处理任务，不适合交互式聊天。',
        '截至 2026 年 4 月，本地 70B 模型与 GPT-4 (2023) 质量相当，是唯一无需云成本即可获得该质量等级的消费级方案。',
      ],
    },
    whatHardware: {
      title: '哪些硬件实际上可以运行 70B 本地大模型？',
      content: [
        '**Q4_K_M 量化的 70B 模型需要约 40-43 GB 的内存可供推理引擎访问。** 这些内存可以来自 GPU VRAM、统一系统内存 (Apple Silicon)、系统 RAM，或通过层卸载技术的组合。',
      ],
      image: '/images/70b-hardware-comparison.svg',
      imageCaption: 'Hardware comparison: Apple Silicon M5 Max achieves 25-35 tok/sec with no offloading, while NVIDIA RTX 4090 with layer offloading reaches 10-18 tok/sec, and CPU-only 70B inference produces just 1-3 tok/sec.',
      rows: [
        { '硬件': 'Apple M5 Max (64 GB 统一内存)', '能运行 70B？': '是 -- 完整 GPU', '速度 (70B Q4)': '20-30 tok/秒', '说明': '最佳消费级笔记本选项' },
        { '硬件': 'Apple M2 Ultra (64 GB 统一内存)', '能运行 70B？': '是 -- 完整 GPU', '速度 (70B Q4)': '25-35 tok/秒', '说明': 'Mac Studio 基础配置' },
        { '硬件': 'Apple M2 Ultra (192 GB 统一内存)', '能运行 70B？': '是 -- 完整 GPU', '速度 (70B Q4)': '30-40 tok/秒', '说明': '可运行 Q8_0 且余量充足' },
        { '硬件': 'NVIDIA RTX 4090 (24 GB) + 32 GB 内存', '能运行 70B？': '是 -- 带卸载', '速度 (70B Q4)': '10-18 tok/秒', '说明': '约 60% 层在 GPU，40% 在 CPU' },
        { '硬件': 'NVIDIA RTX 4080 (16 GB) + 32 GB 内存', '能运行 70B？': '部分卸载仅', '速度 (70B Q4)': '5-10 tok/秒', '说明': '仅约 35% 层在 GPU' },
        { '硬件': '64 GB 内存，纯 CPU', '能运行 70B？': '是 -- 仅 CPU', '速度 (70B Q4)': '1-3 tok/秒', '说明': '不适合交互式使用' },
      ],
      columns: ['硬件', '能运行 70B？', '速度 (70B Q4)', '说明'],
    },
    ramByQuant: {
      title: '70B 模型在各量化等级需要多少内存？',
      image: '/images/70b-quantization-tradeoff.svg',
      imageCaption: 'Quantization trade-off curve: Q4_K_M (recommended) requires 40-43 GB RAM with only 1-3% quality loss versus FP16, balancing practicality and performance for consumer hardware.',
      rows: [
        { '量化等级': 'FP16 (完整精度)', '需要内存': '约 140 GB', '质量': '参考质量', '实用性': '否 -- 仅服务器' },
        { '量化等级': 'Q8_0', '需要内存': '约 70 GB', '质量': '接近无损', '实用性': '仅 Mac Ultra 192 GB' },
        { '量化等级': 'Q5_K_M', '需要内存': '约 50 GB', '质量': '最小损耗', '实用性': 'Mac Ultra 64 GB，紧张' },
        { '量化等级': 'Q4_K_M', '需要内存': '约 40-43 GB', '质量': '低损耗 -- 推荐', '实用性': '是 -- 最可行方案' },
        { '量化等级': 'Q3_K_S', '需要内存': '约 30 GB', '质量': '中等损耗', '实用性': '是 -- 32 GB 机器可行' },
        { '量化等级': 'Q2_K', '需要内存': '约 22 GB', '质量': '高损耗', '实用性': '不推荐' },
      ],
      columns: ['量化等级', '需要内存', '质量', '实用性'],
    },
    appleSilicon: {
      title: '为什么 Apple Silicon 是 70B 模型的最佳消费级选择？',
      content: [
        '**Apple Silicon 采用统一内存架构 -- CPU 和 GPU 共享同一物理内存池。** 配置 64 GB 统一内存的 M5 Max MacBook Pro 可以完整在 GPU 上运行 Q4_K_M 的 70B 模型，实现 20-30 tok/秒，无需层卸载开销。',
        '在 NVIDIA 硬件上，GPU 和系统内存是分离的。24 GB VRAM 的 GPU 仅能容纳 Q4_K_M 70B 模型的约 60%；其余层在 CPU 上运行，造成内存带宽瓶颈，降低速度至 10-18 tok/秒。',
        '截至 2026 年 4 月，Mac Studio M2 Ultra (64 GB，二手约 $2,000) 是以实用速度进行 70B 本地推理最具成本效益的路径。新款 M5 Max MacBook Pro 64 GB 售价约 $3,500。',
      ],
    },
    nvidiaOffload: {
      title: 'NVIDIA GPU + 层卸载技术如何为 70B 模型工作？',
      content: 'Ollama 和 llama.cpp 支持跨 GPU VRAM 和系统 RAM 分割模型。加载在 VRAM 中的层以 GPU 速度运行；系统 RAM 中的层以 CPU 速度运行：',
      image: '/images/70b-layer-offloading.svg',
      imageCaption: 'Layer offloading architecture: RTX 4090 GPU (24 GB) holds ~60% of layers (1-48) at 10-18 tok/sec, while system RAM (32 GB) holds remaining layers (49-80) running at CPU speed (2-5 tok/sec), achieving 10-18 tok/sec overall.',
      codeBlock: '# Ollama 自动卸载尽可能多的层到 VRAM\n# 显式控制层数：\nollama run llama3.3:70b\n\n# 检查多少层在 GPU 上：\nollama ps\n# 输出显示：llama3.3:70b  ...  23/80 GPU layers\n\n# 直接使用 llama.cpp：\n./llama-cli -m llama-3.3-70b-q4_k_m.gguf \\\n  -ngl 40   # 卸载到 GPU 的层数\n  --ctx-size 4096',
      codeLanguage: 'bash',
    },
    cpuOnly: {
      title: '纯 CPU 运行 70B 推理实用吗？',
      content: [
        '**Q4_K_M 70B 模型在高核心数 CPU (AMD Threadripper、Intel Xeon) 配合 64 GB 内存上产生 1-3 token/秒。** 在 2 tok/秒速度下，一个 200 字的响应需要约 75 秒。',
        '这对交互式聊天不实用，但对批处理可用 -- 如文档摘要、报告生成或文件离线处理。对于交互式使用，最低实用硬件是能实现 8+ tok/秒的机器，这需要 Apple Silicon 或 NVIDIA GPU 卸载。',
      ],
    },
    which70b: {
      title: '应该在本地运行哪个 70B 模型？',
      rows: [
        { '模型': 'Llama 3.3 70B', 'MMLU': '82%', 'HumanEval': '88%', '最适用于': '通用英文任务、指令跟随' },
        { '模型': 'Qwen3 72B', 'MMLU': '84%', 'HumanEval': '87%', '最适用于': '编码、多语言 (29 种语言)' },
        { '模型': 'Mistral Large 123B', 'MMLU': '84%', 'HumanEval': '80%', '最适用于': '需要 80+ GB -- 仅工作站' },
      ],
      columns: ['模型', 'MMLU', 'HumanEval', '最适用于'],
    },
    commonMistakes: {
      title: '运行 70B 模型时的常见误区有哪些？',
      faqs: [
        {
          q: '购买 VRAM 少于 24 GB 的 GPU，期望完整的 70B 性能',
          a: 'RTX 4070 Ti (12 GB VRAM) 仅能容纳 Q4_K_M 70B 模型的约 30%。其余 70% 在 CPU 上运行，导致 3-5 tok/秒 -- 仅比纯 CPU 推理稍快。对于 70B 模型，24 GB VRAM (RTX 4090) 是实现有用 GPU 加速的实际最低配置。低于此配置，请考虑改为运行 34B 模型。',
        },
        {
          q: '未在 Ollama 中使用层卸载',
          a: '默认情况下，如果 70B 模型无法完全拟合 VRAM，Ollama 会回退到纯 CPU 推理。设置 `OLLAMA_GPU_LAYERS=999` 显式控制 GPU 层 -- Ollama 将卸载尽可能多的层到 VRAM，并在 CPU 上运行其余层，明显快于全 CPU 推理。',
        },
        {
          q: '在有更合适的量化等级时使用 Q4_K_M',
          a: '在 32-40 GB 内存的机器上，70B 模型的 Q4_K_M 量化可能过紧 (留给操作系统的余量不足)。Q3_K_S 将内存减少至约 30 GB，代价是中等质量损耗。运行 `ollama ps` 加载模型后 -- 如果看到交换使用，请改用 Q3_K_S。',
        },
      ],
    },
    faqSection: {
      title: '关于在消费级硬件上运行 70B 模型的常见问题',
      faqs: [
        {
          q: '能实用地运行 70B 模型的最便宜硬件是什么？',
          a: '截至 2026 年 4 月，二手 Mac Studio M2 Ultra (64 GB 统一内存，约 $2,000) 是以 25+ tok/秒速度进行 70B 推理最便宜的路径。新机等效方案是 M5 Max MacBook Pro 64 GB ($3,500)。NVIDIA RTX 4090 桌面构建 (24 GB VRAM + 32 GB 内存) 成本约 $3,000-$4,000 但由于层卸载导致推理更慢。',
        },
        {
          q: '我能在两个 GPU 上运行 70B 模型吗？',
          a: '可以 -- llama.cpp 和 Ollama 在 NVIDIA 硬件上支持多 GPU 推理。两个 RTX 4090 (48 GB 总 VRAM) 可以完整拟合 Q4_K_M 70B 模型到 VRAM。Ollama 在有多个 GPU 时自动处理多 GPU。llama.cpp 中的张量并行 (`--tensor-split`) 控制层如何分布。',
        },
        {
          q: '70B 本地质量与 GPT-5.5 相比如何？',
          a: '在 MMLU 和 HumanEval 基准上，Llama 3.3 70B (82%, 88%) 和 Qwen3 72B (84%, 87%) 与或略超 GPT-4 (2023) 分数。GPT-5.5 (2024) 在推理密集任务上分数更高。对于通用指令跟随、摘要和代码生成，70B 本地模型在大多数任务上与 GPT-5.5 竞争力相当。',
        },
        {
          q: 'Ollama 支持自动运行 70B 模型吗？',
          a: '支持。运行 `ollama run llama3.3:70b` 会下载并运行模型，具有自动 GPU 层卸载。Ollama 检测可用 VRAM 和系统 RAM，将尽可能多的层卸载到 GPU，在 CPU 上运行其余层。基本使用无需手动配置。',
        },
        {
          q: '运行 70B 模型消耗多少电力？',
          a: '运行 70B 推理的 Mac Studio M2 Ultra 消耗约 30-50 W。负载下的 NVIDIA RTX 4090 桌面消耗 350-450 W。在 $0.15/kWh 电价下，RTX 4090 上连续 70B 推理成本约为 $0.05-0.07 每小时。Apple Silicon 对这个工作负载的能效高 7-10 倍。',
        },
        {
          q: '相比 13B 模型，70B 模型在日常任务中值得吗？',
          a: '对于复杂推理、长文档分析和细致写作，值得 -- 质量差异明显。对于简单摘要、问答和分类，13B 甚至 7B 模型产生几乎相同的输出。在您的特定用例上同时运行两种模型与 [PromptQuorum](/?lang=zh) 比较，在投资 70B 硬件前量化质量差异。',
        },
        {
          q: '在中国部署 70B 本地模型有特殊考虑吗？',
          a: '是。根据《数据安全法》(2021) 和 MLPS (多层次保护系统) 要求，本地部署 70B 模型适合处理敏感业务数据。Qwen3 72B 作为国产模型，在国内合规性更优。企业应在 CAC (网络安全审查委员会) 指导下评估使用场景，特别是在涉及个人数据或关键信息基础设施时。',
        },
        {
          q: '如何在有限的电力供应中优化 70B 模型的运行？',
          a: '在电力受限环境中，优先选择 Apple Silicon 硬件 (功耗 30-50 W)。若必须使用 NVIDIA，采用 Q4_K_M 或更低量化以减少计算时间。使用动态卸载 (启用操作系统分页) 和批处理推理以延长推理时间但降低峰值功耗。监控 `ollama ps` 的实时速度调整 `OLLAMA_GPU_LAYERS` 以平衡速度与电力消耗。',
        },
      ],
    },
    practicalSuggestions: {
      title: '实用建议',
      items: [
        '1. 选择合适的量化等级：从 Q4_K_M 开始。如果遇到交换使用，降至 Q3_K_S。如果有余量且性能关键，升至 Q5_K_M 或 Q8_0。',
        '2. 监控内存使用：每次运行后执行 `ollama ps` 检查 GPU 层数。目标是至少 50% 层在 GPU 上，以获得可接受的交互速度。',
        '3. 考虑长期运行成本：Apple Silicon 总成本虽高但能效优异，适合频繁使用。NVIDIA RTX 4090 初期投资较低但电费持续累积。',
        '4. 中国用户特别建议：优先评估 Qwen3 72B，其对中文的优化优于 Llama，符合国内合规要求，模型下载更快 (国内源可用)。',
        '5. 生产部署检查：在 Ollama 中设置显式层卸载 (`-ngl` 标志)，建立监控告警 (内存、CPU 使用率)，准备故障转移方案。',
      ],
    },
    regionalContext: {
      title: '中国特定背景与合规性',
      content: [
        '**在中国部署 70B 本地大模型需理解三个关键法律框架：**',
      ],
      numberedItems: [
        '《数据安全法》(2021)：强制所有包含用户或业务敏感信息的 AI 推理在本地执行或国内服务器上进行。本地 70B 部署完全符合此要求，因处理不离开企业网络。',
        'MLPS (多层次保护系统)：等级 3+ 涉密业务必须使用本地模型。70B 模型的智能程度使其成为替代云 API 的可行方案，避免数据跨境风险。',
        'CAC (网络安全审查委员会) 指导：处理关键信息基础设施数据时，推荐使用国产模型如 Qwen3 (阿里巴巴) 或 Baichuan (百川)。部署前应咨询法务评估场景合规性。',
      ],
      items: [
        '中文优化：Qwen3 72B 在中文和英文上均表现优异 (MMLU 84%)，相比 Llama 3.3 提供更好的中文语义理解。',
        '国内模型生态：Qwen、Baichuan、Deepseek 等国产 70B 级模型已支持 GGUF 量化，可通过国内 huggingface 镜像 (如 modelscope.cn) 高速下载。',
        '跨境数据规制：如数据涉及个人隐私或金融，本地部署是必须的，无例外。',
      ],
    },
    sources: {
      title: '参考资源',
      items: [
        'llama.cpp GPU 卸载文档 -- github.com/ggerganov/llama.cpp/blob/master/docs/backend/CUDA.md',
        'Ollama 模型库 -- ollama.com/library/llama3.3',
        'Apple M5 Max 推理基准 -- github.com/ggerganov/llama.cpp/discussions (社区基准线程)',
        'Meta Llama 3.3 模型卡 -- huggingface.co/meta-llama/Llama-3.3-70B-Instruct',
        'Qwen3 官方文档 -- github.com/QwenLM/Qwen3',
        '中国数据安全法 -- cac.gov.cn (网络安全审查公告)',
      ],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '如何在消费级硬件上运行 70B 本地大模型 (2026)',
    description: '70B 本地大模型运行指南：内存需求、GPU 选项、层卸载技术和量化方案。了解 Llama 3.3 在消费级硬件上的部署方案。',
    url: 'https://www.promptquorum.com/zh/local-llms/70b-models-consumer-hardware',
    author: {
      '@type': 'Organization',
      name: 'PromptQuorum',
    },
    datePublished: '2026-04-04',
    dateModified: '2026-04-10',
    inLanguage: 'zh',
    wordCount: 2800,
    educationalLevel: 'Intermediate',
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '能实用地运行 70B 模型的最便宜硬件是什么？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '截至 2026 年 4 月，二手 Mac Studio M2 Ultra (64 GB 统一内存，约 $2,000) 是以 25+ tok/秒速度进行 70B 推理最便宜的路径。新机等效方案是 M5 Max MacBook Pro 64 GB ($3,500)。',
        },
      },
      {
        '@type': 'Question',
        name: '我能在两个 GPU 上运行 70B 模型吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以 -- llama.cpp 和 Ollama 在 NVIDIA 硬件上支持多 GPU 推理。两个 RTX 4090 可以完整拟合 Q4_K_M 70B 模型到 VRAM。',
        },
      },
      {
        '@type': 'Question',
        name: '70B 本地质量与 GPT-5.5 相比如何？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '在 MMLU 和 HumanEval 基准上，Llama 3.3 70B 和 Qwen3 72B 与 GPT-4 (2023) 相当或略超。对于通用指令跟随、摘要和代码生成，70B 本地模型竞争力相当。',
        },
      },
      {
        '@type': 'Question',
        name: 'Ollama 支持自动运行 70B 模型吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '支持。运行 `ollama run llama3.3:70b` 会下载并运行模型，具有自动 GPU 层卸载。无需手动配置。',
        },
      },
      {
        '@type': 'Question',
        name: '运行 70B 模型消耗多少电力？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mac Studio M2 Ultra 消耗约 30-50 W。负载下的 NVIDIA RTX 4090 消耗 350-450 W。Apple Silicon 能效高 7-10 倍。',
        },
      },
      {
        '@type': 'Question',
        name: '在中国部署 70B 本地模型有特殊考虑吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '是。根据《数据安全法》和 MLPS 要求，本地部署适合处理敏感业务数据。Qwen3 72B 作为国产模型，在国内合规性更优。企业应在 CAC 指导下评估使用场景。',
        },
      },
    ],
  },
  howToSchema: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '在消费级硬件上配置并运行 70B 本地模型',
    step: [
      {
        '@type': 'HowToStep',
        name: '评估您的硬件',
        text: '检查您拥有的内存和 GPU。查阅上述硬件兼容性表确定您的机器是否能运行 70B。',
      },
      {
        '@type': 'HowToStep',
        name: '选择量化等级',
        text: '从 Q4_K_M 开始。如果看到交换使用，降至 Q3_K_S。如果有余量，升至 Q5_K_M。',
      },
      {
        '@type': 'HowToStep',
        name: '安装推理引擎',
        text: '在 Apple Silicon 上安装 Ollama。在 NVIDIA 上安装 Ollama、LM Studio 或 llama.cpp。',
      },
      {
        '@type': 'HowToStep',
        name: '配置层卸载',
        text: '对于 NVIDIA，设置 `OLLAMA_GPU_LAYERS=999` 自动卸载。监控 `ollama ps` 以验证 GPU 层数。',
      },
      {
        '@type': 'HowToStep',
        name: '验证性能',
        text: '运行模型并测量吞吐量。目标 8+ tok/秒用于交互使用，1-3 tok/秒对批处理足够。',
      },
    ],
  },
  itemListSchema: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '硬件选择指南',
        url: '/?lang=zh',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '量化等级对比',
        url: '/?lang=zh',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '模型推荐',
        url: '/?lang=zh',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: '故障排除',
        url: '/?lang=zh',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: '中国合规部署',
        url: '/?lang=zh',
      },
    ],
  },
}
,
  };
