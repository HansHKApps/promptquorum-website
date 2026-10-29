// Auto-generated from src/lib/local-llms/content.ts
// Slug: 70b-models-consumer-hardware
// Generated: 2026-05-03T11:33:08.370Z

import type { Language } from "@/lib/blog/blogContent";

import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
    en: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Run a 70B LLM Locally 2026: RAM, VRAM & Speed by Hardware',
      dateModified: '2026-10-29',
      last_full_refresh: '2026-10-23',
      next_refresh_due: '2027-04-23',
      current_models_mentioned: [
        'Llama 3.3 70B',
        'Qwen2.5 72B',
        'Mistral Large 2',
        'gpt-oss-120b',
        'Llama 4 Scout',
        'Qwen3.8-27B',
      ],
      current_hardware_mentioned: [
        'Mac Studio M5 Max',
        'Mac Studio M5 Ultra',
        'Mac mini M5 Pro',
        'Mac mini M6',
        'Mac Studio M2 Ultra',
        'NVIDIA DGX Spark',
        'AMD Ryzen AI Max+ 395',
        'RTX 5090',
        'RTX 4090',
        'RTX 3090',
        'Olares One',
      ],
      seoTitle: '70B LLM Hardware Requirements 2026: RAM, VRAM, Speed',
      intro: 'Running a 70B model locally takes about 43 GB of fast memory at Q4_K_M, plus 3-10 GB for context. A Mac with 64 GB or more of unified memory, two 24 GB GPUs, or a 128 GB unified-memory box can hold it entirely in fast memory. Speed depends on memory bandwidth: from 1-2 tokens/sec on a desktop CPU to roughly 10 tokens/sec on a Mac Studio M5 Max. Llama 3.3 70B and Qwen2.5 72B are the two main dense 70B-class models.',
      metaDescription: 'A 70B model needs ~43 GB at Q4_K_M plus context. RAM, VRAM and estimated tok/s on Mac, DGX Spark, RTX GPUs and CPU-only PCs, incl. 256 GB RAM.',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-en.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**A 70B model needs about 43 GB of memory at Q4_K_M (Llama 3.3 70B), plus 3-10 GB for context, and its speed is set by memory bandwidth, not capacity. A Mac with 64 GB or more, two 24 GB GPUs, or a 128 GB unified-memory box holds it entirely in fast memory; a single 24 GB GPU or a CPU-only PC runs it at about 1-4 tokens/sec.**',
      audience: 'Developers familiar with Ollama or LM Studio optimizing local LLM workflows',
      readTime: '11 min read',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B local LLM consumer hardware',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is a 70B Model?', anchor: '#what-is-70b' },
        { label: 'What Hardware Do You Need?', anchor: '#what-hardware' },
        { label: 'Memory Requirements by Quantization', anchor: '#ram-requirements' },
        { label: 'Context and KV Cache Memory', anchor: '#context-memory' },
        { label: 'Why Memory Bandwidth Sets Speed', anchor: '#memory-bandwidth' },
        { label: 'Apple Silicon', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark and Unified-Memory PCs', anchor: '#dgx-spark' },
        { label: 'NVIDIA GPU + Layer Offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'Multi-GPU Runtimes', anchor: '#multi-gpu-runtimes' },
        { label: 'CPU-Only 70B Inference', anchor: '#cpu-only' },
        { label: '70B-Class MoE Models', anchor: '#moe-models' },
        { label: 'Which 70B Model Should You Run?', anchor: '#which-model' },
        { label: 'Fine-Tuning a 70B Model', anchor: '#fine-tuning' },
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
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: 'A 70B model needs about 43 GB of memory at Q4_K_M plus 3-10 GB for context, and generates roughly bandwidth divided by model size tokens per second, so a 64 GB+ Mac, two 24 GB GPUs or a 128 GB unified-memory box run it in fast memory while a single 24 GB GPU manages 2-4 tokens/sec.',
            },
            {
              type: 'plain-terms',
              text: 'A 70B model is a very large AI model with about 70 billion adjustable numbers. Loading it takes roughly 43 GB of memory, and how fast it answers depends on how quickly that memory can be read. A Mac with lots of unified memory or two big graphics cards is the comfortable route; a normal PC with one graphics card works but answers slowly.',
            },
          ],
          items: [
            'Memory at Q4_K_M: Llama 3.3 70B is 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB. Context adds about 2.7 GB per 8K tokens.',
            '**Speed rule**: tokens/sec is capped at memory bandwidth divided by model size, and real speed is typically 60-80% of that cap. 43 GB on 614 GB/s gives a cap of about 14 tok/sec.',
            '**Best consumer speed**: a Mac Studio M5 Max configured with 64 GB or more (about 9-11 tok/sec) or two 24 GB GPUs (about 12-17 tok/sec); the Mac Studio M5 Ultra reaches an estimated 17-21 tok/sec.',
            '**Mac mini**: the $1,699 M5 Pro model has 24 GB; 64 GB is a build-to-order upgrade that gives about 4-5 tok/sec. The M6 Mac mini (32 GB max) cannot run 70B.',
            '**DGX Spark**: 128 GB but only 273 GB/s; LMSYS measured 2.7 tok/sec for 70B at FP8. Buy it for CUDA and large MoE models, not for fast dense-70B chat.',
            '**Single 24 GB GPU or CPU only**: about 2-4 tok/sec with an RTX 4090 and fast DDR5, 1-2 tok/sec on a desktop CPU. 256 GB of RAM adds capacity (Q8_0, FP16, long context), not speed.',
            'There is no Qwen3 72B: the 72B model is Qwen2.5 72B. Newer large open models are mostly mixture-of-experts.',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: 'What Is a 70B Model?',
          content: [
            '**A 70B model is a large language model with about 70 billion parameters -- the learned weights that make up the network.** "B" stands for billion. Llama 3.3 70B has 70.6 billion parameters and Qwen2.5 72B has 72.7 billion.',
            'Memory is parameters multiplied by bytes per weight: 16-bit weights take 2 bytes each (about 141 GB), 8-bit (Q8_0) about 1 byte (75 GB), and 4-bit Q4_K_M about 0.6 bytes (43 GB). That is why 70B is the size where consumer hardware first needs 40+ GB of fast memory, while 7B-14B models fit on an ordinary laptop.',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: 'What Hardware Do You Need to Run a 70B LLM Locally?',
          content: [
            '**You need about 43 GB of fast memory for the model plus 3-10 GB for context, held in GPU VRAM, Apple unified memory or system RAM -- and the faster that memory, the faster the model generates.**',
            'Speeds below are single-user chat estimates at short context, derived from memory bandwidth (see "Why Memory Bandwidth Sets Speed"). They are ceilings reduced to a typical 60-80% efficiency, not benchmarks run by PromptQuorum; the DGX Spark figure is the exception and is measured by third parties.',
          ],
          rows: [
            {
              Hardware: 'Mac Studio M5 Max (64-128 GB)',
              'Fits 70B Q4?': 'Yes -- full GPU',
              'Memory bandwidth': 'up to 614 GB/s',
              'Est. speed (Q4_K_M)': '~9-11 tok/s',
              Notes: 'Base config is 36 GB; 64 GB+ is an upgrade',
            },
            {
              Hardware: 'Mac Studio M5 Ultra (96 GB+)',
              'Fits 70B Q4?': 'Yes -- Q8_0 fits',
              'Memory bandwidth': 'up to 1.2 TB/s',
              'Est. speed (Q4_K_M)': '~17-21 tok/s',
              Notes: 'From $5,499 with 96 GB',
            },
            {
              Hardware: 'Mac mini M5 Pro (64 GB)',
              'Fits 70B Q4?': 'Yes -- tight',
              'Memory bandwidth': '307 GB/s',
              'Est. speed (Q4_K_M)': '~4-5 tok/s',
              Notes: '$1,699 base is 24 GB; 64 GB is build-to-order',
            },
            { Hardware: 'Mac mini M6 (32 GB max)', 'Fits 70B Q4?': 'No', 'Memory bandwidth': '170 GB/s', 'Est. speed (Q4_K_M)': 'N/A', Notes: '32 GB max is below the ~43 GB Q4 file' },
            {
              Hardware: 'Mac Studio M2 Ultra (64 GB+, used)',
              'Fits 70B Q4?': 'Yes -- full GPU',
              'Memory bandwidth': '800 GB/s',
              'Est. speed (Q4_K_M)': '~12-15 tok/s',
              Notes: 'Used market only; check the memory size',
            },
            {
              Hardware: 'NVIDIA DGX Spark (128 GB)',
              'Fits 70B Q4?': 'Yes -- Q8_0 fits',
              'Memory bandwidth': '273 GB/s',
              'Est. speed (Q4_K_M)': '~4-5 tok/s',
              Notes: '2.7 tok/s measured at FP8; reported $6,950',
            },
            {
              Hardware: 'AMD Ryzen AI Max+ 395 (128 GB)',
              'Fits 70B Q4?': 'Yes',
              'Memory bandwidth': '256 GB/s',
              'Est. speed (Q4_K_M)': '~4-5 tok/s',
              Notes: 'Mini PCs and laptops; GPU memory share is configurable',
            },
            {
              Hardware: '2x RTX 3090 / 4090 (48 GB)',
              'Fits 70B Q4?': 'Yes -- tight',
              'Memory bandwidth': '936-1,008 GB/s per card',
              'Est. speed (Q4_K_M)': '~12-17 tok/s',
              Notes: 'Q4_K_M plus short context only',
            },
            {
              Hardware: 'RTX 5090 (32 GB) + 64 GB RAM',
              'Fits 70B Q4?': 'Partial offload',
              'Memory bandwidth': '1,792 GB/s VRAM',
              'Est. speed (Q4_K_M)': '~4-6 tok/s',
              Notes: '~70% of layers on GPU, rest in system RAM',
            },
            {
              Hardware: 'RTX 4090 (24 GB) + 64 GB RAM',
              'Fits 70B Q4?': 'Partial offload',
              'Memory bandwidth': '1,008 GB/s VRAM',
              'Est. speed (Q4_K_M)': '~2-4 tok/s',
              Notes: '~55% of layers on GPU, rest in system RAM',
            },
            {
              Hardware: 'Olares One (RTX 5090 Mobile 24 GB + 96 GB RAM)',
              'Fits 70B Q4?': 'Partial offload',
              'Memory bandwidth': 'VRAM not published / RAM ~90 GB/s',
              'Est. speed (Q4_K_M)': '~2-4 tok/s',
              Notes: '24 GB GDDR7 VRAM; $4,999 hardware cost',
            },
            { Hardware: 'CPU only, dual-channel DDR5', 'Fits 70B Q4?': 'Yes -- CPU only', 'Memory bandwidth': '~90 GB/s', 'Est. speed (Q4_K_M)': '~1-2 tok/s', Notes: 'Batch jobs only' },
            {
              Hardware: 'CPU only, 8-12 channel server RAM',
              'Fits 70B Q4?': 'Yes -- CPU only',
              'Memory bandwidth': '350-460 GB/s',
              'Est. speed (Q4_K_M)': '~5-8 tok/s',
              Notes: 'Threadripper PRO / EPYC; 256 GB allows Q8_0',
            },
          ],
          columns: ['Hardware', 'Fits 70B Q4?', 'Memory bandwidth', 'Est. speed (Q4_K_M)', 'Notes'],
          callouts: [
            { type: 'insight', text: '**Olares One** ([olares.com/one](https://www.olares.com/one)) is a compact desktop AI computer with a laptop-class RTX 5090 (24 GB GDDR7 VRAM), an Intel Core Ultra 9 275HX and 96 GB of DDR5-5600 RAM (upgradable to 128 GB, according to Olares). For 70B models it behaves like the RTX 4090 row above: about 55% of a Q4_K_M model fits in VRAM and the rest is read from system RAM, so expect roughly 2-4 tokens/sec (an estimate, not a benchmark). The 96 GB of RAM adds capacity, not speed: Q8_0 (75 GB) fits with room left for context. Olares lists a $4,999 hardware cost and publishes no 70B tokens/sec figures.' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: 'How Much RAM or VRAM Does a 70B Model Need at Each Quantization Level?',
          content: 'Sizes below are the Llama 3.3 70B files in the Ollama library; other 70B models differ by a few percent. These are weights only -- add the context memory from the next section.',
          rows: [
            { Quantization: 'FP16 (full precision)', 'Memory (weights)': '~141 GB', Quality: 'Reference quality', 'Practical?': '192 GB+ Mac Ultra or 256 GB RAM server' },
            { Quantization: 'Q8_0', 'Memory (weights)': '~75 GB', Quality: 'Near-lossless', 'Practical?': '96-128 GB unified memory or 128 GB RAM' },
            { Quantization: 'Q6_K', 'Memory (weights)': '~58 GB', Quality: 'Very close to Q8_0', 'Practical?': '72-96 GB machines' },
            { Quantization: 'Q5_K_M', 'Memory (weights)': '~50 GB', Quality: 'Minimal loss', 'Practical?': '64 GB Mac after raising the GPU limit -- tight' },
            { Quantization: 'Q4_K_M', 'Memory (weights)': '~43 GB', Quality: 'Low loss -- default', 'Practical?': 'Yes -- 64 GB Mac or 48 GB dual GPU' },
            { Quantization: 'Q3_K_S', 'Memory (weights)': '~31 GB', Quality: 'Moderate loss', 'Practical?': 'Yes -- 40-48 GB machines' },
            { Quantization: 'Q2_K', 'Memory (weights)': '~26 GB', Quality: 'High loss', 'Practical?': 'Not recommended' },
          ],
          columns: ['Quantization', 'Memory (weights)', 'Quality', 'Practical?'],
        },
        contextMemory: {
          id: 'context-memory',
          title: 'How Much Extra Memory Does Context Add to a 70B Model?',
          content: [
            '**Context adds memory on top of the weights: Llama 3.3 70B stores about 0.33 MB of KV cache per token at FP16, which is roughly 2.7 GB at 8K tokens, 10.7 GB at 32K and 43 GB at 128K.** The figure comes from the model architecture: 80 layers x 8 key-value heads x 128 dimensions x 2 (keys and values) x 2 bytes = 327,680 bytes per token.',
            'Each concurrent session keeps its own KV cache while the weights are shared. A multi-agent system with four agents at 32K tokens each needs about 43 GB of weights plus 43 GB of cache. Enabling flash attention and an 8-bit KV cache in Ollama (OLLAMA_FLASH_ATTENTION=1 and OLLAMA_KV_CACHE_TYPE=q8_0) roughly halves the cache.',
          ],
          rows: [
            { 'Context length': '8K tokens', 'KV cache (FP16)': '~2.7 GB', 'Total with Q4_K_M': '~46 GB' },
            { 'Context length': '32K tokens', 'KV cache (FP16)': '~10.7 GB', 'Total with Q4_K_M': '~54 GB' },
            { 'Context length': '128K tokens', 'KV cache (FP16)': '~43 GB', 'Total with Q4_K_M': '~86 GB' },
          ],
          columns: ['Context length', 'KV cache (FP16)', 'Total with Q4_K_M'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: 'Why Does Memory Bandwidth Set the Speed of a 70B Model?',
          content: [
            '**Every generated token reads all the model weights once, so decode speed is capped at memory bandwidth divided by model size.** A 43 GB Q4_K_M model on 614 GB/s of bandwidth is capped at about 14 tokens/sec; real speed is typically 60-80% of the cap.',
            'The same rule explains why large memory is not the same as fast: the 128 GB DGX Spark has 273 GB/s, a cap of about 6 tokens/sec at Q4_K_M, and LMSYS measured 2.7 tokens/sec for Llama 3.1 70B at FP8 (about 70 GB, cap 3.9). Capacity decides whether a model runs; bandwidth decides how fast. Prompt processing (prefill) is compute-bound and behaves differently.',
          ],
          rows: [
            { Memory: 'Dual-channel DDR5-5600', Bandwidth: '~90 GB/s', 'Cap at 43 GB': '~2 tok/s' },
            { Memory: 'AMD Ryzen AI Max+ 395', Bandwidth: '256 GB/s', 'Cap at 43 GB': '~6 tok/s' },
            { Memory: 'NVIDIA DGX Spark', Bandwidth: '273 GB/s', 'Cap at 43 GB': '~6 tok/s' },
            { Memory: 'Apple M5 Pro', Bandwidth: '307 GB/s', 'Cap at 43 GB': '~7 tok/s' },
            { Memory: 'Apple M5 Max', Bandwidth: 'up to 614 GB/s', 'Cap at 43 GB': '~14 tok/s' },
            { Memory: 'Apple M2 Ultra', Bandwidth: '800 GB/s', 'Cap at 43 GB': '~19 tok/s' },
            { Memory: 'Apple M5 Ultra', Bandwidth: 'up to 1.2 TB/s', 'Cap at 43 GB': '~28 tok/s' },
          ],
          columns: ['Memory', 'Bandwidth', 'Cap at 43 GB'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: 'Is Apple Silicon a Good Choice for 70B Models?',
          content: [
            '**Apple Silicon is the simplest way to hold a 70B model entirely in GPU-accessible memory, because the CPU and GPU share one unified memory pool.** A Mac with 64 GB or more runs Q4_K_M with no layer offloading, at a speed set by the chip bandwidth: roughly 9-11 tokens/sec on an M5 Max and 12-15 on a used M2 Ultra (estimates). We found no published 70B benchmarks for the M5 chips yet.',
            'Apple announced the Mac Studio with M5 Max and M5 Ultra on August 25, 2026; both shipped September 22, 2026. The M5 Max starts at $2,499 with 36 GB and goes up to 128 GB at up to 614 GB/s -- configure 64 GB or more for 70B. The M5 Ultra starts at $5,499 with 96 GB, goes up to 512 GB at up to 1.2 TB/s, and runs Q8_0 comfortably; the 512 GB configuration was listed as arriving in late October.',
            '**The Mac mini M5 Pro starts at $1,699 with 24 GB, not 64 GB.** The 64 GB build-to-order configuration (307 GB/s, Thunderbolt 5) holds a Q4_K_M 70B model but generates only about 4-5 tokens/sec, and reviews put it at roughly $2,700-$3,200 depending on CPU and storage. The base Mac mini M6 ($899) maxes out at 32 GB and 170 GB/s and cannot run a 70B model at any quantization.',
            'macOS limits GPU-addressable memory to roughly 75% of RAM by default (about 48 GB on a 64 GB Mac). To run Q5_K_M (50 GB) raise the limit, for example sudo sysctl iogpu.wired_limit_mb=57344 on a 64 GB Mac; the setting resets on reboot and leaves the OS only about 8 GB.',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: 'Is the NVIDIA DGX Spark (or a 128 GB Strix Halo PC) Good for 70B Models?',
          content: [
            '**The NVIDIA DGX Spark is a compact desktop AI computer with 128 GB of unified LPDDR5x memory at 273 GB/s, built on the GB10 Grace Blackwell Superchip with CUDA support.** It loads a 70B model even at Q8_0 (75 GB), but bandwidth limits generation: LMSYS measured 2.7 tokens/sec decode for Llama 3.1 70B at FP8, and community llama.cpp runs at Q4_K_M are reported in the 4-5 tokens/sec range.',
            'Pricing has moved sharply. NVIDIA raised the Founders Edition from $3,999 to $4,699 in February 2026 because of memory supply constraints, and a price of $6,950 was reported in October 2026, together with a 64 GB version at $4,999 sold by partners from October 23, 2026. Check live prices before buying.',
            'The AMD Ryzen AI Max+ 395 ("Strix Halo") mini PCs and laptops offer 128 GB of LPDDR5X at 256 GB/s, the same class of bandwidth, and a similar estimate of about 4-5 tokens/sec for a dense 70B model. Both platforms are better matched to mixture-of-experts models (see below) and CUDA or fine-tuning work than to dense-70B chat.',
          ],
          rows: [
            { Spec: 'Memory', Value: '128 GB unified LPDDR5x' },
            { Spec: 'Memory bandwidth', Value: '273 GB/s' },
            { Spec: '70B at Q8_0 (75 GB)', Value: 'Fits' },
            { Spec: '70B decode, measured', Value: '2.7 tok/s at FP8 (LMSYS, SGLang)' },
            { Spec: 'Max model size', Value: '~200B parameters at FP4' },
            { Spec: 'Price', Value: '$6,950 reported; $4,699 Feb 2026 list' },
            { Spec: 'Ollama command', Value: 'ollama run llama3.3:70b' },
          ],
          columns: ['Spec', 'Value'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: 'How Does NVIDIA GPU + Layer Offloading Work for 70B Models?',
          content: [
            '**Ollama and llama.cpp split a model between GPU VRAM and system RAM: layers in VRAM run at GPU speed, layers in RAM run at CPU memory speed, and the slow part dominates.** With an RTX 4090 (24 GB) about 55% of a Q4_K_M 70B model fits on the GPU and the rest streams from DDR5 at roughly 90 GB/s, which limits generation to about 2-4 tokens/sec. An RTX 5090 (32 GB) holds about 70% and reaches an estimated 4-6 tokens/sec.',
            'Ollama offloads automatically; no flag is needed. Run ollama ps to see the split (the PROCESSOR column, for example 45%/55% CPU/GPU). In llama.cpp, set the layer count with -ngl.',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: 'Which Inference Runtime Is Best for a 70B Model on Multiple GPUs?',
          content: [
            '**For one user, Ollama or llama.cpp with layer splitting is the simplest multi-GPU path; for several concurrent users or agents, vLLM or SGLang with tensor parallelism delivers far more total throughput.** Two 24 GB cards (RTX 3090 or 4090) give 48 GB, enough for Q4_K_M plus a short context.',
            'Layer splitting passes activations between cards once per token and works over plain PCIe, so it suits mixed or consumer cards. Tensor parallelism splits each layer across GPUs and benefits from fast links: the RTX 3090 supports an NVLink bridge, while the RTX 4090 and 5090 do not.',
          ],
          rows: [
            { Runtime: 'Ollama', 'Multi-GPU method': 'Automatic layer split', 'Best for': 'One user, easiest setup' },
            { Runtime: 'llama.cpp', 'Multi-GPU method': '--split-mode, --tensor-split', 'Best for': 'Mixed GPUs, GGUF quants' },
            { Runtime: 'vLLM', 'Multi-GPU method': '--tensor-parallel-size N', 'Best for': 'Many users or agents; AWQ/GPTQ/FP8' },
            { Runtime: 'SGLang', 'Multi-GPU method': 'Tensor parallelism', 'Best for': 'Agents with shared prompt prefixes' },
            { Runtime: 'TensorRT-LLM', 'Multi-GPU method': 'Tensor / pipeline parallel', 'Best for': 'Max NVIDIA throughput; engine build' },
          ],
          columns: ['Runtime', 'Multi-GPU method', 'Best for'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: 'Is CPU-Only 70B Inference Practical, and Does 256 GB of RAM Help?',
          content: [
            '**CPU-only 70B inference is limited by memory bandwidth: dual-channel desktop DDR5 (about 90 GB/s) gives roughly 1-2 tokens/sec at Q4_K_M, and adding RAM capacity does not make it faster.** At 1.5 tokens/sec a 200-word reply (about 270 tokens) takes around three minutes.',
            '256 GB of RAM changes what fits, not how fast it runs: it holds Q8_0 (75 GB) or FP16 (141 GB) with long context. Speed depends on memory channels -- an 8-channel Threadripper PRO or 12-channel EPYC server has three to five times the bandwidth of a desktop. Desktop boards with four large DIMMs often run their memory slower than with two. Prompt processing on CPU is also slow for long inputs.',
            'The estimates below apply the bandwidth rule at 70% efficiency; they are not measured benchmarks.',
          ],
          rows: [
            { 'CPU / RAM setup': 'Desktop, 2-ch DDR5-5600', Bandwidth: '~90 GB/s', 'Q4_K_M (43 GB)': '~1-1.5 tok/s', 'Q8_0 (75 GB)': '~0.6-0.9 tok/s', 'FP16 (141 GB)': '~0.3-0.5 tok/s' },
            { 'CPU / RAM setup': 'Threadripper PRO, 8-ch DDR5-5600', Bandwidth: '~358 GB/s', 'Q4_K_M (43 GB)': '~5-6 tok/s', 'Q8_0 (75 GB)': '~3-3.5 tok/s', 'FP16 (141 GB)': '~1.5-1.8 tok/s' },
            { 'CPU / RAM setup': 'EPYC, 12-ch DDR5-4800', Bandwidth: '~461 GB/s', 'Q4_K_M (43 GB)': '~7-8 tok/s', 'Q8_0 (75 GB)': '~4-4.5 tok/s', 'FP16 (141 GB)': '~2-2.5 tok/s' },
          ],
          columns: ['CPU / RAM setup', 'Bandwidth', 'Q4_K_M (43 GB)', 'Q8_0 (75 GB)', 'FP16 (141 GB)'],
        },
        moe: {
          id: 'moe-models',
          title: 'Do 70B-Class MoE Models Change the Hardware Math?',
          content: [
            '**Mixture-of-experts (MoE) models need memory for all their parameters but read only the active experts for each token, so they generate much faster than a dense 70B model with the same memory footprint.** OpenAI gpt-oss-120b has about 117 billion parameters with about 5.1 billion active; Meta Llama 4 Scout has 109 billion with 17 billion active.',
            'The bandwidth rule applies to the active weights, so MoE models make the best use of high-capacity, moderate-bandwidth machines such as the DGX Spark, Ryzen AI Max+ 395 PCs and a 64 GB Mac mini M5 Pro. For a dense 70B model on that hardware, expect 4-5 tokens/sec; check each MoE model file size against your memory before downloading.',
          ],
        },
        which70b: {
          id: 'which-model',
          title: 'Which 70B Model Should You Run Locally?',
          content: [
            '**Llama 3.3 70B is the default dense 70B model: Meta reports 86.0 on MMLU (CoT) and 88.4 on HumanEval, with a 128K context window.** Qwen2.5 72B is the main alternative for multilingual and coding use. There is no Qwen3 72B -- Qwen3 dense models stop at 32B -- so a "Qwen3 72B" reference means Qwen2.5 72B.',
            'Commands: ollama run llama3.3:70b, ollama run qwen2.5:72b, ollama run deepseek-r1:70b.',
          ],
          rows: [
            { Model: 'Llama 3.3 70B', Parameters: '70.6B dense', License: 'Llama 3.3 Community License', 'Best for': 'General English, instruction following' },
            { Model: 'Qwen2.5 72B Instruct', Parameters: '72.7B dense', License: 'Qwen License', 'Best for': 'Multilingual, coding; 131K with YaRN' },
            { Model: 'DeepSeek-R1-Distill-Llama-70B', Parameters: '70B dense', License: 'See model card', 'Best for': 'Reasoning; long outputs slow replies' },
            { Model: 'Mistral Large 2', Parameters: '123B dense', License: 'Mistral Research License', 'Best for': 'Research only; ~75 GB at Q4' },
          ],
          columns: ['Model', 'Parameters', 'License', 'Best for'],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: 'What Hardware Do You Need to Fine-Tune a 70B Model?',
          content: [
            '**QLoRA fine-tuning of a 70B model needs roughly 35-48 GB of GPU memory per run: two 24 GB GPUs with FSDP+QLoRA, or a single 48-80 GB GPU.** QLoRA keeps the base model in 4-bit (about 35 GB) and trains small adapters; Answer.AI demonstrated this on two 24 GB gaming GPUs.',
            'Full 16-bit fine-tuning needs about 16 bytes per parameter for weights, gradients and optimizer states -- on the order of 1 TB -- which is a multi-GPU server job. Renting an 80 GB cloud GPU is usually more practical than building hardware for occasional runs.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Running 70B Models Locally: Regional Context',
          content: [
            '**EU / GDPR**: A 70B local model is the practical ceiling of privately runnable AI quality for most organizations. Processing legal, medical or financial documents on-premises keeps prompts and outputs inside your own infrastructure, which supports data-minimization and transfer-risk controls; it does not by itself make a deployment GDPR-compliant, so assess the whole processing activity.',
            'For organizations that require EU-supply-chain hardware, Apple (USA) and NVIDIA (USA) are non-EU vendors; Dell, HP and Lenovo sell GB10-based systems with local support. On the model side, Mistral Large 2 comes from an EU developer but is released under a research license that does not cover commercial use.',
            '**Japan**: Qwen2.5 72B is a common choice for Japanese text: `ollama run qwen2.5:72b`. Documenting hardware and model versions (the `ollama ps` output identifies the loaded model) supports internal governance under the Japanese AI guidelines for business.',
            '**China**: Locally hosted Qwen2.5 72B keeps data on your own infrastructure, which is relevant to China\'s Data Security Law (数据安全法). Whether an internally served model falls under the CAC generative-AI rules depends on whether it is offered to the public; confirm with qualified counsel.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'What Are the Common Mistakes When Running 70B Models on Consumer Hardware?',
          faqs: [
            {
              q: 'Buying a GPU with less than 24 GB VRAM and expecting full 70B performance',
              a: 'A 12 GB card holds about a quarter of a Q4_K_M 70B model; the rest runs from system RAM, so speed is close to CPU-only. Even a 24 GB RTX 4090 manages only about 2-4 tok/sec. For interactive speed use 48 GB of VRAM, a 64 GB+ Apple Silicon Mac, or a smaller 27B-34B model.',
            },
            {
              q: 'Assuming a large-memory box is also a fast one',
              a: 'The DGX Spark and Ryzen AI Max+ 395 systems have 128 GB but only 256-273 GB/s of bandwidth, so a dense 70B model runs at about 3-5 tok/sec. A Mac Studio M5 Max with 64 GB has more than twice the bandwidth. Check bandwidth, not only capacity.',
            },
            {
              q: 'Not checking how much of the model runs on the GPU',
              a: 'Ollama offloads automatically, but a tight fit can leave layers on the CPU. Run `ollama ps` after loading and read the PROCESSOR column; "100% GPU" is the goal, and a CPU share explains slow output. Reduce context length or drop to Q3_K_S if the split is poor.',
            },
            {
              q: 'Forgetting that context needs memory too',
              a: 'A Q4_K_M 70B model is 43 GB, but a 32K context adds about 10.7 GB and 128K adds about 43 GB at FP16. A machine that fits the weights can still run out of memory at long context. Use an 8-bit KV cache or shorter context.',
            },
            {
              q: 'Running Q5_K_M or Q8_0 when speed matters',
              a: 'Every token reads the whole model, so Q8_0 (75 GB) runs at roughly half the speed of Q4_K_M (43 GB) on the same hardware. On bandwidth-limited machines (DGX Spark, Strix Halo, Mac mini) choose Q4_K_M for chat and use Q8_0 only when quality is the priority.',
            },
            {
              q: 'Ordering the $1,699 Mac mini M5 Pro and expecting 70B to run',
              a: 'The $1,699 M5 Pro Mac mini has 24 GB of unified memory. A 70B model needs the 64 GB build-to-order configuration, and the base Mac mini M6 ($899, 32 GB maximum) cannot run it at all. Confirm "M5 Pro" and 64 GB before ordering.',
            },
            {
              q: 'Hitting the default macOS GPU memory limit',
              a: 'By default macOS lets the GPU use roughly 75% of RAM, about 48 GB on a 64 GB Mac. Q4_K_M fits; Q5_K_M (50 GB) does not until you raise `iogpu.wired_limit_mb`.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide) -- full GPU and RAM tier table for every model size including 70B hardware requirements',
            '[Running 70B Models on 24 GB VRAM](/local-llms/run-70b-models-24gb-vram) -- quantization and offloading options when a single GPU is all you have',
            '[Running 70B Models on Apple Silicon M5 Max](/local-llms/running-70b-models-apple-silicon-m5-max) -- Mac-specific setup with Ollama and MLX',
            '[RTX 5090 vs RTX 4090 for Local LLMs](/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- how 32 GB versus 24 GB of VRAM changes offloading',
            '[Mac mini M5 as a Local AI Server](/local-llms/mac-mini-m5-local-ai-server) -- what the Mac mini lineup can and cannot run',
            '[LLM Quantization Explained](/local-llms/llm-quantization-explained) -- understand Q4_K_M vs Q8_0 and the speed cost of higher precision',
            '[How to Install Ollama](/local-llms/how-to-install-ollama) -- complete setup including GPU layer configuration',
            '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) -- detailed comparison of the main open model families',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Common Questions About Running 70B Models on Consumer Hardware',
          faqs: [
            {
              q: 'What hardware do I need to run a 70B LLM locally?',
              a: 'You need about 43 GB of fast memory for Llama 3.3 70B at Q4_K_M, plus 3-10 GB for context. Three setups hold the whole model in fast memory: an Apple Silicon Mac with 64 GB or more unified memory, two 24 GB NVIDIA GPUs (48 GB total VRAM), or a 128 GB unified-memory box such as the NVIDIA DGX Spark or an AMD Ryzen AI Max+ 395 mini PC. Capacity decides whether the model runs; memory bandwidth decides how fast. A single 24 GB GPU or a CPU-only PC can run it, but only at about 1-4 tokens/sec.',
            },
            {
              q: 'What is a 70B model?',
              a: 'A 70B model is a large language model with about 70 billion parameters (weights). Llama 3.3 70B has 70.6 billion and Qwen2.5 72B has 72.7 billion. The file size follows from the parameter count: about 141 GB at 16-bit, 75 GB at 8-bit (Q8_0) and 43 GB at 4-bit (Q4_K_M).',
            },
            {
              q: 'How much VRAM or RAM do I need for a 70B model?',
              a: 'Llama 3.3 70B needs 43 GB at Q4_K_M, 50 GB at Q5_K_M, 75 GB at Q8_0 and 141 GB at FP16 (Ollama library sizes), plus the KV cache for context: about 2.7 GB at 8K tokens, 10.7 GB at 32K and 43 GB at 128K. With 24 GB of VRAM only about half of a Q4_K_M model fits on the GPU, and the rest runs from system RAM.',
            },
            {
              q: 'What is the cheapest hardware that can run a 70B model usably?',
              a: 'For about 10 tokens/sec or more, the practical options are a Mac Studio M5 Max configured with 64 GB or more (the $2,499 base model has 36 GB), a used Mac Studio M2 Ultra with 64 GB or more, or two used 24 GB GPUs. The cheapest new Apple option is the Mac mini M5 Pro with 64 GB: the $1,699 base model has only 24 GB, and reviews put 64 GB configurations at roughly $2,700-$3,200. Its 307 GB/s bandwidth limits it to roughly 4-5 tokens/sec. GPU street prices are volatile: RTX 5090 listings were reported far above the $1,999 launch price in October 2026, so check live prices.',
            },
            {
              q: 'Can I run a 70B model on a single 24 GB GPU?',
              a: 'Yes, but slowly. A 24 GB card such as the RTX 4090 holds about 55% of a Q4_K_M 70B model; the remaining layers run from system RAM at CPU memory speed, which gives roughly 2-4 tokens/sec with fast DDR5. For interactive speed, use a smaller model (27B-34B fits in 24 GB, for example Qwen3.8-27B), two GPUs, or a 64 GB+ unified-memory machine.',
            },
            {
              q: 'Can I run a 70B model on two GPUs?',
              a: 'Yes. Two 24 GB cards (RTX 3090 or 4090) provide 48 GB of VRAM, which fits a Q4_K_M 70B model (43 GB) with a short context of a few thousand tokens. Ollama and llama.cpp split the layers across both cards automatically or with --tensor-split. Expect roughly 12-17 tokens/sec as an estimate, because every token passes through both cards in sequence.',
            },
            {
              q: 'What is the best inference runtime for running 70B LLMs on multi-GPU hardware?',
              a: 'For one user, Ollama or llama.cpp with layer splitting is the simplest and works with mixed GPUs. For several concurrent users or agents, vLLM with --tensor-parallel-size set to the GPU count, or SGLang, delivers much higher total throughput because it batches requests; both prefer identical GPUs and AWQ, GPTQ or FP8 weights. TensorRT-LLM gives the highest NVIDIA throughput but needs an engine build step.',
            },
            {
              q: 'How much GPU memory does a multi-agent system with 70B backends need?',
              a: 'Budget the weights once plus one KV cache per concurrent session. Llama 3.3 70B at Q4_K_M needs about 43 GB for weights; each active session adds about 0.33 MB per token of context at FP16. Four agents at 32K tokens each therefore need about 43 GB + 43 GB = 86 GB. Serve all agents from one shared server (vLLM, SGLang or llama.cpp with parallel slots) rather than loading one copy of the model per agent.',
            },
            {
              q: 'Does 256 GB of RAM help CPU inference of a 70B model?',
              a: 'It helps capacity, not speed. 256 GB lets you load Q8_0 (75 GB) or FP16 (141 GB) with long context, but decode speed is limited by memory channels: roughly 0.5-1.5 tokens/sec on a dual-channel desktop, about 3-6 on an 8-channel Threadripper PRO and about 4-8 on a 12-channel EPYC at Q4_K_M to Q8_0 (estimates from memory bandwidth, not benchmarks we ran).',
            },
            {
              q: 'Can the Mac mini M6 run a 70B model?',
              a: 'No. The Mac mini M6 ($899 starting) maxes out at 32 GB of unified memory and 170 GB/s bandwidth, below the 43 GB a Q4_K_M 70B model needs. The Mac mini M5 Pro (from $1,699, 307 GB/s, Thunderbolt 5) can be configured with up to 64 GB; the base $1,699 model has 24 GB, so order the 64 GB build-to-order configuration. Both shipped on September 22, 2026.',
            },
            {
              q: 'What is the NVIDIA DGX Spark and is it worth it for 70B inference?',
              a: 'The DGX Spark is NVIDIA\'s compact desktop AI computer with 128 GB of unified LPDDR5x memory at 273 GB/s. It loads 70B models at Q8_0 but is bandwidth-limited: LMSYS measured 2.7 tokens/sec decode for Llama 3.1 70B at FP8. It is better suited to CUDA work, fine-tuning and large MoE models than to fast dense-70B chat. NVIDIA raised the Founders Edition from $3,999 to $4,699 in February 2026 and a price of $6,950 was reported in October 2026, alongside a 64 GB version at $4,999 from partners.',
            },
            {
              q: 'How does 70B local quality compare to cloud models?',
              a: 'Meta reports 86.0 on MMLU (CoT) and 88.4 on HumanEval for Llama 3.3 70B Instruct. Frontier cloud models released since then score higher on reasoning-heavy tasks, while 70B local models remain competitive for summarization, extraction, drafting and routine code generation. Test both on your own prompts, for example with [PromptQuorum](/), before investing in 70B hardware.',
            },
            {
              q: 'How much electricity does running a 70B model use?',
              a: 'A GPU draws up to its board power while generating: 350 W for an RTX 3090, 450 W for an RTX 4090 and 575 W for an RTX 5090. At $0.15 per kWh, an RTX 4090 at full load costs about $0.07 per hour for the GPU alone. Apple Silicon and unified-memory boxes draw much less power for the same model, but at lower speed.',
            },
            {
              q: 'Are 70B models worth it compared to smaller models for everyday tasks?',
              a: 'For complex reasoning, long-document analysis and nuanced writing, usually yes. For simple summarization, Q&A and classification, a 7B-14B model often produces similar output at a fraction of the hardware cost. Run both on your own prompts before investing in 70B hardware.',
            },
            {
              q: 'Can I fine-tune a 70B model on consumer hardware?',
              a: 'Only with QLoRA. QLoRA keeps the base model in 4-bit (about 35 GB) and trains small adapters; Answer.AI showed FSDP+QLoRA training a 70B model on two 24 GB gaming GPUs. Full 16-bit fine-tuning needs on the order of 1 TB of memory and is a multi-GPU server job. For anything beyond occasional QLoRA runs, renting an 80 GB cloud GPU is usually more practical.',
            },
            {
              q: 'What is the best quantization for 70B on Apple Silicon?',
              a: 'On a 64 GB Mac, use Q4_K_M (43 GB). macOS limits GPU-addressable memory to roughly 75% of RAM by default (about 48 GB on a 64 GB Mac), so Q5_K_M (50 GB) only works after raising the limit with sysctl iogpu.wired_limit_mb, and leaves little headroom. On 96-128 GB, Q8_0 (75 GB) is the near-lossless choice, at roughly half the speed of Q4_K_M because every token reads twice as many bytes.',
            },
            {
              q: 'Does Ollama choose the best quantization automatically?',
              a: 'No. ollama run llama3.3:70b downloads the default Q4_K_M (43 GB). Name the tag for another level, for example ollama run llama3.3:70b-instruct-q5_K_M or ollama run llama3.3:70b-instruct-q8_0. Run ollama ps after loading: the PROCESSOR column shows how much of the model runs on GPU versus CPU.',
            },
            {
              q: 'Can an iPhone or laptop run a 70B model?',
              a: 'Not an iPhone: current iPhones have 8-12 GB of RAM, while a Q4_K_M 70B model needs about 43 GB, so phones run 1B-8B models. Laptops can only with 64 GB+ of unified memory (high-end MacBook Pro configurations) or an AMD Ryzen AI Max+ 395 system with 128 GB. Gaming laptops with 16-24 GB of VRAM, such as an ASUS ROG Strix, fall into the slow partial-offload case.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[Ollama: Llama 3.3 tags and sizes](https://ollama.com/library/llama3.3/tags) -- Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB',
            '[Meta Llama 3.3 70B Instruct model card](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU (CoT) 86.0, HumanEval 88.4, 128K context, license',
            '[Qwen2.5 72B Instruct model card](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 72.7B parameters, 131K context with YaRN',
            '[Mistral Large Instruct 2407 model card](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 123B parameters, Mistral Research License',
            '[LMSYS: NVIDIA DGX Spark in-depth review](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B FP8 at 2.7 tok/s decode, 273 GB/s',
            '[Apple Newsroom: Mac mini with M6 and M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- prices, memory, bandwidth',
            '[9to5Mac: Mac Studio with M5 Max and M5 Ultra](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- prices, base and maximum memory, bandwidth',
            '[NVIDIA developer forum: DGX Spark price change](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- $3,999 to $4,699',
            '[TechnoEdge: DGX Spark price increase and 64 GB model](https://www.techno-edge.net/article/2026/10/08/5565.html) -- reported $6,950 and $4,999 prices',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- 64 GB / 1 TB configuration listed at $3,199',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- memory upgrade pricing for 48 GB and 64 GB',
            '[Answer.AI: train a 70B model at home](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- FSDP + QLoRA on two 24 GB GPUs',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) -- GPU offloading and multi-GPU split documentation',
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile with 24 GB GDDR7, 96 GB DDR5, $4,999 hardware cost',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Run a 70B LLM Locally 2026: RAM, VRAM & Speed by Hardware',
        description: 'A 70B model needs ~43 GB at Q4_K_M plus context. RAM, VRAM and estimated tok/s on Mac, DGX Spark, RTX GPUs and CPU-only PCs, incl. 256 GB RAM.',
        url: 'https://www.promptquorum.com/local-llms/70b-models-consumer-hardware',
        datePublished: '2026-04-04',
        dateModified: '2026-10-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '70B language model' },
          { '@type': 'Thing', name: 'Apple Silicon inference' },
          { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
          { '@type': 'Thing', name: 'Layer offloading' },
          { '@type': 'Thing', name: 'Llama 3.3 70B' },
          { '@type': 'Thing', name: 'Qwen2.5 72B' },
          { '@type': 'Thing', name: 'NVIDIA DGX Spark' },
          { '@type': 'Thing', name: 'Apple Mac mini M5 Pro' },
          { '@type': 'Thing', name: 'Memory bandwidth' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'llama.cpp' },
          { '@type': 'SoftwareApplication', name: 'vLLM' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Run a 70B Model on Consumer Hardware with Ollama',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Verify you have 48+ GB of fast memory (unified memory, VRAM or RAM) for the model plus context',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Install Ollama from ollama.com',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Run: ollama run llama3.3:70b',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Check the CPU/GPU split with: ollama ps',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Adjust quantization if memory is tight: use the q3_K_S tag, or shorten the context',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Hardware for Running a 70B Local LLM 2026',
        numberOfItems: 12,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Mac Studio M5 Max (64-128 GB)',
            description: 'Yes -- full GPU. ~9-11 tok/s (estimate). Base config is 36 GB; 64 GB+ is an upgrade.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mac Studio M5 Ultra (96 GB+)',
            description: 'Yes -- Q8_0 fits. ~17-21 tok/s (estimate). From $5,499 with 96 GB.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mac mini M5 Pro (64 GB)',
            description: 'Yes -- tight. ~4-5 tok/s (estimate). $1,699 base is 24 GB; 64 GB is build-to-order.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Mac mini M6 (32 GB max)',
            description: 'No. N/A (estimate). 32 GB max is below the ~43 GB Q4 file.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mac Studio M2 Ultra (64 GB+, used)',
            description: 'Yes -- full GPU. ~12-15 tok/s (estimate). Used market only; check the memory size.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NVIDIA DGX Spark (128 GB)',
            description: 'Yes -- Q8_0 fits. ~4-5 tok/s (estimate). 2.7 tok/s measured at FP8; reported $6,950.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'AMD Ryzen AI Max+ 395 (128 GB)',
            description: 'Yes. ~4-5 tok/s (estimate). Mini PCs and laptops; GPU memory share is configurable.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '2x RTX 3090 / 4090 (48 GB)',
            description: 'Yes -- tight. ~12-17 tok/s (estimate). Q4_K_M plus short context only.',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'RTX 5090 (32 GB) + 64 GB RAM',
            description: 'Partial offload. ~4-6 tok/s (estimate). ~70% of layers on GPU, rest in system RAM.',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'RTX 4090 (24 GB) + 64 GB RAM',
            description: 'Partial offload. ~2-4 tok/s (estimate). ~55% of layers on GPU, rest in system RAM.',
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: 'CPU only, dual-channel DDR5',
            description: 'Yes -- CPU only. ~1-2 tok/s (estimate). Batch jobs only.',
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: 'CPU only, 8-12 channel server RAM',
            description: 'Yes -- CPU only. ~5-8 tok/s (estimate). Threadripper PRO / EPYC; 256 GB allows Q8_0.',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What hardware do I need to run a 70B LLM locally?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You need about 43 GB of fast memory for Llama 3.3 70B at Q4_K_M, plus 3-10 GB for context. Three setups hold the whole model in fast memory: an Apple Silicon Mac with 64 GB or more unified memory, two 24 GB NVIDIA GPUs (48 GB total VRAM), or a 128 GB unified-memory box such as the NVIDIA DGX Spark or an AMD Ryzen AI Max+ 395 mini PC. Capacity decides whether the model runs; memory bandwidth decides how fast. A single 24 GB GPU or a CPU-only PC can run it, but only at about 1-4 tokens/sec.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is a 70B model?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A 70B model is a large language model with about 70 billion parameters (weights). Llama 3.3 70B has 70.6 billion and Qwen2.5 72B has 72.7 billion. The file size follows from the parameter count: about 141 GB at 16-bit, 75 GB at 8-bit (Q8_0) and 43 GB at 4-bit (Q4_K_M).',
            },
          },
          {
            '@type': 'Question',
            name: 'How much VRAM or RAM do I need for a 70B model?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70B needs 43 GB at Q4_K_M, 50 GB at Q5_K_M, 75 GB at Q8_0 and 141 GB at FP16 (Ollama library sizes), plus the KV cache for context: about 2.7 GB at 8K tokens, 10.7 GB at 32K and 43 GB at 128K. With 24 GB of VRAM only about half of a Q4_K_M model fits on the GPU, and the rest runs from system RAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the cheapest hardware that can run a 70B model usably?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For about 10 tokens/sec or more, the practical options are a Mac Studio M5 Max configured with 64 GB or more (the $2,499 base model has 36 GB), a used Mac Studio M2 Ultra with 64 GB or more, or two used 24 GB GPUs. The cheapest new Apple option is the Mac mini M5 Pro with 64 GB: the $1,699 base model has only 24 GB, and reviews put 64 GB configurations at roughly $2,700-$3,200. Its 307 GB/s bandwidth limits it to roughly 4-5 tokens/sec. GPU street prices are volatile: RTX 5090 listings were reported far above the $1,999 launch price in October 2026, so check live prices.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I run a 70B model on a single 24 GB GPU?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, but slowly. A 24 GB card such as the RTX 4090 holds about 55% of a Q4_K_M 70B model; the remaining layers run from system RAM at CPU memory speed, which gives roughly 2-4 tokens/sec with fast DDR5. For interactive speed, use a smaller model (27B-34B fits in 24 GB, for example Qwen3.8-27B), two GPUs, or a 64 GB+ unified-memory machine.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I run a 70B model on two GPUs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Two 24 GB cards (RTX 3090 or 4090) provide 48 GB of VRAM, which fits a Q4_K_M 70B model (43 GB) with a short context of a few thousand tokens. Ollama and llama.cpp split the layers across both cards automatically or with --tensor-split. Expect roughly 12-17 tokens/sec as an estimate, because every token passes through both cards in sequence.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best inference runtime for running 70B LLMs on multi-GPU hardware?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For one user, Ollama or llama.cpp with layer splitting is the simplest and works with mixed GPUs. For several concurrent users or agents, vLLM with --tensor-parallel-size set to the GPU count, or SGLang, delivers much higher total throughput because it batches requests; both prefer identical GPUs and AWQ, GPTQ or FP8 weights. TensorRT-LLM gives the highest NVIDIA throughput but needs an engine build step.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much GPU memory does a multi-agent system with 70B backends need?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Budget the weights once plus one KV cache per concurrent session. Llama 3.3 70B at Q4_K_M needs about 43 GB for weights; each active session adds about 0.33 MB per token of context at FP16. Four agents at 32K tokens each therefore need about 43 GB + 43 GB = 86 GB. Serve all agents from one shared server (vLLM, SGLang or llama.cpp with parallel slots) rather than loading one copy of the model per agent.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does 256 GB of RAM help CPU inference of a 70B model?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It helps capacity, not speed. 256 GB lets you load Q8_0 (75 GB) or FP16 (141 GB) with long context, but decode speed is limited by memory channels: roughly 0.5-1.5 tokens/sec on a dual-channel desktop, about 3-6 on an 8-channel Threadripper PRO and about 4-8 on a 12-channel EPYC at Q4_K_M to Q8_0 (estimates from memory bandwidth, not benchmarks we ran).',
            },
          },
          {
            '@type': 'Question',
            name: 'Can the Mac mini M6 run a 70B model?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. The Mac mini M6 ($899 starting) maxes out at 32 GB of unified memory and 170 GB/s bandwidth, below the 43 GB a Q4_K_M 70B model needs. The Mac mini M5 Pro (from $1,699, 307 GB/s, Thunderbolt 5) can be configured with up to 64 GB; the base $1,699 model has 24 GB, so order the 64 GB build-to-order configuration. Both shipped on September 22, 2026.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the NVIDIA DGX Spark and is it worth it for 70B inference?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The DGX Spark is NVIDIA\'s compact desktop AI computer with 128 GB of unified LPDDR5x memory at 273 GB/s. It loads 70B models at Q8_0 but is bandwidth-limited: LMSYS measured 2.7 tokens/sec decode for Llama 3.1 70B at FP8. It is better suited to CUDA work, fine-tuning and large MoE models than to fast dense-70B chat. NVIDIA raised the Founders Edition from $3,999 to $4,699 in February 2026 and a price of $6,950 was reported in October 2026, alongside a 64 GB version at $4,999 from partners.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does 70B local quality compare to cloud models?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Meta reports 86.0 on MMLU (CoT) and 88.4 on HumanEval for Llama 3.3 70B Instruct. Frontier cloud models released since then score higher on reasoning-heavy tasks, while 70B local models remain competitive for summarization, extraction, drafting and routine code generation. Test both on your own prompts, for example with [PromptQuorum](/), before investing in 70B hardware.',
            },
          },
          {
            '@type': 'Question',
            name: 'How much electricity does running a 70B model use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A GPU draws up to its board power while generating: 350 W for an RTX 3090, 450 W for an RTX 4090 and 575 W for an RTX 5090. At $0.15 per kWh, an RTX 4090 at full load costs about $0.07 per hour for the GPU alone. Apple Silicon and unified-memory boxes draw much less power for the same model, but at lower speed.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are 70B models worth it compared to smaller models for everyday tasks?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For complex reasoning, long-document analysis and nuanced writing, usually yes. For simple summarization, Q&A and classification, a 7B-14B model often produces similar output at a fraction of the hardware cost. Run both on your own prompts before investing in 70B hardware.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I fine-tune a 70B model on consumer hardware?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Only with QLoRA. QLoRA keeps the base model in 4-bit (about 35 GB) and trains small adapters; Answer.AI showed FSDP+QLoRA training a 70B model on two 24 GB gaming GPUs. Full 16-bit fine-tuning needs on the order of 1 TB of memory and is a multi-GPU server job. For anything beyond occasional QLoRA runs, renting an 80 GB cloud GPU is usually more practical.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the best quantization for 70B on Apple Silicon?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On a 64 GB Mac, use Q4_K_M (43 GB). macOS limits GPU-addressable memory to roughly 75% of RAM by default (about 48 GB on a 64 GB Mac), so Q5_K_M (50 GB) only works after raising the limit with sysctl iogpu.wired_limit_mb, and leaves little headroom. On 96-128 GB, Q8_0 (75 GB) is the near-lossless choice, at roughly half the speed of Q4_K_M because every token reads twice as many bytes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Ollama choose the best quantization automatically?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. ollama run llama3.3:70b downloads the default Q4_K_M (43 GB). Name the tag for another level, for example ollama run llama3.3:70b-instruct-q5_K_M or ollama run llama3.3:70b-instruct-q8_0. Run ollama ps after loading: the PROCESSOR column shows how much of the model runs on GPU versus CPU.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can an iPhone or laptop run a 70B model?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not an iPhone: current iPhones have 8-12 GB of RAM, while a Q4_K_M 70B model needs about 43 GB, so phones run 1B-8B models. Laptops can only with 64 GB+ of unified memory (high-end MacBook Pro configurations) or an AMD Ryzen AI Max+ 395 system with 128 GB. Gaming laptops with 16-24 GB of VRAM, such as an ASUS ROG Strix, fall into the slow partial-offload case.',
            },
          },
        ],
      },
    },
    es: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Ejecutar un LLM 70B en local 2026: RAM, VRAM y velocidad',
      seoTitle: 'Requisitos de hardware para un LLM 70B 2026: RAM y VRAM',
      intro: 'Ejecutar un modelo 70B en local requiere unos 43 GB de memoria rápida en Q4_K_M, más 3-10 GB para el contexto. Un Mac con 64 GB o más de memoria unificada, dos GPU de 24 GB o un equipo de 128 GB de memoria unificada pueden mantenerlo entero en memoria rápida. La velocidad depende del ancho de banda de la memoria: de 1-2 tokens/s en la CPU de un equipo de escritorio a unos 10 tokens/s en un Mac Studio M5 Max. Llama 3.3 70B y Qwen2.5 72B son los dos principales modelos densos de clase 70B.',
      metaDescription: 'Un modelo 70B necesita ~43 GB en Q4_K_M más contexto. RAM, VRAM y tok/s estimados en Mac, DGX Spark, GPU RTX y PC solo con CPU, incl. 256 GB de RAM.',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-es.webp',
      publishDate: '2026-04-04',
      dateModified: '2026-10-29',
      leadAnswerBlock: '**Un modelo 70B necesita unos 43 GB de memoria en Q4_K_M (Llama 3.3 70B), más 3-10 GB para el contexto, y su velocidad depende del ancho de banda de la memoria, no de la capacidad. Un Mac con 64 GB o más, dos GPU de 24 GB o un equipo de 128 GB de memoria unificada lo mantiene entero en memoria rápida; una sola GPU de 24 GB o un PC solo con CPU lo ejecuta a unos 1-4 tokens/s.**',
      audience: 'Desarrolladores familiarizados con Ollama o LM Studio que optimizan flujos de trabajo con LLMs locales',
      readTime: '11 min de lectura',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B LLM local hardware de consumo',
      toc: [
        { label: 'Puntos clave', anchor: '#key-takeaways' },
        { label: '¿Qué es un modelo 70B?', anchor: '#what-is-70b' },
        { label: '¿Qué hardware necesitas?', anchor: '#what-hardware' },
        { label: 'Memoria necesaria por cuantización', anchor: '#ram-requirements' },
        { label: 'Contexto y memoria de la KV cache', anchor: '#context-memory' },
        { label: 'Por qué el ancho de banda fija la velocidad', anchor: '#memory-bandwidth' },
        { label: 'Apple Silicon', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark y PC de memoria unificada', anchor: '#dgx-spark' },
        { label: 'GPU NVIDIA + layer offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'Runtimes multi-GPU', anchor: '#multi-gpu-runtimes' },
        { label: 'Inferencia 70B solo con CPU', anchor: '#cpu-only' },
        { label: 'Modelos MoE de clase 70B', anchor: '#moe-models' },
        { label: '¿Qué modelo 70B deberías ejecutar?', anchor: '#which-model' },
        { label: 'Ajuste fino de un modelo 70B', anchor: '#fine-tuning' },
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
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: 'Un modelo 70B necesita unos 43 GB de memoria en Q4_K_M más 3-10 GB para el contexto, y genera aproximadamente el ancho de banda dividido por el tamaño del modelo en tokens por segundo; por eso un Mac de 64 GB o más, dos GPU de 24 GB o un equipo de 128 GB de memoria unificada lo ejecutan en memoria rápida, mientras que una sola GPU de 24 GB logra 2-4 tokens/s.',
            },
            {
              type: 'plain-terms',
              text: 'Un modelo 70B es un modelo de IA muy grande con unos 70 mil millones de números ajustables. Cargarlo ocupa aproximadamente 43 GB de memoria, y la rapidez con la que responde depende de lo deprisa que se pueda leer esa memoria. Un Mac con mucha memoria unificada o dos tarjetas gráficas grandes es el camino cómodo; un PC normal con una sola tarjeta gráfica funciona, pero responde despacio.',
            },
          ],
          items: [
            'Memoria en Q4_K_M: Llama 3.3 70B ocupa 43 GB, en Q5_K_M 50 GB, en Q8_0 75 GB y en FP16 141 GB. El contexto añade unos 2.7 GB por cada 8K tokens.',
            '**Regla de velocidad**: los tokens/s tienen como tope el ancho de banda de la memoria dividido por el tamaño del modelo, y la velocidad real suele ser el 60-80% de ese tope. 43 GB con 614 GB/s dan un tope de unos 14 tok/s.',
            '**Mejor velocidad de consumo**: un Mac Studio M5 Max configurado con 64 GB o más (unos 9-11 tok/s) o dos GPU de 24 GB (unos 12-17 tok/s); el Mac Studio M5 Ultra alcanza unos 17-21 tok/s estimados.',
            '**Mac mini**: el modelo M5 Pro de $1,699 trae 24 GB; 64 GB es una ampliación a medida (build-to-order) que da unos 4-5 tok/s. El Mac mini M6 (máx. 32 GB) no puede ejecutar 70B.',
            '**DGX Spark**: 128 GB pero solo 273 GB/s; LMSYS midió 2.7 tok/s para 70B en FP8. Cómpralo por CUDA y por los modelos MoE grandes, no para un chat rápido con un 70B denso.',
            '**Una sola GPU de 24 GB o solo CPU**: unos 2-4 tok/s con una RTX 4090 y DDR5 rápida, 1-2 tok/s con la CPU de un equipo de escritorio. 256 GB de RAM añaden capacidad (Q8_0, FP16, contexto largo), no velocidad.',
            'No existe Qwen3 72B: el modelo de 72B es Qwen2.5 72B. Los modelos abiertos grandes más recientes son, en su mayoría, de mezcla de expertos.',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: '¿Qué es un modelo 70B?',
          content: [
            '**Un modelo 70B es un modelo de lenguaje grande con unos 70 mil millones de parámetros, los pesos aprendidos que forman la red.** La "B" significa billion (mil millones). Llama 3.3 70B tiene 70.6 mil millones de parámetros y Qwen2.5 72B tiene 72.7 mil millones.',
            'La memoria es el número de parámetros multiplicado por los bytes por peso: los pesos de 16 bits ocupan 2 bytes cada uno (unos 141 GB), los de 8 bits (Q8_0) unos 1 byte (75 GB) y los de 4 bits Q4_K_M unos 0.6 bytes (43 GB). Por eso 70B es el tamaño en el que el hardware de consumo necesita por primera vez más de 40 GB de memoria rápida, mientras que los modelos de 7B-14B caben en un laptop normal.',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: '¿Qué hardware necesitas para ejecutar un LLM 70B en local?',
          content: [
            '**Necesitas unos 43 GB de memoria rápida para el modelo más 3-10 GB para el contexto, en VRAM de GPU, memoria unificada de Apple o RAM del sistema -- y cuanto más rápida sea esa memoria, más rápido genera el modelo.**',
            'Las velocidades de abajo son estimaciones para chat de un solo usuario con contexto corto, derivadas del ancho de banda de la memoria (consulta "Por qué el ancho de banda fija la velocidad"). Son topes reducidos a una eficiencia típica del 60-80%, no benchmarks ejecutados por PromptQuorum; la cifra del DGX Spark es la excepción y fue medida por terceros.',
          ],
          rows: [
            {
              'Hardware': 'Mac Studio M5 Max (64-128 GB)',
              '¿Cabe 70B en Q4?': 'Sí -- GPU completa',
              'Ancho de banda': 'hasta 614 GB/s',
              'Vel. est. (Q4_K_M)': '~9-11 tok/s',
              'Notas': 'La base es de 36 GB; 64 GB+ es una ampliación',
            },
            {
              'Hardware': 'Mac Studio M5 Ultra (96 GB+)',
              '¿Cabe 70B en Q4?': 'Sí -- cabe Q8_0',
              'Ancho de banda': 'hasta 1.2 TB/s',
              'Vel. est. (Q4_K_M)': '~17-21 tok/s',
              'Notas': 'Desde $5,499 con 96 GB',
            },
            {
              'Hardware': 'Mac mini M5 Pro (64 GB)',
              '¿Cabe 70B en Q4?': 'Sí -- justo',
              'Ancho de banda': '307 GB/s',
              'Vel. est. (Q4_K_M)': '~4-5 tok/s',
              'Notas': 'La base de $1,699 trae 24 GB; 64 GB es a medida',
            },
            { 'Hardware': 'Mac mini M6 (máx. 32 GB)', '¿Cabe 70B en Q4?': 'No', 'Ancho de banda': '170 GB/s', 'Vel. est. (Q4_K_M)': 'N/D', 'Notas': '32 GB máx. es menos que el archivo Q4 de ~43 GB' },
            {
              'Hardware': 'Mac Studio M2 Ultra (64 GB+, usado)',
              '¿Cabe 70B en Q4?': 'Sí -- GPU completa',
              'Ancho de banda': '800 GB/s',
              'Vel. est. (Q4_K_M)': '~12-15 tok/s',
              'Notas': 'Solo de segunda mano; comprueba la memoria',
            },
            {
              'Hardware': 'NVIDIA DGX Spark (128 GB)',
              '¿Cabe 70B en Q4?': 'Sí -- cabe Q8_0',
              'Ancho de banda': '273 GB/s',
              'Vel. est. (Q4_K_M)': '~4-5 tok/s',
              'Notas': 'Medido: 2.7 tok/s en FP8; $6,950 reportado',
            },
            {
              'Hardware': 'AMD Ryzen AI Max+ 395 (128 GB)',
              '¿Cabe 70B en Q4?': 'Sí',
              'Ancho de banda': '256 GB/s',
              'Vel. est. (Q4_K_M)': '~4-5 tok/s',
              'Notas': 'Mini PC y laptops; memoria para GPU configurable',
            },
            {
              'Hardware': '2x RTX 3090 / 4090 (48 GB)',
              '¿Cabe 70B en Q4?': 'Sí -- justo',
              'Ancho de banda': '936-1,008 GB/s por tarjeta',
              'Vel. est. (Q4_K_M)': '~12-17 tok/s',
              'Notas': 'Solo Q4_K_M con contexto corto',
            },
            {
              'Hardware': 'RTX 5090 (32 GB) + 64 GB RAM',
              '¿Cabe 70B en Q4?': 'Offloading parcial',
              'Ancho de banda': '1,792 GB/s de VRAM',
              'Vel. est. (Q4_K_M)': '~4-6 tok/s',
              'Notas': '~70% de capas en GPU, el resto en RAM del sistema',
            },
            {
              'Hardware': 'RTX 4090 (24 GB) + 64 GB RAM',
              '¿Cabe 70B en Q4?': 'Offloading parcial',
              'Ancho de banda': '1,008 GB/s de VRAM',
              'Vel. est. (Q4_K_M)': '~2-4 tok/s',
              'Notas': '~55% de capas en GPU, el resto en RAM del sistema',
            },
            {
              Hardware: 'Olares One (RTX 5090 Mobile 24 GB + 96 GB RAM)',
              '¿Cabe 70B en Q4?': 'Offloading parcial',
              'Ancho de banda': 'VRAM sin publicar / RAM ~90 GB/s',
              'Vel. est. (Q4_K_M)': '~2-4 tok/s',
              Notas: '24 GB de VRAM GDDR7; coste de hardware $4,999',
            },
            { 'Hardware': 'Solo CPU, DDR5 de doble canal', '¿Cabe 70B en Q4?': 'Sí -- solo CPU', 'Ancho de banda': '~90 GB/s', 'Vel. est. (Q4_K_M)': '~1-2 tok/s', 'Notas': 'Solo trabajos por lotes' },
            {
              'Hardware': 'Solo CPU, RAM de servidor de 8-12 canales',
              '¿Cabe 70B en Q4?': 'Sí -- solo CPU',
              'Ancho de banda': '350-460 GB/s',
              'Vel. est. (Q4_K_M)': '~5-8 tok/s',
              'Notas': 'Threadripper PRO / EPYC; 256 GB permite Q8_0',
            },
          ],
          columns: ['Hardware', '¿Cabe 70B en Q4?', 'Ancho de banda', 'Vel. est. (Q4_K_M)', 'Notas'],
          callouts: [
            { type: 'insight', text: '**Olares One** ([olares.com/one](https://www.olares.com/one)) es un equipo de escritorio compacto de IA con una RTX 5090 Mobile (24 GB de VRAM GDDR7), un Intel Core Ultra 9 275HX y 96 GB de RAM DDR5-5600 (ampliable a 128 GB según Olares). Con modelos 70B se comporta como la fila de la RTX 4090 de arriba: cerca del 55% de un modelo Q4_K_M cabe en la VRAM y el resto se lee de la RAM del sistema, así que cabe esperar unos 2-4 tokens/s (estimación, no un benchmark). Los 96 GB de RAM aportan capacidad, no velocidad: Q8_0 (75 GB) cabe con margen para el contexto. Olares indica un coste de hardware de $4,999 y no publica cifras de tokens/s para 70B.' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: '¿Cuánta RAM o VRAM necesita un modelo 70B en cada nivel de cuantización?',
          content: 'Los tamaños de abajo son los de los archivos de Llama 3.3 70B en la biblioteca de Ollama; otros modelos 70B difieren en unos pocos puntos porcentuales. Son solo los pesos -- suma la memoria de contexto de la sección siguiente.',
          rows: [
            { 'Cuantización': 'FP16 (precisión completa)', 'Memoria (pesos)': '~141 GB', 'Calidad': 'Calidad de referencia', '¿Práctico?': 'Mac Ultra de 192 GB+ o servidor con 256 GB de RAM' },
            { 'Cuantización': 'Q8_0', 'Memoria (pesos)': '~75 GB', 'Calidad': 'Casi sin pérdida', '¿Práctico?': '96-128 GB de memoria unificada o 128 GB de RAM' },
            { 'Cuantización': 'Q6_K', 'Memoria (pesos)': '~58 GB', 'Calidad': 'Muy cercana a Q8_0', '¿Práctico?': 'Máquinas de 72-96 GB' },
            { 'Cuantización': 'Q5_K_M', 'Memoria (pesos)': '~50 GB', 'Calidad': 'Pérdida mínima', '¿Práctico?': 'Mac de 64 GB tras subir el límite de GPU -- justo' },
            { 'Cuantización': 'Q4_K_M', 'Memoria (pesos)': '~43 GB', 'Calidad': 'Pérdida baja -- predeterminada', '¿Práctico?': 'Sí -- Mac de 64 GB o 2 GPU con 48 GB en total' },
            { 'Cuantización': 'Q3_K_S', 'Memoria (pesos)': '~31 GB', 'Calidad': 'Pérdida moderada', '¿Práctico?': 'Sí -- máquinas de 40-48 GB' },
            { 'Cuantización': 'Q2_K', 'Memoria (pesos)': '~26 GB', 'Calidad': 'Pérdida alta', '¿Práctico?': 'No recomendado' },
          ],
          columns: ['Cuantización', 'Memoria (pesos)', 'Calidad', '¿Práctico?'],
        },
        contextMemory: {
          id: 'context-memory',
          title: '¿Cuánta memoria extra añade el contexto a un modelo 70B?',
          content: [
            '**El contexto añade memoria además de los pesos: Llama 3.3 70B guarda unos 0.33 MB de KV cache por token en FP16, es decir, aproximadamente 2.7 GB con 8K tokens, 10.7 GB con 32K y 43 GB con 128K.** La cifra sale de la arquitectura del modelo: 80 capas x 8 cabezas clave-valor x 128 dimensiones x 2 (claves y valores) x 2 bytes = 327,680 bytes por token.',
            'Cada sesión concurrente mantiene su propia KV cache mientras que los pesos se comparten. Un sistema multiagente con cuatro agentes de 32K tokens cada uno necesita unos 43 GB de pesos más 43 GB de caché. Activar flash attention y una KV cache de 8 bits en Ollama (OLLAMA_FLASH_ATTENTION=1 y OLLAMA_KV_CACHE_TYPE=q8_0) reduce la caché aproximadamente a la mitad.',
          ],
          rows: [
            { 'Longitud de contexto': '8K tokens', 'KV cache (FP16)': '~2.7 GB', 'Total con Q4_K_M': '~46 GB' },
            { 'Longitud de contexto': '32K tokens', 'KV cache (FP16)': '~10.7 GB', 'Total con Q4_K_M': '~54 GB' },
            { 'Longitud de contexto': '128K tokens', 'KV cache (FP16)': '~43 GB', 'Total con Q4_K_M': '~86 GB' },
          ],
          columns: ['Longitud de contexto', 'KV cache (FP16)', 'Total con Q4_K_M'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: '¿Por qué el ancho de banda de la memoria fija la velocidad de un modelo 70B?',
          content: [
            '**Cada token generado lee todos los pesos del modelo una vez, así que la velocidad de decodificación tiene como tope el ancho de banda de la memoria dividido por el tamaño del modelo.** Un modelo Q4_K_M de 43 GB con 614 GB/s de ancho de banda tiene un tope de unos 14 tokens/s; la velocidad real suele ser el 60-80% de ese tope.',
            'La misma regla explica por qué mucha memoria no es lo mismo que memoria rápida: el DGX Spark de 128 GB tiene 273 GB/s, un tope de unos 6 tokens/s en Q4_K_M, y LMSYS midió 2.7 tokens/s para Llama 3.1 70B en FP8 (unos 70 GB, tope de 3.9). La capacidad decide si un modelo se ejecuta; el ancho de banda decide con qué rapidez. El procesamiento del prompt (prefill) está limitado por el cómputo y se comporta de otra manera.',
          ],
          rows: [
            { 'Memoria': 'DDR5-5600 de doble canal', 'Ancho de banda': '~90 GB/s', 'Tope con 43 GB': '~2 tok/s' },
            { 'Memoria': 'AMD Ryzen AI Max+ 395', 'Ancho de banda': '256 GB/s', 'Tope con 43 GB': '~6 tok/s' },
            { 'Memoria': 'NVIDIA DGX Spark', 'Ancho de banda': '273 GB/s', 'Tope con 43 GB': '~6 tok/s' },
            { 'Memoria': 'Apple M5 Pro', 'Ancho de banda': '307 GB/s', 'Tope con 43 GB': '~7 tok/s' },
            { 'Memoria': 'Apple M5 Max', 'Ancho de banda': 'hasta 614 GB/s', 'Tope con 43 GB': '~14 tok/s' },
            { 'Memoria': 'Apple M2 Ultra', 'Ancho de banda': '800 GB/s', 'Tope con 43 GB': '~19 tok/s' },
            { 'Memoria': 'Apple M5 Ultra', 'Ancho de banda': 'hasta 1.2 TB/s', 'Tope con 43 GB': '~28 tok/s' },
          ],
          columns: ['Memoria', 'Ancho de banda', 'Tope con 43 GB'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: '¿Es Apple Silicon una buena opción para modelos 70B?',
          content: [
            '**Apple Silicon es la forma más sencilla de mantener un modelo 70B entero en memoria accesible para la GPU, porque la CPU y la GPU comparten un único pool de memoria unificada.** Un Mac con 64 GB o más ejecuta Q4_K_M sin layer offloading, a una velocidad fijada por el ancho de banda del chip: aproximadamente 9-11 tokens/s en un M5 Max y 12-15 en un M2 Ultra usado (estimaciones). Todavía no encontramos benchmarks publicados de 70B para los chips M5.',
            'Apple presentó el Mac Studio con M5 Max y M5 Ultra el 25 de agosto de 2026; ambos se enviaron el 22 de septiembre de 2026. El M5 Max parte de $2,499 con 36 GB y llega hasta 128 GB con hasta 614 GB/s -- configura 64 GB o más para 70B. El M5 Ultra parte de $5,499 con 96 GB, llega hasta 512 GB con hasta 1.2 TB/s y ejecuta Q8_0 con holgura; la configuración de 512 GB figuraba con llegada a finales de octubre.',
            '**El Mac mini M5 Pro parte de $1,699 con 24 GB, no con 64 GB.** La configuración a medida de 64 GB (307 GB/s, Thunderbolt 5) aloja un modelo 70B en Q4_K_M, pero genera solo unos 4-5 tokens/s, y las reseñas la sitúan en aproximadamente $2,700-$3,200 según la CPU y el almacenamiento. El Mac mini M6 base ($899) llega como máximo a 32 GB y 170 GB/s y no puede ejecutar un modelo 70B en ninguna cuantización.',
            'macOS limita por defecto la memoria direccionable por la GPU a aproximadamente el 75% de la RAM (unos 48 GB en un Mac de 64 GB). Para ejecutar Q5_K_M (50 GB) sube el límite, por ejemplo con sudo sysctl iogpu.wired_limit_mb=57344 en un Mac de 64 GB; el ajuste se restablece al reiniciar y deja al sistema operativo solo unos 8 GB.',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: '¿Sirve el NVIDIA DGX Spark (o un PC Strix Halo de 128 GB) para modelos 70B?',
          content: [
            '**El NVIDIA DGX Spark es un ordenador de IA de escritorio compacto con 128 GB de memoria unificada LPDDR5x a 273 GB/s, basado en el GB10 Grace Blackwell Superchip y con soporte CUDA.** Carga un modelo 70B incluso en Q8_0 (75 GB), pero el ancho de banda limita la generación: LMSYS midió 2.7 tokens/s de decodificación para Llama 3.1 70B en FP8, y se reportan ejecuciones de la comunidad con llama.cpp en Q4_K_M en el rango de 4-5 tokens/s.',
            'Los precios se han movido bruscamente. NVIDIA subió la Founders Edition de $3,999 a $4,699 en febrero de 2026 por restricciones en el suministro de memoria, y en octubre de 2026 se reportó un precio de $6,950, junto con una versión de 64 GB a $4,999 que los partners venden desde el 23 de octubre de 2026. Comprueba los precios actuales antes de comprar.',
            'Los mini PC y laptops con AMD Ryzen AI Max+ 395 ("Strix Halo") ofrecen 128 GB de LPDDR5X a 256 GB/s, la misma clase de ancho de banda, y una estimación similar de unos 4-5 tokens/s para un modelo 70B denso. Ambas plataformas encajan mejor con los modelos de mezcla de expertos (ver más abajo) y con el trabajo en CUDA o de ajuste fino que con el chat de un 70B denso.',
          ],
          rows: [
            { 'Especificación': 'Memoria', 'Valor': '128 GB unificados LPDDR5x' },
            { 'Especificación': 'Ancho de banda de memoria', 'Valor': '273 GB/s' },
            { 'Especificación': '70B en Q8_0 (75 GB)', 'Valor': 'Cabe' },
            { 'Especificación': 'Decodificación 70B, medida', 'Valor': '2.7 tok/s en FP8 (LMSYS, SGLang)' },
            { 'Especificación': 'Tamaño máximo de modelo', 'Valor': '~200B parámetros en FP4' },
            { 'Especificación': 'Precio', 'Valor': '$6,950 reportado; $4,699 precio de lista feb. 2026' },
            { 'Especificación': 'Comando Ollama', 'Valor': 'ollama run llama3.3:70b' },
          ],
          columns: ['Especificación', 'Valor'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: '¿Cómo funciona la GPU NVIDIA + layer offloading para modelos 70B?',
          content: [
            '**Ollama y llama.cpp reparten un modelo entre la VRAM de la GPU y la RAM del sistema: las capas en VRAM se ejecutan a velocidad de GPU, las capas en RAM a la velocidad de memoria de la CPU, y la parte lenta domina.** Con una RTX 4090 (24 GB) cabe en la GPU aproximadamente el 55% de un modelo 70B en Q4_K_M y el resto se lee de la DDR5 a unos 90 GB/s, lo que limita la generación a unos 2-4 tokens/s. Una RTX 5090 (32 GB) aloja aproximadamente el 70% y alcanza unos 4-6 tokens/s estimados.',
            'Ollama hace el offloading automáticamente; no hace falta ningún flag. Ejecuta ollama ps para ver el reparto (columna PROCESSOR, por ejemplo 45%/55% CPU/GPU). En llama.cpp, fija el número de capas con -ngl.',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: '¿Qué runtime de inferencia es mejor para un modelo 70B en varias GPU?',
          content: [
            '**Para un solo usuario, Ollama o llama.cpp con reparto por capas es el camino multi-GPU más sencillo; para varios usuarios o agentes concurrentes, vLLM o SGLang con paralelismo de tensores ofrecen un rendimiento total mucho mayor.** Dos tarjetas de 24 GB (RTX 3090 o 4090) suman 48 GB, suficientes para Q4_K_M con un contexto corto.',
            'El reparto por capas pasa las activaciones entre tarjetas una vez por token y funciona sobre PCIe normal, por lo que sirve para tarjetas mixtas o de consumo. El paralelismo de tensores divide cada capa entre las GPU y se beneficia de enlaces rápidos: la RTX 3090 admite un puente NVLink, mientras que la RTX 4090 y la 5090 no.',
          ],
          rows: [
            { 'Runtime': 'Ollama', 'Método multi-GPU': 'Reparto automático por capas', 'Ideal para': 'Un usuario, la configuración más fácil' },
            { 'Runtime': 'llama.cpp', 'Método multi-GPU': '--split-mode, --tensor-split', 'Ideal para': 'GPU mixtas, cuantizaciones GGUF' },
            { 'Runtime': 'vLLM', 'Método multi-GPU': '--tensor-parallel-size N', 'Ideal para': 'Muchos usuarios o agentes; AWQ/GPTQ/FP8' },
            { 'Runtime': 'SGLang', 'Método multi-GPU': 'Paralelismo de tensores', 'Ideal para': 'Agentes con prefijos de prompt compartidos' },
            { 'Runtime': 'TensorRT-LLM', 'Método multi-GPU': 'Paralelismo de tensores / pipeline', 'Ideal para': 'Máx. rendimiento NVIDIA; requiere compilar el motor' },
          ],
          columns: ['Runtime', 'Método multi-GPU', 'Ideal para'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: '¿Es práctica la inferencia 70B solo con CPU y ayuda tener 256 GB de RAM?',
          content: [
            '**La inferencia 70B solo con CPU está limitada por el ancho de banda de la memoria: la DDR5 de doble canal de un equipo de escritorio (unos 90 GB/s) da aproximadamente 1-2 tokens/s en Q4_K_M, y añadir capacidad de RAM no la hace más rápida.** A 1.5 tokens/s, una respuesta de 200 palabras (unos 270 tokens) tarda alrededor de tres minutos.',
            '256 GB de RAM cambian lo que cabe, no la velocidad: permiten cargar Q8_0 (75 GB) o FP16 (141 GB) con contexto largo. La velocidad depende de los canales de memoria -- un Threadripper PRO de 8 canales o un servidor EPYC de 12 canales tiene de tres a cinco veces el ancho de banda de un equipo de escritorio. Las placas de escritorio con cuatro módulos DIMM grandes suelen ejecutar su memoria más despacio que con dos. El procesamiento del prompt en CPU también es lento con entradas largas.',
            'Las estimaciones de abajo aplican la regla del ancho de banda con una eficiencia del 70%; no son benchmarks medidos.',
          ],
          rows: [
            { 'CPU / configuración RAM': 'Escritorio, DDR5-5600 de 2 canales', 'Ancho de banda': '~90 GB/s', 'Q4_K_M (43 GB)': '~1-1.5 tok/s', 'Q8_0 (75 GB)': '~0.6-0.9 tok/s', 'FP16 (141 GB)': '~0.3-0.5 tok/s' },
            { 'CPU / configuración RAM': 'Threadripper PRO, DDR5-5600 de 8 canales', 'Ancho de banda': '~358 GB/s', 'Q4_K_M (43 GB)': '~5-6 tok/s', 'Q8_0 (75 GB)': '~3-3.5 tok/s', 'FP16 (141 GB)': '~1.5-1.8 tok/s' },
            { 'CPU / configuración RAM': 'EPYC, DDR5-4800 de 12 canales', 'Ancho de banda': '~461 GB/s', 'Q4_K_M (43 GB)': '~7-8 tok/s', 'Q8_0 (75 GB)': '~4-4.5 tok/s', 'FP16 (141 GB)': '~2-2.5 tok/s' },
          ],
          columns: ['CPU / configuración RAM', 'Ancho de banda', 'Q4_K_M (43 GB)', 'Q8_0 (75 GB)', 'FP16 (141 GB)'],
        },
        moe: {
          id: 'moe-models',
          title: '¿Cambian los modelos MoE de clase 70B las cuentas del hardware?',
          content: [
            '**Los modelos de mezcla de expertos (MoE) necesitan memoria para todos sus parámetros, pero para cada token leen solo los expertos activos, así que generan mucho más rápido que un modelo 70B denso con la misma huella de memoria.** gpt-oss-120b de OpenAI tiene unos 117 mil millones de parámetros, de los cuales unos 5.1 mil millones están activos; Llama 4 Scout de Meta tiene 109 mil millones con 17 mil millones activos.',
            'La regla del ancho de banda se aplica a los pesos activos, de modo que los modelos MoE aprovechan mejor las máquinas de alta capacidad y ancho de banda moderado, como el DGX Spark, los PC con Ryzen AI Max+ 395 y un Mac mini M5 Pro de 64 GB. Para un modelo 70B denso en ese hardware, espera 4-5 tokens/s; comprueba el tamaño del archivo de cada modelo MoE frente a tu memoria antes de descargarlo.',
          ],
        },
        which70b: {
          id: 'which-model',
          title: '¿Qué modelo 70B deberías ejecutar en local?',
          content: [
            '**Llama 3.3 70B es el modelo 70B denso predeterminado: Meta reporta 86.0 en MMLU (CoT) y 88.4 en HumanEval, con una ventana de contexto de 128K.** Qwen2.5 72B es la principal alternativa para uso multilingüe y de programación. No existe Qwen3 72B -- los modelos densos de Qwen3 se detienen en 32B --, así que una referencia a "Qwen3 72B" significa Qwen2.5 72B.',
            'Comandos: ollama run llama3.3:70b, ollama run qwen2.5:72b, ollama run deepseek-r1:70b.',
          ],
          rows: [
            { 'Modelo': 'Llama 3.3 70B', 'Parámetros': '70.6B densos', 'Licencia': 'Llama 3.3 Community License', 'Ideal para': 'Inglés general, seguir instrucciones' },
            { 'Modelo': 'Qwen2.5 72B Instruct', 'Parámetros': '72.7B densos', 'Licencia': 'Qwen License', 'Ideal para': 'Multilingüe, código; 131K con YaRN' },
            { 'Modelo': 'DeepSeek-R1-Distill-Llama-70B', 'Parámetros': '70B densos', 'Licencia': 'Ver la tarjeta del modelo', 'Ideal para': 'Razonamiento; salidas largas ralentizan' },
            { 'Modelo': 'Mistral Large 2', 'Parámetros': '123B densos', 'Licencia': 'Mistral Research License', 'Ideal para': 'Solo investigación; ~75 GB en Q4' },
          ],
          columns: ['Modelo', 'Parámetros', 'Licencia', 'Ideal para'],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: '¿Qué hardware necesitas para hacer ajuste fino de un modelo 70B?',
          content: [
            '**El ajuste fino con QLoRA de un modelo 70B necesita aproximadamente 35-48 GB de memoria de GPU por ejecución: dos GPU de 24 GB con FSDP+QLoRA, o una sola GPU de 48-80 GB.** QLoRA mantiene el modelo base en 4 bits (unos 35 GB) y entrena adaptadores pequeños; Answer.AI lo demostró en dos GPU gaming de 24 GB.',
            'El ajuste fino completo en 16 bits necesita unos 16 bytes por parámetro para pesos, gradientes y estados del optimizador -- del orden de 1 TB --, lo que es trabajo para un servidor multi-GPU. Alquilar una GPU en la nube de 80 GB suele ser más práctico que montar hardware para ejecuciones ocasionales.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Ejecutar modelos 70B en local: contexto regional',
          content: [
            '**UE / RGPD**: Un modelo local 70B es el techo práctico de calidad de IA que la mayoría de las organizaciones pueden ejecutar de forma privada. Procesar documentos legales, médicos o financieros en las propias instalaciones mantiene los prompts y las salidas dentro de tu infraestructura, lo que apoya los controles de minimización de datos y de riesgo de transferencias; por sí solo no hace que un despliegue cumpla el RGPD, así que evalúa la actividad de tratamiento en su conjunto.',
            'Para las organizaciones que exigen hardware de cadena de suministro de la UE, Apple (EE.UU.) y NVIDIA (EE.UU.) son proveedores no europeos; Dell, HP y Lenovo venden sistemas basados en GB10 con soporte local. En cuanto a los modelos, Mistral Large 2 proviene de un desarrollador de la UE, pero se publica bajo una licencia de investigación que no cubre el uso comercial.',
            '**Japón**: Qwen2.5 72B es una opción habitual para texto en japonés: `ollama run qwen2.5:72b`. Documentar las versiones de hardware y de modelo (la salida de `ollama ps` identifica el modelo cargado) apoya la gobernanza interna conforme a las directrices japonesas de IA para empresas.',
            '**China**: Alojar Qwen2.5 72B en local mantiene los datos en tu propia infraestructura, lo cual es relevante para la Ley de Seguridad de Datos de China (数据安全法). Si un modelo servido internamente entra en las normas de IA generativa de la CAC depende de si se ofrece al público; confirma con un asesor jurídico cualificado.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '¿Cuáles son los errores comunes al ejecutar modelos 70B en hardware de consumo?',
          faqs: [
            {
              q: 'Comprar una GPU con menos de 24 GB de VRAM esperando el rendimiento completo de un 70B',
              a: 'Una tarjeta de 12 GB aloja aproximadamente una cuarta parte de un modelo 70B en Q4_K_M; el resto se ejecuta desde la RAM del sistema, así que la velocidad se parece a la de solo CPU. Incluso una RTX 4090 de 24 GB logra solo unos 2-4 tok/s. Para una velocidad interactiva usa 48 GB de VRAM, un Mac Apple Silicon de 64 GB o más, o un modelo más pequeño de 27B-34B.',
            },
            {
              q: 'Suponer que un equipo con mucha memoria también es rápido',
              a: 'Los sistemas DGX Spark y Ryzen AI Max+ 395 tienen 128 GB pero solo 256-273 GB/s de ancho de banda, así que un modelo 70B denso corre a unos 3-5 tok/s. Un Mac Studio M5 Max con 64 GB tiene más del doble de ancho de banda. Fíjate en el ancho de banda, no solo en la capacidad.',
            },
            {
              q: 'No comprobar qué parte del modelo se ejecuta en la GPU',
              a: 'Ollama hace el offloading automáticamente, pero un ajuste justo puede dejar capas en la CPU. Ejecuta `ollama ps` tras cargar el modelo y lee la columna PROCESSOR; el objetivo es "100% GPU", y una parte en CPU explica la salida lenta. Reduce la longitud de contexto o baja a Q3_K_S si el reparto es malo.',
            },
            {
              q: 'Olvidar que el contexto también necesita memoria',
              a: 'Un modelo 70B en Q4_K_M ocupa 43 GB, pero un contexto de 32K añade unos 10.7 GB y uno de 128K unos 43 GB en FP16. Una máquina en la que caben los pesos aún puede quedarse sin memoria con un contexto largo. Usa una KV cache de 8 bits o un contexto más corto.',
            },
            {
              q: 'Ejecutar Q5_K_M o Q8_0 cuando importa la velocidad',
              a: 'Cada token lee el modelo entero, así que Q8_0 (75 GB) corre a aproximadamente la mitad de la velocidad de Q4_K_M (43 GB) en el mismo hardware. En máquinas limitadas por el ancho de banda (DGX Spark, Strix Halo, Mac mini) elige Q4_K_M para chatear y usa Q8_0 solo cuando la prioridad sea la calidad.',
            },
            {
              q: 'Pedir el Mac mini M5 Pro de $1,699 esperando que ejecute un 70B',
              a: 'El Mac mini M5 Pro de $1,699 tiene 24 GB de memoria unificada. Un modelo 70B necesita la configuración a medida de 64 GB, y el Mac mini M6 base ($899, máximo 32 GB) no puede ejecutarlo en absoluto. Confirma "M5 Pro" y 64 GB antes de pedirlo.',
            },
            {
              q: 'Topar con el límite predeterminado de memoria de GPU de macOS',
              a: 'Por defecto macOS deja que la GPU use aproximadamente el 75% de la RAM, unos 48 GB en un Mac de 64 GB. Q4_K_M cabe; Q5_K_M (50 GB) no, hasta que subas `iogpu.wired_limit_mb`.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lecturas relacionadas',
          items: [
            '[Guía de hardware para LLM locales](/es/local-llms/local-llm-hardware-guide) -- tabla completa de GPU y RAM por nivel para cada tamaño de modelo, incluidos los requisitos de hardware para 70B',
            '[Ejecutar modelos 70B con 24 GB de VRAM](/es/local-llms/run-70b-models-24gb-vram) -- opciones de cuantización y offloading cuando solo tienes una GPU',
            '[Ejecutar modelos 70B en Apple Silicon M5 Max](/es/local-llms/running-70b-models-apple-silicon-m5-max) -- configuración específica para Mac con Ollama y MLX',
            '[RTX 5090 vs RTX 4090 para LLM locales](/es/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- cómo cambia el offloading con 32 GB frente a 24 GB de VRAM',
            '[Mac mini M5 como servidor de IA local](/es/local-llms/mac-mini-m5-local-ai-server) -- qué puede y qué no puede ejecutar la gama Mac mini',
            '[Cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) -- entiende Q4_K_M vs Q8_0 y el coste en velocidad de una mayor precisión',
            '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) -- configuración completa, incluida la configuración de capas en GPU',
            '[Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral) -- comparación detallada de las principales familias de modelos abiertos',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Preguntas frecuentes sobre ejecutar modelos 70B en hardware de consumo',
          faqs: [
            {
              q: '¿Qué hardware necesito para ejecutar un LLM 70B en local?',
              a: 'Necesitas unos 43 GB de memoria rápida para Llama 3.3 70B en Q4_K_M, más 3-10 GB para el contexto. Tres configuraciones mantienen el modelo entero en memoria rápida: un Mac Apple Silicon con 64 GB o más de memoria unificada, dos GPU NVIDIA de 24 GB (48 GB de VRAM en total) o un equipo de 128 GB de memoria unificada como el NVIDIA DGX Spark o un mini PC con AMD Ryzen AI Max+ 395. La capacidad decide si el modelo se ejecuta; el ancho de banda de la memoria decide con qué rapidez. Una sola GPU de 24 GB o un PC solo con CPU pueden ejecutarlo, pero solo a unos 1-4 tokens/s.',
            },
            {
              q: '¿Qué es un modelo 70B?',
              a: 'Un modelo 70B es un modelo de lenguaje grande con unos 70 mil millones de parámetros (pesos). Llama 3.3 70B tiene 70.6 mil millones y Qwen2.5 72B tiene 72.7 mil millones. El tamaño del archivo se deduce del número de parámetros: unos 141 GB a 16 bits, 75 GB a 8 bits (Q8_0) y 43 GB a 4 bits (Q4_K_M).',
            },
            {
              q: '¿Cuánta VRAM o RAM necesito para un modelo 70B?',
              a: 'Llama 3.3 70B necesita 43 GB en Q4_K_M, 50 GB en Q5_K_M, 75 GB en Q8_0 y 141 GB en FP16 (tamaños de la biblioteca de Ollama), más la KV cache del contexto: unos 2.7 GB con 8K tokens, 10.7 GB con 32K y 43 GB con 128K. Con 24 GB de VRAM solo cabe en la GPU aproximadamente la mitad de un modelo Q4_K_M, y el resto se ejecuta desde la RAM del sistema.',
            },
            {
              q: '¿Cuál es el hardware más barato que puede ejecutar un modelo 70B de forma utilizable?',
              a: 'Para unos 10 tokens/s o más, las opciones prácticas son un Mac Studio M5 Max configurado con 64 GB o más (el modelo base de $2,499 tiene 36 GB), un Mac Studio M2 Ultra usado con 64 GB o más, o dos GPU de 24 GB usadas. La opción nueva más barata de Apple es el Mac mini M5 Pro con 64 GB: el modelo base de $1,699 tiene solo 24 GB, y las reseñas sitúan las configuraciones de 64 GB en aproximadamente $2,700-$3,200. Su ancho de banda de 307 GB/s lo limita a unos 4-5 tokens/s. Los precios de calle de las GPU son volátiles: se reportaron anuncios de RTX 5090 muy por encima del precio de lanzamiento de $1,999 en octubre de 2026, así que comprueba los precios actuales.',
            },
            {
              q: '¿Puedo ejecutar un modelo 70B en una sola GPU de 24 GB?',
              a: 'Sí, pero despacio. Una tarjeta de 24 GB como la RTX 4090 aloja aproximadamente el 55% de un modelo 70B en Q4_K_M; las capas restantes se ejecutan desde la RAM del sistema a la velocidad de memoria de la CPU, lo que da aproximadamente 2-4 tokens/s con DDR5 rápida. Para una velocidad interactiva, usa un modelo más pequeño (uno de 27B-34B cabe en 24 GB, por ejemplo Qwen3.8-27B), dos GPU o una máquina de memoria unificada de 64 GB o más.',
            },
            {
              q: '¿Puedo ejecutar un modelo 70B en dos GPU?',
              a: 'Sí. Dos tarjetas de 24 GB (RTX 3090 o 4090) ofrecen 48 GB de VRAM, que bastan para un modelo 70B en Q4_K_M (43 GB) con un contexto corto de unos pocos miles de tokens. Ollama y llama.cpp reparten las capas entre ambas tarjetas automáticamente o con --tensor-split. Espera aproximadamente 12-17 tokens/s como estimación, porque cada token pasa por las dos tarjetas en secuencia.',
            },
            {
              q: '¿Cuál es el mejor runtime de inferencia para ejecutar LLM 70B en hardware multi-GPU?',
              a: 'Para un solo usuario, Ollama o llama.cpp con reparto por capas es lo más sencillo y funciona con GPU mixtas. Para varios usuarios o agentes concurrentes, vLLM con --tensor-parallel-size igual al número de GPU, o SGLang, ofrecen un rendimiento total mucho mayor porque agrupan las peticiones en lotes; ambos prefieren GPU idénticas y pesos AWQ, GPTQ o FP8. TensorRT-LLM da el mayor rendimiento en NVIDIA, pero requiere un paso de compilación del motor.',
            },
            {
              q: '¿Cuánta memoria de GPU necesita un sistema multiagente con backends 70B?',
              a: 'Calcula los pesos una sola vez más una KV cache por sesión concurrente. Llama 3.3 70B en Q4_K_M necesita unos 43 GB para los pesos; cada sesión activa añade unos 0.33 MB por token de contexto en FP16. Por tanto, cuatro agentes con 32K tokens cada uno necesitan unos 43 GB + 43 GB = 86 GB. Sirve a todos los agentes desde un único servidor compartido (vLLM, SGLang o llama.cpp con slots paralelos) en lugar de cargar una copia del modelo por agente.',
            },
            {
              q: '¿Ayudan 256 GB de RAM a la inferencia de un modelo 70B en CPU?',
              a: 'Ayudan con la capacidad, no con la velocidad. 256 GB permiten cargar Q8_0 (75 GB) o FP16 (141 GB) con contexto largo, pero la velocidad de decodificación está limitada por los canales de memoria: aproximadamente 0.5-1.5 tokens/s en un equipo de escritorio de doble canal, unos 3-6 en un Threadripper PRO de 8 canales y unos 4-8 en un EPYC de 12 canales, de Q4_K_M a Q8_0 (estimaciones a partir del ancho de banda de la memoria, no benchmarks que hayamos ejecutado).',
            },
            {
              q: '¿Puede el Mac mini M6 ejecutar un modelo 70B?',
              a: 'No. El Mac mini M6 (desde $899) llega como máximo a 32 GB de memoria unificada y 170 GB/s de ancho de banda, por debajo de los 43 GB que necesita un modelo 70B en Q4_K_M. El Mac mini M5 Pro (desde $1,699, 307 GB/s, Thunderbolt 5) se puede configurar con hasta 64 GB; el modelo base de $1,699 tiene 24 GB, así que pide la configuración a medida de 64 GB. Ambos se enviaron el 22 de septiembre de 2026.',
            },
            {
              q: '¿Qué es el NVIDIA DGX Spark y vale la pena para inferencia 70B?',
              a: 'El DGX Spark es el ordenador de IA de escritorio compacto de NVIDIA con 128 GB de memoria unificada LPDDR5x a 273 GB/s. Carga modelos 70B en Q8_0, pero está limitado por el ancho de banda: LMSYS midió 2.7 tokens/s de decodificación para Llama 3.1 70B en FP8. Es más adecuado para trabajo en CUDA, ajuste fino y modelos MoE grandes que para un chat rápido con un 70B denso. NVIDIA subió la Founders Edition de $3,999 a $4,699 en febrero de 2026 y en octubre de 2026 se reportó un precio de $6,950, junto con una versión de 64 GB a $4,999 de los partners.',
            },
            {
              q: '¿Cómo se compara la calidad de un 70B local con la de los modelos en la nube?',
              a: 'Meta reporta 86.0 en MMLU (CoT) y 88.4 en HumanEval para Llama 3.3 70B Instruct. Los modelos de frontera en la nube publicados desde entonces puntúan más alto en tareas intensivas en razonamiento, mientras que los modelos 70B locales siguen siendo competitivos para resumen, extracción, redacción y generación de código rutinaria. Prueba ambos con tus propios prompts, por ejemplo con [PromptQuorum](/es), antes de invertir en hardware para 70B.',
            },
            {
              q: '¿Cuánta electricidad consume ejecutar un modelo 70B?',
              a: 'Una GPU consume hasta su potencia de placa mientras genera: 350 W una RTX 3090, 450 W una RTX 4090 y 575 W una RTX 5090. A $0.15 por kWh, una RTX 4090 a plena carga cuesta unos $0.07 por hora solo por la GPU. Apple Silicon y los equipos de memoria unificada consumen mucha menos energía para el mismo modelo, pero a menor velocidad.',
            },
            {
              q: '¿Valen la pena los modelos 70B frente a modelos más pequeños para tareas cotidianas?',
              a: 'Para razonamiento complejo, análisis de documentos extensos y escritura matizada, normalmente sí. Para resumen simple, preguntas y respuestas y clasificación, un modelo de 7B-14B suele producir una salida similar con una fracción del coste de hardware. Ejecuta ambos con tus propios prompts antes de invertir en hardware para 70B.',
            },
            {
              q: '¿Puedo hacer ajuste fino de un modelo 70B en hardware de consumo?',
              a: 'Solo con QLoRA. QLoRA mantiene el modelo base en 4 bits (unos 35 GB) y entrena adaptadores pequeños; Answer.AI mostró FSDP+QLoRA entrenando un modelo 70B en dos GPU gaming de 24 GB. El ajuste fino completo en 16 bits necesita del orden de 1 TB de memoria y es trabajo para un servidor multi-GPU. Para algo más que ejecuciones ocasionales de QLoRA, alquilar una GPU en la nube de 80 GB suele ser más práctico.',
            },
            {
              q: '¿Cuál es la mejor cuantización para 70B en Apple Silicon?',
              a: 'En un Mac de 64 GB, usa Q4_K_M (43 GB). macOS limita por defecto la memoria direccionable por la GPU a aproximadamente el 75% de la RAM (unos 48 GB en un Mac de 64 GB), así que Q5_K_M (50 GB) solo funciona tras subir el límite con sysctl iogpu.wired_limit_mb, y deja poco margen. Con 96-128 GB, Q8_0 (75 GB) es la opción casi sin pérdida, a aproximadamente la mitad de la velocidad de Q4_K_M porque cada token lee el doble de bytes.',
            },
            {
              q: '¿Elige Ollama automáticamente la mejor cuantización?',
              a: 'No. ollama run llama3.3:70b descarga el Q4_K_M predeterminado (43 GB). Indica la etiqueta para otro nivel, por ejemplo ollama run llama3.3:70b-instruct-q5_K_M u ollama run llama3.3:70b-instruct-q8_0. Ejecuta ollama ps tras cargar el modelo: la columna PROCESSOR muestra qué parte del modelo se ejecuta en GPU y cuál en CPU.',
            },
            {
              q: '¿Puede un iPhone o un laptop ejecutar un modelo 70B?',
              a: 'Un iPhone no: los iPhone actuales tienen 8-12 GB de RAM, mientras que un modelo 70B en Q4_K_M necesita unos 43 GB, así que los teléfonos ejecutan modelos de 1B-8B. Los laptops solo si tienen 64 GB o más de memoria unificada (configuraciones de gama alta del MacBook Pro) o un sistema AMD Ryzen AI Max+ 395 con 128 GB. Los laptops gaming con 16-24 GB de VRAM, como un ASUS ROG Strix, caen en el caso lento de offloading parcial.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fuentes',
          items: [
            '[Ollama: etiquetas y tamaños de Llama 3.3](https://ollama.com/library/llama3.3/tags) -- Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB',
            '[Tarjeta del modelo Meta Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU (CoT) 86.0, HumanEval 88.4, contexto de 128K, licencia',
            '[Tarjeta del modelo Qwen2.5 72B Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 72.7B parámetros, contexto de 131K con YaRN',
            '[Tarjeta del modelo Mistral Large Instruct 2407](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 123B parámetros, Mistral Research License',
            '[LMSYS: análisis en profundidad del NVIDIA DGX Spark](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B FP8 a 2.7 tok/s de decodificación, 273 GB/s',
            '[Apple Newsroom: Mac mini con M6 y M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- precios, memoria, ancho de banda',
            '[9to5Mac: Mac Studio con M5 Max y M5 Ultra](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- precios, memoria base y máxima, ancho de banda',
            '[Foro de desarrolladores de NVIDIA: cambio de precio del DGX Spark](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- de $3,999 a $4,699',
            '[TechnoEdge: subida de precio del DGX Spark y modelo de 64 GB](https://www.techno-edge.net/article/2026/10/08/5565.html) -- precios reportados de $6,950 y $4,999',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- configuración de 64 GB / 1 TB listada a $3,199',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- precios de las ampliaciones de memoria a 48 GB y 64 GB',
            '[Answer.AI: entrena un modelo 70B en casa](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- FSDP + QLoRA en dos GPU de 24 GB',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) -- documentación de GPU offloading y reparto multi-GPU',
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile con 24 GB GDDR7, 96 GB DDR5, coste de hardware de $4,999',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'inLanguage': 'es',
        'headline': 'Ejecutar un LLM 70B en local 2026: RAM, VRAM y velocidad',
        'description': 'Un modelo 70B necesita ~43 GB en Q4_K_M más contexto. RAM, VRAM y tok/s estimados en Mac, DGX Spark, GPU RTX y PC solo con CPU, incl. 256 GB de RAM.',
        'url': 'https://www.promptquorum.com/es/local-llms/70b-models-consumer-hardware',
        'datePublished': '2026-04-04',
        'dateModified': '2026-10-29',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'modelo de lenguaje 70B' },
          { '@type': 'Thing', 'name': 'inferencia Apple Silicon' },
          { '@type': 'Thing', 'name': 'NVIDIA RTX 4090' },
          { '@type': 'Thing', 'name': 'Layer offloading' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'Qwen2.5 72B' },
          { '@type': 'Thing', 'name': 'NVIDIA DGX Spark' },
          { '@type': 'Thing', 'name': 'Apple Mac mini M5 Pro' },
          { '@type': 'Thing', 'name': 'Ancho de banda de memoria' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'es',
        'name': 'Cómo ejecutar un modelo 70B en hardware de consumo con Ollama',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Verifica que tienes 48 GB o más de memoria rápida (memoria unificada, VRAM o RAM) para el modelo más el contexto' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Instala Ollama desde ollama.com' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Ejecuta: ollama run llama3.3:70b' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Comprueba el reparto CPU/GPU con: ollama ps' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Ajusta la cuantización si la memoria es escasa: usa la etiqueta q3_K_S o acorta el contexto' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'es',
        'name': 'Hardware para ejecutar un LLM 70B en local 2026',
        'numberOfItems': 12,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Mac Studio M5 Max (64-128 GB)', 'description': 'Sí -- GPU completa. ~9-11 tok/s (estimación). La base es de 36 GB; 64 GB+ es una ampliación.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Mac Studio M5 Ultra (96 GB+)', 'description': 'Sí -- cabe Q8_0. ~17-21 tok/s (estimación). Desde $5,499 con 96 GB.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mac mini M5 Pro (64 GB)', 'description': 'Sí -- justo. ~4-5 tok/s (estimación). La base de $1,699 trae 24 GB; 64 GB es a medida.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Mac mini M6 (máx. 32 GB)', 'description': 'No. N/D (estimación). 32 GB máx. es menos que el archivo Q4 de ~43 GB.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Mac Studio M2 Ultra (64 GB+, usado)', 'description': 'Sí -- GPU completa. ~12-15 tok/s (estimación). Solo de segunda mano; comprueba la memoria.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'NVIDIA DGX Spark (128 GB)', 'description': 'Sí -- cabe Q8_0. ~4-5 tok/s (estimación). Medido: 2.7 tok/s en FP8; $6,950 reportado.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'AMD Ryzen AI Max+ 395 (128 GB)', 'description': 'Sí. ~4-5 tok/s (estimación). Mini PC y laptops; memoria para GPU configurable.' },
          { '@type': 'ListItem', 'position': 8, 'name': '2x RTX 3090 / 4090 (48 GB)', 'description': 'Sí -- justo. ~12-17 tok/s (estimación). Solo Q4_K_M con contexto corto.' },
          { '@type': 'ListItem', 'position': 9, 'name': 'RTX 5090 (32 GB) + 64 GB RAM', 'description': 'Offloading parcial. ~4-6 tok/s (estimación). ~70% de capas en GPU, el resto en RAM del sistema.' },
          { '@type': 'ListItem', 'position': 10, 'name': 'RTX 4090 (24 GB) + 64 GB RAM', 'description': 'Offloading parcial. ~2-4 tok/s (estimación). ~55% de capas en GPU, el resto en RAM del sistema.' },
          { '@type': 'ListItem', 'position': 11, 'name': 'Solo CPU, DDR5 de doble canal', 'description': 'Sí -- solo CPU. ~1-2 tok/s (estimación). Solo trabajos por lotes.' },
          { '@type': 'ListItem', 'position': 12, 'name': 'Solo CPU, RAM de servidor de 8-12 canales', 'description': 'Sí -- solo CPU. ~5-8 tok/s (estimación). Threadripper PRO / EPYC; 256 GB permite Q8_0.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'es',
        'mainEntity': [
          { '@type': 'Question', 'name': '¿Qué hardware necesito para ejecutar un LLM 70B en local?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Necesitas unos 43 GB de memoria rápida para Llama 3.3 70B en Q4_K_M, más 3-10 GB para el contexto. Tres configuraciones mantienen el modelo entero en memoria rápida: un Mac Apple Silicon con 64 GB o más de memoria unificada, dos GPU NVIDIA de 24 GB (48 GB de VRAM en total) o un equipo de 128 GB de memoria unificada como el NVIDIA DGX Spark o un mini PC con AMD Ryzen AI Max+ 395. La capacidad decide si el modelo se ejecuta; el ancho de banda de la memoria decide con qué rapidez. Una sola GPU de 24 GB o un PC solo con CPU pueden ejecutarlo, pero solo a unos 1-4 tokens/s.' } },
          { '@type': 'Question', 'name': '¿Qué es un modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Un modelo 70B es un modelo de lenguaje grande con unos 70 mil millones de parámetros (pesos). Llama 3.3 70B tiene 70.6 mil millones y Qwen2.5 72B tiene 72.7 mil millones. El tamaño del archivo se deduce del número de parámetros: unos 141 GB a 16 bits, 75 GB a 8 bits (Q8_0) y 43 GB a 4 bits (Q4_K_M).' } },
          { '@type': 'Question', 'name': '¿Cuánta VRAM o RAM necesito para un modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Llama 3.3 70B necesita 43 GB en Q4_K_M, 50 GB en Q5_K_M, 75 GB en Q8_0 y 141 GB en FP16 (tamaños de la biblioteca de Ollama), más la KV cache del contexto: unos 2.7 GB con 8K tokens, 10.7 GB con 32K y 43 GB con 128K. Con 24 GB de VRAM solo cabe en la GPU aproximadamente la mitad de un modelo Q4_K_M, y el resto se ejecuta desde la RAM del sistema.' } },
          { '@type': 'Question', 'name': '¿Cuál es el hardware más barato que puede ejecutar un modelo 70B de forma utilizable?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para unos 10 tokens/s o más, las opciones prácticas son un Mac Studio M5 Max configurado con 64 GB o más (el modelo base de $2,499 tiene 36 GB), un Mac Studio M2 Ultra usado con 64 GB o más, o dos GPU de 24 GB usadas. La opción nueva más barata de Apple es el Mac mini M5 Pro con 64 GB: el modelo base de $1,699 tiene solo 24 GB, y las reseñas sitúan las configuraciones de 64 GB en aproximadamente $2,700-$3,200. Su ancho de banda de 307 GB/s lo limita a unos 4-5 tokens/s. Los precios de calle de las GPU son volátiles: se reportaron anuncios de RTX 5090 muy por encima del precio de lanzamiento de $1,999 en octubre de 2026, así que comprueba los precios actuales.' } },
          { '@type': 'Question', 'name': '¿Puedo ejecutar un modelo 70B en una sola GPU de 24 GB?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí, pero despacio. Una tarjeta de 24 GB como la RTX 4090 aloja aproximadamente el 55% de un modelo 70B en Q4_K_M; las capas restantes se ejecutan desde la RAM del sistema a la velocidad de memoria de la CPU, lo que da aproximadamente 2-4 tokens/s con DDR5 rápida. Para una velocidad interactiva, usa un modelo más pequeño (uno de 27B-34B cabe en 24 GB, por ejemplo Qwen3.8-27B), dos GPU o una máquina de memoria unificada de 64 GB o más.' } },
          { '@type': 'Question', 'name': '¿Puedo ejecutar un modelo 70B en dos GPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Dos tarjetas de 24 GB (RTX 3090 o 4090) ofrecen 48 GB de VRAM, que bastan para un modelo 70B en Q4_K_M (43 GB) con un contexto corto de unos pocos miles de tokens. Ollama y llama.cpp reparten las capas entre ambas tarjetas automáticamente o con --tensor-split. Espera aproximadamente 12-17 tokens/s como estimación, porque cada token pasa por las dos tarjetas en secuencia.' } },
          { '@type': 'Question', 'name': '¿Cuál es el mejor runtime de inferencia para ejecutar LLM 70B en hardware multi-GPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para un solo usuario, Ollama o llama.cpp con reparto por capas es lo más sencillo y funciona con GPU mixtas. Para varios usuarios o agentes concurrentes, vLLM con --tensor-parallel-size igual al número de GPU, o SGLang, ofrecen un rendimiento total mucho mayor porque agrupan las peticiones en lotes; ambos prefieren GPU idénticas y pesos AWQ, GPTQ o FP8. TensorRT-LLM da el mayor rendimiento en NVIDIA, pero requiere un paso de compilación del motor.' } },
          { '@type': 'Question', 'name': '¿Cuánta memoria de GPU necesita un sistema multiagente con backends 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Calcula los pesos una sola vez más una KV cache por sesión concurrente. Llama 3.3 70B en Q4_K_M necesita unos 43 GB para los pesos; cada sesión activa añade unos 0.33 MB por token de contexto en FP16. Por tanto, cuatro agentes con 32K tokens cada uno necesitan unos 43 GB + 43 GB = 86 GB. Sirve a todos los agentes desde un único servidor compartido (vLLM, SGLang o llama.cpp con slots paralelos) en lugar de cargar una copia del modelo por agente.' } },
          { '@type': 'Question', 'name': '¿Ayudan 256 GB de RAM a la inferencia de un modelo 70B en CPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ayudan con la capacidad, no con la velocidad. 256 GB permiten cargar Q8_0 (75 GB) o FP16 (141 GB) con contexto largo, pero la velocidad de decodificación está limitada por los canales de memoria: aproximadamente 0.5-1.5 tokens/s en un equipo de escritorio de doble canal, unos 3-6 en un Threadripper PRO de 8 canales y unos 4-8 en un EPYC de 12 canales, de Q4_K_M a Q8_0 (estimaciones a partir del ancho de banda de la memoria, no benchmarks que hayamos ejecutado).' } },
          { '@type': 'Question', 'name': '¿Puede el Mac mini M6 ejecutar un modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. El Mac mini M6 (desde $899) llega como máximo a 32 GB de memoria unificada y 170 GB/s de ancho de banda, por debajo de los 43 GB que necesita un modelo 70B en Q4_K_M. El Mac mini M5 Pro (desde $1,699, 307 GB/s, Thunderbolt 5) se puede configurar con hasta 64 GB; el modelo base de $1,699 tiene 24 GB, así que pide la configuración a medida de 64 GB. Ambos se enviaron el 22 de septiembre de 2026.' } },
          { '@type': 'Question', 'name': '¿Qué es el NVIDIA DGX Spark y vale la pena para inferencia 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'El DGX Spark es el ordenador de IA de escritorio compacto de NVIDIA con 128 GB de memoria unificada LPDDR5x a 273 GB/s. Carga modelos 70B en Q8_0, pero está limitado por el ancho de banda: LMSYS midió 2.7 tokens/s de decodificación para Llama 3.1 70B en FP8. Es más adecuado para trabajo en CUDA, ajuste fino y modelos MoE grandes que para un chat rápido con un 70B denso. NVIDIA subió la Founders Edition de $3,999 a $4,699 en febrero de 2026 y en octubre de 2026 se reportó un precio de $6,950, junto con una versión de 64 GB a $4,999 de los partners.' } },
          { '@type': 'Question', 'name': '¿Cómo se compara la calidad de un 70B local con la de los modelos en la nube?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Meta reporta 86.0 en MMLU (CoT) y 88.4 en HumanEval para Llama 3.3 70B Instruct. Los modelos de frontera en la nube publicados desde entonces puntúan más alto en tareas intensivas en razonamiento, mientras que los modelos 70B locales siguen siendo competitivos para resumen, extracción, redacción y generación de código rutinaria. Prueba ambos con tus propios prompts, por ejemplo con [PromptQuorum](/es), antes de invertir en hardware para 70B.' } },
          { '@type': 'Question', 'name': '¿Cuánta electricidad consume ejecutar un modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Una GPU consume hasta su potencia de placa mientras genera: 350 W una RTX 3090, 450 W una RTX 4090 y 575 W una RTX 5090. A $0.15 por kWh, una RTX 4090 a plena carga cuesta unos $0.07 por hora solo por la GPU. Apple Silicon y los equipos de memoria unificada consumen mucha menos energía para el mismo modelo, pero a menor velocidad.' } },
          { '@type': 'Question', 'name': '¿Valen la pena los modelos 70B frente a modelos más pequeños para tareas cotidianas?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para razonamiento complejo, análisis de documentos extensos y escritura matizada, normalmente sí. Para resumen simple, preguntas y respuestas y clasificación, un modelo de 7B-14B suele producir una salida similar con una fracción del coste de hardware. Ejecuta ambos con tus propios prompts antes de invertir en hardware para 70B.' } },
          { '@type': 'Question', 'name': '¿Puedo hacer ajuste fino de un modelo 70B en hardware de consumo?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Solo con QLoRA. QLoRA mantiene el modelo base en 4 bits (unos 35 GB) y entrena adaptadores pequeños; Answer.AI mostró FSDP+QLoRA entrenando un modelo 70B en dos GPU gaming de 24 GB. El ajuste fino completo en 16 bits necesita del orden de 1 TB de memoria y es trabajo para un servidor multi-GPU. Para algo más que ejecuciones ocasionales de QLoRA, alquilar una GPU en la nube de 80 GB suele ser más práctico.' } },
          { '@type': 'Question', 'name': '¿Cuál es la mejor cuantización para 70B en Apple Silicon?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'En un Mac de 64 GB, usa Q4_K_M (43 GB). macOS limita por defecto la memoria direccionable por la GPU a aproximadamente el 75% de la RAM (unos 48 GB en un Mac de 64 GB), así que Q5_K_M (50 GB) solo funciona tras subir el límite con sysctl iogpu.wired_limit_mb, y deja poco margen. Con 96-128 GB, Q8_0 (75 GB) es la opción casi sin pérdida, a aproximadamente la mitad de la velocidad de Q4_K_M porque cada token lee el doble de bytes.' } },
          { '@type': 'Question', 'name': '¿Elige Ollama automáticamente la mejor cuantización?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'No. ollama run llama3.3:70b descarga el Q4_K_M predeterminado (43 GB). Indica la etiqueta para otro nivel, por ejemplo ollama run llama3.3:70b-instruct-q5_K_M u ollama run llama3.3:70b-instruct-q8_0. Ejecuta ollama ps tras cargar el modelo: la columna PROCESSOR muestra qué parte del modelo se ejecuta en GPU y cuál en CPU.' } },
          { '@type': 'Question', 'name': '¿Puede un iPhone o un laptop ejecutar un modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Un iPhone no: los iPhone actuales tienen 8-12 GB de RAM, mientras que un modelo 70B en Q4_K_M necesita unos 43 GB, así que los teléfonos ejecutan modelos de 1B-8B. Los laptops solo si tienen 64 GB o más de memoria unificada (configuraciones de gama alta del MacBook Pro) o un sistema AMD Ryzen AI Max+ 395 con 128 GB. Los laptops gaming con 16-24 GB de VRAM, como un ASUS ROG Strix, caen en el caso lento de offloading parcial.' } },
        ],
      },
    },
    ar: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'تشغيل نموذج 70B محليًا 2026: الذاكرة وVRAM والسرعة',
      seoTitle: 'متطلبات عتاد نماذج 70B 2026: الذاكرة وVRAM والسرعة',
      intro: 'يحتاج تشغيل نموذج 70B محليًا إلى نحو 43 GB من الذاكرة السريعة عند Q4_K_M، إضافةً إلى 3-10 GB للسياق. يمكن لجهاز Mac بذاكرة موحدة 64 GB أو أكثر، أو بطاقتَي GPU بسعة 24 GB لكل منهما، أو جهاز بذاكرة موحدة 128 GB أن يحتفظ بالنموذج كاملًا في الذاكرة السريعة. وتعتمد السرعة على عرض نطاق الذاكرة: من 1-2 token/ثانية على معالج مكتبي إلى نحو 10 token/ثانية على Mac Studio M5 Max. ويُعد Llama 3.3 70B وQwen2.5 72B النموذجين الكثيفين الرئيسيين من فئة 70B.',
      metaDescription: 'يحتاج نموذج 70B إلى نحو 43 GB عند Q4_K_M مع السياق. قارن الذاكرة وVRAM والسرعة التقديرية على أجهزة Mac وDGX Spark وبطاقات RTX وحواسيب المعالج فقط، حتى 256 GB.',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-ar.webp',
      publishDate: '2026-04-04',
      dateModified: '2026-10-29',
      leadAnswerBlock: '**يحتاج نموذج 70B إلى نحو 43 GB من الذاكرة عند Q4_K_M (Llama 3.3 70B) إضافةً إلى 3-10 GB للسياق، وتحدد سرعته عرضُ نطاق الذاكرة لا سعتها. يحتفظ بالنموذج كاملًا في الذاكرة السريعة جهازُ Mac بسعة 64 GB أو أكثر، أو بطاقتا GPU بسعة 24 GB لكل منهما، أو جهاز بذاكرة موحدة 128 GB؛ أما بطاقة GPU واحدة بسعة 24 GB أو حاسوب بالمعالج فقط فيشغّله بنحو 1-4 token/ثانية.**',
      audience: 'المطورون المعتادون على Ollama أو LM Studio الذين يحسّنون تدفقات العمل مع نماذج LLM المحلية',
      readTime: '11 دقيقة للقراءة',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B LLM محلي عتاد المستهلك',
      toc: [
        { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
        { label: 'ما هو نموذج 70B؟', anchor: '#what-is-70b' },
        { label: 'ما العتاد الذي تحتاجه؟', anchor: '#what-hardware' },
        { label: 'متطلبات الذاكرة حسب التكميم', anchor: '#ram-requirements' },
        { label: 'ذاكرة السياق وKV Cache', anchor: '#context-memory' },
        { label: 'لماذا يحدد عرض النطاق السرعة', anchor: '#memory-bandwidth' },
        { label: 'Apple Silicon', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark وأجهزة الذاكرة الموحدة', anchor: '#dgx-spark' },
        { label: 'GPU من NVIDIA + Layer Offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'محركات الاستدلال متعددة GPU', anchor: '#multi-gpu-runtimes' },
        { label: 'الاستدلال بـ 70B على المعالج فقط', anchor: '#cpu-only' },
        { label: 'نماذج MoE من فئة 70B', anchor: '#moe-models' },
        { label: 'أي نموذج 70B تشغّل؟', anchor: '#which-model' },
        { label: 'الضبط الدقيق لنموذج 70B', anchor: '#fine-tuning' },
        { label: 'السياق الإقليمي', anchor: '#regional-context' },
        { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
        { label: 'قراءات ذات صلة', anchor: '#related-reading' },
        { label: 'الأسئلة الشائعة', anchor: '#faq' },
        { label: 'المصادر', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: 'يحتاج نموذج 70B إلى نحو 43 GB من الذاكرة عند Q4_K_M إضافةً إلى 3-10 GB للسياق، ويولّد تقريبًا عدد token في الثانية يساوي عرض النطاق مقسومًا على حجم النموذج؛ لذا يشغّله جهاز Mac بسعة 64 GB أو أكثر أو بطاقتا GPU بسعة 24 GB أو جهاز بذاكرة موحدة 128 GB داخل الذاكرة السريعة، بينما تحقق بطاقة GPU واحدة بسعة 24 GB نحو 2-4 token/ثانية.',
            },
            {
              type: 'plain-terms',
              text: 'نموذج 70B هو نموذج ذكاء اصطناعي ضخم يضم نحو 70 مليار رقم قابل للضبط. يتطلب تحميله نحو 43 GB من الذاكرة، وتعتمد سرعة إجاباته على مدى سرعة قراءة هذه الذاكرة. الطريق المريح هو جهاز Mac بذاكرة موحدة كبيرة أو بطاقتان رسوميتان كبيرتان؛ أما الحاسوب العادي ببطاقة رسوميات واحدة فيعمل لكن إجاباته بطيئة.',
            },
          ],
          items: [
            'الذاكرة عند Q4_K_M: يبلغ حجم Llama 3.3 70B نحو 43 GB، وQ5_K_M نحو 50 GB، وQ8_0 نحو 75 GB، وFP16 نحو 141 GB. ويضيف السياق نحو 2.7 GB لكل 8K token.',
            '**قاعدة السرعة**: سقف token في الثانية هو عرض نطاق الذاكرة مقسومًا على حجم النموذج، وتبلغ السرعة الفعلية عادةً 60-80% من هذا السقف. 43 GB على 614 GB/s يعطي سقفًا يقارب 14 tok/s.',
            '**أفضل سرعة للمستهلك**: Mac Studio M5 Max بتهيئة 64 GB أو أكثر (نحو 9-11 tok/s) أو بطاقتا GPU بسعة 24 GB (نحو 12-17 tok/s)؛ ويصل Mac Studio M5 Ultra إلى 17-21 tok/s وفق التقدير.',
            '**Mac mini**: طراز M5 Pro بسعر $1,699 يأتي بسعة 24 GB؛ أما 64 GB فهي ترقية حسب الطلب تمنح نحو 4-5 tok/s. ولا يستطيع Mac mini M6 (32 GB كحد أقصى) تشغيل 70B.',
            '**DGX Spark**: ذاكرة 128 GB لكن عرض النطاق 273 GB/s فقط؛ وقاس LMSYS سرعة 2.7 tok/s لنموذج 70B بدقة FP8. اشتره من أجل CUDA ونماذج MoE الكبيرة، لا من أجل محادثة سريعة مع نموذج 70B كثيف.',
            '**بطاقة GPU واحدة بسعة 24 GB أو المعالج فقط**: نحو 2-4 tok/s مع RTX 4090 وذاكرة DDR5 سريعة، و1-2 tok/s على معالج مكتبي. وتضيف ذاكرة 256 GB سعةً (Q8_0 وFP16 وسياقًا طويلًا) لا سرعة.',
            'لا يوجد Qwen3 72B: النموذج ذو 72B هو Qwen2.5 72B. أما النماذج المفتوحة الكبيرة الأحدث فمعظمها من نوع مزيج الخبراء (MoE).',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: 'ما هو نموذج 70B؟',
          content: [
            '**نموذج 70B هو نموذج لغوي كبير يضم نحو 70 مليار معامل -- أي الأوزان المتعلَّمة التي تشكّل الشبكة.** يرمز الحرف B إلى المليار. يضم Llama 3.3 70B نحو 70.6 مليار معامل، ويضم Qwen2.5 72B نحو 72.7 مليار.',
            'الذاكرة المطلوبة هي عدد المعاملات مضروبًا في عدد البايتات لكل وزن: يشغل الوزن بدقة 16 بت بايتين (نحو 141 GB)، وبدقة 8 بت (Q8_0) نحو بايت واحد (75 GB)، وبدقة 4 بت Q4_K_M نحو 0.6 بايت (43 GB). ولهذا فإن 70B هو الحجم الذي يحتاج عنده عتاد المستهلك لأول مرة إلى أكثر من 40 GB من الذاكرة السريعة، بينما تتسع نماذج 7B-14B على حاسوب محمول عادي.',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: 'ما العتاد الذي تحتاجه لتشغيل LLM محلي بـ 70B؟',
          content: [
            '**تحتاج إلى نحو 43 GB من الذاكرة السريعة للنموذج و3-10 GB للسياق، سواء كانت VRAM في GPU أو ذاكرة موحدة من Apple أو ذاكرة نظام -- وكلما كانت هذه الذاكرة أسرع، ولّد النموذج أسرع.**',
            'السرعات أدناه تقديرات لمحادثة مستخدم واحد بسياق قصير، مشتقة من عرض نطاق الذاكرة (انظر «لماذا يحدد عرض النطاق السرعة»). هي سقوف خُفّضت إلى كفاءة نموذجية بين 60-80%، وليست اختبارات أجرتها PromptQuorum؛ والاستثناء رقم DGX Spark الذي قاسه أطراف خارجية.',
          ],
          rows: [
            {
              'العتاد': 'Mac Studio M5 Max (64-128 GB)',
              'هل يتسع 70B بـ Q4؟': 'نعم -- GPU كاملة',
              'عرض نطاق الذاكرة': 'حتى 614 GB/s',
              'السرعة التقديرية (Q4_K_M)': '~9-11 tok/s',
              'ملاحظات': 'التهيئة الأساسية 36 GB؛ 64 GB+ ترقية',
            },
            {
              'العتاد': 'Mac Studio M5 Ultra (96 GB+)',
              'هل يتسع 70B بـ Q4؟': 'نعم -- يتسع Q8_0',
              'عرض نطاق الذاكرة': 'حتى 1.2 TB/s',
              'السرعة التقديرية (Q4_K_M)': '~17-21 tok/s',
              'ملاحظات': 'من $5,499 مع 96 GB',
            },
            {
              'العتاد': 'Mac mini M5 Pro (64 GB)',
              'هل يتسع 70B بـ Q4؟': 'نعم -- بهامش ضيق',
              'عرض نطاق الذاكرة': '307 GB/s',
              'السرعة التقديرية (Q4_K_M)': '~4-5 tok/s',
              'ملاحظات': 'الطراز الأساسي $1,699 بسعة 24 GB؛ 64 GB حسب الطلب',
            },
            { 'العتاد': 'Mac mini M6 (32 GB كحد أقصى)', 'هل يتسع 70B بـ Q4؟': 'لا', 'عرض نطاق الذاكرة': '170 GB/s', 'السرعة التقديرية (Q4_K_M)': 'غير متاح', 'ملاحظات': '32 GB أقل من ملف Q4 البالغ نحو 43 GB' },
            {
              'العتاد': 'Mac Studio M2 Ultra (64 GB+، مستعمل)',
              'هل يتسع 70B بـ Q4؟': 'نعم -- GPU كاملة',
              'عرض نطاق الذاكرة': '800 GB/s',
              'السرعة التقديرية (Q4_K_M)': '~12-15 tok/s',
              'ملاحظات': 'سوق المستعمل فقط؛ تحقق من حجم الذاكرة',
            },
            {
              'العتاد': 'NVIDIA DGX Spark (128 GB)',
              'هل يتسع 70B بـ Q4؟': 'نعم -- يتسع Q8_0',
              'عرض نطاق الذاكرة': '273 GB/s',
              'السرعة التقديرية (Q4_K_M)': '~4-5 tok/s',
              'ملاحظات': '2.7 tok/s مقيسة بـ FP8؛ سعر مُفاد $6,950',
            },
            {
              'العتاد': 'AMD Ryzen AI Max+ 395 (128 GB)',
              'هل يتسع 70B بـ Q4؟': 'نعم',
              'عرض نطاق الذاكرة': '256 GB/s',
              'السرعة التقديرية (Q4_K_M)': '~4-5 tok/s',
              'ملاحظات': 'أجهزة Mini PC وحواسيب محمولة؛ حصة ذاكرة GPU قابلة للضبط',
            },
            {
              'العتاد': '2x RTX 3090 / 4090 (48 GB)',
              'هل يتسع 70B بـ Q4؟': 'نعم -- بهامش ضيق',
              'عرض نطاق الذاكرة': '936-1,008 GB/s لكل بطاقة',
              'السرعة التقديرية (Q4_K_M)': '~12-17 tok/s',
              'ملاحظات': 'Q4_K_M مع سياق قصير فقط',
            },
            {
              'العتاد': 'RTX 5090 (32 GB) + 64 GB RAM',
              'هل يتسع 70B بـ Q4؟': 'offload جزئي',
              'عرض نطاق الذاكرة': '1,792 GB/s لـ VRAM',
              'السرعة التقديرية (Q4_K_M)': '~4-6 tok/s',
              'ملاحظات': 'نحو 70% من الطبقات على GPU والباقي في ذاكرة النظام',
            },
            {
              'العتاد': 'RTX 4090 (24 GB) + 64 GB RAM',
              'هل يتسع 70B بـ Q4؟': 'offload جزئي',
              'عرض نطاق الذاكرة': '1,008 GB/s لـ VRAM',
              'السرعة التقديرية (Q4_K_M)': '~2-4 tok/s',
              'ملاحظات': 'نحو 55% من الطبقات على GPU والباقي في ذاكرة النظام',
            },
            {
              'العتاد': 'Olares One (RTX 5090 Mobile 24 GB + 96 GB RAM)',
              'هل يتسع 70B بـ Q4؟': 'offload جزئي',
              'عرض نطاق الذاكرة': 'VRAM غير منشور / RAM ~90 GB/s',
              'السرعة التقديرية (Q4_K_M)': '~2-4 tok/s',
              'ملاحظات': 'VRAM من نوع GDDR7 بسعة 24 GB؛ تكلفة العتاد $4,999',
            },
            { 'العتاد': 'المعالج فقط، DDR5 ثنائية القناة', 'هل يتسع 70B بـ Q4؟': 'نعم -- المعالج فقط', 'عرض نطاق الذاكرة': '~90 GB/s', 'السرعة التقديرية (Q4_K_M)': '~1-2 tok/s', 'ملاحظات': 'للمهام الدُفعية فقط' },
            {
              'العتاد': 'المعالج فقط، ذاكرة خادم 8-12 قناة',
              'هل يتسع 70B بـ Q4؟': 'نعم -- المعالج فقط',
              'عرض نطاق الذاكرة': '350-460 GB/s',
              'السرعة التقديرية (Q4_K_M)': '~5-8 tok/s',
              'ملاحظات': 'Threadripper PRO / EPYC؛ ذاكرة 256 GB تتيح Q8_0',
            },
          ],
          columns: ['العتاد', 'هل يتسع 70B بـ Q4؟', 'عرض نطاق الذاكرة', 'السرعة التقديرية (Q4_K_M)', 'ملاحظات'],
          callouts: [
            { type: 'insight', text: '**Olares One** ([olares.com/one](https://www.olares.com/one)) جهاز مكتبي مدمج للذكاء الاصطناعي يضم RTX 5090 Mobile بذاكرة VRAM من نوع GDDR7 بسعة 24 GB، ومعالج Intel Core Ultra 9 275HX، وذاكرة RAM من نوع DDR5-5600 بسعة 96 GB (قابلة للتوسعة إلى 128 GB بحسب Olares). مع نماذج 70B يتصرف مثل صف RTX 4090 أعلاه: يتسع نحو 55% من نموذج Q4_K_M في VRAM ويُقرأ الباقي من ذاكرة النظام، ولذلك يُتوقع نحو 2-4 tokens/s (تقدير وليس اختبار أداء). تزيد ذاكرة RAM بسعة 96 GB السعة لا السرعة: يتسع Q8_0 (75 GB) مع هامش للسياق. تذكر Olares تكلفة عتاد قدرها $4,999 ولا تنشر أرقام tokens/s لنماذج 70B.' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: 'كم تحتاج من الذاكرة أو VRAM لنموذج 70B عند كل مستوى تكميم؟',
          content: 'الأحجام أدناه هي ملفات Llama 3.3 70B في مكتبة Ollama؛ وتختلف نماذج 70B الأخرى بنسبة بضعة بالمئة. وهي تخص الأوزان فقط -- أضف إليها ذاكرة السياق من القسم التالي.',
          rows: [
            { 'التكميم': 'FP16 (دقة كاملة)', 'الذاكرة (الأوزان)': '~141 GB', 'الجودة': 'جودة مرجعية', 'عملي؟': 'Mac Ultra بسعة 192 GB+ أو خادم RAM 256 GB' },
            { 'التكميم': 'Q8_0', 'الذاكرة (الأوزان)': '~75 GB', 'الجودة': 'شبه بلا فقدان', 'عملي؟': 'ذاكرة موحدة 96-128 GB أو RAM 128 GB' },
            { 'التكميم': 'Q6_K', 'الذاكرة (الأوزان)': '~58 GB', 'الجودة': 'قريب جدًا من Q8_0', 'عملي؟': 'أجهزة بسعة 72-96 GB' },
            { 'التكميم': 'Q5_K_M', 'الذاكرة (الأوزان)': '~50 GB', 'الجودة': 'فقدان ضئيل', 'عملي؟': 'Mac بسعة 64 GB بعد رفع حد GPU -- بهامش ضيق' },
            { 'التكميم': 'Q4_K_M', 'الذاكرة (الأوزان)': '~43 GB', 'الجودة': 'فقدان منخفض -- الافتراضي', 'عملي؟': 'نعم -- Mac بسعة 64 GB أو GPU مزدوجة 48 GB' },
            { 'التكميم': 'Q3_K_S', 'الذاكرة (الأوزان)': '~31 GB', 'الجودة': 'فقدان معتدل', 'عملي؟': 'نعم -- أجهزة بسعة 40-48 GB' },
            { 'التكميم': 'Q2_K', 'الذاكرة (الأوزان)': '~26 GB', 'الجودة': 'فقدان مرتفع', 'عملي؟': 'غير موصى به' },
          ],
          columns: ['التكميم', 'الذاكرة (الأوزان)', 'الجودة', 'عملي؟'],
        },
        contextMemory: {
          id: 'context-memory',
          title: 'كم تضيف ذاكرة السياق إلى نموذج 70B؟',
          content: [
            '**يضيف السياق ذاكرة فوق الأوزان: يخزّن Llama 3.3 70B نحو 0.33 MB من KV cache لكل token بدقة FP16، أي نحو 2.7 GB عند 8K token، و10.7 GB عند 32K، و43 GB عند 128K.** ويأتي الرقم من بنية النموذج: 80 طبقة × 8 رؤوس مفتاح-قيمة × 128 بعدًا × 2 (المفاتيح والقيم) × 2 بايت = 327,680 بايتًا لكل token.',
            'تحتفظ كل جلسة متزامنة بـ KV cache الخاص بها بينما تُشارَك الأوزان. فنظام متعدد الوكلاء بأربعة وكلاء، لكل منهم 32K token، يحتاج إلى نحو 43 GB للأوزان إضافةً إلى 43 GB للـ cache. وتفعيل flash attention وKV cache بدقة 8 بت في Ollama (OLLAMA_FLASH_ATTENTION=1 وOLLAMA_KV_CACHE_TYPE=q8_0) يخفض الـ cache إلى نحو النصف.',
          ],
          rows: [
            { 'طول السياق': '8K token', 'KV cache (FP16)': '~2.7 GB', 'الإجمالي مع Q4_K_M': '~46 GB' },
            { 'طول السياق': '32K token', 'KV cache (FP16)': '~10.7 GB', 'الإجمالي مع Q4_K_M': '~54 GB' },
            { 'طول السياق': '128K token', 'KV cache (FP16)': '~43 GB', 'الإجمالي مع Q4_K_M': '~86 GB' },
          ],
          columns: ['طول السياق', 'KV cache (FP16)', 'الإجمالي مع Q4_K_M'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: 'لماذا يحدد عرض نطاق الذاكرة سرعة نموذج 70B؟',
          content: [
            '**يقرأ كل token مولَّد أوزان النموذج كلها مرة واحدة، لذا فإن سرعة التوليد محدودة بعرض نطاق الذاكرة مقسومًا على حجم النموذج.** نموذج Q4_K_M بحجم 43 GB على عرض نطاق 614 GB/s سقفه نحو 14 token/ثانية؛ والسرعة الفعلية عادةً 60-80% من السقف.',
            'وتفسّر القاعدة نفسها لماذا لا تعني الذاكرة الكبيرة سرعةً عالية: يملك DGX Spark بسعة 128 GB عرض نطاق 273 GB/s، أي سقفًا يقارب 6 token/ثانية عند Q4_K_M، وقاس LMSYS سرعة 2.7 token/ثانية لنموذج Llama 3.1 70B بدقة FP8 (نحو 70 GB، سقف 3.9). السعة تحدد هل يعمل النموذج، وعرض النطاق يحدد سرعته. أما معالجة المُدخل (prefill) فهي محكومة بالحوسبة وتتصرف بشكل مختلف.',
          ],
          rows: [
            { 'الذاكرة': 'DDR5-5600 ثنائية القناة', 'عرض النطاق': '~90 GB/s', 'السقف عند 43 GB': '~2 tok/s' },
            { 'الذاكرة': 'AMD Ryzen AI Max+ 395', 'عرض النطاق': '256 GB/s', 'السقف عند 43 GB': '~6 tok/s' },
            { 'الذاكرة': 'NVIDIA DGX Spark', 'عرض النطاق': '273 GB/s', 'السقف عند 43 GB': '~6 tok/s' },
            { 'الذاكرة': 'Apple M5 Pro', 'عرض النطاق': '307 GB/s', 'السقف عند 43 GB': '~7 tok/s' },
            { 'الذاكرة': 'Apple M5 Max', 'عرض النطاق': 'حتى 614 GB/s', 'السقف عند 43 GB': '~14 tok/s' },
            { 'الذاكرة': 'Apple M2 Ultra', 'عرض النطاق': '800 GB/s', 'السقف عند 43 GB': '~19 tok/s' },
            { 'الذاكرة': 'Apple M5 Ultra', 'عرض النطاق': 'حتى 1.2 TB/s', 'السقف عند 43 GB': '~28 tok/s' },
          ],
          columns: ['الذاكرة', 'عرض النطاق', 'السقف عند 43 GB'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: 'هل Apple Silicon خيار جيد لنماذج 70B؟',
          content: [
            '**Apple Silicon هو أبسط طريقة لإبقاء نموذج 70B كاملًا في ذاكرة يصل إليها GPU، لأن المعالج وGPU يتشاركان مجمّع ذاكرة موحدة واحدًا.** يشغّل جهاز Mac بسعة 64 GB أو أكثر نموذج Q4_K_M دون layer offloading، بسرعة يحددها عرض نطاق الشريحة: نحو 9-11 token/ثانية على M5 Max و12-15 على M2 Ultra مستعمل (تقديرات). ولم نعثر بعد على اختبارات منشورة لنموذج 70B على شرائح M5.',
            'أعلنت Apple عن Mac Studio بشريحتَي M5 Max وM5 Ultra في 25 أغسطس 2026، وبدأ شحن الطرازين في 22 سبتمبر 2026. يبدأ M5 Max من $2,499 مع 36 GB ويصل إلى 128 GB بعرض نطاق يبلغ 614 GB/s -- فاضبط التهيئة على 64 GB أو أكثر لنموذج 70B. ويبدأ M5 Ultra من $5,499 مع 96 GB ويصل إلى 512 GB بعرض نطاق يبلغ 1.2 TB/s، ويشغّل Q8_0 براحة؛ وأُدرجت تهيئة 512 GB على أنها تصل في أواخر أكتوبر.',
            '**يبدأ Mac mini M5 Pro من $1,699 مع 24 GB، وليس 64 GB.** تهيئة 64 GB حسب الطلب (307 GB/s وThunderbolt 5) تستوعب نموذج 70B بتكميم Q4_K_M لكنها تولّد نحو 4-5 token/ثانية فقط، وتضعها المراجعات عند نحو $2,700-$3,200 بحسب المعالج والتخزين. أما Mac mini M6 الأساسي ($899) فيبلغ حده الأقصى 32 GB وعرض نطاق 170 GB/s ولا يستطيع تشغيل نموذج 70B عند أي تكميم.',
            'يقيّد macOS ذاكرة GPU القابلة للعنونة افتراضيًا بنحو 75% من الذاكرة (نحو 48 GB على Mac بسعة 64 GB). ولتشغيل Q5_K_M (50 GB) ارفع الحد، مثلًا sudo sysctl iogpu.wired_limit_mb=57344 على Mac بسعة 64 GB؛ يُعاد ضبط الإعداد عند إعادة التشغيل ويترك لنظام التشغيل نحو 8 GB فقط.',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: 'هل NVIDIA DGX Spark (أو حاسوب Strix Halo بسعة 128 GB) جيد لنماذج 70B؟',
          content: [
            '**NVIDIA DGX Spark هو حاسوب مكتبي مدمج للذكاء الاصطناعي بذاكرة موحدة LPDDR5x سعتها 128 GB وعرض نطاقها 273 GB/s، مبني على GB10 Grace Blackwell Superchip مع دعم CUDA.** يحمّل نموذج 70B حتى عند Q8_0 (75 GB)، لكن عرض النطاق يحد من التوليد: قاس LMSYS سرعة 2.7 token/ثانية لنموذج Llama 3.1 70B بدقة FP8، وأُفيد بأن تجارب المجتمع على llama.cpp عند Q4_K_M تقع في نطاق 4-5 token/ثانية.',
            'تحركت الأسعار بحدة. رفعت NVIDIA سعر إصدار Founders Edition من $3,999 إلى $4,699 في فبراير 2026 بسبب قيود إمداد الذاكرة، وأُفيد بسعر $6,950 في أكتوبر 2026، إلى جانب نسخة 64 GB بسعر $4,999 تبيعها جهات شريكة اعتبارًا من 23 أكتوبر 2026. تحقق من الأسعار الحالية قبل الشراء.',
            'تقدّم أجهزة AMD Ryzen AI Max+ 395 («Strix Halo») من Mini PC والحواسيب المحمولة ذاكرة LPDDR5X بسعة 128 GB وعرض نطاق 256 GB/s، أي من الفئة نفسها، مع تقدير مماثل يبلغ نحو 4-5 token/ثانية لنموذج 70B كثيف. وكلتا المنصتين أنسب لنماذج مزيج الخبراء (انظر أدناه) ولأعمال CUDA أو الضبط الدقيق منهما لمحادثة نموذج 70B كثيف.',
          ],
          rows: [
            { 'المواصفة': 'الذاكرة', 'القيمة': '128 GB موحدة LPDDR5x' },
            { 'المواصفة': 'عرض نطاق الذاكرة', 'القيمة': '273 GB/s' },
            { 'المواصفة': '70B عند Q8_0 (75 GB)', 'القيمة': 'يتسع' },
            { 'المواصفة': 'توليد 70B، مقيس', 'القيمة': '2.7 tok/s بـ FP8 (LMSYS، SGLang)' },
            { 'المواصفة': 'أقصى حجم للنموذج', 'القيمة': '~200B معامل بـ FP4' },
            { 'المواصفة': 'السعر', 'القيمة': 'مُفاد $6,950؛ سعر القائمة $4,699 (فبراير 2026)' },
            { 'المواصفة': 'أمر Ollama', 'القيمة': 'ollama run llama3.3:70b' },
          ],
          columns: ['المواصفة', 'القيمة'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: 'كيف يعمل GPU من NVIDIA مع layer offloading لنماذج 70B؟',
          content: [
            '**يقسّم Ollama وllama.cpp النموذج بين VRAM الخاصة بـ GPU وذاكرة النظام: تعمل الطبقات الموجودة في VRAM بسرعة GPU، وتعمل الطبقات الموجودة في RAM بسرعة ذاكرة المعالج، ويهيمن الجزء البطيء على الأداء.** مع RTX 4090 (24 GB) يتسع نحو 55% من نموذج 70B بتكميم Q4_K_M على GPU، ويُقرأ الباقي من DDR5 بنحو 90 GB/s، مما يحصر التوليد في نحو 2-4 token/ثانية. وتستوعب RTX 5090 (32 GB) نحو 70% وتبلغ تقديريًا 4-6 token/ثانية.',
            'يقوم Ollama بالـ offloading تلقائيًا دون الحاجة إلى أي علَم. شغّل ollama ps لرؤية التقسيم (العمود PROCESSOR، مثل 45%/55% CPU/GPU). وفي llama.cpp حدّد عدد الطبقات بالعلَم -ngl.',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: 'ما أفضل محرك استدلال لنموذج 70B على عدة GPU؟',
          content: [
            '**لمستخدم واحد، يُعد Ollama أو llama.cpp مع تقسيم الطبقات أبسط مسار متعدد GPU؛ أما لعدة مستخدمين أو وكلاء متزامنين، فيقدّم vLLM أو SGLang مع tensor parallelism إنتاجية إجمالية أعلى بكثير.** تمنحك بطاقتان بسعة 24 GB (RTX 3090 أو 4090) ذاكرة 48 GB، وهي تكفي لـ Q4_K_M مع سياق قصير.',
            'يمرّر تقسيم الطبقات التنشيطات بين البطاقتين مرة واحدة لكل token ويعمل عبر PCIe العادي، فيناسب البطاقات المختلطة أو الاستهلاكية. أما tensor parallelism فيقسّم كل طبقة عبر وحدات GPU ويستفيد من الوصلات السريعة: تدعم RTX 3090 جسر NVLink بينما لا تدعمه RTX 4090 ولا 5090.',
          ],
          rows: [
            { 'محرك الاستدلال': 'Ollama', 'طريقة تعدد GPU': 'تقسيم تلقائي للطبقات', 'الأنسب لـ': 'مستخدم واحد، أسهل إعداد' },
            { 'محرك الاستدلال': 'llama.cpp', 'طريقة تعدد GPU': '--split-mode, --tensor-split', 'الأنسب لـ': 'وحدات GPU مختلطة، تكميمات GGUF' },
            { 'محرك الاستدلال': 'vLLM', 'طريقة تعدد GPU': '--tensor-parallel-size N', 'الأنسب لـ': 'مستخدمون أو وكلاء كثر؛ AWQ/GPTQ/FP8' },
            { 'محرك الاستدلال': 'SGLang', 'طريقة تعدد GPU': 'Tensor parallelism', 'الأنسب لـ': 'وكلاء ببادئات prompt مشتركة' },
            { 'محرك الاستدلال': 'TensorRT-LLM', 'طريقة تعدد GPU': 'Tensor / pipeline parallel', 'الأنسب لـ': 'أقصى إنتاجية NVIDIA؛ يتطلب بناء engine' },
          ],
          columns: ['محرك الاستدلال', 'طريقة تعدد GPU', 'الأنسب لـ'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: 'هل الاستدلال بـ 70B على المعالج فقط عملي، وهل تفيد ذاكرة 256 GB؟',
          content: [
            '**يتحدد الاستدلال بـ 70B على المعالج فقط بعرض نطاق الذاكرة: تعطي DDR5 المكتبية ثنائية القناة (نحو 90 GB/s) تقريبًا 1-2 token/ثانية عند Q4_K_M، وزيادة سعة الذاكرة لا تجعله أسرع.** عند 1.5 token/ثانية يستغرق رد من 200 كلمة (نحو 270 token) قرابة ثلاث دقائق.',
            'تغيّر ذاكرة 256 GB ما يمكن تحميله لا سرعة تشغيله: فهي تستوعب Q8_0 (75 GB) أو FP16 (141 GB) مع سياق طويل. وتعتمد السرعة على قنوات الذاكرة -- فخادم Threadripper PRO بـ 8 قنوات أو EPYC بـ 12 قناة يملك عرض نطاق يعادل ثلاثة إلى خمسة أضعاف الحاسوب المكتبي. وكثيرًا ما تعمل اللوحات المكتبية ذات أربع شرائح ذاكرة كبيرة بذاكرة أبطأ مما لو استخدمت شريحتين. كما أن معالجة المُدخل على المعالج بطيئة أيضًا مع المدخلات الطويلة.',
            'التقديرات أدناه تطبّق قاعدة عرض النطاق بكفاءة 70%؛ وهي ليست اختبارات مقيسة.',
          ],
          rows: [
            { 'إعداد المعالج / الذاكرة': 'مكتبي، DDR5-5600 ثنائية القناة', 'عرض النطاق': '~90 GB/s', 'Q4_K_M (43 GB)': '~1-1.5 tok/s', 'Q8_0 (75 GB)': '~0.6-0.9 tok/s', 'FP16 (141 GB)': '~0.3-0.5 tok/s' },
            { 'إعداد المعالج / الذاكرة': 'Threadripper PRO، DDR5-5600 بـ 8 قنوات', 'عرض النطاق': '~358 GB/s', 'Q4_K_M (43 GB)': '~5-6 tok/s', 'Q8_0 (75 GB)': '~3-3.5 tok/s', 'FP16 (141 GB)': '~1.5-1.8 tok/s' },
            { 'إعداد المعالج / الذاكرة': 'EPYC، DDR5-4800 بـ 12 قناة', 'عرض النطاق': '~461 GB/s', 'Q4_K_M (43 GB)': '~7-8 tok/s', 'Q8_0 (75 GB)': '~4-4.5 tok/s', 'FP16 (141 GB)': '~2-2.5 tok/s' },
          ],
          columns: ['إعداد المعالج / الذاكرة', 'عرض النطاق', 'Q4_K_M (43 GB)', 'Q8_0 (75 GB)', 'FP16 (141 GB)'],
        },
        moe: {
          id: 'moe-models',
          title: 'هل تغيّر نماذج MoE من فئة 70B حسابات العتاد؟',
          content: [
            '**تحتاج نماذج مزيج الخبراء (MoE) إلى ذاكرة لجميع معاملاتها لكنها تقرأ الخبراء النشطين فقط لكل token، لذا تولّد أسرع بكثير من نموذج 70B كثيف له البصمة الذاكرية نفسها.** يضم gpt-oss-120b من OpenAI نحو 117 مليار معامل منها نحو 5.1 مليار نشطة؛ ويضم Llama 4 Scout من Meta نحو 109 مليارات منها 17 مليارًا نشطة.',
            'تنطبق قاعدة عرض النطاق على الأوزان النشطة، لذا تستفيد نماذج MoE أفضل استفادة من الأجهزة عالية السعة ومتوسطة عرض النطاق مثل DGX Spark وأجهزة Ryzen AI Max+ 395 وMac mini M5 Pro بسعة 64 GB. أما لنموذج 70B كثيف على هذا العتاد فتوقع 4-5 token/ثانية؛ وقارن حجم ملف كل نموذج MoE بذاكرتك قبل التنزيل.',
          ],
        },
        which70b: {
          id: 'which-model',
          title: 'أي نموذج 70B تشغّله محليًا؟',
          content: [
            '**Llama 3.3 70B هو نموذج 70B الكثيف الافتراضي: تعلن Meta عن 86.0 في MMLU (CoT) و88.4 في HumanEval، مع نافذة سياق 128K.** ويُعد Qwen2.5 72B البديل الرئيسي للاستخدام متعدد اللغات والبرمجة. لا يوجد Qwen3 72B -- فنماذج Qwen3 الكثيفة تتوقف عند 32B -- لذا فإن أي إشارة إلى «Qwen3 72B» تعني Qwen2.5 72B.',
            'الأوامر: ollama run llama3.3:70b، وollama run qwen2.5:72b، وollama run deepseek-r1:70b.',
          ],
          rows: [
            { 'النموذج': 'Llama 3.3 70B', 'المعاملات': '70.6B كثيف', 'الترخيص': 'Llama 3.3 Community License', 'الأنسب لـ': 'الإنجليزية العامة، اتباع التعليمات' },
            { 'النموذج': 'Qwen2.5 72B Instruct', 'المعاملات': '72.7B كثيف', 'الترخيص': 'Qwen License', 'الأنسب لـ': 'متعدد اللغات، برمجة؛ 131K مع YaRN' },
            { 'النموذج': 'DeepSeek-R1-Distill-Llama-70B', 'المعاملات': '70B كثيف', 'الترخيص': 'انظر بطاقة النموذج', 'الأنسب لـ': 'الاستدلال؛ المخرجات الطويلة تبطئ الردود' },
            { 'النموذج': 'Mistral Large 2', 'المعاملات': '123B كثيف', 'الترخيص': 'Mistral Research License', 'الأنسب لـ': 'للبحث فقط؛ نحو 75 GB عند Q4' },
          ],
          columns: ['النموذج', 'المعاملات', 'الترخيص', 'الأنسب لـ'],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: 'ما العتاد اللازم للضبط الدقيق لنموذج 70B؟',
          content: [
            '**يحتاج الضبط الدقيق بـ QLoRA لنموذج 70B إلى نحو 35-48 GB من ذاكرة GPU لكل تشغيل: بطاقتان بسعة 24 GB مع FSDP+QLoRA، أو بطاقة GPU واحدة بسعة 48-80 GB.** يُبقي QLoRA النموذج الأساسي بدقة 4 بت (نحو 35 GB) ويدرّب محوّلات صغيرة؛ وقد أظهرت Answer.AI ذلك على بطاقتَي ألعاب بسعة 24 GB.',
            'ويحتاج الضبط الدقيق الكامل بدقة 16 بت إلى نحو 16 بايتًا لكل معامل للأوزان والتدرجات وحالات المحسِّن -- أي ما يقارب 1 TB -- وهو عمل لخادم متعدد GPU. وغالبًا ما يكون استئجار GPU سحابية بسعة 80 GB أكثر عملية من بناء عتاد لتشغيلات متقطعة.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'تشغيل نماذج 70B محليًا: السياق الإقليمي',
          content: [
            '**الاتحاد الأوروبي / GDPR**: يمثّل نموذج 70B محلي الحد العملي لجودة الذكاء الاصطناعي التي يمكن تشغيلها بخصوصية لدى معظم المؤسسات. تبقي معالجة المستندات القانونية أو الطبية أو المالية داخل مقر المؤسسة المُدخلات والمخرجات ضمن بنيتك التحتية، مما يدعم ضوابط تقليل البيانات ومخاطر النقل؛ لكنه لا يجعل النشر وحده متوافقًا مع GDPR، فقيّم نشاط المعالجة بأكمله.',
            'للمؤسسات التي تشترط عتادًا بسلسلة توريد أوروبية: Apple (الولايات المتحدة) وNVIDIA (الولايات المتحدة) مزوّدان من خارج الاتحاد الأوروبي؛ وتبيع Dell وHP وLenovo أنظمة قائمة على GB10 مع دعم محلي. وعلى صعيد النماذج، يأتي Mistral Large 2 من مطوّر أوروبي لكنه يُصدر بترخيص بحثي لا يغطي الاستخدام التجاري.',
            '**اليابان**: يُعد Qwen2.5 72B خيارًا شائعًا للنصوص اليابانية: `ollama run qwen2.5:72b`. ويدعم توثيق إصدارات العتاد والنموذج (يحدد مُخرج `ollama ps` النموذج المحمَّل) الحوكمة الداخلية بموجب الإرشادات اليابانية للذكاء الاصطناعي في الأعمال.',
            '**الصين**: يُبقي استضافة Qwen2.5 72B محليًا البيانات على بنيتك التحتية، وهو أمر وثيق الصلة بقانون أمن البيانات الصيني (数据安全法). أما هل يندرج نموذج يُقدَّم داخليًا ضمن قواعد CAC للذكاء الاصطناعي التوليدي فيتوقف على ما إذا كان يُتاح للجمهور؛ استشر مستشارًا قانونيًا مؤهلًا للتأكد.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'ما الأخطاء الشائعة عند تشغيل نماذج 70B على عتاد المستهلك؟',
          faqs: [
            {
              q: 'شراء GPU بأقل من 24 GB من VRAM مع توقع أداء 70B كاملًا',
              a: 'تستوعب بطاقة 12 GB نحو ربع نموذج 70B بتكميم Q4_K_M؛ ويعمل الباقي من ذاكرة النظام، فتقترب السرعة من المعالج فقط. وحتى RTX 4090 بسعة 24 GB لا تحقق سوى نحو 2-4 tok/s. للحصول على سرعة تفاعلية استخدم 48 GB من VRAM، أو جهاز Mac بمعالج Apple Silicon وبسعة 64 GB أو أكثر، أو نموذجًا أصغر بحجم 27B-34B.',
            },
            {
              q: 'افتراض أن الجهاز كبير الذاكرة هو أيضًا سريع',
              a: 'يملك DGX Spark وأجهزة Ryzen AI Max+ 395 ذاكرة 128 GB لكن عرض نطاقها 256-273 GB/s فقط، لذا يعمل نموذج 70B الكثيف بنحو 3-5 tok/s. أما Mac Studio M5 Max بسعة 64 GB فعرض نطاقه أكثر من الضعف. تحقق من عرض النطاق، لا من السعة وحدها.',
            },
            {
              q: 'عدم التحقق من حجم الجزء الذي يعمل على GPU من النموذج',
              a: 'يقوم Ollama بالـ offloading تلقائيًا، لكن الاتساع الضيق قد يترك طبقات على المعالج. شغّل `ollama ps` بعد التحميل واقرأ العمود PROCESSOR؛ الهدف هو «100% GPU»، ووجود حصة للمعالج يفسّر بطء المخرجات. قلّل طول السياق أو انتقل إلى Q3_K_S إذا كان التقسيم سيئًا.',
            },
            {
              q: 'نسيان أن السياق يحتاج إلى ذاكرة أيضًا',
              a: 'نموذج 70B بتكميم Q4_K_M حجمه 43 GB، لكن سياق 32K يضيف نحو 10.7 GB وسياق 128K يضيف نحو 43 GB بدقة FP16. قد ينفد الجهاز الذي يتسع للأوزان من الذاكرة عند السياق الطويل. استخدم KV cache بدقة 8 بت أو سياقًا أقصر.',
            },
            {
              q: 'تشغيل Q5_K_M أو Q8_0 عندما تكون السرعة هي المهمة',
              a: 'يقرأ كل token النموذج كاملًا، لذا يعمل Q8_0 (75 GB) بنحو نصف سرعة Q4_K_M (43 GB) على العتاد نفسه. على الأجهزة المحدودة بعرض النطاق (DGX Spark وStrix Halo وMac mini) اختر Q4_K_M للمحادثة، واستخدم Q8_0 فقط حين تكون الجودة هي الأولوية.',
            },
            {
              q: 'طلب Mac mini M5 Pro بسعر $1,699 مع توقع أن يعمل 70B',
              a: 'يأتي Mac mini M5 Pro بسعر $1,699 بذاكرة موحدة 24 GB. يحتاج نموذج 70B إلى تهيئة 64 GB حسب الطلب، ولا يستطيع Mac mini M6 الأساسي ($899، 32 GB كحد أقصى) تشغيله إطلاقًا. تأكد من «M5 Pro» و64 GB قبل الطلب.',
            },
            {
              q: 'الاصطدام بحد ذاكرة GPU الافتراضي في macOS',
              a: 'يسمح macOS افتراضيًا لـ GPU باستخدام نحو 75% من الذاكرة، أي نحو 48 GB على Mac بسعة 64 GB. يتسع Q4_K_M؛ أما Q5_K_M (50 GB) فلا يتسع حتى ترفع `iogpu.wired_limit_mb`.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'قراءات ذات صلة',
          items: [
            '[دليل عتاد نماذج LLM المحلية](/ar/local-llms/local-llm-hardware-guide) -- جدول كامل لمستويات GPU والذاكرة لكل أحجام النماذج، بما في ذلك متطلبات عتاد 70B',
            '[تشغيل نماذج 70B على VRAM بسعة 24 GB](/ar/local-llms/run-70b-models-24gb-vram) -- خيارات التكميم والـ offloading حين لا تملك سوى بطاقة GPU واحدة',
            '[تشغيل نماذج 70B على Apple Silicon M5 Max](/ar/local-llms/running-70b-models-apple-silicon-m5-max) -- إعداد خاص بـ Mac باستخدام Ollama وMLX',
            '[RTX 5090 مقابل RTX 4090 لنماذج LLM المحلية](/ar/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- كيف يغيّر 32 GB مقابل 24 GB من VRAM مسألة الـ offloading',
            '[Mac mini M5 كخادم ذكاء اصطناعي محلي](/ar/local-llms/mac-mini-m5-local-ai-server) -- ما الذي تستطيع تشكيلة Mac mini تشغيله وما لا تستطيع',
            '[تكميم LLM موضَّحًا](/ar/local-llms/llm-quantization-explained) -- افهم Q4_K_M مقابل Q8_0 وكلفة الدقة الأعلى في السرعة',
            '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) -- الإعداد الكامل بما في ذلك ضبط طبقات GPU',
            '[Qwen مقابل Llama مقابل Mistral](/ar/local-llms/qwen-vs-llama-vs-mistral) -- مقارنة تفصيلية بين عائلات النماذج المفتوحة الرئيسية',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'أسئلة شائعة حول تشغيل نماذج 70B على عتاد المستهلك',
          faqs: [
            {
              q: 'ما العتاد الذي أحتاجه لتشغيل LLM محلي بـ 70B؟',
              a: 'تحتاج إلى نحو 43 GB من الذاكرة السريعة لنموذج Llama 3.3 70B عند Q4_K_M، إضافةً إلى 3-10 GB للسياق. توجد ثلاث تهيئات تحتفظ بالنموذج كاملًا في الذاكرة السريعة: جهاز Mac بمعالج Apple Silicon وبذاكرة موحدة 64 GB أو أكثر، أو بطاقتا NVIDIA GPU بسعة 24 GB لكل منهما (48 GB من VRAM إجمالًا)، أو جهاز بذاكرة موحدة 128 GB مثل NVIDIA DGX Spark أو حاسوب Mini PC بمعالج AMD Ryzen AI Max+ 395. السعة تحدد هل يعمل النموذج، وعرض نطاق الذاكرة يحدد سرعته. يمكن لبطاقة GPU واحدة بسعة 24 GB أو حاسوب بالمعالج فقط تشغيله، لكن بنحو 1-4 token/ثانية فقط.',
            },
            {
              q: 'ما هو نموذج 70B؟',
              a: 'نموذج 70B هو نموذج لغوي كبير يضم نحو 70 مليار معامل (أوزان). يضم Llama 3.3 70B نحو 70.6 مليار، ويضم Qwen2.5 72B نحو 72.7 مليار. ويتبع حجم الملف عدد المعاملات: نحو 141 GB بدقة 16 بت، و75 GB بدقة 8 بت (Q8_0)، و43 GB بدقة 4 بت (Q4_K_M).',
            },
            {
              q: 'كم أحتاج من VRAM أو الذاكرة لنموذج 70B؟',
              a: 'يحتاج Llama 3.3 70B إلى 43 GB عند Q4_K_M، و50 GB عند Q5_K_M، و75 GB عند Q8_0، و141 GB عند FP16 (أحجام مكتبة Ollama)، إضافةً إلى KV cache للسياق: نحو 2.7 GB عند 8K token، و10.7 GB عند 32K، و43 GB عند 128K. ومع 24 GB من VRAM يتسع على GPU نحو نصف نموذج Q4_K_M فقط، ويعمل الباقي من ذاكرة النظام.',
            },
            {
              q: 'ما أرخص عتاد قادر على تشغيل نموذج 70B بشكل مقبول؟',
              a: 'لسرعة تبلغ نحو 10 token/ثانية أو أكثر، الخيارات العملية هي Mac Studio M5 Max بتهيئة 64 GB أو أكثر (الطراز الأساسي بسعر $2,499 يأتي بسعة 36 GB)، أو Mac Studio M2 Ultra مستعمل بسعة 64 GB أو أكثر، أو بطاقتا GPU مستعملتان بسعة 24 GB لكل منهما. وأرخص خيار جديد من Apple هو Mac mini M5 Pro بسعة 64 GB: الطراز الأساسي بسعر $1,699 يأتي بسعة 24 GB فقط، وتضع المراجعات تهيئات 64 GB عند نحو $2,700-$3,200. ويحصر عرض نطاقه البالغ 307 GB/s سرعته في نحو 4-5 token/ثانية. وأسعار بطاقات GPU في السوق متقلبة: أُفيد بأن عروض RTX 5090 كانت أعلى بكثير من سعر الإطلاق $1,999 في أكتوبر 2026، فتحقق من الأسعار الحالية.',
            },
            {
              q: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بسعة 24 GB؟',
              a: 'نعم، لكن ببطء. تستوعب بطاقة 24 GB مثل RTX 4090 نحو 55% من نموذج 70B بتكميم Q4_K_M؛ وتعمل الطبقات المتبقية من ذاكرة النظام بسرعة ذاكرة المعالج، مما يعطي نحو 2-4 token/ثانية مع DDR5 سريعة. وللسرعة التفاعلية استخدم نموذجًا أصغر (يتسع 27B-34B في 24 GB، مثل Qwen3.8-27B)، أو بطاقتَي GPU، أو جهازًا بذاكرة موحدة 64 GB أو أكثر.',
            },
            {
              q: 'هل يمكنني تشغيل نموذج 70B على بطاقتَي GPU؟',
              a: 'نعم. توفر بطاقتان بسعة 24 GB (RTX 3090 أو 4090) ذاكرة VRAM بسعة 48 GB، تتسع لنموذج 70B بتكميم Q4_K_M (43 GB) مع سياق قصير من بضعة آلاف token. يقسّم Ollama وllama.cpp الطبقات بين البطاقتين تلقائيًا أو باستخدام --tensor-split. توقع نحو 12-17 token/ثانية كتقدير، لأن كل token يمر عبر البطاقتين بالتتابع.',
            },
            {
              q: 'ما أفضل محرك استدلال لتشغيل نماذج LLM بحجم 70B على عتاد متعدد GPU؟',
              a: 'لمستخدم واحد، يُعد Ollama أو llama.cpp مع تقسيم الطبقات الأبسط ويعمل مع وحدات GPU المختلطة. أما لعدة مستخدمين أو وكلاء متزامنين، فيقدّم vLLM مع ضبط --tensor-parallel-size على عدد وحدات GPU، أو SGLang، إنتاجية إجمالية أعلى بكثير لأنه يجمّع الطلبات في دفعات؛ وكلاهما يفضّل وحدات GPU المتطابقة وأوزان AWQ أو GPTQ أو FP8. ويعطي TensorRT-LLM أعلى إنتاجية على NVIDIA لكنه يتطلب خطوة بناء engine.',
            },
            {
              q: 'كم ذاكرة GPU يحتاج نظام متعدد الوكلاء بخلفيات 70B؟',
              a: 'احسب الأوزان مرة واحدة إضافةً إلى KV cache واحد لكل جلسة متزامنة. يحتاج Llama 3.3 70B عند Q4_K_M إلى نحو 43 GB للأوزان؛ وتضيف كل جلسة نشطة نحو 0.33 MB لكل token من السياق بدقة FP16. لذا يحتاج أربعة وكلاء بسياق 32K token لكل منهم إلى نحو 43 GB + 43 GB = 86 GB. خدّم جميع الوكلاء من خادم مشترك واحد (vLLM أو SGLang أو llama.cpp مع خانات متوازية) بدلًا من تحميل نسخة من النموذج لكل وكيل.',
            },
            {
              q: 'هل تساعد ذاكرة 256 GB في استدلال نموذج 70B على المعالج؟',
              a: 'تساعد في السعة لا في السرعة. تتيح ذاكرة 256 GB تحميل Q8_0 (75 GB) أو FP16 (141 GB) مع سياق طويل، لكن سرعة التوليد تحددها قنوات الذاكرة: نحو 0.5-1.5 token/ثانية على حاسوب مكتبي ثنائي القناة، ونحو 3-6 على Threadripper PRO بـ 8 قنوات، ونحو 4-8 على EPYC بـ 12 قناة عند Q4_K_M إلى Q8_0 (تقديرات مبنية على عرض نطاق الذاكرة، وليست اختبارات أجريناها).',
            },
            {
              q: 'هل يستطيع Mac mini M6 تشغيل نموذج 70B؟',
              a: 'لا. يبلغ الحد الأقصى لـ Mac mini M6 (يبدأ من $899) ذاكرة موحدة 32 GB وعرض نطاق 170 GB/s، وهو أقل من 43 GB التي يحتاجها نموذج 70B بتكميم Q4_K_M. أما Mac mini M5 Pro (من $1,699، 307 GB/s، Thunderbolt 5) فيمكن تهيئته حتى 64 GB؛ والطراز الأساسي بسعر $1,699 يأتي بسعة 24 GB، فاطلب تهيئة 64 GB حسب الطلب. وقد بدأ شحن الطرازين في 22 سبتمبر 2026.',
            },
            {
              q: 'ما هو NVIDIA DGX Spark وهل يستحق الشراء للاستدلال بنماذج 70B؟',
              a: 'DGX Spark هو حاسوب NVIDIA المكتبي المدمج للذكاء الاصطناعي بذاكرة موحدة LPDDR5x سعتها 128 GB وعرض نطاقها 273 GB/s. يحمّل نماذج 70B عند Q8_0 لكنه محدود بعرض النطاق: قاس LMSYS سرعة توليد 2.7 token/ثانية لنموذج Llama 3.1 70B بدقة FP8. وهو أنسب لأعمال CUDA والضبط الدقيق ونماذج MoE الكبيرة من محادثة سريعة مع نموذج 70B كثيف. رفعت NVIDIA سعر Founders Edition من $3,999 إلى $4,699 في فبراير 2026، وأُفيد بسعر $6,950 في أكتوبر 2026، إلى جانب نسخة 64 GB بسعر $4,999 من جهات شريكة.',
            },
            {
              q: 'كيف تُقارن جودة نماذج 70B المحلية بالنماذج السحابية؟',
              a: 'تعلن Meta عن 86.0 في MMLU (CoT) و88.4 في HumanEval لنموذج Llama 3.3 70B Instruct. وتسجّل النماذج السحابية الرائدة التي صدرت بعده نتائج أعلى في المهام كثيفة الاستدلال، بينما تبقى نماذج 70B المحلية منافسة في التلخيص والاستخراج والصياغة وتوليد الكود الروتيني. اختبر الاثنين على prompts الخاصة بك، مثلًا عبر [PromptQuorum](/ar)، قبل الاستثمار في عتاد 70B.',
            },
            {
              q: 'كم من الكهرباء يستهلك تشغيل نموذج 70B؟',
              a: 'تسحب بطاقة GPU حتى قدرة اللوحة أثناء التوليد: 350 واط لـ RTX 3090، و450 واط لـ RTX 4090، و575 واط لـ RTX 5090. وبسعر $0.15 لكل kWh تكلّف RTX 4090 بكامل الحمل نحو $0.07 في الساعة لبطاقة GPU وحدها. أما Apple Silicon وأجهزة الذاكرة الموحدة فتسحب طاقة أقل بكثير للنموذج نفسه، لكن بسرعة أقل.',
            },
            {
              q: 'هل تستحق نماذج 70B العناء مقارنةً بالنماذج الأصغر للمهام اليومية؟',
              a: 'للاستدلال المعقّد وتحليل المستندات الطويلة والكتابة الدقيقة، غالبًا نعم. أما للتلخيص البسيط والأسئلة والأجوبة والتصنيف، فكثيرًا ما ينتج نموذج 7B-14B مخرجات مشابهة بجزء من كلفة العتاد. شغّل الاثنين على prompts الخاصة بك قبل الاستثمار في عتاد 70B.',
            },
            {
              q: 'هل يمكنني الضبط الدقيق لنموذج 70B على عتاد المستهلك؟',
              a: 'فقط باستخدام QLoRA. يُبقي QLoRA النموذج الأساسي بدقة 4 بت (نحو 35 GB) ويدرّب محوّلات صغيرة؛ وقد أظهرت Answer.AI تدريب نموذج 70B بـ FSDP+QLoRA على بطاقتَي ألعاب بسعة 24 GB. ويحتاج الضبط الدقيق الكامل بدقة 16 بت إلى ما يقارب 1 TB من الذاكرة، وهو عمل لخادم متعدد GPU. وفيما يتجاوز تشغيلات QLoRA المتقطعة، يكون استئجار GPU سحابية بسعة 80 GB أكثر عملية في الغالب.',
            },
            {
              q: 'ما أفضل تكميم لنموذج 70B على Apple Silicon؟',
              a: 'على جهاز Mac بسعة 64 GB استخدم Q4_K_M (43 GB). يقيّد macOS ذاكرة GPU القابلة للعنونة افتراضيًا بنحو 75% من الذاكرة (نحو 48 GB على Mac بسعة 64 GB)، لذا لا يعمل Q5_K_M (50 GB) إلا بعد رفع الحد باستخدام sysctl iogpu.wired_limit_mb، ويترك هامشًا ضيقًا. وعلى 96-128 GB يكون Q8_0 (75 GB) الخيار شبه الخالي من الفقدان، بنحو نصف سرعة Q4_K_M لأن كل token يقرأ ضعف عدد البايتات.',
            },
            {
              q: 'هل يختار Ollama أفضل تكميم تلقائيًا؟',
              a: 'لا. ينزّل ollama run llama3.3:70b تكميم Q4_K_M الافتراضي (43 GB). سمِّ الوسم لمستوى آخر، مثلًا ollama run llama3.3:70b-instruct-q5_K_M أو ollama run llama3.3:70b-instruct-q8_0. شغّل ollama ps بعد التحميل: يعرض العمود PROCESSOR مقدار ما يعمل من النموذج على GPU مقابل المعالج.',
            },
            {
              q: 'هل يستطيع iPhone أو حاسوب محمول تشغيل نموذج 70B؟',
              a: 'ليس iPhone: تملك أجهزة iPhone الحالية ذاكرة 8-12 GB بينما يحتاج نموذج 70B بتكميم Q4_K_M إلى نحو 43 GB، لذا تشغّل الهواتف نماذج 1B-8B. أما الحواسيب المحمولة فلا تستطيع إلا بذاكرة موحدة 64 GB أو أكثر (تهيئات MacBook Pro العليا) أو جهاز AMD Ryzen AI Max+ 395 بسعة 128 GB. وتقع حواسيب الألعاب المحمولة ذات VRAM بسعة 16-24 GB، مثل ASUS ROG Strix، ضمن حالة offload الجزئي البطيء.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'المصادر',
          items: [
            '[Ollama: وسوم وأحجام Llama 3.3](https://ollama.com/library/llama3.3/tags) -- Q4_K_M بحجم 43 GB، وQ5_K_M بحجم 50 GB، وQ8_0 بحجم 75 GB، وFP16 بحجم 141 GB',
            '[بطاقة نموذج Meta Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU (CoT) 86.0، وHumanEval 88.4، وسياق 128K، والترخيص',
            '[بطاقة نموذج Qwen2.5 72B Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 72.7B معامل، وسياق 131K مع YaRN',
            '[بطاقة نموذج Mistral Large Instruct 2407](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 123B معامل، وترخيص Mistral Research License',
            '[LMSYS: مراجعة معمّقة لـ NVIDIA DGX Spark](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B بدقة FP8 بسرعة توليد 2.7 tok/s، وعرض نطاق 273 GB/s',
            '[Apple Newsroom: Mac mini مع M6 وM5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- الأسعار والذاكرة وعرض النطاق',
            '[9to5Mac: Mac Studio مع M5 Max وM5 Ultra](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- الأسعار والذاكرة الأساسية والقصوى وعرض النطاق',
            '[منتدى مطوري NVIDIA: تغيير سعر DGX Spark](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- من $3,999 إلى $4,699',
            '[TechnoEdge: زيادة سعر DGX Spark ونسخة 64 GB](https://www.techno-edge.net/article/2026/10/08/5565.html) -- أسعار مُفادة: $6,950 و$4,999',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- تكوين 64 GB / 1 TB مدرج بسعر $3,199',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- أسعار ترقية الذاكرة إلى 48 GB و64 GB',
            '[Answer.AI: تدريب نموذج 70B في المنزل](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- FSDP + QLoRA على بطاقتَي GPU بسعة 24 GB',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) -- توثيق GPU offloading وتقسيم متعدد GPU',
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile بسعة 24 GB من GDDR7 وذاكرة 96 GB من DDR5 وتكلفة عتاد $4,999',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'تشغيل نموذج 70B محليًا 2026: الذاكرة وVRAM والسرعة',
        description: 'يحتاج نموذج 70B إلى نحو 43 GB عند Q4_K_M مع السياق. قارن الذاكرة وVRAM والسرعة التقديرية على أجهزة Mac وDGX Spark وبطاقات RTX وحواسيب المعالج فقط، حتى 256 GB.',
        url: 'https://www.promptquorum.com/ar/local-llms/70b-models-consumer-hardware',
        datePublished: '2026-04-04',
        dateModified: '2026-10-29',
        inLanguage: 'ar',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'نموذج لغوي 70B' },
          { '@type': 'Thing', name: 'استدلال Apple Silicon' },
          { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
          { '@type': 'Thing', name: 'Layer offloading' },
          { '@type': 'Thing', name: 'Llama 3.3 70B' },
          { '@type': 'Thing', name: 'Qwen2.5 72B' },
          { '@type': 'Thing', name: 'NVIDIA DGX Spark' },
          { '@type': 'Thing', name: 'Apple Mac mini M5 Pro' },
          { '@type': 'Thing', name: 'عرض نطاق الذاكرة' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'llama.cpp' },
          { '@type': 'SoftwareApplication', name: 'vLLM' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'كيفية تشغيل نموذج 70B على عتاد المستهلك باستخدام Ollama',
        inLanguage: 'ar',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'تأكد من توفر 48 GB أو أكثر من الذاكرة السريعة (ذاكرة موحدة أو VRAM أو RAM) للنموذج والسياق',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'ثبّت Ollama من ollama.com',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'شغّل: ollama run llama3.3:70b',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'تحقق من تقسيم المعالج/GPU باستخدام: ollama ps',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'اضبط التكميم إذا كانت الذاكرة شحيحة: استخدم الوسم q3_K_S، أو قلّل طول السياق',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'عتاد تشغيل LLM محلي بحجم 70B في 2026',
        inLanguage: 'ar',
        numberOfItems: 12,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Mac Studio M5 Max (64-128 GB)',
            description: 'نعم -- GPU كاملة. ~9-11 tok/s (تقدير). التهيئة الأساسية 36 GB؛ 64 GB+ ترقية.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mac Studio M5 Ultra (96 GB+)',
            description: 'نعم -- يتسع Q8_0. ~17-21 tok/s (تقدير). من $5,499 مع 96 GB.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mac mini M5 Pro (64 GB)',
            description: 'نعم -- بهامش ضيق. ~4-5 tok/s (تقدير). الطراز الأساسي $1,699 بسعة 24 GB؛ 64 GB حسب الطلب.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Mac mini M6 (32 GB كحد أقصى)',
            description: 'لا. غير متاح (تقدير). 32 GB أقل من ملف Q4 البالغ نحو 43 GB.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mac Studio M2 Ultra (64 GB+، مستعمل)',
            description: 'نعم -- GPU كاملة. ~12-15 tok/s (تقدير). سوق المستعمل فقط؛ تحقق من حجم الذاكرة.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NVIDIA DGX Spark (128 GB)',
            description: 'نعم -- يتسع Q8_0. ~4-5 tok/s (تقدير). 2.7 tok/s مقيسة بـ FP8؛ سعر مُفاد $6,950.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'AMD Ryzen AI Max+ 395 (128 GB)',
            description: 'نعم. ~4-5 tok/s (تقدير). أجهزة Mini PC وحواسيب محمولة؛ حصة ذاكرة GPU قابلة للضبط.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '2x RTX 3090 / 4090 (48 GB)',
            description: 'نعم -- بهامش ضيق. ~12-17 tok/s (تقدير). Q4_K_M مع سياق قصير فقط.',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'RTX 5090 (32 GB) + 64 GB RAM',
            description: 'offload جزئي. ~4-6 tok/s (تقدير). نحو 70% من الطبقات على GPU والباقي في ذاكرة النظام.',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'RTX 4090 (24 GB) + 64 GB RAM',
            description: 'offload جزئي. ~2-4 tok/s (تقدير). نحو 55% من الطبقات على GPU والباقي في ذاكرة النظام.',
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: 'المعالج فقط، DDR5 ثنائية القناة',
            description: 'نعم -- المعالج فقط. ~1-2 tok/s (تقدير). للمهام الدُفعية فقط.',
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: 'المعالج فقط، ذاكرة خادم 8-12 قناة',
            description: 'نعم -- المعالج فقط. ~5-8 tok/s (تقدير). Threadripper PRO / EPYC؛ ذاكرة 256 GB تتيح Q8_0.',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ar',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ما العتاد الذي أحتاجه لتشغيل LLM محلي بـ 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'تحتاج إلى نحو 43 GB من الذاكرة السريعة لنموذج Llama 3.3 70B عند Q4_K_M، إضافةً إلى 3-10 GB للسياق. توجد ثلاث تهيئات تحتفظ بالنموذج كاملًا في الذاكرة السريعة: جهاز Mac بمعالج Apple Silicon وبذاكرة موحدة 64 GB أو أكثر، أو بطاقتا NVIDIA GPU بسعة 24 GB لكل منهما (48 GB من VRAM إجمالًا)، أو جهاز بذاكرة موحدة 128 GB مثل NVIDIA DGX Spark أو حاسوب Mini PC بمعالج AMD Ryzen AI Max+ 395. السعة تحدد هل يعمل النموذج، وعرض نطاق الذاكرة يحدد سرعته. يمكن لبطاقة GPU واحدة بسعة 24 GB أو حاسوب بالمعالج فقط تشغيله، لكن بنحو 1-4 token/ثانية فقط.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما هو نموذج 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نموذج 70B هو نموذج لغوي كبير يضم نحو 70 مليار معامل (أوزان). يضم Llama 3.3 70B نحو 70.6 مليار، ويضم Qwen2.5 72B نحو 72.7 مليار. ويتبع حجم الملف عدد المعاملات: نحو 141 GB بدقة 16 بت، و75 GB بدقة 8 بت (Q8_0)، و43 GB بدقة 4 بت (Q4_K_M).',
            },
          },
          {
            '@type': 'Question',
            name: 'كم أحتاج من VRAM أو الذاكرة لنموذج 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'يحتاج Llama 3.3 70B إلى 43 GB عند Q4_K_M، و50 GB عند Q5_K_M، و75 GB عند Q8_0، و141 GB عند FP16 (أحجام مكتبة Ollama)، إضافةً إلى KV cache للسياق: نحو 2.7 GB عند 8K token، و10.7 GB عند 32K، و43 GB عند 128K. ومع 24 GB من VRAM يتسع على GPU نحو نصف نموذج Q4_K_M فقط، ويعمل الباقي من ذاكرة النظام.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما أرخص عتاد قادر على تشغيل نموذج 70B بشكل مقبول؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'لسرعة تبلغ نحو 10 token/ثانية أو أكثر، الخيارات العملية هي Mac Studio M5 Max بتهيئة 64 GB أو أكثر (الطراز الأساسي بسعر $2,499 يأتي بسعة 36 GB)، أو Mac Studio M2 Ultra مستعمل بسعة 64 GB أو أكثر، أو بطاقتا GPU مستعملتان بسعة 24 GB لكل منهما. وأرخص خيار جديد من Apple هو Mac mini M5 Pro بسعة 64 GB: الطراز الأساسي بسعر $1,699 يأتي بسعة 24 GB فقط، وتضع المراجعات تهيئات 64 GB عند نحو $2,700-$3,200. ويحصر عرض نطاقه البالغ 307 GB/s سرعته في نحو 4-5 token/ثانية. وأسعار بطاقات GPU في السوق متقلبة: أُفيد بأن عروض RTX 5090 كانت أعلى بكثير من سعر الإطلاق $1,999 في أكتوبر 2026، فتحقق من الأسعار الحالية.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل يمكنني تشغيل نموذج 70B على بطاقة GPU واحدة بسعة 24 GB؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نعم، لكن ببطء. تستوعب بطاقة 24 GB مثل RTX 4090 نحو 55% من نموذج 70B بتكميم Q4_K_M؛ وتعمل الطبقات المتبقية من ذاكرة النظام بسرعة ذاكرة المعالج، مما يعطي نحو 2-4 token/ثانية مع DDR5 سريعة. وللسرعة التفاعلية استخدم نموذجًا أصغر (يتسع 27B-34B في 24 GB، مثل Qwen3.8-27B)، أو بطاقتَي GPU، أو جهازًا بذاكرة موحدة 64 GB أو أكثر.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل يمكنني تشغيل نموذج 70B على بطاقتَي GPU؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'نعم. توفر بطاقتان بسعة 24 GB (RTX 3090 أو 4090) ذاكرة VRAM بسعة 48 GB، تتسع لنموذج 70B بتكميم Q4_K_M (43 GB) مع سياق قصير من بضعة آلاف token. يقسّم Ollama وllama.cpp الطبقات بين البطاقتين تلقائيًا أو باستخدام --tensor-split. توقع نحو 12-17 token/ثانية كتقدير، لأن كل token يمر عبر البطاقتين بالتتابع.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما أفضل محرك استدلال لتشغيل نماذج LLM بحجم 70B على عتاد متعدد GPU؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'لمستخدم واحد، يُعد Ollama أو llama.cpp مع تقسيم الطبقات الأبسط ويعمل مع وحدات GPU المختلطة. أما لعدة مستخدمين أو وكلاء متزامنين، فيقدّم vLLM مع ضبط --tensor-parallel-size على عدد وحدات GPU، أو SGLang، إنتاجية إجمالية أعلى بكثير لأنه يجمّع الطلبات في دفعات؛ وكلاهما يفضّل وحدات GPU المتطابقة وأوزان AWQ أو GPTQ أو FP8. ويعطي TensorRT-LLM أعلى إنتاجية على NVIDIA لكنه يتطلب خطوة بناء engine.',
            },
          },
          {
            '@type': 'Question',
            name: 'كم ذاكرة GPU يحتاج نظام متعدد الوكلاء بخلفيات 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'احسب الأوزان مرة واحدة إضافةً إلى KV cache واحد لكل جلسة متزامنة. يحتاج Llama 3.3 70B عند Q4_K_M إلى نحو 43 GB للأوزان؛ وتضيف كل جلسة نشطة نحو 0.33 MB لكل token من السياق بدقة FP16. لذا يحتاج أربعة وكلاء بسياق 32K token لكل منهم إلى نحو 43 GB + 43 GB = 86 GB. خدّم جميع الوكلاء من خادم مشترك واحد (vLLM أو SGLang أو llama.cpp مع خانات متوازية) بدلًا من تحميل نسخة من النموذج لكل وكيل.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل تساعد ذاكرة 256 GB في استدلال نموذج 70B على المعالج؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'تساعد في السعة لا في السرعة. تتيح ذاكرة 256 GB تحميل Q8_0 (75 GB) أو FP16 (141 GB) مع سياق طويل، لكن سرعة التوليد تحددها قنوات الذاكرة: نحو 0.5-1.5 token/ثانية على حاسوب مكتبي ثنائي القناة، ونحو 3-6 على Threadripper PRO بـ 8 قنوات، ونحو 4-8 على EPYC بـ 12 قناة عند Q4_K_M إلى Q8_0 (تقديرات مبنية على عرض نطاق الذاكرة، وليست اختبارات أجريناها).',
            },
          },
          {
            '@type': 'Question',
            name: 'هل يستطيع Mac mini M6 تشغيل نموذج 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'لا. يبلغ الحد الأقصى لـ Mac mini M6 (يبدأ من $899) ذاكرة موحدة 32 GB وعرض نطاق 170 GB/s، وهو أقل من 43 GB التي يحتاجها نموذج 70B بتكميم Q4_K_M. أما Mac mini M5 Pro (من $1,699، 307 GB/s، Thunderbolt 5) فيمكن تهيئته حتى 64 GB؛ والطراز الأساسي بسعر $1,699 يأتي بسعة 24 GB، فاطلب تهيئة 64 GB حسب الطلب. وقد بدأ شحن الطرازين في 22 سبتمبر 2026.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما هو NVIDIA DGX Spark وهل يستحق الشراء للاستدلال بنماذج 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DGX Spark هو حاسوب NVIDIA المكتبي المدمج للذكاء الاصطناعي بذاكرة موحدة LPDDR5x سعتها 128 GB وعرض نطاقها 273 GB/s. يحمّل نماذج 70B عند Q8_0 لكنه محدود بعرض النطاق: قاس LMSYS سرعة توليد 2.7 token/ثانية لنموذج Llama 3.1 70B بدقة FP8. وهو أنسب لأعمال CUDA والضبط الدقيق ونماذج MoE الكبيرة من محادثة سريعة مع نموذج 70B كثيف. رفعت NVIDIA سعر Founders Edition من $3,999 إلى $4,699 في فبراير 2026، وأُفيد بسعر $6,950 في أكتوبر 2026، إلى جانب نسخة 64 GB بسعر $4,999 من جهات شريكة.',
            },
          },
          {
            '@type': 'Question',
            name: 'كيف تُقارن جودة نماذج 70B المحلية بالنماذج السحابية؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'تعلن Meta عن 86.0 في MMLU (CoT) و88.4 في HumanEval لنموذج Llama 3.3 70B Instruct. وتسجّل النماذج السحابية الرائدة التي صدرت بعده نتائج أعلى في المهام كثيفة الاستدلال، بينما تبقى نماذج 70B المحلية منافسة في التلخيص والاستخراج والصياغة وتوليد الكود الروتيني. اختبر الاثنين على prompts الخاصة بك، مثلًا عبر [PromptQuorum](/ar)، قبل الاستثمار في عتاد 70B.',
            },
          },
          {
            '@type': 'Question',
            name: 'كم من الكهرباء يستهلك تشغيل نموذج 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'تسحب بطاقة GPU حتى قدرة اللوحة أثناء التوليد: 350 واط لـ RTX 3090، و450 واط لـ RTX 4090، و575 واط لـ RTX 5090. وبسعر $0.15 لكل kWh تكلّف RTX 4090 بكامل الحمل نحو $0.07 في الساعة لبطاقة GPU وحدها. أما Apple Silicon وأجهزة الذاكرة الموحدة فتسحب طاقة أقل بكثير للنموذج نفسه، لكن بسرعة أقل.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل تستحق نماذج 70B العناء مقارنةً بالنماذج الأصغر للمهام اليومية؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'للاستدلال المعقّد وتحليل المستندات الطويلة والكتابة الدقيقة، غالبًا نعم. أما للتلخيص البسيط والأسئلة والأجوبة والتصنيف، فكثيرًا ما ينتج نموذج 7B-14B مخرجات مشابهة بجزء من كلفة العتاد. شغّل الاثنين على prompts الخاصة بك قبل الاستثمار في عتاد 70B.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل يمكنني الضبط الدقيق لنموذج 70B على عتاد المستهلك؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'فقط باستخدام QLoRA. يُبقي QLoRA النموذج الأساسي بدقة 4 بت (نحو 35 GB) ويدرّب محوّلات صغيرة؛ وقد أظهرت Answer.AI تدريب نموذج 70B بـ FSDP+QLoRA على بطاقتَي ألعاب بسعة 24 GB. ويحتاج الضبط الدقيق الكامل بدقة 16 بت إلى ما يقارب 1 TB من الذاكرة، وهو عمل لخادم متعدد GPU. وفيما يتجاوز تشغيلات QLoRA المتقطعة، يكون استئجار GPU سحابية بسعة 80 GB أكثر عملية في الغالب.',
            },
          },
          {
            '@type': 'Question',
            name: 'ما أفضل تكميم لنموذج 70B على Apple Silicon؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'على جهاز Mac بسعة 64 GB استخدم Q4_K_M (43 GB). يقيّد macOS ذاكرة GPU القابلة للعنونة افتراضيًا بنحو 75% من الذاكرة (نحو 48 GB على Mac بسعة 64 GB)، لذا لا يعمل Q5_K_M (50 GB) إلا بعد رفع الحد باستخدام sysctl iogpu.wired_limit_mb، ويترك هامشًا ضيقًا. وعلى 96-128 GB يكون Q8_0 (75 GB) الخيار شبه الخالي من الفقدان، بنحو نصف سرعة Q4_K_M لأن كل token يقرأ ضعف عدد البايتات.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل يختار Ollama أفضل تكميم تلقائيًا؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'لا. ينزّل ollama run llama3.3:70b تكميم Q4_K_M الافتراضي (43 GB). سمِّ الوسم لمستوى آخر، مثلًا ollama run llama3.3:70b-instruct-q5_K_M أو ollama run llama3.3:70b-instruct-q8_0. شغّل ollama ps بعد التحميل: يعرض العمود PROCESSOR مقدار ما يعمل من النموذج على GPU مقابل المعالج.',
            },
          },
          {
            '@type': 'Question',
            name: 'هل يستطيع iPhone أو حاسوب محمول تشغيل نموذج 70B؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ليس iPhone: تملك أجهزة iPhone الحالية ذاكرة 8-12 GB بينما يحتاج نموذج 70B بتكميم Q4_K_M إلى نحو 43 GB، لذا تشغّل الهواتف نماذج 1B-8B. أما الحواسيب المحمولة فلا تستطيع إلا بذاكرة موحدة 64 GB أو أكثر (تهيئات MacBook Pro العليا) أو جهاز AMD Ryzen AI Max+ 395 بسعة 128 GB. وتقع حواسيب الألعاب المحمولة ذات VRAM بسعة 16-24 GB، مثل ASUS ROG Strix، ضمن حالة offload الجزئي البطيء.',
            },
          },
        ],
      },
    },
    pt: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: 'Rodar LLM de 70B localmente em 2026: RAM, VRAM e velocidade',
      seoTitle: 'Requisitos de hardware para LLM de 70B 2026: RAM e VRAM',
      intro: 'Rodar um modelo de 70B localmente exige cerca de 43 GB de memória rápida em Q4_K_M, mais 3-10 GB para o contexto. Um Mac com 64 GB ou mais de memória unificada, duas GPUs de 24 GB ou uma máquina com 128 GB de memória unificada conseguem manter o modelo inteiro em memória rápida. A velocidade depende da largura de banda da memória: de 1-2 tokens/s em uma CPU de desktop a cerca de 10 tokens/s em um Mac Studio M5 Max. Llama 3.3 70B e Qwen2.5 72B são os dois principais modelos densos da classe 70B.',
      metaDescription: 'Um modelo 70B precisa de ~43 GB em Q4_K_M mais contexto. RAM, VRAM e tok/s estimados em Mac, DGX Spark, GPUs RTX e PCs só com CPU, inclusive 256 GB de RAM.',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-pt.webp',
      publishDate: '2026-04-04',
      dateModified: '2026-10-29',
      leadAnswerBlock: '**Um modelo 70B precisa de cerca de 43 GB de memória em Q4_K_M (Llama 3.3 70B), mais 3-10 GB para o contexto, e sua velocidade é definida pela largura de banda da memória, não pela capacidade. Um Mac com 64 GB ou mais, duas GPUs de 24 GB ou uma máquina com 128 GB de memória unificada mantém o modelo inteiro em memória rápida; uma única GPU de 24 GB ou um PC só com CPU o executa a cerca de 1-4 tokens/s.**',
      audience: 'Desenvolvedores familiarizados com Ollama ou LM Studio que otimizam fluxos de trabalho com LLMs locais',
      readTime: '11 min de leitura',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B LLM local hardware de consumo',
      toc: [
        { label: 'Pontos principais', anchor: '#key-takeaways' },
        { label: 'O que é um modelo 70B?', anchor: '#what-is-70b' },
        { label: 'Qual hardware você precisa?', anchor: '#what-hardware' },
        { label: 'Requisitos de memória por quantização', anchor: '#ram-requirements' },
        { label: 'Contexto e memória do KV cache', anchor: '#context-memory' },
        { label: 'Por que a largura de banda define a velocidade', anchor: '#memory-bandwidth' },
        { label: 'Apple Silicon', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark e PCs de memória unificada', anchor: '#dgx-spark' },
        { label: 'GPU NVIDIA + layer offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'Runtimes multi-GPU', anchor: '#multi-gpu-runtimes' },
        { label: 'Inferência 70B somente com CPU', anchor: '#cpu-only' },
        { label: 'Modelos MoE da classe 70B', anchor: '#moe-models' },
        { label: 'Qual modelo 70B você deve rodar?', anchor: '#which-model' },
        { label: 'Fine-tuning de um modelo 70B', anchor: '#fine-tuning' },
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
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: 'Um modelo 70B precisa de cerca de 43 GB de memória em Q4_K_M mais 3-10 GB para o contexto e gera aproximadamente a largura de banda dividida pelo tamanho do modelo em tokens por segundo; assim, um Mac de 64 GB ou mais, duas GPUs de 24 GB ou uma máquina com 128 GB de memória unificada o rodam em memória rápida, enquanto uma única GPU de 24 GB consegue 2-4 tokens/s.',
            },
            {
              type: 'plain-terms',
              text: 'Um modelo 70B é um modelo de IA muito grande, com cerca de 70 bilhões de números ajustáveis. Carregá-lo exige aproximadamente 43 GB de memória, e a rapidez das respostas depende de quão depressa essa memória pode ser lida. Um Mac com bastante memória unificada ou duas placas de vídeo grandes é o caminho confortável; um PC comum com uma única placa de vídeo funciona, mas responde devagar.',
            },
          ],
          items: [
            'Memória em Q4_K_M: Llama 3.3 70B ocupa 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB. O contexto adiciona cerca de 2,7 GB a cada 8K tokens.',
            '**Regra de velocidade**: tokens/s é limitado pela largura de banda da memória dividida pelo tamanho do modelo, e a velocidade real costuma ficar em 60-80% desse teto. 43 GB em 614 GB/s dão um teto de cerca de 14 tok/s.',
            '**Melhor velocidade de consumo**: um Mac Studio M5 Max configurado com 64 GB ou mais (cerca de 9-11 tok/s) ou duas GPUs de 24 GB (cerca de 12-17 tok/s); o Mac Studio M5 Ultra chega a uma estimativa de 17-21 tok/s.',
            '**Mac mini**: o modelo M5 Pro de US$ 1.699 tem 24 GB; 64 GB é um upgrade sob encomenda que rende cerca de 4-5 tok/s. O Mac mini M6 (máximo de 32 GB) não roda 70B.',
            '**DGX Spark**: 128 GB, mas apenas 273 GB/s; a LMSYS mediu 2,7 tok/s para 70B em FP8. Compre-o para CUDA e grandes modelos MoE, não para chat rápido com um 70B denso.',
            '**Uma única GPU de 24 GB ou só CPU**: cerca de 2-4 tok/s com uma RTX 4090 e DDR5 rápida, 1-2 tok/s em uma CPU de desktop. 256 GB de RAM acrescentam capacidade (Q8_0, FP16, contexto longo), não velocidade.',
            'Não existe Qwen3 72B: o modelo de 72B é o Qwen2.5 72B. Os modelos abertos grandes mais novos são, em sua maioria, mixture-of-experts.',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: 'O que é um modelo 70B?',
          content: [
            '**Um modelo 70B é um modelo de linguagem grande com cerca de 70 bilhões de parâmetros -- os pesos aprendidos que formam a rede.** "B" significa bilhão. O Llama 3.3 70B tem 70,6 bilhões de parâmetros e o Qwen2.5 72B tem 72,7 bilhões.',
            'A memória é o número de parâmetros multiplicado pelos bytes por peso: pesos de 16 bits ocupam 2 bytes cada (cerca de 141 GB), 8 bits (Q8_0) cerca de 1 byte (75 GB) e 4 bits Q4_K_M cerca de 0,6 byte (43 GB). É por isso que 70B é o tamanho em que o hardware de consumo passa a exigir 40+ GB de memória rápida, enquanto modelos de 7B-14B cabem em um notebook comum.',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: 'Qual hardware você precisa para rodar um LLM de 70B localmente?',
          content: [
            '**Você precisa de cerca de 43 GB de memória rápida para o modelo, mais 3-10 GB para o contexto, na VRAM da GPU, na memória unificada da Apple ou na RAM do sistema -- e quanto mais rápida for essa memória, mais rápido o modelo gera texto.**',
            'As velocidades abaixo são estimativas para chat de um único usuário com contexto curto, derivadas da largura de banda da memória (veja "Por que a largura de banda define a velocidade"). São tetos reduzidos a uma eficiência típica de 60-80%, não benchmarks executados pelo PromptQuorum; a exceção é o valor do DGX Spark, medido por terceiros.',
          ],
          rows: [
            {
              'Hardware': 'Mac Studio M5 Max (64-128 GB)',
              'Cabe 70B Q4?': 'Sim -- GPU completa',
              'Largura de banda': 'até 614 GB/s',
              'Veloc. est. (Q4_K_M)': '~9-11 tok/s',
              'Observações': 'A configuração base tem 36 GB; 64 GB+ é upgrade',
            },
            {
              'Hardware': 'Mac Studio M5 Ultra (96 GB+)',
              'Cabe 70B Q4?': 'Sim -- cabe Q8_0',
              'Largura de banda': 'até 1,2 TB/s',
              'Veloc. est. (Q4_K_M)': '~17-21 tok/s',
              'Observações': 'A partir de US$ 5.499 com 96 GB',
            },
            {
              'Hardware': 'Mac mini M5 Pro (64 GB)',
              'Cabe 70B Q4?': 'Sim -- apertado',
              'Largura de banda': '307 GB/s',
              'Veloc. est. (Q4_K_M)': '~4-5 tok/s',
              'Observações': 'A base de US$ 1.699 tem 24 GB; 64 GB é sob encomenda',
            },
            { 'Hardware': 'Mac mini M6 (32 GB máx.)', 'Cabe 70B Q4?': 'Não', 'Largura de banda': '170 GB/s', 'Veloc. est. (Q4_K_M)': 'N/D', 'Observações': '32 GB máx. fica abaixo dos ~43 GB do arquivo Q4' },
            {
              'Hardware': 'Mac Studio M2 Ultra (64 GB+, usado)',
              'Cabe 70B Q4?': 'Sim -- GPU completa',
              'Largura de banda': '800 GB/s',
              'Veloc. est. (Q4_K_M)': '~12-15 tok/s',
              'Observações': 'Só no mercado de usados; confira a memória',
            },
            {
              'Hardware': 'NVIDIA DGX Spark (128 GB)',
              'Cabe 70B Q4?': 'Sim -- cabe Q8_0',
              'Largura de banda': '273 GB/s',
              'Veloc. est. (Q4_K_M)': '~4-5 tok/s',
              'Observações': '2,7 tok/s medidos em FP8; US$ 6.950 reportados',
            },
            {
              'Hardware': 'AMD Ryzen AI Max+ 395 (128 GB)',
              'Cabe 70B Q4?': 'Sim',
              'Largura de banda': '256 GB/s',
              'Veloc. est. (Q4_K_M)': '~4-5 tok/s',
              'Observações': 'Mini PCs e notebooks; fatia de memória da GPU é configurável',
            },
            {
              'Hardware': '2x RTX 3090 / 4090 (48 GB)',
              'Cabe 70B Q4?': 'Sim -- apertado',
              'Largura de banda': '936-1.008 GB/s por placa',
              'Veloc. est. (Q4_K_M)': '~12-17 tok/s',
              'Observações': 'Apenas Q4_K_M com contexto curto',
            },
            {
              'Hardware': 'RTX 5090 (32 GB) + 64 GB RAM',
              'Cabe 70B Q4?': 'Offload parcial',
              'Largura de banda': '1.792 GB/s na VRAM',
              'Veloc. est. (Q4_K_M)': '~4-6 tok/s',
              'Observações': '~70% das camadas na GPU, o resto na RAM do sistema',
            },
            {
              'Hardware': 'RTX 4090 (24 GB) + 64 GB RAM',
              'Cabe 70B Q4?': 'Offload parcial',
              'Largura de banda': '1.008 GB/s na VRAM',
              'Veloc. est. (Q4_K_M)': '~2-4 tok/s',
              'Observações': '~55% das camadas na GPU, o resto na RAM do sistema',
            },
            {
              Hardware: 'Olares One (RTX 5090 Mobile 24 GB + 96 GB RAM)',
              'Cabe 70B Q4?': 'Offload parcial',
              'Largura de banda': 'VRAM não divulgada / RAM ~90 GB/s',
              'Veloc. est. (Q4_K_M)': '~2-4 tok/s',
              Observações: 'VRAM GDDR7 de 24 GB; hardware a US$ 4.999',
            },
            { 'Hardware': 'Só CPU, DDR5 dual-channel', 'Cabe 70B Q4?': 'Sim -- só CPU', 'Largura de banda': '~90 GB/s', 'Veloc. est. (Q4_K_M)': '~1-2 tok/s', 'Observações': 'Apenas tarefas em lote' },
            {
              'Hardware': 'Só CPU, RAM de servidor de 8-12 canais',
              'Cabe 70B Q4?': 'Sim -- só CPU',
              'Largura de banda': '350-460 GB/s',
              'Veloc. est. (Q4_K_M)': '~5-8 tok/s',
              'Observações': 'Threadripper PRO / EPYC; 256 GB permite Q8_0',
            },
          ],
          columns: ['Hardware', 'Cabe 70B Q4?', 'Largura de banda', 'Veloc. est. (Q4_K_M)', 'Observações'],
          callouts: [
            { type: 'insight', text: '**Olares One** ([olares.com/one](https://www.olares.com/one)) é um desktop de IA compacto com uma RTX 5090 Mobile (24 GB de VRAM GDDR7), um Intel Core Ultra 9 275HX e 96 GB de RAM DDR5-5600 (expansível a 128 GB, segundo a Olares). Com modelos 70B, ele se comporta como a linha da RTX 4090 acima: cerca de 55% de um modelo Q4_K_M cabe na VRAM e o resto é lido da RAM do sistema, o que dá cerca de 2-4 tokens/s (estimativa, não benchmark). Os 96 GB de RAM aumentam a capacidade, não a velocidade: o Q8_0 (75 GB) cabe com espaço para o contexto. A Olares informa um custo de hardware de US$ 4.999 e não publica números de tokens/s para 70B.' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: 'Quanta RAM ou VRAM um modelo 70B precisa em cada nível de quantização?',
          content: 'Os tamanhos abaixo são os arquivos do Llama 3.3 70B na biblioteca do Ollama; outros modelos 70B diferem em alguns por cento. Considere apenas os pesos -- some a memória de contexto da próxima seção.',
          rows: [
            { 'Quantização': 'FP16 (precisão total)', 'Memória (pesos)': '~141 GB', 'Qualidade': 'Qualidade de referência', 'Prático?': 'Mac Ultra de 192 GB+ ou servidor com 256 GB de RAM' },
            { 'Quantização': 'Q8_0', 'Memória (pesos)': '~75 GB', 'Qualidade': 'Quase sem perda', 'Prático?': '96-128 GB de memória unificada ou 128 GB de RAM' },
            { 'Quantização': 'Q6_K', 'Memória (pesos)': '~58 GB', 'Qualidade': 'Muito próxima do Q8_0', 'Prático?': 'Máquinas de 72-96 GB' },
            { 'Quantização': 'Q5_K_M', 'Memória (pesos)': '~50 GB', 'Qualidade': 'Perda mínima', 'Prático?': 'Mac de 64 GB após elevar o limite da GPU -- apertado' },
            { 'Quantização': 'Q4_K_M', 'Memória (pesos)': '~43 GB', 'Qualidade': 'Perda baixa -- padrão', 'Prático?': 'Sim -- Mac de 64 GB ou duas GPUs somando 48 GB' },
            { 'Quantização': 'Q3_K_S', 'Memória (pesos)': '~31 GB', 'Qualidade': 'Perda moderada', 'Prático?': 'Sim -- máquinas de 40-48 GB' },
            { 'Quantização': 'Q2_K', 'Memória (pesos)': '~26 GB', 'Qualidade': 'Perda alta', 'Prático?': 'Não recomendado' },
          ],
          columns: ['Quantização', 'Memória (pesos)', 'Qualidade', 'Prático?'],
        },
        contextMemory: {
          id: 'context-memory',
          title: 'Quanta memória extra o contexto adiciona a um modelo 70B?',
          content: [
            '**O contexto adiciona memória além dos pesos: o Llama 3.3 70B guarda cerca de 0,33 MB de KV cache por token em FP16, o que dá aproximadamente 2,7 GB com 8K tokens, 10,7 GB com 32K e 43 GB com 128K.** O valor vem da arquitetura do modelo: 80 camadas x 8 cabeças key-value x 128 dimensões x 2 (chaves e valores) x 2 bytes = 327.680 bytes por token.',
            'Cada sessão simultânea mantém seu próprio KV cache, enquanto os pesos são compartilhados. Um sistema multiagente com quatro agentes de 32K tokens cada precisa de cerca de 43 GB de pesos mais 43 GB de cache. Ativar flash attention e um KV cache de 8 bits no Ollama (OLLAMA_FLASH_ATTENTION=1 e OLLAMA_KV_CACHE_TYPE=q8_0) reduz o cache aproximadamente pela metade.',
          ],
          rows: [
            { 'Tamanho do contexto': '8K tokens', 'KV cache (FP16)': '~2,7 GB', 'Total com Q4_K_M': '~46 GB' },
            { 'Tamanho do contexto': '32K tokens', 'KV cache (FP16)': '~10,7 GB', 'Total com Q4_K_M': '~54 GB' },
            { 'Tamanho do contexto': '128K tokens', 'KV cache (FP16)': '~43 GB', 'Total com Q4_K_M': '~86 GB' },
          ],
          columns: ['Tamanho do contexto', 'KV cache (FP16)', 'Total com Q4_K_M'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: 'Por que a largura de banda da memória define a velocidade de um modelo 70B?',
          content: [
            '**Cada token gerado lê todos os pesos do modelo uma vez, então a velocidade de decodificação é limitada pela largura de banda da memória dividida pelo tamanho do modelo.** Um modelo Q4_K_M de 43 GB em 614 GB/s de largura de banda tem teto de cerca de 14 tokens/s; a velocidade real costuma ficar em 60-80% desse teto.',
            'A mesma regra explica por que muita memória não significa memória rápida: o DGX Spark de 128 GB tem 273 GB/s, um teto de cerca de 6 tokens/s em Q4_K_M, e a LMSYS mediu 2,7 tokens/s para o Llama 3.1 70B em FP8 (cerca de 70 GB, teto de 3,9). A capacidade decide se o modelo roda; a largura de banda decide com que rapidez. O processamento do prompt (prefill) é limitado pela computação e se comporta de outra forma.',
          ],
          rows: [
            { 'Memória': 'DDR5-5600 dual-channel', 'Largura de banda': '~90 GB/s', 'Teto em 43 GB': '~2 tok/s' },
            { 'Memória': 'AMD Ryzen AI Max+ 395', 'Largura de banda': '256 GB/s', 'Teto em 43 GB': '~6 tok/s' },
            { 'Memória': 'NVIDIA DGX Spark', 'Largura de banda': '273 GB/s', 'Teto em 43 GB': '~6 tok/s' },
            { 'Memória': 'Apple M5 Pro', 'Largura de banda': '307 GB/s', 'Teto em 43 GB': '~7 tok/s' },
            { 'Memória': 'Apple M5 Max', 'Largura de banda': 'até 614 GB/s', 'Teto em 43 GB': '~14 tok/s' },
            { 'Memória': 'Apple M2 Ultra', 'Largura de banda': '800 GB/s', 'Teto em 43 GB': '~19 tok/s' },
            { 'Memória': 'Apple M5 Ultra', 'Largura de banda': 'até 1,2 TB/s', 'Teto em 43 GB': '~28 tok/s' },
          ],
          columns: ['Memória', 'Largura de banda', 'Teto em 43 GB'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: 'O Apple Silicon é uma boa escolha para modelos 70B?',
          content: [
            '**O Apple Silicon é a forma mais simples de manter um modelo 70B inteiro em memória acessível à GPU, porque CPU e GPU compartilham um único pool de memória unificada.** Um Mac com 64 GB ou mais roda Q4_K_M sem layer offloading, em uma velocidade definida pela largura de banda do chip: aproximadamente 9-11 tokens/s em um M5 Max e 12-15 em um M2 Ultra usado (estimativas). Ainda não encontramos benchmarks publicados de 70B para os chips M5.',
            'A Apple anunciou o Mac Studio com M5 Max e M5 Ultra em 25 de agosto de 2026; ambos começaram a ser entregues em 22 de setembro de 2026. O M5 Max começa em US$ 2.499 com 36 GB e vai até 128 GB, com até 614 GB/s -- configure 64 GB ou mais para 70B. O M5 Ultra começa em US$ 5.499 com 96 GB, vai até 512 GB com até 1,2 TB/s e roda Q8_0 com folga; a configuração de 512 GB constava como disponível no fim de outubro.',
            '**O Mac mini M5 Pro começa em US$ 1.699 com 24 GB, não com 64 GB.** A configuração sob encomenda de 64 GB (307 GB/s, Thunderbolt 5) comporta um modelo 70B em Q4_K_M, mas gera apenas cerca de 4-5 tokens/s, e análises o situam em aproximadamente US$ 2.700-US$ 3.200, conforme CPU e armazenamento. O Mac mini M6 base (US$ 899) chega no máximo a 32 GB e 170 GB/s e não consegue rodar um modelo 70B em nenhuma quantização.',
            'Por padrão, o macOS limita a memória endereçável pela GPU a cerca de 75% da RAM (aproximadamente 48 GB em um Mac de 64 GB). Para rodar Q5_K_M (50 GB), eleve o limite, por exemplo com sudo sysctl iogpu.wired_limit_mb=57344 em um Mac de 64 GB; a configuração é redefinida ao reiniciar e deixa para o sistema operacional só cerca de 8 GB.',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: 'O NVIDIA DGX Spark (ou um PC Strix Halo de 128 GB) é bom para modelos 70B?',
          content: [
            '**O NVIDIA DGX Spark é um computador de IA compacto de mesa, com 128 GB de memória unificada LPDDR5x a 273 GB/s, baseado no GB10 Grace Blackwell Superchip e com suporte a CUDA.** Ele carrega um modelo 70B até em Q8_0 (75 GB), mas a largura de banda limita a geração: a LMSYS mediu 2,7 tokens/s de decodificação para o Llama 3.1 70B em FP8, e execuções da comunidade com llama.cpp em Q4_K_M são reportadas na faixa de 4-5 tokens/s.',
            'Os preços variaram bastante. A NVIDIA aumentou o preço da Founders Edition de US$ 3.999 para US$ 4.699 em fevereiro de 2026 por restrições no fornecimento de memória, e um preço de US$ 6.950 foi reportado em outubro de 2026, junto com uma versão de 64 GB a US$ 4.999 vendida por parceiros a partir de 23 de outubro de 2026. Confira os preços atuais antes de comprar.',
            'Os mini PCs e notebooks com AMD Ryzen AI Max+ 395 ("Strix Halo") oferecem 128 GB de LPDDR5X a 256 GB/s, a mesma classe de largura de banda, e uma estimativa semelhante de cerca de 4-5 tokens/s para um modelo 70B denso. As duas plataformas combinam mais com modelos mixture-of-experts (veja abaixo) e com trabalho em CUDA ou fine-tuning do que com chat usando um 70B denso.',
          ],
          rows: [
            { 'Especificação': 'Memória', 'Valor': '128 GB unificados LPDDR5x' },
            { 'Especificação': 'Largura de banda da memória', 'Valor': '273 GB/s' },
            { 'Especificação': '70B em Q8_0 (75 GB)', 'Valor': 'Cabe' },
            { 'Especificação': 'Decodificação 70B, medida', 'Valor': '2,7 tok/s em FP8 (LMSYS, SGLang)' },
            { 'Especificação': 'Tamanho máximo de modelo', 'Valor': '~200B parâmetros em FP4' },
            { 'Especificação': 'Preço', 'Valor': 'US$ 6.950 reportado; lista de US$ 4.699 (fev. 2026)' },
            { 'Especificação': 'Comando Ollama', 'Valor': 'ollama run llama3.3:70b' },
          ],
          columns: ['Especificação', 'Valor'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: 'Como funciona GPU NVIDIA + layer offloading para modelos 70B?',
          content: [
            '**Ollama e llama.cpp dividem o modelo entre a VRAM da GPU e a RAM do sistema: camadas na VRAM rodam na velocidade da GPU, camadas na RAM rodam na velocidade de memória da CPU, e a parte lenta domina.** Com uma RTX 4090 (24 GB), cerca de 55% de um modelo 70B em Q4_K_M cabe na GPU e o restante é lido da DDR5 a aproximadamente 90 GB/s, o que limita a geração a cerca de 2-4 tokens/s. Uma RTX 5090 (32 GB) comporta cerca de 70% e chega a uma estimativa de 4-6 tokens/s.',
            'O Ollama faz o offloading automaticamente; nenhuma flag é necessária. Execute ollama ps para ver a divisão (coluna PROCESSOR, por exemplo 45%/55% CPU/GPU). No llama.cpp, defina o número de camadas com -ngl.',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: 'Qual runtime de inferência é o melhor para um modelo 70B em várias GPUs?',
          content: [
            '**Para um único usuário, Ollama ou llama.cpp com divisão por camadas é o caminho multi-GPU mais simples; para vários usuários ou agentes simultâneos, vLLM ou SGLang com paralelismo de tensor entregam muito mais throughput total.** Duas placas de 24 GB (RTX 3090 ou 4090) somam 48 GB, suficientes para Q4_K_M mais um contexto curto.',
            'A divisão por camadas passa as ativações entre as placas uma vez por token e funciona em PCIe comum, por isso serve para placas mistas ou de consumo. O paralelismo de tensor divide cada camada entre as GPUs e se beneficia de links rápidos: a RTX 3090 aceita uma ponte NVLink, enquanto a RTX 4090 e a 5090 não.',
          ],
          rows: [
            { 'Runtime': 'Ollama', 'Método multi-GPU': 'Divisão automática de camadas', 'Ideal para': 'Um usuário, configuração mais fácil' },
            { 'Runtime': 'llama.cpp', 'Método multi-GPU': '--split-mode, --tensor-split', 'Ideal para': 'GPUs mistas, quantizações GGUF' },
            { 'Runtime': 'vLLM', 'Método multi-GPU': '--tensor-parallel-size N', 'Ideal para': 'Muitos usuários ou agentes; AWQ/GPTQ/FP8' },
            { 'Runtime': 'SGLang', 'Método multi-GPU': 'Paralelismo de tensor', 'Ideal para': 'Agentes com prefixos de prompt compartilhados' },
            { 'Runtime': 'TensorRT-LLM', 'Método multi-GPU': 'Paralelismo de tensor / pipeline', 'Ideal para': 'Máx. throughput NVIDIA; exige build do engine' },
          ],
          columns: ['Runtime', 'Método multi-GPU', 'Ideal para'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: 'A inferência 70B somente com CPU é prática, e 256 GB de RAM ajudam?',
          content: [
            '**A inferência 70B somente com CPU é limitada pela largura de banda da memória: DDR5 dual-channel de desktop (cerca de 90 GB/s) rende aproximadamente 1-2 tokens/s em Q4_K_M, e adicionar capacidade de RAM não a torna mais rápida.** A 1,5 tokens/s, uma resposta de 200 palavras (cerca de 270 tokens) leva em torno de três minutos.',
            '256 GB de RAM mudam o que cabe, não a velocidade: comportam Q8_0 (75 GB) ou FP16 (141 GB) com contexto longo. A velocidade depende dos canais de memória -- um Threadripper PRO de 8 canais ou um servidor EPYC de 12 canais tem de três a cinco vezes a largura de banda de um desktop. Placas de desktop com quatro módulos DIMM grandes costumam rodar a memória mais devagar do que com dois. O processamento do prompt na CPU também é lento para entradas longas.',
            'As estimativas abaixo aplicam a regra da largura de banda com 70% de eficiência; não são benchmarks medidos.',
          ],
          rows: [
            { 'CPU / configuração de RAM': 'Desktop, DDR5-5600 2 canais', 'Largura de banda': '~90 GB/s', 'Q4_K_M (43 GB)': '~1-1,5 tok/s', 'Q8_0 (75 GB)': '~0,6-0,9 tok/s', 'FP16 (141 GB)': '~0,3-0,5 tok/s' },
            { 'CPU / configuração de RAM': 'Threadripper PRO, DDR5-5600 8 can.', 'Largura de banda': '~358 GB/s', 'Q4_K_M (43 GB)': '~5-6 tok/s', 'Q8_0 (75 GB)': '~3-3,5 tok/s', 'FP16 (141 GB)': '~1,5-1,8 tok/s' },
            { 'CPU / configuração de RAM': 'EPYC, DDR5-4800 12 canais', 'Largura de banda': '~461 GB/s', 'Q4_K_M (43 GB)': '~7-8 tok/s', 'Q8_0 (75 GB)': '~4-4,5 tok/s', 'FP16 (141 GB)': '~2-2,5 tok/s' },
          ],
          columns: ['CPU / configuração de RAM', 'Largura de banda', 'Q4_K_M (43 GB)', 'Q8_0 (75 GB)', 'FP16 (141 GB)'],
        },
        moe: {
          id: 'moe-models',
          title: 'Os modelos MoE da classe 70B mudam as contas de hardware?',
          content: [
            '**Modelos mixture-of-experts (MoE) precisam de memória para todos os seus parâmetros, mas leem apenas os especialistas ativos a cada token, então geram texto muito mais rápido do que um modelo 70B denso com o mesmo uso de memória.** O gpt-oss-120b da OpenAI tem cerca de 117 bilhões de parâmetros, com cerca de 5,1 bilhões ativos; o Llama 4 Scout da Meta tem 109 bilhões, com 17 bilhões ativos.',
            'A regra da largura de banda vale para os pesos ativos, de modo que os modelos MoE aproveitam melhor máquinas de alta capacidade e largura de banda moderada, como o DGX Spark, os PCs com Ryzen AI Max+ 395 e um Mac mini M5 Pro de 64 GB. Para um modelo 70B denso nesse hardware, espere 4-5 tokens/s; compare o tamanho do arquivo de cada modelo MoE com a sua memória antes de baixar.',
          ],
        },
        which70b: {
          id: 'which-model',
          title: 'Qual modelo 70B você deve rodar localmente?',
          content: [
            '**O Llama 3.3 70B é o modelo 70B denso padrão: a Meta reporta 86,0 no MMLU (CoT) e 88,4 no HumanEval, com janela de contexto de 128K.** O Qwen2.5 72B é a principal alternativa para uso multilíngue e de programação. Não existe Qwen3 72B -- os modelos densos do Qwen3 vão só até 32B --, então uma menção a "Qwen3 72B" se refere ao Qwen2.5 72B.',
            'Comandos: ollama run llama3.3:70b, ollama run qwen2.5:72b, ollama run deepseek-r1:70b.',
          ],
          rows: [
            { 'Modelo': 'Llama 3.3 70B', 'Parâmetros': '70,6B denso', 'Licença': 'Llama 3.3 Community License', 'Ideal para': 'Inglês geral, seguimento de instruções' },
            { 'Modelo': 'Qwen2.5 72B Instruct', 'Parâmetros': '72,7B denso', 'Licença': 'Qwen License', 'Ideal para': 'Multilíngue, código; 131K com YaRN' },
            { 'Modelo': 'DeepSeek-R1-Distill-Llama-70B', 'Parâmetros': '70B denso', 'Licença': 'Veja o model card', 'Ideal para': 'Raciocínio; saídas longas deixam as respostas lentas' },
            { 'Modelo': 'Mistral Large 2', 'Parâmetros': '123B denso', 'Licença': 'Mistral Research License', 'Ideal para': 'Somente pesquisa; ~75 GB em Q4' },
          ],
          columns: ['Modelo', 'Parâmetros', 'Licença', 'Ideal para'],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: 'Qual hardware você precisa para fazer fine-tuning de um modelo 70B?',
          content: [
            '**O fine-tuning com QLoRA de um modelo 70B exige aproximadamente 35-48 GB de memória de GPU por execução: duas GPUs de 24 GB com FSDP+QLoRA, ou uma única GPU de 48-80 GB.** O QLoRA mantém o modelo base em 4 bits (cerca de 35 GB) e treina pequenos adaptadores; a Answer.AI demonstrou isso em duas GPUs gamer de 24 GB.',
            'O fine-tuning completo em 16 bits exige cerca de 16 bytes por parâmetro para pesos, gradientes e estados do otimizador -- da ordem de 1 TB --, o que é trabalho para um servidor multi-GPU. Alugar uma GPU de 80 GB na nuvem costuma ser mais prático do que montar hardware para execuções ocasionais.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Rodar modelos 70B localmente: contexto regional',
          content: [
            '**UE / GDPR**: Um modelo 70B local é o teto prático de qualidade de IA que a maioria das organizações consegue executar de forma privada. Processar documentos jurídicos, médicos ou financeiros on-premises mantém prompts e saídas dentro da sua própria infraestrutura, o que apoia os controles de minimização de dados e de risco em transferências; isso, por si só, não torna uma implantação em conformidade com o GDPR, então avalie toda a atividade de tratamento.',
            'Para organizações que exigem hardware da cadeia de suprimentos da UE, Apple (EUA) e NVIDIA (EUA) são fornecedores de fora da UE; Dell, HP e Lenovo vendem sistemas baseados no GB10 com suporte local. Quanto aos modelos, o Mistral Large 2 vem de uma desenvolvedora da UE, mas é lançado sob uma licença de pesquisa que não cobre uso comercial.',
            '**Japão**: O Qwen2.5 72B é uma escolha comum para textos em japonês: `ollama run qwen2.5:72b`. Documentar o hardware e as versões dos modelos (a saída de `ollama ps` identifica o modelo carregado) apoia a governança interna conforme as diretrizes japonesas de IA para empresas.',
            '**China**: Um Qwen2.5 72B hospedado localmente mantém os dados na sua própria infraestrutura, o que é relevante para a Lei de Segurança de Dados da China (数据安全法). Se um modelo servido internamente se enquadra nas regras de IA generativa da CAC depende de ele ser oferecido ao público; confirme com um advogado qualificado.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Quais são os erros comuns ao rodar modelos 70B em hardware de consumo?',
          faqs: [
            {
              q: 'Comprar uma GPU com menos de 24 GB de VRAM esperando desempenho 70B completo',
              a: 'Uma placa de 12 GB comporta cerca de um quarto de um modelo 70B em Q4_K_M; o resto roda a partir da RAM do sistema, então a velocidade fica próxima à de só CPU. Mesmo uma RTX 4090 de 24 GB entrega apenas cerca de 2-4 tok/s. Para velocidade interativa, use 48 GB de VRAM, um Mac Apple Silicon de 64 GB ou mais, ou um modelo menor de 27B-34B.',
            },
            {
              q: 'Achar que uma máquina com muita memória também é rápida',
              a: 'Os sistemas DGX Spark e Ryzen AI Max+ 395 têm 128 GB, mas apenas 256-273 GB/s de largura de banda, então um modelo 70B denso roda a cerca de 3-5 tok/s. Um Mac Studio M5 Max com 64 GB tem mais que o dobro da largura de banda. Verifique a largura de banda, não só a capacidade.',
            },
            {
              q: 'Não verificar quanto do modelo roda na GPU',
              a: 'O Ollama faz o offloading automaticamente, mas um encaixe apertado pode deixar camadas na CPU. Execute `ollama ps` após carregar e leia a coluna PROCESSOR; "100% GPU" é o objetivo, e uma parcela na CPU explica a saída lenta. Reduza o tamanho do contexto ou passe para Q3_K_S se a divisão for ruim.',
            },
            {
              q: 'Esquecer que o contexto também consome memória',
              a: 'Um modelo 70B em Q4_K_M ocupa 43 GB, mas um contexto de 32K adiciona cerca de 10,7 GB e um de 128K adiciona cerca de 43 GB em FP16. Uma máquina em que os pesos cabem ainda pode ficar sem memória com contexto longo. Use um KV cache de 8 bits ou um contexto mais curto.',
            },
            {
              q: 'Rodar Q5_K_M ou Q8_0 quando a velocidade importa',
              a: 'Cada token lê o modelo inteiro, então o Q8_0 (75 GB) roda a aproximadamente metade da velocidade do Q4_K_M (43 GB) no mesmo hardware. Em máquinas limitadas por largura de banda (DGX Spark, Strix Halo, Mac mini), escolha Q4_K_M para chat e use Q8_0 só quando a qualidade for a prioridade.',
            },
            {
              q: 'Encomendar o Mac mini M5 Pro de US$ 1.699 esperando que ele rode 70B',
              a: 'O Mac mini M5 Pro de US$ 1.699 tem 24 GB de memória unificada. Um modelo 70B exige a configuração sob encomenda de 64 GB, e o Mac mini M6 base (US$ 899, máximo de 32 GB) não consegue rodá-lo de jeito nenhum. Confirme "M5 Pro" e 64 GB antes de encomendar.',
            },
            {
              q: 'Esbarrar no limite padrão de memória da GPU no macOS',
              a: 'Por padrão, o macOS permite que a GPU use cerca de 75% da RAM, aproximadamente 48 GB em um Mac de 64 GB. O Q4_K_M cabe; o Q5_K_M (50 GB) não, até você elevar `iogpu.wired_limit_mb`.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Leitura relacionada',
          items: [
            '[Guia de hardware para LLM local](/pt/local-llms/local-llm-hardware-guide) -- tabela completa de GPU e RAM por tamanho de modelo, incluindo os requisitos de hardware para 70B',
            '[Rodar modelos 70B com 24 GB de VRAM](/pt/local-llms/run-70b-models-24gb-vram) -- opções de quantização e offloading quando você só tem uma GPU',
            '[Rodar modelos 70B no Apple Silicon M5 Max](/pt/local-llms/running-70b-models-apple-silicon-m5-max) -- configuração específica para Mac com Ollama e MLX',
            '[RTX 5090 vs RTX 4090 para LLMs locais](/pt/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- como 32 GB contra 24 GB de VRAM mudam o offloading',
            '[Mac mini M5 como servidor de IA local](/pt/local-llms/mac-mini-m5-local-ai-server) -- o que a linha Mac mini consegue e não consegue rodar',
            '[Quantização de LLM explicada](/pt/local-llms/llm-quantization-explained) -- entenda Q4_K_M vs Q8_0 e o custo de velocidade da maior precisão',
            '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) -- configuração completa, incluindo as camadas da GPU',
            '[Qwen vs Llama vs Mistral](/pt/local-llms/qwen-vs-llama-vs-mistral) -- comparação detalhada das principais famílias de modelos abertos',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Perguntas frequentes sobre rodar modelos 70B em hardware de consumo',
          faqs: [
            {
              q: 'Qual hardware preciso para rodar um LLM de 70B localmente?',
              a: 'Você precisa de cerca de 43 GB de memória rápida para o Llama 3.3 70B em Q4_K_M, mais 3-10 GB para o contexto. Três configurações mantêm o modelo inteiro em memória rápida: um Mac Apple Silicon com 64 GB ou mais de memória unificada, duas GPUs NVIDIA de 24 GB (48 GB de VRAM no total) ou uma máquina com 128 GB de memória unificada, como o NVIDIA DGX Spark ou um mini PC com AMD Ryzen AI Max+ 395. A capacidade decide se o modelo roda; a largura de banda da memória decide com que rapidez. Uma única GPU de 24 GB ou um PC só com CPU consegue rodá-lo, mas apenas a cerca de 1-4 tokens/s.',
            },
            {
              q: 'O que é um modelo 70B?',
              a: 'Um modelo 70B é um modelo de linguagem grande com cerca de 70 bilhões de parâmetros (pesos). O Llama 3.3 70B tem 70,6 bilhões e o Qwen2.5 72B tem 72,7 bilhões. O tamanho do arquivo decorre do número de parâmetros: cerca de 141 GB em 16 bits, 75 GB em 8 bits (Q8_0) e 43 GB em 4 bits (Q4_K_M).',
            },
            {
              q: 'Quanta VRAM ou RAM preciso para um modelo 70B?',
              a: 'O Llama 3.3 70B precisa de 43 GB em Q4_K_M, 50 GB em Q5_K_M, 75 GB em Q8_0 e 141 GB em FP16 (tamanhos da biblioteca do Ollama), mais o KV cache do contexto: cerca de 2,7 GB com 8K tokens, 10,7 GB com 32K e 43 GB com 128K. Com 24 GB de VRAM, só cerca de metade de um modelo Q4_K_M cabe na GPU, e o resto roda a partir da RAM do sistema.',
            },
            {
              q: 'Qual é o hardware mais barato que roda um modelo 70B de forma utilizável?',
              a: 'Para cerca de 10 tokens/s ou mais, as opções práticas são um Mac Studio M5 Max configurado com 64 GB ou mais (o modelo base de US$ 2.499 tem 36 GB), um Mac Studio M2 Ultra usado com 64 GB ou mais, ou duas GPUs usadas de 24 GB. A opção nova mais barata da Apple é o Mac mini M5 Pro com 64 GB: o modelo base de US$ 1.699 tem apenas 24 GB, e análises situam as configurações de 64 GB em aproximadamente US$ 2.700-US$ 3.200. Sua largura de banda de 307 GB/s o limita a cerca de 4-5 tokens/s. Os preços de GPUs no varejo são voláteis: anúncios da RTX 5090 foram reportados bem acima do preço de lançamento de US$ 1.999 em outubro de 2026, então confira os preços atuais.',
            },
            {
              q: 'Posso rodar um modelo 70B em uma única GPU de 24 GB?',
              a: 'Sim, mas devagar. Uma placa de 24 GB como a RTX 4090 comporta cerca de 55% de um modelo 70B em Q4_K_M; as camadas restantes rodam a partir da RAM do sistema, na velocidade de memória da CPU, o que dá aproximadamente 2-4 tokens/s com DDR5 rápida. Para velocidade interativa, use um modelo menor (27B-34B cabe em 24 GB, como o Qwen3.8-27B), duas GPUs ou uma máquina de memória unificada com 64 GB ou mais.',
            },
            {
              q: 'Posso rodar um modelo 70B em duas GPUs?',
              a: 'Sim. Duas placas de 24 GB (RTX 3090 ou 4090) oferecem 48 GB de VRAM, o que comporta um modelo 70B em Q4_K_M (43 GB) com um contexto curto de alguns milhares de tokens. Ollama e llama.cpp dividem as camadas entre as duas placas automaticamente ou com --tensor-split. Espere aproximadamente 12-17 tokens/s como estimativa, porque cada token passa pelas duas placas em sequência.',
            },
            {
              q: 'Qual é o melhor runtime de inferência para rodar LLMs de 70B em hardware multi-GPU?',
              a: 'Para um único usuário, Ollama ou llama.cpp com divisão por camadas é o mais simples e funciona com GPUs mistas. Para vários usuários ou agentes simultâneos, vLLM com --tensor-parallel-size igual ao número de GPUs, ou SGLang, entrega um throughput total muito maior porque agrupa as requisições em lotes; ambos preferem GPUs idênticas e pesos AWQ, GPTQ ou FP8. O TensorRT-LLM entrega o maior throughput em NVIDIA, mas exige uma etapa de build do engine.',
            },
            {
              q: 'Quanta memória de GPU um sistema multiagente com backends 70B precisa?',
              a: 'Calcule os pesos uma vez, mais um KV cache por sessão simultânea. O Llama 3.3 70B em Q4_K_M precisa de cerca de 43 GB para os pesos; cada sessão ativa adiciona cerca de 0,33 MB por token de contexto em FP16. Quatro agentes com 32K tokens cada precisam, portanto, de cerca de 43 GB + 43 GB = 86 GB. Sirva todos os agentes a partir de um único servidor compartilhado (vLLM, SGLang ou llama.cpp com slots paralelos) em vez de carregar uma cópia do modelo por agente.',
            },
            {
              q: '256 GB de RAM ajudam na inferência de um modelo 70B só com CPU?',
              a: 'Ajudam na capacidade, não na velocidade. 256 GB permitem carregar Q8_0 (75 GB) ou FP16 (141 GB) com contexto longo, mas a velocidade de decodificação é limitada pelos canais de memória: aproximadamente 0,5-1,5 tokens/s em um desktop dual-channel, cerca de 3-6 em um Threadripper PRO de 8 canais e cerca de 4-8 em um EPYC de 12 canais, de Q4_K_M a Q8_0 (estimativas a partir da largura de banda da memória, não benchmarks que executamos).',
            },
            {
              q: 'O Mac mini M6 consegue rodar um modelo 70B?',
              a: 'Não. O Mac mini M6 (a partir de US$ 899) chega no máximo a 32 GB de memória unificada e 170 GB/s de largura de banda, abaixo dos 43 GB de que um modelo 70B em Q4_K_M precisa. O Mac mini M5 Pro (a partir de US$ 1.699, 307 GB/s, Thunderbolt 5) pode ser configurado com até 64 GB; o modelo base de US$ 1.699 tem 24 GB, então peça a configuração sob encomenda de 64 GB. Ambos começaram a ser entregues em 22 de setembro de 2026.',
            },
            {
              q: 'O que é o NVIDIA DGX Spark e vale a pena para inferência 70B?',
              a: 'O DGX Spark é o computador de IA compacto de mesa da NVIDIA, com 128 GB de memória unificada LPDDR5x a 273 GB/s. Ele carrega modelos 70B em Q8_0, mas é limitado pela largura de banda: a LMSYS mediu 2,7 tokens/s de decodificação para o Llama 3.1 70B em FP8. Combina mais com trabalho em CUDA, fine-tuning e grandes modelos MoE do que com chat rápido usando um 70B denso. A NVIDIA aumentou o preço da Founders Edition de US$ 3.999 para US$ 4.699 em fevereiro de 2026, e um preço de US$ 6.950 foi reportado em outubro de 2026, junto com uma versão de 64 GB a US$ 4.999 de parceiros.',
            },
            {
              q: 'Como a qualidade de um 70B local se compara à de modelos na nuvem?',
              a: 'A Meta reporta 86,0 no MMLU (CoT) e 88,4 no HumanEval para o Llama 3.3 70B Instruct. Os modelos de nuvem de ponta lançados depois pontuam mais em tarefas que exigem muito raciocínio, enquanto os modelos 70B locais continuam competitivos em resumo, extração, redação e geração rotineira de código. Teste os dois com os seus próprios prompts, por exemplo com o [PromptQuorum](/pt), antes de investir em hardware para 70B.',
            },
            {
              q: 'Quanta eletricidade rodar um modelo 70B consome?',
              a: 'Uma GPU consome até a potência da placa enquanto gera texto: 350 W para uma RTX 3090, 450 W para uma RTX 4090 e 575 W para uma RTX 5090. A US$ 0,15 por kWh, uma RTX 4090 em carga total custa cerca de US$ 0,07 por hora só pela GPU. O Apple Silicon e as máquinas de memória unificada consomem muito menos energia para o mesmo modelo, mas em velocidade menor.',
            },
            {
              q: 'Modelos 70B valem a pena em comparação com modelos menores para tarefas do dia a dia?',
              a: 'Para raciocínio complexo, análise de documentos longos e escrita com nuances, em geral sim. Para resumo simples, perguntas e respostas e classificação, um modelo de 7B-14B costuma produzir resultado parecido por uma fração do custo de hardware. Rode ambos com os seus próprios prompts antes de investir em hardware para 70B.',
            },
            {
              q: 'Posso fazer fine-tuning de um modelo 70B em hardware de consumo?',
              a: 'Somente com QLoRA. O QLoRA mantém o modelo base em 4 bits (cerca de 35 GB) e treina pequenos adaptadores; a Answer.AI mostrou o FSDP+QLoRA treinando um modelo 70B em duas GPUs gamer de 24 GB. O fine-tuning completo em 16 bits exige da ordem de 1 TB de memória e é trabalho para um servidor multi-GPU. Para qualquer coisa além de execuções ocasionais de QLoRA, alugar uma GPU de 80 GB na nuvem costuma ser mais prático.',
            },
            {
              q: 'Qual é a melhor quantização para 70B no Apple Silicon?',
              a: 'Em um Mac de 64 GB, use Q4_K_M (43 GB). O macOS limita a memória endereçável pela GPU a cerca de 75% da RAM por padrão (aproximadamente 48 GB em um Mac de 64 GB), então o Q5_K_M (50 GB) só funciona depois de elevar o limite com sysctl iogpu.wired_limit_mb, e deixa pouca folga. Com 96-128 GB, o Q8_0 (75 GB) é a escolha quase sem perda, a aproximadamente metade da velocidade do Q4_K_M, porque cada token lê o dobro de bytes.',
            },
            {
              q: 'O Ollama escolhe automaticamente a melhor quantização?',
              a: 'Não. ollama run llama3.3:70b baixa o Q4_K_M padrão (43 GB). Indique a tag para outro nível, por exemplo ollama run llama3.3:70b-instruct-q5_K_M ou ollama run llama3.3:70b-instruct-q8_0. Execute ollama ps após carregar: a coluna PROCESSOR mostra quanto do modelo roda na GPU e quanto na CPU.',
            },
            {
              q: 'Um iPhone ou notebook consegue rodar um modelo 70B?',
              a: 'Um iPhone não: os iPhones atuais têm 8-12 GB de RAM, enquanto um modelo 70B em Q4_K_M precisa de cerca de 43 GB, então celulares rodam modelos de 1B-8B. Notebooks só com 64 GB ou mais de memória unificada (configurações topo de linha do MacBook Pro) ou um sistema AMD Ryzen AI Max+ 395 com 128 GB. Notebooks gamer com 16-24 GB de VRAM, como um ASUS ROG Strix, caem no caso lento de offload parcial.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Fontes',
          items: [
            '[Ollama: tags e tamanhos do Llama 3.3](https://ollama.com/library/llama3.3/tags) -- Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB',
            '[Model card do Meta Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU (CoT) 86,0, HumanEval 88,4, contexto de 128K, licença',
            '[Model card do Qwen2.5 72B Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 72,7B parâmetros, contexto de 131K com YaRN',
            '[Model card do Mistral Large Instruct 2407](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 123B parâmetros, Mistral Research License',
            '[LMSYS: análise detalhada do NVIDIA DGX Spark](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B em FP8 a 2,7 tok/s de decodificação, 273 GB/s',
            '[Apple Newsroom: Mac mini com M6 e M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- preços, memória, largura de banda',
            '[9to5Mac: Mac Studio com M5 Max e M5 Ultra](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- preços, memória base e máxima, largura de banda',
            '[Fórum de desenvolvedores da NVIDIA: mudança de preço do DGX Spark](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- de US$ 3.999 para US$ 4.699',
            '[TechnoEdge: aumento de preço do DGX Spark e modelo de 64 GB](https://www.techno-edge.net/article/2026/10/08/5565.html) -- preços reportados de US$ 6.950 e US$ 4.999',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- configuração de 64 GB / 1 TB listada a US$ 3.199',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- preços das opções de memória de 48 GB e 64 GB',
            '[Answer.AI: treinar um modelo 70B em casa](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- FSDP + QLoRA em duas GPUs de 24 GB',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) -- documentação de GPU offloading e divisão multi-GPU',
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile com 24 GB GDDR7, 96 GB DDR5, custo de hardware de US$ 4.999',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        'headline': 'Rodar LLM de 70B localmente em 2026: RAM, VRAM e velocidade',
        'description': 'Um modelo 70B precisa de ~43 GB em Q4_K_M mais contexto. RAM, VRAM e tok/s estimados em Mac, DGX Spark, GPUs RTX e PCs só com CPU, inclusive 256 GB de RAM.',
        'url': 'https://www.promptquorum.com/pt/local-llms/70b-models-consumer-hardware',
        'inLanguage': 'pt-BR',
        'datePublished': '2026-04-04',
        'dateModified': '2026-10-29',
        'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
        'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
        'about': [
          { '@type': 'Thing', 'name': 'modelo de linguagem 70B' },
          { '@type': 'Thing', 'name': 'inferência Apple Silicon' },
          { '@type': 'Thing', 'name': 'NVIDIA RTX 4090' },
          { '@type': 'Thing', 'name': 'Layer offloading' },
          { '@type': 'Thing', 'name': 'Llama 3.3 70B' },
          { '@type': 'Thing', 'name': 'Qwen2.5 72B' },
          { '@type': 'Thing', 'name': 'NVIDIA DGX Spark' },
          { '@type': 'Thing', 'name': 'Apple Mac mini M5 Pro' },
          { '@type': 'Thing', 'name': 'Largura de banda da memória' },
        ],
        'mentions': [
          { '@type': 'SoftwareApplication', 'name': 'Ollama' },
          { '@type': 'SoftwareApplication', 'name': 'llama.cpp' },
          { '@type': 'SoftwareApplication', 'name': 'vLLM' },
        ],
        'speakable': { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways', 'h2'] },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'inLanguage': 'pt-BR',
        'name': 'Como rodar um modelo 70B em hardware de consumo com o Ollama',
        'step': [
          { '@type': 'HowToStep', 'position': 1, 'name': 'Verifique se você tem 48+ GB de memória rápida (memória unificada, VRAM ou RAM) para o modelo mais o contexto' },
          { '@type': 'HowToStep', 'position': 2, 'name': 'Instale o Ollama a partir de ollama.com' },
          { '@type': 'HowToStep', 'position': 3, 'name': 'Execute: ollama run llama3.3:70b' },
          { '@type': 'HowToStep', 'position': 4, 'name': 'Verifique a divisão entre CPU e GPU com: ollama ps' },
          { '@type': 'HowToStep', 'position': 5, 'name': 'Ajuste a quantização se a memória estiver apertada: use a tag q3_K_S ou reduza o contexto' },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'inLanguage': 'pt-BR',
        'name': 'Hardware para rodar um LLM local de 70B em 2026',
        'numberOfItems': 12,
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Mac Studio M5 Max (64-128 GB)', 'description': 'Sim -- GPU completa. ~9-11 tok/s (estimativa). A configuração base tem 36 GB; 64 GB+ é upgrade.' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Mac Studio M5 Ultra (96 GB+)', 'description': 'Sim -- cabe Q8_0. ~17-21 tok/s (estimativa). A partir de US$ 5.499 com 96 GB.' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Mac mini M5 Pro (64 GB)', 'description': 'Sim -- apertado. ~4-5 tok/s (estimativa). A base de US$ 1.699 tem 24 GB; 64 GB é sob encomenda.' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Mac mini M6 (32 GB máx.)', 'description': 'Não. N/D (estimativa). 32 GB máx. fica abaixo dos ~43 GB do arquivo Q4.' },
          { '@type': 'ListItem', 'position': 5, 'name': 'Mac Studio M2 Ultra (64 GB+, usado)', 'description': 'Sim -- GPU completa. ~12-15 tok/s (estimativa). Só no mercado de usados; confira a memória.' },
          { '@type': 'ListItem', 'position': 6, 'name': 'NVIDIA DGX Spark (128 GB)', 'description': 'Sim -- cabe Q8_0. ~4-5 tok/s (estimativa). 2,7 tok/s medidos em FP8; US$ 6.950 reportados.' },
          { '@type': 'ListItem', 'position': 7, 'name': 'AMD Ryzen AI Max+ 395 (128 GB)', 'description': 'Sim. ~4-5 tok/s (estimativa). Mini PCs e notebooks; fatia de memória da GPU é configurável.' },
          { '@type': 'ListItem', 'position': 8, 'name': '2x RTX 3090 / 4090 (48 GB)', 'description': 'Sim -- apertado. ~12-17 tok/s (estimativa). Apenas Q4_K_M com contexto curto.' },
          { '@type': 'ListItem', 'position': 9, 'name': 'RTX 5090 (32 GB) + 64 GB RAM', 'description': 'Offload parcial. ~4-6 tok/s (estimativa). ~70% das camadas na GPU, o resto na RAM do sistema.' },
          { '@type': 'ListItem', 'position': 10, 'name': 'RTX 4090 (24 GB) + 64 GB RAM', 'description': 'Offload parcial. ~2-4 tok/s (estimativa). ~55% das camadas na GPU, o resto na RAM do sistema.' },
          { '@type': 'ListItem', 'position': 11, 'name': 'Só CPU, DDR5 dual-channel', 'description': 'Sim -- só CPU. ~1-2 tok/s (estimativa). Apenas tarefas em lote.' },
          { '@type': 'ListItem', 'position': 12, 'name': 'Só CPU, RAM de servidor de 8-12 canais', 'description': 'Sim -- só CPU. ~5-8 tok/s (estimativa). Threadripper PRO / EPYC; 256 GB permite Q8_0.' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'inLanguage': 'pt-BR',
        'mainEntity': [
          { '@type': 'Question', 'name': 'Qual hardware preciso para rodar um LLM de 70B localmente?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Você precisa de cerca de 43 GB de memória rápida para o Llama 3.3 70B em Q4_K_M, mais 3-10 GB para o contexto. Três configurações mantêm o modelo inteiro em memória rápida: um Mac Apple Silicon com 64 GB ou mais de memória unificada, duas GPUs NVIDIA de 24 GB (48 GB de VRAM no total) ou uma máquina com 128 GB de memória unificada, como o NVIDIA DGX Spark ou um mini PC com AMD Ryzen AI Max+ 395. A capacidade decide se o modelo roda; a largura de banda da memória decide com que rapidez. Uma única GPU de 24 GB ou um PC só com CPU consegue rodá-lo, mas apenas a cerca de 1-4 tokens/s.' } },
          { '@type': 'Question', 'name': 'O que é um modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Um modelo 70B é um modelo de linguagem grande com cerca de 70 bilhões de parâmetros (pesos). O Llama 3.3 70B tem 70,6 bilhões e o Qwen2.5 72B tem 72,7 bilhões. O tamanho do arquivo decorre do número de parâmetros: cerca de 141 GB em 16 bits, 75 GB em 8 bits (Q8_0) e 43 GB em 4 bits (Q4_K_M).' } },
          { '@type': 'Question', 'name': 'Quanta VRAM ou RAM preciso para um modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O Llama 3.3 70B precisa de 43 GB em Q4_K_M, 50 GB em Q5_K_M, 75 GB em Q8_0 e 141 GB em FP16 (tamanhos da biblioteca do Ollama), mais o KV cache do contexto: cerca de 2,7 GB com 8K tokens, 10,7 GB com 32K e 43 GB com 128K. Com 24 GB de VRAM, só cerca de metade de um modelo Q4_K_M cabe na GPU, e o resto roda a partir da RAM do sistema.' } },
          { '@type': 'Question', 'name': 'Qual é o hardware mais barato que roda um modelo 70B de forma utilizável?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para cerca de 10 tokens/s ou mais, as opções práticas são um Mac Studio M5 Max configurado com 64 GB ou mais (o modelo base de US$ 2.499 tem 36 GB), um Mac Studio M2 Ultra usado com 64 GB ou mais, ou duas GPUs usadas de 24 GB. A opção nova mais barata da Apple é o Mac mini M5 Pro com 64 GB: o modelo base de US$ 1.699 tem apenas 24 GB, e análises situam as configurações de 64 GB em aproximadamente US$ 2.700-US$ 3.200. Sua largura de banda de 307 GB/s o limita a cerca de 4-5 tokens/s. Os preços de GPUs no varejo são voláteis: anúncios da RTX 5090 foram reportados bem acima do preço de lançamento de US$ 1.999 em outubro de 2026, então confira os preços atuais.' } },
          { '@type': 'Question', 'name': 'Posso rodar um modelo 70B em uma única GPU de 24 GB?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim, mas devagar. Uma placa de 24 GB como a RTX 4090 comporta cerca de 55% de um modelo 70B em Q4_K_M; as camadas restantes rodam a partir da RAM do sistema, na velocidade de memória da CPU, o que dá aproximadamente 2-4 tokens/s com DDR5 rápida. Para velocidade interativa, use um modelo menor (27B-34B cabe em 24 GB, como o Qwen3.8-27B), duas GPUs ou uma máquina de memória unificada com 64 GB ou mais.' } },
          { '@type': 'Question', 'name': 'Posso rodar um modelo 70B em duas GPUs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Sim. Duas placas de 24 GB (RTX 3090 ou 4090) oferecem 48 GB de VRAM, o que comporta um modelo 70B em Q4_K_M (43 GB) com um contexto curto de alguns milhares de tokens. Ollama e llama.cpp dividem as camadas entre as duas placas automaticamente ou com --tensor-split. Espere aproximadamente 12-17 tokens/s como estimativa, porque cada token passa pelas duas placas em sequência.' } },
          { '@type': 'Question', 'name': 'Qual é o melhor runtime de inferência para rodar LLMs de 70B em hardware multi-GPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para um único usuário, Ollama ou llama.cpp com divisão por camadas é o mais simples e funciona com GPUs mistas. Para vários usuários ou agentes simultâneos, vLLM com --tensor-parallel-size igual ao número de GPUs, ou SGLang, entrega um throughput total muito maior porque agrupa as requisições em lotes; ambos preferem GPUs idênticas e pesos AWQ, GPTQ ou FP8. O TensorRT-LLM entrega o maior throughput em NVIDIA, mas exige uma etapa de build do engine.' } },
          { '@type': 'Question', 'name': 'Quanta memória de GPU um sistema multiagente com backends 70B precisa?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Calcule os pesos uma vez, mais um KV cache por sessão simultânea. O Llama 3.3 70B em Q4_K_M precisa de cerca de 43 GB para os pesos; cada sessão ativa adiciona cerca de 0,33 MB por token de contexto em FP16. Quatro agentes com 32K tokens cada precisam, portanto, de cerca de 43 GB + 43 GB = 86 GB. Sirva todos os agentes a partir de um único servidor compartilhado (vLLM, SGLang ou llama.cpp com slots paralelos) em vez de carregar uma cópia do modelo por agente.' } },
          { '@type': 'Question', 'name': '256 GB de RAM ajudam na inferência de um modelo 70B só com CPU?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Ajudam na capacidade, não na velocidade. 256 GB permitem carregar Q8_0 (75 GB) ou FP16 (141 GB) com contexto longo, mas a velocidade de decodificação é limitada pelos canais de memória: aproximadamente 0,5-1,5 tokens/s em um desktop dual-channel, cerca de 3-6 em um Threadripper PRO de 8 canais e cerca de 4-8 em um EPYC de 12 canais, de Q4_K_M a Q8_0 (estimativas a partir da largura de banda da memória, não benchmarks que executamos).' } },
          { '@type': 'Question', 'name': 'O Mac mini M6 consegue rodar um modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Não. O Mac mini M6 (a partir de US$ 899) chega no máximo a 32 GB de memória unificada e 170 GB/s de largura de banda, abaixo dos 43 GB de que um modelo 70B em Q4_K_M precisa. O Mac mini M5 Pro (a partir de US$ 1.699, 307 GB/s, Thunderbolt 5) pode ser configurado com até 64 GB; o modelo base de US$ 1.699 tem 24 GB, então peça a configuração sob encomenda de 64 GB. Ambos começaram a ser entregues em 22 de setembro de 2026.' } },
          { '@type': 'Question', 'name': 'O que é o NVIDIA DGX Spark e vale a pena para inferência 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'O DGX Spark é o computador de IA compacto de mesa da NVIDIA, com 128 GB de memória unificada LPDDR5x a 273 GB/s. Ele carrega modelos 70B em Q8_0, mas é limitado pela largura de banda: a LMSYS mediu 2,7 tokens/s de decodificação para o Llama 3.1 70B em FP8. Combina mais com trabalho em CUDA, fine-tuning e grandes modelos MoE do que com chat rápido usando um 70B denso. A NVIDIA aumentou o preço da Founders Edition de US$ 3.999 para US$ 4.699 em fevereiro de 2026, e um preço de US$ 6.950 foi reportado em outubro de 2026, junto com uma versão de 64 GB a US$ 4.999 de parceiros.' } },
          { '@type': 'Question', 'name': 'Como a qualidade de um 70B local se compara à de modelos na nuvem?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A Meta reporta 86,0 no MMLU (CoT) e 88,4 no HumanEval para o Llama 3.3 70B Instruct. Os modelos de nuvem de ponta lançados depois pontuam mais em tarefas que exigem muito raciocínio, enquanto os modelos 70B locais continuam competitivos em resumo, extração, redação e geração rotineira de código. Teste os dois com os seus próprios prompts, por exemplo com o [PromptQuorum](/pt), antes de investir em hardware para 70B.' } },
          { '@type': 'Question', 'name': 'Quanta eletricidade rodar um modelo 70B consome?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Uma GPU consome até a potência da placa enquanto gera texto: 350 W para uma RTX 3090, 450 W para uma RTX 4090 e 575 W para uma RTX 5090. A US$ 0,15 por kWh, uma RTX 4090 em carga total custa cerca de US$ 0,07 por hora só pela GPU. O Apple Silicon e as máquinas de memória unificada consomem muito menos energia para o mesmo modelo, mas em velocidade menor.' } },
          { '@type': 'Question', 'name': 'Modelos 70B valem a pena em comparação com modelos menores para tarefas do dia a dia?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Para raciocínio complexo, análise de documentos longos e escrita com nuances, em geral sim. Para resumo simples, perguntas e respostas e classificação, um modelo de 7B-14B costuma produzir resultado parecido por uma fração do custo de hardware. Rode ambos com os seus próprios prompts antes de investir em hardware para 70B.' } },
          { '@type': 'Question', 'name': 'Posso fazer fine-tuning de um modelo 70B em hardware de consumo?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Somente com QLoRA. O QLoRA mantém o modelo base em 4 bits (cerca de 35 GB) e treina pequenos adaptadores; a Answer.AI mostrou o FSDP+QLoRA treinando um modelo 70B em duas GPUs gamer de 24 GB. O fine-tuning completo em 16 bits exige da ordem de 1 TB de memória e é trabalho para um servidor multi-GPU. Para qualquer coisa além de execuções ocasionais de QLoRA, alugar uma GPU de 80 GB na nuvem costuma ser mais prático.' } },
          { '@type': 'Question', 'name': 'Qual é a melhor quantização para 70B no Apple Silicon?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Em um Mac de 64 GB, use Q4_K_M (43 GB). O macOS limita a memória endereçável pela GPU a cerca de 75% da RAM por padrão (aproximadamente 48 GB em um Mac de 64 GB), então o Q5_K_M (50 GB) só funciona depois de elevar o limite com sysctl iogpu.wired_limit_mb, e deixa pouca folga. Com 96-128 GB, o Q8_0 (75 GB) é a escolha quase sem perda, a aproximadamente metade da velocidade do Q4_K_M, porque cada token lê o dobro de bytes.' } },
          { '@type': 'Question', 'name': 'O Ollama escolhe automaticamente a melhor quantização?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Não. ollama run llama3.3:70b baixa o Q4_K_M padrão (43 GB). Indique a tag para outro nível, por exemplo ollama run llama3.3:70b-instruct-q5_K_M ou ollama run llama3.3:70b-instruct-q8_0. Execute ollama ps após carregar: a coluna PROCESSOR mostra quanto do modelo roda na GPU e quanto na CPU.' } },
          { '@type': 'Question', 'name': 'Um iPhone ou notebook consegue rodar um modelo 70B?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Um iPhone não: os iPhones atuais têm 8-12 GB de RAM, enquanto um modelo 70B em Q4_K_M precisa de cerca de 43 GB, então celulares rodam modelos de 1B-8B. Notebooks só com 64 GB ou mais de memória unificada (configurações topo de linha do MacBook Pro) ou um sistema AMD Ryzen AI Max+ 395 com 128 GB. Notebooks gamer com 16-24 GB de VRAM, como um ASUS ROG Strix, caem no caso lento de offload parcial.' } },
        ],
      },
    },
    de: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Beste Modelle',
      title: '70B-LLM lokal ausführen 2026: RAM, VRAM & Tempo je Hardware',
      dateModified: '2026-10-29',
      seoTitle: '70B-LLM Hardware-Anforderungen 2026: RAM, VRAM, Tempo',
      intro: 'Ein 70B-Modell lokal auszuführen braucht bei Q4_K_M etwa 43 GB schnellen Speicher, dazu 3-10 GB für den Kontext. Ein Mac mit 64 GB oder mehr Unified Memory, zwei GPUs mit je 24 GB oder ein Rechner mit 128 GB Unified Memory kann es vollständig im schnellen Speicher halten. Das Tempo hängt von der Speicherbandbreite ab: von 1-2 Tokens/s auf einer Desktop-CPU bis zu rund 10 Tokens/s auf einem Mac Studio M5 Max. Llama 3.3 70B und Qwen2.5 72B sind die beiden wichtigsten dichten Modelle der 70B-Klasse.',
      metaDescription: 'Ein 70B-Modell braucht ca. 43 GB bei Q4_K_M plus Kontext. RAM, VRAM und geschätzte tok/s auf Mac, DGX Spark, RTX-GPUs und CPU-PCs, auch mit 256 GB RAM.',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-de.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**Ein 70B-Modell braucht bei Q4_K_M (Llama 3.3 70B) etwa 43 GB Speicher, dazu 3-10 GB für den Kontext, und sein Tempo wird von der Speicherbandbreite bestimmt, nicht von der Kapazität. Ein Mac mit 64 GB oder mehr, zwei GPUs mit je 24 GB oder ein Rechner mit 128 GB Unified Memory hält es vollständig im schnellen Speicher; eine einzelne 24-GB-GPU oder ein reiner CPU-PC kommt auf etwa 1-4 Tokens/s.**',
      audience: 'Entwickler, die mit Ollama oder LM Studio vertraut sind und ihre lokalen LLM-Workflows optimieren',
      readTime: '11 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B lokales LLM Consumer Hardware',
      toc: [
        { label: 'Zusammenfassung', anchor: '#key-takeaways' },
        { label: 'Was ist ein 70B-Modell?', anchor: '#what-is-70b' },
        { label: 'Welche Hardware brauchst du?', anchor: '#what-hardware' },
        { label: 'Speicherbedarf je Quantisierung', anchor: '#ram-requirements' },
        { label: 'Kontext und KV-Cache-Speicher', anchor: '#context-memory' },
        { label: 'Warum die Speicherbandbreite das Tempo bestimmt', anchor: '#memory-bandwidth' },
        { label: 'Apple Silicon', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark und Unified-Memory-PCs', anchor: '#dgx-spark' },
        { label: 'NVIDIA GPU + Layer Offloading', anchor: '#nvidia-layer-offloading' },
        { label: 'Multi-GPU-Runtimes', anchor: '#multi-gpu-runtimes' },
        { label: 'CPU-only 70B-Inferenz', anchor: '#cpu-only' },
        { label: 'MoE-Modelle der 70B-Klasse', anchor: '#moe-models' },
        { label: 'Welches 70B-Modell solltest du ausführen?', anchor: '#which-model' },
        { label: '70B-Modell feinabstimmen', anchor: '#fine-tuning' },
        { label: 'Regionaler Kontext', anchor: '#regional-context' },
        { label: 'Häufige Fehler', anchor: '#common-mistakes' },
        { label: 'Weiterführende Artikel', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: 'Ein 70B-Modell braucht bei Q4_K_M etwa 43 GB Speicher plus 3-10 GB für den Kontext und erzeugt ungefähr Bandbreite geteilt durch Modellgröße Tokens pro Sekunde; ein Mac ab 64 GB, zwei 24-GB-GPUs oder ein Rechner mit 128 GB Unified Memory führen es im schnellen Speicher aus, während eine einzelne 24-GB-GPU nur 2-4 Tokens/s schafft.',
            },
            {
              type: 'plain-terms',
              text: 'Ein 70B-Modell ist ein sehr großes KI-Modell mit rund 70 Milliarden einstellbaren Zahlen. Es zu laden braucht etwa 43 GB Speicher, und wie schnell es antwortet, hängt davon ab, wie schnell sich dieser Speicher auslesen lässt. Ein Mac mit viel Unified Memory oder zwei große Grafikkarten sind der bequeme Weg; ein normaler PC mit einer Grafikkarte funktioniert, antwortet aber langsam.',
            },
          ],
          items: [
            'Speicher bei Q4_K_M: Llama 3.3 70B belegt 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB. Der Kontext kommt mit etwa 2,7 GB pro 8K Tokens hinzu.',
            '**Tempo-Regel**: Tokens/s sind durch Speicherbandbreite geteilt durch Modellgröße nach oben begrenzt, und das reale Tempo liegt typischerweise bei 60-80 % dieser Obergrenze. 43 GB bei 614 GB/s ergeben eine Obergrenze von etwa 14 tok/s.',
            '**Bestes Tempo für Privatanwender**: ein Mac Studio M5 Max mit 64 GB oder mehr (etwa 9-11 tok/s) oder zwei 24-GB-GPUs (etwa 12-17 tok/s); der Mac Studio M5 Ultra erreicht geschätzt 17-21 tok/s.',
            '**Mac mini**: Das Modell M5 Pro für 1.699 $ hat 24 GB; 64 GB sind ein Build-to-Order-Upgrade, das etwa 4-5 tok/s liefert. Der Mac mini M6 (max. 32 GB) kann kein 70B-Modell ausführen.',
            '**DGX Spark**: 128 GB, aber nur 273 GB/s; LMSYS maß 2,7 tok/s für 70B bei FP8. Kaufe ihn für CUDA und große MoE-Modelle, nicht für schnellen Chat mit einem dichten 70B-Modell.',
            '**Einzelne 24-GB-GPU oder nur CPU**: etwa 2-4 tok/s mit einer RTX 4090 und schnellem DDR5, 1-2 tok/s auf einer Desktop-CPU. 256 GB RAM schaffen Kapazität (Q8_0, FP16, langer Kontext), kein Tempo.',
            'Ein Qwen3 72B existiert nicht: Das 72B-Modell ist Qwen2.5 72B. Neuere große offene Modelle sind meist Mixture-of-Experts-Modelle.',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: 'Was ist ein 70B-Modell?',
          content: [
            '**Ein 70B-Modell ist ein großes Sprachmodell mit etwa 70 Milliarden Parametern -- den gelernten Gewichten, aus denen das Netz besteht.** „B“ steht für Billion im englischen Sinn, also Milliarde. Llama 3.3 70B hat 70,6 Milliarden Parameter und Qwen2.5 72B hat 72,7 Milliarden.',
            'Der Speicherbedarf ergibt sich aus Parametern mal Bytes pro Gewicht: 16-Bit-Gewichte belegen je 2 Bytes (etwa 141 GB), 8 Bit (Q8_0) etwa 1 Byte (75 GB) und 4 Bit Q4_K_M etwa 0,6 Bytes (43 GB). Deshalb ist 70B die Größe, ab der Consumer-Hardware erstmals 40+ GB schnellen Speicher braucht, während 7B-14B-Modelle auf einen gewöhnlichen Laptop passen.',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: 'Welche Hardware brauchst du, um ein 70B-LLM lokal auszuführen?',
          content: [
            '**Du brauchst etwa 43 GB schnellen Speicher für das Modell plus 3-10 GB für den Kontext, im GPU-VRAM, im Apple Unified Memory oder im System-RAM -- und je schneller dieser Speicher ist, desto schneller erzeugt das Modell Text.**',
            'Die Geschwindigkeiten unten sind Schätzwerte für Einzelnutzer-Chat bei kurzem Kontext, abgeleitet aus der Speicherbandbreite (siehe „Warum die Speicherbandbreite das Tempo bestimmt“). Sie sind Obergrenzen, auf eine typische Effizienz von 60-80 % reduziert, und keine von PromptQuorum durchgeführten Benchmarks; die Ausnahme ist der DGX-Spark-Wert, der von Dritten gemessen wurde.',
          ],
          rows: [
            {
              'Hardware': 'Mac Studio M5 Max (64-128 GB)',
              'Passt 70B Q4?': 'Ja -- volle GPU',
              'Speicherbandbreite': 'bis zu 614 GB/s',
              'Gesch. Tempo (Q4_K_M)': '~9-11 tok/s',
              'Hinweise': 'Basis-Config hat 36 GB; 64 GB+ ist ein Upgrade',
            },
            {
              'Hardware': 'Mac Studio M5 Ultra (96 GB+)',
              'Passt 70B Q4?': 'Ja -- Q8_0 passt',
              'Speicherbandbreite': 'bis zu 1,2 TB/s',
              'Gesch. Tempo (Q4_K_M)': '~17-21 tok/s',
              'Hinweise': 'Ab 5.499 $ mit 96 GB',
            },
            {
              'Hardware': 'Mac mini M5 Pro (64 GB)',
              'Passt 70B Q4?': 'Ja -- knapp',
              'Speicherbandbreite': '307 GB/s',
              'Gesch. Tempo (Q4_K_M)': '~4-5 tok/s',
              'Hinweise': '1.699 $ Basis hat 24 GB; 64 GB nur Build-to-Order',
            },
            { 'Hardware': 'Mac mini M6 (max. 32 GB)', 'Passt 70B Q4?': 'Nein', 'Speicherbandbreite': '170 GB/s', 'Gesch. Tempo (Q4_K_M)': 'k. A.', 'Hinweise': '32 GB max. liegt unter der ca. 43-GB-Q4-Datei' },
            {
              'Hardware': 'Mac Studio M2 Ultra (64 GB+, gebraucht)',
              'Passt 70B Q4?': 'Ja -- volle GPU',
              'Speicherbandbreite': '800 GB/s',
              'Gesch. Tempo (Q4_K_M)': '~12-15 tok/s',
              'Hinweise': 'Nur Gebrauchtmarkt; Speichergröße prüfen',
            },
            {
              'Hardware': 'NVIDIA DGX Spark (128 GB)',
              'Passt 70B Q4?': 'Ja -- Q8_0 passt',
              'Speicherbandbreite': '273 GB/s',
              'Gesch. Tempo (Q4_K_M)': '~4-5 tok/s',
              'Hinweise': '2,7 tok/s gemessen bei FP8; berichtet 6.950 $',
            },
            {
              'Hardware': 'AMD Ryzen AI Max+ 395 (128 GB)',
              'Passt 70B Q4?': 'Ja',
              'Speicherbandbreite': '256 GB/s',
              'Gesch. Tempo (Q4_K_M)': '~4-5 tok/s',
              'Hinweise': 'Mini-PCs und Laptops; GPU-Speicheranteil einstellbar',
            },
            {
              'Hardware': '2x RTX 3090 / 4090 (48 GB)',
              'Passt 70B Q4?': 'Ja -- knapp',
              'Speicherbandbreite': '936-1.008 GB/s pro Karte',
              'Gesch. Tempo (Q4_K_M)': '~12-17 tok/s',
              'Hinweise': 'Nur Q4_K_M plus kurzer Kontext',
            },
            {
              'Hardware': 'RTX 5090 (32 GB) + 64 GB RAM',
              'Passt 70B Q4?': 'Teilweises Offload',
              'Speicherbandbreite': '1.792 GB/s VRAM',
              'Gesch. Tempo (Q4_K_M)': '~4-6 tok/s',
              'Hinweise': '~70 % der Layer auf der GPU, Rest im System-RAM',
            },
            {
              'Hardware': 'RTX 4090 (24 GB) + 64 GB RAM',
              'Passt 70B Q4?': 'Teilweises Offload',
              'Speicherbandbreite': '1.008 GB/s VRAM',
              'Gesch. Tempo (Q4_K_M)': '~2-4 tok/s',
              'Hinweise': '~55 % der Layer auf der GPU, Rest im System-RAM',
            },
            {
              Hardware: 'Olares One (RTX 5090 Mobile 24 GB + 96 GB RAM)',
              'Passt 70B Q4?': 'Teilweises Offload',
              Speicherbandbreite: 'VRAM nicht angegeben / RAM ~90 GB/s',
              'Gesch. Tempo (Q4_K_M)': '~2-4 tok/s',
              Hinweise: '24 GB GDDR7-VRAM; Hardwarekosten 4.999 $',
            },
            { 'Hardware': 'Nur CPU, Dual-Channel-DDR5', 'Passt 70B Q4?': 'Ja -- nur CPU', 'Speicherbandbreite': '~90 GB/s', 'Gesch. Tempo (Q4_K_M)': '~1-2 tok/s', 'Hinweise': 'Nur für Batch-Jobs' },
            {
              'Hardware': 'Nur CPU, 8-12-Kanal-Server-RAM',
              'Passt 70B Q4?': 'Ja -- nur CPU',
              'Speicherbandbreite': '350-460 GB/s',
              'Gesch. Tempo (Q4_K_M)': '~5-8 tok/s',
              'Hinweise': 'Threadripper PRO / EPYC; 256 GB erlauben Q8_0',
            },
          ],
          columns: ['Hardware', 'Passt 70B Q4?', 'Speicherbandbreite', 'Gesch. Tempo (Q4_K_M)', 'Hinweise'],
          callouts: [
            { type: 'insight', text: '**Olares One** ([olares.com/one](https://www.olares.com/one)) ist ein kompakter KI-Desktop mit einer RTX 5090 Mobile (24 GB GDDR7-VRAM), einem Intel Core Ultra 9 275HX und 96 GB DDR5-5600-RAM (laut Olares auf 128 GB erweiterbar). Bei 70B-Modellen verhält er sich wie die RTX-4090-Zeile oben: Etwa 55 % eines Q4_K_M-Modells passen in den VRAM, der Rest wird aus dem System-RAM gelesen, daher sind etwa 2-4 Tokens/s zu erwarten (Schätzung, kein Benchmark). Die 96 GB RAM erhöhen die Kapazität, nicht das Tempo: Q8_0 (75 GB) passt mit Platz für den Kontext. Olares nennt Hardwarekosten von 4.999 $ und veröffentlicht keine Tokens/s-Werte für 70B.' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: 'Wie viel RAM oder VRAM braucht ein 70B-Modell bei jeder Quantisierungsstufe?',
          content: 'Die Größen unten sind die Llama-3.3-70B-Dateien in der Ollama-Bibliothek; andere 70B-Modelle weichen um einige Prozent ab. Es sind nur die Gewichte -- addiere den Kontextspeicher aus dem nächsten Abschnitt.',
          rows: [
            { 'Quantisierung': 'FP16 (volle Präzision)', 'Speicher (Gewichte)': '~141 GB', 'Qualität': 'Referenzqualität', 'Praktikabel?': '192 GB+ Mac Ultra oder 256-GB-RAM-Server' },
            { 'Quantisierung': 'Q8_0', 'Speicher (Gewichte)': '~75 GB', 'Qualität': 'Nahezu verlustfrei', 'Praktikabel?': '96-128 GB Unified Memory oder 128 GB RAM' },
            { 'Quantisierung': 'Q6_K', 'Speicher (Gewichte)': '~58 GB', 'Qualität': 'Sehr nah an Q8_0', 'Praktikabel?': 'Rechner mit 72-96 GB' },
            { 'Quantisierung': 'Q5_K_M', 'Speicher (Gewichte)': '~50 GB', 'Qualität': 'Minimaler Verlust', 'Praktikabel?': '64-GB-Mac nach Anheben des GPU-Limits -- knapp' },
            { 'Quantisierung': 'Q4_K_M', 'Speicher (Gewichte)': '~43 GB', 'Qualität': 'Geringer Verlust -- Standard', 'Praktikabel?': 'Ja -- 64-GB-Mac oder 48-GB-Dual-GPU' },
            { 'Quantisierung': 'Q3_K_S', 'Speicher (Gewichte)': '~31 GB', 'Qualität': 'Mäßiger Verlust', 'Praktikabel?': 'Ja -- Rechner mit 40-48 GB' },
            { 'Quantisierung': 'Q2_K', 'Speicher (Gewichte)': '~26 GB', 'Qualität': 'Hoher Verlust', 'Praktikabel?': 'Nicht empfohlen' },
          ],
          columns: ['Quantisierung', 'Speicher (Gewichte)', 'Qualität', 'Praktikabel?'],
        },
        contextMemory: {
          id: 'context-memory',
          title: 'Wie viel zusätzlichen Speicher braucht der Kontext bei einem 70B-Modell?',
          content: [
            '**Der Kontext braucht Speicher zusätzlich zu den Gewichten: Llama 3.3 70B legt bei FP16 etwa 0,33 MB KV-Cache pro Token ab, das sind grob 2,7 GB bei 8K Tokens, 10,7 GB bei 32K und 43 GB bei 128K.** Die Zahl folgt aus der Modellarchitektur: 80 Layer x 8 Key-Value-Heads x 128 Dimensionen x 2 (Keys und Values) x 2 Bytes = 327.680 Bytes pro Token.',
            'Jede gleichzeitige Sitzung hält ihren eigenen KV-Cache, während die Gewichte geteilt werden. Ein Multi-Agenten-System mit vier Agenten zu je 32K Tokens braucht etwa 43 GB für die Gewichte plus 43 GB Cache. Flash Attention und ein 8-Bit-KV-Cache in Ollama (OLLAMA_FLASH_ATTENTION=1 und OLLAMA_KV_CACHE_TYPE=q8_0) halbieren den Cache ungefähr.',
          ],
          rows: [
            { 'Kontextlänge': '8K Tokens', 'KV-Cache (FP16)': '~2,7 GB', 'Gesamt mit Q4_K_M': '~46 GB' },
            { 'Kontextlänge': '32K Tokens', 'KV-Cache (FP16)': '~10,7 GB', 'Gesamt mit Q4_K_M': '~54 GB' },
            { 'Kontextlänge': '128K Tokens', 'KV-Cache (FP16)': '~43 GB', 'Gesamt mit Q4_K_M': '~86 GB' },
          ],
          columns: ['Kontextlänge', 'KV-Cache (FP16)', 'Gesamt mit Q4_K_M'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: 'Warum bestimmt die Speicherbandbreite das Tempo eines 70B-Modells?',
          content: [
            '**Jedes erzeugte Token liest alle Modellgewichte einmal, daher ist die Decode-Geschwindigkeit durch Speicherbandbreite geteilt durch Modellgröße nach oben begrenzt.** Ein 43-GB-Modell bei Q4_K_M und 614 GB/s Bandbreite ist auf etwa 14 Tokens/s begrenzt; das reale Tempo liegt typischerweise bei 60-80 % dieser Obergrenze.',
            'Dieselbe Regel erklärt, warum viel Speicher nicht dasselbe ist wie schneller Speicher: Der DGX Spark mit 128 GB hat 273 GB/s, eine Obergrenze von etwa 6 Tokens/s bei Q4_K_M, und LMSYS maß 2,7 Tokens/s für Llama 3.1 70B bei FP8 (etwa 70 GB, Obergrenze 3,9). Die Kapazität entscheidet, ob ein Modell läuft; die Bandbreite entscheidet, wie schnell. Die Prompt-Verarbeitung (Prefill) ist rechenbegrenzt und verhält sich anders.',
          ],
          rows: [
            { 'Speicher': 'Dual-Channel-DDR5-5600', 'Bandbreite': '~90 GB/s', 'Obergrenze bei 43 GB': '~2 tok/s' },
            { 'Speicher': 'AMD Ryzen AI Max+ 395', 'Bandbreite': '256 GB/s', 'Obergrenze bei 43 GB': '~6 tok/s' },
            { 'Speicher': 'NVIDIA DGX Spark', 'Bandbreite': '273 GB/s', 'Obergrenze bei 43 GB': '~6 tok/s' },
            { 'Speicher': 'Apple M5 Pro', 'Bandbreite': '307 GB/s', 'Obergrenze bei 43 GB': '~7 tok/s' },
            { 'Speicher': 'Apple M5 Max', 'Bandbreite': 'bis zu 614 GB/s', 'Obergrenze bei 43 GB': '~14 tok/s' },
            { 'Speicher': 'Apple M2 Ultra', 'Bandbreite': '800 GB/s', 'Obergrenze bei 43 GB': '~19 tok/s' },
            { 'Speicher': 'Apple M5 Ultra', 'Bandbreite': 'bis zu 1,2 TB/s', 'Obergrenze bei 43 GB': '~28 tok/s' },
          ],
          columns: ['Speicher', 'Bandbreite', 'Obergrenze bei 43 GB'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: 'Ist Apple Silicon eine gute Wahl für 70B-Modelle?',
          content: [
            '**Apple Silicon ist der einfachste Weg, ein 70B-Modell vollständig im GPU-zugänglichen Speicher zu halten, weil CPU und GPU einen gemeinsamen Unified-Memory-Pool nutzen.** Ein Mac mit 64 GB oder mehr führt Q4_K_M ohne Layer Offloading aus, mit einem Tempo, das von der Chip-Bandbreite bestimmt wird: grob 9-11 Tokens/s auf einem M5 Max und 12-15 auf einem gebrauchten M2 Ultra (Schätzwerte). Veröffentlichte 70B-Benchmarks für die M5-Chips haben wir bisher nicht gefunden.',
            'Apple hat den Mac Studio mit M5 Max und M5 Ultra am 25. August 2026 angekündigt; beide wurden am 22. September 2026 ausgeliefert. Der M5 Max startet bei 2.499 $ mit 36 GB und reicht bis 128 GB bei bis zu 614 GB/s -- konfiguriere für 70B mindestens 64 GB. Der M5 Ultra startet bei 5.499 $ mit 96 GB, reicht bis 512 GB bei bis zu 1,2 TB/s und führt Q8_0 komfortabel aus; die Konfiguration mit 512 GB wurde als lieferbar ab Ende Oktober gelistet.',
            '**Der Mac mini M5 Pro startet bei 1.699 $ mit 24 GB, nicht mit 64 GB.** Die Build-to-Order-Konfiguration mit 64 GB (307 GB/s, Thunderbolt 5) fasst ein 70B-Modell bei Q4_K_M, erzeugt aber nur etwa 4-5 Tokens/s, und Tests nennen je nach CPU und Speicherplatz etwa 2.700-3.200 $. Der Basis-Mac mini M6 (899 $) reicht nur bis 32 GB und 170 GB/s und kann ein 70B-Modell bei keiner Quantisierung ausführen.',
            'macOS begrenzt den GPU-adressierbaren Speicher standardmäßig auf etwa 75 % des RAM (rund 48 GB bei einem 64-GB-Mac). Um Q5_K_M (50 GB) auszuführen, hebe das Limit an, zum Beispiel mit sudo sysctl iogpu.wired_limit_mb=57344 auf einem 64-GB-Mac; die Einstellung geht beim Neustart verloren und lässt dem Betriebssystem nur etwa 8 GB.',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: 'Taugt der NVIDIA DGX Spark (oder ein 128-GB-Strix-Halo-PC) für 70B-Modelle?',
          content: [
            '**Der NVIDIA DGX Spark ist ein kompakter Desktop-KI-Computer mit 128 GB Unified LPDDR5x-Speicher bei 273 GB/s, basierend auf dem GB10 Grace Blackwell Superchip mit CUDA-Unterstützung.** Er lädt ein 70B-Modell sogar bei Q8_0 (75 GB), doch die Bandbreite begrenzt die Generierung: LMSYS maß 2,7 Tokens/s Decode für Llama 3.1 70B bei FP8, und Community-Läufe mit llama.cpp bei Q4_K_M werden im Bereich von 4-5 Tokens/s berichtet.',
            'Die Preise haben sich stark bewegt. NVIDIA hob die Founders Edition im Februar 2026 wegen Engpässen bei der Speicherversorgung von 3.999 $ auf 4.699 $ an, und im Oktober 2026 wurde ein Preis von 6.950 $ berichtet, zusammen mit einer 64-GB-Version für 4.999 $, die Partner ab dem 23. Oktober 2026 verkaufen. Prüfe vor dem Kauf die aktuellen Preise.',
            'Die Mini-PCs und Laptops mit AMD Ryzen AI Max+ 395 („Strix Halo“) bieten 128 GB LPDDR5X bei 256 GB/s, also dieselbe Bandbreitenklasse, und eine ähnliche Schätzung von etwa 4-5 Tokens/s für ein dichtes 70B-Modell. Beide Plattformen passen besser zu Mixture-of-Experts-Modellen (siehe unten) sowie zu CUDA- oder Fine-Tuning-Arbeit als zu Chat mit einem dichten 70B-Modell.',
          ],
          rows: [
            { 'Merkmal': 'Speicher', 'Wert': '128 GB Unified LPDDR5x' },
            { 'Merkmal': 'Speicherbandbreite', 'Wert': '273 GB/s' },
            { 'Merkmal': '70B bei Q8_0 (75 GB)', 'Wert': 'Passt' },
            { 'Merkmal': '70B Decode, gemessen', 'Wert': '2,7 tok/s bei FP8 (LMSYS, SGLang)' },
            { 'Merkmal': 'Max. Modellgröße', 'Wert': '~200B Parameter bei FP4' },
            { 'Merkmal': 'Preis', 'Wert': '6.950 $ berichtet; 4.699 $ Liste (Feb. 2026)' },
            { 'Merkmal': 'Ollama-Befehl', 'Wert': 'ollama run llama3.3:70b' },
          ],
          columns: ['Merkmal', 'Wert'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: 'Wie funktioniert NVIDIA GPU + Layer Offloading bei 70B-Modellen?',
          content: [
            '**Ollama und llama.cpp teilen ein Modell auf GPU-VRAM und System-RAM auf: Layer im VRAM laufen mit GPU-Tempo, Layer im RAM mit der Speichergeschwindigkeit der CPU, und der langsame Teil dominiert.** Bei einer RTX 4090 (24 GB) passen etwa 55 % eines 70B-Modells bei Q4_K_M auf die GPU, der Rest wird mit rund 90 GB/s aus dem DDR5 gestreamt, was die Generierung auf etwa 2-4 Tokens/s begrenzt. Eine RTX 5090 (32 GB) fasst etwa 70 % und erreicht geschätzt 4-6 Tokens/s.',
            'Ollama lagert automatisch aus; ein Flag ist nicht nötig. Führe ollama ps aus, um die Aufteilung zu sehen (Spalte PROCESSOR, zum Beispiel 45%/55% CPU/GPU). In llama.cpp legst du die Layer-Anzahl mit -ngl fest.',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: 'Welche Inferenz-Runtime ist die beste für ein 70B-Modell auf mehreren GPUs?',
          content: [
            '**Für einen Nutzer ist Ollama oder llama.cpp mit Layer-Aufteilung der einfachste Multi-GPU-Weg; für mehrere gleichzeitige Nutzer oder Agenten liefern vLLM oder SGLang mit Tensor Parallelism weit mehr Gesamtdurchsatz.** Zwei 24-GB-Karten (RTX 3090 oder 4090) ergeben 48 GB, genug für Q4_K_M plus kurzen Kontext.',
            'Die Layer-Aufteilung reicht die Aktivierungen einmal pro Token zwischen den Karten weiter und funktioniert über normales PCIe, eignet sich also für gemischte oder Consumer-Karten. Tensor Parallelism teilt jeden Layer auf die GPUs auf und profitiert von schnellen Verbindungen: Die RTX 3090 unterstützt eine NVLink-Brücke, die RTX 4090 und 5090 nicht.',
          ],
          rows: [
            { 'Runtime': 'Ollama', 'Multi-GPU-Methode': 'Automatische Layer-Aufteilung', 'Am besten für': 'Ein Nutzer, einfachster Einstieg' },
            { 'Runtime': 'llama.cpp', 'Multi-GPU-Methode': '--split-mode, --tensor-split', 'Am besten für': 'Gemischte GPUs, GGUF-Quants' },
            { 'Runtime': 'vLLM', 'Multi-GPU-Methode': '--tensor-parallel-size N', 'Am besten für': 'Viele Nutzer oder Agenten; AWQ/GPTQ/FP8' },
            { 'Runtime': 'SGLang', 'Multi-GPU-Methode': 'Tensor Parallelism', 'Am besten für': 'Agenten mit gemeinsamen Prompt-Präfixen' },
            { 'Runtime': 'TensorRT-LLM', 'Multi-GPU-Methode': 'Tensor-/Pipeline-Parallelität', 'Am besten für': 'Max. NVIDIA-Durchsatz; Engine-Build' },
          ],
          columns: ['Runtime', 'Multi-GPU-Methode', 'Am besten für'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: 'Ist reine CPU-Inferenz mit 70B praktikabel, und hilft 256 GB RAM?',
          content: [
            '**Reine CPU-Inferenz mit 70B ist durch die Speicherbandbreite begrenzt: Dual-Channel-Desktop-DDR5 (etwa 90 GB/s) liefert bei Q4_K_M grob 1-2 Tokens/s, und mehr RAM-Kapazität macht es nicht schneller.** Bei 1,5 Tokens/s braucht eine Antwort mit 200 Wörtern (etwa 270 Tokens) rund drei Minuten.',
            '256 GB RAM ändern, was hineinpasst, nicht wie schnell es läuft: Sie fassen Q8_0 (75 GB) oder FP16 (141 GB) mit langem Kontext. Das Tempo hängt von den Speicherkanälen ab -- ein Threadripper PRO mit 8 Kanälen oder ein EPYC-Server mit 12 Kanälen hat die drei- bis fünffache Bandbreite eines Desktops. Desktop-Mainboards mit vier großen DIMMs betreiben ihren Speicher oft langsamer als mit zwei. Auch die Prompt-Verarbeitung auf der CPU ist bei langen Eingaben langsam.',
            'Die Schätzwerte unten wenden die Bandbreitenregel bei 70 % Effizienz an; es sind keine gemessenen Benchmarks.',
          ],
          rows: [
            { 'CPU-/RAM-Setup': 'Desktop, 2-Kanal DDR5-5600', 'Bandbreite': '~90 GB/s', 'Q4_K_M (43 GB)': '~1-1,5 tok/s', 'Q8_0 (75 GB)': '~0,6-0,9 tok/s', 'FP16 (141 GB)': '~0,3-0,5 tok/s' },
            { 'CPU-/RAM-Setup': 'Threadripper PRO, 8-Kanal DDR5-5600', 'Bandbreite': '~358 GB/s', 'Q4_K_M (43 GB)': '~5-6 tok/s', 'Q8_0 (75 GB)': '~3-3,5 tok/s', 'FP16 (141 GB)': '~1,5-1,8 tok/s' },
            { 'CPU-/RAM-Setup': 'EPYC, 12-Kanal DDR5-4800', 'Bandbreite': '~461 GB/s', 'Q4_K_M (43 GB)': '~7-8 tok/s', 'Q8_0 (75 GB)': '~4-4,5 tok/s', 'FP16 (141 GB)': '~2-2,5 tok/s' },
          ],
          columns: ['CPU-/RAM-Setup', 'Bandbreite', 'Q4_K_M (43 GB)', 'Q8_0 (75 GB)', 'FP16 (141 GB)'],
        },
        moe: {
          id: 'moe-models',
          title: 'Ändern MoE-Modelle der 70B-Klasse die Hardware-Rechnung?',
          content: [
            '**Mixture-of-Experts-Modelle (MoE) brauchen Speicher für alle ihre Parameter, lesen pro Token aber nur die aktiven Experten, daher erzeugen sie Text deutlich schneller als ein dichtes 70B-Modell mit demselben Speicherbedarf.** OpenAI gpt-oss-120b hat etwa 117 Milliarden Parameter, davon etwa 5,1 Milliarden aktiv; Meta Llama 4 Scout hat 109 Milliarden mit 17 Milliarden aktiven.',
            'Die Bandbreitenregel gilt für die aktiven Gewichte, daher nutzen MoE-Modelle Rechner mit hoher Kapazität und mäßiger Bandbreite am besten aus, etwa den DGX Spark, Ryzen-AI-Max+-395-PCs und einen Mac mini M5 Pro mit 64 GB. Für ein dichtes 70B-Modell auf dieser Hardware rechne mit 4-5 Tokens/s; prüfe die Dateigröße jedes MoE-Modells gegen deinen Speicher, bevor du es herunterlädst.',
          ],
        },
        which70b: {
          id: 'which-model',
          title: 'Welches 70B-Modell solltest du lokal ausführen?',
          content: [
            '**Llama 3.3 70B ist das Standardmodell unter den dichten 70B-Modellen: Meta gibt 86,0 bei MMLU (CoT) und 88,4 bei HumanEval an, bei einem Kontextfenster von 128K.** Qwen2.5 72B ist die wichtigste Alternative für mehrsprachige Anwendungen und Coding. Ein Qwen3 72B existiert nicht -- die dichten Qwen3-Modelle enden bei 32B --, ein Verweis auf „Qwen3 72B“ meint also Qwen2.5 72B.',
            'Befehle: ollama run llama3.3:70b, ollama run qwen2.5:72b, ollama run deepseek-r1:70b.',
          ],
          rows: [
            { 'Modell': 'Llama 3.3 70B', 'Parameter': '70,6B dicht', 'Lizenz': 'Llama 3.3 Community License', 'Am besten für': 'Allgemein Englisch, Anweisungsbefolgung' },
            { 'Modell': 'Qwen2.5 72B Instruct', 'Parameter': '72,7B dicht', 'Lizenz': 'Qwen License', 'Am besten für': 'Mehrsprachig, Coding; 131K mit YaRN' },
            { 'Modell': 'DeepSeek-R1-Distill-Llama-70B', 'Parameter': '70B dicht', 'Lizenz': 'Siehe Model Card', 'Am besten für': 'Reasoning; lange Ausgaben bremsen' },
            { 'Modell': 'Mistral Large 2', 'Parameter': '123B dicht', 'Lizenz': 'Mistral Research License', 'Am besten für': 'Nur Forschung; ~75 GB bei Q4' },
          ],
          columns: ['Modell', 'Parameter', 'Lizenz', 'Am besten für'],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: 'Welche Hardware brauchst du, um ein 70B-Modell feinzuabstimmen?',
          content: [
            '**QLoRA-Fine-Tuning eines 70B-Modells braucht grob 35-48 GB GPU-Speicher pro Lauf: zwei 24-GB-GPUs mit FSDP+QLoRA oder eine einzelne GPU mit 48-80 GB.** QLoRA hält das Basismodell in 4 Bit (etwa 35 GB) und trainiert kleine Adapter; Answer.AI hat das auf zwei 24-GB-Gaming-GPUs demonstriert.',
            'Vollständiges 16-Bit-Fine-Tuning braucht für Gewichte, Gradienten und Optimizer-Zustände etwa 16 Bytes pro Parameter -- in der Größenordnung von 1 TB --, das ist eine Aufgabe für einen Multi-GPU-Server. Eine Cloud-GPU mit 80 GB zu mieten ist für gelegentliche Läufe meist praktischer, als Hardware aufzubauen.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '70B-Modelle lokal ausführen: Regionaler Kontext',
          content: [
            '**EU / DSGVO**: Ein lokales 70B-Modell ist für die meisten Organisationen die praktische Obergrenze der privat betreibbaren KI-Qualität. Wer juristische, medizinische oder finanzielle Dokumente vor Ort verarbeitet, hält Prompts und Ausgaben in der eigenen Infrastruktur, was Datenminimierung und Maßnahmen gegen Übermittlungsrisiken unterstützt; es macht einen Einsatz für sich genommen nicht DSGVO-konform, bewerte also die gesamte Verarbeitungstätigkeit.',
            'Für Organisationen, die Hardware aus EU-Lieferketten verlangen: Apple (USA) und NVIDIA (USA) sind Anbieter außerhalb der EU; Dell, HP und Lenovo verkaufen Systeme auf GB10-Basis mit lokalem Support. Auf der Modellseite stammt Mistral Large 2 von einem EU-Entwickler, wird aber unter einer Forschungslizenz veröffentlicht, die die kommerzielle Nutzung nicht abdeckt.',
            '**Japan**: Qwen2.5 72B ist eine verbreitete Wahl für japanische Texte: `ollama run qwen2.5:72b`. Die Dokumentation von Hardware und Modellversionen (die Ausgabe von `ollama ps` zeigt das geladene Modell) unterstützt die interne Governance nach den japanischen KI-Leitlinien für Unternehmen.',
            '**China**: Ein lokal betriebenes Qwen2.5 72B hält die Daten in der eigenen Infrastruktur, was für das chinesische Datensicherheitsgesetz (数据安全法) relevant ist. Ob ein intern bereitgestelltes Modell unter die CAC-Regeln für generative KI fällt, hängt davon ab, ob es der Öffentlichkeit angeboten wird; kläre das mit qualifizierter Rechtsberatung.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Welche häufigen Fehler passieren beim Ausführen von 70B-Modellen auf Consumer-Hardware?',
          faqs: [
            {
              q: 'Eine GPU mit weniger als 24 GB VRAM kaufen und volle 70B-Leistung erwarten',
              a: 'Eine 12-GB-Karte fasst etwa ein Viertel eines 70B-Modells bei Q4_K_M; der Rest läuft aus dem System-RAM, das Tempo liegt also nah an reiner CPU-Inferenz. Selbst eine RTX 4090 mit 24 GB schafft nur etwa 2-4 tok/s. Für interaktives Tempo nimm 48 GB VRAM, einen Apple-Silicon-Mac mit 64 GB+ oder ein kleineres 27B-34B-Modell.',
            },
            {
              q: 'Annehmen, ein Rechner mit viel Speicher sei auch schnell',
              a: 'Der DGX Spark und Systeme mit Ryzen AI Max+ 395 haben 128 GB, aber nur 256-273 GB/s Bandbreite, ein dichtes 70B-Modell läuft daher mit etwa 3-5 tok/s. Ein Mac Studio M5 Max mit 64 GB hat mehr als die doppelte Bandbreite. Prüfe die Bandbreite, nicht nur die Kapazität.',
            },
            {
              q: 'Nicht prüfen, wie viel des Modells auf der GPU läuft',
              a: 'Ollama lagert automatisch aus, aber ein knapper Fit kann Layer auf der CPU lassen. Führe nach dem Laden `ollama ps` aus und lies die Spalte PROCESSOR; Ziel ist „100% GPU“, und ein CPU-Anteil erklärt langsame Ausgabe. Verkürze den Kontext oder wechsle zu Q3_K_S, wenn die Aufteilung schlecht ist.',
            },
            {
              q: 'Vergessen, dass auch der Kontext Speicher braucht',
              a: 'Ein 70B-Modell bei Q4_K_M belegt 43 GB, aber ein Kontext von 32K fügt bei FP16 etwa 10,7 GB hinzu und 128K etwa 43 GB. Ein Rechner, auf den die Gewichte passen, kann bei langem Kontext trotzdem der Speicher ausgehen. Nutze einen 8-Bit-KV-Cache oder einen kürzeren Kontext.',
            },
            {
              q: 'Q5_K_M oder Q8_0 ausführen, obwohl das Tempo zählt',
              a: 'Jedes Token liest das ganze Modell, daher läuft Q8_0 (75 GB) auf derselben Hardware mit etwa der halben Geschwindigkeit von Q4_K_M (43 GB). Auf bandbreitenbegrenzten Rechnern (DGX Spark, Strix Halo, Mac mini) wähle Q4_K_M für Chat und nimm Q8_0 nur, wenn Qualität Vorrang hat.',
            },
            {
              q: 'Den Mac mini M5 Pro für 1.699 $ bestellen und erwarten, dass 70B läuft',
              a: 'Der Mac mini M5 Pro für 1.699 $ hat 24 GB Unified Memory. Ein 70B-Modell braucht die Build-to-Order-Konfiguration mit 64 GB, und der Basis-Mac mini M6 (899 $, maximal 32 GB) kann es gar nicht ausführen. Prüfe vor der Bestellung „M5 Pro“ und 64 GB.',
            },
            {
              q: 'Am Standard-GPU-Speicherlimit von macOS scheitern',
              a: 'Standardmäßig lässt macOS die GPU etwa 75 % des RAM nutzen, rund 48 GB bei einem 64-GB-Mac. Q4_K_M passt; Q5_K_M (50 GB) nicht, bis du `iogpu.wired_limit_mb` anhebst.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Artikel',
          items: [
            '[Hardware-Leitfaden für lokale LLMs](/de/local-llms/local-llm-hardware-guide) -- vollständige GPU- und RAM-Stufentabelle für jede Modellgröße einschließlich 70B-Hardware-Anforderungen',
            '[70B-Modelle mit 24 GB VRAM ausführen](/de/local-llms/run-70b-models-24gb-vram) -- Quantisierungs- und Offloading-Optionen, wenn du nur eine GPU hast',
            '[70B-Modelle auf Apple Silicon M5 Max ausführen](/de/local-llms/running-70b-models-apple-silicon-m5-max) -- Mac-spezifisches Setup mit Ollama und MLX',
            '[RTX 5090 vs. RTX 4090 für lokale LLMs](/de/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- wie 32 GB gegenüber 24 GB VRAM das Offloading verändern',
            '[Mac mini M5 als lokaler KI-Server](/de/local-llms/mac-mini-m5-local-ai-server) -- was die Mac-mini-Reihe kann und was nicht',
            '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) -- Q4_K_M vs. Q8_0 verstehen und die Tempo-Kosten höherer Präzision',
            '[Ollama installieren](/de/local-llms/how-to-install-ollama) -- vollständiges Setup einschließlich GPU-Layer-Konfiguration',
            '[Qwen vs. Llama vs. Mistral](/de/local-llms/qwen-vs-llama-vs-mistral) -- detaillierter Vergleich der wichtigsten offenen Modellfamilien',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufige Fragen zum Ausführen von 70B-Modellen auf Consumer-Hardware',
          faqs: [
            {
              q: 'Welche Hardware brauche ich, um ein 70B-LLM lokal auszuführen?',
              a: 'Du brauchst für Llama 3.3 70B bei Q4_K_M etwa 43 GB schnellen Speicher, dazu 3-10 GB für den Kontext. Drei Setups halten das ganze Modell im schnellen Speicher: ein Apple-Silicon-Mac mit 64 GB oder mehr Unified Memory, zwei NVIDIA-GPUs mit je 24 GB (48 GB VRAM insgesamt) oder ein Rechner mit 128 GB Unified Memory wie der NVIDIA DGX Spark oder ein Mini-PC mit AMD Ryzen AI Max+ 395. Die Kapazität entscheidet, ob das Modell läuft; die Speicherbandbreite entscheidet, wie schnell. Eine einzelne 24-GB-GPU oder ein reiner CPU-PC kann es ausführen, aber nur mit etwa 1-4 Tokens/s.',
            },
            {
              q: 'Was ist ein 70B-Modell?',
              a: 'Ein 70B-Modell ist ein großes Sprachmodell mit etwa 70 Milliarden Parametern (Gewichten). Llama 3.3 70B hat 70,6 Milliarden und Qwen2.5 72B hat 72,7 Milliarden. Die Dateigröße folgt aus der Parameterzahl: etwa 141 GB bei 16 Bit, 75 GB bei 8 Bit (Q8_0) und 43 GB bei 4 Bit (Q4_K_M).',
            },
            {
              q: 'Wie viel VRAM oder RAM brauche ich für ein 70B-Modell?',
              a: 'Llama 3.3 70B braucht 43 GB bei Q4_K_M, 50 GB bei Q5_K_M, 75 GB bei Q8_0 und 141 GB bei FP16 (Größen aus der Ollama-Bibliothek), dazu den KV-Cache für den Kontext: etwa 2,7 GB bei 8K Tokens, 10,7 GB bei 32K und 43 GB bei 128K. Mit 24 GB VRAM passt nur etwa die Hälfte eines Q4_K_M-Modells auf die GPU, der Rest läuft aus dem System-RAM.',
            },
            {
              q: 'Was ist die günstigste Hardware, auf der ein 70B-Modell brauchbar läuft?',
              a: 'Für etwa 10 Tokens/s oder mehr sind die praktischen Optionen ein Mac Studio M5 Max mit 64 GB oder mehr (das Basismodell für 2.499 $ hat 36 GB), ein gebrauchter Mac Studio M2 Ultra mit 64 GB oder mehr oder zwei gebrauchte 24-GB-GPUs. Die günstigste neue Apple-Option ist der Mac mini M5 Pro mit 64 GB: Das Basismodell für 1.699 $ hat nur 24 GB, und Tests nennen für Konfigurationen mit 64 GB etwa 2.700-3.200 $. Seine Bandbreite von 307 GB/s begrenzt ihn auf grob 4-5 Tokens/s. Die Straßenpreise für GPUs schwanken stark: RTX-5090-Angebote lagen im Oktober 2026 berichtetermaßen weit über dem Einführungspreis von 1.999 $, prüfe also die aktuellen Preise.',
            },
            {
              q: 'Kann ich ein 70B-Modell auf einer einzelnen 24-GB-GPU ausführen?',
              a: 'Ja, aber langsam. Eine 24-GB-Karte wie die RTX 4090 fasst etwa 55 % eines 70B-Modells bei Q4_K_M; die übrigen Layer laufen aus dem System-RAM mit der Speichergeschwindigkeit der CPU, was mit schnellem DDR5 grob 2-4 Tokens/s ergibt. Für interaktives Tempo nutze ein kleineres Modell (27B-34B passt in 24 GB, z. B. Qwen3.8-27B), zwei GPUs oder einen Rechner mit 64 GB+ Unified Memory.',
            },
            {
              q: 'Kann ich ein 70B-Modell auf zwei GPUs ausführen?',
              a: 'Ja. Zwei 24-GB-Karten (RTX 3090 oder 4090) liefern 48 GB VRAM, die ein 70B-Modell bei Q4_K_M (43 GB) mit einem kurzen Kontext von einigen tausend Tokens fassen. Ollama und llama.cpp verteilen die Layer automatisch oder mit --tensor-split auf beide Karten. Rechne als Schätzung mit grob 12-17 Tokens/s, weil jedes Token nacheinander beide Karten durchläuft.',
            },
            {
              q: 'Welche Inferenz-Runtime ist die beste für 70B-LLMs auf Multi-GPU-Hardware?',
              a: 'Für einen Nutzer ist Ollama oder llama.cpp mit Layer-Aufteilung am einfachsten und funktioniert mit gemischten GPUs. Für mehrere gleichzeitige Nutzer oder Agenten liefert vLLM mit --tensor-parallel-size gleich der GPU-Anzahl oder SGLang viel höheren Gesamtdurchsatz, weil Anfragen gebündelt werden; beide bevorzugen identische GPUs und AWQ-, GPTQ- oder FP8-Gewichte. TensorRT-LLM liefert den höchsten NVIDIA-Durchsatz, braucht aber einen Engine-Build-Schritt.',
            },
            {
              q: 'Wie viel GPU-Speicher braucht ein Multi-Agenten-System mit 70B-Backends?',
              a: 'Plane die Gewichte einmal ein, dazu einen KV-Cache pro gleichzeitiger Sitzung. Llama 3.3 70B bei Q4_K_M braucht etwa 43 GB für die Gewichte; jede aktive Sitzung fügt bei FP16 etwa 0,33 MB pro Token Kontext hinzu. Vier Agenten zu je 32K Tokens brauchen daher etwa 43 GB + 43 GB = 86 GB. Bediene alle Agenten über einen gemeinsamen Server (vLLM, SGLang oder llama.cpp mit parallelen Slots), statt pro Agent eine Kopie des Modells zu laden.',
            },
            {
              q: 'Hilft 256 GB RAM bei der CPU-Inferenz eines 70B-Modells?',
              a: 'Es hilft bei der Kapazität, nicht beim Tempo. Mit 256 GB lassen sich Q8_0 (75 GB) oder FP16 (141 GB) mit langem Kontext laden, aber die Decode-Geschwindigkeit wird durch die Speicherkanäle begrenzt: grob 0,5-1,5 Tokens/s auf einem Dual-Channel-Desktop, etwa 3-6 auf einem Threadripper PRO mit 8 Kanälen und etwa 4-8 auf einem EPYC mit 12 Kanälen, jeweils von Q4_K_M bis Q8_0 (Schätzwerte aus der Speicherbandbreite, keine von uns durchgeführten Benchmarks).',
            },
            {
              q: 'Kann der Mac mini M6 ein 70B-Modell ausführen?',
              a: 'Nein. Der Mac mini M6 (ab 899 $) reicht nur bis 32 GB Unified Memory und 170 GB/s Bandbreite, unter den 43 GB, die ein 70B-Modell bei Q4_K_M braucht. Der Mac mini M5 Pro (ab 1.699 $, 307 GB/s, Thunderbolt 5) lässt sich mit bis zu 64 GB konfigurieren; das Basismodell für 1.699 $ hat 24 GB, bestelle also die Build-to-Order-Konfiguration mit 64 GB. Beide wurden am 22. September 2026 ausgeliefert.',
            },
            {
              q: 'Was ist der NVIDIA DGX Spark, und lohnt er sich für 70B-Inferenz?',
              a: 'Der DGX Spark ist NVIDIAs kompakter Desktop-KI-Computer mit 128 GB Unified LPDDR5x-Speicher bei 273 GB/s. Er lädt 70B-Modelle bei Q8_0, ist aber bandbreitenbegrenzt: LMSYS maß 2,7 Tokens/s Decode für Llama 3.1 70B bei FP8. Er eignet sich besser für CUDA-Arbeit, Fine-Tuning und große MoE-Modelle als für schnellen Chat mit einem dichten 70B-Modell. NVIDIA hob die Founders Edition im Februar 2026 von 3.999 $ auf 4.699 $ an, und im Oktober 2026 wurde ein Preis von 6.950 $ berichtet, daneben eine 64-GB-Version für 4.999 $ von Partnern.',
            },
            {
              q: 'Wie schneidet die lokale 70B-Qualität im Vergleich zu Cloud-Modellen ab?',
              a: 'Meta gibt für Llama 3.3 70B Instruct 86,0 bei MMLU (CoT) und 88,4 bei HumanEval an. Seitdem veröffentlichte Cloud-Spitzenmodelle erzielen bei Aufgaben mit viel Reasoning höhere Werte, während lokale 70B-Modelle bei Zusammenfassung, Extraktion, Entwürfen und routinemäßiger Code-Generierung konkurrenzfähig bleiben. Teste beide mit deinen eigenen Prompts, zum Beispiel mit [PromptQuorum](/de), bevor du in 70B-Hardware investierst.',
            },
            {
              q: 'Wie viel Strom verbraucht das Ausführen eines 70B-Modells?',
              a: 'Eine GPU zieht beim Generieren bis zu ihrer Board-Leistung: 350 W bei einer RTX 3090, 450 W bei einer RTX 4090 und 575 W bei einer RTX 5090. Bei 0,15 $ pro kWh kostet eine RTX 4090 unter Volllast allein für die GPU etwa 0,07 $ pro Stunde. Apple Silicon und Unified-Memory-Rechner ziehen für dasselbe Modell deutlich weniger Strom, aber bei geringerem Tempo.',
            },
            {
              q: 'Lohnen sich 70B-Modelle gegenüber kleineren Modellen für alltägliche Aufgaben?',
              a: 'Für komplexes Reasoning, die Analyse langer Dokumente und nuanciertes Schreiben in der Regel ja. Für einfache Zusammenfassungen, Fragen und Antworten und Klassifikation liefert ein 7B-14B-Modell oft ähnliche Ergebnisse bei einem Bruchteil der Hardware-Kosten. Teste beide mit deinen eigenen Prompts, bevor du in 70B-Hardware investierst.',
            },
            {
              q: 'Kann ich ein 70B-Modell auf Consumer-Hardware feinabstimmen?',
              a: 'Nur mit QLoRA. QLoRA hält das Basismodell in 4 Bit (etwa 35 GB) und trainiert kleine Adapter; Answer.AI zeigte, wie FSDP+QLoRA ein 70B-Modell auf zwei 24-GB-Gaming-GPUs trainiert. Vollständiges 16-Bit-Fine-Tuning braucht in der Größenordnung von 1 TB Speicher und ist eine Aufgabe für einen Multi-GPU-Server. Für alles über gelegentliche QLoRA-Läufe hinaus ist das Mieten einer Cloud-GPU mit 80 GB meist praktischer.',
            },
            {
              q: 'Welche Quantisierung ist die beste für 70B auf Apple Silicon?',
              a: 'Auf einem 64-GB-Mac nutze Q4_K_M (43 GB). macOS begrenzt den GPU-adressierbaren Speicher standardmäßig auf etwa 75 % des RAM (rund 48 GB bei einem 64-GB-Mac), daher funktioniert Q5_K_M (50 GB) erst, nachdem du das Limit mit sysctl iogpu.wired_limit_mb angehoben hast, und lässt wenig Spielraum. Mit 96-128 GB ist Q8_0 (75 GB) die nahezu verlustfreie Wahl, mit grob der halben Geschwindigkeit von Q4_K_M, weil jedes Token doppelt so viele Bytes liest.',
            },
            {
              q: 'Wählt Ollama automatisch die beste Quantisierung?',
              a: 'Nein. ollama run llama3.3:70b lädt das Standardmodell Q4_K_M (43 GB) herunter. Nenne für eine andere Stufe den Tag, zum Beispiel ollama run llama3.3:70b-instruct-q5_K_M oder ollama run llama3.3:70b-instruct-q8_0. Führe nach dem Laden ollama ps aus: Die Spalte PROCESSOR zeigt, wie viel des Modells auf GPU und wie viel auf CPU läuft.',
            },
            {
              q: 'Kann ein iPhone oder Laptop ein 70B-Modell ausführen?',
              a: 'Ein iPhone nicht: Aktuelle iPhones haben 8-12 GB RAM, ein 70B-Modell bei Q4_K_M braucht aber etwa 43 GB, daher führen Smartphones 1B-8B-Modelle aus. Laptops nur mit 64 GB+ Unified Memory (High-End-Konfigurationen des MacBook Pro) oder einem System mit AMD Ryzen AI Max+ 395 und 128 GB. Gaming-Laptops mit 16-24 GB VRAM, etwa ein ASUS ROG Strix, fallen in den langsamen Fall des teilweisen Offloadings.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[Ollama: Llama 3.3 Tags und Größen](https://ollama.com/library/llama3.3/tags) -- Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB',
            '[Meta Llama 3.3 70B Instruct Model Card](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU (CoT) 86,0, HumanEval 88,4, 128K Kontext, Lizenz',
            '[Qwen2.5 72B Instruct Model Card](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 72,7B Parameter, 131K Kontext mit YaRN',
            '[Mistral Large Instruct 2407 Model Card](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 123B Parameter, Mistral Research License',
            '[LMSYS: NVIDIA DGX Spark im ausführlichen Test](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B FP8 mit 2,7 tok/s Decode, 273 GB/s',
            '[Apple Newsroom: Mac mini mit M6 und M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- Preise, Speicher, Bandbreite',
            '[9to5Mac: Mac Studio mit M5 Max und M5 Ultra](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- Preise, Basis- und Maximalspeicher, Bandbreite',
            '[NVIDIA-Entwicklerforum: Preisänderung beim DGX Spark](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- 3.999 $ auf 4.699 $',
            '[TechnoEdge: Preiserhöhung beim DGX Spark und 64-GB-Modell](https://www.techno-edge.net/article/2026/10/08/5565.html) -- berichtete Preise von 6.950 $ und 4.999 $',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- Konfiguration mit 64 GB / 1 TB zu 3.199 $ gelistet',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- Preise für die Speicher-Upgrades auf 48 GB und 64 GB',
            '[Answer.AI: ein 70B-Modell zu Hause trainieren](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- FSDP + QLoRA auf zwei 24-GB-GPUs',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) -- Dokumentation zu GPU-Offloading und Multi-GPU-Aufteilung',
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile mit 24 GB GDDR7, 96 GB DDR5, Hardwarekosten 4.999 $',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '70B-LLM lokal ausführen 2026: RAM, VRAM & Tempo je Hardware',
        description: 'Ein 70B-Modell braucht ca. 43 GB bei Q4_K_M plus Kontext. RAM, VRAM und geschätzte tok/s auf Mac, DGX Spark, RTX-GPUs und CPU-PCs, auch mit 256 GB RAM.',
        url: 'https://www.promptquorum.com/de/local-llms/70b-models-consumer-hardware',
        inLanguage: 'de',
        datePublished: '2026-04-04',
        dateModified: '2026-10-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '70B-Sprachmodell' },
          { '@type': 'Thing', name: 'Apple-Silicon-Inferenz' },
          { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
          { '@type': 'Thing', name: 'Layer Offloading' },
          { '@type': 'Thing', name: 'Llama 3.3 70B' },
          { '@type': 'Thing', name: 'Qwen2.5 72B' },
          { '@type': 'Thing', name: 'NVIDIA DGX Spark' },
          { '@type': 'Thing', name: 'Apple Mac mini M5 Pro' },
          { '@type': 'Thing', name: 'Speicherbandbreite' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'llama.cpp' },
          { '@type': 'SoftwareApplication', name: 'vLLM' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'So führst du ein 70B-Modell mit Ollama auf Consumer-Hardware aus',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Prüfe, ob du 48+ GB schnellen Speicher (Unified Memory, VRAM oder RAM) für Modell plus Kontext hast',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Installiere Ollama von ollama.com',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Führe aus: ollama run llama3.3:70b',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Prüfe die CPU/GPU-Aufteilung mit: ollama ps',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'Passe die Quantisierung an, wenn der Speicher knapp ist: nutze den Tag q3_K_S oder verkürze den Kontext',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Hardware zum Ausführen eines lokalen 70B-LLM 2026',
        numberOfItems: 12,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Mac Studio M5 Max (64-128 GB)',
            description: 'Ja -- volle GPU. ~9-11 tok/s (Schätzwert). Basis-Config hat 36 GB; 64 GB+ ist ein Upgrade.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mac Studio M5 Ultra (96 GB+)',
            description: 'Ja -- Q8_0 passt. ~17-21 tok/s (Schätzwert). Ab 5.499 $ mit 96 GB.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mac mini M5 Pro (64 GB)',
            description: 'Ja -- knapp. ~4-5 tok/s (Schätzwert). 1.699 $ Basis hat 24 GB; 64 GB nur Build-to-Order.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Mac mini M6 (max. 32 GB)',
            description: 'Nein. k. A. (Schätzwert). 32 GB max. liegt unter der ca. 43-GB-Q4-Datei.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mac Studio M2 Ultra (64 GB+, gebraucht)',
            description: 'Ja -- volle GPU. ~12-15 tok/s (Schätzwert). Nur Gebrauchtmarkt; Speichergröße prüfen.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NVIDIA DGX Spark (128 GB)',
            description: 'Ja -- Q8_0 passt. ~4-5 tok/s (Schätzwert). 2,7 tok/s gemessen bei FP8; berichtet 6.950 $.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'AMD Ryzen AI Max+ 395 (128 GB)',
            description: 'Ja. ~4-5 tok/s (Schätzwert). Mini-PCs und Laptops; GPU-Speicheranteil einstellbar.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '2x RTX 3090 / 4090 (48 GB)',
            description: 'Ja -- knapp. ~12-17 tok/s (Schätzwert). Nur Q4_K_M plus kurzer Kontext.',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'RTX 5090 (32 GB) + 64 GB RAM',
            description: 'Teilweises Offload. ~4-6 tok/s (Schätzwert). ~70 % der Layer auf der GPU, Rest im System-RAM.',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'RTX 4090 (24 GB) + 64 GB RAM',
            description: 'Teilweises Offload. ~2-4 tok/s (Schätzwert). ~55 % der Layer auf der GPU, Rest im System-RAM.',
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: 'Nur CPU, Dual-Channel-DDR5',
            description: 'Ja -- nur CPU. ~1-2 tok/s (Schätzwert). Nur für Batch-Jobs.',
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: 'Nur CPU, 8-12-Kanal-Server-RAM',
            description: 'Ja -- nur CPU. ~5-8 tok/s (Schätzwert). Threadripper PRO / EPYC; 256 GB erlauben Q8_0.',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Welche Hardware brauche ich, um ein 70B-LLM lokal auszuführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Du brauchst für Llama 3.3 70B bei Q4_K_M etwa 43 GB schnellen Speicher, dazu 3-10 GB für den Kontext. Drei Setups halten das ganze Modell im schnellen Speicher: ein Apple-Silicon-Mac mit 64 GB oder mehr Unified Memory, zwei NVIDIA-GPUs mit je 24 GB (48 GB VRAM insgesamt) oder ein Rechner mit 128 GB Unified Memory wie der NVIDIA DGX Spark oder ein Mini-PC mit AMD Ryzen AI Max+ 395. Die Kapazität entscheidet, ob das Modell läuft; die Speicherbandbreite entscheidet, wie schnell. Eine einzelne 24-GB-GPU oder ein reiner CPU-PC kann es ausführen, aber nur mit etwa 1-4 Tokens/s.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist ein 70B-Modell?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ein 70B-Modell ist ein großes Sprachmodell mit etwa 70 Milliarden Parametern (Gewichten). Llama 3.3 70B hat 70,6 Milliarden und Qwen2.5 72B hat 72,7 Milliarden. Die Dateigröße folgt aus der Parameterzahl: etwa 141 GB bei 16 Bit, 75 GB bei 8 Bit (Q8_0) und 43 GB bei 4 Bit (Q4_K_M).',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel VRAM oder RAM brauche ich für ein 70B-Modell?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70B braucht 43 GB bei Q4_K_M, 50 GB bei Q5_K_M, 75 GB bei Q8_0 und 141 GB bei FP16 (Größen aus der Ollama-Bibliothek), dazu den KV-Cache für den Kontext: etwa 2,7 GB bei 8K Tokens, 10,7 GB bei 32K und 43 GB bei 128K. Mit 24 GB VRAM passt nur etwa die Hälfte eines Q4_K_M-Modells auf die GPU, der Rest läuft aus dem System-RAM.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist die günstigste Hardware, auf der ein 70B-Modell brauchbar läuft?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Für etwa 10 Tokens/s oder mehr sind die praktischen Optionen ein Mac Studio M5 Max mit 64 GB oder mehr (das Basismodell für 2.499 $ hat 36 GB), ein gebrauchter Mac Studio M2 Ultra mit 64 GB oder mehr oder zwei gebrauchte 24-GB-GPUs. Die günstigste neue Apple-Option ist der Mac mini M5 Pro mit 64 GB: Das Basismodell für 1.699 $ hat nur 24 GB, und Tests nennen für Konfigurationen mit 64 GB etwa 2.700-3.200 $. Seine Bandbreite von 307 GB/s begrenzt ihn auf grob 4-5 Tokens/s. Die Straßenpreise für GPUs schwanken stark: RTX-5090-Angebote lagen im Oktober 2026 berichtetermaßen weit über dem Einführungspreis von 1.999 $, prüfe also die aktuellen Preise.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich ein 70B-Modell auf einer einzelnen 24-GB-GPU ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, aber langsam. Eine 24-GB-Karte wie die RTX 4090 fasst etwa 55 % eines 70B-Modells bei Q4_K_M; die übrigen Layer laufen aus dem System-RAM mit der Speichergeschwindigkeit der CPU, was mit schnellem DDR5 grob 2-4 Tokens/s ergibt. Für interaktives Tempo nutze ein kleineres Modell (27B-34B passt in 24 GB, z. B. Qwen3.8-27B), zwei GPUs oder einen Rechner mit 64 GB+ Unified Memory.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich ein 70B-Modell auf zwei GPUs ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Zwei 24-GB-Karten (RTX 3090 oder 4090) liefern 48 GB VRAM, die ein 70B-Modell bei Q4_K_M (43 GB) mit einem kurzen Kontext von einigen tausend Tokens fassen. Ollama und llama.cpp verteilen die Layer automatisch oder mit --tensor-split auf beide Karten. Rechne als Schätzung mit grob 12-17 Tokens/s, weil jedes Token nacheinander beide Karten durchläuft.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Inferenz-Runtime ist die beste für 70B-LLMs auf Multi-GPU-Hardware?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Für einen Nutzer ist Ollama oder llama.cpp mit Layer-Aufteilung am einfachsten und funktioniert mit gemischten GPUs. Für mehrere gleichzeitige Nutzer oder Agenten liefert vLLM mit --tensor-parallel-size gleich der GPU-Anzahl oder SGLang viel höheren Gesamtdurchsatz, weil Anfragen gebündelt werden; beide bevorzugen identische GPUs und AWQ-, GPTQ- oder FP8-Gewichte. TensorRT-LLM liefert den höchsten NVIDIA-Durchsatz, braucht aber einen Engine-Build-Schritt.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel GPU-Speicher braucht ein Multi-Agenten-System mit 70B-Backends?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Plane die Gewichte einmal ein, dazu einen KV-Cache pro gleichzeitiger Sitzung. Llama 3.3 70B bei Q4_K_M braucht etwa 43 GB für die Gewichte; jede aktive Sitzung fügt bei FP16 etwa 0,33 MB pro Token Kontext hinzu. Vier Agenten zu je 32K Tokens brauchen daher etwa 43 GB + 43 GB = 86 GB. Bediene alle Agenten über einen gemeinsamen Server (vLLM, SGLang oder llama.cpp mit parallelen Slots), statt pro Agent eine Kopie des Modells zu laden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hilft 256 GB RAM bei der CPU-Inferenz eines 70B-Modells?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Es hilft bei der Kapazität, nicht beim Tempo. Mit 256 GB lassen sich Q8_0 (75 GB) oder FP16 (141 GB) mit langem Kontext laden, aber die Decode-Geschwindigkeit wird durch die Speicherkanäle begrenzt: grob 0,5-1,5 Tokens/s auf einem Dual-Channel-Desktop, etwa 3-6 auf einem Threadripper PRO mit 8 Kanälen und etwa 4-8 auf einem EPYC mit 12 Kanälen, jeweils von Q4_K_M bis Q8_0 (Schätzwerte aus der Speicherbandbreite, keine von uns durchgeführten Benchmarks).',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann der Mac mini M6 ein 70B-Modell ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. Der Mac mini M6 (ab 899 $) reicht nur bis 32 GB Unified Memory und 170 GB/s Bandbreite, unter den 43 GB, die ein 70B-Modell bei Q4_K_M braucht. Der Mac mini M5 Pro (ab 1.699 $, 307 GB/s, Thunderbolt 5) lässt sich mit bis zu 64 GB konfigurieren; das Basismodell für 1.699 $ hat 24 GB, bestelle also die Build-to-Order-Konfiguration mit 64 GB. Beide wurden am 22. September 2026 ausgeliefert.',
            },
          },
          {
            '@type': 'Question',
            name: 'Was ist der NVIDIA DGX Spark, und lohnt er sich für 70B-Inferenz?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Der DGX Spark ist NVIDIAs kompakter Desktop-KI-Computer mit 128 GB Unified LPDDR5x-Speicher bei 273 GB/s. Er lädt 70B-Modelle bei Q8_0, ist aber bandbreitenbegrenzt: LMSYS maß 2,7 Tokens/s Decode für Llama 3.1 70B bei FP8. Er eignet sich besser für CUDA-Arbeit, Fine-Tuning und große MoE-Modelle als für schnellen Chat mit einem dichten 70B-Modell. NVIDIA hob die Founders Edition im Februar 2026 von 3.999 $ auf 4.699 $ an, und im Oktober 2026 wurde ein Preis von 6.950 $ berichtet, daneben eine 64-GB-Version für 4.999 $ von Partnern.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie schneidet die lokale 70B-Qualität im Vergleich zu Cloud-Modellen ab?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Meta gibt für Llama 3.3 70B Instruct 86,0 bei MMLU (CoT) und 88,4 bei HumanEval an. Seitdem veröffentlichte Cloud-Spitzenmodelle erzielen bei Aufgaben mit viel Reasoning höhere Werte, während lokale 70B-Modelle bei Zusammenfassung, Extraktion, Entwürfen und routinemäßiger Code-Generierung konkurrenzfähig bleiben. Teste beide mit deinen eigenen Prompts, zum Beispiel mit [PromptQuorum](/de), bevor du in 70B-Hardware investierst.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wie viel Strom verbraucht das Ausführen eines 70B-Modells?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Eine GPU zieht beim Generieren bis zu ihrer Board-Leistung: 350 W bei einer RTX 3090, 450 W bei einer RTX 4090 und 575 W bei einer RTX 5090. Bei 0,15 $ pro kWh kostet eine RTX 4090 unter Volllast allein für die GPU etwa 0,07 $ pro Stunde. Apple Silicon und Unified-Memory-Rechner ziehen für dasselbe Modell deutlich weniger Strom, aber bei geringerem Tempo.',
            },
          },
          {
            '@type': 'Question',
            name: 'Lohnen sich 70B-Modelle gegenüber kleineren Modellen für alltägliche Aufgaben?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Für komplexes Reasoning, die Analyse langer Dokumente und nuanciertes Schreiben in der Regel ja. Für einfache Zusammenfassungen, Fragen und Antworten und Klassifikation liefert ein 7B-14B-Modell oft ähnliche Ergebnisse bei einem Bruchteil der Hardware-Kosten. Teste beide mit deinen eigenen Prompts, bevor du in 70B-Hardware investierst.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ich ein 70B-Modell auf Consumer-Hardware feinabstimmen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nur mit QLoRA. QLoRA hält das Basismodell in 4 Bit (etwa 35 GB) und trainiert kleine Adapter; Answer.AI zeigte, wie FSDP+QLoRA ein 70B-Modell auf zwei 24-GB-Gaming-GPUs trainiert. Vollständiges 16-Bit-Fine-Tuning braucht in der Größenordnung von 1 TB Speicher und ist eine Aufgabe für einen Multi-GPU-Server. Für alles über gelegentliche QLoRA-Läufe hinaus ist das Mieten einer Cloud-GPU mit 80 GB meist praktischer.',
            },
          },
          {
            '@type': 'Question',
            name: 'Welche Quantisierung ist die beste für 70B auf Apple Silicon?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Auf einem 64-GB-Mac nutze Q4_K_M (43 GB). macOS begrenzt den GPU-adressierbaren Speicher standardmäßig auf etwa 75 % des RAM (rund 48 GB bei einem 64-GB-Mac), daher funktioniert Q5_K_M (50 GB) erst, nachdem du das Limit mit sysctl iogpu.wired_limit_mb angehoben hast, und lässt wenig Spielraum. Mit 96-128 GB ist Q8_0 (75 GB) die nahezu verlustfreie Wahl, mit grob der halben Geschwindigkeit von Q4_K_M, weil jedes Token doppelt so viele Bytes liest.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wählt Ollama automatisch die beste Quantisierung?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nein. ollama run llama3.3:70b lädt das Standardmodell Q4_K_M (43 GB) herunter. Nenne für eine andere Stufe den Tag, zum Beispiel ollama run llama3.3:70b-instruct-q5_K_M oder ollama run llama3.3:70b-instruct-q8_0. Führe nach dem Laden ollama ps aus: Die Spalte PROCESSOR zeigt, wie viel des Modells auf GPU und wie viel auf CPU läuft.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kann ein iPhone oder Laptop ein 70B-Modell ausführen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ein iPhone nicht: Aktuelle iPhones haben 8-12 GB RAM, ein 70B-Modell bei Q4_K_M braucht aber etwa 43 GB, daher führen Smartphones 1B-8B-Modelle aus. Laptops nur mit 64 GB+ Unified Memory (High-End-Konfigurationen des MacBook Pro) oder einem System mit AMD Ryzen AI Max+ 395 und 128 GB. Gaming-Laptops mit 16-24 GB VRAM, etwa ein ASUS ROG Strix, fallen in den langsamen Fall des teilweisen Offloadings.',
            },
          },
        ],
      },
    },
    fr: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Meilleurs modèles',
      title: "Exécuter un LLM 70B en local 2026 : RAM, VRAM et vitesse",
      dateModified: '2026-10-29',
      seoTitle: "Matériel pour LLM 70B 2026 : RAM, VRAM et vitesse",
      intro: "Exécuter un modèle 70B en local demande environ 43 Go de mémoire rapide en Q4_K_M, plus 3-10 Go pour le contexte. Un Mac avec 64 Go ou plus de mémoire unifiée, deux GPU de 24 Go ou une machine à 128 Go de mémoire unifiée peuvent le contenir entièrement en mémoire rapide. La vitesse dépend de la bande passante mémoire : de 1-2 tokens/s sur un CPU de bureau à environ 10 tokens/s sur un Mac Studio M5 Max. Llama 3.3 70B et Qwen2.5 72B sont les deux principaux modèles denses de la classe 70B.",
      metaDescription: "Un modèle 70B demande ~43 Go en Q4_K_M plus le contexte. RAM, VRAM et tok/s estimés sur Mac, DGX Spark, GPU RTX et PC sans GPU, dont 256 Go de RAM.",
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-fr.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: "**Un modèle 70B demande environ 43 Go de mémoire en Q4_K_M (Llama 3.3 70B), plus 3-10 Go pour le contexte, et sa vitesse dépend de la bande passante mémoire, pas de la capacité. Un Mac avec 64 Go ou plus, deux GPU de 24 Go ou une machine à 128 Go de mémoire unifiée le contient entièrement en mémoire rapide ; un seul GPU de 24 Go ou un PC sans GPU l'exécute à environ 1-4 tokens/s.**",
      audience: "Développeurs familiers avec Ollama ou LM Studio qui optimisent leurs flux de travail avec des LLM locaux",
      readTime: '11 min de lecture',
      educationalLevel: 'Intermediate',
      primaryTerm: 'LLM 70B matériel grand public',
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: "Qu'est-ce qu'un modèle 70B ?", anchor: '#what-is-70b' },
        { label: 'Quel matériel faut-il ?', anchor: '#what-hardware' },
        { label: 'Mémoire requise par quantification', anchor: '#ram-requirements' },
        { label: 'Contexte et mémoire du cache KV', anchor: '#context-memory' },
        { label: 'Pourquoi la bande passante fixe la vitesse', anchor: '#memory-bandwidth' },
        { label: 'Apple Silicon', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark et PC à mémoire unifiée', anchor: '#dgx-spark' },
        { label: 'GPU NVIDIA + déchargement de couches', anchor: '#nvidia-layer-offloading' },
        { label: 'Moteurs multi-GPU', anchor: '#multi-gpu-runtimes' },
        { label: 'Inférence 70B sur CPU seul', anchor: '#cpu-only' },
        { label: 'Modèles MoE de classe 70B', anchor: '#moe-models' },
        { label: 'Quel modèle 70B choisir ?', anchor: '#which-model' },
        { label: "Fine-tuning d'un modèle 70B", anchor: '#fine-tuning' },
        { label: 'Contexte régional', anchor: '#regional-context' },
        { label: 'Erreurs courantes', anchor: '#common-mistakes' },
        { label: 'Lectures associées', anchor: '#related-reading' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Sources', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: "Un modèle 70B demande environ 43 Go de mémoire en Q4_K_M plus 3-10 Go pour le contexte, et génère à peu près la bande passante divisée par la taille du modèle en tokens par seconde : un Mac de 64 Go ou plus, deux GPU de 24 Go ou une machine à 128 Go de mémoire unifiée l'exécutent en mémoire rapide, alors qu'un seul GPU de 24 Go plafonne à 2-4 tokens/s.",
            },
            {
              type: 'plain-terms',
              text: "Un modèle 70B est un très grand modèle d'IA doté d'environ 70 milliards de valeurs ajustables. Le charger demande à peu près 43 Go de mémoire, et sa vitesse de réponse dépend de la rapidité avec laquelle cette mémoire peut être lue. Un Mac avec beaucoup de mémoire unifiée ou deux grosses cartes graphiques constitue la voie confortable ; un PC ordinaire avec une seule carte graphique fonctionne, mais répond lentement.",
            },
          ],
          items: [
            "Mémoire en Q4_K_M : Llama 3.3 70B pèse 43 Go, Q5_K_M 50 Go, Q8_0 75 Go, FP16 141 Go. Le contexte ajoute environ 2.7 Go par tranche de 8K tokens.",
            "**Règle de vitesse** : les tokens/s sont plafonnés par la bande passante mémoire divisée par la taille du modèle, et la vitesse réelle atteint généralement 60-80 % de ce plafond. 43 Go sur 614 Go/s donnent un plafond d'environ 14 tok/s.",
            "**Meilleure vitesse grand public** : un Mac Studio M5 Max configuré avec 64 Go ou plus (environ 9-11 tok/s) ou deux GPU de 24 Go (environ 12-17 tok/s) ; le Mac Studio M5 Ultra atteint selon nos estimations 17-21 tok/s.",
            "**Mac mini** : le modèle M5 Pro à 1 699 $ embarque 24 Go ; 64 Go est une option sur commande qui donne environ 4-5 tok/s. Le Mac mini M6 (32 Go max.) ne peut pas exécuter un modèle 70B.",
            "**DGX Spark** : 128 Go, mais seulement 273 Go/s ; LMSYS a mesuré 2.7 tok/s pour un 70B en FP8. À acheter pour CUDA et les gros modèles MoE, pas pour discuter rapidement avec un 70B dense.",
            "**Un seul GPU de 24 Go ou CPU seul** : environ 2-4 tok/s avec une RTX 4090 et de la DDR5 rapide, 1-2 tok/s sur un CPU de bureau. 256 Go de RAM ajoutent de la capacité (Q8_0, FP16, long contexte), pas de la vitesse.",
            "Il n'existe pas de Qwen3 72B : le modèle 72B est Qwen2.5 72B. Les nouveaux grands modèles ouverts sont surtout des modèles à mélange d'experts.",
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: "Qu'est-ce qu'un modèle 70B ?",
          content: [
            "**Un modèle 70B est un grand modèle de langage d'environ 70 milliards de paramètres -- les poids appris qui constituent le réseau.** « B » signifie milliard (billion en anglais). Llama 3.3 70B compte 70.6 milliards de paramètres et Qwen2.5 72B en compte 72.7 milliards.",
            "La mémoire est égale au nombre de paramètres multiplié par les octets par poids : des poids de 16 bits occupent 2 octets chacun (environ 141 Go), 8 bits (Q8_0) environ 1 octet (75 Go) et le Q4_K_M en 4 bits environ 0.6 octet (43 Go). C'est pourquoi le 70B est la taille à partir de laquelle le matériel grand public a besoin de 40 Go ou plus de mémoire rapide, alors que les modèles 7B-14B tiennent sur un portable ordinaire.",
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: "Quel matériel faut-il pour exécuter un LLM 70B en local ?",
          content: [
            "**Il faut environ 43 Go de mémoire rapide pour le modèle plus 3-10 Go pour le contexte, dans la VRAM d'un GPU, la mémoire unifiée d'Apple ou la RAM système -- et plus cette mémoire est rapide, plus le modèle génère vite.**",
            "Les vitesses ci-dessous sont des estimations pour un utilisateur seul en conversation à contexte court, dérivées de la bande passante mémoire (voir « Pourquoi la bande passante fixe la vitesse »). Ce sont des plafonds ramenés à une efficacité typique de 60-80 %, et non des benchmarks réalisés par PromptQuorum ; le chiffre du DGX Spark fait exception : il a été mesuré par des tiers.",
          ],
          rows: [
            {
              'Matériel': 'Mac Studio M5 Max (64-128 Go)',
              'Tient en 70B Q4 ?': 'Oui -- GPU complet',
              'Bande passante mémoire': "jusqu'à 614 Go/s",
              'Vitesse est. (Q4_K_M)': '~9-11 tok/s',
              'Notes': 'Config de base : 36 Go ; 64 Go+ en option',
            },
            {
              'Matériel': 'Mac Studio M5 Ultra (96 Go+)',
              'Tient en 70B Q4 ?': 'Oui -- Q8_0 tient',
              'Bande passante mémoire': "jusqu'à 1.2 To/s",
              'Vitesse est. (Q4_K_M)': '~17-21 tok/s',
              'Notes': 'À partir de 5 499 $ avec 96 Go',
            },
            {
              'Matériel': 'Mac mini M5 Pro (64 Go)',
              'Tient en 70B Q4 ?': 'Oui -- juste',
              'Bande passante mémoire': '307 Go/s',
              'Vitesse est. (Q4_K_M)': '~4-5 tok/s',
              'Notes': 'Base à 1 699 $ = 24 Go ; 64 Go sur commande',
            },
            {
              'Matériel': 'Mac mini M6 (32 Go max.)',
              'Tient en 70B Q4 ?': 'Non',
              'Bande passante mémoire': '170 Go/s',
              'Vitesse est. (Q4_K_M)': 'N/D',
              'Notes': "32 Go max. < fichier Q4 d'environ 43 Go",
            },
            {
              'Matériel': "Mac Studio M2 Ultra (64 Go+, occasion)",
              'Tient en 70B Q4 ?': 'Oui -- GPU complet',
              'Bande passante mémoire': '800 Go/s',
              'Vitesse est. (Q4_K_M)': '~12-15 tok/s',
              'Notes': "Occasion uniquement ; vérifiez la mémoire",
            },
            {
              'Matériel': 'NVIDIA DGX Spark (128 Go)',
              'Tient en 70B Q4 ?': 'Oui -- Q8_0 tient',
              'Bande passante mémoire': '273 Go/s',
              'Vitesse est. (Q4_K_M)': '~4-5 tok/s',
              'Notes': '2.7 tok/s mesurés en FP8 ; 6 950 $ rapportés',
            },
            {
              'Matériel': 'AMD Ryzen AI Max+ 395 (128 Go)',
              'Tient en 70B Q4 ?': 'Oui',
              'Bande passante mémoire': '256 Go/s',
              'Vitesse est. (Q4_K_M)': '~4-5 tok/s',
              'Notes': 'Mini-PC et portables ; part GPU configurable',
            },
            {
              'Matériel': '2x RTX 3090 / 4090 (48 Go)',
              'Tient en 70B Q4 ?': 'Oui -- juste',
              'Bande passante mémoire': '936-1 008 Go/s par carte',
              'Vitesse est. (Q4_K_M)': '~12-17 tok/s',
              'Notes': 'Q4_K_M avec contexte court uniquement',
            },
            {
              'Matériel': 'RTX 5090 (32 Go) + 64 Go RAM',
              'Tient en 70B Q4 ?': 'Déchargement partiel',
              'Bande passante mémoire': '1 792 Go/s en VRAM',
              'Vitesse est. (Q4_K_M)': '~4-6 tok/s',
              'Notes': '~70 % des couches sur GPU, le reste en RAM',
            },
            {
              'Matériel': 'RTX 4090 (24 Go) + 64 Go RAM',
              'Tient en 70B Q4 ?': 'Déchargement partiel',
              'Bande passante mémoire': '1 008 Go/s en VRAM',
              'Vitesse est. (Q4_K_M)': '~2-4 tok/s',
              'Notes': '~55 % des couches sur GPU, le reste en RAM',
            },
            {
              Matériel: 'Olares One (RTX 5090 Mobile 24 Go + 96 Go RAM)',
              'Tient en 70B Q4 ?': 'Déchargement partiel',
              'Bande passante mémoire': 'VRAM non publiée / RAM ~90 Go/s',
              'Vitesse est. (Q4_K_M)': '~2-4 tok/s',
              Notes: 'VRAM GDDR7 de 24 Go ; matériel à 4 999 $',
            },
            {
              'Matériel': 'CPU seul, DDR5 double canal',
              'Tient en 70B Q4 ?': 'Oui -- CPU seul',
              'Bande passante mémoire': '~90 Go/s',
              'Vitesse est. (Q4_K_M)': '~1-2 tok/s',
              'Notes': 'Tâches batch uniquement',
            },
            {
              'Matériel': 'CPU seul, RAM serveur 8-12 canaux',
              'Tient en 70B Q4 ?': 'Oui -- CPU seul',
              'Bande passante mémoire': '350-460 Go/s',
              'Vitesse est. (Q4_K_M)': '~5-8 tok/s',
              'Notes': 'Threadripper PRO / EPYC ; 256 Go permet Q8_0',
            },
          ],
          columns: ['Matériel', 'Tient en 70B Q4 ?', 'Bande passante mémoire', 'Vitesse est. (Q4_K_M)', 'Notes'],
          callouts: [
            { type: 'insight', text: "**Olares One** ([olares.com/one](https://www.olares.com/one)) est un ordinateur de bureau IA compact doté d'une RTX 5090 Mobile (24 Go de VRAM GDDR7), d'un Intel Core Ultra 9 275HX et de 96 Go de RAM DDR5-5600 (extensible à 128 Go selon Olares). Avec un modèle 70B, il se comporte comme la ligne RTX 4090 ci-dessus : environ 55 % d'un modèle Q4_K_M tient en VRAM et le reste est lu depuis la RAM système, soit environ 2-4 tokens/s (estimation, pas un benchmark). Les 96 Go de RAM apportent de la capacité, pas de la vitesse : Q8_0 (75 Go) y tient avec de la place pour le contexte. Olares indique un coût matériel de 4 999 $ et ne publie aucun chiffre de tokens/s pour le 70B." },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: "Combien de RAM ou de VRAM un modèle 70B demande-t-il à chaque niveau de quantification ?",
          content: "Les tailles ci-dessous correspondent aux fichiers Llama 3.3 70B de la bibliothèque Ollama ; les autres modèles 70B diffèrent de quelques pour cent. Il s'agit des poids seuls -- ajoutez la mémoire de contexte vue dans la section suivante.",
          rows: [
            { 'Quantification': 'FP16 (précision complète)', 'Mémoire (poids)': '~141 Go', 'Qualité': 'Qualité de référence', 'Utilisable ?': 'Mac Ultra 192 Go+ ou serveur 256 Go' },
            { 'Quantification': 'Q8_0', 'Mémoire (poids)': '~75 Go', 'Qualité': 'Quasi sans perte', 'Utilisable ?': '96-128 Go unifiés ou 128 Go de RAM' },
            { 'Quantification': 'Q6_K', 'Mémoire (poids)': '~58 Go', 'Qualité': 'Très proche de Q8_0', 'Utilisable ?': 'Machines de 72-96 Go' },
            { 'Quantification': 'Q5_K_M', 'Mémoire (poids)': '~50 Go', 'Qualité': 'Perte minimale', 'Utilisable ?': 'Mac 64 Go avec limite GPU relevée -- juste' },
            { 'Quantification': 'Q4_K_M', 'Mémoire (poids)': '~43 Go', 'Qualité': 'Perte faible -- par défaut', 'Utilisable ?': 'Oui -- Mac 64 Go ou double GPU 48 Go' },
            { 'Quantification': 'Q3_K_S', 'Mémoire (poids)': '~31 Go', 'Qualité': 'Perte modérée', 'Utilisable ?': 'Oui -- machines de 40-48 Go' },
            { 'Quantification': 'Q2_K', 'Mémoire (poids)': '~26 Go', 'Qualité': 'Perte élevée', 'Utilisable ?': 'Déconseillé' },
          ],
          columns: ['Quantification', 'Mémoire (poids)', 'Qualité', 'Utilisable ?'],
        },
        contextMemory: {
          id: 'context-memory',
          title: "Combien de mémoire supplémentaire le contexte ajoute-t-il à un modèle 70B ?",
          content: [
            "**Le contexte ajoute de la mémoire en plus des poids : Llama 3.3 70B stocke environ 0.33 Mo de cache KV par token en FP16, soit à peu près 2.7 Go à 8K tokens, 10.7 Go à 32K et 43 Go à 128K.** Ce chiffre découle de l'architecture du modèle : 80 couches x 8 têtes clé-valeur x 128 dimensions x 2 (clés et valeurs) x 2 octets = 327 680 octets par token.",
            "Chaque session simultanée conserve son propre cache KV, tandis que les poids sont partagés. Un système multi-agents de quatre agents à 32K tokens chacun demande environ 43 Go de poids plus 43 Go de cache. Activer la flash attention et un cache KV 8 bits dans Ollama (OLLAMA_FLASH_ATTENTION=1 et OLLAMA_KV_CACHE_TYPE=q8_0) réduit le cache environ de moitié.",
          ],
          rows: [
            { 'Longueur de contexte': '8K tokens', 'Cache KV (FP16)': '~2.7 Go', 'Total avec Q4_K_M': '~46 Go' },
            { 'Longueur de contexte': '32K tokens', 'Cache KV (FP16)': '~10.7 Go', 'Total avec Q4_K_M': '~54 Go' },
            { 'Longueur de contexte': '128K tokens', 'Cache KV (FP16)': '~43 Go', 'Total avec Q4_K_M': '~86 Go' },
          ],
          columns: ['Longueur de contexte', 'Cache KV (FP16)', 'Total avec Q4_K_M'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: "Pourquoi la bande passante mémoire fixe-t-elle la vitesse d'un modèle 70B ?",
          content: [
            "**Chaque token généré lit une fois tous les poids du modèle : la vitesse de décodage est donc plafonnée par la bande passante mémoire divisée par la taille du modèle.** Un modèle Q4_K_M de 43 Go sur 614 Go/s de bande passante est plafonné à environ 14 tokens/s ; la vitesse réelle atteint généralement 60-80 % de ce plafond.",
            "La même règle explique pourquoi grande mémoire ne veut pas dire rapide : le DGX Spark de 128 Go offre 273 Go/s, soit un plafond d'environ 6 tokens/s en Q4_K_M, et LMSYS a mesuré 2.7 tokens/s pour Llama 3.1 70B en FP8 (environ 70 Go, plafond 3.9). La capacité décide si un modèle tourne ; la bande passante décide à quelle vitesse. Le traitement du prompt (prefill) est limité par le calcul et se comporte différemment.",
          ],
          rows: [
            { 'Mémoire': 'DDR5-5600 double canal', 'Bande passante': '~90 Go/s', 'Plafond à 43 Go': '~2 tok/s' },
            { 'Mémoire': 'AMD Ryzen AI Max+ 395', 'Bande passante': '256 Go/s', 'Plafond à 43 Go': '~6 tok/s' },
            { 'Mémoire': 'NVIDIA DGX Spark', 'Bande passante': '273 Go/s', 'Plafond à 43 Go': '~6 tok/s' },
            { 'Mémoire': 'Apple M5 Pro', 'Bande passante': '307 Go/s', 'Plafond à 43 Go': '~7 tok/s' },
            { 'Mémoire': 'Apple M5 Max', 'Bande passante': "jusqu'à 614 Go/s", 'Plafond à 43 Go': '~14 tok/s' },
            { 'Mémoire': 'Apple M2 Ultra', 'Bande passante': '800 Go/s', 'Plafond à 43 Go': '~19 tok/s' },
            { 'Mémoire': 'Apple M5 Ultra', 'Bande passante': "jusqu'à 1.2 To/s", 'Plafond à 43 Go': '~28 tok/s' },
          ],
          columns: ['Mémoire', 'Bande passante', 'Plafond à 43 Go'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: "Apple Silicon est-il un bon choix pour les modèles 70B ?",
          content: [
            "**Apple Silicon est le moyen le plus simple de loger un modèle 70B entièrement dans une mémoire accessible au GPU, car le CPU et le GPU partagent un même pool de mémoire unifiée.** Un Mac de 64 Go ou plus exécute le Q4_K_M sans déchargement de couches, à une vitesse fixée par la bande passante de la puce : environ 9-11 tokens/s sur un M5 Max et 12-15 sur un M2 Ultra d'occasion (estimations). Nous n'avons trouvé aucun benchmark publié du 70B sur les puces M5 pour l'instant.",
            "Apple a annoncé le Mac Studio avec M5 Max et M5 Ultra le 25 août 2026 ; les deux sont sortis le 22 septembre 2026. Le M5 Max démarre à 2 499 $ avec 36 Go et monte à 128 Go, à une bande passante allant jusqu'à 614 Go/s -- configurez 64 Go ou plus pour un 70B. Le M5 Ultra démarre à 5 499 $ avec 96 Go, monte à 512 Go à une bande passante allant jusqu'à 1.2 To/s et exécute confortablement le Q8_0 ; la configuration à 512 Go était annoncée pour fin octobre.",
            "**Le Mac mini M5 Pro démarre à 1 699 $ avec 24 Go, et non 64 Go.** La configuration de 64 Go sur commande (307 Go/s, Thunderbolt 5) contient un modèle 70B en Q4_K_M mais ne génère qu'environ 4-5 tokens/s, et les tests la situent à environ 2 700-3 200 $ selon le CPU et le stockage. Le Mac mini M6 de base (899 $) plafonne à 32 Go et 170 Go/s et ne peut exécuter un modèle 70B à aucun niveau de quantification.",
            "Par défaut, macOS limite la mémoire adressable par le GPU à environ 75 % de la RAM (environ 48 Go sur un Mac de 64 Go). Pour exécuter le Q5_K_M (50 Go), relevez la limite, par exemple sudo sysctl iogpu.wired_limit_mb=57344 sur un Mac de 64 Go ; ce réglage disparaît au redémarrage et ne laisse au système qu'environ 8 Go.",
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: "Le NVIDIA DGX Spark (ou un PC Strix Halo de 128 Go) convient-il aux modèles 70B ?",
          content: [
            "**Le NVIDIA DGX Spark est un ordinateur d'IA de bureau compact doté de 128 Go de mémoire unifiée LPDDR5x à 273 Go/s, construit sur le superpuce GB10 Grace Blackwell avec prise en charge de CUDA.** Il charge un modèle 70B même en Q8_0 (75 Go), mais la bande passante limite la génération : LMSYS a mesuré 2.7 tokens/s de décodage pour Llama 3.1 70B en FP8, et des essais communautaires avec llama.cpp en Q4_K_M sont rapportés autour de 4-5 tokens/s.",
            "Les prix ont fortement bougé. NVIDIA a relevé la Founders Edition de 3 999 $ à 4 699 $ en février 2026 en raison de contraintes d'approvisionnement en mémoire, et un prix de 6 950 $ a été rapporté en octobre 2026, ainsi qu'une version de 64 Go à 4 999 $ vendue par des partenaires à partir du 23 octobre 2026. Vérifiez les prix en vigueur avant d'acheter.",
            "Les mini-PC et portables AMD Ryzen AI Max+ 395 (« Strix Halo ») offrent 128 Go de LPDDR5X à 256 Go/s, la même classe de bande passante, et une estimation similaire d'environ 4-5 tokens/s pour un modèle 70B dense. Ces deux plateformes conviennent mieux aux modèles à mélange d'experts (voir plus bas), à CUDA et au fine-tuning qu'au chat avec un 70B dense.",
          ],
          rows: [
            { 'Caractéristique': 'Mémoire', 'Valeur': '128 Go unifiés LPDDR5x' },
            { 'Caractéristique': 'Bande passante mémoire', 'Valeur': '273 Go/s' },
            { 'Caractéristique': '70B en Q8_0 (75 Go)', 'Valeur': 'Tient' },
            { 'Caractéristique': 'Décodage 70B, mesuré', 'Valeur': '2.7 tok/s en FP8 (LMSYS, SGLang)' },
            { 'Caractéristique': 'Taille max. de modèle', 'Valeur': '~200B paramètres en FP4' },
            { 'Caractéristique': 'Prix', 'Valeur': '6 950 $ rapportés ; 4 699 $ (liste, fév. 2026)' },
            { 'Caractéristique': 'Commande Ollama', 'Valeur': 'ollama run llama3.3:70b' },
          ],
          columns: ['Caractéristique', 'Valeur'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: "Comment fonctionne le déchargement de couches GPU NVIDIA + RAM pour les modèles 70B ?",
          content: [
            "**Ollama et llama.cpp répartissent un modèle entre la VRAM du GPU et la RAM système : les couches en VRAM tournent à la vitesse du GPU, celles en RAM à la vitesse mémoire du CPU, et la partie lente domine.** Avec une RTX 4090 (24 Go), environ 55 % d'un modèle 70B en Q4_K_M tiennent sur le GPU et le reste est lu depuis la DDR5 à environ 90 Go/s, ce qui limite la génération à environ 2-4 tokens/s. Une RTX 5090 (32 Go) en contient environ 70 % et atteint selon nos estimations 4-6 tokens/s.",
            "Ollama décharge automatiquement ; aucune option n'est nécessaire. Exécutez ollama ps pour voir la répartition (colonne PROCESSOR, par exemple 45%/55% CPU/GPU). Dans llama.cpp, fixez le nombre de couches avec -ngl.",
          ],
          codeBlock: "# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096",
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: "Quel moteur d'inférence choisir pour un modèle 70B sur plusieurs GPU ?",
          content: [
            "**Pour un seul utilisateur, Ollama ou llama.cpp avec répartition par couches est la voie multi-GPU la plus simple ; pour plusieurs utilisateurs ou agents simultanés, vLLM ou SGLang avec parallélisme de tenseurs offrent un débit total bien supérieur.** Deux cartes de 24 Go (RTX 3090 ou 4090) donnent 48 Go, assez pour le Q4_K_M avec un contexte court.",
            "La répartition par couches ne transmet les activations entre les cartes qu'une fois par token et fonctionne sur un simple PCIe, ce qui convient aux cartes mixtes ou grand public. Le parallélisme de tenseurs découpe chaque couche entre les GPU et profite de liaisons rapides : la RTX 3090 accepte un pont NVLink, contrairement aux RTX 4090 et 5090.",
          ],
          rows: [
            { 'Moteur': 'Ollama', 'Méthode multi-GPU': 'Répartition auto par couches', 'Idéal pour': 'Un utilisateur, config la plus simple' },
            { 'Moteur': 'llama.cpp', 'Méthode multi-GPU': '--split-mode, --tensor-split', 'Idéal pour': 'GPU mixtes, quantifications GGUF' },
            { 'Moteur': 'vLLM', 'Méthode multi-GPU': '--tensor-parallel-size N', 'Idéal pour': 'Nombreux utilisateurs/agents ; AWQ/GPTQ/FP8' },
            { 'Moteur': 'SGLang', 'Méthode multi-GPU': 'Parallélisme de tenseurs', 'Idéal pour': 'Agents à préfixes de prompt partagés' },
            { 'Moteur': 'TensorRT-LLM', 'Méthode multi-GPU': 'Parallélisme tenseurs / pipeline', 'Idéal pour': 'Débit NVIDIA max. ; build du moteur' },
          ],
          columns: ['Moteur', 'Méthode multi-GPU', 'Idéal pour'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: "L'inférence 70B sur CPU seul est-elle praticable, et 256 Go de RAM aident-ils ?",
          content: [
            "**L'inférence 70B sur CPU seul est limitée par la bande passante mémoire : la DDR5 double canal d'un PC de bureau (environ 90 Go/s) donne à peu près 1-2 tokens/s en Q4_K_M, et ajouter de la capacité de RAM ne l'accélère pas.** À 1.5 token/s, une réponse de 200 mots (environ 270 tokens) prend autour de trois minutes.",
            "256 Go de RAM changent ce qui tient en mémoire, pas la vitesse : ils permettent de charger le Q8_0 (75 Go) ou le FP16 (141 Go) avec un long contexte. La vitesse dépend du nombre de canaux mémoire -- un serveur Threadripper PRO à 8 canaux ou EPYC à 12 canaux offre trois à cinq fois la bande passante d'un PC de bureau. Les cartes mères de bureau équipées de quatre grandes barrettes font souvent tourner leur mémoire plus lentement qu'avec deux. Le traitement du prompt sur CPU est aussi lent pour les longues entrées.",
            "Les estimations ci-dessous appliquent la règle de la bande passante à 70 % d'efficacité ; ce ne sont pas des benchmarks mesurés.",
          ],
          rows: [
            { 'CPU / RAM': 'Bureau, DDR5-5600 2 canaux', 'Bande passante': '~90 Go/s', 'Q4_K_M (43 Go)': '~1-1.5 tok/s', 'Q8_0 (75 Go)': '~0.6-0.9 tok/s', 'FP16 (141 Go)': '~0.3-0.5 tok/s' },
            { 'CPU / RAM': 'Threadripper PRO, DDR5-5600 8 canaux', 'Bande passante': '~358 Go/s', 'Q4_K_M (43 Go)': '~5-6 tok/s', 'Q8_0 (75 Go)': '~3-3.5 tok/s', 'FP16 (141 Go)': '~1.5-1.8 tok/s' },
            { 'CPU / RAM': 'EPYC, DDR5-4800 12 canaux', 'Bande passante': '~461 Go/s', 'Q4_K_M (43 Go)': '~7-8 tok/s', 'Q8_0 (75 Go)': '~4-4.5 tok/s', 'FP16 (141 Go)': '~2-2.5 tok/s' },
          ],
          columns: ['CPU / RAM', 'Bande passante', 'Q4_K_M (43 Go)', 'Q8_0 (75 Go)', 'FP16 (141 Go)'],
        },
        moe: {
          id: 'moe-models',
          title: "Les modèles MoE de classe 70B changent-ils les besoins matériels ?",
          content: [
            "**Les modèles à mélange d'experts (MoE) ont besoin de mémoire pour tous leurs paramètres mais ne lisent que les experts actifs pour chaque token : ils génèrent donc bien plus vite qu'un modèle 70B dense de même empreinte mémoire.** gpt-oss-120b d'OpenAI compte environ 117 milliards de paramètres dont environ 5.1 milliards actifs ; Llama 4 Scout de Meta en compte 109 milliards dont 17 milliards actifs.",
            "La règle de la bande passante s'applique aux poids actifs : les modèles MoE tirent donc le meilleur parti des machines à grande capacité et bande passante modérée, comme le DGX Spark, les PC Ryzen AI Max+ 395 et un Mac mini M5 Pro de 64 Go. Pour un modèle 70B dense sur ce matériel, comptez 4-5 tokens/s ; comparez la taille du fichier de chaque modèle MoE à votre mémoire avant de le télécharger.",
          ],
        },
        which70b: {
          id: 'which-model',
          title: "Quel modèle 70B exécuter en local ?",
          content: [
            "**Llama 3.3 70B est le modèle dense 70B par défaut : Meta annonce 86.0 sur MMLU (CoT) et 88.4 sur HumanEval, avec une fenêtre de contexte de 128K.** Qwen2.5 72B est la principale alternative pour l'usage multilingue et le code. Il n'existe pas de Qwen3 72B -- les modèles denses Qwen3 s'arrêtent à 32B -- une mention de « Qwen3 72B » désigne donc Qwen2.5 72B.",
            "Commandes : ollama run llama3.3:70b, ollama run qwen2.5:72b, ollama run deepseek-r1:70b.",
          ],
          rows: [
            { 'Modèle': 'Llama 3.3 70B', 'Paramètres': '70.6B dense', 'Licence': 'Llama 3.3 Community License', 'Idéal pour': "Anglais général, suivi d'instructions" },
            { 'Modèle': 'Qwen2.5 72B Instruct', 'Paramètres': '72.7B dense', 'Licence': 'Qwen License', 'Idéal pour': 'Multilingue, code ; 131K avec YaRN' },
            { 'Modèle': 'DeepSeek-R1-Distill-Llama-70B', 'Paramètres': '70B dense', 'Licence': 'Voir la fiche du modèle', 'Idéal pour': 'Raisonnement ; sorties longues = réponses lentes' },
            { 'Modèle': 'Mistral Large 2', 'Paramètres': '123B dense', 'Licence': 'Mistral Research License', 'Idéal pour': 'Recherche uniquement ; ~75 Go en Q4' },
          ],
          columns: ['Modèle', 'Paramètres', 'Licence', 'Idéal pour'],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: "Quel matériel faut-il pour faire du fine-tuning d'un modèle 70B ?",
          content: [
            "**Le fine-tuning QLoRA d'un modèle 70B demande environ 35-48 Go de mémoire GPU par exécution : deux GPU de 24 Go avec FSDP+QLoRA, ou un seul GPU de 48-80 Go.** QLoRA garde le modèle de base en 4 bits (environ 35 Go) et entraîne de petits adaptateurs ; Answer.AI l'a démontré sur deux GPU gaming de 24 Go.",
            "Un fine-tuning complet en 16 bits demande environ 16 octets par paramètre pour les poids, les gradients et les états de l'optimiseur -- de l'ordre de 1 To --, ce qui relève d'un serveur multi-GPU. Louer un GPU cloud de 80 Go est généralement plus pratique que de construire du matériel pour des exécutions occasionnelles.",
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: "Exécuter des modèles 70B en local : contexte régional",
          content: [
            "**UE / RGPD** : un modèle 70B local représente le plafond pratique de qualité d'IA exécutable en privé pour la plupart des organisations. Traiter des documents juridiques, médicaux ou financiers sur site garde les prompts et les sorties dans votre propre infrastructure, ce qui soutient la minimisation des données et la maîtrise des risques liés aux transferts ; cela ne rend pas à lui seul un déploiement conforme au RGPD, évaluez donc l'ensemble de l'activité de traitement.",
            "Pour les organisations qui exigent du matériel issu d'une chaîne d'approvisionnement européenne, Apple (États-Unis) et NVIDIA (États-Unis) sont des fournisseurs hors UE ; Dell, HP et Lenovo vendent des systèmes basés sur GB10 avec un support local. Côté modèles, Mistral Large 2 provient d'un développeur de l'UE mais est publié sous une licence de recherche qui ne couvre pas l'usage commercial.",
            "**Japon** : Qwen2.5 72B est un choix courant pour le texte japonais : `ollama run qwen2.5:72b`. Documenter le matériel et les versions de modèles (la sortie de `ollama ps` identifie le modèle chargé) soutient la gouvernance interne au regard des lignes directrices japonaises sur l'IA à destination des entreprises.",
            "**Chine** : héberger Qwen2.5 72B localement garde les données sur votre propre infrastructure, ce qui est pertinent au regard de la loi chinoise sur la sécurité des données (数据安全法). Savoir si un modèle servi en interne relève des règles de la CAC sur l'IA générative dépend de son offre au public ; confirmez avec un conseil juridique qualifié.",
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: "Quelles sont les erreurs courantes avec les modèles 70B sur matériel grand public ?",
          faqs: [
            {
              q: "Acheter un GPU de moins de 24 Go de VRAM en s'attendant à des performances 70B complètes",
              a: "Une carte de 12 Go contient environ un quart d'un modèle 70B en Q4_K_M ; le reste tourne depuis la RAM système, donc la vitesse est proche de celle du CPU seul. Même une RTX 4090 de 24 Go n'atteint qu'environ 2-4 tok/s. Pour une vitesse interactive, prenez 48 Go de VRAM, un Mac Apple Silicon de 64 Go ou plus, ou un modèle plus petit de 27B-34B.",
            },
            {
              q: "Croire qu'une machine à grande mémoire est aussi une machine rapide",
              a: "Les systèmes DGX Spark et Ryzen AI Max+ 395 ont 128 Go mais seulement 256-273 Go/s de bande passante : un modèle 70B dense y tourne à environ 3-5 tok/s. Un Mac Studio M5 Max de 64 Go offre plus du double de bande passante. Vérifiez la bande passante, pas seulement la capacité.",
            },
            {
              q: "Ne pas vérifier quelle part du modèle tourne sur le GPU",
              a: "Ollama décharge automatiquement, mais un ajustement serré peut laisser des couches sur le CPU. Exécutez `ollama ps` après le chargement et lisez la colonne PROCESSOR : « 100% GPU » est l'objectif, et une part de CPU explique une sortie lente. Réduisez la longueur de contexte ou passez au Q3_K_S si la répartition est mauvaise.",
            },
            {
              q: "Oublier que le contexte consomme aussi de la mémoire",
              a: "Un modèle 70B en Q4_K_M pèse 43 Go, mais un contexte de 32K ajoute environ 10.7 Go et un contexte de 128K environ 43 Go en FP16. Une machine qui contient les poids peut quand même manquer de mémoire en contexte long. Utilisez un cache KV 8 bits ou un contexte plus court.",
            },
            {
              q: "Choisir Q5_K_M ou Q8_0 quand la vitesse compte",
              a: "Chaque token lit tout le modèle : Q8_0 (75 Go) tourne donc à peu près à la moitié de la vitesse de Q4_K_M (43 Go) sur le même matériel. Sur les machines limitées par la bande passante (DGX Spark, Strix Halo, Mac mini), choisissez Q4_K_M pour le chat et réservez Q8_0 aux cas où la qualité est prioritaire.",
            },
            {
              q: "Commander le Mac mini M5 Pro à 1 699 $ en s'attendant à faire tourner un 70B",
              a: "Le Mac mini M5 Pro à 1 699 $ embarque 24 Go de mémoire unifiée. Un modèle 70B demande la configuration de 64 Go sur commande, et le Mac mini M6 de base (899 $, 32 Go maximum) ne peut pas l'exécuter du tout. Vérifiez « M5 Pro » et 64 Go avant de commander.",
            },
            {
              q: "Se heurter à la limite de mémoire GPU par défaut de macOS",
              a: "Par défaut, macOS laisse le GPU utiliser environ 75 % de la RAM, soit environ 48 Go sur un Mac de 64 Go. Q4_K_M tient ; Q5_K_M (50 Go) ne tient pas tant que vous n'avez pas relevé `iogpu.wired_limit_mb`.",
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures associées',
          items: [
            "[Guide du matériel pour LLM locaux](/fr/local-llms/local-llm-hardware-guide) -- tableau complet des niveaux de GPU et de RAM pour chaque taille de modèle, y compris la configuration requise pour un 70B",
            "[Exécuter des modèles 70B avec 24 Go de VRAM](/fr/local-llms/run-70b-models-24gb-vram) -- options de quantification et de déchargement quand vous n'avez qu'un seul GPU",
            "[Exécuter des modèles 70B sur Apple Silicon M5 Max](/fr/local-llms/running-70b-models-apple-silicon-m5-max) -- installation spécifique au Mac avec Ollama et MLX",
            "[RTX 5090 contre RTX 4090 pour les LLM locaux](/fr/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- comment 32 Go contre 24 Go de VRAM changent le déchargement",
            "[Mac mini M5 comme serveur d'IA local](/fr/local-llms/mac-mini-m5-local-ai-server) -- ce que la gamme Mac mini peut et ne peut pas exécuter",
            "[La quantification des LLM expliquée](/fr/local-llms/llm-quantization-explained) -- comprendre Q4_K_M contre Q8_0 et le coût en vitesse d'une précision plus élevée",
            "[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) -- installation complète, y compris la configuration des couches GPU",
            "[Qwen contre Llama contre Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral) -- comparaison détaillée des principales familles de modèles ouverts",
          ],
        },
        faqSection: {
          id: 'faq',
          title: "Questions fréquentes sur l'exécution de modèles 70B sur matériel grand public",
          faqs: [
            {
              q: "Quel matériel faut-il pour exécuter un LLM 70B en local ?",
              a: "Il faut environ 43 Go de mémoire rapide pour Llama 3.3 70B en Q4_K_M, plus 3-10 Go pour le contexte. Trois configurations logent tout le modèle en mémoire rapide : un Mac Apple Silicon avec 64 Go ou plus de mémoire unifiée, deux GPU NVIDIA de 24 Go (48 Go de VRAM au total), ou une machine à 128 Go de mémoire unifiée comme le NVIDIA DGX Spark ou un mini-PC AMD Ryzen AI Max+ 395. La capacité décide si le modèle tourne ; la bande passante mémoire décide à quelle vitesse. Un seul GPU de 24 Go ou un PC sans GPU peut l'exécuter, mais seulement à environ 1-4 tokens/s.",
            },
            {
              q: "Qu'est-ce qu'un modèle 70B ?",
              a: "Un modèle 70B est un grand modèle de langage d'environ 70 milliards de paramètres (poids). Llama 3.3 70B en compte 70.6 milliards et Qwen2.5 72B 72.7 milliards. La taille du fichier découle du nombre de paramètres : environ 141 Go en 16 bits, 75 Go en 8 bits (Q8_0) et 43 Go en 4 bits (Q4_K_M).",
            },
            {
              q: "De combien de VRAM ou de RAM ai-je besoin pour un modèle 70B ?",
              a: "Llama 3.3 70B demande 43 Go en Q4_K_M, 50 Go en Q5_K_M, 75 Go en Q8_0 et 141 Go en FP16 (tailles de la bibliothèque Ollama), plus le cache KV pour le contexte : environ 2.7 Go à 8K tokens, 10.7 Go à 32K et 43 Go à 128K. Avec 24 Go de VRAM, seule environ la moitié d'un modèle Q4_K_M tient sur le GPU, et le reste tourne depuis la RAM système.",
            },
            {
              q: "Quel est le matériel le moins cher capable d'exécuter un modèle 70B de façon utilisable ?",
              a: "Pour environ 10 tokens/s ou plus, les options pratiques sont un Mac Studio M5 Max configuré avec 64 Go ou plus (le modèle de base à 2 499 $ a 36 Go), un Mac Studio M2 Ultra d'occasion avec 64 Go ou plus, ou deux GPU d'occasion de 24 Go. L'option Apple neuve la moins chère est le Mac mini M5 Pro avec 64 Go : le modèle de base à 1 699 $ n'a que 24 Go, et les tests situent les configurations de 64 Go à environ 2 700-3 200 $. Sa bande passante de 307 Go/s le limite à environ 4-5 tokens/s. Les prix des GPU sont volatils : des annonces de RTX 5090 ont été rapportées bien au-dessus du prix de lancement de 1 999 $ en octobre 2026, vérifiez donc les prix en vigueur.",
            },
            {
              q: "Puis-je exécuter un modèle 70B sur un seul GPU de 24 Go ?",
              a: "Oui, mais lentement. Une carte de 24 Go comme la RTX 4090 contient environ 55 % d'un modèle 70B en Q4_K_M ; les couches restantes tournent depuis la RAM système à la vitesse mémoire du CPU, ce qui donne environ 2-4 tokens/s avec de la DDR5 rapide. Pour une vitesse interactive, utilisez un modèle plus petit (un 27B-34B tient dans 24 Go, par exemple Qwen3.8-27B), deux GPU ou une machine à mémoire unifiée de 64 Go ou plus.",
            },
            {
              q: "Puis-je exécuter un modèle 70B sur deux GPU ?",
              a: "Oui. Deux cartes de 24 Go (RTX 3090 ou 4090) offrent 48 Go de VRAM, ce qui contient un modèle 70B en Q4_K_M (43 Go) avec un contexte court de quelques milliers de tokens. Ollama et llama.cpp répartissent les couches sur les deux cartes automatiquement ou avec --tensor-split. Comptez à titre d'estimation environ 12-17 tokens/s, car chaque token traverse les deux cartes en séquence.",
            },
            {
              q: "Quel est le meilleur moteur d'inférence pour exécuter des LLM 70B sur du matériel multi-GPU ?",
              a: "Pour un seul utilisateur, Ollama ou llama.cpp avec répartition par couches est le plus simple et fonctionne avec des GPU mixtes. Pour plusieurs utilisateurs ou agents simultanés, vLLM avec --tensor-parallel-size réglé sur le nombre de GPU, ou SGLang, offre un débit total bien supérieur car il regroupe les requêtes par lots ; tous deux préfèrent des GPU identiques et des poids AWQ, GPTQ ou FP8. TensorRT-LLM donne le débit NVIDIA le plus élevé mais demande une étape de construction du moteur.",
            },
            {
              q: "De combien de mémoire GPU un système multi-agents avec des backends 70B a-t-il besoin ?",
              a: "Comptez les poids une seule fois plus un cache KV par session simultanée. Llama 3.3 70B en Q4_K_M demande environ 43 Go pour les poids ; chaque session active ajoute environ 0.33 Mo par token de contexte en FP16. Quatre agents à 32K tokens chacun demandent donc environ 43 Go + 43 Go = 86 Go. Servez tous les agents depuis un serveur partagé (vLLM, SGLang ou llama.cpp avec emplacements parallèles) plutôt que de charger une copie du modèle par agent.",
            },
            {
              q: "256 Go de RAM aident-ils l'inférence CPU d'un modèle 70B ?",
              a: "Ils aident sur la capacité, pas sur la vitesse. 256 Go permettent de charger le Q8_0 (75 Go) ou le FP16 (141 Go) avec un long contexte, mais la vitesse de décodage est limitée par les canaux mémoire : environ 0.5-1.5 token/s sur un PC de bureau double canal, environ 3-6 sur un Threadripper PRO à 8 canaux et environ 4-8 sur un EPYC à 12 canaux, de Q4_K_M à Q8_0 (estimations dérivées de la bande passante mémoire, pas de benchmarks que nous avons réalisés).",
            },
            {
              q: "Le Mac mini M6 peut-il exécuter un modèle 70B ?",
              a: "Non. Le Mac mini M6 (à partir de 899 $) plafonne à 32 Go de mémoire unifiée et 170 Go/s de bande passante, en dessous des 43 Go qu'exige un modèle 70B en Q4_K_M. Le Mac mini M5 Pro (à partir de 1 699 $, 307 Go/s, Thunderbolt 5) peut être configuré jusqu'à 64 Go ; le modèle de base à 1 699 $ a 24 Go, commandez donc la configuration de 64 Go sur commande. Les deux sont sortis le 22 septembre 2026.",
            },
            {
              q: "Qu'est-ce que le NVIDIA DGX Spark et vaut-il le coup pour l'inférence 70B ?",
              a: "Le DGX Spark est l'ordinateur d'IA de bureau compact de NVIDIA, avec 128 Go de mémoire unifiée LPDDR5x à 273 Go/s. Il charge des modèles 70B en Q8_0 mais reste limité par la bande passante : LMSYS a mesuré 2.7 tokens/s de décodage pour Llama 3.1 70B en FP8. Il convient mieux au travail sous CUDA, au fine-tuning et aux gros modèles MoE qu'au chat rapide avec un 70B dense. NVIDIA a relevé la Founders Edition de 3 999 $ à 4 699 $ en février 2026 et un prix de 6 950 $ a été rapporté en octobre 2026, ainsi qu'une version de 64 Go à 4 999 $ chez des partenaires.",
            },
            {
              q: "Comment la qualité d'un 70B local se compare-t-elle aux modèles cloud ?",
              a: "Meta annonce 86.0 sur MMLU (CoT) et 88.4 sur HumanEval pour Llama 3.3 70B Instruct. Les modèles cloud de pointe publiés depuis obtiennent de meilleurs scores sur les tâches de raisonnement, tandis que les modèles 70B locaux restent compétitifs pour le résumé, l'extraction, la rédaction et la génération de code courante. Testez les deux sur vos propres prompts, par exemple avec [PromptQuorum](/fr), avant d'investir dans du matériel 70B.",
            },
            {
              q: "Quelle quantité d'électricité l'exécution d'un modèle 70B consomme-t-elle ?",
              a: "Un GPU consomme jusqu'à sa puissance de carte pendant la génération : 350 W pour une RTX 3090, 450 W pour une RTX 4090 et 575 W pour une RTX 5090. À 0.15 $ par kWh, une RTX 4090 à pleine charge coûte environ 0.07 $ par heure pour le GPU seul. Apple Silicon et les machines à mémoire unifiée consomment beaucoup moins pour le même modèle, mais à une vitesse inférieure.",
            },
            {
              q: "Les modèles 70B valent-ils le coup face aux modèles plus petits pour les tâches quotidiennes ?",
              a: "Pour le raisonnement complexe, l'analyse de longs documents et la rédaction nuancée, généralement oui. Pour le résumé simple, les questions-réponses et la classification, un modèle 7B-14B donne souvent un résultat similaire pour une fraction du coût matériel. Exécutez les deux sur vos propres prompts avant d'investir dans du matériel 70B.",
            },
            {
              q: "Puis-je faire du fine-tuning d'un modèle 70B sur du matériel grand public ?",
              a: "Seulement avec QLoRA. QLoRA garde le modèle de base en 4 bits (environ 35 Go) et entraîne de petits adaptateurs ; Answer.AI a montré FSDP+QLoRA entraînant un modèle 70B sur deux GPU gaming de 24 Go. Un fine-tuning complet en 16 bits demande de l'ordre de 1 To de mémoire et relève d'un serveur multi-GPU. Au-delà d'exécutions QLoRA occasionnelles, louer un GPU cloud de 80 Go est généralement plus pratique.",
            },
            {
              q: "Quelle est la meilleure quantification pour un 70B sur Apple Silicon ?",
              a: "Sur un Mac de 64 Go, utilisez Q4_K_M (43 Go). Par défaut, macOS limite la mémoire adressable par le GPU à environ 75 % de la RAM (environ 48 Go sur un Mac de 64 Go) : Q5_K_M (50 Go) ne fonctionne donc qu'après avoir relevé la limite avec sysctl iogpu.wired_limit_mb, et laisse peu de marge. Avec 96-128 Go, Q8_0 (75 Go) est le choix quasi sans perte, à environ la moitié de la vitesse de Q4_K_M, car chaque token lit deux fois plus d'octets.",
            },
            {
              q: "Ollama choisit-il automatiquement la meilleure quantification ?",
              a: "Non. ollama run llama3.3:70b télécharge le Q4_K_M par défaut (43 Go). Nommez le tag pour un autre niveau, par exemple ollama run llama3.3:70b-instruct-q5_K_M ou ollama run llama3.3:70b-instruct-q8_0. Exécutez ollama ps après le chargement : la colonne PROCESSOR indique quelle part du modèle tourne sur GPU ou sur CPU.",
            },
            {
              q: "Un iPhone ou un portable peut-il exécuter un modèle 70B ?",
              a: "Pas un iPhone : les iPhone actuels ont 8-12 Go de RAM, alors qu'un modèle 70B en Q4_K_M en demande environ 43 Go ; les téléphones exécutent donc des modèles de 1B-8B. Les portables ne le peuvent qu'avec 64 Go ou plus de mémoire unifiée (configurations haut de gamme de MacBook Pro) ou un système AMD Ryzen AI Max+ 395 avec 128 Go. Les portables gaming avec 16-24 Go de VRAM, comme un ASUS ROG Strix, relèvent du cas lent du déchargement partiel.",
            },
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            "[Ollama : tags et tailles de Llama 3.3](https://ollama.com/library/llama3.3/tags) -- Q4_K_M 43 Go, Q5_K_M 50 Go, Q8_0 75 Go, FP16 141 Go",
            "[Fiche du modèle Meta Llama 3.3 70B Instruct](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU (CoT) 86.0, HumanEval 88.4, contexte 128K, licence",
            "[Fiche du modèle Qwen2.5 72B Instruct](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 72.7B paramètres, contexte 131K avec YaRN",
            "[Fiche du modèle Mistral Large Instruct 2407](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 123B paramètres, Mistral Research License",
            "[LMSYS : analyse approfondie du NVIDIA DGX Spark](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B en FP8 à 2.7 tok/s de décodage, 273 Go/s",
            "[Apple Newsroom : Mac mini avec M6 et M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- prix, mémoire, bande passante",
            "[9to5Mac : Mac Studio avec M5 Max et M5 Ultra](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- prix, mémoire de base et maximale, bande passante",
            "[Forum développeurs NVIDIA : changement de prix du DGX Spark](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- de 3 999 $ à 4 699 $",
            "[TechnoEdge : hausse de prix du DGX Spark et modèle 64 Go](https://www.techno-edge.net/article/2026/10/08/5565.html) -- prix rapportés de 6 950 $ et 4 999 $",
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- configuration 64 Go / 1 To listée à 3 199 $',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- prix des options mémoire 48 Go et 64 Go',
            "[Answer.AI : entraîner un modèle 70B chez soi](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- FSDP + QLoRA sur deux GPU de 24 Go",
            "[llama.cpp](https://github.com/ggml-org/llama.cpp) -- documentation du déchargement GPU et de la répartition multi-GPU",
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile avec 24 Go de GDDR7, 96 Go de DDR5, coût matériel de 4 999 $',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: "Exécuter un LLM 70B en local 2026 : RAM, VRAM et vitesse",
        description: "Un modèle 70B demande ~43 Go en Q4_K_M plus le contexte. RAM, VRAM et tok/s estimés sur Mac, DGX Spark, GPU RTX et PC sans GPU, dont 256 Go de RAM.",
        url: 'https://www.promptquorum.com/fr/local-llms/70b-models-consumer-hardware',
        inLanguage: 'fr',
        datePublished: '2026-04-04',
        dateModified: '2026-10-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: 'Modèle de langage 70B' },
          { '@type': 'Thing', name: 'Inférence sur Apple Silicon' },
          { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
          { '@type': 'Thing', name: 'Déchargement de couches' },
          { '@type': 'Thing', name: 'Llama 3.3 70B' },
          { '@type': 'Thing', name: 'Qwen2.5 72B' },
          { '@type': 'Thing', name: 'NVIDIA DGX Spark' },
          { '@type': 'Thing', name: 'Apple Mac mini M5 Pro' },
          { '@type': 'Thing', name: 'Bande passante mémoire' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'llama.cpp' },
          { '@type': 'SoftwareApplication', name: 'vLLM' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'fr',
        name: "Comment exécuter un modèle 70B sur du matériel grand public avec Ollama",
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: "Vérifiez que vous disposez d'au moins 48 Go de mémoire rapide (mémoire unifiée, VRAM ou RAM) pour le modèle et le contexte",
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'Installez Ollama depuis ollama.com',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'Exécutez : ollama run llama3.3:70b',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'Vérifiez la répartition CPU/GPU avec : ollama ps',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: "Ajustez la quantification si la mémoire est juste : utilisez le tag q3_K_S, ou raccourcissez le contexte",
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'fr',
        name: "Matériel pour exécuter un LLM 70B en local 2026",
        numberOfItems: 12,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Mac Studio M5 Max (64-128 Go)',
            description: "Oui -- GPU complet. ~9-11 tok/s (estimation). Config de base : 36 Go ; 64 Go+ en option.",
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mac Studio M5 Ultra (96 Go+)',
            description: "Oui -- Q8_0 tient. ~17-21 tok/s (estimation). À partir de 5 499 $ avec 96 Go.",
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mac mini M5 Pro (64 Go)',
            description: "Oui -- juste. ~4-5 tok/s (estimation). Base à 1 699 $ = 24 Go ; 64 Go sur commande.",
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Mac mini M6 (32 Go max.)',
            description: "Non. N/D (estimation). 32 Go max. < fichier Q4 d'environ 43 Go.",
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mac Studio M2 Ultra (64 Go+, occasion)',
            description: "Oui -- GPU complet. ~12-15 tok/s (estimation). Occasion uniquement ; vérifiez la mémoire.",
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NVIDIA DGX Spark (128 Go)',
            description: "Oui -- Q8_0 tient. ~4-5 tok/s (estimation). 2.7 tok/s mesurés en FP8 ; 6 950 $ rapportés.",
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'AMD Ryzen AI Max+ 395 (128 Go)',
            description: "Oui. ~4-5 tok/s (estimation). Mini-PC et portables ; part GPU configurable.",
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '2x RTX 3090 / 4090 (48 Go)',
            description: "Oui -- juste. ~12-17 tok/s (estimation). Q4_K_M avec contexte court uniquement.",
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'RTX 5090 (32 Go) + 64 Go RAM',
            description: "Déchargement partiel. ~4-6 tok/s (estimation). ~70 % des couches sur GPU, le reste en RAM.",
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'RTX 4090 (24 Go) + 64 Go RAM',
            description: "Déchargement partiel. ~2-4 tok/s (estimation). ~55 % des couches sur GPU, le reste en RAM.",
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: 'CPU seul, DDR5 double canal',
            description: "Oui -- CPU seul. ~1-2 tok/s (estimation). Tâches batch uniquement.",
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: 'CPU seul, RAM serveur 8-12 canaux',
            description: "Oui -- CPU seul. ~5-8 tok/s (estimation). Threadripper PRO / EPYC ; 256 Go permet Q8_0.",
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: [
          {
            '@type': 'Question',
            name: "Quel matériel faut-il pour exécuter un LLM 70B en local ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Il faut environ 43 Go de mémoire rapide pour Llama 3.3 70B en Q4_K_M, plus 3-10 Go pour le contexte. Trois configurations logent tout le modèle en mémoire rapide : un Mac Apple Silicon avec 64 Go ou plus de mémoire unifiée, deux GPU NVIDIA de 24 Go (48 Go de VRAM au total), ou une machine à 128 Go de mémoire unifiée comme le NVIDIA DGX Spark ou un mini-PC AMD Ryzen AI Max+ 395. La capacité décide si le modèle tourne ; la bande passante mémoire décide à quelle vitesse. Un seul GPU de 24 Go ou un PC sans GPU peut l'exécuter, mais seulement à environ 1-4 tokens/s.",
            },
          },
          {
            '@type': 'Question',
            name: "Qu'est-ce qu'un modèle 70B ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Un modèle 70B est un grand modèle de langage d'environ 70 milliards de paramètres (poids). Llama 3.3 70B en compte 70.6 milliards et Qwen2.5 72B 72.7 milliards. La taille du fichier découle du nombre de paramètres : environ 141 Go en 16 bits, 75 Go en 8 bits (Q8_0) et 43 Go en 4 bits (Q4_K_M).",
            },
          },
          {
            '@type': 'Question',
            name: "De combien de VRAM ou de RAM ai-je besoin pour un modèle 70B ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Llama 3.3 70B demande 43 Go en Q4_K_M, 50 Go en Q5_K_M, 75 Go en Q8_0 et 141 Go en FP16 (tailles de la bibliothèque Ollama), plus le cache KV pour le contexte : environ 2.7 Go à 8K tokens, 10.7 Go à 32K et 43 Go à 128K. Avec 24 Go de VRAM, seule environ la moitié d'un modèle Q4_K_M tient sur le GPU, et le reste tourne depuis la RAM système.",
            },
          },
          {
            '@type': 'Question',
            name: "Quel est le matériel le moins cher capable d'exécuter un modèle 70B de façon utilisable ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Pour environ 10 tokens/s ou plus, les options pratiques sont un Mac Studio M5 Max configuré avec 64 Go ou plus (le modèle de base à 2 499 $ a 36 Go), un Mac Studio M2 Ultra d'occasion avec 64 Go ou plus, ou deux GPU d'occasion de 24 Go. L'option Apple neuve la moins chère est le Mac mini M5 Pro avec 64 Go : le modèle de base à 1 699 $ n'a que 24 Go, et les tests situent les configurations de 64 Go à environ 2 700-3 200 $. Sa bande passante de 307 Go/s le limite à environ 4-5 tokens/s. Les prix des GPU sont volatils : des annonces de RTX 5090 ont été rapportées bien au-dessus du prix de lancement de 1 999 $ en octobre 2026, vérifiez donc les prix en vigueur.",
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je exécuter un modèle 70B sur un seul GPU de 24 Go ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui, mais lentement. Une carte de 24 Go comme la RTX 4090 contient environ 55 % d'un modèle 70B en Q4_K_M ; les couches restantes tournent depuis la RAM système à la vitesse mémoire du CPU, ce qui donne environ 2-4 tokens/s avec de la DDR5 rapide. Pour une vitesse interactive, utilisez un modèle plus petit (un 27B-34B tient dans 24 Go, par exemple Qwen3.8-27B), deux GPU ou une machine à mémoire unifiée de 64 Go ou plus.",
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je exécuter un modèle 70B sur deux GPU ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Oui. Deux cartes de 24 Go (RTX 3090 ou 4090) offrent 48 Go de VRAM, ce qui contient un modèle 70B en Q4_K_M (43 Go) avec un contexte court de quelques milliers de tokens. Ollama et llama.cpp répartissent les couches sur les deux cartes automatiquement ou avec --tensor-split. Comptez à titre d'estimation environ 12-17 tokens/s, car chaque token traverse les deux cartes en séquence.",
            },
          },
          {
            '@type': 'Question',
            name: "Quel est le meilleur moteur d'inférence pour exécuter des LLM 70B sur du matériel multi-GPU ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Pour un seul utilisateur, Ollama ou llama.cpp avec répartition par couches est le plus simple et fonctionne avec des GPU mixtes. Pour plusieurs utilisateurs ou agents simultanés, vLLM avec --tensor-parallel-size réglé sur le nombre de GPU, ou SGLang, offre un débit total bien supérieur car il regroupe les requêtes par lots ; tous deux préfèrent des GPU identiques et des poids AWQ, GPTQ ou FP8. TensorRT-LLM donne le débit NVIDIA le plus élevé mais demande une étape de construction du moteur.",
            },
          },
          {
            '@type': 'Question',
            name: "De combien de mémoire GPU un système multi-agents avec des backends 70B a-t-il besoin ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Comptez les poids une seule fois plus un cache KV par session simultanée. Llama 3.3 70B en Q4_K_M demande environ 43 Go pour les poids ; chaque session active ajoute environ 0.33 Mo par token de contexte en FP16. Quatre agents à 32K tokens chacun demandent donc environ 43 Go + 43 Go = 86 Go. Servez tous les agents depuis un serveur partagé (vLLM, SGLang ou llama.cpp avec emplacements parallèles) plutôt que de charger une copie du modèle par agent.",
            },
          },
          {
            '@type': 'Question',
            name: "256 Go de RAM aident-ils l'inférence CPU d'un modèle 70B ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Ils aident sur la capacité, pas sur la vitesse. 256 Go permettent de charger le Q8_0 (75 Go) ou le FP16 (141 Go) avec un long contexte, mais la vitesse de décodage est limitée par les canaux mémoire : environ 0.5-1.5 token/s sur un PC de bureau double canal, environ 3-6 sur un Threadripper PRO à 8 canaux et environ 4-8 sur un EPYC à 12 canaux, de Q4_K_M à Q8_0 (estimations dérivées de la bande passante mémoire, pas de benchmarks que nous avons réalisés).",
            },
          },
          {
            '@type': 'Question',
            name: "Le Mac mini M6 peut-il exécuter un modèle 70B ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non. Le Mac mini M6 (à partir de 899 $) plafonne à 32 Go de mémoire unifiée et 170 Go/s de bande passante, en dessous des 43 Go qu'exige un modèle 70B en Q4_K_M. Le Mac mini M5 Pro (à partir de 1 699 $, 307 Go/s, Thunderbolt 5) peut être configuré jusqu'à 64 Go ; le modèle de base à 1 699 $ a 24 Go, commandez donc la configuration de 64 Go sur commande. Les deux sont sortis le 22 septembre 2026.",
            },
          },
          {
            '@type': 'Question',
            name: "Qu'est-ce que le NVIDIA DGX Spark et vaut-il le coup pour l'inférence 70B ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Le DGX Spark est l'ordinateur d'IA de bureau compact de NVIDIA, avec 128 Go de mémoire unifiée LPDDR5x à 273 Go/s. Il charge des modèles 70B en Q8_0 mais reste limité par la bande passante : LMSYS a mesuré 2.7 tokens/s de décodage pour Llama 3.1 70B en FP8. Il convient mieux au travail sous CUDA, au fine-tuning et aux gros modèles MoE qu'au chat rapide avec un 70B dense. NVIDIA a relevé la Founders Edition de 3 999 $ à 4 699 $ en février 2026 et un prix de 6 950 $ a été rapporté en octobre 2026, ainsi qu'une version de 64 Go à 4 999 $ chez des partenaires.",
            },
          },
          {
            '@type': 'Question',
            name: "Comment la qualité d'un 70B local se compare-t-elle aux modèles cloud ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Meta annonce 86.0 sur MMLU (CoT) et 88.4 sur HumanEval pour Llama 3.3 70B Instruct. Les modèles cloud de pointe publiés depuis obtiennent de meilleurs scores sur les tâches de raisonnement, tandis que les modèles 70B locaux restent compétitifs pour le résumé, l'extraction, la rédaction et la génération de code courante. Testez les deux sur vos propres prompts, par exemple avec [PromptQuorum](/fr), avant d'investir dans du matériel 70B.",
            },
          },
          {
            '@type': 'Question',
            name: "Quelle quantité d'électricité l'exécution d'un modèle 70B consomme-t-elle ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Un GPU consomme jusqu'à sa puissance de carte pendant la génération : 350 W pour une RTX 3090, 450 W pour une RTX 4090 et 575 W pour une RTX 5090. À 0.15 $ par kWh, une RTX 4090 à pleine charge coûte environ 0.07 $ par heure pour le GPU seul. Apple Silicon et les machines à mémoire unifiée consomment beaucoup moins pour le même modèle, mais à une vitesse inférieure.",
            },
          },
          {
            '@type': 'Question',
            name: "Les modèles 70B valent-ils le coup face aux modèles plus petits pour les tâches quotidiennes ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Pour le raisonnement complexe, l'analyse de longs documents et la rédaction nuancée, généralement oui. Pour le résumé simple, les questions-réponses et la classification, un modèle 7B-14B donne souvent un résultat similaire pour une fraction du coût matériel. Exécutez les deux sur vos propres prompts avant d'investir dans du matériel 70B.",
            },
          },
          {
            '@type': 'Question',
            name: "Puis-je faire du fine-tuning d'un modèle 70B sur du matériel grand public ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Seulement avec QLoRA. QLoRA garde le modèle de base en 4 bits (environ 35 Go) et entraîne de petits adaptateurs ; Answer.AI a montré FSDP+QLoRA entraînant un modèle 70B sur deux GPU gaming de 24 Go. Un fine-tuning complet en 16 bits demande de l'ordre de 1 To de mémoire et relève d'un serveur multi-GPU. Au-delà d'exécutions QLoRA occasionnelles, louer un GPU cloud de 80 Go est généralement plus pratique.",
            },
          },
          {
            '@type': 'Question',
            name: "Quelle est la meilleure quantification pour un 70B sur Apple Silicon ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sur un Mac de 64 Go, utilisez Q4_K_M (43 Go). Par défaut, macOS limite la mémoire adressable par le GPU à environ 75 % de la RAM (environ 48 Go sur un Mac de 64 Go) : Q5_K_M (50 Go) ne fonctionne donc qu'après avoir relevé la limite avec sysctl iogpu.wired_limit_mb, et laisse peu de marge. Avec 96-128 Go, Q8_0 (75 Go) est le choix quasi sans perte, à environ la moitié de la vitesse de Q4_K_M, car chaque token lit deux fois plus d'octets.",
            },
          },
          {
            '@type': 'Question',
            name: "Ollama choisit-il automatiquement la meilleure quantification ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non. ollama run llama3.3:70b télécharge le Q4_K_M par défaut (43 Go). Nommez le tag pour un autre niveau, par exemple ollama run llama3.3:70b-instruct-q5_K_M ou ollama run llama3.3:70b-instruct-q8_0. Exécutez ollama ps après le chargement : la colonne PROCESSOR indique quelle part du modèle tourne sur GPU ou sur CPU.",
            },
          },
          {
            '@type': 'Question',
            name: "Un iPhone ou un portable peut-il exécuter un modèle 70B ?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Pas un iPhone : les iPhone actuels ont 8-12 Go de RAM, alors qu'un modèle 70B en Q4_K_M en demande environ 43 Go ; les téléphones exécutent donc des modèles de 1B-8B. Les portables ne le peuvent qu'avec 64 Go ou plus de mémoire unifiée (configurations haut de gamme de MacBook Pro) ou un système AMD Ryzen AI Max+ 395 avec 128 Go. Les portables gaming avec 16-24 Go de VRAM, comme un ASUS ROG Strix, relèvent du cas lent du déchargement partiel.",
            },
          },
        ],
      },
    },
    ja: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: 'Best Models',
      title: '70B LLMをローカルで動かす2026年版：ハード別のRAM・VRAM・速度',
      dateModified: '2026-10-29',
      seoTitle: '70B LLMの必要スペック2026：RAM・VRAM・速度',
      intro: '70Bモデルをローカルで動かすには、Q4_K_Mで約43GBの高速メモリと、コンテキスト用に3～10GBが必要です。統合メモリ64GB以上のMac、24GBのGPU2枚、あるいは128GB統合メモリ機であれば、モデル全体を高速メモリに載せられます。速度はメモリ帯域幅で決まり、デスクトップCPUの1～2トークン/秒から、Mac Studio M5 Maxのおよそ10トークン/秒まで幅があります。Llama 3.3 70BとQwen2.5 72Bが、70B級の主要なDenseモデルです。',
      metaDescription: '70BモデルはQ4_K_Mで約43GB＋コンテキスト分が必要です。Mac・DGX Spark・RTX GPU・CPUのみのPC（RAM 256GB含む）で、RAM・VRAM・推定tok/sを比較します。',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-ja.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**70Bモデルには、Q4_K_M（Llama 3.3 70B）で約43GBのメモリとコンテキスト用の3～10GBが必要で、速度を決めるのはメモリ容量ではなくメモリ帯域幅です。64GB以上のMac、24GBのGPU2枚、または128GB統合メモリ機なら、モデル全体を高速メモリに載せられます。24GBのGPU1枚やCPUのみのPCでも動きますが、速度は約1～4トークン/秒です。**',
      audience: 'OllamaやLM Studioに慣れており、ローカルLLMのワークフローを最適化したい開発者',
      readTime: '11分',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B ローカルLLM コンシューマーハードウェア',
      toc: [
        {
          label: '重要ポイント',
          anchor: '#key-takeaways',
        },
        {
          label: '70Bモデルとは？',
          anchor: '#what-is-70b',
        },
        {
          label: '必要なハードウェアは？',
          anchor: '#what-hardware',
        },
        {
          label: '量子化別のメモリ要件',
          anchor: '#ram-requirements',
        },
        {
          label: 'コンテキストとKVキャッシュのメモリ',
          anchor: '#context-memory',
        },
        {
          label: 'メモリ帯域幅が速度を決める理由',
          anchor: '#memory-bandwidth',
        },
        {
          label: 'Apple Silicon',
          anchor: '#apple-silicon',
        },
        {
          label: 'NVIDIA DGX Sparkと統合メモリ搭載PC',
          anchor: '#dgx-spark',
        },
        {
          label: 'NVIDIA GPU＋レイヤーオフロード',
          anchor: '#nvidia-layer-offloading',
        },
        {
          label: 'マルチGPU向けランタイム',
          anchor: '#multi-gpu-runtimes',
        },
        {
          label: 'CPUのみの70B推論',
          anchor: '#cpu-only',
        },
        {
          label: '70B級のMoEモデル',
          anchor: '#moe-models',
        },
        {
          label: 'どの70Bモデルを使うべきか',
          anchor: '#which-model',
        },
        {
          label: '70Bモデルのファインチューニング',
          anchor: '#fine-tuning',
        },
        {
          label: '地域ごとの事情',
          anchor: '#regional-context',
        },
        {
          label: 'よくある間違い',
          anchor: '#common-mistakes',
        },
        {
          label: '関連記事',
          anchor: '#related-reading',
        },
        {
          label: 'FAQ',
          anchor: '#faq',
        },
        {
          label: '出典',
          anchor: '#sources',
        },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: '70Bモデルには、Q4_K_Mで約43GBのメモリとコンテキスト用の3～10GBが必要で、生成速度はおおよそ「メモリ帯域幅÷モデルサイズ」トークン/秒になります。そのため、64GB以上のMac、24GBのGPU2枚、128GB統合メモリ機なら高速メモリ上で動作し、24GBのGPU1枚では2～4トークン/秒にとどまります。',
            },
            {
              type: 'plain-terms',
              text: '70Bモデルは、約700億個の調整可能な数値を持つ非常に大きなAIモデルです。読み込みには約43GBのメモリが必要で、応答の速さはそのメモリをどれだけ速く読み出せるかで決まります。統合メモリが大きいMacか、大型グラフィックスカード2枚が快適な選択肢です。グラフィックスカード1枚の普通のPCでも動きますが、応答は遅くなります。',
            },
          ],
          items: [
            'Q4_K_Mでのメモリ：Llama 3.3 70Bは43GB、Q5_K_Mは50GB、Q8_0は75GB、FP16は141GBです。コンテキストは8Kトークンあたり約2.7GB加わります。',
            '**速度の目安**：トークン/秒の上限は「メモリ帯域幅÷モデルサイズ」で決まり、実際の速度は通常その上限の60～80%です。614GB/sの帯域幅で43GBなら、上限は約14 tok/secです。',
            '**コンシューマー向けで最速**：64GB以上に構成したMac Studio M5 Max（約9～11 tok/sec）、または24GBのGPU2枚（約12～17 tok/sec）です。Mac Studio M5 Ultraは推定で17～21 tok/secに達します。',
            '**Mac mini**：$1,699のM5 Proモデルは24GBです。64GBは受注生産のアップグレードで、約4～5 tok/secになります。M6のMac mini（最大32GB）では70Bは動きません。',
            '**DGX Spark**：128GBですが帯域幅は273GB/sのみで、LMSYSは70BのFP8で2.7 tok/secを計測しました。高速なDense 70Bのチャットではなく、CUDAと大型MoEモデル向けの製品です。',
            '**24GBのGPU1枚、またはCPUのみ**：RTX 4090と高速なDDR5で約2～4 tok/sec、デスクトップCPUでは1～2 tok/secです。256GBのRAMで増えるのは容量（Q8_0、FP16、長いコンテキスト）であり、速度ではありません。',
            'Qwen3 72Bというモデルは存在せず、72BのモデルはQwen2.5 72Bです。新しい大型オープンモデルの多くは、Mixture-of-Experts（MoE）です。',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: '70Bモデルとは？',
          content: [
            '**70Bモデルとは、約700億個のパラメータ（ネットワークを構成する学習済みの重み）を持つ大規模言語モデルのことです。**「B」はbillion（10億）を表します。Llama 3.3 70Bのパラメータ数は706億、Qwen2.5 72Bは727億です。',
            'メモリ量は「パラメータ数×1重みあたりのバイト数」で決まります。16ビットの重みは1つあたり2バイト（約141GB）、8ビット（Q8_0）は約1バイト（75GB）、4ビットのQ4_K_Mは約0.6バイト（43GB）です。7B～14Bのモデルは普通のノートPCに収まるのに対し、70Bは、コンシューマー向けハードウェアで初めて40GB以上の高速メモリが必要になるサイズです。',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: '70Bのローカル LLM を動かすには、どんなハードウェアが必要ですか？',
          content: [
            '**モデルに約43GB、コンテキストに3～10GBの高速メモリが必要です。置き場所はGPUのVRAM、Appleの統合メモリ、システムRAMのいずれかで、メモリが速いほどモデルの生成も速くなります。**',
            '以下の速度は、短いコンテキストで1人がチャットする場合の推定値で、メモリ帯域幅から算出しています（「メモリ帯域幅が速度を決める理由」を参照）。上限値を一般的な効率60～80%に割り引いたもので、PromptQuorumが実施したベンチマークではありません。例外はDGX Sparkの数値で、第三者が計測したものです。',
          ],
          rows: [
            {
              'ハードウェア': 'Mac Studio M5 Max（64～128GB）',
              '70B Q4は載る？': 'はい -- フルGPU',
              'メモリ帯域幅': '最大614GB/s',
              '推定速度（Q4_K_M）': '約9～11 tok/s',
              '備考': '標準構成は36GB。64GB以上は有償アップグレード',
            },
            {
              'ハードウェア': 'Mac Studio M5 Ultra（96GB以上）',
              '70B Q4は載る？': 'はい -- Q8_0も載る',
              'メモリ帯域幅': '最大1.2TB/s',
              '推定速度（Q4_K_M）': '約17～21 tok/s',
              '備考': '96GB構成が$5,499から',
            },
            {
              'ハードウェア': 'Mac mini M5 Pro（64GB）',
              '70B Q4は載る？': 'はい -- ぎりぎり',
              'メモリ帯域幅': '307GB/s',
              '推定速度（Q4_K_M）': '約4～5 tok/s',
              '備考': '$1,699の標準は24GB。64GBは受注生産',
            },
            {
              'ハードウェア': 'Mac mini M6（最大32GB）',
              '70B Q4は載る？': 'いいえ',
              'メモリ帯域幅': '170GB/s',
              '推定速度（Q4_K_M）': '該当なし',
              '備考': '最大32GBでは約43GBのQ4ファイルに足りない',
            },
            {
              'ハードウェア': 'Mac Studio M2 Ultra（64GB以上・中古）',
              '70B Q4は載る？': 'はい -- フルGPU',
              'メモリ帯域幅': '800GB/s',
              '推定速度（Q4_K_M）': '約12～15 tok/s',
              '備考': '中古市場のみ。メモリ容量を要確認',
            },
            {
              'ハードウェア': 'NVIDIA DGX Spark（128GB）',
              '70B Q4は載る？': 'はい -- Q8_0も載る',
              'メモリ帯域幅': '273GB/s',
              '推定速度（Q4_K_M）': '約4～5 tok/s',
              '備考': 'FP8の実測は2.7 tok/s。報じられた価格は$6,950',
            },
            {
              'ハードウェア': 'AMD Ryzen AI Max+ 395（128GB）',
              '70B Q4は載る？': 'はい',
              'メモリ帯域幅': '256GB/s',
              '推定速度（Q4_K_M）': '約4～5 tok/s',
              '備考': 'ミニPC・ノートPC。GPU割当は設定可能',
            },
            {
              'ハードウェア': 'RTX 3090 / 4090 2枚（48GB）',
              '70B Q4は載る？': 'はい -- ぎりぎり',
              'メモリ帯域幅': '1枚あたり936～1,008GB/s',
              '推定速度（Q4_K_M）': '約12～17 tok/s',
              '備考': 'Q4_K_Mと短いコンテキストのみ',
            },
            {
              'ハードウェア': 'RTX 5090（32GB）＋64GB RAM',
              '70B Q4は載る？': '一部オフロード',
              'メモリ帯域幅': 'VRAM 1,792GB/s',
              '推定速度（Q4_K_M）': '約4～6 tok/s',
              '備考': '層の約70%がGPU、残りはシステムRAM',
            },
            {
              'ハードウェア': 'RTX 4090（24GB）＋64GB RAM',
              '70B Q4は載る？': '一部オフロード',
              'メモリ帯域幅': 'VRAM 1,008GB/s',
              '推定速度（Q4_K_M）': '約2～4 tok/s',
              '備考': '層の約55%がGPU、残りはシステムRAM',
            },
            {
              'ハードウェア': 'Olares One（RTX 5090 Mobile 24GB＋96GB RAM）',
              '70B Q4は載る？': '一部オフロード',
              'メモリ帯域幅': 'VRAMは非公表 / RAM 約90GB/s',
              '推定速度（Q4_K_M）': '約2～4 tok/s',
              '備考': 'GDDR7 VRAM 24GB。ハードウェア価格$4,999',
            },
            {
              'ハードウェア': 'CPUのみ（デュアルチャネルDDR5）',
              '70B Q4は載る？': 'はい -- CPUのみ',
              'メモリ帯域幅': '約90GB/s',
              '推定速度（Q4_K_M）': '約1～2 tok/s',
              '備考': 'バッチ処理向け',
            },
            {
              'ハードウェア': 'CPUのみ（8～12チャネルのサーバーRAM）',
              '70B Q4は載る？': 'はい -- CPUのみ',
              'メモリ帯域幅': '350～460GB/s',
              '推定速度（Q4_K_M）': '約5～8 tok/s',
              '備考': 'Threadripper PRO / EPYC。256GBならQ8_0も可',
            },
          ],
          columns: [
            'ハードウェア',
            '70B Q4は載る？',
            'メモリ帯域幅',
            '推定速度（Q4_K_M）',
            '備考',
          ],
          callouts: [
            { type: 'insight', text: '**Olares One**（[olares.com/one](https://www.olares.com/one)）は、RTX 5090 Mobile（GDDR7 VRAM 24GB）、Intel Core Ultra 9 275HX、DDR5-5600 RAM 96GB（Olaresによれば128GBまで増設可）を搭載したコンパクトなAIデスクトップです。70Bモデルでは上のRTX 4090の行と同様に動作し、Q4_K_Mモデルの約55%がVRAMに載り、残りはシステムRAMから読み込まれるため、速度は約2～4 tokens/sが目安です（推定値であり、ベンチマークではありません）。96GBのRAMが増やすのは容量であって速度ではなく、Q8_0（75GB）もコンテキスト分の余裕を残して載ります。Olaresが示すハードウェア価格は$4,999で、70Bのtokens/sは公表されていません。' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: '量子化レベルごとに、70Bモデルに必要なRAMやVRAMはどれくらいですか？',
          content: '以下のサイズは、OllamaライブラリにあるLlama 3.3 70Bのファイルのものです。ほかの70Bモデルでは数%異なります。数値は重みのみなので、次のセクションのコンテキスト用メモリを加えてください。',
          rows: [
            {
              '量子化': 'FP16（フル精度）',
              'メモリ（重み）': '約141GB',
              '品質': '基準品質',
              '実用性': '192GB以上のMac Ultraか256GB RAMのサーバー',
            },
            {
              '量子化': 'Q8_0',
              'メモリ（重み）': '約75GB',
              '品質': 'ほぼ劣化なし',
              '実用性': '統合メモリ96～128GBか128GB RAM',
            },
            {
              '量子化': 'Q6_K',
              'メモリ（重み）': '約58GB',
              '品質': 'Q8_0にごく近い',
              '実用性': '72～96GBのマシン',
            },
            {
              '量子化': 'Q5_K_M',
              'メモリ（重み）': '約50GB',
              '品質': '劣化は最小限',
              '実用性': '64GBのMacでGPU上限を引き上げれば可。余裕なし',
            },
            {
              '量子化': 'Q4_K_M',
              'メモリ（重み）': '約43GB',
              '品質': '劣化は小さい -- 標準',
              '実用性': 'はい -- 64GBのMacか48GBのGPU2枚',
            },
            {
              '量子化': 'Q3_K_S',
              'メモリ（重み）': '約31GB',
              '品質': '中程度の劣化',
              '実用性': 'はい -- 40～48GBのマシン',
            },
            {
              '量子化': 'Q2_K',
              'メモリ（重み）': '約26GB',
              '品質': '劣化が大きい',
              '実用性': '非推奨',
            },
          ],
          columns: [
            '量子化',
            'メモリ（重み）',
            '品質',
            '実用性',
          ],
        },
        contextMemory: {
          id: 'context-memory',
          title: 'コンテキストによって、70Bモデルのメモリはどれだけ増えますか？',
          content: [
            '**コンテキストは重みとは別にメモリを消費します。Llama 3.3 70Bは、FP16でトークンあたり約0.33MBのKVキャッシュを保持し、これは8Kトークンで約2.7GB、32Kで10.7GB、128Kで43GBに相当します。**この値はモデルのアーキテクチャから求められます。80層×8個のキー・バリューヘッド×128次元×2（キーとバリュー）×2バイト＝トークンあたり327,680バイトです。',
            '同時セッションはそれぞれ独自のKVキャッシュを持ち、重みは共有されます。32Kトークンのエージェント4つからなるマルチエージェントシステムは、重みの約43GBに加えて、キャッシュ約43GBが必要です。Ollamaでフラッシュアテンションと8ビットKVキャッシュを有効にする（OLLAMA_FLASH_ATTENTION=1とOLLAMA_KV_CACHE_TYPE=q8_0）と、キャッシュはおよそ半分になります。',
          ],
          rows: [
            {
              'コンテキスト長': '8Kトークン',
              'KVキャッシュ（FP16）': '約2.7GB',
              'Q4_K_Mとの合計': '約46GB',
            },
            {
              'コンテキスト長': '32Kトークン',
              'KVキャッシュ（FP16）': '約10.7GB',
              'Q4_K_Mとの合計': '約54GB',
            },
            {
              'コンテキスト長': '128Kトークン',
              'KVキャッシュ（FP16）': '約43GB',
              'Q4_K_Mとの合計': '約86GB',
            },
          ],
          columns: [
            'コンテキスト長',
            'KVキャッシュ（FP16）',
            'Q4_K_Mとの合計',
          ],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: 'なぜメモリ帯域幅が70Bモデルの速度を決めるのですか？',
          content: [
            '**生成する各トークンで、モデルの重み全体を1回ずつ読み出すため、デコード速度の上限は「メモリ帯域幅÷モデルサイズ」で決まります。**帯域幅614GB/sで43GBのQ4_K_Mモデルを動かす場合、上限は約14トークン/秒で、実際の速度は通常その上限の60～80%です。',
            '同じ法則から、メモリが大きいことと速いことは別だとわかります。128GBのDGX Sparkは273GB/sで、Q4_K_Mでの上限は約6トークン/秒です。LMSYSは、Llama 3.1 70BのFP8（約70GB、上限3.9）で2.7トークン/秒を計測しました。容量はモデルが動くかどうかを決め、帯域幅は速度を決めます。プロンプト処理（プリフィル）は計算律速で、挙動が異なります。',
          ],
          rows: [
            {
              'メモリ': 'デュアルチャネルDDR5-5600',
              '帯域幅': '約90GB/s',
              '43GBでの上限': '約2 tok/s',
            },
            {
              'メモリ': 'AMD Ryzen AI Max+ 395',
              '帯域幅': '256GB/s',
              '43GBでの上限': '約6 tok/s',
            },
            {
              'メモリ': 'NVIDIA DGX Spark',
              '帯域幅': '273GB/s',
              '43GBでの上限': '約6 tok/s',
            },
            {
              'メモリ': 'Apple M5 Pro',
              '帯域幅': '307GB/s',
              '43GBでの上限': '約7 tok/s',
            },
            {
              'メモリ': 'Apple M5 Max',
              '帯域幅': '最大614GB/s',
              '43GBでの上限': '約14 tok/s',
            },
            {
              'メモリ': 'Apple M2 Ultra',
              '帯域幅': '800GB/s',
              '43GBでの上限': '約19 tok/s',
            },
            {
              'メモリ': 'Apple M5 Ultra',
              '帯域幅': '最大1.2TB/s',
              '43GBでの上限': '約28 tok/s',
            },
          ],
          columns: [
            'メモリ',
            '帯域幅',
            '43GBでの上限',
          ],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: '70Bモデルに Apple Silicon は適していますか？',
          content: [
            '**Apple Siliconは、CPUとGPUが1つの統合メモリプールを共有するため、70Bモデル全体をGPUがアクセスできるメモリに載せる最も簡単な方法です。**64GB以上のMacなら、層のオフロードなしでQ4_K_Mが動き、速度はチップの帯域幅で決まります。目安は、M5 Maxでおよそ9～11トークン/秒、中古のM2 Ultraで12～15トークン/秒です（推定値）。M5チップでの70Bのベンチマークは、まだ公開されたものを見つけられていません。',
            'Appleは2026年8月25日にM5 MaxとM5 Ultraを搭載したMac Studioを発表し、どちらも2026年9月22日に発売されました。M5 Maxは36GBの$2,499から、最大128GB・最大614GB/sまで構成でき、70B向けには64GB以上に構成してください。M5 Ultraは96GBの$5,499から、最大512GB・最大1.2TB/sまで構成でき、Q8_0も余裕で動かせます。512GB構成は10月下旬の到着と案内されていました。',
            '**Mac mini M5 Proは$1,699からですが、メモリは64GBではなく24GBです。**64GBの受注生産構成（307GB/s、Thunderbolt 5）ならQ4_K_Mの70Bモデルを保持できますが、生成は約4～5トークン/秒にとどまり、レビューではCPUやストレージにより約$2,700～$3,200とされています。標準のMac mini M6（$899）は最大32GB・170GB/sで、どの量子化でも70Bモデルは動きません。',
            'macOSは既定で、GPUがアクセスできるメモリをRAMのおよそ75%（64GBのMacで約48GB）に制限します。Q5_K_M（50GB）を動かすには上限を引き上げます。たとえば64GBのMacでsudo sysctl iogpu.wired_limit_mb=57344を実行します。この設定は再起動でリセットされ、OSに残るのは約8GBだけになります。',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: '70Bモデルに NVIDIA DGX Spark（または128GBのStrix Halo搭載PC）は適していますか？',
          content: [
            '**NVIDIA DGX Sparkは、GB10 Grace Blackwell Superchipを搭載し、CUDAに対応した、128GBの統合LPDDR5xメモリ（273GB/s）を備えるコンパクトなデスクトップAIコンピューターです。**Q8_0（75GB）でも70Bモデルを読み込めますが、生成は帯域幅に制限されます。LMSYSはLlama 3.1 70BのFP8でデコード2.7トークン/秒を計測しており、コミュニティによるQ4_K_Mでのllama.cppの実行は4～5トークン/秒の範囲と報告されています。',
            '価格は大きく変動しています。NVIDIAは2026年2月、メモリの供給制約を理由にFounders Editionを$3,999から$4,699に引き上げ、2026年10月には$6,950という価格が報じられました。あわせて、2026年10月23日からパートナー経由で64GB版が$4,999で販売されると報じられています。購入前に最新の価格を確認してください。',
            'AMD Ryzen AI Max+ 395（「Strix Halo」）搭載のミニPCやノートPCは、256GB/sの128GB LPDDR5Xを備えており、帯域幅は同クラスです。Dense 70Bモデルの推定速度も同程度の約4～5トークン/秒です。どちらのプラットフォームも、Dense 70Bのチャットよりも、MoEモデル（後述）やCUDA・ファインチューニング用途に向いています。',
          ],
          rows: [
            {
              '仕様': 'メモリ',
              '値': '128GB統合LPDDR5x',
            },
            {
              '仕様': 'メモリ帯域幅',
              '値': '273GB/s',
            },
            {
              '仕様': 'Q8_0の70B（75GB）',
              '値': '載る',
            },
            {
              '仕様': '70Bのデコード速度（実測）',
              '値': 'FP8で2.7 tok/s（LMSYS、SGLang）',
            },
            {
              '仕様': '最大モデルサイズ',
              '値': 'FP4で約200Bパラメータ',
            },
            {
              '仕様': '価格',
              '値': '$6,950と報道。2026年2月の定価は$4,699',
            },
            {
              '仕様': 'Ollamaコマンド',
              '値': 'ollama run llama3.3:70b',
            },
          ],
          columns: [
            '仕様',
            '値',
          ],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: 'NVIDIA GPU＋レイヤーオフロードは、70Bモデルでどのように機能しますか？',
          content: [
            '**Ollamaとllama.cppは、モデルをGPUのVRAMとシステムRAMに分割します。VRAMにある層はGPUの速度で、RAMにある層はCPUのメモリ速度で動き、遅いほうが全体の速度を支配します。**RTX 4090（24GB）にはQ4_K_Mの70Bモデルの約55%が載り、残りは約90GB/sのDDR5から読み出されるため、生成は約2～4トークン/秒に制限されます。RTX 5090（32GB）には約70%が載り、推定4～6トークン/秒に達します。',
            'Ollamaは自動的にオフロードするため、フラグは不要です。ollama psを実行すると分割状況を確認できます（PROCESSOR列。例：45%/55% CPU/GPU）。llama.cppでは、-nglで層の数を指定します。',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: 'マルチGPU環境で70Bモデルを動かすのに最適な推論ランタイムはどれですか？',
          content: [
            '**1人で使うなら、層分割を使うOllamaまたはllama.cppが最も簡単なマルチGPUの方法です。複数のユーザーやエージェントが同時に使う場合は、テンソル並列を使うvLLMまたはSGLangのほうが、総スループットがはるかに高くなります。**24GBカード（RTX 3090または4090）2枚で48GBになり、Q4_K_Mと短いコンテキストには十分です。',
            '層分割は、トークンごとに1回だけカード間で活性化値を受け渡し、通常のPCIeで動作するため、異なるカードやコンシューマー向けカードの組み合わせに向いています。テンソル並列は各層を複数のGPUに分割するため、高速な接続の恩恵を受けます。RTX 3090はNVLinkブリッジに対応していますが、RTX 4090と5090は対応していません。',
          ],
          rows: [
            {
              'ランタイム': 'Ollama',
              'マルチGPU方式': '層の自動分割',
              '向いている用途': '1人利用・最も簡単な構成',
            },
            {
              'ランタイム': 'llama.cpp',
              'マルチGPU方式': '--split-mode、--tensor-split',
              '向いている用途': '異種GPU混在、GGUF量子化',
            },
            {
              'ランタイム': 'vLLM',
              'マルチGPU方式': '--tensor-parallel-size N',
              '向いている用途': '多数のユーザー・エージェント。AWQ/GPTQ/FP8',
            },
            {
              'ランタイム': 'SGLang',
              'マルチGPU方式': 'テンソル並列',
              '向いている用途': 'プロンプト先頭を共有するエージェント',
            },
            {
              'ランタイム': 'TensorRT-LLM',
              'マルチGPU方式': 'テンソル/パイプライン並列',
              '向いている用途': 'NVIDIA最高スループット。エンジンのビルドが必要',
            },
          ],
          columns: [
            'ランタイム',
            'マルチGPU方式',
            '向いている用途',
          ],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: 'CPUのみの70B推論は実用的ですか？256GBのRAMは役立ちますか？',
          content: [
            '**CPUのみの70B推論は、メモリ帯域幅で制限されます。デュアルチャネルのデスクトップ用DDR5（約90GB/s）ではQ4_K_Mで約1～2トークン/秒で、RAM容量を増やしても速くなりません。**1.5トークン/秒では、200語の返答（約270トークン）に約3分かかります。',
            '256GBのRAMで変わるのは、何が載るかであり、速度ではありません。長いコンテキストでもQ8_0（75GB）やFP16（141GB）を保持できます。速度はメモリチャネル数で決まり、8チャネルのThreadripper PROや12チャネルのEPYCサーバーは、デスクトップの3～5倍の帯域幅があります。大容量DIMMを4枚挿したデスクトップ用ボードは、2枚のときよりメモリ速度が下がることが多くあります。CPUでのプロンプト処理も、長い入力では遅くなります。',
            '以下の推定値は、帯域幅の法則を効率70%で適用したもので、実測のベンチマークではありません。',
          ],
          rows: [
            {
              'CPU / RAM構成': 'デスクトップ、2chのDDR5-5600',
              '帯域幅': '約90GB/s',
              'Q4_K_M（43GB）': '約1～1.5 tok/s',
              'Q8_0（75GB）': '約0.6～0.9 tok/s',
              'FP16（141GB）': '約0.3～0.5 tok/s',
            },
            {
              'CPU / RAM構成': 'Threadripper PRO、8chのDDR5-5600',
              '帯域幅': '約358GB/s',
              'Q4_K_M（43GB）': '約5～6 tok/s',
              'Q8_0（75GB）': '約3～3.5 tok/s',
              'FP16（141GB）': '約1.5～1.8 tok/s',
            },
            {
              'CPU / RAM構成': 'EPYC、12chのDDR5-4800',
              '帯域幅': '約461GB/s',
              'Q4_K_M（43GB）': '約7～8 tok/s',
              'Q8_0（75GB）': '約4～4.5 tok/s',
              'FP16（141GB）': '約2～2.5 tok/s',
            },
          ],
          columns: [
            'CPU / RAM構成',
            '帯域幅',
            'Q4_K_M（43GB）',
            'Q8_0（75GB）',
            'FP16（141GB）',
          ],
        },
        moe: {
          id: 'moe-models',
          title: '70B級のMoEモデルは、ハードウェアの考え方を変えますか？',
          content: [
            '**Mixture-of-Experts（MoE）モデルは、全パラメータ分のメモリが必要ですが、トークンごとに読み出すのはアクティブなエキスパートだけです。そのため、同じメモリ使用量のDense 70Bモデルよりはるかに高速に生成できます。**OpenAIのgpt-oss-120bは約1,170億パラメータのうち約51億がアクティブで、MetaのLlama 4 Scoutは1,090億のうち170億がアクティブです。',
            '帯域幅の法則はアクティブな重みに適用されるため、MoEモデルは、DGX Spark、Ryzen AI Max+ 395搭載PC、64GBのMac mini M5 Proのような、大容量で帯域幅は中程度のマシンを最も有効に活用できます。そのハードウェアでDense 70Bモデルを動かす場合は、4～5トークン/秒が目安です。ダウンロードする前に、各MoEモデルのファイルサイズが手元のメモリに収まるか確認してください。',
          ],
        },
        which70b: {
          id: 'which-model',
          title: 'ローカルでは、どの70Bモデルを動かすべきですか？',
          content: [
            '**Llama 3.3 70Bは標準的なDense 70Bモデルで、Metaの報告ではMMLU（CoT）が86.0、HumanEvalが88.4、コンテキストウィンドウは128Kです。**Qwen2.5 72Bは、多言語やコーディング用途の主な代替候補です。Qwen3 72Bは存在せず（Qwen3のDenseモデルは32Bまで）、「Qwen3 72B」という言及は、Qwen2.5 72Bを指しています。',
            'コマンド：ollama run llama3.3:70b、ollama run qwen2.5:72b、ollama run deepseek-r1:70b。',
          ],
          rows: [
            {
              'モデル': 'Llama 3.3 70B',
              'パラメータ数': '70.6B（Dense）',
              'ライセンス': 'Llama 3.3 Community License',
              '向いている用途': '英語の汎用用途、指示追従',
            },
            {
              'モデル': 'Qwen2.5 72B Instruct',
              'パラメータ数': '72.7B（Dense）',
              'ライセンス': 'Qwen License',
              '向いている用途': '多言語、コーディング。YaRNで131K',
            },
            {
              'モデル': 'DeepSeek-R1-Distill-Llama-70B',
              'パラメータ数': '70B（Dense）',
              'ライセンス': 'モデルカードを参照',
              '向いている用途': '推論向け。出力が長く応答は遅くなる',
            },
            {
              'モデル': 'Mistral Large 2',
              'パラメータ数': '123B（Dense）',
              'ライセンス': 'Mistral Research License',
              '向いている用途': '研究用途のみ。Q4で約75GB',
            },
          ],
          columns: [
            'モデル',
            'パラメータ数',
            'ライセンス',
            '向いている用途',
          ],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: '70Bモデルのファインチューニングには、どんなハードウェアが必要ですか？',
          content: [
            '**70BモデルのQLoRAファインチューニングには、1回の実行あたりおよそ35～48GBのGPUメモリが必要です。FSDP＋QLoRAなら24GBのGPU2枚、または48～80GBのGPU1枚が目安です。**QLoRAはベースモデルを4ビット（約35GB）で保持し、小さなアダプターを学習します。Answer.AIは、24GBのゲーミングGPU2枚でこれを実証しました。',
            '16ビットの完全なファインチューニングでは、重み・勾配・オプティマイザの状態に1パラメータあたり約16バイトが必要で、合計は1TB規模になり、マルチGPUサーバーの領域です。たまに実行する程度なら、ハードウェアを組むより80GBのクラウドGPUを借りるほうが通常は現実的です。',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '70Bモデルをローカルで動かす：地域ごとの事情',
          content: [
            '**EU・GDPR**：70Bのローカルモデルは、多くの組織にとって、プライベートに動かせるAI品質の現実的な上限です。法務・医療・金融の文書をオンプレミスで処理すれば、プロンプトと出力が自社のインフラ内にとどまり、データ最小化と域外移転リスクの管理に役立ちます。ただし、それだけでGDPRに準拠した運用になるわけではないため、処理活動全体を評価してください。',
            'EUのサプライチェーンのハードウェアを求める組織にとって、Apple（米国）とNVIDIA（米国）はEU域外のベンダーです。Dell、HP、Lenovoは、現地サポート付きでGB10搭載システムを販売しています。モデル側では、Mistral Large 2はEUの開発元によるものですが、商用利用を認めない研究用ライセンスで公開されています。',
            '**日本**：日本語のテキストにはQwen2.5 72Bがよく選ばれます：`ollama run qwen2.5:72b`。ハードウェアとモデルのバージョンを記録しておく（読み込まれているモデルは`ollama ps`の出力で特定できます）と、日本のAI事業者ガイドラインに沿った社内ガバナンスの助けになります。',
            '**中国**：Qwen2.5 72Bを自社でホストすれば、データを自社のインフラ内にとどめられ、これは中国のデータセキュリティ法（数据安全法）に関係します。社内で提供するモデルがCAC（国家インターネット情報弁公室）の生成AI規則の対象になるかは、一般公衆に提供するかどうかで決まります。資格を持つ弁護士に確認してください。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'コンシューマー向けハードウェアで70Bモデルを動かすときの、よくある間違いは何ですか？',
          faqs: [
            {
              q: 'VRAMが24GB未満のGPUを買って、70Bのフル性能を期待する',
              a: '12GBのカードに載るのは、Q4_K_Mの70Bモデルの約4分の1です。残りはシステムRAMで動くため、速度はCPUのみに近くなります。24GBのRTX 4090でも、約2～4 tok/secにとどまります。対話に適した速度が必要なら、VRAM 48GB、64GB以上のApple Silicon Mac、またはより小さい27B～34Bのモデルを使ってください。',
            },
            {
              q: '大容量メモリの機種は速いはずだと思い込む',
              a: 'DGX SparkやRyzen AI Max+ 395搭載機は128GBありますが帯域幅は256～273GB/sしかなく、Dense 70Bモデルは約3～5 tok/secで動きます。64GBのMac Studio M5 Maxは、2倍以上の帯域幅があります。容量だけでなく、帯域幅も確認してください。',
            },
            {
              q: 'モデルのうちGPUで動く割合を確認しない',
              a: 'Ollamaは自動的にオフロードしますが、ぎりぎりの容量だと一部の層がCPUに残ることがあります。読み込み後に`ollama ps`を実行してPROCESSOR列を確認してください。目標は「100% GPU」で、CPUの割合があると出力が遅い理由がわかります。分割の状況が悪ければ、コンテキスト長を短くするか、Q3_K_Sに下げてください。',
            },
            {
              q: 'コンテキストにもメモリが必要なことを忘れる',
              a: 'Q4_K_Mの70Bモデルは43GBですが、FP16では32Kのコンテキストで約10.7GB、128Kで約43GBが加わります。重みが収まるマシンでも、長いコンテキストではメモリ不足になることがあります。8ビットのKVキャッシュか、短いコンテキストを使ってください。',
            },
            {
              q: '速度が重要なのに、Q5_K_MやQ8_0を使う',
              a: 'すべてのトークンでモデル全体を読み出すため、同じハードウェアではQ8_0（75GB）の速度はQ4_K_M（43GB）のおよそ半分になります。帯域幅に制約のあるマシン（DGX Spark、Strix Halo、Mac mini）では、チャットにはQ4_K_Mを選び、品質を優先するときだけQ8_0を使ってください。',
            },
            {
              q: '$1,699のMac mini M5 Proを注文して、70Bが動くと思い込む',
              a: '$1,699のM5 Pro Mac miniの統合メモリは24GBです。70Bモデルには64GBの受注生産構成が必要で、標準のMac mini M6（$899、最大32GB）ではまったく動きません。注文前に「M5 Pro」と64GBを確認してください。',
            },
            {
              q: 'macOS既定のGPUメモリ上限にぶつかる',
              a: 'macOSは既定で、GPUが使えるメモリをRAMのおよそ75%（64GBのMacで約48GB）に制限します。Q4_K_Mは収まりますが、Q5_K_M（50GB）は`iogpu.wired_limit_mb`を引き上げるまで収まりません。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide) -- 70Bの要件を含む、すべてのモデルサイズ向けのGPUとRAMの段階別一覧表',
            '[VRAM 24GBで70Bモデルを動かす](/ja/local-llms/run-70b-models-24gb-vram) -- GPUが1枚しかない場合の量子化とオフロードの選択肢',
            '[Apple Silicon M5 Maxで70Bモデルを動かす](/ja/local-llms/running-70b-models-apple-silicon-m5-max) -- OllamaとMLXを使ったMac向けのセットアップ',
            '[ローカルLLM向けRTX 5090とRTX 4090の比較](/ja/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- VRAM 32GBと24GBの違いがオフロードに与える影響',
            '[ローカルAIサーバーとしてのMac mini M5](/ja/local-llms/mac-mini-m5-local-ai-server) -- Mac miniのラインナップで動かせるものと動かせないもの',
            '[LLM量子化の解説](/ja/local-llms/llm-quantization-explained) -- Q4_K_MとQ8_0の違いと、高精度にした場合の速度コスト',
            '[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) -- GPUレイヤーの設定を含む完全なセットアップ',
            '[Qwen・Llama・Mistralの比較](/ja/local-llms/qwen-vs-llama-vs-mistral) -- 主要なオープンモデルファミリーの詳細比較',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'コンシューマー向けハードウェアで70Bモデルを動かすことについてのよくある質問',
          faqs: [
            {
              q: '70Bのローカルモデルを動かすには、どんなハードウェアが必要ですか？',
              a: 'Llama 3.3 70BをQ4_K_Mで動かすには、高速メモリが約43GBと、コンテキスト用に3～10GBが必要です。モデル全体を高速メモリに載せられる構成は3つあります。統合メモリ64GB以上のApple Silicon Mac、24GBのNVIDIA GPU2枚（VRAM合計48GB）、そしてNVIDIA DGX SparkやAMD Ryzen AI Max+ 395搭載ミニPCのような128GB統合メモリ機です。メモリ容量はモデルが動くかどうかを決め、メモリ帯域幅は速度を決めます。24GBのGPU1枚やCPUのみのPCでも動きますが、速度は約1～4トークン/秒にとどまります。',
            },
            {
              q: '70Bモデルとは何ですか？',
              a: '70Bモデルとは、約700億個のパラメータ（重み）を持つ大規模言語モデルのことです。Llama 3.3 70Bは706億、Qwen2.5 72Bは727億のパラメータを持ちます。ファイルサイズはパラメータ数から決まり、16ビットで約141GB、8ビット（Q8_0）で75GB、4ビット（Q4_K_M）で43GBです。',
            },
            {
              q: '70Bモデルに必要なVRAMやRAMはどれくらいですか？',
              a: 'Llama 3.3 70Bに必要なのは、Q4_K_Mで43GB、Q5_K_Mで50GB、Q8_0で75GB、FP16で141GBです（Ollamaライブラリのサイズ）。これに加えてコンテキスト用のKVキャッシュが、8Kトークンで約2.7GB、32Kで10.7GB、128Kで43GB必要です。VRAMが24GBの場合、GPUに載るのはQ4_K_Mモデルの約半分で、残りはシステムRAMで動作します。',
            },
            {
              q: '70Bモデルを実用的な速度で動かせる最も安いハードウェアは何ですか？',
              a: '約10トークン/秒以上を望むなら、現実的な選択肢は、64GB以上を搭載したMac Studio M5 Max（$2,499の標準モデルは36GB）、64GB以上の中古Mac Studio M2 Ultra、または中古の24GB GPU2枚です。新品のAppleで最も安いのは64GBのMac mini M5 Proですが、$1,699の標準モデルは24GBしかなく、64GB構成は報道で約$2,700～$3,200とされています。帯域幅307GB/sのため、速度は約4～5トークン/秒にとどまります。GPUの実売価格は変動が大きく、RTX 5090は2026年10月に定価$1,999を大きく上回る価格で出回っていると報じられました。最新の価格を確認してください。',
            },
            {
              q: '24GBのGPU1枚で70Bモデルを動かせますか？',
              a: '動かせますが、遅くなります。RTX 4090などの24GBカードに載るのは、Q4_K_Mの70Bモデルの約55%です。残りの層はシステムRAM上でCPUのメモリ速度で動くため、高速なDDR5でも約2～4トークン/秒程度です。対話に適した速度が必要なら、より小さいモデル（Qwen3.8-27Bなど27B～34Bなら24GBに収まります）、GPU2枚、または64GB以上の統合メモリ機を使ってください。',
            },
            {
              q: 'GPU2枚で70Bモデルを動かせますか？',
              a: '動かせます。24GBカード（RTX 3090または4090）2枚でVRAMは48GBになり、Q4_K_Mの70Bモデル（43GB）が数千トークン程度の短いコンテキストで収まります。Ollamaとllama.cppは、層を2枚のカードに自動的に、または--tensor-splitで分割します。すべてのトークンが2枚のカードを順番に通るため、速度は推定で約12～17トークン/秒です。',
            },
            {
              q: 'マルチGPU環境で70B LLMを動かすのに最適な推論ランタイムはどれですか？',
              a: '1人で使うなら、層分割を使うOllamaまたはllama.cppが最も簡単で、異なるGPUの混在にも対応します。複数ユーザーや複数エージェントが同時に使う場合は、--tensor-parallel-sizeをGPU枚数に設定したvLLM、またはSGLangが、リクエストをバッチ処理するため総スループットがはるかに高くなります。どちらも同一のGPUとAWQ・GPTQ・FP8の重みを前提とします。TensorRT-LLMはNVIDIAで最高のスループットを出せますが、エンジンのビルド工程が必要です。',
            },
            {
              q: '70Bをバックエンドにしたマルチエージェントシステムには、どれくらいのGPUメモリが必要ですか？',
              a: '重みは1回分、KVキャッシュは同時セッションごとに1つ見込みます。Llama 3.3 70BのQ4_K_Mは重みに約43GBが必要で、アクティブなセッションごとに、FP16でコンテキスト1トークンあたり約0.33MBが加わります。したがって、32Kトークンのエージェント4つなら、約43GB＋43GB＝86GBが必要です。エージェントごとにモデルを1つずつ読み込まず、共有サーバー（vLLM、SGLang、または並列スロットを使うllama.cpp）1台で全エージェントを処理してください。',
            },
            {
              q: 'RAM 256GBは70BモデルのCPU推論に役立ちますか？',
              a: '役立つのは容量であって、速度ではありません。256GBあれば、長いコンテキストでもQ8_0（75GB）やFP16（141GB）を読み込めますが、デコード速度はメモリチャネル数で制限されます。Q4_K_MからQ8_0の場合、デュアルチャネルのデスクトップで約0.5～1.5トークン/秒、8チャネルのThreadripper PROで約3～6、12チャネルのEPYCで約4～8です（メモリ帯域幅からの推定であり、当社が実施したベンチマークではありません）。',
            },
            {
              q: 'Mac mini M6で70Bモデルは動きますか？',
              a: '動きません。Mac mini M6（$899から）は統合メモリが最大32GB、帯域幅は170GB/sで、Q4_K_Mの70Bモデルに必要な43GBに届きません。Mac mini M5 Pro（$1,699から、307GB/s、Thunderbolt 5）は最大64GBまで構成できます。ただし$1,699の標準モデルは24GBなので、64GBの受注生産構成を注文してください。どちらも2026年9月22日に発売されました。',
            },
            {
              q: 'NVIDIA DGX Sparkとは何ですか？70B推論には向いていますか？',
              a: 'DGX Sparkは、128GBの統合LPDDR5xメモリ（273GB/s）を備えたNVIDIAのコンパクトなデスクトップAIコンピューターです。Q8_0の70Bモデルも読み込めますが、帯域幅が制約になります。LMSYSはLlama 3.1 70BのFP8でデコード2.7トークン/秒を計測しました。高速なDense 70Bのチャットよりも、CUDAを使う作業、ファインチューニング、大型のMoEモデルに向いています。NVIDIAは2026年2月にFounders Editionを$3,999から$4,699に値上げし、2026年10月には$6,950という価格が報じられました。あわせて、パートナーから64GB版が$4,999で提供されると報じられています。',
            },
            {
              q: '70Bのローカルモデルの品質は、クラウドモデルと比べてどうですか？',
              a: 'Metaは、Llama 3.3 70B InstructのMMLU（CoT）が86.0、HumanEvalが88.4と報告しています。その後に公開された最先端のクラウドモデルは、推論負荷の高いタスクでより高いスコアを出しますが、70Bのローカルモデルも、要約、情報抽出、文章の下書き、定型的なコード生成では競争力があります。70Bのハードウェアに投資する前に、たとえば[PromptQuorum](/ja)などで、自分のプロンプトを使って両方を試してください。',
            },
            {
              q: '70Bモデルを動かすと、電気代はどれくらいかかりますか？',
              a: 'GPUは生成中、ボード電力の上限まで消費します。RTX 3090は350W、RTX 4090は450W、RTX 5090は575Wです。1kWhあたり$0.15の場合、RTX 4090を全負荷で動かすとGPUだけで1時間あたり約$0.07かかります。Apple Siliconや統合メモリ機は、同じモデルでも消費電力がはるかに小さい代わりに、速度は遅くなります。',
            },
            {
              q: '日常的な作業では、小さいモデルと比べて70Bモデルは価値がありますか？',
              a: '複雑な推論、長文ドキュメントの分析、ニュアンスのある文章作成では、たいてい価値があります。単純な要約、Q&A、分類なら、7B～14Bモデルでもハードウェアコストのごく一部で同程度の出力が得られることが多いです。70Bのハードウェアに投資する前に、自分のプロンプトで両方を試してください。',
            },
            {
              q: '70Bモデルをコンシューマー向けハードウェアでファインチューニングできますか？',
              a: 'QLoRAなら可能です。QLoRAはベースモデルを4ビット（約35GB）で保持し、小さなアダプターだけを学習します。Answer.AIは、24GBのゲーミングGPU2枚でFSDP＋QLoRAにより70Bモデルを学習できることを示しました。16ビットの完全なファインチューニングには1TB規模のメモリが必要で、マルチGPUサーバーの領域です。たまにQLoRAを実行する程度を超えるなら、80GBのクラウドGPUを借りるほうが通常は現実的です。',
            },
            {
              q: 'Apple Siliconで70Bに最適な量子化はどれですか？',
              a: '64GBのMacではQ4_K_M（43GB）を使ってください。macOSは既定でGPUがアクセスできるメモリをRAMの約75%（64GBのMacで約48GB）に制限するため、Q5_K_M（50GB）はsysctl iogpu.wired_limit_mbで上限を引き上げた場合にしか動かず、余裕もほとんど残りません。96～128GBなら、Q8_0（75GB）がほぼ劣化のない選択肢ですが、すべてのトークンで読み込むバイト数が2倍になるため、速度はQ4_K_Mの約半分になります。',
            },
            {
              q: 'Ollamaは最適な量子化を自動で選んでくれますか？',
              a: 'いいえ。ollama run llama3.3:70bは、既定のQ4_K_M（43GB）をダウンロードします。ほかのレベルを使うにはタグを指定します。たとえばollama run llama3.3:70b-instruct-q5_K_Mやollama run llama3.3:70b-instruct-q8_0です。読み込み後にollama psを実行すると、PROCESSOR列でモデルのうちGPUとCPUで動いている割合を確認できます。',
            },
            {
              q: 'iPhoneやノートPCで70Bモデルは動きますか？',
              a: 'iPhoneでは動きません。現行のiPhoneのRAMは8～12GBですが、Q4_K_Mの70Bモデルには約43GBが必要なため、スマートフォンで動くのは1B～8Bのモデルです。ノートPCで動かせるのは、統合メモリ64GB以上（ハイエンドのMacBook Pro構成）か、128GBのAMD Ryzen AI Max+ 395搭載機に限られます。VRAMが16～24GBのゲーミングノート（ASUS ROG Strixなど）は、遅い一部オフロードの場合に該当します。',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: '出典',
          items: [
            '[Ollama: Llama 3.3のタグとサイズ](https://ollama.com/library/llama3.3/tags) -- Q4_K_M 43GB、Q5_K_M 50GB、Q8_0 75GB、FP16 141GB',
            '[Meta Llama 3.3 70B Instructのモデルカード](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU（CoT）86.0、HumanEval 88.4、128Kコンテキスト、ライセンス',
            '[Qwen2.5 72B Instructのモデルカード](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 727億パラメータ、YaRNで131Kコンテキスト',
            '[Mistral Large Instruct 2407のモデルカード](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 1,230億パラメータ、Mistral Research License',
            '[LMSYS: NVIDIA DGX Sparkの詳細レビュー](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B FP8のデコード2.7 tok/s、273GB/s',
            '[Apple Newsroom: M6とM5 Proを搭載したMac mini](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- 価格、メモリ、帯域幅',
            '[9to5Mac: M5 MaxとM5 Ultraを搭載したMac Studio](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- 価格、標準メモリと最大メモリ、帯域幅',
            '[NVIDIA開発者フォーラム: DGX Sparkの価格改定](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- $3,999から$4,699へ',
            '[TechnoEdge: DGX Sparkの値上げと64GBモデル](https://www.techno-edge.net/article/2026/10/08/5565.html) -- 報じられた$6,950と$4,999の価格',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- 64GB / 1TB構成は$3,199と記載',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- 48GBと64GBへのメモリ増設価格',
            '[Answer.AI: 自宅で70Bモデルを学習する](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- 24GBのGPU2枚でのFSDP＋QLoRA',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) -- GPUオフロードとマルチGPU分割のドキュメント',
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile（GDDR7 24GB）、DDR5 96GB、ハードウェア価格$4,999',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '70B LLMをローカルで動かす2026年版：ハード別のRAM・VRAM・速度',
        description: '70BモデルはQ4_K_Mで約43GB＋コンテキスト分が必要です。Mac・DGX Spark・RTX GPU・CPUのみのPC（RAM 256GB含む）で、RAM・VRAM・推定tok/sを比較します。',
        url: 'https://www.promptquorum.com/ja/local-llms/70b-models-consumer-hardware',
        inLanguage: 'ja',
        datePublished: '2026-04-04',
        dateModified: '2026-10-29',
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
        about: [
          {
            '@type': 'Thing',
            name: '70Bの言語モデル',
          },
          {
            '@type': 'Thing',
            name: 'Apple Siliconでの推論',
          },
          {
            '@type': 'Thing',
            name: 'NVIDIA RTX 4090',
          },
          {
            '@type': 'Thing',
            name: 'レイヤーオフロード',
          },
          {
            '@type': 'Thing',
            name: 'Llama 3.3 70B',
          },
          {
            '@type': 'Thing',
            name: 'Qwen2.5 72B',
          },
          {
            '@type': 'Thing',
            name: 'NVIDIA DGX Spark',
          },
          {
            '@type': 'Thing',
            name: 'Apple Mac mini M5 Pro',
          },
          {
            '@type': 'Thing',
            name: 'メモリ帯域幅',
          },
        ],
        mentions: [
          {
            '@type': 'SoftwareApplication',
            name: 'Ollama',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'llama.cpp',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'vLLM',
          },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: [
            '.article-intro',
            '.key-takeaways',
            'h2',
          ],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        inLanguage: 'ja',
        name: 'Ollamaでコンシューマー向けハードウェアに70Bモデルを導入して動かす方法',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'モデルとコンテキスト用に、48GB以上の高速メモリ（統合メモリ、VRAM、またはRAM）があることを確認する',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'ollama.comからOllamaをインストールする',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: '実行：ollama run llama3.3:70b',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'CPUとGPUの分割状況を確認する：ollama ps',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'メモリが厳しい場合は量子化を調整する：q3_K_Sタグを使うか、コンテキストを短くする',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        inLanguage: 'ja',
        name: '70Bのローカル LLM を動かすハードウェア 2026年版',
        numberOfItems: 12,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Mac Studio M5 Max（64～128GB）',
            description: 'はい -- フルGPU。約9～11 tok/s（推定）。標準構成は36GB。64GB以上は有償アップグレード。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mac Studio M5 Ultra（96GB以上）',
            description: 'はい -- Q8_0も載る。約17～21 tok/s（推定）。96GB構成が$5,499から。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mac mini M5 Pro（64GB）',
            description: 'はい -- ぎりぎり。約4～5 tok/s（推定）。$1,699の標準は24GB。64GBは受注生産。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Mac mini M6（最大32GB）',
            description: 'いいえ。該当なし（推定）。最大32GBでは約43GBのQ4ファイルに足りない。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mac Studio M2 Ultra（64GB以上・中古）',
            description: 'はい -- フルGPU。約12～15 tok/s（推定）。中古市場のみ。メモリ容量を要確認。',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NVIDIA DGX Spark（128GB）',
            description: 'はい -- Q8_0も載る。約4～5 tok/s（推定）。FP8の実測は2.7 tok/s。報じられた価格は$6,950。',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'AMD Ryzen AI Max+ 395（128GB）',
            description: 'はい。約4～5 tok/s（推定）。ミニPC・ノートPC。GPU割当は設定可能。',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: 'RTX 3090 / 4090 2枚（48GB）',
            description: 'はい -- ぎりぎり。約12～17 tok/s（推定）。Q4_K_Mと短いコンテキストのみ。',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'RTX 5090（32GB）＋64GB RAM',
            description: '一部オフロード。約4～6 tok/s（推定）。層の約70%がGPU、残りはシステムRAM。',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'RTX 4090（24GB）＋64GB RAM',
            description: '一部オフロード。約2～4 tok/s（推定）。層の約55%がGPU、残りはシステムRAM。',
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: 'CPUのみ（デュアルチャネルDDR5）',
            description: 'はい -- CPUのみ。約1～2 tok/s（推定）。バッチ処理向け。',
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: 'CPUのみ（8～12チャネルのサーバーRAM）',
            description: 'はい -- CPUのみ。約5～8 tok/s（推定）。Threadripper PRO / EPYC。256GBならQ8_0も可。',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: '70Bのローカルモデルを動かすには、どんなハードウェアが必要ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70BをQ4_K_Mで動かすには、高速メモリが約43GBと、コンテキスト用に3～10GBが必要です。モデル全体を高速メモリに載せられる構成は3つあります。統合メモリ64GB以上のApple Silicon Mac、24GBのNVIDIA GPU2枚（VRAM合計48GB）、そしてNVIDIA DGX SparkやAMD Ryzen AI Max+ 395搭載ミニPCのような128GB統合メモリ機です。メモリ容量はモデルが動くかどうかを決め、メモリ帯域幅は速度を決めます。24GBのGPU1枚やCPUのみのPCでも動きますが、速度は約1～4トークン/秒にとどまります。',
            },
          },
          {
            '@type': 'Question',
            name: '70Bモデルとは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '70Bモデルとは、約700億個のパラメータ（重み）を持つ大規模言語モデルのことです。Llama 3.3 70Bは706億、Qwen2.5 72Bは727億のパラメータを持ちます。ファイルサイズはパラメータ数から決まり、16ビットで約141GB、8ビット（Q8_0）で75GB、4ビット（Q4_K_M）で43GBです。',
            },
          },
          {
            '@type': 'Question',
            name: '70Bモデルに必要なVRAMやRAMはどれくらいですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70Bに必要なのは、Q4_K_Mで43GB、Q5_K_Mで50GB、Q8_0で75GB、FP16で141GBです（Ollamaライブラリのサイズ）。これに加えてコンテキスト用のKVキャッシュが、8Kトークンで約2.7GB、32Kで10.7GB、128Kで43GB必要です。VRAMが24GBの場合、GPUに載るのはQ4_K_Mモデルの約半分で、残りはシステムRAMで動作します。',
            },
          },
          {
            '@type': 'Question',
            name: '70Bモデルを実用的な速度で動かせる最も安いハードウェアは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '約10トークン/秒以上を望むなら、現実的な選択肢は、64GB以上を搭載したMac Studio M5 Max（$2,499の標準モデルは36GB）、64GB以上の中古Mac Studio M2 Ultra、または中古の24GB GPU2枚です。新品のAppleで最も安いのは64GBのMac mini M5 Proですが、$1,699の標準モデルは24GBしかなく、64GB構成は報道で約$2,700～$3,200とされています。帯域幅307GB/sのため、速度は約4～5トークン/秒にとどまります。GPUの実売価格は変動が大きく、RTX 5090は2026年10月に定価$1,999を大きく上回る価格で出回っていると報じられました。最新の価格を確認してください。',
            },
          },
          {
            '@type': 'Question',
            name: '24GBのGPU1枚で70Bモデルを動かせますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '動かせますが、遅くなります。RTX 4090などの24GBカードに載るのは、Q4_K_Mの70Bモデルの約55%です。残りの層はシステムRAM上でCPUのメモリ速度で動くため、高速なDDR5でも約2～4トークン/秒程度です。対話に適した速度が必要なら、より小さいモデル（Qwen3.8-27Bなど27B～34Bなら24GBに収まります）、GPU2枚、または64GB以上の統合メモリ機を使ってください。',
            },
          },
          {
            '@type': 'Question',
            name: 'GPU2枚で70Bモデルを動かせますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '動かせます。24GBカード（RTX 3090または4090）2枚でVRAMは48GBになり、Q4_K_Mの70Bモデル（43GB）が数千トークン程度の短いコンテキストで収まります。Ollamaとllama.cppは、層を2枚のカードに自動的に、または--tensor-splitで分割します。すべてのトークンが2枚のカードを順番に通るため、速度は推定で約12～17トークン/秒です。',
            },
          },
          {
            '@type': 'Question',
            name: 'マルチGPU環境で70B LLMを動かすのに最適な推論ランタイムはどれですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '1人で使うなら、層分割を使うOllamaまたはllama.cppが最も簡単で、異なるGPUの混在にも対応します。複数ユーザーや複数エージェントが同時に使う場合は、--tensor-parallel-sizeをGPU枚数に設定したvLLM、またはSGLangが、リクエストをバッチ処理するため総スループットがはるかに高くなります。どちらも同一のGPUとAWQ・GPTQ・FP8の重みを前提とします。TensorRT-LLMはNVIDIAで最高のスループットを出せますが、エンジンのビルド工程が必要です。',
            },
          },
          {
            '@type': 'Question',
            name: '70Bをバックエンドにしたマルチエージェントシステムには、どれくらいのGPUメモリが必要ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '重みは1回分、KVキャッシュは同時セッションごとに1つ見込みます。Llama 3.3 70BのQ4_K_Mは重みに約43GBが必要で、アクティブなセッションごとに、FP16でコンテキスト1トークンあたり約0.33MBが加わります。したがって、32Kトークンのエージェント4つなら、約43GB＋43GB＝86GBが必要です。エージェントごとにモデルを1つずつ読み込まず、共有サーバー（vLLM、SGLang、または並列スロットを使うllama.cpp）1台で全エージェントを処理してください。',
            },
          },
          {
            '@type': 'Question',
            name: 'RAM 256GBは70BモデルのCPU推論に役立ちますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '役立つのは容量であって、速度ではありません。256GBあれば、長いコンテキストでもQ8_0（75GB）やFP16（141GB）を読み込めますが、デコード速度はメモリチャネル数で制限されます。Q4_K_MからQ8_0の場合、デュアルチャネルのデスクトップで約0.5～1.5トークン/秒、8チャネルのThreadripper PROで約3～6、12チャネルのEPYCで約4～8です（メモリ帯域幅からの推定であり、当社が実施したベンチマークではありません）。',
            },
          },
          {
            '@type': 'Question',
            name: 'Mac mini M6で70Bモデルは動きますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '動きません。Mac mini M6（$899から）は統合メモリが最大32GB、帯域幅は170GB/sで、Q4_K_Mの70Bモデルに必要な43GBに届きません。Mac mini M5 Pro（$1,699から、307GB/s、Thunderbolt 5）は最大64GBまで構成できます。ただし$1,699の標準モデルは24GBなので、64GBの受注生産構成を注文してください。どちらも2026年9月22日に発売されました。',
            },
          },
          {
            '@type': 'Question',
            name: 'NVIDIA DGX Sparkとは何ですか？70B推論には向いていますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DGX Sparkは、128GBの統合LPDDR5xメモリ（273GB/s）を備えたNVIDIAのコンパクトなデスクトップAIコンピューターです。Q8_0の70Bモデルも読み込めますが、帯域幅が制約になります。LMSYSはLlama 3.1 70BのFP8でデコード2.7トークン/秒を計測しました。高速なDense 70Bのチャットよりも、CUDAを使う作業、ファインチューニング、大型のMoEモデルに向いています。NVIDIAは2026年2月にFounders Editionを$3,999から$4,699に値上げし、2026年10月には$6,950という価格が報じられました。あわせて、パートナーから64GB版が$4,999で提供されると報じられています。',
            },
          },
          {
            '@type': 'Question',
            name: '70Bのローカルモデルの品質は、クラウドモデルと比べてどうですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Metaは、Llama 3.3 70B InstructのMMLU（CoT）が86.0、HumanEvalが88.4と報告しています。その後に公開された最先端のクラウドモデルは、推論負荷の高いタスクでより高いスコアを出しますが、70Bのローカルモデルも、要約、情報抽出、文章の下書き、定型的なコード生成では競争力があります。70Bのハードウェアに投資する前に、たとえば[PromptQuorum](/ja)などで、自分のプロンプトを使って両方を試してください。',
            },
          },
          {
            '@type': 'Question',
            name: '70Bモデルを動かすと、電気代はどれくらいかかりますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPUは生成中、ボード電力の上限まで消費します。RTX 3090は350W、RTX 4090は450W、RTX 5090は575Wです。1kWhあたり$0.15の場合、RTX 4090を全負荷で動かすとGPUだけで1時間あたり約$0.07かかります。Apple Siliconや統合メモリ機は、同じモデルでも消費電力がはるかに小さい代わりに、速度は遅くなります。',
            },
          },
          {
            '@type': 'Question',
            name: '日常的な作業では、小さいモデルと比べて70Bモデルは価値がありますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '複雑な推論、長文ドキュメントの分析、ニュアンスのある文章作成では、たいてい価値があります。単純な要約、Q&A、分類なら、7B～14Bモデルでもハードウェアコストのごく一部で同程度の出力が得られることが多いです。70Bのハードウェアに投資する前に、自分のプロンプトで両方を試してください。',
            },
          },
          {
            '@type': 'Question',
            name: '70Bモデルをコンシューマー向けハードウェアでファインチューニングできますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'QLoRAなら可能です。QLoRAはベースモデルを4ビット（約35GB）で保持し、小さなアダプターだけを学習します。Answer.AIは、24GBのゲーミングGPU2枚でFSDP＋QLoRAにより70Bモデルを学習できることを示しました。16ビットの完全なファインチューニングには1TB規模のメモリが必要で、マルチGPUサーバーの領域です。たまにQLoRAを実行する程度を超えるなら、80GBのクラウドGPUを借りるほうが通常は現実的です。',
            },
          },
          {
            '@type': 'Question',
            name: 'Apple Siliconで70Bに最適な量子化はどれですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '64GBのMacではQ4_K_M（43GB）を使ってください。macOSは既定でGPUがアクセスできるメモリをRAMの約75%（64GBのMacで約48GB）に制限するため、Q5_K_M（50GB）はsysctl iogpu.wired_limit_mbで上限を引き上げた場合にしか動かず、余裕もほとんど残りません。96～128GBなら、Q8_0（75GB）がほぼ劣化のない選択肢ですが、すべてのトークンで読み込むバイト数が2倍になるため、速度はQ4_K_Mの約半分になります。',
            },
          },
          {
            '@type': 'Question',
            name: 'Ollamaは最適な量子化を自動で選んでくれますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'いいえ。ollama run llama3.3:70bは、既定のQ4_K_M（43GB）をダウンロードします。ほかのレベルを使うにはタグを指定します。たとえばollama run llama3.3:70b-instruct-q5_K_Mやollama run llama3.3:70b-instruct-q8_0です。読み込み後にollama psを実行すると、PROCESSOR列でモデルのうちGPUとCPUで動いている割合を確認できます。',
            },
          },
          {
            '@type': 'Question',
            name: 'iPhoneやノートPCで70Bモデルは動きますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'iPhoneでは動きません。現行のiPhoneのRAMは8～12GBですが、Q4_K_Mの70Bモデルには約43GBが必要なため、スマートフォンで動くのは1B～8Bのモデルです。ノートPCで動かせるのは、統合メモリ64GB以上（ハイエンドのMacBook Pro構成）か、128GBのAMD Ryzen AI Max+ 395搭載機に限られます。VRAMが16～24GBのゲーミングノート（ASUS ROG Strixなど）は、遅い一部オフロードの場合に該当します。',
            },
          },
        ],
      },
    },
    zh: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: '最佳模型',
      title: '本地运行 70B 大模型 2026：各硬件内存与速度',
      dateModified: '2026-10-29',
      seoTitle: '70B 大模型硬件要求 2026：内存、显存与速度',
      intro: '在本地运行 70B 模型，Q4_K_M 量化下约需 43 GB 高速内存，另加 3-10 GB 用于上下文。配备 64 GB 及以上统一内存的 Mac、两块 24 GB 显卡，或一台 128 GB 统一内存的主机，都可以把整个模型放进高速内存。速度取决于内存带宽：从台式机 CPU 的每秒 1-2 个 token，到 Mac Studio M5 Max 的约每秒 10 个 token。Llama 3.3 70B 和 Qwen2.5 72B 是目前主要的两款 70B 级稠密模型。',
      metaDescription: '70B 模型在 Q4_K_M 下约需 43 GB 内存，另加上下文。对比 Mac、DGX Spark、RTX 显卡和纯 CPU 电脑（含 256 GB 内存）所需的内存、显存与估算 tok/s。',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-zh.webp',
      publishDate: '2026-04-04',
      leadAnswerBlock: '**70B 模型在 Q4_K_M 量化下（Llama 3.3 70B）约需 43 GB 内存，另加 3-10 GB 用于上下文，其速度由内存带宽决定，而不是容量。配备 64 GB 及以上内存的 Mac、两块 24 GB 显卡，或一台 128 GB 统一内存的主机，可以把整个模型放进高速内存；单块 24 GB 显卡或纯 CPU 电脑也能运行，但只有约每秒 1-4 个 token。**',
      audience: '熟悉 Ollama 或 LM Studio、希望优化本地大模型工作流的开发者',
      readTime: '阅读约 11 分钟',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B 本地大模型消费级硬件',
      toc: [
        { label: '关键要点', anchor: '#key-takeaways' },
        { label: '什么是 70B 模型？', anchor: '#what-is-70b' },
        { label: '需要什么硬件？', anchor: '#what-hardware' },
        { label: '各量化等级的内存需求', anchor: '#ram-requirements' },
        { label: '上下文与 KV 缓存内存', anchor: '#context-memory' },
        { label: '为什么内存带宽决定速度', anchor: '#memory-bandwidth' },
        { label: 'Apple Silicon', anchor: '#apple-silicon' },
        { label: 'NVIDIA DGX Spark 与统一内存 PC', anchor: '#dgx-spark' },
        { label: 'NVIDIA 显卡 + 层卸载', anchor: '#nvidia-layer-offloading' },
        { label: '多 GPU 推理运行时', anchor: '#multi-gpu-runtimes' },
        { label: '纯 CPU 运行 70B 推理', anchor: '#cpu-only' },
        { label: '70B 级 MoE 模型', anchor: '#moe-models' },
        { label: '该运行哪个 70B 模型？', anchor: '#which-model' },
        { label: '微调 70B 模型', anchor: '#fine-tuning' },
        { label: '地区背景', anchor: '#regional-context' },
        { label: '常见误区', anchor: '#common-mistakes' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '常见问题', anchor: '#faq' },
        { label: '参考资料', anchor: '#sources' },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: '70B 模型在 Q4_K_M 下约需 43 GB 内存，另加 3-10 GB 用于上下文，每秒生成的 token 数大致等于内存带宽除以模型大小，因此 64 GB 以上的 Mac、两块 24 GB 显卡或一台 128 GB 统一内存主机可在高速内存中运行它，而单块 24 GB 显卡只有每秒 2-4 个 token。',
            },
            {
              type: 'plain-terms',
              text: '70B 模型是一种非常大的 AI 模型，拥有约 700 亿个可调节的数值。加载它大约需要 43 GB 内存，而回答的快慢取决于这块内存能多快被读取。配备大容量统一内存的 Mac 或两块大显卡是比较舒适的方案；只有一块显卡的普通 PC 也能运行，但回答很慢。',
            },
          ],
          items: [
            'Q4_K_M 下的内存：Llama 3.3 70B 为 43 GB，Q5_K_M 为 50 GB，Q8_0 为 75 GB，FP16 为 141 GB。每 8K token 的上下文约增加 2.7 GB。',
            '**速度规则**：每秒 token 数的上限等于内存带宽除以模型大小，实际速度通常为该上限的 60-80%。43 GB 的模型在 614 GB/s 带宽下，上限约为 14 tok/s。',
            '**消费级最佳速度**：配置 64 GB 及以上的 Mac Studio M5 Max（约 9-11 tok/s）或两块 24 GB 显卡（约 12-17 tok/s）；Mac Studio M5 Ultra 的估算速度为 17-21 tok/s。',
            '**Mac mini**：$1,699 的 M5 Pro 机型为 24 GB；64 GB 是按订单定制的升级选项，速度约 4-5 tok/s。M6 Mac mini（最高 32 GB）无法运行 70B。',
            '**DGX Spark**：内存 128 GB，但带宽只有 273 GB/s；LMSYS 实测 70B 在 FP8 下为 2.7 tok/s。适合 CUDA 和大型 MoE 模型，不适合追求速度的稠密 70B 对话。',
            '**单块 24 GB 显卡或纯 CPU**：RTX 4090 搭配高速 DDR5 约 2-4 tok/s，台式机 CPU 约 1-2 tok/s。256 GB 内存增加的是容量（Q8_0、FP16、长上下文），而不是速度。',
            '不存在 Qwen3 72B：72B 模型是 Qwen2.5 72B。较新的大型开源模型大多是混合专家（MoE）架构。',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: '什么是 70B 模型？',
          content: [
            '**70B 模型是拥有约 700 亿参数的大语言模型，参数即构成网络的、通过学习得到的权重。** “B”代表十亿（billion）。Llama 3.3 70B 有 706 亿参数，Qwen2.5 72B 有 727 亿参数。',
            '内存大小等于参数量乘以每个权重占用的字节数：16 位权重每个占 2 字节（约 141 GB），8 位（Q8_0）约 1 字节（75 GB），4 位 Q4_K_M 约 0.6 字节（43 GB）。这就是 70B 成为消费级硬件首次需要 40 GB 以上高速内存的规模，而 7B-14B 模型在普通笔记本上就能运行。',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: '在本地运行 70B 大模型需要什么硬件？',
          content: [
            '**模型本身约需 43 GB 高速内存，上下文另需 3-10 GB，这些内存可以是 GPU 显存、Apple 统一内存或系统内存——内存越快，模型生成越快。**',
            '下表速度为短上下文下的单用户对话估算值，依据内存带宽推算（见“为什么内存带宽决定速度”）。它们是理论上限按典型 60-80% 效率折算的结果，不是 PromptQuorum 运行的基准测试；DGX Spark 的数字例外，由第三方实测。',
          ],
          rows: [
            {
              '硬件': 'Mac Studio M5 Max（64-128 GB）',
              '能否运行 70B Q4？': '能——完整 GPU',
              '内存带宽': '最高 614 GB/s',
              '估算速度 (Q4_K_M)': '约 9-11 tok/s',
              '说明': '基础配置为 36 GB；64 GB 以上需升级',
            },
            {
              '硬件': 'Mac Studio M5 Ultra（96 GB 起）',
              '能否运行 70B Q4？': '能——可运行 Q8_0',
              '内存带宽': '最高 1.2 TB/s',
              '估算速度 (Q4_K_M)': '约 17-21 tok/s',
              '说明': '96 GB 起价 $5,499',
            },
            {
              '硬件': 'Mac mini M5 Pro（64 GB）',
              '能否运行 70B Q4？': '能——很紧张',
              '内存带宽': '307 GB/s',
              '估算速度 (Q4_K_M)': '约 4-5 tok/s',
              '说明': '$1,699 基础款为 24 GB；64 GB 需定制',
            },
            { '硬件': 'Mac mini M6（最高 32 GB）', '能否运行 70B Q4？': '不能', '内存带宽': '170 GB/s', '估算速度 (Q4_K_M)': '不适用', '说明': '最高 32 GB，低于约 43 GB 的 Q4 文件' },
            {
              '硬件': 'Mac Studio M2 Ultra（64 GB 起，二手）',
              '能否运行 70B Q4？': '能——完整 GPU',
              '内存带宽': '800 GB/s',
              '估算速度 (Q4_K_M)': '约 12-15 tok/s',
              '说明': '仅二手市场；请确认内存容量',
            },
            {
              '硬件': 'NVIDIA DGX Spark（128 GB）',
              '能否运行 70B Q4？': '能——可运行 Q8_0',
              '内存带宽': '273 GB/s',
              '估算速度 (Q4_K_M)': '约 4-5 tok/s',
              '说明': 'FP8 实测 2.7 tok/s；据报道 $6,950',
            },
            {
              '硬件': 'AMD Ryzen AI Max+ 395（128 GB）',
              '能否运行 70B Q4？': '能',
              '内存带宽': '256 GB/s',
              '估算速度 (Q4_K_M)': '约 4-5 tok/s',
              '说明': '迷你主机和笔记本；GPU 内存占比可配置',
            },
            {
              '硬件': '2 块 RTX 3090 / 4090（48 GB）',
              '能否运行 70B Q4？': '能——很紧张',
              '内存带宽': '每块 936-1,008 GB/s',
              '估算速度 (Q4_K_M)': '约 12-17 tok/s',
              '说明': '仅限 Q4_K_M 加短上下文',
            },
            {
              '硬件': 'RTX 5090（32 GB）+ 64 GB 内存',
              '能否运行 70B Q4？': '部分卸载',
              '内存带宽': '显存 1,792 GB/s',
              '估算速度 (Q4_K_M)': '约 4-6 tok/s',
              '说明': '约 70% 的层在 GPU，其余在系统内存',
            },
            {
              '硬件': 'RTX 4090（24 GB）+ 64 GB 内存',
              '能否运行 70B Q4？': '部分卸载',
              '内存带宽': '显存 1,008 GB/s',
              '估算速度 (Q4_K_M)': '约 2-4 tok/s',
              '说明': '约 55% 的层在 GPU，其余在系统内存',
            },
            {
              '硬件': 'Olares One（RTX 5090 Mobile 24 GB + 96 GB 内存）',
              '能否运行 70B Q4？': '部分卸载',
              '内存带宽': '显存带宽未公布 / 内存约 90 GB/s',
              '估算速度 (Q4_K_M)': '约 2-4 tok/s',
              '说明': '24 GB GDDR7 显存；硬件成本 $4,999',
            },
            { '硬件': '纯 CPU，双通道 DDR5', '能否运行 70B Q4？': '能——仅 CPU', '内存带宽': '约 90 GB/s', '估算速度 (Q4_K_M)': '约 1-2 tok/s', '说明': '仅适合批处理任务' },
            {
              '硬件': '纯 CPU，8-12 通道服务器内存',
              '能否运行 70B Q4？': '能——仅 CPU',
              '内存带宽': '350-460 GB/s',
              '估算速度 (Q4_K_M)': '约 5-8 tok/s',
              '说明': 'Threadripper PRO / EPYC；256 GB 可运行 Q8_0',
            },
          ],
          columns: ['硬件', '能否运行 70B Q4？', '内存带宽', '估算速度 (Q4_K_M)', '说明'],
          callouts: [
            { type: 'insight', text: '**Olares One**（[olares.com/one](https://www.olares.com/one)）是一台紧凑型 AI 桌面主机，搭载 RTX 5090 Mobile（24 GB GDDR7 显存）、Intel Core Ultra 9 275HX 和 96 GB DDR5-5600 内存（据 Olares 称最高可扩展至 128 GB）。运行 70B 模型时，其表现与上方 RTX 4090 一行相近：约 55% 的 Q4_K_M 模型可放入显存，其余从系统内存读取，因此预计约 2-4 tokens/s（估算值，非基准测试）。96 GB 内存增加的是容量而不是速度：Q8_0（75 GB）也能放下并留有上下文空间。Olares 标注的硬件成本为 $4,999，未公布 70B 的 tokens/s 数据。' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: '70B 模型在各量化等级下需要多少内存或显存？',
          content: '下表为 Ollama 库中 Llama 3.3 70B 的文件大小；其他 70B 模型相差几个百分点。这里只是权重——还需加上下一节的上下文内存。',
          rows: [
            { '量化等级': 'FP16（完整精度）', '内存（权重）': '约 141 GB', '质量': '参考质量', '是否实用？': '192 GB 以上 Mac Ultra 或 256 GB 内存服务器' },
            { '量化等级': 'Q8_0', '内存（权重）': '约 75 GB', '质量': '近乎无损', '是否实用？': '96-128 GB 统一内存或 128 GB 内存' },
            { '量化等级': 'Q6_K', '内存（权重）': '约 58 GB', '质量': '非常接近 Q8_0', '是否实用？': '72-96 GB 的机器' },
            { '量化等级': 'Q5_K_M', '内存（权重）': '约 50 GB', '质量': '损耗极小', '是否实用？': '64 GB Mac 提高 GPU 上限后——很紧张' },
            { '量化等级': 'Q4_K_M', '内存（权重）': '约 43 GB', '质量': '损耗低——默认', '是否实用？': '可行——64 GB Mac 或 48 GB 双显卡' },
            { '量化等级': 'Q3_K_S', '内存（权重）': '约 31 GB', '质量': '中等损耗', '是否实用？': '可行——40-48 GB 的机器' },
            { '量化等级': 'Q2_K', '内存（权重）': '约 26 GB', '质量': '损耗高', '是否实用？': '不推荐' },
          ],
          columns: ['量化等级', '内存（权重）', '质量', '是否实用？'],
        },
        contextMemory: {
          id: 'context-memory',
          title: '上下文会给 70B 模型额外增加多少内存？',
          content: [
            '**上下文会在权重之外额外占用内存：Llama 3.3 70B 在 FP16 下每个 token 约占 0.33 MB 的 KV 缓存，大致是 8K token 约 2.7 GB、32K 约 10.7 GB、128K 约 43 GB。** 这个数字来自模型架构：80 层 x 8 个键值头 x 128 维 x 2（键和值）x 2 字节 = 每 token 327,680 字节。',
            '每个并发会话都有自己的 KV 缓存，而权重是共享的。一个由四个智能体组成、每个使用 32K token 的多智能体系统，需要约 43 GB 权重加 43 GB 缓存。在 Ollama 中启用 flash attention 和 8 位 KV 缓存（OLLAMA_FLASH_ATTENTION=1 与 OLLAMA_KV_CACHE_TYPE=q8_0）可使缓存大致减半。',
          ],
          rows: [
            { '上下文长度': '8K token', 'KV 缓存（FP16）': '约 2.7 GB', 'Q4_K_M 合计': '约 46 GB' },
            { '上下文长度': '32K token', 'KV 缓存（FP16）': '约 10.7 GB', 'Q4_K_M 合计': '约 54 GB' },
            { '上下文长度': '128K token', 'KV 缓存（FP16）': '约 43 GB', 'Q4_K_M 合计': '约 86 GB' },
          ],
          columns: ['上下文长度', 'KV 缓存（FP16）', 'Q4_K_M 合计'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: '为什么内存带宽决定 70B 模型的速度？',
          content: [
            '**每生成一个 token 都要把全部模型权重读取一遍，因此解码速度的上限等于内存带宽除以模型大小。** 43 GB 的 Q4_K_M 模型在 614 GB/s 带宽下，上限约为每秒 14 个 token；实际速度通常为上限的 60-80%。',
            '同一规则也说明了“容量大”不等于“速度快”：128 GB 的 DGX Spark 带宽为 273 GB/s，在 Q4_K_M 下上限约为每秒 6 个 token，而 LMSYS 实测 Llama 3.1 70B 在 FP8（约 70 GB，上限 3.9）下为每秒 2.7 个 token。容量决定模型能否运行，带宽决定运行多快。提示词处理（预填充）受算力限制，表现不同。',
          ],
          rows: [
            { '内存': '双通道 DDR5-5600', '带宽': '约 90 GB/s', '43 GB 时的上限': '约 2 tok/s' },
            { '内存': 'AMD Ryzen AI Max+ 395', '带宽': '256 GB/s', '43 GB 时的上限': '约 6 tok/s' },
            { '内存': 'NVIDIA DGX Spark', '带宽': '273 GB/s', '43 GB 时的上限': '约 6 tok/s' },
            { '内存': 'Apple M5 Pro', '带宽': '307 GB/s', '43 GB 时的上限': '约 7 tok/s' },
            { '内存': 'Apple M5 Max', '带宽': '最高 614 GB/s', '43 GB 时的上限': '约 14 tok/s' },
            { '内存': 'Apple M2 Ultra', '带宽': '800 GB/s', '43 GB 时的上限': '约 19 tok/s' },
            { '内存': 'Apple M5 Ultra', '带宽': '最高 1.2 TB/s', '43 GB 时的上限': '约 28 tok/s' },
          ],
          columns: ['内存', '带宽', '43 GB 时的上限'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: 'Apple Silicon 适合运行 70B 模型吗？',
          content: [
            '**Apple Silicon 是把 70B 模型完整放入 GPU 可访问内存的最简单方式，因为 CPU 和 GPU 共享同一块统一内存。** 64 GB 及以上的 Mac 无需层卸载即可运行 Q4_K_M，速度由芯片带宽决定：M5 Max 约每秒 9-11 个 token，二手 M2 Ultra 约 12-15 个（均为估算）。我们目前没有找到 M5 芯片的已发布 70B 基准测试。',
            'Apple 于 2026 年 8 月 25 日发布了搭载 M5 Max 和 M5 Ultra 的 Mac Studio；两者均于 2026 年 9 月 22 日发货。M5 Max 起价 $2,499，配 36 GB，最高可配 128 GB，带宽最高 614 GB/s——运行 70B 请配置 64 GB 及以上。M5 Ultra 起价 $5,499，配 96 GB，最高可配 512 GB，带宽最高 1.2 TB/s，可从容运行 Q8_0；512 GB 配置据称将于 10 月下旬到货。',
            '**Mac mini M5 Pro 起价 $1,699，内存是 24 GB，而不是 64 GB。** 64 GB 的定制配置（307 GB/s，Thunderbolt 5）可以装下 Q4_K_M 的 70B 模型，但生成速度仅约每秒 4-5 个 token，评测显示其价格大约在 $2,700-$3,200，视 CPU 和存储而定。基础款 Mac mini M6（$899）最高只有 32 GB 和 170 GB/s，在任何量化等级下都无法运行 70B 模型。',
            'macOS 默认将 GPU 可寻址内存限制在内存的约 75%（64 GB 的 Mac 约为 48 GB）。要运行 Q5_K_M（50 GB），需要提高该上限，例如在 64 GB 的 Mac 上执行 sudo sysctl iogpu.wired_limit_mb=57344；该设置在重启后失效，并且只给系统留下约 8 GB。',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: 'NVIDIA DGX Spark（或 128 GB Strix Halo PC）适合运行 70B 模型吗？',
          content: [
            '**NVIDIA DGX Spark 是一款紧凑的桌面 AI 计算机，配备 128 GB、273 GB/s 的统一 LPDDR5x 内存，基于 GB10 Grace Blackwell 超级芯片，支持 CUDA。** 它甚至能加载 Q8_0（75 GB）的 70B 模型，但带宽限制了生成速度：LMSYS 实测 Llama 3.1 70B 在 FP8 下的解码速度为每秒 2.7 个 token，社区在 Q4_K_M 下运行 llama.cpp 的报告速度在每秒 4-5 个 token 之间。',
            '价格变化很大。NVIDIA 在 2026 年 2 月因内存供应紧张，将 Founders Edition 从 $3,999 上调至 $4,699；2026 年 10 月有报道称价格为 $6,950，同时合作伙伴自 2026 年 10 月 23 日起销售 $4,999 的 64 GB 版本。购买前请查看实时价格。',
            'AMD Ryzen AI Max+ 395（“Strix Halo”）迷你主机和笔记本提供 128 GB、256 GB/s 的 LPDDR5X，带宽处于同一档次，稠密 70B 模型的估算速度同样约为每秒 4-5 个 token。这两个平台更适合混合专家模型（见下文）以及 CUDA 或微调工作，而不是稠密 70B 对话。',
          ],
          rows: [
            { '规格': '内存', '值': '128 GB 统一 LPDDR5x' },
            { '规格': '内存带宽', '值': '273 GB/s' },
            { '规格': 'Q8_0 的 70B（75 GB）', '值': '可以装下' },
            { '规格': '70B 解码速度（实测）', '值': 'FP8 下 2.7 tok/s（LMSYS，SGLang）' },
            { '规格': '最大模型规模', '值': 'FP4 下约 200B 参数' },
            { '规格': '价格', '值': '据报道 $6,950；2026 年 2 月标价 $4,699' },
            { '规格': 'Ollama 命令', '值': 'ollama run llama3.3:70b' },
          ],
          columns: ['规格', '值'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: 'NVIDIA 显卡 + 层卸载如何运行 70B 模型？',
          content: [
            '**Ollama 和 llama.cpp 会把模型拆分到 GPU 显存和系统内存：显存中的层以 GPU 速度运行，内存中的层以 CPU 内存速度运行，而慢的那部分决定整体速度。** 使用 RTX 4090（24 GB）时，Q4_K_M 的 70B 模型约 55% 可放入 GPU，其余部分从约 90 GB/s 的 DDR5 中读取，生成速度被限制在每秒约 2-4 个 token。RTX 5090（32 GB）可放入约 70%，估算速度为每秒 4-6 个 token。',
            'Ollama 会自动卸载，无需任何参数。运行 ollama ps 查看拆分情况（PROCESSOR 列，例如 45%/55% CPU/GPU）。在 llama.cpp 中，用 -ngl 设置层数。',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: '在多块 GPU 上运行 70B 模型，哪种推理运行时最好？',
          content: [
            '**对于单个用户，使用层拆分的 Ollama 或 llama.cpp 是最简单的多 GPU 方案；对于多个并发用户或智能体，采用张量并行的 vLLM 或 SGLang 可提供高得多的总吞吐量。** 两块 24 GB 显卡（RTX 3090 或 4090）共 48 GB，足以容纳 Q4_K_M 加短上下文。',
            '层拆分每个 token 只在显卡之间传递一次激活值，通过普通 PCIe 即可工作，因此适合混搭或消费级显卡。张量并行把每一层拆分到多块 GPU 上，受益于高速互联：RTX 3090 支持 NVLink 桥接器，而 RTX 4090 和 5090 不支持。',
          ],
          rows: [
            { '运行时': 'Ollama', '多 GPU 方式': '自动层拆分', '最适合': '单用户，最易上手' },
            { '运行时': 'llama.cpp', '多 GPU 方式': '--split-mode, --tensor-split', '最适合': '混搭 GPU，GGUF 量化' },
            { '运行时': 'vLLM', '多 GPU 方式': '--tensor-parallel-size N', '最适合': '多用户或智能体；AWQ/GPTQ/FP8' },
            { '运行时': 'SGLang', '多 GPU 方式': '张量并行', '最适合': '共享提示词前缀的智能体' },
            { '运行时': 'TensorRT-LLM', '多 GPU 方式': '张量 / 流水线并行', '最适合': 'NVIDIA 最高吞吐；需构建引擎' },
          ],
          columns: ['运行时', '多 GPU 方式', '最适合'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: '纯 CPU 运行 70B 推理实用吗？256 GB 内存有帮助吗？',
          content: [
            '**纯 CPU 的 70B 推理受内存带宽限制：双通道桌面 DDR5（约 90 GB/s）在 Q4_K_M 下约为每秒 1-2 个 token，增加内存容量并不能让它更快。** 以每秒 1.5 个 token 计算，一条 200 字的回复（约 270 个 token）大约需要三分钟。',
            '256 GB 内存改变的是能装下什么，而不是跑得多快：它可以装下 Q8_0（75 GB）或 FP16（141 GB）以及长上下文。速度取决于内存通道数——8 通道的 Threadripper PRO 或 12 通道的 EPYC 服务器，带宽是桌面平台的三到五倍。插满四条大容量内存的桌面主板，内存运行频率往往比只插两条时更低。长输入的提示词处理在 CPU 上同样很慢。',
            '下表按 70% 的效率套用带宽规则估算，并非实测基准。',
          ],
          rows: [
            { 'CPU / 内存配置': '桌面平台，双通道 DDR5-5600', '带宽': '约 90 GB/s', 'Q4_K_M (43 GB)': '约 1-1.5 tok/s', 'Q8_0 (75 GB)': '约 0.6-0.9 tok/s', 'FP16 (141 GB)': '约 0.3-0.5 tok/s' },
            { 'CPU / 内存配置': 'Threadripper PRO，8 通道 DDR5-5600', '带宽': '约 358 GB/s', 'Q4_K_M (43 GB)': '约 5-6 tok/s', 'Q8_0 (75 GB)': '约 3-3.5 tok/s', 'FP16 (141 GB)': '约 1.5-1.8 tok/s' },
            { 'CPU / 内存配置': 'EPYC，12 通道 DDR5-4800', '带宽': '约 461 GB/s', 'Q4_K_M (43 GB)': '约 7-8 tok/s', 'Q8_0 (75 GB)': '约 4-4.5 tok/s', 'FP16 (141 GB)': '约 2-2.5 tok/s' },
          ],
          columns: ['CPU / 内存配置', '带宽', 'Q4_K_M (43 GB)', 'Q8_0 (75 GB)', 'FP16 (141 GB)'],
        },
        moe: {
          id: 'moe-models',
          title: '70B 级 MoE 模型会改变硬件需求吗？',
          content: [
            '**混合专家（MoE）模型需要为全部参数准备内存，但每个 token 只读取被激活的专家，因此在内存占用相同的情况下，生成速度比稠密 70B 模型快得多。** OpenAI gpt-oss-120b 约有 1,170 亿参数，激活约 51 亿；Meta Llama 4 Scout 有 1,090 亿参数，激活 170 亿。',
            '带宽规则适用于被激活的权重，因此 MoE 模型最能发挥 DGX Spark、Ryzen AI Max+ 395 PC 和 64 GB Mac mini M5 Pro 这类大容量、中等带宽机器的价值。在这些硬件上运行稠密 70B 模型，预计约为每秒 4-5 个 token；下载前请对照自己的内存检查每个 MoE 模型的文件大小。',
          ],
        },
        which70b: {
          id: 'which-model',
          title: '本地应该运行哪个 70B 模型？',
          content: [
            '**Llama 3.3 70B 是默认的稠密 70B 模型：Meta 报告其 MMLU（CoT）为 86.0，HumanEval 为 88.4，上下文窗口为 128K。** Qwen2.5 72B 是多语言和编程场景的主要替代选择。不存在 Qwen3 72B——Qwen3 稠密模型最大只到 32B——因此提到“Qwen3 72B”时指的是 Qwen2.5 72B。',
            '命令：ollama run llama3.3:70b、ollama run qwen2.5:72b、ollama run deepseek-r1:70b。',
          ],
          rows: [
            { '模型': 'Llama 3.3 70B', '参数量': '70.6B 稠密', '许可证': 'Llama 3.3 Community License', '最适合': '通用英文任务、指令遵循' },
            { '模型': 'Qwen2.5 72B Instruct', '参数量': '72.7B 稠密', '许可证': 'Qwen License', '最适合': '多语言、编程；YaRN 下 131K' },
            { '模型': 'DeepSeek-R1-Distill-Llama-70B', '参数量': '70B 稠密', '许可证': '见模型卡', '最适合': '推理；长输出会拖慢回复' },
            { '模型': 'Mistral Large 2', '参数量': '123B 稠密', '许可证': 'Mistral Research License', '最适合': '仅限研究；Q4 约 75 GB' },
          ],
          columns: ['模型', '参数量', '许可证', '最适合'],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: '微调 70B 模型需要什么硬件？',
          content: [
            '**对 70B 模型做 QLoRA 微调，每次运行大约需要 35-48 GB 的 GPU 内存：两块 24 GB 显卡配合 FSDP+QLoRA，或单块 48-80 GB 显卡。** QLoRA 把基础模型保持在 4 位（约 35 GB），只训练小型适配器；Answer.AI 已在两块 24 GB 游戏显卡上演示了这一点。',
            '完整的 16 位微调，每个参数需要约 16 字节来存放权重、梯度和优化器状态——总量约 1 TB——这是多 GPU 服务器的工作。对于偶尔的训练任务，租用 80 GB 云 GPU 通常比自己搭建硬件更实际。',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '在本地运行 70B 模型：地区背景',
          content: [
            '**欧盟 / GDPR**：对大多数组织而言，本地 70B 模型是私有化运行 AI 质量的实际上限。在本地处理法律、医疗或金融文件，可使提示词和输出留在自己的基础设施内，有助于数据最小化和降低传输风险；但这本身并不使部署符合 GDPR，请评估整个处理活动。',
            '对于要求使用欧盟供应链硬件的组织，Apple（美国）和 NVIDIA（美国）属于非欧盟厂商；Dell、HP 和 Lenovo 销售基于 GB10 的系统并提供本地支持。在模型方面，Mistral Large 2 来自欧盟开发商，但以研究许可证发布，该许可证不涵盖商业用途。',
            '**日本**：Qwen2.5 72B 是处理日语文本的常见选择：`ollama run qwen2.5:72b`。记录硬件和模型版本（`ollama ps` 的输出会显示已加载的模型），有助于满足日本面向企业的 AI 指引下的内部治理要求。',
            '**中国**：本地部署的 Qwen2.5 72B 可将数据保留在自有基础设施内，这与中国《数据安全法》相关。内部提供服务的模型是否适用国家网信办（CAC）的生成式人工智能规则，取决于是否面向公众提供；请咨询合格的法律顾问确认。',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '在消费级硬件上运行 70B 模型有哪些常见误区？',
          faqs: [
            {
              q: '购买显存不足 24 GB 的显卡，却期待完整的 70B 性能',
              a: '12 GB 的显卡只能装下约四分之一的 Q4_K_M 70B 模型，其余部分从系统内存运行，因此速度接近纯 CPU。即便是 24 GB 的 RTX 4090 也只有约 2-4 tok/s。要获得交互级速度，请使用 48 GB 显存、64 GB 以上的 Apple Silicon Mac，或改用更小的 27B-34B 模型。',
            },
            {
              q: '以为大内存的机器也一定快',
              a: 'DGX Spark 和 Ryzen AI Max+ 395 系统有 128 GB 内存，但带宽只有 256-273 GB/s，稠密 70B 模型的速度约为 3-5 tok/s。配 64 GB 的 Mac Studio M5 Max 带宽超过它们的两倍。要看带宽，而不只是容量。',
            },
            {
              q: '没有检查模型有多少运行在 GPU 上',
              a: 'Ollama 会自动卸载，但内存紧张时可能把一部分层留在 CPU 上。加载后运行 `ollama ps` 并查看 PROCESSOR 列；目标是“100% GPU”，出现 CPU 占比就能解释输出为何缓慢。如果拆分情况不佳，请缩短上下文长度或改用 Q3_K_S。',
            },
            {
              q: '忘了上下文也需要内存',
              a: 'Q4_K_M 的 70B 模型为 43 GB，但 FP16 下 32K 上下文会增加约 10.7 GB，128K 会增加约 43 GB。装得下权重的机器，在长上下文下仍可能内存不足。请使用 8 位 KV 缓存或缩短上下文。',
            },
            {
              q: '在速度重要时运行 Q5_K_M 或 Q8_0',
              a: '每个 token 都要读取整个模型，因此在相同硬件上，Q8_0（75 GB）的速度大约只有 Q4_K_M（43 GB）的一半。在带宽受限的机器（DGX Spark、Strix Halo、Mac mini）上，对话请选 Q4_K_M，只有在质量优先时才用 Q8_0。',
            },
            {
              q: '订购 $1,699 的 Mac mini M5 Pro，却期待能运行 70B',
              a: '$1,699 的 M5 Pro Mac mini 只有 24 GB 统一内存。70B 模型需要 64 GB 的定制配置，而基础款 Mac mini M6（$899，最高 32 GB）完全无法运行。下单前请确认是“M5 Pro”且为 64 GB。',
            },
            {
              q: '遇到 macOS 默认的 GPU 内存上限',
              a: 'macOS 默认允许 GPU 使用约 75% 的内存，64 GB 的 Mac 约为 48 GB。Q4_K_M 装得下；Q5_K_M（50 GB）则不行，除非提高 `iogpu.wired_limit_mb`。',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[本地大模型硬件指南](/zh/local-llms/local-llm-hardware-guide) -- 涵盖包括 70B 在内各种模型规模的 GPU 与内存等级表',
            '[在 24 GB 显存上运行 70B 模型](/zh/local-llms/run-70b-models-24gb-vram) -- 只有单块 GPU 时的量化与卸载选项',
            '[在 Apple Silicon M5 Max 上运行 70B 模型](/zh/local-llms/running-70b-models-apple-silicon-m5-max) -- 使用 Ollama 和 MLX 的 Mac 专属设置',
            '[RTX 5090 对比 RTX 4090 本地大模型](/zh/local-llms/rtx-5090-vs-rtx-4090-local-llm) -- 32 GB 与 24 GB 显存如何改变卸载情况',
            '[Mac mini M5 作为本地 AI 服务器](/zh/local-llms/mac-mini-m5-local-ai-server) -- Mac mini 系列能运行什么、不能运行什么',
            '[LLM 量化详解](/zh/local-llms/llm-quantization-explained) -- 了解 Q4_K_M 与 Q8_0 的区别，以及更高精度带来的速度代价',
            '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) -- 包含 GPU 层配置在内的完整安装步骤',
            '[Qwen、Llama 与 Mistral 对比](/zh/local-llms/qwen-vs-llama-vs-mistral) -- 主要开源模型家族的详细对比',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '关于在消费级硬件上运行 70B 模型的常见问题',
          faqs: [
            {
              q: '在本地运行 70B 大模型需要什么硬件？',
              a: 'Llama 3.3 70B 在 Q4_K_M 下约需 43 GB 高速内存，另加 3-10 GB 用于上下文。有三种配置能把整个模型放进高速内存：64 GB 及以上统一内存的 Apple Silicon Mac、两块 24 GB NVIDIA 显卡（共 48 GB 显存），或一台 128 GB 统一内存的主机，例如 NVIDIA DGX Spark 或 AMD Ryzen AI Max+ 395 迷你主机。容量决定模型能否运行，内存带宽决定运行多快。单块 24 GB 显卡或纯 CPU 电脑也能运行，但只有约每秒 1-4 个 token。',
            },
            {
              q: '什么是 70B 模型？',
              a: '70B 模型是拥有约 700 亿参数（权重）的大语言模型。Llama 3.3 70B 有 706 亿参数，Qwen2.5 72B 有 727 亿参数。文件大小由参数量决定：16 位约 141 GB，8 位（Q8_0）约 75 GB，4 位（Q4_K_M）约 43 GB。',
            },
            {
              q: '70B 模型需要多少显存或内存？',
              a: 'Llama 3.3 70B 在 Q4_K_M 下需要 43 GB，Q5_K_M 下 50 GB，Q8_0 下 75 GB，FP16 下 141 GB（Ollama 库中的大小），此外还需要上下文的 KV 缓存：8K token 约 2.7 GB，32K 约 10.7 GB，128K 约 43 GB。只有 24 GB 显存时，Q4_K_M 模型只有大约一半能放进 GPU，其余部分从系统内存运行。',
            },
            {
              q: '能够实用地运行 70B 模型的最便宜硬件是什么？',
              a: '若要达到约每秒 10 个 token 或更高，可行的选择是配置 64 GB 及以上的 Mac Studio M5 Max（$2,499 的基础款为 36 GB）、64 GB 及以上的二手 Mac Studio M2 Ultra，或两块二手 24 GB 显卡。最便宜的全新 Apple 方案是 64 GB 的 Mac mini M5 Pro：$1,699 的基础款只有 24 GB，评测显示 64 GB 配置大约在 $2,700-$3,200。其 307 GB/s 带宽将速度限制在大约每秒 4-5 个 token。显卡的市场价格波动很大：据报道，2026 年 10 月 RTX 5090 的挂牌价远高于 $1,999 的发布价，请查看实时价格。',
            },
            {
              q: '能在单块 24 GB 显卡上运行 70B 模型吗？',
              a: '可以，但很慢。RTX 4090 这类 24 GB 显卡能装下约 55% 的 Q4_K_M 70B 模型；其余层从系统内存以 CPU 内存速度运行，搭配高速 DDR5 约为每秒 2-4 个 token。要获得交互级速度，请使用更小的模型（27B-34B 可放入 24 GB，例如 Qwen3.8-27B）、两块 GPU，或 64 GB 以上的统一内存机器。',
            },
            {
              q: '能在两块 GPU 上运行 70B 模型吗？',
              a: '可以。两块 24 GB 显卡（RTX 3090 或 4090）共提供 48 GB 显存，可容纳 Q4_K_M 的 70B 模型（43 GB）以及几千 token 的短上下文。Ollama 和 llama.cpp 会自动或通过 --tensor-split 把层拆分到两块显卡上。估算速度约为每秒 12-17 个 token，因为每个 token 都要依次经过两块显卡。',
            },
            {
              q: '在多 GPU 硬件上运行 70B 大模型，哪种推理运行时最好？',
              a: '对于单个用户，使用层拆分的 Ollama 或 llama.cpp 最简单，并且支持混搭 GPU。对于多个并发用户或智能体，把 --tensor-parallel-size 设为 GPU 数量的 vLLM，或 SGLang，因为会批量处理请求，总吞吐量高得多；两者都更适合使用相同的 GPU 以及 AWQ、GPTQ 或 FP8 权重。TensorRT-LLM 在 NVIDIA 上吞吐量最高，但需要一个引擎构建步骤。',
            },
            {
              q: '以 70B 为后端的多智能体系统需要多少 GPU 内存？',
              a: '权重只算一次，再为每个并发会话加一份 KV 缓存。Llama 3.3 70B 在 Q4_K_M 下权重约需 43 GB；每个活跃会话在 FP16 下每个上下文 token 增加约 0.33 MB。因此四个智能体各用 32K token，共需约 43 GB + 43 GB = 86 GB。请让所有智能体共用一个服务器（vLLM、SGLang，或带并行槽位的 llama.cpp），而不是为每个智能体各加载一份模型。',
            },
            {
              q: '256 GB 内存对 70B 模型的 CPU 推理有帮助吗？',
              a: '它提升的是容量，而不是速度。256 GB 可以让你加载 Q8_0（75 GB）或 FP16（141 GB）并使用长上下文，但解码速度受内存通道数限制：在 Q4_K_M 到 Q8_0 下，双通道桌面平台约为每秒 0.5-1.5 个 token，8 通道 Threadripper PRO 约 3-6 个，12 通道 EPYC 约 4-8 个（根据内存带宽估算，不是我们运行的基准测试）。',
            },
            {
              q: 'Mac mini M6 能运行 70B 模型吗？',
              a: '不能。Mac mini M6（起价 $899）最高只有 32 GB 统一内存和 170 GB/s 带宽，低于 Q4_K_M 的 70B 模型所需的 43 GB。Mac mini M5 Pro（起价 $1,699，307 GB/s，Thunderbolt 5）最高可配置 64 GB；$1,699 的基础款为 24 GB，因此请订购 64 GB 的定制配置。两款均已于 2026 年 9 月 22 日发货。',
            },
            {
              q: 'NVIDIA DGX Spark 是什么？用于 70B 推理值得买吗？',
              a: 'DGX Spark 是 NVIDIA 的紧凑型桌面 AI 计算机，配备 128 GB、273 GB/s 的统一 LPDDR5x 内存。它能加载 Q8_0 的 70B 模型，但受带宽限制：LMSYS 实测 Llama 3.1 70B 在 FP8 下的解码速度为每秒 2.7 个 token。它更适合 CUDA 工作、微调和大型 MoE 模型，而不是追求速度的稠密 70B 对话。NVIDIA 在 2026 年 2 月将 Founders Edition 从 $3,999 上调至 $4,699，2026 年 10 月有报道称价格为 $6,950，同时合作伙伴还提供 $4,999 的 64 GB 版本。',
            },
            {
              q: '70B 本地模型的质量与云端模型相比如何？',
              a: 'Meta 报告 Llama 3.3 70B Instruct 的 MMLU（CoT）为 86.0，HumanEval 为 88.4。此后发布的前沿云端模型在重推理任务上得分更高，而 70B 本地模型在摘要、信息提取、起草和常规代码生成方面仍有竞争力。在投资 70B 硬件之前，请用自己的提示词测试两者，例如使用 [PromptQuorum](/zh)。',
            },
            {
              q: '运行 70B 模型耗电多少？',
              a: 'GPU 在生成时最高可达其板卡功耗：RTX 3090 为 350 W，RTX 4090 为 450 W，RTX 5090 为 575 W。按每千瓦时 $0.15 计算，RTX 4090 满载时仅 GPU 一项每小时约 $0.07。运行同一模型时，Apple Silicon 和统一内存主机的功耗要低得多，但速度也较低。',
            },
            {
              q: '日常任务中，70B 模型比小模型更值得吗？',
              a: '对于复杂推理、长文档分析和细腻写作，通常值得。对于简单摘要、问答和分类，7B-14B 模型往往能产生相近的输出，而硬件成本只是一小部分。在投资 70B 硬件之前，请用自己的提示词运行两者做比较。',
            },
            {
              q: '能在消费级硬件上微调 70B 模型吗？',
              a: '只能用 QLoRA。QLoRA 把基础模型保持在 4 位（约 35 GB），只训练小型适配器；Answer.AI 已展示用 FSDP+QLoRA 在两块 24 GB 游戏显卡上训练 70B 模型。完整的 16 位微调需要约 1 TB 内存，属于多 GPU 服务器的工作。除了偶尔的 QLoRA 训练之外，租用 80 GB 云 GPU 通常更实际。',
            },
            {
              q: 'Apple Silicon 上运行 70B 的最佳量化是什么？',
              a: '在 64 GB 的 Mac 上，请使用 Q4_K_M（43 GB）。macOS 默认将 GPU 可寻址内存限制在内存的约 75%（64 GB 的 Mac 约为 48 GB），因此 Q5_K_M（50 GB）只有在用 sysctl iogpu.wired_limit_mb 提高上限后才能运行，而且余量很小。在 96-128 GB 的机器上，Q8_0（75 GB）是近乎无损的选择，速度大约只有 Q4_K_M 的一半，因为每个 token 要多读一倍的字节。',
            },
            {
              q: 'Ollama 会自动选择最佳量化吗？',
              a: '不会。ollama run llama3.3:70b 下载的是默认的 Q4_K_M（43 GB）。要用其他等级，请指定标签，例如 ollama run llama3.3:70b-instruct-q5_K_M 或 ollama run llama3.3:70b-instruct-q8_0。加载后运行 ollama ps：PROCESSOR 列会显示模型有多少运行在 GPU、多少运行在 CPU。',
            },
            {
              q: 'iPhone 或笔记本能运行 70B 模型吗？',
              a: 'iPhone 不行：目前的 iPhone 只有 8-12 GB 内存，而 Q4_K_M 的 70B 模型约需 43 GB，所以手机运行的是 1B-8B 模型。笔记本只有在配备 64 GB 以上统一内存（高配 MacBook Pro）或 128 GB 的 AMD Ryzen AI Max+ 395 系统时才行。配备 16-24 GB 显存的游戏本，例如 ASUS ROG Strix，属于缓慢的部分卸载情形。',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: '参考资料',
          items: [
            '[Ollama: Llama 3.3 tags and sizes](https://ollama.com/library/llama3.3/tags) -- Q4_K_M 43 GB，Q5_K_M 50 GB，Q8_0 75 GB，FP16 141 GB',
            '[Meta Llama 3.3 70B Instruct model card](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) -- MMLU（CoT）86.0，HumanEval 88.4，128K 上下文，许可证',
            '[Qwen2.5 72B Instruct model card](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) -- 727 亿参数，YaRN 下 131K 上下文',
            '[Mistral Large Instruct 2407 model card](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) -- 1,230 亿参数，Mistral Research License',
            '[LMSYS: NVIDIA DGX Spark in-depth review](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) -- Llama 3.1 70B FP8 解码 2.7 tok/s，273 GB/s',
            '[Apple Newsroom: Mac mini with M6 and M5 Pro](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) -- 价格、内存、带宽',
            '[9to5Mac: Mac Studio with M5 Max and M5 Ultra](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) -- 价格、基础与最大内存、带宽',
            '[NVIDIA developer forum: DGX Spark price change](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) -- $3,999 上调至 $4,699',
            '[TechnoEdge: DGX Spark price increase and 64 GB model](https://www.techno-edge.net/article/2026/10/08/5565.html) -- 据报道的 $6,950 和 $4,999 价格',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- 64 GB / 1 TB 配置标价 $3,199',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- 升级到 48 GB 和 64 GB 内存的价格',
            '[Answer.AI: train a 70B model at home](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) -- 在两块 24 GB 显卡上使用 FSDP + QLoRA',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) -- GPU 卸载与多 GPU 拆分文档',
            '[Olares One](https://www.olares.com/one) -- RTX 5090 Mobile（24 GB GDDR7）、96 GB DDR5、硬件成本 $4,999',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '本地运行 70B 大模型 2026：各硬件内存与速度',
        description: '70B 模型在 Q4_K_M 下约需 43 GB 内存，另加上下文。对比 Mac、DGX Spark、RTX 显卡和纯 CPU 电脑（含 256 GB 内存）所需的内存、显存与估算 tok/s。',
        url: 'https://www.promptquorum.com/zh/local-llms/70b-models-consumer-hardware',
        datePublished: '2026-04-04',
        dateModified: '2026-10-29',
        inLanguage: 'zh',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        about: [
          { '@type': 'Thing', name: '70B 语言模型' },
          { '@type': 'Thing', name: 'Apple Silicon 推理' },
          { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
          { '@type': 'Thing', name: '层卸载' },
          { '@type': 'Thing', name: 'Llama 3.3 70B' },
          { '@type': 'Thing', name: 'Qwen2.5 72B' },
          { '@type': 'Thing', name: 'NVIDIA DGX Spark' },
          { '@type': 'Thing', name: 'Apple Mac mini M5 Pro' },
          { '@type': 'Thing', name: '内存带宽' },
        ],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'Ollama' },
          { '@type': 'SoftwareApplication', name: 'llama.cpp' },
          { '@type': 'SoftwareApplication', name: 'vLLM' },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '如何使用 Ollama 在消费级硬件上运行 70B 模型',
        inLanguage: 'zh',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: '确认你有 48 GB 以上的高速内存（统一内存、显存或系统内存），用于存放模型和上下文',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: '从 ollama.com 安装 Ollama',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: '运行：ollama run llama3.3:70b',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: '用以下命令查看 CPU/GPU 拆分情况：ollama ps',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: '内存紧张时调整量化：使用 q3_K_S 标签，或缩短上下文',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '2026 年运行 70B 本地大模型的硬件',
        inLanguage: 'zh',
        numberOfItems: 12,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Mac Studio M5 Max（64-128 GB）',
            description: '能——完整 GPU。约 9-11 tok/s（估算）。基础配置为 36 GB；64 GB 以上需升级。',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mac Studio M5 Ultra（96 GB 起）',
            description: '能——可运行 Q8_0。约 17-21 tok/s（估算）。96 GB 起价 $5,499。',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mac mini M5 Pro（64 GB）',
            description: '能——很紧张。约 4-5 tok/s（估算）。$1,699 基础款为 24 GB；64 GB 需定制。',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Mac mini M6（最高 32 GB）',
            description: '不能。不适用（估算）。最高 32 GB，低于约 43 GB 的 Q4 文件。',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mac Studio M2 Ultra（64 GB 起，二手）',
            description: '能——完整 GPU。约 12-15 tok/s（估算）。仅二手市场；请确认内存容量。',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NVIDIA DGX Spark（128 GB）',
            description: '能——可运行 Q8_0。约 4-5 tok/s（估算）。FP8 实测 2.7 tok/s；据报道 $6,950。',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'AMD Ryzen AI Max+ 395（128 GB）',
            description: '能。约 4-5 tok/s（估算）。迷你主机和笔记本；GPU 内存占比可配置。',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '2 块 RTX 3090 / 4090（48 GB）',
            description: '能——很紧张。约 12-17 tok/s（估算）。仅限 Q4_K_M 加短上下文。',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'RTX 5090（32 GB）+ 64 GB 内存',
            description: '部分卸载。约 4-6 tok/s（估算）。约 70% 的层在 GPU，其余在系统内存。',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'RTX 4090（24 GB）+ 64 GB 内存',
            description: '部分卸载。约 2-4 tok/s（估算）。约 55% 的层在 GPU，其余在系统内存。',
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: '纯 CPU，双通道 DDR5',
            description: '能——仅 CPU。约 1-2 tok/s（估算）。仅适合批处理任务。',
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: '纯 CPU，8-12 通道服务器内存',
            description: '能——仅 CPU。约 5-8 tok/s（估算）。Threadripper PRO / EPYC；256 GB 可运行 Q8_0。',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            name: '在本地运行 70B 大模型需要什么硬件？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70B 在 Q4_K_M 下约需 43 GB 高速内存，另加 3-10 GB 用于上下文。有三种配置能把整个模型放进高速内存：64 GB 及以上统一内存的 Apple Silicon Mac、两块 24 GB NVIDIA 显卡（共 48 GB 显存），或一台 128 GB 统一内存的主机，例如 NVIDIA DGX Spark 或 AMD Ryzen AI Max+ 395 迷你主机。容量决定模型能否运行，内存带宽决定运行多快。单块 24 GB 显卡或纯 CPU 电脑也能运行，但只有约每秒 1-4 个 token。',
            },
          },
          {
            '@type': 'Question',
            name: '什么是 70B 模型？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '70B 模型是拥有约 700 亿参数（权重）的大语言模型。Llama 3.3 70B 有 706 亿参数，Qwen2.5 72B 有 727 亿参数。文件大小由参数量决定：16 位约 141 GB，8 位（Q8_0）约 75 GB，4 位（Q4_K_M）约 43 GB。',
            },
          },
          {
            '@type': 'Question',
            name: '70B 模型需要多少显存或内存？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70B 在 Q4_K_M 下需要 43 GB，Q5_K_M 下 50 GB，Q8_0 下 75 GB，FP16 下 141 GB（Ollama 库中的大小），此外还需要上下文的 KV 缓存：8K token 约 2.7 GB，32K 约 10.7 GB，128K 约 43 GB。只有 24 GB 显存时，Q4_K_M 模型只有大约一半能放进 GPU，其余部分从系统内存运行。',
            },
          },
          {
            '@type': 'Question',
            name: '能够实用地运行 70B 模型的最便宜硬件是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '若要达到约每秒 10 个 token 或更高，可行的选择是配置 64 GB 及以上的 Mac Studio M5 Max（$2,499 的基础款为 36 GB）、64 GB 及以上的二手 Mac Studio M2 Ultra，或两块二手 24 GB 显卡。最便宜的全新 Apple 方案是 64 GB 的 Mac mini M5 Pro：$1,699 的基础款只有 24 GB，评测显示 64 GB 配置大约在 $2,700-$3,200。其 307 GB/s 带宽将速度限制在大约每秒 4-5 个 token。显卡的市场价格波动很大：据报道，2026 年 10 月 RTX 5090 的挂牌价远高于 $1,999 的发布价，请查看实时价格。',
            },
          },
          {
            '@type': 'Question',
            name: '能在单块 24 GB 显卡上运行 70B 模型吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '可以，但很慢。RTX 4090 这类 24 GB 显卡能装下约 55% 的 Q4_K_M 70B 模型；其余层从系统内存以 CPU 内存速度运行，搭配高速 DDR5 约为每秒 2-4 个 token。要获得交互级速度，请使用更小的模型（27B-34B 可放入 24 GB，例如 Qwen3.8-27B）、两块 GPU，或 64 GB 以上的统一内存机器。',
            },
          },
          {
            '@type': 'Question',
            name: '能在两块 GPU 上运行 70B 模型吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '可以。两块 24 GB 显卡（RTX 3090 或 4090）共提供 48 GB 显存，可容纳 Q4_K_M 的 70B 模型（43 GB）以及几千 token 的短上下文。Ollama 和 llama.cpp 会自动或通过 --tensor-split 把层拆分到两块显卡上。估算速度约为每秒 12-17 个 token，因为每个 token 都要依次经过两块显卡。',
            },
          },
          {
            '@type': 'Question',
            name: '在多 GPU 硬件上运行 70B 大模型，哪种推理运行时最好？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '对于单个用户，使用层拆分的 Ollama 或 llama.cpp 最简单，并且支持混搭 GPU。对于多个并发用户或智能体，把 --tensor-parallel-size 设为 GPU 数量的 vLLM，或 SGLang，因为会批量处理请求，总吞吐量高得多；两者都更适合使用相同的 GPU 以及 AWQ、GPTQ 或 FP8 权重。TensorRT-LLM 在 NVIDIA 上吞吐量最高，但需要一个引擎构建步骤。',
            },
          },
          {
            '@type': 'Question',
            name: '以 70B 为后端的多智能体系统需要多少 GPU 内存？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '权重只算一次，再为每个并发会话加一份 KV 缓存。Llama 3.3 70B 在 Q4_K_M 下权重约需 43 GB；每个活跃会话在 FP16 下每个上下文 token 增加约 0.33 MB。因此四个智能体各用 32K token，共需约 43 GB + 43 GB = 86 GB。请让所有智能体共用一个服务器（vLLM、SGLang，或带并行槽位的 llama.cpp），而不是为每个智能体各加载一份模型。',
            },
          },
          {
            '@type': 'Question',
            name: '256 GB 内存对 70B 模型的 CPU 推理有帮助吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '它提升的是容量，而不是速度。256 GB 可以让你加载 Q8_0（75 GB）或 FP16（141 GB）并使用长上下文，但解码速度受内存通道数限制：在 Q4_K_M 到 Q8_0 下，双通道桌面平台约为每秒 0.5-1.5 个 token，8 通道 Threadripper PRO 约 3-6 个，12 通道 EPYC 约 4-8 个（根据内存带宽估算，不是我们运行的基准测试）。',
            },
          },
          {
            '@type': 'Question',
            name: 'Mac mini M6 能运行 70B 模型吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '不能。Mac mini M6（起价 $899）最高只有 32 GB 统一内存和 170 GB/s 带宽，低于 Q4_K_M 的 70B 模型所需的 43 GB。Mac mini M5 Pro（起价 $1,699，307 GB/s，Thunderbolt 5）最高可配置 64 GB；$1,699 的基础款为 24 GB，因此请订购 64 GB 的定制配置。两款均已于 2026 年 9 月 22 日发货。',
            },
          },
          {
            '@type': 'Question',
            name: 'NVIDIA DGX Spark 是什么？用于 70B 推理值得买吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DGX Spark 是 NVIDIA 的紧凑型桌面 AI 计算机，配备 128 GB、273 GB/s 的统一 LPDDR5x 内存。它能加载 Q8_0 的 70B 模型，但受带宽限制：LMSYS 实测 Llama 3.1 70B 在 FP8 下的解码速度为每秒 2.7 个 token。它更适合 CUDA 工作、微调和大型 MoE 模型，而不是追求速度的稠密 70B 对话。NVIDIA 在 2026 年 2 月将 Founders Edition 从 $3,999 上调至 $4,699，2026 年 10 月有报道称价格为 $6,950，同时合作伙伴还提供 $4,999 的 64 GB 版本。',
            },
          },
          {
            '@type': 'Question',
            name: '70B 本地模型的质量与云端模型相比如何？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Meta 报告 Llama 3.3 70B Instruct 的 MMLU（CoT）为 86.0，HumanEval 为 88.4。此后发布的前沿云端模型在重推理任务上得分更高，而 70B 本地模型在摘要、信息提取、起草和常规代码生成方面仍有竞争力。在投资 70B 硬件之前，请用自己的提示词测试两者，例如使用 [PromptQuorum](/zh)。',
            },
          },
          {
            '@type': 'Question',
            name: '运行 70B 模型耗电多少？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPU 在生成时最高可达其板卡功耗：RTX 3090 为 350 W，RTX 4090 为 450 W，RTX 5090 为 575 W。按每千瓦时 $0.15 计算，RTX 4090 满载时仅 GPU 一项每小时约 $0.07。运行同一模型时，Apple Silicon 和统一内存主机的功耗要低得多，但速度也较低。',
            },
          },
          {
            '@type': 'Question',
            name: '日常任务中，70B 模型比小模型更值得吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '对于复杂推理、长文档分析和细腻写作，通常值得。对于简单摘要、问答和分类，7B-14B 模型往往能产生相近的输出，而硬件成本只是一小部分。在投资 70B 硬件之前，请用自己的提示词运行两者做比较。',
            },
          },
          {
            '@type': 'Question',
            name: '能在消费级硬件上微调 70B 模型吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '只能用 QLoRA。QLoRA 把基础模型保持在 4 位（约 35 GB），只训练小型适配器；Answer.AI 已展示用 FSDP+QLoRA 在两块 24 GB 游戏显卡上训练 70B 模型。完整的 16 位微调需要约 1 TB 内存，属于多 GPU 服务器的工作。除了偶尔的 QLoRA 训练之外，租用 80 GB 云 GPU 通常更实际。',
            },
          },
          {
            '@type': 'Question',
            name: 'Apple Silicon 上运行 70B 的最佳量化是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '在 64 GB 的 Mac 上，请使用 Q4_K_M（43 GB）。macOS 默认将 GPU 可寻址内存限制在内存的约 75%（64 GB 的 Mac 约为 48 GB），因此 Q5_K_M（50 GB）只有在用 sysctl iogpu.wired_limit_mb 提高上限后才能运行，而且余量很小。在 96-128 GB 的机器上，Q8_0（75 GB）是近乎无损的选择，速度大约只有 Q4_K_M 的一半，因为每个 token 要多读一倍的字节。',
            },
          },
          {
            '@type': 'Question',
            name: 'Ollama 会自动选择最佳量化吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '不会。ollama run llama3.3:70b 下载的是默认的 Q4_K_M（43 GB）。要用其他等级，请指定标签，例如 ollama run llama3.3:70b-instruct-q5_K_M 或 ollama run llama3.3:70b-instruct-q8_0。加载后运行 ollama ps：PROCESSOR 列会显示模型有多少运行在 GPU、多少运行在 CPU。',
            },
          },
          {
            '@type': 'Question',
            name: 'iPhone 或笔记本能运行 70B 模型吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'iPhone 不行：目前的 iPhone 只有 8-12 GB 内存，而 Q4_K_M 的 70B 模型约需 43 GB，所以手机运行的是 1B-8B 模型。笔记本只有在配备 64 GB 以上统一内存（高配 MacBook Pro）或 128 GB 的 AMD Ryzen AI Max+ 395 系统时才行。配备 16-24 GB 显存的游戏本，例如 ASUS ROG Strix，属于缓慢的部分卸载情形。',
            },
          },
        ],
      },
    },
    ko: {
      designSkin: 'hub',
      freshness_tier: 'semi_annual',
      theme: '최고 모델',
      title: '70B LLM 로컬 실행 2026: 하드웨어·RAM·속도',
      seoTitle: '70B 하드웨어 요구사항 2026: RAM·VRAM·속도',
      intro: '70B 모델을 로컬에서 실행하려면 Q4_K_M 기준으로 약 43 GB의 빠른 메모리와 컨텍스트용 3-10 GB가 필요합니다. 통합 메모리 64 GB 이상의 Mac, 24 GB GPU 두 장, 또는 128 GB 통합 메모리 장비라면 모델 전체를 빠른 메모리에 올릴 수 있습니다. 속도는 메모리 대역폭에 따라 결정되며, 데스크톱 CPU의 1-2 tokens/sec에서 Mac Studio M5 Max의 대략 10 tokens/sec까지 차이가 납니다. Llama 3.3 70B와 Qwen2.5 72B가 70B급 덴스 모델의 대표 주자입니다.',
      metaDescription: '70B 모델은 Q4_K_M 기준 약 43 GB와 컨텍스트 메모리가 필요합니다. Mac, DGX Spark, RTX GPU, CPU 전용 PC(RAM 256 GB 포함)별 RAM·VRAM과 대역폭 기반 추정 tok/s를 비교합니다.',
      heroImage: '/images/70b-models-consumer-hardware-hardware-comparison-hero-ko.webp',
      publishDate: '2026-04-04',
      dateModified: '2026-10-29',
      leadAnswerBlock: '**70B 모델은 Q4_K_M(Llama 3.3 70B) 기준 약 43 GB의 메모리와 컨텍스트용 3-10 GB가 필요하며, 속도는 용량이 아니라 메모리 대역폭이 결정합니다. 64 GB 이상의 Mac, 24 GB GPU 두 장, 또는 128 GB 통합 메모리 장비는 모델 전체를 빠른 메모리에 올릴 수 있고, 24 GB GPU 한 장이나 CPU 전용 PC는 약 1-4 tokens/sec로 실행합니다.**',
      audience: 'Ollama 또는 LM Studio에 익숙하며 로컬 LLM 워크플로를 최적화하려는 개발자',
      readTime: '11분 읽기',
      educationalLevel: 'Intermediate',
      primaryTerm: '70B 로컬 LLM 소비자 하드웨어',
      toc: [
        {
          label: '핵심 요약',
          anchor: '#key-takeaways',
        },
        {
          label: '70B 모델이란?',
          anchor: '#what-is-70b',
        },
        {
          label: '필요한 하드웨어',
          anchor: '#what-hardware',
        },
        {
          label: '양자화별 메모리 요구량',
          anchor: '#ram-requirements',
        },
        {
          label: '컨텍스트와 KV 캐시 메모리',
          anchor: '#context-memory',
        },
        {
          label: '메모리 대역폭이 속도를 정하는 이유',
          anchor: '#memory-bandwidth',
        },
        {
          label: 'Apple Silicon',
          anchor: '#apple-silicon',
        },
        {
          label: 'NVIDIA DGX Spark와 통합 메모리 PC',
          anchor: '#dgx-spark',
        },
        {
          label: 'NVIDIA GPU + 레이어 오프로딩',
          anchor: '#nvidia-layer-offloading',
        },
        {
          label: '멀티 GPU 런타임',
          anchor: '#multi-gpu-runtimes',
        },
        {
          label: 'CPU 전용 70B 추론',
          anchor: '#cpu-only',
        },
        {
          label: '70B급 MoE 모델',
          anchor: '#moe-models',
        },
        {
          label: '어떤 70B 모델을 실행해야 할까?',
          anchor: '#which-model',
        },
        {
          label: '70B 모델 파인튜닝',
          anchor: '#fine-tuning',
        },
        {
          label: '지역별 맥락',
          anchor: '#regional-context',
        },
        {
          label: '흔한 실수',
          anchor: '#common-mistakes',
        },
        {
          label: '관련 읽을거리',
          anchor: '#related-reading',
        },
        {
          label: '자주 묻는 질문',
          anchor: '#faq',
        },
        {
          label: '출처',
          anchor: '#sources',
        },
      ],
      sections: {
        tldr: {
          id: 'key-takeaways',
          isTldr: true,
          snippetBlocks: [
            {
              type: 'one-sentence',
              text: '70B 모델은 Q4_K_M 기준 약 43 GB의 메모리와 컨텍스트용 3-10 GB가 필요하고, 생성 속도는 대략 대역폭을 모델 크기로 나눈 값(tokens/sec)이므로, 64 GB 이상의 Mac, 24 GB GPU 두 장, 128 GB 통합 메모리 장비는 빠른 메모리에서 실행하는 반면 24 GB GPU 한 장은 2-4 tokens/sec에 그칩니다.',
            },
            {
              type: 'plain-terms',
              text: '70B 모델은 조정 가능한 수치가 약 700억 개인 매우 큰 AI 모델입니다. 불러오는 데 약 43 GB의 메모리가 필요하고, 응답 속도는 그 메모리를 얼마나 빨리 읽을 수 있는지에 달려 있습니다. 통합 메모리가 넉넉한 Mac이나 대형 그래픽 카드 두 장이 편안한 선택이며, 그래픽 카드 한 장짜리 일반 PC도 실행은 되지만 응답이 느립니다.',
            },
          ],
          items: [
            'Q4_K_M 기준 메모리: Llama 3.3 70B는 43 GB, Q5_K_M은 50 GB, Q8_0은 75 GB, FP16은 141 GB입니다. 컨텍스트는 8K 토큰당 약 2.7 GB를 추가합니다.',
            '**속도 규칙**: tokens/sec의 상한은 메모리 대역폭을 모델 크기로 나눈 값이며, 실제 속도는 보통 그 상한의 60-80%입니다. 614 GB/s에서 43 GB 모델의 상한은 약 14 tok/sec입니다.',
            '**소비자용 최고 속도**: 64 GB 이상으로 구성한 Mac Studio M5 Max(약 9-11 tok/sec) 또는 24 GB GPU 두 장(약 12-17 tok/sec)입니다. Mac Studio M5 Ultra는 추정 17-21 tok/sec에 이릅니다.',
            '**Mac mini**: $1,699 M5 Pro 모델은 24 GB이며, 64 GB는 주문 제작 업그레이드로 약 4-5 tok/sec가 나옵니다. M6 Mac mini(최대 32 GB)는 70B를 실행할 수 없습니다.',
            '**DGX Spark**: 128 GB이지만 대역폭은 273 GB/s뿐이며, LMSYS는 FP8 70B에서 2.7 tok/sec를 측정했습니다. 빠른 덴스 70B 채팅이 아니라 CUDA와 대형 MoE 모델을 위해 구매하는 장비입니다.',
            '**24 GB GPU 한 장 또는 CPU 전용**: 빠른 DDR5를 쓰는 RTX 4090은 약 2-4 tok/sec, 데스크톱 CPU는 1-2 tok/sec입니다. RAM 256 GB는 속도가 아니라 용량(Q8_0, FP16, 긴 컨텍스트)을 늘려 줍니다.',
            'Qwen3 72B는 존재하지 않습니다. 72B 모델은 Qwen2.5 72B입니다. 최신 대형 오픈 모델은 대부분 Mixture-of-Experts입니다.',
          ],
        },
        whatIs70b: {
          id: 'what-is-70b',
          title: '70B 모델이란 무엇인가?',
          content: [
            '**70B 모델은 약 700억 개의 파라미터, 즉 신경망을 이루는 학습된 가중치를 가진 대규모 언어 모델입니다.** "B"는 10억(billion)을 뜻합니다. Llama 3.3 70B는 706억 개, Qwen2.5 72B는 727억 개의 파라미터를 가집니다.',
            '메모리는 파라미터 수에 가중치당 바이트 수를 곱한 값입니다. 16비트 가중치는 개당 2바이트(약 141 GB), 8비트(Q8_0)는 약 1바이트(75 GB), 4비트 Q4_K_M은 약 0.6바이트(43 GB)입니다. 그래서 70B는 소비자 하드웨어에 처음으로 40 GB 이상의 빠른 메모리가 필요해지는 크기이고, 7B-14B 모델은 평범한 노트북에도 들어갑니다.',
          ],
        },
        whatHardware: {
          id: 'what-hardware',
          title: '70B LLM을 로컬에서 실행하려면 어떤 하드웨어가 필요한가?',
          content: [
            '**모델에 약 43 GB, 컨텍스트에 3-10 GB의 빠른 메모리가 필요하며, 이는 GPU VRAM, Apple 통합 메모리 또는 시스템 RAM에 있어야 합니다. 메모리가 빠를수록 모델도 빠르게 생성합니다.**',
            '아래 속도는 짧은 컨텍스트에서의 단일 사용자 채팅 추정치로, 메모리 대역폭에서 구한 값입니다("메모리 대역폭이 속도를 정하는 이유" 참조). 상한을 일반적인 효율 60-80%로 낮춘 값이며 PromptQuorum이 실행한 벤치마크가 아닙니다. 예외는 DGX Spark 수치로, 제3자가 측정한 값입니다.',
          ],
          rows: [
            {
              '하드웨어': 'Mac Studio M5 Max (64-128 GB)',
              '70B Q4 적재?': '가능 — 전체 GPU',
              '메모리 대역폭': '최대 614 GB/s',
              '추정 속도 (Q4_K_M)': '~9-11 tok/s',
              '비고': '기본 구성은 36 GB, 64 GB 이상은 업그레이드',
            },
            {
              '하드웨어': 'Mac Studio M5 Ultra (96 GB+)',
              '70B Q4 적재?': '가능 — Q8_0도 적재',
              '메모리 대역폭': '최대 1.2 TB/s',
              '추정 속도 (Q4_K_M)': '~17-21 tok/s',
              '비고': '96 GB 모델이 $5,499부터',
            },
            {
              '하드웨어': 'Mac mini M5 Pro (64 GB)',
              '70B Q4 적재?': '가능 — 빠듯함',
              '메모리 대역폭': '307 GB/s',
              '추정 속도 (Q4_K_M)': '~4-5 tok/s',
              '비고': '기본 $1,699는 24 GB, 64 GB는 주문 제작',
            },
            {
              '하드웨어': 'Mac mini M6 (최대 32 GB)',
              '70B Q4 적재?': '불가',
              '메모리 대역폭': '170 GB/s',
              '추정 속도 (Q4_K_M)': 'N/A',
              '비고': '최대 32 GB는 약 43 GB Q4 파일에 못 미침',
            },
            {
              '하드웨어': 'Mac Studio M2 Ultra (64 GB+, 중고)',
              '70B Q4 적재?': '가능 — 전체 GPU',
              '메모리 대역폭': '800 GB/s',
              '추정 속도 (Q4_K_M)': '~12-15 tok/s',
              '비고': '중고 시장 한정, 메모리 용량 확인',
            },
            {
              '하드웨어': 'NVIDIA DGX Spark (128 GB)',
              '70B Q4 적재?': '가능 — Q8_0도 적재',
              '메모리 대역폭': '273 GB/s',
              '추정 속도 (Q4_K_M)': '~4-5 tok/s',
              '비고': 'FP8 실측 2.7 tok/s, 보도된 가격 $6,950',
            },
            {
              '하드웨어': 'AMD Ryzen AI Max+ 395 (128 GB)',
              '70B Q4 적재?': '가능',
              '메모리 대역폭': '256 GB/s',
              '추정 속도 (Q4_K_M)': '~4-5 tok/s',
              '비고': '미니 PC·노트북, GPU 메모리 할당 설정 가능',
            },
            {
              '하드웨어': '2x RTX 3090 / 4090 (48 GB)',
              '70B Q4 적재?': '가능 — 빠듯함',
              '메모리 대역폭': '카드당 936-1,008 GB/s',
              '추정 속도 (Q4_K_M)': '~12-17 tok/s',
              '비고': 'Q4_K_M과 짧은 컨텍스트만 가능',
            },
            {
              '하드웨어': 'RTX 5090 (32 GB) + 64 GB RAM',
              '70B Q4 적재?': '부분 오프로딩',
              '메모리 대역폭': 'VRAM 1,792 GB/s',
              '추정 속도 (Q4_K_M)': '~4-6 tok/s',
              '비고': '레이어 약 70%는 GPU, 나머지는 시스템 RAM',
            },
            {
              '하드웨어': 'RTX 4090 (24 GB) + 64 GB RAM',
              '70B Q4 적재?': '부분 오프로딩',
              '메모리 대역폭': 'VRAM 1,008 GB/s',
              '추정 속도 (Q4_K_M)': '~2-4 tok/s',
              '비고': '레이어 약 55%는 GPU, 나머지는 시스템 RAM',
            },
            {
              '하드웨어': 'Olares One (RTX 5090 Mobile 24 GB + 96 GB RAM)',
              '70B Q4 적재?': '부분 오프로딩',
              '메모리 대역폭': 'VRAM 비공개 / RAM ~90 GB/s',
              '추정 속도 (Q4_K_M)': '~2-4 tok/s',
              '비고': 'GDDR7 VRAM 24 GB; 하드웨어 비용 $4,999',
            },
            {
              '하드웨어': 'CPU 전용, 듀얼 채널 DDR5',
              '70B Q4 적재?': '가능 — CPU 전용',
              '메모리 대역폭': '~90 GB/s',
              '추정 속도 (Q4_K_M)': '~1-2 tok/s',
              '비고': '배치 작업 전용',
            },
            {
              '하드웨어': 'CPU 전용, 8-12채널 서버 RAM',
              '70B Q4 적재?': '가능 — CPU 전용',
              '메모리 대역폭': '350-460 GB/s',
              '추정 속도 (Q4_K_M)': '~5-8 tok/s',
              '비고': 'Threadripper PRO / EPYC, 256 GB면 Q8_0 가능',
            },
          ],
          columns: [
            '하드웨어',
            '70B Q4 적재?',
            '메모리 대역폭',
            '추정 속도 (Q4_K_M)',
            '비고',
          ],
          callouts: [
            { type: 'insight', text: '**Olares One**([olares.com/one](https://www.olares.com/one))은 RTX 5090 Mobile(GDDR7 VRAM 24 GB), Intel Core Ultra 9 275HX, DDR5-5600 RAM 96 GB(Olares에 따르면 128 GB까지 확장 가능)를 갖춘 소형 AI 데스크톱입니다. 70B 모델에서는 위의 RTX 4090 행과 비슷하게 동작합니다. Q4_K_M 모델의 약 55%가 VRAM에 올라가고 나머지는 시스템 RAM에서 읽으므로 약 2-4 tokens/s로 예상됩니다(추정치이며 벤치마크가 아닙니다). 96 GB RAM은 속도가 아니라 용량을 늘려 주며, Q8_0(75 GB)도 컨텍스트 여유를 두고 올라갑니다. Olares는 하드웨어 비용을 $4,999로 표기하며 70B tokens/s 수치는 공개하지 않습니다.' },
          ],
        },
        ramByQuant: {
          id: 'ram-requirements',
          title: '양자화 수준별로 70B 모델에는 RAM이나 VRAM이 얼마나 필요한가?',
          content: '아래 크기는 Ollama 라이브러리의 Llama 3.3 70B 파일 기준이며, 다른 70B 모델은 몇 퍼센트 정도 차이가 납니다. 가중치만의 크기이므로 다음 섹션의 컨텍스트 메모리를 더해야 합니다.',
          rows: [
            {
              '양자화': 'FP16 (전체 정밀도)',
              '메모리 (가중치)': '~141 GB',
              '품질': '기준 품질',
              '실용성': '192 GB 이상 Mac Ultra 또는 256 GB RAM 서버',
            },
            {
              '양자화': 'Q8_0',
              '메모리 (가중치)': '~75 GB',
              '품질': '거의 무손실',
              '실용성': '통합 메모리 96-128 GB 또는 RAM 128 GB',
            },
            {
              '양자화': 'Q6_K',
              '메모리 (가중치)': '~58 GB',
              '품질': 'Q8_0에 매우 근접',
              '실용성': '72-96 GB 머신',
            },
            {
              '양자화': 'Q5_K_M',
              '메모리 (가중치)': '~50 GB',
              '품질': '손실 최소',
              '실용성': '64 GB Mac에서 GPU 한도를 올리면 가능 — 빠듯함',
            },
            {
              '양자화': 'Q4_K_M',
              '메모리 (가중치)': '~43 GB',
              '품질': '손실 적음 — 기본값',
              '실용성': '가능 — 64 GB Mac 또는 48 GB 듀얼 GPU',
            },
            {
              '양자화': 'Q3_K_S',
              '메모리 (가중치)': '~31 GB',
              '품질': '중간 손실',
              '실용성': '가능 — 40-48 GB 머신',
            },
            {
              '양자화': 'Q2_K',
              '메모리 (가중치)': '~26 GB',
              '품질': '큰 손실',
              '실용성': '권장하지 않음',
            },
          ],
          columns: [
            '양자화',
            '메모리 (가중치)',
            '품질',
            '실용성',
          ],
        },
        contextMemory: {
          id: 'context-memory',
          title: '컨텍스트는 70B 모델에 메모리를 얼마나 더 필요로 하는가?',
          content: [
            '**컨텍스트는 가중치 위에 메모리를 추가합니다. Llama 3.3 70B는 FP16에서 토큰당 약 0.33 MB의 KV 캐시를 저장하며, 이는 8K 토큰에서 약 2.7 GB, 32K에서 10.7 GB, 128K에서 43 GB입니다.** 이 값은 모델 구조에서 나옵니다. 80개 레이어 x 8개 key-value 헤드 x 128차원 x 2(키와 값) x 2바이트 = 토큰당 327,680바이트입니다.',
            '동시 세션은 각자 KV 캐시를 따로 가지며 가중치는 공유합니다. 에이전트 네 개가 각각 32K 토큰을 쓰는 멀티 에이전트 시스템은 가중치 약 43 GB에 캐시 약 43 GB가 필요합니다. Ollama에서 플래시 어텐션과 8비트 KV 캐시(OLLAMA_FLASH_ATTENTION=1과 OLLAMA_KV_CACHE_TYPE=q8_0)를 켜면 캐시가 대략 절반으로 줄어듭니다.',
          ],
          rows: [
            {
              '컨텍스트 길이': '8K 토큰',
              'KV 캐시 (FP16)': '~2.7 GB',
              'Q4_K_M 포함 총합': '~46 GB',
            },
            {
              '컨텍스트 길이': '32K 토큰',
              'KV 캐시 (FP16)': '~10.7 GB',
              'Q4_K_M 포함 총합': '~54 GB',
            },
            {
              '컨텍스트 길이': '128K 토큰',
              'KV 캐시 (FP16)': '~43 GB',
              'Q4_K_M 포함 총합': '~86 GB',
            },
          ],
          columns: ['컨텍스트 길이', 'KV 캐시 (FP16)', 'Q4_K_M 포함 총합'],
        },
        memoryBandwidth: {
          id: 'memory-bandwidth',
          title: '메모리 대역폭이 70B 모델의 속도를 정하는 이유는?',
          content: [
            '**생성되는 모든 토큰은 모델 가중치를 한 번씩 전부 읽으므로, 디코드 속도의 상한은 메모리 대역폭을 모델 크기로 나눈 값입니다.** 614 GB/s 대역폭에서 43 GB Q4_K_M 모델의 상한은 약 14 tokens/sec이며, 실제 속도는 보통 상한의 60-80%입니다.',
            '같은 규칙이 "메모리가 크다고 빠른 것은 아니다"를 설명해 줍니다. 128 GB DGX Spark는 273 GB/s이므로 Q4_K_M에서 상한이 약 6 tokens/sec이고, LMSYS는 Llama 3.1 70B를 FP8(약 70 GB, 상한 3.9)로 실행했을 때 2.7 tokens/sec를 측정했습니다. 용량은 모델이 실행되는지를, 대역폭은 얼마나 빠른지를 정합니다. 프롬프트 처리(prefill)는 연산 속도에 좌우되어 다르게 동작합니다.',
          ],
          rows: [
            {
              '메모리': '듀얼 채널 DDR5-5600',
              '대역폭': '~90 GB/s',
              '43 GB 기준 상한': '~2 tok/s',
            },
            {
              '메모리': 'AMD Ryzen AI Max+ 395',
              '대역폭': '256 GB/s',
              '43 GB 기준 상한': '~6 tok/s',
            },
            {
              '메모리': 'NVIDIA DGX Spark',
              '대역폭': '273 GB/s',
              '43 GB 기준 상한': '~6 tok/s',
            },
            {
              '메모리': 'Apple M5 Pro',
              '대역폭': '307 GB/s',
              '43 GB 기준 상한': '~7 tok/s',
            },
            {
              '메모리': 'Apple M5 Max',
              '대역폭': '최대 614 GB/s',
              '43 GB 기준 상한': '~14 tok/s',
            },
            {
              '메모리': 'Apple M2 Ultra',
              '대역폭': '800 GB/s',
              '43 GB 기준 상한': '~19 tok/s',
            },
            {
              '메모리': 'Apple M5 Ultra',
              '대역폭': '최대 1.2 TB/s',
              '43 GB 기준 상한': '~28 tok/s',
            },
          ],
          columns: ['메모리', '대역폭', '43 GB 기준 상한'],
        },
        appleSilicon: {
          id: 'apple-silicon',
          title: 'Apple Silicon은 70B 모델에 좋은 선택인가?',
          content: [
            '**Apple Silicon은 CPU와 GPU가 하나의 통합 메모리 풀을 공유하므로, 70B 모델 전체를 GPU가 접근할 수 있는 메모리에 올리는 가장 간단한 방법입니다.** 64 GB 이상의 Mac은 레이어 오프로딩 없이 Q4_K_M을 실행하며, 속도는 칩의 대역폭에 따라 정해집니다. 추정치로 M5 Max에서 대략 9-11 tokens/sec, 중고 M2 Ultra에서 12-15 tokens/sec입니다. M5 칩의 70B 벤치마크는 아직 공개된 것을 찾지 못했습니다.',
            'Apple은 2026년 8월 25일에 M5 Max와 M5 Ultra를 탑재한 Mac Studio를 발표했고, 두 제품 모두 2026년 9월 22일에 출하되었습니다. M5 Max는 36 GB 모델이 $2,499부터이며 최대 614 GB/s로 128 GB까지 구성할 수 있습니다. 70B에는 64 GB 이상으로 구성하십시오. M5 Ultra는 96 GB 모델이 $5,499부터이며 최대 1.2 TB/s로 512 GB까지 구성할 수 있고 Q8_0도 여유롭게 실행합니다. 512 GB 구성은 10월 말 도착으로 안내되었습니다.',
            '**Mac mini M5 Pro는 64 GB가 아니라 24 GB 모델이 $1,699부터입니다.** 64 GB 주문 제작 구성(307 GB/s, Thunderbolt 5)은 Q4_K_M 70B 모델을 담을 수 있지만 생성 속도는 약 4-5 tokens/sec에 그치며, 리뷰에 따르면 CPU와 저장 장치에 따라 대략 $2,700-$3,200입니다. 기본형 Mac mini M6($899)는 최대 32 GB, 170 GB/s이며 어떤 양자화로도 70B 모델을 실행할 수 없습니다.',
            'macOS는 기본적으로 GPU가 접근할 수 있는 메모리를 RAM의 약 75%(64 GB Mac에서 약 48 GB)로 제한합니다. Q5_K_M(50 GB)을 실행하려면 한도를 올려야 합니다. 예를 들어 64 GB Mac에서 sudo sysctl iogpu.wired_limit_mb=57344를 실행하며, 이 설정은 재부팅하면 초기화되고 OS에는 약 8 GB만 남습니다.',
          ],
        },
        dgxSpark: {
          id: 'dgx-spark',
          title: 'NVIDIA DGX Spark(또는 128 GB Strix Halo PC)는 70B 모델에 적합한가?',
          content: [
            '**NVIDIA DGX Spark는 GB10 Grace Blackwell Superchip 기반에 CUDA를 지원하며, 273 GB/s의 128 GB 통합 LPDDR5x 메모리를 갖춘 소형 데스크톱 AI 컴퓨터입니다.** 70B 모델을 Q8_0(75 GB)로도 올릴 수 있지만 대역폭이 생성 속도를 제한합니다. LMSYS는 Llama 3.1 70B를 FP8로 실행했을 때 디코드 속도를 2.7 tokens/sec로 측정했고, 커뮤니티의 llama.cpp Q4_K_M 실행은 4-5 tokens/sec 범위로 보고됩니다.',
            '가격은 크게 움직였습니다. NVIDIA는 메모리 공급 제약을 이유로 2026년 2월 Founders Edition을 $3,999에서 $4,699로 올렸고, 2026년 10월에는 $6,950의 가격이 보도되었으며, 파트너사가 2026년 10월 23일부터 판매하는 $4,999의 64 GB 버전도 함께 보도되었습니다. 구매 전에 실시간 가격을 확인하십시오.',
            'AMD Ryzen AI Max+ 395("Strix Halo") 미니 PC와 노트북은 256 GB/s의 LPDDR5X 128 GB를 제공하여 같은 급의 대역폭이며, 덴스 70B 모델에서 약 4-5 tokens/sec로 비슷하게 추정됩니다. 두 플랫폼 모두 빠른 덴스 70B 채팅보다는 Mixture-of-Experts 모델(아래 참조)과 CUDA 또는 파인튜닝 작업에 더 잘 맞습니다.',
          ],
          rows: [
            {
              '사양': '메모리',
              '값': '128 GB 통합 LPDDR5x',
            },
            {
              '사양': '메모리 대역폭',
              '값': '273 GB/s',
            },
            {
              '사양': '70B Q8_0 (75 GB)',
              '값': '적재 가능',
            },
            {
              '사양': '70B 디코드, 실측',
              '값': 'FP8에서 2.7 tok/s (LMSYS, SGLang)',
            },
            {
              '사양': '최대 모델 크기',
              '값': 'FP4에서 약 200B 파라미터',
            },
            {
              '사양': '가격',
              '값': '보도된 $6,950, 2026년 2월 정가 $4,699',
            },
            {
              '사양': 'Ollama 명령어',
              '값': 'ollama run llama3.3:70b',
            },
          ],
          columns: ['사양', '값'],
        },
        nvidiaOffload: {
          id: 'nvidia-layer-offloading',
          title: '70B 모델에서 NVIDIA GPU + 레이어 오프로딩은 어떻게 동작하는가?',
          content: [
            '**Ollama와 llama.cpp는 모델을 GPU VRAM과 시스템 RAM에 나눠 올립니다. VRAM의 레이어는 GPU 속도로, RAM의 레이어는 CPU 메모리 속도로 실행되며, 느린 쪽이 전체 속도를 좌우합니다.** RTX 4090(24 GB)에는 Q4_K_M 70B 모델의 약 55%가 GPU에 올라가고, 나머지는 약 90 GB/s의 DDR5에서 스트리밍되어 생성 속도가 약 2-4 tokens/sec로 제한됩니다. RTX 5090(32 GB)은 약 70%를 담아 추정 4-6 tokens/sec에 이릅니다.',
            'Ollama는 자동으로 오프로딩하므로 플래그가 필요 없습니다. ollama ps를 실행하면 분할 상태를 볼 수 있습니다(PROCESSOR 열, 예: 45%/55% CPU/GPU). llama.cpp에서는 -ngl로 레이어 수를 지정합니다.',
          ],
          codeBlock: '# Ollama offloads as many layers as fit in VRAM automatically\nollama run llama3.3:70b\n\n# Show the CPU/GPU split of the loaded model:\nollama ps\n\n# llama.cpp: choose the number of GPU layers explicitly\n./llama-cli -m llama-3.3-70b-instruct-q4_k_m.gguf \\\n  -ngl 44 \\\n  --ctx-size 4096',
          codeLanguage: 'bash',
        },
        multiGpu: {
          id: 'multi-gpu-runtimes',
          title: '멀티 GPU에서 70B 모델에 가장 좋은 추론 런타임은?',
          content: [
            '**사용자 한 명이라면 레이어 분할을 쓰는 Ollama나 llama.cpp가 가장 간단한 멀티 GPU 방법이고, 동시 사용자나 에이전트가 여럿이라면 텐서 병렬을 쓰는 vLLM이나 SGLang이 훨씬 높은 총 처리량을 냅니다.** 24 GB 카드(RTX 3090 또는 4090) 두 장이면 48 GB로, Q4_K_M과 짧은 컨텍스트를 담기에 충분합니다.',
            '레이어 분할은 토큰마다 한 번 카드 사이로 활성값을 전달하며 일반 PCIe에서도 동작하므로 서로 다른 소비자용 카드 조합에 알맞습니다. 텐서 병렬은 각 레이어를 GPU에 나누므로 빠른 연결이 유리합니다. RTX 3090은 NVLink 브리지를 지원하지만 RTX 4090과 5090은 지원하지 않습니다.',
          ],
          rows: [
            {
              '런타임': 'Ollama',
              '멀티 GPU 방식': '자동 레이어 분할',
              '적합한 용도': '단일 사용자, 가장 쉬운 설정',
            },
            {
              '런타임': 'llama.cpp',
              '멀티 GPU 방식': '--split-mode, --tensor-split',
              '적합한 용도': '혼합 GPU, GGUF 양자화',
            },
            {
              '런타임': 'vLLM',
              '멀티 GPU 방식': '--tensor-parallel-size N',
              '적합한 용도': '다수 사용자·에이전트, AWQ/GPTQ/FP8',
            },
            {
              '런타임': 'SGLang',
              '멀티 GPU 방식': '텐서 병렬',
              '적합한 용도': '프롬프트 접두사를 공유하는 에이전트',
            },
            {
              '런타임': 'TensorRT-LLM',
              '멀티 GPU 방식': '텐서 / 파이프라인 병렬',
              '적합한 용도': 'NVIDIA 최대 처리량, 엔진 빌드 필요',
            },
          ],
          columns: ['런타임', '멀티 GPU 방식', '적합한 용도'],
        },
        cpuOnly: {
          id: 'cpu-only',
          title: 'CPU 전용 70B 추론은 실용적이며, RAM 256 GB가 도움이 되는가?',
          content: [
            '**CPU 전용 70B 추론은 메모리 대역폭에 제한됩니다. 듀얼 채널 데스크톱 DDR5(약 90 GB/s)에서는 Q4_K_M 기준 대략 1-2 tokens/sec이며, RAM 용량을 늘려도 빨라지지 않습니다.** 1.5 tokens/sec에서는 200단어 응답(약 270 토큰)에 약 3분이 걸립니다.',
            'RAM 256 GB가 바꾸는 것은 속도가 아니라 올릴 수 있는 모델의 범위입니다. Q8_0(75 GB)이나 FP16(141 GB)을 긴 컨텍스트와 함께 올릴 수 있습니다. 속도는 메모리 채널 수에 달려 있어서, 8채널 Threadripper PRO나 12채널 EPYC 서버는 데스크톱의 3-5배 대역폭을 가집니다. 큰 DIMM 네 개를 꽂은 데스크톱 보드는 두 개일 때보다 메모리가 느리게 동작하는 경우가 많습니다. 긴 입력의 프롬프트 처리도 CPU에서는 느립니다.',
            '아래 추정치는 대역폭 규칙에 효율 70%를 적용한 값이며 실측 벤치마크가 아닙니다.',
          ],
          rows: [
            {
              'CPU / RAM 구성': '데스크톱, 2채널 DDR5-5600',
              '대역폭': '~90 GB/s',
              'Q4_K_M (43 GB)': '~1-1.5 tok/s',
              'Q8_0 (75 GB)': '~0.6-0.9 tok/s',
              'FP16 (141 GB)': '~0.3-0.5 tok/s',
            },
            {
              'CPU / RAM 구성': 'Threadripper PRO, 8채널 DDR5-5600',
              '대역폭': '~358 GB/s',
              'Q4_K_M (43 GB)': '~5-6 tok/s',
              'Q8_0 (75 GB)': '~3-3.5 tok/s',
              'FP16 (141 GB)': '~1.5-1.8 tok/s',
            },
            {
              'CPU / RAM 구성': 'EPYC, 12채널 DDR5-4800',
              '대역폭': '~461 GB/s',
              'Q4_K_M (43 GB)': '~7-8 tok/s',
              'Q8_0 (75 GB)': '~4-4.5 tok/s',
              'FP16 (141 GB)': '~2-2.5 tok/s',
            },
          ],
          columns: [
            'CPU / RAM 구성',
            '대역폭',
            'Q4_K_M (43 GB)',
            'Q8_0 (75 GB)',
            'FP16 (141 GB)',
          ],
        },
        moe: {
          id: 'moe-models',
          title: '70B급 MoE 모델은 하드웨어 계산을 바꾸는가?',
          content: [
            '**Mixture-of-Experts(MoE) 모델은 전체 파라미터를 담을 메모리가 필요하지만 토큰마다 활성 전문가만 읽으므로, 같은 메모리 크기의 덴스 70B 모델보다 훨씬 빠르게 생성합니다.** OpenAI gpt-oss-120b는 약 1,170억 개 파라미터 중 약 51억 개가 활성이고, Meta Llama 4 Scout는 1,090억 개 중 170억 개가 활성입니다.',
            '대역폭 규칙은 활성 가중치에 적용되므로, MoE 모델은 DGX Spark, Ryzen AI Max+ 395 PC, 64 GB Mac mini M5 Pro처럼 용량은 크고 대역폭은 보통인 머신을 가장 잘 활용합니다. 이런 하드웨어에서 덴스 70B 모델은 4-5 tokens/sec로 예상하십시오. 내려받기 전에 각 MoE 모델의 파일 크기를 자신의 메모리와 대조해 확인하십시오.',
          ],
        },
        which70b: {
          id: 'which-model',
          title: '로컬에서 어떤 70B 모델을 실행해야 할까?',
          content: [
            '**Llama 3.3 70B가 기본 덴스 70B 모델입니다. Meta는 MMLU(CoT) 86.0과 HumanEval 88.4, 128K 컨텍스트 윈도를 보고했습니다.** 다국어와 코딩 용도의 주요 대안은 Qwen2.5 72B입니다. Qwen3 72B는 없습니다. Qwen3 덴스 모델은 32B에서 끝나므로, "Qwen3 72B"라는 언급은 Qwen2.5 72B를 뜻합니다.',
            '명령어: ollama run llama3.3:70b, ollama run qwen2.5:72b, ollama run deepseek-r1:70b.',
          ],
          rows: [
            {
              '모델': 'Llama 3.3 70B',
              '파라미터': '70.6B 덴스',
              '라이선스': 'Llama 3.3 Community License',
              '적합한 용도': '일반 영어, 지시 따르기',
            },
            {
              '모델': 'Qwen2.5 72B Instruct',
              '파라미터': '72.7B 덴스',
              '라이선스': 'Qwen License',
              '적합한 용도': '다국어, 코딩. YaRN으로 131K',
            },
            {
              '모델': 'DeepSeek-R1-Distill-Llama-70B',
              '파라미터': '70B 덴스',
              '라이선스': '모델 카드 참조',
              '적합한 용도': '추론용. 긴 출력은 응답이 느림',
            },
            {
              '모델': 'Mistral Large 2',
              '파라미터': '123B 덴스',
              '라이선스': 'Mistral Research License',
              '적합한 용도': '연구 전용, Q4에서 약 75 GB',
            },
          ],
          columns: [
            '모델',
            '파라미터',
            '라이선스',
            '적합한 용도',
          ],
        },
        fineTuning: {
          id: 'fine-tuning',
          title: '70B 모델을 파인튜닝하려면 어떤 하드웨어가 필요한가?',
          content: [
            '**70B 모델의 QLoRA 파인튜닝에는 실행당 대략 35-48 GB의 GPU 메모리가 필요합니다. FSDP+QLoRA를 쓰는 24 GB GPU 두 장 또는 48-80 GB GPU 한 장입니다.** QLoRA는 기본 모델을 4비트(약 35 GB)로 유지하고 작은 어댑터만 학습하며, Answer.AI는 이를 24 GB 게이밍 GPU 두 장에서 시연했습니다.',
            '16비트 전체 파인튜닝은 가중치, 그래디언트, 옵티마이저 상태에 파라미터당 약 16바이트, 즉 대략 1 TB가 필요하며 멀티 GPU 서버의 영역입니다. 가끔 하는 실행이라면 하드웨어를 구축하기보다 80 GB 클라우드 GPU를 임대하는 편이 보통 더 현실적입니다.',
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: '70B 모델 로컬 실행: 지역별 맥락',
          content: [
            '**EU / GDPR**: 70B 로컬 모델은 대부분의 조직이 비공개로 실행할 수 있는 AI 품질의 현실적인 상한입니다. 법률, 의료, 금융 문서를 온프레미스에서 처리하면 프롬프트와 출력이 자체 인프라 안에 머물러 데이터 최소화와 전송 위험 통제에 도움이 됩니다. 다만 이것만으로 배포가 GDPR을 준수하게 되는 것은 아니므로 전체 처리 활동을 평가하십시오.',
            'EU 공급망 하드웨어가 필요한 조직의 경우, Apple(미국)과 NVIDIA(미국)는 EU 외 공급업체이며, Dell, HP, Lenovo는 현지 지원이 포함된 GB10 기반 시스템을 판매합니다. 모델 측면에서 Mistral Large 2는 EU 개발사의 모델이지만 상업적 사용을 허용하지 않는 연구용 라이선스로 공개됩니다.',
            '**일본**: Qwen2.5 72B는 일본어 텍스트에 흔히 선택됩니다: `ollama run qwen2.5:72b`. 하드웨어와 모델 버전을 문서화하면(`ollama ps` 출력이 로드된 모델을 식별합니다) 일본의 업무용 AI 가이드라인에 따른 내부 거버넌스에 도움이 됩니다.',
            '**중국**: 로컬에서 호스팅한 Qwen2.5 72B는 데이터를 자체 인프라에 두므로 중국 데이터안전법(数据安全法)과 관련이 있습니다. 내부에서 서비스하는 모델이 CAC 생성형 AI 규정의 적용을 받는지는 공중에 제공되는지 여부에 달려 있으므로, 자격을 갖춘 법률 전문가와 확인하십시오.',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: '소비자 하드웨어에서 70B 모델을 실행할 때 흔한 실수는?',
          faqs: [
            {
              q: 'VRAM이 24 GB 미만인 GPU를 사고 70B의 전체 성능을 기대하는 것',
              a: '12 GB 카드에는 Q4_K_M 70B 모델의 약 4분의 1만 올라가고 나머지는 시스템 RAM에서 실행되므로 속도가 CPU 전용에 가깝습니다. 24 GB RTX 4090조차 약 2-4 tok/sec에 그칩니다. 대화형 속도를 원하면 VRAM 48 GB, 64 GB 이상의 Apple Silicon Mac, 또는 더 작은 27B-34B 모델을 사용하십시오.',
            },
            {
              q: '메모리가 큰 장비는 빠르기도 하다고 가정하는 것',
              a: 'DGX Spark와 Ryzen AI Max+ 395 시스템은 128 GB이지만 대역폭은 256-273 GB/s뿐이라 덴스 70B 모델이 약 3-5 tok/sec로 실행됩니다. 64 GB Mac Studio M5 Max는 대역폭이 두 배 이상입니다. 용량만이 아니라 대역폭을 확인하십시오.',
            },
            {
              q: '모델의 얼마만큼이 GPU에서 실행되는지 확인하지 않는 것',
              a: 'Ollama는 자동으로 오프로딩하지만 빠듯하게 맞으면 일부 레이어가 CPU에 남을 수 있습니다. 로드한 뒤 `ollama ps`를 실행해 PROCESSOR 열을 읽으십시오. 목표는 "100% GPU"이며, CPU 비중이 있으면 출력이 느린 이유가 됩니다. 분할이 좋지 않으면 컨텍스트 길이를 줄이거나 Q3_K_S로 낮추십시오.',
            },
            {
              q: '컨텍스트에도 메모리가 필요하다는 점을 잊는 것',
              a: 'Q4_K_M 70B 모델은 43 GB이지만, FP16 기준으로 32K 컨텍스트는 약 10.7 GB, 128K는 약 43 GB를 더합니다. 가중치가 들어가는 머신도 긴 컨텍스트에서는 메모리가 부족해질 수 있습니다. 8비트 KV 캐시를 사용하거나 컨텍스트를 줄이십시오.',
            },
            {
              q: '속도가 중요한데 Q5_K_M이나 Q8_0을 실행하는 것',
              a: '모든 토큰이 모델 전체를 읽으므로 같은 하드웨어에서 Q8_0(75 GB)은 Q4_K_M(43 GB)의 대략 절반 속도로 실행됩니다. 대역폭이 제한된 머신(DGX Spark, Strix Halo, Mac mini)에서는 채팅에 Q4_K_M을 선택하고, 품질이 최우선일 때만 Q8_0을 사용하십시오.',
            },
            {
              q: '$1,699 Mac mini M5 Pro를 주문하고 70B가 실행되기를 기대하는 것',
              a: '$1,699 M5 Pro Mac mini는 통합 메모리가 24 GB입니다. 70B 모델에는 64 GB 주문 제작 구성이 필요하며, 기본형 Mac mini M6($899, 최대 32 GB)는 아예 실행할 수 없습니다. 주문 전에 "M5 Pro"와 64 GB를 확인하십시오.',
            },
            {
              q: '기본 macOS GPU 메모리 한도에 걸리는 것',
              a: 'macOS는 기본적으로 GPU가 RAM의 약 75%, 즉 64 GB Mac에서 약 48 GB를 쓰도록 허용합니다. Q4_K_M은 들어가지만 Q5_K_M(50 GB)은 `iogpu.wired_limit_mb`를 올리기 전에는 들어가지 않습니다.',
            },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: '관련 읽을거리',
          items: [
            '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide) — 70B 하드웨어 요구사항을 포함한 모든 모델 크기별 GPU 및 RAM 등급 표',
            '[24 GB VRAM에서 70B 모델 실행하기](/ko/local-llms/run-70b-models-24gb-vram) — GPU가 한 장뿐일 때의 양자화와 오프로딩 옵션',
            '[Apple Silicon M5 Max에서 70B 모델 실행하기](/ko/local-llms/running-70b-models-apple-silicon-m5-max) — Ollama와 MLX를 사용하는 Mac 전용 설정',
            '[로컬 LLM용 RTX 5090 vs RTX 4090](/ko/local-llms/rtx-5090-vs-rtx-4090-local-llm) — VRAM 32 GB와 24 GB의 차이가 오프로딩에 미치는 영향',
            '[로컬 AI 서버로서의 Mac mini M5](/ko/local-llms/mac-mini-m5-local-ai-server) — Mac mini 라인업이 실행할 수 있는 것과 없는 것',
            '[LLM 양자화 설명](/ko/local-llms/llm-quantization-explained) — Q4_K_M과 Q8_0의 차이, 그리고 높은 정밀도의 속도 비용 이해하기',
            '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — GPU 레이어 설정을 포함한 전체 설치 안내',
            '[Qwen vs Llama vs Mistral](/ko/local-llms/qwen-vs-llama-vs-mistral) — 주요 오픈 모델 계열의 상세 비교',
          ],
        },
        faqSection: {
          id: 'faq',
          title: '소비자 하드웨어에서 70B 모델 실행에 관한 자주 묻는 질문',
          faqs: [
            {
              q: '로컬에서 70B LLM을 실행하려면 어떤 하드웨어가 필요합니까?',
              a: 'Llama 3.3 70B를 Q4_K_M으로 실행하려면 약 43 GB의 빠른 메모리와 컨텍스트용 3-10 GB가 필요합니다. 모델 전체를 빠른 메모리에 담을 수 있는 구성은 세 가지입니다. 통합 메모리 64 GB 이상의 Apple Silicon Mac, 24 GB NVIDIA GPU 두 장(VRAM 합계 48 GB), 그리고 NVIDIA DGX Spark나 AMD Ryzen AI Max+ 395 미니 PC 같은 128 GB 통합 메모리 장비입니다. 용량은 모델이 실행되는지를, 메모리 대역폭은 얼마나 빠른지를 좌우합니다. 24 GB GPU 한 장이나 CPU 전용 PC에서도 실행할 수는 있지만 속도는 약 1-4 tokens/sec에 그칩니다.',
            },
            {
              q: '70B 모델이란 무엇입니까?',
              a: '70B 모델은 약 700억 개의 파라미터(가중치)를 가진 대규모 언어 모델입니다. Llama 3.3 70B는 706억 개, Qwen2.5 72B는 727억 개입니다. 파일 크기는 파라미터 수에서 정해지며, 16비트에서 약 141 GB, 8비트(Q8_0)에서 75 GB, 4비트(Q4_K_M)에서 43 GB입니다.',
            },
            {
              q: '70B 모델에는 VRAM이나 RAM이 얼마나 필요합니까?',
              a: 'Llama 3.3 70B는 Q4_K_M에서 43 GB, Q5_K_M에서 50 GB, Q8_0에서 75 GB, FP16에서 141 GB가 필요하며(Ollama 라이브러리 기준 크기), 여기에 컨텍스트용 KV 캐시가 더해집니다. 8K 토큰에서 약 2.7 GB, 32K에서 10.7 GB, 128K에서 43 GB입니다. VRAM이 24 GB이면 Q4_K_M 모델의 절반 정도만 GPU에 올라가고, 나머지는 시스템 RAM에서 실행됩니다.',
            },
            {
              q: '70B 모델을 쓸 만하게 실행할 수 있는 가장 저렴한 하드웨어는 무엇입니까?',
              a: '약 10 tokens/sec 이상을 원한다면 현실적인 선택지는 64 GB 이상으로 구성한 Mac Studio M5 Max(기본 모델 $2,499는 36 GB), 64 GB 이상의 중고 Mac Studio M2 Ultra, 또는 중고 24 GB GPU 두 장입니다. 새 제품 중 가장 저렴한 Apple 옵션은 64 GB의 Mac mini M5 Pro입니다. 기본 모델 $1,699는 24 GB뿐이며, 리뷰에 따르면 64 GB 구성은 대략 $2,700-$3,200입니다. 대역폭이 307 GB/s라서 속도는 대략 4-5 tokens/sec로 제한됩니다. GPU 시세는 변동이 큽니다. 2026년 10월에 RTX 5090 매물이 출시가 $1,999를 크게 웃돈다고 보도되었으므로 실시간 가격을 확인하십시오.',
            },
            {
              q: '24 GB GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
              a: '가능하지만 느립니다. RTX 4090 같은 24 GB 카드에는 Q4_K_M 70B 모델의 약 55%가 올라가고, 나머지 레이어는 시스템 RAM에서 CPU 메모리 속도로 실행됩니다. 빠른 DDR5 기준으로 대략 2-4 tokens/sec입니다. 대화형 속도가 필요하면 더 작은 모델(24 GB에는 Qwen3.8-27B 같은 27B-34B 모델이 들어갑니다), GPU 두 장, 또는 통합 메모리 64 GB 이상의 머신을 사용하십시오.',
            },
            {
              q: 'GPU 두 장으로 70B 모델을 실행할 수 있습니까?',
              a: '가능합니다. 24 GB 카드 두 장(RTX 3090 또는 4090)은 VRAM 48 GB를 제공하며, Q4_K_M 70B 모델(43 GB)과 수천 토큰 정도의 짧은 컨텍스트를 담을 수 있습니다. Ollama와 llama.cpp는 레이어를 두 카드에 자동으로 나누거나 --tensor-split으로 나눕니다. 모든 토큰이 두 카드를 순서대로 거치므로 속도는 추정치로 대략 12-17 tokens/sec입니다.',
            },
            {
              q: '멀티 GPU 환경에서 70B LLM을 실행하기에 가장 좋은 추론 런타임은 무엇입니까?',
              a: '사용자 한 명이라면 레이어 분할을 쓰는 Ollama나 llama.cpp가 가장 간단하며 서로 다른 GPU 조합에서도 동작합니다. 동시 사용자나 에이전트가 여럿이면 --tensor-parallel-size를 GPU 수로 설정한 vLLM이나 SGLang이 요청을 배치 처리하므로 총 처리량이 훨씬 높습니다. 두 런타임 모두 동일한 GPU와 AWQ, GPTQ 또는 FP8 가중치를 선호합니다. TensorRT-LLM은 NVIDIA에서 가장 높은 처리량을 내지만 엔진 빌드 단계가 필요합니다.',
            },
            {
              q: '70B 백엔드를 쓰는 멀티 에이전트 시스템에는 GPU 메모리가 얼마나 필요합니까?',
              a: '가중치는 한 번만, KV 캐시는 동시 세션마다 하나씩 계산하십시오. Llama 3.3 70B의 Q4_K_M 가중치에는 약 43 GB가 필요하고, 활성 세션마다 FP16 기준 컨텍스트 토큰당 약 0.33 MB가 추가됩니다. 따라서 에이전트 네 개가 각각 32K 토큰을 쓰면 약 43 GB + 43 GB = 86 GB가 필요합니다. 에이전트마다 모델 사본을 따로 올리지 말고, 하나의 공유 서버(vLLM, SGLang 또는 병렬 슬롯을 쓰는 llama.cpp)에서 모든 에이전트를 처리하십시오.',
            },
            {
              q: 'RAM 256 GB는 70B 모델의 CPU 추론에 도움이 됩니까?',
              a: '용량에는 도움이 되지만 속도에는 도움이 되지 않습니다. 256 GB면 Q8_0(75 GB)이나 FP16(141 GB)을 긴 컨텍스트와 함께 올릴 수 있지만, 디코드 속도는 메모리 채널 수에 따라 제한됩니다. Q4_K_M에서 Q8_0 기준으로 듀얼 채널 데스크톱은 대략 0.5-1.5 tokens/sec, 8채널 Threadripper PRO는 약 3-6, 12채널 EPYC는 약 4-8입니다(메모리 대역폭에서 구한 추정치이며 저희가 실행한 벤치마크가 아닙니다).',
            },
            {
              q: 'Mac mini M6로 70B 모델을 실행할 수 있습니까?',
              a: '불가능합니다. Mac mini M6($899부터)는 통합 메모리가 최대 32 GB, 대역폭이 170 GB/s로, Q4_K_M 70B 모델에 필요한 43 GB에 못 미칩니다. Mac mini M5 Pro($1,699부터, 307 GB/s, Thunderbolt 5)는 최대 64 GB까지 구성할 수 있습니다. 기본 $1,699 모델은 24 GB이므로 64 GB 주문 제작 구성을 선택하십시오. 두 제품 모두 2026년 9월 22일에 출시되었습니다.',
            },
            {
              q: 'NVIDIA DGX Spark란 무엇이며 70B 추론용으로 가치가 있습니까?',
              a: 'DGX Spark는 128 GB 통합 LPDDR5x 메모리(273 GB/s)를 갖춘 NVIDIA의 소형 데스크톱 AI 컴퓨터입니다. 70B 모델을 Q8_0으로 올릴 수 있지만 대역폭에 제약을 받습니다. LMSYS는 Llama 3.1 70B를 FP8로 실행했을 때 디코드 속도를 2.7 tokens/sec로 측정했습니다. 빠른 덴스 70B 채팅보다는 CUDA 작업, 파인튜닝, 대형 MoE 모델에 더 적합합니다. NVIDIA는 2026년 2월에 Founders Edition 가격을 $3,999에서 $4,699로 올렸고, 2026년 10월에는 $6,950의 가격이 보도되었으며, 파트너사의 64 GB 버전은 $4,999로 보도되었습니다.',
            },
            {
              q: '70B 로컬 모델의 품질은 클라우드 모델과 비교해 어떻습니까?',
              a: 'Meta는 Llama 3.3 70B Instruct에서 MMLU(CoT) 86.0, HumanEval 88.4를 보고했습니다. 그 이후 출시된 최상위 클라우드 모델은 추론 비중이 큰 작업에서 더 높은 점수를 받는 반면, 70B 로컬 모델은 요약, 정보 추출, 초안 작성, 일반적인 코드 생성에서는 여전히 경쟁력이 있습니다. 70B 하드웨어에 투자하기 전에 [PromptQuorum](/ko) 등으로 두 가지를 직접 작성한 프롬프트로 테스트해 보십시오.',
            },
            {
              q: '70B 모델을 실행하면 전력이 얼마나 듭니까?',
              a: 'GPU는 생성 중에 보드 전력까지 사용합니다. RTX 3090은 350 W, RTX 4090은 450 W, RTX 5090은 575 W입니다. kWh당 $0.15 기준으로 RTX 4090을 최대 부하로 돌리면 GPU만으로 시간당 약 $0.07가 듭니다. Apple Silicon과 통합 메모리 장비는 같은 모델에서 전력을 훨씬 적게 쓰지만 속도는 더 낮습니다.',
            },
            {
              q: '일상 작업에서 70B 모델은 더 작은 모델보다 가치가 있습니까?',
              a: '복잡한 추론, 긴 문서 분석, 섬세한 글쓰기에는 대체로 그렇습니다. 단순한 요약, Q&A, 분류에는 7B-14B 모델도 훨씬 적은 하드웨어 비용으로 비슷한 결과를 내는 경우가 많습니다. 70B 하드웨어에 투자하기 전에 직접 작성한 프롬프트로 두 모델을 모두 실행해 보십시오.',
            },
            {
              q: '소비자 하드웨어에서 70B 모델을 파인튜닝할 수 있습니까?',
              a: 'QLoRA로만 가능합니다. QLoRA는 기본 모델을 4비트(약 35 GB)로 유지하고 작은 어댑터만 학습합니다. Answer.AI는 FSDP+QLoRA로 24 GB 게이밍 GPU 두 장에서 70B 모델을 학습할 수 있음을 보였습니다. 16비트 전체 파인튜닝에는 대략 1 TB의 메모리가 필요하며 멀티 GPU 서버의 영역입니다. 가끔 하는 QLoRA 실행을 넘어서는 작업이라면 80 GB 클라우드 GPU를 임대하는 편이 보통 더 현실적입니다.',
            },
            {
              q: 'Apple Silicon에서 70B에 가장 적합한 양자화는 무엇입니까?',
              a: '64 GB Mac에서는 Q4_K_M(43 GB)을 사용하십시오. macOS는 기본적으로 GPU가 접근할 수 있는 메모리를 RAM의 약 75%(64 GB Mac에서 약 48 GB)로 제한하므로, Q5_K_M(50 GB)은 sysctl iogpu.wired_limit_mb로 한도를 올린 뒤에만 동작하며 여유도 거의 남지 않습니다. 96-128 GB에서는 Q8_0(75 GB)이 거의 무손실에 가까운 선택이지만, 모든 토큰이 두 배의 바이트를 읽기 때문에 속도는 Q4_K_M의 약 절반입니다.',
            },
            {
              q: 'Ollama는 최적의 양자화를 자동으로 선택합니까?',
              a: '아니요. ollama run llama3.3:70b는 기본값인 Q4_K_M(43 GB)을 내려받습니다. 다른 수준을 쓰려면 태그를 지정하십시오. 예를 들어 ollama run llama3.3:70b-instruct-q5_K_M 또는 ollama run llama3.3:70b-instruct-q8_0입니다. 로드한 뒤 ollama ps를 실행하면 PROCESSOR 열에서 모델의 얼마만큼이 GPU와 CPU에서 실행되는지 확인할 수 있습니다.',
            },
            {
              q: '아이폰이나 노트북으로 70B 모델을 실행할 수 있습니까?',
              a: '아이폰은 불가능합니다. 현재 아이폰의 RAM은 8-12 GB인 반면 Q4_K_M 70B 모델에는 약 43 GB가 필요하므로, 휴대폰에서는 1B-8B 모델을 실행합니다. 노트북은 통합 메모리 64 GB 이상(고사양 MacBook Pro 구성) 또는 128 GB를 갖춘 AMD Ryzen AI Max+ 395 시스템에서만 가능합니다. ASUS ROG Strix 같은 VRAM 16-24 GB 게이밍 노트북은 느린 부분 오프로딩 경우에 해당합니다.',
            },
          ],
        },
        sources: {
          id: 'sources',
          title: '출처',
          items: [
            '[Ollama: Llama 3.3 태그와 크기](https://ollama.com/library/llama3.3/tags) — Q4_K_M 43 GB, Q5_K_M 50 GB, Q8_0 75 GB, FP16 141 GB',
            '[Meta Llama 3.3 70B Instruct 모델 카드](https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct) — MMLU (CoT) 86.0, HumanEval 88.4, 128K 컨텍스트, 라이선스',
            '[Qwen2.5 72B Instruct 모델 카드](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct) — 72.7B 파라미터, YaRN으로 131K 컨텍스트',
            '[Mistral Large Instruct 2407 모델 카드](https://huggingface.co/mistralai/Mistral-Large-Instruct-2407) — 123B 파라미터, Mistral Research License',
            '[LMSYS: NVIDIA DGX Spark 심층 리뷰](https://www.lmsys.org/blog/2025-10-13-nvidia-dgx-spark) — Llama 3.1 70B FP8 디코드 2.7 tok/s, 273 GB/s',
            '[Apple Newsroom: M6와 M5 Pro 탑재 Mac mini](https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/) — 가격, 메모리, 대역폭',
            '[9to5Mac: M5 Max와 M5 Ultra 탑재 Mac Studio](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/) — 가격, 기본 및 최대 메모리, 대역폭',
            '[NVIDIA 개발자 포럼: DGX Spark 가격 변경](https://forums.developer.nvidia.com/t/2-23-2026-price-change-announcement/361713) — $3,999에서 $4,699로',
            '[TechnoEdge: DGX Spark 가격 인상과 64 GB 모델](https://www.techno-edge.net/article/2026/10/08/5565.html) — 보도된 $6,950 및 $4,999 가격',
            '[Fstoppers: Mac mini M5 Pro review](https://fstoppers.com/gear/mac-mini-m5-pro-review-fast-silent-desktop-photo-and-video-work-904700) -- 64 GB / 1 TB 구성 $3,199로 표기',
            '[Trusted Reviews: Mac mini M5 Pro review](https://www.trustedreviews.com/reviews/apple-mac-mini-2026-m5-pro) -- 48 GB 및 64 GB 메모리 업그레이드 가격',
            '[Answer.AI: 집에서 70B 모델 학습하기](https://www.answer.ai/posts/2024-03-06-fsdp-qlora.html) — 24 GB GPU 두 장에서의 FSDP + QLoRA',
            '[llama.cpp](https://github.com/ggml-org/llama.cpp) — GPU 오프로딩 및 멀티 GPU 분할 문서',
            '[Olares One](https://www.olares.com/one) — RTX 5090 Mobile(GDDR7 24 GB), DDR5 96 GB, 하드웨어 비용 $4,999',
          ],
        },
      },
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '70B LLM 로컬 실행 2026: 하드웨어·RAM·속도',
        description: '70B 모델은 Q4_K_M 기준 약 43 GB와 컨텍스트 메모리가 필요합니다. Mac, DGX Spark, RTX GPU, CPU 전용 PC(RAM 256 GB 포함)별 RAM·VRAM과 대역폭 기반 추정 tok/s를 비교합니다.',
        url: 'https://www.promptquorum.com/ko/local-llms/70b-models-consumer-hardware',
        inLanguage: 'ko',
        datePublished: '2026-04-04',
        dateModified: '2026-10-29',
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
        about: [
          {
            '@type': 'Thing',
            name: '70B 언어 모델',
          },
          {
            '@type': 'Thing',
            name: 'Apple Silicon 추론',
          },
          {
            '@type': 'Thing',
            name: 'NVIDIA RTX 4090',
          },
          {
            '@type': 'Thing',
            name: '레이어 오프로딩',
          },
          {
            '@type': 'Thing',
            name: 'Llama 3.3 70B',
          },
          {
            '@type': 'Thing',
            name: 'Qwen2.5 72B',
          },
          {
            '@type': 'Thing',
            name: 'NVIDIA DGX Spark',
          },
          {
            '@type': 'Thing',
            name: 'Apple Mac mini M5 Pro',
          },
          {
            '@type': 'Thing',
            name: '메모리 대역폭',
          },
        ],
        mentions: [
          {
            '@type': 'SoftwareApplication',
            name: 'Ollama',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'llama.cpp',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'vLLM',
          },
        ],
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['.article-intro', '.key-takeaways', 'h2'],
        },
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Ollama로 소비자 하드웨어에서 70B 모델을 실행하는 방법',
        inLanguage: 'ko',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: '모델과 컨텍스트를 담을 빠른 메모리(통합 메모리, VRAM 또는 RAM)가 48 GB 이상인지 확인',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'ollama.com에서 Ollama 설치',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: '실행: ollama run llama3.3:70b',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'CPU/GPU 분할 확인: ollama ps',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: '메모리가 빠듯하면 양자화를 조정: q3_K_S 태그를 사용하거나 컨텍스트를 줄이기',
          },
        ],
      },
      itemListSchema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '2026년 70B 로컬 LLM 실행용 하드웨어',
        inLanguage: 'ko',
        numberOfItems: 12,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Mac Studio M5 Max (64-128 GB)',
            description: '가능 — 전체 GPU. ~9-11 tok/s (추정). 기본 구성은 36 GB, 64 GB 이상은 업그레이드.',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mac Studio M5 Ultra (96 GB+)',
            description: '가능 — Q8_0도 적재. ~17-21 tok/s (추정). 96 GB 모델이 $5,499부터.',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Mac mini M5 Pro (64 GB)',
            description: '가능 — 빠듯함. ~4-5 tok/s (추정). 기본 $1,699는 24 GB, 64 GB는 주문 제작.',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Mac mini M6 (최대 32 GB)',
            description: '불가. 해당 없음. 최대 32 GB는 약 43 GB Q4 파일에 못 미침.',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Mac Studio M2 Ultra (64 GB+, 중고)',
            description: '가능 — 전체 GPU. ~12-15 tok/s (추정). 중고 시장 한정, 메모리 용량 확인.',
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: 'NVIDIA DGX Spark (128 GB)',
            description: '가능 — Q8_0도 적재. ~4-5 tok/s (추정). FP8 실측 2.7 tok/s, 보도된 가격 $6,950.',
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: 'AMD Ryzen AI Max+ 395 (128 GB)',
            description: '가능. ~4-5 tok/s (추정). 미니 PC·노트북, GPU 메모리 할당 설정 가능.',
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: '2x RTX 3090 / 4090 (48 GB)',
            description: '가능 — 빠듯함. ~12-17 tok/s (추정). Q4_K_M과 짧은 컨텍스트만 가능.',
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: 'RTX 5090 (32 GB) + 64 GB RAM',
            description: '부분 오프로딩. ~4-6 tok/s (추정). 레이어 약 70%는 GPU, 나머지는 시스템 RAM.',
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: 'RTX 4090 (24 GB) + 64 GB RAM',
            description: '부분 오프로딩. ~2-4 tok/s (추정). 레이어 약 55%는 GPU, 나머지는 시스템 RAM.',
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: 'CPU 전용, 듀얼 채널 DDR5',
            description: '가능 — CPU 전용. ~1-2 tok/s (추정). 배치 작업 전용.',
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: 'CPU 전용, 8-12채널 서버 RAM',
            description: '가능 — CPU 전용. ~5-8 tok/s (추정). Threadripper PRO / EPYC, 256 GB면 Q8_0 가능.',
          },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'ko',
        mainEntity: [
          {
            '@type': 'Question',
            name: '로컬에서 70B LLM을 실행하려면 어떤 하드웨어가 필요합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70B를 Q4_K_M으로 실행하려면 약 43 GB의 빠른 메모리와 컨텍스트용 3-10 GB가 필요합니다. 모델 전체를 빠른 메모리에 담을 수 있는 구성은 세 가지입니다. 통합 메모리 64 GB 이상의 Apple Silicon Mac, 24 GB NVIDIA GPU 두 장(VRAM 합계 48 GB), 그리고 NVIDIA DGX Spark나 AMD Ryzen AI Max+ 395 미니 PC 같은 128 GB 통합 메모리 장비입니다. 용량은 모델이 실행되는지를, 메모리 대역폭은 얼마나 빠른지를 좌우합니다. 24 GB GPU 한 장이나 CPU 전용 PC에서도 실행할 수는 있지만 속도는 약 1-4 tokens/sec에 그칩니다.',
            },
          },
          {
            '@type': 'Question',
            name: '70B 모델이란 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '70B 모델은 약 700억 개의 파라미터(가중치)를 가진 대규모 언어 모델입니다. Llama 3.3 70B는 706억 개, Qwen2.5 72B는 727억 개입니다. 파일 크기는 파라미터 수에서 정해지며, 16비트에서 약 141 GB, 8비트(Q8_0)에서 75 GB, 4비트(Q4_K_M)에서 43 GB입니다.',
            },
          },
          {
            '@type': 'Question',
            name: '70B 모델에는 VRAM이나 RAM이 얼마나 필요합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Llama 3.3 70B는 Q4_K_M에서 43 GB, Q5_K_M에서 50 GB, Q8_0에서 75 GB, FP16에서 141 GB가 필요하며(Ollama 라이브러리 기준 크기), 여기에 컨텍스트용 KV 캐시가 더해집니다. 8K 토큰에서 약 2.7 GB, 32K에서 10.7 GB, 128K에서 43 GB입니다. VRAM이 24 GB이면 Q4_K_M 모델의 절반 정도만 GPU에 올라가고, 나머지는 시스템 RAM에서 실행됩니다.',
            },
          },
          {
            '@type': 'Question',
            name: '70B 모델을 쓸 만하게 실행할 수 있는 가장 저렴한 하드웨어는 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '약 10 tokens/sec 이상을 원한다면 현실적인 선택지는 64 GB 이상으로 구성한 Mac Studio M5 Max(기본 모델 $2,499는 36 GB), 64 GB 이상의 중고 Mac Studio M2 Ultra, 또는 중고 24 GB GPU 두 장입니다. 새 제품 중 가장 저렴한 Apple 옵션은 64 GB의 Mac mini M5 Pro입니다. 기본 모델 $1,699는 24 GB뿐이며, 리뷰에 따르면 64 GB 구성은 대략 $2,700-$3,200입니다. 대역폭이 307 GB/s라서 속도는 대략 4-5 tokens/sec로 제한됩니다. GPU 시세는 변동이 큽니다. 2026년 10월에 RTX 5090 매물이 출시가 $1,999를 크게 웃돈다고 보도되었으므로 실시간 가격을 확인하십시오.',
            },
          },
          {
            '@type': 'Question',
            name: '24 GB GPU 한 장으로 70B 모델을 실행할 수 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '가능하지만 느립니다. RTX 4090 같은 24 GB 카드에는 Q4_K_M 70B 모델의 약 55%가 올라가고, 나머지 레이어는 시스템 RAM에서 CPU 메모리 속도로 실행됩니다. 빠른 DDR5 기준으로 대략 2-4 tokens/sec입니다. 대화형 속도가 필요하면 더 작은 모델(24 GB에는 Qwen3.8-27B 같은 27B-34B 모델이 들어갑니다), GPU 두 장, 또는 통합 메모리 64 GB 이상의 머신을 사용하십시오.',
            },
          },
          {
            '@type': 'Question',
            name: 'GPU 두 장으로 70B 모델을 실행할 수 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '가능합니다. 24 GB 카드 두 장(RTX 3090 또는 4090)은 VRAM 48 GB를 제공하며, Q4_K_M 70B 모델(43 GB)과 수천 토큰 정도의 짧은 컨텍스트를 담을 수 있습니다. Ollama와 llama.cpp는 레이어를 두 카드에 자동으로 나누거나 --tensor-split으로 나눕니다. 모든 토큰이 두 카드를 순서대로 거치므로 속도는 추정치로 대략 12-17 tokens/sec입니다.',
            },
          },
          {
            '@type': 'Question',
            name: '멀티 GPU 환경에서 70B LLM을 실행하기에 가장 좋은 추론 런타임은 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '사용자 한 명이라면 레이어 분할을 쓰는 Ollama나 llama.cpp가 가장 간단하며 서로 다른 GPU 조합에서도 동작합니다. 동시 사용자나 에이전트가 여럿이면 --tensor-parallel-size를 GPU 수로 설정한 vLLM이나 SGLang이 요청을 배치 처리하므로 총 처리량이 훨씬 높습니다. 두 런타임 모두 동일한 GPU와 AWQ, GPTQ 또는 FP8 가중치를 선호합니다. TensorRT-LLM은 NVIDIA에서 가장 높은 처리량을 내지만 엔진 빌드 단계가 필요합니다.',
            },
          },
          {
            '@type': 'Question',
            name: '70B 백엔드를 쓰는 멀티 에이전트 시스템에는 GPU 메모리가 얼마나 필요합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '가중치는 한 번만, KV 캐시는 동시 세션마다 하나씩 계산하십시오. Llama 3.3 70B의 Q4_K_M 가중치에는 약 43 GB가 필요하고, 활성 세션마다 FP16 기준 컨텍스트 토큰당 약 0.33 MB가 추가됩니다. 따라서 에이전트 네 개가 각각 32K 토큰을 쓰면 약 43 GB + 43 GB = 86 GB가 필요합니다. 에이전트마다 모델 사본을 따로 올리지 말고, 하나의 공유 서버(vLLM, SGLang 또는 병렬 슬롯을 쓰는 llama.cpp)에서 모든 에이전트를 처리하십시오.',
            },
          },
          {
            '@type': 'Question',
            name: 'RAM 256 GB는 70B 모델의 CPU 추론에 도움이 됩니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '용량에는 도움이 되지만 속도에는 도움이 되지 않습니다. 256 GB면 Q8_0(75 GB)이나 FP16(141 GB)을 긴 컨텍스트와 함께 올릴 수 있지만, 디코드 속도는 메모리 채널 수에 따라 제한됩니다. Q4_K_M에서 Q8_0 기준으로 듀얼 채널 데스크톱은 대략 0.5-1.5 tokens/sec, 8채널 Threadripper PRO는 약 3-6, 12채널 EPYC는 약 4-8입니다(메모리 대역폭에서 구한 추정치이며 저희가 실행한 벤치마크가 아닙니다).',
            },
          },
          {
            '@type': 'Question',
            name: 'Mac mini M6로 70B 모델을 실행할 수 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '불가능합니다. Mac mini M6($899부터)는 통합 메모리가 최대 32 GB, 대역폭이 170 GB/s로, Q4_K_M 70B 모델에 필요한 43 GB에 못 미칩니다. Mac mini M5 Pro($1,699부터, 307 GB/s, Thunderbolt 5)는 최대 64 GB까지 구성할 수 있습니다. 기본 $1,699 모델은 24 GB이므로 64 GB 주문 제작 구성을 선택하십시오. 두 제품 모두 2026년 9월 22일에 출시되었습니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'NVIDIA DGX Spark란 무엇이며 70B 추론용으로 가치가 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DGX Spark는 128 GB 통합 LPDDR5x 메모리(273 GB/s)를 갖춘 NVIDIA의 소형 데스크톱 AI 컴퓨터입니다. 70B 모델을 Q8_0으로 올릴 수 있지만 대역폭에 제약을 받습니다. LMSYS는 Llama 3.1 70B를 FP8로 실행했을 때 디코드 속도를 2.7 tokens/sec로 측정했습니다. 빠른 덴스 70B 채팅보다는 CUDA 작업, 파인튜닝, 대형 MoE 모델에 더 적합합니다. NVIDIA는 2026년 2월에 Founders Edition 가격을 $3,999에서 $4,699로 올렸고, 2026년 10월에는 $6,950의 가격이 보도되었으며, 파트너사의 64 GB 버전은 $4,999로 보도되었습니다.',
            },
          },
          {
            '@type': 'Question',
            name: '70B 로컬 모델의 품질은 클라우드 모델과 비교해 어떻습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Meta는 Llama 3.3 70B Instruct에서 MMLU(CoT) 86.0, HumanEval 88.4를 보고했습니다. 그 이후 출시된 최상위 클라우드 모델은 추론 비중이 큰 작업에서 더 높은 점수를 받는 반면, 70B 로컬 모델은 요약, 정보 추출, 초안 작성, 일반적인 코드 생성에서는 여전히 경쟁력이 있습니다. 70B 하드웨어에 투자하기 전에 [PromptQuorum](/ko) 등으로 두 가지를 직접 작성한 프롬프트로 테스트해 보십시오.',
            },
          },
          {
            '@type': 'Question',
            name: '70B 모델을 실행하면 전력이 얼마나 듭니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'GPU는 생성 중에 보드 전력까지 사용합니다. RTX 3090은 350 W, RTX 4090은 450 W, RTX 5090은 575 W입니다. kWh당 $0.15 기준으로 RTX 4090을 최대 부하로 돌리면 GPU만으로 시간당 약 $0.07가 듭니다. Apple Silicon과 통합 메모리 장비는 같은 모델에서 전력을 훨씬 적게 쓰지만 속도는 더 낮습니다.',
            },
          },
          {
            '@type': 'Question',
            name: '일상 작업에서 70B 모델은 더 작은 모델보다 가치가 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '복잡한 추론, 긴 문서 분석, 섬세한 글쓰기에는 대체로 그렇습니다. 단순한 요약, Q&A, 분류에는 7B-14B 모델도 훨씬 적은 하드웨어 비용으로 비슷한 결과를 내는 경우가 많습니다. 70B 하드웨어에 투자하기 전에 직접 작성한 프롬프트로 두 모델을 모두 실행해 보십시오.',
            },
          },
          {
            '@type': 'Question',
            name: '소비자 하드웨어에서 70B 모델을 파인튜닝할 수 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'QLoRA로만 가능합니다. QLoRA는 기본 모델을 4비트(약 35 GB)로 유지하고 작은 어댑터만 학습합니다. Answer.AI는 FSDP+QLoRA로 24 GB 게이밍 GPU 두 장에서 70B 모델을 학습할 수 있음을 보였습니다. 16비트 전체 파인튜닝에는 대략 1 TB의 메모리가 필요하며 멀티 GPU 서버의 영역입니다. 가끔 하는 QLoRA 실행을 넘어서는 작업이라면 80 GB 클라우드 GPU를 임대하는 편이 보통 더 현실적입니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'Apple Silicon에서 70B에 가장 적합한 양자화는 무엇입니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '64 GB Mac에서는 Q4_K_M(43 GB)을 사용하십시오. macOS는 기본적으로 GPU가 접근할 수 있는 메모리를 RAM의 약 75%(64 GB Mac에서 약 48 GB)로 제한하므로, Q5_K_M(50 GB)은 sysctl iogpu.wired_limit_mb로 한도를 올린 뒤에만 동작하며 여유도 거의 남지 않습니다. 96-128 GB에서는 Q8_0(75 GB)이 거의 무손실에 가까운 선택이지만, 모든 토큰이 두 배의 바이트를 읽기 때문에 속도는 Q4_K_M의 약 절반입니다.',
            },
          },
          {
            '@type': 'Question',
            name: 'Ollama는 최적의 양자화를 자동으로 선택합니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '아니요. ollama run llama3.3:70b는 기본값인 Q4_K_M(43 GB)을 내려받습니다. 다른 수준을 쓰려면 태그를 지정하십시오. 예를 들어 ollama run llama3.3:70b-instruct-q5_K_M 또는 ollama run llama3.3:70b-instruct-q8_0입니다. 로드한 뒤 ollama ps를 실행하면 PROCESSOR 열에서 모델의 얼마만큼이 GPU와 CPU에서 실행되는지 확인할 수 있습니다.',
            },
          },
          {
            '@type': 'Question',
            name: '아이폰이나 노트북으로 70B 모델을 실행할 수 있습니까?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '아이폰은 불가능합니다. 현재 아이폰의 RAM은 8-12 GB인 반면 Q4_K_M 70B 모델에는 약 43 GB가 필요하므로, 휴대폰에서는 1B-8B 모델을 실행합니다. 노트북은 통합 메모리 64 GB 이상(고사양 MacBook Pro 구성) 또는 128 GB를 갖춘 AMD Ryzen AI Max+ 395 시스템에서만 가능합니다. ASUS ROG Strix 같은 VRAM 16-24 GB 게이밍 노트북은 느린 부분 오프로딩 경우에 해당합니다.',
            },
          },
        ],
      },
    },
};
